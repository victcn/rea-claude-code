// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { he, P$, jj, Eae } from "./chunk-3pqddg8f.js";

import { Pr } from "./chunk-z52kmxx4.js";

import { Sr } from "./chunk-3x03pnz9.js";

import { ZB } from "./chunk-sg5gpfs4.js";

import { jg, jvr, PN, iyo, e_, jY } from "./chunk-h36n2zxz.js";

var A9t = t => t.mcpInfo?.effectiveMaxPermission === "ask" ? {
  ceiling: "ask"
} : {};

var INe = t => ({
  tool: t.name,
  ceiling: A9t(t).ceiling
});

var MRt = "a cloud session does not run command, script, HTTP or MCP tool hooks from the shared server it runs on", N = new Set([ "prompt", "agent", "callback", "function" ]);

function B(t) {
  return N.has(t.type);
}

function T9t(t) {
  if (!he()) return t;
  let e = jj();
  return t.flatMap(n => {
    let o = n.pluginId !== void 0 && e?.holds(n.pluginId) === !0, r = n.hooks.filter(s => B(s) || o && s.type === "command");
    return r.length > 0 ? [ {
      ...n,
      hooks: r
    } ] : [];
  });
}

var j = {
  command: "command",
  script: "script",
  http: "HTTP",
  mcp_tool: "MCP tool"
};

function ogr(t) {
  return {
    permissionRequestResult: {
      behavior: "deny",
      message: `The PermissionRequest ${j[t.type] ?? t.type} hook can't run in this cloud session, so this permission request is denied.`
    },
    outcome: "blocking",
    hook: t
  };
}

function t7(t) {
  return T9t(q(t));
}

function q(t) {
  if (Sr("hooks")) return [];
  let e = P$()?.[t] ?? [];
  if (e_()) return e.filter(l => !("pluginRoot" in l) && !("deviceOwner" in l));
  let n = M(), {managedOnly: o, managedPluginIds: r} = n, s = iyo(), a = jj();
  return [ ...jY()?.[t] ?? [], ...o ? [] : Eae()?.[t] ?? [], ...e.filter(l => W(l) && a?.holds(l.pluginId) === !0 ? !(jvr() && !r?.has(l.pluginId)) : (!("pluginRoot" in l) || R(l.pluginId, n)) && !(s && "deviceOwner" in l)) ];
}

function W(t) {
  return "pluginRoot" in t && t.hooks.every(e => e.type === "command");
}

function M() {
  let t = jg();
  return {
    managedOnly: t,
    managedPluginIds: t && !Pr() ? ZB() : null
  };
}

function R(t, {managedOnly: e, managedPluginIds: n}) {
  return !e || n?.has(t) === !0;
}

function EHn(t) {
  return sgr() && !PN() && R(t, M());
}

function sgr() {
  return !Sr("hooks") && !e_() && !Pr();
}

class h extends Error {}

