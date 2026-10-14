// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { h0, sz } from "./chunk-yrmy36g6.js";

import { w } from "./chunk-9rj1xaxr.js";

import { Tft, isn } from "./chunk-3kb22va7.js";

import { s, n } from "./chunk-3vw306fv.js";

import { ka } from "./chunk-e1e7nk6m.js";

import { G } from "./chunk-j706jx8h.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { te } from "./chunk-48xcyvwy.js";

import { Z, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

var v = "cyan_FOR_SUBAGENTS_ONLY";

function CI(a) {
  if (!a) return v;
  if (sz(a)) return h0[a];
  return `ansi:${a}`;
}

F();

var N = {
  keyCase: "lower"
};

function Mte(a) {
  let o = w(19), {displayName: f, qualifier: E, count: k, addMargin: M, fallbackLabel: c, body: t} = a, R = k === void 0 ? 1 : k, D = M === void 0 ? !0 : M, b = ka("app:toggleTranscript", "Global", "ctrl+o"), h;
  if (o[0] !== f || o[1] !== c) h = Tft(f) || c, o[0] = f, o[1] = c, o[2] = h; else h = o[2];
  let u = h, A;
  if (o[3] !== t) A = t ? isn(t) : "", o[3] = t, o[4] = A; else A = o[4];
  let i = A;
  const g = D ? 1 : 0;
  let P;
  if (o[5] === S) P = r(n, {
    "aria-hidden": !0,
    children: [ te.pointerSmall, " " ]
  }), o[5] = P; else P = o[5];
  const y = R === 1 ? "Message" : `${R} messages`, T = E ? ` (${E})` : "";
  let p;
  if (o[6] !== i) p = i ? r(n, {
    italic: !0,
    children: [ ": ", i ]
  }) : "", o[6] = i, o[7] = p; else p = o[7];
  let l;
  if (o[8] !== b) l = e(G, {
    chord: b,
    action: "expand",
    parens: !0,
    format: N
  }), o[8] = b, o[9] = l; else l = o[9];
  let m;
  if (o[10] !== u || o[11] !== l || o[12] !== y || o[13] !== T || o[14] !== p) m = r(n, {
    dimColor: !0,
    children: [ P, y, " from @", u, T, p, " ", l ]
  }), o[10] = u, o[11] = l, o[12] = y, o[13] = T, o[14] = p, o[15] = m; else m = o[15];
  let q;
  if (o[16] !== m || o[17] !== g) q = e(s, {
    marginTop: g,
    children: m
  }), o[16] = m, o[17] = g, o[18] = q; else q = o[18];
  return q;
}

export { CI, Mte };
