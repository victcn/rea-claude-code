// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { yS, pl, is, Ege, H7e } from "./chunk-1pxjahnn.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { cB } from "./chunk-fj1a15yf.js";

import { ie } from "./chunk-yxennhe9.js";

import { VC } from "./chunk-bdb1ansy.js";

import { s, n, Wv, hke, oJ, ti } from "./chunk-3vw306fv.js";

import { ge } from "./chunk-07cck4g7.js";

import { nn } from "./chunk-ytac37d4.js";

import { Lb } from "./chunk-1jbdb8dv.js";

import { Uv } from "./chunk-kdanfg27.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { Kt, ae, Ae, Zt, Z, Dh, R, y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function ko(dt) {
  return [ dt.props.id ?? dt.props.title, dt.props.title ];
}

function xo(Qo) {
  return Qo + 1;
}

function To(Xo, d) {
  let [, xn] = d;
  return Xo + (xn ? ie(xn) : 0) + 2 + 1;
}

function Fo(x) {
  return x + 1;
}

function Co(H) {
  return H - 1;
}

var m = Kt({
  selectedTab: void 0,
  width: void 0,
  headerFocused: !1,
  focusHeader: () => {},
  blurHeader: () => {},
  registerOptIn: () => () => {},
  registerNavigationOwner: () => () => {}
});

