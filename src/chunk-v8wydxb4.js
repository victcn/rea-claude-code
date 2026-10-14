// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { pl, is } from "./chunk-1pxjahnn.js";

import { gg } from "./chunk-150qmpyg.js";

import { eo } from "./chunk-3pqddg8f.js";

import { Br } from "./chunk-5wbhf1bk.js";

import { p$, lI, iPo, qS } from "./chunk-q6wab2jw.js";

import { ie } from "./chunk-yxennhe9.js";

import { an, st, s, n, $$, wu, hke, oJ, Id, ti } from "./chunk-3vw306fv.js";

import { hc, Rh } from "./chunk-fj1a15yf.js";

import { II } from "./chunk-gh6ycgc0.js";

import { oy } from "./chunk-18n5kthz.js";

import { PA, uke, pke, IA, rJ, Sc } from "./chunk-yrpmvsj8.js";

import { Lb } from "./chunk-1jbdb8dv.js";

import { nJ, i_t } from "./chunk-qwxnttnh.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { a1t } from "./chunk-gwv09rct.js";

import { fd } from "./chunk-f3sxrxpt.js";

import { nn } from "./chunk-ytac37d4.js";

import { N7e, ct } from "./chunk-qk83zz02.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { Zy, Kt, _m, Ae, P, xo, Zt, R, y, xt, F } from "./chunk-cpyd3eya.js";

import { S, _n } from "./chunk-m8ez8fhk.js";

F();

F();

F();

F();

var Vn = 150, Kn = 400, zn = 60;

function pe({children: o, paddingX: t = 0, onPress: i, repeat: a = !1}) {
  let m = an(), f = Lb(), l = uke(), [v, p] = y(!1), [D, I] = y(!1), [x, k] = y(null), M = R(null);
  P(() => () => M.current?.(), []);
  let T = i !== void 0;
  if (!T && (v || D || x !== null)) p(!1), I(!1), k(null);
  let W = xo(b => i?.({
    row: b
  }));
  P(() => {
    if (x === null) return;
    let b = m.setTimeout(function A() {
      W(x), b = m.setTimeout(A, zn);
    }, Kn);
    return () => b();
  }, [ x, m ]);
  function H(b) {
    if (b.stopImmediatePropagation(), M.current !== null || f(b)) return;
    b.endClickChain(), I(!0), M.current = m.setTimeout(() => {
      M.current = null, I(!1), i?.(b);
    }, Vn);
  }
  function C(b) {
    if (b.type === "down" && b.button === 0) I(!0), k(b.row), i?.(b); else if (b.type === "up") I(!1), 
    k(null);
  }
  let B = l === "inverse", L = B ? void 0 : D ? "text" : v ? PA : void 0, [N = "", ...U] = o;
  return r(s, {
    paddingLeft: t,
    flexShrink: 1,
    alignSelf: "flex-start",
    backgroundColor: L,
    onClick: T && !a ? H : void 0,
    onPointer: T && a ? C : void 0,
    onMouseEnter: T ? () => p(!0) : void 0,
    onMouseLeave: T ? () => p(!1) : void 0,
    hoverFollowsPaint: T,
    noSelect: !0,
    children: [ e(n, {
      color: D && !B ? "inverseText" : void 0,
      dimColor: !D,
      inverse: D && B,
      wrap: "truncate-end",
      children: v && !D && B ? r(Q, {
        children: [ e(n, {
          inverse: !0,
          children: N
        }), U.join("") ]
      }) : o
    }), t > 0 && T && e(s, {
      width: t,
      flexShrink: 1e3
    }) ]
  });
}

var zo = 1e3;

function so() {
  let t = w(2), o = an(), i;
  if (t[0] !== o) i = () => {
    let a = {
      at: Number.NEGATIVE_INFINITY,
      row: -1
    };
    return {
      pressed: m => {
        a = {
          at: o.now(),
          row: m.row
        };
      },
      dropsClick: f => {
        if (f.row !== a.row || o.now() - a.at >= zo) {
          return !1;
        }
        return f.dropAsStray(), !0;
      }
    };
  }, t[0] = o, t[1] = i; else i = t[1];
  let [l] = y(i);
  return l;
}

var i1t = Kt(() => !1);

function Eze(o) {
  let l = w(3), {direction: t, count: i, onPress: a} = o;
  if (i <= 0) {
    return null;
  }
  const f = `${t === "above" ? p$ : lI} ${i} more`;
  let v;
  if (l[0] !== a || l[1] !== f) v = e(s, {
    paddingLeft: 1,
    children: e(pe, {
      paddingX: 1,
      onPress: a,
      children: f
    })
  }), l[0] = a, l[1] = f, l[2] = v; else v = l[2];
  return v;
}

F();

var je = Kt(null), Mq = 1;

function E7e(o) {
  let f = w(8), {reserve: t, children: i} = o, a = R(null), {rows: m} = is(Te()), l;
  if (f[0] !== t || f[1] !== m) l = {
    box: a,
    rows: m,
    reserve: t
  }, f[0] = t, f[1] = m, f[2] = l; else l = f[2];
  let v;
  if (f[3] !== i) v = e(s, {
    ref: a,
    flexDirection: "column",
    children: i
  }), f[3] = i, f[4] = v; else v = f[4];
  let p;
  if (f[5] !== l || f[6] !== v) p = e(je, {
    value: l,
    children: v
  }), f[5] = l, f[6] = v, f[7] = p; else p = f[7];
  return p;
}

