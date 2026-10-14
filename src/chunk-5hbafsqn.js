// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { oy } from "./chunk-18n5kthz.js";

import { MX, c6 } from "./chunk-5wbhf1bk.js";

import { w } from "./chunk-9rj1xaxr.js";

import { st, s, n } from "./chunk-3vw306fv.js";

import { PA, uke, pke, o9n, jte, fke, Sc, i9n, E1t, k1t } from "./chunk-yrpmvsj8.js";

import { fa } from "./chunk-a3sz08kp.js";

import { te } from "./chunk-48xcyvwy.js";

import { Lb, S_t } from "./chunk-1jbdb8dv.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { ae, R, y, F } from "./chunk-cpyd3eya.js";

F();

F();

import { isDeepStrictEqual as ze } from "util";

function de({isDisabled: o = !1, visibleOptionCount: G = 5, options: u, defaultValue: d = [], onChange: W, onCancel: P, onFocus: B, submitButtonText: T, onSubmit: p, onDownFromLastItem: h, hideIndexes: L = !1, refuseSubmitFocus: A}) {
  let [X, H, k] = Sc(d), [N, V, j] = Sc(!1), [i, be] = y(u);
  if (u !== i && !ze(u, i)) H(d), be(u);
  let [I, J] = y(() => {
    let t = new Map;
    return u.forEach(l => {
      if (l.type === "input" && l.initialValue) t.set(l.value, l.initialValue);
    }), t;
  }), E = ae(t => {
    let l = typeof t === "function" ? t(k()) : t;
    if (W?.(l) === !1) return;
    H(l);
  }, [ k, H, W ]), C = ae(t => {
    if (u.find(l => l.value === t)?.disabled === !0) return;
    E(l => l.includes(t) ? l.filter(c => c !== t) : [ ...l, t ]);
  }, [ u, E ]), f = i9n({
    visibleOptionCount: G,
    options: u,
    onFocus: B
  });
  fa("multi-select");
  let z = ae((t, l) => {
    let c = u.find(g => g.value === t);
    if (c?.type === "input" && c.onChange(l) === !1) return;
    J(g => {
      let D = new Map(g);
      return D.set(t, l), D;
    }), E(g => {
      if (l) {
        if (!g.includes(t)) return [ ...g, t ];
        return g;
      } else return g.filter(D => D !== t);
    });
  }, [ u, E ]);
  return {
    ...f,
    focusOption: t => {
      V(!1), f.focusOption(t);
    },
    scrollViewport: t => {
      let l = f.getFocusedValue(), c = f.scrollViewport(t);
      if (f.getFocusedValue() !== l) V(!1);
      return c;
    },
    selectedValues: X,
    getSelectedValues: k,
    inputValues: I,
    isSubmitFocused: N,
    updateInputValue: z,
    toggleValue: C,
    onCancel: P,
    handleKeyDown: t => {
      if (o) return;
      let l = MX(t.key), c = f.getFocusedValue(), D = u.find(M => M.value === c)?.type === "input", v = j();
      if (D) {
        if (!(t.key === "up" || t.key === "down" || t.key === "escape" || t.key === "tab" || t.key === "return" || t.ctrl && (t.key === "n" || t.key === "p" || t.key === "return"))) return;
      }
      let x = u.at(-1)?.value;
      if (t.key === "tab" && !t.shift) {
        if (t.preventDefault(), T && p && c === x && !v) {
          if (A?.()) return;
          V(!0);
        } else if (!v) f.focusNextOption();
        return;
      }
      if (t.key === "tab" && t.shift) {
        if (t.preventDefault(), T && p && v) V(!1), f.focusOption(x); else f.focusPreviousOption();
        return;
      }
      if (t.key === "down" || t.ctrl && t.key === "n" || !t.ctrl && !t.shift && t.key === "j") {
        if (t.preventDefault(), v && h) h(); else if (T && p && c === x && !v) {
          if (A?.()) return;
          V(!0);
        } else if (!T && h && c === x) h(); else if (!v) f.focusNextOption();
        return;
      }
      if (t.key === "up" || t.ctrl && t.key === "p" || !t.ctrl && !t.shift && t.key === "k") {
        if (t.preventDefault(), T && p && v) V(!1), f.focusOption(x); else f.focusPreviousOption();
        return;
      }
      if (t.key === "pagedown") {
        t.preventDefault(), f.focusNextPage();
        return;
      }
      if (t.key === "pageup") {
        t.preventDefault(), f.focusPreviousPage();
        return;
      }
      if (t.key === "return" || c6(t.key) === " ") {
        if (t.preventDefault(), t.ctrl && t.key === "return" && D && p) {
          p(k());
          return;
        }
        if (t.key === "return" && v && p) {
          p(k());
          return;
        }
        if (t.key === "return" && !T && p) {
          p(k());
          return;
        }
        if (!v && c !== void 0) C(c);
        return;
      }
      if (!L && /^[0-9]$/.test(l)) {
        t.preventDefault();
        let M = parseInt(l) - 1;
        if (M >= 0 && M < u.length) C(u[M].value);
        return;
      }
      if (t.key === "escape") P(), t.stopImmediatePropagation();
    }
  };
}

