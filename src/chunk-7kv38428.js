// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ys } from "./chunk-2v9tfgc3.js";

var g = /^[A-Za-z0-9][A-Za-z0-9-]*$/, a = new Set([ "restricted" ]), ZGo = [ "system-prompt-file", "append-system-prompt-file", "append-subagent-system-prompt-file" ];

function Ok(t, e) {
  return `${t}=${e}`;
}

function SXn(t, e) {
  let n = String(e);
  if (n.length > 1 && n.startsWith("-")) return [ Ok(t, n) ];
  return [ t, n ];
}

function Tjt(t, e, n) {
  t.push(...SXn(`--${e}`, n));
}

function ihn(t, e, n, o) {
  let i = 0;
  for (let [r, s] of Object.entries(e)) {
    if (!g.test(r)) {
      o("malformed", JSON.stringify(r));
      continue;
    }
    if (n.has(r)) {
      o("blocked", r);
      continue;
    }
    if (a.has(r)) {
      if (!ys(String(s))) t.push(`--${r}`), i++;
      continue;
    }
    if (s !== "") Tjt(t, r, s), i++;
  }
  return i;
}

export { ZGo, Ok, SXn, Tjt, ihn };
