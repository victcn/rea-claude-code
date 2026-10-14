// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { k } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

var AMe = {
  heading: "Learn the moves",
  body: "Quick lessons on the things power users do \u2014 plan mode, undo, " + "subagents, memory. About 5 minutes. Come back any time with /powerup.",
  banner: "New here? Type /powerup for a 5-minute tour \u2014 modes, undo, " + "@-mentions, and how to teach Claude your rules."
};

function $$r() {
  let e = a.CLAUDE_CODE_POWERUP_ONBOARDING;
  if (e === "banner" || e === "step") return e;
  return k("tengu_birch_lantern", "off");
}

export { AMe, $$r };
