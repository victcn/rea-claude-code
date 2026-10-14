// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ne } from "./chunk-5wbhf1bk.js";

import { si } from "./chunk-9yajep3y.js";

function EGe(n) {
  return n.replace(/[\r\n\u2028\u2029]+/g, " ");
}

function vHe(n, r) {
  let e = si(n);
  if (e.length <= r) return e;
  let t = ne(e, r), o = Array.from(e.slice(t.length)).length;
  return `${t} \u2026 (${o} more characters follow that are NOT shown in this message)`;
}

export { EGe, vHe };
