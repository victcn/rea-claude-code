// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { To } from "./chunk-vxr6sv7z.js";

import { q, Ze } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { I } from "./chunk-5wbhf1bk.js";

import { ee, Ven } from "./chunk-kq1bg4dg.js";

import { $G, S$t, zln, d } from "./chunk-6ah1819r.js";

import { $t } from "./chunk-g6nh65r0.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Vn, ya, TTo } from "./chunk-xywp7esx.js";

import { nr } from "./chunk-f1zpf9me.js";

import { DN } from "./chunk-hk8p0fqv.js";

import { wir, c6t, pR, rl, xS } from "./chunk-84yp45y8.js";

import { lO } from "./chunk-bkx9v5fh.js";

import { ORe } from "./chunk-3znaqeaq.js";

import { kS, TVe, S7o } from "./chunk-cm3ke8xm.js";

import { Ohe, Mhe, Hhe } from "./chunk-cqnfahpy.js";

import { mVt } from "./chunk-ah542ztc.js";

import { SEn } from "./chunk-f2w6pzz6.js";

import { Ri } from "./chunk-4b2xazcw.js";

import { wP } from "./chunk-yae7t0cr.js";

import { N } from "./chunk-hmqkrrtz.js";

function Phe(e) {
  let {wakes: t} = ee().wakes, n = t.get(e);
  if (!n) n = {
    coalesceTimer: null,
    rescanWanted: !1,
    lastScanScheduledAt: 0,
    rescanArgs: null,
    newestKickAt: 0,
    kickSettled: !0,
    kickCount: 0,
    pendingConfirm: null,
    pendingSeed: null,
    lastWakeArgs: null,
    inFlightScan: null,
    idleRescanCancel: null,
    idleRescanUnmuted: !1,
    idlePassOwed: null,
    cancelGeneration: 0,
    readRetryTimer: null,
    readRetryAttempts: 0
  }, t.set(e, n);
  return n;
}

function Ole(e) {
  for (let [t, n] of ee().wakes.wakes) {
    if (e !== void 0 && t !== e) continue;
    if (n.coalesceTimer) clearTimeout(n.coalesceTimer), n.coalesceTimer = null;
    if (n.rescanWanted = !1, n.pendingConfirm = null, n.pendingSeed = null, n.newestKickAt = 0, 
    n.kickSettled = !0, n.lastScanScheduledAt = 0, n.rescanArgs = null, n.idleRescanCancel?.(), 
    n.idleRescanCancel = null, n.idleRescanUnmuted = !1, n.idlePassOwed = null, n.readRetryTimer) clearTimeout(n.readRetryTimer), 
    n.readRetryTimer = null;
    n.readRetryAttempts = 0, n.cancelGeneration++;
  }
}

function jwt() {
  ee().wakes.scanGeneration++;
}

function Yvn(e) {
  let {slugEpochs: t} = ee().wakes;
  t.set(e, (t.get(e) ?? 0) + 1);
}

function te(e) {
  return ee().wakes.slugEpochs.get(e) ?? 0;
}

function gW(e) {
  return ee().wakes.scanGeneration + te(e);
}

function i4(e) {
  return ee().wakes.stopGenerations.get(e) ?? 0;
}

function D(e) {
  let {stopGenerations: t} = ee().wakes;
  t.set(e, (t.get(e) ?? 0) + 1);
}

function Xvn(e, t) {
  let {latchChangedAt: n} = ee().wakes;
  if (t === void 0) n.set(e, Date.now()); else if (Number.isFinite(t)) n.set(e, Math.min(t, Date.now())); else n.delete(e);
}

var v = Xvn;

function Q4r(e) {
  return ee().wakes.latchChangedAt.get(e);
}

function Jvn(e) {
  let {wakes: t} = ee();
  v(e), t.stoppedSlugs.add(e), t.sweptSlugs.delete(e), t.orphanedSweptSlugs.delete(e), 
  D(e), t.pendingResumeDisclosure.delete(e);
}

function Qvn(e) {
  let {wakes: t} = ee();
  if (t.stoppedSlugs.has(e)) v(e);
  t.stoppedSlugs.delete(e), t.sweptSlugs.delete(e), t.orphanedSweptSlugs.delete(e);
}

function iy(e) {
  return ee().wakes.stoppedSlugs.has(e);
}

function ay(e) {
  let t = ee();
  return t.wakes.stoppedSlugs.has(e) || t.durable.stopLatches.isStopped(e);
}

function ftt(e) {
  let {wakes: t} = ee();
  if (!t.stoppedSlugs.has(e)) v(e), t.stoppedSlugs.add(e), t.sweptSlugs.add(e), D(e); else {
    let n = t.yieldedSlugs.get(e);
    if (n !== void 0) n.wasPaused = !0, D(e);
  }
  t.humanTurnAtScanGeneration = null, t.liftedAtScanGeneration.delete(e), t.orphanedSweptSlugs.delete(e), 
  t.pendingResumeDisclosure.delete(e);
}

function zy(e) {
  return ee().wakes.sweptSlugs.has(e);
}

