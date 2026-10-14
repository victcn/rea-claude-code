// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var Ohe = 10, Mhe = 2e3;

function Hhe(m, n, t = Date.now) {
  let e = m, o = t();
  function r() {
    let k = t(), u = Math.floor((k - o) / n);
    if (u > 0) e = Math.min(m, e + u), o += u * n;
  }
  return {
    tryConsume() {
      if (r(), e > 0) return e--, !0;
      return !1;
    },
    tokens() {
      return r(), e;
    },
    msUntilToken() {
      if (r(), e > 0) return 0;
      return Math.max(0, o + n - t());
    }
  };
}

export { Ohe, Mhe, Hhe };
