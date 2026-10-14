// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Rr } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { DXe } from "./chunk-r276nwd3.js";

import { Eo } from "./chunk-ncyzf9zz.js";

import { et, ofe } from "./chunk-59na0977.js";

var Cvo = 25e3, Wxs = ` To read it anyway, up to what still fits in your context, call ${et} again with ${ofe}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`, Rvo = ` Even with ${ofe}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`, zxs = ` ${ofe} is not available where this read runs; read it in parts with offset and limit.`, xvo = 128;

class qse extends Error {
  tokenCount;
  maxTokens;
  constructor(e, t, r = "") {
    super(`File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`);
    this.tokenCount = e;
    this.maxTokens = t;
    this.name = "MaxFileReadTokenExceededError";
  }
}

var n = new WeakMap;

function Pvo(e, t) {
  n.set(e, t);
}

function kWn(e) {
  return n.get(e);
}

function i() {
  let e = a.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;
  if (e !== void 0 && e > 0) return e;
  return;
}

function eU() {
  let e = Eo();
  return e.defaultFileReadingLimits ??= {
    maxSizeBytes: DXe,
    maxTokens: i() ?? Cvo
  }, e.defaultFileReadingLimits;
}

function R3e() {
  return Rr("tengu_tab_read_sep", !1);
}

export { Cvo, Wxs, Rvo, zxs, xvo, qse, Pvo, kWn, eU, R3e };