function i9o() {
  return ee().wakes.sweptSlugs;
}

function a9o() {
  let {wakes: e} = ee();
  for (let t of e.sweptSlugs) e.orphanedSweptSlugs.add(t);
}

function Z4r(e, t) {
  let {wakes: n} = ee(), o = n.yieldedSlugs.get(e);
  if (o !== void 0) {
    o.msgIds.add(t);
    return;
  }
  let r = n.sweptSlugs.has(e) && !n.orphanedSweptSlugs.has(e), i = {
    msgIds: new Set([ t ]),
    wasPaused: r,
    stopGeneration: -1,
    scanGeneration: n.scanGeneration,
    announced: !1,
    stoppedElsewhere: !1,
    latchClockBefore: n.latchChangedAt.get(e)
  };
  n.yieldedSlugs.set(e, i);
  let s = n.humanTurnAtScanGeneration;
  ftt(e), n.humanTurnAtScanGeneration = s, v(e, i.latchClockBefore ?? Number.NaN), 
  i.stopGeneration = i4(e);
}

function l9o(e) {
  let t = ee().wakes.yieldedSlugs.get(e);
  if (t !== void 0) t.announced = !0;
}

function d9o(e) {
  return ee().wakes.yieldedSlugs.get(e)?.announced === !0;
}

function c9o(e, t) {
  let {wakes: n} = ee(), o = n.yieldedSlugs.get(e);
  if (o === void 0 || !o.msgIds.delete(t) || o.msgIds.size > 0) return !1;
  if (n.yieldedSlugs.delete(e), !o.wasPaused && i4(e) === o.stopGeneration && n.scanGeneration === o.scanGeneration) Qvn(e), 
  v(e, o.latchClockBefore ?? Number.NaN); else v(e);
  return !0;
}

function u9o(e) {
  ee().wakes.yieldedSlugs.delete(e);
}

function p9o(e, t) {
  let n = ee().wakes.yieldedSlugs.get(e);
  if (n === void 0 || !n.msgIds.has(t)) return !1;
  return n.stoppedElsewhere = !0, Jvn(e), !0;
}

function f9o(e) {
  return ee().wakes.yieldedSlugs.get(e)?.stoppedElsewhere === !0;
}

function K$(e) {
  return ee().wakes.yieldedSlugs.has(e);
}

function eYr(e) {
  let {wakes: t} = ee(), n = t.yieldedSlugs.get(e);
  return n !== void 0 && !n.wasPaused && i4(e) === n.stopGeneration && t.scanGeneration === n.scanGeneration;
}

function xTe(e) {
  let {wakes: t} = ee();
  return t.orphanedSweptSlugs.has(e) || t.yieldedSlugs.has(e);
}

import { randomUUID as ne } from "crypto";

function Zvn(e, t = 1) {
  return t === 1 ? `Auto-replied to comment thread on Artifact: ${e}` : `Auto-replied to ${t} comment threads on Artifact: ${e}`;
}

function eEn(e, t = 1) {
  return t === 1 ? `Auto-edited Artifact: ${e} in response to a comment thread` : `Auto-edited Artifact: ${e} in response to ${t} comment threads`;
}

function mtt(e) {
  return `Auto-edit on Artifact: ${e} needs review`;
}

function m9o(e) {
  return `Auto-replies on Artifact: ${e} are paused`;
}

function g9o(e) {
  return `Auto-replies on Artifact: ${e} were re-enabled by this publish`;
}

function Ntr(e) {
  return `Auto-replies on Artifact: ${e} were resumed`;
}

function W(e, t = 1, n = !1) {
  return t === 1 && !n ? `Artifact changed: ${e}` : `Artifact changed ${t}${n ? "+" : ""} times: ${e}`;
}

function tEn(e) {
  return `Comments are waiting on Artifact: ${e}`;
}

function h9o(e) {
  return `Claude needs your permission to reply to comments on ${e}`;
}

function y9o(e) {
  return `Reply on ${e} not posted \u2014 Claude has your note`;
}

function _9o(e) {
  return `Auto-edited Artifact: ${e} \u2014 review the change`;
}

function $tr(e) {
  let t = `${e.count} comment ${e.count === 1 ? "thread" : "threads"}`;
  return `Before the stop, ${e.family === "auto-edited" ? `Artifact: ${e.artifactName} had already been auto-edited in response to ${t}` : `automatic replies had already been posted on ${t} of Artifact: ${e.artifactName}`} (the pending notice was discarded with the stop \u2014 the artifact's thread and version history carry the record).`;
}

function b9o(e, t) {
  return `Stopped watching Artifact: ${e} (${t})`;
}

function S9o(e, t) {
  return `Not watching Artifact: ${e} (${t})`;
}

var oe = 15e3, re = 6e4, B = 20;

function ie(e, t, n, o) {
  return e === "auto-replied" ? Zvn(t, n) : e === "auto-edited" ? eEn(t, n) : W(t, n, o);
}

