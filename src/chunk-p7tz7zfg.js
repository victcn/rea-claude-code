// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { r_, GS } from "./chunk-xywp7esx.js";

import { Kv } from "./chunk-84yp45y8.js";

function o(e) {
  let t = r_(e);
  return t === r_("") ? "(unnamed agent)" : t;
}

function r(e, t, i) {
  return `${o(e)} agent: ${GS(t, i)}`;
}

function s(e, t, i) {
  return {
    type: "notification",
    notification: {
      key: `agent-model-restricted-${o(e)}-${r_(t)}`,
      text: r(e, t, i),
      priority: "medium",
      color: "warning",
      timeoutMs: 1e4
    }
  };
}

function cvn(e, t) {
  return (i, n) => {
    t?.(s(e, i, n));
  };
}

function kTe(e, t) {
  return (i, n) => {
    t?.(Kv(r(e, i, n), "warning"));
  };
}

export { cvn, kTe };
