// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { tt } from "./chunk-bamccw3w.js";

var d = "./SKILL-e92179a2.md.zst";

var e = tt(d, import.meta.dirname);

var r = "./artifact-workshop.html-a79fa64e.txt.zst";

var B = tt(r, import.meta.dirname);

var t = "./workshop-page.html-22624ec4.txt.zst";

var I = tt(t, import.meta.dirname);

var F = e, l = B, Q = I, P = {
  "templates/artifact-workshop.html": B,
  "templates/workshop-page.html": I
};

export { P as SKILL_FILES, F as SKILL_MD, Q as WORKSHOP_PAGE_TEMPLATE, l as WORKSHOP_TEMPLATE };
