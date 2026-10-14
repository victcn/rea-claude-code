// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Eo } from "./chunk-ncyzf9zz.js";

import { a } from "./chunk-j016gcgm.js";

var n = 3;

var _ = "tengu_hazel_trellis";

function oE() {
  let e = a.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;
  if (e !== void 0) return e;
  let t = Eo();
  if (t.maxSubagentSpawnDepthFromGrowthBook === void 0) {
    let {getFeatureValue_CACHED_MAY_BE_STALE: A} = import.meta.require("./chunk-qt993hka.js"), {getCachedClientData: S} = import.meta.require("./chunk-2phrn1w8.js"), o = S()?.[_], r = u(o) ? o : A(_, n);
    t.maxSubagentSpawnDepthFromGrowthBook = u(r) ? r : n;
  }
  return t.maxSubagentSpawnDepthFromGrowthBook;
}

function u(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 1;
}

export { oE };
