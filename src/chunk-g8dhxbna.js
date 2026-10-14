// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, B, Ze, Oc } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { xfe, h1e } from "./chunk-dd98x6x7.js";

import { rie, _Eo, zh, Qe, TZ, Ke, hk, It, vt, An, pie, Tm } from "./chunk-xywp7esx.js";

import { swe, ra, Y1n, pCs, itn } from "./chunk-gmq0qwep.js";

import { Pa } from "./chunk-4v78v8fd.js";

import { pTt, tO, ixn, K_e, WQ, pR, OT, xS, vfr } from "./chunk-84yp45y8.js";

import { P5r } from "./chunk-tbxwfxnh.js";

import { eKt, ekn, Wnr, IDe, tKt, jXo, tkn } from "./chunk-v7mfmqmn.js";

import { randomUUID as D } from "crypto";

var H = "later", G = "Your claude.ai usage limit has reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.", z = "tengu_lantern_wick_resume_by_model", V = "Your claude.ai usage is available again before the usage-limit reset. Continue the task you were working on when the limit was reached; do not repeat work that is already complete.", Y = 2, I = [ 6e4, 3e5 ], X = 3e4, J = 9e4, Z = 18e5, ee = 216e5;

function te() {
  return {
    state: {
      phase: "idle"
    },
    consecutiveRearms: 0,
    armedAtMs: 0,
    lastArmedResetsAtSeconds: 0,
    lastObservedMs: null,
    takeoverUuids: new Set,
    queuedBeforeArmUuids: new Set,
    handoffInProgress: !1,
    dispatchingTakeoverUuids: new Set,
    pendingContinuationUuid: null,
    activeTurnClaim: null,
    episodeArmOrigin: "dialog",
    sleptThroughReset: !1,
    confirmingMainModel: !1,
    recheckRequestedWhileConfirming: !1,
    armedResetKeys: new Set,
    autoArmDedupeResetKeys: new Set,
    changed: Me(),
    events: Me(),
    autoContinueKeyPresence: "unscanned",
    storageV5: void 0,
    unsubscribeSettingsChanges: null,
    unknowableRescanDelayMs: 2e3,
    unknowableRescanTimer: void 0,
    revocationRescan: "idle",
    revocationRescanGeneration: 0,
    limitsSubscriptionStarted: !1,
    unsubscribeQuotaRejected: null,
    unsubscribeSessionSwitch: null
  };
}

var oe = new K(te);

function u() {
  let e = B().host, t = oe.of(e), o = ixn.of(e);
  if (!o.provided) o.provide(() => r(t));
  return t;
}

function S(e, t, o = 0) {
  if (typeof e !== "number" && typeof e !== "string") return t;
  let n = Number(e);
  if (!Number.isFinite(n) || n < 0) return t;
  return Math.min(Math.max(Math.round(n), o), ee);
}

var ne = 6e4;

function qEn() {
  return M(u());
}

function M(e) {
  return ekn(e.autoContinueKeyPresence);
}

function DXo(e) {
  let t = u();
  if (e === "auto_restore_cancel") return;
  if (!r(t)) return;
  Q(t, "conversation_reset");
}

var ae = 2;

async function A(e, t = ae) {
  try {
    e.autoContinueKeyPresence = await h1e("autoContinueAtUsageLimit", e.storageV5);
  } catch (o) {
    e.autoContinueKeyPresence = "unknowable", d(o);
  }
  if (e.autoContinueKeyPresence !== "unknowable") e.revocationRescan = "idle", e.revocationRescanGeneration++;
  if (clearTimeout(e.unknowableRescanTimer), e.autoContinueKeyPresence === "unknowable" && t > 0) e.unknowableRescanTimer = setTimeout((o, n) => {
    A(o, n);
  }, e.unknowableRescanDelayMs, e, t - 1), e.unknowableRescanTimer.unref?.();
}

