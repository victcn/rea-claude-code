// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

function Ka() {
  let _ = a.MCP_TIMEOUT;
  return _ && _ > 0 ? Math.min(_, 2147483647) : 3e4;
}

function g$e() {
  let _ = a.MCP_CONNECT_TIMEOUT_MS;
  return _ && _ > 0 ? Math.min(_, 2147483647) : 5e3;
}

var due = 2e3, pys = 8e3, fys = 500;

export { Ka, g$e, due, pys, fys };
