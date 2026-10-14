// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { Ch } from "./chunk-mbz49tpm.js";

import { ac } from "./chunk-qvbrx5kg.js";

import { see, ge } from "./chunk-07cck4g7.js";

import { an, st, s, n, Uo, Wte, ma } from "./chunk-3vw306fv.js";

import { U$ } from "./chunk-fj1a15yf.js";

import { vo } from "./chunk-apnet8r0.js";

import { yr } from "./chunk-7w995nyx.js";

import { oy, A1t, v_t, M7e } from "./chunk-18n5kthz.js";

import { e7r, t7r } from "./chunk-84yp45y8.js";

import { gke, Lu } from "./chunk-81s9fscg.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { Gn } from "./chunk-bf1mjdzd.js";

import { Q7o } from "./chunk-a6phe82s.js";

import { Vb } from "./chunk-7etzs4d7.js";

import { P, Z, R, y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

var ze = "clipboard-image-hint", Je = 1e3, Qe = 3e4, He = {
  id: "clipboard-image-hint",
  deps: t => [ t.isTerminalFocused, t.canPasteImages, t.addNotification, t.clock ],
  setup() {
    let t = null, h = 0, i = null;
    return ({isTerminalFocused: p, canPasteImages: d, addNotification: g, clock: c}) => {
      let o = t ?? p;
      if (t = p, !d || !p || o) return;
      return i?.(), i = c.setTimeout(async () => {
        i = null;
        let u = Date.now();
        if (u - h < Qe) return;
        if (await Q7o()) h = u, g({
          key: ze,
          kind: "contextual",
          text: `Image in clipboard \xb7 ${Vb("chat:imagePaste", "Chat", "ctrl+v")} to paste`,
          priority: "immediate",
          timeoutMs: 8e3
        });
      }, Je), () => {
        i?.(), i = null;
      };
    };
  }
};

F();

function Kmn(t, h) {
  let [i] = y(() => t.map(d => {
    let g = d.setup();
    return {
      effect: typeof g === "function" ? g : g.effect,
      dispose: typeof g === "function" ? void 0 : g.dispose,
      deps: null,
      cleanup: void 0
    };
  })), p = R(h);
  P(() => {
    p.current = h;
    let d = () => p.current, g = [];
    t.forEach((c, o) => {
      let u = i[o];
      if (!u) return;
      let f = c.deps ? c.deps(h) : [];
      if (u.deps !== null && Ze(u.deps, f)) return;
      g.push({
        slot: u,
        deps: f
      });
    });
    for (let {slot: c} of g) c.cleanup?.(), c.cleanup = void 0;
    for (let {slot: c, deps: o} of g) c.deps = o, c.cleanup = c.effect(h, d);
  }), P(() => () => {
    for (let d of i) d.cleanup?.(), d.cleanup = void 0, d.deps = null, d.dispose?.();
  }, [ i ]);
}

function Ze(t, h) {
  if (t.length !== h.length) return !1;
  for (let i = 0; i < t.length; i++) if (!Object.is(t[i], h[i])) return !1;
  return !0;
}

var et = [ He ];

function qmn({isTerminalFocused: t, canPasteImages: h}) {
  let {addNotification: i} = vo(), p = an();
  Kmn(et, {
    isTerminalFocused: t,
    canPasteImages: h,
    addNotification: i,
    clock: p
  });
}

F();

F();

function w_t(t) {
  let C = w(3), {char: h, index: i, glimmerIndex: p, messageColor: d, shimmerColor: g} = t, c = i === p, o = Math.abs(i - p) === 1;
  const f = c || o ? g : d;
  let N;
  if (C[0] !== h || C[1] !== f) N = e(n, {
    color: f,
    children: h
  }), C[0] = h, C[1] = f, C[2] = N; else N = C[2];
  return N;
}

function Pt(Te) {
  return Te.shimmerColor;
}

function J(t) {
  let p = w(23), {text: h, highlights: i} = t, d;
  if (p[0] !== i || p[1] !== h) {
    let g = t7r(h, i);
    d = [ [] ];
    let c = 0;
    for (const o of g) {
      let u = o.text.split(`\n`);
      for (let f = 0; f < u.length; f++) {
        if (f > 0) d.push([]), c = c + 1;
        let C = u[f];
        if (C.length > 0) d.at(-1).push({
          text: C,
          highlight: o.highlight,
          start: c
        });
        c = c + C.length;
      }
    }
    p[0] = i, p[1] = h, p[2] = d;
  } else d = p[2];
  let N;
  if (p[3] !== i) N = i.some(Pt), p[3] = i, p[4] = N; else N = p[4];
  let M = N, b = 0, I = 1;
  if (M) {
    let v = Infinity;
    let T = -Infinity;
    if (p[5] !== T || p[6] !== i || p[7] !== v) {
      for (const D of i) {
        if (D.shimmerColor) v = Math.min(v, D.start), T = Math.max(T, D.end);
      }
      p[5] = T, p[6] = i, p[7] = v, p[8] = v, p[9] = T;
    } else v = p[8], T = p[9];
    b = v - 10, I = T - v + 20;
  }
  let j;
  if (p[10] !== I || p[11] !== M || p[12] !== d || p[13] !== b) j = {
    lines: d,
    hasShimmer: M,
    sweepStart: b,
    cycleLength: I
  }, p[10] = I, p[11] = M, p[12] = d, p[13] = b, p[14] = j; else j = p[14];
  let {lines: K, hasShimmer: Ie, sweepStart: be, cycleLength: Se} = j, ve = Lu(), L = Ie && !ve, [B, re] = ma(L ? 50 : null), k = L ? be + Math.floor(re / 50) % Se : gke, U;
  if (p[15] !== k || p[16] !== K) {
    let E;
    if (p[18] !== k) E = (_, ie) => e(s, {
      children: _.length === 0 ? e(n, {
        children: " "
      }) : _.map((m, O) => {
        if (m.highlight?.shimmerColor && m.highlight.color) {
          return e(n, {
            children: m.text.split("").map((V, H) => e(w_t, {
              char: V,
              index: m.start + H,
              glimmerIndex: k,
              messageColor: m.highlight.color,
              shimmerColor: m.highlight.shimmerColor
            }, H))
          }, O);
        }
        return e(n, {
          color: m.highlight?.color,
          backgroundColor: m.highlight?.backgroundColor,
          dimColor: m.highlight?.dimColor,
          bold: m.highlight?.bold,
          italic: m.highlight?.italic,
          underline: m.highlight?.underline,
          strikethrough: m.highlight?.strikethrough,
          children: e(Uo, {
            children: m.text
          })
        }, O);
      })
    }, ie), p[18] = k, p[19] = E; else E = p[19];
    U = K.map(E);
    p[15] = k, p[16] = K, p[17] = U;
  } else U = p[17];
  let E;
  if (p[20] !== B || p[21] !== U) E = e(s, {
    ref: B,
    flexDirection: "column",
    children: U
  }), p[20] = B, p[21] = U, p[22] = E; else E = p[22];
  return E;
}

function T1t(t) {
  let j = w(7), {inputState: h, children: i, terminalFocus: p, invert: d, hidePlaceholderText: g, cursorCellPainted: c, ...o} = t, {handleKeyDown: u, renderedValue: f, cursorLine: C, cursorColumn: N} = h, M = o.focus && o.showCursor && o.parkCursor !== !1 ? {
    line: C,
    column: N,
    visible: !c
  } : void 0, {handleKeyDown: I, handlePaste: v, isPasting: T} = M7e({
    onPaste: o.onPaste,
    handleKeyDown: b => {
      if (o.onKeyDownBefore?.(b), b.defaultPrevented || b.didStopImmediatePropagation()) {
        return;
      }
      u(b);
    },
    onImagePaste: o.onImagePaste
  }), {onIsPastingChange: D} = o;
  P(() => {
    if (D) D(T);
  }, [ T, D ]);
  let K;
  if (j[0] === S) K = U$(), j[0] = K; else K = j[0];
  let Ie = K, be = st(), {showPlaceholder: Se, renderedPlaceholder: ve} = Xe({
    placeholder: o.placeholder,
    value: o.value,
    showCursor: o.showCursor && !Ie,
    focus: o.focus,
    terminalFocus: p,
    invert: d,
    hidePlaceholderText: g || be
  }), L = Se ? ve : void 0, B = o.focus !== !1, re = R(null);
  oy(re, B);
  let k = {
    ref: re,
    autoFocus: B,
    disabled: !B,
    caret: M,
    onKeyDown: I,
    onPaste: v,
    allowPrintableKeybindings: o.allowPrintableKeybindings
  }, U = o.value && o.value.trim().indexOf(" ") === -1 || o.value && o.value.endsWith(" "), E = Boolean(o.argumentHint && o.value && U && o.value.startsWith("/")), ie = o.showCursor && o.highlights ? o.highlights.filter(_ => _.dimColor || o.cursorOffset < _.start || o.cursorOffset >= _.end) : o.highlights, m = o.leadingPill?.text ?? "", V = m ? [ {
    start: 0,
    end: m.length - 1,
    color: "ide",
    priority: 30
  }, ...(ie ?? []).map(O => ({
    ...O,
    start: O.start + m.length,
    end: O.end + m.length
  })) ] : ie, H = V && V.length > 0 ? e7r(V, f, h.renderedRowStartOffsets) : V;
  if (H && H.length > 0 && !L) {
    return r(Wte, {
      ...k,
      children: [ e(s, {
        flexShrink: 0,
        "aria-preserve-whitespace": !0,
        children: e(J, {
          text: f,
          highlights: H
        })
      }), E && r(n, {
        dimColor: !0,
        wrap: "truncate-end",
        children: [ o.value?.endsWith(" ") ? "" : " ", o.argumentHint ]
      }), i ]
    });
  }
  const W = n, ne = "truncate-end", G = o.dimColor, q = L ? r(Q, {
    children: [ m ? e(n, {
      color: "ide",
      children: m
    }) : null, e(Uo, {
      children: L
    }) ]
  }) : e(n, {
    "aria-preserve-whitespace": !0,
    children: e(Uo, {
      children: f
    })
  }), se = E && r(n, {
    dimColor: !0,
    children: [ o.value?.endsWith(" ") ? "" : " ", o.argumentHint ]
  });
  let we;
  if (j[1] !== W || j[2] !== i || j[3] !== o || j[4] !== q || j[5] !== se) we = r(W, {
    wrap: ne,
    dimColor: G,
    children: [ q, se, i ]
  }), j[1] = W, j[2] = i, j[3] = o, j[4] = q, j[5] = se, j[6] = we; else we = j[6];
  return e(Wte, {
    ...k,
    children: we
  });
}

function Xe({placeholder: t, value: h, showCursor: i, focus: p, terminalFocus: d = !0, invert: g = see, hidePlaceholderText: c = !1}) {
  let o = void 0;
  if (t) {
    if (c) o = i && p && d ? g(" ") : ""; else if (o = ge.dim(t), i && p && d) o = t.length > 0 ? g(t[0]) + ge.dim(t.slice(1)) : g(" ");
  }
  let u = h.length === 0 && Boolean(t);
  return {
    renderedPlaceholder: o,
    showPlaceholder: u
  };
}

function qt(se) {
  return se.voiceState;
}

function Xt(we) {
  return we;
}

function Yt($t) {
  return $t;
}

function Er(t) {
  let p = w(56), [h] = yr(), i = ac(), d;
  if (p[0] === S) d = U$(), p[0] = d; else d = p[0];
  let g = d, c = st(), u = Ch(qt) === "recording", [f, C] = v_t();
  const N = !!t.onImagePaste;
  let M;
  if (p[1] !== i || p[2] !== N) M = {
    isTerminalFocused: i,
    canPasteImages: N
  }, p[1] = i, p[2] = N, p[3] = M; else M = p[3];
  qmn(M);
  let b;
  if (p[4] !== C || p[5] !== i) b = !i ? Xt : C ? () => ge.hex(C.hex)(C.char) : g ? Yt : see, 
  p[4] = C, p[5] = i, p[6] = b; else b = p[6];
  let I = b;
  const {value: v, onChange: T, onSubmit: D, onExit: j, onExitMessage: K, onEscapeMessage: Ie, historyOnClear: be, onLeftArrowOnEmpty: Se, leftArrowConfirmHint: ve, onHistoryReset: L, onHistoryUp: B, onHistoryDown: re, focus: k, mask: U, multiline: E, disableBackslashReturn: _, clearOnSubmit: ie, disableCtrlCClear: m} = t, O = t.showCursor && !c ? " " : "", V = t.highlightPastedText;
  let H;
  if (p[7] !== h) H = Gn("text", h), p[7] = h, p[8] = H; else H = p[8];
  let Te;
  if (p[9] !== I || p[10] !== c || p[11] !== t.clearOnSubmit || p[12] !== t.columns || p[13] !== t.cursorOffset || p[14] !== t.disableBackslashReturn || p[15] !== t.disableCtrlCClear || p[16] !== t.disableCursorMovementForUpDownKeys || p[17] !== t.disableEscapeDoublePress || p[18] !== t.editRelay || p[19] !== t.focus || p[20] !== t.getInputMode || p[21] !== t.getPastedContents || p[22] !== t.highlightPastedText || p[23] !== t.historyOnClear || p[24] !== t.inlineGhostText || p[25] !== t.inputFilter || p[26] !== t.leadingPill || p[27] !== t.leftArrowConfirmHint || p[28] !== t.mask || p[29] !== t.maxVisibleLines || p[30] !== t.multiline || p[31] !== t.onChange || p[32] !== t.onChangeCursorOffset || p[33] !== t.onEscapeMessage || p[34] !== t.onExit || p[35] !== t.onExitMessage || p[36] !== t.onHistoryDown || p[37] !== t.onHistoryReset || p[38] !== t.onHistoryUp || p[39] !== t.onImagePaste || p[40] !== t.onLeftArrowOnEmpty || p[41] !== t.onSubmit || p[42] !== t.value || p[43] !== O || p[44] !== H) Te = {
    value: v,
    onChange: T,
    onSubmit: D,
    onExit: j,
    onExitMessage: K,
    onEscapeMessage: Ie,
    historyOnClear: be,
    onLeftArrowOnEmpty: Se,
    leftArrowConfirmHint: ve,
    onHistoryReset: L,
    onHistoryUp: B,
    onHistoryDown: re,
    focus: k,
    mask: U,
    multiline: E,
    disableBackslashReturn: _,
    clearOnSubmit: ie,
    disableCtrlCClear: m,
    cursorChar: O,
    preserveTrailingWhitespace: c,
    highlightPastedText: V,
    invert: I,
    themeText: H,
    columns: t.columns,
    leadingPill: t.leadingPill,
    maxVisibleLines: t.maxVisibleLines,
    onImagePaste: t.onImagePaste,
    disableCursorMovementForUpDownKeys: t.disableCursorMovementForUpDownKeys,
    disableEscapeDoublePress: t.disableEscapeDoublePress,
    externalOffset: t.cursorOffset,
    onOffsetChange: t.onChangeCursorOffset,
    inputFilter: t.inputFilter,
    editRelay: t.editRelay,
    getPastedContents: t.getPastedContents,
    getInputMode: t.getInputMode,
    inlineGhostText: t.inlineGhostText,
    dim: ge.dim
  }, p[9] = I, p[10] = c, p[11] = t.clearOnSubmit, p[12] = t.columns, p[13] = t.cursorOffset, 
  p[14] = t.disableBackslashReturn, p[15] = t.disableCtrlCClear, p[16] = t.disableCursorMovementForUpDownKeys, 
  p[17] = t.disableEscapeDoublePress, p[18] = t.editRelay, p[19] = t.focus, p[20] = t.getInputMode, 
  p[21] = t.getPastedContents, p[22] = t.highlightPastedText, p[23] = t.historyOnClear, 
  p[24] = t.inlineGhostText, p[25] = t.inputFilter, p[26] = t.leadingPill, p[27] = t.leftArrowConfirmHint, 
  p[28] = t.mask, p[29] = t.maxVisibleLines, p[30] = t.multiline, p[31] = t.onChange, 
  p[32] = t.onChangeCursorOffset, p[33] = t.onEscapeMessage, p[34] = t.onExit, p[35] = t.onExitMessage, 
  p[36] = t.onHistoryDown, p[37] = t.onHistoryReset, p[38] = t.onHistoryUp, p[39] = t.onImagePaste, 
  p[40] = t.onLeftArrowOnEmpty, p[41] = t.onSubmit, p[42] = t.value, p[43] = O, p[44] = H, 
  p[45] = Te; else Te = p[45];
  let W = A1t(Te);
  const ne = C != null;
  let G;
  if (p[46] !== I || p[47] !== i || p[48] !== u || p[49] !== t || p[50] !== ne || p[51] !== W) G = e(T1t, {
    inputState: W,
    terminalFocus: i,
    highlights: t.highlights,
    invert: I,
    hidePlaceholderText: u,
    cursorCellPainted: ne,
    ...t
  }), p[46] = I, p[47] = i, p[48] = u, p[49] = t, p[50] = ne, p[51] = W, p[52] = G; else G = p[52];
  let q;
  if (p[53] !== f || p[54] !== G) q = e(s, {
    ref: f,
    children: G
  }), p[53] = f, p[54] = G, p[55] = q; else q = p[55];
  return q;
}

export { Kmn, qmn, w_t, T1t, Er };
