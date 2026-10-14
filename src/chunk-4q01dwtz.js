// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ne } from "./chunk-5wbhf1bk.js";

import { rn } from "./chunk-yxennhe9.js";

var pbe = 128, JW = /^[\x21-\x7e]+$/, _gr = "io.modelcontextprotocol/tasks";

function eoe(r) {
  return ne(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu, ""), pbe);
}

function cY(r) {
  return ne(eoe(r), 8);
}

function Rio(r) {
  if (!Number.isFinite(r) || r <= 0) return;
  return r < 1e3 ? `${r}ms` : rn(r);
}

export { pbe, JW, _gr, eoe, cY, Rio };
