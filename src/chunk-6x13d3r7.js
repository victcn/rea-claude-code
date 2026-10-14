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

import { Rl, Yr, da, tv } from "./chunk-z09tf6qf.js";

import { klt } from "./chunk-q93rjfj5.js";

async function CSn(r, o) {
  if (!klt()) return;
  try {
    let e = await Yr(r, o);
    if (!e || !da(e) || e.state === "stopped" || tv(e)) return;
    await Rl(r, {
      ...e,
      state: "stopped",
      updatedAt: (new Date).toISOString()
    }, o);
  } catch (e) {
    t(`stop not recorded on the job's row: ${l(e)}`, {
      level: "error"
    });
  }
}

export { CSn };
