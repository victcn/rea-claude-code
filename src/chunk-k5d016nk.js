// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function co(r) {
  return r.map(t => {
    let n = String(t);
    if (n === "") return "''";
    if (/^[A-Za-z0-9_./:=@+,-]+$/.test(n)) return n;
    return "'" + n.replaceAll("'", `'"'"'`) + "'";
  }).join(" ");
}

export { co };
