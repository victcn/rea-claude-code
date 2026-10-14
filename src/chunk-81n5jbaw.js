// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

import { mu, lq } from "./chunk-w0q7jqcp.js";

function _Se() {
  if (a.CLAUDE_CODE_REMOTE !== !0) return;
  let e = a.CLAUDE_CODE_REMOTE_SESSION_ID ?? "";
  return lq(e) ? mu(e) : void 0;
}

export { _Se };
