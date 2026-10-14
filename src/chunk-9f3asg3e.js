// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { je } from "./chunk-s2t7g8m9.js";

function WUt(e) {
  if (e.toolName === je) {
    if (!e.ruleContent) return {
      prefix: "Any Bash command"
    };
    if (e.ruleContent.endsWith(":*") || e.ruleContent.endsWith(" *")) return {
      prefix: "Any Bash command starting with ",
      emphasis: e.ruleContent.slice(0, -2)
    };
    return {
      prefix: "The Bash command ",
      emphasis: e.ruleContent
    };
  }
  if (!e.ruleContent) return {
    prefix: "Any use of the ",
    emphasis: e.toolName,
    suffix: " tool"
  };
  return null;
}

export { WUt };
