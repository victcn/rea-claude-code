// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { I } from "./chunk-5wbhf1bk.js";

import { E } from "./chunk-b0z4bv3v.js";

import { cn } from "./chunk-kawq2919.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { li } from "./chunk-zvghq5er.js";

import { pa, OMo, G$s, Tj, K$s } from "./chunk-g7z9901y.js";

import { en } from "./chunk-0qwx38yy.js";

var Ae = {
  ambiguousIsNarrow: !0
};

function ie(e) {
  return Bun.stringWidth(e, Ae);
}

var Zie = {
  NUL: 0,
  SOH: 1,
  STX: 2,
  ETX: 3,
  EOT: 4,
  ENQ: 5,
  ACK: 6,
  BEL: 7,
  BS: 8,
  HT: 9,
  LF: 10,
  VT: 11,
  FF: 12,
  CR: 13,
  SO: 14,
  SI: 15,
  DLE: 16,
  DC1: 17,
  DC2: 18,
  DC3: 19,
  DC4: 20,
  NAK: 21,
  SYN: 22,
  ETB: 23,
  CAN: 24,
  EM: 25,
  SUB: 26,
  ESC: 27,
  FS: 28,
  GS: 29,
  RS: 30,
  US: 31,
  DEL: 127
}, oD = "\x1b", xG = "\x07", CXe = ";", hMr = "\x1b(B\x0f", Iee = {
  CSI: 91,
  OSC: 93,
  DCS: 80,
  APC: 95,
  PM: 94,
  SOS: 88,
  ST: 92
};

function q(e) {
  return e >= 48 && e <= 126;
}

var J = oD + String.fromCharCode(Iee.CSI), P = {
  PARAM_START: 48,
  PARAM_END: 63,
  INTERMEDIATE_START: 32,
  INTERMEDIATE_END: 47,
  FINAL_START: 64,
  FINAL_END: 126
};

function ae(e) {
  return e >= P.PARAM_START && e <= P.PARAM_END;
}

function v(e) {
  return e >= P.INTERMEDIATE_START && e <= P.INTERMEDIATE_END;
}

function ue(e) {
  return e >= P.FINAL_START && e <= P.FINAL_END;
}

function Sl(...e) {
  if (e.length === 0) return J;
  if (e.length === 1) return `${J}${e[0]}`;
  let t = e.slice(0, -1), n = e.at(-1);
  return `${J}${t.join(CXe)}${n}`;
}

var Ck = {
  CUU: 65,
  CUD: 66,
  CUF: 67,
  CUB: 68,
  CNL: 69,
  CPL: 70,
  CHA: 71,
  CUP: 72,
  CHT: 73,
  HPA: 96,
  HPR: 97,
  VPA: 100,
  VPR: 101,
  HVP: 102,
  ED: 74,
  EL: 75,
  ECH: 88,
  IL: 76,
  DL: 77,
  ICH: 64,
  DCH: 80,
  SU: 83,
  SD: 84,
  SM: 104,
  RM: 108,
  SGR: 109,
  DSR: 110,
  DECSCUSR: 113,
  DECSTBM: 114,
  SCOSC: 115,
  SCORC: 117,
  CBT: 90
}, H$s = [ "toEnd", "toStart", "all", "scrollback" ], D$s = [ "toEnd", "toStart", "all" ], vMo = [ {
  style: "block",
  blinking: !0
}, {
  style: "block",
  blinking: !0
}, {
  style: "block",
  blinking: !1
}, {
  style: "underline",
  blinking: !0
}, {
  style: "underline",
  blinking: !1
}, {
  style: "bar",
  blinking: !0
}, {
  style: "bar",
  blinking: !1
} ];

function ce(e = 1) {
  return e === 0 ? "" : Sl(e, "A");
}

function EMo(e = 1) {
  return e === 0 ? "" : Sl(e, "B");
}

function ye(e = 1) {
  return e === 0 ? "" : Sl(e, "C");
}

function Re(e = 1) {
  return e === 0 ? "" : Sl(e, "D");
}

function oje(e) {
  return Sl(e, "G");
}

var kMo = Sl("G");

function wj(e, t) {
  return Sl(e, t, "H");
}

var uS = Sl("H");

function Oee(e, t) {
  let n = "";
  if (e < 0) n += Re(-e); else if (e > 0) n += ye(e);
  if (t < 0) n += ce(-t); else if (t > 0) n += EMo(t);
  return n;
}

