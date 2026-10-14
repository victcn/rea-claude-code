// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { Po } from "./chunk-84yp45y8.js";

import { o, oe, T, u, A } from "./chunk-cvcg6n1z.js";

var kqo = "Resumed agent. Its final report is not in this message.", Tqo = "Resumed agent. Its final report follows this JSON, framed by the harness.";

function cGr({displayName: e, content: n}) {
  return `Resumed agent ${e}. Result:\n\n${Po(n, `\n`) || "(no text output)"}`;
}

var uGr = p(() => u({
  message: o().optional(),
  display: o().optional(),
  inlineHandback: u({
    displayName: o(),
    content: T(u({
      type: A("text"),
      text: o()
    }))
  }).optional().catch(void 0),
  routing: oe().optional(),
  request_id: oe().optional(),
  target: oe().optional()
}));

function pGr(e) {
  if (e.routing) return;
  if (e.request_id !== void 0 && e.target !== void 0) return;
  return e.display ?? (e.inlineHandback ? cGr(e.inlineHandback) : e.message);
}

function Aqo(e) {
  let n = uGr().safeParse(e);
  return n.success ? pGr(n.data) ?? "" : "";
}

export { kqo, Tqo, cGr, uGr, pGr, Aqo };
