// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Mme } from "./chunk-3pqddg8f.js";

import { r8e } from "./chunk-xywp7esx.js";

import { p } from "./chunk-jkzenvsk.js";

import { v, De, U } from "./chunk-cvcg6n1z.js";

var u = new Set([ "interrupt", "stop_task", "send_task_message", "set_permission_mode", "set_model", "set_max_thinking_tokens", "set_color", "mcp_toggle", "message_rated", "side_question", "ui_press", "ui_input", "ui_select", "ui_client_press", "ui_pane_show", "ui_close", "ui_scroll", "ui_prompt_edit" ]), _ = new Set([ "can_use_tool", "request_user_dialog", "elicitation" ]), a = new Set([ "set_model", "set_permission_mode", "set_max_thinking_tokens" ]);

function pCn(e) {
  return i(e.request) && !a.has(e.request.subtype);
}

function BZo() {
  Mme(!0);
}

function SJr(e, n) {
  switch (e.type) {
   case "user":
    return !(n?.hostOwnsOrigin === !0 && r8e(e.origin, e.isSynthetic));

   case "bash_command":
    return !0;

   case "control_request":
    return i(e.request);

   default:
    return !1;
  }
}

function i(e) {
  let n = e?.subtype;
  return typeof n === "string" && u.has(n) && e?.by !== "app";
}

function YVe(e) {
  return _.has(e.request.subtype);
}

var w4t = "x-ccr-session-writers", jZo = p(() => De({
  writers: U([ "owner_account_only", "not_owner_only" ]),
  statedAtMs: v()
}));

function WZo(e) {
  if (e === null || e.includes(",")) return;
  let n = new Map;
  for (let o of e.split(";")) {
    let t = o.trim(), s = t.indexOf("="), r = s === -1 ? "" : t.slice(0, s);
    if (r === "") continue;
    if (n.has(r)) return;
    n.set(r, t.slice(s + 1));
  }
  if (n.get("v") !== "1") return;
  switch (n.get("owner_account_only")) {
   case "true":
    return "owner_account_only";

   case "false":
    return "not_owner_only";

   default:
    return;
  }
}

function XVe(e) {
  return e === "owner_account_only";
}

function Qsr({frameCreatedAt: e, sessionWriters: n, maxFrameAgeMs: o, maxStatementAgeMs: t, now: s}) {
  if (e === void 0) return "no_frame_stamp";
  if (s - e > o) return "stale_frame";
  if (n === void 0) return "session_writers_unknown";
  if (!XVe(n.writers)) return "session_not_owner_only";
  if (t === void 0) return;
  let r = s - n.statedAtMs;
  return r >= 0 && r <= t ? void 0 : "session_writers_stale";
}

export { pCn, BZo, SJr, YVe, w4t, jZo, WZo, XVe, Qsr };