function yMr() {
  return Sl("K");
}

var eae = Sl(2, "K"), Rk = Sl(2, "J"), qNt = Sl(3, "J");

function YNt(e) {
  if (e <= 0) return "";
  let t = "";
  for (let n = 0; n < e; n++) if (t += eae, n < e - 1) t += ce(1);
  return t += kMo, t;
}

function L$s(e = 1) {
  return e === 0 ? "" : Sl(e, "S");
}

function N$s(e = 1) {
  return e === 0 ? "" : Sl(e, "T");
}

function dme(e, t) {
  return Sl(e, t, "r");
}

var Mee = Sl("r"), $$s = Sl("200~"), F$s = Sl("201~"), XNt = Sl("I"), JNt = Sl("O"), U$s = Sl(">5u"), B$s = Sl(">1u"), TMo = Sl("<u"), j$s = Sl(">4;2m"), RXe = Sl(">4m");

var Ie = /^\[M[\x60-\x7f][\x20-\uffff]?$/, Q = "Gi=", _e = /^\x1b\]8(?:;|\r?$)/, we = "\x1b]8;;\x1b\\", De = /^(?:\[(?:\d{1,2}(?:;\d{1,2})?[~^$@]|(?:1;\d{1,2})?[A-DFHa-d])|O[A-DFHa-d])/;

function Jve(e) {
  let t = "ground", n = "", s = e?.x10Mouse ?? !1, r = e?.escPrefixedKeyIsAlt, o = e?.stringsEndAtLineFeed ?? !1;
  return {
    feed(c) {
      let l = le(c, t, n, !1, s, r?.() ?? !1, o);
      return t = l.state.state, n = l.state.buffer, l.tokens;
    },
    flush() {
      let c = le("", t, n, !0, s, r?.() ?? !1, o);
      return t = c.state.state, n = c.state.buffer, c.tokens;
    },
    reset() {
      t = "ground", n = "";
    },
    buffer() {
      return n;
    }
  };
}

function Dqn(e) {
  let t = Jve(), n = t.feed(e);
  return n.push(...t.flush()), n;
}

function le(e, t, n, s, r, o, c) {
  let l = [], m = {
    state: t,
    buffer: ""
  }, a = n + e, i = 0, d = 0, f = 0, x = () => {
    if (i > d) {
      let u = a.slice(d, i);
      if (u) l.push({
        type: "text",
        value: u
      });
    }
    d = i;
  }, p = u => {
    if (u) l.push({
      type: "sequence",
      value: u
    });
    m.state = "ground", d = i;
  };
  while (i < a.length) {
    let u = a.charCodeAt(i);
    switch (m.state) {
     case "ground":
      if (u === Zie.ESC) x(), f = i, m.state = "escape", i++; else if (u === Zie.DEL) if (Ie.test(a.slice(d, i))) i++; else x(), 
      i++, l.push({
        type: "text",
        value: "\x7f"
      }), d = i; else if (r && u < 32 && (a.length < 64 || u === Zie.BS)) {
        if (x(), i++, u === 13 && a.charCodeAt(i) === 10) i++;
        l.push({
          type: "text",
          value: String.fromCharCode(u)
        }), d = i;
      } else i++;
      break;

     case "escape":
      if (u === Iee.CSI) m.state = "csi", i++; else if (u === Iee.OSC) m.state = "osc", 
      i++; else if (u === Iee.DCS) m.state = "dcs", i++; else if (u === Iee.APC && (!r || i + 1 >= a.length || a[i + 1] === Q[0])) m.state = "apc", 
      i++; else if (!r && u === Iee.PM) m.state = "pm", i++; else if (!r && (u === Iee.SOS || u === 107)) m.state = "sos", 
      i++; else if (u === 79) m.state = "ss3", i++; else if (r && (u === 32 || u === 13 || u === 10 || u === 9)) i++, 
      l.push({
        type: "text",
        value: a.slice(f, i)
      }), m.state = "ground", d = i; else if (r && v(u)) l.push({
        type: "text",
        value: a.slice(f, i)
      }), m.state = "ground", d = i; else if (v(u)) m.state = "escapeIntermediate", i++; else if (u === Zie.DEL) i++, 
      l.push({
        type: "text",
        value: a.slice(f, i)
      }), m.state = "ground", d = i; else if (q(u)) i++, p(a.slice(f, i)); else if (u === Zie.ESC && o && i === f + 1 && De.test(a.slice(i + 1, i + 1 + 8))) i++; else if (u === Zie.ESC) p(a.slice(f, i)), 
      f = i, m.state = "escape", i++; else if (u < 32) i++, l.push({
        type: "text",
        value: a.slice(f, i)
      }), m.state = "ground", d = i; else m.state = "ground", d = f;
      break;

     case "escapeIntermediate":
      if (v(u)) i++; else if (q(u)) i++, p(a.slice(f, i)); else m.state = "ground", d = f;
      break;

     case "csi":
      if (r && u === 77 && i - f === 2 && (i + 1 >= a.length || a.charCodeAt(i + 1) >= 32) && (i + 2 >= a.length || a.charCodeAt(i + 2) >= 32) && (i + 3 >= a.length || a.charCodeAt(i + 3) >= 32)) {
        if (i + 4 <= a.length) i += 4, p(a.slice(f, i)); else i = a.length;
        break;
      }
      if (ue(u)) i++, p(a.slice(f, i)); else if (ae(u) || v(u)) i++; else m.state = "ground", 
      d = f;
      break;

     case "ss3":
      if (u >= 64 && u <= 126) i++, p(a.slice(f, i)); else m.state = "ground", d = f;
      break;

     case "osc":
     case "dcs":
     case "apc":
     case "pm":
     case "sos":
      if (r && m.state === "apc" && i >= f + 2 && i - f - 2 < Q.length && a[i] !== Q[i - f - 2]) p(a.slice(f, f + 2)), 
      d = f + 2; else if (u === Zie.BEL && m.state !== "pm" && m.state !== "sos") i++, 
      p(a.slice(f, i)); else if (u === Zie.ESC && i + 1 < a.length) if (a.charCodeAt(i + 1) === Iee.ST) i += 2, 
      p(a.slice(f, i)); else p(a.slice(f, i)), f = i, m.state = "escape", i++; else if (u === Zie.CAN || u === Zie.SUB) i++, 
      p(a.slice(f, i)); else if (c && u === Zie.LF) p(_e.test(a.slice(f, Math.min(i, f + 5))) ? we : ""); else i++;
      break;
    }
  }
  if (m.state === "ground") x(); else if (s) {
    let u = a.slice(f);
    if (u) l.push({
      type: "sequence",
      value: u
    });
    m.state = "ground";
  } else m.buffer = a.slice(f);
  return {
    tokens: l,
    state: m
  };
}

var xXe = e => `\\x1b\\[[0-9${e}]*m`;

var Z = new RegExp(xXe(";:"), "g"), fe = /\x1b\]8;[^\x07\x1b]*(?:\x07|\x1b\\)/y, Ne = new RegExp(`\\r((?:${xXe(";:")})+)\\n`, "g"), G = [ 22, 22, 23, 23, 24, 25, 27, 28, 29, 39, 49, 54, 55, 75 ], ke = /^\x1b\[[34]8;(?:5;\d+|2;\d+;\d+;\d+)m$/, ee = 9, te = 10, pe = new Map([ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 20, 3 ], [ 4, 4 ], [ 21, 4 ], [ 5, 5 ], [ 6, 5 ], [ 7, 6 ], [ 8, 7 ], [ 9, 8 ], [ 51, 11 ], [ 52, 11 ], [ 53, 12 ], [ 73, 13 ], [ 74, 13 ] ]);

