// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { MP, OHt, gut } from "./chunk-nj8cgz8s.js";

import { pOe } from "./chunk-w4hwgefc.js";

import { C } from "./chunk-m8ez8fhk.js";

var q = C(function(J) {
  var x = (e, t) => {
    let r = [];
    if (e) r.push(e);
    if (t) for (let n of t) r.push(n);
    return r;
  }, v = (e, t) => `${e || "anonymous"}${t && t.length > 0 ? ` (a.k.a. ${t.join(",")})` : ""}`, b = () => {
    let e = [], t = [], r = !1, n = new Set, a = i => i.sort((s, l) => A[l.step] - A[s.step] || P[l.priority || "normal"] - P[s.priority || "normal"]), o = i => {
      let s = !1, l = h => {
        let m = x(h.name, h.aliases);
        if (m.includes(i)) {
          s = !0;
          for (let c of m) n.delete(c);
          return !1;
        }
        return !0;
      };
      return e = e.filter(l), t = t.filter(l), s;
    }, d = i => {
      let s = !1, l = h => {
        if (h.middleware === i) {
          s = !0;
          for (let m of x(h.name, h.aliases)) n.delete(m);
          return !1;
        }
        return !0;
      };
      return e = e.filter(l), t = t.filter(l), s;
    }, u = i => (e.forEach(s => {
      i.add(s.middleware, {
        ...s
      });
    }), t.forEach(s => {
      i.addRelativeTo(s.middleware, {
        ...s
      });
    }), i.identifyOnResolve?.(I.identifyOnResolve()), i), g = i => {
      let s = [];
      return i.before.forEach(l => {
        if (l.before.length === 0 && l.after.length === 0) s.push(l); else s.push(...g(l));
      }), s.push(i), i.after.reverse().forEach(l => {
        if (l.before.length === 0 && l.after.length === 0) s.push(l); else s.push(...g(l));
      }), s;
    }, w = (i = !1) => {
      let s = [], l = [], h = {};
      return e.forEach(c => {
        let f = {
          ...c,
          before: [],
          after: []
        };
        for (let p of x(f.name, f.aliases)) h[p] = f;
        s.push(f);
      }), t.forEach(c => {
        let f = {
          ...c,
          before: [],
          after: []
        };
        for (let p of x(f.name, f.aliases)) h[p] = f;
        l.push(f);
      }), l.forEach(c => {
        if (c.toMiddleware) {
          let f = h[c.toMiddleware];
          if (f === void 0) {
            if (i) return;
            throw Error(`${c.toMiddleware} is not found when adding ${v(c.name, c.aliases)} middleware ${c.relation} ${c.toMiddleware}`);
          }
          if (c.relation === "after") f.after.push(c);
          if (c.relation === "before") f.before.push(c);
        }
      }), a(s).map(g).reduce((c, f) => (c.push(...f), c), []);
    }, I = {
      add: (i, s = {}) => {
        let {name: l, override: h, aliases: m} = s, c = {
          step: "initialize",
          priority: "normal",
          middleware: i,
          ...s
        }, f = x(l, m);
        if (f.length > 0) {
          if (f.some(p => n.has(p))) {
            if (!h) throw Error(`Duplicate middleware name '${v(l, m)}'`);
            for (let p of f) {
              let S = e.findIndex(M => M.name === p || M.aliases?.some(N => N === p));
              if (S === -1) continue;
              let y = e[S];
              if (y.step !== c.step || c.priority !== y.priority) throw Error(`"${v(y.name, y.aliases)}" middleware with ${y.priority} priority in ${y.step} step cannot be overridden by "${v(l, m)}" middleware with ${c.priority} priority in ${c.step} step.`);
              e.splice(S, 1);
            }
          }
          for (let p of f) n.add(p);
        }
        e.push(c);
      },
      addRelativeTo: (i, s) => {
        let {name: l, override: h, aliases: m} = s, c = {
          middleware: i,
          ...s
        }, f = x(l, m);
        if (f.length > 0) {
          if (f.some(p => n.has(p))) {
            if (!h) throw Error(`Duplicate middleware name '${v(l, m)}'`);
            for (let p of f) {
              let S = t.findIndex(M => M.name === p || M.aliases?.some(N => N === p));
              if (S === -1) continue;
              let y = t[S];
              if (y.toMiddleware !== c.toMiddleware || y.relation !== c.relation) throw Error(`"${v(y.name, y.aliases)}" middleware ${y.relation} "${y.toMiddleware}" middleware cannot be overridden by "${v(l, m)}" middleware ${c.relation} "${c.toMiddleware}" middleware.`);
              t.splice(S, 1);
            }
          }
          for (let p of f) n.add(p);
        }
        t.push(c);
      },
      clone: () => u(b()),
      use: i => {
        i.applyToStack(I);
      },
      remove: i => {
        if (typeof i === "string") return o(i); else return d(i);
      },
      removeByTag: i => {
        let s = !1, l = h => {
          let {tags: m, name: c, aliases: f} = h;
          if (m && m.includes(i)) {
            let p = x(c, f);
            for (let S of p) n.delete(S);
            return s = !0, !1;
          }
          return !0;
        };
        return e = e.filter(l), t = t.filter(l), s;
      },
      concat: i => {
        let s = u(b());
        return s.use(i), s.identifyOnResolve(r || s.identifyOnResolve() || (i.identifyOnResolve?.() ?? !1)), 
        s;
      },
      applyToStack: u,
      identify: () => w(!0).map(i => {
        let s = i.step ?? i.relation + " " + i.toMiddleware;
        return v(i.name, i.aliases) + " - " + s;
      }),
      identifyOnResolve(i) {
        if (typeof i === "boolean") r = i;
        return r;
      },
      resolve: (i, s) => {
        for (let l of w().map(h => h.middleware).reverse()) i = l(i, s);
        if (r) console.log(I.identify());
        return i;
      }
    };
    return I;
  }, A = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1
  }, P = {
    high: 3,
    normal: 2,
    low: 1
  };
  J.constructStack = b;
});

