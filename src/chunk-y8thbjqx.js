// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ce } from "./chunk-xywp7esx.js";

import { Hmn } from "./chunk-wk1aedea.js";

function Fte({newState: e, oldState: t}, n, s, p) {
  if (Hmn({
    newState: e,
    oldState: t
  }, n, void 0, s, p), e.expandedView !== t.expandedView) {
    let a = e.expandedView === "tasks";
    Ce(o => {
      if (o.showExpandedTodos === a) return o;
      return {
        ...o,
        showExpandedTodos: a
      };
    }, s);
  }
}

export { Fte };
