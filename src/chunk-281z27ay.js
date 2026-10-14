// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { l, E } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { xu, Uft, pVn, Kft } from "./chunk-8yperama.js";

import { _, Y, ds, t } from "./chunk-kawq2919.js";

import { I, Br } from "./chunk-5wbhf1bk.js";

import { fu } from "./chunk-1z2heevg.js";

import { Wu, $dt, Fdt, Udt } from "./chunk-n8c3367k.js";

import { M6, dJ } from "./chunk-2a66xf4d.js";

import { ud } from "./chunk-rgd61mm3.js";

import { D1r, Fge } from "./chunk-40h7c36f.js";

import { ar } from "./chunk-nnrb0acr.js";

import { dt } from "./chunk-dd98x6x7.js";

import { nSo } from "./chunk-3zb1ef23.js";

import { bHt } from "./chunk-yk8mtyzg.js";

import { Rbr } from "./chunk-r8a304y3.js";

import { thn } from "./chunk-v8kk908e.js";

import { shn } from "./chunk-gdhpc1ag.js";

import { ihn } from "./chunk-7kv38428.js";

import { zs } from "./chunk-vjmbaret.js";

import { Is } from "./chunk-p35rdtee.js";

import { O } from "./chunk-1xnsr4dy.js";

import { N } from "./chunk-hmqkrrtz.js";

import { createHash as De } from "crypto";

import { lstat as ie, mkdtemp as Re, rm as Ie, writeFile as se } from "fs/promises";

import { join as G } from "path";

import { spawn as pe } from "child_process";

import { createWriteStream as me } from "fs";

import { rm as _e } from "fs/promises";

import { dirname as Ee, join as te } from "path";

import { createInterface as oe } from "readline";

function re(n) {
  let e = {
    ...n.autoOverSettings && {
      permissions: {
        defaultMode: "auto"
      }
    },
    ...n.autoCompact && {
      autoCompactEnabled: !0
    },
    ...n.autoModeEnvironment.length > 0 && {
      autoMode: {
        environment: n.autoModeEnvironment
      }
    }
  };
  return Object.keys(e).length > 0 ? _(e) : void 0;
}

var Se = 10, ve = 10, Ce = 36e5;

function vjt(n) {
  return n.replace(/[^a-zA-Z0-9_-]/g, "_");
}

var he = {
  Read: "Reading",
  Write: "Writing",
  Edit: "Editing",
  MultiEdit: "Editing",
  Bash: "Running",
  Glob: "Searching",
  Grep: "Searching",
  WebFetch: "Fetching",
  WebSearch: "Searching",
  Task: "Running task",
  FileReadTool: "Reading",
  FileWriteTool: "Writing",
  FileEditTool: "Editing",
  GlobTool: "Searching",
  GrepTool: "Searching",
  BashTool: "Running",
  NotebookEditTool: "Editing notebook",
  LSP: "LSP"
};

function Ae(n, e, s, r, o) {
  let a = he[n] ?? n, d = e.file_path ?? e.filePath ?? e.pattern ?? e.command?.slice(0, 60) ?? e.url ?? e.query ?? "";
  if (d) return `${a} ${d}`;
  return a;
}

