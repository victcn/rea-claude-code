// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { k } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { _, t } from "./chunk-kawq2919.js";

import { $s, ne } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { qLe } from "./chunk-84yp45y8.js";

import { Dc } from "./chunk-9tdwgnpn.js";

import { Kks } from "./chunk-ma4gjakn.js";

var T = .5, M = 4, C = 1600, g = 25e3;

function u() {
  let e = a.MAX_MCP_OUTPUT_TOKENS;
  if (e !== void 0 && e > 0) return e;
  let r = k("tengu_velvet_ibis", {})?.mcp_tool;
  if (typeof r === "number" && Number.isFinite(r) && r > 0) return r;
  return g;
}

function gle(e) {
  if (!e || typeof e === "string" || !Array.isArray(e)) return e;
  let n = e, r = !1;
  for (let o of n) if (o?.type === "text" && "_meta" in o && o._meta) {
    r = !0;
    break;
  }
  if (!r) return e;
  return n.map(o => {
    if (o?.type === "text" && "_meta" in o && o._meta) {
      let {_meta: i, ...s} = o;
      return s;
    }
    return o;
  });
}

var p = 65536;

function f5o(e) {
  if (!Array.isArray(e)) return e;
  let n = 0;
  for (let r of e) {
    if (r?.type !== "text" || !("_meta" in r) || !r._meta) continue;
    try {
      n += _(r._meta).length;
    } catch {
      n = 1 / 0;
    }
    if (n > p) return t(`MCP result: text blocks' _meta (over ${p} characters of JSON in all, or not serializable) left off the retained result`), 
    gle(e);
  }
  return e;
}

function m(e) {
  return e.type === "text";
}

function P(e) {
  return e.type === "image";
}

function NHe(e) {
  if (!e) return 0;
  if (typeof e === "string") return Dc(e);
  if (!Array.isArray(e)) return 0;
  return e.reduce((n, r) => {
    if (m(r)) return n + Dc(r.text); else if (P(r)) return n + C;
    return n;
  }, 0);
}

function $He() {
  return u() * 4;
}

var x = "[OUTPUT TRUNCATED - exceeded ";

function y() {
  return `\n\n${x}${u()} token limit]\n\nThe tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`;
}

async function h(e, n) {
  let r = [], o = 0;
  for (let i of e) if (m(i)) {
    let s = n - o;
    if (s <= 0) break;
    if (i.text.length <= s) r.push(i), o += i.text.length; else {
      let c = ne(i.text, s);
      if (c) {
        let l = {
          type: "text",
          text: c
        };
        if (i._meta) l._meta = i._meta;
        r.push(l);
      }
      break;
    }
  } else if (P(i)) {
    let s = C * 4;
    if (o + s <= n) r.push(i), o += s; else {
      let c = n - o;
      if (c > 0) {
        let l = Math.floor(c * .75);
        try {
          let f = await Kks(i, l);
          if (r.push(f), f.source.type === "base64") o += f.source.data.length; else o += s;
        } catch {}
      }
    }
  } else r.push(i);
  return r;
}

async function yGt(e, n) {
  if (!e) return !1;
  let r = NHe(e);
  if (r <= u() * T) return !1;
  if (NHe(typeof e === "string" ? e : e.filter(m)) > u() * M) return !0;
  try {
    return (await qLe(typeof e === "string" ? [ {
      role: "user",
      content: e
    } ] : [ {
      role: "user",
      content: e
    } ], [], void 0, {
      credentials: n
    }) ?? r) > u();
  } catch (i) {
    return d(i), r > u();
  }
}

async function _Gt(e) {
  if (!e) return e;
  let n = $He(), r = y();
  if (typeof e === "string") return $s(e, n) + r; else {
    let o = await h(e, n);
    return o.push({
      type: "text",
      text: r
    }), o;
  }
}

async function hle(e, n) {
  if (!await yGt(e, n)) return e;
  return await _Gt(e);
}

export { gle, f5o, NHe, $He, yGt, _Gt, hle };
