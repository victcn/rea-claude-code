// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt, B, Oc } from "./chunk-3pqddg8f.js";

import { E } from "./chunk-b0z4bv3v.js";

import { _Xe } from "./chunk-9yajep3y.js";

import { oc } from "./chunk-zx69jgxc.js";

import { Mg } from "./chunk-j7qcpyv8.js";

async function BS(e, t, {concurrency: n = Number.POSITIVE_INFINITY, stopOnError: r = !0, signal: o} = {}) {
  return new Promise((i, s) => {
    if (e[Symbol.iterator] === void 0 && e[Symbol.asyncIterator] === void 0) throw TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`);
    if (typeof t !== "function") throw TypeError("Mapper function is required");
    if (!(Number.isSafeInteger(n) && n >= 1 || n === Number.POSITIVE_INFINITY)) throw TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${n}\` (${typeof n})`);
    let a = [], c = [], d = new Map, u = !1, S = !1, y = !1, R = 0, f = 0, b = e[Symbol.iterator] === void 0 ? e[Symbol.asyncIterator]() : e[Symbol.iterator](), h = () => {
      l(o.reason);
    }, p = () => {
      o?.removeEventListener("abort", h);
    }, k = m => {
      i(m), p();
    }, l = m => {
      u = !0, S = !0, s(m), p();
    };
    if (o) {
      if (o.aborted) l(o.reason);
      o.addEventListener("abort", h, {
        once: !0
      });
    }
    let C = async () => {
      if (S) return;
      let m = await b.next(), _ = f;
      if (f++, m.done) {
        if (y = !0, R === 0 && !S) {
          if (!r && c.length > 0) {
            l(AggregateError(c));
            return;
          }
          if (S = !0, d.size === 0) {
            k(a);
            return;
          }
          let g = [];
          for (let [w, W] of a.entries()) {
            if (d.get(w) === x) continue;
            g.push(W);
          }
          k(g);
        }
        return;
      }
      R++, (async () => {
        try {
          let g = await m.value;
          if (S) return;
          let w = await t(g, _);
          if (w === x) d.set(_, w);
          a[_] = w, R--, await C();
        } catch (g) {
          if (r) l(g); else {
            c.push(g), R--;
            try {
              await C();
            } catch (w) {
              l(w);
            }
          }
        }
      })();
    };
    (async () => {
      for (let m = 0; m < n; m++) {
        try {
          await C();
        } catch (_) {
          l(_);
          break;
        }
        if (y || u) break;
      }
    })();
  });
}

var x = Symbol("skip");

import { promisify as M } from "util";

import { constants as q, deflateRaw as K, deflateRawSync as j, inflateRaw as H, inflateRawSync as V } from "zlib";

var I = 131072, Y = 32768, Z = 4 * I, X = 32, Q = 2, J = _Xe, P = 21e4, ee = 256, T = {
  messages: '"messages":[',
  system: '],"system":',
  endOfSystemBlock: '"},{'
}, te = 1024;

function N(e = J) {
  return {
    blocks: new Map,
    storedBytes: 0,
    maxStoredBytes: e,
    evictedForSpaceCount: 0,
    generation: 0,
    cancelIdleDrop: void 0,
    pooledCompression: Promise.resolve()
  };
}

function ict(e) {
  e.cancelIdleDrop?.(), e.cancelIdleDrop = void 0, e.blocks.clear(), e.storedBytes = 0, 
  e.generation++;
}

function Kyo({body: e, level: t, store: n, clock: r}) {
  let o = ne(e), i = re(e, o, t), s = r.monotonicNow(), a = 0, c = 0, d = o.map((u, S) => {
    let y = z(n, i[S], s);
    if (y !== void 0) a++, c += u.end - u.start;
    return y;
  });
  if (n.blocks.size > 0) G(n, r);
  return {
    body: e,
    level: t,
    blocks: o,
    keys: i,
    reused: d,
    reusedBlockCount: a,
    reusedBytes: c,
    generation: n.generation
  };
}

function Bks({keys: e, reused: t}) {
  return e.some((n, r) => n !== void 0 && t[r] === void 0);
}

async function jks(e, t, n, r) {
  let o = await Yyo(e, t, n, r), i = Buffer.from([ 31, 139, 8, 0, 0, 0, 0, 0, 0, 255 ]), s = Buffer.alloc(10);
  return s[0] = 3, s.writeUInt32LE(Bun.hash.crc32(e.body), 2), s.writeUInt32LE(e.body.length % 4294967296, 6), 
  Buffer.concat([ i, ...o, s ]);
}

class act extends Error {
  fault;
  constructor(e, t) {
    super("Request body gzip: a newly compressed block failed its check", t);
    this.fault = e;
  }
}

function qyo(e) {
  let t = E(e);
  return t === "Z_DATA_ERROR" || t === "Z_BUF_ERROR" ? t : void 0;
}