function ye(n, e, s, r, o) {
  let a;
  try {
    a = Y(n);
  } catch {
    return [];
  }
  if (!a || typeof a !== "object") return [];
  let d = a, p = [], S = Date.now();
  switch (d.type) {
   case "assistant":
    {
      let y = d.message;
      if (!y) break;
      let h = y.content;
      if (!Array.isArray(h)) break;
      for (let R of h) {
        if (!R || typeof R !== "object") continue;
        let A = R;
        if (A.type === "tool_use") {
          let T = A.name ?? "Tool", D = A.input ?? {}, U = Ae(T, D, r, p, o);
          if (U !== void 0) p.push({
            type: "tool_start",
            summary: U,
            timestamp: S
          });
          s(`[bridge:activity] sessionId=${e} tool_use name=${T} ${we(D)}`);
        } else if (A.type === "text") {
          let T = A.text ?? "";
          if (T.length > 0) p.push({
            type: "text",
            summary: T.slice(0, 80),
            timestamp: S
          }), s(`[bridge:activity] sessionId=${e} text "${T.slice(0, 100)}"`);
        }
      }
      break;
    }

   case "result":
    {
      let y = d.subtype;
      if (y === "success") p.push({
        type: "result",
        summary: "Session completed",
        timestamp: S
      }), s(`[bridge:activity] sessionId=${e} result subtype=success`); else if (y) {
        let R = d.errors?.[0] ?? `Error: ${y}`;
        p.push({
          type: "error",
          summary: R,
          timestamp: S
        }), s(`[bridge:activity] sessionId=${e} result subtype=${y} error="${R}"`);
      } else s(`[bridge:activity] sessionId=${e} result subtype=undefined`);
      break;
    }

   default:
    break;
  }
  return p;
}

function be(n) {
  if (n.parent_tool_use_id != null || n.isSynthetic || n.isReplay) return;
  let s = n.message?.content, r;
  if (typeof s === "string") r = s; else if (Array.isArray(s)) {
    for (let o of s) if (o && typeof o === "object" && o.type === "text") {
      r = o.text;
      break;
    }
  }
  return r = r?.trim(), r ? r : void 0;
}

function we(n) {
  let e = [];
  for (let [s, r] of Object.entries(n)) {
    if (typeof r === "string") e.push(`${s}="${r.slice(0, 100)}"`);
    if (e.length >= 3) break;
  }
  return e.join(" ");
}

