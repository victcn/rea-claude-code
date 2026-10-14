// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ip } from "./chunk-8xb6ca8t.js";

import { XE, C_ } from "./chunk-05wvva46.js";

function wJ(t, r) {
  return `${Ip(t) ?? ""}/${Ip(r) ?? ""}`;
}

function v5o(t) {
  return Ip(t) ?? "";
}

function ESn({serverName: t, toolName: r, mcpTaskId: o, toolUseId: s, pollIntervalMs: a, abortController: n, protocol: i, driveAbortController: p, ttlExpiresAt: c}) {
  let e = XE("mcp_task");
  return {
    ...C_(e, "mcp_task", wJ(t, r), s),
    type: "mcp_task",
    status: "running",
    serverName: t,
    toolName: r,
    mcpTaskId: o ?? e,
    mcpStatus: "working",
    pollIntervalMs: a,
    abortController: n,
    protocol: i,
    driveAbortController: p,
    ttlExpiresAt: c
  };
}

export { wJ, v5o, ESn };
