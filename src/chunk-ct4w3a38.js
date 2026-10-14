// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Mu, Ddn } from "./chunk-3pqddg8f.js";

import { Jn, Ot, yu, Hu, TT, kcn, _Ft, iWe, bFt, aWe, SFt, wFt, vFt, EFt, fMe, vq, j, zr, k$o, yD, C$o, Ms } from "./chunk-b0z4bv3v.js";

import { a } from "./chunk-j016gcgm.js";

import { kp, Hj } from "./chunk-5brm0azz.js";

import { Ru } from "./chunk-qqd24q2y.js";

import { q$s, $qn, Y$s, X$s, cln, J$s } from "./chunk-zscnwzv2.js";

import { QPs, ZPs, Qe, Ke, SRr, ZDt, J1, UZ, nTo, BO, Vpt } from "./chunk-xywp7esx.js";

import { mRs } from "./chunk-fmrcybq2.js";

import { utn, Ybo, Xbo } from "./chunk-9ft3x8jh.js";

import { Mfe, Mt } from "./chunk-3kd8r7rn.js";

import { O } from "./chunk-1xnsr4dy.js";

import { createHash as R } from "crypto";

import { release as y } from "os";

var I = "claude-code-error-tracking";

function F(e) {
  return e ? {
    version: `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION}_${e}`,
    sourcemapGroup: e
  } : {
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION,
    sourcemapGroup: "none"
  };
}

var k = 30;

function D() {
  let e = utn();
  if (e.cachedUserBucket !== void 0) return e.cachedUserBucket;
  let r = BO(), o = R("sha256").update(r).digest("hex");
  return e.cachedUserBucket = parseInt(o.slice(0, 8), 16) % k, e.cachedUserBucket;
}

function v(e, r) {
  let o = r.slice(0, 3).map(n => X$s(n) ? `${n.function ?? "?"}@${n.file}:${n.line ?? "?"}:${n.column ?? "?"}` : `${n.function ?? "?"}@${q$s(n.file)}`).join("|");
  return R("sha256").update(`${e}\n${o}`).digest("hex").slice(0, 16);
}

var b = new Set(Mfe);

function M() {
  try {
    let e = Qe();
    if (!e) return;
    let r = Ke(Mt(e), {
      identity: !0
    });
    return b.has(r) ? r : "other";
  } catch {
    return;
  }
}

var P = 50;

function U() {
  try {
    let e = UZ(), r = nTo(), o = {}, n = 0;
    for (let [t, s] of Object.entries(e)) if (typeof s === "boolean" && r.has(t)) {
      if (o[t] = s, ++n >= P) break;
    }
    return o;
  } catch {
    return {};
  }
}

function x(e) {
  let r = e.issues;
  if (!Array.isArray(r) || r.length === 0) return;
  let o = r.map(n => n?.code).filter(n => typeof n === "string" && /^[a-z_]{1,40}$/.test(n));
  return `${r.length} issue(s): ${o.join(",")}`;
}

function L() {}

var B = !L.name.startsWith("errorTrackingIdentifierProbe"), w = [ [ "APIUserAbortError", yu ], [ "APIConnectionTimeoutError", TT ], [ "APIConnectionError", Hu ], [ "BadRequestError", _Ft ], [ "AuthenticationError", iWe ], [ "PermissionDeniedError", bFt ], [ "NotFoundError", aWe ], [ "ConflictError", SFt ], [ "UnprocessableEntityError", wFt ], [ "RateLimitError", vFt ], [ "InternalServerError", EFt ], [ "APIError", Ot ], [ "RetryableError", kcn ], [ "WorkloadIdentityError", Ru ], [ "AnthropicError", Jn ], [ "ClaudeError", fMe ] ], S = /_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS$/;

function gso(e, r = B) {
  let o = typeof e.constructor?.name === "string" ? e.constructor.name.replace(S, "") : void 0, n = r && e instanceof fMe && e.name === o, c = ((typeof e.name === "string" && e.name !== "Error" && !n ? e.name : void 0) || (!r && yD(o) !== void 0 ? o : w.find(([, i]) => e instanceof i)?.[0]) || "Error").replace(S, "");
  return yD(c) ?? "Error";
}

