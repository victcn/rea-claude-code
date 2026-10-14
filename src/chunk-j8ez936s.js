// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { l, E } from "./chunk-b0z4bv3v.js";

import { nb, J, We } from "./chunk-nvtwm272.js";

import { i } from "./chunk-hedpgw9m.js";

import { bt, bI, _, Wi, Y, t } from "./chunk-kawq2919.js";

import { nt } from "./chunk-5wbhf1bk.js";

import { ytn } from "./chunk-3zb1ef23.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { X, vOe } from "./chunk-1zg3hbfq.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Cwe, i8e, TGn, ERr, t0t, kRr } from "./chunk-xywp7esx.js";

import { zZo } from "./chunk-ct7rjhpc.js";

import { aa } from "./chunk-w4hwgefc.js";

import { bSs, SSs, qfo, xSs, o7t, PSs, MSs, DSs, A5e } from "./chunk-5ad06083.js";

import { p } from "./chunk-jkzenvsk.js";

import { At } from "./chunk-vps0k559.js";

import { lRs, dRs, lwe } from "./chunk-2mq6q9dt.js";

import { zd, kU, Ive, DVn } from "./chunk-2my8wpr5.js";

import { _r } from "./chunk-35kwehd0.js";

import { kue, Foe } from "./chunk-wsxyczjg.js";

import { w4t, WZo } from "./chunk-y94p5sh8.js";

import { Hjn } from "./chunk-yk8mtyzg.js";

import { Unt } from "./chunk-ytzgaeb3.js";

import { vye } from "./chunk-dnrbyy6h.js";

import { JVe } from "./chunk-gw187v2v.js";

import { v4t, TW } from "./chunk-23ynbxh9.js";

import { E$n } from "./chunk-r49w7s15.js";

import { gSe } from "./chunk-f66gd31c.js";

import { Ys } from "./chunk-7fcp0cw9.js";

import { nHt, pUe } from "./chunk-wzvs3p45.js";

import { qP } from "./chunk-3tedvrs9.js";

import { Pu } from "./chunk-q6wab2jw.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, v, M, oe, T, u, _t, ue, A } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

import { Qo, Yg } from "./chunk-eha3vdmz.js";

import { N } from "./chunk-hmqkrrtz.js";

import { randomUUID as xe } from "crypto";

var ee = 61440, Zt = ee - 4096;

function Xe(e) {
  return Buffer.byteLength(Wi(e)) - 2;
}

function Qe(e, n, r, s, h) {
  return e.firstEvent.index === r.index && e.deltaType === s && e.first.parent_tool_use_id === n.parent_tool_use_id && e.first.thinking_display === n.thinking_display && e.first.api_message_id === n.api_message_id && e.bytes + h <= Zt;
}

function Je(e) {
  if (e.type !== "content_block_delta") return null;
  switch (e.delta.type) {
   case "text_delta":
    return {
      event: e,
      deltaType: "text_delta",
      chunk: e.delta.text,
      estimatedTokens: void 0
    };

   case "input_json_delta":
    return {
      event: e,
      deltaType: "input_json_delta",
      chunk: e.delta.partial_json,
      estimatedTokens: void 0
    };

   case "thinking_delta":
    return {
      event: e,
      deltaType: "thinking_delta",
      chunk: e.delta.thinking,
      estimatedTokens: e.delta.estimated_tokens ?? void 0
    };

   case "citations_delta":
   case "signature_delta":
   case "compaction_delta":
    return null;

   default:
    return e.delta, null;
  }
}

function ve(e) {
  if (e.count === 1) return e.first;
  let n;
  switch (e.deltaType) {
   case "text_delta":
    n = {
      type: "text_delta",
      text: e.accumulated
    };
    break;

   case "input_json_delta":
    n = {
      type: "input_json_delta",
      partial_json: e.accumulated
    };
    break;

   case "thinking_delta":
    n = {
      type: "thinking_delta",
      thinking: e.accumulated,
      estimated_tokens: e.estimatedTokens ?? null
    };
    break;
  }
  return {
    ...e.first,
    event: {
      ...e.firstEvent,
      delta: {
        ...e.firstEvent.delta,
        ...n
      }
    }
  };
}

function _e(e) {
  if (e.length <= 1) return e;
  let n = [], r = null;
  for (let s of e) {
    let h = Je(s.event);
    if (h === null) {
      if (r !== null) n.push(ve(r)), r = null;
      n.push(s);
      continue;
    }
    let {event: S, deltaType: y, chunk: k, estimatedTokens: R} = h, I = Xe(k);
    if (r !== null && Qe(r, s, S, y, I)) {
      if (r.accumulated += k, r.bytes += I, r.count += 1, typeof R === "number") r.estimatedTokens = (r.estimatedTokens ?? 0) + R;
      continue;
    }
    if (r !== null) n.push(ve(r));
    r = {
      first: s,
      firstEvent: S,
      deltaType: y,
      accumulated: k,
      estimatedTokens: R,
      bytes: I,
      count: 1
    };
  }
  if (r !== null) n.push(ve(r));
  return n;
}

function ge(e, n) {
  let r = e.findIndex(h => h.uuid === n);
  if (r < 0) return n;
  let s = null;
  for (let h = 0; h <= r; h++) {
    let S = e[h], y = Je(S.event);
    if (y === null) {
      s = null;
      continue;
    }
    let {event: k, deltaType: R, chunk: I} = y, C = Xe(I);
    if (s !== null && Qe(s, S, k, R, C)) s.bytes += C; else s = {
      first: S,
      firstEvent: k,
      deltaType: R,
      bytes: C
    };
  }
  return s?.first.uuid ?? n;
}

var en = 64;

class be {
  rowsAhead;
  queuedSince=new WeakSet;
  attempts=[];
  posts=0;
  failedPosts=0;
  rows=0;
  constructor(e) {
    this.rowsAhead = e;
  }
  noteQueued(e) {
    for (let n of e) this.queuedSince.add(n);
  }
  noteAttempt(e, n, r) {
    let s = N(e, h => this.queuedSince.has(h));
    if (this.posts++, r) this.rows += s; else this.failedPosts++;
    if (this.attempts.length < en) this.attempts.push({
      startedAt: n,
      endedAt: performance.now(),
      ahead: s === 0
    });
  }
  seen(e) {
    let n = 0, r = 0;
    for (let {startedAt: s, endedAt: h, ahead: S} of this.attempts) {
      let y = Math.max(0, h - Math.max(s, e));
      if (S) n += y; else r += y;
    }
    return {
      aheadMs: n,
      postMs: r,
      posts: this.posts,
      failedPosts: this.failedPosts,
      rowsAhead: this.rowsAhead,
      rows: this.rows
    };
  }
}

var rkt = 1536;

function ye(e) {
  return Array.isArray(e) && e.every(n => typeof n === "string");
}

function Ze(e, n = rkt) {
  let r = e.compactMetadata;
  if (!L(r)) return null;
  let s = r.preservedMessages;
  if (!L(s)) return null;
  let h = s.uuids;
  if (!ye(h) || h.length <= n) return null;
  let S = h.slice(-n), y = S[0], k = s.allUuids, R = ye(k) ? k.indexOf(y) : -1, I = r.preservedSegment;
  return {
    ...e,
    compactMetadata: {
      ...r,
      preservedMessages: {
        ...s,
        uuids: S,
        ...ye(k) && {
          allUuids: R >= 0 ? k.slice(R) : k.slice(-n)
        }
      },
      ...L(I) && {
        preservedSegment: {
          ...I,
          headUuid: y
        }
      }
    }
  };
}

var tn = {
  stream_event: !0,
  system: !0
}, nn = {
  message_start: !0,
  message_delta: !0,
  message_stop: !0,
  content_block_start: !0,
  content_block_delta: !0,
  content_block_stop: !0
}, rn = {
  text_delta: !0,
  input_json_delta: !0,
  citations_delta: !0,
  thinking_delta: !0,
  signature_delta: !0,
  compaction_delta: !0
};

function et(e) {
  let {event: n} = e;
  if (n.type === "message_start" && n.message?.input_transformations) {
    let {input_transformations: r, ...s} = n.message;
    return {
      ...e,
      event: {
        ...n,
        message: s
      }
    };
  }
  if (n.type === "message_delta" && n.input_transformations) {
    let {input_transformations: r, ...s} = n;
    return {
      ...e,
      event: s
    };
  }
  return e;
}

function Ee(e, n) {
  let r = rt(e.event);
  t(`CCRClient: dropping oversize ephemeral stream_event (${ke(r)}, ${n} bytes, over the ${ee}-byte limit)`, {
    level: "warn"
  }), f("ccr_partial_messages", "oversize_ephemeral_skipped", {
    ...r,
    bytes: n
  });
}

function tt(e) {
  if (!L(e)) return {
    payload_type: b("other")
  };
  let {type: n, event: r} = e;
  return {
    payload_type: c(Se(tn, n)),
    ...n === "stream_event" && rt(r)
  };
}

function ke(e) {
  return Object.entries(e).map(([n, r]) => `${n}=${r}`).join(" ");
}

function rt(e) {
  if (!L(e)) return {
    event_type: b("other")
  };
  let {type: n, delta: r, content_block: s} = e, h = L(s) ? s.type : void 0;
  return {
    event_type: c(Se(nn, n)),
    ...n === "content_block_delta" && {
      delta_type: c(Se(rn, L(r) ? r.type : void 0))
    },
    ...n === "content_block_start" && {
      content_block_type: Cwe(h) ? c(h) : b("other")
    }
  };
}

function Se(e, n) {
  for (let r in e) if (r === n) return r;
  return "other";
}

var sn = 5e3, an = 32, on = new Set([ "message_start", "message_delta", "message_stop", "content_block_start", "content_block_delta", "content_block_stop", "ping" ]);

function te(e) {
  return e.ephemeral === !0 && (on.has(we(e)?.type) || e.payload.type === "system" && e.payload.subtype === "thinking_tokens");
}

class Te {
  deps;
  stream;
  waiting=[];
  pumping=!1;
  closed=!1;
  rowWaitTimer;
  overdue;
  quieted=new Map;
  constructor(e) {
    this.deps = e, this.stream = e.stream({
      onChange: () => this.pump(),
      onSent: e.onSent,
      onAcked: e.onAcked,
      onSubscribers: e.onSubscribers,
      onHandBack: n => void this.waiting.unshift(st(n, {})),
      onBroken: n => this.onBroken(n)
    });
  }
  enqueue(e, n) {
    if (n.urgent && !e.some(te)) return this.deps.post.enqueue(e, n);
    let r = this.dropQuieted(e);
    if (!(!this.closed && n.release === void 0 && !n.urgent && r.every(y => te(y) && !this.deps.post.holdsOnArrival(y)))) return this.queueForPost(r, n).queued ?? Promise.resolve();
    if (r.length === 0) return Promise.resolve();
    let h = this.waiting.at(-1);
    if (h?.path === "either") return h.events = this.deps.merge(h.events.concat(r)), 
    Promise.resolve();
    let S = {
      path: "either",
      events: r,
      since: n.since
    };
    return this.waiting.push(S), this.pump(), S.queued ?? Promise.resolve();
  }
  release(e) {
    if (this.deps.post.release(e), this.waiting.some(n => n.path === "post")) this.queueForPost([], {
      release: e
    });
  }
  prepare() {
    if (!this.closed && this.deps.watched()) this.stream.open();
  }
  takeOffer(e) {
    this.stream.takeOffer(e);
  }
  streaming() {
    return this.stream.state() === "open";
  }
  streamState() {
    return this.stream.state();
  }
  fallbackReason() {
    return this.stream.fallbackReason();
  }
  fallbackWindowMs() {
    return this.stream.fallbackWindowMs();
  }
  breakCountHeader(e) {
    return this.stream.breakCountHeader(e);
  }
  breakCountStated(e) {
    this.stream.breakCountStated(e);
  }
  get waitingCount() {
    let e = 0;
    for (let n of this.waiting) e += n.events.length;
    return e;
  }
  settled() {
    return new Promise(e => {
      this.queueForPost([], {}, e);
    });
  }
  withdraw(e) {
    let n = 0;
    for (let r of this.waiting) {
      let s = r.events.filter(h => !e(h));
      n += r.events.length - s.length, r.events = s;
    }
    return n;
  }
  close() {
    if (this.closed) return;
    this.closed = !0, this.onBroken(this.stream.close()), this.pump();
  }
  pump() {
    if (this.pumping) return;
    this.pumping = !0;
    try {
      while (this.moveFirst()) ;
    } finally {
      this.pumping = !1;
    }
    this.armRowWait();
  }
  queueForPost(e, n, r) {
    let s = st(e, n, r);
    return this.waiting.push(s), this.pump(), s;
  }
  moveFirst() {
    let [e, n] = this.waiting;
    if (e === void 0) return !1;
    if (e.path === "either" && n?.path !== "post" && this.stream.state() === "open") {
      if (!this.stream.canSend() || this.deps.post.busy()) return !1;
      if (!this.deps.post.holds(te)) {
        if (e.events = this.stream.send(e.events), e.events.length > 0) return !1;
        return this.waiting.shift(), !0;
      }
    }
    if (!this.stream.quiet()) return !1;
    if (this.waiting.shift(), e.path === "post") {
      if (e.events.length > 0) e.queued = this.deps.post.enqueue(e.events, e.held); else if (e.held.release !== void 0) this.deps.post.release(e.held.release);
      return e.onMoved?.(), !0;
    }
    if (n?.path === "post") n.events = e.events.concat(n.events), n.held = {
      ...n.held,
      since: e.since ?? n.held.since
    }; else e.queued = this.deps.post.enqueue(e.events, {
      since: e.since
    });
    return this.prepare(), !0;
  }
  onBroken(e) {
    let n = !1;
    for (let r of e) {
      let s = we(r);
      if (s === void 0 || s.type === "ping") continue;
      n = !0;
      let h = s.type === "message_start", S = this.quieted.get(s.stream);
      if (S === void 0) this.quieted.set(s.stream, {
        startDelivered: !h
      }); else if (h) S.startDelivered = !1;
    }
    if (!n) return;
    for (let r of this.quieted.keys()) {
      if (this.quieted.size <= an) break;
      if (r !== "") this.quieted.delete(r);
    }
    this.deps.onGap();
    for (let r of this.waiting) r.events = this.dropQuieted(r.events);
  }
  dropQuieted(e) {
    if (this.quieted.size === 0) return e;
    return e.filter(n => {
      let r = te(n) ? we(n) : void 0, s = r && this.quieted.get(r.stream);
      if (!r || !s) return !0;
      if (r.type !== "message_start" && r.type !== "message_stop") return !1;
      return this.quieted.delete(r.stream), r.type === "message_start" || s.startDelivered;
    });
  }
  armRowWait() {
    let e = this.waiting.find(r => r.path === "post"), n = e?.path === "post" && !this.stream.quiet();
    if (n && e === this.overdue) return;
    if (clearTimeout(this.rowWaitTimer), this.rowWaitTimer = void 0, this.overdue = void 0, 
    !n) return;
    this.rowWaitTimer = setTimeout((r, s) => r.onRowWaitOver(s), Math.max(0, e.waitingSince + (this.deps.maxRowWaitMs ?? sn) - performance.now()), this, e);
  }
  onRowWaitOver(e) {
    this.overdue = e, this.rowWaitTimer = setTimeout(n => {
      n.overdue = void 0, n.stream.abort();
    }, 0, this);
  }
}

function st(e, n, r) {
  return {
    path: "post",
    events: e,
    held: n,
    waitingSince: performance.now(),
    onMoved: r
  };
}

function we(e) {
  let {payload: n} = e;
  if (n.type !== "stream_event" || !L(n.event)) return;
  return {
    stream: typeof n.parent_tool_use_id === "string" ? n.parent_tool_use_id : "",
    type: n.event.type
  };
}

var ae = 1, ne = 1, ln = [ "unspecified", "drain", "max_age", "reauth", "fence", "limit", "off", "protocol", "content" ], dn = new Set([ "fence", "limit", "off", "protocol", "content" ]);

function re(e, n) {
  let r = n;
  while (r > 127) e.push(r % 128 | 128), r = Math.floor(r / 128);
  e.push(r);
}

function it(e, n) {
  let r = [ 8, ae, 16 ];
  if (re(r, e), r.push(26, 1, ne), n > 0) r.push(32), re(r, n);
  let s = [ 34 ];
  return re(s, r.length), new Uint8Array(s.concat(r));
}

function ot(e, n) {
  let r = [ 8, ne, 16 ];
  re(r, e);
  let s = n.map(k => {
    let R = [ 26 ];
    return re(R, k.length), R;
  }), h = r.length;
  for (let k = 0; k < n.length; k++) h += s[k].length + n[k].length;
  let S = new Uint8Array(h);
  S.set(r, 0);
  let y = r.length;
  for (let k = 0; k < n.length; k++) S.set(s[k], y), y += s[k].length, S.set(n[k], y), 
  y += n[k].length;
  return S;
}

function lt(e) {
  return 2 + Math.floor(Math.log2(Math.max(e, 1)) / 7);
}

function dt(e) {
  let n = {
    kind: "other"
  };
  return A5e(e, {
    onBytes(s, h) {
      if (s === 1) n = un(h); else if (s === 2) n = cn(h); else if (s === 3) n = hn(h);
    }
  }) ? n : null;
}

function un(e) {
  let n = {
    kind: "hello_ack",
    protocolVersion: 0,
    servesLiveLane: !1,
    maxFrameBytes: 0,
    ackEveryMs: 0,
    idleCloseMs: 0,
    fallbackWindowMs: 0
  };
  return A5e(e, {
    onVarint(s, h) {
      switch (s) {
       case 1:
        n.protocolVersion = h;
        break;

       case 2:
        n.servesLiveLane ||= h === ne;
        break;

       case 3:
        n.maxFrameBytes = h;
        break;

       case 4:
        n.ackEveryMs = h;
        break;

       case 5:
        n.idleCloseMs = h;
        break;

       case 7:
        n.fallbackWindowMs = h;
        break;
      }
    },
    onBytes(s, h) {
      if (s === 2) n.servesLiveLane ||= h.includes(ne);
    }
  }) ? n : null;
}

function cn(e) {
  let n = {
    kind: "ack",
    lane: 0,
    seq: 0,
    hasSubscribers: void 0,
    throttled: !1
  };
  return A5e(e, {
    onVarint(s, h) {
      if (s === 1) n.lane = h; else if (s === 2) n.seq = h; else if (s === 3) n.hasSubscribers = h !== 0; else if (s === 4) n.throttled = h !== 0;
    }
  }) ? n : null;
}

function hn(e) {
  let n = {
    kind: "go_away",
    reason: "unspecified",
    retryAfterMs: 0,
    postOnlyMs: 0,
    fallbackWindowMs: 0,
    lastSeq: void 0,
    final: !1
  }, r = A5e(e, {
    onVarint(s, h) {
      switch (s) {
       case 1:
        n.reason = ln[h] ?? "unknown";
        break;

       case 2:
        n.retryAfterMs = h;
        break;

       case 3:
        n.postOnlyMs = h;
        break;

       case 5:
        n.fallbackWindowMs = h;
        break;

       case 6:
        n.lastSeq = h;
        break;
      }
    }
  });
  return n.final = n.lastSeq !== void 0 || dn.has(n.reason), r ? n : null;
}

var pn = {
  openTimeoutMs: 5e3,
  ackEveryMs: 250,
  minStallMs: 1500,
  lateTimerMs: 250,
  idleCloseMs: 15e3,
  maxFrameEvents: 32,
  maxUnackedBytes: 262144,
  maxUnackedFrames: 48,
  maxFramesPerSecond: 24,
  maxBytesPerSecond: 327680,
  backoffBaseMs: 1e3,
  backoffMaxMs: 3e4,
  stallsToLatch: 2,
  stallsToLatchForGood: 5,
  latchMs: 3e5
}, mn = 36e5, ut = 5e3, fn = 5e3, vn = 1e3, _n = 3e4, Pe = 65536, gn = 12, bn = p(() => _t({
  protocol_version: v(),
  first_open_spread_ms: v().nullish(),
  generation: v().nullish()
}));

