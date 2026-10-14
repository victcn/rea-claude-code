// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l, E } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { C, Ne } from "./chunk-m8ez8fhk.js";

var qe = C(function(Xt, je) {
  var W = Ne("constants"), ht = process.cwd, oe = null, pt = process.env.GRACEFUL_FS_PLATFORM || "linux";
  process.cwd = function() {
    if (!oe) oe = ht.call(process);
    return oe;
  };
  try {
    process.cwd();
  } catch (e) {}
  if (typeof process.chdir === "function") {
    if (ue = process.chdir, process.chdir = function(e) {
      oe = null, ue.call(process, e);
    }, Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, ue);
  }
  var ue;
  je.exports = mt;
  function mt(e) {
    if (W.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) r(e);
    if (!e.lutimes) n(e);
    if (e.chown = c(e.chown), e.fchown = c(e.fchown), e.lchown = c(e.lchown), e.chmod = i(e.chmod), 
    e.fchmod = i(e.fchmod), e.lchmod = i(e.lchmod), e.chownSync = p(e.chownSync), e.fchownSync = p(e.fchownSync), 
    e.lchownSync = p(e.lchownSync), e.chmodSync = u(e.chmodSync), e.fchmodSync = u(e.fchmodSync), 
    e.lchmodSync = u(e.lchmodSync), e.stat = y(e.stat), e.fstat = y(e.fstat), e.lstat = y(e.lstat), 
    e.statSync = T(e.statSync), e.fstatSync = T(e.fstatSync), e.lstatSync = T(e.lstatSync), 
    e.chmod && !e.lchmod) e.lchmod = function(o, m, f) {
      if (f) process.nextTick(f);
    }, e.lchmodSync = function() {};
    if (e.chown && !e.lchown) e.lchown = function(o, m, f, a) {
      if (a) process.nextTick(a);
    }, e.lchownSync = function() {};
    if (pt === "win32") e.rename = typeof e.rename !== "function" ? e.rename : function(o) {
      function m(f, a, h) {
        var w = Date.now(), S = 0;
        o(f, a, function x(j) {
          if (j && (j.code === "EACCES" || j.code === "EPERM" || j.code === "EBUSY") && Date.now() - w < 6e4) {
            if (setTimeout(function() {
              e.stat(a, function(G, Z) {
                if (G && G.code === "ENOENT") o(f, a, x); else h(j);
              });
            }, S), S < 100) S += 10;
            return;
          }
          if (h) h(j);
        });
      }
      if (Object.setPrototypeOf) Object.setPrototypeOf(m, o);
      return m;
    }(e.rename);
    e.read = typeof e.read !== "function" ? e.read : function(o) {
      function m(f, a, h, w, S, x) {
        var j;
        if (x && typeof x === "function") {
          var G = 0;
          j = function(Z, Ce, Ge) {
            if (Z && Z.code === "EAGAIN" && G < 10) return G++, o.call(e, f, a, h, w, S, j);
            x.apply(this, arguments);
          };
        }
        return o.call(e, f, a, h, w, S, j);
      }
      if (Object.setPrototypeOf) Object.setPrototypeOf(m, o);
      return m;
    }(e.read), e.readSync = typeof e.readSync !== "function" ? e.readSync : function(o) {
      return function(m, f, a, h, w) {
        var S = 0;
        while (!0) try {
          return o.call(e, m, f, a, h, w);
        } catch (x) {
          if (x.code === "EAGAIN" && S < 10) {
            S++;
            continue;
          }
          throw x;
        }
      };
    }(e.readSync);
    function r(o) {
      o.lchmod = function(m, f, a) {
        o.open(m, W.O_WRONLY | W.O_SYMLINK, f, function(h, w) {
          if (h) {
            if (a) a(h);
            return;
          }
          o.fchmod(w, f, function(S) {
            o.close(w, function(x) {
              if (a) a(S || x);
            });
          });
        });
      }, o.lchmodSync = function(m, f) {
        var a = o.openSync(m, W.O_WRONLY | W.O_SYMLINK, f), h = !0, w;
        try {
          w = o.fchmodSync(a, f), h = !1;
        } finally {
          if (h) try {
            o.closeSync(a);
          } catch (S) {} else o.closeSync(a);
        }
        return w;
      };
    }
    function n(o) {
      if (W.hasOwnProperty("O_SYMLINK") && o.futimes) o.lutimes = function(m, f, a, h) {
        o.open(m, W.O_SYMLINK, function(w, S) {
          if (w) {
            if (h) h(w);
            return;
          }
          o.futimes(S, f, a, function(x) {
            o.close(S, function(j) {
              if (h) h(x || j);
            });
          });
        });
      }, o.lutimesSync = function(m, f, a) {
        var h = o.openSync(m, W.O_SYMLINK), w, S = !0;
        try {
          w = o.futimesSync(h, f, a), S = !1;
        } finally {
          if (S) try {
            o.closeSync(h);
          } catch (x) {} else o.closeSync(h);
        }
        return w;
      }; else if (o.futimes) o.lutimes = function(m, f, a, h) {
        if (h) process.nextTick(h);
      }, o.lutimesSync = function() {};
    }
    function i(o) {
      if (!o) return o;
      return function(m, f, a) {
        return o.call(e, m, f, function(h) {
          if (b(h)) h = null;
          if (a) a.apply(this, arguments);
        });
      };
    }
    function u(o) {
      if (!o) return o;
      return function(m, f) {
        try {
          return o.call(e, m, f);
        } catch (a) {
          if (!b(a)) throw a;
        }
      };
    }
    function c(o) {
      if (!o) return o;
      return function(m, f, a, h) {
        return o.call(e, m, f, a, function(w) {
          if (b(w)) w = null;
          if (h) h.apply(this, arguments);
        });
      };
    }
    function p(o) {
      if (!o) return o;
      return function(m, f, a) {
        try {
          return o.call(e, m, f, a);
        } catch (h) {
          if (!b(h)) throw h;
        }
      };
    }
    function y(o) {
      if (!o) return o;
      return function(m, f, a) {
        if (typeof f === "function") a = f, f = null;
        function h(w, S) {
          if (S) {
            if (S.uid < 0) S.uid += 4294967296;
            if (S.gid < 0) S.gid += 4294967296;
          }
          if (a) a.apply(this, arguments);
        }
        return f ? o.call(e, m, f, h) : o.call(e, m, h);
      };
    }
    function T(o) {
      if (!o) return o;
      return function(m, f) {
        var a = f ? o.call(e, m, f) : o.call(e, m);
        if (a) {
          if (a.uid < 0) a.uid += 4294967296;
          if (a.gid < 0) a.gid += 4294967296;
        }
        return a;
      };
    }
    function b(o) {
      if (!o) return !0;
      if (o.code === "ENOSYS") return !0;
      var m = !process.getuid || process.getuid() !== 0;
      if (m) {
        if (o.code === "EINVAL" || o.code === "EPERM") return !0;
      }
      return !1;
    }
  }
});

