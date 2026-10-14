// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { $s, xp } from "./chunk-5wbhf1bk.js";

import { q } from "./chunk-3pqddg8f.js";

import { _ } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { hu } from "./chunk-5brm0azz.js";

import { yE, sj, vC, zBe, _l, mft, gft } from "./chunk-f1zpf9me.js";

import { S7t } from "./chunk-3xtsjx0y.js";

var ae = /[^\t\n\x20-\x7e]/, N = /^\p{L}$/u, A = /^\p{M}$/u, fe = /^\p{White_Space}$/u, ue = /^[\p{Emoji}\p{Extended_Pictographic}]$/u, W = /^\p{Extended_Pictographic}$/u, ce = /^\p{Sm}$/u;

function G(e, n) {
  let r = n.split(" ").map(i => `\\p{${e}=${i}}`).join("");
  return new RegExp(`^[${r}]$`, "u");
}

function j(e) {
  return {
    base: G("Script", e),
    mark: G("Script_Extensions", e)
  };
}

function B(e) {
  return {
    base: e,
    mark: e
  };
}

var ee = /^[\p{Script=Arabic}\p{Script=Hebrew}\p{Script=Syriac}\p{Script=Thaana}\p{Script=Nko}\p{Script=Samaritan}\p{Script=Mandaic}\p{Script=Adlam}\p{Script=Hanifi_Rohingya}\p{Script=Yezidi}]$/u, le = /^[\p{Script=Arabic}\p{Script=Syriac}\p{Script=Thaana}\p{Script=Hanifi_Rohingya}]$/u, M = /^\p{Nd}$/u, X = j("Arabic Syriac Nko Mongolian Devanagari Bengali Gurmukhi Gujarati Oriya Tamil Telugu Kannada Malayalam Sinhala Myanmar Khmer Tibetan"), pe = j("Devanagari Bengali Gurmukhi Gujarati Oriya Tamil Telugu Kannada Malayalam Sinhala Myanmar Khmer Tibetan Arabic Syriac Tifinagh"), xe = j("Arabic Syriac Mongolian Nko"), ne = /^[\p{Script=Khmer}\p{Script=Thai}\p{Script=Lao}\p{Script=Myanmar}]$/u, de = B(ne), Z = /^[0-9]$/, V = B(/^\p{Script=Mongolian}$/u), be = B(/^\p{Script=Khmer}$/u), O = B(/^\p{Script=Egyptian_Hieroglyphs}$/u), Y = B(/^\p{Script=Duployan}$/u), J = /^\p{Script=Brahmi}$/u, me = /^[\p{Script=Myanmar}\p{Script=Phags_Pa}\p{Script=Manichaean}]$/u;

function k(e) {
  if (e < 160) return e < 32 && e !== 9 && e !== 10 || e >= 127;
  if (e < 8192) return e === 173 || e === 847 || e === 1564 || e === 4447 || e === 4448 || e === 6068 || e === 6069 || e >= 6155 && e <= 6159;
  if (e < 65536) return e >= 8203 && e <= 8207 || e >= 8232 && e <= 8238 || e >= 8288 && e <= 8303 || e === 12644 || e >= 65024 && e <= 65039 || e === 65279 || e === 65440 || e >= 65520 && e <= 65531;
  return e === 69759 || e >= 78896 && e <= 78911 || e === 94180 || e >= 113824 && e <= 113827 || e >= 119155 && e <= 119162 || e >= 917504 && e <= 921599;
}

var ge = [ "gbeng", "gbsct", "gbwls" ], re = 5;

function z(e, n) {
  let r = "", i = n + re + 1;
  for (let t = n + 1; t <= i && t < e.length; t++) {
    let f = e[t].codePointAt(0) ?? 0;
    if (f === 917631) return ge.includes(r) ? t : -1;
    if (f < 917601 || f > 917626) return -1;
    r += String.fromCharCode(f - 917504);
  }
  return -1;
}

