// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _kn, lKt, Htt, Dvt, lrr, drr, DDe, zI, eVe, tVe, VJ, iJo, crr, bkn, dKt } from "./chunk-m0teq4gy.js";

import { LDe, Skn, Y5r, X5r, lJo, dJo, cJo, NDe } from "./chunk-7f3bx3dq.js";

import { xle, W6 } from "./chunk-qjb8dzm4.js";

import { Rle } from "./chunk-g9n1m2vk.js";

import g from "ws";

var m = /^[A-Za-z0-9-]{1,64}$/;

function f(e = "linux") {
  return e === "darwin" ? "macOS" : e === "win32" ? "Windows" : "Linux";
}

function N(e) {
  return {
    on: (n, t) => {
      e.on(n, t);
    },
    removeAllListeners: () => e.removeAllListeners(),
    send: n => e.send(n),
    close: (n, t) => {
      if (e.readyState === g.OPEN) e.close(n, t); else e.terminate();
    },
    get readyState() {
      return e.readyState;
    }
  };
}

var O = 3e4, C = 9e4, B = {
  persisted: "the last-picked",
  only: "the only connected",
  local: "this computer's"
}, L = 3e4, q = new Set([ "external_message", "external_message_result", "external_config" ]), S = 3e4;

function v(e, n) {
  if (typeof e !== "string") return;
  let t = e.replace(/[\r\n\t\u0000-\u001f]/g, " ").trim();
  return t.length > n ? `${t.slice(0, n)}\u2026` : t;
}

function U(e) {
  if (typeof e.deviceId !== "string" || !m.test(e.deviceId)) return;
  return {
    deviceId: e.deviceId,
    name: v(e.name, 50),
    osPlatform: v(e.osPlatform, 30),
    connectedAt: typeof e.connectedAt === "number" ? e.connectedAt : 0
  };
}

var y = 4;

function W(e, n) {
  if (!Array.isArray(e)) return;
  let t = new Map, s = (o, i) => {
    if (t.has(o)) {
      t.set(o, i);
      return;
    }
    if (t.size >= y) {
      n?.(`sanitizeBridgeNotices: notice cap (${y}) reached; dropping entry`);
      return;
    }
    t.set(o, i);
  };
  for (let o of e) {
    if (typeof o !== "object" || o === null) continue;
    let {kind: i, domain: r} = o;
    if (typeof i !== "string" || !/^[a-z0-9_]{1,64}$/i.test(i)) continue;
    let a = i.toLowerCase();
    if (r === void 0) s(`${a}:`, {
      kind: a
    }); else if (typeof r === "string" && r.length <= 253 && /^[a-z0-9.-]+$/i.test(r)) {
      let c = r.toLowerCase().replace(/\.$/, "");
      if (c.length === 0) continue;
      s(`${a}:${c}`, {
        kind: a,
        domain: c
      });
    }
  }
  return t.size > 0 ? Array.from(t.values()) : void 0;
}

