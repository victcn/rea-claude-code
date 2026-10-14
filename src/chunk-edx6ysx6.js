// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _S } from "./chunk-7w995nyx.js";

import { w } from "./chunk-9rj1xaxr.js";

import { s, n } from "./chunk-3vw306fv.js";

import { KMe, OA, qMe, sy, Dm, Nb } from "./chunk-xw6qmghy.js";

import { e } from "./chunk-xx3xgkvz.js";

import { S, _n } from "./chunk-m8ez8fhk.js";

var s_t = "\u25cf", M = 2e3, P = {
  r: 171,
  g: 43,
  b: 63
}, T = {
  r: 0,
  g: 0,
  b: 0
};

function Wae(ae) {
  let a = w(35), {frame: le, messageColor: l, stalledIntensity: X, thinkingIntensity: Y, reducedMotion: Z, time: U} = ae, f = X === void 0 ? 0 : X, i = Y === void 0 ? 0 : Y, he = Z === void 0 ? !1 : Z, de = U === void 0 ? 0 : U, m = _S();
  if (he) {
    let C = 1 - qMe(de, M);
    let u = i > 0 ? "warning" : l;
    let R = m[u];
    let g;
    if (a[0] !== R || a[1] !== C || a[2] !== i) {
      g = _n;
      Re: {
        let G = R ? Nb(R) : null;
        if (G) {
          let ce = sy(G, T, .5);
          let me = sy(ce, G, OA(C));
          const r = e(n, {
            color: Dm(me),
            bold: i >= .5,
            children: s_t
          });
          let t;
          if (a[4] !== r) t = e(s, {
            "aria-hidden": !0,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: r
          }), a[4] = r, a[5] = t; else t = a[5];
          g = t;
          break Re;
        }
      }
      a[0] = R, a[1] = C, a[2] = i, a[3] = g;
    } else g = a[3];
    if (g !== _n) return g;
    const r = C < .5;
    const t = i >= .5;
    let h;
    if (a[6] !== u || a[7] !== r || a[8] !== t) h = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: u,
        dimColor: r,
        bold: t,
        children: s_t
      })
    }), a[6] = u, a[7] = r, a[8] = t, a[9] = h; else h = a[9];
    return h;
  }
  let g;
  if (a[10] === S) g = KMe(), a[10] = g; else g = a[10];
  let q = g, o = q[le % q.length];
  if (f > 0) {
    let B = m[l];
    let r;
    if (a[11] !== B || a[12] !== o || a[13] !== f) {
      r = _n;
      Be: {
        let z = B ? Nb(B) : null;
        if (z) {
          let ge = sy(z, P, OA(f));
          const t = e(n, {
            color: Dm(ge),
            children: o
          });
          let h;
          if (a[15] !== t) h = e(s, {
            "aria-hidden": !0,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: t
          }), a[15] = t, a[16] = h; else h = a[16];
          r = h;
          break Be;
        }
      }
      a[11] = B, a[12] = o, a[13] = f, a[14] = r;
    } else r = a[14];
    if (r !== _n) return r;
    let W = f > .5 ? "error" : l;
    let t;
    if (a[17] !== W || a[18] !== o) t = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        color: W,
        children: o
      })
    }), a[17] = W, a[18] = o, a[19] = t; else t = a[19];
    return t;
  }
  if (i > 0) {
    let I = m[l];
    let p, r;
    if (a[20] !== I || a[21] !== o || a[22] !== m.warning || a[23] !== i) {
      r = _n;
      Ie: {
        let E = I ? Nb(I) : null;
        let _ = Nb(m.warning);
        p = i >= .5;
        if (E && _) {
          let be = sy(E, _, OA(i));
          const t = e(n, {
            bold: p,
            color: Dm(be),
            children: o
          });
          let h;
          if (a[26] !== t) h = e(s, {
            "aria-hidden": !0,
            flexWrap: "wrap",
            height: 1,
            width: 2,
            children: t
          }), a[26] = t, a[27] = h; else h = a[27];
          r = h;
          break Ie;
        }
      }
      a[20] = I, a[21] = o, a[22] = m.warning, a[23] = i, a[24] = p, a[25] = r;
    } else p = a[24], r = a[25];
    if (r !== _n) return r;
    let K = i > .5 ? "warning" : l;
    let t;
    if (a[28] !== p || a[29] !== K || a[30] !== o) t = e(s, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(n, {
        bold: p,
        color: K,
        children: o
      })
    }), a[28] = p, a[29] = K, a[30] = o, a[31] = t; else t = a[31];
    return t;
  }
  let r;
  if (a[32] !== l || a[33] !== o) r = e(s, {
    "aria-hidden": !0,
    flexWrap: "wrap",
    height: 1,
    width: 2,
    children: e(n, {
      color: l,
      children: o
    })
  }), a[32] = l, a[33] = o, a[34] = r; else r = a[34];
  return r;
}

export { s_t, Wae };
