// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt, B, ps } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { c } from "./chunk-hwdwjvh8.js";

import { x, j, l, Xp } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { wh, Rp, _, t } from "./chunk-kawq2919.js";

import { yf, pv } from "./chunk-t156fjxt.js";

import { qDs } from "./chunk-8yperama.js";

import { wl, d } from "./chunk-6ah1819r.js";

import { g, m, f, so } from "./chunk-3ykz5st8.js";

import { JMo, ao, Sh, Aln, mu, sd, or } from "./chunk-w0q7jqcp.js";

import { At } from "./chunk-vps0k559.js";

import { un } from "./chunk-y752zmas.js";

import { pi } from "./chunk-s2t7g8m9.js";

import { p } from "./chunk-jkzenvsk.js";

import { Fa } from "./chunk-q6wab2jw.js";

import { jo } from "./chunk-nnrb0acr.js";

import { fe } from "./chunk-dd98x6x7.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { nU, Sn, sS, UR, Ce, ce } from "./chunk-xywp7esx.js";

import { OR } from "./chunk-3zb1ef23.js";

import { eSo } from "./chunk-41v5z3je.js";

import { mSe } from "./chunk-8g5myc7v.js";

import { w5e } from "./chunk-6z43wfz0.js";

import { P8 } from "./chunk-qbhknj4t.js";

import { _b } from "./chunk-10gv16xm.js";

import { Kn } from "./chunk-gmn1ce75.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, M, T, u, Wc } from "./chunk-cvcg6n1z.js";

import { en } from "./chunk-0qwx38yy.js";

import { D } from "./chunk-hmqkrrtz.js";

class E5e extends Error {
  constructor(e, n) {
    let r, s = e[0];
    if (e.length === 1 && s) r = `Image base64 size (${en(s.size)}) exceeds API limit (${en(n)}). Please resize the image before sending.`; else r = `${e.length} images exceed the API limit (${en(n)}): ` + e.map(a => `Image ${a.index}: ${en(a.size)}`).join(", ") + ". Please resize these images before sending.";
    super(r);
    this.name = "ImageSizeError";
  }
}

function k5e(e) {
  if (!L(e) || !("source" in e)) return !1;
  let n = e.source;
  if (!L(n)) return !1;
  if (!("type" in n) || n.type !== "base64") return !1;
  return "data" in n && typeof n.data === "string";
}

function pIt(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e) || e.type !== "image") return !1;
  return k5e(e);
}

function Ve(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e) || e.type !== "tool_result") return !1;
  return "content" in e && Array.isArray(e.content);
}

function ye(e, n, r, s) {
  let a = e.source.data.length;
  if (a > r) i("tengu_image_api_validation_failed", {
    base64_size_bytes: a,
    max_bytes: r
  }), s.push({
    index: n,
    size: a
  });
}

function R$n(e, n) {
  let r = [], s = 0;
  for (let a of e) {
    if (typeof a !== "object" || a === null) continue;
    if (!("type" in a) || a.type !== "user") continue;
    if (!("message" in a) || typeof a.message !== "object" || a.message === null) continue;
    let y = a.message;
    if (!("content" in y) || !Array.isArray(y.content)) continue;
    for (let h of y.content) {
      if (pIt(h)) {
        ye(h, ++s, n, r);
        continue;
      }
      if (Ve(h)) {
        for (let b of h.content) if (pIt(b)) ye(b, ++s, n, r);
      }
    }
  }
  if (r.length > 0) throw new E5e(r, n);
}

import { types as H } from "util";

var he = () => !1;

function ASs(e) {
  he = e;
}

function x$n() {
  try {
    return he();
  } catch (e) {
    return d(e), !1;
  }
}

var J = "[account memory text removed from this conversation]", be = {
  top: {
    plain: new Set([ "path", "path_prefix", "cursor", "include_preview", "if_version", "source_item", "name" ]),
    text: new Set([ "old_str", "new_str", "content", "instruction", "query" ])
  },
  op: {
    plain: new Set([ "op", "path", "if_version" ]),
    text: new Set([ "old_str", "new_str", "content" ])
  }
}, He = new Set([ "path", "path_prefix", "cursor", "source_item", "name" ]);

function Q(e, n) {
  return P8(e, n, "history");
}

var Se = new WeakMap;

function Te(e) {
  return e.type === "attachment" && e.attachment.type === "cowork_memory_context" && e.attachment.content === null && e.attachment.anchor !== !0;
}

function Vfo(e, n = x$n(), r) {
  let s = e.findLastIndex(Te), a = n ? e.length : s;
  if (a < 0) return {
    messages: e,
    epoch: void 0
  };
  let y = we(e), h = new Set, b = new Set, I = [], v = 0, E, w = S => {
    v++, E = S.uuid;
  };
  return e.forEach((S, A) => {
    if (A >= a || A === s) {
      I.push(S);
      return;
    }
    if (S.type === "attachment" && (S.attachment.type === "cowork_memory_context" && S.attachment.anchor !== !0 || S.attachment.type === "account_memory_recall")) {
      w(S);
      return;
    }
    if (S.type === "assistant" && Array.isArray(S.message.content)) {
      let R = new Map;
      for (let P of S.message.content) {
        if (P.type !== "tool_use" || !Q(P.name, r)) continue;
        let N = n7t(P.input), q = y.has(P.id);
        if (q && N === P.input) continue;
        R.set(P.id, {
          input: N,
          blankResult: !q
        });
      }
      if (R.size === 0) {
        I.push(S);
        return;
      }
      for (let [P, {blankResult: N}] of R) if (b.add(P), N) h.add(P);
      w(S), I.push({
        ...S,
        ...Kn(S.wireToolInputs) && {
          wireToolInputs: Xe(S.wireToolInputs, b)
        },
        message: {
          ...S.message,
          content: S.message.content.map(P => P.type === "tool_use" && R.has(P.id) ? {
            ...P,
            input: R.get(P.id).input
          } : P)
        }
      });
      return;
    }
    if (S.type === "user" && h.size > 0 && Array.isArray(S.message.content) && S.message.content.some(R => R.type === "tool_result" && h.has(R.tool_use_id))) {
      w(S), I.push({
        ...S,
        message: {
          ...S.message,
          content: S.message.content.map(R => R.type === "tool_result" && h.has(R.tool_use_id) ? {
            ...R,
            content: J
          } : R)
        }
      });
      return;
    }
    I.push(S);
  }), v === 0 ? {
    messages: e,
    epoch: void 0
  } : {
    messages: I,
    epoch: `${v}:${E}`
  };
}

