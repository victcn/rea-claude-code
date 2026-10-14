#!/usr/bin/env python3
"""
Full-scale end-to-end self-test suite for the reconstructed Claude Code v2.1.299
in ., verifying both http://127.0.0.1:8011 and http://127.0.0.1:8012
as well as all core subsystems, tools, hooks, subagents, sessions, and MCP integration.
"""

import json
import os
import shutil
import subprocess
import sys
import tempfile
import time
import uuid

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CLAUDE_BIN = os.path.join(PROJECT_ROOT, "bin", "claude")
BASE_URL_8011 = "http://127.0.0.1:8011"
BASE_URL_8012 = "http://127.0.0.1:8012"
API_KEY = "sk-selftest-key"
MODEL = "claude-sonnet-4-6"

BASE_ENV = {
    **os.environ,
    "ANTHROPIC_BASE_URL": BASE_URL_8012,
    "ANTHROPIC_API_KEY": API_KEY,
    "ANTHROPIC_AUTH_TOKEN": API_KEY,
    "ANTHROPIC_MODEL": MODEL,
    "ANTHROPIC_DEFAULT_SONNET_MODEL": MODEL,
    "ANTHROPIC_DEFAULT_OPUS_MODEL": MODEL,
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": MODEL,
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
}


def run_claude(args, cwd=PROJECT_ROOT, timeout=120, extra_env=None):
    env = {**BASE_ENV, **(extra_env or {})}
    t0 = time.time()
    proc = subprocess.run(
        [CLAUDE_BIN, *args],
        cwd=cwd,
        env=env,
        stdin=subprocess.DEVNULL,
        capture_output=True,
        text=True,
        timeout=timeout,
    )
    elapsed = time.time() - t0
    return proc.returncode, proc.stdout, proc.stderr, elapsed


results = []


def record(name, passed, detail, elapsed=0.0):
    status = "PASS" if passed else "FAIL"
    results.append({"name": name, "passed": passed, "detail": detail, "elapsed_s": round(elapsed, 2)})
    print(f"[{status}] {name} ({elapsed:.2f}s) -> {detail}", flush=True)


