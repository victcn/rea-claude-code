// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { VZt, YOt, cBn, uBn } from "./chunk-5vba4ath.js";

import { Tae } from "./chunk-vxr6sv7z.js";

import { lt } from "./chunk-3pqddg8f.js";

import { t } from "./chunk-kawq2919.js";

import { ua } from "./chunk-q6wab2jw.js";

import { eLr, yWe, _We } from "./chunk-mxxd635s.js";

import { tQe, Ycn } from "./chunk-rjg7kw3m.js";

import { Iss } from "./chunk-84yp45y8.js";

import { oT, DS } from "./chunk-f4r8hspx.js";

import { Kn } from "./chunk-gmn1ce75.js";

import { o, T, De, Kr, U, A } from "./chunk-cvcg6n1z.js";

import { pS } from "./chunk-0bq6eb61.js";

var d = 128, u = 16, f = 256, _ = [ "background_operator", "unresolved_shell_write" ];

function EFo(e) {
  return e.step === "run" && e.approval !== void 0;
}

var m = p(() => o().max(d).regex(/^[\w.:@-]+$/).regex(/[^.]/)), U0r = p(() => o().refine(Tae)), g = p(() => T(o().max(d)).max(u).transform(e => _.filter(r => e.includes(r)))), S = p(() => o().max(f).regex(/^\P{Cc}+$/u)), B0r = p(() => o().regex(pS)), R = p(() => {
  let e = {
    tool_host_interface: YOt(),
    tool_use_id: m(),
    agent_id: U0r().optional(),
    main_loop_model: S(),
    classifier_may_approve: g().optional(),
    agent_has_read_tool: A(!0).optional(),
    agent_effort_level: U(ua).optional(),
    permission_context: yWe()
  };
  return Kr("step", [ De({
    ...e,
    step: A("check")
  }), De({
    ...e,
    step: A("run"),
    approval: De({
      ask_digest: B0r(),
      approver: U(Iss),
      permission_context: yWe()
    }).optional()
  }) ]);
});

function kFo(e, r = VZt) {
  let s = Kn(e) ? e[tQe] : void 0;
  if (s === void 0) return {
    kind: "absent"
  };
  if (!Ycn(s)) return {
    kind: "other_request"
  };
  let n = cBn(s.tool_host_interface);
  if (n === void 0) return {
    kind: "malformed"
  };
  switch (uBn(r, n).kind) {
   case "peer_too_old":
    return {
      kind: "session_too_old",
      session: n
    };

   case "self_too_old":
    return {
      kind: "daemon_too_old",
      session: n
    };

   case "agreed":
    break;
  }
  let i = Kn(s.approval) ? s.approval : void 0;
  if (_We(s.permission_context) || _We(i?.permission_context)) return {
    kind: "too_large"
  };
  let a = R().safeParse(s);
  if (a.success) return {
    kind: "requested",
    request: a.data
  };
  return {
    kind: eLr(s.permission_context) || eLr(i?.permission_context) ? "unlisted_restriction_on" : "malformed"
  };
}

import { randomUUID as y } from "crypto";

var h = 1024, l = 32;

function c() {
  return DS(oT, void 0, !0);
}

var Hht = new lt(() => ({
  id: y(),
  runningRuns: new Set,
  finishedRuns: new Set,
  readFileState: c(),
  subagentReadFileStates: new Map,
  changedFilesPasses: new WeakMap
}));

function TFo(e) {
  return Hht.of(e).id;
}

function AFo(e, r) {
  let {runningRuns: s, finishedRuns: n} = Hht.of(e);
  if (s.has(r) || n.has(r)) return !1;
  return s.add(r), !0;
}

function CFo(e, r) {
  let {runningRuns: s, finishedRuns: n} = Hht.of(e);
  if (!s.delete(r)) return;
  n.add(r);
  let [i] = n;
  if (n.size > h && i !== void 0) n.delete(i);
}

function RFo(e, r) {
  let {readFileState: s, subagentReadFileStates: n} = Hht.of(e);
  return r === void 0 ? s : n.get(r);
}

function xFo(e, r) {
  let {readFileState: s, subagentReadFileStates: n} = Hht.of(e);
  if (r === void 0) return s;
  let i = n.get(r) ?? c();
  n.delete(r), n.set(r, i);
  let [a] = n.keys();
  if (n.size > l && a !== void 0) n.delete(a), t(`[mcp serve] more than ${l} subagents: dropped the read record of ${a}`);
  return i;
}

export { EFo, U0r, B0r, kFo, Hht, TFo, AFo, CFo, RFo, xFo };
