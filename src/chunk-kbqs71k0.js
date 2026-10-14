// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ii, ne, nt } from "./chunk-5wbhf1bk.js";

import { ys } from "./chunk-2v9tfgc3.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { ge } from "./chunk-07cck4g7.js";

import { Xco } from "./chunk-nmecgx1t.js";

import { g8t, hMn, Noo, Foo } from "./chunk-ydwee02n.js";

import { Mmn, $te } from "./chunk-15hpn4xn.js";

import { HNe, kit } from "./chunk-c2wcysqr.js";

import { ie } from "./chunk-yxennhe9.js";

import { uBr } from "./chunk-fj1a15yf.js";

import { Ji } from "./chunk-f0wpcwcb.js";

import { pa, Nqn } from "./chunk-g7z9901y.js";

var Amn = 2e3;

function w7e(e, n = 0) {
  if (e.length - n <= Amn) return {
    code: e.slice(n),
    truncatedChars: 0
  };
  let t = e.slice(n, n + Amn + 1), s = ne(t, Amn);
  return {
    code: s,
    truncatedChars: e.length - n - s.length
  };
}

function wze(e) {
  return ` \u2026 [+${e} chars]`;
}

import { basename as ae, extname as de } from "path";

function j() {
  return Mmn();
}

var v = "\x1b[0m", A = "\x1b[2m", J = "\x1b[22m";

function l(e, n, t) {
  return {
    r: e,
    g: n,
    b: t,
    a: 255
  };
}

function x(e) {
  return {
    r: e,
    g: 0,
    b: 0,
    a: 0
  };
}

var L = {
  r: 0,
  g: 0,
  b: 0,
  a: 1
};

function Y(e) {
  if (e.includes("ansi")) return "ansi";
  return ge.level >= 3 ? "truecolor" : "color256";
}

var I = [ 0, 95, 135, 175, 215, 255 ];

function fe(e, n, t) {
  let s = m => m < 48 ? 0 : m < 115 ? 1 : m < 155 ? 2 : m < 195 ? 3 : m < 235 ? 4 : 5, r = s(e), i = s(n), o = s(t), f = 16 + 36 * r + 6 * i + o, c = Math.round((e + n + t) / 3);
  if (c < 5) return 16;
  if (c > 244 && r === i && i === o) return f;
  let u = Math.max(0, Math.min(23, Math.round((c - 8) / 10))), h = 232 + u, b = 8 + u * 10, g = I[r], y = I[i], k = I[o], S = (e - g) ** 2 + (n - y) ** 2 + (t - k) ** 2;
  return (e - b) ** 2 + (n - b) ** 2 + (t - b) ** 2 < S ? h : f;
}

function N(e, n, t) {
  if (e.a === 0) {
    let r = e.r;
    if (r < 8) return `\x1b[${(n ? 30 : 40) + r}m`;
    if (r < 16) return `\x1b[${(n ? 90 : 100) + (r - 8)}m`;
    return `\x1b[${n ? 38 : 48};5;${r}m`;
  }
  if (e.a === 1) return n ? "\x1b[39m" : "\x1b[49m";
  let s = n ? 38 : 48;
  if (t === "truecolor") return `\x1b[${s};2;${e.r};${e.g};${e.b}m`;
  return `\x1b[${s};5;${fe(e.r, e.g, e.b)}m`;
}

function E(e, n, t, s) {
  let r = s ? v + A : v;
  for (let [i, o] of e) {
    if (r += N(i.foreground, !0, n), !t) r += N(i.background, !1, n);
    r += o;
  }
  return r + v;
}

function pe(e) {
  if (e.includes("ansi")) return "ansi";
  if (e.includes("dark")) return "Monokai Extended";
  return "GitHub";
}

