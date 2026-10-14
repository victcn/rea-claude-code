// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lce, Rpr, Fno, FLe } from "./chunk-84yp45y8.js";

import { de } from "./chunk-5ydr99q3.js";

import { Ia, Pve } from "./chunk-rkw37sbq.js";

function Xke() {
  return FLe() || lce(Ia, Pve());
}

function r2r() {
  if (!Xke()) return null;
  if (Fno() && !lce(Ia, Pve())) return Rpr;
  return "--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry).";
}

function A_n(r) {
  let {mode: e, isBypassPermissionsModeAvailable: o} = de(r);
  return e === "bypassPermissions" || e === "plan" && o;
}

export { Xke, r2r, A_n };
