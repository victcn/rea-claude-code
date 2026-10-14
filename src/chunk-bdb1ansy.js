// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { tDr } from "./chunk-3pqddg8f.js";

import { MI, $1t, fBr, Vae } from "./chunk-fj1a15yf.js";

import { w } from "./chunk-9rj1xaxr.js";

import { yc } from "./chunk-150qmpyg.js";

import { e } from "./chunk-xx3xgkvz.js";

import { Wbe, R, y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function Se(Te) {
  return Te + 1;
}

function K(A) {
  let o = w(28), M, b, L, c, f;
  if (o[0] !== A) ({children: M, ref: L, stickyScroll: c, followGrowth: b, ...f} = A), 
  o[0] = A, o[1] = M, o[2] = b, o[3] = L, o[4] = c, o[5] = f; else M = o[1], b = o[2], 
  L = o[3], c = o[4], f = o[5];
  let r = R(null), [, be] = y(0), U;
  if (o[6] === S) U = new Set, o[6] = U; else U = o[6];
  let P = R(U), j = R(!1), Z;
  if (o[7] === S) Z = () => {
    for (const xe of P.current) xe();
  }, o[7] = Z; else Z = o[7];
  let _ = Z, ee;
  if (o[8] === S) ee = function x(Q) {
    if (tDr(), MI(Q), fBr(Q), _(), j.current) {
      return;
    }
    j.current = !0, queueMicrotask(() => {
      j.current = !1, $1t(Q);
    });
  }, o[8] = ee; else ee = o[8];
  let x = ee, le, re;
  if (o[9] !== c) le = () => ({
    scrollTo(we, Re) {
      let u = r.current;
      if (!u) {
        return;
      }
      if (u.stickyScroll = !1, !Re?.preserveHwm) u.scrollHeightHwm = void 0;
      u.pendingScrollDelta = void 0, u.scrollAnchor = void 0, u.scrollTop = Math.max(0, Math.floor(we)), 
      x(u);
    },
    scrollToElement(ke, p, He) {
      let ve = p === void 0 ? 0 : p;
      let h = r.current;
      if (!h) {
        return;
      }
      h.stickyScroll = !1, h.scrollHeightHwm = void 0, h.pendingScrollDelta = void 0, 
      h.scrollAnchor = {
        el: ke,
        offset: ve,
        block: He?.block ?? "start"
      }, x(h);
    },
    scrollBy(Me) {
      let s = r.current;
      if (!s) {
        return;
      }
      s.stickyScroll = !1, s.scrollHeightHwm = void 0, s.scrollTop = Vae(s), s.scrollAnchor = void 0, 
      s.pendingScrollDelta = (s.pendingScrollDelta ?? 0) + Math.floor(Me), x(s);
    },
    scrollToBottom() {
      let i = r.current;
      if (!i) {
        return;
      }
      if (i.pendingScrollDelta = void 0, c === !1) {
        i.scrollAnchor = void 0, i.scrollTop = Math.max(0, (i.scrollHeight ?? 0) - (i.scrollViewportHeight ?? 0)), 
        x(i);
        return;
      }
      i.stickyScroll = !0, MI(i), _(), be(Se);
    },
    getScrollTop() {
      return r.current?.scrollTop ?? 0;
    },
    getPendingDelta() {
      return r.current?.pendingScrollDelta ?? 0;
    },
    getScrollHeight() {
      return r.current?.scrollHeight ?? 0;
    },
    getFreshScrollHeight() {
      return r.current?.childNodes[0]?.yogaNode?.getComputedHeight() ?? r.current?.scrollHeight ?? 0;
    },
    getViewportHeight() {
      return r.current?.scrollViewportHeight ?? 0;
    },
    getViewportTop() {
      return r.current?.scrollViewportTop ?? 0;
    },
    isSticky() {
      let W = r.current;
      if (!W) {
        return !1;
      }
      return W.stickyScroll ?? Boolean(W.attributes.stickyScroll);
    },
    subscribe(oe) {
      return P.current.add(oe), () => P.current.delete(oe);
    },
    setClampBounds(te, ne) {
      let g = r.current;
      if (!g) {
        return;
      }
      if (g.scrollClampMin === te && g.scrollClampMax === ne) {
        return;
      }
      g.scrollClampMin = te, g.scrollClampMax = ne, MI(g);
    },
    getDomElement() {
      return r.current;
    }
  }), re = [ c ], o[9] = c, o[10] = le, o[11] = re; else le = o[10], re = o[11];
  Wbe(L, le, re);
  const p = f.flexDirection ?? "row", N = f.flexGrow ?? 0, X = f.flexShrink ?? 1;
  let T;
  if (o[12] !== f || o[13] !== p || o[14] !== N || o[15] !== X) T = {
    flexWrap: "nowrap",
    flexDirection: p,
    flexGrow: N,
    flexShrink: X,
    selectionScope: !0,
    ...f,
    overflowX: "scroll",
    overflowY: "scroll"
  }, o[12] = f, o[13] = p, o[14] = N, o[15] = X, o[16] = T; else T = o[16];
  let D;
  if (o[17] !== c) D = c !== void 0 && {
    stickyScroll: c
  }, o[17] = c, o[18] = D; else D = o[18];
  let B;
  if (o[19] !== b) B = b !== void 0 && {
    followGrowth: b
  }, o[19] = b, o[20] = B; else B = o[20];
  let E;
  if (o[21] !== M) E = e(yc, {
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0,
    width: "100%",
    children: M
  }), o[21] = M, o[22] = E; else E = o[22];
  let ce;
  if (o[23] !== D || o[24] !== B || o[25] !== E || o[26] !== T) ce = e("ink-box", {
    ref: r,
    style: T,
    ...D,
    ...B,
    children: E
  }), o[23] = D, o[24] = B, o[25] = E, o[26] = T, o[27] = ce; else ce = o[27];
  return ce;
}

var VC = K;

export { VC };