function Hq() {
  return Ae(je);
}

F();

F();

function lo() {
  let o = Ae(a1t), {subscribeHoverTracked: t, isHoverTracked: i} = Ae(Rh), a = xt(t, i);
  return o ?? a;
}

F();

var qo = 5;

function Ye(o) {
  let C = w(47), {offset: t, visible: i, total: a, height: m, onScrollTo: f, onScrollBy: l, arrows: v} = o, p = m === void 0 ? i : m, D = v === void 0 ? !1 : v, I = R(null), [x, k] = y(!1), [M, T] = y(!1);
  if (a <= i || p < 1) {
    return null;
  }
  let W = D && p >= qo, H = W ? p - 2 : p, B;
  if (C[0] !== H || C[1] !== t || C[2] !== a || C[3] !== i) B = fo({
    offset: t,
    visible: i,
    total: a,
    height: H
  }), C[0] = H, C[1] = t, C[2] = a, C[3] = i, C[4] = B; else B = C[4];
  let {top: L, size: N} = B, U = H - L - N, b;
  if (C[5] !== H || C[6] !== t || C[7] !== f || C[8] !== N || C[9] !== L || C[10] !== a || C[11] !== i) b = function oe(A) {
    if (A.type === "up") {
      I.current = null, k(!1);
      return;
    }
    let ee = A.type === "down" && A.button === 0;
    let z = ee && A.localRow >= L && A.localRow < L + N;
    if (ee) I.current = {
      trackRow: A.row - A.localRow,
      visible: i,
      total: a,
      height: H,
      grab: z ? A.localRow - L : Math.floor(N / 2),
      asked: t
    }, k(!0);
    let g = I.current;
    if (g === null) {
      return;
    }
    let E = ln({
      top: A.row - g.trackRow - g.grab,
      visible: g.visible,
      total: g.total,
      height: g.height
    });
    let V = E >= g.total - g.visible ? g.total - Math.min(g.visible, i) : E;
    if (V === g.asked) {
      return;
    }
    if (g.asked = V, !z) f?.(V);
  }, C[5] = H, C[6] = t, C[7] = f, C[8] = N, C[9] = L, C[10] = a, C[11] = i, C[12] = b; else b = C[12];
  let oe = b, X = M || x ? "suggestion" : void 0, j;
  if (C[13] !== W || C[14] !== t || C[15] !== l) j = W && e(pe, {
    repeat: !0,
    onPress: l && t > 0 ? () => l(-1) : void 0,
    children: p$
  }), C[13] = W, C[14] = t, C[15] = l, C[16] = j; else j = C[16];
  const G = f || x ? oe : void 0;
  let q;
  if (C[17] !== f) q = f && (() => T(!0)), C[17] = f, C[18] = q; else q = C[18];
  let d;
  if (C[19] !== f) d = f && (() => T(!1)), C[19] = f, C[20] = d; else d = C[20];
  let h;
  if (C[21] !== L) h = L > 0 && e(n, {
    dimColor: !0,
    children: xe(qS.pipe, L)
  }), C[21] = L, C[22] = h; else h = C[22];
  let u;
  if (C[23] !== N) u = xe(iPo, N), C[23] = N, C[24] = u; else u = C[24];
  let te;
  if (C[25] !== u || C[26] !== X) te = e(n, {
    color: X,
    children: u
  }), C[25] = u, C[26] = X, C[27] = te; else te = C[27];
  let J;
  if (C[28] !== U) J = U > 0 && e(n, {
    dimColor: !0,
    children: xe(qS.pipe, U)
  }), C[28] = U, C[29] = J; else J = C[29];
  let Y;
  if (C[30] !== te || C[31] !== J || C[32] !== G || C[33] !== q || C[34] !== d || C[35] !== h) Y = r(wu, {
    flexDirection: "column",
    flexShrink: 0,
    onPointer: G,
    onMouseEnter: q,
    onMouseLeave: d,
    children: [ h, te, J ]
  }), C[30] = te, C[31] = J, C[32] = G, C[33] = q, C[34] = d, C[35] = h, C[36] = Y; else Y = C[36];
  let K;
  if (C[37] !== W || C[38] !== t || C[39] !== l || C[40] !== a || C[41] !== i) K = W && e(pe, {
    repeat: !0,
    onPress: l && t < a - i ? () => l(1) : void 0,
    children: lI
  }), C[37] = W, C[38] = t, C[39] = l, C[40] = a, C[41] = i, C[42] = K; else K = C[42];
  let Z;
  if (C[43] !== Y || C[44] !== K || C[45] !== j) Z = e($$, {
    children: r(s, {
      flexDirection: "column",
      flexShrink: 0,
      children: [ j, Y, K ]
    })
  }), C[43] = Y, C[44] = K, C[45] = j, C[46] = Z; else Z = C[46];
  return Z;
}

function fo({offset: o, visible: t, total: i, height: a}) {
  let m = hc(Math.round(t / i * a), 1, Math.max(1, a - 1)), f = a - m, l = i - t;
  if (o <= 0) return {
    top: 0,
    size: m
  };
  if (o >= l) return {
    top: f,
    size: m
  };
  let v = Math.round(o / l * f);
  if (f < 2) return {
    top: v,
    size: m
  };
  return {
    top: hc(v, 1, f - 1),
    size: m
  };
}