function Pc(e, t, n) {
  if (!(t > 0)) return e;
  if (!e.includes("\x1b[")) return W(e, t, n);
  let s = e.replace(Z, "");
  if (s.length < e.length && s.includes("\x1b") && cn(s) !== cn(e)) return W(e.replace(Ne, `$1\r\n`), t, n);
  let r = W(s, t, n);
  if (r === s && !r.includes(`\n`)) return e;
  let o = e.match(Z);
  if (o === null) return r;
  let c = e.split(Z), l = [];
  for (let _ = 0, w = 0; _ < o.length; _++) l.push(w += c[_].length);
  let m = AMo(), a = [], i = 0, d = 0, f = "", x = "", p = !0, u = !1, R = !0, S = 0, C = 0, b = 0, y = -1, k = -1, K = [], U = [], Y = [], z = [], X = [], F = [], j = [];
  for (;;) {
    let _ = me(s, S, z, X), w = me(r, b, K, U), oe = z[_], Ce = K[w];
    for (let g = 0; g < _; g++) F[g] = -1;
    let O = _ - 1, M = 0;
    for (let g = w - 1; g >= -1 && R; g--) {
      let h = g < 0 ? -1 : U[g];
      if (h === 10 || typeof h === "string") {
        Y[M++] = g;
        continue;
      }
      let A = O;
      while (A >= 0 && X[A] !== h) A--;
      R = g < 0 || A >= 0;
      for (let B = 0; O > A; O--) {
        let N = X[O], T = N === 10 || typeof N === "string" ? B : M;
        while (T < M && U[Y[T]] !== N) T++;
        if (T < M) F[O] = Y[T], B = T + 1;
      }
      if (A >= 0) F[A] = g, O = A - 1;
      M = 0;
    }
    if (!R) break;
    let V = i, L = i - 1;
    for (let g = 0; l[L + 1] <= oe; ) {
      let h = l[++L];
      while (g < _ && (z[g] < h || F[g] < 0)) g++;
      j[L - V] = h <= S ? 0 : g < _ ? F[g] : w;
    }
    for (let g = 0; g <= w; g++) {
      let h = K[g], A = i <= L && j[i - V] <= g, B = g < w && U[g] === 10;
      if (u && (A || g < w && !B)) {
        if (u = !1, x !== "") a.push(r.slice(C, h), x), C = h, p = !0;
      }
      if (A) {
        a.push(r.slice(C, h)), C = h;
        while (i <= L && j[i - V] <= g) a.push(o[i++]);
        p = !0;
      }
      if (B) {
        if (d < i) {
          while (d < i) CMo(o[d++], m);
          f = "", x = "";
          let N = 0;
          for (let T = 0; T < m.length; T++) {
            if (m[T] === "") continue;
            if (x += `\x1b[${m[T]}m`, G[T] !== N) N = G[T], f = `\x1b[${N}m${f}`;
          }
        }
        if (p && f !== "") a.push(r.slice(C, h), f), C = h;
        p = !1, u = !0;
      }
    }
    if (S = oe, b = Ce, b >= r.length) {
      R = S >= s.length;
      break;
    }
    if (u) {
      if (u = !1, x !== "") a.push(r.slice(C, b), x), C = b, p = !0;
    }
    if (y < b) y = r.indexOf(`\n`, b), y = y === -1 ? r.length : y;
    if (k < b) k = r.indexOf("\x1b", b), k = k === -1 ? r.length : k;
    let D = Math.min(y - b, k - b, i < l.length ? l[i] - S : r.length);
    while (D > 0 && xe(r.charCodeAt(b + D - 1))) D--;
    if (D < 1 || !s.startsWith(r.slice(b, b + D), S)) {
      if (D = 1, r.charCodeAt(b) !== s.charCodeAt(S)) {
        R = !1;
        break;
      }
    }
    S += D, b += D;
  }
  if (!R) return W(e, t, n);
  return a.push(r.slice(C)), a.join("");
}

