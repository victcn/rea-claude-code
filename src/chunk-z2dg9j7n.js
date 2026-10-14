// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { nG } from "./chunk-xywp7esx.js";

import { p } from "./chunk-jkzenvsk.js";

import { wY } from "./chunk-bjsp1prn.js";

import { v, u } from "./chunk-cvcg6n1z.js";

var o = 6e4, r = 18e5, t = 2592e6, i = p(() => u({
  recurringFrac: v().min(0).max(1),
  recurringCapMs: v().int().min(0).max(r),
  oneShotMaxMs: v().int().min(0).max(r),
  oneShotFloorMs: v().int().min(0).max(r),
  oneShotMinuteMod: v().int().min(1).max(60),
  recurringMaxAgeMs: v().int().min(0).max(t).default(wY.recurringMaxAgeMs),
  cacheLeadMs: v().int().min(0).max(6e4).default(wY.cacheLeadMs)
}).refine(n => n.oneShotFloorMs <= n.oneShotMaxMs));

function Yq() {
  let n = nG("tengu_kairos_cron_config", wY, o), e = i().safeParse(n);
  return e.success ? e.data : wY;
}

export { Yq };