function ln({top: o, visible: t, total: i, height: a}) {
  let {size: m} = fo({
    offset: 0,
    visible: t,
    total: i,
    height: a
  }), f = a - m, l = i - t;
  if (o <= 0) return 0;
  if (o >= f) return l;
  let v = Math.round(o / f * l);
  if (l < 2) return v;
  return hc(v, 1, l - 1);
}

function xe(o, t) {
  return Array.from({
    length: t
  }, () => o).join(`\n`);
}

function Rmn(o) {
  let p = w(12), {bar: t, height: i, children: a} = o, [m, f] = y(!1), l = lo();
  if (m && !l) f(!1);
  let v = l && t.total > t.visible, D, I;
  if (p[0] === S) D = () => f(!0), I = () => f(!1), p[0] = D, p[1] = I; else D = p[0], 
  I = p[1];
  let x;
  if (p[2] !== a) x = e(s, {
    flexDirection: "column",
    flexGrow: 1,
    children: a
  }), p[2] = a, p[3] = x; else x = p[3];
  let k;
  if (p[4] !== t || p[5] !== v || p[6] !== i || p[7] !== m) k = v && (m ? e(Ye, {
    ...t,
    height: i
  }) : e(s, {
    width: 1,
    flexShrink: 0
  })), p[4] = t, p[5] = v, p[6] = i, p[7] = m, p[8] = k; else k = p[8];
  let M;
  if (p[9] !== x || p[10] !== k) M = r(s, {
    gap: 1,
    onMouseEnter: D,
    onMouseLeave: I,
    children: [ x, k ]
  }), p[9] = x, p[10] = k, p[11] = M; else M = p[11];
  return M;
}

F();

F();

function pUr(o, t, i, a = null) {
  let m = hc(a === null ? o - i + 1 : hc(a, o - i + 1, o), 0, Math.max(0, t - i)), f = Math.min(m + i, t);
  return {
    windowStart: m,
    windowEnd: f,
    moreAbove: m,
    moreBelow: t - f
  };
}

var at = new Set;

function dn({lineCount: o, visibleCount: t, cursorLine: i, getCursorLine: a, headings: m = at, boundaries: f, markerLines: l = 0, onScroll: v}) {
  let p = Math.max(0, o - 1), D = hc(i, 0, p), I = () => hc(a(), 0, p), [x, k, M] = Sc(null), T = t + 2 * l, W = 0;
  while (W < o && m.has(W)) W++;
  let H = o - 1;
  while (H >= 0 && m.has(H)) H--;
  function C(d, h) {
    return (d > W ? l : 0) + (h <= H ? l : 0);
  }
  function B(d) {
    return d <= 0 || d >= o || f === void 0 || f.has(d) || m.has(d);
  }
  function L(d) {
    let h = Math.min(d + 1, o);
    while (!B(h)) h++;
    return h;
  }
  function N(d) {
    return B(d) && !(d > W && d <= W + l);
  }
  function U(d, h) {
    let u = d + h;
    while (u > 0 && u < o && !N(u)) u += h;
    return hc(u, 0, o);
  }
  function b(d) {
    for (let h = Math.min(d + T, o); h > d; h--) if (B(h) && h - d + C(d, h) <= T) return h;
    return L(d);
  }
  let A = 0;
  for (let d = o - 1; d >= 0; d--) if (N(d) && b(d) < o) {
    A = U(d, 1);
    break;
  }
  function ee(d) {
    let h = b(d);
    return m.has(h - 1) && h < o;
  }
  function z(d) {
    let h = b(d);
    for (let u = d; u < h; u++) if (!m.has(u)) return !0;
    return !1;
  }
  function g(d, h) {
    let u = d;
    while (!B(u)) u--;
    let te = L(u), J = te > H ? o : te, Y = Math.min(u, A);
    while (!N(Y)) Y--;
    let K = u <= W ? 0 : Y;
    while (K < Y && b(K) < te) K = U(K, 1);
    let Z = Math.min(Y, Math.max(0, J - T));
    while (Z < Y && (!N(Z) || b(Z) < J)) Z++;
    let re = hc(h ?? Z, Math.min(Z, K), K);
    while (!N(re)) re--;
    if (h !== null && h > u) for (let me = U(re, -1); me < re && b(me) >= J && (m.has(re - 1) || ee(re)); me = U(me, -1)) re = me;
    return re;
  }
  let E = g(D, x), V = b(E);
  P(() => {
    if (x !== null && x !== E) k(E);
  }, [ x, E, k ]);
  function oe(d) {
    let h = g(I(), M()), u = hc(d, 0, A);
    while (!N(u)) u--;
    let te = u < h ? -1 : 1;
    while (u !== h && u > 0 && u < A && (m.has(u - 1) && (te < 0 || !m.has(u)) || ee(u) || !z(u))) u = U(u, te);
    let J = z(u) ? u : h;
    k(J);
    let Y = J, K = b(J);
    while (Y < K && g(Y, J) !== J) Y++;
    while (K > Y && g(K - 1, J) !== J) K--;
    v?.(Y, K);
  }
  function X(d) {
    let h = g(I(), M());
    for (let u = 0; u < Math.abs(d); u++) h = U(h, d < 0 ? -1 : 1);
    if (d !== 0) oe(h);
  }
  let j = V - E >= o, G = j ? 0 : Math.max(0, T - C(E, V) - V + E), q = V - E + G;
  return {
    windowStart: E,
    windowEnd: V,
    spareLines: G,
    fits: j,
    getWindow: () => {
      let d = g(I(), M());
      return {
        windowStart: d,
        windowEnd: b(d)
      };
    },
    scrollBy: X,
    scrollTo: oe,
    pin: () => k(g(I(), M())),
    bar: {
      offset: E,
      visible: q,
      total: o,
      onScrollTo: j ? void 0 : d => oe(d + q >= o ? A : d),
      onScrollBy: j ? void 0 : X
    }
  };
}