function v1r(n) {
  return {
    spawn(e, s) {
      let r = vjt(e.sessionId), o;
      if (n.debugFile) {
        let u = n.debugFile.lastIndexOf(".");
        if (u > 0) o = `${n.debugFile.slice(0, u)}-${r}${n.debugFile.slice(u)}`; else o = `${n.debugFile}-${r}`;
      } else if (n.verbose) o = te(ud(), `bridge-session-${r}.log`);
      let a = shn({
        roles: e.roles,
        modePinned: n.permissionMode !== void 0,
        settings: () => (ar(), dt())
      }), {autoDefault: d, autoOverSettings: p, artifact: S, machineSettings: y} = a, h = null, R;
      if (n.debugFile) R = te(Ee(n.debugFile), `bridge-transcript-${r}.jsonl`), h = me(R, {
        flags: "a"
      }), h.on("error", u => {
        n.onDebug(`[bridge:session] Transcript write error: ${u.message}`), h = null;
      }), n.onDebug(`[bridge:session] Transcript log: ${R}`);
      let A = [ ...n.scriptArgs, "--print", "--sdk-url", e.sdkUrl, "--session-id", e.sessionId, "--input-format", "stream-json", "--output-format", "stream-json", "--replay-user-messages", `--resume=${e.sdkUrl}`, ...n.verbose ? [ "--verbose" ] : [], ...o ? [ "--debug-file", o ] : [], ...n.permissionMode ? [ "--permission-mode", n.permissionMode ] : [], ...n.chrome === void 0 ? [] : [ n.chrome ? "--chrome" : "--no-chrome" ] ], T = A.length, D = e.serverConfig, U = D?.autoModeEnvironment ?? [], B = re({
        autoOverSettings: p,
        autoCompact: a.autoCompact,
        autoModeEnvironment: U
      });
      if (B !== void 0) A.push(`--settings=${B}`);
      let ge = A.length, L = D?.mcpConfig;
      if (L) A.push(`--mcp-config=${L.path}`);
      if (D?.appendSystemPrompt) A.push(`--append-system-prompt-file=${D.appendSystemPrompt.path}`);
      if (D) A.push(...D.extraArgs);
      let H = A.length - ge;
      A.push(...e.modelArgs);
      let K = D?.dir, j = () => {
        let u = K;
        return K = void 0, u ? _e(u, {
          recursive: !0,
          force: !0
        }).catch(() => {}) : Promise.resolve();
      }, V = n.ownerIdentity, J = {
        CLAUDE_CODE_OAUTH_TOKEN: void 0,
        CLAUDE_CODE_ENVIRONMENT_KIND: "bridge",
        CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT: void 0,
        CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT: void 0,
        CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS: void 0,
        ...n.sandbox && {
          CLAUDE_CODE_FORCE_SANDBOX: "1"
        },
        CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.accessToken,
        CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID: V?.accountUuid,
        CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID: V?.organizationUuid,
        CLAUDE_CODE_BRIDGE_SOURCE_DIR: e.sourceDir,
        CLAUDE_CODE_BRIDGE_MCP_CARRIER: D ? "1" : void 0,
        CLAUDE_CODE_BRIDGE_PROMPT_SHA256: D?.appendSystemPrompt?.sha256,
        CLAUDE_CODE_WORKER_EPOCH: String(e.workerEpoch),
        CLAUDE_CODE_RESUME_INTERRUPTED_TURN: e.workerEpoch > 1 ? "1" : void 0,
        CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS: e.workerEpoch > 1 && e.boundResumedTurn ? String(Ce) : void 0,
        CLAUDE_CODE_RESUME_FROM_SESSION: void 0,
        CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR: void 0,
        CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR: void 0,
        CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR: void 0,
        CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR: void 0,
        CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR: void 0,
        CLAUDE_BG_AUTH_SNAPSHOT_PATH: void 0,
        CLAUDE_CODE_ACCOUNT_UUID: void 0,
        CLAUDE_CODE_ORGANIZATION_UUID: void 0,
        CLAUDE_CODE_USER_EMAIL: void 0,
        CCR_SESSION_ACCOUNT_EMAIL: void 0,
        SESSION_INGRESS_URL: L ? L.ingressUrl : void 0,
        CLAUDE_CODE_EXIT_AFTER_STOP_DELAY: e.idleExitAfterMs > 0 ? String(e.idleExitAfterMs) : void 0
      }, M = {
        ...n.env,
        ...Object.fromEntries(Fge.map(u => [ u, void 0 ])),
        ...Object.fromEntries(D1r.map(u => [ u, n.env[u] ])),
        ...J
      }, X = new Set([ ...Fge, ...Object.keys(J) ]);
      for (let u of Object.keys(M)) if (!X.has(u) && X.has(u.toUpperCase())) delete M[u];
      if (dJ(M), M6(M), d) M.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT = "1";
      if (S) M.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT = "1";
      if (y) M.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS = "1";
      if (n.onDebug(`[bridge:session] Spawning sessionId=${e.sessionId} sdkUrl=${e.sdkUrl} accessToken=${e.accessToken ? "present" : "MISSING"}`), 
      n.onDebug(`[bridge:session] Child args: ${A.slice(0, T).join(" ")}${B !== void 0 ? ` (+settings: auto=${p}, facts=${U.length})` : ""}${H > 0 ? ` (+${H} server-config args, mcpConfig=${L ? "present" : "unset"}, appendPrompt=${D?.appendSystemPrompt ? "present" : "unset"})` : ""}${e.modelArgs.length > 0 ? ` (+${e.modelArgs.length} model args)` : ""}`), 
      o) n.onDebug(`[bridge:session] Debug log: ${o}`);
      let v;
      try {
        v = pe(n.execPath, A, {
          cwd: s,
          stdio: [ "pipe", "pipe", "pipe" ],
          env: M,
          windowsHide: !0
        });
      } catch (u) {
        throw j(), u;
      }
      n.onDebug(`[bridge:session] sessionId=${e.sessionId} pid=${v.pid}`);
      let k = [], ue = void 0, q = null, x = [], z = !1, Z = !1, Q = !1;
      if (v.stderr) oe({
        input: v.stderr
      }).on("line", C => {
        if (C.startsWith(bHt)) {
          let P = Br(C.slice(bHt.length));
          if (n.onChildWarning) n.onChildWarning(e.sessionId, P); else process.stderr.write(bHt + P + `\n`);
          return;
        }
        if (n.verbose) process.stderr.write(C + `\n`);
        if (x.length >= ve) x.shift();
        x.push(C);
      });
      if (v.stdout) oe({
        input: v.stdout
      }).on("line", C => {
        if (h) h.write(C + `\n`);
        if (n.onDebug(`[bridge:ws] sessionId=${e.sessionId} <<< ${nSo(C)}`), n.verbose) process.stderr.write(C + `\n`);
        let P = ye(C, e.sessionId, n.onDebug, k, ue);
        for (let w of P) {
          if (k.length >= Se) k.shift();
          k.push(w), q = w, n.onActivity?.(e.sessionId, w), e.onActivity?.(w);
        }
        if (!Q && e.onFirstUserMessage) {
          let w;
          try {
            w = Y(C);
          } catch {}
          if (w && typeof w === "object") {
            let ee = w;
            if (ee.type === "user") {
              let ne = be(ee);
              if (ne) Q = !0, e.onFirstUserMessage(ne);
            }
          }
        }
      });
      let fe = new Promise(u => {
        v.on("close", (C, P) => {
          if (h) h.end(), h = null;
          let w;
          if (P === "SIGTERM" || P === "SIGINT" || Z && C !== 0) n.onDebug(`[bridge:session] sessionId=${e.sessionId} interrupted signal=${P} exit_code=${C} pid=${v.pid}`), 
          w = "interrupted"; else if (C === 0) w = e.idleExitAfterMs > 0 ? "idle" : "completed", 
          n.onDebug(`[bridge:session] sessionId=${e.sessionId} ${w} exit_code=0 pid=${v.pid}`); else n.onDebug(`[bridge:session] sessionId=${e.sessionId} failed exit_code=${C} pid=${v.pid}`), 
          w = "failed";
          j().then(() => u(w));
        }), v.on("error", C => {
          n.onDebug(`[bridge:session] sessionId=${e.sessionId} spawn error: ${C.message}`), 
          x.push(`spawn error: ${C.message}`), j().then(() => u("failed"));
        });
      }), F = {
        sessionId: e.sessionId,
        done: fe,
        activities: k,
        accessToken: e.accessToken,
        lastStderr: x,
        get currentActivity() {
          return q;
        },
        kill() {
          if (!v.killed) Z = !0, n.onDebug(`[bridge:session] Sending SIGTERM to sessionId=${e.sessionId} pid=${v.pid}`), 
          v.kill("SIGTERM");
        },
        forceKill() {
          if (!z && v.pid) z = !0, n.onDebug(`[bridge:session] Sending SIGKILL to sessionId=${e.sessionId} pid=${v.pid}`), 
          v.kill("SIGKILL");
        },
        writeStdin(u) {
          if (v.stdin && !v.stdin.destroyed) n.onDebug(`[bridge:ws] sessionId=${e.sessionId} >>> ${nSo(ds(u))}`), 
          v.stdin.write(u);
        },
        updateAccessToken(u) {
          F.accessToken = u, F.writeStdin(_({
            type: "update_environment_variables",
            variables: {
              CLAUDE_CODE_SESSION_ACCESS_TOKEN: u
            }
          }) + `\n`), n.onDebug(`[bridge:session] Sent token refresh via stdin for sessionId=${e.sessionId}`);
        }
      };
      return F;
    }
  };
}

