// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ZHe } from "./chunk-8wsjrq34.js";

import { ja, qf } from "./chunk-s2t7g8m9.js";

import { C, Ne } from "./chunk-m8ez8fhk.js";

var _e = C(function(Ue) {
  Object.defineProperty(Ue, "__esModule", {
    value: !0
  });
  Ue.OTLPExporterBase = void 0;
  class Pe {
    _delegate;
    constructor(l) {
      this._delegate = l;
    }
    export(l, u) {
      this._delegate.export(l, u);
    }
    forceFlush() {
      return this._delegate.forceFlush();
    }
    shutdown() {
      return this._delegate.shutdown();
    }
  }
  Ue.OTLPExporterBase = Pe;
});

var xt = C(function(Le) {
  Object.defineProperty(Le, "__esModule", {
    value: !0
  });
  Le.OTLPExporterError = void 0;
  class Ae extends Error {
    code;
    name="OTLPExporterError";
    data;
    constructor(l, u, f) {
      super(l);
      this.data = f, this.code = u;
    }
  }
  Le.OTLPExporterError = Ae;
});

var yt = C(function(De) {
  Object.defineProperty(De, "__esModule", {
    value: !0
  });
  De.getSharedConfigurationDefaults = De.mergeOtlpSharedConfigurationWithDefaults = De.wrapStaticHeadersInFunction = De.validateTimeoutMillis = void 0;
  function ke(l) {
    if (Number.isFinite(l) && l > 0) return l;
    throw Error(`Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '${l}')`);
  }
  De.validateTimeoutMillis = ke;
  function Si(l) {
    if (l == null) return;
    return async () => l;
  }
  De.wrapStaticHeadersInFunction = Si;
  function gi(l, u, f) {
    return {
      timeoutMillis: ke(l.timeoutMillis ?? u.timeoutMillis ?? f.timeoutMillis),
      concurrencyLimit: l.concurrencyLimit ?? u.concurrencyLimit ?? f.concurrencyLimit,
      compression: l.compression ?? u.compression ?? f.compression
    };
  }
  De.mergeOtlpSharedConfigurationWithDefaults = gi;
  function Ni() {
    return {
      timeoutMillis: 1e4,
      concurrencyLimit: 30,
      compression: "none"
    };
  }
  De.getSharedConfigurationDefaults = Ni;
});

var Ve = C(function(Ce) {
  Object.defineProperty(Ce, "__esModule", {
    value: !0
  });
  Ce.CompressionAlgorithm = void 0;
  var Pi;
  (function(l) {
    l.NONE = "none", l.GZIP = "gzip";
  })(Pi = Ce.CompressionAlgorithm || (Ce.CompressionAlgorithm = {}));
});

var Kt = C(function(qe) {
  Object.defineProperty(qe, "__esModule", {
    value: !0
  });
  qe.createBoundedQueueExportPromiseHandler = void 0;
  class Be {
    _concurrencyLimit;
    _sendingPromises=[];
    constructor(l) {
      this._concurrencyLimit = l;
    }
    pushPromise(l) {
      if (this.hasReachedLimit()) throw Error("Concurrency Limit reached");
      this._sendingPromises.push(l);
      let u = () => {
        let f = this._sendingPromises.indexOf(l);
        this._sendingPromises.splice(f, 1);
      };
      l.then(u, u);
    }
    hasReachedLimit() {
      return this._sendingPromises.length >= this._concurrencyLimit;
    }
    async awaitAll() {
      await Promise.all(this._sendingPromises);
    }
  }
  function Ui(l) {
    return new Be(l.concurrencyLimit);
  }
  qe.createBoundedQueueExportPromiseHandler = Ui;
});

var ze = C(function(Ke) {
  Object.defineProperty(Ke, "__esModule", {
    value: !0
  });
  Ke.createLoggingPartialSuccessResponseHandler = void 0;
  var Fe = ja();
  function Ii(l) {
    return Object.prototype.hasOwnProperty.call(l, "partialSuccess");
  }
  function _i() {
    return {
      handleResponse(l) {
        if (l == null || !Ii(l) || l.partialSuccess == null || Object.keys(l.partialSuccess).length === 0) return;
        Fe.diag.warn("Received Partial Success response:", JSON.stringify(l.partialSuccess));
      }
    };
  }
  Ke.createLoggingPartialSuccessResponseHandler = _i;
});

var jt = C(function(We) {
  Object.defineProperty(We, "__esModule", {
    value: !0
  });
  We.createOtlpExportDelegate = void 0;
  var V = qf(), St = xt(), Je = ze(), Ge = ja();
  class Ye {
    _transport;
    _serializer;
    _responseHandler;
    _promiseQueue;
    _timeout;
    _diagLogger;
    constructor(l, u, f, d, i) {
      this._transport = l, this._serializer = u, this._responseHandler = f, this._promiseQueue = d, 
      this._timeout = i, this._diagLogger = Ge.diag.createComponentLogger({
        namespace: "OTLPExportDelegate"
      });
    }
    export(l, u) {
      if (this._diagLogger.debug("items to be sent", l), this._promiseQueue.hasReachedLimit()) {
        u({
          code: V.ExportResultCode.FAILED,
          error: Error("Concurrent export limit reached")
        });
        return;
      }
      let f = this._serializer.serializeRequest(l);
      if (f == null) {
        u({
          code: V.ExportResultCode.FAILED,
          error: Error("Nothing to send")
        });
        return;
      }
      this._promiseQueue.pushPromise(this._transport.send(f, this._timeout).then(d => {
        if (d.status === "success") {
          if (d.data != null) try {
            this._responseHandler.handleResponse(this._serializer.deserializeResponse(d.data));
          } catch (i) {
            this._diagLogger.warn("Export succeeded but could not deserialize response - is the response specification compliant?", i, d.data);
          }
          u({
            code: V.ExportResultCode.SUCCESS
          });
          return;
        } else if (d.status === "failure" && d.error) {
          u({
            code: V.ExportResultCode.FAILED,
            error: d.error
          });
          return;
        } else if (d.status === "retryable") u({
          code: V.ExportResultCode.FAILED,
          error: new St.OTLPExporterError("Export failed with retryable status")
        }); else u({
          code: V.ExportResultCode.FAILED,
          error: new St.OTLPExporterError("Export failed with unknown error")
        });
      }, d => u({
        code: V.ExportResultCode.FAILED,
        error: d
      })));
    }
    forceFlush() {
      return this._promiseQueue.awaitAll();
    }
    async shutdown() {
      this._diagLogger.debug("shutdown started"), await this.forceFlush(), this._transport.shutdown();
    }
  }
  function Ai(l, u) {
    return new Ye(l.transport, l.serializer, Je.createLoggingPartialSuccessResponseHandler(), l.promiseHandler, u.timeout);
  }
  We.createOtlpExportDelegate = Ai;
});

var er = C(function(Qe) {
  Object.defineProperty(Qe, "__esModule", {
    value: !0
  });
  Qe.createOtlpNetworkExportDelegate = void 0;
  var Xe = Kt(), Ze = jt();
  function Li(l, u, f) {
    return Ze.createOtlpExportDelegate({
      transport: f,
      serializer: u,
      promiseHandler: Xe.createBoundedQueueExportPromiseHandler(l)
    }, {
      timeout: l.timeoutMillis
    });
  }
  Qe.createOtlpNetworkExportDelegate = Li;
});

var e4 = C(function(rt) {
  Object.defineProperty(rt, "__esModule", {
    value: !0
  });
  rt.createOtlpNetworkExportDelegate = rt.CompressionAlgorithm = rt.getSharedConfigurationDefaults = rt.mergeOtlpSharedConfigurationWithDefaults = rt.OTLPExporterError = rt.OTLPExporterBase = void 0;
  var Ri = _e();
  Object.defineProperty(rt, "OTLPExporterBase", {
    enumerable: !0,
    get: function() {
      return Ri.OTLPExporterBase;
    }
  });
  var ki = xt();
  Object.defineProperty(rt, "OTLPExporterError", {
    enumerable: !0,
    get: function() {
      return ki.OTLPExporterError;
    }
  });
  var rr = yt();
  Object.defineProperty(rt, "mergeOtlpSharedConfigurationWithDefaults", {
    enumerable: !0,
    get: function() {
      return rr.mergeOtlpSharedConfigurationWithDefaults;
    }
  });
  Object.defineProperty(rt, "getSharedConfigurationDefaults", {
    enumerable: !0,
    get: function() {
      return rr.getSharedConfigurationDefaults;
    }
  });
  var Di = Ve();
  Object.defineProperty(rt, "CompressionAlgorithm", {
    enumerable: !0,
    get: function() {
      return Di.CompressionAlgorithm;
    }
  });
  var Mi = er();
  Object.defineProperty(rt, "createOtlpNetworkExportDelegate", {
    enumerable: !0,
    get: function() {
      return Mi.createOtlpNetworkExportDelegate;
    }
  });
});

var rqr = C(function(cc, nr) {
  nr.exports = Vi;
  function Vi(l, u) {
    var f = Array(arguments.length - 1), d = 0, i = 2, o = !0;
    while (i < arguments.length) f[d++] = arguments[i++];
    return new Promise(function(t, r) {
      f[d] = function(c) {
        if (o) if (o = !1, c) r(c); else {
          var s = Array(arguments.length - 1), m = 0;
          while (m < s.length) s[m++] = arguments[m];
          t.apply(null, s);
        }
      };
      try {
        l.apply(u || null, f);
      } catch (n) {
        if (o) o = !1, r(n);
      }
    });
  }
});

var lr = C(function(ur) {
  var gt = ur;
  gt.length = function(u) {
    var f = u.length;
    if (!f) return 0;
    var d = 0;
    while (--f % 4 > 1 && u.charAt(f) === "=") ++d;
    return Math.ceil(u.length * 3) / 4 - d;
  };
  var pt = Array(64), ir = Array(123);
  for (K = 0; K < 64; ) ir[pt[K] = K < 26 ? K + 65 : K < 52 ? K + 71 : K < 62 ? K - 4 : K - 59 | 43] = K++;
  var K;
  gt.encode = function(u, f, d) {
    var i = null, o = [], e = 0, t = 0, r;
    while (f < d) {
      var n = u[f++];
      switch (t) {
       case 0:
        o[e++] = pt[n >> 2], r = (n & 3) << 4, t = 1;
        break;

       case 1:
        o[e++] = pt[r | n >> 4], r = (n & 15) << 2, t = 2;
        break;

       case 2:
        o[e++] = pt[r | n >> 6], o[e++] = pt[n & 63], t = 0;
        break;
      }
      if (e > 8191) (i || (i = [])).push(String.fromCharCode.apply(String, o)), e = 0;
    }
    if (t) {
      if (o[e++] = pt[r], o[e++] = 61, t === 1) o[e++] = 61;
    }
    if (i) {
      if (e) i.push(String.fromCharCode.apply(String, o.slice(0, e)));
      return i.join("");
    }
    return String.fromCharCode.apply(String, o.slice(0, e));
  };
  var or = "invalid encoding";
  gt.decode = function(u, f, d) {
    var i = d, o = 0, e;
    for (var t = 0; t < u.length; ) {
      var r = u.charCodeAt(t++);
      if (r === 61 && o > 1) break;
      if ((r = ir[r]) === void 0) throw Error(or);
      switch (o) {
       case 0:
        e = r, o = 1;
        break;

       case 1:
        f[d++] = e << 2 | (r & 48) >> 4, e = r, o = 2;
        break;

       case 2:
        f[d++] = (e & 15) << 4 | (r & 60) >> 2, e = r, o = 3;
        break;

       case 3:
        f[d++] = (e & 3) << 6 | r, o = 0;
        break;
      }
    }
    if (o === 1) throw Error(or);
    return d - i;
  };
  gt.test = function(u) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(u);
  };
});

var ar = C(function(fc, cr) {
  cr.exports = Nt;
  function Nt() {
    this._listeners = {};
  }
  Nt.prototype.on = function(u, f, d) {
    return (this._listeners[u] || (this._listeners[u] = [])).push({
      fn: f,
      ctx: d || this
    }), this;
  };
  Nt.prototype.off = function(u, f) {
    if (u === void 0) this._listeners = {}; else if (f === void 0) this._listeners[u] = []; else {
      var d = this._listeners[u];
      for (var i = 0; i < d.length; ) if (d[i].fn === f) d.splice(i, 1); else ++i;
    }
    return this;
  };
  Nt.prototype.emit = function(u) {
    var f = this._listeners[u];
    if (f) {
      var d = [], i = 1;
      for (;i < arguments.length; ) d.push(arguments[i++]);
      for (i = 0; i < f.length; ) f[i].fn.apply(f[i++].ctx, d);
    }
    return this;
  };
});

var mr = C(function(pc, hr) {
  hr.exports = fr(fr);
  function fr(l) {
    if (typeof Float32Array < "u") (function() {
      var u = new Float32Array([ -0 ]), f = new Uint8Array(u.buffer), d = f[3] === 128;
      function i(r, n, c) {
        u[0] = r, n[c] = f[0], n[c + 1] = f[1], n[c + 2] = f[2], n[c + 3] = f[3];
      }
      function o(r, n, c) {
        u[0] = r, n[c] = f[3], n[c + 1] = f[2], n[c + 2] = f[1], n[c + 3] = f[0];
      }
      l.writeFloatLE = d ? i : o, l.writeFloatBE = d ? o : i;
      function e(r, n) {
        return f[0] = r[n], f[1] = r[n + 1], f[2] = r[n + 2], f[3] = r[n + 3], u[0];
      }
      function t(r, n) {
        return f[3] = r[n], f[2] = r[n + 1], f[1] = r[n + 2], f[0] = r[n + 3], u[0];
      }
      l.readFloatLE = d ? e : t, l.readFloatBE = d ? t : e;
    })(); else (function() {
      function u(d, i, o, e) {
        var t = i < 0 ? 1 : 0;
        if (t) i = -i;
        if (i === 0) d(1 / i > 0 ? 0 : 2147483648, o, e); else if (isNaN(i)) d(2143289344, o, e); else if (i > 34028234663852886e22) d((t << 31 | 2139095040) >>> 0, o, e); else if (i < 11754943508222875e-54) d((t << 31 | Math.round(i / 1401298464324817e-60)) >>> 0, o, e); else {
          var r = Math.floor(Math.log(i) / Math.LN2), n = Math.round(i * Math.pow(2, -r) * 8388608) & 8388607;
          d((t << 31 | r + 127 << 23 | n) >>> 0, o, e);
        }
      }
      l.writeFloatLE = u.bind(null, pr), l.writeFloatBE = u.bind(null, sr);
      function f(d, i, o) {
        var e = d(i, o), t = (e >> 31) * 2 + 1, r = e >>> 23 & 255, n = e & 8388607;
        return r === 255 ? n ? NaN : t * (1 / 0) : r === 0 ? t * 1401298464324817e-60 * n : t * Math.pow(2, r - 150) * (n + 8388608);
      }
      l.readFloatLE = f.bind(null, dr), l.readFloatBE = f.bind(null, yr);
    })();
    if (typeof Float64Array < "u") (function() {
      var u = new Float64Array([ -0 ]), f = new Uint8Array(u.buffer), d = f[7] === 128;
      function i(r, n, c) {
        u[0] = r, n[c] = f[0], n[c + 1] = f[1], n[c + 2] = f[2], n[c + 3] = f[3], n[c + 4] = f[4], 
        n[c + 5] = f[5], n[c + 6] = f[6], n[c + 7] = f[7];
      }
      function o(r, n, c) {
        u[0] = r, n[c] = f[7], n[c + 1] = f[6], n[c + 2] = f[5], n[c + 3] = f[4], n[c + 4] = f[3], 
        n[c + 5] = f[2], n[c + 6] = f[1], n[c + 7] = f[0];
      }
      l.writeDoubleLE = d ? i : o, l.writeDoubleBE = d ? o : i;
      function e(r, n) {
        return f[0] = r[n], f[1] = r[n + 1], f[2] = r[n + 2], f[3] = r[n + 3], f[4] = r[n + 4], 
        f[5] = r[n + 5], f[6] = r[n + 6], f[7] = r[n + 7], u[0];
      }
      function t(r, n) {
        return f[7] = r[n], f[6] = r[n + 1], f[5] = r[n + 2], f[4] = r[n + 3], f[3] = r[n + 4], 
        f[2] = r[n + 5], f[1] = r[n + 6], f[0] = r[n + 7], u[0];
      }
      l.readDoubleLE = d ? e : t, l.readDoubleBE = d ? t : e;
    })(); else (function() {
      function u(d, i, o, e, t, r) {
        var n = e < 0 ? 1 : 0;
        if (n) e = -e;
        if (e === 0) d(0, t, r + i), d(1 / e > 0 ? 0 : 2147483648, t, r + o); else if (isNaN(e)) d(0, t, r + i), 
        d(2146959360, t, r + o); else if (e > 17976931348623157e292) d(0, t, r + i), d((n << 31 | 2146435072) >>> 0, t, r + o); else {
          var c;
          if (e < 22250738585072014e-324) c = e / 5e-324, d(c >>> 0, t, r + i), d((n << 31 | c / 4294967296) >>> 0, t, r + o); else {
            var s = Math.floor(Math.log(e) / Math.LN2);
            if (s === 1024) s = 1023;
            c = e * Math.pow(2, -s), d(c * 4503599627370496 >>> 0, t, r + i), d((n << 31 | s + 1023 << 20 | c * 1048576 & 1048575) >>> 0, t, r + o);
          }
        }
      }
      l.writeDoubleLE = u.bind(null, pr, 0, 4), l.writeDoubleBE = u.bind(null, sr, 4, 0);
      function f(d, i, o, e, t) {
        var r = d(e, t + i), n = d(e, t + o), c = (n >> 31) * 2 + 1, s = n >>> 20 & 2047, m = 4294967296 * (n & 1048575) + r;
        return s === 2047 ? m ? NaN : c * (1 / 0) : s === 0 ? c * 5e-324 * m : c * Math.pow(2, s - 1075) * (m + 4503599627370496);
      }
      l.readDoubleLE = f.bind(null, dr, 0, 4), l.readDoubleBE = f.bind(null, yr, 4, 0);
    })();
    return l;
  }
  function pr(l, u, f) {
    u[f] = l & 255, u[f + 1] = l >>> 8 & 255, u[f + 2] = l >>> 16 & 255, u[f + 3] = l >>> 24;
  }
  function sr(l, u, f) {
    u[f] = l >>> 24, u[f + 1] = l >>> 16 & 255, u[f + 2] = l >>> 8 & 255, u[f + 3] = l & 255;
  }
  function dr(l, u) {
    return (l[u] | l[u + 1] << 8 | l[u + 2] << 16 | l[u + 3] << 24) >>> 0;
  }
  function yr(l, u) {
    return (l[u] << 24 | l[u + 1] << 16 | l[u + 2] << 8 | l[u + 3]) >>> 0;
  }
});

var Ser = C(function(ht, zt) {
  (function(l, u) {
    function f(d) {
      return d.default || d;
    }
    if (typeof define === "function" && define.amd) define([], function() {
      var d = {};
      return u(d), f(d);
    }); else if (typeof ht === "object") {
      if (u(ht), typeof zt === "object") zt.exports = f(ht);
    } else (function() {
      var d = {};
      u(d), l.Long = f(d);
    })();
  })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ht, function(l) {
    Object.defineProperty(l, "__esModule", {
      value: !0
    }), l.default = void 0;
    var u = null;
    try {
      u = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([ 0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11 ])), {}).exports;
    } catch {}
    function f(v, y, O) {
      this.low = v | 0, this.high = y | 0, this.unsigned = !!O;
    }
    f.prototype.__isLong__, Object.defineProperty(f.prototype, "__isLong__", {
      value: !0
    });
    function d(v) {
      return (v && v.__isLong__) === !0;
    }
    function i(v) {
      var y = Math.clz32(v & -v);
      return v ? 31 - y : y;
    }
    f.isLong = d;
    var o = {}, e = {};
    function t(v, y) {
      var O, N, E;
      if (y) {
        if (v >>>= 0, E = 0 <= v && v < 256) {
          if (N = e[v], N) return N;
        }
        if (O = n(v, 0, !0), E) e[v] = O;
        return O;
      } else {
        if (v |= 0, E = -128 <= v && v < 128) {
          if (N = o[v], N) return N;
        }
        if (O = n(v, v < 0 ? -1 : 0, !1), E) o[v] = O;
        return O;
      }
    }
    f.fromInt = t;
    function r(v, y) {
      if (isNaN(v)) return y ? tt : G;
      if (y) {
        if (v < 0) return tt;
        if (v >= xe) return Ee;
      } else {
        if (v <= -Se) return D;
        if (v + 1 >= Se) return we;
      }
      if (v < 0) return r(-v, y).neg();
      return n(v % et | 0, v / et | 0, y);
    }
    f.fromNumber = r;
    function n(v, y, O) {
      return new f(v, y, O);
    }
    f.fromBits = n;
    var c = Math.pow;
    function s(v, y, O) {
      if (v.length === 0) throw Error("empty string");
      if (typeof y === "number") O = y, y = !1; else y = !!y;
      if (v === "NaN" || v === "Infinity" || v === "+Infinity" || v === "-Infinity") return y ? tt : G;
      if (O = O || 10, O < 2 || 36 < O) throw RangeError("radix");
      var N;
      if ((N = v.indexOf("-")) > 0) throw Error("interior hyphen"); else if (N === 0) return s(v.substring(1), y, O).neg();
      var E = r(c(O, 8)), w = G;
      for (var A = 0; A < v.length; A += 8) {
        var M = Math.min(8, v.length - A), H = parseInt(v.substring(A, A + M), O);
        if (M < 8) {
          var k = r(c(O, M));
          w = w.mul(k).add(r(H));
        } else w = w.mul(E), w = w.add(r(H));
      }
      return w.unsigned = y, w;
    }
    f.fromString = s;
    function m(v, y) {
      if (typeof v === "number") return r(v, y);
      if (typeof v === "string") return s(v, y);
      return n(v.low, v.high, typeof y === "boolean" ? y : v.unsigned);
    }
    f.fromValue = m;
    var U = 65536, Q = 16777216, et = U * U, xe = et * et, Se = xe / 2, ge = t(Q), G = t(0);
    f.ZERO = G;
    var tt = t(0, !0);
    f.UZERO = tt;
    var ft = t(1);
    f.ONE = ft;
    var Te = t(1, !0);
    f.UONE = Te;
    var Ht = t(-1);
    f.NEG_ONE = Ht;
    var we = n(-1, 2147483647, !1);
    f.MAX_VALUE = we;
    var Ee = n(-1, -1, !0);
    f.MAX_UNSIGNED_VALUE = Ee;
    var D = n(0, -2147483648, !1);
    f.MIN_VALUE = D;
    var b = f.prototype;
    if (b.toInt = function() {
      return this.unsigned ? this.low >>> 0 : this.low;
    }, b.toNumber = function() {
      if (this.unsigned) return (this.high >>> 0) * et + (this.low >>> 0);
      return this.high * et + (this.low >>> 0);
    }, b.toString = function(y) {
      if (y = y || 10, y < 2 || 36 < y) throw RangeError("radix");
      if (this.isZero()) return "0";
      if (this.isNegative()) if (this.eq(D)) {
        var O = r(y), N = this.div(O), E = N.mul(O).sub(this);
        return N.toString(y) + E.toInt().toString(y);
      } else return "-" + this.neg().toString(y);
      var w = r(c(y, 6), this.unsigned), A = this, M = "";
      while (!0) {
        var H = A.div(w), k = A.sub(H.mul(w)).toInt() >>> 0, I = k.toString(y);
        if (A = H, A.isZero()) return I + M; else {
          while (I.length < 6) I = "0" + I;
          M = "" + I + M;
        }
      }
    }, b.getHighBits = function() {
      return this.high;
    }, b.getHighBitsUnsigned = function() {
      return this.high >>> 0;
    }, b.getLowBits = function() {
      return this.low;
    }, b.getLowBitsUnsigned = function() {
      return this.low >>> 0;
    }, b.getNumBitsAbs = function() {
      if (this.isNegative()) return this.eq(D) ? 64 : this.neg().getNumBitsAbs();
      var y = this.high != 0 ? this.high : this.low;
      for (var O = 31; O > 0; O--) if ((y & 1 << O) != 0) break;
      return this.high != 0 ? O + 33 : O + 1;
    }, b.isSafeInteger = function() {
      var y = this.high >> 21;
      if (!y) return !0;
      if (this.unsigned) return !1;
      return y === -1 && !(this.low === 0 && this.high === -2097152);
    }, b.isZero = function() {
      return this.high === 0 && this.low === 0;
    }, b.eqz = b.isZero, b.isNegative = function() {
      return !this.unsigned && this.high < 0;
    }, b.isPositive = function() {
      return this.unsigned || this.high >= 0;
    }, b.isOdd = function() {
      return (this.low & 1) === 1;
    }, b.isEven = function() {
      return (this.low & 1) === 0;
    }, b.equals = function(y) {
      if (!d(y)) y = m(y);
      if (this.unsigned !== y.unsigned && this.high >>> 31 === 1 && y.high >>> 31 === 1) return !1;
      return this.high === y.high && this.low === y.low;
    }, b.eq = b.equals, b.notEquals = function(y) {
      return !this.eq(y);
    }, b.neq = b.notEquals, b.ne = b.notEquals, b.lessThan = function(y) {
      return this.comp(y) < 0;
    }, b.lt = b.lessThan, b.lessThanOrEqual = function(y) {
      return this.comp(y) <= 0;
    }, b.lte = b.lessThanOrEqual, b.le = b.lessThanOrEqual, b.greaterThan = function(y) {
      return this.comp(y) > 0;
    }, b.gt = b.greaterThan, b.greaterThanOrEqual = function(y) {
      return this.comp(y) >= 0;
    }, b.gte = b.greaterThanOrEqual, b.ge = b.greaterThanOrEqual, b.compare = function(y) {
      if (!d(y)) y = m(y);
      if (this.eq(y)) return 0;
      var O = this.isNegative(), N = y.isNegative();
      if (O && !N) return -1;
      if (!O && N) return 1;
      if (!this.unsigned) return this.sub(y).isNegative() ? -1 : 1;
      return y.high >>> 0 > this.high >>> 0 || y.high === this.high && y.low >>> 0 > this.low >>> 0 ? -1 : 1;
    }, b.comp = b.compare, b.negate = function() {
      if (!this.unsigned && this.eq(D)) return D;
      return this.not().add(ft);
    }, b.neg = b.negate, b.add = function(y) {
      if (!d(y)) y = m(y);
      var O = this.high >>> 16, N = this.high & 65535, E = this.low >>> 16, w = this.low & 65535, A = y.high >>> 16, M = y.high & 65535, H = y.low >>> 16, k = y.low & 65535, I = 0, F = 0, L = 0, q = 0;
      return q += w + k, L += q >>> 16, q &= 65535, L += E + H, F += L >>> 16, L &= 65535, 
      F += N + M, I += F >>> 16, F &= 65535, I += O + A, I &= 65535, n(L << 16 | q, I << 16 | F, this.unsigned);
    }, b.subtract = function(y) {
      if (!d(y)) y = m(y);
      return this.add(y.neg());
    }, b.sub = b.subtract, b.multiply = function(y) {
      if (this.isZero()) return this;
      if (!d(y)) y = m(y);
      if (u) {
        var O = u.mul(this.low, this.high, y.low, y.high);
        return n(O, u.get_high(), this.unsigned);
      }
      if (y.isZero()) return this.unsigned ? tt : G;
      if (this.eq(D)) return y.isOdd() ? D : G;
      if (y.eq(D)) return this.isOdd() ? D : G;
      if (this.isNegative()) if (y.isNegative()) return this.neg().mul(y.neg()); else return this.neg().mul(y).neg(); else if (y.isNegative()) return this.mul(y.neg()).neg();
      if (this.lt(ge) && y.lt(ge)) return r(this.toNumber() * y.toNumber(), this.unsigned);
      var N = this.high >>> 16, E = this.high & 65535, w = this.low >>> 16, A = this.low & 65535, M = y.high >>> 16, H = y.high & 65535, k = y.low >>> 16, I = y.low & 65535, F = 0, L = 0, q = 0, Ot = 0;
      return Ot += A * I, q += Ot >>> 16, Ot &= 65535, q += w * I, L += q >>> 16, q &= 65535, 
      q += A * k, L += q >>> 16, q &= 65535, L += E * I, F += L >>> 16, L &= 65535, L += w * k, 
      F += L >>> 16, L &= 65535, L += A * H, F += L >>> 16, L &= 65535, F += N * I + E * k + w * H + A * M, 
      F &= 65535, n(q << 16 | Ot, F << 16 | L, this.unsigned);
    }, b.mul = b.multiply, b.divide = function(y) {
      if (!d(y)) y = m(y);
      if (y.isZero()) throw Error("division by zero");
      if (u) {
        if (!this.unsigned && this.high === -2147483648 && y.low === -1 && y.high === -1) return this;
        var O = (this.unsigned ? u.div_u : u.div_s)(this.low, this.high, y.low, y.high);
        return n(O, u.get_high(), this.unsigned);
      }
      if (this.isZero()) return this.unsigned ? tt : G;
      var N, E, w;
      if (!this.unsigned) {
        if (this.eq(D)) if (y.eq(ft) || y.eq(Ht)) return D; else if (y.eq(D)) return ft; else {
          var A = this.shr(1);
          if (N = A.div(y).shl(1), N.eq(G)) return y.isNegative() ? ft : Ht; else return E = this.sub(y.mul(N)), 
          w = N.add(E.div(y)), w;
        } else if (y.eq(D)) return this.unsigned ? tt : G;
        if (this.isNegative()) {
          if (y.isNegative()) return this.neg().div(y.neg());
          return this.neg().div(y).neg();
        } else if (y.isNegative()) return this.div(y.neg()).neg();
        w = G;
      } else {
        if (!y.unsigned) y = y.toUnsigned();
        if (y.gt(this)) return tt;
        if (y.gt(this.shru(1))) return Te;
        w = tt;
      }
      E = this;
      while (E.gte(y)) {
        N = Math.max(1, Math.floor(E.toNumber() / y.toNumber()));
        var M = Math.ceil(Math.log(N) / Math.LN2), H = M <= 48 ? 1 : c(2, M - 48), k = r(N), I = k.mul(y);
        while (I.isNegative() || I.gt(E)) N -= H, k = r(N, this.unsigned), I = k.mul(y);
        if (k.isZero()) k = ft;
        w = w.add(k), E = E.sub(I);
      }
      return w;
    }, b.div = b.divide, b.modulo = function(y) {
      if (!d(y)) y = m(y);
      if (u) {
        var O = (this.unsigned ? u.rem_u : u.rem_s)(this.low, this.high, y.low, y.high);
        return n(O, u.get_high(), this.unsigned);
      }
      return this.sub(this.div(y).mul(y));
    }, b.mod = b.modulo, b.rem = b.modulo, b.not = function() {
      return n(~this.low, ~this.high, this.unsigned);
    }, b.countLeadingZeros = function() {
      return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
    }, b.clz = b.countLeadingZeros, b.countTrailingZeros = function() {
      return this.low ? i(this.low) : i(this.high) + 32;
    }, b.ctz = b.countTrailingZeros, b.and = function(y) {
      if (!d(y)) y = m(y);
      return n(this.low & y.low, this.high & y.high, this.unsigned);
    }, b.or = function(y) {
      if (!d(y)) y = m(y);
      return n(this.low | y.low, this.high | y.high, this.unsigned);
    }, b.xor = function(y) {
      if (!d(y)) y = m(y);
      return n(this.low ^ y.low, this.high ^ y.high, this.unsigned);
    }, b.shiftLeft = function(y) {
      if (d(y)) y = y.toInt();
      if ((y &= 63) === 0) return this; else if (y < 32) return n(this.low << y, this.high << y | this.low >>> 32 - y, this.unsigned); else return n(0, this.low << y - 32, this.unsigned);
    }, b.shl = b.shiftLeft, b.shiftRight = function(y) {
      if (d(y)) y = y.toInt();
      if ((y &= 63) === 0) return this; else if (y < 32) return n(this.low >>> y | this.high << 32 - y, this.high >> y, this.unsigned); else return n(this.high >> y - 32, this.high >= 0 ? 0 : -1, this.unsigned);
    }, b.shr = b.shiftRight, b.shiftRightUnsigned = function(y) {
      if (d(y)) y = y.toInt();
      if ((y &= 63) === 0) return this;
      if (y < 32) return n(this.low >>> y | this.high << 32 - y, this.high >>> y, this.unsigned);
      if (y === 32) return n(this.high, 0, this.unsigned);
      return n(this.high >>> y - 32, 0, this.unsigned);
    }, b.shru = b.shiftRightUnsigned, b.shr_u = b.shiftRightUnsigned, b.rotateLeft = function(y) {
      var O;
      if (d(y)) y = y.toInt();
      if ((y &= 63) === 0) return this;
      if (y === 32) return n(this.high, this.low, this.unsigned);
      if (y < 32) return O = 32 - y, n(this.low << y | this.high >>> O, this.high << y | this.low >>> O, this.unsigned);
      return y -= 32, O = 32 - y, n(this.high << y | this.low >>> O, this.low << y | this.high >>> O, this.unsigned);
    }, b.rotl = b.rotateLeft, b.rotateRight = function(y) {
      var O;
      if (d(y)) y = y.toInt();
      if ((y &= 63) === 0) return this;
      if (y === 32) return n(this.high, this.low, this.unsigned);
      if (y < 32) return O = 32 - y, n(this.high << O | this.low >>> y, this.low << O | this.high >>> y, this.unsigned);
      return y -= 32, O = 32 - y, n(this.low << O | this.high >>> y, this.high << O | this.low >>> y, this.unsigned);
    }, b.rotr = b.rotateRight, b.toSigned = function() {
      if (!this.unsigned) return this;
      return n(this.low, this.high, !1);
    }, b.toUnsigned = function() {
      if (this.unsigned) return this;
      return n(this.low, this.high, !0);
    }, b.toBytes = function(y) {
      return y ? this.toBytesLE() : this.toBytesBE();
    }, b.toBytesLE = function() {
      var y = this.high, O = this.low;
      return [ O & 255, O >>> 8 & 255, O >>> 16 & 255, O >>> 24, y & 255, y >>> 8 & 255, y >>> 16 & 255, y >>> 24 ];
    }, b.toBytesBE = function() {
      var y = this.high, O = this.low;
      return [ y >>> 24, y >>> 16 & 255, y >>> 8 & 255, y & 255, O >>> 24, O >>> 16 & 255, O >>> 8 & 255, O & 255 ];
    }, f.fromBytes = function(y, O, N) {
      return N ? f.fromBytesLE(y, O) : f.fromBytesBE(y, O);
    }, f.fromBytesLE = function(y, O) {
      return new f(y[0] | y[1] << 8 | y[2] << 16 | y[3] << 24, y[4] | y[5] << 8 | y[6] << 16 | y[7] << 24, O);
    }, f.fromBytesBE = function(y, O) {
      return new f(y[4] << 24 | y[5] << 16 | y[6] << 8 | y[7], y[0] << 24 | y[1] << 16 | y[2] << 8 | y[3], O);
    }, typeof BigInt === "function") f.fromBigInt = function(y, O) {
      var N = Number(BigInt.asIntN(32, y)), E = Number(BigInt.asIntN(32, y >> BigInt(32)));
      return n(N, E, O);
    }, f.fromValue = function(y, O) {
      if (typeof y === "bigint") return f.fromBigInt(y, O);
      return m(y, O);
    }, b.toBigInt = function() {
      var y = BigInt(this.low >>> 0), O = BigInt(this.unsigned ? this.high >>> 0 : this.high);
      return O << BigInt(32) | y;
    };
    var Gl = l.default = f;
  });
});

var br = C(function(sc, vr) {
  vr.exports = Bi;
  function Bi(l) {
    try {
      var u = l === "long" ? Ser() : l === "buffer" ? Ne("buffer") : l === "fs" ? Ne("fs") : Ne(l);
      if (u && (u.length || Object.keys(u).length)) return u;
      return null;
    } catch (f) {
      return null;
    }
  }
});

var xr = C(function(Or) {
  var Gt = Or, Jt = "\ufffd";
  Gt.length = function(u) {
    var f = 0, d = 0;
    for (var i = 0; i < u.length; ++i) if (d = u.charCodeAt(i), d < 128) f += 1; else if (d < 2048) f += 2; else if ((d & 64512) === 55296 && (u.charCodeAt(i + 1) & 64512) === 56320) ++i, 
    f += 4; else f += 3;
    return f;
  };
  Gt.read = function(u, f, d) {
    if (d - f < 1) return "";
    var i = "";
    for (var o = f; o < d; ) {
      var e = u[o++];
      if (e <= 127) i += String.fromCharCode(e); else if (e >= 192 && e < 224) {
        var t = (e & 31) << 6 | u[o++] & 63;
        i += t >= 128 ? String.fromCharCode(t) : Jt;
      } else if (e >= 224 && e < 240) {
        var r = (e & 15) << 12 | (u[o++] & 63) << 6 | u[o++] & 63;
        i += r >= 2048 ? String.fromCharCode(r) : Jt;
      } else if (e >= 240) {
        var n = (e & 7) << 18 | (u[o++] & 63) << 12 | (u[o++] & 63) << 6 | u[o++] & 63;
        if (n < 65536 || n > 1114111) i += Jt; else n -= 65536, i += String.fromCharCode(55296 + (n >> 10)), 
        i += String.fromCharCode(56320 + (n & 1023));
      }
    }
    return i;
  };
  Gt.write = function(u, f, d) {
    var i = d, o, e;
    for (var t = 0; t < u.length; ++t) if (o = u.charCodeAt(t), o < 128) f[d++] = o; else if (o < 2048) f[d++] = o >> 6 | 192, 
    f[d++] = o & 63 | 128; else if ((o & 64512) === 55296 && ((e = u.charCodeAt(t + 1)) & 64512) === 56320) o = 65536 + ((o & 1023) << 10) + (e & 1023), 
    ++t, f[d++] = o >> 18 | 240, f[d++] = o >> 12 & 63 | 128, f[d++] = o >> 6 & 63 | 128, 
    f[d++] = o & 63 | 128; else f[d++] = o >> 12 | 224, f[d++] = o >> 6 & 63 | 128, 
    f[d++] = o & 63 | 128;
    return d - i;
  };
});

var gr = C(function(hc, Sr) {
  Sr.exports = qi;
  function qi(l, u, f) {
    var d = f || 8192, i = d >>> 1, o = null, e = d;
    return function(r) {
      if (r < 1 || r > i) return l(r);
      if (e + r > d) o = l(d), e = 0;
      var n = u.call(o, e, e += r);
      if (e & 7) e = (e | 7) + 1;
      return n;
    };
  }
});

var Tr = C(function(mc, Nr) {
  Nr.exports = R;
  var mt = QHe();
  function R(l, u) {
    this.lo = l >>> 0, this.hi = u >>> 0;
  }
  var ct = R.zero = new R(0, 0);
  ct.toNumber = function() {
    return 0;
  };
  ct.zzEncode = ct.zzDecode = function() {
    return this;
  };
  ct.length = function() {
    return 1;
  };
  var Hi = R.zeroHash = "\0\0\0\0\0\0\0\0";
  R.fromNumber = function(u) {
    if (u === 0) return ct;
    var f = u < 0;
    if (f) u = -u;
    var d = u >>> 0, i = (u - d) / 4294967296 >>> 0;
    if (f) {
      if (i = ~i >>> 0, d = ~d >>> 0, ++d > 4294967295) {
        if (d = 0, ++i > 4294967295) i = 0;
      }
    }
    return new R(d, i);
  };
  R.from = function(u) {
    if (typeof u === "number") return R.fromNumber(u);
    if (mt.isString(u)) if (mt.Long) u = mt.Long.fromString(u); else return R.fromNumber(parseInt(u, 10));
    return u.low || u.high ? new R(u.low >>> 0, u.high >>> 0) : ct;
  };
  R.prototype.toNumber = function(u) {
    if (!u && this.hi >>> 31) {
      var f = ~this.lo + 1 >>> 0, d = ~this.hi >>> 0;
      if (!f) d = d + 1 >>> 0;
      return -(f + d * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  };
  R.prototype.toLong = function(u) {
    return mt.Long ? new mt.Long(this.lo | 0, this.hi | 0, Boolean(u)) : {
      low: this.lo | 0,
      high: this.hi | 0,
      unsigned: Boolean(u)
    };
  };
  var nt = String.prototype.charCodeAt;
  R.fromHash = function(u) {
    if (u === Hi) return ct;
    return new R((nt.call(u, 0) | nt.call(u, 1) << 8 | nt.call(u, 2) << 16 | nt.call(u, 3) << 24) >>> 0, (nt.call(u, 4) | nt.call(u, 5) << 8 | nt.call(u, 6) << 16 | nt.call(u, 7) << 24) >>> 0);
  };
  R.prototype.toHash = function() {
    return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
  };
  R.prototype.zzEncode = function() {
    var u = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ u) >>> 0, this.lo = (this.lo << 1 ^ u) >>> 0, 
    this;
  };
  R.prototype.zzDecode = function() {
    var u = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ u) >>> 0, this.hi = (this.hi >>> 1 ^ u) >>> 0, 
    this;
  };
  R.prototype.length = function() {
    var u = this.lo, f = (this.lo >>> 28 | this.hi << 4) >>> 0, d = this.hi >>> 24;
    return d === 0 ? f === 0 ? u < 16384 ? u < 128 ? 1 : 2 : u < 2097152 ? 3 : 4 : f < 16384 ? f < 128 ? 5 : 6 : f < 2097152 ? 7 : 8 : d < 128 ? 9 : 10;
  };
});

var QHe = C(function(Yt) {
  var x = Yt;
  x.asPromise = rqr();
  x.base64 = lr();
  x.EventEmitter = ar();
  x.float = mr();
  x.inquire = br();
  x.utf8 = xr();
  x.pool = gr();
  x.LongBits = Tr();
  x.isNode = Boolean(typeof global < "u" && global && global.process && global.process.versions && global.process.versions.node);
  x.global = x.isNode && global || typeof window < "u" && window || typeof self < "u" && self || Yt;
  x.emptyArray = Object.freeze ? Object.freeze([]) : [];
  x.emptyObject = Object.freeze ? Object.freeze({}) : {};
  x.isInteger = Number.isInteger || function(u) {
    return typeof u === "number" && isFinite(u) && Math.floor(u) === u;
  };
  x.isString = function(u) {
    return typeof u === "string" || u instanceof String;
  };
  x.isObject = function(u) {
    return u && typeof u === "object";
  };
  x.isset = x.isSet = function(u, f) {
    var d = u[f];
    if (d != null && u.hasOwnProperty(f)) return typeof d !== "object" || (Array.isArray(d) ? d.length : Object.keys(d).length) > 0;
    return !1;
  };
  x.Buffer = function() {
    try {
      var l = x.inquire("buffer").Buffer;
      return l.prototype.utf8Write ? l : null;
    } catch (u) {
      return null;
    }
  }();
  x._Buffer_from = null;
  x._Buffer_allocUnsafe = null;
  x.newBuffer = function(u) {
    return typeof u === "number" ? x.Buffer ? x._Buffer_allocUnsafe(u) : new x.Array(u) : x.Buffer ? x._Buffer_from(u) : typeof Uint8Array > "u" ? u : new Uint8Array(u);
  };
  x.Array = typeof Uint8Array < "u" ? Uint8Array : Array;
  x.Long = x.global.dcodeIO && x.global.dcodeIO.Long || x.global.Long || x.inquire("long");
  x.key2Re = /^true|false|0|1$/;
  x.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
  x.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
  x.longToHash = function(u) {
    return u ? x.LongBits.from(u).toHash() : x.LongBits.zeroHash;
  };
  x.longFromHash = function(u, f) {
    var d = x.LongBits.fromHash(u);
    if (x.Long) return x.Long.fromBits(d.lo, d.hi, f);
    return d.toNumber(Boolean(f));
  };
  function wr(l, u, f) {
    for (var d = Object.keys(u), i = 0; i < d.length; ++i) if (l[d[i]] === void 0 || !f) {
      if (d[i] !== "__proto__") l[d[i]] = u[d[i]];
    }
    return l;
  }
  x.merge = wr;
  x.recursionLimit = 100;
  x.makeProp = function(u, f) {
    Object.defineProperty(u, f, {
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  };
  x.lcFirst = function(u) {
    return u.charAt(0).toLowerCase() + u.substring(1);
  };
  function Er(l) {
    function u(f, d) {
      if (!(this instanceof u)) return new u(f, d);
      if (Object.defineProperty(this, "message", {
        get: function() {
          return f;
        }
      }), Error.captureStackTrace) Error.captureStackTrace(this, u); else Object.defineProperty(this, "stack", {
        value: Error().stack || ""
      });
      if (d) wr(this, d);
    }
    return u.prototype = Object.create(Error.prototype, {
      constructor: {
        value: u,
        writable: !0,
        enumerable: !1,
        configurable: !0
      },
      name: {
        get: function() {
          return l;
        },
        set: void 0,
        enumerable: !1,
        configurable: !0
      },
      toString: {
        value: function() {
          return this.name + ": " + this.message;
        },
        writable: !0,
        enumerable: !1,
        configurable: !0
      }
    }), u;
  }
  x.newError = Er;
  x.ProtocolError = Er("ProtocolError");
  x.oneOfGetter = function(u) {
    var f = {};
    for (var d = 0; d < u.length; ++d) f[u[d]] = 1;
    return function() {
      for (var i = Object.keys(this), o = i.length - 1; o > -1; --o) if (f[i[o]] === 1 && this[i[o]] !== void 0 && this[i[o]] !== null) return i[o];
    };
  };
  x.oneOfSetter = function(u) {
    return function(f) {
      for (var d = 0; d < u.length; ++d) if (u[d] !== f) delete this[u[d]];
    };
  };
  x.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: !0
  };
  x._configure = function() {
    var l = x.Buffer;
    if (!l) {
      x._Buffer_from = x._Buffer_allocUnsafe = null;
      return;
    }
    x._Buffer_from = l.from !== Uint8Array.from && l.from || function(f, d) {
      return new l(f, d);
    }, x._Buffer_allocUnsafe = l.allocUnsafe || function(f) {
      return new l(f);
    };
  };
});

var wer = C(function(bc, _r) {
  _r.exports = T;
  var j = QHe(), Wt, {LongBits: Tt, base64: Pr, utf8: Ur} = j;
  function vt(l, u, f) {
    this.fn = l, this.len = u, this.next = void 0, this.val = f;
  }
  function Xt() {}
  function Fi(l) {
    this.head = l.head, this.tail = l.tail, this.len = l.len, this.next = l.states;
  }
  function T() {
    this.len = 0, this.head = new vt(Xt, 0, 0), this.tail = this.head, this.states = null;
  }
  var Ir = function() {
    return j.Buffer ? function() {
      return (T.create = function() {
        return new Wt;
      })();
    } : function() {
      return new T;
    };
  };
  T.create = Ir();
  T.alloc = function(u) {
    return new j.Array(u);
  };
  if (j.Array !== Array) T.alloc = j.pool(T.alloc, j.Array.prototype.subarray);
  T.prototype._push = function(u, f, d) {
    return this.tail = this.tail.next = new vt(u, f, d), this.len += f, this;
  };
  function Zt(l, u, f) {
    u[f] = l & 255;
  }
  function Ki(l, u, f) {
    while (l > 127) u[f++] = l & 127 | 128, l >>>= 7;
    u[f] = l;
  }
  function Qt(l, u) {
    this.len = l, this.next = void 0, this.val = u;
  }
  Qt.prototype = Object.create(vt.prototype);
  Qt.prototype.fn = Ki;
  T.prototype.uint32 = function(u) {
    return this.len += (this.tail = this.tail.next = new Qt((u = u >>> 0) < 128 ? 1 : u < 16384 ? 2 : u < 2097152 ? 3 : u < 268435456 ? 4 : 5, u)).len, 
    this;
  };
  T.prototype.int32 = function(u) {
    return u < 0 ? this._push(te, 10, Tt.fromNumber(u)) : this.uint32(u);
  };
  T.prototype.sint32 = function(u) {
    return this.uint32((u << 1 ^ u >> 31) >>> 0);
  };
  function te(l, u, f) {
    while (l.hi) u[f++] = l.lo & 127 | 128, l.lo = (l.lo >>> 7 | l.hi << 25) >>> 0, 
    l.hi >>>= 7;
    while (l.lo > 127) u[f++] = l.lo & 127 | 128, l.lo = l.lo >>> 7;
    u[f++] = l.lo;
  }
  T.prototype.uint64 = function(u) {
    var f = Tt.from(u);
    return this._push(te, f.length(), f);
  };
  T.prototype.int64 = T.prototype.uint64;
  T.prototype.sint64 = function(u) {
    var f = Tt.from(u).zzEncode();
    return this._push(te, f.length(), f);
  };
  T.prototype.bool = function(u) {
    return this._push(Zt, 1, u ? 1 : 0);
  };
  function $t(l, u, f) {
    u[f] = l & 255, u[f + 1] = l >>> 8 & 255, u[f + 2] = l >>> 16 & 255, u[f + 3] = l >>> 24;
  }
  T.prototype.fixed32 = function(u) {
    return this._push($t, 4, u >>> 0);
  };
  T.prototype.sfixed32 = T.prototype.fixed32;
  T.prototype.fixed64 = function(u) {
    var f = Tt.from(u);
    return this._push($t, 4, f.lo)._push($t, 4, f.hi);
  };
  T.prototype.sfixed64 = T.prototype.fixed64;
  T.prototype.float = function(u) {
    return this._push(j.float.writeFloatLE, 4, u);
  };
  T.prototype.double = function(u) {
    return this._push(j.float.writeDoubleLE, 8, u);
  };
  var ji = j.Array.prototype.set ? function(u, f, d) {
    f.set(u, d);
  } : function(u, f, d) {
    for (var i = 0; i < u.length; ++i) f[d + i] = u[i];
  };
  T.prototype.bytes = function(u) {
    var f = u.length >>> 0;
    if (!f) return this._push(Zt, 1, 0);
    if (j.isString(u)) {
      var d = T.alloc(f = Pr.length(u));
      Pr.decode(u, d, 0), u = d;
    }
    return this.uint32(f)._push(ji, f, u);
  };
  T.prototype.string = function(u) {
    var f = Ur.length(u);
    return f ? this.uint32(f)._push(Ur.write, f, u) : this._push(Zt, 1, 0);
  };
  T.prototype.fork = function() {
    return this.states = new Fi(this), this.head = this.tail = new vt(Xt, 0, 0), this.len = 0, 
    this;
  };
  T.prototype.reset = function() {
    if (this.states) this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, 
    this.states = this.states.next; else this.head = this.tail = new vt(Xt, 0, 0), this.len = 0;
    return this;
  };
  T.prototype.ldelim = function() {
    var u = this.head, f = this.tail, d = this.len;
    if (this.reset().uint32(d), d) this.tail.next = u.next, this.tail = f, this.len += d;
    return this;
  };
  T.prototype.finish = function() {
    var u = this.head.next, f = this.constructor.alloc(this.len), d = 0;
    while (u) u.fn(u.val, f, d), d += u.len, u = u.next;
    return f;
  };
  T._configure = function(l) {
    Wt = l, T.create = Ir(), Wt._configure();
  };
});

var Rr = C(function(Oc, Lr) {
  Lr.exports = W;
  var Ar = wer();
  (W.prototype = Object.create(Ar.prototype)).constructor = W;
  var ot = QHe();
  function W() {
    Ar.call(this);
  }
  W._configure = function() {
    W.alloc = ot._Buffer_allocUnsafe, W.writeBytesBuffer = ot.Buffer && ot.Buffer.prototype instanceof Uint8Array && ot.Buffer.prototype.set.name === "set" ? function(u, f, d) {
      f.set(u, d);
    } : function(u, f, d) {
      if (u.copy) u.copy(f, d, 0, u.length); else for (var i = 0; i < u.length; ) f[d++] = u[i++];
    };
  };
  W.prototype.bytes = function(u) {
    if (ot.isString(u)) u = ot._Buffer_from(u, "base64");
    var f = u.length >>> 0;
    if (this.uint32(f), f) this._push(W.writeBytesBuffer, f, u);
    return this;
  };
  function zi(l, u, f) {
    if (l.length < 40) ot.utf8.write(l, u, f); else if (u.utf8Write) u.utf8Write(l, f); else u.write(l, f);
  }
  W.prototype.string = function(u) {
    var f = ot.Buffer.byteLength(u);
    if (this.uint32(f), f) this._push(zi, f, u);
    return this;
  };
  W._configure();
});

var ver = C(function(xc, Vr) {
  Vr.exports = P;
  var z = QHe(), re, {LongBits: Mr, utf8: Ji} = z;
  function Y(l, u) {
    return RangeError("index out of range: " + l.pos + " + " + (u || 1) + " > " + l.len);
  }
  function P(l) {
    this.buf = l, this.pos = 0, this.len = l.length;
  }
  var kr = typeof Uint8Array < "u" ? function(u) {
    if (u instanceof Uint8Array || Array.isArray(u)) return new P(u);
    throw Error("illegal buffer");
  } : function(u) {
    if (Array.isArray(u)) return new P(u);
    throw Error("illegal buffer");
  }, Cr = function() {
    return z.Buffer ? function(f) {
      return (P.create = function(i) {
        return z.Buffer.isBuffer(i) ? new re(i) : kr(i);
      })(f);
    } : kr;
  };
  P.create = Cr();
  P.prototype._slice = z.Array.prototype.subarray || z.Array.prototype.slice;
  P.prototype.uint32 = function() {
    var u = 4294967295;
    return function() {
      if (u = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128) return u;
      if (u = (u | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) return u;
      if (u = (u | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) return u;
      if (u = (u | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) return u;
      if (u = (u | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128) return u;
      if ((this.pos += 5) > this.len) throw this.pos = this.len, Y(this, 10);
      return u;
    };
  }();
  P.prototype.int32 = function() {
    return this.uint32() | 0;
  };
  P.prototype.sint32 = function() {
    var u = this.uint32();
    return u >>> 1 ^ -(u & 1) | 0;
  };
  function ee() {
    var l = new Mr(0, 0), u = 0;
    if (this.len - this.pos > 4) {
      for (;u < 4; ++u) if (l.lo = (l.lo | (this.buf[this.pos] & 127) << u * 7) >>> 0, 
      this.buf[this.pos++] < 128) return l;
      if (l.lo = (l.lo | (this.buf[this.pos] & 127) << 28) >>> 0, l.hi = (l.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, 
      this.buf[this.pos++] < 128) return l;
      u = 0;
    } else {
      for (;u < 3; ++u) {
        if (this.pos >= this.len) throw Y(this);
        if (l.lo = (l.lo | (this.buf[this.pos] & 127) << u * 7) >>> 0, this.buf[this.pos++] < 128) return l;
      }
      return l.lo = (l.lo | (this.buf[this.pos++] & 127) << u * 7) >>> 0, l;
    }
    if (this.len - this.pos > 4) {
      for (;u < 5; ++u) if (l.hi = (l.hi | (this.buf[this.pos] & 127) << u * 7 + 3) >>> 0, 
      this.buf[this.pos++] < 128) return l;
    } else for (;u < 5; ++u) {
      if (this.pos >= this.len) throw Y(this);
      if (l.hi = (l.hi | (this.buf[this.pos] & 127) << u * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return l;
    }
    throw Error("invalid varint encoding");
  }
  P.prototype.bool = function() {
    return this.uint32() !== 0;
  };
  function wt(l, u) {
    return (l[u - 4] | l[u - 3] << 8 | l[u - 2] << 16 | l[u - 1] << 24) >>> 0;
  }
  P.prototype.fixed32 = function() {
    if (this.pos + 4 > this.len) throw Y(this, 4);
    return wt(this.buf, this.pos += 4);
  };
  P.prototype.sfixed32 = function() {
    if (this.pos + 4 > this.len) throw Y(this, 4);
    return wt(this.buf, this.pos += 4) | 0;
  };
  function Dr() {
    if (this.pos + 8 > this.len) throw Y(this, 8);
    return new Mr(wt(this.buf, this.pos += 4), wt(this.buf, this.pos += 4));
  }
  P.prototype.float = function() {
    if (this.pos + 4 > this.len) throw Y(this, 4);
    var u = z.float.readFloatLE(this.buf, this.pos);
    return this.pos += 4, u;
  };
  P.prototype.double = function() {
    if (this.pos + 8 > this.len) throw Y(this, 4);
    var u = z.float.readDoubleLE(this.buf, this.pos);
    return this.pos += 8, u;
  };
  P.prototype.bytes = function() {
    var u = this.uint32(), f = this.pos, d = this.pos + u;
    if (d > this.len) throw Y(this, u);
    if (this.pos += u, Array.isArray(this.buf)) return this.buf.slice(f, d);
    if (f === d) {
      var i = z.Buffer;
      return i ? i.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, f, d);
  };
  P.prototype.string = function() {
    var u = this.bytes();
    return Ji.read(u, 0, u.length);
  };
  P.prototype.skip = function(u) {
    if (typeof u === "number") {
      if (this.pos + u > this.len) throw Y(this, u);
      this.pos += u;
    } else do {
      if (this.pos >= this.len) throw Y(this);
    } while (this.buf[this.pos++] & 128);
    return this;
  };
  P.recursionLimit = z.recursionLimit;
  P.prototype.skipType = function(l, u) {
    if (u === void 0) u = 0;
    if (u > P.recursionLimit) throw Error("maximum nesting depth exceeded");
    switch (l) {
     case 0:
      this.skip();
      break;

     case 1:
      this.skip(8);
      break;

     case 2:
      this.skip(this.uint32());
      break;

     case 3:
      while ((l = this.uint32() & 7) !== 4) this.skipType(l, u + 1);
      break;

     case 5:
      this.skip(4);
      break;

     default:
      throw Error("invalid wire type " + l + " at offset " + this.pos);
    }
    return this;
  };
  P._configure = function(l) {
    re = l, P.create = Cr(), re._configure();
    var u = z.Long ? "toLong" : "toNumber";
    z.merge(P.prototype, {
      int64: function() {
        return ee.call(this)[u](!1);
      },
      uint64: function() {
        return ee.call(this)[u](!0);
      },
      sint64: function() {
        return ee.call(this).zzDecode()[u](!1);
      },
      fixed64: function() {
        return Dr.call(this)[u](!0);
      },
      sfixed64: function() {
        return Dr.call(this)[u](!1);
      }
    });
  };
});

var Fr = C(function(Sc, Hr) {
  Hr.exports = at;
  var qr = ver();
  (at.prototype = Object.create(qr.prototype)).constructor = at;
  var Br = QHe();
  function at(l) {
    qr.call(this, l);
  }
  at._configure = function() {
    if (Br.Buffer) at.prototype._slice = Br.Buffer.prototype.slice;
  };
  at.prototype.string = function() {
    var u = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + u, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + u, this.len));
  };
  at._configure();
});

var jr = C(function(gc, Kr) {
  Kr.exports = bt;
  var ne = QHe();
  (bt.prototype = Object.create(ne.EventEmitter.prototype)).constructor = bt;
  function bt(l, u, f) {
    if (typeof l !== "function") throw TypeError("rpcImpl must be a function");
    ne.EventEmitter.call(this), this.rpcImpl = l, this.requestDelimited = Boolean(u), 
    this.responseDelimited = Boolean(f);
  }
  bt.prototype.rpcCall = function l(u, f, d, i, o) {
    if (!i) throw TypeError("request must be specified");
    var e = this;
    if (!o) return ne.asPromise(l, e, u, f, d, i);
    if (!e.rpcImpl) {
      setTimeout(function() {
        o(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return e.rpcImpl(u, f[e.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), function(r, n) {
        if (r) return e.emit("error", r, u), o(r);
        if (n === null) {
          e.end(!0);
          return;
        }
        if (!(n instanceof d)) try {
          n = d[e.responseDelimited ? "decodeDelimited" : "decode"](n);
        } catch (c) {
          return e.emit("error", c, u), o(c);
        }
        return e.emit("data", n, u), o(null, n);
      });
    } catch (t) {
      e.emit("error", t, u), setTimeout(function() {
        o(t);
      }, 0);
      return;
    }
  };
  bt.prototype.end = function(u) {
    if (this.rpcImpl) {
      if (!u) this.rpcImpl(null, null, null);
      this.rpcImpl = null, this.emit("end").off();
    }
    return this;
  };
});

var oqr = C(function(zr) {
  var Gi = zr;
  Gi.Service = jr();
});

var sqr = C(function(Tc, Jr) {
  Jr.exports = {};
});

var iqr = C(function(Yr) {
  var B = Yr;
  B.build = "minimal";
  B.Writer = wer();
  B.BufferWriter = Rr();
  B.Reader = ver();
  B.BufferReader = Fr();
  B.util = QHe();
  B.rpc = oqr();
  B.roots = sqr();
  B.configure = Gr;
  function Gr() {
    B.util._configure(), B.Writer._configure(B.BufferWriter), B.Reader._configure(B.BufferReader);
  }
  Gr();
});

var Et = C(function(Wr, $r) {
  Object.defineProperty(Wr, "__esModule", {
    value: !0
  });
  var S = iqr(), {Reader: h, Writer: g, util: p} = S, a = S.roots.default || (S.roots.default = {});
  a.opentelemetry = function() {
    var l = {};
    return l.proto = function() {
      var u = {};
      return u.common = function() {
        var f = {};
        return f.v1 = function() {
          var d = {};
          return d.AnyValue = function() {
            function i(e) {
              if (e) {
                for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
              }
            }
            i.prototype.stringValue = null, i.prototype.boolValue = null, i.prototype.intValue = null, 
            i.prototype.doubleValue = null, i.prototype.arrayValue = null, i.prototype.kvlistValue = null, 
            i.prototype.bytesValue = null;
            var o;
            return Object.defineProperty(i.prototype, "value", {
              get: p.oneOfGetter(o = [ "stringValue", "boolValue", "intValue", "doubleValue", "arrayValue", "kvlistValue", "bytesValue" ]),
              set: p.oneOfSetter(o)
            }), i.create = function(t) {
              return new i(t);
            }, i.encode = function(t, r) {
              if (!r) r = g.create();
              if (t.stringValue != null && Object.hasOwnProperty.call(t, "stringValue")) r.uint32(10).string(t.stringValue);
              if (t.boolValue != null && Object.hasOwnProperty.call(t, "boolValue")) r.uint32(16).bool(t.boolValue);
              if (t.intValue != null && Object.hasOwnProperty.call(t, "intValue")) r.uint32(24).int64(t.intValue);
              if (t.doubleValue != null && Object.hasOwnProperty.call(t, "doubleValue")) r.uint32(33).double(t.doubleValue);
              if (t.arrayValue != null && Object.hasOwnProperty.call(t, "arrayValue")) a.opentelemetry.proto.common.v1.ArrayValue.encode(t.arrayValue, r.uint32(42).fork()).ldelim();
              if (t.kvlistValue != null && Object.hasOwnProperty.call(t, "kvlistValue")) a.opentelemetry.proto.common.v1.KeyValueList.encode(t.kvlistValue, r.uint32(50).fork()).ldelim();
              if (t.bytesValue != null && Object.hasOwnProperty.call(t, "bytesValue")) r.uint32(58).bytes(t.bytesValue);
              return r;
            }, i.encodeDelimited = function(t, r) {
              return this.encode(t, r).ldelim();
            }, i.decode = function(t, r, n) {
              if (!(t instanceof h)) t = h.create(t);
              var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.common.v1.AnyValue;
              while (t.pos < c) {
                var m = t.uint32();
                if (m === n) break;
                switch (m >>> 3) {
                 case 1:
                  {
                    s.stringValue = t.string();
                    break;
                  }

                 case 2:
                  {
                    s.boolValue = t.bool();
                    break;
                  }

                 case 3:
                  {
                    s.intValue = t.int64();
                    break;
                  }

                 case 4:
                  {
                    s.doubleValue = t.double();
                    break;
                  }

                 case 5:
                  {
                    s.arrayValue = a.opentelemetry.proto.common.v1.ArrayValue.decode(t, t.uint32());
                    break;
                  }

                 case 6:
                  {
                    s.kvlistValue = a.opentelemetry.proto.common.v1.KeyValueList.decode(t, t.uint32());
                    break;
                  }

                 case 7:
                  {
                    s.bytesValue = t.bytes();
                    break;
                  }

                 default:
                  t.skipType(m & 7);
                  break;
                }
              }
              return s;
            }, i.decodeDelimited = function(t) {
              if (!(t instanceof h)) t = new h(t);
              return this.decode(t, t.uint32());
            }, i.verify = function(t) {
              if (typeof t !== "object" || t === null) return "object expected";
              var r = {};
              if (t.stringValue != null && t.hasOwnProperty("stringValue")) {
                if (r.value = 1, !p.isString(t.stringValue)) return "stringValue: string expected";
              }
              if (t.boolValue != null && t.hasOwnProperty("boolValue")) {
                if (r.value === 1) return "value: multiple values";
                if (r.value = 1, typeof t.boolValue !== "boolean") return "boolValue: boolean expected";
              }
              if (t.intValue != null && t.hasOwnProperty("intValue")) {
                if (r.value === 1) return "value: multiple values";
                if (r.value = 1, !p.isInteger(t.intValue) && !(t.intValue && p.isInteger(t.intValue.low) && p.isInteger(t.intValue.high))) return "intValue: integer|Long expected";
              }
              if (t.doubleValue != null && t.hasOwnProperty("doubleValue")) {
                if (r.value === 1) return "value: multiple values";
                if (r.value = 1, typeof t.doubleValue !== "number") return "doubleValue: number expected";
              }
              if (t.arrayValue != null && t.hasOwnProperty("arrayValue")) {
                if (r.value === 1) return "value: multiple values";
                r.value = 1;
                {
                  var n = a.opentelemetry.proto.common.v1.ArrayValue.verify(t.arrayValue);
                  if (n) return "arrayValue." + n;
                }
              }
              if (t.kvlistValue != null && t.hasOwnProperty("kvlistValue")) {
                if (r.value === 1) return "value: multiple values";
                r.value = 1;
                {
                  var n = a.opentelemetry.proto.common.v1.KeyValueList.verify(t.kvlistValue);
                  if (n) return "kvlistValue." + n;
                }
              }
              if (t.bytesValue != null && t.hasOwnProperty("bytesValue")) {
                if (r.value === 1) return "value: multiple values";
                if (r.value = 1, !(t.bytesValue && typeof t.bytesValue.length === "number" || p.isString(t.bytesValue))) return "bytesValue: buffer expected";
              }
              return null;
            }, i.fromObject = function(t) {
              if (t instanceof a.opentelemetry.proto.common.v1.AnyValue) return t;
              var r = new a.opentelemetry.proto.common.v1.AnyValue;
              if (t.stringValue != null) r.stringValue = String(t.stringValue);
              if (t.boolValue != null) r.boolValue = Boolean(t.boolValue);
              if (t.intValue != null) {
                if (p.Long) (r.intValue = p.Long.fromValue(t.intValue)).unsigned = !1; else if (typeof t.intValue === "string") r.intValue = parseInt(t.intValue, 10); else if (typeof t.intValue === "number") r.intValue = t.intValue; else if (typeof t.intValue === "object") r.intValue = new p.LongBits(t.intValue.low >>> 0, t.intValue.high >>> 0).toNumber();
              }
              if (t.doubleValue != null) r.doubleValue = Number(t.doubleValue);
              if (t.arrayValue != null) {
                if (typeof t.arrayValue !== "object") throw TypeError(".opentelemetry.proto.common.v1.AnyValue.arrayValue: object expected");
                r.arrayValue = a.opentelemetry.proto.common.v1.ArrayValue.fromObject(t.arrayValue);
              }
              if (t.kvlistValue != null) {
                if (typeof t.kvlistValue !== "object") throw TypeError(".opentelemetry.proto.common.v1.AnyValue.kvlistValue: object expected");
                r.kvlistValue = a.opentelemetry.proto.common.v1.KeyValueList.fromObject(t.kvlistValue);
              }
              if (t.bytesValue != null) {
                if (typeof t.bytesValue === "string") p.base64.decode(t.bytesValue, r.bytesValue = p.newBuffer(p.base64.length(t.bytesValue)), 0); else if (t.bytesValue.length >= 0) r.bytesValue = t.bytesValue;
              }
              return r;
            }, i.toObject = function(t, r) {
              if (!r) r = {};
              var n = {};
              if (t.stringValue != null && t.hasOwnProperty("stringValue")) {
                if (n.stringValue = t.stringValue, r.oneofs) n.value = "stringValue";
              }
              if (t.boolValue != null && t.hasOwnProperty("boolValue")) {
                if (n.boolValue = t.boolValue, r.oneofs) n.value = "boolValue";
              }
              if (t.intValue != null && t.hasOwnProperty("intValue")) {
                if (typeof t.intValue === "number") n.intValue = r.longs === String ? String(t.intValue) : t.intValue; else n.intValue = r.longs === String ? p.Long.prototype.toString.call(t.intValue) : r.longs === Number ? new p.LongBits(t.intValue.low >>> 0, t.intValue.high >>> 0).toNumber() : t.intValue;
                if (r.oneofs) n.value = "intValue";
              }
              if (t.doubleValue != null && t.hasOwnProperty("doubleValue")) {
                if (n.doubleValue = r.json && !isFinite(t.doubleValue) ? String(t.doubleValue) : t.doubleValue, 
                r.oneofs) n.value = "doubleValue";
              }
              if (t.arrayValue != null && t.hasOwnProperty("arrayValue")) {
                if (n.arrayValue = a.opentelemetry.proto.common.v1.ArrayValue.toObject(t.arrayValue, r), 
                r.oneofs) n.value = "arrayValue";
              }
              if (t.kvlistValue != null && t.hasOwnProperty("kvlistValue")) {
                if (n.kvlistValue = a.opentelemetry.proto.common.v1.KeyValueList.toObject(t.kvlistValue, r), 
                r.oneofs) n.value = "kvlistValue";
              }
              if (t.bytesValue != null && t.hasOwnProperty("bytesValue")) {
                if (n.bytesValue = r.bytes === String ? p.base64.encode(t.bytesValue, 0, t.bytesValue.length) : r.bytes === Array ? Array.prototype.slice.call(t.bytesValue) : t.bytesValue, 
                r.oneofs) n.value = "bytesValue";
              }
              return n;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(t) {
              if (t === void 0) t = "type.googleapis.com";
              return t + "/opentelemetry.proto.common.v1.AnyValue";
            }, i;
          }(), d.ArrayValue = function() {
            function i(o) {
              if (this.values = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.values = p.emptyArray, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.values != null && e.values.length) for (var r = 0; r < e.values.length; ++r) a.opentelemetry.proto.common.v1.AnyValue.encode(e.values[r], t.uint32(10).fork()).ldelim();
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.common.v1.ArrayValue;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    if (!(c.values && c.values.length)) c.values = [];
                    c.values.push(a.opentelemetry.proto.common.v1.AnyValue.decode(e, e.uint32()));
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.values != null && e.hasOwnProperty("values")) {
                if (!Array.isArray(e.values)) return "values: array expected";
                for (var t = 0; t < e.values.length; ++t) {
                  var r = a.opentelemetry.proto.common.v1.AnyValue.verify(e.values[t]);
                  if (r) return "values." + r;
                }
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.common.v1.ArrayValue) return e;
              var t = new a.opentelemetry.proto.common.v1.ArrayValue;
              if (e.values) {
                if (!Array.isArray(e.values)) throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: array expected");
                t.values = [];
                for (var r = 0; r < e.values.length; ++r) {
                  if (typeof e.values[r] !== "object") throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: object expected");
                  t.values[r] = a.opentelemetry.proto.common.v1.AnyValue.fromObject(e.values[r]);
                }
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.values = [];
              if (e.values && e.values.length) {
                r.values = [];
                for (var n = 0; n < e.values.length; ++n) r.values[n] = a.opentelemetry.proto.common.v1.AnyValue.toObject(e.values[n], t);
              }
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.common.v1.ArrayValue";
            }, i;
          }(), d.KeyValueList = function() {
            function i(o) {
              if (this.values = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.values = p.emptyArray, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.values != null && e.values.length) for (var r = 0; r < e.values.length; ++r) a.opentelemetry.proto.common.v1.KeyValue.encode(e.values[r], t.uint32(10).fork()).ldelim();
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.common.v1.KeyValueList;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    if (!(c.values && c.values.length)) c.values = [];
                    c.values.push(a.opentelemetry.proto.common.v1.KeyValue.decode(e, e.uint32()));
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.values != null && e.hasOwnProperty("values")) {
                if (!Array.isArray(e.values)) return "values: array expected";
                for (var t = 0; t < e.values.length; ++t) {
                  var r = a.opentelemetry.proto.common.v1.KeyValue.verify(e.values[t]);
                  if (r) return "values." + r;
                }
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.common.v1.KeyValueList) return e;
              var t = new a.opentelemetry.proto.common.v1.KeyValueList;
              if (e.values) {
                if (!Array.isArray(e.values)) throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: array expected");
                t.values = [];
                for (var r = 0; r < e.values.length; ++r) {
                  if (typeof e.values[r] !== "object") throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: object expected");
                  t.values[r] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(e.values[r]);
                }
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.values = [];
              if (e.values && e.values.length) {
                r.values = [];
                for (var n = 0; n < e.values.length; ++n) r.values[n] = a.opentelemetry.proto.common.v1.KeyValue.toObject(e.values[n], t);
              }
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.common.v1.KeyValueList";
            }, i;
          }(), d.KeyValue = function() {
            function i(o) {
              if (o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.key = null, i.prototype.value = null, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.key != null && Object.hasOwnProperty.call(e, "key")) t.uint32(10).string(e.key);
              if (e.value != null && Object.hasOwnProperty.call(e, "value")) a.opentelemetry.proto.common.v1.AnyValue.encode(e.value, t.uint32(18).fork()).ldelim();
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.common.v1.KeyValue;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    c.key = e.string();
                    break;
                  }

                 case 2:
                  {
                    c.value = a.opentelemetry.proto.common.v1.AnyValue.decode(e, e.uint32());
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.key != null && e.hasOwnProperty("key")) {
                if (!p.isString(e.key)) return "key: string expected";
              }
              if (e.value != null && e.hasOwnProperty("value")) {
                var t = a.opentelemetry.proto.common.v1.AnyValue.verify(e.value);
                if (t) return "value." + t;
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.common.v1.KeyValue) return e;
              var t = new a.opentelemetry.proto.common.v1.KeyValue;
              if (e.key != null) t.key = String(e.key);
              if (e.value != null) {
                if (typeof e.value !== "object") throw TypeError(".opentelemetry.proto.common.v1.KeyValue.value: object expected");
                t.value = a.opentelemetry.proto.common.v1.AnyValue.fromObject(e.value);
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.defaults) r.key = "", r.value = null;
              if (e.key != null && e.hasOwnProperty("key")) r.key = e.key;
              if (e.value != null && e.hasOwnProperty("value")) r.value = a.opentelemetry.proto.common.v1.AnyValue.toObject(e.value, t);
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.common.v1.KeyValue";
            }, i;
          }(), d.InstrumentationScope = function() {
            function i(o) {
              if (this.attributes = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.name = null, i.prototype.version = null, i.prototype.attributes = p.emptyArray, 
            i.prototype.droppedAttributesCount = null, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.name != null && Object.hasOwnProperty.call(e, "name")) t.uint32(10).string(e.name);
              if (e.version != null && Object.hasOwnProperty.call(e, "version")) t.uint32(18).string(e.version);
              if (e.attributes != null && e.attributes.length) for (var r = 0; r < e.attributes.length; ++r) a.opentelemetry.proto.common.v1.KeyValue.encode(e.attributes[r], t.uint32(26).fork()).ldelim();
              if (e.droppedAttributesCount != null && Object.hasOwnProperty.call(e, "droppedAttributesCount")) t.uint32(32).uint32(e.droppedAttributesCount);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.common.v1.InstrumentationScope;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    c.name = e.string();
                    break;
                  }

                 case 2:
                  {
                    c.version = e.string();
                    break;
                  }

                 case 3:
                  {
                    if (!(c.attributes && c.attributes.length)) c.attributes = [];
                    c.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(e, e.uint32()));
                    break;
                  }

                 case 4:
                  {
                    c.droppedAttributesCount = e.uint32();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.name != null && e.hasOwnProperty("name")) {
                if (!p.isString(e.name)) return "name: string expected";
              }
              if (e.version != null && e.hasOwnProperty("version")) {
                if (!p.isString(e.version)) return "version: string expected";
              }
              if (e.attributes != null && e.hasOwnProperty("attributes")) {
                if (!Array.isArray(e.attributes)) return "attributes: array expected";
                for (var t = 0; t < e.attributes.length; ++t) {
                  var r = a.opentelemetry.proto.common.v1.KeyValue.verify(e.attributes[t]);
                  if (r) return "attributes." + r;
                }
              }
              if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) {
                if (!p.isInteger(e.droppedAttributesCount)) return "droppedAttributesCount: integer expected";
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.common.v1.InstrumentationScope) return e;
              var t = new a.opentelemetry.proto.common.v1.InstrumentationScope;
              if (e.name != null) t.name = String(e.name);
              if (e.version != null) t.version = String(e.version);
              if (e.attributes) {
                if (!Array.isArray(e.attributes)) throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: array expected");
                t.attributes = [];
                for (var r = 0; r < e.attributes.length; ++r) {
                  if (typeof e.attributes[r] !== "object") throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: object expected");
                  t.attributes[r] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(e.attributes[r]);
                }
              }
              if (e.droppedAttributesCount != null) t.droppedAttributesCount = e.droppedAttributesCount >>> 0;
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.attributes = [];
              if (t.defaults) r.name = "", r.version = "", r.droppedAttributesCount = 0;
              if (e.name != null && e.hasOwnProperty("name")) r.name = e.name;
              if (e.version != null && e.hasOwnProperty("version")) r.version = e.version;
              if (e.attributes && e.attributes.length) {
                r.attributes = [];
                for (var n = 0; n < e.attributes.length; ++n) r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.toObject(e.attributes[n], t);
              }
              if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) r.droppedAttributesCount = e.droppedAttributesCount;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.common.v1.InstrumentationScope";
            }, i;
          }(), d.EntityRef = function() {
            function i(o) {
              if (this.idKeys = [], this.descriptionKeys = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.schemaUrl = null, i.prototype.type = null, i.prototype.idKeys = p.emptyArray, 
            i.prototype.descriptionKeys = p.emptyArray, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) t.uint32(10).string(e.schemaUrl);
              if (e.type != null && Object.hasOwnProperty.call(e, "type")) t.uint32(18).string(e.type);
              if (e.idKeys != null && e.idKeys.length) for (var r = 0; r < e.idKeys.length; ++r) t.uint32(26).string(e.idKeys[r]);
              if (e.descriptionKeys != null && e.descriptionKeys.length) for (var r = 0; r < e.descriptionKeys.length; ++r) t.uint32(34).string(e.descriptionKeys[r]);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.common.v1.EntityRef;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    c.schemaUrl = e.string();
                    break;
                  }

                 case 2:
                  {
                    c.type = e.string();
                    break;
                  }

                 case 3:
                  {
                    if (!(c.idKeys && c.idKeys.length)) c.idKeys = [];
                    c.idKeys.push(e.string());
                    break;
                  }

                 case 4:
                  {
                    if (!(c.descriptionKeys && c.descriptionKeys.length)) c.descriptionKeys = [];
                    c.descriptionKeys.push(e.string());
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                if (!p.isString(e.schemaUrl)) return "schemaUrl: string expected";
              }
              if (e.type != null && e.hasOwnProperty("type")) {
                if (!p.isString(e.type)) return "type: string expected";
              }
              if (e.idKeys != null && e.hasOwnProperty("idKeys")) {
                if (!Array.isArray(e.idKeys)) return "idKeys: array expected";
                for (var t = 0; t < e.idKeys.length; ++t) if (!p.isString(e.idKeys[t])) return "idKeys: string[] expected";
              }
              if (e.descriptionKeys != null && e.hasOwnProperty("descriptionKeys")) {
                if (!Array.isArray(e.descriptionKeys)) return "descriptionKeys: array expected";
                for (var t = 0; t < e.descriptionKeys.length; ++t) if (!p.isString(e.descriptionKeys[t])) return "descriptionKeys: string[] expected";
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.common.v1.EntityRef) return e;
              var t = new a.opentelemetry.proto.common.v1.EntityRef;
              if (e.schemaUrl != null) t.schemaUrl = String(e.schemaUrl);
              if (e.type != null) t.type = String(e.type);
              if (e.idKeys) {
                if (!Array.isArray(e.idKeys)) throw TypeError(".opentelemetry.proto.common.v1.EntityRef.idKeys: array expected");
                t.idKeys = [];
                for (var r = 0; r < e.idKeys.length; ++r) t.idKeys[r] = String(e.idKeys[r]);
              }
              if (e.descriptionKeys) {
                if (!Array.isArray(e.descriptionKeys)) throw TypeError(".opentelemetry.proto.common.v1.EntityRef.descriptionKeys: array expected");
                t.descriptionKeys = [];
                for (var r = 0; r < e.descriptionKeys.length; ++r) t.descriptionKeys[r] = String(e.descriptionKeys[r]);
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.idKeys = [], r.descriptionKeys = [];
              if (t.defaults) r.schemaUrl = "", r.type = "";
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) r.schemaUrl = e.schemaUrl;
              if (e.type != null && e.hasOwnProperty("type")) r.type = e.type;
              if (e.idKeys && e.idKeys.length) {
                r.idKeys = [];
                for (var n = 0; n < e.idKeys.length; ++n) r.idKeys[n] = e.idKeys[n];
              }
              if (e.descriptionKeys && e.descriptionKeys.length) {
                r.descriptionKeys = [];
                for (var n = 0; n < e.descriptionKeys.length; ++n) r.descriptionKeys[n] = e.descriptionKeys[n];
              }
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.common.v1.EntityRef";
            }, i;
          }(), d;
        }(), f;
      }(), u.resource = function() {
        var f = {};
        return f.v1 = function() {
          var d = {};
          return d.Resource = function() {
            function i(o) {
              if (this.attributes = [], this.entityRefs = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.attributes = p.emptyArray, i.prototype.droppedAttributesCount = null, 
            i.prototype.entityRefs = p.emptyArray, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.attributes != null && e.attributes.length) for (var r = 0; r < e.attributes.length; ++r) a.opentelemetry.proto.common.v1.KeyValue.encode(e.attributes[r], t.uint32(10).fork()).ldelim();
              if (e.droppedAttributesCount != null && Object.hasOwnProperty.call(e, "droppedAttributesCount")) t.uint32(16).uint32(e.droppedAttributesCount);
              if (e.entityRefs != null && e.entityRefs.length) for (var r = 0; r < e.entityRefs.length; ++r) a.opentelemetry.proto.common.v1.EntityRef.encode(e.entityRefs[r], t.uint32(26).fork()).ldelim();
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.resource.v1.Resource;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    if (!(c.attributes && c.attributes.length)) c.attributes = [];
                    c.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(e, e.uint32()));
                    break;
                  }

                 case 2:
                  {
                    c.droppedAttributesCount = e.uint32();
                    break;
                  }

                 case 3:
                  {
                    if (!(c.entityRefs && c.entityRefs.length)) c.entityRefs = [];
                    c.entityRefs.push(a.opentelemetry.proto.common.v1.EntityRef.decode(e, e.uint32()));
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.attributes != null && e.hasOwnProperty("attributes")) {
                if (!Array.isArray(e.attributes)) return "attributes: array expected";
                for (var t = 0; t < e.attributes.length; ++t) {
                  var r = a.opentelemetry.proto.common.v1.KeyValue.verify(e.attributes[t]);
                  if (r) return "attributes." + r;
                }
              }
              if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) {
                if (!p.isInteger(e.droppedAttributesCount)) return "droppedAttributesCount: integer expected";
              }
              if (e.entityRefs != null && e.hasOwnProperty("entityRefs")) {
                if (!Array.isArray(e.entityRefs)) return "entityRefs: array expected";
                for (var t = 0; t < e.entityRefs.length; ++t) {
                  var r = a.opentelemetry.proto.common.v1.EntityRef.verify(e.entityRefs[t]);
                  if (r) return "entityRefs." + r;
                }
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.resource.v1.Resource) return e;
              var t = new a.opentelemetry.proto.resource.v1.Resource;
              if (e.attributes) {
                if (!Array.isArray(e.attributes)) throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: array expected");
                t.attributes = [];
                for (var r = 0; r < e.attributes.length; ++r) {
                  if (typeof e.attributes[r] !== "object") throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: object expected");
                  t.attributes[r] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(e.attributes[r]);
                }
              }
              if (e.droppedAttributesCount != null) t.droppedAttributesCount = e.droppedAttributesCount >>> 0;
              if (e.entityRefs) {
                if (!Array.isArray(e.entityRefs)) throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: array expected");
                t.entityRefs = [];
                for (var r = 0; r < e.entityRefs.length; ++r) {
                  if (typeof e.entityRefs[r] !== "object") throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: object expected");
                  t.entityRefs[r] = a.opentelemetry.proto.common.v1.EntityRef.fromObject(e.entityRefs[r]);
                }
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.attributes = [], r.entityRefs = [];
              if (t.defaults) r.droppedAttributesCount = 0;
              if (e.attributes && e.attributes.length) {
                r.attributes = [];
                for (var n = 0; n < e.attributes.length; ++n) r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.toObject(e.attributes[n], t);
              }
              if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) r.droppedAttributesCount = e.droppedAttributesCount;
              if (e.entityRefs && e.entityRefs.length) {
                r.entityRefs = [];
                for (var n = 0; n < e.entityRefs.length; ++n) r.entityRefs[n] = a.opentelemetry.proto.common.v1.EntityRef.toObject(e.entityRefs[n], t);
              }
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.resource.v1.Resource";
            }, i;
          }(), d;
        }(), f;
      }(), u.trace = function() {
        var f = {};
        return f.v1 = function() {
          var d = {};
          return d.TracesData = function() {
            function i(o) {
              if (this.resourceSpans = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.resourceSpans = p.emptyArray, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.resourceSpans != null && e.resourceSpans.length) for (var r = 0; r < e.resourceSpans.length; ++r) a.opentelemetry.proto.trace.v1.ResourceSpans.encode(e.resourceSpans[r], t.uint32(10).fork()).ldelim();
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.trace.v1.TracesData;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    if (!(c.resourceSpans && c.resourceSpans.length)) c.resourceSpans = [];
                    c.resourceSpans.push(a.opentelemetry.proto.trace.v1.ResourceSpans.decode(e, e.uint32()));
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.resourceSpans != null && e.hasOwnProperty("resourceSpans")) {
                if (!Array.isArray(e.resourceSpans)) return "resourceSpans: array expected";
                for (var t = 0; t < e.resourceSpans.length; ++t) {
                  var r = a.opentelemetry.proto.trace.v1.ResourceSpans.verify(e.resourceSpans[t]);
                  if (r) return "resourceSpans." + r;
                }
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.trace.v1.TracesData) return e;
              var t = new a.opentelemetry.proto.trace.v1.TracesData;
              if (e.resourceSpans) {
                if (!Array.isArray(e.resourceSpans)) throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: array expected");
                t.resourceSpans = [];
                for (var r = 0; r < e.resourceSpans.length; ++r) {
                  if (typeof e.resourceSpans[r] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: object expected");
                  t.resourceSpans[r] = a.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(e.resourceSpans[r]);
                }
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.resourceSpans = [];
              if (e.resourceSpans && e.resourceSpans.length) {
                r.resourceSpans = [];
                for (var n = 0; n < e.resourceSpans.length; ++n) r.resourceSpans[n] = a.opentelemetry.proto.trace.v1.ResourceSpans.toObject(e.resourceSpans[n], t);
              }
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.trace.v1.TracesData";
            }, i;
          }(), d.ResourceSpans = function() {
            function i(o) {
              if (this.scopeSpans = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.resource = null, i.prototype.scopeSpans = p.emptyArray, i.prototype.schemaUrl = null, 
            i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.resource != null && Object.hasOwnProperty.call(e, "resource")) a.opentelemetry.proto.resource.v1.Resource.encode(e.resource, t.uint32(10).fork()).ldelim();
              if (e.scopeSpans != null && e.scopeSpans.length) for (var r = 0; r < e.scopeSpans.length; ++r) a.opentelemetry.proto.trace.v1.ScopeSpans.encode(e.scopeSpans[r], t.uint32(18).fork()).ldelim();
              if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) t.uint32(26).string(e.schemaUrl);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.trace.v1.ResourceSpans;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    c.resource = a.opentelemetry.proto.resource.v1.Resource.decode(e, e.uint32());
                    break;
                  }

                 case 2:
                  {
                    if (!(c.scopeSpans && c.scopeSpans.length)) c.scopeSpans = [];
                    c.scopeSpans.push(a.opentelemetry.proto.trace.v1.ScopeSpans.decode(e, e.uint32()));
                    break;
                  }

                 case 3:
                  {
                    c.schemaUrl = e.string();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.resource != null && e.hasOwnProperty("resource")) {
                var t = a.opentelemetry.proto.resource.v1.Resource.verify(e.resource);
                if (t) return "resource." + t;
              }
              if (e.scopeSpans != null && e.hasOwnProperty("scopeSpans")) {
                if (!Array.isArray(e.scopeSpans)) return "scopeSpans: array expected";
                for (var r = 0; r < e.scopeSpans.length; ++r) {
                  var t = a.opentelemetry.proto.trace.v1.ScopeSpans.verify(e.scopeSpans[r]);
                  if (t) return "scopeSpans." + t;
                }
              }
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                if (!p.isString(e.schemaUrl)) return "schemaUrl: string expected";
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.trace.v1.ResourceSpans) return e;
              var t = new a.opentelemetry.proto.trace.v1.ResourceSpans;
              if (e.resource != null) {
                if (typeof e.resource !== "object") throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.resource: object expected");
                t.resource = a.opentelemetry.proto.resource.v1.Resource.fromObject(e.resource);
              }
              if (e.scopeSpans) {
                if (!Array.isArray(e.scopeSpans)) throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: array expected");
                t.scopeSpans = [];
                for (var r = 0; r < e.scopeSpans.length; ++r) {
                  if (typeof e.scopeSpans[r] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: object expected");
                  t.scopeSpans[r] = a.opentelemetry.proto.trace.v1.ScopeSpans.fromObject(e.scopeSpans[r]);
                }
              }
              if (e.schemaUrl != null) t.schemaUrl = String(e.schemaUrl);
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.scopeSpans = [];
              if (t.defaults) r.resource = null, r.schemaUrl = "";
              if (e.resource != null && e.hasOwnProperty("resource")) r.resource = a.opentelemetry.proto.resource.v1.Resource.toObject(e.resource, t);
              if (e.scopeSpans && e.scopeSpans.length) {
                r.scopeSpans = [];
                for (var n = 0; n < e.scopeSpans.length; ++n) r.scopeSpans[n] = a.opentelemetry.proto.trace.v1.ScopeSpans.toObject(e.scopeSpans[n], t);
              }
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) r.schemaUrl = e.schemaUrl;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.trace.v1.ResourceSpans";
            }, i;
          }(), d.ScopeSpans = function() {
            function i(o) {
              if (this.spans = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.scope = null, i.prototype.spans = p.emptyArray, i.prototype.schemaUrl = null, 
            i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.scope != null && Object.hasOwnProperty.call(e, "scope")) a.opentelemetry.proto.common.v1.InstrumentationScope.encode(e.scope, t.uint32(10).fork()).ldelim();
              if (e.spans != null && e.spans.length) for (var r = 0; r < e.spans.length; ++r) a.opentelemetry.proto.trace.v1.Span.encode(e.spans[r], t.uint32(18).fork()).ldelim();
              if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) t.uint32(26).string(e.schemaUrl);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.trace.v1.ScopeSpans;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    c.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.decode(e, e.uint32());
                    break;
                  }

                 case 2:
                  {
                    if (!(c.spans && c.spans.length)) c.spans = [];
                    c.spans.push(a.opentelemetry.proto.trace.v1.Span.decode(e, e.uint32()));
                    break;
                  }

                 case 3:
                  {
                    c.schemaUrl = e.string();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.scope != null && e.hasOwnProperty("scope")) {
                var t = a.opentelemetry.proto.common.v1.InstrumentationScope.verify(e.scope);
                if (t) return "scope." + t;
              }
              if (e.spans != null && e.hasOwnProperty("spans")) {
                if (!Array.isArray(e.spans)) return "spans: array expected";
                for (var r = 0; r < e.spans.length; ++r) {
                  var t = a.opentelemetry.proto.trace.v1.Span.verify(e.spans[r]);
                  if (t) return "spans." + t;
                }
              }
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                if (!p.isString(e.schemaUrl)) return "schemaUrl: string expected";
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.trace.v1.ScopeSpans) return e;
              var t = new a.opentelemetry.proto.trace.v1.ScopeSpans;
              if (e.scope != null) {
                if (typeof e.scope !== "object") throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.scope: object expected");
                t.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(e.scope);
              }
              if (e.spans) {
                if (!Array.isArray(e.spans)) throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: array expected");
                t.spans = [];
                for (var r = 0; r < e.spans.length; ++r) {
                  if (typeof e.spans[r] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: object expected");
                  t.spans[r] = a.opentelemetry.proto.trace.v1.Span.fromObject(e.spans[r]);
                }
              }
              if (e.schemaUrl != null) t.schemaUrl = String(e.schemaUrl);
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.spans = [];
              if (t.defaults) r.scope = null, r.schemaUrl = "";
              if (e.scope != null && e.hasOwnProperty("scope")) r.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.toObject(e.scope, t);
              if (e.spans && e.spans.length) {
                r.spans = [];
                for (var n = 0; n < e.spans.length; ++n) r.spans[n] = a.opentelemetry.proto.trace.v1.Span.toObject(e.spans[n], t);
              }
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) r.schemaUrl = e.schemaUrl;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.trace.v1.ScopeSpans";
            }, i;
          }(), d.Span = function() {
            function i(o) {
              if (this.attributes = [], this.events = [], this.links = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.traceId = null, i.prototype.spanId = null, i.prototype.traceState = null, 
            i.prototype.parentSpanId = null, i.prototype.flags = null, i.prototype.name = null, 
            i.prototype.kind = null, i.prototype.startTimeUnixNano = null, i.prototype.endTimeUnixNano = null, 
            i.prototype.attributes = p.emptyArray, i.prototype.droppedAttributesCount = null, 
            i.prototype.events = p.emptyArray, i.prototype.droppedEventsCount = null, i.prototype.links = p.emptyArray, 
            i.prototype.droppedLinksCount = null, i.prototype.status = null, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.traceId != null && Object.hasOwnProperty.call(e, "traceId")) t.uint32(10).bytes(e.traceId);
              if (e.spanId != null && Object.hasOwnProperty.call(e, "spanId")) t.uint32(18).bytes(e.spanId);
              if (e.traceState != null && Object.hasOwnProperty.call(e, "traceState")) t.uint32(26).string(e.traceState);
              if (e.parentSpanId != null && Object.hasOwnProperty.call(e, "parentSpanId")) t.uint32(34).bytes(e.parentSpanId);
              if (e.name != null && Object.hasOwnProperty.call(e, "name")) t.uint32(42).string(e.name);
              if (e.kind != null && Object.hasOwnProperty.call(e, "kind")) t.uint32(48).int32(e.kind);
              if (e.startTimeUnixNano != null && Object.hasOwnProperty.call(e, "startTimeUnixNano")) t.uint32(57).fixed64(e.startTimeUnixNano);
              if (e.endTimeUnixNano != null && Object.hasOwnProperty.call(e, "endTimeUnixNano")) t.uint32(65).fixed64(e.endTimeUnixNano);
              if (e.attributes != null && e.attributes.length) for (var r = 0; r < e.attributes.length; ++r) a.opentelemetry.proto.common.v1.KeyValue.encode(e.attributes[r], t.uint32(74).fork()).ldelim();
              if (e.droppedAttributesCount != null && Object.hasOwnProperty.call(e, "droppedAttributesCount")) t.uint32(80).uint32(e.droppedAttributesCount);
              if (e.events != null && e.events.length) for (var r = 0; r < e.events.length; ++r) a.opentelemetry.proto.trace.v1.Span.Event.encode(e.events[r], t.uint32(90).fork()).ldelim();
              if (e.droppedEventsCount != null && Object.hasOwnProperty.call(e, "droppedEventsCount")) t.uint32(96).uint32(e.droppedEventsCount);
              if (e.links != null && e.links.length) for (var r = 0; r < e.links.length; ++r) a.opentelemetry.proto.trace.v1.Span.Link.encode(e.links[r], t.uint32(106).fork()).ldelim();
              if (e.droppedLinksCount != null && Object.hasOwnProperty.call(e, "droppedLinksCount")) t.uint32(112).uint32(e.droppedLinksCount);
              if (e.status != null && Object.hasOwnProperty.call(e, "status")) a.opentelemetry.proto.trace.v1.Status.encode(e.status, t.uint32(122).fork()).ldelim();
              if (e.flags != null && Object.hasOwnProperty.call(e, "flags")) t.uint32(133).fixed32(e.flags);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.trace.v1.Span;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    c.traceId = e.bytes();
                    break;
                  }

                 case 2:
                  {
                    c.spanId = e.bytes();
                    break;
                  }

                 case 3:
                  {
                    c.traceState = e.string();
                    break;
                  }

                 case 4:
                  {
                    c.parentSpanId = e.bytes();
                    break;
                  }

                 case 16:
                  {
                    c.flags = e.fixed32();
                    break;
                  }

                 case 5:
                  {
                    c.name = e.string();
                    break;
                  }

                 case 6:
                  {
                    c.kind = e.int32();
                    break;
                  }

                 case 7:
                  {
                    c.startTimeUnixNano = e.fixed64();
                    break;
                  }

                 case 8:
                  {
                    c.endTimeUnixNano = e.fixed64();
                    break;
                  }

                 case 9:
                  {
                    if (!(c.attributes && c.attributes.length)) c.attributes = [];
                    c.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(e, e.uint32()));
                    break;
                  }

                 case 10:
                  {
                    c.droppedAttributesCount = e.uint32();
                    break;
                  }

                 case 11:
                  {
                    if (!(c.events && c.events.length)) c.events = [];
                    c.events.push(a.opentelemetry.proto.trace.v1.Span.Event.decode(e, e.uint32()));
                    break;
                  }

                 case 12:
                  {
                    c.droppedEventsCount = e.uint32();
                    break;
                  }

                 case 13:
                  {
                    if (!(c.links && c.links.length)) c.links = [];
                    c.links.push(a.opentelemetry.proto.trace.v1.Span.Link.decode(e, e.uint32()));
                    break;
                  }

                 case 14:
                  {
                    c.droppedLinksCount = e.uint32();
                    break;
                  }

                 case 15:
                  {
                    c.status = a.opentelemetry.proto.trace.v1.Status.decode(e, e.uint32());
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.traceId != null && e.hasOwnProperty("traceId")) {
                if (!(e.traceId && typeof e.traceId.length === "number" || p.isString(e.traceId))) return "traceId: buffer expected";
              }
              if (e.spanId != null && e.hasOwnProperty("spanId")) {
                if (!(e.spanId && typeof e.spanId.length === "number" || p.isString(e.spanId))) return "spanId: buffer expected";
              }
              if (e.traceState != null && e.hasOwnProperty("traceState")) {
                if (!p.isString(e.traceState)) return "traceState: string expected";
              }
              if (e.parentSpanId != null && e.hasOwnProperty("parentSpanId")) {
                if (!(e.parentSpanId && typeof e.parentSpanId.length === "number" || p.isString(e.parentSpanId))) return "parentSpanId: buffer expected";
              }
              if (e.flags != null && e.hasOwnProperty("flags")) {
                if (!p.isInteger(e.flags)) return "flags: integer expected";
              }
              if (e.name != null && e.hasOwnProperty("name")) {
                if (!p.isString(e.name)) return "name: string expected";
              }
              if (e.kind != null && e.hasOwnProperty("kind")) switch (e.kind) {
               default:
                return "kind: enum value expected";

               case 0:
               case 1:
               case 2:
               case 3:
               case 4:
               case 5:
                break;
              }
              if (e.startTimeUnixNano != null && e.hasOwnProperty("startTimeUnixNano")) {
                if (!p.isInteger(e.startTimeUnixNano) && !(e.startTimeUnixNano && p.isInteger(e.startTimeUnixNano.low) && p.isInteger(e.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected";
              }
              if (e.endTimeUnixNano != null && e.hasOwnProperty("endTimeUnixNano")) {
                if (!p.isInteger(e.endTimeUnixNano) && !(e.endTimeUnixNano && p.isInteger(e.endTimeUnixNano.low) && p.isInteger(e.endTimeUnixNano.high))) return "endTimeUnixNano: integer|Long expected";
              }
              if (e.attributes != null && e.hasOwnProperty("attributes")) {
                if (!Array.isArray(e.attributes)) return "attributes: array expected";
                for (var t = 0; t < e.attributes.length; ++t) {
                  var r = a.opentelemetry.proto.common.v1.KeyValue.verify(e.attributes[t]);
                  if (r) return "attributes." + r;
                }
              }
              if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) {
                if (!p.isInteger(e.droppedAttributesCount)) return "droppedAttributesCount: integer expected";
              }
              if (e.events != null && e.hasOwnProperty("events")) {
                if (!Array.isArray(e.events)) return "events: array expected";
                for (var t = 0; t < e.events.length; ++t) {
                  var r = a.opentelemetry.proto.trace.v1.Span.Event.verify(e.events[t]);
                  if (r) return "events." + r;
                }
              }
              if (e.droppedEventsCount != null && e.hasOwnProperty("droppedEventsCount")) {
                if (!p.isInteger(e.droppedEventsCount)) return "droppedEventsCount: integer expected";
              }
              if (e.links != null && e.hasOwnProperty("links")) {
                if (!Array.isArray(e.links)) return "links: array expected";
                for (var t = 0; t < e.links.length; ++t) {
                  var r = a.opentelemetry.proto.trace.v1.Span.Link.verify(e.links[t]);
                  if (r) return "links." + r;
                }
              }
              if (e.droppedLinksCount != null && e.hasOwnProperty("droppedLinksCount")) {
                if (!p.isInteger(e.droppedLinksCount)) return "droppedLinksCount: integer expected";
              }
              if (e.status != null && e.hasOwnProperty("status")) {
                var r = a.opentelemetry.proto.trace.v1.Status.verify(e.status);
                if (r) return "status." + r;
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.trace.v1.Span) return e;
              var t = new a.opentelemetry.proto.trace.v1.Span;
              if (e.traceId != null) {
                if (typeof e.traceId === "string") p.base64.decode(e.traceId, t.traceId = p.newBuffer(p.base64.length(e.traceId)), 0); else if (e.traceId.length >= 0) t.traceId = e.traceId;
              }
              if (e.spanId != null) {
                if (typeof e.spanId === "string") p.base64.decode(e.spanId, t.spanId = p.newBuffer(p.base64.length(e.spanId)), 0); else if (e.spanId.length >= 0) t.spanId = e.spanId;
              }
              if (e.traceState != null) t.traceState = String(e.traceState);
              if (e.parentSpanId != null) {
                if (typeof e.parentSpanId === "string") p.base64.decode(e.parentSpanId, t.parentSpanId = p.newBuffer(p.base64.length(e.parentSpanId)), 0); else if (e.parentSpanId.length >= 0) t.parentSpanId = e.parentSpanId;
              }
              if (e.flags != null) t.flags = e.flags >>> 0;
              if (e.name != null) t.name = String(e.name);
              switch (e.kind) {
               default:
                if (typeof e.kind === "number") {
                  t.kind = e.kind;
                  break;
                }
                break;

               case "SPAN_KIND_UNSPECIFIED":
               case 0:
                t.kind = 0;
                break;

               case "SPAN_KIND_INTERNAL":
               case 1:
                t.kind = 1;
                break;

               case "SPAN_KIND_SERVER":
               case 2:
                t.kind = 2;
                break;

               case "SPAN_KIND_CLIENT":
               case 3:
                t.kind = 3;
                break;

               case "SPAN_KIND_PRODUCER":
               case 4:
                t.kind = 4;
                break;

               case "SPAN_KIND_CONSUMER":
               case 5:
                t.kind = 5;
                break;
              }
              if (e.startTimeUnixNano != null) {
                if (p.Long) (t.startTimeUnixNano = p.Long.fromValue(e.startTimeUnixNano)).unsigned = !1; else if (typeof e.startTimeUnixNano === "string") t.startTimeUnixNano = parseInt(e.startTimeUnixNano, 10); else if (typeof e.startTimeUnixNano === "number") t.startTimeUnixNano = e.startTimeUnixNano; else if (typeof e.startTimeUnixNano === "object") t.startTimeUnixNano = new p.LongBits(e.startTimeUnixNano.low >>> 0, e.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (e.endTimeUnixNano != null) {
                if (p.Long) (t.endTimeUnixNano = p.Long.fromValue(e.endTimeUnixNano)).unsigned = !1; else if (typeof e.endTimeUnixNano === "string") t.endTimeUnixNano = parseInt(e.endTimeUnixNano, 10); else if (typeof e.endTimeUnixNano === "number") t.endTimeUnixNano = e.endTimeUnixNano; else if (typeof e.endTimeUnixNano === "object") t.endTimeUnixNano = new p.LongBits(e.endTimeUnixNano.low >>> 0, e.endTimeUnixNano.high >>> 0).toNumber();
              }
              if (e.attributes) {
                if (!Array.isArray(e.attributes)) throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: array expected");
                t.attributes = [];
                for (var r = 0; r < e.attributes.length; ++r) {
                  if (typeof e.attributes[r] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: object expected");
                  t.attributes[r] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(e.attributes[r]);
                }
              }
              if (e.droppedAttributesCount != null) t.droppedAttributesCount = e.droppedAttributesCount >>> 0;
              if (e.events) {
                if (!Array.isArray(e.events)) throw TypeError(".opentelemetry.proto.trace.v1.Span.events: array expected");
                t.events = [];
                for (var r = 0; r < e.events.length; ++r) {
                  if (typeof e.events[r] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.events: object expected");
                  t.events[r] = a.opentelemetry.proto.trace.v1.Span.Event.fromObject(e.events[r]);
                }
              }
              if (e.droppedEventsCount != null) t.droppedEventsCount = e.droppedEventsCount >>> 0;
              if (e.links) {
                if (!Array.isArray(e.links)) throw TypeError(".opentelemetry.proto.trace.v1.Span.links: array expected");
                t.links = [];
                for (var r = 0; r < e.links.length; ++r) {
                  if (typeof e.links[r] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.links: object expected");
                  t.links[r] = a.opentelemetry.proto.trace.v1.Span.Link.fromObject(e.links[r]);
                }
              }
              if (e.droppedLinksCount != null) t.droppedLinksCount = e.droppedLinksCount >>> 0;
              if (e.status != null) {
                if (typeof e.status !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.status: object expected");
                t.status = a.opentelemetry.proto.trace.v1.Status.fromObject(e.status);
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.attributes = [], r.events = [], r.links = [];
              if (t.defaults) {
                if (t.bytes === String) r.traceId = ""; else if (r.traceId = [], t.bytes !== Array) r.traceId = p.newBuffer(r.traceId);
                if (t.bytes === String) r.spanId = ""; else if (r.spanId = [], t.bytes !== Array) r.spanId = p.newBuffer(r.spanId);
                if (r.traceState = "", t.bytes === String) r.parentSpanId = ""; else if (r.parentSpanId = [], 
                t.bytes !== Array) r.parentSpanId = p.newBuffer(r.parentSpanId);
                if (r.name = "", r.kind = t.enums === String ? "SPAN_KIND_UNSPECIFIED" : 0, p.Long) {
                  var n = new p.Long(0, 0, !1);
                  r.startTimeUnixNano = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                } else r.startTimeUnixNano = t.longs === String ? "0" : 0;
                if (p.Long) {
                  var n = new p.Long(0, 0, !1);
                  r.endTimeUnixNano = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                } else r.endTimeUnixNano = t.longs === String ? "0" : 0;
                r.droppedAttributesCount = 0, r.droppedEventsCount = 0, r.droppedLinksCount = 0, 
                r.status = null, r.flags = 0;
              }
              if (e.traceId != null && e.hasOwnProperty("traceId")) r.traceId = t.bytes === String ? p.base64.encode(e.traceId, 0, e.traceId.length) : t.bytes === Array ? Array.prototype.slice.call(e.traceId) : e.traceId;
              if (e.spanId != null && e.hasOwnProperty("spanId")) r.spanId = t.bytes === String ? p.base64.encode(e.spanId, 0, e.spanId.length) : t.bytes === Array ? Array.prototype.slice.call(e.spanId) : e.spanId;
              if (e.traceState != null && e.hasOwnProperty("traceState")) r.traceState = e.traceState;
              if (e.parentSpanId != null && e.hasOwnProperty("parentSpanId")) r.parentSpanId = t.bytes === String ? p.base64.encode(e.parentSpanId, 0, e.parentSpanId.length) : t.bytes === Array ? Array.prototype.slice.call(e.parentSpanId) : e.parentSpanId;
              if (e.name != null && e.hasOwnProperty("name")) r.name = e.name;
              if (e.kind != null && e.hasOwnProperty("kind")) r.kind = t.enums === String ? a.opentelemetry.proto.trace.v1.Span.SpanKind[e.kind] === void 0 ? e.kind : a.opentelemetry.proto.trace.v1.Span.SpanKind[e.kind] : e.kind;
              if (e.startTimeUnixNano != null && e.hasOwnProperty("startTimeUnixNano")) if (typeof e.startTimeUnixNano === "number") r.startTimeUnixNano = t.longs === String ? String(e.startTimeUnixNano) : e.startTimeUnixNano; else r.startTimeUnixNano = t.longs === String ? p.Long.prototype.toString.call(e.startTimeUnixNano) : t.longs === Number ? new p.LongBits(e.startTimeUnixNano.low >>> 0, e.startTimeUnixNano.high >>> 0).toNumber() : e.startTimeUnixNano;
              if (e.endTimeUnixNano != null && e.hasOwnProperty("endTimeUnixNano")) if (typeof e.endTimeUnixNano === "number") r.endTimeUnixNano = t.longs === String ? String(e.endTimeUnixNano) : e.endTimeUnixNano; else r.endTimeUnixNano = t.longs === String ? p.Long.prototype.toString.call(e.endTimeUnixNano) : t.longs === Number ? new p.LongBits(e.endTimeUnixNano.low >>> 0, e.endTimeUnixNano.high >>> 0).toNumber() : e.endTimeUnixNano;
              if (e.attributes && e.attributes.length) {
                r.attributes = [];
                for (var c = 0; c < e.attributes.length; ++c) r.attributes[c] = a.opentelemetry.proto.common.v1.KeyValue.toObject(e.attributes[c], t);
              }
              if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) r.droppedAttributesCount = e.droppedAttributesCount;
              if (e.events && e.events.length) {
                r.events = [];
                for (var c = 0; c < e.events.length; ++c) r.events[c] = a.opentelemetry.proto.trace.v1.Span.Event.toObject(e.events[c], t);
              }
              if (e.droppedEventsCount != null && e.hasOwnProperty("droppedEventsCount")) r.droppedEventsCount = e.droppedEventsCount;
              if (e.links && e.links.length) {
                r.links = [];
                for (var c = 0; c < e.links.length; ++c) r.links[c] = a.opentelemetry.proto.trace.v1.Span.Link.toObject(e.links[c], t);
              }
              if (e.droppedLinksCount != null && e.hasOwnProperty("droppedLinksCount")) r.droppedLinksCount = e.droppedLinksCount;
              if (e.status != null && e.hasOwnProperty("status")) r.status = a.opentelemetry.proto.trace.v1.Status.toObject(e.status, t);
              if (e.flags != null && e.hasOwnProperty("flags")) r.flags = e.flags;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.trace.v1.Span";
            }, i.SpanKind = function() {
              var o = {}, e = Object.create(o);
              return e[o[0] = "SPAN_KIND_UNSPECIFIED"] = 0, e[o[1] = "SPAN_KIND_INTERNAL"] = 1, 
              e[o[2] = "SPAN_KIND_SERVER"] = 2, e[o[3] = "SPAN_KIND_CLIENT"] = 3, e[o[4] = "SPAN_KIND_PRODUCER"] = 4, 
              e[o[5] = "SPAN_KIND_CONSUMER"] = 5, e;
            }(), i.Event = function() {
              function o(e) {
                if (this.attributes = [], e) {
                  for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
                }
              }
              return o.prototype.timeUnixNano = null, o.prototype.name = null, o.prototype.attributes = p.emptyArray, 
              o.prototype.droppedAttributesCount = null, o.create = function(t) {
                return new o(t);
              }, o.encode = function(t, r) {
                if (!r) r = g.create();
                if (t.timeUnixNano != null && Object.hasOwnProperty.call(t, "timeUnixNano")) r.uint32(9).fixed64(t.timeUnixNano);
                if (t.name != null && Object.hasOwnProperty.call(t, "name")) r.uint32(18).string(t.name);
                if (t.attributes != null && t.attributes.length) for (var n = 0; n < t.attributes.length; ++n) a.opentelemetry.proto.common.v1.KeyValue.encode(t.attributes[n], r.uint32(26).fork()).ldelim();
                if (t.droppedAttributesCount != null && Object.hasOwnProperty.call(t, "droppedAttributesCount")) r.uint32(32).uint32(t.droppedAttributesCount);
                return r;
              }, o.encodeDelimited = function(t, r) {
                return this.encode(t, r).ldelim();
              }, o.decode = function(t, r, n) {
                if (!(t instanceof h)) t = h.create(t);
                var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.trace.v1.Span.Event;
                while (t.pos < c) {
                  var m = t.uint32();
                  if (m === n) break;
                  switch (m >>> 3) {
                   case 1:
                    {
                      s.timeUnixNano = t.fixed64();
                      break;
                    }

                   case 2:
                    {
                      s.name = t.string();
                      break;
                    }

                   case 3:
                    {
                      if (!(s.attributes && s.attributes.length)) s.attributes = [];
                      s.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                      break;
                    }

                   case 4:
                    {
                      s.droppedAttributesCount = t.uint32();
                      break;
                    }

                   default:
                    t.skipType(m & 7);
                    break;
                  }
                }
                return s;
              }, o.decodeDelimited = function(t) {
                if (!(t instanceof h)) t = new h(t);
                return this.decode(t, t.uint32());
              }, o.verify = function(t) {
                if (typeof t !== "object" || t === null) return "object expected";
                if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                  if (!p.isInteger(t.timeUnixNano) && !(t.timeUnixNano && p.isInteger(t.timeUnixNano.low) && p.isInteger(t.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
                }
                if (t.name != null && t.hasOwnProperty("name")) {
                  if (!p.isString(t.name)) return "name: string expected";
                }
                if (t.attributes != null && t.hasOwnProperty("attributes")) {
                  if (!Array.isArray(t.attributes)) return "attributes: array expected";
                  for (var r = 0; r < t.attributes.length; ++r) {
                    var n = a.opentelemetry.proto.common.v1.KeyValue.verify(t.attributes[r]);
                    if (n) return "attributes." + n;
                  }
                }
                if (t.droppedAttributesCount != null && t.hasOwnProperty("droppedAttributesCount")) {
                  if (!p.isInteger(t.droppedAttributesCount)) return "droppedAttributesCount: integer expected";
                }
                return null;
              }, o.fromObject = function(t) {
                if (t instanceof a.opentelemetry.proto.trace.v1.Span.Event) return t;
                var r = new a.opentelemetry.proto.trace.v1.Span.Event;
                if (t.timeUnixNano != null) {
                  if (p.Long) (r.timeUnixNano = p.Long.fromValue(t.timeUnixNano)).unsigned = !1; else if (typeof t.timeUnixNano === "string") r.timeUnixNano = parseInt(t.timeUnixNano, 10); else if (typeof t.timeUnixNano === "number") r.timeUnixNano = t.timeUnixNano; else if (typeof t.timeUnixNano === "object") r.timeUnixNano = new p.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber();
                }
                if (t.name != null) r.name = String(t.name);
                if (t.attributes) {
                  if (!Array.isArray(t.attributes)) throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: array expected");
                  r.attributes = [];
                  for (var n = 0; n < t.attributes.length; ++n) {
                    if (typeof t.attributes[n] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: object expected");
                    r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.attributes[n]);
                  }
                }
                if (t.droppedAttributesCount != null) r.droppedAttributesCount = t.droppedAttributesCount >>> 0;
                return r;
              }, o.toObject = function(t, r) {
                if (!r) r = {};
                var n = {};
                if (r.arrays || r.defaults) n.attributes = [];
                if (r.defaults) {
                  if (p.Long) {
                    var c = new p.Long(0, 0, !1);
                    n.timeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                  } else n.timeUnixNano = r.longs === String ? "0" : 0;
                  n.name = "", n.droppedAttributesCount = 0;
                }
                if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) if (typeof t.timeUnixNano === "number") n.timeUnixNano = r.longs === String ? String(t.timeUnixNano) : t.timeUnixNano; else n.timeUnixNano = r.longs === String ? p.Long.prototype.toString.call(t.timeUnixNano) : r.longs === Number ? new p.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber() : t.timeUnixNano;
                if (t.name != null && t.hasOwnProperty("name")) n.name = t.name;
                if (t.attributes && t.attributes.length) {
                  n.attributes = [];
                  for (var s = 0; s < t.attributes.length; ++s) n.attributes[s] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.attributes[s], r);
                }
                if (t.droppedAttributesCount != null && t.hasOwnProperty("droppedAttributesCount")) n.droppedAttributesCount = t.droppedAttributesCount;
                return n;
              }, o.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, o.getTypeUrl = function(t) {
                if (t === void 0) t = "type.googleapis.com";
                return t + "/opentelemetry.proto.trace.v1.Span.Event";
              }, o;
            }(), i.Link = function() {
              function o(e) {
                if (this.attributes = [], e) {
                  for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
                }
              }
              return o.prototype.traceId = null, o.prototype.spanId = null, o.prototype.traceState = null, 
              o.prototype.attributes = p.emptyArray, o.prototype.droppedAttributesCount = null, 
              o.prototype.flags = null, o.create = function(t) {
                return new o(t);
              }, o.encode = function(t, r) {
                if (!r) r = g.create();
                if (t.traceId != null && Object.hasOwnProperty.call(t, "traceId")) r.uint32(10).bytes(t.traceId);
                if (t.spanId != null && Object.hasOwnProperty.call(t, "spanId")) r.uint32(18).bytes(t.spanId);
                if (t.traceState != null && Object.hasOwnProperty.call(t, "traceState")) r.uint32(26).string(t.traceState);
                if (t.attributes != null && t.attributes.length) for (var n = 0; n < t.attributes.length; ++n) a.opentelemetry.proto.common.v1.KeyValue.encode(t.attributes[n], r.uint32(34).fork()).ldelim();
                if (t.droppedAttributesCount != null && Object.hasOwnProperty.call(t, "droppedAttributesCount")) r.uint32(40).uint32(t.droppedAttributesCount);
                if (t.flags != null && Object.hasOwnProperty.call(t, "flags")) r.uint32(53).fixed32(t.flags);
                return r;
              }, o.encodeDelimited = function(t, r) {
                return this.encode(t, r).ldelim();
              }, o.decode = function(t, r, n) {
                if (!(t instanceof h)) t = h.create(t);
                var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.trace.v1.Span.Link;
                while (t.pos < c) {
                  var m = t.uint32();
                  if (m === n) break;
                  switch (m >>> 3) {
                   case 1:
                    {
                      s.traceId = t.bytes();
                      break;
                    }

                   case 2:
                    {
                      s.spanId = t.bytes();
                      break;
                    }

                   case 3:
                    {
                      s.traceState = t.string();
                      break;
                    }

                   case 4:
                    {
                      if (!(s.attributes && s.attributes.length)) s.attributes = [];
                      s.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                      break;
                    }

                   case 5:
                    {
                      s.droppedAttributesCount = t.uint32();
                      break;
                    }

                   case 6:
                    {
                      s.flags = t.fixed32();
                      break;
                    }

                   default:
                    t.skipType(m & 7);
                    break;
                  }
                }
                return s;
              }, o.decodeDelimited = function(t) {
                if (!(t instanceof h)) t = new h(t);
                return this.decode(t, t.uint32());
              }, o.verify = function(t) {
                if (typeof t !== "object" || t === null) return "object expected";
                if (t.traceId != null && t.hasOwnProperty("traceId")) {
                  if (!(t.traceId && typeof t.traceId.length === "number" || p.isString(t.traceId))) return "traceId: buffer expected";
                }
                if (t.spanId != null && t.hasOwnProperty("spanId")) {
                  if (!(t.spanId && typeof t.spanId.length === "number" || p.isString(t.spanId))) return "spanId: buffer expected";
                }
                if (t.traceState != null && t.hasOwnProperty("traceState")) {
                  if (!p.isString(t.traceState)) return "traceState: string expected";
                }
                if (t.attributes != null && t.hasOwnProperty("attributes")) {
                  if (!Array.isArray(t.attributes)) return "attributes: array expected";
                  for (var r = 0; r < t.attributes.length; ++r) {
                    var n = a.opentelemetry.proto.common.v1.KeyValue.verify(t.attributes[r]);
                    if (n) return "attributes." + n;
                  }
                }
                if (t.droppedAttributesCount != null && t.hasOwnProperty("droppedAttributesCount")) {
                  if (!p.isInteger(t.droppedAttributesCount)) return "droppedAttributesCount: integer expected";
                }
                if (t.flags != null && t.hasOwnProperty("flags")) {
                  if (!p.isInteger(t.flags)) return "flags: integer expected";
                }
                return null;
              }, o.fromObject = function(t) {
                if (t instanceof a.opentelemetry.proto.trace.v1.Span.Link) return t;
                var r = new a.opentelemetry.proto.trace.v1.Span.Link;
                if (t.traceId != null) {
                  if (typeof t.traceId === "string") p.base64.decode(t.traceId, r.traceId = p.newBuffer(p.base64.length(t.traceId)), 0); else if (t.traceId.length >= 0) r.traceId = t.traceId;
                }
                if (t.spanId != null) {
                  if (typeof t.spanId === "string") p.base64.decode(t.spanId, r.spanId = p.newBuffer(p.base64.length(t.spanId)), 0); else if (t.spanId.length >= 0) r.spanId = t.spanId;
                }
                if (t.traceState != null) r.traceState = String(t.traceState);
                if (t.attributes) {
                  if (!Array.isArray(t.attributes)) throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: array expected");
                  r.attributes = [];
                  for (var n = 0; n < t.attributes.length; ++n) {
                    if (typeof t.attributes[n] !== "object") throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: object expected");
                    r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.attributes[n]);
                  }
                }
                if (t.droppedAttributesCount != null) r.droppedAttributesCount = t.droppedAttributesCount >>> 0;
                if (t.flags != null) r.flags = t.flags >>> 0;
                return r;
              }, o.toObject = function(t, r) {
                if (!r) r = {};
                var n = {};
                if (r.arrays || r.defaults) n.attributes = [];
                if (r.defaults) {
                  if (r.bytes === String) n.traceId = ""; else if (n.traceId = [], r.bytes !== Array) n.traceId = p.newBuffer(n.traceId);
                  if (r.bytes === String) n.spanId = ""; else if (n.spanId = [], r.bytes !== Array) n.spanId = p.newBuffer(n.spanId);
                  n.traceState = "", n.droppedAttributesCount = 0, n.flags = 0;
                }
                if (t.traceId != null && t.hasOwnProperty("traceId")) n.traceId = r.bytes === String ? p.base64.encode(t.traceId, 0, t.traceId.length) : r.bytes === Array ? Array.prototype.slice.call(t.traceId) : t.traceId;
                if (t.spanId != null && t.hasOwnProperty("spanId")) n.spanId = r.bytes === String ? p.base64.encode(t.spanId, 0, t.spanId.length) : r.bytes === Array ? Array.prototype.slice.call(t.spanId) : t.spanId;
                if (t.traceState != null && t.hasOwnProperty("traceState")) n.traceState = t.traceState;
                if (t.attributes && t.attributes.length) {
                  n.attributes = [];
                  for (var c = 0; c < t.attributes.length; ++c) n.attributes[c] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.attributes[c], r);
                }
                if (t.droppedAttributesCount != null && t.hasOwnProperty("droppedAttributesCount")) n.droppedAttributesCount = t.droppedAttributesCount;
                if (t.flags != null && t.hasOwnProperty("flags")) n.flags = t.flags;
                return n;
              }, o.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, o.getTypeUrl = function(t) {
                if (t === void 0) t = "type.googleapis.com";
                return t + "/opentelemetry.proto.trace.v1.Span.Link";
              }, o;
            }(), i;
          }(), d.Status = function() {
            function i(o) {
              if (o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.message = null, i.prototype.code = null, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.message != null && Object.hasOwnProperty.call(e, "message")) t.uint32(18).string(e.message);
              if (e.code != null && Object.hasOwnProperty.call(e, "code")) t.uint32(24).int32(e.code);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.trace.v1.Status;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 2:
                  {
                    c.message = e.string();
                    break;
                  }

                 case 3:
                  {
                    c.code = e.int32();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.message != null && e.hasOwnProperty("message")) {
                if (!p.isString(e.message)) return "message: string expected";
              }
              if (e.code != null && e.hasOwnProperty("code")) switch (e.code) {
               default:
                return "code: enum value expected";

               case 0:
               case 1:
               case 2:
                break;
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.trace.v1.Status) return e;
              var t = new a.opentelemetry.proto.trace.v1.Status;
              if (e.message != null) t.message = String(e.message);
              switch (e.code) {
               default:
                if (typeof e.code === "number") {
                  t.code = e.code;
                  break;
                }
                break;

               case "STATUS_CODE_UNSET":
               case 0:
                t.code = 0;
                break;

               case "STATUS_CODE_OK":
               case 1:
                t.code = 1;
                break;

               case "STATUS_CODE_ERROR":
               case 2:
                t.code = 2;
                break;
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.defaults) r.message = "", r.code = t.enums === String ? "STATUS_CODE_UNSET" : 0;
              if (e.message != null && e.hasOwnProperty("message")) r.message = e.message;
              if (e.code != null && e.hasOwnProperty("code")) r.code = t.enums === String ? a.opentelemetry.proto.trace.v1.Status.StatusCode[e.code] === void 0 ? e.code : a.opentelemetry.proto.trace.v1.Status.StatusCode[e.code] : e.code;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.trace.v1.Status";
            }, i.StatusCode = function() {
              var o = {}, e = Object.create(o);
              return e[o[0] = "STATUS_CODE_UNSET"] = 0, e[o[1] = "STATUS_CODE_OK"] = 1, e[o[2] = "STATUS_CODE_ERROR"] = 2, 
              e;
            }(), i;
          }(), d.SpanFlags = function() {
            var i = {}, o = Object.create(i);
            return o[i[0] = "SPAN_FLAGS_DO_NOT_USE"] = 0, o[i[255] = "SPAN_FLAGS_TRACE_FLAGS_MASK"] = 255, 
            o[i[256] = "SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK"] = 256, o[i[512] = "SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK"] = 512, 
            o;
          }(), d;
        }(), f;
      }(), u.collector = function() {
        var f = {};
        return f.trace = function() {
          var d = {};
          return d.v1 = function() {
            var i = {};
            return i.TraceService = function() {
              function o(e, t, r) {
                S.rpc.Service.call(this, e, t, r);
              }
              return (o.prototype = Object.create(S.rpc.Service.prototype)).constructor = o, o.create = function(t, r, n) {
                return new this(t, r, n);
              }, Object.defineProperty(o.prototype.export = function e(t, r) {
                return this.rpcCall(e, a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest, a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse, t, r);
              }, "name", {
                value: "Export"
              }), o;
            }(), i.ExportTraceServiceRequest = function() {
              function o(e) {
                if (this.resourceSpans = [], e) {
                  for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
                }
              }
              return o.prototype.resourceSpans = p.emptyArray, o.create = function(t) {
                return new o(t);
              }, o.encode = function(t, r) {
                if (!r) r = g.create();
                if (t.resourceSpans != null && t.resourceSpans.length) for (var n = 0; n < t.resourceSpans.length; ++n) a.opentelemetry.proto.trace.v1.ResourceSpans.encode(t.resourceSpans[n], r.uint32(10).fork()).ldelim();
                return r;
              }, o.encodeDelimited = function(t, r) {
                return this.encode(t, r).ldelim();
              }, o.decode = function(t, r, n) {
                if (!(t instanceof h)) t = h.create(t);
                var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
                while (t.pos < c) {
                  var m = t.uint32();
                  if (m === n) break;
                  switch (m >>> 3) {
                   case 1:
                    {
                      if (!(s.resourceSpans && s.resourceSpans.length)) s.resourceSpans = [];
                      s.resourceSpans.push(a.opentelemetry.proto.trace.v1.ResourceSpans.decode(t, t.uint32()));
                      break;
                    }

                   default:
                    t.skipType(m & 7);
                    break;
                  }
                }
                return s;
              }, o.decodeDelimited = function(t) {
                if (!(t instanceof h)) t = new h(t);
                return this.decode(t, t.uint32());
              }, o.verify = function(t) {
                if (typeof t !== "object" || t === null) return "object expected";
                if (t.resourceSpans != null && t.hasOwnProperty("resourceSpans")) {
                  if (!Array.isArray(t.resourceSpans)) return "resourceSpans: array expected";
                  for (var r = 0; r < t.resourceSpans.length; ++r) {
                    var n = a.opentelemetry.proto.trace.v1.ResourceSpans.verify(t.resourceSpans[r]);
                    if (n) return "resourceSpans." + n;
                  }
                }
                return null;
              }, o.fromObject = function(t) {
                if (t instanceof a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest) return t;
                var r = new a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
                if (t.resourceSpans) {
                  if (!Array.isArray(t.resourceSpans)) throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: array expected");
                  r.resourceSpans = [];
                  for (var n = 0; n < t.resourceSpans.length; ++n) {
                    if (typeof t.resourceSpans[n] !== "object") throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: object expected");
                    r.resourceSpans[n] = a.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(t.resourceSpans[n]);
                  }
                }
                return r;
              }, o.toObject = function(t, r) {
                if (!r) r = {};
                var n = {};
                if (r.arrays || r.defaults) n.resourceSpans = [];
                if (t.resourceSpans && t.resourceSpans.length) {
                  n.resourceSpans = [];
                  for (var c = 0; c < t.resourceSpans.length; ++c) n.resourceSpans[c] = a.opentelemetry.proto.trace.v1.ResourceSpans.toObject(t.resourceSpans[c], r);
                }
                return n;
              }, o.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, o.getTypeUrl = function(t) {
                if (t === void 0) t = "type.googleapis.com";
                return t + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest";
              }, o;
            }(), i.ExportTraceServiceResponse = function() {
              function o(e) {
                if (e) {
                  for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
                }
              }
              return o.prototype.partialSuccess = null, o.create = function(t) {
                return new o(t);
              }, o.encode = function(t, r) {
                if (!r) r = g.create();
                if (t.partialSuccess != null && Object.hasOwnProperty.call(t, "partialSuccess")) a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.encode(t.partialSuccess, r.uint32(10).fork()).ldelim();
                return r;
              }, o.encodeDelimited = function(t, r) {
                return this.encode(t, r).ldelim();
              }, o.decode = function(t, r, n) {
                if (!(t instanceof h)) t = h.create(t);
                var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;
                while (t.pos < c) {
                  var m = t.uint32();
                  if (m === n) break;
                  switch (m >>> 3) {
                   case 1:
                    {
                      s.partialSuccess = a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.decode(t, t.uint32());
                      break;
                    }

                   default:
                    t.skipType(m & 7);
                    break;
                  }
                }
                return s;
              }, o.decodeDelimited = function(t) {
                if (!(t instanceof h)) t = new h(t);
                return this.decode(t, t.uint32());
              }, o.verify = function(t) {
                if (typeof t !== "object" || t === null) return "object expected";
                if (t.partialSuccess != null && t.hasOwnProperty("partialSuccess")) {
                  var r = a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.verify(t.partialSuccess);
                  if (r) return "partialSuccess." + r;
                }
                return null;
              }, o.fromObject = function(t) {
                if (t instanceof a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse) return t;
                var r = new a.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;
                if (t.partialSuccess != null) {
                  if (typeof t.partialSuccess !== "object") throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.partialSuccess: object expected");
                  r.partialSuccess = a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.fromObject(t.partialSuccess);
                }
                return r;
              }, o.toObject = function(t, r) {
                if (!r) r = {};
                var n = {};
                if (r.defaults) n.partialSuccess = null;
                if (t.partialSuccess != null && t.hasOwnProperty("partialSuccess")) n.partialSuccess = a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.toObject(t.partialSuccess, r);
                return n;
              }, o.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, o.getTypeUrl = function(t) {
                if (t === void 0) t = "type.googleapis.com";
                return t + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse";
              }, o;
            }(), i.ExportTracePartialSuccess = function() {
              function o(e) {
                if (e) {
                  for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
                }
              }
              return o.prototype.rejectedSpans = null, o.prototype.errorMessage = null, o.create = function(t) {
                return new o(t);
              }, o.encode = function(t, r) {
                if (!r) r = g.create();
                if (t.rejectedSpans != null && Object.hasOwnProperty.call(t, "rejectedSpans")) r.uint32(8).int64(t.rejectedSpans);
                if (t.errorMessage != null && Object.hasOwnProperty.call(t, "errorMessage")) r.uint32(18).string(t.errorMessage);
                return r;
              }, o.encodeDelimited = function(t, r) {
                return this.encode(t, r).ldelim();
              }, o.decode = function(t, r, n) {
                if (!(t instanceof h)) t = h.create(t);
                var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess;
                while (t.pos < c) {
                  var m = t.uint32();
                  if (m === n) break;
                  switch (m >>> 3) {
                   case 1:
                    {
                      s.rejectedSpans = t.int64();
                      break;
                    }

                   case 2:
                    {
                      s.errorMessage = t.string();
                      break;
                    }

                   default:
                    t.skipType(m & 7);
                    break;
                  }
                }
                return s;
              }, o.decodeDelimited = function(t) {
                if (!(t instanceof h)) t = new h(t);
                return this.decode(t, t.uint32());
              }, o.verify = function(t) {
                if (typeof t !== "object" || t === null) return "object expected";
                if (t.rejectedSpans != null && t.hasOwnProperty("rejectedSpans")) {
                  if (!p.isInteger(t.rejectedSpans) && !(t.rejectedSpans && p.isInteger(t.rejectedSpans.low) && p.isInteger(t.rejectedSpans.high))) return "rejectedSpans: integer|Long expected";
                }
                if (t.errorMessage != null && t.hasOwnProperty("errorMessage")) {
                  if (!p.isString(t.errorMessage)) return "errorMessage: string expected";
                }
                return null;
              }, o.fromObject = function(t) {
                if (t instanceof a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess) return t;
                var r = new a.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess;
                if (t.rejectedSpans != null) {
                  if (p.Long) (r.rejectedSpans = p.Long.fromValue(t.rejectedSpans)).unsigned = !1; else if (typeof t.rejectedSpans === "string") r.rejectedSpans = parseInt(t.rejectedSpans, 10); else if (typeof t.rejectedSpans === "number") r.rejectedSpans = t.rejectedSpans; else if (typeof t.rejectedSpans === "object") r.rejectedSpans = new p.LongBits(t.rejectedSpans.low >>> 0, t.rejectedSpans.high >>> 0).toNumber();
                }
                if (t.errorMessage != null) r.errorMessage = String(t.errorMessage);
                return r;
              }, o.toObject = function(t, r) {
                if (!r) r = {};
                var n = {};
                if (r.defaults) {
                  if (p.Long) {
                    var c = new p.Long(0, 0, !1);
                    n.rejectedSpans = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                  } else n.rejectedSpans = r.longs === String ? "0" : 0;
                  n.errorMessage = "";
                }
                if (t.rejectedSpans != null && t.hasOwnProperty("rejectedSpans")) if (typeof t.rejectedSpans === "number") n.rejectedSpans = r.longs === String ? String(t.rejectedSpans) : t.rejectedSpans; else n.rejectedSpans = r.longs === String ? p.Long.prototype.toString.call(t.rejectedSpans) : r.longs === Number ? new p.LongBits(t.rejectedSpans.low >>> 0, t.rejectedSpans.high >>> 0).toNumber() : t.rejectedSpans;
                if (t.errorMessage != null && t.hasOwnProperty("errorMessage")) n.errorMessage = t.errorMessage;
                return n;
              }, o.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, o.getTypeUrl = function(t) {
                if (t === void 0) t = "type.googleapis.com";
                return t + "/opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess";
              }, o;
            }(), i;
          }(), d;
        }(), f.metrics = function() {
          var d = {};
          return d.v1 = function() {
            var i = {};
            return i.MetricsService = function() {
              function o(e, t, r) {
                S.rpc.Service.call(this, e, t, r);
              }
              return (o.prototype = Object.create(S.rpc.Service.prototype)).constructor = o, o.create = function(t, r, n) {
                return new this(t, r, n);
              }, Object.defineProperty(o.prototype.export = function e(t, r) {
                return this.rpcCall(e, a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest, a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse, t, r);
              }, "name", {
                value: "Export"
              }), o;
            }(), i.ExportMetricsServiceRequest = function() {
              function o(e) {
                if (this.resourceMetrics = [], e) {
                  for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
                }
              }
              return o.prototype.resourceMetrics = p.emptyArray, o.create = function(t) {
                return new o(t);
              }, o.encode = function(t, r) {
                if (!r) r = g.create();
                if (t.resourceMetrics != null && t.resourceMetrics.length) for (var n = 0; n < t.resourceMetrics.length; ++n) a.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(t.resourceMetrics[n], r.uint32(10).fork()).ldelim();
                return r;
              }, o.encodeDelimited = function(t, r) {
                return this.encode(t, r).ldelim();
              }, o.decode = function(t, r, n) {
                if (!(t instanceof h)) t = h.create(t);
                var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
                while (t.pos < c) {
                  var m = t.uint32();
                  if (m === n) break;
                  switch (m >>> 3) {
                   case 1:
                    {
                      if (!(s.resourceMetrics && s.resourceMetrics.length)) s.resourceMetrics = [];
                      s.resourceMetrics.push(a.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(t, t.uint32()));
                      break;
                    }

                   default:
                    t.skipType(m & 7);
                    break;
                  }
                }
                return s;
              }, o.decodeDelimited = function(t) {
                if (!(t instanceof h)) t = new h(t);
                return this.decode(t, t.uint32());
              }, o.verify = function(t) {
                if (typeof t !== "object" || t === null) return "object expected";
                if (t.resourceMetrics != null && t.hasOwnProperty("resourceMetrics")) {
                  if (!Array.isArray(t.resourceMetrics)) return "resourceMetrics: array expected";
                  for (var r = 0; r < t.resourceMetrics.length; ++r) {
                    var n = a.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(t.resourceMetrics[r]);
                    if (n) return "resourceMetrics." + n;
                  }
                }
                return null;
              }, o.fromObject = function(t) {
                if (t instanceof a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest) return t;
                var r = new a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
                if (t.resourceMetrics) {
                  if (!Array.isArray(t.resourceMetrics)) throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: array expected");
                  r.resourceMetrics = [];
                  for (var n = 0; n < t.resourceMetrics.length; ++n) {
                    if (typeof t.resourceMetrics[n] !== "object") throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: object expected");
                    r.resourceMetrics[n] = a.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(t.resourceMetrics[n]);
                  }
                }
                return r;
              }, o.toObject = function(t, r) {
                if (!r) r = {};
                var n = {};
                if (r.arrays || r.defaults) n.resourceMetrics = [];
                if (t.resourceMetrics && t.resourceMetrics.length) {
                  n.resourceMetrics = [];
                  for (var c = 0; c < t.resourceMetrics.length; ++c) n.resourceMetrics[c] = a.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(t.resourceMetrics[c], r);
                }
                return n;
              }, o.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, o.getTypeUrl = function(t) {
                if (t === void 0) t = "type.googleapis.com";
                return t + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest";
              }, o;
            }(), i.ExportMetricsServiceResponse = function() {
              function o(e) {
                if (e) {
                  for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
                }
              }
              return o.prototype.partialSuccess = null, o.create = function(t) {
                return new o(t);
              }, o.encode = function(t, r) {
                if (!r) r = g.create();
                if (t.partialSuccess != null && Object.hasOwnProperty.call(t, "partialSuccess")) a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.encode(t.partialSuccess, r.uint32(10).fork()).ldelim();
                return r;
              }, o.encodeDelimited = function(t, r) {
                return this.encode(t, r).ldelim();
              }, o.decode = function(t, r, n) {
                if (!(t instanceof h)) t = h.create(t);
                var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
                while (t.pos < c) {
                  var m = t.uint32();
                  if (m === n) break;
                  switch (m >>> 3) {
                   case 1:
                    {
                      s.partialSuccess = a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.decode(t, t.uint32());
                      break;
                    }

                   default:
                    t.skipType(m & 7);
                    break;
                  }
                }
                return s;
              }, o.decodeDelimited = function(t) {
                if (!(t instanceof h)) t = new h(t);
                return this.decode(t, t.uint32());
              }, o.verify = function(t) {
                if (typeof t !== "object" || t === null) return "object expected";
                if (t.partialSuccess != null && t.hasOwnProperty("partialSuccess")) {
                  var r = a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.verify(t.partialSuccess);
                  if (r) return "partialSuccess." + r;
                }
                return null;
              }, o.fromObject = function(t) {
                if (t instanceof a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse) return t;
                var r = new a.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
                if (t.partialSuccess != null) {
                  if (typeof t.partialSuccess !== "object") throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.partialSuccess: object expected");
                  r.partialSuccess = a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.fromObject(t.partialSuccess);
                }
                return r;
              }, o.toObject = function(t, r) {
                if (!r) r = {};
                var n = {};
                if (r.defaults) n.partialSuccess = null;
                if (t.partialSuccess != null && t.hasOwnProperty("partialSuccess")) n.partialSuccess = a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.toObject(t.partialSuccess, r);
                return n;
              }, o.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, o.getTypeUrl = function(t) {
                if (t === void 0) t = "type.googleapis.com";
                return t + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse";
              }, o;
            }(), i.ExportMetricsPartialSuccess = function() {
              function o(e) {
                if (e) {
                  for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
                }
              }
              return o.prototype.rejectedDataPoints = null, o.prototype.errorMessage = null, o.create = function(t) {
                return new o(t);
              }, o.encode = function(t, r) {
                if (!r) r = g.create();
                if (t.rejectedDataPoints != null && Object.hasOwnProperty.call(t, "rejectedDataPoints")) r.uint32(8).int64(t.rejectedDataPoints);
                if (t.errorMessage != null && Object.hasOwnProperty.call(t, "errorMessage")) r.uint32(18).string(t.errorMessage);
                return r;
              }, o.encodeDelimited = function(t, r) {
                return this.encode(t, r).ldelim();
              }, o.decode = function(t, r, n) {
                if (!(t instanceof h)) t = h.create(t);
                var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess;
                while (t.pos < c) {
                  var m = t.uint32();
                  if (m === n) break;
                  switch (m >>> 3) {
                   case 1:
                    {
                      s.rejectedDataPoints = t.int64();
                      break;
                    }

                   case 2:
                    {
                      s.errorMessage = t.string();
                      break;
                    }

                   default:
                    t.skipType(m & 7);
                    break;
                  }
                }
                return s;
              }, o.decodeDelimited = function(t) {
                if (!(t instanceof h)) t = new h(t);
                return this.decode(t, t.uint32());
              }, o.verify = function(t) {
                if (typeof t !== "object" || t === null) return "object expected";
                if (t.rejectedDataPoints != null && t.hasOwnProperty("rejectedDataPoints")) {
                  if (!p.isInteger(t.rejectedDataPoints) && !(t.rejectedDataPoints && p.isInteger(t.rejectedDataPoints.low) && p.isInteger(t.rejectedDataPoints.high))) return "rejectedDataPoints: integer|Long expected";
                }
                if (t.errorMessage != null && t.hasOwnProperty("errorMessage")) {
                  if (!p.isString(t.errorMessage)) return "errorMessage: string expected";
                }
                return null;
              }, o.fromObject = function(t) {
                if (t instanceof a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess) return t;
                var r = new a.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess;
                if (t.rejectedDataPoints != null) {
                  if (p.Long) (r.rejectedDataPoints = p.Long.fromValue(t.rejectedDataPoints)).unsigned = !1; else if (typeof t.rejectedDataPoints === "string") r.rejectedDataPoints = parseInt(t.rejectedDataPoints, 10); else if (typeof t.rejectedDataPoints === "number") r.rejectedDataPoints = t.rejectedDataPoints; else if (typeof t.rejectedDataPoints === "object") r.rejectedDataPoints = new p.LongBits(t.rejectedDataPoints.low >>> 0, t.rejectedDataPoints.high >>> 0).toNumber();
                }
                if (t.errorMessage != null) r.errorMessage = String(t.errorMessage);
                return r;
              }, o.toObject = function(t, r) {
                if (!r) r = {};
                var n = {};
                if (r.defaults) {
                  if (p.Long) {
                    var c = new p.Long(0, 0, !1);
                    n.rejectedDataPoints = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                  } else n.rejectedDataPoints = r.longs === String ? "0" : 0;
                  n.errorMessage = "";
                }
                if (t.rejectedDataPoints != null && t.hasOwnProperty("rejectedDataPoints")) if (typeof t.rejectedDataPoints === "number") n.rejectedDataPoints = r.longs === String ? String(t.rejectedDataPoints) : t.rejectedDataPoints; else n.rejectedDataPoints = r.longs === String ? p.Long.prototype.toString.call(t.rejectedDataPoints) : r.longs === Number ? new p.LongBits(t.rejectedDataPoints.low >>> 0, t.rejectedDataPoints.high >>> 0).toNumber() : t.rejectedDataPoints;
                if (t.errorMessage != null && t.hasOwnProperty("errorMessage")) n.errorMessage = t.errorMessage;
                return n;
              }, o.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, o.getTypeUrl = function(t) {
                if (t === void 0) t = "type.googleapis.com";
                return t + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess";
              }, o;
            }(), i;
          }(), d;
        }(), f.logs = function() {
          var d = {};
          return d.v1 = function() {
            var i = {};
            return i.LogsService = function() {
              function o(e, t, r) {
                S.rpc.Service.call(this, e, t, r);
              }
              return (o.prototype = Object.create(S.rpc.Service.prototype)).constructor = o, o.create = function(t, r, n) {
                return new this(t, r, n);
              }, Object.defineProperty(o.prototype.export = function e(t, r) {
                return this.rpcCall(e, a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest, a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse, t, r);
              }, "name", {
                value: "Export"
              }), o;
            }(), i.ExportLogsServiceRequest = function() {
              function o(e) {
                if (this.resourceLogs = [], e) {
                  for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
                }
              }
              return o.prototype.resourceLogs = p.emptyArray, o.create = function(t) {
                return new o(t);
              }, o.encode = function(t, r) {
                if (!r) r = g.create();
                if (t.resourceLogs != null && t.resourceLogs.length) for (var n = 0; n < t.resourceLogs.length; ++n) a.opentelemetry.proto.logs.v1.ResourceLogs.encode(t.resourceLogs[n], r.uint32(10).fork()).ldelim();
                return r;
              }, o.encodeDelimited = function(t, r) {
                return this.encode(t, r).ldelim();
              }, o.decode = function(t, r, n) {
                if (!(t instanceof h)) t = h.create(t);
                var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
                while (t.pos < c) {
                  var m = t.uint32();
                  if (m === n) break;
                  switch (m >>> 3) {
                   case 1:
                    {
                      if (!(s.resourceLogs && s.resourceLogs.length)) s.resourceLogs = [];
                      s.resourceLogs.push(a.opentelemetry.proto.logs.v1.ResourceLogs.decode(t, t.uint32()));
                      break;
                    }

                   default:
                    t.skipType(m & 7);
                    break;
                  }
                }
                return s;
              }, o.decodeDelimited = function(t) {
                if (!(t instanceof h)) t = new h(t);
                return this.decode(t, t.uint32());
              }, o.verify = function(t) {
                if (typeof t !== "object" || t === null) return "object expected";
                if (t.resourceLogs != null && t.hasOwnProperty("resourceLogs")) {
                  if (!Array.isArray(t.resourceLogs)) return "resourceLogs: array expected";
                  for (var r = 0; r < t.resourceLogs.length; ++r) {
                    var n = a.opentelemetry.proto.logs.v1.ResourceLogs.verify(t.resourceLogs[r]);
                    if (n) return "resourceLogs." + n;
                  }
                }
                return null;
              }, o.fromObject = function(t) {
                if (t instanceof a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest) return t;
                var r = new a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
                if (t.resourceLogs) {
                  if (!Array.isArray(t.resourceLogs)) throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: array expected");
                  r.resourceLogs = [];
                  for (var n = 0; n < t.resourceLogs.length; ++n) {
                    if (typeof t.resourceLogs[n] !== "object") throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: object expected");
                    r.resourceLogs[n] = a.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(t.resourceLogs[n]);
                  }
                }
                return r;
              }, o.toObject = function(t, r) {
                if (!r) r = {};
                var n = {};
                if (r.arrays || r.defaults) n.resourceLogs = [];
                if (t.resourceLogs && t.resourceLogs.length) {
                  n.resourceLogs = [];
                  for (var c = 0; c < t.resourceLogs.length; ++c) n.resourceLogs[c] = a.opentelemetry.proto.logs.v1.ResourceLogs.toObject(t.resourceLogs[c], r);
                }
                return n;
              }, o.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, o.getTypeUrl = function(t) {
                if (t === void 0) t = "type.googleapis.com";
                return t + "/opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest";
              }, o;
            }(), i.ExportLogsServiceResponse = function() {
              function o(e) {
                if (e) {
                  for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
                }
              }
              return o.prototype.partialSuccess = null, o.create = function(t) {
                return new o(t);
              }, o.encode = function(t, r) {
                if (!r) r = g.create();
                if (t.partialSuccess != null && Object.hasOwnProperty.call(t, "partialSuccess")) a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.encode(t.partialSuccess, r.uint32(10).fork()).ldelim();
                return r;
              }, o.encodeDelimited = function(t, r) {
                return this.encode(t, r).ldelim();
              }, o.decode = function(t, r, n) {
                if (!(t instanceof h)) t = h.create(t);
                var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;
                while (t.pos < c) {
                  var m = t.uint32();
                  if (m === n) break;
                  switch (m >>> 3) {
                   case 1:
                    {
                      s.partialSuccess = a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.decode(t, t.uint32());
                      break;
                    }

                   default:
                    t.skipType(m & 7);
                    break;
                  }
                }
                return s;
              }, o.decodeDelimited = function(t) {
                if (!(t instanceof h)) t = new h(t);
                return this.decode(t, t.uint32());
              }, o.verify = function(t) {
                if (typeof t !== "object" || t === null) return "object expected";
                if (t.partialSuccess != null && t.hasOwnProperty("partialSuccess")) {
                  var r = a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.verify(t.partialSuccess);
                  if (r) return "partialSuccess." + r;
                }
                return null;
              }, o.fromObject = function(t) {
                if (t instanceof a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse) return t;
                var r = new a.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;
                if (t.partialSuccess != null) {
                  if (typeof t.partialSuccess !== "object") throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.partialSuccess: object expected");
                  r.partialSuccess = a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.fromObject(t.partialSuccess);
                }
                return r;
              }, o.toObject = function(t, r) {
                if (!r) r = {};
                var n = {};
                if (r.defaults) n.partialSuccess = null;
                if (t.partialSuccess != null && t.hasOwnProperty("partialSuccess")) n.partialSuccess = a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.toObject(t.partialSuccess, r);
                return n;
              }, o.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, o.getTypeUrl = function(t) {
                if (t === void 0) t = "type.googleapis.com";
                return t + "/opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse";
              }, o;
            }(), i.ExportLogsPartialSuccess = function() {
              function o(e) {
                if (e) {
                  for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
                }
              }
              return o.prototype.rejectedLogRecords = null, o.prototype.errorMessage = null, o.create = function(t) {
                return new o(t);
              }, o.encode = function(t, r) {
                if (!r) r = g.create();
                if (t.rejectedLogRecords != null && Object.hasOwnProperty.call(t, "rejectedLogRecords")) r.uint32(8).int64(t.rejectedLogRecords);
                if (t.errorMessage != null && Object.hasOwnProperty.call(t, "errorMessage")) r.uint32(18).string(t.errorMessage);
                return r;
              }, o.encodeDelimited = function(t, r) {
                return this.encode(t, r).ldelim();
              }, o.decode = function(t, r, n) {
                if (!(t instanceof h)) t = h.create(t);
                var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess;
                while (t.pos < c) {
                  var m = t.uint32();
                  if (m === n) break;
                  switch (m >>> 3) {
                   case 1:
                    {
                      s.rejectedLogRecords = t.int64();
                      break;
                    }

                   case 2:
                    {
                      s.errorMessage = t.string();
                      break;
                    }

                   default:
                    t.skipType(m & 7);
                    break;
                  }
                }
                return s;
              }, o.decodeDelimited = function(t) {
                if (!(t instanceof h)) t = new h(t);
                return this.decode(t, t.uint32());
              }, o.verify = function(t) {
                if (typeof t !== "object" || t === null) return "object expected";
                if (t.rejectedLogRecords != null && t.hasOwnProperty("rejectedLogRecords")) {
                  if (!p.isInteger(t.rejectedLogRecords) && !(t.rejectedLogRecords && p.isInteger(t.rejectedLogRecords.low) && p.isInteger(t.rejectedLogRecords.high))) return "rejectedLogRecords: integer|Long expected";
                }
                if (t.errorMessage != null && t.hasOwnProperty("errorMessage")) {
                  if (!p.isString(t.errorMessage)) return "errorMessage: string expected";
                }
                return null;
              }, o.fromObject = function(t) {
                if (t instanceof a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess) return t;
                var r = new a.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess;
                if (t.rejectedLogRecords != null) {
                  if (p.Long) (r.rejectedLogRecords = p.Long.fromValue(t.rejectedLogRecords)).unsigned = !1; else if (typeof t.rejectedLogRecords === "string") r.rejectedLogRecords = parseInt(t.rejectedLogRecords, 10); else if (typeof t.rejectedLogRecords === "number") r.rejectedLogRecords = t.rejectedLogRecords; else if (typeof t.rejectedLogRecords === "object") r.rejectedLogRecords = new p.LongBits(t.rejectedLogRecords.low >>> 0, t.rejectedLogRecords.high >>> 0).toNumber();
                }
                if (t.errorMessage != null) r.errorMessage = String(t.errorMessage);
                return r;
              }, o.toObject = function(t, r) {
                if (!r) r = {};
                var n = {};
                if (r.defaults) {
                  if (p.Long) {
                    var c = new p.Long(0, 0, !1);
                    n.rejectedLogRecords = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                  } else n.rejectedLogRecords = r.longs === String ? "0" : 0;
                  n.errorMessage = "";
                }
                if (t.rejectedLogRecords != null && t.hasOwnProperty("rejectedLogRecords")) if (typeof t.rejectedLogRecords === "number") n.rejectedLogRecords = r.longs === String ? String(t.rejectedLogRecords) : t.rejectedLogRecords; else n.rejectedLogRecords = r.longs === String ? p.Long.prototype.toString.call(t.rejectedLogRecords) : r.longs === Number ? new p.LongBits(t.rejectedLogRecords.low >>> 0, t.rejectedLogRecords.high >>> 0).toNumber() : t.rejectedLogRecords;
                if (t.errorMessage != null && t.hasOwnProperty("errorMessage")) n.errorMessage = t.errorMessage;
                return n;
              }, o.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, o.getTypeUrl = function(t) {
                if (t === void 0) t = "type.googleapis.com";
                return t + "/opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess";
              }, o;
            }(), i;
          }(), d;
        }(), f;
      }(), u.metrics = function() {
        var f = {};
        return f.v1 = function() {
          var d = {};
          return d.MetricsData = function() {
            function i(o) {
              if (this.resourceMetrics = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.resourceMetrics = p.emptyArray, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.resourceMetrics != null && e.resourceMetrics.length) for (var r = 0; r < e.resourceMetrics.length; ++r) a.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(e.resourceMetrics[r], t.uint32(10).fork()).ldelim();
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.metrics.v1.MetricsData;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    if (!(c.resourceMetrics && c.resourceMetrics.length)) c.resourceMetrics = [];
                    c.resourceMetrics.push(a.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(e, e.uint32()));
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.resourceMetrics != null && e.hasOwnProperty("resourceMetrics")) {
                if (!Array.isArray(e.resourceMetrics)) return "resourceMetrics: array expected";
                for (var t = 0; t < e.resourceMetrics.length; ++t) {
                  var r = a.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(e.resourceMetrics[t]);
                  if (r) return "resourceMetrics." + r;
                }
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.metrics.v1.MetricsData) return e;
              var t = new a.opentelemetry.proto.metrics.v1.MetricsData;
              if (e.resourceMetrics) {
                if (!Array.isArray(e.resourceMetrics)) throw TypeError(".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: array expected");
                t.resourceMetrics = [];
                for (var r = 0; r < e.resourceMetrics.length; ++r) {
                  if (typeof e.resourceMetrics[r] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: object expected");
                  t.resourceMetrics[r] = a.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(e.resourceMetrics[r]);
                }
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.resourceMetrics = [];
              if (e.resourceMetrics && e.resourceMetrics.length) {
                r.resourceMetrics = [];
                for (var n = 0; n < e.resourceMetrics.length; ++n) r.resourceMetrics[n] = a.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(e.resourceMetrics[n], t);
              }
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.metrics.v1.MetricsData";
            }, i;
          }(), d.ResourceMetrics = function() {
            function i(o) {
              if (this.scopeMetrics = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.resource = null, i.prototype.scopeMetrics = p.emptyArray, i.prototype.schemaUrl = null, 
            i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.resource != null && Object.hasOwnProperty.call(e, "resource")) a.opentelemetry.proto.resource.v1.Resource.encode(e.resource, t.uint32(10).fork()).ldelim();
              if (e.scopeMetrics != null && e.scopeMetrics.length) for (var r = 0; r < e.scopeMetrics.length; ++r) a.opentelemetry.proto.metrics.v1.ScopeMetrics.encode(e.scopeMetrics[r], t.uint32(18).fork()).ldelim();
              if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) t.uint32(26).string(e.schemaUrl);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.metrics.v1.ResourceMetrics;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    c.resource = a.opentelemetry.proto.resource.v1.Resource.decode(e, e.uint32());
                    break;
                  }

                 case 2:
                  {
                    if (!(c.scopeMetrics && c.scopeMetrics.length)) c.scopeMetrics = [];
                    c.scopeMetrics.push(a.opentelemetry.proto.metrics.v1.ScopeMetrics.decode(e, e.uint32()));
                    break;
                  }

                 case 3:
                  {
                    c.schemaUrl = e.string();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.resource != null && e.hasOwnProperty("resource")) {
                var t = a.opentelemetry.proto.resource.v1.Resource.verify(e.resource);
                if (t) return "resource." + t;
              }
              if (e.scopeMetrics != null && e.hasOwnProperty("scopeMetrics")) {
                if (!Array.isArray(e.scopeMetrics)) return "scopeMetrics: array expected";
                for (var r = 0; r < e.scopeMetrics.length; ++r) {
                  var t = a.opentelemetry.proto.metrics.v1.ScopeMetrics.verify(e.scopeMetrics[r]);
                  if (t) return "scopeMetrics." + t;
                }
              }
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                if (!p.isString(e.schemaUrl)) return "schemaUrl: string expected";
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.metrics.v1.ResourceMetrics) return e;
              var t = new a.opentelemetry.proto.metrics.v1.ResourceMetrics;
              if (e.resource != null) {
                if (typeof e.resource !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.resource: object expected");
                t.resource = a.opentelemetry.proto.resource.v1.Resource.fromObject(e.resource);
              }
              if (e.scopeMetrics) {
                if (!Array.isArray(e.scopeMetrics)) throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: array expected");
                t.scopeMetrics = [];
                for (var r = 0; r < e.scopeMetrics.length; ++r) {
                  if (typeof e.scopeMetrics[r] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: object expected");
                  t.scopeMetrics[r] = a.opentelemetry.proto.metrics.v1.ScopeMetrics.fromObject(e.scopeMetrics[r]);
                }
              }
              if (e.schemaUrl != null) t.schemaUrl = String(e.schemaUrl);
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.scopeMetrics = [];
              if (t.defaults) r.resource = null, r.schemaUrl = "";
              if (e.resource != null && e.hasOwnProperty("resource")) r.resource = a.opentelemetry.proto.resource.v1.Resource.toObject(e.resource, t);
              if (e.scopeMetrics && e.scopeMetrics.length) {
                r.scopeMetrics = [];
                for (var n = 0; n < e.scopeMetrics.length; ++n) r.scopeMetrics[n] = a.opentelemetry.proto.metrics.v1.ScopeMetrics.toObject(e.scopeMetrics[n], t);
              }
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) r.schemaUrl = e.schemaUrl;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.metrics.v1.ResourceMetrics";
            }, i;
          }(), d.ScopeMetrics = function() {
            function i(o) {
              if (this.metrics = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.scope = null, i.prototype.metrics = p.emptyArray, i.prototype.schemaUrl = null, 
            i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.scope != null && Object.hasOwnProperty.call(e, "scope")) a.opentelemetry.proto.common.v1.InstrumentationScope.encode(e.scope, t.uint32(10).fork()).ldelim();
              if (e.metrics != null && e.metrics.length) for (var r = 0; r < e.metrics.length; ++r) a.opentelemetry.proto.metrics.v1.Metric.encode(e.metrics[r], t.uint32(18).fork()).ldelim();
              if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) t.uint32(26).string(e.schemaUrl);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.metrics.v1.ScopeMetrics;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    c.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.decode(e, e.uint32());
                    break;
                  }

                 case 2:
                  {
                    if (!(c.metrics && c.metrics.length)) c.metrics = [];
                    c.metrics.push(a.opentelemetry.proto.metrics.v1.Metric.decode(e, e.uint32()));
                    break;
                  }

                 case 3:
                  {
                    c.schemaUrl = e.string();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.scope != null && e.hasOwnProperty("scope")) {
                var t = a.opentelemetry.proto.common.v1.InstrumentationScope.verify(e.scope);
                if (t) return "scope." + t;
              }
              if (e.metrics != null && e.hasOwnProperty("metrics")) {
                if (!Array.isArray(e.metrics)) return "metrics: array expected";
                for (var r = 0; r < e.metrics.length; ++r) {
                  var t = a.opentelemetry.proto.metrics.v1.Metric.verify(e.metrics[r]);
                  if (t) return "metrics." + t;
                }
              }
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                if (!p.isString(e.schemaUrl)) return "schemaUrl: string expected";
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.metrics.v1.ScopeMetrics) return e;
              var t = new a.opentelemetry.proto.metrics.v1.ScopeMetrics;
              if (e.scope != null) {
                if (typeof e.scope !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.scope: object expected");
                t.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(e.scope);
              }
              if (e.metrics) {
                if (!Array.isArray(e.metrics)) throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: array expected");
                t.metrics = [];
                for (var r = 0; r < e.metrics.length; ++r) {
                  if (typeof e.metrics[r] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: object expected");
                  t.metrics[r] = a.opentelemetry.proto.metrics.v1.Metric.fromObject(e.metrics[r]);
                }
              }
              if (e.schemaUrl != null) t.schemaUrl = String(e.schemaUrl);
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.metrics = [];
              if (t.defaults) r.scope = null, r.schemaUrl = "";
              if (e.scope != null && e.hasOwnProperty("scope")) r.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.toObject(e.scope, t);
              if (e.metrics && e.metrics.length) {
                r.metrics = [];
                for (var n = 0; n < e.metrics.length; ++n) r.metrics[n] = a.opentelemetry.proto.metrics.v1.Metric.toObject(e.metrics[n], t);
              }
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) r.schemaUrl = e.schemaUrl;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.metrics.v1.ScopeMetrics";
            }, i;
          }(), d.Metric = function() {
            function i(e) {
              if (this.metadata = [], e) {
                for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
              }
            }
            i.prototype.name = null, i.prototype.description = null, i.prototype.unit = null, 
            i.prototype.gauge = null, i.prototype.sum = null, i.prototype.histogram = null, 
            i.prototype.exponentialHistogram = null, i.prototype.summary = null, i.prototype.metadata = p.emptyArray;
            var o;
            return Object.defineProperty(i.prototype, "data", {
              get: p.oneOfGetter(o = [ "gauge", "sum", "histogram", "exponentialHistogram", "summary" ]),
              set: p.oneOfSetter(o)
            }), i.create = function(t) {
              return new i(t);
            }, i.encode = function(t, r) {
              if (!r) r = g.create();
              if (t.name != null && Object.hasOwnProperty.call(t, "name")) r.uint32(10).string(t.name);
              if (t.description != null && Object.hasOwnProperty.call(t, "description")) r.uint32(18).string(t.description);
              if (t.unit != null && Object.hasOwnProperty.call(t, "unit")) r.uint32(26).string(t.unit);
              if (t.gauge != null && Object.hasOwnProperty.call(t, "gauge")) a.opentelemetry.proto.metrics.v1.Gauge.encode(t.gauge, r.uint32(42).fork()).ldelim();
              if (t.sum != null && Object.hasOwnProperty.call(t, "sum")) a.opentelemetry.proto.metrics.v1.Sum.encode(t.sum, r.uint32(58).fork()).ldelim();
              if (t.histogram != null && Object.hasOwnProperty.call(t, "histogram")) a.opentelemetry.proto.metrics.v1.Histogram.encode(t.histogram, r.uint32(74).fork()).ldelim();
              if (t.exponentialHistogram != null && Object.hasOwnProperty.call(t, "exponentialHistogram")) a.opentelemetry.proto.metrics.v1.ExponentialHistogram.encode(t.exponentialHistogram, r.uint32(82).fork()).ldelim();
              if (t.summary != null && Object.hasOwnProperty.call(t, "summary")) a.opentelemetry.proto.metrics.v1.Summary.encode(t.summary, r.uint32(90).fork()).ldelim();
              if (t.metadata != null && t.metadata.length) for (var n = 0; n < t.metadata.length; ++n) a.opentelemetry.proto.common.v1.KeyValue.encode(t.metadata[n], r.uint32(98).fork()).ldelim();
              return r;
            }, i.encodeDelimited = function(t, r) {
              return this.encode(t, r).ldelim();
            }, i.decode = function(t, r, n) {
              if (!(t instanceof h)) t = h.create(t);
              var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.metrics.v1.Metric;
              while (t.pos < c) {
                var m = t.uint32();
                if (m === n) break;
                switch (m >>> 3) {
                 case 1:
                  {
                    s.name = t.string();
                    break;
                  }

                 case 2:
                  {
                    s.description = t.string();
                    break;
                  }

                 case 3:
                  {
                    s.unit = t.string();
                    break;
                  }

                 case 5:
                  {
                    s.gauge = a.opentelemetry.proto.metrics.v1.Gauge.decode(t, t.uint32());
                    break;
                  }

                 case 7:
                  {
                    s.sum = a.opentelemetry.proto.metrics.v1.Sum.decode(t, t.uint32());
                    break;
                  }

                 case 9:
                  {
                    s.histogram = a.opentelemetry.proto.metrics.v1.Histogram.decode(t, t.uint32());
                    break;
                  }

                 case 10:
                  {
                    s.exponentialHistogram = a.opentelemetry.proto.metrics.v1.ExponentialHistogram.decode(t, t.uint32());
                    break;
                  }

                 case 11:
                  {
                    s.summary = a.opentelemetry.proto.metrics.v1.Summary.decode(t, t.uint32());
                    break;
                  }

                 case 12:
                  {
                    if (!(s.metadata && s.metadata.length)) s.metadata = [];
                    s.metadata.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                    break;
                  }

                 default:
                  t.skipType(m & 7);
                  break;
                }
              }
              return s;
            }, i.decodeDelimited = function(t) {
              if (!(t instanceof h)) t = new h(t);
              return this.decode(t, t.uint32());
            }, i.verify = function(t) {
              if (typeof t !== "object" || t === null) return "object expected";
              var r = {};
              if (t.name != null && t.hasOwnProperty("name")) {
                if (!p.isString(t.name)) return "name: string expected";
              }
              if (t.description != null && t.hasOwnProperty("description")) {
                if (!p.isString(t.description)) return "description: string expected";
              }
              if (t.unit != null && t.hasOwnProperty("unit")) {
                if (!p.isString(t.unit)) return "unit: string expected";
              }
              if (t.gauge != null && t.hasOwnProperty("gauge")) {
                r.data = 1;
                {
                  var n = a.opentelemetry.proto.metrics.v1.Gauge.verify(t.gauge);
                  if (n) return "gauge." + n;
                }
              }
              if (t.sum != null && t.hasOwnProperty("sum")) {
                if (r.data === 1) return "data: multiple values";
                r.data = 1;
                {
                  var n = a.opentelemetry.proto.metrics.v1.Sum.verify(t.sum);
                  if (n) return "sum." + n;
                }
              }
              if (t.histogram != null && t.hasOwnProperty("histogram")) {
                if (r.data === 1) return "data: multiple values";
                r.data = 1;
                {
                  var n = a.opentelemetry.proto.metrics.v1.Histogram.verify(t.histogram);
                  if (n) return "histogram." + n;
                }
              }
              if (t.exponentialHistogram != null && t.hasOwnProperty("exponentialHistogram")) {
                if (r.data === 1) return "data: multiple values";
                r.data = 1;
                {
                  var n = a.opentelemetry.proto.metrics.v1.ExponentialHistogram.verify(t.exponentialHistogram);
                  if (n) return "exponentialHistogram." + n;
                }
              }
              if (t.summary != null && t.hasOwnProperty("summary")) {
                if (r.data === 1) return "data: multiple values";
                r.data = 1;
                {
                  var n = a.opentelemetry.proto.metrics.v1.Summary.verify(t.summary);
                  if (n) return "summary." + n;
                }
              }
              if (t.metadata != null && t.hasOwnProperty("metadata")) {
                if (!Array.isArray(t.metadata)) return "metadata: array expected";
                for (var c = 0; c < t.metadata.length; ++c) {
                  var n = a.opentelemetry.proto.common.v1.KeyValue.verify(t.metadata[c]);
                  if (n) return "metadata." + n;
                }
              }
              return null;
            }, i.fromObject = function(t) {
              if (t instanceof a.opentelemetry.proto.metrics.v1.Metric) return t;
              var r = new a.opentelemetry.proto.metrics.v1.Metric;
              if (t.name != null) r.name = String(t.name);
              if (t.description != null) r.description = String(t.description);
              if (t.unit != null) r.unit = String(t.unit);
              if (t.gauge != null) {
                if (typeof t.gauge !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.gauge: object expected");
                r.gauge = a.opentelemetry.proto.metrics.v1.Gauge.fromObject(t.gauge);
              }
              if (t.sum != null) {
                if (typeof t.sum !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.sum: object expected");
                r.sum = a.opentelemetry.proto.metrics.v1.Sum.fromObject(t.sum);
              }
              if (t.histogram != null) {
                if (typeof t.histogram !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.histogram: object expected");
                r.histogram = a.opentelemetry.proto.metrics.v1.Histogram.fromObject(t.histogram);
              }
              if (t.exponentialHistogram != null) {
                if (typeof t.exponentialHistogram !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.exponentialHistogram: object expected");
                r.exponentialHistogram = a.opentelemetry.proto.metrics.v1.ExponentialHistogram.fromObject(t.exponentialHistogram);
              }
              if (t.summary != null) {
                if (typeof t.summary !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.summary: object expected");
                r.summary = a.opentelemetry.proto.metrics.v1.Summary.fromObject(t.summary);
              }
              if (t.metadata) {
                if (!Array.isArray(t.metadata)) throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: array expected");
                r.metadata = [];
                for (var n = 0; n < t.metadata.length; ++n) {
                  if (typeof t.metadata[n] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: object expected");
                  r.metadata[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.metadata[n]);
                }
              }
              return r;
            }, i.toObject = function(t, r) {
              if (!r) r = {};
              var n = {};
              if (r.arrays || r.defaults) n.metadata = [];
              if (r.defaults) n.name = "", n.description = "", n.unit = "";
              if (t.name != null && t.hasOwnProperty("name")) n.name = t.name;
              if (t.description != null && t.hasOwnProperty("description")) n.description = t.description;
              if (t.unit != null && t.hasOwnProperty("unit")) n.unit = t.unit;
              if (t.gauge != null && t.hasOwnProperty("gauge")) {
                if (n.gauge = a.opentelemetry.proto.metrics.v1.Gauge.toObject(t.gauge, r), r.oneofs) n.data = "gauge";
              }
              if (t.sum != null && t.hasOwnProperty("sum")) {
                if (n.sum = a.opentelemetry.proto.metrics.v1.Sum.toObject(t.sum, r), r.oneofs) n.data = "sum";
              }
              if (t.histogram != null && t.hasOwnProperty("histogram")) {
                if (n.histogram = a.opentelemetry.proto.metrics.v1.Histogram.toObject(t.histogram, r), 
                r.oneofs) n.data = "histogram";
              }
              if (t.exponentialHistogram != null && t.hasOwnProperty("exponentialHistogram")) {
                if (n.exponentialHistogram = a.opentelemetry.proto.metrics.v1.ExponentialHistogram.toObject(t.exponentialHistogram, r), 
                r.oneofs) n.data = "exponentialHistogram";
              }
              if (t.summary != null && t.hasOwnProperty("summary")) {
                if (n.summary = a.opentelemetry.proto.metrics.v1.Summary.toObject(t.summary, r), 
                r.oneofs) n.data = "summary";
              }
              if (t.metadata && t.metadata.length) {
                n.metadata = [];
                for (var c = 0; c < t.metadata.length; ++c) n.metadata[c] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.metadata[c], r);
              }
              return n;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(t) {
              if (t === void 0) t = "type.googleapis.com";
              return t + "/opentelemetry.proto.metrics.v1.Metric";
            }, i;
          }(), d.Gauge = function() {
            function i(o) {
              if (this.dataPoints = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.dataPoints = p.emptyArray, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.dataPoints != null && e.dataPoints.length) for (var r = 0; r < e.dataPoints.length; ++r) a.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(e.dataPoints[r], t.uint32(10).fork()).ldelim();
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.metrics.v1.Gauge;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    if (!(c.dataPoints && c.dataPoints.length)) c.dataPoints = [];
                    c.dataPoints.push(a.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(e, e.uint32()));
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.dataPoints != null && e.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(e.dataPoints)) return "dataPoints: array expected";
                for (var t = 0; t < e.dataPoints.length; ++t) {
                  var r = a.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(e.dataPoints[t]);
                  if (r) return "dataPoints." + r;
                }
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.metrics.v1.Gauge) return e;
              var t = new a.opentelemetry.proto.metrics.v1.Gauge;
              if (e.dataPoints) {
                if (!Array.isArray(e.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: array expected");
                t.dataPoints = [];
                for (var r = 0; r < e.dataPoints.length; ++r) {
                  if (typeof e.dataPoints[r] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: object expected");
                  t.dataPoints[r] = a.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(e.dataPoints[r]);
                }
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.dataPoints = [];
              if (e.dataPoints && e.dataPoints.length) {
                r.dataPoints = [];
                for (var n = 0; n < e.dataPoints.length; ++n) r.dataPoints[n] = a.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(e.dataPoints[n], t);
              }
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.metrics.v1.Gauge";
            }, i;
          }(), d.Sum = function() {
            function i(o) {
              if (this.dataPoints = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.dataPoints = p.emptyArray, i.prototype.aggregationTemporality = null, 
            i.prototype.isMonotonic = null, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.dataPoints != null && e.dataPoints.length) for (var r = 0; r < e.dataPoints.length; ++r) a.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(e.dataPoints[r], t.uint32(10).fork()).ldelim();
              if (e.aggregationTemporality != null && Object.hasOwnProperty.call(e, "aggregationTemporality")) t.uint32(16).int32(e.aggregationTemporality);
              if (e.isMonotonic != null && Object.hasOwnProperty.call(e, "isMonotonic")) t.uint32(24).bool(e.isMonotonic);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.metrics.v1.Sum;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    if (!(c.dataPoints && c.dataPoints.length)) c.dataPoints = [];
                    c.dataPoints.push(a.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(e, e.uint32()));
                    break;
                  }

                 case 2:
                  {
                    c.aggregationTemporality = e.int32();
                    break;
                  }

                 case 3:
                  {
                    c.isMonotonic = e.bool();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.dataPoints != null && e.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(e.dataPoints)) return "dataPoints: array expected";
                for (var t = 0; t < e.dataPoints.length; ++t) {
                  var r = a.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(e.dataPoints[t]);
                  if (r) return "dataPoints." + r;
                }
              }
              if (e.aggregationTemporality != null && e.hasOwnProperty("aggregationTemporality")) switch (e.aggregationTemporality) {
               default:
                return "aggregationTemporality: enum value expected";

               case 0:
               case 1:
               case 2:
                break;
              }
              if (e.isMonotonic != null && e.hasOwnProperty("isMonotonic")) {
                if (typeof e.isMonotonic !== "boolean") return "isMonotonic: boolean expected";
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.metrics.v1.Sum) return e;
              var t = new a.opentelemetry.proto.metrics.v1.Sum;
              if (e.dataPoints) {
                if (!Array.isArray(e.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: array expected");
                t.dataPoints = [];
                for (var r = 0; r < e.dataPoints.length; ++r) {
                  if (typeof e.dataPoints[r] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: object expected");
                  t.dataPoints[r] = a.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(e.dataPoints[r]);
                }
              }
              switch (e.aggregationTemporality) {
               default:
                if (typeof e.aggregationTemporality === "number") {
                  t.aggregationTemporality = e.aggregationTemporality;
                  break;
                }
                break;

               case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
               case 0:
                t.aggregationTemporality = 0;
                break;

               case "AGGREGATION_TEMPORALITY_DELTA":
               case 1:
                t.aggregationTemporality = 1;
                break;

               case "AGGREGATION_TEMPORALITY_CUMULATIVE":
               case 2:
                t.aggregationTemporality = 2;
                break;
              }
              if (e.isMonotonic != null) t.isMonotonic = Boolean(e.isMonotonic);
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.dataPoints = [];
              if (t.defaults) r.aggregationTemporality = t.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0, 
              r.isMonotonic = !1;
              if (e.dataPoints && e.dataPoints.length) {
                r.dataPoints = [];
                for (var n = 0; n < e.dataPoints.length; ++n) r.dataPoints[n] = a.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(e.dataPoints[n], t);
              }
              if (e.aggregationTemporality != null && e.hasOwnProperty("aggregationTemporality")) r.aggregationTemporality = t.enums === String ? a.opentelemetry.proto.metrics.v1.AggregationTemporality[e.aggregationTemporality] === void 0 ? e.aggregationTemporality : a.opentelemetry.proto.metrics.v1.AggregationTemporality[e.aggregationTemporality] : e.aggregationTemporality;
              if (e.isMonotonic != null && e.hasOwnProperty("isMonotonic")) r.isMonotonic = e.isMonotonic;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.metrics.v1.Sum";
            }, i;
          }(), d.Histogram = function() {
            function i(o) {
              if (this.dataPoints = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.dataPoints = p.emptyArray, i.prototype.aggregationTemporality = null, 
            i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.dataPoints != null && e.dataPoints.length) for (var r = 0; r < e.dataPoints.length; ++r) a.opentelemetry.proto.metrics.v1.HistogramDataPoint.encode(e.dataPoints[r], t.uint32(10).fork()).ldelim();
              if (e.aggregationTemporality != null && Object.hasOwnProperty.call(e, "aggregationTemporality")) t.uint32(16).int32(e.aggregationTemporality);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.metrics.v1.Histogram;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    if (!(c.dataPoints && c.dataPoints.length)) c.dataPoints = [];
                    c.dataPoints.push(a.opentelemetry.proto.metrics.v1.HistogramDataPoint.decode(e, e.uint32()));
                    break;
                  }

                 case 2:
                  {
                    c.aggregationTemporality = e.int32();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.dataPoints != null && e.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(e.dataPoints)) return "dataPoints: array expected";
                for (var t = 0; t < e.dataPoints.length; ++t) {
                  var r = a.opentelemetry.proto.metrics.v1.HistogramDataPoint.verify(e.dataPoints[t]);
                  if (r) return "dataPoints." + r;
                }
              }
              if (e.aggregationTemporality != null && e.hasOwnProperty("aggregationTemporality")) switch (e.aggregationTemporality) {
               default:
                return "aggregationTemporality: enum value expected";

               case 0:
               case 1:
               case 2:
                break;
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.metrics.v1.Histogram) return e;
              var t = new a.opentelemetry.proto.metrics.v1.Histogram;
              if (e.dataPoints) {
                if (!Array.isArray(e.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: array expected");
                t.dataPoints = [];
                for (var r = 0; r < e.dataPoints.length; ++r) {
                  if (typeof e.dataPoints[r] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: object expected");
                  t.dataPoints[r] = a.opentelemetry.proto.metrics.v1.HistogramDataPoint.fromObject(e.dataPoints[r]);
                }
              }
              switch (e.aggregationTemporality) {
               default:
                if (typeof e.aggregationTemporality === "number") {
                  t.aggregationTemporality = e.aggregationTemporality;
                  break;
                }
                break;

               case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
               case 0:
                t.aggregationTemporality = 0;
                break;

               case "AGGREGATION_TEMPORALITY_DELTA":
               case 1:
                t.aggregationTemporality = 1;
                break;

               case "AGGREGATION_TEMPORALITY_CUMULATIVE":
               case 2:
                t.aggregationTemporality = 2;
                break;
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.dataPoints = [];
              if (t.defaults) r.aggregationTemporality = t.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
              if (e.dataPoints && e.dataPoints.length) {
                r.dataPoints = [];
                for (var n = 0; n < e.dataPoints.length; ++n) r.dataPoints[n] = a.opentelemetry.proto.metrics.v1.HistogramDataPoint.toObject(e.dataPoints[n], t);
              }
              if (e.aggregationTemporality != null && e.hasOwnProperty("aggregationTemporality")) r.aggregationTemporality = t.enums === String ? a.opentelemetry.proto.metrics.v1.AggregationTemporality[e.aggregationTemporality] === void 0 ? e.aggregationTemporality : a.opentelemetry.proto.metrics.v1.AggregationTemporality[e.aggregationTemporality] : e.aggregationTemporality;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.metrics.v1.Histogram";
            }, i;
          }(), d.ExponentialHistogram = function() {
            function i(o) {
              if (this.dataPoints = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.dataPoints = p.emptyArray, i.prototype.aggregationTemporality = null, 
            i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.dataPoints != null && e.dataPoints.length) for (var r = 0; r < e.dataPoints.length; ++r) a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.encode(e.dataPoints[r], t.uint32(10).fork()).ldelim();
              if (e.aggregationTemporality != null && Object.hasOwnProperty.call(e, "aggregationTemporality")) t.uint32(16).int32(e.aggregationTemporality);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.metrics.v1.ExponentialHistogram;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    if (!(c.dataPoints && c.dataPoints.length)) c.dataPoints = [];
                    c.dataPoints.push(a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.decode(e, e.uint32()));
                    break;
                  }

                 case 2:
                  {
                    c.aggregationTemporality = e.int32();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.dataPoints != null && e.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(e.dataPoints)) return "dataPoints: array expected";
                for (var t = 0; t < e.dataPoints.length; ++t) {
                  var r = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.verify(e.dataPoints[t]);
                  if (r) return "dataPoints." + r;
                }
              }
              if (e.aggregationTemporality != null && e.hasOwnProperty("aggregationTemporality")) switch (e.aggregationTemporality) {
               default:
                return "aggregationTemporality: enum value expected";

               case 0:
               case 1:
               case 2:
                break;
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.metrics.v1.ExponentialHistogram) return e;
              var t = new a.opentelemetry.proto.metrics.v1.ExponentialHistogram;
              if (e.dataPoints) {
                if (!Array.isArray(e.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: array expected");
                t.dataPoints = [];
                for (var r = 0; r < e.dataPoints.length; ++r) {
                  if (typeof e.dataPoints[r] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: object expected");
                  t.dataPoints[r] = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.fromObject(e.dataPoints[r]);
                }
              }
              switch (e.aggregationTemporality) {
               default:
                if (typeof e.aggregationTemporality === "number") {
                  t.aggregationTemporality = e.aggregationTemporality;
                  break;
                }
                break;

               case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
               case 0:
                t.aggregationTemporality = 0;
                break;

               case "AGGREGATION_TEMPORALITY_DELTA":
               case 1:
                t.aggregationTemporality = 1;
                break;

               case "AGGREGATION_TEMPORALITY_CUMULATIVE":
               case 2:
                t.aggregationTemporality = 2;
                break;
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.dataPoints = [];
              if (t.defaults) r.aggregationTemporality = t.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
              if (e.dataPoints && e.dataPoints.length) {
                r.dataPoints = [];
                for (var n = 0; n < e.dataPoints.length; ++n) r.dataPoints[n] = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.toObject(e.dataPoints[n], t);
              }
              if (e.aggregationTemporality != null && e.hasOwnProperty("aggregationTemporality")) r.aggregationTemporality = t.enums === String ? a.opentelemetry.proto.metrics.v1.AggregationTemporality[e.aggregationTemporality] === void 0 ? e.aggregationTemporality : a.opentelemetry.proto.metrics.v1.AggregationTemporality[e.aggregationTemporality] : e.aggregationTemporality;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.metrics.v1.ExponentialHistogram";
            }, i;
          }(), d.Summary = function() {
            function i(o) {
              if (this.dataPoints = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.dataPoints = p.emptyArray, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.dataPoints != null && e.dataPoints.length) for (var r = 0; r < e.dataPoints.length; ++r) a.opentelemetry.proto.metrics.v1.SummaryDataPoint.encode(e.dataPoints[r], t.uint32(10).fork()).ldelim();
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.metrics.v1.Summary;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    if (!(c.dataPoints && c.dataPoints.length)) c.dataPoints = [];
                    c.dataPoints.push(a.opentelemetry.proto.metrics.v1.SummaryDataPoint.decode(e, e.uint32()));
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.dataPoints != null && e.hasOwnProperty("dataPoints")) {
                if (!Array.isArray(e.dataPoints)) return "dataPoints: array expected";
                for (var t = 0; t < e.dataPoints.length; ++t) {
                  var r = a.opentelemetry.proto.metrics.v1.SummaryDataPoint.verify(e.dataPoints[t]);
                  if (r) return "dataPoints." + r;
                }
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.metrics.v1.Summary) return e;
              var t = new a.opentelemetry.proto.metrics.v1.Summary;
              if (e.dataPoints) {
                if (!Array.isArray(e.dataPoints)) throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: array expected");
                t.dataPoints = [];
                for (var r = 0; r < e.dataPoints.length; ++r) {
                  if (typeof e.dataPoints[r] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: object expected");
                  t.dataPoints[r] = a.opentelemetry.proto.metrics.v1.SummaryDataPoint.fromObject(e.dataPoints[r]);
                }
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.dataPoints = [];
              if (e.dataPoints && e.dataPoints.length) {
                r.dataPoints = [];
                for (var n = 0; n < e.dataPoints.length; ++n) r.dataPoints[n] = a.opentelemetry.proto.metrics.v1.SummaryDataPoint.toObject(e.dataPoints[n], t);
              }
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.metrics.v1.Summary";
            }, i;
          }(), d.AggregationTemporality = function() {
            var i = {}, o = Object.create(i);
            return o[i[0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED"] = 0, o[i[1] = "AGGREGATION_TEMPORALITY_DELTA"] = 1, 
            o[i[2] = "AGGREGATION_TEMPORALITY_CUMULATIVE"] = 2, o;
          }(), d.DataPointFlags = function() {
            var i = {}, o = Object.create(i);
            return o[i[0] = "DATA_POINT_FLAGS_DO_NOT_USE"] = 0, o[i[1] = "DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK"] = 1, 
            o;
          }(), d.NumberDataPoint = function() {
            function i(e) {
              if (this.attributes = [], this.exemplars = [], e) {
                for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
              }
            }
            i.prototype.attributes = p.emptyArray, i.prototype.startTimeUnixNano = null, i.prototype.timeUnixNano = null, 
            i.prototype.asDouble = null, i.prototype.asInt = null, i.prototype.exemplars = p.emptyArray, 
            i.prototype.flags = null;
            var o;
            return Object.defineProperty(i.prototype, "value", {
              get: p.oneOfGetter(o = [ "asDouble", "asInt" ]),
              set: p.oneOfSetter(o)
            }), i.create = function(t) {
              return new i(t);
            }, i.encode = function(t, r) {
              if (!r) r = g.create();
              if (t.startTimeUnixNano != null && Object.hasOwnProperty.call(t, "startTimeUnixNano")) r.uint32(17).fixed64(t.startTimeUnixNano);
              if (t.timeUnixNano != null && Object.hasOwnProperty.call(t, "timeUnixNano")) r.uint32(25).fixed64(t.timeUnixNano);
              if (t.asDouble != null && Object.hasOwnProperty.call(t, "asDouble")) r.uint32(33).double(t.asDouble);
              if (t.exemplars != null && t.exemplars.length) for (var n = 0; n < t.exemplars.length; ++n) a.opentelemetry.proto.metrics.v1.Exemplar.encode(t.exemplars[n], r.uint32(42).fork()).ldelim();
              if (t.asInt != null && Object.hasOwnProperty.call(t, "asInt")) r.uint32(49).sfixed64(t.asInt);
              if (t.attributes != null && t.attributes.length) for (var n = 0; n < t.attributes.length; ++n) a.opentelemetry.proto.common.v1.KeyValue.encode(t.attributes[n], r.uint32(58).fork()).ldelim();
              if (t.flags != null && Object.hasOwnProperty.call(t, "flags")) r.uint32(64).uint32(t.flags);
              return r;
            }, i.encodeDelimited = function(t, r) {
              return this.encode(t, r).ldelim();
            }, i.decode = function(t, r, n) {
              if (!(t instanceof h)) t = h.create(t);
              var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.metrics.v1.NumberDataPoint;
              while (t.pos < c) {
                var m = t.uint32();
                if (m === n) break;
                switch (m >>> 3) {
                 case 7:
                  {
                    if (!(s.attributes && s.attributes.length)) s.attributes = [];
                    s.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                    break;
                  }

                 case 2:
                  {
                    s.startTimeUnixNano = t.fixed64();
                    break;
                  }

                 case 3:
                  {
                    s.timeUnixNano = t.fixed64();
                    break;
                  }

                 case 4:
                  {
                    s.asDouble = t.double();
                    break;
                  }

                 case 6:
                  {
                    s.asInt = t.sfixed64();
                    break;
                  }

                 case 5:
                  {
                    if (!(s.exemplars && s.exemplars.length)) s.exemplars = [];
                    s.exemplars.push(a.opentelemetry.proto.metrics.v1.Exemplar.decode(t, t.uint32()));
                    break;
                  }

                 case 8:
                  {
                    s.flags = t.uint32();
                    break;
                  }

                 default:
                  t.skipType(m & 7);
                  break;
                }
              }
              return s;
            }, i.decodeDelimited = function(t) {
              if (!(t instanceof h)) t = new h(t);
              return this.decode(t, t.uint32());
            }, i.verify = function(t) {
              if (typeof t !== "object" || t === null) return "object expected";
              var r = {};
              if (t.attributes != null && t.hasOwnProperty("attributes")) {
                if (!Array.isArray(t.attributes)) return "attributes: array expected";
                for (var n = 0; n < t.attributes.length; ++n) {
                  var c = a.opentelemetry.proto.common.v1.KeyValue.verify(t.attributes[n]);
                  if (c) return "attributes." + c;
                }
              }
              if (t.startTimeUnixNano != null && t.hasOwnProperty("startTimeUnixNano")) {
                if (!p.isInteger(t.startTimeUnixNano) && !(t.startTimeUnixNano && p.isInteger(t.startTimeUnixNano.low) && p.isInteger(t.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected";
              }
              if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                if (!p.isInteger(t.timeUnixNano) && !(t.timeUnixNano && p.isInteger(t.timeUnixNano.low) && p.isInteger(t.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
              }
              if (t.asDouble != null && t.hasOwnProperty("asDouble")) {
                if (r.value = 1, typeof t.asDouble !== "number") return "asDouble: number expected";
              }
              if (t.asInt != null && t.hasOwnProperty("asInt")) {
                if (r.value === 1) return "value: multiple values";
                if (r.value = 1, !p.isInteger(t.asInt) && !(t.asInt && p.isInteger(t.asInt.low) && p.isInteger(t.asInt.high))) return "asInt: integer|Long expected";
              }
              if (t.exemplars != null && t.hasOwnProperty("exemplars")) {
                if (!Array.isArray(t.exemplars)) return "exemplars: array expected";
                for (var n = 0; n < t.exemplars.length; ++n) {
                  var c = a.opentelemetry.proto.metrics.v1.Exemplar.verify(t.exemplars[n]);
                  if (c) return "exemplars." + c;
                }
              }
              if (t.flags != null && t.hasOwnProperty("flags")) {
                if (!p.isInteger(t.flags)) return "flags: integer expected";
              }
              return null;
            }, i.fromObject = function(t) {
              if (t instanceof a.opentelemetry.proto.metrics.v1.NumberDataPoint) return t;
              var r = new a.opentelemetry.proto.metrics.v1.NumberDataPoint;
              if (t.attributes) {
                if (!Array.isArray(t.attributes)) throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: array expected");
                r.attributes = [];
                for (var n = 0; n < t.attributes.length; ++n) {
                  if (typeof t.attributes[n] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: object expected");
                  r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.attributes[n]);
                }
              }
              if (t.startTimeUnixNano != null) {
                if (p.Long) (r.startTimeUnixNano = p.Long.fromValue(t.startTimeUnixNano)).unsigned = !1; else if (typeof t.startTimeUnixNano === "string") r.startTimeUnixNano = parseInt(t.startTimeUnixNano, 10); else if (typeof t.startTimeUnixNano === "number") r.startTimeUnixNano = t.startTimeUnixNano; else if (typeof t.startTimeUnixNano === "object") r.startTimeUnixNano = new p.LongBits(t.startTimeUnixNano.low >>> 0, t.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (t.timeUnixNano != null) {
                if (p.Long) (r.timeUnixNano = p.Long.fromValue(t.timeUnixNano)).unsigned = !1; else if (typeof t.timeUnixNano === "string") r.timeUnixNano = parseInt(t.timeUnixNano, 10); else if (typeof t.timeUnixNano === "number") r.timeUnixNano = t.timeUnixNano; else if (typeof t.timeUnixNano === "object") r.timeUnixNano = new p.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber();
              }
              if (t.asDouble != null) r.asDouble = Number(t.asDouble);
              if (t.asInt != null) {
                if (p.Long) (r.asInt = p.Long.fromValue(t.asInt)).unsigned = !1; else if (typeof t.asInt === "string") r.asInt = parseInt(t.asInt, 10); else if (typeof t.asInt === "number") r.asInt = t.asInt; else if (typeof t.asInt === "object") r.asInt = new p.LongBits(t.asInt.low >>> 0, t.asInt.high >>> 0).toNumber();
              }
              if (t.exemplars) {
                if (!Array.isArray(t.exemplars)) throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: array expected");
                r.exemplars = [];
                for (var n = 0; n < t.exemplars.length; ++n) {
                  if (typeof t.exemplars[n] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: object expected");
                  r.exemplars[n] = a.opentelemetry.proto.metrics.v1.Exemplar.fromObject(t.exemplars[n]);
                }
              }
              if (t.flags != null) r.flags = t.flags >>> 0;
              return r;
            }, i.toObject = function(t, r) {
              if (!r) r = {};
              var n = {};
              if (r.arrays || r.defaults) n.exemplars = [], n.attributes = [];
              if (r.defaults) {
                if (p.Long) {
                  var c = new p.Long(0, 0, !1);
                  n.startTimeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                } else n.startTimeUnixNano = r.longs === String ? "0" : 0;
                if (p.Long) {
                  var c = new p.Long(0, 0, !1);
                  n.timeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                } else n.timeUnixNano = r.longs === String ? "0" : 0;
                n.flags = 0;
              }
              if (t.startTimeUnixNano != null && t.hasOwnProperty("startTimeUnixNano")) if (typeof t.startTimeUnixNano === "number") n.startTimeUnixNano = r.longs === String ? String(t.startTimeUnixNano) : t.startTimeUnixNano; else n.startTimeUnixNano = r.longs === String ? p.Long.prototype.toString.call(t.startTimeUnixNano) : r.longs === Number ? new p.LongBits(t.startTimeUnixNano.low >>> 0, t.startTimeUnixNano.high >>> 0).toNumber() : t.startTimeUnixNano;
              if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) if (typeof t.timeUnixNano === "number") n.timeUnixNano = r.longs === String ? String(t.timeUnixNano) : t.timeUnixNano; else n.timeUnixNano = r.longs === String ? p.Long.prototype.toString.call(t.timeUnixNano) : r.longs === Number ? new p.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber() : t.timeUnixNano;
              if (t.asDouble != null && t.hasOwnProperty("asDouble")) {
                if (n.asDouble = r.json && !isFinite(t.asDouble) ? String(t.asDouble) : t.asDouble, 
                r.oneofs) n.value = "asDouble";
              }
              if (t.exemplars && t.exemplars.length) {
                n.exemplars = [];
                for (var s = 0; s < t.exemplars.length; ++s) n.exemplars[s] = a.opentelemetry.proto.metrics.v1.Exemplar.toObject(t.exemplars[s], r);
              }
              if (t.asInt != null && t.hasOwnProperty("asInt")) {
                if (typeof t.asInt === "number") n.asInt = r.longs === String ? String(t.asInt) : t.asInt; else n.asInt = r.longs === String ? p.Long.prototype.toString.call(t.asInt) : r.longs === Number ? new p.LongBits(t.asInt.low >>> 0, t.asInt.high >>> 0).toNumber() : t.asInt;
                if (r.oneofs) n.value = "asInt";
              }
              if (t.attributes && t.attributes.length) {
                n.attributes = [];
                for (var s = 0; s < t.attributes.length; ++s) n.attributes[s] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.attributes[s], r);
              }
              if (t.flags != null && t.hasOwnProperty("flags")) n.flags = t.flags;
              return n;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(t) {
              if (t === void 0) t = "type.googleapis.com";
              return t + "/opentelemetry.proto.metrics.v1.NumberDataPoint";
            }, i;
          }(), d.HistogramDataPoint = function() {
            function i(e) {
              if (this.attributes = [], this.bucketCounts = [], this.explicitBounds = [], this.exemplars = [], 
              e) {
                for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
              }
            }
            i.prototype.attributes = p.emptyArray, i.prototype.startTimeUnixNano = null, i.prototype.timeUnixNano = null, 
            i.prototype.count = null, i.prototype.sum = null, i.prototype.bucketCounts = p.emptyArray, 
            i.prototype.explicitBounds = p.emptyArray, i.prototype.exemplars = p.emptyArray, 
            i.prototype.flags = null, i.prototype.min = null, i.prototype.max = null;
            var o;
            return Object.defineProperty(i.prototype, "_sum", {
              get: p.oneOfGetter(o = [ "sum" ]),
              set: p.oneOfSetter(o)
            }), Object.defineProperty(i.prototype, "_min", {
              get: p.oneOfGetter(o = [ "min" ]),
              set: p.oneOfSetter(o)
            }), Object.defineProperty(i.prototype, "_max", {
              get: p.oneOfGetter(o = [ "max" ]),
              set: p.oneOfSetter(o)
            }), i.create = function(t) {
              return new i(t);
            }, i.encode = function(t, r) {
              if (!r) r = g.create();
              if (t.startTimeUnixNano != null && Object.hasOwnProperty.call(t, "startTimeUnixNano")) r.uint32(17).fixed64(t.startTimeUnixNano);
              if (t.timeUnixNano != null && Object.hasOwnProperty.call(t, "timeUnixNano")) r.uint32(25).fixed64(t.timeUnixNano);
              if (t.count != null && Object.hasOwnProperty.call(t, "count")) r.uint32(33).fixed64(t.count);
              if (t.sum != null && Object.hasOwnProperty.call(t, "sum")) r.uint32(41).double(t.sum);
              if (t.bucketCounts != null && t.bucketCounts.length) {
                r.uint32(50).fork();
                for (var n = 0; n < t.bucketCounts.length; ++n) r.fixed64(t.bucketCounts[n]);
                r.ldelim();
              }
              if (t.explicitBounds != null && t.explicitBounds.length) {
                r.uint32(58).fork();
                for (var n = 0; n < t.explicitBounds.length; ++n) r.double(t.explicitBounds[n]);
                r.ldelim();
              }
              if (t.exemplars != null && t.exemplars.length) for (var n = 0; n < t.exemplars.length; ++n) a.opentelemetry.proto.metrics.v1.Exemplar.encode(t.exemplars[n], r.uint32(66).fork()).ldelim();
              if (t.attributes != null && t.attributes.length) for (var n = 0; n < t.attributes.length; ++n) a.opentelemetry.proto.common.v1.KeyValue.encode(t.attributes[n], r.uint32(74).fork()).ldelim();
              if (t.flags != null && Object.hasOwnProperty.call(t, "flags")) r.uint32(80).uint32(t.flags);
              if (t.min != null && Object.hasOwnProperty.call(t, "min")) r.uint32(89).double(t.min);
              if (t.max != null && Object.hasOwnProperty.call(t, "max")) r.uint32(97).double(t.max);
              return r;
            }, i.encodeDelimited = function(t, r) {
              return this.encode(t, r).ldelim();
            }, i.decode = function(t, r, n) {
              if (!(t instanceof h)) t = h.create(t);
              var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.metrics.v1.HistogramDataPoint;
              while (t.pos < c) {
                var m = t.uint32();
                if (m === n) break;
                switch (m >>> 3) {
                 case 9:
                  {
                    if (!(s.attributes && s.attributes.length)) s.attributes = [];
                    s.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                    break;
                  }

                 case 2:
                  {
                    s.startTimeUnixNano = t.fixed64();
                    break;
                  }

                 case 3:
                  {
                    s.timeUnixNano = t.fixed64();
                    break;
                  }

                 case 4:
                  {
                    s.count = t.fixed64();
                    break;
                  }

                 case 5:
                  {
                    s.sum = t.double();
                    break;
                  }

                 case 6:
                  {
                    if (!(s.bucketCounts && s.bucketCounts.length)) s.bucketCounts = [];
                    if ((m & 7) === 2) {
                      var U = t.uint32() + t.pos;
                      while (t.pos < U) s.bucketCounts.push(t.fixed64());
                    } else s.bucketCounts.push(t.fixed64());
                    break;
                  }

                 case 7:
                  {
                    if (!(s.explicitBounds && s.explicitBounds.length)) s.explicitBounds = [];
                    if ((m & 7) === 2) {
                      var U = t.uint32() + t.pos;
                      while (t.pos < U) s.explicitBounds.push(t.double());
                    } else s.explicitBounds.push(t.double());
                    break;
                  }

                 case 8:
                  {
                    if (!(s.exemplars && s.exemplars.length)) s.exemplars = [];
                    s.exemplars.push(a.opentelemetry.proto.metrics.v1.Exemplar.decode(t, t.uint32()));
                    break;
                  }

                 case 10:
                  {
                    s.flags = t.uint32();
                    break;
                  }

                 case 11:
                  {
                    s.min = t.double();
                    break;
                  }

                 case 12:
                  {
                    s.max = t.double();
                    break;
                  }

                 default:
                  t.skipType(m & 7);
                  break;
                }
              }
              return s;
            }, i.decodeDelimited = function(t) {
              if (!(t instanceof h)) t = new h(t);
              return this.decode(t, t.uint32());
            }, i.verify = function(t) {
              if (typeof t !== "object" || t === null) return "object expected";
              var r = {};
              if (t.attributes != null && t.hasOwnProperty("attributes")) {
                if (!Array.isArray(t.attributes)) return "attributes: array expected";
                for (var n = 0; n < t.attributes.length; ++n) {
                  var c = a.opentelemetry.proto.common.v1.KeyValue.verify(t.attributes[n]);
                  if (c) return "attributes." + c;
                }
              }
              if (t.startTimeUnixNano != null && t.hasOwnProperty("startTimeUnixNano")) {
                if (!p.isInteger(t.startTimeUnixNano) && !(t.startTimeUnixNano && p.isInteger(t.startTimeUnixNano.low) && p.isInteger(t.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected";
              }
              if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                if (!p.isInteger(t.timeUnixNano) && !(t.timeUnixNano && p.isInteger(t.timeUnixNano.low) && p.isInteger(t.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
              }
              if (t.count != null && t.hasOwnProperty("count")) {
                if (!p.isInteger(t.count) && !(t.count && p.isInteger(t.count.low) && p.isInteger(t.count.high))) return "count: integer|Long expected";
              }
              if (t.sum != null && t.hasOwnProperty("sum")) {
                if (r._sum = 1, typeof t.sum !== "number") return "sum: number expected";
              }
              if (t.bucketCounts != null && t.hasOwnProperty("bucketCounts")) {
                if (!Array.isArray(t.bucketCounts)) return "bucketCounts: array expected";
                for (var n = 0; n < t.bucketCounts.length; ++n) if (!p.isInteger(t.bucketCounts[n]) && !(t.bucketCounts[n] && p.isInteger(t.bucketCounts[n].low) && p.isInteger(t.bucketCounts[n].high))) return "bucketCounts: integer|Long[] expected";
              }
              if (t.explicitBounds != null && t.hasOwnProperty("explicitBounds")) {
                if (!Array.isArray(t.explicitBounds)) return "explicitBounds: array expected";
                for (var n = 0; n < t.explicitBounds.length; ++n) if (typeof t.explicitBounds[n] !== "number") return "explicitBounds: number[] expected";
              }
              if (t.exemplars != null && t.hasOwnProperty("exemplars")) {
                if (!Array.isArray(t.exemplars)) return "exemplars: array expected";
                for (var n = 0; n < t.exemplars.length; ++n) {
                  var c = a.opentelemetry.proto.metrics.v1.Exemplar.verify(t.exemplars[n]);
                  if (c) return "exemplars." + c;
                }
              }
              if (t.flags != null && t.hasOwnProperty("flags")) {
                if (!p.isInteger(t.flags)) return "flags: integer expected";
              }
              if (t.min != null && t.hasOwnProperty("min")) {
                if (r._min = 1, typeof t.min !== "number") return "min: number expected";
              }
              if (t.max != null && t.hasOwnProperty("max")) {
                if (r._max = 1, typeof t.max !== "number") return "max: number expected";
              }
              return null;
            }, i.fromObject = function(t) {
              if (t instanceof a.opentelemetry.proto.metrics.v1.HistogramDataPoint) return t;
              var r = new a.opentelemetry.proto.metrics.v1.HistogramDataPoint;
              if (t.attributes) {
                if (!Array.isArray(t.attributes)) throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: array expected");
                r.attributes = [];
                for (var n = 0; n < t.attributes.length; ++n) {
                  if (typeof t.attributes[n] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: object expected");
                  r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.attributes[n]);
                }
              }
              if (t.startTimeUnixNano != null) {
                if (p.Long) (r.startTimeUnixNano = p.Long.fromValue(t.startTimeUnixNano)).unsigned = !1; else if (typeof t.startTimeUnixNano === "string") r.startTimeUnixNano = parseInt(t.startTimeUnixNano, 10); else if (typeof t.startTimeUnixNano === "number") r.startTimeUnixNano = t.startTimeUnixNano; else if (typeof t.startTimeUnixNano === "object") r.startTimeUnixNano = new p.LongBits(t.startTimeUnixNano.low >>> 0, t.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (t.timeUnixNano != null) {
                if (p.Long) (r.timeUnixNano = p.Long.fromValue(t.timeUnixNano)).unsigned = !1; else if (typeof t.timeUnixNano === "string") r.timeUnixNano = parseInt(t.timeUnixNano, 10); else if (typeof t.timeUnixNano === "number") r.timeUnixNano = t.timeUnixNano; else if (typeof t.timeUnixNano === "object") r.timeUnixNano = new p.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber();
              }
              if (t.count != null) {
                if (p.Long) (r.count = p.Long.fromValue(t.count)).unsigned = !1; else if (typeof t.count === "string") r.count = parseInt(t.count, 10); else if (typeof t.count === "number") r.count = t.count; else if (typeof t.count === "object") r.count = new p.LongBits(t.count.low >>> 0, t.count.high >>> 0).toNumber();
              }
              if (t.sum != null) r.sum = Number(t.sum);
              if (t.bucketCounts) {
                if (!Array.isArray(t.bucketCounts)) throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.bucketCounts: array expected");
                r.bucketCounts = [];
                for (var n = 0; n < t.bucketCounts.length; ++n) if (p.Long) (r.bucketCounts[n] = p.Long.fromValue(t.bucketCounts[n])).unsigned = !1; else if (typeof t.bucketCounts[n] === "string") r.bucketCounts[n] = parseInt(t.bucketCounts[n], 10); else if (typeof t.bucketCounts[n] === "number") r.bucketCounts[n] = t.bucketCounts[n]; else if (typeof t.bucketCounts[n] === "object") r.bucketCounts[n] = new p.LongBits(t.bucketCounts[n].low >>> 0, t.bucketCounts[n].high >>> 0).toNumber();
              }
              if (t.explicitBounds) {
                if (!Array.isArray(t.explicitBounds)) throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.explicitBounds: array expected");
                r.explicitBounds = [];
                for (var n = 0; n < t.explicitBounds.length; ++n) r.explicitBounds[n] = Number(t.explicitBounds[n]);
              }
              if (t.exemplars) {
                if (!Array.isArray(t.exemplars)) throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: array expected");
                r.exemplars = [];
                for (var n = 0; n < t.exemplars.length; ++n) {
                  if (typeof t.exemplars[n] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: object expected");
                  r.exemplars[n] = a.opentelemetry.proto.metrics.v1.Exemplar.fromObject(t.exemplars[n]);
                }
              }
              if (t.flags != null) r.flags = t.flags >>> 0;
              if (t.min != null) r.min = Number(t.min);
              if (t.max != null) r.max = Number(t.max);
              return r;
            }, i.toObject = function(t, r) {
              if (!r) r = {};
              var n = {};
              if (r.arrays || r.defaults) n.bucketCounts = [], n.explicitBounds = [], n.exemplars = [], 
              n.attributes = [];
              if (r.defaults) {
                if (p.Long) {
                  var c = new p.Long(0, 0, !1);
                  n.startTimeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                } else n.startTimeUnixNano = r.longs === String ? "0" : 0;
                if (p.Long) {
                  var c = new p.Long(0, 0, !1);
                  n.timeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                } else n.timeUnixNano = r.longs === String ? "0" : 0;
                if (p.Long) {
                  var c = new p.Long(0, 0, !1);
                  n.count = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                } else n.count = r.longs === String ? "0" : 0;
                n.flags = 0;
              }
              if (t.startTimeUnixNano != null && t.hasOwnProperty("startTimeUnixNano")) if (typeof t.startTimeUnixNano === "number") n.startTimeUnixNano = r.longs === String ? String(t.startTimeUnixNano) : t.startTimeUnixNano; else n.startTimeUnixNano = r.longs === String ? p.Long.prototype.toString.call(t.startTimeUnixNano) : r.longs === Number ? new p.LongBits(t.startTimeUnixNano.low >>> 0, t.startTimeUnixNano.high >>> 0).toNumber() : t.startTimeUnixNano;
              if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) if (typeof t.timeUnixNano === "number") n.timeUnixNano = r.longs === String ? String(t.timeUnixNano) : t.timeUnixNano; else n.timeUnixNano = r.longs === String ? p.Long.prototype.toString.call(t.timeUnixNano) : r.longs === Number ? new p.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber() : t.timeUnixNano;
              if (t.count != null && t.hasOwnProperty("count")) if (typeof t.count === "number") n.count = r.longs === String ? String(t.count) : t.count; else n.count = r.longs === String ? p.Long.prototype.toString.call(t.count) : r.longs === Number ? new p.LongBits(t.count.low >>> 0, t.count.high >>> 0).toNumber() : t.count;
              if (t.sum != null && t.hasOwnProperty("sum")) {
                if (n.sum = r.json && !isFinite(t.sum) ? String(t.sum) : t.sum, r.oneofs) n._sum = "sum";
              }
              if (t.bucketCounts && t.bucketCounts.length) {
                n.bucketCounts = [];
                for (var s = 0; s < t.bucketCounts.length; ++s) if (typeof t.bucketCounts[s] === "number") n.bucketCounts[s] = r.longs === String ? String(t.bucketCounts[s]) : t.bucketCounts[s]; else n.bucketCounts[s] = r.longs === String ? p.Long.prototype.toString.call(t.bucketCounts[s]) : r.longs === Number ? new p.LongBits(t.bucketCounts[s].low >>> 0, t.bucketCounts[s].high >>> 0).toNumber() : t.bucketCounts[s];
              }
              if (t.explicitBounds && t.explicitBounds.length) {
                n.explicitBounds = [];
                for (var s = 0; s < t.explicitBounds.length; ++s) n.explicitBounds[s] = r.json && !isFinite(t.explicitBounds[s]) ? String(t.explicitBounds[s]) : t.explicitBounds[s];
              }
              if (t.exemplars && t.exemplars.length) {
                n.exemplars = [];
                for (var s = 0; s < t.exemplars.length; ++s) n.exemplars[s] = a.opentelemetry.proto.metrics.v1.Exemplar.toObject(t.exemplars[s], r);
              }
              if (t.attributes && t.attributes.length) {
                n.attributes = [];
                for (var s = 0; s < t.attributes.length; ++s) n.attributes[s] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.attributes[s], r);
              }
              if (t.flags != null && t.hasOwnProperty("flags")) n.flags = t.flags;
              if (t.min != null && t.hasOwnProperty("min")) {
                if (n.min = r.json && !isFinite(t.min) ? String(t.min) : t.min, r.oneofs) n._min = "min";
              }
              if (t.max != null && t.hasOwnProperty("max")) {
                if (n.max = r.json && !isFinite(t.max) ? String(t.max) : t.max, r.oneofs) n._max = "max";
              }
              return n;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(t) {
              if (t === void 0) t = "type.googleapis.com";
              return t + "/opentelemetry.proto.metrics.v1.HistogramDataPoint";
            }, i;
          }(), d.ExponentialHistogramDataPoint = function() {
            function i(e) {
              if (this.attributes = [], this.exemplars = [], e) {
                for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
              }
            }
            i.prototype.attributes = p.emptyArray, i.prototype.startTimeUnixNano = null, i.prototype.timeUnixNano = null, 
            i.prototype.count = null, i.prototype.sum = null, i.prototype.scale = null, i.prototype.zeroCount = null, 
            i.prototype.positive = null, i.prototype.negative = null, i.prototype.flags = null, 
            i.prototype.exemplars = p.emptyArray, i.prototype.min = null, i.prototype.max = null, 
            i.prototype.zeroThreshold = null;
            var o;
            return Object.defineProperty(i.prototype, "_sum", {
              get: p.oneOfGetter(o = [ "sum" ]),
              set: p.oneOfSetter(o)
            }), Object.defineProperty(i.prototype, "_min", {
              get: p.oneOfGetter(o = [ "min" ]),
              set: p.oneOfSetter(o)
            }), Object.defineProperty(i.prototype, "_max", {
              get: p.oneOfGetter(o = [ "max" ]),
              set: p.oneOfSetter(o)
            }), i.create = function(t) {
              return new i(t);
            }, i.encode = function(t, r) {
              if (!r) r = g.create();
              if (t.attributes != null && t.attributes.length) for (var n = 0; n < t.attributes.length; ++n) a.opentelemetry.proto.common.v1.KeyValue.encode(t.attributes[n], r.uint32(10).fork()).ldelim();
              if (t.startTimeUnixNano != null && Object.hasOwnProperty.call(t, "startTimeUnixNano")) r.uint32(17).fixed64(t.startTimeUnixNano);
              if (t.timeUnixNano != null && Object.hasOwnProperty.call(t, "timeUnixNano")) r.uint32(25).fixed64(t.timeUnixNano);
              if (t.count != null && Object.hasOwnProperty.call(t, "count")) r.uint32(33).fixed64(t.count);
              if (t.sum != null && Object.hasOwnProperty.call(t, "sum")) r.uint32(41).double(t.sum);
              if (t.scale != null && Object.hasOwnProperty.call(t, "scale")) r.uint32(48).sint32(t.scale);
              if (t.zeroCount != null && Object.hasOwnProperty.call(t, "zeroCount")) r.uint32(57).fixed64(t.zeroCount);
              if (t.positive != null && Object.hasOwnProperty.call(t, "positive")) a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(t.positive, r.uint32(66).fork()).ldelim();
              if (t.negative != null && Object.hasOwnProperty.call(t, "negative")) a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(t.negative, r.uint32(74).fork()).ldelim();
              if (t.flags != null && Object.hasOwnProperty.call(t, "flags")) r.uint32(80).uint32(t.flags);
              if (t.exemplars != null && t.exemplars.length) for (var n = 0; n < t.exemplars.length; ++n) a.opentelemetry.proto.metrics.v1.Exemplar.encode(t.exemplars[n], r.uint32(90).fork()).ldelim();
              if (t.min != null && Object.hasOwnProperty.call(t, "min")) r.uint32(97).double(t.min);
              if (t.max != null && Object.hasOwnProperty.call(t, "max")) r.uint32(105).double(t.max);
              if (t.zeroThreshold != null && Object.hasOwnProperty.call(t, "zeroThreshold")) r.uint32(113).double(t.zeroThreshold);
              return r;
            }, i.encodeDelimited = function(t, r) {
              return this.encode(t, r).ldelim();
            }, i.decode = function(t, r, n) {
              if (!(t instanceof h)) t = h.create(t);
              var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint;
              while (t.pos < c) {
                var m = t.uint32();
                if (m === n) break;
                switch (m >>> 3) {
                 case 1:
                  {
                    if (!(s.attributes && s.attributes.length)) s.attributes = [];
                    s.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                    break;
                  }

                 case 2:
                  {
                    s.startTimeUnixNano = t.fixed64();
                    break;
                  }

                 case 3:
                  {
                    s.timeUnixNano = t.fixed64();
                    break;
                  }

                 case 4:
                  {
                    s.count = t.fixed64();
                    break;
                  }

                 case 5:
                  {
                    s.sum = t.double();
                    break;
                  }

                 case 6:
                  {
                    s.scale = t.sint32();
                    break;
                  }

                 case 7:
                  {
                    s.zeroCount = t.fixed64();
                    break;
                  }

                 case 8:
                  {
                    s.positive = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(t, t.uint32());
                    break;
                  }

                 case 9:
                  {
                    s.negative = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(t, t.uint32());
                    break;
                  }

                 case 10:
                  {
                    s.flags = t.uint32();
                    break;
                  }

                 case 11:
                  {
                    if (!(s.exemplars && s.exemplars.length)) s.exemplars = [];
                    s.exemplars.push(a.opentelemetry.proto.metrics.v1.Exemplar.decode(t, t.uint32()));
                    break;
                  }

                 case 12:
                  {
                    s.min = t.double();
                    break;
                  }

                 case 13:
                  {
                    s.max = t.double();
                    break;
                  }

                 case 14:
                  {
                    s.zeroThreshold = t.double();
                    break;
                  }

                 default:
                  t.skipType(m & 7);
                  break;
                }
              }
              return s;
            }, i.decodeDelimited = function(t) {
              if (!(t instanceof h)) t = new h(t);
              return this.decode(t, t.uint32());
            }, i.verify = function(t) {
              if (typeof t !== "object" || t === null) return "object expected";
              var r = {};
              if (t.attributes != null && t.hasOwnProperty("attributes")) {
                if (!Array.isArray(t.attributes)) return "attributes: array expected";
                for (var n = 0; n < t.attributes.length; ++n) {
                  var c = a.opentelemetry.proto.common.v1.KeyValue.verify(t.attributes[n]);
                  if (c) return "attributes." + c;
                }
              }
              if (t.startTimeUnixNano != null && t.hasOwnProperty("startTimeUnixNano")) {
                if (!p.isInteger(t.startTimeUnixNano) && !(t.startTimeUnixNano && p.isInteger(t.startTimeUnixNano.low) && p.isInteger(t.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected";
              }
              if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                if (!p.isInteger(t.timeUnixNano) && !(t.timeUnixNano && p.isInteger(t.timeUnixNano.low) && p.isInteger(t.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
              }
              if (t.count != null && t.hasOwnProperty("count")) {
                if (!p.isInteger(t.count) && !(t.count && p.isInteger(t.count.low) && p.isInteger(t.count.high))) return "count: integer|Long expected";
              }
              if (t.sum != null && t.hasOwnProperty("sum")) {
                if (r._sum = 1, typeof t.sum !== "number") return "sum: number expected";
              }
              if (t.scale != null && t.hasOwnProperty("scale")) {
                if (!p.isInteger(t.scale)) return "scale: integer expected";
              }
              if (t.zeroCount != null && t.hasOwnProperty("zeroCount")) {
                if (!p.isInteger(t.zeroCount) && !(t.zeroCount && p.isInteger(t.zeroCount.low) && p.isInteger(t.zeroCount.high))) return "zeroCount: integer|Long expected";
              }
              if (t.positive != null && t.hasOwnProperty("positive")) {
                var c = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(t.positive);
                if (c) return "positive." + c;
              }
              if (t.negative != null && t.hasOwnProperty("negative")) {
                var c = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(t.negative);
                if (c) return "negative." + c;
              }
              if (t.flags != null && t.hasOwnProperty("flags")) {
                if (!p.isInteger(t.flags)) return "flags: integer expected";
              }
              if (t.exemplars != null && t.hasOwnProperty("exemplars")) {
                if (!Array.isArray(t.exemplars)) return "exemplars: array expected";
                for (var n = 0; n < t.exemplars.length; ++n) {
                  var c = a.opentelemetry.proto.metrics.v1.Exemplar.verify(t.exemplars[n]);
                  if (c) return "exemplars." + c;
                }
              }
              if (t.min != null && t.hasOwnProperty("min")) {
                if (r._min = 1, typeof t.min !== "number") return "min: number expected";
              }
              if (t.max != null && t.hasOwnProperty("max")) {
                if (r._max = 1, typeof t.max !== "number") return "max: number expected";
              }
              if (t.zeroThreshold != null && t.hasOwnProperty("zeroThreshold")) {
                if (typeof t.zeroThreshold !== "number") return "zeroThreshold: number expected";
              }
              return null;
            }, i.fromObject = function(t) {
              if (t instanceof a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint) return t;
              var r = new a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint;
              if (t.attributes) {
                if (!Array.isArray(t.attributes)) throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: array expected");
                r.attributes = [];
                for (var n = 0; n < t.attributes.length; ++n) {
                  if (typeof t.attributes[n] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: object expected");
                  r.attributes[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.attributes[n]);
                }
              }
              if (t.startTimeUnixNano != null) {
                if (p.Long) (r.startTimeUnixNano = p.Long.fromValue(t.startTimeUnixNano)).unsigned = !1; else if (typeof t.startTimeUnixNano === "string") r.startTimeUnixNano = parseInt(t.startTimeUnixNano, 10); else if (typeof t.startTimeUnixNano === "number") r.startTimeUnixNano = t.startTimeUnixNano; else if (typeof t.startTimeUnixNano === "object") r.startTimeUnixNano = new p.LongBits(t.startTimeUnixNano.low >>> 0, t.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (t.timeUnixNano != null) {
                if (p.Long) (r.timeUnixNano = p.Long.fromValue(t.timeUnixNano)).unsigned = !1; else if (typeof t.timeUnixNano === "string") r.timeUnixNano = parseInt(t.timeUnixNano, 10); else if (typeof t.timeUnixNano === "number") r.timeUnixNano = t.timeUnixNano; else if (typeof t.timeUnixNano === "object") r.timeUnixNano = new p.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber();
              }
              if (t.count != null) {
                if (p.Long) (r.count = p.Long.fromValue(t.count)).unsigned = !1; else if (typeof t.count === "string") r.count = parseInt(t.count, 10); else if (typeof t.count === "number") r.count = t.count; else if (typeof t.count === "object") r.count = new p.LongBits(t.count.low >>> 0, t.count.high >>> 0).toNumber();
              }
              if (t.sum != null) r.sum = Number(t.sum);
              if (t.scale != null) r.scale = t.scale | 0;
              if (t.zeroCount != null) {
                if (p.Long) (r.zeroCount = p.Long.fromValue(t.zeroCount)).unsigned = !1; else if (typeof t.zeroCount === "string") r.zeroCount = parseInt(t.zeroCount, 10); else if (typeof t.zeroCount === "number") r.zeroCount = t.zeroCount; else if (typeof t.zeroCount === "object") r.zeroCount = new p.LongBits(t.zeroCount.low >>> 0, t.zeroCount.high >>> 0).toNumber();
              }
              if (t.positive != null) {
                if (typeof t.positive !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.positive: object expected");
                r.positive = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(t.positive);
              }
              if (t.negative != null) {
                if (typeof t.negative !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.negative: object expected");
                r.negative = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(t.negative);
              }
              if (t.flags != null) r.flags = t.flags >>> 0;
              if (t.exemplars) {
                if (!Array.isArray(t.exemplars)) throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: array expected");
                r.exemplars = [];
                for (var n = 0; n < t.exemplars.length; ++n) {
                  if (typeof t.exemplars[n] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: object expected");
                  r.exemplars[n] = a.opentelemetry.proto.metrics.v1.Exemplar.fromObject(t.exemplars[n]);
                }
              }
              if (t.min != null) r.min = Number(t.min);
              if (t.max != null) r.max = Number(t.max);
              if (t.zeroThreshold != null) r.zeroThreshold = Number(t.zeroThreshold);
              return r;
            }, i.toObject = function(t, r) {
              if (!r) r = {};
              var n = {};
              if (r.arrays || r.defaults) n.attributes = [], n.exemplars = [];
              if (r.defaults) {
                if (p.Long) {
                  var c = new p.Long(0, 0, !1);
                  n.startTimeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                } else n.startTimeUnixNano = r.longs === String ? "0" : 0;
                if (p.Long) {
                  var c = new p.Long(0, 0, !1);
                  n.timeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                } else n.timeUnixNano = r.longs === String ? "0" : 0;
                if (p.Long) {
                  var c = new p.Long(0, 0, !1);
                  n.count = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                } else n.count = r.longs === String ? "0" : 0;
                if (n.scale = 0, p.Long) {
                  var c = new p.Long(0, 0, !1);
                  n.zeroCount = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                } else n.zeroCount = r.longs === String ? "0" : 0;
                n.positive = null, n.negative = null, n.flags = 0, n.zeroThreshold = 0;
              }
              if (t.attributes && t.attributes.length) {
                n.attributes = [];
                for (var s = 0; s < t.attributes.length; ++s) n.attributes[s] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.attributes[s], r);
              }
              if (t.startTimeUnixNano != null && t.hasOwnProperty("startTimeUnixNano")) if (typeof t.startTimeUnixNano === "number") n.startTimeUnixNano = r.longs === String ? String(t.startTimeUnixNano) : t.startTimeUnixNano; else n.startTimeUnixNano = r.longs === String ? p.Long.prototype.toString.call(t.startTimeUnixNano) : r.longs === Number ? new p.LongBits(t.startTimeUnixNano.low >>> 0, t.startTimeUnixNano.high >>> 0).toNumber() : t.startTimeUnixNano;
              if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) if (typeof t.timeUnixNano === "number") n.timeUnixNano = r.longs === String ? String(t.timeUnixNano) : t.timeUnixNano; else n.timeUnixNano = r.longs === String ? p.Long.prototype.toString.call(t.timeUnixNano) : r.longs === Number ? new p.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber() : t.timeUnixNano;
              if (t.count != null && t.hasOwnProperty("count")) if (typeof t.count === "number") n.count = r.longs === String ? String(t.count) : t.count; else n.count = r.longs === String ? p.Long.prototype.toString.call(t.count) : r.longs === Number ? new p.LongBits(t.count.low >>> 0, t.count.high >>> 0).toNumber() : t.count;
              if (t.sum != null && t.hasOwnProperty("sum")) {
                if (n.sum = r.json && !isFinite(t.sum) ? String(t.sum) : t.sum, r.oneofs) n._sum = "sum";
              }
              if (t.scale != null && t.hasOwnProperty("scale")) n.scale = t.scale;
              if (t.zeroCount != null && t.hasOwnProperty("zeroCount")) if (typeof t.zeroCount === "number") n.zeroCount = r.longs === String ? String(t.zeroCount) : t.zeroCount; else n.zeroCount = r.longs === String ? p.Long.prototype.toString.call(t.zeroCount) : r.longs === Number ? new p.LongBits(t.zeroCount.low >>> 0, t.zeroCount.high >>> 0).toNumber() : t.zeroCount;
              if (t.positive != null && t.hasOwnProperty("positive")) n.positive = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(t.positive, r);
              if (t.negative != null && t.hasOwnProperty("negative")) n.negative = a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(t.negative, r);
              if (t.flags != null && t.hasOwnProperty("flags")) n.flags = t.flags;
              if (t.exemplars && t.exemplars.length) {
                n.exemplars = [];
                for (var s = 0; s < t.exemplars.length; ++s) n.exemplars[s] = a.opentelemetry.proto.metrics.v1.Exemplar.toObject(t.exemplars[s], r);
              }
              if (t.min != null && t.hasOwnProperty("min")) {
                if (n.min = r.json && !isFinite(t.min) ? String(t.min) : t.min, r.oneofs) n._min = "min";
              }
              if (t.max != null && t.hasOwnProperty("max")) {
                if (n.max = r.json && !isFinite(t.max) ? String(t.max) : t.max, r.oneofs) n._max = "max";
              }
              if (t.zeroThreshold != null && t.hasOwnProperty("zeroThreshold")) n.zeroThreshold = r.json && !isFinite(t.zeroThreshold) ? String(t.zeroThreshold) : t.zeroThreshold;
              return n;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(t) {
              if (t === void 0) t = "type.googleapis.com";
              return t + "/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint";
            }, i.Buckets = function() {
              function e(t) {
                if (this.bucketCounts = [], t) {
                  for (var r = Object.keys(t), n = 0; n < r.length; ++n) if (t[r[n]] != null) this[r[n]] = t[r[n]];
                }
              }
              return e.prototype.offset = null, e.prototype.bucketCounts = p.emptyArray, e.create = function(r) {
                return new e(r);
              }, e.encode = function(r, n) {
                if (!n) n = g.create();
                if (r.offset != null && Object.hasOwnProperty.call(r, "offset")) n.uint32(8).sint32(r.offset);
                if (r.bucketCounts != null && r.bucketCounts.length) {
                  n.uint32(18).fork();
                  for (var c = 0; c < r.bucketCounts.length; ++c) n.uint64(r.bucketCounts[c]);
                  n.ldelim();
                }
                return n;
              }, e.encodeDelimited = function(r, n) {
                return this.encode(r, n).ldelim();
              }, e.decode = function(r, n, c) {
                if (!(r instanceof h)) r = h.create(r);
                var s = n === void 0 ? r.len : r.pos + n, m = new a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets;
                while (r.pos < s) {
                  var U = r.uint32();
                  if (U === c) break;
                  switch (U >>> 3) {
                   case 1:
                    {
                      m.offset = r.sint32();
                      break;
                    }

                   case 2:
                    {
                      if (!(m.bucketCounts && m.bucketCounts.length)) m.bucketCounts = [];
                      if ((U & 7) === 2) {
                        var Q = r.uint32() + r.pos;
                        while (r.pos < Q) m.bucketCounts.push(r.uint64());
                      } else m.bucketCounts.push(r.uint64());
                      break;
                    }

                   default:
                    r.skipType(U & 7);
                    break;
                  }
                }
                return m;
              }, e.decodeDelimited = function(r) {
                if (!(r instanceof h)) r = new h(r);
                return this.decode(r, r.uint32());
              }, e.verify = function(r) {
                if (typeof r !== "object" || r === null) return "object expected";
                if (r.offset != null && r.hasOwnProperty("offset")) {
                  if (!p.isInteger(r.offset)) return "offset: integer expected";
                }
                if (r.bucketCounts != null && r.hasOwnProperty("bucketCounts")) {
                  if (!Array.isArray(r.bucketCounts)) return "bucketCounts: array expected";
                  for (var n = 0; n < r.bucketCounts.length; ++n) if (!p.isInteger(r.bucketCounts[n]) && !(r.bucketCounts[n] && p.isInteger(r.bucketCounts[n].low) && p.isInteger(r.bucketCounts[n].high))) return "bucketCounts: integer|Long[] expected";
                }
                return null;
              }, e.fromObject = function(r) {
                if (r instanceof a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets) return r;
                var n = new a.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets;
                if (r.offset != null) n.offset = r.offset | 0;
                if (r.bucketCounts) {
                  if (!Array.isArray(r.bucketCounts)) throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.bucketCounts: array expected");
                  n.bucketCounts = [];
                  for (var c = 0; c < r.bucketCounts.length; ++c) if (p.Long) (n.bucketCounts[c] = p.Long.fromValue(r.bucketCounts[c])).unsigned = !0; else if (typeof r.bucketCounts[c] === "string") n.bucketCounts[c] = parseInt(r.bucketCounts[c], 10); else if (typeof r.bucketCounts[c] === "number") n.bucketCounts[c] = r.bucketCounts[c]; else if (typeof r.bucketCounts[c] === "object") n.bucketCounts[c] = new p.LongBits(r.bucketCounts[c].low >>> 0, r.bucketCounts[c].high >>> 0).toNumber(!0);
                }
                return n;
              }, e.toObject = function(r, n) {
                if (!n) n = {};
                var c = {};
                if (n.arrays || n.defaults) c.bucketCounts = [];
                if (n.defaults) c.offset = 0;
                if (r.offset != null && r.hasOwnProperty("offset")) c.offset = r.offset;
                if (r.bucketCounts && r.bucketCounts.length) {
                  c.bucketCounts = [];
                  for (var s = 0; s < r.bucketCounts.length; ++s) if (typeof r.bucketCounts[s] === "number") c.bucketCounts[s] = n.longs === String ? String(r.bucketCounts[s]) : r.bucketCounts[s]; else c.bucketCounts[s] = n.longs === String ? p.Long.prototype.toString.call(r.bucketCounts[s]) : n.longs === Number ? new p.LongBits(r.bucketCounts[s].low >>> 0, r.bucketCounts[s].high >>> 0).toNumber(!0) : r.bucketCounts[s];
                }
                return c;
              }, e.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, e.getTypeUrl = function(r) {
                if (r === void 0) r = "type.googleapis.com";
                return r + "/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets";
              }, e;
            }(), i;
          }(), d.SummaryDataPoint = function() {
            function i(o) {
              if (this.attributes = [], this.quantileValues = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.attributes = p.emptyArray, i.prototype.startTimeUnixNano = null, 
            i.prototype.timeUnixNano = null, i.prototype.count = null, i.prototype.sum = null, 
            i.prototype.quantileValues = p.emptyArray, i.prototype.flags = null, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.startTimeUnixNano != null && Object.hasOwnProperty.call(e, "startTimeUnixNano")) t.uint32(17).fixed64(e.startTimeUnixNano);
              if (e.timeUnixNano != null && Object.hasOwnProperty.call(e, "timeUnixNano")) t.uint32(25).fixed64(e.timeUnixNano);
              if (e.count != null && Object.hasOwnProperty.call(e, "count")) t.uint32(33).fixed64(e.count);
              if (e.sum != null && Object.hasOwnProperty.call(e, "sum")) t.uint32(41).double(e.sum);
              if (e.quantileValues != null && e.quantileValues.length) for (var r = 0; r < e.quantileValues.length; ++r) a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.encode(e.quantileValues[r], t.uint32(50).fork()).ldelim();
              if (e.attributes != null && e.attributes.length) for (var r = 0; r < e.attributes.length; ++r) a.opentelemetry.proto.common.v1.KeyValue.encode(e.attributes[r], t.uint32(58).fork()).ldelim();
              if (e.flags != null && Object.hasOwnProperty.call(e, "flags")) t.uint32(64).uint32(e.flags);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.metrics.v1.SummaryDataPoint;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 7:
                  {
                    if (!(c.attributes && c.attributes.length)) c.attributes = [];
                    c.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(e, e.uint32()));
                    break;
                  }

                 case 2:
                  {
                    c.startTimeUnixNano = e.fixed64();
                    break;
                  }

                 case 3:
                  {
                    c.timeUnixNano = e.fixed64();
                    break;
                  }

                 case 4:
                  {
                    c.count = e.fixed64();
                    break;
                  }

                 case 5:
                  {
                    c.sum = e.double();
                    break;
                  }

                 case 6:
                  {
                    if (!(c.quantileValues && c.quantileValues.length)) c.quantileValues = [];
                    c.quantileValues.push(a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.decode(e, e.uint32()));
                    break;
                  }

                 case 8:
                  {
                    c.flags = e.uint32();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.attributes != null && e.hasOwnProperty("attributes")) {
                if (!Array.isArray(e.attributes)) return "attributes: array expected";
                for (var t = 0; t < e.attributes.length; ++t) {
                  var r = a.opentelemetry.proto.common.v1.KeyValue.verify(e.attributes[t]);
                  if (r) return "attributes." + r;
                }
              }
              if (e.startTimeUnixNano != null && e.hasOwnProperty("startTimeUnixNano")) {
                if (!p.isInteger(e.startTimeUnixNano) && !(e.startTimeUnixNano && p.isInteger(e.startTimeUnixNano.low) && p.isInteger(e.startTimeUnixNano.high))) return "startTimeUnixNano: integer|Long expected";
              }
              if (e.timeUnixNano != null && e.hasOwnProperty("timeUnixNano")) {
                if (!p.isInteger(e.timeUnixNano) && !(e.timeUnixNano && p.isInteger(e.timeUnixNano.low) && p.isInteger(e.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
              }
              if (e.count != null && e.hasOwnProperty("count")) {
                if (!p.isInteger(e.count) && !(e.count && p.isInteger(e.count.low) && p.isInteger(e.count.high))) return "count: integer|Long expected";
              }
              if (e.sum != null && e.hasOwnProperty("sum")) {
                if (typeof e.sum !== "number") return "sum: number expected";
              }
              if (e.quantileValues != null && e.hasOwnProperty("quantileValues")) {
                if (!Array.isArray(e.quantileValues)) return "quantileValues: array expected";
                for (var t = 0; t < e.quantileValues.length; ++t) {
                  var r = a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.verify(e.quantileValues[t]);
                  if (r) return "quantileValues." + r;
                }
              }
              if (e.flags != null && e.hasOwnProperty("flags")) {
                if (!p.isInteger(e.flags)) return "flags: integer expected";
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.metrics.v1.SummaryDataPoint) return e;
              var t = new a.opentelemetry.proto.metrics.v1.SummaryDataPoint;
              if (e.attributes) {
                if (!Array.isArray(e.attributes)) throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: array expected");
                t.attributes = [];
                for (var r = 0; r < e.attributes.length; ++r) {
                  if (typeof e.attributes[r] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: object expected");
                  t.attributes[r] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(e.attributes[r]);
                }
              }
              if (e.startTimeUnixNano != null) {
                if (p.Long) (t.startTimeUnixNano = p.Long.fromValue(e.startTimeUnixNano)).unsigned = !1; else if (typeof e.startTimeUnixNano === "string") t.startTimeUnixNano = parseInt(e.startTimeUnixNano, 10); else if (typeof e.startTimeUnixNano === "number") t.startTimeUnixNano = e.startTimeUnixNano; else if (typeof e.startTimeUnixNano === "object") t.startTimeUnixNano = new p.LongBits(e.startTimeUnixNano.low >>> 0, e.startTimeUnixNano.high >>> 0).toNumber();
              }
              if (e.timeUnixNano != null) {
                if (p.Long) (t.timeUnixNano = p.Long.fromValue(e.timeUnixNano)).unsigned = !1; else if (typeof e.timeUnixNano === "string") t.timeUnixNano = parseInt(e.timeUnixNano, 10); else if (typeof e.timeUnixNano === "number") t.timeUnixNano = e.timeUnixNano; else if (typeof e.timeUnixNano === "object") t.timeUnixNano = new p.LongBits(e.timeUnixNano.low >>> 0, e.timeUnixNano.high >>> 0).toNumber();
              }
              if (e.count != null) {
                if (p.Long) (t.count = p.Long.fromValue(e.count)).unsigned = !1; else if (typeof e.count === "string") t.count = parseInt(e.count, 10); else if (typeof e.count === "number") t.count = e.count; else if (typeof e.count === "object") t.count = new p.LongBits(e.count.low >>> 0, e.count.high >>> 0).toNumber();
              }
              if (e.sum != null) t.sum = Number(e.sum);
              if (e.quantileValues) {
                if (!Array.isArray(e.quantileValues)) throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: array expected");
                t.quantileValues = [];
                for (var r = 0; r < e.quantileValues.length; ++r) {
                  if (typeof e.quantileValues[r] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: object expected");
                  t.quantileValues[r] = a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.fromObject(e.quantileValues[r]);
                }
              }
              if (e.flags != null) t.flags = e.flags >>> 0;
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.quantileValues = [], r.attributes = [];
              if (t.defaults) {
                if (p.Long) {
                  var n = new p.Long(0, 0, !1);
                  r.startTimeUnixNano = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                } else r.startTimeUnixNano = t.longs === String ? "0" : 0;
                if (p.Long) {
                  var n = new p.Long(0, 0, !1);
                  r.timeUnixNano = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                } else r.timeUnixNano = t.longs === String ? "0" : 0;
                if (p.Long) {
                  var n = new p.Long(0, 0, !1);
                  r.count = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                } else r.count = t.longs === String ? "0" : 0;
                r.sum = 0, r.flags = 0;
              }
              if (e.startTimeUnixNano != null && e.hasOwnProperty("startTimeUnixNano")) if (typeof e.startTimeUnixNano === "number") r.startTimeUnixNano = t.longs === String ? String(e.startTimeUnixNano) : e.startTimeUnixNano; else r.startTimeUnixNano = t.longs === String ? p.Long.prototype.toString.call(e.startTimeUnixNano) : t.longs === Number ? new p.LongBits(e.startTimeUnixNano.low >>> 0, e.startTimeUnixNano.high >>> 0).toNumber() : e.startTimeUnixNano;
              if (e.timeUnixNano != null && e.hasOwnProperty("timeUnixNano")) if (typeof e.timeUnixNano === "number") r.timeUnixNano = t.longs === String ? String(e.timeUnixNano) : e.timeUnixNano; else r.timeUnixNano = t.longs === String ? p.Long.prototype.toString.call(e.timeUnixNano) : t.longs === Number ? new p.LongBits(e.timeUnixNano.low >>> 0, e.timeUnixNano.high >>> 0).toNumber() : e.timeUnixNano;
              if (e.count != null && e.hasOwnProperty("count")) if (typeof e.count === "number") r.count = t.longs === String ? String(e.count) : e.count; else r.count = t.longs === String ? p.Long.prototype.toString.call(e.count) : t.longs === Number ? new p.LongBits(e.count.low >>> 0, e.count.high >>> 0).toNumber() : e.count;
              if (e.sum != null && e.hasOwnProperty("sum")) r.sum = t.json && !isFinite(e.sum) ? String(e.sum) : e.sum;
              if (e.quantileValues && e.quantileValues.length) {
                r.quantileValues = [];
                for (var c = 0; c < e.quantileValues.length; ++c) r.quantileValues[c] = a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.toObject(e.quantileValues[c], t);
              }
              if (e.attributes && e.attributes.length) {
                r.attributes = [];
                for (var c = 0; c < e.attributes.length; ++c) r.attributes[c] = a.opentelemetry.proto.common.v1.KeyValue.toObject(e.attributes[c], t);
              }
              if (e.flags != null && e.hasOwnProperty("flags")) r.flags = e.flags;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.metrics.v1.SummaryDataPoint";
            }, i.ValueAtQuantile = function() {
              function o(e) {
                if (e) {
                  for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
                }
              }
              return o.prototype.quantile = null, o.prototype.value = null, o.create = function(t) {
                return new o(t);
              }, o.encode = function(t, r) {
                if (!r) r = g.create();
                if (t.quantile != null && Object.hasOwnProperty.call(t, "quantile")) r.uint32(9).double(t.quantile);
                if (t.value != null && Object.hasOwnProperty.call(t, "value")) r.uint32(17).double(t.value);
                return r;
              }, o.encodeDelimited = function(t, r) {
                return this.encode(t, r).ldelim();
              }, o.decode = function(t, r, n) {
                if (!(t instanceof h)) t = h.create(t);
                var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile;
                while (t.pos < c) {
                  var m = t.uint32();
                  if (m === n) break;
                  switch (m >>> 3) {
                   case 1:
                    {
                      s.quantile = t.double();
                      break;
                    }

                   case 2:
                    {
                      s.value = t.double();
                      break;
                    }

                   default:
                    t.skipType(m & 7);
                    break;
                  }
                }
                return s;
              }, o.decodeDelimited = function(t) {
                if (!(t instanceof h)) t = new h(t);
                return this.decode(t, t.uint32());
              }, o.verify = function(t) {
                if (typeof t !== "object" || t === null) return "object expected";
                if (t.quantile != null && t.hasOwnProperty("quantile")) {
                  if (typeof t.quantile !== "number") return "quantile: number expected";
                }
                if (t.value != null && t.hasOwnProperty("value")) {
                  if (typeof t.value !== "number") return "value: number expected";
                }
                return null;
              }, o.fromObject = function(t) {
                if (t instanceof a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile) return t;
                var r = new a.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile;
                if (t.quantile != null) r.quantile = Number(t.quantile);
                if (t.value != null) r.value = Number(t.value);
                return r;
              }, o.toObject = function(t, r) {
                if (!r) r = {};
                var n = {};
                if (r.defaults) n.quantile = 0, n.value = 0;
                if (t.quantile != null && t.hasOwnProperty("quantile")) n.quantile = r.json && !isFinite(t.quantile) ? String(t.quantile) : t.quantile;
                if (t.value != null && t.hasOwnProperty("value")) n.value = r.json && !isFinite(t.value) ? String(t.value) : t.value;
                return n;
              }, o.prototype.toJSON = function() {
                return this.constructor.toObject(this, S.util.toJSONOptions);
              }, o.getTypeUrl = function(t) {
                if (t === void 0) t = "type.googleapis.com";
                return t + "/opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile";
              }, o;
            }(), i;
          }(), d.Exemplar = function() {
            function i(e) {
              if (this.filteredAttributes = [], e) {
                for (var t = Object.keys(e), r = 0; r < t.length; ++r) if (e[t[r]] != null) this[t[r]] = e[t[r]];
              }
            }
            i.prototype.filteredAttributes = p.emptyArray, i.prototype.timeUnixNano = null, 
            i.prototype.asDouble = null, i.prototype.asInt = null, i.prototype.spanId = null, 
            i.prototype.traceId = null;
            var o;
            return Object.defineProperty(i.prototype, "value", {
              get: p.oneOfGetter(o = [ "asDouble", "asInt" ]),
              set: p.oneOfSetter(o)
            }), i.create = function(t) {
              return new i(t);
            }, i.encode = function(t, r) {
              if (!r) r = g.create();
              if (t.timeUnixNano != null && Object.hasOwnProperty.call(t, "timeUnixNano")) r.uint32(17).fixed64(t.timeUnixNano);
              if (t.asDouble != null && Object.hasOwnProperty.call(t, "asDouble")) r.uint32(25).double(t.asDouble);
              if (t.spanId != null && Object.hasOwnProperty.call(t, "spanId")) r.uint32(34).bytes(t.spanId);
              if (t.traceId != null && Object.hasOwnProperty.call(t, "traceId")) r.uint32(42).bytes(t.traceId);
              if (t.asInt != null && Object.hasOwnProperty.call(t, "asInt")) r.uint32(49).sfixed64(t.asInt);
              if (t.filteredAttributes != null && t.filteredAttributes.length) for (var n = 0; n < t.filteredAttributes.length; ++n) a.opentelemetry.proto.common.v1.KeyValue.encode(t.filteredAttributes[n], r.uint32(58).fork()).ldelim();
              return r;
            }, i.encodeDelimited = function(t, r) {
              return this.encode(t, r).ldelim();
            }, i.decode = function(t, r, n) {
              if (!(t instanceof h)) t = h.create(t);
              var c = r === void 0 ? t.len : t.pos + r, s = new a.opentelemetry.proto.metrics.v1.Exemplar;
              while (t.pos < c) {
                var m = t.uint32();
                if (m === n) break;
                switch (m >>> 3) {
                 case 7:
                  {
                    if (!(s.filteredAttributes && s.filteredAttributes.length)) s.filteredAttributes = [];
                    s.filteredAttributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(t, t.uint32()));
                    break;
                  }

                 case 2:
                  {
                    s.timeUnixNano = t.fixed64();
                    break;
                  }

                 case 3:
                  {
                    s.asDouble = t.double();
                    break;
                  }

                 case 6:
                  {
                    s.asInt = t.sfixed64();
                    break;
                  }

                 case 4:
                  {
                    s.spanId = t.bytes();
                    break;
                  }

                 case 5:
                  {
                    s.traceId = t.bytes();
                    break;
                  }

                 default:
                  t.skipType(m & 7);
                  break;
                }
              }
              return s;
            }, i.decodeDelimited = function(t) {
              if (!(t instanceof h)) t = new h(t);
              return this.decode(t, t.uint32());
            }, i.verify = function(t) {
              if (typeof t !== "object" || t === null) return "object expected";
              var r = {};
              if (t.filteredAttributes != null && t.hasOwnProperty("filteredAttributes")) {
                if (!Array.isArray(t.filteredAttributes)) return "filteredAttributes: array expected";
                for (var n = 0; n < t.filteredAttributes.length; ++n) {
                  var c = a.opentelemetry.proto.common.v1.KeyValue.verify(t.filteredAttributes[n]);
                  if (c) return "filteredAttributes." + c;
                }
              }
              if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) {
                if (!p.isInteger(t.timeUnixNano) && !(t.timeUnixNano && p.isInteger(t.timeUnixNano.low) && p.isInteger(t.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
              }
              if (t.asDouble != null && t.hasOwnProperty("asDouble")) {
                if (r.value = 1, typeof t.asDouble !== "number") return "asDouble: number expected";
              }
              if (t.asInt != null && t.hasOwnProperty("asInt")) {
                if (r.value === 1) return "value: multiple values";
                if (r.value = 1, !p.isInteger(t.asInt) && !(t.asInt && p.isInteger(t.asInt.low) && p.isInteger(t.asInt.high))) return "asInt: integer|Long expected";
              }
              if (t.spanId != null && t.hasOwnProperty("spanId")) {
                if (!(t.spanId && typeof t.spanId.length === "number" || p.isString(t.spanId))) return "spanId: buffer expected";
              }
              if (t.traceId != null && t.hasOwnProperty("traceId")) {
                if (!(t.traceId && typeof t.traceId.length === "number" || p.isString(t.traceId))) return "traceId: buffer expected";
              }
              return null;
            }, i.fromObject = function(t) {
              if (t instanceof a.opentelemetry.proto.metrics.v1.Exemplar) return t;
              var r = new a.opentelemetry.proto.metrics.v1.Exemplar;
              if (t.filteredAttributes) {
                if (!Array.isArray(t.filteredAttributes)) throw TypeError(".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: array expected");
                r.filteredAttributes = [];
                for (var n = 0; n < t.filteredAttributes.length; ++n) {
                  if (typeof t.filteredAttributes[n] !== "object") throw TypeError(".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: object expected");
                  r.filteredAttributes[n] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(t.filteredAttributes[n]);
                }
              }
              if (t.timeUnixNano != null) {
                if (p.Long) (r.timeUnixNano = p.Long.fromValue(t.timeUnixNano)).unsigned = !1; else if (typeof t.timeUnixNano === "string") r.timeUnixNano = parseInt(t.timeUnixNano, 10); else if (typeof t.timeUnixNano === "number") r.timeUnixNano = t.timeUnixNano; else if (typeof t.timeUnixNano === "object") r.timeUnixNano = new p.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber();
              }
              if (t.asDouble != null) r.asDouble = Number(t.asDouble);
              if (t.asInt != null) {
                if (p.Long) (r.asInt = p.Long.fromValue(t.asInt)).unsigned = !1; else if (typeof t.asInt === "string") r.asInt = parseInt(t.asInt, 10); else if (typeof t.asInt === "number") r.asInt = t.asInt; else if (typeof t.asInt === "object") r.asInt = new p.LongBits(t.asInt.low >>> 0, t.asInt.high >>> 0).toNumber();
              }
              if (t.spanId != null) {
                if (typeof t.spanId === "string") p.base64.decode(t.spanId, r.spanId = p.newBuffer(p.base64.length(t.spanId)), 0); else if (t.spanId.length >= 0) r.spanId = t.spanId;
              }
              if (t.traceId != null) {
                if (typeof t.traceId === "string") p.base64.decode(t.traceId, r.traceId = p.newBuffer(p.base64.length(t.traceId)), 0); else if (t.traceId.length >= 0) r.traceId = t.traceId;
              }
              return r;
            }, i.toObject = function(t, r) {
              if (!r) r = {};
              var n = {};
              if (r.arrays || r.defaults) n.filteredAttributes = [];
              if (r.defaults) {
                if (p.Long) {
                  var c = new p.Long(0, 0, !1);
                  n.timeUnixNano = r.longs === String ? c.toString() : r.longs === Number ? c.toNumber() : c;
                } else n.timeUnixNano = r.longs === String ? "0" : 0;
                if (r.bytes === String) n.spanId = ""; else if (n.spanId = [], r.bytes !== Array) n.spanId = p.newBuffer(n.spanId);
                if (r.bytes === String) n.traceId = ""; else if (n.traceId = [], r.bytes !== Array) n.traceId = p.newBuffer(n.traceId);
              }
              if (t.timeUnixNano != null && t.hasOwnProperty("timeUnixNano")) if (typeof t.timeUnixNano === "number") n.timeUnixNano = r.longs === String ? String(t.timeUnixNano) : t.timeUnixNano; else n.timeUnixNano = r.longs === String ? p.Long.prototype.toString.call(t.timeUnixNano) : r.longs === Number ? new p.LongBits(t.timeUnixNano.low >>> 0, t.timeUnixNano.high >>> 0).toNumber() : t.timeUnixNano;
              if (t.asDouble != null && t.hasOwnProperty("asDouble")) {
                if (n.asDouble = r.json && !isFinite(t.asDouble) ? String(t.asDouble) : t.asDouble, 
                r.oneofs) n.value = "asDouble";
              }
              if (t.spanId != null && t.hasOwnProperty("spanId")) n.spanId = r.bytes === String ? p.base64.encode(t.spanId, 0, t.spanId.length) : r.bytes === Array ? Array.prototype.slice.call(t.spanId) : t.spanId;
              if (t.traceId != null && t.hasOwnProperty("traceId")) n.traceId = r.bytes === String ? p.base64.encode(t.traceId, 0, t.traceId.length) : r.bytes === Array ? Array.prototype.slice.call(t.traceId) : t.traceId;
              if (t.asInt != null && t.hasOwnProperty("asInt")) {
                if (typeof t.asInt === "number") n.asInt = r.longs === String ? String(t.asInt) : t.asInt; else n.asInt = r.longs === String ? p.Long.prototype.toString.call(t.asInt) : r.longs === Number ? new p.LongBits(t.asInt.low >>> 0, t.asInt.high >>> 0).toNumber() : t.asInt;
                if (r.oneofs) n.value = "asInt";
              }
              if (t.filteredAttributes && t.filteredAttributes.length) {
                n.filteredAttributes = [];
                for (var s = 0; s < t.filteredAttributes.length; ++s) n.filteredAttributes[s] = a.opentelemetry.proto.common.v1.KeyValue.toObject(t.filteredAttributes[s], r);
              }
              return n;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(t) {
              if (t === void 0) t = "type.googleapis.com";
              return t + "/opentelemetry.proto.metrics.v1.Exemplar";
            }, i;
          }(), d;
        }(), f;
      }(), u.logs = function() {
        var f = {};
        return f.v1 = function() {
          var d = {};
          return d.LogsData = function() {
            function i(o) {
              if (this.resourceLogs = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.resourceLogs = p.emptyArray, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.resourceLogs != null && e.resourceLogs.length) for (var r = 0; r < e.resourceLogs.length; ++r) a.opentelemetry.proto.logs.v1.ResourceLogs.encode(e.resourceLogs[r], t.uint32(10).fork()).ldelim();
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.logs.v1.LogsData;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    if (!(c.resourceLogs && c.resourceLogs.length)) c.resourceLogs = [];
                    c.resourceLogs.push(a.opentelemetry.proto.logs.v1.ResourceLogs.decode(e, e.uint32()));
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.resourceLogs != null && e.hasOwnProperty("resourceLogs")) {
                if (!Array.isArray(e.resourceLogs)) return "resourceLogs: array expected";
                for (var t = 0; t < e.resourceLogs.length; ++t) {
                  var r = a.opentelemetry.proto.logs.v1.ResourceLogs.verify(e.resourceLogs[t]);
                  if (r) return "resourceLogs." + r;
                }
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.logs.v1.LogsData) return e;
              var t = new a.opentelemetry.proto.logs.v1.LogsData;
              if (e.resourceLogs) {
                if (!Array.isArray(e.resourceLogs)) throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: array expected");
                t.resourceLogs = [];
                for (var r = 0; r < e.resourceLogs.length; ++r) {
                  if (typeof e.resourceLogs[r] !== "object") throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: object expected");
                  t.resourceLogs[r] = a.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(e.resourceLogs[r]);
                }
              }
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.resourceLogs = [];
              if (e.resourceLogs && e.resourceLogs.length) {
                r.resourceLogs = [];
                for (var n = 0; n < e.resourceLogs.length; ++n) r.resourceLogs[n] = a.opentelemetry.proto.logs.v1.ResourceLogs.toObject(e.resourceLogs[n], t);
              }
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.logs.v1.LogsData";
            }, i;
          }(), d.ResourceLogs = function() {
            function i(o) {
              if (this.scopeLogs = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.resource = null, i.prototype.scopeLogs = p.emptyArray, i.prototype.schemaUrl = null, 
            i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.resource != null && Object.hasOwnProperty.call(e, "resource")) a.opentelemetry.proto.resource.v1.Resource.encode(e.resource, t.uint32(10).fork()).ldelim();
              if (e.scopeLogs != null && e.scopeLogs.length) for (var r = 0; r < e.scopeLogs.length; ++r) a.opentelemetry.proto.logs.v1.ScopeLogs.encode(e.scopeLogs[r], t.uint32(18).fork()).ldelim();
              if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) t.uint32(26).string(e.schemaUrl);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.logs.v1.ResourceLogs;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    c.resource = a.opentelemetry.proto.resource.v1.Resource.decode(e, e.uint32());
                    break;
                  }

                 case 2:
                  {
                    if (!(c.scopeLogs && c.scopeLogs.length)) c.scopeLogs = [];
                    c.scopeLogs.push(a.opentelemetry.proto.logs.v1.ScopeLogs.decode(e, e.uint32()));
                    break;
                  }

                 case 3:
                  {
                    c.schemaUrl = e.string();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.resource != null && e.hasOwnProperty("resource")) {
                var t = a.opentelemetry.proto.resource.v1.Resource.verify(e.resource);
                if (t) return "resource." + t;
              }
              if (e.scopeLogs != null && e.hasOwnProperty("scopeLogs")) {
                if (!Array.isArray(e.scopeLogs)) return "scopeLogs: array expected";
                for (var r = 0; r < e.scopeLogs.length; ++r) {
                  var t = a.opentelemetry.proto.logs.v1.ScopeLogs.verify(e.scopeLogs[r]);
                  if (t) return "scopeLogs." + t;
                }
              }
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                if (!p.isString(e.schemaUrl)) return "schemaUrl: string expected";
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.logs.v1.ResourceLogs) return e;
              var t = new a.opentelemetry.proto.logs.v1.ResourceLogs;
              if (e.resource != null) {
                if (typeof e.resource !== "object") throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.resource: object expected");
                t.resource = a.opentelemetry.proto.resource.v1.Resource.fromObject(e.resource);
              }
              if (e.scopeLogs) {
                if (!Array.isArray(e.scopeLogs)) throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: array expected");
                t.scopeLogs = [];
                for (var r = 0; r < e.scopeLogs.length; ++r) {
                  if (typeof e.scopeLogs[r] !== "object") throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: object expected");
                  t.scopeLogs[r] = a.opentelemetry.proto.logs.v1.ScopeLogs.fromObject(e.scopeLogs[r]);
                }
              }
              if (e.schemaUrl != null) t.schemaUrl = String(e.schemaUrl);
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.scopeLogs = [];
              if (t.defaults) r.resource = null, r.schemaUrl = "";
              if (e.resource != null && e.hasOwnProperty("resource")) r.resource = a.opentelemetry.proto.resource.v1.Resource.toObject(e.resource, t);
              if (e.scopeLogs && e.scopeLogs.length) {
                r.scopeLogs = [];
                for (var n = 0; n < e.scopeLogs.length; ++n) r.scopeLogs[n] = a.opentelemetry.proto.logs.v1.ScopeLogs.toObject(e.scopeLogs[n], t);
              }
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) r.schemaUrl = e.schemaUrl;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.logs.v1.ResourceLogs";
            }, i;
          }(), d.ScopeLogs = function() {
            function i(o) {
              if (this.logRecords = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.scope = null, i.prototype.logRecords = p.emptyArray, i.prototype.schemaUrl = null, 
            i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.scope != null && Object.hasOwnProperty.call(e, "scope")) a.opentelemetry.proto.common.v1.InstrumentationScope.encode(e.scope, t.uint32(10).fork()).ldelim();
              if (e.logRecords != null && e.logRecords.length) for (var r = 0; r < e.logRecords.length; ++r) a.opentelemetry.proto.logs.v1.LogRecord.encode(e.logRecords[r], t.uint32(18).fork()).ldelim();
              if (e.schemaUrl != null && Object.hasOwnProperty.call(e, "schemaUrl")) t.uint32(26).string(e.schemaUrl);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.logs.v1.ScopeLogs;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    c.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.decode(e, e.uint32());
                    break;
                  }

                 case 2:
                  {
                    if (!(c.logRecords && c.logRecords.length)) c.logRecords = [];
                    c.logRecords.push(a.opentelemetry.proto.logs.v1.LogRecord.decode(e, e.uint32()));
                    break;
                  }

                 case 3:
                  {
                    c.schemaUrl = e.string();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.scope != null && e.hasOwnProperty("scope")) {
                var t = a.opentelemetry.proto.common.v1.InstrumentationScope.verify(e.scope);
                if (t) return "scope." + t;
              }
              if (e.logRecords != null && e.hasOwnProperty("logRecords")) {
                if (!Array.isArray(e.logRecords)) return "logRecords: array expected";
                for (var r = 0; r < e.logRecords.length; ++r) {
                  var t = a.opentelemetry.proto.logs.v1.LogRecord.verify(e.logRecords[r]);
                  if (t) return "logRecords." + t;
                }
              }
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) {
                if (!p.isString(e.schemaUrl)) return "schemaUrl: string expected";
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.logs.v1.ScopeLogs) return e;
              var t = new a.opentelemetry.proto.logs.v1.ScopeLogs;
              if (e.scope != null) {
                if (typeof e.scope !== "object") throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.scope: object expected");
                t.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(e.scope);
              }
              if (e.logRecords) {
                if (!Array.isArray(e.logRecords)) throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: array expected");
                t.logRecords = [];
                for (var r = 0; r < e.logRecords.length; ++r) {
                  if (typeof e.logRecords[r] !== "object") throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: object expected");
                  t.logRecords[r] = a.opentelemetry.proto.logs.v1.LogRecord.fromObject(e.logRecords[r]);
                }
              }
              if (e.schemaUrl != null) t.schemaUrl = String(e.schemaUrl);
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.logRecords = [];
              if (t.defaults) r.scope = null, r.schemaUrl = "";
              if (e.scope != null && e.hasOwnProperty("scope")) r.scope = a.opentelemetry.proto.common.v1.InstrumentationScope.toObject(e.scope, t);
              if (e.logRecords && e.logRecords.length) {
                r.logRecords = [];
                for (var n = 0; n < e.logRecords.length; ++n) r.logRecords[n] = a.opentelemetry.proto.logs.v1.LogRecord.toObject(e.logRecords[n], t);
              }
              if (e.schemaUrl != null && e.hasOwnProperty("schemaUrl")) r.schemaUrl = e.schemaUrl;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.logs.v1.ScopeLogs";
            }, i;
          }(), d.SeverityNumber = function() {
            var i = {}, o = Object.create(i);
            return o[i[0] = "SEVERITY_NUMBER_UNSPECIFIED"] = 0, o[i[1] = "SEVERITY_NUMBER_TRACE"] = 1, 
            o[i[2] = "SEVERITY_NUMBER_TRACE2"] = 2, o[i[3] = "SEVERITY_NUMBER_TRACE3"] = 3, 
            o[i[4] = "SEVERITY_NUMBER_TRACE4"] = 4, o[i[5] = "SEVERITY_NUMBER_DEBUG"] = 5, o[i[6] = "SEVERITY_NUMBER_DEBUG2"] = 6, 
            o[i[7] = "SEVERITY_NUMBER_DEBUG3"] = 7, o[i[8] = "SEVERITY_NUMBER_DEBUG4"] = 8, 
            o[i[9] = "SEVERITY_NUMBER_INFO"] = 9, o[i[10] = "SEVERITY_NUMBER_INFO2"] = 10, o[i[11] = "SEVERITY_NUMBER_INFO3"] = 11, 
            o[i[12] = "SEVERITY_NUMBER_INFO4"] = 12, o[i[13] = "SEVERITY_NUMBER_WARN"] = 13, 
            o[i[14] = "SEVERITY_NUMBER_WARN2"] = 14, o[i[15] = "SEVERITY_NUMBER_WARN3"] = 15, 
            o[i[16] = "SEVERITY_NUMBER_WARN4"] = 16, o[i[17] = "SEVERITY_NUMBER_ERROR"] = 17, 
            o[i[18] = "SEVERITY_NUMBER_ERROR2"] = 18, o[i[19] = "SEVERITY_NUMBER_ERROR3"] = 19, 
            o[i[20] = "SEVERITY_NUMBER_ERROR4"] = 20, o[i[21] = "SEVERITY_NUMBER_FATAL"] = 21, 
            o[i[22] = "SEVERITY_NUMBER_FATAL2"] = 22, o[i[23] = "SEVERITY_NUMBER_FATAL3"] = 23, 
            o[i[24] = "SEVERITY_NUMBER_FATAL4"] = 24, o;
          }(), d.LogRecordFlags = function() {
            var i = {}, o = Object.create(i);
            return o[i[0] = "LOG_RECORD_FLAGS_DO_NOT_USE"] = 0, o[i[255] = "LOG_RECORD_FLAGS_TRACE_FLAGS_MASK"] = 255, 
            o;
          }(), d.LogRecord = function() {
            function i(o) {
              if (this.attributes = [], o) {
                for (var e = Object.keys(o), t = 0; t < e.length; ++t) if (o[e[t]] != null) this[e[t]] = o[e[t]];
              }
            }
            return i.prototype.timeUnixNano = null, i.prototype.observedTimeUnixNano = null, 
            i.prototype.severityNumber = null, i.prototype.severityText = null, i.prototype.body = null, 
            i.prototype.attributes = p.emptyArray, i.prototype.droppedAttributesCount = null, 
            i.prototype.flags = null, i.prototype.traceId = null, i.prototype.spanId = null, 
            i.prototype.eventName = null, i.create = function(e) {
              return new i(e);
            }, i.encode = function(e, t) {
              if (!t) t = g.create();
              if (e.timeUnixNano != null && Object.hasOwnProperty.call(e, "timeUnixNano")) t.uint32(9).fixed64(e.timeUnixNano);
              if (e.severityNumber != null && Object.hasOwnProperty.call(e, "severityNumber")) t.uint32(16).int32(e.severityNumber);
              if (e.severityText != null && Object.hasOwnProperty.call(e, "severityText")) t.uint32(26).string(e.severityText);
              if (e.body != null && Object.hasOwnProperty.call(e, "body")) a.opentelemetry.proto.common.v1.AnyValue.encode(e.body, t.uint32(42).fork()).ldelim();
              if (e.attributes != null && e.attributes.length) for (var r = 0; r < e.attributes.length; ++r) a.opentelemetry.proto.common.v1.KeyValue.encode(e.attributes[r], t.uint32(50).fork()).ldelim();
              if (e.droppedAttributesCount != null && Object.hasOwnProperty.call(e, "droppedAttributesCount")) t.uint32(56).uint32(e.droppedAttributesCount);
              if (e.flags != null && Object.hasOwnProperty.call(e, "flags")) t.uint32(69).fixed32(e.flags);
              if (e.traceId != null && Object.hasOwnProperty.call(e, "traceId")) t.uint32(74).bytes(e.traceId);
              if (e.spanId != null && Object.hasOwnProperty.call(e, "spanId")) t.uint32(82).bytes(e.spanId);
              if (e.observedTimeUnixNano != null && Object.hasOwnProperty.call(e, "observedTimeUnixNano")) t.uint32(89).fixed64(e.observedTimeUnixNano);
              if (e.eventName != null && Object.hasOwnProperty.call(e, "eventName")) t.uint32(98).string(e.eventName);
              return t;
            }, i.encodeDelimited = function(e, t) {
              return this.encode(e, t).ldelim();
            }, i.decode = function(e, t, r) {
              if (!(e instanceof h)) e = h.create(e);
              var n = t === void 0 ? e.len : e.pos + t, c = new a.opentelemetry.proto.logs.v1.LogRecord;
              while (e.pos < n) {
                var s = e.uint32();
                if (s === r) break;
                switch (s >>> 3) {
                 case 1:
                  {
                    c.timeUnixNano = e.fixed64();
                    break;
                  }

                 case 11:
                  {
                    c.observedTimeUnixNano = e.fixed64();
                    break;
                  }

                 case 2:
                  {
                    c.severityNumber = e.int32();
                    break;
                  }

                 case 3:
                  {
                    c.severityText = e.string();
                    break;
                  }

                 case 5:
                  {
                    c.body = a.opentelemetry.proto.common.v1.AnyValue.decode(e, e.uint32());
                    break;
                  }

                 case 6:
                  {
                    if (!(c.attributes && c.attributes.length)) c.attributes = [];
                    c.attributes.push(a.opentelemetry.proto.common.v1.KeyValue.decode(e, e.uint32()));
                    break;
                  }

                 case 7:
                  {
                    c.droppedAttributesCount = e.uint32();
                    break;
                  }

                 case 8:
                  {
                    c.flags = e.fixed32();
                    break;
                  }

                 case 9:
                  {
                    c.traceId = e.bytes();
                    break;
                  }

                 case 10:
                  {
                    c.spanId = e.bytes();
                    break;
                  }

                 case 12:
                  {
                    c.eventName = e.string();
                    break;
                  }

                 default:
                  e.skipType(s & 7);
                  break;
                }
              }
              return c;
            }, i.decodeDelimited = function(e) {
              if (!(e instanceof h)) e = new h(e);
              return this.decode(e, e.uint32());
            }, i.verify = function(e) {
              if (typeof e !== "object" || e === null) return "object expected";
              if (e.timeUnixNano != null && e.hasOwnProperty("timeUnixNano")) {
                if (!p.isInteger(e.timeUnixNano) && !(e.timeUnixNano && p.isInteger(e.timeUnixNano.low) && p.isInteger(e.timeUnixNano.high))) return "timeUnixNano: integer|Long expected";
              }
              if (e.observedTimeUnixNano != null && e.hasOwnProperty("observedTimeUnixNano")) {
                if (!p.isInteger(e.observedTimeUnixNano) && !(e.observedTimeUnixNano && p.isInteger(e.observedTimeUnixNano.low) && p.isInteger(e.observedTimeUnixNano.high))) return "observedTimeUnixNano: integer|Long expected";
              }
              if (e.severityNumber != null && e.hasOwnProperty("severityNumber")) switch (e.severityNumber) {
               default:
                return "severityNumber: enum value expected";

               case 0:
               case 1:
               case 2:
               case 3:
               case 4:
               case 5:
               case 6:
               case 7:
               case 8:
               case 9:
               case 10:
               case 11:
               case 12:
               case 13:
               case 14:
               case 15:
               case 16:
               case 17:
               case 18:
               case 19:
               case 20:
               case 21:
               case 22:
               case 23:
               case 24:
                break;
              }
              if (e.severityText != null && e.hasOwnProperty("severityText")) {
                if (!p.isString(e.severityText)) return "severityText: string expected";
              }
              if (e.body != null && e.hasOwnProperty("body")) {
                var t = a.opentelemetry.proto.common.v1.AnyValue.verify(e.body);
                if (t) return "body." + t;
              }
              if (e.attributes != null && e.hasOwnProperty("attributes")) {
                if (!Array.isArray(e.attributes)) return "attributes: array expected";
                for (var r = 0; r < e.attributes.length; ++r) {
                  var t = a.opentelemetry.proto.common.v1.KeyValue.verify(e.attributes[r]);
                  if (t) return "attributes." + t;
                }
              }
              if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) {
                if (!p.isInteger(e.droppedAttributesCount)) return "droppedAttributesCount: integer expected";
              }
              if (e.flags != null && e.hasOwnProperty("flags")) {
                if (!p.isInteger(e.flags)) return "flags: integer expected";
              }
              if (e.traceId != null && e.hasOwnProperty("traceId")) {
                if (!(e.traceId && typeof e.traceId.length === "number" || p.isString(e.traceId))) return "traceId: buffer expected";
              }
              if (e.spanId != null && e.hasOwnProperty("spanId")) {
                if (!(e.spanId && typeof e.spanId.length === "number" || p.isString(e.spanId))) return "spanId: buffer expected";
              }
              if (e.eventName != null && e.hasOwnProperty("eventName")) {
                if (!p.isString(e.eventName)) return "eventName: string expected";
              }
              return null;
            }, i.fromObject = function(e) {
              if (e instanceof a.opentelemetry.proto.logs.v1.LogRecord) return e;
              var t = new a.opentelemetry.proto.logs.v1.LogRecord;
              if (e.timeUnixNano != null) {
                if (p.Long) (t.timeUnixNano = p.Long.fromValue(e.timeUnixNano)).unsigned = !1; else if (typeof e.timeUnixNano === "string") t.timeUnixNano = parseInt(e.timeUnixNano, 10); else if (typeof e.timeUnixNano === "number") t.timeUnixNano = e.timeUnixNano; else if (typeof e.timeUnixNano === "object") t.timeUnixNano = new p.LongBits(e.timeUnixNano.low >>> 0, e.timeUnixNano.high >>> 0).toNumber();
              }
              if (e.observedTimeUnixNano != null) {
                if (p.Long) (t.observedTimeUnixNano = p.Long.fromValue(e.observedTimeUnixNano)).unsigned = !1; else if (typeof e.observedTimeUnixNano === "string") t.observedTimeUnixNano = parseInt(e.observedTimeUnixNano, 10); else if (typeof e.observedTimeUnixNano === "number") t.observedTimeUnixNano = e.observedTimeUnixNano; else if (typeof e.observedTimeUnixNano === "object") t.observedTimeUnixNano = new p.LongBits(e.observedTimeUnixNano.low >>> 0, e.observedTimeUnixNano.high >>> 0).toNumber();
              }
              switch (e.severityNumber) {
               default:
                if (typeof e.severityNumber === "number") {
                  t.severityNumber = e.severityNumber;
                  break;
                }
                break;

               case "SEVERITY_NUMBER_UNSPECIFIED":
               case 0:
                t.severityNumber = 0;
                break;

               case "SEVERITY_NUMBER_TRACE":
               case 1:
                t.severityNumber = 1;
                break;

               case "SEVERITY_NUMBER_TRACE2":
               case 2:
                t.severityNumber = 2;
                break;

               case "SEVERITY_NUMBER_TRACE3":
               case 3:
                t.severityNumber = 3;
                break;

               case "SEVERITY_NUMBER_TRACE4":
               case 4:
                t.severityNumber = 4;
                break;

               case "SEVERITY_NUMBER_DEBUG":
               case 5:
                t.severityNumber = 5;
                break;

               case "SEVERITY_NUMBER_DEBUG2":
               case 6:
                t.severityNumber = 6;
                break;

               case "SEVERITY_NUMBER_DEBUG3":
               case 7:
                t.severityNumber = 7;
                break;

               case "SEVERITY_NUMBER_DEBUG4":
               case 8:
                t.severityNumber = 8;
                break;

               case "SEVERITY_NUMBER_INFO":
               case 9:
                t.severityNumber = 9;
                break;

               case "SEVERITY_NUMBER_INFO2":
               case 10:
                t.severityNumber = 10;
                break;

               case "SEVERITY_NUMBER_INFO3":
               case 11:
                t.severityNumber = 11;
                break;

               case "SEVERITY_NUMBER_INFO4":
               case 12:
                t.severityNumber = 12;
                break;

               case "SEVERITY_NUMBER_WARN":
               case 13:
                t.severityNumber = 13;
                break;

               case "SEVERITY_NUMBER_WARN2":
               case 14:
                t.severityNumber = 14;
                break;

               case "SEVERITY_NUMBER_WARN3":
               case 15:
                t.severityNumber = 15;
                break;

               case "SEVERITY_NUMBER_WARN4":
               case 16:
                t.severityNumber = 16;
                break;

               case "SEVERITY_NUMBER_ERROR":
               case 17:
                t.severityNumber = 17;
                break;

               case "SEVERITY_NUMBER_ERROR2":
               case 18:
                t.severityNumber = 18;
                break;

               case "SEVERITY_NUMBER_ERROR3":
               case 19:
                t.severityNumber = 19;
                break;

               case "SEVERITY_NUMBER_ERROR4":
               case 20:
                t.severityNumber = 20;
                break;

               case "SEVERITY_NUMBER_FATAL":
               case 21:
                t.severityNumber = 21;
                break;

               case "SEVERITY_NUMBER_FATAL2":
               case 22:
                t.severityNumber = 22;
                break;

               case "SEVERITY_NUMBER_FATAL3":
               case 23:
                t.severityNumber = 23;
                break;

               case "SEVERITY_NUMBER_FATAL4":
               case 24:
                t.severityNumber = 24;
                break;
              }
              if (e.severityText != null) t.severityText = String(e.severityText);
              if (e.body != null) {
                if (typeof e.body !== "object") throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.body: object expected");
                t.body = a.opentelemetry.proto.common.v1.AnyValue.fromObject(e.body);
              }
              if (e.attributes) {
                if (!Array.isArray(e.attributes)) throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: array expected");
                t.attributes = [];
                for (var r = 0; r < e.attributes.length; ++r) {
                  if (typeof e.attributes[r] !== "object") throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: object expected");
                  t.attributes[r] = a.opentelemetry.proto.common.v1.KeyValue.fromObject(e.attributes[r]);
                }
              }
              if (e.droppedAttributesCount != null) t.droppedAttributesCount = e.droppedAttributesCount >>> 0;
              if (e.flags != null) t.flags = e.flags >>> 0;
              if (e.traceId != null) {
                if (typeof e.traceId === "string") p.base64.decode(e.traceId, t.traceId = p.newBuffer(p.base64.length(e.traceId)), 0); else if (e.traceId.length >= 0) t.traceId = e.traceId;
              }
              if (e.spanId != null) {
                if (typeof e.spanId === "string") p.base64.decode(e.spanId, t.spanId = p.newBuffer(p.base64.length(e.spanId)), 0); else if (e.spanId.length >= 0) t.spanId = e.spanId;
              }
              if (e.eventName != null) t.eventName = String(e.eventName);
              return t;
            }, i.toObject = function(e, t) {
              if (!t) t = {};
              var r = {};
              if (t.arrays || t.defaults) r.attributes = [];
              if (t.defaults) {
                if (p.Long) {
                  var n = new p.Long(0, 0, !1);
                  r.timeUnixNano = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                } else r.timeUnixNano = t.longs === String ? "0" : 0;
                if (r.severityNumber = t.enums === String ? "SEVERITY_NUMBER_UNSPECIFIED" : 0, r.severityText = "", 
                r.body = null, r.droppedAttributesCount = 0, r.flags = 0, t.bytes === String) r.traceId = ""; else if (r.traceId = [], 
                t.bytes !== Array) r.traceId = p.newBuffer(r.traceId);
                if (t.bytes === String) r.spanId = ""; else if (r.spanId = [], t.bytes !== Array) r.spanId = p.newBuffer(r.spanId);
                if (p.Long) {
                  var n = new p.Long(0, 0, !1);
                  r.observedTimeUnixNano = t.longs === String ? n.toString() : t.longs === Number ? n.toNumber() : n;
                } else r.observedTimeUnixNano = t.longs === String ? "0" : 0;
                r.eventName = "";
              }
              if (e.timeUnixNano != null && e.hasOwnProperty("timeUnixNano")) if (typeof e.timeUnixNano === "number") r.timeUnixNano = t.longs === String ? String(e.timeUnixNano) : e.timeUnixNano; else r.timeUnixNano = t.longs === String ? p.Long.prototype.toString.call(e.timeUnixNano) : t.longs === Number ? new p.LongBits(e.timeUnixNano.low >>> 0, e.timeUnixNano.high >>> 0).toNumber() : e.timeUnixNano;
              if (e.severityNumber != null && e.hasOwnProperty("severityNumber")) r.severityNumber = t.enums === String ? a.opentelemetry.proto.logs.v1.SeverityNumber[e.severityNumber] === void 0 ? e.severityNumber : a.opentelemetry.proto.logs.v1.SeverityNumber[e.severityNumber] : e.severityNumber;
              if (e.severityText != null && e.hasOwnProperty("severityText")) r.severityText = e.severityText;
              if (e.body != null && e.hasOwnProperty("body")) r.body = a.opentelemetry.proto.common.v1.AnyValue.toObject(e.body, t);
              if (e.attributes && e.attributes.length) {
                r.attributes = [];
                for (var c = 0; c < e.attributes.length; ++c) r.attributes[c] = a.opentelemetry.proto.common.v1.KeyValue.toObject(e.attributes[c], t);
              }
              if (e.droppedAttributesCount != null && e.hasOwnProperty("droppedAttributesCount")) r.droppedAttributesCount = e.droppedAttributesCount;
              if (e.flags != null && e.hasOwnProperty("flags")) r.flags = e.flags;
              if (e.traceId != null && e.hasOwnProperty("traceId")) r.traceId = t.bytes === String ? p.base64.encode(e.traceId, 0, e.traceId.length) : t.bytes === Array ? Array.prototype.slice.call(e.traceId) : e.traceId;
              if (e.spanId != null && e.hasOwnProperty("spanId")) r.spanId = t.bytes === String ? p.base64.encode(e.spanId, 0, e.spanId.length) : t.bytes === Array ? Array.prototype.slice.call(e.spanId) : e.spanId;
              if (e.observedTimeUnixNano != null && e.hasOwnProperty("observedTimeUnixNano")) if (typeof e.observedTimeUnixNano === "number") r.observedTimeUnixNano = t.longs === String ? String(e.observedTimeUnixNano) : e.observedTimeUnixNano; else r.observedTimeUnixNano = t.longs === String ? p.Long.prototype.toString.call(e.observedTimeUnixNano) : t.longs === Number ? new p.LongBits(e.observedTimeUnixNano.low >>> 0, e.observedTimeUnixNano.high >>> 0).toNumber() : e.observedTimeUnixNano;
              if (e.eventName != null && e.hasOwnProperty("eventName")) r.eventName = e.eventName;
              return r;
            }, i.prototype.toJSON = function() {
              return this.constructor.toObject(this, S.util.toJSONOptions);
            }, i.getTypeUrl = function(e) {
              if (e === void 0) e = "type.googleapis.com";
              return e + "/opentelemetry.proto.logs.v1.LogRecord";
            }, i;
          }(), d;
        }(), f;
      }(), u;
    }(), l;
  }();
  $r.exports = a;
});

var tn = C(function(Zr) {
  Object.defineProperty(Zr, "__esModule", {
    value: !0
  });
  Zr.hexToBinary = void 0;
  function Xr(l) {
    if (l >= 48 && l <= 57) return l - 48;
    if (l >= 97 && l <= 102) return l - 87;
    return l - 55;
  }
  function Yi(l) {
    let u = new Uint8Array(l.length / 2), f = 0;
    for (let d = 0; d < l.length; d += 2) {
      let i = Xr(l.charCodeAt(d)), o = Xr(l.charCodeAt(d + 1));
      u[f++] = i << 4 | o;
    }
    return u;
  }
  Zr.hexToBinary = Yi;
});

var Pt = C(function(ln) {
  Object.defineProperty(ln, "__esModule", {
    value: !0
  });
  ln.getOtlpEncoder = ln.encodeAsString = ln.encodeAsLongBits = ln.toLongBits = ln.hrTimeToNanos = void 0;
  var rn = qf(), st = tn();
  function oe(l) {
    let u = BigInt(1e9);
    return BigInt(Math.trunc(l[0])) * u + BigInt(Math.trunc(l[1]));
  }
  ln.hrTimeToNanos = oe;
  function nn(l) {
    let u = Number(BigInt.asUintN(32, l)), f = Number(BigInt.asUintN(32, l >> BigInt(32)));
    return {
      low: u,
      high: f
    };
  }
  ln.toLongBits = nn;
  function ie(l) {
    let u = oe(l);
    return nn(u);
  }
  ln.encodeAsLongBits = ie;
  function on(l) {
    return oe(l).toString();
  }
  ln.encodeAsString = on;
  var Wi = typeof BigInt < "u" ? on : rn.hrTimeToNanoseconds;
  function en(l) {
    return l;
  }
  function un(l) {
    if (l === void 0) return;
    return st.hexToBinary(l);
  }
  var $i = {
    encodeHrTime: ie,
    encodeSpanContext: st.hexToBinary,
    encodeOptionalSpanContext: un
  };
  function Xi(l) {
    if (l === void 0) return $i;
    let u = l.useLongBits ?? !0, f = l.useHex ?? !1;
    return {
      encodeHrTime: u ? ie : Wi,
      encodeSpanContext: f ? en : st.hexToBinary,
      encodeOptionalSpanContext: f ? en : un
    };
  }
  ln.getOtlpEncoder = Xi;
});

var Ut = C(function(fn) {
  Object.defineProperty(fn, "__esModule", {
    value: !0
  });
  fn.toAnyValue = fn.toKeyValue = fn.toAttributes = fn.createInstrumentationScope = fn.createResource = void 0;
  function ru(l) {
    let u = {
      attributes: an(l.attributes),
      droppedAttributesCount: 0
    }, f = l.schemaUrl;
    if (f && f !== "") u.schemaUrl = f;
    return u;
  }
  fn.createResource = ru;
  function nu(l) {
    return {
      name: l.name,
      version: l.version
    };
  }
  fn.createInstrumentationScope = nu;
  function an(l) {
    return Object.keys(l).map(u => ue(u, l[u]));
  }
  fn.toAttributes = an;
  function ue(l, u) {
    return {
      key: l,
      value: le(u)
    };
  }
  fn.toKeyValue = ue;
  function le(l) {
    let u = typeof l;
    if (u === "string") return {
      stringValue: l
    };
    if (u === "number") {
      if (!Number.isInteger(l)) return {
        doubleValue: l
      };
      return {
        intValue: l
      };
    }
    if (u === "boolean") return {
      boolValue: l
    };
    if (l instanceof Uint8Array) return {
      bytesValue: l
    };
    if (Array.isArray(l)) return {
      arrayValue: {
        values: l.map(le)
      }
    };
    if (u === "object" && l != null) return {
      kvlistValue: {
        values: Object.entries(l).map(([f, d]) => ue(f, d))
      }
    };
    return {};
  }
  fn.toAnyValue = le;
});

var ce = C(function(yn) {
  Object.defineProperty(yn, "__esModule", {
    value: !0
  });
  yn.toLogAttributes = yn.createExportLogsServiceRequest = void 0;
  var sn = Pt(), it = Ut();
  function cu(l, u) {
    let f = sn.getOtlpEncoder(u);
    return {
      resourceLogs: fu(l, f)
    };
  }
  yn.createExportLogsServiceRequest = cu;
  function au(l) {
    let u = new Map;
    for (let f of l) {
      let {resource: d, instrumentationScope: {name: i, version: o = "", schemaUrl: e = ""}} = f, t = u.get(d);
      if (!t) t = new Map, u.set(d, t);
      let r = `${i}@${o}:${e}`, n = t.get(r);
      if (!n) n = [], t.set(r, n);
      n.push(f);
    }
    return u;
  }
  function fu(l, u) {
    let f = au(l);
    return Array.from(f, ([d, i]) => {
      let o = it.createResource(d);
      return {
        resource: o,
        scopeLogs: Array.from(i, ([, e]) => ({
          scope: it.createInstrumentationScope(e[0].instrumentationScope),
          logRecords: e.map(t => pu(t, u)),
          schemaUrl: e[0].instrumentationScope.schemaUrl
        })),
        schemaUrl: o.schemaUrl
      };
    });
  }
  function pu(l, u) {
    return {
      timeUnixNano: u.encodeHrTime(l.hrTime),
      observedTimeUnixNano: u.encodeHrTime(l.hrTimeObserved),
      severityNumber: su(l.severityNumber),
      severityText: l.severityText,
      body: it.toAnyValue(l.body),
      eventName: l.eventName,
      attributes: dn(l.attributes),
      droppedAttributesCount: l.droppedAttributesCount,
      flags: l.spanContext?.traceFlags,
      traceId: u.encodeOptionalSpanContext(l.spanContext?.traceId),
      spanId: u.encodeOptionalSpanContext(l.spanContext?.spanId)
    };
  }
  function su(l) {
    return l;
  }
  function dn(l) {
    return Object.keys(l).map(u => it.toKeyValue(u, l[u]));
  }
  yn.toLogAttributes = dn;
});

var On = C(function(vn) {
  Object.defineProperty(vn, "__esModule", {
    value: !0
  });
  vn.ProtobufLogsSerializer = void 0;
  var It = Et(), mn = ce(), yu = It.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse, hu = It.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
  vn.ProtobufLogsSerializer = {
    serializeRequest: l => {
      let u = mn.createExportLogsServiceRequest(l);
      return hu.encode(u).finish();
    },
    deserializeResponse: l => yu.decode(l)
  };
});

var xn = C(function(ae) {
  Object.defineProperty(ae, "__esModule", {
    value: !0
  });
  ae.ProtobufLogsSerializer = void 0;
  var mu = On();
  Object.defineProperty(ae, "ProtobufLogsSerializer", {
    enumerable: !0,
    get: function() {
      return mu.ProtobufLogsSerializer;
    }
  });
});

var gn = C(function(Sn) {
  Object.defineProperty(Sn, "__esModule", {
    value: !0
  });
  Sn.EAggregationTemporality = void 0;
  var bu;
  (function(l) {
    l[l.AGGREGATION_TEMPORALITY_UNSPECIFIED = 0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED", 
    l[l.AGGREGATION_TEMPORALITY_DELTA = 1] = "AGGREGATION_TEMPORALITY_DELTA", l[l.AGGREGATION_TEMPORALITY_CUMULATIVE = 2] = "AGGREGATION_TEMPORALITY_CUMULATIVE";
  })(bu = Sn.EAggregationTemporality || (Sn.EAggregationTemporality = {}));
});

var pe = C(function(Un) {
  Object.defineProperty(Un, "__esModule", {
    value: !0
  });
  Un.createExportMetricsServiceRequest = Un.toMetric = Un.toScopeMetrics = Un.toResourceMetrics = void 0;
  var _t = ja(), J = ZHe(), At = gn(), Tn = Pt(), X = Ut();
  function wn(l, u) {
    let f = Tn.getOtlpEncoder(u), d = X.createResource(l.resource);
    return {
      resource: d,
      schemaUrl: d.schemaUrl,
      scopeMetrics: En(l.scopeMetrics, f)
    };
  }
  Un.toResourceMetrics = wn;
  function En(l, u) {
    return Array.from(l.map(f => ({
      scope: X.createInstrumentationScope(f.scope),
      metrics: f.metrics.map(d => Pn(d, u)),
      schemaUrl: f.scope.schemaUrl
    })));
  }
  Un.toScopeMetrics = En;
  function Pn(l, u) {
    let f = {
      name: l.descriptor.name,
      description: l.descriptor.description,
      unit: l.descriptor.unit
    }, d = gu(l.aggregationTemporality);
    switch (l.dataPointType) {
     case J.DataPointType.SUM:
      f.sum = {
        aggregationTemporality: d,
        isMonotonic: l.isMonotonic,
        dataPoints: Nn(l, u)
      };
      break;

     case J.DataPointType.GAUGE:
      f.gauge = {
        dataPoints: Nn(l, u)
      };
      break;

     case J.DataPointType.HISTOGRAM:
      f.histogram = {
        aggregationTemporality: d,
        dataPoints: xu(l, u)
      };
      break;

     case J.DataPointType.EXPONENTIAL_HISTOGRAM:
      f.exponentialHistogram = {
        aggregationTemporality: d,
        dataPoints: Su(l, u)
      };
      break;
    }
    return f;
  }
  Un.toMetric = Pn;
  function Ou(l, u, f) {
    let d = {
      attributes: X.toAttributes(l.attributes),
      startTimeUnixNano: f.encodeHrTime(l.startTime),
      timeUnixNano: f.encodeHrTime(l.endTime)
    };
    switch (u) {
     case _t.ValueType.INT:
      d.asInt = l.value;
      break;

     case _t.ValueType.DOUBLE:
      d.asDouble = l.value;
      break;
    }
    return d;
  }
  function Nn(l, u) {
    return l.dataPoints.map(f => Ou(f, l.descriptor.valueType, u));
  }
  function xu(l, u) {
    return l.dataPoints.map(f => {
      let d = f.value;
      return {
        attributes: X.toAttributes(f.attributes),
        bucketCounts: d.buckets.counts,
        explicitBounds: d.buckets.boundaries,
        count: d.count,
        sum: d.sum,
        min: d.min,
        max: d.max,
        startTimeUnixNano: u.encodeHrTime(f.startTime),
        timeUnixNano: u.encodeHrTime(f.endTime)
      };
    });
  }
  function Su(l, u) {
    return l.dataPoints.map(f => {
      let d = f.value;
      return {
        attributes: X.toAttributes(f.attributes),
        count: d.count,
        min: d.min,
        max: d.max,
        sum: d.sum,
        positive: {
          offset: d.positive.offset,
          bucketCounts: d.positive.bucketCounts
        },
        negative: {
          offset: d.negative.offset,
          bucketCounts: d.negative.bucketCounts
        },
        scale: d.scale,
        zeroCount: d.zeroCount,
        startTimeUnixNano: u.encodeHrTime(f.startTime),
        timeUnixNano: u.encodeHrTime(f.endTime)
      };
    });
  }
  function gu(l) {
    switch (l) {
     case J.AggregationTemporality.DELTA:
      return At.EAggregationTemporality.AGGREGATION_TEMPORALITY_DELTA;

     case J.AggregationTemporality.CUMULATIVE:
      return At.EAggregationTemporality.AGGREGATION_TEMPORALITY_CUMULATIVE;
    }
  }
  function Nu(l, u) {
    return {
      resourceMetrics: l.map(f => wn(f, u))
    };
  }
  Un.createExportMetricsServiceRequest = Nu;
});

var Rn = C(function(An) {
  Object.defineProperty(An, "__esModule", {
    value: !0
  });
  An.ProtobufMetricsSerializer = void 0;
  var Lt = Et(), _n = pe(), Pu = Lt.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse, Uu = Lt.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
  An.ProtobufMetricsSerializer = {
    serializeRequest: l => {
      let u = _n.createExportMetricsServiceRequest([ l ]);
      return Uu.encode(u).finish();
    },
    deserializeResponse: l => Pu.decode(l)
  };
});

var kn = C(function(se) {
  Object.defineProperty(se, "__esModule", {
    value: !0
  });
  se.ProtobufMetricsSerializer = void 0;
  var Iu = Rn();
  Object.defineProperty(se, "ProtobufMetricsSerializer", {
    enumerable: !0,
    get: function() {
      return Iu.ProtobufMetricsSerializer;
    }
  });
});

var de = C(function(qn) {
  Object.defineProperty(qn, "__esModule", {
    value: !0
  });
  qn.createExportTraceServiceRequest = qn.toOtlpSpanEvent = qn.toOtlpLink = qn.sdkSpanToOtlpSpan = void 0;
  var Z = Ut(), Dn = Pt(), Au = 256, Lu = 512;
  function Mn(l, u) {
    let f = l & 255 | Au;
    if (u) f |= Lu;
    return f;
  }
  function Cn(l, u) {
    let f = l.spanContext(), d = l.status, i = l.parentSpanContext?.spanId ? u.encodeSpanContext(l.parentSpanContext?.spanId) : void 0;
    return {
      traceId: u.encodeSpanContext(f.traceId),
      spanId: u.encodeSpanContext(f.spanId),
      parentSpanId: i,
      traceState: f.traceState?.serialize(),
      name: l.name,
      kind: l.kind == null ? 0 : l.kind + 1,
      startTimeUnixNano: u.encodeHrTime(l.startTime),
      endTimeUnixNano: u.encodeHrTime(l.endTime),
      attributes: Z.toAttributes(l.attributes),
      droppedAttributesCount: l.droppedAttributesCount,
      events: l.events.map(o => Bn(o, u)),
      droppedEventsCount: l.droppedEventsCount,
      status: {
        code: d.code,
        message: d.message
      },
      links: l.links.map(o => Vn(o, u)),
      droppedLinksCount: l.droppedLinksCount,
      flags: Mn(f.traceFlags, l.parentSpanContext?.isRemote)
    };
  }
  qn.sdkSpanToOtlpSpan = Cn;
  function Vn(l, u) {
    return {
      attributes: l.attributes ? Z.toAttributes(l.attributes) : [],
      spanId: u.encodeSpanContext(l.context.spanId),
      traceId: u.encodeSpanContext(l.context.traceId),
      traceState: l.context.traceState?.serialize(),
      droppedAttributesCount: l.droppedAttributesCount || 0,
      flags: Mn(l.context.traceFlags, l.context.isRemote)
    };
  }
  qn.toOtlpLink = Vn;
  function Bn(l, u) {
    return {
      attributes: l.attributes ? Z.toAttributes(l.attributes) : [],
      name: l.name,
      timeUnixNano: u.encodeHrTime(l.time),
      droppedAttributesCount: l.droppedAttributesCount || 0
    };
  }
  qn.toOtlpSpanEvent = Bn;
  function Ru(l, u) {
    let f = Dn.getOtlpEncoder(u);
    return {
      resourceSpans: Du(l, f)
    };
  }
  qn.createExportTraceServiceRequest = Ru;
  function ku(l) {
    let u = new Map;
    for (let f of l) {
      let d = u.get(f.resource);
      if (!d) d = new Map, u.set(f.resource, d);
      let i = `${f.instrumentationScope.name}@${f.instrumentationScope.version || ""}:${f.instrumentationScope.schemaUrl || ""}`, o = d.get(i);
      if (!o) o = [], d.set(i, o);
      o.push(f);
    }
    return u;
  }
  function Du(l, u) {
    let f = ku(l), d = [], i = f.entries(), o = i.next();
    while (!o.done) {
      let [e, t] = o.value, r = [], n = t.values(), c = n.next();
      while (!c.done) {
        let U = c.value;
        if (U.length > 0) {
          let Q = U.map(et => Cn(et, u));
          r.push({
            scope: Z.createInstrumentationScope(U[0].instrumentationScope),
            spans: Q,
            schemaUrl: U[0].instrumentationScope.schemaUrl
          });
        }
        c = n.next();
      }
      let s = Z.createResource(e), m = {
        resource: s,
        scopeSpans: r,
        schemaUrl: s.schemaUrl
      };
      d.push(m), o = i.next();
    }
    return d;
  }
});

var zn = C(function(Kn) {
  Object.defineProperty(Kn, "__esModule", {
    value: !0
  });
  Kn.ProtobufTraceSerializer = void 0;
  var Rt = Et(), Fn = de(), Bu = Rt.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse, qu = Rt.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
  Kn.ProtobufTraceSerializer = {
    serializeRequest: l => {
      let u = Fn.createExportTraceServiceRequest(l);
      return qu.encode(u).finish();
    },
    deserializeResponse: l => Bu.decode(l)
  };
});

var Jn = C(function(ye) {
  Object.defineProperty(ye, "__esModule", {
    value: !0
  });
  ye.ProtobufTraceSerializer = void 0;
  var Hu = zn();
  Object.defineProperty(ye, "ProtobufTraceSerializer", {
    enumerable: !0,
    get: function() {
      return Hu.ProtobufTraceSerializer;
    }
  });
});

var $n = C(function(Yn) {
  Object.defineProperty(Yn, "__esModule", {
    value: !0
  });
  Yn.JsonLogsSerializer = void 0;
  var Gn = ce();
  Yn.JsonLogsSerializer = {
    serializeRequest: l => {
      let u = Gn.createExportLogsServiceRequest(l, {
        useHex: !0,
        useLongBits: !1
      });
      return (new TextEncoder).encode(JSON.stringify(u));
    },
    deserializeResponse: l => {
      if (l.length === 0) return {};
      return JSON.parse((new TextDecoder).decode(l));
    }
  };
});

var Xn = C(function(he) {
  Object.defineProperty(he, "__esModule", {
    value: !0
  });
  he.JsonLogsSerializer = void 0;
  var Ku = $n();
  Object.defineProperty(he, "JsonLogsSerializer", {
    enumerable: !0,
    get: function() {
      return Ku.JsonLogsSerializer;
    }
  });
});

var eo = C(function(Qn) {
  Object.defineProperty(Qn, "__esModule", {
    value: !0
  });
  Qn.JsonMetricsSerializer = void 0;
  var Zn = pe();
  Qn.JsonMetricsSerializer = {
    serializeRequest: l => {
      let u = Zn.createExportMetricsServiceRequest([ l ], {
        useLongBits: !1
      });
      return (new TextEncoder).encode(JSON.stringify(u));
    },
    deserializeResponse: l => {
      if (l.length === 0) return {};
      return JSON.parse((new TextDecoder).decode(l));
    }
  };
});

var ro = C(function(me) {
  Object.defineProperty(me, "__esModule", {
    value: !0
  });
  me.JsonMetricsSerializer = void 0;
  var zu = eo();
  Object.defineProperty(me, "JsonMetricsSerializer", {
    enumerable: !0,
    get: function() {
      return zu.JsonMetricsSerializer;
    }
  });
});

var uo = C(function(oo) {
  Object.defineProperty(oo, "__esModule", {
    value: !0
  });
  oo.JsonTraceSerializer = void 0;
  var no = de();
  oo.JsonTraceSerializer = {
    serializeRequest: l => {
      let u = no.createExportTraceServiceRequest(l, {
        useHex: !0,
        useLongBits: !1
      });
      return (new TextEncoder).encode(JSON.stringify(u));
    },
    deserializeResponse: l => {
      if (l.length === 0) return {};
      return JSON.parse((new TextDecoder).decode(l));
    }
  };
});

var lo = C(function(ve) {
  Object.defineProperty(ve, "__esModule", {
    value: !0
  });
  ve.JsonTraceSerializer = void 0;
  var Gu = uo();
  Object.defineProperty(ve, "JsonTraceSerializer", {
    enumerable: !0,
    get: function() {
      return Gu.JsonTraceSerializer;
    }
  });
});

var A2 = C(function(ut) {
  Object.defineProperty(ut, "__esModule", {
    value: !0
  });
  ut.JsonTraceSerializer = ut.JsonMetricsSerializer = ut.JsonLogsSerializer = ut.ProtobufTraceSerializer = ut.ProtobufMetricsSerializer = ut.ProtobufLogsSerializer = void 0;
  var Wu = xn();
  Object.defineProperty(ut, "ProtobufLogsSerializer", {
    enumerable: !0,
    get: function() {
      return Wu.ProtobufLogsSerializer;
    }
  });
  var $u = kn();
  Object.defineProperty(ut, "ProtobufMetricsSerializer", {
    enumerable: !0,
    get: function() {
      return $u.ProtobufMetricsSerializer;
    }
  });
  var Xu = Jn();
  Object.defineProperty(ut, "ProtobufTraceSerializer", {
    enumerable: !0,
    get: function() {
      return Xu.ProtobufTraceSerializer;
    }
  });
  var Zu = Xn();
  Object.defineProperty(ut, "JsonLogsSerializer", {
    enumerable: !0,
    get: function() {
      return Zu.JsonLogsSerializer;
    }
  });
  var Qu = ro();
  Object.defineProperty(ut, "JsonMetricsSerializer", {
    enumerable: !0,
    get: function() {
      return Qu.JsonMetricsSerializer;
    }
  });
  var tl = lo();
  Object.defineProperty(ut, "JsonTraceSerializer", {
    enumerable: !0,
    get: function() {
      return tl.JsonTraceSerializer;
    }
  });
});

var po = C(function(ao) {
  Object.defineProperty(ao, "__esModule", {
    value: !0
  });
  ao.validateAndNormalizeHeaders = void 0;
  var co = ja();
  function rl(l) {
    let u = {};
    return Object.entries(l ?? {}).forEach(([f, d]) => {
      if (typeof d < "u") u[f] = String(d); else co.diag.warn(`Header "${f}" has invalid value (${d}) and will be ignored`);
    }), u;
  }
  ao.validateAndNormalizeHeaders = rl;
});

var mo = C(function(yo) {
  Object.defineProperty(yo, "__esModule", {
    value: !0
  });
  yo.getHttpConfigurationDefaults = yo.mergeOtlpHttpConfigurationWithDefaults = void 0;
  var kt = yt(), so = po();
  function nl(l, u, f) {
    return async () => {
      let d = {
        ...await f()
      }, i = {};
      if (u != null) Object.assign(i, await u());
      if (l != null) Object.assign(i, so.validateAndNormalizeHeaders(await l()));
      return Object.assign(i, d);
    };
  }
  function ol(l) {
    if (l == null) return;
    try {
      let u = globalThis.location?.href;
      return new URL(l, u).href;
    } catch {
      throw Error(`Configuration: Could not parse user-provided export URL: '${l}'`);
    }
  }
  function il(l, u, f) {
    return {
      ...kt.mergeOtlpSharedConfigurationWithDefaults(l, u, f),
      headers: nl(l.headers, u.headers, f.headers),
      url: ol(l.url) ?? u.url ?? f.url
    };
  }
  yo.mergeOtlpHttpConfigurationWithDefaults = il;
  function ul(l, u) {
    return {
      ...kt.getSharedConfigurationDefaults(),
      headers: async () => l,
      url: "http://localhost:4318/" + u
    };
  }
  yo.getHttpConfigurationDefaults = ul;
});

var Mt = C(function(bo) {
  Object.defineProperty(bo, "__esModule", {
    value: !0
  });
  bo.getNodeHttpConfigurationDefaults = bo.mergeOtlpNodeHttpConfigurationWithDefaults = bo.httpAgentFactoryFromOptions = void 0;
  var Dt = mo();
  function vo(l) {
    return async u => {
      let f = u === "http:", d = f ? import("http") : import("https"), {Agent: i} = await d;
      if (f) {
        let {ca: o, cert: e, key: t, ...r} = l;
        return new i(r);
      }
      return new i(l);
    };
  }
  bo.httpAgentFactoryFromOptions = vo;
  function cl(l, u, f) {
    return {
      ...Dt.mergeOtlpHttpConfigurationWithDefaults(l, u, f),
      agentFactory: l.agentFactory ?? u.agentFactory ?? f.agentFactory,
      userAgent: l.userAgent
    };
  }
  bo.mergeOtlpNodeHttpConfigurationWithDefaults = cl;
  function al(l, u) {
    return {
      ...Dt.getHttpConfigurationDefaults(l, u),
      agentFactory: vo({
        keepAlive: !0
      })
    };
  }
  bo.getNodeHttpConfigurationDefaults = al;
});

var go = C(function(xo) {
  Object.defineProperty(xo, "__esModule", {
    value: !0
  });
  xo.parseRetryAfterToMills = xo.isExportRetryable = void 0;
  function sl(l) {
    return [ 429, 502, 503, 504 ].includes(l);
  }
  xo.isExportRetryable = sl;
  function dl(l) {
    if (l == null) return;
    let u = Number.parseInt(l, 10);
    if (Number.isInteger(u)) return u > 0 ? u * 1e3 : -1;
    let f = new Date(l).getTime() - Date.now();
    if (f >= 0) return f;
    return 0;
  }
  xo.parseRetryAfterToMills = dl;
});

var wo = C(function(No) {
  Object.defineProperty(No, "__esModule", {
    value: !0
  });
  No.VERSION = void 0;
  No.VERSION = "0.208.0";
});

var ko = C(function(Lo) {
  Object.defineProperty(Lo, "__esModule", {
    value: !0
  });
  Lo.compressAndSend = Lo.sendWithHttp = void 0;
  var Po = Ne("zlib"), Uo = Ne("stream"), Ct = go(), Io = xt(), _o = wo(), Eo = `OTel-OTLP-Exporter-JavaScript/${_o.VERSION}`;
  function hl(l, u, f, d, i, o, e, t, r) {
    let n = new URL(u);
    if (i) f["User-Agent"] = `${i} ${Eo}`; else f["User-Agent"] = Eo;
    let c = {
      hostname: n.hostname,
      port: n.port,
      path: n.pathname,
      method: "POST",
      headers: f,
      agent: o
    }, s = l(c, m => {
      let U = [];
      m.on("data", Q => U.push(Q)), m.on("end", () => {
        if (m.statusCode && m.statusCode < 299) t({
          status: "success",
          data: Buffer.concat(U)
        }); else if (m.statusCode && Ct.isExportRetryable(m.statusCode)) t({
          status: "retryable",
          retryInMillis: Ct.parseRetryAfterToMills(m.headers["retry-after"])
        }); else {
          let Q = new Io.OTLPExporterError(m.statusMessage, m.statusCode, Buffer.concat(U).toString());
          t({
            status: "failure",
            error: Q
          });
        }
      });
    });
    s.setTimeout(r, () => {
      s.destroy(), t({
        status: "failure",
        error: Error("Request Timeout")
      });
    }), s.on("error", m => {
      t({
        status: "failure",
        error: m
      });
    }), Ao(s, d, e, m => {
      t({
        status: "failure",
        error: m
      });
    });
  }
  Lo.sendWithHttp = hl;
  function Ao(l, u, f, d) {
    let i = ml(f);
    if (u === "gzip") l.setHeader("Content-Encoding", "gzip"), i = i.on("error", d).pipe(Po.createGzip()).on("error", d);
    i.pipe(l).on("error", d);
  }
  Lo.compressAndSend = Ao;
  function ml(l) {
    let u = new Uo.Readable;
    return u.push(l), u.push(null), u;
  }
});

var Bo = C(function(Co) {
  Object.defineProperty(Co, "__esModule", {
    value: !0
  });
  Co.createHttpExporterTransport = void 0;
  var Do = ko();
  class Mo {
    _parameters;
    _utils=null;
    constructor(l) {
      this._parameters = l;
    }
    async send(l, u) {
      let {agent: f, request: d} = await this._loadUtils(), i = await this._parameters.headers();
      return new Promise(o => {
        Do.sendWithHttp(d, this._parameters.url, i, this._parameters.compression, this._parameters.userAgent, f, l, e => {
          o(e);
        }, u);
      });
    }
    shutdown() {}
    async _loadUtils() {
      let l = this._utils;
      if (l === null) {
        let u = new URL(this._parameters.url).protocol, [f, d] = await Promise.all([ this._parameters.agentFactory(u), bl(u) ]);
        l = this._utils = {
          agent: f,
          request: d
        };
      }
      return l;
    }
  }
  async function bl(l) {
    let u = l === "http:" ? import("http") : import("https"), {request: f} = await u;
    return f;
  }
  function Ol(l) {
    return new Mo(l);
  }
  Co.createHttpExporterTransport = Ol;
});

var jo = C(function(Fo) {
  Object.defineProperty(Fo, "__esModule", {
    value: !0
  });
  Fo.createRetryingTransport = void 0;
  var xl = 5, Sl = 1e3, gl = 5e3, Nl = 1.5, qo = .2;
  function Tl() {
    return Math.random() * (2 * qo) - qo;
  }
  class Ho {
    _transport;
    constructor(l) {
      this._transport = l;
    }
    retry(l, u, f) {
      return new Promise((d, i) => {
        setTimeout(() => {
          this._transport.send(l, u).then(d, i);
        }, f);
      });
    }
    async send(l, u) {
      let f = Date.now() + u, d = await this._transport.send(l, u), i = xl, o = Sl;
      while (d.status === "retryable" && i > 0) {
        i--;
        let e = Math.max(Math.min(o, gl) + Tl(), 0);
        o = o * Nl;
        let t = d.retryInMillis ?? e, r = f - Date.now();
        if (t > r) return d;
        d = await this.retry(l, r, t);
      }
      return d;
    }
    shutdown() {
      return this._transport.shutdown();
    }
  }
  function wl(l) {
    return new Ho(l.transport);
  }
  Fo.createRetryingTransport = wl;
});

var Xo = C(function(Wo) {
  Object.defineProperty(Wo, "__esModule", {
    value: !0
  });
  Wo.createOtlpHttpExportDelegate = void 0;
  var zo = jt(), Jo = Bo(), Go = Kt(), Yo = jo();
  function El(l, u) {
    return zo.createOtlpExportDelegate({
      transport: Yo.createRetryingTransport({
        transport: Jo.createHttpExporterTransport(l)
      }),
      serializer: u,
      promiseHandler: Go.createBoundedQueueExportPromiseHandler(l)
    }, {
      timeout: l.timeoutMillis
    });
  }
  Wo.createOtlpHttpExportDelegate = El;
});

var be = C(function(ti) {
  Object.defineProperty(ti, "__esModule", {
    value: !0
  });
  ti.getSharedConfigurationFromEnvironment = void 0;
  var Vt = qf(), Bt = ja();
  function Zo(l) {
    let u = Vt.getNumberFromEnv(l);
    if (u != null) {
      if (Number.isFinite(u) && u > 0) return u;
      Bt.diag.warn(`Configuration: ${l} is invalid, expected number greater than 0 (actual: ${u})`);
    }
    return;
  }
  function Pl(l) {
    let u = Zo(`OTEL_EXPORTER_OTLP_${l}_TIMEOUT`), f = Zo("OTEL_EXPORTER_OTLP_TIMEOUT");
    return u ?? f;
  }
  function Qo(l) {
    let u = Vt.getStringFromEnv(l)?.trim();
    if (u == null || u === "none" || u === "gzip") return u;
    Bt.diag.warn(`Configuration: ${l} is invalid, expected 'none' or 'gzip' (actual: '${u}')`);
    return;
  }
  function Ul(l) {
    let u = Qo(`OTEL_EXPORTER_OTLP_${l}_COMPRESSION`), f = Qo("OTEL_EXPORTER_OTLP_COMPRESSION");
    return u ?? f;
  }
  function Il(l) {
    return {
      timeoutMillis: Pl(l),
      compression: Ul(l)
    };
  }
  ti.getSharedConfigurationFromEnvironment = Il;
});

var ai = C(function(li) {
  Object.defineProperty(li, "__esModule", {
    value: !0
  });
  li.getNodeHttpConfigurationFromEnvironment = void 0;
  var ri = Ne("fs"), ni = Ne("path"), _ = qf(), lt = ja(), oi = be(), ii = yt(), ui = Mt();
  function _l(l) {
    let u = _.getStringFromEnv(`OTEL_EXPORTER_OTLP_${l}_HEADERS`), f = _.getStringFromEnv("OTEL_EXPORTER_OTLP_HEADERS"), d = _.parseKeyPairsIntoRecord(u), i = _.parseKeyPairsIntoRecord(f);
    if (Object.keys(d).length === 0 && Object.keys(i).length === 0) return;
    return Object.assign({}, _.parseKeyPairsIntoRecord(f), _.parseKeyPairsIntoRecord(u));
  }
  function Al(l) {
    try {
      return new URL(l).toString();
    } catch {
      lt.diag.warn(`Configuration: Could not parse environment-provided export URL: '${l}', falling back to undefined`);
      return;
    }
  }
  function Ll(l, u) {
    try {
      new URL(l);
    } catch {
      lt.diag.warn(`Configuration: Could not parse environment-provided export URL: '${l}', falling back to undefined`);
      return;
    }
    if (!l.endsWith("/")) l = l + "/";
    l += u;
    try {
      new URL(l);
    } catch {
      lt.diag.warn(`Configuration: Provided URL appended with '${u}' is not a valid URL, using 'undefined' instead of '${l}'`);
      return;
    }
    return l;
  }
  function Rl(l) {
    let u = _.getStringFromEnv("OTEL_EXPORTER_OTLP_ENDPOINT");
    if (u === void 0) return;
    return Ll(u, l);
  }
  function kl(l) {
    let u = _.getStringFromEnv(`OTEL_EXPORTER_OTLP_${l}_ENDPOINT`);
    if (u === void 0) return;
    return Al(u);
  }
  function Oe(l, u, f) {
    let d = _.getStringFromEnv(l), i = _.getStringFromEnv(u), o = d ?? i;
    if (o != null) try {
      return ri.readFileSync(ni.resolve(process.cwd(), o));
    } catch {
      lt.diag.warn(f);
      return;
    } else return;
  }
  function Dl(l) {
    return Oe(`OTEL_EXPORTER_OTLP_${l}_CLIENT_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE", "Failed to read client certificate chain file");
  }
  function Ml(l) {
    return Oe(`OTEL_EXPORTER_OTLP_${l}_CLIENT_KEY`, "OTEL_EXPORTER_OTLP_CLIENT_KEY", "Failed to read client certificate private key file");
  }
  function Cl(l) {
    return Oe(`OTEL_EXPORTER_OTLP_${l}_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CERTIFICATE", "Failed to read root certificate file");
  }
  function Vl(l, u) {
    return {
      ...oi.getSharedConfigurationFromEnvironment(l),
      url: kl(l) ?? Rl(u),
      headers: ii.wrapStaticHeadersInFunction(_l(l)),
      agentFactory: ui.httpAgentFactoryFromOptions({
        keepAlive: !0,
        ca: Cl(l),
        cert: Dl(l),
        key: Ml(l)
      })
    };
  }
  li.getNodeHttpConfigurationFromEnvironment = Vl;
});

var di = C(function(pi) {
  Object.defineProperty(pi, "__esModule", {
    value: !0
  });
  pi.convertLegacyHeaders = void 0;
  var fi = yt();
  function Bl(l) {
    if (typeof l.headers === "function") return l.headers;
    return fi.wrapStaticHeadersInFunction(l.headers);
  }
  pi.convertLegacyHeaders = Bl;
});

var xi = C(function(bi) {
  Object.defineProperty(bi, "__esModule", {
    value: !0
  });
  bi.convertLegacyHttpOptions = void 0;
  var yi = ja(), qt = Mt(), hi = xJ(), mi = ai(), vi = di();
  function ql(l) {
    if (typeof l.httpAgentOptions === "function") return l.httpAgentOptions;
    let u = l.httpAgentOptions;
    if (l.keepAlive != null) u = {
      keepAlive: l.keepAlive,
      ...u
    };
    if (u != null) return hi.httpAgentFactoryFromOptions(u); else return;
  }
  function Hl(l, u, f, d) {
    if (l.metadata) yi.diag.warn("Metadata cannot be set when using http");
    return qt.mergeOtlpNodeHttpConfigurationWithDefaults({
      url: l.url,
      headers: vi.convertLegacyHeaders(l),
      concurrencyLimit: l.concurrencyLimit,
      timeoutMillis: l.timeoutMillis,
      compression: l.compression,
      agentFactory: ql(l),
      userAgent: l.userAgent
    }, mi.getNodeHttpConfigurationFromEnvironment(u, f), qt.getNodeHttpConfigurationDefaults(d, f));
  }
  bi.convertLegacyHttpOptions = Hl;
});

var xJ = C(function(dt) {
  Object.defineProperty(dt, "__esModule", {
    value: !0
  });
  dt.convertLegacyHttpOptions = dt.getSharedConfigurationFromEnvironment = dt.createOtlpHttpExportDelegate = dt.httpAgentFactoryFromOptions = void 0;
  var Fl = Mt();
  Object.defineProperty(dt, "httpAgentFactoryFromOptions", {
    enumerable: !0,
    get: function() {
      return Fl.httpAgentFactoryFromOptions;
    }
  });
  var Kl = Xo();
  Object.defineProperty(dt, "createOtlpHttpExportDelegate", {
    enumerable: !0,
    get: function() {
      return Kl.createOtlpHttpExportDelegate;
    }
  });
  var jl = be();
  Object.defineProperty(dt, "getSharedConfigurationFromEnvironment", {
    enumerable: !0,
    get: function() {
      return jl.getSharedConfigurationFromEnvironment;
    }
  });
  var zl = xi();
  Object.defineProperty(dt, "convertLegacyHttpOptions", {
    enumerable: !0,
    get: function() {
      return zl.convertLegacyHttpOptions;
    }
  });
});

export { e4, rqr, Ser, QHe, wer, ver, oqr, sqr, iqr, A2, xJ };
