// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { tt } from "./chunk-bamccw3w.js";

var a = "./SKILL-8e6c8b5d.md.zst";

var A = tt(a, import.meta.dirname);

var t = "./template.html-38b74715.txt.zst";

var D = tt(t, import.meta.dirname);

var m = "./merge-state.mjs-7a4f2728.txt.zst";

var l = tt(m, import.meta.dirname);

var o = A, c = {
  "template.html": D,
  "merge-state.mjs": l
};

export { c as SKILL_FILES, o as SKILL_MD };
