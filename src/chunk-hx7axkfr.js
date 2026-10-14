// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { n4, hne, WL, gqr } from "./chunk-qjb8dzm4.js";

import { Lx, ine, Qke } from "./chunk-4srkdgc7.js";

import { bGt } from "./chunk-gy4n63ab.js";

function Dzt(e) {
  if (!e) return {};
  if (e instanceof Headers) return Object.fromEntries(e.entries());
  if (Array.isArray(e)) return Object.fromEntries(e);
  return {
    ...e
  };
}

function fSt(e = fetch, t) {
  if (!t) return e;
  return async (r, s) => {
    let a = {
      ...t,
      ...s,
      headers: s?.headers ? {
        ...Dzt(t.headers),
        ...Dzt(s.headers)
      } : t.headers
    };
    return e(r, a);
  };
}

var m = {
  initialReconnectionDelay: 1e3,
  maxReconnectionDelay: 3e4,
  reconnectionDelayGrowFactor: 1.5,
  maxRetries: 2
};

class sne extends Error {
  constructor(e, t) {
    super(`Streamable HTTP error: ${t}`);
    this.code = e;
  }
}

class ebn {
  constructor(e, t) {
    this._hasCompletedAuthFlow = !1, this._url = e, this._resourceMetadataUrl = void 0, 
    this._scope = void 0, this._requestInit = t?.requestInit, this._authProvider = t?.authProvider, 
    this._fetch = t?.fetch, this._fetchWithInit = fSt(t?.fetch, t?.requestInit), this._sessionId = t?.sessionId, 
    this._reconnectionOptions = t?.reconnectionOptions ?? m;
  }
  async _authThenStart() {
    if (!this._authProvider) throw new Lx("No auth provider");
    let e;
    try {
      e = await ine(this._authProvider, {
        serverUrl: this._url,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit
      });
    } catch (t) {
      throw this.onerror?.(t), t;
    }
    if (e !== "AUTHORIZED") throw new Lx;
    return await this._startOrAuthSse({
      resumptionToken: void 0
    });
  }
  async _commonHeaders() {
    let e = {};
    if (this._authProvider) {
      let r = await this._authProvider.tokens();
      if (r) e.Authorization = `Bearer ${r.access_token}`;
    }
    if (this._sessionId) e["mcp-session-id"] = this._sessionId;
    if (this._protocolVersion) e["mcp-protocol-version"] = this._protocolVersion;
    let t = Dzt(this._requestInit?.headers);
    return new Headers({
      ...e,
      ...t
    });
  }
  async _startOrAuthSse(e) {
    let {resumptionToken: t} = e;
    try {
      let r = await this._commonHeaders();
      if (r.set("Accept", "text/event-stream"), t) r.set("last-event-id", t);
      let s = await (this._fetch ?? fetch)(this._url, {
        method: "GET",
        headers: r,
        signal: this._abortController?.signal
      });
      if (!s.ok) {
        if (await (s.body?.cancel()), s.status === 401 && this._authProvider) return await this._authThenStart();
        if (s.status === 405) return;
        throw new sne(s.status, `Failed to open SSE stream: ${s.statusText}`);
      }
      this._handleSseStream(s.body, e, !0);
    } catch (r) {
      throw this.onerror?.(r), r;
    }
  }
  _getNextReconnectionDelay(e) {
    if (this._serverRetryMs !== void 0) return this._serverRetryMs;
    let t = this._reconnectionOptions.initialReconnectionDelay, r = this._reconnectionOptions.reconnectionDelayGrowFactor, s = this._reconnectionOptions.maxReconnectionDelay;
    return Math.min(t * Math.pow(r, e), s);
  }
  _scheduleReconnection(e, t = 0) {
    let r = this._reconnectionOptions.maxRetries;
    if (t >= r) {
      this.onerror?.(Error(`Maximum reconnection attempts (${r}) exceeded.`));
      return;
    }
    let s = this._getNextReconnectionDelay(t);
    this._reconnectionTimeout = setTimeout(() => {
      this._startOrAuthSse(e).catch(a => {
        this.onerror?.(Error(`Failed to reconnect SSE stream: ${a instanceof Error ? a.message : String(a)}`)), 
        this._scheduleReconnection(e, t + 1);
      });
    }, s);
  }
  _handleSseStream(e, t, r) {
    if (!e) return;
    let {onresumptiontoken: s, replayMessageId: a} = t, d, n = !1, u = !1;
    (async () => {
      try {
        let l = e.pipeThrough(new TextDecoderStream).pipeThrough(new bGt({
          onRetry: o => {
            this._serverRetryMs = o;
          }
        })).getReader();
        while (!0) {
          let {value: o, done: c} = await l.read();
          if (c) break;
          if (o.id) d = o.id, n = !0, s?.(o.id);
          if (!o.data) continue;
          if (!o.event || o.event === "message") try {
            let h = WL.parse(JSON.parse(o.data));
            if (hne(h)) {
              if (u = !0, a !== void 0) h.id = a;
            }
            this.onmessage?.(h);
          } catch (h) {
            this.onerror?.(h);
          }
        }
        if ((r || n) && !u && this._abortController && !this._abortController.signal.aborted) this._scheduleReconnection({
          resumptionToken: d,
          onresumptiontoken: s,
          replayMessageId: a
        }, 0);
      } catch (l) {
        if (this.onerror?.(Error(`SSE stream disconnected: ${l}`)), (r || n) && !u && this._abortController && !this._abortController.signal.aborted) try {
          this._scheduleReconnection({
            resumptionToken: d,
            onresumptiontoken: s,
            replayMessageId: a
          }, 0);
        } catch (o) {
          this.onerror?.(Error(`Failed to reconnect: ${o instanceof Error ? o.message : String(o)}`));
        }
      }
    })();
  }
  async start() {
    if (this._abortController) throw Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    this._abortController = new AbortController;
  }
  async finishAuth(e) {
    if (!this._authProvider) throw new Lx("No auth provider");
    if (await ine(this._authProvider, {
      serverUrl: this._url,
      authorizationCode: e,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit
    }) !== "AUTHORIZED") throw new Lx("Failed to authorize");
  }
  async close() {
    if (this._reconnectionTimeout) clearTimeout(this._reconnectionTimeout), this._reconnectionTimeout = void 0;
    this._abortController?.abort(), this.onclose?.();
  }
  async send(e, t) {
    try {
      let {resumptionToken: r, onresumptiontoken: s} = t || {};
      if (r) {
        this._startOrAuthSse({
          resumptionToken: r,
          replayMessageId: n4(e) ? e.id : void 0
        }).catch(i => this.onerror?.(i));
        return;
      }
      let a = await this._commonHeaders();
      a.set("content-type", "application/json"), a.set("accept", "application/json, text/event-stream");
      let d = {
        ...this._requestInit,
        method: "POST",
        headers: a,
        body: JSON.stringify(e),
        signal: this._abortController?.signal
      }, n = await (this._fetch ?? fetch)(this._url, d), u = n.headers.get("mcp-session-id");
      if (u) this._sessionId = u;
      if (!n.ok) {
        let i = await n.text().catch(() => null);
        if (n.status === 401 && this._authProvider) {
          if (this._hasCompletedAuthFlow) throw new sne(401, "Server returned 401 after successful authentication");
          let {resourceMetadataUrl: o, scope: c} = Qke(n);
          if (this._resourceMetadataUrl = o, this._scope = c, await ine(this._authProvider, {
            serverUrl: this._url,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
          }) !== "AUTHORIZED") throw new Lx;
          return this._hasCompletedAuthFlow = !0, this.send(e);
        }
        if (n.status === 403 && this._authProvider) {
          let {resourceMetadataUrl: o, scope: c, error: h} = Qke(n);
          if (h === "insufficient_scope") {
            let f = n.headers.get("WWW-Authenticate");
            if (this._lastUpscopingHeader === f) throw new sne(403, "Server returned 403 after trying upscoping");
            if (c) this._scope = c;
            if (o) this._resourceMetadataUrl = o;
            if (this._lastUpscopingHeader = f ?? void 0, await ine(this._authProvider, {
              serverUrl: this._url,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetch
            }) !== "AUTHORIZED") throw new Lx;
            return this.send(e);
          }
        }
        throw new sne(n.status, `Error POSTing to endpoint: ${i}`);
      }
      if (this._hasCompletedAuthFlow = !1, this._lastUpscopingHeader = void 0, n.status === 202) {
        if (await (n.body?.cancel()), gqr(e)) this._startOrAuthSse({
          resumptionToken: void 0
        }).catch(i => this.onerror?.(i));
        return;
      }
      let l = (Array.isArray(e) ? e : [ e ]).filter(i => "method" in i && "id" in i && i.id !== void 0).length > 0, _ = n.headers.get("content-type");
      if (l) if (_?.includes("text/event-stream")) this._handleSseStream(n.body, {
        onresumptiontoken: s
      }, !1); else if (_?.includes("application/json")) {
        let i = await n.json(), o = Array.isArray(i) ? i.map(c => WL.parse(c)) : [ WL.parse(i) ];
        for (let c of o) this.onmessage?.(c);
      } else throw await (n.body?.cancel()), new sne(-1, `Unexpected content type: ${_}`); else await (n.body?.cancel());
    } catch (r) {
      throw this.onerror?.(r), r;
    }
  }
  get sessionId() {
    return this._sessionId;
  }
  async terminateSession() {
    if (!this._sessionId) return;
    try {
      let e = await this._commonHeaders(), t = {
        ...this._requestInit,
        method: "DELETE",
        headers: e,
        signal: this._abortController?.signal
      }, r = await (this._fetch ?? fetch)(this._url, t);
      if (await (r.body?.cancel()), !r.ok && r.status !== 405) throw new sne(r.status, `Failed to terminate session: ${r.statusText}`);
      this._sessionId = void 0;
    } catch (e) {
      throw this.onerror?.(e), e;
    }
  }
  setProtocolVersion(e) {
    this._protocolVersion = e;
  }
  get protocolVersion() {
    return this._protocolVersion;
  }
  async resumeStream(e, t) {
    await this._startOrAuthSse({
      resumptionToken: e,
      onresumptiontoken: t?.onresumptiontoken
    });
  }
}

export { Dzt, fSt, sne, ebn };
