// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { hDr } from "./chunk-3pqddg8f.js";

var h0 = {
  red: "red_FOR_SUBAGENTS_ONLY",
  blue: "blue_FOR_SUBAGENTS_ONLY",
  green: "green_FOR_SUBAGENTS_ONLY",
  yellow: "yellow_FOR_SUBAGENTS_ONLY",
  purple: "purple_FOR_SUBAGENTS_ONLY",
  orange: "orange_FOR_SUBAGENTS_ONLY",
  pink: "pink_FOR_SUBAGENTS_ONLY",
  cyan: "cyan_FOR_SUBAGENTS_ONLY"
}, fb = Object.keys(h0);

function sz(e) {
  return e !== void 0 && fb.includes(e);
}

function P$e(e) {
  return e.userOverride ?? e.agentDefinitionColor;
}

function I$e(e) {
  if (e === "general-purpose") return;
  let n = hDr().get(e);
  if (n && fb.includes(n)) return h0[n];
  return;
}

function rlt(e, o) {
  let n = hDr();
  if (!o) {
    n.delete(e);
    return;
  }
  if (fb.includes(o)) n.set(e, o);
}

export { h0, fb, sz, P$e, I$e, rlt };
