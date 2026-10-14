// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, ps } from "./chunk-3pqddg8f.js";

import { l, W } from "./chunk-b0z4bv3v.js";

import { gn } from "./chunk-yxennhe9.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { WFs } from "./chunk-5brm0azz.js";

import { p } from "./chunk-jkzenvsk.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { TU, fe, Wp, Nie } from "./chunk-dd98x6x7.js";

import { i5r } from "./chunk-57k3sb2j.js";

import { hpe } from "./chunk-b47tzzqx.js";

import { o, u, U, A } from "./chunk-cvcg6n1z.js";

import { homedir as x, hostname as m } from "os";

import { dirname as y, join as T } from "path";

function c4(e) {
  return e.trim().toLowerCase().replace(/(\.(local|lan|home|localdomain))+$/, "");
}

var NEn = 1, $En = "unattended-serving:v1:auto-arm-classifier", D = "unattended-serving-consent.json", P = p(() => u({
  version: A(NEn),
  choice: U([ "accepted", "declined" ]),
  terms: o(),
  decidedAt: o(),
  hostname: o()
}));

function g() {
  return T(x(), ".claude", "state", D);
}

function pvt(e = m()) {
  return hpe(c4(e));
}

function Anr() {
  return `change it in /config, or delete ${Os(g())} to be asked again`;
}

function S() {
  return {
    readText: async () => {
      try {
        return await gn().read(g());
      } catch (e) {
        if (W(e)) return;
        throw e;
      }
    },
    writeText: async e => {
      let n = g();
      await gn().mkdir(y(n), 448), await gn().atomicWrite(n, e, 384);
    },
    now: () => new Date,
    hostname: m
  };
}

async function ADe(e) {
  let n = e === void 0 ? i() : void 0, r = Date.now(), a = n?.writes, {choice: s, unreadable: f, staleYes: c} = await E(e ?? S()), v = n !== void 0 && TU() && await i5r(WFs()) && await xnr({
    start: !0
  });
  if (n !== void 0 && a === n.writes && (n.view === void 0 || !d(n) || r >= n.view.readAt)) {
    if (n.view = {
      choice: s,
      readAt: r,
      unreadable: f,
      staleYes: c === !0,
      hostAllows: v
    }, d(n)) n.staleUnresolved = !1;
  }
  return s;
}

async function E(e) {
  let n;
  try {
    n = await e.readText();
  } catch (r) {
    return t(`unattended-serving consent: store unreadable (${l(r)})`, {
      level: "warn"
    }), {
      choice: "unset",
      unreadable: !0
    };
  }
  if (n === void 0) return {
    choice: "unset",
    unreadable: !1
  };
  try {
    let r = P().safeParse(Y(n));
    if (!r.success) return {
      choice: "unset",
      unreadable: !0
    };
    let a = r.data.choice === "declined" || c4(r.data.hostname) === c4(e.hostname()) && r.data.terms === $En;
    return {
      choice: a ? r.data.choice : "unset",
      unreadable: !1,
      staleYes: !a && r.data.choice === "accepted"
    };
  } catch {
    return {
      choice: "unset",
      unreadable: !0
    };
  }
}

async function CDe(e, n) {
  if (e === "accepted" && O2()) return t("unattended-serving consent: a Yes while settings turn unattended serving off is not stored", {
    level: "warn"
  }), !1;
  let r = n === void 0 ? i() : void 0, a = n ?? S();
  try {
    if (await a.writeText(_({
      version: NEn,
      choice: e,
      terms: $En,
      decidedAt: a.now().toISOString(),
      hostname: c4(a.hostname())
    }, null, 2) + `\n`), r !== void 0) r.writes += 1, r.view = {
      choice: e,
      readAt: Date.now(),
      unreadable: !1,
      staleYes: !1,
      hostAllows: r.view?.hostAllows === !0
    }, r.staleUnresolved = !1;
    return !0;
  } catch (s) {
    return t(`unattended-serving consent: answer not saved (${l(s)})`, {
      level: "warn"
    }), !1;
  }
}

