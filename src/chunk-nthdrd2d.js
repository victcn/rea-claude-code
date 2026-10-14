// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { iwo, EHt } from "./chunk-b83vyyf5.js";

import { we, C, Ne } from "./chunk-m8ez8fhk.js";

var Sr = C(function(xd, qs) {
  var Pt = Object.prototype.hasOwnProperty, Ds = Object.prototype.toString, {defineProperty: bs, getOwnPropertyDescriptor: Ns} = Object, Ps = function(t) {
    if (typeof Array.isArray === "function") return Array.isArray(t);
    return Ds.call(t) === "[object Array]";
  }, Is = function(t) {
    if (!t || Ds.call(t) !== "[object Object]") return !1;
    var r = Pt.call(t, "constructor"), s = t.constructor && t.constructor.prototype && Pt.call(t.constructor.prototype, "isPrototypeOf");
    if (t.constructor && !r && !s) return !1;
    var n;
    for (n in t) ;
    return typeof n > "u" || Pt.call(t, n);
  }, Us = function(t, r) {
    if (bs && r.name === "__proto__") bs(t, r.name, {
      enumerable: !0,
      configurable: !0,
      value: r.newValue,
      writable: !0
    }); else t[r.name] = r.newValue;
  }, js = function(t, r) {
    if (r === "__proto__") {
      if (!Pt.call(t, r)) return; else if (Ns) return Ns(t, r).value;
    }
    return t[r];
  };
  qs.exports = function e() {
    var t, r, s, n, a, h, g = arguments[0], E = 1, S = arguments.length, T = !1;
    if (typeof g === "boolean") T = g, g = arguments[1] || {}, E = 2;
    if (g == null || typeof g !== "object" && typeof g !== "function") g = {};
    for (;E < S; ++E) if (t = arguments[E], t != null) {
      for (r in t) if (s = js(g, r), n = js(t, r), g !== n) {
        if (T && n && (Is(n) || (a = Ps(n)))) {
          if (a) a = !1, h = s && Ps(s) ? s : []; else h = s && Is(s) ? s : {};
          Us(g, {
            name: r,
            newValue: e(T, h, n)
          });
        } else if (typeof n < "u") Us(g, {
          name: r,
          newValue: n
        });
      }
    }
    return g;
  };
});

var Fs = C(function(bd, kc) {
  kc.exports = {
    name: "gaxios",
    version: "7.1.4",
    description: "A simple common HTTP client specifically for Google APIs and services.",
    main: "build/cjs/src/index.js",
    types: "build/cjs/src/index.d.ts",
    files: [ "build/" ],
    exports: {
      ".": {
        import: {
          types: "./build/esm/src/index.d.ts",
          default: "./build/esm/src/index.js"
        },
        require: {
          types: "./build/cjs/src/index.d.ts",
          default: "./build/cjs/src/index.js"
        }
      }
    },
    scripts: {
      lint: "gts check --no-inline-config",
      test: "c8 mocha build/esm/test",
      "presystem-test": "npm run compile",
      "system-test": "mocha build/esm/system-test --timeout 80000",
      compile: "tsc -b ./tsconfig.json ./tsconfig.cjs.json && node utils/enable-esm.mjs",
      fix: "gts fix",
      prepare: "npm run compile",
      pretest: "npm run compile",
      webpack: "webpack",
      "prebrowser-test": "npm run compile",
      "browser-test": "node build/browser-test/browser-test-runner.js",
      docs: "jsdoc -c .jsdoc.js",
      "docs-test": "linkinator docs",
      "predocs-test": "npm run docs",
      "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
      prelint: "cd samples; npm link ../; npm install",
      clean: "gts clean"
    },
    repository: {
      type: "git",
      directory: "packages/gaxios",
      url: "https://github.com/googleapis/google-cloud-node-core.git"
    },
    keywords: [ "google" ],
    engines: {
      node: ">=18"
    },
    author: "Google, LLC",
    license: "Apache-2.0",
    devDependencies: {
      "@babel/plugin-proposal-private-methods": "^7.18.6",
      "@types/cors": "^2.8.6",
      "@types/express": "^5.0.0",
      "@types/extend": "^3.0.1",
      "@types/mocha": "^10.0.10",
      "@types/multiparty": "4.2.1",
      "@types/mv": "^2.1.0",
      "@types/ncp": "^2.0.8",
      "@types/node": "^22.13.1",
      "@types/sinon": "^17.0.3",
      "@types/tmp": "^0.2.6",
      assert: "^2.0.0",
      browserify: "^17.0.0",
      c8: "^10.1.3",
      cors: "^2.8.5",
      express: "^5.0.0",
      gts: "^6.0.2",
      "is-docker": "^3.0.0",
      jsdoc: "^4.0.4",
      "jsdoc-fresh": "^5.0.0",
      "jsdoc-region-tag": "^4.0.0",
      karma: "^6.0.0",
      "karma-chrome-launcher": "^3.0.0",
      "karma-coverage": "^2.0.0",
      "karma-firefox-launcher": "^2.0.0",
      "karma-mocha": "^2.0.0",
      "karma-remap-coverage": "^0.1.5",
      "karma-sourcemap-loader": "^0.4.0",
      "karma-webpack": "^5.0.1",
      linkinator: "^6.1.2",
      mocha: "^11.1.0",
      multiparty: "^4.2.1",
      mv: "^2.1.1",
      ncp: "^2.0.0",
      nock: "^14.0.5",
      "null-loader": "^4.0.1",
      "pack-n-play": "^4.0.0",
      puppeteer: "^24.0.0",
      sinon: "^21.0.0",
      "stream-browserify": "^3.0.0",
      tmp: "0.2.5",
      "ts-loader": "^9.5.2",
      typescript: "5.8.3",
      webpack: "^5.97.1",
      "webpack-cli": "^6.0.1"
    },
    dependencies: {
      extend: "^3.0.2",
      "https-proxy-agent": "^7.0.1",
      "node-fetch": "^3.3.2"
    },
    homepage: "https://github.com/googleapis/google-cloud-node-core/tree/main/packages/gaxios"
  };
});

var Ls = C(function(Nd, Ms) {
  var Sc = Fs();
  Ms.exports = {
    pkg: Sc
  };
});

var xr = C(function(ye) {
  var Bs = ye && ye.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(ye, "__esModule", {
    value: !0
  });
  ye.GaxiosError = ye.GAXIOS_ERROR_SYMBOL = void 0;
  ye.defaultErrorRedactor = Hs;
  var Gs = Bs(Sr()), Oc = Bs(Ls()), Or = Oc.default.pkg;
  ye.GAXIOS_ERROR_SYMBOL = Symbol.for(`${Or.name}-gaxios-error`);
  class Rr extends Error {
    config;
    response;
    code;
    status;
    error;
    [ye.GAXIOS_ERROR_SYMBOL]=Or.version;
    static [Symbol.hasInstance](e) {
      if (e && typeof e === "object" && ye.GAXIOS_ERROR_SYMBOL in e && e[ye.GAXIOS_ERROR_SYMBOL] === Or.version) return !0;
      return Function.prototype[Symbol.hasInstance].call(Rr, e);
    }
    constructor(e, t, r, s) {
      super(e, {
        cause: s
      });
      if (this.config = t, this.response = r, this.error = s instanceof Error ? s : void 0, 
      this.config = (0, Gs.default)(!0, {}, t), this.response) this.response.config = (0, 
      Gs.default)(!0, {}, this.response.config);
      if (this.response) {
        try {
          this.response.data = Rc(this.config.responseType, this.response?.bodyUsed ? this.response?.data : void 0);
        } catch {}
        this.status = this.response.status;
      }
      if (s instanceof DOMException) this.code = s.name; else if (s && typeof s === "object" && "code" in s && (typeof s.code === "string" || typeof s.code === "number")) this.code = s.code;
    }
    static extractAPIErrorFromResponse(e, t = "The request failed") {
      let r = t;
      if (typeof e.data === "string") r = e.data;
      if (e.data && typeof e.data === "object" && "error" in e.data && e.data.error && !e.ok) {
        if (typeof e.data.error === "string") return {
          message: e.data.error,
          code: e.status,
          status: e.statusText
        };
        if (typeof e.data.error === "object") {
          r = "message" in e.data.error && typeof e.data.error.message === "string" ? e.data.error.message : r;
          let s = "status" in e.data.error && typeof e.data.error.status === "string" ? e.data.error.status : e.statusText, n = "code" in e.data.error && typeof e.data.error.code === "number" ? e.data.error.code : e.status;
          if ("errors" in e.data.error && Array.isArray(e.data.error.errors)) {
            let a = [];
            for (let h of e.data.error.errors) if (typeof h === "object" && "message" in h && typeof h.message === "string") a.push(h.message);
            return Object.assign({
              message: a.join(`\n`) || r,
              code: n,
              status: s
            }, e.data.error);
          }
          return Object.assign({
            message: r,
            code: n,
            status: s
          }, e.data.error);
        }
      }
      return {
        message: r,
        code: e.status,
        status: e.statusText
      };
    }
  }
  ye.GaxiosError = Rr;
  function Rc(e, t) {
    switch (e) {
     case "stream":
      return t;

     case "json":
      return JSON.parse(JSON.stringify(t));

     case "arraybuffer":
      return JSON.parse(Buffer.from(t).toString("utf8"));

     case "blob":
      return JSON.parse(t.text());

     default:
      return t;
    }
  }
  function Hs(e) {
    function r(a) {
      if (!a) return;
      a.forEach((h, g) => {
        if (/^authentication$/i.test(g) || /^authorization$/i.test(g) || /secret/i.test(g)) a.set(g, "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
      });
    }
    function s(a, h) {
      if (typeof a === "object" && a !== null && typeof a[h] === "string") {
        let g = a[h];
        if (/grant_type=/i.test(g) || /assertion=/i.test(g) || /secret/i.test(g)) a[h] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
      }
    }
    function n(a) {
      if (!a || typeof a !== "object") return; else if (a instanceof FormData || a instanceof URLSearchParams || "forEach" in a && "set" in a) a.forEach((h, g) => {
        if ([ "grant_type", "assertion" ].includes(g) || /secret/.test(g)) a.set(g, "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
      }); else {
        if ("grant_type" in a) a.grant_type = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
        if ("assertion" in a) a.assertion = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
        if ("client_secret" in a) a.client_secret = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
      }
    }
    if (e.config) {
      if (r(e.config.headers), s(e.config, "data"), n(e.config.data), s(e.config, "body"), 
      n(e.config.body), e.config.url.searchParams.has("token")) e.config.url.searchParams.set("token", "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
      if (e.config.url.searchParams.has("client_secret")) e.config.url.searchParams.set("client_secret", "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
    }
    if (e.response) {
      if (Hs({
        config: e.response.config
      }), r(e.response.headers), e.response.bodyUsed) s(e.response, "data"), n(e.response.data);
    }
    return e;
  }
});

var Ks = C(function(Js) {
  Object.defineProperty(Js, "__esModule", {
    value: !0
  });
  Js.getRetryConfig = xc;
  async function xc(e) {
    let t = $s(e);
    if (!e || !e.config || !t && !e.config.retry) return {
      shouldRetry: !1
    };
    t = t || {}, t.currentRetryAttempt = t.currentRetryAttempt || 0, t.retry = t.retry === void 0 || t.retry === null ? 3 : t.retry, 
    t.httpMethodsToRetry = t.httpMethodsToRetry || [ "GET", "HEAD", "PUT", "OPTIONS", "DELETE" ], 
    t.noResponseRetries = t.noResponseRetries === void 0 || t.noResponseRetries === null ? 2 : t.noResponseRetries, 
    t.retryDelayMultiplier = t.retryDelayMultiplier ? t.retryDelayMultiplier : 2, t.timeOfFirstRequest = t.timeOfFirstRequest ? t.timeOfFirstRequest : Date.now(), 
    t.totalTimeout = t.totalTimeout ? t.totalTimeout : Number.MAX_SAFE_INTEGER, t.maxRetryDelay = t.maxRetryDelay ? t.maxRetryDelay : Number.MAX_SAFE_INTEGER;
    let r = [ [ 100, 199 ], [ 408, 408 ], [ 429, 429 ], [ 500, 599 ] ];
    if (t.statusCodesToRetry = t.statusCodesToRetry || r, e.config.retryConfig = t, 
    !await (t.shouldRetry || bc)(e)) return {
      shouldRetry: !1,
      config: e.config
    };
    let n = Nc(t);
    e.config.retryConfig.currentRetryAttempt += 1;
    let a = t.retryBackoff ? t.retryBackoff(e, n) : new Promise(h => {
      setTimeout(h, n);
    });
    if (t.onRetryAttempt) await t.onRetryAttempt(e);
    return await a, {
      shouldRetry: !0,
      config: e.config
    };
  }
  function bc(e) {
    let t = $s(e);
    if (e.config.signal?.aborted && e.code !== "TimeoutError" || e.code === "AbortError") return !1;
    if (!t || t.retry === 0) return !1;
    if (!e.response && (t.currentRetryAttempt || 0) >= t.noResponseRetries) return !1;
    if (!t.httpMethodsToRetry || !t.httpMethodsToRetry.includes(e.config.method?.toUpperCase() || "GET")) return !1;
    if (e.response && e.response.status) {
      let r = !1;
      for (let [s, n] of t.statusCodesToRetry) {
        let a = e.response.status;
        if (a >= s && a <= n) {
          r = !0;
          break;
        }
      }
      if (!r) return !1;
    }
    if (t.currentRetryAttempt = t.currentRetryAttempt || 0, t.currentRetryAttempt >= t.retry) return !1;
    return !0;
  }
  function $s(e) {
    if (e && e.config && e.config.retryConfig) return e.config.retryConfig;
    return;
  }
  function Nc(e) {
    let r = (e.currentRetryAttempt ? 0 : e.retryDelay ?? 100) + (Math.pow(e.retryDelayMultiplier, e.currentRetryAttempt) - 1) / 2 * 1e3, s = e.totalTimeout - (Date.now() - e.timeOfFirstRequest);
    return Math.min(r, s, e.maxRetryDelay);
  }
});

var br = C(function(Vs) {
  Object.defineProperty(Vs, "__esModule", {
    value: !0
  });
  Vs.GaxiosInterceptorManager = void 0;
  class Ws extends Set {}
  Vs.GaxiosInterceptorManager = Ws;
});

var Qs = C(function(it) {
  var Ic = it && it.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }, nt;
  Object.defineProperty(it, "__esModule", {
    value: !0
  });
  it.Gaxios = void 0;
  var Uc = Ic(Sr()), Xs = Ne("https"), ue = xr(), zs = Ks(), It = Ne("stream"), Ut = br(), jc = async () => globalThis.crypto?.randomUUID() || (await import("crypto")).randomUUID(), Dc = 204;
  class Nr {
    agentCache=new Map;
    defaults;
    interceptors;
    constructor(e) {
      this.defaults = e || {}, this.interceptors = {
        request: new Ut.GaxiosInterceptorManager,
        response: new Ut.GaxiosInterceptorManager
      };
    }
    fetch(...e) {
      let t = e[0], r = e[1], s = void 0, n = new Headers;
      if (typeof t === "string") s = new URL(t); else if (t instanceof URL) s = t; else if (t && t.url) s = new URL(t.url);
      if (t && typeof t === "object" && "headers" in t) nt.mergeHeaders(n, t.headers);
      if (r) nt.mergeHeaders(n, new Headers(r.headers));
      if (typeof t === "object" && !(t instanceof URL)) return this.request({
        ...r,
        ...t,
        headers: n,
        url: s
      }); else return this.request({
        ...r,
        headers: n,
        url: s
      });
    }
    async request(e = {}) {
      let t = await this.#s(e);
      return t = await this.#t(t), this.#r(this._request(t));
    }
    async _defaultAdapter(e) {
      let t = e.fetchImplementation || this.defaults.fetchImplementation || await nt.#c(), r = {
        ...e
      };
      delete r.data;
      let s = await t(e.url, r), n = await this.getResponseData(e, s);
      if (!Object.getOwnPropertyDescriptor(s, "data")?.configurable) Object.defineProperties(s, {
        data: {
          configurable: !0,
          writable: !0,
          enumerable: !0,
          value: n
        }
      });
      return Object.assign(s, {
        config: e,
        data: n
      });
    }
    async _request(e) {
      try {
        let t;
        if (e.adapter) t = await e.adapter(e, this._defaultAdapter.bind(this)); else t = await this._defaultAdapter(e);
        if (!e.validateStatus(t.status)) {
          if (e.responseType === "stream") {
            let s = [];
            for await (let n of t.data) s.push(n);
            t.data = s.toString();
          }
          let r = ue.GaxiosError.extractAPIErrorFromResponse(t, `Request failed with status code ${t.status}`);
          throw new ue.GaxiosError(r?.message, e, t, r);
        }
        return t;
      } catch (t) {
        let r;
        if (t instanceof ue.GaxiosError) r = t; else if (t instanceof Error) r = new ue.GaxiosError(t.message, e, void 0, t); else r = new ue.GaxiosError("Unexpected Gaxios Error", e, void 0, t);
        let {shouldRetry: s, config: n} = await zs.getRetryConfig(r);
        if (s && n) return r.config.retryConfig.currentRetryAttempt = n.retryConfig.currentRetryAttempt, 
        e.retryConfig = r.config?.retryConfig, this.#n(e), this._request(e);
        if (e.errorRedactor) e.errorRedactor(r);
        throw r;
      }
    }
    async getResponseData(e, t) {
      if (t.status === Dc) return "";
      if (e.maxContentLength && t.headers.has("content-length") && e.maxContentLength < Number.parseInt(t.headers?.get("content-length") || "")) throw new ue.GaxiosError("Response's `Content-Length` is over the limit.", e, Object.assign(t, {
        config: e
      }));
      switch (e.responseType) {
       case "stream":
        return t.body;

       case "json":
        {
          let r = await t.text();
          try {
            return JSON.parse(r);
          } catch {
            return r;
          }
        }

       case "arraybuffer":
        return t.arrayBuffer();

       case "blob":
        return t.blob();

       case "text":
        return t.text();

       default:
        return this.getResponseDataFromContentType(t);
      }
    }
    #e(e, t = []) {
      let r = new URL(e), s = [ ...t ], n = (process.env.NO_PROXY ?? process.env.no_proxy)?.split(",") || [];
      for (let a of n) s.push(a.trim());
      for (let a of s) if (a instanceof RegExp) {
        if (a.test(r.toString())) return !1;
      } else if (a instanceof URL) {
        if (a.origin === r.origin) return !1;
      } else if (a.startsWith("*.") || a.startsWith(".")) {
        let h = a.replace(/^\*\./, ".");
        if (r.hostname.endsWith(h)) return !1;
      } else if (a === r.origin || a === r.hostname || a === r.href) return !1;
      return !0;
    }
    async #t(e) {
      let t = Promise.resolve(e);
      for (let r of this.interceptors.request.values()) if (r) t = t.then(r.resolved, r.rejected);
      return t;
    }
    async #r(e) {
      let t = Promise.resolve(e);
      for (let r of this.interceptors.response.values()) if (r) t = t.then(r.resolved, r.rejected);
      return t;
    }
    async #s(e) {
      let t = new Headers(this.defaults.headers);
      nt.mergeHeaders(t, e.headers);
      let r = (0, Uc.default)(!0, {}, this.defaults, e);
      if (!r.url) throw Error("URL is required.");
      if (r.baseURL) r.url = new URL(r.url, r.baseURL);
      if (r.url = new URL(r.url), r.params) if (r.paramsSerializer) {
        let a = r.paramsSerializer(r.params);
        if (a.startsWith("?")) a = a.slice(1);
        let h = r.url.toString().includes("?") ? "&" : "?";
        r.url = r.url + h + a;
      } else {
        let a = r.url instanceof URL ? r.url : new URL(r.url);
        for (let [h, g] of new URLSearchParams(r.params)) a.searchParams.append(h, g);
        r.url = a;
      }
      if (typeof e.maxContentLength === "number") r.size = e.maxContentLength;
      if (typeof e.maxRedirects === "number") r.follow = e.maxRedirects;
      let s = typeof r.data === "string" || r.data instanceof ArrayBuffer || r.data instanceof Blob || globalThis.File && r.data instanceof File || r.data instanceof FormData || r.data instanceof It.Readable || r.data instanceof ReadableStream || r.data instanceof String || r.data instanceof URLSearchParams || ArrayBuffer.isView(r.data) || [ "Blob", "File", "FormData" ].includes(r.data?.constructor?.name || "");
      if (r.multipart?.length) {
        let a = await jc();
        t.set("content-type", `multipart/related; boundary=${a}`), r.body = It.Readable.from(this.getMultipartRequest(r.multipart, a));
      } else if (s) r.body = r.data; else if (typeof r.data === "object") if (t.get("Content-Type") === "application/x-www-form-urlencoded") r.body = r.paramsSerializer ? r.paramsSerializer(r.data) : new URLSearchParams(r.data); else {
        if (!t.has("content-type")) t.set("content-type", "application/json");
        r.body = JSON.stringify(r.data);
      } else if (r.data) r.body = r.data;
      if (r.validateStatus = r.validateStatus || this.validateStatus, r.responseType = r.responseType || "unknown", 
      !t.has("accept") && r.responseType === "json") t.set("accept", "application/json");
      let n = r.proxy || process?.env?.HTTPS_PROXY || process?.env?.https_proxy || process?.env?.HTTP_PROXY || process?.env?.http_proxy;
      if (r.agent) ; else if (n && this.#e(r.url, r.noProxy)) {
        let a = await nt.#a();
        if (this.agentCache.has(n)) r.agent = this.agentCache.get(n); else r.agent = new a(n, {
          cert: r.cert,
          key: r.key
        }), this.agentCache.set(n, r.agent);
      } else if (r.cert && r.key) if (this.agentCache.has(r.key)) r.agent = this.agentCache.get(r.key); else r.agent = new Xs.Agent({
        cert: r.cert,
        key: r.key
      }), this.agentCache.set(r.key, r.agent);
      if (typeof r.errorRedactor !== "function" && r.errorRedactor !== !1) r.errorRedactor = ue.defaultErrorRedactor;
      if (r.body && !("duplex" in r)) r.duplex = "half";
      return this.#n(r), Object.assign(r, {
        headers: t,
        url: r.url instanceof URL ? r.url : new URL(r.url)
      });
    }
    #n(e) {
      if (e.timeout) {
        let t = AbortSignal.timeout(e.timeout);
        if (e.signal && !e.signal.aborted) e.signal = AbortSignal.any([ e.signal, t ]); else e.signal = t;
      }
    }
    validateStatus(e) {
      return e >= 200 && e < 300;
    }
    async getResponseDataFromContentType(e) {
      let t = e.headers.get("Content-Type");
      if (t === null) return e.text();
      if (t = t.toLowerCase(), t.includes("application/json")) {
        let r = await e.text();
        try {
          r = JSON.parse(r);
        } catch {}
        return r;
      } else if (t.match(/^text\//)) return e.text(); else return e.blob();
    }
    async* getMultipartRequest(e, t) {
      let r = `--${t}--`;
      for (let s of e) {
        let n = s.headers.get("Content-Type") || "application/octet-stream";
        if (yield `--${t}\r\nContent-Type: ${n}\r\n\r\n`, typeof s.content === "string") yield s.content; else yield* s.content;
        yield `\r\n`;
      }
      yield r;
    }
    static #i;
    static #o;
    static async #a() {
      return this.#i ||= (await import("./chunk-vgwc2s26.js").then(m => we(m.default))).HttpsProxyAgent, 
      this.#i;
    }
    static async #c() {
      let e = typeof window < "u" && !!window;
      return this.#o ||= e ? window.fetch : (await import("node-fetch")).default, this.#o;
    }
    static mergeHeaders(e, ...t) {
      e = e instanceof Headers ? e : new Headers(e);
      for (let r of t) (r instanceof Headers ? r : new Headers(r)).forEach((n, a) => {
        a === "set-cookie" ? e.append(a, n) : e.set(a, n);
      });
      return e;
    }
  }
  it.Gaxios = Nr;
  nt = Nr;
});

var re = C(function(ae) {
  var qc = ae && ae.__createBinding || (Object.create ? function(e, t, r, s) {
    if (s === void 0) s = r;
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) n = {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    };
    Object.defineProperty(e, s, n);
  } : function(e, t, r, s) {
    if (s === void 0) s = r;
    e[s] = t[r];
  }), Fc = ae && ae.__exportStar || function(e, t) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) qc(t, e, r);
  };
  Object.defineProperty(ae, "__esModule", {
    value: !0
  });
  ae.instance = ae.Gaxios = ae.GaxiosError = void 0;
  ae.request = Lc;
  var jt = Qs();
  Object.defineProperty(ae, "Gaxios", {
    enumerable: !0,
    get: function() {
      return jt.Gaxios;
    }
  });
  var Mc = xr();
  Object.defineProperty(ae, "GaxiosError", {
    enumerable: !0,
    get: function() {
      return Mc.GaxiosError;
    }
  });
  Fc(br(), ae);
  ae.instance = new jt.Gaxios;
  async function Lc(e) {
    return ae.instance.request(e);
  }
});

