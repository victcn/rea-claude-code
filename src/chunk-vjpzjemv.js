// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { San } from "./chunk-1z2heevg.js";

function HQt(t, e) {
  let n = t.get(e);
  if (n) return n;
  let i = l(e), o;
  for (let [c, s] of t) {
    let r = l(c);
    if (!r.includes("*")) {
      if (r === i) return s;
    } else if (o === void 0 && f(r, i)) o = s;
  }
  return o;
}

function l(t) {
  if (!t.startsWith("domain:")) return t;
  return `domain:${t.slice(7).toLowerCase().replace(/(?<=[^*.])\.+(?=(:\d+)?$)/, "")}`;
}

var a = ".:";

function f(t, e) {
  if (!t.startsWith("domain:") || !e.startsWith("domain:")) return !1;
  if (t === "domain:*") return !0;
  let n = u(t.slice(7)), i = u(e.slice(7));
  if (!n.startsWith("*.")) return San(n, i, a);
  let o = n.slice(2), c = 1;
  for (let d of o) if (a.includes(d)) c++;
  let s = i.length;
  while (c > 0 && s > 0) if (s--, a.includes(i.charAt(s))) c--;
  let r = i.slice(0, s + 1);
  return c === 0 && !r.startsWith(".") && !r.includes("..") && !r.includes(":") && San(o, i.slice(s + 1), a);
}

function u(t) {
  return t.replace(/[^\0-\x7f]/g, e => {
    let n = e.toUpperCase();
    return n.length === 1 && n.charCodeAt(0) > 127 ? n : e;
  });
}

function vbs(t, e) {
  let n = l(`domain:${t}`), i = l(`domain:${e}`);
  return n.includes("*") ? f(n, i) : n === i;
}

export { HQt, vbs };
