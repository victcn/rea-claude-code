// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { t } from "./chunk-kawq2919.js";

class Kke {
  #e=!1;
  #t=Me();
  get settled() {
    return this.#e;
  }
  settle() {
    if (this.#e) return;
    this.#e = !0;
    try {
      this.#t.emit();
    } catch (e) {
      t(`CountedAsk: a listener threw while the request settled: ${String(e)}`, {
        level: "error"
      });
    }
    this.#t.clear();
  }
  settleWhen(e) {
    e.then(() => this.settle(), () => this.settle());
  }
  onSettle(e) {
    return this.#t.subscribe(e);
  }
}

class VGr {
  #e=new Map;
  #t=0;
  #i=Me();
  subscribe=e => this.#i.subscribe(e);
  join(e) {
    if (e.settled || this.#e.has(e)) return;
    this.#e.set(e, e.onSettle(() => this.#s(e))), this.#i.emit();
  }
  positionLabel(e) {
    if (!this.#e.has(e)) return null;
    let i = this.#t + this.#e.size;
    return i < 2 ? null : `${this.#t + 1} of ${i}`;
  }
  #s(e) {
    let i = this.#e.get(e);
    if (i === void 0) return;
    i(), this.#e.delete(e), this.#t = this.#e.size === 0 ? 0 : this.#t + 1, this.#i.emit();
  }
}

export { Kke, VGr };
