// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { s, n } from "./chunk-3vw306fv.js";

import { e, r } from "./chunk-xx3xgkvz.js";

function _o(R) {
  let c = w(9), {children: t, hint: i} = R;
  if (!i) {
    let o;
    if (c[0] !== t) o = e(n, {
      dimColor: !0,
      children: t
    }), c[0] = t, c[1] = o; else o = c[1];
    return o;
  }
  let o;
  if (c[2] !== t) o = e(n, {
    dimColor: !0,
    children: t
  }), c[2] = t, c[3] = o; else o = c[3];
  let d;
  if (c[4] !== i) d = e(n, {
    dimColor: !0,
    children: i
  }), c[4] = i, c[5] = d; else d = c[5];
  let a;
  if (c[6] !== o || c[7] !== d) a = r(s, {
    flexDirection: "column",
    children: [ o, d ]
  }), c[6] = o, c[7] = d, c[8] = a; else a = c[8];
  return a;
}

export { _o };
