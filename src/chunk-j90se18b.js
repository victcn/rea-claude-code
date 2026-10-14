// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Je } from "./chunk-b0z4bv3v.js";

import { _, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { cM } from "./chunk-zx69jgxc.js";

function Mo(e) {
  return e.startsWith("\ufeff") ? e.slice(1) : e;
}

import { open as me, readFile as ke, stat as de } from "fs/promises";

function U(e, i = !1) {
  let r = e.length, n = 0, l = "", s = 0, u = 16, o = 0, f = 0, g = 0, a = 0, m = 0;
  function y(p, b) {
    let c = 0, k = 0;
    while (c < p || !b) {
      let h = e.charCodeAt(n);
      if (h >= 48 && h <= 57) k = k * 16 + h - 48; else if (h >= 65 && h <= 70) k = k * 16 + h - 65 + 10; else if (h >= 97 && h <= 102) k = k * 16 + h - 97 + 10; else break;
      n++, c++;
    }
    if (c < p) k = -1;
    return k;
  }
  function T(p) {
    n = p, l = "", s = 0, u = 16, m = 0;
  }
  function w() {
    let p = n;
    if (e.charCodeAt(n) === 48) n++; else {
      n++;
      while (n < e.length && x(e.charCodeAt(n))) n++;
    }
    if (n < e.length && e.charCodeAt(n) === 46) if (n++, n < e.length && x(e.charCodeAt(n))) {
      n++;
      while (n < e.length && x(e.charCodeAt(n))) n++;
    } else return m = 3, e.substring(p, n);
    let b = n;
    if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) {
      if (n++, n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) n++;
      if (n < e.length && x(e.charCodeAt(n))) {
        n++;
        while (n < e.length && x(e.charCodeAt(n))) n++;
        b = n;
      } else m = 3;
    }
    return e.substring(p, b);
  }
  function v() {
    let p = "", b = n;
    while (!0) {
      if (n >= r) {
        p += e.substring(b, n), m = 2;
        break;
      }
      let c = e.charCodeAt(n);
      if (c === 34) {
        p += e.substring(b, n), n++;
        break;
      }
      if (c === 92) {
        if (p += e.substring(b, n), n++, n >= r) {
          m = 2;
          break;
        }
        switch (e.charCodeAt(n++)) {
         case 34:
          p += '"';
          break;

         case 92:
          p += "\\";
          break;

         case 47:
          p += "/";
          break;

         case 98:
          p += "\b";
          break;

         case 102:
          p += "\f";
          break;

         case 110:
          p += `\n`;
          break;

         case 114:
          p += "\r";
          break;

         case 116:
          p += "\t";
          break;

         case 117:
          let h = y(4, !0);
          if (h >= 0) p += String.fromCharCode(h); else m = 4;
          break;

         default:
          m = 5;
        }
        b = n;
        continue;
      }
      if (c >= 0 && c <= 31) if (J(c)) {
        p += e.substring(b, n), m = 2;
        break;
      } else m = 6;
      n++;
    }
    return p;
  }
  function N() {
    if (l = "", m = 0, s = n, f = o, a = g, n >= r) return s = r, u = 17;
    let p = e.charCodeAt(n);
    if (H(p)) {
      do {
        n++, l += String.fromCharCode(p), p = e.charCodeAt(n);
      } while (H(p));
      return u = 15;
    }
    if (J(p)) {
      if (n++, l += String.fromCharCode(p), p === 13 && e.charCodeAt(n) === 10) n++, l += `\n`;
      return o++, g = n, u = 14;
    }
    switch (p) {
     case 123:
      return n++, u = 1;

     case 125:
      return n++, u = 2;

     case 91:
      return n++, u = 3;

     case 93:
      return n++, u = 4;

     case 58:
      return n++, u = 6;

     case 44:
      return n++, u = 5;

     case 34:
      return n++, l = v(), u = 10;

     case 47:
      let b = n - 1;
      if (e.charCodeAt(n + 1) === 47) {
        n += 2;
        while (n < r) {
          if (J(e.charCodeAt(n))) break;
          n++;
        }
        return l = e.substring(b, n), u = 12;
      }
      if (e.charCodeAt(n + 1) === 42) {
        n += 2;
        let c = r - 1, k = !1;
        while (n < c) {
          let h = e.charCodeAt(n);
          if (h === 42 && e.charCodeAt(n + 1) === 47) {
            n += 2, k = !0;
            break;
          }
          if (n++, J(h)) {
            if (h === 13 && e.charCodeAt(n) === 10) n++;
            o++, g = n;
          }
        }
        if (!k) n++, m = 1;
        return l = e.substring(b, n), u = 13;
      }
      return l += String.fromCharCode(p), n++, u = 16;

     case 45:
      if (l += String.fromCharCode(p), n++, n === r || !x(e.charCodeAt(n))) return u = 16;

     case 48:
     case 49:
     case 50:
     case 51:
     case 52:
     case 53:
     case 54:
     case 55:
     case 56:
     case 57:
      return l += w(), u = 11;

     default:
      while (n < r && S(p)) n++, p = e.charCodeAt(n);
      if (s !== n) {
        switch (l = e.substring(s, n), l) {
         case "true":
          return u = 8;

         case "false":
          return u = 9;

         case "null":
          return u = 7;
        }
        return u = 16;
      }
      return l += String.fromCharCode(p), n++, u = 16;
    }
  }
  function S(p) {
    if (H(p) || J(p)) return !1;
    switch (p) {
     case 125:
     case 93:
     case 123:
     case 91:
     case 34:
     case 58:
     case 44:
     case 47:
      return !1;
    }
    return !0;
  }
  function B() {
    let p;
    do {
      p = N();
    } while (p >= 12 && p <= 15);
    return p;
  }
  return {
    setPosition: T,
    getPosition: () => n,
    scan: i ? B : N,
    getToken: () => u,
    getTokenValue: () => l,
    getTokenOffset: () => s,
    getTokenLength: () => n - s,
    getTokenStartLine: () => f,
    getTokenStartCharacter: () => s - a,
    getTokenError: () => m
  };
}

