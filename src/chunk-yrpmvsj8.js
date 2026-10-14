// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { $s, MX, c6 } from "./chunk-5wbhf1bk.js";

import { Qe } from "./chunk-xywp7esx.js";

import { w } from "./chunk-9rj1xaxr.js";

import { ge } from "./chunk-07cck4g7.js";

import { ie, ut } from "./chunk-yxennhe9.js";

import { nft } from "./chunk-mw643xee.js";

import { st, s, n, zt, Uo, Wv, hke, Ha, qr } from "./chunk-3vw306fv.js";

import { Uq } from "./chunk-fj1a15yf.js";

import { Yw } from "./chunk-52h8ta4x.js";

import { kM, Nl } from "./chunk-gdpv30ry.js";

import { Fo } from "./chunk-jb3h1y0s.js";

import { fa } from "./chunk-a3sz08kp.js";

import { oy } from "./chunk-18n5kthz.js";

import { II } from "./chunk-gh6ycgc0.js";

import { is } from "./chunk-1pxjahnn.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { G } from "./chunk-j706jx8h.js";

import { jy } from "./chunk-1084bkfw.js";

import { ct } from "./chunk-qk83zz02.js";

import { rt, nn } from "./chunk-ytac37d4.js";

import { Se } from "./chunk-sebqm9p5.js";

import { Er } from "./chunk-t54wevgw.js";

import { td } from "./chunk-84yp45y8.js";

import { mF } from "./chunk-bkx9v5fh.js";

import { te } from "./chunk-48xcyvwy.js";

import { Lb, S_t } from "./chunk-1jbdb8dv.js";

import { pt } from "./chunk-qb0pgsyj.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { Jle } from "./chunk-a6phe82s.js";

import { Zy, dc, Kt, _m, ae, Ae, P, xo, Z, R, y, F } from "./chunk-cpyd3eya.js";

import { N } from "./chunk-hmqkrrtz.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function Ua(o = kM) {
  let t = Ha(), i = R(Date.now());
  return ae(() => Nl(t, i.current, o), [ t, o ]);
}

function By() {
  return R(Date.now()).current;
}

function Kd(o, t = kM) {
  let i = qr(t, o);
  return {
    remountKey: i ? "settled" : "held",
    settled: i
  };
}

function v1t() {
  let [o, t] = y(0), i = ae(() => t(a => a + 1), []);
  return {
    epoch: o,
    noteAttempt: i
  };
}

function hs() {
  let o = Ha(), t = R(null), {epoch: i, noteAttempt: a} = v1t(), l = ae((c = kM) => t.current !== null && Nl(o, t.current, c), [ o ]), f = ae(() => {
    t.current = Date.now(), a();
  }, [ a ]);
  return {
    refusedWithin: l,
    noteRefused: f,
    epoch: i
  };
}

F();

function Ra(I) {
  return _m(I) ? I.key : "";
}

var PA = "userMessageBackground";

function uke(o = "tint") {
  return ge.level === 0 ? "inverse" : o;
}

var Xn = Kt("");

function pke(o) {
  let t = w(14), i, a;
  if (t[0] !== o) ({windowStart: a, ...i} = o), t[0] = o, t[1] = i, t[2] = a; else i = t[1], 
  a = t[2];
  let l = a === void 0 ? 0 : a, f, c, u;
  if (t[3] !== i.children || t[4] !== l) {
    let b = Zy.toArray(i.children).map(Ra);
    f = Xn.Provider;
    c = l;
    u = b.join();
    t[3] = i.children, t[4] = l, t[5] = f, t[6] = c, t[7] = u;
  } else f = t[5], c = t[6], u = t[7];
  const d = `${c} ${u}`;
  let m;
  if (t[8] !== i) m = e(s, {
    flexDirection: "column",
    ...i
  }), t[8] = i, t[9] = m; else m = t[9];
  let D;
  if (t[10] !== f || t[11] !== d || t[12] !== m) D = e(f, {
    value: d,
    children: m
  }), t[10] = f, t[11] = d, t[12] = m, t[13] = D; else D = t[13];
  return D;
}

function Pze(o) {
  let f = w(5), t = Ae(Xn), [i, a] = y(null), l = o && i === t;
  if (i !== null && !l) a(null);
  let c;
  if (f[0] !== t) c = u => a(u ? t : null), f[0] = t, f[1] = c; else c = f[1];
  let b;
  if (f[2] !== l || f[3] !== c) b = [ l, c ], f[2] = l, f[3] = c, f[4] = b; else b = f[4];
  return b;
}

function IA(o) {
  let K = w(47), {isFocused: t, isSelected: i, children: a, description: l, showScrollDown: f, showScrollUp: c, styled: u, disabled: b, idle: d, declareCursor: m, onClick: D, hoverStyle: I, onHoverChange: O} = o, L = i === void 0 ? !1 : i, j = u === void 0 ? !0 : u, h = b === void 0 ? !1 : b, v = d === void 0 ? !1 : d, x = I === void 0 ? "tint" : I, A = !h && D !== void 0, W = !h && (D !== void 0 || O !== void 0), [M, C] = Pze(W), E = M && A, B = uke(x), g;
  if (K[0] !== O || K[1] !== C) g = ue => {
    C(ue), O?.(ue);
  }, K[0] = O, K[1] = C, K[2] = g; else g = K[2];
  let he = g, _;
  if (K[3] !== h || K[4] !== v || K[5] !== t || K[6] !== L || K[7] !== j) _ = function q() {
    if (h) {
      return "inactive";
    }
    if (!j) {
      return;
    }
    if (L) {
      return "success";
    }
    if (t && !v) {
      return "suggestion";
    }
  }, K[3] = h, K[4] = v, K[5] = t, K[6] = L, K[7] = j, K[8] = _; else _ = K[8];
  let q = _, Ie = q();
  const pe = t && !h && m !== !1;
  let X;
  if (K[9] !== pe) X = {
    line: 0,
    column: 0,
    active: pe
  }, K[9] = pe, K[10] = X; else X = K[10];
  let T = Wv(X);
  const be = E && B === "tint" ? PA : void 0, U = A ? D : void 0;
  let fe;
  if (K[11] !== W || K[12] !== he) fe = W ? () => he(!0) : void 0, K[11] = W, K[12] = he, 
  K[13] = fe; else fe = K[13];
  let Y;
  if (K[14] !== W || K[15] !== he) Y = W ? () => he(!1) : void 0, K[14] = W, K[15] = he, 
  K[16] = Y; else Y = K[16];
  const oe = E && B === "pointer", Ce = E && B === "inverse";
  let De;
  if (K[17] !== h || K[18] !== v || K[19] !== t || K[20] !== f || K[21] !== c || K[22] !== oe || K[23] !== Ce) De = e(s, {
    flexShrink: 0,
    children: e(ei, {
      disabled: h,
      isFocused: t,
      idle: v,
      showScrollUp: c,
      showScrollDown: f,
      hovered: oe,
      inverse: Ce
    })
  }), K[17] = h, K[18] = v, K[19] = t, K[20] = f, K[21] = c, K[22] = oe, K[23] = Ce, 
  K[24] = De; else De = K[24];
  let ne;
  if (K[25] !== a || K[26] !== h || K[27] !== j || K[28] !== Ie) ne = j ? e(n, {
    color: Ie,
    dimColor: h,
    wrap: "truncate-end",
    children: a
  }) : a, K[25] = a, K[26] = h, K[27] = j, K[28] = Ie, K[29] = ne; else ne = K[29];
  let k;
  if (K[30] !== h || K[31] !== L) k = L && !h && e(s, {
    flexShrink: 0,
    children: e(n, {
      "aria-label": "(selected)",
      color: "success",
      children: te.tick
    })
  }), K[30] = h, K[31] = L, K[32] = k; else k = K[32];
  let ye;
  if (K[33] !== De || K[34] !== ne || K[35] !== k) ye = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [ De, ne, k ]
  }), K[33] = De, K[34] = ne, K[35] = k, K[36] = ye; else ye = K[36];
  let ee;
  if (K[37] !== l) ee = l && e(s, {
    paddingLeft: 2,
    children: e(n, {
      color: "inactive",
      wrap: "truncate-end",
      children: l
    })
  }), K[37] = l, K[38] = ee; else ee = K[38];
  let Ue;
  if (K[39] !== T || K[40] !== be || K[41] !== U || K[42] !== fe || K[43] !== Y || K[44] !== ye || K[45] !== ee) Ue = r(s, {
    ref: T,
    flexDirection: "column",
    backgroundColor: be,
    onClick: U,
    onMouseEnter: fe,
    onMouseLeave: Y,
    children: [ ye, ee ]
  }), K[39] = T, K[40] = be, K[41] = U, K[42] = fe, K[43] = Y, K[44] = ye, K[45] = ee, 
  K[46] = Ue; else Ue = K[46];
  return Ue;
}

function ei(o) {
  let b = w(12), {disabled: t, isFocused: i, idle: a, showScrollUp: l, showScrollDown: f, hovered: c, inverse: u} = o;
  if (t) {
    let d;
    if (b[0] === S) d = e(n, {
      "aria-hidden": !0,
      children: " "
    }), b[0] = d; else d = b[0];
    return d;
  }
  if (i) {
    const d = a ? void 0 : "suggestion";
    let m;
    if (b[1] !== a || b[2] !== u || b[3] !== d) m = e(n, {
      "aria-hidden": !0,
      color: d,
      dimColor: a,
      inverse: u,
      children: te.pointer
    }), b[1] = a, b[2] = u, b[3] = d, b[4] = m; else m = b[4];
    return m;
  }
  if (f) {
    let d;
    if (b[5] !== u) d = e(n, {
      "aria-label": "(more below)",
      dimColor: !0,
      inverse: u,
      children: te.arrowDown
    }), b[5] = u, b[6] = d; else d = b[6];
    return d;
  }
  if (l) {
    let d;
    if (b[7] !== u) d = e(n, {
      "aria-label": "(more above)",
      dimColor: !0,
      inverse: u,
      children: te.arrowUp
    }), b[7] = u, b[8] = d; else d = b[8];
    return d;
  }
  if (c) {
    let d;
    if (b[9] === S) d = e(n, {
      "aria-hidden": !0,
      dimColor: !0,
      children: te.pointer
    }), b[9] = d; else d = b[9];
    return d;
  }
  let d;
  if (b[10] !== u) d = e(n, {
    "aria-hidden": !0,
    inverse: u,
    children: " "
  }), b[10] = u, b[11] = d; else d = b[11];
  return d;
}

F();

function Lu(Ft) {
  return String(Ft.value);
}

function Uu() {
  return null;
}

function $u() {
  return "";
}

function Ku() {
  return null;
}

function ju() {
  return "";
}

function Hu() {
  return "";
}

function zu() {
  return null;
}

function _u() {
  return "";
}

function Gu() {
  return "";
}

function qu() {
  return null;
}

function Yu() {
  return "";
}

function Ju() {
  return null;
}

function Xu() {
  return null;
}

function Qu() {
  return "";
}

function Zu(Ye) {
  return Ye.type !== "input";
}

function ed() {
  return "";
}

function nd() {
  return null;
}

function od(Hl) {
  return String(Hl.value);
}

function id() {
  return null;
}

function sd() {
  return null;
}

function rd() {
  return "";
}

function ld() {
  return null;
}

function ad() {
  return "";
}

function ud() {
  return "";
}

function dd() {
  return null;
}

function cd() {
  return null;
}

function pd() {
  return null;
}

function fd() {
  return "";
}

function md() {
  return "";
}

function hd() {
  return "";
}

function bd() {
  return "";
}

function vd() {
  return null;
}

function gd() {
  return null;
}

function xd() {
  return null;
}

function Id(Qi) {
  return Qi.type !== "input";
}

function yd() {
  return "";
}

function Sd(zl, _l) {
  return zl - _l;
}

function wd(Zi) {
  return String(Zi + 1);
}

function Od() {
  return null;
}

function Cd() {
  return "";
}

function Td() {
  return null;
}

function Dd() {
  return null;
}

function Fd() {
  return "";
}

function Vd() {
  return "";
}

function kd(De) {
  return De.slice(0, -1);
}