def main():
    print("=" * 80)
    print("Starting Full Self-Test of Reconstructed Claude Code v2.1.299")
    print(f"Binary       : {CLAUDE_BIN}")
    print(f"Endpoints    : {BASE_URL_8011} & {BASE_URL_8012}")
    print("=" * 80)

    # 1. Version & Help
    rc, out, err, dt = run_claude(["--version", "--verbose"], timeout=15)
    ok_ver = rc == 0 and "2.1.299 (Claude Code)" in out and "c416f56ec7eca27e49747c35af51d5c92c856ba1" in out
    record("1. CLI Version & Commit Verification", ok_ver, out.strip().replace("\n", " | "), dt)

    rc, out, err, dt = run_claude(["--help"], timeout=15)
    ok_help = rc == 0 and "Usage: claude [options] [command] [prompt]" in out and "ultrareview" in out
    record("2. CLI Help & Subcommands Inventory", ok_help, f"Help output length={len(out)} chars", dt)

    # 2. Direct Connectivity on Port 8011 (http://127.0.0.1:8011)
    rc, out, err, dt = run_claude(
        ["--bare", "--setting-sources", "", "-p", "--", "Reply with ONLY the exact word: PONG_8011"],
        timeout=60,
        extra_env={"ANTHROPIC_BASE_URL": BASE_URL_8011},
    )
    ok_8011 = rc == 0 and "PONG_8011" in out
    record(
        "3. Port 8011 Gateway End-to-End Call (http://127.0.0.1:8011)",
        ok_8011,
        f"output={out.strip()[:80]!r}",
        dt,
    )

    # 3. Built-in Function-Hook Plugins Loading + Port 8012 Connectivity
    rc, out, err, dt = run_claude(
        ["--setting-sources", "", "-d2e", "-p", "--", "Reply with ONLY the exact word: PONG_8012"],
        timeout=60,
        extra_env={"ANTHROPIC_BASE_URL": BASE_URL_8012},
    )
    hooks_ok = (
        "hooks module cc-plugin-agents-md@builtin loaded" in err
        and "hooks module cc-plugin-agents-md@builtin turn.complete settled" in err
        and "failed to load" not in err
    )
    text_ok = rc == 0 and "PONG_8012" in out
    record(
        "4. Port 8012 Claude Protocol Gateway + Built-in Hook Plugins Lifecycle",
        hooks_ok and text_ok,
        f"hooks_lifecycle_ok={hooks_ok}, output={out.strip()[:80]!r}",
        dt,
    )

    # 4. JSON & Stream-JSON Output Formats + Custom System Prompt
    rc, out, err, dt = run_claude(
        [
            "--bare",
            "--setting-sources",
            "",
            "-p",
            "--output-format",
            "json",
            "--system-prompt",
            "Always include the token SYS_PROMPT_ACTIVE in your reply.",
            "--",
            "Say hello in one short line.",
        ],
        timeout=60,
    )
    try:
        jdata = json.loads(out.strip().splitlines()[-1])
        json_ok = (
            rc == 0
            and jdata.get("type") == "result"
            and jdata.get("subtype") == "success"
            and "SYS_PROMPT_ACTIVE" in jdata.get("result", "")
        )
        detail = f"subtype={jdata.get('subtype')}, result={jdata.get('result', '')[:60]!r}"
    except Exception as e:
        json_ok = False
        detail = f"JSON parse failed: {e} | out={out[:120]!r}"
    record("5. JSON Output Format & Custom --system-prompt", json_ok, detail, dt)

    rc, out, err, dt = run_claude(
        [
            "--bare",
            "--setting-sources",
            "",
            "-p",
            "--output-format",
            "stream-json",
            "--verbose",
            "--include-partial-messages",
            "--",
            "Reply with STREAM_OK",
        ],
        timeout=60,
    )
    lines = [l for l in out.strip().splitlines() if l.strip().startswith("{")]
    event_types = set()
    for l in lines:
        try:
            event_types.add(json.loads(l).get("type"))
        except Exception:
            pass
    stream_ok = rc == 0 and {"system", "assistant", "result"}.issubset(event_types)
    record(
        "6. Realtime Stream-JSON Output (--output-format stream-json --include-partial-messages)",
        stream_ok,
        f"frames={len(lines)}, event_types={sorted(event_types)}",
        dt,
    )

    # 5. Core Tools End-to-End (Write, Read, Edit, Glob, Grep, Bash) in isolated workspace
    work_dir = tempfile.mkdtemp(prefix="claude-selftest-")
    try:
        seed_file = os.path.join(work_dir, "calc.py")
        with open(seed_file, "w", encoding="utf-8") as f:
            f.write("def add(a, b):\n    return a - b  # BUG_MARKER\n")

        prompt = (
            "In the current directory:\n"
            "1. Use Glob or Grep to find BUG_MARKER in calc.py and Read calc.py.\n"
            "2. Use Edit to fix `return a - b` to `return a + b` in calc.py.\n"
            "3. Use Write to create `verify.py` that imports `add` from `calc` and prints `CALC_RESULT=` followed by `add(19, 23)`.\n"
            "4. Use Bash to run `python3 verify.py` and report the output."
        )
        rc, out, err, dt = run_claude(
            [
                "--bare",
                "--setting-sources",
                "",
                "-p",
                "--permission-mode",
                "acceptEdits",
                "--allowedTools",
                "Read,Write,Edit,Glob,Grep,Bash",
                "--",
                prompt,
            ],
            cwd=work_dir,
            timeout=120,
        )
        with open(seed_file, "r", encoding="utf-8") as f:
            fixed_code = f.read()
        verify_exists = os.path.exists(os.path.join(work_dir, "verify.py"))
        tools_ok = (
            rc == 0
            and "return a + b" in fixed_code
            and verify_exists
            and "42" in out
        )
        record(
            "7. Core Built-in Tools End-to-End (Glob, Grep, Read, Edit, Write, Bash)",
            tools_ok,
            f"calc.py_fixed={'return a + b' in fixed_code}, verify.py_created={verify_exists}, output_has_42={'42' in out}",
            dt,
        )

        # 6. Session Persistence & Multi-Turn Resume (--session-id & --resume)
        sess_id = str(uuid.uuid4())
        secret_code = "OMEGA_9482_VAULT"
        rc1, out1, err1, dt1 = run_claude(
            [
                "--bare",
                "--setting-sources",
                "",
                "-p",
                "--session-id",
                sess_id,
                "--",
                f"Remember this exact secret code for the next turn: {secret_code}. Reply STORED.",
            ],
            cwd=work_dir,
            timeout=60,
        )
        rc2, out2, err2, dt2 = run_claude(
            [
                "--bare",
                "--setting-sources",
                "",
                "-p",
                "--resume",
                sess_id,
                "--",
                "What was the exact secret code I asked you to remember in the previous turn?",
            ],
            cwd=work_dir,
            timeout=60,
        )
        resume_ok = rc1 == 0 and rc2 == 0 and secret_code in out2
        record(
            "8. Session Persistence & Multi-Turn Resume (--session-id / --resume)",
            resume_ok,
            f"session_id={sess_id}, recalled={secret_code in out2}, reply={out2.strip()[:60]!r}",
            dt1 + dt2,
        )

        # 7. Custom Subagents (--agents) Delegation
        agents_json = json.dumps(
            {
                "security-auditor": {
                    "description": "Specialized auditor that must be delegated to when auditing",
                    "prompt": "You are the security-auditor subagent. Always reply with the exact token: SUBAGENT_AUDIT_PASSED_777",
                }
            }
        )
        rc, out, err, dt = run_claude(
            [
                "--setting-sources",
                "",
                "-p",
                "--permission-mode",
                "default",
                "--tools",
                "Agent",
                "--agents",
                agents_json,
                "--allowedTools",
                "Agent",
                "--",
                "Use the Agent tool to delegate a task to the `security-auditor` subagent and return its exact token.",
            ],
            cwd=work_dir,
            timeout=120,
        )
        subagent_ok = rc == 0 and "SUBAGENT_AUDIT_PASSED_777" in out
        record(
            "9. Custom Subagent Delegation (--agents & Agent Tool)",
            subagent_ok,
            f"subagent_reply={out.strip()[:80]!r}",
            dt,
        )

        # 8. MCP Server Integration (--mcp-config)
        mcp_server_script = os.path.join(work_dir, "mcp_server.mjs")
        with open(mcp_server_script, "w", encoding="utf-8") as f:
            f.write(
                """import readline from "node:readline";
const rl = readline.createInterface({ input: process.stdin, terminal: false });
rl.on("line", (line) => {
  if (!line.trim()) return;
  const msg = JSON.parse(line);
  if (msg.method === "initialize") {
    process.stdout.write(JSON.stringify({
      jsonrpc: "2.0",
      id: msg.id,
      result: {
        protocolVersion: "2024-11-05",
        capabilities: { tools: {} },
        serverInfo: { name: "selftest-mcp", version: "1.0.0" }
      }
    }) + "\\n");
  } else if (msg.method === "tools/list") {
    process.stdout.write(JSON.stringify({
      jsonrpc: "2.0",
      id: msg.id,
      result: {
        tools: [{
          name: "get_magic_signature",
          description: "Returns the magic signature for self-test verification",
          inputSchema: { type: "object", properties: { seed: { type: "string" } } }
        }]
      }
    }) + "\\n");
  } else if (msg.method === "tools/call") {
    const seed = msg.params?.arguments?.seed || "default";
    process.stdout.write(JSON.stringify({
      jsonrpc: "2.0",
      id: msg.id,
      result: {
        content: [{ type: "text", text: `MCP_SIGNATURE_VERIFIED_${seed}` }]
      }
    }) + "\\n");
  } else if (msg.id !== undefined) {
    process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id: msg.id, result: {} }) + "\\n");
  }
});
"""
            )
        mcp_config_json = json.dumps(
            {
                "mcpServers": {
                    "selftest": {
                        "type": "stdio",
                        "command": "bun",
                        "args": ["run", mcp_server_script],
                        "alwaysLoad": True,
                    }
                }
            }
        )
        rc, out, err, dt = run_claude(
            [
                "--bare",
                "--setting-sources",
                "",
                "-p",
                "--strict-mcp-config",
                "--mcp-config",
                mcp_config_json,
                "--allowedTools",
                "mcp__selftest__get_magic_signature",
                "--",
                'Call the `mcp__selftest__get_magic_signature` tool with seed="2026" and return its exact output.',
            ],
            cwd=work_dir,
            timeout=90,
        )
        mcp_ok = rc == 0 and "MCP_SIGNATURE_VERIFIED_2026" in out
        record(
            "10. Stdio MCP Server Integration (--mcp-config & Tool Execution)",
            mcp_ok,
            f"mcp_output={out.strip()[:80]!r}",
            dt,
        )

        # 9. Security & Permission Guardrails (Root bypass check)
        rc, out, err, dt = run_claude(
            ["--dangerously-skip-permissions", "-p", "--", "Hello"],
            cwd=work_dir,
            timeout=15,
        )
        guard_ok = rc != 0 and "--dangerously-skip-permissions cannot be used with root/sudo privileges" in err
        record(
            "11. Root Privilege Bypass Security Guard (refuseBypassUnderRoot)",
            guard_ok,
            f"exit_code={rc}, stderr={err.strip()[:80]!r}",
            dt,
        )

    finally:
        shutil.rmtree(work_dir, ignore_errors=True)

    # Summary
    passed_count = sum(1 for r in results if r["passed"])
    total_count = len(results)
    print("=" * 80)
    print(f"Self-Test Summary: {passed_count}/{total_count} Passed")
    print("=" * 80)

    report_path = os.path.join(PROJECT_ROOT, "self-test-report.json")
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(
            {
                "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "endpoints_tested": [BASE_URL_8011, BASE_URL_8012],
                "passed": passed_count,
                "total": total_count,
                "results": results,
            },
            f,
            indent=2,
            ensure_ascii=False,
        )
    if passed_count != total_count:
        sys.exit(1)


if __name__ == "__main__":
    main()