var Pr = C(function(Zs, Dt) {
  (function(e) {
    var t, r = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, {ceil: s, floor: n} = Math, a = "[BigNumber Error] ", h = a + "Number primitive has more than 15 significant digits: ", g = 1e14, E = 14, S = 9007199254740991, T = [ 1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13 ], j = 1e7, I = 1e9;
    function Y(D) {
      var U, L, W, v = A.prototype = {
        constructor: A,
        toString: null,
        valueOf: null
      }, ee = new A(1), V = 20, X = 4, ce = -7, de = 21, Ze = -1e7, Se = 1e7, et = !1, wt = 1, Be = 0, wr = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: "\xa0",
        suffix: ""
      }, tt = "0123456789abcdefghijklmnopqrstuvwxyz", Ar = !0;
      function A(i, o) {
        var c, y, l, f, m, u, d, _, p = this;
        if (!(p instanceof A)) return new A(i, o);
        if (o == null) {
          if (i && i._isBigNumber === !0) {
            if (p.s = i.s, !i.c || i.e > Se) p.c = p.e = null; else if (i.e < Ze) p.c = [ p.e = 0 ]; else p.e = i.e, 
            p.c = i.c.slice();
            return;
          }
          if ((u = typeof i == "number") && i * 0 == 0) {
            if (p.s = 1 / i < 0 ? (i = -i, -1) : 1, i === ~~i) {
              for (f = 0, m = i; m >= 10; m /= 10, f++) ;
              if (f > Se) p.c = p.e = null; else p.e = f, p.c = [ i ];
              return;
            }
            _ = String(i);
          } else {
            if (!r.test(_ = String(i))) return W(p, _, u);
            p.s = _.charCodeAt(0) == 45 ? (_ = _.slice(1), -1) : 1;
          }
          if ((f = _.indexOf(".")) > -1) _ = _.replace(".", "");
          if ((m = _.search(/e/i)) > 0) {
            if (f < 0) f = m;
            f += +_.slice(m + 1), _ = _.substring(0, m);
          } else if (f < 0) f = _.length;
        } else {
          if (O(o, 2, tt.length, "Base"), o == 10 && Ar) return p = new A(i), pe(p, V + p.e + 1, X);
          if (_ = String(i), u = typeof i == "number") {
            if (i * 0 != 0) return W(p, _, u, o);
            if (p.s = 1 / i < 0 ? (_ = _.slice(1), -1) : 1, A.DEBUG && _.replace(/^0\.0*|\./, "").length > 15) throw Error(h + i);
          } else p.s = _.charCodeAt(0) === 45 ? (_ = _.slice(1), -1) : 1;
          c = tt.slice(0, o), f = m = 0;
          for (d = _.length; m < d; m++) if (c.indexOf(y = _.charAt(m)) < 0) {
            if (y == ".") {
              if (m > f) {
                f = d;
                continue;
              }
            } else if (!l) {
              if (_ == _.toUpperCase() && (_ = _.toLowerCase()) || _ == _.toLowerCase() && (_ = _.toUpperCase())) {
                l = !0, m = -1, f = 0;
                continue;
              }
            }
            return W(p, String(i), u, o);
          }
          if (u = !1, _ = L(_, o, 10, p.s), (f = _.indexOf(".")) > -1) _ = _.replace(".", ""); else f = _.length;
        }
        for (m = 0; _.charCodeAt(m) === 48; m++) ;
        for (d = _.length; _.charCodeAt(--d) === 48; ) ;
        if (_ = _.slice(m, ++d)) {
          if (d -= m, u && A.DEBUG && d > 15 && (i > S || i !== n(i))) throw Error(h + p.s * i);
          if ((f = f - m - 1) > Se) p.c = p.e = null; else if (f < Ze) p.c = [ p.e = 0 ]; else {
            if (p.e = f, p.c = [], m = (f + 1) % E, f < 0) m += E;
            if (m < d) {
              if (m) p.c.push(+_.slice(0, m));
              for (d -= E; m < d; ) p.c.push(+_.slice(m, m += E));
              m = E - (_ = _.slice(m)).length;
            } else m -= d;
            for (;m--; _ += "0") ;
            p.c.push(+_);
          }
        } else p.c = [ p.e = 0 ];
      }
      A.clone = Y, A.ROUND_UP = 0, A.ROUND_DOWN = 1, A.ROUND_CEIL = 2, A.ROUND_FLOOR = 3, 
      A.ROUND_HALF_UP = 4, A.ROUND_HALF_DOWN = 5, A.ROUND_HALF_EVEN = 6, A.ROUND_HALF_CEIL = 7, 
      A.ROUND_HALF_FLOOR = 8, A.EUCLID = 9, A.config = A.set = function(i) {
        var o, c;
        if (i != null) if (typeof i == "object") {
          if (i.hasOwnProperty(o = "DECIMAL_PLACES")) c = i[o], O(c, 0, I, o), V = c;
          if (i.hasOwnProperty(o = "ROUNDING_MODE")) c = i[o], O(c, 0, 8, o), X = c;
          if (i.hasOwnProperty(o = "EXPONENTIAL_AT")) if (c = i[o], c && c.pop) O(c[0], -I, 0, o), 
          O(c[1], 0, I, o), ce = c[0], de = c[1]; else O(c, -I, I, o), ce = -(de = c < 0 ? -c : c);
          if (i.hasOwnProperty(o = "RANGE")) if (c = i[o], c && c.pop) O(c[0], -I, -1, o), 
          O(c[1], 1, I, o), Ze = c[0], Se = c[1]; else if (O(c, -I, I, o), c) Ze = -(Se = c < 0 ? -c : c); else throw Error(a + o + " cannot be zero: " + c);
          if (i.hasOwnProperty(o = "CRYPTO")) if (c = i[o], c === !!c) if (c) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) et = c; else throw et = !c, 
          Error(a + "crypto unavailable"); else et = c; else throw Error(a + o + " not true or false: " + c);
          if (i.hasOwnProperty(o = "MODULO_MODE")) c = i[o], O(c, 0, 9, o), wt = c;
          if (i.hasOwnProperty(o = "POW_PRECISION")) c = i[o], O(c, 0, I, o), Be = c;
          if (i.hasOwnProperty(o = "FORMAT")) if (c = i[o], typeof c == "object") wr = c; else throw Error(a + o + " not an object: " + c);
          if (i.hasOwnProperty(o = "ALPHABET")) if (c = i[o], typeof c == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(c)) Ar = c.slice(0, 10) == "0123456789", 
          tt = c; else throw Error(a + o + " invalid: " + c);
        } else throw Error(a + "Object expected: " + i);
        return {
          DECIMAL_PLACES: V,
          ROUNDING_MODE: X,
          EXPONENTIAL_AT: [ ce, de ],
          RANGE: [ Ze, Se ],
          CRYPTO: et,
          MODULO_MODE: wt,
          POW_PRECISION: Be,
          FORMAT: wr,
          ALPHABET: tt
        };
      }, A.isBigNumber = function(i) {
        if (!i || i._isBigNumber !== !0) return !1;
        if (!A.DEBUG) return !0;
        var o, c, {c: y, e: l, s: f} = i;
        e: if ({}.toString.call(y) == "[object Array]") {
          if ((f === 1 || f === -1) && l >= -I && l <= I && l === n(l)) {
            if (y[0] === 0) {
              if (l === 0 && y.length === 1) return !0;
              break e;
            }
            if (o = (l + 1) % E, o < 1) o += E;
            if (String(y[0]).length == o) {
              for (o = 0; o < y.length; o++) if (c = y[o], c < 0 || c >= g || c !== n(c)) break e;
              if (c !== 0) return !0;
            }
          }
        } else if (y === null && l === null && (f === null || f === 1 || f === -1)) return !0;
        throw Error(a + "Invalid BigNumber: " + i);
      }, A.maximum = A.max = function() {
        return xs(arguments, -1);
      }, A.minimum = A.min = function() {
        return xs(arguments, 1);
      }, A.random = function() {
        var i = 9007199254740992, o = Math.random() * i & 2097151 ? function() {
          return n(Math.random() * i);
        } : function() {
          return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
        };
        return function(c) {
          var y, l, f, m, u, d = 0, _ = [], p = new A(ee);
          if (c == null) c = V; else O(c, 0, I);
          if (m = s(c / E), et) if (crypto.getRandomValues) {
            y = crypto.getRandomValues(new Uint32Array(m *= 2));
            for (;d < m; ) if (u = y[d] * 131072 + (y[d + 1] >>> 11), u >= 9e15) l = crypto.getRandomValues(new Uint32Array(2)), 
            y[d] = l[0], y[d + 1] = l[1]; else _.push(u % 1e14), d += 2;
            d = m / 2;
          } else if (crypto.randomBytes) {
            y = crypto.randomBytes(m *= 7);
            for (;d < m; ) if (u = (y[d] & 31) * 281474976710656 + y[d + 1] * 1099511627776 + y[d + 2] * 4294967296 + y[d + 3] * 16777216 + (y[d + 4] << 16) + (y[d + 5] << 8) + y[d + 6], 
            u >= 9e15) crypto.randomBytes(7).copy(y, d); else _.push(u % 1e14), d += 7;
            d = m / 7;
          } else throw et = !1, Error(a + "crypto unavailable");
          if (!et) {
            for (;d < m; ) if (u = o(), u < 9e15) _[d++] = u % 1e14;
          }
          if (m = _[--d], c %= E, m && c) u = T[E - c], _[d] = n(m / u) * u;
          for (;_[d] === 0; _.pop(), d--) ;
          if (d < 0) _ = [ f = 0 ]; else {
            for (f = -1; _[0] === 0; _.splice(0, 1), f -= E) ;
            for (d = 1, u = _[0]; u >= 10; u /= 10, d++) ;
            if (d < E) f -= E - d;
          }
          return p.e = f, p.c = _, p;
        };
      }(), A.sum = function() {
        var i = 1, o = arguments, c = new A(o[0]);
        for (;i < o.length; ) c = c.plus(o[i++]);
        return c;
      }, L = function() {
        var i = "0123456789";
        function o(c, y, l, f) {
          var m, u = [ 0 ], d, _ = 0, p = c.length;
          for (;_ < p; ) {
            for (d = u.length; d--; u[d] *= y) ;
            u[0] += f.indexOf(c.charAt(_++));
            for (m = 0; m < u.length; m++) if (u[m] > l - 1) {
              if (u[m + 1] == null) u[m + 1] = 0;
              u[m + 1] += u[m] / l | 0, u[m] %= l;
            }
          }
          return u.reverse();
        }
        return function(c, y, l, f, m) {
          var u, d, _, p, w, x, b, M, z = c.indexOf("."), te = V, F = X;
          if (z >= 0) p = Be, Be = 0, c = c.replace(".", ""), M = new A(y), x = M.pow(c.length - z), 
          Be = p, M.c = o(ie(R(x.c), x.e, "0"), 10, l, i), M.e = M.c.length;
          b = o(c, y, l, m ? (u = tt, i) : (u = i, tt)), _ = p = b.length;
          for (;b[--p] == 0; b.pop()) ;
          if (!b[0]) return u.charAt(0);
          if (z < 0) --_; else x.c = b, x.e = _, x.s = f, x = U(x, M, te, F, l), b = x.c, 
          w = x.r, _ = x.e;
          if (d = _ + te + 1, z = b[d], p = l / 2, w = w || d < 0 || b[d + 1] != null, w = F < 4 ? (z != null || w) && (F == 0 || F == (x.s < 0 ? 3 : 2)) : z > p || z == p && (F == 4 || w || F == 6 && b[d - 1] & 1 || F == (x.s < 0 ? 8 : 7)), 
          d < 1 || !b[0]) c = w ? ie(u.charAt(1), -te, u.charAt(0)) : u.charAt(0); else {
            if (b.length = d, w) {
              for (--l; ++b[--d] > l; ) if (b[d] = 0, !d) ++_, b = [ 1 ].concat(b);
            }
            for (p = b.length; !b[--p]; ) ;
            for (z = 0, c = ""; z <= p; c += u.charAt(b[z++])) ;
            c = ie(c, _, u.charAt(0));
          }
          return c;
        };
      }(), U = function() {
        function i(y, l, f) {
          var m, u, d, _, p = 0, w = y.length, x = l % j, b = l / j | 0;
          for (y = y.slice(); w--; ) d = y[w] % j, _ = y[w] / j | 0, m = b * d + _ * x, u = x * d + m % j * j + p, 
          p = (u / f | 0) + (m / j | 0) + b * _, y[w] = u % f;
          if (p) y = [ p ].concat(y);
          return y;
        }
        function o(y, l, f, m) {
          var u, d;
          if (f != m) d = f > m ? 1 : -1; else for (u = d = 0; u < f; u++) if (y[u] != l[u]) {
            d = y[u] > l[u] ? 1 : -1;
            break;
          }
          return d;
        }
        function c(y, l, f, m) {
          var u = 0;
          for (;f--; ) y[f] -= u, u = y[f] < l[f] ? 1 : 0, y[f] = u * m + y[f] - l[f];
          for (;!y[0] && y.length > 1; y.splice(0, 1)) ;
        }
        return function(y, l, f, m, u) {
          var d, _, p, w, x, b, M, z, te, F, B, ne, Nt, vr, kr, be, At, ge = y.s == l.s ? 1 : -1, oe = y.c, Q = l.c;
          if (!oe || !oe[0] || !Q || !Q[0]) return new A(!y.s || !l.s || (oe ? Q && oe[0] == Q[0] : !Q) ? NaN : oe && oe[0] == 0 || !Q ? ge * 0 : ge / 0);
          if (z = new A(ge), te = z.c = [], _ = y.e - l.e, ge = f + _ + 1, !u) u = g, _ = K(y.e / E) - K(l.e / E), 
          ge = ge / E | 0;
          for (p = 0; Q[p] == (oe[p] || 0); p++) ;
          if (Q[p] > (oe[p] || 0)) _--;
          if (ge < 0) te.push(1), w = !0; else {
            if (vr = oe.length, be = Q.length, p = 0, ge += 2, x = n(u / (Q[0] + 1)), x > 1) Q = i(Q, x, u), 
            oe = i(oe, x, u), be = Q.length, vr = oe.length;
            Nt = be, F = oe.slice(0, be), B = F.length;
            for (;B < be; F[B++] = 0) ;
            if (At = Q.slice(), At = [ 0 ].concat(At), kr = Q[0], Q[1] >= u / 2) kr++;
            do {
              if (x = 0, d = o(Q, F, be, B), d < 0) {
                if (ne = F[0], be != B) ne = ne * u + (F[1] || 0);
                if (x = n(ne / kr), x > 1) {
                  if (x >= u) x = u - 1;
                  b = i(Q, x, u), M = b.length, B = F.length;
                  while (o(b, F, M, B) == 1) x--, c(b, be < M ? At : Q, M, u), M = b.length, d = 1;
                } else {
                  if (x == 0) d = x = 1;
                  b = Q.slice(), M = b.length;
                }
                if (M < B) b = [ 0 ].concat(b);
                if (c(F, b, B, u), B = F.length, d == -1) while (o(Q, F, be, B) < 1) x++, c(F, be < B ? At : Q, B, u), 
                B = F.length;
              } else if (d === 0) x++, F = [ 0 ];
              if (te[p++] = x, F[0]) F[B++] = oe[Nt] || 0; else F = [ oe[Nt] ], B = 1;
            } while ((Nt++ < vr || F[0] != null) && ge--);
            if (w = F[0] != null, !te[0]) te.splice(0, 1);
          }
          if (u == g) {
            for (p = 1, ge = te[0]; ge >= 10; ge /= 10, p++) ;
            pe(z, f + (z.e = p + _ * E - 1) + 1, m, w);
          } else z.e = _, z.r = +w;
          return z;
        };
      }();
      function Tr(i, o, c, y) {
        var l, f, m, u, d;
        if (c == null) c = X; else O(c, 0, 8);
        if (!i.c) return i.toString();
        if (l = i.c[0], m = i.e, o == null) d = R(i.c), d = y == 1 || y == 2 && (m <= ce || m >= de) ? Z(d, m) : ie(d, m, "0"); else if (i = pe(new A(i), o, c), 
        f = i.e, d = R(i.c), u = d.length, y == 1 || y == 2 && (o <= f || f <= ce)) {
          for (;u < o; d += "0", u++) ;
          d = Z(d, f);
        } else if (o -= m, d = ie(d, f, "0"), f + 1 > u) {
          if (--o > 0) for (d += "."; o--; d += "0") ;
        } else if (o += f - u, o > 0) {
          if (f + 1 == u) d += ".";
          for (;o--; d += "0") ;
        }
        return i.s < 0 && l ? "-" + d : d;
      }
      function xs(i, o) {
        var c, y, l = 1, f = new A(i[0]);
        for (;l < i.length; l++) if (y = new A(i[l]), !y.s || (c = P(f, y)) === o || c === 0 && f.s === o) f = y;
        return f;
      }
      function Cr(i, o, c) {
        var y = 1, l = o.length;
        for (;!o[--l]; o.pop()) ;
        for (l = o[0]; l >= 10; l /= 10, y++) ;
        if ((c = y + c * E - 1) > Se) i.c = i.e = null; else if (c < Ze) i.c = [ i.e = 0 ]; else i.e = c, 
        i.c = o;
        return i;
      }
      W = function() {
        var i = /^(-?)0([xbo])(?=\w[\w.]*$)/i, o = /^([^.]+)\.$/, c = /^\.([^.]+)$/, y = /^-?(Infinity|NaN)$/, l = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(f, m, u, d) {
          var _, p = u ? m : m.replace(l, "");
          if (y.test(p)) f.s = isNaN(p) ? null : p < 0 ? -1 : 1; else {
            if (!u) {
              if (p = p.replace(i, function(w, x, b) {
                return _ = (b = b.toLowerCase()) == "x" ? 16 : b == "b" ? 2 : 8, !d || d == _ ? x : w;
              }), d) _ = d, p = p.replace(o, "$1").replace(c, "0.$1");
              if (m != p) return new A(p, _);
            }
            if (A.DEBUG) throw Error(a + "Not a" + (d ? " base " + d : "") + " number: " + m);
            f.s = null;
          }
          f.c = f.e = null;
        };
      }();
      function pe(i, o, c, y) {
        var l, f, m, u, d, _, p, w = i.c, x = T;
        if (w) {
          e: {
            for (l = 1, u = w[0]; u >= 10; u /= 10, l++) ;
            if (f = o - l, f < 0) f += E, m = o, d = w[_ = 0], p = n(d / x[l - m - 1] % 10); else if (_ = s((f + 1) / E), 
            _ >= w.length) if (y) {
              for (;w.length <= _; w.push(0)) ;
              d = p = 0, l = 1, f %= E, m = f - E + 1;
            } else break e; else {
              d = u = w[_];
              for (l = 1; u >= 10; u /= 10, l++) ;
              f %= E, m = f - E + l, p = m < 0 ? 0 : n(d / x[l - m - 1] % 10);
            }
            if (y = y || o < 0 || w[_ + 1] != null || (m < 0 ? d : d % x[l - m - 1]), y = c < 4 ? (p || y) && (c == 0 || c == (i.s < 0 ? 3 : 2)) : p > 5 || p == 5 && (c == 4 || y || c == 6 && (f > 0 ? m > 0 ? d / x[l - m] : 0 : w[_ - 1]) % 10 & 1 || c == (i.s < 0 ? 8 : 7)), 
            o < 1 || !w[0]) {
              if (w.length = 0, y) o -= i.e + 1, w[0] = x[(E - o % E) % E], i.e = -o || 0; else w[0] = i.e = 0;
              return i;
            }
            if (f == 0) w.length = _, u = 1, _--; else w.length = _ + 1, u = x[E - f], w[_] = m > 0 ? n(d / x[l - m] % x[m]) * u : 0;
            if (y) for (;;) if (_ == 0) {
              for (f = 1, m = w[0]; m >= 10; m /= 10, f++) ;
              m = w[0] += u;
              for (u = 1; m >= 10; m /= 10, u++) ;
              if (f != u) {
                if (i.e++, w[0] == g) w[0] = 1;
              }
              break;
            } else {
              if (w[_] += u, w[_] != g) break;
              w[_--] = 0, u = 1;
            }
            for (f = w.length; w[--f] === 0; w.pop()) ;
          }
          if (i.e > Se) i.c = i.e = null; else if (i.e < Ze) i.c = [ i.e = 0 ];
        }
        return i;
      }
      function qe(i) {
        var o, c = i.e;
        if (c === null) return i.toString();
        return o = R(i.c), o = c <= ce || c >= de ? Z(o, c) : ie(o, c, "0"), i.s < 0 ? "-" + o : o;
      }
      if (v.absoluteValue = v.abs = function() {
        var i = new A(this);
        if (i.s < 0) i.s = 1;
        return i;
      }, v.comparedTo = function(i, o) {
        return P(this, new A(i, o));
      }, v.decimalPlaces = v.dp = function(i, o) {
        var c, y, l, f = this;
        if (i != null) {
          if (O(i, 0, I), o == null) o = X; else O(o, 0, 8);
          return pe(new A(f), i + f.e + 1, o);
        }
        if (!(c = f.c)) return null;
        if (y = ((l = c.length - 1) - K(this.e / E)) * E, l = c[l]) for (;l % 10 == 0; l /= 10, 
        y--) ;
        if (y < 0) y = 0;
        return y;
      }, v.dividedBy = v.div = function(i, o) {
        return U(this, new A(i, o), V, X);
      }, v.dividedToIntegerBy = v.idiv = function(i, o) {
        return U(this, new A(i, o), 0, 1);
      }, v.exponentiatedBy = v.pow = function(i, o) {
        var c, y, l, f, m, u, d, _, p, w = this;
        if (i = new A(i), i.c && !i.isInteger()) throw Error(a + "Exponent not an integer: " + qe(i));
        if (o != null) o = new A(o);
        if (u = i.e > 14, !w.c || !w.c[0] || w.c[0] == 1 && !w.e && w.c.length == 1 || !i.c || !i.c[0]) return p = new A(Math.pow(+qe(w), u ? i.s * (2 - G(i)) : +qe(i))), 
        o ? p.mod(o) : p;
        if (d = i.s < 0, o) {
          if (o.c ? !o.c[0] : !o.s) return new A(NaN);
          if (y = !d && w.isInteger() && o.isInteger(), y) w = w.mod(o);
        } else if (i.e > 9 && (w.e > 0 || w.e < -1 || (w.e == 0 ? w.c[0] > 1 || u && w.c[1] >= 24e7 : w.c[0] < 8e13 || u && w.c[0] <= 9999975e7))) {
          if (f = w.s < 0 && G(i) ? -0 : 0, w.e > -1) f = 1 / f;
          return new A(d ? 1 / f : f);
        } else if (Be) f = s(Be / E + 2);
        if (u) {
          if (c = new A(.5), d) i.s = 1;
          _ = G(i);
        } else l = Math.abs(+qe(i)), _ = l % 2;
        p = new A(ee);
        for (;;) {
          if (_) {
            if (p = p.times(w), !p.c) break;
            if (f) {
              if (p.c.length > f) p.c.length = f;
            } else if (y) p = p.mod(o);
          }
          if (l) {
            if (l = n(l / 2), l === 0) break;
            _ = l % 2;
          } else if (i = i.times(c), pe(i, i.e + 1, 1), i.e > 14) _ = G(i); else {
            if (l = +qe(i), l === 0) break;
            _ = l % 2;
          }
          if (w = w.times(w), f) {
            if (w.c && w.c.length > f) w.c.length = f;
          } else if (y) w = w.mod(o);
        }
        if (y) return p;
        if (d) p = ee.div(p);
        return o ? p.mod(o) : f ? pe(p, Be, X, m) : p;
      }, v.integerValue = function(i) {
        var o = new A(this);
        if (i == null) i = X; else O(i, 0, 8);
        return pe(o, o.e + 1, i);
      }, v.isEqualTo = v.eq = function(i, o) {
        return P(this, new A(i, o)) === 0;
      }, v.isFinite = function() {
        return !!this.c;
      }, v.isGreaterThan = v.gt = function(i, o) {
        return P(this, new A(i, o)) > 0;
      }, v.isGreaterThanOrEqualTo = v.gte = function(i, o) {
        return (o = P(this, new A(i, o))) === 1 || o === 0;
      }, v.isInteger = function() {
        return !!this.c && K(this.e / E) > this.c.length - 2;
      }, v.isLessThan = v.lt = function(i, o) {
        return P(this, new A(i, o)) < 0;
      }, v.isLessThanOrEqualTo = v.lte = function(i, o) {
        return (o = P(this, new A(i, o))) === -1 || o === 0;
      }, v.isNaN = function() {
        return !this.s;
      }, v.isNegative = function() {
        return this.s < 0;
      }, v.isPositive = function() {
        return this.s > 0;
      }, v.isZero = function() {
        return !!this.c && this.c[0] == 0;
      }, v.minus = function(i, o) {
        var c, y, l, f, m = this, u = m.s;
        if (i = new A(i, o), o = i.s, !u || !o) return new A(NaN);
        if (u != o) return i.s = -o, m.plus(i);
        var d = m.e / E, _ = i.e / E, p = m.c, w = i.c;
        if (!d || !_) {
          if (!p || !w) return p ? (i.s = -o, i) : new A(w ? m : NaN);
          if (!p[0] || !w[0]) return w[0] ? (i.s = -o, i) : new A(p[0] ? m : X == 3 ? -0 : 0);
        }
        if (d = K(d), _ = K(_), p = p.slice(), u = d - _) {
          if (f = u < 0) u = -u, l = p; else _ = d, l = w;
          l.reverse();
          for (o = u; o--; l.push(0)) ;
          l.reverse();
        } else {
          y = (f = (u = p.length) < (o = w.length)) ? u : o;
          for (u = o = 0; o < y; o++) if (p[o] != w[o]) {
            f = p[o] < w[o];
            break;
          }
        }
        if (f) l = p, p = w, w = l, i.s = -i.s;
        if (o = (y = w.length) - (c = p.length), o > 0) for (;o--; p[c++] = 0) ;
        o = g - 1;
        for (;y > u; ) {
          if (p[--y] < w[y]) {
            for (c = y; c && !p[--c]; p[c] = o) ;
            --p[c], p[y] += g;
          }
          p[y] -= w[y];
        }
        for (;p[0] == 0; p.splice(0, 1), --_) ;
        if (!p[0]) return i.s = X == 3 ? -1 : 1, i.c = [ i.e = 0 ], i;
        return Cr(i, p, _);
      }, v.modulo = v.mod = function(i, o) {
        var c, y, l = this;
        if (i = new A(i, o), !l.c || !i.s || i.c && !i.c[0]) return new A(NaN); else if (!i.c || l.c && !l.c[0]) return new A(l);
        if (wt == 9) y = i.s, i.s = 1, c = U(l, i, 0, 3), i.s = y, c.s *= y; else c = U(l, i, 0, wt);
        if (i = l.minus(c.times(i)), !i.c[0] && wt == 1) i.s = l.s;
        return i;
      }, v.multipliedBy = v.times = function(i, o) {
        var c, y, l, f, m, u, d, _, p, w, x, b, M, z, te, F = this, B = F.c, ne = (i = new A(i, o)).c;
        if (!B || !ne || !B[0] || !ne[0]) {
          if (!F.s || !i.s || B && !B[0] && !ne || ne && !ne[0] && !B) i.c = i.e = i.s = null; else if (i.s *= F.s, 
          !B || !ne) i.c = i.e = null; else i.c = [ 0 ], i.e = 0;
          return i;
        }
        if (y = K(F.e / E) + K(i.e / E), i.s *= F.s, d = B.length, w = ne.length, d < w) M = B, 
        B = ne, ne = M, l = d, d = w, w = l;
        for (l = d + w, M = []; l--; M.push(0)) ;
        z = g, te = j;
        for (l = w; --l >= 0; ) {
          c = 0, x = ne[l] % te, b = ne[l] / te | 0;
          for (m = d, f = l + m; f > l; ) _ = B[--m] % te, p = B[m] / te | 0, u = b * _ + p * x, 
          _ = x * _ + u % te * te + M[f] + c, c = (_ / z | 0) + (u / te | 0) + b * p, M[f--] = _ % z;
          M[f] = c;
        }
        if (c) ++y; else M.splice(0, 1);
        return Cr(i, M, y);
      }, v.negated = function() {
        var i = new A(this);
        return i.s = -i.s || null, i;
      }, v.plus = function(i, o) {
        var c, y = this, l = y.s;
        if (i = new A(i, o), o = i.s, !l || !o) return new A(NaN);
        if (l != o) return i.s = -o, y.minus(i);
        var f = y.e / E, m = i.e / E, u = y.c, d = i.c;
        if (!f || !m) {
          if (!u || !d) return new A(l / 0);
          if (!u[0] || !d[0]) return d[0] ? i : new A(u[0] ? y : l * 0);
        }
        if (f = K(f), m = K(m), u = u.slice(), l = f - m) {
          if (l > 0) m = f, c = d; else l = -l, c = u;
          c.reverse();
          for (;l--; c.push(0)) ;
          c.reverse();
        }
        if (l = u.length, o = d.length, l - o < 0) c = d, d = u, u = c, o = l;
        for (l = 0; o; ) l = (u[--o] = u[o] + d[o] + l) / g | 0, u[o] = g === u[o] ? 0 : u[o] % g;
        if (l) u = [ l ].concat(u), ++m;
        return Cr(i, u, m);
      }, v.precision = v.sd = function(i, o) {
        var c, y, l, f = this;
        if (i != null && i !== !!i) {
          if (O(i, 1, I), o == null) o = X; else O(o, 0, 8);
          return pe(new A(f), i, o);
        }
        if (!(c = f.c)) return null;
        if (l = c.length - 1, y = l * E + 1, l = c[l]) {
          for (;l % 10 == 0; l /= 10, y--) ;
          for (l = c[0]; l >= 10; l /= 10, y++) ;
        }
        if (i && f.e + 1 > y) y = f.e + 1;
        return y;
      }, v.shiftedBy = function(i) {
        return O(i, -S, S), this.times("1e" + i);
      }, v.squareRoot = v.sqrt = function() {
        var i, o, c, y, l, f = this, {c: m, s: u, e: d} = f, _ = V + 4, p = new A("0.5");
        if (u !== 1 || !m || !m[0]) return new A(!u || u < 0 && (!m || m[0]) ? NaN : m ? f : 1 / 0);
        if (u = Math.sqrt(+qe(f)), u == 0 || u == 1 / 0) {
          if (o = R(m), (o.length + d) % 2 == 0) o += "0";
          if (u = Math.sqrt(+o), d = K((d + 1) / 2) - (d < 0 || d % 2), u == 1 / 0) o = "5e" + d; else o = u.toExponential(), 
          o = o.slice(0, o.indexOf("e") + 1) + d;
          c = new A(o);
        } else c = new A(u + "");
        if (c.c[0]) {
          if (d = c.e, u = d + _, u < 3) u = 0;
          for (;;) if (l = c, c = p.times(l.plus(U(f, l, _, 1))), R(l.c).slice(0, u) === (o = R(c.c)).slice(0, u)) {
            if (c.e < d) --u;
            if (o = o.slice(u - 3, u + 1), o == "9999" || !y && o == "4999") {
              if (!y) {
                if (pe(l, l.e + V + 2, 0), l.times(l).eq(f)) {
                  c = l;
                  break;
                }
              }
              _ += 4, u += 4, y = 1;
            } else {
              if (!+o || !+o.slice(1) && o.charAt(0) == "5") pe(c, c.e + V + 2, 1), i = !c.times(c).eq(f);
              break;
            }
          }
        }
        return pe(c, c.e + V + 1, X, i);
      }, v.toExponential = function(i, o) {
        if (i != null) O(i, 0, I), i++;
        return Tr(this, i, o, 1);
      }, v.toFixed = function(i, o) {
        if (i != null) O(i, 0, I), i = i + this.e + 1;
        return Tr(this, i, o);
      }, v.toFormat = function(i, o, c) {
        var y, l = this;
        if (c == null) if (i != null && o && typeof o == "object") c = o, o = null; else if (i && typeof i == "object") c = i, 
        i = o = null; else c = wr; else if (typeof c != "object") throw Error(a + "Argument not an object: " + c);
        if (y = l.toFixed(i, o), l.c) {
          var f, m = y.split("."), u = +c.groupSize, d = +c.secondaryGroupSize, _ = c.groupSeparator || "", p = m[0], w = m[1], x = l.s < 0, b = x ? p.slice(1) : p, M = b.length;
          if (d) f = u, u = d, d = f, M -= f;
          if (u > 0 && M > 0) {
            f = M % u || u, p = b.substr(0, f);
            for (;f < M; f += u) p += _ + b.substr(f, u);
            if (d > 0) p += _ + b.slice(f);
            if (x) p = "-" + p;
          }
          y = w ? p + (c.decimalSeparator || "") + ((d = +c.fractionGroupSize) ? w.replace(new RegExp("\\d{" + d + "}\\B", "g"), "$&" + (c.fractionGroupSeparator || "")) : w) : p;
        }
        return (c.prefix || "") + y + (c.suffix || "");
      }, v.toFraction = function(i) {
        var o, c, y, l, f, m, u, d, _, p, w, x, b = this, M = b.c;
        if (i != null) {
          if (u = new A(i), !u.isInteger() && (u.c || u.s !== 1) || u.lt(ee)) throw Error(a + "Argument " + (u.isInteger() ? "out of range: " : "not an integer: ") + qe(u));
        }
        if (!M) return new A(b);
        o = new A(ee), _ = c = new A(ee), y = d = new A(ee), x = R(M), f = o.e = x.length - b.e - 1, 
        o.c[0] = T[(m = f % E) < 0 ? E + m : m], i = !i || u.comparedTo(o) > 0 ? f > 0 ? o : _ : u, 
        m = Se, Se = 1 / 0, u = new A(x), d.c[0] = 0;
        for (;;) {
          if (p = U(u, o, 0, 1), l = c.plus(p.times(y)), l.comparedTo(i) == 1) break;
          c = y, y = l, _ = d.plus(p.times(l = _)), d = l, o = u.minus(p.times(l = o)), u = l;
        }
        return l = U(i.minus(c), y, 0, 1), d = d.plus(l.times(_)), c = c.plus(l.times(y)), 
        d.s = _.s = b.s, f = f * 2, w = U(_, y, f, X).minus(b).abs().comparedTo(U(d, c, f, X).minus(b).abs()) < 1 ? [ _, y ] : [ d, c ], 
        Se = m, w;
      }, v.toNumber = function() {
        return +qe(this);
      }, v.toPrecision = function(i, o) {
        if (i != null) O(i, 1, I);
        return Tr(this, i, o, 2);
      }, v.toString = function(i) {
        var o, c = this, y = c.s, l = c.e;
        if (l === null) if (y) {
          if (o = "Infinity", y < 0) o = "-" + o;
        } else o = "NaN"; else {
          if (i == null) o = l <= ce || l >= de ? Z(R(c.c), l) : ie(R(c.c), l, "0"); else if (i === 10 && Ar) c = pe(new A(c), V + l + 1, X), 
          o = ie(R(c.c), c.e, "0"); else O(i, 2, tt.length, "Base"), o = L(ie(R(c.c), l, "0"), 10, i, y, !0);
          if (y < 0 && c.c[0]) o = "-" + o;
        }
        return o;
      }, v.valueOf = v.toJSON = function() {
        return qe(this);
      }, v._isBigNumber = !0, D != null) A.set(D);
      return A;
    }
    function K(D) {
      var U = D | 0;
      return D > 0 || D === U ? U : U - 1;
    }
    function R(D) {
      var U, L, W = 1, v = D.length, ee = D[0] + "";
      for (;W < v; ) {
        U = D[W++] + "", L = E - U.length;
        for (;L--; U = "0" + U) ;
        ee += U;
      }
      for (v = ee.length; ee.charCodeAt(--v) === 48; ) ;
      return ee.slice(0, v + 1 || 1);
    }
    function P(D, U) {
      var L, W, v = D.c, ee = U.c, V = D.s, X = U.s, ce = D.e, de = U.e;
      if (!V || !X) return null;
      if (L = v && !v[0], W = ee && !ee[0], L || W) return L ? W ? 0 : -X : V;
      if (V != X) return V;
      if (L = V < 0, W = ce == de, !v || !ee) return W ? 0 : !v ^ L ? 1 : -1;
      if (!W) return ce > de ^ L ? 1 : -1;
      X = (ce = v.length) < (de = ee.length) ? ce : de;
      for (V = 0; V < X; V++) if (v[V] != ee[V]) return v[V] > ee[V] ^ L ? 1 : -1;
      return ce == de ? 0 : ce > de ^ L ? 1 : -1;
    }
    function O(D, U, L, W) {
      if (D < U || D > L || D !== n(D)) throw Error(a + (W || "Argument") + (typeof D == "number" ? D < U || D > L ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(D));
    }
    function G(D) {
      var U = D.c.length - 1;
      return K(D.e / E) == U && D.c[U] % 2 != 0;
    }
    function Z(D, U) {
      return (D.length > 1 ? D.charAt(0) + "." + D.slice(1) : D) + (U < 0 ? "e" : "e+") + U;
    }
    function ie(D, U, L) {
      var W, v;
      if (U < 0) {
        for (v = L + "."; ++U; v += L) ;
        D = v + D;
      } else if (W = D.length, ++U > W) {
        for (v = L, U -= W; --U; v += L) ;
        D += v;
      } else if (U < W) D = D.slice(0, U) + "." + D.slice(U);
      return D;
    }
    if (t = Y(), t.default = t.BigNumber = t, typeof define == "function" && define.amd) define(function() {
      return t;
    }); else if (typeof Dt < "u" && Dt.exports) Dt.exports = t; else {
      if (!e) e = typeof self < "u" && self ? self : window;
      e.BigNumber = t;
    }
  })(Zs);
});