async function Yyo(e, t, n, {signal: r, stopIf: o, inBackground: i = !1} = {}) {
  let {body: s, level: a, blocks: c, keys: d, reused: u, generation: S} = e, y;
  if (!i && s.length - e.reusedBytes <= Z) y = c.map((f, b) => {
    let h = u[b];
    if (h !== void 0) return h;
    let p = s.subarray(f.start, f.end), k = A(s, f, a), l = j(p, k);
    try {
      v(p, l, V(l, k));
    } catch (C) {
      throw O(C);
    }
    return l;
  }); else {
    let b = (i ? Promise.resolve() : t.pooledCompression).then(() => {
      r?.throwIfAborted();
      let h = n.monotonicNow();
      return BS(c, async (p, k) => {
        if (o?.()) throw Error("Request body gzip: compression stopped");
        if (u[k] !== void 0) return u[k];
        let l = t.generation === S ? z(t, d[k], h) : void 0;
        if (l !== void 0) return e.reusedBlockCount++, e.reusedBytes += p.end - p.start, 
        l;
        let C = s.subarray(p.start, p.end), m = A(s, p, a), _ = await oe(C, m);
        try {
          v(C, _, await se(_, m));
        } catch (g) {
          throw O(g);
        }
        return _;
      }, {
        concurrency: i ? Q : X,
        signal: r
      });
    });
    if (!i) t.pooledCompression = b.then(() => {}, () => {});
    y = await b;
  }
  if (t.generation !== S) return y;
  let R = n.monotonicNow();
  return y.forEach((f, b) => {
    let h = d[b];
    if (h !== void 0 && !t.blocks.has(h)) {
      let p = f.buffer.byteLength === f.length;
      ae(t, h, p ? f : Buffer.copyBytesFrom(f), R);
    }
  }), de(t, R), G(t, n), y;
}

function ne(e) {
  let t = e.lastIndexOf(T.system), n = t === -1 ? -1 : e.indexOf(T.endOfSystemBlock, t), r = [ e.indexOf(T.messages), t, n !== -1 && n - t <= te ? n + 2 : -1, e.length ], o = [], i = 0;
  for (let s of r) {
    if (s <= i) continue;
    for (let a = i; a < s; a += I) o.push({
      start: a,
      end: Math.min(a + I, s),
      dictionaryStart: Math.max(a - Y, i)
    });
    i = s;
  }
  return o;
}

function re(e, t, n) {
  let r = t.map(o => o.end - o.start === I ? Bun.SHA256.hash(e.subarray(o.start, o.end), "base64") : void 0);
  return t.map((o, i) => {
    let s = r[i], a = o.dictionaryStart < o.start ? r[i - 1] : "none";
    return s === void 0 || a === void 0 ? void 0 : `${n}:${a}:${s}`;
  });
}

function oe(e, t) {
  return M(K)(e, t);
}

function se(e, t) {
  return M(H)(e, t);
}

function A(e, t, n) {
  return {
    level: n,
    finishFlush: q.Z_SYNC_FLUSH,
    chunkSize: I,
    ...t.dictionaryStart < t.start && {
      dictionary: e.subarray(t.dictionaryStart, t.start)
    }
  };
}

function O(e) {
  let t = qyo(e);
  return t === void 0 ? e : new act(t, {
    cause: e
  });
}

var ie = 65535;

function v(e, t, n) {
  if (!n.equals(e)) throw new act("inflates_to_other_bytes");
  if (t.length < 4 || t.readUInt32BE(t.length - 4) !== ie) throw new act("no_flush_marker");
}

function z(e, t, n) {
  let r = t === void 0 ? void 0 : e.blocks.get(t);
  if (t === void 0 || r === void 0) return;
  return e.blocks.delete(t), e.blocks.set(t, {
    compressed: r.compressed,
    lastUsedAt: n
  }), r.compressed;
}

function ae(e, t, n, r) {
  let o = {
    compressed: n,
    lastUsedAt: r
  };
  e.blocks.set(t, o), e.storedBytes += D(o);
}

function de(e, t) {
  for (let [n, r] of e.blocks) {
    let o = e.storedBytes > e.maxStoredBytes;
    if (!o && t - r.lastUsedAt < P) return;
    if (e.blocks.delete(n), e.storedBytes -= D(r), o) e.evictedForSpaceCount++;
  }
}

function G(e, t) {
  let n = new WeakRef(e);
  e.cancelIdleDrop?.(), e.cancelIdleDrop = t.setTimeout(() => {
    let r = n.deref();
    if (r !== void 0) ict(r);
  }, P, {
    unref: !0
  });
}

function D(e) {
  return ee + e.compressed.length;
}

function L() {
  return new WeakMap;
}

