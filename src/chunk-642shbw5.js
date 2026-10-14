// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Cn } from "./chunk-hwdwjvh8.js";

import { at } from "./chunk-0bq6eb61.js";

function sn(r) {
  return Cn(at(r).slice(0, 12));
}

var t = /^[0-9a-f]{12}$/;

function vNt(r) {
  return t.test(r) ? Cn(r) : void 0;
}

export { sn, vNt };