function je(o) {
  let l = w(3), [t, i] = y(o), a = R(o), f;
  if (l[0] === S) f = c => {
    a.current = c(a.current), i(a.current);
  }, l[0] = f; else f = l[0];
  let u = f, b;
  if (l[1] !== t) b = [ t, a, u ], l[1] = t, l[2] = b; else b = l[2];
  return b;
}

function Jt() {
  return je("");
}

function Io(o) {
  if (o.length <= 1) return o[0] ?? "";
  if (o.length === 2) return `${o[0]} or ${o[1]}`;
  return `${o.slice(0, -1).join(", ")}, or ${o.at(-1)}`;
}

var ti = 300;

function Ba(o) {
  return ` \u2026 +${o} more characters`;
}

function Vs(o) {
  if (o.length <= ti) return o;
  let t = $s(o, ti);
  if (t === o) return o;
  let i = [ ...o ].length - ti;
  return t + Ba(i);
}

function xi(o, t) {
  let f = w(18), i = t === void 0 ? kM : t, a = Ha(), l = Ua(i), c;
  if (f[0] !== o || f[1] !== a || f[2] !== l || f[3] !== i) c = o === void 0 ? l : () => Nl(a, o, i), 
  f[0] = o, f[1] = a, f[2] = l, f[3] = i, f[4] = c; else c = f[4];
  let u = c, {refusedWithin: b, noteRefused: d} = hs(), m;
  if (f[5] !== u || f[6] !== d || f[7] !== b || f[8] !== i) m = () => {
    if (u() || b(i)) {
      return d(), !0;
    }
    return !1;
  }, f[5] = u, f[6] = d, f[7] = b, f[8] = i, f[9] = m; else m = f[9];
  let D = m, I;
  if (f[10] !== u || f[11] !== d || f[12] !== b || f[13] !== i) I = () => {
    if (!u() && !b(i)) {
      return !1;
    }
    return d(), !0;
  }, f[10] = u, f[11] = d, f[12] = b, f[13] = i, f[14] = I; else I = f[14];
  let O = I, L;
  if (f[15] !== D || f[16] !== O) L = {
    refuse: D,
    refuseCharacter: O
  }, f[15] = D, f[16] = O, f[17] = L; else L = f[17];
  return L;
}

function rJ(o) {
  let M = w(73), {options: t, onChange: i, onFocus: a, onCancel: l, isDisabled: f, disableSelection: c, defaultValue: u, refuseInput: b, headings: d, drawLabels: m, hidePromptWhileDisabled: D} = o, I = f === void 0 ? !1 : f, O = c === void 0 ? !1 : c, L = m === void 0 ? !1 : m, j = D === void 0 ? !1 : D, [h, v, x] = Jt(), [A, W] = y(null), C;
  if (M[0] === S) C = nft(), M[0] = C; else C = M[0];
  let E = C, [B, K, g] = je(null), ue;
  if (M[1] !== t) ue = t.map(Lu).join("\0"), M[1] = t, M[2] = ue; else ue = M[2];
  let he = ue, [_, q] = y(he);
  if (_ !== he) q(he), g(Uu), x($u);
  let [Ie, pe, X] = je(null);
  if (_ !== he && Ie !== null) X(Ku), x(ju);
  let T = Ie !== null && t[Ie - 1]?.type === "input" ? t[Ie - 1] : null, be = R(null);
  oy(be, !I), fa("select", !!l && !I);
  let U;
  if (M[3] !== O || M[4] !== T || M[5] !== i || M[6] !== a || M[7] !== t || M[8] !== x || M[9] !== g || M[10] !== X) U = fe => {
    if (O) {
      return;
    }
    if (T) {
      if (fe === "" && !T.screenReaderEmptySubmit) {
        W("Enter some text, or Escape for the list.");
        return;
      }
      if (i?.(T.value) === !1) {
        return;
      }
      x(Hu), X(zu);
      return;
    }
    let Y = Number.parseInt(fe, 10);
    if (!Number.isFinite(Y) || Y < 1 || Y > t.length) {
      W(t.length === 0 ? `Invalid selection "${fe}". Nothing to select.` : `Invalid selection "${fe}". Enter a number between 1 and ${t.length}.`), 
      x(_u);
      return;
    }
    let oe = t[Y - 1];
    if (oe.disabled) {
      W(`Option ${Y} is disabled.`), x(Gu);
      return;
    }
    if (oe.type === "input") {
      X(() => Y), g(qu);
      let Ce = oe.initialValue ?? "";
      x(() => Ce), oe.onChange(Ce), a?.(oe.value);
      return;
    }
    if (i?.(oe.value) === !1) {
      return;
    }
    x(Yu), g(Ju);
  }, M[3] = O, M[4] = T, M[5] = i, M[6] = a, M[7] = t, M[8] = x, M[9] = g, M[10] = X, 
  M[11] = U; else U = M[11];
  let De = U, ne;
  if (M[12] !== v || M[13] !== O || M[14] !== K || M[15] !== T || M[16] !== pe || M[17] !== I || M[18] !== l || M[19] !== a || M[20] !== t || M[21] !== b || M[22] !== x || M[23] !== g || M[24] !== X || M[25] !== De) ne = k => {
    if (I) {
      return;
    }
    if (k.key === "escape" && k.name === "escape") {
      if (k.preventDefault(), T) {
        X(Xu), x(Qu);
        let ye = t.find(Zu) ?? t[0];
        if (ye) a?.(ye.value);
        return;
      }
      l?.();
      return;
    }
    if (O) {
      return;
    }
    if (k.key === "return" && k.name === "return") {
      if (k.preventDefault(), b?.()) {
        return;
      }
      if (T || v.current.length > 0) {
        De(v.current);
        return;
      }
      if (E && K.current !== null) De(String(K.current + 1));
      return;
    }
    if (k.key === "backspace" || k.key === "delete") {
      k.preventDefault();
      let ee = v.current.slice(0, -1);
      if (T && T.onChange(ee) === !1) {
        return;
      }
      x(() => ee);
      return;
    }
    if (E && !T && pe.current === null && (k.name === "up" || k.name === "down")) {
      if (k.preventDefault(), b?.()) {
        return;
      }
      W(null), x(ed);
      let Ue = t.length;
      if (Ue === 0) {
        return;
      }
      let we = K.current;
      let ft = we === null ? k.name === "down" ? 0 : Ue - 1 : (we + (k.name === "down" ? 1 : -1) + Ue) % Ue;
      g(() => ft);
      let Pe = t[ft];
      if (Pe) a?.(Pe.value);
      return;
    }
    if (T) {
      if (k.key.length === 1 && !k.ctrl && !k.meta) {
        k.preventDefault();
        let Wt = v.current + k.key;
        if (T.onChange(Wt) === !1) {
          return;
        }
        x(() => Wt);
      }
      return;
    }
    let Dt = MX(k.key);
    if (/^[0-9]$/.test(Dt)) {
      if (k.preventDefault(), b?.()) {
        return;
      }
      W(null), x(Bt => Bt + Dt), g(nd);
    }
  }, M[12] = v, M[13] = O, M[14] = K, M[15] = T, M[16] = pe, M[17] = I, M[18] = l, 
  M[19] = a, M[20] = t, M[21] = b, M[22] = x, M[23] = g, M[24] = X, M[25] = De, M[26] = ne; else ne = M[26];
  let Fe = ne, yt;
  if (M[27] !== h || M[28] !== T || M[29] !== Ie || M[30] !== l || M[31] !== t.length) yt = T ? `Enter text for option ${Ie} (${II(T.label)}), or Escape for the list: ${h}` : t.length === 0 ? `Nothing to select${l ? ". Escape to cancel" : ""}: ${h}` : `Select with numbers [1-${t.length}]${E ? " or up / down arrow keys" : ""}. Then ${Io([ "Enter to submit", ...l ? [ "Escape to cancel" ] : [] ])}: ${h}`, 
  M[27] = h, M[28] = T, M[29] = Ie, M[30] = l, M[31] = t.length, M[32] = yt; else yt = M[32];
  let $e = yt, Ve;
  if (M[33] !== $e) Ve = ie($e), M[33] = $e, M[34] = Ve; else Ve = M[34];
  const it = !I && !O && B === null;
  let _e;
  if (M[35] !== Ve || M[36] !== it) _e = {
    line: 0,
    column: Ve,
    active: it,
    visible: !0
  }, M[35] = Ve, M[36] = it, M[37] = _e; else _e = M[37];
  let lt = Wv(_e), mt;
  if (M[38] !== Fe || M[39] !== I) mt = I ? {} : {
    tabIndex: 0,
    onKeyDown: Fe
  }, M[38] = Fe, M[39] = I, M[40] = mt; else mt = M[40];
  let Ge;
  if (M[41] !== u || M[42] !== O || M[43] !== L || M[44] !== B || M[45] !== d || M[46] !== I || M[47] !== t) {
    let qe;
    if (M[49] !== u || M[50] !== O || M[51] !== L || M[52] !== B || M[53] !== d || M[54] !== I) qe = (p, St) => r(dc, {
      children: [ d?.get(St), e(En, {
        index: St + 1,
        option: p,
        selected: u !== void 0 && p.value === u,
        focused: B === St && !I && !O,
        drawLabel: L
      }) ]
    }, String(p.value)), M[49] = u, M[50] = O, M[51] = L, M[52] = B, M[53] = d, M[54] = I, 
    M[55] = qe; else qe = M[55];
    Ge = t.map(qe);
    M[41] = u, M[42] = O, M[43] = L, M[44] = B, M[45] = d, M[46] = I, M[47] = t, M[48] = Ge;
  } else Ge = M[48];
  let qe;
  if (M[56] !== d || M[57] !== t.length) qe = d?.get(t.length), M[56] = d, M[57] = t.length, 
  M[58] = qe; else qe = M[58];
  let ht;
  if (M[59] !== A) ht = A && e(n, {
    children: A
  }), M[59] = A, M[60] = ht; else ht = M[60];
  let bt;
  if (M[61] !== lt || M[62] !== O || M[63] !== j || M[64] !== I || M[65] !== $e) bt = !O && !(I && j) && e(s, {
    ref: lt,
    children: e(n, {
      children: $e
    })
  }), M[61] = lt, M[62] = O, M[63] = j, M[64] = I, M[65] = $e, M[66] = bt; else bt = M[66];
  let vt;
  if (M[67] !== mt || M[68] !== Ge || M[69] !== qe || M[70] !== ht || M[71] !== bt) vt = r(s, {
    ref: be,
    flexDirection: "column",
    ...mt,
    children: [ Ge, qe, ht, bt ]
  }), M[67] = mt, M[68] = Ge, M[69] = qe, M[70] = ht, M[71] = bt, M[72] = vt; else vt = M[72];
  return vt;
}

