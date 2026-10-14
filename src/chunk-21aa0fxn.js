// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { wl } from "./chunk-6ah1819r.js";

import { _, Do } from "./chunk-kawq2919.js";

import { JCn, Fre, loo } from "./chunk-84yp45y8.js";

import { fIt, Yfo, mIt, s7t } from "./chunk-5ad06083.js";

import { Bfs } from "./chunk-7xj6dhxv.js";

import { l0e, $nt } from "./chunk-zmbx1k67.js";

import { mSe } from "./chunk-8g5myc7v.js";

import { D } from "./chunk-hmqkrrtz.js";

function Jyt(e) {
  return Bfs(e) || !1;
}

var a = "[conversation summary withheld: it may include account memory]";

function w6(e, o) {
  let s = fIt([ ...e ]).filter(n => !JCn(n) && !(n.type === "system" && "persist" in n && n.persist === !1)), r = h(e, o);
  return s.map(n => T(n, r) ? A(n) : n);
}

function h(e, {host: o}) {
  return Jyt(o) || e.some(JCn);
}

function T(e, o) {
  if (!o || e.type !== "user") return !1;
  let s = e.message;
  return e.isCompactSummary === !0 || e.repeatsCompactSummary === !0 || s7t(s?.content);
}

function A(e) {
  let o = e.isCompactSummary === !0 ? a : `<${wl}>${a}</${wl}>`, {modelOnlyText: s, ...r} = e, n = {
    ...r
  };
  for (let t of [ ...l0e, ...$nt ]) if (t !== "summarizeMetadata") delete n[t];
  return {
    ...n,
    message: {
      ...e.message,
      role: e.message?.role ?? "user",
      content: typeof e.message?.content === "string" ? o : [ {
        type: "text",
        text: o
      } ]
    }
  };
}

function bge(e, o) {
  if (!h([], o)) return {
    jsonl: e,
    hits: 0
  };
  let s = 0;
  return {
    jsonl: e.split(`\n`).map(n => {
      let t = 0;
      while (n.charCodeAt(t) === 0 || n.charCodeAt(t) === 65279) t++;
      let u = t > 0 ? n.slice(t) : n;
      if (u.trim() === "") return n;
      let m = S.some(c => u.includes(c)), i;
      try {
        i = Do(u);
      } catch {
        i = void 0;
      }
      if (!y(i)) return s++, _({
        type: "line-withheld",
        bytes: Buffer.byteLength(n)
      });
      if (m && i.type === C) {
        let c = B(i);
        if (c !== void 0) return s++, _(c);
        return n;
      }
      if (!m || i.type !== "user") return n;
      let l = y(i.message) ? i.message : void 0, f = l?.content;
      if (i.isCompactSummary !== !0 && i.repeatsCompactSummary !== !0 && !s7t(f)) return n;
      s++;
      let d = i.isCompactSummary === !0 ? a : `<${wl}>${a}</${wl}>`, p = {
        ...i
      };
      delete p.modelOnlyText;
      for (let c of [ ...l0e, ...$nt ]) if (c !== "summarizeMetadata") delete p[c];
      return p.message = {
        role: "user",
        ...l,
        content: typeof f === "string" ? d : [ {
          type: "text",
          text: d
        } ]
      }, _(p);
    }).join(`\n`),
    hits: s
  };
}

var S = [ '"isCompactSummary"', '"repeatsCompactSummary"', Yfo, mIt ], C = "api-request-blob";

function B(e) {
  let o = y(e.message) ? e.message : void 0;
  if (o?.role !== "user") return;
  let {content: s} = o;
  if (typeof s === "string") return s.includes(mIt) ? {
    ...e,
    message: {
      ...o,
      content: a
    }
  } : void 0;
  if (!Array.isArray(s)) return;
  let r = !1, n = s.map(t => {
    if (mSe(t) && t.text.includes(mIt)) return r = !0, {
      ...t,
      text: a
    };
    return t;
  });
  return r ? {
    ...e,
    message: {
      ...o,
      content: n
    }
  } : void 0;
}

function y(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}

function R8n(e, o, s = []) {
  let r = {
    keys: D(e.filter(t => t.trim() !== "").flatMap(loo).filter(t => !a.includes(t))).sort((t, u) => u.length - t.length),
    replaced: D(s.map(t => t.trim()).filter(t => t !== "" && !a.includes(t))).sort((t, u) => u.length - t.length),
    hits: 0
  };
  return {
    messages: r.keys.length === 0 && r.replaced.length === 0 ? o : o.flatMap(t => {
      if (t.role !== "user") return [ t ];
      let u = x(t.content, r);
      return u === void 0 ? [] : [ {
        ...t,
        content: u
      } ];
    }),
    keys: r.keys.length + r.replaced.length,
    hits: r.hits
  };
}

function x(e, o) {
  if (typeof e === "string") {
    let r = g(e, o);
    return M(r) ? void 0 : r;
  }
  let s = e.flatMap(r => {
    if (k(r)) {
      let n = g(r.text, o);
      return M(n) ? [] : [ {
        ...r,
        text: n
      } ];
    }
    if (w(r) && r.content !== void 0) return [ {
      ...r,
      content: x(r.content, o) ?? ""
    } ];
    return [ r ];
  });
  return s.length === 0 ? void 0 : s;
}

function k(e) {
  return e.type === "text" && "text" in e && typeof e.text === "string";
}

function w(e) {
  return e.type === "tool_result";
}

function g(e, o) {
  let s = e;
  for (let r = 0; ;r++) {
    if (r > e.length) return a;
    let n = o.replaced.find(i => s.includes(i)), t = o.keys.find(i => s.includes(i)), u = n !== void 0 && (t === void 0 || n.length >= t.length) ? n : t;
    if (u === void 0) return s;
    let m = s.split(u);
    o.hits += m.length - 1, s = m.join(u === n ? a : "");
  }
}

function M(e) {
  return Fre(e).trim() === "";
}

export { Jyt, w6, bge, R8n };
