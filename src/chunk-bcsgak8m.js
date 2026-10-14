// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { A_ } from "./chunk-84yp45y8.js";

import { w } from "./chunk-9rj1xaxr.js";

import { e } from "./chunk-xx3xgkvz.js";

import { Kt, Ae, F } from "./chunk-cpyd3eya.js";

F();

var u = Kt(void 0);

function P7e(d) {
  let c = w(3), {queue: t, children: r} = d, o;
  if (c[0] !== r || c[1] !== t) o = e(u.Provider, {
    value: t,
    children: r
  }), c[0] = r, c[1] = t, c[2] = o; else o = c[2];
  return o;
}

function Su() {
  return Ae(u) ?? A_();
}

export { P7e, Su };
