#!/usr/bin/env python3
"""
Builds a complete architectural module map (`module-map.json`), environment
variables inventory (`schemas/env-vars.json`), tools & commands catalog
(`schemas/tools-and-commands.json`), and extracted system/agent prompts
(`extracted-assets/prompts/system-and-agent-prompts.md`).
"""

import json
import os
import re

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(PROJECT_ROOT, "src")
SCHEMAS_DIR = os.path.join(PROJECT_ROOT, "schemas")
PROMPTS_DIR = os.path.join(PROJECT_ROOT, "extracted-assets", "prompts")


def classify_module(fname, exports, content):
    if fname == "cli" or "cli_entry" in content:
        return "cli-entry"
    exp_str = " ".join(exports).lower()
    if any(k in exp_str for k in ["mcp", "elicitation", "sep2663"]):
        return "mcp"
    if any(k in exp_str for k in ["subagent", "teammate", "fleet", "coordinator", "backgroundsession"]):
        return "subagents-fleet"
    if any(k in exp_str for k in ["permission", "bypass", "sandbox", "trust", "guard"]):
        return "permissions-sandbox"
    if any(k in exp_str for k in ["plugin", "skill", "hook", "marketplace"]):
        return "plugins-hooks-skills"
    if any(k in exp_str for k in ["growthbook", "telemetry", "datadog", "otel", "logevent"]):
        return "telemetry-flags"
    if any(k in exp_str for k in ["oauth", "credential", "keychain", "bedrock", "vertex", "foundry", "model"]):
        return "auth-providers-models"
    if any(k in exp_str for k in ["tool", "bash", "grep", "glob", "webfetch", "websearch"]):
        return "tools"
    if any(k in content for k in ["react.memo_cache_sentinel", "createElement", "useState", "useEffect"]):
        return "ui-tui"
    if len(content) > 50000 and ("messages" in content and "systemPrompt" in content):
        return "agent-loop"
    return "core-or-vendor"


