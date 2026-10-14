// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le, Me } from "./chunk-2v9tfgc3.js";

import { K, lt, xNo, PNo } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { E, zr } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { Nt, c6 } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { a } from "./chunk-j016gcgm.js";

import { w } from "./chunk-9rj1xaxr.js";

import { fd } from "./chunk-f3sxrxpt.js";

import { nn } from "./chunk-ytac37d4.js";

import { Lte } from "./chunk-bjm1wscq.js";

import { Zg } from "./chunk-shampfde.js";

import { Sy, xw, Di, k, ce, rfe } from "./chunk-xywp7esx.js";

import { Pe, _S } from "./chunk-7w995nyx.js";

import { p } from "./chunk-jkzenvsk.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { vy } from "./chunk-s2t7g8m9.js";

import { yo, FLs } from "./chunk-q6wab2jw.js";

import { le } from "./chunk-cqgvwwgb.js";

import { mOe } from "./chunk-9yajep3y.js";

import { ft } from "./chunk-zscnwzv2.js";

import { ie, Pc } from "./chunk-yxennhe9.js";

import { dt, sI } from "./chunk-dd98x6x7.js";

import { Ji } from "./chunk-f0wpcwcb.js";

import { bs } from "./chunk-zzhmvqjt.js";

import { Qqe, ebe, IMn, OMn } from "./chunk-bp2n0w3d.js";

import { wV } from "./chunk-584kx1w1.js";

import { mto, xAt, Bis } from "./chunk-84yp45y8.js";

import { F7e, lgn, Mze } from "./chunk-k8g8atcg.js";

import { an, st, s, n, ngn, Wv, Wte, ma, oJ, Gi, qr } from "./chunk-3vw306fv.js";

import { Ix, U$ } from "./chunk-fj1a15yf.js";

import { i8 } from "./chunk-v7qc2kz8.js";

import { zMe, KUr, Ize, I7e, O7e, ki, A1t, v_t } from "./chunk-18n5kthz.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { Re } from "./chunk-jzzyv7tj.js";

import { Dxt, AJt, e_r, t_r } from "./chunk-sqb9meyh.js";

import { V, Nn } from "./chunk-jb3h1y0s.js";

import { vo } from "./chunk-apnet8r0.js";

import { us, xA } from "./chunk-wpjx0bxn.js";

import { C6 } from "./chunk-a3sz08kp.js";

import { Ch, Zmn, VMe } from "./chunk-mbz49tpm.js";

import { zgr, NT, fDn, _F, jNe } from "./chunk-n4eyr3t2.js";

import { OA, sy, Dm } from "./chunk-xw6qmghy.js";

import { E1 } from "./chunk-9tdwgnpn.js";

import { yd } from "./chunk-3xtsjx0y.js";

import { Gnt, h0e, R4t, MJr, Knt, vCn, y0e, sKe, ees, iKe, qnt, iir, x4t, aKe, Ynt } from "./chunk-zdw25e0t.js";

import { rKe, Wnt, m0e, IJr, g0e } from "./chunk-hjph2xzh.js";

import { LM, A4t, C4t, nKe, ikt } from "./chunk-at5r213a.js";

import { ct } from "./chunk-qk83zz02.js";

import { AT } from "./chunk-n8zrqbkh.js";

import { id } from "./chunk-0ypdmr94.js";

import { Fq } from "./chunk-xhfnndk1.js";

import { Dg } from "./chunk-81s9fscg.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { BVo } from "./chunk-knws81s6.js";

import { ae, P, xo, Zt, Z, R, y, xt, F } from "./chunk-cpyd3eya.js";

import { o, v, u, A } from "./chunk-cvcg6n1z.js";

import { pa, Zve, q5, Dee, z$s } from "./chunk-g7z9901y.js";

import { we, S, _n } from "./chunk-m8ez8fhk.js";

function IUt(l) {
  if (l.wheelUp || l.wheelDown || l.escape) return !1;
  if (l.pageUp || l.pageDown) return !1;
  if ((l.home || l.end) && l.ctrl) return !1;
  if ((l.leftArrow || l.rightArrow || l.upArrow || l.downArrow || l.home || l.end) && (l.shift || l.meta || l.super)) return !1;
  return !0;
}

function ri(l) {
  if (l.name === "escape" || l.name === "pageup" || l.name === "pagedown") return !1;
  if ((l.name === "home" || l.name === "end") && l.ctrl) return !1;
  if ((l.name === "left" || l.name === "right" || l.name === "up" || l.name === "down" || l.name === "home" || l.name === "end") && (l.shift || l.meta || l.superKey)) return !1;
  return !0;
}

function HBo(l, h) {
  return C => {
    if (!l.hasSelection()) return;
    if (C.key === "c" && !C.meta && (C.ctrl || C.superKey)) {
      if (h) l.clearSelection(); else l.copySelection();
      if (C.ctrl && !C.shift) Lte();
      C.consume();
      return;
    }
    if (ri(C)) l.clearSelection();
  };
}

function DWe(l, h = !0) {
  nn({
    "selection:clear": () => {
      if (!l.hasSelection()) return !1;
      l.clearSelection(), Lte();
    }
  }, {
    context: "Scroll",
    isActive: h
  });
}

F();

function Ypn(l) {
  let h = ebe(), C = Dee(l), x = C === 1 ? "char" : "chars", T;
  switch (h) {
   case "native":
    T = `copied ${C} ${x} to clipboard`;
    break;

   case "tmux-buffer":
    T = `copied ${C} ${x} to tmux buffer \xb7 paste with prefix + ]`;
    break;

   case "osc52":
    T = `sent ${C} ${x} via OSC 52 \xb7 if paste fails, hold ${Qqe()} while selecting for native copy`;
    break;
  }
  let O = OMn(l);
  if (O) T = `\u26a0 ${O} \xb7 ${T}`;
  return {
    key: "selection-copied",
    kind: "feedback",
    text: T,
    color: "suggestion",
    priority: "immediate",
    timeoutMs: O ? 6e3 : h === "native" ? 2e3 : 4e3
  };
}

function LWe(l, h, C) {
  let x = R(!1), T = R(null), [O] = y(() => ({
    peek: () => T.current,
    invalidate: () => {
      T.current = null;
    }
  })), I = xo(_ => C?.(_));
  return P(() => {
    if (!h) return;
    return IMn(), l.subscribe(() => {
      let N = l.getState(), D = l.hasSelection();
      if (N?.isDragging) {
        x.current = !1, T.current = null;
        return;
      }
      if (!D) {
        x.current = !1, T.current = null;
        return;
      }
      if (x.current) {
        T.current = null;
        return;
      }
      if (!(ce().copyOnSelect ?? !0)) return;
      let W = l.copySelectionNoClear();
      if (!W || !W.trim()) {
        x.current = !0;
        return;
      }
      x.current = !0, T.current = W, g("clipboard_write"), I(W);
    });
  }, [ h, l ]), O;
}

function NWe(l) {
  let h = _S();
  P(() => {
    l.setSelectionBgColor(h.selectionBg);
  }, [ l, h.selectionBg ]);
}

F();

import oi from "path";

var si = "at_mentioned", ii = p(() => u({
  method: A(si),
  params: u({
    filePath: o(),
    lineStart: v().optional(),
    lineEnd: v().optional()
  })
}));

function OUt(l, h) {
  let C = Z(() => E1(l), [ l ]), x = R(void 0);
  P(() => {
    if (x.current = C, !C) return;
    wV(C, ii(), T => {
      if (x.current !== C) return;
      try {
        let O = T.params, I = O.lineStart !== void 0 ? O.lineStart + 1 : void 0, _ = O.lineEnd !== void 0 ? O.lineEnd + 1 : void 0;
        h({
          filePath: O.filePath,
          lineStart: I,
          lineEnd: _
        }), g("ide_at_mention");
      } catch (O) {
        d(O), m("ide_at_mention", "ide_at_mention_failed");
      }
    });
  }, [ C, h ]);
}

function MUt(l, h) {
  let C = oi.relative(le(), l.filePath), x;
  if (l.lineStart && l.lineEnd) x = l.lineStart === l.lineEnd ? `@${C}#L${l.lineStart} ` : `@${C}#L${l.lineStart}-${l.lineEnd} `; else x = `@${C} `;
  if (h !== void 0 && !/\s/.test(h)) x = ` ${x}`;
  return x;
}

F();

function vte() {
  return bs("editorMode", "normal").value === "vim";
}

function BNr() {
  if (zMe()) return "shift + \u23ce for newline";
  return KUr() ? "\\\u23ce for newline" : "backslash (\\) + return (\u23ce) for newline";
}