function mn({count: o, visibleCount: t, headingLines: i, rowHeights: a, moreRowLines: m = !1, rowKeys: f, resetKey: l, initialCursor: v = 0, isDisabled: p = !1, onAccept: D, onRowKeyDown: I, onCursorChange: x, edge: k = "clamp", onUpFromFirstItem: M, onDownFromLastItem: T, declineHomeEnd: W = !1, keybindingContext: H = "Select"}) {
  let C = R(null), B = Math.max(0, o - 1), [L, N, U] = Sc(() => {
    let c = hc(v, 0, B);
    return {
      index: c,
      key: f?.[c],
      resetKey: l
    };
  }), b = oJ(C), {focusDirection: A} = hke(), ee = Dq(p);
  function z(c) {
    if (!Object.is(c.resetKey, l)) return 0;
    let O = hc(c.index, 0, B);
    if (c.key === void 0 || f?.[O] === c.key) return O;
    let se = f?.indexOf(c.key) ?? -1;
    return se < 0 ? O : se;
  }
  let g = z(L);
  function E() {
    return z(U());
  }
  function V(c) {
    N(O => O.index === c && O.key === f?.[c] && Object.is(O.resetKey, l) ? O : {
      index: c,
      key: f?.[c],
      resetKey: l
    });
  }
  let oe = new Set(i), X = oe.size;
  for (let c = 0; c < o; c++) X += a?.[c] ?? 1;
  let j = [], G = [ 0 ], q = new Set;
  for (let c = 0, O = 0; c < X; c++) {
    if (c >= O) {
      if (q.add(c), !oe.has(c)) O = c + (a?.[j.length] ?? 1), j.push(c);
    }
    G.push(j.length);
  }
  let d = m ? 1 : 0;
  function h(c) {
    Z(O => {
      let se = O + c;
      if (k === "wrap" && o > 0) return (se % o + o) % o;
      return hc(se, 0, B);
    });
  }
  function u(c) {
    if (ne.fits) return !1;
    if (t === 1) {
      h(c);
      return;
    }
    Z(O => {
      let se = ne.getWindow(), ce = hc((j[O] ?? 0) + c * (se.windowEnd - se.windowStart), 0, X - 1);
      while (!q.has(ce)) ce--;
      return hc(c > 0 ? Math.max((G[ce + 1] ?? 0) - 1, O + 1) : Math.min(G[ce] ?? 0, O - 1), 0, B);
    });
  }
  function te(c) {
    if (E() === (c < 0 ? 0 : B)) {
      let O = c < 0 ? M : T;
      if (O) {
        O();
        return;
      }
      if (k !== "wrap" && A(c < 0 ? "up" : "down")) return;
    }
    h(c);
  }
  function J(c) {
    if (W && ne.fits) return !1;
    Z(c);
  }
  P(() => {
    if (U() === L) V(g);
  });
  let Y = xo(c => x?.(c)), K = R(null);
  P(() => {
    if (o === 0) {
      K.current = null;
      return;
    }
    if (K.current !== g) K.current = g, Y(g);
  }, [ g, o ]);
  function Z(c) {
    let O = hc(typeof c === "function" ? c(E()) : c, 0, B);
    if (V(O), o === 0 || O === K.current) return;
    K.current = O, x?.(O);
  }
  nn(eo({
    "select:next": () => te(1),
    "select:previous": () => te(-1),
    "select:pageDown": () => u(1),
    "select:pageUp": () => u(-1),
    "select:first": () => J(0),
    "select:last": () => J(B)
  }, c => () => Dq(p) ? !1 : c()), {
    context: H,
    isActive: b && !ee && o > 0
  }), nn({
    "select:accept": () => Dq(p) ? !1 : D?.(E())
  }, {
    context: H,
    isActive: b && !ee && o > 0 && D !== void 0
  });
  let re = fd() !== null;
  function me(c) {
    if (Dq(p) || o === 0) return;
    let O = E();
    if (c.key === "return" && D && !re) {
      D(O), c.preventDefault(), c.stopImmediatePropagation();
      return;
    }
    I?.(c, O);
  }
  let ne = dn({
    lineCount: X,
    visibleCount: t,
    cursorLine: j[g] ?? 0,
    getCursorLine: () => j[E()] ?? 0,
    headings: oe,
    boundaries: q,
    markerLines: d,
    onScroll: (c, O) => {
      let se = E(), ce = G[c] ?? 0, Fe = (G[O] ?? o) - 1;
      Z(ce > Fe ? se : hc(se, ce, Fe));
    }
  });
  function We(c) {
    if (c.deltaY === 0 || Dq(p)) return;
    ne.scrollBy(c.deltaY > 0 ? 1 : -1), c.stopImmediatePropagation();
  }
  function De(c, O = !1) {
    if (!O && Dq(p)) return;
    ne.scrollTo(c < 0 ? 0 : X);
  }
  function He(c) {
    ne.pin(), Z(hc(c, 0, B));
  }
  return {
    cursor: g,
    windowStart: ne.windowStart,
    windowEnd: ne.windowEnd,
    spareLines: ne.spareLines,
    moreAbove: G[ne.windowStart] ?? 0,
    moreBelow: o - (G[ne.windowEnd] ?? o),
    isCursor: c => c === g && o > 0,
    hasFocus: b,
    scrollBar: {
      ...ne.bar,
      onScrollTo: ee ? void 0 : ne.bar.onScrollTo,
      onScrollBy: ee ? void 0 : ne.bar.onScrollBy
    },
    setCursor: He,
    scrollToEdge: De,
    containerRef: C,
    bind: {
      ref: C,
      tabIndex: 0,
      onKeyDown: me,
      onWheel: !ee && !ne.fits ? We : void 0
    }
  };
}

