// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { AR } from "./chunk-9tdwgnpn.js";

function DZn(e) {
  return AR() ? e : void 0;
}

function wle(e) {
  return DZn(e.proactivityLevel);
}

function XSn(e, t) {
  let i = DZn(t);
  return {
    permissionMode: e ?? (i === void 0 ? void 0 : "default"),
    proactivityLevel: i
  };
}

export { DZn, wle, XSn };