function o9n(o) {
  let m = w(91), {options: t, defaultValue: i, onChange: a, onSubmit: l, onFocus: f, onCancel: c, isDisabled: u, submitButtonText: b, refuseInput: d} = o, D;
  if (m[0] !== i) D = i === void 0 ? [] : i, m[0] = i, m[1] = D; else D = m[1];
  let I = D, O = u === void 0 ? !1 : u, [L, j, h] = Jt(), [v, x] = y(null), A;
  if (m[2] === S) A = nft(), m[2] = A; else A = m[2];
  let W = A, [M, C, E] = je(null), [B, K, g] = je(null), ue;
  if (m[3] !== t) ue = t.map(od).join("\0"), m[3] = t, m[4] = ue; else ue = m[4];
  let he = ue, [_, q] = y(he);
  if (_ !== he) q(he), E(id), g(sd), h(rd);
  let Ie;
  if (m[5] !== I || m[6] !== t) Ie = () => new Set(t.flatMap((pe, X) => !pe.disabled && I.includes(pe.value) ? [ X ] : [])), 
  m[5] = I, m[6] = t, m[7] = Ie; else Ie = m[7];
  let T = Ie, [be, U] = y(null), fe = R(!1), Y = R(!1), oe;
  if (m[8] !== l || m[9] !== be) oe = () => {
    if (be !== null) {
      let Ce = [ ...be ];
      U(null), fe.current = !1, l?.(Ce);
    }
  }, m[8] = l, m[9] = be, m[10] = oe; else oe = m[10];
  let De;
  if (m[11] !== be) De = [ be ], m[11] = be, m[12] = De; else De = m[12];
  P(oe, De);
  let [ne, k, ye] = je(null);
  if (_ !== he && ne !== null) ye(ld), h(ad);
  let ee = ne && t[ne.index - 1]?.type === "input" ? t[ne.index - 1] : null, Ue = R(null);
  oy(Ue, !O), fa("multi-select", !!c && !O);
  let we;
  if (m[13] !== a || m[14] !== h || m[15] !== E || m[16] !== ye || m[17] !== g) we = ft => {
    if (fe.current = !0, a?.([ ...ft ]) === !1) {
      fe.current = !1;
      return;
    }
    U(ft), h(ud), ye(dd), E(cd), g(pd);
  }, m[13] = a, m[14] = h, m[15] = E, m[16] = ye, m[17] = g, m[18] = we; else we = m[18];
  let Pe = we, Wt;
  if (m[19] !== I || m[20] !== Pe || m[21] !== ee || m[22] !== ne || m[23] !== f || m[24] !== t || m[25] !== h || m[26] !== E || m[27] !== ye || m[28] !== g) Wt = Dt => {
    if (ee && ne) {
      if (Dt === "") {
        x("Enter some text, or Escape for the list.");
        return;
      }
      Pe([ ...ne.stashed, ee.value ]);
      return;
    }
    let Bt = Dt.trim();
    if (Bt === "") {
      Pe(I);
      return;
    }
    let Fe = Bt.split(/[\s,]+/).filter(Boolean);
    if (Fe.length === 0) {
      Pe(I);
      return;
    }
    let yt = new Set;
    let $e = [];
    let Ve = null;
    for (const it of Fe) {
      if (!/^\d+$/.test(it)) {
        x(`Invalid selection "${it}". Enter numbers between 1 and ${t.length}, comma- or space-separated.`), 
        h(fd);
        return;
      }
      let _e = Number.parseInt(it, 10);
      if (yt.has(_e)) {
        continue;
      }
      if (yt.add(_e), _e < 1 || _e > t.length) {
        x(`Invalid selection "${it}". Enter numbers between 1 and ${t.length}, comma- or space-separated.`), 
        h(md);
        return;
      }
      let lt = t[_e - 1];
      if (lt.disabled) {
        x(`Option ${_e} is disabled.`), h(hd);
        return;
      }
      if (lt.type === "input") {
        if (Ve) {
          x("Only one free-text option can be included per selection."), h(bd);
          return;
        }
        Ve = {
          index: _e,
          opt: lt
        };
        continue;
      }
      $e.push(lt.value);
    }
    if (Ve?.opt) {
      ye(() => ({
        index: Ve.index,
        stashed: $e,
        raw: Bt
      })), E(vd), g(gd);
      let mt = Ve.opt.initialValue ?? "";
      h(() => mt), Ve.opt.onChange(mt), f?.(Ve.opt.value);
      return;
    }
    Pe($e);
  }, m[19] = I, m[20] = Pe, m[21] = ee, m[22] = ne, m[23] = f, m[24] = t, m[25] = h, 
  m[26] = E, m[27] = ye, m[28] = g, m[29] = Wt; else Wt = m[29];
  let Ge = Wt, qe;
  if (m[30] !== j || m[31] !== T || m[32] !== Pe || m[33] !== C || m[34] !== ee || m[35] !== ne || m[36] !== k || m[37] !== O || m[38] !== c || m[39] !== f || m[40] !== t || m[41] !== d || m[42] !== h || m[43] !== E || m[44] !== ye || m[45] !== g || m[46] !== Ge || m[47] !== K) qe = p => {
    if (O) {
      return;
    }
    if (p.key === "escape" && p.name === "escape") {
      if (p.preventDefault(), ne) {
        let {raw: St} = ne;
        ye(xd), h(() => St);
        let ht = t.find(Id) ?? t[0];
        if (ht) f?.(ht.value);
        return;
      }
      c?.();
      return;
    }
    if (p.key === "return" && p.name === "return") {
      if (p.preventDefault(), Y.current) {
        d?.(), Y.current = !1, h(yd), x("Part of that entry arrived before the list was ready \u2014 enter your selection again.");
        return;
      }
      if (d?.()) {
        return;
      }
      if (fe.current) {
        return;
      }
      if (W && !ee && j.current.length === 0 && K.current !== null) {
        let bt = [ ...K.current ].sort(Sd);
        if (bt.length === 0) Pe([]); else Ge(bt.map(wd).join(" "));
        return;
      }
      Ge(j.current);
      return;
    }
    if (p.key === "backspace" || p.key === "delete") {
      p.preventDefault();
      let vt = j.current;
      let Ft = vt.slice(0, -1);
      if (ee && ee.onChange(Ft) === !1) {
        return;
      }
      if (h(() => Ft), !ee && vt !== Ft) g(Od);
      return;
    }
    if (W && !ee && k.current === null && (p.name === "up" || p.name === "down")) {
      if (p.preventDefault(), d?.()) {
        return;
      }
      x(null), h(Cd), Y.current = !1;
      let Ye = t.length;
      if (Ye === 0) {
        return;
      }
      let tn = C.current;
      let Je = tn === null ? p.name === "down" ? 0 : Ye - 1 : (tn + (p.name === "down" ? 1 : -1) + Ye) % Ye;
      E(() => Je);
      let on = t[Je];
      if (on) f?.(on.value);
      return;
    }
    if (W && !ee && k.current === null && C.current !== null && c6(p.key) === " ") {
      if (p.preventDefault(), d?.()) {
        return;
      }
      let gt = C.current;
      let Ho = t[gt];
      if (!Ho) {
        return;
      }
      if (Ho.disabled) {
        x(`Option ${gt + 1} is disabled.`);
        return;
      }
      x(null), g(jn => {
        let Nt = new Set(jn ?? T());
        if (Nt.has(gt)) Nt.delete(gt); else Nt.add(gt);
        return Nt;
      });
      return;
    }
    if (ee) {
      if (p.key.length === 1 && !p.ctrl && !p.meta) {
        p.preventDefault();
        let Hn = j.current + p.key;
        if (ee.onChange(Hn) === !1) {
          return;
        }
        h(() => Hn);
      }
      return;
    }
    let In = c6(MX(p.key)).replace("\uff0c", ",").replace("\u3001", ",");
    if (/^[0-9, ]$/.test(In)) {
      if (p.preventDefault(), Y.current) {
        d?.();
        return;
      }
      if (d?.()) {
        Y.current = !0;
        return;
      }
      x(null), h(wt => wt + In), E(Td), g(Dd);
    }
  }, m[30] = j, m[31] = T, m[32] = Pe, m[33] = C, m[34] = ee, m[35] = ne, m[36] = k, 
  m[37] = O, m[38] = c, m[39] = f, m[40] = t, m[41] = d, m[42] = h, m[43] = E, m[44] = ye, 
  m[45] = g, m[46] = Ge, m[47] = K, m[48] = qe; else qe = m[48];
  let sn = qe, at;
  if (m[49] !== L || m[50] !== I || m[51] !== ee || m[52] !== ne?.index || m[53] !== c || m[54] !== t.length || m[55] !== b || m[56] !== B) at = ee ? `Enter text for option ${ne?.index} (${II(ee.label)}), or Escape for the list: ${L}` : `Select with numbers [1-${t.length}] (comma- or space-separated for several)${W ? " or up / down arrow keys" : ""}. Then ${Io([ ...W ? [ "Space to toggle" ] : [], `Enter to ${b ?? "submit"}`, ...I.length > 0 && B === null ? [ "bare Enter for defaults" ] : [], ...c ? [ "Escape to cancel" ] : [] ])}: ${L}`, 
  m[49] = L, m[50] = I, m[51] = ee, m[52] = ne?.index, m[53] = c, m[54] = t.length, 
  m[55] = b, m[56] = B, m[57] = at; else at = m[57];
  let dt = at, Ke;
  if (m[58] !== dt) Ke = ie(dt), m[58] = dt, m[59] = Ke; else Ke = m[59];
  const Ee = !O && M === null;
  let zn;
  if (m[60] !== Ke || m[61] !== Ee) zn = {
    line: 0,
    column: Ke,
    active: Ee,
    visible: !0
  }, m[60] = Ke, m[61] = Ee, m[62] = zn; else zn = m[62];
  let J = Wv(zn), rn;
  if (m[63] !== I) rn = new Set(I), m[63] = I, m[64] = rn; else rn = m[64];
  let Vt = rn, ln;
  if (m[65] !== sn || m[66] !== O) ln = O ? {} : {
    tabIndex: 0,
    onKeyDown: sn
  }, m[65] = sn, m[66] = O, m[67] = ln; else ln = m[67];
  let yn;
  if (m[68] !== Vt || m[69] !== M || m[70] !== O || m[71] !== t || m[72] !== B) {
    let kt;
    if (m[74] !== Vt || m[75] !== M || m[76] !== O || m[77] !== B) kt = (zo, Sn) => e(En, {
      index: Sn + 1,
      option: zo,
      selected: B ? B.has(Sn) : Vt.has(zo.value),
      focused: M === Sn && !O
    }, String(zo.value)), m[74] = Vt, m[75] = M, m[76] = O, m[77] = B, m[78] = kt; else kt = m[78];
    yn = t.map(kt);
    m[68] = Vt, m[69] = M, m[70] = O, m[71] = t, m[72] = B, m[73] = yn;
  } else yn = m[73];
  let kt;
  if (m[79] !== v) kt = v && e(n, {
    children: v
  }), m[79] = v, m[80] = kt; else kt = m[80];
  let an;
  if (m[81] !== dt) an = e(n, {
    children: dt
  }), m[81] = dt, m[82] = an; else an = m[82];
  let _n;
  if (m[83] !== J || m[84] !== an) _n = e(s, {
    ref: J,
    children: an
  }), m[83] = J, m[84] = an, m[85] = _n; else _n = m[85];
  let Xi;
  if (m[86] !== ln || m[87] !== yn || m[88] !== kt || m[89] !== _n) Xi = r(s, {
    ref: Ue,
    flexDirection: "column",
    ...ln,
    children: [ yn, kt, _n ]
  }), m[86] = ln, m[87] = yn, m[88] = kt, m[89] = _n, m[90] = Xi; else Xi = m[90];
  return Xi;
}

function En(o) {
  let u = w(26), {index: t, option: i, selected: a, focused: l, drawLabel: f} = o, c = f === void 0 ? !1 : f, b;
  if (u[0] !== l) b = {
    line: 0,
    column: 0,
    active: l,
    visible: !0
  }, u[0] = l, u[1] = b; else b = u[1];
  let d = Wv(b), m;
  if (u[2] !== i.label) m = II(i.label), u[2] = i.label, u[3] = m; else m = u[3];
  let D = m, I = i.description ? ` \u2014 ${i.description}` : "";
  const O = `${D}${I}`;
  let L;
  if (u[4] !== O) L = Vs(O), u[4] = O, u[5] = L; else L = u[5];
  let j = L;
  const h = i.disabled ? "(disabled)" : null, v = a ? "(selected)" : null;
  let x;
  if (u[6] !== h || u[7] !== v) x = [ h, v ].filter(Boolean), u[6] = h, u[7] = v, 
  u[8] = x; else x = u[8];
  let A = x.join(" ");
  if (c) {
    const W = A ? ` ${A}` : "";
    let M;
    if (u[9] !== t || u[10] !== W) M = r(n, {
      children: [ t, ".", W ]
    }), u[9] = t, u[10] = W, u[11] = M; else M = u[11];
    let C;
    if (u[12] !== i.description) C = i.description && r(n, {
      children: [ "\u2014 ", i.description ]
    }), u[12] = i.description, u[13] = C; else C = u[13];
    let E;
    if (u[14] !== d || u[15] !== i.label || u[16] !== M || u[17] !== C) E = r(s, {
      ref: d,
      children: [ M, i.label, C ]
    }), u[14] = d, u[15] = i.label, u[16] = M, u[17] = C, u[18] = E; else E = u[18];
    return E;
  }
  const W = A ? `${A} ` : "";
  let M;
  if (u[19] !== j || u[20] !== t || u[21] !== W) M = r(n, {
    children: [ t, ". ", W, j ]
  }), u[19] = j, u[20] = t, u[21] = W, u[22] = M; else M = u[22];
  let C;
  if (u[23] !== d || u[24] !== M) C = e(s, {
    ref: d,
    children: M
  }), u[23] = d, u[24] = M, u[25] = C; else C = u[25];
  return C;
}