function Dq(o) {
  return typeof o === "function" ? o() : o === !0;
}

function St(H, C) {
  return {
    label: H,
    value: C
  };
}

function kt(J, Y) {
  return J + Y;
}

var $e = 3, fn = 7, Eo = Kt(!1);

function Rx() {
  return Ae(Eo);
}

function Mn(o) {
  let m = w(27), t = st(), {onFocus: i, onSelect: a} = o;
  if (t && a !== void 0) {
    let f, l;
    if (m[0] !== o.children) {
      l = [];
      f = new Map;
      for (const v of Zy.toArray(o.children)) {
        if (!ke(v)) {
          l.push(v);
          continue;
        }
        f.set(l.length, [ ...f.get(l.length) ?? [], v ]);
      }
      m[0] = o.children, m[1] = f, m[2] = l;
    } else f = m[1], l = m[2];
    if (l.length === 0) {
      let p;
      if (m[3] !== o.emptyMessage) p = o.emptyMessage ? e(n, {
        children: o.emptyMessage
      }) : null, m[3] = o.emptyMessage, m[4] = p; else p = m[4];
      return p;
    }
    let p;
    if (m[5] !== o.isDisabled) p = D => {
      if (Dq(o.isDisabled) || D.ctrl || D.meta) {
        return;
      }
      if (D.key === "return" || D.key === " ") D.stopPropagation();
    }, m[5] = o.isDisabled, m[6] = p; else p = m[6];
    let I;
    if (m[7] !== l) I = l.map(St), m[7] = l, m[8] = I; else I = m[8];
    let x;
    if (m[9] !== o.isDisabled) x = Dq(o.isDisabled), m[9] = o.isDisabled, m[10] = x; else x = m[10];
    let k;
    if (m[11] !== i || m[12] !== a) k = M => {
      i?.(M), a(M);
    }, m[11] = i, m[12] = a, m[13] = k; else k = m[13];
    let T;
    if (m[14] !== f || m[15] !== i || m[16] !== I || m[17] !== x || m[18] !== k) T = e(rJ, {
      options: I,
      headings: f,
      drawLabels: !0,
      isDisabled: x,
      onFocus: i,
      onChange: k
    }), m[14] = f, m[15] = i, m[16] = I, m[17] = x, m[18] = k, m[19] = T; else T = m[19];
    let W;
    if (m[20] !== p || m[21] !== T) W = e(s, {
      flexDirection: "column",
      onKeyDown: p,
      children: T
    }), m[20] = p, m[21] = T, m[22] = W; else W = m[22];
    return W;
  }
  if (o.visibleCount === void 0) {
    let p;
    if (m[23] !== o) p = e(Co, {
      ...o
    }), m[23] = o, m[24] = p; else p = m[24];
    return p;
  }
  let p;
  if (m[25] !== o) p = e(Qe, {
    props: o,
    visibleCount: o.visibleCount
  }), m[25] = o, m[26] = p; else p = m[26];
  return p;
}

