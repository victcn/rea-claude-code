// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Nt } from "./chunk-5wbhf1bk.js";

import { C$ } from "./chunk-kawq2919.js";

import { w } from "./chunk-9rj1xaxr.js";

import { s, n } from "./chunk-3vw306fv.js";

import { jy } from "./chunk-1084bkfw.js";

import { Be } from "./chunk-50asgqhj.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { xs } from "./chunk-p45cd48p.js";

import { Mlt, mSe } from "./chunk-8g5myc7v.js";

function d7e(c) {
  return c.replace(/<sandbox_violations>[\s\S]*?<\/sandbox_violations>/g, "");
}

var U = /^\s*<tool_use_error>([\s\S]*)<\/tool_use_error>\s*$/i, V = /<\/?tool_use_error\b/i;

function S(c) {
  let o = c.flatMap(t => {
    if (!mSe(t)) return [];
    let d = C$(t.text), a = U.exec(d)?.[1];
    return [ a !== void 0 && !V.test(a) ? a : d ];
  }).join(`\n`);
  return o.trim() === "" ? void 0 : o;
}

function fm(c) {
  let u = w(28), {result: o, verbose: t, verbatim: d} = c, a = d === void 0 ? !1 : d, v, _, g, T, R, y, O;
  if (u[0] !== o || u[1] !== a || u[2] !== t) {
    let l;
    let h = Array.isArray(o);
    let m;
    if (u[10] !== h || u[11] !== o) m = typeof o === "string" ? o : h ? S(o) : void 0, 
    u[10] = h, u[11] = o, u[12] = m; else m = u[12];
    let k = m;
    let j = a || h;
    if (k === void 0) l = "Tool execution failed"; else {
      let p = (j ? C$(k) : d7e(C$(xs(k, "tool_use_error") ?? k)).replace(/<\/?error>/g, "")).trim();
      if (!t && !j && p.startsWith("InputValidationError: ")) l = "Invalid tool parameters"; else if (p.startsWith("Error: ") || p.startsWith("Cancelled: ")) l = p; else l = `Error: ${p}`;
    }
    T = Nt(l, `\n`) + 1 - Mlt;
    g = Be;
    _ = s;
    O = "column";
    v = n;
    R = "error";
    y = t ? l : l.split(`\n`).slice(0, Mlt).join(`\n`);
    u[0] = o, u[1] = a, u[2] = t, u[3] = v, u[4] = _, u[5] = g, u[6] = T, u[7] = R, 
    u[8] = y, u[9] = O;
  } else v = u[3], _ = u[4], g = u[5], T = u[6], R = u[7], y = u[8], O = u[9];
  let m;
  if (u[13] !== v || u[14] !== R || u[15] !== y) m = e(v, {
    color: R,
    children: y
  }), u[13] = v, u[14] = R, u[15] = y, u[16] = m; else m = u[16];
  let I;
  if (u[17] !== T || u[18] !== t) I = !t && e(jy, {
    count: T,
    expandable: !0
  }), u[17] = T, u[18] = t, u[19] = I; else I = u[19];
  let L;
  if (u[20] !== _ || u[21] !== O || u[22] !== m || u[23] !== I) L = r(_, {
    flexDirection: O,
    children: [ m, I ]
  }), u[20] = _, u[21] = O, u[22] = m, u[23] = I, u[24] = L; else L = u[24];
  let B;
  if (u[25] !== g || u[26] !== L) B = e(g, {
    children: L
  }), u[25] = g, u[26] = L, u[27] = B; else B = u[27];
  return B;
}

export { d7e, fm };
