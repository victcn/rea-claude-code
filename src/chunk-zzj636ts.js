// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { fd } from "./chunk-f3sxrxpt.js";

import { Lit } from "./chunk-n4eyr3t2.js";

import { P, R, F } from "./chunk-cpyd3eya.js";

F();

function ms(n, e, t) {
  let r = fd(), i = r?.getDisplayText(n, e), o = i === void 0, s = r ? "action_not_found" : "no_context", u = R(!1);
  if (P(() => {
    if (o && !u.current) u.current = !0, Lit(n, e, t, s);
  }, [ o, n, e, t, s ]), o) return t;
  return i === null ? "" : i;
}

export { ms };
