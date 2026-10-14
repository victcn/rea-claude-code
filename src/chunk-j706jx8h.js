// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { Mc } from "./chunk-fj1a15yf.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { l8, _F } from "./chunk-n4eyr3t2.js";

import { Z, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

var D = {
  default: {
    keyCase: "title",
    modCase: "lower",
    caretCtrl: !1,
    modSep: "+",
    arrowSep: "/",
    chordSep: " ",
    shiftAsCase: !1,
    charCase: "preserve",
    platform: "other"
  },
  compact: {
    keyCase: "lower",
    modCase: "lower",
    caretCtrl: !0,
    modSep: "+",
    arrowSep: "",
    chordSep: " ",
    shiftAsCase: !0,
    charCase: "preserve",
    platform: "other"
  },
  symbol: {
    keyCase: "glyph",
    modCase: "glyph",
    caretCtrl: !1,
    modSep: "",
    arrowSep: "",
    chordSep: " ",
    shiftAsCase: !0,
    charCase: "upper",
    platform: "other"
  }
};

function N(t) {
  let {style: o, ...s} = t;
  return {
    ...D[o ?? "default"],
    ..._(s)
  };
}

function _(t) {
  let o = {};
  for (let s in t) if (t[s] !== void 0) o[s] = t[s];
  return o;
}

function _9n(t, o = {}) {
  let s = N(o), n = i => I(i, s), a = i => i.map(n).join(s.chordSep);
  if (t.length === 0) return "";
  if (t.length === 1) return a(t[0]);
  let l = t.every(i => i.length === 1) ? t.map(i => i[0]) : void 0;
  if (!l) return t.map(a).join("/");
  let p = W(l, s), c = l.every(i => Y.has(i.key)) && (!!p || l.every(i => g(i, s).length === 0)) ? s.arrowSep : "/";
  if (p) {
    let i = l.map(f => n({
      ...f,
      ...q
    }));
    return J(p, s) + i.join(c);
  }
  return l.map(n).join(c);
}

var B = {
  enter: [ "Enter", "enter", "\u23ce" ],
  escape: [ "Esc", "esc", "\u238b" ],
  tab: [ "Tab", "tab", "\u21e5" ],
  " ": [ "Space", "space", "\u2423" ],
  backspace: [ "Backspace", "backspace", "\u232b" ],
  delete: [ "Delete", "delete", "\u2326" ],
  up: [ "\u2191", "\u2191", "\u2191" ],
  down: [ "\u2193", "\u2193", "\u2193" ],
  left: [ "\u2190", "\u2190", "\u2190" ],
  right: [ "\u2192", "\u2192", "\u2192" ],
  pageup: [ "PageUp", "pgup", "\u21de" ],
  pagedown: [ "PageDown", "pgdn", "\u21df" ],
  home: [ "Home", "home", "\u2196" ],
  end: [ "End", "end", "\u2198" ]
}, U = {
  title: 0,
  lower: 1,
  glyph: 2
}, H = {
  ctrl: {
    lower: "ctrl",
    title: "Ctrl",
    glyph: "\u2303"
  },
  shift: {
    lower: "shift",
    title: "Shift",
    glyph: "\u21e7"
  },
  alt: {
    lower: t => t === "macos" ? "opt" : "alt",
    title: t => t === "macos" ? "Opt" : "Alt",
    glyph: "\u2325"
  },
  super: {
    lower: t => t === "macos" ? "cmd" : "super",
    title: t => t === "macos" ? "Cmd" : "Super",
    glyph: "\u2318"
  }
}, Y = new Set([ "up", "down", "left", "right" ]), q = {
  ctrl: !1,
  alt: !1,
  shift: !1,
  meta: !1,
  super: !1
};

function C(t) {
  let o = [];
  if (t.ctrl) o.push("ctrl");
  if (t.shift) o.push("shift");
  if (t.alt || t.meta) o.push("alt");
  if (t.super) o.push("super");
  return o;
}

function y(t, o) {
  let s = H[t][o.modCase];
  return typeof s === "function" ? s(o.platform) : s;
}

function z(t, o) {
  let s = B[t];
  if (s) return s[U[o.keyCase]];
  return o.charCase === "upper" ? t.toUpperCase() : t;
}

function R(t) {
  return t.shift && !t.ctrl && !t.alt && !t.meta && !t.super && t.key.length === 1 && t.key >= "a" && t.key <= "z";
}

function I(t, o) {
  if (o.shiftAsCase && R(t)) return t.key.toUpperCase();
  let s = C(t), n = z(t.key, o);
  if (o.caretCtrl && s.length === 1 && s[0] === "ctrl") return `^${n}`;
  if (o.modCase === "glyph") return s.map(a => y(a, o)).join("") + n;
  return [ ...s.map(a => y(a, o)), n ].join(o.modSep);
}

function W(t, o) {
  let [s, ...n] = t;
  if (!g(s, o).length) return;
  return n.every(l => X(s, l, o)) ? s : void 0;
}

function g(t, o) {
  if (o.shiftAsCase && R(t)) return [];
  return C(t);
}

function X(t, o, s) {
  let n = g(t, s), a = g(o, s);
  return n.length === a.length && n.every((l, p) => l === a[p]);
}

function J(t, o) {
  let s = C(t);
  if (o.caretCtrl && s.length === 1 && s[0] === "ctrl") return "^";
  if (o.modCase === "glyph") return s.map(n => y(n, o)).join("");
  return s.map(n => y(n, o)).join(o.modSep) + o.modSep;
}

function G(t) {
  let f = w(15), {chord: o, action: s, format: n, parens: a, bold: l, terse: p} = t, E = a === void 0 ? !1 : a, c = l === void 0 ? !1 : l, i = p === void 0 ? !1 : p, x;
  if (f[0] === S) x = v(), f[0] = x; else x = f[0];
  let te = x, T;
  if (f[1] !== o || f[2] !== n) T = P(o, n, te), f[1] = o, f[2] = n, f[3] = T; else T = f[3];
  let u = T;
  if (!u) {
    return null;
  }
  let L;
  if (f[4] !== c || f[5] !== u) L = c ? e(Mc, {
    bold: !0,
    children: u
  }) : u, f[4] = c, f[5] = u, f[6] = L; else L = f[6];
  let d = L, m = i ? " " : " to ";
  if (E) {
    let h;
    if (f[7] !== s || f[8] !== m || f[9] !== d) h = r(Mc, {
      children: [ "(", d, m, s, ")" ]
    }), f[7] = s, f[8] = m, f[9] = d, f[10] = h; else h = f[10];
    return h;
  }
  let h;
  if (f[11] !== s || f[12] !== m || f[13] !== d) h = r(Mc, {
    children: [ d, m, s ]
  }), f[11] = s, f[12] = m, f[13] = d, f[14] = h; else h = f[14];
  return h;
}

function ML({chord: t, action: o, format: s, parens: n = !1, terse: a = !1}) {
  let l = P(t, s, v());
  if (!l) return "";
  let p = `${l}${a ? " " : " to "}${o}`;
  return n ? `(${p})` : p;
}

function v() {
  return _F() === "macos" ? "macos" : "other";
}

function P(t, o, s) {
  let n = (typeof t === "string" ? [ t ] : t).filter(a => a !== "");
  return _9n(n.map(l8), {
    ...o,
    platform: o?.platform ?? s
  });
}

export { _9n, G, ML };
