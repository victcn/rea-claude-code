// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { fd } from "./chunk-f3sxrxpt.js";

import { s1, fXt, Lit } from "./chunk-n4eyr3t2.js";

import { P, R, F } from "./chunk-cpyd3eya.js";

F();

function ka(e, i, t) {
  let o = fd(), n = o ? fXt(e, i, o.bindings) : void 0, r = n === void 0, f = o ? "action_not_found" : "no_context", d = R(!1);
  if (P(() => {
    if (r && !d.current) d.current = !0, Lit(e, i, t, f);
  }, [ r, e, i, t, f ]), n === void 0) return t;
  return n === null ? "" : s1(n);
}

export { ka };
