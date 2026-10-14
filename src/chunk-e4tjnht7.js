// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt, B, ve, he } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { J, Ht, We } from "./chunk-nvtwm272.js";

import { UWn, zut, W_, QRr, ZRr, Bd, sa, u8e, ZPe, Ig, Ui, In, k, A5, U0 } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { Jr } from "./chunk-s2t7g8m9.js";

import { aP, g9t, v4e, Vmr, Kmr, PS } from "./chunk-mtek6k5r.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { BCs } from "./chunk-35kwehd0.js";

import { zV, afo, R7, W$e } from "./chunk-aze9smjv.js";

import { gu } from "./chunk-53fww9mk.js";

var L = o => ZPe() || UWn(o);

var w4e = o => UWn(o) && !ZPe();

var H = o => o.hasHeld || w4e(o);

var pit = o => QRr.of(o).fetchHold;

function dbe() {
  return pit(B().host);
}

var I = () => (ve() || H(dbe())) && L(dbe()) && !sa() && In(W_, aP).source === "fallback";

var FCe = () => Ig() && In(W_, aP).source === "disk" && Vmr();

var N = () => H(dbe()) && FCe() && PS();

var v = () => L(dbe()) && FCe() && !PS();

var K = () => v() && u8e();

var m9t = () => A5(In(W_, aP).source);

var QB = () => R7() && Jr() && !m9t();

function bzs() {
  g9t.isFollowed = !0;
}

function TNe() {
  let o = Ge().hooksModulesSwitchRead?.isManagedPending === !0;
  try {
    let e = !PS() && In(W_, aP).source === "payload";
    return o && R7() && Jr() && !e;
  } catch (e) {
    return d(e), o;
  }
}

var A = 6e4;

var R = "the follow of the rollout switch did not end and is given up";

function z(o) {
  return o instanceof Error && o.message === R ? "timeout" : "load_failed";
}

var D = "installed mods are off for now: the rollout switch for them reads off; they load again when it reads on, and built-in mods keep running";

function c() {
  let o = Ge().hooksModulesSwitchRead;
  return o !== void 0 && !FCe() && !QB() && (o.isLoadOwed || o.isOn !== PS());
}

function T() {
  let o = Ge().hooksModulesSwitchRead;
  return o !== void 0 && o.isOn && c() && !PS();
}

function ANe(o, e, s) {
  let r = Ge(), {hooksModulesSwitchRead: i, hooksModulesSwitchFollowing: n} = r;
  if (n !== void 0) return n.then(() => T() ? ANe(o, e, s) ?? void 0 : void 0).catch(d);
  if (i === void 0 || !c()) return null;
  let f = PS(), _ = r.loadedModules.length;
  t(`installed plugins' hooks modules ${f ? "load" : "unload"}: the rollout flag (${W_}) reads ${f ? "on" : "off"} in a running session`);
  let x = () => {
    r.hooksModulesSwitchRead = {
      ...r.hooksModulesSwitchRead ?? i,
      isOn: !1
    };
  }, S = (f ? Promise.resolve() : Promise.resolve().then(s).then(x, d)).then(o), M = () => {
    r.hooksModulesSwitchRead = {
      ...r.hooksModulesSwitchRead ?? i,
      isLoadOwed: !0
    };
  };
  S.catch(M);
  let w = Ht(S, A, R).then(() => {
    g("plugin_function_hooks_switch_followed", {
      is_turned_on: f
    });
  }, E => {
    M(), m("plugin_function_hooks_switch_followed", z(E), {
      is_turned_on: f
    }), t(`installed plugins' hooks modules: the load that follows the rollout flag failed: ${l(E)}`, {
      level: "error"
    });
  }).then(() => {
    if (!f && r.loadedModules.length < _) e(D);
  }).catch(d).finally(() => {
    r.hooksModulesSwitchFollowing = void 0;
  });
  return r.hooksModulesSwitchFollowing = w, w;
}

