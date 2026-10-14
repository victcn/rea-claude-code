// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { e4, rqr, Ser, QHe, wer, ver, oqr, sqr, iqr, xJ } from "./chunk-cfdp5rw5.js";

import { ja, qf } from "./chunk-s2t7g8m9.js";

import { C, Ne } from "./chunk-m8ez8fhk.js";

var ml = C(function(pl) {
  Object.defineProperty(pl, "__esModule", {
    value: !0
  });
  pl.VERSION = void 0;
  pl.VERSION = "0.208.0";
});

var k = C(function(Sl) {
  Object.defineProperty(Sl, "__esModule", {
    value: !0
  });
  Sl.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = Sl.DEFAULT_MAX_SEND_MESSAGE_LENGTH = Sl.Propagate = Sl.LogVerbosity = Sl.Status = void 0;
  var vl;
  (function(e) {
    e[e.OK = 0] = "OK", e[e.CANCELLED = 1] = "CANCELLED", e[e.UNKNOWN = 2] = "UNKNOWN", 
    e[e.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", e[e.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", 
    e[e.NOT_FOUND = 5] = "NOT_FOUND", e[e.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", e[e.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
    e[e.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", e[e.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", 
    e[e.ABORTED = 10] = "ABORTED", e[e.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", e[e.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
    e[e.INTERNAL = 13] = "INTERNAL", e[e.UNAVAILABLE = 14] = "UNAVAILABLE", e[e.DATA_LOSS = 15] = "DATA_LOSS", 
    e[e.UNAUTHENTICATED = 16] = "UNAUTHENTICATED";
  })(vl || (Sl.Status = vl = {}));
  var yl;
  (function(e) {
    e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.ERROR = 2] = "ERROR", e[e.NONE = 3] = "NONE";
  })(yl || (Sl.LogVerbosity = yl = {}));
  var _l;
  (function(e) {
    e[e.DEADLINE = 1] = "DEADLINE", e[e.CENSUS_STATS_CONTEXT = 2] = "CENSUS_STATS_CONTEXT", 
    e[e.CENSUS_TRACING_CONTEXT = 4] = "CENSUS_TRACING_CONTEXT", e[e.CANCELLATION = 8] = "CANCELLATION", 
    e[e.DEFAULTS = 65535] = "DEFAULTS";
  })(_l || (Sl.Propagate = _l = {}));
  Sl.DEFAULT_MAX_SEND_MESSAGE_LENGTH = -1;
  Sl.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = 4194304;
});

var ia = C(function(bw, qy) {
  qy.exports = {
    name: "@grpc/grpc-js",
    version: "1.14.4",
    description: "gRPC Library for Node - pure JS implementation",
    homepage: "https://grpc.io/",
    repository: "https://github.com/grpc/grpc-node/tree/master/packages/grpc-js",
    main: "build/src/index.js",
    engines: {
      node: ">=12.10.0"
    },
    keywords: [],
    author: {
      name: "Google Inc."
    },
    types: "build/src/index.d.ts",
    license: "Apache-2.0",
    devDependencies: {
      "@grpc/proto-loader": "file:../proto-loader",
      "@types/gulp": "^4.0.17",
      "@types/gulp-mocha": "0.0.37",
      "@types/lodash": "^4.14.202",
      "@types/mocha": "^10.0.6",
      "@types/ncp": "^2.0.8",
      "@types/node": ">=20.11.20",
      "@types/pify": "^5.0.4",
      "@types/semver": "^7.5.8",
      "@typescript-eslint/eslint-plugin": "^7.1.0",
      "@typescript-eslint/parser": "^7.1.0",
      "@typescript-eslint/typescript-estree": "^7.1.0",
      "clang-format": "^1.8.0",
      eslint: "^8.42.0",
      "eslint-config-prettier": "^8.8.0",
      "eslint-plugin-node": "^11.1.0",
      "eslint-plugin-prettier": "^4.2.1",
      execa: "^2.0.3",
      gulp: "^4.0.2",
      "gulp-mocha": "^6.0.0",
      lodash: "^4.17.21",
      madge: "^5.0.1",
      "mocha-jenkins-reporter": "^0.4.1",
      ncp: "^2.0.0",
      pify: "^4.0.1",
      prettier: "^2.8.8",
      rimraf: "^3.0.2",
      semver: "^7.6.0",
      "ts-node": "^10.9.2",
      typescript: "^5.3.3"
    },
    contributors: [ {
      name: "Google Inc."
    } ],
    scripts: {
      build: "npm run compile",
      clean: "rimraf ./build",
      compile: "tsc -p .",
      format: 'clang-format -i -style="{Language: JavaScript, BasedOnStyle: Google, ColumnLimit: 80}" src/*.ts test/*.ts',
      lint: "eslint src/*.ts test/*.ts",
      prepare: "npm run copy-protos && npm run generate-types && npm run generate-test-types && npm run compile",
      test: "gulp test",
      check: "npm run lint",
      fix: "eslint --fix src/*.ts test/*.ts",
      pretest: "npm run generate-types && npm run generate-test-types && npm run compile",
      posttest: "npm run check && madge -c ./build/src",
      "generate-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --includeDirs proto/ --include-dirs proto/ proto/xds/ proto/protoc-gen-validate/ -O src/generated/ --grpcLib ../index channelz.proto xds/service/orca/v3/orca.proto",
      "generate-test-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --include-dirs test/fixtures/ -O test/generated/ --grpcLib ../../src/index test_service.proto echo_service.proto",
      "copy-protos": "node ./copy-protos"
    },
    dependencies: {
      "@grpc/proto-loader": "^0.8.0",
      "@js-sdsl/ordered-map": "^4.4.2"
    },
    files: [ "src/**/*.ts", "build/src/**/*.{js,d.ts,js.map}", "proto/**/*.proto", "proto/**/LICENSE", "LICENSE", "deps/envoy-api/envoy/api/v2/**/*.proto", "deps/envoy-api/envoy/config/**/*.proto", "deps/envoy-api/envoy/service/**/*.proto", "deps/envoy-api/envoy/type/**/*.proto", "deps/udpa/udpa/**/*.proto", "deps/googleapis/google/api/*.proto", "deps/googleapis/google/rpc/*.proto", "deps/protoc-gen-validate/validate/**/*.proto" ]
  };
});

var K = C(function(bl) {
  var sa, na, aa, oa;
  Object.defineProperty(bl, "__esModule", {
    value: !0
  });
  bl.log = bl.setLoggerVerbosity = bl.setLogger = bl.getLogger = void 0;
  bl.trace = Yy;
  bl.isTracerEnabled = Rl;
  var _e = k(), El = Ne("process"), Uy = ia().version, By = {
    error: (e, ...t) => {
      console.error("E " + e, ...t);
    },
    info: (e, ...t) => {
      console.error("I " + e, ...t);
    },
    debug: (e, ...t) => {
      console.error("D " + e, ...t);
    }
  }, gr = By, Rr = _e.LogVerbosity.ERROR, zy = (na = (sa = process.env.GRPC_NODE_VERBOSITY) !== null && sa !== void 0 ? sa : process.env.GRPC_VERBOSITY) !== null && na !== void 0 ? na : "";
  switch (zy.toUpperCase()) {
   case "DEBUG":
    Rr = _e.LogVerbosity.DEBUG;
    break;

   case "INFO":
    Rr = _e.LogVerbosity.INFO;
    break;

   case "ERROR":
    Rr = _e.LogVerbosity.ERROR;
    break;

   case "NONE":
    Rr = _e.LogVerbosity.NONE;
    break;

   default:
  }
  var Hy = () => gr;
  bl.getLogger = Hy;
  var Wy = e => {
    gr = e;
  };
  bl.setLogger = Wy;
  var jy = e => {
    Rr = e;
  };
  bl.setLoggerVerbosity = jy;
  var Gy = (e, ...t) => {
    let r;
    if (e >= Rr) {
      switch (e) {
       case _e.LogVerbosity.DEBUG:
        r = gr.debug;
        break;

       case _e.LogVerbosity.INFO:
        r = gr.info;
        break;

       case _e.LogVerbosity.ERROR:
        r = gr.error;
        break;
      }
      if (!r) r = gr.error;
      if (r) r.bind(gr)(...t);
    }
  };
  bl.log = Gy;
  var $y = (oa = (aa = process.env.GRPC_NODE_TRACE) !== null && aa !== void 0 ? aa : process.env.GRPC_TRACE) !== null && oa !== void 0 ? oa : "", la = new Set, Tl = new Set;
  for (let e of $y.split(",")) if (e.startsWith("-")) Tl.add(e.substring(1)); else la.add(e);
  var Vy = la.has("all");
  function Yy(e, t, r) {
    if (Rl(t)) bl.log(e, (new Date).toISOString() + " | v" + Uy + " " + El.pid + " | " + t + " | " + r);
  }
  function Rl(e) {
    return !Tl.has(e) && (Vy || la.has(e));
  }
});

var Qi = C(function(Ol) {
  Object.defineProperty(Ol, "__esModule", {
    value: !0
  });
  Ol.getErrorMessage = e_;
  Ol.getErrorCode = t_;
  function e_(e) {
    if (e instanceof Error) return e.message; else return String(e);
  }
  function t_(e) {
    if (typeof e === "object" && e !== null && "code" in e && typeof e.code === "number") return e.code; else return null;
  }
});

var ue = C(function(Il) {
  Object.defineProperty(Il, "__esModule", {
    value: !0
  });
  Il.Metadata = void 0;
  var Al = K(), Pl = k(), Nl = Qi(), s_ = /^[:0-9a-z_.-]+$/, n_ = /^[ -~]*$/;
  function a_(e) {
    return s_.test(e);
  }
  function o_(e) {
    return n_.test(e);
  }
  function Ml(e) {
    return e.endsWith("-bin");
  }
  function l_(e) {
    return !e.startsWith("grpc-");
  }
  function Zi(e) {
    return e.toLowerCase();
  }
  function wl(e, t) {
    if (!a_(e)) throw Error('Metadata key "' + e + '" contains illegal characters');
    if (t !== null && t !== void 0) if (Ml(e)) {
      if (!Buffer.isBuffer(t)) throw Error("keys that end with '-bin' must have Buffer values");
    } else {
      if (Buffer.isBuffer(t)) throw Error("keys that don't end with '-bin' must have String values");
      if (!o_(t)) throw Error('Metadata string value "' + t + '" contains illegal characters');
    }
  }
  class es {
    constructor(e = {}) {
      this.internalRepr = new Map, this.opaqueData = new Map, this.options = e;
    }
    set(e, t) {
      e = Zi(e), wl(e, t), this.internalRepr.set(e, [ t ]);
    }
    add(e, t) {
      e = Zi(e), wl(e, t);
      let r = this.internalRepr.get(e);
      if (r === void 0) this.internalRepr.set(e, [ t ]); else r.push(t);
    }
    remove(e) {
      e = Zi(e), this.internalRepr.delete(e);
    }
    get(e) {
      return e = Zi(e), this.internalRepr.get(e) || [];
    }
    getMap() {
      let e = {};
      for (let [t, r] of this.internalRepr) if (r.length > 0) {
        let i = r[0];
        e[t] = Buffer.isBuffer(i) ? Buffer.from(i) : i;
      }
      return e;
    }
    clone() {
      let e = new es(this.options), t = e.internalRepr;
      for (let [r, i] of this.internalRepr) {
        let s = i.map(n => {
          if (Buffer.isBuffer(n)) return Buffer.from(n); else return n;
        });
        t.set(r, s);
      }
      return e;
    }
    merge(e) {
      for (let [t, r] of e.internalRepr) {
        let i = (this.internalRepr.get(t) || []).concat(r);
        this.internalRepr.set(t, i);
      }
    }
    setOptions(e) {
      this.options = e;
    }
    getOptions() {
      return this.options;
    }
    toHttp2Headers() {
      let e = {};
      for (let [t, r] of this.internalRepr) {
        if (t.startsWith(":")) continue;
        e[t] = r.map(c_);
      }
      return e;
    }
    toJSON() {
      let e = {};
      for (let [t, r] of this.internalRepr) e[t] = r;
      return e;
    }
    setOpaque(e, t) {
      this.opaqueData.set(e, t);
    }
    getOpaque(e) {
      return this.opaqueData.get(e);
    }
    static fromHttp2Headers(e) {
      let t = new es;
      for (let r of Object.keys(e)) {
        if (r.charAt(0) === ":") continue;
        let i = e[r];
        try {
          if (Ml(r)) {
            if (Array.isArray(i)) i.forEach(s => {
              t.add(r, Buffer.from(s, "base64"));
            }); else if (i !== void 0) if (l_(r)) i.split(",").forEach(s => {
              t.add(r, Buffer.from(s.trim(), "base64"));
            }); else t.add(r, Buffer.from(i, "base64"));
          } else if (Array.isArray(i)) i.forEach(s => {
            t.add(r, s);
          }); else if (i !== void 0) t.add(r, i);
        } catch (s) {
          let n = `Failed to add metadata entry ${r}: ${i}. ${Nl.getErrorMessage(s)}. For more information see https://github.com/grpc/grpc-node/issues/1173`;
          Al.log(Pl.LogVerbosity.ERROR, n);
        }
      }
      return t;
    }
  }
  Il.Metadata = es;
  var c_ = e => Buffer.isBuffer(e) ? e.toString("base64") : e;
});

var rs = C(function(kl) {
  Object.defineProperty(kl, "__esModule", {
    value: !0
  });
  kl.CallCredentials = void 0;
  var br = ue();
  function u_(e) {
    return "getRequestHeaders" in e && typeof e.getRequestHeaders === "function";
  }
  class Or {
    static createFromMetadataGenerator(e) {
      return new ua(e);
    }
    static createFromGoogleCredential(e) {
      return Or.createFromMetadataGenerator((t, r) => {
        let i;
        if (u_(e)) i = e.getRequestHeaders(t.service_url); else i = new Promise((s, n) => {
          e.getRequestMetadata(t.service_url, (a, o) => {
            if (a) {
              n(a);
              return;
            }
            if (!o) {
              n(Error("Headers not set by metadata plugin"));
              return;
            }
            s(o);
          });
        });
        i.then(s => {
          let n = new br.Metadata;
          for (let a of Object.keys(s)) n.add(a, s[a]);
          r(null, n);
        }, s => {
          r(s);
        });
      });
    }
    static createEmpty() {
      return new da;
    }
  }
  kl.CallCredentials = Or;
  class ts extends Or {
    constructor(e) {
      super();
      this.creds = e;
    }
    async generateMetadata(e) {
      let t = new br.Metadata, r = await Promise.all(this.creds.map(i => i.generateMetadata(e)));
      for (let i of r) t.merge(i);
      return t;
    }
    compose(e) {
      return new ts(this.creds.concat([ e ]));
    }
    _equals(e) {
      if (this === e) return !0;
      if (e instanceof ts) return this.creds.every((t, r) => t._equals(e.creds[r])); else return !1;
    }
  }
  class ua extends Or {
    constructor(e) {
      super();
      this.metadataGenerator = e;
    }
    generateMetadata(e) {
      return new Promise((t, r) => {
        this.metadataGenerator(e, (i, s) => {
          if (s !== void 0) t(s); else r(i);
        });
      });
    }
    compose(e) {
      return new ts([ this, e ]);
    }
    _equals(e) {
      if (this === e) return !0;
      if (e instanceof ua) return this.metadataGenerator === e.metadataGenerator; else return !1;
    }
  }
  class da extends Or {
    generateMetadata(e) {
      return Promise.resolve(new br.Metadata);
    }
    compose(e) {
      return e;
    }
    _equals(e) {
      return e instanceof da;
    }
  }
});

var fa = C(function(ql) {
  Object.defineProperty(ql, "__esModule", {
    value: !0
  });
  ql.CIPHER_SUITES = void 0;
  ql.getDefaultRootsData = d_;
  var Fl = Ne("fs");
  ql.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
  var Ll = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH, ha = null;
  function d_() {
    if (Ll) {
      if (ha === null) ha = Fl.readFileSync(Ll);
      return ha;
    }
    return null;
  }
});

var we = C(function(zl) {
  Object.defineProperty(zl, "__esModule", {
    value: !0
  });
  zl.parseUri = p_;
  zl.splitHostPort = g_;
  zl.combineHostPort = m_;
  zl.uriToString = v_;
  var f_ = /^(?:([A-Za-z0-9+.-]+):)?(?:\/\/([^/]*)\/)?(.+)$/;
  function p_(e) {
    let t = f_.exec(e);
    if (t === null) return null;
    return {
      scheme: t[1],
      authority: t[2],
      path: t[3]
    };
  }
  var Bl = /^\d+$/;
  function g_(e) {
    if (e.startsWith("[")) {
      let t = e.indexOf("]");
      if (t === -1) return null;
      let r = e.substring(1, t);
      if (r.indexOf(":") === -1) return null;
      if (e.length > t + 1) if (e[t + 1] === ":") {
        let i = e.substring(t + 2);
        if (Bl.test(i)) return {
          host: r,
          port: +i
        }; else return null;
      } else return null; else return {
        host: r
      };
    } else {
      let t = e.split(":");
      if (t.length === 2) if (Bl.test(t[1])) return {
        host: t[0],
        port: +t[1]
      }; else return null; else return {
        host: e
      };
    }
  }
  function m_(e) {
    if (e.port === void 0) return e.host; else if (e.host.includes(":")) return `[${e.host}]:${e.port}`; else return `${e.host}:${e.port}`;
  }
  function v_(e) {
    let t = "";
    if (e.scheme !== void 0) t += e.scheme + ":";
    if (e.authority !== void 0) t += "//" + e.authority + "/";
    return t += e.path, t;
  }
});

var rt = C(function(Hl) {
  Object.defineProperty(Hl, "__esModule", {
    value: !0
  });
  Hl.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = void 0;
  Hl.registerResolver = E_;
  Hl.registerDefaultScheme = T_;
  Hl.createResolver = R_;
  Hl.getDefaultAuthority = b_;
  Hl.mapUriDefaultScheme = O_;
  var Ar = we();
  Hl.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = "grpc.internal.config_selector";
  var wr = {}, pa = null;
  function E_(e, t) {
    wr[e] = t;
  }
  function T_(e) {
    pa = e;
  }
  function R_(e, t, r) {
    if (e.scheme !== void 0 && e.scheme in wr) return new wr[e.scheme](e, t, r); else throw Error(`No resolver could be created for target ${Ar.uriToString(e)}`);
  }
  function b_(e) {
    if (e.scheme !== void 0 && e.scheme in wr) return wr[e.scheme].getDefaultAuthority(e); else throw Error(`Invalid target ${Ar.uriToString(e)}`);
  }
  function O_(e) {
    if (e.scheme === void 0 || !(e.scheme in wr)) if (pa !== null) return {
      scheme: pa,
      authority: void 0,
      path: Ar.uriToString(e)
    }; else return null;
    return e;
  }
});

var Mr = C(function(Kl) {
  Object.defineProperty(Kl, "__esModule", {
    value: !0
  });
  Kl.ChannelCredentials = void 0;
  Kl.createCertificateProviderChannelCredentials = I_;
  var ut = Ne("tls"), Wt = rs(), Pr = fa(), is = we(), jl = rt(), Gl = K(), $l = k();
  function ga(e, t) {
    if (e && !(e instanceof Buffer)) throw TypeError(`${t}, if provided, must be a Buffer.`);
  }
  class Nr {
    compose(e) {
      return new ns(this, e);
    }
    static createSsl(e, t, r, i) {
      var s;
      if (ga(e, "Root certificate"), ga(t, "Private key"), ga(r, "Certificate chain"), 
      t && !r) throw Error("Private key must be given with accompanying certificate chain");
      if (!t && r) throw Error("Certificate chain must be given with accompanying private key");
      let n = ut.createSecureContext({
        ca: (s = e !== null && e !== void 0 ? e : Pr.getDefaultRootsData()) !== null && s !== void 0 ? s : void 0,
        key: t !== null && t !== void 0 ? t : void 0,
        cert: r !== null && r !== void 0 ? r : void 0,
        ciphers: Pr.CIPHER_SUITES
      });
      return new ss(n, i !== null && i !== void 0 ? i : {});
    }
    static createFromSecureContext(e, t) {
      return new ss(e, t !== null && t !== void 0 ? t : {});
    }
    static createInsecure() {
      return new ma;
    }
  }
  Kl.ChannelCredentials = Nr;
  class ma extends Nr {
    constructor() {
      super();
    }
    compose(e) {
      throw Error("Cannot compose insecure credentials");
    }
    _isSecure() {
      return !1;
    }
    _equals(e) {
      return e instanceof ma;
    }
    _createSecureConnector(e, t, r) {
      return {
        connect(i) {
          return Promise.resolve({
            socket: i,
            secure: !1
          });
        },
        waitForReady: () => Promise.resolve(),
        getCallCredentials: () => r !== null && r !== void 0 ? r : Wt.CallCredentials.createEmpty(),
        destroy() {}
      };
    }
  }
  function Vl(e, t, r, i) {
    var s, n;
    let a = {
      secureContext: e
    }, o = r;
    if ("grpc.http_connect_target" in i) {
      let d = is.parseUri(i["grpc.http_connect_target"]);
      if (d) o = d;
    }
    let l = jl.getDefaultAuthority(o), c = is.splitHostPort(l), u = (s = c === null || c === void 0 ? void 0 : c.host) !== null && s !== void 0 ? s : l;
    if (a.host = u, t.checkServerIdentity) a.checkServerIdentity = t.checkServerIdentity;
    if (t.rejectUnauthorized !== void 0) a.rejectUnauthorized = t.rejectUnauthorized;
    if (a.ALPNProtocols = [ "h2" ], i["grpc.ssl_target_name_override"]) {
      let d = i["grpc.ssl_target_name_override"], h = (n = a.checkServerIdentity) !== null && n !== void 0 ? n : ut.checkServerIdentity;
      a.checkServerIdentity = (m, f) => h(d, f), a.servername = d;
    } else a.servername = u;
    if (i["grpc-node.tls_enable_trace"]) a.enableTrace = !0;
    return a;
  }
  class Yl {
    constructor(e, t) {
      this.connectionOptions = e, this.callCredentials = t;
    }
    connect(e) {
      let t = Object.assign({
        socket: e
      }, this.connectionOptions);
      return new Promise((r, i) => {
        let s = ut.connect(t, () => {
          var n;
          if (((n = this.connectionOptions.rejectUnauthorized) !== null && n !== void 0 ? n : !0) && !s.authorized) {
            i(s.authorizationError);
            return;
          }
          r({
            socket: s,
            secure: !0
          });
        });
        s.on("error", n => {
          i(n);
        });
      });
    }
    waitForReady() {
      return Promise.resolve();
    }
    getCallCredentials() {
      return this.callCredentials;
    }
    destroy() {}
  }
  class ss extends Nr {
    constructor(e, t) {
      super();
      this.secureContext = e, this.verifyOptions = t;
    }
    _isSecure() {
      return !0;
    }
    _equals(e) {
      if (this === e) return !0;
      if (e instanceof ss) return this.secureContext === e.secureContext && this.verifyOptions.checkServerIdentity === e.verifyOptions.checkServerIdentity; else return !1;
    }
    _createSecureConnector(e, t, r) {
      let i = Vl(this.secureContext, this.verifyOptions, e, t);
      return new Yl(i, r !== null && r !== void 0 ? r : Wt.CallCredentials.createEmpty());
    }
  }
  class Ci extends Nr {
    constructor(e, t, r) {
      super();
      this.caCertificateProvider = e, this.identityCertificateProvider = t, this.verifyOptions = r, 
      this.refcount = 0, this.latestCaUpdate = void 0, this.latestIdentityUpdate = void 0, 
      this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this), this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this), 
      this.secureContextWatchers = [];
    }
    _isSecure() {
      return !0;
    }
    _equals(e) {
      var t, r;
      if (this === e) return !0;
      if (e instanceof Ci) return this.caCertificateProvider === e.caCertificateProvider && this.identityCertificateProvider === e.identityCertificateProvider && ((t = this.verifyOptions) === null || t === void 0 ? void 0 : t.checkServerIdentity) === ((r = e.verifyOptions) === null || r === void 0 ? void 0 : r.checkServerIdentity); else return !1;
    }
    ref() {
      var e;
      if (this.refcount === 0) this.caCertificateProvider.addCaCertificateListener(this.caCertificateUpdateListener), 
      (e = this.identityCertificateProvider) === null || e === void 0 || e.addIdentityCertificateListener(this.identityCertificateUpdateListener);
      this.refcount += 1;
    }
    unref() {
      var e;
      if (this.refcount -= 1, this.refcount === 0) this.caCertificateProvider.removeCaCertificateListener(this.caCertificateUpdateListener), 
      (e = this.identityCertificateProvider) === null || e === void 0 || e.removeIdentityCertificateListener(this.identityCertificateUpdateListener);
    }
    _createSecureConnector(e, t, r) {
      return this.ref(), new Ci.SecureConnectorImpl(this, e, t, r !== null && r !== void 0 ? r : Wt.CallCredentials.createEmpty());
    }
    maybeUpdateWatchers() {
      if (this.hasReceivedUpdates()) {
        for (let e of this.secureContextWatchers) e(this.getLatestSecureContext());
        this.secureContextWatchers = [];
      }
    }
    handleCaCertificateUpdate(e) {
      this.latestCaUpdate = e, this.maybeUpdateWatchers();
    }
    handleIdentityCertitificateUpdate(e) {
      this.latestIdentityUpdate = e, this.maybeUpdateWatchers();
    }
    hasReceivedUpdates() {
      if (this.latestCaUpdate === void 0) return !1;
      if (this.identityCertificateProvider && this.latestIdentityUpdate === void 0) return !1;
      return !0;
    }
    getSecureContext() {
      if (this.hasReceivedUpdates()) return Promise.resolve(this.getLatestSecureContext()); else return new Promise(e => {
        this.secureContextWatchers.push(e);
      });
    }
    getLatestSecureContext() {
      var e, t;
      if (!this.latestCaUpdate) return null;
      if (this.identityCertificateProvider !== null && !this.latestIdentityUpdate) return null;
      try {
        return ut.createSecureContext({
          ca: this.latestCaUpdate.caCertificate,
          key: (e = this.latestIdentityUpdate) === null || e === void 0 ? void 0 : e.privateKey,
          cert: (t = this.latestIdentityUpdate) === null || t === void 0 ? void 0 : t.certificate,
          ciphers: Pr.CIPHER_SUITES
        });
      } catch (r) {
        return Gl.log($l.LogVerbosity.ERROR, "Failed to createSecureContext with error " + r.message), 
        null;
      }
    }
  }
  Ci.SecureConnectorImpl = class {
    constructor(e, t, r, i) {
      this.parent = e, this.channelTarget = t, this.options = r, this.callCredentials = i;
    }
    connect(e) {
      return new Promise((t, r) => {
        let i = this.parent.getLatestSecureContext();
        if (!i) {
          r(Error("Failed to load credentials"));
          return;
        }
        if (e.closed) r(Error("Socket closed while loading credentials"));
        let s = Vl(i, this.parent.verifyOptions, this.channelTarget, this.options), n = Object.assign({
          socket: e
        }, s), a = () => {
          r(Error("Socket closed"));
        }, o = c => {
          r(c);
        }, l = ut.connect(n, () => {
          var c;
          if (l.removeListener("close", a), l.removeListener("error", o), ((c = this.parent.verifyOptions.rejectUnauthorized) !== null && c !== void 0 ? c : !0) && !l.authorized) {
            r(l.authorizationError);
            return;
          }
          t({
            socket: l,
            secure: !0
          });
        });
        l.once("close", a), l.once("error", o);
      });
    }
    async waitForReady() {
      await this.parent.getSecureContext();
    }
    getCallCredentials() {
      return this.callCredentials;
    }
    destroy() {
      this.parent.unref();
    }
  };
  function I_(e, t, r) {
    return new Ci(e, t, r !== null && r !== void 0 ? r : {});
  }
  class ns extends Nr {
    constructor(e, t) {
      super();
      if (this.channelCredentials = e, this.callCredentials = t, !e._isSecure()) throw Error("Cannot compose insecure credentials");
    }
    compose(e) {
      let t = this.callCredentials.compose(e);
      return new ns(this.channelCredentials, t);
    }
    _isSecure() {
      return !0;
    }
    _equals(e) {
      if (this === e) return !0;
      if (e instanceof ns) return this.channelCredentials._equals(e.channelCredentials) && this.callCredentials._equals(e.callCredentials); else return !1;
    }
    _createSecureConnector(e, t, r) {
      let i = this.callCredentials.compose(r !== null && r !== void 0 ? r : Wt.CallCredentials.createEmpty());
      return this.channelCredentials._createSecureConnector(e, t, i);
    }
  }
});

var Gt = C(function(ec) {
  Object.defineProperty(ec, "__esModule", {
    value: !0
  });
  ec.createChildChannelControlHelper = k_;
  ec.registerLoadBalancerType = D_;
  ec.registerDefaultLoadBalancerType = L_;
  ec.createLoadBalancer = F_;
  ec.isLoadBalancerNameRegistered = q_;
  ec.parseLoadBalancingConfig = Zl;
  ec.getDefaultConfig = U_;
  ec.selectLbConfigFromList = B_;
  var Xl = K(), Ql = k();
  function k_(e, t) {
    var r, i, s, n, a, o, l, c, u, d;
    return {
      createSubchannel: (i = (r = t.createSubchannel) === null || r === void 0 ? void 0 : r.bind(t)) !== null && i !== void 0 ? i : e.createSubchannel.bind(e),
      updateState: (n = (s = t.updateState) === null || s === void 0 ? void 0 : s.bind(t)) !== null && n !== void 0 ? n : e.updateState.bind(e),
      requestReresolution: (o = (a = t.requestReresolution) === null || a === void 0 ? void 0 : a.bind(t)) !== null && o !== void 0 ? o : e.requestReresolution.bind(e),
      addChannelzChild: (c = (l = t.addChannelzChild) === null || l === void 0 ? void 0 : l.bind(t)) !== null && c !== void 0 ? c : e.addChannelzChild.bind(e),
      removeChannelzChild: (d = (u = t.removeChannelzChild) === null || u === void 0 ? void 0 : u.bind(t)) !== null && d !== void 0 ? d : e.removeChannelzChild.bind(e)
    };
  }
  var jt = {}, Ei = null;
  function D_(e, t, r) {
    jt[e] = {
      LoadBalancer: t,
      LoadBalancingConfig: r
    };
  }
  function L_(e) {
    Ei = e;
  }
  function F_(e, t) {
    let r = e.getLoadBalancerName();
    if (r in jt) return new jt[r].LoadBalancer(t); else return null;
  }
  function q_(e) {
    return e in jt;
  }
  function Zl(e) {
    let t = Object.keys(e);
    if (t.length !== 1) throw Error("Provided load balancing config has multiple conflicting entries");
    let r = t[0];
    if (r in jt) try {
      return jt[r].LoadBalancingConfig.createFromJson(e[r]);
    } catch (i) {
      throw Error(`${r}: ${i.message}`);
    } else throw Error(`Unrecognized load balancing config name ${r}`);
  }
  function U_() {
    if (!Ei) throw Error("No default load balancer type registered");
    return new jt[Ei].LoadBalancingConfig;
  }
  function B_(e, t = !1) {
    for (let r of e) try {
      return Zl(r);
    } catch (i) {
      Xl.log(Ql.LogVerbosity.DEBUG, "Config parsing failed with error", i.message);
      continue;
    }
    if (t) if (Ei) return new jt[Ei].LoadBalancingConfig; else return null; else return null;
  }
});

var va = C(function(sc) {
  Object.defineProperty(sc, "__esModule", {
    value: !0
  });
  sc.validateRetryThrottling = rc;
  sc.validateServiceConfig = ic;
  sc.extractAndSelectServiceConfig = iS;
  var tc = Ne("os"), $t = k(), as = /^\d+(\.\d{1,9})?s$/, K_ = "node";
  function J_(e) {
    if ("service" in e && e.service !== "") {
      if (typeof e.service !== "string") throw Error(`Invalid method config name: invalid service: expected type string, got ${typeof e.service}`);
      if ("method" in e && e.method !== "") {
        if (typeof e.method !== "string") throw Error(`Invalid method config name: invalid method: expected type string, got ${typeof e.service}`);
        return {
          service: e.service,
          method: e.method
        };
      } else return {
        service: e.service
      };
    } else {
      if ("method" in e && e.method !== void 0) throw Error("Invalid method config name: method set with empty or unset service");
      return {};
    }
  }
  function X_(e) {
    if (!("maxAttempts" in e) || !Number.isInteger(e.maxAttempts) || e.maxAttempts < 2) throw Error("Invalid method config retry policy: maxAttempts must be an integer at least 2");
    if (!("initialBackoff" in e) || typeof e.initialBackoff !== "string" || !as.test(e.initialBackoff)) throw Error("Invalid method config retry policy: initialBackoff must be a string consisting of a positive integer or decimal followed by s");
    if (!("maxBackoff" in e) || typeof e.maxBackoff !== "string" || !as.test(e.maxBackoff)) throw Error("Invalid method config retry policy: maxBackoff must be a string consisting of a positive integer or decimal followed by s");
    if (!("backoffMultiplier" in e) || typeof e.backoffMultiplier !== "number" || e.backoffMultiplier <= 0) throw Error("Invalid method config retry policy: backoffMultiplier must be a number greater than 0");
    if (!("retryableStatusCodes" in e && Array.isArray(e.retryableStatusCodes))) throw Error("Invalid method config retry policy: retryableStatusCodes is required");
    if (e.retryableStatusCodes.length === 0) throw Error("Invalid method config retry policy: retryableStatusCodes must be non-empty");
    for (let t of e.retryableStatusCodes) if (typeof t === "number") {
      if (!Object.values($t.Status).includes(t)) throw Error("Invalid method config retry policy: retryableStatusCodes value not in status code range");
    } else if (typeof t === "string") {
      if (!Object.values($t.Status).includes(t.toUpperCase())) throw Error("Invalid method config retry policy: retryableStatusCodes value not a status code name");
    } else throw Error("Invalid method config retry policy: retryableStatusCodes value must be a string or number");
    return {
      maxAttempts: e.maxAttempts,
      initialBackoff: e.initialBackoff,
      maxBackoff: e.maxBackoff,
      backoffMultiplier: e.backoffMultiplier,
      retryableStatusCodes: e.retryableStatusCodes
    };
  }
  function Q_(e) {
    if (!("maxAttempts" in e) || !Number.isInteger(e.maxAttempts) || e.maxAttempts < 2) throw Error("Invalid method config hedging policy: maxAttempts must be an integer at least 2");
    if ("hedgingDelay" in e && (typeof e.hedgingDelay !== "string" || !as.test(e.hedgingDelay))) throw Error("Invalid method config hedging policy: hedgingDelay must be a string consisting of a positive integer followed by s");
    if ("nonFatalStatusCodes" in e && Array.isArray(e.nonFatalStatusCodes)) for (let r of e.nonFatalStatusCodes) if (typeof r === "number") {
      if (!Object.values($t.Status).includes(r)) throw Error("Invalid method config hedging policy: nonFatalStatusCodes value not in status code range");
    } else if (typeof r === "string") {
      if (!Object.values($t.Status).includes(r.toUpperCase())) throw Error("Invalid method config hedging policy: nonFatalStatusCodes value not a status code name");
    } else throw Error("Invalid method config hedging policy: nonFatalStatusCodes value must be a string or number");
    let t = {
      maxAttempts: e.maxAttempts
    };
    if (e.hedgingDelay) t.hedgingDelay = e.hedgingDelay;
    if (e.nonFatalStatusCodes) t.nonFatalStatusCodes = e.nonFatalStatusCodes;
    return t;
  }
  function Z_(e) {
    var t;
    let r = {
      name: []
    };
    if (!("name" in e) || !Array.isArray(e.name)) throw Error("Invalid method config: invalid name array");
    for (let i of e.name) r.name.push(J_(i));
    if ("waitForReady" in e) {
      if (typeof e.waitForReady !== "boolean") throw Error("Invalid method config: invalid waitForReady");
      r.waitForReady = e.waitForReady;
    }
    if ("timeout" in e) if (typeof e.timeout === "object") {
      if (!("seconds" in e.timeout) || typeof e.timeout.seconds !== "number") throw Error("Invalid method config: invalid timeout.seconds");
      if (!("nanos" in e.timeout) || typeof e.timeout.nanos !== "number") throw Error("Invalid method config: invalid timeout.nanos");
      r.timeout = e.timeout;
    } else if (typeof e.timeout === "string" && as.test(e.timeout)) {
      let i = e.timeout.substring(0, e.timeout.length - 1).split(".");
      r.timeout = {
        seconds: i[0] | 0,
        nanos: ((t = i[1]) !== null && t !== void 0 ? t : 0) | 0
      };
    } else throw Error("Invalid method config: invalid timeout");
    if ("maxRequestBytes" in e) {
      if (typeof e.maxRequestBytes !== "number") throw Error("Invalid method config: invalid maxRequestBytes");
      r.maxRequestBytes = e.maxRequestBytes;
    }
    if ("maxResponseBytes" in e) {
      if (typeof e.maxResponseBytes !== "number") throw Error("Invalid method config: invalid maxRequestBytes");
      r.maxResponseBytes = e.maxResponseBytes;
    }
    if ("retryPolicy" in e) if ("hedgingPolicy" in e) throw Error("Invalid method config: retryPolicy and hedgingPolicy cannot both be specified"); else r.retryPolicy = X_(e.retryPolicy); else if ("hedgingPolicy" in e) r.hedgingPolicy = Q_(e.hedgingPolicy);
    return r;
  }
  function rc(e) {
    if (!("maxTokens" in e) || typeof e.maxTokens !== "number" || e.maxTokens <= 0 || e.maxTokens > 1e3) throw Error("Invalid retryThrottling: maxTokens must be a number in (0, 1000]");
    if (!("tokenRatio" in e) || typeof e.tokenRatio !== "number" || e.tokenRatio <= 0) throw Error("Invalid retryThrottling: tokenRatio must be a number greater than 0");
    return {
      maxTokens: +e.maxTokens.toFixed(3),
      tokenRatio: +e.tokenRatio.toFixed(3)
    };
  }
  function eS(e) {
    if (!(typeof e === "object" && e !== null)) throw Error(`Invalid loadBalancingConfig: unexpected type ${typeof e}`);
    let t = Object.keys(e);
    if (t.length > 1) throw Error(`Invalid loadBalancingConfig: unexpected multiple keys ${t}`);
    if (t.length === 0) throw Error("Invalid loadBalancingConfig: load balancing policy name required");
    return {
      [t[0]]: e[t[0]]
    };
  }
  function ic(e) {
    let t = {
      loadBalancingConfig: [],
      methodConfig: []
    };
    if ("loadBalancingPolicy" in e) if (typeof e.loadBalancingPolicy === "string") t.loadBalancingPolicy = e.loadBalancingPolicy; else throw Error("Invalid service config: invalid loadBalancingPolicy");
    if ("loadBalancingConfig" in e) if (Array.isArray(e.loadBalancingConfig)) for (let i of e.loadBalancingConfig) t.loadBalancingConfig.push(eS(i)); else throw Error("Invalid service config: invalid loadBalancingConfig");
    if ("methodConfig" in e) {
      if (Array.isArray(e.methodConfig)) for (let i of e.methodConfig) t.methodConfig.push(Z_(i));
    }
    if ("retryThrottling" in e) t.retryThrottling = rc(e.retryThrottling);
    let r = [];
    for (let i of t.methodConfig) for (let s of i.name) {
      for (let n of r) if (s.service === n.service && s.method === n.method) throw Error(`Invalid service config: duplicate name ${s.service}/${s.method}`);
      r.push(s);
    }
    return t;
  }
  function tS(e) {
    if (!("serviceConfig" in e)) throw Error("Invalid service config choice: missing service config");
    let t = {
      serviceConfig: ic(e.serviceConfig)
    };
    if ("clientLanguage" in e) if (Array.isArray(e.clientLanguage)) {
      t.clientLanguage = [];
      for (let i of e.clientLanguage) if (typeof i === "string") t.clientLanguage.push(i); else throw Error("Invalid service config choice: invalid clientLanguage");
    } else throw Error("Invalid service config choice: invalid clientLanguage");
    if ("clientHostname" in e) if (Array.isArray(e.clientHostname)) {
      t.clientHostname = [];
      for (let i of e.clientHostname) if (typeof i === "string") t.clientHostname.push(i); else throw Error("Invalid service config choice: invalid clientHostname");
    } else throw Error("Invalid service config choice: invalid clientHostname");
    if ("percentage" in e) if (typeof e.percentage === "number" && 0 <= e.percentage && e.percentage <= 100) t.percentage = e.percentage; else throw Error("Invalid service config choice: invalid percentage");
    let r = [ "clientLanguage", "percentage", "clientHostname", "serviceConfig" ];
    for (let i in e) if (!r.includes(i)) throw Error(`Invalid service config choice: unexpected field ${i}`);
    return t;
  }
  function rS(e, t) {
    if (!Array.isArray(e)) throw Error("Invalid service config list");
    for (let r of e) {
      let i = tS(r);
      if (typeof i.percentage === "number" && t > i.percentage) continue;
      if (Array.isArray(i.clientHostname)) {
        let s = !1;
        for (let n of i.clientHostname) if (n === tc.hostname()) s = !0;
        if (!s) continue;
      }
      if (Array.isArray(i.clientLanguage)) {
        let s = !1;
        for (let n of i.clientLanguage) if (n === K_) s = !0;
        if (!s) continue;
      }
      return i.serviceConfig;
    }
    throw Error("No matching service config found");
  }
  function iS(e, t) {
    for (let r of e) if (r.length > 0 && r[0].startsWith("grpc_config=")) {
      let i = r.join("").substring(12), s = JSON.parse(i);
      return rS(s, t);
    }
    return null;
  }
});

var Ae = C(function(ac) {
  Object.defineProperty(ac, "__esModule", {
    value: !0
  });
  ac.ConnectivityState = void 0;
  var nc;
  (function(e) {
    e[e.IDLE = 0] = "IDLE", e[e.CONNECTING = 1] = "CONNECTING", e[e.READY = 2] = "READY", 
    e[e.TRANSIENT_FAILURE = 3] = "TRANSIENT_FAILURE", e[e.SHUTDOWN = 4] = "SHUTDOWN";
  })(nc || (ac.ConnectivityState = nc = {}));
});

var kt = C(function(hc) {
  Object.defineProperty(hc, "__esModule", {
    value: !0
  });
  hc.QueuePicker = hc.UnavailablePicker = hc.PickResultType = void 0;
  var lc = ue(), cc = k(), os;
  (function(e) {
    e[e.COMPLETE = 0] = "COMPLETE", e[e.QUEUE = 1] = "QUEUE", e[e.TRANSIENT_FAILURE = 2] = "TRANSIENT_FAILURE", 
    e[e.DROP = 3] = "DROP";
  })(os || (hc.PickResultType = os = {}));
  class uc {
    constructor(e) {
      this.status = Object.assign({
        code: cc.Status.UNAVAILABLE,
        details: "No connection established",
        metadata: new lc.Metadata
      }, e);
    }
    pick(e) {
      return {
        pickResultType: os.TRANSIENT_FAILURE,
        subchannel: null,
        status: this.status,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  hc.UnavailablePicker = uc;
  class dc {
    constructor(e, t) {
      this.loadBalancer = e, this.childPicker = t, this.calledExitIdle = !1;
    }
    pick(e) {
      if (!this.calledExitIdle) process.nextTick(() => {
        this.loadBalancer.exitIdle();
      }), this.calledExitIdle = !0;
      if (this.childPicker) return this.childPicker.pick(e); else return {
        pickResultType: os.QUEUE,
        subchannel: null,
        status: null,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  hc.QueuePicker = dc;
});

var Ir = C(function(mc) {
  Object.defineProperty(mc, "__esModule", {
    value: !0
  });
  mc.BackoffTimeout = void 0;
  var pc = k(), gc = K(), cS = "backoff", uS = 1e3, dS = 1.6, hS = 12e4, fS = .2;
  function pS(e, t) {
    return Math.random() * (t - e) + e;
  }
  class ls {
    constructor(e, t) {
      if (this.callback = e, this.initialDelay = uS, this.multiplier = dS, this.maxDelay = hS, 
      this.jitter = fS, this.running = !1, this.hasRef = !0, this.startTime = new Date, 
      this.endTime = new Date, this.id = ls.getNextId(), t) {
        if (t.initialDelay) this.initialDelay = t.initialDelay;
        if (t.multiplier) this.multiplier = t.multiplier;
        if (t.jitter) this.jitter = t.jitter;
        if (t.maxDelay) this.maxDelay = t.maxDelay;
      }
      this.trace("constructed initialDelay=" + this.initialDelay + " multiplier=" + this.multiplier + " jitter=" + this.jitter + " maxDelay=" + this.maxDelay), 
      this.nextDelay = this.initialDelay, this.timerId = setTimeout(() => {}, 0), clearTimeout(this.timerId);
    }
    static getNextId() {
      return this.nextId++;
    }
    trace(e) {
      gc.trace(pc.LogVerbosity.DEBUG, cS, "{" + this.id + "} " + e);
    }
    runTimer(e) {
      var t, r;
      if (this.trace("runTimer(delay=" + e + ")"), this.endTime = this.startTime, this.endTime.setMilliseconds(this.endTime.getMilliseconds() + e), 
      clearTimeout(this.timerId), this.timerId = setTimeout(() => {
        this.trace("timer fired"), this.running = !1, this.callback();
      }, e), !this.hasRef) (r = (t = this.timerId).unref) === null || r === void 0 || r.call(t);
    }
    runOnce() {
      this.trace("runOnce()"), this.running = !0, this.startTime = new Date, this.runTimer(this.nextDelay);
      let e = Math.min(this.nextDelay * this.multiplier, this.maxDelay), t = e * this.jitter;
      this.nextDelay = e + pS(-t, t);
    }
    stop() {
      this.trace("stop()"), clearTimeout(this.timerId), this.running = !1;
    }
    reset() {
      if (this.trace("reset() running=" + this.running), this.nextDelay = this.initialDelay, 
      this.running) {
        let e = new Date, t = this.startTime;
        if (t.setMilliseconds(t.getMilliseconds() + this.nextDelay), clearTimeout(this.timerId), 
        e < t) this.runTimer(t.getTime() - e.getTime()); else this.running = !1;
      }
    }
    isRunning() {
      return this.running;
    }
    ref() {
      var e, t;
      this.hasRef = !0, (t = (e = this.timerId).ref) === null || t === void 0 || t.call(e);
    }
    unref() {
      var e, t;
      this.hasRef = !1, (t = (e = this.timerId).unref) === null || t === void 0 || t.call(e);
    }
    getEndTime() {
      return this.endTime;
    }
  }
  mc.BackoffTimeout = ls;
  ls.nextId = 0;
});

var cs = C(function(Cc) {
  Object.defineProperty(Cc, "__esModule", {
    value: !0
  });
  Cc.ChildLoadBalancerHandler = void 0;
  var yc = Gt(), _c = Ae(), gS = "child_load_balancer_helper";
  class Sc {
    constructor(e) {
      this.channelControlHelper = e, this.currentChild = null, this.pendingChild = null, 
      this.latestConfig = null, this.ChildPolicyHelper = class {
        constructor(t) {
          this.parent = t, this.child = null;
        }
        createSubchannel(t, r) {
          return this.parent.channelControlHelper.createSubchannel(t, r);
        }
        updateState(t, r, i) {
          var s;
          if (this.calledByPendingChild()) {
            if (t === _c.ConnectivityState.CONNECTING) return;
            (s = this.parent.currentChild) === null || s === void 0 || s.destroy(), this.parent.currentChild = this.parent.pendingChild, 
            this.parent.pendingChild = null;
          } else if (!this.calledByCurrentChild()) return;
          this.parent.channelControlHelper.updateState(t, r, i);
        }
        requestReresolution() {
          var t;
          let r = (t = this.parent.pendingChild) !== null && t !== void 0 ? t : this.parent.currentChild;
          if (this.child === r) this.parent.channelControlHelper.requestReresolution();
        }
        setChild(t) {
          this.child = t;
        }
        addChannelzChild(t) {
          this.parent.channelControlHelper.addChannelzChild(t);
        }
        removeChannelzChild(t) {
          this.parent.channelControlHelper.removeChannelzChild(t);
        }
        calledByPendingChild() {
          return this.child === this.parent.pendingChild;
        }
        calledByCurrentChild() {
          return this.child === this.parent.currentChild;
        }
      };
    }
    configUpdateRequiresNewPolicyInstance(e, t) {
      return e.getLoadBalancerName() !== t.getLoadBalancerName();
    }
    updateAddressList(e, t, r, i) {
      let s;
      if (this.currentChild === null || this.latestConfig === null || this.configUpdateRequiresNewPolicyInstance(this.latestConfig, t)) {
        let n = new this.ChildPolicyHelper(this), a = yc.createLoadBalancer(t, n);
        if (n.setChild(a), this.currentChild === null) this.currentChild = a, s = this.currentChild; else {
          if (this.pendingChild) this.pendingChild.destroy();
          this.pendingChild = a, s = this.pendingChild;
        }
      } else if (this.pendingChild === null) s = this.currentChild; else s = this.pendingChild;
      return this.latestConfig = t, s.updateAddressList(e, t, r, i);
    }
    exitIdle() {
      if (this.currentChild) {
        if (this.currentChild.exitIdle(), this.pendingChild) this.pendingChild.exitIdle();
      }
    }
    resetBackoff() {
      if (this.currentChild) {
        if (this.currentChild.resetBackoff(), this.pendingChild) this.pendingChild.resetBackoff();
      }
    }
    destroy() {
      if (this.currentChild) this.currentChild.destroy(), this.currentChild = null;
      if (this.pendingChild) this.pendingChild.destroy(), this.pendingChild = null;
    }
    getTypeName() {
      return gS;
    }
  }
  Cc.ChildLoadBalancerHandler = Sc;
});

var Dc = C(function(xc) {
  Object.defineProperty(xc, "__esModule", {
    value: !0
  });
  xc.ResolvingLoadBalancer = void 0;
  var Rc = Gt(), bc = va(), V = Ae(), us = rt(), dt = kt(), Oc = Ir(), xr = k(), wc = ue(), Ac = K(), Pc = k(), Nc = we(), Mc = cs(), mS = "resolving_load_balancer";
  function Tc(e) {
    Ac.trace(Pc.LogVerbosity.DEBUG, mS, e);
  }
  var vS = [ "SERVICE_AND_METHOD", "SERVICE", "EMPTY" ];
  function yS(e, t, r, i) {
    for (let s of r.name) switch (i) {
     case "EMPTY":
      if (!s.service && !s.method) return !0;
      break;

     case "SERVICE":
      if (s.service === e && !s.method) return !0;
      break;

     case "SERVICE_AND_METHOD":
      if (s.service === e && s.method === t) return !0;
    }
    return !1;
  }
  function _S(e, t, r, i) {
    for (let s of r) if (yS(e, t, s, i)) return s;
    return null;
  }
  function SS(e) {
    return {
      invoke(t, r) {
        var i, s;
        let n = t.split("/").filter(l => l.length > 0), a = (i = n[0]) !== null && i !== void 0 ? i : "", o = (s = n[1]) !== null && s !== void 0 ? s : "";
        if (e && e.methodConfig) for (let l of vS) {
          let c = _S(a, o, e.methodConfig, l);
          if (c) return {
            methodConfig: c,
            pickInformation: {},
            status: xr.Status.OK,
            dynamicFilterFactories: []
          };
        }
        return {
          methodConfig: {
            name: []
          },
          pickInformation: {},
          status: xr.Status.OK,
          dynamicFilterFactories: []
        };
      },
      unref() {}
    };
  }
  class Ic {
    constructor(e, t, r, i, s) {
      if (this.target = e, this.channelControlHelper = t, this.channelOptions = r, this.onSuccessfulResolution = i, 
      this.onFailedResolution = s, this.latestChildState = V.ConnectivityState.IDLE, this.latestChildPicker = new dt.QueuePicker(this), 
      this.latestChildErrorMessage = null, this.currentState = V.ConnectivityState.IDLE, 
      this.previousServiceConfig = null, this.continueResolving = !1, r["grpc.service_config"]) this.defaultServiceConfig = bc.validateServiceConfig(JSON.parse(r["grpc.service_config"])); else this.defaultServiceConfig = {
        loadBalancingConfig: [],
        methodConfig: []
      };
      this.updateState(V.ConnectivityState.IDLE, new dt.QueuePicker(this), null), this.childLoadBalancer = new Mc.ChildLoadBalancerHandler({
        createSubchannel: t.createSubchannel.bind(t),
        requestReresolution: () => {
          if (this.backoffTimeout.isRunning()) Tc("requestReresolution delayed by backoff timer until " + this.backoffTimeout.getEndTime().toISOString()), 
          this.continueResolving = !0; else this.updateResolution();
        },
        updateState: (a, o, l) => {
          this.latestChildState = a, this.latestChildPicker = o, this.latestChildErrorMessage = l, 
          this.updateState(a, o, l);
        },
        addChannelzChild: t.addChannelzChild.bind(t),
        removeChannelzChild: t.removeChannelzChild.bind(t)
      }), this.innerResolver = us.createResolver(e, this.handleResolverResult.bind(this), r);
      let n = {
        initialDelay: r["grpc.initial_reconnect_backoff_ms"],
        maxDelay: r["grpc.max_reconnect_backoff_ms"]
      };
      this.backoffTimeout = new Oc.BackoffTimeout(() => {
        if (this.continueResolving) this.updateResolution(), this.continueResolving = !1; else this.updateState(this.latestChildState, this.latestChildPicker, this.latestChildErrorMessage);
      }, n), this.backoffTimeout.unref();
    }
    handleResolverResult(e, t, r, i) {
      var s, n;
      this.backoffTimeout.stop(), this.backoffTimeout.reset();
      let a = !0, o = null;
      if (r === null) o = this.defaultServiceConfig; else if (r.ok) o = r.value; else if (this.previousServiceConfig !== null) o = this.previousServiceConfig; else a = !1, 
      this.handleResolutionFailure(r.error);
      if (o !== null) {
        let l = (s = o === null || o === void 0 ? void 0 : o.loadBalancingConfig) !== null && s !== void 0 ? s : [], c = Rc.selectLbConfigFromList(l, !0);
        if (c === null) a = !1, this.handleResolutionFailure({
          code: xr.Status.UNAVAILABLE,
          details: "All load balancer options in service config are not compatible",
          metadata: new wc.Metadata
        }); else a = this.childLoadBalancer.updateAddressList(e, c, Object.assign(Object.assign({}, this.channelOptions), t), i);
      }
      if (a) this.onSuccessfulResolution(o, (n = t[us.CHANNEL_ARGS_CONFIG_SELECTOR_KEY]) !== null && n !== void 0 ? n : SS(o));
      return a;
    }
    updateResolution() {
      if (this.innerResolver.updateResolution(), this.currentState === V.ConnectivityState.IDLE) this.updateState(V.ConnectivityState.CONNECTING, this.latestChildPicker, this.latestChildErrorMessage);
      this.backoffTimeout.runOnce();
    }
    updateState(e, t, r) {
      if (Tc(Nc.uriToString(this.target) + " " + V.ConnectivityState[this.currentState] + " -> " + V.ConnectivityState[e]), 
      e === V.ConnectivityState.IDLE) t = new dt.QueuePicker(this, t);
      this.currentState = e, this.channelControlHelper.updateState(e, t, r);
    }
    handleResolutionFailure(e) {
      if (this.latestChildState === V.ConnectivityState.IDLE) this.updateState(V.ConnectivityState.TRANSIENT_FAILURE, new dt.UnavailablePicker(e), e.details), 
      this.onFailedResolution(e);
    }
    exitIdle() {
      if (this.currentState === V.ConnectivityState.IDLE || this.currentState === V.ConnectivityState.TRANSIENT_FAILURE) if (this.backoffTimeout.isRunning()) this.continueResolving = !0; else this.updateResolution();
      this.childLoadBalancer.exitIdle();
    }
    updateAddressList(e, t) {
      throw Error("updateAddressList not supported on ResolvingLoadBalancer");
    }
    resetBackoff() {
      this.backoffTimeout.reset(), this.childLoadBalancer.resetBackoff();
    }
    destroy() {
      this.childLoadBalancer.destroy(), this.innerResolver.destroy(), this.backoffTimeout.reset(), 
      this.backoffTimeout.stop(), this.latestChildState = V.ConnectivityState.IDLE, this.latestChildPicker = new dt.QueuePicker(this), 
      this.currentState = V.ConnectivityState.IDLE, this.previousServiceConfig = null, 
      this.continueResolving = !1;
    }
    getTypeName() {
      return "resolving_load_balancer";
    }
  }
  xc.ResolvingLoadBalancer = Ic;
});

var qc = C(function(Lc) {
  Object.defineProperty(Lc, "__esModule", {
    value: !0
  });
  Lc.recognizedOptions = void 0;
  Lc.channelOptionsEqual = CS;
  Lc.recognizedOptions = {
    "grpc.ssl_target_name_override": !0,
    "grpc.primary_user_agent": !0,
    "grpc.secondary_user_agent": !0,
    "grpc.default_authority": !0,
    "grpc.keepalive_time_ms": !0,
    "grpc.keepalive_timeout_ms": !0,
    "grpc.keepalive_permit_without_calls": !0,
    "grpc.service_config": !0,
    "grpc.max_concurrent_streams": !0,
    "grpc.initial_reconnect_backoff_ms": !0,
    "grpc.max_reconnect_backoff_ms": !0,
    "grpc.use_local_subchannel_pool": !0,
    "grpc.max_send_message_length": !0,
    "grpc.max_receive_message_length": !0,
    "grpc.enable_http_proxy": !0,
    "grpc.enable_channelz": !0,
    "grpc.dns_min_time_between_resolutions_ms": !0,
    "grpc.enable_retries": !0,
    "grpc.per_rpc_retry_buffer_size": !0,
    "grpc.retry_buffer_size": !0,
    "grpc.max_connection_age_ms": !0,
    "grpc.max_connection_age_grace_ms": !0,
    "grpc-node.max_session_memory": !0,
    "grpc.service_config_disable_resolution": !0,
    "grpc.client_idle_timeout_ms": !0,
    "grpc-node.tls_enable_trace": !0,
    "grpc.lb.ring_hash.ring_size_cap": !0,
    "grpc-node.retry_max_attempts_limit": !0,
    "grpc-node.flow_control_window": !0,
    "grpc.server_call_metric_recording": !0
  };
  function CS(e, t) {
    let r = Object.keys(e).sort(), i = Object.keys(t).sort();
    if (r.length !== i.length) return !1;
    for (let s = 0; s < r.length; s += 1) {
      if (r[s] !== i[s]) return !1;
      if (e[r[s]] !== t[i[s]]) return !1;
    }
    return !0;
  }
});

var Pe = C(function(Hc) {
  Object.defineProperty(Hc, "__esModule", {
    value: !0
  });
  Hc.EndpointMap = void 0;
  Hc.isTcpSubchannelAddress = Ri;
  Hc.subchannelAddressEqual = hs;
  Hc.subchannelAddressToString = Uc;
  Hc.stringToSubchannelAddress = RS;
  Hc.endpointEqual = bS;
  Hc.endpointToString = OS;
  Hc.endpointHasAddress = Bc;
  var ds = Ne("net");
  function Ri(e) {
    return "port" in e;
  }
  function hs(e, t) {
    if (!e && !t) return !0;
    if (!e || !t) return !1;
    if (Ri(e)) return Ri(t) && e.host === t.host && e.port === t.port; else return !Ri(t) && e.path === t.path;
  }
  function Uc(e) {
    if (Ri(e)) if (ds.isIPv6(e.host)) return "[" + e.host + "]:" + e.port; else return e.host + ":" + e.port; else return e.path;
  }
  var TS = 443;
  function RS(e, t) {
    if (ds.isIP(e)) return {
      host: e,
      port: t !== null && t !== void 0 ? t : TS
    }; else return {
      path: e
    };
  }
  function bS(e, t) {
    if (e.addresses.length !== t.addresses.length) return !1;
    for (let r = 0; r < e.addresses.length; r++) if (!hs(e.addresses[r], t.addresses[r])) return !1;
    return !0;
  }
  function OS(e) {
    return "[" + e.addresses.map(Uc).join(", ") + "]";
  }
  function Bc(e, t) {
    for (let r of e.addresses) if (hs(r, t)) return !0;
    return !1;
  }
  function Ti(e, t) {
    if (e.addresses.length !== t.addresses.length) return !1;
    for (let r of e.addresses) {
      let i = !1;
      for (let s of t.addresses) if (hs(r, s)) {
        i = !0;
        break;
      }
      if (!i) return !1;
    }
    return !0;
  }
  class zc {
    constructor() {
      this.map = new Set;
    }
    get size() {
      return this.map.size;
    }
    getForSubchannelAddress(e) {
      for (let t of this.map) if (Bc(t.key, e)) return t.value;
      return;
    }
    deleteMissing(e) {
      let t = [];
      for (let r of this.map) {
        let i = !1;
        for (let s of e) if (Ti(s, r.key)) i = !0;
        if (!i) t.push(r.value), this.map.delete(r);
      }
      return t;
    }
    get(e) {
      for (let t of this.map) if (Ti(e, t.key)) return t.value;
      return;
    }
    set(e, t) {
      for (let r of this.map) if (Ti(e, r.key)) {
        r.value = t;
        return;
      }
      this.map.add({
        key: e,
        value: t
      });
    }
    delete(e) {
      for (let t of this.map) if (Ti(e, t.key)) {
        this.map.delete(t);
        return;
      }
    }
    has(e) {
      for (let t of this.map) if (Ti(e, t.key)) return !0;
      return !1;
    }
    clear() {
      this.map.clear();
    }
    * keys() {
      for (let e of this.map) yield e.key;
    }
    * values() {
      for (let e of this.map) yield e.value;
    }
    * entries() {
      for (let e of this.map) yield [ e.key, e.value ];
    }
  }
  Hc.EndpointMap = zc;
});

var Qc = C(function(Xc) {
  Object.defineProperty(Xc, "t", {
    value: !0
  });
  class ya {
    constructor(e, t, r = 1) {
      this.i = void 0, this.h = void 0, this.o = void 0, this.u = e, this.l = t, this.p = r;
    }
    I() {
      let e = this, t = e.o.o === e;
      if (t && e.p === 1) e = e.h; else if (e.i) {
        e = e.i;
        while (e.h) e = e.h;
      } else {
        if (t) return e.o;
        let r = e.o;
        while (r.i === e) e = r, r = e.o;
        e = r;
      }
      return e;
    }
    B() {
      let e = this;
      if (e.h) {
        e = e.h;
        while (e.i) e = e.i;
        return e;
      } else {
        let t = e.o;
        while (t.h === e) e = t, t = e.o;
        if (e.h !== t) return t; else return e;
      }
    }
    _() {
      let e = this.o, t = this.h, r = t.i;
      if (e.o === this) e.o = t; else if (e.i === this) e.i = t; else e.h = t;
      if (t.o = e, t.i = this, this.o = t, this.h = r, r) r.o = this;
      return t;
    }
    g() {
      let e = this.o, t = this.i, r = t.h;
      if (e.o === this) e.o = t; else if (e.i === this) e.i = t; else e.h = t;
      if (t.o = e, t.h = this, this.o = t, this.i = r, r) r.o = this;
      return t;
    }
  }
  class jc extends ya {
    constructor() {
      super(...arguments);
      this.M = 1;
    }
    _() {
      let e = super._();
      return this.O(), e.O(), e;
    }
    g() {
      let e = super.g();
      return this.O(), e.O(), e;
    }
    O() {
      if (this.M = 1, this.i) this.M += this.i.M;
      if (this.h) this.M += this.h.M;
    }
  }
  class Gc {
    constructor(e = 0) {
      this.iteratorType = e;
    }
    equals(e) {
      return this.T === e.T;
    }
  }
  class $c {
    constructor() {
      this.m = 0;
    }
    get length() {
      return this.m;
    }
    size() {
      return this.m;
    }
    empty() {
      return this.m === 0;
    }
  }
  class Vc extends $c {}
  function mr() {
    throw RangeError("Iterator access denied!");
  }
  class Yc extends Vc {
    constructor(e = function(r, i) {
      if (r < i) return -1;
      if (r > i) return 1;
      return 0;
    }, t = !1) {
      super();
      this.v = void 0, this.A = e, this.enableIndex = t, this.N = t ? jc : ya, this.C = new this.N;
    }
    R(e, t) {
      let r = this.C;
      while (e) {
        let i = this.A(e.u, t);
        if (i < 0) e = e.h; else if (i > 0) r = e, e = e.i; else return e;
      }
      return r;
    }
    K(e, t) {
      let r = this.C;
      while (e) if (this.A(e.u, t) <= 0) e = e.h; else r = e, e = e.i;
      return r;
    }
    L(e, t) {
      let r = this.C;
      while (e) {
        let i = this.A(e.u, t);
        if (i < 0) r = e, e = e.h; else if (i > 0) e = e.i; else return e;
      }
      return r;
    }
    k(e, t) {
      let r = this.C;
      while (e) if (this.A(e.u, t) < 0) r = e, e = e.h; else e = e.i;
      return r;
    }
    P(e) {
      while (!0) {
        let t = e.o;
        if (t === this.C) return;
        if (e.p === 1) {
          e.p = 0;
          return;
        }
        if (e === t.i) {
          let r = t.h;
          if (r.p === 1) if (r.p = 0, t.p = 1, t === this.v) this.v = t._(); else t._(); else if (r.h && r.h.p === 1) {
            if (r.p = t.p, t.p = 0, r.h.p = 0, t === this.v) this.v = t._(); else t._();
            return;
          } else if (r.i && r.i.p === 1) r.p = 1, r.i.p = 0, r.g(); else r.p = 1, e = t;
        } else {
          let r = t.i;
          if (r.p === 1) if (r.p = 0, t.p = 1, t === this.v) this.v = t.g(); else t.g(); else if (r.i && r.i.p === 1) {
            if (r.p = t.p, t.p = 0, r.i.p = 0, t === this.v) this.v = t.g(); else t.g();
            return;
          } else if (r.h && r.h.p === 1) r.p = 1, r.h.p = 0, r._(); else r.p = 1, e = t;
        }
      }
    }
    S(e) {
      if (this.m === 1) {
        this.clear();
        return;
      }
      let t = e;
      while (t.i || t.h) {
        if (t.h) {
          t = t.h;
          while (t.i) t = t.i;
        } else t = t.i;
        let i = e.u;
        e.u = t.u, t.u = i;
        let s = e.l;
        e.l = t.l, t.l = s, e = t;
      }
      if (this.C.i === t) this.C.i = t.o; else if (this.C.h === t) this.C.h = t.o;
      this.P(t);
      let r = t.o;
      if (t === r.i) r.i = void 0; else r.h = void 0;
      if (this.m -= 1, this.v.p = 0, this.enableIndex) while (r !== this.C) r.M -= 1, 
      r = r.o;
    }
    U(e) {
      let t = typeof e === "number" ? e : void 0, r = typeof e === "function" ? e : void 0, i = typeof e > "u" ? [] : void 0, s = 0, n = this.v, a = [];
      while (a.length || n) if (n) a.push(n), n = n.i; else {
        if (n = a.pop(), s === t) return n;
        i && i.push(n), r && r(n, s, this), s += 1, n = n.h;
      }
      return i;
    }
    j(e) {
      while (!0) {
        let t = e.o;
        if (t.p === 0) return;
        let r = t.o;
        if (t === r.i) {
          let i = r.h;
          if (i && i.p === 1) {
            if (i.p = t.p = 0, r === this.v) return;
            r.p = 1, e = r;
            continue;
          } else if (e === t.h) {
            if (e.p = 0, e.i) e.i.o = t;
            if (e.h) e.h.o = r;
            if (t.h = e.i, r.i = e.h, e.i = t, e.h = r, r === this.v) this.v = e, this.C.o = e; else {
              let s = r.o;
              if (s.i === r) s.i = e; else s.h = e;
            }
            e.o = r.o, t.o = e, r.o = e, r.p = 1;
          } else {
            if (t.p = 0, r === this.v) this.v = r.g(); else r.g();
            r.p = 1;
            return;
          }
        } else {
          let i = r.i;
          if (i && i.p === 1) {
            if (i.p = t.p = 0, r === this.v) return;
            r.p = 1, e = r;
            continue;
          } else if (e === t.i) {
            if (e.p = 0, e.i) e.i.o = r;
            if (e.h) e.h.o = t;
            if (r.h = e.i, t.i = e.h, e.i = r, e.h = t, r === this.v) this.v = e, this.C.o = e; else {
              let s = r.o;
              if (s.i === r) s.i = e; else s.h = e;
            }
            e.o = r.o, t.o = e, r.o = e, r.p = 1;
          } else {
            if (t.p = 0, r === this.v) this.v = r._(); else r._();
            r.p = 1;
            return;
          }
        }
        if (this.enableIndex) t.O(), r.O(), e.O();
        return;
      }
    }
    q(e, t, r) {
      if (this.v === void 0) return this.m += 1, this.v = new this.N(e, t, 0), this.v.o = this.C, 
      this.C.o = this.C.i = this.C.h = this.v, this.m;
      let i, s = this.C.i, n = this.A(s.u, e);
      if (n === 0) return s.l = t, this.m; else if (n > 0) s.i = new this.N(e, t), s.i.o = s, 
      i = s.i, this.C.i = i; else {
        let a = this.C.h, o = this.A(a.u, e);
        if (o === 0) return a.l = t, this.m; else if (o < 0) a.h = new this.N(e, t), a.h.o = a, 
        i = a.h, this.C.h = i; else {
          if (r !== void 0) {
            let l = r.T;
            if (l !== this.C) {
              let c = this.A(l.u, e);
              if (c === 0) return l.l = t, this.m; else if (c > 0) {
                let u = l.I(), d = this.A(u.u, e);
                if (d === 0) return u.l = t, this.m; else if (d < 0) if (i = new this.N(e, t), u.h === void 0) u.h = i, 
                i.o = u; else l.i = i, i.o = l;
              }
            }
          }
          if (i === void 0) {
            i = this.v;
            while (!0) {
              let l = this.A(i.u, e);
              if (l > 0) {
                if (i.i === void 0) {
                  i.i = new this.N(e, t), i.i.o = i, i = i.i;
                  break;
                }
                i = i.i;
              } else if (l < 0) {
                if (i.h === void 0) {
                  i.h = new this.N(e, t), i.h.o = i, i = i.h;
                  break;
                }
                i = i.h;
              } else return i.l = t, this.m;
            }
          }
        }
      }
      if (this.enableIndex) {
        let a = i.o;
        while (a !== this.C) a.M += 1, a = a.o;
      }
      return this.j(i), this.m += 1, this.m;
    }
    H(e, t) {
      while (e) {
        let r = this.A(e.u, t);
        if (r < 0) e = e.h; else if (r > 0) e = e.i; else return e;
      }
      return e || this.C;
    }
    clear() {
      this.m = 0, this.v = void 0, this.C.o = void 0, this.C.i = this.C.h = void 0;
    }
    updateKeyByIterator(e, t) {
      let r = e.T;
      if (r === this.C) mr();
      if (this.m === 1) return r.u = t, !0;
      let i = r.B().u;
      if (r === this.C.i) {
        if (this.A(i, t) > 0) return r.u = t, !0;
        return !1;
      }
      let s = r.I().u;
      if (r === this.C.h) {
        if (this.A(s, t) < 0) return r.u = t, !0;
        return !1;
      }
      if (this.A(s, t) >= 0 || this.A(i, t) <= 0) return !1;
      return r.u = t, !0;
    }
    eraseElementByPos(e) {
      if (e < 0 || e > this.m - 1) throw RangeError();
      let t = this.U(e);
      return this.S(t), this.m;
    }
    eraseElementByKey(e) {
      if (this.m === 0) return !1;
      let t = this.H(this.v, e);
      if (t === this.C) return !1;
      return this.S(t), !0;
    }
    eraseElementByIterator(e) {
      let t = e.T;
      if (t === this.C) mr();
      let r = t.h === void 0;
      if (e.iteratorType === 0) {
        if (r) e.next();
      } else if (!r || t.i === void 0) e.next();
      return this.S(t), e;
    }
    getHeight() {
      if (this.m === 0) return 0;
      function e(t) {
        if (!t) return 0;
        return Math.max(e(t.i), e(t.h)) + 1;
      }
      return e(this.v);
    }
  }
  class Kc extends Gc {
    constructor(e, t, r) {
      super(r);
      if (this.T = e, this.C = t, this.iteratorType === 0) this.pre = function() {
        if (this.T === this.C.i) mr();
        return this.T = this.T.I(), this;
      }, this.next = function() {
        if (this.T === this.C) mr();
        return this.T = this.T.B(), this;
      }; else this.pre = function() {
        if (this.T === this.C.h) mr();
        return this.T = this.T.B(), this;
      }, this.next = function() {
        if (this.T === this.C) mr();
        return this.T = this.T.I(), this;
      };
    }
    get index() {
      let e = this.T, t = this.C.o;
      if (e === this.C) {
        if (t) return t.M - 1;
        return 0;
      }
      let r = 0;
      if (e.i) r += e.i.M;
      while (e !== t) {
        let i = e.o;
        if (e === i.h) {
          if (r += 1, i.i) r += i.i.M;
        }
        e = i;
      }
      return r;
    }
    isAccessible() {
      return this.T !== this.C;
    }
  }
  class it extends Kc {
    constructor(e, t, r, i) {
      super(e, t, i);
      this.container = r;
    }
    get pointer() {
      if (this.T === this.C) mr();
      let e = this;
      return new Proxy([], {
        get(t, r) {
          if (r === "0") return e.T.u; else if (r === "1") return e.T.l;
          return t[0] = e.T.u, t[1] = e.T.l, t[r];
        },
        set(t, r, i) {
          if (r !== "1") throw TypeError("prop must be 1");
          return e.T.l = i, !0;
        }
      });
    }
    copy() {
      return new it(this.T, this.C, this.container, this.iteratorType);
    }
  }
  class Jc extends Yc {
    constructor(e = [], t, r) {
      super(t, r);
      let i = this;
      e.forEach(function(s) {
        i.setElement(s[0], s[1]);
      });
    }
    begin() {
      return new it(this.C.i || this.C, this.C, this);
    }
    end() {
      return new it(this.C, this.C, this);
    }
    rBegin() {
      return new it(this.C.h || this.C, this.C, this, 1);
    }
    rEnd() {
      return new it(this.C, this.C, this, 1);
    }
    front() {
      if (this.m === 0) return;
      let e = this.C.i;
      return [ e.u, e.l ];
    }
    back() {
      if (this.m === 0) return;
      let e = this.C.h;
      return [ e.u, e.l ];
    }
    lowerBound(e) {
      let t = this.R(this.v, e);
      return new it(t, this.C, this);
    }
    upperBound(e) {
      let t = this.K(this.v, e);
      return new it(t, this.C, this);
    }
    reverseLowerBound(e) {
      let t = this.L(this.v, e);
      return new it(t, this.C, this);
    }
    reverseUpperBound(e) {
      let t = this.k(this.v, e);
      return new it(t, this.C, this);
    }
    forEach(e) {
      this.U(function(t, r, i) {
        e([ t.u, t.l ], r, i);
      });
    }
    setElement(e, t, r) {
      return this.q(e, t, r);
    }
    getElementByPos(e) {
      if (e < 0 || e > this.m - 1) throw RangeError();
      let t = this.U(e);
      return [ t.u, t.l ];
    }
    find(e) {
      let t = this.H(this.v, e);
      return new it(t, this.C, this);
    }
    getElementByKey(e) {
      return this.H(this.v, e).l;
    }
    union(e) {
      let t = this;
      return e.forEach(function(r) {
        t.setElement(r[0], r[1]);
      }), this.m;
    }
    * [Symbol.iterator]() {
      let e = this.m, t = this.U();
      for (let r = 0; r < e; ++r) {
        let i = t[r];
        yield [ i.u, i.l ];
      }
    }
  }
  Xc.OrderedMap = Jc;
});

var fs = C(function(eu) {
  Object.defineProperty(eu, "__esModule", {
    value: !0
  });
  eu.registerAdminService = DS;
  eu.addAdminServicesToServer = LS;
  var Zc = [];
  function DS(e, t) {
    Zc.push({
      getServiceDefinition: e,
      getHandlers: t
    });
  }
  function LS(e) {
    for (let {getServiceDefinition: t, getHandlers: r} of Zc) e.addService(t(), r());
  }
});

var lu = C(function(au) {
  Object.defineProperty(au, "__esModule", {
    value: !0
  });
  au.ClientDuplexStreamImpl = au.ClientWritableStreamImpl = au.ClientReadableStreamImpl = au.ClientUnaryCallImpl = void 0;
  au.callErrorFromStatus = US;
  var tu = Ne("events"), kr = Ne("stream"), ht = k();
  function US(e, t) {
    let r = `${e.code} ${ht.Status[e.code]}: ${e.details}`, s = `${Error(r).stack}\nfor call at\n${t}`;
    return Object.assign(Error(r), e, {
      stack: s
    });
  }
  class ru extends tu.EventEmitter {
    constructor() {
      super();
    }
    cancel() {
      var e;
      (e = this.call) === null || e === void 0 || e.cancelWithStatus(ht.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : "unknown";
    }
    getAuthContext() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getAuthContext()) !== null && t !== void 0 ? t : null;
    }
  }
  au.ClientUnaryCallImpl = ru;
  class iu extends kr.Readable {
    constructor(e) {
      super({
        objectMode: !0
      });
      this.deserialize = e;
    }
    cancel() {
      var e;
      (e = this.call) === null || e === void 0 || e.cancelWithStatus(ht.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : "unknown";
    }
    getAuthContext() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getAuthContext()) !== null && t !== void 0 ? t : null;
    }
    _read(e) {
      var t;
      (t = this.call) === null || t === void 0 || t.startRead();
    }
  }
  au.ClientReadableStreamImpl = iu;
  class su extends kr.Writable {
    constructor(e) {
      super({
        objectMode: !0
      });
      this.serialize = e;
    }
    cancel() {
      var e;
      (e = this.call) === null || e === void 0 || e.cancelWithStatus(ht.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : "unknown";
    }
    getAuthContext() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getAuthContext()) !== null && t !== void 0 ? t : null;
    }
    _write(e, t, r) {
      var i;
      let s = {
        callback: r
      }, n = Number(t);
      if (!Number.isNaN(n)) s.flags = n;
      (i = this.call) === null || i === void 0 || i.sendMessageWithContext(s, e);
    }
    _final(e) {
      var t;
      (t = this.call) === null || t === void 0 || t.halfClose(), e();
    }
  }
  au.ClientWritableStreamImpl = su;
  class nu extends kr.Duplex {
    constructor(e, t) {
      super({
        objectMode: !0
      });
      this.serialize = e, this.deserialize = t;
    }
    cancel() {
      var e;
      (e = this.call) === null || e === void 0 || e.cancelWithStatus(ht.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : "unknown";
    }
    getAuthContext() {
      var e, t;
      return (t = (e = this.call) === null || e === void 0 ? void 0 : e.getAuthContext()) !== null && t !== void 0 ? t : null;
    }
    _read(e) {
      var t;
      (t = this.call) === null || t === void 0 || t.startRead();
    }
    _write(e, t, r) {
      var i;
      let s = {
        callback: r
      }, n = Number(t);
      if (!Number.isNaN(n)) s.flags = n;
      (i = this.call) === null || i === void 0 || i.sendMessageWithContext(s, e);
    }
    _final(e) {
      var t;
      (t = this.call) === null || t === void 0 || t.halfClose(), e();
    }
  }
  au.ClientDuplexStreamImpl = nu;
});

var vr = C(function(du) {
  Object.defineProperty(du, "__esModule", {
    value: !0
  });
  du.InterceptingListenerImpl = void 0;
  du.statusOrFromValue = jS;
  du.statusOrFromError = GS;
  du.isInterceptingListener = $S;
  var cu = ue();
  function jS(e) {
    return {
      ok: !0,
      value: e
    };
  }
  function GS(e) {
    var t;
    return {
      ok: !1,
      error: Object.assign(Object.assign({}, e), {
        metadata: (t = e.metadata) !== null && t !== void 0 ? t : new cu.Metadata
      })
    };
  }
  function $S(e) {
    return e.onReceiveMetadata !== void 0 && e.onReceiveMetadata.length === 1;
  }
  class uu {
    constructor(e, t) {
      this.listener = e, this.nextListener = t, this.processingMetadata = !1, this.hasPendingMessage = !1, 
      this.processingMessage = !1, this.pendingStatus = null;
    }
    processPendingMessage() {
      if (this.hasPendingMessage) this.nextListener.onReceiveMessage(this.pendingMessage), 
      this.pendingMessage = null, this.hasPendingMessage = !1;
    }
    processPendingStatus() {
      if (this.pendingStatus) this.nextListener.onReceiveStatus(this.pendingStatus);
    }
    onReceiveMetadata(e) {
      this.processingMetadata = !0, this.listener.onReceiveMetadata(e, t => {
        this.processingMetadata = !1, this.nextListener.onReceiveMetadata(t), this.processPendingMessage(), 
        this.processPendingStatus();
      });
    }
    onReceiveMessage(e) {
      this.processingMessage = !0, this.listener.onReceiveMessage(e, t => {
        if (this.processingMessage = !1, this.processingMetadata) this.pendingMessage = t, 
        this.hasPendingMessage = !0; else this.nextListener.onReceiveMessage(t), this.processPendingStatus();
      });
    }
    onReceiveStatus(e) {
      this.listener.onReceiveStatus(e, t => {
        if (this.processingMetadata || this.processingMessage) this.pendingStatus = t; else this.nextListener.onReceiveStatus(t);
      });
    }
  }
  du.InterceptingListenerImpl = uu;
});

var Ca = C(function(_u) {
  Object.defineProperty(_u, "__esModule", {
    value: !0
  });
  _u.InterceptingCall = _u.RequesterBuilder = _u.ListenerBuilder = _u.InterceptorConfigurationError = void 0;
  _u.getInterceptingCall = QS;
  var fu = ue(), ps = vr(), gs = k(), ms = Qi();
  class Oi extends Error {
    constructor(e) {
      super(e);
      this.name = "InterceptorConfigurationError", Error.captureStackTrace(this, Oi);
    }
  }
  _u.InterceptorConfigurationError = Oi;
  class pu {
    constructor() {
      this.metadata = void 0, this.message = void 0, this.status = void 0;
    }
    withOnReceiveMetadata(e) {
      return this.metadata = e, this;
    }
    withOnReceiveMessage(e) {
      return this.message = e, this;
    }
    withOnReceiveStatus(e) {
      return this.status = e, this;
    }
    build() {
      return {
        onReceiveMetadata: this.metadata,
        onReceiveMessage: this.message,
        onReceiveStatus: this.status
      };
    }
  }
  _u.ListenerBuilder = pu;
  class gu {
    constructor() {
      this.start = void 0, this.message = void 0, this.halfClose = void 0, this.cancel = void 0;
    }
    withStart(e) {
      return this.start = e, this;
    }
    withSendMessage(e) {
      return this.message = e, this;
    }
    withHalfClose(e) {
      return this.halfClose = e, this;
    }
    withCancel(e) {
      return this.cancel = e, this;
    }
    build() {
      return {
        start: this.start,
        sendMessage: this.message,
        halfClose: this.halfClose,
        cancel: this.cancel
      };
    }
  }
  _u.RequesterBuilder = gu;
  var _a = {
    onReceiveMetadata: (e, t) => {
      t(e);
    },
    onReceiveMessage: (e, t) => {
      t(e);
    },
    onReceiveStatus: (e, t) => {
      t(e);
    }
  }, bi = {
    start: (e, t, r) => {
      r(e, t);
    },
    sendMessage: (e, t) => {
      t(e);
    },
    halfClose: e => {
      e();
    },
    cancel: e => {
      e();
    }
  };
  class mu {
    constructor(e, t) {
      var r, i, s, n;
      if (this.nextCall = e, this.processingMetadata = !1, this.pendingMessageContext = null, 
      this.processingMessage = !1, this.pendingHalfClose = !1, t) this.requester = {
        start: (r = t.start) !== null && r !== void 0 ? r : bi.start,
        sendMessage: (i = t.sendMessage) !== null && i !== void 0 ? i : bi.sendMessage,
        halfClose: (s = t.halfClose) !== null && s !== void 0 ? s : bi.halfClose,
        cancel: (n = t.cancel) !== null && n !== void 0 ? n : bi.cancel
      }; else this.requester = bi;
    }
    cancelWithStatus(e, t) {
      this.requester.cancel(() => {
        this.nextCall.cancelWithStatus(e, t);
      });
    }
    getPeer() {
      return this.nextCall.getPeer();
    }
    processPendingMessage() {
      if (this.pendingMessageContext) this.nextCall.sendMessageWithContext(this.pendingMessageContext, this.pendingMessage), 
      this.pendingMessageContext = null, this.pendingMessage = null;
    }
    processPendingHalfClose() {
      if (this.pendingHalfClose) this.nextCall.halfClose();
    }
    start(e, t) {
      var r, i, s, n, a, o;
      let l = {
        onReceiveMetadata: (i = (r = t === null || t === void 0 ? void 0 : t.onReceiveMetadata) === null || r === void 0 ? void 0 : r.bind(t)) !== null && i !== void 0 ? i : c => {},
        onReceiveMessage: (n = (s = t === null || t === void 0 ? void 0 : t.onReceiveMessage) === null || s === void 0 ? void 0 : s.bind(t)) !== null && n !== void 0 ? n : c => {},
        onReceiveStatus: (o = (a = t === null || t === void 0 ? void 0 : t.onReceiveStatus) === null || a === void 0 ? void 0 : a.bind(t)) !== null && o !== void 0 ? o : c => {}
      };
      this.processingMetadata = !0, this.requester.start(e, l, (c, u) => {
        var d, h, m;
        this.processingMetadata = !1;
        let f;
        if (ps.isInterceptingListener(u)) f = u; else {
          let y = {
            onReceiveMetadata: (d = u.onReceiveMetadata) !== null && d !== void 0 ? d : _a.onReceiveMetadata,
            onReceiveMessage: (h = u.onReceiveMessage) !== null && h !== void 0 ? h : _a.onReceiveMessage,
            onReceiveStatus: (m = u.onReceiveStatus) !== null && m !== void 0 ? m : _a.onReceiveStatus
          };
          f = new ps.InterceptingListenerImpl(y, l);
        }
        this.nextCall.start(c, f), this.processPendingMessage(), this.processPendingHalfClose();
      });
    }
    sendMessageWithContext(e, t) {
      this.processingMessage = !0, this.requester.sendMessage(t, r => {
        if (this.processingMessage = !1, this.processingMetadata) this.pendingMessageContext = e, 
        this.pendingMessage = t; else this.nextCall.sendMessageWithContext(e, r), this.processPendingHalfClose();
      });
    }
    sendMessage(e) {
      this.sendMessageWithContext({}, e);
    }
    startRead() {
      this.nextCall.startRead();
    }
    halfClose() {
      this.requester.halfClose(() => {
        if (this.processingMetadata || this.processingMessage) this.pendingHalfClose = !0; else this.nextCall.halfClose();
      });
    }
    getAuthContext() {
      return this.nextCall.getAuthContext();
    }
  }
  _u.InterceptingCall = mu;
  function JS(e, t, r) {
    var i, s;
    let n = (i = r.deadline) !== null && i !== void 0 ? i : 1 / 0, a = r.host, o = (s = r.parent) !== null && s !== void 0 ? s : null, {propagate_flags: l, credentials: c} = r, u = e.createCall(t, n, a, o, l);
    if (c) u.setCredentials(c);
    return u;
  }
  class Sa {
    constructor(e, t) {
      this.call = e, this.methodDefinition = t;
    }
    cancelWithStatus(e, t) {
      this.call.cancelWithStatus(e, t);
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMessageWithContext(e, t) {
      let r;
      try {
        r = this.methodDefinition.requestSerialize(t);
      } catch (i) {
        this.call.cancelWithStatus(gs.Status.INTERNAL, `Request message serialization failure: ${ms.getErrorMessage(i)}`);
        return;
      }
      this.call.sendMessageWithContext(e, r);
    }
    sendMessage(e) {
      this.sendMessageWithContext({}, e);
    }
    start(e, t) {
      let r = null;
      this.call.start(e, {
        onReceiveMetadata: i => {
          var s;
          (s = t === null || t === void 0 ? void 0 : t.onReceiveMetadata) === null || s === void 0 || s.call(t, i);
        },
        onReceiveMessage: i => {
          var s;
          let n;
          try {
            n = this.methodDefinition.responseDeserialize(i);
          } catch (a) {
            r = {
              code: gs.Status.INTERNAL,
              details: `Response message parsing error: ${ms.getErrorMessage(a)}`,
              metadata: new fu.Metadata
            }, this.call.cancelWithStatus(r.code, r.details);
            return;
          }
          (s = t === null || t === void 0 ? void 0 : t.onReceiveMessage) === null || s === void 0 || s.call(t, n);
        },
        onReceiveStatus: i => {
          var s, n;
          if (r) (s = t === null || t === void 0 ? void 0 : t.onReceiveStatus) === null || s === void 0 || s.call(t, r); else (n = t === null || t === void 0 ? void 0 : t.onReceiveStatus) === null || n === void 0 || n.call(t, i);
        }
      });
    }
    startRead() {
      this.call.startRead();
    }
    halfClose() {
      this.call.halfClose();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
  }
  class vu extends Sa {
    constructor(e, t) {
      super(e, t);
    }
    start(e, t) {
      var r, i;
      let s = !1, n = {
        onReceiveMetadata: (i = (r = t === null || t === void 0 ? void 0 : t.onReceiveMetadata) === null || r === void 0 ? void 0 : r.bind(t)) !== null && i !== void 0 ? i : a => {},
        onReceiveMessage: a => {
          var o;
          s = !0, (o = t === null || t === void 0 ? void 0 : t.onReceiveMessage) === null || o === void 0 || o.call(t, a);
        },
        onReceiveStatus: a => {
          var o, l;
          if (!s) (o = t === null || t === void 0 ? void 0 : t.onReceiveMessage) === null || o === void 0 || o.call(t, null);
          (l = t === null || t === void 0 ? void 0 : t.onReceiveStatus) === null || l === void 0 || l.call(t, a);
        }
      };
      super.start(e, n), this.call.startRead();
    }
  }
  class yu extends Sa {}
  function XS(e, t, r) {
    let i = JS(e, r.path, t);
    if (r.responseStream) return new yu(i, r); else return new vu(i, r);
  }
  function QS(e, t, r, i) {
    if (e.clientInterceptors.length > 0 && e.clientInterceptorProviders.length > 0) throw new Oi("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
    if (e.callInterceptors.length > 0 && e.callInterceptorProviders.length > 0) throw new Oi("Both interceptors and interceptor_providers were passed as call options. Only one of these is allowed.");
    let s = [];
    if (e.callInterceptors.length > 0 || e.callInterceptorProviders.length > 0) s = [].concat(e.callInterceptors, e.callInterceptorProviders.map(o => o(t))).filter(o => o); else s = [].concat(e.clientInterceptors, e.clientInterceptorProviders.map(o => o(t))).filter(o => o);
    let n = Object.assign({}, r, {
      method_definition: t
    });
    return s.reduceRight((o, l) => c => l(c, o), o => XS(i, o, t))(n);
  }
});

var Ta = C(function(Ru) {
  Object.defineProperty(Ru, "__esModule", {
    value: !0
  });
  Ru.Client = void 0;
  var ie = lu(), Cu = Ra(), Eu = Ae(), Se = k(), ze = ue(), Vt = Ca(), st = Symbol(), Dr = Symbol(), Lr = Symbol(), Dt = Symbol();
  function Ea(e) {
    return typeof e === "function";
  }
  function Fr(e) {
    var t;
    return ((t = e.stack) === null || t === void 0 ? void 0 : t.split(`\n`).slice(1).join(`\n`)) || "no stack trace available";
  }
  class Tu {
    constructor(e, t, r = {}) {
      var i, s;
      if (r = Object.assign({}, r), this[Dr] = (i = r.interceptors) !== null && i !== void 0 ? i : [], 
      delete r.interceptors, this[Lr] = (s = r.interceptor_providers) !== null && s !== void 0 ? s : [], 
      delete r.interceptor_providers, this[Dr].length > 0 && this[Lr].length > 0) throw Error("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
      if (this[Dt] = r.callInvocationTransformer, delete r.callInvocationTransformer, 
      r.channelOverride) this[st] = r.channelOverride; else if (r.channelFactoryOverride) {
        let n = r.channelFactoryOverride;
        delete r.channelFactoryOverride, this[st] = n(e, t, r);
      } else this[st] = new Cu.ChannelImplementation(e, t, r);
    }
    close() {
      this[st].close();
    }
    getChannel() {
      return this[st];
    }
    waitForReady(e, t) {
      let r = i => {
        if (i) {
          t(Error("Failed to connect before the deadline"));
          return;
        }
        let s;
        try {
          s = this[st].getConnectivityState(!0);
        } catch (n) {
          t(Error("The channel has been closed"));
          return;
        }
        if (s === Eu.ConnectivityState.READY) t(); else try {
          this[st].watchConnectivityState(s, e, r);
        } catch (n) {
          t(Error("The channel has been closed"));
        }
      };
      setImmediate(r);
    }
    checkOptionalUnaryResponseArguments(e, t, r) {
      if (Ea(e)) return {
        metadata: new ze.Metadata,
        options: {},
        callback: e
      }; else if (Ea(t)) if (e instanceof ze.Metadata) return {
        metadata: e,
        options: {},
        callback: t
      }; else return {
        metadata: new ze.Metadata,
        options: e,
        callback: t
      }; else {
        if (!(e instanceof ze.Metadata && t instanceof Object && Ea(r))) throw Error("Incorrect arguments passed");
        return {
          metadata: e,
          options: t,
          callback: r
        };
      }
    }
    makeUnaryRequest(e, t, r, i, s, n, a) {
      var o, l;
      let c = this.checkOptionalUnaryResponseArguments(s, n, a), u = {
        path: e,
        requestStream: !1,
        responseStream: !1,
        requestSerialize: t,
        responseDeserialize: r
      }, d = {
        argument: i,
        metadata: c.metadata,
        call: new ie.ClientUnaryCallImpl,
        channel: this[st],
        methodDefinition: u,
        callOptions: c.options,
        callback: c.callback
      };
      if (this[Dt]) d = this[Dt](d);
      let h = d.call, m = {
        clientInterceptors: this[Dr],
        clientInterceptorProviders: this[Lr],
        callInterceptors: (o = d.callOptions.interceptors) !== null && o !== void 0 ? o : [],
        callInterceptorProviders: (l = d.callOptions.interceptor_providers) !== null && l !== void 0 ? l : []
      }, f = Vt.getInterceptingCall(m, d.methodDefinition, d.callOptions, d.channel);
      h.call = f;
      let y = null, E = !1, T = Error();
      return f.start(d.metadata, {
        onReceiveMetadata: P => {
          h.emit("metadata", P);
        },
        onReceiveMessage(P) {
          if (y !== null) f.cancelWithStatus(Se.Status.UNIMPLEMENTED, "Too many responses received");
          y = P;
        },
        onReceiveStatus(P) {
          if (E) return;
          if (E = !0, P.code === Se.Status.OK) if (y === null) {
            let te = Fr(T);
            d.callback(ie.callErrorFromStatus({
              code: Se.Status.UNIMPLEMENTED,
              details: "No message received",
              metadata: P.metadata
            }, te));
          } else d.callback(null, y); else {
            let te = Fr(T);
            d.callback(ie.callErrorFromStatus(P, te));
          }
          T = null, h.emit("status", P);
        }
      }), f.sendMessage(i), f.halfClose(), h;
    }
    makeClientStreamRequest(e, t, r, i, s, n) {
      var a, o;
      let l = this.checkOptionalUnaryResponseArguments(i, s, n), c = {
        path: e,
        requestStream: !0,
        responseStream: !1,
        requestSerialize: t,
        responseDeserialize: r
      }, u = {
        metadata: l.metadata,
        call: new ie.ClientWritableStreamImpl(t),
        channel: this[st],
        methodDefinition: c,
        callOptions: l.options,
        callback: l.callback
      };
      if (this[Dt]) u = this[Dt](u);
      let d = u.call, h = {
        clientInterceptors: this[Dr],
        clientInterceptorProviders: this[Lr],
        callInterceptors: (a = u.callOptions.interceptors) !== null && a !== void 0 ? a : [],
        callInterceptorProviders: (o = u.callOptions.interceptor_providers) !== null && o !== void 0 ? o : []
      }, m = Vt.getInterceptingCall(h, u.methodDefinition, u.callOptions, u.channel);
      d.call = m;
      let f = null, y = !1, E = Error();
      return m.start(u.metadata, {
        onReceiveMetadata: T => {
          d.emit("metadata", T);
        },
        onReceiveMessage(T) {
          if (f !== null) m.cancelWithStatus(Se.Status.UNIMPLEMENTED, "Too many responses received");
          f = T, m.startRead();
        },
        onReceiveStatus(T) {
          if (y) return;
          if (y = !0, T.code === Se.Status.OK) if (f === null) {
            let P = Fr(E);
            u.callback(ie.callErrorFromStatus({
              code: Se.Status.UNIMPLEMENTED,
              details: "No message received",
              metadata: T.metadata
            }, P));
          } else u.callback(null, f); else {
            let P = Fr(E);
            u.callback(ie.callErrorFromStatus(T, P));
          }
          E = null, d.emit("status", T);
        }
      }), d;
    }
    checkMetadataAndOptions(e, t) {
      let r, i;
      if (e instanceof ze.Metadata) if (r = e, t) i = t; else i = {}; else {
        if (e) i = e; else i = {};
        r = new ze.Metadata;
      }
      return {
        metadata: r,
        options: i
      };
    }
    makeServerStreamRequest(e, t, r, i, s, n) {
      var a, o;
      let l = this.checkMetadataAndOptions(s, n), c = {
        path: e,
        requestStream: !1,
        responseStream: !0,
        requestSerialize: t,
        responseDeserialize: r
      }, u = {
        argument: i,
        metadata: l.metadata,
        call: new ie.ClientReadableStreamImpl(r),
        channel: this[st],
        methodDefinition: c,
        callOptions: l.options
      };
      if (this[Dt]) u = this[Dt](u);
      let d = u.call, h = {
        clientInterceptors: this[Dr],
        clientInterceptorProviders: this[Lr],
        callInterceptors: (a = u.callOptions.interceptors) !== null && a !== void 0 ? a : [],
        callInterceptorProviders: (o = u.callOptions.interceptor_providers) !== null && o !== void 0 ? o : []
      }, m = Vt.getInterceptingCall(h, u.methodDefinition, u.callOptions, u.channel);
      d.call = m;
      let f = !1, y = Error();
      return m.start(u.metadata, {
        onReceiveMetadata(E) {
          d.emit("metadata", E);
        },
        onReceiveMessage(E) {
          d.push(E);
        },
        onReceiveStatus(E) {
          if (f) return;
          if (f = !0, d.push(null), E.code !== Se.Status.OK) {
            let T = Fr(y);
            d.emit("error", ie.callErrorFromStatus(E, T));
          }
          y = null, d.emit("status", E);
        }
      }), m.sendMessage(i), m.halfClose(), d;
    }
    makeBidiStreamRequest(e, t, r, i, s) {
      var n, a;
      let o = this.checkMetadataAndOptions(i, s), l = {
        path: e,
        requestStream: !0,
        responseStream: !0,
        requestSerialize: t,
        responseDeserialize: r
      }, c = {
        metadata: o.metadata,
        call: new ie.ClientDuplexStreamImpl(t, r),
        channel: this[st],
        methodDefinition: l,
        callOptions: o.options
      };
      if (this[Dt]) c = this[Dt](c);
      let u = c.call, d = {
        clientInterceptors: this[Dr],
        clientInterceptorProviders: this[Lr],
        callInterceptors: (n = c.callOptions.interceptors) !== null && n !== void 0 ? n : [],
        callInterceptorProviders: (a = c.callOptions.interceptor_providers) !== null && a !== void 0 ? a : []
      }, h = Vt.getInterceptingCall(d, c.methodDefinition, c.callOptions, c.channel);
      u.call = h;
      let m = !1, f = Error();
      return h.start(c.metadata, {
        onReceiveMetadata(y) {
          u.emit("metadata", y);
        },
        onReceiveMessage(y) {
          u.push(y);
        },
        onReceiveStatus(y) {
          if (m) return;
          if (m = !0, u.push(null), y.code !== Se.Status.OK) {
            let E = Fr(f);
            u.emit("error", ie.callErrorFromStatus(y, E));
          }
          f = null, u.emit("status", y);
        }
      }), u;
    }
  }
  Ru.Client = Tu;
});

var vs = C(function(wu) {
  Object.defineProperty(wu, "__esModule", {
    value: !0
  });
  wu.makeClientConstructor = Ou;
  wu.loadPackageDefinition = aC;
  var ft = Ta(), iC = {
    unary: ft.Client.prototype.makeUnaryRequest,
    server_stream: ft.Client.prototype.makeServerStreamRequest,
    client_stream: ft.Client.prototype.makeClientStreamRequest,
    bidi: ft.Client.prototype.makeBidiStreamRequest
  };
  function ba(e) {
    return [ "__proto__", "prototype", "constructor" ].includes(e);
  }
  function Ou(e, t, r) {
    if (!r) r = {};
    class i extends ft.Client {}
    return Object.keys(e).forEach(s => {
      if (ba(s)) return;
      let n = e[s], a;
      if (typeof s === "string" && s.charAt(0) === "$") throw Error("Method names cannot start with $");
      if (n.requestStream) if (n.responseStream) a = "bidi"; else a = "client_stream"; else if (n.responseStream) a = "server_stream"; else a = "unary";
      let {requestSerialize: o, responseDeserialize: l} = n, c = sC(iC[a], n.path, o, l);
      if (i.prototype[s] = c, Object.assign(i.prototype[s], n), n.originalName && !ba(n.originalName)) i.prototype[n.originalName] = i.prototype[s];
    }), i.service = e, i.serviceName = t, i;
  }
  function sC(e, t, r, i) {
    return function(...s) {
      return e.call(this, t, r, i, ...s);
    };
  }
  function nC(e) {
    return "format" in e;
  }
  function aC(e) {
    let t = {};
    for (let r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
      let i = e[r], s = r.split(".");
      if (s.some(o => ba(o))) continue;
      let n = s[s.length - 1], a = t;
      for (let o of s.slice(0, -1)) {
        if (!a[o]) a[o] = {};
        a = a[o];
      }
      if (nC(i)) a[n] = i; else a[n] = Ou(i, n, {});
    }
    return t;
  }
});

var Qu = C(function(Qw, Xu) {
  var cC = 1 / 0, uC = "[object Symbol]", dC = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, hC = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, _s = "\\ud800-\\udfff", Du = "\\u0300-\\u036f\\ufe20-\\ufe23", Lu = "\\u20d0-\\u20f0", Fu = "\\u2700-\\u27bf", qu = "a-z\\xdf-\\xf6\\xf8-\\xff", fC = "\\xac\\xb1\\xd7\\xf7", pC = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", gC = "\\u2000-\\u206f", mC = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Uu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Bu = "\\ufe0e\\ufe0f", zu = fC + pC + gC + mC, wa = "['\u2019]", vC = "[" + _s + "]", Au = "[" + zu + "]", ys = "[" + Du + Lu + "]", Hu = "\\d+", yC = "[" + Fu + "]", Wu = "[" + qu + "]", ju = "[^" + _s + zu + Hu + Fu + qu + Uu + "]", Oa = "\\ud83c[\\udffb-\\udfff]", _C = "(?:" + ys + "|" + Oa + ")", Gu = "[^" + _s + "]", Aa = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pa = "[\\ud800-\\udbff][\\udc00-\\udfff]", qr = "[" + Uu + "]", $u = "\\u200d", Pu = "(?:" + Wu + "|" + ju + ")", SC = "(?:" + qr + "|" + ju + ")", Nu = "(?:" + wa + "(?:d|ll|m|re|s|t|ve))?", Mu = "(?:" + wa + "(?:D|LL|M|RE|S|T|VE))?", Vu = _C + "?", Yu = "[" + Bu + "]?", CC = "(?:" + $u + "(?:" + [ Gu, Aa, Pa ].join("|") + ")" + Yu + Vu + ")*", Ku = Yu + Vu + CC, EC = "(?:" + [ yC, Aa, Pa ].join("|") + ")" + Ku, TC = "(?:" + [ Gu + ys + "?", ys, Aa, Pa, vC ].join("|") + ")", RC = RegExp(wa, "g"), bC = RegExp(ys, "g"), OC = RegExp(Oa + "(?=" + Oa + ")|" + TC + Ku, "g"), wC = RegExp([ qr + "?" + Wu + "+" + Nu + "(?=" + [ Au, qr, "$" ].join("|") + ")", SC + "+" + Mu + "(?=" + [ Au, qr + Pu, "$" ].join("|") + ")", qr + "?" + Pu + "+" + Nu, qr + "+" + Mu, Hu, EC ].join("|"), "g"), AC = RegExp("[" + $u + _s + Du + Lu + Bu + "]"), PC = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, NC = {
    "\xc0": "A",
    "\xc1": "A",
    "\xc2": "A",
    "\xc3": "A",
    "\xc4": "A",
    "\xc5": "A",
    "\xe0": "a",
    "\xe1": "a",
    "\xe2": "a",
    "\xe3": "a",
    "\xe4": "a",
    "\xe5": "a",
    "\xc7": "C",
    "\xe7": "c",
    "\xd0": "D",
    "\xf0": "d",
    "\xc8": "E",
    "\xc9": "E",
    "\xca": "E",
    "\xcb": "E",
    "\xe8": "e",
    "\xe9": "e",
    "\xea": "e",
    "\xeb": "e",
    "\xcc": "I",
    "\xcd": "I",
    "\xce": "I",
    "\xcf": "I",
    "\xec": "i",
    "\xed": "i",
    "\xee": "i",
    "\xef": "i",
    "\xd1": "N",
    "\xf1": "n",
    "\xd2": "O",
    "\xd3": "O",
    "\xd4": "O",
    "\xd5": "O",
    "\xd6": "O",
    "\xd8": "O",
    "\xf2": "o",
    "\xf3": "o",
    "\xf4": "o",
    "\xf5": "o",
    "\xf6": "o",
    "\xf8": "o",
    "\xd9": "U",
    "\xda": "U",
    "\xdb": "U",
    "\xdc": "U",
    "\xf9": "u",
    "\xfa": "u",
    "\xfb": "u",
    "\xfc": "u",
    "\xdd": "Y",
    "\xfd": "y",
    "\xff": "y",
    "\xc6": "Ae",
    "\xe6": "ae",
    "\xde": "Th",
    "\xfe": "th",
    "\xdf": "ss",
    "\u0100": "A",
    "\u0102": "A",
    "\u0104": "A",
    "\u0101": "a",
    "\u0103": "a",
    "\u0105": "a",
    "\u0106": "C",
    "\u0108": "C",
    "\u010a": "C",
    "\u010c": "C",
    "\u0107": "c",
    "\u0109": "c",
    "\u010b": "c",
    "\u010d": "c",
    "\u010e": "D",
    "\u0110": "D",
    "\u010f": "d",
    "\u0111": "d",
    "\u0112": "E",
    "\u0114": "E",
    "\u0116": "E",
    "\u0118": "E",
    "\u011a": "E",
    "\u0113": "e",
    "\u0115": "e",
    "\u0117": "e",
    "\u0119": "e",
    "\u011b": "e",
    "\u011c": "G",
    "\u011e": "G",
    "\u0120": "G",
    "\u0122": "G",
    "\u011d": "g",
    "\u011f": "g",
    "\u0121": "g",
    "\u0123": "g",
    "\u0124": "H",
    "\u0126": "H",
    "\u0125": "h",
    "\u0127": "h",
    "\u0128": "I",
    "\u012a": "I",
    "\u012c": "I",
    "\u012e": "I",
    "\u0130": "I",
    "\u0129": "i",
    "\u012b": "i",
    "\u012d": "i",
    "\u012f": "i",
    "\u0131": "i",
    "\u0134": "J",
    "\u0135": "j",
    "\u0136": "K",
    "\u0137": "k",
    "\u0138": "k",
    "\u0139": "L",
    "\u013b": "L",
    "\u013d": "L",
    "\u013f": "L",
    "\u0141": "L",
    "\u013a": "l",
    "\u013c": "l",
    "\u013e": "l",
    "\u0140": "l",
    "\u0142": "l",
    "\u0143": "N",
    "\u0145": "N",
    "\u0147": "N",
    "\u014a": "N",
    "\u0144": "n",
    "\u0146": "n",
    "\u0148": "n",
    "\u014b": "n",
    "\u014c": "O",
    "\u014e": "O",
    "\u0150": "O",
    "\u014d": "o",
    "\u014f": "o",
    "\u0151": "o",
    "\u0154": "R",
    "\u0156": "R",
    "\u0158": "R",
    "\u0155": "r",
    "\u0157": "r",
    "\u0159": "r",
    "\u015a": "S",
    "\u015c": "S",
    "\u015e": "S",
    "\u0160": "S",
    "\u015b": "s",
    "\u015d": "s",
    "\u015f": "s",
    "\u0161": "s",
    "\u0162": "T",
    "\u0164": "T",
    "\u0166": "T",
    "\u0163": "t",
    "\u0165": "t",
    "\u0167": "t",
    "\u0168": "U",
    "\u016a": "U",
    "\u016c": "U",
    "\u016e": "U",
    "\u0170": "U",
    "\u0172": "U",
    "\u0169": "u",
    "\u016b": "u",
    "\u016d": "u",
    "\u016f": "u",
    "\u0171": "u",
    "\u0173": "u",
    "\u0174": "W",
    "\u0175": "w",
    "\u0176": "Y",
    "\u0177": "y",
    "\u0178": "Y",
    "\u0179": "Z",
    "\u017b": "Z",
    "\u017d": "Z",
    "\u017a": "z",
    "\u017c": "z",
    "\u017e": "z",
    "\u0132": "IJ",
    "\u0133": "ij",
    "\u0152": "Oe",
    "\u0153": "oe",
    "\u0149": "'n",
    "\u017f": "ss"
  }, MC = typeof global == "object" && global && global.Object === Object && global, IC = typeof self == "object" && self && self.Object === Object && self, xC = MC || IC || Function("return this")();
  function kC(e, t, r, i) {
    var s = -1, n = e ? e.length : 0;
    if (i && n) r = e[++s];
    while (++s < n) r = t(r, e[s], s, e);
    return r;
  }
  function DC(e) {
    return e.split("");
  }
  function LC(e) {
    return e.match(dC) || [];
  }
  function FC(e) {
    return function(t) {
      return e == null ? void 0 : e[t];
    };
  }
  var qC = FC(NC);
  function Ju(e) {
    return AC.test(e);
  }
  function UC(e) {
    return PC.test(e);
  }
  function BC(e) {
    return Ju(e) ? zC(e) : DC(e);
  }
  function zC(e) {
    return e.match(OC) || [];
  }
  function HC(e) {
    return e.match(wC) || [];
  }
  var WC = Object.prototype, jC = WC.toString, Iu = xC.Symbol, xu = Iu ? Iu.prototype : void 0, ku = xu ? xu.toString : void 0;
  function GC(e, t, r) {
    var i = -1, s = e.length;
    if (t < 0) t = -t > s ? 0 : s + t;
    if (r = r > s ? s : r, r < 0) r += s;
    s = t > r ? 0 : r - t >>> 0, t >>>= 0;
    var n = Array(s);
    while (++i < s) n[i] = e[i + t];
    return n;
  }
  function $C(e) {
    if (typeof e == "string") return e;
    if (XC(e)) return ku ? ku.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -cC ? "-0" : t;
  }
  function VC(e, t, r) {
    var i = e.length;
    return r = r === void 0 ? i : r, !t && r >= i ? e : GC(e, t, r);
  }
  function YC(e) {
    return function(t) {
      t = Ss(t);
      var r = Ju(t) ? BC(t) : void 0, i = r ? r[0] : t.charAt(0), s = r ? VC(r, 1).join("") : t.slice(1);
      return i[e]() + s;
    };
  }
  function KC(e) {
    return function(t) {
      return kC(rE(eE(t).replace(RC, "")), e, "");
    };
  }
  function JC(e) {
    return !!e && typeof e == "object";
  }
  function XC(e) {
    return typeof e == "symbol" || JC(e) && jC.call(e) == uC;
  }
  function Ss(e) {
    return e == null ? "" : $C(e);
  }
  var QC = KC(function(e, t, r) {
    return t = t.toLowerCase(), e + (r ? ZC(t) : t);
  });
  function ZC(e) {
    return tE(Ss(e).toLowerCase());
  }
  function eE(e) {
    return e = Ss(e), e && e.replace(hC, qC).replace(bC, "");
  }
  var tE = YC("toUpperCase");
  function rE(e, t, r) {
    if (e = Ss(e), t = r ? void 0 : t, t === void 0) return UC(e) ? HC(e) : LC(e);
    return e.match(t) || [];
  }
  Xu.exports = QC;
});

var ed = C(function(Zw, Zu) {
  Zu.exports = Na;
  var iE = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
  function Na(e, t) {
    if (typeof e === "string") t = e, e = void 0;
    var r = [];
    function i(n) {
      if (typeof n !== "string") {
        var a = s();
        if (Na.verbose) console.log("codegen: " + a);
        if (a = "return " + a, n) {
          var o = Object.keys(n), l = Array(o.length + 1), c = Array(o.length), u = 0;
          while (u < o.length) l[u] = o[u], c[u] = n[o[u++]];
          return l[u] = a, Function.apply(null, l).apply(null, c);
        }
        return Function(a)();
      }
      var d = Array(arguments.length - 1), h = 0;
      while (h < d.length) d[h] = arguments[++h];
      if (h = 0, n = n.replace(/%([%dfijs])/g, function(f, y) {
        var E = d[h++];
        switch (y) {
         case "d":
         case "f":
          return String(Number(E));

         case "i":
          return String(Math.floor(E));

         case "j":
          return JSON.stringify(E);

         case "s":
          return String(E);
        }
        return "%";
      }), h !== d.length) throw Error("parameter count mismatch");
      return r.push(n), i;
    }
    function s(n) {
      return "function " + sE(n || t) + "(" + (e && e.join(",") || "") + `){\n  ` + r.join(`\n  `) + `\n}`;
    }
    return i.toString = s, i;
  }
  Na.verbose = !1;
  function sE(e) {
    if (!e) return "";
    if (e = String(e).replace(/[^\w$]/g, ""), !e) return "";
    if (/^\d/.test(e)) e = "_" + e;
    return iE.test(e) ? e + "_" : e;
  }
});

var td = C(function(exports, module) {
  module.exports = inquire;
  function inquire(moduleName) {
    try {
      var mod = moduleName === "long" ? Ser() : moduleName === "buffer" ? Ne("buffer") : moduleName === "fs" ? Ne("fs") : eval("quire".replace(/^/, "re"))(moduleName);
      if (mod && (mod.length || Object.keys(mod).length)) return mod;
    } catch (e) {}
    return null;
  }
});

var id = C(function(eA, rd) {
  rd.exports = wi;
  var nE = rqr(), aE = td(), Ma = aE("fs");
  function wi(e, t, r) {
    if (typeof t === "function") r = t, t = {}; else if (!t) t = {};
    if (!r) return nE(wi, this, e, t);
    if (!t.xhr && Ma && Ma.readFile) return Ma.readFile(e, function(s, n) {
      return s && typeof XMLHttpRequest < "u" ? wi.xhr(e, t, r) : s ? r(s) : r(null, t.binary ? n : n.toString("utf8"));
    });
    return wi.xhr(e, t, r);
  }
  wi.xhr = function(t, r, i) {
    var s = new XMLHttpRequest;
    if (s.onreadystatechange = function() {
      if (s.readyState !== 4) return;
      if (s.status !== 0 && s.status !== 200) return i(Error("status " + s.status));
      if (r.binary) {
        var a = s.response;
        if (!a) {
          a = [];
          for (var o = 0; o < s.responseText.length; ++o) a.push(s.responseText.charCodeAt(o) & 255);
        }
        return i(null, typeof Uint8Array < "u" ? new Uint8Array(a) : a);
      }
      return i(null, s.responseText);
    }, r.binary) {
      if ("overrideMimeType" in s) s.overrideMimeType("text/plain; charset=x-user-defined");
      s.responseType = "arraybuffer";
    }
    s.open("GET", t), s.send();
  };
});

var ad = C(function(nd) {
  var xa = nd, sd = xa.isAbsolute = function(t) {
    return /^(?:\/|\w+:)/.test(t);
  }, Ia = xa.normalize = function(t) {
    t = t.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
    var r = t.split("/"), i = sd(t), s = "";
    if (i) s = r.shift() + "/";
    for (var n = 0; n < r.length; ) if (r[n] === "..") if (n > 0 && r[n - 1] !== "..") r.splice(--n, 2); else if (i) r.splice(n, 1); else ++n; else if (r[n] === ".") r.splice(n, 1); else ++n;
    return s + r.join("/");
  };
  xa.resolve = function(t, r, i) {
    if (!i) r = Ia(r);
    if (sd(r)) return r;
    if (!i) t = Ia(t);
    return (t = t.replace(/(?:\/|^)[^/]+$/, "")).length ? Ia(t + "/" + r) : r;
  };
});

var ld = C(function(od) {
  var Cs = od;
  Cs.numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
  Cs.typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
  Cs.reservedRe = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
  Cs.unsafePropertyRe = /^(?:__proto__|prototype|constructor)$/;
});

var zr = C(function(iA, dd) {
  dd.exports = B;
  var Es = Kt();
  ((B.prototype = Object.create(Es.prototype)).constructor = B).className = "Namespace";
  var ka = Yt(), Br = de(), oE = Sr(), yr, Ur, _r;
  B.fromJSON = function(t, r, i) {
    return i = Br.checkDepth(i), new B(t, r.options).addJSON(r.nested, i);
  };
  function cd(e, t) {
    if (!(e && e.length)) return;
    var r = {};
    for (var i = 0; i < e.length; ++i) r[e[i].name] = e[i].toJSON(t);
    return r;
  }
  B.arrayToJSON = cd;
  B.isReservedId = function(t, r) {
    if (t) {
      for (var i = 0; i < t.length; ++i) if (typeof t[i] !== "string" && t[i][0] <= r && t[i][1] > r) return !0;
    }
    return !1;
  };
  B.isReservedName = function(t, r) {
    if (t) {
      for (var i = 0; i < t.length; ++i) if (t[i] === r) return !0;
    }
    return !1;
  };
  function B(e, t) {
    Es.call(this, e, t), this.nested = void 0, this._nestedArray = null, this._lookupCache = Object.create(null), 
    this._needsRecursiveFeatureResolution = !0, this._needsRecursiveResolve = !0;
  }
  function ud(e) {
    e._nestedArray = null, e._lookupCache = Object.create(null);
    var t = e;
    while (t = t.parent) t._lookupCache = Object.create(null);
    return e;
  }
  Object.defineProperty(B.prototype, "nestedArray", {
    get: function() {
      return this._nestedArray || (this._nestedArray = Br.toArray(this.nested));
    }
  });
  B.prototype.toJSON = function(t) {
    return Br.toObject([ "options", this.options, "nested", cd(this.nestedArray, t) ]);
  };
  B.prototype.addJSON = function(t, r) {
    r = Br.checkDepth(r);
    var i = this;
    if (t) for (var s = Object.keys(t), n = 0, a; n < s.length; ++n) a = t[s[n]], i.add((a.fields !== void 0 ? yr.fromJSON : a.values !== void 0 ? _r.fromJSON : a.methods !== void 0 ? Ur.fromJSON : a.id !== void 0 ? ka.fromJSON : B.fromJSON)(s[n], a, r + 1));
    return this;
  };
  B.prototype.get = function(t) {
    return this.nested && Object.prototype.hasOwnProperty.call(this.nested, t) ? this.nested[t] : null;
  };
  B.prototype.getEnum = function(t) {
    if (this.nested && Object.prototype.hasOwnProperty.call(this.nested, t) && this.nested[t] instanceof _r) return this.nested[t].values;
    throw Error("no such enum: " + t);
  };
  B.prototype.add = function(t) {
    if (!(t instanceof ka && t.extend !== void 0 || t instanceof yr || t instanceof oE || t instanceof _r || t instanceof Ur || t instanceof B)) throw TypeError("object must be a valid nested object");
    if (t.name === "__proto__") return this;
    if (!this.nested) this.nested = {}; else {
      var r = this.get(t.name);
      if (r) if (r instanceof B && t instanceof B && !(r instanceof yr || r instanceof Ur)) {
        var i = r.nestedArray;
        for (var s = 0; s < i.length; ++s) t.add(i[s]);
        if (this.remove(r), !this.nested) this.nested = {};
        t.setOptions(r.options, !0);
      } else throw Error("duplicate name '" + t.name + "' in " + this);
    }
    if (this.nested[t.name] = t, !(this instanceof yr || this instanceof Ur || this instanceof _r || this instanceof ka)) {
      if (!t._edition) t._edition = t._defaultEdition;
    }
    this._needsRecursiveFeatureResolution = !0, this._needsRecursiveResolve = !0;
    var n = this;
    while (n = n.parent) n._needsRecursiveFeatureResolution = !0, n._needsRecursiveResolve = !0;
    return t.onAdd(this), ud(this);
  };
  B.prototype.remove = function(t) {
    if (!(t instanceof Es)) throw TypeError("object must be a ReflectionObject");
    if (t.parent !== this) throw Error(t + " is not a member of " + this);
    if (delete this.nested[t.name], !Object.keys(this.nested).length) this.nested = void 0;
    return t.onRemove(this), ud(this);
  };
  B.prototype.define = function(t, r) {
    if (Br.isString(t)) t = t.split("."); else if (!Array.isArray(t)) throw TypeError("illegal path");
    if (t && t.length && t[0] === "") throw Error("path must be relative");
    var i = this;
    while (t.length > 0) {
      var s = t.shift();
      if (i.nested && i.nested[s]) {
        if (i = i.nested[s], !(i instanceof B)) throw Error("path conflicts with non-namespace objects");
      } else i.add(i = new B(s));
    }
    if (r) i.addJSON(r);
    return i;
  };
  B.prototype.resolveAll = function() {
    if (!this._needsRecursiveResolve) return this;
    this._resolveFeaturesRecursive(this._edition);
    var t = this.nestedArray, r = 0;
    this.resolve();
    while (r < t.length) if (t[r] instanceof B) t[r++].resolveAll(); else t[r++].resolve();
    return this._needsRecursiveResolve = !1, this;
  };
  B.prototype._resolveFeaturesRecursive = function(t) {
    if (!this._needsRecursiveFeatureResolution) return this;
    return this._needsRecursiveFeatureResolution = !1, t = this._edition || t, Es.prototype._resolveFeaturesRecursive.call(this, t), 
    this.nestedArray.forEach(r => {
      r._resolveFeaturesRecursive(t);
    }), this;
  };
  B.prototype.lookup = function(t, r, i) {
    if (typeof r === "boolean") i = r, r = void 0; else if (r && !Array.isArray(r)) r = [ r ];
    if (Br.isString(t) && t.length) {
      if (t === ".") return this.root;
      t = t.split(".");
    } else if (!t.length) return this;
    var s = t.join(".");
    if (t[0] === "") return this.root.lookup(t.slice(1), r);
    var n = this.root._fullyQualifiedObjects && this.root._fullyQualifiedObjects["." + s];
    if (n && (!r || r.indexOf(n.constructor) > -1)) return n;
    if (n = this._lookupImpl(t, s), n && (!r || r.indexOf(n.constructor) > -1)) return n;
    if (i) return null;
    var a = this;
    while (a.parent) {
      if (n = a.parent._lookupImpl(t, s), n && (!r || r.indexOf(n.constructor) > -1)) return n;
      a = a.parent;
    }
    return null;
  };
  B.prototype._lookupImpl = function(t, r) {
    if (Object.prototype.hasOwnProperty.call(this._lookupCache, r)) return this._lookupCache[r];
    var i = this.get(t[0]), s = null;
    if (i) {
      if (t.length === 1) s = i; else if (i instanceof B) t = t.slice(1), s = i._lookupImpl(t, t.join("."));
    } else for (var n = 0; n < this.nestedArray.length; ++n) if (this._nestedArray[n] instanceof B && (i = this._nestedArray[n]._lookupImpl(t, r))) {
      s = i;
      break;
    }
    return this._lookupCache[r] = s, s;
  };
  B.prototype.lookupType = function(t) {
    var r = this.lookup(t, [ yr ]);
    if (!r) throw Error("no such type: " + t);
    return r;
  };
  B.prototype.lookupEnum = function(t) {
    var r = this.lookup(t, [ _r ]);
    if (!r) throw Error("no such Enum '" + t + "' in " + this);
    return r;
  };
  B.prototype.lookupTypeOrEnum = function(t) {
    var r = this.lookup(t, [ yr, _r ]);
    if (!r) throw Error("no such Type or Enum '" + t + "' in " + this);
    return r;
  };
  B.prototype.lookupService = function(t) {
    var r = this.lookup(t, [ Ur ]);
    if (!r) throw Error("no such Service '" + t + "' in " + this);
    return r;
  };
  B._configure = function(e, t, r) {
    yr = e, Ur = t, _r = r;
  };
});

var Ts = C(function(sA, hd) {
  hd.exports = Lt;
  var Da = Yt();
  ((Lt.prototype = Object.create(Da.prototype)).constructor = Lt).className = "MapField";
  var lE = Cr(), Ai = de();
  function Lt(e, t, r, i, s, n) {
    if (Da.call(this, e, t, i, void 0, void 0, s, n), !Ai.isString(r)) throw TypeError("keyType must be a string");
    this.keyType = r, this.resolvedKeyType = null, this.map = !0;
  }
  Lt.fromJSON = function(t, r) {
    return new Lt(t, r.id, r.keyType, r.type, r.options, r.comment);
  };
  Lt.prototype.toJSON = function(t) {
    var r = t ? Boolean(t.keepComments) : !1;
    return Ai.toObject([ "keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", r ? this.comment : void 0 ]);
  };
  Lt.prototype.resolve = function() {
    if (this.resolved) return this;
    if (lE.mapKey[this.keyType] === void 0) throw Error("invalid key type: " + this.keyType);
    return Da.prototype.resolve.call(this);
  };
  Lt.d = function(t, r, i) {
    if (typeof i === "function") i = Ai.decorateType(i).name; else if (i && typeof i === "object") i = Ai.decorateEnum(i).name;
    return function(n, a) {
      Ai.decorateType(n.constructor).add(new Lt(a, t, r, i));
    };
  };
});

var Rs = C(function(nA, fd) {
  fd.exports = Er;
  var La = Kt();
  ((Er.prototype = Object.create(La.prototype)).constructor = Er).className = "Method";
  var Hr = de();
  function Er(e, t, r, i, s, n, a, o, l) {
    if (Hr.isObject(s)) a = s, s = n = void 0; else if (Hr.isObject(n)) a = n, n = void 0;
    if (!(t === void 0 || Hr.isString(t))) throw TypeError("type must be a string");
    if (!Hr.isString(r)) throw TypeError("requestType must be a string");
    if (!Hr.isString(i)) throw TypeError("responseType must be a string");
    La.call(this, e, a), this.type = t || "rpc", this.requestType = r, this.requestStream = s ? !0 : void 0, 
    this.responseType = i, this.responseStream = n ? !0 : void 0, this.resolvedRequestType = null, 
    this.resolvedResponseType = null, this.comment = o, this.parsedOptions = l;
  }
  Er.fromJSON = function(t, r) {
    return new Er(t, r.type, r.requestType, r.responseType, r.requestStream, r.responseStream, r.options, r.comment, r.parsedOptions);
  };
  Er.prototype.toJSON = function(t) {
    var r = t ? Boolean(t.keepComments) : !1;
    return Hr.toObject([ "type", this.type !== "rpc" && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", r ? this.comment : void 0, "parsedOptions", this.parsedOptions ]);
  };
  Er.prototype.resolve = function() {
    if (this.resolved) return this;
    return this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), 
    La.prototype.resolve.call(this);
  };
});

var bs = C(function(aA, gd) {
  gd.exports = Le;
  var Ft = zr();
  ((Le.prototype = Object.create(Ft.prototype)).constructor = Le).className = "Service";
  var Fa = Rs(), Wr = de(), cE = oqr(), uE = Wr.patterns.reservedRe;
  function Le(e, t) {
    Ft.call(this, e, t), this.methods = {}, this._methodsArray = null;
  }
  Le.fromJSON = function(t, r, i) {
    i = Wr.checkDepth(i);
    var s = new Le(t, r.options);
    if (r.methods) for (var n = Object.keys(r.methods), a = 0; a < n.length; ++a) s.add(Fa.fromJSON(n[a], r.methods[n[a]]));
    if (r.nested) s.addJSON(r.nested, i);
    if (r.edition) s._edition = r.edition;
    return s.comment = r.comment, s._defaultEdition = "proto3", s;
  };
  Le.prototype.toJSON = function(t) {
    var r = Ft.prototype.toJSON.call(this, t), i = t ? Boolean(t.keepComments) : !1;
    return Wr.toObject([ "edition", this._editionToJSON(), "options", r && r.options || void 0, "methods", Ft.arrayToJSON(this.methodsArray, t) || {}, "nested", r && r.nested || void 0, "comment", i ? this.comment : void 0 ]);
  };
  Object.defineProperty(Le.prototype, "methodsArray", {
    get: function() {
      return this._methodsArray || (this._methodsArray = Wr.toArray(this.methods));
    }
  });
  function pd(e) {
    return e._methodsArray = null, e;
  }
  Le.prototype.get = function(t) {
    return Object.prototype.hasOwnProperty.call(this.methods, t) ? this.methods[t] : Ft.prototype.get.call(this, t);
  };
  Le.prototype.resolveAll = function() {
    if (!this._needsRecursiveResolve) return this;
    Ft.prototype.resolve.call(this);
    var t = this.methodsArray;
    for (var r = 0; r < t.length; ++r) t[r].resolve();
    return this;
  };
  Le.prototype._resolveFeaturesRecursive = function(t) {
    if (!this._needsRecursiveFeatureResolution) return this;
    return t = this._edition || t, Ft.prototype._resolveFeaturesRecursive.call(this, t), 
    this.methodsArray.forEach(r => {
      r._resolveFeaturesRecursive(t);
    }), this;
  };
  Le.prototype.add = function(t) {
    if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
    if (t instanceof Fa) {
      if (t.name === "__proto__") return this;
      return this.methods[t.name] = t, t.parent = this, pd(this);
    }
    return Ft.prototype.add.call(this, t);
  };
  Le.prototype.remove = function(t) {
    if (t instanceof Fa) {
      if (this.methods[t.name] !== t) throw Error(t + " is not a member of " + this);
      return delete this.methods[t.name], t.parent = null, pd(this);
    }
    return Ft.prototype.remove.call(this, t);
  };
  Le.prototype.create = function(t, r, i) {
    var s = new cE.Service(t, r, i);
    for (var n = 0, a; n < this.methodsArray.length; ++n) {
      var o = Wr.lcFirst((a = this._methodsArray[n]).resolve().name).replace(/[^$\w_]/g, "");
      s[o] = Wr.codegen([ "r", "c" ], uE.test(o) ? o + "_" : o)("return this.rpcCall(m,q,s,r,c)")({
        m: a,
        q: a.resolvedRequestType.ctor,
        s: a.resolvedResponseType.ctor
      });
    }
    return s;
  };
});

var Os = C(function(oA, md) {
  md.exports = pt;
  var dE = QHe();
  function pt(e) {
    if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) {
      var i = t[r];
      if (i === "__proto__") continue;
      this[i] = e[i];
    }
  }
  pt.create = function(t) {
    return this.$type.create(t);
  };
  pt.encode = function(t, r) {
    return this.$type.encode(t, r);
  };
  pt.encodeDelimited = function(t, r) {
    return this.$type.encodeDelimited(t, r);
  };
  pt.decode = function(t) {
    return this.$type.decode(t);
  };
  pt.decodeDelimited = function(t) {
    return this.$type.decodeDelimited(t);
  };
  pt.verify = function(t) {
    return this.$type.verify(t);
  };
  pt.fromObject = function(t) {
    return this.$type.fromObject(t);
  };
  pt.toObject = function(t, r) {
    return this.$type.toObject(t, r);
  };
  pt.prototype.toJSON = function() {
    return this.$type.toObject(this, dE.toJSONOptions);
  };
});

var qa = C(function(lA, yd) {
  yd.exports = pE;
  var hE = nt(), qt = Cr(), vd = de();
  function fE(e) {
    return "missing required '" + e.name + "'";
  }
  function pE(e) {
    var t = vd.codegen([ "r", "l", "e", "n" ], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("if(n===undefined)n=0")("if(n>Reader.recursionLimit)")('throw Error("maximum nesting depth exceeded")')("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function(o) {
      return o.map;
    }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")("switch(t>>>3){"), r = 0;
    for (;r < e.fieldsArray.length; ++r) {
      var i = e._fieldsArray[r].resolve(), s = i.resolvedType instanceof hE ? "int32" : i.type, n = "m" + vd.safeProp(i.name);
      if (t("case %i: {", i.id), i.map) {
        if (t("if(%s===util.emptyObject)", n)("%s={}", n)("var c2 = r.uint32()+r.pos"), 
        qt.defaults[i.keyType] !== void 0) t("k=%j", qt.defaults[i.keyType]); else t("k=null");
        if (qt.defaults[s] !== void 0) t("value=%j", qt.defaults[s]); else t("value=null");
        if (t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", i.keyType)("case 2:"), 
        qt.basic[s] === void 0) t("value=types[%i].decode(r,r.uint32(),undefined,n+1)", r); else t("value=r.%s()", s);
        if (t("break")("default:")("r.skipType(tag2&7,n)")("break")("}")("}"), qt.long[i.keyType] !== void 0) t('%s[typeof k==="object"?util.longToHash(k):k]=value', n); else {
          if (i.keyType === "string") t('if(k==="__proto__")')("util.makeProp(%s,k)", n);
          t("%s[k]=value", n);
        }
      } else if (i.repeated) {
        if (t("if(!(%s&&%s.length))", n, n)("%s=[]", n), qt.packed[s] !== void 0) t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", n, s)("}else");
        if (qt.basic[s] === void 0) t(i.delimited ? "%s.push(types[%i].decode(r,undefined,((t&~7)|4),n+1))" : "%s.push(types[%i].decode(r,r.uint32(),undefined,n+1))", n, r); else t("%s.push(r.%s())", n, s);
      } else if (qt.basic[s] === void 0) t(i.delimited ? "%s=types[%i].decode(r,undefined,((t&~7)|4),n+1)" : "%s=types[%i].decode(r,r.uint32(),undefined,n+1)", n, r); else t("%s=r.%s()", n, s);
      t("break")("}");
    }
    t("default:")("r.skipType(t&7,n)")("break")("}")("}");
    for (r = 0; r < e._fieldsArray.length; ++r) {
      var a = e._fieldsArray[r];
      if (a.required) t("if(!m.hasOwnProperty(%j))", a.name)("throw util.ProtocolError(%j,{instance:m})", fE(a));
    }
    return t("return m");
  }
});

var za = C(function(cA, _d) {
  _d.exports = vE;
  var gE = nt(), Ua = de();
  function He(e, t) {
    return e.name + ": " + t + (e.repeated && t !== "array" ? "[]" : e.map && t !== "object" ? "{k:" + e.keyType + "}" : "") + " expected";
  }
  function Ba(e, t, r, i) {
    if (t.resolvedType) if (t.resolvedType instanceof gE) {
      e("switch(%s){", i)("default:")("return%j", He(t, "enum value"));
      for (var s = Object.keys(t.resolvedType.values), n = 0; n < s.length; ++n) e("case %i:", t.resolvedType.values[s[n]]);
      e("break")("}");
    } else e("{")("var e=types[%i].verify(%s,n+1);", r, i)("if(e)")("return%j+e", t.name + ".")("}"); else switch (t.type) {
     case "int32":
     case "uint32":
     case "sint32":
     case "fixed32":
     case "sfixed32":
      e("if(!util.isInteger(%s))", i)("return%j", He(t, "integer"));
      break;

     case "int64":
     case "uint64":
     case "sint64":
     case "fixed64":
     case "sfixed64":
      e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", i, i, i, i)("return%j", He(t, "integer|Long"));
      break;

     case "float":
     case "double":
      e('if(typeof %s!=="number")', i)("return%j", He(t, "number"));
      break;

     case "bool":
      e('if(typeof %s!=="boolean")', i)("return%j", He(t, "boolean"));
      break;

     case "string":
      e("if(!util.isString(%s))", i)("return%j", He(t, "string"));
      break;

     case "bytes":
      e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', i, i, i)("return%j", He(t, "buffer"));
      break;
    }
    return e;
  }
  function mE(e, t, r) {
    switch (t.keyType) {
     case "int32":
     case "uint32":
     case "sint32":
     case "fixed32":
     case "sfixed32":
      e("if(!util.key32Re.test(%s))", r)("return%j", He(t, "integer key"));
      break;

     case "int64":
     case "uint64":
     case "sint64":
     case "fixed64":
     case "sfixed64":
      e("if(!util.key64Re.test(%s))", r)("return%j", He(t, "integer|Long key"));
      break;

     case "bool":
      e("if(!util.key2Re.test(%s))", r)("return%j", He(t, "boolean key"));
      break;
    }
    return e;
  }
  function vE(e) {
    var t = Ua.codegen([ "m", "n" ], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected")("if(n===undefined)n=0")("if(n>util.recursionLimit)")("return%j", "maximum nesting depth exceeded"), r = e.oneofsArray, i = {};
    if (r.length) t("var p={}");
    for (var s = 0; s < e.fieldsArray.length; ++s) {
      var n = e._fieldsArray[s].resolve(), a = "m" + Ua.safeProp(n.name);
      if (n.optional) t("if(%s!=null&&m.hasOwnProperty(%j)){", a, n.name);
      if (n.map) t("if(!util.isObject(%s))", a)("return%j", He(n, "object"))("var k=Object.keys(%s)", a)("for(var i=0;i<k.length;++i){"), 
      mE(t, n, "k[i]"), Ba(t, n, s, a + "[k[i]]")("}"); else if (n.repeated) t("if(!Array.isArray(%s))", a)("return%j", He(n, "array"))("for(var i=0;i<%s.length;++i){", a), 
      Ba(t, n, s, a + "[i]")("}"); else {
        if (n.partOf) {
          var o = Ua.safeProp(n.partOf.name);
          if (i[n.partOf.name] === 1) t("if(p%s===1)", o)("return%j", n.partOf.name + ": multiple values");
          i[n.partOf.name] = 1, t("p%s=1", o);
        }
        Ba(t, n, s, a);
      }
      if (n.optional) t("}");
    }
    return t("return null");
  }
});

var Ga = C(function(Cd) {
  var Sd = Cd, Pi = nt(), gt = de();
  function Ha(e, t, r, i) {
    var s = !1;
    if (t.resolvedType) if (t.resolvedType instanceof Pi) {
      e("switch(d%s){", i);
      for (var n = t.resolvedType.values, a = Object.keys(n), o = 0; o < a.length; ++o) {
        if (n[a[o]] === t.typeDefault && !s) {
          if (e("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', i, i, i), !t.repeated) e("break");
          s = !0;
        }
        e("case%j:", a[o])("case %i:", n[a[o]])("m%s=%j", i, n[a[o]])("break");
      }
      e("}");
    } else e('if(typeof d%s!=="object")', i)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s,n+1)", i, r, i); else {
      var l = !1;
      switch (t.type) {
       case "double":
       case "float":
        e("m%s=Number(d%s)", i, i);
        break;

       case "uint32":
       case "fixed32":
        e("m%s=d%s>>>0", i, i);
        break;

       case "int32":
       case "sint32":
       case "sfixed32":
        e("m%s=d%s|0", i, i);
        break;

       case "uint64":
        l = !0;

       case "int64":
       case "sint64":
       case "fixed64":
       case "sfixed64":
        e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", i, i, l)('else if(typeof d%s==="string")', i)("m%s=parseInt(d%s,10)", i, i)('else if(typeof d%s==="number")', i)("m%s=d%s", i, i)('else if(typeof d%s==="object")', i)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", i, i, i, l ? "true" : "");
        break;

       case "bytes":
        e('if(typeof d%s==="string")', i)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", i, i, i)("else if(d%s.length >= 0)", i)("m%s=d%s", i, i);
        break;

       case "string":
        e("m%s=String(d%s)", i, i);
        break;

       case "bool":
        e("m%s=Boolean(d%s)", i, i);
        break;
      }
    }
    return e;
  }
  Sd.fromObject = function(t) {
    var r = t.fieldsArray, i = gt.codegen([ "d", "n" ], t.name + "$fromObject")("if(d instanceof this.ctor)")("return d")("if(n===undefined)n=0")("if(n>util.recursionLimit)")('throw Error("maximum nesting depth exceeded")');
    if (!r.length) return i("return new this.ctor");
    i("var m=new this.ctor");
    for (var s = 0; s < r.length; ++s) {
      var n = r[s].resolve(), a = gt.safeProp(n.name);
      if (n.map) i("if(d%s){", a)('if(typeof d%s!=="object")', a)("throw TypeError(%j)", n.fullName + ": object expected")("m%s={}", a)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", a), 
      i('if(ks[i]==="__proto__")')("util.makeProp(m%s,ks[i])", a), Ha(i, n, s, a + "[ks[i]]")("}")("}"); else if (n.repeated) i("if(d%s){", a)("if(!Array.isArray(d%s))", a)("throw TypeError(%j)", n.fullName + ": array expected")("m%s=[]", a)("for(var i=0;i<d%s.length;++i){", a), 
      Ha(i, n, s, a + "[i]")("}")("}"); else {
        if (!(n.resolvedType instanceof Pi)) i("if(d%s!=null){", a);
        if (Ha(i, n, s, a), !(n.resolvedType instanceof Pi)) i("}");
      }
    }
    return i("return m");
  };
  function Wa(e, t, r, i) {
    if (t.resolvedType) if (t.resolvedType instanceof Pi) e("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", i, r, i, i, r, i, i); else e("d%s=types[%i].toObject(m%s,o)", i, r, i); else {
      var s = !1;
      switch (t.type) {
       case "double":
       case "float":
        e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", i, i, i, i);
        break;

       case "uint64":
        s = !0;

       case "int64":
       case "sint64":
       case "fixed64":
       case "sfixed64":
        e('if(typeof m%s==="number")', i)("d%s=o.longs===String?String(m%s):m%s", i, i, i)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", i, i, i, i, s ? "true" : "", i);
        break;

       case "bytes":
        e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", i, i, i, i, i);
        break;

       default:
        e("d%s=m%s", i, i);
        break;
      }
    }
    return e;
  }
  Sd.toObject = function(t) {
    var r = t.fieldsArray.slice().sort(gt.compareFieldsById);
    if (!r.length) return gt.codegen()("return {}");
    var i = gt.codegen([ "m", "o" ], t.name + "$toObject")("if(!o)")("o={}")("var d={}"), s = [], n = [], a = [], o = 0;
    for (;o < r.length; ++o) if (!r[o].partOf) (r[o].resolve().repeated ? s : r[o].map ? n : a).push(r[o]);
    if (s.length) {
      i("if(o.arrays||o.defaults){");
      for (o = 0; o < s.length; ++o) i("d%s=[]", gt.safeProp(s[o].name));
      i("}");
    }
    if (n.length) {
      i("if(o.objects||o.defaults){");
      for (o = 0; o < n.length; ++o) i("d%s={}", gt.safeProp(n[o].name));
      i("}");
    }
    if (a.length) {
      i("if(o.defaults){");
      for (o = 0; o < a.length; ++o) {
        var l = a[o], c = gt.safeProp(l.name);
        if (l.resolvedType instanceof Pi) i("d%s=o.enums===String?%j:%j", c, l.resolvedType.valuesById[l.typeDefault], l.typeDefault); else if (l.long) i("if(util.Long){")("var n=new util.Long(%i,%i,%j)", l.typeDefault.low, l.typeDefault.high, l.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", c)("}else")("d%s=o.longs===String?%j:%i", c, l.typeDefault.toString(), l.typeDefault.toNumber()); else if (l.bytes) {
          var u = Array.prototype.slice.call(l.typeDefault);
          i("if(o.bytes===String)d%s=%j", c, String.fromCharCode.apply(String, l.typeDefault))("else{")("d%s=%j", c, u)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", c, c)("}");
        } else i("d%s=%j", c, l.typeDefault);
      }
      i("}");
    }
    var d = !1;
    for (o = 0; o < r.length; ++o) {
      var l = r[o], h = t._fieldsArray.indexOf(l), c = gt.safeProp(l.name);
      if (l.map) {
        if (!d) d = !0, i("var ks2");
        i("if(m%s&&(ks2=Object.keys(m%s)).length){", c, c)("d%s={}", c)("for(var j=0;j<ks2.length;++j){"), 
        i('if(ks2[j]==="__proto__")')("util.makeProp(d%s,ks2[j])", c), Wa(i, l, h, c + "[ks2[j]]")("}");
      } else if (l.repeated) i("if(m%s&&m%s.length){", c, c)("d%s=[]", c)("for(var j=0;j<m%s.length;++j){", c), 
      Wa(i, l, h, c + "[j]")("}"); else if (i("if(m%s!=null&&m.hasOwnProperty(%j)){", c, l.name), 
      Wa(i, l, h, c), l.partOf) i("if(o.oneofs)")("d%s=%j", gt.safeProp(l.partOf.name), l.name);
      i("}");
    }
    return i("return d");
  };
});

var $a = C(function(Ed) {
  var yE = Ed, _E = Os();
  yE[".google.protobuf.Any"] = {
    fromObject: function(e, t) {
      if (e && e["@type"]) {
        var r = e["@type"].substring(e["@type"].lastIndexOf("/") + 1), i = this.lookup(r);
        if (i) {
          var s = e["@type"].charAt(0) === "." ? e["@type"].slice(1) : e["@type"];
          if (s.indexOf("/") === -1) s = "/" + s;
          var n = t === void 0 ? 1 : t + 1;
          return this.create({
            type_url: s,
            value: i.encode(i.fromObject(e, n)).finish()
          });
        }
      }
      return this.fromObject(e, t);
    },
    toObject: function(e, t) {
      var r = "type.googleapis.com/", i = "", s = "";
      if (t && t.json && e.type_url && e.value) {
        s = e.type_url.substring(e.type_url.lastIndexOf("/") + 1), i = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
        var n = this.lookup(s);
        if (n) e = n.decode(e.value);
      }
      if (!(e instanceof this.ctor) && e instanceof _E) {
        var a = e.$type.toObject(e, t), o = e.$type.fullName[0] === "." ? e.$type.fullName.slice(1) : e.$type.fullName;
        if (i === "") i = r;
        return s = i + o, a["@type"] = s, a;
      }
      return this.toObject(e, t);
    }
  };
});

var Ps = C(function(hA, Rd) {
  Rd.exports = J;
  var We = zr();
  ((J.prototype = Object.create(We.prototype)).constructor = J).className = "Type";
  var SE = nt(), Ka = Sr(), ws = Yt(), CE = Ts(), EE = bs(), Va = Os(), Ya = ver(), TE = wer(), ve = de(), RE = Ja(), bE = qa(), OE = za(), Td = Ga(), wE = $a();
  function J(e, t) {
    e = e.replace(/\W/g, ""), We.call(this, e, t), this.fields = {}, this.oneofs = void 0, 
    this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, 
    this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
  }
  Object.defineProperties(J.prototype, {
    fieldsById: {
      get: function() {
        if (this._fieldsById) return this._fieldsById;
        this._fieldsById = {};
        for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
          var r = this.fields[e[t]], i = r.id;
          if (this._fieldsById[i]) throw Error("duplicate id " + i + " in " + this);
          this._fieldsById[i] = r;
        }
        return this._fieldsById;
      }
    },
    fieldsArray: {
      get: function() {
        return this._fieldsArray || (this._fieldsArray = ve.toArray(this.fields));
      }
    },
    oneofsArray: {
      get: function() {
        return this._oneofsArray || (this._oneofsArray = ve.toArray(this.oneofs));
      }
    },
    ctor: {
      get: function() {
        return this._ctor || (this.ctor = J.generateConstructor(this)());
      },
      set: function(e) {
        var t = e.prototype;
        if (!(t instanceof Va)) (e.prototype = new Va).constructor = e, ve.merge(e.prototype, t);
        e.$type = e.prototype.$type = this, ve.merge(e, Va, !0), this._ctor = e;
        var r = 0;
        for (;r < this.fieldsArray.length; ++r) this._fieldsArray[r].resolve();
        var i = {};
        for (r = 0; r < this.oneofsArray.length; ++r) i[this._oneofsArray[r].resolve().name] = {
          get: ve.oneOfGetter(this._oneofsArray[r].oneof),
          set: ve.oneOfSetter(this._oneofsArray[r].oneof)
        };
        if (r) Object.defineProperties(e.prototype, i);
      }
    }
  });
  J.generateConstructor = function(t) {
    var r = ve.codegen([ "p" ], t.name);
    for (var i = 0, s; i < t.fieldsArray.length; ++i) if ((s = t._fieldsArray[i]).map) r("this%s={}", ve.safeProp(s.name)); else if (s.repeated) r("this%s=[]", ve.safeProp(s.name));
    return r('if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null&&ks[i]!=="__proto__")')("this[ks[i]]=p[ks[i]]");
  };
  function As(e) {
    return e._fieldsById = e._fieldsArray = e._oneofsArray = null, delete e.encode, 
    delete e.decode, delete e.verify, e;
  }
  J.fromJSON = function(t, r, i) {
    i = ve.checkDepth(i);
    var s = new J(t, r.options);
    s.extensions = r.extensions, s.reserved = r.reserved;
    var n = Object.keys(r.fields), a = 0;
    for (;a < n.length; ++a) s.add((typeof r.fields[n[a]].keyType < "u" ? CE.fromJSON : ws.fromJSON)(n[a], r.fields[n[a]]));
    if (r.oneofs) for (n = Object.keys(r.oneofs), a = 0; a < n.length; ++a) s.add(Ka.fromJSON(n[a], r.oneofs[n[a]]));
    if (r.nested) for (n = Object.keys(r.nested), a = 0; a < n.length; ++a) {
      var o = r.nested[n[a]];
      s.add((o.id !== void 0 ? ws.fromJSON : o.fields !== void 0 ? J.fromJSON : o.values !== void 0 ? SE.fromJSON : o.methods !== void 0 ? EE.fromJSON : We.fromJSON)(n[a], o, i + 1));
    }
    if (r.extensions && r.extensions.length) s.extensions = r.extensions;
    if (r.reserved && r.reserved.length) s.reserved = r.reserved;
    if (r.group) s.group = !0;
    if (r.comment) s.comment = r.comment;
    if (r.edition) s._edition = r.edition;
    return s._defaultEdition = "proto3", s;
  };
  J.prototype.toJSON = function(t) {
    var r = We.prototype.toJSON.call(this, t), i = t ? Boolean(t.keepComments) : !1;
    return ve.toObject([ "edition", this._editionToJSON(), "options", r && r.options || void 0, "oneofs", We.arrayToJSON(this.oneofsArray, t), "fields", We.arrayToJSON(this.fieldsArray.filter(function(s) {
      return !s.declaringField;
    }), t) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", r && r.nested || void 0, "comment", i ? this.comment : void 0 ]);
  };
  J.prototype.resolveAll = function() {
    if (!this._needsRecursiveResolve) return this;
    We.prototype.resolveAll.call(this);
    var t = this.oneofsArray;
    i = 0;
    while (i < t.length) t[i++].resolve();
    var r = this.fieldsArray, i = 0;
    while (i < r.length) r[i++].resolve();
    return this;
  };
  J.prototype._resolveFeaturesRecursive = function(t) {
    if (!this._needsRecursiveFeatureResolution) return this;
    return t = this._edition || t, We.prototype._resolveFeaturesRecursive.call(this, t), 
    this.oneofsArray.forEach(r => {
      r._resolveFeatures(t);
    }), this.fieldsArray.forEach(r => {
      r._resolveFeatures(t);
    }), this;
  };
  J.prototype.get = function(t) {
    if (Object.prototype.hasOwnProperty.call(this.fields, t)) return this.fields[t];
    if (this.oneofs && Object.prototype.hasOwnProperty.call(this.oneofs, t)) return this.oneofs[t];
    if (this.nested && Object.prototype.hasOwnProperty.call(this.nested, t)) return this.nested[t];
    return null;
  };
  J.prototype.add = function(t) {
    if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
    if (t instanceof ws && t.extend === void 0) {
      if (this._fieldsById ? this._fieldsById[t.id] : this.fieldsById[t.id]) throw Error("duplicate id " + t.id + " in " + this);
      if (this.isReservedId(t.id)) throw Error("id " + t.id + " is reserved in " + this);
      if (this.isReservedName(t.name)) throw Error("name '" + t.name + "' is reserved in " + this);
      if (t.name === "__proto__") return this;
      if (t.parent) t.parent.remove(t);
      return this.fields[t.name] = t, t.message = this, t.onAdd(this), As(this);
    }
    if (t instanceof Ka) {
      if (t.name === "__proto__") return this;
      if (!this.oneofs) this.oneofs = {};
      return this.oneofs[t.name] = t, t.onAdd(this), As(this);
    }
    return We.prototype.add.call(this, t);
  };
  J.prototype.remove = function(t) {
    if (t instanceof ws && t.extend === void 0) {
      if (!this.fields || this.fields[t.name] !== t) throw Error(t + " is not a member of " + this);
      return delete this.fields[t.name], t.parent = null, t.onRemove(this), As(this);
    }
    if (t instanceof Ka) {
      if (!this.oneofs || this.oneofs[t.name] !== t) throw Error(t + " is not a member of " + this);
      return delete this.oneofs[t.name], t.parent = null, t.onRemove(this), As(this);
    }
    return We.prototype.remove.call(this, t);
  };
  J.prototype.isReservedId = function(t) {
    return We.isReservedId(this.reserved, t);
  };
  J.prototype.isReservedName = function(t) {
    return We.isReservedName(this.reserved, t);
  };
  J.prototype.create = function(t) {
    return new this.ctor(t);
  };
  J.prototype.setup = function() {
    var t = this.fullName, r = [];
    for (var i = 0; i < this.fieldsArray.length; ++i) r.push(this._fieldsArray[i].resolve().resolvedType);
    this.encode = RE(this)({
      Writer: TE,
      types: r,
      util: ve
    }), this.decode = bE(this)({
      Reader: Ya,
      types: r,
      util: ve
    }), this.verify = OE(this)({
      types: r,
      util: ve
    }), this.fromObject = Td.fromObject(this)({
      types: r,
      util: ve
    }), this.toObject = Td.toObject(this)({
      types: r,
      util: ve
    });
    var s = wE[t];
    if (s) {
      var n = Object.create(this);
      n.fromObject = this.fromObject, this.fromObject = s.fromObject.bind(n), n.toObject = this.toObject, 
      this.toObject = s.toObject.bind(n);
    }
    return this;
  };
  J.prototype.encode = function(t, r) {
    return this.setup().encode(t, r);
  };
  J.prototype.encodeDelimited = function(t, r) {
    return this.encode(t, r && r.len ? r.fork() : r).ldelim();
  };
  J.prototype.decode = function(t, r, i, s) {
    return this.setup().decode(t, r, i, s);
  };
  J.prototype.decodeDelimited = function(t) {
    if (!(t instanceof Ya)) t = Ya.create(t);
    return this.decode(t, t.uint32());
  };
  J.prototype.verify = function(t, r) {
    return this.setup().verify(t, r);
  };
  J.prototype.fromObject = function(t, r) {
    return this.setup().fromObject(t, r);
  };
  J.prototype.toObject = function(t, r) {
    return this.setup().toObject(t, r);
  };
  J.d = function(t) {
    return function(i) {
      ve.decorateType(i, t);
    };
  };
});

var xs = C(function(fA, wd) {
  wd.exports = Fe;
  var Is = zr();
  ((Fe.prototype = Object.create(Is.prototype)).constructor = Fe).className = "Root";
  var Ns = Yt(), Xa = nt(), AE = Sr(), Ut = de(), Qa, Za, Ni;
  function Fe(e) {
    Is.call(this, "", e), this.deferred = [], this.files = [], this._edition = "proto2", 
    this._fullyQualifiedObjects = {};
  }
  Fe.fromJSON = function(t, r, i) {
    if (i = Ut.checkDepth(i), !r) r = new Fe;
    if (t.options) r.setOptions(t.options);
    return r.addJSON(t.nested, i).resolveAll();
  };
  Fe.prototype.resolvePath = Ut.path.resolve;
  Fe.prototype.fetch = Ut.fetch;
  function Od() {}
  Fe.prototype.load = function e(t, r, i) {
    if (typeof r === "function") i = r, r = void 0;
    var s = this;
    if (!i) return Ut.asPromise(e, s, t, r);
    var n = i === Od;
    function a(m, f) {
      if (!i) return;
      if (n) throw m;
      if (f) f.resolveAll();
      var y = i;
      i = null, y(m, f);
    }
    function o(m) {
      var f = m.lastIndexOf("google/protobuf/");
      if (f > -1) {
        var y = m.substring(f);
        if (y in Ni) return y;
      }
      return null;
    }
    function l(m, f) {
      try {
        if (Ut.isString(f) && f.charAt(0) === "{") f = JSON.parse(f);
        if (!Ut.isString(f)) s.setOptions(f.options).addJSON(f.nested); else {
          Za.filename = m;
          var y = Za(f, s, r), E, T = 0;
          if (y.imports) {
            for (;T < y.imports.length; ++T) if (E = o(y.imports[T]) || s.resolvePath(m, y.imports[T])) c(E);
          }
          if (y.weakImports) {
            for (T = 0; T < y.weakImports.length; ++T) if (E = o(y.weakImports[T]) || s.resolvePath(m, y.weakImports[T])) c(E, !0);
          }
        }
      } catch (P) {
        a(P);
      }
      if (!n && !u) a(null, s);
    }
    function c(m, f) {
      if (m = o(m) || m, s.files.indexOf(m) > -1) return;
      if (s.files.push(m), m in Ni) {
        if (n) l(m, Ni[m]); else ++u, setTimeout(function() {
          --u, l(m, Ni[m]);
        });
        return;
      }
      if (n) {
        var y;
        try {
          y = Ut.fs.readFileSync(m).toString("utf8");
        } catch (E) {
          if (!f) a(E);
          return;
        }
        l(m, y);
      } else ++u, s.fetch(m, function(E, T) {
        if (--u, !i) return;
        if (E) {
          if (!f) a(E); else if (!u) a(null, s);
          return;
        }
        l(m, T);
      });
    }
    var u = 0;
    if (Ut.isString(t)) t = [ t ];
    for (var d = 0, h; d < t.length; ++d) if (h = s.resolvePath("", t[d])) c(h);
    if (n) return s.resolveAll(), s;
    if (!u) a(null, s);
    return s;
  };
  Fe.prototype.loadSync = function(t, r) {
    if (!Ut.isNode) throw Error("not supported");
    return this.load(t, r, Od);
  };
  Fe.prototype.resolveAll = function() {
    if (!this._needsRecursiveResolve) return this;
    if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(t) {
      return "'extend " + t.extend + "' in " + t.parent.fullName;
    }).join(", "));
    return Is.prototype.resolveAll.call(this);
  };
  var Ms = /^[A-Z]/;
  function bd(e, t) {
    var r = t.parent.lookup(t.extend);
    if (r) {
      var i = new Ns(t.fullName, t.id, t.type, t.rule, void 0, t.options);
      if (r.get(i.name)) return !0;
      return i.declaringField = t, t.extensionField = i, r.add(i), !0;
    }
    return !1;
  }
  Fe.prototype._handleAdd = function(t) {
    if (t instanceof Ns) {
      if (t.extend !== void 0 && !t.extensionField) {
        if (!bd(this, t)) this.deferred.push(t);
      }
    } else if (t instanceof Xa) {
      if (Ms.test(t.name)) t.parent[t.name] = t.values;
    } else if (!(t instanceof AE)) {
      if (t instanceof Qa) for (var r = 0; r < this.deferred.length; ) if (bd(this, this.deferred[r])) this.deferred.splice(r, 1); else ++r;
      for (var i = 0; i < t.nestedArray.length; ++i) this._handleAdd(t._nestedArray[i]);
      if (Ms.test(t.name)) t.parent[t.name] = t;
    }
    if (t instanceof Qa || t instanceof Xa || t instanceof Ns) this._fullyQualifiedObjects[t.fullName] = t;
  };
  Fe.prototype._handleRemove = function(t) {
    if (t instanceof Ns) {
      if (t.extend !== void 0) if (t.extensionField) t.extensionField.parent.remove(t.extensionField), 
      t.extensionField = null; else {
        var r = this.deferred.indexOf(t);
        if (r > -1) this.deferred.splice(r, 1);
      }
    } else if (t instanceof Xa) {
      if (Ms.test(t.name)) delete t.parent[t.name];
    } else if (t instanceof Is) {
      for (var i = 0; i < t.nestedArray.length; ++i) this._handleRemove(t._nestedArray[i]);
      if (Ms.test(t.name)) delete t.parent[t.name];
    }
    delete this._fullyQualifiedObjects[t.fullName];
  };
  Fe._configure = function(e, t, r) {
    Qa = e, Za = t, Ni = r;
  };
});

var de = C(function(pA, Nd) {
  var Z = Nd.exports = QHe(), Ad = sqr(), eo, to;
  Z.codegen = ed();
  Z.fetch = id();
  Z.path = ad();
  Z.patterns = ld();
  var Pd = Z.patterns.reservedRe, PE = Z.patterns.unsafePropertyRe;
  Z.fs = Z.inquire("fs");
  Z.checkDepth = function(t) {
    if (t === void 0) t = 0;
    if (t > Z.recursionLimit) throw Error("max depth exceeded");
    return t;
  };
  Z.toArray = function(t) {
    if (t) {
      var r = Object.keys(t), i = Array(r.length), s = 0;
      while (s < r.length) i[s] = t[r[s++]];
      return i;
    }
    return [];
  };
  Z.toObject = function(t) {
    var r = {}, i = 0;
    while (i < t.length) {
      var s = t[i++], n = t[i++];
      if (n !== void 0) r[s] = n;
    }
    return r;
  };
  Z.isReserved = function(t) {
    return Pd.test(t);
  };
  Z.safeProp = function(t) {
    if (!/^[$\w_]+$/.test(t) || Pd.test(t)) return "[" + JSON.stringify(t) + "]";
    return "." + t;
  };
  Z.ucFirst = function(t) {
    return t.charAt(0).toUpperCase() + t.substring(1);
  };
  var NE = /_([a-z])/g;
  Z.camelCase = function(t) {
    return t.substring(0, 1) + t.substring(1).replace(NE, function(r, i) {
      return i.toUpperCase();
    });
  };
  Z.compareFieldsById = function(t, r) {
    return t.id - r.id;
  };
  Z.decorateType = function(t, r) {
    if (t.$type) {
      if (r && t.$type.name !== r) Z.decorateRoot.remove(t.$type), t.$type.name = r, Z.decorateRoot.add(t.$type);
      return t.$type;
    }
    if (!eo) eo = Ps();
    var i = new eo(r || t.name);
    return Z.decorateRoot.add(i), i.ctor = t, Object.defineProperty(t, "$type", {
      value: i,
      enumerable: !1
    }), Object.defineProperty(t.prototype, "$type", {
      value: i,
      enumerable: !1
    }), i;
  };
  var ME = 0;
  Z.decorateEnum = function(t) {
    if (t.$type) return t.$type;
    if (!to) to = nt();
    var r = new to("Enum" + ME++, t);
    return Z.decorateRoot.add(r), Object.defineProperty(t, "$type", {
      value: r,
      enumerable: !1
    }), r;
  };
  Z.setProperty = function(t, r, i, s) {
    function n(a, o, l) {
      var c = o.shift();
      if (PE.test(c)) return a;
      if (o.length > 0) a[c] = n(a[c] || {}, o, l); else {
        var u = a[c];
        if (u && s) return a;
        if (u) l = [].concat(u).concat(l);
        a[c] = l;
      }
      return a;
    }
    if (typeof t !== "object") throw TypeError("dst must be an object");
    if (!r) throw TypeError("path must be specified");
    return r = r.split("."), n(t, r, i);
  };
  Object.defineProperty(Z, "decorateRoot", {
    get: function() {
      return Ad.decorated || (Ad.decorated = new (xs()));
    }
  });
});

var Cr = C(function(Md) {
  var Mi = Md, IE = de(), xE = [ "double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes" ];
  function Ii(e, t) {
    var r = 0, i = Object.create(null);
    t |= 0;
    while (r < e.length) i[xE[r + t]] = e[r++];
    return i;
  }
  Mi.basic = Ii([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2 ]);
  Mi.defaults = Ii([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", IE.emptyArray, null ]);
  Mi.long = Ii([ 0, 0, 0, 1, 1 ], 7);
  Mi.mapKey = Ii([ 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2 ], 2);
  Mi.packed = Ii([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0 ]);
});

var Yt = C(function(mA, xd) {
  xd.exports = he;
  var ki = Kt();
  ((he.prototype = Object.create(ki.prototype)).constructor = he).className = "Field";
  var Id = nt(), ro = Cr(), se = de(), xi, kE = /^required|optional|repeated$/;
  he.fromJSON = function(t, r) {
    var i = new he(t, r.id, r.type, r.rule, r.extend, r.options, r.comment);
    if (r.edition) i._edition = r.edition;
    return i._defaultEdition = "proto3", i;
  };
  function he(e, t, r, i, s, n, a) {
    if (se.isObject(i)) a = s, n = i, i = s = void 0; else if (se.isObject(s)) a = n, 
    n = s, s = void 0;
    if (ki.call(this, e, n), !se.isInteger(t) || t < 0) throw TypeError("id must be a non-negative integer");
    if (!se.isString(r)) throw TypeError("type must be a string");
    if (i !== void 0 && !kE.test(i = i.toString().toLowerCase())) throw TypeError("rule must be a string rule");
    if (s !== void 0 && !se.isString(s)) throw TypeError("extend must be a string");
    if (i === "proto3_optional") i = "optional";
    this.rule = i && i !== "optional" ? i : void 0, this.type = r, this.id = t, this.extend = s || void 0, 
    this.repeated = i === "repeated", this.map = !1, this.message = null, this.partOf = null, 
    this.typeDefault = null, this.defaultValue = null, this.long = se.Long ? ro.long[r] !== void 0 : !1, 
    this.bytes = r === "bytes", this.resolvedType = null, this.extensionField = null, 
    this.declaringField = null, this.comment = a;
  }
  Object.defineProperty(he.prototype, "required", {
    get: function() {
      return this._features.field_presence === "LEGACY_REQUIRED";
    }
  });
  Object.defineProperty(he.prototype, "optional", {
    get: function() {
      return !this.required;
    }
  });
  Object.defineProperty(he.prototype, "delimited", {
    get: function() {
      return this.resolvedType instanceof xi && this._features.message_encoding === "DELIMITED";
    }
  });
  Object.defineProperty(he.prototype, "packed", {
    get: function() {
      return this._features.repeated_field_encoding === "PACKED";
    }
  });
  Object.defineProperty(he.prototype, "hasPresence", {
    get: function() {
      if (this.repeated || this.map) return !1;
      return this.partOf || this.declaringField || this.extensionField || this._features.field_presence !== "IMPLICIT";
    }
  });
  he.prototype.setOption = function(t, r, i) {
    return ki.prototype.setOption.call(this, t, r, i);
  };
  he.prototype.toJSON = function(t) {
    var r = t ? Boolean(t.keepComments) : !1;
    return se.toObject([ "edition", this._editionToJSON(), "rule", this.rule !== "optional" && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", r ? this.comment : void 0 ]);
  };
  he.prototype.resolve = function() {
    if (this.resolved) return this;
    if ((this.typeDefault = ro.defaults[this.type]) === void 0) if (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), 
    this.resolvedType instanceof xi) this.typeDefault = null; else this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]; else if (this.options && this.options.proto3_optional) this.typeDefault = null;
    if (this.options && this.options.default != null) {
      if (this.typeDefault = this.options.default, this.resolvedType instanceof Id && typeof this.typeDefault === "string") this.typeDefault = this.resolvedType.values[this.typeDefault];
    }
    if (this.options) {
      if (this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof Id)) delete this.options.packed;
      if (!Object.keys(this.options).length) this.options = void 0;
    }
    if (this.long) {
      if (this.typeDefault = se.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u"), 
      Object.freeze) Object.freeze(this.typeDefault);
    } else if (this.bytes && typeof this.typeDefault === "string") {
      var t;
      if (se.base64.test(this.typeDefault)) se.base64.decode(this.typeDefault, t = se.newBuffer(se.base64.length(this.typeDefault)), 0); else se.utf8.write(this.typeDefault, t = se.newBuffer(se.utf8.length(this.typeDefault)), 0);
      this.typeDefault = t;
    }
    if (this.map) this.defaultValue = se.emptyObject; else if (this.repeated) this.defaultValue = se.emptyArray; else this.defaultValue = this.typeDefault;
    if (this.parent instanceof xi) this.parent.ctor.prototype[this.name] = this.defaultValue;
    return ki.prototype.resolve.call(this);
  };
  he.prototype._inferLegacyProtoFeatures = function(t) {
    if (t !== "proto2" && t !== "proto3") return {};
    var r = {};
    if (this.rule === "required") r.field_presence = "LEGACY_REQUIRED";
    if (this.parent && ro.defaults[this.type] === void 0) {
      var i = this.parent.get(this.type.split(".").pop());
      if (i && i instanceof xi && i.group) r.message_encoding = "DELIMITED";
    }
    if (this.getOption("packed") === !0) r.repeated_field_encoding = "PACKED"; else if (this.getOption("packed") === !1) r.repeated_field_encoding = "EXPANDED";
    return r;
  };
  he.prototype._resolveFeatures = function(t) {
    return ki.prototype._resolveFeatures.call(this, this._edition || t);
  };
  he.d = function(t, r, i, s) {
    if (typeof r === "function") r = se.decorateType(r).name; else if (r && typeof r === "object") r = se.decorateEnum(r).name;
    return function(a, o) {
      se.decorateType(a.constructor).add(new he(o, t, r, i, {
        default: s
      }));
    };
  };
  he._configure = function(t) {
    xi = t;
  };
});

var Sr = C(function(vA, Ld) {
  Ld.exports = qe;
  var Ds = Kt();
  ((qe.prototype = Object.create(Ds.prototype)).constructor = qe).className = "OneOf";
  var kd = Yt(), ks = de();
  function qe(e, t, r, i) {
    if (!Array.isArray(t)) r = t, t = void 0;
    if (Ds.call(this, e, r), !(t === void 0 || Array.isArray(t))) throw TypeError("fieldNames must be an Array");
    this.oneof = t || [], this.fieldsArray = [], this.comment = i;
  }
  qe.fromJSON = function(t, r) {
    return new qe(t, r.oneof, r.options, r.comment);
  };
  qe.prototype.toJSON = function(t) {
    var r = t ? Boolean(t.keepComments) : !1;
    return ks.toObject([ "options", this.options, "oneof", this.oneof, "comment", r ? this.comment : void 0 ]);
  };
  function Dd(e) {
    if (e.parent) {
      for (var t = 0; t < e.fieldsArray.length; ++t) if (!e.fieldsArray[t].parent) e.parent.add(e.fieldsArray[t]);
    }
  }
  qe.prototype.add = function(t) {
    if (!(t instanceof kd)) throw TypeError("field must be a Field");
    if (t.parent && t.parent !== this.parent) t.parent.remove(t);
    return this.oneof.push(t.name), this.fieldsArray.push(t), t.partOf = this, Dd(this), 
    this;
  };
  qe.prototype.remove = function(t) {
    if (!(t instanceof kd)) throw TypeError("field must be a Field");
    var r = this.fieldsArray.indexOf(t);
    if (r < 0) throw Error(t + " is not a member of " + this);
    if (this.fieldsArray.splice(r, 1), r = this.oneof.indexOf(t.name), r > -1) this.oneof.splice(r, 1);
    return t.partOf = null, this;
  };
  qe.prototype.onAdd = function(t) {
    Ds.prototype.onAdd.call(this, t);
    var r = this;
    for (var i = 0; i < this.oneof.length; ++i) {
      var s = t.get(this.oneof[i]);
      if (s && !s.partOf) s.partOf = r, r.fieldsArray.push(s);
    }
    Dd(this);
  };
  qe.prototype.onRemove = function(t) {
    for (var r = 0, i; r < this.fieldsArray.length; ++r) if ((i = this.fieldsArray[r]).parent) i.parent.remove(i);
    Ds.prototype.onRemove.call(this, t);
  };
  Object.defineProperty(qe.prototype, "isProto3Optional", {
    get: function() {
      if (this.fieldsArray == null || this.fieldsArray.length !== 1) return !1;
      var e = this.fieldsArray[0];
      return e.options != null && e.options.proto3_optional === !0;
    }
  });
  qe.d = function() {
    var t = Array(arguments.length), r = 0;
    while (r < arguments.length) t[r] = arguments[r++];
    return function(s, n) {
      ks.decorateType(s.constructor).add(new qe(n, t)), Object.defineProperty(s, n, {
        get: ks.oneOfGetter(t),
        set: ks.oneOfSetter(t)
      });
    };
  };
});

var Kt = C(function(yA, Fd) {
  Fd.exports = ye;
  ye.className = "ReflectionObject";
  var DE = Sr(), Di = de(), Ls, LE = {
    enum_type: "OPEN",
    field_presence: "EXPLICIT",
    json_format: "ALLOW",
    message_encoding: "LENGTH_PREFIXED",
    repeated_field_encoding: "PACKED",
    utf8_validation: "VERIFY"
  }, FE = {
    enum_type: "CLOSED",
    field_presence: "EXPLICIT",
    json_format: "LEGACY_BEST_EFFORT",
    message_encoding: "LENGTH_PREFIXED",
    repeated_field_encoding: "EXPANDED",
    utf8_validation: "NONE"
  }, qE = {
    enum_type: "OPEN",
    field_presence: "IMPLICIT",
    json_format: "ALLOW",
    message_encoding: "LENGTH_PREFIXED",
    repeated_field_encoding: "PACKED",
    utf8_validation: "VERIFY"
  };
  function ye(e, t) {
    if (!Di.isString(e)) throw TypeError("name must be a string");
    if (t && !Di.isObject(t)) throw TypeError("options must be an object");
    this.options = t, this.parsedOptions = null, this.name = e, this._edition = null, 
    this._defaultEdition = "proto2", this._features = {}, this._featuresResolved = !1, 
    this.parent = null, this.resolved = !1, this.comment = null, this.filename = null;
  }
  Object.defineProperties(ye.prototype, {
    root: {
      get: function() {
        var e = this;
        while (e.parent !== null) e = e.parent;
        return e;
      }
    },
    fullName: {
      get: function() {
        var e = [ this.name ], t = this.parent;
        while (t) e.unshift(t.name), t = t.parent;
        return e.join(".");
      }
    }
  });
  ye.prototype.toJSON = function() {
    throw Error();
  };
  ye.prototype.onAdd = function(t) {
    if (this.parent && this.parent !== t) this.parent.remove(this);
    this.parent = t, this.resolved = !1;
    var r = t.root;
    if (r instanceof Ls) r._handleAdd(this);
  };
  ye.prototype.onRemove = function(t) {
    var r = t.root;
    if (r instanceof Ls) r._handleRemove(this);
    this.parent = null, this.resolved = !1;
  };
  ye.prototype.resolve = function() {
    if (this.resolved) return this;
    if (this.root instanceof Ls) this.resolved = !0;
    return this;
  };
  ye.prototype._resolveFeaturesRecursive = function(t) {
    return this._resolveFeatures(this._edition || t);
  };
  ye.prototype._resolveFeatures = function(t) {
    if (this._featuresResolved) return;
    var r = {};
    if (!t) throw Error("Unknown edition for " + this.fullName);
    var i = Object.assign(this.options ? Object.assign({}, this.options.features) : {}, this._inferLegacyProtoFeatures(t));
    if (this._edition) {
      if (t === "proto2") r = Object.assign({}, FE); else if (t === "proto3") r = Object.assign({}, qE); else if (t === "2023") r = Object.assign({}, LE); else throw Error("Unknown edition: " + t);
      this._features = Object.assign(r, i || {}), this._featuresResolved = !0;
      return;
    }
    if (this.partOf instanceof DE) {
      var s = Object.assign({}, this.partOf._features);
      this._features = Object.assign(s, i || {});
    } else if (this.declaringField) ; else if (this.parent) {
      var n = Object.assign({}, this.parent._features);
      this._features = Object.assign(n, i || {});
    } else throw Error("Unable to find a parent for " + this.fullName);
    if (this.extensionField) this.extensionField._features = this._features;
    this._featuresResolved = !0;
  };
  ye.prototype._inferLegacyProtoFeatures = function() {
    return {};
  };
  ye.prototype.getOption = function(t) {
    if (this.options) return this.options[t];
    return;
  };
  ye.prototype.setOption = function(t, r, i) {
    if (t === "__proto__") return this;
    if (!this.options) this.options = {};
    if (/^features\./.test(t)) Di.setProperty(this.options, t, r, i); else if (!i || this.options[t] === void 0) {
      if (this.getOption(t) !== r) this.resolved = !1;
      this.options[t] = r;
    }
    return this;
  };
  ye.prototype.setParsedOption = function(t, r, i) {
    if (t === "__proto__") return this;
    if (!this.parsedOptions) this.parsedOptions = [];
    var s = this.parsedOptions;
    if (i) {
      var n = s.find(function(l) {
        return Object.prototype.hasOwnProperty.call(l, t);
      });
      if (n) {
        var a = n[t];
        Di.setProperty(a, i, r);
      } else n = {}, n[t] = Di.setProperty({}, i, r), s.push(n);
    } else {
      var o = {};
      o[t] = r, s.push(o);
    }
    return this;
  };
  ye.prototype.setOptions = function(t, r) {
    if (t) for (var i = Object.keys(t), s = 0; s < i.length; ++s) this.setOption(i[s], t[i[s]], r);
    return this;
  };
  ye.prototype.toString = function() {
    var t = this.constructor.className, r = this.fullName;
    if (r.length) return t + " " + r;
    return t;
  };
  ye.prototype._editionToJSON = function() {
    if (!this._edition || this._edition === "proto3") return;
    return this._edition;
  };
  ye._configure = function(e) {
    Ls = e;
  };
});

var nt = C(function(_A, Ud) {
  Ud.exports = at;
  var io = Kt();
  ((at.prototype = Object.create(io.prototype)).constructor = at).className = "Enum";
  var qd = zr(), Fs = de();
  function at(e, t, r, i, s, n) {
    if (io.call(this, e, r), t && typeof t !== "object") throw TypeError("values must be an object");
    if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = i, 
    this.comments = s || {}, this.valuesOptions = n, this._valuesFeatures = {}, this.reserved = void 0, 
    t) {
      for (var a = Object.keys(t), o = 0; o < a.length; ++o) if (a[o] !== "__proto__" && typeof t[a[o]] === "number") this.valuesById[this.values[a[o]] = t[a[o]]] = a[o];
    }
  }
  at.prototype._resolveFeatures = function(t) {
    return t = this._edition || t, io.prototype._resolveFeatures.call(this, t), Object.keys(this.values).forEach(r => {
      var i = Object.assign({}, this._features);
      this._valuesFeatures[r] = Object.assign(i, this.valuesOptions && this.valuesOptions[r] && this.valuesOptions[r].features);
    }), this;
  };
  at.fromJSON = function(t, r) {
    var i = new at(t, r.values, r.options, r.comment, r.comments);
    if (i.reserved = r.reserved, r.edition) i._edition = r.edition;
    return i._defaultEdition = "proto3", i;
  };
  at.prototype.toJSON = function(t) {
    var r = t ? Boolean(t.keepComments) : !1;
    return Fs.toObject([ "edition", this._editionToJSON(), "options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", r ? this.comment : void 0, "comments", r ? this.comments : void 0 ]);
  };
  at.prototype.add = function(t, r, i, s) {
    if (!Fs.isString(t)) throw TypeError("name must be a string");
    if (!Fs.isInteger(r)) throw TypeError("id must be an integer");
    if (t === "__proto__") return this;
    if (this.values[t] !== void 0) throw Error("duplicate name '" + t + "' in " + this);
    if (this.isReservedId(r)) throw Error("id " + r + " is reserved in " + this);
    if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
    if (this.valuesById[r] !== void 0) {
      if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + r + " in " + this);
      this.values[t] = r;
    } else this.valuesById[this.values[t] = r] = t;
    if (s) {
      if (this.valuesOptions === void 0) this.valuesOptions = {};
      this.valuesOptions[t] = s || null;
    }
    return this.comments[t] = i || null, this;
  };
  at.prototype.remove = function(t) {
    if (!Fs.isString(t)) throw TypeError("name must be a string");
    var r = this.values[t];
    if (r == null) throw Error("name '" + t + "' does not exist in " + this);
    if (delete this.valuesById[r], delete this.values[t], delete this.comments[t], this.valuesOptions) delete this.valuesOptions[t];
    return this;
  };
  at.prototype.isReservedId = function(t) {
    return qd.isReservedId(this.reserved, t);
  };
  at.prototype.isReservedName = function(t) {
    return qd.isReservedName(this.reserved, t);
  };
});

var Ja = C(function(SA, zd) {
  zd.exports = BE;
  var UE = nt(), so = Cr(), no = de();
  function Bd(e, t, r, i) {
    return t.delimited ? e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, i, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, i, (t.id << 3 | 2) >>> 0);
  }
  function BE(e) {
    var t = no.codegen([ "m", "w" ], e.name + "$encode")("if(!w)")("w=Writer.create()"), r, i, s = e.fieldsArray.slice().sort(no.compareFieldsById);
    for (var r = 0; r < s.length; ++r) {
      var n = s[r].resolve(), a = e._fieldsArray.indexOf(n), o = n.resolvedType instanceof UE ? "int32" : n.type, l = so.basic[o];
      if (i = "m" + no.safeProp(n.name), n.map) {
        if (t("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", i, n.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (n.id << 3 | 2) >>> 0, 8 | so.mapKey[n.keyType], n.keyType), 
        l === void 0) t("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", a, i); else t(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | l, o, i);
        t("}")("}");
      } else if (n.repeated) {
        if (t("if(%s!=null&&%s.length){", i, i), n.packed && so.packed[o] !== void 0) t("w.uint32(%i).fork()", (n.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", i)("w.%s(%s[i])", o, i)("w.ldelim()"); else if (t("for(var i=0;i<%s.length;++i)", i), 
        l === void 0) Bd(t, n, a, i + "[i]"); else t("w.uint32(%i).%s(%s[i])", (n.id << 3 | l) >>> 0, o, i);
        t("}");
      } else {
        if (n.optional) t("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", i, n.name);
        if (l === void 0) Bd(t, n, a, i); else t("w.uint32(%i).%s(%s)", (n.id << 3 | l) >>> 0, o, i);
      }
    }
    return t("return w");
  }
});

var Wd = C(function(CA, Hd) {
  var z = Hd.exports = iqr();
  z.build = "light";
  function zE(e, t, r) {
    if (typeof t === "function") r = t, t = new z.Root; else if (!t) t = new z.Root;
    return t.load(e, r);
  }
  z.load = zE;
  function HE(e, t) {
    if (!t) t = new z.Root;
    return t.loadSync(e);
  }
  z.loadSync = HE;
  z.encoder = Ja();
  z.decoder = qa();
  z.verifier = za();
  z.converter = Ga();
  z.ReflectionObject = Kt();
  z.Namespace = zr();
  z.Root = xs();
  z.Enum = nt();
  z.Type = Ps();
  z.Field = Yt();
  z.OneOf = Sr();
  z.MapField = Ts();
  z.Service = bs();
  z.Method = Rs();
  z.Message = Os();
  z.wrappers = $a();
  z.types = Cr();
  z.util = de();
  z.ReflectionObject._configure(z.Root);
  z.Namespace._configure(z.Type, z.Service, z.Enum);
  z.Root._configure(z.Type);
  z.Field._configure(z.Type);
});

var oo = C(function(EA, $d) {
  $d.exports = Gd;
  var ao = /[\s{}=;:[\],'"()<>]/g, WE = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, jE = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, GE = /^ *[*/]+ */, $E = /^\s*\*?\/*/, VE = /\n/g, YE = /\s/, KE = /\\(.?)/g, JE = {
    0: "\0",
    r: "\r",
    n: `\n`,
    t: "\t"
  };
  function jd(e) {
    return e.replace(KE, function(t, r) {
      switch (r) {
       case "\\":
       case "":
        return r;

       default:
        return JE[r] || "";
      }
    });
  }
  Gd.unescape = jd;
  function Gd(e, t) {
    e = e.toString();
    var r = 0, i = e.length, s = 1, n = 0, a = {}, o = [], l = null;
    function c(v) {
      return Error("illegal " + v + " (line " + s + ")");
    }
    function u() {
      var v = l === "'" ? jE : WE;
      v.lastIndex = r - 1;
      var U = v.exec(e);
      if (!U) throw c("string");
      return r = v.lastIndex, E(l), l = null, jd(U[1]);
    }
    function d(v) {
      return e.charAt(v);
    }
    function h(v, U, w) {
      var W = {
        type: e.charAt(v++),
        lineEmpty: !1,
        leading: w
      }, X;
      if (t) X = 2; else X = 3;
      var D = v - X, le;
      do {
        if (--D < 0 || (le = e.charAt(D)) === `\n`) {
          W.lineEmpty = !0;
          break;
        }
      } while (le === " " || le === "\t");
      var Ue = e.substring(v, U).split(VE);
      for (var Ze = 0; Ze < Ue.length; ++Ze) Ue[Ze] = Ue[Ze].replace(t ? $E : GE, "").trim();
      W.text = Ue.join(`\n`).trim(), a[s] = W, n = s;
    }
    function m(v) {
      var U = f(v), w = e.substring(v, U), W = /^\s*\/\//.test(w);
      return W;
    }
    function f(v) {
      var U = v;
      while (U < i && d(U) !== `\n`) U++;
      return U;
    }
    function y() {
      if (o.length > 0) return o.shift();
      if (l) return u();
      var v, U, w, W, X, D = r === 0;
      do {
        if (r === i) return null;
        v = !1;
        while (YE.test(w = d(r))) {
          if (w === `\n`) D = !0, ++s;
          if (++r === i) return null;
        }
        if (d(r) === "/") {
          if (++r === i) throw c("comment");
          if (d(r) === "/") if (!t) {
            X = d(W = r + 1) === "/";
            while (d(++r) !== `\n`) if (r === i) return null;
            if (++r, X) h(W, r - 1, D), D = !0;
            ++s, v = !0;
          } else {
            if (W = r, X = !1, m(r - 1)) {
              X = !0;
              do {
                if (r = f(r), r === i) break;
                if (r++, !D) break;
              } while (m(r));
            } else r = Math.min(i, f(r) + 1);
            if (X) h(W, r, D), D = !0;
            s++, v = !0;
          } else if ((w = d(r)) === "*") {
            W = r + 1, X = t || d(W) === "*";
            do {
              if (w === `\n`) ++s;
              if (++r === i) throw c("comment");
              U = w, w = d(r);
            } while (U !== "*" || w !== "/");
            if (++r, X) h(W, r - 2, D), D = !0;
            v = !0;
          } else return "/";
        }
      } while (v);
      var le = r;
      ao.lastIndex = 0;
      var Ue = ao.test(d(le++));
      if (!Ue) while (le < i && !ao.test(d(le))) ++le;
      var Ze = e.substring(r, r = le);
      if (Ze === '"' || Ze === "'") l = Ze;
      return Ze;
    }
    function E(v) {
      o.push(v);
    }
    function T() {
      if (!o.length) {
        var v = y();
        if (v === null) return null;
        E(v);
      }
      return o[0];
    }
    function P(v, U) {
      var w = T(), W = w === v;
      if (W) return y(), !0;
      if (!U) throw c("token '" + w + "', '" + v + "' expected");
      return !1;
    }
    function te(v) {
      var U = null, w;
      if (v === void 0) {
        if (w = a[s - 1], delete a[s - 1], w && (t || w.type === "*" || w.lineEmpty)) U = w.leading ? w.text : null;
      } else {
        if (n < v) T();
        if (w = a[v], delete a[v], w && !w.lineEmpty && (t || w.type === "/")) U = w.leading ? null : w.text;
      }
      return U;
    }
    return Object.defineProperty({
      next: y,
      peek: T,
      push: E,
      skip: P,
      cmnt: te
    }, "line", {
      get: function() {
        return s;
      }
    });
  }
});

var Qd = C(function(TA, Xd) {
  Xd.exports = Bt;
  Bt.filename = null;
  Bt.defaults = {
    keepCase: !1
  };
  var XE = oo(), Vd = xs(), Yd = Ps(), Kd = Yt(), QE = Ts(), Jd = Sr(), ZE = nt(), eT = bs(), tT = Rs(), rT = Kt(), iT = Cr(), yt = de(), sT = /^[1-9][0-9]*$/, nT = /^-?[1-9][0-9]*$/, aT = /^0[x][0-9a-fA-F]+$/, oT = /^-?0[x][0-9a-fA-F]+$/, lT = /^0[0-7]+$/, cT = /^-?0[0-7]+$/, uT = yt.patterns.numberRe, mt = /^[a-zA-Z_][a-zA-Z_0-9]*$/, vt = yt.patterns.typeRefRe;
  function Bt(e, t, r) {
    if (!(t instanceof Vd)) r = t, t = new Vd;
    if (!r) r = Bt.defaults;
    var i = r.preferTrailingComment || !1, s = XE(e, r.alternateCommentMode || !1), {next: n, push: a, peek: o, skip: l, cmnt: c} = s, u = !0, d, h, m, f = "proto2", y = t, E = [], T = {}, P = r.keepCase ? function(g) {
      return g;
    } : yt.camelCase;
    function te() {
      E.forEach(g => {
        g._edition = f, Object.keys(T).forEach(p => {
          if (g.getOption(p) !== void 0) return;
          g.setOption(p, T[p], !0);
        });
      });
    }
    function v(g, p, _) {
      var S = Bt.filename;
      if (!_) Bt.filename = null;
      return Error("illegal " + (p || "token") + " '" + g + "' (" + (S ? S + ", " : "") + "line " + s.line + ")");
    }
    function U() {
      var g = [], p;
      do {
        if ((p = n()) !== '"' && p !== "'") throw v(p);
        g.push(n()), l(p), p = o();
      } while (p === '"' || p === "'");
      return g.join("");
    }
    function w(g) {
      var p = n();
      switch (p) {
       case "'":
       case '"':
        return a(p), U();

       case "true":
       case "TRUE":
        return !0;

       case "false":
       case "FALSE":
        return !1;
      }
      try {
        return X(p, !0);
      } catch (_) {
        if (g && vt.test(p)) return p;
        throw v(p, "value");
      }
    }
    function W(g, p) {
      var _, S;
      do {
        if (p && ((_ = o()) === '"' || _ === "'")) {
          var A = U();
          if (g.push(A), f >= 2023) throw v(A, "id");
        } else try {
          g.push([ S = D(n()), l("to", !0) ? D(n()) : S ]);
        } catch (I) {
          if (p && vt.test(_) && f >= 2023) g.push(_); else throw I;
        }
      } while (l(",", !0));
      var R = {
        options: void 0
      };
      R.setOption = function(I, ce) {
        if (this.options === void 0) this.options = {};
        this.options[I] = ce;
      }, et(R, function(ce) {
        if (ce === "option") tt(R, ce), l(";"); else throw v(ce);
      }, function() {
        Xi(R);
      });
    }
    function X(g, p) {
      var _ = 1;
      if (g.charAt(0) === "-") _ = -1, g = g.substring(1);
      switch (g) {
       case "inf":
       case "INF":
       case "Inf":
        return _ * (1 / 0);

       case "nan":
       case "NAN":
       case "Nan":
       case "NaN":
        return NaN;

       case "0":
        return 0;
      }
      if (sT.test(g)) return _ * parseInt(g, 10);
      if (aT.test(g)) return _ * parseInt(g, 16);
      if (lT.test(g)) return _ * parseInt(g, 8);
      if (uT.test(g)) return _ * parseFloat(g);
      throw v(g, "number", p);
    }
    function D(g, p) {
      switch (g) {
       case "max":
       case "MAX":
       case "Max":
        return 536870911;

       case "0":
        return 0;
      }
      if (!p && g.charAt(0) === "-") throw v(g, "id");
      if (nT.test(g)) return parseInt(g, 10);
      if (oT.test(g)) return parseInt(g, 16);
      if (cT.test(g)) return parseInt(g, 8);
      throw v(g, "id");
    }
    function le() {
      if (d !== void 0) throw v("package");
      if (d = n(), !vt.test(d)) throw v(d, "name");
      y = y.define(d), l(";");
    }
    function Ue() {
      var g = o(), p;
      switch (g) {
       case "weak":
        p = m || (m = []), n();
        break;

       case "public":
        n();

       default:
        p = h || (h = []);
        break;
      }
      g = U(), l(";"), p.push(g);
    }
    function Ze() {
      if (l("="), f = U(), f < 2023) throw v(f, "syntax");
      l(";");
    }
    function by() {
      if (l("="), f = U(), ![ "2023" ].includes(f)) throw v(f, "edition");
      l(";");
    }
    function ea(g, p, _) {
      switch (_ = yt.checkDepth(_), p) {
       case "option":
        return tt(g, p), l(";"), !0;

       case "message":
        return dl(g, p, _ + 1), !0;

       case "enum":
        return hl(g, p), !0;

       case "service":
        return My(g, p, _ + 1), !0;

       case "extend":
        return xy(g, p, _), !0;
      }
      return !1;
    }
    function et(g, p, _) {
      var S = s.line;
      if (g) {
        if (typeof g.comment !== "string") g.comment = c();
        g.filename = Bt.filename;
      }
      if (l("{", !0)) {
        var A;
        while ((A = n()) !== "}") p(A);
        l(";", !0);
      } else {
        if (_) _();
        if (l(";"), g && (typeof g.comment !== "string" || i)) g.comment = c(S) || g.comment;
      }
    }
    function dl(g, p, _) {
      if (_ = yt.checkDepth(_), !mt.test(p = n())) throw v(p, "type name");
      var S = new Yd(p);
      if (et(S, function(R) {
        if (ea(S, R, _)) return;
        switch (R) {
         case "map":
          wy(S, R);
          break;

         case "required":
          if (f !== "proto2") throw v(R);

         case "repeated":
          Be(S, R, void 0, _ + 1);
          break;

         case "optional":
          if (f === "proto3") Be(S, "proto3_optional", void 0, _ + 1); else if (f !== "proto2") throw v(R); else Be(S, "optional", void 0, _ + 1);
          break;

         case "oneof":
          Ay(S, R, _ + 1);
          break;

         case "extensions":
          W(S.extensions || (S.extensions = []));
          break;

         case "reserved":
          W(S.reserved || (S.reserved = []), !0);
          break;

         default:
          if (f === "proto2" || !vt.test(R)) throw v(R);
          a(R), Be(S, "optional", void 0, _ + 1);
          break;
        }
      }), g.add(S), g === y) E.push(S);
    }
    function Be(g, p, _, S) {
      var A = n();
      if (A === "group") {
        Oy(g, p, S);
        return;
      }
      while (A.endsWith(".") || o().startsWith(".")) A += n();
      if (!vt.test(A)) throw v(A, "type");
      var R = n();
      if (!mt.test(R)) throw v(R, "name");
      R = P(R), l("=");
      var I = new Kd(R, D(n()), A, p, _);
      if (et(I, function(Oe) {
        if (Oe === "option") tt(I, Oe), l(";"); else throw v(Oe);
      }, function() {
        Xi(I);
      }), p === "proto3_optional") {
        var ce = new Jd("_" + R);
        I.setOption("proto3_optional", !0), ce.add(I), g.add(ce);
      } else g.add(I);
      if (g === y) E.push(I);
    }
    function Oy(g, p, _) {
      if (_ = yt.checkDepth(_), f >= 2023) throw v("group");
      var S = n();
      if (!mt.test(S)) throw v(S, "name");
      var A = yt.lcFirst(S);
      if (S === A) S = yt.ucFirst(S);
      l("=");
      var R = D(n()), I = new Yd(S);
      I.group = !0;
      var ce = new Kd(A, R, S, p);
      ce.filename = Bt.filename, et(I, function(Oe) {
        switch (Oe) {
         case "option":
          tt(I, Oe), l(";");
          break;

         case "required":
         case "repeated":
          Be(I, Oe, void 0, _ + 1);
          break;

         case "optional":
          if (f === "proto3") Be(I, "proto3_optional", void 0, _ + 1); else Be(I, "optional", void 0, _ + 1);
          break;

         case "message":
          dl(I, Oe, _ + 1);
          break;

         case "enum":
          hl(I, Oe);
          break;

         case "reserved":
          W(I.reserved || (I.reserved = []), !0);
          break;

         default:
          throw v(Oe);
        }
      }), g.add(I).add(ce);
    }
    function wy(g) {
      l("<");
      var p = n();
      if (iT.mapKey[p] === void 0) throw v(p, "type");
      l(",");
      var _ = n();
      if (!vt.test(_)) throw v(_, "type");
      l(">");
      var S = n();
      if (!mt.test(S)) throw v(S, "name");
      l("=");
      var A = new QE(P(S), D(n()), p, _);
      et(A, function(I) {
        if (I === "option") tt(A, I), l(";"); else throw v(I);
      }, function() {
        Xi(A);
      }), g.add(A);
    }
    function Ay(g, p, _) {
      if (!mt.test(p = n())) throw v(p, "name");
      var S = new Jd(P(p));
      et(S, function(R) {
        if (R === "option") tt(S, R), l(";"); else a(R), Be(S, "optional", void 0, _);
      }), g.add(S);
    }
    function hl(g, p) {
      if (!mt.test(p = n())) throw v(p, "name");
      var _ = new ZE(p);
      if (et(_, function(A) {
        switch (A) {
         case "option":
          tt(_, A), l(";");
          break;

         case "reserved":
          if (W(_.reserved || (_.reserved = []), !0), _.reserved === void 0) _.reserved = [];
          break;

         default:
          Py(_, A);
        }
      }), g.add(_), g === y) E.push(_);
    }
    function Py(g, p) {
      if (!mt.test(p)) throw v(p, "name");
      l("=");
      var _ = D(n(), !0), S = {
        options: void 0
      };
      S.getOption = function(A) {
        return this.options[A];
      }, S.setOption = function(A, R) {
        rT.prototype.setOption.call(S, A, R);
      }, S.setParsedOption = function() {
        return;
      }, et(S, function(R) {
        if (R === "option") tt(S, R), l(";"); else throw v(R);
      }, function() {
        Xi(S);
      }), g.add(p, _, S.comment, S.parsedOptions || S.options);
    }
    function tt(g, p) {
      var _, S, A = !0;
      if (p === "option") p = n();
      while (p !== "=") {
        if (p === "(") {
          var R = n();
          l(")"), p = "(" + R + ")";
        }
        if (A) {
          if (A = !1, p.includes(".") && !p.includes("(")) {
            var I = p.split(".");
            _ = I[0] + ".", p = I[1];
            continue;
          }
          _ = p;
        } else S = S ? S += p : p;
        p = n();
      }
      var ce = S ? _.concat(S) : _, ct = fl(g, ce);
      S = S && S[0] === "." ? S.slice(1) : S, _ = _ && _[_.length - 1] === "." ? _.slice(0, -1) : _, 
      Ny(g, _, ct, S);
    }
    function fl(g, p, _) {
      if (_ = yt.checkDepth(_), l("{", !0)) {
        var S = {};
        while (!l("}", !0)) {
          if (!mt.test(me = n())) throw v(me, "name");
          if (me === null) throw v(me, "end of input");
          var A, R = me;
          if (l(":", !0), o() === "{") A = fl(g, p + "." + me, _ + 1); else if (o() === "[") {
            A = [];
            var I;
            if (l("[", !0)) {
              do {
                I = w(!0), A.push(I);
              } while (l(",", !0));
              if (l("]"), typeof I < "u") ta(g, p + "." + me, I);
            }
          } else A = w(!0), ta(g, p + "." + me, A);
          var ce = S[R];
          if (ce) A = [].concat(ce).concat(A);
          if (R !== "__proto__") S[R] = A;
          l(",", !0), l(";", !0);
        }
        return S;
      }
      var ct = w(!0);
      return ta(g, p, ct), ct;
    }
    function ta(g, p, _) {
      if (y === g && /^features\./.test(p)) {
        T[p] = _;
        return;
      }
      if (g.setOption) g.setOption(p, _);
    }
    function Ny(g, p, _, S) {
      if (g.setParsedOption) g.setParsedOption(p, _, S);
    }
    function Xi(g) {
      if (l("[", !0)) {
        do {
          tt(g, "option");
        } while (l(",", !0));
        l("]");
      }
      return g;
    }
    function My(g, p, _) {
      if (_ = yt.checkDepth(_), !mt.test(p = n())) throw v(p, "service name");
      var S = new eT(p);
      if (et(S, function(R) {
        if (ea(S, R, _)) return;
        if (R === "rpc") Iy(S, R); else throw v(R);
      }), g.add(S), g === y) E.push(S);
    }
    function Iy(g, p) {
      var _ = c(), S = p;
      if (!mt.test(p = n())) throw v(p, "name");
      var A = p, R, I, ce, ct;
      if (l("("), l("stream", !0)) I = !0;
      if (!vt.test(p = n())) throw v(p);
      if (R = p, l(")"), l("returns"), l("("), l("stream", !0)) ct = !0;
      if (!vt.test(p = n())) throw v(p);
      ce = p, l(")");
      var Oe = new tT(A, S, R, ce, I, ct);
      Oe.comment = _, et(Oe, function(ra) {
        if (ra === "option") tt(Oe, ra), l(";"); else throw v(ra);
      }), g.add(Oe);
    }
    function xy(g, p, _) {
      if (!vt.test(p = n())) throw v(p, "reference");
      var S = p;
      et(null, function(R) {
        switch (R) {
         case "required":
         case "repeated":
          Be(g, R, S, _ + 1);
          break;

         case "optional":
          if (f === "proto3") Be(g, "proto3_optional", S, _ + 1); else Be(g, "optional", S, _ + 1);
          break;

         default:
          if (f === "proto2" || !vt.test(R)) throw v(R);
          a(R), Be(g, "optional", S, _ + 1);
          break;
        }
      });
    }
    var me;
    while ((me = n()) !== null) switch (me) {
     case "package":
      if (!u) throw v(me);
      le();
      break;

     case "import":
      if (!u) throw v(me);
      Ue();
      break;

     case "syntax":
      if (!u) throw v(me);
      Ze();
      break;

     case "edition":
      if (!u) throw v(me);
      by();
      break;

     case "option":
      tt(y, me), l(";", !0);
      break;

     default:
      if (ea(y, me, 0)) {
        u = !1;
        continue;
      }
      throw v(me);
    }
    return te(), Bt.filename = null, {
      package: d,
      imports: h,
      weakImports: m,
      root: t
    };
  }
});

var th = C(function(RA, eh) {
  eh.exports = ot;
  var dT = /\/|\./;
  function ot(e, t) {
    if (!dT.test(e)) e = "google/protobuf/" + e + ".proto", t = {
      nested: {
        google: {
          nested: {
            protobuf: {
              nested: t
            }
          }
        }
      }
    };
    ot[e] = t;
  }
  ot("any", {
    Any: {
      fields: {
        type_url: {
          type: "string",
          id: 1
        },
        value: {
          type: "bytes",
          id: 2
        }
      }
    }
  });
  var Zd;
  ot("duration", {
    Duration: Zd = {
      fields: {
        seconds: {
          type: "int64",
          id: 1
        },
        nanos: {
          type: "int32",
          id: 2
        }
      }
    }
  });
  ot("timestamp", {
    Timestamp: Zd
  });
  ot("empty", {
    Empty: {
      fields: {}
    }
  });
  ot("struct", {
    Struct: {
      fields: {
        fields: {
          keyType: "string",
          type: "Value",
          id: 1
        }
      }
    },
    Value: {
      oneofs: {
        kind: {
          oneof: [ "nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue" ]
        }
      },
      fields: {
        nullValue: {
          type: "NullValue",
          id: 1
        },
        numberValue: {
          type: "double",
          id: 2
        },
        stringValue: {
          type: "string",
          id: 3
        },
        boolValue: {
          type: "bool",
          id: 4
        },
        structValue: {
          type: "Struct",
          id: 5
        },
        listValue: {
          type: "ListValue",
          id: 6
        }
      }
    },
    NullValue: {
      values: {
        NULL_VALUE: 0
      }
    },
    ListValue: {
      fields: {
        values: {
          rule: "repeated",
          type: "Value",
          id: 1
        }
      }
    }
  });
  ot("wrappers", {
    DoubleValue: {
      fields: {
        value: {
          type: "double",
          id: 1
        }
      }
    },
    FloatValue: {
      fields: {
        value: {
          type: "float",
          id: 1
        }
      }
    },
    Int64Value: {
      fields: {
        value: {
          type: "int64",
          id: 1
        }
      }
    },
    UInt64Value: {
      fields: {
        value: {
          type: "uint64",
          id: 1
        }
      }
    },
    Int32Value: {
      fields: {
        value: {
          type: "int32",
          id: 1
        }
      }
    },
    UInt32Value: {
      fields: {
        value: {
          type: "uint32",
          id: 1
        }
      }
    },
    BoolValue: {
      fields: {
        value: {
          type: "bool",
          id: 1
        }
      }
    },
    StringValue: {
      fields: {
        value: {
          type: "string",
          id: 1
        }
      }
    },
    BytesValue: {
      fields: {
        value: {
          type: "bytes",
          id: 1
        }
      }
    }
  });
  ot("field_mask", {
    FieldMask: {
      fields: {
        paths: {
          rule: "repeated",
          type: "string",
          id: 1
        }
      }
    }
  });
  ot.get = function(t) {
    return ot[t] || null;
  };
});

var qs = C(function(bA, rh) {
  var Jt = rh.exports = Wd();
  Jt.build = "full";
  Jt.tokenize = oo();
  Jt.parse = Qd();
  Jt.common = th();
  Jt.Root._configure(Jt.Type, Jt.parse, Jt.common);
});

var lo = C(function(OA, hT) {
  hT.exports = {
    nested: {
      google: {
        nested: {
          protobuf: {
            options: {
              go_package: "google.golang.org/protobuf/types/descriptorpb",
              java_package: "com.google.protobuf",
              java_outer_classname: "DescriptorProtos",
              csharp_namespace: "Google.Protobuf.Reflection",
              objc_class_prefix: "GPB",
              cc_enable_arenas: !0,
              optimize_for: "SPEED"
            },
            nested: {
              FileDescriptorSet: {
                edition: "proto2",
                fields: {
                  file: {
                    rule: "repeated",
                    type: "FileDescriptorProto",
                    id: 1
                  }
                },
                extensions: [ [ 536e6, 536e6 ] ]
              },
              Edition: {
                edition: "proto2",
                values: {
                  EDITION_UNKNOWN: 0,
                  EDITION_LEGACY: 900,
                  EDITION_PROTO2: 998,
                  EDITION_PROTO3: 999,
                  EDITION_2023: 1e3,
                  EDITION_2024: 1001,
                  EDITION_1_TEST_ONLY: 1,
                  EDITION_2_TEST_ONLY: 2,
                  EDITION_99997_TEST_ONLY: 99997,
                  EDITION_99998_TEST_ONLY: 99998,
                  EDITION_99999_TEST_ONLY: 99999,
                  EDITION_MAX: 2147483647
                }
              },
              FileDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  package: {
                    type: "string",
                    id: 2
                  },
                  dependency: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                  },
                  publicDependency: {
                    rule: "repeated",
                    type: "int32",
                    id: 10
                  },
                  weakDependency: {
                    rule: "repeated",
                    type: "int32",
                    id: 11
                  },
                  optionDependency: {
                    rule: "repeated",
                    type: "string",
                    id: 15
                  },
                  messageType: {
                    rule: "repeated",
                    type: "DescriptorProto",
                    id: 4
                  },
                  enumType: {
                    rule: "repeated",
                    type: "EnumDescriptorProto",
                    id: 5
                  },
                  service: {
                    rule: "repeated",
                    type: "ServiceDescriptorProto",
                    id: 6
                  },
                  extension: {
                    rule: "repeated",
                    type: "FieldDescriptorProto",
                    id: 7
                  },
                  options: {
                    type: "FileOptions",
                    id: 8
                  },
                  sourceCodeInfo: {
                    type: "SourceCodeInfo",
                    id: 9
                  },
                  syntax: {
                    type: "string",
                    id: 12
                  },
                  edition: {
                    type: "Edition",
                    id: 14
                  }
                }
              },
              DescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  field: {
                    rule: "repeated",
                    type: "FieldDescriptorProto",
                    id: 2
                  },
                  extension: {
                    rule: "repeated",
                    type: "FieldDescriptorProto",
                    id: 6
                  },
                  nestedType: {
                    rule: "repeated",
                    type: "DescriptorProto",
                    id: 3
                  },
                  enumType: {
                    rule: "repeated",
                    type: "EnumDescriptorProto",
                    id: 4
                  },
                  extensionRange: {
                    rule: "repeated",
                    type: "ExtensionRange",
                    id: 5
                  },
                  oneofDecl: {
                    rule: "repeated",
                    type: "OneofDescriptorProto",
                    id: 8
                  },
                  options: {
                    type: "MessageOptions",
                    id: 7
                  },
                  reservedRange: {
                    rule: "repeated",
                    type: "ReservedRange",
                    id: 9
                  },
                  reservedName: {
                    rule: "repeated",
                    type: "string",
                    id: 10
                  },
                  visibility: {
                    type: "SymbolVisibility",
                    id: 11
                  }
                },
                nested: {
                  ExtensionRange: {
                    fields: {
                      start: {
                        type: "int32",
                        id: 1
                      },
                      end: {
                        type: "int32",
                        id: 2
                      },
                      options: {
                        type: "ExtensionRangeOptions",
                        id: 3
                      }
                    }
                  },
                  ReservedRange: {
                    fields: {
                      start: {
                        type: "int32",
                        id: 1
                      },
                      end: {
                        type: "int32",
                        id: 2
                      }
                    }
                  }
                }
              },
              ExtensionRangeOptions: {
                edition: "proto2",
                fields: {
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  },
                  declaration: {
                    rule: "repeated",
                    type: "Declaration",
                    id: 2,
                    options: {
                      retention: "RETENTION_SOURCE"
                    }
                  },
                  features: {
                    type: "FeatureSet",
                    id: 50
                  },
                  verification: {
                    type: "VerificationState",
                    id: 3,
                    options: {
                      default: "UNVERIFIED",
                      retention: "RETENTION_SOURCE"
                    }
                  }
                },
                extensions: [ [ 1e3, 536870911 ] ],
                nested: {
                  Declaration: {
                    fields: {
                      number: {
                        type: "int32",
                        id: 1
                      },
                      fullName: {
                        type: "string",
                        id: 2
                      },
                      type: {
                        type: "string",
                        id: 3
                      },
                      reserved: {
                        type: "bool",
                        id: 5
                      },
                      repeated: {
                        type: "bool",
                        id: 6
                      }
                    },
                    reserved: [ [ 4, 4 ] ]
                  },
                  VerificationState: {
                    values: {
                      DECLARATION: 0,
                      UNVERIFIED: 1
                    }
                  }
                }
              },
              FieldDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  number: {
                    type: "int32",
                    id: 3
                  },
                  label: {
                    type: "Label",
                    id: 4
                  },
                  type: {
                    type: "Type",
                    id: 5
                  },
                  typeName: {
                    type: "string",
                    id: 6
                  },
                  extendee: {
                    type: "string",
                    id: 2
                  },
                  defaultValue: {
                    type: "string",
                    id: 7
                  },
                  oneofIndex: {
                    type: "int32",
                    id: 9
                  },
                  jsonName: {
                    type: "string",
                    id: 10
                  },
                  options: {
                    type: "FieldOptions",
                    id: 8
                  },
                  proto3Optional: {
                    type: "bool",
                    id: 17
                  }
                },
                nested: {
                  Type: {
                    values: {
                      TYPE_DOUBLE: 1,
                      TYPE_FLOAT: 2,
                      TYPE_INT64: 3,
                      TYPE_UINT64: 4,
                      TYPE_INT32: 5,
                      TYPE_FIXED64: 6,
                      TYPE_FIXED32: 7,
                      TYPE_BOOL: 8,
                      TYPE_STRING: 9,
                      TYPE_GROUP: 10,
                      TYPE_MESSAGE: 11,
                      TYPE_BYTES: 12,
                      TYPE_UINT32: 13,
                      TYPE_ENUM: 14,
                      TYPE_SFIXED32: 15,
                      TYPE_SFIXED64: 16,
                      TYPE_SINT32: 17,
                      TYPE_SINT64: 18
                    }
                  },
                  Label: {
                    values: {
                      LABEL_OPTIONAL: 1,
                      LABEL_REPEATED: 3,
                      LABEL_REQUIRED: 2
                    }
                  }
                }
              },
              OneofDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  options: {
                    type: "OneofOptions",
                    id: 2
                  }
                }
              },
              EnumDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    rule: "repeated",
                    type: "EnumValueDescriptorProto",
                    id: 2
                  },
                  options: {
                    type: "EnumOptions",
                    id: 3
                  },
                  reservedRange: {
                    rule: "repeated",
                    type: "EnumReservedRange",
                    id: 4
                  },
                  reservedName: {
                    rule: "repeated",
                    type: "string",
                    id: 5
                  },
                  visibility: {
                    type: "SymbolVisibility",
                    id: 6
                  }
                },
                nested: {
                  EnumReservedRange: {
                    fields: {
                      start: {
                        type: "int32",
                        id: 1
                      },
                      end: {
                        type: "int32",
                        id: 2
                      }
                    }
                  }
                }
              },
              EnumValueDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  number: {
                    type: "int32",
                    id: 2
                  },
                  options: {
                    type: "EnumValueOptions",
                    id: 3
                  }
                }
              },
              ServiceDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  method: {
                    rule: "repeated",
                    type: "MethodDescriptorProto",
                    id: 2
                  },
                  options: {
                    type: "ServiceOptions",
                    id: 3
                  }
                }
              },
              MethodDescriptorProto: {
                edition: "proto2",
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  inputType: {
                    type: "string",
                    id: 2
                  },
                  outputType: {
                    type: "string",
                    id: 3
                  },
                  options: {
                    type: "MethodOptions",
                    id: 4
                  },
                  clientStreaming: {
                    type: "bool",
                    id: 5
                  },
                  serverStreaming: {
                    type: "bool",
                    id: 6
                  }
                }
              },
              FileOptions: {
                edition: "proto2",
                fields: {
                  javaPackage: {
                    type: "string",
                    id: 1
                  },
                  javaOuterClassname: {
                    type: "string",
                    id: 8
                  },
                  javaMultipleFiles: {
                    type: "bool",
                    id: 10
                  },
                  javaGenerateEqualsAndHash: {
                    type: "bool",
                    id: 20,
                    options: {
                      deprecated: !0
                    }
                  },
                  javaStringCheckUtf8: {
                    type: "bool",
                    id: 27
                  },
                  optimizeFor: {
                    type: "OptimizeMode",
                    id: 9,
                    options: {
                      default: "SPEED"
                    }
                  },
                  goPackage: {
                    type: "string",
                    id: 11
                  },
                  ccGenericServices: {
                    type: "bool",
                    id: 16
                  },
                  javaGenericServices: {
                    type: "bool",
                    id: 17
                  },
                  pyGenericServices: {
                    type: "bool",
                    id: 18
                  },
                  deprecated: {
                    type: "bool",
                    id: 23
                  },
                  ccEnableArenas: {
                    type: "bool",
                    id: 31,
                    options: {
                      default: !0
                    }
                  },
                  objcClassPrefix: {
                    type: "string",
                    id: 36
                  },
                  csharpNamespace: {
                    type: "string",
                    id: 37
                  },
                  swiftPrefix: {
                    type: "string",
                    id: 39
                  },
                  phpClassPrefix: {
                    type: "string",
                    id: 40
                  },
                  phpNamespace: {
                    type: "string",
                    id: 41
                  },
                  phpMetadataNamespace: {
                    type: "string",
                    id: 44
                  },
                  rubyPackage: {
                    type: "string",
                    id: 45
                  },
                  features: {
                    type: "FeatureSet",
                    id: 50
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [ [ 1e3, 536870911 ] ],
                reserved: [ [ 42, 42 ], [ 38, 38 ], "php_generic_services" ],
                nested: {
                  OptimizeMode: {
                    values: {
                      SPEED: 1,
                      CODE_SIZE: 2,
                      LITE_RUNTIME: 3
                    }
                  }
                }
              },
              MessageOptions: {
                edition: "proto2",
                fields: {
                  messageSetWireFormat: {
                    type: "bool",
                    id: 1
                  },
                  noStandardDescriptorAccessor: {
                    type: "bool",
                    id: 2
                  },
                  deprecated: {
                    type: "bool",
                    id: 3
                  },
                  mapEntry: {
                    type: "bool",
                    id: 7
                  },
                  deprecatedLegacyJsonFieldConflicts: {
                    type: "bool",
                    id: 11,
                    options: {
                      deprecated: !0
                    }
                  },
                  features: {
                    type: "FeatureSet",
                    id: 12
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [ [ 1e3, 536870911 ] ],
                reserved: [ [ 4, 4 ], [ 5, 5 ], [ 6, 6 ], [ 8, 8 ], [ 9, 9 ] ]
              },
              FieldOptions: {
                edition: "proto2",
                fields: {
                  ctype: {
                    type: "CType",
                    id: 1,
                    options: {
                      default: "STRING"
                    }
                  },
                  packed: {
                    type: "bool",
                    id: 2
                  },
                  jstype: {
                    type: "JSType",
                    id: 6,
                    options: {
                      default: "JS_NORMAL"
                    }
                  },
                  lazy: {
                    type: "bool",
                    id: 5
                  },
                  unverifiedLazy: {
                    type: "bool",
                    id: 15
                  },
                  deprecated: {
                    type: "bool",
                    id: 3
                  },
                  weak: {
                    type: "bool",
                    id: 10,
                    options: {
                      deprecated: !0
                    }
                  },
                  debugRedact: {
                    type: "bool",
                    id: 16
                  },
                  retention: {
                    type: "OptionRetention",
                    id: 17
                  },
                  targets: {
                    rule: "repeated",
                    type: "OptionTargetType",
                    id: 19
                  },
                  editionDefaults: {
                    rule: "repeated",
                    type: "EditionDefault",
                    id: 20
                  },
                  features: {
                    type: "FeatureSet",
                    id: 21
                  },
                  featureSupport: {
                    type: "FeatureSupport",
                    id: 22
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [ [ 1e3, 536870911 ] ],
                reserved: [ [ 4, 4 ], [ 18, 18 ] ],
                nested: {
                  CType: {
                    values: {
                      STRING: 0,
                      CORD: 1,
                      STRING_PIECE: 2
                    }
                  },
                  JSType: {
                    values: {
                      JS_NORMAL: 0,
                      JS_STRING: 1,
                      JS_NUMBER: 2
                    }
                  },
                  OptionRetention: {
                    values: {
                      RETENTION_UNKNOWN: 0,
                      RETENTION_RUNTIME: 1,
                      RETENTION_SOURCE: 2
                    }
                  },
                  OptionTargetType: {
                    values: {
                      TARGET_TYPE_UNKNOWN: 0,
                      TARGET_TYPE_FILE: 1,
                      TARGET_TYPE_EXTENSION_RANGE: 2,
                      TARGET_TYPE_MESSAGE: 3,
                      TARGET_TYPE_FIELD: 4,
                      TARGET_TYPE_ONEOF: 5,
                      TARGET_TYPE_ENUM: 6,
                      TARGET_TYPE_ENUM_ENTRY: 7,
                      TARGET_TYPE_SERVICE: 8,
                      TARGET_TYPE_METHOD: 9
                    }
                  },
                  EditionDefault: {
                    fields: {
                      edition: {
                        type: "Edition",
                        id: 3
                      },
                      value: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  FeatureSupport: {
                    fields: {
                      editionIntroduced: {
                        type: "Edition",
                        id: 1
                      },
                      editionDeprecated: {
                        type: "Edition",
                        id: 2
                      },
                      deprecationWarning: {
                        type: "string",
                        id: 3
                      },
                      editionRemoved: {
                        type: "Edition",
                        id: 4
                      }
                    }
                  }
                }
              },
              OneofOptions: {
                edition: "proto2",
                fields: {
                  features: {
                    type: "FeatureSet",
                    id: 1
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [ [ 1e3, 536870911 ] ]
              },
              EnumOptions: {
                edition: "proto2",
                fields: {
                  allowAlias: {
                    type: "bool",
                    id: 2
                  },
                  deprecated: {
                    type: "bool",
                    id: 3
                  },
                  deprecatedLegacyJsonFieldConflicts: {
                    type: "bool",
                    id: 6,
                    options: {
                      deprecated: !0
                    }
                  },
                  features: {
                    type: "FeatureSet",
                    id: 7
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [ [ 1e3, 536870911 ] ],
                reserved: [ [ 5, 5 ] ]
              },
              EnumValueOptions: {
                edition: "proto2",
                fields: {
                  deprecated: {
                    type: "bool",
                    id: 1
                  },
                  features: {
                    type: "FeatureSet",
                    id: 2
                  },
                  debugRedact: {
                    type: "bool",
                    id: 3
                  },
                  featureSupport: {
                    type: "FieldOptions.FeatureSupport",
                    id: 4
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [ [ 1e3, 536870911 ] ]
              },
              ServiceOptions: {
                edition: "proto2",
                fields: {
                  features: {
                    type: "FeatureSet",
                    id: 34
                  },
                  deprecated: {
                    type: "bool",
                    id: 33
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [ [ 1e3, 536870911 ] ]
              },
              MethodOptions: {
                edition: "proto2",
                fields: {
                  deprecated: {
                    type: "bool",
                    id: 33
                  },
                  idempotencyLevel: {
                    type: "IdempotencyLevel",
                    id: 34,
                    options: {
                      default: "IDEMPOTENCY_UNKNOWN"
                    }
                  },
                  features: {
                    type: "FeatureSet",
                    id: 35
                  },
                  uninterpretedOption: {
                    rule: "repeated",
                    type: "UninterpretedOption",
                    id: 999
                  }
                },
                extensions: [ [ 1e3, 536870911 ] ],
                nested: {
                  IdempotencyLevel: {
                    values: {
                      IDEMPOTENCY_UNKNOWN: 0,
                      NO_SIDE_EFFECTS: 1,
                      IDEMPOTENT: 2
                    }
                  }
                }
              },
              UninterpretedOption: {
                edition: "proto2",
                fields: {
                  name: {
                    rule: "repeated",
                    type: "NamePart",
                    id: 2
                  },
                  identifierValue: {
                    type: "string",
                    id: 3
                  },
                  positiveIntValue: {
                    type: "uint64",
                    id: 4
                  },
                  negativeIntValue: {
                    type: "int64",
                    id: 5
                  },
                  doubleValue: {
                    type: "double",
                    id: 6
                  },
                  stringValue: {
                    type: "bytes",
                    id: 7
                  },
                  aggregateValue: {
                    type: "string",
                    id: 8
                  }
                },
                nested: {
                  NamePart: {
                    fields: {
                      namePart: {
                        rule: "required",
                        type: "string",
                        id: 1
                      },
                      isExtension: {
                        rule: "required",
                        type: "bool",
                        id: 2
                      }
                    }
                  }
                }
              },
              FeatureSet: {
                edition: "proto2",
                fields: {
                  fieldPresence: {
                    type: "FieldPresence",
                    id: 1,
                    options: {
                      retention: "RETENTION_RUNTIME",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2023",
                      "edition_defaults.edition": "EDITION_2023",
                      "edition_defaults.value": "EXPLICIT"
                    }
                  },
                  enumType: {
                    type: "EnumType",
                    id: 2,
                    options: {
                      retention: "RETENTION_RUNTIME",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2023",
                      "edition_defaults.edition": "EDITION_PROTO3",
                      "edition_defaults.value": "OPEN"
                    }
                  },
                  repeatedFieldEncoding: {
                    type: "RepeatedFieldEncoding",
                    id: 3,
                    options: {
                      retention: "RETENTION_RUNTIME",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2023",
                      "edition_defaults.edition": "EDITION_PROTO3",
                      "edition_defaults.value": "PACKED"
                    }
                  },
                  utf8Validation: {
                    type: "Utf8Validation",
                    id: 4,
                    options: {
                      retention: "RETENTION_RUNTIME",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2023",
                      "edition_defaults.edition": "EDITION_PROTO3",
                      "edition_defaults.value": "VERIFY"
                    }
                  },
                  messageEncoding: {
                    type: "MessageEncoding",
                    id: 5,
                    options: {
                      retention: "RETENTION_RUNTIME",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2023",
                      "edition_defaults.edition": "EDITION_LEGACY",
                      "edition_defaults.value": "LENGTH_PREFIXED"
                    }
                  },
                  jsonFormat: {
                    type: "JsonFormat",
                    id: 6,
                    options: {
                      retention: "RETENTION_RUNTIME",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2023",
                      "edition_defaults.edition": "EDITION_PROTO3",
                      "edition_defaults.value": "ALLOW"
                    }
                  },
                  enforceNamingStyle: {
                    type: "EnforceNamingStyle",
                    id: 7,
                    options: {
                      retention: "RETENTION_SOURCE",
                      targets: "TARGET_TYPE_METHOD",
                      "feature_support.edition_introduced": "EDITION_2024",
                      "edition_defaults.edition": "EDITION_2024",
                      "edition_defaults.value": "STYLE2024"
                    }
                  },
                  defaultSymbolVisibility: {
                    type: "VisibilityFeature.DefaultSymbolVisibility",
                    id: 8,
                    options: {
                      retention: "RETENTION_SOURCE",
                      targets: "TARGET_TYPE_FILE",
                      "feature_support.edition_introduced": "EDITION_2024",
                      "edition_defaults.edition": "EDITION_2024",
                      "edition_defaults.value": "EXPORT_TOP_LEVEL"
                    }
                  }
                },
                extensions: [ [ 1e3, 9994 ], [ 9995, 9999 ], [ 1e4, 1e4 ] ],
                reserved: [ [ 999, 999 ] ],
                nested: {
                  FieldPresence: {
                    values: {
                      FIELD_PRESENCE_UNKNOWN: 0,
                      EXPLICIT: 1,
                      IMPLICIT: 2,
                      LEGACY_REQUIRED: 3
                    }
                  },
                  EnumType: {
                    values: {
                      ENUM_TYPE_UNKNOWN: 0,
                      OPEN: 1,
                      CLOSED: 2
                    }
                  },
                  RepeatedFieldEncoding: {
                    values: {
                      REPEATED_FIELD_ENCODING_UNKNOWN: 0,
                      PACKED: 1,
                      EXPANDED: 2
                    }
                  },
                  Utf8Validation: {
                    values: {
                      UTF8_VALIDATION_UNKNOWN: 0,
                      VERIFY: 2,
                      NONE: 3
                    }
                  },
                  MessageEncoding: {
                    values: {
                      MESSAGE_ENCODING_UNKNOWN: 0,
                      LENGTH_PREFIXED: 1,
                      DELIMITED: 2
                    }
                  },
                  JsonFormat: {
                    values: {
                      JSON_FORMAT_UNKNOWN: 0,
                      ALLOW: 1,
                      LEGACY_BEST_EFFORT: 2
                    }
                  },
                  EnforceNamingStyle: {
                    values: {
                      ENFORCE_NAMING_STYLE_UNKNOWN: 0,
                      STYLE2024: 1,
                      STYLE_LEGACY: 2
                    }
                  },
                  VisibilityFeature: {
                    fields: {},
                    reserved: [ [ 1, 536870911 ] ],
                    nested: {
                      DefaultSymbolVisibility: {
                        values: {
                          DEFAULT_SYMBOL_VISIBILITY_UNKNOWN: 0,
                          EXPORT_ALL: 1,
                          EXPORT_TOP_LEVEL: 2,
                          LOCAL_ALL: 3,
                          STRICT: 4
                        }
                      }
                    }
                  }
                }
              },
              FeatureSetDefaults: {
                edition: "proto2",
                fields: {
                  defaults: {
                    rule: "repeated",
                    type: "FeatureSetEditionDefault",
                    id: 1
                  },
                  minimumEdition: {
                    type: "Edition",
                    id: 4
                  },
                  maximumEdition: {
                    type: "Edition",
                    id: 5
                  }
                },
                nested: {
                  FeatureSetEditionDefault: {
                    fields: {
                      edition: {
                        type: "Edition",
                        id: 3
                      },
                      overridableFeatures: {
                        type: "FeatureSet",
                        id: 4
                      },
                      fixedFeatures: {
                        type: "FeatureSet",
                        id: 5
                      }
                    },
                    reserved: [ [ 1, 1 ], [ 2, 2 ], "features" ]
                  }
                }
              },
              SourceCodeInfo: {
                edition: "proto2",
                fields: {
                  location: {
                    rule: "repeated",
                    type: "Location",
                    id: 1
                  }
                },
                extensions: [ [ 536e6, 536e6 ] ],
                nested: {
                  Location: {
                    fields: {
                      path: {
                        rule: "repeated",
                        type: "int32",
                        id: 1,
                        options: {
                          packed: !0
                        }
                      },
                      span: {
                        rule: "repeated",
                        type: "int32",
                        id: 2,
                        options: {
                          packed: !0
                        }
                      },
                      leadingComments: {
                        type: "string",
                        id: 3
                      },
                      trailingComments: {
                        type: "string",
                        id: 4
                      },
                      leadingDetachedComments: {
                        rule: "repeated",
                        type: "string",
                        id: 6
                      }
                    }
                  }
                }
              },
              GeneratedCodeInfo: {
                edition: "proto2",
                fields: {
                  annotation: {
                    rule: "repeated",
                    type: "Annotation",
                    id: 1
                  }
                },
                nested: {
                  Annotation: {
                    fields: {
                      path: {
                        rule: "repeated",
                        type: "int32",
                        id: 1,
                        options: {
                          packed: !0
                        }
                      },
                      sourceFile: {
                        type: "string",
                        id: 2
                      },
                      begin: {
                        type: "int32",
                        id: 3
                      },
                      end: {
                        type: "int32",
                        id: 4
                      },
                      semantic: {
                        type: "Semantic",
                        id: 5
                      }
                    },
                    nested: {
                      Semantic: {
                        values: {
                          NONE: 0,
                          SET: 1,
                          ALIAS: 2
                        }
                      }
                    }
                  }
                }
              },
              SymbolVisibility: {
                edition: "proto2",
                values: {
                  VISIBILITY_UNSET: 0,
                  VISIBILITY_LOCAL: 1,
                  VISIBILITY_EXPORT: 2
                }
              }
            }
          }
        }
      }
    }
  };
});

var uh = C(function(x, ch) {
  var Me = qs();
  ch.exports = x = Me.descriptor = Me.Root.fromJSON(lo()).lookup(".google.protobuf");
  var {Namespace: ih, Root: Li, Enum: zt, Type: lt, Field: Xt, MapField: fT, OneOf: Us, Service: Fi, Method: Bs} = Me, sh = Me.util.patterns, {numberRe: pT, typeRefRe: zs} = sh;
  Li.fromDescriptor = function(t) {
    if (typeof t.length === "number") t = x.FileDescriptorSet.decode(t);
    var r = new Li;
    if (t.file) {
      var i, s;
      for (var n = 0, a; n < t.file.length; ++n) {
        if (s = r, (i = t.file[n]).package && i.package.length) s = r.define(i.package);
        var o = TT(i);
        if (i.name && i.name.length) r.files.push(s.filename = i.name);
        if (i.messageType) for (a = 0; a < i.messageType.length; ++a) s.add(lt.fromDescriptor(i.messageType[a], o));
        if (i.enumType) for (a = 0; a < i.enumType.length; ++a) s.add(zt.fromDescriptor(i.enumType[a], o));
        if (i.extension) for (a = 0; a < i.extension.length; ++a) s.add(Xt.fromDescriptor(i.extension[a], o));
        if (i.service) for (a = 0; a < i.service.length; ++a) s.add(Fi.fromDescriptor(i.service[a], o));
        var l = jr(i.options, x.FileOptions);
        if (l) {
          var c = Object.keys(l);
          for (a = 0; a < c.length; ++a) s.setOption(c[a], l[c[a]]);
        }
      }
    }
    return r.resolveAll();
  };
  Li.prototype.toDescriptor = function(t) {
    var r = x.FileDescriptorSet.create();
    return nh(this, r.file, t), r;
  };
  function nh(e, t, r) {
    var i = x.FileDescriptorProto.create({
      name: e.filename || (e.fullName.substring(1).replace(/\./g, "_") || "root") + ".proto"
    });
    if (RT(r, i), !(e instanceof Li)) i.package = e.fullName.substring(1);
    for (var s = 0, n; s < e.nestedArray.length; ++s) if ((n = e._nestedArray[s]) instanceof lt) i.messageType.push(n.toDescriptor(r)); else if (n instanceof zt) i.enumType.push(n.toDescriptor()); else if (n instanceof Xt) i.extension.push(n.toDescriptor(r)); else if (n instanceof Fi) i.service.push(n.toDescriptor()); else if (n instanceof ih) nh(n, t, r);
    if (i.options = Gr(e.options, x.FileOptions), i.messageType.length + i.enumType.length + i.extension.length + i.service.length) t.push(i);
  }
  var gT = 0;
  lt.fromDescriptor = function(t, r, i) {
    if (typeof t.length === "number") t = x.DescriptorProto.decode(t);
    var s = new lt(t.name.length ? t.name : "Type" + gT++, jr(t.options, x.MessageOptions)), n;
    if (!i) s._edition = r;
    if (t.oneofDecl) for (n = 0; n < t.oneofDecl.length; ++n) s.add(Us.fromDescriptor(t.oneofDecl[n]));
    if (t.field) for (n = 0; n < t.field.length; ++n) {
      var a = Xt.fromDescriptor(t.field[n], r, !0);
      if (s.add(a), t.field[n].hasOwnProperty("oneofIndex")) s.oneofsArray[t.field[n].oneofIndex].add(a);
    }
    if (t.extension) for (n = 0; n < t.extension.length; ++n) s.add(Xt.fromDescriptor(t.extension[n], r, !0));
    if (t.nestedType) {
      for (n = 0; n < t.nestedType.length; ++n) if (s.add(lt.fromDescriptor(t.nestedType[n], r, !0)), 
      t.nestedType[n].options && t.nestedType[n].options.mapEntry) s.setOption("map_entry", !0);
    }
    if (t.enumType) for (n = 0; n < t.enumType.length; ++n) s.add(zt.fromDescriptor(t.enumType[n], r, !0));
    if (t.extensionRange && t.extensionRange.length) {
      s.extensions = [];
      for (n = 0; n < t.extensionRange.length; ++n) s.extensions.push([ t.extensionRange[n].start, t.extensionRange[n].end ]);
    }
    if (t.reservedRange && t.reservedRange.length || t.reservedName && t.reservedName.length) {
      if (s.reserved = [], t.reservedRange) for (n = 0; n < t.reservedRange.length; ++n) s.reserved.push([ t.reservedRange[n].start, t.reservedRange[n].end ]);
      if (t.reservedName) for (n = 0; n < t.reservedName.length; ++n) s.reserved.push(t.reservedName[n]);
    }
    return s;
  };
  lt.prototype.toDescriptor = function(t) {
    var r = x.DescriptorProto.create({
      name: this.name
    }), i;
    for (i = 0; i < this.fieldsArray.length; ++i) {
      var s;
      if (r.field.push(s = this._fieldsArray[i].toDescriptor(t)), this._fieldsArray[i] instanceof fT) {
        var n = co(this._fieldsArray[i].keyType, this._fieldsArray[i].resolvedKeyType, !1), a = co(this._fieldsArray[i].type, this._fieldsArray[i].resolvedType, !1), o = a === 11 || a === 14 ? this._fieldsArray[i].resolvedType && lh(this.parent, this._fieldsArray[i].resolvedType) || this._fieldsArray[i].type : void 0;
        r.nestedType.push(x.DescriptorProto.create({
          name: s.typeName,
          field: [ x.FieldDescriptorProto.create({
            name: "key",
            number: 1,
            label: 1,
            type: n
          }), x.FieldDescriptorProto.create({
            name: "value",
            number: 2,
            label: 1,
            type: a,
            typeName: o
          }) ],
          options: x.MessageOptions.create({
            mapEntry: !0
          })
        }));
      }
    }
    for (i = 0; i < this.oneofsArray.length; ++i) r.oneofDecl.push(this._oneofsArray[i].toDescriptor());
    for (i = 0; i < this.nestedArray.length; ++i) if (this._nestedArray[i] instanceof Xt) r.field.push(this._nestedArray[i].toDescriptor(t)); else if (this._nestedArray[i] instanceof lt) r.nestedType.push(this._nestedArray[i].toDescriptor(t)); else if (this._nestedArray[i] instanceof zt) r.enumType.push(this._nestedArray[i].toDescriptor());
    if (this.extensions) for (i = 0; i < this.extensions.length; ++i) r.extensionRange.push(x.DescriptorProto.ExtensionRange.create({
      start: this.extensions[i][0],
      end: this.extensions[i][1]
    }));
    if (this.reserved) for (i = 0; i < this.reserved.length; ++i) if (typeof this.reserved[i] === "string") r.reservedName.push(this.reserved[i]); else r.reservedRange.push(x.DescriptorProto.ReservedRange.create({
      start: this.reserved[i][0],
      end: this.reserved[i][1]
    }));
    return r.options = Gr(this.options, x.MessageOptions), r;
  };
  Xt.fromDescriptor = function(t, r, i) {
    if (typeof t.length === "number") t = x.DescriptorProto.decode(t);
    if (typeof t.number !== "number") throw Error("missing field id");
    var s = t.typeName, n;
    if (s != null && s !== "") {
      if (typeof s !== "string" || !zs.test(s)) throw Error("illegal type name: " + s);
      n = s;
    } else n = ST(t.type);
    var a;
    switch (t.label) {
     case 1:
      a = void 0;
      break;

     case 2:
      a = "required";
      break;

     case 3:
      a = "repeated";
      break;

     default:
      throw Error("illegal label: " + t.label);
    }
    var o = t.extendee;
    if (o != null && o !== "") {
      if (typeof o !== "string" || !zs.test(o)) throw Error("illegal type name: " + o);
    } else o = void 0;
    var l = new Xt(t.name.length ? t.name : "field" + t.number, t.number, n, a, o);
    if (!i) l._edition = r;
    if (l.options = jr(t.options, x.FieldOptions), t.proto3_optional) l.options.proto3_optional = !0;
    if (t.defaultValue && t.defaultValue.length) {
      var c = t.defaultValue;
      switch (c) {
       case "true":
       case "TRUE":
        c = !0;
        break;

       case "false":
       case "FALSE":
        c = !1;
        break;

       default:
        var u = pT.exec(c);
        if (u) c = parseInt(c);
        break;
      }
      l.setOption("default", c);
    }
    if (CT(t.type)) {
      if (r === "proto3") {
        if (t.options && !t.options.packed) l.setOption("packed", !1);
      } else if ((!r || r === "proto2") && t.options && t.options.packed) l.setOption("packed", !0);
    }
    return l;
  };
  Xt.prototype.toDescriptor = function(t) {
    var r = x.FieldDescriptorProto.create({
      name: this.name,
      number: this.id
    });
    if (this.map) r.type = 11, r.typeName = Me.util.ucFirst(this.name), r.label = 3; else {
      switch (r.type = co(this.type, this.resolve().resolvedType, this.delimited)) {
       case 10:
       case 11:
       case 14:
        r.typeName = this.resolvedType ? lh(this.parent, this.resolvedType) : this.type;
        break;
      }
      if (this.rule === "repeated") r.label = 3; else if (this.required && t === "proto2") r.label = 2; else r.label = 1;
    }
    if (r.extendee = this.extensionField ? this.extensionField.parent.fullName : this.extend, 
    this.partOf && this.parent instanceof lt) {
      if ((r.oneofIndex = this.parent.oneofsArray.indexOf(this.partOf)) < 0) throw Error("missing oneof");
    }
    if (this.options) {
      if (r.options = Gr(this.options, x.FieldOptions), this.options.default != null) r.defaultValue = String(this.options.default);
      if (this.options.proto3_optional) r.proto3_optional = !0;
    }
    if (t === "proto3") {
      if (!this.packed) (r.options || (r.options = x.FieldOptions.create())).packed = !1;
    } else if ((!t || t === "proto2") && this.packed) (r.options || (r.options = x.FieldOptions.create())).packed = !0;
    return r;
  };
  var mT = 0;
  zt.fromDescriptor = function(t, r, i) {
    if (typeof t.length === "number") t = x.EnumDescriptorProto.decode(t);
    var s = {};
    if (t.value) for (var n = 0; n < t.value.length; ++n) {
      var a = t.value[n].name, o = t.value[n].number || 0;
      s[a && a.length ? a : "NAME" + o] = o;
    }
    var l = new zt(t.name && t.name.length ? t.name : "Enum" + mT++, s, jr(t.options, x.EnumOptions));
    if (!i) l._edition = r;
    return l;
  };
  zt.prototype.toDescriptor = function() {
    var t = [];
    for (var r = 0, i = Object.keys(this.values); r < i.length; ++r) t.push(x.EnumValueDescriptorProto.create({
      name: i[r],
      number: this.values[i[r]]
    }));
    return x.EnumDescriptorProto.create({
      name: this.name,
      value: t,
      options: Gr(this.options, x.EnumOptions)
    });
  };
  var vT = 0;
  Us.fromDescriptor = function(t) {
    if (typeof t.length === "number") t = x.OneofDescriptorProto.decode(t);
    return new Us(t.name && t.name.length ? t.name : "oneof" + vT++);
  };
  Us.prototype.toDescriptor = function() {
    return x.OneofDescriptorProto.create({
      name: this.name
    });
  };
  var yT = 0;
  Fi.fromDescriptor = function(t, r, i) {
    if (typeof t.length === "number") t = x.ServiceDescriptorProto.decode(t);
    var s = new Fi(t.name && t.name.length ? t.name : "Service" + yT++, jr(t.options, x.ServiceOptions));
    if (!i) s._edition = r;
    if (t.method) for (var n = 0; n < t.method.length; ++n) s.add(Bs.fromDescriptor(t.method[n]));
    return s;
  };
  Fi.prototype.toDescriptor = function() {
    var t = [];
    for (var r = 0; r < this.methodsArray.length; ++r) t.push(this._methodsArray[r].toDescriptor());
    return x.ServiceDescriptorProto.create({
      name: this.name,
      method: t,
      options: Gr(this.options, x.ServiceOptions)
    });
  };
  var _T = 0;
  Bs.fromDescriptor = function(t) {
    if (typeof t.length === "number") t = x.MethodDescriptorProto.decode(t);
    var r = t.inputType, i = t.outputType;
    if (r != null && r !== "") {
      if (typeof r !== "string" || !zs.test(r)) throw Error("illegal type name: " + r);
    }
    if (i != null && i !== "") {
      if (typeof i !== "string" || !zs.test(i)) throw Error("illegal type name: " + i);
    }
    return new Bs(t.name && t.name.length ? t.name : "Method" + _T++, "rpc", r, i, Boolean(t.clientStreaming), Boolean(t.serverStreaming), jr(t.options, x.MethodOptions));
  };
  Bs.prototype.toDescriptor = function() {
    return x.MethodDescriptorProto.create({
      name: this.name,
      inputType: this.resolvedRequestType ? this.resolvedRequestType.fullName : this.requestType,
      outputType: this.resolvedResponseType ? this.resolvedResponseType.fullName : this.responseType,
      clientStreaming: this.requestStream,
      serverStreaming: this.responseStream,
      options: Gr(this.options, x.MethodOptions)
    });
  };
  function ST(e) {
    switch (e) {
     case 1:
      return "double";

     case 2:
      return "float";

     case 3:
      return "int64";

     case 4:
      return "uint64";

     case 5:
      return "int32";

     case 6:
      return "fixed64";

     case 7:
      return "fixed32";

     case 8:
      return "bool";

     case 9:
      return "string";

     case 12:
      return "bytes";

     case 13:
      return "uint32";

     case 15:
      return "sfixed32";

     case 16:
      return "sfixed64";

     case 17:
      return "sint32";

     case 18:
      return "sint64";
    }
    throw Error("illegal type: " + e);
  }
  function CT(e) {
    switch (e) {
     case 1:
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
     case 7:
     case 8:
     case 13:
     case 14:
     case 15:
     case 16:
     case 17:
     case 18:
      return !0;
    }
    return !1;
  }
  function co(e, t, r) {
    switch (e) {
     case "double":
      return 1;

     case "float":
      return 2;

     case "int64":
      return 3;

     case "uint64":
      return 4;

     case "int32":
      return 5;

     case "fixed64":
      return 6;

     case "fixed32":
      return 7;

     case "bool":
      return 8;

     case "string":
      return 9;

     case "bytes":
      return 12;

     case "uint32":
      return 13;

     case "sfixed32":
      return 15;

     case "sfixed64":
      return 16;

     case "sint32":
      return 17;

     case "sint64":
      return 18;
    }
    if (t instanceof zt) return 14;
    if (t instanceof lt) return r ? 10 : 11;
    throw Error("illegal type: " + e);
  }
  function ah(e, t) {
    var r = {};
    for (var i = 0, s, n; i < t.fieldsArray.length; ++i) {
      if ((n = (s = t._fieldsArray[i]).name) === "uninterpretedOption") continue;
      if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
      var a = ET(n);
      if (s.resolvedType instanceof lt) r[a] = ah(e[n], s.resolvedType); else if (s.resolvedType instanceof zt) r[a] = s.resolvedType.valuesById[e[n]]; else r[a] = e[n];
    }
    return r;
  }
  function jr(e, t) {
    if (!e) return;
    return ah(t.toObject(e), t);
  }
  function oh(e, t) {
    var r = {}, i = Object.keys(e);
    for (var s = 0; s < i.length; ++s) {
      var n = i[s], a = Me.util.camelCase(n);
      if (!Object.prototype.hasOwnProperty.call(t.fields, a)) continue;
      var o = t.fields[a];
      if (o.resolvedType instanceof lt) r[a] = oh(e[n], o.resolvedType); else r[a] = e[n];
      if (o.repeated && !Array.isArray(r[a])) r[a] = [ r[a] ];
    }
    return r;
  }
  function Gr(e, t) {
    if (!e) return;
    return t.fromObject(oh(e, t));
  }
  function lh(e, t) {
    var r = e.fullName.split("."), i = t.fullName.split("."), s = 0, n = 0, a = i.length - 1;
    if (!(e instanceof Li) && t instanceof ih) while (s < r.length && n < a && r[s] === i[n]) {
      var o = t.lookup(r[s++], !0);
      if (o !== null && o !== t) break;
      ++n;
    } else for (;s < r.length && n < a && r[s] === i[n]; ++s, ++n) ;
    return i.slice(n).join(".");
  }
  function ET(e) {
    return e.substring(0, 1) + e.substring(1).replace(/([A-Z])(?=[a-z]|$)/g, function(t, r) {
      return "_" + r.toLowerCase();
    });
  }
  function TT(e) {
    if (e.syntax === "editions") switch (e.edition) {
     case x.Edition.EDITION_2023:
      return "2023";

     default:
      throw Error("Unsupported edition " + e.edition);
    }
    if (e.syntax === "proto3") return "proto3";
    return "proto2";
  }
  function RT(e, t) {
    if (!e) return;
    if (e === "proto2" || e === "proto3") t.syntax = e; else switch (t.syntax = "editions", 
    e) {
     case "2023":
      t.edition = x.Edition.EDITION_2023;
      break;

     default:
      throw Error("Unsupported edition " + e);
    }
  }
});

var dh = C(function(wA, bT) {
  bT.exports = {
    nested: {
      google: {
        nested: {
          protobuf: {
            nested: {
              Api: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  methods: {
                    rule: "repeated",
                    type: "Method",
                    id: 2
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 3
                  },
                  version: {
                    type: "string",
                    id: 4
                  },
                  sourceContext: {
                    type: "SourceContext",
                    id: 5
                  },
                  mixins: {
                    rule: "repeated",
                    type: "Mixin",
                    id: 6
                  },
                  syntax: {
                    type: "Syntax",
                    id: 7
                  }
                }
              },
              Method: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  requestTypeUrl: {
                    type: "string",
                    id: 2
                  },
                  requestStreaming: {
                    type: "bool",
                    id: 3
                  },
                  responseTypeUrl: {
                    type: "string",
                    id: 4
                  },
                  responseStreaming: {
                    type: "bool",
                    id: 5
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 6
                  },
                  syntax: {
                    type: "Syntax",
                    id: 7
                  }
                }
              },
              Mixin: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  root: {
                    type: "string",
                    id: 2
                  }
                }
              },
              SourceContext: {
                fields: {
                  fileName: {
                    type: "string",
                    id: 1
                  }
                }
              },
              Option: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "Any",
                    id: 2
                  }
                }
              },
              Syntax: {
                values: {
                  SYNTAX_PROTO2: 0,
                  SYNTAX_PROTO3: 1
                }
              }
            }
          }
        }
      }
    }
  };
});

var hh = C(function(AA, OT) {
  OT.exports = {
    nested: {
      google: {
        nested: {
          protobuf: {
            nested: {
              SourceContext: {
                fields: {
                  fileName: {
                    type: "string",
                    id: 1
                  }
                }
              }
            }
          }
        }
      }
    }
  };
});

var fh = C(function(PA, wT) {
  wT.exports = {
    nested: {
      google: {
        nested: {
          protobuf: {
            nested: {
              Type: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  fields: {
                    rule: "repeated",
                    type: "Field",
                    id: 2
                  },
                  oneofs: {
                    rule: "repeated",
                    type: "string",
                    id: 3
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 4
                  },
                  sourceContext: {
                    type: "SourceContext",
                    id: 5
                  },
                  syntax: {
                    type: "Syntax",
                    id: 6
                  }
                }
              },
              Field: {
                fields: {
                  kind: {
                    type: "Kind",
                    id: 1
                  },
                  cardinality: {
                    type: "Cardinality",
                    id: 2
                  },
                  number: {
                    type: "int32",
                    id: 3
                  },
                  name: {
                    type: "string",
                    id: 4
                  },
                  typeUrl: {
                    type: "string",
                    id: 6
                  },
                  oneofIndex: {
                    type: "int32",
                    id: 7
                  },
                  packed: {
                    type: "bool",
                    id: 8
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 9
                  },
                  jsonName: {
                    type: "string",
                    id: 10
                  },
                  defaultValue: {
                    type: "string",
                    id: 11
                  }
                },
                nested: {
                  Kind: {
                    values: {
                      TYPE_UNKNOWN: 0,
                      TYPE_DOUBLE: 1,
                      TYPE_FLOAT: 2,
                      TYPE_INT64: 3,
                      TYPE_UINT64: 4,
                      TYPE_INT32: 5,
                      TYPE_FIXED64: 6,
                      TYPE_FIXED32: 7,
                      TYPE_BOOL: 8,
                      TYPE_STRING: 9,
                      TYPE_GROUP: 10,
                      TYPE_MESSAGE: 11,
                      TYPE_BYTES: 12,
                      TYPE_UINT32: 13,
                      TYPE_ENUM: 14,
                      TYPE_SFIXED32: 15,
                      TYPE_SFIXED64: 16,
                      TYPE_SINT32: 17,
                      TYPE_SINT64: 18
                    }
                  },
                  Cardinality: {
                    values: {
                      CARDINALITY_UNKNOWN: 0,
                      CARDINALITY_OPTIONAL: 1,
                      CARDINALITY_REQUIRED: 2,
                      CARDINALITY_REPEATED: 3
                    }
                  }
                }
              },
              Enum: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  enumvalue: {
                    rule: "repeated",
                    type: "EnumValue",
                    id: 2
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 3
                  },
                  sourceContext: {
                    type: "SourceContext",
                    id: 4
                  },
                  syntax: {
                    type: "Syntax",
                    id: 5
                  }
                }
              },
              EnumValue: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  number: {
                    type: "int32",
                    id: 2
                  },
                  options: {
                    rule: "repeated",
                    type: "Option",
                    id: 3
                  }
                }
              },
              Option: {
                fields: {
                  name: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "Any",
                    id: 2
                  }
                }
              },
              Syntax: {
                values: {
                  SYNTAX_PROTO2: 0,
                  SYNTAX_PROTO3: 1
                }
              },
              Any: {
                fields: {
                  type_url: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "bytes",
                    id: 2
                  }
                }
              },
              SourceContext: {
                fields: {
                  fileName: {
                    type: "string",
                    id: 1
                  }
                }
              }
            }
          }
        }
      }
    }
  };
});

var vh = C(function(gh) {
  Object.defineProperty(gh, "__esModule", {
    value: !0
  });
  gh.addCommonProtos = gh.loadProtosWithOptionsSync = gh.loadProtosWithOptions = void 0;
  var Hs = Ne("fs"), Ws = Ne("path"), je = qs();
  function ph(e, t) {
    let r = e.resolvePath;
    e.resolvePath = (i, s) => {
      if (Ws.isAbsolute(s)) return s;
      for (let n of t) {
        let a = Ws.join(n, s);
        try {
          return Hs.accessSync(a, Hs.constants.R_OK), a;
        } catch (o) {
          continue;
        }
      }
      return process.emitWarning(`${s} not found in any of the include paths ${t}`), r(i, s);
    };
  }
  async function AT(e, t) {
    let r = new je.Root;
    if (t = t || {}, t.includeDirs) {
      if (!Array.isArray(t.includeDirs)) return Promise.reject(Error("The includeDirs option must be an array"));
      ph(r, t.includeDirs);
    }
    let i = await r.load(e, t);
    return i.resolveAll(), i;
  }
  gh.loadProtosWithOptions = AT;
  function PT(e, t) {
    let r = new je.Root;
    if (t = t || {}, t.includeDirs) {
      if (!Array.isArray(t.includeDirs)) throw Error("The includeDirs option must be an array");
      ph(r, t.includeDirs);
    }
    let i = r.loadSync(e, t);
    return i.resolveAll(), i;
  }
  gh.loadProtosWithOptionsSync = PT;
  function NT() {
    let e = dh(), t = lo(), r = hh(), i = fh();
    je.common("api", e.nested.google.nested.protobuf.nested), je.common("descriptor", t.nested.google.nested.protobuf.nested), 
    je.common("source_context", r.nested.google.nested.protobuf.nested), je.common("type", i.nested.google.nested.protobuf.nested);
  }
  gh.addCommonProtos = NT;
});

var po = C(function(Th) {
  Object.defineProperty(Th, "__esModule", {
    value: !0
  });
  Th.loadFileDescriptorSetFromObject = Th.loadFileDescriptorSetFromBuffer = Th.fromJSON = Th.loadSync = Th.load = Th.IdempotencyLevel = Th.isAnyExtension = Th.Long = void 0;
  var xT = Qu(), ne = qs(), $r = uh(), Vr = vh(), kT = Ser();
  Th.Long = kT;
  function DT(e) {
    return "@type" in e && typeof e["@type"] === "string";
  }
  Th.isAnyExtension = DT;
  var _h;
  (function(e) {
    e.IDEMPOTENCY_UNKNOWN = "IDEMPOTENCY_UNKNOWN", e.NO_SIDE_EFFECTS = "NO_SIDE_EFFECTS", 
    e.IDEMPOTENT = "IDEMPOTENT";
  })(_h = Th.IdempotencyLevel || (Th.IdempotencyLevel = {}));
  var Sh = {
    longs: String,
    enums: String,
    bytes: String,
    defaults: !0,
    oneofs: !0,
    json: !0
  };
  function LT(e, t) {
    if (e === "") return t; else return e + "." + t;
  }
  function FT(e) {
    return e instanceof ne.Service || e instanceof ne.Type || e instanceof ne.Enum;
  }
  function qT(e) {
    return e instanceof ne.Namespace || e instanceof ne.Root;
  }
  function Ch(e, t) {
    let r = LT(t, e.name);
    if (FT(e)) return [ [ r, e ] ]; else if (qT(e) && typeof e.nested < "u") return Object.keys(e.nested).map(i => Ch(e.nested[i], r)).reduce((i, s) => i.concat(s), []);
    return [];
  }
  function uo(e, t) {
    return function(i) {
      return e.toObject(e.decode(i), t);
    };
  }
  function ho(e) {
    return function(r) {
      if (Array.isArray(r)) throw Error(`Failed to serialize message: expected object with ${e.name} structure, got array instead`);
      let i = e.fromObject(r);
      return e.encode(i).finish();
    };
  }
  function UT(e) {
    return (e || []).reduce((t, r) => {
      for (let [i, s] of Object.entries(r)) switch (i) {
       case "uninterpreted_option":
        t.uninterpreted_option.push(r.uninterpreted_option);
        break;

       default:
        t[i] = s;
      }
      return t;
    }, {
      deprecated: !1,
      idempotency_level: _h.IDEMPOTENCY_UNKNOWN,
      uninterpreted_option: []
    });
  }
  function BT(e, t, r, i) {
    let {resolvedRequestType: s, resolvedResponseType: n} = e;
    return {
      path: "/" + t + "/" + e.name,
      requestStream: !!e.requestStream,
      responseStream: !!e.responseStream,
      requestSerialize: ho(s),
      requestDeserialize: uo(s, r),
      responseSerialize: ho(n),
      responseDeserialize: uo(n, r),
      originalName: xT(e.name),
      requestType: fo(s, r, i),
      responseType: fo(n, r, i),
      options: UT(e.parsedOptions)
    };
  }
  function zT(e, t, r, i) {
    let s = {};
    for (let n of e.methodsArray) s[n.name] = BT(n, t, r, i);
    return s;
  }
  function fo(e, t, r) {
    let i = e.toDescriptor("proto3");
    return {
      format: "Protocol Buffer 3 DescriptorProto",
      type: i.$type.toObject(i, Sh),
      fileDescriptorProtos: r,
      serialize: ho(e),
      deserialize: uo(e, t)
    };
  }
  function HT(e, t) {
    let r = e.toDescriptor("proto3");
    return {
      format: "Protocol Buffer 3 EnumDescriptorProto",
      type: r.$type.toObject(r, Sh),
      fileDescriptorProtos: t
    };
  }
  function WT(e, t, r, i) {
    if (e instanceof ne.Service) return zT(e, t, r, i); else if (e instanceof ne.Type) return fo(e, r, i); else if (e instanceof ne.Enum) return HT(e, i); else throw Error("Type mismatch in reflection object handling");
  }
  function js(e, t) {
    let r = {};
    e.resolveAll();
    let s = e.toDescriptor("proto3").file.map(n => Buffer.from($r.FileDescriptorProto.encode(n).finish()));
    for (let [n, a] of Ch(e, "")) r[n] = WT(a, n, t, s);
    return r;
  }
  function Eh(e, t) {
    t = t || {};
    let r = ne.Root.fromDescriptor(e);
    return r.resolveAll(), js(r, t);
  }
  function jT(e, t) {
    return Vr.loadProtosWithOptions(e, t).then(r => js(r, t));
  }
  Th.load = jT;
  function GT(e, t) {
    let r = Vr.loadProtosWithOptionsSync(e, t);
    return js(r, t);
  }
  Th.loadSync = GT;
  function $T(e, t) {
    t = t || {};
    let r = ne.Root.fromJSON(e);
    return r.resolveAll(), js(r, t);
  }
  Th.fromJSON = $T;
  function VT(e, t) {
    let r = $r.FileDescriptorSet.decode(e);
    return Eh(r, t);
  }
  Th.loadFileDescriptorSetFromBuffer = VT;
  function YT(e, t) {
    let r = $r.FileDescriptorSet.fromObject(e);
    return Eh(r, t);
  }
  Th.loadFileDescriptorSetFromObject = YT;
  Vr.addCommonProtos();
});

var Zt = C(function(zh) {
  var __dirname = "/home/runner/work/claude-cli-internal/claude-cli-internal/node_modules/@grpc/grpc-js/build/src";
  Object.defineProperty(zh, "__esModule", {
    value: !0
  });
  zh.registerChannelzSocket = zh.registerChannelzServer = zh.registerChannelzSubchannel = zh.registerChannelzChannel = zh.ChannelzCallTrackerStub = zh.ChannelzCallTracker = zh.ChannelzChildrenTrackerStub = zh.ChannelzChildrenTracker = zh.ChannelzTrace = zh.ChannelzTraceStub = void 0;
  zh.unregisterChannelzRef = r0;
  zh.getChannelzHandlers = Uh;
  zh.getChannelzServiceDefinition = Bh;
  zh.setup = f0;
  var Qt = Ne("net"), Ie = Qc(), _t = Ae(), Ct = k(), Ph = Pe(), Nh = fs(), Mh = vs();
  function go(e) {
    return {
      channel_id: e.id,
      name: e.name
    };
  }
  function mo(e) {
    return {
      subchannel_id: e.id,
      name: e.name
    };
  }
  function t0(e) {
    return {
      server_id: e.id
    };
  }
  function $s(e) {
    return {
      socket_id: e.id,
      name: e.name
    };
  }
  var bh = 32, vo = 100;
  class Ih {
    constructor() {
      this.events = [], this.creationTimestamp = new Date, this.eventsLogged = 0;
    }
    addTrace() {}
    getTraceMessage() {
      return {
        creation_timestamp: St(this.creationTimestamp),
        num_events_logged: this.eventsLogged,
        events: []
      };
    }
  }
  zh.ChannelzTraceStub = Ih;
  class xh {
    constructor() {
      this.events = [], this.eventsLogged = 0, this.creationTimestamp = new Date;
    }
    addTrace(e, t, r) {
      let i = new Date;
      if (this.events.push({
        description: t,
        severity: e,
        timestamp: i,
        childChannel: (r === null || r === void 0 ? void 0 : r.kind) === "channel" ? r : void 0,
        childSubchannel: (r === null || r === void 0 ? void 0 : r.kind) === "subchannel" ? r : void 0
      }), this.events.length >= bh * 2) this.events = this.events.slice(bh);
      this.eventsLogged += 1;
    }
    getTraceMessage() {
      return {
        creation_timestamp: St(this.creationTimestamp),
        num_events_logged: this.eventsLogged,
        events: this.events.map(e => ({
          description: e.description,
          severity: e.severity,
          timestamp: St(e.timestamp),
          channel_ref: e.childChannel ? go(e.childChannel) : null,
          subchannel_ref: e.childSubchannel ? mo(e.childSubchannel) : null
        }))
      };
    }
  }
  zh.ChannelzTrace = xh;
  class yo {
    constructor() {
      this.channelChildren = new Ie.OrderedMap, this.subchannelChildren = new Ie.OrderedMap, 
      this.socketChildren = new Ie.OrderedMap, this.trackerMap = {
        ["channel"]: this.channelChildren,
        ["subchannel"]: this.subchannelChildren,
        ["socket"]: this.socketChildren
      };
    }
    refChild(e) {
      let t = this.trackerMap[e.kind], r = t.find(e.id);
      if (r.equals(t.end())) t.setElement(e.id, {
        ref: e,
        count: 1
      }, r); else r.pointer[1].count += 1;
    }
    unrefChild(e) {
      let t = this.trackerMap[e.kind], r = t.getElementByKey(e.id);
      if (r !== void 0) {
        if (r.count -= 1, r.count === 0) t.eraseElementByKey(e.id);
      }
    }
    getChildLists() {
      return {
        channels: this.channelChildren,
        subchannels: this.subchannelChildren,
        sockets: this.socketChildren
      };
    }
  }
  zh.ChannelzChildrenTracker = yo;
  class kh extends yo {
    refChild() {}
    unrefChild() {}
  }
  zh.ChannelzChildrenTrackerStub = kh;
  class _o {
    constructor() {
      this.callsStarted = 0, this.callsSucceeded = 0, this.callsFailed = 0, this.lastCallStartedTimestamp = null;
    }
    addCallStarted() {
      this.callsStarted += 1, this.lastCallStartedTimestamp = new Date;
    }
    addCallSucceeded() {
      this.callsSucceeded += 1;
    }
    addCallFailed() {
      this.callsFailed += 1;
    }
  }
  zh.ChannelzCallTracker = _o;
  class Dh extends _o {
    addCallStarted() {}
    addCallSucceeded() {}
    addCallFailed() {}
  }
  zh.ChannelzCallTrackerStub = Dh;
  var Ht = {
    ["channel"]: new Ie.OrderedMap,
    ["subchannel"]: new Ie.OrderedMap,
    ["server"]: new Ie.OrderedMap,
    ["socket"]: new Ie.OrderedMap
  }, Vs = e => {
    let t = 1;
    function r() {
      return t++;
    }
    let i = Ht[e];
    return (s, n, a) => {
      let o = r(), l = {
        id: o,
        name: s,
        kind: e
      };
      if (a) i.setElement(o, {
        ref: l,
        getInfo: n
      });
      return l;
    };
  };
  zh.registerChannelzChannel = Vs("channel");
  zh.registerChannelzSubchannel = Vs("subchannel");
  zh.registerChannelzServer = Vs("server");
  zh.registerChannelzSocket = Vs("socket");
  function r0(e) {
    Ht[e.kind].eraseElementByKey(e.id);
  }
  function i0(e) {
    let t = Number.parseInt(e, 16);
    return [ t / 256 | 0, t % 256 ];
  }
  function Oh(e) {
    if (e === "") return [];
    let t = e.split(":").map(i => i0(i));
    return [].concat(...t);
  }
  function s0(e) {
    return Qt.isIPv6(e) && e.toLowerCase().startsWith("::ffff:") && Qt.isIPv4(e.substring(7));
  }
  function wh(e) {
    return Buffer.from(Uint8Array.from(e.split(".").map(t => Number.parseInt(t))));
  }
  function n0(e) {
    if (Qt.isIPv4(e)) return wh(e); else if (s0(e)) return wh(e.substring(7)); else if (Qt.isIPv6(e)) {
      let t, r, i = e.indexOf("::");
      if (i === -1) t = e, r = ""; else t = e.substring(0, i), r = e.substring(i + 2);
      let s = Buffer.from(Oh(t)), n = Buffer.from(Oh(r)), a = Buffer.alloc(16 - s.length - n.length, 0);
      return Buffer.concat([ s, a, n ]);
    } else return null;
  }
  function Lh(e) {
    switch (e) {
     case _t.ConnectivityState.CONNECTING:
      return {
        state: "CONNECTING"
      };

     case _t.ConnectivityState.IDLE:
      return {
        state: "IDLE"
      };

     case _t.ConnectivityState.READY:
      return {
        state: "READY"
      };

     case _t.ConnectivityState.SHUTDOWN:
      return {
        state: "SHUTDOWN"
      };

     case _t.ConnectivityState.TRANSIENT_FAILURE:
      return {
        state: "TRANSIENT_FAILURE"
      };

     default:
      return {
        state: "UNKNOWN"
      };
    }
  }
  function St(e) {
    if (!e) return null;
    let t = e.getTime();
    return {
      seconds: t / 1e3 | 0,
      nanos: t % 1e3 * 1e6
    };
  }
  function Fh(e) {
    let t = e.getInfo(), r = [], i = [];
    return t.children.channels.forEach(s => {
      r.push(go(s[1].ref));
    }), t.children.subchannels.forEach(s => {
      i.push(mo(s[1].ref));
    }), {
      ref: go(e.ref),
      data: {
        target: t.target,
        state: Lh(t.state),
        calls_started: t.callTracker.callsStarted,
        calls_succeeded: t.callTracker.callsSucceeded,
        calls_failed: t.callTracker.callsFailed,
        last_call_started_timestamp: St(t.callTracker.lastCallStartedTimestamp),
        trace: t.trace.getTraceMessage()
      },
      channel_ref: r,
      subchannel_ref: i
    };
  }
  function a0(e, t) {
    let r = parseInt(e.request.channel_id, 10), i = Ht.channel.getElementByKey(r);
    if (i === void 0) {
      t({
        code: Ct.Status.NOT_FOUND,
        details: "No channel data found for id " + r
      });
      return;
    }
    t(null, {
      channel: Fh(i)
    });
  }
  function o0(e, t) {
    let r = parseInt(e.request.max_results, 10) || vo, i = [], s = parseInt(e.request.start_channel_id, 10), n = Ht.channel, a;
    for (a = n.lowerBound(s); !a.equals(n.end()) && i.length < r; a = a.next()) i.push(Fh(a.pointer[1]));
    t(null, {
      channel: i,
      end: a.equals(n.end())
    });
  }
  function qh(e) {
    let t = e.getInfo(), r = [];
    return t.listenerChildren.sockets.forEach(i => {
      r.push($s(i[1].ref));
    }), {
      ref: t0(e.ref),
      data: {
        calls_started: t.callTracker.callsStarted,
        calls_succeeded: t.callTracker.callsSucceeded,
        calls_failed: t.callTracker.callsFailed,
        last_call_started_timestamp: St(t.callTracker.lastCallStartedTimestamp),
        trace: t.trace.getTraceMessage()
      },
      listen_socket: r
    };
  }
  function l0(e, t) {
    let r = parseInt(e.request.server_id, 10), s = Ht.server.getElementByKey(r);
    if (s === void 0) {
      t({
        code: Ct.Status.NOT_FOUND,
        details: "No server data found for id " + r
      });
      return;
    }
    t(null, {
      server: qh(s)
    });
  }
  function c0(e, t) {
    let r = parseInt(e.request.max_results, 10) || vo, i = parseInt(e.request.start_server_id, 10), s = Ht.server, n = [], a;
    for (a = s.lowerBound(i); !a.equals(s.end()) && n.length < r; a = a.next()) n.push(qh(a.pointer[1]));
    t(null, {
      server: n,
      end: a.equals(s.end())
    });
  }
  function u0(e, t) {
    let r = parseInt(e.request.subchannel_id, 10), i = Ht.subchannel.getElementByKey(r);
    if (i === void 0) {
      t({
        code: Ct.Status.NOT_FOUND,
        details: "No subchannel data found for id " + r
      });
      return;
    }
    let s = i.getInfo(), n = [];
    s.children.sockets.forEach(o => {
      n.push($s(o[1].ref));
    });
    let a = {
      ref: mo(i.ref),
      data: {
        target: s.target,
        state: Lh(s.state),
        calls_started: s.callTracker.callsStarted,
        calls_succeeded: s.callTracker.callsSucceeded,
        calls_failed: s.callTracker.callsFailed,
        last_call_started_timestamp: St(s.callTracker.lastCallStartedTimestamp),
        trace: s.trace.getTraceMessage()
      },
      socket_ref: n
    };
    t(null, {
      subchannel: a
    });
  }
  function Ah(e) {
    var t;
    if (Ph.isTcpSubchannelAddress(e)) return {
      address: "tcpip_address",
      tcpip_address: {
        ip_address: (t = n0(e.host)) !== null && t !== void 0 ? t : void 0,
        port: e.port
      }
    }; else return {
      address: "uds_address",
      uds_address: {
        filename: e.path
      }
    };
  }
  function d0(e, t) {
    var r, i, s, n, a;
    let o = parseInt(e.request.socket_id, 10), l = Ht.socket.getElementByKey(o);
    if (l === void 0) {
      t({
        code: Ct.Status.NOT_FOUND,
        details: "No socket data found for id " + o
      });
      return;
    }
    let c = l.getInfo(), u = c.security ? {
      model: "tls",
      tls: {
        cipher_suite: c.security.cipherSuiteStandardName ? "standard_name" : "other_name",
        standard_name: (r = c.security.cipherSuiteStandardName) !== null && r !== void 0 ? r : void 0,
        other_name: (i = c.security.cipherSuiteOtherName) !== null && i !== void 0 ? i : void 0,
        local_certificate: (s = c.security.localCertificate) !== null && s !== void 0 ? s : void 0,
        remote_certificate: (n = c.security.remoteCertificate) !== null && n !== void 0 ? n : void 0
      }
    } : null, d = {
      ref: $s(l.ref),
      local: c.localAddress ? Ah(c.localAddress) : null,
      remote: c.remoteAddress ? Ah(c.remoteAddress) : null,
      remote_name: (a = c.remoteName) !== null && a !== void 0 ? a : void 0,
      security: u,
      data: {
        keep_alives_sent: c.keepAlivesSent,
        streams_started: c.streamsStarted,
        streams_succeeded: c.streamsSucceeded,
        streams_failed: c.streamsFailed,
        last_local_stream_created_timestamp: St(c.lastLocalStreamCreatedTimestamp),
        last_remote_stream_created_timestamp: St(c.lastRemoteStreamCreatedTimestamp),
        messages_received: c.messagesReceived,
        messages_sent: c.messagesSent,
        last_message_received_timestamp: St(c.lastMessageReceivedTimestamp),
        last_message_sent_timestamp: St(c.lastMessageSentTimestamp),
        local_flow_control_window: c.localFlowControlWindow ? {
          value: c.localFlowControlWindow
        } : null,
        remote_flow_control_window: c.remoteFlowControlWindow ? {
          value: c.remoteFlowControlWindow
        } : null
      }
    };
    t(null, {
      socket: d
    });
  }
  function h0(e, t) {
    let r = parseInt(e.request.server_id, 10), i = Ht.server.getElementByKey(r);
    if (i === void 0) {
      t({
        code: Ct.Status.NOT_FOUND,
        details: "No server data found for id " + r
      });
      return;
    }
    let s = parseInt(e.request.start_socket_id, 10), n = parseInt(e.request.max_results, 10) || vo, o = i.getInfo().sessionChildren.sockets, l = [], c;
    for (c = o.lowerBound(s); !c.equals(o.end()) && l.length < n; c = c.next()) l.push($s(c.pointer[1].ref));
    t(null, {
      socket_ref: l,
      end: c.equals(o.end())
    });
  }
  function Uh() {
    return {
      GetChannel: a0,
      GetTopChannels: o0,
      GetServer: l0,
      GetServers: c0,
      GetSubchannel: u0,
      GetSocket: d0,
      GetServerSockets: h0
    };
  }
  var Gs = null;
  function Bh() {
    if (Gs) return Gs;
    let e = po().loadSync, t = e("channelz.proto", {
      keepCase: !0,
      longs: String,
      enums: String,
      defaults: !0,
      oneofs: !0,
      includeDirs: [ `${__dirname}/../../proto` ]
    });
    return Gs = Mh.loadPackageDefinition(t).grpc.channelz.v1.Channelz.service, Gs;
  }
  function f0() {
    Nh.registerAdminService(Bh, Uh);
  }
});

var Ys = C(function(Wh) {
  Object.defineProperty(Wh, "__esModule", {
    value: !0
  });
  Wh.getNextCallNumber = A0;
  var w0 = 0;
  function A0() {
    return w0++;
  }
});

var So = C(function(Gh) {
  Object.defineProperty(Gh, "__esModule", {
    value: !0
  });
  Gh.CompressionAlgorithms = void 0;
  var jh;
  (function(e) {
    e[e.identity = 0] = "identity", e[e.deflate = 1] = "deflate", e[e.gzip = 2] = "gzip";
  })(jh || (Gh.CompressionAlgorithms = jh = {}));
});

var Co = C(function(Yh) {
  Object.defineProperty(Yh, "__esModule", {
    value: !0
  });
  Yh.BaseFilter = void 0;
  class Vh {
    async sendMetadata(e) {
      return e;
    }
    receiveMetadata(e) {
      return e;
    }
    async sendMessage(e) {
      return e;
    }
    async receiveMessage(e) {
      return e;
    }
    receiveTrailers(e) {
      return e;
    }
  }
  Yh.BaseFilter = Vh;
});

var To = C(function(sf) {
  Object.defineProperty(sf, "__esModule", {
    value: !0
  });
  sf.CompressionFilterFactory = sf.CompressionFilter = void 0;
  var er = Ne("zlib"), Ks = So(), Ce = k(), Xh = Co(), Qh = K(), N0 = e => typeof e === "number" && typeof Ks.CompressionAlgorithms[e] === "string";
  class qi {
    async writeMessage(e, t) {
      let r = e;
      if (t) r = await this.compressMessage(r);
      let i = Buffer.allocUnsafe(r.length + 5);
      return i.writeUInt8(t ? 1 : 0, 0), i.writeUInt32BE(r.length, 1), r.copy(i, 5), i;
    }
    async readMessage(e) {
      let t = e.readUInt8(0) === 1, r = e.slice(5);
      if (t) r = await this.decompressMessage(r);
      return r;
    }
  }
  class Yr extends qi {
    async compressMessage(e) {
      return e;
    }
    async writeMessage(e, t) {
      let r = Buffer.allocUnsafe(e.length + 5);
      return r.writeUInt8(0, 0), r.writeUInt32BE(e.length, 1), e.copy(r, 5), r;
    }
    decompressMessage(e) {
      return Promise.reject(Error('Received compressed message but "grpc-encoding" header was identity'));
    }
  }
  class Zh extends qi {
    constructor(e) {
      super();
      this.maxRecvMessageLength = e;
    }
    compressMessage(e) {
      return new Promise((t, r) => {
        er.deflate(e, (i, s) => {
          if (i) r(i); else t(s);
        });
      });
    }
    decompressMessage(e) {
      return new Promise((t, r) => {
        let i = 0, s = [], n = er.createInflate();
        n.on("error", a => {
          r({
            code: Ce.Status.INTERNAL,
            details: "Failed to decompress deflate-encoded message"
          });
        }), n.on("data", a => {
          if (s.push(a), i += a.byteLength, this.maxRecvMessageLength !== -1 && i > this.maxRecvMessageLength) n.destroy(), 
          r({
            code: Ce.Status.RESOURCE_EXHAUSTED,
            details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`
          });
        }), n.on("end", () => {
          t(Buffer.concat(s));
        }), n.write(e), n.end();
      });
    }
  }
  class ef extends qi {
    constructor(e) {
      super();
      this.maxRecvMessageLength = e;
    }
    compressMessage(e) {
      return new Promise((t, r) => {
        er.gzip(e, (i, s) => {
          if (i) r(i); else t(s);
        });
      });
    }
    decompressMessage(e) {
      return new Promise((t, r) => {
        let i = 0, s = [], n = er.createGunzip();
        n.on("error", a => {
          r({
            code: Ce.Status.INTERNAL,
            details: "Failed to decompress gzip-encoded message"
          });
        }), n.on("data", a => {
          if (s.push(a), i += a.byteLength, this.maxRecvMessageLength !== -1 && i > this.maxRecvMessageLength) n.destroy(), 
          r({
            code: Ce.Status.RESOURCE_EXHAUSTED,
            details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`
          });
        }), n.on("end", () => {
          t(Buffer.concat(s));
        }), n.write(e), n.end();
      });
    }
  }
  class tf extends qi {
    constructor(e) {
      super();
      this.compressionName = e;
    }
    compressMessage(e) {
      return Promise.reject(Error(`Received message compressed with unsupported compression method ${this.compressionName}`));
    }
    decompressMessage(e) {
      return Promise.reject(Error(`Compression method not supported: ${this.compressionName}`));
    }
  }
  function Jh(e, t) {
    switch (e) {
     case "identity":
      return new Yr;

     case "deflate":
      return new Zh(t);

     case "gzip":
      return new ef(t);

     default:
      return new tf(e);
    }
  }
  class Eo extends Xh.BaseFilter {
    constructor(e, t) {
      var r, i, s;
      super();
      this.sharedFilterConfig = t, this.sendCompression = new Yr, this.receiveCompression = new Yr, 
      this.currentCompressionAlgorithm = "identity";
      let n = e["grpc.default_compression_algorithm"];
      if (this.maxReceiveMessageLength = (r = e["grpc.max_receive_message_length"]) !== null && r !== void 0 ? r : Ce.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH, 
      this.maxSendMessageLength = (i = e["grpc.max_send_message_length"]) !== null && i !== void 0 ? i : Ce.DEFAULT_MAX_SEND_MESSAGE_LENGTH, 
      n !== void 0) if (N0(n)) {
        let a = Ks.CompressionAlgorithms[n], o = (s = t.serverSupportedEncodingHeader) === null || s === void 0 ? void 0 : s.split(",");
        if (!o || o.includes(a)) this.currentCompressionAlgorithm = a, this.sendCompression = Jh(this.currentCompressionAlgorithm, -1);
      } else Qh.log(Ce.LogVerbosity.ERROR, `Invalid value provided for grpc.default_compression_algorithm option: ${n}`);
    }
    async sendMetadata(e) {
      let t = await e;
      if (t.set("grpc-accept-encoding", "identity,deflate,gzip"), t.set("accept-encoding", "identity"), 
      this.currentCompressionAlgorithm === "identity") t.remove("grpc-encoding"); else t.set("grpc-encoding", this.currentCompressionAlgorithm);
      return t;
    }
    receiveMetadata(e) {
      let t = e.get("grpc-encoding");
      if (t.length > 0) {
        let i = t[0];
        if (typeof i === "string") this.receiveCompression = Jh(i, this.maxReceiveMessageLength);
      }
      e.remove("grpc-encoding");
      let r = e.get("grpc-accept-encoding")[0];
      if (r) {
        if (this.sharedFilterConfig.serverSupportedEncodingHeader = r, !r.split(",").includes(this.currentCompressionAlgorithm)) this.sendCompression = new Yr, 
        this.currentCompressionAlgorithm = "identity";
      }
      return e.remove("grpc-accept-encoding"), e;
    }
    async sendMessage(e) {
      var t;
      let r = await e;
      if (this.maxSendMessageLength !== -1 && r.message.length > this.maxSendMessageLength) throw {
        code: Ce.Status.RESOURCE_EXHAUSTED,
        details: `Attempted to send message with a size larger than ${this.maxSendMessageLength}`
      };
      let i;
      if (this.sendCompression instanceof Yr) i = !1; else i = (((t = r.flags) !== null && t !== void 0 ? t : 0) & 2) === 0;
      return {
        message: await this.sendCompression.writeMessage(r.message, i),
        flags: r.flags
      };
    }
    async receiveMessage(e) {
      return this.receiveCompression.readMessage(await e);
    }
  }
  sf.CompressionFilter = Eo;
  class rf {
    constructor(e, t) {
      this.options = t, this.sharedFilterConfig = {};
    }
    createFilter() {
      return new Eo(this.options, this.sharedFilterConfig);
    }
  }
  sf.CompressionFilterFactory = rf;
});

var Ui = C(function(af) {
  Object.defineProperty(af, "__esModule", {
    value: !0
  });
  af.restrictControlPlaneStatusCode = x0;
  var ae = k(), I0 = [ ae.Status.OK, ae.Status.INVALID_ARGUMENT, ae.Status.NOT_FOUND, ae.Status.ALREADY_EXISTS, ae.Status.FAILED_PRECONDITION, ae.Status.ABORTED, ae.Status.OUT_OF_RANGE, ae.Status.DATA_LOSS ];
  function x0(e, t) {
    if (I0.includes(e)) return {
      code: ae.Status.INTERNAL,
      details: `Invalid status from control plane: ${e} ${ae.Status[e]} ${t}`
    }; else return {
      code: e,
      details: t
    };
  }
});

var Kr = C(function(of) {
  Object.defineProperty(of, "__esModule", {
    value: !0
  });
  of.minDeadline = D0;
  of.getDeadlineTimeoutString = F0;
  of.getRelativeTimeout = U0;
  of.deadlineToString = B0;
  of.formatDateDifference = z0;
  function D0(...e) {
    let t = 1 / 0;
    for (let r of e) {
      let i = r instanceof Date ? r.getTime() : r;
      if (i < t) t = i;
    }
    return t;
  }
  var L0 = [ [ "m", 1 ], [ "S", 1e3 ], [ "M", 6e4 ], [ "H", 36e5 ] ];
  function F0(e) {
    let t = (new Date).getTime();
    if (e instanceof Date) e = e.getTime();
    let r = Math.max(e - t, 0);
    for (let [i, s] of L0) {
      let n = r / s;
      if (n < 1e8) return String(Math.ceil(n)) + i;
    }
    throw Error("Deadline is too far in the future");
  }
  var q0 = 2147483647;
  function U0(e) {
    let t = e instanceof Date ? e.getTime() : e, r = (new Date).getTime(), i = t - r;
    if (i < 0) return 0; else if (i > q0) return 1 / 0; else return i;
  }
  function B0(e) {
    if (e instanceof Date) return e.toISOString(); else {
      let t = new Date(e);
      if (Number.isNaN(t.getTime())) return "" + e; else return t.toISOString();
    }
  }
  function z0(e, t) {
    return ((t.getTime() - e.getTime()) / 1e3).toFixed(3) + "s";
  }
});

var Js = C(function(lf) {
  Object.defineProperty(lf, "__esModule", {
    value: !0
  });
  lf.FilterStackFactory = lf.FilterStack = void 0;
  class Ro {
    constructor(e) {
      this.filters = e;
    }
    sendMetadata(e) {
      let t = e;
      for (let r = 0; r < this.filters.length; r++) t = this.filters[r].sendMetadata(t);
      return t;
    }
    receiveMetadata(e) {
      let t = e;
      for (let r = this.filters.length - 1; r >= 0; r--) t = this.filters[r].receiveMetadata(t);
      return t;
    }
    sendMessage(e) {
      let t = e;
      for (let r = 0; r < this.filters.length; r++) t = this.filters[r].sendMessage(t);
      return t;
    }
    receiveMessage(e) {
      let t = e;
      for (let r = this.filters.length - 1; r >= 0; r--) t = this.filters[r].receiveMessage(t);
      return t;
    }
    receiveTrailers(e) {
      let t = e;
      for (let r = this.filters.length - 1; r >= 0; r--) t = this.filters[r].receiveTrailers(t);
      return t;
    }
    push(e) {
      this.filters.unshift(...e);
    }
    getFilters() {
      return this.filters;
    }
  }
  lf.FilterStack = Ro;
  class bo {
    constructor(e) {
      this.factories = e;
    }
    push(e) {
      this.factories.unshift(...e);
    }
    clone() {
      return new bo([ ...this.factories ]);
    }
    createFilter() {
      return new Ro(this.factories.map(e => e.createFilter()));
    }
  }
  lf.FilterStackFactory = bo;
});

var Cf = C(function(_f) {
  Object.defineProperty(_f, "__esModule", {
    value: !0
  });
  _f.SingleSubchannelChannel = void 0;
  var uf = Ys(), Et = Zt(), df = To(), hf = Ae(), Tt = k(), ff = Ui(), pf = Kr(), gf = Js(), Jr = ue(), mf = rt(), tr = we();
  class vf {
    constructor(e, t, r, i, s) {
      var n, a;
      this.subchannel = e, this.method = t, this.options = i, this.callNumber = s, this.childCall = null, 
      this.pendingMessage = null, this.readPending = !1, this.halfClosePending = !1, this.pendingStatus = null, 
      this.readFilterPending = !1, this.writeFilterPending = !1;
      let o = this.method.split("/"), l = "";
      if (o.length >= 2) l = o[1];
      let c = (a = (n = tr.splitHostPort(this.options.host)) === null || n === void 0 ? void 0 : n.host) !== null && a !== void 0 ? a : "localhost";
      this.serviceUrl = `https://${c}/${l}`;
      let u = pf.getRelativeTimeout(i.deadline);
      if (u !== 1 / 0) if (u <= 0) this.cancelWithStatus(Tt.Status.DEADLINE_EXCEEDED, "Deadline exceeded"); else setTimeout(() => {
        this.cancelWithStatus(Tt.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
      }, u);
      this.filterStack = r.createFilter();
    }
    cancelWithStatus(e, t) {
      if (this.childCall) this.childCall.cancelWithStatus(e, t); else this.pendingStatus = {
        code: e,
        details: t,
        metadata: new Jr.Metadata
      };
    }
    getPeer() {
      var e, t;
      return (t = (e = this.childCall) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : this.subchannel.getAddress();
    }
    async start(e, t) {
      if (this.pendingStatus) {
        t.onReceiveStatus(this.pendingStatus);
        return;
      }
      if (this.subchannel.getConnectivityState() !== hf.ConnectivityState.READY) {
        t.onReceiveStatus({
          code: Tt.Status.UNAVAILABLE,
          details: "Subchannel not ready",
          metadata: new Jr.Metadata
        });
        return;
      }
      let r = await this.filterStack.sendMetadata(Promise.resolve(e)), i;
      try {
        i = await this.subchannel.getCallCredentials().generateMetadata({
          method_name: this.method,
          service_url: this.serviceUrl
        });
      } catch (n) {
        let a = n, {code: o, details: l} = ff.restrictControlPlaneStatusCode(typeof a.code === "number" ? a.code : Tt.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${a.message}`);
        t.onReceiveStatus({
          code: o,
          details: l,
          metadata: new Jr.Metadata
        });
        return;
      }
      i.merge(r);
      let s = {
        onReceiveMetadata: async n => {
          t.onReceiveMetadata(await this.filterStack.receiveMetadata(n));
        },
        onReceiveMessage: async n => {
          this.readFilterPending = !0;
          let a = await this.filterStack.receiveMessage(n);
          if (this.readFilterPending = !1, t.onReceiveMessage(a), this.pendingStatus) t.onReceiveStatus(this.pendingStatus);
        },
        onReceiveStatus: async n => {
          let a = await this.filterStack.receiveTrailers(n);
          if (this.readFilterPending) this.pendingStatus = a; else t.onReceiveStatus(a);
        }
      };
      if (this.childCall = this.subchannel.createCall(i, this.options.host, this.method, s), 
      this.readPending) this.childCall.startRead();
      if (this.pendingMessage) this.childCall.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
      if (this.halfClosePending && !this.writeFilterPending) this.childCall.halfClose();
    }
    async sendMessageWithContext(e, t) {
      this.writeFilterPending = !0;
      let r = await this.filterStack.sendMessage(Promise.resolve({
        message: t,
        flags: e.flags
      }));
      if (this.writeFilterPending = !1, this.childCall) {
        if (this.childCall.sendMessageWithContext(e, r.message), this.halfClosePending) this.childCall.halfClose();
      } else this.pendingMessage = {
        context: e,
        message: r.message
      };
    }
    startRead() {
      if (this.childCall) this.childCall.startRead(); else this.readPending = !0;
    }
    halfClose() {
      if (this.childCall && !this.writeFilterPending) this.childCall.halfClose(); else this.halfClosePending = !0;
    }
    getCallNumber() {
      return this.callNumber;
    }
    setCredentials(e) {
      throw Error("Method not implemented.");
    }
    getAuthContext() {
      if (this.childCall) return this.childCall.getAuthContext(); else return null;
    }
  }
  class yf {
    constructor(e, t, r) {
      if (this.subchannel = e, this.target = t, this.channelzEnabled = !1, this.channelzTrace = new Et.ChannelzTrace, 
      this.callTracker = new Et.ChannelzCallTracker, this.childrenTracker = new Et.ChannelzChildrenTracker, 
      this.channelzEnabled = r["grpc.enable_channelz"] !== 0, this.channelzRef = Et.registerChannelzChannel(tr.uriToString(t), () => ({
        target: `${tr.uriToString(t)} (${e.getAddress()})`,
        state: this.subchannel.getConnectivityState(),
        trace: this.channelzTrace,
        callTracker: this.callTracker,
        children: this.childrenTracker.getChildLists()
      }), this.channelzEnabled), this.channelzEnabled) this.childrenTracker.refChild(e.getChannelzRef());
      this.filterStackFactory = new gf.FilterStackFactory([ new df.CompressionFilterFactory(this, r) ]);
    }
    close() {
      if (this.channelzEnabled) this.childrenTracker.unrefChild(this.subchannel.getChannelzRef());
      Et.unregisterChannelzRef(this.channelzRef);
    }
    getTarget() {
      return tr.uriToString(this.target);
    }
    getConnectivityState(e) {
      throw Error("Method not implemented.");
    }
    watchConnectivityState(e, t, r) {
      throw Error("Method not implemented.");
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    createCall(e, t) {
      let r = {
        deadline: t,
        host: mf.getDefaultAuthority(this.target),
        flags: Tt.Propagate.DEFAULTS,
        parentCall: null
      };
      return new vf(this.subchannel, e, this.filterStackFactory, r, uf.getNextCallNumber());
    }
  }
  _f.SingleSubchannelChannel = yf;
});

var Pf = C(function(wf) {
  Object.defineProperty(wf, "__esModule", {
    value: !0
  });
  wf.Subchannel = void 0;
  var b = Ae(), Ef = Ir(), Xr = K(), rr = k(), Tf = we(), Rf = Pe(), oe = Zt(), bf = Cf(), Y0 = "subchannel", K0 = 2147483647;
  class Of {
    constructor(e, t, r, i, s) {
      var n;
      this.channelTarget = e, this.subchannelAddress = t, this.options = r, this.connector = s, 
      this.connectivityState = b.ConnectivityState.IDLE, this.transport = null, this.continueConnecting = !1, 
      this.stateListeners = new Set, this.refcount = 0, this.channelzEnabled = !0, this.dataProducers = new Map, 
      this.subchannelChannel = null;
      let a = {
        initialDelay: r["grpc.initial_reconnect_backoff_ms"],
        maxDelay: r["grpc.max_reconnect_backoff_ms"]
      };
      if (this.backoffTimeout = new Ef.BackoffTimeout(() => {
        this.handleBackoffTimer();
      }, a), this.backoffTimeout.unref(), this.subchannelAddressString = Rf.subchannelAddressToString(t), 
      this.keepaliveTime = (n = r["grpc.keepalive_time_ms"]) !== null && n !== void 0 ? n : -1, 
      r["grpc.enable_channelz"] === 0) this.channelzEnabled = !1, this.channelzTrace = new oe.ChannelzTraceStub, 
      this.callTracker = new oe.ChannelzCallTrackerStub, this.childrenTracker = new oe.ChannelzChildrenTrackerStub, 
      this.streamTracker = new oe.ChannelzCallTrackerStub; else this.channelzTrace = new oe.ChannelzTrace, 
      this.callTracker = new oe.ChannelzCallTracker, this.childrenTracker = new oe.ChannelzChildrenTracker, 
      this.streamTracker = new oe.ChannelzCallTracker;
      this.channelzRef = oe.registerChannelzSubchannel(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled), 
      this.channelzTrace.addTrace("CT_INFO", "Subchannel created"), this.trace("Subchannel constructed with options " + JSON.stringify(r, void 0, 2)), 
      this.secureConnector = i._createSecureConnector(e, r);
    }
    getChannelzInfo() {
      return {
        state: this.connectivityState,
        trace: this.channelzTrace,
        callTracker: this.callTracker,
        children: this.childrenTracker.getChildLists(),
        target: this.subchannelAddressString
      };
    }
    trace(e) {
      Xr.trace(rr.LogVerbosity.DEBUG, Y0, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e);
    }
    refTrace(e) {
      Xr.trace(rr.LogVerbosity.DEBUG, "subchannel_refcount", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e);
    }
    handleBackoffTimer() {
      if (this.continueConnecting) this.transitionToState([ b.ConnectivityState.TRANSIENT_FAILURE ], b.ConnectivityState.CONNECTING); else this.transitionToState([ b.ConnectivityState.TRANSIENT_FAILURE ], b.ConnectivityState.IDLE);
    }
    startBackoff() {
      this.backoffTimeout.runOnce();
    }
    stopBackoff() {
      this.backoffTimeout.stop(), this.backoffTimeout.reset();
    }
    startConnectingInternal() {
      let e = this.options;
      if (e["grpc.keepalive_time_ms"]) {
        let t = Math.min(this.keepaliveTime, K0);
        e = Object.assign(Object.assign({}, e), {
          "grpc.keepalive_time_ms": t
        });
      }
      this.connector.connect(this.subchannelAddress, this.secureConnector, e).then(t => {
        if (this.transitionToState([ b.ConnectivityState.CONNECTING ], b.ConnectivityState.READY)) {
          if (this.transport = t, this.channelzEnabled) this.childrenTracker.refChild(t.getChannelzRef());
          t.addDisconnectListener(r => {
            if (this.transitionToState([ b.ConnectivityState.READY ], b.ConnectivityState.IDLE), 
            r && this.keepaliveTime > 0) this.keepaliveTime *= 2, Xr.log(rr.LogVerbosity.ERROR, `Connection to ${Tf.uriToString(this.channelTarget)} at ${this.subchannelAddressString} rejected by server because of excess pings. Increasing ping interval to ${this.keepaliveTime} ms`);
          });
        } else t.shutdown();
      }, t => {
        this.transitionToState([ b.ConnectivityState.CONNECTING ], b.ConnectivityState.TRANSIENT_FAILURE, `${t}`);
      });
    }
    transitionToState(e, t, r) {
      var i, s;
      if (e.indexOf(this.connectivityState) === -1) return !1;
      if (r) this.trace(b.ConnectivityState[this.connectivityState] + " -> " + b.ConnectivityState[t] + ' with error "' + r + '"'); else this.trace(b.ConnectivityState[this.connectivityState] + " -> " + b.ConnectivityState[t]);
      if (this.channelzEnabled) this.channelzTrace.addTrace("CT_INFO", "Connectivity state change to " + b.ConnectivityState[t]);
      let n = this.connectivityState;
      switch (this.connectivityState = t, t) {
       case b.ConnectivityState.READY:
        this.stopBackoff();
        break;

       case b.ConnectivityState.CONNECTING:
        this.startBackoff(), this.startConnectingInternal(), this.continueConnecting = !1;
        break;

       case b.ConnectivityState.TRANSIENT_FAILURE:
        if (this.channelzEnabled && this.transport) this.childrenTracker.unrefChild(this.transport.getChannelzRef());
        if ((i = this.transport) === null || i === void 0 || i.shutdown(), this.transport = null, 
        !this.backoffTimeout.isRunning()) process.nextTick(() => {
          this.handleBackoffTimer();
        });
        break;

       case b.ConnectivityState.IDLE:
        if (this.channelzEnabled && this.transport) this.childrenTracker.unrefChild(this.transport.getChannelzRef());
        (s = this.transport) === null || s === void 0 || s.shutdown(), this.transport = null;
        break;

       default:
        throw Error(`Invalid state: unknown ConnectivityState ${t}`);
      }
      for (let a of this.stateListeners) a(this, n, t, this.keepaliveTime, r);
      return !0;
    }
    ref() {
      this.refTrace("refcount " + this.refcount + " -> " + (this.refcount + 1)), this.refcount += 1;
    }
    unref() {
      if (this.refTrace("refcount " + this.refcount + " -> " + (this.refcount - 1)), this.refcount -= 1, 
      this.refcount === 0) this.channelzTrace.addTrace("CT_INFO", "Shutting down"), oe.unregisterChannelzRef(this.channelzRef), 
      this.secureConnector.destroy(), process.nextTick(() => {
        this.transitionToState([ b.ConnectivityState.CONNECTING, b.ConnectivityState.READY ], b.ConnectivityState.IDLE);
      });
    }
    unrefIfOneRef() {
      if (this.refcount === 1) return this.unref(), !0;
      return !1;
    }
    createCall(e, t, r, i) {
      if (!this.transport) throw Error("Cannot create call, subchannel not READY");
      let s;
      if (this.channelzEnabled) this.callTracker.addCallStarted(), this.streamTracker.addCallStarted(), 
      s = {
        onCallEnd: n => {
          if (n.code === rr.Status.OK) this.callTracker.addCallSucceeded(); else this.callTracker.addCallFailed();
        }
      }; else s = {};
      return this.transport.createCall(e, t, r, i, s);
    }
    startConnecting() {
      process.nextTick(() => {
        if (!this.transitionToState([ b.ConnectivityState.IDLE ], b.ConnectivityState.CONNECTING)) {
          if (this.connectivityState === b.ConnectivityState.TRANSIENT_FAILURE) this.continueConnecting = !0;
        }
      });
    }
    getConnectivityState() {
      return this.connectivityState;
    }
    addConnectivityStateListener(e) {
      this.stateListeners.add(e);
    }
    removeConnectivityStateListener(e) {
      this.stateListeners.delete(e);
    }
    resetBackoff() {
      process.nextTick(() => {
        this.backoffTimeout.reset(), this.transitionToState([ b.ConnectivityState.TRANSIENT_FAILURE ], b.ConnectivityState.CONNECTING);
      });
    }
    getAddress() {
      return this.subchannelAddressString;
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    isHealthy() {
      return !0;
    }
    addHealthStateWatcher(e) {}
    removeHealthStateWatcher(e) {}
    getRealSubchannel() {
      return this;
    }
    realSubchannelEquals(e) {
      return e.getRealSubchannel() === this;
    }
    throttleKeepalive(e) {
      if (e > this.keepaliveTime) this.keepaliveTime = e;
    }
    getCallCredentials() {
      return this.secureConnector.getCallCredentials();
    }
    getChannel() {
      if (!this.subchannelChannel) this.subchannelChannel = new bf.SingleSubchannelChannel(this, this.channelTarget, this.options);
      return this.subchannelChannel;
    }
    addDataWatcher(e) {
      throw Error("Not implemented");
    }
    getOrCreateDataProducer(e, t) {
      let r = this.dataProducers.get(e);
      if (r) return r;
      let i = t(this);
      return this.dataProducers.set(e, i), i;
    }
    removeDataProducer(e) {
      this.dataProducers.delete(e);
    }
  }
  wf.Subchannel = Of;
});

var If = C(function(Nf) {
  var Oo;
  Object.defineProperty(Nf, "__esModule", {
    value: !0
  });
  Nf.GRPC_NODE_USE_ALTERNATIVE_RESOLVER = void 0;
  Nf.GRPC_NODE_USE_ALTERNATIVE_RESOLVER = ((Oo = process.env.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) !== null && Oo !== void 0 ? Oo : "false") === "true";
});

var wo = C(function(Bf) {
  Object.defineProperty(Bf, "__esModule", {
    value: !0
  });
  Bf.DEFAULT_PORT = void 0;
  Bf.setup = Q0;
  var Xs = rt(), Qr = Ne("dns"), xf = va(), Zr = k(), Ge = vr(), kf = ue(), Df = K(), Lf = k(), Ee = we(), Qs = Ne("net"), Ff = Ir(), Zs = If(), J0 = "dns_resolver";
  function Rt(e) {
    Df.trace(Lf.LogVerbosity.DEBUG, J0, e);
  }
  Bf.DEFAULT_PORT = 443;
  var X0 = 3e4;
  class Uf {
    constructor(e, t, r) {
      var i, s, n;
      if (this.target = e, this.listener = t, this.pendingLookupPromise = null, this.pendingTxtPromise = null, 
      this.latestLookupResult = null, this.latestServiceConfigResult = null, this.continueResolving = !1, 
      this.isNextResolutionTimerRunning = !1, this.isServiceConfigEnabled = !0, this.returnedIpResult = !1, 
      this.alternativeResolver = new Qr.promises.Resolver, Rt("Resolver constructed for target " + Ee.uriToString(e)), 
      e.authority) this.alternativeResolver.setServers([ e.authority ]);
      let a = Ee.splitHostPort(e.path);
      if (a === null) this.ipResult = null, this.dnsHostname = null, this.port = null; else if (Qs.isIPv4(a.host) || Qs.isIPv6(a.host)) this.ipResult = [ {
        addresses: [ {
          host: a.host,
          port: (i = a.port) !== null && i !== void 0 ? i : Bf.DEFAULT_PORT
        } ]
      } ], this.dnsHostname = null, this.port = null; else this.ipResult = null, this.dnsHostname = a.host, 
      this.port = (s = a.port) !== null && s !== void 0 ? s : Bf.DEFAULT_PORT;
      if (this.percentage = Math.random() * 100, r["grpc.service_config_disable_resolution"] === 1) this.isServiceConfigEnabled = !1;
      this.defaultResolutionError = {
        code: Zr.Status.UNAVAILABLE,
        details: `Name resolution failed for target ${Ee.uriToString(this.target)}`,
        metadata: new kf.Metadata
      };
      let o = {
        initialDelay: r["grpc.initial_reconnect_backoff_ms"],
        maxDelay: r["grpc.max_reconnect_backoff_ms"]
      };
      this.backoff = new Ff.BackoffTimeout(() => {
        if (this.continueResolving) this.startResolutionWithBackoff();
      }, o), this.backoff.unref(), this.minTimeBetweenResolutionsMs = (n = r["grpc.dns_min_time_between_resolutions_ms"]) !== null && n !== void 0 ? n : X0, 
      this.nextResolutionTimer = setTimeout(() => {}, 0), clearTimeout(this.nextResolutionTimer);
    }
    startResolution() {
      if (this.ipResult !== null) {
        if (!this.returnedIpResult) Rt("Returning IP address for target " + Ee.uriToString(this.target)), 
        setImmediate(() => {
          this.listener(Ge.statusOrFromValue(this.ipResult), {}, null, "");
        }), this.returnedIpResult = !0;
        this.backoff.stop(), this.backoff.reset(), this.stopNextResolutionTimer();
        return;
      }
      if (this.dnsHostname === null) Rt("Failed to parse DNS address " + Ee.uriToString(this.target)), 
      setImmediate(() => {
        this.listener(Ge.statusOrFromError({
          code: Zr.Status.UNAVAILABLE,
          details: `Failed to parse DNS address ${Ee.uriToString(this.target)}`
        }), {}, null, "");
      }), this.stopNextResolutionTimer(); else {
        if (this.pendingLookupPromise !== null) return;
        Rt("Looking up DNS hostname " + this.dnsHostname), this.latestLookupResult = null;
        let e = this.dnsHostname;
        if (this.pendingLookupPromise = this.lookup(e), this.pendingLookupPromise.then(t => {
          if (this.pendingLookupPromise === null) return;
          this.pendingLookupPromise = null, this.latestLookupResult = Ge.statusOrFromValue(t.map(s => ({
            addresses: [ s ]
          })));
          let r = "[" + t.map(s => s.host + ":" + s.port).join(",") + "]";
          Rt("Resolved addresses for target " + Ee.uriToString(this.target) + ": " + r);
          let i = this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
          this.handleHealthStatus(i);
        }, t => {
          if (this.pendingLookupPromise === null) return;
          Rt("Resolution error for target " + Ee.uriToString(this.target) + ": " + t.message), 
          this.pendingLookupPromise = null, this.stopNextResolutionTimer(), this.listener(Ge.statusOrFromError(this.defaultResolutionError), {}, this.latestServiceConfigResult, "");
        }), this.isServiceConfigEnabled && this.pendingTxtPromise === null) this.pendingTxtPromise = this.resolveTxt(e), 
        this.pendingTxtPromise.then(t => {
          if (this.pendingTxtPromise === null) return;
          this.pendingTxtPromise = null;
          let r;
          try {
            if (r = xf.extractAndSelectServiceConfig(t, this.percentage), r) this.latestServiceConfigResult = Ge.statusOrFromValue(r); else this.latestServiceConfigResult = null;
          } catch (i) {
            this.latestServiceConfigResult = Ge.statusOrFromError({
              code: Zr.Status.UNAVAILABLE,
              details: `Parsing service config failed with error ${i.message}`
            });
          }
          if (this.latestLookupResult !== null) this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
        }, t => {});
      }
    }
    handleHealthStatus(e) {
      if (e) this.backoff.stop(), this.backoff.reset(); else this.continueResolving = !0;
    }
    async lookup(e) {
      if (Zs.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) {
        Rt("Using alternative DNS resolver.");
        let r = await Promise.allSettled([ this.alternativeResolver.resolve4(e), this.alternativeResolver.resolve6(e) ]);
        if (r.every(i => i.status === "rejected")) throw Error(r[0].reason);
        return r.reduce((i, s) => s.status === "fulfilled" ? [ ...i, ...s.value ] : i, []).map(i => ({
          host: i,
          port: +this.port
        }));
      }
      return (await Qr.promises.lookup(e, {
        all: !0
      })).map(r => ({
        host: r.address,
        port: +this.port
      }));
    }
    async resolveTxt(e) {
      if (Zs.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) return Rt("Using alternative DNS resolver."), 
      this.alternativeResolver.resolveTxt(e);
      return Qr.promises.resolveTxt(e);
    }
    startNextResolutionTimer() {
      var e, t;
      clearTimeout(this.nextResolutionTimer), this.nextResolutionTimer = setTimeout(() => {
        if (this.stopNextResolutionTimer(), this.continueResolving) this.startResolutionWithBackoff();
      }, this.minTimeBetweenResolutionsMs), (t = (e = this.nextResolutionTimer).unref) === null || t === void 0 || t.call(e), 
      this.isNextResolutionTimerRunning = !0;
    }
    stopNextResolutionTimer() {
      clearTimeout(this.nextResolutionTimer), this.isNextResolutionTimerRunning = !1;
    }
    startResolutionWithBackoff() {
      if (this.pendingLookupPromise === null) this.continueResolving = !1, this.backoff.runOnce(), 
      this.startNextResolutionTimer(), this.startResolution();
    }
    updateResolution() {
      if (this.pendingLookupPromise === null) if (this.isNextResolutionTimerRunning || this.backoff.isRunning()) {
        if (this.isNextResolutionTimerRunning) Rt('resolution update delayed by "min time between resolutions" rate limit'); else Rt("resolution update delayed by backoff timer until " + this.backoff.getEndTime().toISOString());
        this.continueResolving = !0;
      } else this.startResolutionWithBackoff();
    }
    destroy() {
      this.continueResolving = !1, this.backoff.reset(), this.backoff.stop(), this.stopNextResolutionTimer(), 
      this.pendingLookupPromise = null, this.pendingTxtPromise = null, this.latestLookupResult = null, 
      this.latestServiceConfigResult = null, this.returnedIpResult = !1;
    }
    static getDefaultAuthority(e) {
      return e.path;
    }
  }
  function Q0() {
    Xs.registerResolver("dns", Uf), Xs.registerDefaultScheme("dns");
  }
});

var Ao = C(function(Vf) {
  Object.defineProperty(Vf, "__esModule", {
    value: !0
  });
  Vf.parseCIDR = Gf;
  Vf.mapProxyName = nR;
  Vf.getProxiedConnection = aR;
  var bt = K(), $e = k(), rn = Ne("net"), zf = Ne("http"), Hf = K(), tn = Pe(), Ot = we(), Wf = Ne("url"), jf = wo(), eR = "proxy";
  function ei(e) {
    Hf.trace($e.LogVerbosity.DEBUG, eR, e);
  }
  function tR() {
    let e = "", t = "";
    if (process.env.grpc_proxy) t = "grpc_proxy", e = process.env.grpc_proxy; else if (process.env.https_proxy) t = "https_proxy", 
    e = process.env.https_proxy; else if (process.env.http_proxy) t = "http_proxy", 
    e = process.env.http_proxy; else return {};
    let r;
    try {
      r = new Wf.URL(e);
    } catch (o) {
      return bt.log($e.LogVerbosity.ERROR, `cannot parse value of "${t}" env var`), {};
    }
    if (r.protocol !== "http:") return bt.log($e.LogVerbosity.ERROR, `"${r.protocol}" scheme not supported in proxy URI`), 
    {};
    let i = null;
    if (r.username) if (r.password) bt.log($e.LogVerbosity.INFO, "userinfo found in proxy URI"), 
    i = decodeURIComponent(`${r.username}:${r.password}`); else i = r.username;
    let s = r.hostname, n = r.port;
    if (n === "") n = "80";
    let a = {
      address: `${s}:${n}`
    };
    if (i) a.creds = i;
    return ei("Proxy server " + a.address + " set by environment variable " + t), a;
  }
  function rR() {
    let e = process.env.no_grpc_proxy, t = "no_grpc_proxy";
    if (!e) e = process.env.no_proxy, t = "no_proxy";
    if (e) return ei("No proxy server list set by environment variable " + t), e.split(","); else return [];
  }
  function Gf(e) {
    let t = e.split("/");
    if (t.length !== 2) return null;
    let r = parseInt(t[1], 10);
    if (!rn.isIPv4(t[0]) || Number.isNaN(r) || r < 0 || r > 32) return null;
    return {
      ip: $f(t[0]),
      prefixLength: r
    };
  }
  function $f(e) {
    return e.split(".").reduce((t, r) => (t << 8) + parseInt(r, 10), 0);
  }
  function iR(e, t) {
    let r = e.ip, i = -1 << 32 - e.prefixLength;
    return ($f(t) & i) === (r & i);
  }
  function sR(e) {
    for (let t of rR()) {
      let r = Gf(t);
      if (rn.isIPv4(e) && r && iR(r, e)) return !0; else if (e.endsWith(t)) return !0;
    }
    return !1;
  }
  function nR(e, t) {
    var r;
    let i = {
      target: e,
      extraOptions: {}
    };
    if (((r = t["grpc.enable_http_proxy"]) !== null && r !== void 0 ? r : 1) === 0) return i;
    if (e.scheme === "unix") return i;
    let s = tR();
    if (!s.address) return i;
    let n = Ot.splitHostPort(e.path);
    if (!n) return i;
    let a = n.host;
    if (sR(a)) return ei("Not using proxy for target in no_proxy list: " + Ot.uriToString(e)), 
    i;
    let o = {
      "grpc.http_connect_target": Ot.uriToString(e)
    };
    if (s.creds) o["grpc.http_connect_creds"] = s.creds;
    return {
      target: {
        scheme: "dns",
        path: s.address
      },
      extraOptions: o
    };
  }
  function aR(e, t) {
    var r;
    if (!("grpc.http_connect_target" in t)) return Promise.resolve(null);
    let i = t["grpc.http_connect_target"], s = Ot.parseUri(i);
    if (s === null) return Promise.resolve(null);
    let n = Ot.splitHostPort(s.path);
    if (n === null) return Promise.resolve(null);
    let a = `${n.host}:${(r = n.port) !== null && r !== void 0 ? r : jf.DEFAULT_PORT}`, o = {
      method: "CONNECT",
      path: a
    }, l = {
      Host: a
    };
    if (tn.isTcpSubchannelAddress(e)) o.host = e.host, o.port = e.port; else o.socketPath = e.path;
    if ("grpc.http_connect_creds" in t) l["Proxy-Authorization"] = "Basic " + Buffer.from(t["grpc.http_connect_creds"]).toString("base64");
    o.headers = l;
    let c = tn.subchannelAddressToString(e);
    return ei("Using proxy " + c + " to connect to " + o.path), new Promise((u, d) => {
      let h = zf.request(o);
      h.once("connect", (m, f, y) => {
        if (h.removeAllListeners(), f.removeAllListeners(), m.statusCode === 200) {
          if (ei("Successfully connected to " + o.path + " through proxy " + c), y.length > 0) f.unshift(y);
          ei("Successfully established a plaintext connection to " + o.path + " through proxy " + c), 
          u(f);
        } else bt.log($e.LogVerbosity.ERROR, "Failed to connect to " + o.path + " through proxy " + c + " with status " + m.statusCode), 
        d();
      }), h.once("error", m => {
        h.removeAllListeners(), bt.log($e.LogVerbosity.ERROR, "Failed to connect to proxy " + c + " with error " + m.message), 
        d();
      }), h.end();
    });
  }
});

var Po = C(function(Kf) {
  Object.defineProperty(Kf, "__esModule", {
    value: !0
  });
  Kf.StreamDecoder = void 0;
  var wt;
  (function(e) {
    e[e.NO_DATA = 0] = "NO_DATA", e[e.READING_SIZE = 1] = "READING_SIZE", e[e.READING_MESSAGE = 2] = "READING_MESSAGE";
  })(wt || (wt = {}));
  class Yf {
    constructor(e) {
      this.maxReadMessageLength = e, this.readState = wt.NO_DATA, this.readCompressFlag = Buffer.alloc(1), 
      this.readPartialSize = Buffer.alloc(4), this.readSizeRemaining = 4, this.readMessageSize = 0, 
      this.readPartialMessage = [], this.readMessageRemaining = 0;
    }
    write(e) {
      let t = 0, r, i = [];
      while (t < e.length) switch (this.readState) {
       case wt.NO_DATA:
        this.readCompressFlag = e.slice(t, t + 1), t += 1, this.readState = wt.READING_SIZE, 
        this.readPartialSize.fill(0), this.readSizeRemaining = 4, this.readMessageSize = 0, 
        this.readMessageRemaining = 0, this.readPartialMessage = [];
        break;

       case wt.READING_SIZE:
        if (r = Math.min(e.length - t, this.readSizeRemaining), e.copy(this.readPartialSize, 4 - this.readSizeRemaining, t, t + r), 
        this.readSizeRemaining -= r, t += r, this.readSizeRemaining === 0) {
          if (this.readMessageSize = this.readPartialSize.readUInt32BE(0), this.maxReadMessageLength !== -1 && this.readMessageSize > this.maxReadMessageLength) throw Error(`Received message larger than max (${this.readMessageSize} vs ${this.maxReadMessageLength})`);
          if (this.readMessageRemaining = this.readMessageSize, this.readMessageRemaining > 0) this.readState = wt.READING_MESSAGE; else {
            let s = Buffer.concat([ this.readCompressFlag, this.readPartialSize ], 5);
            this.readState = wt.NO_DATA, i.push(s);
          }
        }
        break;

       case wt.READING_MESSAGE:
        if (r = Math.min(e.length - t, this.readMessageRemaining), this.readPartialMessage.push(e.slice(t, t + r)), 
        this.readMessageRemaining -= r, t += r, this.readMessageRemaining === 0) {
          let s = [ this.readCompressFlag, this.readPartialSize ].concat(this.readPartialMessage), n = Buffer.concat(s, this.readMessageSize + 5);
          this.readState = wt.NO_DATA, i.push(n);
        }
        break;

       default:
        throw Error("Unexpected read state");
      }
      return i;
    }
  }
  Kf.StreamDecoder = Yf;
});

var sp = C(function(rp) {
  Object.defineProperty(rp, "__esModule", {
    value: !0
  });
  rp.Http2SubchannelCall = void 0;
  var fe = Ne("http2"), Xf = Ne("os"), O = k(), pe = ue(), Qf = Po(), Zf = K(), ep = k(), uR = "subchannel_call";
  function dR(e) {
    for (let [t, r] of Object.entries(Xf.constants.errno)) if (r === e) return t;
    return "Unknown system error " + e;
  }
  function No(e) {
    let t = `Received HTTP status code ${e}`, r;
    switch (e) {
     case 400:
      r = O.Status.INTERNAL;
      break;

     case 401:
      r = O.Status.UNAUTHENTICATED;
      break;

     case 403:
      r = O.Status.PERMISSION_DENIED;
      break;

     case 404:
      r = O.Status.UNIMPLEMENTED;
      break;

     case 429:
     case 502:
     case 503:
     case 504:
      r = O.Status.UNAVAILABLE;
      break;

     default:
      r = O.Status.UNKNOWN;
    }
    return {
      code: r,
      details: t,
      metadata: new pe.Metadata
    };
  }
  class tp {
    constructor(e, t, r, i, s) {
      var n;
      this.http2Stream = e, this.callEventTracker = t, this.listener = r, this.transport = i, 
      this.callId = s, this.isReadFilterPending = !1, this.isPushPending = !1, this.canPush = !1, 
      this.readsClosed = !1, this.statusOutput = !1, this.unpushedReadMessages = [], this.finalStatus = null, 
      this.internalError = null, this.serverEndedCall = !1, this.connectionDropped = !1;
      let a = (n = i.getOptions()["grpc.max_receive_message_length"]) !== null && n !== void 0 ? n : O.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
      this.decoder = new Qf.StreamDecoder(a), e.on("response", (o, l) => {
        let c = "";
        for (let u of Object.keys(o)) c += "\t\t" + u + ": " + o[u] + `\n`;
        if (this.trace(`Received server headers:\n` + c), this.httpStatusCode = o[":status"], 
        l & fe.constants.NGHTTP2_FLAG_END_STREAM) this.handleTrailers(o); else {
          let u;
          try {
            u = pe.Metadata.fromHttp2Headers(o);
          } catch (d) {
            this.endCall({
              code: O.Status.UNKNOWN,
              details: d.message,
              metadata: new pe.Metadata
            });
            return;
          }
          this.listener.onReceiveMetadata(u);
        }
      }), e.on("trailers", o => {
        this.handleTrailers(o);
      }), e.on("data", o => {
        if (this.statusOutput) return;
        this.trace("receive HTTP/2 data frame of length " + o.length);
        let l;
        try {
          l = this.decoder.write(o);
        } catch (c) {
          if (this.httpStatusCode !== void 0 && this.httpStatusCode !== 200) {
            let u = No(this.httpStatusCode);
            this.cancelWithStatus(u.code, u.details);
          } else this.cancelWithStatus(O.Status.RESOURCE_EXHAUSTED, c.message);
          return;
        }
        for (let c of l) this.trace("parsed message of length " + c.length), this.callEventTracker.addMessageReceived(), 
        this.tryPush(c);
      }), e.on("end", () => {
        this.readsClosed = !0, this.maybeOutputStatus();
      }), e.on("close", () => {
        this.serverEndedCall = !0, process.nextTick(() => {
          var o;
          if (this.trace("HTTP/2 stream closed with code " + e.rstCode), ((o = this.finalStatus) === null || o === void 0 ? void 0 : o.code) === O.Status.OK) return;
          let l, c = "";
          switch (e.rstCode) {
           case fe.constants.NGHTTP2_NO_ERROR:
            if (this.finalStatus !== null) return;
            if (this.httpStatusCode && this.httpStatusCode !== 200) {
              let u = No(this.httpStatusCode);
              l = u.code, c = u.details;
            } else l = O.Status.INTERNAL, c = `Received RST_STREAM with code ${e.rstCode} (Call ended without gRPC status)`;
            break;

           case fe.constants.NGHTTP2_REFUSED_STREAM:
            l = O.Status.UNAVAILABLE, c = "Stream refused by server";
            break;

           case fe.constants.NGHTTP2_CANCEL:
            if (this.connectionDropped) l = O.Status.UNAVAILABLE, c = "Connection dropped"; else l = O.Status.CANCELLED, 
            c = "Call cancelled";
            break;

           case fe.constants.NGHTTP2_ENHANCE_YOUR_CALM:
            l = O.Status.RESOURCE_EXHAUSTED, c = "Bandwidth exhausted or memory limit exceeded";
            break;

           case fe.constants.NGHTTP2_INADEQUATE_SECURITY:
            l = O.Status.PERMISSION_DENIED, c = "Protocol not secure enough";
            break;

           case fe.constants.NGHTTP2_INTERNAL_ERROR:
            if (l = O.Status.INTERNAL, this.internalError === null) c = `Received RST_STREAM with code ${e.rstCode} (Internal server error)`; else if (this.internalError.code === "ECONNRESET" || this.internalError.code === "ETIMEDOUT") l = O.Status.UNAVAILABLE, 
            c = this.internalError.message; else c = `Received RST_STREAM with code ${e.rstCode} triggered by internal client error: ${this.internalError.message}`;
            break;

           default:
            l = O.Status.INTERNAL, c = `Received RST_STREAM with code ${e.rstCode}`;
          }
          this.endCall({
            code: l,
            details: c,
            metadata: new pe.Metadata,
            rstCode: e.rstCode
          });
        });
      }), e.on("error", o => {
        if (o.code !== "ERR_HTTP2_STREAM_ERROR") this.trace("Node error event: message=" + o.message + " code=" + o.code + " errno=" + dR(o.errno) + " syscall=" + o.syscall), 
        this.internalError = o;
        this.callEventTracker.onStreamEnd(!1);
      });
    }
    getDeadlineInfo() {
      return [ `remote_addr=${this.getPeer()}` ];
    }
    onDisconnect() {
      this.connectionDropped = !0, setImmediate(() => {
        this.endCall({
          code: O.Status.UNAVAILABLE,
          details: "Connection dropped",
          metadata: new pe.Metadata
        });
      });
    }
    outputStatus() {
      if (!this.statusOutput) this.statusOutput = !0, this.trace("ended with status: code=" + this.finalStatus.code + ' details="' + this.finalStatus.details + '"'), 
      this.callEventTracker.onCallEnd(this.finalStatus), process.nextTick(() => {
        this.listener.onReceiveStatus(this.finalStatus);
      }), this.http2Stream.resume();
    }
    trace(e) {
      Zf.trace(ep.LogVerbosity.DEBUG, uR, "[" + this.callId + "] " + e);
    }
    endCall(e) {
      if (this.finalStatus === null || this.finalStatus.code === O.Status.OK) this.finalStatus = e, 
      this.maybeOutputStatus();
      this.destroyHttp2Stream();
    }
    maybeOutputStatus() {
      if (this.finalStatus !== null) {
        if (this.finalStatus.code !== O.Status.OK || this.readsClosed && this.unpushedReadMessages.length === 0 && !this.isReadFilterPending && !this.isPushPending) this.outputStatus();
      }
    }
    push(e) {
      this.trace("pushing to reader message of length " + (e instanceof Buffer ? e.length : null)), 
      this.canPush = !1, this.isPushPending = !0, process.nextTick(() => {
        if (this.isPushPending = !1, this.statusOutput) return;
        this.listener.onReceiveMessage(e), this.maybeOutputStatus();
      });
    }
    tryPush(e) {
      if (this.canPush) this.http2Stream.pause(), this.push(e); else this.trace("unpushedReadMessages.push message of length " + e.length), 
      this.unpushedReadMessages.push(e);
    }
    handleTrailers(e) {
      this.serverEndedCall = !0, this.callEventTracker.onStreamEnd(!0);
      let t = "";
      for (let n of Object.keys(e)) t += "\t\t" + n + ": " + e[n] + `\n`;
      this.trace(`Received server trailers:\n` + t);
      let r;
      try {
        r = pe.Metadata.fromHttp2Headers(e);
      } catch (n) {
        r = new pe.Metadata;
      }
      let i = r.getMap(), s;
      if (typeof i["grpc-status"] === "string") {
        let n = Number(i["grpc-status"]);
        this.trace("received status code " + n + " from server"), r.remove("grpc-status");
        let a = "";
        if (typeof i["grpc-message"] === "string") {
          try {
            a = decodeURI(i["grpc-message"]);
          } catch (o) {
            a = i["grpc-message"];
          }
          r.remove("grpc-message"), this.trace('received status details string "' + a + '" from server');
        }
        s = {
          code: n,
          details: a,
          metadata: r
        };
      } else if (this.httpStatusCode) s = No(this.httpStatusCode), s.metadata = r; else s = {
        code: O.Status.UNKNOWN,
        details: "No status information received",
        metadata: r
      };
      this.endCall(s);
    }
    destroyHttp2Stream() {
      var e;
      if (this.http2Stream.destroyed) return;
      if (this.serverEndedCall) this.http2Stream.end(); else {
        let t;
        if (((e = this.finalStatus) === null || e === void 0 ? void 0 : e.code) === O.Status.OK) t = fe.constants.NGHTTP2_NO_ERROR; else t = fe.constants.NGHTTP2_CANCEL;
        this.trace("close http2 stream with code " + t), this.http2Stream.close(t);
      }
    }
    cancelWithStatus(e, t) {
      this.trace("cancelWithStatus code: " + e + ' details: "' + t + '"'), this.endCall({
        code: e,
        details: t,
        metadata: new pe.Metadata
      });
    }
    getStatus() {
      return this.finalStatus;
    }
    getPeer() {
      return this.transport.getPeerName();
    }
    getCallNumber() {
      return this.callId;
    }
    getAuthContext() {
      return this.transport.getAuthContext();
    }
    startRead() {
      if (this.finalStatus !== null && this.finalStatus.code !== O.Status.OK) {
        this.readsClosed = !0, this.maybeOutputStatus();
        return;
      }
      if (this.canPush = !0, this.unpushedReadMessages.length > 0) {
        let e = this.unpushedReadMessages.shift();
        this.push(e);
        return;
      }
      this.http2Stream.resume();
    }
    sendMessageWithContext(e, t) {
      this.trace("write() called with message of length " + t.length);
      let r = i => {
        process.nextTick(() => {
          var s;
          let n = O.Status.UNAVAILABLE;
          if ((i === null || i === void 0 ? void 0 : i.code) === "ERR_STREAM_WRITE_AFTER_END") n = O.Status.INTERNAL;
          if (i) this.cancelWithStatus(n, `Write error: ${i.message}`);
          (s = e.callback) === null || s === void 0 || s.call(e);
        });
      };
      this.trace("sending data chunk of length " + t.length), this.callEventTracker.addMessageSent();
      try {
        this.http2Stream.write(t, r);
      } catch (i) {
        this.endCall({
          code: O.Status.UNAVAILABLE,
          details: `Write failed with error ${i.message}`,
          metadata: new pe.Metadata
        });
      }
    }
    halfClose() {
      this.trace("end() called"), this.trace("calling end() on HTTP/2 stream"), this.http2Stream.end();
    }
  }
  rp.Http2SubchannelCall = tp;
});

var gp = C(function(fp) {
  Object.defineProperty(fp, "__esModule", {
    value: !0
  });
  fp.Http2SubchannelConnector = void 0;
  var Ve = Ne("http2"), np = Ne("tls"), ir = Zt(), At = k(), ap = Ao(), Ye = K(), op = rt(), sr = Pe(), ti = we(), lp = Ne("net"), cp = sp(), up = Ys(), Mo = "transport", hR = "transport_flowctrl", fR = ia().version, {HTTP2_HEADER_AUTHORITY: pR, HTTP2_HEADER_CONTENT_TYPE: gR, HTTP2_HEADER_METHOD: mR, HTTP2_HEADER_PATH: vR, HTTP2_HEADER_TE: yR, HTTP2_HEADER_USER_AGENT: _R} = Ve.constants, SR = 2e4, CR = Buffer.from("too_many_pings", "ascii");
  class dp {
    constructor(e, t, r, i) {
      if (this.session = e, this.options = r, this.remoteName = i, this.keepaliveTimer = null, 
      this.pendingSendKeepalivePing = !1, this.activeCalls = new Set, this.disconnectListeners = [], 
      this.disconnectHandled = !1, this.channelzEnabled = !0, this.keepalivesSent = 0, 
      this.messagesSent = 0, this.messagesReceived = 0, this.lastMessageSentTimestamp = null, 
      this.lastMessageReceivedTimestamp = null, this.subchannelAddressString = sr.subchannelAddressToString(t), 
      r["grpc.enable_channelz"] === 0) this.channelzEnabled = !1, this.streamTracker = new ir.ChannelzCallTrackerStub; else this.streamTracker = new ir.ChannelzCallTracker;
      if (this.channelzRef = ir.registerChannelzSocket(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled), 
      this.userAgent = [ r["grpc.primary_user_agent"], `grpc-node-js/${fR}`, r["grpc.secondary_user_agent"] ].filter(s => s).join(" "), 
      "grpc.keepalive_time_ms" in r) this.keepaliveTimeMs = r["grpc.keepalive_time_ms"]; else this.keepaliveTimeMs = -1;
      if ("grpc.keepalive_timeout_ms" in r) this.keepaliveTimeoutMs = r["grpc.keepalive_timeout_ms"]; else this.keepaliveTimeoutMs = SR;
      if ("grpc.keepalive_permit_without_calls" in r) this.keepaliveWithoutCalls = r["grpc.keepalive_permit_without_calls"] === 1; else this.keepaliveWithoutCalls = !1;
      if (e.once("close", () => {
        this.trace("session closed"), this.handleDisconnect();
      }), e.once("goaway", (s, n, a) => {
        let o = !1;
        if (s === Ve.constants.NGHTTP2_ENHANCE_YOUR_CALM && a && a.equals(CR)) o = !0;
        this.trace("connection closed by GOAWAY with code " + s + " and data " + (a === null || a === void 0 ? void 0 : a.toString())), 
        this.reportDisconnectToOwner(o);
      }), e.once("error", s => {
        this.trace("connection closed with error " + s.message), this.handleDisconnect();
      }), e.socket.once("close", s => {
        this.trace("connection closed. hadError=" + s), this.handleDisconnect();
      }), Ye.isTracerEnabled(Mo)) e.on("remoteSettings", s => {
        this.trace("new settings received" + (this.session !== e ? " on the old connection" : "") + ": " + JSON.stringify(s));
      }), e.on("localSettings", s => {
        this.trace("local settings acknowledged by remote" + (this.session !== e ? " on the old connection" : "") + ": " + JSON.stringify(s));
      });
      if (this.keepaliveWithoutCalls) this.maybeStartKeepalivePingTimer();
      if (e.socket instanceof np.TLSSocket) this.authContext = {
        transportSecurityType: "ssl",
        sslPeerCertificate: e.socket.getPeerCertificate()
      }; else this.authContext = {};
    }
    getChannelzInfo() {
      var e, t, r;
      let i = this.session.socket, s = i.remoteAddress ? sr.stringToSubchannelAddress(i.remoteAddress, i.remotePort) : null, n = i.localAddress ? sr.stringToSubchannelAddress(i.localAddress, i.localPort) : null, a;
      if (this.session.encrypted) {
        let l = i, c = l.getCipher(), u = l.getCertificate(), d = l.getPeerCertificate();
        a = {
          cipherSuiteStandardName: (e = c.standardName) !== null && e !== void 0 ? e : null,
          cipherSuiteOtherName: c.standardName ? null : c.name,
          localCertificate: u && "raw" in u ? u.raw : null,
          remoteCertificate: d && "raw" in d ? d.raw : null
        };
      } else a = null;
      return {
        remoteAddress: s,
        localAddress: n,
        security: a,
        remoteName: this.remoteName,
        streamsStarted: this.streamTracker.callsStarted,
        streamsSucceeded: this.streamTracker.callsSucceeded,
        streamsFailed: this.streamTracker.callsFailed,
        messagesSent: this.messagesSent,
        messagesReceived: this.messagesReceived,
        keepAlivesSent: this.keepalivesSent,
        lastLocalStreamCreatedTimestamp: this.streamTracker.lastCallStartedTimestamp,
        lastRemoteStreamCreatedTimestamp: null,
        lastMessageSentTimestamp: this.lastMessageSentTimestamp,
        lastMessageReceivedTimestamp: this.lastMessageReceivedTimestamp,
        localFlowControlWindow: (t = this.session.state.localWindowSize) !== null && t !== void 0 ? t : null,
        remoteFlowControlWindow: (r = this.session.state.remoteWindowSize) !== null && r !== void 0 ? r : null
      };
    }
    trace(e) {
      Ye.trace(At.LogVerbosity.DEBUG, Mo, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e);
    }
    keepaliveTrace(e) {
      Ye.trace(At.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e);
    }
    flowControlTrace(e) {
      Ye.trace(At.LogVerbosity.DEBUG, hR, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e);
    }
    internalsTrace(e) {
      Ye.trace(At.LogVerbosity.DEBUG, "transport_internals", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e);
    }
    reportDisconnectToOwner(e) {
      if (this.disconnectHandled) return;
      this.disconnectHandled = !0, this.disconnectListeners.forEach(t => t(e));
    }
    handleDisconnect() {
      this.clearKeepaliveTimeout(), this.reportDisconnectToOwner(!1);
      for (let e of this.activeCalls) e.onDisconnect();
      setImmediate(() => {
        this.session.destroy();
      });
    }
    addDisconnectListener(e) {
      this.disconnectListeners.push(e);
    }
    canSendPing() {
      return !this.session.destroyed && this.keepaliveTimeMs > 0 && (this.keepaliveWithoutCalls || this.activeCalls.size > 0);
    }
    maybeSendPing() {
      var e, t;
      if (!this.canSendPing()) {
        this.pendingSendKeepalivePing = !0;
        return;
      }
      if (this.keepaliveTimer) {
        console.error("keepaliveTimeout is not null");
        return;
      }
      if (this.channelzEnabled) this.keepalivesSent += 1;
      this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms"), 
      this.keepaliveTimer = setTimeout(() => {
        this.keepaliveTimer = null, this.keepaliveTrace("Ping timeout passed without response"), 
        this.handleDisconnect();
      }, this.keepaliveTimeoutMs), (t = (e = this.keepaliveTimer).unref) === null || t === void 0 || t.call(e);
      let r = "";
      try {
        if (!this.session.ping((s, n, a) => {
          if (this.clearKeepaliveTimeout(), s) this.keepaliveTrace("Ping failed with error " + s.message), 
          this.handleDisconnect(); else this.keepaliveTrace("Received ping response"), this.maybeStartKeepalivePingTimer();
        })) r = "Ping returned false";
      } catch (i) {
        r = (i instanceof Error ? i.message : "") || "Unknown error";
      }
      if (r) this.keepaliveTrace("Ping send failed: " + r), this.handleDisconnect();
    }
    maybeStartKeepalivePingTimer() {
      var e, t;
      if (!this.canSendPing()) return;
      if (this.pendingSendKeepalivePing) this.pendingSendKeepalivePing = !1, this.maybeSendPing(); else if (!this.keepaliveTimer) this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"), 
      this.keepaliveTimer = setTimeout(() => {
        this.keepaliveTimer = null, this.maybeSendPing();
      }, this.keepaliveTimeMs), (t = (e = this.keepaliveTimer).unref) === null || t === void 0 || t.call(e);
    }
    clearKeepaliveTimeout() {
      if (this.keepaliveTimer) clearTimeout(this.keepaliveTimer), this.keepaliveTimer = null;
    }
    removeActiveCall(e) {
      if (this.activeCalls.delete(e), this.activeCalls.size === 0) this.session.unref();
    }
    addActiveCall(e) {
      if (this.activeCalls.add(e), this.activeCalls.size === 1) {
        if (this.session.ref(), !this.keepaliveWithoutCalls) this.maybeStartKeepalivePingTimer();
      }
    }
    createCall(e, t, r, i, s) {
      let n = e.toHttp2Headers();
      n[pR] = t, n[_R] = this.userAgent, n[gR] = "application/grpc", n[mR] = "POST", n[vR] = r, 
      n[yR] = "trailers";
      let a;
      try {
        a = this.session.request(n);
      } catch (c) {
        throw this.handleDisconnect(), c;
      }
      this.flowControlTrace("local window size: " + this.session.state.localWindowSize + " remote window size: " + this.session.state.remoteWindowSize), 
      this.internalsTrace("session.closed=" + this.session.closed + " session.destroyed=" + this.session.destroyed + " session.socket.destroyed=" + this.session.socket.destroyed);
      let o, l;
      if (this.channelzEnabled) this.streamTracker.addCallStarted(), o = {
        addMessageSent: () => {
          var c;
          this.messagesSent += 1, this.lastMessageSentTimestamp = new Date, (c = s.addMessageSent) === null || c === void 0 || c.call(s);
        },
        addMessageReceived: () => {
          var c;
          this.messagesReceived += 1, this.lastMessageReceivedTimestamp = new Date, (c = s.addMessageReceived) === null || c === void 0 || c.call(s);
        },
        onCallEnd: c => {
          var u;
          (u = s.onCallEnd) === null || u === void 0 || u.call(s, c), this.removeActiveCall(l);
        },
        onStreamEnd: c => {
          var u;
          if (c) this.streamTracker.addCallSucceeded(); else this.streamTracker.addCallFailed();
          (u = s.onStreamEnd) === null || u === void 0 || u.call(s, c);
        }
      }; else o = {
        addMessageSent: () => {
          var c;
          (c = s.addMessageSent) === null || c === void 0 || c.call(s);
        },
        addMessageReceived: () => {
          var c;
          (c = s.addMessageReceived) === null || c === void 0 || c.call(s);
        },
        onCallEnd: c => {
          var u;
          (u = s.onCallEnd) === null || u === void 0 || u.call(s, c), this.removeActiveCall(l);
        },
        onStreamEnd: c => {
          var u;
          (u = s.onStreamEnd) === null || u === void 0 || u.call(s, c);
        }
      };
      return l = new cp.Http2SubchannelCall(a, o, i, this, up.getNextCallNumber()), this.addActiveCall(l), 
      l;
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    getPeerName() {
      return this.subchannelAddressString;
    }
    getOptions() {
      return this.options;
    }
    getAuthContext() {
      return this.authContext;
    }
    shutdown() {
      this.session.close(), ir.unregisterChannelzRef(this.channelzRef);
    }
  }
  class hp {
    constructor(e) {
      this.channelTarget = e, this.session = null, this.isShutdown = !1;
    }
    trace(e) {
      Ye.trace(At.LogVerbosity.DEBUG, Mo, ti.uriToString(this.channelTarget) + " " + e);
    }
    createSession(e, t, r) {
      if (this.isShutdown) return Promise.reject();
      if (e.socket.closed) return Promise.reject("Connection closed before starting HTTP/2 handshake");
      return new Promise((i, s) => {
        var n, a, o, l, c, u, d, h;
        let m = null, f = this.channelTarget;
        if ("grpc.http_connect_target" in r) {
          let D = ti.parseUri(r["grpc.http_connect_target"]);
          if (D) f = D, m = ti.uriToString(D);
        }
        let y = e.secure ? "https" : "http", E = op.getDefaultAuthority(f), T = () => {
          var D;
          (D = this.session) === null || D === void 0 || D.destroy(), this.session = null, 
          setImmediate(() => {
            if (!X) X = !0, s(`${W.trim()} (${(new Date).toISOString()})`);
          });
        }, P = D => {
          var le;
          if ((le = this.session) === null || le === void 0 || le.destroy(), W = D.message, 
          this.trace("connection failed with error " + W), !X) X = !0, s(`${W} (${(new Date).toISOString()})`);
        }, te = {
          createConnection: (D, le) => e.socket,
          settings: {
            initialWindowSize: (l = (n = r["grpc-node.flow_control_window"]) !== null && n !== void 0 ? n : (o = (a = Ve.getDefaultSettings) === null || a === void 0 ? void 0 : a.call(Ve)) === null || o === void 0 ? void 0 : o.initialWindowSize) !== null && l !== void 0 ? l : 65535
          },
          maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER,
          maxSessionMemory: (c = r["grpc-node.max_session_memory"]) !== null && c !== void 0 ? c : Number.MAX_SAFE_INTEGER
        }, v = Ve.connect(`${y}://${E}`, te), U = (h = (d = (u = Ve.getDefaultSettings) === null || u === void 0 ? void 0 : u.call(Ve)) === null || d === void 0 ? void 0 : d.initialWindowSize) !== null && h !== void 0 ? h : 65535, w = r["grpc-node.flow_control_window"];
        this.session = v;
        let W = "Failed to connect", X = !1;
        v.unref(), v.once("remoteSettings", () => {
          var D;
          if (w && w > U) try {
            v.setLocalWindowSize(w);
          } catch (le) {
            let Ue = w - ((D = v.state.localWindowSize) !== null && D !== void 0 ? D : U);
            if (Ue > 0) v.incrementWindowSize(Ue);
          }
          v.removeAllListeners(), e.socket.removeListener("close", T), e.socket.removeListener("error", P), 
          i(new dp(v, t, r, m)), this.session = null;
        }), v.once("close", T), v.once("error", P), e.socket.once("close", T), e.socket.once("error", P);
      });
    }
    tcpConnect(e, t) {
      return ap.getProxiedConnection(e, t).then(r => {
        if (r) return r; else return new Promise((i, s) => {
          let n = () => {
            s(Error("Socket closed"));
          }, a = l => {
            s(l);
          }, o = lp.connect(e, () => {
            o.removeListener("close", n), o.removeListener("error", a), i(o);
          });
          o.once("close", n), o.once("error", a);
        });
      });
    }
    async connect(e, t, r) {
      if (this.isShutdown) return Promise.reject();
      let i = null, s = null, n = sr.subchannelAddressToString(e);
      try {
        return this.trace(n + " Waiting for secureConnector to be ready"), await t.waitForReady(), 
        this.trace(n + " secureConnector is ready"), i = await this.tcpConnect(e, r), i.setNoDelay(), 
        this.trace(n + " Established TCP connection"), s = await t.connect(i), this.trace(n + " Established secure connection"), 
        this.createSession(s, e, r);
      } catch (a) {
        throw i === null || i === void 0 || i.destroy(), s === null || s === void 0 || s.socket.destroy(), 
        a;
      }
    }
    shutdown() {
      var e;
      this.isShutdown = !0, (e = this.session) === null || e === void 0 || e.close(), 
      this.session = null;
    }
  }
  fp.Http2SubchannelConnector = hp;
});

var Tp = C(function(Cp) {
  Object.defineProperty(Cp, "__esModule", {
    value: !0
  });
  Cp.SubchannelPool = void 0;
  Cp.getSubchannelPool = RR;
  var mp = qc(), vp = Pf(), yp = Pe(), _p = we(), Sp = gp(), ER = 1e4;
  class sn {
    constructor() {
      this.pool = Object.create(null), this.cleanupTimer = null;
    }
    unrefUnusedSubchannels() {
      let e = !0;
      for (let t in this.pool) {
        let i = this.pool[t].filter(s => !s.subchannel.unrefIfOneRef());
        if (i.length > 0) e = !1;
        this.pool[t] = i;
      }
      if (e && this.cleanupTimer !== null) clearInterval(this.cleanupTimer), this.cleanupTimer = null;
    }
    ensureCleanupTask() {
      var e, t;
      if (this.cleanupTimer === null) this.cleanupTimer = setInterval(() => {
        this.unrefUnusedSubchannels();
      }, ER), (t = (e = this.cleanupTimer).unref) === null || t === void 0 || t.call(e);
    }
    getOrCreateSubchannel(e, t, r, i) {
      this.ensureCleanupTask();
      let s = _p.uriToString(e);
      if (s in this.pool) {
        let a = this.pool[s];
        for (let o of a) if (yp.subchannelAddressEqual(t, o.subchannelAddress) && mp.channelOptionsEqual(r, o.channelArguments) && i._equals(o.channelCredentials)) return o.subchannel;
      }
      let n = new vp.Subchannel(e, t, r, i, new Sp.Http2SubchannelConnector(e));
      if (!(s in this.pool)) this.pool[s] = [];
      return this.pool[s].push({
        subchannelAddress: t,
        channelArguments: r,
        channelCredentials: i,
        subchannel: n
      }), n.ref(), n;
    }
  }
  Cp.SubchannelPool = sn;
  var TR = new sn;
  function RR(e) {
    if (e) return TR; else return new sn;
  }
});

var Np = C(function(Ap) {
  Object.defineProperty(Ap, "__esModule", {
    value: !0
  });
  Ap.LoadBalancingCall = void 0;
  var nn = Ae(), nr = k(), an = Kr(), ar = ue(), Pt = kt(), Rp = we(), bp = K(), ri = Ui(), Op = Ne("http2"), OR = "load_balancing_call";
  class wp {
    constructor(e, t, r, i, s, n, a) {
      var o, l;
      this.channel = e, this.callConfig = t, this.methodName = r, this.host = i, this.credentials = s, 
      this.deadline = n, this.callNumber = a, this.child = null, this.readPending = !1, 
      this.pendingMessage = null, this.pendingHalfClose = !1, this.ended = !1, this.metadata = null, 
      this.listener = null, this.onCallEnded = null, this.childStartTime = null;
      let c = this.methodName.split("/"), u = "";
      if (c.length >= 2) u = c[1];
      let d = (l = (o = Rp.splitHostPort(this.host)) === null || o === void 0 ? void 0 : o.host) !== null && l !== void 0 ? l : "localhost";
      this.serviceUrl = `https://${d}/${u}`, this.startTime = new Date;
    }
    getDeadlineInfo() {
      var e, t;
      let r = [];
      if (this.childStartTime) {
        if (this.childStartTime > this.startTime) {
          if ((e = this.metadata) === null || e === void 0 ? void 0 : e.getOptions().waitForReady) r.push("wait_for_ready");
          r.push(`LB pick: ${an.formatDateDifference(this.startTime, this.childStartTime)}`);
        }
        return r.push(...this.child.getDeadlineInfo()), r;
      } else {
        if ((t = this.metadata) === null || t === void 0 ? void 0 : t.getOptions().waitForReady) r.push("wait_for_ready");
        r.push("Waiting for LB pick");
      }
      return r;
    }
    trace(e) {
      bp.trace(nr.LogVerbosity.DEBUG, OR, "[" + this.callNumber + "] " + e);
    }
    outputStatus(e, t) {
      var r, i;
      if (!this.ended) {
        this.ended = !0, this.trace("ended with status: code=" + e.code + ' details="' + e.details + '" start time=' + this.startTime.toISOString());
        let s = Object.assign(Object.assign({}, e), {
          progress: t
        });
        (r = this.listener) === null || r === void 0 || r.onReceiveStatus(s), (i = this.onCallEnded) === null || i === void 0 || i.call(this, s.code, s.details, s.metadata);
      }
    }
    doPick() {
      var e, t;
      if (this.ended) return;
      if (!this.metadata) throw Error("doPick called before start");
      this.trace("Pick called");
      let r = this.metadata.clone(), i = this.channel.doPick(r, this.callConfig.pickInformation), s = i.subchannel ? "(" + i.subchannel.getChannelzRef().id + ") " + i.subchannel.getAddress() : "" + i.subchannel;
      switch (this.trace("Pick result: " + Pt.PickResultType[i.pickResultType] + " subchannel: " + s + " status: " + ((e = i.status) === null || e === void 0 ? void 0 : e.code) + " " + ((t = i.status) === null || t === void 0 ? void 0 : t.details)), 
      i.pickResultType) {
       case Pt.PickResultType.COMPLETE:
        this.credentials.compose(i.subchannel.getCallCredentials()).generateMetadata({
          method_name: this.methodName,
          service_url: this.serviceUrl
        }).then(l => {
          var c;
          if (this.ended) {
            this.trace("Credentials metadata generation finished after call ended");
            return;
          }
          if (r.merge(l), r.get("authorization").length > 1) this.outputStatus({
            code: nr.Status.INTERNAL,
            details: '"authorization" metadata cannot have multiple values',
            metadata: new ar.Metadata
          }, "PROCESSED");
          if (i.subchannel.getConnectivityState() !== nn.ConnectivityState.READY) {
            this.trace("Picked subchannel " + s + " has state " + nn.ConnectivityState[i.subchannel.getConnectivityState()] + " after getting credentials metadata. Retrying pick"), 
            this.doPick();
            return;
          }
          if (this.deadline !== 1 / 0) r.set("grpc-timeout", an.getDeadlineTimeoutString(this.deadline));
          try {
            this.child = i.subchannel.getRealSubchannel().createCall(r, this.host, this.methodName, {
              onReceiveMetadata: u => {
                this.trace("Received metadata"), this.listener.onReceiveMetadata(u);
              },
              onReceiveMessage: u => {
                this.trace("Received message"), this.listener.onReceiveMessage(u);
              },
              onReceiveStatus: u => {
                if (this.trace("Received status"), u.rstCode === Op.constants.NGHTTP2_REFUSED_STREAM) this.outputStatus(u, "REFUSED"); else this.outputStatus(u, "PROCESSED");
              }
            }), this.childStartTime = new Date;
          } catch (u) {
            this.trace("Failed to start call on picked subchannel " + s + " with error " + u.message), 
            this.outputStatus({
              code: nr.Status.INTERNAL,
              details: "Failed to start HTTP/2 stream with error " + u.message,
              metadata: new ar.Metadata
            }, "NOT_STARTED");
            return;
          }
          if ((c = i.onCallStarted) === null || c === void 0 || c.call(i), this.onCallEnded = i.onCallEnded, 
          this.trace("Created child call [" + this.child.getCallNumber() + "]"), this.readPending) this.child.startRead();
          if (this.pendingMessage) this.child.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
          if (this.pendingHalfClose) this.child.halfClose();
        }, l => {
          let {code: c, details: u} = ri.restrictControlPlaneStatusCode(typeof l.code === "number" ? l.code : nr.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${l.message}`);
          this.outputStatus({
            code: c,
            details: u,
            metadata: new ar.Metadata
          }, "PROCESSED");
        });
        break;

       case Pt.PickResultType.DROP:
        let {code: a, details: o} = ri.restrictControlPlaneStatusCode(i.status.code, i.status.details);
        setImmediate(() => {
          this.outputStatus({
            code: a,
            details: o,
            metadata: i.status.metadata
          }, "DROP");
        });
        break;

       case Pt.PickResultType.TRANSIENT_FAILURE:
        if (this.metadata.getOptions().waitForReady) this.channel.queueCallForPick(this); else {
          let {code: l, details: c} = ri.restrictControlPlaneStatusCode(i.status.code, i.status.details);
          setImmediate(() => {
            this.outputStatus({
              code: l,
              details: c,
              metadata: i.status.metadata
            }, "PROCESSED");
          });
        }
        break;

       case Pt.PickResultType.QUEUE:
        this.channel.queueCallForPick(this);
      }
    }
    cancelWithStatus(e, t) {
      var r;
      this.trace("cancelWithStatus code: " + e + ' details: "' + t + '"'), (r = this.child) === null || r === void 0 || r.cancelWithStatus(e, t), 
      this.outputStatus({
        code: e,
        details: t,
        metadata: new ar.Metadata
      }, "PROCESSED");
    }
    getPeer() {
      var e, t;
      return (t = (e = this.child) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : this.channel.getTarget();
    }
    start(e, t) {
      this.trace("start called"), this.listener = t, this.metadata = e, this.doPick();
    }
    sendMessageWithContext(e, t) {
      if (this.trace("write() called with message of length " + t.length), this.child) this.child.sendMessageWithContext(e, t); else this.pendingMessage = {
        context: e,
        message: t
      };
    }
    startRead() {
      if (this.trace("startRead called"), this.child) this.child.startRead(); else this.readPending = !0;
    }
    halfClose() {
      if (this.trace("halfClose called"), this.child) this.child.halfClose(); else this.pendingHalfClose = !0;
    }
    setCredentials(e) {
      throw Error("Method not implemented.");
    }
    getCallNumber() {
      return this.callNumber;
    }
    getAuthContext() {
      if (this.child) return this.child.getAuthContext(); else return null;
    }
  }
  Ap.LoadBalancingCall = wp;
});

var Fp = C(function(Dp) {
  Object.defineProperty(Dp, "__esModule", {
    value: !0
  });
  Dp.ResolvingCall = void 0;
  var Mp = rs(), xe = k(), ke = Kr(), on = ue(), Ip = K(), xp = Ui(), wR = "resolving_call";
  class kp {
    constructor(e, t, r, i, s) {
      if (this.channel = e, this.method = t, this.filterStackFactory = i, this.callNumber = s, 
      this.child = null, this.readPending = !1, this.pendingMessage = null, this.pendingHalfClose = !1, 
      this.ended = !1, this.readFilterPending = !1, this.writeFilterPending = !1, this.pendingChildStatus = null, 
      this.metadata = null, this.listener = null, this.statusWatchers = [], this.deadlineTimer = setTimeout(() => {}, 0), 
      this.filterStack = null, this.deadlineStartTime = null, this.configReceivedTime = null, 
      this.childStartTime = null, this.credentials = Mp.CallCredentials.createEmpty(), 
      this.deadline = r.deadline, this.host = r.host, r.parentCall) {
        if (r.flags & xe.Propagate.CANCELLATION) r.parentCall.on("cancelled", () => {
          this.cancelWithStatus(xe.Status.CANCELLED, "Cancelled by parent call");
        });
        if (r.flags & xe.Propagate.DEADLINE) this.trace("Propagating deadline from parent: " + r.parentCall.getDeadline()), 
        this.deadline = ke.minDeadline(this.deadline, r.parentCall.getDeadline());
      }
      this.trace("Created"), this.runDeadlineTimer();
    }
    trace(e) {
      Ip.trace(xe.LogVerbosity.DEBUG, wR, "[" + this.callNumber + "] " + e);
    }
    runDeadlineTimer() {
      clearTimeout(this.deadlineTimer), this.deadlineStartTime = new Date, this.trace("Deadline: " + ke.deadlineToString(this.deadline));
      let e = ke.getRelativeTimeout(this.deadline);
      if (e !== 1 / 0) {
        this.trace("Deadline will be reached in " + e + "ms");
        let t = () => {
          if (!this.deadlineStartTime) {
            this.cancelWithStatus(xe.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
            return;
          }
          let r = [], i = new Date;
          if (r.push(`Deadline exceeded after ${ke.formatDateDifference(this.deadlineStartTime, i)}`), 
          this.configReceivedTime) {
            if (this.configReceivedTime > this.deadlineStartTime) r.push(`name resolution: ${ke.formatDateDifference(this.deadlineStartTime, this.configReceivedTime)}`);
            if (this.childStartTime) {
              if (this.childStartTime > this.configReceivedTime) r.push(`metadata filters: ${ke.formatDateDifference(this.configReceivedTime, this.childStartTime)}`);
            } else r.push("waiting for metadata filters");
          } else r.push("waiting for name resolution");
          if (this.child) r.push(...this.child.getDeadlineInfo());
          this.cancelWithStatus(xe.Status.DEADLINE_EXCEEDED, r.join(","));
        };
        if (e <= 0) process.nextTick(t); else this.deadlineTimer = setTimeout(t, e);
      }
    }
    outputStatus(e) {
      if (!this.ended) {
        if (this.ended = !0, !this.filterStack) this.filterStack = this.filterStackFactory.createFilter();
        clearTimeout(this.deadlineTimer);
        let t = this.filterStack.receiveTrailers(e);
        this.trace("ended with status: code=" + t.code + ' details="' + t.details + '"'), 
        this.statusWatchers.forEach(r => r(t)), process.nextTick(() => {
          var r;
          (r = this.listener) === null || r === void 0 || r.onReceiveStatus(t);
        });
      }
    }
    sendMessageOnChild(e, t) {
      if (!this.child) throw Error("sendMessageonChild called with child not populated");
      let r = this.child;
      this.writeFilterPending = !0, this.filterStack.sendMessage(Promise.resolve({
        message: t,
        flags: e.flags
      })).then(i => {
        if (this.writeFilterPending = !1, r.sendMessageWithContext(e, i.message), this.pendingHalfClose) r.halfClose();
      }, i => {
        this.cancelWithStatus(i.code, i.details);
      });
    }
    getConfig() {
      if (this.ended) return;
      if (!this.metadata || !this.listener) throw Error("getConfig called before start");
      let e = this.channel.getConfig(this.method, this.metadata);
      if (e.type === "NONE") {
        this.channel.queueCallForConfig(this);
        return;
      } else if (e.type === "ERROR") {
        if (this.metadata.getOptions().waitForReady) this.channel.queueCallForConfig(this); else this.outputStatus(e.error);
        return;
      }
      this.configReceivedTime = new Date;
      let t = e.config;
      if (t.status !== xe.Status.OK) {
        let {code: r, details: i} = xp.restrictControlPlaneStatusCode(t.status, "Failed to route call to method " + this.method);
        this.outputStatus({
          code: r,
          details: i,
          metadata: new on.Metadata
        });
        return;
      }
      if (t.methodConfig.timeout) {
        let r = new Date;
        r.setSeconds(r.getSeconds() + t.methodConfig.timeout.seconds), r.setMilliseconds(r.getMilliseconds() + t.methodConfig.timeout.nanos / 1e6), 
        this.deadline = ke.minDeadline(this.deadline, r), this.runDeadlineTimer();
      }
      this.filterStackFactory.push(t.dynamicFilterFactories), this.filterStack = this.filterStackFactory.createFilter(), 
      this.filterStack.sendMetadata(Promise.resolve(this.metadata)).then(r => {
        if (this.child = this.channel.createRetryingCall(t, this.method, this.host, this.credentials, this.deadline), 
        this.trace("Created child [" + this.child.getCallNumber() + "]"), this.childStartTime = new Date, 
        this.child.start(r, {
          onReceiveMetadata: i => {
            this.trace("Received metadata"), this.listener.onReceiveMetadata(this.filterStack.receiveMetadata(i));
          },
          onReceiveMessage: i => {
            this.trace("Received message"), this.readFilterPending = !0, this.filterStack.receiveMessage(i).then(s => {
              if (this.trace("Finished filtering received message"), this.readFilterPending = !1, 
              this.listener.onReceiveMessage(s), this.pendingChildStatus) this.outputStatus(this.pendingChildStatus);
            }, s => {
              this.cancelWithStatus(s.code, s.details);
            });
          },
          onReceiveStatus: i => {
            if (this.trace("Received status"), this.readFilterPending) this.pendingChildStatus = i; else this.outputStatus(i);
          }
        }), this.readPending) this.child.startRead();
        if (this.pendingMessage) this.sendMessageOnChild(this.pendingMessage.context, this.pendingMessage.message); else if (this.pendingHalfClose) this.child.halfClose();
      }, r => {
        this.outputStatus(r);
      });
    }
    reportResolverError(e) {
      var t;
      if ((t = this.metadata) === null || t === void 0 ? void 0 : t.getOptions().waitForReady) this.channel.queueCallForConfig(this); else this.outputStatus(e);
    }
    cancelWithStatus(e, t) {
      var r;
      this.trace("cancelWithStatus code: " + e + ' details: "' + t + '"'), (r = this.child) === null || r === void 0 || r.cancelWithStatus(e, t), 
      this.outputStatus({
        code: e,
        details: t,
        metadata: new on.Metadata
      });
    }
    getPeer() {
      var e, t;
      return (t = (e = this.child) === null || e === void 0 ? void 0 : e.getPeer()) !== null && t !== void 0 ? t : this.channel.getTarget();
    }
    start(e, t) {
      this.trace("start called"), this.metadata = e.clone(), this.listener = t, this.getConfig();
    }
    sendMessageWithContext(e, t) {
      if (this.trace("write() called with message of length " + t.length), this.child) this.sendMessageOnChild(e, t); else this.pendingMessage = {
        context: e,
        message: t
      };
    }
    startRead() {
      if (this.trace("startRead called"), this.child) this.child.startRead(); else this.readPending = !0;
    }
    halfClose() {
      if (this.trace("halfClose called"), this.child && !this.writeFilterPending) this.child.halfClose(); else this.pendingHalfClose = !0;
    }
    setCredentials(e) {
      this.credentials = e;
    }
    addStatusWatcher(e) {
      this.statusWatchers.push(e);
    }
    getCallNumber() {
      return this.callNumber;
    }
    getAuthContext() {
      if (this.child) return this.child.getAuthContext(); else return null;
    }
  }
  Dp.ResolvingCall = kp;
});

var $p = C(function(jp) {
  Object.defineProperty(jp, "__esModule", {
    value: !0
  });
  jp.RetryingCall = jp.MessageBufferTracker = jp.RetryThrottler = void 0;
  var or = k(), qp = Kr(), Up = ue(), Bp = K(), AR = "retrying_call";
  class zp {
    constructor(e, t, r) {
      if (this.maxTokens = e, this.tokenRatio = t, r) this.tokens = r.tokens * (e / r.maxTokens); else this.tokens = e;
    }
    addCallSucceeded() {
      this.tokens = Math.min(this.tokens + this.tokenRatio, this.maxTokens);
    }
    addCallFailed() {
      this.tokens = Math.max(this.tokens - 1, 0);
    }
    canRetryCall() {
      return this.tokens > this.maxTokens / 2;
    }
  }
  jp.RetryThrottler = zp;
  class Hp {
    constructor(e, t) {
      this.totalLimit = e, this.limitPerCall = t, this.totalAllocated = 0, this.allocatedPerCall = new Map;
    }
    allocate(e, t) {
      var r;
      let i = (r = this.allocatedPerCall.get(t)) !== null && r !== void 0 ? r : 0;
      if (this.limitPerCall - i < e || this.totalLimit - this.totalAllocated < e) return !1;
      return this.allocatedPerCall.set(t, i + e), this.totalAllocated += e, !0;
    }
    free(e, t) {
      var r;
      if (this.totalAllocated < e) throw Error(`Invalid buffer allocation state: call ${t} freed ${e} > total allocated ${this.totalAllocated}`);
      this.totalAllocated -= e;
      let i = (r = this.allocatedPerCall.get(t)) !== null && r !== void 0 ? r : 0;
      if (i < e) throw Error(`Invalid buffer allocation state: call ${t} freed ${e} > allocated for call ${i}`);
      this.allocatedPerCall.set(t, i - e);
    }
    freeAll(e) {
      var t;
      let r = (t = this.allocatedPerCall.get(e)) !== null && t !== void 0 ? t : 0;
      if (this.totalAllocated < r) throw Error(`Invalid buffer allocation state: call ${e} allocated ${r} > total allocated ${this.totalAllocated}`);
      this.totalAllocated -= r, this.allocatedPerCall.delete(e);
    }
  }
  jp.MessageBufferTracker = Hp;
  var Io = "grpc-previous-rpc-attempts", PR = 5;
  class Wp {
    constructor(e, t, r, i, s, n, a, o, l) {
      var c;
      this.channel = e, this.callConfig = t, this.methodName = r, this.host = i, this.credentials = s, 
      this.deadline = n, this.callNumber = a, this.bufferTracker = o, this.retryThrottler = l, 
      this.listener = null, this.initialMetadata = null, this.underlyingCalls = [], this.writeBuffer = [], 
      this.writeBufferOffset = 0, this.readStarted = !1, this.transparentRetryUsed = !1, 
      this.attempts = 0, this.hedgingTimer = null, this.committedCallIndex = null, this.initialRetryBackoffSec = 0, 
      this.nextRetryBackoffSec = 0;
      let u = (c = e.getOptions()["grpc-node.retry_max_attempts_limit"]) !== null && c !== void 0 ? c : PR;
      if (e.getOptions()["grpc.enable_retries"] === 0) this.state = "NO_RETRY", this.maxAttempts = 1; else if (t.methodConfig.retryPolicy) {
        this.state = "RETRY";
        let d = t.methodConfig.retryPolicy;
        this.nextRetryBackoffSec = this.initialRetryBackoffSec = Number(d.initialBackoff.substring(0, d.initialBackoff.length - 1)), 
        this.maxAttempts = Math.min(d.maxAttempts, u);
      } else if (t.methodConfig.hedgingPolicy) this.state = "HEDGING", this.maxAttempts = Math.min(t.methodConfig.hedgingPolicy.maxAttempts, u); else this.state = "TRANSPARENT_ONLY", 
      this.maxAttempts = 1;
      this.startTime = new Date;
    }
    getDeadlineInfo() {
      if (this.underlyingCalls.length === 0) return [];
      let e = [], t = this.underlyingCalls[this.underlyingCalls.length - 1];
      if (this.underlyingCalls.length > 1) e.push(`previous attempts: ${this.underlyingCalls.length - 1}`);
      if (t.startTime > this.startTime) e.push(`time to current attempt start: ${qp.formatDateDifference(this.startTime, t.startTime)}`);
      return e.push(...t.call.getDeadlineInfo()), e;
    }
    getCallNumber() {
      return this.callNumber;
    }
    trace(e) {
      Bp.trace(or.LogVerbosity.DEBUG, AR, "[" + this.callNumber + "] " + e);
    }
    reportStatus(e) {
      this.trace("ended with status: code=" + e.code + ' details="' + e.details + '" start time=' + this.startTime.toISOString()), 
      this.bufferTracker.freeAll(this.callNumber), this.writeBufferOffset = this.writeBufferOffset + this.writeBuffer.length, 
      this.writeBuffer = [], process.nextTick(() => {
        var t;
        (t = this.listener) === null || t === void 0 || t.onReceiveStatus({
          code: e.code,
          details: e.details,
          metadata: e.metadata
        });
      });
    }
    cancelWithStatus(e, t) {
      this.trace("cancelWithStatus code: " + e + ' details: "' + t + '"'), this.reportStatus({
        code: e,
        details: t,
        metadata: new Up.Metadata
      });
      for (let {call: r} of this.underlyingCalls) r.cancelWithStatus(e, t);
    }
    getPeer() {
      if (this.committedCallIndex !== null) return this.underlyingCalls[this.committedCallIndex].call.getPeer(); else return "unknown";
    }
    getBufferEntry(e) {
      var t;
      return (t = this.writeBuffer[e - this.writeBufferOffset]) !== null && t !== void 0 ? t : {
        entryType: "FREED",
        allocated: !1
      };
    }
    getNextBufferIndex() {
      return this.writeBufferOffset + this.writeBuffer.length;
    }
    clearSentMessages() {
      if (this.state !== "COMMITTED") return;
      let e;
      if (this.underlyingCalls[this.committedCallIndex].state === "COMPLETED") e = this.getNextBufferIndex(); else e = this.underlyingCalls[this.committedCallIndex].nextMessageToSend;
      for (let t = this.writeBufferOffset; t < e; t++) {
        let r = this.getBufferEntry(t);
        if (r.allocated) this.bufferTracker.free(r.message.message.length, this.callNumber);
      }
      this.writeBuffer = this.writeBuffer.slice(e - this.writeBufferOffset), this.writeBufferOffset = e;
    }
    commitCall(e) {
      var t, r;
      if (this.state === "COMMITTED") return;
      this.trace("Committing call [" + this.underlyingCalls[e].call.getCallNumber() + "] at index " + e), 
      this.state = "COMMITTED", (r = (t = this.callConfig).onCommitted) === null || r === void 0 || r.call(t), 
      this.committedCallIndex = e;
      for (let i = 0; i < this.underlyingCalls.length; i++) {
        if (i === e) continue;
        if (this.underlyingCalls[i].state === "COMPLETED") continue;
        this.underlyingCalls[i].state = "COMPLETED", this.underlyingCalls[i].call.cancelWithStatus(or.Status.CANCELLED, "Discarded in favor of other hedged attempt");
      }
      this.clearSentMessages();
    }
    commitCallWithMostMessages() {
      if (this.state === "COMMITTED") return;
      let e = -1, t = -1;
      for (let [r, i] of this.underlyingCalls.entries()) if (i.state === "ACTIVE" && i.nextMessageToSend > e) e = i.nextMessageToSend, 
      t = r;
      if (t === -1) this.state = "TRANSPARENT_ONLY"; else this.commitCall(t);
    }
    isStatusCodeInList(e, t) {
      return e.some(r => {
        var i;
        return r === t || r.toString().toLowerCase() === ((i = or.Status[t]) === null || i === void 0 ? void 0 : i.toLowerCase());
      });
    }
    getNextRetryJitter() {
      return Math.random() * .3999999999999999 + .8;
    }
    getNextRetryBackoffMs() {
      var e;
      let t = (e = this.callConfig) === null || e === void 0 ? void 0 : e.methodConfig.retryPolicy;
      if (!t) return 0;
      let i = this.getNextRetryJitter() * this.nextRetryBackoffSec * 1e3, s = Number(t.maxBackoff.substring(0, t.maxBackoff.length - 1));
      return this.nextRetryBackoffSec = Math.min(this.nextRetryBackoffSec * t.backoffMultiplier, s), 
      i;
    }
    maybeRetryCall(e, t) {
      if (this.state !== "RETRY") {
        t(!1);
        return;
      }
      if (this.attempts >= this.maxAttempts) {
        t(!1);
        return;
      }
      let r;
      if (e === null) r = this.getNextRetryBackoffMs(); else if (e < 0) {
        this.state = "TRANSPARENT_ONLY", t(!1);
        return;
      } else r = e, this.nextRetryBackoffSec = this.initialRetryBackoffSec;
      setTimeout(() => {
        var i, s;
        if (this.state !== "RETRY") {
          t(!1);
          return;
        }
        if ((s = (i = this.retryThrottler) === null || i === void 0 ? void 0 : i.canRetryCall()) !== null && s !== void 0 ? s : !0) t(!0), 
        this.attempts += 1, this.startNewAttempt(); else this.trace("Retry attempt denied by throttling policy"), 
        t(!1);
      }, r);
    }
    countActiveCalls() {
      let e = 0;
      for (let t of this.underlyingCalls) if ((t === null || t === void 0 ? void 0 : t.state) === "ACTIVE") e += 1;
      return e;
    }
    handleProcessedStatus(e, t, r) {
      var i, s, n;
      switch (this.state) {
       case "COMMITTED":
       case "NO_RETRY":
       case "TRANSPARENT_ONLY":
        this.commitCall(t), this.reportStatus(e);
        break;

       case "HEDGING":
        if (this.isStatusCodeInList((i = this.callConfig.methodConfig.hedgingPolicy.nonFatalStatusCodes) !== null && i !== void 0 ? i : [], e.code)) {
          (s = this.retryThrottler) === null || s === void 0 || s.addCallFailed();
          let a;
          if (r === null) a = 0; else if (r < 0) {
            this.state = "TRANSPARENT_ONLY", this.commitCall(t), this.reportStatus(e);
            return;
          } else a = r;
          setTimeout(() => {
            if (this.maybeStartHedgingAttempt(), this.countActiveCalls() === 0) this.commitCall(t), 
            this.reportStatus(e);
          }, a);
        } else this.commitCall(t), this.reportStatus(e);
        break;

       case "RETRY":
        if (this.isStatusCodeInList(this.callConfig.methodConfig.retryPolicy.retryableStatusCodes, e.code)) (n = this.retryThrottler) === null || n === void 0 || n.addCallFailed(), 
        this.maybeRetryCall(r, a => {
          if (!a) this.commitCall(t), this.reportStatus(e);
        }); else this.commitCall(t), this.reportStatus(e);
        break;
      }
    }
    getPushback(e) {
      let t = e.get("grpc-retry-pushback-ms");
      if (t.length === 0) return null;
      try {
        return parseInt(t[0]);
      } catch (r) {
        return -1;
      }
    }
    handleChildStatus(e, t) {
      var r;
      if (this.underlyingCalls[t].state === "COMPLETED") return;
      if (this.trace("state=" + this.state + " handling status with progress " + e.progress + " from child [" + this.underlyingCalls[t].call.getCallNumber() + "] in state " + this.underlyingCalls[t].state), 
      this.underlyingCalls[t].state = "COMPLETED", e.code === or.Status.OK) {
        (r = this.retryThrottler) === null || r === void 0 || r.addCallSucceeded(), this.commitCall(t), 
        this.reportStatus(e);
        return;
      }
      if (this.state === "NO_RETRY") {
        this.commitCall(t), this.reportStatus(e);
        return;
      }
      if (this.state === "COMMITTED") {
        this.reportStatus(e);
        return;
      }
      let i = this.getPushback(e.metadata);
      switch (e.progress) {
       case "NOT_STARTED":
        this.startNewAttempt();
        break;

       case "REFUSED":
        if (this.transparentRetryUsed) this.handleProcessedStatus(e, t, i); else this.transparentRetryUsed = !0, 
        this.startNewAttempt();
        break;

       case "DROP":
        this.commitCall(t), this.reportStatus(e);
        break;

       case "PROCESSED":
        this.handleProcessedStatus(e, t, i);
        break;
      }
    }
    maybeStartHedgingAttempt() {
      if (this.state !== "HEDGING") return;
      if (!this.callConfig.methodConfig.hedgingPolicy) return;
      if (this.attempts >= this.maxAttempts) return;
      this.attempts += 1, this.startNewAttempt(), this.maybeStartHedgingTimer();
    }
    maybeStartHedgingTimer() {
      var e, t, r;
      if (this.hedgingTimer) clearTimeout(this.hedgingTimer);
      if (this.state !== "HEDGING") return;
      if (!this.callConfig.methodConfig.hedgingPolicy) return;
      let i = this.callConfig.methodConfig.hedgingPolicy;
      if (this.attempts >= this.maxAttempts) return;
      let s = (e = i.hedgingDelay) !== null && e !== void 0 ? e : "0s", n = Number(s.substring(0, s.length - 1));
      this.hedgingTimer = setTimeout(() => {
        this.maybeStartHedgingAttempt();
      }, n * 1e3), (r = (t = this.hedgingTimer).unref) === null || r === void 0 || r.call(t);
    }
    startNewAttempt() {
      let e = this.channel.createLoadBalancingCall(this.callConfig, this.methodName, this.host, this.credentials, this.deadline);
      this.trace("Created child call [" + e.getCallNumber() + "] for attempt " + this.attempts);
      let t = this.underlyingCalls.length;
      this.underlyingCalls.push({
        state: "ACTIVE",
        call: e,
        nextMessageToSend: 0,
        startTime: new Date
      });
      let r = this.attempts - 1, i = this.initialMetadata.clone();
      if (r > 0) i.set(Io, `${r}`);
      let s = !1;
      if (e.start(i, {
        onReceiveMetadata: n => {
          if (this.trace("Received metadata from child [" + e.getCallNumber() + "]"), this.commitCall(t), 
          s = !0, r > 0) n.set(Io, `${r}`);
          if (this.underlyingCalls[t].state === "ACTIVE") this.listener.onReceiveMetadata(n);
        },
        onReceiveMessage: n => {
          if (this.trace("Received message from child [" + e.getCallNumber() + "]"), this.commitCall(t), 
          this.underlyingCalls[t].state === "ACTIVE") this.listener.onReceiveMessage(n);
        },
        onReceiveStatus: n => {
          if (this.trace("Received status from child [" + e.getCallNumber() + "]"), !s && r > 0) n.metadata.set(Io, `${r}`);
          this.handleChildStatus(n, t);
        }
      }), this.sendNextChildMessage(t), this.readStarted) e.startRead();
    }
    start(e, t) {
      this.trace("start called"), this.listener = t, this.initialMetadata = e, this.attempts += 1, 
      this.startNewAttempt(), this.maybeStartHedgingTimer();
    }
    handleChildWriteCompleted(e, t) {
      var r, i;
      (i = (r = this.getBufferEntry(t)).callback) === null || i === void 0 || i.call(r), 
      this.clearSentMessages();
      let s = this.underlyingCalls[e];
      s.nextMessageToSend += 1, this.sendNextChildMessage(e);
    }
    sendNextChildMessage(e) {
      let t = this.underlyingCalls[e];
      if (t.state === "COMPLETED") return;
      let r = t.nextMessageToSend;
      if (this.getBufferEntry(r)) {
        let i = this.getBufferEntry(r);
        switch (i.entryType) {
         case "MESSAGE":
          if (t.call.sendMessageWithContext({
            callback: n => {
              this.handleChildWriteCompleted(e, r);
            }
          }, i.message.message), this.getBufferEntry(r + 1).entryType === "HALF_CLOSE") this.trace("Sending halfClose immediately after message to child [" + t.call.getCallNumber() + "] - optimizing for unary/final message"), 
          t.nextMessageToSend += 1, t.call.halfClose();
          break;

         case "HALF_CLOSE":
          t.nextMessageToSend += 1, t.call.halfClose();
          break;

         case "FREED":
          break;
        }
      }
    }
    sendMessageWithContext(e, t) {
      this.trace("write() called with message of length " + t.length);
      let r = {
        message: t,
        flags: e.flags
      }, i = this.getNextBufferIndex(), s = {
        entryType: "MESSAGE",
        message: r,
        allocated: this.bufferTracker.allocate(t.length, this.callNumber)
      };
      if (this.writeBuffer.push(s), s.allocated) {
        process.nextTick(() => {
          var n;
          (n = e.callback) === null || n === void 0 || n.call(e);
        });
        for (let [n, a] of this.underlyingCalls.entries()) if (a.state === "ACTIVE" && a.nextMessageToSend === i) a.call.sendMessageWithContext({
          callback: o => {
            this.handleChildWriteCompleted(n, i);
          }
        }, t);
      } else {
        if (this.commitCallWithMostMessages(), this.committedCallIndex === null) return;
        let n = this.underlyingCalls[this.committedCallIndex];
        if (s.callback = e.callback, n.state === "ACTIVE" && n.nextMessageToSend === i) n.call.sendMessageWithContext({
          callback: a => {
            this.handleChildWriteCompleted(this.committedCallIndex, i);
          }
        }, t);
      }
    }
    startRead() {
      this.trace("startRead called"), this.readStarted = !0;
      for (let e of this.underlyingCalls) if ((e === null || e === void 0 ? void 0 : e.state) === "ACTIVE") e.call.startRead();
    }
    halfClose() {
      this.trace("halfClose called");
      let e = this.getNextBufferIndex();
      this.writeBuffer.push({
        entryType: "HALF_CLOSE",
        allocated: !1
      });
      for (let t of this.underlyingCalls) if ((t === null || t === void 0 ? void 0 : t.state) === "ACTIVE") {
        if (t.nextMessageToSend === e || t.nextMessageToSend === e - 1) this.trace("Sending halfClose immediately to child [" + t.call.getCallNumber() + "] - all messages already sent"), 
        t.nextMessageToSend += 1, t.call.halfClose();
      }
    }
    setCredentials(e) {
      throw Error("Method not implemented.");
    }
    getMethod() {
      return this.methodName;
    }
    getHost() {
      return this.host;
    }
    getAuthContext() {
      if (this.committedCallIndex !== null) return this.underlyingCalls[this.committedCallIndex].call.getAuthContext(); else return null;
    }
  }
  jp.RetryingCall = Wp;
});

var Bi = C(function(Yp) {
  Object.defineProperty(Yp, "__esModule", {
    value: !0
  });
  Yp.BaseSubchannelWrapper = void 0;
  class Vp {
    constructor(e) {
      this.child = e, this.healthy = !0, this.healthListeners = new Set, this.refcount = 0, 
      this.dataWatchers = new Set, e.addHealthStateWatcher(t => {
        if (this.healthy) this.updateHealthListeners();
      });
    }
    updateHealthListeners() {
      for (let e of this.healthListeners) e(this.isHealthy());
    }
    getConnectivityState() {
      return this.child.getConnectivityState();
    }
    addConnectivityStateListener(e) {
      this.child.addConnectivityStateListener(e);
    }
    removeConnectivityStateListener(e) {
      this.child.removeConnectivityStateListener(e);
    }
    startConnecting() {
      this.child.startConnecting();
    }
    getAddress() {
      return this.child.getAddress();
    }
    throttleKeepalive(e) {
      this.child.throttleKeepalive(e);
    }
    ref() {
      this.child.ref(), this.refcount += 1;
    }
    unref() {
      if (this.child.unref(), this.refcount -= 1, this.refcount === 0) this.destroy();
    }
    destroy() {
      for (let e of this.dataWatchers) e.destroy();
    }
    getChannelzRef() {
      return this.child.getChannelzRef();
    }
    isHealthy() {
      return this.healthy && this.child.isHealthy();
    }
    addHealthStateWatcher(e) {
      this.healthListeners.add(e);
    }
    removeHealthStateWatcher(e) {
      this.healthListeners.delete(e);
    }
    addDataWatcher(e) {
      e.setSubchannel(this.getRealSubchannel()), this.dataWatchers.add(e);
    }
    setHealthy(e) {
      if (e !== this.healthy) {
        if (this.healthy = e, this.child.isHealthy()) this.updateHealthListeners();
      }
    }
    getRealSubchannel() {
      return this.child.getRealSubchannel();
    }
    realSubchannelEquals(e) {
      return this.getRealSubchannel() === e.getRealSubchannel();
    }
    getCallCredentials() {
      return this.child.getCallCredentials();
    }
    getChannel() {
      return this.child.getChannel();
    }
  }
  Yp.BaseSubchannelWrapper = Vp;
});

var xo = C(function(hg) {
  Object.defineProperty(hg, "__esModule", {
    value: !0
  });
  hg.InternalChannel = hg.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = void 0;
  var Jp = Mr(), Xp = Dc(), Qp = Tp(), ni = kt(), Zp = ue(), Te = k(), eg = Js(), tg = To(), cn = rt(), lr = K(), rg = Ao(), cr = we(), ee = Ae(), Nt = Zt(), ig = Np(), sg = Kr(), ng = Fp(), ii = Ys(), ag = Ui(), si = $p(), og = Bi(), IR = 2147483647, xR = 1e3, kR = 18e5, ln = new Map, DR = 16777216, LR = 1048576;
  class lg extends og.BaseSubchannelWrapper {
    constructor(e, t) {
      super(e);
      this.channel = t, this.refCount = 0, this.subchannelStateListener = (r, i, s, n) => {
        t.throttleKeepalive(n);
      };
    }
    ref() {
      if (this.refCount === 0) this.child.addConnectivityStateListener(this.subchannelStateListener), 
      this.channel.addWrappedSubchannel(this);
      this.child.ref(), this.refCount += 1;
    }
    unref() {
      if (this.child.unref(), this.refCount -= 1, this.refCount <= 0) this.child.removeConnectivityStateListener(this.subchannelStateListener), 
      this.channel.removeWrappedSubchannel(this);
    }
  }
  class cg {
    pick(e) {
      return {
        pickResultType: ni.PickResultType.DROP,
        status: {
          code: Te.Status.UNAVAILABLE,
          details: "Channel closed before call started",
          metadata: new Zp.Metadata
        },
        subchannel: null,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  hg.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = "grpc.internal.no_subchannel";
  class ug {
    constructor(e) {
      this.target = e, this.trace = new Nt.ChannelzTrace, this.callTracker = new Nt.ChannelzCallTracker, 
      this.childrenTracker = new Nt.ChannelzChildrenTracker, this.state = ee.ConnectivityState.IDLE;
    }
    getChannelzInfoCallback() {
      return () => ({
        target: this.target,
        state: this.state,
        trace: this.trace,
        callTracker: this.callTracker,
        children: this.childrenTracker.getChildLists()
      });
    }
  }
  class dg {
    constructor(e, t, r) {
      var i, s, n, a, o, l;
      if (this.credentials = t, this.options = r, this.connectivityState = ee.ConnectivityState.IDLE, 
      this.currentPicker = new ni.UnavailablePicker, this.configSelectionQueue = [], this.pickQueue = [], 
      this.connectivityStateWatchers = [], this.callRefTimer = null, this.configSelector = null, 
      this.currentResolutionError = null, this.wrappedSubchannels = new Set, this.callCount = 0, 
      this.idleTimer = null, this.channelzEnabled = !0, this.randomChannelId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER), 
      typeof e !== "string") throw TypeError("Channel target must be a string");
      if (!(t instanceof Jp.ChannelCredentials)) throw TypeError("Channel credentials must be a ChannelCredentials object");
      if (r) {
        if (typeof r !== "object") throw TypeError("Channel options must be an object");
      }
      this.channelzInfoTracker = new ug(e);
      let c = cr.parseUri(e);
      if (c === null) throw Error(`Could not parse target name "${e}"`);
      let u = cn.mapUriDefaultScheme(c);
      if (u === null) throw Error(`Could not find a default scheme for target name "${e}"`);
      if (this.options["grpc.enable_channelz"] === 0) this.channelzEnabled = !1;
      if (this.channelzRef = Nt.registerChannelzChannel(e, this.channelzInfoTracker.getChannelzInfoCallback(), this.channelzEnabled), 
      this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Channel created");
      if (this.options["grpc.default_authority"]) this.defaultAuthority = this.options["grpc.default_authority"]; else this.defaultAuthority = cn.getDefaultAuthority(u);
      let d = rg.mapProxyName(u, r);
      this.target = d.target, this.options = Object.assign({}, this.options, d.extraOptions), 
      this.subchannelPool = Qp.getSubchannelPool(((i = this.options["grpc.use_local_subchannel_pool"]) !== null && i !== void 0 ? i : 0) === 0), 
      this.retryBufferTracker = new si.MessageBufferTracker((s = this.options["grpc.retry_buffer_size"]) !== null && s !== void 0 ? s : DR, (n = this.options["grpc.per_rpc_retry_buffer_size"]) !== null && n !== void 0 ? n : LR), 
      this.keepaliveTime = (a = this.options["grpc.keepalive_time_ms"]) !== null && a !== void 0 ? a : -1, 
      this.idleTimeoutMs = Math.max((o = this.options["grpc.client_idle_timeout_ms"]) !== null && o !== void 0 ? o : kR, xR);
      let h = {
        createSubchannel: (f, y) => {
          let E = {};
          for (let [te, v] of Object.entries(y)) if (!te.startsWith(hg.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX)) E[te] = v;
          let T = this.subchannelPool.getOrCreateSubchannel(this.target, f, E, this.credentials);
          if (T.throttleKeepalive(this.keepaliveTime), this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Created subchannel or used existing subchannel", T.getChannelzRef());
          return new lg(T, this);
        },
        updateState: (f, y) => {
          this.currentPicker = y;
          let E = this.pickQueue.slice();
          if (this.pickQueue = [], E.length > 0) this.callRefTimerUnref();
          for (let T of E) T.doPick();
          this.updateState(f);
        },
        requestReresolution: () => {
          throw Error("Resolving load balancer should never call requestReresolution");
        },
        addChannelzChild: f => {
          if (this.channelzEnabled) this.channelzInfoTracker.childrenTracker.refChild(f);
        },
        removeChannelzChild: f => {
          if (this.channelzEnabled) this.channelzInfoTracker.childrenTracker.unrefChild(f);
        }
      };
      this.resolvingLoadBalancer = new Xp.ResolvingLoadBalancer(this.target, h, this.options, (f, y) => {
        var E;
        if (f.retryThrottling) ln.set(this.getTarget(), new si.RetryThrottler(f.retryThrottling.maxTokens, f.retryThrottling.tokenRatio, ln.get(this.getTarget()))); else ln.delete(this.getTarget());
        if (this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Address resolution succeeded");
        (E = this.configSelector) === null || E === void 0 || E.unref(), this.configSelector = y, 
        this.currentResolutionError = null, process.nextTick(() => {
          let T = this.configSelectionQueue;
          if (this.configSelectionQueue = [], T.length > 0) this.callRefTimerUnref();
          for (let P of T) P.getConfig();
        });
      }, f => {
        if (this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_WARNING", "Address resolution failed with code " + f.code + ' and details "' + f.details + '"');
        if (this.configSelectionQueue.length > 0) this.trace("Name resolution failed with calls queued for config selection");
        if (this.configSelector === null) this.currentResolutionError = Object.assign(Object.assign({}, ag.restrictControlPlaneStatusCode(f.code, f.details)), {
          metadata: f.metadata
        });
        let y = this.configSelectionQueue;
        if (this.configSelectionQueue = [], y.length > 0) this.callRefTimerUnref();
        for (let E of y) E.reportResolverError(f);
      }), this.filterStackFactory = new eg.FilterStackFactory([ new tg.CompressionFilterFactory(this, this.options) ]), 
      this.trace("Channel constructed with options " + JSON.stringify(r, void 0, 2));
      let m = Error();
      if (lr.isTracerEnabled("channel_stacktrace")) lr.trace(Te.LogVerbosity.DEBUG, "channel_stacktrace", "(" + this.channelzRef.id + `) Channel constructed \n` + ((l = m.stack) === null || l === void 0 ? void 0 : l.substring(m.stack.indexOf(`\n`) + 1)));
      this.lastActivityTimestamp = new Date;
    }
    trace(e, t) {
      lr.trace(t !== null && t !== void 0 ? t : Te.LogVerbosity.DEBUG, "channel", "(" + this.channelzRef.id + ") " + cr.uriToString(this.target) + " " + e);
    }
    callRefTimerRef() {
      var e, t, r, i;
      if (!this.callRefTimer) this.callRefTimer = setInterval(() => {}, IR);
      if (!((t = (e = this.callRefTimer).hasRef) === null || t === void 0 ? void 0 : t.call(e))) this.trace("callRefTimer.ref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length), 
      (i = (r = this.callRefTimer).ref) === null || i === void 0 || i.call(r);
    }
    callRefTimerUnref() {
      var e, t, r;
      if (!((e = this.callRefTimer) === null || e === void 0 ? void 0 : e.hasRef) || this.callRefTimer.hasRef()) this.trace("callRefTimer.unref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length), 
      (r = (t = this.callRefTimer) === null || t === void 0 ? void 0 : t.unref) === null || r === void 0 || r.call(t);
    }
    removeConnectivityStateWatcher(e) {
      let t = this.connectivityStateWatchers.findIndex(r => r === e);
      if (t >= 0) this.connectivityStateWatchers.splice(t, 1);
    }
    updateState(e) {
      if (lr.trace(Te.LogVerbosity.DEBUG, "connectivity_state", "(" + this.channelzRef.id + ") " + cr.uriToString(this.target) + " " + ee.ConnectivityState[this.connectivityState] + " -> " + ee.ConnectivityState[e]), 
      this.channelzEnabled) this.channelzInfoTracker.trace.addTrace("CT_INFO", "Connectivity state change to " + ee.ConnectivityState[e]);
      this.connectivityState = e, this.channelzInfoTracker.state = e;
      let t = this.connectivityStateWatchers.slice();
      for (let r of t) if (e !== r.currentState) {
        if (r.timer) clearTimeout(r.timer);
        this.removeConnectivityStateWatcher(r), r.callback();
      }
      if (e !== ee.ConnectivityState.TRANSIENT_FAILURE) this.currentResolutionError = null;
    }
    throttleKeepalive(e) {
      if (e > this.keepaliveTime) {
        this.keepaliveTime = e;
        for (let t of this.wrappedSubchannels) t.throttleKeepalive(e);
      }
    }
    addWrappedSubchannel(e) {
      this.wrappedSubchannels.add(e);
    }
    removeWrappedSubchannel(e) {
      this.wrappedSubchannels.delete(e);
    }
    doPick(e, t) {
      return this.currentPicker.pick({
        metadata: e,
        extraPickInfo: t
      });
    }
    queueCallForPick(e) {
      this.pickQueue.push(e), this.callRefTimerRef();
    }
    getConfig(e, t) {
      if (this.connectivityState !== ee.ConnectivityState.SHUTDOWN) this.resolvingLoadBalancer.exitIdle();
      if (this.configSelector) return {
        type: "SUCCESS",
        config: this.configSelector.invoke(e, t, this.randomChannelId)
      }; else if (this.currentResolutionError) return {
        type: "ERROR",
        error: this.currentResolutionError
      }; else return {
        type: "NONE"
      };
    }
    queueCallForConfig(e) {
      this.configSelectionQueue.push(e), this.callRefTimerRef();
    }
    enterIdle() {
      if (this.resolvingLoadBalancer.destroy(), this.updateState(ee.ConnectivityState.IDLE), 
      this.currentPicker = new ni.QueuePicker(this.resolvingLoadBalancer), this.idleTimer) clearTimeout(this.idleTimer), 
      this.idleTimer = null;
      if (this.callRefTimer) clearInterval(this.callRefTimer), this.callRefTimer = null;
    }
    startIdleTimeout(e) {
      var t, r;
      this.idleTimer = setTimeout(() => {
        if (this.callCount > 0) {
          this.startIdleTimeout(this.idleTimeoutMs);
          return;
        }
        let s = (new Date).valueOf() - this.lastActivityTimestamp.valueOf();
        if (s >= this.idleTimeoutMs) this.trace("Idle timer triggered after " + this.idleTimeoutMs + "ms of inactivity"), 
        this.enterIdle(); else this.startIdleTimeout(this.idleTimeoutMs - s);
      }, e), (r = (t = this.idleTimer).unref) === null || r === void 0 || r.call(t);
    }
    maybeStartIdleTimer() {
      if (this.connectivityState !== ee.ConnectivityState.SHUTDOWN && !this.idleTimer) this.startIdleTimeout(this.idleTimeoutMs);
    }
    onCallStart() {
      if (this.channelzEnabled) this.channelzInfoTracker.callTracker.addCallStarted();
      this.callCount += 1;
    }
    onCallEnd(e) {
      if (this.channelzEnabled) if (e.code === Te.Status.OK) this.channelzInfoTracker.callTracker.addCallSucceeded(); else this.channelzInfoTracker.callTracker.addCallFailed();
      this.callCount -= 1, this.lastActivityTimestamp = new Date, this.maybeStartIdleTimer();
    }
    createLoadBalancingCall(e, t, r, i, s) {
      let n = ii.getNextCallNumber();
      return this.trace("createLoadBalancingCall [" + n + '] method="' + t + '"'), new ig.LoadBalancingCall(this, e, t, r, i, s, n);
    }
    createRetryingCall(e, t, r, i, s) {
      let n = ii.getNextCallNumber();
      return this.trace("createRetryingCall [" + n + '] method="' + t + '"'), new si.RetryingCall(this, e, t, r, i, s, n, this.retryBufferTracker, ln.get(this.getTarget()));
    }
    createResolvingCall(e, t, r, i, s) {
      let n = ii.getNextCallNumber();
      this.trace("createResolvingCall [" + n + '] method="' + e + '", deadline=' + sg.deadlineToString(t));
      let a = {
        deadline: t,
        flags: s !== null && s !== void 0 ? s : Te.Propagate.DEFAULTS,
        host: r !== null && r !== void 0 ? r : this.defaultAuthority,
        parentCall: i
      }, o = new ng.ResolvingCall(this, e, a, this.filterStackFactory.clone(), n);
      return this.onCallStart(), o.addStatusWatcher(l => {
        this.onCallEnd(l);
      }), o;
    }
    close() {
      var e;
      this.resolvingLoadBalancer.destroy(), this.updateState(ee.ConnectivityState.SHUTDOWN), 
      this.currentPicker = new cg;
      for (let t of this.configSelectionQueue) t.cancelWithStatus(Te.Status.UNAVAILABLE, "Channel closed before call started");
      this.configSelectionQueue = [];
      for (let t of this.pickQueue) t.cancelWithStatus(Te.Status.UNAVAILABLE, "Channel closed before call started");
      if (this.pickQueue = [], this.callRefTimer) clearInterval(this.callRefTimer);
      if (this.idleTimer) clearTimeout(this.idleTimer);
      if (this.channelzEnabled) Nt.unregisterChannelzRef(this.channelzRef);
      this.subchannelPool.unrefUnusedSubchannels(), (e = this.configSelector) === null || e === void 0 || e.unref(), 
      this.configSelector = null;
    }
    getTarget() {
      return cr.uriToString(this.target);
    }
    getConnectivityState(e) {
      let t = this.connectivityState;
      if (e) this.resolvingLoadBalancer.exitIdle(), this.lastActivityTimestamp = new Date, 
      this.maybeStartIdleTimer();
      return t;
    }
    watchConnectivityState(e, t, r) {
      if (this.connectivityState === ee.ConnectivityState.SHUTDOWN) throw Error("Channel has been shut down");
      let i = null;
      if (t !== 1 / 0) {
        let n = t instanceof Date ? t : new Date(t), a = new Date;
        if (t === -1 / 0 || n <= a) {
          process.nextTick(r, Error("Deadline passed without connectivity state change"));
          return;
        }
        i = setTimeout(() => {
          this.removeConnectivityStateWatcher(s), r(Error("Deadline passed without connectivity state change"));
        }, n.getTime() - a.getTime());
      }
      let s = {
        currentState: e,
        callback: r,
        timer: i
      };
      this.connectivityStateWatchers.push(s);
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    createCall(e, t, r, i, s) {
      if (typeof e !== "string") throw TypeError("Channel#createCall: method must be a string");
      if (!(typeof t === "number" || t instanceof Date)) throw TypeError("Channel#createCall: deadline must be a number or Date");
      if (this.connectivityState === ee.ConnectivityState.SHUTDOWN) throw Error("Channel has been shut down");
      return this.createResolvingCall(e, t, r, i, s);
    }
    getOptions() {
      return this.options;
    }
  }
  hg.InternalChannel = dg;
});

var Ra = C(function(yg) {
  Object.defineProperty(yg, "__esModule", {
    value: !0
  });
  yg.ChannelImplementation = void 0;
  var gg = Mr(), mg = xo();
  class vg {
    constructor(e, t, r) {
      if (typeof e !== "string") throw TypeError("Channel target must be a string");
      if (!(t instanceof gg.ChannelCredentials)) throw TypeError("Channel credentials must be a ChannelCredentials object");
      if (r) {
        if (typeof r !== "object") throw TypeError("Channel options must be an object");
      }
      this.internalChannel = new mg.InternalChannel(e, t, r);
    }
    close() {
      this.internalChannel.close();
    }
    getTarget() {
      return this.internalChannel.getTarget();
    }
    getConnectivityState(e) {
      return this.internalChannel.getConnectivityState(e);
    }
    watchConnectivityState(e, t, r) {
      this.internalChannel.watchConnectivityState(e, t, r);
    }
    getChannelzRef() {
      return this.internalChannel.getChannelzRef();
    }
    createCall(e, t, r, i, s) {
      if (typeof e !== "string") throw TypeError("Channel#createCall: method must be a string");
      if (!(typeof t === "number" || t instanceof Date)) throw TypeError("Channel#createCall: deadline must be a number or Date");
      return this.internalChannel.createCall(e, t, r, i, s);
    }
  }
  yg.ChannelImplementation = vg;
});

var wg = C(function(bg) {
  Object.defineProperty(bg, "__esModule", {
    value: !0
  });
  bg.ServerDuplexStreamImpl = bg.ServerWritableStreamImpl = bg.ServerReadableStreamImpl = bg.ServerUnaryCallImpl = void 0;
  bg.serverErrorToStatus = ko;
  var Sg = Ne("events"), ai = Ne("stream"), oi = k(), un = ue();
  function ko(e, t) {
    var r;
    let i = {
      code: oi.Status.UNKNOWN,
      details: "message" in e ? e.message : "Unknown Error",
      metadata: (r = t !== null && t !== void 0 ? t : e.metadata) !== null && r !== void 0 ? r : null
    };
    if ("code" in e && typeof e.code === "number" && Number.isInteger(e.code)) {
      if (i.code = e.code, "details" in e && typeof e.details === "string") i.details = e.details;
    }
    return i;
  }
  class Cg extends Sg.EventEmitter {
    constructor(e, t, r, i) {
      super();
      this.path = e, this.call = t, this.metadata = r, this.request = i, this.cancelled = !1;
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(e) {
      this.call.sendMetadata(e);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
  }
  bg.ServerUnaryCallImpl = Cg;
  class Eg extends ai.Readable {
    constructor(e, t, r) {
      super({
        objectMode: !0
      });
      this.path = e, this.call = t, this.metadata = r, this.cancelled = !1;
    }
    _read(e) {
      this.call.startRead();
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(e) {
      this.call.sendMetadata(e);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
  }
  bg.ServerReadableStreamImpl = Eg;
  class Tg extends ai.Writable {
    constructor(e, t, r, i) {
      super({
        objectMode: !0
      });
      this.path = e, this.call = t, this.metadata = r, this.request = i, this.pendingStatus = {
        code: oi.Status.OK,
        details: "OK"
      }, this.cancelled = !1, this.trailingMetadata = new un.Metadata, this.on("error", s => {
        this.pendingStatus = ko(s), this.end();
      });
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(e) {
      this.call.sendMetadata(e);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
    _write(e, t, r) {
      this.call.sendMessage(e, r);
    }
    _final(e) {
      var t;
      e(null), this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), {
        metadata: (t = this.pendingStatus.metadata) !== null && t !== void 0 ? t : this.trailingMetadata
      }));
    }
    end(e) {
      if (e) this.trailingMetadata = e;
      return super.end();
    }
  }
  bg.ServerWritableStreamImpl = Tg;
  class Rg extends ai.Duplex {
    constructor(e, t, r) {
      super({
        objectMode: !0
      });
      this.path = e, this.call = t, this.metadata = r, this.pendingStatus = {
        code: oi.Status.OK,
        details: "OK"
      }, this.cancelled = !1, this.trailingMetadata = new un.Metadata, this.on("error", i => {
        this.pendingStatus = ko(i), this.end();
      });
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(e) {
      this.call.sendMetadata(e);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
    _read(e) {
      this.call.startRead();
    }
    _write(e, t, r) {
      this.call.sendMessage(e, r);
    }
    _final(e) {
      var t;
      e(null), this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), {
        metadata: (t = this.pendingStatus.metadata) !== null && t !== void 0 ? t : this.trailingMetadata
      }));
    }
    end(e) {
      if (e) this.trailingMetadata = e;
      return super.end();
    }
  }
  bg.ServerDuplexStreamImpl = Rg;
});

var dn = C(function(Ag) {
  Object.defineProperty(Ag, "__esModule", {
    value: !0
  });
  Ag.ServerCredentials = void 0;
  Ag.createCertificateProviderServerCredentials = zR;
  Ag.createServerCredentialsWithInterceptors = HR;
  var li = fa();
  class ci {
    constructor(e, t) {
      this.serverConstructorOptions = e, this.watchers = new Set, this.latestContextOptions = null, 
      this.latestContextOptions = t !== null && t !== void 0 ? t : null;
    }
    _addWatcher(e) {
      this.watchers.add(e);
    }
    _removeWatcher(e) {
      this.watchers.delete(e);
    }
    getWatcherCount() {
      return this.watchers.size;
    }
    updateSecureContextOptions(e) {
      this.latestContextOptions = e;
      for (let t of this.watchers) t(this.latestContextOptions);
    }
    _isSecure() {
      return this.serverConstructorOptions !== null;
    }
    _getSecureContextOptions() {
      return this.latestContextOptions;
    }
    _getConstructorOptions() {
      return this.serverConstructorOptions;
    }
    _getInterceptors() {
      return [];
    }
    static createInsecure() {
      return new Do;
    }
    static createSsl(e, t, r = !1) {
      var i;
      if (e !== null && !Buffer.isBuffer(e)) throw TypeError("rootCerts must be null or a Buffer");
      if (!Array.isArray(t)) throw TypeError("keyCertPairs must be an array");
      if (typeof r !== "boolean") throw TypeError("checkClientCertificate must be a boolean");
      let s = [], n = [];
      for (let a = 0; a < t.length; a++) {
        let o = t[a];
        if (o === null || typeof o !== "object") throw TypeError(`keyCertPair[${a}] must be an object`);
        if (!Buffer.isBuffer(o.private_key)) throw TypeError(`keyCertPair[${a}].private_key must be a Buffer`);
        if (!Buffer.isBuffer(o.cert_chain)) throw TypeError(`keyCertPair[${a}].cert_chain must be a Buffer`);
        s.push(o.cert_chain), n.push(o.private_key);
      }
      return new Lo({
        requestCert: r,
        ciphers: li.CIPHER_SUITES
      }, {
        ca: (i = e !== null && e !== void 0 ? e : li.getDefaultRootsData()) !== null && i !== void 0 ? i : void 0,
        cert: s,
        key: n
      });
    }
  }
  Ag.ServerCredentials = ci;
  class Do extends ci {
    constructor() {
      super(null);
    }
    _getSettings() {
      return null;
    }
    _equals(e) {
      return e instanceof Do;
    }
  }
  class Lo extends ci {
    constructor(e, t) {
      super(e, t);
      this.options = Object.assign(Object.assign({}, e), t);
    }
    _equals(e) {
      if (this === e) return !0;
      if (!(e instanceof Lo)) return !1;
      if (Buffer.isBuffer(this.options.ca) && Buffer.isBuffer(e.options.ca)) {
        if (!this.options.ca.equals(e.options.ca)) return !1;
      } else if (this.options.ca !== e.options.ca) return !1;
      if (Array.isArray(this.options.cert) && Array.isArray(e.options.cert)) {
        if (this.options.cert.length !== e.options.cert.length) return !1;
        for (let t = 0; t < this.options.cert.length; t++) {
          let r = this.options.cert[t], i = e.options.cert[t];
          if (Buffer.isBuffer(r) && Buffer.isBuffer(i)) {
            if (!r.equals(i)) return !1;
          } else if (r !== i) return !1;
        }
      } else if (this.options.cert !== e.options.cert) return !1;
      if (Array.isArray(this.options.key) && Array.isArray(e.options.key)) {
        if (this.options.key.length !== e.options.key.length) return !1;
        for (let t = 0; t < this.options.key.length; t++) {
          let r = this.options.key[t], i = e.options.key[t];
          if (Buffer.isBuffer(r) && Buffer.isBuffer(i)) {
            if (!r.equals(i)) return !1;
          } else if (r !== i) return !1;
        }
      } else if (this.options.key !== e.options.key) return !1;
      if (this.options.requestCert !== e.options.requestCert) return !1;
      return !0;
    }
  }
  class Fo extends ci {
    constructor(e, t, r) {
      super({
        requestCert: t !== null,
        rejectUnauthorized: r,
        ciphers: li.CIPHER_SUITES
      });
      this.identityCertificateProvider = e, this.caCertificateProvider = t, this.requireClientCertificate = r, 
      this.latestCaUpdate = null, this.latestIdentityUpdate = null, this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this), 
      this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this);
    }
    _addWatcher(e) {
      var t;
      if (this.getWatcherCount() === 0) (t = this.caCertificateProvider) === null || t === void 0 || t.addCaCertificateListener(this.caCertificateUpdateListener), 
      this.identityCertificateProvider.addIdentityCertificateListener(this.identityCertificateUpdateListener);
      super._addWatcher(e);
    }
    _removeWatcher(e) {
      var t;
      if (super._removeWatcher(e), this.getWatcherCount() === 0) (t = this.caCertificateProvider) === null || t === void 0 || t.removeCaCertificateListener(this.caCertificateUpdateListener), 
      this.identityCertificateProvider.removeIdentityCertificateListener(this.identityCertificateUpdateListener);
    }
    _equals(e) {
      if (this === e) return !0;
      if (!(e instanceof Fo)) return !1;
      return this.caCertificateProvider === e.caCertificateProvider && this.identityCertificateProvider === e.identityCertificateProvider && this.requireClientCertificate === e.requireClientCertificate;
    }
    calculateSecureContextOptions() {
      var e;
      if (this.latestIdentityUpdate === null) return null;
      if (this.caCertificateProvider !== null && this.latestCaUpdate === null) return null;
      return {
        ca: (e = this.latestCaUpdate) === null || e === void 0 ? void 0 : e.caCertificate,
        cert: [ this.latestIdentityUpdate.certificate ],
        key: [ this.latestIdentityUpdate.privateKey ]
      };
    }
    finalizeUpdate() {
      let e = this.calculateSecureContextOptions();
      this.updateSecureContextOptions(e);
    }
    handleCaCertificateUpdate(e) {
      this.latestCaUpdate = e, this.finalizeUpdate();
    }
    handleIdentityCertitificateUpdate(e) {
      this.latestIdentityUpdate = e, this.finalizeUpdate();
    }
  }
  function zR(e, t, r) {
    return new Fo(e, t, r);
  }
  class qo extends ci {
    constructor(e, t) {
      super({});
      this.childCredentials = e, this.interceptors = t;
    }
    _isSecure() {
      return this.childCredentials._isSecure();
    }
    _equals(e) {
      if (!(e instanceof qo)) return !1;
      if (!this.childCredentials._equals(e.childCredentials)) return !1;
      if (this.interceptors.length !== e.interceptors.length) return !1;
      for (let t = 0; t < this.interceptors.length; t++) if (this.interceptors[t] !== e.interceptors[t]) return !1;
      return !0;
    }
    _getInterceptors() {
      return this.interceptors;
    }
    _addWatcher(e) {
      this.childCredentials._addWatcher(e);
    }
    _removeWatcher(e) {
      this.childCredentials._removeWatcher(e);
    }
    _getConstructorOptions() {
      return this.childCredentials._getConstructorOptions();
    }
    _getSecureContextOptions() {
      return this.childCredentials._getSecureContextOptions();
    }
  }
  function HR(e, t) {
    return new qo(e, t);
  }
});

var zi = C(function(Ng) {
  Object.defineProperty(Ng, "__esModule", {
    value: !0
  });
  Ng.durationMessageToDuration = GR;
  Ng.msToDuration = $R;
  Ng.durationToMs = VR;
  Ng.isDuration = YR;
  Ng.isDurationMessage = KR;
  Ng.parseDuration = XR;
  Ng.durationToString = QR;
  function GR(e) {
    return {
      seconds: Number.parseInt(e.seconds),
      nanos: e.nanos
    };
  }
  function $R(e) {
    return {
      seconds: e / 1e3 | 0,
      nanos: e % 1e3 * 1e6 | 0
    };
  }
  function VR(e) {
    return e.seconds * 1e3 + e.nanos / 1e6 | 0;
  }
  function YR(e) {
    return typeof e.seconds === "number" && typeof e.nanos === "number";
  }
  function KR(e) {
    return typeof e.seconds === "string" && typeof e.nanos === "number";
  }
  var JR = /^(\d+)(?:\.(\d+))?s$/;
  function XR(e) {
    let t = e.match(JR);
    if (!t) return null;
    return {
      seconds: Number.parseInt(t[1], 10),
      nanos: t[2] ? Number.parseInt(t[2].padEnd(9, "0"), 10) : 0
    };
  }
  function QR(e) {
    if (e.nanos === 0) return `${e.seconds}s`;
    let t;
    if (e.nanos % 1e6 === 0) t = 1e6; else if (e.nanos % 1e3 === 0) t = 1e3; else t = 1;
    return `${e.seconds}.${e.nanos / t}s`;
  }
});

var pn = C(function(Gg) {
  var __dirname = "/home/runner/work/claude-cli-internal/claude-cli-internal/node_modules/@grpc/grpc-js/build/src";
  Object.defineProperty(Gg, "__esModule", {
    value: !0
  });
  Gg.OrcaOobMetricsSubchannelWrapper = Gg.GRPC_METRICS_HEADER = Gg.ServerMetricRecorder = Gg.PerRequestMetricRecorder = void 0;
  Gg.createOrcaClient = Bg;
  Gg.createMetricsReader = ob;
  var xg = vs(), ui = zi(), kg = Mr(), Dg = Bi(), hn = k(), Lg = Ir(), Fg = Ae(), Mg = null;
  function fn() {
    if (Mg) return Mg;
    let e = po().loadSync, t = e("xds/service/orca/v3/orca.proto", {
      keepCase: !0,
      longs: String,
      enums: String,
      defaults: !0,
      oneofs: !0,
      includeDirs: [ `${__dirname}/../../proto/xds`, `${__dirname}/../../proto/protoc-gen-validate` ]
    });
    return xg.loadPackageDefinition(t);
  }
  class qg {
    constructor() {
      this.message = {};
    }
    recordRequestCostMetric(e, t) {
      if (!this.message.request_cost) this.message.request_cost = {};
      this.message.request_cost[e] = t;
    }
    recordUtilizationMetric(e, t) {
      if (!this.message.utilization) this.message.utilization = {};
      this.message.utilization[e] = t;
    }
    recordNamedMetric(e, t) {
      if (!this.message.named_metrics) this.message.named_metrics = {};
      this.message.named_metrics[e] = t;
    }
    recordCPUUtilizationMetric(e) {
      this.message.cpu_utilization = e;
    }
    recordMemoryUtilizationMetric(e) {
      this.message.mem_utilization = e;
    }
    recordApplicationUtilizationMetric(e) {
      this.message.application_utilization = e;
    }
    recordQpsMetric(e) {
      this.message.rps_fractional = e;
    }
    recordEpsMetric(e) {
      this.message.eps = e;
    }
    serialize() {
      return fn().xds.data.orca.v3.OrcaLoadReport.serialize(this.message);
    }
  }
  Gg.PerRequestMetricRecorder = qg;
  var ab = 3e4;
  class Ug {
    constructor() {
      this.message = {}, this.serviceImplementation = {
        StreamCoreMetrics: e => {
          let t = e.request.report_interval ? ui.durationToMs(ui.durationMessageToDuration(e.request.report_interval)) : ab, r = setInterval(() => {
            e.write(this.message);
          }, t);
          e.on("cancelled", () => {
            clearInterval(r);
          });
        }
      };
    }
    putUtilizationMetric(e, t) {
      if (!this.message.utilization) this.message.utilization = {};
      this.message.utilization[e] = t;
    }
    setAllUtilizationMetrics(e) {
      this.message.utilization = Object.assign({}, e);
    }
    deleteUtilizationMetric(e) {
      var t;
      (t = this.message.utilization) === null || t === void 0 || delete t[e];
    }
    setCpuUtilizationMetric(e) {
      this.message.cpu_utilization = e;
    }
    deleteCpuUtilizationMetric() {
      delete this.message.cpu_utilization;
    }
    setApplicationUtilizationMetric(e) {
      this.message.application_utilization = e;
    }
    deleteApplicationUtilizationMetric() {
      delete this.message.application_utilization;
    }
    setQpsMetric(e) {
      this.message.rps_fractional = e;
    }
    deleteQpsMetric() {
      delete this.message.rps_fractional;
    }
    setEpsMetric(e) {
      this.message.eps = e;
    }
    deleteEpsMetric() {
      delete this.message.eps;
    }
    addToServer(e) {
      let t = fn().xds.service.orca.v3.OpenRcaService.service;
      e.addService(t, this.serviceImplementation);
    }
  }
  Gg.ServerMetricRecorder = Ug;
  function Bg(e) {
    return new (fn().xds.service.orca.v3.OpenRcaService)("unused", kg.ChannelCredentials.createInsecure(), {
      channelOverride: e
    });
  }
  Gg.GRPC_METRICS_HEADER = "endpoint-load-metrics-bin";
  var Ig = "grpc_orca_load_report";
  function ob(e, t) {
    return (r, i, s) => {
      let n = s.getOpaque(Ig);
      if (n) e(n); else {
        let a = s.get(Gg.GRPC_METRICS_HEADER);
        if (a.length > 0) n = fn().xds.data.orca.v3.OrcaLoadReport.deserialize(a[0]), e(n), 
        s.setOpaque(Ig, n);
      }
      if (t) t(r, i, s);
    };
  }
  var zg = "orca_oob_metrics";
  class Hg {
    constructor(e, t) {
      this.metricsListener = e, this.intervalMs = t, this.dataProducer = null;
    }
    setSubchannel(e) {
      let t = e.getOrCreateDataProducer(zg, lb);
      this.dataProducer = t, t.addDataWatcher(this);
    }
    destroy() {
      var e;
      (e = this.dataProducer) === null || e === void 0 || e.removeDataWatcher(this);
    }
    getInterval() {
      return this.intervalMs;
    }
    onMetricsUpdate(e) {
      this.metricsListener(e);
    }
  }
  class Wg {
    constructor(e) {
      this.subchannel = e, this.dataWatchers = new Set, this.orcaSupported = !0, this.metricsCall = null, 
      this.currentInterval = 1 / 0, this.backoffTimer = new Lg.BackoffTimeout(() => this.updateMetricsSubscription()), 
      this.subchannelStateListener = () => this.updateMetricsSubscription();
      let t = e.getChannel();
      this.client = Bg(t), e.addConnectivityStateListener(this.subchannelStateListener);
    }
    addDataWatcher(e) {
      this.dataWatchers.add(e), this.updateMetricsSubscription();
    }
    removeDataWatcher(e) {
      var t;
      if (this.dataWatchers.delete(e), this.dataWatchers.size === 0) this.subchannel.removeDataProducer(zg), 
      (t = this.metricsCall) === null || t === void 0 || t.cancel(), this.metricsCall = null, 
      this.client.close(), this.subchannel.removeConnectivityStateListener(this.subchannelStateListener); else this.updateMetricsSubscription();
    }
    updateMetricsSubscription() {
      var e;
      if (this.dataWatchers.size === 0 || !this.orcaSupported || this.subchannel.getConnectivityState() !== Fg.ConnectivityState.READY) return;
      let t = Math.min(...Array.from(this.dataWatchers).map(r => r.getInterval()));
      if (!this.metricsCall || t !== this.currentInterval) {
        (e = this.metricsCall) === null || e === void 0 || e.cancel(), this.currentInterval = t;
        let r = this.client.streamCoreMetrics({
          report_interval: ui.msToDuration(t)
        });
        this.metricsCall = r, r.on("data", i => {
          this.dataWatchers.forEach(s => {
            s.onMetricsUpdate(i);
          });
        }), r.on("error", i => {
          if (this.metricsCall = null, i.code === hn.Status.UNIMPLEMENTED) {
            this.orcaSupported = !1;
            return;
          }
          if (i.code === hn.Status.CANCELLED) return;
          this.backoffTimer.runOnce();
        });
      }
    }
  }
  class jg extends Dg.BaseSubchannelWrapper {
    constructor(e, t, r) {
      super(e);
      this.addDataWatcher(new Hg(t, r));
    }
    getWrappedSubchannel() {
      return this.child;
    }
  }
  Gg.OrcaOobMetricsSubchannelWrapper = jg;
  function lb(e) {
    return new Wg(e);
  }
});

var Ho = C(function(nm) {
  Object.defineProperty(nm, "__esModule", {
    value: !0
  });
  nm.BaseServerInterceptingCall = nm.ServerInterceptingCall = nm.ResponderBuilder = nm.ServerListenerBuilder = void 0;
  nm.isInterceptingServerListener = fb;
  nm.getServerInterceptingCall = yb;
  var ur = ue(), j = k(), Ke = Ne("http2"), vn = Qi(), yn = Ne("zlib"), Xg = Po(), Sn = K(), Qg = Ne("tls"), _n = pn(), Zg = "server_call";
  function Tr(e) {
    Sn.trace(j.LogVerbosity.DEBUG, Zg, e);
  }
  class em {
    constructor() {
      this.metadata = void 0, this.message = void 0, this.halfClose = void 0, this.cancel = void 0;
    }
    withOnReceiveMetadata(e) {
      return this.metadata = e, this;
    }
    withOnReceiveMessage(e) {
      return this.message = e, this;
    }
    withOnReceiveHalfClose(e) {
      return this.halfClose = e, this;
    }
    withOnCancel(e) {
      return this.cancel = e, this;
    }
    build() {
      return {
        onReceiveMetadata: this.metadata,
        onReceiveMessage: this.message,
        onReceiveHalfClose: this.halfClose,
        onCancel: this.cancel
      };
    }
  }
  nm.ServerListenerBuilder = em;
  function fb(e) {
    return e.onReceiveMetadata !== void 0 && e.onReceiveMetadata.length === 1;
  }
  class tm {
    constructor(e, t) {
      this.listener = e, this.nextListener = t, this.cancelled = !1, this.processingMetadata = !1, 
      this.hasPendingMessage = !1, this.pendingMessage = null, this.processingMessage = !1, 
      this.hasPendingHalfClose = !1;
    }
    processPendingMessage() {
      if (this.hasPendingMessage) this.nextListener.onReceiveMessage(this.pendingMessage), 
      this.pendingMessage = null, this.hasPendingMessage = !1;
    }
    processPendingHalfClose() {
      if (this.hasPendingHalfClose) this.nextListener.onReceiveHalfClose(), this.hasPendingHalfClose = !1;
    }
    onReceiveMetadata(e) {
      if (this.cancelled) return;
      this.processingMetadata = !0, this.listener.onReceiveMetadata(e, t => {
        if (this.processingMetadata = !1, this.cancelled) return;
        this.nextListener.onReceiveMetadata(t), this.processPendingMessage(), this.processPendingHalfClose();
      });
    }
    onReceiveMessage(e) {
      if (this.cancelled) return;
      this.processingMessage = !0, this.listener.onReceiveMessage(e, t => {
        if (this.processingMessage = !1, this.cancelled) return;
        if (this.processingMetadata) this.pendingMessage = t, this.hasPendingMessage = !0; else this.nextListener.onReceiveMessage(t), 
        this.processPendingHalfClose();
      });
    }
    onReceiveHalfClose() {
      if (this.cancelled) return;
      this.listener.onReceiveHalfClose(() => {
        if (this.cancelled) return;
        if (this.processingMetadata || this.processingMessage) this.hasPendingHalfClose = !0; else this.nextListener.onReceiveHalfClose();
      });
    }
    onCancel() {
      this.cancelled = !0, this.listener.onCancel(), this.nextListener.onCancel();
    }
  }
  class rm {
    constructor() {
      this.start = void 0, this.metadata = void 0, this.message = void 0, this.status = void 0;
    }
    withStart(e) {
      return this.start = e, this;
    }
    withSendMetadata(e) {
      return this.metadata = e, this;
    }
    withSendMessage(e) {
      return this.message = e, this;
    }
    withSendStatus(e) {
      return this.status = e, this;
    }
    build() {
      return {
        start: this.start,
        sendMetadata: this.metadata,
        sendMessage: this.message,
        sendStatus: this.status
      };
    }
  }
  nm.ResponderBuilder = rm;
  var gn = {
    onReceiveMetadata: (e, t) => {
      t(e);
    },
    onReceiveMessage: (e, t) => {
      t(e);
    },
    onReceiveHalfClose: e => {
      e();
    },
    onCancel: () => {}
  }, mn = {
    start: e => {
      e();
    },
    sendMetadata: (e, t) => {
      t(e);
    },
    sendMessage: (e, t) => {
      t(e);
    },
    sendStatus: (e, t) => {
      t(e);
    }
  };
  class im {
    constructor(e, t) {
      var r, i, s, n;
      this.nextCall = e, this.processingMetadata = !1, this.sentMetadata = !1, this.processingMessage = !1, 
      this.pendingMessage = null, this.pendingMessageCallback = null, this.pendingStatus = null, 
      this.responder = {
        start: (r = t === null || t === void 0 ? void 0 : t.start) !== null && r !== void 0 ? r : mn.start,
        sendMetadata: (i = t === null || t === void 0 ? void 0 : t.sendMetadata) !== null && i !== void 0 ? i : mn.sendMetadata,
        sendMessage: (s = t === null || t === void 0 ? void 0 : t.sendMessage) !== null && s !== void 0 ? s : mn.sendMessage,
        sendStatus: (n = t === null || t === void 0 ? void 0 : t.sendStatus) !== null && n !== void 0 ? n : mn.sendStatus
      };
    }
    processPendingMessage() {
      if (this.pendingMessageCallback) this.nextCall.sendMessage(this.pendingMessage, this.pendingMessageCallback), 
      this.pendingMessage = null, this.pendingMessageCallback = null;
    }
    processPendingStatus() {
      if (this.pendingStatus) this.nextCall.sendStatus(this.pendingStatus), this.pendingStatus = null;
    }
    start(e) {
      this.responder.start(t => {
        var r, i, s, n;
        let a = {
          onReceiveMetadata: (r = t === null || t === void 0 ? void 0 : t.onReceiveMetadata) !== null && r !== void 0 ? r : gn.onReceiveMetadata,
          onReceiveMessage: (i = t === null || t === void 0 ? void 0 : t.onReceiveMessage) !== null && i !== void 0 ? i : gn.onReceiveMessage,
          onReceiveHalfClose: (s = t === null || t === void 0 ? void 0 : t.onReceiveHalfClose) !== null && s !== void 0 ? s : gn.onReceiveHalfClose,
          onCancel: (n = t === null || t === void 0 ? void 0 : t.onCancel) !== null && n !== void 0 ? n : gn.onCancel
        }, o = new tm(a, e);
        this.nextCall.start(o);
      });
    }
    sendMetadata(e) {
      this.processingMetadata = !0, this.sentMetadata = !0, this.responder.sendMetadata(e, t => {
        this.processingMetadata = !1, this.nextCall.sendMetadata(t), this.processPendingMessage(), 
        this.processPendingStatus();
      });
    }
    sendMessage(e, t) {
      if (this.processingMessage = !0, !this.sentMetadata) this.sendMetadata(new ur.Metadata);
      this.responder.sendMessage(e, r => {
        if (this.processingMessage = !1, this.processingMetadata) this.pendingMessage = r, 
        this.pendingMessageCallback = t; else this.nextCall.sendMessage(r, t);
      });
    }
    sendStatus(e) {
      this.responder.sendStatus(e, t => {
        if (this.processingMetadata || this.processingMessage) this.pendingStatus = t; else this.nextCall.sendStatus(t);
      });
    }
    startRead() {
      this.nextCall.startRead();
    }
    getPeer() {
      return this.nextCall.getPeer();
    }
    getDeadline() {
      return this.nextCall.getDeadline();
    }
    getHost() {
      return this.nextCall.getHost();
    }
    getAuthContext() {
      return this.nextCall.getAuthContext();
    }
    getConnectionInfo() {
      return this.nextCall.getConnectionInfo();
    }
    getMetricsRecorder() {
      return this.nextCall.getMetricsRecorder();
    }
  }
  nm.ServerInterceptingCall = im;
  var sm = "grpc-accept-encoding", Bo = "grpc-encoding", Yg = "grpc-message", Kg = "grpc-status", Uo = "grpc-timeout", pb = /(\d{1,8})\s*([HMSmun])/, gb = {
    H: 36e5,
    M: 6e4,
    S: 1e3,
    m: 1,
    u: .001,
    n: 1e-6
  }, mb = {
    [sm]: "identity,deflate,gzip",
    [Bo]: "identity"
  }, Jg = {
    [Ke.constants.HTTP2_HEADER_STATUS]: Ke.constants.HTTP_STATUS_OK,
    [Ke.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto"
  }, vb = {
    waitForTrailers: !0
  };
  class zo {
    constructor(e, t, r, i, s) {
      var n, a;
      if (this.stream = e, this.callEventTracker = r, this.handler = i, this.listener = null, 
      this.deadlineTimer = null, this.deadline = 1 / 0, this.maxSendMessageSize = j.DEFAULT_MAX_SEND_MESSAGE_LENGTH, 
      this.maxReceiveMessageSize = j.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH, this.cancelled = !1, 
      this.metadataSent = !1, this.wantTrailers = !1, this.cancelNotified = !1, this.incomingEncoding = "identity", 
      this.readQueue = [], this.isReadPending = !1, this.receivedHalfClose = !1, this.streamEnded = !1, 
      this.metricsRecorder = new _n.PerRequestMetricRecorder, this.stream.once("close", () => {
        var d;
        if (Tr("Request to method " + ((d = this.handler) === null || d === void 0 ? void 0 : d.path) + " stream closed with rstCode " + this.stream.rstCode), 
        this.callEventTracker && !this.streamEnded) this.streamEnded = !0, this.callEventTracker.onStreamEnd(!1), 
        this.callEventTracker.onCallEnd({
          code: j.Status.CANCELLED,
          details: "Stream closed before sending status",
          metadata: null
        });
        this.notifyOnCancel();
      }), this.stream.on("data", d => {
        this.handleDataFrame(d);
      }), this.stream.pause(), this.stream.on("end", () => {
        this.handleEndEvent();
      }), "grpc.max_send_message_length" in s) this.maxSendMessageSize = s["grpc.max_send_message_length"];
      if ("grpc.max_receive_message_length" in s) this.maxReceiveMessageSize = s["grpc.max_receive_message_length"];
      this.host = (n = t[":authority"]) !== null && n !== void 0 ? n : t.host, this.decoder = new Xg.StreamDecoder(this.maxReceiveMessageSize);
      let o = ur.Metadata.fromHttp2Headers(t);
      if (Sn.isTracerEnabled(Zg)) Tr("Request to " + this.handler.path + " received headers " + JSON.stringify(o.toJSON()));
      let l = o.get(Uo);
      if (l.length > 0) this.handleTimeoutHeader(l[0]);
      let c = o.get(Bo);
      if (c.length > 0) this.incomingEncoding = c[0];
      o.remove(Uo), o.remove(Bo), o.remove(sm), o.remove(Ke.constants.HTTP2_HEADER_ACCEPT_ENCODING), 
      o.remove(Ke.constants.HTTP2_HEADER_TE), o.remove(Ke.constants.HTTP2_HEADER_CONTENT_TYPE), 
      this.metadata = o;
      let u = (a = e.session) === null || a === void 0 ? void 0 : a.socket;
      this.connectionInfo = {
        localAddress: u === null || u === void 0 ? void 0 : u.localAddress,
        localPort: u === null || u === void 0 ? void 0 : u.localPort,
        remoteAddress: u === null || u === void 0 ? void 0 : u.remoteAddress,
        remotePort: u === null || u === void 0 ? void 0 : u.remotePort
      }, this.shouldSendMetrics = !!s["grpc.server_call_metric_recording"];
    }
    handleTimeoutHeader(e) {
      let t = e.toString().match(pb);
      if (t === null) {
        let s = {
          code: j.Status.INTERNAL,
          details: `Invalid ${Uo} value "${e}"`,
          metadata: null
        };
        process.nextTick(() => {
          this.sendStatus(s);
        });
        return;
      }
      let r = +t[1] * gb[t[2]] | 0, i = new Date;
      this.deadline = i.setMilliseconds(i.getMilliseconds() + r), this.deadlineTimer = setTimeout(() => {
        let s = {
          code: j.Status.DEADLINE_EXCEEDED,
          details: "Deadline exceeded",
          metadata: null
        };
        this.sendStatus(s);
      }, r);
    }
    checkCancelled() {
      if (!this.cancelled && (this.stream.destroyed || this.stream.closed)) this.notifyOnCancel(), 
      this.cancelled = !0;
      return this.cancelled;
    }
    notifyOnCancel() {
      if (this.cancelNotified) return;
      if (this.cancelNotified = !0, this.cancelled = !0, process.nextTick(() => {
        var e;
        (e = this.listener) === null || e === void 0 || e.onCancel();
      }), this.deadlineTimer) clearTimeout(this.deadlineTimer);
      this.stream.resume();
    }
    maybeSendMetadata() {
      if (!this.metadataSent) this.sendMetadata(new ur.Metadata);
    }
    serializeMessage(e) {
      let t = this.handler.serialize(e), r = t.byteLength, i = Buffer.allocUnsafe(r + 5);
      return i.writeUInt8(0, 0), i.writeUInt32BE(r, 1), t.copy(i, 5), i;
    }
    decompressMessage(e, t) {
      let r = e.subarray(5);
      if (t === "identity") return r; else if (t === "deflate" || t === "gzip") {
        let i;
        if (t === "deflate") i = yn.createInflate(); else i = yn.createGunzip();
        return new Promise((s, n) => {
          let a = 0, o = [];
          i.on("error", l => {
            n({
              code: j.Status.INTERNAL,
              details: "Failed to decompress message"
            });
          }), i.on("data", l => {
            if (o.push(l), a += l.byteLength, this.maxReceiveMessageSize !== -1 && a > this.maxReceiveMessageSize) i.destroy(), 
            n({
              code: j.Status.RESOURCE_EXHAUSTED,
              details: `Received message that decompresses to a size larger than ${this.maxReceiveMessageSize}`
            });
          }), i.on("end", () => {
            s(Buffer.concat(o));
          }), i.write(r), i.end();
        });
      } else return Promise.reject({
        code: j.Status.UNIMPLEMENTED,
        details: `Received message compressed with unsupported encoding "${t}"`
      });
    }
    async decompressAndMaybePush(e) {
      if (e.type !== "COMPRESSED") throw Error(`Invalid queue entry type: ${e.type}`);
      let r = e.compressedMessage.readUInt8(0) === 1 ? this.incomingEncoding : "identity", i;
      try {
        i = await this.decompressMessage(e.compressedMessage, r);
      } catch (s) {
        this.sendStatus(s);
        return;
      }
      try {
        e.parsedMessage = this.handler.deserialize(i);
      } catch (s) {
        this.sendStatus({
          code: j.Status.INTERNAL,
          details: `Error deserializing request: ${s.message}`
        });
        return;
      }
      e.type = "READABLE", this.maybePushNextMessage();
    }
    maybePushNextMessage() {
      if (this.listener && this.isReadPending && this.readQueue.length > 0 && this.readQueue[0].type !== "COMPRESSED") {
        this.isReadPending = !1;
        let e = this.readQueue.shift();
        if (e.type === "READABLE") this.listener.onReceiveMessage(e.parsedMessage); else this.listener.onReceiveHalfClose();
      }
    }
    handleDataFrame(e) {
      var t;
      if (this.checkCancelled()) return;
      Tr("Request to " + this.handler.path + " received data frame of size " + e.length);
      let r;
      try {
        r = this.decoder.write(e);
      } catch (i) {
        this.sendStatus({
          code: j.Status.RESOURCE_EXHAUSTED,
          details: i.message
        });
        return;
      }
      for (let i of r) {
        this.stream.pause();
        let s = {
          type: "COMPRESSED",
          compressedMessage: i,
          parsedMessage: null
        };
        this.readQueue.push(s), this.decompressAndMaybePush(s), (t = this.callEventTracker) === null || t === void 0 || t.addMessageReceived();
      }
    }
    handleEndEvent() {
      this.readQueue.push({
        type: "HALF_CLOSE",
        compressedMessage: null,
        parsedMessage: null
      }), this.receivedHalfClose = !0, this.maybePushNextMessage();
    }
    start(e) {
      if (Tr("Request to " + this.handler.path + " start called"), this.checkCancelled()) return;
      this.listener = e, e.onReceiveMetadata(this.metadata);
    }
    sendMetadata(e) {
      if (this.checkCancelled()) return;
      if (this.metadataSent) return;
      this.metadataSent = !0;
      let t = e ? e.toHttp2Headers() : null, r = Object.assign(Object.assign(Object.assign({}, Jg), mb), t);
      this.stream.respond(r, vb);
    }
    sendMessage(e, t) {
      if (this.checkCancelled()) return;
      let r;
      try {
        r = this.serializeMessage(e);
      } catch (i) {
        this.sendStatus({
          code: j.Status.INTERNAL,
          details: `Error serializing response: ${vn.getErrorMessage(i)}`,
          metadata: null
        });
        return;
      }
      if (this.maxSendMessageSize !== -1 && r.length - 5 > this.maxSendMessageSize) {
        this.sendStatus({
          code: j.Status.RESOURCE_EXHAUSTED,
          details: `Sent message larger than max (${r.length} vs. ${this.maxSendMessageSize})`,
          metadata: null
        });
        return;
      }
      this.maybeSendMetadata(), Tr("Request to " + this.handler.path + " sent data frame of size " + r.length), 
      this.stream.write(r, i => {
        var s;
        if (i) {
          this.sendStatus({
            code: j.Status.INTERNAL,
            details: `Error writing message: ${vn.getErrorMessage(i)}`,
            metadata: null
          });
          return;
        }
        (s = this.callEventTracker) === null || s === void 0 || s.addMessageSent(), t();
      });
    }
    sendStatus(e) {
      var t, r, i;
      if (this.checkCancelled()) return;
      Tr("Request to method " + ((t = this.handler) === null || t === void 0 ? void 0 : t.path) + " ended with status code: " + j.Status[e.code] + " details: " + e.details);
      let s = (i = (r = e.metadata) === null || r === void 0 ? void 0 : r.clone()) !== null && i !== void 0 ? i : new ur.Metadata;
      if (this.shouldSendMetrics) s.set(_n.GRPC_METRICS_HEADER, this.metricsRecorder.serialize());
      if (this.metadataSent) if (!this.wantTrailers) this.wantTrailers = !0, this.stream.once("wantTrailers", () => {
        if (this.callEventTracker && !this.streamEnded) this.streamEnded = !0, this.callEventTracker.onStreamEnd(!0), 
        this.callEventTracker.onCallEnd(e);
        let n = Object.assign({
          [Kg]: e.code,
          [Yg]: encodeURI(e.details)
        }, s.toHttp2Headers());
        this.stream.sendTrailers(n), this.notifyOnCancel();
      }), this.stream.end(); else this.notifyOnCancel(); else {
        if (this.callEventTracker && !this.streamEnded) this.streamEnded = !0, this.callEventTracker.onStreamEnd(!0), 
        this.callEventTracker.onCallEnd(e);
        let n = Object.assign(Object.assign({
          [Kg]: e.code,
          [Yg]: encodeURI(e.details)
        }, Jg), s.toHttp2Headers());
        this.stream.respond(n, {
          endStream: !0
        }), this.notifyOnCancel();
      }
    }
    startRead() {
      if (Tr("Request to " + this.handler.path + " startRead called"), this.checkCancelled()) return;
      if (this.isReadPending = !0, this.readQueue.length === 0) {
        if (!this.receivedHalfClose) this.stream.resume();
      } else this.maybePushNextMessage();
    }
    getPeer() {
      var e;
      let t = (e = this.stream.session) === null || e === void 0 ? void 0 : e.socket;
      if (t === null || t === void 0 ? void 0 : t.remoteAddress) if (t.remotePort) return `${t.remoteAddress}:${t.remotePort}`; else return t.remoteAddress; else return "unknown";
    }
    getDeadline() {
      return this.deadline;
    }
    getHost() {
      return this.host;
    }
    getAuthContext() {
      var e;
      if (((e = this.stream.session) === null || e === void 0 ? void 0 : e.socket) instanceof Qg.TLSSocket) {
        let t = this.stream.session.socket.getPeerCertificate();
        return {
          transportSecurityType: "ssl",
          sslPeerCertificate: t.raw ? t : void 0
        };
      } else return {};
    }
    getConnectionInfo() {
      return this.connectionInfo;
    }
    getMetricsRecorder() {
      return this.metricsRecorder;
    }
  }
  nm.BaseServerInterceptingCall = zo;
  function yb(e, t, r, i, s, n) {
    let a = {
      path: s.path,
      requestStream: s.type === "clientStream" || s.type === "bidi",
      responseStream: s.type === "serverStream" || s.type === "bidi",
      requestDeserialize: s.deserialize,
      responseSerialize: s.serialize
    }, o = new zo(t, r, i, s, n);
    return e.reduce((l, c) => c(a, l), o);
  }
});

var hm = C(function(dr) {
  var Rb = dr && dr.__runInitializers || function(e, t, r) {
    var i = arguments.length > 2;
    for (var s = 0; s < t.length; s++) r = i ? t[s].call(e, r) : t[s].call(e);
    return i ? r : void 0;
  }, bb = dr && dr.__esDecorate || function(e, t, r, i, s, n) {
    function a(T) {
      if (T !== void 0 && typeof T !== "function") throw TypeError("Function expected");
      return T;
    }
    var o = i.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", c = !t && e ? i.static ? e : e.prototype : null, u = t || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {}), d, h = !1;
    for (var m = r.length - 1; m >= 0; m--) {
      var f = {};
      for (var y in i) f[y] = y === "access" ? {} : i[y];
      for (var y in i.access) f.access[y] = i.access[y];
      f.addInitializer = function(T) {
        if (h) throw TypeError("Cannot add initializers after decoration has completed");
        n.push(a(T || null));
      };
      var E = (0, r[m])(o === "accessor" ? {
        get: u.get,
        set: u.set
      } : u[l], f);
      if (o === "accessor") {
        if (E === void 0) continue;
        if (E === null || typeof E !== "object") throw TypeError("Object expected");
        if (d = a(E.get)) u.get = d;
        if (d = a(E.set)) u.set = d;
        if (d = a(E.init)) s.unshift(d);
      } else if (d = a(E)) if (o === "field") s.unshift(d); else u[l] = d;
    }
    if (c) Object.defineProperty(c, i.name, u);
    h = !0;
  };
  Object.defineProperty(dr, "__esModule", {
    value: !0
  });
  dr.Server = void 0;
  var Y = Ne("http2"), dm = Ne("util"), N = k(), Xe = wg(), hi = dn(), Cn = rt(), Je = K(), Re = Pe(), re = we(), L = Zt(), En = Ho(), di = 2147483647, Wo = 2147483647, Ob = 2e4, om = 2147483647, {HTTP2_HEADER_PATH: lm} = Y.constants, wb = "server", cm = Buffer.from("max_age");
  function um(e) {
    Je.trace(N.LogVerbosity.DEBUG, "server_call", e);
  }
  function Ab() {}
  function Pb(e) {
    return function(t, r) {
      return dm.deprecate(t, e);
    };
  }
  function jo(e) {
    return {
      code: N.Status.UNIMPLEMENTED,
      details: `The server does not implement the method ${e}`
    };
  }
  function Nb(e, t) {
    let r = jo(t);
    switch (e) {
     case "unary":
      return (i, s) => {
        s(r, null);
      };

     case "clientStream":
      return (i, s) => {
        s(r, null);
      };

     case "serverStream":
      return i => {
        i.emit("error", r);
      };

     case "bidi":
      return i => {
        i.emit("error", r);
      };

     default:
      throw Error(`Invalid handlerType ${e}`);
    }
  }
  var Mb = (() => {
    var e;
    let t = [], r;
    return e = class {
      constructor(s) {
        var n, a, o, l, c, u;
        if (this.boundPorts = (Rb(this, t), new Map), this.http2Servers = new Map, this.sessionIdleTimeouts = new Map, 
        this.handlers = new Map, this.sessions = new Map, this.started = !1, this.shutdown = !1, 
        this.serverAddressString = "null", this.channelzEnabled = !0, this.options = s !== null && s !== void 0 ? s : {}, 
        this.options["grpc.enable_channelz"] === 0) this.channelzEnabled = !1, this.channelzTrace = new L.ChannelzTraceStub, 
        this.callTracker = new L.ChannelzCallTrackerStub, this.listenerChildrenTracker = new L.ChannelzChildrenTrackerStub, 
        this.sessionChildrenTracker = new L.ChannelzChildrenTrackerStub; else this.channelzTrace = new L.ChannelzTrace, 
        this.callTracker = new L.ChannelzCallTracker, this.listenerChildrenTracker = new L.ChannelzChildrenTracker, 
        this.sessionChildrenTracker = new L.ChannelzChildrenTracker;
        if (this.channelzRef = L.registerChannelzServer("server", () => this.getChannelzInfo(), this.channelzEnabled), 
        this.channelzTrace.addTrace("CT_INFO", "Server created"), this.maxConnectionAgeMs = (n = this.options["grpc.max_connection_age_ms"]) !== null && n !== void 0 ? n : di, 
        this.maxConnectionAgeGraceMs = (a = this.options["grpc.max_connection_age_grace_ms"]) !== null && a !== void 0 ? a : di, 
        this.keepaliveTimeMs = (o = this.options["grpc.keepalive_time_ms"]) !== null && o !== void 0 ? o : Wo, 
        this.keepaliveTimeoutMs = (l = this.options["grpc.keepalive_timeout_ms"]) !== null && l !== void 0 ? l : Ob, 
        this.sessionIdleTimeout = (c = this.options["grpc.max_connection_idle_ms"]) !== null && c !== void 0 ? c : om, 
        this.commonServerOptions = {
          maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER
        }, "grpc-node.max_session_memory" in this.options) this.commonServerOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"]; else this.commonServerOptions.maxSessionMemory = Number.MAX_SAFE_INTEGER;
        if ("grpc.max_concurrent_streams" in this.options) this.commonServerOptions.settings = {
          maxConcurrentStreams: this.options["grpc.max_concurrent_streams"]
        };
        this.interceptors = (u = this.options.interceptors) !== null && u !== void 0 ? u : [], 
        this.trace("Server constructed");
      }
      getChannelzInfo() {
        return {
          trace: this.channelzTrace,
          callTracker: this.callTracker,
          listenerChildren: this.listenerChildrenTracker.getChildLists(),
          sessionChildren: this.sessionChildrenTracker.getChildLists()
        };
      }
      getChannelzSessionInfo(s) {
        var n, a, o;
        let l = this.sessions.get(s), c = s.socket, u = c.remoteAddress ? Re.stringToSubchannelAddress(c.remoteAddress, c.remotePort) : null, d = c.localAddress ? Re.stringToSubchannelAddress(c.localAddress, c.localPort) : null, h;
        if (s.encrypted) {
          let f = c, y = f.getCipher(), E = f.getCertificate(), T = f.getPeerCertificate();
          h = {
            cipherSuiteStandardName: (n = y.standardName) !== null && n !== void 0 ? n : null,
            cipherSuiteOtherName: y.standardName ? null : y.name,
            localCertificate: E && "raw" in E ? E.raw : null,
            remoteCertificate: T && "raw" in T ? T.raw : null
          };
        } else h = null;
        return {
          remoteAddress: u,
          localAddress: d,
          security: h,
          remoteName: null,
          streamsStarted: l.streamTracker.callsStarted,
          streamsSucceeded: l.streamTracker.callsSucceeded,
          streamsFailed: l.streamTracker.callsFailed,
          messagesSent: l.messagesSent,
          messagesReceived: l.messagesReceived,
          keepAlivesSent: l.keepAlivesSent,
          lastLocalStreamCreatedTimestamp: null,
          lastRemoteStreamCreatedTimestamp: l.streamTracker.lastCallStartedTimestamp,
          lastMessageSentTimestamp: l.lastMessageSentTimestamp,
          lastMessageReceivedTimestamp: l.lastMessageReceivedTimestamp,
          localFlowControlWindow: (a = s.state.localWindowSize) !== null && a !== void 0 ? a : null,
          remoteFlowControlWindow: (o = s.state.remoteWindowSize) !== null && o !== void 0 ? o : null
        };
      }
      trace(s) {
        Je.trace(N.LogVerbosity.DEBUG, wb, "(" + this.channelzRef.id + ") " + s);
      }
      keepaliveTrace(s) {
        Je.trace(N.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + s);
      }
      addProtoService() {
        throw Error("Not implemented. Use addService() instead");
      }
      addService(s, n) {
        if (s === null || typeof s !== "object" || n === null || typeof n !== "object") throw Error("addService() requires two objects as arguments");
        let a = Object.keys(s);
        if (a.length === 0) throw Error("Cannot add an empty service to a server");
        a.forEach(o => {
          let l = s[o], c;
          if (l.requestStream) if (l.responseStream) c = "bidi"; else c = "clientStream"; else if (l.responseStream) c = "serverStream"; else c = "unary";
          let u = n[o], d;
          if (u === void 0 && typeof l.originalName === "string") u = n[l.originalName];
          if (u !== void 0) d = u.bind(n); else d = Nb(c, o);
          if (this.register(l.path, d, l.responseSerialize, l.requestDeserialize, c) === !1) throw Error(`Method handler for ${l.path} already provided.`);
        });
      }
      removeService(s) {
        if (s === null || typeof s !== "object") throw Error("removeService() requires object as argument");
        Object.keys(s).forEach(a => {
          let o = s[a];
          this.unregister(o.path);
        });
      }
      bind(s, n) {
        throw Error("Not implemented. Use bindAsync() instead");
      }
      experimentalRegisterListenerToChannelz(s) {
        return L.registerChannelzSocket(Re.subchannelAddressToString(s), () => ({
          localAddress: s,
          remoteAddress: null,
          security: null,
          remoteName: null,
          streamsStarted: 0,
          streamsSucceeded: 0,
          streamsFailed: 0,
          messagesSent: 0,
          messagesReceived: 0,
          keepAlivesSent: 0,
          lastLocalStreamCreatedTimestamp: null,
          lastRemoteStreamCreatedTimestamp: null,
          lastMessageSentTimestamp: null,
          lastMessageReceivedTimestamp: null,
          localFlowControlWindow: null,
          remoteFlowControlWindow: null
        }), this.channelzEnabled);
      }
      experimentalUnregisterListenerFromChannelz(s) {
        L.unregisterChannelzRef(s);
      }
      createHttp2Server(s) {
        let n;
        if (s._isSecure()) {
          let a = s._getConstructorOptions(), o = s._getSecureContextOptions(), l = Object.assign(Object.assign(Object.assign(Object.assign({}, this.commonServerOptions), a), o), {
            enableTrace: this.options["grpc-node.tls_enable_trace"] === 1
          }), c = o !== null;
          this.trace("Initial credentials valid: " + c), n = Y.createSecureServer(l), n.prependListener("connection", d => {
            if (!c) this.trace("Dropped connection from " + JSON.stringify(d.address()) + " due to unloaded credentials"), 
            d.destroy();
          }), n.on("secureConnection", d => {
            d.on("error", h => {
              this.trace("An incoming TLS connection closed with error: " + h.message);
            });
          });
          let u = d => {
            if (d) {
              let h = n;
              try {
                h.setSecureContext(d);
              } catch (m) {
                Je.log(N.LogVerbosity.ERROR, "Failed to set secure context with error " + m.message), 
                d = null;
              }
            }
            c = d !== null, this.trace("Post-update credentials valid: " + c);
          };
          s._addWatcher(u), n.on("close", () => {
            s._removeWatcher(u);
          });
        } else n = Y.createServer(this.commonServerOptions);
        return n.setTimeout(0, Ab), this._setupHandlers(n, s._getInterceptors()), n;
      }
      bindOneAddress(s, n) {
        this.trace("Attempting to bind " + Re.subchannelAddressToString(s));
        let a = this.createHttp2Server(n.credentials);
        return new Promise((o, l) => {
          let c = u => {
            this.trace("Failed to bind " + Re.subchannelAddressToString(s) + " with error " + u.message), 
            o({
              port: "port" in s ? s.port : 1,
              error: u.message
            });
          };
          a.once("error", c), a.listen(s, () => {
            let u = a.address(), d;
            if (typeof u === "string") d = {
              path: u
            }; else d = {
              host: u.address,
              port: u.port
            };
            let h = this.experimentalRegisterListenerToChannelz(d);
            this.listenerChildrenTracker.refChild(h), this.http2Servers.set(a, {
              channelzRef: h,
              sessions: new Set,
              ownsChannelzRef: !0
            }), n.listeningServers.add(a), this.trace("Successfully bound " + Re.subchannelAddressToString(d)), 
            o({
              port: "port" in d ? d.port : 1
            }), a.removeListener("error", c);
          });
        });
      }
      async bindManyPorts(s, n) {
        if (s.length === 0) return {
          count: 0,
          port: 0,
          errors: []
        };
        if (Re.isTcpSubchannelAddress(s[0]) && s[0].port === 0) {
          let a = await this.bindOneAddress(s[0], n);
          if (a.error) {
            let o = await this.bindManyPorts(s.slice(1), n);
            return Object.assign(Object.assign({}, o), {
              errors: [ a.error, ...o.errors ]
            });
          } else {
            let o = s.slice(1).map(u => Re.isTcpSubchannelAddress(u) ? {
              host: u.host,
              port: a.port
            } : u), l = await Promise.all(o.map(u => this.bindOneAddress(u, n))), c = [ a, ...l ];
            return {
              count: c.filter(u => u.error === void 0).length,
              port: a.port,
              errors: c.filter(u => u.error).map(u => u.error)
            };
          }
        } else {
          let a = await Promise.all(s.map(o => this.bindOneAddress(o, n)));
          return {
            count: a.filter(o => o.error === void 0).length,
            port: a[0].port,
            errors: a.filter(o => o.error).map(o => o.error)
          };
        }
      }
      async bindAddressList(s, n) {
        let a = await this.bindManyPorts(s, n);
        if (a.count > 0) {
          if (a.count < s.length) Je.log(N.LogVerbosity.INFO, `WARNING Only ${a.count} addresses added out of total ${s.length} resolved`);
          return a.port;
        } else {
          let o = `No address added out of total ${s.length} resolved`;
          throw Je.log(N.LogVerbosity.ERROR, o), Error(`${o} errors: [${a.errors.join(",")}]`);
        }
      }
      resolvePort(s) {
        return new Promise((n, a) => {
          let o = !1;
          Cn.createResolver(s, (u, d, h, m) => {
            if (o) return !0;
            if (o = !0, !u.ok) return a(Error(u.error.details)), !0;
            let f = [].concat(...u.value.map(y => y.addresses));
            if (f.length === 0) return a(Error(`No addresses resolved for port ${s}`)), !0;
            return n(f), !0;
          }, this.options).updateResolution();
        });
      }
      async bindPort(s, n) {
        let a = await this.resolvePort(s);
        if (n.cancelled) throw this.completeUnbind(n), Error("bindAsync operation cancelled by unbind call");
        let o = await this.bindAddressList(a, n);
        if (n.cancelled) throw this.completeUnbind(n), Error("bindAsync operation cancelled by unbind call");
        return o;
      }
      normalizePort(s) {
        let n = re.parseUri(s);
        if (n === null) throw Error(`Could not parse port "${s}"`);
        let a = Cn.mapUriDefaultScheme(n);
        if (a === null) throw Error(`Could not get a default scheme for port "${s}"`);
        return a;
      }
      bindAsync(s, n, a) {
        if (this.shutdown) throw Error("bindAsync called after shutdown");
        if (typeof s !== "string") throw TypeError("port must be a string");
        if (n === null || !(n instanceof hi.ServerCredentials)) throw TypeError("creds must be a ServerCredentials object");
        if (typeof a !== "function") throw TypeError("callback must be a function");
        this.trace("bindAsync port=" + s);
        let o = this.normalizePort(s), l = (h, m) => {
          process.nextTick(() => a(h, m));
        }, c = this.boundPorts.get(re.uriToString(o));
        if (c) {
          if (!n._equals(c.credentials)) {
            l(Error(`${s} already bound with incompatible credentials`), 0);
            return;
          }
          if (c.cancelled = !1, c.completionPromise) c.completionPromise.then(h => a(null, h), h => a(h, 0)); else l(null, c.portNumber);
          return;
        }
        c = {
          mapKey: re.uriToString(o),
          originalUri: o,
          completionPromise: null,
          cancelled: !1,
          portNumber: 0,
          credentials: n,
          listeningServers: new Set
        };
        let u = re.splitHostPort(o.path), d = this.bindPort(o, c);
        if (c.completionPromise = d, (u === null || u === void 0 ? void 0 : u.port) === 0) d.then(h => {
          let m = {
            scheme: o.scheme,
            authority: o.authority,
            path: re.combineHostPort({
              host: u.host,
              port: h
            })
          };
          c.mapKey = re.uriToString(m), c.completionPromise = null, c.portNumber = h, this.boundPorts.set(c.mapKey, c), 
          a(null, h);
        }, h => {
          a(h, 0);
        }); else this.boundPorts.set(c.mapKey, c), d.then(h => {
          c.completionPromise = null, c.portNumber = h, a(null, h);
        }, h => {
          a(h, 0);
        });
      }
      registerInjectorToChannelz() {
        return L.registerChannelzSocket("injector", () => ({
          localAddress: null,
          remoteAddress: null,
          security: null,
          remoteName: null,
          streamsStarted: 0,
          streamsSucceeded: 0,
          streamsFailed: 0,
          messagesSent: 0,
          messagesReceived: 0,
          keepAlivesSent: 0,
          lastLocalStreamCreatedTimestamp: null,
          lastRemoteStreamCreatedTimestamp: null,
          lastMessageSentTimestamp: null,
          lastMessageReceivedTimestamp: null,
          localFlowControlWindow: null,
          remoteFlowControlWindow: null
        }), this.channelzEnabled);
      }
      experimentalCreateConnectionInjectorWithChannelzRef(s, n, a = !1) {
        if (s === null || !(s instanceof hi.ServerCredentials)) throw TypeError("creds must be a ServerCredentials object");
        if (this.channelzEnabled) this.listenerChildrenTracker.refChild(n);
        let o = this.createHttp2Server(s), l = new Set;
        return this.http2Servers.set(o, {
          channelzRef: n,
          sessions: l,
          ownsChannelzRef: a
        }), {
          injectConnection: c => {
            o.emit("connection", c);
          },
          drain: c => {
            var u, d;
            for (let h of l) this.closeSession(h);
            (d = (u = setTimeout(() => {
              for (let h of l) h.destroy(Y.constants.NGHTTP2_CANCEL);
            }, c)).unref) === null || d === void 0 || d.call(u);
          },
          destroy: () => {
            this.closeServer(o);
            for (let c of l) this.closeSession(c);
          }
        };
      }
      createConnectionInjector(s) {
        if (s === null || !(s instanceof hi.ServerCredentials)) throw TypeError("creds must be a ServerCredentials object");
        let n = this.registerInjectorToChannelz();
        return this.experimentalCreateConnectionInjectorWithChannelzRef(s, n, !0);
      }
      closeServer(s, n) {
        this.trace("Closing server with address " + JSON.stringify(s.address()));
        let a = this.http2Servers.get(s);
        s.close(() => {
          if (a && a.ownsChannelzRef) this.listenerChildrenTracker.unrefChild(a.channelzRef), 
          L.unregisterChannelzRef(a.channelzRef);
          this.http2Servers.delete(s), n === null || n === void 0 || n();
        });
      }
      closeSession(s, n) {
        var a;
        this.trace("Closing session initiated by " + ((a = s.socket) === null || a === void 0 ? void 0 : a.remoteAddress));
        let o = this.sessions.get(s), l = () => {
          if (o) this.sessionChildrenTracker.unrefChild(o.ref), L.unregisterChannelzRef(o.ref);
          n === null || n === void 0 || n();
        };
        if (s.closed) queueMicrotask(l); else s.close(l);
      }
      completeUnbind(s) {
        for (let n of s.listeningServers) {
          let a = this.http2Servers.get(n);
          if (this.closeServer(n, () => {
            s.listeningServers.delete(n);
          }), a) for (let o of a.sessions) this.closeSession(o);
        }
        this.boundPorts.delete(s.mapKey);
      }
      unbind(s) {
        this.trace("unbind port=" + s);
        let n = this.normalizePort(s), a = re.splitHostPort(n.path);
        if ((a === null || a === void 0 ? void 0 : a.port) === 0) throw Error("Cannot unbind port 0");
        let o = this.boundPorts.get(re.uriToString(n));
        if (o) if (this.trace("unbinding " + o.mapKey + " originally bound as " + re.uriToString(o.originalUri)), 
        o.completionPromise) o.cancelled = !0; else this.completeUnbind(o);
      }
      drain(s, n) {
        var a, o;
        this.trace("drain port=" + s + " graceTimeMs=" + n);
        let l = this.normalizePort(s), c = re.splitHostPort(l.path);
        if ((c === null || c === void 0 ? void 0 : c.port) === 0) throw Error("Cannot drain port 0");
        let u = this.boundPorts.get(re.uriToString(l));
        if (!u) return;
        let d = new Set;
        for (let h of u.listeningServers) {
          let m = this.http2Servers.get(h);
          if (m) for (let f of m.sessions) d.add(f), this.closeSession(f, () => {
            d.delete(f);
          });
        }
        (o = (a = setTimeout(() => {
          for (let h of d) h.destroy(Y.constants.NGHTTP2_CANCEL);
        }, n)).unref) === null || o === void 0 || o.call(a);
      }
      forceShutdown() {
        for (let s of this.boundPorts.values()) s.cancelled = !0;
        this.boundPorts.clear();
        for (let s of this.http2Servers.keys()) this.closeServer(s);
        this.sessions.forEach((s, n) => {
          this.closeSession(n), n.destroy(Y.constants.NGHTTP2_CANCEL);
        }), this.sessions.clear(), L.unregisterChannelzRef(this.channelzRef), this.shutdown = !0;
      }
      register(s, n, a, o, l) {
        if (this.handlers.has(s)) return !1;
        return this.handlers.set(s, {
          func: n,
          serialize: a,
          deserialize: o,
          type: l,
          path: s
        }), !0;
      }
      unregister(s) {
        return this.handlers.delete(s);
      }
      start() {
        if (this.http2Servers.size === 0 || [ ...this.http2Servers.keys() ].every(s => !s.listening)) throw Error("server must be bound in order to start");
        if (this.started === !0) throw Error("server is already started");
        this.started = !0;
      }
      tryShutdown(s) {
        var n;
        let a = c => {
          L.unregisterChannelzRef(this.channelzRef), s(c);
        }, o = 0;
        function l() {
          if (o--, o === 0) a();
        }
        this.shutdown = !0;
        for (let [c, u] of this.http2Servers.entries()) {
          o++;
          let d = u.channelzRef.name;
          this.trace("Waiting for server " + d + " to close"), this.closeServer(c, () => {
            this.trace("Server " + d + " finished closing"), l();
          });
          for (let h of u.sessions.keys()) {
            o++;
            let m = (n = h.socket) === null || n === void 0 ? void 0 : n.remoteAddress;
            this.trace("Waiting for session " + m + " to close"), this.closeSession(h, () => {
              this.trace("Session " + m + " finished closing"), l();
            });
          }
        }
        if (o === 0) a();
      }
      addHttp2Port() {
        throw Error("Not yet implemented");
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      _verifyContentType(s, n) {
        let a = n[Y.constants.HTTP2_HEADER_CONTENT_TYPE];
        if (typeof a !== "string" || !a.startsWith("application/grpc")) return s.respond({
          [Y.constants.HTTP2_HEADER_STATUS]: Y.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE
        }, {
          endStream: !0
        }), !1;
        return !0;
      }
      _retrieveHandler(s) {
        um("Received call to method " + s + " at address " + this.serverAddressString);
        let n = this.handlers.get(s);
        if (n === void 0) return um("No handler registered for method " + s + ". Sending UNIMPLEMENTED status."), 
        null;
        return n;
      }
      _respondWithError(s, n, a = null) {
        var o, l;
        let c = Object.assign({
          "grpc-status": (o = s.code) !== null && o !== void 0 ? o : N.Status.INTERNAL,
          "grpc-message": s.details,
          [Y.constants.HTTP2_HEADER_STATUS]: Y.constants.HTTP_STATUS_OK,
          [Y.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto"
        }, (l = s.metadata) === null || l === void 0 ? void 0 : l.toHttp2Headers());
        n.respond(c, {
          endStream: !0
        }), this.callTracker.addCallFailed(), a === null || a === void 0 || a.streamTracker.addCallFailed();
      }
      _channelzHandler(s, n, a) {
        n.once("error", h => {}), this.onStreamOpened(n);
        let o = this.sessions.get(n.session);
        if (this.callTracker.addCallStarted(), o === null || o === void 0 || o.streamTracker.addCallStarted(), 
        !this._verifyContentType(n, a)) {
          this.callTracker.addCallFailed(), o === null || o === void 0 || o.streamTracker.addCallFailed();
          return;
        }
        let l = a[lm], c = this._retrieveHandler(l);
        if (!c) {
          this._respondWithError(jo(l), n, o);
          return;
        }
        let u = {
          addMessageSent: () => {
            if (o) o.messagesSent += 1, o.lastMessageSentTimestamp = new Date;
          },
          addMessageReceived: () => {
            if (o) o.messagesReceived += 1, o.lastMessageReceivedTimestamp = new Date;
          },
          onCallEnd: h => {
            if (h.code === N.Status.OK) this.callTracker.addCallSucceeded(); else this.callTracker.addCallFailed();
          },
          onStreamEnd: h => {
            if (o) if (h) o.streamTracker.addCallSucceeded(); else o.streamTracker.addCallFailed();
          }
        }, d = En.getServerInterceptingCall([ ...s, ...this.interceptors ], n, a, u, c, this.options);
        if (!this._runHandlerForCall(d, c)) this.callTracker.addCallFailed(), o === null || o === void 0 || o.streamTracker.addCallFailed(), 
        d.sendStatus({
          code: N.Status.INTERNAL,
          details: `Unknown handler type: ${c.type}`
        });
      }
      _streamHandler(s, n, a) {
        if (n.once("error", u => {}), this.onStreamOpened(n), this._verifyContentType(n, a) !== !0) return;
        let o = a[lm], l = this._retrieveHandler(o);
        if (!l) {
          this._respondWithError(jo(o), n, null);
          return;
        }
        let c = En.getServerInterceptingCall([ ...s, ...this.interceptors ], n, a, null, l, this.options);
        if (!this._runHandlerForCall(c, l)) c.sendStatus({
          code: N.Status.INTERNAL,
          details: `Unknown handler type: ${l.type}`
        });
      }
      _runHandlerForCall(s, n) {
        let {type: a} = n;
        if (a === "unary") Ib(s, n); else if (a === "clientStream") xb(s, n); else if (a === "serverStream") kb(s, n); else if (a === "bidi") Db(s, n); else return !1;
        return !0;
      }
      _setupHandlers(s, n) {
        if (s === null) return;
        let a = s.address(), o = "null";
        if (a) if (typeof a === "string") o = a; else o = a.address + ":" + a.port;
        this.serverAddressString = o;
        let l = this.channelzEnabled ? this._channelzHandler : this._streamHandler, c = this.channelzEnabled ? this._channelzSessionHandler(s) : this._sessionHandler(s);
        s.on("stream", l.bind(this, n)), s.on("session", c);
      }
      _sessionHandler(s) {
        return n => {
          var a, o;
          (a = this.http2Servers.get(s)) === null || a === void 0 || a.sessions.add(n);
          let l = null, c = null, u = null, d = !1, h = this.enableIdleTimeout(n);
          if (this.maxConnectionAgeMs !== di) {
            let T = this.maxConnectionAgeMs / 10, P = Math.random() * T * 2 - T;
            l = setTimeout(() => {
              var te, v;
              d = !0, this.trace("Connection dropped by max connection age: " + ((te = n.socket) === null || te === void 0 ? void 0 : te.remoteAddress));
              try {
                n.goaway(Y.constants.NGHTTP2_NO_ERROR, 2147483647, cm);
              } catch (U) {
                n.destroy();
                return;
              }
              if (n.close(), this.maxConnectionAgeGraceMs !== di) c = setTimeout(() => {
                n.destroy();
              }, this.maxConnectionAgeGraceMs), (v = c.unref) === null || v === void 0 || v.call(c);
            }, this.maxConnectionAgeMs + P), (o = l.unref) === null || o === void 0 || o.call(l);
          }
          let m = () => {
            if (u) clearTimeout(u), u = null;
          }, f = () => !n.destroyed && this.keepaliveTimeMs < Wo && this.keepaliveTimeMs > 0, y, E = () => {
            var T;
            if (!f()) return;
            this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"), 
            u = setTimeout(() => {
              m(), y();
            }, this.keepaliveTimeMs), (T = u.unref) === null || T === void 0 || T.call(u);
          };
          y = () => {
            var T;
            if (!f()) return;
            this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
            let P = "";
            try {
              if (!n.ping((v, U, w) => {
                if (m(), v) this.keepaliveTrace("Ping failed with error: " + v.message), d = !0, 
                n.destroy(); else this.keepaliveTrace("Received ping response"), E();
              })) P = "Ping returned false";
            } catch (te) {
              P = (te instanceof Error ? te.message : "") || "Unknown error";
            }
            if (P) {
              this.keepaliveTrace("Ping send failed: " + P), this.trace("Connection dropped due to ping send error: " + P), 
              d = !0, n.destroy();
              return;
            }
            u = setTimeout(() => {
              m(), this.keepaliveTrace("Ping timeout passed without response"), this.trace("Connection dropped by keepalive timeout"), 
              d = !0, n.destroy();
            }, this.keepaliveTimeoutMs), (T = u.unref) === null || T === void 0 || T.call(u);
          }, E(), n.on("close", () => {
            var T, P;
            if (!d) this.trace(`Connection dropped by client ${(T = n.socket) === null || T === void 0 ? void 0 : T.remoteAddress}`);
            if (l) clearTimeout(l);
            if (c) clearTimeout(c);
            if (m(), h !== null) clearTimeout(h.timeout), this.sessionIdleTimeouts.delete(n);
            (P = this.http2Servers.get(s)) === null || P === void 0 || P.sessions.delete(n);
          });
        };
      }
      _channelzSessionHandler(s) {
        return n => {
          var a, o, l, c;
          let u = L.registerChannelzSocket((o = (a = n.socket) === null || a === void 0 ? void 0 : a.remoteAddress) !== null && o !== void 0 ? o : "unknown", this.getChannelzSessionInfo.bind(this, n), this.channelzEnabled), d = {
            ref: u,
            streamTracker: new L.ChannelzCallTracker,
            messagesSent: 0,
            messagesReceived: 0,
            keepAlivesSent: 0,
            lastMessageSentTimestamp: null,
            lastMessageReceivedTimestamp: null
          };
          (l = this.http2Servers.get(s)) === null || l === void 0 || l.sessions.add(n), this.sessions.set(n, d);
          let h = `${n.socket.remoteAddress}:${n.socket.remotePort}`;
          this.channelzTrace.addTrace("CT_INFO", "Connection established by client " + h), 
          this.trace("Connection established by client " + h), this.sessionChildrenTracker.refChild(u);
          let m = null, f = null, y = null, E = !1, T = this.enableIdleTimeout(n);
          if (this.maxConnectionAgeMs !== di) {
            let w = this.maxConnectionAgeMs / 10, W = Math.random() * w * 2 - w;
            m = setTimeout(() => {
              var X;
              E = !0, this.channelzTrace.addTrace("CT_INFO", "Connection dropped by max connection age from " + h);
              try {
                n.goaway(Y.constants.NGHTTP2_NO_ERROR, 2147483647, cm);
              } catch (D) {
                n.destroy();
                return;
              }
              if (n.close(), this.maxConnectionAgeGraceMs !== di) f = setTimeout(() => {
                n.destroy();
              }, this.maxConnectionAgeGraceMs), (X = f.unref) === null || X === void 0 || X.call(f);
            }, this.maxConnectionAgeMs + W), (c = m.unref) === null || c === void 0 || c.call(m);
          }
          let P = () => {
            if (y) clearTimeout(y), y = null;
          }, te = () => !n.destroyed && this.keepaliveTimeMs < Wo && this.keepaliveTimeMs > 0, v, U = () => {
            var w;
            if (!te()) return;
            this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"), 
            y = setTimeout(() => {
              P(), v();
            }, this.keepaliveTimeMs), (w = y.unref) === null || w === void 0 || w.call(y);
          };
          v = () => {
            var w;
            if (!te()) return;
            this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
            let W = "";
            try {
              if (!n.ping((D, le, Ue) => {
                if (P(), D) this.keepaliveTrace("Ping failed with error: " + D.message), this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to error of a ping frame " + D.message + " return in " + le), 
                E = !0, n.destroy(); else this.keepaliveTrace("Received ping response"), U();
              })) W = "Ping returned false";
            } catch (X) {
              W = (X instanceof Error ? X.message : "") || "Unknown error";
            }
            if (W) {
              this.keepaliveTrace("Ping send failed: " + W), this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to ping send error: " + W), 
              E = !0, n.destroy();
              return;
            }
            d.keepAlivesSent += 1, y = setTimeout(() => {
              P(), this.keepaliveTrace("Ping timeout passed without response"), this.channelzTrace.addTrace("CT_INFO", "Connection dropped by keepalive timeout from " + h), 
              E = !0, n.destroy();
            }, this.keepaliveTimeoutMs), (w = y.unref) === null || w === void 0 || w.call(y);
          }, U(), n.on("close", () => {
            var w;
            if (!E) this.channelzTrace.addTrace("CT_INFO", "Connection dropped by client " + h);
            if (this.sessionChildrenTracker.unrefChild(u), L.unregisterChannelzRef(u), m) clearTimeout(m);
            if (f) clearTimeout(f);
            if (P(), T !== null) clearTimeout(T.timeout), this.sessionIdleTimeouts.delete(n);
            (w = this.http2Servers.get(s)) === null || w === void 0 || w.sessions.delete(n), 
            this.sessions.delete(n);
          });
        };
      }
      enableIdleTimeout(s) {
        var n, a;
        if (this.sessionIdleTimeout >= om) return null;
        let o = {
          activeStreams: 0,
          lastIdle: Date.now(),
          onClose: this.onStreamClose.bind(this, s),
          timeout: setTimeout(this.onIdleTimeout, this.sessionIdleTimeout, this, s)
        };
        (a = (n = o.timeout).unref) === null || a === void 0 || a.call(n), this.sessionIdleTimeouts.set(s, o);
        let {socket: l} = s;
        return this.trace("Enable idle timeout for " + l.remoteAddress + ":" + l.remotePort), 
        o;
      }
      onIdleTimeout(s, n) {
        let {socket: a} = n, o = s.sessionIdleTimeouts.get(n);
        if (o !== void 0 && o.activeStreams === 0) if (Date.now() - o.lastIdle >= s.sessionIdleTimeout) s.trace("Session idle timeout triggered for " + (a === null || a === void 0 ? void 0 : a.remoteAddress) + ":" + (a === null || a === void 0 ? void 0 : a.remotePort) + " last idle at " + o.lastIdle), 
        s.closeSession(n); else o.timeout.refresh();
      }
      onStreamOpened(s) {
        let n = s.session, a = this.sessionIdleTimeouts.get(n);
        if (a) a.activeStreams += 1, s.once("close", a.onClose);
      }
      onStreamClose(s) {
        var n, a;
        let o = this.sessionIdleTimeouts.get(s);
        if (o) {
          if (o.activeStreams -= 1, o.activeStreams === 0) o.lastIdle = Date.now(), o.timeout.refresh(), 
          this.trace("Session onStreamClose" + ((n = s.socket) === null || n === void 0 ? void 0 : n.remoteAddress) + ":" + ((a = s.socket) === null || a === void 0 ? void 0 : a.remotePort) + " at " + o.lastIdle);
        }
      }
    }, (() => {
      let i = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
      if (r = [ Pb("Calling start() is no longer necessary. It can be safely omitted.") ], 
      bb(e, null, r, {
        kind: "method",
        name: "start",
        static: !1,
        private: !1,
        access: {
          has: s => "start" in s,
          get: s => s.start
        },
        metadata: i
      }, null, t), i) Object.defineProperty(e, Symbol.metadata, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
      });
    })(), e;
  })();
  dr.Server = Mb;
  async function Ib(e, t) {
    let r;
    function i(a, o, l, c) {
      if (a) {
        e.sendStatus(Xe.serverErrorToStatus(a, l));
        return;
      }
      e.sendMessage(o, () => {
        e.sendStatus({
          code: N.Status.OK,
          details: "OK",
          metadata: l !== null && l !== void 0 ? l : null
        });
      });
    }
    let s, n = null;
    e.start({
      onReceiveMetadata(a) {
        s = a, e.startRead();
      },
      onReceiveMessage(a) {
        if (n) {
          e.sendStatus({
            code: N.Status.UNIMPLEMENTED,
            details: `Received a second request message for server streaming method ${t.path}`,
            metadata: null
          });
          return;
        }
        n = a, e.startRead();
      },
      onReceiveHalfClose() {
        if (!n) {
          e.sendStatus({
            code: N.Status.UNIMPLEMENTED,
            details: `Received no request message for server streaming method ${t.path}`,
            metadata: null
          });
          return;
        }
        r = new Xe.ServerWritableStreamImpl(t.path, e, s, n);
        try {
          t.func(r, i);
        } catch (a) {
          e.sendStatus({
            code: N.Status.UNKNOWN,
            details: `Server method handler threw error ${a.message}`,
            metadata: null
          });
        }
      },
      onCancel() {
        if (r) r.cancelled = !0, r.emit("cancelled", "cancelled");
      }
    });
  }
  function xb(e, t) {
    let r;
    function i(s, n, a, o) {
      if (s) {
        e.sendStatus(Xe.serverErrorToStatus(s, a));
        return;
      }
      e.sendMessage(n, () => {
        e.sendStatus({
          code: N.Status.OK,
          details: "OK",
          metadata: a !== null && a !== void 0 ? a : null
        });
      });
    }
    e.start({
      onReceiveMetadata(s) {
        r = new Xe.ServerDuplexStreamImpl(t.path, e, s);
        try {
          t.func(r, i);
        } catch (n) {
          e.sendStatus({
            code: N.Status.UNKNOWN,
            details: `Server method handler threw error ${n.message}`,
            metadata: null
          });
        }
      },
      onReceiveMessage(s) {
        r.push(s);
      },
      onReceiveHalfClose() {
        r.push(null);
      },
      onCancel() {
        if (r) r.cancelled = !0, r.emit("cancelled", "cancelled"), r.destroy();
      }
    });
  }
  function kb(e, t) {
    let r, i, s = null;
    e.start({
      onReceiveMetadata(n) {
        i = n, e.startRead();
      },
      onReceiveMessage(n) {
        if (s) {
          e.sendStatus({
            code: N.Status.UNIMPLEMENTED,
            details: `Received a second request message for server streaming method ${t.path}`,
            metadata: null
          });
          return;
        }
        s = n, e.startRead();
      },
      onReceiveHalfClose() {
        if (!s) {
          e.sendStatus({
            code: N.Status.UNIMPLEMENTED,
            details: `Received no request message for server streaming method ${t.path}`,
            metadata: null
          });
          return;
        }
        r = new Xe.ServerWritableStreamImpl(t.path, e, i, s);
        try {
          t.func(r);
        } catch (n) {
          e.sendStatus({
            code: N.Status.UNKNOWN,
            details: `Server method handler threw error ${n.message}`,
            metadata: null
          });
        }
      },
      onCancel() {
        if (r) r.cancelled = !0, r.emit("cancelled", "cancelled"), r.destroy();
      }
    });
  }
  function Db(e, t) {
    let r;
    e.start({
      onReceiveMetadata(i) {
        r = new Xe.ServerDuplexStreamImpl(t.path, e, i);
        try {
          t.func(r);
        } catch (s) {
          e.sendStatus({
            code: N.Status.UNKNOWN,
            details: `Server method handler threw error ${s.message}`,
            metadata: null
          });
        }
      },
      onReceiveMessage(i) {
        r.push(i);
      },
      onReceiveHalfClose() {
        r.push(null);
      },
      onCancel() {
        if (r) r.cancelled = !0, r.emit("cancelled", "cancelled"), r.destroy();
      }
    });
  }
});

var mm = C(function(pm) {
  Object.defineProperty(pm, "__esModule", {
    value: !0
  });
  pm.StatusBuilder = void 0;
  class fm {
    constructor() {
      this.code = null, this.details = null, this.metadata = null;
    }
    withCode(e) {
      return this.code = e, this;
    }
    withDetails(e) {
      return this.details = e, this;
    }
    withMetadata(e) {
      return this.metadata = e, this;
    }
    build() {
      let e = {};
      if (this.code !== null) e.code = this.code;
      if (this.details !== null) e.details = this.details;
      if (this.metadata !== null) e.metadata = this.metadata;
      return e;
    }
  }
  pm.StatusBuilder = fm;
});

var ji = C(function(Rm) {
  Object.defineProperty(Rm, "__esModule", {
    value: !0
  });
  Rm.LeafLoadBalancer = Rm.PickFirstLoadBalancer = Rm.PickFirstLoadBalancingConfig = void 0;
  Rm.shuffled = Cm;
  Rm.setup = Bb;
  var fi = Gt(), M = Ae(), be = kt(), Tn = Pe(), vm = K(), ym = k(), Rn = Pe(), bn = Ne("net"), _m = vr(), Lb = "pick_first";
  function Hi(e) {
    vm.trace(ym.LogVerbosity.DEBUG, Lb, e);
  }
  var Wi = "pick_first", Fb = 250;
  class pi {
    constructor(e) {
      this.shuffleAddressList = e;
    }
    getLoadBalancerName() {
      return Wi;
    }
    toJsonObject() {
      return {
        [Wi]: {
          shuffleAddressList: this.shuffleAddressList
        }
      };
    }
    getShuffleAddressList() {
      return this.shuffleAddressList;
    }
    static createFromJson(e) {
      if ("shuffleAddressList" in e && typeof e.shuffleAddressList !== "boolean") throw Error("pick_first config field shuffleAddressList must be a boolean if provided");
      return new pi(e.shuffleAddressList === !0);
    }
  }
  Rm.PickFirstLoadBalancingConfig = pi;
  class Sm {
    constructor(e) {
      this.subchannel = e;
    }
    pick(e) {
      return {
        pickResultType: be.PickResultType.COMPLETE,
        subchannel: this.subchannel,
        status: null,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  function Cm(e) {
    let t = e.slice();
    for (let r = t.length - 1; r > 1; r--) {
      let i = Math.floor(Math.random() * (r + 1)), s = t[r];
      t[r] = t[i], t[i] = s;
    }
    return t;
  }
  function qb(e) {
    if (e.length === 0) return [];
    let t = [], r = [], i = [], s = Rn.isTcpSubchannelAddress(e[0]) && bn.isIPv6(e[0].host);
    for (let o of e) if (Rn.isTcpSubchannelAddress(o) && bn.isIPv6(o.host)) r.push(o); else i.push(o);
    let n = s ? r : i, a = s ? i : r;
    for (let o = 0; o < Math.max(n.length, a.length); o++) {
      if (o < n.length) t.push(n[o]);
      if (o < a.length) t.push(a[o]);
    }
    return t;
  }
  var Em = "grpc-node.internal.pick-first.report_health_status";
  class On {
    constructor(e) {
      this.channelControlHelper = e, this.children = [], this.currentState = M.ConnectivityState.IDLE, 
      this.currentSubchannelIndex = 0, this.currentPick = null, this.subchannelStateListener = (t, r, i, s, n) => {
        this.onSubchannelStateUpdate(t, r, i, n);
      }, this.pickedSubchannelHealthListener = () => this.calculateAndReportNewState(), 
      this.stickyTransientFailureMode = !1, this.reportHealthStatus = !1, this.lastError = null, 
      this.latestAddressList = null, this.latestOptions = {}, this.latestResolutionNote = "", 
      this.connectionDelayTimeout = setTimeout(() => {}, 0), clearTimeout(this.connectionDelayTimeout);
    }
    allChildrenHaveReportedTF() {
      return this.children.every(e => e.hasReportedTransientFailure);
    }
    resetChildrenReportedTF() {
      this.children.every(e => e.hasReportedTransientFailure = !1);
    }
    calculateAndReportNewState() {
      var e;
      if (this.currentPick) if (this.reportHealthStatus && !this.currentPick.isHealthy()) {
        let t = `Picked subchannel ${this.currentPick.getAddress()} is unhealthy`;
        this.updateState(M.ConnectivityState.TRANSIENT_FAILURE, new be.UnavailablePicker({
          details: t
        }), t);
      } else this.updateState(M.ConnectivityState.READY, new Sm(this.currentPick), null); else if (((e = this.latestAddressList) === null || e === void 0 ? void 0 : e.length) === 0) {
        let t = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
        this.updateState(M.ConnectivityState.TRANSIENT_FAILURE, new be.UnavailablePicker({
          details: t
        }), t);
      } else if (this.children.length === 0) this.updateState(M.ConnectivityState.IDLE, new be.QueuePicker(this), null); else if (this.stickyTransientFailureMode) {
        let t = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
        this.updateState(M.ConnectivityState.TRANSIENT_FAILURE, new be.UnavailablePicker({
          details: t
        }), t);
      } else this.updateState(M.ConnectivityState.CONNECTING, new be.QueuePicker(this), null);
    }
    requestReresolution() {
      this.channelControlHelper.requestReresolution();
    }
    maybeEnterStickyTransientFailureMode() {
      if (!this.allChildrenHaveReportedTF()) return;
      if (this.requestReresolution(), this.resetChildrenReportedTF(), this.stickyTransientFailureMode) {
        this.calculateAndReportNewState();
        return;
      }
      this.stickyTransientFailureMode = !0;
      for (let {subchannel: e} of this.children) e.startConnecting();
      this.calculateAndReportNewState();
    }
    removeCurrentPick() {
      if (this.currentPick !== null) this.currentPick.removeConnectivityStateListener(this.subchannelStateListener), 
      this.channelControlHelper.removeChannelzChild(this.currentPick.getChannelzRef()), 
      this.currentPick.removeHealthStateWatcher(this.pickedSubchannelHealthListener), 
      this.currentPick.unref(), this.currentPick = null;
    }
    onSubchannelStateUpdate(e, t, r, i) {
      var s;
      if ((s = this.currentPick) === null || s === void 0 ? void 0 : s.realSubchannelEquals(e)) {
        if (r !== M.ConnectivityState.READY) this.removeCurrentPick(), this.calculateAndReportNewState();
        return;
      }
      for (let [n, a] of this.children.entries()) if (e.realSubchannelEquals(a.subchannel)) {
        if (r === M.ConnectivityState.READY) this.pickSubchannel(a.subchannel);
        if (r === M.ConnectivityState.TRANSIENT_FAILURE) {
          if (a.hasReportedTransientFailure = !0, i) this.lastError = i;
          if (this.maybeEnterStickyTransientFailureMode(), n === this.currentSubchannelIndex) this.startNextSubchannelConnecting(n + 1);
        }
        a.subchannel.startConnecting();
        return;
      }
    }
    startNextSubchannelConnecting(e) {
      clearTimeout(this.connectionDelayTimeout);
      for (let [t, r] of this.children.entries()) if (t >= e) {
        let i = r.subchannel.getConnectivityState();
        if (i === M.ConnectivityState.IDLE || i === M.ConnectivityState.CONNECTING) {
          this.startConnecting(t);
          return;
        }
      }
      this.maybeEnterStickyTransientFailureMode();
    }
    startConnecting(e) {
      var t, r;
      if (clearTimeout(this.connectionDelayTimeout), this.currentSubchannelIndex = e, 
      this.children[e].subchannel.getConnectivityState() === M.ConnectivityState.IDLE) Hi("Start connecting to subchannel with address " + this.children[e].subchannel.getAddress()), 
      process.nextTick(() => {
        var i;
        (i = this.children[e]) === null || i === void 0 || i.subchannel.startConnecting();
      });
      this.connectionDelayTimeout = setTimeout(() => {
        this.startNextSubchannelConnecting(e + 1);
      }, Fb), (r = (t = this.connectionDelayTimeout).unref) === null || r === void 0 || r.call(t);
    }
    pickSubchannel(e) {
      Hi("Pick subchannel with address " + e.getAddress()), this.stickyTransientFailureMode = !1, 
      e.ref(), this.channelControlHelper.addChannelzChild(e.getChannelzRef()), this.removeCurrentPick(), 
      this.resetSubchannelList(), e.addConnectivityStateListener(this.subchannelStateListener), 
      e.addHealthStateWatcher(this.pickedSubchannelHealthListener), this.currentPick = e, 
      clearTimeout(this.connectionDelayTimeout), this.calculateAndReportNewState();
    }
    updateState(e, t, r) {
      Hi(M.ConnectivityState[this.currentState] + " -> " + M.ConnectivityState[e]), this.currentState = e, 
      this.channelControlHelper.updateState(e, t, r);
    }
    resetSubchannelList() {
      for (let e of this.children) e.subchannel.removeConnectivityStateListener(this.subchannelStateListener), 
      e.subchannel.unref(), this.channelControlHelper.removeChannelzChild(e.subchannel.getChannelzRef());
      this.currentSubchannelIndex = 0, this.children = [];
    }
    connectToAddressList(e, t) {
      Hi("connectToAddressList([" + e.map(i => Tn.subchannelAddressToString(i)) + "])");
      let r = e.map(i => ({
        subchannel: this.channelControlHelper.createSubchannel(i, t),
        hasReportedTransientFailure: !1
      }));
      for (let {subchannel: i} of r) if (i.getConnectivityState() === M.ConnectivityState.READY) {
        this.pickSubchannel(i);
        return;
      }
      for (let {subchannel: i} of r) i.ref(), this.channelControlHelper.addChannelzChild(i.getChannelzRef());
      this.resetSubchannelList(), this.children = r;
      for (let {subchannel: i} of this.children) i.addConnectivityStateListener(this.subchannelStateListener);
      for (let i of this.children) if (i.subchannel.getConnectivityState() === M.ConnectivityState.TRANSIENT_FAILURE) i.hasReportedTransientFailure = !0;
      this.startNextSubchannelConnecting(0), this.calculateAndReportNewState();
    }
    updateAddressList(e, t, r, i) {
      if (!(t instanceof pi)) return !1;
      if (!e.ok) {
        if (this.children.length === 0 && this.currentPick === null) this.channelControlHelper.updateState(M.ConnectivityState.TRANSIENT_FAILURE, new be.UnavailablePicker(e.error), e.error.details);
        return !0;
      }
      let s = e.value;
      if (this.reportHealthStatus = r[Em], t.getShuffleAddressList()) s = Cm(s);
      let n = [].concat(...s.map(o => o.addresses));
      Hi("updateAddressList([" + n.map(o => Tn.subchannelAddressToString(o)) + "])");
      let a = qb(n);
      if (this.latestAddressList = a, this.latestOptions = r, this.connectToAddressList(a, r), 
      this.latestResolutionNote = i, n.length > 0) return !0; else return this.lastError = "No addresses resolved", 
      !1;
    }
    exitIdle() {
      if (this.currentState === M.ConnectivityState.IDLE && this.latestAddressList) this.connectToAddressList(this.latestAddressList, this.latestOptions);
    }
    resetBackoff() {}
    destroy() {
      this.resetSubchannelList(), this.removeCurrentPick();
    }
    getTypeName() {
      return Wi;
    }
  }
  Rm.PickFirstLoadBalancer = On;
  var Ub = new pi(!1);
  class Tm {
    constructor(e, t, r, i) {
      this.endpoint = e, this.options = r, this.resolutionNote = i, this.latestState = M.ConnectivityState.IDLE;
      let s = fi.createChildChannelControlHelper(t, {
        updateState: (n, a, o) => {
          this.latestState = n, this.latestPicker = a, t.updateState(n, a, o);
        }
      });
      this.pickFirstBalancer = new On(s), this.latestPicker = new be.QueuePicker(this.pickFirstBalancer);
    }
    startConnecting() {
      this.pickFirstBalancer.updateAddressList(_m.statusOrFromValue([ this.endpoint ]), Ub, Object.assign(Object.assign({}, this.options), {
        [Em]: !0
      }), this.resolutionNote);
    }
    updateEndpoint(e, t) {
      if (this.options = t, this.endpoint = e, this.latestState !== M.ConnectivityState.IDLE) this.startConnecting();
    }
    getConnectivityState() {
      return this.latestState;
    }
    getPicker() {
      return this.latestPicker;
    }
    getEndpoint() {
      return this.endpoint;
    }
    exitIdle() {
      this.pickFirstBalancer.exitIdle();
    }
    destroy() {
      this.pickFirstBalancer.destroy();
    }
  }
  Rm.LeafLoadBalancer = Tm;
  function Bb() {
    fi.registerLoadBalancerType(Wi, On, pi), fi.registerDefaultLoadBalancerType(Wi);
  }
});

var xm = C(function(Mm) {
  Object.defineProperty(Mm, "__esModule", {
    value: !0
  });
  Mm.FileWatcherCertificateProvider = void 0;
  var Om = Ne("fs"), wm = K(), Am = k(), Pm = Ne("util"), Gb = "certificate_provider";
  function wn(e) {
    wm.trace(Am.LogVerbosity.DEBUG, Gb, e);
  }
  var Go = Pm.promisify(Om.readFile);
  class Nm {
    constructor(e) {
      if (this.config = e, this.refreshTimer = null, this.fileResultPromise = null, this.latestCaUpdate = void 0, 
      this.caListeners = new Set, this.latestIdentityUpdate = void 0, this.identityListeners = new Set, 
      this.lastUpdateTime = null, e.certificateFile === void 0 !== (e.privateKeyFile === void 0)) throw Error("certificateFile and privateKeyFile must be set or unset together");
      if (e.certificateFile === void 0 && e.caCertificateFile === void 0) throw Error("At least one of certificateFile and caCertificateFile must be set");
      wn("File watcher constructed with config " + JSON.stringify(e));
    }
    updateCertificates() {
      if (this.fileResultPromise) return;
      this.fileResultPromise = Promise.allSettled([ this.config.certificateFile ? Go(this.config.certificateFile) : Promise.reject(), this.config.privateKeyFile ? Go(this.config.privateKeyFile) : Promise.reject(), this.config.caCertificateFile ? Go(this.config.caCertificateFile) : Promise.reject() ]), 
      this.fileResultPromise.then(([e, t, r]) => {
        if (!this.refreshTimer) return;
        if (wn("File watcher read certificates certificate " + e.status + ", privateKey " + t.status + ", CA certificate " + r.status), 
        this.lastUpdateTime = new Date, this.fileResultPromise = null, e.status === "fulfilled" && t.status === "fulfilled") this.latestIdentityUpdate = {
          certificate: e.value,
          privateKey: t.value
        }; else this.latestIdentityUpdate = null;
        if (r.status === "fulfilled") this.latestCaUpdate = {
          caCertificate: r.value
        }; else this.latestCaUpdate = null;
        for (let i of this.identityListeners) i(this.latestIdentityUpdate);
        for (let i of this.caListeners) i(this.latestCaUpdate);
      }), wn("File watcher initiated certificate update");
    }
    maybeStartWatchingFiles() {
      if (!this.refreshTimer) {
        let e = this.lastUpdateTime ? (new Date).getTime() - this.lastUpdateTime.getTime() : 1 / 0;
        if (e > this.config.refreshIntervalMs) this.updateCertificates();
        if (e > this.config.refreshIntervalMs * 2) this.latestCaUpdate = void 0, this.latestIdentityUpdate = void 0;
        this.refreshTimer = setInterval(() => this.updateCertificates(), this.config.refreshIntervalMs), 
        wn("File watcher started watching");
      }
    }
    maybeStopWatchingFiles() {
      if (this.caListeners.size === 0 && this.identityListeners.size === 0) {
        if (this.fileResultPromise = null, this.refreshTimer) clearInterval(this.refreshTimer), 
        this.refreshTimer = null;
      }
    }
    addCaCertificateListener(e) {
      if (this.caListeners.add(e), this.maybeStartWatchingFiles(), this.latestCaUpdate !== void 0) process.nextTick(e, this.latestCaUpdate);
    }
    removeCaCertificateListener(e) {
      this.caListeners.delete(e), this.maybeStopWatchingFiles();
    }
    addIdentityCertificateListener(e) {
      if (this.identityListeners.add(e), this.maybeStartWatchingFiles(), this.latestIdentityUpdate !== void 0) process.nextTick(e, this.latestIdentityUpdate);
    }
    removeIdentityCertificateListener(e) {
      this.identityListeners.delete(e), this.maybeStopWatchingFiles();
    }
  }
  Mm.FileWatcherCertificateProvider = Nm;
});

var Yo = C(function(F) {
  Object.defineProperty(F, "__esModule", {
    value: !0
  });
  F.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = F.createCertificateProviderChannelCredentials = F.FileWatcherCertificateProvider = F.createCertificateProviderServerCredentials = F.createServerCredentialsWithInterceptors = F.BaseSubchannelWrapper = F.registerAdminService = F.FilterStackFactory = F.BaseFilter = F.statusOrFromError = F.statusOrFromValue = F.PickResultType = F.QueuePicker = F.UnavailablePicker = F.ChildLoadBalancerHandler = F.EndpointMap = F.endpointHasAddress = F.endpointToString = F.subchannelAddressToString = F.LeafLoadBalancer = F.isLoadBalancerNameRegistered = F.parseLoadBalancingConfig = F.selectLbConfigFromList = F.registerLoadBalancerType = F.createChildChannelControlHelper = F.BackoffTimeout = F.parseDuration = F.durationToMs = F.splitHostPort = F.uriToString = F.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = F.createResolver = F.registerResolver = F.log = F.trace = void 0;
  var km = K();
  Object.defineProperty(F, "trace", {
    enumerable: !0,
    get: function() {
      return km.trace;
    }
  });
  Object.defineProperty(F, "log", {
    enumerable: !0,
    get: function() {
      return km.log;
    }
  });
  var $o = rt();
  Object.defineProperty(F, "registerResolver", {
    enumerable: !0,
    get: function() {
      return $o.registerResolver;
    }
  });
  Object.defineProperty(F, "createResolver", {
    enumerable: !0,
    get: function() {
      return $o.createResolver;
    }
  });
  Object.defineProperty(F, "CHANNEL_ARGS_CONFIG_SELECTOR_KEY", {
    enumerable: !0,
    get: function() {
      return $o.CHANNEL_ARGS_CONFIG_SELECTOR_KEY;
    }
  });
  var Dm = we();
  Object.defineProperty(F, "uriToString", {
    enumerable: !0,
    get: function() {
      return Dm.uriToString;
    }
  });
  Object.defineProperty(F, "splitHostPort", {
    enumerable: !0,
    get: function() {
      return Dm.splitHostPort;
    }
  });
  var Lm = zi();
  Object.defineProperty(F, "durationToMs", {
    enumerable: !0,
    get: function() {
      return Lm.durationToMs;
    }
  });
  Object.defineProperty(F, "parseDuration", {
    enumerable: !0,
    get: function() {
      return Lm.parseDuration;
    }
  });
  var $b = Ir();
  Object.defineProperty(F, "BackoffTimeout", {
    enumerable: !0,
    get: function() {
      return $b.BackoffTimeout;
    }
  });
  var Gi = Gt();
  Object.defineProperty(F, "createChildChannelControlHelper", {
    enumerable: !0,
    get: function() {
      return Gi.createChildChannelControlHelper;
    }
  });
  Object.defineProperty(F, "registerLoadBalancerType", {
    enumerable: !0,
    get: function() {
      return Gi.registerLoadBalancerType;
    }
  });
  Object.defineProperty(F, "selectLbConfigFromList", {
    enumerable: !0,
    get: function() {
      return Gi.selectLbConfigFromList;
    }
  });
  Object.defineProperty(F, "parseLoadBalancingConfig", {
    enumerable: !0,
    get: function() {
      return Gi.parseLoadBalancingConfig;
    }
  });
  Object.defineProperty(F, "isLoadBalancerNameRegistered", {
    enumerable: !0,
    get: function() {
      return Gi.isLoadBalancerNameRegistered;
    }
  });
  var Vb = ji();
  Object.defineProperty(F, "LeafLoadBalancer", {
    enumerable: !0,
    get: function() {
      return Vb.LeafLoadBalancer;
    }
  });
  var An = Pe();
  Object.defineProperty(F, "subchannelAddressToString", {
    enumerable: !0,
    get: function() {
      return An.subchannelAddressToString;
    }
  });
  Object.defineProperty(F, "endpointToString", {
    enumerable: !0,
    get: function() {
      return An.endpointToString;
    }
  });
  Object.defineProperty(F, "endpointHasAddress", {
    enumerable: !0,
    get: function() {
      return An.endpointHasAddress;
    }
  });
  Object.defineProperty(F, "EndpointMap", {
    enumerable: !0,
    get: function() {
      return An.EndpointMap;
    }
  });
  var Yb = cs();
  Object.defineProperty(F, "ChildLoadBalancerHandler", {
    enumerable: !0,
    get: function() {
      return Yb.ChildLoadBalancerHandler;
    }
  });
  var Vo = kt();
  Object.defineProperty(F, "UnavailablePicker", {
    enumerable: !0,
    get: function() {
      return Vo.UnavailablePicker;
    }
  });
  Object.defineProperty(F, "QueuePicker", {
    enumerable: !0,
    get: function() {
      return Vo.QueuePicker;
    }
  });
  Object.defineProperty(F, "PickResultType", {
    enumerable: !0,
    get: function() {
      return Vo.PickResultType;
    }
  });
  var Fm = vr();
  Object.defineProperty(F, "statusOrFromValue", {
    enumerable: !0,
    get: function() {
      return Fm.statusOrFromValue;
    }
  });
  Object.defineProperty(F, "statusOrFromError", {
    enumerable: !0,
    get: function() {
      return Fm.statusOrFromError;
    }
  });
  var Kb = Co();
  Object.defineProperty(F, "BaseFilter", {
    enumerable: !0,
    get: function() {
      return Kb.BaseFilter;
    }
  });
  var Jb = Js();
  Object.defineProperty(F, "FilterStackFactory", {
    enumerable: !0,
    get: function() {
      return Jb.FilterStackFactory;
    }
  });
  var Xb = fs();
  Object.defineProperty(F, "registerAdminService", {
    enumerable: !0,
    get: function() {
      return Xb.registerAdminService;
    }
  });
  var Qb = Bi();
  Object.defineProperty(F, "BaseSubchannelWrapper", {
    enumerable: !0,
    get: function() {
      return Qb.BaseSubchannelWrapper;
    }
  });
  var qm = dn();
  Object.defineProperty(F, "createServerCredentialsWithInterceptors", {
    enumerable: !0,
    get: function() {
      return qm.createServerCredentialsWithInterceptors;
    }
  });
  Object.defineProperty(F, "createCertificateProviderServerCredentials", {
    enumerable: !0,
    get: function() {
      return qm.createCertificateProviderServerCredentials;
    }
  });
  var Zb = xm();
  Object.defineProperty(F, "FileWatcherCertificateProvider", {
    enumerable: !0,
    get: function() {
      return Zb.FileWatcherCertificateProvider;
    }
  });
  var eO = Mr();
  Object.defineProperty(F, "createCertificateProviderChannelCredentials", {
    enumerable: !0,
    get: function() {
      return eO.createCertificateProviderChannelCredentials;
    }
  });
  var tO = xo();
  Object.defineProperty(F, "SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX", {
    enumerable: !0,
    get: function() {
      return tO.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX;
    }
  });
});

var Wm = C(function(Hm) {
  Object.defineProperty(Hm, "__esModule", {
    value: !0
  });
  Hm.setup = iO;
  var Um = rt(), Bm = vr();
  class zm {
    constructor(e, t, r) {
      this.listener = t, this.hasReturnedResult = !1, this.endpoints = [];
      let i;
      if (e.authority === "") i = "/" + e.path; else i = e.path;
      this.endpoints = [ {
        addresses: [ {
          path: i
        } ]
      } ];
    }
    updateResolution() {
      if (!this.hasReturnedResult) this.hasReturnedResult = !0, process.nextTick(this.listener, Bm.statusOrFromValue(this.endpoints), {}, null, "");
    }
    destroy() {
      this.hasReturnedResult = !1;
    }
    static getDefaultAuthority(e) {
      return "localhost";
    }
  }
  function iO() {
    Um.registerResolver("unix", zm);
  }
});

var Ym = C(function(Vm) {
  Object.defineProperty(Vm, "__esModule", {
    value: !0
  });
  Vm.setup = oO;
  var Pn = Ne("net"), Nn = vr(), hr = k(), gi = ue(), Mn = rt(), Gm = Pe(), In = we(), $m = K(), nO = "ip_resolver";
  function jm(e) {
    $m.trace(hr.LogVerbosity.DEBUG, nO, e);
  }
  var Ko = "ipv4", Jo = "ipv6", aO = 443;
  class Xo {
    constructor(e, t, r) {
      var i;
      this.listener = t, this.endpoints = [], this.error = null, this.hasReturnedResult = !1, 
      jm("Resolver constructed for target " + In.uriToString(e));
      let s = [];
      if (!(e.scheme === Ko || e.scheme === Jo)) {
        this.error = {
          code: hr.Status.UNAVAILABLE,
          details: `Unrecognized scheme ${e.scheme} in IP resolver`,
          metadata: new gi.Metadata
        };
        return;
      }
      let n = e.path.split(",");
      for (let a of n) {
        let o = In.splitHostPort(a);
        if (o === null) {
          this.error = {
            code: hr.Status.UNAVAILABLE,
            details: `Failed to parse ${e.scheme} address ${a}`,
            metadata: new gi.Metadata
          };
          return;
        }
        if (e.scheme === Ko && !Pn.isIPv4(o.host) || e.scheme === Jo && !Pn.isIPv6(o.host)) {
          this.error = {
            code: hr.Status.UNAVAILABLE,
            details: `Failed to parse ${e.scheme} address ${a}`,
            metadata: new gi.Metadata
          };
          return;
        }
        s.push({
          host: o.host,
          port: (i = o.port) !== null && i !== void 0 ? i : aO
        });
      }
      this.endpoints = s.map(a => ({
        addresses: [ a ]
      })), jm("Parsed " + e.scheme + " address list " + s.map(Gm.subchannelAddressToString));
    }
    updateResolution() {
      if (!this.hasReturnedResult) this.hasReturnedResult = !0, process.nextTick(() => {
        if (this.error) this.listener(Nn.statusOrFromError(this.error), {}, null, ""); else this.listener(Nn.statusOrFromValue(this.endpoints), {}, null, "");
      });
    }
    destroy() {
      this.hasReturnedResult = !1;
    }
    static getDefaultAuthority(e) {
      return e.path.split(",")[0];
    }
  }
  function oO() {
    Mn.registerResolver(Ko, Xo), Mn.registerResolver(Jo, Xo);
  }
});

var rv = C(function(ev) {
  Object.defineProperty(ev, "__esModule", {
    value: !0
  });
  ev.RoundRobinLoadBalancer = void 0;
  ev.setup = dO;
  var Dn = Gt(), H = Ae(), Mt = kt(), Jm = K(), Xm = k(), xn = Pe(), Qm = ji(), cO = "round_robin";
  function Km(e) {
    Jm.trace(Xm.LogVerbosity.DEBUG, cO, e);
  }
  var kn = "round_robin";
  class Ln {
    getLoadBalancerName() {
      return kn;
    }
    constructor() {}
    toJsonObject() {
      return {
        [kn]: {}
      };
    }
    static createFromJson(e) {
      return new Ln;
    }
  }
  class Zm {
    constructor(e, t = 0) {
      this.children = e, this.nextIndex = t;
    }
    pick(e) {
      let t = this.children[this.nextIndex].picker;
      return this.nextIndex = (this.nextIndex + 1) % this.children.length, t.pick(e);
    }
    peekNextEndpoint() {
      return this.children[this.nextIndex].endpoint;
    }
  }
  function uO(e, t) {
    return [ ...e.slice(t), ...e.slice(0, t) ];
  }
  class Qo {
    constructor(e) {
      this.channelControlHelper = e, this.children = [], this.currentState = H.ConnectivityState.IDLE, 
      this.currentReadyPicker = null, this.updatesPaused = !1, this.lastError = null, 
      this.childChannelControlHelper = Dn.createChildChannelControlHelper(e, {
        updateState: (t, r, i) => {
          if (this.currentState === H.ConnectivityState.READY && t !== H.ConnectivityState.READY) this.channelControlHelper.requestReresolution();
          if (i) this.lastError = i;
          this.calculateAndUpdateState();
        }
      });
    }
    countChildrenWithState(e) {
      return this.children.filter(t => t.getConnectivityState() === e).length;
    }
    calculateAndUpdateState() {
      if (this.updatesPaused) return;
      if (this.countChildrenWithState(H.ConnectivityState.READY) > 0) {
        let e = this.children.filter(r => r.getConnectivityState() === H.ConnectivityState.READY), t = 0;
        if (this.currentReadyPicker !== null) {
          let r = this.currentReadyPicker.peekNextEndpoint();
          if (t = e.findIndex(i => xn.endpointEqual(i.getEndpoint(), r)), t < 0) t = 0;
        }
        this.updateState(H.ConnectivityState.READY, new Zm(e.map(r => ({
          endpoint: r.getEndpoint(),
          picker: r.getPicker()
        })), t), null);
      } else if (this.countChildrenWithState(H.ConnectivityState.CONNECTING) > 0) this.updateState(H.ConnectivityState.CONNECTING, new Mt.QueuePicker(this), null); else if (this.countChildrenWithState(H.ConnectivityState.TRANSIENT_FAILURE) > 0) {
        let e = `round_robin: No connection established. Last error: ${this.lastError}`;
        this.updateState(H.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker({
          details: e
        }), e);
      } else this.updateState(H.ConnectivityState.IDLE, new Mt.QueuePicker(this), null);
      for (let e of this.children) if (e.getConnectivityState() === H.ConnectivityState.IDLE) e.exitIdle();
    }
    updateState(e, t, r) {
      if (Km(H.ConnectivityState[this.currentState] + " -> " + H.ConnectivityState[e]), 
      e === H.ConnectivityState.READY) this.currentReadyPicker = t; else this.currentReadyPicker = null;
      this.currentState = e, this.channelControlHelper.updateState(e, t, r);
    }
    resetSubchannelList() {
      for (let e of this.children) e.destroy();
      this.children = [];
    }
    updateAddressList(e, t, r, i) {
      if (!(t instanceof Ln)) return !1;
      if (!e.ok) {
        if (this.children.length === 0) this.updateState(H.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker(e.error), e.error.details);
        return !0;
      }
      let s = Math.random() * e.value.length | 0, n = uO(e.value, s);
      if (this.resetSubchannelList(), n.length === 0) {
        let a = `No addresses resolved. Resolution note: ${i}`;
        this.updateState(H.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker({
          details: a
        }), a);
      }
      Km("Connect to endpoint list " + n.map(xn.endpointToString)), this.updatesPaused = !0, 
      this.children = n.map(a => new Qm.LeafLoadBalancer(a, this.childChannelControlHelper, r, i));
      for (let a of this.children) a.startConnecting();
      return this.updatesPaused = !1, this.calculateAndUpdateState(), !0;
    }
    exitIdle() {}
    resetBackoff() {}
    destroy() {
      this.resetSubchannelList();
    }
    getTypeName() {
      return kn;
    }
  }
  ev.RoundRobinLoadBalancer = Qo;
  function dO() {
    Dn.registerLoadBalancerType(kn, Qo, Ln);
  }
});

var pv = C(function(hv) {
  var Zo;
  Object.defineProperty(hv, "__esModule", {
    value: !0
  });
  hv.OutlierDetectionLoadBalancer = hv.OutlierDetectionLoadBalancingConfig = void 0;
  hv.setup = vO;
  var iv = Ae(), qn = k(), De = zi(), Un = Yo(), sv = Gt(), nv = cs(), av = kt(), vi = Pe(), ov = Bi(), lv = K(), fO = "outlier_detection";
  function ge(e) {
    lv.trace(qn.LogVerbosity.DEBUG, fO, e);
  }
  var rl = "outlier_detection", pO = ((Zo = process.env.GRPC_EXPERIMENTAL_ENABLE_OUTLIER_DETECTION) !== null && Zo !== void 0 ? Zo : "true") === "true", gO = {
    stdev_factor: 1900,
    enforcement_percentage: 100,
    minimum_hosts: 5,
    request_volume: 100
  }, mO = {
    threshold: 85,
    enforcement_percentage: 100,
    minimum_hosts: 5,
    request_volume: 50
  };
  function mi(e, t, r, i) {
    if (t in e && e[t] !== void 0 && typeof e[t] !== r) {
      let s = i ? `${i}.${t}` : t;
      throw Error(`outlier detection config ${s} parse error: expected ${r}, got ${typeof e[t]}`);
    }
  }
  function el(e, t, r) {
    let i = r ? `${r}.${t}` : t;
    if (t in e && e[t] !== void 0) {
      if (!De.isDuration(e[t])) throw Error(`outlier detection config ${i} parse error: expected Duration, got ${typeof e[t]}`);
      if (!(e[t].seconds >= 0 && e[t].seconds <= 315576e6 && e[t].nanos >= 0 && e[t].nanos <= 999999999)) throw Error(`outlier detection config ${i} parse error: values out of range for non-negative Duaration`);
    }
  }
  function Fn(e, t, r) {
    let i = r ? `${r}.${t}` : t;
    if (mi(e, t, "number", r), t in e && e[t] !== void 0 && !(e[t] >= 0 && e[t] <= 100)) throw Error(`outlier detection config ${i} parse error: value out of range for percentage (0-100)`);
  }
  class $i {
    constructor(e, t, r, i, s, n, a) {
      if (this.childPolicy = a, a.getLoadBalancerName() === "pick_first") throw Error("outlier_detection LB policy cannot have a pick_first child policy");
      this.intervalMs = e !== null && e !== void 0 ? e : 1e4, this.baseEjectionTimeMs = t !== null && t !== void 0 ? t : 3e4, 
      this.maxEjectionTimeMs = r !== null && r !== void 0 ? r : 3e5, this.maxEjectionPercent = i !== null && i !== void 0 ? i : 10, 
      this.successRateEjection = s ? Object.assign(Object.assign({}, gO), s) : null, this.failurePercentageEjection = n ? Object.assign(Object.assign({}, mO), n) : null;
    }
    getLoadBalancerName() {
      return rl;
    }
    toJsonObject() {
      var e, t;
      return {
        outlier_detection: {
          interval: De.msToDuration(this.intervalMs),
          base_ejection_time: De.msToDuration(this.baseEjectionTimeMs),
          max_ejection_time: De.msToDuration(this.maxEjectionTimeMs),
          max_ejection_percent: this.maxEjectionPercent,
          success_rate_ejection: (e = this.successRateEjection) !== null && e !== void 0 ? e : void 0,
          failure_percentage_ejection: (t = this.failurePercentageEjection) !== null && t !== void 0 ? t : void 0,
          child_policy: [ this.childPolicy.toJsonObject() ]
        }
      };
    }
    getIntervalMs() {
      return this.intervalMs;
    }
    getBaseEjectionTimeMs() {
      return this.baseEjectionTimeMs;
    }
    getMaxEjectionTimeMs() {
      return this.maxEjectionTimeMs;
    }
    getMaxEjectionPercent() {
      return this.maxEjectionPercent;
    }
    getSuccessRateEjectionConfig() {
      return this.successRateEjection;
    }
    getFailurePercentageEjectionConfig() {
      return this.failurePercentageEjection;
    }
    getChildPolicy() {
      return this.childPolicy;
    }
    static createFromJson(e) {
      var t;
      if (el(e, "interval"), el(e, "base_ejection_time"), el(e, "max_ejection_time"), 
      Fn(e, "max_ejection_percent"), "success_rate_ejection" in e && e.success_rate_ejection !== void 0) {
        if (typeof e.success_rate_ejection !== "object") throw Error("outlier detection config success_rate_ejection must be an object");
        mi(e.success_rate_ejection, "stdev_factor", "number", "success_rate_ejection"), 
        Fn(e.success_rate_ejection, "enforcement_percentage", "success_rate_ejection"), 
        mi(e.success_rate_ejection, "minimum_hosts", "number", "success_rate_ejection"), 
        mi(e.success_rate_ejection, "request_volume", "number", "success_rate_ejection");
      }
      if ("failure_percentage_ejection" in e && e.failure_percentage_ejection !== void 0) {
        if (typeof e.failure_percentage_ejection !== "object") throw Error("outlier detection config failure_percentage_ejection must be an object");
        Fn(e.failure_percentage_ejection, "threshold", "failure_percentage_ejection"), Fn(e.failure_percentage_ejection, "enforcement_percentage", "failure_percentage_ejection"), 
        mi(e.failure_percentage_ejection, "minimum_hosts", "number", "failure_percentage_ejection"), 
        mi(e.failure_percentage_ejection, "request_volume", "number", "failure_percentage_ejection");
      }
      if (!("child_policy" in e) || !Array.isArray(e.child_policy)) throw Error("outlier detection config child_policy must be an array");
      let r = sv.selectLbConfigFromList(e.child_policy);
      if (!r) throw Error("outlier detection config child_policy: no valid recognized policy found");
      return new $i(e.interval ? De.durationToMs(e.interval) : null, e.base_ejection_time ? De.durationToMs(e.base_ejection_time) : null, e.max_ejection_time ? De.durationToMs(e.max_ejection_time) : null, (t = e.max_ejection_percent) !== null && t !== void 0 ? t : null, e.success_rate_ejection, e.failure_percentage_ejection, r);
    }
  }
  hv.OutlierDetectionLoadBalancingConfig = $i;
  class cv extends ov.BaseSubchannelWrapper {
    constructor(e, t) {
      super(e);
      this.mapEntry = t, this.refCount = 0;
    }
    ref() {
      this.child.ref(), this.refCount += 1;
    }
    unref() {
      if (this.child.unref(), this.refCount -= 1, this.refCount <= 0) {
        if (this.mapEntry) {
          let e = this.mapEntry.subchannelWrappers.indexOf(this);
          if (e >= 0) this.mapEntry.subchannelWrappers.splice(e, 1);
        }
      }
    }
    eject() {
      this.setHealthy(!1);
    }
    uneject() {
      this.setHealthy(!0);
    }
    getMapEntry() {
      return this.mapEntry;
    }
    getWrappedSubchannel() {
      return this.child;
    }
  }
  function tl() {
    return {
      success: 0,
      failure: 0
    };
  }
  class uv {
    constructor() {
      this.activeBucket = tl(), this.inactiveBucket = tl();
    }
    addSuccess() {
      this.activeBucket.success += 1;
    }
    addFailure() {
      this.activeBucket.failure += 1;
    }
    switchBuckets() {
      this.inactiveBucket = this.activeBucket, this.activeBucket = tl();
    }
    getLastSuccesses() {
      return this.inactiveBucket.success;
    }
    getLastFailures() {
      return this.inactiveBucket.failure;
    }
  }
  class dv {
    constructor(e, t) {
      this.wrappedPicker = e, this.countCalls = t;
    }
    pick(e) {
      let t = this.wrappedPicker.pick(e);
      if (t.pickResultType === av.PickResultType.COMPLETE) {
        let r = t.subchannel, i = r.getMapEntry();
        if (i) {
          let s = t.onCallEnded;
          if (this.countCalls) s = (n, a, o) => {
            var l;
            if (n === qn.Status.OK) i.counter.addSuccess(); else i.counter.addFailure();
            (l = t.onCallEnded) === null || l === void 0 || l.call(t, n, a, o);
          };
          return Object.assign(Object.assign({}, t), {
            subchannel: r.getWrappedSubchannel(),
            onCallEnded: s
          });
        } else return Object.assign(Object.assign({}, t), {
          subchannel: r.getWrappedSubchannel()
        });
      } else return t;
    }
  }
  class il {
    constructor(e) {
      this.entryMap = new vi.EndpointMap, this.latestConfig = null, this.timerStartTime = null, 
      this.childBalancer = new nv.ChildLoadBalancerHandler(Un.createChildChannelControlHelper(e, {
        createSubchannel: (t, r) => {
          let i = e.createSubchannel(t, r), s = this.entryMap.getForSubchannelAddress(t), n = new cv(i, s);
          if ((s === null || s === void 0 ? void 0 : s.currentEjectionTimestamp) !== null) n.eject();
          return s === null || s === void 0 || s.subchannelWrappers.push(n), n;
        },
        updateState: (t, r, i) => {
          if (t === iv.ConnectivityState.READY) e.updateState(t, new dv(r, this.isCountingEnabled()), i); else e.updateState(t, r, i);
        }
      })), this.ejectionTimer = setInterval(() => {}, 0), clearInterval(this.ejectionTimer);
    }
    isCountingEnabled() {
      return this.latestConfig !== null && (this.latestConfig.getSuccessRateEjectionConfig() !== null || this.latestConfig.getFailurePercentageEjectionConfig() !== null);
    }
    getCurrentEjectionPercent() {
      let e = 0;
      for (let t of this.entryMap.values()) if (t.currentEjectionTimestamp !== null) e += 1;
      return e * 100 / this.entryMap.size;
    }
    runSuccessRateCheck(e) {
      if (!this.latestConfig) return;
      let t = this.latestConfig.getSuccessRateEjectionConfig();
      if (!t) return;
      ge("Running success rate check");
      let r = t.request_volume, i = 0, s = [];
      for (let [u, d] of this.entryMap.entries()) {
        let h = d.counter.getLastSuccesses(), m = d.counter.getLastFailures();
        if (ge("Stats for " + vi.endpointToString(u) + ": successes=" + h + " failures=" + m + " targetRequestVolume=" + r), 
        h + m >= r) i += 1, s.push(h / (h + m));
      }
      if (ge("Found " + i + " success rate candidates; currentEjectionPercent=" + this.getCurrentEjectionPercent() + " successRates=[" + s + "]"), 
      i < t.minimum_hosts) return;
      let n = s.reduce((u, d) => u + d) / s.length, a = 0;
      for (let u of s) {
        let d = u - n;
        a += d * d;
      }
      let o = a / s.length, l = Math.sqrt(o), c = n - l * (t.stdev_factor / 1e3);
      ge("stdev=" + l + " ejectionThreshold=" + c);
      for (let [u, d] of this.entryMap.entries()) {
        if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) break;
        let h = d.counter.getLastSuccesses(), m = d.counter.getLastFailures();
        if (h + m < r) continue;
        let f = h / (h + m);
        if (ge("Checking candidate " + u + " successRate=" + f), f < c) {
          let y = Math.random() * 100;
          if (ge("Candidate " + u + " randomNumber=" + y + " enforcement_percentage=" + t.enforcement_percentage), 
          y < t.enforcement_percentage) ge("Ejecting candidate " + u), this.eject(d, e);
        }
      }
    }
    runFailurePercentageCheck(e) {
      if (!this.latestConfig) return;
      let t = this.latestConfig.getFailurePercentageEjectionConfig();
      if (!t) return;
      ge("Running failure percentage check. threshold=" + t.threshold + " request volume threshold=" + t.request_volume);
      let r = 0;
      for (let i of this.entryMap.values()) {
        let s = i.counter.getLastSuccesses(), n = i.counter.getLastFailures();
        if (s + n >= t.request_volume) r += 1;
      }
      if (r < t.minimum_hosts) return;
      for (let [i, s] of this.entryMap.entries()) {
        if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) break;
        let n = s.counter.getLastSuccesses(), a = s.counter.getLastFailures();
        if (ge("Candidate successes=" + n + " failures=" + a), n + a < t.request_volume) continue;
        if (a * 100 / (a + n) > t.threshold) {
          let l = Math.random() * 100;
          if (ge("Candidate " + i + " randomNumber=" + l + " enforcement_percentage=" + t.enforcement_percentage), 
          l < t.enforcement_percentage) ge("Ejecting candidate " + i), this.eject(s, e);
        }
      }
    }
    eject(e, t) {
      e.currentEjectionTimestamp = new Date, e.ejectionTimeMultiplier += 1;
      for (let r of e.subchannelWrappers) r.eject();
    }
    uneject(e) {
      e.currentEjectionTimestamp = null;
      for (let t of e.subchannelWrappers) t.uneject();
    }
    switchAllBuckets() {
      for (let e of this.entryMap.values()) e.counter.switchBuckets();
    }
    startTimer(e) {
      var t, r;
      this.ejectionTimer = setTimeout(() => this.runChecks(), e), (r = (t = this.ejectionTimer).unref) === null || r === void 0 || r.call(t);
    }
    runChecks() {
      let e = new Date;
      if (ge("Ejection timer running"), this.switchAllBuckets(), !this.latestConfig) return;
      this.timerStartTime = e, this.startTimer(this.latestConfig.getIntervalMs()), this.runSuccessRateCheck(e), 
      this.runFailurePercentageCheck(e);
      for (let [t, r] of this.entryMap.entries()) if (r.currentEjectionTimestamp === null) {
        if (r.ejectionTimeMultiplier > 0) r.ejectionTimeMultiplier -= 1;
      } else {
        let i = this.latestConfig.getBaseEjectionTimeMs(), s = this.latestConfig.getMaxEjectionTimeMs(), n = new Date(r.currentEjectionTimestamp.getTime());
        if (n.setMilliseconds(n.getMilliseconds() + Math.min(i * r.ejectionTimeMultiplier, Math.max(i, s))), 
        n < new Date) ge("Unejecting " + t), this.uneject(r);
      }
    }
    updateAddressList(e, t, r, i) {
      if (!(t instanceof $i)) return !1;
      if (ge("Received update with config: " + JSON.stringify(t.toJsonObject(), void 0, 2)), 
      e.ok) {
        for (let n of e.value) if (!this.entryMap.has(n)) ge("Adding map entry for " + vi.endpointToString(n)), 
        this.entryMap.set(n, {
          counter: new uv,
          currentEjectionTimestamp: null,
          ejectionTimeMultiplier: 0,
          subchannelWrappers: []
        });
        this.entryMap.deleteMissing(e.value);
      }
      let s = t.getChildPolicy();
      if (this.childBalancer.updateAddressList(e, s, r, i), t.getSuccessRateEjectionConfig() || t.getFailurePercentageEjectionConfig()) if (this.timerStartTime) {
        ge("Previous timer existed. Replacing timer"), clearTimeout(this.ejectionTimer);
        let n = t.getIntervalMs() - ((new Date).getTime() - this.timerStartTime.getTime());
        this.startTimer(n);
      } else ge("Starting new timer"), this.timerStartTime = new Date, this.startTimer(t.getIntervalMs()), 
      this.switchAllBuckets(); else {
        ge("Counting disabled. Cancelling timer."), this.timerStartTime = null, clearTimeout(this.ejectionTimer);
        for (let n of this.entryMap.values()) this.uneject(n), n.ejectionTimeMultiplier = 0;
      }
      return this.latestConfig = t, !0;
    }
    exitIdle() {
      this.childBalancer.exitIdle();
    }
    resetBackoff() {
      this.childBalancer.resetBackoff();
    }
    destroy() {
      clearTimeout(this.ejectionTimer), this.childBalancer.destroy();
    }
    getTypeName() {
      return rl;
    }
  }
  hv.OutlierDetectionLoadBalancer = il;
  function vO() {
    if (pO) Un.registerLoadBalancerType(rl, il, $i);
  }
});

var yv = C(function(mv) {
  Object.defineProperty(mv, "__esModule", {
    value: !0
  });
  mv.PriorityQueue = void 0;
  var yi = 0, sl = e => Math.floor(e / 2), Bn = e => e * 2 + 1, Vi = e => e * 2 + 2;
  class gv {
    constructor(e = (t, r) => t > r) {
      this.comparator = e, this.heap = [];
    }
    size() {
      return this.heap.length;
    }
    isEmpty() {
      return this.size() == 0;
    }
    peek() {
      return this.heap[yi];
    }
    push(...e) {
      return e.forEach(t => {
        this.heap.push(t), this.siftUp();
      }), this.size();
    }
    pop() {
      let e = this.peek(), t = this.size() - 1;
      if (t > yi) this.swap(yi, t);
      return this.heap.pop(), this.siftDown(), e;
    }
    replace(e) {
      let t = this.peek();
      return this.heap[yi] = e, this.siftDown(), t;
    }
    greater(e, t) {
      return this.comparator(this.heap[e], this.heap[t]);
    }
    swap(e, t) {
      [this.heap[e], this.heap[t]] = [ this.heap[t], this.heap[e] ];
    }
    siftUp() {
      let e = this.size() - 1;
      while (e > yi && this.greater(e, sl(e))) this.swap(e, sl(e)), e = sl(e);
    }
    siftDown() {
      let e = yi;
      while (Bn(e) < this.size() && this.greater(Bn(e), e) || Vi(e) < this.size() && this.greater(Vi(e), e)) {
        let t = Vi(e) < this.size() && this.greater(Vi(e), Bn(e)) ? Vi(e) : Bn(e);
        this.swap(e, t), e = t;
      }
    }
  }
  mv.PriorityQueue = gv;
});

var Av = C(function(Ov) {
  Object.defineProperty(Ov, "__esModule", {
    value: !0
  });
  Ov.WeightedRoundRobinLoadBalancingConfig = void 0;
  Ov.setup = OO;
  var q = Ae(), Sv = k(), Q = zi(), Wn = Gt(), Cv = ji(), Ev = K(), jn = pn(), Qe = kt(), Tv = yv(), Hn = Pe(), SO = "weighted_round_robin";
  function nl(e) {
    Ev.trace(Sv.LogVerbosity.DEBUG, SO, e);
  }
  var al = "weighted_round_robin", CO = 1e4, EO = 1e4, TO = 18e4, RO = 1e3, bO = 1;
  function _v(e, t, r) {
    if (t in e && e[t] !== void 0 && typeof e[t] !== r) throw Error(`weighted round robin config ${t} parse error: expected ${r}, got ${typeof e[t]}`);
  }
  function zn(e, t) {
    if (t in e && e[t] !== void 0 && e[t] !== null) {
      let r;
      if (Q.isDuration(e[t])) r = e[t]; else if (Q.isDurationMessage(e[t])) r = Q.durationMessageToDuration(e[t]); else if (typeof e[t] === "string") {
        let i = Q.parseDuration(e[t]);
        if (!i) throw Error(`weighted round robin config ${t}: failed to parse duration string ${e[t]}`);
        r = i;
      } else throw Error(`weighted round robin config ${t}: expected duration, got ${typeof e[t]}`);
      return Q.durationToMs(r);
    }
    return null;
  }
  class Yi {
    constructor(e, t, r, i, s, n) {
      this.enableOobLoadReport = e !== null && e !== void 0 ? e : !1, this.oobLoadReportingPeriodMs = t !== null && t !== void 0 ? t : CO, 
      this.blackoutPeriodMs = r !== null && r !== void 0 ? r : EO, this.weightExpirationPeriodMs = i !== null && i !== void 0 ? i : TO, 
      this.weightUpdatePeriodMs = Math.max(s !== null && s !== void 0 ? s : RO, 100), 
      this.errorUtilizationPenalty = n !== null && n !== void 0 ? n : bO;
    }
    getLoadBalancerName() {
      return al;
    }
    toJsonObject() {
      return {
        enable_oob_load_report: this.enableOobLoadReport,
        oob_load_reporting_period: Q.durationToString(Q.msToDuration(this.oobLoadReportingPeriodMs)),
        blackout_period: Q.durationToString(Q.msToDuration(this.blackoutPeriodMs)),
        weight_expiration_period: Q.durationToString(Q.msToDuration(this.weightExpirationPeriodMs)),
        weight_update_period: Q.durationToString(Q.msToDuration(this.weightUpdatePeriodMs)),
        error_utilization_penalty: this.errorUtilizationPenalty
      };
    }
    static createFromJson(e) {
      if (_v(e, "enable_oob_load_report", "boolean"), _v(e, "error_utilization_penalty", "number"), 
      e.error_utilization_penalty < 0) throw Error("weighted round robin config error_utilization_penalty < 0");
      return new Yi(e.enable_oob_load_report, zn(e, "oob_load_reporting_period"), zn(e, "blackout_period"), zn(e, "weight_expiration_period"), zn(e, "weight_update_period"), e.error_utilization_penalty);
    }
    getEnableOobLoadReport() {
      return this.enableOobLoadReport;
    }
    getOobLoadReportingPeriodMs() {
      return this.oobLoadReportingPeriodMs;
    }
    getBlackoutPeriodMs() {
      return this.blackoutPeriodMs;
    }
    getWeightExpirationPeriodMs() {
      return this.weightExpirationPeriodMs;
    }
    getWeightUpdatePeriodMs() {
      return this.weightUpdatePeriodMs;
    }
    getErrorUtilizationPenalty() {
      return this.errorUtilizationPenalty;
    }
  }
  Ov.WeightedRoundRobinLoadBalancingConfig = Yi;
  class Rv {
    constructor(e, t) {
      this.metricsHandler = t, this.queue = new Tv.PriorityQueue((s, n) => s.deadline < n.deadline);
      let r = e.filter(s => s.weight > 0), i;
      if (r.length < 2) i = 1; else {
        let s = 0;
        for (let {weight: n} of r) s += n;
        i = s / r.length;
      }
      for (let s of e) {
        let n = s.weight > 0 ? 1 / s.weight : i;
        this.queue.push({
          endpointName: s.endpointName,
          picker: s.picker,
          period: n,
          deadline: Math.random() * n
        });
      }
    }
    pick(e) {
      let t = this.queue.pop();
      this.queue.push(Object.assign(Object.assign({}, t), {
        deadline: t.deadline + t.period
      }));
      let r = t.picker.pick(e);
      if (r.pickResultType === Qe.PickResultType.COMPLETE) if (this.metricsHandler) return Object.assign(Object.assign({}, r), {
        onCallEnded: jn.createMetricsReader(i => this.metricsHandler(i, t.endpointName), r.onCallEnded)
      }); else {
        let i = r.subchannel;
        return Object.assign(Object.assign({}, r), {
          subchannel: i.getWrappedSubchannel()
        });
      } else return r;
    }
  }
  class bv {
    constructor(e) {
      this.channelControlHelper = e, this.latestConfig = null, this.children = new Map, 
      this.currentState = q.ConnectivityState.IDLE, this.updatesPaused = !1, this.lastError = null, 
      this.weightUpdateTimer = null;
    }
    countChildrenWithState(e) {
      let t = 0;
      for (let r of this.children.values()) if (r.child.getConnectivityState() === e) t += 1;
      return t;
    }
    updateWeight(e, t) {
      var r, i;
      let {rps_fractional: s, application_utilization: n} = t;
      if (n > 0 && s > 0) n += t.eps / s * ((i = (r = this.latestConfig) === null || r === void 0 ? void 0 : r.getErrorUtilizationPenalty()) !== null && i !== void 0 ? i : 0);
      let a = n === 0 ? 0 : s / n;
      if (a === 0) return;
      let o = new Date;
      if (e.nonEmptySince === null) e.nonEmptySince = o;
      e.lastUpdated = o, e.weight = a;
    }
    getWeight(e) {
      if (!this.latestConfig) return 0;
      let t = (new Date).getTime();
      if (t - e.lastUpdated.getTime() >= this.latestConfig.getWeightExpirationPeriodMs()) return e.nonEmptySince = null, 
      0;
      let r = this.latestConfig.getBlackoutPeriodMs();
      if (r > 0 && (e.nonEmptySince === null || t - e.nonEmptySince.getTime() < r)) return 0;
      return e.weight;
    }
    calculateAndUpdateState() {
      if (this.updatesPaused || !this.latestConfig) return;
      if (this.countChildrenWithState(q.ConnectivityState.READY) > 0) {
        let e = [];
        for (let [r, i] of this.children) {
          if (i.child.getConnectivityState() !== q.ConnectivityState.READY) continue;
          e.push({
            endpointName: r,
            picker: i.child.getPicker(),
            weight: this.getWeight(i)
          });
        }
        nl("Created picker with weights: " + e.map(r => r.endpointName + ":" + r.weight).join(","));
        let t;
        if (!this.latestConfig.getEnableOobLoadReport()) t = (r, i) => {
          let s = this.children.get(i);
          if (s) this.updateWeight(s, r);
        }; else t = null;
        this.updateState(q.ConnectivityState.READY, new Rv(e, t), null);
      } else if (this.countChildrenWithState(q.ConnectivityState.CONNECTING) > 0) this.updateState(q.ConnectivityState.CONNECTING, new Qe.QueuePicker(this), null); else if (this.countChildrenWithState(q.ConnectivityState.TRANSIENT_FAILURE) > 0) {
        let e = `weighted_round_robin: No connection established. Last error: ${this.lastError}`;
        this.updateState(q.ConnectivityState.TRANSIENT_FAILURE, new Qe.UnavailablePicker({
          details: e
        }), e);
      } else this.updateState(q.ConnectivityState.IDLE, new Qe.QueuePicker(this), null);
      for (let {child: e} of this.children.values()) if (e.getConnectivityState() === q.ConnectivityState.IDLE) e.exitIdle();
    }
    updateState(e, t, r) {
      nl(q.ConnectivityState[this.currentState] + " -> " + q.ConnectivityState[e]), this.currentState = e, 
      this.channelControlHelper.updateState(e, t, r);
    }
    updateAddressList(e, t, r, i) {
      var s, n;
      if (!(t instanceof Yi)) return !1;
      if (!e.ok) {
        if (this.children.size === 0) this.updateState(q.ConnectivityState.TRANSIENT_FAILURE, new Qe.UnavailablePicker(e.error), e.error.details);
        return !0;
      }
      if (e.value.length === 0) {
        let l = `No addresses resolved. Resolution note: ${i}`;
        return this.updateState(q.ConnectivityState.TRANSIENT_FAILURE, new Qe.UnavailablePicker({
          details: l
        }), l), !1;
      }
      nl("Connect to endpoint list " + e.value.map(Hn.endpointToString));
      let a = new Date, o = new Set;
      this.updatesPaused = !0, this.latestConfig = t;
      for (let l of e.value) {
        let c = Hn.endpointToString(l);
        o.add(c);
        let u = this.children.get(c);
        if (!u) u = {
          child: new Cv.LeafLoadBalancer(l, Wn.createChildChannelControlHelper(this.channelControlHelper, {
            updateState: (d, h, m) => {
              if (this.currentState === q.ConnectivityState.READY && d !== q.ConnectivityState.READY) this.channelControlHelper.requestReresolution();
              if (d === q.ConnectivityState.READY) u.nonEmptySince = null;
              if (m) this.lastError = m;
              this.calculateAndUpdateState();
            },
            createSubchannel: (d, h) => {
              let m = this.channelControlHelper.createSubchannel(d, h);
              if (u === null || u === void 0 ? void 0 : u.oobMetricsListener) return new jn.OrcaOobMetricsSubchannelWrapper(m, u.oobMetricsListener, this.latestConfig.getOobLoadReportingPeriodMs()); else return m;
            }
          }), r, i),
          lastUpdated: a,
          nonEmptySince: null,
          weight: 0,
          oobMetricsListener: null
        }, this.children.set(c, u);
        if (t.getEnableOobLoadReport()) u.oobMetricsListener = d => {
          this.updateWeight(u, d);
        }; else u.oobMetricsListener = null;
      }
      for (let [l, c] of this.children) if (o.has(l)) c.child.startConnecting(); else c.child.destroy(), 
      this.children.delete(l);
      if (this.updatesPaused = !1, this.calculateAndUpdateState(), this.weightUpdateTimer) clearInterval(this.weightUpdateTimer);
      return this.weightUpdateTimer = (n = (s = setInterval(() => {
        if (this.currentState === q.ConnectivityState.READY) this.calculateAndUpdateState();
      }, t.getWeightUpdatePeriodMs())).unref) === null || n === void 0 ? void 0 : n.call(s), 
      !0;
    }
    exitIdle() {}
    resetBackoff() {}
    destroy() {
      for (let e of this.children.values()) e.child.destroy();
      if (this.children.clear(), this.weightUpdateTimer) clearInterval(this.weightUpdateTimer);
    }
    getTypeName() {
      return al;
    }
  }
  function OO() {
    Wn.registerLoadBalancerType(al, bv, Yi);
  }
});

var Ki = C(function(G) {
  Object.defineProperty(G, "__esModule", {
    value: !0
  });
  G.experimental = G.ServerMetricRecorder = G.ServerInterceptingCall = G.ResponderBuilder = G.ServerListenerBuilder = G.addAdminServicesToServer = G.getChannelzHandlers = G.getChannelzServiceDefinition = G.InterceptorConfigurationError = G.InterceptingCall = G.RequesterBuilder = G.ListenerBuilder = G.StatusBuilder = G.getClientChannel = G.ServerCredentials = G.Server = G.setLogVerbosity = G.setLogger = G.load = G.loadObject = G.CallCredentials = G.ChannelCredentials = G.waitForClientReady = G.closeClient = G.Channel = G.makeGenericClientConstructor = G.makeClientConstructor = G.loadPackageDefinition = G.Client = G.compressionAlgorithms = G.propagate = G.connectivityState = G.status = G.logVerbosity = G.Metadata = G.credentials = void 0;
  var fr = rs();
  Object.defineProperty(G, "CallCredentials", {
    enumerable: !0,
    get: function() {
      return fr.CallCredentials;
    }
  });
  var Pv = Ra();
  Object.defineProperty(G, "Channel", {
    enumerable: !0,
    get: function() {
      return Pv.ChannelImplementation;
    }
  });
  var Nv = So();
  Object.defineProperty(G, "compressionAlgorithms", {
    enumerable: !0,
    get: function() {
      return Nv.CompressionAlgorithms;
    }
  });
  var Mv = Ae();
  Object.defineProperty(G, "connectivityState", {
    enumerable: !0,
    get: function() {
      return Mv.ConnectivityState;
    }
  });
  var pr = Mr();
  Object.defineProperty(G, "ChannelCredentials", {
    enumerable: !0,
    get: function() {
      return pr.ChannelCredentials;
    }
  });
  var Gn = Ta();
  Object.defineProperty(G, "Client", {
    enumerable: !0,
    get: function() {
      return Gn.Client;
    }
  });
  var _i = k();
  Object.defineProperty(G, "logVerbosity", {
    enumerable: !0,
    get: function() {
      return _i.LogVerbosity;
    }
  });
  Object.defineProperty(G, "status", {
    enumerable: !0,
    get: function() {
      return _i.Status;
    }
  });
  Object.defineProperty(G, "propagate", {
    enumerable: !0,
    get: function() {
      return _i.Propagate;
    }
  });
  var $n = K(), Si = vs();
  Object.defineProperty(G, "loadPackageDefinition", {
    enumerable: !0,
    get: function() {
      return Si.loadPackageDefinition;
    }
  });
  Object.defineProperty(G, "makeClientConstructor", {
    enumerable: !0,
    get: function() {
      return Si.makeClientConstructor;
    }
  });
  Object.defineProperty(G, "makeGenericClientConstructor", {
    enumerable: !0,
    get: function() {
      return Si.makeClientConstructor;
    }
  });
  var Iv = ue();
  Object.defineProperty(G, "Metadata", {
    enumerable: !0,
    get: function() {
      return Iv.Metadata;
    }
  });
  var xv = hm();
  Object.defineProperty(G, "Server", {
    enumerable: !0,
    get: function() {
      return xv.Server;
    }
  });
  var kv = dn();
  Object.defineProperty(G, "ServerCredentials", {
    enumerable: !0,
    get: function() {
      return kv.ServerCredentials;
    }
  });
  var Dv = mm();
  Object.defineProperty(G, "StatusBuilder", {
    enumerable: !0,
    get: function() {
      return Dv.StatusBuilder;
    }
  });
  G.credentials = {
    combineChannelCredentials: (e, ...t) => t.reduce((r, i) => r.compose(i), e),
    combineCallCredentials: (e, ...t) => t.reduce((r, i) => r.compose(i), e),
    createInsecure: pr.ChannelCredentials.createInsecure,
    createSsl: pr.ChannelCredentials.createSsl,
    createFromSecureContext: pr.ChannelCredentials.createFromSecureContext,
    createFromMetadataGenerator: fr.CallCredentials.createFromMetadataGenerator,
    createFromGoogleCredential: fr.CallCredentials.createFromGoogleCredential,
    createEmpty: fr.CallCredentials.createEmpty
  };
  var AO = e => e.close();
  G.closeClient = AO;
  var PO = (e, t, r) => e.waitForReady(t, r);
  G.waitForClientReady = PO;
  var NO = (e, t) => {
    throw Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
  };
  G.loadObject = NO;
  var MO = (e, t, r) => {
    throw Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
  };
  G.load = MO;
  var IO = e => {
    $n.setLogger(e);
  };
  G.setLogger = IO;
  var xO = e => {
    $n.setLoggerVerbosity(e);
  };
  G.setLogVerbosity = xO;
  var kO = e => Gn.Client.prototype.getChannel.call(e);
  G.getClientChannel = kO;
  var Vn = Ca();
  Object.defineProperty(G, "ListenerBuilder", {
    enumerable: !0,
    get: function() {
      return Vn.ListenerBuilder;
    }
  });
  Object.defineProperty(G, "RequesterBuilder", {
    enumerable: !0,
    get: function() {
      return Vn.RequesterBuilder;
    }
  });
  Object.defineProperty(G, "InterceptingCall", {
    enumerable: !0,
    get: function() {
      return Vn.InterceptingCall;
    }
  });
  Object.defineProperty(G, "InterceptorConfigurationError", {
    enumerable: !0,
    get: function() {
      return Vn.InterceptorConfigurationError;
    }
  });
  var Lv = Zt();
  Object.defineProperty(G, "getChannelzServiceDefinition", {
    enumerable: !0,
    get: function() {
      return Lv.getChannelzServiceDefinition;
    }
  });
  Object.defineProperty(G, "getChannelzHandlers", {
    enumerable: !0,
    get: function() {
      return Lv.getChannelzHandlers;
    }
  });
  var DO = fs();
  Object.defineProperty(G, "addAdminServicesToServer", {
    enumerable: !0,
    get: function() {
      return DO.addAdminServicesToServer;
    }
  });
  var ol = Ho();
  Object.defineProperty(G, "ServerListenerBuilder", {
    enumerable: !0,
    get: function() {
      return ol.ServerListenerBuilder;
    }
  });
  Object.defineProperty(G, "ResponderBuilder", {
    enumerable: !0,
    get: function() {
      return ol.ResponderBuilder;
    }
  });
  Object.defineProperty(G, "ServerInterceptingCall", {
    enumerable: !0,
    get: function() {
      return ol.ServerInterceptingCall;
    }
  });
  var LO = pn();
  Object.defineProperty(G, "ServerMetricRecorder", {
    enumerable: !0,
    get: function() {
      return LO.ServerMetricRecorder;
    }
  });
  var FO = Yo();
  G.experimental = FO;
  var Fv = wo(), qv = Wm(), Uv = Ym(), Bv = ji(), zv = rv(), Hv = pv(), Wv = Av(), jv = Zt();
  (() => {
    Fv.setup(), qv.setup(), Uv.setup(), Bv.setup(), zv.setup(), Hv.setup(), Wv.setup(), 
    jv.setup();
  })();
});

var Kv = C(function(Vv) {
  Object.defineProperty(Vv, "__esModule", {
    value: !0
  });
  Vv.createServiceClientConstructor = void 0;
  var $v = Ki();
  function $O(e, t) {
    return $v.makeGenericClientConstructor({
      export: {
        path: e,
        requestStream: !1,
        responseStream: !1,
        requestSerialize: i => i,
        requestDeserialize: i => i,
        responseSerialize: i => i,
        responseDeserialize: i => i
      }
    }, t);
  }
  Vv.createServiceClientConstructor = $O;
});

var Ji = C(function(Qv) {
  Object.defineProperty(Qv, "__esModule", {
    value: !0
  });
  Qv.createOtlpGrpcExporterTransport = Qv.GrpcExporterTransport = Qv.createEmptyMetadata = Qv.createSslCredentials = Qv.createInsecureCredentials = void 0;
  var Xv = ml(), Jv = `OTel-OTLP-Exporter-JavaScript/${Xv.VERSION}`;
  function VO(e) {
    if (e) return `${e} ${Jv}`;
    return Jv;
  }
  var YO = 0, KO = 2;
  function JO(e) {
    return e === "gzip" ? KO : YO;
  }
  function XO() {
    let {credentials: e} = Ki();
    return e.createInsecure();
  }
  Qv.createInsecureCredentials = XO;
  function QO(e, t, r) {
    let {credentials: i} = Ki();
    return i.createSsl(e, t, r);
  }
  Qv.createSslCredentials = QO;
  function ZO() {
    let {Metadata: e} = Ki();
    return new e;
  }
  Qv.createEmptyMetadata = ZO;
  class ll {
    _parameters;
    _client;
    _metadata;
    constructor(e) {
      this._parameters = e;
    }
    shutdown() {
      this._client?.close();
    }
    send(e, t) {
      let r = Buffer.from(e);
      if (this._client == null) {
        let {createServiceClientConstructor: i} = Kv();
        try {
          this._metadata = this._parameters.metadata();
        } catch (n) {
          return Promise.resolve({
            status: "failure",
            error: n
          });
        }
        let s = i(this._parameters.grpcPath, this._parameters.grpcName);
        try {
          this._client = new s(this._parameters.address, this._parameters.credentials(), {
            "grpc.default_compression_algorithm": JO(this._parameters.compression),
            "grpc.primary_user_agent": VO(this._parameters.userAgent)
          });
        } catch (n) {
          return Promise.resolve({
            status: "failure",
            error: n
          });
        }
      }
      return new Promise(i => {
        let s = Date.now() + t;
        if (this._metadata == null) return i({
          error: Error("metadata was null"),
          status: "failure"
        });
        this._client.export(r, this._metadata, {
          deadline: s
        }, (n, a) => {
          if (n) i({
            status: "failure",
            error: n
          }); else i({
            data: a,
            status: "success"
          });
        });
      });
    }
  }
  Qv.GrpcExporterTransport = ll;
  function ew(e) {
    return new ll(e);
  }
  Qv.createOtlpGrpcExporterTransport = ew;
});

var ny = C(function(iy) {
  Object.defineProperty(iy, "__esModule", {
    value: !0
  });
  iy.getOtlpGrpcDefaultConfiguration = iy.mergeOtlpGrpcConfigurationWithDefaults = iy.validateAndNormalizeUrl = void 0;
  var Kn = e4(), It = Ji(), ty = Ne("url"), Yn = ja();
  function ry(e) {
    if (e = e.trim(), !e.match(/^([\w]{1,8}):\/\//)) e = `https://${e}`;
    let r = new ty.URL(e);
    if (r.protocol === "unix:") return e;
    if (r.pathname && r.pathname !== "/") Yn.diag.warn("URL path should not be set when using grpc, the path part of the URL will be ignored.");
    if (r.protocol !== "" && !r.protocol?.match(/^(http)s?:$/)) Yn.diag.warn("URL protocol should be http(s)://. Using http://.");
    return r.host;
  }
  iy.validateAndNormalizeUrl = ry;
  function ey(e, t) {
    for (let [r, i] of Object.entries(t.getMap())) if (e.get(r).length < 1) e.set(r, i);
  }
  function nw(e, t, r) {
    let i = e.url ?? t.url ?? r.url;
    return {
      ...Kn.mergeOtlpSharedConfigurationWithDefaults(e, t, r),
      metadata: () => {
        let s = r.metadata();
        return ey(s, e.metadata?.().clone() ?? It.createEmptyMetadata()), ey(s, t.metadata?.() ?? It.createEmptyMetadata()), 
        s;
      },
      url: ry(i),
      credentials: e.credentials ?? t.credentials?.(i) ?? r.credentials(i),
      userAgent: e.userAgent
    };
  }
  iy.mergeOtlpGrpcConfigurationWithDefaults = nw;
  function aw() {
    return {
      ...Kn.getSharedConfigurationDefaults(),
      metadata: () => It.createEmptyMetadata(),
      url: "http://localhost:4317",
      credentials: e => {
        if (e.startsWith("http://")) return () => It.createInsecureCredentials(); else return () => It.createSslCredentials();
      }
    };
  }
  iy.getOtlpGrpcDefaultConfiguration = aw;
});

var fy = C(function(dy) {
  Object.defineProperty(dy, "__esModule", {
    value: !0
  });
  dy.getOtlpGrpcConfigurationFromEnv = void 0;
  var Jn = qf(), xt = Ji(), oy = xJ(), ly = Ne("fs"), cy = Ne("path"), Xn = ja();
  function cl(e, t) {
    if (e != null && e !== "") return e;
    if (t != null && t !== "") return t;
    return;
  }
  function cw(e) {
    let t = process.env[`OTEL_EXPORTER_OTLP_${e}_HEADERS`]?.trim(), r = process.env.OTEL_EXPORTER_OTLP_HEADERS?.trim(), i = Jn.parseKeyPairsIntoRecord(t), s = Jn.parseKeyPairsIntoRecord(r);
    if (Object.keys(i).length === 0 && Object.keys(s).length === 0) return;
    let n = Object.assign({}, s, i), a = xt.createEmptyMetadata();
    for (let [o, l] of Object.entries(n)) a.set(o, l);
    return a;
  }
  function uw(e) {
    let t = cw(e);
    if (t == null) return;
    return () => t;
  }
  function dw(e) {
    let t = process.env[`OTEL_EXPORTER_OTLP_${e}_ENDPOINT`]?.trim(), r = process.env.OTEL_EXPORTER_OTLP_ENDPOINT?.trim();
    return cl(t, r);
  }
  function hw(e) {
    let t = process.env[`OTEL_EXPORTER_OTLP_${e}_INSECURE`]?.toLowerCase().trim(), r = process.env.OTEL_EXPORTER_OTLP_INSECURE?.toLowerCase().trim();
    return cl(t, r) === "true";
  }
  function ul(e, t, r) {
    let i = process.env[e]?.trim(), s = process.env[t]?.trim(), n = cl(i, s);
    if (n != null) try {
      return ly.readFileSync(cy.resolve(process.cwd(), n));
    } catch {
      Xn.diag.warn(r);
      return;
    } else return;
  }
  function fw(e) {
    return ul(`OTEL_EXPORTER_OTLP_${e}_CLIENT_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE", "Failed to read client certificate chain file");
  }
  function pw(e) {
    return ul(`OTEL_EXPORTER_OTLP_${e}_CLIENT_KEY`, "OTEL_EXPORTER_OTLP_CLIENT_KEY", "Failed to read client certificate private key file");
  }
  function ay(e) {
    return ul(`OTEL_EXPORTER_OTLP_${e}_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CERTIFICATE", "Failed to read root certificate file");
  }
  function uy(e) {
    let t = pw(e), r = fw(e), i = ay(e), s = t != null && r != null;
    if (i != null && !s) return Xn.diag.warn("Client key and certificate must both be provided, but one was missing - attempting to create credentials from just the root certificate"), 
    xt.createSslCredentials(ay(e));
    return xt.createSslCredentials(i, t, r);
  }
  function gw(e) {
    if (hw(e)) return xt.createInsecureCredentials();
    return uy(e);
  }
  function mw(e) {
    return {
      ...oy.getSharedConfigurationFromEnvironment(e),
      metadata: uw(e),
      url: dw(e),
      credentials: t => {
        if (t.startsWith("http://")) return () => xt.createInsecureCredentials(); else if (t.startsWith("https://")) return () => uy(e);
        return () => gw(e);
      }
    };
  }
  dy.getOtlpGrpcConfigurationFromEnv = mw;
});

var _y = C(function(vy) {
  Object.defineProperty(vy, "__esModule", {
    value: !0
  });
  vy.convertLegacyOtlpGrpcOptions = void 0;
  var py = ja(), Qn = ny(), gy = Ji(), my = fy();
  function vw(e, t) {
    if (e.headers) py.diag.warn("Headers cannot be set when using grpc");
    let r = e.credentials;
    return Qn.mergeOtlpGrpcConfigurationWithDefaults({
      url: e.url,
      metadata: () => e.metadata ?? gy.createEmptyMetadata(),
      compression: e.compression,
      timeoutMillis: e.timeoutMillis,
      concurrencyLimit: e.concurrencyLimit,
      credentials: r != null ? () => r : void 0,
      userAgent: e.userAgent
    }, my.getOtlpGrpcConfigurationFromEnv(t), Qn.getOtlpGrpcDefaultConfiguration());
  }
  vy.convertLegacyOtlpGrpcOptions = vw;
});

var Ry = C(function(Ey) {
  Object.defineProperty(Ey, "__esModule", {
    value: !0
  });
  Ey.createOtlpGrpcExportDelegate = void 0;
  var Sy = e4(), Cy = Ji();
  function yw(e, t, r, i) {
    return Sy.createOtlpNetworkExportDelegate(e, t, Cy.createOtlpGrpcExporterTransport({
      address: e.url,
      compression: e.compression,
      credentials: e.credentials,
      metadata: e.metadata,
      userAgent: e.userAgent,
      grpcName: r,
      grpcPath: i
    }));
  }
  Ey.createOtlpGrpcExportDelegate = yw;
});

var g2t = C(function(Zn) {
  Object.defineProperty(Zn, "__esModule", {
    value: !0
  });
  Zn.createOtlpGrpcExportDelegate = Zn.convertLegacyOtlpGrpcOptions = void 0;
  var _w = _y();
  Object.defineProperty(Zn, "convertLegacyOtlpGrpcOptions", {
    enumerable: !0,
    get: function() {
      return _w.convertLegacyOtlpGrpcOptions;
    }
  });
  var Sw = Ry();
  Object.defineProperty(Zn, "createOtlpGrpcExportDelegate", {
    enumerable: !0,
    get: function() {
      return Sw.createOtlpGrpcExportDelegate;
    }
  });
});

export { g2t };