function Co(o) {
  let p = w(21), t = Hq(), i = Ae(nJ), a = Te(), {rows: m} = is(a), f = pl(), l = i !== null && !f, v = R(null), D;
  if (p[0] !== l || p[1] !== t) D = () => {
    let I = v.current;
    if (I === null) {
      return null;
    }
    let x = t?.box.current ?? I;
    while (t === null && !l && x.parentNode !== void 0) x = x.parentNode;
    return ti(x).height - ti(I).height;
  }, p[0] = l, p[1] = t, p[2] = D; else D = p[2];
  let k = Id(D), M;
  if (p[3] !== i || p[4] !== t?.box.current) M = () => {
    let T = t?.box.current ?? v.current;
    let W = i === null ? null : i();
    return T === null || W === null ? null : W + ti(T).height;
  }, p[3] = i, p[4] = t?.box.current, p[5] = M; else M = p[5];
  let H = Id(M), C = Ae(i_t), B;
  if (p[6] !== o.children || p[7] !== o.emptyMessage) {
    let L = Zy.toArray(o.children);
    B = L.every(ke) ? Number(Boolean(o.emptyMessage)) : L.map(Po).reduce(kt, 0);
    p[6] = o.children, p[7] = o.emptyMessage, p[8] = B;
  } else B = p[8];
  let N = B, U = o.maxVisibleCount === void 0 ? N : Math.min(N, o.maxVisibleCount), b, A;
  if (p[9] !== C || p[10] !== l || p[11] !== U) b = () => l ? C?.({
    rows: () => v.current === null ? U : ti(v.current).height,
    owed: U
  }) : void 0, A = [ l, C, U ], p[9] = C, p[10] = l, p[11] = U, p[12] = b, p[13] = A; else b = p[12], 
  A = p[13];
  Zt(b, A);
  let ee;
  if (p[14] === S) ee = () => v.current === null ? 0 : ti(v.current).width, p[14] = ee; else ee = p[14];
  let z = Id(ee), [g, E] = y(null), V = f ? t?.rows ?? m : a.rows, oe = g?.rows === V && g.width === z;
  if (k !== null && (g === null || !oe || k > g.chrome)) E({
    rows: V,
    width: z,
    chrome: k
  });
  let X = oe ? Math.max(g.chrome, k ?? g.chrome) : k, j = f ? V : l ? H : a.rows - (t?.reserve ?? Mq), G = X === null || j === null ? $e : f || l ? j - X : Math.min(Math.max(fn, Math.floor(a.rows / 2)), j - X), q = o.maxVisibleCount === void 0 ? G : Math.min(G, o.maxVisibleCount), d = Math.max(1, q), h = d === 1 ? "none" : d < $e && o.overflowHint !== "none" ? "glyph" : o.overflowHint === "count" ? void 0 : o.overflowHint, u;
  if (p[15] !== h || p[16] !== o) u = {
    ...o,
    overflowHint: h
  }, p[15] = h, p[16] = o, p[17] = u; else u = p[17];
  let te;
  if (p[18] !== d || p[19] !== u) te = e(s, {
    ref: v,
    flexDirection: "column",
    children: e(Qe, {
      props: u,
      visibleCount: d
    })
  }), p[18] = d, p[19] = u, p[20] = te; else te = p[20];
  return te;
}

function Qe({props: {children: o, defaultFocusIndex: t, resetKey: i, onSelect: a, onFocus: m, onRowKeyDown: f, isDisabled: l, onDisabledRowClick: v, wrap: p = !1, onUpFromFirstItem: D, onDownFromLastItem: I, declineHomeEnd: x = !1, keybindingContext: k, overflowHint: M, scrollBar: T = !0, emptyMessage: W, hoverStyle: H, rowClick: C = "select", styled: B = !1}, visibleCount: L}) {
  let N = Zy.toArray(o), U = [], b = 0;
  for (let _ of N) U.push(Po(_)), b += U.at(-1) ?? 1;
  let A = M === void 0 && b > L, ee = A ? Math.max(1, L - 2) : L, z = A && ee === L - 2, g = [], E = [], V = [], oe = [], X = [], j = 0;
  for (let [_, ae] of N.entries()) {
    if (oe.push(E.length), X.push(j), ke(ae)) {
      g.push(j++);
      continue;
    }
    E.push(Math.min(U[_] ?? 1, ee)), V.push(_m(ae) ? ae.key ?? void 0 : void 0), j += E.at(-1) ?? 1;
  }
  let G = E.length, q = Dq(l), d = R(null), {containerRef: h, ...u} = mn({
    count: G,
    visibleCount: ee,
    moreRowLines: z,
    headingLines: g,
    rowHeights: E,
    rowKeys: V,
    resetKey: i,
    initialCursor: t,
    isDisabled: l,
    edge: p ? "wrap" : "clamp",
    onUpFromFirstItem: D,
    onDownFromLastItem: I,
    declineHomeEnd: x,
    keybindingContext: k,
    onAccept: a,
    onRowKeyDown: f,
    onCursorChange: _ => {
      d.current = {
        cursor: _,
        count: G
      }, m?.(_);
    }
  }), te = xo(_ => m?.(_));
  P(() => {
    let _ = d.current;
    if (G === 0 || _?.cursor === u.cursor && _.count === G) return;
    d.current = {
      cursor: u.cursor,
      count: G
    }, te(u.cursor);
  }, [ u.cursor, G ]), oy(h, !q);
  let J = Lb(), Y = so(), K = _ => J(_) || Y.dropsClick(_);
  if (G === 0) return e(s, {
    ref: h,
    flexDirection: "column",
    tabIndex: 0,
    children: W && e(n, {
      dimColor: !0,
      children: W
    })
  });
  let Z = M === void 0 || M === "glyph" && L === 1 ? "count" : M, {windowStart: re, windowEnd: me, moreAbove: ne, moreBelow: We} = u, De = N.flatMap((_, ae) => {
    let ge = X[ae] ?? 0;
    return ge >= re && ge < me ? [ {
      child: _,
      index: ae,
      line: ge
    } ] : [];
  }), He = _ => q && v === void 0 ? void 0 : ae => {
    if (u.scrollToEdge(_, q), Y.pressed(ae), q) v?.(d.current?.cursor ?? u.cursor);
  }, c = Z === "count" && e(Eze, {
    direction: "above",
    count: ne,
    onPress: He(-1)
  }), O = Z === "count" && e(Eze, {
    direction: "below",
    count: We,
    onPress: He(1)
  }), se = De.map(({child: _, index: ae, line: ge}, jo) => {
    let Uo = _m(_) ? _.key ?? ge : ge, Vo = jo === 0 && ne > 0, Ko = jo === De.length - 1 && We > 0;
    if (ke(_)) return e(IA, {
      isFocused: !1,
      showScrollUp: Z === "glyph" && Vo,
      showScrollDown: Z === "glyph" && Ko,
      styled: !1,
      children: _
    }, Uo);
    let he = oe[ae] ?? 0, _o = u.isCursor(he);
    return e(Eo.Provider, {
      value: _o && !q,
      children: e(s, {
        flexDirection: "column",
        height: E[he],
        overflow: "hidden",
        onClick: q && v !== void 0 ? we => {
          if (we.droppedAsStray || K(we)) return;
          u.setCursor(he), v(he);
        } : C === "move" && !q && a !== void 0 ? we => {
          if (we.droppedAsStray || K(we) || Dq(l)) return;
          u.setCursor(he);
        } : void 0,
        children: e(IA, {
          isFocused: _o,
          idle: q,
          showScrollUp: Z === "glyph" && Vo,
          showScrollDown: Z === "glyph" && Ko,
          styled: B,
          hoverStyle: H,
          declareCursor: !q && En(_)?.declareCursor !== !1,
          onClick: q || a === void 0 || C === "move" ? void 0 : we => {
            if (K(we) || Dq(l)) return;
            u.setCursor(he), a(he);
          },
          children: _
        })
      })
    }, Uo);
  }), ce = u.spareLines > 0 && e(s, {
    flexShrink: 0,
    height: u.spareLines
  });
  if (!T) return e(i1t, {
    value: Y.dropsClick,
    children: r(pke, {
      windowStart: re,
      ...u.bind,
      children: [ c, se, ce, O ]
    })
  });
  let Fe = r(pke, {
    windowStart: re,
    children: [ se, ce ]
  });
  return e(i1t, {
    value: Y.dropsClick,
    children: r(s, {
      flexDirection: "column",
      ...u.bind,
      children: [ z ? null : c, r(Rmn, {
        bar: z ? {
          ...u.scrollBar,
          arrows: !0
        } : u.scrollBar,
        height: z ? L : void 0,
        children: [ z ? c : null, Fe, z ? O : null ]
      }), z ? null : O ]
    })
  });
}