function H(e) {
  return e === 32 || e === 9;
}

function J(e) {
  return e === 10 || e === 13;
}

function x(e) {
  return e >= 48 && e <= 57;
}

var K;

(function(e) {
  e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", 
  e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", 
  e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", 
  e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", 
  e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", 
  e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", 
  e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", 
  e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", 
  e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", 
  e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", 
  e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", 
  e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", 
  e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", 
  e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", 
  e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", 
  e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", 
  e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", 
  e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", 
  e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", 
  e[e.tab = 9] = "tab";
})(K || (K = {}));

var L = Array(20).fill(0).map((e, i) => " ".repeat(i));

var Q = {
  " ": {
    "\n": Array(200).fill(0).map((e, i) => `\n` + " ".repeat(i)),
    "\r": Array(200).fill(0).map((e, i) => "\r" + " ".repeat(i)),
    "\r\n": Array(200).fill(0).map((e, i) => `\r\n` + " ".repeat(i))
  },
  "\t": {
    "\n": Array(200).fill(0).map((e, i) => `\n` + "\t".repeat(i)),
    "\r": Array(200).fill(0).map((e, i) => "\r" + "\t".repeat(i)),
    "\r\n": Array(200).fill(0).map((e, i) => `\r\n` + "\t".repeat(i))
  }
}, C = [ `\n`, "\r", `\r\n` ];

