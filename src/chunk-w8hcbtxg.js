// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { pOe } from "./chunk-w4hwgefc.js";

import { C } from "./chunk-m8ez8fhk.js";

var DP = C(function(s) {
  var r = pOe(), o = e => e[r.SMITHY_CONTEXT_KEY] || (e[r.SMITHY_CONTEXT_KEY] = {}), i = e => {
    if (typeof e === "function") return e;
    let t = Promise.resolve(e);
    return () => t;
  };
  s.getSmithyContext = o;
  s.normalizeProvider = i;
});

export { DP };
