// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { JU, cg, EEe, nNo, kDr, Jdn, Ume, hht, TDr, Qdn, Zdn, sFt, mYn, g6, iFt } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { k } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { HLn } from "./chunk-bjsp1prn.js";

import { Yq } from "./chunk-z2dg9j7n.js";

var A = import.meta.require("./chunk-wwmxzq84.js"), _ = 60, PGe = 3600, x = 1200, P = 1;

function L(e, o) {
  i("tengu_loop_ended", {
    reason: c(e),
    ...o
  }), mYn(!0), sFt();
}

function v4o() {
  let e = a.CLAUDE_CODE_LOOP_KEEPALIVE;
  if (e !== void 0) return e;
  return k("tengu_kairos_loop_keepalive", !0);
}

function E4o(e, o, n, r) {
  return C(e, o, {
    viaKeepalive: !1,
    reason: n,
    toolUseId: r
  });
}

function k4o(e) {
  if (TDr() >= P) return t("[loop] keepalive budget exhausted (model declined to reschedule twice) \u2014 ending loop"), 
  L("model_stopped", {
    via_keepalive: !0
  }), null;
  return C(x, e, {
    viaKeepalive: !0
  });
}

function o2r() {
  mYn(!1), sFt();
}

function T4o() {
  let e = Zdn(), o = cg().filter(r => r.kind === "loop"), n = Ume();
  if (hht(null), Qdn(0), g6(o.map(r => r.id)), o.length === 0) M();
  for (let r of o) Jdn(r.prompt);
  if (n !== null) Jdn(n);
  if (e) return t("[loop] ScheduleWakeup({stop:true}) after loop already ended \u2014 cleanup only, terminal event suppressed"), 
  o.length;
  return t(`[loop] model called ScheduleWakeup({stop:true}) \u2014 ending loop (${o.length} pending wakeup(s) cancelled${n !== null ? ", tick in flight" : ""})`), 
  L("model_stopped", {
    via_keepalive: !1
  }), g("loop_schedule_wakeup"), o.length;
}

function C(e, o, n) {
  let {viaKeepalive: r, reason: l, toolUseId: u} = n;
  if (!r) Qdn(0);
  let s = y(), d = Date.now(), p = nNo(o), v = p !== void 0 && d > p.lastScheduledFor + PGe * 1e3, h = p === void 0 || v ? d : p.startedAt, E = Yq().recurringMaxAgeMs;
  if (E > 0 && d - h >= E) {
    if (!p?.agedOut) kDr(o, {
      startedAt: h,
      lastScheduledFor: d - (PGe - _) * 1e3,
      agedOut: !0
    }), i("tengu_loop_dynamic_wakeup_aged_out", {
      loop_age_ms: d - h,
      max_age_ms: E
    }), L("aged_out", {
      via_keepalive: r
    }), f("loop_schedule_wakeup", "loop_wakeup_aged_out");
    return null;
  }
  let {clamped: m, wasClamped: b, targetMs: S, createdAt: D} = F(e);
  if (w({
    targetMs: S,
    createdAt: D,
    prompt: o,
    reason: l,
    chainStartedAt: h,
    viaKeepalive: r,
    toolUseId: u
  }), r) return Qdn(TDr() + 1), t(`[loop] keepalive armed (model did not reschedule): ${m}s fallback`), 
  i("tengu_loop_keepalive_fired", {
    clamped_delay_seconds: m,
    prompt_is_sentinel: A.isLoopDefaultSentinel(o)
  }), f("loop_schedule_wakeup", "model_no_reschedule"), {
    scheduledFor: S,
    clampedDelaySeconds: m,
    wasClamped: b
  };
  return t(`[loop] dynamic wakeup scheduled: ${m}s${b ? ` (clamped from ${e}s)` : ""}${l !== void 0 ? ` \u2014 ${l}` : ""}`), 
  i("tengu_loop_dynamic_wakeup_scheduled", {
    chosen_delay_seconds: Number.isFinite(e) ? e : 0,
    clamped_delay_seconds: m,
    was_clamped: b,
    reason_length: l?.length ?? 0,
    superseded_count: s
  }), g("loop_schedule_wakeup"), {
    scheduledFor: S,
    clampedDelaySeconds: m,
    wasClamped: b
  };
}

function A4o({scheduledFor: e, prompt: o, reason: n, chainStartedAt: r}) {
  let l = Date.now();
  if (e <= l || _2()) return;
  w({
    targetMs: e,
    createdAt: Math.max(l, e - 6e4),
    prompt: o,
    reason: n,
    chainStartedAt: Math.min(r, l),
    viaKeepalive: !1,
    toolUseId: void 0
  }), t(`[loop] re-armed pending wakeup for ${new Date(e).toISOString()} after resume`);
}

function w({targetMs: e, createdAt: o, prompt: n, reason: r, chainStartedAt: l, viaKeepalive: u, toolUseId: s}) {
  let d = new Date(e);
  if (EEe({
    id: T(),
    cron: `${d.getMinutes()} ${d.getHours()} * * *`,
    prompt: n,
    createdAt: o,
    kind: "loop",
    scheduledFor: e,
    reason: r,
    ...u && {
      keepalive: !0
    }
  }), kDr(n, {
    startedAt: l,
    lastScheduledFor: e
  }), JU(!0), mYn(!1), s !== void 0) iFt({
    toolUseId: s,
    scheduledFor: e,
    chainStartedAt: l
  });
}

function F(e) {
  let o;
  if (Number.isNaN(e)) o = _; else if (e === 1 / 0) o = PGe; else if (e === -1 / 0) o = _; else o = Math.round(e);
  let n = Math.max(_, Math.min(PGe, o)), r = !Number.isFinite(e) || o !== n, l = Date.now(), u = l + n * 1e3, s = O(u), d = Yq().cacheLeadMs;
  if (d > 0 && n * 1e3 <= HLn) {
    let v = HLn - d;
    while (s - l > v && s - 6e4 >= l + _ * 1e3) s -= 6e4;
  }
  let p = u < s ? u : s - 1;
  return {
    clamped: n,
    wasClamped: r,
    targetMs: s,
    createdAt: p
  };
}

function O(e) {
  return Math.ceil(e / 6e4) * 6e4;
}

function T() {
  return Math.floor(Math.random() * 4294967295).toString(16).padStart(8, "0");
}

function y() {
  let e = cg().filter(o => o.kind === "loop").map(o => o.id);
  if (e.length === 0) return 0;
  return g6(e);
}

function M() {
  iFt(void 0);
}

function _2() {
  return cg().some(e => e.kind === "loop");
}

function d7n() {
  let e = cg().filter(n => n.kind === "loop"), o = Ume();
  if (hht(null), Qdn(0), e.length === 0) M();
  if (e.length === 0 && o === null) return 0;
  g6(e.map(n => n.id));
  for (let n of e) Jdn(n.prompt);
  if (o !== null) Jdn(o);
  return t(`[loop/dynamic] cancelled ${e.length} pending loop wakeup(s) on user abort${o !== null ? " (tick in flight)" : ""}`), 
  L("user_abort", {
    loops_cancelled: e.length
  }), g("loop_cancel_all"), e.length;
}

export { PGe, v4o, E4o, k4o, o2r, T4o, A4o, _2, d7n };