var ai = new Set([ "escape", "return", "enter", "tab", "backspace", "delete", "up", "down", "left", "right", "pageup", "pagedown", "home", "end", "insert", "clear", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12" ]);

function jNr(l, h) {
  if (h.ctrl || h.meta) return !1;
  if (ai.has(l)) return !1;
  return l.length > 0 && !/^\s/.test(l);
}

function WNr(l) {
  return l.length > 0 && ".,?!:;)]".includes(l.charAt(0));
}

F();

function jt(l, h) {
  if (h?.offset === l.offset && h.text === l.text) return h.column;
  let C = l.startOfLogicalLine().offset, x = ui(l.text, C, l.offset);
  return l.text[l.offset] === "\t" ? x + nr("\t", x) - 1 : x;
}

function ui(l, h, C) {
  let x = 0;
  for (let {segment: T} of pa().segment(l.slice(h, C))) x += nr(T, x);
  return x;
}

function Bt(l, h, C, x) {
  let T = 0;
  for (let {segment: O, index: I} of pa().segment(l.slice(h, C))) if (T += nr(O, T), 
  T > x) return h + I;
  return C;
}

function nr(l, h) {
  return l === "\t" ? mOe - h % mOe : ie(l);
}

var gn = {
  d: "delete",
  c: "change",
  y: "yank"
};

function rr(l) {
  return l in gn;
}

var ot = "\b", hn = new Set([ "h", "l", " ", ot, "j", "k", "w", "b", "e", "W", "B", "E", "0", "^", "$" ]), Ht = new Set([ "h", "l", " ", ot ]), bn = new Set([ "f", "F", "t", "T" ]), yn = {
  i: "inner",
  a: "around"
};

function or(l) {
  return l in yn;
}

var sr = new Set([ "w", "W", '"', "'", "`", "(", ")", "b", "[", "]", "{", "}", "B", "<", ">" ]), co = 1e4;

function fo() {
  return {
    mode: "INSERT",
    insertedText: ""
  };
}

function po() {
  return {
    lastFind: null,
    register: "",
    registerIsLinewise: !1
  };
}

function gt(l, h, C) {
  let x = h;
  for (let T = 0; T < C; T++) {
    let O = li(l, x);
    if (O.equals(x)) break;
    x = O;
  }
  return x;
}

function li(l, h) {
  switch (l) {
   case "h":
    return h.offset === h.startOfLogicalLine().offset ? h : h.left();

   case "l":
    return h.offset === h.endOfLogicalLine().offset ? h : h.right();

   case " ":
    return h.right();

   case ot:
    return h.left();

   case "j":
    return h.downLogicalLine();

   case "k":
    return h.upLogicalLine();

   case "gj":
    return h.down();

   case "gk":
    return h.up();

   case "w":
    return h.nextVimWord();

   case "b":
    return h.prevVimWord();

   case "e":
    return h.endOfVimWord();

   case "W":
    return h.nextWORD();

   case "B":
    return h.prevWORD();

   case "E":
    return h.endOfWORD();

   case "0":
    return h.startOfLogicalLine();

   case "^":
    return h.firstNonBlankInLogicalLine();

   case "$":
    return h.lastCharInLogicalLine();

   case "G":
    return h.startOfLastLine();

   default:
    return h;
  }
}

function ir(l) {
  return "eE$".includes(l);
}

function mo(l) {
  return "jkG".includes(l) || l === "gg";
}

var ci = {
  "(": [ "(", ")" ],
  ")": [ "(", ")" ],
  b: [ "(", ")" ],
  "[": [ "[", "]" ],
  "]": [ "[", "]" ],
  "{": [ "{", "}" ],
  "}": [ "{", "}" ],
  B: [ "{", "}" ],
  "<": [ "<", ">" ],
  ">": [ "<", ">" ],
  '"': [ '"', '"' ],
  "'": [ "'", "'" ],
  "`": [ "`", "`" ]
};

function vn(l, h, C, x) {
  if (C === "w") return go(l, h, x, Ize);
  if (C === "W") return go(l, h, x, O => !I7e(O));
  let T = ci[C];
  if (T) {
    let [O, I] = T;
    return O === I ? fi(l, h, O, x) : di(l, h, O, I, x);
  }
  return null;
}

function go(l, h, C, x) {
  let T = [];
  for (let {segment: H, index: J} of pa().segment(l)) T.push({
    segment: H,
    index: J
  });
  if (T.length === 0) return null;
  let O = T.length - 1;
  for (let H = 0; H < T.length; H++) {
    let J = T[H], re = H + 1 < T.length ? T[H + 1].index : l.length;
    if (h >= J.index && h < re) {
      O = H;
      break;
    }
  }
  let I = H => T[H]?.segment ?? "", _ = H => H < T.length ? T[H].index : l.length, N = H => I7e(I(H)), D = H => x(I(H)), B = H => O7e(I(H)), W = O, z = O;
  if (D(O)) {
    while (W > 0 && D(W - 1)) W--;
    while (z < T.length && D(z)) z++;
  } else if (N(O)) {
    while (W > 0 && N(W - 1)) W--;
    while (z < T.length && N(z)) z++;
    return {
      start: _(W),
      end: _(z)
    };
  } else if (B(O)) {
    while (W > 0 && B(W - 1)) W--;
    while (z < T.length && B(z)) z++;
  }
  if (!C) {
    if (z < T.length && N(z)) while (z < T.length && N(z)) z++; else if (W > 0 && N(W - 1)) while (W > 0 && N(W - 1)) W--;
  }
  return {
    start: _(W),
    end: _(z)
  };
}

function fi(l, h, C, x) {
  let T = l.lastIndexOf(`\n`, h - 1) + 1, O = l.indexOf(`\n`, h), I = O === -1 ? l.length : O, _ = l.slice(T, I), N = h - T, D = [];
  for (let B = 0; B < _.length; B++) if (_[B] === C) D.push(B);
  for (let B = 0; B < D.length - 1; B += 2) {
    let W = D[B], z = D[B + 1];
    if (W <= N && N <= z) return x ? {
      start: T + W + 1,
      end: T + z
    } : {
      start: T + W,
      end: T + z + 1
    };
  }
  return null;
}

function di(l, h, C, x, T) {
  let O = 0, I = -1;
  for (let N = h; N >= 0; N--) if (l[N] === x && N !== h) O++; else if (l[N] === C) {
    if (O === 0) {
      I = N;
      break;
    }
    O--;
  }
  if (I === -1) return null;
  O = 0;
  let _ = -1;
  for (let N = I + 1; N < l.length; N++) if (l[N] === C) O++; else if (l[N] === x) {
    if (O === 0) {
      _ = N;
      break;
    }
    O--;
  }
  if (_ === -1) return null;
  return T ? {
    start: I + 1,
    end: _
  } : {
    start: I,
    end: _ + 1
  };
}

function St(l, h, C, x) {
  let T = gt(h, x.cursor, C);
  if (mo(h)) {
    let _ = Ze(x.text, x.cursor.offset), N = Ze(x.text, T.offset);
    if (N !== _) {
      let D = kt(x.text, T.offset), B = x.text.indexOf(`\n`, D), W = B === -1 ? x.text.length : B, z = Bt(x.text, D, W, jt(x.cursor, x.wantedColumn)), H = z === W && W > D && KX(x.cursor, W) === W ? x.cursor.measuredText.prevOffset(W) : z, J = h === "k" ? In(x.cursor, H, D) : Math.min(x.cursor.offset, T.offset);
      Ln(l, _, N, x, J), at(x, {
        type: "operator",
        op: l,
        motion: h,
        count: C
      });
    }
    return;
  }
  if (T.equals(x.cursor) && !ir(h)) {
    let _ = (h === "w" || h === "W") && C > 0;
    if (h === "0" || h === "^" || _ || Ht.has(h)) {
      if (l === "yank") x.setRegister("", !1); else if (l === "change") x.enterInsert(x.cursor.offset);
      at(x, {
        type: "operator",
        op: l,
        motion: h,
        count: C
      });
    }
    return;
  }
  let O = pi(x.cursor, T, h, l, C);
  if (O.from === O.to && !(O.linewise && h === " ")) {
    if (l === "change" || l === "yank") x.setRegister("", !1);
    if (l === "change") x.enterInsert(O.from), at(x, {
      type: "operator",
      op: l,
      motion: h,
      count: C
    });
    return;
  }
  let I = x.cursor.offset;
  if (kn(l, O.from, O.to, x, O.linewise), l === "yank" && O.linewise) x.setOffset(I);
  at(x, {
    type: "operator",
    op: l,
    motion: h,
    count: C
  });
}

function xn(l, h, C, x, T) {
  let O = T.cursor.findCharacter(C, h, x);
  if (O === null) return;
  let I = new ki(T.cursor.measuredText, O), _ = mi(T.cursor, I, h);
  kn(l, _.from, _.to, T), T.setLastFind(h, C), at(T, {
    type: "operatorFind",
    op: l,
    find: h,
    char: C,
    count: x
  });
}

function Cn(l, h, C, x, T) {
  let O = vn(T.text, T.cursor.offset, C, h === "inner");
  if (!O) return;
  kn(l, O.start, O.end, T);
  let {start: I} = O, _ = h === "inner" && x === 1 && I > 0 && "([{<".includes(T.text[I - 1] ?? " ") && T.text[I] === `\n`;
  if (l === "yank" && _) T.setOffset(I + 1);
  at(T, {
    type: "operatorTextObj",
    op: l,
    objType: C,
    scope: h,
    count: x
  });
}

function wt(l, h, C) {
  if (h < 1) return;
  let x = Ze(C.text, C.cursor.offset);
  if (h > 1 && !C.cursor.text.includes(`\n`, C.cursor.offset)) return;
  let {offset: T} = C.cursor, O = C.text[T] === `\n` ? C.cursor.placeholderEndingAt(T) : null, I = O !== null && Dxt(C.text.slice(O.start, O.end));
  Ln(l, x, x + h - 1, C, I ? C.cursor.startOfLogicalLine().offset : T), at(C, {
    type: "operator",
    op: l,
    motion: l[0],
    count: h
  });
}

function On(l, h) {
  let C = h.cursor.offset;
  if (C >= h.text.length) return;
  let x = bo(h, l);
  if (x === C) return;
  let T = h.text.slice(C, x), O = h.text.slice(0, C) + h.text.slice(x);
  h.setRegister(T, !1), h.setText(O), h.setOffset(Ete(O, C)), h.recordChange({
    type: "x",
    count: l
  });
}

function Tn(l, h) {
  let C = h.cursor.offset, x = bo(h, l);
  if (x > C) h.setRegister(h.text.slice(C, x), !1), h.setText(h.text.slice(0, C) + h.text.slice(x));
  h.enterInsert(C), h.recordChange({
    type: "substitute",
    count: l
  });
}

function Rn(l, h, C) {
  let x = C.cursor.offset, T = C.text, O = x;
  for (let I = 0; I < h; I++) {
    if (O >= T.length || T[O] === `\n`) return;
    O += Zve(T.slice(O)).length || 1;
  }
  C.setText(T.slice(0, x) + l.repeat(h) + T.slice(O)), C.setOffset(x + l.length * (h - 1)), 
  C.recordChange({
    type: "replace",
    char: l,
    count: h
  });
}

function Sn(l, h) {
  let C = h.cursor.measuredText.columns, x = h.text, T = h.cursor.offset, O = 0;
  while (T < x.length && x[T] !== `\n` && O < l) {
    let _ = Zve(x.slice(T)), N = _.length, D = (_ === _.toUpperCase() ? _.toLowerCase() : _.toUpperCase()).normalize("NFC");
    x = x.slice(0, T) + D + x.slice(T + N), T += D.length, O++;
  }
  if (O === 0) return;
  let I = ki.fromText(x, C);
  h.setText(x), h.setOffset(KX(I, T)), h.recordChange({
    type: "toggleCase",
    count: l
  });
}

function ur(l, h) {
  let C = h.text.split(`\n`), x = Ze(h.cursor.text, h.cursor.offset);
  if (x >= C.length - 1) {
    if (l >= 3) h.setOffset(kt(h.cursor.text, h.cursor.offset)), h.recordChange({
      type: "join",
      count: 2
    });
    return;
  }
  let T = Math.min(Math.max(l, 2) - 1, C.length - x - 1);
  ho(C, x, T, h);
}

function ho(l, h, C, x) {
  let T = l[h], O = T.length, I = T;
  for (let D = 1; D <= C; D++) {
    O = T.length;
    let B = l[h + D].replace(/^[ \t\r]+/, "");
    if (B.length > 0 && T.length > 0 && !B.startsWith(")") && !/[ \t]$/.test(I)) T += " ";
    T += B, I = B;
  }
  let _ = [ ...l.slice(0, h), T, ...l.slice(h + C + 1) ], N = _.join(`\n`);
  x.setText(N), x.setOffset(Ete(N, ht(_, h) + O)), x.recordChange({
    type: "join",
    count: C + 1
  });
}

function $t(l, h, C) {
  let x = C.getRegister();
  if (!x) return;
  C.recordChange({
    type: "paste",
    after: l,
    count: h
  });
  let T = C.getRegisterIsLinewise(), O = T && x.endsWith(`\n`) ? x.slice(0, -1) : x;
  if (T) {
    let I = C.text, _ = I.split(`\n`), N = Ze(C.cursor.text, C.cursor.offset), D = l ? N + 1 : N, B = O.split(`\n`), W = [];
    for (let ke = 0; ke < h; ke++) W.push(...B);
    let z = [ ..._.slice(0, D), ...W, ..._.slice(D) ], H = z.join(`\n`), J = ht(z, D), re = ki.fromText(B[0] ?? "", C.cursor.measuredText.columns), _e = Pn(re);
    C.setText(H, {
      previous: {
        value: I,
        cursorOffset: J
      }
    }), C.setOffset(J + (re.placeholderStartingAt(_e) ? 0 : _e));
  } else {
    let I = O.repeat(h), _ = C.cursor.offset, N = C.text[_] === `\n` && (_ === 0 || C.text[_ - 1] === `\n`), D = l && _ < C.text.length && !N ? C.cursor.measuredText.nextOffset(_) : _, B = C.text.slice(0, D) + I + C.text.slice(D), W = I.includes(`\n`) ? Ete(B, D) : D + I.length - (q5(I).length || 1);
    C.setText(B, {
      previous: {
        value: C.text,
        cursorOffset: D
      }
    }), C.setOffset(W);
  }
}

function wn(l, h, C) {
  let T = C.text.split(`\n`), O = Ze(C.cursor.text, C.cursor.offset);
  if (h > 1 && O === T.length - 1) return;
  let I = Math.min(h, T.length - O);
  lr(T, O, O + I - 1, l);
  let _ = T.join(`\n`), N = Yt(T[O] ?? "");
  C.setText(_), C.setOffset(ht(T, O) + N), C.recordChange({
    type: "indent",
    dir: l,
    count: h
  });
}

function Gt(l, h) {
  let C = h.text, x = C.split(`\n`), T = Ze(h.cursor.text, h.cursor.offset), O = l === "below" ? T + 1 : T, I = [ ...x.slice(0, O), "", ...x.slice(O) ], _ = I.join(`\n`), N = ht(I, O);
  h.setText(_, {
    previous: {
      value: C,
      cursorOffset: N
    }
  }), h.enterInsert(N), h.recordChange({
    type: "openLine",
    direction: l
  });
}

function at(l, h) {
  if (h.op !== "yank") l.recordChange(h);
}

function bo(l, h) {
  let C = l.cursor;
  for (let x = 0; x < h && !C.isAtEnd(); x++) {
    if (l.text[C.offset] === `\n`) break;
    C = C.right();
  }
  return C.offset;
}

function ht(l, h) {
  return l.slice(0, h).join(`\n`).length + (h > 0 ? 1 : 0);
}

function pi(l, h, C, x, T) {
  let O = Math.min(l.offset, h.offset), I = Math.max(l.offset, h.offset), _ = !1, N = x === "change" && (C === "w" || C === "W"), D = l.text[l.offset], B = (D === " " || D === "\t" || D === `\n`) && l.snapOutOfPlaceholder(l.offset, "start") === l.offset;
  if (N && B) {
    let W = l;
    for (let z = 0; z < T - 1; z++) {
      let H = C === "w" ? W.nextVimWord() : W.nextWORD();
      if (H.offset === W.offset) break;
      W = H;
    }
    if (I = Math.min(I, W.endOfLogicalLine().offset), I > O && l.text[I - 1] === `\n`) {
      I -= 1;
      let z = l.startOfLogicalLine().offset;
      if (/^[ \t]*$/.test(l.text.slice(z, O))) O = z, _ = !0;
    }
  } else if (N) {
    let W = l;
    for (let _e = 0; _e < T - 1; _e++) W = C === "w" ? W.nextVimWord() : W.nextWORD();
    let z = C === "w" ? W.endOfVimWord() : W.endOfWORD(), H = l.measuredText.nextOffset(W.offset), J = C === "w" ? W.nextVimWord() : W.nextWORD();
    if ((H >= l.text.length || I7e(l.text[H] ?? "") || J.offset === H) && !I7e(l.text[l.offset] ?? "") && !I7e(l.text[W.offset] ?? "")) z = W;
    I = l.measuredText.nextOffset(z.offset);
  } else if (ir(C) && l.offset <= h.offset && l.text[I] !== `\n`) I = l.measuredText.nextOffset(I);
  if (C === " " && I > O && l.text[I - 1] === `\n`) {
    let W = kt(l.text, O);
    _ = /^[ \t]*$/.test(l.text.slice(W, O)), O = _ ? W : O, I = _ && x !== "change" ? I : I - 1;
  }
  return O = l.snapOutOfPlaceholder(O, "start"), I = l.snapOutOfPlaceholder(I, "end"), 
  {
    from: O,
    to: I,
    linewise: _
  };
}

function mi(l, h, C) {
  let x = Math.max(l.offset, h.offset), T = l.snapOutOfPlaceholder(Math.min(l.offset, h.offset), "start"), O = l.snapOutOfPlaceholder(l.measuredText.nextOffset(x), "end");
  return {
    from: T,
    to: O
  };
}

function kn(l, h, C, x, T = !1) {
  let O = x.text.slice(h, C);
  if (T && !O.endsWith(`\n`)) O = O + `\n`;
  if (x.setRegister(O, T), l === "yank") x.setOffset(KX(x.cursor, h)); else if (l === "delete") {
    let I = x.text.slice(0, h) + x.text.slice(C);
    x.setText(I), x.setOffset(Ete(I, h));
  } else if (l === "change") {
    let I = x.text.slice(0, h) + x.text.slice(C);
    x.setText(I), x.enterInsert(h);
  }
}

function Ete(l, h) {
  if (l[h] === `\n` && h > 0 && l[h - 1] !== `\n`) return h - (q5(l.slice(0, h)).length || 1);
  if (h >= l.length && !l.endsWith(`\n`)) return Math.max(0, l.length - (q5(l).length || 1));
  return h;
}

function In(l, h, C) {
  let x = ar(l, h), T = h;
  while (x && x.start > C) T = l.measuredText.prevOffset(x.start), x = ar(l, T);
  if (!x) return T;
  let O = x.end;
  while (x = ar(l, O)) O = x.end;
  return O;
}

function ar(l, h) {
  let C = l.snapOutOfPlaceholder(h, "start");
  return l.placeholderStartingAt(C);
}

function KX(l, h, C = l.text) {
  let x = Ete(C, h);
  return l.snapOutOfPlaceholder(x, "start") === x ? x : h;
}

function kt(l, h) {
  if (h === 0) return 0;
  let C = l.lastIndexOf(`\n`, h - 1);
  return C === -1 ? 0 : C + 1;
}

function Vn(l, h) {
  if (h) {
    let C = Nt(l, `\n`);
    return l.endsWith(`\n`) ? C : C + 1;
  }
  return Dee(l);
}

function zt(l, h, C) {
  let x = l.text;
  if (C) {
    let I = kt(x, l.cursor.offset), _ = I;
    for (let N = 0; N < h; N++) {
      let D = x.indexOf(`\n`, _);
      if (D === -1) {
        _ = x.length;
        break;
      }
      _ = D + 1;
    }
    return {
      from: I,
      to: _
    };
  }
  let T = l.cursor.offset, O = T;
  for (let I = 0; I < h && O < x.length; I++) O = l.cursor.measuredText.nextOffset(O);
  return {
    from: T,
    to: O
  };
}

function Mn(l, h, C) {
  let x = Math.min(l, h.cursor.offset), T = Math.max(l, h.cursor.offset);
  if (!C) return {
    from: x,
    to: h.cursor.measuredText.nextOffset(T)
  };
  let O = h.text, I = kt(O, x), _ = O.indexOf(`\n`, T), N = _ === -1 ? O.length : _ + 1;
  return {
    from: I,
    to: N
  };
}

function lr(l, h, C, x) {
  for (let O = h; O <= C; O++) {
    let I = l[O] ?? "";
    if (I === "") continue;
    if (x === ">") l[O] = "  " + I; else if (I.startsWith("  ")) l[O] = I.slice(2); else if (I.startsWith("\t")) l[O] = I.slice(1); else {
      let _ = 0;
      while (_ < I.length && _ < 2 && /\s/.test(I[_])) _++;
      l[O] = I.slice(_);
    }
  }
}

function Co(l, h, C) {
  let x = Math.min(l, h.cursor.offset), T = Math.max(l, h.cursor.offset), O = h.text, I = Nt(O.slice(0, x), `\n`), _ = Nt(O.slice(x, T), `\n`) + 1, N = O.split(`\n`);
  if (I >= N.length - 1) {
    h.setOffset(C ? kt(h.cursor.text, x) : Ete(h.cursor.text, x)), h.recordChange({
      type: "join",
      count: 2
    });
    return;
  }
  let D = Math.max(1, Math.min(_ - 1, N.length - I - 1));
  ho(N, I, D, h);
}

function Oo(l, h) {
  let C = h.text.split(`\n`);
  if (Ze(h.cursor.text, h.cursor.offset) < C.length - 1) ur(l, h);
}

function To(l, h, C, x) {
  let T = Math.min(C, x.cursor.offset), O = Math.max(C, x.cursor.offset), I = x.text, _ = Nt(I.slice(0, T), `\n`), N = _ + Nt(I.slice(T, O), `\n`), D = I.split(`\n`);
  for (let z = 0; z < h; z++) lr(D, _, N, l);
  let B = D.join(`\n`), W = Yt(D[_] ?? "");
  x.setText(B), x.setOffset(ht(D, _) + W), x.recordChange({
    type: "visualIndent",
    dir: l,
    count: h,
    lines: N - _ + 1
  });
}

function Ro(l, h, C, x) {
  let T = x.text, O = T.split(`\n`), I = Nt(T.slice(0, x.cursor.offset), `\n`), _ = Math.min(I + C - 1, O.length - 1);
  for (let B = 0; B < h; B++) lr(O, I, _, l);
  let N = O.join(`\n`), D = Yt(O[I] ?? "");
  x.setText(N), x.setOffset(ht(O, I) + D);
}

function So(l, h, C, x, T, O = !1) {
  if (T && l === "change") {
    let I = x.text.slice(h, C), _ = I;
    if (!_.endsWith(`\n`)) _ += `\n`;
    x.setRegister(_, !0);
    let N = x.text.slice(0, h), D = x.text.slice(C), B = D !== "" || I.endsWith(`\n`) && !O;
    x.setText(N + (B ? `\n` : "") + D), x.enterInsert(h);
    return;
  }
  if (T && l === "delete") {
    let I = x.text.slice(h, C);
    if (!I.endsWith(`\n`)) I += `\n`;
    x.setRegister(I, !0);
    let _ = h;
    if (C === x.text.length && h > 0 && x.text[h - 1] === `\n`) _ -= 1;
    let N = C < x.text.length, D = x.text.slice(0, _) + x.text.slice(C);
    x.setText(D);
    let B = N ? h : kt(D, D.length), W = D.indexOf(`\n`, B), z = W === -1 ? D.length : W, H = ki.fromText(D.slice(B, z), x.cursor.measuredText.columns + 1), J = Do(H, N), re = !N && H.placeholderStartingAt(J) !== null;
    x.setOffset(re ? Ete(D, D.length) : B + J);
    return;
  }
  kn(l, h, C, x, T);
}

function wo(l, h, C, x) {
  let {from: T, to: O} = Mn(h, C, x), I = Vn(C.text.slice(T, O), x), _ = x && C.text.endsWith(`\n`) && Math.max(h, C.cursor.offset) >= C.text.length;
  So(l, T, O, C, x, _), at(C, {
    type: "visualOp",
    op: l,
    span: I,
    linewise: x
  });
}

function ko(l, h, C, x) {
  let {from: T, to: O} = zt(x, h, C);
  if (T === O && !(C && x.text.length > 0)) return;
  So(l, T, O, x, C);
}

function Io(l, h, C) {
  let {from: x, to: T} = zt(C, l, h);
  if (x === T && !h) return;
  let O = C.text.slice(x, T), I = O;
  if (h && !I.endsWith(`\n`)) I += `\n`;
  C.setRegister(I, h);
  let _ = C.text.slice(T), N = h && (_ !== "" || O.endsWith(`\n`)) ? `\n` + _ : _;
  C.setText(C.text.slice(0, x) + N), C.enterInsert(x);
}

function Vo(l, h, C, x) {
  let T = x.text.slice(h, C), O = "";
  for (let {segment: N} of pa().segment(T)) O += N === `\n` ? `\n` : l;
  let I = x.text.slice(0, h) + O + x.text.slice(C), _ = x.cursor;
  x.setText(I), x.setOffset(KX(_, h, I));
}

function _o(l, h, C, x) {
  let {from: T, to: O} = Mn(h, C, x), I = Vn(C.text.slice(T, O), x);
  Vo(l, T, O, C), C.recordChange({
    type: "visualReplace",
    char: l,
    span: I,
    linewise: x
  });
}

function Mo(l, h, C, x) {
  let {from: T, to: O} = zt(x, h, C);
  if (T === O) return;
  Vo(l, T, O, x);
}

function Eo(l, h, C, x) {
  let T = x.text.slice(h, C), O = "";
  for (let {segment: N} of pa().segment(T)) if (l === "upper") O += N.toUpperCase(); else if (l === "lower") O += N.toLowerCase(); else O += N === N.toUpperCase() ? N.toLowerCase() : N.toUpperCase();
  let I = x.text.slice(0, h) + O + x.text.slice(C), _ = x.cursor;
  x.setText(I), x.setOffset(KX(_, h, I));
}

function Ao(l, h, C, x) {
  let {from: T, to: O} = Mn(h, C, x), I = Vn(C.text.slice(T, O), x);
  Eo(l, T, O, C), C.recordChange({
    type: "visualCase",
    caseOp: l,
    span: I,
    linewise: x
  });
}

function Lo(l, h, C, x) {
  let {from: T, to: O} = zt(x, h, C);
  if (T === O) return;
  Eo(l, T, O, x);
}

function No(l, h, C) {
  let x = h.getRegister();
  if (!x) return;
  let {from: T, to: O} = Mn(l, h, C), I = Vn(h.text.slice(T, O), C), _ = Uo(x, T, O, h, C);
  h.recordChange({
    type: "visualPaste",
    content: _,
    span: I,
    linewise: C
  });
}

function Po(l, h, C, x) {
  let {from: T, to: O} = zt(x, h, C);
  if (T === O && !C) return;
  Uo(l, T, O, x, C);
}

function Uo(l, h, C, x, T) {
  let O = x.text.slice(h, C).endsWith(`\n`), I = l.endsWith(`\n`) ? l.slice(0, -1) : l;
  if (O && !I.endsWith(`\n`)) I += `\n`;
  let _ = x.text.slice(h, C);
  if (T && !_.endsWith(`\n`)) _ += `\n`;
  x.setRegister(_, T);
  let N = x.text.slice(0, h) + I + x.text.slice(C);
  if (x.setText(N), T) {
    let D = ki.fromText(N, x.cursor.measuredText.columns, h), B = Pn(D);
    x.setOffset(D.placeholderStartingAt(B) ? h : B);
  } else if (I.endsWith(`\n`)) x.setOffset(h); else {
    let D = q5(I);
    x.setOffset(Math.max(h, h + I.length - (D.length || 1)));
  }
  return I;
}

function En(l, h, C) {
  let x = h === 0 ? C.cursor.startOfLastLine() : C.cursor.goToLine(h);
  Ln(l, Ze(C.text, C.cursor.offset), Ze(C.text, x.offset), C, Math.min(C.cursor.offset, Pn(x))), 
  at(C, {
    type: "operator",
    op: l,
    motion: "G",
    count: h
  });
}

function An(l, h, C) {
  let x = h === 1 ? C.cursor.startOfFirstLine() : C.cursor.goToLine(h);
  Ln(l, Ze(C.text, C.cursor.offset), Ze(C.text, x.offset), C, Math.min(C.cursor.offset, Pn(x))), 
  at(C, {
    type: "operator",
    op: l,
    motion: "gg",
    count: h
  });
}

function Ln(l, h, C, x, T) {
  let O = x.text.split(`\n`), I = Math.min(h, C), _ = Math.min(Math.max(h, C) + 1, O.length), N = O.slice(0, I), D = O.slice(_), B = ht(O, I), W = O.slice(I, _).map(z => z + `\n`).join("");
  if (x.setRegister(W, !0), l === "yank") {
    let z = Ete(x.text, T);
    x.setOffset(T === x.text.length ? Ko(x.cursor, z) : x.cursor.snapOutOfPlaceholder(z, "start"));
  } else if (l === "delete") {
    let z = [ ...N, ...D ];
    x.setText(z.join(`\n`));
    let H = Math.max(0, Math.min(I, z.length - 1)), J = ki.fromText(z[H] ?? "", x.cursor.measuredText.columns + 1);
    x.setOffset(ht(z, H) + Do(J, D.length > 0));
  } else if (l === "change") x.setText([ ...N, "", ...D ].join(`\n`)), x.enterInsert(B);
}

function Ze(l, h) {
  return Nt(l.slice(0, h), `\n`);
}

function Yt(l) {
  let h = 0;
  for (let {segment: C, index: x} of pa().segment(l)) if (h = x, C !== " " && C !== "\t") break;
  return h;
}

function Do(l, h) {
  let C = Yt(l.text);
  if (l.placeholderStartingAt(C) === null) return C;
  if (C > 0 || h) return 0;
  let x = Ete(l.text, l.text.length);
  return Ko(l, x);
}

function Ko(l, h) {
  let C = l.snapOutOfPlaceholder(h, "start");
  if (C === h) return h;
  let x = l.snapOutOfPlaceholder(h, "end");
  return Dxt(l.text.slice(C, x)) ? x : C;
}

function Pn(l) {
  let h = l.startOfLogicalLine().offset, C = l.endOfLogicalLine().offset;
  return h + Yt(l.text.slice(h, C));
}

var Fo = 1e3;

function gi(l) {
  let h = new Map;
  for (let [C, x] of Object.entries(l)) {
    if (typeof x !== "string" || x.toLowerCase() !== "<esc>") continue;
    let T = C.normalize("NFC");
    if (!/^[^\p{C}\p{Z}]{2}$/u.test(T) || Dee(T) !== 2) continue;
    h.set(T, "<Esc>");
  }
  return h;
}

function PUt() {
  return gi(sI("vimInsertModeRemaps")[0] ?? {});
}

function cr(l, h, C) {
  switch (l.type) {
   case "idle":
    return bi(h, C);

   case "count":
    return yi(l, h, C);

   case "operator":
    return vi(l, h, C);

   case "operatorCount":
    return xi(l, h, C);

   case "operatorFind":
    return Ci(l, h, C);

   case "operatorTextObj":
    return Oi(l, h, C);

   case "find":
    return Ti(l, h, C);

   case "g":
    return Ri(l, h, C);

   case "operatorG":
    return Si(l, h, C);

   case "replace":
    return wi(l, h, C);

   case "indent":
    return Ii(l, h, C);
  }
}

var hi = Object.assign(Object.create(null), {
  g: l => ({
    next: {
      type: "g",
      count: l
    }
  }),
  r: l => ({
    next: {
      type: "replace",
      count: l
    }
  }),
  ">": l => ({
    next: {
      type: "indent",
      dir: ">",
      count: l
    }
  }),
  "<": l => ({
    next: {
      type: "indent",
      dir: "<",
      count: l
    }
  }),
  "~": (l, h) => ({
    execute: () => Sn(l, h)
  }),
  x: (l, h) => ({
    execute: () => On(l, h),
    wanted: null
  }),
  s: (l, h) => ({
    execute: () => Tn(l, h)
  }),
  S: (l, h) => ({
    execute: () => wt("change", l, h)
  }),
  J: (l, h) => ({
    execute: () => ur(l, h)
  }),
  p: (l, h) => ({
    execute: () => $t(!0, l, h),
    wanted: h.getRegister() === "" ? void 0 : null
  }),
  P: (l, h) => ({
    execute: () => $t(!1, l, h),
    wanted: h.getRegister() === "" ? void 0 : null
  }),
  D: (l, h) => ({
    execute: () => St("delete", "$", 1, h),
    wanted: null
  }),
  C: (l, h) => ({
    execute: () => St("change", "$", 1, h)
  }),
  Y: (l, h) => ({
    execute: () => wt("yank", l, h)
  }),
  ";": (l, h) => ({
    execute: () => Dn(!1, l, h)
  }),
  ",": (l, h) => ({
    execute: () => Dn(!0, l, h)
  }),
  u: (l, h) => ({
    execute: () => h.onUndo?.(),
    wanted: null
  }),
  i: (l, h) => ({
    execute: () => Un("i", h)
  }),
  I: (l, h) => ({
    execute: () => Un("I", h)
  }),
  a: (l, h) => ({
    execute: () => Un("a", h)
  }),
  A: (l, h) => ({
    execute: () => Un("A", h)
  }),
  o: (l, h) => ({
    execute: () => Gt("below", h)
  }),
  O: (l, h) => ({
    execute: () => Gt("above", h)
  })
});

function Wo(l, h, C, x) {
  if (rr(l)) return {
    next: {
      type: "operator",
      op: gn[l],
      count: h,
      countTyped: C
    }
  };
  if (l === "G") return {
    execute: () => {
      x.setOffset(C ? x.cursor.goToLine(h).offset : x.text.lastIndexOf(`\n`) + 1);
    }
  };
  if (l === "j" || l === "k") {
    let {offset: T, column: O} = $o(l === "j", h, x), {text: I} = x.cursor;
    if (T === null) return {
      next: {
        type: "idle"
      },
      wanted: {
        column: O,
        offset: x.cursor.offset,
        text: I
      }
    };
    let _ = KX(x.cursor, T);
    return {
      execute: () => x.setOffset(_),
      wanted: {
        column: O,
        offset: _,
        text: I
      }
    };
  }
  if (l === "$") {
    let T = x.cursor.lastCharInLogicalLine().offset;
    return {
      execute: () => x.setOffset(T),
      wanted: {
        column: 1 / 0,
        offset: T,
        text: x.cursor.text
      }
    };
  }
  if (hn.has(l)) {
    let T = l === " " || l === ot ? Ni(l, x.cursor, h) : gt(l, x.cursor, h), O = KX(T, T.offset);
    if (O === x.cursor.offset && Ht.has(l)) return {
      next: {
        type: "idle"
      }
    };
    return {
      execute: () => x.setOffset(O),
      wanted: null
    };
  }
  if (bn.has(l)) return {
    next: {
      type: "find",
      find: l,
      count: h
    }
  };
  if (l === ".") return {
    execute: () => x.onDotRepeat?.(C ? h : void 0)
  };
  return hi[l]?.(h, x) ?? null;
}

function jo(l, h, C, x, T) {
  if (or(x)) return {
    next: {
      type: "operatorTextObj",
      op: l,
      count: h,
      scope: yn[x]
    }
  };
  if (bn.has(x)) return {
    next: {
      type: "operatorFind",
      op: l,
      count: h,
      find: x
    }
  };
  if (hn.has(x)) return {
    execute: () => St(l, x, h, T),
    wanted: x === "j" || x === "k" ? void 0 : null
  };
  if (x === "G") {
    let O = C ? h : 0;
    return {
      execute: () => En(l, O, T)
    };
  }
  if (x === "g") return {
    next: {
      type: "operatorG",
      op: l,
      count: h
    }
  };
  return null;
}

function bi(l, h) {
  if (/[1-9]/.test(l)) return {
    next: {
      type: "count",
      count: parseInt(l, 10)
    }
  };
  if (l === "0") return {
    execute: () => h.setOffset(h.cursor.startOfLogicalLine().offset)
  };
  let C = Wo(l, 1, !1, h);
  if (C) return C;
  return {};
}

function yi(l, h, C) {
  if (/[0-9]/.test(h)) return {
    next: {
      type: "count",
      count: fr(l.count, h)
    }
  };
  let x = Wo(h, l.count, !0, C);
  if (x) return x;
  return {
    next: {
      type: "idle"
    }
  };
}

function vi(l, h, C) {
  if (h === l.op[0]) return {
    execute: () => wt(l.op, l.count, C)
  };
  if (/[1-9]/.test(h)) return {
    next: {
      type: "operatorCount",
      op: l.op,
      count: l.count,
      motionCount: parseInt(h, 10)
    }
  };
  let x = l.countTyped ?? !1, T = jo(l.op, l.count, x, h, C);
  if (T) return T;
  return {
    next: {
      type: "idle"
    }
  };
}

function xi(l, h, C) {
  if (/[0-9]/.test(h)) return {
    next: {
      ...l,
      motionCount: fr(l.motionCount, h)
    }
  };
  let x = l.count * l.motionCount;
  if (h === l.op[0]) return {
    execute: () => wt(l.op, x, C)
  };
  let T = jo(l.op, x, !0, h, C);
  if (T) return T;
  return {
    next: {
      type: "idle"
    }
  };
}

function Ci(l, h, C) {
  return {
    execute: () => {
      if (h !== "") C.setLastFind(l.find, h);
      xn(l.op, l.find, h, l.count, C);
    }
  };
}

function Oi(l, h, C) {
  if (sr.has(h)) return {
    execute: () => Cn(l.op, l.scope, h, l.count, C)
  };
  return {
    next: {
      type: "idle"
    }
  };
}

function Ti(l, h, C) {
  return {
    execute: () => {
      if (h !== "") C.setLastFind(l.find, h);
      let x = C.cursor.findCharacter(h, l.find, l.count);
      if (x !== null) C.setOffset(x);
    }
  };
}

function Ri(l, h, C) {
  if (h === "j" || h === "k") {
    let {offset: x, column: T} = Go(`g${h}`, l.count, C), O = KX(C.cursor, x);
    return {
      execute: () => C.setOffset(O),
      wanted: T === null ? null : {
        column: T,
        offset: O,
        text: C.cursor.text
      }
    };
  }
  if (h === "g") {
    if (l.count > 1) return {
      execute: () => {
        let x = C.text.split(`\n`), T = Math.min(l.count - 1, x.length - 1), O = 0;
        for (let I = 0; I < T; I++) O += (x[I]?.length ?? 0) + 1;
        C.setOffset(O);
      }
    };
    return {
      execute: () => C.setOffset(C.cursor.startOfFirstLine().offset)
    };
  }
  return {
    next: {
      type: "idle"
    }
  };
}

function Si(l, h, C) {
  if (h === "j" || h === "k") return {
    execute: () => St(l.op, `g${h}`, l.count, C)
  };
  if (h === "g") return {
    execute: () => An(l.op, l.count, C)
  };
  return {
    next: {
      type: "idle"
    }
  };
}

function wi(l, h, C) {
  if (h === "") return {
    next: {
      type: "idle"
    }
  };
  return {
    execute: () => Rn(h, l.count, C)
  };
}

function Ii(l, h, C) {
  if (h === l.dir) return {
    execute: () => wn(l.dir, l.count, C)
  };
  return {
    next: {
      type: "idle"
    }
  };
}

function Dn(l, h, C) {
  let x = C.getLastFind();
  if (!x) return;
  let T = x.type;
  if (l) T = {
    f: "F",
    F: "f",
    t: "T",
    T: "t"
  }[T];
  let O = C.cursor.findCharacter(x.char, T, h);
  if (O !== null) C.setOffset(O);
}

function Bo(l, h, C) {
  switch (l.type) {
   case "idle":
    return _i(h, C);

   case "count":
    return Mi(l, h, C);

   case "find":
    return Ei(l, h, C);

   case "g":
    return Ai(l, h, C);

   case "replace":
    if (h === "") return {
      next: {
        type: "idle"
      }
    };
    return {
      exit: "replace",
      char: h
    };

   case "textObject":
    return Li(l, h, C);
  }
}

var Vi = Object.assign(Object.create(null), {
  x: () => ({
    exit: "operator",
    op: "delete"
  }),
  s: () => ({
    exit: "operator",
    op: "change"
  }),
  X: () => ({
    exit: "operator",
    op: "delete",
    forceLinewise: !0
  }),
  D: () => ({
    exit: "operator",
    op: "delete",
    forceLinewise: !0
  }),
  C: () => ({
    exit: "operator",
    op: "change",
    forceLinewise: !0
  }),
  S: () => ({
    exit: "operator",
    op: "change",
    forceLinewise: !0
  }),
  R: () => ({
    exit: "operator",
    op: "change",
    forceLinewise: !0
  }),
  Y: () => ({
    exit: "operator",
    op: "yank",
    forceLinewise: !0
  }),
  r: () => ({
    next: {
      type: "replace"
    }
  }),
  "~": () => ({
    exit: "case",
    op: "toggle"
  }),
  u: () => ({
    exit: "case",
    op: "lower"
  }),
  U: () => ({
    exit: "case",
    op: "upper"
  }),
  p: () => ({
    exit: "paste"
  }),
  P: () => ({
    exit: "paste"
  }),
  ">": l => ({
    exit: "indent",
    dir: ">",
    count: l
  }),
  "<": l => ({
    exit: "indent",
    dir: "<",
    count: l
  }),
  v: () => ({
    exit: "toggleKind",
    key: "v"
  }),
  V: () => ({
    exit: "toggleKind",
    key: "V"
  }),
  o: () => ({
    exit: "swap"
  }),
  J: () => ({
    exit: "join"
  }),
  $: (l, h) => {
    let C = h.cursor.endOfLogicalLine().offset;
    return {
      next: {
        type: "idle"
      },
      move: () => h.setOffset(C),
      wanted: {
        column: 1 / 0,
        offset: C,
        text: h.cursor.text
      }
    };
  },
  g: l => ({
    next: {
      type: "g",
      count: l
    }
  }),
  ";": (l, h) => ({
    next: {
      type: "idle"
    },
    move: () => Dn(!1, l, h)
  }),
  ",": (l, h) => ({
    next: {
      type: "idle"
    },
    move: () => Dn(!0, l, h)
  })
});

function Ho(l, h, C, x) {
  if (rr(l)) return {
    exit: "operator",
    op: gn[l]
  };
  if (l === "G") return {
    next: {
      type: "idle"
    },
    move: () => {
      x.setOffset(C ? x.cursor.goToLine(h).offset : x.text.lastIndexOf(`\n`) + 1);
    }
  };
  let T = Vi[l];
  if (T) return T(h, x);
  if (or(l)) return {
    next: {
      type: "textObject",
      scope: yn[l],
      count: h
    }
  };
  if (l === "j" || l === "k") {
    let O = $o(l === "j", h, x), I = O.offset ?? x.cursor.offset;
    return {
      next: {
        type: "idle"
      },
      move: () => x.setOffset(I),
      wanted: {
        column: O.column,
        offset: I,
        text: x.cursor.text
      }
    };
  }
  if (hn.has(l)) {
    let {offset: O} = gt(l, x.cursor, h);
    if (O === x.cursor.offset && Ht.has(l)) return {
      next: {
        type: "idle"
      }
    };
    return {
      next: {
        type: "idle"
      },
      move: () => x.setOffset(O)
    };
  }
  if (bn.has(l)) return {
    next: {
      type: "find",
      find: l,
      count: h
    }
  };
  return null;
}

function _i(l, h) {
  if (/[1-9]/.test(l)) return {
    next: {
      type: "count",
      count: parseInt(l, 10)
    }
  };
  if (l === "0") return {
    next: {
      type: "idle"
    },
    move: () => h.setOffset(h.cursor.startOfLogicalLine().offset)
  };
  return Ho(l, 1, !1, h) ?? {
    next: {
      type: "idle"
    }
  };
}

function Mi(l, h, C) {
  if (/[0-9]/.test(h)) return {
    next: {
      type: "count",
      count: fr(l.count, h)
    }
  };
  return Ho(h, l.count, !0, C) ?? {
    next: {
      type: "idle"
    }
  };
}

function Ei(l, h, C) {
  return {
    next: {
      type: "idle"
    },
    move: () => {
      if (h !== "") C.setLastFind(l.find, h);
      let x = C.cursor.findCharacter(h, l.find, l.count);
      if (x !== null) C.setOffset(x);
    }
  };
}

function Ai(l, h, C) {
  if (h === "j" || h === "k") {
    let {offset: x, column: T} = Go(`g${h}`, l.count, C);
    return {
      next: {
        type: "idle"
      },
      move: () => C.setOffset(x),
      wanted: T === null ? null : {
        column: T,
        offset: x,
        text: C.cursor.text
      }
    };
  }
  if (h === "g") return {
    next: {
      type: "idle"
    },
    move: () => {
      let x = l.count > 1 ? C.cursor.goToLine(l.count) : C.cursor.startOfFirstLine();
      C.setOffset(x.offset);
    }
  };
  return {
    next: {
      type: "idle"
    }
  };
}

function Li(l, h, C) {
  if (sr.has(h)) {
    let x = vn(C.text, C.cursor.offset, h, l.scope === "inner");
    if (x) return {
      exit: "selectRange",
      start: x.start,
      end: x.end
    };
  }
  return {
    next: {
      type: "idle"
    }
  };
}

function fr(l, h) {
  return Math.min(l * 10 + parseInt(h, 10), co);
}

function dr(l, h) {
  switch (l) {
   case "i":
    return h.offset;

   case "I":
    return h.firstNonBlankInLogicalLine().offset;

   case "a":
    return h.isAtEnd() || h.text[h.offset] === `\n` ? h.offset : h.right().offset;

   case "A":
    return h.endOfLogicalLine().offset;
  }
}

function Un(l, h) {
  h.enterInsert(dr(l, h.cursor)), h.recordChange({
    type: "insertCommand",
    key: l
  });
}

function Ni(l, h, C) {
  let x = h;
  for (let T = 0; T < C; T++) {
    let O = gt(l, x, 1), {text: I, offset: _} = O;
    if (I[_] === `\n` && _ > 0 && I[_ - 1] !== `\n`) O = l === ot ? new ki(O.measuredText, KX(O, _)) : gt(l, O, 1);
    if (O.equals(x)) break;
    x = O;
  }
  return x;
}

function $o(l, h, C) {
  let {cursor: x} = C, T = x.text, O = x.startOfLogicalLine().offset, I = jt(x, C.wantedColumn), _ = O;
  for (let W = 0; W < h; W++) if (l) {
    let z = T.indexOf(`\n`, _);
    if (z === -1) break;
    _ = z + 1;
  } else if (_ === 0) break; else _ = _ === 1 ? 0 : T.lastIndexOf(`\n`, _ - 2) + 1;
  if (_ === O) return {
    offset: null,
    column: I
  };
  let N = T.indexOf(`\n`, _), D = N === -1 ? T.length : N, B = Bt(T, _, D, I);
  return {
    offset: In(x, B, _),
    column: I
  };
}

function Go(l, h, C) {
  let {cursor: x} = C, T = gt(l, x, h), O = x.measuredText.getWrappedLines(), I = O[x.getPosition().line], _ = O[T.getPosition().line], N = I?.startOffset === 0 || I?.isPrecededByNewline, D = _?.startOffset === 0 || _?.isPrecededByNewline;
  if (T.equals(x) || !N || !D || !_) return {
    offset: T.offset,
    column: null
  };
  let B = jt(x, C.wantedColumn), W = _.startOffset + _.text.length, z = Bt(x.text, _.startOffset, W, B), H = In(x, z, _.startOffset), J = !_.endsWithNewline && W < x.text.length;
  return {
    offset: H === W && J ? x.measuredText.prevOffset(W) : H,
    column: B
  };
}

var br = new Set([ "backspace", "delete", "tab", "home", "end", "pageup", "pagedown", "insert", "clear", "enter", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12" ]);

function pr(l, h) {
  return (h || l.name === "") && !br.has(l.name);
}

function mr(l) {
  if (!l) return !1;
  switch (l.type) {
   case "insertCommand":
   case "openLine":
   case "substitute":
    return !0;

   case "operator":
   case "operatorFind":
   case "operatorTextObj":
   case "visualOp":
    return l.op === "change";

   default:
    return !1;
  }
}

function Pi(l) {
  switch (l.type) {
   case "x":
   case "substitute":
   case "paste":
   case "operatorTextObj":
    return !0;

   case "operator":
    return ![ "h", "l", " ", ot, "gj", "gk" ].includes(l.motion);

   default:
    return !1;
  }
}

function gr(l, h) {
  return {
    ...l,
    setText: (C, x) => {
      h(), l.setText(C, x);
    },
    setOffset: C => {
      h(), l.setOffset(C);
    },
    enterInsert: C => {
      h(), l.enterInsert(C);
    },
    setRegister: (C, x) => {
      h(), l.setRegister(C, x);
    }
  };
}

function zo(l, h) {
  let C = KX(l, l.offset);
  if (C !== l.offset) h.setOffset(C);
  return C;
}

function hr(l, h, C) {
  if (l.wanted !== void 0) return l.wanted ?? void 0;
  return h ? void 0 : C;
}

function yr(l) {
  let {value: h, onChange: C, columns: x, disableEscapeDoublePress: T, onModeChange: O, onUndo: I, onOpenHistorySearch: _, onToggleHelp: N, onHistoryUp: D, onHistoryDown: B, inputFilter: W, getInputMode: z} = l, H = R(fo()), [J, re] = y("INSERT"), [_e, ke] = y(null), X = R(null), ue = R(Ui()), ye = R(null), ve = R(null), fe = R(null);
  function Ie(M, j) {
    let L = H.current;
    if (L.mode === "INSERT" && !j.ctrl && !j.meta && pr(j, [ ...j.key ].length === 1)) H.current = {
      mode: "INSERT",
      insertedText: L.insertedText + M.normalize("NFC")
    };
  }
  let de = ae((M, j = "") => {
    let L = H.current;
    if (L.mode !== "INSERT") return;
    let U = j !== "" && L.insertedText.endsWith(j) ? L.insertedText.slice(0, -j.length) : L.insertedText;
    H.current = {
      mode: "INSERT",
      insertedText: U + M
    };
  }, []);
  function ee(M, j, L, U) {
    for (let Y of M.keys()) if (Y.startsWith(j)) {
      X.current = {
        char: j,
        at: Date.now(),
        offsetAfter: L,
        recorded: U
      };
      return;
    }
  }
  let xe = ae(() => {
    X.current = null;
  }, []), q = ae(() => {
    let M = H.current;
    if (M.mode !== "INSERT") H.current = {
      ...M,
      wanted: void 0
    };
  }, []), oe = ae((M, j) => {
    if (j !== void 0) M.setOffset(j);
    X.current = null, ve.current = null, fe.current = null, H.current = {
      mode: "INSERT",
      insertedText: ""
    }, re("INSERT"), ke(null), O?.("INSERT");
  }, [ O ]), te = ae((M, j) => {
    let L = H.current;
    if (L.mode === "INSERT") {
      let U = ye.current, Y = U === ve.current;
      if (U?.type === "visualOp" && U.op === "change" && Y) ye.current = {
        type: "visualChange",
        span: U.span,
        linewise: U.linewise,
        text: L.insertedText ?? ""
      }; else if (mr(U) && U.type !== "visualOp" && Y && (L.insertedText || (j?.buffer ? j.buffer.text : h.normalize("NFC")) === fe.current)) ye.current = {
        ...U,
        insertedText: L.insertedText
      }; else if (L.insertedText || j?.claimEmptyInsert && !mr(U)) ye.current = {
        type: "insert",
        text: L.insertedText
      };
      let se = j?.buffer ? j.buffer.offset : M.offset, Ue = j?.buffer ? j.buffer.text : h.normalize("NFC");
      if (se > 0 && Ue[se - 1] !== `\n`) {
        let Ee = se > Ue.length ? 1 : q5(Ue.slice(0, se)).length;
        M.setOffset(se - Ee);
      } else if (j?.buffer) M.setOffset(se);
    }
    H.current = {
      mode: "NORMAL",
      command: {
        type: "idle"
      }
    }, re("NORMAL"), ke(null), O?.("NORMAL");
  }, [ O, h ]), ne = ae((M, j, L) => {
    H.current = {
      mode: "VISUAL",
      kind: j,
      anchor: M,
      command: {
        type: "idle"
      },
      wanted: L
    };
    let U = j === "line" ? "VISUAL LINE" : "VISUAL";
    re(U), ke(M), O?.(U);
  }, [ O ]);
  function Ke(M, j, L = !1) {
    let U;
    return {
      cursor: M,
      text: M.text,
      setText: (Y, se) => {
        U = Y, C(Y, se);
      },
      setOffset: Y => j.setOffset(Y),
      enterInsert: Y => {
        oe(j, Y), fe.current = U ?? M.text;
      },
      getRegister: () => ue.current.register,
      getRegisterIsLinewise: () => ue.current.registerIsLinewise,
      setRegister: (Y, se) => {
        ue.current.register = Y, ue.current.registerIsLinewise = se;
      },
      getLastFind: () => ue.current.lastFind,
      setLastFind: (Y, se) => {
        ue.current.lastFind = {
          type: Y,
          char: se
        };
      },
      recordChange: L ? () => {} : Y => {
        if (ye.current = Y, mr(Y) && H.current.mode === "INSERT") ve.current = Y;
      }
    };
  }
  function Ce(M, j, L) {
    let U = M.text;
    return {
      ...M,
      setText: (Y, se) => {
        let Ue = {
          value: U,
          cursorOffset: M.cursor.offset
        };
        U = Y, M.setText(Y, se ?? {
          previous: Ue
        });
      },
      enterInsert: Y => {
        let se = U.slice(0, Y) + j + U.slice(Y), Ue = {
          value: U,
          cursorOffset: Y
        }, Ee = Ve(se, L, Ue) ? j.slice(1) : j;
        M.setText(se, {
          previous: Ue
        });
        let Ae = U.slice(0, Y), be = (Ae + Ee).normalize("NFC"), Se = be.startsWith(Ae) ? q5(be.slice(Ae.length)) : "", ge = Se && !/^[\p{Mn}\p{Me}]/u.test(Se) ? Se : q5(be), he = be.endsWith(`\n`) ? be.length : be.length - ge.length, Ne = Y > 0 && Ae[Y - 1] !== `\n` ? Y - q5(Ae).length : Y;
        M.setOffset(Ee ? he : Ne);
      }
    };
  }
  function Ve(M, j, L) {
    return z !== void 0 && BVo({
      nextValue: M,
      value: L?.value ?? h,
      cursorOffset: L?.cursorOffset ?? j.offset,
      mode: z()
    });
  }
  function je(M, j, L, U) {
    if (M.type === "insertCommand") {
      if (M.insertedText === void 0) return;
      let Y = dr(M.key, j);
      j = new ki(j.measuredText, Y), M = {
        type: "insert",
        text: M.insertedText
      };
    }
    if ("insertedText" in M && M.insertedText !== void 0) L = Ce(L, M.insertedText, U);
    switch (M.type) {
     case "insert":
      if (M.text) {
        let Y = j.insert(M.text), se = Ve(Y.text, U);
        L.setText(Y.text);
        let Ue = se ? Y.text.slice(1) : Y.text, Ee = Y.offset - (se ? 1 : 0);
        L.setOffset(Ue[Ee - 1] === `\n` ? Ee : Ee - q5(Ue.slice(0, Ee)).length);
      }
      break;

     case "x":
      On(M.count, L);
      break;

     case "substitute":
      Tn(M.count, L);
      break;

     case "replace":
      Rn(M.char, M.count, L);
      break;

     case "toggleCase":
      Sn(M.count, L);
      break;

     case "indent":
      wn(M.dir, M.count, L);
      break;

     case "join":
      Oo(M.count, L);
      break;

     case "openLine":
      Gt(M.direction, L);
      break;

     case "operator":
      if (M.motion === M.op[0]) wt(M.op, M.count, L); else if (M.motion === "gg") An(M.op, M.count, L); else if (M.motion === "G") En(M.op, M.count, L); else St(M.op, M.motion, M.count, L);
      break;

     case "operatorFind":
      xn(M.op, M.find, M.char, M.count, L);
      break;

     case "operatorTextObj":
      Cn(M.op, M.scope, M.objType, M.count, L);
      break;

     case "visualOp":
      ko(M.op, M.span, M.linewise, L);
      break;

     case "visualReplace":
      Mo(M.char, M.span, M.linewise, L);
      break;

     case "visualCase":
      Lo(M.caseOp, M.span, M.linewise, L);
      break;

     case "visualPaste":
      Po(M.content, M.span, M.linewise, L);
      break;

     case "visualIndent":
      Ro(M.dir, M.count, M.lines, L);
      break;

     case "visualChange":
      Io(M.span, M.linewise, Ce(L, M.text, U));
      break;

     case "paste":
      $t(M.after, M.count, L);
      break;
    }
  }
  function Oe(M) {
    let j = ye.current;
    if (j && M !== void 0 && "count" in j && Pi(j)) return {
      ...j,
      count: M
    };
    return j;
  }
  function Be(M, j) {
    let L = Oe(j);
    if (!L) return;
    let U = ki.fromText(h, x, M.offset);
    je(L, U, Ke(U, M, !0), M);
  }
  function $e(M, j) {
    let L = h.normalize("NFC"), U = j.offset, Y = (Ee, Ae) => {
      let be = Ae?.previous;
      if (!Ve(Ee, j, be)) L = Ee; else if (Ee.length !== (be?.value ?? h).length + 1) L = Ee.slice(1);
      C(Ee, Ae);
    }, se = Ee => {
      let Ae = Oe(Ee);
      if (!Ae) return;
      let be = ki.fromText(L, x, U);
      je(Ae, be, {
        ...Ke(be, j, !0),
        text: L,
        setText: Y,
        setOffset: Se => {
          U = Se, j.setOffset(Se);
        },
        enterInsert: Se => {
          U = Se, oe(j, Se);
        }
      }, j);
    }, Ue = [ ...M ];
    for (let Ee = 0; Ee < Ue.length; Ee++) {
      if (H.current.mode === "INSERT") {
        let pe = Ue.slice(Ee).join(""), Ge = PUt();
        if (Ge.size > 0 && Ge.has(pe.normalize("NFC"))) {
          g("vim_insert_remap"), te(j, {
            buffer: {
              text: L,
              offset: U
            },
            claimEmptyInsert: !0
          });
          return;
        }
        let He = ki.fromText(L, x, U).insert(pe), it = Ve(He.text, j), Ye = He.offset - (it ? 1 : 0);
        C(He.text), j.setOffset(Ye), H.current = {
          mode: "INSERT",
          insertedText: H.current.insertedText + pe
        };
        let Wt = it ? pe.slice(1) : pe, _t = q5(He.text.slice(0, He.offset));
        if (_t && Wt.endsWith(_t)) ee(Ge, _t, Ye, !0);
        return;
      }
      let Ae = H.current;
      if (Ae.mode !== "NORMAL") return;
      let be = Ue[Ee];
      if ((be === "v" || be === "V") && (Ae.command.type === "idle" || Ae.command.type === "count")) {
        ne(U, be === "V" ? "line" : "char", Ae.wanted);
        return;
      }
      let Se = ki.fromText(L, x, U), ge = !1, he = {
        ...Ke(Se, j, !1),
        text: L,
        setText: Y,
        setOffset: pe => {
          U = pe, j.setOffset(pe);
        },
        enterInsert: pe => {
          U = pe, oe(j, pe);
        },
        onDotRepeat: pe => {
          ge ||= ye.current !== null, se(pe);
        },
        wantedColumn: Ae.wanted
      }, Ne = gr(he, () => {
        ge = !0;
      }), me = cr(Ae.command, be, Ne);
      if (me.execute) me.execute();
      if (H.current.mode === "NORMAL" && (me.next || me.execute || me.wanted !== void 0)) H.current = {
        mode: "NORMAL",
        command: me.next ?? {
          type: "idle"
        },
        wanted: hr(me, ge, Ae.wanted)
      };
    }
  }
  function Qe(M, j) {
    let L = H.current, U = ki.fromText(h, x, j.offset), Y = () => W?.(M.key, M);
    if (!(M.name === "left" && !M.ctrl && !M.meta && !M.fn && !M.superKey && !M.shift)) j.disarmLeftArrowConfirm?.();
    let se = X.current;
    if (X.current = null, M.ctrl || M.meta) {
      if (L.mode === "VISUAL") {
        Y(), te(j), M.preventDefault();
        return;
      }
      j.handleKeyDown(M);
      return;
    }
    if (M.name === "escape") {
      if (Y(), L.mode === "NORMAL") H.current = {
        mode: "NORMAL",
        command: {
          type: "idle"
        },
        wanted: L.wanted
      }; else if (L.mode === "VISUAL" && L.command.type !== "idle") H.current = {
        ...L,
        command: {
          type: "idle"
        }
      }; else {
        if (L.mode === "VISUAL") zo(U, j);
        te(j);
      }
      if (!T) M.preventDefault();
      return;
    }
    if (M.name === "return" && L.mode !== "VISUAL") {
      j.handleKeyDown(M);
      return;
    }
    if (L.mode === "INSERT") {
      if (M.name === "backspace" || M.name === "delete") {
        if (L.insertedText.length > 0) H.current = {
          mode: "INSERT",
          insertedText: L.insertedText.slice(0, -(q5(L.insertedText).length || 1))
        };
      }
      let ge = PUt();
      if (ge.size > 0) {
        let he = M.key.normalize("NFC"), Ne = [ ...he ].length, me = Ne === 1, pe = pr(M, me);
        if (pe && Ne <= 2 && se && ge.has(se.char + Zve(he)) && Date.now() - se.at <= Fo && j.offset === se.offsetAfter && U.text.startsWith(se.char, U.offset - se.char.length)) {
          if (Y(), se.recorded && L.insertedText.endsWith(se.char)) H.current = {
            mode: "INSERT",
            insertedText: L.insertedText.slice(0, -se.char.length)
          };
          let it = U.offset - se.char.length, Ye = U.text.slice(0, it) + U.text.slice(U.offset);
          C(Ye), g("vim_insert_remap"), te(j, {
            buffer: {
              text: Ye,
              offset: it
            },
            claimEmptyInsert: !0
          }), M.preventDefault();
          return;
        }
        if (pe && !me && ge.has(he)) {
          Y(), g("vim_insert_remap"), te(j, {
            claimEmptyInsert: !0
          }), M.preventDefault();
          return;
        }
        let He = pe ? q5(he) : "";
        if (He) ee(ge, He, j.offset + he.length, pr(M, [ ...M.key ].length === 1));
      }
      j.handleKeyDown(M);
      return;
    }
    if (L.mode === "VISUAL") {
      let ge = !1, he = gr({
        ...Ke(U, j, !1),
        onUndo: I,
        onDotRepeat: () => Be(j),
        wantedColumn: L.wanted
      }, () => {
        ge = !0;
      }), Ne = L.command.type === "idle" || L.command.type === "count", me = M.key;
      if (M.name === "left") me = Ne ? "h" : ""; else if (M.name === "right") me = Ne ? "l" : ""; else if (M.name === "up") me = Ne ? "k" : ""; else if (M.name === "down") me = Ne ? "j" : ""; else if (M.name === "return") me = Ne ? "j" : `\n`; else if (M.name === "backspace") me = Ne ? ot : ""; else if (M.name === "delete") me = Ne && L.command.type !== "count" ? "x" : ""; else if (M.key === "" || br.has(M.name)) {
        M.preventDefault();
        return;
      } else if ([ ...M.key ].length > 1) {
        M.preventDefault();
        return;
      }
      Y();
      let pe = Bo(L.command, me, he), Ge = L.kind === "line";
      if ("next" in pe) pe.move?.(), H.current = {
        mode: "VISUAL",
        kind: L.kind,
        anchor: L.anchor,
        command: pe.next,
        wanted: hr(pe, ge, L.wanted)
      }; else switch (pe.exit) {
       case "operator":
        if (wo(pe.op, L.anchor, he, Ge || pe.forceLinewise === !0), H.current.mode === "VISUAL") te(j);
        break;

       case "replace":
        _o(pe.char, L.anchor, he, Ge), te(j);
        break;

       case "case":
        Ao(pe.op, L.anchor, he, Ge), te(j);
        break;

       case "paste":
        if (he.getRegister()) No(L.anchor, he, Ge), te(j); else H.current = {
          ...L,
          command: {
            type: "idle"
          }
        };
        break;

       case "join":
        Co(L.anchor, he, Ge), te(j);
        break;

       case "indent":
        To(pe.dir, pe.count, L.anchor, he), te(j);
        break;

       case "swap":
        {
          let He = U.offset;
          j.setOffset(L.anchor), H.current = {
            mode: "VISUAL",
            kind: L.kind,
            anchor: He,
            command: {
              type: "idle"
            }
          }, ke(He);
          break;
        }

       case "selectRange":
        {
          let He = pe.end > pe.start ? U.measuredText.prevOffset(pe.end) : pe.start;
          j.setOffset(He), H.current = {
            mode: "VISUAL",
            kind: L.kind,
            anchor: pe.start,
            command: {
              type: "idle"
            }
          }, ke(pe.start);
          break;
        }

       default:
        {
          let He = pe.key === "V" ? "line" : "char";
          if (He === L.kind) {
            let it = zo(U, j);
            te(j);
            let {wanted: Ye} = L;
            if (Ye?.offset === U.offset && Ye.text === U.text) H.current = {
              mode: "NORMAL",
              command: {
                type: "idle"
              },
              wanted: {
                ...Ye,
                offset: it
              }
            };
          } else ne(L.anchor, He, L.wanted);
          break;
        }
      }
      M.preventDefault();
      return;
    }
    if (L.mode !== "NORMAL") return;
    if (L.command.type === "idle" && !M.shift && (M.name === "up" || M.name === "down" || M.name === "left" && U.text === "")) {
      j.handleKeyDown(M);
      return;
    }
    if (L.command.type === "idle" && M.key === "?" && N) {
      N(), M.preventDefault();
      return;
    }
    if (Y(), L.command.type === "idle" && M.key === "/" && _) {
      _(), M.preventDefault();
      return;
    }
    if (L.command.type === "idle") {
      if (M.key === "k") {
        let ge = U.text.indexOf(`\n`);
        if (ge === -1 || U.offset <= ge) {
          D?.(), M.preventDefault();
          return;
        }
      }
      if (M.key === "j") {
        let ge = U.text.lastIndexOf(`\n`);
        if (ge === -1 || U.offset > ge) {
          B?.(), M.preventDefault();
          return;
        }
      }
    }
    let Ue = !1, Ee = gr({
      ...Ke(U, j, !1),
      onUndo: I,
      onDotRepeat: ge => {
        Ue ||= ye.current !== null, Be(j, ge);
      },
      wantedColumn: L.wanted
    }, () => {
      Ue = !0;
    }), Ae = L.command.type === "idle" || L.command.type === "count" || L.command.type === "operator" || L.command.type === "operatorCount", be = M.key;
    if (M.name === "left") be = "h"; else if (M.name === "right") be = "l"; else if (M.name === "up") be = "k"; else if (M.name === "down") be = "j"; else if (Ae && M.name === "backspace") be = ot; else if (Ae && L.command.type !== "count" && M.name === "delete") be = "x"; else if (M.key === "" || br.has(M.name)) return; else if ([ ...M.key ].length > 1) {
      $e(M.key, j), M.preventDefault();
      return;
    }
    if ((be === "v" || be === "V") && (L.command.type === "idle" || L.command.type === "count")) {
      ne(U.offset, be === "V" ? "line" : "char", L.wanted);
      return;
    }
    let Se = cr(L.command, be, Ee);
    if (Se.execute) Se.execute();
    if (H.current.mode === "NORMAL" && (Se.next || Se.execute || Se.wanted !== void 0)) H.current = {
      mode: "NORMAL",
      command: Se.next ?? {
        type: "idle"
      },
      wanted: hr(Se, Ue, L.wanted)
    };
    M.preventDefault();
  }
  let G = ae((M, j) => {
    if (X.current = null, ve.current = null, M === "INSERT") H.current = {
      mode: "INSERT",
      insertedText: ""
    }, ke(null); else if (M === "NORMAL") H.current = {
      mode: "NORMAL",
      command: {
        type: "idle"
      }
    }, ke(null); else {
      let L = M === "VISUAL LINE" ? "line" : "char", U = j.offset;
      H.current = {
        mode: "VISUAL",
        kind: L,
        anchor: U,
        command: {
          type: "idle"
        }
      }, ke(U);
    }
    re(M), O?.(M);
  }, [ O ]);
  return {
    handleKeyDown: Qe,
    mode: J,
    setMode: G,
    visualAnchor: _e,
    recordInsertedText: Ie,
    recordInsert: de,
    cancelPendingRemap: xe,
    forgetColumn: q
  };
}

function MBo(l) {
  let {inputFilter: h} = l, C = R(null), x = yr({
    value: l.value,
    onChange: (O, I) => {
      if (O === "" && l.value !== "") C.current?.();
      l.onChange(O, I);
    },
    columns: l.columns,
    disableEscapeDoublePress: l.disableEscapeDoublePress,
    onModeChange: l.onModeChange,
    onUndo: l.onUndo && (() => {
      C.current?.(), l.onUndo?.();
    }),
    onOpenHistorySearch: l.onOpenHistorySearch,
    onToggleHelp: l.onToggleHelp,
    onHistoryUp: l.onHistoryUp && (() => {
      C.current?.(), l.onHistoryUp?.();
    }),
    onHistoryDown: l.onHistoryDown && (() => {
      C.current?.(), l.onHistoryDown?.();
    }),
    inputFilter: h,
    getInputMode: l.getInputMode
  }), T = A1t({
    ...l,
    selectionAnchor: x.visualAnchor,
    selectionLinewise: x.mode === "VISUAL LINE",
    inputFilter: (O, I) => {
      let _ = h ? h(O, I) : O;
      if (O === `\n` && (I.name === "return" || I.name === "enter" || I.ctrl && I.name === "j")) {
        let N = I.name === "return" && l.multiline === !0 && l.disableBackslashReturn !== !0;
        x.recordInsert(_, N ? "\\" : "");
      } else x.recordInsertedText(_, I);
      return _;
    }
  });
  return C.current = T.noteKeystrokeEmptied ?? null, {
    ...T,
    handleKeyDown: O => x.handleKeyDown(O, T),
    recordInsert: x.recordInsert,
    mode: x.mode,
    setMode: O => x.setMode(O, T),
    cancelPendingRemap: x.cancelPendingRemap,
    forgetColumn: x.forgetColumn
  };
}

function Ui() {
  let l = xNo();
  if (l) return l;
  let h = po();
  return PNo(h), h;
}

function Ki(l) {
  if (l.ctrl && (l.key === "k" || l.key === "u" || l.key === "w")) return !0;
  if ((l.meta || l.ctrl) && l.key === "backspace") return !0;
  if (l.meta && !l.ctrl && l.key.toLowerCase() === "d") return !0;
  return !1;
}

function Fi(l) {
  return (l.ctrl || l.meta) && l.key === "y";
}

var Wi = new Set([ "pageup", "pagedown", "insert", "wheelup", "wheeldown", "mouse", "clear", "enter", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12" ]);

function Fy({isActive: l, onExit: h, onCancel: C, onExitUp: x, onExitDown: T, columns: O, passthroughCtrlKeys: I = [], initialQuery: _ = "", buffer: N, backspaceExitsOnEmpty: D = !0, multiline: B = !1, onSpaceOnEmpty: W, onTabOnEmpty: z, honorEditorMode: H = !1}) {
  let J = Mze(), {columns: re} = Te(), _e = O ?? re, [ke, X] = y(_), [ue, ye] = y(_.length), ve = Re(N, G => G.query), fe = Re(N, G => G.cursorOffset), Ie = ve ?? ke, de = fe ?? ue, ee = R(ke), xe = R(ue), q = Z(() => N ? {
    get current() {
      return N.getSnapshot().query;
    },
    set current(G) {
      N.setQueryAndCursor(G, N.getSnapshot().cursorOffset);
    }
  } : ee, [ N ]), oe = Z(() => N ? {
    get current() {
      return N.getSnapshot().cursorOffset;
    },
    set current(G) {
      N.setQueryAndCursor(N.getSnapshot().query, G);
    }
  } : xe, [ N ]), te = ae(G => {
    if (N) {
      N.setQueryAndCursor(G, N.getSnapshot().cursorOffset);
      return;
    }
    ee.current = G, X(G);
  }, [ N ]), ne = ae(G => {
    if (N) {
      N.setQueryAndCursor(N.getSnapshot().query, G);
      return;
    }
    xe.current = G, ye(G);
  }, [ N ]), Ke = ae(G => {
    te(G), ne(G.length);
  }, [ te, ne ]), Ce = ae(G => {
    if (!l || !B || G.name !== "return") return !1;
    let M = oe.current;
    return M > 0 && q.current[M - 1] === "\\" || G.shift || G.meta;
  }, [ l, B ]), Ve = G => {
    if (!l) return;
    let M = q.current, j = oe.current, L = ki.fromText(M, _e, j);
    if (!Ki(G) && !Fi(G)) J.dispatch({
      type: "interrupt"
    });
    if (G.ctrl && I.includes(G.key.toLowerCase())) return;
    if (G.name === "return") {
      if (G.preventDefault(), Ce(G)) {
        if (M[j - 1] === "\\") {
          te(M.slice(0, j - 1) + `\n` + M.slice(j));
          return;
        }
        te(M.slice(0, j) + `\n` + M.slice(j)), ne(j + 1);
        return;
      }
      h();
      return;
    }
    if (B && (G.name === "enter" || G.ctrl && !G.shift && !G.meta && G.name === "j")) {
      G.preventDefault();
      let U = L.insert(`\n`);
      te(U.text), ne(U.offset);
      return;
    }
    if (G.name === "down") {
      if (G.preventDefault(), B) {
        let U = L.down();
        if (!U.equals(L)) {
          ne(U.offset);
          return;
        }
      }
      if (T) T(); else if (!B) h();
      return;
    }
    if (G.name === "up") {
      if (G.preventDefault(), B) {
        let U = L.up();
        if (!U.equals(L)) {
          ne(U.offset);
          return;
        }
      }
      if (x) x();
      return;
    }
    if (G.name === "escape") {
      if (G.preventDefault(), C) C(); else if (M.length > 0) te(""), ne(0); else h();
      return;
    }
    if (G.name === "backspace") {
      if (G.preventDefault(), G.meta || G.ctrl) {
        let {cursor: Y, killed: se} = L.backwardKillWord();
        J.dispatch({
          type: "kill",
          text: se,
          direction: "prepend"
        }), te(Y.text), ne(Y.offset);
        return;
      }
      if (M.length === 0) {
        if (D) (C ?? h)();
        return;
      }
      let U = L.backspace();
      te(U.text), ne(U.offset);
      return;
    }
    if (G.name === "delete") {
      G.preventDefault();
      let U = L.del();
      te(U.text), ne(U.offset);
      return;
    }
    if (G.name === "left" && (G.ctrl || G.meta || G.fn)) {
      G.preventDefault(), ne(L.backwardWord().offset);
      return;
    }
    if (G.name === "right" && (G.ctrl || G.meta || G.fn)) {
      G.preventDefault(), ne(L.forwardWord().offset);
      return;
    }
    if (G.name === "left") {
      G.preventDefault();
      let U = L.left();
      ne(U.offset);
      return;
    }
    if (G.name === "right") {
      G.preventDefault();
      let U = L.right();
      ne(U.offset);
      return;
    }
    if (G.name === "home") {
      G.preventDefault(), ne(L.startOfLine().offset);
      return;
    }
    if (G.name === "end") {
      G.preventDefault(), ne(L.endOfLine().offset);
      return;
    }
    if (G.ctrl) {
      switch (G.preventDefault(), G.key.toLowerCase()) {
       case "a":
        ne(L.startOfLogicalLine().offset);
        return;

       case "e":
        ne(L.endOfLogicalLine().offset);
        return;

       case "b":
        ne(L.left().offset);
        return;

       case "f":
        ne(L.right().offset);
        return;

       case "d":
        {
          if (M.length === 0) {
            (C ?? h)();
            return;
          }
          let U = L.del();
          te(U.text), ne(U.offset);
          return;
        }

       case "h":
        {
          if (M.length === 0) {
            if (D) (C ?? h)();
            return;
          }
          let U = L.backspace();
          te(U.text), ne(U.offset);
          return;
        }

       case "k":
        {
          let {cursor: U, killed: Y} = L.deleteToLineEnd();
          J.dispatch({
            type: "kill",
            text: Y,
            direction: "append"
          }), te(U.text), ne(U.offset);
          return;
        }

       case "u":
        {
          let {cursor: U, killed: Y} = L.deleteToLineStart();
          J.dispatch({
            type: "kill",
            text: Y,
            direction: "prepend"
          }), te(U.text), ne(U.offset);
          return;
        }

       case "w":
        {
          let {cursor: U, killed: Y} = L.deleteWORDBefore();
          J.dispatch({
            type: "kill",
            text: Y,
            direction: "prepend"
          }), te(U.text), ne(U.offset);
          return;
        }

       case "y":
        {
          let U = F7e(J.state);
          if (U.length > 0) {
            let Y = L.offset, se = L.insert(U);
            J.dispatch({
              type: "yank",
              start: Y,
              length: U.length
            }), te(se.text), ne(se.offset);
          }
          return;
        }

       case "g":
       case "c":
        if (C) {
          C();
          return;
        }
      }
      return;
    }
    if (G.meta) {
      switch (G.preventDefault(), G.key.toLowerCase()) {
       case "b":
        ne(L.backwardWord().offset);
        return;

       case "f":
        ne(L.forwardWord().offset);
        return;

       case "d":
        {
          let {cursor: U, killed: Y} = L.killWord();
          J.dispatch({
            type: "kill",
            text: Y,
            direction: "append"
          }), te(U.text), ne(U.offset);
          return;
        }

       case "y":
        {
          let U = lgn(J.state);
          if (U) {
            let {text: Y, start: se, length: Ue} = U;
            J.dispatch({
              type: "yankPop"
            });
            let Ee = M.slice(0, se), Ae = M.slice(se + Ue), be = Ee + Y + Ae, Se = se + Y.length;
            J.dispatch({
              type: "updateYankLength",
              length: Y.length
            }), te(be), ne(Se);
          }
          return;
        }
      }
      return;
    }
    if (G.name === "tab") {
      if (G.preventDefault(), z && M === "") z();
      return;
    }
    if (W && G.key === " " && M === "") {
      G.preventDefault(), W();
      return;
    }
    if (G.key.length >= 1 && !Wi.has(G.name)) {
      G.preventDefault();
      let U = L.insert(G.key);
      te(U.text), ne(U.offset);
    }
  }, je = H && vte(), Oe = yr({
    value: Ie,
    onChange: te,
    columns: _e,
    onHistoryUp: x,
    onHistoryDown: T
  }), Be = {
    handleKeyDown: Ve,
    offset: de,
    setOffset: ne
  };
  return {
    query: Ie,
    queryRef: q,
    setQuery: Ke,
    cursorOffset: de,
    cursorOffsetRef: oe,
    willInsertNewline: Ce,
    setCursorOffset: ne,
    handleKeyDown: G => {
      if (!je) {
        Ve(G);
        return;
      }
      if (!l) return;
      if (G.name === "escape" && Oe.mode === "NORMAL") {
        Oe.handleKeyDown(G, Be), Ve(G);
        return;
      }
      Oe.handleKeyDown(G, Be);
    },
    handlePaste: G => {
      if (!l || G.text.length === 0) return;
      G.preventDefault(), Oe.cancelPendingRemap();
      let M = B ? G.text.replace(/\r\n|\r/g, `\n`) : G.text.split(/\r\n|\r|\n/, 2)[0] ?? "";
      if (M.length === 0) return;
      let L = ki.fromText(q.current, _e, oe.current).insert(M);
      te(L.text), ne(L.offset);
    },
    vimMode: je ? Oe.mode : void 0,
    enterInsertMode: () => {
      if (je) Oe.setMode("INSERT", Be);
    }
  };
}

F();

class Yo {
  #e={
    credentialsPersisted: 0,
    loginCompleted: 0
  };
  #t=Me();
  subscribe=l => this.#t.subscribe(l);
  getSnapshot=() => this.#e;
  credentialsPersisted() {
    this.#e = {
      ...this.#e,
      credentialsPersisted: this.#e.credentialsPersisted + 1
    }, this.#t.emit();
  }
  loginCompleted() {
    this.#e = {
      ...this.#e,
      loginCompleted: this.#e.loginCompleted + 1
    }, this.#t.emit();
  }
}

var $We = new lt(() => new Yo);

function FWe() {
  let l = xA();
  return Re(l && $We.of(l), h => h.loginCompleted) ?? 0;
}

function kL() {
  let l = V(x => AJt(x.settings)), h = FWe(), C = Z(() => l && e_r(), [ h, l ]);
  return P(() => {
    if (!Ji().claim("voice_init_gate")) return;
    i("tengu_voice_init_gate", {
      user_intent_store: l,
      user_intent_disk: AJt(dt()),
      has_voice_auth: e_r(),
      voice_mode_allowed: t_r(),
      auth_version: h
    });
  }, []), C && t_r();
}

F();

function ia(xu) {
  return xu.voiceState;
}

function aa(Cu) {
  return Cu.settings.voice?.mode ?? "hold";
}

function ua(ro) {
  if (!ro.voiceWarmingUp) {
    return ro;
  }
  return {
    ...ro,
    voiceWarmingUp: !1
  };
}

function la(oo) {
  if (!oo.awaitingVoiceSubmitDoubleTap) {
    return oo;
  }
  return {
    ...oo,
    awaitingVoiceSubmitDoubleTap: !1
  };
}

function ca(so) {
  if (!so.voiceWarmingUp) {
    return so;
  }
  return {
    ...so,
    voiceWarmingUp: !1
  };
}

function fa(io) {
  if (!io.awaitingVoiceSubmitDoubleTap) {
    return io;
  }
  return {
    ...io,
    awaitingVoiceSubmitDoubleTap: !1
  };
}

function da(ao) {
  if (!ao.awaitingVoiceSubmitDoubleTap) {
    return ao;
  }
  return {
    ...ao,
    awaitingVoiceSubmitDoubleTap: !1
  };
}

function ga(uo) {
  if (!uo.voiceWarmingUp) {
    return uo;
  }
  return {
    ...uo,
    voiceWarmingUp: !1
  };
}

function ha(lo) {
  if (lo.voiceWarmingUp) {
    return lo;
  }
  return {
    ...lo,
    voiceWarmingUp: !0
  };
}

var ls = import.meta.require("./chunk-ngcezrvw.js"), Mt = 120, Xo = 2e3, qo = 5, Kn = 2, Jo = 300;

function Qo(l, h) {
  if ((l.key === "return" ? "enter" : l.key.toLowerCase()) !== h.key) return !1;
  if (l.ctrl !== h.ctrl) return !1;
  if (l.shift !== h.shift) return !1;
  if (l.meta !== (h.alt || h.meta)) return !1;
  if (l.superKey !== h.super) return !1;
  return !0;
}

function Zo(l) {
  return NT.changed.subscribe(l);
}

function es() {
  return fDn(NT);
}

function TQe({composer: l, isActive: h = !0}) {
  let {addNotification: C} = vo(), x = Zmn(), T = VMe(), O = R(null), I = R(""), _ = R(null), N = ae((X, {char: ue = " ", anchor: ye = !1, floor: ve = 0} = {}) => {
    let {value: fe, cursorOffset: Ie} = l, de = fe.slice(0, Ie), ee = fe.slice(Ie), xe = ue === " " ? c6(de) : de, q = 0;
    while (q < xe.length && xe[xe.length - 1 - q] === ue) q++;
    let oe = Math.max(0, Math.min(q - ve, X)), te = q - oe, ne = de.slice(0, de.length - oe), Ke = "";
    if (ye) {
      if (O.current = ne, I.current = ee, ee.length > 0 && !/^\s/.test(ee)) Ke = " ";
    }
    let Ce = ne + Ke + ee;
    if (ye) _.current = Ce;
    if (Ce === fe && oe === 0) return te;
    return l.setValueWithCursor(Ce, ne.length), te;
  }, [ l ]), D = ae(() => {
    let X = O.current;
    if (X === null) return;
    let ue = I.current;
    if (O.current = null, I.current = "", l.value !== _.current) return;
    l.setValueWithCursor(X + ue, X.length);
  }, [ l ]), B = kL(), W = V(X => X.settings.voice?.autoSubmit === !0), z = V(X => X.settings.voice?.mode ?? "hold"), H = Ch(X => X.voiceState), J = Ch(X => X.voiceInterimTranscript);
  P(() => {
    if (h && T().voiceState === "recording" && O.current === null) {
      let {value: X, cursorOffset: ue} = l;
      O.current = X.slice(0, ue), I.current = X.slice(ue), _.current = X;
    }
    if (H === "idle") O.current = null, I.current = "", _.current = null;
  }, [ H, T, l, h ]), P(() => {
    if (O.current === null) return;
    let X = O.current, ue = I.current;
    if (l.value !== _.current) return;
    let ye = X.length > 0 && !/\s$/.test(X) && J.length > 0, ve = ue.length > 0 && !/^\s/.test(ue), fe = ye ? " " : "", Ie = ve ? " " : "", de = X + fe + J + Ie + ue, ee = X.length + fe.length + J.length;
    l.setValueWithCursor(de, ee), _.current = de;
  }, [ J, l ]);
  let re = ae(X => {
    let ue = O.current;
    if (ue === null) {
      m("voice_transcript_insert", "no_anchor");
      return;
    }
    let ye = I.current;
    if (l.value !== _.current) {
      f("voice_transcript_insert", "input_diverged");
      return;
    }
    let ve = ue.length > 0 && !/\s$/.test(ue) && X.length > 0, fe = ye.length > 0 && !/^\s/.test(ye) && X.length > 0, Ie = ve ? " " : "", de = fe ? " " : "", ee = ue + Ie + X + de + ye, xe = ue.length + Ie.length + X.length;
    l.setValueWithCursor(ee, xe), _.current = ee, g("voice_transcript_insert"), O.current = ue + Ie + X;
    let q = z === "tap" || W, oe = l.submit !== void 0 && q && z$s(X) >= 3 && l.submit(ee, !0);
    x(te => {
      let ne = l.submit !== void 0 && z !== "tap" && !oe;
      if (te.awaitingVoiceSubmitDoubleTap === ne) return te;
      return {
        ...te,
        awaitingVoiceSubmitDoubleTap: ne
      };
    });
  }, [ l, x, W, z ]), _e = ls.useVoice({
    onTranscript: re,
    onError: X => {
      C({
        key: "voice-error",
        kind: "warning",
        text: X,
        color: "error",
        priority: "immediate",
        timeoutMs: 1e4
      });
    },
    enabled: B,
    focusMode: !1,
    mode: z
  }), ke = Z(() => {
    if (O.current === null) return null;
    if (J.length === 0) return null;
    let X = O.current, ue = X.length > 0 && !/\s$/.test(X) && J.length > 0, ye = X.length + (ue ? 1 : 0), ve = ye + J.length;
    return {
      start: ye,
      end: ve
    };
  }, [ J ]);
  return Zt(() => {
    l.setInterimRange?.(ke);
  }, [ l, ke ]), {
    stripTrailing: N,
    resetAnchor: D,
    handleKeyEvent: _e.handleKeyEvent,
    cancelRecording: _e.cancelRecording,
    interimRange: ke
  };
}

function UWe(l) {
  let fe = w(33), {voiceHandleKeyEvent: h, voiceCancelRecording: C, stripTrailing: x, resetAnchor: T, isActive: O, composerTakesTypedKeys: I, composer: _} = l, N = I === void 0 ? !0 : I, D = VMe(), B = Zmn(), W = fd(), z = C6(), H = kL(), J = Ch(ia), re = V(aa), _e = an(), ke = xt(Zo, es), X = W ? W.bindings : ke, ue;
  ye: {
    if (!H) {
      ue = null;
      break ye;
    }
    let ve = null;
    if (fe[0] !== X || fe[1] !== ve) {
      for (const Ie of X) {
        if (Ie.context !== "Chat") {
          continue;
        }
        if (Ie.chord.length !== 1) {
          continue;
        }
        let de = Ie.chord[0];
        if (!de) {
          continue;
        }
        if (Ie.action === "voice:pushToTalk") ve = de; else if (ve !== null && jNe(de, ve)) ve = null;
      }
      fe[0] = X, fe[1] = ve, fe[2] = ve;
    } else ve = fe[2];
    ue = ve;
  }
  let ee = ue, xe;
  if (fe[3] !== ee) xe = ee ? zgr(ee, _F()) : null, fe[3] = ee, fe[4] = xe; else xe = fe[4];
  let q = xe, oe = ee !== null && ee.key.length === 1 && !ee.ctrl && !ee.alt && !ee.shift && !ee.meta && !ee.super ? ee.key : null, te = R(0), ne = R(0), Ke = R(0), Ce = R(!1), Ve = R(null), je = R(0), Oe = R(null), Be, $e;
  if (fe[5] !== B || fe[6] !== J) Be = () => {
    if (J !== "recording") Ce.current = !1, Ke.current = 0, B(ua); else {
      if (je.current = 0, Oe.current) Oe.current(), Oe.current = null;
      B(la);
    }
  }, $e = [ J, B ], fe[5] = B, fe[6] = J, fe[7] = Be, fe[8] = $e; else Be = fe[7], 
  $e = fe[8];
  P(Be, $e);
  let Qe, G;
  if (fe[9] === S) Qe = () => () => {
    if (Oe.current) Oe.current(), Oe.current = null;
  }, G = [], fe[9] = Qe, fe[10] = G; else Qe = fe[9], G = fe[10];
  P(Qe, G);
  let M;
  if (fe[11] !== B) M = function j() {
    if (te.current === 0) {
      return;
    }
    if (Ve.current) Ve.current(), Ve.current = null;
    te.current = 0, ne.current = 0, B(ca);
  }, fe[11] = B, fe[12] = M; else M = fe[12];
  let j = M, L;
  if (fe[13] !== oe || fe[14] !== _e || fe[15] !== _ || fe[16] !== N || fe[17] !== D || fe[18] !== O || fe[19] !== z || fe[20] !== T || fe[21] !== j || fe[22] !== B || fe[23] !== x || fe[24] !== C || fe[25] !== H || fe[26] !== h || fe[27] !== ee || fe[28] !== re) L = U => {
    if (!H) {
      return;
    }
    if (!O || z) {
      return;
    }
    if ((U.key === "escape" || U.key === "c" && U.ctrl && !U.shift && !U.meta) && D().voiceState !== "idle") {
      U.stopImmediatePropagation(), C(), T();
      return;
    }
    if (oe !== null && !N) {
      return;
    }
    if (re !== "tap" && _.submit !== void 0 && D().awaitingVoiceSubmitDoubleTap) {
      let Y = _.submit;
      let se = () => {
        if (je.current = 0, Oe.current) Oe.current(), Oe.current = null;
      };
      let Ue = () => {
        se(), B(fa);
      };
      let Ee = oe !== null && !U.ctrl && !U.meta && !U.shift && (oe === " " ? c6(U.key) : U.key)[0] === oe;
      let Ae = _.cursorOffset === _.value.length;
      if (!Ee || !Ae) Ue(); else if (Oe.current !== null) Ue(); else if (D().voiceState === "idle") {
        let be = Date.now();
        let Se = je.current;
        if (Se !== 0 && be - Se <= Jo) {
          U.stopImmediatePropagation(), je.current = 0, Oe.current = _e.setTimeout(() => {
            Oe.current = null;
            let ge = D();
            if (ge.voiceState !== "idle" || !ge.awaitingVoiceSubmitDoubleTap) {
              return;
            }
            let he = _.value;
            let Ne = he.endsWith(oe) || oe === " " && he.endsWith("\u3000") ? he.slice(0, -1) : he;
            if (!Y(Ne, !0)) {
              return;
            }
            B(da);
          }, Mt);
          return;
        }
        if (Se !== 0) Ue(); else je.current = be;
      }
    }
    if (ee === null) {
      return;
    }
    let me;
    if (oe !== null) {
      let pe = oe === " " ? c6(U.key) : U.key;
      me = !U.ctrl && !U.meta && !U.shift && pe[0] === oe && (pe.length === 1 || pe === oe.repeat(pe.length)) ? pe.length : null;
    } else me = Qo(U, ee) ? 1 : null;
    if (me === null) {
      j();
      return;
    }
    if (re === "tap") {
      let Ge = D().voiceState;
      if (Ge === "processing") {
        if (oe === null) U.stopImmediatePropagation();
        return;
      }
      let He = Ge === "idle";
      if (He && _.value.length > 0) {
        return;
      }
      U.stopImmediatePropagation();
      let it = te.current === 0;
      if (te.current = te.current + me, Ve.current) Ve.current();
      if (Ve.current = _e.setTimeout(() => {
        Ve.current = null, j();
      }, Mt), !it) {
        if (oe !== null) x(me, {
          char: oe,
          floor: 0
        });
        return;
      }
      if (He) {
        if (oe !== null) x(me, {
          char: oe,
          anchor: !0
        }); else x(0, {
          anchor: !0
        });
      } else if (oe !== null) x(me, {
        char: oe,
        floor: 0
      });
      if (h(), He && D().voiceState === "idle") T();
      return;
    }
    let Ye = D().voiceState;
    if (Ce.current && Ye !== "idle") {
      if (U.stopImmediatePropagation(), oe !== null) x(me, {
        char: oe,
        floor: Ke.current
      });
      h();
      return;
    }
    if (Ye === "recording") {
      if (oe === null) U.stopImmediatePropagation();
      return;
    }
    if (Ye === "processing" && oe === null) {
      U.stopImmediatePropagation();
      return;
    }
    let Wt = te.current;
    if (te.current = te.current + me, oe === null || Ye === "idle" && te.current >= qo) {
      if (U.stopImmediatePropagation(), Ve.current) Ve.current(), Ve.current = null;
      if (te.current = 0, Ce.current = !0, B(ga), oe !== null) Ke.current = x(ne.current + me, {
        char: oe,
        anchor: !0
      }), ne.current = 0, h(); else x(0, {
        anchor: !0
      }), h(Xo);
      if (D().voiceState === "idle") Ce.current = !1, T();
      return;
    }
    if (Wt >= Kn) U.stopImmediatePropagation(), x(me, {
      char: oe,
      floor: ne.current
    }); else ne.current = ne.current + me;
    if (Ye === "idle" && te.current >= Kn) B(ha);
    if (Ve.current) Ve.current();
    Ve.current = _e.setTimeout(() => {
      Ve.current = null, j();
    }, Mt);
  }, fe[13] = oe, fe[14] = _e, fe[15] = _, fe[16] = N, fe[17] = D, fe[18] = O, fe[19] = z, 
  fe[20] = T, fe[21] = j, fe[22] = B, fe[23] = x, fe[24] = C, fe[25] = H, fe[26] = h, 
  fe[27] = ee, fe[28] = re, fe[29] = L; else L = fe[29];
  let _t = L, ni;
  if (fe[30] !== _t || fe[31] !== q) ni = {
    handleKeyDown: _t,
    voiceKeyDisplay: q
  }, fe[30] = _t, fe[31] = q, fe[32] = ni; else ni = fe[32];
  return ni;
}

function wa(O) {
  return O.settings.voice?.mode ?? "hold";
}

var cs = {
  r: 153,
  g: 153,
  b: 153
}, fs = {
  r: 185,
  g: 185,
  b: 185
}, ds = 2;

function EMe(l) {
  let x = w(3), {voiceState: h} = l, C = V(wa);
  switch (h) {
   case "recording":
    {
      if (C === "tap") {
        let T;
        if (x[0] === S) T = r(n, {
          children: [ r(n, {
            color: "error",
            children: [ yo, " REC" ]
          }), e(n, {
            dimColor: !0,
            children: " \xb7 tap to send"
          }) ]
        }), x[0] = T; else T = x[0];
        return T;
      }
      let T;
      if (x[1] === S) T = e(n, {
        dimColor: !0,
        children: "listening\u2026"
      }), x[1] = T; else T = x[1];
      return T;
    }

   case "processing":
    {
      let T;
      if (x[2] === S) T = e(Pr, {}), x[2] = T; else T = x[2];
      return T;
    }

   case "idle":
    {
      return null;
    }
  }
}

function HUt() {
  let h = w(2), [, l] = v_t(), C;
  if (h[0] !== l) C = l ? e(n, {
    color: l.hex,
    children: l.char
  }) : null, h[0] = l, h[1] = C; else C = h[1];
  return C;
}

function kMe() {
  let l = w(1), h;
  if (l[0] === S) h = e(n, {
    dimColor: !0,
    children: "keep holding\u2026"
  }), l[0] = h; else h = l[0];
  return h;
}

function Pr() {
  let T = w(8), l = id(), h = Dg(l.prefersReducedMotion), [C, x] = ma(h ? null : 50);
  if (h) {
    let O;
    if (T[0] === S) O = e(n, {
      color: "warning",
      children: "Voice: processing\u2026"
    }), T[0] = O; else O = T[0];
    return O;
  }
  let I = x / 1e3, _ = (Math.sin(I * Math.PI * 2 / ds) + 1) / 2, O;
  if (T[1] !== _) {
    let N = Zg() ? OA(_) : _;
    O = Dm(sy(cs, fs, N));
    T[1] = _, T[2] = O;
  } else O = T[2];
  let D = O, B;
  if (T[3] !== D) B = e(n, {
    color: D,
    children: "Voice: processing\u2026"
  }), T[3] = D, T[4] = B; else B = T[4];
  let W;
  if (T[5] !== C || T[6] !== B) W = e(s, {
    ref: C,
    children: B
  }), T[5] = C, T[6] = B, T[7] = W; else W = T[7];
  return W;
}

F();

F();

import { basename as Ut, dirname as Xn } from "path";

F();

var At = we(vy(), 1);

function gs(l) {
  return `${At.major(l, {
    loose: !0
  })}.${At.minor(l, {
    loose: !0
  })}.${At.patch(l, {
    loose: !0
  })}`;
}

function tn(l, h = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.299",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-13T21:37:33Z",
  GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
  HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "default"
}.VERSION) {
  return Z(() => {
    if (!l) return null;
    let C = gs(l);
    return C === gs(h) ? null : C;
  }, [ l, h ]);
}

var Ts = 2;

function Hr({isUpdating: l, onChangeIsUpdating: h, showSuccessMessage: C, verbose: x, withSeparator: T}) {
  let {storageV5: O} = Pe(), I = V(fe => fe.autoUpdaterResult), _ = Nn(), [N, D] = y({}), [B, W] = y(!1), z = tn(I?.version);
  P(() => {
    h0e().then(W);
  }, []);
  let H = R(l), J = R(I?.status), re = R(I?.consecutiveExeLockFailures ?? 0);
  P(() => {
    H.current = l, J.current = I?.status, re.current = I?.consecutiveExeLockFailures ?? 0;
  });
  let _e = ae(async () => {
    if (H.current) return;
    if (J.current === "no_permissions") {
      t("AutoUpdater: Skipping update check (no_permissions persists this session)");
      return;
    }
    if (re.current >= Ts) {
      t("AutoUpdater: Skipping update check (claude.exe locked by another process; damped for this session)");
      return;
    }
    if (rfe()) return;
    if (Knt()) return;
    let fe = {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION, Ie = Fq(), de = await qnt(Ie), {maxVersion: ee, forceDowngradeEnabled: xe} = await y0e(), q = null, oe = !1;
    if (xe && ee) {
      if (oe = sKe(fe, ee, "auto_updater"), oe) q = ee;
    }
    if (!q && de) {
      if (ee && Sy(de, ee)) if (t(`AutoUpdater: maxVersion ${ee} is set, capping update from ${de} to ${ee}`), 
      Sy(ee, fe)) q = ee; else t(`AutoUpdater: current version ${fe} is already at or above maxVersion ${ee}, skipping update`); else if (Sy(de, fe)) q = de;
    }
    if (D({
      global: fe,
      latest: q ?? de
    }), !q || iKe(q)) return;
    if (oe) i("tengu_auto_updater_forced_downgrade", {
      from_version: Di(fe),
      to_version: Di(q)
    });
    let te = Date.now();
    h(!0);
    let ne = ce();
    if (ne.installMethod !== "native" && !Le(process.env.DISABLE_INSTALLATION_CHECKS)) await ikt();
    let Ke = await g0e();
    if (t(`AutoUpdater: Detected installation type: ${Ke}`), Ke === "development") {
      t("AutoUpdater: Cannot auto-update development build"), h(!1);
      return;
    }
    let Ce, Ve, je;
    if (Ke === "npm-local") t("AutoUpdater: Using local update method"), Ve = "local", 
    Ce = await Gnt(Ie, q, O); else if (Ke === "npm-global") t("AutoUpdater: Using global update method"), 
    Ve = "global", je = await Ynt(q, O), Ce = je.status; else if (Ke === "native") {
      t("AutoUpdater: Unexpected native installation in non-native updater"), h(!1);
      return;
    } else {
      t("AutoUpdater: Unknown installation type, falling back to config");
      let Be = ne.installMethod === "local";
      if (Ve = Be ? "local" : "global", Be) Ce = await Gnt(Ie, q, O); else je = await Ynt(q, O), 
      Ce = je.status;
    }
    h(!1);
    let Oe = je?.failureHint;
    if (Ce !== "in_progress") rKe({
      timestamp: (new Date).toISOString(),
      path: Ve === "local" ? "npm-local" : "npm-global",
      outcome: Ce === "success" ? "success" : "failed",
      status: Ce,
      version_from: fe,
      version_to: q,
      error_code: Ce === "install_failed" && aKe() ? "update_apply_restore_failed" : R4t(Oe)
    }, O);
    if (Ce === "success") {
      let Be = je?.probeDurationMs ?? 0;
      i("tengu_auto_updater_success", {
        fromVersion: Di(fe),
        toVersion: Di(q),
        durationMs: Date.now() - te - Be,
        probeDurationMs: Be,
        wasMigrated: Ve === "local",
        installationType: c(Ke)
      });
    } else if (Ce !== "in_progress") {
      let Be = Ce;
      i("tengu_auto_updater_fail", {
        fromVersion: Di(fe),
        attemptedVersion: Di(q),
        status: c(Be),
        durationMs: Date.now() - te,
        wasMigrated: Ve === "local",
        installationType: c(Ke)
      });
    }
    _(Be => {
      let $e = Be.autoUpdaterResult, Qe = $e?.consecutiveExeLockFailures ?? 0, G = Ce === "in_progress" ? Qe : Oe === "windows_running_exe_lock" ? Qe + 1 : 0;
      if ($e?.version === q && $e?.status === Ce && $e?.failureHint === Oe && ($e?.consecutiveExeLockFailures ?? 0) === G) return Be;
      return {
        ...Be,
        autoUpdaterResult: {
          version: q,
          status: Ce,
          failureHint: Oe,
          consecutiveExeLockFailures: G
        }
      };
    });
  }, [ _, O ]), ke = xo(fe => {
    h(!1), d(fe);
  });
  if (P(() => {
    _e().catch(ke);
  }, [ _e ]), Gi(() => void _e().catch(ke), 18e5), !I?.version && (!N.global || !N.latest)) return null;
  if (!I?.version && !l) return null;
  let X = I?.status === "install_failed" ? aKe() : null, ue = null;
  switch (I?.failureHint) {
   case "windows_running_exe_lock":
    ue = "claude.exe in use (close other Claude Code sessions, including VS Code)";
    break;

   case "native_binary_missing":
    ue = "native binary for this platform was not downloaded (will retry)";
    break;

   case void 0:
    break;
  }
  if (!(x || l || I?.status === "success" && C && !!z || I?.status === "no_permissions" || I?.status === "install_failed")) return null;
  return r(s, {
    flexDirection: "row",
    gap: 1,
    children: [ T === void 0 ? null : e(n, {
      dimColor: !0,
      children: T ? " \xb7" : ""
    }), x && r(n, {
      dimColor: !0,
      wrap: "truncate",
      children: [ "globalVersion: ", N.global, " \xb7 latestVersion:", " ", N.latest ]
    }), l ? e(Q, {
      children: e(s, {
        children: e(n, {
          color: "text",
          dimColor: !0,
          wrap: "truncate",
          children: "Auto-updating\u2026"
        })
      })
    }) : I?.status === "success" && C && z && r(n, {
      color: "success",
      wrap: "truncate",
      children: [ e(ct, {
        status: "success",
        withSpace: !0
      }), "Update installed \xb7 Restart to apply" ]
    }), I?.status === "no_permissions" && r(n, {
      color: "error",
      wrap: "truncate",
      children: [ e(ct, {
        status: "error",
        withSpace: !0
      }), "Auto-update failed: no write permission to npm prefix \xb7 Run", " ", e(n, {
        bold: !0,
        children: "claude doctor"
      }) ]
    }), I?.status === "install_failed" && (X ? X.preservedPath ? r(s, {
      flexDirection: "column",
      children: [ r(n, {
        color: "error",
        wrap: "truncate",
        children: [ e(ct, {
          status: "error",
          withSpace: !0
        }), "Update failed and ", Ut(X.originalPath), " could not be restored \u2014 it was preserved at:" ]
      }), Xn(X.preservedPath) === Xn(X.originalPath) ? r(n, {
        color: "error",
        wrap: "truncate",
        children: [ X.preservedPath, " \xb7 rename it back to", " ", Ut(X.originalPath), " or run", " ", r(n, {
          bold: !0,
          children: [ "npm i -g ", {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.299",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-13T21:37:33Z",
            GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
            HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
          }.PACKAGE_URL ]
        }) ]
      }) : r(n, {
        color: "error",
        wrap: "truncate",
        children: [ X.preservedPath, " \xb7 reinstall with", " ", r(n, {
          bold: !0,
          children: [ "npm i -g ", {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.299",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-13T21:37:33Z",
            GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
            HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
          }.PACKAGE_URL ]
        }) ]
      }) ]
    }) : r(n, {
      color: "error",
      wrap: "truncate",
      children: [ e(ct, {
        status: "error",
        withSpace: !0
      }), "Update failed and ", Ut(X.originalPath), " could not be restored (no preserved copy found) \xb7 reinstall with", " ", r(n, {
        bold: !0,
        children: [ "npm i -g ", {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.299",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-13T21:37:33Z",
          GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
          HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "default"
        }.PACKAGE_URL ]
      }) ]
    }) : ue ? r(n, {
      color: "error",
      wrap: "truncate",
      children: [ e(ct, {
        status: "error",
        withSpace: !0
      }), "Auto-update failed: ", ue, " \xb7 Run", " ", e(n, {
        bold: !0,
        children: "claude doctor"
      }) ]
    }) : r(n, {
      color: "error",
      wrap: "truncate",
      children: [ e(ct, {
        status: "error",
        withSpace: !0
      }), "Auto-update failed \xb7 Try ", e(n, {
        bold: !0,
        children: "claude doctor"
      }), " or", " ", e(n, {
        bold: !0,
        children: B ? `cd ~/.claude/local && npm update ${{
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.299",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-13T21:37:33Z",
          GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
          HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "default"
        }.PACKAGE_URL}` : `npm i -g ${{
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.299",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-13T21:37:33Z",
          GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
          HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "default"
        }.PACKAGE_URL}`
      }) ]
    })) ]
  });
}

F();

function $a(l) {
  if (l instanceof LM) return "signature_verification";
  if (l instanceof C4t) return "checksum_mismatch";
  let h = l instanceof Error ? l.message : String(l), C = E(l);
  if (l instanceof A4t || C === "ETIMEDOUT" || C === "ECONNABORTED" || h.includes("Download timed out") || h.includes("timeout")) return "timeout";
  if (h.includes("Checksum mismatch")) return "checksum_mismatch";
  if (h.includes("ENOENT") || h.includes("not found")) return "not_found";
  if (h.includes("EACCES") || h.includes("permission")) return "permission_denied";
  if (h.includes("ENOSPC")) return "disk_full";
  if (h.includes("npm")) return "npm_error";
  if (h.includes("network") || h.includes("ECONNREFUSED") || h.includes("ENOTFOUND")) return "network_error";
  let x = h.toLowerCase();
  if (h.includes("ENOEXEC") || x.includes("exec format error") || x.includes("bad cpu type") || x.includes("cannot execute binary") || x.includes("code signature") || x.includes("gatekeeper") || x.includes("killed: 9")) return "exec_format";
  if (x.includes("virus") || x.includes("quarantine") || x.includes("defender") || x.includes("operation did not complete successfully because the file contains")) return "av_quarantine";
  if (h.includes("EXDEV") || h.includes("EEXIST") || h.includes("EBUSY") || x.includes("rename") || x.includes("move failed") || x.includes("cross-device")) return "swap_failure";
  return "unknown";
}

function Ga(l) {
  if (l.wasUpdated) return "tengu_native_auto_updater_success";
  if (l.skippedUnverifiedRelease) return "tengu_native_auto_updater_skipped_unverified_release";
  return "tengu_native_auto_updater_up_to_date";
}

function za() {
  return i8() && !yd()?.bridgeSessionId && "version" in xAt() && Bis();
}

function Ya() {
  let l = k("tengu_fancy_wand_copy", {}).offer;
  return typeof l === "string" && l !== "" ? l : "/restart to apply";
}

function Rs() {
  return za() ? Ya() : "Restart to update";
}

function Ss() {
  return AT(Rs);
}

function $r({isUpdating: l, onChangeIsUpdating: h, showSuccessMessage: C, verbose: x, withSeparator: T, atPrompt: O}) {
  let {storageV5: I} = Pe(), _ = V(fe => fe.autoUpdaterResult), N = Nn(), [D, B] = y({
    current: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION
  }), [W, z] = y(null), H = tn(_?.version), J = Fq();
  async function re() {
    if (l) return;
    if (_?.status === "success") return;
    if (rfe()) return;
    let fe = await vCn();
    if (fe && Sy({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION, fe)) {
      let de = await ees();
      z(de ?? "affects your version");
    }
    if (Knt()) return;
    h(!0);
    let Ie = Date.now();
    i("tengu_native_auto_updater_start", {});
    try {
      let de = await nKe(J, !1, I), ee = {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION, xe = Date.now() - Ie;
      if (de.lockFailed) {
        i("tengu_native_auto_updater_lock_contention", {
          latency_ms: xe
        });
        return;
      }
      if (B({
        current: ee,
        latest: de.latestVersion
      }), i(Ga(de), {
        latency_ms: xe
      }), de.wasUpdated) mto(), rKe({
        timestamp: (new Date).toISOString(),
        path: "native",
        outcome: "success",
        status: "success",
        version_from: ee,
        version_to: de.latestVersion ?? null,
        error_code: null
      }, I), N(q => {
        let oe = q.autoUpdaterResult;
        if (oe?.version === de.latestVersion && oe?.status === "success") return q;
        return {
          ...q,
          autoUpdaterResult: {
            version: de.latestVersion,
            status: "success"
          }
        };
      });
    } catch (de) {
      let ee = Date.now() - Ie, xe = de instanceof Error ? de.message : String(de);
      t(`Native auto-updater failed: ${xe}`, {
        level: "error"
      }), rKe({
        timestamp: (new Date).toISOString(),
        path: "native",
        outcome: "failed",
        status: "install_failed",
        version_from: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.299",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-13T21:37:33Z",
          GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
          HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION,
        version_to: null,
        error_code: null
      }, I);
      let q = $a(de), oe = zr(de) ?? b("none");
      i("tengu_native_auto_updater_fail", {
        latency_ms: ee,
        error_code: oe,
        error_timeout: q === "timeout",
        error_checksum: q === "checksum_mismatch",
        error_signature: q === "signature_verification",
        error_not_found: q === "not_found",
        error_permission: q === "permission_denied",
        error_disk_full: q === "disk_full",
        error_npm: q === "npm_error",
        error_network: q === "network_error",
        error_swap_failure: q === "swap_failure",
        error_exec_format: q === "exec_format",
        error_av_quarantine: q === "av_quarantine"
      }), N(te => {
        let ne = te.autoUpdaterResult;
        if (ne?.version === null && ne?.status === "install_failed") return te;
        return {
          ...te,
          autoUpdaterResult: {
            version: null,
            status: "install_failed"
          }
        };
      });
    } finally {
      h(!1);
    }
  }
  let _e = xo(re);
  P(() => {
    _e();
  }, [ J ]), Gi(() => void re(), 18e5);
  let ke = !!_?.status, X = !!D.current && !!D.latest;
  if (!((!!W || ke || l && X) && (x || l || _?.status === "success" && C && !!H || _?.status === "install_failed" || !1))) return null;
  return r(s, {
    flexDirection: "row",
    gap: 1,
    children: [ T === void 0 ? null : e(n, {
      dimColor: !0,
      children: T ? " \xb7" : ""
    }), x && r(n, {
      dimColor: !0,
      wrap: "truncate",
      children: [ "current: ", D.current, " \xb7 ", J, ": ", D.latest ]
    }), l ? e(s, {
      children: e(n, {
        dimColor: !0,
        wrap: "truncate",
        children: "Checking for updates"
      })
    }) : _?.status === "success" && C && H && r(n, {
      color: "success",
      wrap: "truncate",
      children: [ e(ct, {
        status: "success",
        withSpace: !0
      }), "Update installed \xb7", " ", O ? e(Ss, {}) : "Restart to update" ]
    }), _?.status === "install_failed" && r(n, {
      color: "error",
      wrap: "truncate",
      children: [ e(ct, {
        status: "error",
        withSpace: !0
      }), "Auto-update failed \xb7 Run ", e(n, {
        bold: !0,
        children: "claude doctor"
      }) ]
    }), W && !1 ]
  });
}

F();

import { homedir as ks } from "os";

import { join as Xa } from "path";

class ws {
  packageManagerUpdateLastFailedAt=0;
  packageManagerLatestVersion=null;
  fastIconHintShown=!1;
  memorySelectorLastPath=void 0;
  recordPackageManagerUpdateFailure(l) {
    this.packageManagerUpdateLastFailedAt = l;
  }
  recordPackageManagerLatestVersion(l) {
    this.packageManagerLatestVersion = l;
  }
  markFastIconHintShown() {
    this.fastIconHintShown = !0;
  }
  rememberMemorySelectorPath(l) {
    this.memorySelectorLastPath = l;
  }
}

var kQe = new K(() => new ws);

function uu(Ye) {
  return Ye.autoUpdaterResult;
}

function lu(Wt) {
  return Wt.autoUpdaterResult?.status === "install_failed" ? {
    ...Wt,
    autoUpdaterResult: null
  } : Wt;
}

function Is(l, h) {
  switch (l) {
   case "homebrew":
    return [ "brew", "upgrade", "--cask", h ?? "claude-code" ];

   case "winget":
    {
      let C = process.env.LOCALAPPDATA;
      return [ C ? Xa(C, "Microsoft", "WindowsApps", "winget.exe") : "winget", "upgrade", "--id", "Anthropic.ClaudeCode", "--exact", "--silent", "--disable-interactivity" ];
    }

   default:
    return null;
  }
}

function Vs(l, h) {
  switch (l) {
   case "homebrew":
    return `brew upgrade ${h ?? "claude-code"}`;

   case "winget":
    return "winget upgrade Anthropic.ClaudeCode";

   case "mise":
    return "mise upgrade claude";

   case "apk":
    return "apk upgrade claude-code";

   default:
    return "your package manager update command";
  }
}

var qn = 18e5;

function Qn(l) {
  let re = w(54), {isUpdating: h, onChangeIsUpdating: C, showSuccessMessage: x, verbose: T, withSeparator: O} = l, I = V(uu), _ = Nn(), N = kQe.of(us()), [D, B] = y(N.packageManagerLatestVersion), [W, z] = y("unknown"), [H, J] = y(null), _e;
  if (re[0] !== h) _e = () => h, re[0] = h, re[1] = _e; else _e = re[1];
  let ke = xo(_e), X, ue;
  if (re[2] === S) X = () => {
    m0e().then(ye => {
      if (z(ye), ye === "homebrew") J(Wnt());
    });
  }, ue = [], re[2] = X, re[3] = ue; else X = re[2], ue = re[3];
  P(X, ue);
  let ve;
  if (re[4] !== I?.status || re[5] !== h || re[6] !== C || re[7] !== ke || re[8] !== _ || re[9] !== N) ve = async () => {
    if (h) {
      return;
    }
    if (I?.status === "success") {
      return;
    }
    if (rfe()) {
      return;
    }
    if (Knt()) {
      return;
    }
    if (I?.status === "install_failed") {
      if (Date.now() - N.packageManagerUpdateLastFailedAt < qn) {
        return;
      }
      _(lu);
    }
    let [fe, Ie] = await Promise.all([ Fq(), m0e() ]);
    let de = fe;
    let ee = null;
    if (Ie === "homebrew") ee = Wnt(), de = ee === "claude-code@latest" ? "latest" : "stable";
    let xe = Ie === "homebrew" ? await x4t(ee ?? "claude-code", de) : await iir(de);
    let q = await vCn();
    let oe = !1;
    if (q && xe && Sy(xe, q)) {
      if (t(`PackageManagerAutoUpdater: maxVersion ${q} is set, capping update from ${xe} to ${q}`), 
      xw({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION, q)) {
        t(`PackageManagerAutoUpdater: current version ${{
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.299",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-13T21:37:33Z",
          GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
          HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION} is already at or above maxVersion ${q}, skipping update`), N.recordPackageManagerLatestVersion(null), 
        B(null);
        return;
      }
      xe = q, oe = !0;
    }
    let te = xe && !xw({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION, xe) && !iKe(xe);
    let ne = te ? xe : null;
    if (N.recordPackageManagerLatestVersion(ne), B(ne), !te) {
      return;
    }
    t(`PackageManagerAutoUpdater: Update available ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION} -> ${xe}`);
    let Ke = Le(process.env.CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE);
    let Ce = Is(Ie, ee);
    if (!Ke || !Ce || oe) {
      return;
    }
    if (ke()) {
      return;
    }
    C(!0);
    let Ve = Date.now();
    let je = {
      pm_homebrew: Ie === "homebrew",
      pm_winget: Ie === "winget"
    };
    i("tengu_pkg_manager_auto_updater_start", je);
    let [Oe, ...Be] = Ce;
    let $e = await ft(Oe, Be, {
      cwd: ks(),
      timeout: 3e5,
      env: Ie === "homebrew" ? {
        ...process.env,
        HOMEBREW_NO_AUTO_UPDATE: ""
      } : void 0
    });
    let Qe = Date.now() - Ve;
    if (C(!1), $e.code === 0) i("tengu_pkg_manager_auto_updater_success", {
      ...je,
      latency_ms: Qe
    }), _(G => {
      let M = G.autoUpdaterResult;
      if (M?.version === xe && M?.status === "success") {
        return G;
      }
      return {
        ...G,
        autoUpdaterResult: {
          version: xe,
          status: "success"
        }
      };
    }); else t(`PackageManagerAutoUpdater: ${Oe} exited ${$e.code}: ${$e.stderr || $e.error || $e.stdout}`), 
    i("tengu_pkg_manager_auto_updater_fail", {
      ...je,
      latency_ms: Qe,
      exit_code: $e.code
    }), N.recordPackageManagerUpdateFailure(Date.now()), _(j => {
      if (j.autoUpdaterResult?.status === "install_failed") {
        return j;
      }
      return {
        ...j,
        autoUpdaterResult: {
          version: xe,
          status: "install_failed"
        }
      };
    });
  }, re[4] = I?.status, re[5] = h, re[6] = C, re[7] = ke, re[8] = _, re[9] = N, re[10] = ve; else ve = re[10];
  let L = xo(ve), U;
  if (re[11] !== C) U = Y => {
    C(!1), d(Y);
  }, re[11] = C, re[12] = U; else U = re[12];
  let se = xo(U), Ue;
  if (re[13] !== L || re[14] !== se) Ue = () => {
    L().catch(se);
  }, re[13] = L, re[14] = se, re[15] = Ue; else Ue = re[15];
  let Ee;
  if (re[16] === S) Ee = [], re[16] = Ee; else Ee = re[16];
  P(Ue, Ee);
  let Ae;
  if (re[17] !== L || re[18] !== se) Ae = () => void L().catch(se), re[17] = L, re[18] = se, 
  re[19] = Ae; else Ae = re[19];
  Gi(Ae, qn);
  let be;
  if (re[20] !== O) be = O === void 0 ? null : e(n, {
    dimColor: !0,
    children: O ? " \xb7" : ""
  }), re[20] = O, re[21] = be; else be = re[21];
  let Se = be;
  if (I?.status === "success") {
    if (!x) {
      return null;
    }
    let ge;
    if (re[22] !== I || re[23] !== T) ge = T && r(n, {
      dimColor: !0,
      wrap: "truncate",
      children: [ "current: ", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION, " \xb7 latest:", " ", I.version ]
    }), re[22] = I, re[23] = T, re[24] = ge; else ge = re[24];
    const he = W !== "unknown" && ` via ${W}`;
    let Ne;
    if (re[25] !== he) Ne = r(n, {
      color: "success",
      wrap: "truncate",
      children: [ "\u2713 Update installed", he, " \xb7 Restart to apply" ]
    }), re[25] = he, re[26] = Ne; else Ne = re[26];
    let me;
    if (re[27] !== Se || re[28] !== ge || re[29] !== Ne) me = r(s, {
      flexDirection: "row",
      gap: 1,
      children: [ Se, ge, Ne ]
    }), re[27] = Se, re[28] = ge, re[29] = Ne, re[30] = me; else me = re[30];
    return me;
  }
  if (h) {
    const ge = W === "unknown" ? "Updating\u2026" : `Updating via ${W}\u2026`;
    let he;
    if (re[31] !== ge) he = e(n, {
      dimColor: !0,
      wrap: "truncate",
      children: ge
    }), re[31] = ge, re[32] = he; else he = re[32];
    let Ne;
    if (re[33] !== Se || re[34] !== he) Ne = r(s, {
      flexDirection: "row",
      gap: 1,
      children: [ Se, he ]
    }), re[33] = Se, re[34] = he, re[35] = Ne; else Ne = re[35];
    return Ne;
  }
  let pe = I?.status === "install_failed";
  if (!D && !pe || W === "unknown") {
    return null;
  }
  let ge;
  if (re[36] !== T) ge = T && r(n, {
    dimColor: !0,
    wrap: "truncate",
    children: [ "currentVersion: ", {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION ]
  }), re[36] = T, re[37] = ge; else ge = re[37];
  let he;
  if (re[38] !== H || re[39] !== W) he = Vs(W, H), re[38] = H, re[39] = W, re[40] = he; else he = re[40];
  let Ne;
  if (re[41] !== he) Ne = e(n, {
    bold: !0,
    children: he
  }), re[41] = he, re[42] = Ne; else Ne = re[42];
  let me;
  if (re[43] !== pe) me = pe && e(n, {
    dimColor: !0,
    children: " (auto-update failed)"
  }), re[43] = pe, re[44] = me; else me = re[44];
  let Ge;
  if (re[45] !== Ne || re[46] !== me) Ge = r(n, {
    color: "warning",
    wrap: "truncate",
    children: [ "Update available! Run:", " ", Ne, me ]
  }), re[45] = Ne, re[46] = me, re[47] = Ge; else Ge = re[47];
  let He;
  if (re[48] !== ge || re[49] !== Ge) He = r(s, {
    flexDirection: "column",
    alignItems: "flex-end",
    children: [ ge, Ge ]
  }), re[48] = ge, re[49] = Ge, re[50] = He; else He = re[50];
  let it;
  if (re[51] !== Se || re[52] !== He) it = r(s, {
    flexDirection: "row",
    gap: 1,
    alignItems: "flex-end",
    children: [ Se, He ]
  }), re[51] = Se, re[52] = He, re[53] = it; else it = re[53];
  return it;
}

function AQe(l) {
  let W = w(18), {isUpdating: h, onChangeIsUpdating: C, showSuccessMessage: x, verbose: T, withSeparator: O, atPrompt: I} = l, [_, N] = y(null), [D, B] = y(null), z;
  if (W[0] === S) z = async function _e() {
    let H = !IJr();
    let J = Date.now();
    let re = await g0e();
    g("update_detection", {
      duration_ms: Date.now() - J,
      first_in_process: H,
      installation_type: c(re)
    }), t(`AutoUpdaterWrapper: Installation type: ${re}`), N(re === "native"), B(re === "package-manager");
  }, W[0] = z; else z = W[0];
  let _e = z, [ke] = y(MJr), X;
  if (W[1] === S) X = () => void _e(), W[1] = X; else X = W[1];
  if (qr(X, ke), _ === null || D === null) {
    return null;
  }
  if (D) {
    let ue;
    if (W[2] !== h || W[3] !== C || W[4] !== x || W[5] !== T || W[6] !== O) ue = e(Qn, {
      verbose: T,
      isUpdating: h,
      onChangeIsUpdating: C,
      showSuccessMessage: x,
      withSeparator: O
    }), W[2] = h, W[3] = C, W[4] = x, W[5] = T, W[6] = O, W[7] = ue; else ue = W[7];
    return ue;
  }
  let ue;
  if (W[8] !== h || W[9] !== C || W[10] !== x || W[11] !== T || W[12] !== O) ue = {
    verbose: T,
    isUpdating: h,
    onChangeIsUpdating: C,
    showSuccessMessage: x,
    withSeparator: O
  }, W[8] = h, W[9] = C, W[10] = x, W[11] = T, W[12] = O, W[13] = ue; else ue = W[13];
  let ye = ue, ve;
  if (W[14] !== I || W[15] !== ye || W[16] !== _) ve = _ ? e($r, {
    ...ye,
    atPrompt: I
  }) : e(Hr, {
    ...ye
  }), W[14] = I, W[15] = ye, W[16] = _, W[17] = ve; else ve = W[17];
  return ve;
}

F();

function qpn(l, h) {
  let C = Math.max(1, Math.floor(h) || 1), x = h > 0 ? Pc(l, C, {
    hard: !0,
    trim: !1
  }) : l, T = [], O = 0, I = -1, _ = x.split(`\n`);
  for (let N = 0; N < _.length; N++) {
    let D = _[N] ?? "";
    if (D.length === 0) {
      if (I = l.indexOf(`\n`, I + 1), I !== -1) {
        let H = I;
        T.push(tr({
          text: D,
          startOffset: H,
          isPrecededByNewline: er(l, H, N === 0),
          endsWithNewline: !0
        }));
      } else {
        let H = l.length;
        T.push(tr({
          text: D,
          startOffset: H,
          isPrecededByNewline: er(l, H, N === 0),
          endsWithNewline: !1
        }));
      }
      continue;
    }
    let B = l.indexOf(D, O);
    if (B === -1) {
      let H = O;
      T.push(tr({
        text: D,
        startOffset: H,
        isPrecededByNewline: er(l, H, N === 0),
        endsWithNewline: !1
      })), O = H + D.length;
      continue;
    }
    O = B + D.length;
    let W = B + D.length, z = W < l.length && l[W] === `\n`;
    if (z) I = W;
    T.push(tr({
      text: D,
      startOffset: B,
      isPrecededByNewline: er(l, B, N === 0),
      endsWithNewline: z
    }));
  }
  return Object.freeze({
    text: l,
    columns: C,
    lines: Object.freeze(T)
  });
}

function bu(l, h) {
  let C = ti(h, 0, Math.max(0, l.lines.length - 1));
  return l.lines[C] ?? {
    text: "",
    startOffset: 0,
    isPrecededByNewline: !0,
    endsWithNewline: !1
  };
}

function Zs(l, h) {
  if (l.lines.length === 0) return {
    line: 0,
    column: 0
  };
  let C = ti(h, 0, l.text.length);
  for (let O = 0; O < l.lines.length; O++) {
    let I = l.lines[O], _ = l.lines[O + 1];
    if (C >= I.startOffset && (!_ || C < _.startOffset)) {
      let N = C - I.startOffset, D;
      if (I.isPrecededByNewline) D = Qs(I.text, N); else {
        let B = I.text.length - I.text.trimStart().length;
        if (N < B) D = 0; else D = Qs(I.text.slice(B), N - B);
      }
      return {
        line: O,
        column: D
      };
    }
  }
  let x = l.lines.length - 1, T = l.lines[x];
  return {
    line: x,
    column: ie(T.text)
  };
}

function ei(l, h, C) {
  if (l.lines.length === 0) return 0;
  let x = bu(l, h);
  if (x.text.length === 0 && x.endsWithNewline) return x.startOffset;
  let T = x.isPrecededByNewline ? 0 : x.text.length - x.text.trimStart().length, O = yu(x.text.slice(T), Math.max(0, C)) + T;
  return x.startOffset + O;
}

function Qs(l, h) {
  if (h <= 0) return 0;
  if (h >= l.length) return ie(l);
  return ie(l.slice(0, h));
}

function yu(l, h) {
  if (h <= 0 || l.length === 0) return 0;
  let C = 0, x = 0;
  for (let T of l) {
    let O = ie(T);
    if (C + O > h) break;
    C += O, x += T.length;
  }
  return x;
}

function er(l, h, C) {
  if (C) return !0;
  return h > 0 && l[h - 1] === `\n`;
}

function tr(l) {
  return Object.freeze(l);
}

function ti(l, h, C) {
  return l < h ? h : l > C ? C : l;
}

function Ob({query: l, placeholder: h = "Search\u2026", isFocused: C, onKeyDown: x, onPaste: T, ref: O, autoFocus: I, isTerminalFocused: _, prefix: N = FLs, width: D, cursorOffset: B, borderless: W = !1, highlights: z = [], dimRange: H, cursorChar: J, prefixDim: re = !1, prefixColor: _e, onCursorOffsetChange: ke, onFocus: X, wrapColumns: ue}) {
  let ye = B ?? l.length, ve = x !== void 0, fe = R(null), Ie = j => {
    fe.current = j, ngn(O, j);
  }, de = oJ(fe), ee = C ?? (ve && de), xe = st(), q = !W && !xe, oe = q ? 2 : 0, te = q ? 1 : 0, ne = `${N} ${l}`, Ke = N.length + 1, Ce = Z(() => qpn(ne, ue ?? 0), [ ne, ue ]), Ve = Z(U$, []), je = a.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT && a.CLAUDE_CODE_SESSION_KIND !== "bg", Oe = Zs(Ce, Ke + ye), Be = J === void 0 && !je, $e = Wv({
    line: te + Oe.line,
    column: oe + Oe.column,
    active: ee && !ve,
    visible: Be
  }), Qe = _ && !(Ve && !je && J === void 0), G = ke || X || ve ? j => {
    if (!ee && j.isWindowActivation) {
      j.dropAsStray();
      return;
    }
    let L = fe.current;
    if (L && !X) Ix(L).focus(L);
    if (!ee) {
      X?.();
      return;
    }
    if (!l || !ke) return;
    let U = j.localRow - te;
    if (U < 0) return;
    let Y = Math.max(0, j.localCol - oe), se = ei(Ce, U, Y);
    ke(Math.max(0, Math.min(l.length, se - Ke)));
  } : void 0, M = r(n, {
    dimColor: !ee,
    children: [ e(n, {
      dimColor: re,
      color: _e,
      children: N
    }), " ", ee ? l ? vu(l, z, H, Qe ? ye : -1, J) : Qe ? r(Q, {
      children: [ J ?? e(n, {
        inverse: !0,
        children: h.charAt(0)
      }), e(n, {
        dimColor: !0,
        children: J ? h : h.slice(1)
      }) ]
    }) : e(n, {
      dimColor: !0,
      children: h
    }) : l ? e(n, {
      children: l
    }) : e(n, {
      children: h
    }) ]
  });
  if (ve) return e(s, {
    flexShrink: 0,
    borderStyle: q ? "round" : void 0,
    borderColor: ee ? "suggestion" : void 0,
    borderDimColor: !ee,
    paddingX: q ? 1 : 0,
    width: D,
    onClick: G,
    children: e(Wte, {
      ref: Ie,
      autoFocus: I,
      onKeyDown: x,
      onPaste: T,
      caret: ee ? {
        line: Oe.line,
        column: Oe.column,
        visible: Be
      } : void 0,
      flexGrow: 1,
      children: M
    })
  });
  return e(s, {
    ref: $e,
    flexShrink: 0,
    borderStyle: q ? "round" : void 0,
    borderColor: ee ? "suggestion" : void 0,
    borderDimColor: !ee,
    paddingX: q ? 1 : 0,
    width: D,
    onClick: G,
    children: M
  });
}

function vu(l, h, C, x, T) {
  let O = B => h.some(([W, z]) => B >= W && B < z), I = B => !!C && B >= C[0] && B < C[1], _ = new Set([ 0, l.length ]);
  for (let [B, W] of h) _.add(B), _.add(W);
  if (C) _.add(C[0]), _.add(C[1]);
  if (x >= 0) _.add(x), _.add(x + 1);
  let N = [ ..._ ].sort((B, W) => B - W), D = [];
  for (let B = 0; B < N.length - 1; B++) {
    let W = N[B], z = N[B + 1], H = W < l.length ? l.slice(W, z) : " ";
    if (!H) continue;
    let J = W === x, re = J && H === `\n`;
    D.push(J && T ? r(n, {
      children: [ T, re ? `\n` : null ]
    }, W) : e(n, {
      color: O(W) ? "suggestion" : void 0,
      dimColor: I(W),
      inverse: J,
      children: re ? ` \n` : H
    }, W));
  }
  return D;
}

function zNr({presentation: l, rows: h, embedded: C}) {
  return !1;
}

export { vte, BNr, jNr, WNr, Ete, KX, PUt, MBo, Fy, qpn, Ob, zNr, IUt, HBo, DWe, Ypn, LWe, NWe, $We, FWe, kQe, OUt, MUt, kL, TQe, UWe, EMe, HUt, kMe, AQe };
