// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function en(r) {
  let e = r / 1024;
  if (e < 1) return `${r} bytes`;
  if (e < 1024) return `${e.toFixed(1).replace(/\.0$/, "")}KB`;
  let t = e / 1024;
  if (t < 1024) return `${t.toFixed(1).replace(/\.0$/, "")}MB`;
  return `${(t / 1024).toFixed(1).replace(/\.0$/, "")}GB`;
}

function h$t(r) {
  if (r < 1e3) return `${r} B`;
  if (r < 999500) return `${Math.round(r / 1e3)} kB`;
  return `${(r / 1e6).toFixed(1).replace(/\.0$/, "")} MB`;
}

export { en, h$t };
