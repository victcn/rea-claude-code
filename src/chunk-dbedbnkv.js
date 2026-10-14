// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ge } from "./chunk-chhsvfy5.js";

import { Sit } from "./chunk-sg5gpfs4.js";

var yV = o => o.link !== void 0;

var C9t = o => o.name === Sit && yV(o);

var yF = o => {
  let e = o.startsWith("classic.") || o === "tool.describe" || o === "tool.call" || o === "tool.check";
  return Ge().loadedModules.filter(t => !(e && C9t(t)));
};

export { yV, C9t, yF };