class Ue {
  deps;
  limits;
  now;
  random;
  closed=!1;
  offered=!1;
  generation;
  phase="idle";
  connection;
  cause;
  notBeforeMs=0;
  latchedUntilMs=0;
  goAwayUntilMs=0;
  servedFallbackWindowMs=0;
  failures=0;
  stallsInARow=0;
  stallsInAll=0;
  expiredAuth;
  breaks;
  breakIsNews=!0;
  everDialed=!1;
  openTimer;
  idleTimer;
  stallTimer;
  paceTimer;
  stallTimerDueAt=0;
  constructor(e) {
    this.deps = e, this.limits = {
      ...pn,
      ...e.limits
    }, this.now = e.now ?? (() => performance.now()), this.random = e.random ?? Math.random, 
    this.breaks = e.firstBreakCount ?? Date.now();
  }
  state() {
    if (!this.offered && this.phase === "idle") return "off";
    if (this.phase === "idle" && this.now() < this.latchedUntilMs) return "latched";
    return this.phase;
  }
  takeOffer(e) {
    if (this.closed) return;
    let n = bn().safeParse(e);
    if (!n.success || n.data.protocol_version !== ae) {
      if (this.offered = !1, this.phase === "opening" && this.connection) this.endByPlan(this.connection); else if (this.phase === "open") this.leave();
      return;
    }
    let r = n.data.generation ?? 0;
    if (this.generation !== r) this.generation = r, this.latchedUntilMs = 0, this.stallsInARow = 0, 
    this.stallsInAll = 0;
    if (!this.offered) this.offered = !0, this.delayOpens(this.random() * Ae(n.data.first_open_spread_ms ?? 0));
  }
  open() {
    let e = this.now();
    if (this.closed || !this.offered || this.phase !== "idle" || e < this.notBeforeMs || e < this.latchedUntilMs) return;
    let n = this.deps.authHeaders(), r = Object.values(n).join(`\n`), s = this.deps.workerEpoch();
    if (r === "" || !(s > 0)) return;
    let h = at(r);
    if (h === this.expiredAuth) {
      this.backOff("refused");
      return;
    }
    let S;
    try {
      S = this.deps.dial(this.deps.url, n);
    } catch {
      this.backOff("refused"), f("ccr_upload_stream", "dial_threw");
      return;
    }
    let y = {
      socket: S,
      auth: h,
      dialedAt: e,
      openedAt: void 0,
      sentSeq: 0,
      unacked: [],
      unackedBytes: 0,
      throttled: !1,
      waitingSince: e,
      lastHeardAt: e,
      lastFrameAt: e,
      stallMs: 0,
      idleCloseMs: 0,
      maxUnackedBytes: 0,
      secondStartedAt: e,
      secondFrames: 0,
      secondBytes: 0,
      frames: 0,
      events: 0,
      bytes: 0,
      ackedFrames: 0
    };
    this.connection = y, this.phase = "opening", this.everDialed = !0, S.onopen = () => {
      if (this.connection === y) S.send(it(s, this.breaks));
    }, S.onmessage = k => this.onMessage(y, k.data), S.onerror = () => this.onSocketGone(y), 
    S.onclose = () => this.onSocketGone(y), this.openTimer = setTimeout((k, R) => k.onOpenTimeout(R), this.limits.openTimeoutMs, this, y);
  }
  canSend() {
    let e = this.connection;
    return this.phase === "open" && e !== void 0 && !e.throttled && e.unackedBytes < e.maxUnackedBytes && e.unacked.length < this.limits.maxUnackedFrames && !this.atSecondsLimit(e);
  }
  atSecondsLimit(e) {
    if (this.now() - e.secondStartedAt >= 1e3) e.secondStartedAt = this.now(), e.secondFrames = 0, 
    e.secondBytes = 0;
    if (e.secondFrames < this.limits.maxFramesPerSecond && e.secondBytes < this.limits.maxBytesPerSecond) return !1;
    return this.wakeAtNextSecond(e), !0;
  }
  wakeAtNextSecond(e) {
    this.paceTimer ??= setTimeout(n => {
      n.paceTimer = void 0, n.deps.onChange();
    }, Math.max(0, e.secondStartedAt + 1e3 - this.now()), this);
  }
  quiet() {
    return this.connection === void 0 || this.connection.unacked.length === 0;
  }
  send(e) {
    let n = this.connection, r = 0;
    while (n && this.canSend() && r < e.length) {
      let s = r, h = [], S = [], y = Math.min(n.maxUnackedBytes - n.unackedBytes, this.limits.maxBytesPerSecond - n.secondBytes), k = n.unacked.length === 0 && n.secondBytes === 0, R = gn;
      while (r < e.length && S.length < this.limits.maxFrameEvents) {
        let w = e[r], U = yn(w.payload), F = U.length + lt(U.length);
        if (R + F > y && (S.length > 0 || !k)) break;
        if (r++, U.length > 0 && U.length <= Pe) h.push(w), S.push(U), R += F; else Sn(w.payload, U.length);
      }
      if (r === s) {
        this.wakeAtNextSecond(n);
        break;
      }
      if (S.length === 0) continue;
      let I = ot(++n.sentSeq, S), C = this.now();
      if (n.unacked.length === 0) n.waitingSince = C;
      n.unacked.push({
        seq: n.sentSeq,
        events: h,
        bytes: I.length
      }), n.unackedBytes += I.length, n.lastFrameAt = C, n.frames++, n.events += S.length, 
      n.bytes += I.length, n.secondFrames++, n.secondBytes += I.length, this.deps.onSent(h);
      try {
        n.socket.send(I);
      } catch {
        this.phase = "leaving", setTimeout((w, U) => w.onSocketGone(U), 0, this, n);
        break;
      }
      this.armStallTimer(n);
    }
    return r === 0 ? e : e.slice(r);
  }
  abort() {
    if (this.connection) this.fail(this.connection, "broke", "ack_wait_timeout");
  }
  fallbackReason() {
    if (this.phase === "open" || !this.offered) return;
    if (this.now() < this.latchedUntilMs) return "latched";
    return this.cause ?? "opening";
  }
  breakCountHeader(e = !0) {
    return this.everDialed ? `${this.breaks}${e && this.breakIsNews ? ";new" : ""}` : void 0;
  }
  breakCountStated(e) {
    if (e === this.breakCountHeader()) this.breakIsNews = !1;
  }
  fallbackWindowMs() {
    let e = Math.max(this.goAwayUntilMs, this.offered ? this.latchedUntilMs : 0);
    return this.now() < e ? this.servedFallbackWindowMs : 0;
  }
  close() {
    let e = this.closed ? void 0 : this.connection;
    if (this.closed = !0, this.offered = !1, !e) return [];
    let n = this.endByPlan(e);
    if (n.length > 0) this.raiseBreakCount();
    return n;
  }
  onMessage(e, n) {
    if (this.connection !== e) return;
    e.lastHeardAt = this.now();
    let r = n instanceof ArrayBuffer ? new Uint8Array(n) : n, s = r instanceof Uint8Array ? dt(r) : null;
    if (s === null) {
      this.fail(e, this.phase === "opening" ? "refused" : "broke", "bad_reply");
      return;
    }
    switch (s.kind) {
     case "hello_ack":
      this.onHelloAck(e, s);
      break;

     case "ack":
      this.onAck(e, s);
      break;

     case "go_away":
      this.onGoAway(e, s);
      break;

     case "other":
      break;
    }
  }
  onHelloAck(e, n) {
    if (this.phase !== "opening") return;
    if (n.protocolVersion !== ae || !n.servesLiveLane) {
      this.fail(e, "refused", "unusable_hello_ack");
      return;
    }
    clearTimeout(this.openTimer);
    let r = this.now(), {limits: s} = this;
    this.phase = "open", this.cause = void 0, this.expiredAuth = void 0, this.goAwayUntilMs = 0, 
    this.servedFallbackWindowMs = Math.min(n.fallbackWindowMs, ut), e.openedAt = r, 
    e.lastFrameAt = r, e.stallMs = Math.max(2 * Math.min(n.ackEveryMs || s.ackEveryMs, fn), s.minStallMs), 
    e.idleCloseMs = n.idleCloseMs ? Ie(n.idleCloseMs, vn, _n) : s.idleCloseMs, e.maxUnackedBytes = n.maxFrameBytes ? Ie(n.maxFrameBytes / 2, Pe, s.maxUnackedBytes) : s.maxUnackedBytes, 
    this.armIdleTimer(e), this.deps.onChange();
  }
  onAck(e, n) {
    if (n.lane !== ne) return;
    let r = this.settle(e, n.seq), s = e.throttled;
    if (e.throttled = n.throttled && e.unacked.length > 0, !r && s === e.throttled) return;
    if (this.phase === "leaving" && e.unacked.length === 0) this.endByPlan(e);
    if (this.deps.onChange(), r) this.deps.onSubscribers(n.hasSubscribers);
  }
  onGoAway(e, n) {
    let r = Ae(n.postOnlyMs) + this.random() * Ae(n.retryAfterMs);
    if (this.delayOpens(r), this.goAwayUntilMs = this.now() + r, n.fallbackWindowMs > 0) this.servedFallbackWindowMs = Math.min(n.fallbackWindowMs, ut);
    let {reason: s} = n;
    if (s === "reauth") this.expiredAuth = e.auth;
    if (t(`UploadStream: server sent go-away (${s}) while ${this.state()}, last_seq ${n.lastSeq ?? "unset"}`), 
    this.phase === "opening") {
      this.end(e), this.backOff("refused"), f("ccr_upload_stream", `refused_${s}`), this.deps.onChange();
      return;
    }
    if (!n.final) {
      this.cause = "goaway", this.leave();
      return;
    }
    if (n.lastSeq !== void 0) this.settle(e, n.lastSeq);
    let h;
    if (s === "drain" || s === "max_age" || s === "reauth") this.cause = "goaway", h = this.endByPlan(e); else this.backOff("goaway"), 
    f("ccr_upload_stream", `goaway_${s}`, Ce(e, this.now())), h = this.end(e);
    if (n.lastSeq === void 0) this.reportBroken(h); else if (h.length > 0) this.deps.onHandBack(h);
    this.deps.onChange();
  }
  settle(e, n) {
    let r = 0;
    while (r < e.unacked.length) {
      let s = e.unacked[r];
      if (s.seq > n) break;
      e.unackedBytes -= s.bytes, r++;
    }
    if (r === 0) return !1;
    return e.ackedFrames += r, e.waitingSince = this.now(), this.stallsInARow = 0, this.deps.onAcked(e.unacked.splice(0, r).flatMap(s => s.events)), 
    !0;
  }
  leave() {
    let e = this.connection;
    if (!e || this.phase === "leaving") return;
    if (this.phase = "leaving", e.unacked.length === 0) this.endByPlan(e);
    this.deps.onChange();
  }
  endByPlan(e) {
    if (e.openedAt !== void 0) {
      if (e.ackedFrames > 0 || this.cause !== "goaway") this.failures = 0; else this.backOff("goaway");
      g("ccr_upload_stream", Ce(e, this.now()));
    }
    return this.end(e);
  }
  onSocketGone(e) {
    if (this.connection === e) this.fail(e, this.phase === "opening" ? "refused" : "broke", this.phase === "opening" ? "open_failed" : "socket_closed");
  }
  onOpenTimeout(e) {
    if (this.connection === e && this.phase === "opening") this.fail(e, "refused", "open_timeout");
  }
  armIdleTimer(e) {
    let n = this.now() - e.lastFrameAt;
    this.idleTimer = setTimeout((r, s) => r.onIdleTimer(s), n < e.idleCloseMs ? e.idleCloseMs - n : e.idleCloseMs, this, e);
  }
  onIdleTimer(e) {
    if (this.connection !== e || this.phase !== "open") return;
    if (e.unacked.length > 0 || this.now() < e.lastFrameAt + e.idleCloseMs) {
      this.armIdleTimer(e);
      return;
    }
    this.leave();
  }
  armStallTimer(e) {
    if (this.stallTimer !== void 0) return;
    let n = Math.max(0, Re(e) - this.now());
    this.stallTimerDueAt = this.now() + n, this.stallTimer = setTimeout((r, s) => r.onStallTimer(s), n, this, e);
  }
  onStallTimer(e) {
    if (this.stallTimer = void 0, this.connection !== e || e.unacked.length === 0) return;
    let n = this.now();
    if (n - this.stallTimerDueAt > this.limits.lateTimerMs) e.waitingSince = n;
    if (n < Re(e)) {
      this.armStallTimer(e);
      return;
    }
    this.stallTimer = setTimeout((r, s) => r.confirmStall(s), 0, this, e);
  }
  confirmStall(e) {
    if (this.stallTimer = void 0, this.connection !== e || e.unacked.length === 0) return;
    if (this.now() < Re(e)) {
      this.armStallTimer(e);
      return;
    }
    if (this.stallsInARow++, this.stallsInAll++, this.stallsInAll >= this.limits.stallsToLatchForGood) this.latchedUntilMs = 1 / 0; else if (this.stallsInARow >= this.limits.stallsToLatch) this.latchedUntilMs = this.now() + this.limits.latchMs * (.75 + this.random() / 2);
    this.fail(e, "stalled", "stalled");
  }
  fail(e, n, r) {
    t(`UploadStream: socket ended (${r}) while ${this.state()}, ${e.unacked.length} frame(s) unacknowledged; live events go by POST`), 
    f("ccr_upload_stream", r, Ce(e, this.now()));
    let s = this.end(e);
    this.backOff(n), this.reportBroken(s), this.deps.onChange();
  }
  reportBroken(e) {
    if (e.length > 0) this.raiseBreakCount(), this.deps.onBroken(e);
  }
  raiseBreakCount() {
    this.breaks++, this.breakIsNews = !0;
  }
  backOff(e) {
    this.cause = e, this.failures++, this.delayOpens(this.random() * Math.min(this.limits.backoffBaseMs * 2 ** (this.failures - 1), this.limits.backoffMaxMs));
  }
  delayOpens(e) {
    this.notBeforeMs = Math.max(this.notBeforeMs, this.now() + e);
  }
  end(e) {
    clearTimeout(this.openTimer), clearTimeout(this.idleTimer), clearTimeout(this.stallTimer), 
    clearTimeout(this.paceTimer), this.stallTimer = this.paceTimer = void 0;
    let {socket: n} = e;
    n.onopen = n.onmessage = n.onerror = n.onclose = null;
    try {
      n.close(1e3);
    } catch {}
    return this.connection = void 0, this.phase = "idle", e.unacked.flatMap(r => r.events);
  }
}

function Re(e) {
  return Math.max(e.waitingSince, e.lastHeardAt) + e.stallMs;
}

function Ie(e, n, r) {
  return Math.min(Math.max(e, n), r);
}

function Ae(e) {
  return Ie(e, 0, mn);
}

function yn(e) {
  try {
    return Buffer.from(_(e));
  } catch {
    return new Uint8Array(0);
  }
}

function Sn(e, n) {
  let r;
  try {
    r = tt(e);
  } catch {
    r = {
      payload_type: b("unreadable")
    };
  }
  let s = n > 0 ? `${n} bytes, over the ${Pe}-byte limit` : "it cannot be serialized";
  if (t(`UploadStream: dropping a live event (${ke(r)}): ${s}`, {
    level: "warn"
  }), n > 0) f("ccr_partial_messages", "upload_stream_oversize_dropped", {
    ...r,
    bytes: n
  }); else f("ccr_partial_messages", "upload_stream_unserializable_dropped", r);
}

function Ce(e, n) {
  return {
    frames: e.frames,
    events: e.events,
    bytes: e.bytes,
    unacked_frames: e.unacked.length,
    dial_to_open_ms: Math.round((e.openedAt ?? n) - e.dialedAt),
    age_ms: Math.round(n - e.dialedAt)
  };
}

class Oe {
  inflight=null;
  pending=null;
  remembered={};
  closed=!1;
  config;
  constructor(e) {
    this.config = e;
  }
  enqueue(e) {
    if (this.closed) return;
    this.pending = this.pending ? Fe(this.pending, e) : e, this.remember(e), this.drain();
  }
  remember(e) {
    if (this.config.remembers) this.remembered = Fe(this.remembered, e);
  }
  close() {
    this.closed = !0, this.pending = null;
  }
  get unsent() {
    return this.inflight !== null;
  }
  async flush() {
    while (!this.closed) if (this.inflight) await this.inflight; else if (this.pending) await this.drain(); else return !0;
    return !1;
  }
  async drain() {
    if (this.inflight || this.closed) return;
    if (!this.pending) return;
    let e = this.pending;
    this.pending = null, this.inflight = this.sendWithRetry(e).then(() => {
      if (this.inflight = null, this.pending && !this.closed) this.drain();
    });
  }
  async sendWithRetry(e) {
    let n = e, r = 0;
    while (!this.closed) {
      if (await this.config.send(n)) return;
      if (r++, await J(this.retryDelay(r)), this.pending && !this.closed) n = Fe(n, this.pending), 
      this.pending = null;
    }
  }
  retryDelay(e) {
    let n = Math.min(this.config.baseDelayMs * 2 ** (e - 1), this.config.maxDelayMs), r = Math.random() * this.config.jitterMs;
    return n + r;
  }
}

function Fe(e, n) {
  let r = {
    ...e
  };
  for (let [s, h] of Object.entries(n)) if ((s === "external_metadata" || s === "internal_metadata") && r[s] && typeof r[s] === "object" && typeof h === "object" && h !== null) r[s] = {
    ...r[s],
    ...h
  }; else r[s] = h;
  return r;
}

var ht = {}, pt = "x-ccr-upload-break-count", Ot = 2e4, mt = 1e4, xt = 15e3, Bt = 5e3, Dt = Bt, kn = 5e3, wn = 3e5, ft = 2e3, Tn = xt + Dt + 2 * Ot, Rn = 5e3, Mn = 12e5, vt = 1.5, An = 3, Cn = new Set([ 401, 403, 404, 429 ]), okt = 100;

function K(e) {
  return e === 400 || e === 413 || e === 422;
}

var qe = 1e4, gt = 6e4, $e = 1048576, Pn = 5e3, In = 12e4, Un = 1.5, je = 262144;

function yt(e, {maxMs: n, minMs: r = qe}) {
  let s = qe + Math.round(e.bytes / $e * (Pn / 1e3)) * 1e3, h = e.bytes >= je && !e.cuttable ? s * Un ** e.retryCount : s;
  return Math.max(r, Math.min(n, Math.round(h)));
}

var Fn = new Set([ "remote_tool_call", "remote_plumbing_call" ]);

function On(e) {
  return Fn.has(Ht(e));
}

var xn = new Set(vye), Bn = 256;

function Ht(e) {
  let n = e.payload.type === "control_request" ? e.payload.request : void 0;
  return typeof n === "object" && n !== null && "subtype" in n ? n.subtype : void 0;
}

function le(e) {
  let n = E(e);
  if (n) return n;
  if (e && typeof e === "object" && "name" in e && typeof e.name === "string") return e.name;
  return;
}

class d0e extends Error {
  reason;
  httpStatus;
  constructor(e, n) {
    super(`CCRClient init failed: ${e}`);
    this.reason = e;
    this.httpStatus = n;
  }
}

function UZo(e) {
  return e instanceof d0e && e.reason === "worker_register_failed" && !K(e.httpStatus);
}

var Dn = 10, Ysr = {
  epoch_conflict: 4090,
  superseded_by_worker: 4090,
  session_not_active: 4090,
  epoch_stale: 4090,
  session_not_found: 4090,
  token_expired: 4094,
  auth_exhausted: 4094
}, Hn = {
  epoch_conflict: !0,
  superseded_by_worker: !0,
  session_not_active: !0,
  epoch_stale: !0,
  session_not_found: !1,
  token_expired: !1,
  auth_exhausted: !1
}, Ln = 3, Nn = 10, de = 3;

async function Wn(e, n) {
  let r = e.body?.getReader(), s = new TextDecoder, h = "", S = 0;
  for (let y = await (r?.read()); y !== void 0 && !y.done; y = await (r?.read())) {
    if (S += y.value.byteLength, S > n) return await (r?.cancel()), null;
    h += s.decode(y.value, {
      stream: !0
    });
  }
  return {
    text: h + s.decode(),
    bytes: S
  };
}

function qn(e, n) {
  let r = e.payload?.timestamp;
  return r === void 0 || typeof r === "string" && r.length <= n;
}

var $n = 1e4, St = 3e4;

function Et(e) {
  return e !== void 0 && e >= 400 && e < 500 ? "not_accepted" : "indeterminate";
}

function Be(e) {
  let n = !1, r = !1;
  for (let s of e) if (s.payload.subtype === "task_notification") n = !0; else if (s.payload.subtype === "background_tasks_changed") r = !0;
  return n || r ? {
    has_terminal_bookend: n,
    has_level: r
  } : null;
}

function ce(e) {
  return Math.min(Math.max(0, Math.trunc(e) || 0), 2147483647);
}

var De = {
  "/worker": "worker_state",
  "/worker/events": "events",
  "/worker/events/delivery": "delivery",
  "/worker/heartbeat": "heartbeat",
  "/worker/internal-events": "internal_events"
}, jn = 512, Gn = "upgrade_relay_marker";

function Lt(e) {
  return {
    tool_name: e.tool_name,
    display_tool_name: e.display_tool_name,
    action_description: e.action_description,
    raw_command: e.raw_command,
    request_id: e.request_id,
    tool_use_id: e.tool_use_id
  };
}

var zn = p(() => u({
  tool_name: o().refine(e => !e.startsWith("dialog:")),
  display_tool_name: o().nullish(),
  action_description: o(),
  raw_command: o().nullish(),
  request_id: o(),
  tool_use_id: o().min(1),
  suppressed_request_id: o().nullish()
})), Vn = p(() => u({
  data: T(_t({
    event_id: o(),
    event_type: o(),
    payload: ue(o(), oe()),
    event_metadata: ue(o(), oe()).nullish(),
    is_compaction: M(),
    created_at: o(),
    session_agent_id: o().optional()
  })),
  next_cursor: o().optional()
})), Kn = p(() => u({
  results: T(u({
    event_id: o(),
    duplicate: M()
  }))
}));

function Yn(e) {
  let n = zn().safeParse(e);
  if (!n.success) return;
  let r = n.data, s = gSe(r);
  if (s === void 0) return;
  return {
    requestId: s,
    details: Lt({
      tool_name: r.tool_name,
      display_tool_name: r.display_tool_name ?? void 0,
      action_description: r.action_description,
      raw_command: r.raw_command ?? void 0,
      request_id: r.request_id,
      tool_use_id: r.tool_use_id
    })
  };
}

function Xn(e) {
  if (e === "pending") return {
    status: "idle",
    reason: "get_pending"
  };
  if (e.readFailed) return {
    status: "idle",
    reason: "get_failed"
  };
  let n = e.external?.pending_action;
  if (n === void 0 || n === null) return {
    status: "idle",
    reason: "no_pending_action"
  };
  let r = Yn(n);
  if (!r) return {
    status: "idle",
    reason: "not_reportable"
  };
  return {
    status: "requires_action",
    reason: "park",
    ...r
  };
}

function Qn(e, n) {
  if (e === "requires_action") return {
    reported: e
  };
  let r = n.external?.pending_actions;
  return {
    reported: e,
    pendingActionOutstanding: n.readFailed === !0 || n.external?.pending_action !== void 0 && n.external.pending_action !== null || Array.isArray(r) && r.length > 0
  };
}

var Jn = p(() => _t({
  max_events: v().nullish(),
  max_age_ms: v().nullish(),
  max_bytes: v().nullish(),
  flush_on_sampling_end: M().nullish(),
  flush_on_assistant: M().nullish(),
  flush_before_tools_wait_ms: v().nullish(),
  flush_after_tools: o().nullish(),
  must_flush_types: T(o()).nullish(),
  live_twin_types: T(o()).nullish().catch(void 0),
  policy_version: o().nullish()
})), Zn = 50, Nt = 12e4, er = 6e4, tr = 1048576, nr = 32, rr = 32, sr = 57344, ir = /^[A-Za-z0-9._-]{1,16}$/, ar = 3e4, or = 2e3, lr = [ "none", "write", "all" ], dr = 64, ur = 50, cr = 5e3, hr = !0, pr = !1, mr = 3e3, fr = 1e4, vr = e => e.ephemeral === !0 || e.payload.type === "keep_alive", kt = () => !1;

function pJr() {
  return a.CLAUDE_CODE_WORKER_EPOCH ?? NaN;
}

function gr(e) {
  let n = e?.error;
  return n?.type === "not_found_error" && n.resource_type === "client_event";
}

function wt(e, n) {
  return e.toLowerCase() === n.toLowerCase();
}

function br(e) {
  if (e === 404) return "http_404_unknown_body";
  if (e === 401 || e === 403) return "http_refused";
  if (e === 429) return "http_rate_limited";
  if (e === 501) return "http_not_served";
  return e >= 500 ? "http_server_error" : "http_other";
}

var yr = p(() => u({
  event_id: o(),
  source: A("client"),
  created_at: o(),
  payload: _t({
    uuid: o()
  }),
  sent_by_account_id: o().nullish(),
  device_attestation_status: oe().optional(),
  session_agent_owned: M()
}));

function Sr(e, n) {
  let r = yr().safeParse(e);
  if (!r.success) return {
    kind: "unavailable",
    why: "malformed"
  };
  let {event_id: s, created_at: h, payload: S} = r.data, y = Date.parse(h);
  if (!wt(s, n) || !Number.isFinite(y) || !wt(S.uuid, n)) return {
    kind: "unavailable",
    why: "malformed"
  };
  return {
    kind: "event",
    event: {
      eventId: n,
      createdAtMs: y,
      sentByAccountId: r.data.sent_by_account_id ?? void 0,
      deviceAttestationStatus: r.data.device_attestation_status,
      sessionAgentOwned: r.data.session_agent_owned,
      payload: S
    }
  };
}

function Xsr(e, n) {
  if (e.protocol !== "http:" && e.protocol !== "https:") {
    let s = ytn(e.protocol, "session_url_protocol");
    throw Error(`CCRClient: Expected http(s) URL${s === void 0 ? "" : `, got ${s}`}`);
  }
  let r = e.pathname.replace(/\/$/, "");
  return {
    sessionBaseUrl: `${e.protocol}//${e.host}${r}`,
    getAuthHeaders: n
  };
}

