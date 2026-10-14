// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var Twn = new Set([ "agents.md", "agents.override.md", "gemini.md", ".cursorrules" ]), n = {
  instructions: 0,
  setting: 1,
  subagent: 2,
  command: 3,
  mcp: 4,
  skill: 5
};

function bwt(e) {
  return e.scope === "user" && !e.warning && e.kind !== "skill";
}

function u2e(e) {
  if (e.scope === "project") return "project";
  if (e.warning || e.kind === "skill") return "warned";
  return null;
}

function aqr(e, t) {
  let r = n[e.kind] - n[t.kind];
  if (r !== 0) return r;
  if (e.scope !== t.scope) return e.scope === "project" ? -1 : 1;
  return e.label.localeCompare(t.label);
}

export { Twn, bwt, u2e, aqr };
