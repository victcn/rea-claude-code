// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { v, Sa } from "./chunk-cvcg6n1z.js";

function dH(e = v()) {
  return Sa($$e, e);
}

function $$e(e) {
  if (typeof e === "string") {
    let n = e.trim();
    if (/^[-+]?\d+(\.\d+)?$/.test(n)) {
      let r = Number(n);
      if (Number.isFinite(r)) return r;
    }
  }
  return e;
}

var m5e = "modelFacingMessage";

export { dH, $$e, m5e };