var Nc = C(function(E) {
  var V = q(), T = gut(), O = pOe(), K = MP(), D = OHt();
  class j {
    config;
    middlewareStack=V.constructStack();
    initConfig;
    handlers;
    constructor(e) {
      this.config = e;
    }
    send(e, t, r) {
      let n = typeof t !== "function" ? t : void 0, a = typeof t === "function" ? t : r, o = n === void 0 && this.config.cacheMiddleware === !0, d;
      if (o) {
        if (!this.handlers) this.handlers = new WeakMap;
        let u = this.handlers;
        if (u.has(e.constructor)) d = u.get(e.constructor); else d = e.resolveMiddleware(this.middlewareStack, this.config, n), 
        u.set(e.constructor, d);
      } else delete this.handlers, d = e.resolveMiddleware(this.middlewareStack, this.config, n);
      if (a) d(e).then(u => a(null, u.output), u => a(u)).catch(() => {}); else return d(e).then(u => u.output);
    }
    destroy() {
      this.config?.requestHandler?.destroy?.(), delete this.handlers;
    }
  }
  var z = "***SensitiveInformation***";
  function R(e, t) {
    if (t == null) return t;
    let r = K.NormalizedSchema.of(e);
    if (r.getMergedTraits().sensitive) return z;
    if (r.isListSchema()) {
      if (!!r.getValueSchema().getMergedTraits().sensitive) return z;
    } else if (r.isMapSchema()) {
      if (!!r.getKeySchema().getMergedTraits().sensitive || !!r.getValueSchema().getMergedTraits().sensitive) return z;
    } else if (r.isStructSchema() && typeof t === "object") {
      let n = t, a = {};
      for (let [o, d] of r.structIterator()) if (n[o] != null) a[o] = R(d, n[o]);
      return a;
    }
    return t;
  }
  class F {
    middlewareStack=V.constructStack();
    schema;
    static classBuilder() {
      return new W;
    }
    resolveMiddlewareWithContext(e, t, r, {middlewareFn: n, clientName: a, commandName: o, inputFilterSensitiveLog: d, outputFilterSensitiveLog: u, smithyContext: g, additionalContext: w, CommandCtor: I}) {
      for (let m of n.bind(this)(I, e, t, r)) this.middlewareStack.use(m);
      let i = e.concat(this.middlewareStack), {logger: s} = t, l = {
        logger: s,
        clientName: a,
        commandName: o,
        inputFilterSensitiveLog: d,
        outputFilterSensitiveLog: u,
        [O.SMITHY_CONTEXT_KEY]: {
          commandInstance: this,
          ...g
        },
        ...w
      }, {requestHandler: h} = t;
      return i.resolve(m => h.handle(m.request, r || {}), l);
    }
  }
  class W {
    _init=() => {};
    _ep={};
    _middlewareFn=() => [];
    _commandName="";
    _clientName="";
    _additionalContext={};
    _smithyContext={};
    _inputFilterSensitiveLog=void 0;
    _outputFilterSensitiveLog=void 0;
    _serializer=null;
    _deserializer=null;
    _operationSchema;
    init(e) {
      this._init = e;
    }
    ep(e) {
      return this._ep = e, this;
    }
    m(e) {
      return this._middlewareFn = e, this;
    }
    s(e, t, r = {}) {
      return this._smithyContext = {
        service: e,
        operation: t,
        ...r
      }, this;
    }
    c(e = {}) {
      return this._additionalContext = e, this;
    }
    n(e, t) {
      return this._clientName = e, this._commandName = t, this;
    }
    f(e = r => r, t = r => r) {
      return this._inputFilterSensitiveLog = e, this._outputFilterSensitiveLog = t, this;
    }
    ser(e) {
      return this._serializer = e, this;
    }
    de(e) {
      return this._deserializer = e, this;
    }
    sc(e) {
      return this._operationSchema = e, this._smithyContext.operationSchema = e, this;
    }
    build() {
      let e = this, t;
      return t = class extends F {
        input;
        static getEndpointParameterInstructions() {
          return e._ep;
        }
        constructor(...[r]) {
          super();
          this.input = r ?? {}, e._init(this), this.schema = e._operationSchema;
        }
        resolveMiddleware(r, n, a) {
          let o = e._operationSchema, d = o?.[4] ?? o?.input, u = o?.[5] ?? o?.output;
          return this.resolveMiddlewareWithContext(r, n, a, {
            CommandCtor: t,
            middlewareFn: e._middlewareFn,
            clientName: e._clientName,
            commandName: e._commandName,
            inputFilterSensitiveLog: e._inputFilterSensitiveLog ?? (o ? R.bind(null, d) : g => g),
            outputFilterSensitiveLog: e._outputFilterSensitiveLog ?? (o ? R.bind(null, u) : g => g),
            smithyContext: e._smithyContext,
            additionalContext: e._additionalContext
          });
        }
        serialize=e._serializer;
        deserialize=e._deserializer;
      };
    }
  }
  var ee = "***SensitiveInformation***", te = (e, t) => {
    for (let r of Object.keys(e)) {
      let n = e[r], a = async function(d, u, g) {
        let w = new n(d);
        if (typeof u === "function") this.send(w, u); else if (typeof g === "function") {
          if (typeof u !== "object") throw Error(`Expected http options but got ${typeof u}`);
          this.send(w, u || {}, g);
        } else return this.send(w, u);
      }, o = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, "");
      t.prototype[o] = a;
    }
  };
  class _ extends Error {
    $fault;
    $response;
    $retryable;
    $metadata;
    constructor(e) {
      super(e.message);
      Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), 
      this.name = e.name, this.$fault = e.$fault, this.$metadata = e.$metadata;
    }
    static isInstance(e) {
      if (!e) return !1;
      let t = e;
      return _.prototype.isPrototypeOf(t) || Boolean(t.$fault) && Boolean(t.$metadata) && (t.$fault === "client" || t.$fault === "server");
    }
    static [Symbol.hasInstance](e) {
      if (!e) return !1;
      let t = e;
      if (this === _) return _.isInstance(e);
      if (_.isInstance(e)) {
        if (t.name && this.name) return this.prototype.isPrototypeOf(e) || t.name === this.name;
        return this.prototype.isPrototypeOf(e);
      }
      return !1;
    }
  }
  var B = (e, t = {}) => {
    Object.entries(t).filter(([, n]) => n !== void 0).forEach(([n, a]) => {
      if (e[n] == null || e[n] === "") e[n] = a;
    });
    let r = e.message || e.Message || "UnknownError";
    return e.message = r, delete e.Message, e;
  }, H = ({output: e, parsedBody: t, exceptionCtor: r, errorCode: n}) => {
    let a = ne(e), o = a.httpStatusCode ? a.httpStatusCode + "" : void 0, d = new r({
      name: t?.code || t?.Code || n || o || "UnknownError",
      $fault: "client",
      $metadata: a
    });
    throw B(d, t);
  }, re = e => ({output: t, parsedBody: r, errorCode: n}) => {
    H({
      output: t,
      parsedBody: r,
      exceptionCtor: e,
      errorCode: n
    });
  }, ne = e => ({
    httpStatusCode: e.statusCode,
    requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
    extendedRequestId: e.headers["x-amz-id-2"],
    cfId: e.headers["x-amz-cf-id"]
  }), ie = e => {
    switch (e) {
     case "standard":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };

     case "in-region":
      return {
        retryMode: "standard",
        connectionTimeout: 1100
      };

     case "cross-region":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };

     case "mobile":
      return {
        retryMode: "standard",
        connectionTimeout: 3e4
      };

     default:
      return {};
    }
  }, L = !1, se = e => {
    if (e && !L && parseInt(e.substring(1, e.indexOf("."))) < 16) L = !0;
  }, oe = e => {
    let t = [];
    for (let r in O.AlgorithmId) {
      let n = O.AlgorithmId[r];
      if (e[n] === void 0) continue;
      t.push({
        algorithmId: () => n,
        checksumConstructor: () => e[n]
      });
    }
    return {
      addChecksumAlgorithm(r) {
        t.push(r);
      },
      checksumAlgorithms() {
        return t;
      }
    };
  }, ae = e => {
    let t = {};
    return e.checksumAlgorithms().forEach(r => {
      t[r.algorithmId()] = r.checksumConstructor();
    }), t;
  }, le = e => ({
    setRetryStrategy(t) {
      e.retryStrategy = t;
    },
    retryStrategy() {
      return e.retryStrategy;
    }
  }), ce = e => {
    let t = {};
    return t.retryStrategy = e.retryStrategy(), t;
  }, U = e => Object.assign(oe(e), le(e)), de = U, ue = e => Object.assign(ae(e), ce(e)), fe = e => Array.isArray(e) ? e : [ e ], G = e => {
    for (let r in e) if (e.hasOwnProperty(r) && e[r]["#text"] !== void 0) e[r] = e[r]["#text"]; else if (typeof e[r] === "object" && e[r] !== null) e[r] = G(e[r]);
    return e;
  }, he = e => e != null;
  class Y {
    trace() {}
    debug() {}
    info() {}
    warn() {}
    error() {}
  }
  function Z(e, t, r) {
    let n, a, o;
    if (typeof t > "u" && typeof r > "u") n = {}, o = e; else if (n = e, typeof t === "function") return a = t, 
    o = r, ge(n, a, o); else o = t;
    for (let d of Object.keys(o)) {
      if (!Array.isArray(o[d])) {
        n[d] = o[d];
        continue;
      }
      X(n, null, o, d);
    }
    return n;
  }
  var me = e => {
    let t = {};
    for (let [r, n] of Object.entries(e || {})) t[r] = [ , n ];
    return t;
  }, pe = (e, t) => {
    let r = {};
    for (let n in t) X(r, e, t, n);
    return r;
  }, ge = (e, t, r) => Z(e, Object.entries(r).reduce((n, [a, o]) => {
    if (Array.isArray(o)) n[a] = o; else if (typeof o === "function") n[a] = [ t, o() ]; else n[a] = [ t, o ];
    return n;
  }, {})), X = (e, t, r, n) => {
    if (t !== null) {
      let d = r[n];
      if (typeof d === "function") d = [ , d ];
      let [u = ye, g = we, w = n] = d;
      if (typeof u === "function" && u(t[w]) || typeof u !== "function" && !!u) e[n] = g(t[w]);
      return;
    }
    let [a, o] = r[n];
    if (typeof o === "function") {
      let d, u = a === void 0 && (d = o()) != null, g = typeof a === "function" && !!a(void 0) || typeof a !== "function" && !!a;
      if (u) e[n] = d; else if (g) e[n] = o();
    } else {
      let d = a === void 0 && o != null, u = typeof a === "function" && !!a(o) || typeof a !== "function" && !!a;
      if (d || u) e[n] = o;
    }
  }, ye = e => e != null, we = e => e, Se = e => {
    if (e !== e) return "NaN";
    switch (e) {
     case 1 / 0:
      return "Infinity";

     case -1 / 0:
      return "-Infinity";

     default:
      return e;
    }
  }, ve = e => e.toISOString().replace(".000Z", "Z"), k = e => {
    if (e == null) return {};
    if (Array.isArray(e)) return e.filter(t => t != null).map(k);
    if (typeof e === "object") {
      let t = {};
      for (let r of Object.keys(e)) {
        if (e[r] == null) continue;
        t[r] = k(e[r]);
      }
      return t;
    }
    return e;
  };
  Object.defineProperty(E, "collectBody", {
    enumerable: !0,
    get: function() {
      return T.collectBody;
    }
  });
  Object.defineProperty(E, "extendedEncodeURIComponent", {
    enumerable: !0,
    get: function() {
      return T.extendedEncodeURIComponent;
    }
  });
  Object.defineProperty(E, "resolvedPath", {
    enumerable: !0,
    get: function() {
      return T.resolvedPath;
    }
  });
  E.Client = j;
  E.Command = F;
  E.NoOpLogger = Y;
  E.SENSITIVE_STRING = ee;
  E.ServiceException = _;
  E._json = k;
  E.convertMap = me;
  E.createAggregatedClient = te;
  E.decorateServiceException = B;
  E.emitWarningIfUnsupportedVersion = se;
  E.getArrayIfSingleItem = fe;
  E.getDefaultClientConfiguration = de;
  E.getDefaultExtensionConfiguration = U;
  E.getValueFromTextNode = G;
  E.isSerializableHeaderValue = he;
  E.loadConfigsForDefaultMode = ie;
  E.map = Z;
  E.resolveDefaultRuntimeConfig = ue;
  E.serializeDateTime = ve;
  E.serializeFloat = Se;
  E.take = pe;
  E.throwDefaultError = H;
  E.withBaseException = re;
  Object.keys(D).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(E, e)) Object.defineProperty(E, e, {
      enumerable: !0,
      get: function() {
        return D[e];
      }
    });
  });
});

export { Nc };
