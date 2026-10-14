// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { st, s, n } from "./chunk-3vw306fv.js";

import { e, r } from "./chunk-xx3xgkvz.js";

function mp(u) {
  let h = w(10), {children: i, color: o, title: t} = u, f = st();
  const l = f ? void 0 : "round", m = f ? 0 : 1, a = t ? 1 : 0;
  let c;
  if (h[0] !== o || h[1] !== t) c = t && e(n, {
    bold: !0,
    color: o,
    children: t
  }), h[0] = o, h[1] = t, h[2] = c; else c = h[2];
  let y;
  if (h[3] !== i || h[4] !== o || h[5] !== l || h[6] !== m || h[7] !== a || h[8] !== c) y = r(s, {
    borderStyle: l,
    borderColor: o,
    flexDirection: "column",
    paddingX: m,
    gap: a,
    children: [ c, i ]
  }), h[3] = i, h[4] = o, h[5] = l, h[6] = m, h[7] = a, h[8] = c, h[9] = y; else y = h[9];
  return y;
}

export { mp };