function YEn() {
  let e = xfe("autoContinueAtUsageLimit")[0]?.source;
  return e === void 0 || e === "userSettings";
}

function xtt(e) {
  return vt() && An()?.billingType !== "usage_based" && tO(e) && jXo();
}

function zhe() {
  return u().state;
}

function LXo() {
  let e = u();
  return e.state.phase === "armed" && e.episodeArmOrigin === "auto";
}

function L(e) {
  let t = ra();
  if (t.status === "rejected" && t.resetsAt !== void 0) e.armedResetKeys.add(t.resetsAt);
}

function X2e(e) {
  return u().armedResetKeys.has(e);
}

function H2() {
  return u().state.phase === "armed";
}

function r(e) {
  return e.state.phase === "armed" || e.state.phase === "stale" || e.activeTurnClaim !== null || e.dispatchingTakeoverUuids.size > 0 || pR().some(t => b(e, t)) || vfr(t => b(e, t));
}

function se(e) {
  return K_e(e) && WQ(e);
}

function b(e, t) {
  return t.uuid !== void 0 && (t.uuid === e.pendingContinuationUuid || e.takeoverUuids.has(t.uuid));
}

function v5r() {
  return r(u());
}

function J2e(e) {
  return k(u(), e);
}

function k(e, t) {
  return t === "armed" || t === "stale" || T(e);
}

function Evt() {
  return T(u());
}

function T(e) {
  let t = e.pendingContinuationUuid;
  return t !== null && pR().some(o => o.uuid === t);
}

function jnr(e) {
  return e !== void 0 && e === u().pendingContinuationUuid;
}

function kvt(e) {
  return u().events.subscribe(e);
}

function E5r(e) {
  return u().changed.subscribe(e);
}

function h(e, t) {
  e.state = t, e.changed.emit();
}

function ue() {
  let e = Wnr(), t = S(e.jitterMinMs, X), o = Math.max(t, S(e.jitterMaxMs, J));
  return Math.round(t + Math.random() * (o - t));
}

function ie(e, t, o) {
  let n = e * 1e3 + ue();
  if (t === null) return n;
  let a = I[t] ?? I.at(-1) ?? 0;
  return Math.max(n, o + a);
}

function k5r(e, t = Date.now(), o = "dialog", n) {
  return E(u(), e, t, o, n);
}

function E(e, t, o, n, a) {
  if (!xtt(t)) return !1;
  j(e, a), e.consecutiveRearms = 0, e.takeoverUuids.clear(), e.dispatchingTakeoverUuids.clear(), 
  e.queuedBeforeArmUuids.clear();
  for (let s of pR()) if (se(s) || s.mode === "bash" && WQ(s)) s.uuid ??= D(), e.queuedBeforeArmUuids.add(s.uuid);
  return e.armedAtMs = o, g("quota_auto_resume"), i("tengu_quota_auto_resume_offer_armed", {
    origin: c(n)
  }), P(e, t.resetsAt ?? 0, null, o, n), e.events.emit("armed"), !0;
}

function T5r(e, t = Date.now(), o) {
  let n = u();
  if (!xtt(e)) return !1;
  if (n.handoffInProgress) return !1;
  if (!M(n) || !tkn()) return !1;
  if (Tm()) return !1;
  let a = e.resetsAt ?? 0;
  if (a * 1e3 - t > pTt) return !1;
  if (he(e.rateLimitType, Qe())) return !1;
  if (r(n) || n.autoArmDedupeResetKeys.has(a)) return !1;
  if (!E(n, e, t, "auto", o)) return !1;
  return n.events.emit("auto-armed"), !0;
}

function NXo(e, t, o = Date.now(), n) {
  try {
    let a = e && t === "completed" ? itn(o) : null;
    if (a === null) return !1;
    let s = u();
    if (r(s)) return F(s, a, "main_thread"), s.state.phase === "armed" && s.state.resetsAtSeconds === a.resetsAt;
    return T5r(a, o, n);
  } catch (a) {
    return d(a), !1;
  }
}

