// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le, ys } from "./chunk-2v9tfgc3.js";

import { Lr, dYn, UJe, jJe } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { wPe, cpt, KEo, yk, ip, NPe, Up, ce } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { un } from "./chunk-y752zmas.js";

import { Wi, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Fa, qK, DLs, BLt, T9e, _in, uKn, WIe, RU, bin, win, LLs, hKn, kmt, C9e, qxo, Tmt, NLs, KPo, XPo, JPo, eIo, QH, tIo, Ow, oIo, f_ } from "./chunk-q6wab2jw.js";

import { LOe, hu, hI, Z5 } from "./chunk-5brm0azz.js";

import { ar, jo, dn } from "./chunk-nnrb0acr.js";

import { LVn, TU, ERo, amt, rLs, sIr, hn, fe, Xsn, oxo } from "./chunk-dd98x6x7.js";

import { Oe, gi } from "./chunk-cjt10y7b.js";

import { nme, _Oo, lX, wOo, BOr, XS, rme } from "./chunk-w4hwgefc.js";

import { Nft, $ft, yPr, _Pr, t1e, n1e } from "./chunk-qqd24q2y.js";

import { qT } from "./chunk-s82cb921.js";

import { tRs, Wh } from "./chunk-h83cda0g.js";

import { Zxe } from "./chunk-86k06k4p.js";

import { MG } from "./chunk-zx69jgxc.js";

import { gu } from "./chunk-53fww9mk.js";

function H1() {
  return a.CLAUDE_CODE_REMOTE && a.CLAUDE_CODE_REMOTE_HERMETIC_MODE;
}

function U(e) {
  try {
    return new URL(e).host;
  } catch {
    return;
  }
}

function gkr(e = a.ANTHROPIC_BASE_URL || Nft()) {
  if (!e) return !0;
  let n = U(un().BASE_API_URL);
  return n !== void 0 && U(e) === n;
}

function e5() {
  KPo();
}

function QCs() {
  JPo(u());
}

function u() {
  if (!qK()) return {
    kind: "unreadable"
  };
  try {
    return {
      kind: "read",
      orgs: Zxe()
    };
  } catch {
    return {
      kind: "unreadable"
    };
  }
}

function cC() {
  let e = QH();
  if (e !== void 0) return e;
  let {eligible: n, ineligibleReason: r} = x();
  if (n) XPo({
    readAccount: Up,
    covers: Oe() !== "gateway" || KEo() && !UJe() && !jJe(),
    orgPin: u()
  });
  let E = a.CLAUDE_CODE_EVAL_CONFINED === !0, i = !n && E;
  oIo(i);
  let _ = n || i;
  return eIo(_, _ ? void 0 : r);
}

function j() {
  return hkr() || ip() && (NPe() === null || Xsn());
}

function hkr() {
  if (!ip()) return !1;
  let e = NPe();
  return e === "enterprise" || e === "team" || tIo(oxo, amt);
}

