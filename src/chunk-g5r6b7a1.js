// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { b, c, Cn } from "./chunk-hwdwjvh8.js";

import { Je, j } from "./chunk-b0z4bv3v.js";

import { d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g } from "./chunk-3ykz5st8.js";

import { er } from "./chunk-dd98x6x7.js";

import { ett, HJ, O3o, mW } from "./chunk-w1ezaa52.js";

import { k2r, R7n, Jke } from "./chunk-vvcgyz85.js";

import { ec } from "./chunk-8drhysk2.js";

import { du } from "./chunk-e2kb3426.js";

class m {
  seated=void 0;
  picker=void 0;
  seat(e) {
    this.seated = e;
  }
  vacate(e) {
    if (this.seated === e) this.seated = void 0;
  }
  current() {
    return this.seated;
  }
  install(e) {
    this.picker = e;
  }
  pickDue() {
    if (this.picker === void 0 || this.seated === void 0) return !1;
    return this.picker(this.seated), !0;
  }
}

var aSt = new K(() => new m);

function lSt() {
  return import.meta.require("./chunk-mr1vp5w9.js");
}

function T(e) {
  if (e.id.startsWith(k2r) || e.id.startsWith(R7n)) return b("org-tip");
  let {isBuiltInTipId: n, MARKETPLACE_PLUGIN_TIP_ID_PREFIX: t} = lSt();
  if (e.id.startsWith(t)) return e.pluginId !== void 0 && ec(e.pluginId).marketplace === du ? Cn(e.id) : b("marketplace-plugin:org-marketplace");
  return n(e.id) ? Cn(e.id) : b("other");
}

function l(e) {
  if (e.length === 0) return;
  if (e.length === 1) return e[0];
  let n = e.map(t => ({
    tip: t,
    sessions: mW(t.id)
  }));
  return n.sort((t, o) => {
    if (t.sessions !== o.sessions) return o.sessions - t.sessions;
    return (o.tip.priority ?? 0) - (t.tip.priority ?? 0);
  }), n[0]?.tip;
}

async function uYo(e) {
  if (er().spinnerTipsEnabled === !1) return;
  let {getRelevantTips: n} = await import("./chunk-mr1vp5w9.js"), t = await n(e);
  if (t.length === 0) return;
  return l(t);
}

async function pYo(e, n) {
  try {
    return await e.content(n);
  } catch (t) {
    let {tipSessionCaches: o} = await import("./chunk-mr1vp5w9.js");
    return o.of(n.session.host).failedTipIds.add(e.id), d(Je(j(t), "tip content threw")), 
    "";
  }
}

var p = 2;

class h {
  fired=new Set;
  fire(e, n) {
    if (e <= 0) return;
    let t = e > n ? "true" : "false", o = e >= p && n < p ? "true" : "false", s = `${t}|${o}`;
    if (this.fired.has(s)) return;
    this.fired.add(s), i("tengu_dead_probe_legacy_plugin_tip_counts", {
      changes_max: c(t),
      changes_outcome: c(o)
    });
  }
}

var S = new K(() => new h);

function _() {
  return S.of(B().host);
}

async function fYo(e) {
  if (er().spinnerTipsEnabled === !1) return;
  let {isTipRelevantSafe: n, tipSessionCaches: t} = await import("./chunk-mr1vp5w9.js"), o = t.of(e.session.host);
  if (Jke()) return;
  let s = await o.getMarketplacePluginTips(e.storageV5);
  if (s.length === 0) return;
  let f = [];
  for (let r of s) {
    if (!r.pluginId) continue;
    if (o.failedTipIds.has(r.id)) continue;
    let a = HJ(r.id), u = O3o(r.pluginId);
    if (_().fire(u, a), Math.max(a, u) >= p) continue;
    if (mW(r.id) < r.cooldownSessions) continue;
    if (await n(r, e)) f.push(r);
  }
  return l(f);
}

function dSt(e, n = "spinner", t) {
  ett(e.id, t, e.advertisedCommand), g(n === "startup" ? "tips_startup_show" : "tips_spinner_show"), 
  i("tengu_tip_shown", {
    tipIdLength: T(e),
    cooldownSessions: e.cooldownSessions,
    surface: c(n)
  });
}

var ZZe = "cc-plugin-tips";

export { aSt, lSt, uYo, pYo, fYo, dSt, ZZe };
