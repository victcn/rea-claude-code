// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { Hee, sje } from "./chunk-yxennhe9.js";

import { n } from "./chunk-3vw306fv.js";

import { ka } from "./chunk-e1e7nk6m.js";

import { G } from "./chunk-j706jx8h.js";

import { d2 } from "./chunk-dy6h0zg1.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { Kt, Ae, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

F();

var c = Kt(!1);

function __t(m) {
  let i = w(2), {children: o} = m, a;
  if (i[0] !== o) a = e(c.Provider, {
    value: !0,
    children: o
  }), i[0] = o, i[1] = a; else a = i[1];
  return a;
}

function Du() {
  let a = w(3), m = Ae(c), o = Ae(d2), i = ka("app:toggleTranscript", "Global", "ctrl+o");
  if (m || o) {
    return null;
  }
  let t;
  if (a[0] === S) t = {
    keyCase: "lower"
  }, a[0] = t; else t = a[0];
  let d;
  if (a[1] !== i) d = e(n, {
    dimColor: !0,
    children: e(G, {
      chord: i,
      action: "expand",
      parens: !0,
      format: t
    })
  }), a[1] = i, a[2] = d; else d = a[2];
  return d;
}

function jy(m) {
  let l = w(11), {count: o, unit: i, expandable: a, hiddenChars: t} = m, d = i === void 0 ? "line" : i, h = a === void 0 ? !1 : a;
  if (o <= 0) {
    return null;
  }
  let p;
  if (l[0] !== o || l[1] !== d) p = Hee(o, d), l[0] = o, l[1] = d, l[2] = p; else p = l[2];
  let s;
  if (l[3] !== t) s = t !== void 0 && t >= 1e3 && ` (~${sje(t)} KB)`, l[3] = t, l[4] = s; else s = l[4];
  let u;
  if (l[5] !== h) u = h && r(Q, {
    children: [ " ", e(Du, {}) ]
  }), l[5] = h, l[6] = u; else u = l[6];
  let b;
  if (l[7] !== p || l[8] !== s || l[9] !== u) b = r(n, {
    dimColor: !0,
    children: [ p, s, u ]
  }), l[7] = p, l[8] = s, l[9] = u, l[10] = b; else b = l[10];
  return b;
}

export { __t, Du, jy };
