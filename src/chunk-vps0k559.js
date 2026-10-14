// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { we, C, Nr, Ne } from "./chunk-m8ez8fhk.js";

var gn = C(function(Ol, bn) {
  var yn = Ne("stream").Stream, Ca = Ne("util");
  bn.exports = oe;
  function oe() {
    this.source = null, this.dataSize = 0, this.maxDataSize = 1048576, this.pauseStream = !0, 
    this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
  }
  Ca.inherits(oe, yn);
  oe.create = function(e, t) {
    var r = new this;
    t = t || {};
    for (var n in t) r[n] = t[n];
    r.source = e;
    var o = e.emit;
    if (e.emit = function() {
      return r._handleEmit(arguments), o.apply(e, arguments);
    }, e.on("error", function() {}), r.pauseStream) e.pause();
    return r;
  };
  Object.defineProperty(oe.prototype, "readable", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.source.readable;
    }
  });
  oe.prototype.setEncoding = function() {
    return this.source.setEncoding.apply(this.source, arguments);
  };
  oe.prototype.resume = function() {
    if (!this._released) this.release();
    this.source.resume();
  };
  oe.prototype.pause = function() {
    this.source.pause();
  };
  oe.prototype.release = function() {
    this._released = !0, this._bufferedEvents.forEach(function(e) {
      this.emit.apply(this, e);
    }.bind(this)), this._bufferedEvents = [];
  };
  oe.prototype.pipe = function() {
    var e = yn.prototype.pipe.apply(this, arguments);
    return this.resume(), e;
  };
  oe.prototype._handleEmit = function(e) {
    if (this._released) {
      this.emit.apply(this, e);
      return;
    }
    if (e[0] === "data") this.dataSize += e[1].length, this._checkIfMaxDataSizeExceeded();
    this._bufferedEvents.push(e);
  };
  oe.prototype._checkIfMaxDataSizeExceeded = function() {
    if (this._maxDataSizeExceeded) return;
    if (this.dataSize <= this.maxDataSize) return;
    this._maxDataSizeExceeded = !0;
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", Error(e));
  };
});

var xn = C(function(Cl, wn) {
  var va = Ne("util"), Rn = Ne("stream").Stream, En = gn();
  wn.exports = L;
  function L() {
    this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2097152, 
    this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, 
    this._insideLoop = !1, this._pendingNext = !1;
  }
  va.inherits(L, Rn);
  L.create = function(e) {
    var t = new this;
    e = e || {};
    for (var r in e) t[r] = e[r];
    return t;
  };
  L.isStreamLike = function(e) {
    return typeof e !== "function" && typeof e !== "string" && typeof e !== "boolean" && typeof e !== "number" && !Buffer.isBuffer(e);
  };
  L.prototype.append = function(e) {
    var t = L.isStreamLike(e);
    if (t) {
      if (!(e instanceof En)) {
        var r = En.create(e, {
          maxDataSize: 1 / 0,
          pauseStream: this.pauseStreams
        });
        e.on("data", this._checkDataSize.bind(this)), e = r;
      }
      if (this._handleErrors(e), this.pauseStreams) e.pause();
    }
    return this._streams.push(e), this;
  };
  L.prototype.pipe = function(e, t) {
    return Rn.prototype.pipe.call(this, e, t), this.resume(), e;
  };
  L.prototype._getNext = function() {
    if (this._currentStream = null, this._insideLoop) {
      this._pendingNext = !0;
      return;
    }
    this._insideLoop = !0;
    try {
      do {
        this._pendingNext = !1, this._realGetNext();
      } while (this._pendingNext);
    } finally {
      this._insideLoop = !1;
    }
  };
  L.prototype._realGetNext = function() {
    var e = this._streams.shift();
    if (typeof e > "u") {
      this.end();
      return;
    }
    if (typeof e !== "function") {
      this._pipeNext(e);
      return;
    }
    var t = e;
    t(function(r) {
      var n = L.isStreamLike(r);
      if (n) r.on("data", this._checkDataSize.bind(this)), this._handleErrors(r);
      this._pipeNext(r);
    }.bind(this));
  };
  L.prototype._pipeNext = function(e) {
    this._currentStream = e;
    var t = L.isStreamLike(e);
    if (t) {
      e.on("end", this._getNext.bind(this)), e.pipe(this, {
        end: !1
      });
      return;
    }
    var r = e;
    this.write(r), this._getNext();
  };
  L.prototype._handleErrors = function(e) {
    var t = this;
    e.on("error", function(r) {
      t._emitError(r);
    });
  };
  L.prototype.write = function(e) {
    this.emit("data", e);
  };
  L.prototype.pause = function() {
    if (!this.pauseStreams) return;
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function") this._currentStream.pause();
    this.emit("pause");
  };
  L.prototype.resume = function() {
    if (!this._released) this._released = !0, this.writable = !0, this._getNext();
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function") this._currentStream.resume();
    this.emit("resume");
  };
  L.prototype.end = function() {
    this._reset(), this.emit("end");
  };
  L.prototype.destroy = function() {
    this._reset(), this.emit("close");
  };
  L.prototype._reset = function() {
    this.writable = !1, this._streams = [], this._currentStream = null;
  };
  L.prototype._checkDataSize = function() {
    if (this._updateDataSize(), this.dataSize <= this.maxDataSize) return;
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(Error(e));
  };
  L.prototype._updateDataSize = function() {
    this.dataSize = 0;
    var e = this;
    if (this._streams.forEach(function(t) {
      if (!t.dataSize) return;
      e.dataSize += t.dataSize;
    }), this._currentStream && this._currentStream.dataSize) this.dataSize += this._currentStream.dataSize;
  };
  L.prototype._emitError = function(e) {
    this._reset(), this.emit("error", e);
  };
});

var Sn = C(function(vl, _n) {
  var Ze = e => () => {
    throw Error("mime-types." + e + "() is stubbed in this build. Do not rely on axios auto-multipart serialization (plain object + Content-Type: multipart/form-data). Use native FormData or hand-roll the multipart body instead. See scripts/build-plugins.ts stubMimeTypes plugin.");
  };
  _n.exports = {
    lookup: Ze("lookup"),
    contentType: Ze("contentType"),
    extension: Ze("extension"),
    charset: Ze("charset"),
    extensions: Object.create(null),
    types: Object.create(null),
    charsets: {
      lookup: Ze("charsets.lookup")
    }
  };
});

var On = C(function(Tl, An) {
  An.exports = Ta;
  function Ta(e) {
    var t = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
    if (t) t(e); else setTimeout(e, 0);
  }
});

var Jt = C(function(Pl, vn) {
  var Cn = On();
  vn.exports = Pa;
  function Pa(e) {
    var t = !1;
    return Cn(function() {
      t = !0;
    }), function(n, o) {
      if (t) e(n, o); else Cn(function() {
        e(n, o);
      });
    };
  }
});

var Kt = C(function(Fl, Tn) {
  Tn.exports = Fa;
  function Fa(e) {
    Object.keys(e.jobs).forEach(La.bind(e)), e.jobs = {};
  }
  function La(e) {
    if (typeof this.jobs[e] == "function") this.jobs[e]();
  }
});

var Xt = C(function(Ll, Fn) {
  var Pn = Jt(), Ba = Kt();
  Fn.exports = Na;
  function Na(e, t, r, n) {
    var o = r.keyedList ? r.keyedList[r.index] : r.index;
    r.jobs[o] = Da(t, o, e[o], function(s, i) {
      if (!(o in r.jobs)) return;
      if (delete r.jobs[o], s) Ba(r); else r.results[o] = i;
      n(s, r.results);
    });
  }
  function Da(e, t, r, n) {
    var o;
    if (e.length == 2) o = e(r, Pn(n)); else o = e(r, t, Pn(n));
    return o;
  }
});

var Yt = C(function(Bl, Ln) {
  Ln.exports = Ua;
  function Ua(e, t) {
    var r = !Array.isArray(e), n = {
      index: 0,
      keyedList: r || t ? Object.keys(e) : null,
      jobs: {},
      results: r ? {} : [],
      size: r ? Object.keys(e).length : e.length
    };
    if (t) n.keyedList.sort(r ? t : function(o, s) {
      return t(e[o], e[s]);
    });
    return n;
  }
});

var Qt = C(function(Nl, Bn) {
  var qa = Kt(), Ia = Jt();
  Bn.exports = ka;
  function ka(e) {
    if (!Object.keys(this.jobs).length) return;
    this.index = this.size, qa(this), Ia(e)(null, this.results);
  }
});

var Dn = C(function(Dl, Nn) {
  var ja = Xt(), Ma = Yt(), Ha = Qt();
  Nn.exports = za;
  function za(e, t, r) {
    var n = Ma(e);
    while (n.index < (n.keyedList || e).length) ja(e, t, n, function(o, s) {
      if (o) {
        r(o, s);
        return;
      }
      if (Object.keys(n.jobs).length === 0) {
        r(null, n.results);
        return;
      }
    }), n.index++;
    return Ha.bind(n, r);
  }
});

var Zt = C(function(Ul, xt) {
  var Un = Xt(), $a = Yt(), Va = Qt();
  xt.exports = Wa;
  xt.exports.ascending = qn;
  xt.exports.descending = Ga;
  function Wa(e, t, r, n) {
    var o = $a(e, r);
    return Un(e, t, o, function s(i, a) {
      if (i) {
        n(i, a);
        return;
      }
      if (o.index++, o.index < (o.keyedList || e).length) {
        Un(e, t, o, s);
        return;
      }
      n(null, o.results);
    }), Va.bind(o, n);
  }
  function qn(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
  }
  function Ga(e, t) {
    return -1 * qn(e, t);
  }
});

var kn = C(function(ql, In) {
  var Ja = Zt();
  In.exports = Ka;
  function Ka(e, t, r) {
    return Ja(e, t, null, r);
  }
});

var Mn = C(function(Il, jn) {
  jn.exports = {
    parallel: Dn(),
    serial: kn(),
    serialOrdered: Zt()
  };
});

var er = C(function(kl, Hn) {
  Hn.exports = Object;
});

var $n = C(function(jl, zn) {
  zn.exports = Error;
});

var Wn = C(function(Ml, Vn) {
  Vn.exports = EvalError;
});

var Jn = C(function(Hl, Gn) {
  Gn.exports = RangeError;
});

var Xn = C(function(zl, Kn) {
  Kn.exports = ReferenceError;
});

var Qn = C(function($l, Yn) {
  Yn.exports = SyntaxError;
});

var _t = C(function(Vl, Zn) {
  Zn.exports = TypeError;
});

var to = C(function(Wl, eo) {
  eo.exports = URIError;
});

var no = C(function(Gl, ro) {
  ro.exports = Math.abs;
});

var so = C(function(Jl, oo) {
  oo.exports = Math.floor;
});

var ao = C(function(Kl, io) {
  io.exports = Math.max;
});

var co = C(function(Xl, uo) {
  uo.exports = Math.min;
});

var lo = C(function(Yl, fo) {
  fo.exports = Math.pow;
});

var ho = C(function(Ql, po) {
  po.exports = Math.round;
});

var yo = C(function(Zl, mo) {
  mo.exports = Number.isNaN || function(t) {
    return t !== t;
  };
});

var go = C(function(ep, bo) {
  var Xa = yo();
  bo.exports = function(t) {
    if (Xa(t) || t === 0) return t;
    return t < 0 ? -1 : 1;
  };
});

var Ro = C(function(tp, Eo) {
  Eo.exports = Object.getOwnPropertyDescriptor;
});

var tr = C(function(rp, wo) {
  var St = Ro();
  if (St) try {
    St([], "length");
  } catch (e) {
    St = null;
  }
  wo.exports = St;
});

var _o = C(function(np, xo) {
  var Ot = Object.defineProperty || !1;
  if (Ot) try {
    Ot({}, "a", {
      value: 1
    });
  } catch (e) {
    Ot = !1;
  }
  xo.exports = Ot;
});

var rr = C(function(op, So) {
  So.exports = function() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return !1;
    if (typeof Symbol.iterator === "symbol") return !0;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r === "string") return !1;
    if (Object.prototype.toString.call(r) !== "[object Symbol]") return !1;
    if (Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
    var o = 42;
    t[r] = o;
    for (var s in t) return !1;
    if (typeof Object.keys === "function" && Object.keys(t).length !== 0) return !1;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(t).length !== 0) return !1;
    var i = Object.getOwnPropertySymbols(t);
    if (i.length !== 1 || i[0] !== r) return !1;
    if (!Object.prototype.propertyIsEnumerable.call(t, r)) return !1;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var a = Object.getOwnPropertyDescriptor(t, r);
      if (a.value !== o || a.enumerable !== !0) return !1;
    }
    return !0;
  };
});

var Co = C(function(sp, Oo) {
  var Ao = typeof Symbol < "u" && Symbol, Ya = rr();
  Oo.exports = function() {
    if (typeof Ao !== "function") return !1;
    if (typeof Symbol !== "function") return !1;
    if (typeof Ao("foo") !== "symbol") return !1;
    if (typeof Symbol("bar") !== "symbol") return !1;
    return Ya();
  };
});

var nr = C(function(ip, vo) {
  vo.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
});

var or = C(function(ap, To) {
  var Qa = er();
  To.exports = Qa.getPrototypeOf || null;
});

var Lo = C(function(up, Fo) {
  var Za = "Function.prototype.bind called on incompatible ", eu = Object.prototype.toString, tu = Math.max, ru = "[object Function]", Po = function(t, r) {
    var n = [];
    for (var o = 0; o < t.length; o += 1) n[o] = t[o];
    for (var s = 0; s < r.length; s += 1) n[s + t.length] = r[s];
    return n;
  }, nu = function(t, r) {
    var n = [];
    for (var o = r || 0, s = 0; o < t.length; o += 1, s += 1) n[s] = t[o];
    return n;
  }, ou = function(e, t) {
    var r = "";
    for (var n = 0; n < e.length; n += 1) if (r += e[n], n + 1 < e.length) r += t;
    return r;
  };
  Fo.exports = function(t) {
    var r = this;
    if (typeof r !== "function" || eu.apply(r) !== ru) throw TypeError(Za + r);
    var n = nu(arguments, 1), o, s = function() {
      if (this instanceof o) {
        var c = r.apply(this, Po(n, arguments));
        if (Object(c) === c) return c;
        return this;
      }
      return r.apply(t, Po(n, arguments));
    }, i = tu(0, r.length - n.length), a = [];
    for (var l = 0; l < i; l++) a[l] = "$" + l;
    if (o = Function("binder", "return function (" + ou(a, ",") + "){ return binder.apply(this,arguments); }")(s), 
    r.prototype) {
      var f = function() {};
      f.prototype = r.prototype, o.prototype = new f, f.prototype = null;
    }
    return o;
  };
});

var Ee = C(function(cp, Bo) {
  var su = Lo();
  Bo.exports = Function.prototype.bind || su;
});

var Ct = C(function(fp, No) {
  No.exports = Function.prototype.call;
});

var sr = C(function(lp, Do) {
  Do.exports = Function.prototype.apply;
});

var qo = C(function(pp, Uo) {
  Uo.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
});

var ko = C(function(dp, Io) {
  var iu = Ee(), au = sr(), uu = Ct(), cu = qo();
  Io.exports = cu || iu.call(uu, au);
});

var Mo = C(function(hp, jo) {
  var fu = Ee(), lu = _t(), pu = Ct(), du = ko();
  jo.exports = function(t) {
    if (t.length < 1 || typeof t[0] !== "function") throw new lu("a function is required");
    return du(fu, pu, t);
  };
});

var Go = C(function(mp, Wo) {
  var hu = Mo(), Ho = tr(), $o;
  try {
    $o = [].__proto__ === Array.prototype;
  } catch (e) {
    if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
  }
  var ir = !!$o && Ho && Ho(Object.prototype, "__proto__"), Vo = Object, zo = Vo.getPrototypeOf;
  Wo.exports = ir && typeof ir.get === "function" ? hu([ ir.get ]) : typeof zo === "function" ? function(t) {
    return zo(t == null ? t : Vo(t));
  } : !1;
});

var Qo = C(function(yp, Yo) {
  var Jo = nr(), Ko = or(), Xo = Go();
  Yo.exports = Jo ? function(t) {
    return Jo(t);
  } : Ko ? function(t) {
    if (!t || typeof t !== "object" && typeof t !== "function") throw TypeError("getProto: not an object");
    return Ko(t);
  } : Xo ? function(t) {
    return Xo(t);
  } : null;
});

var es = C(function(bp, Zo) {
  var mu = Function.prototype.call, yu = Object.prototype.hasOwnProperty, bu = Ee();
  Zo.exports = bu.call(mu, yu);
});

