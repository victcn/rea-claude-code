// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt } from "./chunk-3pqddg8f.js";

class s {
  #t=new Map;
  #n=0;
  notePost(t) {
    this.#t.set(t, (this.#t.get(t) ?? 0) + 1), this.#n++;
  }
  forgetPost(t) {
    let n = this.#t.get(t) ?? 0;
    if (n <= 1) this.#t.delete(t); else this.#t.set(t, n - 1);
    this.#n = Math.max(0, this.#n - 1);
  }
  atBound(t, n) {
    return this.postsSinceHumanTurn(t) >= n.maxSelfHops || this.#n >= n.maxChainLength;
  }
  noteHumanTurn() {
    this.#t.clear(), this.#n = 0;
  }
  postsSinceHumanTurn(t) {
    return this.#t.get(t) ?? 0;
  }
  totalPostsSinceHumanTurn() {
    return this.#n;
  }
}

var o = new lt(() => new s);
