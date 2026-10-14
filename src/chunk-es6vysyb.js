// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
class e {
  availability=() => !1;
  register(i) {
    this.availability = i;
  }
  isAvailable() {
    return this.availability();
  }
}

var a = new e;

function $Qo(i) {
  a.register(i);
}

function ES() {
  return a.isAvailable();
}

export { $Qo, ES };
