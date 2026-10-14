// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t0o } from "./chunk-3pqddg8f.js";

import { Ra } from "./chunk-dyg54fn6.js";

function h1r(e) {
  if (e) Ra.terminalFocusGainedAt = Date.now();
  if (!e && Ra.terminalFocus === "blurred") return;
  Ra.terminalFocus = e ? "focused" : "blurred", t0o(e), Ra.terminalFocusChanged.emit();
}

function iHe() {
  return Ra.terminalFocus !== "blurred";
}

function lJ() {
  return Ra.terminalFocus;
}

function UGo() {
  return Ra.terminalFocusGainedAt;
}

function Ake(e) {
  return Ra.terminalFocusChanged.subscribe(e);
}

export { h1r, iHe, lJ, UGo, Ake };
