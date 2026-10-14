// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ct } from "./chunk-6ah1819r.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { on } from "./chunk-b47tzzqx.js";

function Zhe() {
  return eEt() === void 0;
}

function eEt() {
  if (Ct() || Oe() !== "firstParty") return "egress";
  return on("allow_remote_sessions") ? void 0 : "policy_org";
}

export { Zhe, eEt };