function X(e, i, r) {
  let n, l, s, u, o;
  if (i) {
    u = i.offset, o = u + i.length, s = u;
    while (s > 0 && !P(e, s - 1)) s--;
    let c = o;
    while (c < e.length && !P(e, c)) c++;
    l = e.substring(s, c), n = ue(l, r);
  } else l = e, n = 0, s = 0, u = 0, o = e.length;
  let f = ce(r, e), g = C.includes(f), a = 0, m = 0, y;
  if (r.insertSpaces) y = L[r.tabSize || 4] ?? j(L[1], r.tabSize || 4); else y = "\t";
  let T = y === "\t" ? "\t" : " ", w = U(l, !1), v = !1;
  function N() {
    if (a > 1) return j(f, a) + j(y, n + m);
    let c = y.length * (n + m);
    if (!g || c > Q[T][f].length) return f + j(y, n + m);
    if (c <= 0) return f;
    return Q[T][f][c];
  }
  function S() {
    let c = w.scan();
    a = 0;
    while (c === 15 || c === 14) {
      if (c === 14 && r.keepLines) a += 1; else if (c === 14) a = 1;
      c = w.scan();
    }
    return v = c === 16 || w.getTokenError() !== 0, c;
  }
  let B = [];
  function p(c, k, h) {
    if (!v && (!i || k < o && h > u) && e.substring(k, h) !== c) B.push({
      offset: k,
      length: h - k,
      content: c
    });
  }
  let b = S();
  if (r.keepLines && a > 0) p(j(f, a), 0, 0);
  if (b !== 17) {
    let c = w.getTokenOffset() + s, k = y.length * n < 20 && r.insertSpaces ? L[y.length * n] : j(y, n);
    p(k, s, c);
  }
  while (b !== 17) {
    let c = w.getTokenOffset() + w.getTokenLength() + s, k = S(), h = "", E = !1;
    while (a === 0 && (k === 12 || k === 13)) {
      let W = w.getTokenOffset() + s;
      p(L[1], c, W), c = w.getTokenOffset() + w.getTokenLength() + s, E = k === 12, h = E ? N() : "", 
      k = S();
    }
    if (k === 2) {
      if (b !== 1) m--;
      if (r.keepLines && a > 0 || !r.keepLines && b !== 1) h = N(); else if (r.keepLines) h = L[1];
    } else if (k === 4) {
      if (b !== 3) m--;
      if (r.keepLines && a > 0 || !r.keepLines && b !== 3) h = N(); else if (r.keepLines) h = L[1];
    } else {
      switch (b) {
       case 3:
       case 1:
        if (m++, r.keepLines && a > 0 || !r.keepLines) h = N(); else h = L[1];
        break;

       case 5:
        if (r.keepLines && a > 0 || !r.keepLines) h = N(); else h = L[1];
        break;

       case 12:
        h = N();
        break;

       case 13:
        if (a > 0) h = N(); else if (!E) h = L[1];
        break;

       case 6:
        if (r.keepLines && a > 0) h = N(); else if (!E) h = L[1];
        break;

       case 10:
        if (r.keepLines && a > 0) h = N(); else if (k === 6 && !E) h = "";
        break;

       case 7:
       case 8:
       case 9:
       case 11:
       case 2:
       case 4:
        if (r.keepLines && a > 0) h = N(); else if ((k === 12 || k === 13) && !E) h = L[1]; else if (k !== 5 && k !== 17) v = !0;
        break;

       case 16:
        v = !0;
        break;
      }
      if (a > 0 && (k === 12 || k === 13)) h = N();
    }
    if (k === 17) if (r.keepLines && a > 0) h = N(); else h = r.insertFinalNewline ? f : "";
    let z = w.getTokenOffset() + s;
    p(h, c, z), b = k;
  }
  return B;
}

function j(e, i) {
  let r = "";
  for (let n = 0; n < i; n++) r += e;
  return r;
}

function ue(e, i) {
  let r = 0, n = 0, l = i.tabSize || 4;
  while (r < e.length) {
    let s = e.charAt(r);
    if (s === L[1]) n++; else if (s === "\t") n += l; else break;
    r++;
  }
  return Math.floor(n / l);
}

