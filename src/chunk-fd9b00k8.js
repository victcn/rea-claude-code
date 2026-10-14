// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ze, qp, Fn } from "./chunk-3pqddg8f.js";

import { ba } from "./chunk-cjt10y7b.js";

import { vt, An, Cr, ZT, Ft } from "./chunk-xywp7esx.js";

import { tO, OT } from "./chunk-84yp45y8.js";

import { randomUUID as t } from "crypto";

var o = "You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";

function rwt() {
  return vt() && An()?.billingType !== "usage_based" && ba() && qp() && !Fn() && !Ft();
}

function o2e(e) {
  return rwt() && tO(e) && e.rateLimitType === "five_hour";
}

var r = [ "five_hour", "seven_day", "seven_day_overage_included", "seven_day_opus", "seven_day_sonnet" ];

function QSn(e) {
  return rwt() && tO(e) && e.rateLimitType !== void 0 && r.includes(e.rateLimitType);
}

function s2e() {
  switch (Cr()) {
   case "pro":
    return "pro";

   case "max":
    switch (ZT()) {
     case "default_claude_max_5x":
      return "max_5x";

     case "default_claude_max_20x":
      return "max_20x";

     default:
      return "max_other";
    }

   default:
    return "other";
  }
}

function Net() {
  OT({
    agentId: Ze(),
    mode: "prompt",
    priority: "later",
    value: o,
    uuid: t(),
    origin: {
      kind: "auto-continuation"
    },
    isMeta: !0,
    skipSlashCommands: !0
  });
}

export { rwt, o2e, QSn, s2e, Net };