class QL {
  workerEpoch=0;
  heartbeatIntervalMs;
  heartbeatJitterFraction;
  seedHeartbeatIntervalMs;
  advertiseHeartbeatProbeSupport;
  uploadTrim;
  uploadHoldMarker;
  servedCallRequestsJumpQueue;
  maxEventPostTimeoutMs;
  urgentRequestIds=new Set;
  eventHoldEnabled;
  processExiting;
  gatesToolCalls;
  toolCallRowGraceMs;
  flushPolicy;
  holdRule;
  seesModelCallBoundaries=!1;
  holdSwitchedOff=!1;
  shutdownReleased=!1;
  shutdownKeepsClientEvents=!1;
  viewerAbsentReported=!1;
  stopToolCallGate;
  toolCallRows={
    client_events: new Map,
    internal_events: new Map
  };
  toolCallRowWaiters=new Map;
  awaitedToolCalls=new Set;
  transcriptLaneInUse=!1;
  gatedWriteToolCalls=new Set;
  lanesNotAnswering=new Set;
  loggedUnreadableFlushPolicy=!1;
  loggedHoldSwitchedOff=!1;
  loggedTranscriptEnvelopeStrip=!1;
  loggedToolResultBlank=!1;
  loggedMcpImageBlank=!1;
  maxAdvisedIntervalMs;
  beatOnStaleReconnect;
  beatOnReactivation;
  skipRedundantHeartbeats;
  idleTracker;
  unsubscribeIdleTracker;
  probeBeatSpacingMs;
  heartbeatTimer=null;
  heartbeatInFlight=!1;
  lastHeartbeatSentAtMs=0;
  lastCadenceTickAtMs=0;
  lastBeatingEventsPostOkAtMs=0;
  skippedPreviousCadenceBeat=!1;
  lastHeartbeatSuccessAtMs=Date.now();
  lastHeartbeat429AtMs=0;
  idleGrantLatched=!1;
  reactivationBeatArmed=!1;
  pendingForcedBeat=!1;
  probeBeatTimer=null;
  pendingBeatTrigger=null;
  closed=!1;
  closeAbort=new AbortController;
  goodbyeFlushed=Promise.resolve();
  leftMidTurn=!1;
  epochSuperseded=!1;
  lastEpochMismatchCause;
  epochMismatchCount=0;
  consecutiveAuthFailures=0;
  lastAuthRefreshBadReason=null;
  consecutiveNotFound=0;
  consecutiveHeartbeatFailures=0;
  currentState=null;
  reportParkAtInit;
  initExternalMetadata;
  initialWorkerStatus;
  initStateGetOrderingBoundMs;
  parkReportedAtInitRequestId=void 0;
  sessionBaseUrl;
  sessionId;
  readSource;
  streamEventBuffer=[];
  streamEventTimer=null;
  firstFrameUpload;
  firstTextFrameUpload;
  firstBlockFrameUpload;
  streamEventBufferedAt=0;
  streamEventFlushDueAt=0;
  streamEventFlushIntervalMs=okt;
  streamEventFirstFlushMs=0;
  streamEventFlushOnFirstDelta=!1;
  firstDeltaFlushTimer=null;
  firstContentFlushPending=!1;
  parkedRows=[];
  noSubscriberStreamEventFlushIntervalMs=0;
  noSubscriberUploadHoldMs=0;
  closingForSuccessor=!1;
  dropUnwatchedStreamEvents=!1;
  lastReportedHasSubscribers;
  lastInboundEventAtMs=Number.NEGATIVE_INFINITY;
  viewerReportedSinceLastFalse=!1;
  lastViewerLeftAtMs=Number.NEGATIVE_INFINITY;
  unwatchedPastGrace=!1;
  hasSubscribersReports=0;
  streamEventsDroppedUnwatched=0;
  streamedEphemeralSinceLastAssistant=!1;
  workerState;
  eventUploader;
  uploadPaths;
  workerSocket;
  internalEventUploader;
  internalEventPostWatch;
  rowsAwaitingCompactSummary=new Map;
  rowsAwaitingCompactSummaryAtClose;
  onInternalBatchAcked;
  onInternalEventLaneClosed;
  rowsRepeatedAfterCompaction;
  deliveryUploader;
  pendingProcessingAcks=[];
  onEpochMismatch;
  lastLineWhen;
  onDurableEventsDropped=void 0;
  onDurableEventsUpload=void 0;
  getAuthHeaders;
  onDiagnostic;
  onRequestAuthOk;
  onHeartbeatLost;
  readTransport;
  nonOrigin403Transient;
  nonOriginRuns=new Map;
  heartbeatStreakStartedAtMs=0;
  heartbeatLostFiredForStreak=!1;
  adoptRefreshedAuth;
  gzipRequestBodyFetch;
  ownConnectionPool;
  constructor(e, n, r) {
    this.lastLineWhen = r?.onEpochMismatch ? "queued" : "now", this.onEpochMismatch = r?.onEpochMismatch ?? (() => {
      process.exit(1);
    }), this.onHeartbeatLost = r?.onHeartbeatLost, this.readTransport = e, this.workerSocket = r?.workerSocket, 
    this.nonOrigin403Transient = r?.nonOrigin403Transient ?? !1, this.heartbeatIntervalMs = r?.heartbeatIntervalMs ?? Ot, 
    this.seedHeartbeatIntervalMs = this.heartbeatIntervalMs, this.advertiseHeartbeatProbeSupport = r?.advertiseHeartbeatProbeSupport ?? !1, 
    this.uploadTrim = r?.uploadTrim ?? (() => ht), this.uploadHoldMarker = () => r?.uploadHoldMarker?.() === !0, 
    this.servedCallRequestsJumpQueue = () => r?.servedCallRequestsJumpQueue?.() === !0, 
    this.maxEventPostTimeoutMs = r?.maxEventPostTimeoutMs ?? In, this.eventHoldEnabled = r?.eventHoldEnabled, 
    this.processExiting = r?.processExiting ?? (() => !1), this.gatesToolCalls = r?.gatesToolCalls === !0, 
    this.toolCallRowGraceMs = r?.toolCallRowGraceMs ?? or, this.beatOnStaleReconnect = r?.beatOnStaleReconnect ?? !1, 
    this.idleTracker = r?.idleTracker, this.beatOnReactivation = (r?.beatOnReactivation ?? !1) && this.idleTracker !== void 0, 
    this.skipRedundantHeartbeats = r?.skipRedundantHeartbeats ?? !1, this.probeBeatSpacingMs = r?.probeBeatSpacingMs ?? Rn, 
    this.heartbeatJitterFraction = r?.heartbeatJitterFraction ?? 0, this.maxAdvisedIntervalMs = this.maxAdvisedIntervalFor(this.advertiseHeartbeatProbeSupport), 
    this.getAuthHeaders = r?.getAuthHeaders ?? kU, this.onDiagnostic = r?.onDiagnostic, 
    this.onRequestAuthOk = r?.onRequestAuthOk, this.adoptRefreshedAuth = r?.adoptRefreshedAuth, 
    this.gzipRequestBodyFetch = r?.gzipRequestBodyFetch, this.ownConnectionPool = r?.ownConnectionPool, 
    this.reportParkAtInit = r?.reportParkAtInit ?? !1, this.initExternalMetadata = r?.initExternalMetadata ?? {}, 
    this.initialWorkerStatus = r?.initialWorkerStatus ?? "idle", this.initStateGetOrderingBoundMs = r?.initStateGetOrderingBoundMs ?? $n, 
    this.readSource = {
      ...Xsr(n, this.getAuthHeaders),
      isClosed: () => this.closed,
      onConflict: y => this.handleEpochMismatch(y),
      ownConnectionPool: this.ownConnectionPool
    }, this.sessionBaseUrl = this.readSource.sessionBaseUrl, this.sessionId = n.pathname.replace(/\/$/, "").split("/").pop() || "", 
    this.workerState = new Oe({
      send: async y => {
        let k = await this.request("put", "/worker", {
          worker_epoch: this.workerEpoch,
          ...y
        }, "PUT worker");
        if (k.ok) {
          if (y.worker_status !== void 0) g("ccr_worker_state_publish");
          return !0;
        }
        if (K(k.status)) {
          if (X("warn", "cli_worker_state_4xx_dropped", {
            status: k.status
          }), this.droppedWorkerStatePatchCount++, y.worker_status !== void 0) f("ccr_worker_state_publish", "state_4xx_dropped");
          return !0;
        }
        return !1;
      },
      baseDelayMs: 500,
      maxDelayMs: 3e4,
      jitterMs: 500
    }), this.eventUploader = new t0t({
      maxBatchSize: 100,
      maxBatchBytes: this.workerSocket?.maxBatchBytes ?? 10 * $e,
      maxQueueSize: 1e5,
      send: async (y, k) => {
        let R = kRr(y);
        if (R > 0) t(`CCRClient: dropped ${R} repeated-uuid durable event(s) from one /worker/events POST`);
        let I = yt(k, {
          maxMs: this.maxEventPostTimeoutMs,
          minMs: y.some(On) ? gt : k.followsUrgent ? Math.min(gt, this.maxEventPostTimeoutMs) : void 0
        });
        this.reportDurableUpload(y, "sending");
        let C = this.actsOnSubscribersReports(), w = C || this.onSubscribersReported !== void 0, U = this.hasSubscribersReports, F = [];
        for (let O of this.trackedFrameUploads("ackedAtMs")) if (y.some(q => q.payload.uuid === O.uuid)) F.push(O.timing);
        for (let O of F) if (O.postedAtMs === void 0) O.postedAtMs = performance.now(), 
        O.postedWallMs = Date.now();
        let H = this.uploadStreamHeaders(y), D = await this.request("post", "/worker/events", this.uploadBody(y, k), "client events", {
          timeout: I,
          parseBody: w,
          headers: H
        });
        if (D.ok) {
          this.noteBreakCountStated(H);
          for (let q of F) if (q.ackedAtMs === void 0) q.ackedAtMs = performance.now();
          let O = Be(y);
          if (O) g("ccr_task_status_publish", O);
          if (this.noteBeatingEventsPostOk(y), this.reportDurableUpload(y, "accepted"), this.noteToolCallRowsSettled("client_events", "stored", y), 
          C && U === this.hasSubscribersReports) this.setHasSubscribers(D.data?.has_subscribers, "no_report");
          this.tellSubscribersReported(D.data?.has_subscribers);
          return;
        }
        if (this.reportDurableUpload(y, Et(D.status)), K(D.status)) {
          let O = y.filter(B => !B.ephemeral), q = y.length - O.length, x = D.status, j = this.uploadPaths?.streamState(), z = j && {
            upload_stream_state: j,
            upload_stream_offered: j !== "off"
          };
          if (q > 0) {
            if (t(`CCRClient: client event POST rejected (${D.status}) \u2014 dropping ${q} ephemeral event(s), retrying ${O.length} durable event(s)`, {
              level: "warn"
            }), f("ccr_partial_messages", "ephemeral_dropped_on_4xx", {
              status: D.status,
              count: q,
              ...j && {
                upload_stream_state: c(j)
              }
            }), y.splice(0, y.length, ...O), X("warn", "cli_worker_events_4xx_ephemeral_dropped", {
              status: D.status,
              count: q,
              ...z
            }), O.length === 0) return;
            this.reportDurableUpload(O, "sending");
            let B = this.uploadStreamHeaders(O), W = await this.request("post", "/worker/events", this.uploadBody(O, k), "client events (durable retry)", {
              timeout: I,
              headers: B
            });
            if (W.ok) {
              this.noteBreakCountStated(B);
              let G = Be(O);
              if (G) g("ccr_task_status_publish", G);
              this.noteBeatingEventsPostOk(O), this.reportDurableUpload(O, "accepted"), this.noteToolCallRowsSettled("client_events", "stored", O);
              return;
            }
            if (this.reportDurableUpload(O, Et(W.status)), !K(W.status)) throw W.fetchFailed ? this.retrySmaller("client_events", O, k, I, {
              bytes: O.reduce((G, Z) => G + Buffer.byteLength(_(Z)), 0)
            }) : new i8e("client event POST failed", W.retryAfterMs);
            x = W.status;
          }
          if (O.length > 0) {
            this.droppedDurableEventBatches++, this.noteToolCallRowsSettled("client_events", "dropped", O);
            try {
              this.onDurableEventsDropped?.(O, x);
            } catch (B) {
              t(`CCRClient: onDurableEventsDropped threw; batch still dropped: ${l(B)}`, {
                level: "warn"
              });
            }
          }
          X("warn", "cli_worker_events_4xx_dropped", {
            status: x,
            count: O.length,
            ...z
          });
          let P = Be(O);
          if (P) m("ccr_task_status_publish", "status_events_4xx_dropped", P);
          return;
        }
        if (D.fetchFailed) throw this.retrySmaller("client_events", y, k, I);
        throw new i8e("client event POST failed", D.retryAfterMs);
      },
      baseDelayMs: 500,
      maxDelayMs: 3e4,
      jitterMs: 500,
      onHoldRelease: this.logUploadHoldEnd.bind(this, "client_events"),
      onDrained: this.logUploadDrain.bind(this, "client_events"),
      onIdle: () => this.uploadPaths?.pump()
    });
    let s = r?.uploadStream, h = Mr(n);
    this.uploadPaths = s && h !== void 0 ? new Te({
      post: this.eventUploader,
      stream: y => new Ue({
        ...y,
        ...s,
        url: h,
        authHeaders: () => this.getAuthHeaders(),
        workerEpoch: () => this.workerEpoch
      }),
      merge: y => this.mergeWaitingLiveEvents(y),
      watched: () => this.lastReportedHasSubscribers !== !1,
      onSent: y => this.stampTrackedFrames(y, "postedAtMs"),
      onAcked: y => this.stampTrackedFrames(y, "ackedAtMs"),
      onSubscribers: y => {
        if (this.actsOnSubscribersReports()) this.setHasSubscribers(y, "no_report");
        this.tellSubscribersReported(y);
      },
      onGap: () => f("ccr_partial_messages", "gap_after_stream_break")
    }) : void 0;
    let S = r?.internalEventUploader;
    this.internalEventUploader = new t0t({
      maxBatchSize: 100,
      maxBatchBytes: S?.maxBatchBytes ?? this.workerSocket?.maxBatchBytes ?? 10 * $e,
      maxQueueSize: 200,
      maxConsecutiveFailures: S?.maxConsecutiveFailures,
      onBatchDropped: (y, k) => {
        this.droppedInternalEventBatches++, X("warn", "cli_worker_internal_events_give_up_dropped", {
          count: y,
          consecutive_failures: k
        }), i("tengu_ccr_internal_events_dropped", {
          reason: b("give_up"),
          count: y,
          consecutive_failures: k
        });
      },
      send: async (y, k) => {
        let R = this.dropOrphanedHandedOffLines(y);
        if (R > 0) {
          if (X("warn", "cli_worker_internal_events_handoff_orphans_dropped", {
            count: R
          }), i("tengu_ccr_internal_events_dropped", {
            reason: b("handoff_orphan"),
            count: R
          }), y.length === 0) return;
        }
        let I = performance.now(), C = yt(k, {
          maxMs: this.maxEventPostTimeoutMs,
          minMs: S?.requestTimeoutMs
        }), w = await this.request("post", "/worker/internal-events", this.uploadBody(y, k), "internal events", {
          timeout: C
        });
        if (this.markInternalEventPostWatch(U => U.noteAttempt(y, I, w.ok)), w.ok) {
          this.noteToolCallRowsSettled("internal_events", "stored", y), Promise.resolve().then(() => this.onInternalBatchAcked?.(y)).catch(() => {});
          return;
        }
        if (K(w.status) && R === 0 && k.mayResendInTwo()) throw i("tengu_ccr_internal_events_refused_will_split", {
          count: y.length,
          status: w.status
        }), new TGn;
        if (K(w.status)) {
          this.droppedInternalEventBatches++, this.noteRefusedInternalEvents(y), this.noteToolCallRowsSettled("internal_events", "dropped", y), 
          X("warn", "cli_worker_internal_events_4xx_dropped", {
            status: w.status,
            count: y.length
          }), i("tengu_ccr_internal_events_dropped", {
            reason: b("4xx"),
            count: y.length,
            status: w.status
          });
          return;
        }
        if (w.fetchFailed) throw this.retrySmaller("internal_events", y, k, C);
        throw new i8e("internal event POST failed", w.nonOriginRefusal ? St : w.retryAfterMs);
      },
      baseDelayMs: 500,
      maxDelayMs: St,
      jitterMs: 500,
      holdMaxItems: 50,
      gatherTick: !0,
      onHoldRelease: this.logUploadHoldEnd.bind(this, "internal_events"),
      onDrained: this.logUploadDrain.bind(this, "internal_events")
    }), this.deliveryUploader = new t0t({
      maxBatchSize: 64,
      maxQueueSize: 64,
      send: async y => {
        let k = await this.request("post", "/worker/events/delivery", {
          worker_epoch: this.workerEpoch,
          updates: y.map(R => ({
            event_id: R.eventId,
            status: R.status
          }))
        }, "delivery batch");
        if (k.ok) return;
        if (K(k.status)) {
          X("warn", "cli_worker_delivery_4xx_dropped", {
            status: k.status,
            count: y.length
          }), this.droppedDeliveryAckBatches++;
          return;
        }
        throw new i8e("delivery POST failed", k.retryAfterMs);
      },
      baseDelayMs: 500,
      maxDelayMs: 3e4,
      jitterMs: 500
    }), this.setStreamEventFlushIntervalMs(r?.streamEventFlushIntervalMs), this.setStreamEventFirstFlushMs(r?.streamEventFirstFlushMs), 
    this.setStreamEventFlushOnFirstDelta(r?.streamEventFlushOnFirstDelta), this.setNoSubscriberStreamEventFlushIntervalMs(r?.noSubscriberStreamEventFlushIntervalMs), 
    this.setNoSubscriberUploadHoldMs(r?.noSubscriberUploadHoldMs), this.setDropUnwatchedStreamEvents(r?.dropUnwatchedStreamEvents), 
    e.setOnEvent(y => {
      if (this.processExiting() && Ge(y)) return;
      this.reportDelivery(y.event_id, "received");
    }), e.setOnHeartbeatProbe(() => {
      this.setHasSubscribers(void 0, "reset"), this.heartbeatNow("probe");
    }), e.setOnReconnected(() => {
      this.resyncAfterReconnect(), r?.onStreamReconnected?.();
    }), this.workerSocket?.setHeartbeatSender(y => {
      if (this.heartbeatTimer === null) this.startHeartbeat();
      this.sendHeartbeat(y === "first" ? "socket" : "socket_ended");
    }), this.unsubscribeIdleTracker = this.beatOnReactivation ? this.idleTracker?.onActivity(() => this.sendReactivationBeat()) : void 0;
  }
  maxAdvisedIntervalFor(e) {
    return e ? Math.floor(Pu / (1 + this.heartbeatJitterFraction)) : wn;
  }
  setFeatureGatedOptions({advertiseHeartbeatProbeSupport: e, beatOnStaleReconnect: n, beatOnReactivation: r, skipRedundantHeartbeats: s}) {
    this.advertiseHeartbeatProbeSupport = e, this.maxAdvisedIntervalMs = this.maxAdvisedIntervalFor(e), 
    this.beatOnStaleReconnect = n, this.skipRedundantHeartbeats = s;
    let h = r && this.idleTracker !== void 0;
    if (h !== this.beatOnReactivation) this.beatOnReactivation = h, this.unsubscribeIdleTracker?.(), 
    this.unsubscribeIdleTracker = h && !this.closed ? this.idleTracker?.onActivity(() => this.sendReactivationBeat()) : void 0;
  }
  async initialize(e) {
    let n = Date.now();
    if (Object.keys(this.getAuthHeaders()).length === 0) throw new d0e("no_auth_headers");
    if (e === void 0) e = pJr();
    if (isNaN(e)) throw new d0e("missing_epoch");
    this.workerEpoch = e;
    let r = this.getWorkerState(), s = await Promise.race([ r.then(D => D.metadata, () => ({
      external: null,
      internal: null,
      readFailed: !0
    })), J(this.initStateGetOrderingBoundMs).then(() => "pending") ]), h = this.reportParkAtInit ? Xn(s) : void 0, S = {
      worker_status: "idle",
      worker_epoch: this.workerEpoch,
      external_metadata: {
        ...this.initExternalMetadata,
        task_summary: null
      }
    }, y = h === void 0 ? {
      worker_status: this.initialWorkerStatus,
      worker_epoch: this.workerEpoch,
      external_metadata: {
        ...this.initExternalMetadata,
        pending_action: null,
        pending_actions: null,
        task_summary: null
      }
    } : h.status === "requires_action" ? {
      ...S,
      worker_status: "requires_action",
      requires_action_details: h.details
    } : S, k = {
      ok: !1
    }, R = new Set, I = 10, C = 0;
    for (let D = 1; D <= I; D++) {
      if (this.closed) break;
      if (C = D, k = await this.request("put", "/worker", y, "PUT worker (init)", {
        parseBody: this.uploadPaths !== void 0
      }), k.ok || this.closed) break;
      if (k.reason) R.add(k.reason);
      if (this.onDiagnostic?.(`PUT /worker failed (${k.reason ?? "unknown"}) attempt=${D}/${I}, ${Math.round((Date.now() - n) / 1e3)}s elapsed`, "warn", "worker_registration_attempt_failed"), 
      K(k.status)) {
        if (h?.status === "requires_action") {
          h = {
            status: "idle",
            reason: "park_rejected"
          }, y = S, D--;
          continue;
        }
        break;
      }
      if (D < I) {
        let O = Math.min(500 * 2 ** (D - 1), 3e4) + Math.random() * 500;
        await J(O);
      }
    }
    if (!k.ok) {
      if (!this.closed) X("error", "cli_worker_init_put_retries_exhausted"), this.onDiagnostic?.(`PUT /worker retries exhausted: ${C} attempts over ${Math.round((Date.now() - n) / 1e3)}s, errors=[${[ ...R ].join(",") || "unknown"}]`, "warn", "worker_registration_gave_up");
      if (this.workerSocket) this.stopHeartbeat();
      throw new d0e("worker_register_failed", k.status);
    }
    this.currentState = h?.status ?? this.initialWorkerStatus;
    let {worker_epoch: w, ...U} = y;
    if (this.workerState.remember(U), this.applyUploadHold("idle"), L(k.data) && k.data.upload_stream != null) this.uploadPaths?.takeOffer(k.data.upload_stream);
    if (this.parkReportedAtInitRequestId = h?.status === "requires_action" ? h.requestId : void 0, 
    !this.workerSocket || this.heartbeatTimer === null) this.startHeartbeat();
    if (!this.closed) {
      if (lRs(() => {
        this.writeEvent({
          type: "keep_alive"
        });
      }), this.gatesToolCalls) this.stopToolCallGate = DSs(D => this.gateToolCall(D));
    }
    if (t(`CCRClient: initialized, epoch=${this.workerEpoch}`), X("info", "cli_worker_lifecycle_initialized", {
      epoch: this.workerEpoch,
      duration_ms: Date.now() - n,
      reported_status: this.currentState
    }), _r("worker_init_ms", Date.now() - n, n - performance.timeOrigin), h) i("tengu_ccr_init_park_report", {
      reported: c(h.status),
      reason: c(h.reason)
    });
    let {metadata: F, durationMs: H} = await r;
    if (!this.closed) X("info", "cli_worker_state_restored", {
      duration_ms: H,
      had_state: F.external !== null || F.internal !== null,
      read_failed: F.readFailed === !0
    });
    return h ? {
      ...F,
      initParkReport: Qn(h.status, F)
    } : F;
  }
  async getWorkerState(e = "worker_state", n = !1) {
    let r = Date.now(), s = this.getAuthHeaders();
    if (Object.keys(s).length === 0) return {
      metadata: {
        external: null,
        internal: null,
        readFailed: !0
      },
      projectsAssertion: void 0,
      durationMs: 0
    };
    let h = await QL.getWithRetry(this.readSource, `${this.sessionBaseUrl}/worker${Ut(n)}`, s, e, void 0, void 0, {
      signal: this.closeAbort.signal
    });
    return {
      metadata: {
        external: h?.worker?.external_metadata ?? null,
        internal: h?.worker?.internal_metadata ?? null,
        ...h === null && {
          readFailed: !0
        }
      },
      projectsAssertion: Ft(h),
      durationMs: Date.now() - r
    };
  }
  get currentWorkerEpoch() {
    return this.workerEpoch;
  }
  readOwnClientEvent(e) {
    return QL.readOwnClientEventFrom(this.readSource, e);
  }
  static async readOwnClientEventFrom(e, n) {
    let r = `${e.sessionBaseUrl}/worker/events/${encodeURIComponent(n.toLowerCase())}`, s = {
      kind: "unavailable",
      why: "network"
    };
    for (let h = 1; h <= de; h++) {
      let S;
      try {
        S = e.getAuthHeaders();
      } catch {
        return {
          kind: "unavailable",
          why: "no_auth_headers"
        };
      }
      if (Object.keys(S).length === 0) return {
        kind: "unavailable",
        why: "no_auth_headers"
      };
      let y;
      try {
        y = await E$n(r, {
          headers: {
            ...S,
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": Yg(),
            "User-Agent": Qo()
          },
          signal: AbortSignal.timeout(1e4),
          ...aa({
            url: r
          })
        }, e.ownConnectionPool);
      } catch {
        s = {
          kind: "unavailable",
          why: "network"
        };
      }
      if (y !== void 0) {
        let k = await y.json().catch(() => {});
        if (y.ok) return Sr(k, n);
        if (y.status === 404 && gr(k)) return {
          kind: "absent"
        };
        if (s = {
          kind: "unavailable",
          why: br(y.status)
        }, y.status < 500 || y.status === 501) return s;
      }
      if (h < de) await J(Math.min(500 * 2 ** (h - 1), 4e3) + Math.random() * 500);
    }
    return s;
  }
  async readProjectsBinding() {
    let {metadata: e, projectsAssertion: n} = await this.getWorkerState("projects_binding", !0);
    return e.readFailed ? {
      read: !1
    } : {
      read: !0,
      assertion: n
    };
  }
  async readWorkerState() {
    return (await this.getWorkerState("worker_state_reread")).metadata;
  }
  static async readProjectsBindingFor(e, n) {
    let r = Xsr(e, n);
    if (Object.keys(n()).length === 0) return {
      read: !1
    };
    let s = await QL.getWithRetry(r, `${r.sessionBaseUrl}/worker${Ut(!0)}`, n(), "projects_binding");
    return s === null ? {
      read: !1
    } : {
      read: !0,
      assertion: Ft(s)
    };
  }
  request(e, n, r, s, h = {}) {
    return this.sendRequest(e, n, r, s, h);
  }
  async sendRequest(e, n, r, s, {timeout: h = qe, parseBody: S = !1, countTowardEscalation: y = !0, signal: k, headers: R}) {
    let I = this.getAuthHeaders();
    if (Object.keys(I).length === 0) return {
      ok: !1,
      reason: "no_auth_headers"
    };
    let C = `${this.sessionBaseUrl}${n}`, w = k ? Ys(k, {
      timeoutMs: h,
      refTimer: !0
    }) : void 0, U = !1;
    try {
      let F = {
        method: e.toUpperCase(),
        headers: {
          ...I,
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": Yg(),
          "User-Agent": Qo(),
          ...R
        },
        body: _(r),
        signal: w?.signal ?? AbortSignal.timeout(h),
        ...aa({
          url: C
        })
      }, H = this.workerSocket?.carry(n, F.body, F.signal, h), D = H && await H, O = D ?? (this.gzipRequestBodyFetch ? await this.gzipRequestBodyFetch(C, F, P => E$n(C, P, this.ownConnectionPool)) : await E$n(C, F, this.ownConnectionPool));
      if (U = !0, O.ok) {
        this.consecutiveAuthFailures = 0, this.consecutiveNotFound = 0, this.reportNonOriginRun("onCleared", De[n]), 
        this.nonOriginRuns.delete(De[n]);
        for (let P of this.nonOriginRuns.values()) P.othersPassed = !0;
        if (S) try {
          return {
            ok: !0,
            data: await O.json()
          };
        } catch {
          return {
            ok: !0
          };
        }
        return await TW(O), {
          ok: !0
        };
      }
      let q;
      if (O.status === 409 && !this.closed) q = await He(O); else await TW(O);
      if (this.closed) return {
        ok: !1,
        status: O.status,
        reason: `http_${O.status}`
      };
      if (O.status === 409) this.handleEpochMismatch(q);
      if (O.status === 404 && y) {
        if (this.consecutiveNotFound++, this.consecutiveNotFound >= Ln) t(`CCRClient: ${this.consecutiveNotFound} consecutive 404s \u2014 session gone, exiting`, {
          level: "error"
        }), X("error", "cli_worker_session_not_found", void 0, this.lastLineWhen), this.onDiagnostic?.(`${this.consecutiveNotFound} consecutive 404s on ${n} \u2014 session gone, exiting`, "warn", "session_not_found"), 
        this.escalateEpochMismatch("session_not_found");
      }
      let x = O.status !== 403 ? void 0 : D ? "origin" : nHt(P => O.headers.get(P)), j = this.nonOrigin403Transient, z = j !== !1 && pUe(x);
      if (z && typeof j === "object") {
        let P = De[n], B = performance.now(), W = this.nonOriginRuns.get(P) ?? {
          sinceMs: B,
          refusals: 0,
          windowsSpent: 0,
          othersPassed: !1
        };
        if (this.nonOriginRuns.set(P, W), W.refusals++, z = B - W.sinceMs < j.windowMs, 
        z) try {
          j.onRefused(P);
        } catch (G) {
          t(`CCRClient: onRefused threw: ${l(G)}`, {
            level: "error"
          });
        } else if (B - W.sinceMs >= (W.windowsSpent + 1) * j.windowMs) W.windowsSpent++, 
        this.reportNonOriginRun("onWindowSpent", P);
      }
      if (O.status === 401 || O.status === 403) {
        let P = zd(), B = P ? qP(P) : null;
        if (B !== null && B * 1e3 < Date.now()) t(`CCRClient: session_token expired (exp=${new Date(B * 1e3).toISOString()}) \u2014 no refresh was delivered, exiting`, {
          level: "error"
        }), X("error", "cli_worker_token_expired_no_refresh", void 0, this.lastLineWhen), 
        this.onDiagnostic?.(`session_token expired (exp=${new Date(B * 1e3).toISOString()}) \u2014 no refresh delivered, exiting`, "warn", "token_expired"), 
        this.escalateEpochMismatch("token_expired");
        if (y && !z) {
          if (this.consecutiveAuthFailures++, this.consecutiveAuthFailures >= Dn) t(`CCRClient: ${this.consecutiveAuthFailures} consecutive auth failures with a valid-looking token \u2014 server-side auth unrecoverable, exiting`, {
            level: "error"
          }), X("error", "cli_worker_auth_failures_exhausted", void 0, this.lastLineWhen), 
          this.onDiagnostic?.(`${this.consecutiveAuthFailures} consecutive auth failures (HTTP ${O.status}) with valid-looking token \u2014 exiting`, "warn", "auth_exhausted"), 
          this.escalateEpochMismatch("auth_exhausted");
        }
      }
      if (t(`CCRClient: ${s} returned ${O.status}`, {
        level: "warn"
      }), X("warn", "cli_worker_request_failed", {
        method: e,
        path: n,
        status: O.status,
        ...x !== void 0 && {
          source: x
        }
      }), O.status === 429) {
        let P = O.headers.get("retry-after"), B = P ? parseInt(P, 10) : NaN;
        if (!isNaN(B) && B >= 0) return {
          ok: !1,
          retryAfterMs: B * 1e3,
          status: O.status,
          reason: `http_${O.status}`
        };
      }
      return {
        ok: !1,
        status: O.status,
        reason: `http_${O.status}`,
        ...z && {
          nonOriginRefusal: z
        }
      };
    } catch (F) {
      t(`CCRClient: ${s} failed: ${l(F)}`, {
        level: "warn"
      }), X("warn", "cli_worker_request_error", {
        method: e,
        path: n,
        error_code: le(F)
      });
      let H = `fetch_failed:${le(F)}`;
      return U || this.workerSocket?.saysNothingOfSize(F) ? {
        ok: !1,
        reason: H
      } : {
        ok: !1,
        fetchFailed: !0,
        reason: H
      };
    } finally {
      w?.cleanup();
    }
  }
  reportNonOriginRun(e, n) {
    let r = this.nonOriginRuns.get(n);
    if (r === void 0 || typeof this.nonOrigin403Transient !== "object") return;
    let s = Math.round(performance.now() - r.sinceMs), {unsentClientEvents: h, unsentInternalEvents: S} = this.uploadBacklog();
    t(`CCRClient: ${n} ${e === "onCleared" ? "accepted again" : "still refused"} after ${s}ms of non-origin 403s (${r.refusals} refusals)`, {
      level: "warn"
    });
    try {
      this.nonOrigin403Transient[e]({
        lane: n,
        refusals: r.refusals,
        runMs: s,
        windowsSpent: r.windowsSpent,
        othersPassed: r.othersPassed,
        backlog: h + S
      });
    } catch (y) {
      t(`CCRClient: ${e} threw: ${l(y)}`, {
        level: "error"
      });
    }
  }
  reportState(e, n) {
    if (e === this.currentState && !n) return;
    let r = this.parkReportedAtInitRequestId;
    if (this.parkReportedAtInitRequestId = void 0, r !== void 0 && e === "requires_action" && this.currentState === "requires_action" && gSe(n) === r) return;
    this.currentState = e, this.workerState.enqueue({
      worker_status: e,
      requires_action_details: n ? Lt(n) : null,
      internal_metadata: {
        reply_degraded: zZo()
      }
    }), this.applyUploadHold(e === "running" ? "idle" : e);
  }
  reportMetadata(e) {
    this.workerState.enqueue({
      external_metadata: Er(e)
    });
  }
  reportInternalMetadata(e) {
    this.workerState.enqueue({
      internal_metadata: e
    });
  }
  handleEpochMismatch(e) {
    let n = e ?? "epoch_conflict", r = e ?? "unattributed";
    t(`CCRClient: Epoch mismatch (409, reason=${r}), shutting down`, {
      level: "error"
    }), X("error", n === "epoch_stale" ? "cli_worker_epoch_stale" : n === "session_not_active" ? "cli_worker_session_not_active" : "cli_worker_epoch_mismatch", {
      reason: r
    }, this.lastLineWhen);
    let s = n === "epoch_stale" ? "stale registration (no live successor)" : n === "session_not_active" ? "session archived or no longer active" : n === "superseded_by_worker" ? "superseded by a newer worker" : "unattributed conflict, treated as superseded";
    this.onDiagnostic?.(`worker epoch mismatch (409) reason=${r} epoch=${this.workerEpoch} \u2014 ${s}, exiting`, "warn", n), 
    this.escalateEpochMismatch(n);
  }
  escalateEpochMismatch(e) {
    return this.lastEpochMismatchCause = e, this.epochMismatchCount++, this.epochSuperseded = !0, 
    this.onEpochMismatch(e);
  }
  startHeartbeat() {
    if (this.stopHeartbeat(), this.closed) return;
    let e = () => {
      let r = this.heartbeatIntervalMs * this.heartbeatJitterFraction * (2 * Math.random() - 1);
      this.heartbeatTimer = setTimeout(n, this.heartbeatIntervalMs + r);
    }, n = () => {
      let r = this.lastCadenceTickAtMs;
      if (this.lastCadenceTickAtMs = Date.now(), this.canSkipCadenceBeat(r)) this.skippedPreviousCadenceBeat = !0, 
      this.idleTracker?.sampleIdleSeconds(), t("CCRClient: Heartbeat skipped (events beat)"); else this.sendHeartbeat();
      if (this.heartbeatTimer === null) return;
      e();
    };
    this.lastCadenceTickAtMs = Date.now(), e();
  }
  noteBeatingEventsPostOk(e) {
    if (e.some(n => !n.ephemeral)) this.lastBeatingEventsPostOkAtMs = Date.now();
  }
  canSkipCadenceBeat(e) {
    let n = this.heartbeatIntervalMs * (1 + this.heartbeatJitterFraction);
    if (!this.skipRedundantHeartbeats || this.workerSocket?.isTransport() || this.closed || this.lastBeatingEventsPostOkAtMs < e || this.lastBeatingEventsPostOkAtMs > this.lastCadenceTickAtMs || this.lastCadenceTickAtMs - this.lastBeatingEventsPostOkAtMs > n * vt || this.heartbeatIntervalMs > this.seedHeartbeatIntervalMs || this.isIdleAdvised() || this.consecutiveHeartbeatFailures > 0 || this.skippedPreviousCadenceBeat) return !1;
    let r = n * 2;
    return this.clampToTokenLifetime(r) >= r;
  }
  stopHeartbeat() {
    if (this.heartbeatTimer) clearTimeout(this.heartbeatTimer), this.heartbeatTimer = null;
  }
  clearProbeBeatTimer() {
    if (this.probeBeatTimer) clearTimeout(this.probeBeatTimer), this.probeBeatTimer = null;
  }
  async releaseLease() {
    if (this.workerEpoch <= 0 || this.epochSuperseded) return;
    try {
      let e = await this.request("post", "/worker/heartbeat", {
        session_id: this.sessionId,
        worker_epoch: this.workerEpoch,
        release_lease: !0
      }, "POST worker/heartbeat (release)", {
        timeout: ft,
        countTowardEscalation: !1
      });
      if (e.ok) g("ccr_worker_lease_release"); else if (e.status !== 409) f("ccr_worker_lease_release", e.status !== void 0 ? `http_${e.status}` : "send_failed");
    } catch (e) {
      d(e), f("ccr_worker_lease_release", "send_threw");
    }
  }
  sendGoodbye() {
    if (this.workerEpoch <= 0 || this.epochSuperseded) return;
    if (this.currentState === "running") {
      X("info", "cli_worker_goodbye_skipped_mid_turn"), this.leftMidTurn = !0;
      return;
    }
    this.goodbyeFlushed = this.request("put", "/worker", {
      worker_epoch: this.workerEpoch,
      connection_status: "disconnected"
    }, "PUT worker (goodbye)", {
      timeout: ft,
      countTowardEscalation: !1
    }).then(e => {
      if (e.ok) g("ccr_worker_goodbye"); else if (e.status !== 409) f("ccr_worker_goodbye", e.status !== void 0 ? `http_${e.status}` : "send_failed");
    }).catch(() => {
      f("ccr_worker_goodbye", "send_threw");
    });
  }
  heartbeatNow(e = "probe") {
    if (this.closed) return;
    if (e === "probe" ? this.pendingBeatTrigger === "reactivate" : e === "reactivate" && this.pendingBeatTrigger === "probe") this.restoreReactivationArm();
    if (e === "probe" || this.pendingBeatTrigger === null || e === "reactivate" && this.pendingBeatTrigger !== "probe") this.pendingBeatTrigger = e;
    if (this.heartbeatInFlight) {
      this.pendingForcedBeat = !0;
      return;
    }
    let r = Date.now() - this.lastHeartbeatSentAtMs;
    if (r < this.probeBeatSpacingMs) {
      if (this.probeBeatTimer) return;
      this.probeBeatTimer = setTimeout(() => {
        this.probeBeatTimer = null, this.refireForcedBeat();
      }, this.probeBeatSpacingMs - r);
      return;
    }
    let s = this.pendingBeatTrigger ?? e;
    this.pendingBeatTrigger = null, this.clearProbeBeatTimer(), this.sendHeartbeat(s);
  }
  refireForcedBeat() {
    let e = this.pendingBeatTrigger ?? "probe";
    if (e === "resync_stale" && !this.staleReconnectBeatWanted()) {
      this.pendingBeatTrigger = null, this.clearProbeBeatTimer();
      return;
    }
    if (e === "reactivate") {
      if (this.restoreReactivationArm(), !this.reactivationBeatWanted()) {
        this.pendingBeatTrigger = null, this.clearProbeBeatTimer();
        return;
      }
      this.reactivationBeatArmed = !1;
    }
    this.heartbeatNow(e);
  }
  reactivationBeatWanted() {
    return this.beatOnReactivation && this.reactivationBeatArmed && this.isIdleAdvised() && Date.now() - this.lastHeartbeat429AtMs > this.seedHeartbeatIntervalMs;
  }
  restoreReactivationArm() {
    this.reactivationBeatArmed = this.idleGrantLatched;
  }
  armReactivationIfEarned(e, n) {
    if (this.beatOnReactivation && e !== void 0 && e >= n) this.reactivationBeatArmed = !0;
  }
  sendReactivationBeat() {
    if (!this.reactivationBeatWanted()) return;
    this.reactivationBeatArmed = !1, this.heartbeatNow("reactivate");
  }
  isIdleAdvised() {
    return this.advertiseHeartbeatProbeSupport && this.idleGrantLatched;
  }
  applyShorterIntervalNow(e) {
    if (e >= this.heartbeatIntervalMs) return;
    if (this.heartbeatIntervalMs = e, this.heartbeatTimer !== null) this.startHeartbeat();
  }
  clampToTokenLifetime(e) {
    if (!this.advertiseHeartbeatProbeSupport || !this.adoptRefreshedAuth) return e;
    let n = zd(), r = n ? qP(n) : null;
    if (r === null) return e;
    let s = r * 1e3 - Date.now() - Tn;
    if (s >= e) return e;
    return Math.max(mt, s);
  }
  reclampCurrentIntervalToTokenLifetime() {
    let e = this.clampToTokenLifetime(this.heartbeatIntervalMs);
    if (e < this.heartbeatIntervalMs) X("info", "cli_heartbeat_interval_updated", {
      from_ms: this.heartbeatIntervalMs,
      to_ms: e
    }), this.applyShorterIntervalNow(e);
  }
  renewStream() {
    if (!this.workerSocket?.isTransport()) {
      this.readTransport.renewConnection();
      return;
    }
    this.workerSocket.renewWhenQuiet(() => {
      try {
        this.readTransport.renewConnection();
      } catch (e) {
        d(e);
      }
    });
  }
  resyncAfterReconnect() {
    if (this.workerSocket?.isTransport()) return;
    if (this.isIdleAdvised()) {
      this.heartbeatNow("resync");
      return;
    }
    if (this.staleReconnectBeatWanted()) this.heartbeatNow("resync_stale");
  }
  staleReconnectBeatWanted() {
    if (!this.beatOnStaleReconnect || this.heartbeatIntervalMs <= this.seedHeartbeatIntervalMs) return !1;
    let e = Date.now();
    if (e - this.lastHeartbeatSuccessAtMs <= this.heartbeatIntervalMs * vt) return !1;
    return e - this.lastHeartbeat429AtMs > this.heartbeatIntervalMs;
  }
  resetHeartbeatStreak() {
    this.consecutiveHeartbeatFailures = 0, this.heartbeatLostFiredForStreak = !1;
  }
  async sendHeartbeat(e) {
    if (this.closed) {
      this.stopHeartbeat();
      return;
    }
    let n = e === "socket" || e === "socket_ended" || e === void 0 && this.workerSocket?.isTransport() === !0;
    if (!n) {
      if (this.heartbeatInFlight) return;
      this.heartbeatInFlight = !0;
    }
    let r = Date.now();
    if (this.lastHeartbeatSentAtMs = r, this.skippedPreviousCadenceBeat = !1, e === "resync_stale") X("info", "cli_heartbeat_reconnect_stale_beat", {
      gap_ms: this.lastHeartbeatSentAtMs - this.lastHeartbeatSuccessAtMs,
      interval_ms: this.heartbeatIntervalMs
    });
    try {
      if (e === "reactivate") X("info", "cli_heartbeat_reactivation_beat", {
        interval_ms: this.heartbeatIntervalMs
      });
      let s = this.idleTracker?.sampleIdleSeconds(), h = this.advertiseHeartbeatProbeSupport ? s : void 0, S = await this.request("post", "/worker/heartbeat", {
        session_id: this.sessionId,
        worker_epoch: this.workerEpoch,
        ...this.advertiseHeartbeatProbeSupport && {
          supports_heartbeat_probe: !0,
          current_interval_seconds: Math.round(this.heartbeatIntervalMs / 1e3),
          ...h !== void 0 && {
            idle_seconds: h
          }
        }
      }, "Heartbeat", {
        timeout: Math.max(kn, Math.min(xt, this.heartbeatIntervalMs * (1 - this.heartbeatJitterFraction) - Bt)),
        parseBody: !0,
        countTowardEscalation: e === void 0,
        ...this.workerSocket && {
          signal: this.closeAbort.signal
        }
      });
      if (!S.ok) {
        if (e === "probe") m("ccr_heartbeat_probe", "beat_failed"); else if (e === "resync_stale") m("ccr_reconnect_beat", "beat_failed"); else if (e === "reactivate") m("ccr_reactivation_beat", "beat_failed");
        if (S.status === 429) {
          if (this.lastHeartbeat429AtMs = Date.now(), e === "reactivate") this.restoreReactivationArm();
        }
        if (this.isIdleAdvised() && S.status !== 429) X("warn", "cli_heartbeat_idle_reverted_on_failure", {
          status: S.status
        }), this.idleGrantLatched = !1, this.reactivationBeatArmed = !1, this.applyShorterIntervalNow(this.seedHeartbeatIntervalMs);
        if (this.reclampCurrentIntervalToTokenLifetime(), S.status !== void 0 && Cn.has(S.status) && !S.nonOriginRefusal) {
          this.resetHeartbeatStreak();
          return;
        }
        if (!this.readTransport.isReadStreamRecentlyAlive()) {
          this.resetHeartbeatStreak();
          return;
        }
        if (this.consecutiveHeartbeatFailures === 0) this.heartbeatStreakStartedAtMs = Date.now();
        if (this.consecutiveHeartbeatFailures++, !this.heartbeatLostFiredForStreak && this.consecutiveHeartbeatFailures >= An && Date.now() - this.heartbeatStreakStartedAtMs >= this.readTransport.getReadStreamRecentLivenessWindowMs()) {
          this.heartbeatLostFiredForStreak = !0;
          try {
            this.onHeartbeatLost?.();
          } catch (R) {
            d(R);
          }
        }
        return;
      }
      if (this.resetHeartbeatStreak(), this.lastHeartbeatSuccessAtMs = r, this.onRequestAuthOk?.(), 
      e === "probe") g("ccr_heartbeat_probe"); else if (e === "resync_stale") g("ccr_reconnect_beat"); else if (e === "reactivate") g("ccr_reactivation_beat");
      if (t("CCRClient: Heartbeat sent"), this.workerSocket?.tryAgainIfDue(this.readTransport), 
      e === "socket" && this.workerSocket?.isTransport()) {
        let R = zd(), I = R ? qP(R) : null;
        if (I !== null && I * 1e3 - Date.now() < Mn) this.heartbeatNow("resync");
      }
      if (L(S.data)) this.takeUpFlushPolicy(S.data.event_flush_policy), this.uploadPaths?.takeOffer(S.data.upload_stream);
      if (S.data?.refreshed_auth && this.adoptRefreshedAuth) try {
        let R = !1, I = this.adoptRefreshedAuth(S.data.refreshed_auth.expires_in_seconds);
        I.then(U => {
          if (R && U.adopted) this.lastAuthRefreshBadReason = null, g("ccr_worker_auth_refresh"), 
          X("info", "cli_heartbeat_refreshed_auth_late_adopted");
        }, () => {});
        let C = await We(I, Math.min(Dt, this.heartbeatIntervalMs)), w;
        if (C === void 0) R = !0, w = {
          adopted: !1,
          reason: "adopt_timeout"
        }; else w = C;
        if (X("info", "cli_heartbeat_refreshed_auth_signal", {
          adopted: w.adopted,
          reason: w.reason,
          expires_in_seconds: S.data.refreshed_auth.expires_in_seconds
        }), w.adopted) g("ccr_worker_auth_refresh"), this.lastAuthRefreshBadReason = null; else if (w.reason && w.reason !== "unchanged" && w.reason !== this.lastAuthRefreshBadReason) this.lastAuthRefreshBadReason = w.reason, 
        m("ccr_worker_auth_refresh", w.reason);
      } catch {
        if (this.lastAuthRefreshBadReason !== "adopt_threw") this.lastAuthRefreshBadReason = "adopt_threw", 
        m("ccr_worker_auth_refresh", "adopt_threw");
        X("error", "cli_heartbeat_refreshed_auth_adopt_threw");
      }
      if (S.data?.refreshed_auth && this.workerSocket?.isTransport() && e !== "socket") this.renewStream();
      if (r !== this.lastHeartbeatSentAtMs) return;
      let y = S.data?.heartbeat_interval_seconds;
      if (typeof y !== "number" || !Number.isFinite(y) || y <= 0) {
        if (this.idleGrantLatched) this.armReactivationIfEarned(h, this.heartbeatIntervalMs / 1e3);
        this.reclampCurrentIntervalToTokenLifetime();
        return;
      }
      if (this.advertiseHeartbeatProbeSupport) {
        let R = y * 1e3 > this.seedHeartbeatIntervalMs;
        if (R) this.armReactivationIfEarned(h, y); else this.reactivationBeatArmed = !1;
        this.idleGrantLatched = R;
      }
      let k = this.clampToTokenLifetime(Math.min(Math.max(y * 1e3, mt), this.maxAdvisedIntervalMs));
      if (k === this.heartbeatIntervalMs) return;
      if (X("info", "cli_heartbeat_interval_updated", {
        from_ms: this.heartbeatIntervalMs,
        to_ms: k
      }), k < this.heartbeatIntervalMs) this.applyShorterIntervalNow(k); else this.heartbeatIntervalMs = k;
    } finally {
      if (!n) {
        if (this.heartbeatInFlight = !1, this.pendingForcedBeat && !this.closed) this.pendingForcedBeat = !1, 
        this.refireForcedBeat();
      }
    }
  }
  reportDurableUpload(e, n) {
    if (this.onDurableEventsUpload === void 0) return;
    let r = e.filter(s => !s.ephemeral);
    if (r.length === 0) return;
    try {
      this.onDurableEventsUpload(r, n);
    } catch (s) {
      t(`CCRClient: onDurableEventsUpload(${n}) threw; the batch's fate is unchanged: ${l(s)}`, {
        level: "warn"
      });
    }
  }
  writeEvent(e) {
    return this.writeEvents([ e ]);
  }
  trackFirstFrameUpload(e) {
    let n = {};
    return this.firstFrameUpload = {
      uuid: e,
      timing: n
    }, n;
  }
  trackFirstTextFrameUpload(e) {
    let n = {};
    return this.firstTextFrameUpload = {
      uuid: e,
      timing: n
    }, n;
  }
  trackFirstBlockFrameUpload(e) {
    let n = {};
    return this.firstBlockFrameUpload = {
      uuid: e,
      timing: n
    }, n;
  }
  trackedFrameUploads(e) {
    let n = [];
    for (let r of [ this.firstFrameUpload, this.firstTextFrameUpload, this.firstBlockFrameUpload ]) if (r && r.timing[e] === void 0) n.push(r);
    return n;
  }
  async writeEvents(e, n) {
    let r = [], s = [], h, S, y = !1, k = [], R = [];
    for (let I of e) {
      let C = I.type === "stream_event" ? et(I) : I, w = this.releaseFor(C);
      if (S ??= w, (this.streamEventFirstFlushMs > 0 && !w || this.noSubscriberStreamEventFlushIntervalMs > 0 || this.dropUnwatchedStreamEvents || this.unwatched() && this.currentState === "running") && this.streamEventFlushIntervalMs > 0 && It(C)) {
        this.bufferEphemeral(C);
        continue;
      }
      if (C.type === "stream_event") {
        if (this.streamedEphemeralSinceLastAssistant = !0, C.event.type === "message_stop" && this.holdRule === "served_policy" && this.flushPolicy?.flushOnSamplingEnd) {
          this.bufferEphemeral(C), h ??= this.streamEventBufferedAt, y = !0;
          let F = this.takeStreamEventBuffer();
          S ??= F.release, r.push(...F.events);
          continue;
        }
        if (this.streamEventFlushIntervalMs <= 0) {
          let F = Buffer.byteLength(_(C));
          if (F <= ee) r.push({
            payload: C,
            ephemeral: !0
          }); else Ee(C, F);
          continue;
        }
        if (this.bufferEphemeral(C), C.event.type === "content_block_start" && this.parkedRows.length > 0) {
          h ??= this.streamEventBufferedAt;
          let F = this.takeStreamEventBuffer();
          S ??= F.release, r.push(...F.events);
        }
        continue;
      }
      let U = C.type === "control_request" ? this.toClientEvent(C) : void 0;
      if (C.type === "control_request" && U !== void 0 && xn.has(Ht(U)) && this.servedCallRequestsJumpQueue()) {
        s.push(U), this.urgentRequestIds.add(C.request_id);
        let F = this.urgentRequestIds.values().next().value;
        if (this.urgentRequestIds.size > Bn && F !== void 0) this.urgentRequestIds.delete(F);
        continue;
      }
      if (C.type === "control_cancel_request" && this.urgentRequestIds.delete(C.request_id)) {
        s.push(this.toClientEvent(C));
        continue;
      }
      if (C.type === "assistant" && this.streamedEphemeralSinceLastAssistant) g("ccr_partial_messages", {
        stream_events_dropped_unwatched: this.streamEventsDroppedUnwatched
      }), this.streamedEphemeralSinceLastAssistant = !1, this.streamEventsDroppedUnwatched = 0;
      if (w === void 0 && this.mayParkTextRow(C)) {
        this.parkedRows.push({
          message: C,
          event: this.toClientEvent(C)
        });
        continue;
      }
      if (this.streamEventTimer) {
        h ??= this.streamEventBufferedAt;
        let F = this.takeStreamEventBuffer();
        S ??= F.release, r.push(...F.events);
      }
      if (this.gatesToolCalls) {
        let F = Ne(C);
        if (F.some(H => this.awaitedToolCalls.has(H))) S ??= "tool_call";
        k.push(...F);
      }
      if (this.twinsHeldRows(C.type)) R.push(r.length);
      r.push(U ?? this.toClientEvent(C));
    }
    if (!S && !y) for (let I = R.length - 1; I >= 0; I--) {
      let C = R[I] ?? r.length, w = r[C];
      if (w && !w.historical && this.eventUploader.holdsOnArrival(w) && Buffer.byteLength(_(w.payload)) <= sr) r.splice(C, 0, {
        payload: w.payload,
        ephemeral: !0
      });
    }
    if (s.length > 0) this.enqueueClientEvents(s, {
      urgent: !0
    });
    if (r.length > 0) {
      if (S) this.internalEventUploader.release(S); else if (y) S = "sampling_end";
      await this.enqueueClientEvents(r, {
        ...S ? {
          release: S
        } : {
          since: h
        },
        ...n?.together && {
          together: !0
        }
      }), this.noteToolCallRows("client_events", k, "queued");
    } else if (s.length > 0 && S) {
      if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
      this.internalEventUploader.release(S), this.releaseClientEvents(S);
    } else if (y) this.releaseClientEvents("sampling_end");
  }
  releaseFor(e) {
    if (e.type === "system" && "subtype" in e && e.subtype === "status" && "status" in e && e.status === "requesting") {
      if (this.uploadPaths?.prepare(), !this.seesModelCallBoundaries) this.seesModelCallBoundaries = !0, 
      this.applyUploadHold("reset");
      if (this.holdRule === "served_policy") return "round_trip";
    }
    if (e.type === "user" && this.toolResultReleases(e.message)) return "tool_result";
    if (this.holdRule === void 0 || this.mayWaitUnderHold(e)) return;
    return "event";
  }
  toolResultReleases(e) {
    let n = this.holdRule === "served_policy" ? this.flushPolicy?.flushAfterTools : void 0;
    if (n !== "write" && n !== "all") return !1;
    return Wt(e, "tool_result", "tool_use_id").some(r => n === "all" || this.gatedWriteToolCalls.has(r));
  }
  gateToolCall(e) {
    let n = this.flushPolicy;
    if (!n || n.flushAfterTools !== "write" && n.flushBeforeToolsWaitMs <= 0 || e.agentId !== void 0 || this.closed || this.eventHoldEnabled === void 0 || this.holdSwitchedOff || !e.mayWrite()) return;
    if (n.flushAfterTools === "write") this.gatedWriteToolCalls.add(e.toolUseId), Pt(this.gatedWriteToolCalls);
    let r = this.transcriptLaneInUse ? [ "client_events", "internal_events" ] : [ "client_events" ];
    if (n.flushBeforeToolsWaitMs <= 0 || this.lanesNotAnswering.size > 0 || e.signal.aborted || r.every(s => this.toolCallRows[s].get(e.toolUseId) === "stored")) return;
    return this.awaitToolCallStored(e, r, n.flushBeforeToolsWaitMs);
  }
  async awaitToolCallStored(e, n, r) {
    let s = e.toolUseId, h = Date.now(), S = Ys(e.signal, {
      timeoutMs: r,
      refTimer: !0
    }), y = Ys(S.signal, {
      timeoutMs: this.toolCallRowGraceMs,
      refTimer: !0
    }), k = !1, R = !1;
    this.awaitedToolCalls.add(s);
    try {
      if (this.releaseClientEvents("tool_call"), this.internalEventUploader.release("tool_call"), 
      await Promise.race([ this.toolCallRowReaches("client_events", s, "queued"), Ct(y.signal) ]), 
      k = this.toolCallRows.client_events.has(s), R = y.signal.aborted && !S.signal.aborted, 
      k && !this.closed) await Promise.race([ Promise.all(n.map(w => this.toolCallRowReaches(w, s, "settled"))), Ct(S.signal) ]);
    } finally {
      y.cleanup(), S.cleanup(), this.awaitedToolCalls.delete(s);
      for (let w of n) this.toolCallRowWaiters.delete(`${w} ${s}`);
    }
    let C = n.every(w => this.toolCallRows[w].get(s) === "stored") ? "stored" : this.closed ? "closed" : e.signal.aborted ? "aborted" : n.some(w => this.toolCallRows[w].get(s) === "dropped") ? "dropped" : R && !k ? "row_never_queued" : "timeout";
    if (C === "timeout" || C === "dropped") {
      for (let w of n) if (this.toolCallRows[w].get(s) === "queued") this.lanesNotAnswering.add(w);
    }
    X(C === "stored" || C === "closed" || C === "aborted" ? "info" : "warn", "cli_ccr_tool_call_upload_wait", {
      outcome: C,
      waited_ms: Date.now() - h,
      limit_ms: r,
      live_view_row: this.toolCallRows.client_events.get(s) ?? "none",
      transcript_row: n.includes("internal_events") ? this.toolCallRows.internal_events.get(s) ?? "none" : "lane_unused"
    });
  }
  toolCallRowReaches(e, n, r) {
    let s = this.toolCallRows[e].get(n);
    if (s !== void 0 && (s !== "queued" || r === "queued")) return Promise.resolve();
    return new Promise(h => {
      let S = `${e} ${n}`, y = {
        until: r,
        reached: h
      }, k = this.toolCallRowWaiters.get(S);
      if (k) k.push(y); else this.toolCallRowWaiters.set(S, [ y ]);
    });
  }
  noteToolCallRows(e, n, r) {
    let s = this.toolCallRows[e];
    for (let h of n) {
      if (r === "queued" && s.has(h) || r === "dropped" && s.get(h) === "stored") continue;
      s.set(h, r), Pt(s);
      let S = `${e} ${h}`, y = (this.toolCallRowWaiters.get(S) ?? []).filter(k => {
        if (k.until === "queued" || r !== "queued") return k.reached(), !1;
        return !0;
      });
      if (y.length > 0) this.toolCallRowWaiters.set(S, y); else this.toolCallRowWaiters.delete(S);
    }
  }
  noteToolCallRowsSettled(e, n, r) {
    if (!this.gatesToolCalls) return;
    if (n === "stored") this.lanesNotAnswering.delete(e);
    this.noteToolCallRows(e, r.flatMap(s => "session_agent_id" in s && s.session_agent_id || "ephemeral" in s && s.ephemeral ? [] : Ne(s.payload)), n);
  }
  mayParkTextRow(e) {
    if (e.type !== "assistant" || !this.streamEventTimer || this.lastReportedHasSubscribers === !1 || this.closed || this.twinsHeldRows(e.type) || this.uploadPaths?.streaming()) return !1;
    let n = e.message.content;
    return Array.isArray(n) && n.length > 0 && n.every(r => r.type === "text");
  }
  twinsHeldRows(e) {
    return this.holdRule === "served_policy" && !this.viewerAbsentReported && this.flushPolicy?.liveTwinTypes.has(e) === !0;
  }
  takeParkedRows() {
    let e = this.parkedRows.map(({event: n}) => n);
    return this.parkedRows = [], e;
  }
  mayWaitUnderHold(e) {
    if (e.type === "keep_alive" && this.holdRule === "served_policy") return this.seesModelCallBoundaries && !this.flushPolicy?.mustFlushTypes.has(e.type);
    if (!fJr(e)) return !1;
    if (this.holdRule === "no_subscriber_flag" && !pr) return !0;
    if (e.type === "user" && "isReplay" in e && e.isReplay) return !1;
    let n = this.flushPolicy;
    if (!n) return !0;
    if (e.type === "assistant" && n.flushOnAssistant) return !1;
    return !n.mustFlushTypes.has(e.type);
  }
  toClientEvent(e) {
    let n = e, r = n.historical === !0, s = It(e), h = n.type === "user" && n.is_virtual !== !0 ? this.uploadedToolResult(n.tool_use_result, n.message) : n.tool_use_result;
    return {
      payload: {
        ...n,
        ...h !== n.tool_use_result && {
          tool_use_result: h
        },
        uuid: typeof n.uuid === "string" ? n.uuid : xe()
      },
      ...r && {
        historical: !0
      },
      ...s && {
        ephemeral: !0
      }
    };
  }
  uploadedToolResult(e, n) {
    let r = this.currentUploadTrim(), s = qfo(e, r);
    if (s !== e && !this.loggedToolResultBlank) this.loggedToolResultBlank = !0, g("ccr_tool_result_blank");
    let h = xSs(s, n, r);
    if (h !== s && !this.loggedMcpImageBlank) this.loggedMcpImageBlank = !0, g("ccr_mcp_image_blank");
    return h;
  }
  setStreamEventFlushIntervalMs(e) {
    if (this.streamEventFlushIntervalMs = pe("streamEventFlushIntervalMs", e, okt), 
    this.streamEventFlushIntervalMs <= 0 && this.streamEventTimer) this.flushStreamEventBuffer();
  }
  setStreamEventFirstFlushMs(e) {
    this.streamEventFirstFlushMs = pe("streamEventFirstFlushMs", e, 0);
  }
  setStreamEventFlushOnFirstDelta(e) {
    this.streamEventFlushOnFirstDelta = e === !0;
  }
  setNoSubscriberStreamEventFlushIntervalMs(e) {
    let n = pe("noSubscriberStreamEventFlushIntervalMs", e, 0);
    if (n === this.noSubscriberStreamEventFlushIntervalMs) return;
    this.noSubscriberStreamEventFlushIntervalMs = n, this.setHasSubscribers(void 0, "reset");
  }
  setNoSubscriberUploadHoldMs(e) {
    let n = pe("noSubscriberUploadHoldMs", e, 0);
    if (n === this.noSubscriberUploadHoldMs) return;
    this.noSubscriberUploadHoldMs = n, this.setHasSubscribers(void 0, "reset");
  }
  setDropUnwatchedStreamEvents(e) {
    let n = e === !0;
    if (n === this.dropUnwatchedStreamEvents) return;
    this.setHasSubscribers(void 0, "reset"), this.dropUnwatchedStreamEvents = n;
  }
  onSubscribersReported;
  setSubscribersReportedListener(e) {
    this.onSubscribersReported = e;
  }
  tellSubscribersReported(e) {
    if (typeof e !== "boolean" || this.onSubscribersReported === void 0) return;
    if (e || !this.senderMayNotBeAttachedYet()) this.onSubscribersReported(e);
  }
  senderMayNotBeAttachedYet() {
    return Date.now() - this.lastInboundEventAtMs < mr;
  }
  noSubscriberHoldMs() {
    return hr && this.holdSwitchedOff ? 0 : this.noSubscriberUploadHoldMs;
  }
  unwatched() {
    return this.noSubscriberHoldMs() > 0 && this.lastReportedHasSubscribers === !1;
  }
  mayHoldUploads() {
    return this.noSubscriberUploadHoldMs > 0 || this.servedPolicyHolds();
  }
  holdSwitchOn() {
    return this.eventHoldEnabled !== void 0 && !this.holdSwitchedOff;
  }
  servedPolicyHolds() {
    return (this.flushPolicy?.maxEvents ?? 0) > 1 && this.holdSwitchOn();
  }
  decideHoldRule() {
    if (this.currentState !== "running" || this.shutdownReleased) return;
    if (this.servedPolicyHolds() && (this.seesModelCallBoundaries || this.lastReportedHasSubscribers === !1)) return "served_policy";
    return this.unwatched() ? "no_subscriber_flag" : void 0;
  }
  applyUploadHold(e) {
    if (this.holdSwitchedOff = this.eventHoldEnabled !== void 0 && this.eventHoldEnabled() !== !0, 
    this.holdSwitchedOff && !this.loggedHoldSwitchedOff) this.loggedHoldSwitchedOff = !0, 
    X("warn", "cli_ccr_event_hold_switched_off");
    let n = this.decideHoldRule();
    this.holdRule = n, this.eventUploader.setHold(n && this.laneHold(n, this.seesModelCallBoundaries ? vr : kt), e), 
    this.internalEventUploader.setHold(n && this.laneHold(n, kt), e);
  }
  laneHold(e, n) {
    let r = this.flushPolicy;
    if (e === "served_policy" && r) return {
      rule: e,
      maxAgeMs: Math.min(r.maxAgeMs, this.seesModelCallBoundaries ? Nt : er),
      maxItems: r.maxEvents,
      maxBytes: r.maxBytes,
      passes: n
    };
    return {
      rule: "no_subscriber_flag",
      maxAgeMs: this.noSubscriberHoldMs()
    };
  }
  takeUpFlushPolicy(e) {
    let n = e == null ? void 0 : wr(e);
    if (e != null && !n && !this.loggedUnreadableFlushPolicy) this.loggedUnreadableFlushPolicy = !0, 
    X("warn", "cli_ccr_flush_policy_unreadable");
    let r = this.flushPolicy;
    if (!Tr(r, n)) this.flushPolicy = n, X("info", n ? r ? "cli_ccr_flush_policy_changed" : "cli_ccr_flush_policy_adopted" : "cli_ccr_flush_policy_cleared", {
      ...n && {
        max_events: n.maxEvents,
        max_age_ms: n.maxAgeMs,
        max_bytes: n.maxBytes ?? 0,
        flush_on_sampling_end: n.flushOnSamplingEnd,
        flush_on_assistant: n.flushOnAssistant,
        flush_before_tools_wait_ms: n.flushBeforeToolsWaitMs,
        flush_after_tools: n.flushAfterTools,
        must_flush_types: n.mustFlushTypes.size,
        live_twin_types: n.liveTwinTypes.size,
        policy_version: n.policyVersion ?? ""
      },
      hold_enabled: this.eventHoldEnabled !== void 0 && this.eventHoldEnabled() === !0
    });
    this.applyUploadHold("reset");
  }
  logUploadHoldEnd(e, n, r, s, h) {
    if (h === "no_subscriber_flag") {
      g("ccr_no_subscriber_hold", {
        lane: c(e),
        reason: c(n),
        held_events: r,
        held_ms: s
      });
      return;
    }
    X("info", "cli_ccr_event_hold_release", {
      lane: e,
      reason: n,
      held_events: r,
      held_ms: s
    });
  }
  uploadBody(e, n) {
    let r = {
      worker_epoch: this.workerEpoch,
      events: e
    };
    if (this.uploadHoldMarker()) r.upload_hold = {
      held: n.held,
      flush_reason: n.reason,
      held_count: ce(n.heldCount),
      hold_age_ms: ce(n.holdAgeMs),
      inflight_retry_count: ce(n.retryCount),
      hold_rule: n.rule,
      post_index: ce(n.postIndex),
      ...this.flushPolicy?.policyVersion !== void 0 && {
        policy_version: this.flushPolicy.policyVersion
      }
    };
    return r;
  }
  retrySmaller(e, n, r, s, h = {
    bytes: r.bytes
  }) {
    let S = {
      count: n.length,
      kib: Math.round(h.bytes / 1024),
      retry_count: r.retryCount,
      timeout_ms: s
    };
    return t(`CCRClient: ${e} POST of ${S.count} event(s), ${S.kib} KiB got no response (the connection failed, or no answer within ${s}ms) after ${S.retry_count} earlier failure(s); ${h.bytes >= je && r.cuttable ? "retrying it in smaller batches" : "retrying it"}`, {
      level: "warn"
    }), X("warn", e === "client_events" ? "cli_worker_events_no_response" : "cli_worker_internal_events_no_response", S), 
    new ERr(`${e} POST got no response`, je);
  }
  logUploadDrain(e, n) {
    if (!this.uploadHoldMarker()) return;
    g("ccr_upload_drain", {
      lane: c(e),
      trigger: c(n.trigger),
      rule: c(n.rule),
      held_events: n.heldEvents,
      held_ms: n.heldMs,
      posts: n.posts,
      rows: n.rows,
      max_rows_post: n.maxRowsPost,
      failed_posts: n.failedPosts,
      dropped_rows: n.droppedRows,
      other_posts: n.otherPosts,
      other_rows: n.otherRows,
      drain_ms: n.drainMs
    });
  }
  logUndeliveredAtClose(e, n) {
    if (this.shutdownKeepsClientEvents) t(`CCRClient: ${e} lane closed at shutdown, ${n} undelivered`, {
      level: n > 0 ? "warn" : "info"
    });
    if (n <= 0) return;
    if (this.noSubscriberHoldMs() > 0 && this.viewerAbsentReported) f("ccr_no_subscriber_hold", this.closingForSuccessor ? "undelivered_at_rebuild" : "undelivered_at_close", {
      lane: c(e),
      undelivered_events: n
    });
    if (this.servedPolicyHolds()) X("warn", "cli_ccr_event_hold_undelivered_at_close", {
      lane: e,
      undelivered_events: n,
      for_successor: this.closingForSuccessor
    });
  }
  bufferEphemeral(e) {
    let n = this.streamEventFirstFlushMs > 0 && e.type === "stream_event" ? e.event.type : void 0, r = n === "content_block_start";
    if (r) this.firstContentFlushPending = !0;
    if (this.dropUnwatchedStreamEvents && this.unwatchedPastGrace) {
      if (e.type === "stream_event") this.streamEventsDroppedUnwatched++;
      return;
    }
    this.streamEventBuffer.push(e);
    let s = this.firstContentFlushPending && n === "content_block_delta";
    if (s) this.firstContentFlushPending = !1;
    let h = r || s, S = this.uploadPaths?.fallbackWindowMs() ?? 0;
    if (s && S === 0 && this.streamEventFlushOnFirstDelta && this.firstDeltaFlushTimer === null && e.type === "stream_event" && e.event.type === "content_block_delta" && e.event.delta.type !== "input_json_delta" && !(this.lastReportedHasSubscribers === !1 && (this.noSubscriberStreamEventFlushIntervalMs > 0 || this.noSubscriberHoldMs() > 0))) this.firstDeltaFlushTimer = setTimeout(() => {
      this.firstDeltaFlushTimer = null, this.flushStreamEventBuffer(!0);
    }, 0);
    if (this.streamEventTimer && !h) return;
    let y = h ? Math.min(this.streamEventFirstFlushMs, this.streamEventFlushIntervalMs) : this.streamEventFlushIntervalMs, k = this.lastReportedHasSubscribers === !1 ? Math.max(this.noSubscriberStreamEventFlushIntervalMs, this.noSubscriberHoldMs(), y) : Math.max(y, S), R = Date.now();
    if (this.streamEventTimer) {
      if (R + k >= this.streamEventFlushDueAt) return;
      clearTimeout(this.streamEventTimer);
    } else this.streamEventBufferedAt = R;
    this.streamEventFlushDueAt = R + k, this.streamEventTimer = setTimeout(() => void this.flushStreamEventBuffer(), k);
  }
  setHasSubscribers(e, n) {
    this.hasSubscribersReports++;
    let r = typeof e === "boolean" && (e || !this.senderMayNotBeAttachedYet()) ? e : void 0, s = this.lastReportedHasSubscribers;
    if (this.lastReportedHasSubscribers = r, r === !0) this.viewerReportedSinceLastFalse = !0; else if (r === !1 && this.viewerReportedSinceLastFalse) this.viewerReportedSinceLastFalse = !1, 
    this.lastViewerLeftAtMs = Date.now();
    let h = this.unwatchedPastGrace;
    if (this.unwatchedPastGrace = r === !1 && Date.now() - this.lastViewerLeftAtMs >= fr, 
    this.dropUnwatchedStreamEvents && h !== this.unwatchedPastGrace) t(this.unwatchedPastGrace ? "CCRClient: no subscribers reported; dropping stream deltas until one is" : `CCRClient: resuming stream deltas (${r === !0 ? "watcher" : n})`);
    if (s === !1 && r !== !1 && this.streamEventTimer) this.flushStreamEventBuffer();
    let S = r === !0 ? "watcher" : n;
    if (r === !1) this.viewerAbsentReported = !0; else if (this.viewerAbsentReported && S === "watcher") {
      if (this.viewerAbsentReported = !1, this.holdRule === "served_policy") {
        if (this.parkedRows.length > 0) this.flushStreamEventBuffer();
        this.releaseClientEvents("watcher"), this.internalEventUploader.release("watcher");
      }
    }
    this.applyUploadHold(S);
  }
  async flushStreamEventBuffer(e = !1) {
    let {events: n, release: r} = this.takeStreamEventBuffer(e);
    if (n.length > 0) {
      if (r) this.internalEventUploader.release(r);
      await this.enqueueClientEvents(n, r ? {
        release: r
      } : {
        since: this.streamEventBufferedAt
      });
    }
  }
  enqueueClientEvents(e, n) {
    for (let r of this.trackedFrameUploads("enqueuedAtMs")) {
      let s = e.find(y => y.payload.uuid === r.uuid);
      if (!s) continue;
      let h = this.eventUploader.inFlightBatch(), S;
      if (n.release === void 0 && this.eventUploader.holdsOnArrival(s)) S = "hold"; else if (h !== void 0) S = h.some(y => !y.ephemeral) ? "durable_post" : "ephemeral_post"; else if (this.eventUploader.backlog().backingOff) S = "retry_backoff"; else S = "none";
      r.timing.enqueuedAtMs = performance.now(), r.timing.queuedBehind = S;
    }
    return (this.uploadPaths ?? this.eventUploader).enqueue(e, n);
  }
  releaseClientEvents(e) {
    (this.uploadPaths ?? this.eventUploader).release(e);
  }
  uploadStreamHeaders(e) {
    let n = this.uploadPaths?.breakCountHeader(e.some(s => s.payload.type !== "keep_alive")), r = e.some(te) && this.uploadPaths?.fallbackReason();
    return {
      ...n !== void 0 && {
        [pt]: n
      },
      ...r && {
        "x-ccr-upload-fallback": r
      }
    };
  }
  noteBreakCountStated(e) {
    let n = e[pt];
    if (n !== void 0) this.uploadPaths?.breakCountStated(n);
  }
  stampTrackedFrames(e, n) {
    for (let {uuid: r, timing: s} of this.trackedFrameUploads("ackedAtMs")) if (s[n] === void 0 && e.some(h => h.payload.uuid === r)) {
      if (s[n] = performance.now(), n === "postedAtMs") s.postedWallMs = Date.now();
    }
  }
  actsOnSubscribersReports() {
    return this.noSubscriberStreamEventFlushIntervalMs > 0 || this.noSubscriberUploadHoldMs > 0 || this.dropUnwatchedStreamEvents || this.servedPolicyHolds();
  }
  mergeWaitingLiveEvents(e) {
    let n = [], r = [];
    for (let s of [ ...e, void 0 ]) {
      if (s && Rr(s.payload)) {
        r.push(s.payload);
        continue;
      }
      for (let h of this.trackedFrameUploads("ackedAtMs")) h.uuid = ge(r, h.uuid);
      for (let h of _e(r)) n.push({
        payload: h,
        ephemeral: !0
      });
      if (r = [], s) n.push(s);
    }
    return n;
  }
  takeStreamEventBuffer(e = !1) {
    if (!e) {
      if (this.streamEventTimer) clearTimeout(this.streamEventTimer), this.streamEventTimer = null;
      if (this.firstDeltaFlushTimer) clearTimeout(this.firstDeltaFlushTimer), this.firstDeltaFlushTimer = null;
    }
    let n, r = e ? [] : this.parkedRows;
    for (let {message: I} of r) n ??= this.releaseFor(I);
    if (this.streamEventBuffer.length === 0) return {
      events: e ? [] : this.takeParkedRows(),
      release: n
    };
    let s = [], h, S = 0;
    for (let I of this.streamEventBuffer) {
      if (I.type === "stream_event") {
        s.push(I);
        continue;
      }
      S = (h !== void 0 && I.estimated_tokens - I.estimated_tokens_delta === h.estimated_tokens ? S : 0) + I.estimated_tokens_delta, 
      h = I;
    }
    this.streamEventBuffer = [];
    for (let I of this.trackedFrameUploads("enqueuedAtMs")) I.uuid = ge(s, I.uuid);
    let R = _e(s).filter(I => {
      let C = Buffer.byteLength(_(I));
      if (C <= ee) return !0;
      return Ee(I, C), !1;
    }).map(I => ({
      payload: I,
      ephemeral: !0
    }));
    if (h) R.push(this.toClientEvent({
      ...h,
      estimated_tokens_delta: S
    }));
    if (!e) R.push(...this.takeParkedRows());
    return {
      events: R,
      release: n
    };
  }
  currentUploadTrim() {
    let e = this.uploadTrim();
    return L(e) ? e : ht;
  }
  async writeInternalEvent(e, n, {isCompaction: r = !1, agentId: s, preservedEventIds: h} = {}) {
    let S = h, y = Ze(n);
    if (S && S.length > rkt) i("tengu_ccr_preserved_event_ids_clamped", {
      originalCount: S.length,
      cap: rkt,
      payloadClamped: y !== null
    }), S = S.slice(-rkt);
    let k = y ?? n;
    if (this.currentUploadTrim().envelope === !0) {
      let H = PSs(k);
      if (H !== k && !this.loggedTranscriptEnvelopeStrip) this.loggedTranscriptEnvelopeStrip = !0, 
      g("ccr_worker_envelope_strip");
      k = H;
    }
    if (e === "transcript" && k.type === "user" && k.isVirtual !== !0) {
      let H = this.uploadedToolResult(k.toolUseResult, k.message);
      if (H !== k.toolUseResult) k = {
        ...k,
        toolUseResult: H
      };
    }
    let R = {
      payload: {
        type: e,
        ...k,
        uuid: typeof k.uuid === "string" ? k.uuid : xe()
      },
      ...r && {
        is_compaction: !0
      },
      ...s && {
        session_agent_id: s
      },
      ...S?.length && {
        preserved_event_ids: S
      }
    }, I = [ R ], C = s || "", w = this.rowsAwaitingCompactSummary.get(C);
    if (e === "transcript" && (w !== void 0 || r && this.rowsAwaitingCompactSummaryAtClose === void 0)) {
      if (w === void 0) w = {
        rows: [],
        timer: this.startCompactSummaryWaitTimer(C)
      }, this.rowsAwaitingCompactSummary.set(C, w);
      w.rows.push(R);
      let H = k.isCompactSummary === !0 ? "summary" : k.type === "user" || k.type === "assistant" ? "user_or_assistant_row" : w.rows.length >= ur ? "row_cap" : void 0;
      if (H === void 0) return;
      I = this.takeRowsAwaitingCompactSummary(C, H);
    }
    let U = e === "transcript" && k.type === "user" && this.toolResultReleases(k.message), F = this.gatesToolCalls && e === "transcript" && !s ? Ne(k) : [];
    if (await this.queueInternalEvents(I, U ? "tool_result" : F.some(H => this.awaitedToolCalls.has(H)) ? "tool_call" : !this.transcriptRowMayWait(e, k) ? "event" : void 0), 
    e === "transcript") this.transcriptLaneInUse = !0;
    this.noteToolCallRows("internal_events", F, "queued");
  }
  async queueInternalEvents(e, n) {
    let r = e[0]?.is_compaction === !0 && this.holdRule !== void 0;
    if (r) this.releaseClientEvents("event");
    let h = (e[0]?.is_compaction === !0 && e[0].session_agent_id === void 0 ? this.rowsRepeatedAfterCompaction?.() ?? [] : []).map(({eventType: y, payload: k}) => ({
      payload: {
        type: y,
        ...k,
        uuid: xe()
      }
    })), S = [ ...e, ...h ];
    this.markInternalEventPostWatch(y => y.noteQueued(S)), await this.internalEventUploader.enqueue(S, {
      together: !0,
      release: r ? "event" : n
    });
  }
  startCompactSummaryWaitTimer(e) {
    let n = setTimeout((r, s) => {
      let h = r.rowsAwaitingCompactSummary.get(s);
      if (r.closed || h === void 0) return;
      if (!r.internalEventUploader.hasRoomFor(1)) {
        h.timer = r.startCompactSummaryWaitTimer(s);
        return;
      }
      r.queueInternalEvents(r.takeRowsAwaitingCompactSummary(s, "timeout"), void 0).catch(d);
    }, cr, this, e);
    return n.unref?.(), n;
  }
  takeRowsAwaitingCompactSummary(e, n) {
    let r = this.rowsAwaitingCompactSummary.get(e);
    this.rowsAwaitingCompactSummary.delete(e), clearTimeout(r?.timer);
    let s = r?.rows ?? [];
    if (n !== "summary" && n !== "close") X("info", "cli_worker_compaction_marker_uploaded_without_summary", {
      reason: n,
      count: s.length,
      subagent: e !== ""
    });
    return s;
  }
  transcriptRowMayWait(e, n) {
    let r = this.flushPolicy;
    if (this.holdRule !== "served_policy" || !r) return !0;
    let s = e === "transcript" ? n.type : e;
    if (typeof s !== "string" || r.mustFlushTypes.has(s)) return !1;
    if (s === "user") return n.toolUseResult !== void 0 || Mt(n.message) || n.isMeta === !0 || n.isVirtual === !0 || n.isCompactSummary === !0;
    return !(s === "assistant" && r.flushOnAssistant);
  }
  flushInternalEvents(e) {
    return this.internalEventUploader.flush(e);
  }
  watchInternalEventPosts() {
    let e = new be(this.internalEventUploader.backlog().unsent);
    return this.internalEventPostWatch = e, n => {
      if (this.internalEventPostWatch === e) this.internalEventPostWatch = void 0;
      return e.seen(n);
    };
  }
  markInternalEventPostWatch(e) {
    let n = this.internalEventPostWatch;
    if (n === void 0) return;
    try {
      e(n);
    } catch (r) {
      this.internalEventPostWatch = void 0, d(r);
    }
  }
  hasUnsentUploads() {
    let {unsentClientEvents: e, unsentInternalEvents: n} = this.uploadBacklog();
    return this.streamEventTimer !== null || e > 0 || n > 0 || this.deliveryUploader.backlog().unsent > 0 || this.workerState.unsent;
  }
  uploadBacklog() {
    let e = this.eventUploader.backlog(), n = this.internalEventUploader.backlog(), r = [ e.inFlightMs, n.inFlightMs ].filter(s => s !== void 0);
    return {
      unsentClientEvents: e.unsent + (this.uploadPaths?.waitingCount ?? 0),
      unsentInternalEvents: n.unsent + this.countRowsAwaitingCompactSummary(),
      oldestInFlightMs: r.length ? Math.max(...r) : void 0,
      backingOff: e.backingOff || n.backingOff
    };
  }
  async postInternalEventsBatch(e, n = {}) {
    let r = this.refuseInternalEventsCall(!0);
    if (r) return r;
    let s = this.epochMismatchCount;
    try {
      let h = await this.request("post", "/worker/internal-events", {
        worker_epoch: this.workerEpoch,
        events: e
      }, "internal events batch", {
        parseBody: !0,
        countTowardEscalation: !1,
        signal: n.signal
      });
      if (h.ok) {
        let S = Kn().safeParse(h.data);
        return {
          ok: !0,
          results: S.success ? S.data.results : void 0
        };
      }
      return this.internalEventsFailure(h, s);
    } catch (h) {
      return this.internalEventsFailure({
        reason: `fetch_failed:${le(h)}`
      }, s);
    }
  }
  async getInternalEventsPage(e, n = {}) {
    let r = this.refuseInternalEventsCall(!1);
    if (r) return r;
    let s = new URL(`${this.sessionBaseUrl}/worker/internal-events`);
    if (e.limit !== void 0) s.searchParams.set("limit", String(e.limit));
    if (e.agentId) s.searchParams.set("session_agent_id", e.agentId);
    if (e.subagents) s.searchParams.set("subagents", "true");
    if (e.cursor) s.searchParams.set("cursor", e.cursor); else if (e.afterEventId) s.searchParams.set("after_event_id", e.afterEventId);
    let h = this.epochMismatchCount, S;
    try {
      let y = this.getAuthHeaders();
      if (Object.keys(y).length === 0) return {
        ok: !1,
        reason: "no_auth_headers"
      };
      S = n.signal ? Ys(n.signal, {
        timeoutMs: 3e4,
        refTimer: !0
      }) : void 0;
      let k = await fetch(s, {
        headers: {
          ...y,
          "anthropic-version": "2023-06-01",
          "anthropic-client-platform": Yg(),
          "User-Agent": Qo()
        },
        signal: S?.signal ?? AbortSignal.timeout(3e4),
        ...aa({
          url: s.toString()
        })
      });
      if (k.ok) {
        let U;
        try {
          U = await k.json();
        } catch (D) {
          if (!(D instanceof SyntaxError)) throw D;
        }
        let F = Vn().safeParse(U);
        if (!F.success) return X("warn", "cli_worker_internal_events_page_foreign"), {
          ok: !1,
          status: k.status,
          reason: "foreign_body"
        };
        let H = Number(k.headers.get("content-length") ?? Number.NaN);
        return {
          ok: !0,
          data: F.data.data.map(Rt),
          ...F.data.next_cursor && {
            nextCursor: F.data.next_cursor
          },
          bytes: Number.isFinite(H) ? H : null
        };
      }
      let R, I, C, w;
      if (k.status === 409) {
        let U = await He(k);
        if (this.closed) w = U ?? this.lastEpochMismatchCause ?? "epoch_conflict"; else try {
          this.handleEpochMismatch(U);
        } catch (F) {
          t(`CCRClient: onEpochMismatch threw during a page read: ${l(F)}`);
        }
      } else if (k.status === 404) try {
        let U = await k.json();
        if (typeof U?.error?.type === "string") R = U.error.type;
        if (typeof U?.error?.resource_type === "string") I = U.error.resource_type;
      } catch {} else {
        if (k.status === 429) {
          let U = parseInt(k.headers.get("retry-after") ?? "", 10);
          if (!isNaN(U) && U >= 0) C = U * 1e3;
        }
        k.body?.cancel();
      }
      return t(`CCRClient: internal events page returned ${k.status}`, {
        level: "warn"
      }), X("warn", "cli_worker_request_failed", {
        method: "get",
        path: "/worker/internal-events",
        status: k.status
      }), this.internalEventsFailure({
        status: k.status,
        retryAfterMs: C,
        reason: `http_${k.status}`
      }, h, {
        errorType: R,
        resourceType: I,
        closedConflict: w
      });
    } catch (y) {
      return t(`CCRClient: internal events page failed: ${l(y)}`, {
        level: "warn"
      }), this.internalEventsFailure({
        reason: `fetch_failed:${le(y)}`
      }, h);
    } finally {
      S?.cleanup();
    }
  }
  refuseInternalEventsCall(e) {
    if (this.closed) return {
      ok: !1,
      reason: "client_closed",
      ...this.lastEpochMismatchCause && {
        conflict: this.lastEpochMismatchCause
      }
    };
    if (e && this.workerEpoch <= 0) return {
      ok: !1,
      reason: "not_initialized"
    };
    return;
  }
  internalEventsFailure(e, n, {errorType: r, resourceType: s, closedConflict: h} = {}) {
    let S = h ?? (this.epochMismatchCount > n ? this.lastEpochMismatchCause : e.status === 409 ? this.lastEpochMismatchCause ?? "epoch_conflict" : void 0), y = e.status ?? (S && Hn[S] ? 409 : void 0);
    return {
      ok: !1,
      reason: y === 409 ? "http_409" : e.reason ?? "unknown",
      ...y !== void 0 && {
        status: y
      },
      ...e.retryAfterMs !== void 0 && {
        retryAfterMs: e.retryAfterMs
      },
      ...S && {
        conflict: S
      },
      ...r && {
        errorType: r
      },
      ...s && {
        resourceType: s
      }
    };
  }
  droppedInternalEventBatches=0;
  get droppedInternalBatches() {
    return this.droppedInternalEventBatches;
  }
  refusedInternalEventUuids=new Set;
  refusedInternalEvents(e) {
    return e.filter(n => this.refusedInternalEventUuids.has(n));
  }
  noteRefusedInternalEvents(e) {
    for (let {payload: r, session_agent_id: s} of e) if (s === void 0) this.refusedInternalEventUuids.add(r.uuid);
    let n = this.refusedInternalEventUuids.size - jn;
    for (let r of this.refusedInternalEventUuids) {
      if (n-- <= 0) break;
      this.refusedInternalEventUuids.delete(r);
    }
  }
  dropOrphanedHandedOffLines(e) {
    let n = 0;
    for (let r = 0; r < e.length; ) {
      let s = e[r], {payload: h} = s;
      if (s.session_agent_id === void 0 && (h.handedOff === !0 || h.type === "system" && h.subtype === Gn) && !(h.type === "user" && !Mt(h.message)) && typeof h.parentUuid === "string" && this.refusedInternalEventUuids.has(h.parentUuid)) {
        e.splice(r, 1), n++, this.noteRefusedInternalEvents([ s ]);
        continue;
      }
      r++;
    }
    return n;
  }
  droppedDeliveryAckBatches=0;
  deliveryAcksWaitingForRoom=new Set;
  async flushDeliveryAcksConfirmed() {
    let e = this.droppedDeliveryAckBatches;
    return await Promise.all(this.deliveryAcksWaitingForRoom), await this.deliveryUploader.flush(), 
    this.droppedDeliveryAckBatches === e && !this.closed;
  }
  flushDeliveryAcks(e) {
    return this.deliveryUploader.flush(e);
  }
  async flush(e) {
    return await this.flushStreamEventBuffer(), await (this.uploadPaths?.settled()), 
    this.eventUploader.flush(e);
  }
  withdrawQueuedControlRequest(e) {
    let n = r => !r.ephemeral && r.payload.type === "control_request" && r.payload.request_id === e;
    return (this.uploadPaths?.withdraw(n) ?? 0) + this.eventUploader.withdraw(n);
  }
  droppedDurableEventBatches=0;
  get droppedDurableBatches() {
    return this.droppedDurableEventBatches;
  }
  takeUndeliveredClientEvents() {
    return this.eventUploader.takeUndelivered().filter(e => !e.ephemeral);
  }
  discardUndeliveredClientEvents() {
    let e = this.eventUploader.peekUndelivered().filter(n => !n.ephemeral);
    return this.eventUploader.discardUndelivered(), e;
  }
  adoptClientEvents(e) {
    if (e.length === 0) return;
    this.eventUploader.enqueue(e);
  }
  async flushWorkerState() {
    return this.workerState.flush();
  }
  droppedWorkerStatePatchCount=0;
  get droppedWorkerStatePatches() {
    return this.droppedWorkerStatePatchCount;
  }
  async readInternalEvents(e, n, r) {
    return QL.readInternalEventsFrom(this.readSource, e, n, r);
  }
  async readInternalEventsForCatchUp(e) {
    return QL.paginatedGet(this.readSource, "/worker/internal-events", {
      limit: "1000"
    }, "internal_events", {
      maxAttempts: de,
      signal: e
    });
  }
  static readInternalEventsFrom(e, n, r, s) {
    return QL.paginatedGet(e, "/worker/internal-events", {
      limit: "1000",
      ...n && {
        after_event_id: n
      }
    }, "internal_events", {
      signal: r,
      readBody: s
    });
  }
  async readSubagentInternalEvents() {
    return QL.readSubagentInternalEventsFrom(this.readSource);
  }
  static readSubagentInternalEventsFrom(e) {
    return QL.paginatedGet(e, "/worker/internal-events", {
      subagents: "true",
      limit: "1000"
    }, "subagent_events");
  }
  async readAgentInternalEvents(e, n, r) {
    return QL.paginatedGet(this.readSource, "/worker/internal-events", {
      session_agent_id: e,
      limit: "1000"
    }, "agent_events", {
      maxAttempts: de,
      signal: n
    }, r);
  }
  static async paginatedGet(e, n, r, s, h = {}, S) {
    let y = e.getAuthHeaders();
    if (Object.keys(y).length === 0) return null;
    let k = [], R, I = 0, C = 0, w = 0, U = 0, F = null;
    do {
      let H = new URL(`${e.sessionBaseUrl}${n}`);
      for (let [x, j] of Object.entries(r)) H.searchParams.set(x, j);
      if (R) H.searchParams.set("cursor", R), H.searchParams.delete("after_event_id");
      let D = !R && r.after_event_id !== void 0, O, q = await QL.getWithRetry(e, H.toString(), y, s, x => {
        I++, F ??= x.headers.get("content-encoding");
        let j = x.headers.get("content-length");
        if (j !== null && U !== null) U += Number(j); else U = null;
      }, (x, j) => {
        if (!D) return;
        if (x === 400) O = "rejected"; else if (j === "after_event_id_not_found") O = "not-found";
      }, S === void 0 ? h : {
        ...h,
        unencoded: !0,
        readBody: async x => {
          let j = x.headers.get("content-encoding");
          if (j !== null && j !== "identity") return await (x.body?.cancel()), {
            encodedBody: !0
          };
          let z = await Wn(x, S.maxBytes - w);
          if (z === null) return {
            pastMaxBytes: !0
          };
          let P = Y(z.text);
          if (!L(P) || !Array.isArray(P.data) || !P.data.every(L)) throw Error("CCRClient: a page is no list of events");
          return w += z.bytes, P;
        }
      });
      if (q?.encodedBody) return {
        events: [],
        stats: {
          pageCount: I,
          bytesReceived: U,
          contentEncoding: F ?? "none"
        },
        encodedBody: !0
      };
      if (!q) {
        if (O) {
          t(`CCRClient: after_event_id ${O === "rejected" ? "rejected by server (gate off)" : "not found (stale anchor)"} \u2014 refetching without anchor`, {
            level: "warn"
          }), X("warn", O === "rejected" ? "cli_worker_after_event_id_rejected" : "cli_worker_after_event_id_not_found", {
            context: s
          });
          let {after_event_id: x, ...j} = r, z = await QL.paginatedGet(e, n, j, s, h, S);
          if (!z) return null;
          return {
            ...z,
            anchorFallback: O
          };
        }
        return null;
      }
      for (let x of q.data ?? []) if (!MSs(x.payload)) k.push(Rt(x));
      if (C += Math.max(1, q.data?.length ?? 0), S !== void 0 && (C > S.maxEvents || q.pastMaxBytes === !0 || (q.data ?? []).some(x => !qn(x, S.maxTimestampChars)))) return {
        events: [],
        stats: {
          pageCount: I,
          bytesReceived: U,
          contentEncoding: F ?? "none"
        },
        overBound: !0
      };
      R = q.next_cursor;
    } while (R);
    return t(`CCRClient: Read ${k.length} internal events from ${n}${r.subagents ? " (subagents)" : ""}`), 
    {
      events: k,
      stats: {
        pageCount: I,
        bytesReceived: U,
        contentEncoding: F ?? "none"
      }
    };
  }
  static getWithRetry(e, n, r, s, h, S, y = {}) {
    return QL.getWithRetryNow(e, n, r, s, h, S, y);
  }
  static async getWithRetryNow(e, n, r, s, h, S, {maxAttempts: y = Nn, signal: k, readBody: R, unencoded: I}) {
    for (let C = 1; C <= y; C++) {
      if (k?.aborted) return null;
      let w;
      try {
        if (w = await E$n(n, {
          headers: {
            ...r,
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": Yg(),
            "User-Agent": Qo(),
            ...I && {
              "Accept-Encoding": "identity"
            }
          },
          ...I && {
            decompress: !1
          },
          signal: k ? AbortSignal.any([ AbortSignal.timeout(3e4), k ]) : AbortSignal.timeout(3e4),
          ...aa({
            url: n
          })
        }, e.ownConnectionPool), w.ok) {
          let F = R ? await R(w) : await w.json();
          return h?.(w), F;
        }
      } catch (F) {
        if (k?.aborted) return null;
        if (t(`CCRClient: GET ${n} failed (attempt ${C}/${y}): ${l(F)}`, {
          level: "warn"
        }), C < y) {
          let H = Math.min(500 * 2 ** (C - 1), 3e4) + Math.random() * 500;
          await J(H, k);
        }
        continue;
      }
      let U;
      if (w.status === 404 && S) try {
        let F = await w.json();
        if (typeof F?.error?.type === "string") U = F.error.type;
      } catch {} else if (w.status === 409) {
        if (e.isClosed?.()) return await TW(w), null;
        let F = await He(w);
        if (!e.isClosed?.()) e.onConflict?.(F);
        return null;
      } else await TW(w);
      if (K(w.status) || U === "after_event_id_not_found") return t(`CCRClient: GET ${n} returned ${w.status} \u2014 permanent, not retrying`, {
        level: "warn"
      }), S?.(w.status, U), null;
      if (t(`CCRClient: GET ${n} returned ${w.status} (attempt ${C}/${y})`, {
        level: "warn"
      }), C < y) {
        let F = Math.min(500 * 2 ** (C - 1), 3e4) + Math.random() * 500;
        await J(F, k);
      }
    }
    return t("CCRClient: GET retries exhausted", {
      level: "error"
    }), X("error", "cli_worker_get_retries_exhausted", {
      context: s
    }), null;
  }
  reportDelivery(e, n) {
    if (n === "received") this.lastInboundEventAtMs = Date.now(), this.setHasSubscribers(void 0, "watcher");
    if (n === "processing") {
      if (this.closed) return;
      if (this.pendingProcessingAcks.push(e) === 1) queueMicrotask(() => {
        let h = this.pendingProcessingAcks;
        if (this.pendingProcessingAcks = [], this.closed || h.length === 0) return;
        this.request("post", "/worker/events/delivery", {
          worker_epoch: this.workerEpoch,
          updates: h.map(S => ({
            event_id: S,
            status: "processing"
          }))
        }, "processing ack");
      });
      return;
    }
    let r = !this.deliveryUploader.hasRoomFor(1), s = this.deliveryUploader.enqueue({
      eventId: e,
      status: n
    });
    if (r) this.deliveryAcksWaitingForRoom.add(s), s.finally(() => this.deliveryAcksWaitingForRoom.delete(s));
  }
  getWorkerEpoch() {
    return this.workerEpoch;
  }
  get internalEventsPending() {
    return this.internalEventUploader.pendingCount + this.countRowsAwaitingCompactSummary() + (this.rowsAwaitingCompactSummaryAtClose ?? 0);
  }
  countRowsAwaitingCompactSummary() {
    let e = 0;
    for (let n of this.rowsAwaitingCompactSummary.values()) e += n.rows.length;
    return e;
  }
  get awaitsCompactSummary() {
    return this.rowsAwaitingCompactSummary.has("");
  }
  hasInternalEventRoom(e) {
    return !this.awaitsCompactSummary && this.internalEventUploader.hasRoomFor(e);
  }
  close(e) {
    this.closeExceptInternalEvents(e);
    let n = this.countRowsAwaitingCompactSummary();
    for (let r of this.rowsAwaitingCompactSummary.keys()) this.takeRowsAwaitingCompactSummary(r, "close");
    this.rowsAwaitingCompactSummaryAtClose ??= n, this.logUndeliveredAtClose("internal_events", this.internalEventUploader.close() + n);
  }
  flushGoodbye() {
    return this.goodbyeFlushed;
  }
  closeExceptInternalEvents(e) {
    let n = this.closed;
    this.closed = !0, this.workerSocket?.usePostFromNowOn(), this.closeAbort.abort(), 
    this.closingForSuccessor = e?.retainUndeliveredClientEvents === !0, this.uploadPaths?.close();
    let r = this.takeParkedRows();
    if (r.length > 0) this.eventUploader.enqueue(r);
    if (!n && e?.goodbye !== !1) this.sendGoodbye();
    this.stopHeartbeat(), this.clearProbeBeatTimer(), this.unsubscribeIdleTracker?.(), 
    dRs(), this.stopToolCallGate?.();
    for (let s of this.toolCallRowWaiters.values()) for (let h of s) h.reached();
    if (this.toolCallRowWaiters.clear(), this.streamEventTimer) clearTimeout(this.streamEventTimer), 
    this.streamEventTimer = null;
    if (this.firstDeltaFlushTimer) clearTimeout(this.firstDeltaFlushTimer), this.firstDeltaFlushTimer = null;
    if (this.streamEventBuffer = [], this.pendingProcessingAcks = [], this.workerState.close(), 
    e?.keepClientEvents !== !0) this.logUndeliveredAtClose("client_events", this.eventUploader.close({
      retainUndelivered: e?.retainUndeliveredClientEvents === !0
    }));
    this.deliveryUploader.close();
  }
  registerShutdownCleanup(e = {
    registerCleanup: bt,
    registerPreExitFlush: bI
  }, n = Tt) {
    e.registerCleanup(() => this.beginShutdown()), e.registerPreExitFlush(() => this.finishShutdown(n));
  }
  beginShutdown() {
    try {
      let e = !this.closed && this.currentState === "running" && this.holdSwitchOn();
      if (this.shutdownKeepsClientEvents = e || !this.closed && this.servedPolicyHolds(), 
      this.shutdownKeepsClientEvents) this.shutdownReleased = !0, this.applyUploadHold("shutdown");
    } finally {
      this.closeExceptInternalEvents({
        keepClientEvents: this.shutdownKeepsClientEvents
      });
    }
  }
  async finishShutdown(e = Tt) {
    await this.flushGoodbye();
    try {
      await We(Promise.allSettled([ this.flushInternalEvents(), this.shutdownKeepsClientEvents ? this.flush() : void 0 ]), e);
    } finally {
      this.close(), this.onInternalEventLaneClosed?.(), await vOe().catch(() => {});
    }
  }
}

