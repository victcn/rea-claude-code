// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { gr } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

import { bRo, SRo, O0s, M0s } from "./chunk-2my8wpr5.js";

async function KMt(e, r = {}) {
  try {
    if (!gr()) {
      if (!a.CLAUDE_CODE_OAUTH_TOKEN && r.bgAuthSnapshot !== "leave") await bRo(e);
      await SRo(e), await O0s(e);
    }
    await M0s(e);
  } catch (o) {
    t(`Descriptor credential prime failed (non-fatal): ${l(o)}`, {
      level: "error"
    });
  }
}

export { KMt };