var N = 3e3, M = new K(() => ({
  view: void 0,
  refresh: void 0,
  refreshStartedAt: void 0,
  abandoned: void 0,
  staleUnresolved: !1,
  writes: 0
}));

function i() {
  return ps(M);
}

function Y6() {
  let e = i();
  if (!d(e)) b(e);
  return e.view?.choice ?? "unset";
}

function d(e, n = Date.now()) {
  if (e.view === void 0) return !1;
  let r = n - e.view.readAt;
  return r >= 0 && r <= N;
}

function o5r(e = Date.now()) {
  return d(i(), e);
}

var h = 1500;

async function FVt(e) {
  let n = i();
  if (d(n)) return;
  let r = b(n), a, s, f = e?.aborted === !0 ? Promise.resolve("gave_up") : new Promise(c => {
    a = setTimeout(v => v("gave_up"), h, c), s = () => c("gave_up"), e?.addEventListener("abort", s, {
      once: !0
    });
  });
  if (await Promise.race([ r, f ]), clearTimeout(a), s !== void 0) e?.removeEventListener("abort", s);
  if (!d(n)) n.staleUnresolved = !0, w(n, r);
}

function w(e, n) {
  if (e.refresh !== n || e.abandoned !== void 0) return !1;
  return e.refresh = void 0, e.refreshStartedAt = void 0, e.abandoned = n, n.finally(() => {
    if (e.abandoned === n) e.abandoned = void 0;
  }), !0;
}

function b(e) {
  if (e.refresh !== void 0) {
    if (e.refreshStartedAt !== void 0 && performance.now() - e.refreshStartedAt <= h || !w(e, e.refresh)) return e.refresh;
  }
  e.refreshStartedAt = performance.now();
  let n = ADe().catch(() => {}).finally(() => {
    if (e.refresh === n) e.refresh = void 0, e.refreshStartedAt = void 0;
  });
  return e.refresh = n, n;
}

function R() {
  return Y6() === "accepted";
}

function O2() {
  return Cnr() !== void 0;
}

function Cnr() {
  let e = n => n?.remoteTools?.allowUnattendedServing === !1;
  return Wp().some(e) || Nie().some(e) || e(fe("policySettings")) ? "managed" : e(fe("userSettings")) ? "user" : void 0;
}

function UVt() {
  Y6();
}

function Rnr() {
  let {view: e} = i();
  return e?.unreadable === !0 || e?.staleYes === !0;
}

function s5r() {
  return i().view?.unreadable === !0;
}

async function xnr({start: e}) {
  try {
    let {classifyDeviceSandboxPosture: n, ensureDeviceSandboxPosture: r, readDeviceSandboxSnapshot: a} = await import("./chunk-zgjh8a39.js");
    return e ? (await r()).confined : n(a(), {
      requireStarted: !1
    }).confined;
  } catch {
    return !1;
  }
}

function I() {
  return i().view?.hostAllows === !0;
}

function C(e, n) {
  return n && e.view !== void 0 && e.view.choice === "unset" && !e.view.unreadable;
}

function z2e() {
  try {
    let e = i();
    return !O2() && !e.staleUnresolved && C(e, e.view?.hostAllows === !0);
  } catch {
    return !1;
  }
}

function fvt(e) {
  try {
    let n = R(), r = i();
    return O2() || r.staleUnresolved || !n && !C(r, e ?? I());
  } catch (n) {
    return t(`unattended-serving consent: read failed, call treated as unconsented (${l(n)})`, {
      level: "warn"
    }), !0;
  }
}

export { c4, NEn, $En, pvt, Anr, ADe, CDe, Y6, o5r, FVt, O2, Cnr, UVt, Rnr, s5r, xnr, z2e, fvt };
