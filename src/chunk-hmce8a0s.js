// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Lr } from "./chunk-3pqddg8f.js";

import { a } from "./chunk-j016gcgm.js";

import { GU } from "./chunk-6ah1819r.js";

import { Yn } from "./chunk-cjt10y7b.js";

import { sep as f } from "path";

var eRo = new Set([ ".git", "hooks", ".husky", ".githooks", "node_modules", ".vscode", ".idea", "head", "config", "objects", "refs", ".claude", "skills", "commands", "agents", ".cargo", ".devcontainer", ".yarn", ".mvn" ]), Rsn = /[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/, tRo = new RegExp(Rsn, "g");

function ll(e) {
  return u(e, !0);
}

function SVn(e) {
  return u(e, !1);
}

function u(e, o) {
  let n = e.toLowerCase().replace(/\u0131/g, "i").replace(/\u017f/g, "s"), t = n.replace(tRo, "");
  return (o ? t.replace(/:.*$/, "") : t).replace(/[. ]+$/, "") || n;
}

function nRo(e) {
  return !1;
}

function z9(e, o, n) {
  let t = e.slice(o.length).split(f), i = t.length - 1;
  for (let r = 0; r < t.length; r++) {
    let s = ll(t[r]);
    if (eRo.has(s) || nRo(s)) return !0;
    if (r === i && n?.has(s)) return !0;
  }
  return !1;
}

function l() {
  if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) return !1;
  return !Yn();
}

function o0s() {
  return a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && !a.CLAUDE_CODE_BYOC_ENABLE_DATADOG;
}

function c() {
  return a.CLAUDE_CODE_CUSTOM_OAUTH_URL !== void 0;
}

function c_() {
  return l() || Lr() !== null || GU() || c();
}

function bVn() {
  return l() || Lr() !== null || c();
}

function nee() {
  return a.CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL;
}

function BK() {
  if (nee()) return !1;
  return GU();
}

export { o0s, c_, bVn, nee, BK, eRo, Rsn, tRo, ll, SVn, nRo, z9 };
