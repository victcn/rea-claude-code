// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { vs } from "./chunk-q6wab2jw.js";

import { fVn } from "./chunk-8yperama.js";

function bVe(t) {
  let r = [];
  for (let o of t) {
    if (!vs(o)) continue;
    let {config: e} = o, n = e && typeof e === "object" && "url" in e && typeof e.url === "string" ? e.url : null;
    if (n !== null && fVn(n)) r.push(o);
  }
  return r.length === 1 ? r[0] : null;
}

export { bVe };