function CSs(e, n) {
  let r = we(e);
  for (let s = e.length - 1; s >= 0; s--) {
    let a = e[s];
    if (Te(a)) return !1;
    if (a.type === "assistant" && Array.isArray(a.message.content) && a.message.content.some(y => y.type === "tool_use" && Q(y.name, n) && (!r.has(y.id) || n7t(y.input) !== y.input))) return !0;
  }
  return !1;
}

function Kfo(e) {
  let n = [], r = (s, a) => {
    if (typeof s !== "object" || s === null || H.isProxy(s)) return;
    for (let [y, h] of Object.entries(s)) if (be[a].text.has(y) && typeof h === "string") n.push(h); else if (a === "top" && y === "ops" && Array.isArray(h)) for (let b of h) r(b, "op");
  };
  return r(e, "top"), n;
}

function RSs(e, n) {
  let r = [], s = new Set;
  for (let a of e) if (a.type === "assistant" && Array.isArray(a.message.content)) {
    for (let y of a.message.content) if (y.type === "tool_use" && Q(y.name, n)) s.add(y.id), 
    r.push(...Kfo(y.input));
  } else if (a.type === "user" && s.size > 0 && Array.isArray(a.message.content)) for (let y of a.message.content) {
    if (y.type !== "tool_result" || !s.has(y.tool_use_id)) continue;
    if (typeof y.content === "string") r.push(y.content); else if (Array.isArray(y.content)) {
      for (let h of y.content) if (h.type === "text") r.push(h.text);
    }
  }
  return r;
}

function we(e) {
  let n = new Set;
  for (let r of e) {
    if (r.type !== "user" || r.toolDenialKind === void 0 || r.toolResultRemedy?.kind !== "memory_paused" || !Array.isArray(r.message.content)) continue;
    let s = r.message.content.filter(a => a.type === "tool_result");
    if (s.length === 1) n.add(s[0].tool_use_id);
  }
  return n;
}

function fIt(e, n, r) {
  return Vfo(e, n, r).messages;
}

var $e = 32, ze = Object.freeze({
  content: J
});

function G(e) {
  return e === J ? ze : Object.freeze({
    content: e
  });
}

function n7t(e, n = 0, r = J, s = !1) {
  if (typeof e === "function") return G(r);
  if (typeof e === "string" || H.isStringObject(e)) return n === 0 ? G(r) : r;
  if (typeof e !== "object" || e === null) return e;
  if (H.isProxy(e) || n > 2) return G(r);
  let a = pv(e);
  if (a === yf) return G(r);
  if (a !== void 0) return a.map(S => n7t(S, n + 1, r, s));
  let y;
  try {
    y = Object.keys(e);
  } catch {
    return G(r);
  }
  if (y.length > $e) return G(r);
  let h = Object.getOwnPropertyNames(e).length !== y.length || Object.getOwnPropertySymbols(e).length > 0, b = n === 0 ? "top" : "op", I = [], v = !1;
  for (let S of y) {
    let A = Object.getOwnPropertyDescriptor(e, S);
    if (A === void 0 || !("value" in A) || typeof A.value === "function") {
      v = !0;
      continue;
    }
    let R = qe(b, S, A.value, n, r, s);
    if (R === Ee) {
      v = !0;
      continue;
    }
    if (R instanceof Z) {
      v ||= !R.pristine, I.push([ S, R.strings ]);
      continue;
    }
    v ||= R !== A.value, I.push([ S, R ]);
  }
  let E = Object.getPrototypeOf(e);
  if (n === 0 && !v && !h && (E === Object.prototype || E === null) && Object.getOwnPropertyNames(e).length === y.length && Object.getOwnPropertySymbols(e).length === 0) return e;
  let w = {};
  for (let [S, A] of I) Object.defineProperty(w, S, {
    value: A,
    enumerable: !0,
    writable: !0,
    configurable: !0
  });
  return w;
}

var We = new Set([ "append", "str_replace", "delete" ]), Ee = Symbol("dropped");

class Z {
  strings;
  pristine;
  constructor(e, n) {
    this.strings = e;
    this.pristine = n;
  }
}

function qe(e, n, r, s, a, y) {
  let h = be[e];
  if (h.plain.has(n)) {
    let b = y && He.has(n);
    if (n === "op" ? typeof r === "string" && We.has(r) : r === null || typeof r === "boolean" || n !== "include_preview" && (typeof r === "string" || typeof r === "number")) return b && (typeof r === "string" || typeof r === "number") ? a : r;
    if (e === "top" && n === "path" && typeof r === "object" && r !== null) return Ye(r, a, b);
    return a;
  }
  if (h.text.has(n)) return a;
  if (e === "top" && n === "ops") return !H.isProxy(r) && Array.isArray(r) ? n7t(r, s + 1, a, y) : a;
  return Ee;
}

function Ye(e, n, r) {
  if (H.isProxy(e)) return n;
  let s = Object.getOwnPropertyNames(e), a = Object.getPrototypeOf(e) === Array.prototype && Object.getOwnPropertySymbols(e).length === 0 && Array.isArray(e) && s.length === e.length + 1 && s.every(b => {
    if (b === "length") return !0;
    let I = Object.getOwnPropertyDescriptor(e, b);
    return /^(?:0|[1-9]\d*)$/u.test(b) && Number(b) < e.length && I !== void 0 && "value" in I;
  }), y = pv(e);
  if (!Array.isArray(y)) return n;
  let h = [];
  for (let b of y) {
    if (typeof b !== "string") return n;
    h.push(r ? n : b);
  }
  return new Z(h, a && !r);
}

