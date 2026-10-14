// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { pe } from "./chunk-hwdwjvh8.js";

import { j } from "./chunk-b0z4bv3v.js";

import { _, t } from "./chunk-kawq2919.js";

import { Yl, j1e, lqn } from "./chunk-1z2heevg.js";

import { rht, bDo, pdn, fL, xb, dg, em, lt, B, _Lo, n$o, r$o, vYn, QDr, Sht, p$o, di } from "./chunk-3pqddg8f.js";

import { gl } from "./chunk-46phtgr7.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { ba } from "./chunk-cjt10y7b.js";

import { Fp, gDt, QWn, ts, Ke, Uwe, $n, k } from "./chunk-xywp7esx.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Uks } from "./chunk-yebkpv3k.js";

import { Eo } from "./chunk-ncyzf9zz.js";

import { Tt, zue, rK } from "./chunk-9tdwgnpn.js";

import { jR, kb, G_, pU, je, Rt } from "./chunk-s2t7g8m9.js";

import { iI, Pin, vKn, Uve, Iin } from "./chunk-q6wab2jw.js";

import { Ji } from "./chunk-f0wpcwcb.js";

import { Pi, Esn, KDs } from "./chunk-8yperama.js";

import { w6e, k1 } from "./chunk-4jjt8sdp.js";

import { La, txt, nxt, hR } from "./chunk-qk8kpwc4.js";

import { ybe, noe } from "./chunk-gewnffft.js";

import { $7, Qd, zo, Mgo, Hgo, Due, Q5e } from "./chunk-htg8b98h.js";

import { xa, Lh, sH } from "./chunk-8a4rbyjg.js";

import { T$n, Hlt, w5e, Dlt } from "./chunk-6z43wfz0.js";

import { wz } from "./chunk-9r9vcg3z.js";

import { Ba } from "./chunk-mfje7p8w.js";

import { cr } from "./chunk-2kgjyw8x.js";

import { hVn } from "./chunk-rkw37sbq.js";

import { oo, po, zs } from "./chunk-vjmbaret.js";

import { vn } from "./chunk-3rbd48rp.js";

import { at } from "./chunk-0bq6eb61.js";

import { N } from "./chunk-hmqkrrtz.js";

import { isDeepStrictEqual as w } from "util";

var J = [ "betas", "tool_choice", "thinking", "context_management", "output_config", "speed", "temperature", "max_tokens" ];

function gps(e) {
  return {
    model: e.model,
    tools: e.tools.map((n, o) => ({
      key: Z(n, o),
      deferred: q9t(n),
      bound: q9t(n),
      cacheControl: void 0,
      body: n
    })),
    system: e.system.map(n => ({
      preamble: !1,
      cacheControl: void 0,
      body: n
    })),
    messages: [],
    envelope: {},
    seeded: !0
  };
}

function qio(e, n = {}) {
  let o = n.boundDeferredToolNames ?? (n.bindReferencedDeferredTools === !0 ? he(e.messages) : void 0), r = typeof e.system === "string" ? [ {
    type: "text",
    text: e.system
  } ] : e.system ?? [], l = {};
  for (let s of J) {
    let c = s === "betas" ? ye(e.betas) : e[s];
    if (c !== void 0) l[s] = c;
  }
  return {
    model: e.model,
    envelope: l,
    tools: (e.tools ?? []).map((s, c) => ({
      key: Z(s, c),
      deferred: s.defer_loading === !0,
      bound: s.defer_loading === !0 && typeof s.name === "string" && o?.has(s.name) === !0,
      cacheControl: H(s),
      body: U(s)
    })),
    system: r.map(s => ({
      preamble: k1(s),
      cacheControl: H(s),
      body: U(s)
    })),
    messages: e.messages.map((s, c, u) => ({
      role: s.role,
      turnScopedSystem: s.role === "system" && c === u.length - 1,
      blocks: typeof s.content === "string" ? [ {
        thinking: !1,
        cacheControl: void 0,
        body: {
          type: "text",
          text: s.content
        }
      } ] : s.content.map(T => ({
        thinking: T.type === "thinking" || T.type === "redacted_thinking",
        cacheControl: H(T),
        body: Te(U(T))
      }))
    }))
  };
}

function K9t(e) {
  return {
    model: e.model,
    tools: e.tools.filter(ge).map(n => n.body),
    system: e.system.filter(n => !n.preamble).map(n => n.body),
    messages: e.messages.filter(n => !n.turnScopedSystem).map(n => ({
      role: n.role,
      content: n.blocks.filter(o => !o.thinking).map(o => o.body)
    }))
  };
}

function hps(e) {
  return e.part === "tool" || e.part === "system" || e.part === "message";
}

var v = 16;

function Yio(e, n) {
  return e.seeded ? Y(e, n) : [ ...Y(e, n), ...fe(e, n), ...ue(e, n), ...me(e, n) ];
}

function Y(e, n) {
  let o = K9t(e), r = K9t(n), l = [], s = h => (l.push(h), l.length < v), c = h => new Map([ ...h.filter(R => !R.deferred), ...h.filter(R => R.bound) ].map(R => [ R.key, R ])), u = c(e.tools), T = c(n.tools), y = [], p = !1;
  for (let [h, R] of u) {
    let x = R.body, S = T.get(h);
    if (S === void 0) {
      if (R.deferred) {
        if (!e.seeded) y.push({
          part: "tool",
          id: h,
          kind: "removed",
          prev: x
        });
        continue;
      }
      if (p = !0, !s({
        part: "tool",
        id: h,
        kind: "removed",
        prev: x
      })) return l;
    } else if (R.deferred !== S.deferred) {
      p = !0;
      let E = R.deferred ? {
        part: "tool",
        id: h,
        kind: "added",
        next: S.body
      } : {
        part: "tool",
        id: h,
        kind: "removed",
        prev: x
      };
      if (!s(E)) return l;
    } else if (!w(x, S.body)) {
      p ||= !R.deferred;
      let E = S.body, C = [ ...Object.keys(x), ...Object.keys(E) ].find(O => !w(gR(x, O), gR(E, O))) ?? "?";
      if (!s({
        part: "tool",
        id: h,
        kind: "changed",
        field: C,
        prev: x,
        next: E
      })) return l;
    }
  }
  for (let [h, R] of T) if (!u.has(h) && !R.deferred) {
    if (p = !0, !s({
      part: "tool",
      id: h,
      kind: "added",
      next: R.body
    })) return l;
  }
  if (!p) {
    let h = E => [ ...E.values() ].flatMap(C => C.deferred ? [] : [ C.key ]), R = h(u), S = h(T).filter(E => u.has(E)).find((E, C) => R[C] !== E);
    if (S !== void 0) s({
      part: "tool",
      id: S,
      kind: "reordered"
    });
  }
  let b = Math.max(o.system.length, r.system.length);
  for (let h = 0; h < b; h++) {
    let R = o.system[h], x = r.system[h], S = R === void 0 ? "added" : x === void 0 ? "removed" : "changed";
    if (S !== "changed" || !w(R, x)) {
      if (!s({
        part: "system",
        index: h,
        kind: S,
        prev: R,
        next: x
      })) return l;
    }
  }
  for (let h = 0; h < o.messages.length; h++) {
    let R = o.messages[h], x = r.messages[h];
    if (x !== void 0 && w(R, x)) continue;
    let S = {
      part: "message",
      index: h,
      role: R.role,
      kind: x === void 0 ? "removed" : "changed",
      prev: R,
      next: x
    };
    if (!s(S)) return l;
  }
  for (let h of y) if (!s(h)) break;
  return l;
}

