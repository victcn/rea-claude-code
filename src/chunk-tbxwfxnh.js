// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, ve } from "./chunk-3pqddg8f.js";

import { g } from "./chunk-3ykz5st8.js";

import { Ke, k } from "./chunk-xywp7esx.js";

import { d } from "./chunk-6ah1819r.js";

import { QAs, ZAs, eCs, tCs, Obo, nCs, q1n, rCs, oCs, sCs, Dbo, hCs, yCs, Lbo, Vct, _Cs } from "./chunk-gmq0qwep.js";

import { cfr, xe, Wt } from "./chunk-84yp45y8.js";

var C = "tengu_lantern_wick_release", x = "tengu_lantern_wick_braid", I = "tengu_lantern_wick_braid_text", w = "tengu_lantern_wick_braid_release", y = "tengu_lantern_wick_text_by_model", L = "tengu_lantern_wick_release_by_model";

function P(t, n, e) {
  return P5r(t, e) ?? k(n, "");
}

function P5r(t, n) {
  let e = k(t, {});
  if (typeof e !== "object" || e === null) return;
  let u = e;
  return [ n, Ke(n), "default" ].map(a => u[a]).find(a => typeof a === "string");
}

function S(t) {
  let n = typeof t === "string" ? t.trim() : "";
  return n ? `[${n}]` : "";
}

function _(t) {
  for (let n = t.length - 1; n >= 0; n--) {
    let e = t[n];
    if (e?.type === "user" && e.usageLimitNote !== void 0) return e.usageLimitNote;
  }
  return;
}

function* BXo(t, {resumeActive: n, isMainLoop: e, querySource: u, depth: a, model: N, toolUseContext: p, now: c, uuid: l}) {
  let {agentContext: m} = p, W = !e && u.startsWith("agent:") && m.agentType !== "teammate" && !(m.agentType === "subagent" && m.workflowRunId);
  if (n || !(e || W)) return t;
  let o = [];
  try {
    let s = e && a === 0 && cfr(t), A = s && Lbo();
    if (e && a === 0 && !A) Dbo();
    let R = !1, E = !1;
    if (e && (a > 0 || A)) {
      if (E = hCs(), A && !E) {
        let r = _(t);
        if (r !== "wrap_up" && r !== "near_limit") Dbo();
      }
    }
    if (e ? E : Lbo() && k(x, !1) === !0 && _(t) !== "wrap_up") {
      let r = (e ? null : Obo(k(I, ""))) ?? Obo(P(y, tCs, N)), i = r !== null ? "custom" : eCs(k(ZAs, "off"));
      if (i !== "off") {
        if (o.push(xe({
          content: r ?? (i === "next-steps" ? nCs : QAs),
          isMeta: !0,
          turnCompanion: !0,
          usageLimitNote: "wrap_up",
          now: c,
          uuidFn: l
        })), g(e ? "usage_limit_grace_wrapup" : "usage_limit_grace_wrapup_subagent", {
          next_steps: i === "next-steps",
          custom: i === "custom"
        }), R = !0, e) yCs();
      }
    }
    let G = !e || s ? Vct() : null, T = G !== null && G.extraUsageStatus === void 0, U;
    if (e) {
      let r = a === 0 ? _(t) : void 0;
      U = !T && (r === "wrap_up" || r === "near_limit");
    } else U = !T && _(t) === "wrap_up" && k(x, !1) === !0;
    if (U) {
      let r = (e ? "" : S(k(w, ""))) || S(P(L, C, N));
      if (r) o.push(xe({
        content: r,
        isMeta: !0,
        turnCompanion: !0,
        usageLimitNote: "release",
        now: c,
        uuidFn: l
      })), g(e ? "usage_limit_grace_release" : "usage_limit_grace_release_subagent");
    }
    if (e && a > 0 && _Cs() && k(q1n, !1)) {
      if (o.push(Wt(oCs, sCs)), !R) o.push(xe({
        content: rCs,
        isMeta: !0,
        turnCompanion: !0,
        usageLimitNote: "near_limit",
        now: c,
        uuidFn: l
      }));
      if (g("usage_limit_near_wrapup"), !ve()) import("./chunk-34mmm3jv.js").then(({performRateLimitCheckpoint: r}) => r({
        todos: p.getAppState().todos[p.agentId ?? q()] ?? [],
        trigger: "near_limit"
      })).catch(() => {});
    }
  } catch (s) {
    d(s);
  }
  let f = [];
  for (let s of o) if (yield s, s.type === "user") f.push(s);
  return f.length === 0 ? t : [ ...t, ...f ];
}

export { P5r, BXo };