var G = 20;

function K(e, r, o) {
  let n = cln(e), t = Y$s(n), s = n.slice(0, G), c = vq(e), i = t && c === void 0 ? `thrown outside the Claude Code bundle (${o})` : ZPs(QPs(e, c ?? x(e) ?? e.message ?? String(e))), A = J$s({
    name: o,
    message: i
  }, s), {version: l, sourcemapGroup: C} = F({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.DD_SOURCEMAP_GROUP), N = v(o, s), E = D(), u = M(), T = typeof Bun < "u" && !0, m = zr(e), p = k$o(e), f = a.CLAUDE_CODE_ENTRYPOINT === void 0 ? "cli" : kp() ?? "other", d = J1(), g = Ddn(), _ = SRr(), h = X(y());
  return {
    ddtags: [ `service:${I}`, "team:claude-code", `version:${l}`, "env:external", `origin:${r}`, `platform:${O()}`, `os_release:${h}`, `user_bucket:${E}`, `entrypoint:${f}`, `node_version:${process.versions.node}`, "bun_version:1.4.3", `is_native_runtime:${T}`, ...u ? [ `model:${u}` ] : [], ...m ? [ `error_code:${m}` ] : [], ...p !== void 0 ? [ `child_exit_status:${p}` ] : [], ...d ? [ `session_kind:${d}` ] : [], ...d ? [ `has_attacher:${Mu() ? "1" : "0"}` ] : [], ...g ? [ `renderer_mode:${g}` ] : [], ..._ ? [ `remote_control_lane:${_}` ] : [], ...ZDt() ? [ "projects_session:1" ] : [] ].join(","),
    service: I,
    hostname: "claude-code",
    status: "error",
    message: `${o}: ${i}`.slice(0, 4e3),
    timestamp: (new Date).toISOString(),
    error: {
      kind: o,
      message: i.slice(0, 4e3),
      stack: A.slice(0, 16e3),
      fingerprint: N,
      handling: r === "logError" ? "handled" : "unhandled"
    },
    version: l,
    sourcemap_group: C,
    env: "external",
    user_bucket: E,
    origin: r,
    host_platform: O(),
    host_os_release: h,
    host_name_redacted: Vpt().slice(0, 12),
    entrypoint: f,
    node_version: process.versions.node,
    bun_version: "1.4.3",
    ...u && {
      model: u
    },
    error_frames: s,
    feature_flags: U()
  };
}

var V = new Set([ "APIUserAbortError", "AuthenticationError", "McpSessionExpiredError" ]), W = [ {
  messagePrefix: "File does not exist",
  topFrameIncludes: "FileReadTool.ts"
} ], z = [ {
  topFile: "node:net",
  topFunction: "internalConnectMultipleTimeout"
}, {
  topFile: "node:_http_server",
  topFunction: "#onClose"
} ];

function H(e) {
  let r = cln(e, 20), o = r[0];
  if (!o || r.some($qn)) return !1;
  return z.some(n => o.file === n.topFile && o.function === n.topFunction);
}

function Y() {
  return a.CLAUDE_CODE_REMOTE === !0 || Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) || Boolean(a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE);
}

function q(e, r) {
  if (V.has(r)) return !0;
  if (Hj() && !Y() && Ms(e) && e.code !== void 0 && C$o.has(e.code) && (e.syscall === "mkdir" || e.syscall === "open") && O() !== "windows") return !0;
  let o = e.message ?? "";
  return W.some(n => o.startsWith(n.messagePrefix) && (e.stack?.split(`\n`).find(t => t.trim().startsWith("at ")) ?? "").includes(n.topFrameIncludes));
}

function X(e) {
  let r = /^(\d+)\.(\d+)/.exec(e);
  return r ? `${r[1]}.${r[2]}` : "unknown";
}

function hNe(e, r = "logError") {
  if (!mRs()) return;
  try {
    let o = j(e), n = gso(o);
    if (r === "logError" && q(o, n)) return;
    if ((r === "unhandled_rejection" || r === "uncaught_exception") && H(o)) return;
    if (Ybo()) return;
    let t = K(o, r, n);
    Xbo(t);
  } catch {}
}

export { gso, hNe };
