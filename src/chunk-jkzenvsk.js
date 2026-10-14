// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
class i {
  resetters=[];
  built=[];
  lazy(e) {
    let t, r = () => {
      t = void 0;
    };
    return this.resetters.push(r), () => {
      if (t === void 0) t = e(), this.built.push(r);
      return t;
    };
  }
  builtCount() {
    return this.built.length;
  }
  releaseBuiltSince(e) {
    for (let t of this.built.splice(e)) t();
  }
  reset() {
    for (let e of this.resetters) e();
    this.built.length = 0;
  }
}

var OOr = new i;

function p(e) {
  return OOr.lazy(e);
}

export { OOr, p };
