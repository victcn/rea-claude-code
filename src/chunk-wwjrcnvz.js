// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { pl } from "./chunk-1pxjahnn.js";

import { s } from "./chunk-3vw306fv.js";

import { jl } from "./chunk-2wkn9yp3.js";

import { e, r } from "./chunk-xx3xgkvz.js";

var Bv = 2, PI = 1, l2 = 2;

function os(d) {
  let c = w(9), {children: t, color: i} = d;
  if (pl()) {
    let o;
    if (c[0] !== t) o = e(s, {
      flexDirection: "column",
      paddingX: PI,
      flexShrink: 0,
      children: t
    }), c[0] = t, c[1] = o; else o = c[1];
    return o;
  }
  let o;
  if (c[2] !== i) o = e(jl, {
    color: i
  }), c[2] = i, c[3] = o; else o = c[3];
  let n;
  if (c[4] !== t) n = e(s, {
    flexDirection: "column",
    paddingX: Bv,
    children: t
  }), c[4] = t, c[5] = n; else n = c[5];
  let l;
  if (c[6] !== o || c[7] !== n) l = r(s, {
    flexDirection: "column",
    paddingTop: 1,
    children: [ o, n ]
  }), c[6] = o, c[7] = n, c[8] = l; else l = c[8];
  return l;
}

export { Bv, PI, l2, os };