var $e = C(function(Jt, Ae) {
  var Ue = Ne("stream").Stream;
  Ae.exports = yt;
  function yt(e) {
    return {
      ReadStream: r,
      WriteStream: n
    };
    function r(i, u) {
      if (!(this instanceof r)) return new r(i, u);
      Ue.call(this);
      var c = this;
      this.path = i, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", 
      this.mode = 438, this.bufferSize = 65536, u = u || {};
      var p = Object.keys(u);
      for (var y = 0, T = p.length; y < T; y++) {
        var b = p[y];
        this[b] = u[b];
      }
      if (this.encoding) this.setEncoding(this.encoding);
      if (this.start !== void 0) {
        if (typeof this.start !== "number") throw TypeError("start must be a Number");
        if (this.end === void 0) this.end = 1 / 0; else if (typeof this.end !== "number") throw TypeError("end must be a Number");
        if (this.start > this.end) throw Error("start must be <= end");
        this.pos = this.start;
      }
      if (this.fd !== null) {
        process.nextTick(function() {
          c._read();
        });
        return;
      }
      e.open(this.path, this.flags, this.mode, function(o, m) {
        if (o) {
          c.emit("error", o), c.readable = !1;
          return;
        }
        c.fd = m, c.emit("open", m), c._read();
      });
    }
    function n(i, u) {
      if (!(this instanceof n)) return new n(i, u);
      Ue.call(this), this.path = i, this.fd = null, this.writable = !0, this.flags = "w", 
      this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, u = u || {};
      var c = Object.keys(u);
      for (var p = 0, y = c.length; p < y; p++) {
        var T = c[p];
        this[T] = u[T];
      }
      if (this.start !== void 0) {
        if (typeof this.start !== "number") throw TypeError("start must be a Number");
        if (this.start < 0) throw Error("start must be >= zero");
        this.pos = this.start;
      }
      if (this.busy = !1, this._queue = [], this.fd === null) this._open = e.open, this._queue.push([ this._open, this.path, this.flags, this.mode, void 0 ]), 
      this.flush();
    }
  }
});

