// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { d } from "./chunk-6ah1819r.js";

import { _, Y, KOe, PX, t } from "./chunk-kawq2919.js";

import { I, $s, xp } from "./chunk-5wbhf1bk.js";

import { KO, sj, vC } from "./chunk-f1zpf9me.js";

import { k, Rr } from "./chunk-xywp7esx.js";

import { randomInt as G } from "crypto";

function Gqo() {
  return k("tengu_harbor_permissions", !1);
}

function q() {
  return Rr("tengu_quiet_elephant", !0);
}

var B = "abcdefghijkmnopqrstuvwxyz", H = [ "fuck", "shit", "cunt", "cock", "dick", "twat", "piss", "crap", "bitch", "whore", "ass", "tit", "cum", "fag", "dyke", "nig", "kike", "rape", "nazi", "damn", "poo", "pee", "wank", "anus" ];

function N(n) {
  let e = 2166136261;
  for (let r = 0; r < n.length; r++) e ^= n.charCodeAt(r), e = Math.imul(e, 16777619);
  e = e >>> 0;
  let o = "";
  for (let r = 0; r < 5; r++) o += B[e % 25], e = Math.floor(e / 25);
  return o;
}

function Vqo(n) {
  if (!q()) return K(n);
  let e = "";
  for (let o = 0; o <= 10; o++) {
    e = "";
    for (let r = 0; r < 5; r++) e += B[G(B.length)];
    if (!H.some(r => e.includes(r))) return e;
  }
  return e;
}

function K(n) {
  let e = N(n);
  for (let o = 0; o < 10; o++) {
    if (!H.some(r => e.includes(r))) return e;
    e = N(`${n}:${o}`);
  }
  return e;
}

var U = 3500, w = 2e3, E = 1500, L = 15e3, z = 3e4;

function JWt(n) {
  return R(f(n).replace(/\s+/g, " ").trim());
}

function R(n) {
  let e = Array.from(n);
  if (e.length <= U) return n;
  let o = e.length - w - E;
  return e.slice(0, w).join("") + `\n\u22ef ${o} ${I(o, "code point")} elided \u22ef\n` + e.slice(e.length - E).join("");
}

function f(n) {
  return Array.from(xp(n), e => vC(e.codePointAt(0) ?? 0) ? " " : e).join("").replace(KO, "\xb7").replace(V, "\xb7").replace(W, "\xb7").replace(sj, " ");
}

var V = /[\u2018\u2019\u201A\u201B\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02BF\u02C0\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05F3\u07F4\u07F5\u1FBD\u1FBF\u1FEF\u1FFD\u1FFE\u2032\u2035\u275B\u275C\u275F\uA78B\uA78C\uFF07\uFF40]/g, W = /[\u02C2\u02C3\uFE64\uFE65\uFF1C\uFF1E]/g;

function A(n) {
  return v(_(n)).replace(/\s/g, " ");
}

function T(n, e, o) {
  let r = n, s = A(n);
  if (e.has(s)) {
    let i = s, a = o.get(i) ?? 2;
    r = `${n}#${a}`, s = A(r);
    while (e.has(s)) a++, r = `${n}#${a}`, s = A(r);
    o.set(i, a + 1);
  }
  return e.add(s), r;
}

function C(n) {
  if (Array.isArray(n)) return n.map(C);
  if (n !== null && typeof n === "object") {
    let e = Object.create(null), o = new Set, r = new Map;
    for (let [s, i] of Object.entries(n)) e[T(KOe(s), o, r)] = C(i);
    return e;
  }
  return n;
}

var Q = 32e3, Z = 2e6;

function M(n) {
  if (n === null || typeof n !== "object") return !1;
  let e = Z, o = [ {
    node: n,
    depth: 1
  } ];
  while (o.length > 0) {
    let r = o.pop(), {depth: s, node: i} = r;
    if (s >= Q) return !0;
    if (typeof i.toJSON === "function") {
      if (e -= 1, e < 0) return !0;
      let l;
      try {
        l = i.toJSON();
      } catch {
        return !0;
      }
      if (l === null || typeof l !== "object") continue;
      i = l;
    }
    if (Array.isArray(i)) {
      if (e -= i.length, e < 0) return !0;
    }
    for (let l of Object.keys(i)) {
      if (e -= 1, e < 0) return !0;
      let p = i[l];
      if (p !== null && typeof p === "object") o.push({
        node: p,
        depth: s + 1
      });
    }
  }
  return !1;
}

