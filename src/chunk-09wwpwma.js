// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Izt } from "./chunk-wpcmxe8q.js";

class Pjt extends Izt {
  constructor(t, e) {
    super(t, e);
    let o = this._ondata;
    this._ondata = r => o(typeof r === "string" ? Buffer.from(r, "utf8") : r);
  }
}

export { Pjt };