class _ {
  ws=null;
  connected=!1;
  authenticated=!1;
  connecting=!1;
  reconnectTimer=null;
  handshakeTimer=null;
  reconnectAttempts=0;
  pendingCalls=new Map;
  timedOutCalls=new Map;
  notificationHandler=null;
  context;
  permissionMode="ask";
  allowedDomains;
  connectionStartTime=null;
  connectionEstablishedTime=null;
  selectedDeviceId;
  discoveryComplete=!1;
  multiBrowserPendingSelection=!1;
  discoveryPromise=null;
  pendingDiscovery=null;
  listExtensionsPromise=null;
  previousSelectedDeviceId;
  peerConnectedWaiters=[];
  pendingPairingRequestId;
  pairingInProgress=!1;
  persistedDeviceId;
  pendingSwitchResolve=null;
  pairingPromptAbort=null;
  pairingPromptTimeout=null;
  keepAliveInterval=null;
  lastPongReceived=0;
  pendingExternalMessages=new Map;
  constructor(e) {
    if (this.context = e, e.initialPermissionMode) this.permissionMode = e.initialPermissionMode;
  }
  async ensureConnected() {
    let {logger: e, serverName: n} = this.context;
    if (e.info(`[${n}] ensureConnected called, connected=${this.connected}, authenticated=${this.authenticated}, wsState=${this.ws?.readyState}`), 
    this.connected && this.authenticated && this.ws?.readyState === g.OPEN) return e.info(`[${n}] Already connected and authenticated`), 
    !0;
    if (!this.connecting && !this.reconnectTimer) e.info(`[${n}] Not connecting, starting connection...`), 
    await this.connect(); else e.info(`[${n}] Connect in progress or reconnect scheduled, waiting...`);
    return new Promise(t => {
      let s = null, o = setTimeout(() => {
        if (s) clearTimeout(s);
        e.info(`[${n}] Connection timeout, connected=${this.connected}, authenticated=${this.authenticated}`), 
        t(!1);
      }, 1e4), i = () => {
        if (this.connected && this.authenticated) e.info(`[${n}] Connection successful`), 
        clearTimeout(o), t(!0); else if (!this.connecting && !this.reconnectTimer) e.info(`[${n}] No longer connecting, giving up`), 
        clearTimeout(o), t(!1); else s = setTimeout(i, 200);
      };
      i();
    });
  }
  async callTool(e, n, t) {
    let {logger: s, serverName: o, trackEvent: i} = this.context;
    if (!this.ws || this.ws.readyState !== g.OPEN) throw new zI(`[${o}] Bridge not connected`);
    if (!this.selectedDeviceId && (!this.discoveryComplete || this.multiBrowserPendingSelection)) this.discoveryPromise ??= this.discoverAndSelectExtension().finally(() => {
      this.discoveryPromise = null;
    }), await this.discoveryPromise;
    if (this.discoveryComplete && !this.selectedDeviceId && !this.pairingInProgress && !this.multiBrowserPendingSelection) throw new eVe(`[${o}] No Chrome extension connected after discovery`);
    let r = t?.sessionScope?.sessionId, a = t?.sessionScope?.userMessageUuid, c = this.context.browserActivityObserver?.onBeforeToolCall;
    if (c) {
      let p = this.selectedDeviceId;
      try {
        await c({
          sessionId: r,
          toolName: e,
          args: n
        });
      } catch {
        s.debug(`[${o}] browser activity observer threw`);
      }
      if (!this.ws || this.ws.readyState !== g.OPEN) throw new zI(`[${o}] Bridge disconnected before tool call was sent`);
      if (p !== void 0 && this.selectedDeviceId === void 0) throw new VJ("Chrome extension disconnected mid-call");
    }
    let d = crypto.randomUUID(), u = Date.now(), l = this.context.getToolCallTimeoutMs?.(e) ?? LDe, h = {
      type: "tool_call",
      tool_use_id: d,
      client_type: this.context.clientTypeId,
      tool: e,
      args: n,
      supports_tool_result_notices: !0
    };
    if (this.selectedDeviceId) h.target_device_id = this.selectedDeviceId;
    Object.assign(h, drr({
      ...t,
      permissionMode: t?.permissionMode ?? this.permissionMode,
      allowedDomains: t?.allowedDomains ?? this.allowedDomains
    }));
    let P = JSON.stringify(h);
    return i?.("chrome_bridge_tool_call_started", {
      tool_name: `browser:${e}`,
      tool_use_id: d,
      session_id: r,
      user_message_uuid: a,
      timeout_ms: l,
      transport: "bridge",
      request_bytes: Buffer.byteLength(P, "utf-8")
    }), new Promise((p, M) => {
      let A = this.createTimeoutTimer(d, l);
      this.pendingCalls.set(d, {
        resolve: p,
        reject: M,
        timer: A,
        onPermissionRequest: t?.onPermissionRequest,
        startTime: u,
        toolName: e,
        timeoutMs: l,
        sessionId: r,
        userMessageUuid: a,
        args: n
      }), s.debug(`[${o}] Sending tool_call: ${DDe(e)} (${d.slice(0, 8)})`), this.ws.send(P);
    });
  }
  sendExternalMessage(e, n, t) {
    let {logger: s, serverName: o} = this.context;
    if (!this.ws || this.ws.readyState !== g.OPEN) return Promise.reject(new zI(`[${o}] Bridge not connected`));
    if (!this.selectedDeviceId) return s.info(`[${o}] external_message refused: no extension selected`), 
    Promise.resolve({
      ok: !1,
      error: "no_target"
    });
    this.pushExternalConfig();
    let i = crypto.randomUUID(), r = t?.timeoutMs, a = Math.min(typeof r === "number" && Number.isFinite(r) && r > 0 ? r : X5r, lJo), c = {
      type: "external_message",
      requestId: i,
      extensionIds: [ ...e ],
      payload: n,
      timeoutMs: a,
      target_device_id: this.selectedDeviceId
    };
    return new Promise(d => {
      let u = setTimeout(() => {
        if (this.pendingExternalMessages.delete(i)) s.warn(`[${o}] external_message timed out locally (${i.slice(0, 8)})`), 
        d({
          ok: !1,
          error: "timeout"
        });
      }, a + L);
      this.pendingExternalMessages.set(i, {
        resolve: d,
        timer: u
      }), s.debug(`[${o}] Sending external_message (${i.slice(0, 8)})`);
      try {
        this.ws.send(JSON.stringify(c));
      } catch (l) {
        clearTimeout(u), this.pendingExternalMessages.delete(i), s.warn(`[${o}] external_message serialization/send failed: ${l instanceof Error ? l.message : String(l)}`), 
        d({
          ok: !1,
          error: "send_failed"
        });
      }
    });
  }
  pushExternalConfig(e) {
    if (this.selectedDeviceId === void 0) return !1;
    return this.pushExternalConfigToPeer(this.selectedDeviceId, e);
  }
  pushExternalConfigToPeer(e, n) {
    if (this.ws?.readyState !== g.OPEN) return !1;
    let t = n;
    if (!t) {
      if (!this.context.getExternalRelayConfig) return !1;
      t = this.context.getExternalRelayConfig() ?? {
        extensionIds: []
      };
    }
    return this.ws.send(JSON.stringify({
      type: "external_config",
      extensionIds: t.extensionIds,
      ...t.hooks !== void 0 && {
        hooks: t.hooks
      },
      target_device_id: e
    })), !0;
  }
  async pushExternalConfigToAllPeers(e) {
    if (this.ws?.readyState !== g.OPEN) return 0;
    if (!e && !this.context.getExternalRelayConfig) return 0;
    let n = await this.queryBridgeExtensions(), t = 0;
    for (let s of n) if (this.pushExternalConfigToPeer(s.deviceId, e)) t++;
    return t;
  }
  isConnected() {
    return this.connected && this.authenticated && this.ws?.readyState === g.OPEN;
  }
  disconnect() {
    this.cleanup();
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
  }
  async discoverAndSelectExtension() {
    let {logger: e, serverName: n} = this.context;
    this.persistedDeviceId = this.context.getPersistedDeviceId?.();
    let t = await this.queryBridgeExtensions();
    if (t.length === 0) {
      if (e.info(`[${n}] No extensions connected, waiting up to ${Skn}ms for peer_connected`), 
      await this.waitForPeerConnected(Skn)) t = await this.queryBridgeExtensions();
    }
    if (this.context.getRequirePairedDevice?.()) {
      if (!this.persistedDeviceId) {
        e.info(`[${n}] requirePairedDevice set but no persistedDeviceId; refusing to auto-select`), 
        this.discoveryComplete = !0;
        return;
      }
      let i = this.persistedDeviceId, r = t.find(a => a.deviceId === i);
      if (!r) {
        if (e.info(`[${n}] requirePairedDevice: persisted ${i.slice(0, 8)} not connected (${t.length} other(s) visible); waiting`), 
        await this.waitForPeerConnected(Skn)) t = await this.queryBridgeExtensions(), r = t.find(a => a.deviceId === i);
      }
      if (this.discoveryComplete = !0, r) this.selectExtension(r.deviceId); else e.info(`[${n}] requirePairedDevice: persisted device never arrived; refusing to auto-select`);
      return;
    }
    let s = t.length > 1 && !t.some(i => i.deviceId === this.persistedDeviceId) ? await lKt(this.context.getLocalDeviceIds) : void 0;
    if (this.discoveryComplete = !0, this.selectedDeviceId) return;
    let o = _kn(t, this.persistedDeviceId, s);
    if (o.kind === "none") {
      e.info(`[${n}] No extensions found after waiting`), this.multiBrowserPendingSelection = !1;
      return;
    }
    if (o.kind === "select") {
      let {extension: i, reason: r} = o;
      if (e.info(`[${n}] Auto-connecting to ${B[r]} extension: ${i.name || i.deviceId.slice(0, 8)}`), 
      r === "only" && !this.isLocalExtension(i)) this.context.onRemoteExtensionWarning?.(i);
      this.selectExtension(i.deviceId), this.reportBrowserSelected(r, t, s);
      return;
    }
    if (!this.multiBrowserPendingSelection) this.reportBrowserSelected("ask", t, s);
    if (this.context.askUserToolName) {
      this.multiBrowserPendingSelection = !0;
      return;
    }
    this.broadcastPairingRequest(), this.pairingInProgress = !0, this.firePairingPrompt();
  }
  reportBrowserSelected(e, n, t) {
    this.context.trackEvent?.("chrome_bridge_browser_selected", {
      outcome: e,
      connected_count: n.length,
      local_count: t === void 0 ? null : n.filter(s => t.has(s.deviceId)).length
    });
  }
  queryBridgeExtensions() {
    if (this.listExtensionsPromise) return this.listExtensionsPromise;
    let e = new Promise(n => {
      let t = setTimeout(() => {
        this.pendingDiscovery = null, n([]);
      }, Y5r);
      this.pendingDiscovery = {
        resolve: n,
        timeout: t
      }, this.ws?.send(JSON.stringify({
        type: "list_extensions"
      }));
    }).then(n => {
      let t = new Map;
      for (let s of n) {
        let o = t.get(s.deviceId);
        if (!o || s.connectedAt > o.connectedAt) t.set(s.deviceId, s);
      }
      return [ ...t.values() ].map(U).filter(s => s !== void 0);
    });
    return this.listExtensionsPromise = e, e.finally(() => {
      if (this.listExtensionsPromise === e) this.listExtensionsPromise = null;
    }), e;
  }
  getSelectedDeviceId() {
    return this.selectedDeviceId ?? this.context.getPersistedDeviceId?.();
  }
  hasActiveSelection() {
    return this.selectedDeviceId !== void 0;
  }
  clearSelection() {
    this.selectedDeviceId = void 0, this.previousSelectedDeviceId = void 0, this.discoveryComplete = !1, 
    this.multiBrowserPendingSelection = !1, this.pairingInProgress = !1, this.abortPairingPrompt();
  }
  selectExtension(e) {
    let {logger: n, serverName: t} = this.context;
    this.selectedDeviceId = e, this.previousSelectedDeviceId = void 0, this.multiBrowserPendingSelection = !1, 
    n.info(`[${t}] Selected Chrome extension: ${e.slice(0, 8)}...`), this.pushExternalConfig();
  }
  async clearSelectionIfGone(e) {
    let {logger: n, serverName: t} = this.context, s = await this.queryBridgeExtensions();
    if (this.selectedDeviceId !== e) return;
    if (s.some(o => o.deviceId === e)) return;
    n.info(`[${t}] Selected extension ${e.slice(0, 8)} absent from bridge roster after error; clearing selection`), 
    this.selectedDeviceId = void 0, this.discoveryComplete = !1;
  }
  async listConnectedExtensions() {
    if (!await this.ensureConnected()) return [];
    let e = await this.queryBridgeExtensions(), n = e.length > 1 ? await lKt(this.context.getLocalDeviceIds) : void 0;
    return e.map(t => ({
      ...t,
      isLocal: this.isLocalExtension(t),
      ...n?.has(t.deviceId) && {
        onThisComputer: !0
      }
    }));
  }
  selectExtensionById(e, n) {
    if (this.discoveryComplete = !0, this.pairingInProgress = !1, this.pendingPairingRequestId = void 0, 
    this.selectExtension(e), this.context.onExtensionPaired?.(e, n), this.pendingSwitchResolve) this.pendingSwitchResolve({
      deviceId: e,
      name: n
    });
    this.abortPairingPrompt();
  }
  firePairingPrompt() {
    if (this.abortPairingPrompt(), !this.context.onPairingPrompted) return;
    let e = new AbortController;
    this.pairingPromptAbort = e, this.pairingPromptTimeout = setTimeout(() => this.abortPairingPrompt(), 12e4), 
    this.context.onPairingPrompted(e.signal);
  }
  abortPairingPrompt() {
    if (this.pairingPromptTimeout) clearTimeout(this.pairingPromptTimeout), this.pairingPromptTimeout = null;
    if (this.pairingPromptAbort) this.pairingPromptAbort.abort(), this.pairingPromptAbort = null;
  }
  isLocalExtension(e) {
    if (!e.osPlatform) return !1;
    return e.osPlatform === f(this.context.getHostPlatform?.() ?? "linux");
  }
  waitForPeerConnected(e) {
    return new Promise(n => {
      let t = setTimeout(() => {
        this.peerConnectedWaiters = this.peerConnectedWaiters.filter(o => o !== s), n(!1);
      }, e), s = o => {
        clearTimeout(t), n(o);
      };
      this.peerConnectedWaiters.push(s);
    });
  }
  broadcastPairingRequest() {
    let e = crypto.randomUUID();
    this.pendingPairingRequestId = e, this.ws?.send(JSON.stringify({
      type: "pairing_request",
      request_id: e,
      client_type: this.context.clientTypeId
    }));
  }
  async switchBrowser() {
    let e = await this.queryBridgeExtensions(), n = this.selectedDeviceId ?? this.previousSelectedDeviceId;
    if (e.length === 0 || e.length === 1 && (!n || e[0].deviceId === n)) return "no_other_browsers";
    this.previousSelectedDeviceId = this.selectedDeviceId, this.selectedDeviceId = void 0, 
    this.discoveryComplete = !1, this.pairingInProgress = !1;
    let t = crypto.randomUUID();
    if (this.pendingPairingRequestId = t, this.ws?.readyState !== g.OPEN) return null;
    if (this.ws.send(JSON.stringify({
      type: "pairing_request",
      request_id: t,
      client_type: this.context.clientTypeId
    })), this.firePairingPrompt(), this.pendingSwitchResolve) this.pendingSwitchResolve(null);
    return new Promise(s => {
      let o = setTimeout(() => {
        if (this.pendingPairingRequestId === t) this.pendingPairingRequestId = void 0;
        this.pendingSwitchResolve = null, this.abortPairingPrompt(), s(null);
      }, 12e4);
      this.pendingSwitchResolve = i => {
        clearTimeout(o), this.pendingSwitchResolve = null, s(i);
      };
    });
  }
  async connect() {
    let {logger: e, serverName: n, bridgeConfig: t, trackEvent: s} = this.context;
    if (!t) {
      e.error(`[${n}] No bridge config provided`);
      return;
    }
    if (this.connecting) return;
    this.connecting = !0, this.authenticated = !1, this.connectionStartTime = Date.now(), 
    this.closeSocket(), this.handshakeTimer = setTimeout(() => {
      if (this.handshakeTimer = null, !this.connecting) return;
      let a = this.ws?.readyState;
      if (e.warn(`[${n}] Bridge connect stuck after ${S}ms (ws_state=${a})`), s?.("chrome_bridge_handshake_timeout", {
        duration_ms: Date.now() - (this.connectionStartTime ?? 0),
        ws_state: a
      }), a === void 0) return;
      this.connecting = !1, this.closeSocket(), this.scheduleReconnect();
    }, S);
    let o, i;
    if (t.devUserId) o = t.devUserId, e.debug(`[${n}] Using dev user ID for bridge connection`); else {
      e.debug(`[${n}] Fetching user ID for bridge connection`);
      let a, c;
      if (t.getUserIdResult) {
        let d = await t.getUserIdResult();
        if (d.ok) c = d.userId; else a = d.error;
      } else c = await t.getUserId();
      if (!c) {
        let d = Date.now() - this.connectionStartTime;
        e.error(`[${n}] No user ID available after ${d}ms`), s?.("chrome_bridge_connection_failed", {
          duration_ms: d,
          error_type: "no_user_id",
          error_detail: a,
          reconnect_attempt: this.reconnectAttempts
        }), this.connecting = !1, this.scheduleReconnect();
        return;
      }
      if (o = c, e.debug(`[${n}] Fetching OAuth token for bridge connection`), i = await t.getOAuthToken(), 
      !i) {
        let d = Date.now() - this.connectionStartTime;
        e.error(`[${n}] No OAuth token available after ${d}ms`), s?.("chrome_bridge_connection_failed", {
          duration_ms: d,
          error_type: "no_oauth_token",
          reconnect_attempt: this.reconnectAttempts
        }), this.connecting = !1, this.scheduleReconnect();
        return;
      }
    }
    let r = `${t.url}/chrome/${o}`;
    e.info(`[${n}] Connecting to bridge: ${r}`), s?.("chrome_bridge_connection_started", {
      bridge_url: r
    });
    try {
      if (t.createWebSocket) this.ws = await t.createWebSocket(r); else {
        let a = await (t.getWsOptions?.()) ?? t.wsOptions;
        this.ws = N(new g(r, a ? {
          ...a,
          tls: a
        } : void 0));
      }
    } catch (a) {
      let c = Date.now() - this.connectionStartTime;
      e.error(`[${n}] Failed to create WebSocket after ${c}ms:`, a), s?.("chrome_bridge_connection_failed", {
        duration_ms: c,
        error_type: "websocket_error",
        error_code: a?.code,
        reconnect_attempt: this.reconnectAttempts
      }), this.connecting = !1, this.scheduleReconnect();
      return;
    }
    this.ws.on("open", () => {
      e.info(`[${n}] WebSocket connected, sending connect message`);
      let a = {
        type: "connect",
        client_type: this.context.clientTypeId
      };
      if (t.devUserId) a.dev_user_id = t.devUserId; else a.oauth_token = i;
      this.ws?.send(JSON.stringify(a));
    }), this.ws.on("message", a => {
      try {
        let c = a.toString(), d = JSON.parse(c);
        if (q.has(d.type)) e.debug(`[${n}] Bridge received: ${String(d.type)} (ok=${String(d.ok)})`); else if (e.isDebugEnabled?.() ?? !0) e.debug(`[${n}] Bridge received: ${JSON.stringify(d)}`);
        this.handleMessage(d, Buffer.byteLength(c, "utf-8"));
      } catch (c) {
        e.error(`[${n}] Failed to parse bridge message:`, c);
      }
    }), this.ws.on("close", a => {
      let c = this.connectionEstablishedTime ? Date.now() - this.connectionEstablishedTime : 0;
      e.info(`[${n}] Bridge connection closed (code: ${a}, duration: ${c}ms)`), s?.("chrome_bridge_disconnected", {
        close_code: a,
        duration_since_connect_ms: c,
        reconnect_attempt: this.reconnectAttempts + 1
      }), this.connected = !1, this.authenticated = !1, this.connecting = !1, this.connectionEstablishedTime = null, 
      this.rejectPendingCalls(new zI("Bridge connection closed mid-call")), this.scheduleReconnect();
    }), this.ws.on("error", a => {
      let c = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
      e.error(`[${n}] Bridge WebSocket error after ${c}ms: ${a.message}`), s?.("chrome_bridge_connection_failed", {
        duration_ms: c,
        error_type: "websocket_error",
        error_code: a.code,
        reconnect_attempt: this.reconnectAttempts
      }), this.connected = !1, this.authenticated = !1, this.connecting = !1, this.rejectPendingCalls(new zI(`Bridge connection error: ${a.message}`));
    });
  }
  handleMessage(e, n) {
    let {logger: t, serverName: s, trackEvent: o} = this.context;
    switch (e.type) {
     case "paired":
      {
        let i = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
        t.info(`[${s}] Paired with Chrome extension (duration: ${i}ms)`), this.connected = !0, 
        this.authenticated = !0, this.connecting = !1, this.reconnectAttempts = 0, this.connectionEstablishedTime = Date.now(), 
        this.startKeepAlive(), o?.("chrome_bridge_connection_succeeded", {
          duration_ms: i,
          status: "paired"
        }), this.pushExternalConfigToAllPeers(), this.context.onPeerRosterChanged?.();
        break;
      }

     case "waiting":
      {
        let i = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
        t.info(`[${s}] Waiting for Chrome extension to connect (duration: ${i}ms)`), this.connected = !0, 
        this.authenticated = !0, this.connecting = !1, this.reconnectAttempts = 0, this.connectionEstablishedTime = Date.now(), 
        this.startKeepAlive(), o?.("chrome_bridge_connection_succeeded", {
          duration_ms: i,
          status: "waiting"
        });
        break;
      }

     case "peer_connected":
      if (t.info(`[${s}] Chrome extension connected to bridge`), o?.("chrome_bridge_peer_connected", null), 
      !this.selectedDeviceId) this.discoveryComplete = !1;
      if (this.previousSelectedDeviceId && e.deviceId === this.previousSelectedDeviceId && !this.pendingSwitchResolve) t.info(`[${s}] Previously selected extension reconnected, auto-reselecting`), 
      this.selectExtension(this.previousSelectedDeviceId), this.previousSelectedDeviceId = void 0;
      if (this.peerConnectedWaiters.length > 0) {
        let i = this.peerConnectedWaiters;
        this.peerConnectedWaiters = [];
        for (let r of i) r(!0);
      }
      if (typeof e.deviceId === "string" && m.test(e.deviceId)) this.pushExternalConfigToPeer(e.deviceId); else this.pushExternalConfig();
      this.context.onPeerRosterChanged?.();
      break;

     case "peer_disconnected":
      {
        let i = e.deviceId;
        if (t.info(`[${s}] Chrome extension disconnected from bridge (deviceId=${i ?? "none"}, selected=${this.selectedDeviceId ?? "none"})`), 
        o?.("chrome_bridge_peer_disconnected", {
          disconnected_device_id: i ?? null,
          selected_device_id: this.selectedDeviceId ?? null,
          had_match: i !== null && i !== void 0 && i === this.selectedDeviceId,
          pending_calls: this.pendingCalls.size
        }), this.context.onPeerDisconnected?.({
          deviceId: i,
          wasSelected: i !== null && i !== void 0 && i === this.selectedDeviceId
        }), e.deviceId && e.deviceId === this.selectedDeviceId) t.info(`[${s}] Selected extension disconnected, clearing selection`), 
        this.previousSelectedDeviceId = this.selectedDeviceId, this.selectedDeviceId = void 0, 
        this.discoveryComplete = !1, this.rejectPendingCalls(new VJ("Chrome extension disconnected mid-call")); else if (!this.selectedDeviceId && this.multiBrowserPendingSelection) this.discoveryComplete = !1, 
        this.multiBrowserPendingSelection = !1;
        this.context.onPeerRosterChanged?.();
        break;
      }

     case "routing_ack":
      {
        o?.("chrome_bridge_routing_ack", {
          tool_use_id: e.tool_use_id ?? null,
          routed_to: e.routed_to ?? null,
          target_connected_at: e.target_connected_at ?? null,
          target_pong_age_ms: e.target_pong_age_ms ?? null,
          extension_sockets: e.extension_sockets ?? null,
          mcp_sockets: e.mcp_sockets ?? null
        });
        let i = this.pendingCalls.get(e.tool_use_id ?? "");
        if (i) i.routingAckReceived = !0, i.routingAckPongAgeMs = e.target_pong_age_ms ?? null;
        break;
      }

     case "extensions_list":
      if (this.pendingDiscovery) clearTimeout(this.pendingDiscovery.timeout), this.pendingDiscovery.resolve(e.extensions ?? []), 
      this.pendingDiscovery = null;
      break;

     case "pairing_response":
      {
        let i = e.request_id;
        if (this.pendingPairingRequestId !== i) break;
        if (e.dismissed === !0) {
          t.info(`[${s}] Pairing prompt dismissed in extension`), this.abortPairingPrompt();
          break;
        }
        let r = typeof e.device_id === "string" && m.test(e.device_id) ? e.device_id : void 0, a = v(e.name, 50);
        if (r && a) {
          if (this.pendingPairingRequestId = void 0, this.pairingInProgress = !1, this.selectExtension(r), 
          this.context.onExtensionPaired?.(r, a), this.abortPairingPrompt(), t.info(`[${s}] Paired with "${a}" (${r.slice(0, 8)})`), 
          this.pendingSwitchResolve) this.pendingSwitchResolve({
            deviceId: r,
            name: a
          }), this.pendingSwitchResolve = null;
        }
        break;
      }

     case "ping":
      this.ws?.send(JSON.stringify({
        type: "pong"
      }));
      break;

     case "pong":
      this.lastPongReceived = Date.now();
      break;

     case "tool_result":
      this.handleToolResult(e, n);
      break;

     case "external_message_result":
      {
        let i = typeof e.requestId === "string" ? e.requestId : void 0, r = i ? this.pendingExternalMessages.get(i) : void 0;
        if (!i || !r) {
          t.debug(`[${s}] external_message_result for unknown request: ${i?.slice(0, 8) ?? "none"}`);
          break;
        }
        if (clearTimeout(r.timer), this.pendingExternalMessages.delete(i), e.ok === !0) r.resolve({
          ok: !0,
          response: e.response
        }); else {
          let a = e.error;
          r.resolve({
            ok: !1,
            error: a === "no_target" || a === "timeout" ? a : "send_failed"
          });
        }
        break;
      }

     case "external_message":
     case "external_config":
      break;

     case "permission_request":
      this.handlePermissionRequest(e).catch(i => {
        t.error(`[${s}] Error handling permission_request:`, i);
      });
      break;

     case "notification":
      if (typeof e.method !== "string") t.warn(`[${s}] Dropped a notification whose method is not a string`); else this.notificationHandler?.({
        method: e.method,
        params: e.params
      });
      break;

     case "error":
      if (t.warn(`[${s}] Bridge error: ${e.error}`), this.selectedDeviceId) this.clearSelectionIfGone(this.selectedDeviceId);
      break;

     default:
      t.warn(`[${s}] Unrecognized bridge message type: ${e.type}`);
    }
  }
  async handlePermissionRequest(e) {
    let {logger: n, serverName: t} = this.context, {tool_use_id: s, request_id: o} = e;
    if (typeof s !== "string" || typeof o !== "string") {
      n.warn(`[${t}] permission_request missing tool_use_id or request_id`);
      return;
    }
    let i = this.pendingCalls.get(s);
    if (!i?.onPermissionRequest) {
      n.debug(`[${t}] Ignoring permission_request for unknown tool_use_id ${s.slice(0, 8)} (not our call)`);
      return;
    }
    let r = lrr(e, {
      toolUseId: s,
      requestId: o
    });
    clearTimeout(i.timer), i.permissionPaused = !0;
    try {
      let c = await i.onPermissionRequest(r);
      this.sendPermissionResponse(o, c);
    } catch (c) {
      n.error(`[${t}] Error handling permission request:`, c), this.sendPermissionResponse(o, !1);
    }
    let a = this.pendingCalls.get(s);
    if (a) a.timer = this.createTimeoutTimer(s, a.timeoutMs);
  }
  sendPermissionResponse(e, n) {
    if (this.ws?.readyState === g.OPEN) {
      let t = {
        type: "permission_response",
        request_id: e,
        allowed: n
      };
      if (this.selectedDeviceId) t.target_device_id = this.selectedDeviceId;
      this.ws.send(JSON.stringify(t));
    }
  }
  handleToolResult(e, n) {
    let {logger: t, serverName: s, trackEvent: o} = this.context, i = e.tool_use_id;
    if (typeof i !== "string") {
      t.warn(`[${s}] Received tool_result without tool_use_id`);
      return;
    }
    let r = this.pendingCalls.get(i);
    if (!r) {
      t.debug(`[${s}] Received tool_result for unknown call: ${i.slice(0, 8)}`);
      let l = this.timedOutCalls.get(i);
      if (o?.("chrome_bridge_tool_call_late_result", {
        tool_use_id: i,
        gap_from_timeout_ms: l ? Date.now() - l : null,
        reason: l ? "post_timeout" : "unknown",
        is_error: typeof e.is_error === "boolean" ? e.is_error : null
      }), l) this.timedOutCalls.delete(i);
      return;
    }
    let a = Date.now() - r.startTime, c = this.normalizeBridgeResponse(e), d = Boolean(e.is_error) || "error" in c;
    clearTimeout(r.timer), this.pendingCalls.delete(i);
    let u = this.context.browserActivityObserver?.onToolResult;
    if (u) try {
      u({
        sessionId: r.sessionId,
        toolName: r.toolName,
        args: r.args,
        ok: !d,
        resultContent: d ? void 0 : c.result?.content
      });
    } catch {
      t.debug(`[${s}] browser activity observer threw`);
    }
    if (d) {
      let l = Dvt(c.error).slice(0, 200);
      t.warn(`[${s}] Tool call error: ${r.toolName} (${i.slice(0, 8)}) after ${a}ms`);
      let h = Htt(r.toolName, l);
      if (o?.("chrome_bridge_tool_call_error", {
        tool_name: `browser:${r.toolName}`,
        tool_use_id: i,
        duration_ms: a,
        error_type: h,
        session_id: r.sessionId,
        user_message_uuid: r.userMessageUuid,
        transport: "bridge"
      }), !this.selectedDeviceId && !this.pairingInProgress) {
        this.discoveryComplete = !1, r.reject(new VJ(`[${s}] Extension disconnected during tool call: ${r.toolName}`));
        return;
      }
    } else t.debug(`[${s}] Tool call completed: ${r.toolName} (${i.slice(0, 8)}) in ${a}ms`), 
    o?.("chrome_bridge_tool_call_completed", {
      tool_name: `browser:${r.toolName}`,
      tool_use_id: i,
      duration_ms: a,
      session_id: r.sessionId,
      user_message_uuid: r.userMessageUuid,
      transport: "bridge",
      response_bytes: n
    });
    r.resolve(c);
  }
  normalizeBridgeResponse(e) {
    let {notices: n, ...t} = e, s = W(n, i => this.context.logger.warn(`[${this.context.serverName}] ${i}`)), o = s ? {
      notices: s
    } : void 0;
    if (t.result || t.error) return o ? {
      ...t,
      ...o
    } : t;
    if (t.content) {
      if (t.is_error) return {
        error: {
          content: t.content
        },
        ...o
      };
      return {
        result: {
          content: t.content
        },
        ...o
      };
    }
    return o ? {
      ...t,
      ...o
    } : t;
  }
  getTimeoutDiagnostics() {
    let e = -1, n = this.lastPongReceived > 0 ? Date.now() - this.lastPongReceived : void 0;
    return {
      free_mem_pct: e,
      pong_age_ms: n
    };
  }
  createTimeoutTimer(e, n) {
    let {logger: t, serverName: s, trackEvent: o} = this.context;
    return setTimeout(() => {
      let i = this.pendingCalls.get(e);
      if (!i) return;
      if (this.timedOutCalls.set(e, Date.now()), this.timedOutCalls.size > 200) {
        let d = this.timedOutCalls.keys().next().value;
        if (d) this.timedOutCalls.delete(d);
      }
      this.pendingCalls.delete(e);
      let r = Date.now() - i.startTime, a = this.getTimeoutDiagnostics(), c = i.routingAckReceived ?? !1;
      if (t.warn(`[${s}] Tool call timeout: ${i.toolName} (${e.slice(0, 8)}) after ${r}ms, pending calls: ${this.pendingCalls.size}`), 
      o?.("chrome_bridge_tool_call_timeout", {
        tool_name: `browser:${i.toolName}`,
        tool_use_id: e,
        duration_ms: r,
        timeout_ms: n,
        session_id: i.sessionId,
        user_message_uuid: i.userMessageUuid,
        transport: "bridge",
        routing_ack_received: c,
        routing_ack_pong_age_ms: i.routingAckPongAgeMs ?? null,
        permission_paused: i.permissionPaused ?? !1,
        ...a
      }), this.isConnected()) i.reject(new tVe(`[${s}] Tool call timed out: ${i.toolName}`, {
        routingAckReceived: c
      })); else i.reject(new zI(`[${s}] Tool call timed out with bridge disconnected: ${i.toolName}`));
    }, n);
  }
  scheduleReconnect() {
    let {logger: e, serverName: n, trackEvent: t} = this.context;
    if (this.reconnectTimer) return;
    if (this.reconnectAttempts++, this.reconnectAttempts > 100) {
      e.warn(`[${n}] Giving up bridge reconnection after 100 attempts`), t?.("chrome_bridge_reconnect_exhausted", {
        total_attempts: 100
      }), this.reconnectAttempts = 0;
      return;
    }
    let s = Math.min(2e3 * Math.pow(1.5, this.reconnectAttempts - 1), 3e4);
    if (this.reconnectAttempts <= 10 || this.reconnectAttempts % 10 === 0) e.info(`[${n}] Bridge reconnecting in ${Math.round(s)}ms (attempt ${this.reconnectAttempts})`);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, s);
  }
  startKeepAlive() {
    this.stopKeepAlive(), this.lastPongReceived = Date.now();
    let {logger: e, serverName: n} = this.context;
    this.keepAliveInterval = setInterval(() => {
      if (this.ws?.readyState === g.OPEN) this.ws.send(JSON.stringify({
        type: "ping"
      }));
      if (this.lastPongReceived > 0 && Date.now() - this.lastPongReceived > C) e.warn(`[${n}] No pong received in ${C}ms, closing dead connection`), 
      this.rejectPendingCalls(new zI("Bridge keepalive timeout \u2014 connection dead")), 
      this.closeSocket(), this.scheduleReconnect();
    }, O);
  }
  stopKeepAlive() {
    if (this.keepAliveInterval) clearInterval(this.keepAliveInterval), this.keepAliveInterval = null;
    this.lastPongReceived = 0;
  }
  closeSocket() {
    if (this.stopKeepAlive(), this.handshakeTimer) clearTimeout(this.handshakeTimer), 
    this.handshakeTimer = null;
    if (this.ws) this.ws.removeAllListeners(), this.ws.on("error", () => {}), this.ws.close(), 
    this.ws = null;
    if (this.connected = !1, this.authenticated = !1, this.selectedDeviceId) this.previousSelectedDeviceId = this.selectedDeviceId;
    if (this.selectedDeviceId = void 0, this.discoveryComplete = !1, this.multiBrowserPendingSelection = !1, 
    this.pendingPairingRequestId = void 0, this.pairingInProgress = !1, this.abortPairingPrompt(), 
    this.pendingSwitchResolve) this.pendingSwitchResolve(null), this.pendingSwitchResolve = null;
    if (this.pendingDiscovery) clearTimeout(this.pendingDiscovery.timeout), this.pendingDiscovery.resolve([]), 
    this.pendingDiscovery = null;
    if (this.peerConnectedWaiters.length > 0) {
      let e = this.peerConnectedWaiters;
      this.peerConnectedWaiters = [];
      for (let n of e) n(!1);
    }
    this.context.onPeerRosterChanged?.();
  }
  rejectPendingCalls(e) {
    for (let n of this.pendingCalls.values()) clearTimeout(n.timer), n.reject(e);
    this.pendingCalls.clear();
  }
  drainExternalRelays() {
    for (let e of this.pendingExternalMessages.values()) clearTimeout(e.timer), e.resolve({
      ok: !1,
      error: "send_failed"
    });
    this.pendingExternalMessages.clear();
  }
  cleanup() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.rejectPendingCalls(new zI("Bridge client disconnected")), this.drainExternalRelays(), 
    this.closeSocket(), this.reconnectAttempts = 0;
  }
}