function Xe(e, n) {
  let r = _(Object.keys(e).filter(y => n.has(y)).sort()), s = Se.get(e);
  if (s === void 0) s = new Map, Se.set(e, s);
  let a = s.get(r);
  if (a === void 0) a = Fa(e, (y, h) => n.has(h)), s.set(r, a);
  return a;
}

var Je = 64;

function ySs(e) {
  let n = k();
  if (n.sessionId !== void 0 && n.sessionId !== e.sessionId) n.held.clear(), n.settled.length = 0;
  n.sessionId = e.sessionId, n.reporter = e;
}

function Gfo(e) {
  let n = k();
  if (n.reporter?.owner === e) n.reporter = void 0;
}

function _Ss(e, n) {
  let r = e.toLowerCase(), {held: s, settled: a} = k();
  if (!s.has(r)) s.set(r, {
    phase: "claimed",
    withheld: !1
  });
  let y = a.indexOf(r);
  if (y !== -1) a.splice(y, 1);
  let h;
  try {
    h = n();
  } catch (b) {
    throw ee(r), b;
  }
  if (h instanceof Promise) return h.finally(() => ee(r));
  return ee(r), h;
}

function bSs(e) {
  let n = k().held.get(e.toLowerCase());
  if (n === void 0) return !1;
  return n.withheld = !0, !0;
}

function Ke(e) {
  return k().held.has(e.toLowerCase());
}

function Qe(e) {
  return k().settled.includes(e.toLowerCase());
}

function Ze(e) {
  return e.payload.type === "user" && typeof e.processing_at === "string";
}

function SSs(e) {
  let n = !1;
  if (Ke(e.event_id)) n = "redelivered_in_flight"; else if (Qe(e.event_id)) n = "redelivered_settled"; else if (Ze(e)) n = "redelivered_after_start";
  if (n !== !1) f("bridge_read_receipt", n);
  return n;
}

function wSs(e) {
  U("queued_note_threw", () => {
    let n = e === void 0 ? void 0 : k().held.get(e.toLowerCase());
    if (n !== void 0) n.phase = "queued";
  });
}

function ee(e) {
  U("settle_threw", () => {
    let n = e.toLowerCase(), r = k().held.get(n);
    if (r?.phase === "claimed") te(n, r);
  });
}

function Ie(e) {
  U("settle_threw", () => {
    let n = e.toLowerCase(), r = k().held.get(n);
    if (r !== void 0 && r.phase !== "read") te(n, r);
  });
}

function vSs(e) {
  for (let {uuid: n} of e) if (n !== void 0) Ie(n);
}

function v5e(e) {
  U("read_note_threw", () => {
    let {held: n} = k();
    if (n.size === 0) return;
    for (let {uuid: r} of e) {
      let s = r?.toLowerCase(), a = s === void 0 ? void 0 : n.get(s);
      if (s === void 0 || a === void 0 || a.phase === "read") continue;
      if (a.phase = "read", a.withheld) K(s, "processing"), g("bridge_read_receipt");
    }
  });
}

function ESs() {
  U("settle_threw", () => {
    for (let [e, n] of k().held) if (n.phase === "read") te(e, n);
  });
}

function kSs() {
  U("resend_threw", () => {
    let {held: e, settled: n} = k();
    for (let [r, s] of e) if (s.phase === "read" && s.withheld) K(r, "processing");
    for (let r of n) K(r, "processed");
  });
}

function TSs(e) {
  let n = e.onCommandLifecycle;
  e.onCommandLifecycle = (r, s) => {
    if (n?.(r, s), s === "cancelled" || s === "refused") Ie(r);
  };
}

function k() {
  return ps(JMo).inboundReadReceipts;
}

function te(e, n) {
  let {held: r, settled: s} = k();
  if (r.delete(e), !n.withheld) return;
  if (s.push(e), s.length > Je) s.shift();
  K(e, "processed");
}

function K(e, n) {
  U("report_threw", () => {
    k().reporter?.report(e, n);
  });
}

function U(e, n) {
  try {
    n();
  } catch (r) {
    m("bridge_read_receipt", e), d(r);
  }
}