function aSe(e) {
  let n = {
    tags: 0,
    bidi: 0,
    zeroWidth: 0,
    selectors: 0,
    other: 0
  };
  if (!ae.test(e)) return {
    text: e,
    removedTotal: 0,
    removedByClass: n,
    keptConditional: 0
  };
  let r = xp(e), i = [], t = 0, f = r === e ? 0 : Ee(e);
  n.other += f;
  let s = {
    ring: Array(I).fill(0),
    next: 0,
    size: 0,
    lastWasHidden: !1,
    keptConditional: 0
  }, g = 0, m, S;
  for (let d = 0; d < r.length; ) {
    let u = r.codePointAt(d), b = d + (u > 65535 ? 2 : 1);
    if (!k(u)) {
      if (u === 10) g = b, m = void 0, S = void 0; else if (u === 127988) {
        let E = Array.from(r.slice(d, d + 2 * (re + 2))), x = z(E, 0);
        if (x !== -1) {
          R(s, u, !1), d = b;
          for (let D = 1; D <= x; D++) R(s, E[D].codePointAt(0), !0), d += E[D].length;
          continue;
        }
      }
      R(s, u, !1), d = b;
      continue;
    }
    if (v(u)) {
      let E = u === 13 && r.charCodeAt(b) === 10;
      if (d > t) i.push(r.slice(t, d));
      if (t = b, !E) i.push(`\n`), f++, n.other++, R(s, 10, !1), g = b, m = void 0, S = void 0;
      d = b;
      continue;
    }
    let p = b < r.length ? r.codePointAt(b) : void 0, c = T(s, 0), {lastWasHidden: C} = s, l = !1;
    switch (u) {
     case 8204:
     case 8205:
      {
        if (l = y(s, u === 8204 ? X : pe), !l && u === 8205) {
          let x = c;
          if (x !== void 0 && (x === 65039 || P(x))) {
            if (x = T(s, 1), x !== void 0 && (x === 65039 || P(x))) x = T(s, 2);
          }
          l = c !== void 0 && c !== 8205 && o(W, x) && F(p, W);
        }
        if (!l && c !== void 0 && !C) l = u === 8204 ? L(p, X) && !o(fe, c) && !o(A, c) : L(p, xe) && !o(N, c) && !o(M, c) && !o(A, c);
        break;
      }

     case 8203:
      {
        let E = te(s, de, !0), x = F(p, ne) && !o(A, p);
        l = E && (x || F(p, Z)) || x && H(s, Z);
        break;
      }

     case 65038:
     case 65039:
      l = c !== void 0 && !C && (c >= 169 && o(ue, c) || Ce(c) && p === 8419);
      break;

     case 65024:
     case 65025:
     case 65026:
      l = c !== void 0 && !C && (o(O.base, c) || u === 65024 && (c >= 8704 && c <= 11007 && o(ce, c) || o(me, c)));
      break;

     case 8206:
     case 8207:
     case 1564:
      if (u === 1564) {
        if (S === void 0) S = U(le, r, g);
        l = S;
      } else {
        if (m === void 0) m = U(ee, r, g);
        l = m;
      }
      l = l && !C && (p === void 0 || v(p) || !k(p) && !o(A, p)) && !Se(s, p);
      break;

     case 847:
      l = H(s, A) || !C && F(p, A);
      break;

     case 6068:
     case 6069:
      l = y(s, be);
      break;

     case 6155:
     case 6156:
     case 6157:
     case 6158:
     case 6159:
      l = y(s, V) || !C && L(p, V);
      break;

     case 69759:
      l = H(s, J) && F(p, J);
      break;

     default:
      if (u >= 78896 && u <= 78911) l = y(s, O) || !C && L(p, O); else if (u >= 113824 && u <= 113827) l = y(s, Y) || !C && L(p, Y);
    }
    if (l) R(s, u, !0); else {
      if (d > t) i.push(r.slice(t, d));
      t = b, f++, n[Ae(u)]++;
    }
    d = b;
  }
  let {keptConditional: h} = s;
  if (t === 0) return {
    text: r,
    removedTotal: f,
    removedByClass: n,
    keptConditional: h
  };
  return i.push(r.slice(t)), {
    text: i.join(""),
    removedTotal: f,
    removedByClass: n,
    keptConditional: h
  };
}