function Kqo(n) {
  try {
    if (n !== null && typeof n === "object" && !Array.isArray(n)) {
      let s = [], i = 0, a = [], l = new Set, p = new Map;
      for (let g of Object.keys(n)) {
        let h, m, y = !1;
        try {
          if (h = n[g], M(h)) y = !0; else m = _(h);
        } catch {
          y = !0;
        }
        if (m === void 0) {
          if (!y) continue;
          let F = T(KOe(g), l, p);
          t("truncateForPreview: field serialization threw (depth) \u2014 rendering a loud unserializable marker", {
            level: "error"
          });
          let b = f(_(F)).replace(/\s+/g, " "), P = $s(b, 50), O = P.length < b.length ? P + "\u2026" : P;
          if (i >= L) {
            a.push(O);
            continue;
          }
          let j = `${O}: (value unserializable)`;
          i += Array.from(j).length, s.push(j);
          continue;
        }
        let c = T(KOe(g), l, p);
        if (i >= L) {
          let F = f(_(c)).replace(/\s+/g, " "), b = $s(F, 50);
          a.push(b.length < F.length ? b + "\u2026" : b);
          continue;
        }
        let u, x = !1;
        try {
          u = _(C(PX({
            [g]: Y(m)
          }, KOe)[g]));
        } catch {
          x = !0;
        }
        if (u === void 0) if (x) t(`truncateForPreview: redaction round-trip threw for field ${_(c)} \u2014 rendering unredacted`, {
          level: "error"
        }); else t(`truncateForPreview: redaction round-trip yielded no text for field ${_(c)} \u2014 rendering unredacted`, {
          level: "error"
        }), d(Error("truncateForPreview: redaction round-trip yielded no text for a field \u2014 rendering unredacted"));
        let J = u === void 0 ? m : u, D = `${v(_(c))}: ${v(J)}`;
        i += Array.from(D).length, s.push(D);
      }
      let S = "";
      if (a.length > 0) {
        let h = Math.floor(z / 10);
        if (a.length <= h) {
          let m = Math.max(8, Math.floor(z / a.length) - 2), y = a.map(c => {
            let u = $s(c, m);
            return u.length < c.length ? u + "\u2026" : u;
          });
          S = `\n\u22ef ${a.length} ${I(a.length, "field")} elided: ${y.join(", ")} \u22ef\n`;
        } else S = `\n\u22ef ${a.length} ${I(a.length, "field")} elided (count exceeds the ${h}-name bound \u2014 refuse) \u22ef\n`;
      }
      return `{ ${s.join(", ")} }${S}`;
    }
    let e;
    try {
      if (M(n)) return t("truncateForPreview: non-object input exceeds the serialization depth probe \u2014 rendering a loud unserializable marker", {
        level: "error"
      }), "(value unserializable)";
      e = _(n);
    } catch {
      return t("truncateForPreview: non-object input serialization threw \u2014 rendering a loud unserializable marker", {
        level: "error"
      }), "(value unserializable)";
    }
    if (e === void 0) return "(unserializable)";
    let o, r = !1;
    try {
      o = _(C(PX(Y(e), KOe)));
    } catch {
      r = !0;
    }
    if (o === void 0) {
      if (r) t("truncateForPreview: non-object redaction round-trip threw \u2014 rendering unredacted", {
        level: "error"
      }); else t("truncateForPreview: non-object redaction round-trip failed \u2014 rendering unredacted", {
        level: "error"
      }), d(Error("truncateForPreview: non-object redaction round-trip failed \u2014 rendering unredacted"));
      o = e;
    }
    return R(f(o).replace(/\s{2,}/g, " "));
  } catch {
    return "(unserializable)";
  }
}

function v(n) {
  if (n.length <= 1e5) return R(f(n).replace(/\s{2,}/g, " "));
  let e = 0;
  for (let a of n) e++;
  let o = f($s(n.slice(0, w * 2 + 1), w)).replace(/\s{2,}/g, " "), r = Array.from(xp(n.slice(-(E * 2 + 1)))), s = f(r.slice(-E).join("")).replace(/\s{2,}/g, " "), i = e - w - E;
  return o + `\n\u22ef ${i} ${I(i, "code point")} elided \u22ef\n` + s;
}

function nSt(n, e) {
  return !!n?.experimental?.[e];
}

function qqo(n, e, o) {
  return n.filter(r => r.type === "connected" && e(r.name) && nSt(r.capabilities, "claude/channel") && nSt(r.capabilities, "claude/channel/permission") && o(r.name) && r.protocolEra !== "modern");
}

function Yqo(n) {
  let e = new Map, o = new Set;
  return {
    isServerRegistered: n,
    onResponse(r, s) {
      let i = r.toLowerCase();
      if (q()) {
        if (o.has(i)) return e.delete(i), t("Channel permission relay: a request ID was drawn twice in one session; channel replies with that ID are ignored \u2014 answer in the terminal", {
          level: "warn"
        }), () => {};
        o.add(i);
      }
      return e.set(i, s), () => {
        e.delete(i);
      };
    },
    resolve(r, s, i) {
      let a = r.toLowerCase(), l = e.get(a);
      if (!l) return !1;
      return e.delete(a), l({
        behavior: s,
        fromServer: i
      }), !0;
    }
  };
}

export { Gqo, Vqo, JWt, Kqo, nSt, qqo, Yqo };
