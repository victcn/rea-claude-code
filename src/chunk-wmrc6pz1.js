// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ne } from "./chunk-5wbhf1bk.js";

import { pEe } from "./chunk-pnn4xyvt.js";

var KMo = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/, a = /<command-name>(.*?)<\/command-name>/;

function zXe(e, i) {
  if (e.type !== "user") return;
  if (e.isMeta === !0 || e.isCompactSummary === !0) return;
  let s = e.message;
  if (!s) return;
  let r = s.content, o = [];
  if (typeof r === "string") o.push(r); else if (Array.isArray(r)) for (let t of r) {
    if (!t || typeof t !== "object") continue;
    if (t.type === "tool_result") return;
    if (t.type === "text" && typeof t.text === "string") o.push(t.text);
  }
  for (let t of o) {
    let n = pEe(t).replaceAll(`\n`, " ").trim();
    if (!n) continue;
    let c = a.exec(n);
    if (c) {
      if (!i.commandFallback) i.commandFallback = c[1];
      continue;
    }
    let u = /<bash-input>([\s\S]*?)<\/bash-input>/.exec(n);
    if (u) return `! ${u[1].trim()}`;
    if (KMo.test(n)) continue;
    if (n.length > 200) n = ne(n, 200).trim() + "\u2026";
    return n;
  }
  return;
}

export { KMo, zXe };