function me(e, t, n, s) {
  let r = 0, o = t;
  for (;;r++) {
    let c = e.charCodeAt(o);
    fe.lastIndex = o;
    let l = c === 27 ? fe.exec(e) : null;
    if (l === null && !xe(c)) break;
    n[r] = o, s[r] = l !== null ? l[0] : c === 13 ? 10 : c, o += l !== null ? l[0].length : c === 13 && e.charCodeAt(o + 1) === 10 ? 2 : 1;
  }
  return n[r] = o, r;
}

function xe(e) {
  return e === 32 || e >= 9 && e <= 13;
}

function AMo() {
  return G.map(() => "");
}

function CMo(e, t) {
  if (!e.endsWith("m")) return;
  if (ke.test(e)) {
    t[e.charCodeAt(2) === 51 ? ee : te] = e.slice(2, -1);
    return;
  }
  let n = e.length === 5 ? e.charCodeAt(2) - 48 : 0, s = e.charCodeAt(e.length - 2) - 48;
  if ((e.length === 4 || e.length === 5) && n >= 0 && n <= 9 && s >= 0 && s <= 9) {
    de(n * 10 + s, t);
    return;
  }
  let r = e.slice(2, -1).split(";");
  for (let o = 0; o < r.length; o++) {
    let c = r[o], l = c === "" ? 0 : parseInt(c, 10);
    if (l === 38 || l === 48 || l === 58) {
      let m = parseInt(r[o + 1] ?? "", 10), a = c.includes(":") ? 1 : m === 5 ? 3 : m === 2 ? 5 : 1;
      if (l !== 58 && (a > 1 || c.includes(":"))) {
        if (o + a <= r.length) t[l === 38 ? ee : te] = r.slice(o, o + a).join(";");
      }
      o += a - 1;
    } else if (l === 4 && c.includes(":")) t[pe.get(4)] = c === "4:0" ? "" : /^4:[1-5]$/.test(c) ? c : "4"; else de(l, t);
  }
}

