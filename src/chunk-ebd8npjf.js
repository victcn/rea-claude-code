// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ge } from "./chunk-07cck4g7.js";

import { Mmn, $te } from "./chunk-15hpn4xn.js";

import { Nqn } from "./chunk-g7z9901y.js";

var s = "\x1b[0m";

function i(t) {
  return ge.level > 0 && t.includes(s) ? s + t.replace(/\r?\n/g, `${s}$&${s}`) + s : ge.reset(t);
}

var c = new Map(Object.entries({
  keyword: ge.blue,
  built_in: ge.cyan,
  type: ge.cyan.dim,
  literal: ge.blue,
  number: ge.green,
  regexp: ge.red,
  string: ge.red,
  subst: i,
  symbol: i,
  class: ge.blue,
  function: ge.yellow,
  title: i,
  "title.function": ge.yellow,
  "title.class": ge.blue,
  params: i,
  comment: ge.green,
  doctag: ge.green,
  meta: ge.grey,
  "meta-keyword": i,
  "meta-string": i,
  "meta.keyword": i,
  "meta.string": i,
  section: i,
  tag: ge.grey,
  name: ge.blue,
  attr: ge.cyan,
  attribute: i,
  variable: i,
  bullet: i,
  code: i,
  emphasis: ge.italic,
  strong: ge.bold,
  link: ge.underline,
  quote: i,
  addition: ge.green,
  deletion: ge.red
}));

function m(t) {
  let e = t.replace(/^hljs-/, "");
  for (;;) {
    let r = c.get(e);
    if (r) return r;
    let n = e.lastIndexOf(".");
    if (n < 0) return;
    e = e.slice(0, n);
  }
}

function d(t) {
  let e = [], r = [];
  p(t, e, r);
  let n = Nqn(r);
  if (n === r) return;
  e.forEach(({siblings: o, at: a}, l) => {
    o[a] = n[l];
  });
}

function p(t, e, r) {
  t.children.forEach((n, o) => {
    if (typeof n === "string") e.push({
      siblings: t.children,
      at: o
    }), r.push(n); else p(n, e, r);
  });
}

function u(t) {
  if (typeof t === "string") return t;
  let e = t.children.map(u).join(""), r = t.scope ?? t.kind, n = r ? m(r) : void 0;
  return n ? n(e) : e;
}

function f(t, e) {
  let r = e?.language;
  if (!r) return t;
  try {
    let n = $te(r);
    if (!n) return t;
    let o = Mmn().highlight(t, {
      language: n,
      ignoreIllegals: !0
    }), a = o._emitter ?? o.emitter, l = a?.rootNode ?? a?.root;
    if (!l || typeof l === "string") return t;
    return d(l), l.children.map(u).join("");
  } catch {
    return t;
  }
}

function y(t) {
  return $te(t) !== null;
}

var h = {
  highlight: f,
  supportsLanguage: y
};

function aB() {
  return h;
}

export { aB };
