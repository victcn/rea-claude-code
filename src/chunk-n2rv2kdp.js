// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { n } from "./chunk-3vw306fv.js";

import { w } from "./chunk-9rj1xaxr.js";

import { Zo } from "./chunk-a5nr78wg.js";

import { e } from "./chunk-xx3xgkvz.js";

function AA(m) {
  let R = w(2), {children: f, exitActive: o, onInterrupt: l} = m, s = o === void 0 ? !0 : o, {pending: u, keyName: x} = Zo(void 0, l, s);
  const t = u ? `Press ${x} again to exit` : f;
  let r;
  if (R[0] !== t) r = e(n, {
    dimColor: !0,
    children: t
  }), R[0] = t, R[1] = r; else r = R[1];
  return r;
}

export { AA };