function P(e, t, o, n, a = "dialog") {
  w(e), e.episodeArmOrigin = a, e.lastArmedResetsAtSeconds = t, e.autoArmDedupeResetKeys.add(t), 
  e.armedResetKeys.add(t), L(e), e.activeTurnClaim = null, e.sleptThroughReset = !1, 
  e.lastObservedMs = n;
  let s = ie(t, o, n);
  i("tengu_quota_auto_resume_armed", {
    resets_in_sec: Math.max(0, Math.round(t - n / 1e3)),
    rearm: o === null ? 0 : o + 1
  }), h(e, {
    phase: "armed",
    resetsAtSeconds: t,
    fireAtMs: s,
    consecutiveRearms: e.consecutiveRearms
  });
}

function Q2e() {
  re(u());
}

function Ane(e) {
  return (...t) => {
    let o = e(...t);
    if (o !== !1) Q2e();
    return o;
  };
}

async function re(e) {
  if (e.state.phase !== "armed") return;
  if (e.confirmingMainModel) {
    e.recheckRequestedWhileConfirming = !0;
    return;
  }
  e.confirmingMainModel = !0;
  try {
    for (;;) {
      if (e.recheckRequestedWhileConfirming = !1, TZ(zh()) !== null) return;
      let t = Qe(), o = e.state, n = await pCs(t, void 0, e.storageV5);
      if (e.state.phase !== "armed" || _(e)) return;
      if (e.recheckRequestedWhileConfirming || Qe() !== t || e.state !== o) continue;
      if (n === null || !Re(n)) return;
      de(e);
      return;
    }
  } catch (t) {
    d(t);
  } finally {
    e.confirmingMainModel = !1;
  }
}

function de(e) {
  q(e, V), i("tengu_quota_auto_resume_fired", {
    rearm: e.consecutiveRearms,
    waited_ms: Math.max(0, Math.round(Date.now() - e.armedAtMs)),
    early: 1
  }), e.lastObservedMs = null, h(e, {
    phase: "idle"
  }), e.events.emit("fired-now");
}

function ce(e) {
  switch (e) {
   case "escape":
   case "ctrl_c":
   case "kill_agents_chord":
    return !0;

   case "dialog":
   case "low_priority":
   case "juniper_tide":
   case "cedar_ember":
   case "account_switch":
   case "conversation_reset":
   case "background_handoff":
   case "relaunch":
   case "desktop_handoff":
   case "cloud_handoff":
   case "process_exit":
    return !1;
  }
}

function le(e) {
  switch (e) {
   case "low_priority":
   case "juniper_tide":
   case "cedar_ember":
   case "account_switch":
   case "conversation_reset":
   case "background_handoff":
   case "relaunch":
   case "desktop_handoff":
   case "cloud_handoff":
   case "process_exit":
    return !0;

   case "escape":
   case "ctrl_c":
   case "kill_agents_chord":
   case "dialog":
    return !1;
  }
}

function X$(e) {
  Q(u(), e);
}

function Q(e, t) {
  if (r(e)) L(e);
  if (le(t)) e.autoArmDedupeResetKeys.clear();
  let o = k(e, e.state.phase);
  if (y(e) && e.state.phase === "idle") i("tengu_quota_auto_resume_cancelled", {
    reason: c(t)
  });
  if (v(e, t), o && ce(t)) e.events.emit("cancelled");
}

var XEn = {
  background_handoff: "Automatic continue cancelled \xb7 this session moved to the background, so the task will not resume on its own when the usage limit resets",
  relaunch: "Automatic continue cancelled \xb7 Claude Code relaunched during the wait, so the task will not resume on its own when the usage limit resets (send a prompt then to continue)",
  desktop_handoff: "Automatic continue cancelled \xb7 this session moved to Claude Desktop, so the task will not resume on its own when the usage limit resets (continue it there)",
  cloud_handoff: "Automatic continue cancelled \xb7 sending this session to the cloud, so the task will not resume here on its own when the usage limit resets (continue it in the cloud session)",
  process_exit: "Automatic continue cancelled \xb7 Claude Code exited during the wait, so the task will not resume on its own when the usage limit resets (send a prompt after the reset to continue)"
};

