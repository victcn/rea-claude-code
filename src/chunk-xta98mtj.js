// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function NSn(t) {
  let e = {};
  for (let [n, r] of Object.entries(t)) {
    if (r === void 0) continue;
    if (n === "__proto__") Object.defineProperty(e, n, {
      value: r,
      writable: !0,
      enumerable: !0,
      configurable: !0
    }); else e[n] = r;
  }
  return e;
}

export { NSn };
