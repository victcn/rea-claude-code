// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { tt } from "./chunk-bamccw3w.js";

var a = "./SKILL-7f2555bf.md.zst";

var e = tt(a, import.meta.dirname);

var E = "./template.html-af756034.txt.zst";

var L = tt(E, import.meta.dirname);

var Q = "./board.mjs-0bf8864f.txt.zst";

var d = tt(Q, import.meta.dirname);

var X = e, U = {
  "template.html": L,
  "board.mjs": d
};

export { U as SKILL_FILES, X as SKILL_MD };
