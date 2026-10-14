// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { dP } from "./chunk-2kzvcfy0.js";

import { Ii } from "./chunk-5wbhf1bk.js";

import { w } from "./chunk-9rj1xaxr.js";

import { n } from "./chunk-3vw306fv.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { _n } from "./chunk-m8ez8fhk.js";

var s = [ " ", "\u258f", "\u258e", "\u258d", "\u258c", "\u258b", "\u258a", "\u2589", "\u2588" ], I = {
  fill: "\u25b0",
  empty: "\u25b1"
}, E = {
  fill: "\u2588",
  empty: "\u2591"
}, _ = () => dP.hasGeometricShapesInkBleedBug() ? E : I, g = a => Math.min(1, Math.max(0, a)), k = (a, t) => {
  let o = Math.floor(a * t), l = [ Ii(s.at(-1), o) ];
  if (o < t) {
    let i = a * t - o, p = Math.floor(i * (s.length - 1));
    l.push(s[p]);
    let m = t - o - 1;
    if (m > 0) l.push(s[0].repeat(m));
  }
  return l.join("");
};

function GC(a) {
  let T = w(17), {ratio: t, width: o, fillColor: l, emptyColor: i, variant: p} = a, m = p === void 0 ? "block" : p, f, c, h, u, y, P;
  if (T[0] !== i || T[1] !== l || T[2] !== t || T[3] !== m || T[4] !== o) {
    P = _n;
    z: {
      let b = g(t);
      if (m === "pill") {
        let {fill: x, empty: A} = _();
        let B = Math.round(b * o);
        P = r(n, {
          children: [ e(n, {
            color: l,
            children: Ii(x, B)
          }), e(n, {
            color: i,
            dimColor: i === void 0,
            children: Ii(A, o - B)
          }) ]
        });
        break z;
      }
      f = n;
      c = l;
      h = i;
      u = `${Math.round(b * 100)}%`;
      y = k(b, o);
    }
    T[0] = i, T[1] = l, T[2] = t, T[3] = m, T[4] = o, T[5] = f, T[6] = c, T[7] = h, 
    T[8] = u, T[9] = y, T[10] = P;
  } else f = T[5], c = T[6], h = T[7], u = T[8], y = T[9], P = T[10];
  if (P !== _n) return P;
  let G;
  if (T[11] !== f || T[12] !== c || T[13] !== h || T[14] !== u || T[15] !== y) G = e(f, {
    color: c,
    backgroundColor: h,
    "aria-label": u,
    children: y
  }), T[11] = f, T[12] = c, T[13] = h, T[14] = u, T[15] = y, T[16] = G; else G = T[16];
  return G;
}

export { GC };