function Bo(o) {
  let i = w(2), {children: t} = o, a;
  if (i[0] !== t) a = e(Q, {
    children: t
  }), i[0] = t, i[1] = a; else a = i[1];
  return a;
}

function Lo(o) {
  let i = w(2), {children: t} = o, a;
  if (i[0] !== t) a = e(Q, {
    children: t
  }), i[0] = t, i[1] = a; else a = i[1];
  return a;
}

function ke(o) {
  return _m(o) && o.type === Lo;
}

function Po(o) {
  let t = En(o)?.lines ?? 1;
  return Number.isFinite(t) ? Math.max(1, Math.trunc(t)) : 1;
}

function En(o) {
  return _m(o) && o.type === Bo ? o.props : void 0;
}

var Ll = Object.assign(Mn, {
  Item: Bo,
  Heading: Lo
});

function Ft() {
  return new Set;
}

function jt(X) {
  if (!Ee(X)) {
    return 0;
  }
  let {icon: j} = X.props;
  return _m(j) && j.type === ct ? N7e() : ie(II(j));
}

function Ut(G) {
  return be(G.props.meta).length > 0;
}

function Vt(q) {
  return ie(Nte(q.props.label));
}

function _t(d) {
  return ie(be(d.props.meta).join(" \xb7 "));
}

var Cn = 2, to = 3, Pn = 50, Bn = 6;

function jn(o) {
  let t = w(30), i, a;
  if (t[0] !== o) ({children: i, ...a} = o), t[0] = o, t[1] = i, t[2] = a; else i = t[1], 
  a = t[2];
  let m = is(Ae(gg) ?? {
    rows: 0,
    columns: 0
  }), f = R(null), [l] = y(Ft), v;
  if (t[3] !== l || t[4] !== m) v = () => {
    let [p] = l;
    if (p) {
      return ti(p).width;
    }
    return (f.current && ti(f.current).width || m.columns) - Cn;
  }, t[3] = l, t[4] = m, t[5] = v; else v = t[5];
  let D = Id(v), I, x, k, M, T, W;
  if (t[6] !== i || t[7] !== a || t[8] !== l || t[9] !== D) {
    let H = Zy.toArray(i);
    let C = H.filter(Ee);
    let B = Math.max(0, ...H.map(jt));
    let L = C.filter(Ut);
    let N = Math.min(Pn, Math.max(0, ...L.map(Vt)));
    let U = Math.max(0, ...L.map(_t));
    let b = D - (B > 0 ? B + 1 : 0) - to;
    let A = b - Math.min(N, Math.max(Math.ceil(b / 2), b - U));
    let z = N + U > b && b < 2 * Bn ? 0 : Math.min(A, Math.max(0, ...L.map(ee => ie(ro(be(ee.props.meta), A)))));
    let g = Math.min(N, b - z);
    x = s;
    T = f;
    W = "column";
    I = Ll;
    k = a;
    let E;
    if (t[16] !== z || t[17] !== B || t[18] !== g || t[19] !== l) E = V => Ee(V) ? e(Ll.Item, {
      lines: Nte(V.props.description) ? 2 : 1,
      children: e(Fo, {
        item: V.props,
        iconWidth: B,
        nameWidth: g,
        factsWidth: z,
        rowLines: l
      })
    }, V.key) : V, t[16] = z, t[17] = B, t[18] = g, t[19] = l, t[20] = E; else E = t[20];
    M = H.map(E);
    t[6] = i, t[7] = a, t[8] = l, t[9] = D, t[10] = I, t[11] = x, t[12] = k, t[13] = M, 
    t[14] = T, t[15] = W;
  } else I = t[10], x = t[11], k = t[12], M = t[13], T = t[14], W = t[15];
  let E;
  if (t[21] !== I || t[22] !== k || t[23] !== M) E = e(I, {
    ...k,
    children: M
  }), t[21] = I, t[22] = k, t[23] = M, t[24] = E; else E = t[24];
  let oe;
  if (t[25] !== x || t[26] !== T || t[27] !== W || t[28] !== E) oe = e(x, {
    ref: T,
    flexDirection: W,
    children: E
  }), t[25] = x, t[26] = T, t[27] = W, t[28] = E, t[29] = oe; else oe = t[29];
  return oe;
}

