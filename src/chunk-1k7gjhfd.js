// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { g } from "./chunk-3ykz5st8.js";

import { vt, Tm, k, Ce, ce, ia, Qm } from "./chunk-xywp7esx.js";

import { Dt } from "./chunk-cqgvwwgb.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { cW } from "./chunk-afb3v15j.js";

import { JCe } from "./chunk-cvdvt5f8.js";

import { _s } from "./chunk-1dj3skht.js";

var p = "tengu_reflective_bee", S = [ "off", "survey" ], d = 3, _ = 864e5, f = "tengu_web_setup_push_offer", AWr = "Pushed to GitHub. Connect GitHub to claude.ai so you can work on this repo even when this machine is offline?", CWr = 1e3, xbt = new K(() => _s({
  status: "none"
}));

function zVo({trigger: t, host: o, storageV5: s}) {
  let r = xbt.of(o);
  if (r.getState().status !== "none") return;
  if (Tm()) return;
  if (Oe() !== "firstParty" || !vt() || !JCe()) return;
  if (Dt()) return;
  if (u()) return;
  if (cW.of(o).peek(void 0, s) !== "not_connected") return;
  i(f, {
    event: b("eligible"),
    trigger: c(t)
  });
  let n = k(p, "off"), e = S.find(a => a === n);
  r.setState(() => e === void 0 || e === "off" ? {
    status: "resolved"
  } : {
    status: "pending",
    variant: e,
    trigger: t
  });
}

function u() {
  let t = ce().webSetupPushOffer;
  if (t?.dismissedForever) return !0;
  if (ia().webSetupPushOfferShown) return !0;
  if (t?.lastShownAt !== void 0 && Date.now() - t.lastShownAt < _) return !0;
  return (t?.shownCount ?? 0) >= d;
}

function RWr(t, o) {
  let s = xbt.of(t);
  if (s.getState().status !== "pending") return !1;
  if (!u() && cW.of(t).peek(void 0, o) === "not_connected") return !1;
  return s.setState(() => ({
    status: "resolved"
  })), !0;
}

function xWr(t, o) {
  let s = xbt.of(t), r = s.getState();
  if (r.status !== "pending") return;
  s.setState(() => ({
    ...r,
    status: "shown"
  })), i(f, {
    event: b("shown"),
    variant: c(r.variant),
    trigger: c(r.trigger)
  }), g("remote_setup_push_offer");
  let n = Date.now();
  Ce(e => e.webSetupPushOffer?.lastShownAt === n ? e : {
    ...e,
    webSetupPushOffer: {
      ...e.webSetupPushOffer,
      lastShownAt: n,
      shownCount: (e.webSetupPushOffer?.shownCount ?? 0) + 1
    }
  }, o), Qm(e => e.webSetupPushOfferShown ? e : {
    ...e,
    webSetupPushOfferShown: !0
  }, o);
}

function cGe(t, o, s) {
  let r = xbt.of(t), n = r.getState();
  if (n.status !== "shown") return;
  if (r.setState(() => ({
    status: "resolved"
  })), i(f, {
    event: c(o),
    variant: c(n.variant),
    trigger: c(n.trigger)
  }), o === "dont_ask_again") Ce(e => e.webSetupPushOffer?.dismissedForever ? e : {
    ...e,
    webSetupPushOffer: {
      ...e.webSetupPushOffer,
      dismissedForever: !0
    }
  }, s);
}

export { AWr, CWr, xbt, zVo, RWr, xWr, cGe };
