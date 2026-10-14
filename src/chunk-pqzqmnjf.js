// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function Ta(t, i) {
  let e = 0, r = [];
  function s() {
    if (e < t) return e++, Promise.resolve();
    return new Promise(n => r.push(n));
  }
  function o() {
    let n = r.shift();
    if (n) n(); else e--;
  }
  return async (...n) => {
    await s();
    try {
      return await i(...n);
    } finally {
      o();
    }
  };
}

function qks(t, i, e) {
  let r = Ta(t, e);
  return async s => r(s, await i(s));
}

function Yks(t) {
  let i = Ta(t, e => new Promise(r => e(r)));
  return {
    acquire: () => new Promise(e => void i(e))
  };
}

export { Ta, qks, Yks };
