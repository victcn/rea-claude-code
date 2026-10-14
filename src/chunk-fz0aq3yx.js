// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { fn, Don, DK } from "./chunk-f1zpf9me.js";

import { bZo } from "./chunk-2egwyx4e.js";

import { Cen, PP, TEr, p_o, f_o } from "./chunk-bdevabaf.js";

import { Ba } from "./chunk-mfje7p8w.js";

bZo(() => PP() && !Cen());

var Vge = {
  name: fn,
  aliases: void 0,
  enablesCodeExecution: void 0,
  underlyingV1ToolName: void 0,
  aliasSkillToolNames: void 0,
  familyParentToolName: void 0,
  mcpInfo: void 0,
  isMcp: void 0,
  isLsp: void 0,
  searchHint: "render an HTML file to a claude.ai web page",
  briefStandalone: !0,
  shouldDefer: !1,
  whenToUse: `publishes pages on claude.ai; reads claude.ai artifact links. Load it with ${Ba} (select:${fn}) before writing any document, plan, analysis or visual, and whenever other people come up as readers, even after the work is written. Its description says whether to publish, offer a page or do neither.`,
  backgrounding: "never",
  maxResultSizeChars: DK,
  persistenceThresholdCeiling: DK,
  skipAggregateToolResultBudget: !0,
  preserveToolUseResultInSubagents: !0,
  stripToolUseResultAtCreation: !0,
  ruleContentField: Don,
  isEnabled() {
    p_o();
    let e = TEr();
    return f_o(e), e === null;
  }
};

export { Vge };