var Tt = 3e3;

function Er(e) {
  let n = e.post_turn_summary;
  if (!kr(n) || n.status_category !== "blocked") return e;
  return {
    ...e,
    post_turn_summary: {
      ...n,
      status_category: "need_input"
    }
  };
}

function kr(e) {
  return e !== null && typeof e === "object" && "status_category" in e && typeof e.status_category === "string";
}

async function He(e) {
  let n = Le(e.headers.get("x-ccr-conflict-reason"));
  if (n !== void 0) return await TW(e), n;
  try {
    let r = await e.json();
    return Le(r?.error?.reason ?? r?.reason) ?? Le(r?.error?.type);
  } catch {}
  return;
}

function Le(e) {
  switch (e) {
   case "superseded_by_worker":
   case "epoch_stale":
   case "session_not_active":
    return e;

   default:
    return;
  }
}

function wr(e) {
  let n = Jn().safeParse(e);
  if (!n.success) return;
  let r = n.data, s = he(r.max_age_ms, Nt), h = he(r.max_bytes, tr), S = r.policy_version ?? void 0;
  return {
    maxEvents: s > 0 ? he(r.max_events, Zn) : 0,
    maxAgeMs: s,
    maxBytes: h > 0 ? h : void 0,
    flushOnSamplingEnd: r.flush_on_sampling_end === !0,
    flushOnAssistant: r.flush_on_assistant === !0,
    flushBeforeToolsWaitMs: he(r.flush_before_tools_wait_ms, ar),
    flushAfterTools: lr.find(y => y === r.flush_after_tools) ?? "none",
    mustFlushTypes: new Set((r.must_flush_types ?? []).slice(0, nr)),
    liveTwinTypes: new Set((r.live_twin_types ?? []).slice(0, rr)),
    policyVersion: S !== void 0 && ir.test(S) ? S : void 0
  };
}