var G = new Map([ [ "keyword", l(249, 38, 114) ], [ "_storage", l(102, 217, 239) ], [ "built_in", l(166, 226, 46) ], [ "type", l(166, 226, 46) ], [ "literal", l(190, 132, 255) ], [ "number", l(190, 132, 255) ], [ "string", l(230, 219, 116) ], [ "title", l(166, 226, 46) ], [ "title.function", l(166, 226, 46) ], [ "title.class", l(166, 226, 46) ], [ "title.class.inherited", l(166, 226, 46) ], [ "params", l(253, 151, 31) ], [ "comment", l(117, 113, 94) ], [ "meta", l(117, 113, 94) ], [ "attr", l(166, 226, 46) ], [ "attribute", l(166, 226, 46) ], [ "variable", l(255, 255, 255) ], [ "variable.language", l(255, 255, 255) ], [ "property", l(255, 255, 255) ], [ "operator", l(249, 38, 114) ], [ "punctuation", l(248, 248, 242) ], [ "symbol", l(190, 132, 255) ], [ "regexp", l(230, 219, 116) ], [ "subst", l(248, 248, 242) ] ]), P = new Map([ [ "keyword", l(167, 29, 93) ], [ "_storage", l(167, 29, 93) ], [ "built_in", l(0, 134, 179) ], [ "type", l(0, 134, 179) ], [ "literal", l(0, 134, 179) ], [ "number", l(0, 134, 179) ], [ "string", l(24, 54, 145) ], [ "title", l(121, 93, 163) ], [ "title.function", l(121, 93, 163) ], [ "title.class", l(0, 0, 0) ], [ "title.class.inherited", l(0, 0, 0) ], [ "params", l(0, 134, 179) ], [ "comment", l(150, 152, 150) ], [ "meta", l(150, 152, 150) ], [ "attr", l(0, 134, 179) ], [ "attribute", l(0, 134, 179) ], [ "variable", l(0, 134, 179) ], [ "variable.language", l(0, 134, 179) ], [ "property", l(0, 134, 179) ], [ "operator", l(167, 29, 93) ], [ "punctuation", l(51, 51, 51) ], [ "symbol", l(0, 134, 179) ], [ "regexp", l(24, 54, 145) ], [ "subst", l(51, 51, 51) ] ]), me = new Set([ "const", "let", "var", "function", "class", "type", "interface", "enum", "namespace", "module", "def", "fn", "func", "struct", "trait", "impl" ]), he = new Map([ [ "keyword", x(13) ], [ "_storage", x(14) ], [ "built_in", x(14) ], [ "type", x(14) ], [ "literal", x(12) ], [ "number", x(12) ], [ "string", x(10) ], [ "title", x(11) ], [ "title.function", x(11) ], [ "title.class", x(11) ], [ "comment", x(8) ], [ "meta", x(8) ] ]);

function Q(e, n) {
  let t = e.includes("dark"), s = e.includes("ansi"), r = e.includes("daltonized"), i = n === "truecolor";
  if (s) return {
    addLine: L,
    addWord: L,
    addDecoration: x(10),
    deleteLine: L,
    deleteWord: L,
    deleteDecoration: x(9),
    foreground: t ? x(7) : x(0),
    background: L,
    scopes: he
  };
  if (t) {
    let h = l(248, 248, 242), b = l(61, 1, 0), g = l(92, 2, 0), y = l(220, 90, 90);
    if (r) return {
      addLine: i ? l(0, 27, 41) : x(17),
      addWord: i ? l(0, 48, 71) : x(24),
      addDecoration: l(81, 160, 200),
      deleteLine: b,
      deleteWord: g,
      deleteDecoration: y,
      foreground: h,
      background: L,
      scopes: G
    };
    return {
      addLine: i ? l(2, 40, 0) : x(22),
      addWord: i ? l(4, 71, 0) : x(28),
      addDecoration: l(80, 200, 80),
      deleteLine: b,
      deleteWord: g,
      deleteDecoration: y,
      foreground: h,
      background: L,
      scopes: G
    };
  }
  let o = l(51, 51, 51), f = l(255, 220, 220), c = l(255, 199, 199), u = l(207, 34, 46);
  if (r) return {
    addLine: l(219, 237, 255),
    addWord: l(179, 217, 255),
    addDecoration: l(36, 87, 138),
    deleteLine: f,
    deleteWord: c,
    deleteDecoration: u,
    foreground: o,
    background: L,
    scopes: P
  };
  return {
    addLine: l(220, 255, 220),
    addWord: l(178, 255, 178),
    addDecoration: l(36, 138, 61),
    deleteLine: f,
    deleteWord: c,
    deleteDecoration: u,
    foreground: o,
    background: L,
    scopes: P
  };
}

