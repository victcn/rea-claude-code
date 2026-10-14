// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { w } from "./chunk-9rj1xaxr.js";

import { n } from "./chunk-3vw306fv.js";

import { e } from "./chunk-xx3xgkvz.js";

function ss(m) {
  let p = w(4), {error: r} = m;
  if (!r) {
    return null;
  }
  let o;
  if (p[0] !== r) o = l(r), p[0] = r, p[1] = o; else o = p[1];
  let f;
  if (p[2] !== o) f = e(n, {
    color: "error",
    children: o
  }), p[2] = o, p[3] = f; else f = p[3];
  return f;
}

export { ss };