function Rt(e) {
  let n = o7t(e.payload);
  return n === e.payload ? e : {
    ...e,
    payload: n
  };
}

function Mt(e) {
  let n = L(e) ? e.content : void 0;
  return Array.isArray(n) && n.some(r => L(r) && r.type === "tool_result");
}

function Ne(e) {
  return L(e) && e.type === "assistant" && e.parent_tool_use_id == null ? Wt(e.message, "tool_use", "id") : [];
}

function Wt(e, n, r) {
  let s = L(e) ? e.content : void 0;
  if (!Array.isArray(s)) return [];
  let h = [];
  for (let S of s) if (L(S) && S.type === n) {
    let y = S[r];
    if (typeof y === "string") h.push(y);
  }
  return h;
}

function Ct(e) {
  return new Promise(n => {
    if (e.aborted) n(); else e.addEventListener("abort", () => n(), {
      once: !0
    });
  });
}

function Pt(e) {
  if (e.size > dr) {
    let n = e.keys().next().value;
    if (n !== void 0) e.delete(n);
  }
}

function he(e, n) {
  return typeof e === "number" && Number.isFinite(e) ? Math.min(Math.max(0, Math.trunc(e)), n) : 0;
}

function Tr(e, n) {
  if (!e || !n) return e === n;
  return e.maxEvents === n.maxEvents && e.maxAgeMs === n.maxAgeMs && e.maxBytes === n.maxBytes && e.flushOnSamplingEnd === n.flushOnSamplingEnd && e.flushOnAssistant === n.flushOnAssistant && e.flushBeforeToolsWaitMs === n.flushBeforeToolsWaitMs && e.flushAfterTools === n.flushAfterTools && e.policyVersion === n.policyVersion && e.mustFlushTypes.size === n.mustFlushTypes.size && [ ...e.mustFlushTypes ].every(r => n.mustFlushTypes.has(r)) && e.liveTwinTypes.size === n.liveTwinTypes.size && [ ...e.liveTwinTypes ].every(r => n.liveTwinTypes.has(r));
}

