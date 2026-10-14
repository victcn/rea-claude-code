// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { e } from "./chunk-xx3xgkvz.js";

import { Kt, Ae, F } from "./chunk-cpyd3eya.js";

F();

F();

var t = Kt(void 0);

function r_t() {
  return Ae(t);
}

function M8n(g) {
  let u = w(6), {isFirst: o, selectionHighlight: i, children: n} = g, r;
  if (u[0] !== o || u[1] !== i) r = {
    isQueued: !0,
    isFirst: o,
    selectionHighlight: i
  }, u[0] = o, u[1] = i, u[2] = r; else r = u[2];
  let s = r, l;
  if (u[3] !== n || u[4] !== s) l = e(t.Provider, {
    value: s,
    children: n
  }), u[3] = n, u[4] = s, u[5] = l; else l = u[5];
  return l;
}

export { r_t, M8n };
