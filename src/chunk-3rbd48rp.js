// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var ogt = "claude.ai ", cOe = "claude_ai_";

function vn(e) {
  let r = e.replace(/[^a-zA-Z0-9_-]/g, "_");
  if (e.startsWith("claude.ai ")) r = r.replace(/_+/g, "_").replace(/^_|_$/g, "");
  return r;
}

var t = "claudeai_";

function tq(e) {
  return vn(e).toLowerCase().replace(/[-_]+/g, "_").replace(/^_|_$/g, "");
}

function eOo(e) {
  let r = `${tq(e)}_`;
  return r.startsWith("claude_ai_") || r.startsWith(t);
}

export { ogt, cOe, vn, tq, eOo };
