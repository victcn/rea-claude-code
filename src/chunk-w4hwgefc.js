// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At } from "./chunk-vps0k559.js";

import { Le, ys } from "./chunk-2v9tfgc3.js";

import { K, B, Qr, ve } from "./chunk-3pqddg8f.js";

import { lo } from "./chunk-ddr690nj.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { se, t } from "./chunk-kawq2919.js";

import { uFt } from "./chunk-z52kmxx4.js";

import { H } from "./chunk-145qexpp.js";

import { cae, a } from "./chunk-j016gcgm.js";

import { fXe } from "./chunk-e2610wvk.js";

import { gI } from "./chunk-4dwgr3et.js";

import { RE } from "./chunk-gkzapwcq.js";

import { uM } from "./chunk-j7qcpyv8.js";

import { D } from "./chunk-hmqkrrtz.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { we, C, Ne } from "./chunk-m8ez8fhk.js";

var pOe = C(function(lt) {
  lt.HttpAuthLocation = void 0;
  (function(e) {
    e.HEADER = "header", e.QUERY = "query";
  })(lt.HttpAuthLocation || (lt.HttpAuthLocation = {}));
  lt.HttpApiKeyAuthLocation = void 0;
  (function(e) {
    e.HEADER = "header", e.QUERY = "query";
  })(lt.HttpApiKeyAuthLocation || (lt.HttpApiKeyAuthLocation = {}));
  lt.EndpointURLScheme = void 0;
  (function(e) {
    e.HTTP = "http", e.HTTPS = "https";
  })(lt.EndpointURLScheme || (lt.EndpointURLScheme = {}));
  lt.AlgorithmId = void 0;
  (function(e) {
    e.MD5 = "md5", e.CRC32 = "crc32", e.CRC32C = "crc32c", e.SHA1 = "sha1", e.SHA256 = "sha256";
  })(lt.AlgorithmId || (lt.AlgorithmId = {}));
  var st = e => {
    let n = [];
    if (e.sha256 !== void 0) n.push({
      algorithmId: () => lt.AlgorithmId.SHA256,
      checksumConstructor: () => e.sha256
    });
    if (e.md5 != null) n.push({
      algorithmId: () => lt.AlgorithmId.MD5,
      checksumConstructor: () => e.md5
    });
    return {
      addChecksumAlgorithm(r) {
        n.push(r);
      },
      checksumAlgorithms() {
        return n;
      }
    };
  }, it = e => {
    let n = {};
    return e.checksumAlgorithms().forEach(r => {
      n[r.algorithmId()] = r.checksumConstructor();
    }), n;
  }, ct = e => st(e), at = e => it(e);
  lt.FieldPosition = void 0;
  (function(e) {
    e[e.HEADER = 0] = "HEADER", e[e.TRAILER = 1] = "TRAILER";
  })(lt.FieldPosition || (lt.FieldPosition = {}));
  var ut = "__smithy_context";
  lt.IniSectionType = void 0;
  (function(e) {
    e.PROFILE = "profile", e.SSO_SESSION = "sso-session", e.SERVICES = "services";
  })(lt.IniSectionType || (lt.IniSectionType = {}));
  lt.RequestHandlerProtocol = void 0;
  (function(e) {
    e.HTTP_0_9 = "http/0.9", e.HTTP_1_0 = "http/1.0", e.TDS_8_0 = "tds/8.0";
  })(lt.RequestHandlerProtocol || (lt.RequestHandlerProtocol = {}));
  lt.SMITHY_CONTEXT_KEY = ut;
  lt.getDefaultClientConfiguration = ct;
  lt.resolveDefaultRuntimeConfig = at;
});

var og = C(function(Et) {
  var ht = pOe(), gt = e => ({
    setHttpHandler(n) {
      e.httpHandler = n;
    },
    httpHandler() {
      return e.httpHandler;
    },
    updateHttpClientConfig(n, r) {
      e.httpHandler?.updateHttpClientConfig(n, r);
    },
    httpHandlerConfigs() {
      return e.httpHandler.httpHandlerConfigs();
    }
  }), mt = e => ({
    httpHandler: e.httpHandler()
  });
  class pe {
    name;
    kind;
    values;
    constructor({name: e, kind: n = ht.FieldPosition.HEADER, values: r = []}) {
      this.name = e, this.kind = n, this.values = r;
    }
    add(e) {
      this.values.push(e);
    }
    set(e) {
      this.values = e;
    }
    remove(e) {
      this.values = this.values.filter(n => n !== e);
    }
    toString() {
      return this.values.map(e => e.includes(",") || e.includes(" ") ? `"${e}"` : e).join(", ");
    }
    get() {
      return this.values;
    }
  }
  class he {
    entries={};
    encoding;
    constructor({fields: e = [], encoding: n = "utf-8"}) {
      e.forEach(this.setField.bind(this)), this.encoding = n;
    }
    setField(e) {
      this.entries[e.name.toLowerCase()] = e;
    }
    getField(e) {
      return this.entries[e.toLowerCase()];
    }
    removeField(e) {
      delete this.entries[e.toLowerCase()];
    }
    getByType(e) {
      return Object.values(this.entries).filter(n => n.kind === e);
    }
  }
  class q {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(e) {
      this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, 
      this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, 
      this.protocol = e.protocol ? e.protocol.slice(-1) !== ":" ? `${e.protocol}:` : e.protocol : "https:", 
      this.path = e.path ? e.path.charAt(0) !== "/" ? `/${e.path}` : e.path : "/", this.username = e.username, 
      this.password = e.password, this.fragment = e.fragment;
    }
    static clone(e) {
      let n = new q({
        ...e,
        headers: {
          ...e.headers
        }
      });
      if (n.query) n.query = yt(n.query);
      return n;
    }
    static isInstance(e) {
      if (!e) return !1;
      let n = e;
      return "method" in n && "protocol" in n && "hostname" in n && "path" in n && typeof n.query === "object" && typeof n.headers === "object";
    }
    clone() {
      return q.clone(this);
    }
  }
  function yt(e) {
    return Object.keys(e).reduce((n, r) => {
      let o = e[r];
      return {
        ...n,
        [r]: Array.isArray(o) ? [ ...o ] : o
      };
    }, {});
  }
  class ge {
    statusCode;
    reason;
    headers;
    body;
    constructor(e) {
      this.statusCode = e.statusCode, this.reason = e.reason, this.headers = e.headers || {}, 
      this.body = e.body;
    }
    static isInstance(e) {
      if (!e) return !1;
      let n = e;
      return typeof n.statusCode === "number" && typeof n.headers === "object";
    }
  }
  function Ct(e) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(e);
  }
  Et.Field = pe;
  Et.Fields = he;
  Et.HttpRequest = q;
  Et.HttpResponse = ge;
  Et.getHttpHandlerExtensionConfiguration = gt;
  Et.isValidHostname = Ct;
  Et.resolveHttpHandlerRuntimeConfig = mt;
});

