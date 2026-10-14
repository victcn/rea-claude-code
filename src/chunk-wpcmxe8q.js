// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Hzt, Z_n } from "./chunk-7p7hesat.js";

import e from "process";

class Izt {
  constructor(t = e.stdin, r = e.stdout) {
    this._stdin = t, this._stdout = r, this._readBuffer = new Hzt, this._started = !1, 
    this._ondata = s => {
      this._readBuffer.append(s), this.processReadBuffer();
    }, this._onerror = s => {
      this.onerror?.(s);
    };
  }
  async start() {
    if (this._started) throw Error("StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.");
    this._started = !0, this._stdin.on("data", this._ondata), this._stdin.on("error", this._onerror);
  }
  processReadBuffer() {
    while (!0) try {
      let t = this._readBuffer.readMessage();
      if (t === null) break;
      this.onmessage?.(t);
    } catch (t) {
      this.onerror?.(t);
    }
  }
  async close() {
    if (this._stdin.off("data", this._ondata), this._stdin.off("error", this._onerror), 
    this._stdin.listenerCount("data") === 0) this._stdin.pause();
    this._readBuffer.clear(), this.onclose?.();
  }
  send(t) {
    return new Promise(r => {
      let s = Z_n(t);
      if (this._stdout.write(s)) r(); else this._stdout.once("drain", r);
    });
  }
}

export { Izt };
