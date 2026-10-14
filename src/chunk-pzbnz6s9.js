// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
class o {
  gate=null;
  register(e) {
    this.gate = e;
  }
  isOpen() {
    return this.gate?.() === !0;
  }
}

var r = new o;

function pTs(e) {
  r.register(e);
}

function fTs() {
  return r.isOpen();
}

export { pTs, fTs };
