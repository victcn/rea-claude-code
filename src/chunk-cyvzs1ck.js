// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var Npn = 50;

function $pn(o) {
  let r = performance.now() + o, e = 0, n = setInterval(() => {
    let t = performance.now();
    e = Math.max(e, t - r), r = t + o;
  }, o);
  return n.unref(), {
    takeMaxMs() {
      let t = e;
      return e = 0, t;
    },
    stop() {
      return clearInterval(n), Math.max(e, performance.now() - r);
    }
  };
}

export { Npn, $pn };
