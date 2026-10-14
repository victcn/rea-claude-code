// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, ps, tte, $X } from "./chunk-3pqddg8f.js";

import { Pr } from "./chunk-z52kmxx4.js";

import { ar, dn } from "./chunk-nnrb0acr.js";

import { fe, Mve, er, aS, LIe } from "./chunk-dd98x6x7.js";

import { atn } from "./chunk-9whfjfdx.js";

import { Wh } from "./chunk-h83cda0g.js";

function bd(o) {
  let t = fe("policySettings")?.strictPluginOnlyCustomization;
  if (t === !0) return !0;
  if (Array.isArray(t)) return t.includes(o);
  return !1;
}

var p = new Set([ "plugin", "policySettings", "built-in", "builtin", "bundled" ]);

function oK(o) {
  return o !== void 0 && p.has(o);
}

function a(o) {
  return o;
}

function XEs() {
  return null;
}

function JEs(o) {
  return !1;
}

function hBn(o) {
  return null;
}

var c = "cli";

class g {
  snapshotKey=() => c;
  snapshotsBySessionId=new Map;
  setSnapshotKey(o) {
    this.snapshotKey = o;
  }
  current() {
    let o = this.snapshotKey(), t = this.snapshotsBySessionId.get(o);
    if (!t) t = {
      initialHooksConfig: null
    }, this.snapshotsBySessionId.set(o, t);
    return t;
  }
  store(o) {
    let t = this.current();
    if (t.initialHooksConfig = o, Wh()) t.userHooksConfig = fe("userSettings")?.hooks ?? {}; else delete t.userHooksConfig;
  }
  evict(o) {
    if (o === c) return;
    this.snapshotsBySessionId.delete(o);
  }
}

var k = new K(() => new g);

function e() {
  return ps(k);
}

function r() {
  let o = fe("policySettings");
  if (o?.disableAllHooks === !0) return {};
  if (o?.allowManagedHooksOnly === !0 || Pr()) return o?.hooks ?? {};
  if (bd("hooks")) return o?.hooks ?? {};
  let t = er();
  if (t.disableAllHooks === !0) {
    if (!yBn()) return o?.hooks ?? {};
    return m(f.filter(dn).map(n => fe(n)?.hooks));
  }
  return a(t.hooks ?? {});
}

var f = [ "userSettings", "flagSettings", "policySettings" ];

function m(o) {
  let t = {};
  for (let n of o) for (let [s, l] of Object.entries(n ?? {})) {
    let i = s;
    t[i] = [ ...t[i] ?? [], ...l ?? [] ];
  }
  return t;
}

function yBn() {
  return d() && !PN();
}

function syo() {
  return d() && PN();
}

function d() {
  if (!Wh() || Pr() || bd("hooks") || er().disableAllHooks !== !0) return !1;
  return fe("policySettings")?.allowManagedHooksOnly !== !0 && f.filter(dn).every(t => fe(t)?.disableAllHooks !== !0);
}

function jg() {
  return Pr() || Gue();
}

function Gue() {
  let o = fe("policySettings");
  if (o?.allowManagedHooksOnly === !0) return !0;
  if (er().disableAllHooks === !0 && o?.disableAllHooks !== !0) return !0;
  return !1;
}

function jvr() {
  return Pr() || fe("policySettings")?.allowManagedHooksOnly === !0 || PN();
}

function PN() {
  return LIe(aS()).length > 0 || tte() && Mve();
}

function iyo() {
  return jvr() || bd("hooks");
}

function e_() {
  return fe("policySettings")?.disableAllHooks === !0;
}

function Cxe() {
  return e_() || Gue();
}

function ayo() {
  e().store(r()), $X();
}

function A1(o) {
  ar(o), e().store(r()), $X();
}

async function JOt(o) {
  let t = await atn(o);
  try {
    e().store(r()), $X();
  } finally {
    t?.();
  }
}

function* lyo() {
  for (let o of e().snapshotsBySessionId.values()) if (o.initialHooksConfig !== null) yield o.initialHooksConfig;
}

function jY() {
  let o = e().current();
  if (o.initialHooksConfig === null) ar(), e().store(r()), $X();
  return o.initialHooksConfig;
}

function Wvr() {
  return jY(), e().current().userHooksConfig ?? (Wh() ? fe("userSettings")?.hooks ?? {} : {});
}

export { bd, oK, XEs, JEs, hBn, yBn, syo, jg, Gue, jvr, PN, iyo, e_, Cxe, ayo, A1, JOt, lyo, jY, Wvr };