function fe(e, n) {
  let o = [], r = Math.min(e.messages.length, n.messages.length);
  for (let l = 0; l < r && o.length < v; l++) {
    let s = q(e.messages[l]), c = q(n.messages[l]);
    if (s.length === 0 && c.length === 0) continue;
    if (s.length === c.length && s.every((T, y) => T === c[y])) continue;
    let u = s.slice(0, c.length).every((T, y) => T === c[y]) || c.slice(0, s.length).every((T, y) => T === s[y]);
    o.push({
      part: "thinking",
      index: l,
      kind: !u ? "changed" : c.length < s.length ? "dropped" : "added",
      prevCount: s.length,
      nextCount: c.length
    });
  }
  return o;
}

function q(e) {
  return e.blocks.flatMap(n => {
    if (!n.thinking) return [];
    let o = gR(n.body, "signature"), r = gR(n.body, "data");
    return [ typeof o === "string" ? o : typeof r === "string" ? r : "?" ];
  });
}

function ue(e, n) {
  let o = G(e, e.messages.length), r = G(n, e.messages.length), l = [];
  for (let [s, {at: c, marker: u}] of o) {
    if (l.length >= v) return l;
    let T = r.get(s);
    if (T === void 0) l.push({
      part: "cache",
      at: c,
      kind: "dropped",
      prev: u,
      next: void 0
    }); else if (!w(u, T.marker)) l.push({
      part: "cache",
      at: c,
      kind: "changed",
      prev: u,
      next: T.marker
    });
  }
  for (let [s, {at: c, marker: u}] of r) {
    if (l.length >= v) return l;
    if (!o.has(s)) l.push({
      part: "cache",
      at: c,
      kind: "added",
      prev: void 0,
      next: u
    });
  }
  return l;
}

function G(e, n) {
  let o = new Map;
  for (let r of e.tools) if (r.cacheControl !== void 0) o.set(`tools:${r.key}`, {
    at: {
      segment: "tools",
      key: r.key
    },
    marker: r.cacheControl
  });
  return e.system.forEach((r, l) => {
    if (r.cacheControl !== void 0) o.set(`system:${l}`, {
      at: {
        segment: "system",
        index: l
      },
      marker: r.cacheControl
    });
  }), e.messages.slice(0, n).forEach((r, l) => {
    r.blocks.forEach((s, c) => {
      if (s.cacheControl !== void 0) o.set(`messages:${l}.${c}`, {
        at: {
          segment: "messages",
          index: l,
          block: c
        },
        marker: s.cacheControl
      });
    });
  }), o;
}

function me(e, n) {
  return [ [ "model", e.model, n.model ], [ "attribution_header", Q(e), Q(n) ], [ "deferred_tools", X(e), X(n) ], ...J.map(r => [ r, e.envelope[r], n.envelope[r] ]) ].filter(([, r, l]) => !w(r, l)).map(([r, l, s]) => ({
    part: "envelope",
    id: r,
    kind: "changed",
    prev: l,
    next: s
  }));
}

function ye(e) {
  return e && [ ...e ].sort();
}

function Q(e) {
  for (let n of e.system) {
    let o = gR(n.body, "text");
    if (typeof o === "string" && o.startsWith(w6e)) return o;
  }
  return "";
}

function X(e) {
  return e.tools.filter(n => n.deferred).map(n => n.key).sort().join(",");
}

function ge(e) {
  return !e.deferred || e.bound;
}

function q9t(e) {
  return gR(e, "defer_loading") === !0;
}

function he(e) {
  let n = new Set;
  for (let o of e) {
    if (typeof o.content === "string") continue;
    if (o.role === "system") {
      for (let l of o.content) {
        let s = gR(l, "tool"), c = gR(l, "type") === "tool_addition" && typeof s === "object" && s !== null ? gR(s, "name") : void 0;
        if (typeof c === "string") n.add(Yl(c));
      }
      continue;
    }
    if (o.role !== "user") continue;
    for (let l of o.content) {
      if (!w5e(l)) continue;
      for (let s of l.content) if (Hlt(s)) n.add(Yl(s.tool_name));
    }
  }
  return n;
}

function H(e) {
  return "cache_control" in e ? e.cache_control : void 0;
}

function U(e) {
  if (!("cache_control" in e)) return e;
  let {cache_control: n, ...o} = e;
  return o;
}

function Te(e) {
  if (!("safeguards" in e)) return e;
  let {safeguards: n, ...o} = e;
  return o;
}

function gR(e, n) {
  if (e === void 0) return;
  return Object.entries(e).find(([o]) => o === n)?.[1];
}

function Z(e, n) {
  let o = gR(e, "name");
  if (typeof o === "string") return o;
  let r = gR(e, "type");
  return typeof r === "string" ? r : `tools[${n}]`;
}

function Rgr() {
  return a.CLAUDE_CODE_WEBSEARCH_CITATIONS && ba() && !pU();
}

function Y9t(e) {
  let n = gR(e, "type");
  return typeof gR(e, "name") === "string" && gR(e, "defer_loading") === !0 && (n === void 0 || n === "custom") && ee(gR(e, "input_schema")) && !("cache_control" in e);
}

function yps(e) {
  let n = gR(e, "type"), o = gR(e, "description");
  return typeof gR(e, "name") === "string" && (o === void 0 || typeof o === "string") && gR(e, "defer_loading") !== !0 && (n === void 0 || n === "custom") && ee(gR(e, "input_schema")) && !("cache_control" in e);
}

var L = [ "strict", "eager_input_streaming", "citations" ];

function I(e) {
  return e.some(n => gR(n, "eager_input_streaming") === !0);
}

function M(e, {strict: n, eager: o}) {
  let r = {
    ...e
  };
  if (!n && "strict" in r) {
    let {strict: l, ...s} = r;
    r = s;
  }
  if (!o && "eager_input_streaming" in r) {
    let {eager_input_streaming: l, ...s} = r;
    r = s;
  }
  if (!Rgr() && "citations" in r) {
    let {citations: l, ...s} = r;
    r = s;
  }
  return r;
}

function ee(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && gR(e, "type") === "object";
}

function _ps(e) {
  return at(_(iI(e))).slice(0, 16);
}