function Wks(e, t, n) {
  let r = e.get(t);
  if (r?.fired) return {
    kind: "already_fired"
  };
  let o = n?.input_tokens ?? 0, i = n?.cache_read_input_tokens ?? 0, s = n?.cache_creation_input_tokens ?? 0, a = (n?.cache_creation?.ephemeral_5m_input_tokens ?? 0) + (n?.cache_creation?.ephemeral_1h_input_tokens ?? 0), c = s > 0 ? s : a;
  if (o + i + c <= 0) return {
    kind: "no_usage"
  };
  if (o < 2e4 || c >= .1 * o) {
    let u = r ?? {
      consecutive: 0,
      fired: !1,
      okEmitted: !1
    };
    if (!r) e.set(t, u);
    if (u.consecutive = 0, !u.okEmitted && i + c > 0) return u.okEmitted = !0, {
      kind: "confirm"
    };
    return {
      kind: "healthy"
    };
  }
  let d = r ?? {
    consecutive: 0,
    fired: !1,
    okEmitted: !1
  };
  if (!r) e.set(t, d);
  if (d.consecutive++, d.consecutive >= 3) return d.fired = !0, {
    kind: "fire",
    consecutive: d.consecutive,
    inputTokens: o,
    cacheReadTokens: i,
    cacheCreationTokens: c
  };
  return {
    kind: "counted",
    consecutive: d.consecutive
  };
}

var C6e = "root";

function C0(e) {
  return e ?? "root";
}

var U = 256;

class F {
  promptCacheBreak={
    previousStateBySource: new Map,
    hydrationAttempted: !1,
    pendingPersist: Promise.resolve(),
    latestQueuedPersist: null,
    hashSalt: null,
    summaryForks: new Map,
    parkedAgentBaselines: new Map,
    parkedBy: null,
    classifierLines: new Map,
    classifierCompactions: new Map
  };
  threadDecisionTracker=void 0;
  threadInheritedFields={
    storedToolsHashByThread: new Map,
    breakerTripped: !1
  };
  threadDropRecreate=new Map;
  threadRequestEnds=new Map;
  rootLatestRequestThreaded=!1;
  dumpPrompts={
    recentRequests: [],
    stateByAgent: new Map,
    retiredInitHashes: new oc({
      max: 1e3
    }),
    appendQueue: Mg()
  };
  requestReplay={
    chains: new Map,
    unrecordableShapes: new Set
  };
  lastIngressUuidBySession=new Map;
  cacheCoverage=L();
  gzipRequestBody={
    latchedOff: !1,
    rejectedThisProcess: !1,
    persistedLatchChecked: !1,
    persistedLatchInEffect: !1,
    telemetryByClientRequestId: new oc({
      max: U
    }),
    dispatchAtByClientRequestId: new oc({
      max: U
    }),
    ccrWorkerSkipReasonsLogged: new Set,
    blockStore: N(),
    blocksSwitchedOff: !1,
    blocksBuildGeneration: void 0,
    blockGzippedResponses: new WeakSet
  };
  sentPrefix={
    ledger: void 0,
    mode: void 0,
    persist: Promise.resolve(),
    persisted: void 0,
    pendingSeed: void 0,
    lastReport: new WeakMap,
    lastVerdict: new WeakMap,
    renderEpochs: new WeakMap,
    memoryEpochs: new WeakMap,
    pictureEpochs: new WeakMap,
    announced: new WeakMap,
    excuse: new WeakMap,
    staged: new WeakMap,
    boundVerdict: new WeakMap
  };
  bindingDrops={
    seenBlocks: void 0,
    threadsRead: new oc({
      max: 512
    })
  };
  foreignThinkingKeep=void 0;
  streamFirstByteArmedRequestIds=new oc({
    max: 64
  });
  skillHealthMap=void 0;
  headerMemberDropsNoted=new Set;
  firedOnceKeys=new Set;
  hasFired(e) {
    return this.firedOnceKeys.has(e);
  }
  markFired(e) {
    this.firedOnceKeys.add(e);
  }
  once(e) {
    if (this.firedOnceKeys.has(e)) return !1;
    return this.firedOnceKeys.add(e), !0;
  }
  resetStreamNoEventsWarningLatch() {
    this.firedOnceKeys.delete("stream_no_events_fallback_warning");
  }
}

var ce = new lt(() => new F);

function Ps() {
  return ce.of(B());
}

var Xyo = new Set([ "clear", "resume", "spare_claim", "remote_attach" ]);

function zks() {
  return Oc((e, t) => {
    if (t === "cd" || t === "hydrate") return;
    let n = Ps();
    if (n.resetStreamNoEventsWarningLatch(), Xyo.has(t)) {
      n.threadDropRecreate.delete(C6e), n.threadRequestEnds.delete(C6e), n.rootLatestRequestThreaded = !1;
      let r = n.gzipRequestBody;
      if (ict(r.blockStore), r.blocksSwitchedOff === "until_next_conversation") r.blocksSwitchedOff = !1;
    }
  });
}

export { BS, ict, Kyo, Bks, jks, act, qyo, Yyo, Wks, C6e, C0, Ps, Xyo, zks };