function de(e, t) {
  let n = e >= 30 && e <= 37 || e >= 90 && e <= 97 ? ee : e >= 40 && e <= 47 || e >= 100 && e <= 107 ? te : pe.get(e);
  if (n !== void 0) t[n] = String(e); else if (e === 0) t.fill(""); else for (let s = 0; s < t.length; s++) if (G[s] === e) t[s] = "";
}

var Oe = "\u{f0000}", Pe = "\u{2fa1d}", ne = /[\u{F0000}\u{2FA1D}]/gu, H = /[^\x00-\u02FF\u0370-\u0482\u048A-\u052F\u2000-\u200B\u2010-\u205F\u2070-\u20CF\u2100-\u2BFF\u2E80-\u3029\u3030-\u3098\u309B-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFF01-\uFF9D\uFFE0-\uFFEE\u{1f000}-\u{1f1e5}\u{1f200}-\u{1f3fa}\u{1f400}-\u{1faff}]/gu;

function W(e, t, n) {
  if (e.search(H) === -1) return Bun.wrapAnsi(e, t, n);
  let s = [], r = [], o = !1, c = e.search(ne) !== -1, l = pa();
  for (let i of Dqn(e)) {
    let d = i.value;
    if (i.type === "sequence") {
      r.push(d);
      continue;
    }
    let f = 0, x;
    H.lastIndex = 0;
    while ((x = H.exec(d)) !== null) {
      let p = d.lastIndexOf(`\n`, x.index) + 1, u = d.indexOf(`\n`, x.index), R = u === -1 ? d.length : u;
      for (let {segment: S, index: C} of l.segment(d.slice(p, R))) {
        if (S.length === 1) continue;
        let b = S.codePointAt(0) > 65535 ? 2 : 1;
        if (S.length === b) continue;
        let y = ie(S);
        if (y !== 1 && y !== 2) continue;
        ge(r, s, d.slice(f, p + C), c), s.push(S), r.push(y === 1 ? Oe : Pe), o = !0, f = p + C + S.length;
      }
      H.lastIndex = R;
    }
    ge(r, s, d.slice(f), c);
  }
  if (!o) return Bun.wrapAnsi(e, t, n);
  let m = 0, a = "";
  for (let i of Dqn(Bun.wrapAnsi(r.join(""), t, n))) a += i.type === "sequence" ? i.value : i.value.replace(ne, d => s[m++] ?? d);
  return a;
}

function ge(e, t, n, s) {
  if (n === "") return;
  if (s) for (let r of n.match(ne) ?? []) t.push(r);
  e.push(n);
}

function Cd(e, t) {
  if (ie(e) <= t) return e;
  if (t <= 0) return "\u2026";
  if (t < 5) return ut(e, t);
  let n = e.lastIndexOf("/"), s = n >= 0 ? n : e.lastIndexOf("\\"), r = s >= 0 ? e.slice(s) : e, o = s >= 0 ? e.slice(0, s) : "", c = ie(r);
  if (c >= t - 1) return iM(e, t);
  let l = t - 1 - c;
  return vj(o, l) + "\u2026" + r;
}

function ut(e, t) {
  if (ie(e) <= t) return e;
  if (t <= 1) return "\u2026";
  let n = 0, s = "";
  for (let {segment: r} of pa().segment(e)) {
    let o = ie(r);
    if (n + o > t - 1) break;
    s += r, n += o;
  }
  return s + "\u2026";
}

function iM(e, t) {
  if (ie(e) <= t) return e;
  if (t <= 1) return "\u2026";
  let n = t - 1, s = [ ...pa().segment(e) ], r = 0, o = s.length;
  for (let c = s.length - 1; c >= 0; c--) {
    let l = ie(s[c].segment);
    if (r + l > n) break;
    r += l, o = c;
  }
  return `\u2026${s.slice(o).map(c => c.segment).join("")}`;
}

