// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

class s {
  #t=new Set;
  #e=new Map;
  lastBellAt=0;
  claim(t) {
    if (this.#t.has(t)) return !1;
    return this.#t.add(t), !0;
  }
  has(t) {
    return this.#t.has(t);
  }
  claimIfChanged(t, e) {
    if (this.#e.get(t) === e) return !1;
    return this.#e.set(t, e), !0;
  }
}

var L9 = new K(() => new s);

function Ji() {
  return L9.of(B().host);
}

export { L9, Ji };