var be = new Map([ [ "black", 0 ], [ "red", 1 ], [ "green", 2 ], [ "yellow", 3 ], [ "blue", 4 ], [ "magenta", 5 ], [ "cyan", 6 ], [ "white", 7 ], [ "blackBright", 8 ], [ "redBright", 9 ], [ "greenBright", 10 ], [ "yellowBright", 11 ], [ "blueBright", 12 ], [ "magentaBright", 13 ], [ "cyanBright", 14 ], [ "whiteBright", 15 ] ]);

function D(e) {
  if (e === void 0) return null;
  let n = /^rgb\(\s?(\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\s?\)$/.exec(e);
  if (n) return l(Number(n[1]), Number(n[2]), Number(n[3]));
  let t = /^#([0-9a-fA-F]{6})$/.exec(e);
  if (t) {
    let i = parseInt(t[1], 16);
    return l(i >> 16, i >> 8 & 255, i & 255);
  }
  let s = /^#([0-9a-fA-F]{3})$/.exec(e);
  if (s) {
    let [i, o, f] = s[1];
    return l(parseInt(i + i, 16), parseInt(o + o, 16), parseInt(f + f, 16));
  }
  let r = /^ansi256\(\s?(\d{1,3})\s?\)$/.exec(e);
  if (r) return x(Number(r[1]));
  if (e.startsWith("ansi:")) {
    let i = be.get(e.slice(5));
    return i === void 0 ? null : x(i);
  }
  return null;
}

function ke(e, n, t) {
  let s = D((t ? n.diffAddedDimmed : void 0) ?? n.diffAdded), r = D((t ? n.diffRemovedDimmed : void 0) ?? n.diffRemoved), i = D(n.diffAddedWord), o = D(n.diffRemovedWord);
  return {
    ...e,
    addLine: s ?? e.addLine,
    deleteLine: r ?? e.deleteLine,
    addWord: i ?? e.addWord,
    deleteWord: o ?? e.deleteWord
  };
}

function B(e) {
  return {
    foreground: e.foreground,
    background: e.background
  };
}

function W(e, n) {
  switch (e) {
   case "+":
    return n.addLine;

   case "-":
    return n.deleteLine;

   case " ":
    return n.background;
  }
}

function ye(e, n) {
  switch (e) {
   case "+":
    return n.addWord;

   case "-":
    return n.deleteWord;

   case " ":
    return n.background;
  }
}

function V(e, n) {
  switch (e) {
   case "+":
    return n.addDecoration;

   case "-":
    return n.deleteDecoration;

   case " ":
    return n.foreground;
  }
}

var F = new Map([ [ "Dockerfile", "dockerfile" ], [ "Makefile", "makefile" ], [ "Rakefile", "ruby" ], [ "Gemfile", "ruby" ], [ "CMakeLists", "cmake" ] ]);

function Z(e, n) {
  let t = ae(e), s = de(e).slice(1), r = nt(t, "."), i = F.get(t) ?? F.get(r);
  if (i) {
    let o = $te(i);
    if (o) return o;
  }
  if (s) {
    let o = $te(s);
    if (o) return o;
  }
  if (n) {
    let o = n.startsWith("\ufeff") ? n.slice(1) : n;
    if (o.startsWith("#!")) {
      if (o.includes("bash") || o.includes("/sh")) return $te("bash");
      if (o.includes("python")) return $te("python");
      if (o.includes("node")) return $te("javascript");
      if (o.includes("ruby")) return $te("ruby");
      if (o.includes("perl")) return $te("perl");
    }
    if (o.startsWith("<?php")) return $te("php");
    if (o.startsWith("<?xml")) return $te("xml");
  }
  return null;
}

function Ce(e, n, t) {
  if (!e) return t.foreground;
  if (e === "keyword" && me.has(n.trim())) return t.scopes.get("_storage") ?? t.foreground;
  return t.scopes.get(e) ?? t.scopes.get(nt(e, ".")) ?? t.foreground;
}

function ee(e, n, t, s) {
  let r = e.scope ?? e.kind ?? t;
  for (let i of e.children) if (typeof i === "string") {
    let o = Ce(r, i, n);
    s.push([ {
      foreground: o,
      background: n.background
    }, i ]);
  } else ee(i, n, r, s);
}

function xe(e) {
  return typeof e === "object" && e !== null && "rootNode" in e && typeof e.rootNode === "object" && e.rootNode !== null && "children" in e.rootNode;
}

function te(e, n, t) {
  let s = n + `\n`;
  if (!e.lang) return [ [ B(t), s ] ];
  if (s.length > g8t) e.limited ??= Foo(j(), e.lang);
  let r = Noo(s, e.limited ?? e.lang);
  if (e.squares += r, r > 0 && e.squares > hMn) return [ [ B(t), s ] ];
  let i;
  try {
    i = j().highlight(s, {
      language: e.lang,
      ignoreIllegals: !0
    });
  } catch {
    return e.lang = null, [ [ B(t), s ] ];
  }
  if (!xe(i._emitter)) {
    if (Ji().claim("color_diff_hljs_emitter_shape_error")) d(Error(`color-diff: hljs emitter shape mismatch (keys: ${Object.keys(i._emitter).join(",")}). Syntax highlighting disabled.`));
    return [ [ B(t), s ] ];
  }
  let o = [];
  return ee(i._emitter.rootNode, t, void 0, o), Se(o);
}

function Se(e) {
  let n = e.map(([, r]) => r), t = Nqn(n);
  if (t === n) return e;
  let s = [];
  for (let r = 0; r < e.length; r++) {
    let i = t[r];
    if (i.length > 0) s.push([ e[r][0], i ]);
  }
  return s;
}

var Te = .4;

function U(e) {
  let n = [], t = 0;
  while (t < e.length) {
    let s = e[t];
    if (/[\p{L}\p{N}_]/u.test(s)) {
      let r = t + 1;
      while (r < e.length && /[\p{L}\p{N}_]/u.test(e[r])) r++;
      n.push(e.slice(t, r)), t = r;
    } else if (/\s/.test(s)) {
      let r = t + 1;
      while (r < e.length && /\s/.test(e[r])) r++;
      n.push(e.slice(t, r)), t = r;
    } else {
      let i = e.codePointAt(t) > 65535 ? 2 : 1;
      n.push(e.slice(t, t + i)), t += i;
    }
  }
  return n;
}

function Me(e) {
  let n = [], t = 0;
  while (t < e.length) if (e[t] === "-") {
    let s = t, r = t;
    while (r < e.length && e[r] === "-") r++;
    let i = r;
    while (i < e.length && e[i] === "+") i++;
    let o = r - s, f = i - r;
    if (o > 0 && f > 0) {
      let c = Math.min(o, f);
      for (let u = 0; u < c; u++) n.push([ s + u, r + u ]);
      t = i;
    } else t = r;
  } else t++;
  return n;
}

function we(e, n) {
  let t = U(e), s = U(n), r = Xco(t, s), i = e.length + n.length, o = 0, f = [], c = [], u = 0, h = 0;
  for (let b of r) {
    let g = b.value.reduce((y, k) => y + k.length, 0);
    if (b.removed) o += g, f.push({
      start: u,
      end: u + g
    }), u += g; else if (b.added) o += g, c.push({
      start: h,
      end: h + g
    }), h += g; else u += g, h += g;
  }
  if (i > 0 && o / i > Te) return [ [], [] ];
  return [ f, c ];
}

function re(e) {
  e.lines = e.lines.map(n => n.flatMap(([t, s]) => s.split(`\n`).filter(r => r.length > 0).map(r => [ t, r ])));
}

function Le(e) {
  if (e.length !== 1) return !1;
  let n = e.codePointAt(0);
  for (let [t, s] of HNe) if (n >= t && n <= s) return !0;
  return !1;
}

var oe = /^[\x20-\x7e]*$/;

function q(e) {
  if (e === "\t") return 8;
  if (Le(e)) return 1;
  return ie(e);
}

function R(e) {
  if (!uBr.test(e)) return ie(e);
  let n = e.split(kit), t = n.length - 1;
  for (let s of n) t += ie(s);
  return t;
}

function K(e) {
  return e.map(([, n]) => n).join("");
}

var Be = 256;

function se(e, n) {
  if (oe.test(n)) return n.length;
  let t = e.slice(-Be);
  return R(t + n) - R(t);
}

function Re(e, n, t) {
  return N(e.foreground, !0, n) + (t ? "" : N(e.background, !1, n));
}

function Ee(e, n, t) {
  let s = [], r = null;
  for (let [i, o] of e) {
    let f = Re(i, n, t), c = s.at(-1);
    if (c && f === r) s[s.length - 1] = [ c[0], c[1] + o ]; else s.push([ i, o ]), r = f;
  }
  return s;
}

function _e(e) {
  if (!e.some(([, r]) => r.includes("\t"))) return e;
  let n = "", t = 0, s = [];
  for (let [r, i] of e) {
    let o = i.split("\t"), f = "";
    for (let c = 0; c < o.length; c++) {
      let u = c === 0 ? o[c] : Ii(" ", 8 - t % 8) + o[c];
      t += se(n, u), f += u, n += u;
    }
    s.push([ r, f ]);
  }
  return s;
}

function le(e, n, t, s, r) {
  let i = [];
  for (let o of e.lines) {
    let f = i.length, c = [], u = "", h = 0;
    for (let [b, g] of _e(Ee(o, s, r))) {
      let y = h + se(u, g);
      if (y <= n) {
        if (g.length > 0) c.push([ b, g ]), u += g, h = y;
        continue;
      }
      if (n >= 1 && oe.test(g)) {
        let p = 0, m = n - h;
        while (g.length - p > m) {
          if (m > 0) c.push([ b, g.slice(p, p + m) ]), p += m;
          if (c.length > 0) i.push(c), c = [], u = "";
          h = 0, m = n;
        }
        if (p < g.length) c.push([ b, g.slice(p) ]), u += g.slice(p), h += g.length - p;
        continue;
      }
      let k = 0, S = 0;
      for (let {segment: p, index: m} of pa().segment(g)) {
        let C = q(p);
        if (h + S + C > n) {
          if (m > k) c.push([ b, g.slice(k, m) ]);
          if (c.length > 0) i.push(c), c = [], u = "", h = 0;
          if (k = m, S = 0, C > n) {
            i.push([ [ b, g.slice(m, m + p.length) ] ]), k = m + p.length;
            continue;
          }
        }
        S += C;
      }
      if (k < g.length) c.push([ b, g.slice(k) ]), u += g.slice(k), h = R(u);
    }
    if (c.length > 0 || i.length === f) i.push(c);
  }
  if (e.lines = i, e.lines = e.lines.map(o => {
    let f = K(o);
    if (R(f) <= n) return o;
    let c = Math.max(0, n - 1), u = [ [ 0, 0, 0 ] ], h = 0, b = 0;
    e: for (let C = 0; C < o.length; C++) {
      let T = o[C][1];
      for (let {segment: M, index: _} of pa().segment(T)) {
        if (h += q(M), h > c) break e;
        let w = _ + M.length;
        u.push([ C, w, b + w ]);
      }
      b += T.length;
    }
    let g = 0, y = u.length - 1;
    while (g < y) {
      let C = g + y + 1 >> 1;
      if (R(f.slice(0, u[C][2])) <= c) g = C; else y = C - 1;
    }
    let [k, S] = u[g], p = o.slice(0, k);
    if (S > 0) p.push([ o[k][0], o[k][1].slice(0, S) ]);
    let m = p.at(-1)?.[0] ?? o[0][0];
    return p.push([ m, "\u2026" ]), p;
  }), e.marker && e.marker !== " ") {
    let o = W(e.marker, t), f = {
      foreground: t.foreground,
      background: o
    };
    for (let c of e.lines) {
      let u = R(K(c));
      if (u < n) c.push([ f, Ii(" ", n - u) ]);
    }
  }
}

function ce(e, n, t, s) {
  let r = {
    foreground: e.marker ? V(e.marker, n) : n.foreground,
    background: e.marker ? W(e.marker, n) : n.background
  }, i = e.marker === null || e.marker === " ";
  for (let o = 0; o < e.lines.length; o++) {
    let f = o === 0 ? ` ${String(e.lineNumber).padStart(t)} ` : " ".repeat(t + 2), c = i && !s ? `${A}${f}${J}` : f;
    e.lines[o].unshift([ r, c ]);
  }
}

function De(e, n) {
  if (!e.marker) return;
  let t = {
    foreground: V(e.marker, n),
    background: W(e.marker, n)
  };
  for (let s of e.lines) s.unshift([ t, e.marker ]);
}

function Ne(e) {
  for (let n of e.lines) if (n.length > 0) {
    n[0][1] = A + n[0][1];
    let t = n.length - 1;
    n[t][1] = n[t][1] + J;
  }
}

function We(e, n) {
  if (n.length === 0) return n;
  let t = [ 0 ];
  for (let o of pa().segment(e)) t.push(o.index + o.segment.length);
  let s = o => {
    let f = 0, c = t.length - 1;
    while (f < c) {
      let u = f + c + 1 >> 1;
      if (t[u] <= o) f = u; else c = u - 1;
    }
    return t[f];
  }, r = o => {
    let f = 0, c = t.length - 1;
    while (f < c) {
      let u = f + c >> 1;
      if (t[u] >= o) c = u; else f = u + 1;
    }
    return t[f];
  }, i = [];
  for (let o of n) {
    let f = s(Math.min(o.start, e.length)), c = Math.max(f, r(Math.min(o.end, e.length))), u = i.at(-1);
    if (u && f <= u.end) u.end = Math.max(u.end, c); else i.push({
      start: f,
      end: c
    });
  }
  return i;
}

function ve(e, n, t) {
  if (!e.marker) return;
  let s = W(e.marker, n), r = ye(e.marker, n), i = e.lines.map(u => u.map(([, h]) => h).join("")).join(""), o = We(i, t), f = 0, c = 0;
  for (let u = 0; u < e.lines.length; u++) {
    let h = [];
    for (let [b, g] of e.lines[u]) {
      let y = c, k = c + g.length;
      while (f < o.length && o[f].end <= y) f++;
      if (f >= o.length) {
        h.push([ {
          ...b,
          background: s
        }, g ]), c = k;
        continue;
      }
      let S = g, p = y;
      while (S.length > 0 && f < o.length) {
        let m = o[f], C = p >= m.start && p < m.end, T;
        if (C) T = Math.min(m.end, k); else if (m.start > p && m.start < k) T = m.start; else T = k;
        let M = T - p, _ = S.slice(0, M);
        if (h.push([ {
          ...b,
          background: C ? r : s
        }, _ ]), S = S.slice(M), p = T, p >= m.end) f++;
      }
      if (S.length > 0) h.push([ {
        ...b,
        background: s
      }, S ]);
      c = k;
    }
    e.lines[u] = h;
  }
}

function Ie(e) {
  let n = Math.max(0, e.oldStart + e.oldLines - 1), t = Math.max(0, e.newStart + e.newLines - 1);
  return Math.max(n, t);
}

function Ae(e) {
  return e === "+" || e === "-" ? e : " ";
}

var X = 2, z = 1;

class O {
  hunk;
  filePath;
  firstLine;
  prefixContent;
  constructor(e, n, t, s) {
    this.hunk = e, this.filePath = t, this.firstLine = n, this.prefixContent = s ?? null;
  }
  render(e, n, t, s) {
    let {rows: r, mode: i} = this.buildRows(e, n, t, s);
    return r.map(o => E(o, i, !1, t));
  }
  renderSplit(e, n, t, s) {
    let {rows: r, mode: i} = this.buildRows(e, n, t, s);
    return {
      gutters: r.map(o => E(o.slice(0, X), i, !1, t)),
      contents: r.map(o => E(o.slice(X), i, !1, t))
    };
  }
  buildRows(e, n, t, s) {
    let r = Y(e), i = Q(e, r), o = s ? ke(i, s, t) : i, c = {
      lang: Z(this.filePath, this.firstLine),
      stack: null,
      squares: 0
    };
    this.prefixContent;
    let u = String(Ie(this.hunk)).length, h = this.hunk.oldStart, b = this.hunk.newStart, g = Math.max(1, n - u - 2 - 1), y = this.hunk.lines.map(p => {
      let m = Ae(p.slice(0, 1)), {code: C, truncatedChars: T} = w7e(p, 1), M;
      switch (m) {
       case "+":
        M = b++;
        break;

       case "-":
        M = h++;
        break;

       case " ":
        M = b, h++, b++;
        break;
      }
      return {
        lineNumber: M,
        marker: m,
        code: C,
        truncatedChars: T
      };
    }), k = y.map(() => []);
    if (!t) {
      let p = y.map(m => m.marker);
      for (let [m, C] of Me(p)) {
        let [T, M] = we(y[m].code, y[C].code);
        k[m] = T, k[C] = M;
      }
    }
    let S = [];
    for (let p = 0; p < y.length; p++) {
      let {lineNumber: m, marker: C, code: T, truncatedChars: M} = y[p], _ = C === "-" ? [ [ B(o), T ] ] : te(c, T, o), w = {
        marker: C,
        lineNumber: m,
        lines: [ _ ]
      };
      if (re(w), ve(w, o, k[p]), M > 0) w.lines[0].push([ B(o), wze(M) ]);
      if (le(w, g, o, r, !1), r === "ansi" && C === "-") Ne(w);
      De(w, o), ce(w, o, u, t), S.push(...w.lines);
    }
    return {
      rows: S,
      mode: r
    };
  }
}

class H {
  code;
  filePath;
  constructor(e, n) {
    this.code = e, this.filePath = n;
  }
  render(e, n, t) {
    let {rows: s, mode: r} = this.buildRows(e, n, t);
    return s.map(i => E(i, r, !0, t));
  }
  renderSplit(e, n, t) {
    let {rows: s, mode: r} = this.buildRows(e, n, t);
    return {
      gutters: s.map(i => E(i.slice(0, z), r, !0, t)),
      contents: s.map(i => E(i.slice(z), r, !0, t))
    };
  }
  buildRows(e, n, t) {
    let s = Y(e), r = Q(e, s), i = this.code.split(`\n`);
    if (i.at(-1) === "") i.pop();
    let o = i[0] ?? null, c = {
      lang: Z(this.filePath, o),
      stack: null,
      squares: 0
    }, u = String(i.length).length, h = Math.max(1, n - u - 2), b = [];
    for (let g = 0; g < i.length; g++) {
      let {code: y, truncatedChars: k} = w7e(i[g]), S = te(c, y, r);
      if (k > 0) S.push([ B(r), wze(k) ]);
      let p = {
        marker: null,
        lineNumber: g + 1,
        lines: [ S ]
      };
      re(p), le(p, h, r, s, !0), ce(p, r, u, t), b.push(...p.lines);
    }
    return {
      rows: b,
      mode: s
    };
  }
}

function ue(e) {
  return {
    theme: pe(e),
    source: null
  };
}

function s1t() {
  if (ys(a.CLAUDE_CODE_SYNTAX_HIGHLIGHT)) return "env";
  return null;
}

function cWo() {
  return s1t() === null ? O : null;
}

function cUr() {
  return s1t() === null ? H : null;
}

function uUr(e) {
  return s1t() === null ? ue(e) : null;
}

export { Amn, w7e, wze, s1t, cWo, cUr, uUr };