function s9n(o) {
  let h = w(43), {confirmLabel: t, cancelLabel: i, onConfirm: a, onCancel: l, refuseInput: f, openedAt: c, windowMs: u} = o, [b, d, m] = Jt(), [D, I] = y(null), O = R(null);
  oy(O, !0), fa("select", !0);
  let {refuse: L, refuseCharacter: j} = xi(c, u), v;
  if (h[0] !== f || h[1] !== L) v = function x() {
    return (f?.() ?? !1) || L();
  }, h[0] = f, h[1] = L, h[2] = v; else v = h[2];
  let x = v, A;
  if (h[3] !== f || h[4] !== j) A = function W() {
    return (f?.() ?? !1) || j();
  }, h[3] = f, h[4] = j, h[5] = A; else A = h[5];
  let W = A, M;
  if (h[6] !== l || h[7] !== a || h[8] !== x || h[9] !== m) M = C => {
    let E = C.trim().toLowerCase();
    if ((E === "y" || E === "yes" || E === "n" || E === "no") && x()) {
      m(Fd);
      return;
    }
    if (E === "y" || E === "yes") {
      return a();
    }
    if (E === "n" || E === "no") {
      return l();
    }
    I("Please answer y or n."), m(Vd);
  }, h[6] = l, h[7] = a, h[8] = x, h[9] = m, h[10] = M; else M = h[10];
  let B = M, K;
  if (h[11] !== d || h[12] !== l || h[13] !== x || h[14] !== W || h[15] !== m || h[16] !== B) K = g => {
    if (g.key === "escape" && g.name === "escape") {
      if (g.preventDefault(), x()) {
        return;
      }
      return l();
    }
    if (g.key === "return" && g.name === "return") {
      return g.preventDefault(), B(d.current);
    }
    if (g.key === "backspace" || g.key === "delete") {
      g.preventDefault(), m(kd);
      return;
    }
    if (g.key.length === 1 && !g.ctrl && !g.meta) {
      if (g.preventDefault(), W()) {
        return;
      }
      I(null), m(ue => ue + g.key);
    }
  }, h[11] = d, h[12] = l, h[13] = x, h[14] = W, h[15] = m, h[16] = B, h[17] = K; else K = h[17];
  let he = K, _ = `Enter y/n: ${b}`, q;
  if (h[18] !== _) q = ie(_), h[18] = _, h[19] = q; else q = h[19];
  let Ie;
  if (h[20] !== q) Ie = {
    line: 0,
    column: q,
    active: !0,
    visible: !0
  }, h[20] = q, h[21] = Ie; else Ie = h[21];
  let pe = Wv(Ie), X;
  if (h[22] !== t) X = II(t), h[22] = t, h[23] = X; else X = h[23];
  let T;
  if (h[24] !== X) T = r(n, {
    children: [ "y. ", X ]
  }), h[24] = X, h[25] = T; else T = h[25];
  let be;
  if (h[26] !== i) be = II(i), h[26] = i, h[27] = be; else be = h[27];
  let U;
  if (h[28] !== be) U = r(n, {
    children: [ "n. ", be ]
  }), h[28] = be, h[29] = U; else U = h[29];
  let fe;
  if (h[30] !== D) fe = D && e(n, {
    children: D
  }), h[30] = D, h[31] = fe; else fe = h[31];
  let Y;
  if (h[32] !== _) Y = e(n, {
    children: _
  }), h[32] = _, h[33] = Y; else Y = h[33];
  let oe;
  if (h[34] !== pe || h[35] !== Y) oe = e(s, {
    ref: pe,
    children: Y
  }), h[34] = pe, h[35] = Y, h[36] = oe; else oe = h[36];
  let Ce;
  if (h[37] !== he || h[38] !== U || h[39] !== fe || h[40] !== oe || h[41] !== T) Ce = r(s, {
    ref: O,
    flexDirection: "column",
    tabIndex: 0,
    onKeyDown: he,
    children: [ T, U, fe, oe ]
  }), h[37] = he, h[38] = U, h[39] = fe, h[40] = oe, h[41] = T, h[42] = Ce; else Ce = h[42];
  return Ce;
}

F();

F();

function So(o) {
  let b = w(15), {imageId: t, backgroundColor: i, isSelected: a} = o, l = a === void 0 ? !1 : a, c = Fo(f => f.storedImagePaths.get(t) ?? null) ?? null, u = `[Image #${t}]`, d;
  if (b[0] !== c) d = c && Yw() ? mF(c) : null, b[0] = c, b[1] = d; else d = b[1];
  let m = d;
  if (m) {
    let D, I;
    if (b[2] !== i || b[3] !== u || b[4] !== l) D = e(n, {
      backgroundColor: i,
      inverse: l,
      children: u
    }), I = e(n, {
      backgroundColor: i,
      inverse: l,
      bold: l,
      children: u
    }), b[2] = i, b[3] = u, b[4] = l, b[5] = D, b[6] = I; else D = b[5], I = b[6];
    let O;
    if (b[7] !== m || b[8] !== D || b[9] !== I) O = e(zt, {
      url: m,
      fallback: D,
      children: I
    }), b[7] = m, b[8] = D, b[9] = I, b[10] = O; else O = b[10];
    return O;
  }
  let D;
  if (b[11] !== i || b[12] !== u || b[13] !== l) D = e(n, {
    backgroundColor: i,
    inverse: l,
    children: u
  }), b[11] = i, b[12] = u, b[13] = l, b[14] = D; else D = b[14];
  return D;
}

function jte(o) {
  let m = w(10), {isFocused: t, isSelected: i, children: a, description: l, shouldShowDownArrow: f, shouldShowUpArrow: c, declareCursor: u, onClick: b, hoverStyle: d} = o, D;
  if (m[0] !== a || m[1] !== u || m[2] !== l || m[3] !== d || m[4] !== t || m[5] !== i || m[6] !== b || m[7] !== f || m[8] !== c) D = e(IA, {
    isFocused: t,
    isSelected: i,
    description: l,
    showScrollDown: f,
    showScrollUp: c,
    styled: !1,
    declareCursor: u,
    onClick: b,
    hoverStyle: d,
    children: a
  }), m[0] = a, m[1] = u, m[2] = l, m[3] = d, m[4] = t, m[5] = i, m[6] = b, m[7] = f, 
  m[8] = c, m[9] = D; else D = m[9];
  return D;
}

function ic(ln) {
  return ln.type === "image";
}

function Rr(o, t, i, a) {
  let l = 2 + t + 2;
  return Math.max(1, o - l - i - a);
}