function vj(e, t) {
  if (ie(e) <= t) return e;
  if (t <= 0) return "";
  let n = 0, s = "";
  for (let {segment: r} of pa().segment(e)) {
    let o = ie(r);
    if (n + o > t) break;
    s += r, n += o;
  }
  return s;
}

var Fe = 8, $e = 40;

function bgt(e, t) {
  return ut(e, Math.max($e, t - Fe));
}

function qo(e, t, n = !1) {
  let s = e;
  if (n) {
    let r = e.indexOf(`\n`);
    if (r !== -1) {
      if (s = e.substring(0, r), ie(s) + 1 > t) return ut(`${s}\u2026`, t);
      return `${s}\u2026`;
    }
  }
  if (ie(s) <= t) return s;
  return ut(s, t);
}

function PXe(e, t) {
  let n = [], s = "", r = 0;
  for (let {segment: o} of pa().segment(e)) {
    let c = ie(o);
    if (r + c <= t) s += o, r += c; else {
      if (s) n.push(s);
      s = o, r = c;
    }
  }
  if (s) n.push(s);
  return n;
}

function Lqn(e, t, n) {
  if (n <= 0 || t <= 0) return "";
  let s = Pc(e, t, {
    trim: !0,
    hard: !0
  }).split(`\n`);
  if (s.length <= n) return s.join(`\n`);
  let r = s.slice(0, n);
  return r[n - 1] = ut((r[n - 1] ?? "") + "\u2026", t), r.join(`\n`);
}

function Qve(e) {
  return `${(e / 1e3).toFixed(1)}s`;
}

function rn(e, t) {
  if (e < 6e4) {
    if (e === 0) return "0s";
    if (e < 1) return `${(e / 1e3).toFixed(1)}s`;
    return `${Math.floor(e / 1e3).toString()}s`;
  }
  let n = Math.floor(e / 864e5), s = Math.floor(e % 864e5 / 36e5), r = Math.floor(e % 36e5 / 6e4), o = Math.round(e % 6e4 / 1e3);
  if (o === 60) o = 0, r++;
  if (r === 60) r = 0, s++;
  if (s === 24) s = 0, n++;
  let c = t?.hideTrailingZeros;
  if (t?.mostSignificantOnly) {
    if (n > 0) return `${n}d`;
    if (s > 0) return `${s}h`;
    if (r > 0) return `${r}m`;
    return `${o}s`;
  }
  if (n > 0) {
    if (c && s === 0 && r === 0) return `${n}d`;
    if (c && r === 0) return `${n}d ${s}h`;
    return `${n}d ${s}h ${r}m`;
  }
  if (s > 0) {
    if (c && r === 0 && o === 0) return `${s}h`;
    if (c && o === 0) return `${s}h ${r}m`;
    return `${s}h ${r}m ${o}s`;
  }
  if (r > 0) {
    if (c && o === 0) return `${r}m`;
    return `${r}m ${o}s`;
  }
  return `${o}s`;
}

function yA(e) {
  let t = e >= 6e4 ? Math.round(e / 6e4) * 6e4 : e;
  return rn(t, {
    hideTrailingZeros: !0
  });
}

function cme(e) {
  let t = Math.max(0, Math.floor(e / 1e3));
  if (t < 60) return `${t}s`;
  let n = Math.floor(t / 60);
  if (n < 60) return `${n}m${String(t % 60).padStart(2, "0")}s`;
  let s = Math.floor(n / 60);
  if (s < 24) return `${s}h${String(n % 60).padStart(2, "0")}m`;
  return `${Math.floor(s / 24)}d${String(s % 24).padStart(2, "0")}h`;
}

var Me = {
  notation: "compact",
  maximumFractionDigits: 1,
  minimumFractionDigits: 1
}, Le = {
  notation: "compact",
  maximumFractionDigits: 1,
  minimumFractionDigits: 0
};

function Gs(e) {
  let t = e >= 1e3;
  return K$s("en-US", t ? Me : Le).format(e).toLowerCase();
}

function xr(e) {
  return Gs(e).replace(".0", "");
}

function _Mr(e, t = 4) {
  return `$${e > .5 ? Be(e, 100).toFixed(2) : e.toFixed(t)}`;
}

function Be(e, t) {
  return Math.round(e * t) / t;
}

var RMo = "costs may be inaccurate due to usage of unknown models", xMo = "at your organization's configured rates";

