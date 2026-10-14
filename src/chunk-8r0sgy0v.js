// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { CHe, Yw } from "./chunk-52h8ta4x.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { Ji } from "./chunk-f0wpcwcb.js";

import { w } from "./chunk-9rj1xaxr.js";

import { n, zt } from "./chunk-3vw306fv.js";

import { V } from "./chunk-jb3h1y0s.js";

import { m8 } from "./chunk-sqb9meyh.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { P, F } from "./chunk-cpyd3eya.js";

F();

F();

var e8n = "current-pr";

function vFr(d, o) {
  if (!d || !o) return null;
  let i = d.kind === "cr" && !1, l = d.kind === "mr";
  return {
    prefix: l ? "MR" : "PR",
    label: `${l ? "!" : "#"}${d.number}`,
    url: o,
    dedupUrl: d.url,
    color: de(d.reviewState)
  };
}

function de(d) {
  switch (d) {
   case "approved":
    return "success";

   case "changes_requested":
    return "error";

   case "pending":
    return "warning";

   case "merged":
    return "merged";

   default:
    return;
  }
}

function S(d, o, i) {
  return;
}

function EFr(d, o, i) {
  P(() => {
    if (o === void 0) return;
    S(d, o, i === "cr" || i === "mr");
  }, [ d, o, i ]);
}

function fe(ge) {
  return ge.settings?.prUrlTemplate;
}

function Pte(d) {
  let p = w(41), {number: o, url: i, reviewState: l, bold: s, color: c, dimColor: b, inverse: u, underline: x, hidePrefix: I, kind: Z} = d, be = x === void 0 ? !0 : x, R = Z === "cr" && !1, m = Z === "mr", C = m ? "!" : "#", B = V(fe), ee;
  if (p[0] !== R || p[1] !== m || p[2] !== B || p[3] !== i) ee = R || m ? i : m8(i, B), 
  p[0] = R, p[1] = m, p[2] = B, p[3] = i, p[4] = ee; else ee = p[4];
  let v = ee, re, oe;
  if (p[5] !== R || p[6] !== m || p[7] !== i || p[8] !== v) re = () => {
    S(v, i, R || m);
  }, oe = [ v, i, R, m ], p[5] = R, p[6] = m, p[7] = i, p[8] = v, p[9] = re, p[10] = oe; else re = p[9], 
  oe = p[10];
  P(re, oe);
  let te;
  if (p[11] !== c || p[12] !== l) te = c ?? J(l), p[11] = c, p[12] = l, p[13] = te; else te = p[13];
  let _ = te, k = !u && (b || !_ && !s), ne;
  if (p[14] !== s || p[15] !== k || p[16] !== C || p[17] !== u || p[18] !== o || p[19] !== _) ne = r(n, {
    color: _,
    dimColor: k,
    bold: s,
    inverse: u,
    children: [ C, o ]
  }), p[14] = s, p[15] = k, p[16] = C, p[17] = u, p[18] = o, p[19] = _, p[20] = ne; else ne = p[20];
  let G = ne, U;
  if (p[21] !== s || p[22] !== b || p[23] !== I || p[24] !== m) U = !I && r(Q, {
    children: [ e(n, {
      dimColor: b || !s,
      children: m ? "MR" : "PR"
    }), " " ]
  }), p[21] = s, p[22] = b, p[23] = I, p[24] = m, p[25] = U; else U = p[25];
  const D = !u && be;
  let O;
  if (p[26] !== s || p[27] !== k || p[28] !== C || p[29] !== u || p[30] !== o || p[31] !== _ || p[32] !== D) O = r(n, {
    color: _,
    dimColor: k,
    underline: D,
    bold: s,
    inverse: u,
    children: [ C, o ]
  }), p[26] = s, p[27] = k, p[28] = C, p[29] = u, p[30] = o, p[31] = _, p[32] = D, 
  p[33] = O; else O = p[33];
  let H;
  if (p[34] !== G || p[35] !== O || p[36] !== v) H = e(zt, {
    url: v,
    fallback: G,
    assumeSupport: !0,
    children: O
  }), p[34] = G, p[35] = O, p[36] = v, p[37] = H; else H = p[37];
  let ie;
  if (p[38] !== H || p[39] !== U) ie = r(n, {
    children: [ U, H ]
  }), p[38] = H, p[39] = U, p[40] = ie; else ie = p[40];
  return ie;
}

function J(d) {
  switch (d) {
   case "approved":
    return "success";

   case "changes_requested":
    return "error";

   case "pending":
    return "warning";

   case "merged":
    return "merged";

   default:
    return;
  }
}

function rw(d) {
  let s = w(10), {added: o, removed: i, bold: l} = d;
  if (o === 0 && i === 0) {
    return null;
  }
  let c;
  if (s[0] !== o || s[1] !== l) c = o > 0 && r(n, {
    color: "diffAddedWord",
    bold: l,
    children: [ "+", o ]
  }), s[0] = o, s[1] = l, s[2] = c; else c = s[2];
  const b = o > 0 && i > 0 && " ";
  let u;
  if (s[3] !== l || s[4] !== i) u = i > 0 && r(n, {
    color: "diffRemovedWord",
    bold: l,
    children: [ "-", i ]
  }), s[3] = l, s[4] = i, s[5] = u; else u = s[5];
  let x;
  if (s[6] !== c || s[7] !== b || s[8] !== u) x = r(n, {
    children: [ c, b, u ]
  }), s[6] = c, s[7] = b, s[8] = u, s[9] = x; else x = s[9];
  return x;
}

export { rw, e8n, vFr, EFr, Pte };