function fke(o) {
  let T = w(104), {option: t, isFocused: i, isSelected: a, shouldShowDownArrow: l, shouldShowUpArrow: f, maxIndexWidth: c, index: u, hideIndex: b, inputValue: d, onInputChange: m, onSubmit: D, onExit: I, layout: O, children: L, showLabel: j, onOpenEditor: h, resetCursorOnUpdate: v, canPasteImage: x, onImagePaste: A, pastedContents: W, onRemoveImage: M, imagesSelected: C, selectedImageIndex: E, onImagesSelectedChange: B, onSelectedImageIndexChange: K, extraChromeWidth: g, onClick: ue, hoverStyle: he} = o, _ = b === void 0 ? !1 : b, q = j === void 0 ? !1 : j, Ie = v === void 0 ? !1 : v, pe = E === void 0 ? 0 : E, X = g === void 0 ? 0 : g, be;
  if (T[0] !== W) be = W ? Object.values(W).filter(ic) : [], T[0] = W, T[1] = be; else be = T[1];
  let U = be, fe = q || t.showLabelWithValue === !0, [Y, oe] = y(d.length), Ce = R(!1), De;
  if (T[2] !== d.length || T[3] !== i || T[4] !== Ie) De = () => {
    if (Ie && i) {
      if (Ce.current) Ce.current = !1; else oe(d.length);
    }
  }, T[2] = d.length, T[3] = i, T[4] = Ie, T[5] = De; else De = T[5];
  let ne;
  if (T[6] !== d || T[7] !== i || T[8] !== Ie) ne = [ Ie, i, d ], T[6] = d, T[7] = i, 
  T[8] = Ie, T[9] = ne; else ne = T[9];
  P(De, ne);
  let k;
  if (T[10] !== d || T[11] !== m || T[12] !== h) k = () => {
    h?.(d, m);
  }, T[10] = d, T[11] = m, T[12] = h, T[13] = k; else k = T[13];
  const ye = i && !!h;
  let ee;
  if (T[14] !== ye) ee = {
    context: "Chat",
    isActive: ye
  }, T[14] = ye, T[15] = ee; else ee = T[15];
  rt("chat:externalEditor", k, ee);
  let Ue;
  if (T[16] !== x || T[17] !== A) Ue = () => {
    if (!A) {
      return;
    }
    if (x?.() === !1) {
      return;
    }
    Jle(td(Qe())).then(we => {
      if (we) A(we.base64, {
        mediaType: we.mediaType,
        dimensions: we.dimensions
      });
    });
  }, T[16] = x, T[17] = A, T[18] = Ue; else Ue = T[18];
  const ft = i && !!A;
  let Pe;
  if (T[19] !== ft) Pe = {
    context: "Chat",
    isActive: ft
  }, T[19] = ft, T[20] = Pe; else Pe = T[20];
  rt("chat:imagePaste", Ue, Pe);
  let Wt;
  if (T[21] !== U || T[22] !== M) Wt = () => {
    if (U.length > 0 && M) M(U.at(-1).id);
  }, T[21] = U, T[22] = M, T[23] = Wt; else Wt = T[23];
  const Dt = i && !C && d === "" && U.length > 0 && !!M;
  let Bt;
  if (T[24] !== Dt) Bt = {
    context: "Attachments",
    isActive: Dt
  }, T[24] = Dt, T[25] = Bt; else Bt = T[25];
  rt("attachments:remove", Wt, Bt);
  let Fe, yt;
  if (T[26] !== U.length || T[27] !== K || T[28] !== pe) Fe = () => {
    if (U.length > 1) K?.((pe + 1) % U.length);
  }, yt = () => {
    if (U.length > 1) K?.((pe - 1 + U.length) % U.length);
  }, T[26] = U.length, T[27] = K, T[28] = pe, T[29] = Fe, T[30] = yt; else Fe = T[29], 
  yt = T[30];
  let $e;
  if (T[31] !== U || T[32] !== B || T[33] !== M || T[34] !== K || T[35] !== pe) $e = () => {
    let Ve = U[pe];
    if (Ve && M) {
      if (M(Ve.id) === !1) {
        return;
      }
      if (U.length <= 1) B?.(!1); else K?.(Math.min(pe, U.length - 2));
    }
  }, T[31] = U, T[32] = B, T[33] = M, T[34] = K, T[35] = pe, T[36] = $e; else $e = T[36];
  let it;
  if (T[37] !== B) it = () => {
    B?.(!1);
  }, T[37] = B, T[38] = it; else it = T[38];
  let _e;
  if (T[39] !== Fe || T[40] !== yt || T[41] !== $e || T[42] !== it) _e = {
    "attachments:next": Fe,
    "attachments:previous": yt,
    "attachments:remove": $e,
    "attachments:exit": it
  }, T[39] = Fe, T[40] = yt, T[41] = $e, T[42] = it, T[43] = _e; else _e = T[43];
  const lt = i && !!C;
  let mt;
  if (T[44] !== lt) mt = {
    context: "Attachments",
    isActive: lt
  }, T[44] = lt, T[45] = mt; else mt = T[45];
  nn(_e, mt);
  let Ge, qe;
  if (T[46] !== C || T[47] !== i || T[48] !== B) Ge = () => {
    if (!i && C) B?.(!1);
  }, qe = [ i, C, B ], T[46] = C, T[47] = i, T[48] = B, T[49] = Ge, T[50] = qe; else Ge = T[49], 
  qe = T[50];
  P(Ge, qe);
  let p = O === "expanded" ? c + 3 : c + 4, {columns: St} = is(Te()), ht = fe && typeof t.label === "string" ? ie(t.label) + ie(t.labelValueSeparator ?? ", ") : 0, bt;
  if (T[51] !== St || T[52] !== X || T[53] !== ht || T[54] !== c) bt = Rr(St, c, ht, X), 
  T[51] = St, T[52] = X, T[53] = ht, T[54] = c, T[55] = bt; else bt = T[55];
  let vt = bt;
  const Ft = O === "compact" ? 0 : void 0;
  let Ye;
  if (T[56] !== _ || T[57] !== u || T[58] !== c) Ye = !_ && e(s, {
    flexShrink: 0,
    children: e(n, {
      dimColor: !0,
      children: `${u}.`.padEnd(c + 2)
    })
  }), T[56] = _, T[57] = u, T[58] = c, T[59] = Ye; else Ye = T[59];
  let tn;
  if (T[60] !== Y || T[61] !== C || T[62] !== d || T[63] !== i || T[64] !== I || T[65] !== A || T[66] !== m || T[67] !== D || T[68] !== t || T[69] !== fe || T[70] !== vt) tn = fe ? i ? r(Q, {
    children: [ r(n, {
      color: "suggestion",
      children: [ t.label, t.labelValueSeparator ?? ", " ]
    }), e(Er, {
      value: d,
      onChange: Je => {
        if (t.onChange(Je) === !1) {
          return;
        }
        Ce.current = !0, m(Je);
      },
      onSubmit: D,
      onExit: I,
      placeholder: t.placeholder,
      focus: !C,
      showCursor: !0,
      multiline: !0,
      cursorOffset: Y,
      onChangeCursorOffset: oe,
      columns: vt,
      onImagePaste: A,
      onPaste: on => {
        let gt = d.slice(0, Y);
        let Ho = d.slice(Y);
        let jn = gt + on + Ho;
        if (t.onChange(jn) === !1) {
          return;
        }
        Ce.current = !0, m(jn), oe(gt.length + on.length);
      }
    }) ]
  }) : r(n, {
    children: [ t.label, d ? t.labelValueSeparator ?? ", " : null, d || null ]
  }) : i ? e(Er, {
    value: d,
    onChange: Nt => {
      if (t.onChange(Nt) === !1) {
        return;
      }
      Ce.current = !0, m(Nt);
    },
    onSubmit: D,
    onExit: I,
    placeholder: t.placeholder || (typeof t.label === "string" ? t.label : void 0),
    focus: !C,
    showCursor: !0,
    multiline: !0,
    cursorOffset: Y,
    onChangeCursorOffset: oe,
    columns: vt,
    onImagePaste: A,
    onPaste: Hn => {
      let In = d.slice(0, Y);
      let wt = d.slice(Y);
      let sn = In + Hn + wt;
      if (t.onChange(sn) === !1) {
        return;
      }
      Ce.current = !0, m(sn), oe(In.length + Hn.length);
    }
  }) : e(n, {
    color: d ? void 0 : "inactive",
    children: d || t.placeholder || t.label
  }), T[60] = Y, T[61] = C, T[62] = d, T[63] = i, T[64] = I, T[65] = A, T[66] = m, 
  T[67] = D, T[68] = t, T[69] = fe, T[70] = vt, T[71] = tn; else tn = T[71];
  let at;
  if (T[72] !== L || T[73] !== Ft || T[74] !== Ye || T[75] !== tn) at = r(s, {
    flexDirection: "row",
    flexShrink: Ft,
    children: [ Ye, L, tn ]
  }), T[72] = L, T[73] = Ft, T[74] = Ye, T[75] = tn, T[76] = at; else at = T[76];
  let dt;
  if (T[77] !== he || T[78] !== i || T[79] !== a || T[80] !== ue || T[81] !== l || T[82] !== f || T[83] !== at) dt = e(jte, {
    isFocused: i,
    isSelected: a,
    shouldShowDownArrow: l,
    shouldShowUpArrow: f,
    declareCursor: !1,
    onClick: ue,
    hoverStyle: he,
    children: at
  }), T[77] = he, T[78] = i, T[79] = a, T[80] = ue, T[81] = l, T[82] = f, T[83] = at, 
  T[84] = dt; else dt = T[84];
  let Ke;
  if (T[85] !== p || T[86] !== i || T[87] !== a || T[88] !== t.description || T[89] !== t.dimDescription) Ke = t.description && e(s, {
    paddingLeft: p,
    children: e(n, {
      dimColor: t.dimDescription !== !1,
      color: a ? "success" : i ? "suggestion" : void 0,
      children: t.description
    })
  }), T[85] = p, T[86] = i, T[87] = a, T[88] = t.description, T[89] = t.dimDescription, 
  T[90] = Ke; else Ke = T[90];
  let Ee;
  if (T[91] !== p || T[92] !== U || T[93] !== C || T[94] !== i || T[95] !== pe) Ee = U.length > 0 && r(s, {
    flexDirection: "row",
    gap: 1,
    paddingLeft: p,
    children: [ U.map((zn, J) => e(So, {
      imageId: zn.id,
      isSelected: !!C && J === pe
    }, zn.id)), e(s, {
      flexGrow: 1,
      justifyContent: "flex-start",
      flexDirection: "row",
      children: e(n, {
        dimColor: !0,
        children: C ? r(Se, {
          children: [ U.length > 1 && r(Q, {
            children: [ e(pt, {
              action: "attachments:next",
              context: "Attachments",
              fallback: "\u2192",
              description: "next"
            }), e(pt, {
              action: "attachments:previous",
              context: "Attachments",
              fallback: "\u2190",
              description: "prev"
            }) ]
          }), e(pt, {
            action: "attachments:remove",
            context: "Attachments",
            fallback: "backspace",
            description: "remove"
          }), e(pt, {
            action: "attachments:exit",
            context: "Attachments",
            fallback: "esc",
            description: "cancel"
          }) ]
        }) : i ? e(G, {
          chord: "down",
          action: "select",
          parens: !0
        }) : null
      })
    }) ]
  }), T[91] = p, T[92] = U, T[93] = C, T[94] = i, T[95] = pe, T[96] = Ee; else Ee = T[96];
  let rn;
  if (T[97] !== O) rn = O === "expanded" && e(n, {
    children: " "
  }), T[97] = O, T[98] = rn; else rn = T[98];
  let Vt;
  if (T[99] !== dt || T[100] !== Ke || T[101] !== Ee || T[102] !== rn) Vt = r(s, {
    flexDirection: "column",
    flexShrink: 0,
    children: [ dt, Ke, Ee, rn ]
  }), T[99] = dt, T[100] = Ke, T[101] = Ee, T[102] = rn, T[103] = Vt; else Vt = T[103];
  return Vt;
}

F();

var Oi = ({isDisabled: o = !1, disableSelection: t = !1, state: i, options: a, isMultiSelect: l = !1, onUpFromFirstItem: f, onDownFromLastItem: c, onInputModeToggle: u, inputValues: b, imagesSelected: d = !1, onEnterImageSelection: m, onExitImageSelection: D, hasInkFocus: I = !0}) => {
  let {focusDirection: O} = hke();
  fa("select", !!i.onCancel);
  let L = Z(() => a.find(x => x.value === i.focusedValue)?.type === "input", [ a, i.focusedValue ]), j = Z(() => {
    let v = {};
    if (!L) v["select:next"] = () => {
      let x = a.at(-1);
      if (x && i.getFocusedValue() === x.value) {
        if (c) {
          c();
          return;
        }
        if (O("down")) return;
      }
      i.focusNextOption();
    }, v["select:previous"] = () => {
      let x = a[0];
      if (x && i.getFocusedValue() === x.value) {
        if (f) {
          f();
          return;
        }
        if (O("up")) return;
      }
      i.focusPreviousOption();
    }, v["select:first"] = () => {
      i.focusOption(a[0]?.value);
    }, v["select:last"] = () => {
      i.focusOption(a.at(-1)?.value);
    }, v["select:accept"] = () => {
      if (t === !0) return;
      let x = i.getFocusedValue();
      if (x === void 0) return;
      let A = a.find(W => W.value === x);
      if (A?.disabled === !0) return;
      if (A?.type === "input") return;
      i.selectFocusedOption?.(), i.onChange?.(x);
    };
    if (i.onCancel) v["select:cancel"] = () => {
      i.onCancel();
    };
    return v;
  }, [ a, i, c, f, L, t, O ]);
  return nn(j, {
    context: "Select",
    isActive: !o && I
  }), {
    handleKeyDown: v => {
      if (o) return;
      let x = MX(v.key), A = i.getFocusedValue(), W = a.find(C => C.value === A), M = W?.type === "input";
      if (v.key === "tab") {
        if (v.preventDefault(), u && A !== void 0) u(A);
        return;
      }
      if (M) {
        if (d) {
          if (v.key === "up") v.preventDefault(), D?.();
          return;
        }
        if (v.key === "down" && m?.()) {
          v.stopImmediatePropagation();
          return;
        }
        if (v.key === "down" || v.ctrl && v.key === "n") {
          if (c) {
            let C = a.at(-1);
            if (C && A === C.value) {
              c(), v.stopImmediatePropagation();
              return;
            }
          }
          i.focusNextOption(), v.stopImmediatePropagation();
          return;
        }
        if (v.key === "up" || v.ctrl && v.key === "p") {
          if (f) {
            let C = a[0];
            if (C && A === C.value) {
              f(), v.stopImmediatePropagation();
              return;
            }
          }
          i.focusPreviousOption(), v.stopImmediatePropagation();
          return;
        }
        return;
      }
      if (L) {
        if (v.key === "down" || v.ctrl && v.key === "n") {
          if (c) {
            let C = a.at(-1);
            if (C && A === C.value) {
              c(), v.stopImmediatePropagation();
              return;
            }
          }
          i.focusNextOption(), v.stopImmediatePropagation();
          return;
        }
        if (v.key === "up" || v.ctrl && v.key === "p") {
          if (f) {
            let C = a[0];
            if (C && A === C.value) {
              f(), v.stopImmediatePropagation();
              return;
            }
          }
          i.focusPreviousOption(), v.stopImmediatePropagation();
          return;
        }
      }
      if (v.key === "pagedown") {
        v.preventDefault(), i.focusNextPage();
        return;
      }
      if (v.key === "pageup") {
        v.preventDefault(), i.focusPreviousPage();
        return;
      }
      if (t !== !0) {
        if (l && c6(v.key) === " " && A !== void 0) {
          if (W?.disabled !== !0) v.preventDefault(), i.selectFocusedOption?.(), i.onChange?.(A);
          return;
        }
        if (t !== "numeric" && /^[0-9]$/.test(x)) {
          v.preventDefault();
          let C = parseInt(x) - 1;
          if (C >= 0 && C < i.options.length) {
            let E = i.options[C];
            if (E.disabled === !0) return;
            if (E.type === "input") {
              if ((b?.get(E.value) ?? "").trim()) {
                i.onChange?.(E.value);
                return;
              }
              if (E.allowEmptySubmitToCancel) {
                i.onChange?.(E.value);
                return;
              }
              i.focusOption(E.value);
              return;
            }
            i.onChange?.(E.value);
            return;
          }
        }
      }
    }
  };
};

F();

F();

import { isDeepStrictEqual as lc } from "util";

F();

function Sc(o) {
  let [t] = y(() => ({
    value: sc(o) ? o() : o
  })), [i, a] = y(t.value), l = ae(c => {
    let u = rc(c) ? c(t.value) : c;
    if (Object.is(u, t.value)) return;
    t.value = u, a(() => u);
  }, [ t ]), f = ae(() => t.value, [ t ]);
  return [ i, l, f ];
}

function sc(o) {
  return typeof o === "function";
}

function rc(o) {
  return typeof o === "function";
}

class To extends Map {
  first;
  last;
  constructor(o) {
    let t = [], i, a, l, f = 0;
    for (let c of o) {
      let u = {
        value: c.value,
        previous: l,
        next: void 0,
        index: f
      };
      if (l) l.next = u;
      i ||= u, a = u, t.push([ c.value, u ]), f++, l = u;
    }
    super(t);
    this.first = i, this.last = a;
  }
}

