// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { sc } from "./chunk-5wbhf1bk.js";

var nnt = 64;

function rnt(r, i) {
  let t = r;
  for (let o = 0; o < i.length; o++) {
    let {find: e, replace: a} = i[o];
    if (!sc(e) || !sc(a)) return {
      ok: !1,
      reason: "malformed",
      op: o
    };
    let n = e === "" ? -1 : t.indexOf(e);
    if (n === -1) return {
      ok: !1,
      reason: "not_found",
      op: o
    };
    if (t.indexOf(e, n + 1) !== -1) return {
      ok: !1,
      reason: "ambiguous",
      op: o
    };
    t = t.slice(0, n) + a + t.slice(n + e.length);
  }
  if (t === r) return {
    ok: !1,
    reason: "noop"
  };
  return {
    ok: !0,
    content: t
  };
}

export { nnt, rnt };
