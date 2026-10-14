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

import { o, M, u } from "./chunk-cvcg6n1z.js";

var xne = rs({
  kind: "goal_proposal",
  payload: p(() => u({
    condition: o()
  })),
  result: p(() => u({
    approved: M(),
    explicit: M().optional()
  })),
  default: {
    approved: !1
  }
});

export { xne };