function PMo(e) {
  return `${Gs(e.inputTokens)} input, ${Gs(e.outputTokens)} output, ${Gs(e.cacheReadInputTokens)} cache read, ${Gs(e.cacheCreationInputTokens)} cache write` + (e.webSearchRequests > 0 ? `, ${Gs(e.webSearchRequests)} web search` : "");
}

function Ej(e) {
  if (e < 20) return "< 20";
  return `~${xr(Math.round(e / 10) * 10)}`;
}

function kj(e, t = {}) {
  let {style: n = "narrow", numeric: s = "always", maxUnit: r, now: o = new Date} = t, c = e.getTime() - o.getTime(), l = Math.trunc(c / 1e3), m = [ {
    unit: "year",
    seconds: 31536e3,
    shortUnit: "y"
  }, {
    unit: "month",
    seconds: 2592e3,
    shortUnit: "mo"
  }, {
    unit: "week",
    seconds: 604800,
    shortUnit: "w"
  }, {
    unit: "day",
    seconds: 86400,
    shortUnit: "d"
  }, {
    unit: "hour",
    seconds: 3600,
    shortUnit: "h"
  }, {
    unit: "minute",
    seconds: 60,
    shortUnit: "m"
  }, {
    unit: "second",
    seconds: 1,
    shortUnit: "s"
  } ], a = r ? m.filter(i => i.seconds <= 86400) : m;
  for (let {unit: i, seconds: d, shortUnit: f} of a) if (Math.abs(l) >= d) {
    let x = Math.trunc(l / d);
    if (n === "narrow") return l < 0 ? `${Math.abs(x)}${f} ago` : `in ${x}${f}`;
    return OMo("long", s).format(x, i);
  }
  if (n === "narrow") return l <= 0 ? "0s ago" : "in 0s";
  return OMo(n, "auto").format(0, "second");
}

function Lw(e, t = {}) {
  let {now: n = new Date, ...s} = t;
  if (e > n) return kj(e, {
    ...s,
    now: n
  });
  return kj(e, {
    ...s,
    numeric: "always",
    now: n
  });
}

function lln(e) {
  let t = e.fileSize !== void 0 ? en(e.fileSize) : `${e.messageCount} messages`, n = [ Lw(e.modified, {
    style: "short"
  }), ...e.sessionKind === "bg" ? [ "bg" ] : [], ...e.gitBranch ? [ e.gitBranch ] : [], t ];
  if (e.tag) n.push(`#${e.tag}`);
  if (e.agentSetting) n.push(`@${e.agentSetting}`);
  if (e.prNumber) n.push(e.prRepository ? `${e.prRepository}#${e.prNumber}` : `#${e.prNumber}`);
  return n.join(" \xb7 ");
}

function be(e, t) {
  if (t === void 0) return {
    minutes: e.getMinutes(),
    year: e.getFullYear()
  };
  let n = new Map(Tj("en-US", {
    timeZone: t,
    year: "numeric",
    minute: "numeric"
  }).formatToParts(e).map(s => [ s.type, s.value ]));
  return {
    minutes: Number(n.get("minute")),
    year: Number(n.get("year"))
  };
}

function ox(e, t = !1, n = !0, s = !1, r) {
  if (!e) return;
  let o = new Date(e * 1e3), c = new Date, {minutes: l, year: m} = be(o, r), a = t || r !== void 0 ? ` (${r ?? G$s()})` : "", i = (o.getTime() - c.getTime()) / 36e5;
  if (s || i > 24) {
    let f = {
      month: "short",
      day: "numeric",
      hour: n ? "numeric" : void 0,
      minute: !n || l === 0 ? void 0 : "2-digit",
      hour12: n ? !0 : void 0,
      timeZone: r
    };
    if (m !== be(c, r).year) f.year = "numeric";
    return o.toLocaleString("en-US", f).replace(/[ \u202f]([AP]M)/i, (p, u) => u.toLowerCase()) + a;
  }
  return o.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: l === 0 ? void 0 : "2-digit",
    hour12: !0,
    timeZone: r
  }).replace(/[ \u202f]([AP]M)/i, (f, x) => x.toLowerCase()) + a;
}

function QNt(e, t = !1, n = !0, s = !1) {
  let r = new Date(e);
  return `${ox(Math.floor(r.getTime() / 1e3), t, n, s)}`;
}

function IXe(e) {
  return Math.round(e * 1e3) / 10;
}

