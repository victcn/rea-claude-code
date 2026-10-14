// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { En } from "./chunk-kawq2919.js";

import { zie } from "./chunk-q6wab2jw.js";

function M0r(t, n) {
  let e = En(t), r = n.map(En).sort(), s = zie(e, r.map(d => ({
    name: d
  })), {
    maxEditDistance: 2
  });
  if (s) return `No MCP server named "${e}". Did you mean "${s}"? Run \`claude mcp list\` to see all.`;
  if (r.length === 0) return `No MCP server named "${e}". Run \`claude mcp add\` to add one.`;
  let o = 8, a = r.slice(0, o).join(", "), i = r.length > o ? ` (and ${r.length - o} more \u2014 run \`claude mcp list\` to see all)` : "";
  return `No MCP server named "${e}". Configured servers: ${a}${i}`;
}

function zcn(t, n, e) {
  if (e && n.length === 0) return `No MCP server named "${En(t)}". ${".mcp.json servers are awaiting approval \u2014 run `claude` in this directory to review them."}`;
  return M0r(t, n) + (e ? ` (${".mcp.json servers are awaiting approval \u2014 run `claude` in this directory to review them."})` : "");
}

export { M0r, zcn };
