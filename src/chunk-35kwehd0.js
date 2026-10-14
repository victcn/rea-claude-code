// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, he } from "./chunk-3pqddg8f.js";

import { Y } from "./chunk-kawq2919.js";

import { a, tr } from "./chunk-j016gcgm.js";

import { Is } from "./chunk-p35rdtee.js";

var l = [ "runner_prep_total_ms", "runner_prep_git_proxy_config_ms", "runner_prep_reset_remote_ms", "runner_prep_outcome_branch_ms", "runner_prep_repo_settings_ms", "runner_prep_config_seed_ms", "runner_prep_remote_refetch_ms" ], h = {
  prewarm_vda_outcome: !0,
  prewarm_stat_outcome: !0,
  prewarm_idx_outcome: !0,
  prefetch_phase: !0,
  prefetch_phase_reason: !0
}, f = /^[a-z0-9_]{1,32}$/, m = 604800, d = {
  prewarm_vda_elapsed_s: m,
  prewarm_stat_elapsed_s: m,
  prefetch_runs: 1e4,
  prefetch_ok: 1e4,
  prefetch_last_ok_age_s: m,
  prefetch_last_duration_s: m,
  prefetch_midx: 1e4,
  git_have_age_s: m,
  git_pack_count: 1e4,
  standby_idle_s: m,
  healthz_claim_visible_ms: 6e5
}, k = 36e5, S = 6e5, g = new Set(l);

function b(e) {
  return Object.hasOwn(h, e);
}

function y(e) {
  return Object.hasOwn(d, e);
}

function R(e) {
  return g.has(e);
}

function w(e) {
  return !1;
}

function o(e, t) {
  if (typeof e !== "number" || !Number.isFinite(e)) return;
  let s = Math.round(e);
  return s < 0 ? void 0 : Math.min(s, t);
}

function u(e, t) {
  let s = Object.hasOwn(e, t) ? Reflect.get(e, t) : void 0;
  return typeof s === "object" && s !== null ? s : void 0;
}

function F(e) {
  if (typeof e !== "object" || e === null) return;
  let t = {};
  for (let [n, _] of Object.entries(u(e, "fields") ?? {})) if (b(n)) {
    if (typeof _ === "string" && f.test(_)) t[n] = _;
  } else if (y(n)) {
    let i = o(_, d[n]);
    if (i !== void 0) t[n] = i;
  }
  let s = {};
  for (let [n, _] of Object.entries(u(e, "phases") ?? {})) if (R(n)) {
    let i = o(_, k);
    if (i !== void 0) s[n] = i;
  } else if (w(n)) {
    let i = o(_, S);
    if (i !== void 0) s[n] = i;
  }
  if (Object.keys(t).length === 0 && Object.keys(s).length === 0) return;
  return {
    fields: t,
    phases: s
  };
}

var v = 8192;

function c(e) {
  if (!e || e.length > v) return;
  try {
    return F(Y(e));
  } catch {
    return;
  }
}