function se(e) {
  let t = ee().noticeCoalesce, n = t.get(e);
  if (n === void 0) return;
  if (t.delete(e), n.timer !== void 0) clearTimeout(n.timer);
  let o = ie(n.family, n.artifactName, n.count, n.suppressedPrior > 0), r = n.droppedDetails > 0 ? `\n\n(${n.droppedDetails} earlier ${n.droppedDetails === 1 ? "notice" : "notices"} in this burst omitted \u2014 newest ${B} kept.)` : "";
  n.queue.enqueuePendingNotification({
    uuid: n.family === "artifact-changed" ? ne() : SEn(void 0, n.ownGestureEpoch === ee().accountEpoch ? n.slug : void 0),
    value: Ri({
      taskType: n.family === "artifact-changed" ? "artifact-changed" : "artifact-auto-react",
      summary: $t(o),
      body: `\n${$t(n.details.join(`\n\n`) + r)}`
    }),
    mode: "task-notification",
    origin: {
      kind: "task-notification",
      source: n.family === "artifact-changed" ? "artifact-changed" : "artifact-auto-react",
      slug: n.slug,
      displayName: n.artifactName,
      coalesced: {
        family: n.family,
        count: n.count
      }
    },
    agentId: Ze()
  });
}

function w9o(e) {
  let {queue: t, slug: n, family: o, artifactName: r, detail: i, mergeDetails: s} = e, S = (e.now ?? Date.now)(), l = e.settle?.settleMs ?? oe, a = e.settle?.maxSettleMs ?? re, b = ee().noticeCoalesce, h = `${o}\n${n}`, k = ee().accountEpoch, u = b.get(h);
  if (u === void 0) u = {
    slug: n,
    family: o,
    artifactName: r,
    mergeDetails: s,
    count: 0,
    threadIds: new Set,
    firstAt: S,
    details: [],
    droppedDetails: 0,
    suppressedPrior: 0,
    ownGestureEpoch: e.ownGesture ? k : void 0,
    queue: t,
    timer: void 0
  }, b.set(h, u); else if (!e.ownGesture || u.ownGestureEpoch !== k) u.ownGestureEpoch = void 0;
  if (u.artifactName = r, u.queue = t, e.threadId !== void 0) u.threadIds.add(e.threadId);
  if (u.count = u.threadIds.size > 0 ? u.threadIds.size : u.count + 1, u.mergeDetails === "latest") u.details = [ i ]; else if (u.details.push(i), 
  u.details.length > B) u.details.shift(), u.droppedDetails++;
  if (u.timer !== void 0) clearTimeout(u.timer);
  let T = u.firstAt + a, L = Math.max(0, Math.min(l, T - S)), _ = setTimeout(se, L, h);
  _.unref?.(), u.timer = _;
}

function F(e) {
  let t = ee().noticeCoalesce, n = [];
  for (let [o, r] of t) {
    if (e !== void 0 && r.slug !== e) continue;
    if (r.family === "artifact-changed") continue;
    if (r.timer !== void 0) clearTimeout(r.timer);
    t.delete(o), n.push({
      slug: r.slug,
      family: r.family,
      artifactName: r.artifactName,
      count: r.count
    });
  }
  return n;
}

function P(e) {
  for (let t of ee().noticeCoalesce.values()) if (t.slug === e && t.family !== "artifact-changed") return !0;
  return !1;
}

function tYr(e) {
  let {autoReact: t, live: n} = ee(), o = n.supervisors.get(e);
  return t.userDisarmed || ay(e) || t.enabledMemo === !1 || (t.artifacts.get(e)?.lastProbeDeniedBy ?? null) !== null || o !== void 0 && !o.stopped && o.armedVia === "mcp_write";
}

function Q(e, t, n) {
  if (t(n), !e.summonArmOkReported) e.summonArmOkReported = !0, g("artifact_summon_arm_emit");
}

function ae(e, t, n) {
  let o = e.activitySenders.get(t);
  if (o === void 0) return;
  let r = e.summonDeclared.get(t);
  if (n && r !== !0) e.summonDeclared.set(t, !0), Q(e, o, "arm:0"); else if (!n && r === !0) e.summonDeclared.set(t, !1), 
  Q(e, o, "arm");
}

function R2(e, t) {
  ae(e, t, tYr(t));
}

function nYr(e) {
  for (let t of e.activitySenders.keys()) R2(e, t);
}

function v9o(e, t) {
  e.summonDeclared.delete(t), R2(e, t);
}

function E9o(e, t) {
  e.summonDeclared.delete(t);
}

var Ftr = 36e5;

var k9o = "4001", Wwt = "4503", zwt = "4403", nEn = 9e5;

var T9o = 3e5, A9o = 3;

function C9o(e) {
  let {transport: t, token: n, ver: o, accountEpoch: r, expUnixSeconds: i, receivedAtMs: s} = e;
  return {
    transport: t,
    token: n,
    expMs: G(t, i, s),
    ver: o,
    accountEpoch: r,
    opened: !1,
    failedDials: 0,
    probed: !1
  };
}

