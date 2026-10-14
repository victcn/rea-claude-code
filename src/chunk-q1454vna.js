// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ql } from "./chunk-sfvypv11.js";

function HJo(t) {
  if (ql()) return;
  return t.standaloneAgentContext?.name;
}

function sVe(t, n) {
  let e = t.standaloneAgentContext;
  if (!Object.keys(n).some(o => e?.[o] !== n[o])) return t;
  return {
    ...t,
    standaloneAgentContext: {
      ...e,
      name: e?.name ?? "",
      ...n
    }
  };
}

export { HJo, sVe };