var sn = C(function(qd, rn) {
  var en = Pr(), tn = qd;
  (function() {
    function e(S) {
      return S < 10 ? "0" + S : S;
    }
    var t = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, r = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, s, n, a = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    }, h;
    function g(S) {
      return r.lastIndex = 0, r.test(S) ? '"' + S.replace(r, function(T) {
        var j = a[T];
        return typeof j === "string" ? j : "\\u" + ("0000" + T.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + S + '"';
    }
    function E(S, T) {
      var j, I, Y, K, R = s, P, O = T[S], G = O != null && (O instanceof en || en.isBigNumber(O));
      if (O && typeof O === "object" && typeof O.toJSON === "function") O = O.toJSON(S);
      if (typeof h === "function") O = h.call(T, S, O);
      switch (typeof O) {
       case "string":
        if (G) return O; else return g(O);

       case "number":
        return isFinite(O) ? String(O) : "null";

       case "boolean":
       case "null":
       case "bigint":
        return String(O);

       case "object":
        if (!O) return "null";
        if (s += n, P = [], Object.prototype.toString.apply(O) === "[object Array]") {
          K = O.length;
          for (j = 0; j < K; j += 1) P[j] = E(j, O) || "null";
          return Y = P.length === 0 ? "[]" : s ? `[\n` + s + P.join(`,\n` + s) + `\n` + R + "]" : "[" + P.join(",") + "]", 
          s = R, Y;
        }
        if (h && typeof h === "object") {
          K = h.length;
          for (j = 0; j < K; j += 1) if (typeof h[j] === "string") {
            if (I = h[j], Y = E(I, O), Y) P.push(g(I) + (s ? ": " : ":") + Y);
          }
        } else Object.keys(O).forEach(function(Z) {
          var ie = E(Z, O);
          if (ie) P.push(g(Z) + (s ? ": " : ":") + ie);
        });
        return Y = P.length === 0 ? "{}" : s ? `{\n` + s + P.join(`,\n` + s) + `\n` + R + "}" : "{" + P.join(",") + "}", 
        s = R, Y;
      }
    }
    if (typeof tn.stringify !== "function") tn.stringify = function(S, T, j) {
      var I;
      if (s = "", n = "", typeof j === "number") for (I = 0; I < j; I += 1) n += " "; else if (typeof j === "string") n = j;
      if (h = T, T && typeof T !== "function" && (typeof T !== "object" || typeof T.length !== "number")) throw Error("JSON.stringify");
      return E("", {
        "": S
      });
    };
  })();
});

var on = C(function(Fd, nn) {
  var qt = null, Gc = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/, Bc = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/, Hc = function(e) {
    var t = {
      strict: !1,
      storeAsString: !1,
      alwaysParseAsBig: !1,
      useNativeBigInt: !1,
      protoAction: "error",
      constructorAction: "error"
    };
    if (e !== void 0 && e !== null) {
      if (e.strict === !0) t.strict = !0;
      if (e.storeAsString === !0) t.storeAsString = !0;
      if (t.alwaysParseAsBig = e.alwaysParseAsBig === !0 ? e.alwaysParseAsBig : !1, t.useNativeBigInt = e.useNativeBigInt === !0 ? e.useNativeBigInt : !1, 
      typeof e.constructorAction < "u") if (e.constructorAction === "error" || e.constructorAction === "ignore" || e.constructorAction === "preserve") t.constructorAction = e.constructorAction; else throw Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${e.constructorAction}`);
      if (typeof e.protoAction < "u") if (e.protoAction === "error" || e.protoAction === "ignore" || e.protoAction === "preserve") t.protoAction = e.protoAction; else throw Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${e.protoAction}`);
    }
    var r, s, n = {
      '"': '"',
      "\\": "\\",
      "/": "/",
      b: "\b",
      f: "\f",
      n: `\n`,
      r: "\r",
      t: "\t"
    }, a, h = function(R) {
      throw {
        name: "SyntaxError",
        message: R,
        at: r,
        text: a
      };
    }, g = function(R) {
      if (R && R !== s) h("Expected '" + R + "' instead of '" + s + "'");
      return s = a.charAt(r), r += 1, s;
    }, E = function() {
      var R, P = "";
      if (s === "-") P = "-", g("-");
      while (s >= "0" && s <= "9") P += s, g();
      if (s === ".") {
        P += ".";
        while (g() && s >= "0" && s <= "9") P += s;
      }
      if (s === "e" || s === "E") {
        if (P += s, g(), s === "-" || s === "+") P += s, g();
        while (s >= "0" && s <= "9") P += s, g();
      }
      if (R = +P, !isFinite(R)) h("Bad number"); else {
        if (qt == null) qt = Pr();
        if (P.length > 15) return t.storeAsString ? P : t.useNativeBigInt ? BigInt(P) : new qt(P); else return !t.alwaysParseAsBig ? R : t.useNativeBigInt ? BigInt(R) : new qt(R);
      }
    }, S = function() {
      var R, P, O = "", G;
      if (s === '"') {
        var Z = r;
        while (g()) {
          if (s === '"') {
            if (r - 1 > Z) O += a.substring(Z, r - 1);
            return g(), O;
          }
          if (s === "\\") {
            if (r - 1 > Z) O += a.substring(Z, r - 1);
            if (g(), s === "u") {
              G = 0;
              for (P = 0; P < 4; P += 1) {
                if (R = parseInt(g(), 16), !isFinite(R)) break;
                G = G * 16 + R;
              }
              O += String.fromCharCode(G);
            } else if (typeof n[s] === "string") O += n[s]; else break;
            Z = r;
          }
        }
      }
      h("Bad string");
    }, T = function() {
      while (s && s <= " ") g();
    }, j = function() {
      switch (s) {
       case "t":
        return g("t"), g("r"), g("u"), g("e"), !0;

       case "f":
        return g("f"), g("a"), g("l"), g("s"), g("e"), !1;

       case "n":
        return g("n"), g("u"), g("l"), g("l"), null;
      }
      h("Unexpected '" + s + "'");
    }, I, Y = function() {
      var R = [];
      if (s === "[") {
        if (g("["), T(), s === "]") return g("]"), R;
        while (s) {
          if (R.push(I()), T(), s === "]") return g("]"), R;
          g(","), T();
        }
      }
      h("Bad array");
    }, K = function() {
      var R, P = Object.create(null);
      if (s === "{") {
        if (g("{"), T(), s === "}") return g("}"), P;
        while (s) {
          if (R = S(), T(), g(":"), t.strict === !0 && Object.hasOwnProperty.call(P, R)) h('Duplicate key "' + R + '"');
          if (Gc.test(R) === !0) if (t.protoAction === "error") h("Object contains forbidden prototype property"); else if (t.protoAction === "ignore") I(); else P[R] = I(); else if (Bc.test(R) === !0) if (t.constructorAction === "error") h("Object contains forbidden constructor property"); else if (t.constructorAction === "ignore") I(); else P[R] = I(); else P[R] = I();
          if (T(), s === "}") return g("}"), P;
          g(","), T();
        }
      }
      h("Bad object");
    };
    return I = function() {
      switch (T(), s) {
       case "{":
        return K();

       case "[":
        return Y();

       case '"':
        return S();

       case "-":
        return E();

       default:
        return s >= "0" && s <= "9" ? E() : j();
      }
    }, function(R, P) {
      var O;
      if (a = R + "", r = 0, s = " ", O = I(), T(), s) h("Syntax error");
      return typeof P === "function" ? function G(Z, ie) {
        var D, U, L = Z[ie];
        if (L && typeof L === "object") Object.keys(L).forEach(function(W) {
          if (U = G(L, W), U !== void 0) L[W] = U; else delete L[W];
        });
        return P.call(Z, ie, L);
      }({
        "": O
      }, "") : O;
    };
  };
  nn.exports = Hc;
});

var un = C(function(Md, Ft) {
  var an = sn().stringify, cn = on();
  Ft.exports = function(e) {
    return {
      parse: cn(e),
      stringify: an
    };
  };
  Ft.exports.parse = cn();
  Ft.exports.stringify = an;
});

var Ir = C(function(pn) {
  Object.defineProperty(pn, "__esModule", {
    value: !0
  });
  pn.GCE_LINUX_BIOS_PATHS = void 0;
  pn.isGoogleCloudServerless = ln;
  pn.isGoogleComputeEngineLinux = dn;
  pn.isGoogleComputeEngineMACAddress = hn;
  pn.isGoogleComputeEngine = fn;
  pn.detectGCPResidency = Jc;
  var Mt = Ne("fs"), Gt = Ne("os");
  pn.GCE_LINUX_BIOS_PATHS = {
    BIOS_DATE: "/sys/class/dmi/id/bios_date",
    BIOS_VENDOR: "/sys/class/dmi/id/bios_vendor"
  };
  var $c = /^42:01/;
  function ln() {
    return !!(process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE);
  }
  function dn() {
    if (Gt.platform() !== "linux") return !1;
    try {
      Mt.statSync(pn.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
      let e = Mt.readFileSync(pn.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, "utf8");
      return /Google/.test(e);
    } catch {
      return !1;
    }
  }
  function hn() {
    let e = Gt.networkInterfaces();
    for (let t of Object.values(e)) {
      if (!t) continue;
      for (let {mac: r} of t) if ($c.test(r)) return !0;
    }
    return !1;
  }
  function fn() {
    return dn() || hn();
  }
  function Jc() {
    return ln() || fn();
  }
});

var _n = C(function(gn) {
  Object.defineProperty(gn, "__esModule", {
    value: !0
  });
  gn.Colours = void 0;
  class q {
    static isEnabled(e) {
      return e && e.isTTY && (typeof e.getColorDepth === "function" ? e.getColorDepth() > 2 : !0);
    }
    static refresh() {
      if (q.enabled = q.isEnabled(process === null || process === void 0 ? void 0 : process.stderr), 
      !this.enabled) q.reset = "", q.bright = "", q.dim = "", q.red = "", q.green = "", 
      q.yellow = "", q.blue = "", q.magenta = "", q.cyan = "", q.white = "", q.grey = ""; else q.reset = "\x1b[0m", 
      q.bright = "\x1b[1m", q.dim = "\x1b[2m", q.red = "\x1b[31m", q.green = "\x1b[32m", 
      q.yellow = "\x1b[33m", q.blue = "\x1b[34m", q.magenta = "\x1b[35m", q.cyan = "\x1b[36m", 
      q.white = "\x1b[37m", q.grey = "\x1b[90m";
    }
  }
  gn.Colours = q;
  q.enabled = !1;
  q.reset = "";
  q.bright = "";
  q.dim = "";
  q.red = "";
  q.green = "";
  q.yellow = "";
  q.blue = "";
  q.magenta = "";
  q.cyan = "";
  q.white = "";
  q.grey = "";
  q.refresh();
});

var kn = C(function(H) {
  var zc = H && H.__createBinding || (Object.create ? function(e, t, r, s) {
    if (s === void 0) s = r;
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) n = {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    };
    Object.defineProperty(e, s, n);
  } : function(e, t, r, s) {
    if (s === void 0) s = r;
    e[s] = t[r];
  }), Qc = H && H.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function(e, t) {
    e.default = t;
  }), mn = H && H.__importStar || function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(r) {
        var s = [];
        for (var n in r) if (Object.prototype.hasOwnProperty.call(r, n)) s[s.length] = n;
        return s;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var r = {};
      if (t != null) {
        for (var s = e(t), n = 0; n < s.length; n++) if (s[n] !== "default") zc(r, t, s[n]);
      }
      return Qc(r, t), r;
    };
  }();
  Object.defineProperty(H, "__esModule", {
    value: !0
  });
  H.env = H.DebugLogBackendBase = H.placeholder = H.AdhocDebugLogger = H.LogSeverity = void 0;
  H.getNodeBackend = Ur;
  H.getDebugBackend = Zc;
  H.getStructuredBackend = eu;
  H.setBackend = tu;
  H.log = vn;
  var En = Ne("events"), Tt = mn(Ne("process")), wn = mn(Ne("util")), J = _n(), Oe;
  (function(e) {
    e.DEFAULT = "DEFAULT", e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", 
    e.ERROR = "ERROR";
  })(Oe || (H.LogSeverity = Oe = {}));
  class Bt extends En.EventEmitter {
    constructor(e, t) {
      super();
      this.namespace = e, this.upstream = t, this.func = Object.assign(this.invoke.bind(this), {
        instance: this,
        on: (r, s) => this.on(r, s)
      }), this.func.debug = (...r) => this.invokeSeverity(Oe.DEBUG, ...r), this.func.info = (...r) => this.invokeSeverity(Oe.INFO, ...r), 
      this.func.warn = (...r) => this.invokeSeverity(Oe.WARNING, ...r), this.func.error = (...r) => this.invokeSeverity(Oe.ERROR, ...r), 
      this.func.sublog = r => vn(r, this.func);
    }
    invoke(e, ...t) {
      if (this.upstream) try {
        this.upstream(e, ...t);
      } catch (r) {}
      try {
        this.emit("log", e, t);
      } catch (r) {}
    }
    invokeSeverity(e, ...t) {
      this.invoke({
        severity: e
      }, ...t);
    }
  }
  H.AdhocDebugLogger = Bt;
  H.placeholder = new Bt("", () => {}).func;
  class Ct {
    constructor() {
      var e;
      this.cached = new Map, this.filters = [], this.filtersSet = !1;
      let t = (e = Tt.env[H.env.nodeEnables]) !== null && e !== void 0 ? e : "*";
      if (t === "all") t = "*";
      this.filters = t.split(",");
    }
    log(e, t, ...r) {
      try {
        if (!this.filtersSet) this.setFilters(), this.filtersSet = !0;
        let s = this.cached.get(e);
        if (!s) s = this.makeLogger(e), this.cached.set(e, s);
        s(t, ...r);
      } catch (s) {
        console.error(s);
      }
    }
  }
  H.DebugLogBackendBase = Ct;
  class An extends Ct {
    constructor() {
      super(...arguments);
      this.enabledRegexp = /.*/g;
    }
    isEnabled(e) {
      return this.enabledRegexp.test(e);
    }
    makeLogger(e) {
      if (!this.enabledRegexp.test(e)) return () => {};
      return (t, ...r) => {
        var s;
        let n = `${J.Colours.green}${e}${J.Colours.reset}`, a = `${J.Colours.yellow}${Tt.pid}${J.Colours.reset}`, h;
        switch (t.severity) {
         case Oe.ERROR:
          h = `${J.Colours.red}${t.severity}${J.Colours.reset}`;
          break;

         case Oe.INFO:
          h = `${J.Colours.magenta}${t.severity}${J.Colours.reset}`;
          break;

         case Oe.WARNING:
          h = `${J.Colours.yellow}${t.severity}${J.Colours.reset}`;
          break;

         default:
          h = (s = t.severity) !== null && s !== void 0 ? s : Oe.DEFAULT;
          break;
        }
        let g = wn.formatWithOptions({
          colors: J.Colours.enabled
        }, ...r), E = Object.assign({}, t);
        delete E.severity;
        let S = Object.getOwnPropertyNames(E).length ? JSON.stringify(E) : "", T = S ? `${J.Colours.grey}${S}${J.Colours.reset}` : "";
        console.error("%s [%s|%s] %s%s", a, n, h, g, S ? ` ${T}` : "");
      };
    }
    setFilters() {
      let t = this.filters.join(",").replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^");
      this.enabledRegexp = new RegExp(`^${t}$`, "i");
    }
  }
  function Ur() {
    return new An;
  }
  class Tn extends Ct {
    constructor(e) {
      super();
      this.debugPkg = e;
    }
    makeLogger(e) {
      let t = this.debugPkg(e);
      return (r, ...s) => {
        t(s[0], ...s.slice(1));
      };
    }
    setFilters() {
      var e;
      let t = (e = Tt.env.NODE_DEBUG) !== null && e !== void 0 ? e : "";
      Tt.env.NODE_DEBUG = `${t}${t ? "," : ""}${this.filters.join(",")}`;
    }
  }
  function Zc(e) {
    return new Tn(e);
  }
  class Cn extends Ct {
    constructor(e) {
      var t;
      super();
      this.upstream = (t = e) !== null && t !== void 0 ? t : void 0;
    }
    makeLogger(e) {
      var t;
      let r = (t = this.upstream) === null || t === void 0 ? void 0 : t.makeLogger(e);
      return (s, ...n) => {
        var a;
        let h = (a = s.severity) !== null && a !== void 0 ? a : Oe.INFO, g = Object.assign({
          severity: h,
          message: wn.format(...n)
        }, s), E = JSON.stringify(g);
        if (r) r(s, E); else console.log("%s", E);
      };
    }
    setFilters() {
      var e;
      (e = this.upstream) === null || e === void 0 || e.setFilters();
    }
  }
  function eu(e) {
    return new Cn(e);
  }
  H.env = {
    nodeEnables: "GOOGLE_SDK_NODE_LOGGING"
  };
  var jr = new Map, he = void 0;
  function tu(e) {
    he = e, jr.clear();
  }
  function vn(e, t) {
    if (!he) {
      if (!Tt.env[H.env.nodeEnables]) return H.placeholder;
    }
    if (!e) return H.placeholder;
    if (t) e = `${t.instance.namespace}:${e}`;
    let r = jr.get(e);
    if (r) return r.func;
    if (he === null) return H.placeholder; else if (he === void 0) he = Ur();
    let s = (() => {
      let n = void 0;
      return new Bt(e, (h, ...g) => {
        if (n !== he) {
          if (he === null) return; else if (he === void 0) he = Ur();
          n = he;
        }
        he === null || he === void 0 || he.log(e, h, ...g);
      });
    })();
    return jr.set(e, s), s.func;
  }
});

var Dr = C(function(rt) {
  var ru = rt && rt.__createBinding || (Object.create ? function(e, t, r, s) {
    if (s === void 0) s = r;
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) n = {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    };
    Object.defineProperty(e, s, n);
  } : function(e, t, r, s) {
    if (s === void 0) s = r;
    e[s] = t[r];
  }), su = rt && rt.__exportStar || function(e, t) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) ru(t, e, r);
  };
  Object.defineProperty(rt, "__esModule", {
    value: !0
  });
  su(kn(), rt);
});

var kt = C(function(N) {
  var On = N && N.__createBinding || (Object.create ? function(e, t, r, s) {
    if (s === void 0) s = r;
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) n = {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    };
    Object.defineProperty(e, s, n);
  } : function(e, t, r, s) {
    if (s === void 0) s = r;
    e[s] = t[r];
  }), nu = N && N.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function(e, t) {
    e.default = t;
  }), iu = N && N.__importStar || function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(r) {
        var s = [];
        for (var n in r) if (Object.prototype.hasOwnProperty.call(r, n)) s[s.length] = n;
        return s;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var r = {};
      if (t != null) {
        for (var s = e(t), n = 0; n < s.length; n++) if (s[n] !== "default") On(r, t, s[n]);
      }
      return nu(r, t), r;
    };
  }(), ou = N && N.__exportStar || function(e, t) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) On(t, e, r);
  };
  Object.defineProperty(N, "__esModule", {
    value: !0
  });
  N.gcpResidencyCache = N.METADATA_SERVER_DETECTION = N.HEADERS = N.HEADER_VALUE = N.HEADER_NAME = N.SECONDARY_HOST_ADDRESS = N.HOST_ADDRESS = N.BASE_PATH = void 0;
  N.instance = lu;
  N.project = du;
  N.universe = hu;
  N.bulk = fu;
  N.isAvailable = gu;
  N.resetIsAvailableCache = yu;
  N.getGCPResidency = Fr;
  N.setGCPResidency = bn;
  N.requestTimeout = Nn;
  var ot = re(), Rn = un(), xn = Ir(), au = iu(Dr());
  N.BASE_PATH = "/computeMetadata/v1";
  N.HOST_ADDRESS = "http://169.254.169.254";
  N.SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.";
  N.HEADER_NAME = "Metadata-Flavor";
  N.HEADER_VALUE = "Google";
  N.HEADERS = Object.freeze({
    [N.HEADER_NAME]: N.HEADER_VALUE
  });
  var Sn = au.log("gcp-metadata");
  N.METADATA_SERVER_DETECTION = Object.freeze({
    "assume-present": "don't try to ping the metadata server, but assume it's present",
    none: "don't try to ping the metadata server, but don't try to use it either",
    "bios-only": "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
    "ping-only": "skip the BIOS probe, and go straight to pinging"
  });
  function qr(e) {
    if (!e) e = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || N.HOST_ADDRESS;
    if (!/^https?:\/\//.test(e)) e = `http://${e}`;
    return new URL(N.BASE_PATH, e).href;
  }
  function cu(e) {
    Object.keys(e).forEach(t => {
      switch (t) {
       case "params":
       case "property":
       case "headers":
        break;

       case "qs":
        throw Error("'qs' is not a valid configuration option. Please use 'params' instead.");

       default:
        throw Error(`'${t}' is not a valid configuration option.`);
      }
    });
  }
  async function vt(e, t = {}, r = 3, s = !1) {
    let n = new Headers(N.HEADERS), a = "", h = {};
    if (typeof e === "object") {
      let j = e;
      new Headers(j.headers).forEach((I, Y) => n.set(Y, I)), a = j.metadataKey, h = j.params || h, 
      r = j.noResponseRetries || r, s = j.fastFail || s;
    } else a = e;
    if (typeof t === "string") a += `/${t}`; else {
      if (cu(t), t.property) a += `/${t.property}`;
      new Headers(t.headers).forEach((j, I) => n.set(I, j)), h = t.params || h;
    }
    let g = s ? uu : ot.request, E = {
      url: `${qr()}/${a}`,
      headers: n,
      retryConfig: {
        noResponseRetries: r
      },
      params: h,
      responseType: "text",
      timeout: Nn()
    };
    Sn.info("instance request %j", E);
    let S = await g(E);
    Sn.info("instance metadata is %s", S.data);
    let T = S.headers.get(N.HEADER_NAME);
    if (T !== N.HEADER_VALUE) throw RangeError(`Invalid response from metadata service: incorrect ${N.HEADER_NAME} header. Expected '${N.HEADER_VALUE}', got ${T ? `'${T}'` : "no header"}`);
    if (typeof S.data === "string") try {
      return Rn.parse(S.data);
    } catch {}
    return S.data;
  }
  async function uu(e) {
    let t = {
      ...e,
      url: e.url?.toString().replace(qr(), qr(N.SECONDARY_HOST_ADDRESS))
    }, r = ot.request(e), s = ot.request(t);
    return Promise.any([ r, s ]);
  }
  function lu(e) {
    return vt("instance", e);
  }
  function du(e) {
    return vt("project", e);
  }
  function hu(e) {
    return vt("universe", e);
  }
  async function fu(e) {
    let t = {};
    return await Promise.all(e.map(r => (async () => {
      let s = await vt(r), n = r.metadataKey;
      t[n] = s;
    })())), t;
  }
  function pu() {
    return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0;
  }
  var Ht;
  async function gu() {
    if (process.env.METADATA_SERVER_DETECTION) {
      let e = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
      if (!(e in N.METADATA_SERVER_DETECTION)) throw RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${e}\`, but it should be \`${Object.keys(N.METADATA_SERVER_DETECTION).join("`, `")}\`, or unset`);
      switch (e) {
       case "assume-present":
        return !0;

       case "none":
        return !1;

       case "bios-only":
        return Fr();

       case "ping-only":
      }
    }
    try {
      if (Ht === void 0) Ht = vt("instance", void 0, pu(), !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST));
      return await Ht, !0;
    } catch (e) {
      let t = e;
      if (process.env.DEBUG_AUTH) console.info(t);
      if (t.type === "request-timeout") return !1;
      if (t.response && t.response.status === 404) return !1; else {
        if (!(t.response && t.response.status === 404) && (!t.code || ![ "EHOSTDOWN", "EHOSTUNREACH", "ENETUNREACH", "ENOENT", "ENOTFOUND", "ECONNREFUSED" ].includes(t.code.toString()))) {
          let r = "UNKNOWN";
          if (t.code) r = t.code.toString();
          process.emitWarning(`received unexpected error = ${t.message} code = ${r}`, "MetadataLookupWarning");
        }
        return !1;
      }
    }
  }
  function yu() {
    Ht = void 0;
  }
  N.gcpResidencyCache = null;
  function Fr() {
    if (N.gcpResidencyCache === null) bn();
    return N.gcpResidencyCache;
  }
  function bn(e = null) {
    N.gcpResidencyCache = e !== null ? e : xn.detectGCPResidency();
  }
  function Nn() {
    return Fr() ? 0 : 3e3;
  }
  ou(Ir(), N);
});

