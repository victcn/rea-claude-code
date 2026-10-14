// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t1, V9t } from "./chunk-2kzvcfy0.js";

import { Rge } from "./chunk-150qmpyg.js";

import { w } from "./chunk-9rj1xaxr.js";

import { wB, Inr, WI, hvt, Mnr } from "./chunk-k48604rx.js";

import { bs, mK } from "./chunk-zzhmvqjt.js";

import { e } from "./chunk-xx3xgkvz.js";

import { Bhe, gvt } from "./chunk-7de0e9qj.js";

import { Kt, ae, Ae, P, Z, y, xt, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

F();

var Ue = () => Ae(Rge), TM = Ue;

F();

var M = Object.freeze({}), k = Kt(M);

function A_t(o) {
  let a = w(6), {storageV5: r, credentials: s, children: n} = o, t;
  if (a[0] !== s || a[1] !== r) t = r === void 0 && s === void 0 ? M : {
    storageV5: r,
    credentials: s
  }, a[0] = s, a[1] = r, a[2] = t; else t = a[2];
  let C = t, q;
  if (a[3] !== n || a[4] !== C) q = e(k.Provider, {
    value: C,
    children: n
  }), a[3] = n, a[4] = C, a[5] = q; else q = a[5];
  return q;
}

function Pe() {
  return Ae(k);
}

var j = "dark", i = Kt({
  themeSetting: j,
  setThemeSetting: () => {},
  setPreviewTheme: () => {},
  cancelPreview: () => {},
  currentTheme: j,
  resolvedTheme: t1(j),
  activeThemeOverrides: void 0,
  customThemes: [],
  activeCustomTheme: void 0,
  reloadCustomThemes: () => Promise.resolve(),
  setPreviewOverrides: () => {}
});

function ogn() {
  return bs("theme", "dark").value;
}

function sgn(o) {
  let t = w(46), {children: r, initialState: s, onThemeSave: n} = o, {storageV5: a} = Pe(), C;
  if (t[0] !== n || t[1] !== a) C = q => n ? n(q) : mK("theme", q, a), t[0] = n, t[1] = a, 
  t[2] = C; else C = t[2];
  let I = C, [T, rt] = y(s ?? ogn), [it, J] = y(null), [nt, st] = y(null), [K, mt] = y(Inr), ve;
  if (t[3] === S) ve = wB(), t[3] = ve; else ve = t[3];
  let le = ve.pluginThemes, Q = xt(le.subscribe, le.getState), de;
  if (t[4] !== Q || t[5] !== K) de = [ ...K, ...Q ], t[4] = Q, t[5] = K, t[6] = de; else de = t[6];
  let u = de, Se;
  if (t[7] !== s || t[8] !== T) Se = () => (s ?? T) === "auto" ? Bhe() : "dark", t[7] = s, 
  t[8] = T, t[9] = Se; else Se = t[9];
  let [ot, O] = y(Se), m = it ?? T, ge;
  if (t[10] !== a) ge = () => hvt(a).then(mt), t[10] = a, t[11] = ge; else ge = t[11];
  let h = ge, pe, fe;
  if (t[12] !== h) pe = () => (h(), Mnr(() => void h())), fe = [ h ], t[12] = h, t[13] = pe, 
  t[14] = fe; else pe = t[13], fe = t[14];
  P(pe, fe);
  let {internal_querier: V} = TM(), we, Ce;
  if (t[15] !== m) we = () => {
    if (m !== "auto") {
      return;
    }
    return O(Bhe()), gvt(() => O(Bhe()));
  }, Ce = [ m ], t[15] = m, t[16] = we, t[17] = Ce; else we = t[16], Ce = t[17];
  P(we, Ce);
  let ye, Oe;
  if (t[18] !== m || t[19] !== V) ye = () => {
    if (m !== "auto" || !V) {
      return;
    }
    let Ve;
    let Re = !1;
    return import("./chunk-5hpq0ztv.js").then(H => {
      let {watchSystemTheme: at} = H;
      if (Re) {
        return;
      }
      Ve = at(V, O);
    }), () => {
      Re = !0, Ve?.();
    };
  }, Oe = [ m, V ], t[18] = m, t[19] = V, t[20] = ye, t[21] = Oe; else ye = t[20], 
  Oe = t[21];
  P(ye, Oe);
  let H;
  if (t[22] !== m) H = WI(m), t[22] = m, t[23] = H; else H = t[23];
  let R = H, ke;
  if (t[24] !== R || t[25] !== u) ke = R ? u.find(ht => ht.slug === R) : void 0, t[24] = R, 
  t[25] = u, t[26] = ke; else ke = t[26];
  let v = ke, l = v ? v.base : m === "auto" ? ot : R ? "dark" : m, d = nt ?? v?.overrides, xe;
  if (t[27] !== d || t[28] !== l) xe = V9t(t1(l), d), t[27] = d, t[28] = l, t[29] = xe; else xe = t[29];
  let W = xe, _e;
  if (t[30] === S) _e = () => J(null), t[30] = _e; else _e = t[30];
  let ct = _e, U;
  if (t[31] !== I) U = X => {
    if (rt(X), J(null), X === "auto") O(Bhe());
    I(X);
  }, t[31] = I, t[32] = U; else U = t[32];
  let Ne;
  if (t[33] === S) Ne = be => {
    if (J(be), be === "auto") O(Bhe());
  }, t[33] = Ne; else Ne = t[33];
  let qe;
  if (t[34] !== v || t[35] !== d || t[36] !== l || t[37] !== u || t[38] !== h || t[39] !== W || t[40] !== U || t[41] !== T) qe = {
    themeSetting: T,
    setThemeSetting: U,
    setPreviewTheme: Ne,
    cancelPreview: ct,
    currentTheme: l,
    resolvedTheme: W,
    activeThemeOverrides: d,
    customThemes: u,
    activeCustomTheme: v,
    reloadCustomThemes: h,
    setPreviewOverrides: st
  }, t[34] = v, t[35] = d, t[36] = l, t[37] = u, t[38] = h, t[39] = W, t[40] = U, 
  t[41] = T, t[42] = qe; else qe = t[42];
  let ee = qe, He;
  if (t[43] !== r || t[44] !== ee) He = e(i.Provider, {
    value: ee,
    children: r
  }), t[43] = r, t[44] = ee, t[45] = He; else He = t[45];
  return He;
}

function yr() {
  let s = w(3), {currentTheme: o, setThemeSetting: r} = Ae(i), n;
  if (s[0] !== o || s[1] !== r) n = [ o, r ], s[0] = o, s[1] = r, s[2] = n; else n = s[2];
  return n;
}

function sJ() {
  return Ae(i).themeSetting;
}

function ign() {
  let s = w(3), {setPreviewTheme: o, cancelPreview: r} = Ae(i), n;
  if (s[0] !== r || s[1] !== o) n = {
    setPreviewTheme: o,
    cancelPreview: r
  }, s[0] = r, s[1] = o, s[2] = n; else n = s[2];
  return n;
}

function _S() {
  return Ae(i).resolvedTheme;
}

function agn() {
  return Ae(i).activeThemeOverrides;
}

function Age() {
  let a = w(5), {customThemes: o, activeCustomTheme: r, reloadCustomThemes: s, setPreviewOverrides: n} = Ae(i), t;
  if (a[0] !== r || a[1] !== o || a[2] !== s || a[3] !== n) t = {
    customThemes: o,
    activeCustomTheme: r,
    reloadCustomThemes: s,
    setPreviewOverrides: n
  }, a[0] = r, a[1] = o, a[2] = s, a[3] = n, a[4] = t; else t = a[4];
  return t;
}

export { A_t, Pe, TM, ogn, sgn, yr, sJ, ign, _S, agn, Age };
