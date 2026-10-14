// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { ke } from "./chunk-3pqddg8f.js";

import { c, pe, Gr, kq } from "./chunk-hwdwjvh8.js";

import { j } from "./chunk-b0z4bv3v.js";

import { e6 } from "./chunk-y752zmas.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { Bd } from "./chunk-xywp7esx.js";

import { tr } from "./chunk-j016gcgm.js";

import { bt, _, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { sd, or } from "./chunk-w0q7jqcp.js";

import { p } from "./chunk-jkzenvsk.js";

import { xPr } from "./chunk-8yperama.js";

import { je, Rt } from "./chunk-s2t7g8m9.js";

import { YS, Dw } from "./chunk-w4hwgefc.js";

import { oee } from "./chunk-46phtgr7.js";

import { qSo } from "./chunk-gzzx34vb.js";

import { rHe, d1r } from "./chunk-95z0z7c8.js";

import { ru, EO, JUn } from "./chunk-9tdwgnpn.js";

import { bR, KNe, gN, qNe, gY, Ki } from "./chunk-sqb9meyh.js";

import { vGo, u1r, EGo, kGo, TGo, Kgn, p1r, AGo, fB, CGo, RGo, f1r, mXn, m1r, lZe } from "./chunk-fdtwr731.js";

import { mhe, t2t } from "./chunk-t21b4wjt.js";

import { Cgn, Rgn, Z9n, $_t, zze } from "./chunk-q206t87a.js";

import { p2 } from "./chunk-tfmnxgqc.js";

import { iZe } from "./chunk-agck61c0.js";

import { jle } from "./chunk-tqxwcs8r.js";

import { Zhe } from "./chunk-avrjq9ek.js";

import { o, v, cI, u, $e, A } from "./chunk-cvcg6n1z.js";

import { O } from "./chunk-1xnsr4dy.js";

import { N } from "./chunk-hmqkrrtz.js";

import { uL } from "./chunk-pnn4xyvt.js";

import { hostname as Fe } from "os";

class X {
  transport;
  announced;
  now;
  random;
  onEvent;
  onTransportEvent;
  started=!1;
  stopping=!1;
  timers=f1r(p1r);
  lastAckAt=0;
  reconnectAttempts=0;
  consecutiveSlotContention=0;
  lastFailureWasContention=!1;
  contentionBackoffNotified=!1;
  consecutivePongTimeouts=0;
  keepaliveTimer;
  reconnectTimer;
  stableTimer;
  reannounce={
    phase: "idle"
  };
  constructor(e) {
    this.transport = e.transport, this.announced = e.announced, this.onEvent = e.onEvent, 
    this.onTransportEvent = e.onTransportEvent, this.now = e.now ?? Date.now, this.random = e.random ?? Math.random, 
    this.transport.onevent = this.handleTransportEvent;
  }
  start() {
    if (this.started) return;
    this.started = !0, this.openConnection();
  }
  async stop() {
    this.stopping = !0, this.clearReconnectTimer(), this.clearConnectionTimers(), this.cancelReannounce(), 
    await this.transport.close();
  }
  requestReannounce(e) {
    if (!this.started || this.stopping) return;
    let n = Kgn[e];
    switch (this.reannounce.phase) {
     case "draining":
     case "rotating":
      return;

     case "coalescing":
      if (this.reannounce.fireAt <= this.now() + n) return;
      clearTimeout(this.reannounce.timer);
      break;

     case "idle":
      break;
    }
    this.reannounce = {
      phase: "coalescing",
      reason: e,
      fireAt: this.now() + n,
      timer: setTimeout(this.beginReannounce, n)
    };
  }
  getReconnectAttempts() {
    return this.reconnectAttempts;
  }
  getConsecutiveSlotContention() {
    return this.consecutiveSlotContention;
  }
  getConsecutivePongTimeouts() {
    return this.consecutivePongTimeouts;
  }
  handleTransportEvent=e => {
    switch (this.notifyTransportListener(e), e.kind) {
     case "authenticated":
      this.handleAuthenticated(e.protocolVersion, e.timings);
      return;

     case "hb_ack":
      this.handleAck();
      return;

     case "rejected":
      {
        let n = this.endRotation(), r = n !== void 0 && e.reason === "duplicate_device_id";
        if (r) this.emit({
          kind: "reannounce_contended",
          reason: n
        }); else if (e.slotContention) this.lastFailureWasContention = !0;
        this.cancelDrain(), this.clearConnectionTimers(), this.scheduleReconnect(r);
        return;
      }

     case "closed":
      if (e.superseded) this.lastFailureWasContention = !0;
      this.endRotation(), this.cancelDrain(), this.clearConnectionTimers(), this.scheduleReconnect();
      return;

     case "handshake_timeout":
     case "dial_failed":
     case "token_unavailable":
      this.endRotation(), this.cancelDrain(), this.clearConnectionTimers(), this.scheduleReconnect();
      return;

     case "transport_closed":
      this.stopping = !0, this.clearReconnectTimer(), this.clearConnectionTimers(), this.cancelReannounce();
      return;

     case "connecting":
     case "socket_error":
     case "inbound_unknown":
     case "inbound_invalid":
     case "outbound_dropped":
      return;
    }
  };
  async openConnection() {
    if (this.stopping) return;
    try {
      await this.transport.openConnection();
    } catch (e) {
      t(`[deviceBridge] open connection failed: ${j(e).message}`), this.endRotation(), 
      this.scheduleReconnect();
    }
  }
  handleAuthenticated(e, n) {
    if (this.stopping) return;
    if (this.timers = f1r(n), this.lastAckAt = this.now(), this.clearKeepaliveTimer(), 
    this.endRotation() === void 0 || this.stableTimer === void 0) this.clearStableTimer(), 
    this.stableTimer = setTimeout(this.markStable, kGo);
    if (this.announced.hasUnservedChange()) this.requestReannounce("connected_stale");
    if (e < 1) {
      this.consecutivePongTimeouts = 0, this.emit({
        kind: "heartbeat_unsupported",
        protocolVersion: e
      });
      return;
    }
    this.keepaliveTimer = setInterval(this.keepaliveTick, this.timers.keepaliveIntervalMs), 
    this.sendHeartbeat();
  }
  handleAck() {
    if (this.lastAckAt = this.now(), this.consecutivePongTimeouts > 0) this.consecutivePongTimeouts = 0, 
    this.reconnectAttempts = 0;
  }
  keepaliveTick=() => {
    if (!this.transport.isAuthenticated()) return;
    if (this.now() - this.lastAckAt > this.timers.pongTimeoutMs) {
      this.consecutivePongTimeouts++, this.emit({
        kind: "pong_timeout",
        consecutive: this.consecutivePongTimeouts
      }), this.cancelDrain(), this.clearConnectionTimers(), this.transport.disconnect(), 
      this.scheduleReconnect();
      return;
    }
    this.sendHeartbeat();
  };
  sendHeartbeat() {
    this.transport.sendRaw(vGo);
  }
  markStable=() => {
    if (this.stableTimer = void 0, this.consecutiveSlotContention = 0, this.contentionBackoffNotified = !1, 
    this.consecutivePongTimeouts === 0) this.reconnectAttempts = 0;
    this.emit({
      kind: "stabilized"
    });
  };
  scheduleReconnect(e = !1) {
    if (this.stopping || !this.started || this.reconnectTimer !== void 0) return;
    let n = this.nextDelayMs(e);
    if (this.stopping) return;
    this.reconnectTimer = setTimeout(this.reconnect, n), this.emit({
      kind: "reconnect_scheduled",
      delayMs: n,
      attempt: this.reconnectAttempts,
      slotContention: this.consecutiveSlotContention > 0
    });
  }
  nextDelayMs(e) {
    let n = this.lastFailureWasContention;
    if (this.lastFailureWasContention = !1, e) return mXn(0, 1, this.timers.slotContentionFastAttempts, this.random);
    if (n) {
      if (this.consecutiveSlotContention++, this.consecutiveSlotContention > this.timers.slotContentionFastAttempts && !this.contentionBackoffNotified) this.contentionBackoffNotified = !0, 
      this.emit({
        kind: "slot_contention_backoff",
        consecutive: this.consecutiveSlotContention
      });
      return mXn(0, this.consecutiveSlotContention, this.timers.slotContentionFastAttempts, this.random);
    }
    if (this.consecutiveSlotContention = 0, this.contentionBackoffNotified = !1, this.reconnectAttempts >= EGo) {
      this.reconnectAttempts = 0, this.emit({
        kind: "reconnect_exhausted"
      });
      try {
        this.transport.onerror?.(Error("Bridge unreachable"));
      } catch (s) {
        t(`[deviceBridge] transport onerror listener threw: ${j(s).message}`);
      }
    }
    let r = mXn(this.reconnectAttempts, 0, this.timers.slotContentionFastAttempts, this.random);
    return this.reconnectAttempts++, r;
  }
  reconnect=() => {
    this.reconnectTimer = void 0, this.openConnection();
  };
  beginReannounce=() => {
    if (this.reannounce.phase !== "coalescing") return;
    let {reason: e} = this.reannounce;
    if (this.reannounce = {
      phase: "idle"
    }, this.stopping) return;
    let n = this.announced.inFlightCalls(), r = this.reannounceSkipOutcome();
    if (r !== void 0) {
      this.emit({
        kind: "reannounce",
        reason: e,
        outcome: r,
        inFlightAtStart: n,
        drainedMs: 0,
        drainTimedOut: !1
      });
      return;
    }
    let s = {
      phase: "draining",
      reason: e,
      startedAt: this.now(),
      inFlightAtStart: n,
      timer: setTimeout(this.handleDrainTimeout, this.timers.rotateDrainMaxMs)
    };
    this.reannounce = s, this.announced.whenIdle().then(() => this.rotate(s, !1), () => this.rotate(s, !1));
  };
  handleDrainTimeout=() => {
    if (this.reannounce.phase === "draining") this.rotate(this.reannounce, !0);
  };
  rotate(e, n) {
    if (this.reannounce !== e) return;
    if (clearTimeout(e.timer), this.reannounce = {
      phase: "idle"
    }, this.stopping) return;
    let r = this.reannounceSkipOutcome() ?? "rotated";
    if (r === "rotated") this.reannounce = {
      phase: "rotating",
      reason: e.reason
    };
    if (this.emit({
      kind: "reannounce",
      reason: e.reason,
      outcome: r,
      inFlightAtStart: e.inFlightAtStart,
      drainedMs: this.now() - e.startedAt,
      drainTimedOut: n
    }), this.reannounce.phase !== "rotating" || this.stopping) return;
    this.clearKeepaliveTimer(), this.transport.disconnect(), this.openConnection();
  }
  reannounceSkipOutcome() {
    if (!this.announced.hasUnservedChange()) return "already_served";
    if (!this.transport.isAuthenticated()) return "not_connected";
    return;
  }
  endRotation() {
    if (this.reannounce.phase !== "rotating") return;
    let {reason: e} = this.reannounce;
    return this.reannounce = {
      phase: "idle"
    }, e;
  }
  cancelDrain() {
    if (this.reannounce.phase !== "draining") return;
    let e = this.reannounce;
    clearTimeout(e.timer), this.reannounce = {
      phase: "idle"
    }, this.emit({
      kind: "reannounce",
      reason: e.reason,
      outcome: "not_connected",
      inFlightAtStart: e.inFlightAtStart,
      drainedMs: this.now() - e.startedAt,
      drainTimedOut: !1
    });
  }
  cancelReannounce() {
    switch (this.reannounce.phase) {
     case "coalescing":
     case "draining":
      clearTimeout(this.reannounce.timer);
      break;

     case "rotating":
     case "idle":
      break;
    }
    this.reannounce = {
      phase: "idle"
    };
  }
  emit(e) {
    try {
      this.onEvent?.(e);
    } catch (n) {
      t(`[deviceBridge] liveness event listener threw: ${j(n).message}`);
    }
  }
  notifyTransportListener(e) {
    try {
      this.onTransportEvent?.(e);
    } catch (n) {
      t(`[deviceBridge] transport event listener threw: ${j(n).message}`);
    }
  }
  clearReconnectTimer() {
    if (this.reconnectTimer === void 0) return;
    clearTimeout(this.reconnectTimer), this.reconnectTimer = void 0;
  }
  clearConnectionTimers() {
    this.clearKeepaliveTimer(), this.clearStableTimer();
  }
  clearKeepaliveTimer() {
    if (this.keepaliveTimer !== void 0) clearInterval(this.keepaliveTimer), this.keepaliveTimer = void 0;
  }
  clearStableTimer() {
    if (this.stableTimer !== void 0) clearTimeout(this.stableTimer), this.stableTimer = void 0;
  }
}

function ae() {
  let e = new Map, n = Me(), r = se(e), s;
  return {
    get: a => r.byName.get(a),
    setGroup(a, l, S = "tools_changed") {
      e.set(a, [ ...l ]);
      let b = se(e), w = r;
      if (r = b, b.dropped.length > 0 && _(b.dropped) !== _(w.dropped)) t(`[deviceBridge] duplicate device tool names not announced: ${_(b.dropped)}`);
      if (b.hash === w.hash) return;
      try {
        n.emit(S);
      } catch (f) {
        for (let k of f instanceof AggregateError ? f.errors : [ f ]) d(k);
      }
    },
    definitions: () => r.definitions,
    definitionsOf: a => (e.get(a) ?? []).flatMap(l => r.byName.get(l.definition.name) === l ? [ l.definition ] : []),
    serve() {
      return s = r.hash, r.definitions;
    },
    hasUnservedChange: () => s !== r.hash,
    subscribe: n.subscribe
  };
}

function se(e) {
  let {byName: n, dropped: r} = [ ...e.values() ].flat().reduce((a, l) => {
    let S = l.definition.name;
    if (a.byName.has(S)) a.dropped.push(S); else a.byName.set(S, l);
    return a;
  }, {
    byName: new Map,
    dropped: []
  }), s = [ ...n.values() ].map(a => a.definition);
  return {
    byName: n,
    definitions: s,
    dropped: r,
    hash: uL(_(s))
  };
}

var we = 0, q = 1, Ce = -32603, de = Symbol("device-bridge-token-deadline"), ce = "__synthetic_init__", V = 33554432;

function Ae(e) {
  let n = new globalThis.WebSocket(e, {
    proxy: Dw(e),
    tls: YS() || void 0
  });
  return n.binaryType = "arraybuffer", n;
}

class ee {
  options;
  onclose;
  onerror;
  onmessage;
  onevent;
  started=!1;
  closing=!1;
  ws;
  pendingToken;
  authenticated=!1;
  connectGeneration=0;
  handshakeTimer;
  negotiated;
  constructor(e) {
    this.options = e;
  }
  async start() {
    if (this.started) throw Error("DeviceBridgeTransport start can only be called once.");
    this.started = !0;
  }
  async close() {
    if (this.closing) return;
    this.closing = !0, this.disconnect(), this.emit({
      kind: "transport_closed"
    }), this.onclose?.();
  }
  async send(e) {
    if (Pe(e)) return;
    let n = this.ws;
    if (!n || !this.authenticated || n.readyState !== q) {
      this.emit({
        kind: "outbound_dropped",
        messageType: Z(e) === void 0 ? "other" : "request"
      });
      return;
    }
    try {
      n.send(_(e));
    } catch (r) {
      t(`[deviceBridge] outbound send failed: ${j(r).message}`), this.emit({
        kind: "outbound_dropped",
        messageType: Z(e) === void 0 ? "other" : "request"
      });
    }
  }
  sendRaw(e) {
    let n = this.ws;
    if (!n || n.readyState !== q) return !1;
    try {
      n.send(e);
    } catch (r) {
      return t(`[deviceBridge] raw send failed: ${j(r).message}`), !1;
    }
    return !0;
  }
  isAuthenticated() {
    return this.authenticated;
  }
  isConnected() {
    return this.ws !== void 0;
  }
  getNegotiated() {
    return this.negotiated;
  }
  async openConnection() {
    if (this.closing || this.ws) return;
    let e = ++this.connectGeneration, n = await this.resolveAccessToken();
    if (e !== this.connectGeneration || this.closing || this.ws !== void 0) return;
    if (!n) {
      this.emit({
        kind: "token_unavailable"
      });
      return;
    }
    let r, s;
    try {
      r = this.options.getUrl(), s = (this.options.isAllowedUrl ?? xPr)(r);
    } catch (l) {
      this.emit({
        kind: "dial_failed",
        error: j(l)
      });
      return;
    }
    if (!s) {
      t("[deviceBridge] refusing dial: bridge URL failed validation"), this.emit({
        kind: "dial_failed",
        error: Error("bridge URL failed validation")
      });
      return;
    }
    let a;
    try {
      a = (this.options.createSocket ?? Ae)(r);
    } catch (l) {
      this.emit({
        kind: "dial_failed",
        error: j(l)
      });
      return;
    }
    if (this.ws = a, this.pendingToken = n, this.handshakeTimer = setTimeout(this.handleHandshakeTimeout, u1r), 
    a.addEventListener("open", this.handleOpen), a.addEventListener("message", this.handleMessage), 
    a.addEventListener("close", this.handleClose), a.addEventListener("error", this.handleSocketError), 
    this.emit({
      kind: "connecting"
    }), this.closing || this.ws !== a) return;
    if (a.readyState === q) this.handleOpen();
  }
  async resolveAccessToken() {
    let e;
    try {
      let n = await Promise.race([ Promise.resolve(this.options.getAccessToken()), new Promise(r => {
        e = setTimeout(s => s(de), u1r, r);
      }) ]);
      if (n === de) {
        t("[deviceBridge] access token resolution timed out");
        return;
      }
      return n;
    } catch (n) {
      t(`[deviceBridge] access token resolution failed: ${j(n).message}`);
      return;
    } finally {
      if (e !== void 0) clearTimeout(e);
    }
  }
  disconnect() {
    this.connectGeneration++, this.clearHandshakeTimer(), this.pendingToken = void 0, 
    this.authenticated = !1, this.negotiated = void 0;
    let e = this.ws;
    if (!e) return;
    if (this.ws = void 0, e.removeEventListener("open", this.handleOpen), e.removeEventListener("message", this.handleMessage), 
    e.removeEventListener("close", this.handleClose), e.removeEventListener("error", this.handleSocketError), 
    e.readyState === q || e.readyState === we) try {
      e.close();
    } catch (n) {
      t(`[deviceBridge] socket close failed: ${j(n).message}`);
    }
  }
  emit(e) {
    try {
      this.onevent?.(e);
    } catch (n) {
      t(`[deviceBridge] transport event listener threw: ${j(n).message}`);
    }
  }
  clearHandshakeTimer() {
    if (this.handshakeTimer === void 0) return;
    clearTimeout(this.handshakeTimer), this.handshakeTimer = void 0;
  }
  handleHandshakeTimeout=() => {
    if (this.handshakeTimer = void 0, !this.ws || this.authenticated) return;
    this.disconnect(), this.emit({
      kind: "handshake_timeout"
    });
  };
  handleOpen=() => {
    let e = this.ws, n = this.pendingToken;
    if (!e || n === void 0) return;
    this.pendingToken = void 0;
    try {
      e.send(_(CGo({
        oauthToken: n,
        tools: this.options.getTools(),
        deviceId: this.options.getDeviceId?.(),
        sessionId: this.options.getSessionId()
      })));
    } catch (r) {
      this.disconnect(), this.emit({
        kind: "dial_failed",
        error: j(r)
      });
    }
  };
  handleMessage=e => {
    let n = Ie(e.data);
    if (n.kind === "unsupported") {
      t("[deviceBridge] dropping unsupported inbound payload type"), this.emit({
        kind: "inbound_invalid",
        error: Error("unsupported inbound payload type")
      });
      return;
    }
    if (n.kind === "oversize") {
      t(`[deviceBridge] dropping ${n.size}-unit inbound frame (cap ${V})`), this.emit({
        kind: "inbound_invalid",
        error: Error("inbound frame exceeded the device bridge size cap")
      });
      return;
    }
    let r = RGo(n.text);
    switch (r.kind) {
     case "ignored":
      if (this.authenticated) t("[deviceBridge] dropping unparseable inbound frame"), 
      this.emit({
        kind: "inbound_invalid",
        error: Error("unparseable inbound frame")
      });
      return;

     case "hb_ack":
      this.emit({
        kind: "hb_ack"
      });
      return;

     case "error":
      this.handleReject(r.reason, r.status, r.detail);
      return;

     case "connected":
      this.authenticate(r.protocolVersion, r.timings);
      return;

     case "unknown":
      this.emit({
        kind: "inbound_unknown",
        frameType: r.frameType
      });
      return;

     case "rpc":
      this.deliver(r.message);
      return;
    }
  };
  authenticate(e, n) {
    if (this.authenticated) return;
    if (this.clearHandshakeTimer(), this.authenticated = !0, this.negotiated = {
      protocolVersion: e,
      timings: n
    }, this.emit({
      kind: "authenticated",
      protocolVersion: e,
      timings: n
    }), this.closing || this.ws === void 0) return;
    this.injectSyntheticInitialize();
  }
  injectSyntheticInitialize() {
    let e;
    try {
      e = this.options.parseMessage(Oe());
    } catch (n) {
      this.emit({
        kind: "inbound_invalid",
        error: j(n)
      });
      return;
    }
    try {
      this.onmessage?.(e);
    } catch (n) {
      this.emit({
        kind: "inbound_invalid",
        error: j(n)
      });
    }
  }
  handleReject(e, n, r) {
    let s = !this.authenticated;
    this.disconnect(), this.emit({
      kind: "rejected",
      phase: s ? "pre_auth" : "post_auth",
      reason: e,
      status: n,
      detail: r,
      slotContention: s && AGo(e)
    });
  }
  deliver(e) {
    if (!this.authenticated) return;
    let n;
    try {
      n = this.options.parseMessage(e);
    } catch (r) {
      this.emit({
        kind: "inbound_invalid",
        error: j(r)
      }), this.replyInternalError(e);
      return;
    }
    try {
      this.onmessage?.(n);
    } catch (r) {
      this.emit({
        kind: "inbound_invalid",
        error: j(r)
      }), this.replyInternalError(e);
    }
  }
  replyInternalError(e) {
    let n = Z(e);
    if (n === void 0) return;
    this.sendRaw(_({
      jsonrpc: "2.0",
      id: n,
      error: {
        code: Ce,
        message: "internal error"
      }
    }));
  }
  handleClose=e => {
    let n = this.authenticated ? "post_auth" : "pre_auth", r = typeof e.code === "number" ? e.code : void 0, s = typeof e.reason === "string" ? e.reason : void 0;
    this.disconnect(), this.emit({
      kind: "closed",
      phase: n,
      code: r,
      reason: s,
      superseded: r === TGo
    });
  };
  handleSocketError=() => {
    this.emit({
      kind: "socket_error"
    });
  };
}

function Oe() {
  return {
    jsonrpc: "2.0",
    id: ce,
    method: "initialize",
    params: {
      protocolVersion: "2024-11-05",
      capabilities: {},
      clientInfo: {
        name: "remote-tools-bridge",
        version: "1.0.0"
      }
    }
  };
}

function Pe(e) {
  return "id" in e && e.id === ce && ("result" in e || "error" in e);
}

var Be = p(() => u({
  jsonrpc: A("2.0"),
  id: $e([ o(), v() ]),
  method: o(),
  result: cI().optional(),
  error: cI().optional()
}));

function Z(e) {
  let n = Be().safeParse(e);
  return n.success ? n.data.id : void 0;
}

function Ie(e) {
  if (typeof e === "string") return e.length > V ? {
    kind: "oversize",
    size: e.length
  } : {
    kind: "text",
    text: e
  };
  if (e instanceof ArrayBuffer) return e.byteLength > V ? {
    kind: "oversize",
    size: e.byteLength
  } : {
    kind: "text",
    text: Buffer.from(e).toString("utf8")
  };
  if (ArrayBuffer.isView(e)) return e.byteLength > V ? {
    kind: "oversize",
    size: e.byteLength
  } : {
    kind: "text",
    text: Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8")
  };
  return {
    kind: "unsupported"
  };
}

function le(e) {
  return {
    policy: e.policy,
    get description() {
      return e.description;
    },
    onRedescribed: e.onRedescribed,
    heldServedCall: e.heldServedCall,
    ensureSettingsHeld: e.ensureSettingsHeld,
    deps: e.deps
  };
}

function he(e) {
  let n = () => _([ e.definitionsOf($_t), e.definitionsOf(zze) ]);
  return {
    native: () => e.definitionsOf($_t).flatMap(Le),
    passthrough: () => e.definitionsOf(zze).flatMap(ue),
    localNameFor: r => e.definitionsOf(zze).filter(s => s.name === r).flatMap(ue)[0]?.local_name,
    subscribe: r => {
      let s = n();
      return e.subscribe(a => {
        let l = n();
        if (l !== s) s = l, r(a);
      });
    }
  };
}

function Le(e) {
  let n = JUn(e._meta?.[EO]);
  return n === void 0 ? [] : [ {
    name: e.name,
    refused_input_fields: n.refused_input_fields,
    protocol_versions: n.protocol_versions ?? [ ru ],
    description: e.description,
    input_schema: e.inputSchema
  } ];
}

function ue(e) {
  let n = t2t(e._meta?.[mhe]);
  if (n === void 0) return [];
  let r = Ne(e.annotations ?? {}), s = xe(e._meta ?? {});
  return [ {
    name: e.name,
    local_name: n.tool,
    description: e.description,
    input_schema: e.inputSchema,
    ...r !== void 0 && {
      annotations: r
    },
    ...s !== void 0 && {
      hints: s
    }
  } ];
}

function Ne({title: e, readOnlyHint: n, destructiveHint: r, openWorldHint: s}) {
  let a = {
    ...e !== void 0 && {
      title: e
    },
    ...n !== void 0 && {
      readOnlyHint: n
    },
    ...r !== void 0 && {
      destructiveHint: r
    },
    ...s !== void 0 && {
      openWorldHint: s
    }
  };
  return Object.keys(a).length > 0 ? a : void 0;
}

function xe(e) {
  let n = e[fB.searchHint], r = e[fB.alwaysLoad], s = e[fB.maxResultSizeChars], a = e[fB.requiresUserInteraction], l = {
    ...typeof n === "string" && {
      search_hint: n
    },
    ...r === !0 && {
      always_load: !0
    },
    ...typeof s === "number" && {
      max_result_size_chars: s
    },
    ...a === !0 && {
      requires_user_interaction: !0
    }
  };
  return Object.keys(l).length > 0 ? l : void 0;
}

var Ge = "wss://bridge.claudeusercontent.com", He = "wss://bridge-staging.claudeusercontent.com", ve = 8, We = "served-bridge-trusted-devices", fe = typeof {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.299",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-13T21:37:33Z",
  GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
  HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "default"
} < "u" ? {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.299",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-13T21:37:33Z",
  GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
  HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "default"
}.VERSION : "unknown";

function ze(e, n) {
  let r = lZe(e), s = m1r(or(n).slice(-ve), ve);
  return s ? `${r}-cc-${s}` : r;
}

function Ke(e, n, r, s) {
  return `${e}/devices/${encodeURIComponent(n)}_${encodeURIComponent(r)}/${encodeURIComponent(s)}/bridge`;
}

function qe(e, n) {
  let r, s;
  try {
    r = new URL(e), s = new URL(n);
  } catch {
    return !1;
  }
  let a = r.hostname === "localhost" || r.hostname === "127.0.0.1" || r.hostname === "[::1]";
  return r.origin === s.origin && r.username === "" && r.password === "" && (r.protocol === "wss:" || r.protocol === "ws:" && a);
}

function Ve() {
  if (tr.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== void 0) return tr.CLAUDE_REMOTE_TOOLS_BRIDGE_URL;
  switch (e6()) {
   case "":
    return Ge;

   case "-staging-oauth":
    return He;

   default:
    return;
  }
}

function WFt(e) {
  let n = e.transport ?? (gN() ? "bridge" : "auto"), r = !1, s, a, l, S, b = !1, w = !1, f = !1, k = new Set, I = !1, R, E, D = {
    current: void 0
  }, M = h => S ??= G(h), G = async h => {
    if (r = !0, a?.(), a = void 0, b) await B.catch(() => !1);
    s?.(), s = void 0, l?.(), l = void 0, D.current?.kit.dispose(), await J(h);
  }, J = async h => {
    let T = R;
    if (T === void 0) return;
    if (R = void 0, await T.stop(), w) i("tengu_device_bridge_stopped", {
      reason: c(h)
    });
  }, H = async () => {
    let h = e.readiness ?? (await import("./chunk-bg0fsayq.js")).createServingReadiness(), T = performance.now();
    await h.whenReady();
    let U = Math.round(performance.now() - T), {cloudClient: W} = e, y = await (e.isEnabled ?? (() => d1r({
      cloudClient: W
    })))();
    if (b = !0, !y) return !1;
    let F = e.isEgressAllowed ?? Zhe;
    if (!F()) return t("[deviceBridge] skipped: non-essential egress disabled, non-first-party provider, or remote sessions policy-denied"), 
    !1;
    if (r) return !1;
    if (n === "bridge" && (e.isBridgeRefused ?? qSo)()) return t("[deviceBridge] skipped: the bridge cannot check a device proof and trusted devices are required or unknown"), 
    f = !0, m("device_bridge_register", "trusted_devices_required_or_unknown"), e.onNotice?.(We, Ki["serving_off.bridge_trusted_devices"]), 
    !1;
    let C = await (e.getAccount ?? jle)(), z = e.orgUuid;
    if (!z || C.status !== "resolved") return i("tengu_device_bridge_skipped", {
      missing_org: z === void 0,
      missing_account: C.status === "missing",
      account_mismatch: C.status === "mismatch"
    }), t(`[deviceBridge] skipped: ${z ? `account ${C.status}` : "no org"}`), !1;
    let {accountUuid: ge} = C, _e = Rgn(Cgn);
    if (E = ae(), E.setGroup(Z9n, []), await KNe(), r) return !1;
    let K = gY(void 0, {
      ignoringMute: !0
    });
    if (K === void 0 && O() === "windows") bR();
    let te = K === void 0 && iZe() ? await import("./chunk-b9pvdm2f.js").then(P => P.gatherHostInventory(ke())).catch(P => {
      d(j(P));
      return;
    }) : void 0, be = e.toolGroupProviders ?? await Xe(K);
    if (r) return !1;
    let Q = [];
    l = Ze(be, {
      registry: E,
      holdStartUntil: P => Q.push(P),
      sessionId: e.sessionId,
      serving: {
        offReason: K
      },
      getDeviceId: e.getDeviceId ?? (() => {}),
      limiter: _e,
      storageV5: e.storageV5,
      servedSettingsChanged: e.servedSettingsChanged,
      ...e.deviceMcpQuestion && {
        deviceMcpQuestion: e.deviceMcpQuestion
      },
      servingKit: D,
      transport: n,
      readiness: h,
      ...te !== void 0 && {
        hostInventory: te
      },
      ...e.dirSync !== void 0 && {
        dirSync: e.dirSync
      },
      ...e.folderRelation !== void 0 && {
        folderRelation: e.folderRelation
      },
      onNotice: e.onNotice ?? ((P, De) => {
        t(`[remote-tools] ${P}: ${De}`);
      })
    }), t(`[deviceBridge] start-up held on ${Q.length} reads of its tool groups`);
    let Te = performance.now();
    await Promise.allSettled(Q);
    let ie = Math.round(performance.now() - Te);
    if (t(`[deviceBridge] start-up released after ${ie} ms`), r) return !1;
    let ye = E;
    if (n === "bridge") {
      if (R = await Je({
        options: e,
        orgUuid: z,
        accountUuid: ge,
        registry: ye,
        isEgressAllowed: F,
        isStopped: () => r,
        onLivenessEvent: L,
        onTransportEvent: Y
      }), R === void 0 || r) return await (R?.stop()), R = void 0, !1;
    }
    let re = () => {
      if (!F()) M("egress_denied");
    }, Se = e.isStillEnabled ?? (() => rHe({
      cloudClient: W
    }) === void 0), oe = () => {
      if (!Se()) t("[deviceBridge] stopping: the gate turned off"), M("gate_off");
    }, Re = (e.onEgressGateChange ?? oee)(re), Ee = (e.onEnabledChange ?? Bd)(oe);
    if (a = () => {
      Re(), Ee();
    }, re(), oe(), r) return !1;
    if (w = !0, i("tengu_device_bridge_started", {
      account_source: c(C.source),
      transport: c(n),
      redial: !1,
      readiness_wait_ms: U,
      held_ms: ie
    }), n === "auto" && !f) f = !0, g("device_bridge_register");
    return R?.start(), !0;
  }, Y = h => {
    if (h.kind === "authenticated") {
      if (k.clear(), I = !1, !f) f = !0, g("device_bridge_register");
      me(h);
      return;
    }
    let T = Ye(h);
    if (T === void 0) return;
    if (k.has(T)) return;
    k.add(T), me(h);
  }, L = h => {
    if (h.kind === "reconnect_exhausted") {
      if (!f) f = !0, m("device_bridge_register", "reconnect_exhausted");
      if (I) return;
      I = !0;
    }
    Qe(h);
  };
  s = (e.registerExitCleanup ?? bt)(() => M("exit"));
  let B = H().catch(h => {
    if (t(`[deviceBridge] registration failed: ${j(h).message}`), i("tengu_device_bridge_start_failed", {}), 
    !f) f = !0, m("device_bridge_register", "start_failed");
    return !1;
  }), x = B.then(h => h && E !== void 0 && D.current !== void 0 ? {
    kit: le(D.current.kit),
    source: he(E)
  } : void 0);
  return B.then(h => {
    if (!h && !r) s?.(), s = void 0, l?.(), l = void 0, D.current?.kit.dispose();
  }), {
    started: B,
    announceSettled: () => {},
    serving: x,
    stop: () => M("attach_ended"),
    heldServedCall: h => r || D.current === void 0 ? p2 : D.current.kit.heldServedCall(h)
  };
}

async function Je({options: e, orgUuid: n, accountUuid: r, registry: s, isEgressAllowed: a, isStopped: l, onLivenessEvent: S, onTransportEvent: b}) {
  let w = ze((e.getHostname ?? Fe)(), e.sessionId), f = e.getBridgeBaseUrl !== void 0 || tr.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== void 0, k = (e.getBridgeBaseUrl ?? Ve)();
  if (k === void 0) {
    t("[deviceBridge] skipped: no device bridge for this OAuth environment");
    return;
  }
  let I = Ke(k, n, r, w), {createDeviceMcpServer: R, deviceInfoProbeTool: E, parseJsonRpcMessage: D} = await import("./chunk-5zbg8sdg.js");
  if (l()) return;
  let M = {
    getDeviceName: () => w,
    version: fe
  }, G = E(M), J = E({
    ...M,
    idle: !0
  }), H = y => {
    let F = s.definitions().every(C => C.name === G.definition.name);
    s.setGroup(Z9n, [ F ? J : G ], y);
  };
  H();
  let Y = s.subscribe(H), L = () => {
    Y(), s.setGroup(Z9n, []);
  }, B = new ee({
    getUrl: () => I,
    getAccessToken: () => e.getAccessToken(),
    getTools: () => en(s),
    getDeviceId: e.getDeviceId,
    getSessionId: () => sd(e.sessionId),
    parseMessage: D,
    createSocket: e.createSocket,
    isAllowedUrl: y => a() && (xPr(y) || f && qe(y, k))
  }), {server: x, inFlightCalls: h, whenIdle: T} = R({
    registry: s,
    version: fe,
    sessionId: e.sessionId
  });
  try {
    await x.connect(B);
  } catch (y) {
    throw L(), y;
  }
  if (l()) {
    L(), await x.close();
    return;
  }
  let U = new X({
    transport: B,
    announced: {
      hasUnservedChange: s.hasUnservedChange,
      inFlightCalls: h,
      whenIdle: T
    },
    onEvent: S,
    onTransportEvent: b
  }), W = s.subscribe(y => U.requestReannounce(y)), ne;
  return {
    start: () => U.start(),
    stop: () => ne ??= (async () => {
      W(), L(), await Promise.allSettled([ U.stop(), x.close() ]);
    })()
  };
}

function Ye(e) {
  switch (e.kind) {
   case "rejected":
    return `rejected:${e.phase}:${e.reason ?? ""}:${e.status ?? ""}`;

   case "closed":
    return `closed:${e.phase}:${e.code ?? ""}:${e.superseded}`;

   case "token_unavailable":
   case "handshake_timeout":
   case "socket_error":
   case "dial_failed":
    return e.kind;

   default:
    return;
  }
}

function me(e) {
  switch (e.kind) {
   case "authenticated":
    i("tengu_device_bridge_connected", {
      protocol_version: e.protocolVersion,
      hb_interval_ms: e.timings.hbIntervalMs,
      staleness_ms: e.timings.stalenessMs,
      rpc_timeout_ms: e.timings.rpcTimeoutMs
    });
    return;

   case "rejected":
    i("tengu_device_bridge_rejected", {
      phase: c(e.phase),
      reason: pe(e.reason),
      status: kq(e.status),
      slot_contention: e.slotContention
    });
    return;

   case "closed":
    i("tengu_device_bridge_closed", {
      phase: c(e.phase),
      code: kq(e.code),
      superseded: e.superseded
    });
    return;

   case "token_unavailable":
   case "handshake_timeout":
   case "socket_error":
    i("tengu_device_bridge_connect_failed", {
      cause: c(e.kind)
    });
    return;

   case "dial_failed":
    i("tengu_device_bridge_connect_failed", {
      cause: c("dial_failed")
    });
    return;

   default:
    return;
  }
}

function Qe(e) {
  switch (e.kind) {
   case "pong_timeout":
    i("tengu_device_bridge_pong_timeout", {
      consecutive: e.consecutive
    });
    return;

   case "reconnect_exhausted":
    i("tengu_device_bridge_reconnect_exhausted", {});
    return;

   case "heartbeat_unsupported":
    i("tengu_device_bridge_heartbeat_unsupported", {
      protocol_version: Gr(e.protocolVersion)
    });
    return;

   case "reannounce":
    i("tengu_device_bridge_reannounce", {
      reason: c(e.reason),
      outcome: c(e.outcome),
      inflight_at_start: e.inFlightAtStart,
      drained_ms: e.drainedMs,
      drain_timed_out: e.drainTimedOut
    });
    return;

   case "reannounce_contended":
    i("tengu_device_bridge_reannounce_contended", {
      reason: c(e.reason)
    });
    return;

   default:
    return;
  }
}

async function Xe(e) {
  if (e === void 0 || qNe(e)) try {
    let [{remoteToolServingGroupProvider: n}, {passthroughServingGroupProvider: r}, s] = await Promise.all([ import("./chunk-21r45zv7.js"), import("./chunk-65qxnj3s.js"), void 0 ]);
    return e === void 0 ? [ n(), r(), ...[] ] : [ n() ];
  } catch (n) {
    d(j(n));
  }
  return [];
}

function Ze(e, n) {
  let r = e.flatMap(s => {
    try {
      let a = s(n);
      return a ? [ a ] : [];
    } catch (a) {
      return d(j(a)), [];
    }
  });
  return () => r.forEach(s => {
    try {
      s();
    } catch (a) {
      d(j(a));
    }
  });
}

function en(e) {
  let n = e.hasUnservedChange(), r = e.serve();
  if (!n) return r;
  let s = r.map(a => a.name);
  return t(`[deviceBridge] connect frame announces ${r.length} tools: ${s.slice(0, 12).join(", ")}${s.length > 12 ? ", \u2026" : ""}`), 
  i("tengu_device_bridge_connect_frame", {
    tool_count: r.length,
    serves_bash: s.includes(je),
    serves_powershell: s.includes(Rt),
    mcp_tool_count: N(s, a => a.includes("__"))
  }), r;
}

export { WFt };