function pe(e, n, r) {
  let s = typeof n === "string" ? Number(n) : n;
  if (typeof s === "number" && Number.isFinite(s)) return Math.min(Math.max(s, 0), 6e4);
  if (n !== void 0) t(`CCRClient: non-finite ${e} (${typeof n}) \u2014 using ${r}ms`, {
    level: "warn"
  });
  return r;
}

function Rr(e) {
  return e.type === "stream_event";
}

function Mr(e) {
  let n = e.pathname.replace(/\/$/, ""), r = n.lastIndexOf("/sessions/");
  if (r < 0) return;
  return `${e.protocol === "https:" ? "wss:" : "ws:"}//${e.host}${n.slice(0, r)}/worker/events/upload`;
}

function It(e) {
  return e.type === "system" && "subtype" in e && e.subtype === "thinking_tokens";
}

function fJr(e) {
  switch (e.type) {
   case "user":
   case "stream_event":
   case "tool_progress":
    return !0;

   case "assistant":
    return !e.message.content.some(n => n.type === "tool_use" && (n.name === "SendUserMessage" || n.name === "PushNotification"));

   case "system":
    return "subtype" in e && (e.subtype === "thinking_tokens" || e.subtype === "task_progress" || e.subtype === "hook_progress");

   default:
    return !1;
  }
}

