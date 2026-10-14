// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Te } from "./chunk-dmfz0ptg.js";

import { _, Y } from "./chunk-kawq2919.js";

import { pBr } from "./chunk-fj1a15yf.js";

import { yr } from "./chunk-7w995nyx.js";

import { w } from "./chunk-9rj1xaxr.js";

import { n, Uo } from "./chunk-3vw306fv.js";

import { Be } from "./chunk-50asgqhj.js";

import { d2 } from "./chunk-dy6h0zg1.js";

import { e } from "./chunk-xx3xgkvz.js";

import { qw } from "./chunk-xz8q4brh.js";

import { joo } from "./chunk-7etzs4d7.js";

import { Kt, Ae, Z, F } from "./chunk-cpyd3eya.js";

F();

F();

F();

var c = Kt(!1);

function l8n(r) {
  let s = w(2), {children: t} = r, o;
  if (s[0] !== t) o = e(c.Provider, {
    value: !0,
    children: t
  }), s[0] = t, s[1] = o; else o = s[1];
  return o;
}

function u() {
  return Ae(c);
}

function P(r) {
  try {
    let t = Y(r), s = _(t), o = r.replaceAll("\\/", "/").replace(/\s+/g, ""), m = s.replace(/\s+/g, "");
    if (o !== m) return r;
    return _(t, null, 2);
  } catch {
    return r;
  }
}

var A = 1e4;

function b(r) {
  if (r.length > A) return r;
  return r.split(`\n`).map(P).join(`\n`);
}

var C = /https?:\/\/[^\s"'<>\\\x00-\x1f]+/g, I = 1e5;

function d8n(r, t) {
  if (r.length > I) return r;
  let s = o => o.replace(C, m => qw(m, void 0, {
    themeName: t
  }));
  if (!r.includes(pBr)) return s(r);
  return r.split(`\n`).map(o => o.includes(pBr) ? o : s(o)).join(`\n`);
}

function Ax(r) {
  let l = w(14), {content: t, verbose: s, isError: o, isWarning: m} = r, {columns: d} = Te(), [g] = yr(), z = u(), h = Ae(d2), G = s || z, v;
  if (l[0] !== t || l[1] !== g) v = d8n(b(t), g), l[0] = t, l[1] = g, l[2] = v; else v = l[2];
  let a = v, N;
  fr: {
    if (G) {
      let i;
      if (l[3] !== a) i = f(a), l[3] = a, l[4] = i; else i = l[4];
      N = i;
      break fr;
    }
    let i;
    if (l[5] !== d || l[6] !== a || l[7] !== h) i = f(joo(a, d, h)), l[5] = d, l[6] = a, 
    l[7] = h, l[8] = i; else i = l[8];
    N = i;
  }
  let R = N, x = o ? "error" : m ? "warning" : void 0, i;
  if (l[9] !== R) i = e(Uo, {
    children: R
  }), l[9] = R, l[10] = i; else i = l[10];
  let E;
  if (l[11] !== x || l[12] !== i) E = e(Be, {
    children: e(n, {
      color: x,
      children: i
    })
  }), l[11] = x, l[12] = i, l[13] = E; else E = l[13];
  return E;
}

function f(r) {
  return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g, "");
}

export { l8n, d8n, Ax };
