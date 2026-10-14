// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { is } from "./chunk-1pxjahnn.js";

import { Nt } from "./chunk-5wbhf1bk.js";

import { see } from "./chunk-07cck4g7.js";

import { ie } from "./chunk-yxennhe9.js";

import { st, s, n, Uo, Wte, Id, ti } from "./chunk-3vw306fv.js";

import { Nu, Rh, U$ } from "./chunk-fj1a15yf.js";

import { ac } from "./chunk-qvbrx5kg.js";

import { ki } from "./chunk-18n5kthz.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { Fy } from "./chunk-vdnjpwkk.js";

import { Lb } from "./chunk-1jbdb8dv.js";

import { PA, Pze, IA, Sc } from "./chunk-yrpmvsj8.js";

import { DE } from "./chunk-vyvnan99.js";

import { i1t, Dq, Rx, Ll, Nte } from "./chunk-v8wydxb4.js";

import { qyt } from "./chunk-8sjwymxz.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { Zy, Kt, _m, Ae, R, y, F } from "./chunk-cpyd3eya.js";

F();

var Ge = 32, ne = 2, Y = 2, ge = 2, ke = "wrap-trim", we = !0, ve = Kt(void 0), ye = Kt(!1);

function Qe({children: o, ...t}) {
  let d = is(Te()), a = R(null), [l] = y(() => new Set), b = Id(() => {
    let [i] = l;
    return i && ti(i).width || a.current && ti(a.current).width || d.columns;
  }), h = Lb(), [P] = y(() => new WeakMap), p = Zy.toArray(o), c = p.filter(Ue), E = Math.min(Math.max(0, ...c.map(i => ie(Nte(i.props.label)))), Math.max(Ge, b - Y - ne - Math.max(qyt, ...c.map(i => je(i.props.children))))), f = b - Y - E - ne < qyt, M = c.filter(i => !C(i.props.children, G)), m = Dq(t.isDisabled), I = f ? b - Y - ge : b - Y - E - ne, [g, L, S] = Sc(void 0), [O, H] = y(void 0), V = R(null), {focusManager: q} = Ae(Rh), W = Fy({
    isActive: !0,
    columns: I,
    backspaceExitsOnEmpty: !1,
    onExit: () => T(!0, !0),
    onCancel: () => T(!1),
    onExitUp: () => T(!0, !0),
    onExitDown: () => T(!0, !0)
  });
  function T(i, N = !1) {
    let u = S();
    if (u === void 0) return !0;
    let x = c.find(D => D.key === u.key)?.props.children, k = W.queryRef.current, v = i && k !== u.from && C(x, z) ? x.props.validate?.(k) ?? null : null;
    if (v !== null && N) return H({
      draft: k,
      reason: v
    }), !1;
    if (L(void 0), H(void 0), V.current && q?.activeElement === V.current) q.blur();
    if (!i || v !== null || !C(x, z) || x.props.disabled) return !0;
    if (k !== u.from) Ce(P, x.props, k), x.props.onChange(k);
    return !0;
  }
  function B(i) {
    let N = i?.props.children;
    if (!C(N, z) || N.props.disabled || typeof i?.key !== "string") return wn(N, P);
    let u = {
      key: i.key,
      from: En(N.props, P)
    };
    return {
      accept: () => {
        T(!0), W.setQuery(u.from), L(u);
      }
    };
  }
  let _ = p.map((i, N) => {
    if (!Ue(i)) return _m(i) && i.type === Ll.Heading ? i : e(Ll.Heading, {
      children: i
    }, _m(i) ? i.key : N);
    let {children: u} = i.props, x = Nte(i.props.label), k = g?.key === i.key && O?.draft === W.query ? O.reason : void 0, v = k ?? Nte(i.props.description), D = v ? Nt(Nu(v, Math.max(1, b - Y), ke), `\n`) + 1 : 0, U = !(!m || t.onDisabledRowClick !== void 0) || g?.key === i.key ? void 0 : B(i).accept, Pe = C(u, te) || C(u, oe) || C(u, re) ? je(u) : 0, J = e(Xe, {
      label: x,
      description: v,
      refused: k !== void 0,
      onClick: U && ($e => {
        if (h($e) || Dq(t.isDisabled) && t.onDisabledRowClick === void 0) return;
        U();
      }),
      labelColumn: E,
      stacked: f,
      targetWidth: Math.max(0, Math.min(Pe, I)),
      rowLines: C(u, G) ? void 0 : l,
      children: e(ve, {
        value: g?.key === i.key && !m && C(u, z) && !u.props.disabled ? {
          editor: W,
          room: I,
          input: V,
          end: T
        } : void 0,
        children: u
      })
    });
    return C(u, G) ? e(Ll.Heading, {
      children: J
    }, i.key) : e(Ll.Item, {
      declareCursor: g?.key !== i.key,
      lines: (f ? 2 : 1) + D,
      children: J
    }, i.key);
  });
  if (M.length === 0) return r(s, {
    ref: a,
    flexDirection: "column",
    children: [ _.length === 0 && t.emptyMessage && e(n, {
      dimColor: !0,
      children: t.emptyMessage
    }), _.map((i, N) => e(IA, {
      isFocused: !1,
      styled: !1,
      children: i
    }, _m(i) ? i.key : N)) ]
  });
  let j = e(Ll, {
    ...t,
    rowClick: "move",
    onFocus: i => {
      if (M[i]?.key !== S()?.key) T(!0);
      t.onFocus?.(i);
    },
    onSelect: i => {
      if (S() !== void 0) {
        T(!0, !0);
        return;
      }
      B(M[i]).accept?.();
    },
    onRowKeyDown: (i, N) => {
      if (S() !== void 0) {
        W.handleKeyDown(i);
        return;
      }
      if (i.ctrl || i.meta) return;
      let u = B(M[N]), x = i.key === " " ? u.accept : i.key === "left" ? u.previous : i.key === "right" ? u.next : void 0;
      if (x === void 0) return;
      i.preventDefault(), x();
    },
    children: _
  });
  return e(s, {
    ref: a,
    flexDirection: "column",
    children: e(ye, {
      value: m,
      children: j
    })
  });
}

