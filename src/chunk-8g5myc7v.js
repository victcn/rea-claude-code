// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var Mlt = 10;

function Ffo(e) {
  if (typeof e === "string") return s(e, 9);
  if (!Array.isArray(e)) return !1;
  let t = 0;
  for (let r of e) {
    if (t += 1, t > 10) return !0;
    if (!mSe(r)) continue;
    let n = r.text, o = 0;
    while (t <= 10) {
      if (o = n.indexOf(`\n`, o), o === -1) break;
      o++, t++;
    }
    if (t > 10) return !0;
  }
  return !1;
}

function mSe(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "text" && "text" in e && typeof e.text === "string";
}

function s(e, t) {
  let r = 0;
  for (let n = 0; n <= t; n++) {
    if (r = e.indexOf(`\n`, r), r === -1) return !1;
    r++;
  }
  return !0;
}

export { Mlt, Ffo, mSe };