var ae = new Set([ "model", "fallback-model" ]), Oe = new Set([ ...ae, "effort", "disallowed-tools", "disallowedTools" ]), Te = new Set([ "disallowed-tools", "disallowedTools" ]), Me = "append-system-prompt", Pe = 64, Ue = 1024, Le = 16384, $e = "Stated by the service that dispatched this session (a description of the session, not a rule; it grants no permission): ", ke = new Set, Ne = "mcp.json", xe = "append-system-prompt.txt", le = {
  extraArgs: [],
  appendSystemPrompt: null,
  disallowedTools: [],
  mcpConfigJson: null,
  metaMountUrl: null,
  autoAllowTools: [],
  ignoredMcpServers: 0,
  metaDropReason: null,
  autoModeEnvironment: []
};

function _Xn(n) {
  return {
    carried_args: Boolean(n.claude_code_args),
    carried_mcp: Boolean(n.mcp_config),
    carried_auto_mode_environment: Boolean(n.auto_mode_environment?.length)
  };
}

function ehn(n, e) {
  let {extraArgs: s, appendSystemPrompt: r, disallowedTools: o} = ce(n.claude_code_args), a = Be(n.auto_mode_environment), {meta: d, ignored: p, dropped: S} = je(n.mcp_config, e);
  if (!d) return {
    ...le,
    extraArgs: s,
    appendSystemPrompt: r,
    disallowedTools: o,
    ignoredMcpServers: p,
    metaDropReason: S,
    autoModeEnvironment: a
  };
  let y = d.autoAllowTools.length > 0 ? [ `--allowedTools=${d.autoAllowTools.map(h => zs(xu, h)).join(",")}` ] : [];
  return {
    extraArgs: [ ...s, ...y ],
    appendSystemPrompt: r,
    disallowedTools: o,
    mcpConfigJson: d.json,
    metaMountUrl: d.url,
    autoAllowTools: d.autoAllowTools,
    ignoredMcpServers: p,
    metaDropReason: null,
    autoModeEnvironment: a
  };
}

