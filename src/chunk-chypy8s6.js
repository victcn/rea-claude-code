// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Rv } from "./chunk-q6wab2jw.js";

function PVo(e, n) {
  let a = Rv().safeParse(n.dangerouslyDisableSandbox);
  if (a.success && a.data) return {
    deniedFlag: "dangerouslyDisableSandbox",
    message: `unsandboxed execution (dangerouslyDisableSandbox) is not available to ${e}. If the command failed with a sandbox violation, the operation cannot be performed in this context \u2014 do not retry it.`
  };
  let o = Rv().safeParse(n.run_in_background);
  if (o.success && o.data) return {
    deniedFlag: "run_in_background",
    message: `run_in_background is not available to ${e} \u2014 run the command in the foreground.`
  };
  return {
    sanitizedInput: {
      ...n,
      dangerouslyDisableSandbox: !1,
      run_in_background: !1
    }
  };
}

export { PVo };