function o(e, n) {
  return n !== void 0 && e.test(String.fromCodePoint(n));
}

function K(e, n) {
  return o(N, n) && o(e, n);
}

function U(e, n, r) {
  for (let i = r; i < n.length; ) {
    let t = n.codePointAt(i);
    if (v(t)) return !1;
    if ((t >= 1424 && t <= 2303 || t >= 64285 && t <= 65023 || t >= 65136 && t <= 65279 || t >= 67584 && t <= 69631 || t >= 124928 && t <= 126975) && K(e, t)) return !0;
    i += t > 65535 ? 2 : 1;
  }
  return !1;
}

function Q(e) {
  return e === 1600 || o(ee, e);
}

function Se(e, n) {
  let r = o(N, n);
  if (!r && !o(M, n)) return !1;
  for (let i = 0; i < e.size; i++) {
    let t = T(e, i);
    if (k(t)) return !0;
    if (o(A, t)) continue;
    return r ? o(N, t) && Q(t) === Q(n) : o(M, t);
  }
  return e.size >= I;
}

function v(e) {
  return e === 10 || e === 11 || e === 12 || e === 13 || e === 133 || e === 8232 || e === 8233;
}

var I = 16;

function R(e, n, r) {
  if (e.ring[e.next] = n, e.next = (e.next + 1) % I, e.size < I) e.size++;
  if (e.lastWasHidden = r, r) e.keptConditional++;
}

function T(e, n) {
  if (n >= e.size) return;
  return e.ring[(e.next - 1 - n + 2 * I) % I];
}

function H(e, n) {
  return e.size > 0 && !e.lastWasHidden && o(n, T(e, 0));
}

function y(e, n) {
  return te(e, n, !1);
}

function te(e, n, r) {
  if (e.lastWasHidden) return !1;
  for (let i = 0; i < e.size; i++) {
    let t = T(e, i);
    if (o(A, t)) {
      if (!o(n.mark, t)) return !1;
      continue;
    }
    return r ? o(n.base, t) : K(n.base, t);
  }
  return !1;
}

function F(e, n) {
  return e !== void 0 && !k(e) && o(n, e);
}

function L(e, n) {
  return e !== void 0 && !k(e) && K(n.base, e);
}

function P(e) {
  return e >= 127995 && e <= 127999;
}

function Ce(e) {
  return e >= 48 && e <= 57 || e === 35 || e === 42;
}

function Ee(e) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e.charCodeAt(r);
    if (i >= 55296 && i <= 56319) {
      let t = e.charCodeAt(r + 1);
      if (t >= 56320 && t <= 57343) r++; else n++;
    } else if (i >= 56320 && i <= 57343) n++;
  }
  return n;
}

function Ae(e) {
  if (e >= 917504 && e <= 917631) return "tags";
  if (e === 1564 || e === 8206 || e === 8207 || e >= 8234 && e <= 8238 || e >= 8294 && e <= 8297) return "bidi";
  if (e >= 8203 && e <= 8205 || e === 8288 || e === 65279) return "zeroWidth";
  if (e >= 65024 && e <= 65039 || e >= 917760 && e <= 917999 || e >= 6155 && e <= 6157 || e === 6159) return "selectors";
  return "other";
}

function B$e(e, n = "review", r = "Enter") {
  let i = e === 1 ? "Removed 1 invisible character" : `Removed ${e} invisible characters`;
  switch (n) {
   case "review":
    return `${i} \xb7 review and press ${r} to send`;

   case "empty":
    return `${i} \xb7 nothing left to send`;

   case "sent":
    return `${i} from the launch prompt before sending it`;

   case "pasted":
    return `${i} from the pasted text`;
  }
}

var _e = 100;

function rIt(e) {
  return yE(ie(e));
}

function ie(e) {
  let n = e.normalize("NFC");
  return Array.from(n, i => vC(i.codePointAt(0) ?? 0) ? " " : i).join("").replace(sj, " ").replace(he, " ").replace(/[\u0300-\u036F\u0483-\u0489\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20F0\uA66F-\uA67D\uFE20-\uFE2F]/g, " ");
}