function Be(n = []) {
  let e = [], s = 0;
  for (let o of n) {
    if (o.trim().length === 0 || [ ...o ].length > Ue || o === Wu || $dt(o) || Fdt(o) || Udt(o) !== null || e.length >= Pe) continue;
    let a = $e + o, d = s + _(a).length + 1;
    if (d > Le) continue;
    s = d, e.push(a);
  }
  let r = n.length - e.length;
  if (r > 0) t(`[bridge:server-config] dropped ${r} auto_mode_environment ${I(r, "entry", "entries")} (empty, over the caps, control, invisible or template characters, or the defaults marker)`, {
    level: "warn"
  });
  return e;
}

function ce(n) {
  if (!n) return {
    extraArgs: [],
    appendSystemPrompt: null,
    disallowedTools: []
  };
  let e = {}, s = null, r = [], o = 0;
  for (let [p, S] of Object.entries(n)) if (Oe.has(p)) {
    if (e[p] = S, Te.has(p) && typeof S === "string") r.push(...fu([ S ]));
  } else if (p === Me) s = typeof S === "string" && S ? S : null; else o++;
  let a = [], d = ihn(a, e, ke, p => t(`[bridge:server-config] skipped ${p} claude_code_arg`));
  return t(`[bridge:server-config] claude_code_args applied=${d} append_prompt=${s ? "present" : "unset"} disallowed_tools=${r.length} not_allowlisted=${o}`), 
  {
    extraArgs: a,
    appendSystemPrompt: s,
    disallowedTools: r
  };
}

function zGo(n) {
  let e = n?.model;
  return typeof e === "string" && e !== "" ? e : void 0;
}

function GGo(n) {
  let e = n?.effort;
  return typeof e === "string" && e !== "" ? e : void 0;
}

function VGo(n) {
  if (!n) return [];
  let e = Is(n, (s, r) => ae.has(r));
  return ce(e).extraArgs;
}

