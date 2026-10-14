// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { qp, Fn } from "./chunk-3pqddg8f.js";

import { a } from "./chunk-j016gcgm.js";

function Na() {
  if (!Le(process.env.CLAUDE_CODE_COORDINATOR_MODE)) return !1;
  if (qp() && !Fn() && !a.CLAUDE_CODE_REMOTE) return !1;
  return !0;
}

function Eoe(e) {
  return Na() && e.agentId === void 0;
}

export { Na, Eoe };
