// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, GHr, Jje } from "./chunk-3pqddg8f.js";

import { xYn } from "./chunk-ddr690nj.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { join as i } from "path";

function AN() {
  return Jje() ?? i(sfo(), q());
}

function sfo() {
  return i(Ee(), "uploads");
}

function s$n(t, e) {
  return `${t}-${u(e)}`;
}

var s = /^[A-Za-z0-9_-]{8}-/;

function o(t) {
  return xYn(t.replace(/_+$/, ""));
}

function u(t) {
  return o(t) ? t + "_" : t;
}

function Wbs(t) {
  let e = t.replace(s, "");
  if (e.endsWith("_") && o(e)) return e.slice(0, -1);
  return e || t;
}

var c = 1024;

function zbs(t, e) {
  let n = GHr();
  if (!n.has(t) && n.size >= c) {
    let r = n.keys().next().value;
    if (r !== void 0) n.delete(r);
  }
  n.set(t, e);
}

function DQt(t) {
  return GHr().get(t);
}

export { AN, sfo, s$n, Wbs, zbs, DQt };
