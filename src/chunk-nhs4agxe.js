// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
class UDe {
  #e=new Map;
  remember(i) {
    for (let e of i) this.#e.delete(e.id), this.#e.set(e.id, e);
    for (let e of this.#e.keys()) {
      if (this.#e.size <= 512) break;
      this.#e.delete(e);
    }
  }
  get(i) {
    return this.#e.get(i);
  }
  clear() {
    this.#e.clear();
  }
}

export { UDe };
