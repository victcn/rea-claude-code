// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, lt, ea } from "./chunk-3pqddg8f.js";

import { j } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { GHo, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Qe, apt, rve } from "./chunk-xywp7esx.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { ws } from "./chunk-nnrb0acr.js";

import { YPo } from "./chunk-q6wab2jw.js";

import { fe, dt } from "./chunk-dd98x6x7.js";

import { A1 } from "./chunk-h36n2zxz.js";

import { b5t, Oh, nP, aR } from "./chunk-84yp45y8.js";

import { $h, cz, bFn, F5e, rFe, D7t, tu } from "./chunk-4v78v8fd.js";

import { Qnr, err, trr, HDe, Pvt, j5r, Itt, srr, UTe } from "./chunk-ce64fmea.js";

import { Tet } from "./chunk-q0dvnnc2.js";

import { ik } from "./chunk-2mq45myc.js";

import { resolve as B } from "path";

var SUr = new lt(() => Me());

function g1t(e, n, o, l, u) {
  let c = dt();
  t(`Settings changed from ${n}, updating app state`), rve();
  let f = cz();
  A1({
    userLayer: "retain"
  }), aR();
  let a = !1;
  if (o(m => {
    let s = b5t(m.toolPermissionContext, f);
    s = vUr(s, m.settings.permissions?.additionalDirectories, F5e(), n, u?.trustFlip === !0, u?.prevCwd, l);
    let r = wUr(s, f);
    if (s = r.context, a = r.exitedAutoMode, s.blockReadsOutsideWorkingDirectories !== !0 && rFe()) s = {
      ...s,
      blockReadsOutsideWorkingDirectories: !0
    }, D7t();
    let g = Tet();
    return {
      ...m,
      settings: c,
      toolPermissionContext: s,
      ...m.awaySummaryEnabled !== g && {
        awaySummaryEnabled: g
      }
    };
  }), a && e !== void 0) SUr.of(e).emit();
}

function h1t(e) {
  if (YPo()) e();
}

function wUr(e, n) {
  let o = e;
  if (o.isBypassPermissionsModeAvailable && ik()) o = j5r(o);
  if (o.strippedDangerousRules !== void 0) {
    let u = new Set(ws), c = !$h(), f = {};
    for (let [a, m] of Object.entries(o.strippedDangerousRules)) if (m && (c || a === "command") && !u.has(a)) f[a] = [ ...m ];
    o = {
      ...o,
      strippedDangerousRules: f
    };
  }
  let l = Itt(o) && Pvt();
  if (l) o = srr(o);
  return {
    context: UTe(o),
    exitedAutoMode: l
  };
}

function vUr(e, n, o, l, u = !1, c, f) {
  let a = new Set((n ?? []).flatMap(i => C(i, c))), m = new Set((o ?? []).flatMap(i => C(i))), s = e.additionalWorkingDirectories, r = [ ...a ].filter(i => !m.has(i) && !D(s.get(i)?.source)), g = [ ...m ].filter(i => (!a.has(i) || u && !s.has(i)) && !D(s.get(i)?.source)), P = ea(), {declared: T, repoOnly: v} = bFn(i => [ ...P === null ? [] : C(i, P), ...C(i) ], f), b = i => v.has(i) ? "projectSettings" : "localSettings", A = [ ...s.entries() ].filter(([i, p]) => !D(p.source) && !r.includes(i) && T.has(i) && p.source !== b(i));
  if (r.length === 0 && g.length === 0 && A.length === 0 && l !== "flagSettings") return e;
  let y = e;
  if (A.length > 0) {
    let i = new Map(s);
    for (let [p, h] of A) i.set(p, {
      ...h,
      source: b(p)
    });
    y = {
      ...y,
      additionalWorkingDirectories: i
    };
  }
  if (l === "flagSettings") {
    let i = new Set((fe("flagSettings")?.permissions?.additionalDirectories ?? []).flatMap(S => C(S))), p = new Map(y.trustedNetworkDirectories ?? []), h = !1;
    for (let S of [ ...p.keys() ]) if (!i.has(S) && s.get(S)?.source !== "cliArg") {
      for (let x of p.get(S) ?? []) if (x !== S) r.push(x);
      p.delete(S), h = !0;
    }
    if (trr()) {
      for (let S of i) if (!p.has(S)) {
        if (GHo(S)) continue;
        let x = Qnr(S);
        if (x.length > 0) {
          p.set(S, x);
          for (let M of x) if (M !== S) g.push(M);
          h = !0;
        }
      }
    }
    if (h) y = {
      ...y,
      trustedNetworkDirectories: p
    };
  }
  if (r.length > 0) y = tu(y, {
    type: "removeDirectories",
    directories: r,
    destination: "localSettings"
  });
  if (g.length > 0) for (let i of [ "projectSettings", "localSettings" ]) {
    let p = g.filter(h => b(h) === i);
    if (p.length > 0) y = tu(y, {
      type: "addDirectories",
      directories: p,
      destination: i
    });
  }
  return y;
}