var is = C(function(gp, ss) {
  var _, gu = er(), Eu = $n(), Ru = Wn(), wu = Jn(), xu = Xn(), je = Qn(), ke = _t(), _u = to(), Su = no(), Au = so(), Ou = ao(), Cu = co(), vu = lo(), Tu = ho(), Pu = go(), ns = Function, ar = function(e) {
    try {
      return ns('"use strict"; return (' + e + ").constructor;")();
    } catch (t) {}
  }, et = tr(), Fu = _o(), ur = function() {
    throw new ke;
  }, Lu = et ? function() {
    try {
      return arguments.callee, ur;
    } catch (e) {
      try {
        return et(arguments, "callee").get;
      } catch (t) {
        return ur;
      }
    }
  }() : ur, qe = Co()(), M = Qo(), Bu = or(), Nu = nr(), os = sr(), tt = Ct(), Ie = {}, Du = typeof Uint8Array > "u" || !M ? _ : M(Uint8Array), Re = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? _ : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? _ : ArrayBuffer,
    "%ArrayIteratorPrototype%": qe && M ? M([][Symbol.iterator]()) : _,
    "%AsyncFromSyncIteratorPrototype%": _,
    "%AsyncFunction%": Ie,
    "%AsyncGenerator%": Ie,
    "%AsyncGeneratorFunction%": Ie,
    "%AsyncIteratorPrototype%": Ie,
    "%Atomics%": typeof Atomics > "u" ? _ : Atomics,
    "%BigInt%": typeof BigInt > "u" ? _ : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? _ : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? _ : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? _ : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Eu,
    "%eval%": eval,
    "%EvalError%": Ru,
    "%Float16Array%": typeof Float16Array > "u" ? _ : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? _ : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? _ : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? _ : FinalizationRegistry,
    "%Function%": ns,
    "%GeneratorFunction%": Ie,
    "%Int8Array%": typeof Int8Array > "u" ? _ : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? _ : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? _ : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": qe && M ? M(M([][Symbol.iterator]())) : _,
    "%JSON%": typeof JSON === "object" ? JSON : _,
    "%Map%": typeof Map > "u" ? _ : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !qe || !M ? _ : M((new Map)[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": gu,
    "%Object.getOwnPropertyDescriptor%": et,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? _ : Promise,
    "%Proxy%": typeof Proxy > "u" ? _ : Proxy,
    "%RangeError%": wu,
    "%ReferenceError%": xu,
    "%Reflect%": typeof Reflect > "u" ? _ : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? _ : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !qe || !M ? _ : M((new Set)[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? _ : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": qe && M ? M(""[Symbol.iterator]()) : _,
    "%Symbol%": qe ? Symbol : _,
    "%SyntaxError%": je,
    "%ThrowTypeError%": Lu,
    "%TypedArray%": Du,
    "%TypeError%": ke,
    "%Uint8Array%": typeof Uint8Array > "u" ? _ : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? _ : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? _ : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? _ : Uint32Array,
    "%URIError%": _u,
    "%WeakMap%": typeof WeakMap > "u" ? _ : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? _ : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? _ : WeakSet,
    "%Function.prototype.call%": tt,
    "%Function.prototype.apply%": os,
    "%Object.defineProperty%": Fu,
    "%Object.getPrototypeOf%": Bu,
    "%Math.abs%": Su,
    "%Math.floor%": Au,
    "%Math.max%": Ou,
    "%Math.min%": Cu,
    "%Math.pow%": vu,
    "%Math.round%": Tu,
    "%Math.sign%": Pu,
    "%Reflect.getPrototypeOf%": Nu
  };
  if (M) try {
    null.error;
  } catch (e) {
    cr = M(M(e)), Re["%Error.prototype%"] = cr;
  }
  var cr, Uu = function e(t) {
    var r;
    if (t === "%AsyncFunction%") r = ar("async function () {}"); else if (t === "%GeneratorFunction%") r = ar("function* () {}"); else if (t === "%AsyncGeneratorFunction%") r = ar("async function* () {}"); else if (t === "%AsyncGenerator%") {
      var n = e("%AsyncGeneratorFunction%");
      if (n) r = n.prototype;
    } else if (t === "%AsyncIteratorPrototype%") {
      var o = e("%AsyncGenerator%");
      if (o && M) r = M(o.prototype);
    }
    return Re[t] = r, r;
  }, ts = {
    __proto__: null,
    "%ArrayBufferPrototype%": [ "ArrayBuffer", "prototype" ],
    "%ArrayPrototype%": [ "Array", "prototype" ],
    "%ArrayProto_entries%": [ "Array", "prototype", "entries" ],
    "%ArrayProto_forEach%": [ "Array", "prototype", "forEach" ],
    "%ArrayProto_keys%": [ "Array", "prototype", "keys" ],
    "%ArrayProto_values%": [ "Array", "prototype", "values" ],
    "%AsyncFunctionPrototype%": [ "AsyncFunction", "prototype" ],
    "%AsyncGenerator%": [ "AsyncGeneratorFunction", "prototype" ],
    "%AsyncGeneratorPrototype%": [ "AsyncGeneratorFunction", "prototype", "prototype" ],
    "%BooleanPrototype%": [ "Boolean", "prototype" ],
    "%DataViewPrototype%": [ "DataView", "prototype" ],
    "%DatePrototype%": [ "Date", "prototype" ],
    "%ErrorPrototype%": [ "Error", "prototype" ],
    "%EvalErrorPrototype%": [ "EvalError", "prototype" ],
    "%Float32ArrayPrototype%": [ "Float32Array", "prototype" ],
    "%Float64ArrayPrototype%": [ "Float64Array", "prototype" ],
    "%FunctionPrototype%": [ "Function", "prototype" ],
    "%Generator%": [ "GeneratorFunction", "prototype" ],
    "%GeneratorPrototype%": [ "GeneratorFunction", "prototype", "prototype" ],
    "%Int8ArrayPrototype%": [ "Int8Array", "prototype" ],
    "%Int16ArrayPrototype%": [ "Int16Array", "prototype" ],
    "%Int32ArrayPrototype%": [ "Int32Array", "prototype" ],
    "%JSONParse%": [ "JSON", "parse" ],
    "%JSONStringify%": [ "JSON", "stringify" ],
    "%MapPrototype%": [ "Map", "prototype" ],
    "%NumberPrototype%": [ "Number", "prototype" ],
    "%ObjectPrototype%": [ "Object", "prototype" ],
    "%ObjProto_toString%": [ "Object", "prototype", "toString" ],
    "%ObjProto_valueOf%": [ "Object", "prototype", "valueOf" ],
    "%PromisePrototype%": [ "Promise", "prototype" ],
    "%PromiseProto_then%": [ "Promise", "prototype", "then" ],
    "%Promise_all%": [ "Promise", "all" ],
    "%Promise_reject%": [ "Promise", "reject" ],
    "%Promise_resolve%": [ "Promise", "resolve" ],
    "%RangeErrorPrototype%": [ "RangeError", "prototype" ],
    "%ReferenceErrorPrototype%": [ "ReferenceError", "prototype" ],
    "%RegExpPrototype%": [ "RegExp", "prototype" ],
    "%SetPrototype%": [ "Set", "prototype" ],
    "%SharedArrayBufferPrototype%": [ "SharedArrayBuffer", "prototype" ],
    "%StringPrototype%": [ "String", "prototype" ],
    "%SymbolPrototype%": [ "Symbol", "prototype" ],
    "%SyntaxErrorPrototype%": [ "SyntaxError", "prototype" ],
    "%TypedArrayPrototype%": [ "TypedArray", "prototype" ],
    "%TypeErrorPrototype%": [ "TypeError", "prototype" ],
    "%Uint8ArrayPrototype%": [ "Uint8Array", "prototype" ],
    "%Uint8ClampedArrayPrototype%": [ "Uint8ClampedArray", "prototype" ],
    "%Uint16ArrayPrototype%": [ "Uint16Array", "prototype" ],
    "%Uint32ArrayPrototype%": [ "Uint32Array", "prototype" ],
    "%URIErrorPrototype%": [ "URIError", "prototype" ],
    "%WeakMapPrototype%": [ "WeakMap", "prototype" ],
    "%WeakSetPrototype%": [ "WeakSet", "prototype" ]
  }, rt = Ee(), vt = es(), qu = rt.call(tt, Array.prototype.concat), Iu = rt.call(os, Array.prototype.splice), rs = rt.call(tt, String.prototype.replace), Tt = rt.call(tt, String.prototype.slice), ku = rt.call(tt, RegExp.prototype.exec), ju = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Mu = /\\(\\)?/g, Hu = function(t) {
    var r = Tt(t, 0, 1), n = Tt(t, -1);
    if (r === "%" && n !== "%") throw new je("invalid intrinsic syntax, expected closing `%`"); else if (n === "%" && r !== "%") throw new je("invalid intrinsic syntax, expected opening `%`");
    var o = [];
    return rs(t, ju, function(s, i, a, l) {
      o[o.length] = a ? rs(l, Mu, "$1") : i || s;
    }), o;
  }, zu = function(t, r) {
    var n = t, o;
    if (vt(ts, n)) o = ts[n], n = "%" + o[0] + "%";
    if (vt(Re, n)) {
      var s = Re[n];
      if (s === Ie) s = Uu(n);
      if (typeof s > "u" && !r) throw new ke("intrinsic " + t + " exists, but is not available. Please file an issue!");
      return {
        alias: o,
        name: n,
        value: s
      };
    }
    throw new je("intrinsic " + t + " does not exist!");
  };
  ss.exports = function(t, r) {
    if (typeof t !== "string" || t.length === 0) throw new ke("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r !== "boolean") throw new ke('"allowMissing" argument must be a boolean');
    if (ku(/^%?[^%]*%?$/, t) === null) throw new je("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n = Hu(t), o = n.length > 0 ? n[0] : "", s = zu("%" + o + "%", r), {name: i, value: a} = s, l = !1, f = s.alias;
    if (f) o = f[0], Iu(n, qu([ 0, 1 ], f));
    for (var c = 1, p = !0; c < n.length; c += 1) {
      var d = n[c], b = Tt(d, 0, 1), m = Tt(d, -1);
      if ((b === '"' || b === "'" || b === "`" || (m === '"' || m === "'" || m === "`")) && b !== m) throw new je("property names with quotes must have matching quotes");
      if (d === "constructor" || !p) l = !0;
      if (o += "." + d, i = "%" + o + "%", vt(Re, i)) a = Re[i]; else if (a != null) {
        if (!(d in a)) {
          if (!r) throw new ke("base intrinsic for " + t + " exists, but the property is not available.");
          return;
        }
        if (et && c + 1 >= n.length) {
          var g = et(a, d);
          if (p = !!g, p && "get" in g && !("originalValue" in g.get)) a = g.get; else a = a[d];
        } else p = vt(a, d), a = a[d];
        if (p && !l) Re[i] = a;
      }
    }
    return a;
  };
});

var us = C(function(Ep, as) {
  var $u = rr();
  as.exports = function() {
    return $u() && !!Symbol.toStringTag;
  };
});

var fs = C(function(Rp, cs) {
  var Vu = Function.prototype.call, Wu = Object.prototype.hasOwnProperty, Gu = Ee();
  cs.exports = Gu.call(Vu, Wu);
});

var ds = C(function(wp, ps) {
  var Ju = is(), ls = Ju("%Object.defineProperty%", !0), Ku = us()(), Xu = fs(), Yu = _t(), Pt = Ku ? Symbol.toStringTag : null;
  ps.exports = function(t, r) {
    var n = arguments.length > 2 && !!arguments[2] && arguments[2].force, o = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
    if (typeof n < "u" && typeof n !== "boolean" || typeof o < "u" && typeof o !== "boolean") throw new Yu("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
    if (Pt && (n || !Xu(t, Pt))) if (ls) ls(t, Pt, {
      configurable: !o,
      enumerable: !1,
      value: r,
      writable: !1
    }); else t[Pt] = r;
  };
});

var ms = C(function(xp, hs) {
  var Qu = Function.prototype.call, Zu = Object.prototype.hasOwnProperty, ec = Ee();
  hs.exports = ec.call(Qu, Zu);
});

var bs = C(function(_p, ys) {
  ys.exports = function(e, t) {
    return Object.keys(t).forEach(function(r) {
      e[r] = e[r] || t[r];
    }), e;
  };
});

var Rs = C(function(Sp, Es) {
  var dr = xn(), tc = Ne("util"), fr = Ne("path"), rc = Ne("http"), nc = Ne("https"), oc = Ne("url").parse, sc = Ne("fs"), ic = Ne("stream").Stream, ac = Ne("crypto"), lr = Sn(), uc = Mn(), cc = ds(), pe = ms(), pr = bs();
  function gs(e) {
    return String(e).replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/"/g, "%22");
  }
  function S(e) {
    if (!(this instanceof S)) return new S(e);
    this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], dr.call(this), 
    e = e || {};
    for (var t in e) this[t] = e[t];
  }
  tc.inherits(S, dr);
  S.LINE_BREAK = `\r\n`;
  S.DEFAULT_CONTENT_TYPE = "application/octet-stream";
  S.prototype.append = function(e, t, r) {
    if (r = r || {}, typeof r === "string") r = {
      filename: r
    };
    var n = dr.prototype.append.bind(this);
    if (typeof t === "number" || t == null) t = String(t);
    if (Array.isArray(t)) {
      this._error(Error("Arrays are not supported."));
      return;
    }
    var o = this._multiPartHeader(e, t, r), s = this._multiPartFooter();
    n(o), n(t), n(s), this._trackLength(o, t, r);
  };
  S.prototype._trackLength = function(e, t, r) {
    var n = 0;
    if (r.knownLength != null) n += Number(r.knownLength); else if (Buffer.isBuffer(t)) n = t.length; else if (typeof t === "string") n = Buffer.byteLength(t);
    if (this._valueLength += n, this._overheadLength += Buffer.byteLength(e) + S.LINE_BREAK.length, 
    !t || !t.path && !(t.readable && pe(t, "httpVersion")) && !(t instanceof ic)) return;
    if (!r.knownLength) this._valuesToMeasure.push(t);
  };
  S.prototype._lengthRetriever = function(e, t) {
    if (pe(e, "fd")) if (e.end != null && e.end != 1 / 0 && e.start != null) t(null, e.end + 1 - (e.start ? e.start : 0)); else sc.stat(e.path, function(r, n) {
      if (r) {
        t(r);
        return;
      }
      var o = n.size - (e.start ? e.start : 0);
      t(null, o);
    }); else if (pe(e, "httpVersion")) t(null, Number(e.headers["content-length"])); else if (pe(e, "httpModule")) e.on("response", function(r) {
      e.pause(), t(null, Number(r.headers["content-length"]));
    }), e.resume(); else t("Unknown stream");
  };
  S.prototype._multiPartHeader = function(e, t, r) {
    if (typeof r.header === "string") return r.header;
    var n = this._getContentDisposition(t, r), o = this._getContentType(t, r), s = "", i = {
      "Content-Disposition": [ "form-data", 'name="' + gs(e) + '"' ].concat(n || []),
      "Content-Type": [].concat(o || [])
    };
    if (typeof r.header === "object") pr(i, r.header);
    var a;
    for (var l in i) if (pe(i, l)) {
      if (a = i[l], a == null) continue;
      if (!Array.isArray(a)) a = [ a ];
      if (a.length) s += l + ": " + a.join("; ") + S.LINE_BREAK;
    }
    return "--" + this.getBoundary() + S.LINE_BREAK + s + S.LINE_BREAK;
  };
  S.prototype._getContentDisposition = function(e, t) {
    var r;
    if (typeof t.filepath === "string") r = fr.normalize(t.filepath).replace(/\\/g, "/"); else if (t.filename || e && (e.name || e.path)) r = fr.basename(t.filename || e && (e.name || e.path)); else if (e && e.readable && pe(e, "httpVersion")) r = fr.basename(e.client._httpMessage.path || "");
    if (r) return 'filename="' + gs(r) + '"';
  };
  S.prototype._getContentType = function(e, t) {
    var r = t.contentType;
    if (!r && e && e.name) r = lr.lookup(e.name);
    if (!r && e && e.path) r = lr.lookup(e.path);
    if (!r && e && e.readable && pe(e, "httpVersion")) r = e.headers["content-type"];
    if (!r && (t.filepath || t.filename)) r = lr.lookup(t.filepath || t.filename);
    if (!r && e && typeof e === "object") r = S.DEFAULT_CONTENT_TYPE;
    return r;
  };
  S.prototype._multiPartFooter = function() {
    return function(e) {
      var t = S.LINE_BREAK, r = this._streams.length === 0;
      if (r) t += this._lastBoundary();
      e(t);
    }.bind(this);
  };
  S.prototype._lastBoundary = function() {
    return "--" + this.getBoundary() + "--" + S.LINE_BREAK;
  };
  S.prototype.getHeaders = function(e) {
    var t, r = {
      "content-type": "multipart/form-data; boundary=" + this.getBoundary()
    };
    for (t in e) if (pe(e, t)) r[t.toLowerCase()] = e[t];
    return r;
  };
  S.prototype.setBoundary = function(e) {
    if (typeof e !== "string") throw TypeError("FormData boundary must be a string");
    this._boundary = e;
  };
  S.prototype.getBoundary = function() {
    if (!this._boundary) this._generateBoundary();
    return this._boundary;
  };
  S.prototype.getBuffer = function() {
    var e = new Buffer.alloc(0), t = this.getBoundary();
    for (var r = 0, n = this._streams.length; r < n; r++) if (typeof this._streams[r] !== "function") {
      if (Buffer.isBuffer(this._streams[r])) e = Buffer.concat([ e, this._streams[r] ]); else e = Buffer.concat([ e, Buffer.from(this._streams[r]) ]);
      if (typeof this._streams[r] !== "string" || this._streams[r].substring(2, t.length + 2) !== t) e = Buffer.concat([ e, Buffer.from(S.LINE_BREAK) ]);
    }
    return Buffer.concat([ e, Buffer.from(this._lastBoundary()) ]);
  };
  S.prototype._generateBoundary = function() {
    this._boundary = "--------------------------" + ac.randomBytes(12).toString("hex");
  };
  S.prototype.getLengthSync = function() {
    var e = this._overheadLength + this._valueLength;
    if (this._streams.length) e += this._lastBoundary().length;
    if (!this.hasKnownLength()) this._error(Error("Cannot calculate proper length in synchronous way."));
    return e;
  };
  S.prototype.hasKnownLength = function() {
    var e = !0;
    if (this._valuesToMeasure.length) e = !1;
    return e;
  };
  S.prototype.getLength = function(e) {
    var t = this._overheadLength + this._valueLength;
    if (this._streams.length) t += this._lastBoundary().length;
    if (!this._valuesToMeasure.length) {
      process.nextTick(e.bind(this, null, t));
      return;
    }
    uc.parallel(this._valuesToMeasure, this._lengthRetriever, function(r, n) {
      if (r) {
        e(r);
        return;
      }
      n.forEach(function(o) {
        t += o;
      }), e(null, t);
    });
  };
  S.prototype.submit = function(e, t) {
    var r, n, o = {
      method: "post"
    };
    if (typeof e === "string") e = oc(e), n = pr({
      port: e.port,
      path: e.pathname,
      host: e.hostname,
      protocol: e.protocol
    }, o); else if (n = pr(e, o), !n.port) n.port = n.protocol === "https:" ? 443 : 80;
    if (n.headers = this.getHeaders(e.headers), n.protocol === "https:") r = nc.request(n); else r = rc.request(n);
    return this.getLength(function(s, i) {
      if (s && s !== "Unknown stream") {
        this._error(s);
        return;
      }
      if (i) r.setHeader("Content-Length", i);
      if (this.pipe(r), t) {
        var a, l = function(f, c) {
          return r.removeListener("error", l), r.removeListener("response", a), t.call(this, f, c);
        };
        a = l.bind(this, null), r.on("error", l), r.on("response", a);
      }
    }.bind(this)), r;
  };
  S.prototype._error = function(e) {
    if (!this.error) this.error = e, this.pause(), this.emit("error", e);
  };
  S.prototype.toString = function() {
    return "[object FormData]";
  };
  cc(S.prototype, "FormData");
  Es.exports = S;
});

var COo = C(function(Od, Us) {
  var ze = 1e3, $e = ze * 60, Ve = $e * 60, Se = Ve * 24, Uc = Se * 7, qc = Se * 365.25;
  Us.exports = function(e, t) {
    t = t || {};
    var r = typeof e;
    if (r === "string" && e.length > 0) return Ic(e); else if (r === "number" && isFinite(e)) return t.long ? jc(e) : kc(e);
    throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
  };
  function Ic(e) {
    if (e = String(e), e.length > 100) return;
    var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
    if (!t) return;
    var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
    switch (n) {
     case "years":
     case "year":
     case "yrs":
     case "yr":
     case "y":
      return r * qc;

     case "weeks":
     case "week":
     case "w":
      return r * Uc;

     case "days":
     case "day":
     case "d":
      return r * Se;

     case "hours":
     case "hour":
     case "hrs":
     case "hr":
     case "h":
      return r * Ve;

     case "minutes":
     case "minute":
     case "mins":
     case "min":
     case "m":
      return r * $e;

     case "seconds":
     case "second":
     case "secs":
     case "sec":
     case "s":
      return r * ze;

     case "milliseconds":
     case "millisecond":
     case "msecs":
     case "msec":
     case "ms":
      return r;

     default:
      return;
    }
  }
  function kc(e) {
    var t = Math.abs(e);
    if (t >= Se) return Math.round(e / Se) + "d";
    if (t >= Ve) return Math.round(e / Ve) + "h";
    if (t >= $e) return Math.round(e / $e) + "m";
    if (t >= ze) return Math.round(e / ze) + "s";
    return e + "ms";
  }
  function jc(e) {
    var t = Math.abs(e);
    if (t >= Se) return Nt(e, t, Se, "day");
    if (t >= Ve) return Nt(e, t, Ve, "hour");
    if (t >= $e) return Nt(e, t, $e, "minute");
    if (t >= ze) return Nt(e, t, ze, "second");
    return e + " ms";
  }
  function Nt(e, t, r, n) {
    var o = t >= r * 1.5;
    return Math.round(e / r) + " " + n + (o ? "s" : "");
  }
});

var Cr = C(function(Cd, qs) {
  function Mc(e) {
    r.debug = r, r.default = r, r.coerce = l, r.disable = i, r.enable = o, r.enabled = a, 
    r.humanize = COo(), r.destroy = f, Object.keys(e).forEach(c => {
      r[c] = e[c];
    }), r.names = [], r.skips = [], r.formatters = {};
    function t(c) {
      let p = 0;
      for (let d = 0; d < c.length; d++) p = (p << 5) - p + c.charCodeAt(d), p |= 0;
      return r.colors[Math.abs(p) % r.colors.length];
    }
    r.selectColor = t;
    function r(c) {
      let p, d = null, b, m;
      function g(...h) {
        if (!g.enabled) return;
        let E = g, N = Number(new Date), v = N - (p || N);
        if (E.diff = v, E.prev = p, E.curr = N, p = N, h[0] = r.coerce(h[0]), typeof h[0] !== "string") h.unshift("%O");
        let x = 0;
        h[0] = h[0].replace(/%([a-zA-Z%])/g, (G, T) => {
          if (G === "%%") return "%";
          x++;
          let J = r.formatters[T];
          if (typeof J === "function") {
            let D = h[x];
            G = J.call(E, D), h.splice(x, 1), x--;
          }
          return G;
        }), r.formatArgs.call(E, h), (E.log || r.log).apply(E, h);
      }
      if (g.namespace = c, g.useColors = r.useColors(), g.color = r.selectColor(c), g.extend = n, 
      g.destroy = r.destroy, Object.defineProperty(g, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => {
          if (d !== null) return d;
          if (b !== r.namespaces) b = r.namespaces, m = r.enabled(c);
          return m;
        },
        set: h => {
          d = h;
        }
      }), typeof r.init === "function") r.init(g);
      return g;
    }
    function n(c, p) {
      let d = r(this.namespace + (typeof p > "u" ? ":" : p) + c);
      return d.log = this.log, d;
    }
    function o(c) {
      r.save(c), r.namespaces = c, r.names = [], r.skips = [];
      let p = (typeof c === "string" ? c : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (let d of p) if (d[0] === "-") r.skips.push(d.slice(1)); else r.names.push(d);
    }
    function s(c, p) {
      let d = 0, b = 0, m = -1, g = 0;
      while (d < c.length) if (b < p.length && (p[b] === c[d] || p[b] === "*")) if (p[b] === "*") m = b, 
      g = d, b++; else d++, b++; else if (m !== -1) b = m + 1, g++, d = g; else return !1;
      while (b < p.length && p[b] === "*") b++;
      return b === p.length;
    }
    function i() {
      let c = [ ...r.names, ...r.skips.map(p => "-" + p) ].join(",");
      return r.enable(""), c;
    }
    function a(c) {
      for (let p of r.skips) if (s(c, p)) return !1;
      for (let p of r.names) if (s(c, p)) return !0;
      return !1;
    }
    function l(c) {
      if (c instanceof Error) return c.stack || c.message;
      return c;
    }
    function f() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  qs.exports = Mc;
});

var Is = C(function(vr, Ut) {
  vr.formatArgs = zc;
  vr.save = $c;
  vr.load = Vc;
  vr.useColors = Hc;
  vr.storage = Wc();
  vr.destroy = (() => {
    let e = !1;
    return () => {
      if (!e) e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    };
  })();
  vr.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ];
  function Hc() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
    let e;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function zc(e) {
    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + Ut.exports.humanize(this.diff), 
    !this.useColors) return;
    let t = "color: " + this.color;
    e.splice(1, 0, t, "color: inherit");
    let r = 0, n = 0;
    e[0].replace(/%[a-zA-Z%]/g, o => {
      if (o === "%%") return;
      if (r++, o === "%c") n = r;
    }), e.splice(n, 0, t);
  }
  vr.log = console.debug || console.log || (() => {});
  function $c(e) {
    try {
      if (e) vr.storage.setItem("debug", e); else vr.storage.removeItem("debug");
    } catch (t) {}
  }
  function Vc() {
    let e;
    try {
      e = vr.storage.getItem("debug");
    } catch (t) {}
    if (!e && typeof process < "u" && "env" in process) e = process.env.DEBUG;
    return e;
  }
  function Wc() {
    try {
      return localStorage;
    } catch (e) {}
  }
  Ut.exports = Cr()(vr);
  var {formatters: Gc} = Ut.exports;
  Gc.j = function(e) {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return "[UnexpectedJSONParseError]: " + t.message;
    }
  };
});

var zOr = C(function(Td, ks) {
  ks.exports = (e, t = process.argv) => {
    let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), o = t.indexOf("--");
    return n !== -1 && (o === -1 || n < o);
  };
});

var Ms = C(function(Fd, js) {
  var Pd = Ne("os"), qt = Ne("tty"), ee = zOr(), {env: H} = process, It;
  if (ee("no-color") || ee("no-colors") || ee("color=false") || ee("color=never")) It = 0; else if (ee("color") || ee("colors") || ee("color=true") || ee("color=always")) It = 1;
  function tf() {
    if ("FORCE_COLOR" in H) {
      if (H.FORCE_COLOR === "true") return 1;
      if (H.FORCE_COLOR === "false") return 0;
      return H.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(H.FORCE_COLOR, 10), 3);
    }
  }
  function rf(e) {
    if (e === 0) return !1;
    return {
      level: e,
      hasBasic: !0,
      has256: e >= 2,
      has16m: e >= 3
    };
  }
  function nf(e, {streamIsTTY: t, sniffFlags: r = !0} = {}) {
    let n = tf();
    if (n !== void 0) It = n;
    let o = r ? It : n;
    if (o === 0) return 0;
    if (r) {
      if (ee("color=16m") || ee("color=full") || ee("color=truecolor")) return 3;
      if (ee("color=256")) return 2;
    }
    if (e && !t && o === void 0) return 0;
    let s = o || 0;
    if (H.TERM === "dumb") return s;
    if ("CI" in H) {
      if ([ "TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE", "DRONE" ].some(i => i in H) || H.CI_NAME === "codeship") return 1;
      return s;
    }
    if ("TEAMCITY_VERSION" in H) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(H.TEAMCITY_VERSION) ? 1 : 0;
    if (H.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in H) {
      let i = Number.parseInt((H.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (H.TERM_PROGRAM) {
       case "iTerm.app":
        return i >= 3 ? 3 : 2;

       case "Apple_Terminal":
        return 2;
      }
    }
    if (/-256(color)?$/i.test(H.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(H.TERM)) return 1;
    if ("COLORTERM" in H) return 1;
    return s;
  }
  function Tr(e, t = {}) {
    let r = nf(e, {
      streamIsTTY: e && e.isTTY,
      ...t
    });
    return rf(r);
  }
  js.exports = {
    supportsColor: Tr,
    stdout: Tr({
      isTTY: qt.isatty(1)
    }),
    stderr: Tr({
      isTTY: qt.isatty(2)
    })
  };
});

var Vs = C(function(Pr, kt) {
  var Hs = Ne("tty"), me = Ne("util");
  Pr.init = lf;
  Pr.log = uf;
  Pr.formatArgs = sf;
  Pr.save = cf;
  Pr.load = ff;
  Pr.useColors = of;
  Pr.destroy = me.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  Pr.colors = [ 6, 2, 3, 4, 5, 1 ];
  try {
    let e = Ms();
    if (e && (e.stderr || e).level >= 2) Pr.colors = [ 20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221 ];
  } catch (e) {}
  Pr.inspectOpts = Object.keys(process.env).filter(e => /^debug_/i.test(e)).reduce((e, t) => {
    let r = t.substring(6).toLowerCase().replace(/_([a-z])/g, (o, s) => s.toUpperCase()), n = process.env[t];
    if (/^(yes|on|true|enabled)$/i.test(n)) n = !0; else if (/^(no|off|false|disabled)$/i.test(n)) n = !1; else if (n === "null") n = null; else n = Number(n);
    return e[r] = n, e;
  }, {});
  function of() {
    return "colors" in Pr.inspectOpts ? Boolean(Pr.inspectOpts.colors) : Hs.isatty(process.stderr.fd);
  }
  function sf(e) {
    let {namespace: t, useColors: r} = this;
    if (r) {
      let n = this.color, o = "\x1b[3" + (n < 8 ? n : "8;5;" + n), s = `  ${o};1m${t} \x1b[0m`;
      e[0] = s + e[0].split(`\n`).join(`\n` + s), e.push(o + "m+" + kt.exports.humanize(this.diff) + "\x1b[0m");
    } else e[0] = af() + t + " " + e[0];
  }
  function af() {
    if (Pr.inspectOpts.hideDate) return "";
    return (new Date).toISOString() + " ";
  }
  function uf(...e) {
    return process.stderr.write(me.formatWithOptions(Pr.inspectOpts, ...e) + `\n`);
  }
  function cf(e) {
    if (e) process.env.DEBUG = e; else delete process.env.DEBUG;
  }
  function ff() {
    return process.env.DEBUG;
  }
  function lf(e) {
    e.inspectOpts = {};
    let t = Object.keys(Pr.inspectOpts);
    for (let r = 0; r < t.length; r++) e.inspectOpts[t[r]] = Pr.inspectOpts[t[r]];
  }
  kt.exports = Cr()(Pr);
  var {formatters: zs} = kt.exports;
  zs.o = function(e) {
    return this.inspectOpts.colors = this.useColors, me.inspect(e, this.inspectOpts).split(`\n`).map(t => t.trim()).join(" ");
  };
  zs.O = function(e) {
    return this.inspectOpts.colors = this.useColors, me.inspect(e, this.inspectOpts);
  };
});

var Oan = C(function(Bd, Fr) {
  if (typeof process > "u" || process.type === "renderer" || !1 || process.__nwjs) Fr.exports = Is(); else Fr.exports = Vs();
});

var Gs = C(function(Nd, Ws) {
  var at;
  Ws.exports = function() {
    if (!at) {
      try {
        at = Oan()("follow-redirects");
      } catch (e) {}
      if (typeof at !== "function") at = function() {};
    }
    at.apply(null, arguments);
  };
});

var Qs = C(function(Dd, $r) {
  var ct = Ne("url"), ut = ct.URL, Ef = Ne("http"), Rf = Ne("https"), qr = Ne("stream").Writable, Ir = Ne("assert"), Js = Gs();
  (function() {
    var t = typeof process < "u", r = typeof window < "u" && typeof document < "u", n = Ce(Error.captureStackTrace);
    if (!t && (r || !n)) console.warn("The follow-redirects package should be excluded from browser builds.");
  })();
  var kr = !1;
  try {
    Ir(new ut(""));
  } catch (e) {
    kr = e.code === "ERR_INVALID_URL";
  }
  var wf = [ "Authorization", "Proxy-Authorization", "Cookie" ], xf = [ "auth", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "hash" ], jr = [ "abort", "aborted", "connect", "error", "socket", "timeout" ], Mr = Object.create(null);
  jr.forEach(function(e) {
    Mr[e] = function(t, r, n) {
      this._redirectable.emit(e, t, r, n);
    };
  });
  var Br = ft("ERR_INVALID_URL", "Invalid URL", TypeError), Dr = ft("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed"), _f = ft("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", Dr), Sf = ft("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit"), Af = ft("ERR_STREAM_WRITE_AFTER_END", "write after end"), Of = qr.prototype.destroy || Xs;
  function Y(e, t) {
    if (qr.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, 
    this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, 
    this._requestBodyBuffers = [], t) this.on("response", t);
    var r = this;
    this._onNativeResponse = function(n) {
      try {
        r._processResponse(n);
      } catch (o) {
        r.emit("error", o instanceof Dr ? o : new Dr({
          cause: o
        }));
      }
    }, this._headerFilter = new RegExp("^(?:" + wf.concat(e.sensitiveHeaders).map(Lf).join("|") + ")$", "i"), 
    this._performRequest();
  }
  Y.prototype = Object.create(qr.prototype);
  Y.prototype.abort = function() {
    zr(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
  };
  Y.prototype.destroy = function(e) {
    return zr(this._currentRequest, e), Of.call(this, e), this;
  };
  Y.prototype.write = function(e, t, r) {
    if (this._ending) throw new Af;
    if (!Oe(e) && !Pf(e)) throw TypeError("data should be a string, Buffer or Uint8Array");
    if (Ce(t)) r = t, t = null;
    if (e.length === 0) {
      if (r) r();
      return;
    }
    if (this._requestBodyLength + e.length <= this._options.maxBodyLength) this._requestBodyLength += e.length, 
    this._requestBodyBuffers.push({
      data: e,
      encoding: t
    }), this._currentRequest.write(e, t, r); else this.emit("error", new Sf), this.abort();
  };
  Y.prototype.end = function(e, t, r) {
    if (Ce(e)) r = e, e = t = null; else if (Ce(t)) r = t, t = null;
    if (!e) this._ended = this._ending = !0, this._currentRequest.end(null, null, r); else {
      var n = this, o = this._currentRequest;
      this.write(e, t, function() {
        n._ended = !0, o.end(null, null, r);
      }), this._ending = !0;
    }
  };
  Y.prototype.setHeader = function(e, t) {
    this._options.headers[e] = t, this._currentRequest.setHeader(e, t);
  };
  Y.prototype.removeHeader = function(e) {
    delete this._options.headers[e], this._currentRequest.removeHeader(e);
  };
  Y.prototype.setTimeout = function(e, t) {
    var r = this;
    function n(i) {
      i.setTimeout(e), i.removeListener("timeout", i.destroy), i.addListener("timeout", i.destroy);
    }
    function o(i) {
      if (r._timeout) clearTimeout(r._timeout);
      r._timeout = setTimeout(function() {
        r.emit("timeout"), s();
      }, e), n(i);
    }
    function s() {
      if (r._timeout) clearTimeout(r._timeout), r._timeout = null;
      if (r.removeListener("abort", s), r.removeListener("error", s), r.removeListener("response", s), 
      r.removeListener("close", s), t) r.removeListener("timeout", t);
      if (!r.socket) r._currentRequest.removeListener("socket", o);
    }
    if (t) this.on("timeout", t);
    if (this.socket) o(this.socket); else this._currentRequest.once("socket", o);
    return this.on("socket", n), this.on("abort", s), this.on("error", s), this.on("response", s), 
    this.on("close", s), this;
  };
  [ "flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive" ].forEach(function(e) {
    Y.prototype[e] = function(t, r) {
      return this._currentRequest[e](t, r);
    };
  });
  [ "aborted", "connection", "socket" ].forEach(function(e) {
    Object.defineProperty(Y.prototype, e, {
      get: function() {
        return this._currentRequest[e];
      }
    });
  });
  Y.prototype._sanitizeOptions = function(e) {
    if (!e.headers) e.headers = {};
    if (!Tf(e.sensitiveHeaders)) e.sensitiveHeaders = [];
    if (e.host) {
      if (!e.hostname) e.hostname = e.host;
      delete e.host;
    }
    if (!e.pathname && e.path) {
      var t = e.path.indexOf("?");
      if (t < 0) e.pathname = e.path; else e.pathname = e.path.substring(0, t), e.search = e.path.substring(t);
    }
  };
  Y.prototype._performRequest = function() {
    var e = this._options.protocol, t = this._options.nativeProtocols[e];
    if (!t) throw TypeError("Unsupported protocol " + e);
    if (this._options.agents) {
      var r = e.slice(0, -1);
      this._options.agent = this._options.agents[r];
    }
    var n = this._currentRequest = t.request(this._options, this._onNativeResponse);
    n._redirectable = this;
    for (var o of jr) n.on(o, Mr[o]);
    if (this._currentUrl = /^\//.test(this._options.path) ? ct.format(this._options) : this._options.path, 
    this._isRedirect) {
      var s = 0, i = this, a = this._requestBodyBuffers;
      (function l(f) {
        if (n === i._currentRequest) {
          if (f) i.emit("error", f); else if (s < a.length) {
            var c = a[s++];
            if (!n.finished) n.write(c.data, c.encoding, l);
          } else if (i._ended) n.end();
        }
      })();
    }
  };
  Y.prototype._processResponse = function(e) {
    var t = e.statusCode;
    if (this._options.trackRedirects) this._redirects.push({
      url: this._currentUrl,
      headers: e.headers,
      statusCode: t
    });
    var r = e.headers.location;
    if (!r || this._options.followRedirects === !1 || t < 300 || t >= 400) {
      e.responseUrl = this._currentUrl, e.redirects = this._redirects, this.emit("response", e), 
      this._requestBodyBuffers = [];
      return;
    }
    if (zr(this._currentRequest), e.destroy(), ++this._redirectCount > this._options.maxRedirects) throw new _f;
    var n, o = this._options.beforeRedirect;
    if (o) n = Object.assign({
      Host: e.req.getHeader("host")
    }, this._options.headers);
    var s = this._options.method;
    if ((t === 301 || t === 302) && this._options.method === "POST" || t === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) this._options.method = "GET", 
    this._requestBodyBuffers = [], Lr(/^content-/i, this._options.headers);
    var i = Lr(/^host$/i, this._options.headers), a = Hr(this._currentUrl), l = i || a.host, f = /^\w+:/.test(r) ? this._currentUrl : ct.format(Object.assign(a, {
      host: l
    })), c = Cf(r, f);
    if (Js("redirecting to", c.href), this._isRedirect = !0, Ur(c, this._options), c.protocol !== a.protocol && c.protocol !== "https:" || c.host !== l && !vf(c.host, l)) Lr(this._headerFilter, this._options.headers);
    if (Ce(o)) {
      var p = {
        headers: e.headers,
        statusCode: t
      }, d = {
        url: f,
        method: s,
        headers: n
      };
      o(this._options, p, d), this._sanitizeOptions(this._options);
    }
    this._performRequest();
  };
  function Ks(e) {
    var t = {
      maxRedirects: 21,
      maxBodyLength: 10485760
    }, r = {};
    return Object.keys(e).forEach(function(n) {
      var o = n + ":", s = r[o] = e[n], i = t[n] = Object.create(s);
      function a(f, c, p) {
        if (Ff(f)) f = Ur(f); else if (Oe(f)) f = Ur(Hr(f)); else p = c, c = Ys(f), f = {
          protocol: o
        };
        if (Ce(c)) p = c, c = null;
        if (c = Object.assign({
          maxRedirects: t.maxRedirects,
          maxBodyLength: t.maxBodyLength
        }, f, c), c.nativeProtocols = r, !Oe(c.host) && !Oe(c.hostname)) c.hostname = "::1";
        return Ir.equal(c.protocol, o, "protocol mismatch"), Js("options", c), new Y(c, p);
      }
      function l(f, c, p) {
        var d = i.request(f, c, p);
        return d.end(), d;
      }
      Object.defineProperties(i, {
        request: {
          value: a,
          configurable: !0,
          enumerable: !0,
          writable: !0
        },
        get: {
          value: l,
          configurable: !0,
          enumerable: !0,
          writable: !0
        }
      });
    }), t;
  }
  function Xs() {}
  function Hr(e) {
    var t;
    if (kr) t = new ut(e); else if (t = Ys(ct.parse(e)), !Oe(t.protocol)) throw new Br({
      input: e
    });
    return t;
  }
  function Cf(e, t) {
    return kr ? new ut(e, t) : Hr(ct.resolve(t, e));
  }
  function Ys(e) {
    if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname)) throw new Br({
      input: e.href || e
    });
    if (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host)) throw new Br({
      input: e.href || e
    });
    return e;
  }
  function Ur(e, t) {
    var r = t || {};
    for (var n of xf) r[n] = e[n];
    if (r.hostname.startsWith("[")) r.hostname = r.hostname.slice(1, -1);
    if (r.port !== "") r.port = Number(r.port);
    return r.path = r.search ? r.pathname + r.search : r.pathname, r;
  }
  function Lr(e, t) {
    var r;
    for (var n in t) if (e.test(n)) r = t[n], delete t[n];
    return r === null || typeof r > "u" ? void 0 : String(r).trim();
  }
  function ft(e, t, r) {
    function n(o) {
      if (Ce(Error.captureStackTrace)) Error.captureStackTrace(this, this.constructor);
      Object.assign(this, o || {}), this.code = e, this.message = this.cause ? t + ": " + this.cause.message : t;
    }
    return n.prototype = Object.create((r || Error).prototype), Object.defineProperties(n.prototype, {
      constructor: {
        value: n,
        enumerable: !1
      },
      name: {
        value: "Error [" + e + "]",
        enumerable: !1
      }
    }), n;
  }
  function zr(e, t) {
    for (var r of jr) e.removeListener(r, Mr[r]);
    e.on("error", Xs), e.destroy(t);
  }
  function vf(e, t) {
    Ir(Oe(e) && Oe(t));
    var r = e.length - t.length - 1;
    return r > 0 && e[r] === "." && e.endsWith(t);
  }
  function Tf(e) {
    return e instanceof Array;
  }
  function Oe(e) {
    return typeof e === "string" || e instanceof String;
  }
  function Ce(e) {
    return typeof e === "function";
  }
  function Pf(e) {
    return typeof e === "object" && "length" in e;
  }
  function Ff(e) {
    return ut && e instanceof ut;
  }
  function Lf(e) {
    return e.replace(/[\]\\/()*+?.$]/g, "\\$&");
  }
  $r.exports = Ks({
    http: Ef,
    https: Rf
  });
  $r.exports.wrap = Ks;
});

var Rr = {};

Nr(Rr, {
  hasBrowserEnv: () => Er,
  hasStandardBrowserEnv: () => bc,
  hasStandardBrowserWebWorkerEnv: () => gc,
  navigator: () => gr,
  origin: () => Ec
});

function Ke(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}

var {toString: Ii} = Object.prototype, {getPrototypeOf: gt} = Object, {iterator: Et, toStringTag: cn} = Symbol, Rt = (e => t => {
  let r = Ii.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(Object.create(null)), ne = e => (e = e.toLowerCase(), t => Rt(t) === e), wt = e => t => typeof t === e, {isArray: Ue} = Array, De = wt("undefined");

function Xe(e) {
  return e !== null && !De(e) && e.constructor !== null && !De(e.constructor) && X(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}

var fn = ne("ArrayBuffer");

function ki(e) {
  let t;
  if (typeof ArrayBuffer < "u" && ArrayBuffer.isView) t = ArrayBuffer.isView(e); else t = e && e.buffer && fn(e.buffer);
  return t;
}

var ji = wt("string"), X = wt("function"), ln = wt("number"), Ye = e => e !== null && typeof e === "object", Mi = e => e === !0 || e === !1, bt = e => {
  if (Rt(e) !== "object") return !1;
  let t = gt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(cn in e) && !(Et in e);
}, Hi = e => {
  if (!Ye(e) || Xe(e)) return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch (t) {
    return !1;
  }
}, zi = ne("Date"), $i = ne("File"), Vi = e => !!(e && typeof e.uri < "u"), Wi = e => e && typeof e.getParts < "u", Gi = ne("Blob"), Ji = ne("FileList"), Ki = e => Ye(e) && X(e.pipe);

function Xi() {
  if (typeof globalThis < "u") return globalThis;
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  return {};
}

var sn = Xi(), an = typeof sn.FormData < "u" ? sn.FormData : void 0, Yi = e => {
  if (!e) return !1;
  if (an && e instanceof an) return !0;
  let t = gt(e);
  if (!t || t === Object.prototype) return !1;
  if (!X(e.append)) return !1;
  let r = Rt(e);
  return r === "formdata" || r === "object" && X(e.toString) && e.toString() === "[object FormData]";
}, Qi = ne("URLSearchParams"), [Zi, ea, ta, ra] = [ "ReadableStream", "Request", "Response", "Headers" ].map(ne), na = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Qe(e, t, {allOwnKeys: r = !1} = {}) {
  if (e === null || typeof e > "u") return;
  let n, o;
  if (typeof e !== "object") e = [ e ];
  if (Ue(e)) for (n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e); else {
    if (Xe(e)) return;
    let s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length, a;
    for (n = 0; n < i; n++) a = s[n], t.call(null, e[a], a, e);
  }
}

function pn(e, t) {
  if (Xe(e)) return null;
  t = t.toLowerCase();
  let r = Object.keys(e), n = r.length, o;
  while (n-- > 0) if (o = r[n], t === o.toLowerCase()) return o;
  return null;
}

var ge = (() => {
  if (typeof globalThis < "u") return globalThis;
  return typeof self < "u" ? self : typeof window < "u" ? window : global;
})(), dn = e => !De(e) && e !== ge;

function Gt() {
  let {caseless: e, skipUndefined: t} = dn(this) && this || {}, r = {}, n = (o, s) => {
    if (s === "__proto__" || s === "constructor" || s === "prototype") return;
    let i = e && pn(r, s) || s;
    if (bt(r[i]) && bt(o)) r[i] = Gt(r[i], o); else if (bt(o)) r[i] = Gt({}, o); else if (Ue(o)) r[i] = o.slice(); else if (!t || !De(o)) r[i] = o;
  };
  for (let o = 0, s = arguments.length; o < s; o++) arguments[o] && Qe(arguments[o], n);
  return r;
}

var oa = (e, t, r, {allOwnKeys: n} = {}) => (Qe(t, (o, s) => {
  if (r && X(o)) Object.defineProperty(e, s, {
    value: Ke(o, r),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }); else Object.defineProperty(e, s, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}, {
  allOwnKeys: n
}), e), sa = e => {
  if (e.charCodeAt(0) === 65279) e = e.slice(1);
  return e;
}, ia = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, aa = (e, t, r, n) => {
  let o, s, i, a = {};
  if (t = t || {}, e == null) return t;
  do {
    o = Object.getOwnPropertyNames(e), s = o.length;
    while (s-- > 0) if (i = o[s], (!n || n(i, e, t)) && !a[i]) t[i] = e[i], a[i] = !0;
    e = r !== !1 && gt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, ua = (e, t, r) => {
  if (e = String(e), r === void 0 || r > e.length) r = e.length;
  r -= t.length;
  let n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, ca = e => {
  if (!e) return null;
  if (Ue(e)) return e;
  let t = e.length;
  if (!ln(t)) return null;
  let r = Array(t);
  while (t-- > 0) r[t] = e[t];
  return r;
}, fa = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && gt(Uint8Array)), la = (e, t) => {
  let n = (e && e[Et]).call(e), o;
  while ((o = n.next()) && !o.done) {
    let s = o.value;
    t.call(e, s[0], s[1]);
  }
}, pa = (e, t) => {
  let r, n = [];
  while ((r = e.exec(t)) !== null) n.push(r);
  return n;
}, da = ne("HTMLFormElement"), ha = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, o) {
  return n.toUpperCase() + o;
}), un = (({hasOwnProperty: e}) => (t, r) => e.call(t, r))(Object.prototype), ma = ne("RegExp"), hn = (e, t) => {
  let r = Object.getOwnPropertyDescriptors(e), n = {};
  Qe(r, (o, s) => {
    let i;
    if ((i = t(o, s, e)) !== !1) n[s] = i || o;
  }), Object.defineProperties(e, n);
}, ya = e => {
  hn(e, (t, r) => {
    if (X(e) && [ "arguments", "caller", "callee" ].indexOf(r) !== -1) return !1;
    let n = e[r];
    if (!X(n)) return;
    if (t.enumerable = !1, "writable" in t) {
      t.writable = !1;
      return;
    }
    if (!t.set) t.set = () => {
      throw Error("Can not rewrite read-only method '" + r + "'");
    };
  });
}, ba = (e, t) => {
  let r = {}, n = o => {
    o.forEach(s => {
      r[s] = !0;
    });
  };
  return Ue(e) ? n(e) : n(String(e).split(t)), r;
}, ga = () => {}, Ea = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;

function Ra(e) {
  return !!(e && X(e.append) && e[cn] === "FormData" && e[Et]);
}

var xa = e => {
  let t = [ , , , , , , , , , ,  ], r = (n, o) => {
    if (Ye(n)) {
      if (t.indexOf(n) >= 0) return;
      if (Xe(n)) return n;
      if (!("toJSON" in n)) {
        t[o] = n;
        let s = Ue(n) ? [] : {};
        return Qe(n, (i, a) => {
          let l = r(i, o + 1);
          !De(l) && (s[a] = l);
        }), t[o] = void 0, s;
      }
    }
    return n;
  };
  return r(e, 0);
}, _a = ne("AsyncFunction"), Sa = e => e && (Ye(e) || X(e)) && X(e.then) && X(e.catch), mn = ((e, t) => {
  if (e) return setImmediate;
  return t ? ((r, n) => (ge.addEventListener("message", ({source: o, data: s}) => {
    if (o === ge && s === r) n.length && n.shift()();
  }, !1), o => {
    n.push(o), ge.postMessage(r, "*");
  }))(`axios@${Math.random()}`, []) : r => setTimeout(r);
})(typeof setImmediate === "function", X(ge.postMessage)), Aa = typeof queueMicrotask < "u" ? queueMicrotask.bind(ge) : typeof process < "u" && process.nextTick || mn, Oa = e => e != null && X(e[Et]), u = {
  isArray: Ue,
  isArrayBuffer: fn,
  isBuffer: Xe,
  isFormData: Yi,
  isArrayBufferView: ki,
  isString: ji,
  isNumber: ln,
  isBoolean: Mi,
  isObject: Ye,
  isPlainObject: bt,
  isEmptyObject: Hi,
  isReadableStream: Zi,
  isRequest: ea,
  isResponse: ta,
  isHeaders: ra,
  isUndefined: De,
  isDate: zi,
  isFile: $i,
  isReactNativeBlob: Vi,
  isReactNative: Wi,
  isBlob: Gi,
  isRegExp: ma,
  isFunction: X,
  isStream: Ki,
  isURLSearchParams: Qi,
  isTypedArray: fa,
  isFileList: Ji,
  forEach: Qe,
  merge: Gt,
  extend: oa,
  trim: na,
  stripBOM: sa,
  inherits: ia,
  toFlatObject: aa,
  kindOf: Rt,
  kindOfTest: ne,
  endsWith: ua,
  toArray: ca,
  forEachEntry: la,
  matchAll: pa,
  isHTMLForm: da,
  hasOwnProperty: un,
  hasOwnProp: un,
  reduceDescriptors: hn,
  freezeMethods: ya,
  toObjectSet: ba,
  toCamelCase: ha,
  noop: ga,
  toFiniteNumber: Ea,
  findKey: pn,
  global: ge,
  isContextDefined: dn,
  isSpecCompliantForm: Ra,
  toJSONObject: xa,
  isAsyncFn: _a,
  isThenable: Sa,
  setImmediate: mn,
  asap: Aa,
  isIterable: Oa
};

class W extends Error {
  static from(e, t, r, n, o, s) {
    let i = new W(e.message, t || e.code, r, n, o);
    if (i.cause = e, i.name = e.name, e.status != null && i.status == null) i.status = e.status;
    return s && Object.assign(i, s), i;
  }
  constructor(e, t, r, n, o) {
    super(e);
    if (Object.defineProperty(this, "message", {
      value: e,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), r && (this.config = r), 
    n && (this.request = n), o) this.response = o, this.status = o.status;
  }
  toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: u.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
}

W.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";

W.ERR_BAD_OPTION = "ERR_BAD_OPTION";

W.ECONNABORTED = "ECONNABORTED";

W.ETIMEDOUT = "ETIMEDOUT";

W.ERR_NETWORK = "ERR_NETWORK";

W.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";

W.ERR_DEPRECATED = "ERR_DEPRECATED";

W.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";

W.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";

W.ERR_CANCELED = "ERR_CANCELED";

W.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";

W.ERR_INVALID_URL = "ERR_INVALID_URL";

W.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";

var y = W;

var ws = we(Rs(), 1), Ft = ws.default;

function mr(e) {
  return u.isPlainObject(e) || u.isArray(e);
}

function xs(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}

function hr(e, t, r) {
  if (!e) return t;
  return e.concat(t).map(function(o, s) {
    return o = xs(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "");
}

function fc(e) {
  return u.isArray(e) && !e.some(mr);
}

var lc = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});

function pc(e, t, r) {
  if (!u.isObject(e)) throw TypeError("target must be an object");
  t = t || new (Ft || FormData), r = u.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, E) {
    return !u.isUndefined(E[h]);
  });
  let n = r.metaTokens, o = r.visitor || p, s = r.dots, i = r.indexes, a = r.Blob || typeof Blob < "u" && Blob, l = r.maxDepth === void 0 ? 100 : r.maxDepth, f = a && u.isSpecCompliantForm(t);
  if (!u.isFunction(o)) throw TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (u.isDate(g)) return g.toISOString();
    if (u.isBoolean(g)) return g.toString();
    if (!f && u.isBlob(g)) throw new y("Blob is not supported. Use a Buffer instead.");
    if (u.isArrayBuffer(g) || u.isTypedArray(g)) return f && typeof Blob === "function" ? new Blob([ g ]) : Buffer.from(g);
    return g;
  }
  function p(g, h, E) {
    let N = g;
    if (u.isReactNative(t) && u.isReactNativeBlob(g)) return t.append(hr(E, h, s), c(g)), 
    !1;
    if (g && !E && typeof g === "object") {
      if (u.endsWith(h, "{}")) h = n ? h : h.slice(0, -2), g = JSON.stringify(g); else if (u.isArray(g) && fc(g) || (u.isFileList(g) || u.endsWith(h, "[]")) && (N = u.toArray(g))) return h = xs(h), 
      N.forEach(function(x, k) {
        !(u.isUndefined(x) || x === null) && t.append(i === !0 ? hr([ h ], k, s) : i === null ? h : h + "[]", c(x));
      }), !1;
    }
    if (mr(g)) return !0;
    return t.append(hr(E, h, s), c(g)), !1;
  }
  let d = [], b = Object.assign(lc, {
    defaultVisitor: p,
    convertValue: c,
    isVisitable: mr
  });
  function m(g, h, E = 0) {
    if (u.isUndefined(g)) return;
    if (E > l) throw new y("Object is too deeply nested (" + E + " levels). Max depth: " + l, y.ERR_FORM_DATA_DEPTH_EXCEEDED);
    if (d.indexOf(g) !== -1) throw Error("Circular reference detected in " + h.join("."));
    d.push(g), u.forEach(g, function(v, x) {
      if ((!(u.isUndefined(v) || v === null) && o.call(t, v, u.isString(x) ? x.trim() : x, h, b)) === !0) m(v, h ? h.concat(x) : [ x ], E + 1);
    }), d.pop();
  }
  if (!u.isObject(e)) throw TypeError("data must be an object");
  return m(e), t;
}

var de = pc;

function _s(e) {
  let t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(n) {
    return t[n];
  });
}

function Ss(e, t) {
  this._pairs = [], e && de(e, this, t);
}

var As = Ss.prototype;

As.append = function(t, r) {
  this._pairs.push([ t, r ]);
};

As.toString = function(t) {
  let r = t ? function(n) {
    return t.call(this, n, _s);
  } : _s;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};

var Os = Ss;

function dc(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}

function xe(e, t, r) {
  if (!t) return e;
  let n = r && r.encode || dc, o = u.isFunction(r) ? {
    serialize: r
  } : r, s = o && o.serialize, i;
  if (s) i = s(t, o); else i = u.isURLSearchParams(t) ? t.toString() : new Os(t, o).toString(n);
  if (i) {
    let a = e.indexOf("#");
    if (a !== -1) e = e.slice(0, a);
    e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}

class Cs {
  constructor() {
    this.handlers = [];
  }
  use(e, t, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(e) {
    if (this.handlers[e]) this.handlers[e] = null;
  }
  clear() {
    if (this.handlers) this.handlers = [];
  }
  forEach(e) {
    u.forEach(this.handlers, function(r) {
      if (r !== null) e(r);
    });
  }
}

var yr = Cs;

var he = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
};

import mc from "crypto";

import hc from "url";

var vs = hc.URLSearchParams;

var br = "abcdefghijklmnopqrstuvwxyz", Ts = "0123456789", Ps = {
  DIGIT: Ts,
  ALPHA: br,
  ALPHA_DIGIT: br + br.toUpperCase() + Ts
}, yc = (e = 16, t = Ps.ALPHA_DIGIT) => {
  let r = "", {length: n} = t, o = new Uint32Array(e);
  mc.randomFillSync(o);
  for (let s = 0; s < e; s++) r += t[o[s] % n];
  return r;
}, Fs = {
  isNode: !0,
  classes: {
    URLSearchParams: vs,
    FormData: Ft,
    Blob: typeof Blob < "u" && Blob || null
  },
  ALPHABET: Ps,
  generateString: yc,
  protocols: [ "http", "https", "file", "data" ]
};

var Er = typeof window < "u" && typeof document < "u", gr = typeof navigator === "object" && navigator || void 0, bc = Er && (!gr || [ "ReactNative", "NativeScript", "NS" ].indexOf(gr.product) < 0), gc = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function")(), Ec = Er && window.location.href || "http://localhost";

var A = {
  ...Rr,
  ...Fs
};

function wr(e, t) {
  return de(e, new A.classes.URLSearchParams, {
    visitor: function(r, n, o, s) {
      if (A.isNode && u.isBuffer(r)) return this.append(n, r.toString("base64")), !1;
      return s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}

function Rc(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0]);
}

function wc(e) {
  let t = {}, r = Object.keys(e), n, o = r.length, s;
  for (n = 0; n < o; n++) s = r[n], t[s] = e[s];
  return t;
}

function xc(e) {
  function t(r, n, o, s) {
    let i = r[s++];
    if (i === "__proto__") return !0;
    let a = Number.isFinite(+i), l = s >= r.length;
    if (i = !i && u.isArray(o) ? o.length : i, l) {
      if (u.hasOwnProp(o, i)) o[i] = u.isArray(o[i]) ? o[i].concat(n) : [ o[i], n ]; else o[i] = n;
      return !a;
    }
    if (!o[i] || !u.isObject(o[i])) o[i] = [];
    if (t(r, n, o[i], s) && u.isArray(o[i])) o[i] = wc(o[i]);
    return !a;
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    let r = {};
    return u.forEachEntry(e, (n, o) => {
      t(Rc(n), o, r, 0);
    }), r;
  }
  return null;
}

var Lt = xc;

var Me = (e, t) => e != null && u.hasOwnProp(e, t) ? e[t] : void 0;

function Sc(e, t, r) {
  if (u.isString(e)) try {
    return (t || JSON.parse)(e), u.trim(e);
  } catch (n) {
    if (n.name !== "SyntaxError") throw n;
  }
  return (r || JSON.stringify)(e);
}

var xr = {
  transitional: he,
  adapter: [ "xhr", "http", "fetch" ],
  transformRequest: [ function(t, r) {
    let n = r.getContentType() || "", o = n.indexOf("application/json") > -1, s = u.isObject(t);
    if (s && u.isHTMLForm(t)) t = new FormData(t);
    if (u.isFormData(t)) return o ? JSON.stringify(Lt(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t)) return t;
    if (u.isArrayBufferView(t)) return t.buffer;
    if (u.isURLSearchParams(t)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), 
    t.toString();
    let a;
    if (s) {
      let l = Me(this, "formSerializer");
      if (n.indexOf("application/x-www-form-urlencoded") > -1) return wr(t, l).toString();
      if ((a = u.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        let f = Me(this, "env"), c = f && f.FormData;
        return de(a ? {
          "files[]": t
        } : t, c && new c, l);
      }
    }
    if (s || o) return r.setContentType("application/json", !1), Sc(t);
    return t;
  } ],
  transformResponse: [ function(t) {
    let r = Me(this, "transitional") || xr.transitional, n = r && r.forcedJSONParsing, o = Me(this, "responseType"), s = o === "json";
    if (u.isResponse(t) || u.isReadableStream(t)) return t;
    if (t && u.isString(t) && (n && !o || s)) {
      let a = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t, Me(this, "parseReviver"));
      } catch (l) {
        if (a) {
          if (l.name === "SyntaxError") throw y.from(l, y.ERR_BAD_RESPONSE, this, null, Me(this, "response"));
          throw l;
        }
      }
    }
    return t;
  } ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: A.classes.FormData,
    Blob: A.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};

u.forEach([ "delete", "get", "head", "post", "put", "patch" ], e => {
  xr.headers[e] = {};
});

var He = xr;

var Ac = u.toObjectSet([ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ]), Ls = e => {
  let t = {}, r, n, o;
  return e && e.split(`\n`).forEach(function(i) {
    if (o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), 
    !r || t[r] && Ac[r]) return;
    if (r === "set-cookie") if (t[r]) t[r].push(n); else t[r] = [ n ]; else t[r] = t[r] ? t[r] + ", " + n : n;
  }), t;
};

var Bs = Symbol("internals"), Oc = /[^\x09\x20-\x7E\x80-\xFF]/g;

function Cc(e) {
  let t = 0, r = e.length;
  while (t < r) {
    let n = e.charCodeAt(t);
    if (n !== 9 && n !== 32) break;
    t += 1;
  }
  while (r > t) {
    let n = e.charCodeAt(r - 1);
    if (n !== 9 && n !== 32) break;
    r -= 1;
  }
  return t === 0 && r === e.length ? e : e.slice(t, r);
}

function nt(e) {
  return e && String(e).trim().toLowerCase();
}

function vc(e) {
  return Cc(e.replace(Oc, ""));
}

function Bt(e) {
  if (e === !1 || e == null) return e;
  return u.isArray(e) ? e.map(Bt) : vc(String(e));
}

function Tc(e) {
  let t = Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, n;
  while (n = r.exec(e)) t[n[1]] = n[2];
  return t;
}

var Pc = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function _r(e, t, r, n, o) {
  if (u.isFunction(n)) return n.call(this, t, r);
  if (o) t = r;
  if (!u.isString(t)) return;
  if (u.isString(n)) return t.indexOf(n) !== -1;
  if (u.isRegExp(n)) return n.test(t);
}

function Fc(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}

function Lc(e, t) {
  let r = u.toCamelCase(" " + t);
  [ "get", "set", "has" ].forEach(n => {
    Object.defineProperty(e, n + r, {
      value: function(o, s, i) {
        return this[n].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}

class ot {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, r) {
    let n = this;
    function o(i, a, l) {
      let f = nt(a);
      if (!f) throw Error("header name must be a non-empty string");
      let c = u.findKey(n, f);
      if (!c || n[c] === void 0 || l === !0 || l === void 0 && n[c] !== !1) n[c || a] = Bt(i);
    }
    let s = (i, a) => u.forEach(i, (l, f) => o(l, f, a));
    if (u.isPlainObject(e) || e instanceof this.constructor) s(e, t); else if (u.isString(e) && (e = e.trim()) && !Pc(e)) s(Ls(e), t); else if (u.isObject(e) && u.isIterable(e)) {
      let i = {}, a, l;
      for (let f of e) {
        if (!u.isArray(f)) throw TypeError("Object iterator must return a key-value pair");
        i[l = f[0]] = (a = i[l]) ? u.isArray(a) ? [ ...a, f[1] ] : [ a, f[1] ] : f[1];
      }
      s(i, t);
    } else e != null && o(t, e, r);
    return this;
  }
  get(e, t) {
    if (e = nt(e), e) {
      let r = u.findKey(this, e);
      if (r) {
        let n = this[r];
        if (!t) return n;
        if (t === !0) return Tc(n);
        if (u.isFunction(t)) return t.call(this, n, r);
        if (u.isRegExp(t)) return t.exec(n);
        throw TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = nt(e), e) {
      let r = u.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!t || _r(this, this[r], r, t)));
    }
    return !1;
  }
  delete(e, t) {
    let r = this, n = !1;
    function o(s) {
      if (s = nt(s), s) {
        let i = u.findKey(r, s);
        if (i && (!t || _r(r, r[i], i, t))) delete r[i], n = !0;
      }
    }
    if (u.isArray(e)) e.forEach(o); else o(e);
    return n;
  }
  clear(e) {
    let t = Object.keys(this), r = t.length, n = !1;
    while (r--) {
      let o = t[r];
      if (!e || _r(this, this[o], o, e, !0)) delete this[o], n = !0;
    }
    return n;
  }
  normalize(e) {
    let t = this, r = {};
    return u.forEach(this, (n, o) => {
      let s = u.findKey(r, o);
      if (s) {
        t[s] = Bt(n), delete t[o];
        return;
      }
      let i = e ? Fc(o) : String(o).trim();
      if (i !== o) delete t[o];
      t[i] = Bt(n), r[i] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    let t = Object.create(null);
    return u.forEach(this, (r, n) => {
      r != null && r !== !1 && (t[n] = e && u.isArray(r) ? r.join(", ") : r);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`\n`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    let r = new this(e);
    return t.forEach(n => r.set(n)), r;
  }
  static accessor(e) {
    let r = (this[Bs] = this[Bs] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function o(s) {
      let i = nt(s);
      if (!r[i]) Lc(n, s), r[i] = !0;
    }
    return u.isArray(e) ? e.forEach(o) : o(e), this;
  }
}

ot.accessor([ "Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization" ]);

u.reduceDescriptors(ot.prototype, ({value: e}, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});

u.freezeMethods(ot);

var F = ot;

function st(e, t) {
  let r = this || He, n = t || r, o = F.from(n.headers), s = n.data;
  return u.forEach(e, function(a) {
    s = a.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}

function it(e) {
  return !!(e && e.__CANCEL__);
}

class Ns extends y {
  constructor(e, t, r) {
    super(e == null ? "canceled" : e, y.ERR_CANCELED, t, r);
    this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}

var Q = Ns;

function ue(e, t, r) {
  let n = r.config.validateStatus;
  if (!r.status || !n || n(r.status)) e(r); else t(new y("Request failed with status code " + r.status, [ y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE ][Math.floor(r.status / 100) - 4], r.config, r.request, r));
}

function Sr(e) {
  if (typeof e !== "string") return !1;
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}

function Ar(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}

function _e(e, t, r) {
  let n = !Sr(t);
  if (e && (n || r === !1)) return Ar(e, t);
  return t;
}

var Bc = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

function Nc(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}

function Ds(e) {
  var t = (typeof e === "string" ? Nc(e) : e) || {}, {protocol: r, host: n, port: o} = t;
  if (typeof n !== "string" || !n || typeof r !== "string") return "";
  if (r = r.split(":", 1)[0], n = n.replace(/:\d*$/, ""), o = parseInt(o) || Bc[r] || 0, 
  !Dc(n, o)) return "";
  var s = Or(r + "_proxy") || Or("all_proxy");
  if (s && s.indexOf("://") === -1) s = r + "://" + s;
  return s;
}

function Dc(e, t) {
  var r = Or("no_proxy").toLowerCase();
  if (!r) return !0;
  if (r === "*") return !1;
  return r.split(/[,\s]/).every(function(n) {
    if (!n) return !0;
    var o = n.match(/^(.+):(\d+)$/), s = o ? o[1] : n, i = o ? parseInt(o[2]) : 0;
    if (i && i !== t) return !0;
    if (!/^[.*]/.test(s)) return e !== s;
    if (s.charAt(0) === "*") s = s.slice(1);
    return !e.endsWith(s);
  });
}

function Or(e) {
  return process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || "";
}

var Ri = we(Qs(), 1);

import Xf from "http";

import Yf from "https";

import gi from "http2";

import Ei from "util";

import { resolve as li } from "path";

import ye from "zlib";

var ve = "1.15.2";

function lt(e) {
  let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}

var Bf = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;

function Vr(e, t, r) {
  let n = r && r.Blob || A.classes.Blob, o = lt(e);
  if (t === void 0 && n) t = !0;
  if (o === "data") {
    e = o.length ? e.slice(o.length + 1) : e;
    let s = Bf.exec(e);
    if (!s) throw new y("Invalid URL", y.ERR_INVALID_URL);
    let i = s[1], a = s[2], l = s[3], f = Buffer.from(decodeURIComponent(l), a ? "base64" : "utf8");
    if (t) {
      if (!n) throw new y("Blob is not supported", y.ERR_NOT_SUPPORT);
      return new n([ f ], {
        type: i
      });
    }
    return f;
  }
  throw new y("Unsupported protocol " + o, y.ERR_NOT_SUPPORT);
}

import se from "stream";

import Nf from "stream";

var Wr = Symbol("internals");

class Zs extends Nf.Transform {
  constructor(e) {
    e = u.toFlatObject(e, {
      maxRate: 0,
      chunkSize: 65536,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (r, n) => !u.isUndefined(n[r]));
    super({
      readableHighWaterMark: e.chunkSize
    });
    let t = this[Wr] = {
      timeWindow: e.timeWindow,
      chunkSize: e.chunkSize,
      maxRate: e.maxRate,
      minChunkSize: e.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    this.on("newListener", r => {
      if (r === "progress") {
        if (!t.isCaptured) t.isCaptured = !0;
      }
    });
  }
  _read(e) {
    let t = this[Wr];
    if (t.onReadCallback) t.onReadCallback();
    return super._read(e);
  }
  _transform(e, t, r) {
    let n = this[Wr], o = n.maxRate, s = this.readableHighWaterMark, i = n.timeWindow, a = 1e3 / i, l = o / a, f = n.minChunkSize !== !1 ? Math.max(n.minChunkSize, l * .01) : 0, c = (d, b) => {
      let m = Buffer.byteLength(d);
      if (n.bytesSeen += m, n.bytes += m, n.isCaptured && this.emit("progress", n.bytesSeen), 
      this.push(d)) process.nextTick(b); else n.onReadCallback = () => {
        n.onReadCallback = null, process.nextTick(b);
      };
    }, p = (d, b) => {
      let m = Buffer.byteLength(d), g = null, h = s, E, N = 0;
      if (o) {
        let v = Date.now();
        if (!n.ts || (N = v - n.ts) >= i) n.ts = v, E = l - n.bytes, n.bytes = E < 0 ? -E : 0, 
        N = 0;
        E = l - n.bytes;
      }
      if (o) {
        if (E <= 0) return setTimeout(() => {
          b(null, d);
        }, i - N);
        if (E < h) h = E;
      }
      if (h && m > h && m - h > f) g = d.subarray(h), d = d.subarray(0, h);
      c(d, g ? () => {
        process.nextTick(b, null, g);
      } : b);
    };
    p(e, function d(b, m) {
      if (b) return r(b);
      if (m) p(m, d); else r(null);
    });
  }
}

var Gr = Zs;

import { EventEmitter as Qf } from "events";

import Uf from "util";

import { Readable as qf } from "stream";

var {asyncIterator: ei} = Symbol, Df = async function*(e) {
  if (e.stream) yield* e.stream(); else if (e.arrayBuffer) yield await e.arrayBuffer(); else if (e[ei]) yield* e[ei](); else yield e;
}, jt = Df;

var If = A.ALPHABET.ALPHA_DIGIT + "-_", pt = typeof TextEncoder === "function" ? new TextEncoder : new Uf.TextEncoder, Te = `\r\n`, kf = pt.encode(Te), jf = 2;

class ti {
  constructor(e, t) {
    let {escapeName: r} = this.constructor, n = u.isString(t), o = `Content-Disposition: form-data; name="${r(e)}"${!n && t.name ? `; filename="${r(t.name)}"` : ""}${Te}`;
    if (n) t = pt.encode(String(t).replace(/\r?\n|\r\n?/g, Te)); else {
      let s = String(t.type || "application/octet-stream").replace(/[\r\n]/g, "");
      o += `Content-Type: ${s}${Te}`;
    }
    this.headers = pt.encode(o + Te), this.contentLength = n ? t.byteLength : t.size, 
    this.size = this.headers.byteLength + this.contentLength + jf, this.name = e, this.value = t;
  }
  async* encode() {
    yield this.headers;
    let {value: e} = this;
    if (u.isTypedArray(e)) yield e; else yield* jt(e);
    yield kf;
  }
  static escapeName(e) {
    return String(e).replace(/[\r\n"]/g, t => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    }[t]));
  }
}

var Mf = (e, t, r) => {
  let {tag: n = "form-data-boundary", size: o = 25, boundary: s = n + "-" + A.generateString(o, If)} = r || {};
  if (!u.isFormData(e)) throw TypeError("FormData instance required");
  if (s.length < 1 || s.length > 70) throw Error("boundary must be 10-70 characters long");
  let i = pt.encode("--" + s + Te), a = pt.encode("--" + s + "--" + Te), l = a.byteLength, f = Array.from(e.entries()).map(([p, d]) => {
    let b = new ti(p, d);
    return l += b.size, b;
  });
  l += i.byteLength * f.length, l = u.toFiniteNumber(l);
  let c = {
    "Content-Type": `multipart/form-data; boundary=${s}`
  };
  if (Number.isFinite(l)) c["Content-Length"] = l;
  return t && t(c), qf.from(async function*() {
    for (let p of f) yield i, yield* p.encode();
    yield a;
  }());
}, ri = Mf;

import Hf from "stream";

class ni extends Hf.Transform {
  __transform(e, t, r) {
    this.push(e), r();
  }
  _transform(e, t, r) {
    if (e.length !== 0) {
      if (this._transform = this.__transform, e[0] !== 120) {
        let n = Buffer.alloc(2);
        n[0] = 120, n[1] = 156, this.push(n, t);
      }
    }
    this.__transform(e, t, r);
  }
}

var oi = ni;

var zf = (e, t) => u.isAsyncFn(e) ? function(...r) {
  let n = r.pop();
  e.apply(this, r).then(o => {
    try {
      t ? n(null, ...t(o)) : n(null, o);
    } catch (s) {
      n(s);
    }
  }, n);
} : e, si = zf;

var $f = new Set([ "localhost" ]), ui = e => {
  let t = e.split(".");
  if (t.length !== 4) return !1;
  if (t[0] !== "127") return !1;
  return t.every(r => /^\d+$/.test(r) && Number(r) >= 0 && Number(r) <= 255);
}, Vf = e => {
  if (e === "::1") return !0;
  let t = e.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
  if (t) return ui(t[1]);
  let r = e.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
  if (r) {
    let o = parseInt(r[1], 16);
    return o >= 32512 && o <= 32767;
  }
  let n = e.split(":");
  if (n.length === 8) {
    for (let o = 0; o < 7; o++) if (!/^0+$/.test(n[o])) return !1;
    return /^0*1$/.test(n[7]);
  }
  return !1;
}, ii = e => {
  if (!e) return !1;
  if ($f.has(e)) return !0;
  if (ui(e)) return !0;
  return Vf(e);
}, Wf = {
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
  ftp: 21
}, Gf = e => {
  let t = e, r = 0;
  if (t.charAt(0) === "[") {
    let s = t.indexOf("]");
    if (s !== -1) {
      let i = t.slice(1, s), a = t.slice(s + 1);
      if (a.charAt(0) === ":" && /^\d+$/.test(a.slice(1))) r = Number.parseInt(a.slice(1), 10);
      return [ i, r ];
    }
  }
  let n = t.indexOf(":"), o = t.lastIndexOf(":");
  if (n !== -1 && n === o && /^\d+$/.test(t.slice(o + 1))) r = Number.parseInt(t.slice(o + 1), 10), 
  t = t.slice(0, o);
  return [ t, r ];
}, ai = e => {
  if (!e) return e;
  if (e.charAt(0) === "[" && e.charAt(e.length - 1) === "]") e = e.slice(1, -1);
  return e.replace(/\.+$/, "");
};

function Jr(e) {
  let t;
  try {
    t = new URL(e);
  } catch (s) {
    return !1;
  }
  let r = (process.env.no_proxy || process.env.NO_PROXY || "").toLowerCase();
  if (!r) return !1;
  if (r === "*") return !0;
  let n = Number.parseInt(t.port, 10) || Wf[t.protocol.split(":", 1)[0]] || 0, o = ai(t.hostname.toLowerCase());
  return r.split(/[\s,]+/).some(s => {
    if (!s) return !1;
    let [i, a] = Gf(s);
    if (i = ai(i), !i) return !1;
    if (a && a !== n) return !1;
    if (i.charAt(0) === "*") i = i.slice(1);
    if (i.charAt(0) === ".") return o.endsWith(i);
    return o === i || ii(o) && ii(i);
  });
}

function Jf(e, t) {
  e = e || 10;
  let r = Array(e), n = Array(e), o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    let f = Date.now(), c = n[s];
    if (!i) i = f;
    r[o] = l, n[o] = f;
    let p = s, d = 0;
    while (p !== o) d += r[p++], p = p % e;
    if (o = (o + 1) % e, o === s) s = (s + 1) % e;
    if (f - i < t) return;
    let b = c && f - c;
    return b ? Math.round(d * 1e3 / b) : void 0;
  };
}

var ci = Jf;

function Kf(e, t) {
  let r = 0, n = 1e3 / t, o, s, i = (f, c = Date.now()) => {
    if (r = c, o = null, s) clearTimeout(s), s = null;
    e(...f);
  };
  return [ (...f) => {
    let c = Date.now(), p = c - r;
    if (p >= n) i(f, c); else if (o = f, !s) s = setTimeout(() => {
      s = null, i(o);
    }, n - p);
  }, () => o && i(o) ];
}

var fi = Kf;

var le = (e, t, r = 3) => {
  let n = 0, o = ci(50, 250);
  return fi(s => {
    let i = s.loaded, a = s.lengthComputable ? s.total : void 0, l = a != null ? Math.min(i, a) : i, f = Math.max(0, l - n), c = o(f);
    n = Math.max(n, l);
    let p = {
      loaded: l,
      total: a,
      progress: a ? l / a : void 0,
      bytes: f,
      rate: c ? c : void 0,
      estimated: c && a ? (a - l) / c : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, r);
}, We = (e, t) => {
  let r = e != null;
  return [ n => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1] ];
}, Ge = e => (...t) => u.asap(() => e(...t));

function Kr(e) {
  if (!e || typeof e !== "string") return 0;
  if (!e.startsWith("data:")) return 0;
  let t = e.indexOf(",");
  if (t < 0) return 0;
  let r = e.slice(5, t), n = e.slice(t + 1);
  if (/;base64/i.test(r)) {
    let {length: s, length: i} = n;
    for (let d = 0; d < i; d++) if (n.charCodeAt(d) === 37 && d + 2 < i) {
      let b = n.charCodeAt(d + 1), m = n.charCodeAt(d + 2);
      if ((b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102) && (m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102)) s -= 2, 
      d += 2;
    }
    let a = 0, l = i - 1, f = d => d >= 2 && n.charCodeAt(d - 2) === 37 && n.charCodeAt(d - 1) === 51 && (n.charCodeAt(d) === 68 || n.charCodeAt(d) === 100);
    if (l >= 0) {
      if (n.charCodeAt(l) === 61) a++, l--; else if (f(l)) a++, l -= 3;
    }
    if (a === 1 && l >= 0) {
      if (n.charCodeAt(l) === 61) a++; else if (f(l)) a++;
    }
    let p = Math.floor(s / 4) * 3 - (a || 0);
    return p > 0 ? p : 0;
  }
  return Buffer.byteLength(n, "utf8");
}

var pi = {
  flush: ye.constants.Z_SYNC_FLUSH,
  finishFlush: ye.constants.Z_SYNC_FLUSH
}, Zf = {
  flush: ye.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: ye.constants.BROTLI_OPERATION_FLUSH
}, di = u.isFunction(ye.createBrotliDecompress), {http: el, https: tl} = Ri.default, rl = /https:?/, hi = Symbol("axios.http.socketListener"), Mt = Symbol("axios.http.currentReq"), mi = A.protocols.map(e => e + ":"), yi = (e, [t, r]) => (e.on("end", r).on("error", r), 
t);

class wi {
  constructor() {
    this.sessions = Object.create(null);
  }
  getSession(e, t) {
    t = Object.assign({
      sessionTimeout: 1e3
    }, t);
    let r = this.sessions[e];
    if (r) {
      let f = r.length;
      for (let c = 0; c < f; c++) {
        let [p, d] = r[c];
        if (!p.destroyed && !p.closed && Ei.isDeepStrictEqual(d, t)) return p;
      }
    }
    let n = gi.connect(e, t), o, s = () => {
      if (o) return;
      o = !0;
      let f = r, c = f.length, p = c;
      while (p--) if (f[p][0] === n) {
        if (c === 1) delete this.sessions[e]; else f.splice(p, 1);
        if (!n.closed) n.close();
        return;
      }
    }, i = n.request, {sessionTimeout: a} = t;
    if (a != null) {
      let f, c = 0;
      n.request = function() {
        let p = i.apply(this, arguments);
        if (c++, f) clearTimeout(f), f = null;
        return p.once("close", () => {
          if (! --c) f = setTimeout(() => {
            f = null, s();
          }, a);
        }), p;
      };
    }
    n.once("close", s);
    let l = [ n, t ];
    return r ? r.push(l) : r = this.sessions[e] = [ l ], n;
  }
}

var nl = new wi;

function ol(e, t) {
  if (e.beforeRedirects.proxy) e.beforeRedirects.proxy(e);
  if (e.beforeRedirects.config) e.beforeRedirects.config(e, t);
}

function xi(e, t, r) {
  let n = t;
  if (!n && n !== !1) {
    let o = Ds(r);
    if (o) {
      if (!Jr(r)) n = new URL(o);
    }
  }
  if (n) {
    if (n.username) n.auth = (n.username || "") + ":" + (n.password || "");
    if (n.auth) {
      if (Boolean(n.auth.username || n.auth.password)) n.auth = (n.auth.username || "") + ":" + (n.auth.password || ""); else if (typeof n.auth === "object") throw new y("Invalid proxy authorization", y.ERR_BAD_OPTION, {
        proxy: n
      });
      let i = Buffer.from(n.auth, "utf8").toString("base64");
      e.headers["Proxy-Authorization"] = "Basic " + i;
    }
    e.headers.host = e.hostname + (e.port ? ":" + e.port : "");
    let o = n.hostname || n.host;
    if (e.hostname = o, e.host = o, e.port = n.port, e.path = r, n.protocol) e.protocol = n.protocol.includes(":") ? n.protocol : `${n.protocol}:`;
  }
  e.beforeRedirects.proxy = function(s) {
    xi(s, t, s.href);
  };
}

var sl = typeof process < "u" && u.kindOf(process) === "process", il = e => new Promise((t, r) => {
  let n, o, s = (l, f) => {
    if (o) return;
    o = !0, n && n(l, f);
  }, i = l => {
    s(l), t(l);
  }, a = l => {
    s(l, !0), r(l);
  };
  e(i, a, l => n = l).catch(a);
}), al = ({address: e, family: t}) => {
  if (!u.isString(e)) throw TypeError("address must be a string");
  return {
    address: e,
    family: t || (e.indexOf(".") < 0 ? 6 : 4)
  };
}, bi = (e, t) => al(u.isObject(e) ? e : {
  address: e,
  family: t
}), ul = {
  request(e, t) {
    let r = e.protocol + "//" + e.hostname + ":" + (e.port || (e.protocol === "https:" ? 443 : 80)), {http2Options: n, headers: o} = e, s = nl.getSession(r, n), {HTTP2_HEADER_SCHEME: i, HTTP2_HEADER_METHOD: a, HTTP2_HEADER_PATH: l, HTTP2_HEADER_STATUS: f} = gi.constants, c = {
      [i]: e.protocol.replace(":", ""),
      [a]: e.method,
      [l]: e.path
    };
    u.forEach(o, (d, b) => {
      b.charAt(0) !== ":" && (c[b] = d);
    });
    let p = s.request(c);
    return p.once("response", d => {
      let b = p;
      d = Object.assign({}, d);
      let m = d[f];
      delete d[f], b.headers = d, b.statusCode = +m, t(b);
    }), p;
  }
}, _i = sl && function(t) {
  return il(async function(n, o, s) {
    let i = w => u.hasOwnProp(t, w) ? t[w] : void 0, a = i("data"), l = i("lookup"), f = i("family"), c = i("httpVersion");
    if (c === void 0) c = 1;
    let p = i("http2Options"), d = i("responseType"), b = i("responseEncoding"), m = t.method.toUpperCase(), g, h = !1, E;
    if (c = +c, Number.isNaN(c)) throw TypeError(`Invalid protocol version: '${t.httpVersion}' is not a number`);
    if (c !== 1 && c !== 2) throw TypeError(`Unsupported protocol version '${c}'`);
    let N = c === 2;
    if (l) {
      let w = si(l, R => u.isArray(R) ? R : [ R ]);
      l = (R, O, B) => {
        w(R, O, (P, K, fe) => {
          if (P) return B(P);
          let q = u.isArray(K) ? K.map(Be => bi(Be)) : [ bi(K, fe) ];
          O.all ? B(P, q) : B(P, q[0].address, q[0].family);
        });
      };
    }
    let v = new Qf;
    function x(w) {
      try {
        v.emit("abort", !w || w.type ? new Q(null, t, E) : w);
      } catch (R) {
        console.warn("emit error", R);
      }
    }
    v.once("abort", o);
    let k = () => {
      if (t.cancelToken) t.cancelToken.unsubscribe(x);
      if (t.signal) t.signal.removeEventListener("abort", x);
      v.removeAllListeners();
    };
    if (t.cancelToken || t.signal) {
      if (t.cancelToken && t.cancelToken.subscribe(x), t.signal) t.signal.aborted ? x() : t.signal.addEventListener("abort", x);
    }
    s((w, R) => {
      if (g = !0, R) {
        h = !0, k();
        return;
      }
      let {data: O} = w;
      if (O instanceof se.Readable || O instanceof se.Duplex) {
        let B = se.finished(O, () => {
          B(), k();
        });
      } else k();
    });
    let G = _e(t.baseURL, t.url, t.allowAbsoluteUrls), T = new URL(G, A.hasBrowserEnv ? A.origin : void 0), J = T.protocol || mi[0];
    if (J === "data:") {
      if (t.maxContentLength > -1) {
        let R = String(t.url || G || "");
        if (Kr(R) > t.maxContentLength) return o(new y("maxContentLength size of " + t.maxContentLength + " exceeded", y.ERR_BAD_RESPONSE, t));
      }
      let w;
      if (m !== "GET") return ue(n, o, {
        status: 405,
        statusText: "method not allowed",
        headers: {},
        config: t
      });
      try {
        w = Vr(t.url, d === "blob", {
          Blob: t.env && t.env.Blob
        });
      } catch (R) {
        throw y.from(R, y.ERR_BAD_REQUEST, t);
      }
      if (d === "text") {
        if (w = w.toString(b), !b || b === "utf8") w = u.stripBOM(w);
      } else if (d === "stream") w = se.Readable.from(w);
      return ue(n, o, {
        data: w,
        status: 200,
        statusText: "OK",
        headers: new F,
        config: t
      });
    }
    if (mi.indexOf(J) === -1) return o(new y("Unsupported protocol " + J, y.ERR_BAD_REQUEST, t));
    let D = F.from(t.headers).normalize();
    D.set("User-Agent", "axios/" + ve, !1);
    let {onUploadProgress: Pe, onDownloadProgress: Fe} = t, ce = t.maxRate, ae = void 0, Z = void 0;
    if (u.isSpecCompliantForm(a)) {
      let w = D.getContentType(/boundary=([-_\w\d]{10,70})/i);
      a = ri(a, R => {
        D.set(R);
      }, {
        tag: `axios-${ve}-boundary`,
        boundary: w && w[1] || void 0
      });
    } else if (u.isFormData(a) && u.isFunction(a.getHeaders) && a.getHeaders !== Object.prototype.getHeaders) {
      if (D.set(a.getHeaders()), !D.hasContentLength()) try {
        let w = await Ei.promisify(a.getLength).call(a);
        Number.isFinite(w) && w >= 0 && D.setContentLength(w);
      } catch (w) {}
    } else if (u.isBlob(a) || u.isFile(a)) a.size && D.setContentType(a.type || "application/octet-stream"), 
    D.setContentLength(a.size || 0), a = se.Readable.from(jt(a)); else if (a && !u.isStream(a)) {
      if (Buffer.isBuffer(a)) ; else if (u.isArrayBuffer(a)) a = Buffer.from(new Uint8Array(a)); else if (u.isString(a)) a = Buffer.from(a, "utf-8"); else return o(new y("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", y.ERR_BAD_REQUEST, t));
      if (D.setContentLength(a.length, !1), t.maxBodyLength > -1 && a.length > t.maxBodyLength) return o(new y("Request body larger than maxBodyLength limit", y.ERR_BAD_REQUEST, t));
    }
    let yt = u.toFiniteNumber(D.getContentLength());
    if (u.isArray(ce)) ae = ce[0], Z = ce[1]; else ae = Z = ce;
    if (a && (Pe || ae)) {
      if (!u.isStream(a)) a = se.Readable.from(a, {
        objectMode: !1
      });
      a = se.pipeline([ a, new Gr({
        maxRate: u.toFiniteNumber(ae)
      }) ], u.noop), Pe && a.on("progress", yi(a, We(yt, le(Ge(Pe), !1, 3))));
    }
    let U = void 0, Le = i("auth");
    if (Le) {
      let w = Le.username || "", R = Le.password || "";
      U = w + ":" + R;
    }
    if (!U && T.username) {
      let {username: w, password: R} = T;
      U = w + ":" + R;
    }
    U && D.delete("authorization");
    let re;
    try {
      re = xe(T.pathname + T.search, t.params, t.paramsSerializer).replace(/^\?/, "");
    } catch (w) {
      let R = Error(w.message);
      return R.config = t, R.url = t.url, R.exists = !0, o(R);
    }
    D.set("Accept-Encoding", "gzip, compress, deflate" + (di ? ", br" : ""), !1);
    let z = Object.assign(Object.create(null), {
      path: re,
      method: m,
      headers: D.toJSON(),
      agents: {
        http: t.httpAgent,
        https: t.httpsAgent
      },
      auth: U,
      protocol: J,
      family: f,
      beforeRedirect: ol,
      beforeRedirects: Object.create(null),
      http2Options: p
    });
    if (!u.isUndefined(l) && (z.lookup = l), t.socketPath) {
      if (typeof t.socketPath !== "string") return o(new y("socketPath must be a string", y.ERR_BAD_OPTION_VALUE, t));
      if (t.allowedSocketPaths != null) {
        let w = Array.isArray(t.allowedSocketPaths) ? t.allowedSocketPaths : [ t.allowedSocketPaths ], R = li(t.socketPath);
        if (!w.some(B => typeof B === "string" && li(B) === R)) return o(new y(`socketPath "${t.socketPath}" is not permitted by allowedSocketPaths`, y.ERR_BAD_OPTION_VALUE, t));
      }
      z.socketPath = t.socketPath;
    } else z.hostname = T.hostname.startsWith("[") ? T.hostname.slice(1, -1) : T.hostname, 
    z.port = T.port, xi(z, t.proxy, J + "//" + T.hostname + (T.port ? ":" + T.port : "") + z.path);
    let be, V = rl.test(z.protocol);
    if (z.agent = V ? t.httpsAgent : t.httpAgent, N) be = ul; else {
      let w = i("transport");
      if (w) be = w; else if (t.maxRedirects === 0) be = V ? Yf : Xf; else {
        if (t.maxRedirects) z.maxRedirects = t.maxRedirects;
        let R = i("beforeRedirect");
        if (R) z.beforeRedirects.config = R;
        be = V ? tl : el;
      }
    }
    if (t.maxBodyLength > -1) z.maxBodyLength = t.maxBodyLength; else z.maxBodyLength = 1 / 0;
    if (z.insecureHTTPParser = Boolean(i("insecureHTTPParser")), E = be.request(z, function(R) {
      if (E.destroyed) return;
      let O = [ R ], B = u.toFiniteNumber(R.headers["content-length"]);
      if (Fe || Z) {
        let q = new Gr({
          maxRate: u.toFiniteNumber(Z)
        });
        Fe && q.on("progress", yi(q, We(B, le(Ge(Fe), !0, 3)))), O.push(q);
      }
      let P = R, K = R.req || E;
      if (t.decompress !== !1 && R.headers["content-encoding"]) {
        if (m === "HEAD" || R.statusCode === 204) delete R.headers["content-encoding"];
        switch ((R.headers["content-encoding"] || "").toLowerCase()) {
         case "gzip":
         case "x-gzip":
         case "compress":
         case "x-compress":
          O.push(ye.createUnzip(pi)), delete R.headers["content-encoding"];
          break;

         case "deflate":
          O.push(new oi), O.push(ye.createUnzip(pi)), delete R.headers["content-encoding"];
          break;

         case "br":
          if (di) O.push(ye.createBrotliDecompress(Zf)), delete R.headers["content-encoding"];
        }
      }
      P = O.length > 1 ? se.pipeline(O, u.noop) : O[0];
      let fe = {
        status: R.statusCode,
        statusText: R.statusMessage,
        headers: new F(R.headers),
        config: t,
        request: K
      };
      if (d === "stream") {
        if (t.maxContentLength > -1) {
          let q = t.maxContentLength, Be = P;
          async function* Je() {
            let j = 0;
            for await (let on of Be) {
              if (j += on.length, j > q) throw new y("maxContentLength size of " + q + " exceeded", y.ERR_BAD_RESPONSE, t, K);
              yield on;
            }
          }
          P = se.Readable.from(Je(), {
            objectMode: !1
          });
        }
        fe.data = P, ue(n, o, fe);
      } else {
        let q = [], Be = 0;
        P.on("data", function(j) {
          if (q.push(j), Be += j.length, t.maxContentLength > -1 && Be > t.maxContentLength) h = !0, 
          P.destroy(), x(new y("maxContentLength size of " + t.maxContentLength + " exceeded", y.ERR_BAD_RESPONSE, t, K));
        }), P.on("aborted", function() {
          if (h) return;
          let j = new y("stream has been aborted", y.ERR_BAD_RESPONSE, t, K);
          P.destroy(j), o(j);
        }), P.on("error", function(j) {
          if (E.destroyed) return;
          o(y.from(j, null, t, K));
        }), P.on("end", function() {
          try {
            let j = q.length === 1 ? q[0] : Buffer.concat(q);
            if (d !== "arraybuffer") {
              if (j = j.toString(b), !b || b === "utf8") j = u.stripBOM(j);
            }
            fe.data = j;
          } catch (j) {
            return o(y.from(j, null, t, fe.request, fe));
          }
          ue(n, o, fe);
        });
      }
      v.once("abort", q => {
        if (!P.destroyed) P.emit("error", q), P.destroy();
      });
    }), v.once("abort", w => {
      if (E.close) E.close(); else E.destroy(w);
    }), E.on("error", function(R) {
      o(y.from(R, null, t, E));
    }), E.on("socket", function(R) {
      if (R.setKeepAlive(!0, 6e4), !R[hi]) R.on("error", function(B) {
        let P = R[Mt];
        if (P && !P.destroyed) P.destroy(B);
      }), R[hi] = !0;
      R[Mt] = E, E.once("close", function() {
        if (R[Mt] === E) R[Mt] = null;
      });
    }), t.timeout) {
      let w = parseInt(t.timeout, 10);
      if (Number.isNaN(w)) {
        x(new y("error trying to parse `config.timeout` to int", y.ERR_BAD_OPTION_VALUE, t, E));
        return;
      }
      E.setTimeout(w, function() {
        if (g) return;
        let O = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded", B = t.transitional || he;
        if (t.timeoutErrorMessage) O = t.timeoutErrorMessage;
        x(new y(O, B.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED, t, E));
      });
    } else E.setTimeout(0);
    if (u.isStream(a)) {
      let w = !1, R = !1;
      a.on("end", () => {
        w = !0;
      }), a.once("error", B => {
        R = !0, E.destroy(B);
      }), a.on("close", () => {
        if (!w && !R) x(new Q("Request stream has been aborted", t, E));
      });
      let O = a;
      if (t.maxBodyLength > -1 && t.maxRedirects === 0) {
        let B = t.maxBodyLength, P = 0;
        O = se.pipeline([ a, new se.Transform({
          transform(K, fe, q) {
            if (P += K.length, P > B) return q(new y("Request body larger than maxBodyLength limit", y.ERR_BAD_REQUEST, t, E));
            q(null, K);
          }
        }) ], u.noop), O.on("error", K => {
          if (!E.destroyed) E.destroy(K);
        });
      }
      O.pipe(E);
    } else a && E.write(a), E.end();
  });
};

var Si = A.hasStandardBrowserEnv ? ((e, t) => r => (r = new URL(r, A.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(new URL(A.origin), A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)) : () => !0;

var Ai = A.hasStandardBrowserEnv ? {
  write(e, t, r, n, o, s, i) {
    if (typeof document > "u") return;
    let a = [ `${e}=${encodeURIComponent(t)}` ];
    if (u.isNumber(r)) a.push(`expires=${new Date(r).toUTCString()}`);
    if (u.isString(n)) a.push(`path=${n}`);
    if (u.isString(o)) a.push(`domain=${o}`);
    if (s === !0) a.push("secure");
    if (u.isString(i)) a.push(`SameSite=${i}`);
    document.cookie = a.join("; ");
  },
  read(e) {
    if (typeof document > "u") return null;
    let t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
    return t ? decodeURIComponent(t[1]) : null;
  },
  remove(e) {
    this.write(e, "", Date.now() - 864e5, "/");
  }
} : {
  write() {},
  read() {
    return null;
  },
  remove() {}
};

var Oi = e => e instanceof F ? {
  ...e
} : e;

function ie(e, t) {
  t = t || {};
  let r = Object.create(null);
  Object.defineProperty(r, "hasOwnProperty", {
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function n(f, c, p, d) {
    if (u.isPlainObject(f) && u.isPlainObject(c)) return u.merge.call({
      caseless: d
    }, f, c); else if (u.isPlainObject(c)) return u.merge({}, c); else if (u.isArray(c)) return c.slice();
    return c;
  }
  function o(f, c, p, d) {
    if (!u.isUndefined(c)) return n(f, c, p, d); else if (!u.isUndefined(f)) return n(void 0, f, p, d);
  }
  function s(f, c) {
    if (!u.isUndefined(c)) return n(void 0, c);
  }
  function i(f, c) {
    if (!u.isUndefined(c)) return n(void 0, c); else if (!u.isUndefined(f)) return n(void 0, f);
  }
  function a(f, c, p) {
    if (u.hasOwnProp(t, p)) return n(f, c); else if (u.hasOwnProp(e, p)) return n(void 0, f);
  }
  let l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    allowedSocketPaths: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (f, c, p) => o(Oi(f), Oi(c), p, !0)
  };
  return u.forEach(Object.keys({
    ...e,
    ...t
  }), function(c) {
    if (c === "__proto__" || c === "constructor" || c === "prototype") return;
    let p = u.hasOwnProp(l, c) ? l[c] : o, d = u.hasOwnProp(e, c) ? e[c] : void 0, b = u.hasOwnProp(t, c) ? t[c] : void 0, m = p(d, b, c);
    u.isUndefined(m) && p !== a || (r[c] = m);
  }), r;
}

var Ht = e => {
  let t = ie({}, e), r = d => u.hasOwnProp(t, d) ? t[d] : void 0, n = r("data"), o = r("withXSRFToken"), s = r("xsrfHeaderName"), i = r("xsrfCookieName"), a = r("headers"), l = r("auth"), f = r("baseURL"), c = r("allowAbsoluteUrls"), p = r("url");
  if (t.headers = a = F.from(a), t.url = xe(_e(f, p, c), e.params, e.paramsSerializer), 
  l) a.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")));
  if (u.isFormData(n)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0); else if (u.isFunction(n.getHeaders)) {
      let d = n.getHeaders(), b = [ "content-type", "content-length" ];
      Object.entries(d).forEach(([m, g]) => {
        if (b.includes(m.toLowerCase())) a.set(m, g);
      });
    }
  }
  if (A.hasStandardBrowserEnv) {
    if (u.isFunction(o)) o = o(t);
    if (o === !0 || o == null && Si(t.url)) {
      let b = s && i && Ai.read(i);
      if (b) a.set(s, b);
    }
  }
  return t;
};

var cl = typeof XMLHttpRequest < "u", Ci = cl && function(e) {
  return new Promise(function(r, n) {
    let o = Ht(e), s = o.data, i = F.from(o.headers).normalize(), {responseType: a, onUploadProgress: l, onDownloadProgress: f} = o, c, p, d, b, m;
    function g() {
      b && b(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let h = new XMLHttpRequest;
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function E() {
      if (!h) return;
      let v = F.from("getAllResponseHeaders" in h && h.getAllResponseHeaders()), k = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: v,
        config: e,
        request: h
      };
      ue(function(T) {
        r(T), g();
      }, function(T) {
        n(T), g();
      }, k), h = null;
    }
    if ("onloadend" in h) h.onloadend = E; else h.onreadystatechange = function() {
      if (!h || h.readyState !== 4) return;
      if (h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0)) return;
      setTimeout(E);
    };
    if (h.onabort = function() {
      if (!h) return;
      n(new y("Request aborted", y.ECONNABORTED, e, h)), h = null;
    }, h.onerror = function(x) {
      let k = x && x.message ? x.message : "Network Error", G = new y(k, y.ERR_NETWORK, e, h);
      G.event = x || null, n(G), h = null;
    }, h.ontimeout = function() {
      let x = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded", k = o.transitional || he;
      if (o.timeoutErrorMessage) x = o.timeoutErrorMessage;
      n(new y(x, k.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED, e, h)), h = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in h) u.forEach(i.toJSON(), function(x, k) {
      h.setRequestHeader(k, x);
    });
    if (!u.isUndefined(o.withCredentials)) h.withCredentials = !!o.withCredentials;
    if (a && a !== "json") h.responseType = o.responseType;
    if (f) [d, m] = le(f, !0), h.addEventListener("progress", d);
    if (l && h.upload) [p, b] = le(l), h.upload.addEventListener("progress", p), h.upload.addEventListener("loadend", b);
    if (o.cancelToken || o.signal) {
      if (c = v => {
        if (!h) return;
        n(!v || v.type ? new Q(null, e, h) : v), h.abort(), h = null;
      }, o.cancelToken && o.cancelToken.subscribe(c), o.signal) o.signal.aborted ? c() : o.signal.addEventListener("abort", c);
    }
    let N = lt(o.url);
    if (N && A.protocols.indexOf(N) === -1) {
      n(new y("Unsupported protocol " + N + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(s || null);
  });
};

var fl = (e, t) => {
  let {length: r} = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController, o, s = function(f) {
      if (!o) {
        o = !0, a();
        let c = f instanceof Error ? f : this.reason;
        n.abort(c instanceof y ? c : new Q(c instanceof Error ? c.message : c));
      }
    }, i = t && setTimeout(() => {
      i = null, s(new y(`timeout of ${t}ms exceeded`, y.ETIMEDOUT));
    }, t), a = () => {
      if (e) i && clearTimeout(i), i = null, e.forEach(f => {
        f.unsubscribe ? f.unsubscribe(s) : f.removeEventListener("abort", s);
      }), e = null;
    };
    e.forEach(f => f.addEventListener("abort", s));
    let {signal: l} = n;
    return l.unsubscribe = () => u.asap(a), l;
  }
}, vi = fl;

var ll = function*(e, t) {
  let r = e.byteLength;
  if (!t || r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  while (n < r) o = n + t, yield e.slice(n, o), n = o;
}, pl = async function*(e, t) {
  for await (let r of dl(e)) yield* ll(r, t);
}, dl = async function*(e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  let t = e.getReader();
  try {
    for (;;) {
      let {done: r, value: n} = await t.read();
      if (r) break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Xr = (e, t, r, n) => {
  let o = pl(e, t), s = 0, i, a = l => {
    if (!i) i = !0, n && n(l);
  };
  return new ReadableStream({
    async pull(l) {
      try {
        let {done: f, value: c} = await o.next();
        if (f) {
          a(), l.close();
          return;
        }
        let p = c.byteLength;
        if (r) {
          let d = s += p;
          r(d);
        }
        l.enqueue(new Uint8Array(c));
      } catch (f) {
        throw a(f), f;
      }
    },
    cancel(l) {
      return a(l), o.return();
    }
  }, {
    highWaterMark: 2
  });
};

var Ti = 65536, {isFunction: zt} = u, hl = (({Request: e, Response: t}) => ({
  Request: e,
  Response: t
}))(u.global), {ReadableStream: Pi, TextEncoder: Fi} = u.global, Li = (e, ...t) => {
  try {
    return !!e(...t);
  } catch (r) {
    return !1;
  }
}, ml = e => {
  e = u.merge.call({
    skipUndefined: !0
  }, hl, e);
  let {fetch: t, Request: r, Response: n} = e, o = t ? zt(t) : typeof fetch === "function", s = zt(r), i = zt(n);
  if (!o) return !1;
  let a = o && zt(Pi), l = o && (typeof Fi === "function" ? (m => g => m.encode(g))(new Fi) : async m => new Uint8Array(await new r(m).arrayBuffer())), f = s && a && Li(() => {
    let m = !1, g = new r(A.origin, {
      body: new Pi,
      method: "POST",
      get duplex() {
        return m = !0, "half";
      }
    }), h = g.headers.has("Content-Type");
    if (g.body != null) g.body.cancel();
    return m && !h;
  }), c = i && a && Li(() => u.isReadableStream(new n("").body)), p = {
    stream: c && (m => m.body)
  };
  o && (() => {
    [ "text", "arrayBuffer", "blob", "formData", "stream" ].forEach(m => {
      !p[m] && (p[m] = (g, h) => {
        let E = g && g[m];
        if (E) return E.call(g);
        throw new y(`Response type '${m}' is not supported`, y.ERR_NOT_SUPPORT, h);
      });
    });
  })();
  let d = async m => {
    if (m == null) return 0;
    if (u.isBlob(m)) return m.size;
    if (u.isSpecCompliantForm(m)) return (await new r(A.origin, {
      method: "POST",
      body: m
    }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(m) || u.isArrayBuffer(m)) return m.byteLength;
    if (u.isURLSearchParams(m)) m = m + "";
    if (u.isString(m)) return (await l(m)).byteLength;
  }, b = async (m, g) => {
    let h = u.toFiniteNumber(m.getContentLength());
    return h == null ? d(g) : h;
  };
  return async m => {
    let {url: g, method: h, data: E, signal: N, cancelToken: v, timeout: x, onDownloadProgress: k, onUploadProgress: G, responseType: T, headers: J, withCredentials: D = "same-origin", fetchOptions: Pe} = Ht(m), Fe = t || fetch;
    T = T ? (T + "").toLowerCase() : "text";
    let ce = vi([ N, v && v.toAbortSignal() ], x), ae = null, Z = ce && ce.unsubscribe && (() => {
      ce.unsubscribe();
    }), yt;
    try {
      if (G && f && h !== "get" && h !== "head" && (yt = await b(J, E)) !== 0) {
        let V = new r(g, {
          method: "POST",
          body: E,
          duplex: "half"
        }), w;
        if (u.isFormData(E) && (w = V.headers.get("content-type"))) J.setContentType(w);
        if (V.body) {
          let [R, O] = We(yt, le(Ge(G)));
          E = Xr(V.body, Ti, R, O);
        }
      }
      if (!u.isString(D)) D = D ? "include" : "omit";
      let U = s && "credentials" in r.prototype;
      if (u.isFormData(E)) {
        let V = J.getContentType();
        if (V && /^multipart\/form-data/i.test(V) && !/boundary=/i.test(V)) J.delete("content-type");
      }
      let Le = {
        ...Pe,
        signal: ce,
        method: h.toUpperCase(),
        headers: J.normalize().toJSON(),
        body: E,
        duplex: "half",
        credentials: U ? D : void 0
      };
      ae = s && new r(g, Le);
      let re = await (s ? Fe(ae, Pe) : Fe(g, Le)), z = c && (T === "stream" || T === "response");
      if (c && (k || z && Z)) {
        let V = {};
        [ "status", "statusText", "headers" ].forEach(B => {
          V[B] = re[B];
        });
        let w = u.toFiniteNumber(re.headers.get("content-length")), [R, O] = k && We(w, le(Ge(k), !0)) || [];
        re = new n(Xr(re.body, Ti, R, () => {
          O && O(), Z && Z();
        }), V);
      }
      T = T || "text";
      let be = await p[u.findKey(p, T) || "text"](re, m);
      return !z && Z && Z(), await new Promise((V, w) => {
        ue(V, w, {
          data: be,
          headers: F.from(re.headers),
          status: re.status,
          statusText: re.statusText,
          config: m,
          request: ae
        });
      });
    } catch (U) {
      if (Z && Z(), U && U.name === "TypeError" && /Load failed|fetch/i.test(U.message)) throw Object.assign(new y("Network Error", y.ERR_NETWORK, m, ae, U && U.response), {
        cause: U.cause || U
      });
      throw y.from(U, U && U.code, m, ae, U && U.response);
    }
  };
}, yl = new Map, Yr = e => {
  let t = e && e.env || {}, {fetch: r, Request: n, Response: o} = t, s = [ n, o, r ], i = s.length, a = i, l, f, c = yl;
  while (a--) l = s[a], f = c.get(l), f === void 0 && c.set(l, f = a ? new Map : ml(t)), 
  c = f;
  return f;
}, Cm = Yr();

var Qr = {
  http: _i,
  xhr: Ci,
  fetch: {
    get: Yr
  }
};

u.forEach(Qr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", {
        value: t
      });
    } catch (r) {}
    Object.defineProperty(e, "adapterName", {
      value: t
    });
  }
});

var Bi = e => `- ${e}`, gl = e => u.isFunction(e) || e === null || e === !1;

function El(e, t) {
  e = u.isArray(e) ? e : [ e ];
  let {length: r} = e, n, o, s = {};
  for (let i = 0; i < r; i++) {
    n = e[i];
    let a;
    if (o = n, !gl(n)) {
      if (o = Qr[(a = String(n)).toLowerCase()], o === void 0) throw new y(`Unknown adapter '${a}'`);
    }
    if (o && (u.isFunction(o) || (o = o.get(t)))) break;
    s[a || "#" + i] = o;
  }
  if (!o) {
    let i = Object.entries(s).map(([l, f]) => `adapter ${l} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")), a = r ? i.length > 1 ? `since :\n` + i.map(Bi).join(`\n`) : " " + Bi(i[0]) : "as no adapter specified";
    throw new y("There is no suitable adapter to dispatch the request " + a, "ERR_NOT_SUPPORT");
  }
  return o;
}

var $t = {
  getAdapter: El,
  adapters: Qr
};

function Zr(e) {
  if (e.cancelToken) e.cancelToken.throwIfRequested();
  if (e.signal && e.signal.aborted) throw new Q(null, e);
}

function Vt(e) {
  if (Zr(e), e.headers = F.from(e.headers), e.data = st.call(e, e.transformRequest), 
  [ "post", "put", "patch" ].indexOf(e.method) !== -1) e.headers.setContentType("application/x-www-form-urlencoded", !1);
  return $t.getAdapter(e.adapter || He.adapter, e)(e).then(function(n) {
    return Zr(e), n.data = st.call(e, e.transformResponse, n), n.headers = F.from(n.headers), 
    n;
  }, function(n) {
    if (!it(n)) {
      if (Zr(e), n && n.response) n.response.data = st.call(e, e.transformResponse, n.response), 
      n.response.headers = F.from(n.response.headers);
    }
    return Promise.reject(n);
  });
}

var Wt = {};

[ "object", "boolean", "number", "function", "string", "symbol" ].forEach((e, t) => {
  Wt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});

var Ni = {};

Wt.transitional = function(t, r, n) {
  function o(s, i) {
    return "[Axios v" + ve + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, a) => {
    if (t === !1) throw new y(o(i, " has been removed" + (r ? " in " + r : "")), y.ERR_DEPRECATED);
    if (r && !Ni[i]) Ni[i] = !0, console.warn(o(i, " has been deprecated since v" + r + " and will be removed in the near future"));
    return t ? t(s, i, a) : !0;
  };
};

Wt.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};

function Rl(e, t, r) {
  if (typeof e !== "object") throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  let n = Object.keys(e), o = n.length;
  while (o-- > 0) {
    let s = n[o], i = Object.prototype.hasOwnProperty.call(t, s) ? t[s] : void 0;
    if (i) {
      let a = e[s], l = a === void 0 || i(a, s, e);
      if (l !== !0) throw new y("option " + s + " must be " + l, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new y("Unknown option " + s, y.ERR_BAD_OPTION);
  }
}

var dt = {
  assertOptions: Rl,
  validators: Wt
};

var te = dt.validators;

class ht {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new yr,
      response: new yr
    };
  }
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (r) {
      if (r instanceof Error) {
        let n = {};
        Error.captureStackTrace ? Error.captureStackTrace(n) : n = Error();
        let o = (() => {
          if (!n.stack) return "";
          let s = n.stack.indexOf(`\n`);
          return s === -1 ? "" : n.stack.slice(s + 1);
        })();
        try {
          if (!r.stack) r.stack = o; else if (o) {
            let s = o.indexOf(`\n`), i = s === -1 ? -1 : o.indexOf(`\n`, s + 1), a = i === -1 ? "" : o.slice(i + 1);
            if (!String(r.stack).endsWith(a)) r.stack += `\n` + o;
          }
        } catch (s) {}
      }
      throw r;
    }
  }
  _request(e, t) {
    if (typeof e === "string") t = t || {}, t.url = e; else t = e || {};
    t = ie(this.defaults, t);
    let {transitional: r, paramsSerializer: n, headers: o} = t;
    if (r !== void 0) dt.assertOptions(r, {
      silentJSONParsing: te.transitional(te.boolean),
      forcedJSONParsing: te.transitional(te.boolean),
      clarifyTimeoutError: te.transitional(te.boolean),
      legacyInterceptorReqResOrdering: te.transitional(te.boolean)
    }, !1);
    if (n != null) if (u.isFunction(n)) t.paramsSerializer = {
      serialize: n
    }; else dt.assertOptions(n, {
      encode: te.function,
      serialize: te.function
    }, !0);
    if (t.allowAbsoluteUrls !== void 0) ; else if (this.defaults.allowAbsoluteUrls !== void 0) t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls; else t.allowAbsoluteUrls = !0;
    dt.assertOptions(t, {
      baseUrl: te.spelling("baseURL"),
      withXsrfToken: te.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = o && u.merge(o.common, o[t.method]);
    o && u.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], b => {
      delete o[b];
    }), t.headers = F.concat(s, o);
    let i = [], a = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen === "function" && m.runWhen(t) === !1) return;
      a = a && m.synchronous;
      let g = t.transitional || he;
      if (g && g.legacyInterceptorReqResOrdering) i.unshift(m.fulfilled, m.rejected); else i.push(m.fulfilled, m.rejected);
    });
    let l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let f, c = 0, p;
    if (!a) {
      let b = [ Vt.bind(this), void 0 ];
      b.unshift(...i), b.push(...l), p = b.length, f = Promise.resolve(t);
      while (c < p) f = f.then(b[c++], b[c++]);
      return f;
    }
    p = i.length;
    let d = t;
    while (c < p) {
      let b = i[c++], m = i[c++];
      try {
        d = b(d);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      f = Vt.call(this, d);
    } catch (b) {
      return Promise.reject(b);
    }
    c = 0, p = l.length;
    while (c < p) f = f.then(l[c++], l[c++]);
    return f;
  }
  getUri(e) {
    e = ie(this.defaults, e);
    let t = _e(e.baseURL, e.url, e.allowAbsoluteUrls);
    return xe(t, e.params, e.paramsSerializer);
  }
}

u.forEach([ "delete", "get", "head", "options" ], function(t) {
  ht.prototype[t] = function(r, n) {
    return this.request(ie(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});

u.forEach([ "post", "put", "patch" ], function(t) {
  function r(n) {
    return function(s, i, a) {
      return this.request(ie(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  ht.prototype[t] = r(), ht.prototype[t + "Form"] = r(!0);
});

var mt = ht;

class en {
  constructor(e) {
    if (typeof e !== "function") throw TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(o) {
      t = o;
    });
    let r = this;
    this.promise.then(n => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      while (o-- > 0) r._listeners[o](n);
      r._listeners = null;
    }), this.promise.then = n => {
      let o, s = new Promise(i => {
        r.subscribe(i), o = i;
      }).then(n);
      return s.cancel = function() {
        r.unsubscribe(o);
      }, s;
    }, e(function(o, s, i) {
      if (r.reason) return;
      r.reason = new Q(o, s, i), t(r.reason);
    });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    if (this._listeners) this._listeners.push(e); else this._listeners = [ e ];
  }
  unsubscribe(e) {
    if (!this._listeners) return;
    let t = this._listeners.indexOf(e);
    if (t !== -1) this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    let e = new AbortController, t = r => {
      e.abort(r);
    };
    return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
  }
  static source() {
    let e;
    return {
      token: new en(function(n) {
        e = n;
      }),
      cancel: e
    };
  }
}

var Di = en;

function tn(e) {
  return function(r) {
    return e.apply(null, r);
  };
}

function rn(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}

var nn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};

Object.entries(nn).forEach(([e, t]) => {
  nn[t] = e;
});

var Ui = nn;

function qi(e) {
  let t = new mt(e), r = Ke(mt.prototype.request, t);
  return u.extend(r, mt.prototype, t, {
    allOwnKeys: !0
  }), u.extend(r, t, null, {
    allOwnKeys: !0
  }), r.create = function(o) {
    return qi(ie(e, o));
  }, r;
}

var I = qi(He);

I.Axios = mt;

I.CanceledError = Q;

I.CancelToken = Di;

I.isCancel = it;

I.VERSION = ve;

I.toFormData = de;

I.AxiosError = y;

I.Cancel = I.CanceledError;

I.all = function(t) {
  return Promise.all(t);
};

I.spread = tn;

I.isAxiosError = rn;

I.mergeConfig = ie;

I.AxiosHeaders = F;

I.formToJSON = e => Lt(u.isHTMLForm(e) ? new FormData(e) : e);

I.getAdapter = $t.getAdapter;

I.HttpStatusCode = Ui;

I.default = I;

var At = I;

var {Axios: Sy, AxiosError: pXe, CanceledError: Ay, isCancel: wa, CancelToken: Oy, VERSION: Cy, all: vy, Cancel: Ty, isAxiosError: _c, spread: Py, toFormData: Fy, AxiosHeaders: GOr, HttpStatusCode: Ly, formToJSON: By, getAdapter: Ny, mergeConfig: Dy} = At;

export { COo, zOr, Oan, At, pXe, wa, _c, GOr };