function b(e) {
  return new _(e);
}

var F = 300, H = 1e3, J = 3e4, j = 10, G = {
  steps: [ [ 2e3, 30 ] ],
  thenMs: 1e4
}, z = {
  steps: [ [ 2e3, 30 ] ],
  thenMs: 6e4
}, K = {
  steps: [ [ 3e3, 100 ] ],
  thenMs: 1e4
}, X = (e, n, t) => Math.min(e * 1.5 ** (n - 1), t);

function w({steps: e, thenMs: n}, t) {
  let s = 0;
  for (let [o, i] of e) if (s += i, t <= s) return o;
  return n;
}

function Y(e, n) {
  switch (e) {
   case "transport":
    return X(H, n, J);

   case "mismatch":
    return w(K, n);

   case "not_ready":
    return w(G, n);

   case "token":
    return w(z, n);
  }
}

var V = {
  peer_not_ready: "not_ready",
  awaits_token: "token",
  peer_may_move: "mismatch",
  retry: "transport"
}, x = e => ({
  attempts: 0,
  timer: null,
  wanted: !1,
  cadence: e
});

function k(e) {
  return e.replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0085/g, "\\u0085");
}

function Q(e, n) {
  let t = i => k(JSON.stringify(i)), s = e.map(i => {
    let r = i;
    return `  \u2022 tabId ${r.tabId}: ${t(r.title)} (${t(r.url)})`;
  }).join(`\n`), o = {
    availableTabs: e
  };
  if (n !== void 0) o.tabGroupId = n;
  return {
    result: {
      content: [ {
        type: "text",
        text: k(JSON.stringify(o))
      }, {
        type: "text",
        text: `\n\nTab Context:\n- Available tabs:\n${s}`
      } ]
    }
  };
}