function Xe(o) {
  let g = w(50), {label: t, description: d, refused: a, onClick: l, labelColumn: b, stacked: h, targetWidth: P, rowLines: p, children: c} = o, E = Rx(), f = st(), [M, m] = Pze(l !== void 0), I = Ae(i1t);
  if (f) {
    let L;
    if (g[0] !== t) L = r(n, {
      children: [ t, "," ]
    }), g[0] = t, g[1] = L; else L = g[1];
    let S;
    if (g[2] !== c || g[3] !== L) S = r(s, {
      children: [ L, c ]
    }), g[2] = c, g[3] = L, g[4] = S; else S = g[4];
    let O;
    if (g[5] !== d) O = d && e(n, {
      children: d
    }), g[5] = d, g[6] = O; else O = g[6];
    let H;
    if (g[7] !== S || g[8] !== O) H = r(s, {
      flexDirection: "column",
      children: [ S, O ]
    }), g[7] = S, g[8] = O, g[9] = H; else H = g[9];
    return H;
  }
  let L;
  if (g[10] !== p) L = V => {
    let q = V?.parentNode;
    if (!p || !q) {
      return;
    }
    return p.add(q), () => {
      p.delete(q);
    };
  }, g[10] = p, g[11] = L; else L = g[11];
  const S = h ? "column" : "row", O = h ? void 0 : b, H = h ? 0 : ne, W = E ? "suggestion" : void 0;
  let T;
  if (g[12] !== t || g[13] !== W) T = e(n, {
    color: W,
    wrap: "truncate-end",
    children: t
  }), g[12] = t, g[13] = W, g[14] = T; else T = g[14];
  let B;
  if (g[15] !== O || g[16] !== H || g[17] !== T) B = e(s, {
    width: O,
    marginRight: H,
    flexShrink: 0,
    children: T
  }), g[15] = O, g[16] = H, g[17] = T, g[18] = B; else B = g[18];
  const _ = h ? ge : 0, j = M ? PA : void 0;
  let i;
  if (g[19] !== I || g[20] !== l) i = l && (N => {
    if (!I(N)) l(N);
  }), g[19] = I, g[20] = l, g[21] = i; else i = g[21];
  let u;
  if (g[22] !== l || g[23] !== m) u = l && (() => m(!0)), g[22] = l, g[23] = m, g[24] = u; else u = g[24];
  let x;
  if (g[25] !== l || g[26] !== m) x = l && (() => m(!1)), g[25] = l, g[26] = m, g[27] = x; else x = g[27];
  let k;
  if (g[28] !== c || g[29] !== i || g[30] !== u || g[31] !== x || g[32] !== j || g[33] !== P) k = e(s, {
    minWidth: P,
    backgroundColor: j,
    onClick: i,
    onMouseEnter: u,
    onMouseLeave: x,
    children: c
  }), g[28] = c, g[29] = i, g[30] = u, g[31] = x, g[32] = j, g[33] = P, g[34] = k; else k = g[34];
  let v;
  if (g[35] !== k || g[36] !== _) v = e(s, {
    paddingLeft: _,
    children: k
  }), g[35] = k, g[36] = _, g[37] = v; else v = g[37];
  let D;
  if (g[38] !== v || g[39] !== S || g[40] !== B) D = r(s, {
    flexDirection: S,
    children: [ B, v ]
  }), g[38] = v, g[39] = S, g[40] = B, g[41] = D; else D = g[41];
  let K;
  if (g[42] !== d || g[43] !== a || g[44] !== p) K = d && e(n, {
    dimColor: !a,
    color: a ? "error" : void 0,
    wrap: p === void 0 ? "truncate-end" : ke,
    children: d
  }), g[42] = d, g[43] = a, g[44] = p, g[45] = K; else K = g[45];
  let U;
  if (g[46] !== L || g[47] !== D || g[48] !== K) U = r(s, {
    ref: L,
    flexDirection: "column",
    children: [ D, K ]
  }), g[46] = L, g[47] = D, g[48] = K, g[49] = U; else U = g[49];
  return U;
}