function y1t(e, n) {
  let o = new Set(F5e().flatMap(c => C(c))), l = e.additionalWorkingDirectories, u = n.filter(c => {
    let f = l.get(c);
    return f !== void 0 && !o.has(c) && !D(f.source);
  });
  if (u.length === 0) return e;
  return tu(e, {
    type: "removeDirectories",
    directories: u,
    destination: "localSettings"
  });
}

function D(e) {
  return e === "cliArg" || e === "command" || e === "session";
}

function E(e, n) {
  return B(ot(e, n));
}

function C(e, n) {
  try {
    return [ E(e, n) ];
  } catch {
    return [];
  }
}

class k {
  #e=!1;
  #o=!1;
  get autoModeCheckRan() {
    return this.#e;
  }
  get isLaunchRun() {
    return !this.#o;
  }
  claimAutoModeCheck() {
    if (this.#e) return !1;
    return this.#e = !0, !0;
  }
  rearmAutoModeCheck() {
    this.#e = !1, this.#o = !0;
  }
  reset() {
    this.#e = !1, this.#o = !1;
  }
}

var w = new K(() => new k);

function u_t(e) {
  return {
    key: "auto-mode-gate-notification",
    kind: "warning",
    text: e,
    color: "warning",
    priority: "high"
  };
}

async function p_t(e, n, o, l, u) {
  let c = w.of(e);
  if (!c.claimAutoModeCheck()) return;
  let {updateContext: f, notification: a} = await HDe(n, l, c.isLaunchRun);
  if (o(m => {
    let s = f(m.toolPermissionContext), r = s === m.toolPermissionContext ? m : {
      ...m,
      toolPermissionContext: s
    };
    if (!a || u) return r;
    return {
      ...r,
      notifications: {
        ...r.notifications,
        queue: [ ...r.notifications.queue, u_t(a) ]
      }
    };
  }), a && u) u(u_t(a));
}

function Dmn(e) {
  w.of(e).rearmAutoModeCheck();
}

function EUr(e, n) {
  return (e.isAutoModeAvailable === !1 || Boolean(n) || apt(Qe())) && Oh();
}

function kUr(e, n, o, l) {
  return R(e, n, o, l, !1);
}

function _1t(e, n, o) {
  return R(e, n, o, void 0, !0);
}

async function _Wo(e, n, o, l) {
  switch (await kUr(e, n, o, l)) {
   case "not-due":
   case "allowed":
    return;

   case "refused":
    return err(nP());

   case "unanswered":
    return {
      ok: !1,
      error: "Cannot set permission mode to auto: auto mode availability is not known yet \xb7 ask again",
      code: "auto_mode_unavailable"
    };
  }
}

async function R(e, n, o, l, u) {
  if (!EUr(e, o) || u && Itt(e)) return "not-due";
  let c = HDe(e, o).then(({updateContext: f, canEnterAuto: a, refusedForSettingsAlone: m}) => {
    let s = !1;
    if (!m) n(r => {
      let g = r.toolPermissionContext;
      if (!a) {
        if (u && Itt(g)) return r;
        let P = f(g);
        return P === g ? r : {
          ...r,
          toolPermissionContext: P
        };
      }
      if (s = Boolean(r.fastMode) && !o, g.isAutoModeAvailable !== !1 || !Oh() || Boolean(r.fastMode) !== Boolean(o)) return r;
      return {
        ...r,
        toolPermissionContext: {
          ...g,
          isAutoModeAvailable: a,
          canAutoClassifierRun: a
        }
      };
    });
    if (!a) return "refused";
    return s ? "unanswered" : "allowed";
  }).catch(f => (d(j(f)), "unanswered"));
  return await (l === void 0 ? c : We(c, l)) ?? "unanswered";
}

export { SUr, g1t, h1t, wUr, vUr, y1t, u_t, p_t, Dmn, EUr, kUr, _1t, _Wo };
