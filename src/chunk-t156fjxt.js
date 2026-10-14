// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { DR } from "./chunk-5axbzaq8.js";

var yf = Symbol("untrustedArray.unreadable"), fK = "<unreadable list>";

function pv(e) {
  let n;
  try {
    if (!Array.isArray(e)) return;
    n = e.length;
  } catch {
    return yf;
  }
  if (typeof n !== "number" || !Number.isSafeInteger(n) || n < 0 || n > DR) return yf;
  let u = [];
  for (let r = 0; r < n; r++) {
    let t;
    try {
      t = e[r];
    } catch {
      t = void 0;
    }
    u.push(t);
  }
  return u;
}

function ZSe(e) {
  let n = pv(e);
  return n === yf ? void 0 : n;
}

export { yf, fK, pv, ZSe };
