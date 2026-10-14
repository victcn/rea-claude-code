// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { af } from "./chunk-xywp7esx.js";

import { Ue } from "./chunk-nvz3jsgg.js";

var $2r = Object.freeze({
  isKept: !0,
  isDenied: !1,
  context: Object.freeze([])
});

function m() {
  let o = af();
  return {
    setPromptMentionRunner: o.set,
    runPromptMention: r => {
      let e = o.get();
      return e ? e(r) : r.read(r.raised, "unhooked").then(() => $2r);
    }
  };
}

var t = Ue(m(), o => o.setPromptMentionRunner(null));

var C1s = t.runPromptMention;

var R1s = t.setPromptMentionRunner;

export { $2r, C1s, R1s };
