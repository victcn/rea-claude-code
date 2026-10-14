// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Xin } from "./chunk-q6wab2jw.js";

import { amt, HIe, Lie } from "./chunk-dd98x6x7.js";

function Zxe() {
  if (!amt()) throw Error("the MDM settings have not been read yet");
  if (Lie()) throw Error("an admin-owned settings document could not be read");
  if (Xin() !== void 0) throw Error("the managed-settings path was overridden");
  let e = HIe()[0]?.forceLoginOrgUUID;
  if (e === void 0) return;
  return typeof e === "string" ? [ e ] : e;
}

export { Zxe };