function y5e(e, n) {
  let r = Array.from(ie(e), t => {
    let f = t.codePointAt(0) ?? 0;
    return f <= 31 || f >= 127 && f <= 159 ? " " : t;
  }).join("").replace(/\s+/g, " ").trim();
  if (r === "") return null;
  let i = $s(r, n);
  return _l((i === r ? r : `${i.trimEnd()}\u2026`).replace(mft, gft));
}

var he = /[\u20DD-\u20E4\u23FA\u25C9\u25CB\u25CE\u25CF\u25EF\u26AA\u26AB\u26AC\u29BE\u29BF\u2B24\u2B55\u2B58\u{1F534}\u{1F535}\u{1F785}-\u{1F78B}\u{1F7E0}-\u{1F7E4}]/gu;

function nSr(e) {
  return yE(se(e.normalize("NFC"), !1));
}

function Vbs(e) {
  return se(e, !0);
}

function se(e, n) {
  let r = Array.from(e), i = [];
  for (let t = 0; t < r.length; t++) {
    let f = r[t], s = f.codePointAt(0) ?? 0, g = i.at(-1), m = g?.codePointAt(0), S = g === void 0 ? n : !/\s/u.test(g);
    if (s === 127988) {
      let h = z(r, t);
      if (h !== -1) {
        i.push(...r.slice(t, h + 1)), t = h;
        continue;
      }
    }
    if (oe(s)) {
      if (S && (m === void 0 || !Te(m))) i.push(f);
      continue;
    }
    if (w(s)) {
      if (S && (m === void 0 || !w(m))) i.push(f);
      continue;
    }
    i.push(vC(s) || zBe.test(f) ? " " : f);
  }
  return i.join("");
}

function oe(e) {
  return e >= 6155 && e <= 6157 || e === 6159 || e >= 65024 && e <= 65039 || e >= 917760 && e <= 917999;
}

function w(e) {
  return e === 8204 || e === 8205;
}

function Te(e) {
  return w(e) || oe(e);
}

function Kbs(e) {
  let n = Array.from(e.normalize("NFC"), r => vC(r.codePointAt(0) ?? 0) ? " " : r).join("");
  return yE(n.replace(sj, " "));
}

function im(e) {
  let n = rIt(e);
  if (n === null) return null;
  let r = $s(n, _e);
  return _l((r === n ? n : `${r}\u2026`).replace(mft, gft));
}

function ylt(e) {
  return e === void 0 || Object.hasOwn(e, "main");
}

var cH = 20971520, Ie = "application/vnd.ant.frame-refusal+json";

function eu() {
  return {
    Accept: `application/json, ${Ie}`,
    "X-Frame-CP": "go",
    "X-Frame-Surface": "code",
    "X-Frame-Platform": hu() ? "desktop" : "cli",
    "X-Frame-Client-Version": {
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
    "X-Frame-Session-Id": ifo() ?? q()
  };
}

var Re = /^(?:session_|cse_)[A-Za-z0-9_-]{1,184}$/;

function ifo() {
  let e = a.CLAUDE_CODE_REMOTE_SESSION_ID ?? S7t();
  return e && Re.test(e) ? e : void 0;
}

var ye = /^req_[A-Za-z0-9_-]{4,128}$/;

function lSe(e) {
  return e !== void 0 && ye.test(e) ? {
    request_id: e
  } : {};
}

var j$e = /unknown field|not a recognized|not allowlisted/i;

function f1(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    if ("error" in e && typeof e.error === "string") {
      let n = "reason" in e && typeof e.reason === "string" ? ` [${e.reason}]` : "";
      return e.error + n;
    }
    return _(e) ?? "";
  }
  return "";
}

function rSr(e, n) {
  return e.includes(`'${n}'`) || new RegExp(`"${n}"(?!\\??:)`).test(e);
}

function i$n(e, n) {
  let r = f1(e);
  return j$e.test(r) && rSr(r, n);
}

var WV = /^[A-Za-z0-9_-]{1,64}$/;

export { ylt, aSe, B$e, rIt, y5e, nSr, Vbs, Kbs, im, cH, eu, ifo, lSe, j$e, f1, rSr, i$n, WV };
