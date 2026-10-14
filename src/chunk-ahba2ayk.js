// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { gl, AC } from "./chunk-46phtgr7.js";

import { Tp } from "./chunk-5brm0azz.js";

import { Yn } from "./chunk-cjt10y7b.js";

import { YTe } from "./chunk-dw2ksnpc.js";

import { LNn } from "./chunk-p4rtfaxg.js";

class r {
  reader=void 0;
  register(e) {
    this.reader = e;
  }
  read() {
    return this.reader?.() ?? !1;
  }
}

var o = new r;

function m3r(e) {
  o.register(e);
}

function uVe() {
  let e = AC("allow_plugin_skill_search");
  if (e === "org_denied" || e === "latched" || e === "unregistered" || e !== null && gl("hipaa")) return !1;
  if (YTe()) return !0;
  return Tp() && Yn() && o.read();
}

function KYs(e) {
  if (!LNn.includes(e)) return !0;
  return uVe();
}

export { m3r, uVe, KYs };
