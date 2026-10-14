// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { gg } from "./chunk-150qmpyg.js";

import { rn } from "./chunk-yxennhe9.js";

import { s, n, R6 } from "./chunk-3vw306fv.js";

import { w } from "./chunk-9rj1xaxr.js";

import { d2 } from "./chunk-dy6h0zg1.js";

import { e } from "./chunk-xx3xgkvz.js";

import { Ae, Zt, Dh, R, F } from "./chunk-cpyd3eya.js";

F();

function M() {
  let i = Ae(d2), [r, t, o, l] = R6(), f = l() ?? t.isVisible;
  return [ r, f || i, o ];
}

function RA({children: i}) {
  let r = Ae(gg), [t, o, l] = M(), f = R(i), [, m] = Dh(d => d + 1, 0), u = !o;
  if (!u) f.current = i;
  let a = r?.columns, c = r?.rows;
  return Zt(() => {
    if (u && l()) m();
  }, [ a, c, u, l ]), e(s, {
    ref: t,
    children: f.current
  });
}

function gge(i) {
  let [r, t] = M(), o = R(i);
  if (t) o.current = i;
  return [ r, o.current ];
}

function Bae(i) {
  let o = w(10), {elapsedTimeSeconds: r, timeoutMs: t} = i;
  if (r === void 0 && !t) {
    return null;
  }
  let l;
  if (o[0] !== t) l = t ? rn(t, {
    hideTrailingZeros: !0
  }) : void 0, o[0] = t, o[1] = l; else l = o[1];
  let f = l;
  if (r === void 0) {
    const m = `(timeout ${f})`;
    let u;
    if (o[2] !== m) u = e(n, {
      dimColor: !0,
      children: m
    }), o[2] = m, o[3] = u; else u = o[3];
    return u;
  }
  const m = r * 1e3;
  let u;
  if (o[4] !== m) u = rn(m), o[4] = m, o[5] = u; else u = o[5];
  let a = u;
  if (f) {
    const c = `(${a} \xb7 timeout ${f})`;
    let d;
    if (o[6] !== c) d = e(n, {
      dimColor: !0,
      children: c
    }), o[6] = c, o[7] = d; else d = o[7];
    return d;
  }
  const c = `(${a})`;
  let d;
  if (o[8] !== c) d = e(n, {
    dimColor: !0,
    children: c
  }), o[8] = c, o[9] = d; else d = o[9];
  return d;
}

export { RA, gge, Bae };
