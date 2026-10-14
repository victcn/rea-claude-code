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

import { o, M, lf, u } from "./chunk-cvcg6n1z.js";

var $g = rs({
  kind: "local_jsx",
  payload: p(() => u({
    nodeId: o(),
    commandName: o(),
    immediate: M(),
    hidesPrompt: M(),
    holdsQueue: M().optional()
  })),
  result: p(() => lf()),
  default: null,
  userInvoked: !0,
  hideWhile: []
}), t = p(() => u({
  holdsQueue: M().optional()
}));

function Nvt(a) {
  return a.open.some(e => e.kind === $g.kind && t().safeParse(e.payload).data?.holdsQueue !== !1);
}

var n6r = new Set([ "rate-limit-options", "pro-trial-expired" ]);

export { $g, Nvt, n6r };
