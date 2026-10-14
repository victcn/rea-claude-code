// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { n } from "./chunk-3vw306fv.js";

import { r } from "./chunk-xx3xgkvz.js";

function Uv(b) {
  let R = w(7), {children: t, color: o, textColor: x, padded: T, bold: d, wrap: l} = b, e = T ? " " : "";
  const p = x ?? (o ? "inverseText" : void 0);
  let s;
  if (R[0] !== d || R[1] !== t || R[2] !== o || R[3] !== e || R[4] !== p || R[5] !== l) s = r(n, {
    backgroundColor: o,
    color: p,
    bold: d,
    wrap: l,
    children: [ e, t, e ]
  }), R[0] = d, R[1] = t, R[2] = o, R[3] = e, R[4] = p, R[5] = l, R[6] = s; else s = R[6];
  return s;
}

export { Uv };