function Hb(d) {
  let h = w(52), {title: l, color: a, defaultTab: c, children: u, hidden: t, useFullWidth: b, selectedTab: x, onTabChange: H, banner: v, disableNavigation: pe, initialHeaderFocused: I, contentHeight: D, stableHeight: ne, navFromContent: Ge} = d, L = I === void 0 ? !0 : I, p = ne === void 0 ? !1 : ne, Gt = Ge === void 0 ? !1 : Ge, {columns: me} = Te(), g = u.map(ko), ve = c ? g.findIndex(oe => c === oe[0]) : 0, Ue = x !== void 0, [Ho, Ro] = y(ve !== -1 ? ve : 0), Ut = Ue ? g.findIndex(yo => yo[0] === x) : -1, N = Ue ? Ut !== -1 ? Ut : 0 : Ho, we = Ae(yS), O = Ege(), M = H7e(), Ye = R(null), [ke, So] = y(0), re = R(null), [xe, Io] = y(1), Yt;
  if (h[0] !== ke || h[1] !== xe) Yt = () => {
    let _t = Ye.current ? ti(Ye.current).height : 0;
    if (_t !== ke) So(_t);
    let qt = re.current ? Math.max(1, ti(re.current).height) : 1;
    if (qt !== xe) Io(qt);
  }, h[0] = ke, h[1] = xe, h[2] = Yt; else Yt = h[2];
  Zt(Yt);
  let le = (t ? 0 : xe + 1) + ke, zt, Jt;
  if (h[3] !== M || h[4] !== le) zt = () => {
    if (!M) {
      return;
    }
    return M(le), () => M(null);
  }, Jt = [ M, le ], h[3] = M, h[4] = le, h[5] = zt, h[6] = Jt; else zt = h[5], Jt = h[6];
  Zt(zt, Jt);
  let Qt;
  if (h[7] === S) Qt = {
    rows: 0,
    columns: 0
  }, h[7] = Qt; else Qt = h[7];
  let {rows: Do} = is(Qt), W = M !== null && O !== null, _e = O?.attach, Fe = W ? Do - le : void 0, Xt;
  if (h[8] !== we || h[9] !== W) Xt = we && W ? {
    ...we,
    claimScrollBox: null
  } : null, h[8] = we, h[9] = W, h[10] = Xt; else Xt = h[10];
  let qe = Xt, wr = !0, de = R(null), ze = R(null), {focus: B, activeElement: j, focusDirection: Je, blur: Qe} = hke(), [G, se] = y(L), $t;
  if (h[11] !== j || h[12] !== B) $t = () => {
    if (!0 && re.current) B(re.current); else if (!1 && de.current) {
      if (j && j !== de.current && cB(j, de.current)) ze.current = j;
      B(de.current);
    }
    se(!0);
  }, h[11] = j, h[12] = B, h[13] = $t; else $t = h[13];
  let en = $t, tn;
  if (h[14] !== Qe || h[15] !== B) tn = on => {
    if (!0 && on) B(on); else Qe();
    ze.current = null, se(!1);
  }, h[14] = Qe, h[15] = B, h[16] = tn; else tn = h[16];
  let No = tn, [E, Oo] = te(), [Mo, Wo] = te(), A = pe || Mo, rn = G || !E, Xe = R(null), Bo = oJ(Xe), Eo = !0 && !E ? !Bo : rn, [an, Ao] = Dh(xo, 0), ln = R(null), dn;
  if (h[17] === S) dn = () => {
    ze.current = null;
  }, h[17] = dn; else dn = h[17];
  Zt(dn, [ N ]);
  let un = (Ze, sn) => {
    let Po = sn === void 0 ? !1 : sn;
    ln.current = {
      epoch: an,
      index: Ze
    }, Ao();
    let cn = g[Ze]?.[0];
    if (Ue && H && cn) H(cn); else Ro(Ze);
    if (Po) {
      return;
    }
    en();
  }, Ce = (Vo, hn) => {
    let Ko = hn === void 0 ? !1 : hn;
    let fn = ln.current;
    let Lo = fn?.epoch === an ? fn.index : N;
    un((Lo + g.length + Vo) % g.length, Ko);
  };
  const $e = !t && !A && rn;
  let bn;
  if (h[18] !== $e) bn = {
    context: "Tabs",
    isActive: $e
  }, h[18] = $e, h[19] = bn; else bn = h[19];
  nn({
    "tabs:next": () => Ce(1),
    "tabs:previous": () => Ce(-1)
  }, bn);
  let pn;
  if (h[20] !== A || h[21] !== Je || h[22] !== G || h[23] !== t || h[24] !== E) pn = f => {
    if (t || A) {
      return;
    }
    if (!G) {
      if (f.key === "left" || f.key === "right" || f.key === "tab" || E && (f.key === "up" || f.key === "down")) f.preventDefault();
      return;
    }
    if (f.key === "left" || f.key === "right" || f.key === "tab") f.preventDefault(); else if (f.key === "down" && E) f.preventDefault(), 
    Je("down"), se(!1);
  }, h[20] = A, h[21] = Je, h[22] = G, h[23] = t, h[24] = E, h[25] = pn; else pn = h[25];
  let mn = pn;
  const et = Gt && !G && E && !t && !A;
  let gn;
  if (h[26] !== et) gn = {
    context: "Tabs",
    isActive: et
  }, h[26] = et, h[27] = gn; else gn = h[27];
  nn({
    "tabs:next": () => Ce(1, !0),
    "tabs:previous": () => Ce(-1, !0)
  }, gn);
  let jo = l ? ie(l) + 1 : 0, Go = g.reduce(To, 0), Uo = jo + Go, vn = b ? Math.max(0, me - Uo) : 0, ce = b ? me : void 0;
  const Yo = {
    selectedTab: g[N][0],
    width: ce,
    headerFocused: G,
    focusHeader: en,
    blurHeader: No,
    registerOptIn: Oo,
    registerNavigationOwner: Wo
  }, tt = s, nt = !0 ? void 0 : de, _o = "column", ot = !0 ? void 0 : 0, rt = !0 ? void 0 : L, it = !0 ? void 0 : mn, at = O ? 0 : void 0, lt = !t && r(s, {
    ref: re,
    tabIndex: !0 ? 0 : void 0,
    autoFocus: !0 ? L : void 0,
    onFocus: !0 ? () => se(!0) : void 0,
    onBlur: !0 ? () => se(!1) : void 0,
    onKeyDown: !0 ? mn : void 0,
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 1,
    flexShrink: O ? 0 : void 0,
    alignSelf: !0 && !b ? "flex-start" : void 0,
    children: [ l !== null && e(s, {
      flexShrink: 0,
      children: e(n, {
        bold: !0,
        color: a,
        children: l
      })
    }), g.map((qo, wn) => {
      let [zo, Jo] = qo;
      return e(je, {
        title: Jo,
        isCurrent: N === wn,
        headerFocused: Eo && !A,
        color: a ?? (!0 ? "suggestion" : void 0),
        onClick: A ? void 0 : () => un(wn)
      }, zo);
    }), vn > 0 && e(n, {
      children: " ".repeat(vn)
    }) ]
  });
  let He;
  if (h[28] !== v) He = v != null && e(s, {
    ref: Ye,
    flexDirection: "column",
    flexShrink: 0,
    children: v
  }), h[28] = v, h[29] = He; else He = h[29];
  let Re;
  if (h[30] !== _e || h[31] !== qe || h[32] !== u || h[33] !== D || h[34] !== ce || h[35] !== t || h[36] !== O || h[37] !== W || h[38] !== Fe || h[39] !== N || h[40] !== p) Re = W ? e(s, {
    ref: Xe,
    width: ce,
    marginTop: t ? 0 : 1,
    flexShrink: 0,
    children: e(VC, {
      ref: _e,
      flexDirection: "column",
      flexShrink: 0,
      height: p ? Fe : void 0,
      maxHeight: p ? void 0 : Fe,
      stickyScroll: !1,
      children: e(yS, {
        value: qe,
        children: u
      })
    }, N)
  }) : e(s, {
    ref: Xe,
    width: ce,
    marginTop: t ? 0 : 1,
    height: p ? void 0 : D,
    minHeight: p ? D : void 0,
    overflowY: D !== void 0 && !p ? "hidden" : void 0,
    flexShrink: O ? 0 : void 0,
    children: u
  }), h[30] = _e, h[31] = qe, h[32] = u, h[33] = D, h[34] = ce, h[35] = t, h[36] = O, 
  h[37] = W, h[38] = Fe, h[39] = N, h[40] = p, h[41] = Re; else Re = h[41];
  let kn;
  if (h[42] !== tt || h[43] !== nt || h[44] !== ot || h[45] !== rt || h[46] !== it || h[47] !== at || h[48] !== lt || h[49] !== He || h[50] !== Re) kn = r(tt, {
    ref: nt,
    flexDirection: _o,
    tabIndex: ot,
    autoFocus: rt,
    onKeyDown: it,
    flexShrink: at,
    children: [ lt, He, Re ]
  }), h[42] = tt, h[43] = nt, h[44] = ot, h[45] = rt, h[46] = it, h[47] = at, h[48] = lt, 
  h[49] = He, h[50] = Re, h[51] = kn; else kn = h[51];
  return e(m.Provider, {
    value: Yo,
    children: kn
  });
}