function Ut(e) {
  if (e) return "?include_hearth=true";
  return "";
}

function Ft(e) {
  return e?.hearth;
}

function Ge(e) {
  return e.payload.type === "user";
}

function dCn(e) {
  let n = e?.isTurnRunning ?? (() => lwe() > 0), r = Me(), s = Date.now();
  return {
    noteActivity() {
      s = Date.now();
      try {
        r.emit();
      } catch (h) {
        d(h);
      }
    },
    sampleIdleSeconds() {
      let h = Date.now();
      if (n()) return s = h, 0;
      return Math.max(0, Math.floor((h - s) / 1e3));
    },
    onActivity: r.subscribe
  };
}

var Jsr = 3e4;

var qt = 50, Ar = 16384, $t = 500, se = 10, Cr = 1e3, Pr = 1e3, Ir = 3, Q = 36e5, jt = 1048576, Ur = 1e6;

class Ve {
  decoder;
  clock;
  sink;
  watch=null;
  cancelTick=null;
  nextTickDueMs=1 / 0;
  lastTickLagMs=0;
  lastTickAtMs=0;
  dispatchedSeen;
  lastLineAtMs=-1 / 0;
  disabled=!1;
  constructor(e, n = Br, r = Fr) {
    this.decoder = e;
    this.clock = n;
    this.sink = r;
    this.dispatchedSeen = e.framesDispatched;
  }
  observe(e, n) {
    let r = this.decoder.framesDispatched - this.dispatchedSeen;
    if (this.dispatchedSeen = this.decoder.framesDispatched, this.watch === null && this.decoder.pendingChars === 0 && !n.some(Gt)) return;
    if (this.disabled) return;
    try {
      this.onRead(e, r, n);
    } catch (s) {
      this.disable(s);
    }
  }
  stop() {
    this.cancelTick?.(), this.cancelTick = null, this.nextTickDueMs = 1 / 0, this.watch = null;
  }
  onRead(e, n, r) {
    let s = this.clock.nowMs(), h = this.clock.cpuMicros(), S = n > 0 && this.decoder.pendingChars > 0 ? Math.min(Buffer.byteLength(this.decoder.buffered()), e) : 0, y = this.watch, k = null;
    if (y !== null) {
      if (y.reads === 0 && n === 0 && !this.frameHasBegun()) return;
      let R = {
        gapMs: s - y.lastReadAtMs,
        loopLagMs: this.loopLagAt(s),
        cpuMs: (h - y.lastCpuMicros) / 1e3
      };
      if (this.stop(), y.reads === 0) {
        if (R.loopLagMs !== null && R.gapMs - R.loopLagMs <= $t) k = {
          gapMs: R.gapMs,
          loopLagMs: R.loopLagMs,
          cpuMs: R.cpuMs
        };
      } else {
        if (R.gapMs > y.maxGap.gapMs) y.maxGap = R, y.maxGapOffsetBytes = y.bytes;
        if (y.reads++, y.bytes += e, y.lastReadAtMs = s, y.lastCpuMicros = h, n === 0) {
          this.watch = y, this.armTick(s);
          return;
        }
        y.bytes -= S, this.report(y, s);
      }
    }
    if (this.frameHasBegun()) {
      this.watch = ze(s, h, {
        reads: 1,
        bytes: n === 0 ? e : S,
        before: n === 0 ? k : null
      }), this.armTick(s);
      return;
    }
    if (k !== null && n === 1) this.report(ze(s, h, {
      reads: 1,
      bytes: e,
      before: k
    }), s);
    if (r.some(Gt)) this.watch = ze(s, h, {
      reads: 0,
      bytes: 0,
      before: null
    }), this.armTick(s);
  }
  frameHasBegun() {
    let e = this.decoder.pendingChars;
    return e > Ir || e > 0 && /[^\r\n]/.test(this.decoder.buffered());
  }
  report(e, n) {
    let {before: r, maxGap: s} = e, h = r !== null && r.loopLagMs >= qt && e.bytes >= Ar;
    if (s.gapMs < qt && !h) return;
    if (n - this.lastLineAtMs < Pr) return;
    this.lastLineAtMs = n, this.sink({
      frame_kib: V(e.bytes / 1024, jt),
      read_count: V(e.reads, Ur),
      receive_ms: V(n - e.startedAtMs, Q),
      ...r !== null && {
        before_frame_gap_ms: V(r.gapMs, Q),
        before_frame_loop_lag_ms: V(r.loopLagMs, Q),
        before_frame_cpu_ms: V(r.cpuMs, Q)
      },
      max_gap_ms: V(s.gapMs, Q),
      max_gap_offset_kib: V(e.maxGapOffsetBytes / 1024, jt),
      ...s.loopLagMs !== null && {
        max_gap_loop_lag_ms: V(s.loopLagMs, Q)
      },
      max_gap_cpu_ms: V(s.cpuMs, Q)
    });
  }
  loopLagAt(e) {
    if (this.nextTickDueMs !== 1 / 0) return Math.max(this.lastTickLagMs, e - this.nextTickDueMs, 0);
    return e - this.lastTickAtMs <= se ? this.lastTickLagMs : null;
  }
  armTick(e) {
    this.lastTickLagMs = 0, this.lastTickAtMs = e, this.nextTickDueMs = e + se, this.cancelTick = this.clock.setTimer(this.onTick, se);
  }
  onTick=() => {
    try {
      this.cancelTick = null;
      let e = this.watch;
      if (e === null) return;
      let n = this.clock.nowMs();
      this.lastTickLagMs = Math.max(n - this.nextTickDueMs, 0), this.lastTickAtMs = n;
      let r = e.reads === 0 ? $t : Cr;
      if (n - e.lastReadAtMs >= r) {
        this.nextTickDueMs = 1 / 0;
        return;
      }
      this.nextTickDueMs = n + se, this.cancelTick = this.clock.setTimer(this.onTick, se);
    } catch (e) {
      this.disable(e);
    }
  };
  disable(e) {
    this.disabled = !0, this.stop(), d(e);
  }
}

function ze(e, n, {reads: r, bytes: s, before: h}) {
  return {
    reads: r,
    bytes: s,
    startedAtMs: e,
    lastReadAtMs: e,
    lastCpuMicros: n,
    before: h,
    maxGap: {
      gapMs: 0,
      loopLagMs: 0,
      cpuMs: 0
    },
    maxGapOffsetBytes: 0
  };
}

function Gt(e) {
  return e.event === "client_event";
}

function V(e, n) {
  return Number.isFinite(e) ? Math.min(Math.max(Math.round(e), 0), n) : 0;
}

function Fr(e) {
  X("warn", "cli_sse_frame_stall", e);
}

function Or() {
  let e = process.cpuUsage();
  return e.user + e.system;
}

function xr(e, n) {
  let r = setTimeout(e, n);
  return r.unref(), () => clearTimeout(r);
}

var Br = {
  nowMs: () => performance.now(),
  cpuMicros: Or,
  setTimer: xr
};

var Dr = new Map([ [ "", "none" ], [ "text/event-stream", "event-stream" ], [ "text/html", "html" ], [ "application/xhtml+xml", "html" ], [ "application/json", "json" ], [ "text/plain", "text" ], [ "application/xml", "xml" ], [ "text/xml", "xml" ] ]);

function zt(e) {
  let n = nt(nt(e ?? "", ";"), ",").trim().toLowerCase();
  return Dr.get(n) ?? (n.endsWith("+json") ? "json" : "other");
}

var Vt = "worker_capabilities", Kt = "attestation-floor/1", Yt = "worker-socket/1", cCn = "x-ccr-attestation-policy", Hr = new Map([ [ "verified", "VERIFIED" ], [ "verified_keyless_device", "VERIFIED_KEYLESS_DEVICE" ], [ "verified_by_gate", "VERIFIED_BY_GATE" ] ]), Lr = new Map([ [ "server_authored", "SERVER_AUTHORED" ], [ "server_replayed", "SERVER_REPLAYED" ], [ "absent", "ABSENT" ], [ "invalid", "INVALID" ], [ "unchecked", "UNCHECKED" ], [ "unspecified", "UNSPECIFIED" ] ]);

function Xt(e) {
  if (e === null) return {
    policy: void 0,
    fault: void 0
  };
  let n = new Map;
  for (let y of nt(e, ", ").split(";")) {
    let k = y.trim(), R = k.indexOf("="), I = R === -1 ? "" : k.slice(0, R);
    if (I !== "" && !n.has(I)) n.set(I, k.slice(R + 1));
  }
  let r = n.get("mode");
  if (n.get("v") !== "1") return {
    policy: void 0,
    fault: "policy_unparseable"
  };
  if (r === "off") return {
    policy: void 0,
    fault: void 0
  };
  if (r !== "observe" && r !== "enforce") return {
    policy: void 0,
    fault: "policy_unparseable"
  };
  let s = Hr.get(n.get("level") ?? ""), h = new Set, S = !1;
  for (let y of (n.get("accept") ?? "").split(",")) {
    let k = Lr.get(y);
    if (k !== void 0) h.add(k); else if (y !== "") S = !0;
  }
  return {
    policy: {
      enforce: r === "enforce",
      acceptLevel: s ?? "VERIFIED_BY_GATE",
      acceptStatuses: h
    },
    fault: s === void 0 || S ? "policy_partial" : void 0
  };
}

var Nr = 1e3, Wr = 3e4, qr = 6e4, Ye = 15, $r = 60, jr = 3e4, mJr = new DOMException("no frame within the liveness timeout", "AbortError"), gJr = new DOMException("the connection is renewed", "AbortError"), Gr = 15e3, Qt = 3, zr = "keepalive_tolerance_seconds", hJr = "x-ccr-sse-keepalive-interval-seconds", Vr = new Set([ 401, 403, 404 ]), Kr = /\btext\/event-stream\b/i, ie = 10, Yr = 500, Xr = 8e3;

function Qr() {
  return !0;
}

var yJr = new Set([ "workflow_launch", "queued_notification", "session_notice" ]), Jr = p(() => u({
  event_type: o()
})), Zr = "heartbeat_probe", es = "owner_present", ts = new Set([ "event_id" ]), ns = /^"([\w-]{1,128})"$/;

