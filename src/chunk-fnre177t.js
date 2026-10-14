// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { fi } from "./chunk-ar8d6cs7.js";

function ehe(n) {
  let e = fi(n.client);
  return e != null && "transport" in e && e.transport === void 0;
}

function the(n, e) {
  return n === e || n?.type === "connected" && e?.type === "connected" && n.client === e.client;
}

export { ehe, the };
