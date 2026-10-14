// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { BM, C3 } from "./chunk-84yp45y8.js";

import { er } from "./chunk-dd98x6x7.js";

function yne(t, e) {
  if (e) return t ? `agent:builtin:${t}` : "agent:default";
  return t ? `agent:custom:${t}` : "agent:custom";
}

function b2e() {
  let e = er()?.outputStyle ?? BM;
  if (e === BM) return "repl_main_thread";
  return Object.hasOwn(C3, e) ? `repl_main_thread:outputStyle:${e}` : "repl_main_thread:outputStyle:custom";
}

export { yne, b2e };
