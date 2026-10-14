// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t } from "./chunk-kawq2919.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { ZL, SQ, FB, XD, L3 } from "./chunk-84yp45y8.js";

import { One } from "./chunk-f666ssrg.js";

async function mVe() {
  ZL(), XD(), SQ(), L3(), FB.emit();
  try {
    await One.rehome(), g("skill_directory_reload");
  } catch (r) {
    t(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${r}`, {
      level: "error"
    }), f("skill_directory_reload", "rehome_failed");
  }
}

export { mVe };
