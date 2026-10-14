// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { s } from "./chunk-3vw306fv.js";

import { e } from "./chunk-xx3xgkvz.js";

function bo(m) {
  let v = w(7), {onKeyDown: o, flexDirection: i, gap: n, tabIndex: d, autoFocus: u, children: t} = m, a = i === void 0 ? "column" : i, r = d === void 0 ? 0 : d, c = u === void 0 ? !0 : u, p;
  if (v[0] !== c || v[1] !== t || v[2] !== a || v[3] !== n || v[4] !== o || v[5] !== r) p = e(s, {
    flexDirection: a,
    gap: n,
    tabIndex: r,
    autoFocus: c,
    onKeyDown: o,
    children: t
  }), v[0] = c, v[1] = t, v[2] = a, v[3] = n, v[4] = o, v[5] = r, v[6] = p; else p = v[6];
  return p;
}

export { bo };
