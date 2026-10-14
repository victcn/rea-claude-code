// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { C, Ne } from "./chunk-m8ez8fhk.js";

var d = C(function(D, W) {
  /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var A = Ne("buffer"), p = A.Buffer;
  function U(e, r) {
    for (var t in e) r[t] = e[t];
  }
  if (p.from && p.alloc && p.allocUnsafe && p.allocUnsafeSlow) W.exports = A; else U(A, D), 
  D.Buffer = y;
  function y(e, r, t) {
    return p(e, r, t);
  }
  y.prototype = Object.create(p.prototype);
  U(p, y);
  y.from = function(e, r, t) {
    if (typeof e === "number") throw TypeError("Argument must not be a number");
    return p(e, r, t);
  };
  y.alloc = function(e, r, t) {
    if (typeof e !== "number") throw TypeError("Argument must be a number");
    var n = p(e);
    if (r !== void 0) if (typeof t === "string") n.fill(r, t); else n.fill(r); else n.fill(0);
    return n;
  };
  y.allocUnsafe = function(e) {
    if (typeof e !== "number") throw TypeError("Argument must be a number");
    return p(e);
  };
  y.allocUnsafeSlow = function(e) {
    if (typeof e !== "number") throw TypeError("Argument must be a number");
    return A.SlowBuffer(e);
  };
});

var Q = C(function(_r, Z) {
  function V(e) {
    var r = (e / 8 | 0) + (e % 8 === 0 ? 0 : 1);
    return r;
  }
  var Oe = {
    ES256: V(256),
    ES384: V(384),
    ES512: V(521)
  };
  function De(e) {
    var r = Oe[e];
    if (r) return r;
    throw Error('Unknown algorithm "' + e + '"');
  }
  Z.exports = De;
});