var ac = (o, t) => {
  switch (t.type) {
   case "focus-next-option":
    {
      if (o.focusedValue === void 0) return o;
      let i = o.optionMap.get(o.focusedValue);
      if (!i) return o;
      let a = i.next || o.optionMap.first;
      if (!a) return o;
      if (!i.next && a === o.optionMap.first) return {
        ...o,
        focusedValue: a.value,
        visibleFromIndex: 0,
        visibleToIndex: o.visibleOptionCount
      };
      if (!(a.index >= o.visibleToIndex)) return {
        ...o,
        focusedValue: a.value
      };
      let f = Math.min(o.optionMap.size, o.visibleToIndex + 1), c = f - o.visibleOptionCount;
      return {
        ...o,
        focusedValue: a.value,
        visibleFromIndex: c,
        visibleToIndex: f
      };
    }

   case "focus-previous-option":
    {
      if (o.focusedValue === void 0) return o;
      let i = o.optionMap.get(o.focusedValue);
      if (!i) return o;
      let a = i.previous || o.optionMap.last;
      if (!a) return o;
      if (!i.previous && a === o.optionMap.last) {
        let u = o.optionMap.size, b = Math.max(0, u - o.visibleOptionCount);
        return {
          ...o,
          focusedValue: a.value,
          visibleFromIndex: b,
          visibleToIndex: u
        };
      }
      if (!(a.index <= o.visibleFromIndex)) return {
        ...o,
        focusedValue: a.value
      };
      let f = Math.max(0, o.visibleFromIndex - 1), c = f + o.visibleOptionCount;
      return {
        ...o,
        focusedValue: a.value,
        visibleFromIndex: f,
        visibleToIndex: c
      };
    }

   case "focus-next-page":
    {
      if (o.focusedValue === void 0) return o;
      let i = o.optionMap.get(o.focusedValue);
      if (!i) return o;
      let a = Math.min(o.optionMap.size - 1, i.index + o.visibleOptionCount), l = o.optionMap.first;
      while (l && l.index < a) if (l.next) l = l.next; else break;
      if (!l) return o;
      let f = Math.min(o.optionMap.size, l.index + 1), c = Math.max(0, f - o.visibleOptionCount);
      return {
        ...o,
        focusedValue: l.value,
        visibleFromIndex: c,
        visibleToIndex: f
      };
    }

   case "focus-previous-page":
    {
      if (o.focusedValue === void 0) return o;
      let i = o.optionMap.get(o.focusedValue);
      if (!i) return o;
      let a = Math.max(0, i.index - o.visibleOptionCount), l = o.optionMap.first;
      while (l && l.index < a) if (l.next) l = l.next; else break;
      if (!l) return o;
      let f = Math.max(0, l.index), c = Math.min(o.optionMap.size, f + o.visibleOptionCount);
      return {
        ...o,
        focusedValue: l.value,
        visibleFromIndex: f,
        visibleToIndex: c
      };
    }

   case "reset":
    return t.state;

   case "scroll-viewport":
    {
      let i = Math.min(Math.max(0, o.optionMap.size - o.visibleOptionCount), Math.max(0, o.visibleFromIndex + t.delta));
      if (i === o.visibleFromIndex) return o;
      let a = Math.min(o.optionMap.size, i + o.visibleOptionCount), l = o.focusedValue === void 0 ? void 0 : o.optionMap.get(o.focusedValue);
      while (l?.next && l.index < i) l = l.next;
      while (l?.previous && l.index >= a) l = l.previous;
      return {
        ...o,
        focusedValue: l?.value,
        visibleFromIndex: i,
        visibleToIndex: a
      };
    }

   case "set-focus":
    {
      if (o.focusedValue === t.value) return o;
      let i = o.optionMap.get(t.value);
      if (!i) return o;
      if (i.index >= o.visibleFromIndex && i.index < o.visibleToIndex) return {
        ...o,
        focusedValue: t.value
      };
      let a, l;
      if (i.index < o.visibleFromIndex) a = i.index, l = Math.min(o.optionMap.size, a + o.visibleOptionCount); else l = Math.min(o.optionMap.size, i.index + 1), 
      a = Math.max(0, l - o.visibleOptionCount);
      return {
        ...o,
        focusedValue: t.value,
        visibleFromIndex: a,
        visibleToIndex: l
      };
    }
  }
}, tl = ({visibleOptionCount: o, options: t, initialFocusValue: i, currentViewport: a}) => {
  let l = typeof o === "number" ? Math.min(o, t.length) : t.length, f = new To(t), c = i !== void 0 && f.get(i), u = c ? i : f.first?.value, b = 0, d = l;
  if (c) {
    let m = c.index;
    if (a) if (m >= a.visibleFromIndex && m < a.visibleToIndex) {
      if (b = a.visibleFromIndex, d = Math.min(f.size, b + l), m >= d) d = Math.min(f.size, m + 1), 
      b = Math.max(0, d - l);
      if (d - b < l) b = Math.max(0, d - l);
    } else if (m < a.visibleFromIndex) {
      if (b = m, d = Math.min(f.size, b + l), d - b < l) b = Math.max(0, d - l);
    } else d = Math.min(f.size, m + 1), b = Math.max(0, d - l); else if (m >= l) d = Math.min(f.size, m + 1), 
    b = Math.max(0, d - l);
    b = Math.max(0, Math.min(b, f.size - 1)), d = Math.min(f.size, Math.max(l, d));
  }
  return {
    optionMap: f,
    visibleOptionCount: l,
    focusedValue: u,
    visibleFromIndex: b,
    visibleToIndex: d
  };
};

function i9n({visibleOptionCount: o = 5, options: t, onFocus: i, focusValue: a}) {
  let [l, f, c] = Sc(() => tl({
    visibleOptionCount: o,
    options: t,
    initialFocusValue: a
  })), u = ae(g => {
    f(ue => ac(ue, g));
  }, [ f ]), b = xo(g => i?.(g)), d = R(void 0), [m, D] = y(t), [I, O] = y(o), L = t !== m && !lc(t, m), j = o !== I;
  if (L || j) {
    let g = c();
    if (u({
      type: "reset",
      state: tl({
        visibleOptionCount: o,
        options: t,
        initialFocusValue: L ? a ?? g.focusedValue : g.focusedValue ?? a,
        currentViewport: {
          visibleFromIndex: g.visibleFromIndex,
          visibleToIndex: g.visibleToIndex
        }
      })
    }), L) D(t);
    if (j) O(o);
  }
  let h = ae(g => {
    u(g);
    let ue = Ci(c().focusedValue, t);
    if (ue !== void 0 && ue !== d.current) d.current = ue, i?.(ue);
  }, [ u, c, t, i ]), v = ae(() => {
    h({
      type: "focus-next-option"
    });
  }, [ h ]), x = ae(() => {
    h({
      type: "focus-previous-option"
    });
  }, [ h ]), A = ae(() => {
    h({
      type: "focus-next-page"
    });
  }, [ h ]), W = ae(() => {
    h({
      type: "focus-previous-page"
    });
  }, [ h ]), M = ae(g => {
    let ue = c().visibleFromIndex;
    return h({
      type: "scroll-viewport",
      delta: g
    }), c().visibleFromIndex !== ue;
  }, [ h, c ]), C = ae(g => {
    if (g !== void 0) h({
      type: "set-focus",
      value: g
    });
  }, [ h ]), E = Z(() => t.map((g, ue) => ({
    ...g,
    index: ue
  })).slice(l.visibleFromIndex, l.visibleToIndex), [ t, l.visibleFromIndex, l.visibleToIndex ]), B = Z(() => Ci(l.focusedValue, t), [ l.focusedValue, t ]), K = ae(() => Ci(c().focusedValue, t), [ c, t ]);
  return P(() => {
    if (B === void 0) {
      d.current = void 0;
      return;
    }
    if (B !== d.current) d.current = B, b(B);
  }, [ B ]), P(() => {
    if (a !== void 0) u({
      type: "set-focus",
      value: a
    });
  }, [ a, u ]), {
    focusedValue: B,
    getFocusedValue: K,
    visibleFromIndex: l.visibleFromIndex,
    visibleToIndex: l.visibleToIndex,
    visibleOptions: E,
    focusNextOption: v,
    focusPreviousOption: x,
    focusNextPage: A,
    focusPreviousPage: W,
    focusOption: C,
    scrollViewport: M,
    options: t
  };
}

function Ci(o, t) {
  if (o === void 0) return;
  if (t.some(i => i.value === o)) return o;
  return t[0]?.value;
}

function Ti({visibleOptionCount: o = 5, options: t, defaultValue: i, selectedValue: a, onChange: l, onCancel: f, onFocus: c, focusValue: u}) {
  let [b, d] = y(i), m = i9n({
    visibleOptionCount: o,
    options: t,
    onFocus: c,
    focusValue: u
  }), {getFocusedValue: D} = m, I = ae(() => {
    d(D());
  }, [ D ]);
  return {
    ...m,
    value: a !== void 0 ? a : b,
    selectFocusedOption: I,
    onChange: l,
    onCancel: f
  };
}

F();

function E1t({isDisabled: o, visibleFromIndex: t, visibleToIndex: i, optionCount: a, scrollViewport: l, shouldDropWheel: f}) {
  let c = R(null);
  if (o || i - t >= a) return {
    ref: c,
    onWheel: void 0
  };
  return {
    ref: c,
    onWheel: b => {
      if (b.deltaY === 0 || f()) return;
      let d = c.current;
      if (d !== null && b.col !== void 0 && b.row !== void 0 && Uq(d, b.col, b.row) === null) return;
      if (l(b.deltaY > 0 ? 1 : -1)) b.stopImmediatePropagation();
    }
  };
}

function Np(Tf) {
  return Tf.type === "input";
}

function Lp(Df) {
  return Df.description;
}

function Up(Ff) {
  return Ff.type === "image";
}

function $p(Vf) {
  return Vf.type === "image";
}

function Kp() {
  return {
    bold: !0
  };
}

function jp(kf) {
  return kf.type === "image";
}

function Hp(Mf) {
  return Mf.type === "image";
}

function zp(Rf) {
  return Rf.type === "image";
}

var zi = Symbol("NO_COMMITTED_ROW");

function Xe(o) {
  let a = w(12);
  if (st()) {
    const i = o.selectedValue === zi ? o.defaultValue : o.selectedValue ?? o.defaultValue;
    let l;
    if (a[0] !== o.disableSelection || a[1] !== o.hidePromptWhileDisabled || a[2] !== o.isDisabled || a[3] !== o.onCancel || a[4] !== o.onChange || a[5] !== o.onFocus || a[6] !== o.options || a[7] !== o.refuseInput || a[8] !== i) l = e(rJ, {
      options: o.options,
      onChange: o.onChange,
      onFocus: o.onFocus,
      onCancel: o.onCancel,
      isDisabled: o.isDisabled,
      disableSelection: o.disableSelection,
      refuseInput: o.refuseInput,
      hidePromptWhileDisabled: o.hidePromptWhileDisabled,
      defaultValue: i
    }), a[0] = o.disableSelection, a[1] = o.hidePromptWhileDisabled, a[2] = o.isDisabled, 
    a[3] = o.onCancel, a[4] = o.onChange, a[5] = o.onFocus, a[6] = o.options, a[7] = o.refuseInput, 
    a[8] = i, a[9] = l; else l = a[9];
    return l;
  }
  let i;
  if (a[10] !== o) i = e(Yi, {
    ...o
  }), a[10] = o, a[11] = i; else i = a[11];
  return i;
}