function je(n, e) {
  if (!n) return {
    meta: null,
    ignored: 0,
    dropped: null
  };
  let s = Fe(n.content);
  if (!s) return {
    meta: null,
    ignored: 0,
    dropped: "undecodable"
  };
  let r = N(Object.keys(s), y => y !== xu);
  if (r > 0) t(`[bridge:server-config] ignoring ${r} other server(s) in mcp_config (only ${xu} is honored)`);
  let o = s[xu];
  if (o === void 0) return t("[bridge:server-config] mcp_config carries no meta entry"), 
  {
    meta: null,
    ignored: r,
    dropped: "no_meta_entry"
  };
  if (o === null || typeof o !== "object" || !("type" in o) || o.type !== "http" || !("url" in o) || typeof o.url !== "string") return t("[bridge:server-config] meta entry is not http", {
    level: "warn"
  }), {
    meta: null,
    ignored: r,
    dropped: "not_http"
  };
  let a = Kft(e.apiBaseUrl);
  if (!a) return t("[bridge:server-config] apiBaseUrl is not a trusted ingress origin; dropping meta entry", {
    level: "warn"
  }), {
    meta: null,
    ignored: r,
    dropped: "untrusted_origin"
  };
  let d = pVn(o.url, a, e.sessionId);
  if (!d) return t("[bridge:server-config] meta url is not this session's meta proxy route on the bridge origin", {
    level: "warn"
  }), {
    meta: null,
    ignored: r,
    dropped: "route_mismatch"
  };
  let p = thn(o);
  if (!p) return {
    meta: null,
    ignored: r,
    dropped: "bad_tools"
  };
  return {
    meta: {
      json: _({
        mcpServers: {
          [xu]: Uft(d, e.sessionId)
        }
      }),
      url: d,
      autoAllowTools: p
    },
    ignored: r,
    dropped: null
  };
}

function Fe(n) {
  let e;
  try {
    e = Y(Buffer.from(n, "base64").toString("utf8"));
  } catch {
    return t("[bridge:server-config] mcp_config did not decode", {
      level: "warn"
    }), null;
  }
  if (e === null || typeof e !== "object" || !("mcpServers" in e) || e.mcpServers === null || typeof e.mcpServers !== "object" || Array.isArray(e.mcpServers)) return t("[bridge:server-config] mcp_config has no mcpServers", {
    level: "warn"
  }), null;
  return e.mcpServers;
}

async function Ge() {
  let {autoModeConfigSchema: n, getSettingsFilePathForSource: e, getSettingsForSource: s} = await import("./chunk-tnx47z70.js"), {parseSettingsFileUncached: r} = await import("./chunk-6w116sxm.js"), o = n(), a = e("userSettings");
  return a !== void 0 && de(o, r(a).settings) || de(o, s("policySettings"));
}

function de(n, e) {
  let s = n.safeParse(e?.autoMode);
  return s.success && (s.data?.environment?.length ?? 0) > 0;
}

async function We(n, e) {
  let s = n.autoModeEnvironment.length === 0 ? void 0 : e.userAutoModeEnvironmentConfigured ? n.autoModeEnvironment : [ Wu, ...n.autoModeEnvironment ];
  if (!n.mcpConfigJson && !n.appendSystemPrompt) return n.extraArgs.length > 0 || s !== void 0 ? {
    extraArgs: n.extraArgs,
    autoModeEnvironment: s
  } : void 0;
  let r = await He(e.sessionId);
  try {
    let o;
    if (n.mcpConfigJson) {
      let d = G(r, Ne);
      await se(d, n.mcpConfigJson, {
        flag: "wx",
        mode: 384
      }), o = {
        path: d,
        ingressUrl: e.apiBaseUrl
      };
    }
    let a;
    if (n.appendSystemPrompt) {
      let d = G(r, xe), p = Buffer.from(n.appendSystemPrompt, "utf8");
      await se(d, p, {
        flag: "wx",
        mode: 384
      }), a = {
        path: d,
        sha256: De("sha256").update(p).digest("hex")
      };
    }
    return {
      extraArgs: n.extraArgs,
      dir: r,
      mcpConfig: o,
      appendSystemPrompt: a,
      autoModeEnvironment: s
    };
  } catch (o) {
    throw await W(r), o;
  }
}

async function He(n) {
  for (let e = 0; ;e++) try {
    let s = await Rbr(), r = await ie(s);
    if (!r.isDirectory()) throw Error("bridge spawn root is not a directory");
    if (O() !== "windows") {
      if (typeof process.getuid === "function" && r.uid !== process.getuid() || (r.mode & 63) !== 0) throw Error("bridge spawn root has unexpected owner or mode");
    }
    let o = await Re(G(s, `${vjt(n)}-`)), a = await ie(s).catch(() => null);
    if (a?.dev !== r.dev || a.ino !== r.ino) throw await W(o), Error("bridge spawn root changed identity during mkdtemp");
    return o;
  } catch (s) {
    if (e > 0 || E(s) !== "ENOENT") throw s;
  }
}

