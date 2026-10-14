// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { og, gOo } from "./chunk-w4hwgefc.js";

import { C, Ne } from "./chunk-m8ez8fhk.js";

var tHo = C(function(N) {
  var G = e => typeof ArrayBuffer === "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]";
  N.isArrayBuffer = G;
});

var d$t = C(function(X) {
  var z = tHo(), g = Ne("buffer"), Q = (e, r = 0, t = e.byteLength - r) => {
    if (!z.isArrayBuffer(e)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e} (${e})`);
    return g.Buffer.from(e, r, t);
  }, V = (e, r) => {
    if (typeof e !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof e} (${e})`);
    return r ? g.Buffer.from(e, r) : g.Buffer.from(e);
  };
  X.fromArrayBuffer = Q;
  X.fromString = V;
});

var U = C(function(R) {
  Object.defineProperty(R, "__esModule", {
    value: !0
  });
  R.fromBase64 = void 0;
  var P = d$t(), K = /^[A-Za-z0-9+/]*={0,2}$/, W = e => {
    if (e.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
    if (!K.exec(e)) throw TypeError("Invalid base64 string.");
    let r = P.fromString(e, "base64");
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  };
  R.fromBase64 = W;
});

var _T = C(function(te) {
  var x = d$t(), O = e => {
    let r = x.fromString(e, "utf8");
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }, ee = e => {
    if (typeof e === "string") return O(e);
    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    return new Uint8Array(e);
  }, re = e => {
    if (typeof e === "string") return e;
    if (typeof e !== "object" || typeof e.byteOffset !== "number" || typeof e.byteLength !== "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    return x.fromArrayBuffer(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
  };
  te.fromUtf8 = O;
  te.toUint8Array = ee;
  te.toUtf8 = re;
});

var j = C(function(_) {
  Object.defineProperty(_, "__esModule", {
    value: !0
  });
  _.toBase64 = void 0;
  var q = d$t(), L = _T(), se = e => {
    let r;
    if (typeof e === "string") r = L.fromUtf8(e); else r = e;
    if (typeof r !== "object" || typeof r.byteOffset !== "number" || typeof r.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    return q.fromArrayBuffer(r.buffer, r.byteOffset, r.byteLength).toString("base64");
  };
  _.toBase64 = se;
});

var lx = C(function(h) {
  var H = U(), k = j();
  Object.keys(H).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(h, e)) Object.defineProperty(h, e, {
      enumerable: !0,
      get: function() {
        return H[e];
      }
    });
  });
  Object.keys(k).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(h, e)) Object.defineProperty(h, e, {
      enumerable: !0,
      get: function() {
        return k[e];
      }
    });
  });
});

var aEe = C(function(he) {
  var I = og(), ie = gOo(), ae = lx();
  function D(e, r) {
    return new Request(e, r);
  }
  function ue(e = 0) {
    return new Promise((r, t) => {
      if (e) setTimeout(() => {
        let o = Error(`Request did not complete within ${e} ms`);
        o.name = "TimeoutError", t(o);
      }, e);
    });
  }
  var p = {
    supported: void 0
  };
  class w {
    config;
    configProvider;
    static create(e) {
      if (typeof e?.handle === "function") return e;
      return new w(e);
    }
    constructor(e) {
      if (typeof e === "function") this.configProvider = e().then(r => r || {}); else this.config = e ?? {}, 
      this.configProvider = Promise.resolve(this.config);
      if (p.supported === void 0) p.supported = Boolean(typeof Request < "u" && "keepalive" in D("https://[::1]"));
    }
    destroy() {}
    async handle(e, {abortSignal: r, requestTimeout: t} = {}) {
      if (!this.config) this.config = await this.configProvider;
      let o = t ?? this.config.requestTimeout, f = this.config.keepAlive === !0, i = this.config.credentials;
      if (r?.aborted) {
        let n = Error("Request aborted");
        return n.name = "AbortError", Promise.reject(n);
      }
      let s = e.path, a = ie.buildQueryString(e.query || {});
      if (a) s += `?${a}`;
      if (e.fragment) s += `#${e.fragment}`;
      let c = "";
      if (e.username != null || e.password != null) {
        let n = e.username ?? "", l = e.password ?? "";
        c = `${n}:${l}@`;
      }
      let {port: B, method: m} = e, M = `${e.protocol}//${c}${e.hostname}${B ? `:${B}` : ""}${s}`, A = m === "GET" || m === "HEAD" ? void 0 : e.body, y = {
        body: A,
        headers: new Headers(e.headers),
        method: m,
        credentials: i
      };
      if (this.config?.cache) y.cache = this.config.cache;
      if (A) y.duplex = "half";
      if (typeof AbortController < "u") y.signal = r;
      if (p.supported) y.keepalive = f;
      if (typeof this.config.requestInit === "function") Object.assign(y, this.config.requestInit(e));
      let E = () => {}, F = D(M, y), v = [ fetch(F).then(n => {
        let l = n.headers, u = {};
        for (let b of l.entries()) u[b[0]] = b[1];
        if (n.body == null) return n.blob().then(b => ({
          response: new I.HttpResponse({
            headers: u,
            reason: n.statusText,
            statusCode: n.status,
            body: b
          })
        }));
        return {
          response: new I.HttpResponse({
            headers: u,
            reason: n.statusText,
            statusCode: n.status,
            body: n.body
          })
        };
      }), ue(o) ];
      if (r) v.push(new Promise((n, l) => {
        let u = () => {
          let d = Error("Request aborted");
          d.name = "AbortError", l(d);
        };
        if (typeof r.addEventListener === "function") {
          let d = r;
          d.addEventListener("abort", u, {
            once: !0
          }), E = () => d.removeEventListener("abort", u);
        } else r.onabort = u;
      }));
      return Promise.race(v).finally(E);
    }
    updateHttpClientConfig(e, r) {
      this.config = void 0, this.configProvider = this.configProvider.then(t => (t[e] = r, 
      t));
    }
    httpHandlerConfigs() {
      return this.config ?? {};
    }
  }
  var ce = async e => {
    if (typeof Blob === "function" && e instanceof Blob || e.constructor?.name === "Blob") {
      if (Blob.prototype.arrayBuffer !== void 0) return new Uint8Array(await e.arrayBuffer());
      return ye(e);
    }
    return de(e);
  };
  async function ye(e) {
    let r = await le(e), t = ae.fromBase64(r);
    return new Uint8Array(t);
  }
  async function de(e) {
    let r = [], t = e.getReader(), o = !1, f = 0;
    while (!o) {
      let {done: a, value: c} = await t.read();
      if (c) r.push(c), f += c.length;
      o = a;
    }
    let i = new Uint8Array(f), s = 0;
    for (let a of r) i.set(a, s), s += a.length;
    return i;
  }
  function le(e) {
    return new Promise((r, t) => {
      let o = new FileReader;
      o.onloadend = () => {
        if (o.readyState !== 2) return t(Error("Reader aborted too early"));
        let f = o.result ?? "", i = f.indexOf(","), s = i > -1 ? i + 1 : f.length;
        r(f.substring(s));
      }, o.onabort = () => t(Error("Read aborted")), o.onerror = () => t(o.error), o.readAsDataURL(e);
    });
  }
  he.FetchHttpHandler = w;
  he.keepAliveSupport = p;
  he.streamCollector = ce;
});

export { tHo, d$t, _T, lx, aEe };
