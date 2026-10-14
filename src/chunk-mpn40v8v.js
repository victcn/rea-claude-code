// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ee } from "./chunk-kq1bg4dg.js";

import { kp, NOe } from "./chunk-5brm0azz.js";

import { ifo, j$e, f1, rSr } from "./chunk-z655gvmz.js";

function YEt() {
  let n = kp();
  return n ? {
    entrypoint: n.toLowerCase().slice(0, 64)
  } : {};
}

function Isr() {
  let n = ifo();
  return n && !NOe() ? {
    session_id: n
  } : {};
}

var u = 36e5;

function jAn() {
  let n = ee().sessionHintsRefusedAt;
  if (n !== void 0 && Date.now() - n < u) return {};
  return {
    ...YEt(),
    ...Isr()
  };
}

function WAn() {
  ee().sessionHintsRefusedAt = Date.now();
}

var Osr = [ "entrypoint", "session_id", "request_id" ], d = new Set(Osr);

function zAn(n, s, i) {
  let o = Osr.filter(t => i[t] !== void 0);
  if (n !== 400 || o.length === 0) return [];
  let e = f1(s);
  if (!j$e.test(e)) return [];
  let r = o.filter(t => rSr(e, t));
  if (r.length > 0) return r;
  return Object.keys(i).some(t => !d.has(t) && rSr(e, t)) ? [] : o;
}

function f4t(n) {
  return n.includes("entrypoint") || n.includes("session_id");
}

function wZo(n) {
  let {entrypoint: s, session_id: i, request_id: o, ...e} = n;
  return e;
}

export { YEt, Isr, jAn, WAn, Osr, zAn, f4t, wZo };
