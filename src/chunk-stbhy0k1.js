// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { st, n, qr } from "./chunk-3vw306fv.js";

import { ac } from "./chunk-qvbrx5kg.js";

import { s9n, zi, Xe } from "./chunk-yrpmvsj8.js";

import { e } from "./chunk-xx3xgkvz.js";

import { y, F } from "./chunk-cpyd3eya.js";

F();

var z = 500;

function t1t(L = z) {
  let r = ac();
  return qr(L, r);
}

function sr(L) {
  let a = w(32), {onConfirm: r, onCancel: o, confirmLabel: D, cancelLabel: P, cancelFirst: V, focus: X, hideIndexes: Y, refuseInput: M, openedAt: I, windowMs: Z, armAfterMs: v} = L, s = D === void 0 ? "Yes" : D, i = P === void 0 ? "No" : P, x = V === void 0 ? !1 : V, j = X === void 0 ? "confirm" : X, N = Y === void 0 ? !1 : Y, [E] = y(j), l = t1t(v ?? null) || v === void 0;
  if (st()) {
    const c = Z ?? v;
    let t;
    if (a[0] !== i || a[1] !== s || a[2] !== o || a[3] !== r || a[4] !== I || a[5] !== M || a[6] !== c) t = e(s9n, {
      confirmLabel: s,
      cancelLabel: i,
      onConfirm: r,
      onCancel: o,
      refuseInput: M,
      openedAt: I,
      windowMs: c
    }), a[0] = i, a[1] = s, a[2] = o, a[3] = r, a[4] = I, a[5] = M, a[6] = c, a[7] = t; else t = a[7];
    return t;
  }
  let c;
  if (a[8] !== s || a[9] !== l) c = l ? s : e(n, {
    dimColor: !0,
    children: s
  }), a[8] = s, a[9] = l, a[10] = c; else c = a[10];
  let t;
  if (a[11] !== c) t = {
    label: c,
    value: "confirm"
  }, a[11] = c, a[12] = t; else t = a[12];
  let m = t, f;
  if (a[13] !== i || a[14] !== l) f = l ? i : e(n, {
    dimColor: !0,
    children: i
  }), a[13] = i, a[14] = l, a[15] = f; else f = a[15];
  let k;
  if (a[16] !== f) k = {
    label: f,
    value: "cancel"
  }, a[16] = f, a[17] = k; else k = a[17];
  let d = k, u;
  if (a[18] !== d || a[19] !== x || a[20] !== m) u = x ? [ d, m ] : [ m, d ], a[18] = d, 
  a[19] = x, a[20] = m, a[21] = u; else u = a[21];
  const S = !l;
  let b;
  if (a[22] !== o || a[23] !== r) b = ee => ee === "confirm" ? r() : o(), a[22] = o, 
  a[23] = r, a[24] = b; else b = a[24];
  let q;
  if (a[25] !== N || a[26] !== o || a[27] !== E || a[28] !== u || a[29] !== S || a[30] !== b) q = e(Xe, {
    options: u,
    selectedValue: zi,
    hideIndexes: N,
    isDisabled: S,
    defaultFocusValue: E,
    onChange: b,
    onCancel: o
  }), a[25] = N, a[26] = o, a[27] = E, a[28] = u, a[29] = S, a[30] = b, a[31] = q; else q = a[31];
  return q;
}

export { t1t, sr };