var In = C(function(vu) {
  vu.byteLength = mu;
  vu.toByteArray = wu;
  vu.fromByteArray = Cu;
  var Pe = [], _e = [], _u = typeof Uint8Array < "u" ? Uint8Array : Array, Mr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (He = 0, Lr = Mr.length; He < Lr; ++He) Pe[He] = Mr[He], _e[Mr.charCodeAt(He)] = He;
  var He, Lr;
  _e[45] = 62;
  _e[95] = 63;
  function Pn(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
    var r = e.indexOf("=");
    if (r === -1) r = t;
    var s = r === t ? 0 : 4 - r % 4;
    return [ r, s ];
  }
  function mu(e) {
    var t = Pn(e), r = t[0], s = t[1];
    return (r + s) * 3 / 4 - s;
  }
  function Eu(e, t, r) {
    return (t + r) * 3 / 4 - r;
  }
  function wu(e) {
    var t, r = Pn(e), s = r[0], n = r[1], a = new _u(Eu(e, s, n)), h = 0, g = n > 0 ? s - 4 : s, E;
    for (E = 0; E < g; E += 4) t = _e[e.charCodeAt(E)] << 18 | _e[e.charCodeAt(E + 1)] << 12 | _e[e.charCodeAt(E + 2)] << 6 | _e[e.charCodeAt(E + 3)], 
    a[h++] = t >> 16 & 255, a[h++] = t >> 8 & 255, a[h++] = t & 255;
    if (n === 2) t = _e[e.charCodeAt(E)] << 2 | _e[e.charCodeAt(E + 1)] >> 4, a[h++] = t & 255;
    if (n === 1) t = _e[e.charCodeAt(E)] << 10 | _e[e.charCodeAt(E + 1)] << 4 | _e[e.charCodeAt(E + 2)] >> 2, 
    a[h++] = t >> 8 & 255, a[h++] = t & 255;
    return a;
  }
  function Au(e) {
    return Pe[e >> 18 & 63] + Pe[e >> 12 & 63] + Pe[e >> 6 & 63] + Pe[e & 63];
  }
  function Tu(e, t, r) {
    var s, n = [];
    for (var a = t; a < r; a += 3) s = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), 
    n.push(Au(s));
    return n.join("");
  }
  function Cu(e) {
    var t, r = e.length, s = r % 3, n = [], a = 16383;
    for (var h = 0, g = r - s; h < g; h += a) n.push(Tu(e, h, h + a > g ? g : h + a));
    if (s === 1) t = e[r - 1], n.push(Pe[t >> 2] + Pe[t << 4 & 63] + "=="); else if (s === 2) t = (e[r - 2] << 8) + e[r - 1], 
    n.push(Pe[t >> 10] + Pe[t >> 4 & 63] + Pe[t << 2 & 63] + "=");
    return n.join("");
  }
});

var Gr = C(function(Un) {
  Object.defineProperty(Un, "__esModule", {
    value: !0
  });
  Un.fromArrayBufferToHex = Ru;
  function Ru(e) {
    return Array.from(new Uint8Array(e)).map(r => r.toString(16).padStart(2, "0")).join("");
  }
});

var Fn = C(function(Dn) {
  Object.defineProperty(Dn, "__esModule", {
    value: !0
  });
  Dn.BrowserCrypto = void 0;
  var me = In(), jn = Gr();
  class $t {
    constructor() {
      if (typeof window > "u" || window.crypto === void 0 || window.crypto.subtle === void 0) throw Error("SubtleCrypto not found. Make sure it's an https:// website.");
    }
    async sha256DigestBase64(e) {
      let t = (new TextEncoder).encode(e), r = await window.crypto.subtle.digest("SHA-256", t);
      return me.fromByteArray(new Uint8Array(r));
    }
    randomBytesBase64(e) {
      let t = new Uint8Array(e);
      return window.crypto.getRandomValues(t), me.fromByteArray(t);
    }
    static padBase64(e) {
      while (e.length % 4 !== 0) e += "=";
      return e;
    }
    async verify(e, t, r) {
      let s = {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      }, n = (new TextEncoder).encode(t), a = me.toByteArray($t.padBase64(r)), h = await window.crypto.subtle.importKey("jwk", e, s, !0, [ "verify" ]);
      return await window.crypto.subtle.verify(s, h, Buffer.from(a), n);
    }
    async sign(e, t) {
      let r = {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      }, s = (new TextEncoder).encode(t), n = await window.crypto.subtle.importKey("jwk", e, r, !0, [ "sign" ]), a = await window.crypto.subtle.sign(r, n, s);
      return me.fromByteArray(new Uint8Array(a));
    }
    decodeBase64StringUtf8(e) {
      let t = me.toByteArray($t.padBase64(e));
      return (new TextDecoder).decode(t);
    }
    encodeBase64StringUtf8(e) {
      let t = (new TextEncoder).encode(e);
      return me.fromByteArray(t);
    }
    async sha256DigestHex(e) {
      let t = (new TextEncoder).encode(e), r = await window.crypto.subtle.digest("SHA-256", t);
      return jn.fromArrayBufferToHex(r);
    }
    async signWithHmacSha256(e, t) {
      let r = typeof e === "string" ? e : String.fromCharCode(...new Uint16Array(e)), s = new TextEncoder, n = await window.crypto.subtle.importKey("raw", s.encode(r), {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      }, !1, [ "sign" ]);
      return window.crypto.subtle.sign("HMAC", n, s.encode(t));
    }
  }
  Dn.BrowserCrypto = $t;
});

var Bn = C(function(Ln) {
  Object.defineProperty(Ln, "__esModule", {
    value: !0
  });
  Ln.NodeCrypto = void 0;
  var Ee = Ne("crypto");
  class Mn {
    async sha256DigestBase64(e) {
      return Ee.createHash("sha256").update(e).digest("base64");
    }
    randomBytesBase64(e) {
      return Ee.randomBytes(e).toString("base64");
    }
    async verify(e, t, r) {
      let s = Ee.createVerify("RSA-SHA256");
      return s.update(t), s.end(), s.verify(e, r, "base64");
    }
    async sign(e, t) {
      let r = Ee.createSign("RSA-SHA256");
      return r.update(t), r.end(), r.sign(e, "base64");
    }
    decodeBase64StringUtf8(e) {
      return Buffer.from(e, "base64").toString("utf-8");
    }
    encodeBase64StringUtf8(e) {
      return Buffer.from(e, "utf-8").toString("base64");
    }
    async sha256DigestHex(e) {
      return Ee.createHash("sha256").update(e).digest("hex");
    }
    async signWithHmacSha256(e, t) {
      let r = typeof e === "string" ? e : Nu(e);
      return bu(Ee.createHmac("sha256", r).update(t).digest());
    }
  }
  Ln.NodeCrypto = Mn;
  function bu(e) {
    let t = new ArrayBuffer(e.length), r = new Uint8Array(t);
    for (let s = 0; s < e.length; ++s) r[s] = e[s];
    return t;
  }
  function Nu(e) {
    return Buffer.from(e);
  }
});

var St = C(function(Fe) {
  var Pu = Fe && Fe.__createBinding || (Object.create ? function(e, t, r, s) {
    if (s === void 0) s = r;
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) n = {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    };
    Object.defineProperty(e, s, n);
  } : function(e, t, r, s) {
    if (s === void 0) s = r;
    e[s] = t[r];
  }), Iu = Fe && Fe.__exportStar || function(e, t) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) Pu(t, e, r);
  };
  Object.defineProperty(Fe, "__esModule", {
    value: !0
  });
  Fe.createCrypto = Uu;
  Fe.hasBrowserCrypto = Jn;
  var Hn = Fn(), $n = Bn();
  Iu(Gr(), Fe);
  function Uu() {
    if (Jn()) return new Hn.BrowserCrypto;
    return new $n.NodeCrypto;
  }
  function Jn() {
    return typeof window < "u" && typeof window.crypto < "u" && typeof window.crypto.subtle < "u";
  }
});

var Re = C(function(zn) {
  Object.defineProperty(zn, "__esModule", {
    value: !0
  });
  zn.LRUCache = void 0;
  zn.snakeToCamel = Yn;
  zn.originalOrCamelOptions = Du;
  zn.removeUndefinedValuesInObject = qu;
  zn.isValidFile = Fu;
  zn.getWellKnownCertificateConfigFileLocation = Mu;
  var Wn = Ne("fs"), Vn = Ne("os"), at = Ne("path"), ju = "certificate_config.json", Kn = "gcloud";
  function Yn(e) {
    return e.replace(/([_][^_])/g, t => t.slice(1).toUpperCase());
  }
  function Du(e) {
    function t(r) {
      let s = e || {};
      return s[r] ?? s[Yn(r)];
    }
    return {
      get: t
    };
  }
  class Xn {
    capacity;
    #e=new Map;
    maxAge;
    constructor(e) {
      this.capacity = e.capacity, this.maxAge = e.maxAge;
    }
    #t(e, t) {
      this.#e.delete(e), this.#e.set(e, {
        value: t,
        lastAccessed: Date.now()
      });
    }
    set(e, t) {
      this.#t(e, t), this.#r();
    }
    get(e) {
      let t = this.#e.get(e);
      if (!t) return;
      return this.#t(e, t.value), this.#r(), t.value;
    }
    #r() {
      let e = this.maxAge ? Date.now() - this.maxAge : 0, t = this.#e.entries().next();
      while (!t.done && (this.#e.size > this.capacity || t.value[1].lastAccessed < e)) this.#e.delete(t.value[0]), 
      t = this.#e.entries().next();
    }
  }
  zn.LRUCache = Xn;
  function qu(e) {
    return Object.entries(e).forEach(([t, r]) => {
      if (r === void 0 || r === "undefined") delete e[t];
    }), e;
  }
  async function Fu(e) {
    try {
      return (await Wn.promises.lstat(e)).isFile();
    } catch (t) {
      return !1;
    }
  }
  function Mu() {
    let e = process.env.CLOUDSDK_CONFIG || (Lu() ? at.join(process.env.APPDATA || "", Kn) : at.join(process.env.HOME || "", ".config", Kn));
    return at.join(e, ju);
  }
  function Lu() {
    return Vn.platform().startsWith("win");
  }
});

var Zn = C(function(zd, Ku) {
  Ku.exports = {
    name: "google-auth-library",
    version: "10.6.2",
    author: "Google Inc.",
    description: "Google APIs Authentication Client Library for Node.js",
    engines: {
      node: ">=18"
    },
    main: "./build/src/index.js",
    types: "./build/src/index.d.ts",
    repository: {
      type: "git",
      directory: "packages/google-auth-library-nodejs",
      url: "https://github.com/googleapis/google-cloud-node-core.git"
    },
    keywords: [ "google", "api", "google apis", "client", "client library" ],
    dependencies: {
      "base64-js": "^1.3.0",
      "ecdsa-sig-formatter": "^1.0.11",
      gaxios: "^7.1.4",
      "gcp-metadata": "8.1.2",
      "google-logging-utils": "1.1.3",
      jws: "^4.0.0"
    },
    devDependencies: {
      "@types/base64-js": "^1.2.5",
      "@types/jws": "^3.1.0",
      "@types/mocha": "^10.0.10",
      "@types/mv": "^2.1.0",
      "@types/ncp": "^2.0.8",
      "@types/node": "^24.0.0",
      "@types/sinon": "^21.0.0",
      "assert-rejects": "^1.0.0",
      c8: "^10.1.3",
      codecov: "^3.8.3",
      gts: "^6.0.2",
      "is-docker": "^3.0.0",
      jsdoc: "^4.0.4",
      "jsdoc-fresh": "^5.0.0",
      "jsdoc-region-tag": "^4.0.0",
      karma: "^6.0.0",
      "karma-chrome-launcher": "^3.0.0",
      "karma-coverage": "^2.0.0",
      "karma-firefox-launcher": "^2.0.0",
      "karma-mocha": "^2.0.0",
      "karma-sourcemap-loader": "^0.4.0",
      "karma-webpack": "^5.0.1",
      keypair: "^1.0.4",
      mocha: "^11.1.0",
      mv: "^2.1.1",
      ncp: "^2.0.0",
      nock: "^14.0.5",
      "null-loader": "^4.0.1",
      puppeteer: "^24.0.0",
      sinon: "^21.0.0",
      "ts-loader": "^9.5.2",
      typescript: "5.8.3",
      webpack: "^5.97.1",
      "webpack-cli": "^6.0.1"
    },
    files: [ "build/src", "!build/src/**/*.map" ],
    scripts: {
      test: "c8 mocha build/test",
      clean: "gts clean",
      prepare: "npm run compile",
      lint: "gts check --no-inline-config",
      compile: "tsc -p .",
      fix: "gts fix",
      pretest: "npm run compile -- --sourceMap",
      docs: "jsdoc -c .jsdoc.js",
      "samples-setup": "cd samples/ && npm link ../ && npm run setup && cd ../",
      "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
      "system-test": "mocha build/system-test --timeout 60000",
      "presystem-test": "npm run compile -- --sourceMap",
      webpack: "webpack",
      "browser-test": "karma start",
      "docs-test": "echo 'disabled until linkinator is fixed'",
      "predocs-test": "npm run docs",
      prelint: "cd samples; npm link ../; npm install"
    },
    license: "Apache-2.0",
    homepage: "https://github.com/googleapis/google-cloud-node-core/tree/main/packages/google-auth-library-nodejs"
  };
});

var Hr = C(function(ti) {
  Object.defineProperty(ti, "__esModule", {
    value: !0
  });
  ti.USER_AGENT = ti.PRODUCT_NAME = ti.pkg = void 0;
  var Br = Zn();
  ti.pkg = Br;
  var ei = "google-api-nodejs-client";
  ti.PRODUCT_NAME = ei;
  var Wu = `${ei}/${Br.version}`;
  ti.USER_AGENT = Wu;
});

var fe = C(function(oi) {
  Object.defineProperty(oi, "__esModule", {
    value: !0
  });
  oi.AuthClient = oi.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = oi.DEFAULT_UNIVERSE = void 0;
  var si = Ne("events"), ct = re(), ni = Re(), ii = Dr(), ut = Hr();
  oi.DEFAULT_UNIVERSE = "googleapis.com";
  oi.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 3e5;
  class se extends si.EventEmitter {
    apiKey;
    projectId;
    quotaProjectId;
    transporter;
    credentials={};
    eagerRefreshThresholdMillis=oi.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS;
    forceRefreshOnFailure=!1;
    universeDomain=oi.DEFAULT_UNIVERSE;
    static RequestMethodNameSymbol=Symbol("request method name");
    static RequestLogIdSymbol=Symbol("request log id");
    constructor(e = {}) {
      super();
      let t = ni.originalOrCamelOptions(e);
      if (this.apiKey = e.apiKey, this.projectId = t.get("project_id") ?? null, this.quotaProjectId = t.get("quota_project_id"), 
      this.credentials = t.get("credentials") ?? {}, this.universeDomain = t.get("universe_domain") ?? oi.DEFAULT_UNIVERSE, 
      this.transporter = e.transporter ?? new ct.Gaxios(e.transporterOptions), t.get("useAuthRequestParameters") !== !1) this.transporter.interceptors.request.add(se.DEFAULT_REQUEST_INTERCEPTOR), 
      this.transporter.interceptors.response.add(se.DEFAULT_RESPONSE_INTERCEPTOR);
      if (e.eagerRefreshThresholdMillis) this.eagerRefreshThresholdMillis = e.eagerRefreshThresholdMillis;
      this.forceRefreshOnFailure = e.forceRefreshOnFailure ?? !1;
    }
    fetch(...e) {
      let t = e[0], r = e[1], s = void 0, n = new Headers;
      if (typeof t === "string") s = new URL(t); else if (t instanceof URL) s = t; else if (t && t.url) s = new URL(t.url);
      if (t && typeof t === "object" && "headers" in t) ct.Gaxios.mergeHeaders(n, t.headers);
      if (r) ct.Gaxios.mergeHeaders(n, new Headers(r.headers));
      if (typeof t === "object" && !(t instanceof URL)) return this.request({
        ...r,
        ...t,
        headers: n,
        url: s
      }); else return this.request({
        ...r,
        headers: n,
        url: s
      });
    }
    setCredentials(e) {
      this.credentials = e;
    }
    addSharedMetadataHeaders(e) {
      if (!e.has("x-goog-user-project") && this.quotaProjectId) e.set("x-goog-user-project", this.quotaProjectId);
      return e;
    }
    addUserProjectAndAuthHeaders(e, t) {
      let r = t.get("x-goog-user-project"), s = t.get("authorization");
      if (r) e.set("x-goog-user-project", r);
      if (s) e.set("authorization", s);
      return e;
    }
    static log=ii.log("auth");
    static DEFAULT_REQUEST_INTERCEPTOR={
      resolved: async e => {
        if (!e.headers.has("x-goog-api-client")) {
          let r = process.version.replace(/^v/, "");
          e.headers.set("x-goog-api-client", `gl-node/${r}`);
        }
        let t = e.headers.get("User-Agent");
        if (!t) e.headers.set("User-Agent", ut.USER_AGENT); else if (!t.includes(`${ut.PRODUCT_NAME}/`)) e.headers.set("User-Agent", `${t} ${ut.USER_AGENT}`);
        try {
          let r = e, s = r[se.RequestMethodNameSymbol], n = `${Math.floor(Math.random() * 1e3)}`;
          r[se.RequestLogIdSymbol] = n;
          let a = {
            url: e.url,
            headers: e.headers
          };
          if (s) se.log.info("%s [%s] request %j", s, n, a); else se.log.info("[%s] request %j", n, a);
        } catch (r) {}
        return e;
      }
    };
    static DEFAULT_RESPONSE_INTERCEPTOR={
      resolved: async e => {
        try {
          let t = e.config, r = t[se.RequestMethodNameSymbol], s = t[se.RequestLogIdSymbol];
          if (r) se.log.info("%s [%s] response %j", r, s, e.data); else se.log.info("[%s] response %j", s, e.data);
        } catch (t) {}
        return e;
      },
      rejected: async e => {
        try {
          let t = e.config, r = t[se.RequestMethodNameSymbol], s = t[se.RequestLogIdSymbol];
          if (r) se.log.info("%s [%s] error %j", r, s, e.response?.data); else se.log.error("[%s] error %j", s, e.response?.data);
        } catch (t) {}
        throw e;
      }
    };
    static setMethodName(e, t) {
      try {
        let r = e;
        r[se.RequestMethodNameSymbol] = t;
      } catch (r) {}
    }
    static get RETRY_CONFIG() {
      return {
        retry: !0,
        retryConfig: {
          httpMethodsToRetry: [ "GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE" ]
        }
      };
    }
  }
  oi.AuthClient = se;
});

var Jr = C(function(li) {
  Object.defineProperty(li, "__esModule", {
    value: !0
  });
  li.LoginTicket = void 0;
  class ui {
    envelope;
    payload;
    constructor(e, t) {
      this.envelope = e, this.payload = t;
    }
    getEnvelope() {
      return this.envelope;
    }
    getPayload() {
      return this.payload;
    }
    getUserId() {
      let e = this.getPayload();
      if (e && e.sub) return e.sub;
      return null;
    }
    getAttributes() {
      return {
        envelope: this.getEnvelope(),
        payload: this.getPayload()
      };
    }
  }
  li.LoginTicket = ui;
});

