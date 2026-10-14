// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { lo } from "./chunk-ddr690nj.js";

import { m9, g5, Ke, kko, eMs, kMs, YRr, JRr, k, BO } from "./chunk-xywp7esx.js";

import { _, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { a } from "./chunk-j016gcgm.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { Jr } from "./chunk-s2t7g8m9.js";

import { Oe, gi } from "./chunk-cjt10y7b.js";

import { _c } from "./chunk-vps0k559.js";

import { Qa } from "./chunk-nc0jxmkt.js";

import { o0s, c_ } from "./chunk-hmce8a0s.js";

import { GF, awe } from "./chunk-kd22gz0e.js";

import { Mt } from "./chunk-3kd8r7rn.js";

import { Kn } from "./chunk-gmn1ce75.js";

import { Is } from "./chunk-p35rdtee.js";

import { createHash as x } from "crypto";

import { gzipSync as L } from "zlib";

function bkr({maxBatchSize: e, getFlushIntervalMs: n, post: i}) {
  let s = [], r = null;
  async function o() {
    if (s.length === 0) return;
    let h = s;
    s = [], await i(h);
  }
  function l() {
    if (r) clearTimeout(r), r = null;
  }
  function c() {
    o().catch(() => {});
  }
  function S() {
    if (r) return;
    r = setTimeout(() => {
      r = null, c();
    }, n()).unref();
  }
  return {
    enqueue(h) {
      if (s.push(h), s.length >= e) l(), c(); else S();
    },
    flush: o,
    async shutdown() {
      l(), await o();
    },
    drainForTesting() {
      l();
      let h = s;
      return s = [], h;
    }
  };
}

var P = "https://http-intake.logs.us5.datadoghq.com/api/v2/logs", Skr = "pubea5604404508cdd34afb69e6f42a05bc", F = 15e3, I = 100, O = 5e3, T = 3e5, M = new Set([ "tengu_feature_ok", "tengu_feature_bad", "tengu_feature_sad", "tengu_teleport_menu", "tengu_teleport_permission_mode_refused", "tengu_tether_decision", "tengu_tether_live_outcome", "tengu_tether_echo_audit", "tengu_tether_unrecognised_400", "chrome_bridge_connection_succeeded", "chrome_bridge_connection_failed", "chrome_bridge_disconnected", "chrome_bridge_tool_call_completed", "chrome_bridge_tool_call_disconnected", "chrome_bridge_tool_call_error", "chrome_bridge_tool_call_lost", "chrome_bridge_tool_call_started", "chrome_bridge_tool_call_timeout", "tengu_api_error", "tengu_api_fallback_last_resort", "tengu_api_success", "tengu_artifact_disabled_session", "tengu_artifact_reject_breaker", "tengu_artifact_tool_recovered", "tengu_artifact_tool_withheld", "tengu_auto_mode_decision", "tengu_auto_mode_denial_limit_exceeded", "tengu_auto_mode_destructive_mcp_rule_allow", "tengu_auto_mode_fallback_to_ask", "tengu_auto_mode_malformed_tool_input", "tengu_auto_mode_env_onboarding_accept", "tengu_auto_mode_env_onboarding_dismiss", "tengu_auto_mode_env_onboarding_later", "tengu_auto_mode_env_onboarding_shown", "tengu_auto_mode_outcome", "tengu_auto_mode_setup_wizard_answers", "tengu_auto_mode_setup_wizard_resolved", "tengu_auto_mode_setup_wizard_shown", "tengu_auto_mode_subsequent_approval", "tengu_bridge_token_absence_classified", "tengu_insights_auto_mode_recommendation", "tengu_brief_mode_enabled", "tengu_brief_mode_toggled", "tengu_brief_send", "tengu_cancel", "tengu_compact_after_prompt_too_long", "tengu_compact_failed", "tengu_copper_lantern", "tengu_deferred_tools_pool_change", "tengu_mcp_instructions_pool_change", "tengu_exit", "tengu_flicker", "tengu_headless_mcp_first_turn_join", "tengu_headless_mcp_launch_named_wait", "tengu_headless_mcp_prewait", "tengu_init", "tengu_mcp_degraded", "tengu_mcp_first_tools_list", "tengu_mcp_list_changed", "tengu_mcp_listen_reopen", "tengu_mcp_message_stream_outcome", "tengu_mcp_listing_prior_rejected", "tengu_mcp_project_servers_approved", "tengu_mcp_sdk_generation", "tengu_mcp_server_connection_failed", "tengu_mcp_server_connection_succeeded", "tengu_mcp_tools_refreshed_mid_turn", "tengu_mcp_tripwire", "tengu_model_catalog_compare", "tengu_model_fallback_triggered", "tengu_live_model_switch", "tengu_refusal_fallback_triggered", "tengu_refusal_fallback_prompt_shown", "tengu_refusal_fallback_prompt_choice", "tengu_refusal_fallback_preference_prompt", "tengu_refusal_fallback_setting_changed", "tengu_refusal_fallback_suppressed", "tengu_refusal_fallback_dialog_suppressed", "tengu_refusal_fallback_supersedes", "tengu_refusal_fallback_route_declined", "tengu_refusal_fallback_notice_collapsed", "tengu_convolute_arcades_retry", "tengu_convolute_arcades_retry_outcome", "tengu_rotunda_pennant_applied", "tengu_rotunda_pennant_malformed", "tengu_rotunda_pennant_strip", "tengu_rotunda_pennant_credit_echoed", "tengu_rotunda_pennant_tools", "tengu_rotunda_pennant_chain_exhausted", "tengu_rotunda_pennant_esc", "tengu_refusal_retraction_evicted", "tengu_refusal_retraction_late_drop", "tengu_refusal_retraction_history_dropped", "tengu_refusal_retraction_orphan_tool_result", "tengu_refusal_retraction_truncation_harvest", "tengu_refusal_retraction_unauthenticated_signal", "tengu_propose_skills", "tengu_propose_skills_kept_lines", "tengu_propose_skills_read_check", "tengu_oauth_error", "tengu_oauth_success", "tengu_oauth_token_refresh_failure", "tengu_oauth_token_refresh_success", "tengu_oauth_token_refresh_lock_acquiring", "tengu_oauth_token_refresh_lock_acquired", "tengu_oauth_token_refresh_starting", "tengu_oauth_token_refresh_completed", "tengu_oauth_token_refresh_lock_releasing", "tengu_oauth_token_refresh_lock_released", "tengu_oauth_token_refresh_lock_dead_holder_takeover", "tengu_policy_limits_cache_state_at_first_prompt", "tengu_policy_limits_fetch", "tengu_policy_limits_verdict_recovered", "tengu_ptl_surfaced_to_user", "tengu_query_error", "tengu_remote_tool_targets", "tengu_remote_tool_forward", "tengu_remote_tool_serve", "tengu_remote_tool_restart_adoption", "tengu_remote_tool_restart_adoption_dropped", "tengu_remote_tool_restart_adoption_unroutable", "tengu_remote_stream_regained", "tengu_sdk_oauth_refresh_unfulfilled", "tengu_rc_pill_clicked", "tengu_ranch_rc_shown", "tengu_ranch_rc_link_shown", "tengu_ccr_init_park_report", "tengu_orphaned_permission_applied", "tengu_orphaned_permission_closed_unrun", "tengu_orphaned_permission_unapplied_turn_end", "tengu_orphaned_permission_unapplied_turn_resumed", "tengu_turn_handoff_run", "tengu_turn_handoff_flag_wait", "tengu_turn_handoff_server_verdict", "tengu_turn_handoff_files_by_name", "tengu_turn_handoff_files_by_name_refresh", "tengu_turn_handoff_carried_writes", "tengu_turn_handoff_expired", "tengu_rewind_conversation_expired", "tengu_pending_action_republished", "tengu_resume_interrupted_turn", "tengu_resume_parked_permission", "tengu_resume_rescue_yield", "tengu_resume_stale_prompt_cancel", "tengu_resume_stale_turn_suppressed", "tengu_request_user_dialog_implicit_cancel", "tengu_request_user_dialog_late_answer", "tengu_request_user_dialog_requires_action", "tengu_request_user_dialog_response_ignored", "tengu_request_user_dialog_timeout", "tengu_chrome_setup_offered", "tengu_review_remote_teleport_failed", "tengu_supported_dialog_kinds_restored", "tengu_sdk_init_handshake", "tengu_sdk_mcp_false_unavailable", "tengu_sdk_result", "tengu_shutdown_pending_state", "tengu_sdk_schema_violation", "tengu_sdk_session_crash", "tengu_sdk_stall", "tengu_sdk_ttft", "tengu_session_file_read", "tengu_started", "tengu_tool_use_error", "tengu_tool_use_granted_in_prompt_permanent", "tengu_transcript_write_failed", "tengu_transcript_writer_recovered", "tengu_persistence_suppressed", "tengu_tool_use_granted_in_prompt_temporary", "tengu_tool_use_not_loaded", "tengu_tool_use_not_loaded_check_failed", "tengu_tool_use_rejected_in_prompt", "tengu_tool_use_success", "tengu_bash_tool_command_executed", "tengu_bash_tool_command_failed", "tengu_uncaught_exception", "tengu_uncaught_exception_loop", "tengu_unhandled_rejection", "tengu_voice_recording_started", "tengu_voice_toggled", "tengu_vscode_sdk_stream_ended_no_result", "tengu_team_mem_sync_started", "tengu_timer", "tengu_bg_adopt", "tengu_bg_agent_action", "tengu_bg_agent_dispatch", "tengu_bg_agent_notification", "tengu_bg_agent_terminal", "tengu_bg_attach", "tengu_bg_attach_first_frame", "tengu_bg_attach_legacy_autorespawn", "tengu_bg_attach_outcome", "tengu_bg_classify", "tengu_bg_daemon_cold_start_ask", "tengu_bg_daemon_cold_start_ask_answer", "tengu_bg_daemon_install", "tengu_bg_daemon_service_poll_fallthrough", "tengu_bg_daemon_service_stale_exec", "tengu_bg_daemon_spawn_failed", "tengu_bg_daemon_wmi_fallback", "tengu_bg_daemon_zombie_false_positive", "tengu_bg_daemon_zombie_restart", "tengu_bg_dispatch", "tengu_bg_dispatch_fallback", "tengu_bg_dispatch_low_mem", "tengu_bg_dispatch_rescued", "tengu_bg_dispatch_sigkill_escalate", "tengu_bg_dispatch_stale_drop", "tengu_bg_exec_no_lastline", "tengu_bg_killjob_ctrl_fallback", "tengu_bg_orphan_reap", "tengu_bg_proto_mismatch", "tengu_bg_pty_unavailable", "tengu_bg_reply_outcome", "tengu_bg_respawn", "tengu_bg_respawn_downgrade_refused", "tengu_bg_respawn_exhausted", "tengu_bg_respawn_resume_conflict", "tengu_bg_prewarm_burst", "tengu_bg_respawn_stale", "tengu_bg_respawn_unconfirmed_bail", "tengu_bg_retired", "tengu_bg_roster_parse_failed", "tengu_bg_skew_nudge", "tengu_bg_spare_claim", "tengu_bg_spare_claim_fail", "tengu_bg_spare_spawn", "tengu_bg_worker_exit", "tengu_bg_worker_spawn", "tengu_daemon_cold_start_prompt", "tengu_daemon_config_reload", "tengu_daemon_exit", "tengu_daemon_idle_exit", "tengu_daemon_install_prompt_answer", "tengu_daemon_lease", "tengu_daemon_peer_uid_reject", "tengu_daemon_self_restart_on_upgrade", "tengu_daemon_start", "tengu_daemon_startup_crash", "tengu_daemon_upgrade_refused_stale_binary", "tengu_daemon_worker_crash", "tengu_daemon_worker_permanent_exit", "tengu_daemon_yield", "tengu_daemon_yield_takeover" ]), z = new Map([ [ "tengu_remote_tool_forward", new Set([ "outcome", "transport", "host_kind", "host_platform", "approval", "approved_by", "adoption", "reconcile_trigger", "reconcile_result", "duration_ms", "time_to_terminal_ms", "asking_ms" ]) ], [ "tengu_remote_tool_serve", new Set([ "outcome", "op", "transport", "policy", "refusal_code", "failure_code", "disposition", "second_leg" ]) ], [ "tengu_remote_tool_restart_adoption", new Set([ "journaled", "adoptable", "adopted", "park_adopted" ]) ], [ "tengu_remote_tool_restart_adoption_dropped", new Set([ "dropped" ]) ], [ "tengu_remote_tool_restart_adoption_unroutable", new Set([ "where", "route_code", "parked_at_restart" ]) ] ]);

function C(e, n) {
  let i = z.get(e);
  if (i === void 0) return n;
  return Is(n, (s, r) => r === "sample_rate" || i.has(r));
}

var U = [ "arch", "attach_cold", "daemon_booted", "first_frame_kind", "surface", "via", "classifierModel", "classifierStage", "clientType", "decision", "entrypoint", "errorKind", "errorType", "failureKind", "fastPath", "sessionKind", "http_status_range", "http_status", "model", "op", "outcome", "platform", "projectsRole", "remoteControlLane", "projectsSession", "provider", "reason", "coachMode", "server_reason", "server_type", "source", "subscriptionType", "toolName", "uncoveredTailReason", "userBucket", "userType", "version", "versionBase", ...[] ];

function v(e) {
  return e.replace(/[A-Z]/g, n => `_${n.toLowerCase()}`);
}

var N = [ "mcpServerName", "mcpServerBaseUrl", "mcpServerId", "toolUseContentLengths", "toolSchemaCharLengths", "toolSchemasHash", "errorMessageHash", "mcpServerKeyHash", "mcpToolName", "attributionMcpServer", "attributionMcpTool", "attributionSkill", "attributionMcpServerHash", "attributionMcpToolHash", "attributionSkillHash", "attributionAgentHash", "attributionPluginHash", "mcpServerNameHash", "mcpToolNameHash", "toolNameHash", "errorDetailsHash", "mcp_server_sha12", "rh", "baseUrl", "skill_name_hash", "plugin_id_hash", "plugin_name_redacted", "marketplace_name_redacted", "plugin_name_previous", "plugin_id_hash_previous", "plugin_version_sha", "skill_name_hashes", "parent_skill_name_hash", "item_name_hash", "attachmentTypesSeen" ], H = new Set(N.map(v));

function j(e) {
  for (let n of Object.keys(e)) if (H.has(v(n))) delete e[n];
}

function G(e, n) {
  if (e.startsWith("mcp__")) return "mcp";
  if (n && !kMs(e)) return "mcp";
  return e;
}

var q = [ "tengu_mcp_list_changed", "tengu_mcp_degraded", "tengu_mcp_server_connection_succeeded", "tengu_mcp_server_connection_failed", "tengu_mcp_first_tools_list", "tengu_mcp_listen_reopen", "tengu_mcp_message_stream_outcome" ];

function W(e) {
  return q.includes(e);
}

var V = 10, Y = 6e4, Z = 200;

function X(e, n, i, s) {
  let r = `${n}\0${i ?? "(no-server)"}`, o = e.get(r);
  if (!o) {
    if (e.size >= Z) {
      let c = e.keys().next().value;
      if (c !== void 0) e.delete(c);
    }
    o = {
      windowStartMs: 0,
      forwardedInWindow: 0,
      droppedSinceForward: 0
    }, e.set(r, o);
  }
  if (s - o.windowStartMs >= Y) o.windowStartMs = s, o.forwardedInWindow = 0;
  if (o.forwardedInWindow >= V) return o.droppedSinceForward++, {
    admitted: !1,
    droppedSinceLastForward: 0
  };
  o.forwardedInWindow++;
  let l = o.droppedSinceForward;
  return o.droppedSinceForward = 0, {
    admitted: !0,
    droppedSinceLastForward: l
  };
}

async function J(e, n) {
  let i = Date.now() - n.egressRefusedAt;
  if (i < 0) n.egressRefusedAt = -1 / 0; else if (i < T) return !1;
  let s = n.gzip !== "refused" && (a.CLAUDE_CODE_GZIP_DATADOG_LOGS ?? Jr());
  try {
    await Qa.post(P, s ? L(_(e)) : e, {
      headers: {
        "Content-Type": "application/json",
        "DD-API-KEY": Skr,
        ...s && {
          "Content-Encoding": "gzip"
        }
      },
      timeout: O
    });
  } catch (r) {
    t(`Failed to flush logs to Datadog: ${r}`, {
      level: "error"
    });
    let o = _c(r) ? r.response : void 0;
    if (o && GF(o.status, o.headers) || awe(r)) return t(`An egress proxy refused Datadog's host; not posting logs to Datadog for ${T / 6e4} minutes; they are dropped`, {
      level: "warn"
    }), n.egressRefusedAt = Date.now(), !1;
    let l = o?.status;
    if (!s || l === 429) return !1;
    let c = l === void 0 ? "no_response" : `http_${l}`;
    return t(`Datadog did not take a gzipped log batch (${c}); resending it uncompressed, and sending later batches from this process uncompressed`, {
      level: "error"
    }), n.gzip = "refused", n.unreportedGzipFailure ??= c, n.postCurrent(e);
  }
  if (n.unreportedGzipFailure !== void 0) {
    let r = n.unreportedGzipFailure;
    n.unreportedGzipFailure = void 0, f("datadog_logs_gzip", r);
  }
  if (s && n.gzip === "untried") n.gzip = "accepted", g("datadog_logs_gzip");
  return !0;
}

var Q = 30;

class A {
  datadogInitialized=null;
  egressRefusedAt=-1 / 0;
  gzip="untried";
  unreportedGzipFailure;
  builtUnredacted=new WeakSet;
  sender=bkr({
    maxBatchSize: I,
    getFlushIntervalMs: _e,
    post: async e => {
      try {
        await this.postCurrent(e);
      } catch (n) {
        t(`Datadog log flush threw: ${n}`, {
          level: "error"
        });
      }
    }
  });
  postCurrent(e) {
    let n = kko() ? e.filter(i => !this.builtUnredacted.has(i)) : e;
    return n.length > 0 ? J(n, this) : Promise.resolve(!1);
  }
  initializeDatadog=lo(async () => {
    if (c_() || o0s()) return this.datadogInitialized = !1, !1;
    try {
      return this.datadogInitialized = !0, !0;
    } catch (e) {
      return d(e), this.datadogInitialized = !1, !1;
    }
  });
  getUserBucket=lo(() => {
    let e = BO(), n = x("sha256").update(e).digest("hex");
    return parseInt(n.slice(0, 8), 16) % Q;
  });
  peerRateWindows=new Map;
}

var E = new K(() => new A);

function Jbo() {
  let e = E.of(B().host);
  e.initializeDatadog.cache?.clear?.(), e.datadogInitialized = null;
}

async function uUe() {
  await E.of(B().host).sender.shutdown();
}

function ee(e) {
  return e.replace(/^(\d+\.\d+\.\d+-(?:dev|engine)\.\d{8})\.t\d+\.sha[a-f0-9]+$/, "$1");
}

function te(e, {isTrustedAnt: n, onAnthropicHost: i}) {
  if (typeof e !== "string") return null;
  if (n) return e;
  if (e === g5 && i) return e;
  if (!e.toLowerCase().includes("claude")) return null;
  let s = Ke(Mt(e), {
    identity: !0
  });
  return s in m9 ? s : "other";
}

function ne(e, n) {
  let i = n.feature_name;
  if (e !== "tengu_feature_ok" || i === void 0) return n;
  let s = k("tengu_agile_glade", null), r = Kn(s) ? JRr(s[i]) : null;
  if (r === null) return n;
  if (r === 0) return null;
  let o = n.sample_rate;
  return {
    ...n,
    sample_rate: typeof o === "number" ? o * r : r
  };
}

async function JMt(e, n) {
  if (Oe() !== "firstParty") return;
  let i = E.of(B().host), s = i.datadogInitialized;
  if (s === null) s = await i.initializeDatadog();
  if (!s || !M.has(e)) return;
  let r = ne(e, n);
  if (r === null) return;
  let o;
  if (W(e)) {
    let l = r.mcpServerKeyHash ?? r.mcpServerBaseUrl, c = X(i.peerRateWindows, e, l === void 0 ? void 0 : String(l), Date.now());
    if (!c.admitted) return;
    if (c.droppedSinceLastForward > 0) o = c.droppedSinceLastForward;
  }
  try {
    let l = await YRr({
      model: r.model,
      betas: r.betas
    }), {envContext: c, head_sha: S, is_clean_tree_at_start: h, changed_file_count_at_start: re, untracked_file_count_at_start: oe, ...R} = l, u = {
      ...R,
      ...c,
      ...C(e, r),
      userBucket: i.getUserBucket(),
      ...o !== void 0 && {
        droppedSinceLastForward: o
      }
    };
    if (j(u), typeof u.toolName === "string") u.toolName = G(u.toolName, u.isMcp === !0);
    if (u.model !== void 0) {
      let p = gi(), m = te(u.model, {
        isTrustedAnt: !1,
        onAnthropicHost: p
      });
      if (m === null) return;
      u.model = m;
    }
    if (typeof u.version === "string") u.version = ee(u.version);
    if (u.status !== void 0 && u.status !== null) {
      let p = String(u.status);
      u.http_status = p;
      let m = p.charAt(0);
      if (m >= "1" && m <= "5") u.http_status_range = `${m}xx`;
      delete u.status;
    }
    let y = kko(), b = y ? eMs(u) : u, w = {
      ddsource: "nodejs",
      ddtags: [ `event:${e}`, ...U.filter(p => b[p] !== void 0 && b[p] !== null).map(p => `${v(p)}:${b[p]}`) ].join(","),
      message: e,
      service: "claude-code",
      hostname: "claude-code",
      env: "external"
    };
    for (let [p, m] of Object.entries(b)) if (m !== void 0 && m !== null) w[v(p)] = m;
    if (!y) i.builtUnredacted.add(w);
    i.sender.enqueue(w);
  } catch (l) {
    d(l);
  }
}

function _e() {
  return a.CLAUDE_CODE_DATADOG_FLUSH_INTERVAL_MS || F;
}

export { bkr, Skr, Jbo, uUe, JMt };
