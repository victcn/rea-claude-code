// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Mf, gx } from "./chunk-3pqddg8f.js";

import { iP } from "./chunk-z09tf6qf.js";

import { ar } from "./chunk-nnrb0acr.js";

import { $w } from "./chunk-x5881pc6.js";

function BEn(e, n) {
  let o = $w("--fast-mode");
  if (o !== "on" && o !== "off") return;
  gx({
    ...Mf() ?? {},
    fastMode: e
  }), ar(), iP("--fast-mode", [], e ? "on" : "off", void 0, n);
}

export { BEn };
