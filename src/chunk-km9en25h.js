// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Uh } from "./chunk-9tdwgnpn.js";

function* i(n) {
  for (let s of n) if (s.type === "assistant" && Array.isArray(s.message.content)) {
    for (let e of s.message.content) if (e.type === "tool_use" && Uh.includes(e.name)) {
      let {input: t} = e;
      if (typeof t === "object" && t !== null && "command" in t && typeof t.command === "string") yield t.command;
    }
  }
}

function N_n(n) {
  let s = new Set;
  for (let e of i(n)) {
    let t = m(e);
    if (t) s.add(t);
  }
  return s;
}

var a = /https?:\/\/([^\s/?#'"`<>\\)\];&|(,]+)/gi;

function c(n) {
  if (!n) return [];
  let s = [];
  for (let e of n.matchAll(a)) {
    let t = e[1].toLowerCase(), o = t.lastIndexOf("@");
    if (o !== -1) t = t.slice(o + 1);
    let r = t.indexOf(":");
    if (r !== -1) t = t.slice(0, r);
    if (t) s.push(t);
  }
  return s;
}

function $_n(n) {
  let s = new Set;
  for (let e of i(n)) for (let t of c(e)) s.add(t);
  return s;
}

function Z4o(n) {
  let s = new Set;
  for (let e of n) if (e.type === "assistant" && Array.isArray(e.message.content)) {
    for (let t of e.message.content) if (t.type === "tool_use") s.add(t.name);
  }
  return s;
}

var f = new Set([ "sudo" ]);

function m(n) {
  if (!n) return;
  let s = n.trim().split(/\s+/);
  for (let e of s) {
    if (/^[A-Za-z_]\w*=/.test(e)) continue;
    if (f.has(e)) continue;
    return e;
  }
  return;
}

export { N_n, $_n, Z4o };