function A(o) {
  let E = w(15), {spoken: t, disabled: d, before: a, after: l, children: b} = o, h = d === void 0 ? !1 : d, P = Rx();
  if (st()) {
    const c = h && ", unavailable";
    let f;
    if (E[0] !== t || E[1] !== c) f = r(n, {
      children: [ t, c ]
    }), E[0] = t, E[1] = c, E[2] = f; else f = E[2];
    return f;
  }
  let c;
  if (E[3] !== a) c = a && e(n, {
    dimColor: !0,
    children: a
  }), E[3] = a, E[4] = c; else c = E[4];
  const f = P && !h ? "suggestion" : void 0;
  let M;
  if (E[5] !== b || E[6] !== f) M = e(n, {
    color: f,
    children: b
  }), E[5] = b, E[6] = f, E[7] = M; else M = E[7];
  let m;
  if (E[8] !== l) m = l && e(n, {
    dimColor: !0,
    children: l
  }), E[8] = l, E[9] = m; else m = E[9];
  let I;
  if (E[10] !== h || E[11] !== c || E[12] !== M || E[13] !== m) I = r(n, {
    dimColor: h,
    wrap: "truncate-end",
    children: [ c, M, m ]
  }), E[10] = h, E[11] = c, E[12] = M, E[13] = m, E[14] = I; else I = E[14];
  return I;
}

function Re(o) {
  let d = w(2), {children: t} = o, a;
  if (d[0] !== t) a = e(Q, {
    children: t
  }), d[0] = t, d[1] = a; else a = d[1];
  return a;
}

function te(o) {
  let b = w(4), {value: t, disabled: d} = o;
  const a = String(t), l = String(t);
  let h;
  if (b[0] !== d || b[1] !== a || b[2] !== l) h = e(A, {
    spoken: a,
    disabled: d,
    children: l
  }), b[0] = d, b[1] = a, b[2] = l, b[3] = h; else h = b[3];
  return h;
}

function oe(o) {
  let h = w(8), {value: t, options: d, disabled: a} = o, l = Ae(ye), b = Rx(), P;
  if (h[0] !== d || h[1] !== t) P = d.find(p => p.value === t)?.label ?? t, h[0] = d, 
  h[1] = t, h[2] = P; else P = h[2];
  let c = P, E = !a && !l && (b || !we);
  const f = E ? "\u2039 " : void 0, M = E ? " \u203a" : void 0;
  let m;
  if (h[3] !== a || h[4] !== c || h[5] !== f || h[6] !== M) m = e(A, {
    spoken: c,
    disabled: a,
    before: f,
    after: M,
    children: c
  }), h[3] = a, h[4] = c, h[5] = f, h[6] = M, h[7] = m; else m = h[7];
  return m;
}

function ce(o) {
  let b = w(5), {children: t, disabled: d} = o;
  const a = t ? `${t}, opens` : "opens", l = t ? " \u203a" : "\u203a";
  let h;
  if (b[0] !== t || b[1] !== d || b[2] !== a || b[3] !== l) h = e(A, {
    spoken: a,
    disabled: d,
    after: l,
    children: t
  }), b[0] = t, b[1] = d, b[2] = a, b[3] = l, b[4] = h; else h = b[4];
  return h;
}

