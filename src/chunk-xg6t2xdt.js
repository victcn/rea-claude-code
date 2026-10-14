// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c, pe } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { Cp } from "./chunk-6ah1819r.js";

import { t } from "./chunk-kawq2919.js";

import { Vh, Rr } from "./chunk-xywp7esx.js";

import { Ld } from "./chunk-q6wab2jw.js";

import { rg } from "./chunk-jnzpsr0d.js";

import { zo } from "./chunk-htg8b98h.js";

import { MM } from "./chunk-ce64fmea.js";

import { KB, T_ } from "./chunk-84yp45y8.js";

import { Zk } from "./chunk-sn25q2cq.js";

import { s4 } from "./chunk-wrna5qjd.js";

import { Tu } from "./chunk-dq67x9kz.js";

var R = "tengu_tranquil_fern";

function f() {
  return Rr(R, !0);
}

function ZWr() {
  return {
    source: "none",
    trustedMode: void 0,
    recordedMode: "absent"
  };
}

function RKo(e) {
  if (e.source !== "none") return "restored";
  return (e.recordedMode === "plan" || e.transcriptOpen === !0) && e.trustedMode !== "plan" ? "declined" : "none";
}

function g(e) {
  if (e === void 0 || e === null) return "absent";
  return typeof e === "string" && rg(e) || "invalid";
}

function P(e) {
  return {
    ...MM(e.mode, "plan", e),
    mode: "plan"
  };
}

function S(e) {
  return {
    ...e,
    toolPermissionContext: P(e.toolPermissionContext)
  };
}

function _(e) {
  return f() && e.mode !== "plan" && s4.isEnabled() && !zo(e, s4);
}

function S1s(e, n, {forkSession: o, transcript: s} = {}) {
  if (n.recordedMode = g(e?.worker_permission_mode), n.recordedMode === "invalid") t("[planModeResume] ignoring unrecognized internal_metadata.worker_permission_mode", {
    level: "warn"
  });
  if (n.recordedMode === "plan" && s && f()) n.recordTranscriptState = nQn(s);
  return r => {
    if (n.trustedMode ??= r.toolPermissionContext.mode, n.recordedMode !== "plan" || o || !_(r.toolPermissionContext)) return r;
    return n.source = "internal", t(`[planModeResume] re-entering plan mode from the prior worker's record (was ${r.toolPermissionContext.mode})`), 
    S(r);
  };
}

function ezr(e, n, {planModeOnResume: o, restored: s, restartedWorker: r}) {
  let a = Boolean(s?.external || s?.internal);
  if (r && !a) return;
  if (e.enableWorkerPermissionModeRecord(), o !== void 0 && a) e.notifyInternalMetadataChanged({
    worker_permission_mode: Ld(n)
  });
}

function xKo(e, n, o, s) {
  let r = s && n.source === "none" && (n.recordedMode === "absent" || n.recordedMode === "invalid") && f() && nQn(e) === "open";
  if (r) n.transcriptOpen = !0;
  o(a => {
    if (n.trustedMode ??= a.toolPermissionContext.mode, !r || a.toolPermissionContext.mode === "plan" || zo(a.toolPermissionContext, s4)) return a;
    return n.source = "transcript", t(`[planModeResume] re-entering plan mode from the transcript's open plan segment (was ${a.toolPermissionContext.mode})`), 
    S(a);
  });
}

