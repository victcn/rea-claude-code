// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function c5o(e, t) {
  if (e.includes("#")) return !1;
  let n = e.indexOf("?");
  if (n === -1) return !0;
  let r = e.slice(n + 1);
  if (r.includes(";") || /%(?![0-9A-Fa-f]{2})/.test(r)) return !1;
  let s = new URLSearchParams(r);
  return t.every(a => s.getAll(a).length <= 1);
}

export { c5o };