function JEn(e) {
  let t = u();
  if (t.handoffInProgress = !0, !r(t)) return !1;
  let o = k(t, t.state.phase);
  return Q(t, e), o;
}

function PDe() {
  u().handoffInProgress = !1;
}

function QEn(e, {dispatching: t = !1} = {}) {
  let o = u();
  if (!r(o)) return;
  if (N(o), o.takeoverUuids.add(e), t) o.dispatchingTakeoverUuids.add(e);
  o.changed.emit();
}

function w(e, {keepIfDrained: t = !1} = {}) {
  if (e.pendingContinuationUuid === null) return !1;
  let o = e.pendingContinuationUuid, n = xS(a => a.uuid === o).length > 0;
  if (n || !t) e.pendingContinuationUuid = null, e.changed.emit();
  return n;
}

function me(e) {
  switch (e) {
   case "escape":
   case "ctrl_c":
   case "kill_agents_chord":
   case "dialog":
   case "low_priority":
   case "juniper_tide":
   case "cedar_ember":
   case "account_switch":
   case "setting_off":
   case "manual_submit":
   case "conversation_reset":
   case "killswitch":
   case "rearm_cap":
   case "horizon_exceeded":
   case "continuation_dropped":
   case "background_handoff":
   case "relaunch":
   case "desktop_handoff":
   case "cloud_handoff":
   case "process_exit":
    return !0;

   case "fired":
   case "stale":
    return !1;
  }
}

function v(e, t) {
  if (e.state.phase === "idle") return;
  if (me(t)) i("tengu_quota_auto_resume_cancelled", {
    reason: c(t)
  });
  h(e, {
    phase: "idle"
  });
}

function A5r(e, t) {
  let o = u();
  if (o.state.phase !== "armed" || _(o)) return "idle";
  let n = o.lastObservedMs ?? o.state.fireAtMs;
  o.lastObservedMs = e;
  let a = e - n, s = S(Wnr().graceMs, Z, ne);
  if (a > s && e >= o.state.fireAtMs) o.sleptThroughReset = !0;
  if (t || e < o.state.fireAtMs) return "pending";
  if (o.sleptThroughReset) return o.sleptThroughReset = !1, f("quota_auto_resume", "stale"), 
  i("tengu_quota_auto_resume_stale", {
    late_by_ms: Math.round(e - o.state.fireAtMs)
  }), h(o, {
    phase: "stale"
  }), o.events.emit("stale"), "stale";
  return q(o), i("tengu_quota_auto_resume_fired", {
    rearm: o.state.consecutiveRearms,
    waited_ms: Math.max(0, Math.round(e - o.armedAtMs))
  }), v(o, "fired"), "fired";
}

function W() {
  let e = P5r(z, Qe());
  return e !== void 0 && e.trim() !== "" ? e : G;
}

function q(e, t = W()) {
  w(e);
  let o = D();
  e.pendingContinuationUuid = o, e.activeTurnClaim = null, e.changed.emit(), OT({
    agentId: Ze(),
    mode: "prompt",
    priority: H,
    value: t,
    uuid: o,
    origin: {
      kind: "auto-continuation"
    },
    isMeta: !0,
    skipSlashCommands: !0,
    workload: pie
  });
}

function C5r() {
  return R5r() ? W() : null;
}

function R5r() {
  let e = u();
  return e.state.phase === "stale" && !_(e);
}

function $Xo(e) {
  let t = u(), o = t.pendingContinuationUuid;
  if (o === null || !e.some(n => n.uuid === o)) return e;
  if (!_(t)) return e;
  return e.filter(n => n.uuid !== o);
}