function je(d) {
  let I = w(18), {title: l, isCurrent: a, headerFocused: c, color: u, onClick: t} = d, [b, x] = y(!1), H = Lb(), v = t !== void 0;
  const pe = a && c;
  let D;
  if (I[0] !== pe) D = {
    line: 0,
    column: 1,
    active: pe
  }, I[0] = pe, I[1] = D; else D = I[1];
  let ne = Wv(D), Ge = ge.level === 0, L = u && a && c && !Ge, p;
  if (I[2] !== t || I[3] !== H) p = t === void 0 ? void 0 : Gt => {
    if (H(Gt)) {
      return;
    }
    t();
  }, I[2] = t, I[3] = H, I[4] = p; else p = I[4];
  let me, g;
  if (I[5] === S) me = () => x(!0), g = () => x(!1), I[5] = me, I[6] = g; else me = I[5], 
  g = I[6];
  let oe;
  if (I[7] !== v || I[8] !== u || I[9] !== L || I[10] !== b || I[11] !== a || I[12] !== l) oe = L ? e(Uv, {
    color: u,
    bold: !0,
    padded: !0,
    children: l
  }) : r(n, {
    inverse: a,
    bold: a,
    underline: b && v,
    children: [ " ", l, " " ]
  }), I[7] = v, I[8] = u, I[9] = L, I[10] = b, I[11] = a, I[12] = l, I[13] = oe; else oe = I[13];
  let ve;
  if (I[14] !== ne || I[15] !== p || I[16] !== oe) ve = e(s, {
    ref: ne,
    flexShrink: 0,
    onClick: p,
    onMouseEnter: me,
    onMouseLeave: g,
    children: oe
  }), I[14] = ne, I[15] = p, I[16] = oe, I[17] = ve; else ve = I[17];
  return ve;
}

function Ga(d) {
  let H = w(4), {title: l, id: a, children: c} = d, {selectedTab: u, width: t} = Ae(m), b = pl();
  if (u !== (a ?? l)) {
    return null;
  }
  const x = b ? 0 : void 0;
  let v;
  if (H[0] !== c || H[1] !== x || H[2] !== t) v = e(s, {
    width: t,
    flexShrink: x,
    children: c
  }), H[0] = c, H[1] = x, H[2] = t, H[3] = v; else v = H[3];
  return v;
}

function t_t() {
  let {width: d} = Ae(m);
  return d;
}

function Uy() {
  let u = w(6), {headerFocused: d, focusHeader: l, blurHeader: a, registerOptIn: c} = Ae(m), t;
  if (u[0] !== c) t = [ c ], u[0] = c, u[1] = t; else t = u[1];
  Zt(c, t);
  let b;
  if (u[2] !== a || u[3] !== l || u[4] !== d) b = {
    headerFocused: d,
    focusHeader: l,
    blurHeader: a
  }, u[2] = a, u[3] = l, u[4] = d, u[5] = b; else b = u[5];
  return b;
}

function te() {
  let a = w(3), [d, l] = y(0), c;
  if (a[0] === S) c = () => (l(Fo), () => l(Co)), a[0] = c; else c = a[0];
  let u = c;
  const t = d > 0;
  let b;
  if (a[1] !== t) b = [ t, u ], a[1] = t, a[2] = b; else b = a[2];
  return b;
}

function _7e() {
  let l = w(2), {registerNavigationOwner: d} = Ae(m), a;
  if (l[0] !== d) a = [ d ], l[0] = d, l[1] = a; else a = l[1];
  Zt(d, a);
}

export { Hb, Ga, t_t, Uy, _7e };
