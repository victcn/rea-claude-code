// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { tt } from "./chunk-bamccw3w.js";

import { Ne } from "./chunk-m8ez8fhk.js";

var e = Ne("./SKILL-5vqnvygj.md");

var t = "./template.html-cad26093.txt.zst";

var a = tt(t, import.meta.dirname);

var r = Ne("./SKILL-sq87gt02.md");

var o = Ne("./template.html-j5g90adz.txt");

var s = Ne("./SKILL-z3x847gz.md");

var i = "./template.html-268183fd.txt.zst";

var n = tt(i, import.meta.dirname);

var I = {
  report: s,
  "data-table": e,
  explainer: r
}, M = {
  report: {
    "template.html": n
  },
  "data-table": {
    "template.html": a
  },
  explainer: {
    "template.html": o
  }
};

export { M as SKILL_FILES, I as SKILL_MD };
