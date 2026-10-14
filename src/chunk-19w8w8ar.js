// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ft, k, Ce, ce } from "./chunk-xywp7esx.js";

import { tr } from "./chunk-j016gcgm.js";

import { Y } from "./chunk-kawq2919.js";

import { g } from "./chunk-3ykz5st8.js";

import { KR } from "./chunk-sfvypv11.js";

import { kR, Boe } from "./chunk-rshryz75.js";

import { bs } from "./chunk-zzhmvqjt.js";

import { uue } from "./chunk-3znaqeaq.js";

var c = 3, f = 3, F4o = 20, U4o = "Your Claude Code session is ready \u2014 continue from your phone anytime.";

function B4o() {
  if (tr.CLAUDE_CODE_FORCE_RC_LONG_TURN_NUDGE) return {
    thresholdSec: 5,
    probability: 1,
    maxImpressions: -1,
    impressionKey: "force",
    dayStartHour: 0,
    dayEndHour: 24
  };
  let e = k("tengu_rc_long_turn_nudge", null);
  if (e === null || typeof e !== "object") return null;
  let o = typeof e.thresholdSec === "number" && Number.isFinite(e.thresholdSec) ? Math.min(3600, Math.max(5, e.thresholdSec)) : 90, n = typeof e.probability === "number" && Number.isFinite(e.probability) ? Math.min(1, Math.max(0, e.probability)) : 1, r = typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions) ? Math.trunc(e.maxImpressions) : 3, t = typeof e.impressionKey === "string" ? e.impressionKey : "", a = (i, d) => typeof i === "number" && Number.isFinite(i) ? Math.min(24, Math.max(0, Math.trunc(i))) : d, l = a(e.dayStartHour, 7), p = a(e.dayEndHour, 21);
  return {
    thresholdSec: o,
    probability: n,
    maxImpressions: r,
    impressionKey: t,
    dayStartHour: l,
    dayEndHour: p
  };
}

function j4o(e, o = new Date) {
  if (e.dayStartHour >= e.dayEndHour) return !0;
  let n = o.getHours();
  return n >= e.dayStartHour && n < e.dayEndHour;
}

function m(e, o) {
  let n = (ce()[e] ?? 0) + 1;
  Ce(r => (r[e] ?? 0) >= n ? r : {
    ...r,
    [e]: n
  }, o);
}

var s = {
  afterPromptCount: 5,
  probability: 0,
  maxImpressions: 3
};

function W4o() {
  let e, o = tr.CLAUDE_CODE_RC_PERMISSION_NUDGE;
  if (o) try {
    e = Y(o);
  } catch {
    e = void 0;
  }
  e ??= k("tengu_rc_permission_nudge", s);
  let n = (r, t) => typeof r === "number" && Number.isFinite(r) ? r : t;
  return {
    afterPromptCount: Math.max(1, n(e?.afterPromptCount, s.afterPromptCount)),
    probability: n(e?.probability, s.probability),
    maxImpressions: n(e?.maxImpressions, s.maxImpressions)
  };
}

function h2r() {
  if (!kR()) return !1;
  let e = ce();
  return !e.hasUsedRemoteControl && !Boe() && (e.remoteControlUpsellSeenCount ?? 0) < c;
}

function z4o(e) {
  m("remoteControlUpsellSeenCount", e), g("tips_rc_upsell_show");
}

function b() {
  return ce().hasUsedRemoteControl === !0 || Boe();
}

function y2r() {
  return _2r() && (ce().pushNotifUpsellSeenCount ?? 0) < f;
}

function _2r() {
  return kR() && uue() && b() && bs("agentPushNotifEnabled", !1).value !== !0;
}

function G4o(e) {
  m("pushNotifUpsellSeenCount", e), g("tips_push_upsell_show");
}

function V4o(e) {
  if (!kR()) return !1;
  if (e.maxImpressions === 0) return !1;
  if (e.maxImpressions < 0) return !0;
  let o = ce();
  return ((o.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey ? o.rcLongTurnNudgeSeenCount ?? 0 : 0) < e.maxImpressions;
}

function K4o(e, o) {
  if (e.maxImpressions >= 0) Ce(n => {
    let r = (n.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey;
    return {
      ...n,
      rcLongTurnNudgeSeenCount: r ? (n.rcLongTurnNudgeSeenCount ?? 0) + 1 : 1,
      rcLongTurnNudgeSeenKey: e.impressionKey
    };
  }, o);
  g("tips_rc_long_turn_show");
}

function q4o(e) {
  if (!kR()) return !1;
  return (ce().rcPermissionNudgeSeenCount ?? 0) < e;
}

function Y4o(e) {
  Ce(o => ({
    ...o,
    rcPermissionNudgeSeenCount: (o.rcPermissionNudgeSeenCount ?? 0) + 1
  }), e), g("tips_rc_permission_nudge_show");
}

function X4o() {
  if (!uue()) return null;
  let e = k("tengu_kairos_ready_nudge", null);
  if (e === null || typeof e !== "object") return null;
  let o = typeof e.probability === "number" && Number.isFinite(e.probability) ? Math.min(1, Math.max(0, e.probability)) : 1, n = typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions) ? Math.trunc(e.maxImpressions) : 5, r = typeof e.impressionKey === "string" ? e.impressionKey : "";
  return {
    probability: o,
    maxImpressions: n,
    impressionKey: r
  };
}

function J4o(e, o, n) {
  if (!o || n) return !1;
  if (Ft() || KR() != null) return !1;
  if (e.maxImpressions === 0) return !1;
  if (e.maxImpressions < 0) return !0;
  let r = ce();
  return ((r.remoteControlReadyPushKey ?? "") === e.impressionKey ? r.remoteControlReadyPushCount ?? 0 : 0) < e.maxImpressions;
}

function Q4o(e, o) {
  if (e.maxImpressions >= 0) Ce(n => {
    let r = (n.remoteControlReadyPushKey ?? "") === e.impressionKey;
    return {
      ...n,
      remoteControlReadyPushCount: r ? (n.remoteControlReadyPushCount ?? 0) + 1 : 1,
      remoteControlReadyPushKey: e.impressionKey
    };
  }, o);
  g("tips_rc_ready_push_send");
}

function bzt(e) {
  if (ce().hasUsedRemoteControl) return;
  Ce(o => o.hasUsedRemoteControl ? o : {
    ...o,
    hasUsedRemoteControl: !0
  }, e);
}

var C = [ "mobile", "web", "desktop" ];

function y(e) {
  switch (e) {
   case "ios":
   case "android":
    return "mobile";

   case "web_claude_ai":
    return "web";

   case "desktop_app":
    return "desktop";

   default:
    return;
  }
}

function M_n(e, o) {
  let n = y(e);
  if (!n) return;
  if (u(ce()).includes(n)) return;
  Ce(r => {
    let t = u(r);
    if (t.includes(n)) return r;
    return {
      ...r,
      remoteControlSurfacesSeen: [ ...t, n ]
    };
  }, o);
}

function b2r() {
  let e = u(ce()), o = e.includes("mobile"), n = e.includes("web");
  if (o === n) return;
  return o ? "web" : "mobile";
}

function u(e) {
  let o = e.remoteControlSurfacesSeen;
  return Array.isArray(o) ? o.filter(n => C.some(r => r === n)) : [];
}

export { F4o, U4o, B4o, j4o, W4o, h2r, z4o, y2r, _2r, G4o, V4o, K4o, q4o, Y4o, X4o, J4o, Q4o, bzt, M_n, b2r };