function fe(e) {
  if (e.episodeArmOrigin !== "auto" || M(e)) return e.revocationRescan = "idle", !1;
  if (eKt() === void 0 && e.autoContinueKeyPresence === "unknowable") {
    if (e.revocationRescan === "idle") {
      e.revocationRescan = "pending";
      let t = ++e.revocationRescanGeneration;
      return A(e).finally(() => {
        if (e.revocationRescan === "pending" && t === e.revocationRescanGeneration) e.revocationRescan = "done";
      }), !1;
    }
    if (e.revocationRescan === "pending") return !1;
  }
  return e.revocationRescan = "idle", !0;
}

function _(e) {
  if (!IDe()) return C(e, "killswitch"), !0;
  if (fe(e)) return C(e, "setting_off"), !0;
  return !1;
}

function N(e) {
  if (w(e, {
    keepIfDrained: !0
  }), e.state.phase === "stale") i("tengu_quota_auto_resume_stale_resumed", {}), e.lastObservedMs = null, 
  v(e, "stale"); else if (e.state.phase === "armed") e.lastObservedMs = null, v(e, "manual_submit");
}

function C(e, t) {
  i("tengu_quota_auto_resume_cancelled", {
    reason: c(t)
  }), y(e), h(e, {
    phase: "idle"
  }), e.events.emit(t === "horizon_exceeded" ? "horizon-exceeded" : t === "rearm_cap" ? "cap-exhausted" : "disabled");
}

function pe(e, t) {
  return e.episodeArmOrigin === "auto" && t * 1e3 - Date.now() > pTt;
}

function FXo(e) {
  let t = u();
  for (let p of e.turnUuids) t.dispatchingTakeoverUuids.delete(p);
  let o = t.pendingContinuationUuid !== null && e.turnUuids.includes(t.pendingContinuationUuid), n = e.turnUuids.some(p => t.takeoverUuids.has(p)), a = k(t, t.state.phase) || o, s = e.isHumanTakeover && !n && e.humanCommandUuids.length > 0 && e.humanCommandUuids.every(p => p !== void 0 && t.queuedBeforeArmUuids.has(p)), l = null;
  if (s && !o) return null;
  if (s) l = "continuation"; else if (e.isHumanTakeover && (n || a)) l = "takeover", 
  N(t); else if (o) l = "continuation";
  if (l === null) return null;
  if (t.activeTurnClaim !== null) d(Error("quota auto-resume: a turn claimed the episode while another claim was outstanding"));
  let x = {
    kind: l,
    queried: e.willQuery
  };
  return t.activeTurnClaim = x, t.changed.emit(), x;
}

function UXo(e, t) {
  let o = u();
  for (let s of t) o.dispatchingTakeoverUuids.delete(s);
  if (e !== null) {
    if (e !== o.activeTurnClaim) return;
    if (o.activeTurnClaim = null, o.changed.emit(), o.state.phase !== "idle") return;
    if (pR().some(s => b(o, s))) return;
    if (y(o), e.kind === "continuation" && !e.queried) O(o);
    return;
  }
  let n = o.pendingContinuationUuid !== null && t.includes(o.pendingContinuationUuid);
  if ((n || t.some(s => o.takeoverUuids.has(s))) && o.state.phase === "idle" && o.activeTurnClaim === null && !pR().some(s => b(o, s))) {
    if (y(o), n) O(o);
  }
}

function O(e) {
  m("quota_auto_resume", "continuation_dropped"), i("tengu_quota_auto_resume_cancelled", {
    reason: c("continuation_dropped")
  }), e.events.emit("continuation-dropped");
}

function y(e) {
  e.consecutiveRearms = 0, e.lastArmedResetsAtSeconds = 0, e.episodeArmOrigin = "dialog", 
  e.revocationRescan = "idle", e.revocationRescanGeneration++, e.takeoverUuids.clear(), 
  e.dispatchingTakeoverUuids.clear(), e.queuedBeforeArmUuids.clear(), e.lastObservedMs = null, 
  e.activeTurnClaim = null;
  let t = w(e);
  return e.changed.emit(), t;
}