function nQn(e) {
  let n = `<${Cp}>/plan</${Cp}>`, o = new Set, s = new Set, r = x(e), a = !1, d = () => a ? "none" : "open";
  for (let M = e.length - 1; M >= 0; M--) {
    let l = e[M];
    if (l.type === "attachment") {
      let m = l.attachment.type;
      if (m === "plan_mode" || m === "plan_mode_reentry") return d();
      if (m === "plan_mode_exit") return "exited";
    } else if (l.type === "assistant" && Array.isArray(l.message.content)) {
      let m = l.message.content;
      for (let p = m.length - 1; p >= 0; p--) {
        let u = m[p];
        if (u.type !== "tool_use") continue;
        if (u.name === Tu && s.has(u.id) && !o.has(u.id) && !r.has(u.id)) return "exited";
        if (u.name === Zk && s.has(u.id) && (!o.has(u.id) || r.has(u.id))) return d();
      }
    } else if (l.type === "user" && KB(l)) {
      let m = l.message.content;
      if (Array.isArray(m)) {
        for (let p of m) if (p.type === "tool_result") (p.is_error || y(l, p.content) ? o : s).add(p.tool_use_id);
      }
    } else if (l.type === "user") {
      if (T_(l)?.trimStart().startsWith(n)) return d();
      if (l.permissionMode === "plan") return d();
      if (l.permissionMode !== void 0 && !l.isMeta && Vh(l.origin)) a = !0;
    }
  }
  return "none";
}

function x(e) {
  let n = new Set, o = new Set;
  for (let s of e) {
    if (s.type !== "assistant" || !Array.isArray(s.message.content)) continue;
    for (let r of s.message.content) {
      if (r.type !== "tool_use") continue;
      if (n.has(r.id)) o.add(r.id); else n.add(r.id);
    }
  }
  return o;
}

function y(e, n) {
  let o = e.toolUseResult;
  if (o !== null && typeof o === "object" && o.awaitingLeaderApproval === !0) return !0;
  return typeof n === "string" && n.startsWith("Your plan has been submitted to the team lead");
}

function rQn({sdkUrl: e, permissionModeSuppliedOnInvocation: n, forkSession: o}) {
  if (!s4.isEnabled() || o) return !1;
  return !!e || n === !1;
}

function tzr(e, n, o) {
  let s = ZWr();
  return xKo(e, s, o, rQn(n)), nzr(s, {
    lane: n.sdkUrl ? "sdk_url" : "print",
    hadExternal: !1,
    hadInternal: !1
  }), RKo(s);
}

function oQn(e, n, {lane: o, forkSession: s, transcript: r}) {
  let a = ZWr();
  if (n(S1s(e?.internal, a, {
    forkSession: s,
    transcript: r?.messages
  })), r) xKo(r.sourceRows, a, n, r.sourceAllowed);
  return nzr(a, {
    lane: o,
    hadExternal: !!e?.external,
    hadInternal: !!e?.internal
  }), RKo(a);
}

function Kqs(e, {storedPermissionMode: n, messages: o, forkSession: s, startupModePinned: r, lane: a}) {
  let d = ZWr();
  if (d.trustedMode = e.mode, d.recordedMode = g(n), !r && !s && _(e)) {
    if (d.recordedMode === "plan") {
      if (d.recordTranscriptState = nQn(o), d.recordTranscriptState !== "exited") d.source = "stored";
    } else if ((d.recordedMode === "absent" || d.recordedMode === "invalid") && nQn(o) === "open") d.transcriptOpen = !0, 
    d.source = "transcript";
  }
  if (nzr(d, {
    lane: a,
    hadExternal: !1,
    hadInternal: !1
  }), d.source === "none") return;
  return t(`[planModeResume] re-entering plan mode on resume (source: ${d.source}, was ${e.mode})`), 
  P(e);
}

function nzr(e, {lane: n, hadExternal: o, hadInternal: s}) {
  let r = e.source === "none" ? e.trustedMode : "plan";
  i("tengu_worker_permission_mode_restore", {
    source: c(e.source),
    lane: c(n),
    trusted_mode: pe(e.trustedMode),
    recorded_mode: c(e.recordedMode),
    target_mode: pe(r),
    had_external: o,
    had_internal: s,
    guard_enabled: f(),
    ...e.recordTranscriptState && {
      record_transcript_state: c(e.recordTranscriptState)
    },
    ...e.transcriptOpen && {
      transcript_open: !0
    }
  });
}

export { ZWr, RKo, S1s, ezr, xKo, nQn, rQn, tzr, oQn, Kqs, nzr };
