// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { $Gn, FRr, WRr, TBe, zRr, jGn, k, nG } from "./chunk-xywp7esx.js";

import { z } from "./chunk-bmq0vae0.js";

import { x, E, W } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { a, bT } from "./chunk-j016gcgm.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { I, $s, ne } from "./chunk-5wbhf1bk.js";

import { f } from "./chunk-3ykz5st8.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { p } from "./chunk-jkzenvsk.js";

import { Xf, Ave, Cve, Ev, gh, Ul, Q8e } from "./chunk-znhtg8e4.js";

import { dA } from "./chunk-1tdw23h1.js";

import { Xa, Tft, tI, wIe, UK, asn, uDs, W2n, Rft, Yh, V0, vve, Cie, Eve } from "./chunk-3kb22va7.js";

import { N2n, $2n, NK, lA, ZHs, lCo, eDs, z8e } from "./chunk-n3526wzr.js";

import { na } from "./chunk-nfw0a30b.js";

import { x5e } from "./chunk-0wtk0t56.js";

import { _Se } from "./chunk-81n5jbaw.js";

import { CY } from "./chunk-jd0jznz2.js";

import { Oft, wDs, mLt, fsn, vDs, Aa } from "./chunk-sre9xcbd.js";

import { sn } from "./chunk-642shbw5.js";

import { v, u } from "./chunk-cvcg6n1z.js";

import { O } from "./chunk-1xnsr4dy.js";

import { D, Zi } from "./chunk-hmqkrrtz.js";

function N(e, n, r, i, d) {
  let m = Math.max(0, r - n) / 1e3;
  return Math.min(i, e + m * d);
}

function M(e) {
  return e >= 1;
}

function U(e, n, r, i, d = () => !0) {
  let m = e.get(n);
  if (m !== void 0) return e.delete(n), e.set(n, m), m;
  while (e.size >= Math.max(1, r)) {
    let l;
    for (let [s, o] of e) if (d(o)) {
      l = s;
      break;
    }
    if (l ??= e.keys().next().value, l === void 0) break;
    e.delete(l);
  }
  let g = i();
  return e.set(n, g), g;
}

var d$n = {
  bucketCapacity: 30,
  refillPerSecond: .5,
  dedupWindowMs: 3e4,
  maxSelfHops: 10,
  maxChainLength: 28,
  maxTrackedSenders: 256
};

function he(e, n) {
  if (!e || n.size === 0) return 0;
  let r = 0;
  for (let i of e) if (n.has(i)) r++;
  return r;
}

function dfo(e = {}, n) {
  let r = {
    ...d$n,
    now: () => Date.now(),
    ...e
  }, i = () => n ? {
    ...r,
    ...n()
  } : r, d = new Map;
  function m(s, o) {
    return U(d, s, o.maxTrackedSenders, () => ({
      tokens: o.bucketCapacity,
      lastRefill: o.now(),
      lastBody: void 0,
      lastBodyAt: 0
    }));
  }
  function g(s, o) {
    let c = i();
    if (s !== void 0 && s.length > c.maxChainLength) return {
      admitted: !1,
      reason: "hop-runaway"
    };
    if (he(s, o) >= c.maxSelfHops) return {
      admitted: !1,
      reason: "hop-loop"
    };
    return;
  }
  function l(s) {
    let o = i(), c = o.now(), R = g(s.hopChain, s.ownTokens);
    if (R) return R;
    let w = m(s.senderKey, o);
    if (w.lastBody !== void 0 && w.lastBody === s.body && c - w.lastBodyAt < o.dedupWindowMs) return {
      admitted: !1,
      reason: "duplicate"
    };
    if (w.tokens = N(w.tokens, w.lastRefill, c, o.bucketCapacity, o.refillPerSecond), 
    w.lastRefill = c, !M(w.tokens)) return {
      admitted: !1,
      reason: "rate-limited"
    };
    return w.tokens -= 1, w.lastBody = s.body, w.lastBodyAt = c, {
      admitted: !0
    };
  }
  return {
    admit: l,
    checkHopChain: g,
    trackedSenderCount: () => d.size
  };
}

var Re = {
  "rate-limited": !0,
  duplicate: !0,
  "hop-loop": !0,
  "hop-runaway": !0,
  "queue-full": !0
};

function ke(e) {
  return typeof e === "string" && Object.hasOwn(Re, e);
}

function Zbs(e) {
  return ke(e) ? e : void 0;
}

