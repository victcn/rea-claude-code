// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Cn } from "./chunk-hwdwjvh8.js";

var n = new Set([ "starting", "running", "resuming", "adopted", "crashed", "working", "blocked", "done", "stopped", "failed", "busy", "shell", "idle", "waiting" ]);

function f2(e) {
  if (e === void 0) return;
  return Cn(n.has(e) ? e : "other");
}

var t = new Set([ "cold", "spare", "adopted" ]);

function lbt(e) {
  return typeof e === "string" && t.has(e) ? e : void 0;
}

export { f2, lbt };