var st = C(function(_i) {
  Object.defineProperty(_i, "__esModule", {
    value: !0
  });
  _i.OAuth2Client = _i.ClientAuthentication = _i.CertificateFormat = _i.CodeChallengeMethod = void 0;
  var Jt = re(), fi = Ne("querystring"), pi = Ne("stream"), gi = iwo(), Kt = Re(), lt = St(), Te = fe(), yi = Jr(), hi;
  (function(e) {
    e.Plain = "plain", e.S256 = "S256";
  })(hi || (_i.CodeChallengeMethod = hi = {}));
  var Me;
  (function(e) {
    e.PEM = "PEM", e.JWK = "JWK";
  })(Me || (_i.CertificateFormat = Me = {}));
  var Ot;
  (function(e) {
    e.ClientSecretPost = "ClientSecretPost", e.ClientSecretBasic = "ClientSecretBasic", 
    e.None = "None";
  })(Ot || (_i.ClientAuthentication = Ot = {}));
  class Ae extends Te.AuthClient {
    redirectUri;
    certificateCache={};
    certificateExpiry=null;
    certificateCacheFormat=Me.PEM;
    refreshTokenPromises=new Map;
    endpoints;
    issuers;
    clientAuthentication;
    _clientId;
    _clientSecret;
    refreshHandler;
    constructor(e = {}, t, r) {
      super(typeof e === "object" ? e : {});
      if (typeof e !== "object") e = {
        clientId: e,
        clientSecret: t,
        redirectUri: r
      };
      this._clientId = e.clientId || e.client_id, this._clientSecret = e.clientSecret || e.client_secret, 
      this.redirectUri = e.redirectUri || e.redirect_uris?.[0], this.endpoints = {
        tokenInfoUrl: "https://oauth2.googleapis.com/tokeninfo",
        oauth2AuthBaseUrl: "https://accounts.google.com/o/oauth2/v2/auth",
        oauth2TokenUrl: "https://oauth2.googleapis.com/token",
        oauth2RevokeUrl: "https://oauth2.googleapis.com/revoke",
        oauth2FederatedSignonPemCertsUrl: "https://www.googleapis.com/oauth2/v1/certs",
        oauth2FederatedSignonJwkCertsUrl: "https://www.googleapis.com/oauth2/v3/certs",
        oauth2IapPublicKeyUrl: "https://www.gstatic.com/iap/verify/public_key",
        ...e.endpoints
      }, this.clientAuthentication = e.clientAuthentication || Ot.ClientSecretPost, this.issuers = e.issuers || [ "accounts.google.com", "https://accounts.google.com", this.universeDomain ];
    }
    static GOOGLE_TOKEN_INFO_URL="https://oauth2.googleapis.com/tokeninfo";
    static CLOCK_SKEW_SECS_=300;
    static DEFAULT_MAX_TOKEN_LIFETIME_SECS_=86400;
    generateAuthUrl(e = {}) {
      if (e.code_challenge_method && !e.code_challenge) throw Error("If a code_challenge_method is provided, code_challenge must be included.");
      if (e.response_type = e.response_type || "code", e.client_id = e.client_id || this._clientId, 
      e.redirect_uri = e.redirect_uri || this.redirectUri, Array.isArray(e.scope)) e.scope = e.scope.join(" ");
      return this.endpoints.oauth2AuthBaseUrl.toString() + "?" + fi.stringify(e);
    }
    generateCodeVerifier() {
      throw Error("generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.");
    }
    async generateCodeVerifierAsync() {
      let e = lt.createCrypto(), r = e.randomBytesBase64(96).replace(/\+/g, "~").replace(/=/g, "_").replace(/\//g, "-"), n = (await e.sha256DigestBase64(r)).split("=")[0].replace(/\+/g, "-").replace(/\//g, "_");
      return {
        codeVerifier: r,
        codeChallenge: n
      };
    }
    getToken(e, t) {
      let r = typeof e === "string" ? {
        code: e
      } : e;
      if (t) this.getTokenAsync(r).then(s => t(null, s.tokens, s.res), s => t(s, null, s.response)); else return this.getTokenAsync(r);
    }
    async getTokenAsync(e) {
      let t = this.endpoints.oauth2TokenUrl.toString(), r = new Headers, s = {
        client_id: e.client_id || this._clientId,
        code_verifier: e.codeVerifier,
        code: e.code,
        grant_type: "authorization_code",
        redirect_uri: e.redirect_uri || this.redirectUri
      };
      if (this.clientAuthentication === Ot.ClientSecretBasic) {
        let g = Buffer.from(`${this._clientId}:${this._clientSecret}`);
        r.set("authorization", `Basic ${g.toString("base64")}`);
      }
      if (this.clientAuthentication === Ot.ClientSecretPost) s.client_secret = this._clientSecret;
      let n = {
        ...Ae.RETRY_CONFIG,
        method: "POST",
        url: t,
        data: new URLSearchParams(Kt.removeUndefinedValuesInObject(s)),
        headers: r
      };
      Te.AuthClient.setMethodName(n, "getTokenAsync");
      let a = await this.transporter.request(n), h = a.data;
      if (a.data && a.data.expires_in) h.expiry_date = (new Date).getTime() + a.data.expires_in * 1e3, 
      delete h.expires_in;
      return this.emit("tokens", h), {
        tokens: h,
        res: a
      };
    }
    async refreshToken(e) {
      if (!e) return this.refreshTokenNoCache(e);
      if (this.refreshTokenPromises.has(e)) return this.refreshTokenPromises.get(e);
      let t = this.refreshTokenNoCache(e).then(r => (this.refreshTokenPromises.delete(e), 
      r), r => {
        throw this.refreshTokenPromises.delete(e), r;
      });
      return this.refreshTokenPromises.set(e, t), t;
    }
    async refreshTokenNoCache(e) {
      if (!e) throw Error("No refresh token is set.");
      let t = this.endpoints.oauth2TokenUrl.toString(), r = {
        refresh_token: e,
        client_id: this._clientId,
        client_secret: this._clientSecret,
        grant_type: "refresh_token"
      }, s;
      try {
        let a = {
          ...Ae.RETRY_CONFIG,
          method: "POST",
          url: t,
          data: new URLSearchParams(Kt.removeUndefinedValuesInObject(r))
        };
        Te.AuthClient.setMethodName(a, "refreshTokenNoCache"), s = await this.transporter.request(a);
      } catch (a) {
        if (a instanceof Jt.GaxiosError && a.message === "invalid_grant" && a.response?.data && /ReAuth/i.test(a.response.data.error_description)) a.message = JSON.stringify(a.response.data);
        throw a;
      }
      let n = s.data;
      if (s.data && s.data.expires_in) n.expiry_date = (new Date).getTime() + s.data.expires_in * 1e3, 
      delete n.expires_in;
      return this.emit("tokens", n), {
        tokens: n,
        res: s
      };
    }
    refreshAccessToken(e) {
      if (e) this.refreshAccessTokenAsync().then(t => e(null, t.credentials, t.res), e); else return this.refreshAccessTokenAsync();
    }
    async refreshAccessTokenAsync() {
      let e = await this.refreshToken(this.credentials.refresh_token), t = e.tokens;
      return t.refresh_token = this.credentials.refresh_token, this.credentials = t, {
        credentials: this.credentials,
        res: e.res
      };
    }
    getAccessToken(e) {
      if (e) this.getAccessTokenAsync().then(t => e(null, t.token, t.res), e); else return this.getAccessTokenAsync();
    }
    async getAccessTokenAsync() {
      if (!this.credentials.access_token || this.isTokenExpiring()) {
        if (!this.credentials.refresh_token) if (this.refreshHandler) {
          let r = await this.processAndValidateRefreshHandler();
          if (r?.access_token) return this.setCredentials(r), {
            token: this.credentials.access_token
          };
        } else throw Error("No refresh token or refresh handler callback is set.");
        let t = await this.refreshAccessTokenAsync();
        if (!t.credentials || t.credentials && !t.credentials.access_token) throw Error("Could not refresh access token.");
        return {
          token: t.credentials.access_token,
          res: t.res
        };
      } else return {
        token: this.credentials.access_token
      };
    }
    async getRequestHeaders(e) {
      return (await this.getRequestMetadataAsync(e)).headers;
    }
    async getRequestMetadataAsync(e) {
      let t = this.credentials;
      if (!t.access_token && !t.refresh_token && !this.apiKey && !this.refreshHandler) throw Error("No access, refresh token, API key or refresh handler callback is set.");
      if (t.access_token && !this.isTokenExpiring()) {
        t.token_type = t.token_type || "Bearer";
        let h = new Headers({
          authorization: t.token_type + " " + t.access_token
        });
        return {
          headers: this.addSharedMetadataHeaders(h)
        };
      }
      if (this.refreshHandler) {
        let h = await this.processAndValidateRefreshHandler();
        if (h?.access_token) {
          this.setCredentials(h);
          let g = new Headers({
            authorization: "Bearer " + this.credentials.access_token
          });
          return {
            headers: this.addSharedMetadataHeaders(g)
          };
        }
      }
      if (this.apiKey) return {
        headers: new Headers({
          "X-Goog-Api-Key": this.apiKey
        })
      };
      let r = null, s = null;
      try {
        r = await this.refreshToken(t.refresh_token), s = r.tokens;
      } catch (h) {
        let g = h;
        if (g.response && (g.response.status === 403 || g.response.status === 404)) g.message = `Could not refresh access token: ${g.message}`;
        throw g;
      }
      let n = this.credentials;
      n.token_type = n.token_type || "Bearer", s.refresh_token = n.refresh_token, this.credentials = s;
      let a = new Headers({
        authorization: n.token_type + " " + s.access_token
      });
      return {
        headers: this.addSharedMetadataHeaders(a),
        res: r.res
      };
    }
    static getRevokeTokenUrl(e) {
      return (new Ae).getRevokeTokenURL(e).toString();
    }
    getRevokeTokenURL(e) {
      let t = new URL(this.endpoints.oauth2RevokeUrl);
      return t.searchParams.append("token", e), t;
    }
    revokeToken(e, t) {
      let r = {
        ...Ae.RETRY_CONFIG,
        url: this.getRevokeTokenURL(e).toString(),
        method: "POST"
      };
      if (Te.AuthClient.setMethodName(r, "revokeToken"), t) this.transporter.request(r).then(s => t(null, s), t); else return this.transporter.request(r);
    }
    revokeCredentials(e) {
      if (e) this.revokeCredentialsAsync().then(t => e(null, t), e); else return this.revokeCredentialsAsync();
    }
    async revokeCredentialsAsync() {
      let e = this.credentials.access_token;
      if (this.credentials = {}, e) return this.revokeToken(e); else throw Error("No access token to revoke.");
    }
    request(e, t) {
      if (t) this.requestAsync(e).then(r => t(null, r), r => t(r, r.response)); else return this.requestAsync(e);
    }
    async requestAsync(e, t = !1) {
      try {
        let r = await this.getRequestMetadataAsync();
        if (e.headers = Jt.Gaxios.mergeHeaders(e.headers), this.addUserProjectAndAuthHeaders(e.headers, r.headers), 
        this.apiKey) e.headers.set("X-Goog-Api-Key", this.apiKey);
        return await this.transporter.request(e);
      } catch (r) {
        let s = r.response;
        if (s) {
          let n = s.status, a = this.credentials && this.credentials.access_token && this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure), h = this.credentials && this.credentials.access_token && !this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure) && this.refreshHandler, g = s.config.data instanceof pi.Readable, E = n === 401 || n === 403;
          if (!t && E && !g && a) return await this.refreshAccessTokenAsync(), this.requestAsync(e, !0); else if (!t && E && !g && h) {
            let S = await this.processAndValidateRefreshHandler();
            if (S?.access_token) this.setCredentials(S);
            return this.requestAsync(e, !0);
          }
        }
        throw r;
      }
    }
    verifyIdToken(e, t) {
      if (t && typeof t !== "function") throw Error("This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.");
      if (t) this.verifyIdTokenAsync(e).then(r => t(null, r), t); else return this.verifyIdTokenAsync(e);
    }
    async verifyIdTokenAsync(e) {
      if (!e.idToken) throw Error("The verifyIdToken method requires an ID Token");
      let t = await this.getFederatedSignonCertsAsync();
      return await this.verifySignedJwtWithCertsAsync(e.idToken, t.certs, e.audience, this.issuers, e.maxExpiry);
    }
    async getTokenInfo(e) {
      let {data: t} = await this.transporter.request({
        ...Ae.RETRY_CONFIG,
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
          authorization: `Bearer ${e}`
        },
        url: this.endpoints.tokenInfoUrl.toString()
      }), r = Object.assign({
        expiry_date: (new Date).getTime() + t.expires_in * 1e3,
        scopes: t.scope.split(" ")
      }, t);
      return delete r.expires_in, delete r.scope, r;
    }
    getFederatedSignonCerts(e) {
      if (e) this.getFederatedSignonCertsAsync().then(t => e(null, t.certs, t.res), e); else return this.getFederatedSignonCertsAsync();
    }
    async getFederatedSignonCertsAsync() {
      let e = (new Date).getTime(), t = lt.hasBrowserCrypto() ? Me.JWK : Me.PEM;
      if (this.certificateExpiry && e < this.certificateExpiry.getTime() && this.certificateCacheFormat === t) return {
        certs: this.certificateCache,
        format: t
      };
      let r, s;
      switch (t) {
       case Me.PEM:
        s = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
        break;

       case Me.JWK:
        s = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
        break;

       default:
        throw Error(`Unsupported certificate format ${t}`);
      }
      try {
        let E = {
          ...Ae.RETRY_CONFIG,
          url: s
        };
        Te.AuthClient.setMethodName(E, "getFederatedSignonCertsAsync"), r = await this.transporter.request(E);
      } catch (E) {
        if (E instanceof Error) E.message = `Failed to retrieve verification certificates: ${E.message}`;
        throw E;
      }
      let n = r?.headers.get("cache-control"), a = -1;
      if (n) {
        let E = /max-age=(?<maxAge>[0-9]+)/.exec(n)?.groups?.maxAge;
        if (E) a = Number(E) * 1e3;
      }
      let h = {};
      switch (t) {
       case Me.PEM:
        h = r.data;
        break;

       case Me.JWK:
        for (let E of r.data.keys) h[E.kid] = E;
        break;

       default:
        throw Error(`Unsupported certificate format ${t}`);
      }
      let g = new Date;
      return this.certificateExpiry = a === -1 ? null : new Date(g.getTime() + a), this.certificateCache = h, 
      this.certificateCacheFormat = t, {
        certs: h,
        format: t,
        res: r
      };
    }
    getIapPublicKeys(e) {
      if (e) this.getIapPublicKeysAsync().then(t => e(null, t.pubkeys, t.res), e); else return this.getIapPublicKeysAsync();
    }
    async getIapPublicKeysAsync() {
      let e, t = this.endpoints.oauth2IapPublicKeyUrl.toString();
      try {
        let r = {
          ...Ae.RETRY_CONFIG,
          url: t
        };
        Te.AuthClient.setMethodName(r, "getIapPublicKeysAsync"), e = await this.transporter.request(r);
      } catch (r) {
        if (r instanceof Error) r.message = `Failed to retrieve verification certificates: ${r.message}`;
        throw r;
      }
      return {
        pubkeys: e.data,
        res: e
      };
    }
    verifySignedJwtWithCerts() {
      throw Error("verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.");
    }
    async verifySignedJwtWithCertsAsync(e, t, r, s, n) {
      let a = lt.createCrypto();
      if (!n) n = Ae.DEFAULT_MAX_TOKEN_LIFETIME_SECS_;
      let h = e.split(".");
      if (h.length !== 3) throw Error("Wrong number of segments in token: " + e);
      let g = h[0] + "." + h[1], E = h[2], S, T;
      try {
        S = JSON.parse(a.decodeBase64StringUtf8(h[0]));
      } catch (G) {
        if (G instanceof Error) G.message = `Can't parse token envelope: ${h[0]}': ${G.message}`;
        throw G;
      }
      if (!S) throw Error("Can't parse token envelope: " + h[0]);
      try {
        T = JSON.parse(a.decodeBase64StringUtf8(h[1]));
      } catch (G) {
        if (G instanceof Error) G.message = `Can't parse token payload '${h[0]}`;
        throw G;
      }
      if (!T) throw Error("Can't parse token payload: " + h[1]);
      if (!Object.prototype.hasOwnProperty.call(t, S.kid)) throw Error("No pem found for envelope: " + JSON.stringify(S));
      let j = t[S.kid];
      if (S.alg === "ES256") E = gi.joseToDer(E, "ES256").toString("base64");
      if (!await a.verify(j, g, E)) throw Error("Invalid token signature: " + e);
      if (!T.iat) throw Error("No issue time in token: " + JSON.stringify(T));
      if (!T.exp) throw Error("No expiration time in token: " + JSON.stringify(T));
      let Y = Number(T.iat);
      if (isNaN(Y)) throw Error("iat field using invalid format");
      let K = Number(T.exp);
      if (isNaN(K)) throw Error("exp field using invalid format");
      let R = (new Date).getTime() / 1e3;
      if (K >= R + n) throw Error("Expiration time too far in future: " + JSON.stringify(T));
      let P = Y - Ae.CLOCK_SKEW_SECS_, O = K + Ae.CLOCK_SKEW_SECS_;
      if (R < P) throw Error("Token used too early, " + R + " < " + P + ": " + JSON.stringify(T));
      if (R > O) throw Error("Token used too late, " + R + " > " + O + ": " + JSON.stringify(T));
      if (s && s.indexOf(T.iss) < 0) throw Error("Invalid issuer, expected one of [" + s + "], but got " + T.iss);
      if (typeof r < "u" && r !== null) {
        let G = T.aud, Z = !1;
        if (r.constructor === Array) Z = r.indexOf(G) > -1; else Z = G === r;
        if (!Z) throw Error("Wrong recipient, payload audience != requiredAudience");
      }
      return new yi.LoginTicket(S, T);
    }
    async processAndValidateRefreshHandler() {
      if (this.refreshHandler) {
        let e = await this.refreshHandler();
        if (!e.access_token) throw Error("No access token is returned by the refreshHandler callback.");
        return e;
      }
      return;
    }
    isTokenExpiring() {
      let e = this.credentials.expiry_date;
      return e ? e <= (new Date).getTime() + this.eagerRefreshThresholdMillis : !1;
    }
  }
  _i.OAuth2Client = Ae;
});

var Kr = C(function(Ti) {
  Object.defineProperty(Ti, "__esModule", {
    value: !0
  });
  Ti.Compute = void 0;
  var Ei = re(), Wt = kt(), wi = st();
  class Ai extends wi.OAuth2Client {
    serviceAccountEmail;
    scopes;
    constructor(e = {}) {
      super(e);
      this.credentials = {
        expiry_date: 1,
        refresh_token: "compute-placeholder"
      }, this.serviceAccountEmail = e.serviceAccountEmail || "default", this.scopes = Array.isArray(e.scopes) ? e.scopes : e.scopes ? [ e.scopes ] : [];
    }
    async refreshTokenNoCache() {
      let e = `service-accounts/${this.serviceAccountEmail}/token`, t;
      try {
        let s = {
          property: e
        };
        if (this.scopes.length > 0) s.params = {
          scopes: this.scopes.join(",")
        };
        t = await Wt.instance(s);
      } catch (s) {
        if (s instanceof Ei.GaxiosError) s.message = `Could not refresh access token: ${s.message}`, 
        this.wrapError(s);
        throw s;
      }
      let r = t;
      if (t && t.expires_in) r.expiry_date = (new Date).getTime() + t.expires_in * 1e3, 
      delete r.expires_in;
      return this.emit("tokens", r), {
        tokens: r,
        res: null
      };
    }
    async fetchIdToken(e) {
      let t = `service-accounts/${this.serviceAccountEmail}/identity?format=full&audience=${e}`, r;
      try {
        r = await Wt.instance({
          property: t
        });
      } catch (s) {
        if (s instanceof Error) s.message = `Could not fetch ID token: ${s.message}`;
        throw s;
      }
      return r;
    }
    wrapError(e) {
      let t = e.response;
      if (t && t.status) {
        if (e.status = t.status, t.status === 403) e.message = "A Forbidden error was returned while attempting to retrieve an access token for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have the correct permission scopes specified: " + e.message; else if (t.status === 404) e.message = "A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: " + e.message;
      }
    }
  }
  Ti.Compute = Ai;
});

var Wr = C(function(Si) {
  Object.defineProperty(Si, "__esModule", {
    value: !0
  });
  Si.IdTokenClient = void 0;
  var vi = st();
  class ki extends vi.OAuth2Client {
    targetAudience;
    idTokenProvider;
    constructor(e) {
      super(e);
      this.targetAudience = e.targetAudience, this.idTokenProvider = e.idTokenProvider;
    }
    async getRequestMetadataAsync() {
      if (!this.credentials.id_token || !this.credentials.expiry_date || this.isTokenExpiring()) {
        let t = await this.idTokenProvider.fetchIdToken(this.targetAudience);
        this.credentials = {
          id_token: t,
          expiry_date: this.getIdTokenExpiryDate(t)
        };
      }
      return {
        headers: new Headers({
          authorization: "Bearer " + this.credentials.id_token
        })
      };
    }
    getIdTokenExpiryDate(e) {
      let t = e.split(".")[1];
      if (t) return JSON.parse(Buffer.from(t, "base64").toString("ascii")).exp * 1e3;
    }
  }
  Si.IdTokenClient = ki;
});

var Vr = C(function(Ri) {
  Object.defineProperty(Ri, "__esModule", {
    value: !0
  });
  Ri.GCPEnv = void 0;
  Ri.clear = Zu;
  Ri.getEnv = el;
  var Vt = kt(), Ie;
  (function(e) {
    e.APP_ENGINE = "APP_ENGINE", e.KUBERNETES_ENGINE = "KUBERNETES_ENGINE", e.CLOUD_FUNCTIONS = "CLOUD_FUNCTIONS", 
    e.COMPUTE_ENGINE = "COMPUTE_ENGINE", e.CLOUD_RUN = "CLOUD_RUN", e.CLOUD_RUN_JOBS = "CLOUD_RUN_JOBS", 
    e.NONE = "NONE";
  })(Ie || (Ri.GCPEnv = Ie = {}));
  var Rt;
  function Zu() {
    Rt = void 0;
  }
  async function el() {
    if (Rt) return Rt;
    return Rt = tl(), Rt;
  }
  async function tl() {
    let e = Ie.NONE;
    if (rl()) e = Ie.APP_ENGINE; else if (sl()) e = Ie.CLOUD_FUNCTIONS; else if (await al()) if (await ol()) e = Ie.KUBERNETES_ENGINE; else if (nl()) e = Ie.CLOUD_RUN; else if (il()) e = Ie.CLOUD_RUN_JOBS; else e = Ie.COMPUTE_ENGINE; else e = Ie.NONE;
    return e;
  }
  function rl() {
    return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
  }
  function sl() {
    return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
  }
  function nl() {
    return !!process.env.K_CONFIGURATION;
  }
  function il() {
    return !!process.env.CLOUD_RUN_JOB;
  }
  async function ol() {
    try {
      return await Vt.instance("attributes/cluster-name"), !0;
    } catch (e) {
      return !1;
    }
  }
  async function al() {
    return Vt.isAvailable();
  }
});

var Ii = C(function(Pi) {
  Object.defineProperty(Pi, "__esModule", {
    value: !0
  });
  Pi.buildPayloadForJwsSign = Ni;
  Pi.getJwsSign = hl;
  var bi = EHt(), ll = "RS256", dl = "https://oauth2.googleapis.com/token";
  function Ni(e) {
    let t = Math.floor((new Date).getTime() / 1e3);
    return {
      iss: e.iss,
      scope: e.scope,
      aud: dl,
      exp: t + 3600,
      iat: t,
      sub: e.sub,
      ...e.additionalClaims
    };
  }
  function hl(e) {
    let t = Ni(e);
    return bi.sign({
      header: {
        alg: ll
      },
      payload: t,
      secret: e.key
    });
  }
});

var Di = C(function(ji) {
  Object.defineProperty(ji, "__esModule", {
    value: !0
  });
  ji.getToken = ml;
  var Ui = Ii(), gl = "https://oauth2.googleapis.com/token", yl = "urn:ietf:params:oauth:grant-type:jwt-bearer", _l = e => ({
    method: "POST",
    url: gl,
    data: new URLSearchParams({
      grant_type: yl,
      assertion: Ui.getJwsSign(e)
    }),
    responseType: "json",
    retryConfig: {
      httpMethodsToRetry: [ "POST" ]
    }
  });
  async function ml(e) {
    if (!e.transporter) throw Error("No transporter set.");
    try {
      let t = _l(e);
      return (await e.transporter.request(t)).data;
    } catch (t) {
      let r = t, s = r.response?.data;
      if (s?.error) r.message = `${s.error}: ${s.error_description}`;
      throw r;
    }
  }
});

var Li = C(function(Fi) {
  Object.defineProperty(Fi, "__esModule", {
    value: !0
  });
  Fi.ErrorWithCode = void 0;
  class qi extends Error {
    code;
    constructor(e, t) {
      super(e);
      this.code = t;
    }
  }
  Fi.ErrorWithCode = qi;
});

var Yr = C(function(Vi) {
  Object.defineProperty(Vi, "__esModule", {
    value: !0
  });
  Vi.getCredentials = wl;
  var Gi = Ne("path"), Yt = Ne("fs"), Bi = Ne("util"), Je = Li(), Hi = Yt.readFile ? Bi.promisify(Yt.readFile) : async () => {
    throw new Je.ErrorWithCode("use key rather than keyFile.", "MISSING_CREDENTIALS");
  }, $e;
  (function(e) {
    e.JSON = ".json", e.DER = ".der", e.CRT = ".crt", e.PEM = ".pem", e.P12 = ".p12", 
    e.PFX = ".pfx";
  })($e || ($e = {}));
  class $i {
    keyFilePath;
    constructor(e) {
      this.keyFilePath = e;
    }
    async getCredentials() {
      let e = await Hi(this.keyFilePath, "utf8"), t;
      try {
        t = JSON.parse(e);
      } catch (n) {
        throw Error(`Invalid JSON key file: ${n.message}`);
      }
      let r = t.private_key, s = t.client_email;
      if (!r || !s) throw new Je.ErrorWithCode("private_key and client_email are required.", "MISSING_CREDENTIALS");
      return {
        privateKey: r,
        clientEmail: s
      };
    }
  }
  class Ji {
    keyFilePath;
    constructor(e) {
      this.keyFilePath = e;
    }
    async getCredentials() {
      return {
        privateKey: await Hi(this.keyFilePath, "utf8")
      };
    }
  }
  class Ki {
    async getCredentials() {
      throw new Je.ErrorWithCode("*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.", "UNKNOWN_CERTIFICATE_TYPE");
    }
  }
  class Wi {
    static create(e) {
      switch (Gi.extname(e)) {
       case $e.JSON:
        return new $i(e);

       case $e.DER:
       case $e.CRT:
       case $e.PEM:
        return new Ji(e);

       case $e.P12:
       case $e.PFX:
        return new Ki;

       default:
        throw new Je.ErrorWithCode("Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.", "UNKNOWN_CERTIFICATE_TYPE");
      }
    }
  }
  async function wl(e) {
    return Wi.create(e).getCredentials();
  }
});

var eo = C(function(Qi) {
  Object.defineProperty(Qi, "__esModule", {
    value: !0
  });
  Qi.TokenHandler = void 0;
  var Yi = Di(), Xi = Yr();
  class zi {
    token;
    tokenExpiresAt;
    inFlightRequest;
    tokenOptions;
    constructor(e) {
      this.tokenOptions = e;
    }
    async processCredentials() {
      if (!this.tokenOptions.key && !this.tokenOptions.keyFile) throw Error("No key or keyFile set.");
      if (!this.tokenOptions.key && this.tokenOptions.keyFile) {
        let e = await Xi.getCredentials(this.tokenOptions.keyFile);
        this.tokenOptions.key = e.privateKey, this.tokenOptions.email = e.clientEmail;
      }
    }
    isTokenExpiring() {
      if (!this.token || !this.tokenExpiresAt) return !0;
      let e = (new Date).getTime(), t = this.tokenOptions.eagerRefreshThresholdMillis ?? 0;
      return this.tokenExpiresAt <= e + t;
    }
    hasExpired() {
      let e = (new Date).getTime();
      if (this.token && this.tokenExpiresAt) return (new Date).getTime() >= this.tokenExpiresAt;
      return !0;
    }
    async getToken(e) {
      if (await this.processCredentials(), this.inFlightRequest && !e) return this.inFlightRequest;
      if (this.token && !this.isTokenExpiring() && !e) return this.token;
      try {
        this.inFlightRequest = Yi.getToken(this.tokenOptions);
        let t = await this.inFlightRequest;
        return this.token = t, this.tokenExpiresAt = (new Date).getTime() + (t.expires_in ?? 0) * 1e3, 
        t;
      } finally {
        this.inFlightRequest = void 0;
      }
    }
  }
  Qi.TokenHandler = zi;
});

var ro = C(function(to) {
  Object.defineProperty(to, "__esModule", {
    value: !0
  });
  to.revokeToken = vl;
  var Tl = "https://oauth2.googleapis.com/revoke?token=", Cl = !0;
  async function vl(e, t) {
    let r = Tl + e;
    return await t.request({
      url: r,
      retry: Cl
    });
  }
});

var Xr = C(function(oo) {
  Object.defineProperty(oo, "__esModule", {
    value: !0
  });
  oo.GoogleToken = void 0;
  var so = re(), Xt = eo(), no = ro();
  class io {
    tokenOptions;
    tokenHandler;
    constructor(e) {
      if (this.tokenOptions = e || {}, this.tokenOptions.transporter = this.tokenOptions.transporter || {
        request: t => so.request(t)
      }, !this.tokenOptions.iss) this.tokenOptions.iss = this.tokenOptions.email;
      if (typeof this.tokenOptions.scope === "object") this.tokenOptions.scope = this.tokenOptions.scope.join(" ");
      this.tokenHandler = new Xt.TokenHandler(this.tokenOptions);
    }
    get expiresAt() {
      return this.tokenHandler.tokenExpiresAt;
    }
    get accessToken() {
      return this.tokenHandler.token?.access_token;
    }
    get idToken() {
      return this.tokenHandler.token?.id_token;
    }
    get tokenType() {
      return this.tokenHandler.token?.token_type;
    }
    get refreshToken() {
      return this.tokenHandler.token?.refresh_token;
    }
    hasExpired() {
      return this.tokenHandler.hasExpired();
    }
    isTokenExpiring() {
      return this.tokenHandler.isTokenExpiring();
    }
    getToken(e, t = {
      forceRefresh: !1
    }) {
      let r;
      if (typeof e === "function") r = e; else if (typeof e === "object") t = e;
      let s = this.tokenHandler.getToken(t.forceRefresh ?? !1);
      if (r) s.then(n => r(null, n), r);
      return s;
    }
    revokeToken(e) {
      if (!this.accessToken) return Promise.reject(Error("No token to revoke."));
      let t = no.revokeToken(this.accessToken, this.tokenOptions.transporter);
      if (e) t.then(() => e(), e);
      this.tokenHandler = new Xt.TokenHandler(this.tokenOptions);
    }
    get googleTokenOptions() {
      return this.tokenOptions;
    }
  }
  oo.GoogleToken = io;
});

var Qr = C(function(ho) {
  Object.defineProperty(ho, "__esModule", {
    value: !0
  });
  ho.JWTAccess = void 0;
  var uo = EHt(), lo = Re(), co = {
    alg: "RS256",
    typ: "JWT"
  };
  class zr {
    email;
    key;
    keyId;
    projectId;
    eagerRefreshThresholdMillis;
    cache=new lo.LRUCache({
      capacity: 500,
      maxAge: 36e5
    });
    constructor(e, t, r, s) {
      this.email = e, this.key = t, this.keyId = r, this.eagerRefreshThresholdMillis = s ?? 3e5;
    }
    getCachedKey(e, t) {
      let r = e;
      if (t && Array.isArray(t) && t.length) r = e ? `${e}_${t.join("_")}` : `${t.join("_")}`; else if (typeof t === "string") r = e ? `${e}_${t}` : t;
      if (!r) throw Error("Scopes or url must be provided");
      return r;
    }
    getRequestHeaders(e, t, r) {
      let s = this.getCachedKey(e, r), n = this.cache.get(s), a = Date.now();
      if (n && n.expiration - a > this.eagerRefreshThresholdMillis) return new Headers(n.headers);
      let h = Math.floor(Date.now() / 1e3), g = zr.getExpirationTime(h), E;
      if (Array.isArray(r)) r = r.join(" ");
      if (r) E = {
        iss: this.email,
        sub: this.email,
        scope: r,
        exp: g,
        iat: h
      }; else E = {
        iss: this.email,
        sub: this.email,
        aud: e,
        exp: g,
        iat: h
      };
      if (t) {
        for (let Y in E) if (t[Y]) throw Error(`The '${Y}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`);
      }
      let S = this.keyId ? {
        ...co,
        kid: this.keyId
      } : co, T = Object.assign(E, t), j = uo.sign({
        header: S,
        payload: T,
        secret: this.key
      }), I = new Headers({
        authorization: `Bearer ${j}`
      });
      return this.cache.set(s, {
        expiration: g * 1e3,
        headers: I
      }), I;
    }
    static getExpirationTime(e) {
      return e + 3600;
    }
    fromJSON(e) {
      if (!e) throw Error("Must pass in a JSON object containing the service account auth settings.");
      if (!e.client_email) throw Error("The incoming JSON object does not contain a client_email field");
      if (!e.private_key) throw Error("The incoming JSON object does not contain a private_key field");
      this.email = e.client_email, this.key = e.private_key, this.keyId = e.private_key_id, 
      this.projectId = e.project_id;
    }
    fromStream(e, t) {
      if (t) this.fromStreamAsync(e).then(() => t(), t); else return this.fromStreamAsync(e);
    }
    fromStreamAsync(e) {
      return new Promise((t, r) => {
        if (!e) r(Error("Must pass in a stream containing the service account auth settings."));
        let s = "";
        e.setEncoding("utf8").on("data", n => s += n).on("error", r).on("end", () => {
          try {
            let n = JSON.parse(s);
            this.fromJSON(n), t();
          } catch (n) {
            r(n);
          }
        });
      });
    }
  }
  ho.JWTAccess = zr;
});

