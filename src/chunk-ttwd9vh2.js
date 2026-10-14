// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
class mDe {
  #e=void 0;
  #n=!1;
  provide(e) {
    this.#e = e;
  }
  canAsk() {
    return this.#e !== void 0;
  }
  askOnce({workerEpoch: e, deadlineMs: n}) {
    if (this.#e === void 0 || this.#n) return !1;
    return this.#n = !0, this.#e({
      subtype: "remote_tools_reannounce",
      worker_epoch: e,
      deadline_ms: n
    }, AbortSignal.timeout(n)), !0;
  }
}

export { mDe };