function R9o(e, t) {
  e.token = t.token, e.expMs = G(e.transport, t.expUnixSeconds, t.receivedAtMs), e.probed = !1, 
  e.failedDials = 0;
}

function G(e, t, n) {
  let o = e === "sync" ? 9e5 : 36e5, r = e === "sync" ? 3e5 : 18e5, i = t === void 0 ? o : t * 1e3 - n;
  return n + Math.min(o, Math.max(r, i));
}

function rYr(e, t) {
  if (t.expired || t.refused) return !1;
  if (t.healthy) return e.failedDials = 0, !0;
  return e.failedDials++, e.failedDials < 3;
}

var ue = 6e4, de = 6e4;

function oYr(e, t, n, o = Date.now()) {
  let r = e.transport === "sync" ? de : t.handshakeDeadlineMs + t.minUptimeMs + ue;
  return e.accountEpoch === n && e.expMs - o >= r;
}

function x9o(e) {
  let {timing: t, consecutiveFailures: n, leaseMode: o, spread: r, stalled: i} = e;
  if (i) return ce(t, e.longStall === !0 ? "long" : "short");
  if (o && r) return Math.round(t.spreadMinMs + Math.random() * (t.spreadMaxMs - t.spreadMinMs));
  let s = Math.min(t.capMs, t.baseMs * 2 ** Math.min(n, 5)), p = o ? .5 : .25;
  return Math.max(0, Math.round(s * (1 - p + Math.random() * 2 * p)));
}

function ce(e, t = "short") {
  let n = t === "long" ? e.longStallMinMs : e.stallMinMs, o = t === "long" ? e.longStallMaxMs : e.stallMaxMs;
  return Math.round(n + Math.random() * (o - n));
}

function P9o(e) {
  return Math.round(Math.random() * e.seedDeferMaxMs);
}

import { createHmac as le, randomUUID as me } from "crypto";

var pe = 36e5, fe = 64, ge = Number.MAX_SAFE_INTEGER;

function Se(e, t, n) {
  return le("sha256", TTo(n)).update(e + t, "utf8").digest("hex").slice(0, 16);
}

var he = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;

function ye(e) {
  let t = Number(e.slice(0, 4)), n = Number(e.slice(5, 7)), o = Number(e.slice(8, 10)), r = Number(e.slice(11, 13)), i = Number(e.slice(14, 16)), s = Number(e.slice(17, 19));
  if (n < 1 || n > 12 || o < 1 || r > 23 || i > 59 || s > 59) return !1;
  return new Date(Date.UTC(t, n - 1, o)).getUTCDate() === o;
}

function sYr(e) {
  let t, n = -1 / 0;
  for (let o of e) {
    if (o == null || !TVe.test(o) || !he.test(o) || !ye(o)) continue;
    let r = kS(o);
    if (r !== null && r > n) n = r, t = o;
  }
  return t;
}

function cVt(e) {
  let {handOffs: t} = ee().summonStatus, n = me();
  if (t.set(n, {
    ...e
  }), t.size > fe) {
    let o = new Set(pR().map(i => i.uuid)), r;
    for (let i of t.keys()) if (i !== n && !o.has(i)) {
      r = i;
      break;
    }
    if (r ??= t.keys().next().value, r !== void 0) t.delete(r), f("artifact_comments_autoreact", "handoff_evicted");
  }
  return n;
}

function E(e) {
  let {handOffs: t} = ee().summonStatus;
  for (let n of e) {
    if (n.uuid === void 0) continue;
    let o = t.get(n.uuid);
    if (o === void 0) continue;
    t.delete(n.uuid);
    let r = Ph(o, {
      status: "declined",
      reason: "auto_reply_off"
    });
    f("artifact_comments_autoreact", r ? "handoff_swept" : "handoff_swept_unreported");
  }
}

function uVt(e) {
  let {handOffs: t} = ee().summonStatus;
  if (t.size === 0) return;
  let n = new Set(pR().map(o => o.uuid));
  for (let [o, r] of t) if (r.slug === e && !n.has(o)) t.delete(o);
}

function Ph(e, t) {
  let {slug: n, threadId: o, gestureAt: r, suppressed: i} = e;
  if (i) return !1;
  let s = ee().summonStatus;
  if (s.routeAbsentSince !== null) {
    if (Date.now() - s.routeAbsentSince < pe) return !1;
    s.routeAbsentSince = null;
  }
  let p = s.sidBySlug.get(n);
  if (p === void 0) p = Se(q(), n, e.storageV5), s.sidBySlug.set(n, p);
  let S = t.reason, l = Math.max(s.seqBySid.get(p) ?? 0, Math.floor(Date.now() / 1e3) * 1e3);
  if (l > ge) return !1;
  s.seqBySid.set(p, l + 1);
  let a = e.coversReplyId !== void 0 && !nr.test(e.coversReplyId), b = {
    status: t.status,
    ...S !== void 0 && {
      reason: S
    },
    ...e.coversReplyId !== void 0 && !a && {
      covers_reply_id: e.coversReplyId
    },
    ...r !== void 0 && {
      gesture_at: r
    },
    sid: p,
    seq: l
  };
  return S7o(n, o, b).then(h => {
    switch (h.kind) {
     case "accepted":
      if (a) f("artifact_summon_status_emit", "covers_id_rejected"); else g("artifact_summon_status_emit");
      return;

     case "route_absent":
      s.routeAbsentSince = Date.now(), f("artifact_summon_status_emit", "route_absent");
      return;

     case "skipped":
      if (h.reason === "no-auth") f("artifact_summon_status_emit", "no_auth");
      return;

     case "unsent":
      f("artifact_summon_status_emit", "relay_unavailable", {
        status: h.status
      });
      return;

     case "failed":
      m("artifact_summon_status_emit", h.reason, {
        ...h.status !== void 0 && {
          status: h.status
        }
      });
      return;
    }
  }, () => {
    m("artifact_summon_status_emit", "request_error");
  }), !0;
}

