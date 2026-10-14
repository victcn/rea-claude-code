// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ts } from "./chunk-xywp7esx.js";

import { fe, er } from "./chunk-dd98x6x7.js";

import { Pan } from "./chunk-w4hwgefc.js";

function lGe() {
  let e = (er() || {}).proxyAuthHelper;
  Pan({
    helper: e,
    fromProjectOrLocal: fe("projectSettings")?.proxyAuthHelper === e || fe("localSettings")?.proxyAuthHelper === e,
    trustAccepted: Ts
  });
}

export { lGe };