function F(o, e, s) {
  let r = Ge(), i = r.hooksModulesWakeBound === "passed" && QB(), u = !(r.hooksModulesWakeBound === "ahead" && QB()) && TNe();
  if (!(r.hooksModulesSwitchRead !== void 0 && r.hooksModulesSwitchFollowing === void 0 && (i || u))) return null;
  let _ = Ht(o(), A, "the load at the end of the wake's wait did not end and is given up").then(() => {
    if (r.hooksModulesSwitchRead?.isManagedPending !== !0) r.hooksModulesWakeBound = "loaded";
  }, x => {
    t(`the load of an organization's hooks modules at the end of the wake's wait failed: ${l(x)}`, {
      level: "error"
    });
  }).finally(() => {
    r.hooksModulesSwitchFollowing = void 0;
  });
  return r.hooksModulesSwitchFollowing = _, _.then(() => T() ? ANe(o, e, s) ?? void 0 : void 0).catch(d);
}

function y() {
  let o = Ge();
  if (QB() && o.hooksModulesWakeBound === "ahead") o.hooksModulesWakeBound = "passed", 
  t(`the rollout flag (${W_}) is not answered within this wake's wait: the organization's hooks modules load at what the switch reads, a person's wait for the answer`);
}

async function V() {
  return await Ui().catch(() => {}), K() ? Ui().catch(() => {}) : void 0;
}

function W() {
  return QB() ? a.CLAUDE_CODE_FLAG_FETCH_WAIT_MS ?? afo : zV;
}

var Y = () => Math.max(0, W() - BCs());

function j(o) {
  let e = o.timedOut, s = !e && sa();
  return e ? `no answer within ${W()}ms` : s ? "the flag payload landed" : "the fetch settled with no payload";
}

async function h(o = Ui) {
  let e = await W$e({
    initialize: o,
    budgetMs: Y()
  });
  t(`installed plugins' hooks modules held ${Math.round(e.waitMs)}ms for the rollout flag (${W_}): ` + j(e));
}

async function Szs() {
  return m9t() ? void 0 : h();
}

var Z = 3e4;

function q(o) {
  return w4e(o) && ZRr() ? o.over.promise : Promise.resolve();
}

var P = o => We(q(o), Z);

async function wzs() {
  await v4e();
  let o = v(), e = I() || N(), s = (o || e) && !QB(), r = o ? V : Ui;
  if (s) await P(dbe());
  return s ? h(r) : void 0;
}

var Q = {
  override: "from a local override",
  payload: "from GrowthBook (this session's payload)",
  disk: "from GrowthBook (the disk cache of an earlier session)",
  disabled: "from the default (GrowthBook is off for this session: a third-party provider, or telemetry opted out)",
  fallback: "from the default (a cold GrowthBook cache, no payload yet)"
};

var b = 6e4;

function X(o = Date.now()) {
  let e = Ge(), s = e.hooksModulesSwitchRereading;
  if (s !== void 0) return s;
  let r = e.hooksModulesSwitchRead;
  if (!(r !== void 0 && Jr() && o - r.askedAt >= b)) return null;
  e.hooksModulesSwitchRead = {
    ...r,
    askedAt: o
  };
  let f = (r.askedAt === 0 ? h() : W$e({
    initialize: () => U0().then(Ui),
    budgetMs: zV
  }).then(() => {})).finally(() => {
    e.hooksModulesSwitchRereading = void 0;
  });
  return e.hooksModulesSwitchRereading = f, f;
}

function U(o, e, s) {
  let r = () => ANe(o, e, s) ?? F(o, e, s), i = X();
  return i !== null ? i.catch(d).then(() => (y(), r() ?? void 0)) : r();
}

var G = 1e4;

function vzs(o) {
  if (!(FCe() && !PS())) return;
  let s = Bd(() => {
    if (!sa()) return;
    if (s(), PS()) t(`installed plugins' hooks modules load late: the rollout flag (${W_}) answered on after the load went on over a saved off`), 
    o();
  });
}

var RRt = {
  served: "the rollout switch served off",
  saved: "the rollout switch was saved off by an earlier session and is not refreshed yet",
  unanswered: "this wake's flag fetch has not answered the rollout switch; they load at a turn start once it reads on"
};

