// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { bs } from "./chunk-zzhmvqjt.js";

var E1n = "in-process";

class jTs {
  captured=null;
  cliOverride=null;
  setCliOverride(e) {
    this.cliOverride = e;
  }
  capture(e) {
    this.captured = e;
  }
  replaceWith(e) {
    this.captured = e, this.cliOverride = null;
  }
}

var tGs = new K(() => new jTs);

function o() {
  return tGs.of(B().host);
}

function E6s(e) {
  o().setCliOverride(e);
}

function W_o() {
  return o().cliOverride;
}

function z_o(e) {
  o().replaceWith(e), t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`);
}

function G_o() {
  return o().captured !== null;
}

function UEr() {
  let e = o();
  if (e.cliOverride) e.capture(e.cliOverride), t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`); else e.capture(bs("teammateMode", E1n).value), 
  t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`);
}

function xMt() {
  let e = o();
  if (e.captured === null) d(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")), 
  UEr();
  return e.captured ?? E1n;
}

export { E1n, jTs, tGs, E6s, W_o, z_o, G_o, UEr, xMt };