function ce(e, i) {
  for (let r = 0; r < i.length; r++) {
    let n = i.charAt(r);
    if (n === "\r") {
      if (r + 1 < i.length && i.charAt(r + 1) === `\n`) return `\r\n`;
      return "\r";
    } else if (n === `\n`) return `\n`;
  }
  return e && e.eol || `\n`;
}

function P(e, i) {
  return `\r\n`.indexOf(e.charAt(i)) !== -1;
}

var V;

(function(e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(V || (V = {}));

function ee(e, i = [], r = V.DEFAULT) {
  let n = null, l = [], s = [];
  function u(f) {
    if (Array.isArray(l)) l.push(f); else if (n !== null) l[n] = f;
  }
  return q(e, {
    onObjectBegin: () => {
      let f = {};
      u(f), s.push(l), l = f, n = null;
    },
    onObjectProperty: f => {
      n = f;
    },
    onObjectEnd: () => {
      l = s.pop();
    },
    onArrayBegin: () => {
      let f = [];
      u(f), s.push(l), l = f, n = null;
    },
    onArrayEnd: () => {
      l = s.pop();
    },
    onLiteralValue: u,
    onError: (f, g, a) => {
      i.push({
        error: f,
        offset: g,
        length: a
      });
    }
  }, r), l[0];
}

function Z(e, i = [], r = V.DEFAULT) {
  let n = {
    type: "array",
    offset: -1,
    length: -1,
    children: [],
    parent: void 0
  };
  function l(f) {
    if (n.type === "property") n.length = f - n.offset, n = n.parent;
  }
  function s(f) {
    return n.children.push(f), f;
  }
  q(e, {
    onObjectBegin: f => {
      n = s({
        type: "object",
        offset: f,
        length: -1,
        parent: n,
        children: []
      });
    },
    onObjectProperty: (f, g, a) => {
      n = s({
        type: "property",
        offset: g,
        length: -1,
        parent: n,
        children: []
      }), n.children.push({
        type: "string",
        value: f,
        offset: g,
        length: a,
        parent: n
      });
    },
    onObjectEnd: (f, g) => {
      l(f + g), n.length = f + g - n.offset, n = n.parent, l(f + g);
    },
    onArrayBegin: (f, g) => {
      n = s({
        type: "array",
        offset: f,
        length: -1,
        parent: n,
        children: []
      });
    },
    onArrayEnd: (f, g) => {
      n.length = f + g - n.offset, n = n.parent, l(f + g);
    },
    onLiteralValue: (f, g, a) => {
      s({
        type: pe(f),
        offset: g,
        length: a,
        parent: n,
        value: f
      }), l(g + a);
    },
    onSeparator: (f, g, a) => {
      if (n.type === "property") {
        if (f === ":") n.colonOffset = g; else if (f === ",") l(g);
      }
    },
    onError: (f, g, a) => {
      i.push({
        error: f,
        offset: g,
        length: a
      });
    }
  }, r);
  let o = n.children[0];
  if (o) delete o.parent;
  return o;
}

function R(e, i) {
  if (!e) return;
  let r = e;
  for (let n of i) if (typeof n === "string") {
    if (r.type !== "object" || !Array.isArray(r.children)) return;
    let l = !1;
    for (let s of r.children) if (Array.isArray(s.children) && s.children[0].value === n && s.children.length === 2) {
      r = s.children[1], l = !0;
      break;
    }
    if (!l) return;
  } else {
    let l = n;
    if (r.type !== "array" || l < 0 || !Array.isArray(r.children) || l >= r.children.length) return;
    r = r.children[l];
  }
  return r;
}

function q(e, i, r = V.DEFAULT) {
  let n = U(e, !1), l = [];
  function s(O) {
    return O ? () => O(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : () => !0;
  }
  function u(O) {
    return O ? () => O(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), () => l.slice()) : () => !0;
  }
  function o(O) {
    return O ? A => O(A, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : () => !0;
  }
  function f(O) {
    return O ? A => O(A, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), () => l.slice()) : () => !0;
  }
  let g = u(i.onObjectBegin), a = f(i.onObjectProperty), m = s(i.onObjectEnd), y = u(i.onArrayBegin), T = s(i.onArrayEnd), w = f(i.onLiteralValue), v = o(i.onSeparator), N = s(i.onComment), S = o(i.onError), B = r && r.disallowComments, p = r && r.allowTrailingComma;
  function b() {
    while (!0) {
      let O = n.scan();
      switch (n.getTokenError()) {
       case 4:
        c(14);
        break;

       case 5:
        c(15);
        break;

       case 3:
        c(13);
        break;

       case 1:
        if (!B) c(11);
        break;

       case 2:
        c(12);
        break;

       case 6:
        c(16);
        break;
      }
      switch (O) {
       case 12:
       case 13:
        if (B) c(10); else N();
        break;

       case 16:
        c(1);
        break;

       case 15:
       case 14:
        break;

       default:
        return O;
      }
    }
  }
  function c(O, A = [], G = []) {
    if (S(O), A.length + G.length > 0) {
      let M = n.getToken();
      while (M !== 17) {
        if (A.indexOf(M) !== -1) {
          b();
          break;
        } else if (G.indexOf(M) !== -1) break;
        M = b();
      }
    }
  }
  function k(O) {
    let A = n.getTokenValue();
    if (O) w(A); else a(A), l.push(A);
    return b(), !0;
  }
  function h() {
    switch (n.getToken()) {
     case 11:
      let O = n.getTokenValue(), A = Number(O);
      if (isNaN(A)) c(2), A = 0;
      w(A);
      break;

     case 7:
      w(null);
      break;

     case 8:
      w(!0);
      break;

     case 9:
      w(!1);
      break;

     default:
      return !1;
    }
    return b(), !0;
  }
  function E() {
    if (n.getToken() !== 10) return c(3, [], [ 2, 5 ]), !1;
    if (k(!1), n.getToken() === 6) {
      if (v(":"), b(), !Y()) c(4, [], [ 2, 5 ]);
    } else c(5, [], [ 2, 5 ]);
    return l.pop(), !0;
  }
  function z() {
    g(), b();
    let O = !1;
    while (n.getToken() !== 2 && n.getToken() !== 17) {
      if (n.getToken() === 5) {
        if (!O) c(4, [], []);
        if (v(","), b(), n.getToken() === 2 && p) break;
      } else if (O) c(6, [], []);
      if (!E()) c(4, [], [ 2, 5 ]);
      O = !0;
    }
    if (m(), n.getToken() !== 2) c(7, [ 2 ], []); else b();
    return !0;
  }
  function W() {
    y(), b();
    let O = !0, A = !1;
    while (n.getToken() !== 4 && n.getToken() !== 17) {
      if (n.getToken() === 5) {
        if (!A) c(4, [], []);
        if (v(","), b(), n.getToken() === 4 && p) break;
      } else if (A) c(6, [], []);
      if (O) l.push(0), O = !1; else l[l.length - 1]++;
      if (!Y()) c(4, [], [ 4, 5 ]);
      A = !0;
    }
    if (T(), !O) l.pop();
    if (n.getToken() !== 4) c(8, [ 4 ], []); else b();
    return !0;
  }
  function Y() {
    switch (n.getToken()) {
     case 3:
      return W();

     case 1:
      return z();

     case 10:
      return k(!0);

     default:
      return h();
    }
  }
  if (b(), n.getToken() === 17) {
    if (r.allowEmptyContent) return !0;
    return c(4, [], []), !1;
  }
  if (!Y()) return c(4, [], []), !1;
  if (n.getToken() !== 17) c(9, [], []);
  return !0;
}

function pe(e) {
  switch (typeof e) {
   case "boolean":
    return "boolean";

   case "number":
    return "number";

   case "string":
    return "string";

   case "object":
    {
      if (!e) return "null"; else if (Array.isArray(e)) return "array";
      return "object";
    }

   default:
    return "null";
  }
}

function ne(e, i, r, n) {
  let l = i.slice(), u = Z(e, []), o = void 0, f = void 0;
  while (l.length > 0) if (f = l.pop(), o = R(u, l), o === void 0 && r !== void 0) if (typeof f === "string") r = {
    [f]: r
  }; else r = [ r ]; else break;
  if (!o) {
    if (r === void 0) throw Error("Can not delete in empty document");
    return I(e, {
      offset: u ? u.offset : 0,
      length: u ? u.length : 0,
      content: JSON.stringify(r)
    }, n);
  } else if (o.type === "object" && typeof f === "string" && Array.isArray(o.children)) {
    let g = R(o, [ f ]);
    if (g !== void 0) if (r === void 0) {
      if (!g.parent) throw Error("Malformed AST");
      let a = o.children.indexOf(g.parent), m, y = g.parent.offset + g.parent.length;
      if (a > 0) {
        let T = o.children[a - 1];
        m = T.offset + T.length;
      } else if (m = o.offset + 1, o.children.length > 1) y = o.children[1].offset;
      return I(e, {
        offset: m,
        length: y - m,
        content: ""
      }, n);
    } else return I(e, {
      offset: g.offset,
      length: g.length,
      content: JSON.stringify(r)
    }, n); else {
      if (r === void 0) return [];
      let a = `${JSON.stringify(f)}: ${JSON.stringify(r)}`, m = n.getInsertionIndex ? n.getInsertionIndex(o.children.map(T => T.children[0].value)) : o.children.length, y;
      if (m > 0) {
        let T = o.children[m - 1];
        y = {
          offset: T.offset + T.length,
          length: 0,
          content: "," + a
        };
      } else if (o.children.length === 0) y = {
        offset: o.offset + 1,
        length: 0,
        content: a
      }; else y = {
        offset: o.offset + 1,
        length: 0,
        content: a + ","
      };
      return I(e, y, n);
    }
  } else if (o.type === "array" && typeof f === "number" && Array.isArray(o.children)) {
    let g = f;
    if (g === -1) {
      let a = `${JSON.stringify(r)}`, m;
      if (o.children.length === 0) m = {
        offset: o.offset + 1,
        length: 0,
        content: a
      }; else {
        let y = o.children[o.children.length - 1];
        m = {
          offset: y.offset + y.length,
          length: 0,
          content: "," + a
        };
      }
      return I(e, m, n);
    } else if (r === void 0 && o.children.length >= 0) {
      let a = f, m = o.children[a], y;
      if (o.children.length === 1) y = {
        offset: o.offset + 1,
        length: o.length - 2,
        content: ""
      }; else if (o.children.length - 1 === a) {
        let T = o.children[a - 1], w = T.offset + T.length, v = o.offset + o.length;
        y = {
          offset: w,
          length: v - 2 - w,
          content: ""
        };
      } else y = {
        offset: m.offset,
        length: o.children[a + 1].offset - m.offset,
        content: ""
      };
      return I(e, y, n);
    } else if (r !== void 0) {
      let a, m = `${JSON.stringify(r)}`;
      if (!n.isArrayInsertion && o.children.length > f) {
        let y = o.children[f];
        a = {
          offset: y.offset,
          length: y.length,
          content: m
        };
      } else if (o.children.length === 0 || f === 0) a = {
        offset: o.offset + 1,
        length: 0,
        content: o.children.length === 0 ? m : m + ","
      }; else {
        let y = f > o.children.length ? o.children.length : f, T = o.children[y - 1];
        a = {
          offset: T.offset + T.length,
          length: 0,
          content: "," + m
        };
      }
      return I(e, a, n);
    } else throw Error(`Can not ${r === void 0 ? "remove" : n.isArrayInsertion ? "insert" : "modify"} Array index ${g} as length is not sufficient`);
  } else throw Error(`Can not add ${typeof f !== "number" ? "index" : "property"} to parent of type ${o.type}`);
}

function I(e, i, r) {
  if (!r.formattingOptions) return [ i ];
  let n = D(e, i), l = i.offset, s = i.offset + i.content.length;
  if (i.length === 0 || i.content.length === 0) {
    while (l > 0 && !P(n, l - 1)) l--;
    while (s < n.length && !P(n, s)) s++;
  }
  let u = X(n, {
    offset: l,
    length: s - l
  }, {
    ...r.formattingOptions,
    keepLines: !1
  });
  for (let f = u.length - 1; f >= 0; f--) {
    let g = u[f];
    n = D(n, g), l = Math.min(l, g.offset), s = Math.max(s, g.offset + g.length), s += g.content.length - g.length;
  }
  let o = e.length - (n.length - s) - l;
  return [ {
    offset: l,
    length: o,
    content: n.substring(l, s)
  } ];
}

function D(e, i) {
  return e.substring(0, i.offset) + i.content + e.substring(i.offset + i.length);
}

var te;

(function(e) {
  e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", 
  e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", 
  e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", 
  e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(te || (te = {}));

var re;

(function(e) {
  e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", 
  e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", 
  e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", 
  e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", 
  e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", 
  e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", 
  e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(re || (re = {}));

var B1e = ee;

var ie;

(function(e) {
  e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", 
  e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", 
  e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", 
  e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", 
  e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", 
  e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", 
  e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", 
  e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(ie || (ie = {}));

function han(e, i, r, n) {
  return ne(e, i, r, n);
}

function iqn(e, i) {
  let r = i.slice(0).sort((l, s) => {
    let u = l.offset - s.offset;
    if (u === 0) return l.length - s.length;
    return u;
  }), n = e.length;
  for (let l = r.length - 1; l >= 0; l--) {
    let s = r[l];
    if (s.offset + s.length <= n) e = D(e, s); else throw Error("Overlapping edit");
    n = s.offset;
  }
  return e;
}

var SNt = "__unparsedToolInput";

function lOe(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let i = Object.entries(e);
  if (i.length !== 1) return !1;
  let [r, n] = i[0];
  return r === SNt && typeof n === "object" && n !== null && typeof n.raw === "string" && typeof n.len === "number";
}

function j5(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let i = Object.entries(e);
  if (i.length !== 1) return null;
  let [r, n] = i[0];
  if (r !== SNt || typeof n !== "object" || n === null) return null;
  let {raw: l, len: s} = n;
  if (typeof l !== "string" || typeof s !== "number") return null;
  return `input JSON failed to parse \u2014 ${s} bytes`;
}

var be = 8192;

function se(e, i) {
  try {
    return {
      ok: !0,
      value: JSON.parse(Mo(e))
    };
  } catch (r) {
    if (i) d(Je(r, `safeParseJSON: invalid JSON (${r instanceof Error ? r.constructor.name : typeof r}, ${e.length} bytes)`));
    return {
      ok: !1
    };
  }
}

class oe {
  cached=cM(se, e => e, 50);
  cache=this.cached.cache;
  parse(e, i) {
    return this.cached(e, i);
  }
}

var le = new oe;

function LU(e) {
  return e.trim().replace(/^```[a-zA-Z]*\s*/, "").replace(/\s*```$/, "").trim();
}

var mt = Object.assign(function(i, r = !0) {
  if (!i) return null;
  let n = i.length > be ? se(i, r) : le.parse(i, r);
  return n.ok ? n.value : null;
}, {
  cache: le.cache
});

function dOe(e) {
  if (!e) return null;
  try {
    return B1e(Mo(e));
  } catch (i) {
    return t(`Failed to parse JSONC: ${i instanceof Error ? i.message : String(i)}`, {
      level: "error"
    }), null;
  }
}

function KIo() {
  return Bun.JSONL?.parseChunk;
}

function ye(e, i) {
  let r = e.length, n = i(e);
  if (!n.error || n.done || n.read >= r) return n.values;
  let {values: l, read: s} = n;
  while (s < r) {
    let u = typeof e === "string" ? e.indexOf(`\n`, s) : e.indexOf(10, s);
    if (u === -1) break;
    s = u + 1;
    let o = i(e, s);
    if (o.values.length > 0) l = l.concat(o.values);
    if (!o.error || o.done || o.read >= r) break;
    s = o.read;
  }
  return l;
}

function Oe(e) {
  let i = e.length, r = 0;
  if (e[0] === 239 && e[1] === 187 && e[2] === 191) r = 3;
  let n = [];
  while (r < i) {
    let l = e.indexOf(10, r);
    if (l === -1) l = i;
    let s = e.toString("utf8", r, l).trim();
    if (r = l + 1, !s) continue;
    try {
      n.push(JSON.parse(s));
    } catch {}
  }
  return n;
}

function Te(e) {
  let i = Mo(e), r = i.length, n = 0, l = [];
  while (n < r) {
    let s = i.indexOf(`\n`, n);
    if (s === -1) s = r;
    let u = i.substring(n, s).trim();
    if (n = s + 1, !u) continue;
    try {
      l.push(JSON.parse(u));
    } catch {}
  }
  return l;
}

function egt(e) {
  let i = KIo();
  if (i) return ye(e, i);
  if (typeof e === "string") return Te(e);
  return Oe(e);
}

var F = 104857600;

async function tgt(e) {
  let {size: i} = await de(e);
  if (i <= F) return egt(await ke(e));
  await using r = await me(e, "r");
  let n = Buffer.allocUnsafe(F), l = 0, s = i - F;
  while (l < F) {
    let {bytesRead: o} = await r.read(n, l, F - l, s + l);
    if (o === 0) break;
    l += o;
  }
  let u = n.indexOf(10);
  if (u !== -1 && u < l - 1) return egt(n.subarray(u + 1, l));
  return egt(n.subarray(0, l));
}

function qIo(e, i, r) {
  if (!e || e.trim() === "") return _({
    [i]: r
  }, null, 4);
  let n = Mo(e);
  try {
    let l = [], s = B1e(n, l);
    if (l.length > 0 || s === null || typeof s !== "object" || Array.isArray(s)) return e;
    let u = han(n, [ i ], r, {
      formattingOptions: {
        insertSpaces: !0,
        tabSize: 4
      }
    });
    if (!u || u.length === 0) return n;
    return iqn(n, u);
  } catch (l) {
    return t(`Failed to set JSONC property "${i}": ${l instanceof Error ? l.message : String(l)}`, {
      level: "error"
    }), e;
  }
}

function PNs(e, i) {
  try {
    if (!e || e.trim() === "") return _([ i ], null, 4);
    let r = Mo(e), n = B1e(r);
    if (Array.isArray(n)) {
      let l = n.length, o = han(r, l === 0 ? [ 0 ] : [ l ], i, {
        formattingOptions: {
          insertSpaces: !0,
          tabSize: 4
        },
        isArrayInsertion: !0
      });
      if (!o || o.length === 0) {
        let f = [ ...n, i ];
        return _(f, null, 4);
      }
      return iqn(r, o);
    } else return _([ i ], null, 4);
  } catch (r) {
    return t(`Failed to insert item into user JSONC array, falling back to overwrite: ${r instanceof Error ? r.message : String(r)}`, {
      level: "error"
    }), _([ i ], null, 4);
  }
}

export { Mo, B1e, han, iqn, SNt, lOe, j5, LU, mt, dOe, KIo, egt, tgt, qIo, PNs };