class p {
  phases={};
  phaseStarts={};
  warmSpareClaimed=!1;
  hydratePrefetchSettledAt=void 0;
  resumeHydratePrefetch=void 0;
  resumeHydrateOnDiskBytes=void 0;
  resumeHydrateCcrBytes=void 0;
  resumeHydrateCcrEvents=void 0;
  resumeHydrateDeltaEvents=void 0;
  resumeHydrateDeltaFetchAttempted=void 0;
  resumeHydrateAnchorWalkback=void 0;
  resumeTranscriptScan=void 0;
  pluginFullLoads=0;
  userContextBuilds=0;
  sdkMcpDialRuns=0;
  sdkMcpServersDialed=0;
  flagFetchKick=void 0;
  flagFetchKickJudgedAtMs=void 0;
  warmWakeEarlyFetch=void 0;
  kickOnWarmCache=void 0;
  hooksInitSource=void 0;
  flagFetchWaitedMs=0;
  hooksInitWaitGivenUp=!1;
  consumed=!1;
  apiRequestSentFromSpawnMs=void 0;
  apiRequestSentFromSpawnConsumed=!1;
  recordPhase(e, t, s) {
    if (this.consumed) return;
    if (e === "skills_load_ms" && this.phases[e] !== void 0) return;
    if (e === "hooks_init_ms" && this.hooksInitWaitGivenUp) return;
    if (this.phases[e] = Math.round(t), s !== void 0) this.phaseStarts[e] = Math.round(s);
  }
  recordHooksInitWait(e, t) {
    this.recordPhase("hooks_init_ms", e, t), this.hooksInitWaitGivenUp = !0;
  }
  getRecordedPhase(e) {
    return this.phases[e];
  }
  recordSpawnToExec() {
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.recordPhase("spawn_to_exec_ms", Date.now() - process.uptime() * 1e3 - e, e - performance.timeOrigin);
  }
  markWarmSpareClaimed() {
    this.warmSpareClaimed = !0;
  }
  markFlagFetchKick(e) {
    this.flagFetchKick = e, this.flagFetchKickJudgedAtMs = Math.round(performance.now());
  }
  getFlagFetchKick() {
    return this.flagFetchKick;
  }
  markWarmCacheKickAsks(e) {
    this.warmWakeEarlyFetch = e, this.kickOnWarmCache = a.CLAUDE_CODE_GROWTHBOOK_KICK_ON_WARM_CACHE;
  }
  markHooksInitSource(e) {
    this.hooksInitSource = e;
  }
  noteFlagFetchWait(e) {
    this.flagFetchWaitedMs += e;
  }
  getFlagFetchWaitedMs() {
    return this.flagFetchWaitedMs;
  }
  noteSdkMcpDial(e) {
    if (e <= 0) return;
    this.sdkMcpDialRuns++, this.sdkMcpServersDialed += e;
  }
  notePluginFullLoad() {
    if (this.consumed) return;
    this.pluginFullLoads++;
  }
  noteUserContextBuild() {
    if (this.consumed) return;
    this.userContextBuilds++;
  }
  wasWarmSpareClaimed() {
    return this.warmSpareClaimed;
  }
  markHydratePrefetchSettled() {
    this.hydratePrefetchSettledAt = performance.now();
  }
  markResumeHydratePrefetch(e, t) {
    this.resumeHydratePrefetch = e === null ? "miss" : this.hydratePrefetchSettledAt !== void 0 && this.hydratePrefetchSettledAt < t ? "hit" : "pending";
  }
  markResumeHydrateDelta(e, t, s, n, _, i) {
    this.resumeHydrateOnDiskBytes = e, this.resumeHydrateCcrBytes = t, this.resumeHydrateCcrEvents = s, 
    this.resumeHydrateDeltaEvents = n, this.resumeHydrateDeltaFetchAttempted = _, this.resumeHydrateAnchorWalkback = i;
  }
  markResumeTranscriptScan(e) {
    if (this.resumeTranscriptScan !== void 0) return;
    this.resumeTranscriptScan = e, this.recordPhase("resume_transcript_scan_ms", e.scanMs, e.scanStartMs);
  }
  recordFirstMessageReadFromSpawn() {
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.recordPhase("first_message_read_from_spawn_ms", Date.now() - e, e - performance.timeOrigin);
  }
  recordInputReadyFromSpawn() {
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.recordPhase("input_ready_from_spawn_ms", Date.now() - e, e - performance.timeOrigin);
  }
  consume() {
    if (!a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_EMIT_STARTUP_TIMING) return;
    if (this.consumed || Object.keys(this.phases).length === 0) return;
    this.consumed = !0;
    let e = c(tr.CCR_RUNNER_STARTUP_TIMING), t = !he();
    return {
      ...e?.fields,
      entrypoint: a.CLAUDE_CODE_ENTRYPOINT ?? "unknown",
      warm_spare_claimed: this.warmSpareClaimed,
      resume_hydrate_prefetch: this.resumeHydratePrefetch,
      resume_hydrate_on_disk_bytes: this.resumeHydrateOnDiskBytes,
      resume_hydrate_ccr_bytes: this.resumeHydrateCcrBytes,
      resume_hydrate_ccr_events: this.resumeHydrateCcrEvents,
      resume_hydrate_delta_events: this.resumeHydrateDeltaEvents,
      resume_hydrate_delta_fetch_attempted: this.resumeHydrateDeltaFetchAttempted,
      resume_hydrate_anchor_walkback: this.resumeHydrateAnchorWalkback,
      resume_transcript_bytes: this.resumeTranscriptScan?.bytes,
      resume_transcript_kept_bytes: this.resumeTranscriptScan?.keptBytes,
      resume_transcript_earlier_metadata_bytes: this.resumeTranscriptScan?.earlierMetadataBytes,
      resume_transcript_boundary: this.resumeTranscriptScan?.boundary,
      resume_transcript_tool_copy_chars: this.resumeTranscriptScan?.toolCopyChars,
      prewarm_vda: tr.CCR_PREWARM_VDA,
      prewarm_stat: tr.CCR_PREWARM_STAT,
      delta_reset: tr.CCR_DELTA_RESET,
      prefetch_network: tr.CCR_PREFETCH_NETWORK,
      plugin_full_loads: this.pluginFullLoads,
      user_context_builds: this.userContextBuilds,
      sdk_mcp_dial_runs: this.sdkMcpDialRuns,
      sdk_mcp_servers_dialed: this.sdkMcpServersDialed,
      flag_fetch_kick: this.flagFetchKick,
      flag_fetch_kick_judged_at_ms: t ? this.flagFetchKickJudgedAtMs : void 0,
      warm_wake_early_fetch: this.warmWakeEarlyFetch,
      kick_on_warm_cache: this.kickOnWarmCache,
      hooks_init_source: this.hooksInitSource,
      phases: {
        ...e?.phases,
        ...t ? this.phases : this.durations()
      },
      ...t && {
        time_origin_ms: performance.timeOrigin,
        phase_start_ms: {
          ...this.phaseStarts
        }
      }
    };
  }
  durations() {
    return Is(this.phases, (e, t) => t !== "spawn_to_exec_ms" && this.phaseStarts[t] !== 0);
  }
  recordApiRequestSentFromSpawn() {
    if (this.apiRequestSentFromSpawnMs !== void 0) return;
    let e = Number.parseInt(process.env.CCR_SPAWN_TIMESTAMP_MS ?? "", 10);
    if (!Number.isFinite(e)) return;
    this.apiRequestSentFromSpawnMs = Date.now() - e;
  }
  consumeApiRequestSentFromSpawn() {
    if (this.apiRequestSentFromSpawnConsumed || this.apiRequestSentFromSpawnMs === void 0) return;
    return this.apiRequestSentFromSpawnConsumed = !0, {
      ms: this.apiRequestSentFromSpawnMs,
      warmSpareClaimed: this.warmSpareClaimed,
      flagFetchKick: this.flagFetchKick,
      timeOriginMs: he() ? void 0 : performance.timeOrigin
    };
  }
}