function Eus() {
  let o = QB() && PS(), e = FCe();
  return o ? RRt.unanswered : e ? RRt.saved : RRt.served;
}

function oo(o, e, s) {
  let r = Ge(), i = r.loadedModules.length;
  return Promise.resolve().then(o).then(() => {
    if (r.loadedModules.length < i) e(D);
    s();
  });
}

function Ezs() {
  if (gu()) return "in a tool server's daemon";
  return Q[In(W_, aP).source];
}

var kus = [ "NODE_ENV", "DISABLE_GROWTHBOOK", "DISABLE_TELEMETRY", "DO_NOT_TRACK", "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC", "CLAUDE_CODE_GB_DISK_CACHE_WHEN_TELEMETRY_OFF", "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST", "CLAUDE_CODE_CUSTOM_OAUTH_URL", "CLAUDE_INTERNAL_FC_OVERRIDES", ...zut ];

function kzs(o, e, s) {
  let r = U(o, e, s);
  return r === null ? null : We(r, G).then(() => {}).catch(d);
}

var p9t = 18e4;

class eo {
  busy=!1;
  running=null;
  key=null;
  edgeAt=0;
  busySince=0;
  idleWaiters=new Set;
  endWaiters=new Set;
  valveTimer=null;
}

var te = new lt(() => new eo);

function O() {
  return te.of(B());
}

function ro(o) {
  if (o.valveTimer !== null) clearTimeout(o.valveTimer), o.valveTimer = null;
  let e = [ ...o.idleWaiters ];
  o.idleWaiters.clear(), to(e);
}

function to(o) {
  for (let e of o) queueMicrotask(e);
}

function f9t(o, e = null) {
  let s = O(), r = e === null || e === s.key;
  if (o ? s.busy && r : !s.busy || !r) return;
  if (s.busy) ro(s), to([ ...s.endWaiters ]), s.endWaiters.clear();
  s.busy = o, s.running = o ? Symbol("foreground turn") : null, s.key = o ? e : null, 
  s.busySince = o ? performance.now() : 0, s.edgeAt = Date.now();
}

function kNe() {
  return O().busy;
}

function so(o) {
  let e = O();
  if (e.busy) e.endWaiters.add(o); else queueMicrotask(o);
}

function Sus() {
  return O().edgeAt;
}

function zmr(o = performance.now(), e = p9t) {
  let s = O();
  return s.busy && o - s.busySince < e;
}

function wus(o = performance.now(), e = p9t) {
  let s = O();
  return s.busy && o - s.busySince >= e;
}

function vus(o, e, s = p9t) {
  if (e.aborted) return () => {};
  let r = O(), i = !1, n = () => {
    if (e.removeEventListener("abort", u), !i && !e.aborted) o();
  }, u = () => {
    i = !0, r.idleWaiters.delete(n), e.removeEventListener("abort", u);
  };
  if (!zmr(performance.now(), s)) return queueMicrotask(n), u;
  if (r.idleWaiters.add(n), e.addEventListener("abort", u, {
    once: !0
  }), r.valveTimer === null) {
    let f = r.busySince + s - performance.now();
    r.valveTimer = setTimeout(ro, Math.max(0, f), r), r.valveTimer.unref?.();
  }
  return u;
}

function Tzs(o) {
  let e = {
    isStopped: !1,
    isWaiting: !1
  };
  function s() {
    if (e.isWaiting = !1, !e.isStopped && c()) o();
  }
  let r = Bd(() => {
    if (!e.isWaiting && c()) e.isWaiting = !0, so(s);
  });
  return () => {
    e.isStopped = !0, r();
  };
}