function Yi(o) {
  let k = w(84), {isDisabled: t, hideIndexes: i, disablePrintableKeybindings: a, visibleOptionCount: l, hiddenBelowUnit: f, highlightText: c, options: u, columnSizingOptions: b, defaultValue: d, selectedValue: m, onCancel: D, onChange: I, onFocus: O, defaultFocusValue: L, layout: j, disableSelection: h, inlineDescriptions: v, hoverStyle: x, inputChromeWidth: A, onUpFromFirstItem: W, onDownFromLastItem: M, onInputModeToggle: C, onOpenEditor: E, canPasteImage: B, onImagePaste: K, pastedContents: g, onRemoveImage: ue, pointerWhileDisabled: he} = o, _ = t === void 0 ? !1 : t, q = i === void 0 ? !1 : i, Ie = a === void 0 ? !1 : a, pe = l === void 0 ? 5 : l, X = b === void 0 ? u : b, T = j === void 0 ? "compact" : j, be = h === void 0 ? !1 : h, U = v === void 0 ? !1 : v, fe = A === void 0 ? 0 : A, Y = he === void 0 ? !1 : he, [oe, Ce] = y(!1), [De, ne] = y(0), ye;
  if (k[0] !== u) ye = () => {
    let ee = new Map;
    return u.forEach(Ue => {
      if (Ue.type === "input" && Ue.initialValue) ee.set(Ue.value, Ue.initialValue);
    }), ee;
  }, k[0] = u, k[1] = ye; else ye = k[1];
  let [we, ft] = y(ye), Pe;
  if (k[2] === S) Pe = new Map, k[2] = Pe; else Pe = k[2];
  let Wt = R(Pe), Dt, Bt;
  if (k[3] !== we || k[4] !== u) Dt = () => {
    for (const Fe of u) {
      if (Fe.type === "input" && Fe.initialValue !== void 0) {
        let yt = Wt.current.get(Fe.value) ?? "";
        let $e = we.get(Fe.value) ?? "";
        let Ve = Fe.initialValue;
        if (Ve !== yt && $e === yt) ft(it => {
          let _e = new Map(it);
          return _e.set(Fe.value, Ve), _e;
        });
        Wt.current.set(Fe.value, Ve);
      }
    }
  }, Bt = [ u, we ], k[3] = we, k[4] = u, k[5] = Dt, k[6] = Bt; else Dt = k[5], Bt = k[6];
  P(Dt, Bt);
  let lt = T === "compact" && !U && !X.some(Np) && X.some(Lp), {columns: mt} = is(Te());
  const Ge = k1t(pe, lt ? "compact-vertical" : T);
  let qe;
  if (k[7] !== L || k[8] !== d || k[9] !== D || k[10] !== I || k[11] !== O || k[12] !== u || k[13] !== m || k[14] !== Ge) qe = {
    visibleOptionCount: Ge,
    options: u,
    defaultValue: d,
    selectedValue: m,
    onChange: I,
    onCancel: D,
    onFocus: O,
    focusValue: L
  }, k[7] = L, k[8] = d, k[9] = D, k[10] = I, k[11] = O, k[12] = u, k[13] = m, k[14] = Ge, 
  k[15] = qe; else qe = k[15];
  let p = Ti(qe), [St, ht] = y(!0), bt = Lb(), vt = S_t(), Ft;
  if (k[16] !== be || k[17] !== _ || k[18] !== Y || k[19] !== bt || k[20] !== p) Ft = Ye => _ && !Y || be === !0 || Ye.disabled === !0 ? void 0 : tn => {
    if (bt(tn)) {
      return;
    }
    if (Ye.type === "input") p.focusOption(Ye.value); else p.onChange?.(Ye.value);
  }, k[16] = be, k[17] = _, k[18] = Y, k[19] = bt, k[20] = p, k[21] = Ft; else Ft = k[21];
  let Je = Ft;
  const on = be || (q ? "numeric" : !1);
  let gt;
  if (k[22] !== g) gt = () => {
    if (g && Object.values(g).some(Up)) {
      let Ho = N(Object.values(g), $p);
      return Ce(!0), ne(Ho - 1), !0;
    }
    return !1;
  }, k[22] = g, k[23] = gt; else gt = k[23];
  let jn;
  if (k[24] === S) jn = () => {
    Ce(!1);
  }, k[24] = jn; else jn = k[24];
  let Nt;
  if (k[25] !== St || k[26] !== oe || k[27] !== we || k[28] !== _ || k[29] !== M || k[30] !== C || k[31] !== W || k[32] !== u || k[33] !== p || k[34] !== on || k[35] !== gt) Nt = {
    isDisabled: _,
    hasInkFocus: St,
    disableSelection: on,
    state: p,
    options: u,
    isMultiSelect: !1,
    onUpFromFirstItem: W,
    onDownFromLastItem: M,
    onInputModeToggle: C,
    inputValues: we,
    imagesSelected: oe,
    onEnterImageSelection: gt,
    onExitImageSelection: jn
  }, k[25] = St, k[26] = oe, k[27] = we, k[28] = _, k[29] = M, k[30] = C, k[31] = W, 
  k[32] = u, k[33] = p, k[34] = on, k[35] = gt, k[36] = Nt; else Nt = k[36];
  let {handleKeyDown: Hn} = Oi(Nt), In = R(null);
  oy(In, !_);
  let wt = {
    container: () => ({
      flexDirection: "column",
      ref: In,
      ..._ ? {} : {
        tabIndex: 0,
        textEntry: Ie ? !0 : void 0,
        onKeyDown: Hn,
        onFocus: () => ht(!0),
        onBlur: () => ht(!1)
      }
    }),
    highlightedText: Kp
  }, sn;
  if (k[37] !== f || k[38] !== u.length || k[39] !== p.visibleFromIndex || k[40] !== p.visibleToIndex) sn = f !== void 0 && p.visibleToIndex - p.visibleFromIndex < u.length ? e(s, {
    paddingLeft: 3,
    height: 1,
    children: e(jy, {
      count: u.length - p.visibleToIndex,
      unit: f
    })
  }) : null, k[37] = f, k[38] = u.length, k[39] = p.visibleFromIndex, k[40] = p.visibleToIndex, 
  k[41] = sn; else sn = k[41];
  let at = sn, dt;
  if (k[42] !== _ || k[43] !== u.length || k[44] !== vt || k[45] !== p.scrollViewport || k[46] !== p.visibleFromIndex || k[47] !== p.visibleToIndex) dt = {
    isDisabled: _,
    visibleFromIndex: p.visibleFromIndex,
    visibleToIndex: p.visibleToIndex,
    optionCount: u.length,
    scrollViewport: p.scrollViewport,
    shouldDropWheel: vt
  }, k[42] = _, k[43] = u.length, k[44] = vt, k[45] = p.scrollViewport, k[46] = p.visibleFromIndex, 
  k[47] = p.visibleToIndex, k[48] = dt; else dt = k[48];
  let Ke = E1t(dt);
  if (T === "expanded") {
    let Ee;
    if (k[49] !== q || k[50] !== p.options) Ee = q ? 0 : p.options.length.toString().length, 
    k[49] = q, k[50] = p.options, k[51] = Ee; else Ee = k[51];
    let zn = Ee;
    return e(Tt, {
      container: wt.container(),
      rows: Ke,
      hiddenBelow: at,
      children: p.visibleOptions.map((J, rn) => {
        let Vt = J.index === p.visibleFromIndex;
        let ln = J.index === p.visibleToIndex - 1;
        let yn = p.visibleToIndex < u.length;
        let kt = p.visibleFromIndex > 0;
        let zo = p.visibleFromIndex + rn + 1;
        let Sn = !_ && p.focusedValue === J.value;
        let an = p.value === J.value;
        if (J.type === "input") {
          let _n = we.has(J.value) ? we.get(J.value) : J.initialValue || "";
          return e(fke, {
            option: J,
            onClick: Je(J),
            hoverStyle: x,
            isFocused: Sn,
            isSelected: an,
            shouldShowDownArrow: yn && ln,
            shouldShowUpArrow: kt && Vt,
            maxIndexWidth: zn,
            index: zo,
            hideIndex: q,
            extraChromeWidth: fe,
            inputValue: _n,
            onInputChange: Xi => {
              ft(Hl => {
                let Qi = new Map(Hl);
                return Qi.set(J.value, Xi), Qi;
              });
            },
            onSubmit: zl => {
              let _l = g && Object.values(g).some(jp);
              if (zl.trim() || _l || J.allowEmptySubmitToCancel) I?.(J.value); else D?.();
            },
            onExit: D,
            layout: "expanded",
            showLabel: U,
            onOpenEditor: E,
            resetCursorOnUpdate: J.resetCursorOnUpdate,
            canPasteImage: B,
            onImagePaste: K,
            pastedContents: g,
            onRemoveImage: ue,
            imagesSelected: oe,
            selectedImageIndex: De,
            onImagesSelectedChange: Ce,
            onSelectedImageIndexChange: ne
          }, String(J.value));
        }
        let Zi = J.label;
        if (typeof J.label === "string" && c && J.label.includes(c)) {
          let es = J.label;
          let Gl = es.indexOf(c);
          Zi = r(Q, {
            children: [ es.slice(0, Gl), e(n, {
              ...wt.highlightedText(),
              children: c
            }), es.slice(Gl + c.length) ]
          });
        }
        let ts = J.disabled === !0;
        let ql = ts ? void 0 : an ? "success" : Sn ? "suggestion" : void 0;
        return r(s, {
          flexDirection: "column",
          flexShrink: 0,
          children: [ e(jte, {
            isFocused: Sn,
            isSelected: an,
            shouldShowDownArrow: yn && ln,
            shouldShowUpArrow: kt && Vt,
            onClick: Je(J),
            hoverStyle: x,
            children: e(n, {
              dimColor: ts,
              color: ql,
              children: Zi
            })
          }), J.description && e(s, {
            paddingLeft: 2,
            children: e(n, {
              dimColor: ts || J.dimDescription !== !1,
              color: ql,
              children: e(Uo, {
                children: J.description
              })
            })
          }), e(n, {
            children: " "
          }) ]
        }, String(J.value));
      })
    });
  }
  if (T === "compact-vertical") {
    let Ee;
    if (k[52] !== q || k[53] !== p.options) Ee = q ? 0 : p.options.length.toString().length, 
    k[52] = q, k[53] = p.options, k[54] = Ee; else Ee = k[54];
    let ns = Ee;
    return e(Tt, {
      container: wt.container(),
      rows: Ke,
      hiddenBelow: at,
      children: p.visibleOptions.map((le, _p) => {
        let Yl = le.index === p.visibleFromIndex;
        let Jl = le.index === p.visibleToIndex - 1;
        let Xl = p.visibleToIndex < u.length;
        let Ql = p.visibleFromIndex > 0;
        let Zl = p.visibleFromIndex + _p + 1;
        let _o = !_ && p.focusedValue === le.value;
        let Go = p.value === le.value;
        if (le.type === "input") {
          let Gp = we.has(le.value) ? we.get(le.value) : le.initialValue || "";
          return e(fke, {
            option: le,
            onClick: Je(le),
            hoverStyle: x,
            isFocused: _o,
            isSelected: Go,
            shouldShowDownArrow: Xl && Jl,
            shouldShowUpArrow: Ql && Yl,
            maxIndexWidth: ns,
            index: Zl,
            hideIndex: q,
            extraChromeWidth: fe,
            inputValue: Gp,
            onInputChange: qp => {
              ft(Yp => {
                let ea = new Map(Yp);
                return ea.set(le.value, qp), ea;
              });
            },
            onSubmit: Jp => {
              let Xp = g && Object.values(g).some(Hp);
              if (Jp.trim() || Xp || le.allowEmptySubmitToCancel) I?.(le.value); else D?.();
            },
            onExit: D,
            layout: "compact",
            showLabel: U,
            onOpenEditor: E,
            resetCursorOnUpdate: le.resetCursorOnUpdate,
            canPasteImage: B,
            onImagePaste: K,
            pastedContents: g,
            onRemoveImage: ue,
            imagesSelected: oe,
            selectedImageIndex: De,
            onImagesSelectedChange: Ce,
            onSelectedImageIndexChange: ne
          }, String(le.value));
        }
        let ta = le.label;
        if (typeof le.label === "string" && c && le.label.includes(c)) {
          let os = le.label;
          let na = os.indexOf(c);
          ta = r(Q, {
            children: [ os.slice(0, na), e(n, {
              ...wt.highlightedText(),
              children: c
            }), os.slice(na + c.length) ]
          });
        }
        let qo = le.disabled === !0;
        return r(s, {
          flexDirection: "column",
          flexShrink: 0,
          children: [ e(jte, {
            isFocused: _o,
            isSelected: Go,
            shouldShowDownArrow: Xl && Jl,
            shouldShowUpArrow: Ql && Yl,
            onClick: Je(le),
            hoverStyle: x,
            children: r(Q, {
              children: [ !q && e(n, {
                dimColor: !0,
                children: `${Zl}.`.padEnd(ns + 1)
              }), e(n, {
                dimColor: qo,
                color: qo ? void 0 : Go ? "success" : _o ? "suggestion" : void 0,
                children: ta
              }) ]
            })
          }), le.description && e(s, {
            paddingLeft: q ? 4 : ns + 4,
            children: e(n, {
              dimColor: qo || le.dimDescription !== !1,
              color: qo ? void 0 : Go ? "success" : _o ? "suggestion" : void 0,
              children: e(Uo, {
                children: le.description
              })
            })
          }) ]
        }, String(le.value));
      })
    });
  }
  let Ee;
  if (k[55] !== X || k[56] !== q) Ee = q ? 0 : X.length.toString().length, k[55] = X, 
  k[56] = q, k[57] = Ee; else Ee = k[57];
  let Lt = Ee;
  if (lt) {
    let Ut, Gn;
    if (k[58] !== mt || k[59] !== X || k[60] !== q || k[61] !== Lt || k[62] !== p.value) {
      Ut = q ? 0 : Lt + 2;
      let $t;
      if (k[65] !== X || k[66] !== Ut || k[67] !== p.value) {
        let Mt;
        if (k[69] !== Ut || k[70] !== p.value) Mt = ss => {
          if (ss.type === "input") {
            return 0;
          }
          let Qp = p.value === ss.value ? 2 : 0;
          return 2 + Ut + ie(II(ss.label)) + Qp;
        }, k[69] = Ut, k[70] = p.value, k[71] = Mt; else Mt = k[71];
        $t = Math.max(...X.map(Mt));
        k[65] = X, k[66] = Ut, k[67] = p.value, k[68] = $t;
      } else $t = k[68];
      Gn = Math.min($t, Math.floor(mt * Ll));
      k[58] = mt, k[59] = X, k[60] = q, k[61] = Lt, k[62] = p.value, k[63] = Ut, k[64] = Gn;
    } else Ut = k[63], Gn = k[64];
    let af = p.visibleOptions.map((jt, Zp) => {
      let ef = jt.index === p.visibleFromIndex;
      let tf = jt.index === p.visibleToIndex - 1;
      let nf = p.visibleToIndex < u.length;
      let of = p.visibleFromIndex > 0;
      let sf = p.visibleFromIndex + Zp + 1;
      let rf = !_ && p.focusedValue === jt.value;
      let oa = p.value === jt.value;
      let lf = jt.disabled === !0;
      let ia = oa ? 2 : 0;
      let qn = II(jt.label);
      let wn = jt.label;
      let sa = Gn - 2 - Ut - ia;
      if (ie(qn) > sa) qn = ut(qn, sa), wn = qn;
      if (typeof wn === "string" && c && wn.includes(c)) {
        let rs = wn;
        let ra = rs.indexOf(c);
        wn = r(Q, {
          children: [ rs.slice(0, ra), e(n, {
            ...wt.highlightedText(),
            children: c
          }), rs.slice(ra + c.length) ]
        });
      }
      return {
        option: jt,
        index: sf,
        label: wn,
        labelWidth: 2 + Ut + ie(qn) + ia,
        isFocused: rf,
        isSelected: oa,
        isOptionDisabled: lf,
        shouldShowDownArrow: nf && tf,
        shouldShowUpArrow: of && ef
      };
    });
    const $t = wt.container();
    let Mt;
    if (k[72] !== Je || k[73] !== q || k[74] !== x || k[75] !== Lt || k[76] !== Gn) Mt = me => {
      if (me.option.type === "input") {
        return null;
      }
      let la = Gn - me.labelWidth;
      return r(Ji, {
        isFocused: me.isFocused,
        shouldShowDownArrow: me.shouldShowDownArrow,
        shouldShowUpArrow: me.shouldShowUpArrow,
        onClick: Je(me.option),
        hoverStyle: x,
        children: [ r(s, {
          flexDirection: "row",
          flexShrink: 0,
          children: [ e(n, {
            children: " "
          }), r(n, {
            dimColor: me.isOptionDisabled,
            color: me.isOptionDisabled ? void 0 : me.isSelected ? "success" : me.isFocused ? "suggestion" : void 0,
            children: [ !q && e(n, {
              dimColor: !0,
              children: `${me.index}.`.padEnd(Lt + 2)
            }), me.label ]
          }), me.isSelected && r(n, {
            children: [ " ", e(ct, {
              status: "success"
            }) ]
          }), la > 0 && e(n, {
            children: " ".repeat(la)
          }) ]
        }), e(s, {
          flexGrow: 1,
          marginLeft: 2,
          children: e(n, {
            wrap: "wrap",
            dimColor: me.option.descriptionColor === void 0 && (me.isOptionDisabled || me.option.dimDescription !== !1),
            color: me.isOptionDisabled ? me.option.descriptionColor : me.isSelected ? "success" : me.isFocused ? "suggestion" : me.option.descriptionColor,
            children: e(Uo, {
              children: me.option.description || " "
            })
          })
        }) ]
      }, String(me.option.value));
    }, k[72] = Je, k[73] = q, k[74] = x, k[75] = Lt, k[76] = Gn, k[77] = Mt; else Mt = k[77];
    return e(Tt, {
      container: $t,
      rows: Ke,
      hiddenBelow: at,
      children: af.map(Mt)
    });
  }
  const ls = Tt, $t = wt.container(), Mt = p.visibleOptions.map((z, aa) => {
    if (z.type === "input") {
      let uf = we.has(z.value) ? we.get(z.value) : z.initialValue || "";
      let df = z.index === p.visibleFromIndex;
      let cf = z.index === p.visibleToIndex - 1;
      let pf = p.visibleToIndex < u.length;
      let ff = p.visibleFromIndex > 0;
      let mf = p.visibleFromIndex + aa + 1;
      let hf = !_ && p.focusedValue === z.value;
      let bf = p.value === z.value;
      return e(fke, {
        option: z,
        onClick: Je(z),
        hoverStyle: x,
        isFocused: hf,
        isSelected: bf,
        shouldShowDownArrow: pf && cf,
        shouldShowUpArrow: ff && df,
        maxIndexWidth: Lt,
        index: mf,
        hideIndex: q,
        extraChromeWidth: fe,
        inputValue: uf,
        onInputChange: vf => {
          ft(gf => {
            let ua = new Map(gf);
            return ua.set(z.value, vf), ua;
          });
        },
        onSubmit: xf => {
          let If = g && Object.values(g).some(zp);
          if (xf.trim() || If || z.allowEmptySubmitToCancel) I?.(z.value); else D?.();
        },
        onExit: D,
        layout: "compact",
        showLabel: U,
        onOpenEditor: E,
        resetCursorOnUpdate: z.resetCursorOnUpdate,
        canPasteImage: B,
        onImagePaste: K,
        pastedContents: g,
        onRemoveImage: ue,
        imagesSelected: oe,
        selectedImageIndex: De,
        onImagesSelectedChange: Ce,
        onSelectedImageIndexChange: ne
      }, String(z.value));
    }
    let da = z.label;
    if (typeof z.label === "string" && c && z.label.includes(c)) {
      let as = z.label;
      let ca = as.indexOf(c);
      da = r(Q, {
        children: [ as.slice(0, ca), e(n, {
          ...wt.highlightedText(),
          children: c
        }), as.slice(ca + c.length) ]
      });
    }
    let yf = z.index === p.visibleFromIndex;
    let Sf = z.index === p.visibleToIndex - 1;
    let wf = p.visibleToIndex < u.length;
    let Of = p.visibleFromIndex > 0;
    let Cf = p.visibleFromIndex + aa + 1;
    let us = !_ && p.focusedValue === z.value;
    let ds = p.value === z.value;
    let Yn = z.disabled === !0;
    return r(jte, {
      isFocused: us,
      isSelected: ds,
      shouldShowDownArrow: wf && Sf,
      shouldShowUpArrow: Of && yf,
      onClick: Je(z),
      hoverStyle: x,
      children: [ r(s, {
        flexDirection: "row",
        flexShrink: 0,
        children: [ !q && e(n, {
          dimColor: !0,
          children: `${Cf}.`.padEnd(Lt + 2)
        }), r(n, {
          dimColor: Yn,
          color: Yn ? void 0 : ds ? "success" : us ? "suggestion" : void 0,
          children: [ da, U && z.description && r(n, {
            dimColor: Yn || z.dimDescription !== !1,
            children: [ " ", z.description ]
          }) ]
        }) ]
      }), !U && z.description && e(s, {
        flexShrink: 99,
        marginLeft: 2,
        children: e(n, {
          wrap: "wrap-trim",
          dimColor: Yn || z.dimDescription !== !1,
          color: Yn ? void 0 : ds ? "success" : us ? "suggestion" : void 0,
          children: e(Uo, {
            children: z.description
          })
        })
      }) ]
    }, String(z.value));
  });
  let pa;
  if (k[78] !== ls || k[79] !== at || k[80] !== Ke || k[81] !== $t || k[82] !== Mt) pa = e(ls, {
    container: $t,
    rows: Ke,
    hiddenBelow: at,
    children: Mt
  }), k[78] = ls, k[79] = at, k[80] = Ke, k[81] = $t, k[82] = Mt, k[83] = pa; else pa = k[83];
  return pa;
}