function _e(e) {
  if (!Array.isArray(e)) return [];
  return e.filter(n => typeof n === "object" && n !== null && typeof n.name === "string" && typeof n.listing === "string" && (typeof n.definition === "object" && n.definition !== null || typeof n.sameAs === "string"));
}

function B4e(e, n = new Set) {
  let o = new Map;
  for (let r of e) {
    if (r.type !== "attachment" || r.attachment?.type !== "deferred_tools_delta" || typeof r.uuid !== "string" || n.has(r.uuid)) continue;
    let l = new Map;
    for (let s of _e(r.attachment.surfacedDefinitions)) {
      if ("definition" in s) {
        l.set(s.name, {
          definition: s.definition,
          listing: s.listing,
          definedIn: r.uuid
        });
        continue;
      }
      let c = o.get(s.sameAs)?.get(s.name);
      if (c !== void 0) l.set(s.name, c);
    }
    if (l.size > 0) o.set(r.uuid, l);
  }
  return o;
}

function bps(e, n = new Set) {
  let o = new Set;
  for (let r of B4e(e, n).values()) for (let l of r.keys()) o.add(l);
  return o;
}

function XRt(e, n) {
  return e !== void 0 && Object.hasOwn(e, n) ? e[n] : void 0;
}

function Sps(e, n = new Set) {
  return new Set(B4e(e, n).keys());
}

var ne = Symbol.for("claude-code.hostOnlyNativeTool");

function wps(e) {
  return Object.defineProperty(e, ne, {
    value: !0,
    enumerable: !0
  }), e;
}

function EV(e) {
  return ne in e;
}

import { isDeepStrictEqual as oe } from "util";

function re() {
  if (!Fp()) return !1;
  return !(a.CLAUDE_CODE_SIMPLE || a.CLAUDE_CODE_DISABLE_ATTACHMENTS);
}

function ZCe() {
  let e = Eo();
  return e.keptDeferredToolsEnabled ??= re(), e.keptDeferredToolsEnabled;
}

function Xio() {
  return Eo().keptDeferredToolsEnabled ?? re();
}

var Re = 5e3;

function P(e) {
  return T$n(e.toolUseId, e.toolName);
}

