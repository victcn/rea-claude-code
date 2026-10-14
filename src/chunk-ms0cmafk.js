// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var qYe = "SearchMcpRegistry", Wuo = "Search the MCP connector registry by keyword to discover connectors that might help complete the task.", zuo = `Search the MCP connector registry by keyword. Call this when connecting to an MCP server might help complete the task \u2014 whether or not the user named a specific product.\n\nNamed-product examples:\n- "check my Asana tasks" \u2192 keywords ["asana", "tasks", "todo"]\n- "find issues in Jira" \u2192 keywords ["jira", "issues"]\n\nIntent-based examples (no product named):\n- "help me manage my tasks" \u2192 keywords ["tasks", "todo", "project management"]\n- "pull up the design mockups" \u2192 keywords ["design", "figma", "mockup"]\n\nReturns a ranked list with directoryUuid, name, description, sample tool names, installState (org-level), and enabledInChat (this session). Results include the org's custom connectors (ones the org configured that are not in the public directory) when they match the keywords. enabledInChat: false with installState: "connected" means the connector is authenticated but toggled off for this chat \u2014 its tools are not in your tool list; tell the user to enable it in this chat's connector settings. If a result looks relevant and is not installed, tell the user they could connect it via claude.ai; this tool does not itself connect anything.`;

export { qYe, Wuo, zuo };
