// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Bj } from "./chunk-3pqddg8f.js";

import { k, nG } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { Yf, usn } from "./chunk-e7rgnck3.js";

import { $Re, juo } from "./chunk-hzd25ag9.js";

var t = 3e5;

function rNn() {
  return a.CLAUDE_CODE_BRIEF || nG("tengu_kairos_brief", !1, t);
}

function l6s(e) {
  if (!e.includes(Yf) && !e.includes(usn)) return !1;
  if ($Re()) return !1;
  return rNn();
}

function yO() {
  return Bj() && rNn() || juo();
}

var r = `In brief mode, plain assistant text is hidden from the user \u2014 only ${Yf} reaches them. Call it now with your substantive reply for this turn. Do not mention this reminder; the message should read as if you wrote it unprompted, addressing only what the user actually asked. If you genuinely have nothing useful to tell the user, you may end the turn without calling it.`;

function d6s() {
  let e = k("tengu_kairos_brief_stop_hook_text", "");
  return typeof e === "string" && e.length > 0 ? e : r;
}

export { rNn, l6s, yO, d6s };