var cfo = 256, B = 6e4, re = 256, Ie = 20;

function ufo(e) {
  na().ingress.ownUdsHopToken = e === void 0 ? void 0 : x5e(e);
}

function UQt(e) {
  na().ingress.ownBridgePeerAddressResolver = e;
}

function pfo() {
  let {ownUdsHopToken: e, ownBridgePeerAddressResolver: n} = na().ingress, r = new Set;
  if (e) r.add(e);
  let i = n?.();
  if (i) r.add(x5e(i));
  let d = _Se();
  if (d) r.add(x5e(wIe(d)));
  return r;
}

var Ee = {
  "rate-limited": "sender exceeded the peer message rate limit",
  duplicate: "identical to the previous message from this sender",
  "hop-loop": "message has already passed through this session (a peer messaging loop)",
  "hop-runaway": "peer relay chain is too long (runaway forwarding)",
  "queue-full": "this session has too many undelivered peer messages queued"
};

function K(e) {
  return {
    from: uDs(e.from) ? e.from : "(unrenderable sender address)",
    name: e.name ? Tft(e.name) : ""
  };
}

function eSs(e) {
  let {from: n} = K(e), {name: r} = K(e), i = r ? `@${r} (${n})` : n, d = e.suppressed > 0 ? ` (+${e.suppressed} similar ${I(e.suppressed, "drop")} suppressed)` : "";
  return `Dropped a peer message from ${i}: ${Ee[e.reason]}.${d}`;
}

var xe = 500, Ae = 5e3, ve = 40;