function x() {
  if (Ow()) return {
    eligible: !0
  };
  if (H1()) return {
    eligible: !1,
    ineligibleReason: "hermetic_remote_session"
  };
  if (Oe() === "gateway") {
    let r = Lr(), E = dYn(r);
    return {
      eligible: E,
      ineligibleReason: E ? void 0 : r?.hostVerdict !== void 0 ? "host_gateway_not_accepted" : "unpinned_gateway"
    };
  }
  if (Oe() !== "firstParty") return {
    eligible: !1,
    ineligibleReason: "third_party_provider"
  };
  if (!gi()) return {
    eligible: !1,
    ineligibleReason: "custom_base_url"
  };
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  if (e === "local-agent" || Z5() || e?.startsWith("claude-coworker")) return {
    eligible: !1,
    ineligibleReason: "sandboxed_entrypoint"
  };
  let n = !1;
  try {
    n = cpt();
  } catch (r) {
    t(`Remote settings: could not read the profile store (${l(r)}); not treating this session as profile-authenticated`, {
      level: "warn"
    });
  }
  if (n) return gkr() ? {
    eligible: !0
  } : {
    eligible: !1,
    ineligibleReason: "profile_base_url_mismatch"
  };
  if (j()) return {
    eligible: !0
  };
  try {
    let {key: r} = yk({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    if (r) return {
      eligible: !0
    };
  } catch {}
  return {
    eligible: !1,
    ineligibleReason: ip() ? "unsupported_subscription" : "no_auth"
  };
}

var X = [ "CLAUDE_CODE_REMOTE", "CLAUDE_CODE_IS_COWORK" ];

function lUe(e) {
  return X.some(n => e ? Le(e[n]) : a[n]);
}

function L(e, n) {
  return DLs.test(e) ? "invalid-name" : typeof n !== "string" ? "non-string-value" : n.includes("\0") ? "nul-in-value" : void 0;
}

var YMt = {
  "invalid-name": "it isn't a valid environment variable name",
  "non-string-value": "its value isn't a string",
  "nul-in-value": "its value contains a NUL character"
};

function tjn(e) {
  let n = Object.entries(e), r = n.flatMap(([i, _]) => {
    let o = L(i, _);
    return o === void 0 ? [] : [ {
      name: i,
      problem: o
    } ];
  });
  if (r.length === 0) return {
    kept: e,
    dropped: r
  };
  let E = new Set(r.map(i => i.name));
  return {
    kept: Object.fromEntries(n.filter(([i]) => !E.has(i))),
    dropped: r
  };
}

var P = 200;

function J(e) {
  return e === 1 ? "1 character" : `${e} characters`;
}

function g(e) {
  return Wi(e).slice(1, -1).replace(/[^\x20-\x7e]/g, n => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}

function qct(e) {
  let n = e.indexOf("="), r = n === -1 ? e : e.slice(0, n), E = r.length > P, i = `"${g(E ? r.slice(0, P) : r)}"${E ? "\u2026" : ""}`;
  return n === -1 ? i : `${i} (then '=' and ${J(e.length - n - 1)}, not shown)`;
}

var z = new Set([ "ANTHROPIC_UNIX_SOCKET", "ANTHROPIC_BASE_URL", "ANTHROPIC_API_KEY", "ANTHROPIC_AUTH_TOKEN", "CLAUDE_CODE_OAUTH_TOKEN", ...RU.filter(e => e.startsWith("CLAUDE_CODE_ARTIFACT") || WIe(e)) ]);

function h(e) {
  if (!e || !process.env.ANTHROPIC_UNIX_SOCKET) return e || {};
  let n = {};
  for (let [r, E] of Object.entries(e)) if (!z.has(r.toUpperCase())) n[r] = E;
  return n;
}

var m = Object.freeze({
  managedByHost: !1,
  managedByHostFlag: !1,
  desktopHost: !1,
  hostOrchestrated: !1,
  storedLoginPinned: !1
});

function v() {
  let e = Le(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST), n = hu(), r = process.env.CLAUDE_CODE_ENVIRONMENT_KIND;
  return {
    managedByHost: e || !!process.env.CLAUDE_CODE_HOST_AUTH_ENV_VAR,
    managedByHostFlag: e,
    desktopHost: n,
    hostOrchestrated: n || r === "byoc",
    storedLoginPinned: TU()
  };
}

var q = new Set([ "policySettings", "projectSettings", "localSettings" ]), Z = [], Q = [], ee = [], K = [], ykr = new Set([ qT, "CLAUDE_CODE_CUSTOM_OAUTH_URL", "CLAUDE_CODE_SYNC_SKILLS", "CLAUDE_CODE_SYNC_PLUGINS", "CLAUDE_CODE_TRANSCRIPT_LOCAL_GC", "CLAUDE_CODE_CCR_SURFACE", "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE", "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED", "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON", "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL", "CLAUDE_CODE_DISABLE_PROACTIVITY", "CLAUDE_CODE_DISABLE_ATTACHMENTS", "CLAUDE_CODE_TETHER_LIVE", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_MCP_APPS_HOST", "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD", "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN", "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED", "CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT", "CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT", "CLAUDE_CODE_3P_PROBE_WROTE_HAIKU_DEFAULT", "CLAUDE_CODE_3P_SEEDED_SONNET_DEFAULT", "CLAUDE_CODE_3P_SEEDED_OPUS_DEFAULT", "CLAUDE_CODE_SANDBOXED", "CLAUDE_CODE_ATTRIBUTION_STATUS_TIMEOUT_MS", "CLAUDE_CODE_TOOL_USE_ID", "CLAUDE_CODE_DISABLE_ATTRIBUTION_CROSS_REPO", "CLAUDE_CODE_DISABLE_WEB_FETCH", "CLAUDE_CODE_DISABLE_FILE_MENTIONS", "CCR_SESSION_PROFILE", "CLAUDE_CODE_MCP_STARTUP_WAIT_MS", "CLAUDE_CODE_MCP_CONNECTOR_PREWAIT_MS", "CLAUDE_CODE_MCP_PREWAIT_SERVERS", "CLAUDE_CODE_MCP_PREWAIT_SERVERS_MS", "CLAUDE_CODE_SKILL_PROPOSALS", "CLAUDE_CODE_PLUGIN_CACHE_DIR", "CLAUDE_CODE_PLUGIN_SEED_DIR", "CLAUDE_CODE_PLUGIN_DIRS", "CLAUDE_CODE_PLUGIN_DIR_WATCH", "CLAUDE_CODE_ENABLE_FUNCTION_HOOKS", "CLAUDE_CODE_PLUGIN_ATTRIBUTION", "CLAUDE_CODE_SKILL_ATTRIBUTION", "CLAUDE_CODE_MODEL_CATALOG_URL", "CLAUDE_CODE_CLIENT_DATA_URL", "CLAUDE_CODE_REMOVE_PROMPT_STRINGS", ...$ft, "CLAUDE_CODE_SUBSCRIPTION_TYPE", "CLAUDE_CODE_RATE_LIMIT_TIER", "CLAUDE_CODE_SANDBOX_LEAVE_DENIES_TO_SRT_WIN", "CLAUDE_CODE_SANDBOX_LEAVE_PARENT_FOLDERS_ALONE", "CLAUDE_CODE_NANKEEN_KESTREL", "CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT", "CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT", "CLAUDE_CODE_DISABLE_INLINE_SHELL_RM_PROMPT", "CLAUDE_CODE_STRICT_INLINE_SHELL_RM_PROMPT", "CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY", "CLAUDE_CODE_FEDERATION_CACHE_DIR", "ANTHROPIC_CONFIG_DIR", "XDG_CONFIG_HOME", "HOME", "APPDATA", "USERPROFILE", "HOMEDRIVE", "HOMEPATH", "PROGRAMDATA", "ALLUSERSPROFILE", "SYSTEMROOT", "WINDIR", "COMSPEC", "SYSTEMDRIVE", "PROGRAMFILES", "PROGRAMFILES(X86)", "PROGRAMW6432", "LOCALAPPDATA", "PATHEXT", "COMMONPROGRAMFILES", "COMMONPROGRAMFILES(X86)", "COMMONPROGRAMW6432", "PSMODULEPATH", "HOMESHARE", "ONEDRIVE", "ONEDRIVECONSUMER", "ONEDRIVECOMMERCIAL", "CDPATH", "PWD", "XDG_DATA_HOME", "XDG_CACHE_HOME", "XDG_STATE_HOME", "CLAUDE_CODE_SAFE_MODE", "CLAUDE_CODE_SIMPLE", "CLAUDE_CODE_HARBOR_KITE", "CLAUDE_CODE_HARBOR_KITE_CLOUD", "CLAUDE_CODE_HARBOR_KITE_PACING_OFF", "CLAUDE_CODE_SILENT_TURN_REMINDER", "CLAUDE_CODE_SILENT_TURN_REMINDER_TURNS", "CLAUDE_CODE_SILENT_TURN_REMINDER_SECONDS", "CLAUDE_CODE_SILENT_TURN_REMINDER_TEXT", "CLAUDE_CODE_MODEL_CAPABILITIES", "CLAUDE_CODE_ARTIFACT_ROOM", "CLAUDE_CODE_BASH_EDIT_DIFF", "CLAUDE_CODE_FORWARD_USER_INTENT", "CLAUDE_CODE_WHIMSICAL_ELEPHANT", "CLAUDE_CODE_ARTIFACT_PRESENCE", "CLAUDE_CODE_ARTIFACT_OPEN_ACTION", "CLAUDE_CODE_ARTIFACT_REPL", "CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR", "USER_TYPE", "CLAUDE_CODE_MESSAGING_SOCKET", "CLAUDE_CODE_MESSAGING_TOKEN", "CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION", "CLAUDE_CODE_MANAGED_SETTINGS_PATH", "CLAUDE_CODE_TOASTY_THIMBLE", "CLAUDE_CODE_GENTLE_PARASOL", "CLAUDE_CODE_STREAMED_BUMBLEBEE_TEXT", "CLAUDE_CODE_LEGACY_BUNDLE", "CCR_ENABLE_BUNDLE", "CCR_FORCE_BUNDLE", ...K.flatMap(e => e.names), "GITHUB_ACTIONS", "RUNNER_ENVIRONMENT", "CLAUDE_CODE_SUBPROCESS_ENV_SCRUB", "ENABLE_BETA_TRACING_DETAILED", "BETA_TRACING_ENDPOINT", "OTEL_LOG_RAW_API_BODIES", ..._in, "CLAUDE_PTY_RECORD", "CLAUDE_CODE_DEBUG_LOGS_DIR", "CLAUDE_CODE_DIAGNOSTICS_FILE", "CLAUDE_CODE_PERFETTO_TRACE", "CLAUDE_CODE_FRAME_TIMING_LOG", "CLAUDE_CODE_REMOTE_MEMORY_DIR", "CLAUDE_COWORK_MEMORY_PATH_OVERRIDE", "AUTOMODE_DECISION_LOG", "CLAUDE_CONFIG_DIR", "CLAUDE_SECURESTORAGE_CONFIG_DIR", "CLAUDE_CODE_TMPDIR", "CLAUDE_TMPDIR", "TMPDIR", "TMP", "TEMP", "XDG_RUNTIME_DIR", "CLAUDE_JOB_DIR", "CLAUDE_CODE_DISABLE_BG_STABLE_PATH", "CLAUDE_CODE_REMOTE_TOOLS_FORWARD", "CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS", "CLAUDE_AFK_TIMEOUT_MS", "CLAUDE_AFK_COUNTDOWN_MS", "CLAUDE_CHROME_CLASSIFIER_FLOOR", "CLAUDE_CHROME_PERMISSION_MODE", "CLAUDE_CODE_ENABLE_CFC", "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL", ...Z ]), te = [ ...K.flatMap(e => e.prefixes), ...Q ];

function _kr(e) {
  let n = e.toUpperCase();
  return ykr.has(n) || te.some(r => n.startsWith(r));
}

function y(e, n, r, E, i) {
  if (!e || !T9e(n)) return e;
  let _ = !0, o;
  for (let s of Object.keys(e)) {
    if (!_kr(s) || uKn(s, e[s], E) || qxo.has(s) && Le(e[s]) || Y(s.toUpperCase(), e[s])) continue;
    if (o ??= {
      ...e
    }, delete o[s], !r.has(s)) {
      r.add(s);
      let C = n === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json", O = N.get(s.toUpperCase());
      t(W.has(s.toUpperCase()) ? `${s} in ${C} is ignored: this key can only come from the environment Claude Code is started with, not from any settings file.` : O !== void 0 ? `${s} in ${C} is ignored: a project's settings can only set it to "${O}". Set any other value in ~/.claude/settings.json or managed settings; in a remote or Cowork session, only in the environment Claude Code is started with.` : `${s} in ${C} is ignored \u2014 project-scoped settings can't set this key. Set it in ~/.claude/settings.json or managed settings instead.`, {
        level: "warn"
      });
    }
  }
  return o ?? e;
}

var ne = {
  ...YMt,
  "non-string-value": "its value isn't a string, a number or a boolean"
};

function c(e, n, r) {
  if (!e) return e;
  let E;
  for (let [i, _] of Object.entries(e)) {
    let o = _, s = typeof o === "string" ? o : typeof o === "number" || typeof o === "boolean" ? String(o) : void 0, C = L(i, s);
    if (C === void 0) {
      if (s !== void 0 && s !== o) E ??= {
        ...e
      }, E[i] = s;
      continue;
    }
    E ??= {
      ...e
    }, delete E[i];
    let O = ne[C], D = qct(i), T = `${n}:${O}:${D}`;
    if (!r.has(T)) r.add(T), t(`Env key ${D} from ${n} is ignored: ${O}.`, {
      level: "warn"
    });
  }
  return E ?? e;
}

var W = new Set([ ...C9e, "CLAUDE_CODE_HOST_GATEWAY_LINEAGE", "CLAUDE_CODE_HOST_CREDS_FILE", "CLAUDE_CODE_HOST_AUTH_ENV_VAR", "CLAUDE_BG_AUTH_SNAPSHOT_PATH", "CLAUDE_BG_SOCKET_TOKENS_PATH", ...bin, "CLAUDE_CODE_MESSAGING_SOCKET", "CLAUDE_CODE_MESSAGING_TOKEN", "CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION", "CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT", "CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT", "CLAUDE_CODE_DISABLE_INLINE_SHELL_RM_PROMPT", "CLAUDE_CODE_STRICT_INLINE_SHELL_RM_PROMPT", "CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY", "CLAUDE_CODE_SANDBOX_LEAVE_PARENT_FOLDERS_ALONE", "CLAUDE_CODE_TRANSCRIPT_LOCAL_GC", "CLAUDE_CODE_MANAGED_SETTINGS_PATH", "CLAUDE_CODE_EVAL_CONFINED", "CLAUDE_CODE_SANDBOX_LEAVE_DENIES_TO_SRT_WIN", "CLAUDE_CODE_TUI_TRIAL", "CLAUDE_RELAUNCH_SESSION_ADD_DIRS", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR", "CLAUDE_SESSION_INGRESS_TOKEN_FILE", "CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_CODE_SESSION_KIND", "CLAUDE_CODE_SANDBOXED", "CLAUDE_BG_WORKSPACE_TRUSTED", "CLAUDE_BG_CARRIED_PROMPTS_SHA256", "CLAUDE_CODE_RELAUNCH_HOME_TRUST", "CLAUDE_BRIDGE_REATTACH_SESSION", "CLAUDE_CODE_PROJECT_DIR_NAME", "CLAUDE_PTY_HOST_EXEC", "CLAUDE_BG_PTY_AUTH", "CLAUDE_BG_RV_AUTH", "CLAUDE_BG_CLAIM_AUTH", "CLAUDE_BG_RENDEZVOUS_SOCK", "CLAUDE_BG_BACKEND", "CLAUDE_BG_TCC_DISCLAIMED", "CLAUDE_PTY_HOST_NO_STABLE_PATH" ]), Ee = new Set([ "CLAUDE_CODE_TRANSCRIPT_LOCAL_GC" ]);

function re(e, n, r) {
  return r === "policySettings" && Ee.has(e.toUpperCase()) && ys(n);
}

var ie = new Set([ "CLAUDE_CODE_ATTRIBUTION_HEADER" ]);

function oe(e, n, r) {
  return r === "policySettings" && ie.has(e.toUpperCase()) && ys(n) && hI() && dYn(Lr()) && ys(f_()?.env?.[e]);
}

function p(e, n, r, E = !1) {
  if (e.has(n)) return;
  e.add(n);
  let i = g(n);
  t(E ? `Ignoring ${i} from ${r} \u2014 repo-committed settings can't re-point the TLS/proxy channel of a session whose credential comes from the host. Set it in ~/.claude/settings.json or managed settings instead.` : `Ignoring ${i} from ${r} \u2014 this session's provider routing is managed by the host (CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST or a host-auth-callback marker), so settings-sourced provider/auth configuration does not apply.`, {
    level: "warn"
  });
}

function M(e, n, r, E) {
  if (!e) return {};
  let i = r.managedByHost || r.desktopHost && q.has(n), _ = {};
  for (let [o, s] of Object.entries(e)) {
    if (W.has(o.toUpperCase()) && !re(o, s, n)) continue;
    if (!i) {
      _[o] = s;
      continue;
    }
    if (win(o) && (r.managedByHost || !LLs(o))) {
      if (r.managedByHost) p(E, o, n);
      continue;
    }
    if (r.managedByHost && o.toUpperCase() === "ANTHROPIC_CUSTOM_HEADERS") {
      p(E, o, n);
      continue;
    }
    if (r.managedByHostFlag && (!r.desktopHost || T9e(n)) && (hKn(o) || kmt(o))) {
      p(E, o, n, r.desktopHost);
      continue;
    }
    _[o] = s;
  }
  return _;
}

function G(e, n, r, E) {
  if (!e || !r) return e || {};
  let i = {}, _ = [];
  for (let [o, s] of Object.entries(e)) {
    if (!r.has(o.toUpperCase()) || oe(o, s, n)) {
      i[o] = s;
      continue;
    }
    if (E && process.env[o] !== s) _.push(o);
  }
  if (E && _.length > 0) _e(_, n, E);
  return i;
}

function _e(e, n, r) {
  let E = e.filter(_ => {
    let o = `${n}:${_}`;
    if (r.has(o)) return !1;
    return r.add(o), !0;
  });
  if (E.length === 0) return;
  let i = E.map(g).join(", ");
  t(`Ignoring ${i} from ${n}: the environment this session was launched with already sets ${E.length === 1 ? "it" : "them"}, and when the desktop app or a runner starts the session, the launch environment takes precedence over settings.`, {
    level: "warn"
  });
}

var se = new Set([ "CLAUDE_CODE_SUBPROCESS_ENV_SCRUB", "CLAUDE_CODE_PERFORCE_MODE" ]), Ce = new Set(_in);

function w(e, n) {
  let r = e.toUpperCase();
  return gu() && !(Tmt(e, n) && !win(e) && !n1e(r) && !Ce.has(r)) && !(se.has(r) && Le(n));
}

function ae(e, n) {
  if (!e) return {};
  let r = {};
  for (let [E, i] of Object.entries(e)) {
    let _ = E.toUpperCase();
    if (_ === "NO_COLOR" || _ === "FORCE_COLOR" || w(E, i)) {
      n[t1e(n, E)] = i;
      continue;
    }
    delete n[t1e(n, E)], r[E] = i;
  }
  return r;
}

var De = new Set([ "CLAUDE_CODE_REMOTE", "CLAUDE_CODE_REMOTE_HERMETIC_MODE", "CLAUDE_CODE_HOSTED_DESKTOP", "CLAUDE_CODE_ENVIRONMENT_KIND", "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT", "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT", "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS", "CLAUDE_CODE_BRIDGE_MCP_CARRIER", "CLAUDE_CODE_BRIDGE_PROMPT_SHA256", "CLAUDE_CODE_APPEND_PROMPT_HEAD", "CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID", "CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID", "CLAUDE_CODE_BRIDGE_SOURCE_DIR", "VOICE_STREAM_BASE_URL", "CLAUDE_CODE_POLL_EVENTS", "CLAUDE_CODE_POLL_EVENT_DECLARATIONS", "CLAUDE_CODE_ACCOUNT_UUID", "CLAUDE_CODE_ORGANIZATION_UUID", "CLAUDE_CODE_USER_EMAIL", "CLAUDE_CODE_CONTAINER_ID", "CLAUDE_CODE_SESSION_ID", "CLAUDE_CODE_SYNC_SESSION_REFS", "CLAUDE_CODE_SKILL_PROPOSALS", "CLAUDE_CODE_REMOTE_SESSION_ID", "CLAUDE_CODE_REMOTE_MCP_CONFIG", "CLAUDE_CODE_HOVER_REST", "CCR_AGENT_PROXY_ENABLED", "CCR_AGENT_PROXY_RELAY_MODE", "CCR_AGENT_PROXY_INCLUDE_HOSTS", "CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED", "CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED", "CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY", "CCR_AGENT_PROXY_CA_WATCH_ENABLED", "CCR_AGENT_PROXY_CA_CERT_B64", "CCR_AGENT_PROXY_FRAME_HOSTS", "AGENT_PROXY_URL", "AGENT_PROXY_AUTH_TOKEN", "CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN", "CLAUDE_CODE_MCP_SERVE_SETTINGS", "CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT", "CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION", ...[], "CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG", "CLAUDE_CODE_AGENT_PROXY_GH_SHIM", "CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS", "SESSION_INGRESS_URL", "CLAUDE_CODE_REMOTE_SDK_URL", "CCR_SESSION_PROFILE", "CLAUDE_CODE_REMOTE_SESSION_ORIGIN", "CLAUDE_CODE_WORKER_EPOCH", "CLAUDE_CODE_DISABLE_WORKING_SYNC", ...[], "CLAUDE_CODE_CCR_EARLY_HYDRATE_PREFETCH", "CLAUDE_CODE_CCR_EARLY_REMOTE_CONNECT", "CLAUDE_CODE_CCR_WORKER_SOCKET", "CLAUDE_CODE_CCR_EARLY_PLUGINS_SYNC", "CLAUDE_CODE_CCR_EARLY_SKILLS_SYNC", "CLAUDE_CODE_SYNC_REUSE_WITHIN_MS", "CLAUDE_CODE_CCR_FOLD_FIRST_TURN_RESCAN", "CLAUDE_CODE_MCP_ALWAYS_LOAD_JOIN_BEFORE_INPUT", "CLAUDE_CODE_GROWTHBOOK_KICK_FROM_INIT", "CLAUDE_CODE_GROWTHBOOK_KICK_ON_WARM_CACHE", "CLAUDE_CODE_SLEEP_COMPACT", "CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS", "CLAUDE_CODE_CCR_SKIP_FRESH_MIGRATIONS", "CLAUDE_CODE_MANAGED_CONFIG_PREFETCH", "CLAUDE_CODE_CONFIG_WATCH_EVENTS", "CLAUDE_CODE_FLAG_FETCH_WAIT_MS", "CLAUDE_CODE_GB_DISK_CACHE_WHEN_TELEMETRY_OFF", "CLAUDE_CODE_HOME_SEED_HOLD_TIMEOUT_MS", "CLAUDE_CODE_HOME_SEED_VERDICT_TIMEOUT_MS", "CLAUDE_CODE_TRANSCRIPT_SLIM_TOOL_RESULTS", "CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS", "CLAUDE_CODE_JIT_POLICY_AFTER_STARTUP", "CLAUDE_CODE_SETTLE_TOUCHED_FILES", "CLAUDE_CODE_DISABLE_HOOK_FORWARDING", "CLAUDE_CODE_DISABLE_PLUGIN_FORWARDING", "CLAUDE_CODE_DISABLE_TURN_HANDOFF", "CLAUDE_CODE_LAZY_ENV_GETTERS", "CLAUDE_CODE_RESTRICTED", "CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG" ]), Se = new Set([ "CLAUDE_REMOTE_WORKFLOW_SCRIPT", "CLAUDE_REMOTE_WORKFLOW_ARGS", "CLAUDE_WORKFLOW_NAME_ONLY" ]), Ae = new Set([ "CLAUDE_CODE_ENTRYPOINT", "CLAUDE_CODE_HOST_SESSION_ID", "CLAUDE_CODE_HOST_WORKTREE", "CLAUDE_CODE_HOST_WORKTREE_FENCE", "CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST", "CLAUDE_CODE_IS_COWORK", "CLAUDE_CODE_COWORK_FRAME_ARTIFACTS", "CLAUDE_CODE_HOST_SCHEDULED_RUN", "CLAUDE_CODE_ARTIFACT_SHARE", "CLAUDE_CODE_ARTIFACT_VERSIONS", "CLAUDE_CODE_CCR_SURFACE", "CLAUDE_CODE_SESSION_ORIGIN", "SYSTEM_REMINDER_MEMORY_CONTEXT", "CLAUDE_CODE_MEMORY_SUBAGENT_APPEND", "CLAUDE_CODE_POST_TURN_MEMORY", "CLAUDE_CODE_POST_TURN_MEMORY_CONFIG", "CLAUDE_CODE_POST_TURN_MEMORY_SYNC", ...ee, "CLAUDE_CODE_QUESTION_EXTENDED", "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS", "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES", "CLAUDE_CODE_MCP_APPS_HOST", "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD", "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN", "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED", "CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH", "CLAUDE_CODE_SDK_READS_SESSION_STATE", "CLAUDE_CHROME_PAIRED_DEVICE_ID", "CLAUDE_CHROME_TAB_GROUP_KEY", LOe, "CLAUDE_CODE_SANDBOXED", "CLAUDE_CODE_ATTRIBUTION_STATUS_TIMEOUT_MS", "CLAUDE_CODE_TOOL_USE_ID", "CLAUDE_CODE_DISABLE_ATTRIBUTION_CROSS_REPO", "CLAUDE_CODE_CONFIG_PROBE" ]), de = new Set([ "CLAUDE_STAGE_FILE_ROOT" ]), N = new Map([ [ "CLAUDE_CHROME_CLASSIFIER_FLOOR", "1" ], [ "CLAUDE_CHROME_PERMISSION_MODE", "ask" ], [ "CLAUDE_CODE_ENABLE_CFC", "0" ] ]);

function Y(e, n) {
  switch (e) {
   case "CLAUDE_CHROME_CLASSIFIER_FLOOR":
    return Le(n);

   case "CLAUDE_CHROME_PERMISSION_MODE":
    return n === "ask";

   case "CLAUDE_CODE_ENABLE_CFC":
    return ys(n);

   default:
    return !1;
  }
}

function Wbo() {
  for (let e of N.keys()) delete process.env[e];
}

var Re = "CLAUDE_CODE_DISABLE_DIR_", le = new Set([ "CLAUDE_CODE_PLUGIN_DIRS", "CLAUDE_CODE_PLUGIN_DIR_WATCH", "CLAUDE_CODE_PROCESS_WRAPPER" ]);

function Te(e, n) {
  if (e === void 0 || !Wh() || n !== "userSettings" && n !== "globalConfig") return e;
  return Fa(e, (r, E) => le.has(E.toUpperCase()));
}

function H(e) {
  if (!e) return {};
  let n = lUe(), r = {};
  for (let [E, i] of Object.entries(e)) {
    let _ = E.toUpperCase();
    if (!De.has(_) && !_.startsWith(Re) && !Se.has(_) && !Ae.has(_) && !de.has(_) && !(n && N.has(_) && !Y(_, i)) && !0 && _ !== "CLAUDE_CODE_REMOTE_TOOLS_FORWARD") r[E] = i;
  }
  return r;
}

function zbo() {
  return R.envAboveProjectSettings();
}

function pk() {
  return R.getPreSettingsEnvSnapshot();
}

function q6e() {
  let e = {
    ...pk()
  };
  for (let n of Object.keys(e)) if (process.env[n] === void 0) delete e[n];
  return e;
}

function Y6e(e, n) {
  return R.isSettingsSourcedEnvValue(e, n);
}

function fh() {
  return R.peekPreSettingsEnvSnapshot();
}

function aZ() {
  return R.getAppliedGlobalConfigEnv();
}

rLs(pk);

tRs(fh);

function Gbo(e) {
  R.dropPreSettingsEnvSnapshot(e);
}

function t5(e, n = "policySettings") {
  return R.filterPolicyPredicateEnv(e, n, {
    forPolicyMatch: !1
  });
}

function XMt(e, n = "policySettings") {
  return R.filterPolicyPredicateEnv(e, n, {
    forPolicyMatch: !0
  });
}

function dUe(e, n) {
  return R.withoutInvalidSettingsEnv(e, n);
}

var ge = [ "userSettings", "flagSettings", "policySettings" ], f = [ "TRACES", "METRICS", "LOGS", "PROFILES" ], A = BLt, F = new Set([ "HEADERS", "CLIENT_KEY", "CLIENT_CERTIFICATE" ]), B = new Set([ "OTEL_LOGS_EXPORTER", "OTEL_TRACES_EXPORTER" ]), b = "CLAUDE_CODE_ENABLE_TELEMETRY", V = "BETA_TRACING_ENDPOINT";

var Vt = new Set([ `${BLt}ENDPOINT`, `${BLt}HEADERS`, `${BLt}PROTOCOL` ]);

function I(e) {
  return e;
}

function pe(e) {
  return !e.split(",").map(n => n.trim()).includes("otlp");
}

class k {
  providerStripContext=m;
  projectScopeDropWarned=new Set;
  fullPassDroppedGitKey=!1;
  hostManagedDropWarned=new Set;
  invalidEnvKeyWarned=new Set;
  hostSpawnEnvKeys=void 0;
  settingsEnvForChildren={};
  materializedProcessWrapper=void 0;
  preSettingsEnvSnapshot=void 0;
  userTierNames=new Set;
  launchNamesBeforeClaim=void 0;
  userTierNamesInSnapshot=new Set;
  otelDominanceDropWarned=new Set;
  hostSpawnEnvDropWarned=new Set;
  servedFolderEnvWithheld=!1;
  getPreSettingsEnvSnapshot() {
    return this.preSettingsEnvSnapshot ??= this.latchPreSettingsEnvSnapshot({
      ...process.env
    }), this.preSettingsEnvSnapshot;
  }
  latchPreSettingsEnvSnapshot(e) {
    let n = this.launchNamesBeforeClaim;
    return this.userTierNamesInSnapshot = new Set(n === void 0 ? [] : Object.keys(e).map(r => r.toUpperCase()).filter(r => this.userTierNames.has(r) && !n.has(r))), 
    Object.freeze(e);
  }
  envAboveProjectSettings() {
    let e = this.getPreSettingsEnvSnapshot(), n = {};
    for (let [r, E] of Object.entries(e)) if (!this.userTierNamesInSnapshot.has(r.toUpperCase())) n[r] = E;
    return {
      ...n,
      ...fe("flagSettings")?.env,
      ...fe("policySettings")?.env
    };
  }
  peekPreSettingsEnvSnapshot() {
    return this.preSettingsEnvSnapshot;
  }
  appliedGlobalConfigEnv=void 0;
  settingsOfferedEnvValues=new Map;
  getAppliedGlobalConfigEnv() {
    return this.appliedGlobalConfigEnv;
  }
  dropPreSettingsEnvSnapshot(e) {
    if (e !== void 0 && this.preSettingsEnvSnapshot) this.launchNamesBeforeClaim = new Set([ ...Object.keys(this.preSettingsEnvSnapshot), ...e ].map(n => n.toUpperCase()));
    this.preSettingsEnvSnapshot = void 0;
  }
  reset() {
    this.providerStripContext = m, this.projectScopeDropWarned.clear(), this.hostManagedDropWarned.clear(), 
    this.invalidEnvKeyWarned.clear(), this.hostSpawnEnvKeys = void 0, this.settingsEnvForChildren = {}, 
    this.materializedProcessWrapper = void 0, this.preSettingsEnvSnapshot = void 0, 
    this.userTierNames.clear(), this.launchNamesBeforeClaim = void 0, this.userTierNamesInSnapshot = new Set, 
    this.appliedGlobalConfigEnv = void 0, this.settingsOfferedEnvValues.clear(), this.otelDominanceDropWarned.clear(), 
    this.hostSpawnEnvDropWarned.clear(), this.servedFolderEnvWithheld = !1, this.fullPassDroppedGitKey = !1;
  }
  lastFullPassDroppedProjectGitKey() {
    return this.fullPassDroppedGitKey;
  }
  servedFolderEnvWasWithheld() {
    return this.servedFolderEnvWithheld;
  }
  filterSettingsEnv(e, n, r) {
    if (this.withholdsEnvFrom(n)) return {};
    let E = ae(G(M(H(h(y(c(Te(this.asFromAFolderNobodyTrusted(e, n, !0), n), n, this.invalidEnvKeyWarned), n, this.projectScopeDropWarned, () => this.envAboveProjectSettings(), r))), n, this.providerStripContext, this.hostManagedDropWarned), n, this.hostSpawnEnvKeys, this.hostSpawnEnvDropWarned), this.settingsEnvForChildren);
    for (let [i, _] of Object.entries(E)) {
      let o = i.toUpperCase(), s = _.trim(), C = this.settingsOfferedEnvValues.get(o);
      if (C) C.add(s); else this.settingsOfferedEnvValues.set(o, new Set([ s ]));
    }
    if (n === "globalConfig" || n === "userSettings") for (let i of Object.keys(E)) this.userTierNames.add(i.toUpperCase());
    return E;
  }
  withoutInvalidSettingsEnv(e, n) {
    return c(e, n, this.invalidEnvKeyWarned);
  }
  isSettingsSourcedEnvValue(e, n) {
    return this.settingsOfferedEnvValues.get(e.toUpperCase())?.has(n.trim()) === !0;
  }
  filterPolicyPredicateEnv(e, n, {forPolicyMatch: r}) {
    if (!r && this.withholdsEnvFrom(n)) return {};
    let E = G(M(H(h(y(c(r ? e : this.asFromAFolderNobodyTrusted(e, n, !1), n, this.invalidEnvKeyWarned), n, this.projectScopeDropWarned, () => this.envAboveProjectSettings()))), n, this.providerStripContext, this.hostManagedDropWarned), n, this.hostSpawnEnvKeys), i = {};
    for (let [_, o] of Object.entries(E)) {
      let s = _.toUpperCase();
      if (s === "NO_COLOR" || s === "FORCE_COLOR") continue;
      if (!r && w(_, o)) continue;
      i[_] = o;
    }
    return i;
  }
  withholdsEnvFrom(e) {
    return this.providerStripContext.storedLoginPinned && sIr(e);
  }
  asFromAFolderNobodyTrusted(e, n, r) {
    if (e === void 0 || !LVn(n)) return e;
    let E = {};
    for (let [i, _] of Object.entries(e)) if (typeof _ === "string" && NLs(i, _)) E[i] = _; else if (r) this.servedFolderEnvWithheld = !0;
    return E;
  }
  processWrapperKeyFrom(e) {
    return this.withholdsEnvFrom(e) || gu() || e === "userSettings" && Wh() ? void 0 : fe(e)?.processWrapper;
  }
  dropDominatedOtelKey(e, n, r, E, i = "managed settings") {
    if (E.get(e) === process.env[e]) return;
    if (this.hostSpawnEnvKeys?.has(e.toUpperCase())) return;
    if (process.env[e] === void 0) return;
    if (!this.otelDominanceDropWarned.has(e)) this.otelDominanceDropWarned.add(e), t(`Dropping ${g(e)}: ${g(r)} is claimed by ${i}, so lower-trust scopes cannot redirect ${n}`, {
      level: "warn"
    });
    delete process.env[e];
  }
  dropDominatedAntAlias(e, n, r, E = "managed settings") {
    return;
  }
  dropDominatedBetaTracingEndpoint(e, n, r = "managed settings") {
    this.dropDominatedOtelKey(V, "the logs and traces signals through detailed beta tracing", e, n, r);
  }
  hostSpawnOtelClaims() {
    let e = new Map, n = this.hostSpawnEnvKeys;
    if (!n) return e;
    let r = [ ...n ].some(E => {
      let i = I(E);
      return (i.startsWith(A) && i.endsWith("_ENDPOINT") || i === V) && (process.env[E] ?? "").trim() !== "";
    });
    for (let E of n) {
      let i = I(E), _ = B.has(i) || i === b, o = r && i.startsWith(A);
      if (!_ && !o) continue;
      let s = process.env[E];
      if (s !== void 0) e.set(E, s);
    }
    return e;
  }
  enforceManagedOtelFamilyDominance() {
    let e = fe("policySettings"), n = e?.env, r = (e?.otelHeadersHelper ?? "").trim() !== "", E = new Map;
    for (let [i, _] of Object.entries(n ?? {})) {
      let o = i.toUpperCase();
      if (!E.has(o) || i === o) E.set(o, _);
    }
    if (this.applyOtelFamilyClaims(this.hostSpawnOtelClaims(), E, "the host spawn env"), 
    !n && !r) return;
    if (r) {
      for (let i of f) this.dropDominatedOtelKey(`${A}${i}_ENDPOINT`, `the ${i.toLowerCase()} signal`, "otelHeadersHelper", E);
      this.dropDominatedOtelKey(`${A}ENDPOINT`, "telemetry for any signal", "otelHeadersHelper", E), 
      this.dropDominatedAntAlias(`${A}ENDPOINT`, "otelHeadersHelper", E), this.dropDominatedBetaTracingEndpoint("otelHeadersHelper", E);
    }
    this.applyOtelFamilyClaims(E, E, "managed settings");
  }
  applyOtelFamilyClaims(e, n, r) {
    for (let [E, i] of e) {
      let _ = I(E);
      if (_ === b) {
        if (process.env[E] === i && !Le(i)) this.dropDominatedBetaTracingEndpoint(E, n, r);
        continue;
      }
      if (B.has(_)) {
        if (process.env[E] === i && pe(i)) this.dropDominatedBetaTracingEndpoint(E, n, r);
        continue;
      }
      if (!_.startsWith(A)) continue;
      if (i.trim() === "") continue;
      if (process.env[E] !== i) continue;
      let o = f.find(D => _.startsWith(`${A}${D}_`));
      if (o) {
        let D = _.slice(`${A}${o}_`.length), T = o === "TRACES" || o === "LOGS";
        if (F.has(D)) {
          if (this.dropDominatedOtelKey(`${A}${o}_ENDPOINT`, `the ${o.toLowerCase()} signal`, E, n, r), 
          T) this.dropDominatedBetaTracingEndpoint(E, n, r);
        } else if (D === "ENDPOINT" && T) this.dropDominatedBetaTracingEndpoint(E, n, r);
        continue;
      }
      let s = _.slice(A.length), C = F.has(s), O = C ? [ s, "ENDPOINT" ] : [ s ];
      for (let D of O) for (let T of f) this.dropDominatedOtelKey(`${A}${T}_${D}`, `the ${T.toLowerCase()} signal`, E, n, r);
      if (C) this.dropDominatedOtelKey(`${A}ENDPOINT`, "telemetry for any signal", E, n, r), 
      this.dropDominatedAntAlias(`${A}ENDPOINT`, E, n, r);
      if (O.includes("ENDPOINT")) this.dropDominatedBetaTracingEndpoint(E, n, r);
      this.dropDominatedAntAlias(_, E, n, r);
    }
  }
  resetSettingsIfUserSettingsFileMoved(e) {
    if (hn("userSettings") !== e) ar();
  }
  applySafeConfigEnvironmentVariables() {
    this.getPreSettingsEnvSnapshot(), this.providerStripContext = v();
    let e = hn("userSettings");
    if (this.hostSpawnEnvKeys === void 0) {
      if (this.hostSpawnEnvKeys = this.providerStripContext.hostOrchestrated ? new Set(Object.keys(process.env).map(E => E.toUpperCase())) : null, 
      _Pr()) this.hostSpawnEnvKeys?.delete("FORCE_COLOR");
    }
    this.settingsEnvForChildren = {}, this.appliedGlobalConfigEnv = this.filterSettingsEnv(ce().env, "globalConfig"), 
    Object.assign(process.env, this.appliedGlobalConfigEnv);
    for (let E of ge) {
      if (E === "policySettings") continue;
      if (!dn(E)) continue;
      Object.assign(process.env, this.filterSettingsEnv(fe(E)?.env, E));
    }
    cC(), Object.assign(process.env, this.filterSettingsEnv(fe("policySettings")?.env, "policySettings"));
    let n = new Map;
    for (let E of jo()) {
      let i = this.filterSettingsEnv(fe(E)?.env, E);
      for (let [_, o] of Object.entries(i)) n.set(_.toUpperCase(), {
        key: _,
        value: o
      });
    }
    for (let {key: E, value: i} of n.values()) if (Tmt(E, i)) process.env[E] = i;
    yPr(this.settingsEnvForChildren);
    let r = process.env[qT];
    if (!r || r === this.materializedProcessWrapper) {
      let E = [ this.processWrapperKeyFrom("policySettings"), this.processWrapperKeyFrom("flagSettings"), dn("userSettings") ? this.processWrapperKeyFrom("userSettings") : void 0 ].find(i => typeof i === "string" && i !== "");
      if (E !== void 0) process.env[qT] = E, this.materializedProcessWrapper = E;
    }
    this.enforceManagedOtelFamilyDominance(), this.resetSettingsIfUserSettingsFileMoved(e);
  }
  applyConfigEnvironmentVariables() {
    this.getPreSettingsEnvSnapshot(), this.providerStripContext = v(), this.settingsEnvForChildren = {};
    let e = a.NODE_EXTRA_CA_CERTS, n = a.CLAUDE_CODE_CERT_STORE, r = a.NODE_OPTIONS, E = a.CLAUDE_CODE_CLIENT_CERT, i = a.CLAUDE_CODE_CLIENT_KEY;
    this.appliedGlobalConfigEnv = this.filterSettingsEnv(ce().env, "globalConfig"), 
    Object.assign(process.env, this.appliedGlobalConfigEnv), this.fullPassDroppedGitKey = !1;
    for (let O of jo()) Object.assign(process.env, this.filterSettingsEnv(fe(O)?.env, O, () => {
      this.fullPassDroppedGitKey = !0;
    }));
    yPr(this.settingsEnvForChildren), this.enforceManagedOtelFamilyDominance();
    let _ = a.NODE_EXTRA_CA_CERTS !== e || a.CLAUDE_CODE_CLIENT_CERT !== E || a.CLAUDE_CODE_CLIENT_KEY !== i;
    if (a.NODE_EXTRA_CA_CERTS !== e || a.CLAUDE_CODE_CERT_STORE !== n || a.NODE_OPTIONS !== r) _Oo();
    let {certPath: o, keyPath: s} = wOo(), C = (a.CLAUDE_CODE_CLIENT_CERT !== o || a.CLAUDE_CODE_CLIENT_KEY !== s) && (o !== void 0 || s !== void 0);
    if (!C) BOr();
    rme(), XS(), Promise.all([ nme(), lX() ]).then(([O, D]) => {
      if (C && D.readFailed) BOr();
      if (_ || C || O || D.changed) rme(), XS();
    }).catch(d);
  }
}

var R = new k, Kt = MG({
  clear: Ie
});

function kse() {
  try {
    R.applySafeConfigEnvironmentVariables();
  } finally {
    ERo();
  }
  wPe();
}

function uC() {
  try {
    R.applyConfigEnvironmentVariables();
  } finally {
    ERo();
  }
  wPe();
}

function Vbo() {
  return R.servedFolderEnvWasWithheld();
}

function Ie() {
  R.reset();
}

export { H1, gkr, e5, QCs, cC, hkr, lUe, YMt, tjn, qct, ykr, _kr, Wbo, zbo, pk, q6e, Y6e, fh, aZ, Gbo, t5, XMt, dUe, kse, uC, Vbo };
