// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { gr } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

import { mh } from "./chunk-4mw3z9gg.js";

function Lc() {
  return mh().backgroundTasksDisabled || a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || gr();
}

function put() {
  let n = mh();
  return n.backgroundTasksDisabled && n.backgroundLaunchRule === void 0 || n.backgroundAgentLaunchDisabled || a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || gr();
}

function uZ() {
  return Lc() || mh().backgroundAgentLaunchDisabled;
}

function fut() {
  let n = mh();
  if (!n.foregroundAgentMovesAdmitted) return uZ();
  return n.backgroundAgentLaunchDisabled || a.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS || gr();
}

function jRs() {
  let n = mh();
  return n.backgroundLaunchRule !== void 0 && !n.backgroundLaunchByDefault && !put();
}

function Utn() {
  return mh().backgroundLaunchByDefault && !put();
}

export { Lc, put, uZ, fut, jRs, Utn };
