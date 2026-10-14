// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { createHash as r } from "crypto";

var pS = /^[0-9a-f]{64}$/;

function at(e) {
  if (typeof e !== "string" && !ArrayBuffer.isView(e)) throw Object.assign(TypeError("sha256Hex: the data is neither text nor bytes"), {
    code: "ERR_INVALID_ARG_TYPE"
  });
  return r("sha256").update(e).digest("hex");
}

export { pS, at };