class T5e {
  #e;
  constructor(e) {
    this.#e = e;
  }
  static of(e) {
    return new T5e(JSON.stringify(e));
  }
  toJSON() {
    return JSON.parse(this.#e);
  }
}

var et = new Set([ "content", "_meta", "structuredContent", "structuredContentOmitted", "resourceLinks" ]);

function qfo(e, n) {
  if (n.media !== !0) return e;
  if (e instanceof T5e) {
    let s = e.toJSON(), a = qfo(s, n);
    return a === s ? e : T5e.of(a);
  }
  if (!L(e)) return e;
  let r = e.file;
  if (L(r) && (e.type === "image" || e.type === "pdf") && typeof r.base64 === "string" && r.base64 !== "") return {
    ...e,
    file: {
      ...r,
      base64: ""
    }
  };
  return e;
}

function xSs(e, n, r) {
  if (r.mcp_images !== !0) return e;
  let s = h => ve(h, n, (b, I) => b === I ? "" : b);
  if (!(e instanceof T5e)) return s(e);
  let a = e.toJSON(), y = s(a);
  return y === a ? e : T5e.of(y);
}

function r7t(e, n) {
  return ve(e, n, (r, s) => r === "" ? s : r);
}

function o7t(e) {
  if (!L(e) || e.type !== "user") return e;
  let n = r7t(e.toolUseResult, e.message);
  return n === e.toolUseResult ? e : {
    ...e,
    toolUseResult: n
  };
}

function ve(e, n, r) {
  let s = L(e) && Object.keys(e).every(E => et.has(E)), a = s ? e.content : e, y = L(n) ? n.content : void 0;
  if (!Array.isArray(a) || !Array.isArray(y)) return e;
  let [h, ...b] = y.filter(E => L(E) && E.type === "tool_result");
  if (b.length > 0 || !w5e(h) || h.content.length !== a.length) return e;
  let I = !1, v = a.map((E, w) => {
    let S = h.content[w];
    if (!pIt(E) || !pIt(S)) return E;
    let A = r(E.source.data, S.source.data);
    if (A === E.source.data) return E;
    return I = !0, {
      ...E,
      source: {
        ...E.source,
        data: A
      }
    };
  });
  if (!I) return e;
  return s ? {
    ...e,
    content: v
  } : v;
}

var tt = new Set([ "user", "assistant", "attachment", "system" ]);

function bSr(e) {
  return L(e) && typeof e.type === "string" && tt.has(e.type);
}

var Re = [ "cwd", "gitBranch", "version", "userType", "entrypoint", "promptId" ], nt = [ ...Re, "requestId" ];

function ot(e) {
  let n = e.message;
  return e.type === "assistant" && L(n) && typeof n.id === "string" && n.id.length > 0;
}

function PSs(e) {
  if (!bSr(e)) return e;
  let n = ot(e) ? nt : Re, r;
  for (let s of n) if (s in e) r ??= {
    ...e
  }, delete r[s];
  return r ?? e;
}

function P$n(e, n) {
  if (!bSr(e)) return e;
  let r;
  for (let [s, a] of Object.entries(n)) if (a !== void 0 && e[s] === void 0) r ??= {
    ...e
  }, r[s] = a;
  return r ?? e;
}

function I$n(e) {
  let n = [], r = 0;
  while (r < e.length) {
    let s = e[r];
    if (s.type !== "assistant" || s.resumedFromIncompleteThinking !== !0) {
      r++;
      continue;
    }
    let a = r, y = r - 1;
    for (;;) {
      while (y >= 0 && _b(e[y])) y--;
      let v = y >= 0 ? e[y] : void 0;
      if (v?.type !== "assistant") break;
      let E = v.message.id, w = y;
      while (y >= 0) {
        let A = e[y];
        if (A.type === "assistant") if (A.message.id === E) w = y, y--; else break; else if (_b(A)) y--; else {
          let R = y;
          while (R >= 0 && (e[R].type !== "assistant" || _b(e[R]))) R--;
          let P = R >= 0 ? e[R] : void 0;
          if (P?.type === "assistant" && P.message.id === E) w = R, y = R - 1; else break;
        }
      }
      a = w;
      let S = e[w];
      if (S.type !== "assistant" || S.resumedFromIncompleteThinking !== !0) break;
    }
    let h = r, b = s.message.id, I = r + 1;
    for (;;) {
      let v = I;
      while (v < e.length && _b(e[v])) v++;
      let E = v < e.length ? e[v] : void 0;
      if (E?.type === "assistant") {
        if (E.message.id === b) {
          h = v, I = v + 1;
          continue;
        }
        if (E.resumedFromIncompleteThinking === !0) {
          h = v, b = E.message.id, I = v + 1;
          continue;
        }
        break;
      }
      let w = v;
      while (w < e.length && (e[w].type !== "assistant" || _b(e[w]))) w++;
      let S = w < e.length ? e[w] : void 0;
      if (S?.type === "assistant" && S.message.id === b) {
        h = w, I = w + 1;
        continue;
      }
      break;
    }
    n.push({
      fromIdx: a,
      toIdx: h
    }), r = I > r ? I : r + 1;
  }
  return n;
}

var O$n = "auto-mode-classifier-error.txt", M$n = "auto-mode-dump.", H$n = "auto-mode-env-edit-", D$n = "auto-mode-builtins-", ISs = "auto-mode-classifier-dump", OSs = "auto-mode-classifier-system";

function MSs(e) {
  if (typeof e !== "object" || e === null || !("type" in e)) return !1;
  return e.type === "auto-mode-classifier-dump" || e.type === "auto-mode-classifier-system";
}

function Eue(e) {
  return e?.kind === "self_hosted_pool";
}

function RF(e) {
  return e.kind === "self_hosted_pool" ? e.pool_id : e.environment_id;
}

function I7(e) {
  return e !== void 0 && e.startsWith("ccpool_");
}

function C5e(e, n) {
  return e.find(n);
}

var rt = [ "policySettings", "flagSettings", "userSettings" ];

function ySe() {
  let e, n = jo();
  for (let r = n.length - 1; r >= 0; r--) {
    let s = n[r], a = fe(s)?.remote?.defaultEnvironmentId;
    if (a === void 0) continue;
    if (I7(a) && !rt.includes(s)) {
      e ??= {
        id: a,
        source: s
      };
      continue;
    }
    return {
      id: a,
      source: s,
      ignoredUntrustedPool: e?.id === a ? void 0 : e
    };
  }
  return {
    id: void 0,
    source: void 0,
    ignoredUntrustedPool: e
  };
}

function i7t(e) {
  return e.startsWith("ccpool_") ? {
    self_hosted_runner_pool_id: e
  } : {
    environment_id: e
  };
}

var st = p(() => u({
  environments: T(Wc(e => typeof e === "object" && e !== null && !Array.isArray(e))),
  has_more: M().optional().catch(void 0),
  last_id: o().nullable().optional().catch(void 0)
})), it = 100, ne = 10;

function at(e) {
  if (typeof e === "string" && e.trim().length === 0) return new x("The cloud environments service returned an empty response (HTTP 200 with no body). This is usually temporary \u2014 try again in a moment.", "fetchEnvironments: HTTP 200 with an empty body");
  if (typeof e === "string") return new x("The cloud environments service returned a response in an unexpected format (HTTP 200 with a non-JSON body). This is usually temporary \u2014 try again in a moment.", "fetchEnvironments: HTTP 200 with a non-JSON body");
  return new x("The cloud environments service returned a response in an unexpected format (HTTP 200 without a usable environments list). This is usually temporary \u2014 try again in a moment.", "fetchEnvironments: HTTP 200 JSON body without a valid environments array");
}

async function xF(e, n, r) {
  return so("teleport_environments_list", async () => {
    if (Oe() !== "firstParty") throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let a = e ?? Sn()?.accessToken;
    if (!a) throw Error("Cloud sessions need a claude.ai sign-in. Run `claude auth login` (or /login in a local session), then try again.");
    let y = await nU();
    if (!y) throw Error("Unable to get organization UUID");
    let h = `${un().BASE_API_URL}/v1/environment_providers`;
    try {
      let b = [], I;
      for (let E = 0; E < ne; E++) {
        let w = await sS(() => At.get(h, {
          headers: {
            ...UR(Sn()?.accessToken ?? a),
            "x-organization-uuid": y
          },
          params: {
            limit: it,
            ...I !== void 0 && {
              after_id: I
            }
          },
          timeout: 15e3
        }), {
          credentials: r
        });
        if (w.status !== 200) throw Error(`Failed to fetch environments: HTTP ${w.status}`);
        let S = st().safeParse(w.data);
        if (!S.success) throw at(w.data);
        b.push(...S.data.environments);
        let A = S.data.last_id;
        if (S.data.has_more !== !0 || S.data.environments.length === 0 || typeof A !== "string") break;
        if (E === ne - 1) t(`fetchEnvironments: stopped after ${ne} pages (${b.length} environments) although the server reports more; the rest are not listed`, {
          level: "warn"
        });
        I = A;
      }
      let v = b.length > 0;
      if (ce().hasRemoteEnvironment !== v) await Ce(E => E.hasRemoteEnvironment === v ? E : {
        ...E,
        hasRemoteEnvironment: v
      }, n);
      return b;
    } catch (b) {
      let I = j(b);
      if (Xp(b)) t(`fetchEnvironments failed: ${I.message}`, {
        level: "error"
      }); else d(I);
      throw I;
    }
  }, dt);
}

function dt(e) {
  return e instanceof x ? "malformed_response" : "error";
}

async function R5e(e = "Default", n, r) {
  return so("teleport_default_environment_create", async () => {
    if (Oe() !== "firstParty") throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let s = r ?? Sn()?.accessToken;
    if (!s) throw Error("No access token available");
    let a = await nU();
    if (!a) throw Error("Unable to get organization UUID");
    let y = `${un().BASE_API_URL}/v1/environment_providers/cloud/create`;
    return (await At.post(y, {
      name: e,
      kind: "anthropic_cloud",
      description: "Default - trusted network access",
      config: {
        environment_type: "anthropic",
        cwd: "/home/user",
        init_script: null,
        environment: {},
        languages: [ {
          name: "python",
          version: "3.11"
        }, {
          name: "node",
          version: "20"
        } ],
        network_config: {
          allowed_hosts: [],
          allow_default_hosts: !0
        }
      }
    }, {
      headers: {
        ...UR(s),
        "anthropic-beta": "ccr-byoc-2025-07-29",
        "x-organization-uuid": a
      },
      timeout: 15e3,
      signal: n
    })).data;
  });
}

async function B$n(e, n) {
  if (Oe() !== "firstParty") return [];
  let r = e ?? Sn()?.accessToken;
  if (!r) return [];
  let s = await nU();
  if (!s) return [];
  let a = `${un().BASE_API_URL}/v1/code/runners/self-hosted/pools`;
  try {
    let y = await sS(() => At.get(a, {
      headers: {
        ...UR(Sn()?.accessToken ?? r),
        "anthropic-beta": "ccr-byoc-2025-07-29",
        "x-organization-uuid": s
      },
      timeout: 15e3
    }), {
      credentials: n
    });
    if (y.status !== 200) return t(`fetchSelfHostedPools: ${y.status} ${y.statusText}`, {
      level: "error"
    }), f("teleport_self_hosted_pool_list", "non_200"), [];
    return so("teleport_self_hosted_pool_list", async () => (y.data.pools ?? []).map(h => ({
      kind: "self_hosted_pool",
      pool_id: h.pool_id,
      name: h.name,
      created_at: h.created_at,
      alive_runner_count: h.alive_runner_count ?? 0
    })));
  } catch (y) {
    let h = j(y);
    if (Xp(y)) t(`fetchSelfHostedPools failed: ${h.message}`, {
      level: "error"
    }), f("teleport_self_hosted_pool_list", "api_error"); else d(h), f("teleport_self_hosted_pool_list", "unexpected");
    return [];
  }
}

var ut = {
  refusal_fallback_prompt: "choose: retry on fallback model or edit prompt",
  auto_mode_server_fallback: "acknowledge the classifier billing notice (Enter continues in auto mode)",
  auto_mode_outside_reads: "choose: keep allowing reads outside the working directories, or block them"
}, Llt = "dialog:mcp_elicitation";

function N$n(e, n, r, s) {
  return {
    tool_name: `dialog:${e}`,
    display_tool_name: "Claude needs your input",
    action_description: ut[e] ?? `Respond to the ${e} dialog to continue`,
    raw_command: void 0,
    tool_use_id: s ?? "",
    request_id: r,
    input: {
      dialog_kind: e,
      payload: n
    }
  };
}

import { randomUUID as ct } from "crypto";

function L$n(e, n, r, s) {
  if (Sh(n, "sessionId"), !s) return {
    url: `${e}/v1/sessions/${n}/events`,
    body: {
      events: r
    }
  };
  let a = sd(n);
  return {
    url: `${e}/v1/code/sessions/${encodeURIComponent(a)}/events`,
    body: {
      events: r.map(y => ({
        payload: typeof y.uuid === "string" && y.uuid ? y : {
          ...y,
          uuid: ct()
        }
      }))
    }
  };
}

import { randomUUID as ft } from "crypto";

var NSs = "tengu_woven_harbor", $$n = "tengu_drifting_twilight", Xfo = !0, $Ss = "tengu_buzzing_river";

function Jfo(e) {
  return e.githubPr == null;
}

var Ae = 16;

function wSr(e, n) {
  return {
    type: "event",
    data: {
      type: "control_request",
      request_id: `set-mode-${ft()}`,
      request: {
        subtype: "set_permission_mode",
        mode: e,
        ultraplan: n
      }
    }
  };
}

function Qfo(e) {
  return {
    envVars: Object.keys(e.environmentVariables ?? {}).length > 0,
    events: e.events.filter(n => !Pe(n)).map(gt)
  };
}

var W = "<redacted>";

function oe(e) {
  if (!Kn(e)) return;
  let {seed_bundle_file_id: n, environment_variables: r} = e;
  if (n === void 0 && r === void 0) return;
  return {
    ...e,
    ...n !== void 0 && {
      seed_bundle_file_id: W
    },
    ...r !== void 0 && {
      environment_variables: Kn(r) ? Object.fromEntries(Object.keys(r).map(s => [ s, W ])) : W
    }
  };
}

function FSs(e) {
  let n = e.bind_attestation, r = oe(e), s = oe(e.session_context), a = oe(e.config);
  if (!r && !s && !a && n === void 0) return e;
  return {
    ...r ?? e,
    ...s && {
      session_context: s
    },
    ...a && {
      config: a
    },
    ...n !== void 0 && {
      bind_attestation: Kn(n) ? {
        ...n,
        signature: W
      } : W
    }
  };
}

var pt = new Set([ "set_permission_mode", "set_mcp_permission_mode_override", "set_max_thinking_tokens", "mcp_toggle" ]);

function xe(e) {
  let n = e.data.request;
  return e.data.type === "control_request" && typeof n?.subtype === "string" ? n.subtype : void 0;
}

function Pe(e) {
  if (e.data.type === "user") return !0;
  let n = xe(e);
  return n !== void 0 && pt.has(n);
}

function gt(e) {
  return xe(e) ?? String(e.data.type);
}

function F$n(e) {
  let n = e.deviceBinding, r = n ? e.events.filter(y => Pe(y) && !(e.deferFirstPrompt && y.data.type === "user")) : e.events;
  if (n && r.length > Ae) throw new x(`session create allows at most ${Ae} initial events, got ${r.length}`, "session create: too many initial events");
  let s = n ? {} : e.environmentVariables ?? {}, a = D([ ...e.disallowedTools ?? [], ...n ? qDs : [] ]);
  return {
    ...e.title && {
      title: e.title
    },
    ...e.worker,
    ...Zfo(e.persistentVolume),
    events: r.map(y => ({
      payload: y.data
    })),
    ...e.tags && {
      tags: e.tags
    },
    ...!n && e.sessionGroupingId && {
      session_grouping_id: e.sessionGroupingId
    },
    ...!n && e.agentId && {
      agent_id: e.agentId
    },
    ...Object.keys(s).length > 0 && {
      environment_variables: s
    },
    ...n && {
      target_device_id: n.deviceUUID,
      bind_attestation: {
        kid: n.kid,
        signature: n.signature
      },
      bind_attestation_issued_at: n.issuedAt,
      ...e.requestElevatedTier && {
        security_tier: "elevated"
      },
      ...e.repositoriesTrusted && {
        repositories_trusted: !0
      }
    },
    config: {
      sources: e.sources.map(mt),
      outcomes: e.outcomes,
      ...e.model && {
        model: e.model
      },
      ...e.cwd && {
        cwd: e.cwd
      },
      ...e.effortLevel && {
        effort_level: e.effortLevel
      },
      ...e.seedBundleFileId && {
        seed_bundle_file_id: e.seedBundleFileId
      },
      ...e.reuseOutcomeBranches && {
        reuse_outcome_branches: !0
      },
      ...e.appendSystemPrompt && {
        append_system_prompt: e.appendSystemPrompt
      },
      ...e.customSystemPrompt && {
        custom_system_prompt: e.customSystemPrompt
      },
      ...e.appendSubagentSystemPrompt && {
        append_subagent_system_prompt: e.appendSubagentSystemPrompt
      },
      ...e.fallbackModel && {
        fallback_model: e.fallbackModel
      },
      ...e.maxTurns !== void 0 && {
        max_turns: e.maxTurns
      },
      ...e.maxBudgetUsd !== void 0 && e.maxBudgetUsd > 0 && {
        max_budget_usd: e.maxBudgetUsd
      },
      ...e.allowedTools && e.allowedTools.length > 0 && {
        allowed_tools: e.allowedTools
      },
      ...e.outputSchema && {
        output_schema: e.outputSchema
      },
      ...!n && e.correlationId && {
        correlation_id: e.correlationId
      },
      ...a.length > 0 && {
        disallowed_tools: a
      },
      ...e.builtinTools && e.builtinTools.length > 0 && {
        builtin_tools: [ ...e.builtinTools ]
      }
    }
  };
}

function Zfo(e) {
  return;
}

function U$n(e, n) {
  let r = e === "v1alpha2" ? n?.session : n;
  if (typeof r?.id !== "string" || r.id === "") return Rp("no_session_id");
  if (!Aln(r.id)) return Rp("unusable_session_id");
  return wh({
    ...r,
    title: typeof r.title === "string" ? pi(r.title) : null
  });
}

function emo(e, n) {
  return e.title || pi(n);
}

function mt(e) {
  let {allow_unrestricted_git_push: n, ...r} = e;
  return r;
}

function tmo(e, n) {
  if (e === 401) return `${n || "Claude login not accepted"} \xb7 Run /login, then try again`;
  return;
}

function nmo(e, n) {
  if (n?.type === "not_found_error" && n.resource_type === "session_grouping") return `Project not found: ${e}. Check the id \u2014 a Project you don't have access to looks the same as one that doesn't exist.`;
  switch (n?.reason) {
   case "public_grouping_hosted_only":
    return `${e} is a public Project, and public Projects run on Anthropic-hosted infrastructure only. Drop --environment (and any self-hosted target), or use a private Project.`;

   case "feature_disabled":
    return "Projects are not available for your organization.";

   default:
    return;
  }
}

class ke {
  listener=void 0;
}

var Ue = new lt(() => new ke);

function HSs(e, n) {
  try {
    return Ue.peek(e)?.listener?.(n)?.catch(d);
  } catch (r) {
    d(r);
    return;
  }
}

function DSs(e) {
  let n = Ue.of(B());
  return n.listener = e, () => {
    if (n.listener === e) n.listener = void 0;
  };
}

var Yfo = "PostCompact [", mIt = "This session is being continued from a previous conversation that ran out of context. The summary below covers the earlier portion of the conversation.";

function Me(e) {
  return e.startsWith(`<${wl}>`) && e.includes(Yfo);
}

function s7t(e) {
  if (typeof e === "string") return Me(e);
  if (!Array.isArray(e) || e.length !== 1) return !1;
  let n = e[0];
  return mSe(n) && Me(n.text);
}

var _t = new TextDecoder("utf-8", {
  ignoreBOM: !0
});

function re(e, n) {
  let r = 0, s = 1;
  for (let a = 0; a < 10; a++) {
    let y = n + a;
    if (y >= e.length) return;
    let h = e[y];
    if (r += (h & 127) * s, (h & 128) === 0) return {
      value: r,
      next: y + 1
    };
    s *= 128;
  }
  return;
}

function A5e(e, n) {
  let r = 0;
  while (r < e.length) {
    let s = re(e, r);
    if (s === void 0) return !1;
    let a = s.value & 7, y = Math.floor(s.value / 8);
    switch (r = s.next, a) {
     case 0:
      {
        let h = re(e, r);
        if (h === void 0) return !1;
        r = h.next, n.onVarint?.(y, h.value);
        break;
      }

     case 1:
      if (r + 8 > e.length) return !1;
      r += 8;
      break;

     case 2:
      {
        let h = re(e, r);
        if (h === void 0 || h.value > e.length - h.next) return !1;
        r = h.next + h.value, n.onBytes?.(y, e.subarray(h.next, r));
        break;
      }

     case 5:
      if (r + 4 > e.length) return !1;
      r += 4;
      break;

     default:
      return !1;
    }
  }
  return !0;
}

function SSr(e, n) {
  let r;
  return A5e(e, {
    onBytes(a, y) {
      if (a === n) r = y;
    }
  }) ? r : void 0;
}

function LSs(e, n) {
  let r = SSr(e, n);
  return r === void 0 ? void 0 : _t.decode(r);
}

function USs(e) {
  if (e.branchDropped && e.warnMessage) {
    if (i("tengu_bridge_outcome_branch_dropped", {
      reason: c(e.branchDropped)
    }), t(e.warnMessage, {
      level: "warn"
    }), e.branchDropped === "no_evidence") console.warn(e.warnMessage);
  }
  if (e.revisionGuessUsed) i("tengu_bridge_revision_guess_used", {});
}

var De = {
  no_session_id: {
    debug: "No session ID in response",
    code: "bridge_session_create_bad_response"
  },
  unusable_session_id: {
    debug: "Unusable session ID in response",
    code: "bridge_session_create_unusable_id"
  }
};

async function rmo({environmentId: e, title: n, gitRepoUrl: r, branch: s, defaultBranch: a, signal: y, baseUrl: h, getAccessToken: b, credentials: I, permissionMode: v, tags: E}) {
  let {getClaudeAIOAuthTokens: w, getClaudeAIOAuthTokensAsync: S} = await import("./chunk-8rkfm3cn.js"), {getOrganizationUUID: A} = await import("./chunk-9j8chrt1.js"), {getOauthConfig: R} = await import("./chunk-a8eh2v5r.js"), {sessionsApiWire: P} = await import("./chunk-80xde28b.js"), {getMainLoopModel: N} = await import("./chunk-2zz3mtmc.js"), {getOriginalCwd: q} = await import("./chunk-84b4c0ck.js"), {default: Le} = await import("./chunk-an24tzma.js"), {isCcrV2BridgeCreateEnabled: Ne} = await import("./chunk-d37r4kj2.js"), Y = Ne() ? "v1alpha2" : "v1", O = {
    create_endpoint: c(Y)
  }, {isFirstPartyProvider: Fe} = await import("./chunk-0sx8j48z.js");
  if (!Fe()) return t("[bridge] Session create skipped on non-firstParty provider"), 
  V("bridge_session_create_3p_provider", O);
  let ie = b?.() ?? (z() && I !== void 0 ? (await S(I))?.accessToken : w()?.accessToken);
  if (!ie) return t("[bridge] No access token for session creation"), V("bridge_session_create_no_token", O);
  let ae = await A();
  if (!ae) return t("[bridge] No org UUID for session creation"), V("bridge_session_create_no_org", O);
  let {sources: de, outcomes: ue, report: je} = await eSo(r, s, a), le = i7t(e), pe = N(), ge = q(), me = v ? [ wSr(v) ] : [], Be = Y === "v1alpha2" ? F$n({
    title: n,
    worker: le,
    events: me,
    sources: de,
    outcomes: ue,
    model: pe,
    cwd: ge,
    reuseOutcomeBranches: !0,
    tags: E?.length ? E : void 0
  }) : {
    ...n !== void 0 && {
      title: n
    },
    events: me,
    session_context: {
      sources: de,
      outcomes: ue,
      model: pe,
      cwd: ge,
      reuse_outcome_branches: !0
    },
    ...le,
    source: "remote-control",
    ...E?.length && {
      tags: E
    }
  }, _e = P(Y, h ?? R().BASE_API_URL, ie), Ge = {
    ..._e.headers,
    "x-organization-uuid": ae
  }, F;
  try {
    F = await Le.post(_e.url, Be, {
      headers: Ge,
      signal: y,
      validateStatus: C => C < 500
    });
  } catch (C) {
    return t(`[bridge] Session creation request failed: ${l(C)}`), V("bridge_session_create_request_failed", O);
  }
  if (!(F.status === 200 || F.status === 201)) {
    let C = OR(F.data);
    return t(`[bridge] Session creation failed with status ${F.status}${C ? `: ${C}` : ""}`), 
    V("bridge_session_create_http_error", O);
  }
  let X = U$n(Y, F.data);
  if (!X.ok) return t(`[bridge] ${De[X.error].debug}`), V(De[X.error].code, O);
  return USs(je), g("bridge_session_create", O), mu(X.value.id);
}

async function Nlt(e, n) {
  return (await $lt(e, n)).session;
}

async function $lt(e, n) {
  let {getClaudeAIOAuthTokens: r, getClaudeAIOAuthTokensAsync: s} = await import("./chunk-8rkfm3cn.js"), {getOauthConfig: a} = await import("./chunk-a8eh2v5r.js"), {getCodeSession: y} = await import("./chunk-8ket0sw8.js"), {isCcrV2SessionCrudEnabled: h} = await import("./chunk-d37r4kj2.js"), {isFirstPartyProvider: b} = await import("./chunk-0sx8j48z.js");
  if (!b()) return m("bridge_session_get", "bridge_session_get_3p_provider"), {
    session: null,
    notFound: !1
  };
  let I = n?.getAccessToken?.() ?? (z() && n?.credentials !== void 0 ? (await s(n.credentials))?.accessToken : r()?.accessToken);
  if (!I) return t("[bridge] No access token for session fetch"), m("bridge_session_get", "bridge_session_get_no_token"), 
  {
    session: null,
    notFound: !1
  };
  let v = n?.useV2 ?? h(), E;
  if (!v) {
    let {getOrganizationUUID: S} = await import("./chunk-9j8chrt1.js");
    if (E = await S() ?? void 0, !E) return t("[bridge] No org UUID for session fetch"), 
    m("bridge_session_get", "bridge_session_get_no_org"), {
      session: null,
      notFound: !1
    };
  }
  let w = await y(n?.baseUrl ?? a().BASE_API_URL, I, e, 1e4, {
    useV2: v,
    orgUUID: E
  });
  if (typeof w !== "object") return m("bridge_session_get", w === "invalid" ? "bridge_session_get_invalid_id" : typeof w === "number" ? "bridge_session_get_http_error" : "bridge_session_get_request_failed"), 
  {
    session: null,
    notFound: w === 404
  };
  return g("bridge_session_get"), {
    session: {
      environment_id: w.environment_id,
      title: w.title,
      status: w.status,
      created_at: w.created_at,
      updated_at: w.updated_at,
      connection_status: "connection_status" in w && typeof w.connection_status === "string" ? w.connection_status : void 0,
      tags: w.tags
    },
    notFound: !1
  };
}

async function se(e, n, r, s) {
  let {getClaudeAIOAuthTokens: a, getClaudeAIOAuthTokensAsync: y} = await import("./chunk-8rkfm3cn.js"), {getOauthConfig: h} = await import("./chunk-a8eh2v5r.js"), {updateCodeSession: b} = await import("./chunk-8ket0sw8.js"), {isCcrV2SessionCrudEnabled: I} = await import("./chunk-d37r4kj2.js"), v = s?.getAccessToken?.() ?? (z() && s?.credentials !== void 0 ? (await y(s.credentials))?.accessToken : a()?.accessToken);
  if (!v) return t(`[bridge] No access token for session ${r} update`), "failed";
  let E = "client_metadata" in n || I(), w;
  if (!E) {
    let {getOrganizationUUID: A} = await import("./chunk-9j8chrt1.js");
    if (w = await A() ?? void 0, !w) return t(`[bridge] No org UUID for session ${r} update`), 
    "failed";
  }
  t(`[bridge] Updating session ${r}: ${e}`);
  let S = await b(s?.baseUrl ?? h().BASE_API_URL, v, e, n, 1e4, {
    useV2: E,
    orgUUID: w
  });
  if (S === "invalid") return m("bridge_session_patch", "bridge_session_patch_invalid_id"), 
  "rejected"; else if (typeof S !== "number") return m("bridge_session_patch", "bridge_session_patch_request_failed"), 
  "failed"; else if (S === 200) return t(`[bridge] Session ${r} updated successfully`), 
  g("bridge_session_patch"), "landed"; else return f("bridge_session_patch", "bridge_session_patch_http_error"), 
  "failed";
}

async function omo(e, n, r) {
  return se(e, {
    title: n
  }, "title", r);
}

async function m6s(e, n, r) {
  let s = `Couldn't start \u2014 too many sessions are running \xb7 ${n}`;
  return se(e, {
    title: s,
    client_metadata: {
      desktop_rc_refusal: {
        title: s,
        reason: "capacity"
      }
    }
  }, "refusal", r);
}

var BSs = "color:";

async function smo(e, n, r, s) {
  let a = n === "default", y = r.filter(b => a || b !== n).map(b => BSs + b), h = a ? void 0 : [ BSs + n ];
  await se(e, {
    add_tags: h,
    remove_tags: y
  }, "color tag", s);
}

async function g6s(e, n, r) {
  return !1;
}

function V(e, n) {
  return m("bridge_session_create", e, n), null;
}

function j$n(e) {
  let n = ao().teleportedSessionIds;
  if (n.add(or(e)), n.size > 64) {
    let r = n.values().next().value;
    if (r !== void 0) n.delete(r);
  }
}

function jT(e) {
  return ao().teleportedSessionIds.has(or(e));
}

function imo(e) {
  ao().teleportedSessionIds.delete(or(e));
}

export { ySs, Gfo, _Ss, bSs, SSs, wSs, vSs, v5e, ESs, kSs, TSs, E5e, k5e, pIt, R$n, ASs, x$n, Vfo, CSs, Kfo, RSs, fIt, n7t, T5e, qfo, xSs, r7t, o7t, bSr, PSs, P$n, I$n, O$n, M$n, H$n, D$n, ISs, OSs, MSs, L$n, Llt, N$n, Yfo, mIt, s7t, HSs, DSs, A5e, SSr, LSs, NSs, $$n, Xfo, $Ss, Jfo, wSr, Qfo, FSs, F$n, Zfo, U$n, emo, tmo, nmo, Eue, RF, I7, C5e, ySe, i7t, xF, R5e, B$n, USs, rmo, Nlt, $lt, omo, m6s, BSs, smo, g6s, j$n, jT, imo };
