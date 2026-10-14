// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { rg } from "./chunk-jnzpsr0d.js";

import { Le, ys } from "./chunk-2v9tfgc3.js";

import { a } from "./chunk-j016gcgm.js";

import { fHo, g4n } from "./chunk-5brm0azz.js";

import { Vce } from "./chunk-sqb9meyh.js";

import { Sz } from "./chunk-9tdwgnpn.js";

var sKt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE", iKt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL", Ovt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED", aKt = "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON";

function ZXo(e) {
  return e.toolPermissionContext.proactivityBaseline === void 0 ? void 0 : e;
}

function fkn({toolPermissionContext: e}) {
  let t = e.proactivityBaseline;
  return t === void 0 ? {} : {
    [sKt]: t.mode
  };
}

function mkn({proactivityLevel: e, toolPermissionContext: t}) {
  let n = {
    [iKt]: e
  };
  if (t.startupModeDecidedByProactivityLevel !== void 0) n[Ovt] = "1";
  if (Sz()) n[aKt] = "1";
  return n;
}

function eJo({toolPermissionContext: e}) {
  return e.startupModeDecidedByProactivityLevel === void 0 ? {
    [Ovt]: "0"
  } : {};
}

function tJo(e) {
  return g4n(e) !== "fresh" || fHo(e).some(t => t === "--permission-mode" || t.startsWith("--permission-mode="));
}

function nJo(e) {
  let t = a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE;
  a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE");
  let n = rg(t);
  if (n === "bypassPermissions" && !e) return;
  return n;
}

function rJo() {
  let e = a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL;
  if (a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL"), Vce(e)) return e;
  a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON");
  return;
}

function oJo() {
  let e = a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON;
  return a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON"), Le(e);
}

function sJo() {
  return Vce(a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL) && Le(a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON);
}

function gkn() {
  let e = a.CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED;
  if (a.unset("CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED"), Le(e)) return !0;
  if (ys(e)) return !1;
  return;
}

export { sKt, iKt, Ovt, aKt, ZXo, fkn, mkn, eJo, tJo, nJo, rJo, oJo, sJo, gkn };
