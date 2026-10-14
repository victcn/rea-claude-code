// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { eot } from "./chunk-84yp45y8.js";

function tjr(s, r = []) {
  let t = s.message.content;
  if (!Array.isArray(t)) return "";
  let o = eot();
  if (o.size === 0) return "";
  return t.flatMap(e => {
    if (e.type !== "tool_use") return [];
    if (!o.has(e.name)) return r.filter(n => n.replCallId === e.id).map(n => n.text);
    let i = e.input?.text;
    return typeof i === "string" ? [ i ] : [];
  }).filter(Boolean).join(`\n`);
}

var p = 8;

class njr {
  #t=[];
  note(s, r) {
    let t = r.text;
    if (typeof t !== "string" || !t) return;
    if (this.#t.push({
      replCallId: s,
      text: t
    }), this.#t.length > p) this.#t.shift();
  }
  take() {
    return this.#t.splice(0);
  }
  clear() {
    this.#t.length = 0;
  }
}

export { tjr, njr };