async function W(n) {
  await Ie(n, {
    recursive: !0,
    force: !0
  }).catch(() => {});
}

async function KGo(n) {
  if (n?.dir) await W(n.dir);
}

function E1r(n, e) {
  t(`[bridge:server-config] not applied sessionId=${n}: gate_off (tengu_bridge_apply_server_session_config=false)`, {
    level: "warn"
  }), i("tengu_bridge_server_config_rejected", {
    ...e,
    reason: b("gate_off")
  }), f("bridge_server_session_config", "gate_off", e);
}

async function qGo(n, e) {
  let s = _Xn(n);
  if (!Object.values(s).some(Boolean)) return;
  if (!e.enabled) {
    E1r(e.sessionId, s);
    return;
  }
  let r = le, o, a;
  try {
    r = ehn(e.dropAutoModeEnvironment === void 0 ? n : {
      ...n,
      auto_mode_environment: void 0
    }, e);
    let S = r.autoModeEnvironment.length > 0 && e.userAutoModeEnvironmentConfigured === void 0 ? {
      ...e,
      userAutoModeEnvironmentConfigured: await Ge()
    } : e;
    o = await We(r, S);
  } catch (S) {
    a = l(S);
  }
  let d = {
    ...s,
    extra_args: r.extraArgs.length,
    append_prompt: r.appendSystemPrompt !== null,
    meta_mcp: r.mcpConfigJson !== null,
    auto_allow: r.autoAllowTools.length,
    auto_mode_environment: r.autoModeEnvironment.length,
    ...e.dropAutoModeEnvironment !== void 0 && {
      auto_mode_environment_drop: c(e.dropAutoModeEnvironment)
    },
    ignored_mcp: r.ignoredMcpServers,
    ...r.metaDropReason !== null && {
      meta_drop: c(r.metaDropReason)
    }
  };
  if (a !== void 0) {
    t(`[bridge:server-config] not applied sessionId=${e.sessionId}: ${a}`, {
      level: "warn"
    }), i("tengu_bridge_server_config_rejected", {
      ...d,
      reason: b("prepare_failed")
    }), m("bridge_server_session_config", "prepare_failed", d);
    return;
  }
  if (!o) {
    t(`[bridge:server-config] nothing applied sessionId=${e.sessionId}: every carried value was rejected`, {
      level: "warn"
    }), i("tengu_bridge_server_config_rejected", {
      ...d,
      reason: b("nothing_applied")
    }), f("bridge_server_session_config", "nothing_applied", d);
    return;
  }
  let p = r.mcpConfigJson ? "present" : r.metaDropReason ? `dropped:${r.metaDropReason}` : "unset";
  if (t(`[bridge:server-config] applied sessionId=${e.sessionId} args=${r.extraArgs.length} appendPrompt=${r.appendSystemPrompt ? "present" : "unset"} metaMcp=${p} autoAllow=${r.autoAllowTools.length} autoModeEnvironment=${r.autoModeEnvironment.length}`, {
    level: r.metaDropReason ? "warn" : "debug"
  }), i("tengu_bridge_server_config_applied", d), r.metaDropReason !== null) f("bridge_server_session_config", "meta_mcp_not_verified", d); else if (s.carried_auto_mode_environment && r.autoModeEnvironment.length === 0) f("bridge_server_session_config", e.dropAutoModeEnvironment === void 0 ? "auto_mode_environment_dropped" : `auto_mode_environment_${e.dropAutoModeEnvironment}`, d); else g("bridge_server_session_config", d);
  return o;
}

export { vjt, v1r, _Xn, ehn, zGo, GGo, VGo, KGo, E1r, qGo };