var Bl = 8, Ll = .6;

function k1t(o, t) {
  let i = t === void 0 ? "compact" : t, {rows: a} = is(Te()), l = i === "expanded" ? 3 : i === "compact" ? 1 : 2, f = Math.max(1, Math.floor((a - Bl) / l));
  return Math.min(o, f);
}

function Tt(o) {
  let f = w(7), {container: t, rows: i, hiddenBelow: a, children: l} = o, c;
  if (f[0] !== l || f[1] !== i) c = e(pke, {
    ...i,
    children: l
  }), f[0] = l, f[1] = i, f[2] = c; else c = f[2];
  let u;
  if (f[3] !== t || f[4] !== a || f[5] !== c) u = r(s, {
    ...t,
    children: [ c, a ]
  }), f[3] = t, f[4] = a, f[5] = c, f[6] = u; else u = f[6];
  return u;
}

function Ji(o) {
  let I = w(24), {isFocused: t, shouldShowDownArrow: i, shouldShowUpArrow: a, onClick: l, hoverStyle: f, children: c} = o, u = l !== void 0, [b, d] = Pze(u), m = uke(f), D = u && b && m === "inverse", O;
  if (I[0] !== t) O = {
    line: 0,
    column: 0,
    active: t
  }, I[0] = t, I[1] = O; else O = I[1];
  let L = Wv(O);
  const j = u && b && m === "tint" ? PA : void 0;
  let h;
  if (I[2] !== u || I[3] !== d) h = u ? () => d(!0) : void 0, I[2] = u, I[3] = d, 
  I[4] = h; else h = I[4];
  let v;
  if (I[5] !== u || I[6] !== d) v = u ? () => d(!1) : void 0, I[5] = u, I[6] = d, 
  I[7] = v; else v = I[7];
  let x;
  if (I[8] !== u || I[9] !== m || I[10] !== b || I[11] !== D || I[12] !== t || I[13] !== i || I[14] !== a) x = e(s, {
    flexShrink: 0,
    children: t ? e(n, {
      color: "suggestion",
      inverse: D,
      children: te.pointer
    }) : i ? e(n, {
      dimColor: !0,
      inverse: D,
      children: te.arrowDown
    }) : a ? e(n, {
      dimColor: !0,
      inverse: D,
      children: te.arrowUp
    }) : u && b && m === "pointer" ? e(n, {
      dimColor: !0,
      children: te.pointer
    }) : e(n, {
      inverse: D,
      children: " "
    })
  }), I[8] = u, I[9] = m, I[10] = b, I[11] = D, I[12] = t, I[13] = i, I[14] = a, I[15] = x; else x = I[15];
  let A;
  if (I[16] !== c || I[17] !== L || I[18] !== l || I[19] !== j || I[20] !== h || I[21] !== v || I[22] !== x) A = r(s, {
    ref: L,
    flexDirection: "row",
    flexShrink: 0,
    backgroundColor: j,
    onClick: l,
    onMouseEnter: h,
    onMouseLeave: v,
    children: [ x, c ]
  }), I[16] = c, I[17] = L, I[18] = l, I[19] = j, I[20] = h, I[21] = v, I[22] = x, 
  I[23] = A; else A = I[23];
  return A;
}

export { PA, uke, pke, Pze, IA, Ua, By, Kd, v1t, hs, rJ, o9n, s9n, jte, fke, Sc, i9n, E1t, zi, Xe, k1t };
