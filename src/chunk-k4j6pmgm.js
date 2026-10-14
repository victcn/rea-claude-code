// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ha } from "./chunk-h6xggfqh.js";

function OYo(e) {
  return () => {
    let n = e(), t = ha();
    return t.disconnectedAnswerCount++, t.disconnectedAnswerTexts.add(n), n;
  };
}

function K2r() {
  return ha().disconnectedAnswerCount;
}

function MYo(e) {
  return ha().disconnectedAnswerTexts.has(e);
}

function Ozt() {
  let e = ha();
  return e.disconnectedAnswerCount > 0 || e.notConnectedSeenByPriorWorker;
}

function HYo() {
  ha().notConnectedSeenByPriorWorker = !0;
}

export { OYo, K2r, MYo, Ozt, HYo };