var iwo = C(function(Tr, re) {
  var B = d().Buffer, Y = Q(), _ = 128, z = 0, Ve = 32, Ke = 16, He = 2, k = Ke | Ve | z << 6, T = He | z << 6;
  function Ge(e) {
    return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function ee(e) {
    if (B.isBuffer(e)) return e; else if (typeof e === "string") return B.from(e, "base64");
    throw TypeError("ECDSA signature must be a Base64 string or a Buffer");
  }
  function Je(e, r) {
    e = ee(e);
    var t = Y(r), n = t + 1, a = e.length, i = 0;
    if (e[i++] !== k) throw Error('Could not find expected "seq"');
    var u = e[i++];
    if (u === (_ | 1)) u = e[i++];
    if (a - i < u) throw Error('"seq" specified length of "' + u + '", only "' + (a - i) + '" remaining');
    if (e[i++] !== T) throw Error('Could not find expected "int" for "r"');
    var s = e[i++];
    if (a - i - 2 < s) throw Error('"r" specified length of "' + s + '", only "' + (a - i - 2) + '" available');
    if (n < s) throw Error('"r" specified length of "' + s + '", max of "' + n + '" is acceptable');
    var S = i;
    if (i += s, e[i++] !== T) throw Error('Could not find expected "int" for "s"');
    var l = e[i++];
    if (a - i !== l) throw Error('"s" specified length of "' + l + '", expected "' + (a - i) + '"');
    if (n < l) throw Error('"s" specified length of "' + l + '", max of "' + n + '" is acceptable');
    var o = i;
    if (i += l, i !== a) throw Error('Expected to consume entire buffer, but "' + (a - i) + '" bytes remain');
    var f = t - s, O = t - l, v = B.allocUnsafe(f + s + O + l);
    for (i = 0; i < f; ++i) v[i] = 0;
    e.copy(v, i, S + Math.max(-f, 0), S + s), i = t;
    for (var Re = i; i < Re + O; ++i) v[i] = 0;
    return e.copy(v, i, o + Math.max(-O, 0), o + l), v = v.toString("base64"), v = Ge(v), 
    v;
  }
  function X(e, r, t) {
    var n = 0;
    while (r + n < t && e[r + n] === 0) ++n;
    var a = e[r + n] >= _;
    if (a) --n;
    return n;
  }
  function Me(e, r) {
    e = ee(e);
    var t = Y(r), n = e.length;
    if (n !== t * 2) throw TypeError('"' + r + '" signatures must be "' + t * 2 + '" bytes, saw "' + n + '"');
    var a = X(e, 0, t), i = X(e, t, e.length), u = t - a, s = t - i, S = 2 + u + 1 + 1 + s, l = S < _, o = B.allocUnsafe((l ? 2 : 3) + S), f = 0;
    if (o[f++] = k, l) o[f++] = S; else o[f++] = _ | 1, o[f++] = S & 255;
    if (o[f++] = T, o[f++] = u, a < 0) o[f++] = 0, f += e.copy(o, f, 0, t); else f += e.copy(o, f, a, t);
    if (o[f++] = T, o[f++] = s, i < 0) o[f++] = 0, e.copy(o, f, t); else e.copy(o, f, t + i);
    return o;
  }
  re.exports = {
    derToJose: Je,
    joseToDer: Me
  };
});

var K = C(function(Ir, te) {
  var I = d().Buffer, je = Ne("stream"), Ce = Ne("util");
  function x(e) {
    if (this.buffer = null, this.writable = !0, this.readable = !0, !e) return this.buffer = I.alloc(0), 
    this;
    if (typeof e.pipe === "function") return this.buffer = I.alloc(0), e.pipe(this), 
    this;
    if (e.length || typeof e === "object") return this.buffer = e, this.writable = !1, 
    process.nextTick(function() {
      this.emit("end", e), this.readable = !1, this.emit("close");
    }.bind(this)), this;
    throw TypeError("Unexpected data type (" + typeof e + ")");
  }
  Ce.inherits(x, je);
  x.prototype.write = function(r) {
    this.buffer = I.concat([ this.buffer, I.from(r) ]), this.emit("data", r);
  };
  x.prototype.end = function(r) {
    if (r) this.write(r);
    this.emit("end", r), this.emit("close"), this.writable = !1, this.readable = !1;
  };
  te.exports = x;
});

var ie = C(function(xr, ne) {
  var w = Ne("buffer").Buffer, N = Ne("buffer").SlowBuffer;
  ne.exports = P;
  function P(e, r) {
    if (!w.isBuffer(e) || !w.isBuffer(r)) return !1;
    if (e.length !== r.length) return !1;
    var t = 0;
    for (var n = 0; n < e.length; n++) t |= e[n] ^ r[n];
    return t === 0;
  }
  P.install = function() {
    w.prototype.equal = N.prototype.equal = function(r) {
      return P(this, r);
    };
  };
  var Fe = w.prototype.equal, Ue = N.prototype.equal;
  P.restore = function() {
    w.prototype.equal = Fe, N.prototype.equal = Ue;
  };
});

var M = C(function(Pr, pe) {
  var g = d().Buffer, c = Ne("crypto"), fe = iwo(), ae = Ne("util"), We = `"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`, E = "secret must be a string or buffer", m = "key must be a string or a buffer", Ze = "key must be a string, a buffer or an object", G = typeof c.createPublicKey === "function";
  if (G) m += " or a KeyObject", E += "or a KeyObject";
  function oe(e) {
    if (g.isBuffer(e)) return;
    if (typeof e === "string") return;
    if (!G) throw h(m);
    if (typeof e !== "object") throw h(m);
    if (typeof e.type !== "string") throw h(m);
    if (typeof e.asymmetricKeyType !== "string") throw h(m);
    if (typeof e.export !== "function") throw h(m);
  }
  function ue(e) {
    if (g.isBuffer(e)) return;
    if (typeof e === "string") return;
    if (typeof e === "object") return;
    throw h(Ze);
  }
  function $e(e) {
    if (g.isBuffer(e)) return;
    if (typeof e === "string") return e;
    if (!G) throw h(E);
    if (typeof e !== "object") throw h(E);
    if (e.type !== "secret") throw h(E);
    if (typeof e.export !== "function") throw h(E);
  }
  function J(e) {
    return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function se(e) {
    e = e.toString();
    var r = 4 - e.length % 4;
    if (r !== 4) for (var t = 0; t < r; ++t) e += "=";
    return e.replace(/\-/g, "+").replace(/_/g, "/");
  }
  function h(e) {
    var r = [].slice.call(arguments, 1), t = ae.format.bind(ae, e).apply(null, r);
    return TypeError(t);
  }
  function Qe(e) {
    return g.isBuffer(e) || typeof e === "string";
  }
  function q(e) {
    if (!Qe(e)) e = JSON.stringify(e);
    return e;
  }
  function ce(e) {
    return function(t, n) {
      $e(n), t = q(t);
      var a = c.createHmac("sha" + e, n), i = (a.update(t), a.digest("base64"));
      return J(i);
    };
  }
  var H, Xe = "timingSafeEqual" in c ? function(r, t) {
    if (r.byteLength !== t.byteLength) return !1;
    return c.timingSafeEqual(r, t);
  } : function(r, t) {
    if (!H) H = ie();
    return H(r, t);
  };
  function Ye(e) {
    return function(t, n, a) {
      var i = ce(e)(t, a);
      return Xe(g.from(n), g.from(i));
    };
  }
  function le(e) {
    return function(t, n) {
      ue(n), t = q(t);
      var a = c.createSign("RSA-SHA" + e), i = (a.update(t), a.sign(n, "base64"));
      return J(i);
    };
  }
  function he(e) {
    return function(t, n, a) {
      oe(a), t = q(t), n = se(n);
      var i = c.createVerify("RSA-SHA" + e);
      return i.update(t), i.verify(a, n, "base64");
    };
  }
  function ze(e) {
    return function(t, n) {
      ue(n), t = q(t);
      var a = c.createSign("RSA-SHA" + e), i = (a.update(t), a.sign({
        key: n,
        padding: c.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: c.constants.RSA_PSS_SALTLEN_DIGEST
      }, "base64"));
      return J(i);
    };
  }
  function ke(e) {
    return function(t, n, a) {
      oe(a), t = q(t), n = se(n);
      var i = c.createVerify("RSA-SHA" + e);
      return i.update(t), i.verify({
        key: a,
        padding: c.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: c.constants.RSA_PSS_SALTLEN_DIGEST
      }, n, "base64");
    };
  }
  function er(e) {
    var r = le(e);
    return function() {
      var n = r.apply(null, arguments);
      return n = fe.derToJose(n, "ES" + e), n;
    };
  }
  function rr(e) {
    var r = he(e);
    return function(n, a, i) {
      a = fe.joseToDer(a, "ES" + e).toString("base64");
      var u = r(n, a, i);
      return u;
    };
  }
  function tr() {
    return function() {
      return "";
    };
  }
  function nr() {
    return function(r, t) {
      return t === "";
    };
  }
  pe.exports = function(r) {
    var t = {
      hs: ce,
      rs: le,
      ps: ze,
      es: er,
      none: tr
    }, n = {
      hs: Ye,
      rs: he,
      ps: ke,
      es: rr,
      none: nr
    }, a = r.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
    if (!a) throw h(We, r);
    var i = (a[1] || a[3]).toLowerCase(), u = a[2];
    return {
      sign: t[i](u),
      verify: n[i](u)
    };
  };
});

var j = C(function(Lr, ve) {
  var ir = Ne("buffer").Buffer;
  ve.exports = function(r) {
    if (typeof r === "string") return r;
    if (typeof r === "number" || ir.isBuffer(r)) return r.toString();
    return JSON.stringify(r);
  };
});

var be = C(function(Rr, ge) {
  var ar = d().Buffer, Se = K(), fr = M(), or = Ne("stream"), ye = j(), F = Ne("util");
  function de(e, r) {
    return ar.from(e, r).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function ur(e, r, t) {
    t = t || "utf8";
    var n = de(ye(e), "binary"), a = de(ye(r), t);
    return F.format("%s.%s", n, a);
  }
  function me(e) {
    var {header: r, payload: t} = e, n = e.secret || e.privateKey, a = e.encoding, i = fr(r.alg), u = ur(r, t, a), s = i.sign(u, n);
    return F.format("%s.%s", u, s);
  }
  function L(e) {
    var r = e.secret;
    if (r = r == null ? e.privateKey : r, r = r == null ? e.key : r, /^hs/i.test(e.header.alg) === !0 && r == null) throw TypeError("secret must be a string or buffer or a KeyObject");
    var t = new Se(r);
    this.readable = !0, this.header = e.header, this.encoding = e.encoding, this.secret = this.privateKey = this.key = t, 
    this.payload = new Se(e.payload), this.secret.once("close", function() {
      if (!this.payload.writable && this.readable) this.sign();
    }.bind(this)), this.payload.once("close", function() {
      if (!this.secret.writable && this.readable) this.sign();
    }.bind(this));
  }
  F.inherits(L, or);
  L.prototype.sign = function() {
    try {
      var r = me({
        header: this.header,
        payload: this.payload.buffer,
        secret: this.secret.buffer,
        encoding: this.encoding
      });
      return this.emit("done", r), this.emit("data", r), this.emit("end"), this.readable = !1, 
      r;
    } catch (t) {
      this.readable = !1, this.emit("error", t), this.emit("close");
    }
  };
  L.sign = me;
  ge.exports = L;
});

var Pe = C(function(Or, xe) {
  var Ee = d().Buffer, we = K(), sr = M(), cr = Ne("stream"), qe = j(), lr = Ne("util"), hr = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
  function pr(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function vr(e) {
    if (pr(e)) return e;
    try {
      return JSON.parse(e);
    } catch (r) {
      return;
    }
  }
  function Ae(e) {
    var r = e.split(".", 1)[0];
    return vr(Ee.from(r, "base64").toString("binary"));
  }
  function Sr(e) {
    return e.split(".", 2).join(".");
  }
  function Be(e) {
    return e.split(".")[2];
  }
  function yr(e, r) {
    r = r || "utf8";
    var t = e.split(".")[1];
    return Ee.from(t, "base64").toString(r);
  }
  function _e(e) {
    return hr.test(e) && !!Ae(e);
  }
  function Te(e, r, t) {
    if (!r) {
      var n = Error("Missing algorithm parameter for jws.verify");
      throw n.code = "MISSING_ALGORITHM", n;
    }
    e = qe(e);
    var a = Be(e), i = Sr(e), u = sr(r);
    return u.verify(i, a, t);
  }
  function Ie(e, r) {
    if (r = r || {}, e = qe(e), !_e(e)) return null;
    var t = Ae(e);
    if (!t) return null;
    var n = yr(e);
    if (t.typ === "JWT" || r.json) n = JSON.parse(n, r.encoding);
    return {
      header: t,
      payload: n,
      signature: Be(e)
    };
  }
  function b(e) {
    e = e || {};
    var r = e.secret;
    if (r = r == null ? e.publicKey : r, r = r == null ? e.key : r, /^hs/i.test(e.algorithm) === !0 && r == null) throw TypeError("secret must be a string or buffer or a KeyObject");
    var t = new we(r);
    this.readable = !0, this.algorithm = e.algorithm, this.encoding = e.encoding, this.secret = this.publicKey = this.key = t, 
    this.signature = new we(e.signature), this.secret.once("close", function() {
      if (!this.signature.writable && this.readable) this.verify();
    }.bind(this)), this.signature.once("close", function() {
      if (!this.secret.writable && this.readable) this.verify();
    }.bind(this));
  }
  lr.inherits(b, cr);
  b.prototype.verify = function() {
    try {
      var r = Te(this.signature.buffer, this.algorithm, this.key.buffer), t = Ie(this.signature.buffer, this.encoding);
      return this.emit("done", r, t), this.emit("data", r), this.emit("end"), this.readable = !1, 
      r;
    } catch (n) {
      this.readable = !1, this.emit("error", n), this.emit("close");
    }
  };
  b.decode = Ie;
  b.isValid = _e;
  b.verify = Te;
  xe.exports = b;
});

var EHt = C(function(mr) {
  var Le = be(), R = Pe(), dr = [ "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" ];
  mr.ALGORITHMS = dr;
  mr.sign = Le.sign;
  mr.verify = R.verify;
  mr.decode = R.decode;
  mr.isValid = R.isValid;
  mr.createSign = function(r) {
    return new Le(r);
  };
  mr.createVerify = function(r) {
    return new R(r);
  };
});

export { iwo, EHt };
