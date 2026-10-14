// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Mv } from "./chunk-5wbhf1bk.js";

import { stripVTControlCharacters as t } from "util";

function iu(r) {
  return t(Mv(r)).replace(/(?![\t\n])[\p{Cc}\p{Cf}\u2028\u2029]/gu, "");
}

export { iu };