var es = C(function(_o) {
  Object.defineProperty(_o, "__esModule", {
    value: !0
  });
  _o.JWT = void 0;
  var zt = Xr(), po = Yr(), go = Qr(), yo = st(), Ke = fe();
  class Zr extends yo.OAuth2Client {
    email;
    keyFile;
    key;
    keyId;
    defaultScopes;
    scopes;
    scope;
    subject;
    gtoken;
    additionalClaims;
    useJWTAccessWithScope;
    defaultServicePath;
    access;
    constructor(e = {}) {
      super(e);
      this.email = e.email, this.keyFile = e.keyFile, this.key = e.key, this.keyId = e.keyId, 
      this.scopes = e.scopes, this.subject = e.subject, this.additionalClaims = e.additionalClaims, 
      this.credentials = {
        refresh_token: "jwt-placeholder",
        expiry_date: 1
      };
    }
    createScoped(e) {
      let t = new Zr(this);
      return t.scopes = e, t;
    }
    async getRequestMetadataAsync(e) {
      e = this.defaultServicePath ? `https://${this.defaultServicePath}/` : e;
      let t = !this.hasUserScopes() && e || this.useJWTAccessWithScope && this.hasAnyScopes() || this.universeDomain !== Ke.DEFAULT_UNIVERSE;
      if (this.subject && this.universeDomain !== Ke.DEFAULT_UNIVERSE) throw RangeError(`Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${Ke.DEFAULT_UNIVERSE}`);
      if (!this.apiKey && t) if (this.additionalClaims && this.additionalClaims.target_audience) {
        let {tokens: r} = await this.refreshToken();
        return {
          headers: this.addSharedMetadataHeaders(new Headers({
            authorization: `Bearer ${r.id_token}`
          }))
        };
      } else {
        if (!this.access) this.access = new go.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis);
        let r;
        if (this.hasUserScopes()) r = this.scopes; else if (!e) r = this.defaultScopes;
        let s = this.useJWTAccessWithScope || this.universeDomain !== Ke.DEFAULT_UNIVERSE, n = await this.access.getRequestHeaders(e ?? void 0, this.additionalClaims, s ? r : void 0);
        return {
          headers: this.addSharedMetadataHeaders(n)
        };
      } else if (this.hasAnyScopes() || this.apiKey) return super.getRequestMetadataAsync(e); else return {
        headers: new Headers
      };
    }
    async fetchIdToken(e) {
      let t = new zt.GoogleToken({
        iss: this.email,
        sub: this.subject,
        scope: this.scopes || this.defaultScopes,
        keyFile: this.keyFile,
        key: this.key,
        additionalClaims: {
          target_audience: e
        },
        transporter: this.transporter
      });
      if (await t.getToken({
        forceRefresh: !0
      }), !t.idToken) throw Error("Unknown error: Failed to fetch ID token");
      return t.idToken;
    }
    hasUserScopes() {
      if (!this.scopes) return !1;
      return this.scopes.length > 0;
    }
    hasAnyScopes() {
      if (this.scopes && this.scopes.length > 0) return !0;
      if (this.defaultScopes && this.defaultScopes.length > 0) return !0;
      return !1;
    }
    authorize(e) {
      if (e) this.authorizeAsync().then(t => e(null, t), e); else return this.authorizeAsync();
    }
    async authorizeAsync() {
      let e = await this.refreshToken();
      if (!e) throw Error("No result returned");
      return this.credentials = e.tokens, this.credentials.refresh_token = "jwt-placeholder", 
      this.key = this.gtoken.googleTokenOptions?.key, this.email = this.gtoken.googleTokenOptions?.iss, 
      e.tokens;
    }
    async refreshTokenNoCache() {
      let e = this.createGToken(), r = {
        access_token: (await e.getToken({
          forceRefresh: this.isTokenExpiring()
        })).access_token,
        token_type: "Bearer",
        expiry_date: e.expiresAt,
        id_token: e.idToken
      };
      return this.emit("tokens", r), {
        res: null,
        tokens: r
      };
    }
    createGToken() {
      if (!this.gtoken) this.gtoken = new zt.GoogleToken({
        iss: this.email,
        sub: this.subject,
        scope: this.scopes || this.defaultScopes,
        keyFile: this.keyFile,
        key: this.key,
        additionalClaims: this.additionalClaims,
        transporter: this.transporter
      });
      return this.gtoken;
    }
    fromJSON(e) {
      if (!e) throw Error("Must pass in a JSON object containing the service account auth settings.");
      if (!e.client_email) throw Error("The incoming JSON object does not contain a client_email field");
      if (!e.private_key) throw Error("The incoming JSON object does not contain a private_key field");
      this.email = e.client_email, this.key = e.private_key, this.keyId = e.private_key_id, 
      this.projectId = e.project_id, this.quotaProjectId = e.quota_project_id, this.universeDomain = e.universe_domain || this.universeDomain;
    }
    fromStream(e, t) {
      if (t) this.fromStreamAsync(e).then(() => t(), t); else return this.fromStreamAsync(e);
    }
    fromStreamAsync(e) {
      return new Promise((t, r) => {
        if (!e) throw Error("Must pass in a stream containing the service account auth settings.");
        let s = "";
        e.setEncoding("utf8").on("error", r).on("data", n => s += n).on("end", () => {
          try {
            let n = JSON.parse(s);
            this.fromJSON(n), t();
          } catch (n) {
            r(n);
          }
        });
      });
    }
    fromAPIKey(e) {
      if (typeof e !== "string") throw Error("Must provide an API Key string.");
      this.apiKey = e;
    }
    async getCredentials() {
      if (this.key) return {
        private_key: this.key,
        client_email: this.email
      }; else if (this.keyFile) {
        let e = this.createGToken(), t = await po.getCredentials(this.keyFile);
        return {
          private_key: t.privateKey,
          client_email: t.clientEmail
        };
      }
      throw Error("A key or a keyFile must be provided to getCredentials.");
    }
  }
  _o.JWT = Zr;
});

var ts = C(function(Ao) {
  Object.defineProperty(Ao, "__esModule", {
    value: !0
  });
  Ao.UserRefreshClient = Ao.USER_REFRESH_ACCOUNT_TYPE = void 0;
  var Eo = st(), wo = fe();
  Ao.USER_REFRESH_ACCOUNT_TYPE = "authorized_user";
  class Qt extends Eo.OAuth2Client {
    _refreshToken;
    constructor(e, t, r, s, n) {
      let a = e && typeof e === "object" ? e : {
        clientId: e,
        clientSecret: t,
        refreshToken: r,
        eagerRefreshThresholdMillis: s,
        forceRefreshOnFailure: n
      };
      super(a);
      this._refreshToken = a.refreshToken, this.credentials.refresh_token = a.refreshToken;
    }
    async refreshTokenNoCache() {
      return super.refreshTokenNoCache(this._refreshToken);
    }
    async fetchIdToken(e) {
      let t = {
        ...Qt.RETRY_CONFIG,
        url: this.endpoints.oauth2TokenUrl,
        method: "POST",
        data: new URLSearchParams({
          client_id: this._clientId,
          client_secret: this._clientSecret,
          grant_type: "refresh_token",
          refresh_token: this._refreshToken,
          target_audience: e
        }),
        responseType: "json"
      };
      return wo.AuthClient.setMethodName(t, "fetchIdToken"), (await this.transporter.request(t)).data.id_token;
    }
    fromJSON(e) {
      if (!e) throw Error("Must pass in a JSON object containing the user refresh token");
      if (e.type !== "authorized_user") throw Error('The incoming JSON object does not have the "authorized_user" type');
      if (!e.client_id) throw Error("The incoming JSON object does not contain a client_id field");
      if (!e.client_secret) throw Error("The incoming JSON object does not contain a client_secret field");
      if (!e.refresh_token) throw Error("The incoming JSON object does not contain a refresh_token field");
      this._clientId = e.client_id, this._clientSecret = e.client_secret, this._refreshToken = e.refresh_token, 
      this.credentials.refresh_token = e.refresh_token, this.quotaProjectId = e.quota_project_id, 
      this.universeDomain = e.universe_domain || this.universeDomain;
    }
    fromStream(e, t) {
      if (t) this.fromStreamAsync(e).then(() => t(), t); else return this.fromStreamAsync(e);
    }
    async fromStreamAsync(e) {
      return new Promise((t, r) => {
        if (!e) return r(Error("Must pass in a stream containing the user refresh token."));
        let s = "";
        e.setEncoding("utf8").on("error", r).on("data", n => s += n).on("end", () => {
          try {
            let n = JSON.parse(s);
            return this.fromJSON(n), t();
          } catch (n) {
            return r(n);
          }
        });
      });
    }
    static fromJSON(e) {
      let t = new Qt;
      return t.fromJSON(e), t;
    }
  }
  Ao.UserRefreshClient = Qt;
});

var rs = C(function(ko) {
  Object.defineProperty(ko, "__esModule", {
    value: !0
  });
  ko.Impersonated = ko.IMPERSONATED_ACCOUNT_TYPE = void 0;
  var Zt = st(), Co = re(), vo = Re();
  ko.IMPERSONATED_ACCOUNT_TYPE = "impersonated_service_account";
  class xt extends Zt.OAuth2Client {
    sourceClient;
    targetPrincipal;
    targetScopes;
    delegates;
    lifetime;
    endpoint;
    constructor(e = {}) {
      super(e);
      if (this.credentials = {
        expiry_date: 1,
        refresh_token: "impersonated-placeholder"
      }, this.sourceClient = e.sourceClient ?? new Zt.OAuth2Client, this.targetPrincipal = e.targetPrincipal ?? "", 
      this.delegates = e.delegates ?? [], this.targetScopes = e.targetScopes ?? [], this.lifetime = e.lifetime ?? 3600, 
      !vo.originalOrCamelOptions(e).get("universe_domain")) this.universeDomain = this.sourceClient.universeDomain; else if (this.sourceClient.universeDomain !== this.universeDomain) throw RangeError(`Universe domain ${this.sourceClient.universeDomain} in source credentials does not match ${this.universeDomain} universe domain set for impersonated credentials.`);
      this.endpoint = e.endpoint ?? `https://iamcredentials.${this.universeDomain}`;
    }
    async sign(e) {
      await this.sourceClient.getAccessToken();
      let t = `projects/-/serviceAccounts/${this.targetPrincipal}`, r = `${this.endpoint}/v1/${t}:signBlob`, s = {
        delegates: this.delegates,
        payload: Buffer.from(e).toString("base64")
      };
      return (await this.sourceClient.request({
        ...xt.RETRY_CONFIG,
        url: r,
        data: s,
        method: "POST"
      })).data;
    }
    getTargetPrincipal() {
      return this.targetPrincipal;
    }
    async refreshToken() {
      try {
        await this.sourceClient.getAccessToken();
        let e = "projects/-/serviceAccounts/" + this.targetPrincipal, t = `${this.endpoint}/v1/${e}:generateAccessToken`, r = {
          delegates: this.delegates,
          scope: this.targetScopes,
          lifetime: this.lifetime + "s"
        }, s = await this.sourceClient.request({
          ...xt.RETRY_CONFIG,
          url: t,
          data: r,
          method: "POST"
        }), n = s.data;
        return this.credentials.access_token = n.accessToken, this.credentials.expiry_date = Date.parse(n.expireTime), 
        {
          tokens: this.credentials,
          res: s
        };
      } catch (e) {
        if (!(e instanceof Error)) throw e;
        let t = 0, r = "";
        if (e instanceof Co.GaxiosError) t = e?.response?.data?.error?.status, r = e?.response?.data?.error?.message;
        if (t && r) throw e.message = `${t}: unable to impersonate: ${r}`, e; else throw e.message = `unable to impersonate: ${e}`, 
        e;
      }
    }
    async fetchIdToken(e, t) {
      await this.sourceClient.getAccessToken();
      let r = `projects/-/serviceAccounts/${this.targetPrincipal}`, s = `${this.endpoint}/v1/${r}:generateIdToken`, n = {
        delegates: this.delegates,
        audience: e,
        includeEmail: t?.includeEmail ?? !0,
        useEmailAzp: t?.includeEmail ?? !0
      };
      return (await this.sourceClient.request({
        ...xt.RETRY_CONFIG,
        url: s,
        data: n,
        method: "POST"
      })).data.token;
    }
  }
  ko.Impersonated = xt;
});

