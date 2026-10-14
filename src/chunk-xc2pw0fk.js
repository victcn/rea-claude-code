// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { qS } from "./chunk-q6wab2jw.js";

import { w } from "./chunk-9rj1xaxr.js";

import { s, n, wu } from "./chunk-3vw306fv.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { Zy, Kt, _m, Ae, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function _(p, d) {
  return e(s, {
    width: 2,
    children: e(n, {
      dimColor: !0,
      children: k[p]
    })
  }, d);
}

var k = {
  branch: qS.branch,
  last: qS.last,
  pipe: qS.pipe,
  space: ""
};

function p7e(u) {
  let a = w(7), {connectors: t, children: c} = u, o;
  if (a[0] !== t) o = t.length > 0 && e(wu, {
    "aria-hidden": !0,
    fromLeftEdge: !0,
    flexShrink: 0,
    flexDirection: "row",
    children: t.map(_)
  }), a[0] = t, a[1] = o; else o = a[1];
  let l;
  if (a[2] !== c) l = e(s, {
    flexGrow: 1,
    flexShrink: 1,
    children: c
  }), a[2] = c, a[3] = l; else l = a[3];
  let i;
  if (a[4] !== o || a[5] !== l) i = r(s, {
    flexDirection: "row",
    children: [ o, l ]
  }), a[4] = o, a[5] = l, a[6] = i; else i = a[6];
  return i;
}

var R = Kt({
  variant: "outline",
  ancestors: []
}), f = Kt(!0);

function h(u, t = !0) {
  let c = Zy.toArray(u);
  return c.map((a, o) => e(f.Provider, {
    value: t && o === c.length - 1,
    children: a
  }, o));
}

function G(u) {
  let o = w(10), {children: t, variant: c} = u, a = c === void 0 ? "outline" : c, l;
  if (o[0] === S) l = [], o[0] = l; else l = o[0];
  let i;
  if (o[1] !== a) i = {
    variant: a,
    ancestors: l
  }, o[1] = a, o[2] = i; else i = o[2];
  let p;
  if (o[3] !== t) p = h(t), o[3] = t, o[4] = p; else p = o[4];
  let d;
  if (o[5] !== p) d = e(s, {
    flexDirection: "column",
    children: p
  }), o[5] = p, o[6] = d; else d = o[6];
  let v;
  if (o[7] !== i || o[8] !== d) v = e(R.Provider, {
    value: i,
    children: d
  }), o[7] = i, o[8] = d, o[9] = v; else v = o[9];
  return v;
}

function O(u) {
  let N = w(19), {label: t, children: c, dimColor: a, color: o} = u, {variant: l, ancestors: i} = Ae(R), p = Ae(f), d = l === "outline" ? "last" : p ? "last" : "branch", v = l === "outline" ? "space" : p ? "space" : "pipe", m = t != null && t !== !1, C = m ? t : c, x;
  if (N[0] !== i || N[1] !== d) x = [ ...i, d ], N[0] = i, N[1] = d, N[2] = x; else x = N[2];
  let b;
  if (N[3] !== o || N[4] !== a || N[5] !== C) b = _m(C) ? C : e(n, {
    dimColor: a,
    color: o,
    children: C
  }), N[3] = o, N[4] = a, N[5] = C, N[6] = b; else b = N[6];
  let P;
  if (N[7] !== x || N[8] !== b) P = e(p7e, {
    connectors: x,
    children: b
  }), N[7] = x, N[8] = b, N[9] = P; else P = N[9];
  let T;
  if (N[10] !== i || N[11] !== c || N[12] !== v || N[13] !== m || N[14] !== l) T = m && e(R.Provider, {
    value: {
      variant: l,
      ancestors: [ ...i, v ]
    },
    children: h(c)
  }), N[10] = i, N[11] = c, N[12] = v, N[13] = m, N[14] = l, N[15] = T; else T = N[15];
  let q;
  if (N[16] !== P || N[17] !== T) q = r(s, {
    flexDirection: "column",
    children: [ P, T ]
  }), N[16] = P, N[17] = T, N[18] = q; else q = N[18];
  return q;
}

function j(u) {
  let a = w(3), {children: t} = u, c = Ae(f), o;
  if (a[0] !== t || a[1] !== c) o = h(t, c), a[0] = t, a[1] = c, a[2] = o; else o = a[2];
  return o;
}

var _u = Object.assign(G, {
  Node: O,
  Group: j
});

export { p7e, _u };