var P = new K(() => new p);

function r() {
  return P.of(B().host);
}

function _r(e, t, s) {
  r().recordPhase(e, t, s);
}

function ICs(e, t) {
  r().recordHooksInitWait(e, t);
}

function aUe(e) {
  return r().getRecordedPhase(e);
}

function OCs() {
  r().recordSpawnToExec();
}

function ejn() {
  r().markWarmSpareClaimed();
}

function MCs() {
  r().notePluginFullLoad();
}

function HCs() {
  r().noteUserContextBuild();
}

function DCs() {
  return r().wasWarmSpareClaimed();
}

function LCs(e) {
  r().markFlagFetchKick(e);
}

function NCs() {
  return r().getFlagFetchKick();
}

function $Cs(e) {
  r().markWarmCacheKickAsks(e);
}

function FCs(e) {
  r().markHooksInitSource(e);
}

function UCs(e) {
  r().noteFlagFetchWait(e);
}

function BCs() {
  return r().getFlagFetchWaitedMs();
}

function jCs(e) {
  r().noteSdkMcpDial(e);
}

function WCs() {
  r().markHydratePrefetchSettled();
}

function zCs(e, t) {
  r().markResumeHydratePrefetch(e, t);
}

function GCs(e) {
  r().markResumeTranscriptScan(e);
}

function VCs(e, t, s, n, _, i) {
  r().markResumeHydrateDelta(e, t, s, n, _, i);
}

function KCs() {
  r().recordFirstMessageReadFromSpawn();
}

function qCs() {
  r().recordInputReadyFromSpawn();
}

function YCs() {
  return r().consume();
}

function XCs() {
  r().recordApiRequestSentFromSpawn();
}

function JCs() {
  return r().consumeApiRequestSentFromSpawn();
}

export { _r, ICs, aUe, OCs, ejn, MCs, HCs, DCs, LCs, NCs, $Cs, FCs, UCs, BCs, jCs, WCs, zCs, GCs, VCs, KCs, qCs, YCs, XCs, JCs };
