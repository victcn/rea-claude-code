// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function pPe(n, e, t) {
  if (typeof t !== "function") return;
  Object.defineProperty(n, e, {
    get: t,
    enumerable: !0,
    configurable: !0
  });
}

function TWn(n, e, t) {
  if (typeof t !== "function") return;
  Object.defineProperty(n, e, {
    get: t,
    enumerable: !0,
    configurable: !0
  });
}

function AWn(n, e) {
  if (typeof e !== "function") return;
  Object.defineProperty(n, "policyGate", {
    get: e,
    enumerable: !0,
    configurable: !0
  });
}

export { pPe, TWn, AWn };
