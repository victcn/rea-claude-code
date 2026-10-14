// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-wdm501v6.js";

import { Bsr, nJr } from "./chunk-b1v3r807.js";

var d = /<\/(?:body|html)[\t\n\f\r />]/i;

function m(n) {
  if (!d.test(n)) return n.length;
  let e = -1, o = () => {
    e = -1;
  }, r = () => {}, {tokenizer: a, overBudget: c} = nJr({
    sourceCodeLocationInfo: !0
  }, {
    onStartTag(t) {
      let i = Bsr.get(t.tagName);
      if (i !== void 0) a.state = i, a.lastStartTagName = t.tagName;
      if (t.tagName !== "html") o();
    },
    onEndTag(t) {
      if (t.tagName !== "body" && t.tagName !== "html") o(); else if (e < 0 && t.location) e = t.location.startOffset;
    },
    onComment: r,
    onDoctype: r,
    onCharacter: o,
    onNullCharacter: o,
    onWhitespaceCharacter: r,
    onEof: r
  });
  if (a.write(n, !0), c()) return;
  return e >= 0 ? e : n.length;
}

export { m as runtimeBlockInsertionIndex };
