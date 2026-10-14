// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { fqr, IJ, n4, hne, _Te, WL, Aer } from "./chunk-qjb8dzm4.js";

class ker {
  constructor(e = {}) {
    this._started = !1, this._hasHandledRequest = !1, this._streamMapping = new Map, 
    this._requestToStreamMapping = new Map, this._requestResponseMap = new Map, this._initialized = !1, 
    this._enableJsonResponse = !1, this._standaloneSseStreamId = "_GET_stream", this.sessionIdGenerator = e.sessionIdGenerator, 
    this._enableJsonResponse = e.enableJsonResponse ?? !1, this._eventStore = e.eventStore, 
    this._onsessioninitialized = e.onsessioninitialized, this._onsessionclosed = e.onsessionclosed, 
    this._allowedHosts = e.allowedHosts, this._allowedOrigins = e.allowedOrigins, this._enableDnsRebindingProtection = e.enableDnsRebindingProtection ?? !1, 
    this._retryInterval = e.retryInterval;
  }
  async start() {
    if (this._started) throw Error("Transport already started");
    this._started = !0;
  }
  createJsonErrorResponse(e, t, s, i) {
    let r = {
      code: t,
      message: s
    };
    if (i?.data !== void 0) r.data = i.data;
    return new Response(JSON.stringify({
      jsonrpc: "2.0",
      error: r,
      id: null
    }), {
      status: e,
      headers: {
        "Content-Type": "application/json",
        ...i?.headers
      }
    });
  }
  validateRequestHeaders(e) {
    if (!this._enableDnsRebindingProtection) return;
    if (this._allowedHosts && this._allowedHosts.length > 0) {
      let t = e.headers.get("host");
      if (!t || !this._allowedHosts.includes(t)) {
        let s = `Invalid Host header: ${t}`;
        return this.onerror?.(Error(s)), this.createJsonErrorResponse(403, -32e3, s);
      }
    }
    if (this._allowedOrigins && this._allowedOrigins.length > 0) {
      let t = e.headers.get("origin");
      if (t && !this._allowedOrigins.includes(t)) {
        let s = `Invalid Origin header: ${t}`;
        return this.onerror?.(Error(s)), this.createJsonErrorResponse(403, -32e3, s);
      }
    }
    return;
  }
  async handleRequest(e, t) {
    if (!this.sessionIdGenerator && this._hasHandledRequest) throw Error("Stateless transport cannot be reused across requests. Create a new transport per request.");
    this._hasHandledRequest = !0;
    let s = this.validateRequestHeaders(e);
    if (s) return s;
    switch (e.method) {
     case "POST":
      return this.handlePostRequest(e, t);

     case "GET":
      return this.handleGetRequest(e);

     case "DELETE":
      return this.handleDeleteRequest(e);

     default:
      return this.handleUnsupportedRequest();
    }
  }
  async writePrimingEvent(e, t, s, i) {
    if (!this._eventStore) return;
    if (i < "2025-11-25") return;
    let r = await this._eventStore.storeEvent(s, {}), n = `id: ${r}\ndata: \n\n`;
    if (this._retryInterval !== void 0) n = `id: ${r}\nretry: ${this._retryInterval}\ndata: \n\n`;
    e.enqueue(t.encode(n));
  }
  async handleGetRequest(e) {
    if (!e.headers.get("accept")?.includes("text/event-stream")) return this.onerror?.(Error("Not Acceptable: Client must accept text/event-stream")), 
    this.createJsonErrorResponse(406, -32e3, "Not Acceptable: Client must accept text/event-stream");
    let s = this.validateSession(e);
    if (s) return s;
    let i = this.validateProtocolVersion(e);
    if (i) return i;
    if (this._eventStore) {
      let l = e.headers.get("last-event-id");
      if (l) return this.replayEvents(l);
    }
    if (this._streamMapping.get(this._standaloneSseStreamId) !== void 0) return this.onerror?.(Error("Conflict: Only one SSE stream is allowed per session")), 
    this.createJsonErrorResponse(409, -32e3, "Conflict: Only one SSE stream is allowed per session");
    let r = new TextEncoder, n, o = new ReadableStream({
      start: l => {
        n = l;
      },
      cancel: () => {
        this._streamMapping.delete(this._standaloneSseStreamId);
      }
    }), a = {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive"
    };
    if (this.sessionId !== void 0) a["mcp-session-id"] = this.sessionId;
    return this._streamMapping.set(this._standaloneSseStreamId, {
      controller: n,
      encoder: r,
      cleanup: () => {
        this._streamMapping.delete(this._standaloneSseStreamId);
        try {
          n.close();
        } catch {}
      }
    }), new Response(o, {
      headers: a
    });
  }
  async replayEvents(e) {
    if (!this._eventStore) return this.onerror?.(Error("Event store not configured")), 
    this.createJsonErrorResponse(400, -32e3, "Event store not configured");
    try {
      let t;
      if (this._eventStore.getStreamIdForEventId) {
        if (t = await this._eventStore.getStreamIdForEventId(e), !t) return this.onerror?.(Error("Invalid event ID format")), 
        this.createJsonErrorResponse(400, -32e3, "Invalid event ID format");
        if (this._streamMapping.get(t) !== void 0) return this.onerror?.(Error("Conflict: Stream already has an active connection")), 
        this.createJsonErrorResponse(409, -32e3, "Conflict: Stream already has an active connection");
      }
      let s = {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive"
      };
      if (this.sessionId !== void 0) s["mcp-session-id"] = this.sessionId;
      let i = new TextEncoder, r, n = new ReadableStream({
        start: a => {
          r = a;
        },
        cancel: () => {}
      }), o = await this._eventStore.replayEventsAfter(e, {
        send: async (a, l) => {
          if (!this.writeSSEEvent(r, i, l, a)) {
            this.onerror?.(Error("Failed replay events"));
            try {
              r.close();
            } catch {}
          }
        }
      });
      return this._streamMapping.set(o, {
        controller: r,
        encoder: i,
        cleanup: () => {
          this._streamMapping.delete(o);
          try {
            r.close();
          } catch {}
        }
      }), new Response(n, {
        headers: s
      });
    } catch (t) {
      return this.onerror?.(t), this.createJsonErrorResponse(500, -32e3, "Error replaying events");
    }
  }
  writeSSEEvent(e, t, s, i) {
    try {
      let r = `event: message\n`;
      if (i) r += `id: ${i}\n`;
      return r += `data: ${JSON.stringify(s)}\n\n`, e.enqueue(t.encode(r)), !0;
    } catch (r) {
      return this.onerror?.(r), !1;
    }
  }
  handleUnsupportedRequest() {
    return this.onerror?.(Error("Method not allowed.")), new Response(JSON.stringify({
      jsonrpc: "2.0",
      error: {
        code: -32e3,
        message: "Method not allowed."
      },
      id: null
    }), {
      status: 405,
      headers: {
        Allow: "GET, POST, DELETE",
        "Content-Type": "application/json"
      }
    });
  }
  async handlePostRequest(e, t) {
    try {
      let s = e.headers.get("accept");
      if (!s?.includes("application/json") || !s.includes("text/event-stream")) return this.onerror?.(Error("Not Acceptable: Client must accept both application/json and text/event-stream")), 
      this.createJsonErrorResponse(406, -32e3, "Not Acceptable: Client must accept both application/json and text/event-stream");
      let i = e.headers.get("content-type");
      if (!i || !i.includes("application/json")) return this.onerror?.(Error("Unsupported Media Type: Content-Type must be application/json")), 
      this.createJsonErrorResponse(415, -32e3, "Unsupported Media Type: Content-Type must be application/json");
      let r = {
        headers: Object.fromEntries(e.headers.entries()),
        url: new URL(e.url)
      }, n;
      if (t?.parsedBody !== void 0) n = t.parsedBody; else try {
        n = await e.json();
      } catch {
        return this.onerror?.(Error("Parse error: Invalid JSON")), this.createJsonErrorResponse(400, -32700, "Parse error: Invalid JSON");
      }
      let o;
      try {
        if (Array.isArray(n)) o = n.map(d => WL.parse(d)); else o = [ WL.parse(n) ];
      } catch {
        return this.onerror?.(Error("Parse error: Invalid JSON-RPC message")), this.createJsonErrorResponse(400, -32700, "Parse error: Invalid JSON-RPC message");
      }
      let a = o.some(Aer);
      if (a) {
        if (this._initialized && this.sessionId !== void 0) return this.onerror?.(Error("Invalid Request: Server already initialized")), 
        this.createJsonErrorResponse(400, -32600, "Invalid Request: Server already initialized");
        if (o.length > 1) return this.onerror?.(Error("Invalid Request: Only one initialization request is allowed")), 
        this.createJsonErrorResponse(400, -32600, "Invalid Request: Only one initialization request is allowed");
        if (this.sessionId = this.sessionIdGenerator?.(), this._initialized = !0, this.sessionId && this._onsessioninitialized) await Promise.resolve(this._onsessioninitialized(this.sessionId));
      }
      if (!a) {
        let d = this.validateSession(e);
        if (d) return d;
        let h = this.validateProtocolVersion(e);
        if (h) return h;
      }
      if (!o.some(n4)) {
        for (let d of o) this.onmessage?.(d, {
          authInfo: t?.authInfo,
          requestInfo: r
        });
        return new Response(null, {
          status: 202
        });
      }
      let c = crypto.randomUUID(), u = o.find(d => Aer(d)), f = u ? u.params.protocolVersion : e.headers.get("mcp-protocol-version") ?? fqr;
      if (this._enableJsonResponse) return new Promise(d => {
        this._streamMapping.set(c, {
          resolveJson: d,
          cleanup: () => {
            this._streamMapping.delete(c);
          }
        });
        for (let h of o) if (n4(h)) this._requestToStreamMapping.set(h.id, c);
        for (let h of o) this.onmessage?.(h, {
          authInfo: t?.authInfo,
          requestInfo: r
        });
      });
      let S = new TextEncoder, p, v = new ReadableStream({
        start: d => {
          p = d;
        },
        cancel: () => {
          this._streamMapping.delete(c);
        }
      }), m = {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive"
      };
      if (this.sessionId !== void 0) m["mcp-session-id"] = this.sessionId;
      for (let d of o) if (n4(d)) this._streamMapping.set(c, {
        controller: p,
        encoder: S,
        cleanup: () => {
          this._streamMapping.delete(c);
          try {
            p.close();
          } catch {}
        }
      }), this._requestToStreamMapping.set(d.id, c);
      await this.writePrimingEvent(p, S, c, f);
      for (let d of o) {
        let h, E;
        if (n4(d) && this._eventStore && f >= "2025-11-25") h = () => {
          this.closeSSEStream(d.id);
        }, E = () => {
          this.closeStandaloneSSEStream();
        };
        this.onmessage?.(d, {
          authInfo: t?.authInfo,
          requestInfo: r,
          closeSSEStream: h,
          closeStandaloneSSEStream: E
        });
      }
      return new Response(v, {
        status: 200,
        headers: m
      });
    } catch (s) {
      return this.onerror?.(s), this.createJsonErrorResponse(400, -32700, "Parse error", {
        data: String(s)
      });
    }
  }
  async handleDeleteRequest(e) {
    let t = this.validateSession(e);
    if (t) return t;
    let s = this.validateProtocolVersion(e);
    if (s) return s;
    return await Promise.resolve(this._onsessionclosed?.(this.sessionId)), await this.close(), 
    new Response(null, {
      status: 200
    });
  }
  validateSession(e) {
    if (this.sessionIdGenerator === void 0) return;
    if (!this._initialized) return this.onerror?.(Error("Bad Request: Server not initialized")), 
    this.createJsonErrorResponse(400, -32e3, "Bad Request: Server not initialized");
    let t = e.headers.get("mcp-session-id");
    if (!t) return this.onerror?.(Error("Bad Request: Mcp-Session-Id header is required")), 
    this.createJsonErrorResponse(400, -32e3, "Bad Request: Mcp-Session-Id header is required");
    if (t !== this.sessionId) return this.onerror?.(Error("Session not found")), this.createJsonErrorResponse(404, -32001, "Session not found");
    return;
  }
  validateProtocolVersion(e) {
    let t = e.headers.get("mcp-protocol-version");
    if (t !== null && !IJ.includes(t)) return this.onerror?.(Error(`Bad Request: Unsupported protocol version: ${t} (supported versions: ${IJ.join(", ")})`)), 
    this.createJsonErrorResponse(400, -32e3, `Bad Request: Unsupported protocol version: ${t} (supported versions: ${IJ.join(", ")})`);
    return;
  }
  async close() {
    this._streamMapping.forEach(({cleanup: e}) => {
      e();
    }), this._streamMapping.clear(), this._requestResponseMap.clear(), this.onclose?.();
  }
  closeSSEStream(e) {
    let t = this._requestToStreamMapping.get(e);
    if (!t) return;
    let s = this._streamMapping.get(t);
    if (s) s.cleanup();
  }
  closeStandaloneSSEStream() {
    let e = this._streamMapping.get(this._standaloneSseStreamId);
    if (e) e.cleanup();
  }
  async send(e, t) {
    let s = t?.relatedRequestId;
    if (hne(e) || _Te(e)) s = e.id;
    if (s === void 0) {
      if (hne(e) || _Te(e)) throw Error("Cannot send a response on a standalone SSE stream unless resuming a previous client request");
      let n;
      if (this._eventStore) n = await this._eventStore.storeEvent(this._standaloneSseStreamId, e);
      let o = this._streamMapping.get(this._standaloneSseStreamId);
      if (o === void 0) return;
      if (o.controller && o.encoder) this.writeSSEEvent(o.controller, o.encoder, e, n);
      return;
    }
    let i = this._requestToStreamMapping.get(s);
    if (!i) throw Error(`No connection established for request ID: ${String(s)}`);
    let r = this._streamMapping.get(i);
    if (!this._enableJsonResponse && r?.controller && r?.encoder) {
      let n;
      if (this._eventStore) n = await this._eventStore.storeEvent(i, e);
      this.writeSSEEvent(r.controller, r.encoder, e, n);
    }
    if (hne(e) || _Te(e)) {
      this._requestResponseMap.set(s, e);
      let n = Array.from(this._requestToStreamMapping.entries()).filter(([a, l]) => l === i).map(([a]) => a);
      if (n.every(a => this._requestResponseMap.has(a))) {
        if (!r) throw Error(`No connection established for request ID: ${String(s)}`);
        if (this._enableJsonResponse && r.resolveJson) {
          let a = {
            "Content-Type": "application/json"
          };
          if (this.sessionId !== void 0) a["mcp-session-id"] = this.sessionId;
          let l = n.map(c => this._requestResponseMap.get(c));
          if (l.length === 1) r.resolveJson(new Response(JSON.stringify(l[0]), {
            status: 200,
            headers: a
          })); else r.resolveJson(new Response(JSON.stringify(l), {
            status: 200,
            headers: a
          }));
        } else r.cleanup();
        for (let a of n) this._requestResponseMap.delete(a), this._requestToStreamMapping.delete(a);
      }
    }
  }
}

export { ker };
