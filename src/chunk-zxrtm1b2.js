// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ut } from "./chunk-8yperama.js";

var s = null;

function p3o(e) {
  let n = s;
  return s = e, n;
}

function Dwn() {
  return s;
}

var r = null;

function f3o(e) {
  let n = r;
  return r = e, n;
}

async function PJ(e) {
  return await (r?.(e)) ?? !1;
}

class iDe extends Error {
  consent;
  constructor(e) {
    super("first-party design MCP server requires consent");
    this.consent = e;
    this.name = "FirstPartyDesignNeedsConsentError";
  }
}

var t = null;

function m3o(e) {
  let n = t;
  return t = e, n;
}

function m2e() {
  return t;
}

function Lwn(e) {
  let n = Ut();
  if (n.scopeExpansionDisclosed) return;
  n.scopeExpansionDisclosed = !0, n.pendingScopeExpansionNotice = e;
}

function uqr() {
  let e = Ut(), n = e.pendingScopeExpansionNotice;
  return e.pendingScopeExpansionNotice = void 0, n;
}

function g3o() {
  let e = uqr();
  if (e) process.stderr.write(`${e}\n`);
}

export { p3o, Dwn, f3o, PJ, iDe, m3o, m2e, Lwn, uqr, g3o };
