// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { EWn } from "./chunk-3btm71fm.js";

import { dPe } from "./chunk-nd2afwsy.js";

import { Ge } from "./chunk-chhsvfy5.js";

function sl(o, e, s) {
  let t = e && dPe(o);
  return (s ?? Ge().loadedModules).some(r => r.hooks(o) && (e === void 0 || EWn(r.matcherFor(o), e, t)));
}

export { sl };
