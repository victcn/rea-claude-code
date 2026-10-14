// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { ka } from "./chunk-e1e7nk6m.js";

import { G } from "./chunk-j706jx8h.js";

import { e } from "./chunk-xx3xgkvz.js";

function pt(y) {
  let x = w(5), {action: f, context: g, fallback: m, description: o, parens: n, bold: t} = y, i = ka(f, g, m), a;
  if (x[0] !== t || x[1] !== i || x[2] !== o || x[3] !== n) a = e(G, {
    chord: i,
    action: o,
    parens: n,
    bold: t
  }), x[0] = t, x[1] = i, x[2] = o, x[3] = n, x[4] = a; else a = x[4];
  return a;
}

export { pt };
