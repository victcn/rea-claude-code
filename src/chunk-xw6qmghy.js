// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

var l = [ "\xb7", "\u2722", "\u2733", "\u2736", "\u273b", "\u273b" ], g = [ "\xb7", "\u2722", "\u2733", "\u2736", "\u273b", "\u273d" ], p = [ "\xb7", "\u2722", "*", "\u2736", "\u273b", "\u273d" ], d = [ ...l, ...l.toReversed() ], y = [ ...g, ...g.toReversed() ], f = [ ...p, ...p.toReversed() ];

function tgn() {
  if (a.TERM === "xterm-ghostty") return l;
  return p;
}

function KMe() {
  if (a.TERM === "xterm-ghostty") return d;
  return f;
}

var T = 8;

function OA(r) {
  return Math.round(r * T) / T;
}

function P1t(r) {
  return OA(r / 360) * 360;
}

function qMe(r, t) {
  return (1 - Math.cos(2 * Math.PI * r / t)) / 2;
}

function sy(r, t, i) {
  return {
    r: Math.round(r.r + (t.r - r.r) * i),
    g: Math.round(r.g + (t.g - r.g) * i),
    b: Math.round(r.b + (t.b - r.b) * i)
  };
}

function Dm(r) {
  return `rgb(${r.r},${r.g},${r.b})`;
}

function I1t(r) {
  let t = (r % 360 + 360) % 360, i = .7, m = .6, e = (1 - Math.abs(.19999999999999996)) * .7, n = e * (1 - Math.abs(t / 60 % 2 - 1)), R = .6 - e / 2, o = 0, s = 0, u = 0;
  if (t < 60) o = e, s = n; else if (t < 120) o = n, s = e; else if (t < 180) s = e, 
  u = n; else if (t < 240) s = n, u = e; else if (t < 300) o = n, u = e; else o = e, 
  u = n;
  return {
    r: Math.round((o + R) * 255),
    g: Math.round((s + R) * 255),
    b: Math.round((u + R) * 255)
  };
}

function Nb(r) {
  let t = r.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
  return t ? {
    r: parseInt(t[1], 10),
    g: parseInt(t[2], 10),
    b: parseInt(t[3], 10)
  } : null;
}

export { tgn, KMe, OA, P1t, qMe, sy, Dm, I1t, Nb };
