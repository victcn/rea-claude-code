// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var rke = 8;

function w8n(o, u) {
  let e = [], n = "", t = 0;
  for (let r of o) {
    let s = l(r);
    if (t + s > u && n !== "") e.push(n), n = "", t = 0;
    n += r, t += s;
  }
  return e.push(n), e;
}

function l(o) {
  return o.length === 1 && o < "\x80" ? 1 : 2;
}

export { rke, w8n };