function Azs(o, e, s) {
  let r = Ge();
  if (!(r.hooksModulesWakeBound === "ahead" && r.hooksModulesSwitchRead !== void 0 && r.hooksModulesSwitchFollowing === void 0 && QB())) return null;
  let n = P(dbe()).then(() => h()).then(() => (r.hooksModulesSwitchFollowing = void 0, 
  y(), ANe(o, e, s) ?? F(o, e, s) ?? void 0)).catch(d).finally(() => {
    if (r.hooksModulesSwitchFollowing === n) r.hooksModulesSwitchFollowing = void 0;
  });
  return r.hooksModulesSwitchFollowing = n, n;
}

function Czs() {
  try {
    return sa() || In(W_, aP).source === "payload";
  } catch {
    return !1;
  }
}

var Gmr = () => Kmr() !== k(W_, aP);

function Rzs(o) {
  let e = o.registry.hooksModulesSwitchRead;
  if (e?.isManagedPending !== !0) return !1;
  if (!(o.isSetKnown && o.isLoadFaultless && o.unmet.length === 0)) return t(`the load of an organization's hooks modules stays owed: its set ${o.isSetKnown ? "is known" : "is not known yet"}, the load ${o.isLoadFaultless ? "ran" : "did not run faultless"}, ${o.unmet.length} named plugin(s) not found or not loaded`), 
  !1;
  return o.registry.hooksModulesSwitchRead = o.isDecided ? {
    ...e,
    isManagedPending: !1
  } : void 0, !0;
}

var sio = "Your organization's mods could not be loaded, so this turn was not run.";

var io = 3e5;

async function no(o, e, s) {
  let r = Ge(), i = {
    isEnded: !1
  }, n = {
    wake: () => {}
  }, u = new Set, f = new AbortController, _ = Bd(() => n.wake()), x = r.hookRegistrationEnded.subscribe(() => n.wake()), C = {
    isPassed: !1
  }, S = () => !i.isEnded && !C.isPassed && TNe(), M = J(s, f.signal).then(() => {
    C.isPassed = !0;
  });
  e.then(() => {
    i.isEnded = !0;
  });
  try {
    while (S()) {
      let w = {
        isOver: !1
      }, E = J(b, f.signal, {
        unref: !0
      }).then(() => {
        w.isOver = !0;
      }), ao = Promise.resolve().then(o).catch(d);
      while (S() && !w.isOver) {
        let fo = new Promise(p => {
          n.wake = p;
        }), mo = [ ao, r.hooksModulesSwitchFollowing, ...r.hookRegistrationsInFlight ].flatMap(p => p === void 0 || u.has(p) ? [] : [ p ]).map(p => Promise.allSettled([ p ]).then(() => u.add(p)));
        await Promise.race([ E, M, e, fo, ...mo ]);
      }
    }
  } finally {
    f.abort(), _(), x();
  }
}

var lo = "Waiting for your organization's mods to load.";

function xzs(o, e, s, r) {
  if (!TNe()) return null;
  let i = {
    isEnded: !1
  }, n = () => Ge().hooksModulesSwitchRead?.isManagedPending === !0, u = () => ANe(o, e, s) ?? F(o, e, s);
  return r.then(() => {
    i.isEnded = !0;
  }), Promise.resolve().then(() => e(lo)).catch(d).then(() => no(() => U(o, e, s), r, io)).catch(d).then(() => !TNe() && n() ? We(oo(s, e, u), G) : void 0).catch(d).then(() => {
    if (!TNe()) return {
      kind: "start"
    };
    return i.isEnded ? {
      kind: "ended"
    } : {
      kind: "failed",
      message: sio
    };
  });
}

function Tus() {
  let o = Ge();
  if (o.hooksModulesSwitchRead === void 0 && ge()) o.hooksModulesSwitchRead = {
    isOn: !1,
    askedAt: 0,
    isLoadOwed: !0,
    isManagedPending: !0
  };
}

function ge() {
  try {
    return !he() && QB();
  } catch {
    return !0;
  }
}

export { w4e, p9t, f9t, kNe, Sus, zmr, wus, vus, pit, dbe, FCe, m9t, QB, bzs, TNe, ANe, Szs, wzs, vzs, RRt, Eus, Ezs, kus, kzs, Tzs, Azs, Czs, Gmr, Rzs, sio, xzs, Tus };
