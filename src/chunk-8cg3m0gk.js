// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var o = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  colon: ":",
  semi: ";",
  sol: "/",
  Tab: "\t",
  NewLine: `\n`
};

function s(n) {
  return n.replace(/&(?:#[xX]([0-9a-fA-F]+);?|#(\d+);?|([a-zA-Z][a-zA-Z0-9]*);)/g, (r, t, e, i) => {
    if (t !== void 0) return String.fromCodePoint(parseInt(t, 16));
    if (e !== void 0) return String.fromCodePoint(parseInt(e, 10));
    return i in o ? o[i] : r;
  });
}

function Cnt(n) {
  let r;
  try {
    r = s(n);
  } catch {
    return !1;
  }
  if (/&(?:#|[a-zA-Z][a-zA-Z0-9]*;)/.test(r)) return !1;
  let t;
  try {
    t = new URL(r, "https://artifact.invalid/");
  } catch {
    return !1;
  }
  return t.protocol === "https:" || t.protocol === "http:" || t.protocol === "mailto:";
}

export { Cnt };