class I {
  clients=new Map;
  stragglers=new WeakSet;
  tabRoutes=new Map;
  context;
  notificationHandler=null;
  refreshPromise=null;
  generation=0;
  unwatchSockets=null;
  scanTimer=null;
  dialing=new WeakSet;
  parked=new WeakSet;
  redials=new WeakMap;
  orphaned=new WeakSet;
  constructor(e) {
    this.context = e;
  }
  startProactivePairing() {
    let {localPairing: e, watchSocketPaths: n} = this.context;
    if (!e || !n) return;
    if (!this.unwatchSockets) this.unwatchSockets = n(() => this.scheduleScan());
    this.parked = new WeakSet, this.scheduleScan();
  }
  scheduleScan() {
    if (this.scanTimer) return;
    this.scanTimer = setTimeout(() => {
      this.scanTimer = null, this.dialAvailable();
    }, F), this.scanTimer.unref?.();
  }
  async dialAvailable() {
    if (!this.unwatchSockets || this.context.isDisabled?.()) return;
    let e = this.generation;
    if (this.refreshPromise) await this.refreshPromise;
    if (await this.refreshClients(), e !== this.generation || !this.unwatchSockets) return;
    for (let [n, t] of this.clients.entries()) {
      if (t.isConnected()) {
        this.clearRedial(t);
        continue;
      }
      if (this.parked.has(t) || this.dialing.has(t) || this.redials.get(t)?.timer) continue;
      this.clearRedial(t), this.dial(n, t);
    }
  }
  dial(e, n) {
    this.dialing.add(n);
    let t = this.redials.get(n);
    if (t) t.wanted = !1;
    let s = o => {
      if (this.dialing.delete(n), this.clients.get(e) !== n || this.redials.get(n)?.cadence === "dead") return;
      if (o) {
        this.clearRedial(n);
        return;
      }
      if (this.redials.get(n)?.wanted || n.isConnecting()) {
        this.onRedialWanted(e, n);
        return;
      }
      let i = n.lastPairingRefuseCode(), r = i === void 0 ? "durable" : iJo(i, n.lastPairingRefusePeerReported());
      if (r === "durable") this.parked.add(n); else this.onRedialWanted(e, n, V[r]);
    };
    n.ensureConnected().then(s, () => s(!1));
  }
  onRedialWanted(e, n, t = "transport") {
    if (!this.unwatchSockets || this.clients.get(e) !== n) return;
    if (this.orphaned.has(n)) {
      this.removeClient(e, n);
      return;
    }
    let s = this.redials.get(n) ?? x(t);
    if (s.wanted = !0, s.cadence !== t) s.attempts = 0, s.cadence = t;
    if (this.redials.set(n, s), s.timer) return;
    if (t === "transport" && s.attempts >= j) {
      this.context.logger.info(`[${this.context.serverName}] Giving up on ${e} after ${s.attempts} proactive redials`);
      return;
    }
    s.attempts += 1;
    let o = Y(t, s.attempts);
    s.timer = setTimeout(() => {
      if (s.timer = null, this.unwatchSockets && this.clients.get(e) === n && !this.context.isDisabled?.() && !n.isConnected() && !this.dialing.has(n)) this.dial(e, n);
    }, o), s.timer.unref?.();
  }
  onSocketDead(e, n) {
    if (!this.unwatchSockets || this.clients.get(e) !== n) return;
    this.clearRedial(n), this.redials.set(n, x("dead")), this.refreshClients();
  }
  clearRedial(e) {
    let n = this.redials.get(e);
    if (n?.timer) clearTimeout(n.timer);
    this.redials.delete(e);
  }
  removeClient(e, n) {
    this.context.logger.info(`[${this.context.serverName}] Removing stale socket from pool: ${e}`), 
    this.clearRedial(n), this.orphaned.delete(n), n.disconnect(), this.clients.delete(e);
    for (let [t, s] of this.tabRoutes.entries()) if (s === e) this.tabRoutes.delete(t);
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
    for (let n of this.clients.values()) n.setNotificationHandler(e);
  }
  async ensureConnected() {
    let {logger: e, serverName: n} = this.context;
    await this.refreshClients();
    let t = [], s = [];
    for (let i of this.clients.values()) {
      if (i.isConnected()) {
        this.stragglers.delete(i);
        continue;
      }
      let r = this.stragglers.has(i), a = i.ensureConnected().then(c => {
        if (c) this.stragglers.delete(i); else this.stragglers.add(i);
        return c;
      }, () => (this.stragglers.add(i), !1));
      (r ? s : t).push(a);
    }
    if (await Promise.all(t), this.getConnectedClients().length === 0) await Promise.all(s);
    let o = this.getConnectedClients().length;
    if (o === 0) return e.info(`[${n}] No connected sockets in pool`), !1;
    return e.info(`[${n}] Socket pool: ${o} connected`), !0;
  }
  async callTool(e, n, t) {
    if (e === "tabs_context_mcp") return this.callTabsContext(n, t);
    let s = n.tabId;
    if (s !== void 0) {
      let i = this.tabRoutes.get(s);
      if (i) {
        let r = this.clients.get(i);
        if (r?.isConnected()) return r.callTool(e, n, t);
      }
    }
    let o = this.getConnectedClients();
    if (o.length === 0) throw new zI(`[${this.context.serverName}] No connected sockets available`);
    return o[0].callTool(e, n, t);
  }
  isConnected() {
    return this.getConnectedClients().length > 0;
  }
  disconnect() {
    if (this.generation += 1, this.refreshPromise = null, this.unwatchSockets?.(), this.unwatchSockets = null, 
    this.scanTimer) clearTimeout(this.scanTimer), this.scanTimer = null;
    for (let e of this.clients.values()) this.clearRedial(e), e.disconnect();
    this.clients.clear(), this.tabRoutes.clear();
  }
  getConnectedClients() {
    return [ ...this.clients.values() ].filter(e => e.isConnected());
  }
  async callTabsContext(e, n) {
    let {logger: t, serverName: s} = this.context, o = this.getConnectedClients();
    if (o.length === 0) throw new zI(`[${s}] No connected sockets available`);
    if (o.length === 1) {
      let c = await o[0].callTool("tabs_context_mcp", e, n);
      return this.updateTabRoutes(c, this.getSocketPathForClient(o[0])), c;
    }
    let i = await Promise.allSettled(o.map(async c => {
      let d = await c.callTool("tabs_context_mcp", e, n), u = this.getSocketPathForClient(c);
      return {
        result: d,
        socketPath: u
      };
    })), r = [], a;
    this.tabRoutes.clear();
    for (let c of i) {
      if (c.status !== "fulfilled") {
        t.info(`[${s}] tabs_context_mcp failed on one socket: ${c.reason}`);
        continue;
      }
      let {result: d, socketPath: u} = c.value;
      this.updateTabRoutes(d, u);
      let l = this.extractTabs(d);
      if (l) for (let h of l) r.push(h);
      if (a === void 0) a = this.extractTabGroupId(d);
    }
    if (r.length > 0) return Q(r, a);
    for (let c of i) if (c.status === "fulfilled") return c.value.result;
    throw new zI(`[${s}] All sockets failed for tabs_context_mcp`);
  }
  updateTabRoutes(e, n) {
    let t = this.extractTabs(e);
    if (!t) return;
    for (let s of t) if (typeof s === "object" && s !== null && "tabId" in s) {
      let o = s.tabId;
      this.tabRoutes.set(o, n);
    }
  }
  extractTabs(e) {
    if (!e || typeof e !== "object") return null;
    let t = e.result?.content;
    if (!t || !Array.isArray(t)) return null;
    for (let s of t) if (s.type === "text" && s.text) try {
      let o = JSON.parse(s.text);
      if (Array.isArray(o)) return o;
      let i = o;
      if (i && Array.isArray(i.availableTabs)) return i.availableTabs;
    } catch {}
    return null;
  }
  extractTabGroupId(e) {
    if (!e || typeof e !== "object") return;
    let t = e.result?.content;
    if (!t || !Array.isArray(t)) return;
    for (let s of t) if (s.type === "text" && s.text) try {
      let o = JSON.parse(s.text);
      if (typeof o.tabGroupId === "number") return o.tabGroupId;
    } catch {}
    return;
  }
  getSocketPathForClient(e) {
    for (let [n, t] of this.clients.entries()) if (t === e) return n;
    return "";
  }
  refreshClients() {
    if (!this.refreshPromise) {
      let e = this.doRefreshClients().finally(() => {
        if (this.refreshPromise === e) this.refreshPromise = null;
      });
      this.refreshPromise = e;
    }
    return this.refreshPromise;
  }
  async doRefreshClients() {
    let {logger: e, serverName: n} = this.context, t = this.generation, s;
    try {
      s = await (this.context.getSocketPaths?.()) ?? [];
    } catch (o) {
      e.info(`[${n}] Socket scan failed:`, o);
      return;
    }
    if (t !== this.generation) return;
    for (let o of s) if (!this.clients.has(o)) {
      e.info(`[${n}] Adding socket to pool: ${o}`);
      let i = {
        ...this.context,
        socketPath: o,
        getSocketPath: void 0,
        getSocketPaths: void 0
      }, r = crr(i);
      if (r.disableAutoReconnect = !0, r.onRedialWanted = a => a === "dead" ? this.onSocketDead(o, r) : this.onRedialWanted(o, r, a === "peer_dropped" ? "not_ready" : "transport"), 
      this.notificationHandler) r.setNotificationHandler(this.notificationHandler);
      this.clients.set(o, r);
    }
    for (let [o, i] of this.clients.entries()) if (s.includes(o)) this.orphaned.delete(i); else if (i.isConnected()) this.orphaned.add(i); else this.removeClient(o, i);
  }
}

