// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { B5 } from "./chunk-jnzpsr0d.js";

import { Xge } from "./chunk-ny0ggqe7.js";

import { zl } from "./chunk-84yp45y8.js";

function rSt(e, r, o) {
  if (zl(e.decisionReason, B5) !== void 0 || Xge(o)) return !0;
  if (r.requiresUserInteraction?.()) return !0;
  return e.forcedByCaller === !0;
}

export { rSt };
