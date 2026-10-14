// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Z5 } from "./chunk-5brm0azz.js";

import { Oo, fn } from "./chunk-f1zpf9me.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { hC } from "./chunk-xywp7esx.js";

import { sQ, eF } from "./chunk-btyj9pkf.js";

import { cr } from "./chunk-2kgjyw8x.js";

function xsr(e) {
  return `This cloud session's network access follows the "Allow network egress" setting for Cowork in claude.ai, not an environment allowlist. To allow direct artifact reads here, an organization admin (or the user, on an individual plan) can turn that setting on and either allow all domains or add ${e} to its additional allowed domains.`;
}

class o {
  availability=() => !1;
  register(e) {
    this.availability = e;
  }
  isAvailable() {
    return this.availability();
  }
}

var a = new o;

function _Zo(e) {
  a.register(e);
}

function p4t() {
  return a.isAvailable();
}

var Psr = new o;

function bZo(e) {
  Psr.register(e);
}

function BAn() {
  return Psr.isAvailable() ? `read it with the ${fn} tool (action: "read", url)` : `${cr} the url`;
}

function SZo() {
  return p4t() ? `for a workshop page use the ${fn} tool's read_page_data action with schema "workshop-decisions" \u2014 the workshop skill forbids a content read there; otherwise ${BAn()}` : BAn();
}

function rde(e) {
  let t = e !== "plain" && p4t(), n = BAn(), r = Oo(), s = ee().contentHostEgressDenied.has(r) && !(sQ() && !eF(hC)), i = r === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
  return {
    readRemedy: t ? `for a workshop page use the ${fn} tool's read_page_data action with schema "workshop-decisions" \u2014 the workshop skill forbids a content read and force there; otherwise ${n}` : n,
    forceAdvisory: t ? "" : " force:true discards that newer version \u2014 someone's save from the page itself, or another session's publish \u2014 so use it only when the user explicitly asks to overwrite.",
    contentReadsBlocked: s ? Z5() ? `The artifact content host is blocked from this session, so the live version can be neither read nor handed over here. ${xsr(i)} Tell the user, and publish again only once you can build on the live version.` : `This environment's network allowlist blocks the artifact content host, so the live version can be neither read nor handed over here until ${i} is added at environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access. Tell the user, and publish again only once you can build on the live version.` : null
  };
}

export { xsr, _Zo, p4t, Psr, bZo, BAn, SZo, rde };
