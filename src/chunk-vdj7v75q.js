// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
class a {
  availability=() => !1;
  register(i) {
    this.availability = i;
  }
  isAvailable() {
    return this.availability();
  }
}

var e = new a;

function Ebs(i) {
  e.register(i);
}

function F$e() {
  return e.isAvailable();
}

export { Ebs, F$e };
