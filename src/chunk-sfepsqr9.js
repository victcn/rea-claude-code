// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var RKt = "ListConnectors", K6r = "List the MCP connectors installed for the user's claude.ai org, optionally filtered by keyword.", q6r = `List the MCP connectors installed for the user's claude.ai org. Call this when the user asks what connectors they have. Pass keywords to filter to a topic; omit to list all.\n\nReturns name, description, whether each connector is connected at org level (connected may be null when the status check was unavailable \u2014 treat that as unknown, not disconnected), and enabledInChat (whether its tools are loaded in this session). enabledInChat: false with connected: true means the connector is authenticated but toggled off for this chat \u2014 tell the user to enable it in this chat's connector settings. To recommend connectors the user does NOT have yet, use SearchMcpRegistry \u2192 SuggestConnectors instead; this tool does not itself connect anything.`;

export { RKt, K6r, q6r };
