// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, Cn } from "./chunk-hwdwjvh8.js";

function ye(n) {
  if (n == null) return;
  return /^[A-Za-z0-9_-]{1,128}$/.test(n) ? Cn(n) : b("nonconforming");
}

function m$t(n) {
  return Cn(n.map(r => ye(r)).join(","));
}

export { ye, m$t };