function ct(yt) {
  return yt.description;
}

function ft() {}

function Xj(o) {
  let u = w(12);
  if (st()) {
    let d;
    if (u[0] !== o.defaultValue || u[1] !== o.isDisabled || u[2] !== o.onCancel || u[3] !== o.onChange || u[4] !== o.onFocus || u[5] !== o.onSubmit || u[6] !== o.options || u[7] !== o.refuseInput || u[8] !== o.submitButtonText) d = e(o9n, {
      options: o.options,
      defaultValue: o.defaultValue,
      onChange: o.onChange,
      onSubmit: o.onSubmit,
      onFocus: o.onFocus,
      onCancel: o.onCancel,
      isDisabled: o.isDisabled,
      submitButtonText: o.submitButtonText,
      refuseInput: o.refuseInput
    }), u[0] = o.defaultValue, u[1] = o.isDisabled, u[2] = o.onCancel, u[3] = o.onChange, 
    u[4] = o.onFocus, u[5] = o.onSubmit, u[6] = o.options, u[7] = o.refuseInput, u[8] = o.submitButtonText, 
    u[9] = d; else d = u[9];
    return d;
  }
  let d;
  if (u[10] !== o) d = e(me, {
    ...o
  }), u[10] = o, u[11] = d; else d = u[11];
  return d;
}