function ume(e) {
  return Math.min(IXe(e), 100);
}

function Hee(e, t = "line") {
  if (e <= 0) return "";
  return `\u2026 +${e} ${I(e, t)}`;
}

function sje(e) {
  return Math.max(1, Math.round(e / 1e3));
}

import { AsyncLocalStorage as ve } from "async_hooks";

import { constants as Ue } from "fs";

import { appendFile as He, copyFile as We, lstat as Ge, mkdir as Ke, open as Se, readdir as he, readFile as Ee, stat as Ye, unlink as ze, writeFile as re } from "fs/promises";

class bMr {
  read(e) {
    return Ee(e, "utf8");
  }
  readBytes(e) {
    return Ee(e);
  }
  write(e, t, n) {
    return re(e, t, {
      encoding: "utf8",
      mode: n
    });
  }
  async mkdir(e, t) {
    try {
      await Ke(e, {
        recursive: !0,
        mode: t
      });
    } catch (n) {
      if (E(n) !== "EEXIST") throw n;
    }
  }
  atomicWrite(e, t, n) {
    return Tn(e, t, n);
  }
  delete(e) {
    return ze(e);
  }
  list(e) {
    return he(e);
  }
  append(e, t, n) {
    return He(e, t, {
      encoding: "utf8",
      mode: n
    });
  }
  writeExclusive(e, t, n) {
    return re(e, t, {
      encoding: "utf8",
      flag: "wx",
      mode: n
    });
  }
  writeBytesExclusive(e, t, n) {
    return re(e, t, {
      flag: "wx",
      mode: n
    });
  }
  copy(e, t) {
    return We(e, t);
  }
  async stat(e) {
    return {
      mtimeMs: (await Ye(e)).mtimeMs
    };
  }
  async lstat(e) {
    try {
      let t = await Ge(e);
      return {
        isSymbolicLink: t.isSymbolicLink(),
        isFile: t.isFile(),
        isDirectory: t.isDirectory(),
        mtimeMs: t.mtimeMs,
        nlink: t.nlink
      };
    } catch (t) {
      if (E(t) === "ENOENT") return;
      throw t;
    }
  }
  async listEntries(e) {
    return (await he(e, {
      withFileTypes: !0
    })).map(n => ({
      name: n.name,
      isDirectory: n.isDirectory(),
      isFile: n.isFile()
    }));
  }
  async readRange(e, t, n) {
    se("readRange", "offset", t), se("readRange", "length", n);
    let s = await Se(e, "r");
    try {
      return await Te(s, t, n);
    } finally {
      await s.close();
    }
  }
  async readTail(e, t, n) {
    se("readTail", "maxBytes", t);
    let s = n?.noFollow ? Ue.O_RDONLY | li : "r", r = await Se(e, s);
    try {
      let o = await r.stat();
      if (n?.noFollow && !o.isFile()) throw Object.assign(Error("ENXIO: not a regular file"), {
        code: "ENXIO",
        path: e
      });
      let {size: c} = o, l = Math.min(t, c);
      return await Te(r, c - l, l);
    } finally {
      await r.close();
    }
  }
}

function se(e, t, n) {
  if (!Number.isInteger(n) || n < 0) throw RangeError(`${e}: ${t} must be a non-negative integer, got ${n}`);
}

async function Te(e, t, n) {
  if (n === 0) return Buffer.alloc(0);
  let s = Buffer.alloc(n), r = 0;
  while (r < n) {
    let {bytesRead: o} = await e.read(s, r, n - r, t + r);
    if (o === 0) break;
    r += o;
  }
  return r === n ? s : Buffer.from(s.subarray(0, r));
}

var Xe = new ve;

function gn() {
  return Xe.getStore() ?? new bMr;
}

export { ie, Zie, oD, xG, CXe, hMr, Iee, Sl, Ck, H$s, D$s, vMo, EMo, oje, kMo, wj, uS, Oee, yMr, eae, Rk, qNt, YNt, L$s, N$s, dme, Mee, $$s, F$s, XNt, JNt, U$s, B$s, TMo, j$s, RXe, Jve, Dqn, xXe, Pc, AMo, CMo, Cd, ut, iM, vj, bgt, qo, PXe, Lqn, Qve, rn, yA, cme, Gs, xr, _Mr, RMo, xMo, PMo, Ej, kj, Lw, lln, ox, QNt, IXe, ume, Hee, sje, bMr, gn };
