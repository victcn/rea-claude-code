// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q } from "./chunk-3pqddg8f.js";

import { j, Ms } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { _, se, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Iv } from "./chunk-j016gcgm.js";

import { cFs } from "./chunk-r276nwd3.js";

import { O } from "./chunk-1xnsr4dy.js";

import { writeFileSync as k } from "fs";

import { readdir as U, readFile as R, writeFile as P } from "fs/promises";

import { join as w } from "path";

import { getHeapSpaceStatistics as C, getHeapStatistics as D } from "v8";

async function M(u, o = 0) {
  let s = process.memoryUsage(), e = D(), n = process.resourceUsage(), m = process.uptime(), l;
  try {
    l = C();
  } catch {}
  let g = process._getActiveHandles().length, h = process._getActiveRequests().length, r;
  try {
    r = (await U("/proc/self/fd")).length;
  } catch {}
  let c;
  try {
    c = await R("/proc/self/smaps_rollup", "utf8");
  } catch {}
  let f, S, v;
  try {
    let {heapStats: p} = await import("bun:jsc"), b = p(!0);
    f = b.objectTypeCounts, S = b.protectedObjectTypeCounts, v = b.mimalloc || void 0;
  } catch {}
  let x = s.rss - s.heapUsed, H = m > 0 ? s.rss / m : 0, y = H * 3600 / 1048576, a = [];
  if (e.number_of_detached_contexts > 0) a.push(`${e.number_of_detached_contexts} detached context(s) - possible iframe/context leak`);
  if (g > 100) a.push(`${g} active handles - possible timer/socket leak`);
  if (x > s.heapUsed) a.push("Native memory > heap - leak may be in native addons (node-pty, etc.)");
  if (y > 100) a.push(`High memory growth rate: ${y.toFixed(1)} MB/hour`);
  if (r && r > 500) a.push(`${r} open file descriptors - possible file/socket leak`);
  return {
    timestamp: (new Date).toISOString(),
    sessionId: q(),
    trigger: u,
    dumpNumber: o,
    uptimeSeconds: m,
    runtime: Iv() ? "bun" : "node",
    memoryUsage: {
      heapUsed: s.heapUsed,
      heapTotal: s.heapTotal,
      external: s.external,
      arrayBuffers: s.arrayBuffers,
      rss: s.rss
    },
    memoryGrowthRate: {
      bytesPerSecond: H,
      mbPerHour: y
    },
    v8HeapStats: {
      heapSizeLimit: e.heap_size_limit,
      mallocedMemory: e.malloced_memory,
      peakMallocedMemory: e.peak_malloced_memory,
      detachedContexts: e.number_of_detached_contexts,
      nativeContexts: e.number_of_native_contexts
    },
    v8HeapSpaces: l?.map(p => ({
      name: p.space_name,
      size: p.space_size,
      used: p.space_used_size,
      available: p.space_available_size
    })),
    resourceUsage: {
      maxRSS: n.maxRSS * (O() === "macos" ? 1 : 1024),
      userCPUTime: n.userCPUTime,
      systemCPUTime: n.systemCPUTime
    },
    activeHandles: g,
    activeRequests: h,
    openFileDescriptors: r,
    analysis: {
      potentialLeaks: a,
      recommendation: a.length > 0 ? `WARNING: ${a.length} potential leak indicator(s) found. See potentialLeaks array.` : "No obvious leak indicators. Check heap snapshot for retained objects."
    },
    smapsRollup: c,
    objectTypeCounts: f,
    protectedObjectTypeCounts: S,
    mimalloc: v,
    platform: "linux",
    nodeVersion: process.version,
    ccVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION
  };
}

async function SKr(u = "manual", o = 0) {
  try {
    let s = q(), e = await M(u, o), n = f => (f / 1024 / 1024 / 1024).toFixed(3);
    t(`[HeapDump] Memory state:\n  heapUsed: ${n(e.memoryUsage.heapUsed)} GB (in snapshot)\n  external: ${n(e.memoryUsage.external)} GB (${e.runtime === "bun" ? "part of heapUsed, in snapshot" : "NOT in snapshot"})\n  rss: ${n(e.memoryUsage.rss)} GB (total process)\n  ${e.analysis.recommendation}`);
    let m = await cFs();
    await se().mkdir(m);
    let l = o > 0 ? `-dump${o}` : "", g = `${s}${l}.heapsnapshot`, h = `${s}${l}-diagnostics.json`, r = w(m, g), c = w(m, h);
    return await P(c, _(e, null, 2), {
      mode: 384
    }), t(`[HeapDump] Diagnostics written to ${c}`), await T(r), t(`[HeapDump] Heap dump written to ${r}`), 
    i("tengu_heap_dump", {
      triggerManual: !0,
      triggerAuto15GB: !1,
      dumpNumber: o,
      success: !0
    }), {
      success: !0,
      heapPath: r,
      diagPath: c,
      diagnostics: e
    };
  } catch (s) {
    let e = j(s);
    if (Ms(e)) t(`[HeapDump] Failed to write dump: ${e.message}`, {
      level: "error"
    }); else d(e);
    return i("tengu_heap_dump", {
      triggerManual: !0,
      triggerAuto15GB: !1,
      dumpNumber: o,
      success: !1
    }), {
      success: !1,
      error: e.message
    };
  }
}

async function T(u) {
  k(u, Bun.generateHeapSnapshot("v8", "arraybuffer"), {
    mode: 384
  }), Bun.gc(!0);
}

export { SKr };
