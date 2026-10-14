// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { dl } from "./chunk-5wbhf1bk.js";

function xs(n, g) {
  if (!n.trim() || !g.trim()) return null;
  let c = dl(g), l = new RegExp(`<${c}(?=[\\s>])`, "gi"), e = new RegExp(`<\\/${c}>`, "gi"), s = 0;
  for (;;) {
    l.lastIndex = s;
    let t = l.exec(n);
    e.lastIndex = s;
    let o = e.exec(n);
    if (!t || !o) return null;
    let r = n.indexOf(">", t.index + t[0].length);
    if (r === -1) return null;
    e.lastIndex = r + 1;
    let i = e.exec(n);
    if (!i) return null;
    let a = o.index + o[0].length <= t.index, x = n.slice(r + 1, i.index);
    if (x && !a) return x;
    s = i.index + i[0].length;
  }
}

export { xs };