class uCn {
  url;
  state="idle";
  onData;
  onUserFrameReceived;
  onCloseCallback;
  onEventCallback;
  onDeliveredCallback;
  eventFilter;
  workerAttestationPolicySink;
  connectionPolicyReading;
  connectionSessionWriters;
  frameSessionWriters=new WeakMap;
  onEventVetoed;
  mostMembersInAFrame;
  lighterFrame;
  streamOpener;
  onFrameRefused;
  onHeartbeatProbe;
  onOwnerPresent;
  onDeviceStatusPublished;
  onReconnected;
  onDiagnostic;
  headers;
  sessionId;
  refreshHeaders;
  getAuthHeaders;
  connectTimeoutMs;
  abortController=null;
  lastSequenceNum=0;
  seenSequenceNums=new Set;
  reconnectAttempts=0;
  hasEverConnected=!1;
  reconnectStartTime=null;
  reconnectTimer=null;
  connectErrorsSeen=new Set;
  livenessTimer=null;
  lastLivenessEvidenceAtMs=0;
  lastFrameReadAtMs=0;
  sseKeepaliveMaxIntervalSeconds;
  requireStreamEvidence;
  onUnexpectedContentType;
  advertisedMaxIntervalSeconds;
  echoedIntervalSeconds;
  nonOriginPolicy;
  nonOriginStreak=null;
  postUrl;
  serviceClockAtConnect;
  held=null;
  isHeldForRenewal=!1;
  statementRenewalGate;
  endedForRenewal=new WeakSet;
  constructor(e, n = {}, {sessionId: r, refreshHeaders: s, initialSequenceNum: h, getAuthHeaders: S, connectTimeoutMs: y, deferDelivery: k, sseKeepaliveMaxIntervalSeconds: R, requireStreamEvidence: I, onUnexpectedContentType: C, mostMembersInAFrame: w, lighterFrame: U, openStream: F} = {}) {
    this.url = e;
    if (this.headers = n, this.sessionId = r, this.refreshHeaders = s, this.getAuthHeaders = S ?? kU, 
    this.connectTimeoutMs = y ?? Jsr, this.postUrl = rs(e), this.sseKeepaliveMaxIntervalSeconds = R, 
    this.requireStreamEvidence = I ?? !1, this.onUnexpectedContentType = C, this.mostMembersInAFrame = w, 
    this.lighterFrame = U, this.streamOpener = F, h !== void 0 && h > 0) this.lastSequenceNum = h;
    if (k) this.held = {
      frames: [],
      close: null
    };
    t(`SSETransport: SSE URL = ${e.href}`), t(`SSETransport: POST URL = ${this.postUrl}`), 
    X("info", "cli_sse_transport_initialized");
  }
  serviceNow() {
    let e = this.serviceClockAtConnect;
    if (e === void 0) return;
    let n = performance.now() - e.monotonicMs;
    return Math.abs(Date.now() - e.wallMs - n) > qr ? void 0 : e.serviceMs + n;
  }
  getLastSequenceNum() {
    return this.lastSequenceNum;
  }
  connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") return t(`SSETransport: Cannot connect, current state is ${this.state}`, {
      level: "error"
    }), X("error", "cli_sse_connect_failed"), Promise.resolve();
    return this.state = "reconnecting", this.openStream(void 0);
  }
  async openStream(e) {
    let n = Date.now(), r = Jt(Math.floor(Number(this.sseKeepaliveMaxIntervalSeconds?.())));
    this.advertisedMaxIntervalSeconds = r > Ye ? r : void 0, this.echoedIntervalSeconds = void 0;
    let s = new URL(this.url.href);
    if (this.lastSequenceNum > 0) s.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    if (this.advertisedMaxIntervalSeconds !== void 0) s.searchParams.set(zr, String(Qt * this.advertisedMaxIntervalSeconds));
    let h = [ ...this.workerAttestationPolicySink === void 0 ? [] : [ Kt ], ...this.streamOpener === void 0 ? [] : [ Yt ] ];
    if (h.length > 0) s.searchParams.set(Vt, h.join(","));
    let S = this.getAuthHeaders(), y = {
      ...this.headers,
      ...S,
      Accept: "text/event-stream",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": Yg(),
      "User-Agent": Qo()
    };
    if (Ke(y, S), this.lastSequenceNum > 0) y["Last-Event-ID"] = String(this.lastSequenceNum);
    t(`SSETransport: Opening ${s.href}`), X("info", "cli_sse_connect_opening");
    let k = new AbortController;
    this.abortController = k;
    let R = !1, I = Math.min(typeof this.connectTimeoutMs === "function" ? this.connectTimeoutMs() : this.connectTimeoutMs, Pu), C = I > 0 ? setTimeout(() => {
      R = !0, k.abort();
    }, I) : void 0;
    try {
      let w = () => fetch(s.href, {
        headers: y,
        signal: k.signal,
        ...aa({
          url: s.href
        })
      }), U;
      try {
        U = await (this.streamOpener ? this.streamOpener({
          url: s.href,
          headers: y,
          signal: k.signal,
          openSse: w
        }) : w());
      } catch (B) {
        if (k.signal.aborted && !R) return;
        throw B;
      } finally {
        clearTimeout(C), e?.();
      }
      if (R) throw Error("the connect deadline fired as the response arrived");
      if (!U.ok) {
        let B = U.status === 403 ? nHt(fe => U.headers.get(fe)) : void 0;
        if (await TW(U, {
          timeoutMs: v4t
        }), k.signal.aborted) return;
        let W = (this.nonOriginPolicy?.now ?? Date.now)(), G = this.advanceNonOriginStreak(B, W), Z = G !== null && this.nonOriginPolicy !== void 0 && W - G.startedAtMs < this.nonOriginPolicy.windowMs, me = Vr.has(U.status) && !Z;
        if (t(`SSETransport: HTTP ${U.status}${me ? " (permanent)" : ""}${B ? ` source=${B}` : ""}${Z ? ` (not origin \u2014 retrying; attempt ${G?.attempts})` : ""}`, {
          level: "error"
        }), X("error", "cli_sse_connect_http_error", {
          status: U.status,
          ...B !== void 0 && {
            source: B
          },
          ...G !== null && {
            retried: Z
          }
        }), this.connectErrorsSeen.add(`http_${U.status}`), this.diagConnectFailure(`HTTP ${U.status}${me ? " (permanent)" : ""}`, n), 
        me) {
          this.nonOriginStreak = null, this.state = "closed", this.emitClose(U.status, B === void 0 ? void 0 : G === null ? {
            rejectSource: B
          } : {
            rejectSource: G.source,
            streak: {
              source: G.source,
              attempts: G.attempts,
              streakMs: W - G.startedAtMs
            }
          });
          return;
        }
        if (Z) try {
          this.nonOriginPolicy?.onRefused?.();
        } catch (fe) {
          t(`SSETransport: onRefused handler threw: ${l(fe)}`, {
            level: "error"
          });
        }
        this.handleConnectionError();
        return;
      }
      if (!U.body) {
        t("SSETransport: No response body"), this.connectErrorsSeen.add("no_response_body"), 
        this.diagConnectFailure("no response body", n), this.handleConnectionError();
        return;
      }
      if (this.requireStreamEvidence) {
        let B = zt(U.headers.get("content-type"));
        if (B !== "event-stream") {
          let W = U.headers.has(w4t) || U.headers.has(cCn);
          if (!W) {
            if (await TW(U, {
              timeoutMs: v4t
            }), k.signal.aborted) return;
          }
          let G = `HTTP ${U.status}, content_type=${B}, ${W ? "with" : "without"} a session service header`;
          if (t(`SSETransport: ${G}: ${W ? "taken as the stream" : "a failed connect"}`, {
            level: W ? "warn" : "error"
          }), X(W ? "warn" : "error", "cli_sse_connect_unexpected_content_type", {
            status: U.status,
            content_type: B,
            accepted: W
          }), this.onUnexpectedContentType?.({
            status: U.status,
            contentType: B,
            accepted: W
          }), !W) {
            this.connectErrorsSeen.add("no_stream_evidence"), this.diagConnectFailure(`${G}: a proxy or gateway may have answered in place of the server`, n), 
            this.handleConnectionError();
            return;
          }
        }
      }
      let F = Date.now() - n, H = Date.parse(U.headers.get("date") ?? "");
      if (!Number.isNaN(H)) this.serviceClockAtConnect = {
        serviceMs: H,
        wallMs: Date.now(),
        monotonicMs: performance.now()
      };
      if (this.advertisedMaxIntervalSeconds !== void 0) {
        let B = Number(U.headers.get(hJr));
        if (Number.isInteger(B) && B > 0) this.echoedIntervalSeconds = Jt(B);
      }
      let D = this.workerAttestationPolicySink === void 0 ? void 0 : Xt(U.headers.get(cCn));
      this.connectionPolicyReading = D;
      let O = U.headers.get(w4t), q = WZo(O), x = q === void 0 ? void 0 : {
        writers: q,
        statedAtMs: Date.now()
      };
      if (this.connectionSessionWriters = x, D !== void 0) {
        if (this.workerAttestationPolicySink?.(D), k.signal.aborted) return;
      }
      let j = this.advertisedMaxIntervalSeconds === void 0 ? "" : ` keepalive_interval=${this.keepaliveIntervalMs() / 1e3}s${this.echoedIntervalSeconds === void 0 ? " (no echo)" : ""}`;
      if (t("SSETransport: Connected" + j), X("info", "cli_sse_connect_connected", {
        duration_ms: F,
        ...this.keepaliveDiagnosticFields(),
        session_writers: q ?? (O === null ? "header_absent" : "header_unreadable"),
        ...D !== void 0 && {
          attestation_policy: D.policy === void 0 ? "none" : D.policy.enforce ? "enforce" : "observe",
          ...D.fault !== void 0 && {
            attestation_policy_fault: D.fault
          }
        }
      }), this.reconnectAttempts === 0) _r("sse_connect_ms", F, n - performance.timeOrigin);
      if (this.reconnectAttempts > 0) {
        let B = this.reconnectStartTime ? Math.round((Date.now() - this.reconnectStartTime) / 1e3) : 0;
        this.onDiagnostic?.(`SSE reconnected after ${this.reconnectAttempts} attempt(s), ${B}s downtime` + (this.connectErrorsSeen.size > 0 ? `, errors=[${[ ...this.connectErrorsSeen ].join(",")}]` : ""), "warn", "sse_recovered");
      } else this.onDiagnostic?.(`SSE connected in ${F}ms`, "info", "sse_connected");
      this.connectErrorsSeen.clear();
      let z = this.hasEverConnected;
      this.hasEverConnected = !0, this.state = "connected", this.reconnectAttempts = 0, 
      this.reconnectStartTime = null, this.resetLivenessTimer();
      let P = Kr.test(U.headers.get("content-type") ?? "");
      if (z) try {
        this.onReconnected?.();
      } catch (B) {
        t(`SSETransport: onReconnected handler threw: ${l(B)}`, {
          level: "error"
        }), X("error", "cli_sse_reconnected_handler_threw");
      }
      if (this.isHeldForRenewal) {
        if (this.deliverHeldForRenewal(x), k.signal.aborted) return;
      }
      await this.readStream(U.body, P, x);
    } catch (w) {
      if (R) {
        t(`SSETransport: No response within ${I}ms, reconnecting`, {
          level: "error"
        }), X("error", "cli_sse_connect_timeout", {
          timeout_ms: I
        }), this.connectErrorsSeen.add("connect_timeout"), this.diagConnectFailure(`no response in ${I / 1e3}s`, n), 
        this.handleConnectionError();
        return;
      }
      t(`SSETransport: Connection error: ${l(w)}`, {
        level: "error"
      }), X("error", "cli_sse_connect_error"), this.connectErrorsSeen.add("fetch_failed"), 
      this.diagConnectFailure(l(w), n), this.handleConnectionError();
    }
  }
  advanceNonOriginStreak(e, n) {
    let r = this.nonOriginPolicy;
    if (r === void 0 || e === void 0) return null;
    if (!pUe(e)) return this.nonOriginStreak = null, null;
    let s = this.nonOriginStreak;
    if (s === null || n - s.lastAtMs > r.maxGapMs) s = {
      source: e,
      startedAtMs: n,
      lastAtMs: n,
      attempts: 0
    }, this.nonOriginStreak = s;
    return s.attempts++, s.lastAtMs = n, s;
  }
  settleNonOriginStreakRecovered() {
    let e = this.nonOriginStreak;
    if (e === null) return;
    this.nonOriginStreak = null;
    let n = {
      source: e.source,
      attempts: e.attempts,
      streakMs: (this.nonOriginPolicy?.now ?? Date.now)() - e.startedAtMs
    };
    X("info", "cli_sse_nonorigin_403_recovered", {
      source: n.source,
      attempts: n.attempts,
      streak_ms: n.streakMs
    });
    try {
      this.nonOriginPolicy?.onRecovered?.(n);
    } catch (r) {
      t(`SSETransport: onRecovered handler threw: ${l(r)}`, {
        level: "error"
      });
    }
  }
  diagConnectFailure(e, n) {
    if (!this.onDiagnostic) return;
    let r = this.reconnectAttempts + 1;
    if (r > 3 && r % 10 !== 0) return;
    let s = Date.now() - n, h = this.reconnectStartTime ? `, ${Math.round((Date.now() - this.reconnectStartTime) / 1e3)}s reconnecting` : "", S = this.connectErrorsSeen.size > 1 ? `, errors=[${[ ...this.connectErrorsSeen ].join(",")}]` : "";
    this.onDiagnostic(`SSE connect failed (${e}) attempt=${r} took=${s}ms${h}${S}`, "warn", "sse_connect_failed");
  }
  async readStream(e, n, r) {
    let s = e.getReader(), h = new JVe, S = this.abortController, y = () => S !== null && this.endedForRenewal.has(S), k = n && a.CLAUDE_CODE_DIAGNOSTICS_FILE ? new Ve(h) : null;
    try {
      while (!0) {
        let {done: R, value: I} = await s.read();
        if (R) break;
        let C = h.push(I);
        k?.observe(I.byteLength, C);
        for (let w of C) {
          if (!y()) this.resetLivenessTimer(), this.lastFrameReadAtMs = this.lastLivenessEvidenceAtMs;
          if (this.nonOriginStreak !== null && n) this.settleNonOriginStreakRecovered();
          if (w.id && w.event !== "ephemeral_event") {
            let U = parseInt(w.id, 10);
            if (!isNaN(U)) {
              if (this.seenSequenceNums.has(U)) t(`SSETransport: DUPLICATE frame seq=${U} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`, {
                level: "warn"
              }), X("warn", "cli_sse_duplicate_sequence"); else if (this.seenSequenceNums.add(U), 
              this.seenSequenceNums.size > 1e3) {
                let F = this.lastSequenceNum - 200;
                for (let H of this.seenSequenceNums) if (H < F) this.seenSequenceNums.delete(H);
              }
              if (U > this.lastSequenceNum) this.lastSequenceNum = U;
            }
          }
          if (w.event && w.data) this.handleSSEFrame(w.event, w.data, r); else if (w.data) t("SSETransport: Frame has data: but no event: field \u2014 dropped", {
            level: "warn"
          }), X("warn", "cli_sse_frame_missing_event_field");
        }
      }
    } catch (R) {
      if (this.abortController?.signal.aborted || y()) return;
      t(`SSETransport: Stream read error: ${l(R)}`, {
        level: "error"
      }), X("error", "cli_sse_stream_read_error");
    } finally {
      k?.stop(), s.releaseLock();
    }
    if (this.state !== "closing" && this.state !== "closed" && !y()) {
      if (t("SSETransport: Stream ended, reconnecting"), this.state === "connected") this.connectErrorsSeen.add("stream_ended"), 
      this.onDiagnostic?.("SSE stream ended by server, reconnecting", "warn", "sse_stream_ended");
      this.handleConnectionError();
    }
  }
  handleSSEFrame(e, n, r, s = Date.now(), h = performance.now()) {
    if (this.mostMembersInAFrame !== void 0 && kue(n, this.mostMembersInAFrame) === void 0) {
      let k = this.lighterFrame?.(n);
      if (k !== void 0 && kue(k, this.mostMembersInAFrame) !== void 0) {
        this.handleSSEFrame(e, k, r, s, h);
        return;
      }
      this.onFrameRefused?.(ns.exec(Foe(n, ts)?.get("event_id") ?? "")?.[1]);
      return;
    }
    if (e === "ephemeral_event") {
      this.handleEphemeralFrame(n);
      return;
    }
    if (this.held !== null) {
      this.held.frames.push({
        eventType: e,
        data: n,
        policyReading: this.connectionPolicyReading,
        sessionWriters: r,
        receivedWallMs: s,
        receivedAtMs: h
      });
      return;
    }
    if (e !== "client_event") {
      t(`SSETransport: Unexpected SSE event type '${e}' on worker stream`, {
        level: "warn"
      }), X("warn", "cli_sse_unexpected_event_type", {
        event_type: e
      });
      return;
    }
    let S;
    try {
      S = Y(n);
    } catch (k) {
      t(`SSETransport: Failed to parse client_event data: ${l(k)}`, {
        level: "error"
      });
      return;
    }
    let y = S.payload;
    if (y && typeof y === "object" && "type" in y) {
      let k = this.sessionId ? ` session=${this.sessionId}` : "", R = S.device_attestation_status ? ` attestation=${S.device_attestation_status}` : "";
      if (t(`SSETransport: Event seq=${S.sequence_num} event_id=${S.event_id} event_type=${S.event_type} payload_type=${String(y.type)}${R}${k}`), 
      X("info", "cli_sse_message_received"), r !== void 0 && this.state === "connected" && this.statementRenewalGate?.(S, r) === !0) {
        this.held = {
          frames: [ {
            eventType: e,
            data: n,
            policyReading: this.connectionPolicyReading,
            sessionWriters: r,
            receivedWallMs: s,
            receivedAtMs: h
          } ],
          close: null
        }, this.isHeldForRenewal = !0, this.renewConnection();
        return;
      }
      if (r !== void 0) this.frameSessionWriters.set(S, r);
      let I = this.eventFilter?.(S);
      if (I) X("warn", "cli_sse_event_filtered", I === !0 ? void 0 : {
        decision: I
      }); else if (typeof y.type === "string" && yJr.has(y.type) && S.event_type !== y.type) X("warn", "cli_sse_server_only_event_type_mismatch", {
        event_type: S.event_type,
        payload_type: y.type
      }), this.onEventVetoed?.(S); else if (y.type === "control_request" && S.source === "worker") X("warn", "cli_sse_worker_control_request_dropped"); else {
        if (this.onDeliveredCallback?.(S, r, h), y.type === "user" && typeof y.uuid === "string") this.onUserFrameReceived?.(y.uuid, s, S.processing_at, h);
        this.onData?.(_(S.payload) + `\n`);
      }
    } else t(`SSETransport: Ignoring client_event with no type in payload: event_id=${S.event_id}`);
    this.onEventCallback?.(S);
  }
  emitClose(e, n) {
    if (this.held !== null) {
      if (this.held.close = {
        code: e,
        detail: n
      }, this.isHeldForRenewal) this.isHeldForRenewal = !1, this.startDelivery();
      return;
    }
    this.onCloseCallback?.(e, n);
  }
  renewConnection() {
    if (this.state !== "connected") return;
    if (t("SSETransport: Renewing the connection"), X("info", "cli_sse_renew_connection"), 
    this.refreshHeaders) {
      let e = this.refreshHeaders();
      Object.assign(this.headers, e), Ke(this.headers, e);
    }
    if (this.clearLivenessTimer(), this.abortController !== null) this.endedForRenewal.add(this.abortController), 
    this.abortController.abort(gJr), this.abortController = null;
    this.state = "reconnecting", this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, 0);
  }
  setStatementRenewalGate(e) {
    this.statementRenewalGate = e;
  }
  deliverHeldForRenewal(e) {
    this.isHeldForRenewal = !1;
    for (let n of this.held?.frames ?? []) n.sessionWriters = e;
    this.startDelivery();
  }
  startDelivery() {
    let e = this.held;
    if (e === null) return;
    this.held = null;
    let n;
    for (let r of e.frames) {
      if (r.policyReading !== void 0 && r.policyReading !== n) {
        if (n = r.policyReading, !this.handSinkPolicyReading(n)) return;
      }
      this.handleSSEFrame(r.eventType, r.data, r.sessionWriters, r.receivedWallMs, r.receivedAtMs);
    }
    if (this.connectionPolicyReading !== void 0 && this.connectionPolicyReading !== n && !this.handSinkPolicyReading(this.connectionPolicyReading)) return;
    if (e.close !== null) this.onCloseCallback?.(e.close.code, e.close.detail);
  }
  handSinkPolicyReading(e) {
    return this.workerAttestationPolicySink?.(e), this.state !== "closing";
  }
  handleEphemeralFrame(e) {
    let n;
    try {
      n = Y(e);
    } catch (s) {
      t(`SSETransport: Failed to parse ephemeral_event data: ${l(s)}`, {
        level: "error"
      });
      return;
    }
    let r = Jr().safeParse(n);
    if (r.success && r.data.event_type === es && this.onOwnerPresent !== void 0) {
      X("info", "cli_sse_owner_present_received");
      try {
        this.onOwnerPresent();
      } catch (s) {
        t(`SSETransport: onOwnerPresent handler threw: ${l(s)}`, {
          level: "error"
        });
      }
      return;
    }
    if (!r.success || r.data.event_type !== Zr) {
      X("warn", "cli_sse_unexpected_ephemeral_type", {
        event_type: r.success ? r.data.event_type : "unparseable"
      });
      return;
    }
    X("info", "cli_sse_heartbeat_probe_received");
    try {
      this.onHeartbeatProbe?.();
    } catch (s) {
      t(`SSETransport: onHeartbeatProbe handler threw: ${l(s)}`, {
        level: "error"
      }), X("error", "cli_sse_heartbeat_probe_handler_threw");
    }
  }
  handleConnectionError() {
    if (this.clearLivenessTimer(), this.state === "closing" || this.state === "closed") return;
    this.abortController?.abort(), this.abortController = null;
    let e = Date.now();
    if (!this.reconnectStartTime) this.reconnectStartTime = e;
    let n = e - this.reconnectStartTime;
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    if (this.refreshHeaders) {
      let s = this.refreshHeaders();
      Object.assign(this.headers, s), Ke(this.headers, s), t("SSETransport: Refreshed headers for reconnect");
    }
    this.state = "reconnecting", this.reconnectAttempts++;
    let r = nb({
      attempt: this.reconnectAttempts,
      baseMs: Nr,
      capMs: Wr,
      jitter: {
        kind: "symmetric",
        ratio: .25
      }
    });
    t(`SSETransport: Reconnecting in ${Math.round(r)}ms (attempt ${this.reconnectAttempts}, ${Math.round(n / 1e3)}s elapsed)`), 
    X("error", "cli_sse_reconnect_attempt", {
      reconnectAttempts: this.reconnectAttempts
    }), this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, r);
  }
  onLivenessTimeout=() => {
    this.livenessTimer = null, t("SSETransport: Liveness timeout, reconnecting", {
      level: "error"
    }), X("error", "cli_sse_liveness_timeout", this.keepaliveDiagnosticFields()), this.connectErrorsSeen.add("liveness_timeout"), 
    this.onDiagnostic?.(`SSE liveness timeout \u2014 no frame in ${this.livenessTimeoutMs() / 1e3}s, reconnecting`, "warn", "sse_liveness_timeout"), 
    this.abortController?.abort(mJr), this.handleConnectionError();
  };
  resetLivenessTimer() {
    this.lastLivenessEvidenceAtMs = Date.now(), this.clearLivenessTimer(), this.livenessTimer = setTimeout(this.onLivenessTimeout, this.livenessTimeoutMs());
  }
  keepaliveIntervalMs() {
    return (this.echoedIntervalSeconds ?? this.advertisedMaxIntervalSeconds ?? Ye) * 1e3;
  }
  livenessTimeoutMs() {
    return this.keepaliveIntervalMs() + jr;
  }
  keepaliveDiagnosticFields() {
    return this.advertisedMaxIntervalSeconds === void 0 ? {} : {
      keepalive_tolerance_s: Qt * this.advertisedMaxIntervalSeconds,
      keepalive_interval_s: this.keepaliveIntervalMs() / 1e3,
      liveness_timeout_s: this.livenessTimeoutMs() / 1e3,
      keepalive_interval_echoed: this.echoedIntervalSeconds !== void 0
    };
  }
  clearLivenessTimer() {
    if (this.livenessTimer) clearTimeout(this.livenessTimer), this.livenessTimer = null;
  }
  async write(e) {
    let n = this.getAuthHeaders();
    if (Object.keys(n).length === 0) {
      t("SSETransport: No session token available for POST"), X("warn", "cli_sse_post_no_token");
      return;
    }
    let r = {
      ...n,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-client-platform": Yg(),
      "User-Agent": Qo()
    };
    t(`SSETransport: POST body keys=${Object.keys(e).join(",")}`);
    for (let s = 1; s <= ie; s++) {
      try {
        let h = await At.post(this.postUrl, e, {
          headers: r,
          validateStatus: Qr
        });
        if (h.status === 200 || h.status === 201) {
          t(`SSETransport: POST success type=${e.type}`);
          return;
        }
        if (t(`SSETransport: POST ${h.status} body=${_(h.data).slice(0, 200)}`), h.status >= 400 && h.status < 500 && h.status !== 429) {
          t(`SSETransport: POST returned ${h.status} (client error), not retrying`), X("warn", "cli_sse_post_client_error", {
            status: h.status
          });
          return;
        }
        t(`SSETransport: POST returned ${h.status}, attempt ${s}/${ie}`), X("warn", "cli_sse_post_retryable_error", {
          status: h.status,
          attempt: s
        });
      } catch (h) {
        t(`SSETransport: POST error: ${l(h)}, attempt ${s}/${ie}`), X("warn", "cli_sse_post_network_error", {
          attempt: s
        });
      }
      if (s === ie) {
        t(`SSETransport: POST failed after ${ie} attempts, continuing`), X("warn", "cli_sse_post_retries_exhausted");
        return;
      }
      await J(nb({
        attempt: s,
        baseMs: Yr,
        capMs: Xr
      }));
    }
  }
  isConnectedStatus() {
    return this.state === "connected";
  }
  isReadStreamRecentlyAlive() {
    return this.state === "connected" && Date.now() - this.lastLivenessEvidenceAtMs < this.getReadStreamRecentLivenessWindowMs();
  }
  lastFrameReadAt() {
    return this.lastFrameReadAtMs === 0 ? void 0 : this.lastFrameReadAtMs;
  }
  getReadStreamRecentLivenessWindowMs() {
    return this.keepaliveIntervalMs() + Gr;
  }
  isClosedStatus() {
    return this.state === "closed";
  }
  setOnData(e) {
    this.onData = e;
  }
  setOnUserFrameReceived(e) {
    this.onUserFrameReceived = e;
  }
  setOnClose(e) {
    this.onCloseCallback = e;
  }
  setNonOriginRejectionPolicy(e) {
    this.nonOriginPolicy = e;
  }
  setOnEvent(e) {
    this.onEventCallback = e;
  }
  setOnDelivered(e) {
    this.onDeliveredCallback = e;
  }
  getSessionWriters() {
    return this.connectionSessionWriters?.writers;
  }
  getSessionWritersStatement() {
    return this.connectionSessionWriters;
  }
  sessionWritersOf(e) {
    return this.frameSessionWriters.get(e);
  }
  setOnDiagnostic(e) {
    this.onDiagnostic = e;
  }
  setEventFilter(e) {
    this.eventFilter = e;
  }
  setWorkerAttestationPolicySink(e) {
    this.workerAttestationPolicySink = e;
  }
  requiresStreamEvidence() {
    return this.requireStreamEvidence;
  }
  setOnFrameRefused(e) {
    this.onFrameRefused = e;
  }
  setOnEventVetoed(e) {
    this.onEventVetoed = e;
  }
  setOnHeartbeatProbe(e) {
    this.onHeartbeatProbe = e;
  }
  setOnOwnerPresent(e) {
    this.onOwnerPresent = e;
  }
  setOnDeviceStatusPublished(e) {
    this.onDeviceStatusPublished = e;
  }
  setOnReconnected(e) {
    this.onReconnected = e;
  }
  close() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.clearLivenessTimer(), this.state = "closing", this.nonOriginStreak = null, 
    this.held = null, this.isHeldForRenewal = !1, this.abortController?.abort(), this.abortController = null;
  }
  [Symbol.dispose]() {
    this.close();
  }
}

function Ke(e, n) {
  if (n.Cookie) delete e.Authorization;
  if (n.Authorization) delete e.Cookie, delete e["X-Organization-Uuid"];
}

function Jt(e) {
  return Math.min(Math.max(e, Ye), $r);
}

function rs(e) {
  let n = e.pathname;
  if (n.endsWith("/stream")) n = n.slice(0, -7);
  return `${e.protocol}//${e.host}${n}`;
}

var _Jr = 18e4, ss = 9e4;

async function bJr(e) {
  let {sessionUrl: n, ingressToken: r, sessionId: s, initialSequenceNum: h, getAuthToken: S} = e, y = () => e.inboundReadReceipts?.() === !0, k;
  if (S) k = () => Ive(S()); else DVn(r);
  let R = e.epoch ?? await Unt(n, r);
  t(`[bridge:repl] CCR v2: worker sessionId=${s} epoch=${R}${e.epoch !== void 0 ? " (from /bridge)" : " (via registerWorker)"}`);
  let I = new URL(n);
  I.pathname = I.pathname.replace(/\/$/, "") + "/worker/events/stream";
  let C = new uCn(I, {}, {
    sessionId: s,
    initialSequenceNum: h,
    getAuthHeaders: k,
    connectTimeoutMs: e.sseConnectTimeoutMs,
    sseKeepaliveMaxIntervalSeconds: e.sseKeepaliveMaxIntervalSeconds
  }), w = !e.outboundOnly, U = (e.selfHealHeartbeats ?? !1) && w, F = (e.nonOrigin403Retry ?? !1) && w, H = F && U;
  if (F) C.setNonOriginRejectionPolicy({
    windowMs: _Jr,
    maxGapMs: ss,
    onRecovered: e.onNonOriginRejectionRecovered
  });
  let D, O = !1;
  function q(P, B, W) {
    if (O) return;
    O = !0;
    try {
      x.close({
        goodbye: !1,
        retainUndeliveredClientEvents: e.retainUndeliveredOnClose === !0
      }), C.close();
    } catch (G) {
      d(G);
    }
    try {
      D?.(P, B, W);
    } catch (G) {
      d(G);
    }
  }
  let x = new QL(C, new URL(n), {
    getAuthHeaders: k,
    heartbeatIntervalMs: e.heartbeatIntervalMs,
    heartbeatJitterFraction: e.heartbeatJitterFraction,
    advertiseHeartbeatProbeSupport: (e.advertiseHeartbeatProbeSupport ?? !1) && w,
    uploadTrim: e.uploadTrim,
    uploadHoldMarker: e.uploadHoldMarker,
    eventHoldEnabled: e.eventHoldEnabled,
    ...e.processExiting && {
      processExiting: e.processExiting
    },
    beatOnStaleReconnect: (e.beatOnStaleReconnect ?? !1) && w,
    idleTracker: e.idleTracker,
    beatOnReactivation: (e.beatOnReactivation ?? !1) && w,
    skipRedundantHeartbeats: e.skipRedundantHeartbeats,
    streamEventFlushIntervalMs: e.streamEventFlushIntervalMs,
    streamEventFirstFlushMs: e.streamEventFirstFlushMs,
    streamEventFlushOnFirstDelta: e.streamEventFlushOnFirstDelta,
    gzipRequestBodyFetch: e.gzipRequestBodyFetch,
    noSubscriberStreamEventFlushIntervalMs: e.noSubscriberStreamEventFlushIntervalMs,
    noSubscriberUploadHoldMs: e.noSubscriberUploadHoldMs,
    dropUnwatchedStreamEvents: e.dropUnwatchedStreamEvents,
    nonOrigin403Transient: H,
    internalEventUploader: e.internalEventUploader,
    onEpochMismatch: P => {
      let B = e.causeTypedCloseCodes ? Ysr[P] : 4090;
      throw t(`[bridge:repl] CCR v2: terminal request-path condition (${P}) \u2014 closing with ${B} for ${B === 4094 ? "auth recovery" : "poll-loop recovery"}`), 
      q(B, P), Error("terminal request-path condition");
    },
    onRequestAuthOk: e.onRequestAuthOk,
    ...U && {
      onHeartbeatLost: () => {
        if (O) return;
        t("[bridge:repl] CCR v2: heartbeats failing while SSE healthy \u2014 closing for transport rebuild", {
          level: "warn"
        }), q(4093);
      }
    }
  });
  C.setOnEvent(P => {
    if (e.processExiting?.() && Ge(P)) return;
    if (x.reportDelivery(P.event_id, "received"), !(y() && bSs(P.event_id))) x.reportDelivery(P.event_id, "processed");
  }), C.setEventFilter(P => {
    if (Hjn(P)) return !0;
    return y() ? SSs(P) : !1;
  });
  let j, z = !1;
  return {
    write(P) {
      return x.writeEvent(P);
    },
    writeBatch(P) {
      return x.writeEvents(P);
    },
    close(P) {
      if (O = !0, x.close({
        goodbye: P?.goodbye,
        retainUndeliveredClientEvents: P?.retainUndelivered
      }), !P?.retainUndelivered) x.discardUndeliveredClientEvents();
      C.close();
    },
    takeUndeliveredEvents() {
      return x.takeUndeliveredClientEvents();
    },
    discardUndeliveredEvents() {
      return x.discardUndeliveredClientEvents();
    },
    adoptUndeliveredEvents(P) {
      x.adoptClientEvents(P);
    },
    flushGoodbye() {
      return x.flushGoodbye();
    },
    isConnectedStatus() {
      return z;
    },
    getStateLabel() {
      if (C.isClosedStatus()) return "closed";
      if (C.isConnectedStatus()) return z ? "connected" : "init";
      return "connecting";
    },
    setOnData(P) {
      C.setOnData(P);
    },
    setOnClose(P) {
      D = P, C.setOnClose((B, W) => {
        q(B ?? 4092, void 0, W);
      });
    },
    setOnConnect(P) {
      j = P;
    },
    getLastSequenceNum() {
      return C.getLastSequenceNum();
    },
    getEpoch() {
      return R;
    },
    reportState(P, B) {
      x.reportState(P, B);
    },
    reportMetadata(P) {
      x.reportMetadata(P);
    },
    reportInternalMetadata(P) {
      x.reportInternalMetadata(P);
    },
    droppedDurableBatchCount() {
      return x.droppedDurableBatches;
    },
    flushWorkerState() {
      return x.flushWorkerState();
    },
    droppedWorkerStatePatchCount() {
      return x.droppedWorkerStatePatches;
    },
    reportDelivery(P, B) {
      x.reportDelivery(P, B);
    },
    setStreamEventFlushIntervalMs(P) {
      x.setStreamEventFlushIntervalMs(P);
    },
    setStreamEventFirstFlushMs(P) {
      x.setStreamEventFirstFlushMs(P);
    },
    setStreamEventFlushOnFirstDelta(P) {
      x.setStreamEventFlushOnFirstDelta(P);
    },
    setNoSubscriberStreamEventFlushIntervalMs(P) {
      x.setNoSubscriberStreamEventFlushIntervalMs(P);
    },
    setNoSubscriberUploadHoldMs(P) {
      x.setNoSubscriberUploadHoldMs(P);
    },
    setDropUnwatchedStreamEvents(P) {
      x.setDropUnwatchedStreamEvents(P);
    },
    setSubscribersReportedListener(P) {
      x.setSubscribersReportedListener(P);
    },
    mayHoldUploads() {
      return x.mayHoldUploads();
    },
    flush(P) {
      return x.flush(P);
    },
    flushDeliveryAcks(P) {
      return x.flushDeliveryAcks(P);
    },
    flushInternalEvents(P) {
      return x.flushInternalEvents(P);
    },
    getUploadBacklog() {
      return x.uploadBacklog();
    },
    getInternalEventBacklog() {
      return {
        pending: x.internalEventsPending,
        droppedBatches: x.droppedInternalBatches
      };
    },
    trackFirstFrameUpload(P) {
      return x.trackFirstFrameUpload(P);
    },
    getInternalEventWriter() {
      return (P, B, W) => x.writeInternalEvent(P, B, W);
    },
    getInternalEventReaders() {
      return {
        readMain: P => P ? x.readInternalEventsForCatchUp(P) : x.readInternalEvents(),
        readSubagents: () => x.readSubagentInternalEvents(),
        readSubagent: (P, B) => x.readAgentInternalEvents(P, B)
      };
    },
    getInternalEventsPort() {
      return {
        epoch: () => x.getWorkerEpoch(),
        postBatch: (P, B) => x.postInternalEventsBatch(P, B),
        listPage: (P, B) => x.getInternalEventsPage(P, B)
      };
    },
    connect() {
      x.initialize(R).then(P => {
        if (O) return;
        if (z = !0, t(`[bridge:repl] v2 transport ready for writes (epoch=${R}); opening the read stream`), 
        j?.(P), !e.outboundOnly && !O) C.connect();
      }, P => {
        t(`[bridge:repl] CCR v2 initialize failed: ${l(P)}`, {
          level: "error"
        }), q(4091);
      });
    }
  };
}

export { rkt, okt, d0e, UZo, Ysr, pJr, Xsr, QL, fJr, dCn, Jsr, cCn, mJr, gJr, hJr, yJr, uCn, _Jr, bJr };