function j(e, n) {
  if (e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  let {pending: r, pendingIds: i, pendingSend: d} = e;
  if (e.pending = 0, e.pendingIds = [], e.pendingSend = void 0, r > 0 && d && n()) return d(i);
}

function ffo({trailMs: e = Ae} = {}) {
  let n = new Map, r = 0, i = 0;
  function d(S = Date.now()) {
    if (S - r >= B) r = S, i = 0;
    if (i >= ve) return !1;
    return i++, !0;
  }
  function m(S, P, b, h = Date.now()) {
    let y = n.get(S);
    if (y === void 0) y = {
      lastImmediateAt: Number.NEGATIVE_INFINITY,
      pendingIds: [],
      pending: 0,
      timer: void 0,
      pendingSend: void 0
    };
    if (n.delete(S), n.set(S, y), n.size > re) {
      let A = n.keys().next().value;
      if (A !== void 0 && A !== S) {
        let L = n.get(A);
        if (n.delete(A), L !== void 0) j(L, () => d(h));
      }
    }
    if (h - y.lastImmediateAt >= B && y.pending === 0) {
      if (y.lastImmediateAt = h, d(h)) b([]);
      return;
    }
    if (y.pending++, P !== void 0 && y.pendingIds.length < cfo) y.pendingIds.push(P);
    if (y.pendingSend = b, y.timer === void 0) y.timer = setTimeout(j, e, y, d), y.timer.unref?.();
  }
  let g = new Map, l = 0, s = 0, o = 0;
  function c(S, P = Date.now()) {
    let b = K(S);
    t(`[peer-guard] drop ${S.reason} from ${b.from}${b.name ? ` (@${b.name})` : ""}`);
    let h = `${S.from}\0${S.reason}`, y = g.get(h);
    if (y && P - y.lastReportAt < B) {
      y.suppressed++;
      return;
    }
    if (P - l >= B) l = P, s = 0;
    if (s >= Ie) {
      o++;
      return;
    }
    s++;
    let A = (y?.suppressed ?? 0) + o;
    if (o = 0, g.delete(h), g.set(h, {
      lastReportAt: P,
      suppressed: 0
    }), g.size > re) {
      let T = g.keys().next().value;
      if (T !== void 0) g.delete(T);
    }
    let L = {
      ...S,
      suppressed: A
    };
    t(`[peer-guard] Dropped peer message from ${b.from}${b.name ? ` (@${b.name})` : ""}: ${S.reason}${A > 0 ? ` (+${A} suppressed)` : ""}`, {
      level: "warn"
    }), f("peer_loop_guard", S.reason), na().ingress.messageDropped.emit(L);
  }
  async function R(S = xe) {
    let P = [];
    for (let b of n.values()) if (b.pending > 0) P.push(j(b, d)); else if (b.timer !== void 0) clearTimeout(b.timer), 
    b.timer = void 0;
    if (P.length === 0) return;
    await Promise.race([ Promise.allSettled(P), J(S, void 0, {
      unref: !0
    }) ]);
  }
  function w() {
    for (let S of n.values()) if (S.timer !== void 0) clearTimeout(S.timer);
    n.clear();
  }
  return {
    report: c,
    noteDropForReceipt: m,
    flushPendingReceipts: R,
    dispose: w
  };
}

var Oe = 50, X = {
  ...d$n,
  maxQueuedPeerMessages: Oe
}, C = X, De = p(() => u({
  bucketCapacity: v().min(5).max(500).catch(C.bucketCapacity),
  refillPerSecond: v().min(.05).max(50).catch(C.refillPerSecond),
  dedupWindowMs: v().int().min(0).max(6e5).catch(C.dedupWindowMs),
  maxSelfHops: v().int().min(3).max(asn).catch(C.maxSelfHops),
  maxChainLength: v().int().min(8).max(asn - 1).catch(C.maxChainLength),
  maxTrackedSenders: v().int().min(16).max(1e5).catch(C.maxTrackedSenders),
  maxQueuedPeerMessages: v().int().min(10).max(5e3).catch(C.maxQueuedPeerMessages)
})), Le = 3e5;

function BQt() {
  let e = nG("tengu_harbor_kite_limits", X, Le), n = De().safeParse(e);
  if (!n.success) return t("[peer-guard] tengu_harbor_kite_limits is not an object; using defaults", {
    level: "warn"
  }), X;
  return n.data;
}

var Te = /[0-9a-f]{32,}/gi;

function oe(e) {
  return e.replace(Te, n => `<hex:${sn(n)}>`);
}

function Bg(e, n = 120) {
  if (/token/i.test(e)) return "(withheld)";
  return $s(oe(e), n);
}

function GV(e) {
  if (/token/i.test(e)) return "(redacted: fragment may carry an auth token)";
  return $s(oe(e), 200);
}

function l$n(e) {
  if (O() === "windows") return null;
  let n = ie(e);
  if (n < 0) return null;
  try {
    return Bun.ant.getPeerUid(n);
  } catch (r) {
    return t(`[daemon] peer uid lookup failed: ${r instanceof Error ? r.message : String(r)}`, {
      level: "warn"
    }), null;
  }
}

function Qbs(e, n = l$n) {
  let r = process.getuid?.();
  if (r == null) return null;
  let i = n(e);
  if (i == null) return null;
  if (i === r) return null;
  let d = `permission denied: connecting uid ${i} != daemon uid ${r} (retry without sudo, or as the daemon owner)`;
  return t(`[daemon] rejecting control connection: ${d}`, {
    level: "error"
  }), d;
}

function Slt(e) {
  if (O() === "windows") return;
  let n = ie(e);
  try {
    let r = n < 0 ? null : Bun.ant.getPeerPid(n);
    if (r !== null && r > 0) return r;
    t(`[peer-cred] peer pid unavailable (fd=${n}, got=${r})`, {
      level: "warn"
    });
    return;
  } catch (r) {
    t(`[peer-cred] peer pid lookup failed: ${r instanceof Error ? r.message : String(r)}`, {
      level: "warn"
    });
    return;
  }
}

function ie(e) {
  let n = e._handle;
  return typeof n?.fd === "number" ? n.fd : -1;
}

import { lstat as Ne, readdir as Me, stat as Ue, unlink as ge } from "fs/promises";

import { connect as Se } from "net";

import { basename as Be, dirname as me, join as He } from "path";

var FQt = 1048576;

function se(e, n = Date.now) {
  let r = new Map;
  function i(l, s) {
    let {bucketCapacity: o, refillPerSecond: c, maxTrackedSenders: R} = e(), w = !1, S = U(r, l, R, () => (w = !0, 
    {
      tokens: o,
      updatedAt: s,
      sentInBurst: 0,
      burstStartedAt: s
    }), P => N(P.tokens, P.updatedAt, s, o, c) >= o);
    if (!w) {
      S.tokens = N(S.tokens, S.updatedAt, s, o, c), S.updatedAt = s;
      let P = o / Math.max(c, 1e-9) * 1e3;
      if (S.tokens >= o || s - S.burstStartedAt > P) S.sentInBurst = 0, S.burstStartedAt = s;
    }
    return S;
  }
  function d(l) {
    let s = i(l, n());
    if (!M(s.tokens)) return {
      ok: !1,
      sentInBurst: s.sentInBurst
    };
    s.tokens -= 1, s.sentInBurst += 1;
    let o = s, c = !1;
    return {
      ok: !0,
      refund: () => {
        if (c) return;
        c = !0, o.tokens = Math.min(e().bucketCapacity, o.tokens + 1), o.sentInBurst = Math.max(0, o.sentInBurst - 1);
      }
    };
  }
  function m(l) {
    let s = i(l, n());
    s.tokens = Math.min(e().bucketCapacity, s.tokens + 1), s.sentInBurst = Math.max(0, s.sentInBurst - 1);
  }
  function g(l) {
    let s = i(l, n());
    s.tokens = Math.max(0, s.tokens - 1), s.sentInBurst += 1;
  }
  return {
    reserve: d,
    credit: m,
    debit: g
  };
}

var de = "no_live_inbox", ae = "ENOINBOX", ue = "message_too_large";

function ce(e, n) {
  return new x(`Message too large for cross-session delivery: the serialized message is ${e.toLocaleString("en-US")} characters and the limit is ${n.toLocaleString("en-US")}. Shorten the message text \u2014 put bulk content in a file the recipient can read rather than in the message \u2014 or split it into smaller messages.`, "cross-session message exceeds the line cap", ue);
}

function wlt(e) {
  return e instanceof x && e.errorClass === ue;
}

var pe = "sender_paced";

function fe(e) {
  return new x(`Too many messages to this session just now: ${e} were sent recently and more would be dropped by its rate limit, so this one was not sent. Batch what remains into one message, or wait a little before sending more.`, "cross-session sends to one target outpaced its inbox rate limit", pe);
}

function vlt(e) {
  return e instanceof x && e.errorClass === pe;
}

function oSr(e) {
  let n = E(e);
  return n === "ENOENT" || n === "ECONNREFUSED" || e instanceof x && e.errorClass === de;
}

class H extends x {
  kind;
  constructor(e, n) {
    super(n, "no live inbox registered for the target pipe", de);
    this.name = "NoLiveInboxError", this.kind = e;
  }
}

function sSr(e) {
  return e instanceof H && e.kind === "unusable";
}

function dSe(e) {
  if (sSr(e)) return "busy";
  if (oSr(e)) return "gone";
  let n = E(e);
  return n === "EBUSY" || n === "EAGAIN" ? "busy" : "other";
}

function Elt(e) {
  return ` \u2014 the peer process may have restarted, so this socket path is stale. Call ${e} to get the current address.`;
}

var mfo = " \u2014 the peer is alive but its pipe is momentarily busy. Retry the same address shortly.", Ce = " \u2014 this machine's session registry could not be read just now (a transient local condition). Retry the same address shortly.";

function c$n(e) {
  return sSr(e) ? Ce : mfo;
}

class A8 extends Error {
  refusal;
  constructor(e, n) {
    super(n);
    this.name = "UdsSendRefusedError", this.refusal = e;
  }
}

function TY(e) {
  if (e instanceof A8 || oSr(e) || vlt(e) || wlt(e)) return !0;
  let n = E(e);
  return n === "EBUSY" || n === "EAGAIN" || n === "EACCES";
}

function $e(e) {
  if (typeof e !== "object" || e === null) return !1;
  let {name: n, until: r, sessionId: i} = e;
  return typeof n === "string" && mLt(r) && (i === void 0 || typeof i === "string");
}

function Ge(e) {
  if (!Array.isArray(e)) return [];
  return e.filter($e).slice(0, FRr).map(({name: n, until: r, sessionId: i}) => ({
    name: ne(n, tI),
    until: r,
    ...i !== void 0 && {
      sessionId: ne(i, tI)
    }
  }));
}

function je() {
  return na().outbound.pacer ??= se(BQt);
}

var Ke = {
  ok: !0,
  refund: () => {}
};

function We() {
  if (a.CLAUDE_CODE_HARBOR_KITE_PACING_OFF) return !1;
  return !k("tengu_harbor_kite_pacing_off", !1);
}

function gfo(e) {
  be(e, (n, r) => n.credit(r));
}

function iSr(e) {
  be(e, (n, r) => n.debit(r));
}

function be(e, n) {
  let r = na().outbound.pacer;
  if (!r) return;
  let {scheme: i, target: d} = Yh(e);
  if (i !== "uds") return;
  n(r, lA(d) ?? d);
}

async function jQt(e, n, r, i, d, m, g, {trackReceipts: l = !0, expectPeerPid: s, expectPeerProcStart: o, fromPlugin: c, recipientName: R} = {}) {
  let w = C8(), S = w ? UK(w) : void 0, P = k("tengu_tidy_fern", !0) ? WRr() : void 0, b = Rft(S, i, n, P, W2n(m, S ? x5e(S) : void 0), g), h = CY(), y = {
    ...h,
    type: "user",
    message: {
      role: "user",
      content: b
    },
    priority: "next",
    from: S,
    ...c !== void 0 && {
      from_plugin: c
    },
    ...(d?.length ?? 0) > 0 && {
      file_attachments: d
    }
  }, A = Pe(y), T = (S !== void 0 || O() !== "windows") && We() ? je().reserve(lA(e) ?? e) : Ke;
  if (!T.ok) throw t(`[uds-client] paced: not sending to ${Bg(e)} \u2014 ${T.sentInBurst} sent this burst; its inbox rate limit would drop more`), 
  fe(T.sentInBurst);
  if (t(`[uds-client] Sending ${n.length} chars to ${Bg(e)}`), l) Xe(h.msg_id, UK(e), R);
  try {
    await we(e, y, r, {
      noFollowSymlink: !0,
      preflightedJson: A,
      ...s !== void 0 && {
        expectPeerPid: s
      },
      ...o !== void 0 && {
        expectPeerProcStart: o
      }
    });
  } catch (te) {
    if (TY(te)) {
      if (T.refund(), l) ze(h.msg_id);
    }
    throw te;
  }
  return {
    msgId: h.msg_id
  };
}

var ye = 200;

function Xe(e, n, r) {
  let i = na().receipts.outstandingSends;
  if (i.length >= ye) i.shift();
  i.push({
    msgId: e,
    to: n,
    handle: Tft(r ?? "", 1 / 0) || void 0
  });
}

function ze(e) {
  let n = na().receipts.outstandingSends, r = n.findIndex(i => i.msgId === e);
  if (r !== -1) n.splice(r, 1);
}

function hfo(e, n) {
  if (typeof e !== "string") return;
  let {outstandingSends: r, awaitingTerminal: i} = na().receipts, d = r.findIndex(g => g.msgId === e);
  if (d !== -1) {
    let [g] = r.splice(d, 1);
    if (!g) return;
    if (n === "held") {
      if (i.length >= ye) i.shift();
      i.push(g);
    }
    return {
      sent: g,
      wasHeld: !1
    };
  }
  let m = i.findIndex(g => g.msgId === e);
  if (m !== -1 && n !== "held") {
    let [g] = i.splice(m, 1);
    return g ? {
      sent: g,
      wasHeld: !0
    } : void 0;
  }
  return;
}

function yfo(e) {
  let n = new Map;
  if (e.length === 0) return n;
  let r = new Set(e), {outstandingSends: i, awaitingTerminal: d} = na().receipts;
  for (let m of [ i, d ]) {
    let g = m === d;
    for (let l = 0; l < m.length; ) {
      let s = m[l];
      if (r.delete(s.msgId)) {
        m.splice(l, 1);
        let o = n.get(s.to) ?? {
          sends: [],
          wereHeld: 0
        };
        if (o.sends.push(s), g) o.wereHeld++;
        n.set(s.to, o);
      } else l++;
    }
  }
  return n;
}

function wue(e, n, r = {}) {
  return oIt(e, n, CY(), r).then(() => {});
}

async function oIt(e, n, r = CY(), {expectPeerPid: i, expectPeerProcStart: d, storageV5: m} = {}) {
  return t(`[uds-client] Sending control:${n.action} to ${Bg(e)}`), await we(e, {
    type: "control",
    ...n,
    ...r
  }, m, {
    noFollowSymlink: !0,
    ...i !== void 0 && {
      expectPeerPid: i
    },
    ...d !== void 0 && {
      expectPeerProcStart: d
    }
  }), {
    msgId: r.msg_id
  };
}

var Je = 150;

async function WQt(e) {
  let n = lA(e);
  if (n === void 0) return;
  for (let r of await F()) {
    if (!r.sock || lA(r.sock) !== n) continue;
    if (await q(r)) return {
      pid: r.pid,
      features: r.peerFeatures,
      sessionId: r.sessionId,
      procStart: r.procStartFt ?? r.procStart
    };
  }
  return;
}

async function _fo(e) {
  let n = D(e), r = new Map;
  if (n.length === 0) return r;
  let i = NK(), m = (await Promise.all(n.map(l => G(i, `${l}.json`)))).filter(l => l !== null && Boolean(l.sock)), g = await Promise.all(m.map(l => q(l)));
  return m.forEach((l, s) => {
    if (g[s] && l.sock) r.set(l.pid, l.sock);
  }), r;
}

async function p6s(e, n) {
  let r = await G(NK(), `${e}.json`, {
    rejectTornLiveRecord: !0
  });
  return r?.jobId === n ? r.status : void 0;
}

async function q(e) {
  let n = e.procStartFt ?? e.procStart;
  if (n === void 0 || Xf(e.pid)) return !1;
  return await gh(e.pid, n) === !0;
}

function Pe(e) {
  let n = _(e), r = eDs + n.length + 1;
  if (r > FQt) throw ce(r, FQt);
  return n;
}

async function Ve(e) {
  let n = lA(e);
  if (n === void 0) return !1;
  for (let r of await F()) {
    if (!r.sock || lA(r.sock) !== n) continue;
    if (Xf(r.pid)) continue;
    if ((r.procStartFt ?? r.procStart) !== void 0) {
      if (await q(r)) return !0;
      continue;
    }
    if (Aa(r.pid)) return !0;
  }
  return !1;
}

async function we(e, n, r, {noFollowSymlink: i = !1, expectPeerPid: d, expectPeerProcStart: m, preflightedJson: g} = {}) {
  let l = g ?? Pe(n);
  if (!V0(e)) throw new A8("non-local", `Refusing to connect: not a usable local IPC path (remote/UNC host, or a pipe name with extra segments or a trailing dot/space): ${e}`);
  let s = N2n(), o = await ZHs(e, r, {
    requireLiveOwner: s
  }), c = o.kind === "token" ? o.token : void 0;
  if (s && o.kind !== "token") {
    if (!(o.kind === "no-key" && await Ve(e))) throw new H(o.kind, `No running session has registered an inbox at ${e} (${ae}: ${o.kind}) \u2014 refusing to send to an unvouched pipe`);
    c = void 0;
  }
  let R = c !== void 0 ? lCo(c) : "";
  if (i && !(O() === "windows" && Eve(e) !== void 0)) {
    let S;
    try {
      S = (await Ne(e)).isSymbolicLink();
    } catch (P) {
      if (W(P)) throw P;
      throw t(`[uds-client] reply target unvettable: ${E(P) ?? "lstat failed"}`), new A8("unvettable", "Refusing to send: cannot vet reply target");
    }
    if (S) throw new A8("symlink", "Refusing to send: reply target is a symlink");
  }
  let w = R + l + `\n`;
  return new Promise((S, P) => {
    let b = Se({
      path: e
    }), h = !1;
    b.setTimeout(5e3, () => {
      h = !0, b.destroy(), P(Error(`Timed out sending to ${e}`));
    }), b.on("error", y => {
      h = !0, P(y);
    }), b.on("connect", () => {
      if (d !== void 0 && O() !== "windows") {
        let y = Slt(b);
        if (y === void 0) {
          h = !0, b.destroy(), P(new A8("endpoint-unverifiable", "Refusing to send: connected endpoint identity could not be read"));
          return;
        }
        if (y !== d) {
          h = !0, b.destroy(), t(`[uds-client] connected endpoint is pid ${y}, expected ${d} \u2014 refusing to write`), 
          P(new A8("wrong-endpoint", "Refusing to send: connected endpoint is not the expected process"));
          return;
        }
        let A = process.getuid?.(), L = l$n(b);
        if (A !== void 0 && L === null) {
          h = !0, b.destroy(), P(new A8("endpoint-unverifiable", "Refusing to send: connected endpoint owner could not be read"));
          return;
        }
        if (A !== void 0 && L !== A) {
          h = !0, b.destroy(), t(`[uds-client] connected endpoint is owned by uid ${L}, not ours \u2014 refusing to write`), 
          P(new A8("wrong-endpoint", "Refusing to send: connected endpoint is not owned by this user"));
          return;
        }
        if (m !== void 0 && Ave(y) !== m) {
          h = !0, b.destroy(), t(`[uds-client] connected endpoint pid ${y} is not the process that wrote to us (start token differs \u2014 recycled pid) \u2014 refusing to write`), 
          P(new A8("wrong-endpoint", "Refusing to send: connected endpoint is a different process with the expected pid"));
          return;
        }
      }
      if (b.write(w), O() === "macos") setTimeout(y => {
        if (!y.destroyed) y.end();
      }, Je, b); else b.end();
    }), b.on("close", () => {
      if (!h) t(`[uds-client] Sent to ${Bg(e)}`);
      S();
    });
  });
}

function Q(e) {
  return new Promise(n => {
    if (!V0(e)) {
      n(!1);
      return;
    }
    let r = Se({
      path: e
    }), i = d => {
      r.destroy(), n(d);
    };
    r.on("connect", () => i(!0)), r.on("error", d => i(E(d) === "EBUSY")), r.setTimeout(250, () => i(!1));
  });
}

class zQt extends Error {
  code;
  constructor(e) {
    super("session records directory unreadable");
    this.code = e;
    this.name = "SessionRecordsUnreadableError";
  }
}

async function F(e) {
  let n = NK(), r;
  try {
    r = await Me(n);
  } catch (d) {
    if (e?.rejectUnreadable && !W(d)) throw new zQt(E(d));
    return [];
  }
  return (await Promise.all(r.filter(d => /^\d+\.json$/.test(d)).map(d => G(n, d, {
    rejectTornLiveRecord: e?.rejectTornLiveRecord
  })))).filter(d => d !== null);
}

async function G(e, n, r) {
  let i = !1, d, m = He(e, n);
  try {
    let g = wDs(n);
    if (g === null) return null;
    let {pid: l} = g;
    if (!g.canonical) return ge(m).catch(() => {}), null;
    d = l;
    let s = await Xa(m, Oft);
    if (s === null) return null;
    i = !0;
    let o = Y(s), c = vDs(o);
    return {
      sock: typeof o.messagingSocketPath === "string" ? o.messagingSocketPath : "",
      cwd: c.cwd,
      startedAt: c.startedAt,
      ...fsn(o.nameSince) !== void 0 && {
        nameSince: fsn(o.nameSince)
      },
      procStart: c.procStart,
      ...c.procStartFt !== void 0 && {
        procStartFt: c.procStartFt
      },
      name: typeof o.name === "string" ? o.name : void 0,
      nameSource: o.nameSource === "user" || o.nameSource === "peer" || o.nameSource === "derived" || o.nameSource === "collision" || o.nameSource === "auto" || o.nameSource === "hook" ? o.nameSource : void 0,
      formerNames: Ge(o.formerNames),
      kind: c.kind,
      sessionId: c.sessionId,
      jobId: typeof o.jobId === "string" ? o.jobId : void 0,
      parkedJobId: typeof o.parkedJobId === "string" ? o.parkedJobId : void 0,
      spare: o.spare === !0,
      bridgeSessionId: typeof o.bridgeSessionId === "string" ? o.bridgeSessionId : void 0,
      logPath: typeof o.logPath === "string" ? o.logPath : void 0,
      status: c.status,
      waitingFor: typeof o.waitingFor === "string" ? o.waitingFor : void 0,
      ...{},
      updatedAt: fsn(o.updatedAt),
      statusUpdatedAt: fsn(o.statusUpdatedAt),
      entrypoint: c.entrypoint,
      ...$Gn(o.hostSessionId) !== void 0 && {
        hostSessionId: $Gn(o.hostSessionId)
      },
      ...c.pidDomain !== void 0 && {
        pidDomain: c.pidDomain
      },
      agent: typeof o.agent === "string" ? o.agent : void 0,
      state: typeof o.state === "string" ? o.state : void 0,
      detail: typeof o.detail === "string" ? o.detail : void 0,
      tempo: o.tempo === "active" || o.tempo === "idle" || o.tempo === "blocked" ? o.tempo : void 0,
      needs: typeof o.needs === "string" ? o.needs : void 0,
      peerProtocol: typeof o.peerProtocol === "number" ? o.peerProtocol : void 0,
      ...Array.isArray(o.peerFeatures) && {
        peerFeatures: qe(o.peerFeatures)
      },
      ...{},
      tmux: typeof o.tmux === "string" ? o.tmux : void 0,
      pid: l,
      file: m
    };
  } catch {
    if (r?.rejectTornLiveRecord && i && d !== void 0 && Aa(d)) {
      if (!r.isReread) return await J($2n), G(e, n, {
        ...r,
        isReread: !0
      });
      let [g, l] = await Promise.all([ Ue(m).then(s => s.mtimeMs, () => {}), Q8e(d) ]);
      if (g !== void 0 && l !== null && l > g + 2e3) return null;
      if (l === null && !Aa(d)) return null;
      throw new zQt("EBADRECORD");
    }
    return null;
  }
}

function _e(e, n) {
  return e.pidDomain !== void 0 && e.pidDomain !== n;
}

async function f6s(e, n) {
  let r = await dA();
  return e.some(i => i.sessionId === n && _e(i, r));
}

async function GQt() {
  return (await F({
    rejectUnreadable: !0
  })).map(({file: e, ...n}) => n);
}

function V(e, n, r, i) {
  if (z() && i !== void 0) {
    i.delete(Fe.session(Be(e))).then(d => d.ok && d.value.existed ? zRr(me(e), n, r, i) : void 0).catch(() => {});
    return;
  }
  ge(e).then(() => zRr(me(e), n, r, i)).catch(() => {});
}

async function x7(e, n) {
  let r = await F({
    rejectUnreadable: n?.rejectUnreadable === !0,
    rejectTornLiveRecord: n?.rejectUnreadable === !0
  }), i = n?.rejectUnreadable === !0 ? await dA() : void 0, d = c => i !== void 0 && _e(c, i), m = r.map(c => d(c) || Aa(c.pid)), g = await Promise.all(r.map((c, R) => m[R] && (d(c) || Ev(c.pid, c.procStartFt ?? c.procStart)))), l = await TBe(), s = l ? await dA() : "", o = [];
  for (let c = 0; c < r.length; c++) {
    let {file: R, ...w} = r[c];
    if (g[c]) o.push(w); else if (l && jGn(w, s) && Xf(w.pid)) V(R, w.pid, s, e);
  }
  return o;
}

function C8() {
  return bT.CLAUDE_CODE_MESSAGING_SOCKET;
}

async function bfo() {
  let e = C8();
  if (e === void 0) return !1;
  let n = await F(), r = await dA(), i = n.filter(m => m.sock && m.pid !== process.pid && !ee(m) && z8e({
    sock: m.sock
  }) && Cie(m.sock, e));
  return (await Promise.all(i.map(async m => await Z(m, r) === "present" && await Q(m.sock)))).some(Boolean);
}

async function Z(e, n) {
  if (e.pidDomain !== n) return "present";
  if (Xf(e.pid)) return "gone";
  let r = e.procStartFt ?? e.procStart;
  if (r === void 0) return "present";
  let i = await Ul(e.pid);
  if (i === void 0 || Cve(r, i)) return "present";
  return await gh(e.pid, r) === !1 ? "recycled" : "present";
}

async function Sfo(e) {
  let n = C8(), r = (await F({
    rejectUnreadable: !0
  })).filter(s => s.sock && !(n && vve(s.sock, n)) && !ee(s)), [i, d] = await Promise.all([ TBe(), dA() ]), [m, g] = await Promise.all([ Promise.all(r.map(s => Q(s.sock))), Promise.all(r.map(s => Z(s, d))) ]), l = [];
  for (let s = 0; s < r.length; s++) {
    let {file: o, ...c} = r[s];
    if (g[s] === "gone") {
      if (i && Xf(c.pid)) V(o, c.pid, d, e);
    } else if (g[s] === "recycled") continue; else if (m[s]) l.push(c); else if (i && jGn(c, d) && Xf(c.pid)) V(o, c.pid, d, e);
  }
  return l;
}

async function VQt(e) {
  let n = C8(), r = await F(), i = o => Boolean(o.sock) && !(n && vve(o.sock, n)), d = new Set(r.filter(o => o.sessionId === e && o.parkedJobId !== void 0).map(o => o.parkedJobId)), m = r.filter(o => i(o) && !ee(o)), g = m.filter(o => o.sessionId === e), l = m.filter(o => o.sessionId !== e && o.jobId !== void 0 && d.has(o.jobId)), s = await dA();
  for (let o of g.concat(l)) {
    let {file: c, ...R} = o;
    if (await Z(R, s) === "present" && await Q(R.sock)) return R;
  }
  return null;
}

function ee(e) {
  return e.spare === !0 || e.parkedJobId !== void 0;
}

function qe(e) {
  return Zi(e).filter(n => /^[a-z0-9_]{1,32}$/.test(n)).slice(0, 16);
}

export { Bg, GV, l$n, Qbs, Slt, FQt, d$n, dfo, Zbs, cfo, ufo, UQt, pfo, eSs, ffo, BQt, wlt, vlt, oSr, sSr, dSe, Elt, mfo, c$n, A8, TY, gfo, iSr, jQt, hfo, yfo, wue, oIt, WQt, _fo, p6s, zQt, f6s, GQt, x7, C8, bfo, Sfo, VQt };