var Ye = C(function(Zt, We) {
  We.exports = vt;
  var dt = Object.getPrototypeOf || function(e) {
    return e.__proto__;
  };
  function vt(e) {
    if (e === null || typeof e !== "object") return e;
    if (e instanceof Object) var r = {
      __proto__: dt(e)
    }; else var r = Object.create(null);
    return Object.getOwnPropertyNames(e).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    }), r;
  }
});

var Oe = C(function(er, ge) {
  var I = Ne("fs"), St = qe(), _t = $e(), wt = Ye(), ce = Ne("util"), M, fe;
  if (typeof Symbol === "function" && typeof Symbol.for === "function") M = Symbol.for("graceful-fs.queue"), 
  fe = Symbol.for("graceful-fs.previous"); else M = "___graceful-fs.queue", fe = "___graceful-fs.previous";
  function gt() {}
  function Qe(e, r) {
    Object.defineProperty(e, M, {
      get: function() {
        return r;
      }
    });
  }
  var Q = gt;
  if (ce.debuglog) Q = ce.debuglog("gfs4"); else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) Q = function() {
    var e = ce.format.apply(ce, arguments);
    e = "GFS4: " + e.split(/\n/).join(`\nGFS4: `), console.error(e);
  };
  if (!I[M]) {
    if (Se = global[M] || [], Qe(I, Se), I.close = function(e) {
      function r(n, i) {
        return e.call(I, n, function(u) {
          if (!u) Ke();
          if (typeof i === "function") i.apply(this, arguments);
        });
      }
      return Object.defineProperty(r, fe, {
        value: e
      }), r;
    }(I.close), I.closeSync = function(e) {
      function r(n) {
        e.apply(I, arguments), Ke();
      }
      return Object.defineProperty(r, fe, {
        value: e
      }), r;
    }(I.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) process.on("exit", function() {
      Q(I[M]), Ne("assert").equal(I[M].length, 0);
    });
  }
  var Se;
  if (!global[M]) Qe(global, I[M]);
  ge.exports = _e(wt(I));
  if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !I.__patched) ge.exports = _e(I), 
  I.__patched = !0;
  function _e(e) {
    St(e), e.gracefulify = _e, e.createReadStream = Ce, e.createWriteStream = Ge;
    var r = e.readFile;
    e.readFile = n;
    function n(s, v, d) {
      if (typeof v === "function") d = v, v = null;
      return N(s, v, d);
      function N(P, D, k, L) {
        return r(P, D, function(_) {
          if (_ && (_.code === "EMFILE" || _.code === "ENFILE")) V([ N, [ P, D, k ], _, L || Date.now(), Date.now() ]); else if (typeof k === "function") k.apply(this, arguments);
        });
      }
    }
    var i = e.writeFile;
    e.writeFile = u;
    function u(s, v, d, N) {
      if (typeof d === "function") N = d, d = null;
      return P(s, v, d, N);
      function P(D, k, L, _, R) {
        return i(D, k, L, function(g) {
          if (g && (g.code === "EMFILE" || g.code === "ENFILE")) V([ P, [ D, k, L, _ ], g, R || Date.now(), Date.now() ]); else if (typeof _ === "function") _.apply(this, arguments);
        });
      }
    }
    var c = e.appendFile;
    if (c) e.appendFile = p;
    function p(s, v, d, N) {
      if (typeof d === "function") N = d, d = null;
      return P(s, v, d, N);
      function P(D, k, L, _, R) {
        return c(D, k, L, function(g) {
          if (g && (g.code === "EMFILE" || g.code === "ENFILE")) V([ P, [ D, k, L, _ ], g, R || Date.now(), Date.now() ]); else if (typeof _ === "function") _.apply(this, arguments);
        });
      }
    }
    var y = e.copyFile;
    if (y) e.copyFile = T;
    function T(s, v, d, N) {
      if (typeof d === "function") N = d, d = 0;
      return P(s, v, d, N);
      function P(D, k, L, _, R) {
        return y(D, k, L, function(g) {
          if (g && (g.code === "EMFILE" || g.code === "ENFILE")) V([ P, [ D, k, L, _ ], g, R || Date.now(), Date.now() ]); else if (typeof _ === "function") _.apply(this, arguments);
        });
      }
    }
    var b = e.readdir;
    e.readdir = m;
    var o = /^v[0-5]\./;
    function m(s, v, d) {
      if (typeof v === "function") d = v, v = null;
      var N = o.test(process.version) ? function(k, L, _, R) {
        return b(k, P(k, L, _, R));
      } : function(k, L, _, R) {
        return b(k, L, P(k, L, _, R));
      };
      return N(s, v, d);
      function P(D, k, L, _) {
        return function(R, g) {
          if (R && (R.code === "EMFILE" || R.code === "ENFILE")) V([ N, [ D, k, L ], R, _ || Date.now(), Date.now() ]); else {
            if (g && g.sort) g.sort();
            if (typeof L === "function") L.call(this, R, g);
          }
        };
      }
    }
    if (process.version.substr(0, 4) === "v0.8") {
      var f = _t(e);
      x = f.ReadStream, G = f.WriteStream;
    }
    var a = e.ReadStream;
    if (a) x.prototype = Object.create(a.prototype), x.prototype.open = j;
    var h = e.WriteStream;
    if (h) G.prototype = Object.create(h.prototype), G.prototype.open = Z;
    Object.defineProperty(e, "ReadStream", {
      get: function() {
        return x;
      },
      set: function(s) {
        x = s;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e, "WriteStream", {
      get: function() {
        return G;
      },
      set: function(s) {
        G = s;
      },
      enumerable: !0,
      configurable: !0
    });
    var w = x;
    Object.defineProperty(e, "FileReadStream", {
      get: function() {
        return w;
      },
      set: function(s) {
        w = s;
      },
      enumerable: !0,
      configurable: !0
    });
    var S = G;
    Object.defineProperty(e, "FileWriteStream", {
      get: function() {
        return S;
      },
      set: function(s) {
        S = s;
      },
      enumerable: !0,
      configurable: !0
    });
    function x(s, v) {
      if (this instanceof x) return a.apply(this, arguments), this; else return x.apply(Object.create(x.prototype), arguments);
    }
    function j() {
      var s = this;
      ve(s.path, s.flags, s.mode, function(v, d) {
        if (v) {
          if (s.autoClose) s.destroy();
          s.emit("error", v);
        } else s.fd = d, s.emit("open", d), s.read();
      });
    }
    function G(s, v) {
      if (this instanceof G) return h.apply(this, arguments), this; else return G.apply(Object.create(G.prototype), arguments);
    }
    function Z() {
      var s = this;
      ve(s.path, s.flags, s.mode, function(v, d) {
        if (v) s.destroy(), s.emit("error", v); else s.fd = d, s.emit("open", d);
      });
    }
    function Ce(s, v) {
      return new e.ReadStream(s, v);
    }
    function Ge(s, v) {
      return new e.WriteStream(s, v);
    }
    var st = e.open;
    e.open = ve;
    function ve(s, v, d, N) {
      if (typeof d === "function") N = d, d = null;
      return P(s, v, d, N);
      function P(D, k, L, _, R) {
        return st(D, k, L, function(g, Vt) {
          if (g && (g.code === "EMFILE" || g.code === "ENFILE")) V([ P, [ D, k, L, _ ], g, R || Date.now(), Date.now() ]); else if (typeof _ === "function") _.apply(this, arguments);
        });
      }
    }
    return e;
  }
  function V(e) {
    Q("ENQUEUE", e[0].name, e[1]), I[M].push(e), we();
  }
  var ae;
  function Ke() {
    var e = Date.now();
    for (var r = 0; r < I[M].length; ++r) if (I[M][r].length > 2) I[M][r][3] = e, I[M][r][4] = e;
    we();
  }
  function we() {
    if (clearTimeout(ae), ae = void 0, I[M].length === 0) return;
    var e = I[M].shift(), r = e[0], n = e[1], i = e[2], u = e[3], c = e[4];
    if (u === void 0) Q("RETRY", r.name, n), r.apply(null, n); else if (Date.now() - u >= 6e4) {
      Q("TIMEOUT", r.name, n);
      var p = n.pop();
      if (typeof p === "function") p.call(null, i);
    } else {
      var y = Date.now() - c, T = Math.max(c - u, 1), b = Math.min(T * 1.2, 100);
      if (y >= b) Q("RETRY", r.name, n), r.apply(null, n.concat([ u ])); else I[M].push(e);
    }
    if (ae === void 0) ae = setTimeout(we, 0);
  }
});

var ze = C(function(tr, Be) {
  function q(e, r) {
    if (typeof r === "boolean") r = {
      forever: r
    };
    if (this._originalTimeouts = JSON.parse(JSON.stringify(e)), this._timeouts = e, 
    this._options = r || {}, this._maxRetryTime = r && r.maxRetryTime || 1 / 0, this._fn = null, 
    this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, 
    this._timeout = null, this._operationStart = null, this._options.forever) this._cachedTimeouts = this._timeouts.slice(0);
  }
  Be.exports = q;
  q.prototype.reset = function() {
    this._attempts = 1, this._timeouts = this._originalTimeouts;
  };
  q.prototype.stop = function() {
    if (this._timeout) clearTimeout(this._timeout);
    this._timeouts = [], this._cachedTimeouts = null;
  };
  q.prototype.retry = function(e) {
    if (this._timeout) clearTimeout(this._timeout);
    if (!e) return !1;
    var r = (new Date).getTime();
    if (e && r - this._operationStart >= this._maxRetryTime) return this._errors.unshift(Error("RetryOperation timeout occurred")), 
    !1;
    this._errors.push(e);
    var n = this._timeouts.shift();
    if (n === void 0) if (this._cachedTimeouts) this._errors.splice(this._errors.length - 1, this._errors.length), 
    this._timeouts = this._cachedTimeouts.slice(0), n = this._timeouts.shift(); else return !1;
    var i = this, u = setTimeout(function() {
      if (i._attempts++, i._operationTimeoutCb) {
        if (i._timeout = setTimeout(function() {
          i._operationTimeoutCb(i._attempts);
        }, i._operationTimeout), i._options.unref) i._timeout.unref();
      }
      i._fn(i._attempts);
    }, n);
    if (this._options.unref) u.unref();
    return !0;
  };
  q.prototype.attempt = function(e, r) {
    if (this._fn = e, r) {
      if (r.timeout) this._operationTimeout = r.timeout;
      if (r.cb) this._operationTimeoutCb = r.cb;
    }
    var n = this;
    if (this._operationTimeoutCb) this._timeout = setTimeout(function() {
      n._operationTimeoutCb();
    }, n._operationTimeout);
    this._operationStart = (new Date).getTime(), this._fn(this._attempts);
  };
  q.prototype.try = function(e) {
    console.log("Using RetryOperation.try() is deprecated"), this.attempt(e);
  };
  q.prototype.start = function(e) {
    console.log("Using RetryOperation.start() is deprecated"), this.attempt(e);
  };
  q.prototype.start = q.prototype.try;
  q.prototype.errors = function() {
    return this._errors;
  };
  q.prototype.attempts = function() {
    return this._attempts;
  };
  q.prototype.mainError = function() {
    if (this._errors.length === 0) return null;
    var e = {}, r = null, n = 0;
    for (var i = 0; i < this._errors.length; i++) {
      var u = this._errors[i], c = u.message, p = (e[c] || 0) + 1;
      if (e[c] = p, p >= n) r = u, n = p;
    }
    return r;
  };
});

var Ve = C(function(Ee) {
  var Ot = ze();
  Ee.operation = function(e) {
    var r = Ee.timeouts(e);
    return new Ot(r, {
      forever: e && e.forever,
      unref: e && e.unref,
      maxRetryTime: e && e.maxRetryTime
    });
  };
  Ee.timeouts = function(e) {
    if (e instanceof Array) return [].concat(e);
    var r = {
      retries: 10,
      factor: 2,
      minTimeout: 1e3,
      maxTimeout: 1 / 0,
      randomize: !1
    };
    for (var n in e) r[n] = e[n];
    if (r.minTimeout > r.maxTimeout) throw Error("minTimeout is greater than maxTimeout");
    var i = [];
    for (var u = 0; u < r.retries; u++) i.push(this.createTimeout(u, r));
    if (e && e.forever && !i.length) i.push(this.createTimeout(u, r));
    return i.sort(function(c, p) {
      return c - p;
    }), i;
  };
  Ee.createTimeout = function(e, r) {
    var n = r.randomize ? Math.random() + 1 : 1, i = Math.round(n * r.minTimeout * Math.pow(r.factor, e));
    return i = Math.min(i, r.maxTimeout), i;
  };
  Ee.wrap = function(e, r, n) {
    if (r instanceof Array) n = r, r = null;
    if (!n) {
      n = [];
      for (var i in e) if (typeof e[i] === "function") n.push(i);
    }
    for (var u = 0; u < n.length; u++) {
      var c = n[u], p = e[c];
      e[c] = function(T) {
        var b = Ee.operation(r), o = Array.prototype.slice.call(arguments, 1), m = o.pop();
        o.push(function(f) {
          if (b.retry(f)) return;
          if (f) arguments[0] = b.mainError();
          m.apply(this, arguments);
        }), b.attempt(function() {
          T.apply(e, o);
        });
      }.bind(e, p), e[c].options = r;
    }
  };
});

var Xe = C(function(nr, le) {
  le.exports = [ "SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM" ];
  le.exports.push("SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
  le.exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED");
});

var Je = C(function(ir, J) {
  var O = global.process, B = function(e) {
    return e && typeof e === "object" && typeof e.removeListener === "function" && typeof e.emit === "function" && typeof e.reallyExit === "function" && typeof e.listeners === "function" && typeof e.kill === "function" && typeof e.pid === "number" && typeof e.on === "function";
  };
  if (!B(O)) J.exports = function() {
    return function() {};
  }; else {
    if (Te = Ne("assert"), z = Xe(), xe = /^win/i.test(O.platform), X = Ne("events"), 
    typeof X !== "function") X = X.EventEmitter;
    if (O.__signal_exit_emitter__) F = O.__signal_exit_emitter__; else F = O.__signal_exit_emitter__ = new X, 
    F.count = 0, F.emitted = {};
    if (!F.infinite) F.setMaxListeners(1 / 0), F.infinite = !0;
    J.exports = function(e, r) {
      if (!B(global.process)) return function() {};
      if (Te.equal(typeof e, "function", "a callback must be provided for exit handler"), 
      H === !1) se();
      var n = "exit";
      if (r && r.alwaysLast) n = "afterexit";
      var i = function() {
        if (F.removeListener(n, e), F.listeners("exit").length === 0 && F.listeners("afterexit").length === 0) ee();
      };
      return F.on(n, e), i;
    }, ee = function() {
      if (!H || !B(global.process)) return;
      H = !1, z.forEach(function(r) {
        try {
          O.removeListener(r, te[r]);
        } catch (n) {}
      }), O.emit = re, O.reallyExit = he, F.count -= 1;
    }, J.exports.unload = ee, Y = function(r, n, i) {
      if (F.emitted[r]) return;
      F.emitted[r] = !0, F.emit(r, n, i);
    }, te = {}, z.forEach(function(e) {
      te[e] = function() {
        if (!B(global.process)) return;
        var n = O.listeners(e);
        if (n.length === F.count) {
          if (ee(), Y("exit", null, e), Y("afterexit", null, e), xe && e === "SIGHUP") e = "SIGINT";
          O.kill(O.pid, e);
        }
      };
    }), J.exports.signals = function() {
      return z;
    }, H = !1, se = function() {
      if (H || !B(global.process)) return;
      H = !0, F.count += 1, z = z.filter(function(r) {
        try {
          return O.on(r, te[r]), !0;
        } catch (n) {
          return !1;
        }
      }), O.emit = Ie, O.reallyExit = ke;
    }, J.exports.load = se, he = O.reallyExit, ke = function(r) {
      if (!B(global.process)) return;
      O.exitCode = r || 0, Y("exit", O.exitCode, null), Y("afterexit", O.exitCode, null), 
      he.call(O, O.exitCode);
    }, re = O.emit, Ie = function(r, n) {
      if (r === "exit" && B(global.process)) {
        if (n !== void 0) O.exitCode = n;
        var i = re.apply(this, arguments);
        return Y("exit", O.exitCode, null), Y("afterexit", O.exitCode, null), i;
      } else return re.apply(this, arguments);
    };
  }
  var Te, z, xe, X, F, ee, Y, te, H, se, he, ke, re, Ie;
});

var Ze = C(function(Lt, be) {
  var Le = Symbol();
  function kt(e, r, n) {
    let i = r[Le];
    if (i) return r.stat(e, (c, p) => {
      if (c) return n(c);
      n(null, p.mtime, i);
    });
    let u = new Date(Math.ceil(Date.now() / 1e3) * 1e3 + 5);
    r.utimes(e, u, u, c => {
      if (c) return n(c);
      r.stat(e, (p, y) => {
        if (p) return n(p);
        let T = y.mtime.getTime() % 1e3 === 0 ? "s" : "ms";
        if (!(Le in r)) try {
          Object.defineProperty(r, Le, {
            value: T,
            configurable: !0
          });
        } catch {}
        n(null, y.mtime, T);
      });
    });
  }
  function It(e) {
    let r = Date.now();
    if (e === "s") r = Math.ceil(r / 1e3) * 1e3;
    return new Date(r);
  }
  Lt.probe = kt;
  Lt.getMtime = It;
});

var ot = C(function(Mt, ie) {
  var et = Ne("path"), Pe = Oe(), tt = Ve(), Dt = Je(), me = Ze(), A = {};
  function ne(e, r) {
    return r.lockfilePath || `${e}.lock`;
  }
  function Re(e, r, n) {
    if (!r.realpath) return n(null, et.resolve(e));
    r.fs.realpath(e, n);
  }
  function De(e, r, n) {
    let i = ne(e, r);
    r.fs.mkdir(i, u => {
      if (!u) return me.probe(i, r.fs, (c, p, y) => {
        if (c) return r.fs.rmdir(i, () => {}), n(c);
        n(null, p, y);
      });
      if (u.code !== "EEXIST") return n(u);
      if (r.stale <= 0) return n(Object.assign(Error("Lock file is already being held"), {
        code: "ELOCKED",
        file: e
      }));
      r.fs.stat(i, (c, p) => {
        if (c) {
          if (c.code === "ENOENT") return De(e, {
            ...r,
            stale: 0
          }, n);
          return n(c);
        }
        if (!rt(p, r)) return n(Object.assign(Error("Lock file is already being held"), {
          code: "ELOCKED",
          file: e
        }));
        nt(e, r, y => {
          if (y) return n(y);
          De(e, {
            ...r,
            stale: 0
          }, n);
        });
      });
    });
  }
  function rt(e, r) {
    return e.mtime.getTime() < Date.now() - r.stale;
  }
  function nt(e, r, n) {
    r.fs.rmdir(ne(e, r), i => {
      if (i && i.code !== "ENOENT") return n(i);
      n();
    });
  }
  function pe(e, r) {
    let n = A[e];
    if (n.updateTimeout) return;
    if (n.updateDelay = n.updateDelay || r.update, n.updateTimeout = setTimeout(() => {
      n.updateTimeout = null, r.fs.stat(n.lockfilePath, (i, u) => {
        let c = n.lastUpdate + r.stale < Date.now();
        if (i) {
          if (i.code === "ENOENT" || c) return Fe(e, n, Object.assign(i, {
            code: "ECOMPROMISED"
          }));
          return n.updateDelay = 1e3, pe(e, r);
        }
        if (n.mtime.getTime() !== u.mtime.getTime()) return Fe(e, n, Object.assign(Error("Unable to update lock within the stale threshold"), {
          code: "ECOMPROMISED"
        }));
        let y = me.getMtime(n.mtimePrecision);
        r.fs.utimes(n.lockfilePath, y, y, T => {
          let b = n.lastUpdate + r.stale < Date.now();
          if (n.released) return;
          if (T) {
            if (T.code === "ENOENT" || b) return Fe(e, n, Object.assign(T, {
              code: "ECOMPROMISED"
            }));
            return n.updateDelay = 1e3, pe(e, r);
          }
          n.mtime = y, n.lastUpdate = Date.now(), n.updateDelay = null, pe(e, r);
        });
      });
    }, n.updateDelay), n.updateTimeout.unref) n.updateTimeout.unref();
  }
  function Fe(e, r, n) {
    if (r.released = !0, r.updateTimeout) clearTimeout(r.updateTimeout);
    if (A[e] === r) delete A[e];
    r.options.onCompromised(n);
  }
  function Nt(e, r, n) {
    r = {
      stale: 1e4,
      update: null,
      realpath: !0,
      retries: 0,
      fs: Pe,
      onCompromised: i => {
        throw i;
      },
      ...r
    }, r.retries = r.retries || 0, r.retries = typeof r.retries === "number" ? {
      retries: r.retries
    } : r.retries, r.stale = Math.max(r.stale || 0, 2e3), r.update = r.update == null ? r.stale / 2 : r.update || 0, 
    r.update = Math.max(Math.min(r.update, r.stale / 2), 1e3), Re(e, r, (i, u) => {
      if (i) return n(i);
      let c = tt.operation(r.retries);
      c.attempt(() => {
        De(u, r, (p, y, T) => {
          if (c.retry(p)) return;
          if (p) return n(c.mainError());
          let b = A[u] = {
            lockfilePath: ne(u, r),
            mtime: y,
            mtimePrecision: T,
            options: r,
            lastUpdate: Date.now()
          };
          pe(u, r), n(null, o => {
            if (b.released) return o && o(Object.assign(Error("Lock is already released"), {
              code: "ERELEASED"
            }));
            it(u, {
              ...r,
              realpath: !1
            }, o);
          });
        });
      });
    });
  }
  function it(e, r, n) {
    r = {
      fs: Pe,
      realpath: !0,
      ...r
    }, Re(e, r, (i, u) => {
      if (i) return n(i);
      let c = A[u];
      if (!c) return n(Object.assign(Error("Lock is not acquired/owned by you"), {
        code: "ENOTACQUIRED"
      }));
      c.updateTimeout && clearTimeout(c.updateTimeout), c.released = !0, delete A[u], 
      nt(u, r, n);
    });
  }
  function Pt(e, r, n) {
    r = {
      stale: 1e4,
      realpath: !0,
      fs: Pe,
      ...r
    }, r.stale = Math.max(r.stale || 0, 2e3), Re(e, r, (i, u) => {
      if (i) return n(i);
      r.fs.stat(ne(u, r), (c, p) => {
        if (c) return c.code === "ENOENT" ? n(null, !1) : n(c);
        return n(null, !rt(p, r));
      });
    });
  }
  function Rt() {
    return A;
  }
  Dt(() => {
    for (let e in A) {
      let r = A[e].options;
      try {
        r.fs.rmdirSync(ne(e, r));
      } catch (n) {}
    }
  });
  Mt.lock = Nt;
  Mt.unlock = it;
  Mt.check = Pt;
  Mt.getLocks = Rt;
});

var ct = C(function(or, ut) {
  var Ut = Oe();
  function At(e) {
    let r = [ "mkdir", "realpath", "stat", "rmdir", "utimes" ], n = {
      ...e
    };
    return r.forEach(i => {
      n[i] = (...u) => {
        let c = u.pop(), p;
        try {
          p = e[`${i}Sync`](...u);
        } catch (y) {
          return c(y);
        }
        c(null, p);
      };
    }), n;
  }
  function $t(e) {
    return (...r) => new Promise((n, i) => {
      r.push((u, c) => {
        if (u) i(u); else n(c);
      }), e(...r);
    });
  }
  function Wt(e) {
    return (...r) => {
      let n, i;
      if (r.push((u, c) => {
        n = u, i = c;
      }), e(...r), n) throw n;
      return i;
    };
  }
  function Yt(e) {
    if (e = {
      ...e
    }, e.fs = At(e.fs || Ut), typeof e.retries === "number" && e.retries > 0 || e.retries && typeof e.retries.retries === "number" && e.retries.retries > 0) throw Object.assign(Error("Cannot use retries with the sync api"), {
      code: "ESYNC"
    });
    return e;
  }
  ut.exports = {
    toPromise: $t,
    toSync: Wt,
    toSyncOptions: Yt
  };
});

var ft = C(function(ur, K) {
  var U = ot(), {toPromise: ye, toSync: de, toSyncOptions: Me} = ct();
  async function at(e, r) {
    let n = await ye(U.lock)(e, r);
    return ye(n);
  }
  function Kt(e, r) {
    let n = de(U.lock)(e, Me(r));
    return de(n);
  }
  function Qt(e, r) {
    return ye(U.unlock)(e, r);
  }
  function Bt(e, r) {
    return de(U.unlock)(e, Me(r));
  }
  function zt(e, r) {
    return ye(U.check)(e, r);
  }
  function Ht(e, r) {
    return de(U.check)(e, Me(r));
  }
  K.exports = at;
  K.exports.lock = at;
  K.exports.unlock = Qt;
  K.exports.lockSync = Kt;
  K.exports.unlockSync = Bt;
  K.exports.check = zt;
  K.exports.checkSync = Ht;
});

function lt() {
  return ft();
}

async function Ja(e, r) {
  let n = await lt().lock(e, r);
  return Object.assign(n, {
    [Symbol.asyncDispose]: n
  });
}

function r$s(e, r) {
  return lt().check(e, r);
}

async function Om(e, r) {
  if (!e) return;
  try {
    await e();
  } catch (n) {
    let i;
    try {
      let u = E(n);
      i = u === "ERELEASED" || u === "ENOTACQUIRED" ? `lock was no longer held at release (${u}); the locked section may have run without exclusivity` : `lock directory could not be removed and is left to go stale: ${l(n)}`;
    } catch {
      i = "lock release rejected with a value that cannot be described";
    }
    t(`${r}: ${i}`, {
      level: "warn"
    });
  }
}

export { Ja, r$s, Om };