function re(o) {
  let l = w(4), {children: t, disabled: d} = o;
  const a = t ? `${t}, button` : "button";
  let b;
  if (l[0] !== t || l[1] !== d || l[2] !== a) b = e(A, {
    spoken: a,
    disabled: d,
    children: t
  }), l[0] = t, l[1] = d, l[2] = a, l[3] = b; else b = l[3];
  return b;
}

function G(o) {
  let l = w(6), {children: t, disabled: d} = o;
  const a = t || "empty";
  let b;
  if (l[0] !== t) b = t || e(n, {
    dimColor: !0,
    children: "\u2014"
  }), l[0] = t, l[1] = b; else b = l[1];
  let h;
  if (l[2] !== d || l[3] !== a || l[4] !== b) h = e(A, {
    spoken: a,
    disabled: d,
    children: b
  }), l[2] = d, l[3] = a, l[4] = b, l[5] = h; else h = l[5];
  return h;
}

function z(o) {
  let p = w(75), {value: t, placeholder: d, disabled: a} = o, l = Ae(ve), b = st(), h = ac();
  if (l === void 0) {
    const P = `${t || "empty"}, edit text`;
    let c;
    if (p[0] !== d || p[1] !== t) c = t || e(n, {
      dimColor: !0,
      children: d
    }), p[0] = d, p[1] = t, p[2] = c; else c = p[2];
    let E;
    if (p[3] !== a || p[4] !== P || p[5] !== c) E = e(A, {
      spoken: P,
      disabled: a,
      children: c
    }), p[3] = a, p[4] = P, p[5] = c, p[6] = E; else E = p[6];
    return E;
  }
  let {editor: f, input: M, end: m} = l, I, g, L, S, O, P, H, V, c, E, q, W, T, B, _, j;
  if (p[7] !== l.room || p[8] !== f || p[9] !== m || p[10] !== M || p[11] !== b || p[12] !== h) {
    let i = ki.fromText(f.query, l.room, f.cursorOffset);
    let N = h && !b && !U$() ? " " : "";
    let u;
    if (p[29] !== m) u = () => m(!0, !0) ? !1 : void 0, p[29] = m, p[30] = u; else u = p[30];
    let x = u;
    O = DE;
    H = "Select";
    let k;
    if (p[31] !== m) k = {
      action: "select:cancel",
      run: () => {
        m(!1);
      }
    }, p[31] = m, p[32] = k; else k = p[32];
    let v;
    if (p[33] !== f) v = {
      action: "select:first",
      run: () => f.setCursorOffset(0)
    }, p[33] = f, p[34] = v; else v = p[34];
    let D;
    if (p[35] !== f) D = {
      action: "select:last",
      run: () => f.setCursorOffset(f.queryRef.current.length)
    }, p[35] = f, p[36] = D; else D = p[36];
    let K, U;
    if (p[37] !== x) K = {
      action: "select:previous",
      run: x
    }, U = {
      action: "select:next",
      run: x
    }, p[37] = x, p[38] = K, p[39] = U; else K = p[38], U = p[39];
    if (p[40] !== k || p[41] !== v || p[42] !== D || p[43] !== K || p[44] !== U) V = [ k, v, D, K, U ], 
    p[40] = k, p[41] = v, p[42] = D, p[43] = K, p[44] = U, p[45] = V; else V = p[45];
    S = s;
    if (p[46] !== m) j = Pe => m(Pe.relatedTarget !== null), p[46] = m, p[47] = j; else j = p[47];
    L = Wte;
    q = M;
    W = !0;
    T = {
      line: 0,
      column: i.getPosition().column,
      visible: !0
    };
    if (p[48] !== f) B = J => {
      if (f.handleKeyDown(J), J.defaultPrevented) J.stopImmediatePropagation();
    }, p[48] = f, p[49] = B; else B = p[49];
    _ = f.handlePaste;
    g = n;
    c = "truncate-end";
    E = !0;
    I = Uo;
    P = i.render(N, "", see, void 0, 1, void 0, void 0, b);
    p[7] = l.room, p[8] = f, p[9] = m, p[10] = M, p[11] = b, p[12] = h, p[13] = I, p[14] = g, 
    p[15] = L, p[16] = S, p[17] = O, p[18] = P, p[19] = H, p[20] = V, p[21] = c, p[22] = E, 
    p[23] = q, p[24] = W, p[25] = T, p[26] = B, p[27] = _, p[28] = j;
  } else I = p[13], g = p[14], L = p[15], S = p[16], O = p[17], P = p[18], H = p[19], 
  V = p[20], c = p[21], E = p[22], q = p[23], W = p[24], T = p[25], B = p[26], _ = p[27], 
  j = p[28];
  let u;
  if (p[50] !== I || p[51] !== P) u = e(I, {
    children: P
  }), p[50] = I, p[51] = P, p[52] = u; else u = p[52];
  let k;
  if (p[53] !== g || p[54] !== u || p[55] !== c || p[56] !== E) k = e(g, {
    wrap: c,
    "aria-preserve-whitespace": E,
    children: u
  }), p[53] = g, p[54] = u, p[55] = c, p[56] = E, p[57] = k; else k = p[57];
  let v;
  if (p[58] !== L || p[59] !== k || p[60] !== q || p[61] !== W || p[62] !== T || p[63] !== B || p[64] !== _) v = e(L, {
    ref: q,
    autoFocus: W,
    caret: T,
    onKeyDown: B,
    onPaste: _,
    children: k
  }), p[58] = L, p[59] = k, p[60] = q, p[61] = W, p[62] = T, p[63] = B, p[64] = _, 
  p[65] = v; else v = p[65];
  let D;
  if (p[66] !== S || p[67] !== v || p[68] !== j) D = e(S, {
    onBlur: j,
    children: v
  }), p[66] = S, p[67] = v, p[68] = j, p[69] = D; else D = p[69];
  let K;
  if (p[70] !== O || p[71] !== H || p[72] !== V || p[73] !== D) K = e(O, {
    scope: H,
    bindings: V,
    children: D
  }), p[70] = O, p[71] = H, p[72] = V, p[73] = D, p[74] = K; else K = p[74];
  return K;
}

