// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, Oc } from "./chunk-3pqddg8f.js";

import { c, pe } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { rwe, Dct, Xen, X8, P0, KEr, oUe, Lct, ZTs, eAs, tAs, $N, ra } from "./chunk-gmq0qwep.js";

import { zhe, H2, X$, Ptt } from "./chunk-g8dhxbna.js";

import { rwt, o2e, s2e, Net } from "./chunk-fd9b00k8.js";

import { BT } from "./chunk-pzzygprt.js";

var l = new K(() => ({
  notedWallResetsAt: null,
  shownWallResetsAt: null,
  withheldWallResetsAt: null,
  sessionSwitchSubscribed: !1
}));

function n() {
  return l.of(B().host);
}

function r2e(t, e = Date.now()) {
  return o2e(t) && t.lowPriorityOffer === "treatment" && t.resetsAt !== void 0 && t.resetsAt * 1e3 > e && !KEr(e) && oUe(e) === void 0 && !P0() && Dct();
}

function a(t, e = Date.now()) {
  let o = eAs(e);
  return rwt() && t.status !== "rejected" && o !== void 0 && !u(o) && !KEr(e) && oUe(e) === void 0 && Dct();
}

function u(t) {
  let e = zhe();
  switch (e.phase) {
   case "idle":
    return !1;

   case "armed":
    return e.resetsAtSeconds !== t;

   case "stale":
    return !0;
  }
}

function d6o(t) {
  if (t.lowPriorityOffer === void 0 || !o2e(t)) return;
  let e = t.resetsAt ?? null;
  if (e === null) return;
  let o = n();
  if (o.notedWallResetsAt !== e) o.notedWallResetsAt = e, i("tengu_lowpri_offer_capable", {
    arm: c(t.lowPriorityOffer),
    tier: c(s2e()),
    limit_type: pe(t.rateLimitType) ?? void 0,
    auto_armed: H2(),
    client_enabled: Dct(),
    config_version: Xen()
  });
  if (t.lowPriorityOffer === "treatment" && oUe() !== void 0 && o.withheldWallResetsAt !== e) o.withheldWallResetsAt = e, 
  i("tengu_lowpri_offer_withheld", {
    arm: c(t.lowPriorityOffer),
    reason: c("cooloff"),
    client_enabled: Dct(),
    config_version: Xen()
  });
}

function jGt(t, e) {
  let o = t.resetsAt ?? null, r = n();
  if (o === null || r.shownWallResetsAt === o) return;
  r.shownWallResetsAt = o, i("tengu_lowpri_offer_shown", {
    arm: pe(t.lowPriorityOffer) ?? void 0,
    surface: c(e),
    config_version: Xen()
  });
}

function WGt(t) {
  let e = ra();
  if (r2e(e) && e.resetsAt !== void 0) {
    if (X$("low_priority"), s(), !ZTs({
      resetsAtSeconds: e.resetsAt,
      arm: e.lowPriorityOffer,
      entry: t,
      retryAfterSeconds: e.lowPriorityRetryAfterSeconds,
      maxWaitSeconds: e.lowPriorityMaxWaitSeconds
    })) return "unavailable";
    return Net(), "accepted";
  }
  if (a(e)) {
    let o = H2();
    if (o) X$("low_priority");
    if (s(), !tAs(t)) return "unavailable";
    if (o) Net();
    return "resumed";
  }
  return "unavailable";
}

function zGt(t) {
  let e = Lct(), o = e.phase === "active" ? BT(e.resetsAtSeconds) : void 0, r = o ? `until your limit resets at ${o}` : "until your limit resets";
  return `${t === "resumed" ? `Lower-priority mode is back on ${r}` : `Continuing now at lower priority ${r}`}. Your weekly limit still applies, and responses may pause while waiting for spare capacity. Run /${rwe} to stop.`;
}

function GGt(t = Date.now()) {
  if (KEr(t)) return `${X8().budgetExhaustedCopy}. Lower-priority mode is offered again after your weekly limit resets.`;
  let e = oUe(t);
  if (e !== void 0) return `Lower-priority mode is taking a break until ${BT(Math.ceil(e / 1e3)) ?? "later"}, after waiting too long for spare capacity. Try /${rwe} again then.`;
  return "Lower-priority mode isn't available right now.";
}

function c6o() {
  let t = ra();
  return `Lower-priority mode is off. New messages wait for your usage limit as usual${r2e(t) || a(t) ? `; run /${rwe} again to turn it back on` : ""}.`;
}

function s() {
  let t = n();
  if (t.sessionSwitchSubscribed) return;
  t.sessionSwitchSubscribed = !0, Oc((e, o) => {
    if (Ptt(o)) $N("conversation_reset");
  });
}

export { r2e, d6o, jGt, WGt, zGt, GGt, c6o };