function Fo(o) {
  let M = w(42), {item: t, iconWidth: i, nameWidth: a, factsWidth: m, rowLines: f} = o, {icon: l, meta: v, ...p} = t, D = Rx(), I = st(), x = Nte(p.label), k = Nte(p.description), T, W;
  if (M[0] !== k || M[1] !== m || M[2] !== l || M[3] !== I || M[4] !== x || M[5] !== v) {
    W = _n;
    U: {
      let H = be(v);
      if (I) {
        const C = H.length > 0 && `, ${H.join(" \xb7 ")}`;
        const B = k && `. ${k}`;
        let L;
        if (M[8] !== x || M[9] !== C || M[10] !== B) L = r(n, {
          children: [ x, C, B ]
        }), M[8] = x, M[9] = C, M[10] = B, M[11] = L; else L = M[11];
        let N;
        if (M[12] !== l || M[13] !== L) N = r(s, {
          children: [ l, L ]
        }), M[12] = l, M[13] = L, M[14] = N; else N = M[14];
        W = N;
        break U;
      }
      T = m > 0 && H.length > 0 ? ro(H, m) : void 0;
    }
    M[0] = k, M[1] = m, M[2] = l, M[3] = I, M[4] = x, M[5] = v, M[6] = T, M[7] = W;
  } else T = M[6], W = M[7];
  if (W !== _n) return W;
  let b = T, C;
  if (M[15] !== f) C = A => {
    if (!A) {
      return;
    }
    return f.add(A), () => {
      f.delete(A);
    };
  }, M[15] = f, M[16] = C; else C = M[16];
  let B;
  if (M[17] !== l || M[18] !== i) B = i > 0 && e(s, {
    flexShrink: 0,
    width: i,
    marginRight: 1,
    children: l
  }), M[17] = l, M[18] = i, M[19] = B; else B = M[19];
  const L = b === void 0 ? 1 : 0, N = b === void 0 ? void 0 : a, ee = b === void 0 ? 0 : to, z = D ? "suggestion" : void 0;
  let g;
  if (M[20] !== x || M[21] !== z) g = e(n, {
    color: z,
    wrap: "truncate-end",
    children: x
  }), M[20] = x, M[21] = z, M[22] = g; else g = M[22];
  let E;
  if (M[23] !== g || M[24] !== L || M[25] !== N || M[26] !== ee) E = e(s, {
    flexShrink: L,
    width: N,
    marginRight: ee,
    children: g
  }), M[23] = g, M[24] = L, M[25] = N, M[26] = ee, M[27] = E; else E = M[27];
  let V;
  if (M[28] !== m || M[29] !== b) V = b !== void 0 && e(s, {
    flexShrink: 1,
    maxWidth: m,
    children: e(n, {
      dimColor: !0,
      wrap: "truncate-end",
      children: b
    })
  }), M[28] = m, M[29] = b, M[30] = V; else V = M[30];
  let oe;
  if (M[31] !== E || M[32] !== V || M[33] !== C || M[34] !== B) oe = r(s, {
    ref: C,
    children: [ B, E, V ]
  }), M[31] = E, M[32] = V, M[33] = C, M[34] = B, M[35] = oe; else oe = M[35];
  let X;
  if (M[36] !== k || M[37] !== i) X = k && e(s, {
    paddingLeft: i > 0 ? i + 1 : 0,
    children: e(n, {
      color: "inactive",
      wrap: "truncate-end",
      children: k
    })
  }), M[36] = k, M[37] = i, M[38] = X; else X = M[38];
  let j;
  if (M[39] !== oe || M[40] !== X) j = r(s, {
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1,
    children: [ oe, X ]
  }), M[39] = oe, M[40] = X, M[41] = j; else j = M[41];
  return j;
}

function Un(o) {
  return null;
}

function Ee(o) {
  return _m(o) && o.type === Un;
}

function be(o) {
  return (o ?? []).map(Nte).filter(t => t !== "");
}

function ro(o, t) {
  return o.map((i, a) => o.slice(0, a + 1).join(" \xb7 ")).findLast((i, a) => a === 0 || ie(i) <= t) ?? "";
}

function Nte(o) {
  if (typeof o === "string") return Br(o);
  return typeof o === "number" || typeof o === "boolean" ? String(o) : "";
}

var tn = Object.assign(jn, {
  Item: Un
});

export { i1t, Eze, Mq, E7e, Hq, Rmn, pUr, Dq, Rx, Ll, Nte, tn };