class te {
  #e=new Map;
  #n=new Set;
  #o=new Map;
  #r=!1;
  #t=0;
  get(e) {
    return this.#e.get(P(e));
  }
  set(e, n) {
    let o = P(e);
    if (!this.#e.delete(o) && this.#e.size >= Re) {
      let r = this.#e.keys().next().value;
      if (r !== void 0) this.#e.delete(r);
    }
    this.#e.set(o, n), this.#n.add(e.toolName);
  }
  hasTool(e) {
    return this.#n.has(e);
  }
  get size() {
    return this.#e.size;
  }
  telemetrySignatureChanged(e, n) {
    if (n === this.#o.get(e)) return !1;
    return this.#o.set(e, n), !0;
  }
  get generation() {
    return this.#t;
  }
  noteRetractionFailure() {
    let e = !this.#r;
    return this.#r = !0, e;
  }
  clear() {
    this.#e.clear(), this.#n.clear(), this.#o.clear(), this.#t++;
  }
}

var Q9t = new lt(() => new te);

function kV() {
  return Q9t.of(B());
}

function ie(e, n, o, r = !0, l) {
  let s = new Set(o.map(p => p.name)), c = new Map;
  for (let p of n) {
    let b = Yl(p.toolName);
    if (c.has(b)) continue;
    let h = e.get(p);
    if (h?.kind === "sent" && (r || !h.entry.isMcp)) c.set(b, h.entry);
  }
  let u = new Set, T = [], y = [];
  for (let p of n) {
    let b = e.get(p);
    if (b?.kind === "stripped") {
      u.add(P(p));
      continue;
    }
    if (b?.kind === "sent") continue;
    let h = Yl(p.toolName), R = c.get(h);
    if (R) T.push({
      reference: p,
      entry: R
    }); else if (!s.has(h) && !l?.keeps(h)) y.push(p);
  }
  return {
    kept: c,
    strippedReferenceKeys: u,
    resolvedAgainstKept: T,
    unrecordedDepartures: y
  };
}

function Jio(e, n, o, {keepMcp: r = !0, surfacedOnWire: l, declaredInline: s} = {}) {
  try {
    if (!ZCe()) return;
    let c = Dlt(e, {
      surfacedOnWire: l
    });
    if (c.length === 0) return;
    let u = kV(), T = u.generation, y = ts(o), p = W(y, o), {kept: b, strippedReferenceKeys: h, resolvedAgainstKept: R, unrecordedDepartures: x} = ie(u, c, n, r, s);
    if (p) {
      for (let {reference: S, entry: E} of R) u.set(S, {
        kind: "sent",
        entry: E
      });
      for (let S of x) u.set(S, {
        kind: "stripped"
      });
    }
    return {
      references: c,
      kept: b,
      strippedReferenceKeys: h,
      writes: p,
      category: y,
      querySource: o,
      generation: T
    };
  } catch (c) {
    d(c), m("mcp_kept_deferred_tools", "plan_failed");
    return;
  }
}

function vps(e, n, {keepMcp: o = !0, surfacedOnWire: r} = {}) {
  try {
    let l = kV();
    if (!ZCe()) return;
    let {kept: s} = ie(l, Dlt(e, {
      surfacedOnWire: r
    }), n, o), c = new Set(n.map(u => u.name));
    return [ ...s.keys() ].filter(u => !c.has(u));
  } catch (l) {
    Z9t(l);
    return;
  }
}

function Eps(e) {
  let n = kV(), o = new Set;
  for (let r of e?.references ?? []) if (n.get(r)?.kind === "stripped") o.add(P(r));
  return o;
}

function Z9t(e) {
  if (d(e), kV().noteRetractionFailure()) m("mcp_kept_deferred_tools", "retraction_failed");
}

function kps(e, n, o, {requestCarriesStructuredOutputs: r}) {
  try {
    let l = Math.max(n.length - 1, 0), s = kV(), c = s.generation !== e.generation, u = {
      strict: r,
      eager: I(n)
    }, T = [], y = [];
    for (let [h, R] of e.kept) {
      let x = n.findIndex(E => "name" in E && Tt(E, h)), S = n[x];
      if (S !== void 0) {
        if ("defer_loading" in S && S.defer_loading && !c) n[x] = M(R.schema, u);
        continue;
      }
      y.push([ h, R ]), T.push(M(R.schema, u));
    }
    if (n.splice(l, 0, ...T), !e.writes || c) return;
    let p = e.querySource ?? "";
    if (y.length === 0 && e.strippedReferenceKeys.size === 0) s.telemetrySignatureChanged(p, ""); else {
      t(`Dynamic tool loading: keeping ${y.length} departed deferred tool(s) declared; ${e.strippedReferenceKeys.size} reference(s) held stripped`);
      let h = `${y.map(([R]) => R).sort().join(",")}|${e.strippedReferenceKeys.size}`;
      if (s.telemetrySignatureChanged(p, h)) {
        let R = pe(e.category);
        g("mcp_kept_deferred_tools", {
          kept_count: y.length,
          kept_mcp_count: N(y, ([, x]) => x.isMcp),
          stripped_reference_count: e.strippedReferenceKeys.size,
          ...R !== void 0 && {
            query_source_category: R
          }
        });
      }
    }
    let b = new Map;
    for (let h of e.references) {
      if (e.strippedReferenceKeys.has(P(h))) continue;
      let R = Yl(h.toolName), x = o.get(R);
      if (e.kept.has(R) || !x || !("defer_loading" in x.schema) || x.schema.defer_loading !== !0) continue;
      let S = b.get(R);
      if (S === void 0) S = {
        schema: x.schema,
        isMcp: x.isMcp
      }, b.set(R, S);
      s.set(h, {
        kind: "sent",
        entry: S
      });
    }
  } catch (l) {
    d(l), m("mcp_kept_deferred_tools", "record_failed");
  }
}

function WHn(e, n, o) {
  try {
    let r = o?.strippedReferences ?? new Set;
    if (n.length === 0 && r.size === 0 || !Xio()) return 0;
    let l = kV(), s = new Map;
    for (let y of n) if (Y9t(y) && !s.has(y.name)) s.set(y.name, {
      schema: y,
      isMcp: y.name.startsWith("mcp__")
    });
    let c;
    if (o?.surfacedCarrier !== void 0) {
      c = new Set;
      for (let y of e) {
        if (y.type !== "attachment" || y.attachment.type !== "deferred_tools_delta" || o.surfacedCarrier.nameOnlyAnnouncements.has(y.uuid)) continue;
        let p = y.attachment.surfacedNames;
        for (let b of Array.isArray(p) ? p : []) if (typeof b === "string" && s.has(b)) c.add(b);
      }
      for (let y of c) o.surfacedCarrier.surfacedOnWire.add(y);
    }
    let u = 0, T = new Set;
    for (let y of Dlt(e, {
      surfacedOnWire: c
    })) {
      let p = l.get(y);
      if (r.has(P(y))) {
        if (p?.kind !== "stripped") l.set(y, {
          kind: "stripped"
        }), u++;
        continue;
      }
      if (p !== void 0) continue;
      let b = Yl(y.toolName), h = s.get(b);
      if (h === void 0) continue;
      l.set(y, {
        kind: "sent",
        entry: h
      }), T.add(b), u++;
    }
    if (u > 0) t(`Dynamic tool loading: seeded ${u} tool reference(s) to ${T.size} deferred tool(s) the previous process sent`);
    return u;
  } catch (r) {
    return d(r), m("mcp_kept_deferred_tools", "seed_failed"), 0;
  }
}

function Se(e, n) {
  if (oe(e, n)) return !0;
  let o = {
    ...e
  };
  for (let r of L) if (!(r in n)) delete o[r];
  return oe(o, n);
}

function Tps(e, n, o, r, l, s) {
  try {
    if (n.size === 0 || !ZCe()) return;
    let c = kV();
    if (c.generation !== s) return;
    if (!W(ts(l), l)) return;
    let u = new Map;
    for (let T of Dlt(e, {
      surfacedOnWire: n
    })) {
      if (c.get(T) !== void 0) continue;
      let y = Yl(T.toolName), p = r?.kept.get(y) ?? o.get(y);
      if (!p || !("defer_loading" in p.schema) || p.schema.defer_loading !== !0) continue;
      let b = u.get(y);
      if (b === void 0) b = {
        schema: p.schema,
        isMcp: p.isMcp
      }, u.set(y, b);
      c.set(T, {
        kind: "sent",
        entry: b
      });
    }
  } catch (c) {
    d(c), m("mcp_kept_deferred_tools", "record_failed");
  }
}

function Aps(e, n) {
  try {
    let o = se(n);
    for (let r = 0; r < e.length; r++) {
      let l = o.get(e[r].name);
      if (l !== void 0 && Y9t(l)) e[r] = l;
    }
  } catch (o) {
    d(o);
  }
}

function Cps(e, n) {
  try {
    let o = kV();
    if (!e.writes || o.generation !== e.generation) return;
    let r = se(n), l = new Map;
    for (let s of e.references) {
      if (e.strippedReferenceKeys.has(P(s))) continue;
      let c = Yl(s.toolName), u = r.get(c), T = o.get(s);
      if (u === void 0 || T?.kind !== "sent" || Se(T.entry.schema, u)) continue;
      let y = l.get(c);
      if (y === void 0) y = {
        schema: u,
        isMcp: T.entry.isMcp
      }, l.set(c, y);
      o.set(s, {
        kind: "sent",
        entry: y
      });
    }
  } catch (o) {
    d(o), m("mcp_kept_deferred_tools", "record_failed");
  }
}

function W(e, n) {
  return e === "main" || e === "subagent" && n !== Uks;
}

function Qio(e) {
  return W(ts(e), e);
}

function se(e) {
  let n = new Map;
  for (let o of e) if ("defer_loading" in o && o.defer_loading === !0 && "name" in o && typeof o.name === "string") if ("cache_control" in o) {
    let {cache_control: r, ...l} = o;
    n.set(o.name, l);
  } else n.set(o.name, o);
  return n;
}

function mw(e) {
  if (e.name.startsWith(wz)) return "skill_tool";
  let n = String($n(e.name));
  if (n !== e.name) return n;
  if (e.mcpInfo !== void 0) return "mcp_tool";
  if (e.name.startsWith("eval_registered__")) return "eval_registered";
  if (e.uiTableKey !== void 0 || e.name.includes("__")) return "dynamic_tool";
  return e.name;
}

var X9t = "authenticate", J9t = "complete_authentication";

var Zio = "bypassPermissions not supported in restricted mode";

function Rps(e) {
  return e.restricted && (e.permissionMode === "bypassPermissions" || e.allowDangerouslySkipPermissions) ? Zio : void 0;
}

function xps(e) {
  return e.some(n => n.startsWith("preset:")) ? new Set : new Set(e);
}

function eXt(e, n) {
  let o = [ ...e, cr ].filter(s => !n.has(s)), r = [ ...n.has(je) ? [] : [ j1e ], ...n.has(cr) ? [] : [ lqn ] ], l = [ ...[ ...Pin ].map(s => zs(s, hVn)), ...vKn.map(s => zs(Pi, `${s}${hVn}`)), zs(Uve, `${Iin}${hVn}`) ];
  return [ ...o, ...r, Esn, KDs, ...l ];
}

var be = [ "default" ];

function xgr(e) {
  let n = e.toLowerCase();
  if (!be.includes(n)) return null;
  return n;
}

function zHn(e) {
  return new Set([ ...e.filter(n => n.enablesCodeExecution).map(n => n.name), Rt ]);
}

function Pgr(e) {
  return e.filter(n => n.isEnabled()).map(n => n.name);
}

function a8(e, n) {
  let o = [ ...Qd(n), ...xe(e, n) ], r = Hgo(n, o);
  return e.filter(l => {
    if (ae(n, l, o, r) || l.mcpInfo?.effectiveMaxPermission === "blocked") return !1;
    if (!JRt(n, l)) return !0;
    if (Ji().claim(`tool_outside_launch_list:${l.name}`)) t(`${mw(l)} is not on this session's --tools list and no deny rule names it; withheld. Name it in --tools to offer it`, {
      level: "warn"
    }), i("tengu_tool_withheld_outside_launch_list", {
      toolName: $n(mw(l))
    });
    return !1;
  });
}

function JRt({toolsKeptByLaunchList: e}, n) {
  return !(e === void 0 || Lh(n) || n.mcpInfo !== void 0 || EV(n) || $7(n) || e.includes(n.name) || n.familyParentToolName !== void 0 && e.includes(n.familyParentToolName));
}

function j4e(e, n, o = Qd(e), r) {
  return ae(e, n, o, r);
}

function ae(e, n, o, r) {
  let l = s => r !== void 0 ? Q5e(e, r, s) : zo(e, s, o) !== null;
  if (l(n)) return !0;
  if (n.underlyingV1ToolName && l({
    name: n.underlyingV1ToolName
  })) return !0;
  if (n.mcpInfo === void 0) {
    let s = ybe(n.name);
    if (s !== void 0 && l(s) && s.isEnabled()) return !0;
  }
  if (EV(n) && ke(e, o)) return !0;
  {
    let {APPIFACT_REPL_TOOL_NAME: s} = import.meta.require("./chunk-b1bs6y86.js");
    if (n.mcpInfo === void 0 && n.name === s && GHn(e, o.filter(c => c.source !== "toolsNarrowing")) !== null) return !0;
  }
  return !1;
}

function QRt(e, n) {
  if (!_Lo().has(n.name)) return !1;
  if (gl("hipaa")) return !1;
  let o = Qd(e).filter(r => r.source !== "toolsNarrowing");
  return !j4e(e, n, o);
}

function ke(e, n) {
  return n.some(o => o.ruleValue.toolName === je);
}

function GHn(e, n) {
  let o = e.toolAliases?.[je], r = [ je, ...o !== void 0 ? [ o ] : [] ];
  for (let l of r) {
    let s = zo(e, {
      name: l
    }, n);
    if (s !== null) return s;
  }
  return n.find(l => r.includes(l.ruleValue.toolName) && l.ruleValue.ruleContent !== void 0 && Mgo(l.ruleValue.ruleContent)) ?? null;
}

function xe(e, {restricted: n, toolsKeptByLaunchList: o}) {
  if (!(n === !0 && o === void 0)) return [];
  let r = new Set([ ...e.filter(l => l.enablesCodeExecution).map(l => l.name), Rt ]);
  return eXt(r, new Set).map(l => ({
    source: "toolsNarrowing",
    ruleBehavior: "deny",
    ruleValue: {
      toolName: l
    }
  }));
}

function ZRt(e) {
  switch (e.kind) {
   case "policy_blocked":
   case "reserved_address":
   case "org_blocked":
   case "denied":
   case "disabled":
   case "switched_off":
   case "not_configured":
    return !0;

   case "reconnecting":
   case "needs_auth":
   case "disconnected":
   case "auth_completed":
   case "not_offered":
   case "withdrawn":
    return !1;
  }
}

function gbe(e, n, o, r, l = Due(o)) {
  let s = r?.mcpInfo;
  if (s === void 0 && oo(e) === null) {
    let p = {
      ...r,
      name: e,
      underlyingV1ToolName: noe(e),
      familyParentToolName: r?.familyParentToolName
    };
    return j4e(o, p, l.rules, l.index) && !QRt(o, p) ? {
      kind: "denied",
      serverName: void 0
    } : {
      kind: "withdrawn"
    };
  }
  let c = s === void 0 ? Q5e(o, l.index, {
    name: e
  }) : j4e(o, {
    name: e,
    mcpInfo: s
  }, l.rules, l.index), T = de(e, n, s).map(({row: p, upstream: b}) => Ee(p, b, c)), y = T.find(ZRt) ?? T.find(p => p.kind === "not_offered" || p.kind === "auth_completed") ?? T[0];
  if (y) return y;
  return c ? {
    kind: "denied",
    serverName: void 0
  } : {
    kind: "not_configured"
  };
}

function Pps(e, n) {
  return de(e, n, void 0).filter(({row: o}) => o.type === "pending").map(({row: o}) => o.name);
}

function de(e, n, o) {
  if (o !== void 0) {
    let s = vn(o.toolName);
    return n.filter(c => c.name === o.serverName).map(c => ({
      row: c,
      upstream: s
    }));
  }
  let r = n.map(s => ({
    row: s,
    prefix: po(s.name)
  })).filter(({prefix: s}) => e.startsWith(s)), l = Math.max(0, ...r.map(({prefix: s}) => s.length));
  return r.filter(({prefix: s}) => s.length === l).map(({row: s, prefix: c}) => ({
    row: s,
    upstream: e.slice(c.length)
  }));
}

function Ee(e, n, o) {
  let r = La(e.name);
  if (o) return {
    kind: "denied",
    serverName: r
  };
  if (Ce(e, n)) return {
    kind: "org_blocked",
    serverName: r
  };
  switch (e.type) {
   case "pending":
    return {
      kind: "reconnecting",
      serverName: r
    };

   case "needs-auth":
    return {
      kind: "needs_auth",
      serverName: r
    };

   case "failed":
    if (txt(e.error)) return {
      kind: "policy_blocked",
      serverName: r
    };
    if (nxt(e.error)) return {
      kind: "reserved_address",
      serverName: r
    };
    return hR(e) ? {
      kind: "not_configured"
    } : {
      kind: "disconnected",
      serverName: r
    };

   case "disabled":
    return {
      kind: e.config.type === "sdk" ? "switched_off" : "disabled",
      serverName: r
    };

   case "connected":
   case "cached":
    return n === X9t || n === J9t ? {
      kind: "auth_completed",
      serverName: r
    } : {
      kind: "not_offered",
      serverName: r
    };
  }
}

function Ce(e, n) {
  if (!("toolPermissions" in e.config)) return !1;
  let o = e.config.toolPermissions;
  if (!o) return !1;
  return Object.entries(o).some(([r, l]) => l === "blocked" && vn(r) === n);
}

function LNe() {
  return Fp();
}

class hbe {
  names;
  recordedOnly;
  recordOrder;
  #e;
  constructor(e, n = {
    only: new Map,
    order: []
  }) {
    this.names = n.names ?? [ ...e.map(o => o.name), ...n.only.keys() ], this.recordedOnly = n.only, 
    this.recordOrder = n.order, this.#e = new Map(e.map(o => [ o.name, o ]));
  }
  has(e) {
    return this.#e.has(e) || this.recordedOnly.has(e);
  }
  keeps(e) {
    return this.has(e) && e !== xa;
  }
  toolFor(e) {
    return this.#e.get(e);
  }
  without(e) {
    return new hbe([ ...this.#e.values() ].filter(n => !e.has(n.name)), {
      only: new Map([ ...this.recordedOnly ].filter(([n]) => !e.has(n))),
      order: this.recordOrder.filter(n => !e.has(n)),
      names: this.names.filter(n => !e.has(n))
    });
  }
  sourceFor(e) {
    let n = this.#e.get(e), o = this.recordedOnly.get(e)?.server;
    if (n !== void 0 || o === void 0) return n;
    return le(e, o);
  }
}

function eao(e) {
  return e ?? di();
}

function ext(e) {
  let n = e.declaredTools;
  return n instanceof hbe ? n : void 0;
}

function tXt(e) {
  let n = e.noChannelTools;
  return n instanceof hbe ? n : void 0;
}

function tao(e, n, o) {
  if (n) {
    e.noChannelTools = void 0;
    return;
  }
  if (e.noChannelTools === void 0 && !LNe()) return;
  let r = o();
  return e.noChannelTools = r, r;
}

function nao(e, n, o) {
  let r = new Set([ ...n, ...e ].map(p => p.name)), l = new Map([ ...o ?? [] ].filter(([p]) => !r.has(p)));
  if (l.size === 0) return new hbe(e);
  let s = p => p.isMcp === !0 || oo(p.name) !== null, c = e.findIndex(s), u = (p, b) => !s(p) && (p.name === xa && b === e.length - 1 || c !== -1 && b > c), T = [ ...e.filter(s).map(p => p.name), ...l.keys() ].sort((p, b) => zue({
    name: p
  }, {
    name: b
  })), y = [ ...e.filter((p, b) => !s(p) && !u(p, b)).map(p => p.name), ...T, ...e.filter(u).map(p => p.name) ];
  return new hbe(e, {
    only: l,
    order: y,
    names: y
  });
}

var Oe = new Set([ "name", "description", "input_schema", "type", ...L ]);

async function Ips({recordedToolDescriptions: e, recordedToolServers: n, recordedToolEntries: o, mcpClients: r = [], getToolPermissionContext: l}, s, c) {
  if (e === void 0 || e.has(Ba) || !LNe()) return;
  let u = new Set(s.map(h => h.name)), T = [];
  for (let h of e.keys()) {
    let R = o?.get(h), x = n?.get(h);
    if (!u.has(h) && c?.has(h) !== !0 && R !== void 0 && x !== void 0 && h.startsWith(po(x)) && R.name === h && /^[a-zA-Z0-9_-]+$/.test(h) && Object.keys(R).every(S => Oe.has(S))) T.push({
      name: h,
      entry: R,
      server: x
    });
  }
  if (T.length === 0) return;
  let y = await l(), p = new Map, b;
  for (let {name: h, entry: R, server: x} of T) try {
    if (b ??= Due(y), gbe(h, r, y, le(h, x), b).kind === "reconnecting") p.set(h, {
      entry: R,
      server: x
    });
  } catch (S) {
    d(j(S));
  }
  return p.size === 0 ? void 0 : p;
}

async function Ops(e, n, {mcpClients: o, getPermissionContext: r, byValue: l}) {
  let s = VHn(e, n, !0);
  if (s.length === 0) return {
    kept: e,
    unread: 0
  };
  let c = gl("hipaa"), u = R => c && !V(R, e.sourceFor(R)?.mcpInfo?.serverName), T = R => l?.has(R) === !0 || u(R), y;
  try {
    y = await r();
  } catch (R) {
    d(j(R));
    let x = new Set(s.filter(T));
    return {
      kept: x.size === 0 ? e : e.without(x),
      unread: 0
    };
  }
  let p = 0, b, h = new Set(s.filter(R => {
    if (T(R)) return !0;
    try {
      return b ??= Due(y), ZRt(gbe(R, o, y, e.sourceFor(R), b));
    } catch (x) {
      return d(j(x)), p++, !0;
    }
  }));
  return {
    kept: h.size === 0 ? e : e.without(h),
    unread: p
  };
}

function xit(e) {
  if (e.agentId && !e.stickyBetas) return;
  return eao(e.stickyBetas);
}

function eRe(e) {
  let n = xit(e);
  return n === void 0 ? void 0 : ext(n);
}

function nXt(e) {
  let n = xit(e);
  return n === void 0 ? void 0 : tXt(n);
}

function Mps(e, n) {
  if (rht(e), e.declaredTools !== void 0 || !LNe()) return !1;
  return pdn(e, new hbe(n)), !0;
}

function De(e, n, {servers: o, entries: r} = Pe, l) {
  let s = new Map(n.map(S => [ S.name, S ])), c, u = () => (c ??= rK() ?? null, c ?? void 0), T = S => {
    let E = u()?.find(C => Tt(C, S))?.underlyingV1ToolName;
    return E === void 0 ? void 0 : s.get(E);
  }, y = new Map, p = new Map, b = 0, h = 0, R = 0, x = [ ...e ];
  for (let S of x) {
    let E = s.get(S) ?? T(S);
    if (E === void 0) {
      let O = r?.get(S), D = o?.get(S);
      if (O === void 0 || Le(S, D, u())) continue;
      if (we(S, D, u(), n)) p.set(S, {
        entry: O,
        server: D
      }); else {
        let z = Me(S, u(), l);
        if (z === "launch_omitted") p.set(S, {
          entry: O,
          server: D
        }), R++; else if (z === "gate_off") {
          if (p.set(S, {
            entry: O,
            server: D
          }), b++, Ae(S, u())) h++;
        }
      }
      continue;
    }
    y.set(E.name, E);
    let C = E.underlyingV1ToolName === void 0 ? void 0 : s.get(E.underlyingV1ToolName);
    if (C !== void 0) y.set(C.name, C);
  }
  for (let S of n) if (S.underlyingV1ToolName !== void 0 && y.has(S.underlyingV1ToolName)) y.set(S.name, S);
  for (let S of y.keys()) p.delete(S);
  return y.size === 0 && p.size === 0 ? void 0 : {
    held: new hbe(n.filter(S => y.has(S.name)), {
      only: p,
      order: x
    }),
    recorded: x.length,
    gateOff: b,
    needsUser: h,
    launchOmitted: R
  };
}

function Igr(e, n, o, {latch: r, permissionContext: l}) {
  let s = ext(e);
  if (s !== void 0 || e.declaredToolsDecided) return s;
  if (r) rht(e);
  if (e.declaredTools !== void 0 || !LNe()) return;
  let c = n(), u = c === void 0 ? void 0 : De(c.names, o, c, l);
  if (u === void 0 || !r) return u?.held;
  return pdn(e, u.held), i("tengu_declared_tool_set_from_record", {
    recorded: u.recorded,
    held: u.held.names.length - u.held.recordedOnly.size,
    heldByName: u.held.recordedOnly.size,
    heldGateOff: u.gateOff,
    heldNeedsUser: u.needsUser,
    heldLaunchOmitted: u.launchOmitted
  }), u.held;
}

function rao(e, n) {
  if (n === void 0) return {
    tools: e,
    redeclared: []
  };
  let o = new Set(e.map(c => c.name)), r = c => o.has(c) || !n.keeps(c) ? void 0 : n.toolFor(c);
  if (n.names.every(c => r(c) === void 0)) return {
    tools: e,
    redeclared: []
  };
  let l = [ ...e ], s = [];
  return n.names.forEach((c, u) => {
    let T = r(c);
    if (!T) return;
    let y = -1;
    for (let p = u - 1; p >= 0 && y === -1; p--) {
      let b = n.names[p];
      y = l.findIndex(h => h.name === b);
    }
    if (y !== -1) l.splice(y + 1, 0, T); else {
      let p = l.findIndex(b => n.has(b.name));
      l.splice(p === -1 ? 0 : p, 0, T);
    }
    o.add(c), s.push(c);
  }), s.length === 0 ? {
    tools: e,
    redeclared: s
  } : {
    tools: l,
    redeclared: s
  };
}

function Hps(e, n) {
  let o = ext(e);
  if (o === void 0 || n.length === 0) return;
  e.declaredTools = o.without(new Set(n)), i("tengu_declared_tools_dropped_at_compaction", {
    dropped: n.length,
    noDeferredChannel: !1
  });
}

function Dps(e, n) {
  let o = e === void 0 ? void 0 : tXt(e);
  return VHn(o, n, !0);
}

function Lps(e, n) {
  let o = tXt(e);
  if (o === void 0 || n.length === 0) return;
  e.noChannelTools = o.without(new Set(n)), i("tengu_declared_tools_dropped_at_compaction", {
    dropped: n.length,
    noDeferredChannel: !0
  });
}

function VHn(e, n, o) {
  if (e === void 0) return [];
  let r = new Set(n.map(l => l.name));
  return e.names.filter(l => {
    if (r.has(l) || !e.keeps(l)) return !1;
    let s = e.sourceFor(l)?.mcpInfo;
    return o || !V(l, s?.serverName);
  });
}

var Pe = {
  servers: void 0,
  entries: void 0
};

function we(e, n, o, r) {
  if (e === xa) return !1;
  if (n !== void 0) return !0;
  if (oo(e) !== null) return !1;
  if (e === sH && !r.some(l => Tt(l, Ba))) return !0;
  return o !== void 0 && !o.some(l => Tt(l, e));
}

function Me(e, n, o) {
  if (o === void 0 || n === void 0) return;
  if (e === xa || e === sH || oo(e) !== null) return;
  let r = n.find(l => l.name === e);
  if (r === void 0 || r.isMcp === !0) return;
  if (!ve() || gl("hipaa")) return;
  if (j4e(o, r)) return QRt(o, r) ? "launch_omitted" : void 0;
  if (JRt(o, r)) return o.builtInToolsDisabled === !0 || o.restricted === !0 && eXt(zHn([ r ]), new Set).includes(r.name) ? void 0 : "launch_omitted";
  if (r.isEnabled()) return;
  return "gate_off";
}

function Ae(e, n) {
  return n?.find(o => o.name === e)?.requiresUserInteraction?.() === !0;
}

var Be = "tengu_gleaming_cupcake";

function ve() {
  return k(Be, !0);
}

var Ne = "tengu_joyful_anchor";

function Le(e, n, o) {
  if (V(e, n)) return !1;
  let r = k(Ne, null);
  if (!Array.isArray(r) || r.length === 0) return !1;
  let l = o?.find(s => Tt(s, e));
  return r.some(s => typeof s === "string" && (s === e || l !== void 0 && Tt(l, s)));
}

function le(e, n) {
  let o = po(n);
  return {
    mcpInfo: {
      serverName: n,
      toolName: e.startsWith(o) ? e.slice(o.length) : e
    }
  };
}

function V(e, n) {
  return n !== void 0 || oo(e) !== null;
}

function Nps(e, n, {pool: o, keptDeferred: r, keepMcp: l, requestCarriesStructuredOutputs: s, recordedEntries: c}) {
  let u = new Set(oao(n, {
    pool: o,
    keptDeferred: r,
    keepMcp: l
  }));
  if (u.size === 0) return [];
  let T = new Set(e.map(F)), y = n.recordOrder, p = {
    strict: s,
    eager: I(e)
  }, b = [];
  return y.forEach((h, R) => {
    let x = n.recordedOnly.get(h);
    if (x === void 0 || T.has(h) || !u.has(h)) return;
    let S = c?.get(h) ?? x.entry, E = -1;
    for (let C = R - 1; C >= 0 && E === -1; C--) {
      let O = y[C];
      if (T.has(O)) E = e.findIndex(D => F(D) === O) + 1;
    }
    if (E === -1) {
      let C = new Set(y), O = e.findIndex(D => C.has(F(D) ?? ""));
      E = O === -1 ? 0 : O;
    }
    e.splice(E, 0, M(S, p)), T.add(h), b.push(h);
  }), b;
}

function oao(e, {pool: n, keptDeferred: o, keepMcp: r}) {
  let l = new Set([ ...n.map(s => s.name), ...o ]);
  return e.recordOrder.filter(s => {
    let c = e.recordedOnly.get(s);
    return c !== void 0 && !l.has(s) && (r || !V(s, c.server));
  });
}

function F(e) {
  return "name" in e && typeof e.name === "string" ? e.name : void 0;
}

function $ps() {
  return ZCe();
}

function Fps(e) {
  let n = new Set;
  for (let o of e) {
    let r = F(o);
    if (r !== void 0) n.add(r);
  }
  return n;
}

function Ups(e) {
  if (e.deferredLate === 0 && e.redeclared === 0 && e.fromRecord === 0 && e.unclassifiedDepartures === 0) return;
  i("tengu_declared_tool_set_held", {
    deferredLate: e.deferredLate,
    redeclared: e.redeclared,
    fromRecord: e.fromRecord,
    ...e.queryDepth !== void 0 && {
      queryDepth: e.queryDepth
    },
    toolSearchAbsent: e.toolSearchAbsent,
    noDeferredChannel: e.noDeferredChannel,
    unclassifiedDepartures: e.unclassifiedDepartures
  });
}

function A(e, n) {
  return W4e(e) && Uwe(n);
}

function W4e(e) {
  return xb(e, kb) && !K(e);
}

function K(e) {
  return em(e, jR) || n$o() || !ZCe();
}

function tRe(e, n) {
  return (xb(e, kb) || QWn() && !em(e, kb)) && !K(e) && Uwe(n);
}

function Bps(e, n) {
  return KHn(e) && A(e, n);
}

function KHn(e) {
  return xb(e, G_) && !vYn() && W4e(e);
}

function jps(e, n) {
  if (vYn() || em(e, G_)) return !1;
  if (xb(e, G_)) return tRe(e, n);
  return !xb(e, kb) && gDt() && tRe(e, n);
}

function Ogr(e, n, {toolSearchToolFilteredOut: o, toolPoolRefreshes: r, aheadOfRequest: l}) {
  return o && (l ? tRe(e, n) : A(e, n)) && (ext(e) !== void 0 || r && LNe());
}

function Wps(e, n, o) {
  let r = !xb(e, kb);
  if (n.includes(kb) && !K(e)) {
    if (fL(e, kb), r && n.includes(G_) && !vYn() && !em(e, G_)) fL(e, G_);
  }
  let l = A(e, o), s = l && KHn(e), c = n;
  if (l && !c.includes(kb)) c = [ ...c, kb ];
  if (!l && c.includes(kb)) c = c.filter(u => u !== kb);
  if (s && !c.includes(G_)) c = [ ...c, G_ ];
  if (!s && c.includes(G_)) c = c.filter(u => u !== G_);
  return c;
}

function zps(e, n, o, r) {
  if (A(e, o) && Uwe(r)) {
    let l = n.includes(kb) ? n : [ ...n, kb ], s = KHn(e);
    if (s && !l.includes(G_)) return [ ...l, G_ ];
    return s ? l : l.filter(c => c !== G_);
  }
  return n.filter(l => l !== kb && l !== G_);
}

function Gps(e, n, {mintModel: o, retryModel: r, advisorEntryMoved: l, deferredEntriesMoved: s, hasDeferredChannel: c}) {
  try {
    if (!A(e, o) || Uwe(r)) return;
    let u = {
      advisor_entry: l,
      deferred_entries: s,
      announcement_blocks: c && n.some(T => Ie(e, T))
    };
    return Object.values(u).some(Boolean) ? u : void 0;
  } catch (u) {
    d(j(u));
    return;
  }
}

function Ie(e, n) {
  if (n.type !== "attachment" || n.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(n.uuid)) return !1;
  let o = n.attachment.surfacedNames;
  return Array.isArray(o) && o.some(r => typeof r === "string" && (e.surfacedOnWire.has(r) || e.definedByValue.has(r)));
}

function Vps(e, n, o, r, l = new Set) {
  if (!r) return;
  let s = !W4e(e);
  for (let c of n) {
    if (c.type !== "attachment" || c.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(c.uuid)) continue;
    let u = c.attachment.surfacedNames;
    if (Array.isArray(u) && u.length > 0 && (s || u.some(T => typeof T !== "string" || !o.has(T) && !l.has(T)))) e.nameOnlyAnnouncements.add(c.uuid);
  }
}

function sao(e, n, o, {useToolSearch: r, toolSearchAbsent: l, blocksEligible: s, byValueNames: c = new Set}) {
  if (!r && !l) return;
  if (!s) {
    if (!W4e(e)) e.surfacedOnWire.clear(), e.definedByValue.clear();
    return;
  }
  e.surfacedOnWire.clear(), e.definedByValue.clear();
  let u = new Set;
  for (let T of o) if (T.type === "api_system") {
    for (let y of T.toolRemovals ?? []) e.definedByValue.delete(y);
    for (let y of T.toolAdditions ?? []) if (XRt(T.toolDefinitions, y) !== void 0) u.add(y), 
    e.definedByValue.add(y); else e.surfacedOnWire.add(y);
  }
  if (l) return;
  for (let T of n) {
    if (T.type !== "attachment" || T.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(T.uuid)) continue;
    let y = T.attachment.surfacedNames;
    if (Array.isArray(y) && y.some(p => typeof p === "string" && !e.surfacedOnWire.has(p) && !u.has(p) && !c.has(p))) e.nameOnlyAnnouncements.add(T.uuid);
  }
}

function Kps(e, n, o, r) {
  if (iao(e), n === "header_rejected" || n === "block_type_unknown") {
    if (r$o(), n === "header_rejected") {
      if (Sht(kb), r) QDr(), Sht(G_);
    }
  } else if (n === "model_unsupported") p$o(Ke(o));
  t(`[late-tool-additions] tool_addition rejected (${n}) \u2014 falling back to the ToolSearch announcement (or to inline tools where there is no ToolSearch), sticky-rejecting the beta until /clear or /compact`, {
    level: "warn"
  }), f("mcp_late_tool_additions", `rejected_${n}`);
}

function iao(e) {
  if (xb(e, kb)) dg(e, kb);
  ce(e), e.surfacedOnWire.clear();
}

function ce(e) {
  if (xb(e, G_)) bDo(e, G_);
  e.definedByValue.clear();
}

function qps(e, n) {
  if (ce(e), n === "header_rejected" || n === "unsupported_on_platform") {
    if (QDr(), n === "header_rejected") Sht(G_);
  }
  t(`[inline-tools] tool_definition rejected (${n}) \u2014 falling back to declaring late tools in tools[] and showing them by reference, off for the rest of this conversation (carried through a compaction; /clear starts afresh)`, {
    level: "warn"
  }), f("mcp_inline_tools", `rejected_${n}`);
}

function Yps(e, n, o, r = [], l = {}) {
  let s = [ ...e ? [ {
    type: "text",
    text: e
  } ] : [], ...r.map(c => ({
    type: "tool_removal",
    tool: {
      type: "tool_reference",
      name: c
    }
  })), ...n.map(c => {
    let u = XRt(l, c);
    return u === void 0 ? {
      type: "tool_addition",
      tool: {
        type: "tool_reference",
        name: c
      }
    } : {
      type: "tool_addition",
      tool: {
        type: "tool_definition",
        definition: u
      }
    };
  }) ];
  if (o !== void 0 && s.length > 0) s.push({
    ...s.pop(),
    cache_control: o
  });
  return s;
}

export { gps, qio, K9t, hps, Yio, q9t, gR, Rgr, Y9t, yps, _ps, B4e, bps, XRt, Sps, X9t, J9t, wps, EV, ZCe, Xio, Q9t, kV, Jio, vps, Eps, Z9t, kps, WHn, Tps, Aps, Cps, Qio, mw, Zio, Rps, xps, eXt, xgr, zHn, Pgr, a8, JRt, j4e, QRt, GHn, ZRt, gbe, Pps, LNe, hbe, eao, ext, tXt, tao, nao, Ips, Ops, xit, eRe, nXt, Mps, Igr, rao, Hps, Dps, Lps, VHn, Nps, oao, $ps, Fps, Ups, W4e, tRe, Bps, KHn, jps, Ogr, Wps, zps, Gps, Vps, sao, Kps, iao, qps, Yps };