function je(o) {
  if (C(o, te)) return ie("false");
  if (C(o, oe)) return Math.max(0, ...o.props.options.map(t => ee(t.label))) + (o.props.disabled ? 0 : ie("\u2039  \u203a"));
  if (C(o, ce)) {
    let {children: t} = o.props;
    return t ? ee(t) + ie(" \u203a") : ie("\u203a");
  }
  if (C(o, re)) return ee(o.props.children ?? "");
  if (C(o, G)) return ee(o.props.children || "\u2014");
  if (C(o, z)) return ee(o.props.value || (o.props.placeholder ?? "")) + 1;
  return 0;
}

function oWo(o) {
  let t = Nte(o);
  return 2 + (t ? Nt(t, " ") + 1 : 0);
}

function ee(o) {
  return Math.max(0, ...o.split(`\n`).map(t => ie(t)));
}

function wn(o, t) {
  if (C(o, te) && !o.props.disabled) {
    let d = xn.bind(void 0, o.props, t);
    return {
      accept: d,
      previous: d,
      next: d
    };
  }
  if (C(o, oe) && !o.props.disabled) {
    let {props: d} = o, a = l => () => {
      let b = d.options.length, h = d.options.findIndex(c => c.value === (t.get(d) ?? d.value)), P = Math.max(h, l === 1 ? -1 : 0), p = d.options[(P + l + b) % b];
      if (p === void 0) return;
      Ce(t, d, p.value), d.onChange(p.value);
    };
    return {
      accept: a(1),
      next: a(1),
      previous: a(-1)
    };
  }
  if (C(o, ce) && !o.props.disabled) return {
    accept: o.props.onOpen,
    next: o.props.onOpen
  };
  if (C(o, re) && !o.props.disabled) return {
    accept: o.props.onPress
  };
  return {};
}

function xn(o, t) {
  let d = !(t.get(o) ?? o.value);
  Ce(t, o, d), o.onChange(d);
}

function Ce(o, t, d) {
  o.set(t, d), queueMicrotask(() => o.delete(t));
}

function En(o, t) {
  let d = t.get(o);
  return typeof d === "string" ? d : o.value;
}

function Ue(o) {
  return _m(o) && o.type === Re;
}

function C(o, t) {
  return _m(o) && o.type === t;
}

var Ah = Object.assign(Qe, {
  Field: Re,
  Toggle: te,
  Select: oe,
  Text: z,
  Link: ce,
  Button: re,
  Value: G
});

export { oWo, Ah };
