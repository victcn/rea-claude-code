// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { rXe, F1e, sOe, xOr } from "./chunk-jnzpsr0d.js";

import { tIn } from "./chunk-84yp45y8.js";

function dbn(e, o) {
  return e === o || e.behavior === "ask" && e.forcedByCaller === !0;
}

function cbn(e) {
  return e === rXe || e === F1e || e === sOe || e === xOr || tIn(e);
}

function JYo(e) {
  return e === sOe;
}

export { dbn, cbn, JYo };
