// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { w } from "./chunk-9rj1xaxr.js";

import { Kt, Ae, F } from "./chunk-cpyd3eya.js";

F();

var yS = Kt(null);

function pl() {
  return Ae(yS) !== null;
}

function is(o) {
  let c = w(3), l = Ae(yS), n;
  if (c[0] !== l || c[1] !== o) n = l ? {
    rows: l.rows,
    columns: l.columns
  } : o, c[0] = l, c[1] = o, c[2] = n; else n = c[2];
  return n;
}

function Ege() {
  return Ae(yS)?.scrollViewport ?? null;
}

function H7e() {
  return Ae(yS)?.claimScrollBox ?? null;
}

export { yS, pl, is, Ege, H7e };