var mOo = C(function(wt) {
  var me = e => encodeURIComponent(e).replace(/[!'()*]/g, Rt), Rt = e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`, bt = e => e.split("/").map(me).join("/");
  wt.escapeUri = me;
  wt.escapeUriPath = bt;
});

var gOo = C(function(kt) {
  var te = mOo();
  function Dt(e) {
    let n = [];
    for (let r of Object.keys(e).sort()) {
      let o = e[r];
      if (r = te.escapeUri(r), Array.isArray(o)) for (let s = 0, i = o.length; s < i; s++) n.push(`${r}=${te.escapeUri(o[s])}`); else {
        let s = r;
        if (o || typeof o === "string") s += `=${te.escapeUri(o)}`;
        n.push(s);
      }
    }
    return n.join("&");
  }
  kt.buildQueryString = Dt;
});

var nD = C(function(Yt) {
  var Ee = og(), xe = gOo(), j = Ne("http"), W = Ne("https"), Te = Ne("stream"), ne = Ne("http2"), Ut = [ "ECONNRESET", "EPIPE", "ETIMEDOUT" ], Se = e => {
    let n = {};
    for (let r of Object.keys(e)) {
      let o = e[r];
      n[r] = Array.isArray(o) ? o.join(",") : o;
    }
    return n;
  }, T = {
    setTimeout: (e, n) => setTimeout(e, n),
    clearTimeout: e => clearTimeout(e)
  }, ye = 1e3, Ft = (e, n, r = 0) => {
    if (!r) return -1;
    let o = s => {
      let i = T.setTimeout(() => {
        e.destroy(), n(Object.assign(Error(`@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${r} ms.`), {
          name: "TimeoutError"
        }));
      }, r - s), c = u => {
        if (u?.connecting) u.on("connect", () => {
          T.clearTimeout(i);
        }); else T.clearTimeout(i);
      };
      if (e.socket) c(e.socket); else e.on("socket", c);
    };
    if (r < 2e3) return o(0), 0;
    return T.setTimeout(o.bind(null, ye), ye);
  }, $t = (e, n, r = 0, o, s) => {
    if (r) return T.setTimeout(() => {
      let i = `@smithy/node-http-handler - [${o ? "ERROR" : "WARN"}] a request has exceeded the configured ${r} ms requestTimeout.`;
      if (o) {
        let c = Object.assign(Error(i), {
          name: "TimeoutError",
          code: "ETIMEDOUT"
        });
        e.destroy(c), n(c);
      } else i += " Init client requestHandler with throwOnRequestTimeout=true to turn this into an error.", 
      s?.warn?.(i);
    }, r);
    return -1;
  }, Nt = 3e3, Mt = (e, {keepAlive: n, keepAliveMsecs: r}, o = Nt) => {
    if (n !== !0) return -1;
    let s = () => {
      if (e.socket) e.socket.setKeepAlive(n, r || 0); else e.on("socket", i => {
        i.setKeepAlive(n, r || 0);
      });
    };
    if (o === 0) return s(), 0;
    return T.setTimeout(s, o);
  }, Ce = 3e3, Bt = (e, n, r = 0) => {
    let o = s => {
      let i = r - s, c = () => {
        e.destroy(), n(Object.assign(Error(`@smithy/node-http-handler - the request socket timed out after ${r} ms of inactivity (configured by client requestHandler).`), {
          name: "TimeoutError"
        }));
      };
      if (e.socket) e.socket.setTimeout(i, c), e.on("close", () => e.socket?.removeListener("timeout", c)); else e.setTimeout(i, c);
    };
    if (0 < r && r < 6e3) return o(0), 0;
    return T.setTimeout(o.bind(null, r === 0 ? 0 : Ce), Ce);
  }, Ae = 6e3;
  async function _e(e, n, r = Ae, o = !1) {
    let s = n.headers ?? {}, i = s.Expect || s.expect, c = -1, u = !0;
    if (!o && i === "100-continue") u = await Promise.race([ new Promise(l => {
      c = Number(T.setTimeout(() => l(!0), Math.max(Ae, r)));
    }), new Promise(l => {
      e.on("continue", () => {
        T.clearTimeout(c), l(!0);
      }), e.on("response", () => {
        T.clearTimeout(c), l(!1);
      }), e.on("error", () => {
        T.clearTimeout(c), l(!1);
      });
    }) ]);
    if (u) qt(e, n.body);
  }
  function qt(e, n) {
    if (n instanceof Te.Readable) {
      n.pipe(e);
      return;
    }
    if (n) {
      if (Buffer.isBuffer(n) || typeof n === "string") {
        e.end(n);
        return;
      }
      let r = n;
      if (typeof r === "object" && r.buffer && typeof r.byteOffset === "number" && typeof r.byteLength === "number") {
        e.end(Buffer.from(r.buffer, r.byteOffset, r.byteLength));
        return;
      }
      e.end(Buffer.from(n));
      return;
    }
    e.end();
  }
  var Kt = 0;
  class X {
    config;
    configProvider;
    socketWarningTimestamp=0;
    externalAgent=!1;
    metadata={
      handlerProtocol: "http/1.1"
    };
    static create(e) {
      if (typeof e?.handle === "function") return e;
      return new X(e);
    }
    static checkSocketUsage(e, n, r = console) {
      let {sockets: o, requests: s, maxSockets: i} = e;
      if (typeof i !== "number" || i === 1 / 0) return n;
      let c = 15e3;
      if (Date.now() - c < n) return n;
      if (o && s) for (let u in o) {
        let l = o[u]?.length ?? 0, d = s[u]?.length ?? 0;
        if (l >= i && d >= 2 * i) return r?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${l} and ${d} additional requests are enqueued.\nSee https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html\nor increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`), 
        Date.now();
      }
      return n;
    }
    constructor(e) {
      this.configProvider = new Promise((n, r) => {
        if (typeof e === "function") e().then(o => {
          n(this.resolveDefaultConfig(o));
        }).catch(r); else n(this.resolveDefaultConfig(e));
      });
    }
    resolveDefaultConfig(e) {
      let {requestTimeout: n, connectionTimeout: r, socketTimeout: o, socketAcquisitionWarningTimeout: s, httpAgent: i, httpsAgent: c, throwOnRequestTimeout: u} = e || {}, l = !0, d = 50;
      return {
        connectionTimeout: r,
        requestTimeout: n,
        socketTimeout: o,
        socketAcquisitionWarningTimeout: s,
        throwOnRequestTimeout: u,
        httpAgent: (() => {
          if (i instanceof j.Agent || typeof i?.destroy === "function") return this.externalAgent = !0, 
          i;
          return new j.Agent({
            keepAlive: !0,
            maxSockets: 50,
            ...i
          });
        })(),
        httpsAgent: (() => {
          if (c instanceof W.Agent || typeof c?.destroy === "function") return this.externalAgent = !0, 
          c;
          return new W.Agent({
            keepAlive: !0,
            maxSockets: 50,
            ...c
          });
        })(),
        logger: console
      };
    }
    destroy() {
      this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy();
    }
    async handle(e, {abortSignal: n, requestTimeout: r} = {}) {
      if (!this.config) this.config = await this.configProvider;
      return new Promise((o, s) => {
        let i = this.config, c = void 0, u = [], l = async h => {
          await c, u.forEach(T.clearTimeout), o(h);
        }, d = async h => {
          await c, u.forEach(T.clearTimeout), s(h);
        };
        if (n?.aborted) {
          let h = Error("Request aborted");
          h.name = "AbortError", d(h);
          return;
        }
        let p = e.protocol === "https:", x = e.headers ?? {}, _ = (x.Expect ?? x.expect) === "100-continue", S = p ? i.httpsAgent : i.httpAgent;
        if (_ && !this.externalAgent) S = new (p ? W.Agent : j.Agent)({
          keepAlive: !1,
          maxSockets: 1 / 0
        });
        u.push(T.setTimeout(() => {
          this.socketWarningTimestamp = X.checkSocketUsage(S, this.socketWarningTimestamp, i.logger);
        }, i.socketAcquisitionWarningTimeout ?? (i.requestTimeout ?? 2e3) + (i.connectionTimeout ?? 1e3)));
        let R = xe.buildQueryString(e.query || {}), M = void 0;
        if (e.username != null || e.password != null) {
          let h = e.username ?? "", y = e.password ?? "";
          M = `${h}:${y}`;
        }
        let I = e.path;
        if (R) I += `?${R}`;
        if (e.fragment) I += `#${e.fragment}`;
        let b = e.hostname ?? "";
        if (b[0] === "[" && b.endsWith("]")) b = e.hostname.slice(1, -1); else b = e.hostname;
        let U = {
          headers: e.headers,
          host: b,
          method: e.method,
          path: I,
          port: e.port,
          agent: S,
          auth: M
        }, E = (p ? W.request : j.request)(U, h => {
          let y = new Ee.HttpResponse({
            statusCode: h.statusCode || -1,
            reason: h.statusMessage,
            headers: Se(h.headers),
            body: h
          });
          l({
            response: y
          });
        });
        if (E.on("error", h => {
          if (Ut.includes(h.code)) d(Object.assign(h, {
            name: "TimeoutError"
          })); else d(h);
        }), n) {
          let h = () => {
            E.destroy();
            let y = Error("Request aborted");
            y.name = "AbortError", d(y);
          };
          if (typeof n.addEventListener === "function") {
            let y = n;
            y.addEventListener("abort", h, {
              once: !0
            }), E.once("close", () => y.removeEventListener("abort", h));
          } else n.onabort = h;
        }
        let L = r ?? i.requestTimeout;
        u.push(Ft(E, d, i.connectionTimeout)), u.push($t(E, d, L, i.throwOnRequestTimeout, i.logger ?? console)), 
        u.push(Bt(E, d, i.socketTimeout));
        let O = U.agent;
        if (typeof O === "object" && "keepAlive" in O) u.push(Mt(E, {
          keepAlive: O.keepAlive,
          keepAliveMsecs: O.keepAliveMsecs
        }));
        c = _e(E, e, L, this.externalAgent).catch(h => (u.forEach(T.clearTimeout), s(h)));
      });
    }
    updateHttpClientConfig(e, n) {
      this.config = void 0, this.configProvider = this.configProvider.then(r => ({
        ...r,
        [e]: n
      }));
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
  }
  class Pe {
    sessions=[];
    constructor(e) {
      this.sessions = e ?? [];
    }
    poll() {
      if (this.sessions.length > 0) return this.sessions.shift();
    }
    offerLast(e) {
      this.sessions.push(e);
    }
    contains(e) {
      return this.sessions.includes(e);
    }
    remove(e) {
      this.sessions = this.sessions.filter(n => n !== e);
    }
    [Symbol.iterator]() {
      return this.sessions[Symbol.iterator]();
    }
    destroy(e) {
      for (let n of this.sessions) if (n === e) {
        if (!n.destroyed) n.destroy();
      }
    }
  }
  class Re {
    constructor(e) {
      if (this.config = e, this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw RangeError("maxConcurrency must be greater than zero.");
    }
    config;
    sessionCache=new Map;
    lease(e, n) {
      let r = this.getUrlString(e), o = this.sessionCache.get(r);
      if (o) {
        let u = o.poll();
        if (u && !this.config.disableConcurrency) return u;
      }
      let s = ne.connect(r);
      if (this.config.maxConcurrency) s.settings({
        maxConcurrentStreams: this.config.maxConcurrency
      }, u => {
        if (u) throw Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + e.destination.toString());
      });
      s.unref();
      let i = () => {
        s.destroy(), this.deleteSession(r, s);
      };
      if (s.on("goaway", i), s.on("error", i), s.on("frameError", i), s.on("close", () => this.deleteSession(r, s)), 
      n.requestTimeout) s.setTimeout(n.requestTimeout, i);
      let c = this.sessionCache.get(r) || new Pe;
      return c.offerLast(s), this.sessionCache.set(r, c), s;
    }
    deleteSession(e, n) {
      let r = this.sessionCache.get(e);
      if (!r) return;
      if (!r.contains(n)) return;
      r.remove(n), this.sessionCache.set(e, r);
    }
    release(e, n) {
      let r = this.getUrlString(e);
      this.sessionCache.get(r)?.offerLast(n);
    }
    destroy() {
      for (let [e, n] of this.sessionCache) {
        for (let r of n) {
          if (!r.destroyed) r.destroy();
          n.remove(r);
        }
        this.sessionCache.delete(e);
      }
    }
    setMaxConcurrentStreams(e) {
      if (e && e <= 0) throw RangeError("maxConcurrentStreams must be greater than zero.");
      this.config.maxConcurrency = e;
    }
    setDisableConcurrentStreams(e) {
      this.config.disableConcurrency = e;
    }
    getUrlString(e) {
      return e.destination.toString();
    }
  }
  class re {
    config;
    configProvider;
    metadata={
      handlerProtocol: "h2"
    };
    connectionManager=new Re({});
    static create(e) {
      if (typeof e?.handle === "function") return e;
      return new re(e);
    }
    constructor(e) {
      this.configProvider = new Promise((n, r) => {
        if (typeof e === "function") e().then(o => {
          n(o || {});
        }).catch(r); else n(e || {});
      });
    }
    destroy() {
      this.connectionManager.destroy();
    }
    async handle(e, {abortSignal: n, requestTimeout: r} = {}) {
      if (!this.config) {
        if (this.config = await this.configProvider, this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || !1), 
        this.config.maxConcurrentStreams) this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
      }
      let {requestTimeout: o, disableConcurrentStreams: s} = this.config, i = r ?? o;
      return new Promise((c, u) => {
        let l = !1, d = void 0, p = async A => {
          await d, c(A);
        }, x = async A => {
          await d, u(A);
        };
        if (n?.aborted) {
          l = !0;
          let A = Error("Request aborted");
          A.name = "AbortError", x(A);
          return;
        }
        let {hostname: _, method: S, port: R, protocol: M, query: I} = e, b = "";
        if (e.username != null || e.password != null) {
          let A = e.username ?? "", P = e.password ?? "";
          b = `${A}:${P}@`;
        }
        let U = `${M}//${b}${_}${R ? `:${R}` : ""}`, de = {
          destination: new URL(U)
        }, E = this.connectionManager.lease(de, {
          requestTimeout: this.config?.sessionTimeout,
          disableConcurrentStreams: s || !1
        }), L = A => {
          if (s) this.destroySession(E);
          l = !0, x(A);
        }, O = xe.buildQueryString(I || {}), h = e.path;
        if (O) h += `?${O}`;
        if (e.fragment) h += `#${e.fragment}`;
        let y = E.request({
          ...e.headers,
          [ne.constants.HTTP2_HEADER_PATH]: h,
          [ne.constants.HTTP2_HEADER_METHOD]: S
        });
        if (E.ref(), y.on("response", A => {
          let P = new Ee.HttpResponse({
            statusCode: A[":status"] || -1,
            headers: Se(A),
            body: y
          });
          if (l = !0, p({
            response: P
          }), s) E.close(), this.connectionManager.deleteSession(U, E);
        }), i) y.setTimeout(i, () => {
          y.close();
          let A = Error(`Stream timed out because of no activity for ${i} ms`);
          A.name = "TimeoutError", L(A);
        });
        if (n) {
          let A = () => {
            y.close();
            let P = Error("Request aborted");
            P.name = "AbortError", L(P);
          };
          if (typeof n.addEventListener === "function") {
            let P = n;
            P.addEventListener("abort", A, {
              once: !0
            }), y.once("close", () => P.removeEventListener("abort", A));
          } else n.onabort = A;
        }
        y.on("frameError", (A, P, ot) => {
          L(Error(`Frame type id ${A} in stream id ${ot} has failed with code ${P}.`));
        }), y.on("error", L), y.on("aborted", () => {
          L(Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${y.rstCode}.`));
        }), y.on("close", () => {
          if (E.unref(), s) E.destroy();
          if (!l) L(Error("Unexpected error: http2 request did not get a response"));
        }), d = _e(y, e, i);
      });
    }
    updateHttpClientConfig(e, n) {
      this.config = void 0, this.configProvider = this.configProvider.then(r => ({
        ...r,
        [e]: n
      }));
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
    destroySession(e) {
      if (!e.destroyed) e.destroy();
    }
  }
  class be extends Te.Writable {
    bufferedBytes=[];
    _write(e, n, r) {
      this.bufferedBytes.push(e), r();
    }
  }
  var jt = e => {
    if (Wt(e)) return Xt(e);
    return new Promise((n, r) => {
      let o = new be;
      e.pipe(o), e.on("error", s => {
        o.end(), r(s);
      }), o.on("error", r), o.on("finish", function() {
        let s = new Uint8Array(Buffer.concat(this.bufferedBytes));
        n(s);
      });
    });
  }, Wt = e => typeof ReadableStream === "function" && e instanceof ReadableStream;
  async function Xt(e) {
    let n = [], r = e.getReader(), o = !1, s = 0;
    while (!o) {
      let {done: u, value: l} = await r.read();
      if (l) n.push(l), s += l.length;
      o = u;
    }
    let i = new Uint8Array(s), c = 0;
    for (let u of n) i.set(u, c), c += u.length;
    return i;
  }
  Yt.DEFAULT_REQUEST_TIMEOUT = Kt;
  Yt.NodeHttp2Handler = re;
  Yt.NodeHttpHandler = X;
  Yt.streamCollector = jt;
});

var le = we(nD(), 1);

import { isIP as Je } from "net";

import { homedir as yn } from "os";

var Jt = [ "NODE_EXTRA_CA_CERTS", "SSL_CERT_FILE", "SSL_CERT_DIR" ], Zt = {
  NODE_EXTRA_CA_CERTS: H.rawStr(),
  SSL_CERT_FILE: H.rawStr(),
  SSL_CERT_DIR: H.rawStr(),
  NODE_TLS_REJECT_UNAUTHORIZED: H.rawStr()
}, Oe = cae(Zt, null);

function Y() {
  let e = Oe.NODE_TLS_REJECT_UNAUTHORIZED;
  return Jt.some(n => Oe[n] !== void 0) || e !== void 0 && e !== "1";
}

var He = [ "bundled", "system" ], oe = new Set;

function w(e) {
  if (oe.has(e)) return !1;
  return oe.add(e), !0;
}

class De {
  extraCACerts=null;
  certificates=lo(() => rn(this));
  runtimeStoreBundles=new WeakSet;
  trustOverrideSeen=!1;
}

var en = new K(() => new De);

function N() {
  return en.of(B().host);
}

var nme = uM(async () => {
  let e = N();
  e.trustOverrideSeen ||= Y();
  let n = a.NODE_EXTRA_CA_CERTS;
  if (!n) {
    if (e.extraCACerts !== null) return e.extraCACerts = null, ie(e), !0;
    return !1;
  }
  try {
    let r = await se().readFile(n, {
      encoding: "utf8"
    });
    if (e.extraCACerts?.path === n && e.extraCACerts.content === r) return !1;
    e.extraCACerts = {
      path: n,
      content: r
    };
  } catch (r) {
    if (t(`CA certs: Failed to read NODE_EXTRA_CA_CERTS file (${n}): ${r}`, {
      level: "error"
    }), w("read_failed")) m("ca_certs_load", "read_failed");
    if (e.extraCACerts === null) return !1;
    e.extraCACerts = null;
  }
  return ie(e), !0;
});

function tn() {
  let e = a.CLAUDE_CODE_CERT_STORE;
  if (e) {
    let n = [];
    for (let r of e.split(",")) {
      let o = r.trim().toLowerCase();
      if (o === "bundled" || o === "system") {
        if (!n.includes(o)) n.push(o);
      } else if (o) {
        if (t(`CA certs: unrecognized CLAUDE_CODE_CERT_STORE source '${o}', ignoring`, {
          level: "warn"
        }), w("parse_skip")) f("ca_certs_load", "parse_skip");
      }
    }
    if (n.length === 0 && w("parse_all_invalid")) f("ca_certs_load", "parse_all_invalid");
    return n.length > 0 ? n : He;
  }
  if (uFt("--use-system-ca") || uFt("--use-openssl-ca")) return [ "system" ];
  return He;
}

function nn(e) {
  let {X509Certificate: n} = Ne("crypto"), r = Date.now(), o = 0, s = e.filter(i => {
    try {
      let c = new n(i), u = new Date(c.validTo).getTime();
      if (Number.isNaN(u) || u > r) return !0;
      return o++, !1;
    } catch {
      return !0;
    }
  });
  if (o > 0) {
    if (t(`CA certs: Dropped ${o} expired certificate(s) from system store`), w("expired_dropped")) f("ca_certs_load", "expired_dropped", {
      dropped_count: o
    });
  }
  return s;
}

function h$() {
  return N().certificates();
}

function hOo(e) {
  return Array.isArray(e) && N().runtimeStoreBundles.has(e);
}

function yOo() {
  let e = N();
  return e.trustOverrideSeen ||= Y(), e.trustOverrideSeen;
}

function rn(e) {
  e.trustOverrideSeen ||= Y();
  let n = tn(), r = a.NODE_EXTRA_CA_CERTS, o = n.includes("bundled"), s = n.includes("system");
  t(`CA certs: stores=${n.join(",")}, extraCertsPath=${r}`);
  let i = Ne("tls"), c = i.getCACertificates;
  if (!o && s && !c) {
    if (t("CA certs: stores=system but system CA API unavailable, deferring to runtime"), 
    w("system_api_unavailable")) f("ca_certs_load", "system_api_unavailable");
    return;
  }
  let u = [], l = !1;
  if (o) u.push(...i.rootCertificates), t(`CA certs: Loaded ${i.rootCertificates.length} bundled root certificates`);
  if (s) try {
    let p = c?.("system");
    if (p && p.length > 0) {
      let x = nn(p);
      u.push(...x), t(`CA certs: Loaded ${x.length} system CA certificates`);
    } else if (t(`CA certs: system store ${c ? "returned empty" : "unavailable"}`), 
    !o) u.push(...i.rootCertificates);
  } catch (p) {
    if (t(`CA certs: Failed to load system CA certificates: ${p}`, {
      level: "error"
    }), w("system_store_failed")) f("ca_certs_load", "system_store_failed");
    if (!o) u.push(...i.rootCertificates);
  }
  if (r) {
    if (e.extraCACerts?.path !== r) try {
      let p = se().readFileSync(r, {
        encoding: "utf8"
      });
      e.extraCACerts = {
        path: r,
        content: p
      };
    } catch (p) {
      if (t(`CA certs: Failed to read NODE_EXTRA_CA_CERTS file (${r}): ${p}`, {
        level: "error"
      }), w("read_failed")) m("ca_certs_load", "read_failed");
    }
    if (e.extraCACerts?.path === r) u.push(e.extraCACerts.content), l = !0, t(`CA certs: Appended extra certificates from NODE_EXTRA_CA_CERTS (${r})`);
  }
  let d = u.length > 0 ? D(u) : void 0;
  if (d && !l) e.runtimeStoreBundles.add(Object.freeze(d));
  if (oe.size === 0 && w("ok")) g("ca_certs_load", {
    cert_count: d?.length ?? 0,
    store_bundled: o,
    store_system: s,
    extra_configured: Boolean(r)
  });
  return d;
}

function _Oo() {
  ie(N());
}

function ie(e) {
  e.certificates.cache.clear?.(), t("Cleared CA certificates cache");
}

import { domainToASCII as ke } from "url";

var Ie = /[\u3002\uFF0E\uFF61]/g, on = /[\uFF1A\uFE55\uFE13]/g;

function INt(e) {
  return e.replace(Ie, ".").replace(on, ":");
}

var Fe = /^(0|[1-9]\d{0,2})(\.(0|[1-9]\d{0,2})){3}$/, sn = /^(0x[0-9a-f]*|\d+)$/, $e = /[\x00-\x20\x7f#%/<>?@\\^|]|[\u180E\u206A-\u206F\u{2F868}\u{2F874}\u{2F91F}\u{2F95F}\u{2F9BF}]/u, cn = /[\u00AD\u034F\u180B-\u180D\u180F\u200B\u2060\u2064\uFE00-\uFE0F\uFEFF\u{1BCA0}-\u{1BCA3}\u{E0100}-\u{E01EF}]/gu;

function Me(e) {
  let n = e;
  if (n.includes("%")) try {
    n = decodeURIComponent(n);
  } catch {
    return e.normalize("NFKC").toLowerCase();
  }
  return n.replace(cn, "").replace(Ie, ".").normalize("NFKC").toLowerCase().replace(/\.$/, "");
}

function ONt(e) {
  if ($e.test(e)) return "";
  let n = ke(e);
  if (!Fe.test(n)) return n;
  let r = Me(e);
  return r === n ? n : r;
}

function o$s(e) {
  return !$e.test(e) && Fe.test(ke(e));
}

function s$s(e) {
  let n = Me(e), r = n.split(".");
  return r.length <= 4 && r.every(o => sn.test(o)) ? n : null;
}

function ce(e) {
  let n = INt(e.toLowerCase()).replace(/\.+$/, ""), r = ONt(n);
  return r !== "" ? r.replace(/\.+$/, "") : n;
}

function qe(e, n) {
  let r;
  if (e.startsWith("*.")) r = `*.${ce(e.slice(2))}`; else r = ce(e);
  let o = ce(n);
  if (r === "*") return !0;
  if (r === o) return !0;
  if (r.startsWith("*.") && o.endsWith(r.slice(1))) return !0;
  return !1;
}

function bOo(e, n) {
  return qe(n, e);
}

function SOo(e, n) {
  for (let r of n) if (qe(r, e)) return !0;
  return !1;
}

function TG(e, n) {
  let r = n.lastIndexOf("/");
  if (r < 0) return !1;
  let o = n.slice(0, r), s = n.slice(r + 1);
  if (!/^\d+$/.test(s)) return !1;
  let i = parseInt(s, 10), c = Be(o);
  if (!c) return !1;
  if (c.zone) return !1;
  let u = Be(e);
  if (!u) return !1;
  let l = un(u.bytes), d = c.bytes;
  if (l.length !== d.length) return !1;
  let p = d.length * 8;
  if (i < 0 || i > p) return !1;
  return an(l, d, i);
}

function an(e, n, r) {
  let o = r >> 3;
  for (let c = 0; c < o; c++) if (e[c] !== n[c]) return !1;
  let s = r & 7;
  if (s === 0) return !0;
  let i = 255 << 8 - s & 255;
  return ((e[o] ?? 0) & i) === ((n[o] ?? 0) & i);
}

function un(e) {
  if (e.length !== 16) return e;
  for (let n = 0; n < 10; n++) if (e[n] !== 0) return e;
  if (e[10] !== 255 || e[11] !== 255) return e;
  return e.slice(12);
}

function Be(e) {
  if (e === "") return null;
  let n = "", r = e, o = e.indexOf("%");
  if (o >= 0) n = e.slice(o + 1), r = e.slice(0, o);
  if (r.includes(":")) {
    let i = ln(r);
    return i ? {
      bytes: i,
      zone: n
    } : null;
  }
  if (n) return null;
  let s = Ke(r);
  return s ? {
    bytes: s,
    zone: ""
  } : null;
}

function Ke(e) {
  let n = e.split(".");
  if (n.length !== 4) return null;
  let r = new Uint8Array(4);
  for (let o = 0; o < 4; o++) {
    let s = n[o];
    if (s === void 0 || s === "" || !/^\d{1,3}$/.test(s)) return null;
    if (s.length > 1 && s.startsWith("0")) return null;
    let i = parseInt(s, 10);
    if (i > 255) return null;
    r[o] = i;
  }
  return r;
}

function ln(e) {
  let n = null, r = e, o = e.lastIndexOf(":");
  if (o >= 0 && e.slice(o + 1).includes(".")) {
    if (n = Ke(e.slice(o + 1)), !n) return null;
    r = e.slice(0, o + 1);
  }
  let s = r.split("::");
  if (s.length > 2) return null;
  let i = [], c = (l, d) => {
    if (l === "") return [];
    let p = l.split(":"), x = [];
    for (let _ = 0; _ < p.length; _++) {
      let S = p[_];
      if (S === "" && d && _ === p.length - 1) continue;
      if (S === void 0 || S === "" || !/^[0-9a-fA-F]{1,4}$/.test(S)) return null;
      x.push(parseInt(S, 16));
    }
    return x;
  };
  if (s.length === 1) {
    let l = s[0] ?? "", d = c(l, n !== null);
    if (!d) return null;
    i.push(...d);
    let p = n ? 6 : 8;
    if (i.length !== p) return null;
  } else {
    let l = s[0] ?? "", d = s[1] ?? "", p = c(l, !1), x = c(d, n !== null);
    if (!p || !x) return null;
    let _ = n ? 2 : 0, S = 8 - p.length - x.length - _;
    if (S < 1) return null;
    i.push(...p);
    for (let R = 0; R < S; R++) i.push(0);
    if (i.push(...x), i.length + _ !== 8) return null;
  }
  let u = new Uint8Array(16);
  for (let l = 0; l < i.length; l++) {
    let d = i[l];
    if (d === void 0) return null;
    u[l * 2] = d >> 8 & 255, u[l * 2 + 1] = d & 255;
  }
  if (n) u[12] = n[0] ?? 0, u[13] = n[1] ?? 0, u[14] = n[2] ?? 0, u[15] = n[3] ?? 0;
  return u;
}

import { createPrivateKey as fn, X509Certificate as dn } from "crypto";

import { Agent as Ye } from "https";

import { isDeepStrictEqual as pn } from "util";

class ze {
  clientCert=null;
  clientKey=null;
  config=lo(() => mn(this));
  agentCache=null;
  fetchSessions=new Map;
}

var hn = new K(() => new ze);

function k() {
  return hn.of(B().host);
}

var ae = "-----BEGIN ";

function Ve(e) {
  let n = e.lastIndexOf(ae);
  if (n === -1) return !1;
  let r = e.indexOf("-----", n + ae.length);
  if (r === -1) return !1;
  let o = e.slice(n + ae.length, r);
  return e.includes(`-----END ${o}-----`, r);
}

var bj = /-----BEGIN CERTIFICATE-----[\s\S]*?-----END CERTIFICATE-----/g;

function gn(e, n) {
  let r;
  try {
    r = fn({
      key: n,
      ...a.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE && {
        passphrase: a.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE
      }
    });
  } catch {
    return !1;
  }
  let o = !1, s = !1;
  for (let i of e.match(bj) ?? []) try {
    if (new dn(i).checkPrivateKey(r)) return !1;
    o = !0;
  } catch {
    s = !0;
  }
  return o && !s;
}

var je = 1048576;

function Ge(e, n) {
  if (!e.isFile() || e.size > je) return t(`mTLS: Ignoring ${n} \u2014 not a regular file or over ${je} bytes`, {
    level: "error"
  }), !1;
  return !0;
}

function We(e, n) {
  try {
    if (!Ge(se().statSync(e), n)) return null;
    let r = se().readFileSync(e, {
      encoding: "utf8"
    });
    if (!Ve(r)) return t(`mTLS: Ignoring incomplete ${n} \u2014 no PEM block`, {
      level: "error"
    }), null;
    return t(`mTLS: Loaded ${n}`), {
      path: e,
      content: r
    };
  } catch (r) {
    return t(`mTLS: Failed to load ${n}: ${r}`, {
      level: "error"
    }), null;
  }
}

async function Xe(e, n) {
  try {
    if (!Ge(await se().stat(e), n)) return null;
    let r = await se().readFile(e, {
      encoding: "utf8"
    });
    if (!Ve(r)) return t(`mTLS: Ignoring incomplete ${n} \u2014 no PEM block`, {
      level: "error"
    }), null;
    return t(`mTLS: Loaded ${n}`), {
      path: e,
      content: r
    };
  } catch (r) {
    return t(`mTLS: Failed to load ${n}: ${r}`, {
      level: "error"
    }), null;
  }
}

var lX = uM(async () => {
  let e = k(), n = a.CLAUDE_CODE_CLIENT_CERT, r = a.CLAUDE_CODE_CLIENT_KEY, [o, s] = await Promise.all([ n ? Xe(n, "client certificate from CLAUDE_CODE_CLIENT_CERT") : null, r ? Xe(r, "client key from CLAUDE_CODE_CLIENT_KEY") : null ]), i = Boolean(n && !o || r && !s), c = Boolean(!i && o && s && gn(o.content, s.content));
  if (c) t("mTLS: Ignoring mismatched client cert/key pair \u2014 mid-rotation read", {
    level: "error"
  });
  let u = i || c, l = n ? u ? e.clientCert : o : null, d = r ? u ? e.clientKey : s : null, p = e.clientCert?.path !== l?.path || e.clientCert?.content !== l?.content || e.clientKey?.path !== d?.path || e.clientKey?.content !== d?.content;
  if (e.clientCert = l, e.clientKey = d, p) Qe(e);
  return {
    changed: p,
    readFailed: u,
    mismatched: c
  };
});

function wOo() {
  let e = k();
  return {
    certPath: e.clientCert?.path,
    keyPath: e.clientKey?.path
  };
}

function IC() {
  return k().config();
}

function mn(e) {
  let n = {}, r = a.CLAUDE_CODE_CLIENT_CERT;
  if (r) {
    if (e.clientCert?.path !== r) e.clientCert = We(r, "client certificate from CLAUDE_CODE_CLIENT_CERT") ?? e.clientCert;
    if (e.clientCert?.path === r) n.cert = e.clientCert.content;
  }
  let o = a.CLAUDE_CODE_CLIENT_KEY;
  if (o) {
    if (e.clientKey?.path !== o) e.clientKey = We(o, "client key from CLAUDE_CODE_CLIENT_KEY") ?? e.clientKey;
    if (e.clientKey?.path === o) n.key = e.clientKey.content;
  }
  let s = a.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE;
  if (s) n.passphrase = s, t("mTLS: Using client key passphrase");
  if (Object.keys(n).length === 0) return;
  return n;
}

function lgt() {
  let e = k(), n = IC(), r = h$();
  if (e.agentCache && e.agentCache.config === n && e.agentCache.ca === r) return e.agentCache.agent;
  let o;
  if (n || r) {
    let s = {
      ...n,
      ...r && {
        ca: r
      },
      keepAlive: !0
    };
    t("mTLS: Creating HTTPS agent with custom certificates"), o = new Ye(s);
  }
  return e.agentCache = {
    config: n,
    ca: r,
    agent: o
  }, o;
}

function vOo() {
  let e = IC(), n = h$();
  return new Ye({
    ...e,
    ...n && {
      ca: n
    },
    keepAlive: !1
  });
}

function YS() {
  let e = IC(), n = h$();
  if (!e && !n) return;
  return {
    ...e,
    ...n && {
      ca: n
    }
  };
}

function MNt() {
  let e = IC(), n = h$();
  if (!e && !n) return {};
  return {
    tls: {
      ...e,
      ...n && {
        ca: n
      }
    }
  };
}

function EOo(e) {
  let n = typeof Bun > "u" ? void 0 : Bun.FetchSession;
  if (!n) return;
  let r = MNt(), o = k().fetchSessions, s = o.get(e);
  if (s && pn(s.tls, r.tls)) return s.tls = r.tls, s.session;
  let i = new n(r);
  return s?.session.close(), o.set(e, {
    tls: r.tls,
    session: i
  }), i;
}

function BOr() {
  Qe(k());
}

function Qe(e) {
  e.config.cache.clear?.(), e.agentCache = null, t("Cleared mTLS configuration cache");
}

function kOo() {
  if (!IC()) return;
  if (a.NODE_EXTRA_CA_CERTS) t("NODE_EXTRA_CA_CERTS detected - Node.js will automatically append to built-in CAs");
}

class tt {
  keepAliveDisabled=!1;
  agents=new Map;
  proxyAuthHelperConfig={
    helper: void 0,
    fromProjectOrLocal: !1,
    trustAccepted: () => !1
  };
  proxyAuthCache=null;
  proxyAuthPendingChallenge=void 0;
}

var Cn = new K(() => new tt);

function v() {
  return Cn.of(B().host);
}

function TOo() {
  v().keepAliveDisabled = !0;
}

function An(e) {
  switch (e.family) {
   case 0:
   case 4:
   case 6:
    return e.family;

   case "IPv6":
    return 6;

   case "IPv4":
   case void 0:
    return 4;

   default:
    throw Error(`Unsupported address family: ${e.family}`);
  }
}

var En = [ "https_proxy", "HTTPS_PROXY", "http_proxy", "HTTP_PROXY" ];

function AG(e = process.env) {
  let n = En.find(o => e[o]), r = n ? e[n] : void 0;
  return n && r ? {
    value: r,
    source: n
  } : void 0;
}

function V1e(e = process.env) {
  return AG(e)?.value;
}

function CG(e) {
  try {
    let n = new URL(e);
    return n.host ? n : void 0;
  } catch {
    return;
  }
}

function HNt(e, n) {
  let r = n.replace(/\p{Cc}/gu, "");
  return `Invalid proxy URL in ${e}: "${r}" cannot be parsed as a URL.\nProxy settings must be a complete URL including the scheme, e.g. "http://proxy.example.com:8080".\nFix or unset ${e} and restart Claude Code.`;
}

var Ze = Ue(new Set, e => e.clear());

function Tf(e = process.env) {
  let n = AG(e);
  if (!n) return;
  if (!CG(n.value)) {
    let r = `${n.source}=${n.value}`;
    if (!Ze.has(r)) Ze.add(r), console.error(HNt(n.source, n.value));
    return;
  }
  return n.value;
}

function jOr(e) {
  let {no_proxy: n, NO_PROXY: r} = e;
  if (n && r && n !== r) return `${n},${r}`;
  return n || r;
}

function K1e(e = process.env) {
  if (e.no_proxy === "*" || e.NO_PROXY === "*") return "*";
  return jOr(e);
}

function xy(e, n = K1e()) {
  if (!n) return !1;
  if (n === "*") return !0;
  try {
    let r = new URL(e), o = r.hostname.toLowerCase(), s = r.protocol === "https:" || r.protocol === "wss:", i = r.port || (s ? "443" : "80"), c = `${o}:${i}`;
    return n.split(/[,\s]+/).filter(Boolean).some(l => {
      if (l = l.toLowerCase().trim(), l.includes(":")) return c === l;
      if (l.startsWith(".")) {
        let d = l;
        return o === l.substring(1) || o.endsWith(d);
      }
      return o === l;
    });
  } catch {
    return !1;
  }
}

function et(e, n) {
  if (xy(e, n)) return !0;
  if (!n) return !1;
  let r;
  try {
    r = new URL(e).hostname.replace(/^\[|\]$/g, "");
  } catch {
    return !1;
  }
  if (Je(r) === 0) return !1;
  return n.split(/[,\s]+/).filter(Boolean).some(o => {
    if (o.includes("/")) return TG(r, o);
    let s = Je(o);
    if (s === 0) return !1;
    return TG(r, `${o}/${s === 4 ? 32 : 128}`);
  });
}

function nt(e) {
  let n = IC(), r = h$();
  return WOr(e, {
    ...n && {
      cert: n.cert,
      key: n.key,
      passphrase: n.passphrase
    },
    ...r && {
      ca: r
    }
  });
}

function WOr(e, n) {
  let r = {
    ...n,
    headers: () => {
      let s = rt();
      return s ? {
        "Proxy-Authorization": s
      } : {};
    }
  };
  if (a.CLAUDE_CODE_PROXY_RESOLVES_HOSTS) r.lookup = (s, i, c) => {
    c(null, s, An(i));
  };
  let o = new fXe(e, r);
  return o.options = {
    ...o.options,
    ...n
  }, o;
}

function xn(e) {
  let {agents: n} = v(), r = n.get(e);
  if (!r) r = Tn(e), n.set(e, r);
  return r;
}

function Tn(e) {
  let n = Ne("undici"), r = IC(), o = h$(), s = {
    httpProxy: e,
    httpsProxy: e,
    noProxy: K1e({
      no_proxy: a.no_proxy,
      NO_PROXY: a.NO_PROXY
    })
  };
  if (r || o) {
    let i = {
      ...r && {
        cert: r.cert,
        key: r.key,
        passphrase: r.passphrase
      },
      ...o && {
        ca: o
      }
    };
    s.connect = i, s.requestTls = i;
  }
  return new n.EnvHttpProxyAgent(s);
}

function Dw(e) {
  let n = Tf();
  if (!n) return;
  try {
    if (RE(new URL(e).hostname)) return;
  } catch {}
  if (xy(e)) return;
  return n;
}

var Sn = 3e5;

function Pan(e) {
  v().proxyAuthHelperConfig = e;
}

function q1e() {
  if (!a.CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER) return;
  return v().proxyAuthHelperConfig.helper;
}

function fe(e) {
  return q1e() !== void 0 && e.proxyAuthHelperConfig.fromProjectOrLocal;
}

function _n() {
  let e = a.CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS;
  if (e !== void 0 && e >= 0) return e;
  return Sn;
}

async function Y1e() {
  let e = q1e();
  if (!e) return null;
  let n = v(), r = n.proxyAuthHelperConfig.sources === "personAndPolicy";
  if (r && fe(n)) return null;
  if (fe(n) && !ve() && !n.proxyAuthHelperConfig.trustAccepted()) return t("proxyAuthHelper configured in project/local settings but workspace trust not yet accepted \u2014 skipping", {
    level: "warn"
  }), null;
  let o = n.proxyAuthPendingChallenge;
  if (!o && n.proxyAuthCache && Date.now() - n.proxyAuthCache.timestamp < _n()) return n.proxyAuthCache.value;
  n.proxyAuthPendingChallenge = void 0;
  let s = V1e(), i;
  try {
    i = s ? new URL(s).hostname : void 0;
  } catch {
    i = void 0;
  }
  let c = r ? yn() : Qr(), u = await gI(e, {
    ...c !== null && {
      cwd: c
    },
    timeout: 3e4,
    reject: !1,
    useToolMemoryCgroup: !1,
    env: {
      ...process.env,
      ...s && {
        CLAUDE_CODE_PROXY_URL: s
      },
      ...i && {
        CLAUDE_CODE_PROXY_HOST: i
      },
      ...o && {
        CLAUDE_CODE_PROXY_AUTHENTICATE: o
      }
    }
  });
  if (u.failed || !u.stdout?.trim()) {
    let d = u.timedOut ? "timed out" : u.failed ? `exited ${u.exitCode}` : "did not return a value", p = u.stderr?.trim();
    return console.error(`proxyAuthHelper failed: ${p ? `${d}: ${p}` : d}`), n.proxyAuthCache?.value ?? null;
  }
  let l = u.stdout.trim();
  return n.proxyAuthCache = {
    value: l,
    timestamp: Date.now()
  }, l;
}

function rt() {
  return v().proxyAuthCache?.value ?? null;
}

function Ian(e) {
  let n = v();
  n.proxyAuthCache = null, n.proxyAuthPendingChallenge = e;
}

function AOo() {
  if (!q1e()) return;
  let e = v();
  if (fe(e) && !e.proxyAuthHelperConfig.trustAccepted()) return;
  Y1e();
}

function aa(e) {
  let n = process.env.API_FORCE_IDLE_TIMEOUT, r = Le(n) ? !0 : ys(n) ? !1 : e.bodyIdleTimeout, o = e.forAnthropicAPI && r !== !0 && (e.hasBodyIdleWatchdog || r === !1), s = {
    ...v().keepAliveDisabled && {
      keepalive: !1
    },
    ...o && {
      timeout: !1
    }
  };
  if (e.forAnthropicAPI) {
    let c = a.ANTHROPIC_UNIX_SOCKET;
    if (c) return {
      ...s,
      unix: c
    };
  }
  let i = Tf();
  if (i) {
    if (e.url && xy(e.url)) return {
      ...s,
      ...MNt()
    };
    let c = rt();
    return {
      ...s,
      proxy: c ? {
        url: i,
        headers: {
          "Proxy-Authorization": c
        }
      } : i,
      ...MNt()
    };
  }
  if (e.fallbackProxy) {
    if (e.url && (et(e.url, e.fallbackProxy.noProxy) || et(e.url, K1e()))) return {
      ...s,
      ...MNt()
    };
    let c = MNt();
    return {
      ...s,
      proxy: e.fallbackProxy.url,
      ...e.fallbackProxy.ca ? {
        tls: {
          ...c.tls,
          ca: e.fallbackProxy.ca
        }
      } : c
    };
  }
  return {
    ...s,
    ...MNt()
  };
}

var z, ue = !1;

function XS() {
  let e = AG(), n = Tf(), r = lgt();
  if (z !== void 0) At.interceptors.request.eject(z), z = void 0;
  if (At.defaults.proxy = void 0, At.defaults.httpAgent = void 0, At.defaults.httpsAgent = void 0, 
  e) At.defaults.proxy = !1;
  if (n) {
    let o = nt(n);
    z = At.interceptors.request.use(s => {
      if (s.socketPath) return s;
      let i = At.getUri(s);
      if (i && xy(i)) if (s.httpsAgent ??= r, s.httpsAgent) s.httpAgent = void 0; else delete s.httpsAgent, 
      delete s.httpAgent; else s.httpsAgent = o, s.httpAgent = o;
      return s;
    }), Ne("undici").setGlobalDispatcher(xn(n)), ue = !0;
  } else {
    if (ue) {
      let o = Ne("undici");
      o.setGlobalDispatcher(new o.Agent), ue = !1;
    }
    if (r) At.defaults.httpsAgent = r;
  }
}

function X1e(e) {
  return a.AWS_ENDPOINT_URL_STS || a.AWS_ENDPOINT_URL || `https://sts.${e}.amazonaws.com`;
}

async function J1e(e) {
  let n = await dX(e);
  if (!n) return {};
  let {defaultProvider: r} = await import("./chunk-93c1jf82.js");
  return {
    requestHandler: n,
    credentials: r({
      clientConfig: {
        requestHandler: n
      },
      parentClientConfig: {
        requestHandler: n,
        ...e.region !== void 0 && {
          region: e.region
        }
      }
    })
  };
}

async function dX(e) {
  let n = Tf(), r = e.requestTimeoutMs !== void 0 && {
    requestTimeout: e.requestTimeoutMs,
    throwOnRequestTimeout: !0
  };
  if (!n || e.url && xy(e.url)) {
    let s = lgt();
    if (!s) return null;
    return new le.NodeHttpHandler({
      httpsAgent: s,
      ...r
    });
  }
  let o = nt(n);
  return new le.NodeHttpHandler({
    httpAgent: o,
    httpsAgent: o,
    ...r
  });
}

function rme() {
  v().agents.clear(), t("Cleared proxy agent cache");
}

export { pOe, og, mOo, gOo, nD, nme, h$, hOo, yOo, _Oo, INt, ONt, o$s, s$s, bOo, SOo, TG, bj, lX, wOo, IC, lgt, vOo, YS, MNt, EOo, BOr, kOo, TOo, AG, V1e, CG, HNt, Tf, jOr, K1e, xy, WOr, Dw, Pan, q1e, Y1e, Ian, AOo, aa, XS, X1e, J1e, dX, rme };
