// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { To } from "./chunk-vxr6sv7z.js";

import { EC } from "./chunk-sfvypv11.js";

function NJ(e) {
  if (e.agentId) return e.agentId;
  let n = EC();
  return n ? To(n.agentId) : void 0;
}

function P2e(e, n) {
  if (e === void 0) return !0;
  return e === n;
}

function mVt(e) {
  return e ?? "main session";
}

export { NJ, P2e, mVt };