var T = [ [ 48, 57 ] ], w = [ [ 48, 57 ], [ 65, 90 ], [ 95, 95 ], [ 97, 122 ] ], O = [ [ 9, 13 ], [ 32, 32 ], [ 160, 160 ], [ 5760, 5760 ], [ 8192, 8202 ], [ 8232, 8233 ], [ 8239, 8239 ], [ 8287, 8287 ], [ 12288, 12288 ], [ 65279, 65279 ] ], C = {
  d: T,
  D: b(T),
  w,
  W: b(w),
  s: O,
  S: b(O)
}, L = b([ [ 10, 10 ], [ 13, 13 ], [ 8232, 8233 ] ]), F = /^[ -/:-@[-`{-~]$/, K = 100, G = "^$\\.*+?()[]{}|";

function S(t, e) {
  let n = 0, o = t.length;
  while (n < o) {
    let r = n + o >> 1;
    if (e > t[r][1]) n = r + 1; else o = r;
  }
  return n < t.length && e >= t[n][0];
}

function b(t) {
  let e = [], n = 0;
  for (let [o, r] of t) {
    if (o > n) e.push([ n, o - 1 ]);
    n = r + 1;
  }
  if (n <= 65535) e.push([ n, 65535 ]);
  return e;
}

function I(t) {
  let e = [];
  for (let [n, o] of t.toSorted((r, s) => r[0] - s[0])) {
    let r = e.at(-1);
    if (r !== void 0 && n <= r[1] + 1) r[1] = Math.max(r[1], o); else e.push([ n, o ]);
  }
  return e;
}

function X(t) {
  let e = 0, n = 0;
  function o(i) {
    if (!t.startsWith(i, e)) return !1;
    return e += i.length, !0;
  }
  function r() {
    if (e >= t.length) throw new h;
    return t.charCodeAt(e++);
  }
  function s() {
    let i = [ a() ];
    while (o("|")) i.push(a());
    return {
      type: "either",
      options: i
    };
  }
  function a() {
    let i = [];
    while (e < t.length && t[e] !== "|" && t[e] !== ")") i.push(l());
    return {
      type: "sequence",
      items: i
    };
  }
  function l() {
    if (o("^")) return {
      type: "start"
    };
    if (o("$")) return {
      type: "end"
    };
    if (o("\\b")) return {
      type: "boundary"
    };
    if (o("\\B")) return {
      type: "notBoundary"
    };
    let i = H(), f = t[e];
    if (f !== "*" && f !== "+" && f !== "?") return i;
    return e++, o("?"), {
      type: "repeat",
      item: i,
      mark: f
    };
  }
  function H() {
    if (o("(")) {
      if (t[e] === "?" && !o("?:") || ++n > K) throw new h;
      let i = s();
      if (!o(")")) throw new h;
      return n--, i;
    }
    if (o(".")) return {
      type: "set",
      set: L
    };
    if (o("[")) return {
      type: "set",
      set: m()
    };
    if (o("\\")) {
      let i = y();
      return typeof i === "number" ? {
        type: "unit",
        unit: i
      } : {
        type: "set",
        set: i
      };
    }
    if (G.includes(t[e] ?? "")) throw new h;
    return {
      type: "unit",
      unit: r()
    };
  }
  function y() {
    let i = r(), f = String.fromCharCode(i);
    if (Object.hasOwn(C, f)) return C[f];
    if (!F.test(f)) throw new h;
    return i;
  }
  function m() {
    let i = o("^"), f = [];
    while (!o("]")) {
      let k = o("\\") ? y() : r(), E = t[e] === "-" && t[e + 1] !== "]";
      if (typeof k !== "number") {
        if (E) throw new h;
        f.push(...k);
        continue;
      }
      if (!E) {
        f.push([ k, k ]);
        continue;
      }
      e++;
      let P = o("\\") ? y() : r();
      if (typeof P !== "number" || P < k) throw new h;
      f.push([ k, P ]);
    }
    return i ? b(I(f)) : I(f);
  }
  let d = {
    type: "start"
  }, p, c;
  if (o("^(?!")) {
    if (p = {
      type: "sequence",
      items: [ d, s() ]
    }, !o(")")) throw new h;
    c = {
      type: "sequence",
      items: [ d, a() ]
    };
  } else c = s();
  if (e < t.length) throw new h;
  return {
    unless: p,
    whole: c
  };
}

var u = {
  match: 0,
  unit: 1,
  set: 2,
  jump: 3,
  split: 4,
  start: 5,
  end: 6,
  boundary: 7,
  notBoundary: 8
};

function g(t, e, n = 0, o) {
  return t.to.push(n), t.other.push(0), t.sets.push(o), t.ops.push(e) - 1;
}

function x(t, e) {
  let {ops: n, to: o, other: r} = e;
  switch (t.type) {
   case "unit":
    g(e, u.unit, t.unit);
    return;

   case "set":
    g(e, u.set, 0, t.set);
    return;

   case "start":
   case "end":
   case "boundary":
   case "notBoundary":
    g(e, u[t.type]);
    return;

   case "sequence":
    for (let s of t.items) x(s, e);
    return;

   case "either":
    {
      let s = [];
      for (let a of t.options.slice(0, -1)) {
        let l = g(e, u.split, n.length + 1);
        x(a, e), s.push(g(e, u.jump)), r[l] = n.length;
      }
      x(t.options.at(-1), e);
      for (let a of s) o[a] = n.length;
      return;
    }

   case "repeat":
    {
      let s = n.length;
      if (t.mark === "+") {
        x(t.item, e);
        let a = g(e, u.split, s);
        r[a] = n.length;
        return;
      }
      if (g(e, u.split, s + 1), x(t.item, e), t.mark === "*") g(e, u.jump, s);
      r[s] = n.length;
    }
  }
}

function z({ops: t, to: e, other: n, sets: o}, r) {
  let s = new Int32Array(t.length).fill(-1), a = new Int32Array(t.length), l = new Int32Array(t.length), H = 0, y = 0, m = 0;
  function d(p) {
    if (s[p] !== m) s[p] = m, a[H++] = p;
  }
  for (;;m++) {
    while (y > 0) d(l[--y]);
    d(0);
    let p = m < r.length ? r.charCodeAt(m) : -1;
    while (H > 0) {
      let c = a[--H];
      switch (t[c]) {
       case u.match:
        return !0;

       case u.unit:
        if (p === e[c]) l[y++] = c + 1;
        break;

       case u.set:
        if (S(o[c], p)) l[y++] = c + 1;
        break;

       case u.split:
        d(n[c]), d(e[c]);
        break;

       case u.jump:
        d(e[c]);
        break;

       case u.start:
        if (m === 0) d(c + 1);
        break;

       case u.boundary:
       case u.notBoundary:
        {
          if ((m > 0 && S(w, r.charCodeAt(m - 1))) !== S(w, p) === (t[c] === u.boundary)) d(c + 1);
          break;
        }

       default:
        if (p < 0) d(c + 1);
      }
    }
    if (p < 0) return !1;
  }
}

function _(t) {
  let e = {
    ops: [],
    to: [],
    other: [],
    sets: []
  };
  return x(t, e), g(e, u.match), z.bind(null, e);
}

function A(t) {
  try {
    let {unless: e, whole: n} = X(t), o = _(n);
    if (e === void 0) return {
      test: o
    };
    let r = _(e);
    return {
      test: s => !r(s) && o(s)
    };
  } catch (e) {
    if (e instanceof h) return;
    throw e;
  }
}

var V = 2048, D = 512;

class HRt extends Error {}

function Y(t) {
  if (t.length > V) return "too_long";
  let e = A(t);
  if (e !== void 0) return e;
  try {
    return new RegExp(t), "not_read";
  } catch {
    return "invalid";
  }
}

function kHn(t) {
  if (!he()) return new RegExp(t);
  let e = Y(t);
  if (e === "invalid") throw SyntaxError("invalid hook matcher");
  if (typeof e === "string") throw new HRt("This hook's matcher cannot be tested in a cloud session: it has to be rewritten.");
  return {
    test(n) {
      if (n.length > D) throw new HRt(`The name that this hook's matcher is tested against (for a tool call, the tool's name) has over ${D} characters, more than a cloud session tests.`);
      return e.test(n);
    }
  };
}

export { MRt, T9t, ogr, t7, EHn, sgr, HRt, kHn, A9t, INe };
