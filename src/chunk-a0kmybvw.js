// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K } from "./chunk-3pqddg8f.js";

import { d } from "./chunk-6ah1819r.js";

import { t } from "./chunk-kawq2919.js";

import { oi } from "./chunk-bp2n0w3d.js";

import { i } from "./chunk-hedpgw9m.js";

import { FSn } from "./chunk-g0d5bpd5.js";

import { a } from "./chunk-j016gcgm.js";

import { djn, cjn } from "./chunk-2mq6q9dt.js";

var u = 200, b = 1e3, T = 1e4, g = 3e4, S = 500, k = 5e3, h = 50, f = 3e5;

function rWt() {
  try {
    let e = process.resourceUsage();
    return {
      cpuTimeMs: (e.userCPUTime + e.systemCPUTime) / 1e3,
      majorPageFaults: e.majorPageFault
    };
  } catch (e) {
    return t(`[event-loop-stall] process.resourceUsage() failed: ${e instanceof Error ? e.message : String(e)}`, {
      level: "error"
    }), null;
  }
}

function E() {
  try {
    let e = process.memoryUsage();
    return {
      rss_mb: Math.round(e.rss / 1024 / 1024),
      heap_used_mb: Math.round(e.heapUsed / 1024 / 1024),
      ext_mb: Math.round(e.external / 1024 / 1024)
    };
  } catch (e) {
    return t(`[event-loop-stall] process.memoryUsage() failed: ${e instanceof Error ? e.message : String(e)}`, {
      level: "error"
    }), null;
  }
}

function w({prevWallMs: e, prevMonotonicMs: s, nowWallMs: l, nowMonotonicMs: n, intervalMs: o}) {
  let r = l - e, M = n - s, c = r - o, m = Math.round(M - o), p = c - m, _ = m > S;
  return {
    wallElapsedMs: r,
    wallDriftMs: c,
    monotonicStallMs: m,
    clockJumpMs: p,
    isStall: c > S || _,
    isMonotonicStall: _,
    likelySleep: c > k
  };
}

function y({write: e, isMonotonicStall: s, prevMonotonicMs: l, nowMonotonicMs: n, intervalMs: o}) {
  if (!s || e === void 0 || e.endedMs < l) return {
    blocked_write: !1
  };
  let r = l + o;
  return {
    blocked_write: e.startedMs <= r + h && e.endedMs >= n - h,
    last_write_ms: Math.round(e.endedMs - e.startedMs),
    last_write_bytes: e.bytes
  };
}

function Fqs(e, s) {
  let l = R.of(e), n = a.CLAUDE_CODE_REMOTE ? b : u, o = a.CLAUDE_CODE_REMOTE ? {
    intervalMs: T,
    afterQuietMs: g
  } : void 0;
  if (s === void 0) l.start(n, o); else l.start(n, o, s);
}

