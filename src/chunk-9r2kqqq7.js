// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { s, n } from "./chunk-3vw306fv.js";

import { No } from "./chunk-gdpv30ry.js";

import { Ua, By, hs } from "./chunk-yrpmvsj8.js";

import { aF, nh } from "./chunk-84yp45y8.js";

import { sr } from "./chunk-stbhy0k1.js";

import { be } from "./chunk-gqmex880.js";

import { xFr, ZX, PFr, IFr } from "./chunk-t1awgz87.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { R, y, F } from "./chunk-cpyd3eya.js";

import { S, _n } from "./chunk-m8ez8fhk.js";

F();

function ce() {}

function MQe(ae) {
  let i = w(55), {offer: o, entry: d, credentials: J, onDone: f} = ae, [K, fe] = y(!1), x = R(!1), g = Ua(No), {refusedWithin: b, noteRefused: C} = hs(), Q = By(), E, k, m, j, H, V, U, A, B, N, P, W, I, T, D;
  if (i[0] !== K || i[1] !== J || i[2] !== d || i[3] !== g || i[4] !== C || i[5] !== o || i[6] !== f || i[7] !== b || i[8] !== Q) {
    V = _n;
    Oe: {
      let c = aF();
      let u = ZX(o);
      let l;
      if (i[24] !== o) l = xFr(o), i[24] = o, i[25] = l; else l = i[25];
      let Y = l;
      let h;
      if (i[26] !== g || i[27] !== C || i[28] !== b) h = function p() {
        if (g() || b(No)) {
          return C(), !0;
        }
        return !1;
      }, i[26] = g, i[27] = C, i[28] = b, i[29] = h; else h = i[29];
      let p = h;
      let M;
      if (i[30] !== d || i[31] !== o || i[32] !== f || i[33] !== p) M = function m() {
        if (x.current || p()) {
          return;
        }
        x.current = !0, f(PFr(d, o));
      }, i[30] = d, i[31] = o, i[32] = f, i[33] = p, i[34] = M; else M = i[34];
      m = M;
      D = function D() {
        if (x.current || p()) {
          return;
        }
        x.current = !0, fe(!0), IFr(d, J, o).then(f).catch(() => {
          f({
            outcome: "unavailable",
            text: nh(o.origin === "wall" ? c.unconfirmedLine : c.unconfirmedAnytimeLine, u)
          });
        });
      };
      if (K) {
        let L;
        if (i[35] === S) L = e(n, {
          dimColor: !0,
          children: "Resetting your limits\u2026 this usually takes a few seconds"
        }), i[35] = L; else L = i[35];
        V = e(be, {
          title: nh(c.confirmTitle, u),
          onCancel: ce,
          exitOnCtrlCD: !0,
          color: "suggestion",
          hideInputGuide: !0,
          children: L
        });
        break Oe;
      }
      k = be;
      W = nh(c.confirmTitle, u);
      I = m;
      T = "suggestion";
      let L;
      if (i[36] !== Y) L = Y === void 0 ? null : e(n, {
        children: Y
      }), i[36] = Y, i[37] = L; else L = i[37];
      H = r(s, {
        flexDirection: "column",
        children: [ L, e(n, {
          children: nh(c.confirmBody, u)
        }), e(n, {
          dimColor: !0,
          children: nh(c.confirmDetail, u)
        }) ]
      });
      E = sr;
      j = p;
      U = Q;
      A = No;
      B = !0;
      N = nh(c.confirmYes, u);
      P = nh(c.confirmNo, u);
    }
    i[0] = K, i[1] = J, i[2] = d, i[3] = g, i[4] = C, i[5] = o, i[6] = f, i[7] = b, 
    i[8] = Q, i[9] = E, i[10] = k, i[11] = m, i[12] = j, i[13] = H, i[14] = V, i[15] = U, 
    i[16] = A, i[17] = B, i[18] = N, i[19] = P, i[20] = W, i[21] = I, i[22] = T, i[23] = D;
  } else E = i[9], k = i[10], m = i[11], j = i[12], H = i[13], V = i[14], U = i[15], 
  A = i[16], B = i[17], N = i[18], P = i[19], W = i[20], I = i[21], T = i[22], D = i[23];
  if (V !== _n) return V;
  let l;
  if (i[38] !== E || i[39] !== m || i[40] !== j || i[41] !== U || i[42] !== A || i[43] !== B || i[44] !== N || i[45] !== P || i[46] !== D) l = e(E, {
    refuseInput: j,
    openedAt: U,
    windowMs: A,
    hideIndexes: B,
    confirmLabel: N,
    cancelLabel: P,
    onConfirm: D,
    onCancel: m
  }), i[38] = E, i[39] = m, i[40] = j, i[41] = U, i[42] = A, i[43] = B, i[44] = N, 
  i[45] = P, i[46] = D, i[47] = l; else l = i[47];
  let h;
  if (i[48] !== k || i[49] !== H || i[50] !== l || i[51] !== W || i[52] !== I || i[53] !== T) h = r(k, {
    title: W,
    onCancel: I,
    color: T,
    children: [ H, l ]
  }), i[48] = k, i[49] = H, i[50] = l, i[51] = W, i[52] = I, i[53] = T, i[54] = h; else h = i[54];
  return h;
}

export { MQe };
