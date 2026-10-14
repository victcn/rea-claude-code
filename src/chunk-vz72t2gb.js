// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { vqr, evn } from "./chunk-qne6w0br.js";

import { WKe, Kos } from "./chunk-84yp45y8.js";

import { o, T, u, A } from "./chunk-cvcg6n1z.js";

var n = 1, a = 64, s = "offer", t = p(() => o().regex(WKe).refine(Kos)), c = p(() => u({
  v: A(n),
  head: t(),
  branch: o().min(1).max(vqr).refine(evn),
  ancestors: T(t()).max(a)
}));

function u1o(e) {
  let r = c().safeParse(e[s]);
  return r.success ? r.data : null;
}

export { u1o };
