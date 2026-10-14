// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { rs } from "./chunk-gc7m0yjq.js";

import { U, Wc } from "./chunk-cvcg6n1z.js";

var lne = rs({
  kind: "mcp_elicitation",
  payload: p(() => Wc(t => typeof t === "object" && t !== null && "serverName" in t && "params" in t)),
  result: p(() => Wc(t => typeof t === "object" && t !== null)),
  default: {
    action: "cancel"
  },
  holdsTop: !0
}), mle = rs({
  kind: "mcp_elicitation_waiting",
  payload: p(() => Wc(t => typeof t === "object" && t !== null && "serverName" in t && "params" in t)),
  result: p(() => U([ "dismiss", "retry", "cancel", "cancelled" ])),
  default: "cancelled"
});

function wVr(t) {
  return t === lne.kind || t === mle.kind;
}

export { lne, mle, wVr };