class v {
  timer=null;
  intervalMs=u;
  activeIntervalMs=u;
  rest=void 0;
  quietMs=0;
  stopListeningForWork=() => {};
  rssSampleTicks=f / u;
  lastTickMs=0;
  lastTickMonotonicMs=0;
  totalStalls=0;
  totalStallDurationMs=0;
  totalMonotonicStallMs=0;
  tickCount=0;
  lastResourceSample=null;
  sigcontSeen=!1;
  listensForSigcont=!1;
  onSigcont=() => {
    this.sigcontSeen = !0;
  };
  afterTick=(e, s, l, n, o) => {
    let r = this.listensForSigcont ? this.sigcontSeen : void 0;
    if (this.sigcontSeen = !1, !e.isStall || s === null) return;
    t(`[event-loop-stall] blocked for ${e.monotonicStallMs}ms monotonic (wall drift ${e.wallDriftMs}ms, clock jump ${e.clockJumpMs}ms, expected ${o}ms). Total stalls: ${this.totalStalls}, cumulative: ${this.totalMonotonicStallMs}ms monotonic / ${this.totalStallDurationMs}ms wall${e.likelySleep ? " [likely sleep/wake]" : ""} blocked_write=${s.blocked_write}` + (s.last_write_ms !== void 0 ? ` last_write=${s.last_write_ms}ms/${s.last_write_bytes}B` : "") + ` sigcont=${r ?? "n/a"}` + (l ? ` cpu=${l.cpu_delta_ms}ms majflt=${l.major_fault_delta}` : "") + (n ? ` rss=${n.rss_mb}MB heap=${n.heap_used_mb}MB ext=${n.ext_mb}MB` : ""), {
      level: "warn"
    }), i("tengu_event_loop_stall", {
      stall_duration_ms: e.wallDriftMs,
      expected_interval_ms: o,
      actual_interval_ms: e.wallElapsedMs,
      monotonic_stall_ms: e.monotonicStallMs,
      clock_jump_ms: e.clockJumpMs,
      total_stalls: this.totalStalls,
      cumulative_stall_ms: this.totalStallDurationMs,
      cumulative_monotonic_stall_ms: this.totalMonotonicStallMs,
      likely_sleep: e.likelySleep,
      ...l,
      ...n,
      ...s,
      sigcont: r,
      nonblocking_stdout: FSn()
    });
  };
  start(e, s, l = {
    attributeSigcont: !0
  }) {
    if (this.timer !== null) return;
    if (this.activeIntervalMs = e, this.rest = s, this.openWindow(), l.attributeSigcont) this.listensForSigcont = !0, 
    process.on("SIGCONT", this.onSigcont);
    if (t(`[event-loop-stall] detector started (interval=${e}ms${s ? `, at rest ${s.intervalMs}ms` : ""}, threshold=${S}ms)`), 
    s !== void 0) this.stopListeningForWork = cjn(() => {
      if (this.intervalMs === this.activeIntervalMs) this.quietMs = 0; else try {
        this.tick();
      } catch (n) {
        d(n), this.openWindow(), this.arm(this.activeIntervalMs);
      }
    });
    this.arm(e);
  }
  stop() {
    if (this.stopListeningForWork(), this.listensForSigcont) process.off("SIGCONT", this.onSigcont), 
    this.listensForSigcont = !1, this.sigcontSeen = !1;
    if (this.timer !== null) clearInterval(this.timer), this.timer = null;
  }
  [Symbol.dispose]() {
    this.stop();
  }
  openWindow() {
    this.lastTickMs = Date.now(), this.lastTickMonotonicMs = performance.now(), this.lastResourceSample = rWt();
  }
  arm(e) {
    if (this.quietMs = 0, this.timer !== null) {
      if (this.intervalMs === e) return;
      clearInterval(this.timer);
    }
    this.intervalMs = e, this.rssSampleTicks = Math.round(f / e), this.timer = setInterval(this.tick, e), 
    this.timer.unref();
  }
  tick=() => {
    let e = this.intervalMs, s = Date.now(), l = performance.now(), n = Math.min(e, Math.round(l - this.lastTickMonotonicMs)), o = w({
      prevWallMs: this.lastTickMs,
      prevMonotonicMs: this.lastTickMonotonicMs,
      nowWallMs: s,
      nowMonotonicMs: l,
      intervalMs: n
    });
    this.tickCount++;
    let r = rWt(), M = oi().get(process.stdout)?.takeSlowestFrameWrite();
    if (o.isStall) {
      if (this.totalStalls++, this.totalStallDurationMs += Math.max(o.wallDriftMs, 0), 
      o.isMonotonicStall) this.totalMonotonicStallMs += o.monotonicStallMs;
      let c = E(), m = r && this.lastResourceSample ? {
        cpu_delta_ms: Math.round(r.cpuTimeMs - this.lastResourceSample.cpuTimeMs),
        major_fault_delta: r.majorPageFaults - this.lastResourceSample.majorPageFaults
      } : null, p = y({
        write: M,
        isMonotonicStall: o.isMonotonicStall,
        prevMonotonicMs: this.lastTickMonotonicMs,
        nowMonotonicMs: l,
        intervalMs: n
      });
      if (setImmediate(this.afterTick, o, p, m, c, e), o.likelySleep) oi().get(process.stdout)?.reassertTerminalModes();
    }
    if (!o.isStall) setImmediate(this.afterTick, o, null, null, null, e);
    this.lastTickMs = s, this.lastTickMonotonicMs = l, this.lastResourceSample = r, 
    this.choosePeriod();
  };
  choosePeriod() {
    if (this.rest === void 0) return;
    if (djn()) {
      this.arm(this.activeIntervalMs);
      return;
    }
    if (this.quietMs += this.intervalMs, this.quietMs >= this.rest.afterQuietMs) this.arm(this.rest.intervalMs);
  }
}

var R = new K(() => new v);

export { rWt, Fqs };