function Re(e) {
  return e.status !== "rejected" || e.isUsingOverage === !0 || e.overageInUse === !0;
}

function F(e, t, o) {
  if (!tO(t) || !tKt()) return;
  let n = t.resetsAt ?? 0;
  if (r(e) && R(t.rateLimitType, Qe())) e.autoArmDedupeResetKeys.add(n);
  if (e.state.phase === "armed") {
    if (n * 1e3 > e.state.fireAtMs && R(t.rateLimitType, Qe())) U(e, n, null);
    return;
  }
  if (T(e)) return;
  if (e.state.phase === "stale") return;
  let a = e.activeTurnClaim;
  if (a === null) return;
  if (o !== "main_thread") return;
  if (a.kind === "takeover") {
    if (e.consecutiveRearms = 0, U(e, R(t.rateLimitType, Qe()) ? n : e.lastArmedResetsAtSeconds, null) && e.episodeArmOrigin === "auto") e.events.emit("taken-over");
    return;
  }
  if (e.consecutiveRearms >= Y) {
    m("quota_auto_resume", "rearm_cap"), e.autoArmDedupeResetKeys.add(n), C(e, "rearm_cap");
    return;
  }
  let s = e.consecutiveRearms;
  e.consecutiveRearms++, U(e, n, s);
}

function U(e, t, o) {
  if (_(e)) return !1;
  if (pe(e, t)) return C(e, "horizon_exceeded"), !1;
  return P(e, t, o, Date.now(), e.episodeArmOrigin), e.events.emit("rearmed"), !0;
}

function he(e, t) {
  if (e !== "seven_day_opus" && e !== "seven_day_sonnet") return !1;
  if (R(e, t)) return !1;
  let o = TZ(zh());
  if (e === "seven_day_opus" && o === "opus") return !1;
  if (e === "seven_day_sonnet" && o === "sonnet") return !1;
  return !0;
}

function R(e, t) {
  switch (e) {
   case "five_hour":
   case "seven_day":
   case "overage":
    return !0;

   case "seven_day_opus":
    return rie(Ke(t));

   case "seven_day_sonnet":
    return _Eo(Ke(t));

   case "seven_day_overage_included":
    {
      let o = hk(It(t));
      if (o === null) return !1;
      let n = o.toLowerCase();
      return swe().some(a => a.toLowerCase() === n);
    }

   case void 0:
    return !1;
  }
  return !1;
}

function ZEn(e, t) {
  return R(e.rateLimitType, t) || Ke(e.model, {
    identity: !0
  }) === Ke(t, {
    identity: !0
  });
}

function x5r(e) {
  j(u(), e);
}

function j(e, t) {
  if (e.limitsSubscriptionStarted) return;
  e.limitsSubscriptionStarted = !0, e.storageV5 = t, e.unsubscribeQuotaRejected = Y1n((o, n) => F(e, o, n)), 
  A(e), e.unsubscribeSettingsChanges = Pa.subscribe(() => {
    A(e);
  }), e.unsubscribeSessionSwitch = Oc((o, n) => {
    if (Ptt(n)) Q(e, "conversation_reset"), e.handoffInProgress = !1;
  });
}

function Ptt(e) {
  switch (e) {
   case "clear":
   case "resume":
   case "remote_attach":
    return !0;

   case "fork":
   case "cd":
   case "spare_claim":
   case "hydrate":
   case "startup_custom_id":
    return !1;
  }
}

export { qEn, DXo, YEn, xtt, zhe, LXo, X2e, H2, v5r, J2e, Evt, jnr, kvt, E5r, k5r, T5r, NXo, Q2e, Ane, X$, XEn, JEn, PDe, QEn, A5r, C5r, R5r, $Xo, FXo, UXo, ZEn, x5r, Ptt };