var ss = C(function(xo) {
  Object.defineProperty(xo, "__esModule", {
    value: !0
  });
  xo.OAuthClientAuthHandler = void 0;
  xo.getErrorFromOAuthErrorResponse = xl;
  var Ce = re(), Oo = St(), Rl = [ "PUT", "POST", "PATCH" ];
  class Ro {
    #e=Oo.createCrypto();
    #t;
    transporter;
    constructor(e) {
      if (e && "clientId" in e) this.#t = e, this.transporter = new Ce.Gaxios; else this.#t = e?.clientAuthentication, 
      this.transporter = e?.transporter || new Ce.Gaxios;
    }
    applyClientAuthenticationOptions(e, t) {
      if (e.headers = Ce.Gaxios.mergeHeaders(e.headers), this.injectAuthenticatedHeaders(e, t), 
      !t) this.injectAuthenticatedRequestBody(e);
    }
    injectAuthenticatedHeaders(e, t) {
      if (t) e.headers = Ce.Gaxios.mergeHeaders(e.headers, {
        authorization: `Bearer ${t}`
      }); else if (this.#t?.confidentialClientType === "basic") {
        e.headers = Ce.Gaxios.mergeHeaders(e.headers);
        let r = this.#t.clientId, s = this.#t.clientSecret || "", n = this.#e.encodeBase64StringUtf8(`${r}:${s}`);
        Ce.Gaxios.mergeHeaders(e.headers, {
          authorization: `Basic ${n}`
        });
      }
    }
    injectAuthenticatedRequestBody(e) {
      if (this.#t?.confidentialClientType === "request-body") {
        let t = (e.method || "GET").toUpperCase();
        if (!Rl.includes(t)) throw Error(`${t} HTTP method does not support ${this.#t.confidentialClientType} client authentication`);
        let s = new Headers(e.headers).get("content-type");
        if (s?.startsWith("application/x-www-form-urlencoded") || e.data instanceof URLSearchParams) {
          let n = new URLSearchParams(e.data ?? "");
          n.append("client_id", this.#t.clientId), n.append("client_secret", this.#t.clientSecret || ""), 
          e.data = n;
        } else if (s?.startsWith("application/json")) e.data = e.data || {}, Object.assign(e.data, {
          client_id: this.#t.clientId,
          client_secret: this.#t.clientSecret || ""
        }); else throw Error(`${s} content-types are not supported with ${this.#t.confidentialClientType} client authentication`);
      }
    }
    static get RETRY_CONFIG() {
      return {
        retry: !0,
        retryConfig: {
          httpMethodsToRetry: [ "GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE" ]
        }
      };
    }
  }
  xo.OAuthClientAuthHandler = Ro;
  function xl(e, t) {
    let {error: r, error_description: s, error_uri: n} = e, a = `Error code ${r}`;
    if (typeof s < "u") a += `: ${s}`;
    if (typeof n < "u") a += ` - ${n}`;
    let h = Error(a);
    if (t) {
      let g = Object.keys(t);
      if (t.stack) g.push("stack");
      g.forEach(E => {
        if (E !== "message") Object.defineProperty(h, E, {
          value: t[E],
          writable: !1,
          enumerable: !0
        });
      });
    }
    return h;
  }
});

var tr = C(function(Uo) {
  Object.defineProperty(Uo, "__esModule", {
    value: !0
  });
  Uo.StsCredentials = void 0;
  var No = re(), Po = fe(), er = ss(), Io = Re();
  class ns extends er.OAuthClientAuthHandler {
    #e;
    constructor(e = {
      tokenExchangeEndpoint: ""
    }, t) {
      if (typeof e !== "object" || e instanceof URL) e = {
        tokenExchangeEndpoint: e,
        clientAuthentication: t
      };
      super(e);
      this.#e = e.tokenExchangeEndpoint;
    }
    async exchangeToken(e, t, r) {
      let s = {
        grant_type: e.grantType,
        resource: e.resource,
        audience: e.audience,
        scope: e.scope?.join(" "),
        requested_token_type: e.requestedTokenType,
        subject_token: e.subjectToken,
        subject_token_type: e.subjectTokenType,
        actor_token: e.actingParty?.actorToken,
        actor_token_type: e.actingParty?.actorTokenType,
        options: r && JSON.stringify(r)
      }, n = {
        ...ns.RETRY_CONFIG,
        url: this.#e.toString(),
        method: "POST",
        headers: t,
        data: new URLSearchParams(Io.removeUndefinedValuesInObject(s)),
        responseType: "json"
      };
      Po.AuthClient.setMethodName(n, "exchangeToken"), this.applyClientAuthenticationOptions(n);
      try {
        let a = await this.transporter.request(n), h = a.data;
        return h.res = a, h;
      } catch (a) {
        if (a instanceof No.GaxiosError && a.response) throw er.getErrorFromOAuthErrorResponse(a.response.data, a);
        throw a;
      }
    }
  }
  Uo.StsCredentials = ns;
});

var We = C(function(Lo) {
  Object.defineProperty(Lo, "__esModule", {
    value: !0
  });
  Lo.BaseExternalAccountClient = Lo.CLOUD_RESOURCE_MANAGER = Lo.EXTERNAL_ACCOUNT_TYPE = Lo.EXPIRATION_TIME_OFFSET = void 0;
  var Do = re(), qo = Ne("stream"), dt = fe(), Fo = tr(), rr = Re(), Mo = Hr(), Nl = "urn:ietf:params:oauth:grant-type:token-exchange", Pl = "urn:ietf:params:oauth:token-type:access_token", is = "https://www.googleapis.com/auth/cloud-platform", Il = 3600;
  Lo.EXPIRATION_TIME_OFFSET = 3e5;
  Lo.EXTERNAL_ACCOUNT_TYPE = "external_account";
  Lo.CLOUD_RESOURCE_MANAGER = "https://cloudresourcemanager.googleapis.com/v1/projects/";
  var Ul = "//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+", jl = "https://sts.{universeDomain}/v1/token";
  class sr extends dt.AuthClient {
    scopes;
    projectNumber;
    audience;
    subjectTokenType;
    stsCredential;
    clientAuth;
    credentialSourceType;
    cachedAccessToken;
    serviceAccountImpersonationUrl;
    serviceAccountImpersonationLifetime;
    workforcePoolUserProject;
    configLifetimeRequested;
    tokenUrl;
    cloudResourceManagerURL;
    supplierContext;
    #e=null;
    constructor(e) {
      super(e);
      let t = rr.originalOrCamelOptions(e), r = t.get("type");
      if (r && r !== Lo.EXTERNAL_ACCOUNT_TYPE) throw Error(`Expected "${Lo.EXTERNAL_ACCOUNT_TYPE}" type but received "${e.type}"`);
      let s = t.get("client_id"), n = t.get("client_secret");
      this.tokenUrl = t.get("token_url") ?? jl.replace("{universeDomain}", this.universeDomain);
      let a = t.get("subject_token_type"), h = t.get("workforce_pool_user_project"), g = t.get("service_account_impersonation_url"), E = t.get("service_account_impersonation"), S = rr.originalOrCamelOptions(E).get("token_lifetime_seconds");
      if (this.cloudResourceManagerURL = new URL(t.get("cloud_resource_manager_url") || `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`), 
      s) this.clientAuth = {
        confidentialClientType: "basic",
        clientId: s,
        clientSecret: n
      };
      this.stsCredential = new Fo.StsCredentials({
        tokenExchangeEndpoint: this.tokenUrl,
        clientAuthentication: this.clientAuth
      }), this.scopes = t.get("scopes") || [ is ], this.cachedAccessToken = null, this.audience = t.get("audience"), 
      this.subjectTokenType = a, this.workforcePoolUserProject = h;
      let T = new RegExp(Ul);
      if (this.workforcePoolUserProject && !this.audience.match(T)) throw Error("workforcePoolUserProject should not be set for non-workforce pool credentials.");
      if (this.serviceAccountImpersonationUrl = g, this.serviceAccountImpersonationLifetime = S, 
      this.serviceAccountImpersonationLifetime) this.configLifetimeRequested = !0; else this.configLifetimeRequested = !1, 
      this.serviceAccountImpersonationLifetime = Il;
      this.projectNumber = this.getProjectNumber(this.audience), this.supplierContext = {
        audience: this.audience,
        subjectTokenType: this.subjectTokenType,
        transporter: this.transporter
      };
    }
    getServiceAccountEmail() {
      if (this.serviceAccountImpersonationUrl) {
        if (this.serviceAccountImpersonationUrl.length > 256) throw RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
        return /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/.exec(this.serviceAccountImpersonationUrl)?.groups?.email || null;
      }
      return null;
    }
    setCredentials(e) {
      super.setCredentials(e), this.cachedAccessToken = e;
    }
    async getAccessToken() {
      if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) await this.refreshAccessTokenAsync();
      return {
        token: this.cachedAccessToken.access_token,
        res: this.cachedAccessToken.res
      };
    }
    async getRequestHeaders() {
      let e = await this.getAccessToken(), t = new Headers({
        authorization: `Bearer ${e.token}`
      });
      return this.addSharedMetadataHeaders(t);
    }
    request(e, t) {
      if (t) this.requestAsync(e).then(r => t(null, r), r => t(r, r.response)); else return this.requestAsync(e);
    }
    async getProjectId() {
      let e = this.projectNumber || this.workforcePoolUserProject;
      if (this.projectId) return this.projectId; else if (e) {
        let t = await this.getRequestHeaders(), r = {
          ...sr.RETRY_CONFIG,
          headers: t,
          url: `${this.cloudResourceManagerURL.toString()}${e}`,
          responseType: "json"
        };
        dt.AuthClient.setMethodName(r, "getProjectId");
        let s = await this.transporter.request(r);
        return this.projectId = s.data.projectId, this.projectId;
      }
      return null;
    }
    async requestAsync(e, t = !1) {
      let r;
      try {
        let s = await this.getRequestHeaders();
        e.headers = Do.Gaxios.mergeHeaders(e.headers), this.addUserProjectAndAuthHeaders(e.headers, s), 
        r = await this.transporter.request(e);
      } catch (s) {
        let n = s.response;
        if (n) {
          let a = n.status, h = n.config.data instanceof qo.Readable;
          if (!t && (a === 401 || a === 403) && !h && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), 
          await this.requestAsync(e, !0);
        }
        throw s;
      }
      return r;
    }
    async refreshAccessTokenAsync() {
      this.#e = this.#e || this.#t();
      try {
        return await this.#e;
      } finally {
        this.#e = null;
      }
    }
    async #t() {
      let e = await this.retrieveSubjectToken(), t = {
        grantType: Nl,
        audience: this.audience,
        requestedTokenType: Pl,
        subjectToken: e,
        subjectTokenType: this.subjectTokenType,
        scope: this.serviceAccountImpersonationUrl ? [ is ] : this.getScopesArray()
      }, r = !this.clientAuth && this.workforcePoolUserProject ? {
        userProject: this.workforcePoolUserProject
      } : void 0, s = new Headers({
        "x-goog-api-client": this.getMetricsHeaderValue()
      }), n = await this.stsCredential.exchangeToken(t, s, r);
      if (this.serviceAccountImpersonationUrl) this.cachedAccessToken = await this.getImpersonatedAccessToken(n.access_token); else if (n.expires_in) this.cachedAccessToken = {
        access_token: n.access_token,
        expiry_date: (new Date).getTime() + n.expires_in * 1e3,
        res: n.res
      }; else this.cachedAccessToken = {
        access_token: n.access_token,
        res: n.res
      };
      return this.credentials = {}, Object.assign(this.credentials, this.cachedAccessToken), 
      delete this.credentials.res, this.emit("tokens", {
        refresh_token: null,
        expiry_date: this.cachedAccessToken.expiry_date,
        access_token: this.cachedAccessToken.access_token,
        token_type: "Bearer",
        id_token: null
      }), this.cachedAccessToken;
    }
    getProjectNumber(e) {
      let t = e.match(/\/projects\/([^/]+)/);
      if (!t) return null;
      return t[1];
    }
    async getImpersonatedAccessToken(e) {
      let t = {
        ...sr.RETRY_CONFIG,
        url: this.serviceAccountImpersonationUrl,
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${e}`
        },
        data: {
          scope: this.getScopesArray(),
          lifetime: this.serviceAccountImpersonationLifetime + "s"
        },
        responseType: "json"
      };
      dt.AuthClient.setMethodName(t, "getImpersonatedAccessToken");
      let r = await this.transporter.request(t), s = r.data;
      return {
        access_token: s.accessToken,
        expiry_date: new Date(s.expireTime).getTime(),
        res: r
      };
    }
    isExpired(e) {
      let t = (new Date).getTime();
      return e.expiry_date ? t >= e.expiry_date - this.eagerRefreshThresholdMillis : !1;
    }
    getScopesArray() {
      if (typeof this.scopes === "string") return [ this.scopes ];
      return this.scopes || [ is ];
    }
    getMetricsHeaderValue() {
      let e = process.version.replace(/^v/, ""), t = this.serviceAccountImpersonationUrl !== void 0, r = this.credentialSourceType ? this.credentialSourceType : "unknown";
      return `gl-node/${e} auth/${Mo.pkg.version} google-byoid-sdk source/${r} sa-impersonation/${t} config-lifetime/${this.configLifetimeRequested}`;
    }
    getTokenUrl() {
      return this.tokenUrl;
    }
  }
  Lo.BaseExternalAccountClient = sr;
});

var Jo = C(function(Ho) {
  Object.defineProperty(Ho, "__esModule", {
    value: !0
  });
  Ho.FileSubjectTokenSupplier = void 0;
  var ht = Ne("util"), ft = Ne("fs"), Fl = ht.promisify(ft.readFile ?? (() => {})), Ml = ht.promisify(ft.realpath ?? (() => {})), Ll = ht.promisify(ft.lstat ?? (() => {}));
  class Bo {
    filePath;
    formatType;
    subjectTokenFieldName;
    constructor(e) {
      this.filePath = e.filePath, this.formatType = e.formatType, this.subjectTokenFieldName = e.subjectTokenFieldName;
    }
    async getSubjectToken() {
      let e = this.filePath;
      try {
        if (e = await Ml(e), !(await Ll(e)).isFile()) throw Error();
      } catch (s) {
        if (s instanceof Error) s.message = `The file at ${e} does not exist, or it is not a file. ${s.message}`;
        throw s;
      }
      let t, r = await Fl(e, {
        encoding: "utf8"
      });
      if (this.formatType === "text") t = r; else if (this.formatType === "json" && this.subjectTokenFieldName) t = JSON.parse(r)[this.subjectTokenFieldName];
      if (!t) throw Error("Unable to parse the subject_token from the credential_source file");
      return t;
    }
  }
  Ho.FileSubjectTokenSupplier = Bo;
});

var Xo = C(function(Vo) {
  Object.defineProperty(Vo, "__esModule", {
    value: !0
  });
  Vo.UrlSubjectTokenSupplier = void 0;
  var Ko = fe();
  class Wo {
    url;
    headers;
    formatType;
    subjectTokenFieldName;
    additionalGaxiosOptions;
    constructor(e) {
      this.url = e.url, this.formatType = e.formatType, this.subjectTokenFieldName = e.subjectTokenFieldName, 
      this.headers = e.headers, this.additionalGaxiosOptions = e.additionalGaxiosOptions;
    }
    async getSubjectToken(e) {
      let t = {
        ...this.additionalGaxiosOptions,
        url: this.url,
        method: "GET",
        headers: this.headers,
        responseType: this.formatType
      };
      Ko.AuthClient.setMethodName(t, "getSubjectToken");
      let r;
      if (this.formatType === "text") r = (await e.transporter.request(t)).data; else if (this.formatType === "json" && this.subjectTokenFieldName) r = (await e.transporter.request(t)).data[this.subjectTokenFieldName];
      if (!r) throw Error("Unable to parse the subject_token from the credential_source URL");
      return r;
    }
  }
  Vo.UrlSubjectTokenSupplier = Wo;
});

var ta = C(function(Zo) {
  Object.defineProperty(Zo, "__esModule", {
    value: !0
  });
  Zo.CertificateSubjectTokenSupplier = Zo.InvalidConfigurationError = Zo.CertificateSourceUnavailableError = Zo.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = void 0;
  var Ve = Re(), Ye = Ne("fs"), Xe = Ne("crypto"), zo = Ne("https");
  Zo.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = "GOOGLE_API_CERTIFICATE_CONFIG";
  class Le extends Error {
    constructor(e) {
      super(e);
      this.name = "CertificateSourceUnavailableError";
    }
  }
  Zo.CertificateSourceUnavailableError = Le;
  class xe extends Error {
    constructor(e) {
      super(e);
      this.name = "InvalidConfigurationError";
    }
  }
  Zo.InvalidConfigurationError = xe;
  class Qo {
    certificateConfigPath;
    trustChainPath;
    cert;
    key;
    constructor(e) {
      if (!e.useDefaultCertificateConfig && !e.certificateConfigLocation) throw new xe("Either `useDefaultCertificateConfig` must be true or a `certificateConfigLocation` must be provided.");
      if (e.useDefaultCertificateConfig && e.certificateConfigLocation) throw new xe("Both `useDefaultCertificateConfig` and `certificateConfigLocation` cannot be provided.");
      this.trustChainPath = e.trustChainPath, this.certificateConfigPath = e.certificateConfigLocation ?? "";
    }
    async createMtlsHttpsAgent() {
      if (!this.key || !this.cert) throw new xe("Cannot create mTLS Agent with missing certificate or key");
      return new zo.Agent({
        key: this.key,
        cert: this.cert
      });
    }
    async getSubjectToken() {
      this.certificateConfigPath = await this.#e();
      let {certPath: e, keyPath: t} = await this.#t();
      return ({cert: this.cert, key: this.key} = await this.#r(e, t)), await this.#s(this.cert);
    }
    async #e() {
      let e = this.certificateConfigPath;
      if (e) {
        if (await Ve.isValidFile(e)) return e;
        throw new Le(`Provided certificate config path is invalid: ${e}`);
      }
      let t = process.env[Zo.CERTIFICATE_CONFIGURATION_ENV_VARIABLE];
      if (t) {
        if (await Ve.isValidFile(t)) return t;
        throw new Le(`Path from environment variable "${Zo.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" is invalid: ${t}`);
      }
      let r = Ve.getWellKnownCertificateConfigFileLocation();
      if (await Ve.isValidFile(r)) return r;
      throw new Le(`Could not find certificate configuration file. Searched override path, the "${Zo.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" env var, and the gcloud path (${r}).`);
    }
    async #t() {
      let e = this.certificateConfigPath, t;
      try {
        t = await Ye.promises.readFile(e, "utf8");
      } catch (r) {
        throw new Le(`Failed to read certificate config file at: ${e}`);
      }
      try {
        let r = JSON.parse(t), s = r?.cert_configs?.workload?.cert_path, n = r?.cert_configs?.workload?.key_path;
        if (!s || !n) throw new xe(`Certificate config file (${e}) is missing required "cert_path" or "key_path" in the workload config.`);
        return {
          certPath: s,
          keyPath: n
        };
      } catch (r) {
        if (r instanceof xe) throw r;
        throw new xe(`Failed to parse certificate config from ${e}: ${r.message}`);
      }
    }
    async #r(e, t) {
      let r, s;
      try {
        r = await Ye.promises.readFile(e), new Xe.X509Certificate(r);
      } catch (n) {
        let a = n instanceof Error ? n.message : String(n);
        throw new Le(`Failed to read certificate file at ${e}: ${a}`);
      }
      try {
        s = await Ye.promises.readFile(t), Xe.createPrivateKey(s);
      } catch (n) {
        let a = n instanceof Error ? n.message : String(n);
        throw new Le(`Failed to read private key file at ${t}: ${a}`);
      }
      return {
        cert: r,
        key: s
      };
    }
    async #s(e) {
      let t = new Xe.X509Certificate(e);
      if (!this.trustChainPath) return JSON.stringify([ t.raw.toString("base64") ]);
      try {
        let n = ((await Ye.promises.readFile(this.trustChainPath, "utf8")).match(/-----BEGIN CERTIFICATE-----[^-]+-----END CERTIFICATE-----/g) ?? []).map((g, E) => {
          try {
            return new Xe.X509Certificate(g);
          } catch (S) {
            let T = S instanceof Error ? S.message : String(S);
            throw new xe(`Failed to parse certificate at index ${E} in trust chain file ${this.trustChainPath}: ${T}`);
          }
        }), a = n.findIndex(g => t.raw.equals(g.raw)), h;
        if (a === -1) h = [ t, ...n ]; else if (a === 0) h = n; else throw new xe(`Leaf certificate exists in the trust chain but is not the first entry (found at index ${a}).`);
        return JSON.stringify(h.map(g => g.raw.toString("base64")));
      } catch (r) {
        if (r instanceof xe) throw r;
        let s = r instanceof Error ? r.message : String(r);
        throw new Le(`Failed to process certificate chain from ${this.trustChainPath}: ${s}`);
      }
    }
  }
  Zo.CertificateSubjectTokenSupplier = Qo;
});

var cs = C(function(oa) {
  Object.defineProperty(oa, "__esModule", {
    value: !0
  });
  oa.IdentityPoolClient = void 0;
  var ra = We(), pt = Re(), sa = Jo(), na = Xo(), ir = ta(), ia = tr(), or = re();
  class as extends ra.BaseExternalAccountClient {
    subjectTokenSupplier;
    constructor(e) {
      super(e);
      let t = pt.originalOrCamelOptions(e), r = t.get("credential_source"), s = t.get("subject_token_supplier");
      if (!r && !s) throw Error("A credential source or subject token supplier must be specified.");
      if (r && s) throw Error("Only one of credential source or subject token supplier can be specified.");
      if (s) this.subjectTokenSupplier = s, this.credentialSourceType = "programmatic"; else {
        let n = pt.originalOrCamelOptions(r), a = pt.originalOrCamelOptions(n.get("format")), h = a.get("type") || "text", g = a.get("subject_token_field_name");
        if (h !== "json" && h !== "text") throw Error(`Invalid credential_source format "${h}"`);
        if (h === "json" && !g) throw Error("Missing subject_token_field_name for JSON credential_source format");
        let E = n.get("file"), S = n.get("url"), T = n.get("certificate"), j = n.get("headers");
        if (E && S || S && T || E && T) throw Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.'); else if (E) this.credentialSourceType = "file", 
        this.subjectTokenSupplier = new sa.FileSubjectTokenSupplier({
          filePath: E,
          formatType: h,
          subjectTokenFieldName: g
        }); else if (S) this.credentialSourceType = "url", this.subjectTokenSupplier = new na.UrlSubjectTokenSupplier({
          url: S,
          formatType: h,
          subjectTokenFieldName: g,
          headers: j,
          additionalGaxiosOptions: as.RETRY_CONFIG
        }); else if (T) {
          this.credentialSourceType = "certificate";
          let I = new ir.CertificateSubjectTokenSupplier({
            useDefaultCertificateConfig: T.use_default_certificate_config,
            certificateConfigLocation: T.certificate_config_location,
            trustChainPath: T.trust_chain_path
          });
          this.subjectTokenSupplier = I;
        } else throw Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
      }
    }
    async retrieveSubjectToken() {
      let e = await this.subjectTokenSupplier.getSubjectToken(this.supplierContext);
      if (this.subjectTokenSupplier instanceof ir.CertificateSubjectTokenSupplier) {
        let t = await this.subjectTokenSupplier.createMtlsHttpsAgent();
        this.stsCredential = new ia.StsCredentials({
          tokenExchangeEndpoint: this.getTokenUrl(),
          clientAuthentication: this.clientAuth,
          transporter: new or.Gaxios({
            ...this.transporter.defaults || {},
            agent: t
          })
        }), this.transporter = new or.Gaxios({
          ...this.transporter.defaults || {},
          agent: t
        });
      }
      return e;
    }
  }
  oa.IdentityPoolClient = as;
});

var us = C(function(la) {
  Object.defineProperty(la, "__esModule", {
    value: !0
  });
  la.AwsRequestSigner = void 0;
  var ze = re(), ar = St(), ca = "AWS4-HMAC-SHA256", Hl = "aws4_request";
  class ua {
    getCredentials;
    region;
    crypto;
    constructor(e, t) {
      this.getCredentials = e, this.region = t, this.crypto = ar.createCrypto();
    }
    async getRequestOptions(e) {
      if (!e.url) throw RangeError('"url" is required in "amzOptions"');
      let t = typeof e.data === "object" ? JSON.stringify(e.data) : e.data, r = e.url, s = e.method || "GET", n = e.body || t, a = e.headers, h = await this.getCredentials(), g = new URL(r);
      if (typeof n !== "string" && n !== void 0) throw TypeError(`'requestPayload' is expected to be a string if provided. Got: ${n}`);
      let E = await Jl({
        crypto: this.crypto,
        host: g.host,
        canonicalUri: g.pathname,
        canonicalQuerystring: g.search.slice(1),
        method: s,
        region: this.region,
        securityCredentials: h,
        requestPayload: n,
        additionalAmzHeaders: a
      }), S = ze.Gaxios.mergeHeaders(E.amzDate ? {
        "x-amz-date": E.amzDate
      } : {}, {
        authorization: E.authorizationHeader,
        host: g.host
      }, a || {});
      if (h.token) ze.Gaxios.mergeHeaders(S, {
        "x-amz-security-token": h.token
      });
      let T = {
        url: r,
        method: s,
        headers: S
      };
      if (n !== void 0) T.body = n;
      return T;
    }
  }
  la.AwsRequestSigner = ua;
  async function bt(e, t, r) {
    return await e.signWithHmacSha256(t, r);
  }
  async function $l(e, t, r, s, n) {
    let a = await bt(e, `AWS4${t}`, r), h = await bt(e, a, s), g = await bt(e, h, n);
    return await bt(e, g, "aws4_request");
  }
  async function Jl(e) {
    let t = ze.Gaxios.mergeHeaders(e.additionalAmzHeaders), r = e.requestPayload || "", s = e.host.split(".")[0], n = new Date, a = n.toISOString().replace(/[-:]/g, "").replace(/\.[0-9]+/, ""), h = n.toISOString().replace(/[-]/g, "").replace(/T.*/, "");
    if (e.securityCredentials.token) t.set("x-amz-security-token", e.securityCredentials.token);
    let g = ze.Gaxios.mergeHeaders({
      host: e.host
    }, t.has("date") ? {} : {
      "x-amz-date": a
    }, t), E = "", S = [ ...g.keys() ].sort();
    S.forEach(G => {
      E += `${G}:${g.get(G)}\n`;
    });
    let T = S.join(";"), j = await e.crypto.sha256DigestHex(r), I = `${e.method.toUpperCase()}\n${e.canonicalUri}\n${e.canonicalQuerystring}\n${E}\n${T}\n${j}`, Y = `${h}/${e.region}/${s}/${Hl}`, K = `${ca}\n${a}\n${Y}\n` + await e.crypto.sha256DigestHex(I), R = await $l(e.crypto, e.securityCredentials.secretAccessKey, h, e.region, s), P = await bt(e.crypto, R, K), O = `${ca} Credential=${e.securityCredentials.accessKeyId}/${Y}, SignedHeaders=${T}, Signature=${ar.fromArrayBufferToHex(P)}`;
    return {
      amzDate: t.has("date") ? void 0 : a,
      authorizationHeader: O,
      canonicalQuerystring: e.canonicalQuerystring
    };
  }
});

var ga = C(function(fa) {
  Object.defineProperty(fa, "__esModule", {
    value: !0
  });
  fa.DefaultAwsSecurityCredentialsSupplier = void 0;
  var Qe = fe();
  class ha {
    regionUrl;
    securityCredentialsUrl;
    imdsV2SessionTokenUrl;
    additionalGaxiosOptions;
    constructor(e) {
      this.regionUrl = e.regionUrl, this.securityCredentialsUrl = e.securityCredentialsUrl, 
      this.imdsV2SessionTokenUrl = e.imdsV2SessionTokenUrl, this.additionalGaxiosOptions = e.additionalGaxiosOptions;
    }
    async getAwsRegion(e) {
      if (this.#s) return this.#s;
      let t = new Headers;
      if (!this.#s && this.imdsV2SessionTokenUrl) t.set("x-aws-ec2-metadata-token", await this.#e(e.transporter));
      if (!this.regionUrl) throw RangeError('Unable to determine AWS region due to missing "options.credential_source.region_url"');
      let r = {
        ...this.additionalGaxiosOptions,
        url: this.regionUrl,
        method: "GET",
        responseType: "text",
        headers: t
      };
      Qe.AuthClient.setMethodName(r, "getAwsRegion");
      let s = await e.transporter.request(r);
      return s.data.substr(0, s.data.length - 1);
    }
    async getAwsSecurityCredentials(e) {
      if (this.#n) return this.#n;
      let t = new Headers;
      if (this.imdsV2SessionTokenUrl) t.set("x-aws-ec2-metadata-token", await this.#e(e.transporter));
      let r = await this.#t(t, e.transporter), s = await this.#r(r, t, e.transporter);
      return {
        accessKeyId: s.AccessKeyId,
        secretAccessKey: s.SecretAccessKey,
        token: s.Token
      };
    }
    async #e(e) {
      let t = {
        ...this.additionalGaxiosOptions,
        url: this.imdsV2SessionTokenUrl,
        method: "PUT",
        responseType: "text",
        headers: {
          "x-aws-ec2-metadata-token-ttl-seconds": "300"
        }
      };
      return Qe.AuthClient.setMethodName(t, "#getImdsV2SessionToken"), (await e.request(t)).data;
    }
    async #t(e, t) {
      if (!this.securityCredentialsUrl) throw Error('Unable to determine AWS role name due to missing "options.credential_source.url"');
      let r = {
        ...this.additionalGaxiosOptions,
        url: this.securityCredentialsUrl,
        method: "GET",
        responseType: "text",
        headers: e
      };
      return Qe.AuthClient.setMethodName(r, "#getAwsRoleName"), (await t.request(r)).data;
    }
    async #r(e, t, r) {
      let s = {
        ...this.additionalGaxiosOptions,
        url: `${this.securityCredentialsUrl}/${e}`,
        headers: t,
        responseType: "json"
      };
      return Qe.AuthClient.setMethodName(s, "#retrieveAwsSecurityCredentials"), (await r.request(s)).data;
    }
    get #s() {
      return process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || null;
    }
    get #n() {
      if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) return {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        token: process.env.AWS_SESSION_TOKEN
      };
      return null;
    }
  }
  fa.DefaultAwsSecurityCredentialsSupplier = ha;
});

var ls = C(function(wa) {
  Object.defineProperty(wa, "__esModule", {
    value: !0
  });
  wa.AwsClient = void 0;
  var ya = us(), _a = We(), ma = ga(), cr = Re(), Ea = re();
  class ur extends _a.BaseExternalAccountClient {
    environmentId;
    awsSecurityCredentialsSupplier;
    regionalCredVerificationUrl;
    awsRequestSigner;
    region;
    static #e="https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15";
    static AWS_EC2_METADATA_IPV4_ADDRESS="169.254.169.254";
    static AWS_EC2_METADATA_IPV6_ADDRESS="fd00:ec2::254";
    constructor(e) {
      super(e);
      let t = cr.originalOrCamelOptions(e), r = t.get("credential_source"), s = t.get("aws_security_credentials_supplier");
      if (!r && !s) throw Error("A credential source or AWS security credentials supplier must be specified.");
      if (r && s) throw Error("Only one of credential source or AWS security credentials supplier can be specified.");
      if (s) this.awsSecurityCredentialsSupplier = s, this.regionalCredVerificationUrl = ur.#e, 
      this.credentialSourceType = "programmatic"; else {
        let n = cr.originalOrCamelOptions(r);
        this.environmentId = n.get("environment_id");
        let a = n.get("region_url"), h = n.get("url"), g = n.get("imdsv2_session_token_url");
        this.awsSecurityCredentialsSupplier = new ma.DefaultAwsSecurityCredentialsSupplier({
          regionUrl: a,
          securityCredentialsUrl: h,
          imdsV2SessionTokenUrl: g
        }), this.regionalCredVerificationUrl = n.get("regional_cred_verification_url"), 
        this.credentialSourceType = "aws", this.validateEnvironmentId();
      }
      this.awsRequestSigner = null, this.region = "";
    }
    validateEnvironmentId() {
      let e = this.environmentId?.match(/^(aws)(\d+)$/);
      if (!e || !this.regionalCredVerificationUrl) throw Error('No valid AWS "credential_source" provided'); else if (parseInt(e[2], 10) !== 1) throw Error(`aws version "${e[2]}" is not supported in the current build.`);
    }
    async retrieveSubjectToken() {
      if (!this.awsRequestSigner) this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext), 
      this.awsRequestSigner = new ya.AwsRequestSigner(async () => this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(this.supplierContext), this.region);
      let e = await this.awsRequestSigner.getRequestOptions({
        ...ur.RETRY_CONFIG,
        url: this.regionalCredVerificationUrl.replace("{region}", this.region),
        method: "POST"
      }), t = [];
      return Ea.Gaxios.mergeHeaders({
        "x-goog-cloud-target-resource": this.audience
      }, e.headers).forEach((s, n) => t.push({
        key: n,
        value: s
      })), encodeURIComponent(JSON.stringify({
        url: e.url,
        method: e.method,
        headers: t
      }));
    }
  }
  wa.AwsClient = ur;
});

var ms = C(function(va) {
  Object.defineProperty(va, "__esModule", {
    value: !0
  });
  va.InvalidSubjectTokenError = va.InvalidMessageFieldError = va.InvalidCodeFieldError = va.InvalidTokenTypeFieldError = va.InvalidExpirationTimeFieldError = va.InvalidSuccessFieldError = va.InvalidVersionFieldError = va.ExecutableResponseError = va.ExecutableResponse = void 0;
  var lr = "urn:ietf:params:oauth:token-type:saml2", ds = "urn:ietf:params:oauth:token-type:id_token", hs = "urn:ietf:params:oauth:token-type:jwt";
  class Ta {
    version;
    success;
    expirationTime;
    tokenType;
    errorCode;
    errorMessage;
    subjectToken;
    constructor(e) {
      if (!e.version) throw new fs("Executable response must contain a 'version' field.");
      if (e.success === void 0) throw new ps("Executable response must contain a 'success' field.");
      if (this.version = e.version, this.success = e.success, this.success) {
        if (this.expirationTime = e.expiration_time, this.tokenType = e.token_type, this.tokenType !== lr && this.tokenType !== ds && this.tokenType !== hs) throw new gs(`Executable response must contain a 'token_type' field when successful and it must be one of ${ds}, ${hs}, or ${lr}.`);
        if (this.tokenType === lr) {
          if (!e.saml_response) throw new dr(`Executable response must contain a 'saml_response' field when token_type=${lr}.`);
          this.subjectToken = e.saml_response;
        } else {
          if (!e.id_token) throw new dr(`Executable response must contain a 'id_token' field when token_type=${ds} or ${hs}.`);
          this.subjectToken = e.id_token;
        }
      } else {
        if (!e.code) throw new ys("Executable response must contain a 'code' field when unsuccessful.");
        if (!e.message) throw new _s("Executable response must contain a 'message' field when unsuccessful.");
        this.errorCode = e.code, this.errorMessage = e.message;
      }
    }
    isValid() {
      return !this.isExpired() && this.success;
    }
    isExpired() {
      return this.expirationTime !== void 0 && this.expirationTime < Math.round(Date.now() / 1e3);
    }
  }
  va.ExecutableResponse = Ta;
  class Ge extends Error {
    constructor(e) {
      super(e);
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  va.ExecutableResponseError = Ge;
  class fs extends Ge {}
  va.InvalidVersionFieldError = fs;
  class ps extends Ge {}
  va.InvalidSuccessFieldError = ps;
  class Ca extends Ge {}
  va.InvalidExpirationTimeFieldError = Ca;
  class gs extends Ge {}
  va.InvalidTokenTypeFieldError = gs;
  class ys extends Ge {}
  va.InvalidCodeFieldError = ys;
  class _s extends Ge {}
  va.InvalidMessageFieldError = _s;
  class dr extends Ge {}
  va.InvalidSubjectTokenError = dr;
});

var As = C(function(Oa) {
  Object.defineProperty(Oa, "__esModule", {
    value: !0
  });
  Oa.PluggableAuthHandler = Oa.ExecutableError = void 0;
  var le = ms(), Sa = Ne("child_process"), gt = Ne("fs");
  class Es extends Error {
    code;
    constructor(e, t) {
      super(`The executable failed with exit code: ${t} and error message: ${e}.`);
      this.code = t, Object.setPrototypeOf(this, new.target.prototype);
    }
  }
  Oa.ExecutableError = Es;
  class ws {
    commandComponents;
    timeoutMillis;
    outputFile;
    constructor(e) {
      if (!e.command) throw Error("No command provided.");
      if (this.commandComponents = ws.parseCommand(e.command), this.timeoutMillis = e.timeoutMillis, 
      !this.timeoutMillis) throw Error("No timeoutMillis provided.");
      this.outputFile = e.outputFile;
    }
    retrieveResponseFromExecutable(e) {
      return new Promise((t, r) => {
        let s = Sa.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
          env: {
            ...process.env,
            ...Object.fromEntries(e)
          }
        }), n = "";
        s.stdout.on("data", h => {
          n += h;
        }), s.stderr.on("data", h => {
          n += h;
        });
        let a = setTimeout(() => (s.removeAllListeners(), s.kill(), r(Error("The executable failed to finish within the timeout specified."))), this.timeoutMillis);
        s.on("close", h => {
          if (clearTimeout(a), h === 0) try {
            let g = JSON.parse(n), E = new le.ExecutableResponse(g);
            return t(E);
          } catch (g) {
            if (g instanceof le.ExecutableResponseError) return r(g);
            return r(new le.ExecutableResponseError(`The executable returned an invalid response: ${n}`));
          } else return r(new Es(n, h.toString()));
        });
      });
    }
    async retrieveCachedResponse() {
      if (!this.outputFile || this.outputFile.length === 0) return;
      let e;
      try {
        e = await gt.promises.realpath(this.outputFile);
      } catch {
        return;
      }
      if (!(await gt.promises.lstat(e)).isFile()) return;
      let t = await gt.promises.readFile(e, {
        encoding: "utf8"
      });
      if (t === "") return;
      try {
        let r = JSON.parse(t);
        if (new le.ExecutableResponse(r).isValid()) return new le.ExecutableResponse(r);
        return;
      } catch (r) {
        if (r instanceof le.ExecutableResponseError) throw r;
        throw new le.ExecutableResponseError(`The output file contained an invalid response: ${t}`);
      }
    }
    static parseCommand(e) {
      let t = e.match(/(?:[^\s"]+|"[^"]*")+/g);
      if (!t) throw Error(`Provided command: "${e}" could not be parsed.`);
      for (let r = 0; r < t.length; r++) if (t[r][0] === '"' && t[r].slice(-1) === '"') t[r] = t[r].slice(1, -1);
      return t;
    }
  }
  Oa.PluggableAuthHandler = ws;
});

var Cs = C(function(Ts) {
  Object.defineProperty(Ts, "__esModule", {
    value: !0
  });
  Ts.PluggableAuthClient = Ts.ExecutableError = void 0;
  var Pa = We(), Ia = ms(), hr = As(), td = As();
  Object.defineProperty(Ts, "ExecutableError", {
    enumerable: !0,
    get: function() {
      return td.ExecutableError;
    }
  });
  var rd = 3e4, xa = 5e3, ba = 12e4, sd = "GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES", Na = 1;
  class Ua extends Pa.BaseExternalAccountClient {
    command;
    timeoutMillis;
    outputFile;
    handler;
    constructor(e) {
      super(e);
      if (!e.credential_source.executable) throw Error('No valid Pluggable Auth "credential_source" provided.');
      if (this.command = e.credential_source.executable.command, !this.command) throw Error('No valid Pluggable Auth "credential_source" provided.');
      if (e.credential_source.executable.timeout_millis === void 0) this.timeoutMillis = rd; else if (this.timeoutMillis = e.credential_source.executable.timeout_millis, 
      this.timeoutMillis < xa || this.timeoutMillis > ba) throw Error(`Timeout must be between ${xa} and ${ba} milliseconds.`);
      this.outputFile = e.credential_source.executable.output_file, this.handler = new hr.PluggableAuthHandler({
        command: this.command,
        timeoutMillis: this.timeoutMillis,
        outputFile: this.outputFile
      }), this.credentialSourceType = "executable";
    }
    async retrieveSubjectToken() {
      if (process.env[sd] !== "1") throw Error("Pluggable Auth executables need to be explicitly allowed to run by setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment Variable to 1.");
      let e = void 0;
      if (this.outputFile) e = await this.handler.retrieveCachedResponse();
      if (!e) {
        let t = new Map;
        if (t.set("GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE", this.audience), t.set("GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE", this.subjectTokenType), 
        t.set("GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE", "0"), this.outputFile) t.set("GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE", this.outputFile);
        let r = this.getServiceAccountEmail();
        if (r) t.set("GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL", r);
        e = await this.handler.retrieveResponseFromExecutable(t);
      }
      if (e.version > Na) throw Error(`Version of executable is not currently supported, maximum supported version is ${Na}.`);
      if (!e.success) throw new hr.ExecutableError(e.errorMessage, e.errorCode);
      if (this.outputFile) {
        if (!e.expirationTime) throw new Ia.InvalidExpirationTimeFieldError("The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.");
      }
      if (e.isExpired()) throw Error("Executable response is expired.");
      return e.subjectToken;
    }
  }
  Ts.PluggableAuthClient = Ua;
});

var vs = C(function(Ga) {
  Object.defineProperty(Ga, "__esModule", {
    value: !0
  });
  Ga.ExternalAccountClient = void 0;
  var Da = We(), qa = cs(), Fa = ls(), Ma = Cs();
  class La {
    constructor() {
      throw Error("ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()");
    }
    static fromJSON(e) {
      if (e && e.type === Da.EXTERNAL_ACCOUNT_TYPE) if (e.credential_source?.environment_id) return new Fa.AwsClient(e); else if (e.credential_source?.executable) return new Ma.PluggableAuthClient(e); else return new qa.IdentityPoolClient(e); else return null;
    }
  }
  Ga.ExternalAccountClient = La;
});

var Ss = C(function(Ka) {
  Object.defineProperty(Ka, "__esModule", {
    value: !0
  });
  Ka.ExternalAccountAuthorizedUserClient = Ka.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = void 0;
  var pr = fe(), fr = ss(), gr = re(), Ha = Ne("stream"), $a = We();
  Ka.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = "external_account_authorized_user";
  var nd = "https://sts.{universeDomain}/v1/oauthtoken";
  class ks extends fr.OAuthClientAuthHandler {
    #e;
    constructor(e) {
      super(e);
      this.#e = e.tokenRefreshEndpoint;
    }
    async refreshToken(e, t) {
      let r = {
        ...ks.RETRY_CONFIG,
        url: this.#e,
        method: "POST",
        headers: t,
        data: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: e
        }),
        responseType: "json"
      };
      pr.AuthClient.setMethodName(r, "refreshToken"), this.applyClientAuthenticationOptions(r);
      try {
        let s = await this.transporter.request(r), n = s.data;
        return n.res = s, n;
      } catch (s) {
        if (s instanceof gr.GaxiosError && s.response) throw fr.getErrorFromOAuthErrorResponse(s.response.data, s);
        throw s;
      }
    }
  }
  class Ja extends pr.AuthClient {
    cachedAccessToken;
    externalAccountAuthorizedUserHandler;
    refreshToken;
    constructor(e) {
      super(e);
      if (e.universe_domain) this.universeDomain = e.universe_domain;
      this.refreshToken = e.refresh_token;
      let t = {
        confidentialClientType: "basic",
        clientId: e.client_id,
        clientSecret: e.client_secret
      };
      if (this.externalAccountAuthorizedUserHandler = new ks({
        tokenRefreshEndpoint: e.token_url ?? nd.replace("{universeDomain}", this.universeDomain),
        transporter: this.transporter,
        clientAuthentication: t
      }), this.cachedAccessToken = null, this.quotaProjectId = e.quota_project_id, typeof e?.eagerRefreshThresholdMillis !== "number") this.eagerRefreshThresholdMillis = $a.EXPIRATION_TIME_OFFSET; else this.eagerRefreshThresholdMillis = e.eagerRefreshThresholdMillis;
      this.forceRefreshOnFailure = !!e?.forceRefreshOnFailure;
    }
    async getAccessToken() {
      if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) await this.refreshAccessTokenAsync();
      return {
        token: this.cachedAccessToken.access_token,
        res: this.cachedAccessToken.res
      };
    }
    async getRequestHeaders() {
      let e = await this.getAccessToken(), t = new Headers({
        authorization: `Bearer ${e.token}`
      });
      return this.addSharedMetadataHeaders(t);
    }
    request(e, t) {
      if (t) this.requestAsync(e).then(r => t(null, r), r => t(r, r.response)); else return this.requestAsync(e);
    }
    async requestAsync(e, t = !1) {
      let r;
      try {
        let s = await this.getRequestHeaders();
        e.headers = gr.Gaxios.mergeHeaders(e.headers), this.addUserProjectAndAuthHeaders(e.headers, s), 
        r = await this.transporter.request(e);
      } catch (s) {
        let n = s.response;
        if (n) {
          let a = n.status, h = n.config.data instanceof Ha.Readable;
          if (!t && (a === 401 || a === 403) && !h && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), 
          await this.requestAsync(e, !0);
        }
        throw s;
      }
      return r;
    }
    async refreshAccessTokenAsync() {
      let e = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
      if (this.cachedAccessToken = {
        access_token: e.access_token,
        expiry_date: (new Date).getTime() + e.expires_in * 1e3,
        res: e.res
      }, e.refresh_token !== void 0) this.refreshToken = e.refresh_token;
      return this.cachedAccessToken;
    }
    isExpired(e) {
      let t = (new Date).getTime();
      return e.expiry_date ? t >= e.expiry_date - this.eagerRefreshThresholdMillis : !1;
    }
  }
  Ka.ExternalAccountAuthorizedUserClient = Ja;
});

var ic = C(function(sc) {
  Object.defineProperty(sc, "__esModule", {
    value: !0
  });
  sc.GoogleAuth = sc.GoogleAuthExceptionMessages = void 0;
  var Va = Ne("child_process"), Ue = Ne("fs"), Ya = re(), je = kt(), Xa = Ne("os"), _t = Ne("path"), za = St(), Qa = Kr(), Za = Wr(), ec = Vr(), ve = es(), yr = ts(), ke = rs(), tc = vs(), De = We(), mt = fe(), _r = Ss(), mr = Re();
  sc.GoogleAuthExceptionMessages = {
    API_KEY_WITH_CREDENTIALS: "API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.",
    NO_PROJECT_ID_FOUND: `Unable to detect a Project Id in the current environment. \nTo learn more about authentication and Google APIs, visit: \nhttps://cloud.google.com/docs/authentication/getting-started`,
    NO_CREDENTIALS_FOUND: `Unable to find credentials in current environment. \nTo learn more about authentication and Google APIs, visit: \nhttps://cloud.google.com/docs/authentication/getting-started`,
    NO_ADC_FOUND: "Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.",
    NO_UNIVERSE_DOMAIN_FOUND: `Unable to detect a Universe Domain in the current environment.\nTo learn more about Universe Domain retrieval, visit: \nhttps://cloud.google.com/compute/docs/metadata/predefined-metadata-keys`
  };
  class rc {
    checkIsGCE=void 0;
    useJWTAccessWithScope;
    defaultServicePath;
    get isGCE() {
      return this.checkIsGCE;
    }
    _findProjectIdPromise;
    _cachedProjectId;
    jsonContent=null;
    apiKey;
    cachedCredential=null;
    #e=null;
    defaultScopes;
    keyFilename;
    scopes;
    clientOptions={};
    constructor(e = {}) {
      if (this._cachedProjectId = e.projectId || null, this.cachedCredential = e.authClient || null, 
      this.keyFilename = e.keyFilename || e.keyFile, this.scopes = e.scopes, this.clientOptions = e.clientOptions || {}, 
      this.jsonContent = e.credentials || null, this.apiKey = e.apiKey || this.clientOptions.apiKey || null, 
      this.apiKey && (this.jsonContent || this.clientOptions.credentials)) throw RangeError(sc.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
      if (e.universeDomain) this.clientOptions.universeDomain = e.universeDomain;
    }
    setGapicJWTValues(e) {
      e.defaultServicePath = this.defaultServicePath, e.useJWTAccessWithScope = this.useJWTAccessWithScope, 
      e.defaultScopes = this.defaultScopes;
    }
    getProjectId(e) {
      if (e) this.getProjectIdAsync().then(t => e(null, t), e); else return this.getProjectIdAsync();
    }
    async getProjectIdOptional() {
      try {
        return await this.getProjectId();
      } catch (e) {
        if (e instanceof Error && e.message === sc.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND) return null; else throw e;
      }
    }
    async findAndCacheProjectId() {
      let e = null;
      if (e ||= await this.getProductionProjectId(), e ||= await this.getFileProjectId(), 
      e ||= await this.getDefaultServiceProjectId(), e ||= await this.getGCEProjectId(), 
      e ||= await this.getExternalAccountClientProjectId(), e) return this._cachedProjectId = e, 
      e; else throw Error(sc.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
    }
    async getProjectIdAsync() {
      if (this._cachedProjectId) return this._cachedProjectId;
      if (!this._findProjectIdPromise) this._findProjectIdPromise = this.findAndCacheProjectId();
      return this._findProjectIdPromise;
    }
    async getUniverseDomainFromMetadataServer() {
      let e;
      try {
        e = await je.universe("universe-domain"), e ||= mt.DEFAULT_UNIVERSE;
      } catch (t) {
        if (t && t?.response?.status === 404) e = mt.DEFAULT_UNIVERSE; else throw t;
      }
      return e;
    }
    async getUniverseDomain() {
      let e = mr.originalOrCamelOptions(this.clientOptions).get("universe_domain");
      try {
        e ??= (await this.getClient()).universeDomain;
      } catch {
        e ??= mt.DEFAULT_UNIVERSE;
      }
      return e;
    }
    getAnyScopes() {
      return this.scopes || this.defaultScopes;
    }
    getApplicationDefault(e = {}, t) {
      let r;
      if (typeof e === "function") t = e; else r = e;
      if (t) this.getApplicationDefaultAsync(r).then(s => t(null, s.credential, s.projectId), t); else return this.getApplicationDefaultAsync(r);
    }
    async getApplicationDefaultAsync(e = {}) {
      if (this.cachedCredential) return await this.#t(this.cachedCredential, null);
      let t;
      if (t = await this._tryGetApplicationCredentialsFromEnvironmentVariable(e), t) {
        if (t instanceof ve.JWT) t.scopes = this.scopes; else if (t instanceof De.BaseExternalAccountClient) t.scopes = this.getAnyScopes();
        return await this.#t(t);
      }
      if (t = await this._tryGetApplicationCredentialsFromWellKnownFile(e), t) {
        if (t instanceof ve.JWT) t.scopes = this.scopes; else if (t instanceof De.BaseExternalAccountClient) t.scopes = this.getAnyScopes();
        return await this.#t(t);
      }
      if (await this._checkIsGCE()) return e.scopes = this.getAnyScopes(), await this.#t(new Qa.Compute(e));
      throw Error(sc.GoogleAuthExceptionMessages.NO_ADC_FOUND);
    }
    async #t(e, t = process.env.GOOGLE_CLOUD_QUOTA_PROJECT || null) {
      let r = await this.getProjectIdOptional();
      if (t) e.quotaProjectId = t;
      return this.cachedCredential = e, {
        credential: e,
        projectId: r
      };
    }
    async _checkIsGCE() {
      if (this.checkIsGCE === void 0) this.checkIsGCE = je.getGCPResidency() || await je.isAvailable();
      return this.checkIsGCE;
    }
    async _tryGetApplicationCredentialsFromEnvironmentVariable(e) {
      let t = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials;
      if (!t || t.length === 0) return null;
      try {
        return this._getApplicationCredentialsFromFilePath(t, e);
      } catch (r) {
        if (r instanceof Error) r.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${r.message}`;
        throw r;
      }
    }
    async _tryGetApplicationCredentialsFromWellKnownFile(e) {
      let t = null;
      if (this._isWindows()) t = process.env.APPDATA; else {
        let s = process.env.HOME;
        if (s) t = _t.join(s, ".config");
      }
      if (t) {
        if (t = _t.join(t, "gcloud", "application_default_credentials.json"), !Ue.existsSync(t)) t = null;
      }
      if (!t) return null;
      return await this._getApplicationCredentialsFromFilePath(t, e);
    }
    async _getApplicationCredentialsFromFilePath(e, t = {}) {
      if (!e || e.length === 0) throw Error("The file path is invalid.");
      try {
        if (e = Ue.realpathSync(e), !Ue.lstatSync(e).isFile()) throw Error();
      } catch (s) {
        if (s instanceof Error) s.message = `The file at ${e} does not exist, or it is not a file. ${s.message}`;
        throw s;
      }
      let r = Ue.createReadStream(e);
      return this.fromStream(r, t);
    }
    fromImpersonatedJSON(e) {
      if (!e) throw Error("Must pass in a JSON object containing an  impersonated refresh token");
      if (e.type !== ke.IMPERSONATED_ACCOUNT_TYPE) throw Error(`The incoming JSON object does not have the "${ke.IMPERSONATED_ACCOUNT_TYPE}" type`);
      if (!e.source_credentials) throw Error("The incoming JSON object does not contain a source_credentials field");
      if (!e.service_account_impersonation_url) throw Error("The incoming JSON object does not contain a service_account_impersonation_url field");
      let t = this.fromJSON(e.source_credentials);
      if (e.service_account_impersonation_url?.length > 256) throw RangeError(`Target principal is too long: ${e.service_account_impersonation_url}`);
      let r = /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(e.service_account_impersonation_url)?.groups?.target;
      if (!r) throw RangeError(`Cannot extract target principal from ${e.service_account_impersonation_url}`);
      let s = (this.scopes || e.scopes || this.defaultScopes) ?? [];
      return new ke.Impersonated({
        ...e,
        sourceClient: t,
        targetPrincipal: r,
        targetScopes: Array.isArray(s) ? s : [ s ]
      });
    }
    fromJSON(e, t = {}) {
      let r, s = mr.originalOrCamelOptions(t).get("universe_domain");
      if (e.type === yr.USER_REFRESH_ACCOUNT_TYPE) r = new yr.UserRefreshClient(t), r.fromJSON(e); else if (e.type === ke.IMPERSONATED_ACCOUNT_TYPE) r = this.fromImpersonatedJSON(e); else if (e.type === De.EXTERNAL_ACCOUNT_TYPE) r = tc.ExternalAccountClient.fromJSON({
        ...e,
        ...t
      }), r.scopes = this.getAnyScopes(); else if (e.type === _r.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE) r = new _r.ExternalAccountAuthorizedUserClient({
        ...e,
        ...t
      }); else t.scopes = this.scopes, r = new ve.JWT(t), this.setGapicJWTValues(r), r.fromJSON(e);
      if (s) r.universeDomain = s;
      return r;
    }
    _cacheClientFromJSON(e, t) {
      let r = this.fromJSON(e, t);
      return this.jsonContent = e, this.cachedCredential = r, r;
    }
    fromStream(e, t = {}, r) {
      let s = {};
      if (typeof t === "function") r = t; else s = t;
      if (r) this.fromStreamAsync(e, s).then(n => r(null, n), r); else return this.fromStreamAsync(e, s);
    }
    fromStreamAsync(e, t) {
      return new Promise((r, s) => {
        if (!e) throw Error("Must pass in a stream containing the Google auth settings.");
        let n = [];
        e.setEncoding("utf8").on("error", s).on("data", a => n.push(a)).on("end", () => {
          try {
            try {
              let a = JSON.parse(n.join("")), h = this._cacheClientFromJSON(a, t);
              return r(h);
            } catch (a) {
              if (!this.keyFilename) throw a;
              let h = new ve.JWT({
                ...this.clientOptions,
                keyFile: this.keyFilename
              });
              return this.cachedCredential = h, this.setGapicJWTValues(h), r(h);
            }
          } catch (a) {
            return s(a);
          }
        });
      });
    }
    fromAPIKey(e, t = {}) {
      return new ve.JWT({
        ...t,
        apiKey: e
      });
    }
    _isWindows() {
      let e = Xa.platform();
      if (e && e.length >= 3) {
        if (e.substring(0, 3).toLowerCase() === "win") return !0;
      }
      return !1;
    }
    async getDefaultServiceProjectId() {
      return new Promise(e => {
        Va.exec("gcloud config config-helper --format json", (t, r) => {
          if (!t && r) try {
            let s = JSON.parse(r).configuration.properties.core.project;
            e(s);
            return;
          } catch (s) {}
          e(null);
        });
      });
    }
    getProductionProjectId() {
      return process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT || process.env.gcloud_project || process.env.google_cloud_project;
    }
    async getFileProjectId() {
      if (this.cachedCredential) return this.cachedCredential.projectId;
      if (this.keyFilename) {
        let t = await this.getClient();
        if (t && t.projectId) return t.projectId;
      }
      let e = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
      if (e) return e.projectId; else return null;
    }
    async getExternalAccountClientProjectId() {
      if (!this.jsonContent || this.jsonContent.type !== De.EXTERNAL_ACCOUNT_TYPE) return null;
      return await (await this.getClient()).getProjectId();
    }
    async getGCEProjectId() {
      try {
        return await je.project("project-id");
      } catch (e) {
        return null;
      }
    }
    getCredentials(e) {
      if (e) this.getCredentialsAsync().then(t => e(null, t), e); else return this.getCredentialsAsync();
    }
    async getCredentialsAsync() {
      let e = await this.getClient();
      if (e instanceof ke.Impersonated) return {
        client_email: e.getTargetPrincipal()
      };
      if (e instanceof De.BaseExternalAccountClient) {
        let t = e.getServiceAccountEmail();
        if (t) return {
          client_email: t,
          universe_domain: e.universeDomain
        };
      }
      if (this.jsonContent) return {
        client_email: this.jsonContent.client_email,
        private_key: this.jsonContent.private_key,
        universe_domain: this.jsonContent.universe_domain
      };
      if (await this._checkIsGCE()) {
        let [t, r] = await Promise.all([ je.instance("service-accounts/default/email"), this.getUniverseDomain() ]);
        return {
          client_email: t,
          universe_domain: r
        };
      }
      throw Error(sc.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
    }
    async getClient() {
      if (this.cachedCredential) return this.cachedCredential;
      this.#e = this.#e || this.#r();
      try {
        return await this.#e;
      } finally {
        this.#e = null;
      }
    }
    async #r() {
      if (this.jsonContent) return this._cacheClientFromJSON(this.jsonContent, this.clientOptions); else if (this.keyFilename) {
        let e = _t.resolve(this.keyFilename), t = Ue.createReadStream(e);
        return await this.fromStreamAsync(t, this.clientOptions);
      } else if (this.apiKey) {
        let e = await this.fromAPIKey(this.apiKey, this.clientOptions);
        e.scopes = this.scopes;
        let {credential: t} = await this.#t(e);
        return t;
      } else {
        let {credential: e} = await this.getApplicationDefaultAsync(this.clientOptions);
        return e;
      }
    }
    async getIdTokenClient(e) {
      let t = await this.getClient();
      if (!("fetchIdToken" in t)) throw Error("Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.");
      return new Za.IdTokenClient({
        targetAudience: e,
        idTokenProvider: t
      });
    }
    async getAccessToken() {
      return (await (await this.getClient()).getAccessToken()).token;
    }
    async getRequestHeaders(e) {
      return (await this.getClient()).getRequestHeaders(e);
    }
    async authorizeRequest(e = {}) {
      let t = e.url, s = await (await this.getClient()).getRequestHeaders(t);
      return e.headers = Ya.Gaxios.mergeHeaders(e.headers, s), e;
    }
    async fetch(...e) {
      return (await this.getClient()).fetch(...e);
    }
    async request(e) {
      return (await this.getClient()).request(e);
    }
    getEnv() {
      return ec.getEnv();
    }
    async sign(e, t) {
      let r = await this.getClient(), s = await this.getUniverseDomain();
      if (t = t || `https://iamcredentials.${s}/v1/projects/-/serviceAccounts/`, r instanceof ke.Impersonated) return (await r.sign(e)).signedBlob;
      let n = za.createCrypto();
      if (r instanceof ve.JWT && r.key) return await n.sign(r.key, e);
      let a = await this.getCredentials();
      if (!a.client_email) throw Error("Cannot sign data without `client_email`.");
      return this.signBlob(n, a.client_email, e, t);
    }
    async signBlob(e, t, r, s) {
      let n = new URL(s + `${t}:signBlob`);
      return (await this.request({
        method: "POST",
        url: n.href,
        data: {
          payload: e.encodeBase64StringUtf8(r)
        },
        retry: !0,
        retryConfig: {
          httpMethodsToRetry: [ "POST" ]
        }
      })).data.signedBlob;
    }
  }
  sc.GoogleAuth = rc;
});

var uc = C(function(ac) {
  Object.defineProperty(ac, "__esModule", {
    value: !0
  });
  ac.IAMAuth = void 0;
  class oc {
    selector;
    token;
    constructor(e, t) {
      this.selector = e, this.token = t, this.selector = e, this.token = t;
    }
    getRequestHeaders() {
      return {
        "x-goog-iam-authority-selector": this.selector,
        "x-goog-iam-authorization-token": this.token
      };
    }
  }
  ac.IAMAuth = oc;
});

var yc = C(function(pc) {
  Object.defineProperty(pc, "__esModule", {
    value: !0
  });
  pc.DownscopedClient = pc.EXPIRATION_TIME_OFFSET = pc.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;
  var lc = re(), dc = Ne("stream"), Et = fe(), hc = tr(), od = "urn:ietf:params:oauth:grant-type:token-exchange", ad = "urn:ietf:params:oauth:token-type:access_token", cd = "urn:ietf:params:oauth:token-type:access_token";
  pc.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
  pc.EXPIRATION_TIME_OFFSET = 3e5;
  class fc extends Et.AuthClient {
    authClient;
    credentialAccessBoundary;
    cachedDownscopedAccessToken;
    stsCredential;
    constructor(e, t = {
      accessBoundary: {
        accessBoundaryRules: []
      }
    }) {
      super(e instanceof Et.AuthClient ? {} : e);
      if (e instanceof Et.AuthClient) this.authClient = e, this.credentialAccessBoundary = t; else this.authClient = e.authClient, 
      this.credentialAccessBoundary = e.credentialAccessBoundary;
      if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length === 0) throw Error("At least one access boundary rule needs to be defined."); else if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length > pc.MAX_ACCESS_BOUNDARY_RULES_COUNT) throw Error(`The provided access boundary has more than ${pc.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
      for (let r of this.credentialAccessBoundary.accessBoundary.accessBoundaryRules) if (r.availablePermissions.length === 0) throw Error("At least one permission should be defined in access boundary rules.");
      this.stsCredential = new hc.StsCredentials({
        tokenExchangeEndpoint: `https://sts.${this.universeDomain}/v1/token`
      }), this.cachedDownscopedAccessToken = null;
    }
    setCredentials(e) {
      if (!e.expiry_date) throw Error("The access token expiry_date field is missing in the provided credentials.");
      super.setCredentials(e), this.cachedDownscopedAccessToken = e;
    }
    async getAccessToken() {
      if (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken)) await this.refreshAccessTokenAsync();
      return {
        token: this.cachedDownscopedAccessToken.access_token,
        expirationTime: this.cachedDownscopedAccessToken.expiry_date,
        res: this.cachedDownscopedAccessToken.res
      };
    }
    async getRequestHeaders() {
      let e = await this.getAccessToken(), t = new Headers({
        authorization: `Bearer ${e.token}`
      });
      return this.addSharedMetadataHeaders(t);
    }
    request(e, t) {
      if (t) this.requestAsync(e).then(r => t(null, r), r => t(r, r.response)); else return this.requestAsync(e);
    }
    async requestAsync(e, t = !1) {
      let r;
      try {
        let s = await this.getRequestHeaders();
        e.headers = lc.Gaxios.mergeHeaders(e.headers), this.addUserProjectAndAuthHeaders(e.headers, s), 
        r = await this.transporter.request(e);
      } catch (s) {
        let n = s.response;
        if (n) {
          let a = n.status, h = n.config.data instanceof dc.Readable;
          if (!t && (a === 401 || a === 403) && !h && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), 
          await this.requestAsync(e, !0);
        }
        throw s;
      }
      return r;
    }
    async refreshAccessTokenAsync() {
      let e = (await this.authClient.getAccessToken()).token, t = {
        grantType: od,
        requestedTokenType: ad,
        subjectToken: e,
        subjectTokenType: cd
      }, r = await this.stsCredential.exchangeToken(t, void 0, this.credentialAccessBoundary), s = this.authClient.credentials?.expiry_date || null, n = r.expires_in ? (new Date).getTime() + r.expires_in * 1e3 : s;
      return this.cachedDownscopedAccessToken = {
        access_token: r.access_token,
        expiry_date: n,
        res: r.res
      }, this.credentials = {}, Object.assign(this.credentials, this.cachedDownscopedAccessToken), 
      delete this.credentials.res, this.emit("tokens", {
        refresh_token: null,
        expiry_date: this.cachedDownscopedAccessToken.expiry_date,
        access_token: this.cachedDownscopedAccessToken.access_token,
        token_type: "Bearer",
        id_token: null
      }), this.cachedDownscopedAccessToken;
    }
    isExpired(e) {
      let t = (new Date).getTime();
      return e.expiry_date ? t >= e.expiry_date - this.eagerRefreshThresholdMillis : !1;
    }
  }
  pc.DownscopedClient = fc;
});

