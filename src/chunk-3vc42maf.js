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

function sB(p) {
  let l = w(7), {children: i, subtitle: t} = p, o;
  if (l[0] !== i) o = e(n, {
    bold: !0,
    children: i
  }), l[0] = i, l[1] = o; else o = l[1];
  let c;
  if (l[2] !== t) c = t && e(n, {
    dimColor: !0,
    children: t
  }), l[2] = t, l[3] = c; else c = l[3];
  let a;
  if (l[4] !== o || l[5] !== c) a = r(s, {
    flexDirection: "column",
    children: [ o, c ]
  }), l[4] = o, l[5] = c, l[6] = a; else a = l[6];
  return a;
}

export { sB };
