// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { GIe } from "./chunk-q6wab2jw.js";

function wne(e, n) {
  let p = n.map(o => o.mcpInfo === void 0 || o.mcpInfo.scope === e.config.scope && o.mcpInfo.pluginSource === e.config.pluginSource ? o : {
    ...o,
    mcpInfo: GIe(e)
  });
  return p.every((o, s) => o === n[s]) ? n : p;
}

export { wne };
