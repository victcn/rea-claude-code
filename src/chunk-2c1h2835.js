// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ZIs, BMs } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { dv } from "./chunk-9tdwgnpn.js";

import { NOe } from "./chunk-5brm0azz.js";

import { gt } from "./chunk-yebkpv3k.js";

import { xa, ZLn, EY } from "./chunk-8a4rbyjg.js";

import { Eu } from "./chunk-rkfs82vw.js";

import { wP } from "./chunk-yae7t0cr.js";

import { wO, Wws, zws, Gws, Vws } from "./chunk-jq5rsb8b.js";

import { Ba } from "./chunk-mfje7p8w.js";

var SR = "ReportFindings", huo = "Report code-review findings as a typed list so the host UI can render them. Use this only when the active code-review instructions tell you to report findings with this tool; otherwise follow whatever output format those instructions specify. When reporting a review's results, call it once with the verified findings ranked most-severe first (empty array if nothing survived verification) and do not also print the findings as text. When re-reporting after applying fixes (only if the apply instructions ask for it), set `outcome` on each finding to what actually happened.";

var m0 = "EnterWorktree";

var MRe = "ShareOnboardingGuide", yuo = `Upload the ONBOARDING.md in the current directory and return a share link teammates can open in Claude Code. Call this after the user has confirmed the final content.\n\nWhen called with the default mode='check': if a local ONBOARDING.md is present, uploads it to the most-recently-updated org guide (or creates one if none exist) and returns a fresh link. If no local file is present, returns the existing link without uploading (status: has_existing).`;

var u = import.meta.require("./chunk-y4zafmyf.js").BRIEF_TOOL_NAME, d = new Set([ SR, Eu, MRe ]), c = `Fetches full schema definitions for deferred tools so they can be called.\n\nDeferred tools appear by name in <system-reminder> messages.`, m = " Until fetched, only the name is known \u2014 there is no parameter schema, so the tool cannot be invoked.", p = ` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`, h = ` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.\n\nResult format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.\n\nQuery forms:\n- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name\n- "notebook jupyter" \u2014 keyword search, up to max_results best matches\n- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;

function g8(e, r) {
  return ZIs(e.name) ?? S$e(e, r);
}

function S$e(e, r) {
  if (e.alwaysLoad === !0) return !1;
  if (O(e, r)) return !1;
  if (ZLn()) return !1;
  return T(e);
}

function T(e) {
  if (e.isMcp === !0) return !0;
  if (Wws() && dv(e, d)) return !0;
  if (dv(e, zws())) return !0;
  return e.shouldDefer === !0;
}

function O(e, r) {
  return s(e, r) || E(e) || l(e);
}

function s(e, r = wO()) {
  if (dv(e, r)) return !0;
  if (e.isMcp === !0) return !1;
  if (e.name === Ba) return !0;
  if (e.name === xa) return !0;
  if (e.name === gt) {
    let t = import.meta.require("./chunk-karzmqgd.js");
    if (t.isForkSubagentEnabled()) return !0;
  }
  if (e.name === u) return !0;
  if (l(e) && !Vws()) return !0;
  return !1;
}

function E(e) {
  return e.isMcp !== !0 && e.name === m0 && a.CLAUDE_CODE_SESSION_KIND === "bg";
}

function l(e) {
  return e.isMcp !== !0 && e.name === wP && NOe();
}

function w7(e, r, t, {toolSearchAbsent: f = !1, placements: o = "hooks", nonDeferrableBuiltins: n} = {}) {
  let i = o === "hooks" ? ZIs(e.name) : void 0;
  if (i !== void 0) return i;
  if (f) {
    if (r === void 0) return !1;
  } else if (r === void 0) return o === "hooks" ? g8(e, n) : S$e(e, n);
  if (t !== void 0 && EY(t)) return !1;
  if (s(e, n)) return !1;
  return !r.has(e.name);
}

function _uo(e) {
  let r = Gws(e.name) ?? e.whenToUse;
  return r !== void 0 && g8(e) ? `${e.name}: ${r}` : e.name;
}

function b_r() {
  return c + (BMs() ? p : m) + h;
}

export { m0, SR, huo, MRe, yuo, g8, S$e, w7, _uo, b_r };