function T(e) {
  return new I(e);
}

var R = new Map, E = "frontLoadedTabGroupId", Z = [ E, "isBridgeTimeout", "isFrontLoadBoundExceeded" ];

function D(e) {
  return NDe.filter(n => (e.bridgeConfig !== void 0 || !dJo.has(n.name)) && !e.excludedTools?.has(n.name));
}

function DYo(e) {
  return e.bridgeConfig ? b(e) : e.getSocketPaths ? T(e) : crr(e);
}

function G7n(e, n) {
  let {serverName: t, logger: s} = e, o = n ?? DYo(e), i = new Rle({
    name: t,
    version: "1.0.0"
  }, {
    capabilities: {
      tools: {
        listChanged: !0
      },
      logging: {}
    }
  });
  return i.setRequestHandler(xle, () => {
    if (e.isDisabled?.()) return {
      tools: []
    };
    let r = cJo(e.askUserToolName);
    return {
      tools: [ ...D(e).map(c => c.name === "list_connected_browsers" ? {
        ...c,
        description: `${c.description} ${r}`
      } : c), ...e.hostTools?.() ?? [] ]
    };
  }), i.setRequestHandler(W6, async r => {
    s.info(`[${t}] Executing tool: ${DDe(r.params.name)}`);
    let a = e.getRendererSessionScope?.(r.params._meta), c = a ? {
      permissionMode: "ask",
      sessionScope: {
        ...a,
        tabGroupId: R.get(a.sessionId)
      }
    } : void 0, d = await bkn(e, o, r.params.name, r.params.arguments || {}, c);
    if (a && !d.isError) {
      let u = d._meta?.[E], l = typeof u === "number" ? u : r.params.name === "tabs_context_mcp" ? dKt({
        result: d
      }).tabGroupId : void 0;
      if (l !== void 0) R.set(a.sessionId, l);
    }
    if (d._meta) for (let u of Z) delete d._meta[u];
    return d;
  }), o.setNotificationHandler(r => {
    s.info(`[${t}] Forwarding MCP notification: ${DDe(r.method)}`), i.notification({
      method: r.method,
      params: r.params
    }).catch(a => {
      s.info(`[${t}] Failed to forward MCP notification: ${a.message}`);
    });
  }), i;
}

export { DYo, G7n };