var njs = 3e4;

function rEn(e) {
  let {description: t, agentId: n, taskRef: o} = e, r = e.now ?? Date.now, i = r(), s = 0, p = 0, S = 0, l = 0, a, b, h = !1;
  function k(w) {
    if (h) return;
    h = !0;
    try {
      let A = M => N(pR(), ({monitorEvent: x}) => x?.kind === M && x.watchId === o.id), y = {
        eventsQueued: s,
        eventsStillQueued: A("output"),
        eventsSuppressed: S,
        suppressionNoticesQueued: l,
        noticesStillQueued: A("notice"),
        elapsedMs: r() - i
      };
      if (e.arm !== void 0) g("monitor_watch_closed", {
        arm: c(e.arm),
        closed_by: c(w),
        events_queued: y.eventsQueued,
        events_still_queued: y.eventsStillQueued,
        events_suppressed: y.eventsSuppressed,
        suppression_notices_queued: y.suppressionNoticesQueued,
        notices_still_queued: y.noticesStillQueued,
        elapsed_ms: y.elapsedMs,
        subagent_owned: n !== void 0
      });
      e.onClosed?.(y);
    } catch (A) {
      d(A);
    }
  }
  let {capacity: u, refillMs: T} = e.bucket ?? {
    capacity: Ohe,
    refillMs: Mhe
  }, L = Hhe(u, T, r);
  function _() {
    if (!L.tryConsume()) {
      if (p++, S++, b = r(), a === void 0) a = r();
      return !1;
    }
    if (p > 0) {
      if (x2(t, be(p), o.id, {
        isHousekeeping: !0,
        agentId: n
      }), l++, p = 0, b !== void 0 && r() - b > T * 3) a = void 0;
    }
    return s++, !0;
  }
  let O = w => {
    if (h) return;
    if (_()) {
      x2(t, w, o.id, {
        agentId: n
      });
      return;
    }
    if (a !== void 0 && r() - a > njs) {
      if (k("too_much_output"), e.killTask()) x2(t, `[Monitor stopped \u2014 too much output (${p} events suppressed over ${Math.round((r() - a) / 1e3)}s). Restart with a more selective source.]`, o.id, {
        isHousekeeping: !0,
        agentId: n
      });
    }
  }, R = jtr(O, e.schedule);
  function Z() {
    R.flush(!0), k("flushed");
  }
  return {
    onData: R.onData,
    onBatch: O,
    isClosed: () => h,
    flush: () => R.flush(),
    eventCount: () => s,
    flushAndClose: Z,
    dropAndClose: () => {
      R.drain(), k("dropped");
    },
    reportExit: async (w, A) => {
      let y = h ? void 0 : R.drain();
      k("exited");
      let {terminalNotification: M} = await w.settled, x = y !== void 0 && _();
      if (M !== void 0) {
        let U = [ x ? y : void 0, A ].filter(J => J !== void 0).join(`\n`);
        Utr(U !== "" ? {
          ...M,
          body: Y(U)
        } : M);
      } else if (x) x2(t, y, o.id, {
        agentId: n
      });
    }
  };
}

function be(e) {
  return `[${e} events suppressed \u2014 output rate too high. Consider using TaskStop to restart this monitor with a more selective filter.]`;
}

function Utr(e) {
  rl(c6t(e), {
    turnAttribution: "inherit"
  });
}

var C = 500, j = 3e3, ke = 200, H = 1048576;

function Y(e, t = !1) {
  let n = !t && ORe() ? `\nIf this event is something the user would act on now, send a ${wP}. Routine or benign output doesn't need one.` : "";
  return `\n<${zln}>${$t(e)}</${zln}>${n}`;
}

