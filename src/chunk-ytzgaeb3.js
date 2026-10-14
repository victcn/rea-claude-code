// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { nG } from "./chunk-xywp7esx.js";

import { _, Y } from "./chunk-kawq2919.js";

import { Sh } from "./chunk-w0q7jqcp.js";

import { p } from "./chunk-jkzenvsk.js";

import { Pu } from "./chunk-q6wab2jw.js";

import { At } from "./chunk-vps0k559.js";

import { ytn } from "./chunk-3zb1ef23.js";

import { o, v, M, T, u, _t, ue, A } from "./chunk-cvcg6n1z.js";

import { Qo } from "./chunk-eha3vdmz.js";

var n = {
  non_exclusive_heartbeat_interval_ms: 0,
  multisession_poll_interval_ms_not_at_capacity: 2e3,
  multisession_poll_interval_ms_partial_capacity: 2e3,
  multisession_poll_interval_ms_at_capacity: 6e5,
  reclaim_older_than_ms: 5e3,
  session_keepalive_interval_v2_ms: 12e4,
  sse_connect_timeout_ms: 3e4,
  watch_sessions: !1,
  watch_connected_poll_interval_ms: 6e4,
  watch_fallback_poll_interval_ms: 3e4,
  watch_session_end_window_ms: 6e5
};

var c = {
  message: "must be 0 (disabled) or \u2265100ms"
}, m = p(() => u({
  non_exclusive_heartbeat_interval_ms: v().int().min(0).default(0),
  multisession_poll_interval_ms_not_at_capacity: v().int().min(100).default(n.multisession_poll_interval_ms_not_at_capacity),
  multisession_poll_interval_ms_partial_capacity: v().int().min(100).default(n.multisession_poll_interval_ms_partial_capacity),
  multisession_poll_interval_ms_at_capacity: v().int().refine(e => e === 0 || e >= 100, c).default(n.multisession_poll_interval_ms_at_capacity),
  reclaim_older_than_ms: v().int().min(1).default(5e3),
  session_keepalive_interval_v2_ms: v().int().min(0).default(12e4),
  sse_connect_timeout_ms: v().int().max(Pu).refine(e => e === 0 || e >= 2e4, {
    message: "must be 0 (disabled) or \u226520000ms"
  }).default(n.sse_connect_timeout_ms),
  watch_sessions: M().catch(n.watch_sessions),
  watch_connected_poll_interval_ms: v().int().min(15e3).max(96e3).catch(n.watch_connected_poll_interval_ms),
  watch_fallback_poll_interval_ms: v().int().min(15e3).max(96e3).catch(n.watch_fallback_poll_interval_ms),
  watch_session_end_window_ms: v().int().min(0).max(36e5).catch(n.watch_session_end_window_ms)
}).refine(e => e.non_exclusive_heartbeat_interval_ms > 0 || e.multisession_poll_interval_ms_at_capacity > 0, {
  message: "at-capacity liveness requires non_exclusive_heartbeat_interval_ms > 0 or multisession_poll_interval_ms_at_capacity > 0"
}));

function l3() {
  let e = nG("tengu_bridge_poll_interval_config", n, 3e5), t = m().safeParse(e);
  return t.success ? t.data : n;
}

var d = p(() => _t({
  version: A(1),
  session_ingress_token: o().min(1),
  api_base_url: o(),
  claude_code_args: ue(o(), o()).optional().catch(void 0),
  mcp_config: _t({
    content: o(),
    path: o().optional(),
    mode: v().optional()
  }).optional().catch(void 0),
  auto_mode_environment: T(o()).optional().catch(void 0),
  worktree: M().optional().catch(void 0)
})), f = {
  secret_did_not_decode: "Work secret is not valid JSON",
  unsupported_version: "Unsupported work secret version",
  missing_session_ingress_token: "Invalid work secret: missing or empty session_ingress_token",
  missing_api_base_url: "Invalid work secret: missing api_base_url"
};

class c0e extends Error {
  verdict;
  constructor(e) {
    super(f[e]);
    this.verdict = e;
    this.name = "WorkSecretShapeError";
  }
}

function ide(e) {
  let t;
  try {
    t = Y(Buffer.from(e, "base64url").toString("utf-8"));
  } catch {
    throw new c0e("secret_did_not_decode");
  }
  let s = d().safeParse(t);
  if (s.success) return s.data;
  let i = new Set(s.error.issues.map(r => r.path[0]));
  if (i.has(void 0) || i.has("version")) throw new c0e("unsupported_version");
  if (i.has("session_ingress_token")) throw new c0e("missing_session_ingress_token");
  throw new c0e("missing_api_base_url");
}

function u0e(e, t) {
  if (e === t) return !0;
  let s = e.slice(e.lastIndexOf("_") + 1), i = t.slice(t.lastIndexOf("_") + 1);
  return s.length >= 4 && s === i;
}

function p0e(e, t) {
  return Sh(t, "sessionId"), `${e.replace(/\/+$/, "")}/v1/code/sessions/${t}`;
}

async function Unt(e, t) {
  let s = await At.post(`${e}/worker/register`, {}, {
    headers: {
      Authorization: `Bearer ${t}`,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "User-Agent": Qo()
    },
    timeout: 1e4
  }), i = s.data?.worker_epoch, r = typeof i === "string" ? Number(i) : i;
  if (typeof r !== "number" || !Number.isFinite(r) || !Number.isSafeInteger(r)) {
    let a = ytn(`${_(s.data)}`, "register_worker_response");
    throw Error(`registerWorker: invalid worker_epoch in response${a === void 0 ? " (the response is not quoted: it is too long or is not one plain line)" : `: ${a}`}`);
  }
  return r;
}

export { l3, c0e, ide, u0e, p0e, Unt };
