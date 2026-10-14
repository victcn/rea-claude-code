// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

import { Tmr } from "./chunk-gwz0gszt.js";

import { U4e } from "./chunk-2kzvcfy0.js";

import { ogn } from "./chunk-7w995nyx.js";

import { w } from "./chunk-9rj1xaxr.js";

import { C_t } from "./chunk-k8g8atcg.js";

import { rge } from "./chunk-kwzrz2b8.js";

import { o4e, XB } from "./chunk-1pzzpwf7.js";

import { e } from "./chunk-xx3xgkvz.js";

import { jEn, gvt, VVt } from "./chunk-7de0e9qj.js";

import { P, y, F } from "./chunk-cpyd3eya.js";

import { O } from "./chunk-1xnsr4dy.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

var s = {
  light: {
    background: "#f9f9f7",
    foreground: "#000000"
  },
  dark: {
    background: "#1f1f1e",
    foreground: "#ffffff"
  }
};

function DBo(i, n, t) {
  if (!t) return;
  let r;
  if (i === "auto") {
    if (n === void 0) return;
    r = n;
  } else r = VVt(i);
  return U4e(r) ? s.light : s.dark;
}

function l() {
  let t = w(4), [i, n] = y(jEn), r, o;
  if (t[0] === S) r = () => gvt(() => n(jEn())), o = [], t[0] = r, t[1] = o; else r = t[0], 
  o = t[1];
  P(r, o);
  let m;
  if (t[2] !== i) m = DBo(ogn(), i, Tmr()), t[2] = i, t[3] = m; else m = t[3];
  return m;
}

function R6n(i) {
  let m = w(9), {children: n, mouseTracking: t, killRing: r} = i, o = l(), c;
  if (m[0] !== n || m[1] !== r) c = e(C_t, {
    handle: r,
    children: n
  }), m[0] = n, m[1] = r, m[2] = c; else c = m[2];
  let f = c;
  if (o4e()) {
    let d;
    if (m[3] !== t) d = t ?? XB(), m[3] = t, m[4] = d; else d = m[4];
    let p;
    if (m[5] !== o || m[6] !== d || m[7] !== f) p = e(rge, {
      mouseTracking: d,
      surface: o,
      children: f
    }), m[5] = o, m[6] = d, m[7] = f, m[8] = p; else p = m[8];
    return p;
  }
  return f;
}

function $Ks() {
  if (O() === "windows" || a.WT_SESSION) process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ??= "1";
}

export { DBo, R6n, $Ks };