def main():
    modules_info = []
    subsystem_counts = {}
    env_vars = {}
    tools_and_commands = []

    export_block_re = re.compile(r"export\{([^}]+)\}")
    nr_block_re = re.compile(r"Nr\([A-Za-z0-9_$]+,\{([^}]+)\}\)")
    import_re = re.compile(r'(?:from|import|import\(|require\(|Ne\()"(\./[^"]+)"')
    env_re = re.compile(r"\b(CLAUDE_[A-Z0-9_]+|ANTHROPIC_[A-Z0-9_]+)\b")
    tool_desc_re = re.compile(r'name:\s*"([A-Za-z0-9_-]+)"\s*,\s*description:\s*"([^"]+)"')

    for root, _, files in os.walk(SRC_DIR):
        for fname in sorted(files):
            if not (fname.endswith(".js") or fname == "cli"):
                continue
            if fname in ("chart.umd.min.js", "hljsBundle.generated.min.js", "mermaid.min.js"):
                continue
            fpath = os.path.join(root, fname)
            rel_path = os.path.relpath(fpath, SRC_DIR)
            with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()

            exports = []
            for m in export_block_re.finditer(content):
                for item in m.group(1).split(","):
                    item = item.strip()
                    if " as " in item:
                        exports.append(item.split(" as ")[1].strip())
                    elif item:
                        exports.append(item)

            named_reexports = []
            for m in nr_block_re.finditer(content):
                for item in m.group(1).split(","):
                    if ":" in item:
                        k = item.split(":")[0].strip()
                        if k and k.isidentifier():
                            named_reexports.append(k)

            all_exports = sorted(set(exports + named_reexports))
            imports = sorted(set(m.group(1) for m in import_re.finditer(content)))
            subsystem = classify_module(rel_path, all_exports, content)
            subsystem_counts[subsystem] = subsystem_counts.get(subsystem, 0) + 1

            for m in env_re.finditer(content):
                var_name = m.group(1)
                if len(var_name) > 4 and not var_name.endswith("_"):
                    env_vars.setdefault(var_name, set()).add(rel_path)

            for m in tool_desc_re.finditer(content):
                tname, tdesc = m.group(1), m.group(2)
                if len(tname) <= 36 and len(tdesc) > 8 and not tname.startswith("-"):
                    tools_and_commands.append(
                        {"name": tname, "description": tdesc, "defined_in": rel_path}
                    )

            modules_info.append(
                {
                    "path": rel_path,
                    "size_bytes": len(content),
                    "subsystem": subsystem,
                    "exports": all_exports,
                    "imports": imports,
                }
            )

    module_map = {
        "version": "2.1.299",
        "total_js_modules": len(modules_info),
        "subsystem_summary": subsystem_counts,
        "modules": modules_info,
    }
    with open(os.path.join(PROJECT_ROOT, "module-map.json"), "w", encoding="utf-8") as f:
        json.dump(module_map, f, indent=2, ensure_ascii=False)

    env_list = [
        {"name": k, "referenced_in": sorted(list(v))[:10], "reference_count": len(v)}
        for k, v in sorted(env_vars.items())
    ]
    with open(os.path.join(SCHEMAS_DIR, "env-vars.json"), "w", encoding="utf-8") as f:
        json.dump(
            {"total": len(env_list), "variables": env_list},
            f,
            indent=2,
            ensure_ascii=False,
        )

    # Deduplicate tools_and_commands by name
    dedup_tc = {}
    for item in tools_and_commands:
        dedup_tc.setdefault(item["name"], item)
    tc_list = [dedup_tc[k] for k in sorted(dedup_tc.keys())]
    with open(os.path.join(SCHEMAS_DIR, "tools-and-commands.json"), "w", encoding="utf-8") as f:
        json.dump(
            {"total": len(tc_list), "items": tc_list},
            f,
            indent=2,
            ensure_ascii=False,
        )

    # Extract system & orchestrator prompts into a clean Markdown document
    with open(os.path.join(SRC_DIR, "chunk-1qs7jgw6.js"), "r", encoding="utf-8") as f:
        coord_text = f.read()

    with open(os.path.join(SRC_DIR, "chunk-8h81c13v.js"), "r", encoding="utf-8") as f:
        core_tools_text = f.read()

    prompt_md = [
        "# Claude Code v2.1.299 — Extracted System & Orchestrator Prompts",
        "",
        "## 1. Base System Identity Prompts (`src/chunk-gmq0qwep.js`)",
        "",
        "- **Interactive CLI Identity (`el`)**:",
        "  > `You are Claude Code, Anthropic's official CLI for Claude.`",
        "- **SDK Appended Identity (`Bd`)**:",
        "  > `You are Claude Code, Anthropic's official CLI for Claude, running within the Claude Agent SDK.`",
        "- **SDK Default Agent Identity (`Hd`)**:",
        "  > `You are a Claude agent, built on Anthropic's Claude Agent SDK.`",
        "",
        "## 2. Core Built-in Tool Definitions (`src/chunk-8h81c13v.js`)",
        "",
        "| Tool | Description |",
        "| :--- | :--- |",
        "| `bash` | Run a bash command in a persistent shell. State (cwd, env vars) persists across calls. |",
        "| `read` | Read a UTF-8 text file relative to the workdir. |",
        "| `write` | Write a UTF-8 text file relative to the workdir, creating parent directories as needed. |",
        "| `edit` | Replace old_string with new_string in a file. old_string must be unique unless replace_all. |",
        "| `glob` | Match files under the workdir against a glob pattern. Results are mtime-sorted, newest first. |",
        "| `grep` | Search file contents for a regex. Uses ripgrep if available, otherwise a built-in walker. |",
        "",
        "## 3. Coordinator / Multi-Agent Orchestrator Prompt (`src/chunk-1qs7jgw6.js`)",
        "",
        "```javascript",
        coord_text[:4000],
        "```",
    ]
    with open(os.path.join(PROMPTS_DIR, "system-and-agent-prompts.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(prompt_md) + "\n")

    print(
        f"Built module-map.json ({len(modules_info)} modules, subsystems: {subsystem_counts}), "
        f"env-vars.json ({len(env_list)} vars), tools-and-commands.json ({len(tc_list)} items)."
    )


if __name__ == "__main__":
    main()