var Ac = C(function(Ec) {
  Object.defineProperty(Ec, "__esModule", {
    value: !0
  });
  Ec.PassThroughClient = void 0;
  var _c = fe();
  class mc extends _c.AuthClient {
    async request(e) {
      return this.transporter.request(e);
    }
    async getAccessToken() {
      return {};
    }
    async getRequestHeaders() {
      return new Headers;
    }
  }
  Ec.PassThroughClient = mc;
});

var Ljn = C(function(k) {
  var ld = k && k.__createBinding || (Object.create ? function(e, t, r, s) {
    if (s === void 0) s = r;
    var n = Object.getOwnPropertyDescriptor(t, r);
    if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) n = {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    };
    Object.defineProperty(e, s, n);
  } : function(e, t, r, s) {
    if (s === void 0) s = r;
    e[s] = t[r];
  }), dd = k && k.__exportStar || function(e, t) {
    for (var r in e) if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) ld(t, e, r);
  };
  Object.defineProperty(k, "__esModule", {
    value: !0
  });
  k.GoogleAuth = k.auth = k.PassThroughClient = k.ExternalAccountAuthorizedUserClient = k.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = k.ExecutableError = k.PluggableAuthClient = k.DownscopedClient = k.BaseExternalAccountClient = k.ExternalAccountClient = k.IdentityPoolClient = k.AwsRequestSigner = k.AwsClient = k.UserRefreshClient = k.LoginTicket = k.ClientAuthentication = k.OAuth2Client = k.CodeChallengeMethod = k.Impersonated = k.JWT = k.JWTAccess = k.IdTokenClient = k.IAMAuth = k.GCPEnv = k.Compute = k.DEFAULT_UNIVERSE = k.AuthClient = k.gaxios = k.gcpMetadata = void 0;
  var Er = ic();
  Object.defineProperty(k, "GoogleAuth", {
    enumerable: !0,
    get: function() {
      return Er.GoogleAuth;
    }
  });
  k.gcpMetadata = kt();
  k.gaxios = re();
  var Tc = fe();
  Object.defineProperty(k, "AuthClient", {
    enumerable: !0,
    get: function() {
      return Tc.AuthClient;
    }
  });
  Object.defineProperty(k, "DEFAULT_UNIVERSE", {
    enumerable: !0,
    get: function() {
      return Tc.DEFAULT_UNIVERSE;
    }
  });
  var hd = Kr();
  Object.defineProperty(k, "Compute", {
    enumerable: !0,
    get: function() {
      return hd.Compute;
    }
  });
  var fd = Vr();
  Object.defineProperty(k, "GCPEnv", {
    enumerable: !0,
    get: function() {
      return fd.GCPEnv;
    }
  });
  var pd = uc();
  Object.defineProperty(k, "IAMAuth", {
    enumerable: !0,
    get: function() {
      return pd.IAMAuth;
    }
  });
  var gd = Wr();
  Object.defineProperty(k, "IdTokenClient", {
    enumerable: !0,
    get: function() {
      return gd.IdTokenClient;
    }
  });
  var yd = Qr();
  Object.defineProperty(k, "JWTAccess", {
    enumerable: !0,
    get: function() {
      return yd.JWTAccess;
    }
  });
  var _d = es();
  Object.defineProperty(k, "JWT", {
    enumerable: !0,
    get: function() {
      return _d.JWT;
    }
  });
  var md = rs();
  Object.defineProperty(k, "Impersonated", {
    enumerable: !0,
    get: function() {
      return md.Impersonated;
    }
  });
  var Rs = st();
  Object.defineProperty(k, "CodeChallengeMethod", {
    enumerable: !0,
    get: function() {
      return Rs.CodeChallengeMethod;
    }
  });
  Object.defineProperty(k, "OAuth2Client", {
    enumerable: !0,
    get: function() {
      return Rs.OAuth2Client;
    }
  });
  Object.defineProperty(k, "ClientAuthentication", {
    enumerable: !0,
    get: function() {
      return Rs.ClientAuthentication;
    }
  });
  var Ed = Jr();
  Object.defineProperty(k, "LoginTicket", {
    enumerable: !0,
    get: function() {
      return Ed.LoginTicket;
    }
  });
  var wd = ts();
  Object.defineProperty(k, "UserRefreshClient", {
    enumerable: !0,
    get: function() {
      return wd.UserRefreshClient;
    }
  });
  var Ad = ls();
  Object.defineProperty(k, "AwsClient", {
    enumerable: !0,
    get: function() {
      return Ad.AwsClient;
    }
  });
  var Td = us();
  Object.defineProperty(k, "AwsRequestSigner", {
    enumerable: !0,
    get: function() {
      return Td.AwsRequestSigner;
    }
  });
  var Cd = cs();
  Object.defineProperty(k, "IdentityPoolClient", {
    enumerable: !0,
    get: function() {
      return Cd.IdentityPoolClient;
    }
  });
  var vd = vs();
  Object.defineProperty(k, "ExternalAccountClient", {
    enumerable: !0,
    get: function() {
      return vd.ExternalAccountClient;
    }
  });
  var kd = We();
  Object.defineProperty(k, "BaseExternalAccountClient", {
    enumerable: !0,
    get: function() {
      return kd.BaseExternalAccountClient;
    }
  });
  var Sd = yc();
  Object.defineProperty(k, "DownscopedClient", {
    enumerable: !0,
    get: function() {
      return Sd.DownscopedClient;
    }
  });
  var Cc = Cs();
  Object.defineProperty(k, "PluggableAuthClient", {
    enumerable: !0,
    get: function() {
      return Cc.PluggableAuthClient;
    }
  });
  Object.defineProperty(k, "ExecutableError", {
    enumerable: !0,
    get: function() {
      return Cc.ExecutableError;
    }
  });
  var vc = Ss();
  Object.defineProperty(k, "EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE", {
    enumerable: !0,
    get: function() {
      return vc.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE;
    }
  });
  Object.defineProperty(k, "ExternalAccountAuthorizedUserClient", {
    enumerable: !0,
    get: function() {
      return vc.ExternalAccountAuthorizedUserClient;
    }
  });
  var Od = Ac();
  Object.defineProperty(k, "PassThroughClient", {
    enumerable: !0,
    get: function() {
      return Od.PassThroughClient;
    }
  });
  dd(Xr(), k);
  var Rd = new Er.GoogleAuth;
  k.auth = Rd;
});

export { Ljn };