function x2(e, t, n, o) {
  rl({
    value: Ri({
      taskId: n ? $t(n) : void 0,
      summary: `${S$t}${$t(e)}"`,
      body: Y(t, o?.isHousekeeping)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    agentId: o?.agentId ?? Ze(),
    ...n !== void 0 && {
      monitorEvent: {
        watchId: n,
        kind: o?.isHousekeeping ? "notice" : "output"
      }
    }
  }, {
    turnAttribution: o?.turnAttribution ?? "inherit"
  });
}

function iYr(e) {
  let {taskId: t, toolUseId: n, description: o, ownerAgentId: r, stopperAgentId: i} = e, s = `Task "${o}" was stopped by ${mVt(i)}`;
  rl({
    value: Ri({
      taskId: $t(t),
      toolUseId: n ? $t(n) : void 0,
      status: "stopped",
      summary: $t(s)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    agentId: To(r),
    taskId: t
  });
}

function Btr(e) {
  let {taskId: t, toolUseId: n, description: o, note: r} = e;
  rl({
    value: Ri({
      taskId: $t(t),
      toolUseId: n ? $t(n) : void 0,
      status: "killed",
      summary: $t(r === void 0 ? `Task "${o}" was stopped by the user` : `Task "${o}" was stopped by the user. ${r}`)
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "next",
    passive: !0,
    agentId: Ze(),
    taskId: t
  });
}

function jtr(e, t = n => {
  let o = setTimeout(n, ke);
  return () => clearTimeout(o);
}) {
  let n = "", o = [], r = null;
  function i(S) {
    if (r) r(), r = null;
    if (S && n.trim() && !wir(n.trim())) {
      let a = n.trim();
      if (a.length > C) a = a.slice(0, C) + "...(truncated)";
      o.push(a), n = "";
    }
    if (o.length === 0) return;
    let l = o.join(`\n`);
    if (l.length > j) l = l.slice(0, j) + `\n...(truncated)`;
    return o = [], l;
  }
  function s(S) {
    let l = i(S === !0);
    if (l !== void 0) e(l);
  }
  function p(S) {
    if (n += S, n.length > H) n = n.slice(-H);
    let l;
    while ((l = n.indexOf(`\n`)) !== -1) {
      let a = n.slice(0, l).trim();
      if (n = n.slice(l + 1), wir(a)) continue;
      if (a) {
        if (a.length > C) a = a.slice(0, C) + "...(truncated)";
        o.push(a);
      }
    }
    if (o.length > 0 && !r) r = t(s);
  }
  return {
    onData: p,
    flush: s,
    drain: () => i(!0)
  };
}

function Wtr(e, t, n) {
  let o, r, i;
  if (t.update(e, s => {
    if (s.status !== "running") return s;
    if (o = s.description, r = s.toolUseId, i = s.agentId, s.timeoutId !== void 0) clearTimeout(s.timeoutId);
    return {
      ...s,
      status: n?.endedAs?.status ?? "killed",
      endTime: Date.now(),
      timeoutId: void 0,
      notified: !0,
      terminal: {
        summary: n?.endedAs?.summary ?? s.description
      }
    };
  }), n?.onKilled?.(), lO(i, `monitor:${e}`, t), o !== void 0) {
    if (!n?.quiet) x2(o, "[Monitor stopped]", e, {
      isHousekeeping: !0,
      agentId: i
    });
    ya(e, n?.endedAs?.status ?? "stopped", {
      toolUseId: r,
      summary: n?.endedAs?.summary ?? o
    });
  }
}

function V(e, t, n, o) {
  for (let [r, i] of Object.entries(t.all())) if (n(i) && i.agentId === e && i.status === "running") o(r, t);
}

var I9o = [ "publish", "attach", "watch", "resume", "session_resume", "mcp_write" ];

function q$(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "monitor_ws";
}

function O9o(e, t) {
  Vn().monitorSockets.set(e, t);
}

function ztr(e, t) {
  return Vn().monitorSockets.get(e) === t;
}

function Gtr(e, t, n) {
  return q$(e) && e.status === "running" && e.autoReactArmed === !0 && t() && (n?.includeStopLatched === !0 || !(e.autoReactSlug !== void 0 && ay(e.autoReactSlug)));
}

function Mle(e) {
  return Gtr(e, () => ee().autoReact.enabledMemo === !0);
}

function Ae(e) {
  let t = Vn().monitorSockets.get(e);
  return t !== void 0 && t.readyState <= 1;
}

var K = 3e5, ve = Ftr + K;

function gtt(e, t = Date.now()) {
  let n = e.frameLive === void 0 ? void 0 : ee().live.supervisors.get(e.frameLive.slug);
  if (!Ae(e.id) || n?.transport !== "sync" && t - e.startTime > ve) return !1;
  let o = n?.lease?.expMs;
  return o === void 0 || t <= o + K;
}

function Gwt(e) {
  let t = Vn().monitorSockets.get(e);
  return t !== void 0 && t.readyState === 1;
}

var M9o = {
  name: "MonitorWsTask",
  type: "monitor_ws",
  async kill(e, t, n, o) {
    ib(e, t, (o ?? "user") === "system" ? {} : {
      userStop: !0,
      taskStop: !0,
      modelOrigin: o === "parent"
    });
  }
};

function H9o(e) {
  Vn().frameLiveUserStopObserver = e;
}

function D9o(e) {
  Vn().autoReactHumanTurnObserver = e;
}

function L9o(e) {
  Vn().artifactPresenceStopObserver = e;
}

function N9o(e) {
  Vn().artifactRoomStopObserver?.leave(e);
}

function $9o() {
  return Ven()?.conns.size ?? 0;
}

function aYr(e) {
  let t = Ven(), n = Vn().artifactRoomStopObserver?.disposeAll() ?? 0, o = t?.consentRevoke?.() ?? 0;
  if (n <= 0 && o <= 0 || t?.consentGone?.() === !0) return n;
  let r = "The next publish of such an artifact that declares a room will ask the user before joining again; do not republish to rejoin unless the user asks.", i = {
    agentId: Ze(),
    value: Ri({
      taskType: $G,
      summary: $t(n > 0 ? `Left the live ${I(n, "room")} of ${n} ${I(n, "artifact")} (the user stopped background activity)` : `Forgot the live-room ${I(o, "approval")} of ${o} ${I(o, "artifact")} (the user stopped background activity)`),
      body: `\n<event>${$t(n > 0 ? `Page events from those artifacts' viewers will no longer arrive and room_send to them will report not_connected; every remembered room-join approval was forgotten too. ${r}` : `No room was open. ${r}`)}</event>`
    }),
    mode: "task-notification",
    skipAttachments: !0,
    priority: "later",
    origin: {
      kind: "task-notification",
      source: $G,
      roomLifecycle: !0
    }
  };
  if (e !== void 0) e.enqueuePendingNotification(i); else rl(i);
  return n;
}

function F9o(e) {
  Vn().autoReactDeliberateStopObserver = e;
}

function ib(e, t, n) {
  let o = t.all()[e];
  if (q$(o) && o.autoReactArmed === !0) {
    if (Ole(o.autoReactSlug), o.autoReactSlug !== void 0 && n?.connectionLost !== !0) Yvn(o.autoReactSlug);
    if (n?.userStop === !0 && o.autoReactSlug !== void 0 && (o.status === "running" || !zy(o.autoReactSlug))) oEn(o.autoReactSlug);
  }
  if (n?.userStop === !0 && q$(o) && o.frameLive !== void 0) {
    if (Vn().frameLiveUserStopObserver?.(o.frameLive.slug, {
      running: o.status === "running",
      taskId: e,
      taskStop: n?.taskStop === !0,
      modelOrigin: n?.modelOrigin === !0,
      taskRegistry: t
    }) === !0) if (zy(o.frameLive.slug)) oEn(o.frameLive.slug); else Vn().autoReactDeliberateStopObserver?.(o.frameLive.slug);
  }
  if (n?.userStop === !0 && q$(o) && o.frameLive === void 0 && o.autoReactArmed !== !0) Vn().liveDocUserStopObserver?.(e, {
    modelOrigin: n?.modelOrigin === !0,
    running: o.status === "running"
  }), Vn().artifactRoomStopObserver?.leaveByTaskId(e), Vn().artifactPresenceStopObserver?.closeByTaskId(e);
  Wtr(e, t, {
    quiet: n?.quiet,
    onKilled() {
      let r = Vn().monitorSockets.get(e);
      if (r) Vn().monitorSockets.delete(e), r.close();
    }
  });
}

function U9o(e) {
  Ole(e), Yvn(e), oEn(e);
}

function oEn(e) {
  Jvn(e), Vn().autoReactDeliberateStopObserver?.(e), R2(ee().live, e);
  let t = F(e);
  Vn().artifactRoomStopObserver?.leave(e);
  let n = xS(o => o.origin?.kind === "task-notification" && o.origin.slug === e && pVt(o));
  if (X(n, t), E(n), n.some(Re) || t.length > 0) DN(e);
  a4(0, t);
}

function _e(e) {
  return e === "artifact-auto-react" || e === "artifact-room";
}

function X(e, t) {
  for (let n of e) {
    let o = n.origin;
    if (o?.kind === "task-notification" && o.coalesced !== void 0 && o.coalesced.family !== "artifact-changed" && o.slug !== void 0 && o.displayName !== void 0) t.push({
      slug: o.slug,
      family: o.coalesced.family,
      artifactName: o.displayName,
      count: o.coalesced.count
    });
  }
}

function a4(e, t = [], n) {
  if (e <= 0 && t.length === 0) return;
  let o = I(e, "it", "them"), r = I(e, "this artifact", "these artifacts"), i = I(e, "the watch is kept", "the watches are kept"), s = n?.catchUp === !1 ? "" : " (comments sent to Claude meanwhile are answered then)", p = n?.catchUp === !1 ? "" : ", and comments sent to Claude in the meantime are answered then", S = ", or resume_replies if the user asks", l = `publishing without being asked, while handling a notification or a wake-up, leaves ${o} paused`, a = `the user can stop ${o} for good with \u2715 on the watch in the tasks list or the kill-all-agents gesture`, b = n?.nameChordGesture === !0 ? `this receipt reaches you with a later turn: if that turn is the user's own typed message it has already resumed ${o}${n.catchUp === !1 ? "" : " (comments sent to Claude meanwhile are being answered now)"}, otherwise the user's next message resumes ${o} (so does a publish of ${r} the user asks for${S}; ${l})${p}; ${a}` : `when the user asks you to publish ${r} again, that publish resumes ${o}${S}, as does the user's next typed message \u2014 each only on hosts that pass typed input through as the user's${p}; ${l}`;
  rl({
    agentId: Ze(),
    value: Ri({
      taskType: "artifact-auto-react",
      summary: $t(e > 0 ? `${e} artifact auto-reply ${I(e, "subscription")} paused ${n?.nameChordGesture === !0 ? "until your next message" : "by the interrupt"}${s}` : "Artifact auto-reply activity stopped"),
      body: `\n${$t(t.map($tr).concat(e > 0 ? [ `The user's interrupt paused ${o} and ${i}; ${b}. Do not republish or resume just to re-enable auto-replies unless the user asks.` ] : []).join(`\n\n`))}`
    }),
    mode: "task-notification",
    skipAttachments: !0,
    ...n?.passive === !0 && {
      passive: !0,
      priority: "next"
    },
    origin: {
      kind: "task-notification",
      source: "artifact-auto-react-stop-disclosure",
      nonDurableStop: !0,
      ...t.length > 0 && {
        carriesDiscardRecord: !0
      }
    }
  });
}

function Re(e) {
  return e.origin?.kind === "task-notification" && e.origin.source === "artifact-auto-react";
}

function pVt(e) {
  return e.origin?.kind === "task-notification" && _e(e.origin.source);
}

function Ihe(e, t) {
  let n = F();
  for (let r of n) DN(r.slug);
  if (t?.leaveArtifactRooms === !0) aYr(e);
  let o = e.removeByFilter(pVt);
  for (let r of o) if (r.origin?.kind === "task-notification" && r.origin.source === "artifact-auto-react" && r.origin.slug !== void 0) DN(r.origin.slug);
  return X(o, n), E(o), n;
}

function B9o(e = () => !1) {
  let {pendingNoticeSlugs: t} = ee().shareStatus;
  if (t.size === 0) return 0;
  let n = new Set;
  for (let r of pR()) {
    let i = r.origin?.kind === "task-notification" ? r.origin.slug : void 0;
    if (i !== void 0 && pVt(r)) n.add(i);
  }
  let o = 0;
  for (let r of [ ...t.keys() ]) {
    if (n.has(r) || P(r) || e(r)) continue;
    DN(r), o++;
  }
  return o;
}

function fVt() {
  return {
    disclosures: [],
    staleRows: [],
    watchLifecycle: []
  };
}

function sEn(e) {
  E(e);
  let t = fVt();
  for (let n of e) {
    if (n.origin?.kind !== "task-notification") continue;
    if (n.origin.source === "artifact-auto-react-stop-disclosure") t.disclosures.push(n); else if (n.origin.source === "artifact-changed") t.staleRows.push(n); else if (n.origin.source === $G) t.watchLifecycle.push(n);
  }
  return t;
}

function z(e) {
  return e.origin?.kind === "task-notification" && e.origin.source === "artifact-auto-react-stop-disclosure" && e.origin.nonDurableStop === !0 && e.origin.carriesDiscardRecord !== !0;
}

function j9o(e) {
  if (!ee().autoReact.userDisarmed) return;
  e.removeByFilter(z);
}

function iEn(e, t, n) {
  let o = ee().autoReact.userDisarmed;
  for (let r of t.disclosures) {
    let i = r.origin?.kind === "task-notification" && r.origin.carriesDiscardRecord === !0, s = o && z(r);
    if (i || n === 0 && !s) e.enqueuePendingNotification(r);
  }
  for (let r of t.staleRows) e.enqueuePendingNotification(r);
  for (let r of t.watchLifecycle) e.enqueuePendingNotification(r);
}

function W9o() {
  for (let [e, t] of Vn().monitorSockets) {
    try {
      t.close();
    } catch {}
    Vn().monitorSockets.delete(e);
  }
}

function z9o(e, t) {
  V(e, t, q$, ib);
}

export { Phe, Ole, jwt, Yvn, gW, i4, Xvn, Q4r, Jvn, Qvn, iy, ay, ftt, zy, i9o, a9o, Z4r, l9o, d9o, c9o, u9o, p9o, f9o, K$, eYr, xTe, Zvn, eEn, mtt, m9o, g9o, Ntr, tEn, h9o, y9o, _9o, $tr, b9o, S9o, w9o, tYr, R2, nYr, v9o, E9o, Ftr, k9o, Wwt, zwt, nEn, T9o, A9o, C9o, R9o, rYr, oYr, x9o, P9o, sYr, cVt, uVt, Ph, njs, rEn, Utr, x2, iYr, Btr, jtr, Wtr, I9o, q$, O9o, ztr, Gtr, Mle, gtt, Gwt, M9o, H9o, D9o, L9o, N9o, $9o, aYr, F9o, ib, U9o, oEn, a4, pVt, Ihe, B9o, fVt, sEn, j9o, iEn, W9o, z9o };