function me(o) {
  let I = w(68), {isDisabled: G, visibleOptionCount: u, options: d, defaultValue: W, onCancel: P, onChange: B, onFocus: T, submitButtonText: p, onSubmit: h, onDownFromLastItem: L, onOpenEditor: A, hideIndexes: X, canPasteImage: H, onImagePaste: k, pastedContents: N, onRemoveImage: V, refuseSubmitFocus: j} = o, i = G === void 0 ? !1 : G, be = u === void 0 ? 5 : u, J;
  if (I[0] !== W) J = W === void 0 ? [] : W, I[0] = W, I[1] = J; else J = I[1];
  let E = J, C = X === void 0 ? !1 : X, f = d.some(ct);
  const z = k1t(be, f ? "compact-vertical" : "compact");
  let ve;
  if (I[2] !== E || I[3] !== C || I[4] !== i || I[5] !== P || I[6] !== B || I[7] !== L || I[8] !== T || I[9] !== h || I[10] !== d || I[11] !== j || I[12] !== p || I[13] !== z) ve = {
    isDisabled: i,
    visibleOptionCount: z,
    options: d,
    defaultValue: E,
    onChange: B,
    onCancel: P,
    onFocus: T,
    submitButtonText: p,
    onSubmit: h,
    onDownFromLastItem: L,
    hideIndexes: C,
    refuseSubmitFocus: j
  }, I[2] = E, I[3] = C, I[4] = i, I[5] = P, I[6] = B, I[7] = L, I[8] = T, I[9] = h, 
  I[10] = d, I[11] = j, I[12] = p, I[13] = z, I[14] = ve; else ve = I[14];
  let t = de(ve), l = R(null);
  oy(l, !i);
  let [c, g] = y(!1), D = uke(), v = !i && c && D === "inverse", x = Lb(), M = S_t(), Re;
  if (I[15] !== i || I[16] !== d.length || I[17] !== M || I[18] !== t.scrollViewport || I[19] !== t.visibleFromIndex || I[20] !== t.visibleToIndex) Re = {
    isDisabled: i,
    visibleFromIndex: t.visibleFromIndex,
    visibleToIndex: t.visibleToIndex,
    optionCount: d.length,
    scrollViewport: t.scrollViewport,
    shouldDropWheel: M
  }, I[15] = i, I[16] = d.length, I[17] = M, I[18] = t.scrollViewport, I[19] = t.visibleFromIndex, 
  I[20] = t.visibleToIndex, I[21] = Re; else Re = I[21];
  let he = E1t(Re), We;
  if (I[22] !== i || I[23] !== x || I[24] !== t) We = Q => i || Q.disabled === !0 ? void 0 : mt => {
    if (x(mt)) {
      return;
    }
    if (Q.type === "input") t.focusOption(Q.value); else t.toggleValue(Q.value);
  }, I[22] = i, I[23] = x, I[24] = t, I[25] = We; else We = I[25];
  let Y = We, Z, ee, oe, ie, ne, se, U;
  if (I[26] !== H || I[27] !== Y || I[28] !== C || I[29] !== i || I[30] !== P || I[31] !== k || I[32] !== A || I[33] !== V || I[34] !== d.length || I[35] !== N || I[36] !== he || I[37] !== t) {
    let He = d.length.toString().length;
    ee = s;
    ne = "column";
    se = l;
    if (I[45] !== i || I[46] !== t.handleKeyDown) U = i ? {} : {
      tabIndex: 0,
      onKeyDown: t.handleKeyDown
    }, I[45] = i, I[46] = t.handleKeyDown, I[47] = U; else U = I[47];
    Z = pke;
    oe = he;
    ie = t.visibleOptions.map((b, bt) => {
      let ge = !i && t.focusedValue === b.value && !t.isSubmitFocused;
      let re = t.selectedValues.includes(b.value);
      let Ae = b.index === t.visibleFromIndex;
      let Ke = b.index === t.visibleToIndex - 1;
      let Be = t.visibleToIndex < d.length;
      let Le = t.visibleFromIndex > 0;
      let Ne = t.visibleFromIndex + bt + 1;
      if (b.type === "input") {
        let vt = t.inputValues.get(b.value) || "";
        return e(s, {
          flexDirection: "column",
          children: e(fke, {
            option: b,
            onClick: Y(b),
            isFocused: ge,
            isSelected: !1,
            shouldShowDownArrow: Be && Ke,
            shouldShowUpArrow: Le && Ae,
            maxIndexWidth: He,
            index: Ne,
            inputValue: vt,
            onInputChange: ht => {
              t.updateInputValue(b.value, ht);
            },
            onSubmit: ft,
            onExit: () => {
              P();
            },
            layout: "compact",
            onOpenEditor: A,
            canPasteImage: H,
            onImagePaste: k,
            pastedContents: N,
            onRemoveImage: V,
            extraChromeWidth: 4,
            children: r(n, {
              color: re ? "success" : void 0,
              children: [ "[", re ? te.tick : " ", "]", " " ]
            })
          })
        }, String(b.value));
      }
      return e(s, {
        flexDirection: "column",
        children: r(jte, {
          isFocused: ge,
          isSelected: !1,
          shouldShowDownArrow: Be && Ke,
          shouldShowUpArrow: Le && Ae,
          onClick: Y(b),
          children: [ !C && e(s, {
            flexShrink: 0,
            children: e(n, {
              dimColor: !0,
              children: `${Ne}.`.padEnd(He)
            })
          }), e(s, {
            flexShrink: 0,
            children: r(n, {
              color: re ? "success" : void 0,
              children: [ "[", re ? te.tick : " ", "]" ]
            })
          }), r(s, {
            flexDirection: "column",
            children: [ e(n, {
              color: ge ? "suggestion" : void 0,
              children: b.label
            }), b.description && e(n, {
              color: "inactive",
              children: b.description
            }) ]
          }) ]
        })
      }, String(b.value));
    });
    I[26] = H, I[27] = Y, I[28] = C, I[29] = i, I[30] = P, I[31] = k, I[32] = A, I[33] = V, 
    I[34] = d.length, I[35] = N, I[36] = he, I[37] = t, I[38] = Z, I[39] = ee, I[40] = oe, 
    I[41] = ie, I[42] = ne, I[43] = se, I[44] = U;
  } else Z = I[38], ee = I[39], oe = I[40], ie = I[41], ne = I[42], se = I[43], U = I[44];
  let le;
  if (I[48] !== Z || I[49] !== oe || I[50] !== ie) le = e(Z, {
    ...oe,
    children: ie
  }), I[48] = Z, I[49] = oe, I[50] = ie, I[51] = le; else le = I[51];
  let ue;
  if (I[52] !== i || I[53] !== h || I[54] !== x || I[55] !== t || I[56] !== p || I[57] !== D || I[58] !== c || I[59] !== v) ue = p && h && r(s, {
    marginTop: 0,
    gap: 1,
    onClick: i ? void 0 : gt => {
      if (x(gt)) {
        return;
      }
      h(t.getSelectedValues());
    },
    backgroundColor: !i && c && D === "tint" ? PA : void 0,
    onMouseEnter: () => g(!0),
    onMouseLeave: () => g(!1),
    children: [ !i && t.isSubmitFocused ? e(n, {
      color: "suggestion",
      inverse: v,
      children: te.pointer
    }) : e(n, {
      inverse: v,
      children: " "
    }), e(s, {
      marginLeft: 3,
      children: e(n, {
        color: !i && t.isSubmitFocused ? "suggestion" : void 0,
        bold: !0,
        children: p
      })
    }) ]
  }), I[52] = i, I[53] = h, I[54] = x, I[55] = t, I[56] = p, I[57] = D, I[58] = c, 
  I[59] = v, I[60] = ue; else ue = I[60];
  let je;
  if (I[61] !== ee || I[62] !== ne || I[63] !== se || I[64] !== U || I[65] !== le || I[66] !== ue) je = r(ee, {
    flexDirection: ne,
    ref: se,
    ...U,
    children: [ le, ue ]
  }), I[61] = ee, I[62] = ne, I[63] = se, I[64] = U, I[65] = le, I[66] = ue, I[67] = je; else je = I[67];
  return je;
}

export { Xj };
