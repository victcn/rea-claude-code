// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { IHt, dwo, qRs } from "./chunk-0xf5tvmq.js";

import { ROo, dgt } from "./chunk-e2610wvk.js";

import { EHt } from "./chunk-b83vyyf5.js";

import { vy } from "./chunk-s2t7g8m9.js";

import { COo, Oan } from "./chunk-vps0k559.js";

import { we, C, Ne } from "./chunk-m8ez8fhk.js";

var Ml = C(function(ze) {
  var rp = ze && ze.__createBinding || (Object.create ? function(e, t, r, n) {
    if (n === void 0) n = r;
    var o = Object.getOwnPropertyDescriptor(t, r);
    if (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) o = {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    };
    Object.defineProperty(e, n, o);
  } : function(e, t, r, n) {
    if (n === void 0) n = r;
    e[n] = t[r];
  }), np = ze && ze.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function(e, t) {
    e.default = t;
  }), Ol = ze && ze.__importStar || function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null) {
      for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) rp(t, e, r);
    }
    return np(t, e), t;
  }, op = ze && ze.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(ze, "__esModule", {
    value: !0
  });
  ze.HttpProxyAgent = void 0;
  var ip = Ol(Ne("net")), sp = Ol(Ne("tls")), ap = op(Oan()), Nl = Ne("events"), xl = ROo(), qo = Ne("url"), qr = (0, 
  ap.default)("http-proxy-agent");
  class la extends xl.Agent {
    constructor(e, t) {
      super(t);
      this.proxy = typeof e === "string" ? new qo.URL(e) : e, this.proxyHeaders = t?.headers ?? {}, 
      qr("Creating new HttpProxyAgent instance: %o", this.proxy.href);
      let r = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""), n = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
      this.connectOpts = {
        ...t ? cp(t, "headers") : null,
        host: r,
        port: n
      };
    }
    addRequest(e, t) {
      e._header = null, this.setRequestProps(e, t), super.addRequest(e, t);
    }
    setRequestProps(e, t) {
      let {proxy: r} = this, n = t.secureEndpoint ? "https:" : "http:", o = e.getHeader("host") || "localhost", i = `${n}//${o}`, s = new qo.URL(e.path, i);
      if (t.port !== 80) s.port = String(t.port);
      e.path = String(s);
      let a = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
        ...this.proxyHeaders
      };
      if (r.username || r.password) {
        let c = `${decodeURIComponent(r.username)}:${decodeURIComponent(r.password)}`;
        a["Proxy-Authorization"] = `Basic ${Buffer.from(c).toString("base64")}`;
      }
      if (!a["Proxy-Connection"]) a["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
      for (let c of Object.keys(a)) {
        let l = a[c];
        if (l) e.setHeader(c, l);
      }
    }
    async connect(e, t) {
      if (e._header = null, !e.path.includes("://")) this.setRequestProps(e, t);
      let r, n;
      if (qr("Regenerating stored HTTP header string for request"), e._implicitHeader(), 
      e.outputData && e.outputData.length > 0) qr("Patching connection write() output buffer with updated header"), 
      r = e.outputData[0].data, n = r.indexOf(`\r\n\r\n`) + 4, e.outputData[0].data = e._header + r.substring(n), 
      qr("Output buffer: %o", e.outputData[0].data);
      let o;
      if (this.proxy.protocol === "https:") qr("Creating `tls.Socket`: %o", this.connectOpts), 
      o = sp.connect(this.connectOpts); else qr("Creating `net.Socket`: %o", this.connectOpts), 
      o = ip.connect(this.connectOpts);
      return await Nl.once(o, "connect"), o;
    }
  }
  la.protocols = [ "http", "https" ];
  ze.HttpProxyAgent = la;
  function cp(e, ...t) {
    let r = {}, n;
    for (n in e) if (!t.includes(n)) r[n] = e[n];
    return r;
  }
});

var hd = C(function(dd) {
  Object.defineProperty(dd, "__esModule", {
    value: !0
  });
  dd.state = void 0;
  dd.state = {
    instrumenterImplementation: void 0
  };
});

var _d = C(function(Ad) {
  Object.defineProperty(Ad, "__esModule", {
    value: !0
  });
  Ad.state = void 0;
  Ad.state = {
    operationRequestMap: new WeakMap
  };
});

var ic = C(function(X0, Mh) {
  var fy = EHt();
  Mh.exports = function(e, t) {
    t = t || {};
    var r = fy.decode(e, t);
    if (!r) return null;
    var n = r.payload;
    if (typeof n === "string") try {
      var o = JSON.parse(n);
      if (o !== null && typeof o === "object") n = o;
    } catch (i) {}
    if (t.complete === !0) return {
      header: r.header,
      payload: n,
      signature: r.signature
    };
    return n;
  };
});

var vo = C(function(Z0, Dh) {
  var cs = function(e, t) {
    if (Error.call(this, e), Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    if (this.name = "JsonWebTokenError", this.message = e, t) this.inner = t;
  };
  cs.prototype = Object.create(Error.prototype);
  cs.prototype.constructor = cs;
  Dh.exports = cs;
});

var sc = C(function(eL, Lh) {
  var Uh = vo(), ls = function(e, t) {
    Uh.call(this, e), this.name = "NotBeforeError", this.date = t;
  };
  ls.prototype = Object.create(Uh.prototype);
  ls.prototype.constructor = ls;
  Lh.exports = ls;
});

var ac = C(function(tL, Fh) {
  var Hh = vo(), ds = function(e, t) {
    Hh.call(this, e), this.name = "TokenExpiredError", this.expiredAt = t;
  };
  ds.prototype = Object.create(Hh.prototype);
  ds.prototype.constructor = ds;
  Fh.exports = ds;
});

var cc = C(function(rL, $h) {
  var my = COo();
  $h.exports = function(e, t) {
    var r = t || Math.floor(Date.now() / 1e3);
    if (typeof e === "string") {
      var n = my(e);
      if (typeof n > "u") return;
      return Math.floor(r + n / 1e3);
    } else if (typeof e === "number") return r + e; else return;
  };
});

var Gh = C(function(nL, zh) {
  var Bh = vy();
  zh.exports = Bh.satisfies(process.version, ">=15.7.0");
});

var Vh = C(function(oL, Kh) {
  var qh = vy();
  Kh.exports = qh.satisfies(process.version, ">=16.9.0");
});

var lc = C(function(iL, jh) {
  var py = Gh(), gy = Vh(), yy = {
    ec: [ "ES256", "ES384", "ES512" ],
    rsa: [ "RS256", "PS256", "RS384", "PS384", "RS512", "PS512" ],
    "rsa-pss": [ "PS256", "PS384", "PS512" ]
  }, Ty = {
    ES256: "prime256v1",
    ES384: "secp384r1",
    ES512: "secp521r1"
  };
  jh.exports = function(e, t) {
    if (!e || !t) return;
    let r = t.asymmetricKeyType;
    if (!r) return;
    let n = yy[r];
    if (!n) throw Error(`Unknown key type "${r}".`);
    if (!n.includes(e)) throw Error(`"alg" parameter for "${r}" key type must be one of: ${n.join(", ")}.`);
    if (py) switch (r) {
     case "ec":
      let o = t.asymmetricKeyDetails.namedCurve, i = Ty[e];
      if (o !== i) throw Error(`"alg" parameter "${e}" requires curve "${i}".`);
      break;

     case "rsa-pss":
      if (gy) {
        let s = parseInt(e.slice(-3), 10), {hashAlgorithm: a, mgf1HashAlgorithm: c, saltLength: l} = t.asymmetricKeyDetails;
        if (a !== `sha${s}` || c !== a) throw Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${e}.`);
        if (l !== void 0 && l > s >> 3) throw Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${e}.`);
      }
      break;
    }
  };
});

var dc = C(function(sL, Yh) {
  var Ey = vy();
  Yh.exports = Ey.satisfies(process.version, "^6.12.0 || >=8.0.0");
});

var Xh = C(function(aL, Jh) {
  var W = vo(), Cy = sc(), Wh = ac(), Ay = ic(), Iy = cc(), _y = lc(), Sy = dc(), Qh = EHt(), {KeyObject: Ry, createSecretKey: wy, createPublicKey: ky} = Ne("crypto"), uc = [ "RS256", "RS384", "RS512" ], by = [ "ES256", "ES384", "ES512" ], hc = [ "RS256", "RS384", "RS512" ], Py = [ "HS256", "HS384", "HS512" ];
  if (Sy) uc.splice(uc.length, 0, "PS256", "PS384", "PS512"), hc.splice(hc.length, 0, "PS256", "PS384", "PS512");
  Jh.exports = function(e, t, r, n) {
    if (typeof r === "function" && !n) n = r, r = {};
    if (!r) r = {};
    r = Object.assign({}, r);
    let o;
    if (n) o = n; else o = function(d, u) {
      if (d) throw d;
      return u;
    };
    if (r.clockTimestamp && typeof r.clockTimestamp !== "number") return o(new W("clockTimestamp must be a number"));
    if (r.nonce !== void 0 && (typeof r.nonce !== "string" || r.nonce.trim() === "")) return o(new W("nonce must be a non-empty string"));
    if (r.allowInvalidAsymmetricKeyTypes !== void 0 && typeof r.allowInvalidAsymmetricKeyTypes !== "boolean") return o(new W("allowInvalidAsymmetricKeyTypes must be a boolean"));
    let i = r.clockTimestamp || Math.floor(Date.now() / 1e3);
    if (!e) return o(new W("jwt must be provided"));
    if (typeof e !== "string") return o(new W("jwt must be a string"));
    let s = e.split(".");
    if (s.length !== 3) return o(new W("jwt malformed"));
    let a;
    try {
      a = Ay(e, {
        complete: !0
      });
    } catch (d) {
      return o(d);
    }
    if (!a) return o(new W("invalid token"));
    let c = a.header, l;
    if (typeof t === "function") {
      if (!n) return o(new W("verify must be called asynchronous if secret or public key is provided as a callback"));
      l = t;
    } else l = function(d, u) {
      return u(null, t);
    };
    return l(c, function(d, u) {
      if (d) return o(new W("error in secret or public key callback: " + d.message));
      let m = s[2].trim() !== "";
      if (!m && u) return o(new W("jwt signature is required"));
      if (m && !u) return o(new W("secret or public key must be provided"));
      if (!m && !r.algorithms) return o(new W('please specify "none" in "algorithms" to verify unsigned tokens'));
      if (u != null && !(u instanceof Ry)) try {
        u = ky(u);
      } catch (T) {
        try {
          u = wy(typeof u === "string" ? Buffer.from(u) : u);
        } catch (_) {
          return o(new W("secretOrPublicKey is not valid key material"));
        }
      }
      if (!r.algorithms) if (u.type === "secret") r.algorithms = Py; else if ([ "rsa", "rsa-pss" ].includes(u.asymmetricKeyType)) r.algorithms = hc; else if (u.asymmetricKeyType === "ec") r.algorithms = by; else r.algorithms = uc;
      if (r.algorithms.indexOf(a.header.alg) === -1) return o(new W("invalid algorithm"));
      if (c.alg.startsWith("HS") && u.type !== "secret") return o(new W(`secretOrPublicKey must be a symmetric key when using ${c.alg}`)); else if (/^(?:RS|PS|ES)/.test(c.alg) && u.type !== "public") return o(new W(`secretOrPublicKey must be an asymmetric key when using ${c.alg}`));
      if (!r.allowInvalidAsymmetricKeyTypes) try {
        _y(c.alg, u);
      } catch (T) {
        return o(T);
      }
      let p;
      try {
        p = Qh.verify(e, a.header.alg, u);
      } catch (T) {
        return o(T);
      }
      if (!p) return o(new W("invalid signature"));
      let y = a.payload;
      if (typeof y.nbf < "u" && !r.ignoreNotBefore) {
        if (typeof y.nbf !== "number") return o(new W("invalid nbf value"));
        if (y.nbf > i + (r.clockTolerance || 0)) return o(new Cy("jwt not active", new Date(y.nbf * 1e3)));
      }
      if (typeof y.exp < "u" && !r.ignoreExpiration) {
        if (typeof y.exp !== "number") return o(new W("invalid exp value"));
        if (i >= y.exp + (r.clockTolerance || 0)) return o(new Wh("jwt expired", new Date(y.exp * 1e3)));
      }
      if (r.audience) {
        let T = Array.isArray(r.audience) ? r.audience : [ r.audience ];
        if (!(Array.isArray(y.aud) ? y.aud : [ y.aud ]).some(function(U) {
          return T.some(function(B) {
            return B instanceof RegExp ? B.test(U) : B === U;
          });
        })) return o(new W("jwt audience invalid. expected: " + T.join(" or ")));
      }
      if (r.issuer) {
        if (typeof r.issuer === "string" && y.iss !== r.issuer || Array.isArray(r.issuer) && r.issuer.indexOf(y.iss) === -1) return o(new W("jwt issuer invalid. expected: " + r.issuer));
      }
      if (r.subject) {
        if (y.sub !== r.subject) return o(new W("jwt subject invalid. expected: " + r.subject));
      }
      if (r.jwtid) {
        if (y.jti !== r.jwtid) return o(new W("jwt jwtid invalid. expected: " + r.jwtid));
      }
      if (r.nonce) {
        if (y.nonce !== r.nonce) return o(new W("jwt nonce invalid. expected: " + r.nonce));
      }
      if (r.maxAge) {
        if (typeof y.iat !== "number") return o(new W("iat required when maxAge is specified"));
        let T = Iy(r.maxAge, y.iat);
        if (typeof T > "u") return o(new W('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        if (i >= T + (r.clockTolerance || 0)) return o(new Wh("maxAge exceeded", new Date(T * 1e3)));
      }
      if (r.complete === !0) {
        let T = a.signature;
        return o(null, {
          header: c,
          payload: y,
          signature: T
        });
      }
      return o(null, y);
    });
  };
});

var of = C(function(cL, nf) {
  var Zh = 1 / 0, tf = 9007199254740991, Oy = 17976931348623157e292, ef = NaN, Ny = "[object Arguments]", xy = "[object Function]", My = "[object GeneratorFunction]", Dy = "[object String]", Uy = "[object Symbol]", Ly = /^\s+|\s+$/g, Hy = /^[-+]0x[0-9a-f]+$/i, Fy = /^0b[01]+$/i, $y = /^0o[0-7]+$/i, By = /^(?:0|[1-9]\d*)$/, zy = parseInt;
  function Gy(e, t) {
    var r = -1, n = e ? e.length : 0, o = Array(n);
    while (++r < n) o[r] = t(e[r], r, e);
    return o;
  }
  function qy(e, t, r, n) {
    var o = e.length, i = r + (n ? 1 : -1);
    while (n ? i-- : ++i < o) if (t(e[i], i, e)) return i;
    return -1;
  }
  function Ky(e, t, r) {
    if (t !== t) return qy(e, Vy, r);
    var n = r - 1, o = e.length;
    while (++n < o) if (e[n] === t) return n;
    return -1;
  }
  function Vy(e) {
    return e !== e;
  }
  function jy(e, t) {
    var r = -1, n = Array(e);
    while (++r < e) n[r] = t(r);
    return n;
  }
  function Yy(e, t) {
    return Gy(t, function(r) {
      return e[r];
    });
  }
  function Wy(e, t) {
    return function(r) {
      return e(t(r));
    };
  }
  var us = Object.prototype, {hasOwnProperty: mc, toString: hs, propertyIsEnumerable: Qy} = us, Jy = Wy(Object.keys, Object), Xy = Math.max;
  function Zy(e, t) {
    var r = rf(e) || oT(e) ? jy(e.length, String) : [], n = r.length, o = !!n;
    for (var i in e) if ((t || mc.call(e, i)) && !(o && (i == "length" || tT(i, n)))) r.push(i);
    return r;
  }
  function eT(e) {
    if (!rT(e)) return Jy(e);
    var t = [];
    for (var r in Object(e)) if (mc.call(e, r) && r != "constructor") t.push(r);
    return t;
  }
  function tT(e, t) {
    return t = t == null ? tf : t, !!t && (typeof e == "number" || By.test(e)) && (e > -1 && e % 1 == 0 && e < t);
  }
  function rT(e) {
    var t = e && e.constructor, r = typeof t == "function" && t.prototype || us;
    return e === r;
  }
  function nT(e, t, r, n) {
    e = pc(e) ? e : mT(e), r = r && !n ? uT(r) : 0;
    var o = e.length;
    if (r < 0) r = Xy(o + r, 0);
    return cT(e) ? r <= o && e.indexOf(t, r) > -1 : !!o && Ky(e, t, r) > -1;
  }
  function oT(e) {
    return iT(e) && mc.call(e, "callee") && (!Qy.call(e, "callee") || hs.call(e) == Ny);
  }
  var rf = Array.isArray;
  function pc(e) {
    return e != null && aT(e.length) && !sT(e);
  }
  function iT(e) {
    return gc(e) && pc(e);
  }
  function sT(e) {
    var t = fc(e) ? hs.call(e) : "";
    return t == xy || t == My;
  }
  function aT(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= tf;
  }
  function fc(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  function gc(e) {
    return !!e && typeof e == "object";
  }
  function cT(e) {
    return typeof e == "string" || !rf(e) && gc(e) && hs.call(e) == Dy;
  }
  function lT(e) {
    return typeof e == "symbol" || gc(e) && hs.call(e) == Uy;
  }
  function dT(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = hT(e), e === Zh || e === -Zh) {
      var t = e < 0 ? -1 : 1;
      return t * Oy;
    }
    return e === e ? e : 0;
  }
  function uT(e) {
    var t = dT(e), r = t % 1;
    return t === t ? r ? t - r : t : 0;
  }
  function hT(e) {
    if (typeof e == "number") return e;
    if (lT(e)) return ef;
    if (fc(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = fc(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(Ly, "");
    var r = Fy.test(e);
    return r || $y.test(e) ? zy(e.slice(2), r ? 2 : 8) : Hy.test(e) ? ef : +e;
  }
  function fT(e) {
    return pc(e) ? Zy(e) : eT(e);
  }
  function mT(e) {
    return e ? Yy(e, fT(e)) : [];
  }
  nf.exports = nT;
});

var af = C(function(lL, sf) {
  var pT = "[object Boolean]", gT = Object.prototype, yT = gT.toString;
  function TT(e) {
    return e === !0 || e === !1 || ET(e) && yT.call(e) == pT;
  }
  function ET(e) {
    return !!e && typeof e == "object";
  }
  sf.exports = TT;
});

var hf = C(function(dL, uf) {
  var cf = 1 / 0, CT = 17976931348623157e292, lf = NaN, AT = "[object Symbol]", IT = /^\s+|\s+$/g, _T = /^[-+]0x[0-9a-f]+$/i, ST = /^0b[01]+$/i, RT = /^0o[0-7]+$/i, wT = parseInt, vT = Object.prototype, kT = vT.toString;
  function bT(e) {
    return typeof e == "number" && e == xT(e);
  }
  function df(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  function PT(e) {
    return !!e && typeof e == "object";
  }
  function OT(e) {
    return typeof e == "symbol" || PT(e) && kT.call(e) == AT;
  }
  function NT(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = MT(e), e === cf || e === -cf) {
      var t = e < 0 ? -1 : 1;
      return t * CT;
    }
    return e === e ? e : 0;
  }
  function xT(e) {
    var t = NT(e), r = t % 1;
    return t === t ? r ? t - r : t : 0;
  }
  function MT(e) {
    if (typeof e == "number") return e;
    if (OT(e)) return lf;
    if (df(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = df(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(IT, "");
    var r = ST.test(e);
    return r || RT.test(e) ? wT(e.slice(2), r ? 2 : 8) : _T.test(e) ? lf : +e;
  }
  uf.exports = bT;
});

var mf = C(function(uL, ff) {
  var DT = "[object Number]", UT = Object.prototype, LT = UT.toString;
  function HT(e) {
    return !!e && typeof e == "object";
  }
  function FT(e) {
    return typeof e == "number" || HT(e) && LT.call(e) == DT;
  }
  ff.exports = FT;
});

var Tf = C(function(hL, yf) {
  var $T = "[object Object]";
  function BT(e) {
    var t = !1;
    if (e != null && typeof e.toString != "function") try {
      t = !!(e + "");
    } catch (r) {}
    return t;
  }
  function zT(e, t) {
    return function(r) {
      return e(t(r));
    };
  }
  var GT = Function.prototype, pf = Object.prototype, gf = GT.toString, qT = pf.hasOwnProperty, KT = gf.call(Object), VT = pf.toString, jT = zT(Object.getPrototypeOf, Object);
  function YT(e) {
    return !!e && typeof e == "object";
  }
  function WT(e) {
    if (!YT(e) || VT.call(e) != $T || BT(e)) return !1;
    var t = jT(e);
    if (t === null) return !0;
    var r = qT.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && gf.call(r) == KT;
  }
  yf.exports = WT;
});

var Cf = C(function(fL, Ef) {
  var QT = "[object String]", JT = Object.prototype, XT = JT.toString, ZT = Array.isArray;
  function eE(e) {
    return !!e && typeof e == "object";
  }
  function tE(e) {
    return typeof e == "string" || !ZT(e) && eE(e) && XT.call(e) == QT;
  }
  Ef.exports = tE;
});

var Rf = C(function(mL, Sf) {
  var rE = "Expected a function", Af = 1 / 0, nE = 17976931348623157e292, If = NaN, oE = "[object Symbol]", iE = /^\s+|\s+$/g, sE = /^[-+]0x[0-9a-f]+$/i, aE = /^0b[01]+$/i, cE = /^0o[0-7]+$/i, lE = parseInt, dE = Object.prototype, uE = dE.toString;
  function hE(e, t) {
    var r;
    if (typeof t != "function") throw TypeError(rE);
    return e = yE(e), function() {
      if (--e > 0) r = t.apply(this, arguments);
      if (e <= 1) t = void 0;
      return r;
    };
  }
  function fE(e) {
    return hE(2, e);
  }
  function _f(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function");
  }
  function mE(e) {
    return !!e && typeof e == "object";
  }
  function pE(e) {
    return typeof e == "symbol" || mE(e) && uE.call(e) == oE;
  }
  function gE(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = TE(e), e === Af || e === -Af) {
      var t = e < 0 ? -1 : 1;
      return t * nE;
    }
    return e === e ? e : 0;
  }
  function yE(e) {
    var t = gE(e), r = t % 1;
    return t === t ? r ? t - r : t : 0;
  }
  function TE(e) {
    if (typeof e == "number") return e;
    if (pE(e)) return If;
    if (_f(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = _f(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(iE, "");
    var r = aE.test(e);
    return r || cE.test(e) ? lE(e.slice(2), r ? 2 : 8) : sE.test(e) ? If : +e;
  }
  Sf.exports = fE;
});

var Mf = C(function(pL, xf) {
  var wf = cc(), EE = dc(), CE = lc(), ms = EHt(), bf = of(), fs = af(), vf = hf(), yc = mf(), Pf = Tf(), Qt = Cf(), AE = Rf(), {KeyObject: IE, createSecretKey: _E, createPrivateKey: SE} = Ne("crypto"), Of = [ "RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none" ];
  if (EE) Of.splice(3, 0, "PS256", "PS384", "PS512");
  var RE = {
    expiresIn: {
      isValid: function(e) {
        return vf(e) || Qt(e) && e;
      },
      message: '"expiresIn" should be a number of seconds or string representing a timespan'
    },
    notBefore: {
      isValid: function(e) {
        return vf(e) || Qt(e) && e;
      },
      message: '"notBefore" should be a number of seconds or string representing a timespan'
    },
    audience: {
      isValid: function(e) {
        return Qt(e) || Array.isArray(e);
      },
      message: '"audience" must be a string or array'
    },
    algorithm: {
      isValid: bf.bind(null, Of),
      message: '"algorithm" must be a valid string enum value'
    },
    header: {
      isValid: Pf,
      message: '"header" must be an object'
    },
    encoding: {
      isValid: Qt,
      message: '"encoding" must be a string'
    },
    issuer: {
      isValid: Qt,
      message: '"issuer" must be a string'
    },
    subject: {
      isValid: Qt,
      message: '"subject" must be a string'
    },
    jwtid: {
      isValid: Qt,
      message: '"jwtid" must be a string'
    },
    noTimestamp: {
      isValid: fs,
      message: '"noTimestamp" must be a boolean'
    },
    keyid: {
      isValid: Qt,
      message: '"keyid" must be a string'
    },
    mutatePayload: {
      isValid: fs,
      message: '"mutatePayload" must be a boolean'
    },
    allowInsecureKeySizes: {
      isValid: fs,
      message: '"allowInsecureKeySizes" must be a boolean'
    },
    allowInvalidAsymmetricKeyTypes: {
      isValid: fs,
      message: '"allowInvalidAsymmetricKeyTypes" must be a boolean'
    }
  }, wE = {
    iat: {
      isValid: yc,
      message: '"iat" should be a number of seconds'
    },
    exp: {
      isValid: yc,
      message: '"exp" should be a number of seconds'
    },
    nbf: {
      isValid: yc,
      message: '"nbf" should be a number of seconds'
    }
  };
  function Nf(e, t, r, n) {
    if (!Pf(r)) throw Error('Expected "' + n + '" to be a plain object.');
    Object.keys(r).forEach(function(o) {
      let i = e[o];
      if (!i) {
        if (!t) throw Error('"' + o + '" is not allowed in "' + n + '"');
        return;
      }
      if (!i.isValid(r[o])) throw Error(i.message);
    });
  }
  function vE(e) {
    return Nf(RE, !1, e, "options");
  }
  function kE(e) {
    return Nf(wE, !0, e, "payload");
  }
  var kf = {
    audience: "aud",
    issuer: "iss",
    subject: "sub",
    jwtid: "jti"
  }, bE = [ "expiresIn", "notBefore", "noTimestamp", "audience", "issuer", "subject", "jwtid" ];
  xf.exports = function(e, t, r, n) {
    if (typeof r === "function") n = r, r = {}; else r = r || {};
    let o = typeof e === "object" && !Buffer.isBuffer(e), i = Object.assign({
      alg: r.algorithm || "HS256",
      typ: o ? "JWT" : void 0,
      kid: r.keyid
    }, r.header);
    function s(l) {
      if (n) return n(l);
      throw l;
    }
    if (!t && r.algorithm !== "none") return s(Error("secretOrPrivateKey must have a value"));
    if (t != null && !(t instanceof IE)) try {
      t = SE(t);
    } catch (l) {
      try {
        t = _E(typeof t === "string" ? Buffer.from(t) : t);
      } catch (d) {
        return s(Error("secretOrPrivateKey is not valid key material"));
      }
    }
    if (i.alg.startsWith("HS") && t.type !== "secret") return s(Error(`secretOrPrivateKey must be a symmetric key when using ${i.alg}`)); else if (/^(?:RS|PS|ES)/.test(i.alg)) {
      if (t.type !== "private") return s(Error(`secretOrPrivateKey must be an asymmetric key when using ${i.alg}`));
      if (!r.allowInsecureKeySizes && !i.alg.startsWith("ES") && t.asymmetricKeyDetails !== void 0 && t.asymmetricKeyDetails.modulusLength < 2048) return s(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${i.alg}`));
    }
    if (typeof e > "u") return s(Error("payload is required")); else if (o) {
      try {
        kE(e);
      } catch (l) {
        return s(l);
      }
      if (!r.mutatePayload) e = Object.assign({}, e);
    } else {
      let l = bE.filter(function(d) {
        return typeof r[d] < "u";
      });
      if (l.length > 0) return s(Error("invalid " + l.join(",") + " option for " + typeof e + " payload"));
    }
    if (typeof e.exp < "u" && typeof r.expiresIn < "u") return s(Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
    if (typeof e.nbf < "u" && typeof r.notBefore < "u") return s(Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
    try {
      vE(r);
    } catch (l) {
      return s(l);
    }
    if (!r.allowInvalidAsymmetricKeyTypes) try {
      CE(i.alg, t);
    } catch (l) {
      return s(l);
    }
    let a = e.iat || Math.floor(Date.now() / 1e3);
    if (r.noTimestamp) delete e.iat; else if (o) e.iat = a;
    if (typeof r.notBefore < "u") {
      try {
        e.nbf = wf(r.notBefore, a);
      } catch (l) {
        return s(l);
      }
      if (typeof e.nbf > "u") return s(Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    if (typeof r.expiresIn < "u" && typeof e === "object") {
      try {
        e.exp = wf(r.expiresIn, a);
      } catch (l) {
        return s(l);
      }
      if (typeof e.exp > "u") return s(Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    Object.keys(kf).forEach(function(l) {
      let d = kf[l];
      if (typeof r[l] < "u") {
        if (typeof e[d] < "u") return s(Error('Bad "options.' + l + '" option. The payload already has an "' + d + '" property.'));
        e[d] = r[l];
      }
    });
    let c = r.encoding || "utf8";
    if (typeof n === "function") n = n && AE(n), ms.createSign({
      header: i,
      privateKey: t,
      payload: e,
      encoding: c
    }).once("error", n).once("done", function(l) {
      if (!r.allowInsecureKeySizes && /^(?:RS|PS)/.test(i.alg) && l.length < 256) return n(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${i.alg}`));
      n(null, l);
    }); else {
      let l = ms.sign({
        header: i,
        payload: e,
        secret: t,
        encoding: c
      });
      if (!r.allowInsecureKeySizes && /^(?:RS|PS)/.test(i.alg) && l.length < 256) throw Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${i.alg}`);
      return l;
    }
  };
});

var Uf = C(function(gL, Df) {
  Df.exports = {
    decode: ic(),
    verify: Xh(),
    sign: Mf(),
    JsonWebTokenError: vo(),
    NotBeforeError: sc(),
    TokenExpiredError: ac()
  };
});

var xo = "4.10.1", Ps = "04b07795-8ddb-461a-bbee-02f9e1bf7b46", zc = "common", bs;

(function(e) {
  e.AzureChina = "https://login.chinacloudapi.cn", e.AzureGermany = "https://login.microsoftonline.de", 
  e.AzureGovernment = "https://login.microsoftonline.us", e.AzurePublicCloud = "https://login.microsoftonline.com";
})(bs || (bs = {}));

var Fn = bs.AzurePublicCloud, Gc = "login.microsoftonline.com", qc = [ "*" ], Kc = "cae", Vc = "nocae", jc = "msal.cache";

var Os = void 0;

var Yc = void 0;

function hm(e) {
  var t, r, n, o, i, s, a;
  let c = {
    cache: {},
    broker: {
      isEnabled: (r = (t = e.brokerOptions) === null || t === void 0 ? void 0 : t.enabled) !== null && r !== void 0 ? r : !1,
      enableMsaPassthrough: (o = (n = e.brokerOptions) === null || n === void 0 ? void 0 : n.legacyEnableMsaPassthrough) !== null && o !== void 0 ? o : !1,
      parentWindowHandle: (i = e.brokerOptions) === null || i === void 0 ? void 0 : i.parentWindowHandle
    }
  };
  if ((s = e.tokenCachePersistenceOptions) === null || s === void 0 ? void 0 : s.enabled) {
    if (Os === void 0) throw Error([ "Persistent token caching was requested, but no persistence provider was configured.", "You must install the identity-cache-persistence plugin package (`npm install --save @azure/identity-cache-persistence`)", "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling", "`useIdentityPlugin(cachePersistencePlugin)` before using `tokenCachePersistenceOptions`." ].join(" "));
    let l = e.tokenCachePersistenceOptions.name || jc;
    c.cache.cachePlugin = Os(Object.assign({
      name: `${l}.${Vc}`
    }, e.tokenCachePersistenceOptions)), c.cache.cachePluginCae = Os(Object.assign({
      name: `${l}.${Kc}`
    }, e.tokenCachePersistenceOptions));
  }
  if ((a = e.brokerOptions) === null || a === void 0 ? void 0 : a.enabled) {
    if (Yc === void 0) throw Error([ "Broker for WAM was requested to be enabled, but no native broker was configured.", "You must install the identity-broker plugin package (`npm install --save @azure/identity-broker`)", "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling", "`useIdentityPlugin(createNativeBrokerPlugin())` before using `enableBroker`." ].join(" "));
    c.broker.nativeBrokerPlugin = Yc.broker;
  }
  return c;
}

var Wc = {
  generatePluginConfiguration: hm
};

import { EOL as fm } from "os";

import mm from "util";

import * as Qc from "process";

function Jc(e, ...t) {
  Qc.stderr.write(`${mm.format(e, ...t)}${fm}`);
}

var Xc = typeof process < "u" && process.env && process.env.DEBUG || void 0, Zc, Ns = [], xs = [], Mo = [];

if (Xc) Ms(Xc);

var el = Object.assign(e => tl(e), {
  enable: Ms,
  enabled: Ds,
  disable: pm,
  log: Jc
});

function Ms(e) {
  Zc = e, Ns = [], xs = [];
  let t = /\*/g, r = e.split(",").map(n => n.trim().replace(t, ".*?"));
  for (let n of r) if (n.startsWith("-")) xs.push(new RegExp(`^${n.substr(1)}$`)); else Ns.push(new RegExp(`^${n}$`));
  for (let n of Mo) n.enabled = Ds(n.namespace);
}

function Ds(e) {
  if (e.endsWith("*")) return !0;
  for (let t of xs) if (t.test(e)) return !1;
  for (let t of Ns) if (t.test(e)) return !0;
  return !1;
}

function pm() {
  let e = Zc || "";
  return Ms(""), e;
}

function tl(e) {
  let t = Object.assign(r, {
    enabled: Ds(e),
    destroy: gm,
    log: el.log,
    namespace: e,
    extend: ym
  });
  function r(...n) {
    if (!t.enabled) return;
    if (n.length > 0) n[0] = `${e} ${n[0]}`;
    t.log(...n);
  }
  return Mo.push(t), t;
}

function gm() {
  let e = Mo.indexOf(this);
  if (e >= 0) return Mo.splice(e, 1), !0;
  return !1;
}

function ym(e) {
  let t = tl(`${this.namespace}:${e}`);
  return t.log = this.log, t;
}

var $r = el;

var Us = [ "verbose", "info", "warning", "error" ], rl = {
  verbose: 400,
  info: 300,
  warning: 200,
  error: 100
};

function nl(e, t) {
  t.log = (...r) => {
    e.log(...r);
  };
}

function ol(e) {
  return Us.includes(e);
}

function Do(e) {
  let t = new Set, r = typeof process < "u" && process.env && process.env[e.logLevelEnvVarName] || void 0, n, o = $r(e.namespace);
  o.log = (...d) => {
    $r.log(...d);
  };
  function i(d) {
    if (d && !ol(d)) throw Error(`Unknown log level '${d}'. Acceptable values: ${Us.join(",")}`);
    n = d;
    let u = [];
    for (let m of t) if (s(m)) u.push(m.namespace);
    $r.enable(u.join(","));
  }
  if (r) if (ol(r)) i(r); else console.error(`${e.logLevelEnvVarName} set to unknown log level '${r}'; logging is not enabled. Acceptable values: ${Us.join(", ")}.`);
  function s(d) {
    return Boolean(n && rl[d.level] <= rl[n]);
  }
  function a(d, u) {
    let m = Object.assign(d.extend(u), {
      level: u
    });
    if (nl(d, m), s(m)) {
      let p = $r.disable();
      $r.enable(p + "," + m.namespace);
    }
    return t.add(m), m;
  }
  function c() {
    return n;
  }
  function l(d) {
    let u = o.extend(d);
    return nl(o, u), {
      error: a(u, "error"),
      warning: a(u, "warning"),
      info: a(u, "info"),
      verbose: a(u, "verbose")
    };
  }
  return {
    setLogLevel: i,
    getLogLevel: c,
    createClientLogger: l,
    logger: o
  };
}

var il = Do({
  logLevelEnvVarName: "TYPESPEC_RUNTIME_LOG_LEVEL",
  namespace: "typeSpecRuntime"
}), HC = il.logger;

function Uo(e) {
  return il.createClientLogger(e);
}

var Ls = Do({
  logLevelEnvVarName: "AZURE_LOG_LEVEL",
  namespace: "azure"
}), GC = Ls.logger;

function Lo() {
  return Ls.getLogLevel();
}

function Pt(e) {
  return Ls.createClientLogger(e);
}

var Be = Pt("identity");

function Ho(e) {
  return e.reduce((t, r) => {
    if (process.env[r]) t.assigned.push(r); else t.missing.push(r);
    return t;
  }, {
    missing: [],
    assigned: []
  });
}

function he(e) {
  return `SUCCESS. Scopes: ${Array.isArray(e) ? e.join(", ") : e}.`;
}

function q(e, t) {
  let r = "ERROR.";
  if (e === null || e === void 0 ? void 0 : e.length) r += ` Scopes: ${Array.isArray(e) ? e.join(", ") : e}.`;
  return `${r} Error message: ${typeof t === "string" ? t : t.message}.`;
}

function sl(e, t, r = Be) {
  let n = t ? `${t.fullTitle} ${e}` : e;
  function o(c) {
    r.info(`${n} =>`, c);
  }
  function i(c) {
    r.warning(`${n} =>`, c);
  }
  function s(c) {
    r.verbose(`${n} =>`, c);
  }
  function a(c) {
    r.error(`${n} =>`, c);
  }
  return {
    title: e,
    fullTitle: n,
    info: o,
    warning: i,
    verbose: s,
    error: a
  };
}

function z(e, t = Be) {
  let r = sl(e, void 0, t);
  return Object.assign(Object.assign({}, r), {
    parent: t,
    getToken: sl("=> getToken()", r, t)
  });
}

function Tm(e) {
  return e && typeof e.error === "string" && typeof e.error_description === "string";
}

var Em = "CredentialUnavailableError";

class w extends Error {
  constructor(e, t) {
    super(e, t);
    this.name = Em;
  }
}

var Hs = "AuthenticationError";

class $n extends Error {
  constructor(e, t, r) {
    let n = {
      error: "unknown",
      errorDescription: "An unknown error occurred and no additional details are available."
    };
    if (Tm(t)) n = al(t); else if (typeof t === "string") try {
      let o = JSON.parse(t);
      n = al(o);
    } catch (o) {
      if (e === 400) n = {
        error: "invalid_request",
        errorDescription: `The service indicated that the request was invalid.\n\n${t}`
      }; else n = {
        error: "unknown_error",
        errorDescription: `An unknown error has occurred. Response body:\n\n${t}`
      };
    } else n = {
      error: "unknown_error",
      errorDescription: "An unknown error occurred and no additional details are available."
    };
    super(`${n.error} Status code: ${e}\nMore details:\n${n.errorDescription},`, r);
    this.statusCode = e, this.errorResponse = n, this.name = Hs;
  }
}

var Cm = "AggregateAuthenticationError";

class Fs extends Error {
  constructor(e, t) {
    let r = e.join(`\n`);
    super(`${t}\n${r}`);
    this.errors = e, this.name = Cm;
  }
}

function al(e) {
  return {
    error: e.error,
    errorDescription: e.error_description,
    correlationId: e.correlation_id,
    errorCodes: e.error_codes,
    timestamp: e.timestamp,
    traceId: e.trace_id
  };
}

class dt extends Error {
  constructor(e) {
    super(e.message, e.cause ? {
      cause: e.cause
    } : void 0);
    this.scopes = e.scopes, this.getTokenOptions = e.getTokenOptions, this.name = "AuthenticationRequiredError";
  }
}

function Am(e) {
  return `The current credential is not configured to acquire tokens for tenant ${e}. To enable acquiring tokens for this tenant add it to the AdditionallyAllowedTenants on the credential options, or add "*" to AdditionallyAllowedTenants to allow acquiring tokens for any tenant.`;
}

function Ee(e, t, r = [], n) {
  var o;
  let i;
  if (process.env.AZURE_IDENTITY_DISABLE_MULTITENANTAUTH) i = e; else if (e === "adfs") i = e; else i = (o = t === null || t === void 0 ? void 0 : t.tenantId) !== null && o !== void 0 ? o : e;
  if (e && i !== e && !r.includes("*") && !r.some(s => s.localeCompare(i) === 0)) {
    let s = Am(i);
    throw n === null || n === void 0 || n.info(s), new w(s);
  }
  return i;
}

function Re(e, t) {
  if (!t.match(/^[0-9a-zA-Z-.]+$/)) {
    let r = Error("Invalid tenant id provided. You can locate your tenant id by following the instructions listed here: https://learn.microsoft.com/partner-center/find-ids-and-domain-names.");
    throw e.info(q("", r)), r;
  }
}

function cl(e, t, r) {
  if (t) return Re(e, t), t;
  if (!r) r = Ps;
  if (r !== Ps) return "common";
  return "organizations";
}

function ve(e) {
  if (!e || e.length === 0) return [];
  if (e.includes("*")) return qc;
  return e;
}

function Fo(e) {
  return e.toLowerCase();
}

function* Im(e) {
  for (let t of e.values()) yield [ t.name, t.value ];
}

class ll {
  constructor(e) {
    if (this._headersMap = new Map, e) for (let t of Object.keys(e)) this.set(t, e[t]);
  }
  set(e, t) {
    this._headersMap.set(Fo(e), {
      name: e,
      value: String(t).trim()
    });
  }
  get(e) {
    var t;
    return (t = this._headersMap.get(Fo(e))) === null || t === void 0 ? void 0 : t.value;
  }
  has(e) {
    return this._headersMap.has(Fo(e));
  }
  delete(e) {
    this._headersMap.delete(Fo(e));
  }
  toJSON(e = {}) {
    let t = {};
    if (e.preserveCase) for (let r of this._headersMap.values()) t[r.name] = r.value; else for (let [r, n] of this._headersMap) t[r] = n.value;
    return t;
  }
  toString() {
    return JSON.stringify(this.toJSON({
      preserveCase: !0
    }));
  }
  [Symbol.iterator]() {
    return Im(this._headersMap);
  }
}

function et(e) {
  return new ll(e);
}

import { randomUUID as _m } from "crypto";

var $s, Sm = typeof (($s = globalThis === null || globalThis === void 0 ? void 0 : globalThis.crypto) === null || $s === void 0 ? void 0 : $s.randomUUID) === "function" ? globalThis.crypto.randomUUID.bind(globalThis.crypto) : _m;

function Bn() {
  return Sm();
}

class dl {
  constructor(e) {
    var t, r, n, o, i, s, a;
    this.url = e.url, this.body = e.body, this.headers = (t = e.headers) !== null && t !== void 0 ? t : et(), 
    this.method = (r = e.method) !== null && r !== void 0 ? r : "GET", this.timeout = (n = e.timeout) !== null && n !== void 0 ? n : 0, 
    this.multipartBody = e.multipartBody, this.formData = e.formData, this.disableKeepAlive = (o = e.disableKeepAlive) !== null && o !== void 0 ? o : !1, 
    this.proxySettings = e.proxySettings, this.streamResponseStatusCodes = e.streamResponseStatusCodes, 
    this.withCredentials = (i = e.withCredentials) !== null && i !== void 0 ? i : !1, 
    this.abortSignal = e.abortSignal, this.onUploadProgress = e.onUploadProgress, this.onDownloadProgress = e.onDownloadProgress, 
    this.requestId = e.requestId || Bn(), this.allowInsecureConnection = (s = e.allowInsecureConnection) !== null && s !== void 0 ? s : !1, 
    this.enableBrowserStreams = (a = e.enableBrowserStreams) !== null && a !== void 0 ? a : !1, 
    this.requestOverrides = e.requestOverrides, this.authSchemes = e.authSchemes;
  }
}

function Bs(e) {
  return new dl(e);
}

var ul = new Set([ "Deserialize", "Serialize", "Retry", "Sign" ]);

class $o {
  constructor(e) {
    var t;
    this._policies = [], this._policies = (t = e === null || e === void 0 ? void 0 : e.slice(0)) !== null && t !== void 0 ? t : [], 
    this._orderedPolicies = void 0;
  }
  addPolicy(e, t = {}) {
    if (t.phase && t.afterPhase) throw Error("Policies inside a phase cannot specify afterPhase.");
    if (t.phase && !ul.has(t.phase)) throw Error(`Invalid phase name: ${t.phase}`);
    if (t.afterPhase && !ul.has(t.afterPhase)) throw Error(`Invalid afterPhase name: ${t.afterPhase}`);
    this._policies.push({
      policy: e,
      options: t
    }), this._orderedPolicies = void 0;
  }
  removePolicy(e) {
    let t = [];
    return this._policies = this._policies.filter(r => {
      if (e.name && r.policy.name === e.name || e.phase && r.options.phase === e.phase) return t.push(r.policy), 
      !1; else return !0;
    }), this._orderedPolicies = void 0, t;
  }
  sendRequest(e, t) {
    return this.getOrderedPolicies().reduceRight((o, i) => s => i.sendRequest(s, o), o => e.sendRequest(o))(t);
  }
  getOrderedPolicies() {
    if (!this._orderedPolicies) this._orderedPolicies = this.orderPolicies();
    return this._orderedPolicies;
  }
  clone() {
    return new $o(this._policies);
  }
  static create() {
    return new $o;
  }
  orderPolicies() {
    let e = [], t = new Map;
    function r(p) {
      return {
        name: p,
        policies: new Set,
        hasRun: !1,
        hasAfterPolicies: !1
      };
    }
    let n = r("Serialize"), o = r("None"), i = r("Deserialize"), s = r("Retry"), a = r("Sign"), c = [ n, o, i, s, a ];
    function l(p) {
      if (p === "Retry") return s; else if (p === "Serialize") return n; else if (p === "Deserialize") return i; else if (p === "Sign") return a; else return o;
    }
    for (let p of this._policies) {
      let {policy: y, options: T} = p, _ = y.name;
      if (t.has(_)) throw Error("Duplicate policy names not allowed in pipeline");
      let k = {
        policy: y,
        dependsOn: new Set,
        dependants: new Set
      };
      if (T.afterPhase) k.afterPhase = l(T.afterPhase), k.afterPhase.hasAfterPolicies = !0;
      t.set(_, k), l(T.phase).policies.add(k);
    }
    for (let p of this._policies) {
      let {policy: y, options: T} = p, _ = y.name, k = t.get(_);
      if (!k) throw Error(`Missing node for policy ${_}`);
      if (T.afterPolicies) for (let U of T.afterPolicies) {
        let B = t.get(U);
        if (B) k.dependsOn.add(B), B.dependants.add(k);
      }
      if (T.beforePolicies) for (let U of T.beforePolicies) {
        let B = t.get(U);
        if (B) B.dependsOn.add(k), k.dependants.add(B);
      }
    }
    function d(p) {
      p.hasRun = !0;
      for (let y of p.policies) {
        if (y.afterPhase && (!y.afterPhase.hasRun || y.afterPhase.policies.size)) continue;
        if (y.dependsOn.size === 0) {
          e.push(y.policy);
          for (let T of y.dependants) T.dependsOn.delete(y);
          t.delete(y.policy.name), p.policies.delete(y);
        }
      }
    }
    function u() {
      for (let p of c) {
        if (d(p), p.policies.size > 0 && p !== o) {
          if (!o.hasRun) d(o);
          return;
        }
        if (p.hasAfterPolicies) d(o);
      }
    }
    let m = 0;
    while (t.size > 0) {
      m++;
      let p = e.length;
      if (u(), e.length <= p && m > 1) throw Error("Cannot satisfy policy dependencies due to requirements cycle.");
    }
    return e;
  }
}

function zs() {
  return $o.create();
}

function zn(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date);
}

function tr(e) {
  if (zn(e)) {
    let t = typeof e.name === "string", r = typeof e.message === "string";
    return t && r;
  }
  return !1;
}

import { inspect as Rm } from "util";

var hl = Rm.custom;

var Gs = "REDACTED", wm = [ "x-ms-client-request-id", "x-ms-return-client-request-id", "x-ms-useragent", "x-ms-correlation-request-id", "x-ms-request-id", "client-request-id", "ms-cv", "return-client-request-id", "traceparent", "Access-Control-Allow-Credentials", "Access-Control-Allow-Headers", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Access-Control-Expose-Headers", "Access-Control-Max-Age", "Access-Control-Request-Headers", "Access-Control-Request-Method", "Origin", "Accept", "Accept-Encoding", "Cache-Control", "Connection", "Content-Length", "Content-Type", "Date", "ETag", "Expires", "If-Match", "If-Modified-Since", "If-None-Match", "If-Unmodified-Since", "Last-Modified", "Pragma", "Request-Id", "Retry-After", "Server", "Transfer-Encoding", "User-Agent", "WWW-Authenticate" ], vm = [ "api-version" ];

class tt {
  constructor({additionalAllowedHeaderNames: e = [], additionalAllowedQueryParameters: t = []} = {}) {
    e = wm.concat(e), t = vm.concat(t), this.allowedHeaderNames = new Set(e.map(r => r.toLowerCase())), 
    this.allowedQueryParameters = new Set(t.map(r => r.toLowerCase()));
  }
  sanitize(e) {
    let t = new Set;
    return JSON.stringify(e, (r, n) => {
      if (n instanceof Error) return Object.assign(Object.assign({}, n), {
        name: n.name,
        message: n.message
      });
      if (r === "headers") return this.sanitizeHeaders(n); else if (r === "url") return this.sanitizeUrl(n); else if (r === "query") return this.sanitizeQuery(n); else if (r === "body") return; else if (r === "response") return; else if (r === "operationSpec") return; else if (Array.isArray(n) || zn(n)) {
        if (t.has(n)) return "[Circular]";
        t.add(n);
      }
      return n;
    }, 2);
  }
  sanitizeUrl(e) {
    if (typeof e !== "string" || e === null || e === "") return e;
    let t = new URL(e);
    if (!t.search) return e;
    for (let [r] of t.searchParams) if (!this.allowedQueryParameters.has(r.toLowerCase())) t.searchParams.set(r, Gs);
    return t.toString();
  }
  sanitizeHeaders(e) {
    let t = {};
    for (let r of Object.keys(e)) if (this.allowedHeaderNames.has(r.toLowerCase())) t[r] = e[r]; else t[r] = Gs;
    return t;
  }
  sanitizeQuery(e) {
    if (typeof e !== "object" || e === null) return e;
    let t = {};
    for (let r of Object.keys(e)) if (this.allowedQueryParameters.has(r.toLowerCase())) t[r] = e[r]; else t[r] = Gs;
    return t;
  }
}

var km = new tt;

class ke extends Error {
  constructor(e, t = {}) {
    super(e);
    this.name = "RestError", this.code = t.code, this.statusCode = t.statusCode, Object.defineProperty(this, "request", {
      value: t.request,
      enumerable: !1
    }), Object.defineProperty(this, "response", {
      value: t.response,
      enumerable: !1
    }), Object.defineProperty(this, hl, {
      value: () => `RestError: ${this.message} \n ${km.sanitize(Object.assign(Object.assign({}, this), {
        request: this.request,
        response: this.response
      }))}`,
      enumerable: !1
    }), Object.setPrototypeOf(this, ke.prototype);
  }
}

ke.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR";

ke.PARSE_ERROR = "PARSE_ERROR";

function qs(e) {
  if (e instanceof ke) return !0;
  return tr(e) && e.name === "RestError";
}

import * as Br from "http";

import * as zr from "https";

import * as Bo from "zlib";

import { Transform as bm } from "stream";

class Ot extends Error {
  constructor(e) {
    super(e);
    this.name = "AbortError";
  }
}

var Ve = Uo("ts-http-runtime");

var Pm = {};

function Gn(e) {
  return e && typeof e.pipe === "function";
}

function fl(e) {
  if (e.readable === !1) return Promise.resolve();
  return new Promise(t => {
    let r = () => {
      t(), e.removeListener("close", r), e.removeListener("end", r), e.removeListener("error", r);
    };
    e.on("close", r), e.on("end", r), e.on("error", r);
  });
}

function ml(e) {
  return e && typeof e.byteLength === "number";
}

class Ks extends bm {
  _transform(e, t, r) {
    this.push(e), this.loadedBytes += e.length;
    try {
      this.progressCallback({
        loadedBytes: this.loadedBytes
      }), r();
    } catch (n) {
      r(n);
    }
  }
  constructor(e) {
    super();
    this.loadedBytes = 0, this.progressCallback = e;
  }
}

class pl {
  constructor() {
    this.cachedHttpsAgents = new WeakMap;
  }
  async sendRequest(e) {
    var t, r, n;
    let o = new AbortController, i;
    if (e.abortSignal) {
      if (e.abortSignal.aborted) throw new Ot("The operation was aborted. Request has already been canceled.");
      i = u => {
        if (u.type === "abort") o.abort();
      }, e.abortSignal.addEventListener("abort", i);
    }
    let s;
    if (e.timeout > 0) s = setTimeout(() => {
      let u = new tt;
      Ve.info(`request to '${u.sanitizeUrl(e.url)}' timed out. canceling...`), o.abort();
    }, e.timeout);
    let a = e.headers.get("Accept-Encoding"), c = (a === null || a === void 0 ? void 0 : a.includes("gzip")) || (a === null || a === void 0 ? void 0 : a.includes("deflate")), l = typeof e.body === "function" ? e.body() : e.body;
    if (l && !e.headers.has("Content-Length")) {
      let u = Mm(l);
      if (u !== null) e.headers.set("Content-Length", u);
    }
    let d;
    try {
      if (l && e.onUploadProgress) {
        let _ = e.onUploadProgress, k = new Ks(_);
        if (k.on("error", U => {
          Ve.error("Error in upload progress", U);
        }), Gn(l)) l.pipe(k); else k.end(l);
        l = k;
      }
      let u = await this.makeRequest(e, o, l);
      if (s !== void 0) clearTimeout(s);
      let m = Om(u), y = {
        status: (t = u.statusCode) !== null && t !== void 0 ? t : 0,
        headers: m,
        request: e
      };
      if (e.method === "HEAD") return u.resume(), y;
      d = c ? Nm(u, m) : u;
      let T = e.onDownloadProgress;
      if (T) {
        let _ = new Ks(T);
        _.on("error", k => {
          Ve.error("Error in download progress", k);
        }), d.pipe(_), d = _;
      }
      if (((r = e.streamResponseStatusCodes) === null || r === void 0 ? void 0 : r.has(Number.POSITIVE_INFINITY)) || ((n = e.streamResponseStatusCodes) === null || n === void 0 ? void 0 : n.has(y.status))) y.readableStreamBody = d; else y.bodyAsText = await xm(d);
      return y;
    } finally {
      if (e.abortSignal && i) {
        let u = Promise.resolve();
        if (Gn(l)) u = fl(l);
        let m = Promise.resolve();
        if (Gn(d)) m = fl(d);
        Promise.all([ u, m ]).then(() => {
          var p;
          if (i) (p = e.abortSignal) === null || p === void 0 || p.removeEventListener("abort", i);
        }).catch(p => {
          Ve.warning("Error when cleaning up abortListener on httpRequest", p);
        });
      }
    }
  }
  makeRequest(e, t, r) {
    var n;
    let o = new URL(e.url), i = o.protocol !== "https:";
    if (i && !e.allowInsecureConnection) throw Error(`Cannot connect to ${e.url} while allowInsecureConnection is false.`);
    let s = (n = e.agent) !== null && n !== void 0 ? n : this.getOrCreateAgent(e, i), a = Object.assign({
      agent: s,
      hostname: o.hostname,
      path: `${o.pathname}${o.search}`,
      port: o.port,
      method: e.method,
      headers: e.headers.toJSON({
        preserveCase: !0
      })
    }, e.requestOverrides);
    return new Promise((c, l) => {
      let d = i ? Br.request(a, c) : zr.request(a, c);
      if (d.once("error", u => {
        var m;
        l(new ke(u.message, {
          code: (m = u.code) !== null && m !== void 0 ? m : ke.REQUEST_SEND_ERROR,
          request: e
        }));
      }), t.signal.addEventListener("abort", () => {
        let u = new Ot("The operation was aborted. Rejecting from abort signal callback while making request.");
        d.destroy(u), l(u);
      }), r && Gn(r)) r.pipe(d); else if (r) if (typeof r === "string" || Buffer.isBuffer(r)) d.end(r); else if (ml(r)) d.end(ArrayBuffer.isView(r) ? Buffer.from(r.buffer) : Buffer.from(r)); else Ve.error("Unrecognized body type", r), 
      l(new ke("Unrecognized body type")); else d.end();
    });
  }
  getOrCreateAgent(e, t) {
    var r;
    let n = e.disableKeepAlive;
    if (t) {
      if (n) return Br.globalAgent;
      if (!this.cachedHttpAgent) this.cachedHttpAgent = new Br.Agent({
        keepAlive: !0
      });
      return this.cachedHttpAgent;
    } else {
      if (n && !e.tlsSettings) return zr.globalAgent;
      let o = (r = e.tlsSettings) !== null && r !== void 0 ? r : Pm, i = this.cachedHttpsAgents.get(o);
      if (i && i.options.keepAlive === !n) return i;
      return Ve.info("No cached TLS Agent exist, creating a new Agent"), i = new zr.Agent(Object.assign({
        keepAlive: !n
      }, o)), this.cachedHttpsAgents.set(o, i), i;
    }
  }
}

function Om(e) {
  let t = et();
  for (let r of Object.keys(e.headers)) {
    let n = e.headers[r];
    if (Array.isArray(n)) {
      if (n.length > 0) t.set(r, n[0]);
    } else if (n) t.set(r, n);
  }
  return t;
}

function Nm(e, t) {
  let r = t.get("Content-Encoding");
  if (r === "gzip") {
    let n = Bo.createGunzip();
    return e.pipe(n), n;
  } else if (r === "deflate") {
    let n = Bo.createInflate();
    return e.pipe(n), n;
  }
  return e;
}

function xm(e) {
  return new Promise((t, r) => {
    let n = [];
    e.on("data", o => {
      if (Buffer.isBuffer(o)) n.push(o); else n.push(Buffer.from(o));
    }), e.on("end", () => {
      t(Buffer.concat(n).toString("utf8"));
    }), e.on("error", o => {
      if (o && (o === null || o === void 0 ? void 0 : o.name) === "AbortError") r(o); else r(new ke(`Error reading response as text: ${o.message}`, {
        code: ke.PARSE_ERROR
      }));
    });
  });
}

function Mm(e) {
  if (!e) return 0; else if (Buffer.isBuffer(e)) return e.length; else if (Gn(e)) return null; else if (ml(e)) return e.byteLength; else if (typeof e === "string") return Buffer.from(e).length; else return null;
}

function gl() {
  return new pl;
}

function Vs() {
  return gl();
}

function qn() {
  return zs();
}

var ut = Pt("core-rest-pipeline");

function js(e) {
  return {
    name: "agentPolicy",
    sendRequest: async (t, r) => {
      if (!t.agent) t.agent = e;
      return r(t);
    }
  };
}

function Ys() {
  return {
    name: "decompressResponsePolicy",
    async sendRequest(e, t) {
      if (e.method !== "HEAD") e.headers.set("Accept-Encoding", "gzip,deflate");
      return t(e);
    }
  };
}

function Ws(e, t) {
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e;
}

function Kn(e, t) {
  let r = t.retryDelayInMs * Math.pow(2, e), n = Math.min(t.maxRetryDelayInMs, r);
  return {
    retryAfterInMs: n / 2 + Ws(0, n / 2)
  };
}

var Dm = "The operation was aborted.";

function yl(e, t, r) {
  return new Promise((n, o) => {
    let i = void 0, s = void 0, a = () => o(new Ot((r === null || r === void 0 ? void 0 : r.abortErrorMsg) ? r === null || r === void 0 ? void 0 : r.abortErrorMsg : Dm)), c = () => {
      if ((r === null || r === void 0 ? void 0 : r.abortSignal) && s) r.abortSignal.removeEventListener("abort", s);
    };
    if (s = () => {
      if (i) clearTimeout(i);
      return c(), a();
    }, (r === null || r === void 0 ? void 0 : r.abortSignal) && r.abortSignal.aborted) return a();
    if (i = setTimeout(() => {
      c(), n(t);
    }, e), r === null || r === void 0 ? void 0 : r.abortSignal) r.abortSignal.addEventListener("abort", s);
  });
}

function Tl(e, t) {
  let r = e.headers.get(t);
  if (!r) return;
  let n = Number(r);
  if (Number.isNaN(n)) return;
  return n;
}

var Qs = "Retry-After", Um = [ "retry-after-ms", "x-ms-retry-after-ms", Qs ];

function El(e) {
  if (!(e && [ 429, 503 ].includes(e.status))) return;
  try {
    for (let o of Um) {
      let i = Tl(e, o);
      if (i === 0 || i) return i * (o === Qs ? 1e3 : 1);
    }
    let t = e.headers.get(Qs);
    if (!t) return;
    let n = Date.parse(t) - Date.now();
    return Number.isFinite(n) ? Math.max(0, n) : void 0;
  } catch (t) {
    return;
  }
}

function Cl(e) {
  return Number.isFinite(El(e));
}

function Al() {
  return {
    name: "throttlingRetryStrategy",
    retry({response: e}) {
      let t = El(e);
      if (!Number.isFinite(t)) return {
        skipStrategy: !0
      };
      return {
        retryAfterInMs: t
      };
    }
  };
}

var Lm = 1e3, Hm = 64e3;

function Il(e = {}) {
  var t, r;
  let n = (t = e.retryDelayInMs) !== null && t !== void 0 ? t : Lm, o = (r = e.maxRetryDelayInMs) !== null && r !== void 0 ? r : Hm;
  return {
    name: "exponentialRetryStrategy",
    retry({retryCount: i, response: s, responseError: a}) {
      let c = $m(a), l = c && e.ignoreSystemErrors, d = Fm(s), u = d && e.ignoreHttpStatusCodes;
      if (s && (Cl(s) || !d) || u || l) return {
        skipStrategy: !0
      };
      if (a && !c && !d) return {
        errorToThrow: a
      };
      return Kn(i, {
        retryDelayInMs: n,
        maxRetryDelayInMs: o
      });
    }
  };
}

function Fm(e) {
  return Boolean(e && e.status !== void 0 && (e.status >= 500 || e.status === 408) && e.status !== 501 && e.status !== 505);
}

function $m(e) {
  if (!e) return !1;
  return e.code === "ETIMEDOUT" || e.code === "ESOCKETTIMEDOUT" || e.code === "ECONNREFUSED" || e.code === "ECONNRESET" || e.code === "ENOENT" || e.code === "ENOTFOUND";
}

var Vn = 3;

var Bm = Uo("ts-http-runtime retryPolicy"), zm = "retryPolicy";

function jn(e, t = {
  maxRetries: Vn
}) {
  let r = t.logger || Bm;
  return {
    name: zm,
    async sendRequest(n, o) {
      var i, s;
      let a, c, l = -1;
      e: while (!0) {
        l += 1, a = void 0, c = void 0;
        try {
          r.info(`Retry ${l}: Attempting to send request`, n.requestId), a = await o(n), r.info(`Retry ${l}: Received a response from request`, n.requestId);
        } catch (d) {
          if (r.error(`Retry ${l}: Received an error from request`, n.requestId), c = d, !d || c.name !== "RestError") throw d;
          a = c.response;
        }
        if ((i = n.abortSignal) === null || i === void 0 ? void 0 : i.aborted) throw r.error(`Retry ${l}: Request aborted.`), 
        new Ot;
        if (l >= ((s = t.maxRetries) !== null && s !== void 0 ? s : Vn)) if (r.info(`Retry ${l}: Maximum retries reached. Returning the last received response, or throwing the last received error.`), 
        c) throw c; else if (a) return a; else throw Error("Maximum retries reached with no response or error to throw");
        r.info(`Retry ${l}: Processing ${e.length} retry strategies.`);
        t: for (let d of e) {
          let u = d.logger || r;
          u.info(`Retry ${l}: Processing retry strategy ${d.name}.`);
          let m = d.retry({
            retryCount: l,
            response: a,
            responseError: c
          });
          if (m.skipStrategy) {
            u.info(`Retry ${l}: Skipped.`);
            continue t;
          }
          let {errorToThrow: p, retryAfterInMs: y, redirectTo: T} = m;
          if (p) throw u.error(`Retry ${l}: Retry strategy ${d.name} throws error:`, p), p;
          if (y || y === 0) {
            u.info(`Retry ${l}: Retry strategy ${d.name} retries after ${y}`), await yl(y, void 0, {
              abortSignal: n.abortSignal
            });
            continue e;
          }
          if (T) {
            u.info(`Retry ${l}: Retry strategy ${d.name} redirects to ${T}`), n.url = T;
            continue e;
          }
        }
        if (c) throw r.info("None of the retry strategies could work with the received error. Throwing it."), 
        c;
        if (a) return r.info("None of the retry strategies could work with the received response. Returning it."), 
        a;
      }
    }
  };
}

var Js = "defaultRetryPolicy";

function Xs(e = {}) {
  var t;
  return {
    name: Js,
    sendRequest: jn([ Al(), Il(e) ], {
      maxRetries: (t = e.maxRetries) !== null && t !== void 0 ? t : Vn
    }).sendRequest
  };
}

function rt(e, t) {
  return Buffer.from(e, t);
}

var Zs, ea, ta, ra, _l = typeof window < "u" && typeof window.document < "u", Sl = typeof self === "object" && typeof (self === null || self === void 0 ? void 0 : self.importScripts) === "function" && (((Zs = self.constructor) === null || Zs === void 0 ? void 0 : Zs.name) === "DedicatedWorkerGlobalScope" || ((ea = self.constructor) === null || ea === void 0 ? void 0 : ea.name) === "ServiceWorkerGlobalScope" || ((ta = self.constructor) === null || ta === void 0 ? void 0 : ta.name) === "SharedWorkerGlobalScope"), Rl = typeof Deno < "u" && typeof Deno.version < "u" && typeof Deno.version.deno < "u", wl = typeof Bun < "u" && typeof Bun.version < "u", Gr = typeof globalThis.process < "u" && Boolean(globalThis.process.version) && Boolean((ra = globalThis.process.versions) === null || ra === void 0 ? void 0 : ra.node);

var vl = typeof navigator < "u" && (navigator === null || navigator === void 0 ? void 0 : navigator.product) === "ReactNative";

var na = "formDataPolicy";

function Gm(e) {
  var t;
  let r = {};
  for (let [n, o] of e.entries()) (t = r[n]) !== null && t !== void 0 || (r[n] = []), 
  r[n].push(o);
  return r;
}

function oa() {
  return {
    name: na,
    async sendRequest(e, t) {
      if (Gr && typeof FormData < "u" && e.body instanceof FormData) e.formData = Gm(e.body), 
      e.body = void 0;
      if (e.formData) {
        let r = e.headers.get("Content-Type");
        if (r && r.indexOf("application/x-www-form-urlencoded") !== -1) e.body = qm(e.formData); else await Km(e.formData, e);
        e.formData = void 0;
      }
      return t(e);
    }
  };
}

function qm(e) {
  let t = new URLSearchParams;
  for (let [r, n] of Object.entries(e)) if (Array.isArray(n)) for (let o of n) t.append(r, o.toString()); else t.append(r, n.toString());
  return t.toString();
}

async function Km(e, t) {
  let r = t.headers.get("Content-Type");
  if (r && !r.startsWith("multipart/form-data")) return;
  t.headers.set("Content-Type", r !== null && r !== void 0 ? r : "multipart/form-data");
  let n = [];
  for (let [o, i] of Object.entries(e)) for (let s of Array.isArray(i) ? i : [ i ]) if (typeof s === "string") n.push({
    headers: et({
      "Content-Disposition": `form-data; name="${o}"`
    }),
    body: rt(s, "utf-8")
  }); else if (s === void 0 || s === null || typeof s !== "object") throw Error(`Unexpected value for key ${o}: ${s}. Value should be serialized to string first.`); else {
    let a = s.name || "blob", c = et();
    c.set("Content-Disposition", `form-data; name="${o}"; filename="${a}"`), c.set("Content-Type", s.type || "application/octet-stream"), 
    n.push({
      headers: c,
      body: s
    });
  }
  t.multipartBody = {
    parts: n
  };
}

var ia = "logPolicy";

function sa(e = {}) {
  var t;
  let r = (t = e.logger) !== null && t !== void 0 ? t : Ve.info, n = new tt({
    additionalAllowedHeaderNames: e.additionalAllowedHeaderNames,
    additionalAllowedQueryParameters: e.additionalAllowedQueryParameters
  });
  return {
    name: ia,
    async sendRequest(o, i) {
      if (!r.enabled) return i(o);
      r(`Request: ${n.sanitize(o)}`);
      let s = await i(o);
      return r(`Response status code: ${s.status}`), r(`Headers: ${n.sanitize(s.headers)}`), 
      s;
    }
  };
}

function zo(e) {
  return typeof e.stream === "function";
}

import { Readable as aa } from "stream";

function kl() {
  return dwo(this, arguments, function*() {
    let t = this.getReader();
    try {
      while (!0) {
        let {done: r, value: n} = yield IHt(t.read());
        if (r) return yield IHt(void 0);
        yield yield IHt(n);
      }
    } finally {
      t.releaseLock();
    }
  });
}

function Vm(e) {
  if (!e[Symbol.asyncIterator]) e[Symbol.asyncIterator] = kl.bind(e);
  if (!e.values) e.values = kl.bind(e);
}

function bl(e) {
  if (e instanceof ReadableStream) return Vm(e), aa.fromWeb(e); else return e;
}

function jm(e) {
  if (e instanceof Uint8Array) return aa.from(Buffer.from(e)); else if (zo(e)) return bl(e.stream()); else return bl(e);
}

async function Pl(e) {
  return function() {
    let t = e.map(r => typeof r === "function" ? r() : r).map(jm);
    return aa.from(function() {
      return dwo(this, arguments, function*() {
        var r, n, o, i;
        for (let l of t) try {
          for (var s = !0, a = (n = void 0, qRs(l)), c; c = yield IHt(a.next()), r = c.done, 
          !r; s = !0) i = c.value, s = !1, yield yield IHt(i);
        } catch (d) {
          n = {
            error: d
          };
        } finally {
          try {
            if (!s && !r && (o = a.return)) yield IHt(o.call(a));
          } finally {
            if (n) throw n.error;
          }
        }
      });
    }());
  };
}

function Ym() {
  return `----AzSDKFormBoundary${Bn()}`;
}

function Wm(e) {
  let t = "";
  for (let [r, n] of e) t += `${r}: ${n}\r\n`;
  return t;
}

function Qm(e) {
  if (e instanceof Uint8Array) return e.byteLength; else if (zo(e)) return e.size === -1 ? void 0 : e.size; else return;
}

function Jm(e) {
  let t = 0;
  for (let r of e) {
    let n = Qm(r);
    if (n === void 0) return; else t += n;
  }
  return t;
}

async function Xm(e, t, r) {
  let n = [ rt(`--${r}`, "utf-8"), ...t.flatMap(i => [ rt(`\r\n`, "utf-8"), rt(Wm(i.headers), "utf-8"), rt(`\r\n`, "utf-8"), i.body, rt(`\r\n--${r}`, "utf-8") ]), rt(`--\r\n\r\n`, "utf-8") ], o = Jm(n);
  if (o) e.headers.set("Content-Length", o);
  e.body = await Pl(n);
}

var Go = "multipartPolicy", Zm = 70, ep = new Set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'()+,-./:=?");

function tp(e) {
  if (e.length > Zm) throw Error(`Multipart boundary "${e}" exceeds maximum length of 70 characters`);
  if (Array.from(e).some(t => !ep.has(t))) throw Error(`Multipart boundary "${e}" contains invalid characters`);
}

function ca() {
  return {
    name: Go,
    async sendRequest(e, t) {
      var r;
      if (!e.multipartBody) return t(e);
      if (e.body) throw Error("multipartBody and regular body cannot be set at the same time");
      let n = e.multipartBody.boundary, o = (r = e.headers.get("Content-Type")) !== null && r !== void 0 ? r : "multipart/mixed", i = o.match(/^(multipart\/[^ ;]+)(?:; *boundary=(.+))?$/);
      if (!i) throw Error(`Got multipart request body, but content-type header was not multipart: ${o}`);
      let [, s, a] = i;
      if (a && n && a !== n) throw Error(`Multipart boundary was specified as ${a} in the header, but got ${n} in the request body`);
      if (n !== null && n !== void 0 || (n = a), n) tp(n); else n = Ym();
      return e.headers.set("Content-Type", `${s}; boundary=${n}`), await Xm(e, e.multipartBody.parts, n), 
      e.multipartBody = void 0, t(e);
    }
  };
}

var Hl = we(dgt(), 1), Fl = we(Ml(), 1);

var lp = "HTTPS_PROXY", dp = "HTTP_PROXY", up = "ALL_PROXY", hp = "NO_PROXY", da = "proxyPolicy", Dl = [], $l = !1, fp = new Map;

function Ko(e) {
  if (process.env[e]) return process.env[e]; else if (process.env[e.toLowerCase()]) return process.env[e.toLowerCase()];
  return;
}

function mp() {
  if (!process) return;
  let e = Ko(lp), t = Ko(up), r = Ko(dp);
  return e || t || r;
}

function pp(e, t, r) {
  if (t.length === 0) return !1;
  let n = new URL(e).hostname;
  if (r === null || r === void 0 ? void 0 : r.has(n)) return r.get(n);
  let o = !1;
  for (let i of t) if (i[0] === ".") {
    if (n.endsWith(i)) o = !0; else if (n.length === i.length - 1 && n === i.slice(1)) o = !0;
  } else if (n === i) o = !0;
  return r === null || r === void 0 || r.set(n, o), o;
}

function gp() {
  let e = Ko(hp);
  if ($l = !0, e) return e.split(",").map(t => t.trim()).filter(t => t.length);
  return [];
}

function yp() {
  let e = mp();
  return e ? new URL(e) : void 0;
}

function Ul(e) {
  let t;
  try {
    t = new URL(e.host);
  } catch (r) {
    throw Error(`Expecting a valid host string in proxy settings, but found "${e.host}".`);
  }
  if (t.port = String(e.port), e.username) t.username = e.username;
  if (e.password) t.password = e.password;
  return t;
}

function Ll(e, t, r) {
  if (e.agent) return;
  let o = new URL(e.url).protocol !== "https:";
  if (e.tlsSettings) Ve.warning("TLS settings are not supported in combination with custom Proxy, certificates provided to the client will be ignored.");
  let i = e.headers.toJSON();
  if (o) {
    if (!t.httpProxyAgent) t.httpProxyAgent = new Fl.HttpProxyAgent(r, {
      headers: i
    });
    e.agent = t.httpProxyAgent;
  } else {
    if (!t.httpsProxyAgent) t.httpsProxyAgent = new Hl.HttpsProxyAgent(r, {
      headers: i
    });
    e.agent = t.httpsProxyAgent;
  }
}

function ua(e, t) {
  if (!$l) Dl.push(...gp());
  let r = e ? Ul(e) : yp(), n = {};
  return {
    name: da,
    async sendRequest(o, i) {
      var s;
      if (!o.proxySettings && r && !pp(o.url, (s = t === null || t === void 0 ? void 0 : t.customNoProxyList) !== null && s !== void 0 ? s : Dl, (t === null || t === void 0 ? void 0 : t.customNoProxyList) ? void 0 : fp)) Ll(o, n, r); else if (o.proxySettings) Ll(o, n, Ul(o.proxySettings));
      return i(o);
    }
  };
}

var Bl = [ "GET", "HEAD" ];

function ha(e = {}) {
  let {maxRetries: t = 20} = e;
  return {
    name: "redirectPolicy",
    async sendRequest(r, n) {
      let o = await n(r);
      return zl(n, o, t);
    }
  };
}

async function zl(e, t, r, n = 0) {
  let {request: o, status: i, headers: s} = t, a = s.get("location");
  if (a && (i === 300 || i === 301 && Bl.includes(o.method) || i === 302 && Bl.includes(o.method) || i === 303 && o.method === "POST" || i === 307) && n < r) {
    let c = new URL(a, o.url);
    if (o.url = c.toString(), i === 303) o.method = "GET", o.headers.delete("Content-Length"), 
    delete o.body;
    o.headers.delete("Authorization");
    let l = await e(o);
    return zl(e, l, r, n + 1);
  }
  return t;
}

function fa(e) {
  return {
    name: "tlsPolicy",
    sendRequest: async (t, r) => {
      if (!t.tlsSettings) t.tlsSettings = e;
      return r(t);
    }
  };
}

function Gl(e = {}) {
  return sa(Object.assign({
    logger: ut.info
  }, e));
}

function ql(e = {}) {
  return ha(e);
}

import * as Kr from "os";

import * as Vo from "process";

function Kl() {
  return "User-Agent";
}

async function Vl(e) {
  if (Vo && Vo.versions) {
    let t = Vo.versions;
    if (t.bun) e.set("Bun", t.bun); else if (t.deno) e.set("Deno", t.deno); else if (t.node) e.set("Node", t.node);
  }
  e.set("OS", `(${Kr.arch()}-${Kr.type()}-${Kr.release()})`);
}

var jo = "1.21.0", jl = 3;

function _p(e) {
  let t = [];
  for (let [r, n] of e) {
    let o = n ? `${r}/${n}` : r;
    t.push(o);
  }
  return t.join(" ");
}

function Yl() {
  return Kl();
}

async function Yo(e) {
  let t = new Map;
  t.set("core-rest-pipeline", jo), await Vl(t);
  let r = _p(t);
  return e ? `${e} ${r}` : r;
}

var Wl = Yl(), Sp = "userAgentPolicy";

function Ql(e = {}) {
  let t = Yo(e.userAgentPrefix);
  return {
    name: Sp,
    async sendRequest(r, n) {
      if (!r.headers.has(Wl)) r.headers.set(Wl, await t);
      return n(r);
    }
  };
}

class Vr extends Error {
  constructor(e) {
    super(e);
    this.name = "AbortError";
  }
}

function Jl(e, t) {
  let {cleanupBeforeAbort: r, abortSignal: n, abortErrorMsg: o} = t !== null && t !== void 0 ? t : {};
  return new Promise((i, s) => {
    function a() {
      s(new Vr(o !== null && o !== void 0 ? o : "The operation was aborted."));
    }
    function c() {
      n === null || n === void 0 || n.removeEventListener("abort", l);
    }
    function l() {
      r === null || r === void 0 || r(), c(), a();
    }
    if (n === null || n === void 0 ? void 0 : n.aborted) return a();
    try {
      e(d => {
        c(), i(d);
      }, d => {
        c(), s(d);
      });
    } catch (d) {
      s(d);
    }
    n === null || n === void 0 || n.addEventListener("abort", l);
  });
}

var vp = "The delay was aborted.";

function ma(e, t) {
  let r, {abortSignal: n, abortErrorMsg: o} = t !== null && t !== void 0 ? t : {};
  return Jl(i => {
    r = setTimeout(i, e);
  }, {
    cleanupBeforeAbort: () => clearTimeout(r),
    abortSignal: n,
    abortErrorMsg: o !== null && o !== void 0 ? o : vp
  });
}

function jr(e) {
  if (tr(e)) return e.message; else {
    let t;
    try {
      if (typeof e === "object" && e) t = JSON.stringify(e); else t = String(e);
    } catch (r) {
      t = "[unable to stringify input]";
    }
    return `Unknown error ${t}`;
  }
}

function Xl(e, t) {
  return Kn(e, t);
}

function Wo(e) {
  return tr(e);
}

var Qo = Gr, Yn = Gr;

var Zl = Symbol("rawContent");

function pa(e) {
  return typeof e[Zl] === "function";
}

function ed(e) {
  if (pa(e)) return e[Zl](); else return e;
}

var ga = Go;

function td() {
  let e = ca();
  return {
    name: ga,
    sendRequest: async (t, r) => {
      if (t.multipartBody) {
        for (let n of t.multipartBody.parts) if (pa(n.body)) n.body = ed(n.body);
      }
      return e.sendRequest(t, r);
    }
  };
}

function rd() {
  return Ys();
}

function nd(e = {}) {
  return Xs(e);
}

function od() {
  return oa();
}

function id(e, t) {
  return ua(e, t);
}

function sd(e = "x-ms-client-request-id") {
  return {
    name: "setClientRequestIdPolicy",
    async sendRequest(t, r) {
      if (!t.headers.has(e)) t.headers.set(e, t.requestId);
      return r(t);
    }
  };
}

function ad(e) {
  return js(e);
}

function cd(e) {
  return fa(e);
}

var Yr = {
  span: Symbol.for("@azure/core-tracing span"),
  namespace: Symbol.for("@azure/core-tracing namespace")
};

function ld(e = {}) {
  let t = new Wn(e.parentContext);
  if (e.span) t = t.setValue(Yr.span, e.span);
  if (e.namespace) t = t.setValue(Yr.namespace, e.namespace);
  return t;
}

class Wn {
  constructor(e) {
    this._contextMap = e instanceof Wn ? new Map(e._contextMap) : new Map;
  }
  setValue(e, t) {
    let r = new Wn(this);
    return r._contextMap.set(e, t), r;
  }
  getValue(e) {
    return this._contextMap.get(e);
  }
  deleteValue(e) {
    let t = new Wn(this);
    return t._contextMap.delete(e), t;
  }
}

var fd = we(hd(), 1), Jo = fd.state;

function kp() {
  return {
    end: () => {},
    isRecording: () => !1,
    recordException: () => {},
    setAttribute: () => {},
    setStatus: () => {},
    addEvent: () => {}
  };
}

function bp() {
  return {
    createRequestHeaders: () => ({}),
    parseTraceparentHeader: () => {},
    startSpan: (e, t) => ({
      span: kp(),
      tracingContext: ld({
        parentContext: t.tracingContext
      })
    }),
    withContext(e, t, ...r) {
      return t(...r);
    }
  };
}

function Qn() {
  if (!Jo.instrumenterImplementation) Jo.instrumenterImplementation = bp();
  return Jo.instrumenterImplementation;
}

function Jn(e) {
  let {namespace: t, packageName: r, packageVersion: n} = e;
  function o(l, d, u) {
    var m;
    let p = Qn().startSpan(l, Object.assign(Object.assign({}, u), {
      packageName: r,
      packageVersion: n,
      tracingContext: (m = d === null || d === void 0 ? void 0 : d.tracingOptions) === null || m === void 0 ? void 0 : m.tracingContext
    })), {tracingContext: y, span: T} = p;
    if (!y.getValue(Yr.namespace)) y = y.setValue(Yr.namespace, t);
    T.setAttribute("az.namespace", y.getValue(Yr.namespace));
    let _ = Object.assign({}, d, {
      tracingOptions: Object.assign(Object.assign({}, d === null || d === void 0 ? void 0 : d.tracingOptions), {
        tracingContext: y
      })
    });
    return {
      span: T,
      updatedOptions: _
    };
  }
  async function i(l, d, u, m) {
    let {span: p, updatedOptions: y} = o(l, d, m);
    try {
      let T = await s(y.tracingOptions.tracingContext, () => Promise.resolve(u(y, p)));
      return p.setStatus({
        status: "success"
      }), T;
    } catch (T) {
      throw p.setStatus({
        status: "error",
        error: T
      }), T;
    } finally {
      p.end();
    }
  }
  function s(l, d, ...u) {
    return Qn().withContext(l, d, ...u);
  }
  function a(l) {
    return Qn().parseTraceparentHeader(l);
  }
  function c(l) {
    return Qn().createRequestHeaders(l);
  }
  return {
    startSpan: o,
    withSpan: i,
    withContext: s,
    parseTraceparentHeader: a,
    createRequestHeaders: c
  };
}

var Wr = ke;

function Xn(e) {
  return qs(e);
}

var Pp = "tracingPolicy";

function md(e = {}) {
  let t = Yo(e.userAgentPrefix), r = new tt({
    additionalAllowedQueryParameters: e.additionalAllowedQueryParameters
  }), n = Op();
  return {
    name: Pp,
    async sendRequest(o, i) {
      var s;
      if (!n) return i(o);
      let a = await t, c = {
        "http.url": r.sanitizeUrl(o.url),
        "http.method": o.method,
        "http.user_agent": a,
        requestId: o.requestId
      };
      if (a) c["http.user_agent"] = a;
      let {span: l, tracingContext: d} = (s = Np(n, o, c)) !== null && s !== void 0 ? s : {};
      if (!l || !d) return i(o);
      try {
        let u = await n.withContext(d, i, o);
        return Mp(l, u), u;
      } catch (u) {
        throw xp(l, u), u;
      }
    }
  };
}

function Op() {
  try {
    return Jn({
      namespace: "",
      packageName: "@azure/core-rest-pipeline",
      packageVersion: jo
    });
  } catch (e) {
    ut.warning(`Error when creating the TracingClient: ${jr(e)}`);
    return;
  }
}

function Np(e, t, r) {
  try {
    let {span: n, updatedOptions: o} = e.startSpan(`HTTP ${t.method}`, {
      tracingOptions: t.tracingOptions
    }, {
      spanKind: "client",
      spanAttributes: r
    });
    if (!n.isRecording()) {
      n.end();
      return;
    }
    let i = e.createRequestHeaders(o.tracingOptions.tracingContext);
    for (let [s, a] of Object.entries(i)) t.headers.set(s, a);
    return {
      span: n,
      tracingContext: o.tracingOptions.tracingContext
    };
  } catch (n) {
    ut.warning(`Skipping creating a tracing span due to an error: ${jr(n)}`);
    return;
  }
}

function xp(e, t) {
  try {
    if (e.setStatus({
      status: "error",
      error: Wo(t) ? t : void 0
    }), Xn(t) && t.statusCode) e.setAttribute("http.status_code", t.statusCode);
    e.end();
  } catch (r) {
    ut.warning(`Skipping tracing span processing due to an error: ${jr(r)}`);
  }
}

function Mp(e, t) {
  try {
    e.setAttribute("http.status_code", t.status);
    let r = t.headers.get("x-ms-request-id");
    if (r) e.setAttribute("serviceRequestId", r);
    if (t.status >= 400) e.setStatus({
      status: "error"
    });
    e.end();
  } catch (r) {
    ut.warning(`Skipping tracing span processing due to an error: ${jr(r)}`);
  }
}

function Xo(e) {
  if (e instanceof AbortSignal) return {
    abortSignal: e
  };
  if (e.aborted) return {
    abortSignal: AbortSignal.abort(e.reason)
  };
  let t = new AbortController, r = !0;
  function n() {
    if (r) e.removeEventListener("abort", o), r = !1;
  }
  function o() {
    t.abort(e.reason), n();
  }
  return e.addEventListener("abort", o), {
    abortSignal: t.signal,
    cleanup: n
  };
}

var Dp = "wrapAbortSignalLikePolicy";

function pd() {
  return {
    name: Dp,
    sendRequest: async (e, t) => {
      if (!e.abortSignal) return t(e);
      let {abortSignal: r, cleanup: n} = Xo(e.abortSignal);
      e.abortSignal = r;
      try {
        return await t(e);
      } finally {
        n === null || n === void 0 || n();
      }
    }
  };
}

function ya(e) {
  var t;
  let r = qn();
  if (Yn) {
    if (e.agent) r.addPolicy(ad(e.agent));
    if (e.tlsOptions) r.addPolicy(cd(e.tlsOptions));
    r.addPolicy(id(e.proxyOptions)), r.addPolicy(rd());
  }
  if (r.addPolicy(pd()), r.addPolicy(od(), {
    beforePolicies: [ ga ]
  }), r.addPolicy(Ql(e.userAgentOptions)), r.addPolicy(sd((t = e.telemetryOptions) === null || t === void 0 ? void 0 : t.clientRequestIdHeaderName)), 
  r.addPolicy(td(), {
    afterPhase: "Deserialize"
  }), r.addPolicy(nd(e.retryOptions), {
    phase: "Retry"
  }), r.addPolicy(md(Object.assign(Object.assign({}, e.userAgentOptions), e.loggingOptions)), {
    afterPhase: "Retry"
  }), Yn) r.addPolicy(ql(e.redirectOptions), {
    afterPhase: "Retry"
  });
  return r.addPolicy(Gl(e.loggingOptions), {
    afterPhase: "Sign"
  }), r;
}

function Ta() {
  let e = Vs();
  return {
    async sendRequest(t) {
      let {abortSignal: r, cleanup: n} = t.abortSignal ? Xo(t.abortSignal) : {};
      try {
        return t.abortSignal = r, await e.sendRequest(t);
      } finally {
        n === null || n === void 0 || n();
      }
    }
  };
}

function rr(e) {
  return et(e);
}

function je(e) {
  return Bs(e);
}

var Up = Pt("core-rest-pipeline retryPolicy");

function Ea(e, t = {
  maxRetries: jl
}) {
  return jn(e, Object.assign({
    logger: Up
  }, t));
}

var Lp = {
  forcedRefreshWindowInMs: 1e3,
  retryIntervalInMs: 3e3,
  refreshWindowInMs: 12e4
};

async function Hp(e, t, r) {
  async function n() {
    if (Date.now() < r) try {
      return await e();
    } catch (i) {
      return null;
    } else {
      let i = await e();
      if (i === null) throw Error("Failed to refresh access token.");
      return i;
    }
  }
  let o = await n();
  while (o === null) await ma(t), o = await n();
  return o;
}

function gd(e, t) {
  let r = null, n = null, o, i = Object.assign(Object.assign({}, Lp), t), s = {
    get isRefreshing() {
      return r !== null;
    },
    get shouldRefresh() {
      var c;
      if (s.isRefreshing) return !1;
      if ((n === null || n === void 0 ? void 0 : n.refreshAfterTimestamp) && n.refreshAfterTimestamp < Date.now()) return !0;
      return ((c = n === null || n === void 0 ? void 0 : n.expiresOnTimestamp) !== null && c !== void 0 ? c : 0) - i.refreshWindowInMs < Date.now();
    },
    get mustRefresh() {
      return n === null || n.expiresOnTimestamp - i.forcedRefreshWindowInMs < Date.now();
    }
  };
  function a(c, l) {
    var d;
    if (!s.isRefreshing) r = Hp(() => e.getToken(c, l), i.retryIntervalInMs, (d = n === null || n === void 0 ? void 0 : n.expiresOnTimestamp) !== null && d !== void 0 ? d : Date.now()).then(m => (r = null, 
    n = m, o = l.tenantId, n)).catch(m => {
      throw r = null, n = null, o = void 0, m;
    });
    return r;
  }
  return async (c, l) => {
    let d = Boolean(l.claims), u = o !== l.tenantId;
    if (d) n = null;
    if (u || d || s.mustRefresh) return a(c, l);
    if (s.shouldRefresh) a(c, l);
    return n;
  };
}

var Cd = "bearerTokenAuthenticationPolicy";

async function Zo(e, t) {
  try {
    return [ await t(e), void 0 ];
  } catch (r) {
    if (Xn(r) && r.response) return [ r.response, r ]; else throw r;
  }
}

async function Fp(e) {
  let {scopes: t, getAccessToken: r, request: n} = e, o = {
    abortSignal: n.abortSignal,
    tracingOptions: n.tracingOptions,
    enableCae: !0
  }, i = await r(t, o);
  if (i) e.request.headers.set("Authorization", `Bearer ${i.token}`);
}

function yd(e) {
  return e.status === 401 && e.headers.has("WWW-Authenticate");
}

async function Td(e, t) {
  var r;
  let {scopes: n} = e, o = await e.getAccessToken(n, {
    enableCae: !0,
    claims: t
  });
  if (!o) return !1;
  return e.request.headers.set("Authorization", `${(r = o.tokenType) !== null && r !== void 0 ? r : "Bearer"} ${o.token}`), 
  !0;
}

function Zn(e) {
  var t, r, n;
  let {credential: o, scopes: i, challengeCallbacks: s} = e, a = e.logger || ut, c = {
    authorizeRequest: (r = (t = s === null || s === void 0 ? void 0 : s.authorizeRequest) === null || t === void 0 ? void 0 : t.bind(s)) !== null && r !== void 0 ? r : Fp,
    authorizeRequestOnChallenge: (n = s === null || s === void 0 ? void 0 : s.authorizeRequestOnChallenge) === null || n === void 0 ? void 0 : n.bind(s)
  }, l = o ? gd(o) : () => Promise.resolve(null);
  return {
    name: Cd,
    async sendRequest(d, u) {
      if (!d.url.toLowerCase().startsWith("https://")) throw Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
      await c.authorizeRequest({
        scopes: Array.isArray(i) ? i : [ i ],
        request: d,
        getAccessToken: l,
        logger: a
      });
      let m, p, y;
      if ([m, p] = await Zo(d, u), yd(m)) {
        let T = Ed(m.headers.get("WWW-Authenticate"));
        if (T) {
          let _;
          try {
            _ = atob(T);
          } catch (k) {
            return a.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${T}`), 
            m;
          }
          if (y = await Td({
            scopes: Array.isArray(i) ? i : [ i ],
            response: m,
            request: d,
            getAccessToken: l,
            logger: a
          }, _), y) [m, p] = await Zo(d, u);
        } else if (c.authorizeRequestOnChallenge) {
          if (y = await c.authorizeRequestOnChallenge({
            scopes: Array.isArray(i) ? i : [ i ],
            request: d,
            response: m,
            getAccessToken: l,
            logger: a
          }), y) [m, p] = await Zo(d, u);
          if (yd(m)) {
            if (T = Ed(m.headers.get("WWW-Authenticate")), T) {
              let _;
              try {
                _ = atob(T);
              } catch (k) {
                return a.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${T}`), 
                m;
              }
              if (y = await Td({
                scopes: Array.isArray(i) ? i : [ i ],
                response: m,
                request: d,
                getAccessToken: l,
                logger: a
              }, _), y) [m, p] = await Zo(d, u);
            }
          }
        }
      }
      if (p) throw p; else return m;
    }
  };
}

function $p(e) {
  let t = /(\w+)\s+((?:\w+=(?:"[^"]*"|[^,]*),?\s*)+)/g, r = /(\w+)="([^"]*)"/g, n = [], o;
  while ((o = t.exec(e)) !== null) {
    let i = o[1], s = o[2], a = {}, c;
    while ((c = r.exec(s)) !== null) a[c[1]] = c[2];
    n.push({
      scheme: i,
      params: a
    });
  }
  return n;
}

function Ed(e) {
  var t;
  if (!e) return;
  return (t = $p(e).find(n => n.scheme === "Bearer" && n.params.claims && n.params.error === "insufficient_claims")) === null || t === void 0 ? void 0 : t.params.claims;
}

var Ca = "$", ei = "_";

function Bp(e, t) {
  return t !== "Composite" && t !== "Dictionary" && (typeof e === "string" || typeof e === "number" || typeof e === "boolean" || (t === null || t === void 0 ? void 0 : t.match(/^(Date|DateTime|DateTimeRfc1123|UnixTime|ByteArray|Base64Url)$/i)) !== null || e === void 0 || e === null);
}

function zp(e) {
  let t = Object.assign(Object.assign({}, e.headers), e.body);
  if (e.hasNullableType && Object.getOwnPropertyNames(t).length === 0) return e.shouldWrapBody ? {
    body: null
  } : null; else return e.shouldWrapBody ? Object.assign(Object.assign({}, e.headers), {
    body: e.body
  }) : t;
}

function Aa(e, t) {
  var r, n;
  let o = e.parsedHeaders;
  if (e.request.method === "HEAD") return Object.assign(Object.assign({}, o), {
    body: e.parsedBody
  });
  let i = t && t.bodyMapper, s = Boolean(i === null || i === void 0 ? void 0 : i.nullable), a = i === null || i === void 0 ? void 0 : i.type.name;
  if (a === "Stream") return Object.assign(Object.assign({}, o), {
    blobBody: e.blobBody,
    readableStreamBody: e.readableStreamBody
  });
  let c = a === "Composite" && i.type.modelProperties || {}, l = Object.keys(c).some(d => c[d].serializedName === "");
  if (a === "Sequence" || l) {
    let d = (r = e.parsedBody) !== null && r !== void 0 ? r : [];
    for (let u of Object.keys(c)) if (c[u].serializedName) d[u] = (n = e.parsedBody) === null || n === void 0 ? void 0 : n[u];
    if (o) for (let u of Object.keys(o)) d[u] = o[u];
    return s && !e.parsedBody && !o && Object.getOwnPropertyNames(c).length === 0 ? null : d;
  }
  return zp({
    body: e.parsedBody,
    headers: o,
    hasNullableType: s,
    shouldWrapBody: Bp(e.parsedBody, a)
  });
}

var ht = {
  Base64Url: "Base64Url",
  Boolean: "Boolean",
  ByteArray: "ByteArray",
  Composite: "Composite",
  Date: "Date",
  DateTime: "DateTime",
  DateTimeRfc1123: "DateTimeRfc1123",
  Dictionary: "Dictionary",
  Enum: "Enum",
  Number: "Number",
  Object: "Object",
  Sequence: "Sequence",
  String: "String",
  Stream: "Stream",
  TimeSpan: "TimeSpan",
  UnixTime: "UnixTime"
};

var Sd = we(_d(), 1), Ia = Sd.state;

function Nt(e, t, r) {
  let {parameterPath: n, mapper: o} = t, i;
  if (typeof n === "string") n = [ n ];
  if (Array.isArray(n)) {
    if (n.length > 0) if (o.isConstant) i = o.defaultValue; else {
      let s = Rd(e, n);
      if (!s.propertyFound && r) s = Rd(r, n);
      let a = !1;
      if (!s.propertyFound) a = o.required || n[0] === "options" && n.length === 2;
      i = a ? o.defaultValue : s.propertyValue;
    }
  } else {
    if (o.required) i = {};
    for (let s in n) {
      let a = o.type.modelProperties[s], c = n[s], l = Nt(e, {
        parameterPath: c,
        mapper: a
      }, r);
      if (l !== void 0) {
        if (!i) i = {};
        i[s] = l;
      }
    }
  }
  return i;
}

function Rd(e, t) {
  let r = {
    propertyFound: !1
  }, n = 0;
  for (;n < t.length; ++n) {
    let o = t[n];
    if (e && o in e) e = e[o]; else break;
  }
  if (n === t.length) r.propertyValue = e, r.propertyFound = !0;
  return r;
}

var wd = Symbol.for("@azure/core-client original request");

function Gp(e) {
  return wd in e;
}

function ft(e) {
  if (Gp(e)) return ft(e[wd]);
  let t = Ia.operationRequestMap.get(e);
  if (!t) t = {}, Ia.operationRequestMap.set(e, t);
  return t;
}

var qp = [ "application/json", "text/json" ], Kp = [ "application/xml", "application/atom+xml" ], Vp = "deserializationPolicy";

function vd(e = {}) {
  var t, r, n, o, i, s, a;
  let c = (r = (t = e.expectedContentTypes) === null || t === void 0 ? void 0 : t.json) !== null && r !== void 0 ? r : qp, l = (o = (n = e.expectedContentTypes) === null || n === void 0 ? void 0 : n.xml) !== null && o !== void 0 ? o : Kp, {parseXML: d, serializerOptions: u} = e, m = {
    xml: {
      rootName: (i = u === null || u === void 0 ? void 0 : u.xml.rootName) !== null && i !== void 0 ? i : "",
      includeRoot: (s = u === null || u === void 0 ? void 0 : u.xml.includeRoot) !== null && s !== void 0 ? s : !1,
      xmlCharKey: (a = u === null || u === void 0 ? void 0 : u.xml.xmlCharKey) !== null && a !== void 0 ? a : ei
    }
  };
  return {
    name: Vp,
    async sendRequest(p, y) {
      let T = await y(p);
      return Wp(c, l, T, m, d);
    }
  };
}

function jp(e) {
  let t, r = e.request, n = ft(r), o = n === null || n === void 0 ? void 0 : n.operationSpec;
  if (o) if (!(n === null || n === void 0 ? void 0 : n.operationResponseGetter)) t = o.responses[e.status]; else t = n === null || n === void 0 ? void 0 : n.operationResponseGetter(o, e);
  return t;
}

function Yp(e) {
  let t = e.request, r = ft(t), n = r === null || r === void 0 ? void 0 : r.shouldDeserialize, o;
  if (n === void 0) o = !0; else if (typeof n === "boolean") o = n; else o = n(e);
  return o;
}

async function Wp(e, t, r, n, o) {
  let i = await Xp(e, t, r, n, o);
  if (!Yp(i)) return i;
  let s = ft(i.request), a = s === null || s === void 0 ? void 0 : s.operationSpec;
  if (!a || !a.responses) return i;
  let c = jp(i), {error: l, shouldReturnResponse: d} = Jp(i, a, c, n);
  if (l) throw l; else if (d) return i;
  if (c) {
    if (c.bodyMapper) {
      let u = i.parsedBody;
      if (a.isXML && c.bodyMapper.type.name === ht.Sequence) u = typeof u === "object" ? u[c.bodyMapper.xmlElementName] : [];
      try {
        i.parsedBody = a.serializer.deserialize(c.bodyMapper, u, "operationRes.parsedBody", n);
      } catch (m) {
        throw new Wr(`Error ${m} occurred in deserializing the responseBody - ${i.bodyAsText}`, {
          statusCode: i.status,
          request: i.request,
          response: i
        });
      }
    } else if (a.httpMethod === "HEAD") i.parsedBody = r.status >= 200 && r.status < 300;
    if (c.headersMapper) i.parsedHeaders = a.serializer.deserialize(c.headersMapper, i.headers.toJSON(), "operationRes.parsedHeaders", {
      xml: {},
      ignoreUnknownProperties: !0
    });
  }
  return i;
}

function Qp(e) {
  let t = Object.keys(e.responses);
  return t.length === 0 || t.length === 1 && t[0] === "default";
}

function Jp(e, t, r, n) {
  var o, i, s, a, c;
  let l = 200 <= e.status && e.status < 300;
  if (Qp(t) ? l : !!r) if (r) {
    if (!r.isError) return {
      error: null,
      shouldReturnResponse: !1
    };
  } else return {
    error: null,
    shouldReturnResponse: !1
  };
  let u = r !== null && r !== void 0 ? r : t.responses.default, m = ((o = e.request.streamResponseStatusCodes) === null || o === void 0 ? void 0 : o.has(e.status)) ? `Unexpected status code: ${e.status}` : e.bodyAsText, p = new Wr(m, {
    statusCode: e.status,
    request: e.request,
    response: e
  });
  if (!u && !(((s = (i = e.parsedBody) === null || i === void 0 ? void 0 : i.error) === null || s === void 0 ? void 0 : s.code) && ((c = (a = e.parsedBody) === null || a === void 0 ? void 0 : a.error) === null || c === void 0 ? void 0 : c.message))) throw p;
  let y = u === null || u === void 0 ? void 0 : u.bodyMapper, T = u === null || u === void 0 ? void 0 : u.headersMapper;
  try {
    if (e.parsedBody) {
      let _ = e.parsedBody, k;
      if (y) {
        let B = _;
        if (t.isXML && y.type.name === ht.Sequence) {
          B = [];
          let X = y.xmlElementName;
          if (typeof _ === "object" && X) B = _[X];
        }
        k = t.serializer.deserialize(y, B, "error.response.parsedBody", n);
      }
      let U = _.error || k || _;
      if (p.code = U.code, U.message) p.message = U.message;
      if (y) p.response.parsedBody = k;
    }
    if (e.headers && T) p.response.parsedHeaders = t.serializer.deserialize(T, e.headers.toJSON(), "operationRes.parsedHeaders");
  } catch (_) {
    p.message = `Error "${_.message}" occurred in deserializing the responseBody - "${e.bodyAsText}" for the default response.`;
  }
  return {
    error: p,
    shouldReturnResponse: !1
  };
}

async function Xp(e, t, r, n, o) {
  var i;
  if (!((i = r.request.streamResponseStatusCodes) === null || i === void 0 ? void 0 : i.has(r.status)) && r.bodyAsText) {
    let s = r.bodyAsText, a = r.headers.get("Content-Type") || "", c = !a ? [] : a.split(";").map(l => l.toLowerCase());
    try {
      if (c.length === 0 || c.some(l => e.indexOf(l) !== -1)) return r.parsedBody = JSON.parse(s), 
      r; else if (c.some(l => t.indexOf(l) !== -1)) {
        if (!o) throw Error("Parsing XML not supported.");
        let l = await o(s, n.xml);
        return r.parsedBody = l, r;
      }
    } catch (l) {
      let d = `Error "${l}" occurred while parsing the response body - ${r.bodyAsText}.`, u = l.code || Wr.PARSE_ERROR;
      throw new Wr(d, {
        code: u,
        statusCode: r.status,
        request: r.request,
        response: r
      });
    }
  }
  return r;
}

function kd(e) {
  let t = new Set;
  for (let r in e.responses) {
    let n = e.responses[r];
    if (n.bodyMapper && n.bodyMapper.type.name === ht.Stream) t.add(Number(r));
  }
  return t;
}

function nt(e) {
  let {parameterPath: t, mapper: r} = e, n;
  if (typeof t === "string") n = t; else if (Array.isArray(t)) n = t.join("."); else n = r.serializedName;
  return n;
}

var Zp = "serializationPolicy";

function bd(e = {}) {
  let t = e.stringifyXML;
  return {
    name: Zp,
    async sendRequest(r, n) {
      let o = ft(r), i = o === null || o === void 0 ? void 0 : o.operationSpec, s = o === null || o === void 0 ? void 0 : o.operationArguments;
      if (i && s) eg(r, s, i), tg(r, s, i, t);
      return n(r);
    }
  };
}

function eg(e, t, r) {
  var n, o;
  if (r.headerParameters) for (let s of r.headerParameters) {
    let a = Nt(t, s);
    if (a !== null && a !== void 0 || s.mapper.required) {
      a = r.serializer.serialize(s.mapper, a, nt(s));
      let c = s.mapper.headerCollectionPrefix;
      if (c) for (let l of Object.keys(a)) e.headers.set(c + l, a[l]); else e.headers.set(s.mapper.serializedName || nt(s), a);
    }
  }
  let i = (o = (n = t.options) === null || n === void 0 ? void 0 : n.requestOptions) === null || o === void 0 ? void 0 : o.customHeaders;
  if (i) for (let s of Object.keys(i)) e.headers.set(s, i[s]);
}

function tg(e, t, r, n = function() {
  throw Error("XML serialization unsupported!");
}) {
  var o, i, s, a, c;
  let l = (o = t.options) === null || o === void 0 ? void 0 : o.serializerOptions, d = {
    xml: {
      rootName: (i = l === null || l === void 0 ? void 0 : l.xml.rootName) !== null && i !== void 0 ? i : "",
      includeRoot: (s = l === null || l === void 0 ? void 0 : l.xml.includeRoot) !== null && s !== void 0 ? s : !1,
      xmlCharKey: (a = l === null || l === void 0 ? void 0 : l.xml.xmlCharKey) !== null && a !== void 0 ? a : ei
    }
  }, u = d.xml.xmlCharKey;
  if (r.requestBody && r.requestBody.mapper) {
    e.body = Nt(t, r.requestBody);
    let m = r.requestBody.mapper, {required: p, serializedName: y, xmlName: T, xmlElementName: _, xmlNamespace: k, xmlNamespacePrefix: U, nullable: B} = m, X = m.type.name;
    try {
      if (e.body !== void 0 && e.body !== null || B && e.body === null || p) {
        let I = nt(r.requestBody);
        e.body = r.serializer.serialize(m, e.body, I, d);
        let A = X === ht.Stream;
        if (r.isXML) {
          let E = U ? `xmlns:${U}` : "xmlns", S = rg(k, E, X, e.body, d);
          if (X === ht.Sequence) e.body = n(ng(S, _ || T || y, E, k), {
            rootName: T || y,
            xmlCharKey: u
          }); else if (!A) e.body = n(S, {
            rootName: T || y,
            xmlCharKey: u
          });
        } else if (X === ht.String && (((c = r.contentType) === null || c === void 0 ? void 0 : c.match("text/plain")) || r.mediaType === "text")) return; else if (!A) e.body = JSON.stringify(e.body);
      }
    } catch (I) {
      throw Error(`Error "${I.message}" occurred in serializing the payload - ${JSON.stringify(y, void 0, "  ")}.`);
    }
  } else if (r.formDataParameters && r.formDataParameters.length > 0) {
    e.formData = {};
    for (let m of r.formDataParameters) {
      let p = Nt(t, m);
      if (p !== void 0 && p !== null) {
        let y = m.mapper.serializedName || nt(m);
        e.formData[y] = r.serializer.serialize(m.mapper, p, nt(m), d);
      }
    }
  }
}

function rg(e, t, r, n, o) {
  if (e && ![ "Composite", "Sequence", "Dictionary" ].includes(r)) {
    let i = {};
    return i[o.xml.xmlCharKey] = n, i[Ca] = {
      [t]: e
    }, i;
  }
  return n;
}

function ng(e, t, r, n) {
  if (!Array.isArray(e)) e = [ e ];
  if (!r || !n) return {
    [t]: e
  };
  let o = {
    [t]: e
  };
  return o[Ca] = {
    [r]: n
  }, o;
}

function Pd(e = {}) {
  let t = ya(e !== null && e !== void 0 ? e : {});
  if (e.credentialOptions) t.addPolicy(Zn({
    credential: e.credentialOptions.credential,
    scopes: e.credentialOptions.credentialScopes
  }));
  return t.addPolicy(bd(e.serializationOptions), {
    phase: "Serialize"
  }), t.addPolicy(vd(e.deserializationOptions), {
    phase: "Deserialize"
  }), t;
}

var _a;

function Od() {
  if (!_a) _a = Ta();
  return _a;
}

var og = {
  CSV: ",",
  SSV: " ",
  Multi: "Multi",
  TSV: "\t",
  Pipes: "|"
};

function xd(e, t, r, n) {
  let o = ig(t, r, n), i = !1, s = Nd(e, o);
  if (t.path) {
    let l = Nd(t.path, o);
    if (t.path === "/{nextLink}" && l.startsWith("/")) l = l.substring(1);
    if (sg(l)) s = l, i = !0; else s = ag(s, l);
  }
  let {queryParams: a, sequenceParams: c} = cg(t, r, n);
  return s = dg(s, a, c, i), s;
}

function Nd(e, t) {
  let r = e;
  for (let [n, o] of t) r = r.split(n).join(o);
  return r;
}

function ig(e, t, r) {
  var n;
  let o = new Map;
  if ((n = e.urlParameters) === null || n === void 0 ? void 0 : n.length) for (let i of e.urlParameters) {
    let s = Nt(t, i, r), a = nt(i);
    if (s = e.serializer.serialize(i.mapper, s, a), !i.skipEncoding) s = encodeURIComponent(s);
    o.set(`{${i.mapper.serializedName || a}}`, s);
  }
  return o;
}

function sg(e) {
  return e.includes("://");
}

function ag(e, t) {
  if (!t) return e;
  let r = new URL(e), n = r.pathname;
  if (!n.endsWith("/")) n = `${n}/`;
  if (t.startsWith("/")) t = t.substring(1);
  let o = t.indexOf("?");
  if (o !== -1) {
    let i = t.substring(0, o), s = t.substring(o + 1);
    if (n = n + i, s) r.search = r.search ? `${r.search}&${s}` : s;
  } else n = n + t;
  return r.pathname = n, r.toString();
}

function cg(e, t, r) {
  var n;
  let o = new Map, i = new Set;
  if ((n = e.queryParameters) === null || n === void 0 ? void 0 : n.length) for (let s of e.queryParameters) {
    if (s.mapper.type.name === "Sequence" && s.mapper.serializedName) i.add(s.mapper.serializedName);
    let a = Nt(t, s, r);
    if (a !== void 0 && a !== null || s.mapper.required) {
      a = e.serializer.serialize(s.mapper, a, nt(s));
      let c = s.collectionFormat ? og[s.collectionFormat] : "";
      if (Array.isArray(a)) a = a.map(l => {
        if (l === null || l === void 0) return "";
        return l;
      });
      if (s.collectionFormat === "Multi" && a.length === 0) continue; else if (Array.isArray(a) && (s.collectionFormat === "SSV" || s.collectionFormat === "TSV")) a = a.join(c);
      if (!s.skipEncoding) if (Array.isArray(a)) a = a.map(l => encodeURIComponent(l)); else a = encodeURIComponent(a);
      if (Array.isArray(a) && (s.collectionFormat === "CSV" || s.collectionFormat === "Pipes")) a = a.join(c);
      o.set(s.mapper.serializedName || nt(s), a);
    }
  }
  return {
    queryParams: o,
    sequenceParams: i
  };
}

function lg(e) {
  let t = new Map;
  if (!e || e[0] !== "?") return t;
  e = e.slice(1);
  let r = e.split("&");
  for (let n of r) {
    let [o, i] = n.split("=", 2), s = t.get(o);
    if (s) if (Array.isArray(s)) s.push(i); else t.set(o, [ s, i ]); else t.set(o, i);
  }
  return t;
}

function dg(e, t, r, n = !1) {
  if (t.size === 0) return e;
  let o = new URL(e), i = lg(o.search);
  for (let [a, c] of t) {
    let l = i.get(a);
    if (Array.isArray(l)) if (Array.isArray(c)) {
      l.push(...c);
      let d = new Set(l);
      i.set(a, Array.from(d));
    } else l.push(c); else if (l) {
      if (Array.isArray(c)) c.unshift(l); else if (r.has(a)) i.set(a, [ l, c ]);
      if (!n) i.set(a, c);
    } else i.set(a, c);
  }
  let s = [];
  for (let [a, c] of i) if (typeof c === "string") s.push(`${a}=${c}`); else if (Array.isArray(c)) for (let l of c) s.push(`${a}=${l}`); else s.push(`${a}=${c}`);
  return o.search = s.length ? `?${s.join("&")}` : "", o.toString();
}

var Md = Pt("core-client");

class ti {
  constructor(e = {}) {
    var t, r;
    if (this._requestContentType = e.requestContentType, this._endpoint = (t = e.endpoint) !== null && t !== void 0 ? t : e.baseUri, 
    e.baseUri) Md.warning("The baseUri option for SDK Clients has been deprecated, please use endpoint instead.");
    if (this._allowInsecureConnection = e.allowInsecureConnection, this._httpClient = e.httpClient || Od(), 
    this.pipeline = e.pipeline || ug(e), (r = e.additionalPolicies) === null || r === void 0 ? void 0 : r.length) for (let {policy: n, position: o} of e.additionalPolicies) {
      let i = o === "perRetry" ? "Sign" : void 0;
      this.pipeline.addPolicy(n, {
        afterPhase: i
      });
    }
  }
  async sendRequest(e) {
    return this.pipeline.sendRequest(this._httpClient, e);
  }
  async sendOperationRequest(e, t) {
    let r = t.baseUrl || this._endpoint;
    if (!r) throw Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a endpoint string property that contains the base URL to use.");
    let n = xd(r, t, e, this), o = je({
      url: n
    });
    o.method = t.httpMethod;
    let i = ft(o);
    i.operationSpec = t, i.operationArguments = e;
    let s = t.contentType || this._requestContentType;
    if (s && t.requestBody) o.headers.set("Content-Type", s);
    let a = e.options;
    if (a) {
      let c = a.requestOptions;
      if (c) {
        if (c.timeout) o.timeout = c.timeout;
        if (c.onUploadProgress) o.onUploadProgress = c.onUploadProgress;
        if (c.onDownloadProgress) o.onDownloadProgress = c.onDownloadProgress;
        if (c.shouldDeserialize !== void 0) i.shouldDeserialize = c.shouldDeserialize;
        if (c.allowInsecureConnection) o.allowInsecureConnection = !0;
      }
      if (a.abortSignal) o.abortSignal = a.abortSignal;
      if (a.tracingOptions) o.tracingOptions = a.tracingOptions;
    }
    if (this._allowInsecureConnection) o.allowInsecureConnection = !0;
    if (o.streamResponseStatusCodes === void 0) o.streamResponseStatusCodes = kd(t);
    try {
      let c = await this.sendRequest(o), l = Aa(c, t.responses[c.status]);
      if (a === null || a === void 0 ? void 0 : a.onResponse) a.onResponse(c, l);
      return l;
    } catch (c) {
      if (typeof c === "object" && (c === null || c === void 0 ? void 0 : c.response)) {
        let l = c.response, d = Aa(l, t.responses[c.statusCode] || t.responses.default);
        if (c.details = d, a === null || a === void 0 ? void 0 : a.onResponse) a.onResponse(l, d, c);
      }
      throw c;
    }
  }
}

function ug(e) {
  let t = hg(e), r = e.credential && t ? {
    credentialScopes: t,
    credential: e.credential
  } : void 0;
  return Pd(Object.assign(Object.assign({}, e), {
    credentialOptions: r
  }));
}

function hg(e) {
  if (e.credentialScopes) return e.credentialScopes;
  if (e.endpoint) return `${e.endpoint}/.default`;
  if (e.baseUri) return `${e.baseUri}/.default`;
  if (e.credential && !e.credentialScopes) throw Error("When using credentials, the ServiceClientOptions must contain either a endpoint or a credentialScopes. Unable to create a bearerTokenAuthenticationPolicy");
  return;
}

function Dd(e) {
  if (e === "adfs") return "oauth2/token"; else return "oauth2/v2.0/token";
}

var Z = Jn({
  namespace: "Microsoft.AAD",
  packageName: "@azure/identity",
  packageVersion: xo
});

var Ud = "Specifying a `clientId` or `resourceId` is not supported by the Service Fabric managed identity environment. The managed identity configuration is determined by the Service Fabric cluster resource configuration. See https://aka.ms/servicefabricmi for more information";

function eo(e) {
  let t = "";
  if (Array.isArray(e)) {
    if (e.length !== 1) return;
    t = e[0];
  } else if (typeof e === "string") t = e;
  if (!t.endsWith("/.default")) return t;
  return t.substr(0, t.lastIndexOf("/.default"));
}

function Ld(e) {
  if (typeof e.expires_on === "number") return e.expires_on * 1e3;
  if (typeof e.expires_on === "string") {
    let t = +e.expires_on;
    if (!isNaN(t)) return t * 1e3;
    let r = Date.parse(e.expires_on);
    if (!isNaN(r)) return r;
  }
  if (typeof e.expires_in === "number") return Date.now() + e.expires_in * 1e3;
  throw Error(`Failed to parse token expiration from body. expires_in="${e.expires_in}", expires_on="${e.expires_on}"`);
}

function Hd(e) {
  if (e.refresh_on) {
    if (typeof e.refresh_on === "number") return e.refresh_on * 1e3;
    if (typeof e.refresh_on === "string") {
      let t = +e.refresh_on;
      if (!isNaN(t)) return t * 1e3;
      let r = Date.parse(e.refresh_on);
      if (!isNaN(r)) return r;
    }
    throw Error(`Failed to parse refresh_on from body. refresh_on="${e.refresh_on}"`);
  } else return;
}

var to = "noCorrelationId";

function fg(e) {
  let t = e === null || e === void 0 ? void 0 : e.authorityHost;
  if (Qo) t = t !== null && t !== void 0 ? t : process.env.AZURE_AUTHORITY_HOST;
  return t !== null && t !== void 0 ? t : Fn;
}

class Qr extends ti {
  constructor(e) {
    var t, r;
    let n = `azsdk-js-identity/${xo}`, o = ((t = e === null || e === void 0 ? void 0 : e.userAgentOptions) === null || t === void 0 ? void 0 : t.userAgentPrefix) ? `${e.userAgentOptions.userAgentPrefix} ${n}` : `${n}`, i = fg(e);
    if (!i.startsWith("https:")) throw Error("The authorityHost address must use the 'https' protocol.");
    super(Object.assign(Object.assign({
      requestContentType: "application/json; charset=utf-8",
      retryOptions: {
        maxRetries: 3
      }
    }, e), {
      userAgentOptions: {
        userAgentPrefix: o
      },
      baseUri: i
    }));
    if (this.allowInsecureConnection = !1, this.authorityHost = i, this.abortControllers = new Map, 
    this.allowLoggingAccountIdentifiers = (r = e === null || e === void 0 ? void 0 : e.loggingOptions) === null || r === void 0 ? void 0 : r.allowLoggingAccountIdentifiers, 
    this.tokenCredentialOptions = Object.assign({}, e), e === null || e === void 0 ? void 0 : e.allowInsecureConnection) this.allowInsecureConnection = e.allowInsecureConnection;
  }
  async sendTokenRequest(e) {
    Be.info(`IdentityClient: sending token request to [${e.url}]`);
    let t = await this.sendRequest(e);
    if (t.bodyAsText && (t.status === 200 || t.status === 201)) {
      let r = JSON.parse(t.bodyAsText);
      if (!r.access_token) return null;
      this.logIdentifiers(t);
      let n = {
        accessToken: {
          token: r.access_token,
          expiresOnTimestamp: Ld(r),
          refreshAfterTimestamp: Hd(r),
          tokenType: "Bearer"
        },
        refreshToken: r.refresh_token
      };
      return Be.info(`IdentityClient: [${e.url}] token acquired, expires on ${n.accessToken.expiresOnTimestamp}`), 
      n;
    } else {
      let r = new $n(t.status, t.bodyAsText);
      throw Be.warning(`IdentityClient: authentication error. HTTP status: ${t.status}, ${r.errorResponse.errorDescription}`), 
      r;
    }
  }
  async refreshAccessToken(e, t, r, n, o, i = {}) {
    if (n === void 0) return null;
    Be.info(`IdentityClient: refreshing access token with client ID: ${t}, scopes: ${r} started`);
    let s = {
      grant_type: "refresh_token",
      client_id: t,
      refresh_token: n,
      scope: r
    };
    if (o !== void 0) s.client_secret = o;
    let a = new URLSearchParams(s);
    return Z.withSpan("IdentityClient.refreshAccessToken", i, async c => {
      try {
        let l = Dd(e), d = je({
          url: `${this.authorityHost}/${e}/${l}`,
          method: "POST",
          body: a.toString(),
          abortSignal: i.abortSignal,
          headers: rr({
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          }),
          tracingOptions: c.tracingOptions
        }), u = await this.sendTokenRequest(d);
        return Be.info(`IdentityClient: refreshed token for client ID: ${t}`), u;
      } catch (l) {
        if (l.name === Hs && l.errorResponse.error === "interaction_required") return Be.info(`IdentityClient: interaction required for client ID: ${t}`), 
        null; else throw Be.warning(`IdentityClient: failed refreshing token for client ID: ${t}: ${l}`), 
        l;
      }
    });
  }
  generateAbortSignal(e) {
    let t = new AbortController, r = this.abortControllers.get(e) || [];
    r.push(t), this.abortControllers.set(e, r);
    let n = t.signal.onabort;
    return t.signal.onabort = (...o) => {
      if (this.abortControllers.set(e, void 0), n) n.apply(t.signal, o);
    }, t.signal;
  }
  abortRequests(e) {
    let t = e || to, r = [ ...this.abortControllers.get(t) || [], ...this.abortControllers.get(to) || [] ];
    if (!r.length) return;
    for (let n of r) n.abort();
    this.abortControllers.set(t, void 0);
  }
  getCorrelationId(e) {
    var t;
    let r = (t = e === null || e === void 0 ? void 0 : e.body) === null || t === void 0 ? void 0 : t.split("&").map(n => n.split("=")).find(([n]) => n === "client-request-id");
    return r && r.length ? r[1] || to : to;
  }
  async sendGetRequestAsync(e, t) {
    let r = je({
      url: e,
      method: "GET",
      body: t === null || t === void 0 ? void 0 : t.body,
      allowInsecureConnection: this.allowInsecureConnection,
      headers: rr(t === null || t === void 0 ? void 0 : t.headers),
      abortSignal: this.generateAbortSignal(to)
    }), n = await this.sendRequest(r);
    return this.logIdentifiers(n), {
      body: n.bodyAsText ? JSON.parse(n.bodyAsText) : void 0,
      headers: n.headers.toJSON(),
      status: n.status
    };
  }
  async sendPostRequestAsync(e, t) {
    let r = je({
      url: e,
      method: "POST",
      body: t === null || t === void 0 ? void 0 : t.body,
      headers: rr(t === null || t === void 0 ? void 0 : t.headers),
      allowInsecureConnection: this.allowInsecureConnection,
      abortSignal: this.generateAbortSignal(this.getCorrelationId(t))
    }), n = await this.sendRequest(r);
    return this.logIdentifiers(n), {
      body: n.bodyAsText ? JSON.parse(n.bodyAsText) : void 0,
      headers: n.headers.toJSON(),
      status: n.status
    };
  }
  getTokenCredentialOptions() {
    return this.tokenCredentialOptions;
  }
  logIdentifiers(e) {
    if (!this.allowLoggingAccountIdentifiers || !e.bodyAsText) return;
    let t = "No User Principal Name available";
    try {
      let n = (e.parsedBody || JSON.parse(e.bodyAsText)).access_token;
      if (!n) return;
      let o = n.split(".")[1], {appid: i, upn: s, tid: a, oid: c} = JSON.parse(Buffer.from(o, "base64").toString("utf8"));
      Be.info(`[Authenticated account] Client ID: ${i}. Tenant ID: ${a}. User Principal Name: ${s || t}. Object ID (user): ${c}`);
    } catch (r) {
      Be.warning("allowLoggingAccountIdentifiers was set, but we couldn't log the account information. Error:", r.message);
    }
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Jr {
  static serializeJSONBlob(e) {
    return JSON.stringify(e);
  }
  static serializeAccounts(e) {
    let t = {};
    return Object.keys(e).map(function(r) {
      let n = e[r];
      t[r] = {
        home_account_id: n.homeAccountId,
        environment: n.environment,
        realm: n.realm,
        local_account_id: n.localAccountId,
        username: n.username,
        authority_type: n.authorityType,
        name: n.name,
        client_info: n.clientInfo,
        last_modification_time: n.lastModificationTime,
        last_modification_app: n.lastModificationApp,
        tenantProfiles: n.tenantProfiles?.map(o => JSON.stringify(o))
      };
    }), t;
  }
  static serializeIdTokens(e) {
    let t = {};
    return Object.keys(e).map(function(r) {
      let n = e[r];
      t[r] = {
        home_account_id: n.homeAccountId,
        environment: n.environment,
        credential_type: n.credentialType,
        client_id: n.clientId,
        secret: n.secret,
        realm: n.realm
      };
    }), t;
  }
  static serializeAccessTokens(e) {
    let t = {};
    return Object.keys(e).map(function(r) {
      let n = e[r];
      t[r] = {
        home_account_id: n.homeAccountId,
        environment: n.environment,
        credential_type: n.credentialType,
        client_id: n.clientId,
        secret: n.secret,
        realm: n.realm,
        target: n.target,
        cached_at: n.cachedAt,
        expires_on: n.expiresOn,
        extended_expires_on: n.extendedExpiresOn,
        refresh_on: n.refreshOn,
        key_id: n.keyId,
        token_type: n.tokenType,
        requestedClaims: n.requestedClaims,
        requestedClaimsHash: n.requestedClaimsHash,
        userAssertionHash: n.userAssertionHash
      };
    }), t;
  }
  static serializeRefreshTokens(e) {
    let t = {};
    return Object.keys(e).map(function(r) {
      let n = e[r];
      t[r] = {
        home_account_id: n.homeAccountId,
        environment: n.environment,
        credential_type: n.credentialType,
        client_id: n.clientId,
        secret: n.secret,
        family_id: n.familyId,
        target: n.target,
        realm: n.realm
      };
    }), t;
  }
  static serializeAppMetadata(e) {
    let t = {};
    return Object.keys(e).map(function(r) {
      let n = e[r];
      t[r] = {
        client_id: n.clientId,
        environment: n.environment,
        family_id: n.familyId
      };
    }), t;
  }
  static serializeAllCache(e) {
    return {
      Account: this.serializeAccounts(e.accounts),
      IdToken: this.serializeIdTokens(e.idTokens),
      AccessToken: this.serializeAccessTokens(e.accessTokens),
      RefreshToken: this.serializeRefreshTokens(e.refreshTokens),
      AppMetadata: this.serializeAppMetadata(e.appMetadata)
    };
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var f = {
  LIBRARY_NAME: "MSAL.JS",
  SKU: "msal.js.common",
  DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
  DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
  DEFAULT_COMMON_TENANT: "common",
  ADFS: "adfs",
  DSTS: "dstsv2",
  AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
  CIAM_AUTH_URL: ".ciamlogin.com",
  AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com",
  RESOURCE_DELIM: "|",
  NO_ACCOUNT: "NO_ACCOUNT",
  CLAIMS: "claims",
  CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
  OPENID_SCOPE: "openid",
  PROFILE_SCOPE: "profile",
  OFFLINE_ACCESS_SCOPE: "offline_access",
  EMAIL_SCOPE: "email",
  CODE_GRANT_TYPE: "authorization_code",
  RT_GRANT_TYPE: "refresh_token",
  S256_CODE_CHALLENGE_METHOD: "S256",
  URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
  AUTHORIZATION_PENDING: "authorization_pending",
  NOT_DEFINED: "not_defined",
  EMPTY_STRING: "",
  NOT_APPLICABLE: "N/A",
  NOT_AVAILABLE: "Not Available",
  FORWARD_SLASH: "/",
  IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
  IMDS_VERSION: "2020-06-01",
  IMDS_TIMEOUT: 2e3,
  AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
  REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
  KNOWN_PUBLIC_CLOUDS: [ "login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net" ],
  SHR_NONCE_VALIDITY: 240,
  INVALID_INSTANCE: "invalid_instance"
}, P = {
  SUCCESS: 200,
  SUCCESS_RANGE_START: 200,
  SUCCESS_RANGE_END: 299,
  REDIRECT: 302,
  CLIENT_ERROR: 400,
  CLIENT_ERROR_RANGE_START: 400,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  REQUEST_TIMEOUT: 408,
  GONE: 410,
  TOO_MANY_REQUESTS: 429,
  CLIENT_ERROR_RANGE_END: 499,
  SERVER_ERROR: 500,
  SERVER_ERROR_RANGE_START: 500,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  SERVER_ERROR_RANGE_END: 599,
  MULTI_SIDED_ERROR: 600
};

var ye = [ f.OPENID_SCOPE, f.PROFILE_SCOPE, f.OFFLINE_ACCESS_SCOPE ], Sa = [ ...ye, f.EMAIL_SCOPE ], Y = {
  CONTENT_TYPE: "Content-Type",
  CONTENT_LENGTH: "Content-Length",
  RETRY_AFTER: "Retry-After",
  CCS_HEADER: "X-AnchorMailbox",
  WWWAuthenticate: "WWW-Authenticate",
  AuthenticationInfo: "Authentication-Info",
  X_MS_REQUEST_ID: "x-ms-request-id",
  X_MS_HTTP_VERSION: "x-ms-httpver"
};

var be = {
  COMMON: "common",
  ORGANIZATIONS: "organizations",
  CONSUMERS: "consumers"
}, nr = {
  ACCESS_TOKEN: "access_token",
  XMS_CC: "xms_cc"
}, or = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
}, ri = {
  PLAIN: "plain",
  S256: "S256"
}, Xr = {
  CODE: "code",
  IDTOKEN_TOKEN: "id_token token",
  IDTOKEN_TOKEN_REFRESHTOKEN: "id_token token refresh_token"
};

var mt = {
  QUERY: "query",
  FRAGMENT: "fragment",
  FORM_POST: "form_post"
}, Pe = {
  IMPLICIT_GRANT: "implicit",
  AUTHORIZATION_CODE_GRANT: "authorization_code",
  CLIENT_CREDENTIALS_GRANT: "client_credentials",
  RESOURCE_OWNER_PASSWORD_GRANT: "password",
  REFRESH_TOKEN_GRANT: "refresh_token",
  DEVICE_CODE_GRANT: "device_code",
  JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer"
}, ir = {
  MSSTS_ACCOUNT_TYPE: "MSSTS",
  ADFS_ACCOUNT_TYPE: "ADFS",
  MSAV1_ACCOUNT_TYPE: "MSA",
  GENERIC_ACCOUNT_TYPE: "Generic"
}, pt = {
  CACHE_KEY_SEPARATOR: "-",
  CLIENT_INFO_SEPARATOR: "."
}, K = {
  ID_TOKEN: "IdToken",
  ACCESS_TOKEN: "AccessToken",
  ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme",
  REFRESH_TOKEN: "RefreshToken"
};

var ro = "appmetadata", Fd = "client_info", xt = "1", Zr = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 86400
}, Ce = {
  CONFIG: "config",
  CACHE: "cache",
  NETWORK: "network",
  HARDCODED_VALUES: "hardcoded_values"
}, de = {
  SCHEMA_VERSION: 5,
  MAX_LAST_HEADER_BYTES: 330,
  MAX_CACHED_ERRORS: 50,
  CACHE_KEY: "server-telemetry",
  CATEGORY_SEPARATOR: "|",
  VALUE_SEPARATOR: ",",
  OVERFLOW_TRUE: "1",
  OVERFLOW_FALSE: "0",
  UNKNOWN_ERROR: "unknown_error"
}, L = {
  BEARER: "Bearer",
  POP: "pop",
  SSH: "ssh-cert"
}, ot = {
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  THROTTLING_PREFIX: "throttling",
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
}, no = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, oo = {
  username: "username",
  password: "password"
}, sr = {
  FAILED_AUTO_DETECTION: "1",
  INTERNAL_CACHE: "2",
  ENVIRONMENT_VARIABLE: "3",
  IMDS: "4"
}, ni = {
  CONFIGURED_NO_AUTO_DETECTION: "2",
  AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4",
  AUTO_DETECTION_REQUESTED_FAILED: "5"
}, j = {
  NOT_APPLICABLE: "0",
  FORCE_REFRESH_OR_CLAIMS: "1",
  NO_CACHED_ACCESS_TOKEN: "2",
  CACHED_ACCESS_TOKEN_EXPIRED: "3",
  PROACTIVELY_REFRESHED: "4"
};

var en = 300, me = {
  BASE64: "base64",
  HEX: "hex",
  UTF8: "utf-8"
};

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var oi = "unexpected_error", io = "post_request_failed";

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var ii = {
  [oi]: "Unexpected error in authentication.",
  [io]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
}, $d = {
  unexpectedError: {
    code: oi,
    desc: ii[oi]
  },
  postRequestFailed: {
    code: io,
    desc: ii[io]
  }
};

class N extends Error {
  constructor(e, t, r) {
    let n = t ? `${e}: ${t}` : e;
    super(n);
    Object.setPrototypeOf(this, N.prototype), this.errorCode = e || f.EMPTY_STRING, 
    this.errorMessage = t || f.EMPTY_STRING, this.subError = r || f.EMPTY_STRING, this.name = "AuthError";
  }
  setCorrelationId(e) {
    this.correlationId = e;
  }
}

function wa(e, t) {
  return new N(e, t ? `${ii[e]} ${t}` : ii[e]);
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var ar = "client_info_decoding_error", tn = "client_info_empty_error", cr = "token_parsing_error", rn = "null_or_empty_token", Oe = "endpoints_resolution_error", Mt = "network_error", nn = "openid_config_error", on = "hash_not_deserialized", lr = "invalid_state", so = "state_mismatch", si = "state_not_found", sn = "nonce_mismatch", Dt = "auth_time_not_found", an = "max_age_transpired", cn = "multiple_matching_tokens", ai = "multiple_matching_accounts", ln = "multiple_matching_appMetadata", dn = "request_cannot_be_made", un = "cannot_remove_empty_scope", hn = "cannot_append_scopeset", dr = "empty_input_scopeset", ao = "device_code_polling_cancelled", co = "device_code_expired", lo = "device_code_unknown_error", Ut = "no_account_in_silent_request", fn = "invalid_cache_record", Lt = "invalid_cache_environment", ci = "no_account_found", ur = "no_crypto_object", li = "unexpected_credential_type", uo = "invalid_assertion", mn = "invalid_client_credential", Ye = "token_refresh_required", ho = "user_timeout_reached", pn = "token_claims_cnf_required_for_signedjwt", di = "authorization_code_missing_from_server_response", ui = "binding_key_not_removed", gn = "end_session_endpoint_not_supported", yn = "key_id_missing", hi = "no_network_connectivity", fi = "user_canceled", fo = "missing_tenant_id_error", M = "method_not_implemented", mi = "nested_app_auth_bridge_disabled";

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var O = {
  [ar]: "The client info could not be parsed/decoded correctly",
  [tn]: "The client info was empty",
  [cr]: "Token cannot be parsed",
  [rn]: "The token is null or empty",
  [Oe]: "Endpoints cannot be resolved",
  [Mt]: "Network request failed",
  [nn]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
  [on]: "The hash parameters could not be deserialized",
  [lr]: "State was not the expected format",
  [so]: "State mismatch error",
  [si]: "State not found",
  [sn]: "Nonce mismatch error",
  [Dt]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.",
  [an]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.",
  [cn]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
  [ai]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
  [ln]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
  [dn]: "Token request cannot be made without authorization code or refresh token.",
  [un]: "Cannot remove null or empty scope from ScopeSet",
  [hn]: "Cannot append ScopeSet",
  [dr]: "Empty input ScopeSet cannot be processed",
  [ao]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
  [co]: "Device code is expired.",
  [lo]: "Device code stopped polling for unknown reasons.",
  [Ut]: "Please pass an account object, silent flow is not supported without account information",
  [fn]: "Cache record object was null or undefined.",
  [Lt]: "Invalid environment when attempting to create cache entry",
  [ci]: "No account found in cache for given key.",
  [ur]: "No crypto object detected.",
  [li]: "Unexpected credential type.",
  [uo]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
  [mn]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
  [Ye]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
  [ho]: "User defined timeout for device code polling reached",
  [pn]: "Cannot generate a POP jwt if the token_claims are not populated",
  [di]: "Server response does not contain an authorization code to proceed",
  [ui]: "Could not remove the credential's binding key from storage.",
  [gn]: "The provided authority does not support logout",
  [yn]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
  [hi]: "No network connectivity. Check your internet connection.",
  [fi]: "User cancelled the flow.",
  [fo]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.",
  [M]: "This method has not been implemented",
  [mi]: "The nested app auth bridge is disabled"
}, Bd = {
  clientInfoDecodingError: {
    code: ar,
    desc: O[ar]
  },
  clientInfoEmptyError: {
    code: tn,
    desc: O[tn]
  },
  tokenParsingError: {
    code: cr,
    desc: O[cr]
  },
  nullOrEmptyToken: {
    code: rn,
    desc: O[rn]
  },
  endpointResolutionError: {
    code: Oe,
    desc: O[Oe]
  },
  networkError: {
    code: Mt,
    desc: O[Mt]
  },
  unableToGetOpenidConfigError: {
    code: nn,
    desc: O[nn]
  },
  hashNotDeserialized: {
    code: on,
    desc: O[on]
  },
  invalidStateError: {
    code: lr,
    desc: O[lr]
  },
  stateMismatchError: {
    code: so,
    desc: O[so]
  },
  stateNotFoundError: {
    code: si,
    desc: O[si]
  },
  nonceMismatchError: {
    code: sn,
    desc: O[sn]
  },
  authTimeNotFoundError: {
    code: Dt,
    desc: O[Dt]
  },
  maxAgeTranspired: {
    code: an,
    desc: O[an]
  },
  multipleMatchingTokens: {
    code: cn,
    desc: O[cn]
  },
  multipleMatchingAccounts: {
    code: ai,
    desc: O[ai]
  },
  multipleMatchingAppMetadata: {
    code: ln,
    desc: O[ln]
  },
  tokenRequestCannotBeMade: {
    code: dn,
    desc: O[dn]
  },
  removeEmptyScopeError: {
    code: un,
    desc: O[un]
  },
  appendScopeSetError: {
    code: hn,
    desc: O[hn]
  },
  emptyInputScopeSetError: {
    code: dr,
    desc: O[dr]
  },
  DeviceCodePollingCancelled: {
    code: ao,
    desc: O[ao]
  },
  DeviceCodeExpired: {
    code: co,
    desc: O[co]
  },
  DeviceCodeUnknownError: {
    code: lo,
    desc: O[lo]
  },
  NoAccountInSilentRequest: {
    code: Ut,
    desc: O[Ut]
  },
  invalidCacheRecord: {
    code: fn,
    desc: O[fn]
  },
  invalidCacheEnvironment: {
    code: Lt,
    desc: O[Lt]
  },
  noAccountFound: {
    code: ci,
    desc: O[ci]
  },
  noCryptoObj: {
    code: ur,
    desc: O[ur]
  },
  unexpectedCredentialType: {
    code: li,
    desc: O[li]
  },
  invalidAssertion: {
    code: uo,
    desc: O[uo]
  },
  invalidClientCredential: {
    code: mn,
    desc: O[mn]
  },
  tokenRefreshRequired: {
    code: Ye,
    desc: O[Ye]
  },
  userTimeoutReached: {
    code: ho,
    desc: O[ho]
  },
  tokenClaimsRequired: {
    code: pn,
    desc: O[pn]
  },
  noAuthorizationCodeFromServer: {
    code: di,
    desc: O[di]
  },
  bindingKeyNotRemovedError: {
    code: ui,
    desc: O[ui]
  },
  logoutNotSupported: {
    code: gn,
    desc: O[gn]
  },
  keyIdMissing: {
    code: yn,
    desc: O[yn]
  },
  noNetworkConnectivity: {
    code: hi,
    desc: O[hi]
  },
  userCanceledError: {
    code: fi,
    desc: O[fi]
  },
  missingTenantIdError: {
    code: fo,
    desc: O[fo]
  },
  nestedAppAuthBridgeDisabled: {
    code: mi,
    desc: O[mi]
  }
};

class hr extends N {
  constructor(e, t) {
    super(e, t ? `${O[e]}: ${t}` : O[e]);
    this.name = "ClientAuthError", Object.setPrototypeOf(this, hr.prototype);
  }
}

function g(e, t) {
  return new hr(e, t);
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var Tn = {
  createNewGuid: () => {
    throw g(M);
  },
  base64Decode: () => {
    throw g(M);
  },
  base64Encode: () => {
    throw g(M);
  },
  base64UrlEncode: () => {
    throw g(M);
  },
  encodeKid: () => {
    throw g(M);
  },
  async getPublicKeyThumbprint() {
    throw g(M);
  },
  async removeTokenBindingKey() {
    throw g(M);
  },
  async clearKeystore() {
    throw g(M);
  },
  async signJwt() {
    throw g(M);
  },
  async hashString() {
    throw g(M);
  }
};

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var G;

(function(e) {
  e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Info = 2] = "Info", 
  e[e.Verbose = 3] = "Verbose", e[e.Trace = 4] = "Trace";
})(G || (G = {}));

class Le {
  constructor(e, t, r) {
    this.level = G.Info;
    let n = () => {}, o = e || Le.createDefaultLoggerOptions();
    this.localCallback = o.loggerCallback || n, this.piiLoggingEnabled = o.piiLoggingEnabled || !1, 
    this.level = typeof o.logLevel === "number" ? o.logLevel : G.Info, this.correlationId = o.correlationId || f.EMPTY_STRING, 
    this.packageName = t || f.EMPTY_STRING, this.packageVersion = r || f.EMPTY_STRING;
  }
  static createDefaultLoggerOptions() {
    return {
      loggerCallback: () => {},
      piiLoggingEnabled: !1,
      logLevel: G.Info
    };
  }
  clone(e, t, r) {
    return new Le({
      loggerCallback: this.localCallback,
      piiLoggingEnabled: this.piiLoggingEnabled,
      logLevel: this.level,
      correlationId: r || this.correlationId
    }, e, t);
  }
  logMessage(e, t) {
    if (t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii) return;
    let o = `${`[${(new Date).toUTCString()}] : [${t.correlationId || this.correlationId || ""}]`} : ${this.packageName}@${this.packageVersion} : ${G[t.logLevel]} - ${e}`;
    this.executeCallback(t.logLevel, o, t.containsPii || !1);
  }
  executeCallback(e, t, r) {
    if (this.localCallback) this.localCallback(e, t, r);
  }
  error(e, t) {
    this.logMessage(e, {
      logLevel: G.Error,
      containsPii: !1,
      correlationId: t || f.EMPTY_STRING
    });
  }
  errorPii(e, t) {
    this.logMessage(e, {
      logLevel: G.Error,
      containsPii: !0,
      correlationId: t || f.EMPTY_STRING
    });
  }
  warning(e, t) {
    this.logMessage(e, {
      logLevel: G.Warning,
      containsPii: !1,
      correlationId: t || f.EMPTY_STRING
    });
  }
  warningPii(e, t) {
    this.logMessage(e, {
      logLevel: G.Warning,
      containsPii: !0,
      correlationId: t || f.EMPTY_STRING
    });
  }
  info(e, t) {
    this.logMessage(e, {
      logLevel: G.Info,
      containsPii: !1,
      correlationId: t || f.EMPTY_STRING
    });
  }
  infoPii(e, t) {
    this.logMessage(e, {
      logLevel: G.Info,
      containsPii: !0,
      correlationId: t || f.EMPTY_STRING
    });
  }
  verbose(e, t) {
    this.logMessage(e, {
      logLevel: G.Verbose,
      containsPii: !1,
      correlationId: t || f.EMPTY_STRING
    });
  }
  verbosePii(e, t) {
    this.logMessage(e, {
      logLevel: G.Verbose,
      containsPii: !0,
      correlationId: t || f.EMPTY_STRING
    });
  }
  trace(e, t) {
    this.logMessage(e, {
      logLevel: G.Trace,
      containsPii: !1,
      correlationId: t || f.EMPTY_STRING
    });
  }
  tracePii(e, t) {
    this.logMessage(e, {
      logLevel: G.Trace,
      containsPii: !0,
      correlationId: t || f.EMPTY_STRING
    });
  }
  isPiiLoggingEnabled() {
    return this.piiLoggingEnabled || !1;
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var pi = "@azure/msal-common", En = "15.13.1";

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var Ht = {
  None: "none",
  AzurePublic: "https://login.microsoftonline.com",
  AzurePpe: "https://login.windows-ppe.net",
  AzureChina: "https://login.chinacloudapi.cn",
  AzureGermany: "https://login.microsoftonline.de",
  AzureUsGovernment: "https://login.microsoftonline.us"
};

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var Cn = "redirect_uri_empty", gi = "claims_request_parsing_error", An = "authority_uri_insecure", gt = "url_parse_error", fr = "empty_url_error", In = "empty_input_scopes_error", mr = "invalid_claims", _n = "token_request_empty", Sn = "logout_request_empty", yi = "invalid_code_challenge_method", Rn = "pkce_params_missing", pr = "invalid_cloud_discovery_metadata", wn = "invalid_authority_metadata", vn = "untrusted_authority", Ft = "missing_ssh_jwk", Ti = "missing_ssh_kid", Ei = "missing_nonce_authentication_header", Ci = "invalid_authentication_header", Ai = "cannot_set_OIDCOptions", Ii = "cannot_allow_platform_broker", _i = "authority_mismatch", Si = "invalid_request_method_for_EAR", Ri = "invalid_authorize_post_body_parameters";

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var ee = {
  [Cn]: "A redirect URI is required for all calls, and none has been set.",
  [gi]: "Could not parse the given claims request object.",
  [An]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
  [gt]: "URL could not be parsed into appropriate segments.",
  [fr]: "URL was empty or null.",
  [In]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
  [mr]: "Given claims parameter must be a stringified JSON object.",
  [_n]: "Token request was empty and not found in cache.",
  [Sn]: "The logout request was null or undefined.",
  [yi]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
  [Rn]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
  [pr]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
  [wn]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
  [vn]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
  [Ft]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
  [Ti]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
  [Ei]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
  [Ci]: "Invalid authentication header provided",
  [Ai]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.",
  [Ii]: "Cannot set allowPlatformBroker parameter to true when not in AAD protocol mode.",
  [_i]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority.",
  [Ri]: "Invalid authorize post body parameters provided. If you are using authorizePostBodyParameters, the request method must be POST. Please check the request method and parameters.",
  [Si]: "Invalid request method for EAR protocol mode. The request method cannot be GET when using EAR protocol mode. Please change the request method to POST."
}, zd = {
  redirectUriNotSet: {
    code: Cn,
    desc: ee[Cn]
  },
  claimsRequestParsingError: {
    code: gi,
    desc: ee[gi]
  },
  authorityUriInsecure: {
    code: An,
    desc: ee[An]
  },
  urlParseError: {
    code: gt,
    desc: ee[gt]
  },
  urlEmptyError: {
    code: fr,
    desc: ee[fr]
  },
  emptyScopesError: {
    code: In,
    desc: ee[In]
  },
  invalidClaimsRequest: {
    code: mr,
    desc: ee[mr]
  },
  tokenRequestEmptyError: {
    code: _n,
    desc: ee[_n]
  },
  logoutRequestEmptyError: {
    code: Sn,
    desc: ee[Sn]
  },
  invalidCodeChallengeMethod: {
    code: yi,
    desc: ee[yi]
  },
  invalidCodeChallengeParams: {
    code: Rn,
    desc: ee[Rn]
  },
  invalidCloudDiscoveryMetadata: {
    code: pr,
    desc: ee[pr]
  },
  invalidAuthorityMetadata: {
    code: wn,
    desc: ee[wn]
  },
  untrustedAuthority: {
    code: vn,
    desc: ee[vn]
  },
  missingSshJwk: {
    code: Ft,
    desc: ee[Ft]
  },
  missingSshKid: {
    code: Ti,
    desc: ee[Ti]
  },
  missingNonceAuthenticationHeader: {
    code: Ei,
    desc: ee[Ei]
  },
  invalidAuthenticationHeader: {
    code: Ci,
    desc: ee[Ci]
  },
  cannotSetOIDCOptions: {
    code: Ai,
    desc: ee[Ai]
  },
  cannotAllowPlatformBroker: {
    code: Ii,
    desc: ee[Ii]
  },
  authorityMismatch: {
    code: _i,
    desc: ee[_i]
  },
  invalidAuthorizePostBodyParameters: {
    code: Ri,
    desc: ee[Ri]
  },
  invalidRequestMethodForEAR: {
    code: Si,
    desc: ee[Si]
  }
};

class mo extends N {
  constructor(e) {
    super(e, ee[e]);
    this.name = "ClientConfigurationError", Object.setPrototypeOf(this, mo.prototype);
  }
}

function V(e) {
  return new mo(e);
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class re {
  static isEmptyObj(e) {
    if (e) try {
      let t = JSON.parse(e);
      return Object.keys(t).length === 0;
    } catch (t) {}
    return !0;
  }
  static startsWith(e, t) {
    return e.indexOf(t) === 0;
  }
  static endsWith(e, t) {
    return e.length >= t.length && e.lastIndexOf(t) === e.length - t.length;
  }
  static queryStringToObject(e) {
    let t = {}, r = e.split("&"), n = o => decodeURIComponent(o.replace(/\+/g, " "));
    return r.forEach(o => {
      if (o.trim()) {
        let [i, s] = o.split(/=(.+)/g, 2);
        if (i && s) t[n(i)] = n(s);
      }
    }), t;
  }
  static trimArrayEntries(e) {
    return e.map(t => t.trim());
  }
  static removeEmptyStringsFromArray(e) {
    return e.filter(t => !!t);
  }
  static jsonParseHelper(e) {
    try {
      return JSON.parse(e);
    } catch (t) {
      return null;
    }
  }
  static matchPattern(e, t) {
    return new RegExp(e.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?")).test(t);
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class oe {
  constructor(e) {
    let t = e ? re.trimArrayEntries([ ...e ]) : [], r = t ? re.removeEmptyStringsFromArray(t) : [];
    if (!r || !r.length) throw V(In);
    this.scopes = new Set, r.forEach(n => this.scopes.add(n));
  }
  static fromString(e) {
    let r = (e || f.EMPTY_STRING).split(" ");
    return new oe(r);
  }
  static createSearchScopes(e) {
    let t = e && e.length > 0 ? e : [ ...ye ], r = new oe(t);
    if (!r.containsOnlyOIDCScopes()) r.removeOIDCScopes(); else r.removeScope(f.OFFLINE_ACCESS_SCOPE);
    return r;
  }
  containsScope(e) {
    let t = this.printScopesLowerCase().split(" "), r = new oe(t);
    return e ? r.scopes.has(e.toLowerCase()) : !1;
  }
  containsScopeSet(e) {
    if (!e || e.scopes.size <= 0) return !1;
    return this.scopes.size >= e.scopes.size && e.asArray().every(t => this.containsScope(t));
  }
  containsOnlyOIDCScopes() {
    let e = 0;
    return Sa.forEach(t => {
      if (this.containsScope(t)) e += 1;
    }), this.scopes.size === e;
  }
  appendScope(e) {
    if (e) this.scopes.add(e.trim());
  }
  appendScopes(e) {
    try {
      e.forEach(t => this.appendScope(t));
    } catch (t) {
      throw g(hn);
    }
  }
  removeScope(e) {
    if (!e) throw g(un);
    this.scopes.delete(e.trim());
  }
  removeOIDCScopes() {
    Sa.forEach(e => {
      this.scopes.delete(e);
    });
  }
  unionScopeSets(e) {
    if (!e) throw g(dr);
    let t = new Set;
    return e.scopes.forEach(r => t.add(r.toLowerCase())), this.scopes.forEach(r => t.add(r.toLowerCase())), 
    t;
  }
  intersectingScopeSets(e) {
    if (!e) throw g(dr);
    if (!e.containsOnlyOIDCScopes()) e.removeOIDCScopes();
    let t = this.unionScopeSets(e), r = e.getScopeCount(), n = this.getScopeCount();
    return t.size < n + r;
  }
  getScopeCount() {
    return this.scopes.size;
  }
  asArray() {
    let e = [];
    return this.scopes.forEach(t => e.push(t)), e;
  }
  printScopes() {
    if (this.scopes) return this.asArray().join(" ");
    return f.EMPTY_STRING;
  }
  printScopesLowerCase() {
    return this.printScopes().toLowerCase();
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ function kn(e, t) {
  if (!e) throw g(tn);
  try {
    let r = t(e);
    return JSON.parse(r);
  } catch (r) {
    throw g(ar);
  }
}

function st(e) {
  if (!e) throw g(ar);
  let t = e.split(pt.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: t[0],
    utid: t.length < 2 ? f.EMPTY_STRING : t[1]
  };
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ function Gd(e, t) {
  return !!e && !!t && e === t.split(".")[1];
}

function po(e, t, r, n) {
  if (n) {
    let {oid: o, sub: i, tid: s, name: a, tfp: c, acr: l, preferred_username: d, upn: u, login_hint: m} = n, p = s || c || l || "";
    return {
      tenantId: p,
      localAccountId: o || i || "",
      name: a,
      username: d || u || "",
      loginHint: m,
      isHomeTenant: Gd(p, e)
    };
  } else return {
    tenantId: r,
    localAccountId: t,
    username: "",
    isHomeTenant: Gd(r, e)
  };
}

function wi(e, t, r, n) {
  let o = e;
  if (t) {
    let {isHomeTenant: i, ...s} = t;
    o = {
      ...e,
      ...s
    };
  }
  if (r) {
    let {isHomeTenant: i, ...s} = po(e.homeAccountId, e.localAccountId, e.tenantId, r);
    return o = {
      ...o,
      ...s,
      idTokenClaims: r,
      idToken: n
    }, o;
  }
  return o;
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var Ge = {
  Default: 0,
  Adfs: 1,
  Dsts: 2,
  Ciam: 3
};

 /*! @azure/msal-common v15.13.1 2025-10-29 */ function vi(e) {
  if (e) return e.tid || e.tfp || e.acr || null;
  return null;
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var Ae = {
  AAD: "AAD",
  OIDC: "OIDC",
  EAR: "EAR"
};

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class fe {
  static getAccountInfo(e) {
    return {
      homeAccountId: e.homeAccountId,
      environment: e.environment,
      tenantId: e.realm,
      username: e.username,
      localAccountId: e.localAccountId,
      loginHint: e.loginHint,
      name: e.name,
      nativeAccountId: e.nativeAccountId,
      authorityType: e.authorityType,
      tenantProfiles: new Map((e.tenantProfiles || []).map(t => [ t.tenantId, t ])),
      dataBoundary: e.dataBoundary
    };
  }
  isSingleTenant() {
    return !this.tenantProfiles;
  }
  static createAccount(e, t, r) {
    let n = new fe;
    if (t.authorityType === Ge.Adfs) n.authorityType = ir.ADFS_ACCOUNT_TYPE; else if (t.protocolMode === Ae.OIDC) n.authorityType = ir.GENERIC_ACCOUNT_TYPE; else n.authorityType = ir.MSSTS_ACCOUNT_TYPE;
    let o;
    if (e.clientInfo && r) {
      if (o = kn(e.clientInfo, r), o.xms_tdbr) n.dataBoundary = o.xms_tdbr === "EU" ? "EU" : "None";
    }
    n.clientInfo = e.clientInfo, n.homeAccountId = e.homeAccountId, n.nativeAccountId = e.nativeAccountId;
    let i = e.environment || t && t.getPreferredCache();
    if (!i) throw g(Lt);
    n.environment = i, n.realm = o?.utid || vi(e.idTokenClaims) || "", n.localAccountId = o?.uid || e.idTokenClaims?.oid || e.idTokenClaims?.sub || "";
    let s = e.idTokenClaims?.preferred_username || e.idTokenClaims?.upn, a = e.idTokenClaims?.emails ? e.idTokenClaims.emails[0] : null;
    if (n.username = s || a || "", n.loginHint = e.idTokenClaims?.login_hint, n.name = e.idTokenClaims?.name || "", 
    n.cloudGraphHostName = e.cloudGraphHostName, n.msGraphHost = e.msGraphHost, e.tenantProfiles) n.tenantProfiles = e.tenantProfiles; else {
      let c = po(e.homeAccountId, n.localAccountId, n.realm, e.idTokenClaims);
      n.tenantProfiles = [ c ];
    }
    return n;
  }
  static createFromAccountInfo(e, t, r) {
    let n = new fe;
    return n.authorityType = e.authorityType || ir.GENERIC_ACCOUNT_TYPE, n.homeAccountId = e.homeAccountId, 
    n.localAccountId = e.localAccountId, n.nativeAccountId = e.nativeAccountId, n.realm = e.tenantId, 
    n.environment = e.environment, n.username = e.username, n.name = e.name, n.loginHint = e.loginHint, 
    n.cloudGraphHostName = t, n.msGraphHost = r, n.tenantProfiles = Array.from(e.tenantProfiles?.values() || []), 
    n.dataBoundary = e.dataBoundary, n;
  }
  static generateHomeAccountId(e, t, r, n, o) {
    if (!(t === Ge.Adfs || t === Ge.Dsts)) {
      if (e) try {
        let i = kn(e, n.base64Decode);
        if (i.uid && i.utid) return `${i.uid}.${i.utid}`;
      } catch (i) {}
      r.warning("No client info in response");
    }
    return o?.sub || "";
  }
  static isAccountEntity(e) {
    if (!e) return !1;
    return e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("realm") && e.hasOwnProperty("localAccountId") && e.hasOwnProperty("username") && e.hasOwnProperty("authorityType");
  }
  static accountInfoIsEqual(e, t, r) {
    if (!e || !t) return !1;
    let n = !0;
    if (r) {
      let o = e.idTokenClaims || {}, i = t.idTokenClaims || {};
      n = o.iat === i.iat && o.nonce === i.nonce;
    }
    return e.homeAccountId === t.homeAccountId && e.localAccountId === t.localAccountId && e.username === t.username && e.tenantId === t.tenantId && e.loginHint === t.loginHint && e.environment === t.environment && e.nativeAccountId === t.nativeAccountId && n;
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ function yt(e, t) {
  let r = mg(e);
  try {
    let n = t(r);
    return JSON.parse(n);
  } catch (n) {
    throw g(cr);
  }
}

function qd(e) {
  if (!e.signin_state) return !1;
  let t = [ "kmsi", "dvc_dmjd" ];
  return e.signin_state.some(n => t.includes(n.trim().toLowerCase()));
}

function mg(e) {
  if (!e) throw g(rn);
  let r = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(e);
  if (!r || r.length < 4) throw g(cr);
  return r[2];
}

function ki(e, t) {
  if (t === 0 || Date.now() - 3e5 > e + t) throw g(an);
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ function pg(e) {
  if (e.startsWith("#/")) return e.substring(2); else if (e.startsWith("#") || e.startsWith("?")) return e.substring(1);
  return e;
}

function ka(e) {
  if (!e || e.indexOf("=") < 0) return null;
  try {
    let t = pg(e), r = Object.fromEntries(new URLSearchParams(t));
    if (r.code || r.ear_jwe || r.error || r.error_description || r.state) return r;
  } catch (t) {
    throw g(on);
  }
  return null;
}

function pe(e, t = !0, r) {
  let n = [];
  return e.forEach((o, i) => {
    if (!t && r && i in r) n.push(`${i}=${o}`); else n.push(`${i}=${encodeURIComponent(o)}`);
  }), n.join("&");
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class x {
  get urlString() {
    return this._urlString;
  }
  constructor(e) {
    if (this._urlString = e, !this._urlString) throw V(fr);
    if (!e.includes("#")) this._urlString = x.canonicalizeUri(e);
  }
  static canonicalizeUri(e) {
    if (e) {
      let t = e.toLowerCase();
      if (re.endsWith(t, "?")) t = t.slice(0, -1); else if (re.endsWith(t, "?/")) t = t.slice(0, -2);
      if (!re.endsWith(t, "/")) t += "/";
      return t;
    }
    return e;
  }
  validateAsUri() {
    let e;
    try {
      e = this.getUrlComponents();
    } catch (t) {
      throw V(gt);
    }
    if (!e.HostNameAndPort || !e.PathSegments) throw V(gt);
    if (!e.Protocol || e.Protocol.toLowerCase() !== "https:") throw V(An);
  }
  static appendQueryString(e, t) {
    if (!t) return e;
    return e.indexOf("?") < 0 ? `${e}?${t}` : `${e}&${t}`;
  }
  static removeHashFromUrl(e) {
    return x.canonicalizeUri(e.split("#")[0]);
  }
  replaceTenantPath(e) {
    let t = this.getUrlComponents(), r = t.PathSegments;
    if (e && r.length !== 0 && (r[0] === be.COMMON || r[0] === be.ORGANIZATIONS)) r[0] = e;
    return x.constructAuthorityUriFromObject(t);
  }
  getUrlComponents() {
    let e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"), t = this.urlString.match(e);
    if (!t) throw V(gt);
    let r = {
      Protocol: t[1],
      HostNameAndPort: t[4],
      AbsolutePath: t[5],
      QueryString: t[7]
    }, n = r.AbsolutePath.split("/");
    if (n = n.filter(o => o && o.length > 0), r.PathSegments = n, r.QueryString && r.QueryString.endsWith("/")) r.QueryString = r.QueryString.substring(0, r.QueryString.length - 1);
    return r;
  }
  static getDomainFromUrl(e) {
    let t = RegExp("^([^:/?#]+://)?([^/?#]*)"), r = e.match(t);
    if (!r) throw V(gt);
    return r[2];
  }
  static getAbsoluteUrl(e, t) {
    if (e[0] === f.FORWARD_SLASH) {
      let n = new x(t).getUrlComponents();
      return n.Protocol + "//" + n.HostNameAndPort + e;
    }
    return e;
  }
  static constructAuthorityUriFromObject(e) {
    return new x(e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/"));
  }
  static hashContainsKnownProperties(e) {
    return !!ka(e);
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var jd = {
  endpointMetadata: {
    "login.microsoftonline.com": {
      token_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token",
      jwks_uri: "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys",
      issuer: "https://login.microsoftonline.com/{tenantid}/v2.0",
      authorization_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize",
      end_session_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout"
    },
    "login.chinacloudapi.cn": {
      token_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token",
      jwks_uri: "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys",
      issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0",
      authorization_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize",
      end_session_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout"
    },
    "login.microsoftonline.us": {
      token_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token",
      jwks_uri: "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys",
      issuer: "https://login.microsoftonline.us/{tenantid}/v2.0",
      authorization_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize",
      end_session_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout"
    }
  },
  instanceDiscoveryMetadata: {
    metadata: [ {
      preferred_network: "login.microsoftonline.com",
      preferred_cache: "login.windows.net",
      aliases: [ "login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net" ]
    }, {
      preferred_network: "login.partner.microsoftonline.cn",
      preferred_cache: "login.partner.microsoftonline.cn",
      aliases: [ "login.partner.microsoftonline.cn", "login.chinacloudapi.cn" ]
    }, {
      preferred_network: "login.microsoftonline.de",
      preferred_cache: "login.microsoftonline.de",
      aliases: [ "login.microsoftonline.de" ]
    }, {
      preferred_network: "login.microsoftonline.us",
      preferred_cache: "login.microsoftonline.us",
      aliases: [ "login.microsoftonline.us", "login.usgovcloudapi.net" ]
    }, {
      preferred_network: "login-us.microsoftonline.com",
      preferred_cache: "login-us.microsoftonline.com",
      aliases: [ "login-us.microsoftonline.com" ]
    } ]
  }
}, {endpointMetadata: ba, instanceDiscoveryMetadata: Pa} = jd, Oa = new Set;

Pa.metadata.forEach(e => {
  e.aliases.forEach(t => {
    Oa.add(t);
  });
});

function Yd(e, t) {
  let r, n = e.canonicalAuthority;
  if (n) {
    let o = new x(n).getUrlComponents().HostNameAndPort;
    r = Vd(o, e.cloudDiscoveryMetadata?.metadata, Ce.CONFIG, t) || Vd(o, Pa.metadata, Ce.HARDCODED_VALUES, t) || e.knownAuthorities;
  }
  return r || [];
}

function Vd(e, t, r, n) {
  if (n?.trace(`getAliasesFromMetadata called with source: ${r}`), e && t) {
    let o = go(t, e);
    if (o) return n?.trace(`getAliasesFromMetadata: found cloud discovery metadata in ${r}, returning aliases`), 
    o.aliases; else n?.trace(`getAliasesFromMetadata: did not find cloud discovery metadata in ${r}`);
  }
  return null;
}

function Wd(e) {
  return go(Pa.metadata, e);
}

function go(e, t) {
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (n.aliases.includes(t)) return n;
  }
  return null;
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var Na = "cache_quota_exceeded", bi = "cache_error_unknown";

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var xa = {
  [Na]: "Exceeded cache storage capacity.",
  [bi]: "Unexpected error occurred when using cache storage."
};

class yo extends N {
  constructor(e, t) {
    let r = t || (xa[e] ? xa[e] : xa[bi]);
    super(`${e}: ${r}`);
    Object.setPrototypeOf(this, yo.prototype), this.name = "CacheError", this.errorCode = e, 
    this.errorMessage = r;
  }
}

function Qd(e) {
  if (!(e instanceof Error)) return new yo(bi);
  if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED" || e.message.includes("exceeded the quota")) return new yo(Na); else return new yo(e.name, e.message);
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class yr {
  constructor(e, t, r, n, o) {
    this.clientId = e, this.cryptoImpl = t, this.commonLogger = r.clone(pi, En), this.staticAuthorityOptions = o, 
    this.performanceClient = n;
  }
  getAllAccounts(e, t) {
    return this.buildTenantProfiles(this.getAccountsFilteredBy(e, t), t, e);
  }
  getAccountInfoFilteredBy(e, t) {
    if (Object.keys(e).length === 0 || Object.values(e).every(n => !n)) return this.commonLogger.warning("getAccountInfoFilteredBy: Account filter is empty or invalid, returning null"), 
    null;
    let r = this.getAllAccounts(e, t);
    if (r.length > 1) return r.sort(o => o.idTokenClaims ? -1 : 1)[0]; else if (r.length === 1) return r[0]; else return null;
  }
  getBaseAccountInfo(e, t) {
    let r = this.getAccountsFilteredBy(e, t);
    if (r.length > 0) return fe.getAccountInfo(r[0]); else return null;
  }
  buildTenantProfiles(e, t, r) {
    return e.flatMap(n => this.getTenantProfilesFromAccountEntity(n, t, r?.tenantId, r));
  }
  getTenantedAccountInfoByFilter(e, t, r, n, o) {
    let i = null, s;
    if (o) {
      if (!this.tenantProfileMatchesFilter(r, o)) return null;
    }
    let a = this.getIdToken(e, n, t, r.tenantId);
    if (a) {
      if (s = yt(a.secret, this.cryptoImpl.base64Decode), !this.idTokenClaimsMatchTenantProfileFilter(s, o)) return null;
    }
    return i = wi(e, r, s, a?.secret), i;
  }
  getTenantProfilesFromAccountEntity(e, t, r, n) {
    let o = fe.getAccountInfo(e), i = o.tenantProfiles || new Map, s = this.getTokenKeys();
    if (r) {
      let c = i.get(r);
      if (c) i = new Map([ [ r, c ] ]); else return [];
    }
    let a = [];
    return i.forEach(c => {
      let l = this.getTenantedAccountInfoByFilter(o, s, c, t, n);
      if (l) a.push(l);
    }), a;
  }
  tenantProfileMatchesFilter(e, t) {
    if (!!t.localAccountId && !this.matchLocalAccountIdFromTenantProfile(e, t.localAccountId)) return !1;
    if (!!t.name && e.name !== t.name) return !1;
    if (t.isHomeTenant !== void 0 && e.isHomeTenant !== t.isHomeTenant) return !1;
    return !0;
  }
  idTokenClaimsMatchTenantProfileFilter(e, t) {
    if (t) {
      if (!!t.localAccountId && !this.matchLocalAccountIdFromTokenClaims(e, t.localAccountId)) return !1;
      if (!!t.loginHint && !this.matchLoginHintFromTokenClaims(e, t.loginHint)) return !1;
      if (!!t.username && !this.matchUsername(e.preferred_username, t.username)) return !1;
      if (!!t.name && !this.matchName(e, t.name)) return !1;
      if (!!t.sid && !this.matchSid(e, t.sid)) return !1;
    }
    return !0;
  }
  async saveCacheRecord(e, t, r, n) {
    if (!e) throw g(fn);
    try {
      if (e.account) await this.setAccount(e.account, t, r);
      if (!!e.idToken && n?.idToken !== !1) await this.setIdTokenCredential(e.idToken, t, r);
      if (!!e.accessToken && n?.accessToken !== !1) await this.saveAccessToken(e.accessToken, t, r);
      if (!!e.refreshToken && n?.refreshToken !== !1) await this.setRefreshTokenCredential(e.refreshToken, t, r);
      if (e.appMetadata) this.setAppMetadata(e.appMetadata, t);
    } catch (o) {
      if (this.commonLogger?.error("CacheManager.saveCacheRecord: failed"), o instanceof N) throw o; else throw Qd(o);
    }
  }
  async saveAccessToken(e, t, r) {
    let n = {
      clientId: e.clientId,
      credentialType: e.credentialType,
      environment: e.environment,
      homeAccountId: e.homeAccountId,
      realm: e.realm,
      tokenType: e.tokenType,
      requestedClaimsHash: e.requestedClaimsHash
    }, o = this.getTokenKeys(), i = oe.fromString(e.target);
    o.accessToken.forEach(s => {
      if (!this.accessTokenKeyMatchesFilter(s, n, !1)) return;
      let a = this.getAccessTokenCredential(s, t);
      if (a && this.credentialMatchesFilter(a, n)) {
        if (oe.fromString(a.target).intersectingScopeSets(i)) this.removeAccessToken(s, t);
      }
    }), await this.setAccessTokenCredential(e, t, r);
  }
  getAccountsFilteredBy(e, t) {
    let r = this.getAccountKeys(), n = [];
    return r.forEach(o => {
      let i = this.getAccount(o, t);
      if (!i) return;
      if (!!e.homeAccountId && !this.matchHomeAccountId(i, e.homeAccountId)) return;
      if (!!e.username && !this.matchUsername(i.username, e.username)) return;
      if (!!e.environment && !this.matchEnvironment(i, e.environment)) return;
      if (!!e.realm && !this.matchRealm(i, e.realm)) return;
      if (!!e.nativeAccountId && !this.matchNativeAccountId(i, e.nativeAccountId)) return;
      if (!!e.authorityType && !this.matchAuthorityType(i, e.authorityType)) return;
      let s = {
        localAccountId: e?.localAccountId,
        name: e?.name
      }, a = i.tenantProfiles?.filter(c => this.tenantProfileMatchesFilter(c, s));
      if (a && a.length === 0) return;
      n.push(i);
    }), n;
  }
  credentialMatchesFilter(e, t) {
    if (!!t.clientId && !this.matchClientId(e, t.clientId)) return !1;
    if (!!t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash)) return !1;
    if (typeof t.homeAccountId === "string" && !this.matchHomeAccountId(e, t.homeAccountId)) return !1;
    if (!!t.environment && !this.matchEnvironment(e, t.environment)) return !1;
    if (!!t.realm && !this.matchRealm(e, t.realm)) return !1;
    if (!!t.credentialType && !this.matchCredentialType(e, t.credentialType)) return !1;
    if (!!t.familyId && !this.matchFamilyId(e, t.familyId)) return !1;
    if (!!t.target && !this.matchTarget(e, t.target)) return !1;
    if (t.requestedClaimsHash || e.requestedClaimsHash) {
      if (e.requestedClaimsHash !== t.requestedClaimsHash) return !1;
    }
    if (e.credentialType === K.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
      if (!!t.tokenType && !this.matchTokenType(e, t.tokenType)) return !1;
      if (t.tokenType === L.SSH) {
        if (t.keyId && !this.matchKeyId(e, t.keyId)) return !1;
      }
    }
    return !0;
  }
  getAppMetadataFilteredBy(e) {
    let t = this.getKeys(), r = {};
    return t.forEach(n => {
      if (!this.isAppMetadata(n)) return;
      let o = this.getAppMetadata(n);
      if (!o) return;
      if (!!e.environment && !this.matchEnvironment(o, e.environment)) return;
      if (!!e.clientId && !this.matchClientId(o, e.clientId)) return;
      r[n] = o;
    }), r;
  }
  getAuthorityMetadataByAlias(e) {
    let t = this.getAuthorityMetadataKeys(), r = null;
    return t.forEach(n => {
      if (!this.isAuthorityMetadata(n) || n.indexOf(this.clientId) === -1) return;
      let o = this.getAuthorityMetadata(n);
      if (!o) return;
      if (o.aliases.indexOf(e) === -1) return;
      r = o;
    }), r;
  }
  removeAllAccounts(e) {
    this.getAllAccounts({}, e).forEach(r => {
      this.removeAccount(r, e);
    });
  }
  removeAccount(e, t) {
    this.removeAccountContext(e, t);
    let r = this.getAccountKeys(), n = o => o.includes(e.homeAccountId) && o.includes(e.environment);
    r.filter(n).forEach(o => {
      this.removeItem(o, t), this.performanceClient.incrementFields({
        accountsRemoved: 1
      }, t);
    });
  }
  removeAccountContext(e, t) {
    let r = this.getTokenKeys(), n = o => o.includes(e.homeAccountId) && o.includes(e.environment);
    r.idToken.filter(n).forEach(o => {
      this.removeIdToken(o, t);
    }), r.accessToken.filter(n).forEach(o => {
      this.removeAccessToken(o, t);
    }), r.refreshToken.filter(n).forEach(o => {
      this.removeRefreshToken(o, t);
    });
  }
  removeAccessToken(e, t) {
    let r = this.getAccessTokenCredential(e, t);
    if (this.removeItem(e, t), this.performanceClient.incrementFields({
      accessTokensRemoved: 1
    }, t), !r || r.credentialType.toLowerCase() !== K.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase() || r.tokenType !== L.POP) return;
    let n = r.keyId;
    if (n) this.cryptoImpl.removeTokenBindingKey(n).catch(() => {
      this.commonLogger.error(`Failed to remove token binding key ${n}`, t), this.performanceClient?.incrementFields({
        removeTokenBindingKeyFailure: 1
      }, t);
    });
  }
  removeAppMetadata(e) {
    return this.getKeys().forEach(r => {
      if (this.isAppMetadata(r)) this.removeItem(r, e);
    }), !0;
  }
  getIdToken(e, t, r, n, o) {
    this.commonLogger.trace("CacheManager - getIdToken called");
    let i = {
      homeAccountId: e.homeAccountId,
      environment: e.environment,
      credentialType: K.ID_TOKEN,
      clientId: this.clientId,
      realm: n
    }, s = this.getIdTokensByFilter(i, t, r), a = s.size;
    if (a < 1) return this.commonLogger.info("CacheManager:getIdToken - No token found"), 
    null; else if (a > 1) {
      let c = s;
      if (!n) {
        let l = new Map;
        s.forEach((u, m) => {
          if (u.realm === e.tenantId) l.set(m, u);
        });
        let d = l.size;
        if (d < 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result"), 
        s.values().next().value; else if (d === 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile"), 
        l.values().next().value; else c = l;
      }
      if (this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them"), 
      c.forEach((l, d) => {
        this.removeIdToken(d, t);
      }), o && t) o.addFields({
        multiMatchedID: s.size
      }, t);
      return null;
    }
    return this.commonLogger.info("CacheManager:getIdToken - Returning ID token"), s.values().next().value;
  }
  getIdTokensByFilter(e, t, r) {
    let n = r && r.idToken || this.getTokenKeys().idToken, o = new Map;
    return n.forEach(i => {
      if (!this.idTokenKeyMatchesFilter(i, {
        clientId: this.clientId,
        ...e
      })) return;
      let s = this.getIdTokenCredential(i, t);
      if (s && this.credentialMatchesFilter(s, e)) o.set(i, s);
    }), o;
  }
  idTokenKeyMatchesFilter(e, t) {
    let r = e.toLowerCase();
    if (t.clientId && r.indexOf(t.clientId.toLowerCase()) === -1) return !1;
    if (t.homeAccountId && r.indexOf(t.homeAccountId.toLowerCase()) === -1) return !1;
    return !0;
  }
  removeIdToken(e, t) {
    this.removeItem(e, t);
  }
  removeRefreshToken(e, t) {
    this.removeItem(e, t);
  }
  getAccessToken(e, t, r, n) {
    let o = t.correlationId;
    this.commonLogger.trace("CacheManager - getAccessToken called", o);
    let i = oe.createSearchScopes(t.scopes), s = t.authenticationScheme || L.BEARER, a = s && s.toLowerCase() !== L.BEARER.toLowerCase() ? K.ACCESS_TOKEN_WITH_AUTH_SCHEME : K.ACCESS_TOKEN, c = {
      homeAccountId: e.homeAccountId,
      environment: e.environment,
      credentialType: a,
      clientId: this.clientId,
      realm: n || e.tenantId,
      target: i,
      tokenType: s,
      keyId: t.sshKid,
      requestedClaimsHash: t.requestedClaimsHash
    }, l = r && r.accessToken || this.getTokenKeys().accessToken, d = [];
    l.forEach(m => {
      if (this.accessTokenKeyMatchesFilter(m, c, !0)) {
        let p = this.getAccessTokenCredential(m, o);
        if (p && this.credentialMatchesFilter(p, c)) d.push(p);
      }
    });
    let u = d.length;
    if (u < 1) return this.commonLogger.info("CacheManager:getAccessToken - No token found", o), 
    null; else if (u > 1) return this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them", o), 
    d.forEach(m => {
      this.removeAccessToken(this.generateCredentialKey(m), o);
    }), this.performanceClient.addFields({
      multiMatchedAT: d.length
    }, o), null;
    return this.commonLogger.info("CacheManager:getAccessToken - Returning access token", o), 
    d[0];
  }
  accessTokenKeyMatchesFilter(e, t, r) {
    let n = e.toLowerCase();
    if (t.clientId && n.indexOf(t.clientId.toLowerCase()) === -1) return !1;
    if (t.homeAccountId && n.indexOf(t.homeAccountId.toLowerCase()) === -1) return !1;
    if (t.realm && n.indexOf(t.realm.toLowerCase()) === -1) return !1;
    if (t.requestedClaimsHash && n.indexOf(t.requestedClaimsHash.toLowerCase()) === -1) return !1;
    if (t.target) {
      let o = t.target.asArray();
      for (let i = 0; i < o.length; i++) if (r && !n.includes(o[i].toLowerCase())) return !1; else if (!r && n.includes(o[i].toLowerCase())) return !0;
    }
    return !0;
  }
  getAccessTokensByFilter(e, t) {
    let r = this.getTokenKeys(), n = [];
    return r.accessToken.forEach(o => {
      if (!this.accessTokenKeyMatchesFilter(o, e, !0)) return;
      let i = this.getAccessTokenCredential(o, t);
      if (i && this.credentialMatchesFilter(i, e)) n.push(i);
    }), n;
  }
  getRefreshToken(e, t, r, n, o) {
    this.commonLogger.trace("CacheManager - getRefreshToken called");
    let i = t ? xt : void 0, s = {
      homeAccountId: e.homeAccountId,
      environment: e.environment,
      credentialType: K.REFRESH_TOKEN,
      clientId: this.clientId,
      familyId: i
    }, a = n && n.refreshToken || this.getTokenKeys().refreshToken, c = [];
    a.forEach(d => {
      if (this.refreshTokenKeyMatchesFilter(d, s)) {
        let u = this.getRefreshTokenCredential(d, r);
        if (u && this.credentialMatchesFilter(u, s)) c.push(u);
      }
    });
    let l = c.length;
    if (l < 1) return this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found."), 
    null;
    if (l > 1 && o && r) o.addFields({
      multiMatchedRT: l
    }, r);
    return this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token"), 
    c[0];
  }
  refreshTokenKeyMatchesFilter(e, t) {
    let r = e.toLowerCase();
    if (t.familyId && r.indexOf(t.familyId.toLowerCase()) === -1) return !1;
    if (!t.familyId && t.clientId && r.indexOf(t.clientId.toLowerCase()) === -1) return !1;
    if (t.homeAccountId && r.indexOf(t.homeAccountId.toLowerCase()) === -1) return !1;
    return !0;
  }
  readAppMetadataFromCache(e) {
    let t = {
      environment: e,
      clientId: this.clientId
    }, r = this.getAppMetadataFilteredBy(t), n = Object.keys(r).map(i => r[i]), o = n.length;
    if (o < 1) return null; else if (o > 1) throw g(ln);
    return n[0];
  }
  isAppMetadataFOCI(e) {
    let t = this.readAppMetadataFromCache(e);
    return !!(t && t.familyId === xt);
  }
  matchHomeAccountId(e, t) {
    return typeof e.homeAccountId === "string" && t === e.homeAccountId;
  }
  matchLocalAccountIdFromTokenClaims(e, t) {
    let r = e.oid || e.sub;
    return t === r;
  }
  matchLocalAccountIdFromTenantProfile(e, t) {
    return e.localAccountId === t;
  }
  matchName(e, t) {
    return t.toLowerCase() === e.name?.toLowerCase();
  }
  matchUsername(e, t) {
    return !!(e && typeof e === "string" && t?.toLowerCase() === e.toLowerCase());
  }
  matchUserAssertionHash(e, t) {
    return !!(e.userAssertionHash && t === e.userAssertionHash);
  }
  matchEnvironment(e, t) {
    if (this.staticAuthorityOptions) {
      let n = Yd(this.staticAuthorityOptions, this.commonLogger);
      if (n.includes(t) && n.includes(e.environment)) return !0;
    }
    let r = this.getAuthorityMetadataByAlias(t);
    if (r && r.aliases.indexOf(e.environment) > -1) return !0;
    return !1;
  }
  matchCredentialType(e, t) {
    return e.credentialType && t.toLowerCase() === e.credentialType.toLowerCase();
  }
  matchClientId(e, t) {
    return !!(e.clientId && t === e.clientId);
  }
  matchFamilyId(e, t) {
    return !!(e.familyId && t === e.familyId);
  }
  matchRealm(e, t) {
    return e.realm?.toLowerCase() === t.toLowerCase();
  }
  matchNativeAccountId(e, t) {
    return !!(e.nativeAccountId && t === e.nativeAccountId);
  }
  matchLoginHintFromTokenClaims(e, t) {
    if (e.login_hint === t) return !0;
    if (e.preferred_username === t) return !0;
    if (e.upn === t) return !0;
    return !1;
  }
  matchSid(e, t) {
    return e.sid === t;
  }
  matchAuthorityType(e, t) {
    return !!(e.authorityType && t.toLowerCase() === e.authorityType.toLowerCase());
  }
  matchTarget(e, t) {
    if (e.credentialType !== K.ACCESS_TOKEN && e.credentialType !== K.ACCESS_TOKEN_WITH_AUTH_SCHEME || !e.target) return !1;
    return oe.fromString(e.target).containsScopeSet(t);
  }
  matchTokenType(e, t) {
    return !!(e.tokenType && e.tokenType === t);
  }
  matchKeyId(e, t) {
    return !!(e.keyId && e.keyId === t);
  }
  isAppMetadata(e) {
    return e.indexOf(ro) !== -1;
  }
  isAuthorityMetadata(e) {
    return e.indexOf(Zr.CACHE_KEY) !== -1;
  }
  generateAuthorityMetadataCacheKey(e) {
    return `${Zr.CACHE_KEY}-${this.clientId}-${e}`;
  }
  static toObject(e, t) {
    for (let r in t) e[r] = t[r];
    return e;
  }
}

class Pi extends yr {
  async setAccount() {
    throw g(M);
  }
  getAccount() {
    throw g(M);
  }
  async setIdTokenCredential() {
    throw g(M);
  }
  getIdTokenCredential() {
    throw g(M);
  }
  async setAccessTokenCredential() {
    throw g(M);
  }
  getAccessTokenCredential() {
    throw g(M);
  }
  async setRefreshTokenCredential() {
    throw g(M);
  }
  getRefreshTokenCredential() {
    throw g(M);
  }
  setAppMetadata() {
    throw g(M);
  }
  getAppMetadata() {
    throw g(M);
  }
  setServerTelemetry() {
    throw g(M);
  }
  getServerTelemetry() {
    throw g(M);
  }
  setAuthorityMetadata() {
    throw g(M);
  }
  getAuthorityMetadata() {
    throw g(M);
  }
  getAuthorityMetadataKeys() {
    throw g(M);
  }
  setThrottlingCache() {
    throw g(M);
  }
  getThrottlingCache() {
    throw g(M);
  }
  removeItem() {
    throw g(M);
  }
  getKeys() {
    throw g(M);
  }
  getAccountKeys() {
    throw g(M);
  }
  getTokenKeys() {
    throw g(M);
  }
  generateCredentialKey() {
    throw g(M);
  }
  generateAccountKey() {
    throw g(M);
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var h = {
  AcquireTokenByCode: "acquireTokenByCode",
  AcquireTokenByRefreshToken: "acquireTokenByRefreshToken",
  AcquireTokenSilent: "acquireTokenSilent",
  AcquireTokenSilentAsync: "acquireTokenSilentAsync",
  AcquireTokenPopup: "acquireTokenPopup",
  AcquireTokenPreRedirect: "acquireTokenPreRedirect",
  AcquireTokenRedirect: "acquireTokenRedirect",
  CryptoOptsGetPublicKeyThumbprint: "cryptoOptsGetPublicKeyThumbprint",
  CryptoOptsSignJwt: "cryptoOptsSignJwt",
  SilentCacheClientAcquireToken: "silentCacheClientAcquireToken",
  SilentIframeClientAcquireToken: "silentIframeClientAcquireToken",
  AwaitConcurrentIframe: "awaitConcurrentIframe",
  SilentRefreshClientAcquireToken: "silentRefreshClientAcquireToken",
  SsoSilent: "ssoSilent",
  StandardInteractionClientGetDiscoveredAuthority: "standardInteractionClientGetDiscoveredAuthority",
  FetchAccountIdWithNativeBroker: "fetchAccountIdWithNativeBroker",
  NativeInteractionClientAcquireToken: "nativeInteractionClientAcquireToken",
  BaseClientCreateTokenRequestHeaders: "baseClientCreateTokenRequestHeaders",
  NetworkClientSendPostRequestAsync: "networkClientSendPostRequestAsync",
  RefreshTokenClientExecutePostToTokenEndpoint: "refreshTokenClientExecutePostToTokenEndpoint",
  AuthorizationCodeClientExecutePostToTokenEndpoint: "authorizationCodeClientExecutePostToTokenEndpoint",
  BrokerHandhshake: "brokerHandshake",
  AcquireTokenByRefreshTokenInBroker: "acquireTokenByRefreshTokenInBroker",
  AcquireTokenByBroker: "acquireTokenByBroker",
  RefreshTokenClientExecuteTokenRequest: "refreshTokenClientExecuteTokenRequest",
  RefreshTokenClientAcquireToken: "refreshTokenClientAcquireToken",
  RefreshTokenClientAcquireTokenWithCachedRefreshToken: "refreshTokenClientAcquireTokenWithCachedRefreshToken",
  RefreshTokenClientAcquireTokenByRefreshToken: "refreshTokenClientAcquireTokenByRefreshToken",
  RefreshTokenClientCreateTokenRequestBody: "refreshTokenClientCreateTokenRequestBody",
  AcquireTokenFromCache: "acquireTokenFromCache",
  SilentFlowClientAcquireCachedToken: "silentFlowClientAcquireCachedToken",
  SilentFlowClientGenerateResultFromCacheRecord: "silentFlowClientGenerateResultFromCacheRecord",
  AcquireTokenBySilentIframe: "acquireTokenBySilentIframe",
  InitializeBaseRequest: "initializeBaseRequest",
  InitializeSilentRequest: "initializeSilentRequest",
  InitializeClientApplication: "initializeClientApplication",
  InitializeCache: "initializeCache",
  SilentIframeClientTokenHelper: "silentIframeClientTokenHelper",
  SilentHandlerInitiateAuthRequest: "silentHandlerInitiateAuthRequest",
  SilentHandlerMonitorIframeForHash: "silentHandlerMonitorIframeForHash",
  SilentHandlerLoadFrame: "silentHandlerLoadFrame",
  SilentHandlerLoadFrameSync: "silentHandlerLoadFrameSync",
  StandardInteractionClientCreateAuthCodeClient: "standardInteractionClientCreateAuthCodeClient",
  StandardInteractionClientGetClientConfiguration: "standardInteractionClientGetClientConfiguration",
  StandardInteractionClientInitializeAuthorizationRequest: "standardInteractionClientInitializeAuthorizationRequest",
  GetAuthCodeUrl: "getAuthCodeUrl",
  GetStandardParams: "getStandardParams",
  HandleCodeResponseFromServer: "handleCodeResponseFromServer",
  HandleCodeResponse: "handleCodeResponse",
  HandleResponseEar: "handleResponseEar",
  HandleResponsePlatformBroker: "handleResponsePlatformBroker",
  HandleResponseCode: "handleResponseCode",
  UpdateTokenEndpointAuthority: "updateTokenEndpointAuthority",
  AuthClientAcquireToken: "authClientAcquireToken",
  AuthClientExecuteTokenRequest: "authClientExecuteTokenRequest",
  AuthClientCreateTokenRequestBody: "authClientCreateTokenRequestBody",
  PopTokenGenerateCnf: "popTokenGenerateCnf",
  PopTokenGenerateKid: "popTokenGenerateKid",
  HandleServerTokenResponse: "handleServerTokenResponse",
  DeserializeResponse: "deserializeResponse",
  AuthorityFactoryCreateDiscoveredInstance: "authorityFactoryCreateDiscoveredInstance",
  AuthorityResolveEndpointsAsync: "authorityResolveEndpointsAsync",
  AuthorityResolveEndpointsFromLocalSources: "authorityResolveEndpointsFromLocalSources",
  AuthorityGetCloudDiscoveryMetadataFromNetwork: "authorityGetCloudDiscoveryMetadataFromNetwork",
  AuthorityUpdateCloudDiscoveryMetadata: "authorityUpdateCloudDiscoveryMetadata",
  AuthorityGetEndpointMetadataFromNetwork: "authorityGetEndpointMetadataFromNetwork",
  AuthorityUpdateEndpointMetadata: "authorityUpdateEndpointMetadata",
  AuthorityUpdateMetadataWithRegionalInformation: "authorityUpdateMetadataWithRegionalInformation",
  RegionDiscoveryDetectRegion: "regionDiscoveryDetectRegion",
  RegionDiscoveryGetRegionFromIMDS: "regionDiscoveryGetRegionFromIMDS",
  RegionDiscoveryGetCurrentVersion: "regionDiscoveryGetCurrentVersion",
  AcquireTokenByCodeAsync: "acquireTokenByCodeAsync",
  GetEndpointMetadataFromNetwork: "getEndpointMetadataFromNetwork",
  GetCloudDiscoveryMetadataFromNetworkMeasurement: "getCloudDiscoveryMetadataFromNetworkMeasurement",
  HandleRedirectPromiseMeasurement: "handleRedirectPromise",
  HandleNativeRedirectPromiseMeasurement: "handleNativeRedirectPromise",
  UpdateCloudDiscoveryMetadataMeasurement: "updateCloudDiscoveryMetadataMeasurement",
  UsernamePasswordClientAcquireToken: "usernamePasswordClientAcquireToken",
  NativeMessageHandlerHandshake: "nativeMessageHandlerHandshake",
  NativeGenerateAuthResult: "nativeGenerateAuthResult",
  RemoveHiddenIframe: "removeHiddenIframe",
  ClearTokensAndKeysWithClaims: "clearTokensAndKeysWithClaims",
  CacheManagerGetRefreshToken: "cacheManagerGetRefreshToken",
  ImportExistingCache: "importExistingCache",
  SetUserData: "setUserData",
  LocalStorageUpdated: "localStorageUpdated",
  GeneratePkceCodes: "generatePkceCodes",
  GenerateCodeVerifier: "generateCodeVerifier",
  GenerateCodeChallengeFromVerifier: "generateCodeChallengeFromVerifier",
  Sha256Digest: "sha256Digest",
  GetRandomValues: "getRandomValues",
  GenerateHKDF: "generateHKDF",
  GenerateBaseKey: "generateBaseKey",
  Base64Decode: "base64Decode",
  UrlEncodeArr: "urlEncodeArr",
  Encrypt: "encrypt",
  Decrypt: "decrypt",
  GenerateEarKey: "generateEarKey",
  DecryptEarResponse: "decryptEarResponse"
}, hb = new Map([ [ h.AcquireTokenByCode, "ATByCode" ], [ h.AcquireTokenByRefreshToken, "ATByRT" ], [ h.AcquireTokenSilent, "ATS" ], [ h.AcquireTokenSilentAsync, "ATSAsync" ], [ h.AcquireTokenPopup, "ATPopup" ], [ h.AcquireTokenRedirect, "ATRedirect" ], [ h.CryptoOptsGetPublicKeyThumbprint, "CryptoGetPKThumb" ], [ h.CryptoOptsSignJwt, "CryptoSignJwt" ], [ h.SilentCacheClientAcquireToken, "SltCacheClientAT" ], [ h.SilentIframeClientAcquireToken, "SltIframeClientAT" ], [ h.SilentRefreshClientAcquireToken, "SltRClientAT" ], [ h.SsoSilent, "SsoSlt" ], [ h.StandardInteractionClientGetDiscoveredAuthority, "StdIntClientGetDiscAuth" ], [ h.FetchAccountIdWithNativeBroker, "FetchAccIdWithNtvBroker" ], [ h.NativeInteractionClientAcquireToken, "NtvIntClientAT" ], [ h.BaseClientCreateTokenRequestHeaders, "BaseClientCreateTReqHead" ], [ h.NetworkClientSendPostRequestAsync, "NetClientSendPost" ], [ h.RefreshTokenClientExecutePostToTokenEndpoint, "RTClientExecPost" ], [ h.AuthorizationCodeClientExecutePostToTokenEndpoint, "AuthCodeClientExecPost" ], [ h.BrokerHandhshake, "BrokerHandshake" ], [ h.AcquireTokenByRefreshTokenInBroker, "ATByRTInBroker" ], [ h.AcquireTokenByBroker, "ATByBroker" ], [ h.RefreshTokenClientExecuteTokenRequest, "RTClientExecTReq" ], [ h.RefreshTokenClientAcquireToken, "RTClientAT" ], [ h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, "RTClientATWithCachedRT" ], [ h.RefreshTokenClientAcquireTokenByRefreshToken, "RTClientATByRT" ], [ h.RefreshTokenClientCreateTokenRequestBody, "RTClientCreateTReqBody" ], [ h.AcquireTokenFromCache, "ATFromCache" ], [ h.SilentFlowClientAcquireCachedToken, "SltFlowClientATCached" ], [ h.SilentFlowClientGenerateResultFromCacheRecord, "SltFlowClientGenResFromCache" ], [ h.AcquireTokenBySilentIframe, "ATBySltIframe" ], [ h.InitializeBaseRequest, "InitBaseReq" ], [ h.InitializeSilentRequest, "InitSltReq" ], [ h.InitializeClientApplication, "InitClientApplication" ], [ h.InitializeCache, "InitCache" ], [ h.ImportExistingCache, "importCache" ], [ h.SetUserData, "setUserData" ], [ h.LocalStorageUpdated, "localStorageUpdated" ], [ h.SilentIframeClientTokenHelper, "SIClientTHelper" ], [ h.SilentHandlerInitiateAuthRequest, "SHandlerInitAuthReq" ], [ h.SilentHandlerMonitorIframeForHash, "SltHandlerMonitorIframeForHash" ], [ h.SilentHandlerLoadFrame, "SHandlerLoadFrame" ], [ h.SilentHandlerLoadFrameSync, "SHandlerLoadFrameSync" ], [ h.StandardInteractionClientCreateAuthCodeClient, "StdIntClientCreateAuthCodeClient" ], [ h.StandardInteractionClientGetClientConfiguration, "StdIntClientGetClientConf" ], [ h.StandardInteractionClientInitializeAuthorizationRequest, "StdIntClientInitAuthReq" ], [ h.GetAuthCodeUrl, "GetAuthCodeUrl" ], [ h.HandleCodeResponseFromServer, "HandleCodeResFromServer" ], [ h.HandleCodeResponse, "HandleCodeResp" ], [ h.HandleResponseEar, "HandleRespEar" ], [ h.HandleResponseCode, "HandleRespCode" ], [ h.HandleResponsePlatformBroker, "HandleRespPlatBroker" ], [ h.UpdateTokenEndpointAuthority, "UpdTEndpointAuth" ], [ h.AuthClientAcquireToken, "AuthClientAT" ], [ h.AuthClientExecuteTokenRequest, "AuthClientExecTReq" ], [ h.AuthClientCreateTokenRequestBody, "AuthClientCreateTReqBody" ], [ h.PopTokenGenerateCnf, "PopTGenCnf" ], [ h.PopTokenGenerateKid, "PopTGenKid" ], [ h.HandleServerTokenResponse, "HandleServerTRes" ], [ h.DeserializeResponse, "DeserializeRes" ], [ h.AuthorityFactoryCreateDiscoveredInstance, "AuthFactCreateDiscInst" ], [ h.AuthorityResolveEndpointsAsync, "AuthResolveEndpointsAsync" ], [ h.AuthorityResolveEndpointsFromLocalSources, "AuthResolveEndpointsFromLocal" ], [ h.AuthorityGetCloudDiscoveryMetadataFromNetwork, "AuthGetCDMetaFromNet" ], [ h.AuthorityUpdateCloudDiscoveryMetadata, "AuthUpdCDMeta" ], [ h.AuthorityGetEndpointMetadataFromNetwork, "AuthUpdCDMetaFromNet" ], [ h.AuthorityUpdateEndpointMetadata, "AuthUpdEndpointMeta" ], [ h.AuthorityUpdateMetadataWithRegionalInformation, "AuthUpdMetaWithRegInfo" ], [ h.RegionDiscoveryDetectRegion, "RegDiscDetectReg" ], [ h.RegionDiscoveryGetRegionFromIMDS, "RegDiscGetRegFromIMDS" ], [ h.RegionDiscoveryGetCurrentVersion, "RegDiscGetCurrentVer" ], [ h.AcquireTokenByCodeAsync, "ATByCodeAsync" ], [ h.GetEndpointMetadataFromNetwork, "GetEndpointMetaFromNet" ], [ h.GetCloudDiscoveryMetadataFromNetworkMeasurement, "GetCDMetaFromNet" ], [ h.HandleRedirectPromiseMeasurement, "HandleRedirectPromise" ], [ h.HandleNativeRedirectPromiseMeasurement, "HandleNtvRedirectPromise" ], [ h.UpdateCloudDiscoveryMetadataMeasurement, "UpdateCDMeta" ], [ h.UsernamePasswordClientAcquireToken, "UserPassClientAT" ], [ h.NativeMessageHandlerHandshake, "NtvMsgHandlerHandshake" ], [ h.NativeGenerateAuthResult, "NtvGenAuthRes" ], [ h.RemoveHiddenIframe, "RemoveHiddenIframe" ], [ h.ClearTokensAndKeysWithClaims, "ClearTAndKeysWithClaims" ], [ h.CacheManagerGetRefreshToken, "CacheManagerGetRT" ], [ h.GeneratePkceCodes, "GenPkceCodes" ], [ h.GenerateCodeVerifier, "GenCodeVerifier" ], [ h.GenerateCodeChallengeFromVerifier, "GenCodeChallengeFromVerifier" ], [ h.Sha256Digest, "Sha256Digest" ], [ h.GetRandomValues, "GetRandomValues" ], [ h.GenerateHKDF, "genHKDF" ], [ h.GenerateBaseKey, "genBaseKey" ], [ h.Base64Decode, "b64Decode" ], [ h.UrlEncodeArr, "urlEncArr" ], [ h.Encrypt, "encrypt" ], [ h.Decrypt, "decrypt" ], [ h.GenerateEarKey, "genEarKey" ], [ h.DecryptEarResponse, "decryptEarResp" ] ]), Jd = {
  NotStarted: 0,
  InProgress: 1,
  Completed: 2
};

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class Ma {
  startMeasurement() {
    return;
  }
  endMeasurement() {
    return;
  }
  flushMeasurement() {
    return null;
  }
}

class bn {
  generateId() {
    return "callback-id";
  }
  startMeasurement(e, t) {
    return {
      end: () => null,
      discard: () => {},
      add: () => {},
      increment: () => {},
      event: {
        eventId: this.generateId(),
        status: Jd.InProgress,
        authority: "",
        libraryName: "",
        libraryVersion: "",
        clientId: "",
        name: e,
        startTimeMs: Date.now(),
        correlationId: t || ""
      },
      measurement: new Ma
    };
  }
  startPerformanceMeasurement() {
    return new Ma;
  }
  calculateQueuedTime() {
    return 0;
  }
  addQueueMeasurement() {
    return;
  }
  setPreQueueTime() {
    return;
  }
  endMeasurement() {
    return null;
  }
  discardMeasurements() {
    return;
  }
  removePerformanceCallback() {
    return !0;
  }
  addPerformanceCallback() {
    return "";
  }
  emitEvents() {
    return;
  }
  addFields() {
    return;
  }
  incrementFields() {
    return;
  }
  cacheEventByCorrelationId() {
    return;
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var gg = {
  tokenRenewalOffsetSeconds: en,
  preventCorsPreflight: !1
}, yg = {
  loggerCallback: () => {},
  piiLoggingEnabled: !1,
  logLevel: G.Info,
  correlationId: f.EMPTY_STRING
}, Tg = {
  claimsBasedCachingEnabled: !1
}, Eg = {
  async sendGetRequestAsync() {
    throw g(M);
  },
  async sendPostRequestAsync() {
    throw g(M);
  }
}, Cg = {
  sku: f.SKU,
  version: En,
  cpu: f.EMPTY_STRING,
  os: f.EMPTY_STRING
}, Ag = {
  clientSecret: f.EMPTY_STRING,
  clientAssertion: void 0
}, Ig = {
  azureCloudInstance: Ht.None,
  tenant: `${f.DEFAULT_COMMON_TENANT}`
}, _g = {
  application: {
    appName: "",
    appVersion: ""
  }
};

function Xd({authOptions: e, systemOptions: t, loggerOptions: r, cacheOptions: n, storageInterface: o, networkInterface: i, cryptoInterface: s, clientCredentials: a, libraryInfo: c, telemetry: l, serverTelemetryManager: d, persistencePlugin: u, serializableCache: m}) {
  let p = {
    ...yg,
    ...r
  };
  return {
    authOptions: Sg(e),
    systemOptions: {
      ...gg,
      ...t
    },
    loggerOptions: p,
    cacheOptions: {
      ...Tg,
      ...n
    },
    storageInterface: o || new Pi(e.clientId, Tn, new Le(p), new bn),
    networkInterface: i || Eg,
    cryptoInterface: s || Tn,
    clientCredentials: a || Ag,
    libraryInfo: {
      ...Cg,
      ...c
    },
    telemetry: {
      ..._g,
      ...l
    },
    serverTelemetryManager: d || null,
    persistencePlugin: u || null,
    serializableCache: m || null
  };
}

function Sg(e) {
  return {
    clientCapabilities: [],
    azureCloudOptions: Ig,
    skipAuthorityMetadataCache: !1,
    instanceAware: !1,
    encodeExtraQueryParams: !1,
    ...e
  };
}

function Oi(e) {
  return e.authOptions.authority.options.protocolMode === Ae.OIDC;
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var Ie = {
  HOME_ACCOUNT_ID: "home_account_id",
  UPN: "UPN"
};

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var Tt = "client_id", Da = "redirect_uri", Zd = "response_type", eu = "response_mode", tu = "grant_type", ru = "claims", nu = "scope";

var ou = "refresh_token";

var iu = "state", su = "nonce", au = "prompt";

var cu = "code", lu = "code_challenge", du = "code_challenge_method", uu = "code_verifier", hu = "client-request-id", fu = "x-client-SKU", mu = "x-client-VER", pu = "x-client-OS", gu = "x-client-CPU", yu = "x-client-current-telemetry", Tu = "x-client-last-telemetry", Eu = "x-ms-lib-capability", Cu = "x-app-name", Au = "x-app-ver", Iu = "post_logout_redirect_uri", _u = "id_token_hint", Su = "device_code", Ru = "client_secret", wu = "client_assertion", vu = "client_assertion_type", Ua = "token_type", La = "req_cnf", ku = "assertion", bu = "requested_token_use", Rg = "on_behalf_of";

var Ha = "return_spa_code";

var Pu = "logout_hint", Ou = "sid", Nu = "login_hint", xu = "domain_hint", Mu = "x-client-xtra-sku", Ni = "brk_client_id", Fa = "brk_redirect_uri", To = "instance_aware";

 /*! @azure/msal-common v15.13.1 2025-10-29 */ function Pn(e, t, r) {
  if (!t) return;
  let n = e.get(Tt);
  if (n && e.has(Ni)) r?.addFields({
    embeddedClientId: n,
    embeddedRedirectUri: e.get(Da)
  }, t);
}

function Du(e, t) {
  e.set(Zd, t);
}

function Uu(e, t) {
  e.set(eu, t ? t : mt.QUERY);
}

function We(e, t, r = !0, n = ye) {
  if (r && !n.includes("openid") && !t.includes("openid")) n.push("openid");
  let o = r ? [ ...t || [], ...n ] : t || [], i = new oe(o);
  e.set(nu, i.printScopes());
}

function Qe(e, t) {
  e.set(Tt, t);
}

function On(e, t) {
  e.set(Da, t);
}

function Lu(e, t) {
  e.set(Iu, t);
}

function Hu(e, t) {
  e.set(_u, t);
}

function Fu(e, t) {
  e.set(xu, t);
}

function Eo(e, t) {
  e.set(Nu, t);
}

function $t(e, t) {
  e.set(Y.CCS_HEADER, `UPN:${t}`);
}

function Bt(e, t) {
  e.set(Y.CCS_HEADER, `Oid:${t.uid}@${t.utid}`);
}

function Ba(e, t) {
  e.set(Ou, t);
}

function Je(e, t, r) {
  let n = Pg(t, r);
  try {
    JSON.parse(n);
  } catch (o) {
    throw V(mr);
  }
  e.set(ru, n);
}

function at(e, t) {
  e.set(hu, t);
}

function Et(e, t) {
  if (e.set(fu, t.sku), e.set(mu, t.version), t.os) e.set(pu, t.os);
  if (t.cpu) e.set(gu, t.cpu);
}

function Ct(e, t) {
  if (t?.appName) e.set(Cu, t.appName);
  if (t?.appVersion) e.set(Au, t.appVersion);
}

function $u(e, t) {
  e.set(au, t);
}

function xi(e, t) {
  if (t) e.set(iu, t);
}

function Bu(e, t) {
  e.set(su, t);
}

function wg(e, t, r) {
  if (t && r) e.set(lu, t), e.set(du, r); else throw V(Rn);
}

function zu(e, t) {
  e.set(cu, t);
}

function vg(e, t) {
  e.set(Su, t);
}

function Gu(e, t) {
  e.set(ou, t);
}

function qu(e, t) {
  e.set(uu, t);
}

function Tr(e, t) {
  e.set(Ru, t);
}

function Er(e, t) {
  if (t) e.set(wu, t);
}

function Cr(e, t) {
  if (t) e.set(vu, t);
}

function kg(e, t) {
  e.set(ku, t);
}

function bg(e, t) {
  e.set(bu, t);
}

function zt(e, t) {
  e.set(tu, t);
}

function At(e) {
  e.set(Fd, "1");
}

function Mi(e) {
  if (!e.has(To)) e.set(To, "true");
}

function He(e, t) {
  Object.entries(t).forEach(([r, n]) => {
    if (!e.has(r) && n) e.set(r, n);
  });
}

function Pg(e, t) {
  let r;
  if (!e) r = {}; else try {
    r = JSON.parse(e);
  } catch (n) {
    throw V(mr);
  }
  if (t && t.length > 0) {
    if (!r.hasOwnProperty(nr.ACCESS_TOKEN)) r[nr.ACCESS_TOKEN] = {};
    r[nr.ACCESS_TOKEN][nr.XMS_CC] = {
      values: t
    };
  }
  return JSON.stringify(r);
}

function Og(e, t) {
  e.set(oo.username, t);
}

function Ng(e, t) {
  e.set(oo.password, t);
}

function Di(e, t) {
  if (t) e.set(Ua, L.POP), e.set(La, t);
}

function Ui(e, t) {
  if (t) e.set(Ua, L.SSH), e.set(La, t);
}

function Gt(e, t) {
  e.set(yu, t.generateCurrentRequestHeaderValue()), e.set(Tu, t.generateLastRequestHeaderValue());
}

function qt(e) {
  e.set(Eu, ot.X_MS_LIB_CAPABILITY_VALUE);
}

function Ku(e, t) {
  e.set(Pu, t);
}

function Kt(e, t, r) {
  if (!e.has(Ni)) e.set(Ni, t);
  if (!e.has(Fa)) e.set(Fa, r);
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ function Vu(e) {
  return e.hasOwnProperty("authorization_endpoint") && e.hasOwnProperty("token_endpoint") && e.hasOwnProperty("issuer") && e.hasOwnProperty("jwks_uri");
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ function ju(e) {
  return e.hasOwnProperty("tenant_discovery_endpoint") && e.hasOwnProperty("metadata");
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ function Yu(e) {
  return e.hasOwnProperty("error") && e.hasOwnProperty("error_description");
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var Wu = (e, t, r, n, o) => (...i) => {
  r.trace(`Executing function ${t}`);
  let s = n?.startMeasurement(t, o);
  if (o) {
    let a = t + "CallCount";
    n?.incrementFields({
      [a]: 1
    }, o);
  }
  try {
    let a = e(...i);
    return s?.end({
      success: !0
    }), r.trace(`Returning result from ${t}`), a;
  } catch (a) {
    r.trace(`Error occurred in ${t}`);
    try {
      r.trace(JSON.stringify(a));
    } catch (c) {
      r.trace("Unable to print error message.");
    }
    throw s?.end({
      success: !1
    }, a), a;
  }
}, F = (e, t, r, n, o) => (...i) => {
  r.trace(`Executing function ${t}`);
  let s = n?.startMeasurement(t, o);
  if (o) {
    let a = t + "CallCount";
    n?.incrementFields({
      [a]: 1
    }, o);
  }
  return n?.setPreQueueTime(t, o), e(...i).then(a => (r.trace(`Returning result from ${t}`), 
  s?.end({
    success: !0
  }), a)).catch(a => {
    r.trace(`Error occurred in ${t}`);
    try {
      r.trace(JSON.stringify(a));
    } catch (c) {
      r.trace("Unable to print error message.");
    }
    throw s?.end({
      success: !1
    }, a), a;
  }) /*! @azure/msal-common v15.13.1 2025-10-29 */;
};

class Co {
  constructor(e, t, r, n) {
    this.networkInterface = e, this.logger = t, this.performanceClient = r, this.correlationId = n;
  }
  async detectRegion(e, t) {
    this.performanceClient?.addQueueMeasurement(h.RegionDiscoveryDetectRegion, this.correlationId);
    let r = e;
    if (!r) {
      let n = Co.IMDS_OPTIONS;
      try {
        let o = await F(this.getRegionFromIMDS.bind(this), h.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(f.IMDS_VERSION, n);
        if (o.status === P.SUCCESS) r = o.body, t.region_source = sr.IMDS;
        if (o.status === P.BAD_REQUEST) {
          let i = await F(this.getCurrentVersion.bind(this), h.RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(n);
          if (!i) return t.region_source = sr.FAILED_AUTO_DETECTION, null;
          let s = await F(this.getRegionFromIMDS.bind(this), h.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(i, n);
          if (s.status === P.SUCCESS) r = s.body, t.region_source = sr.IMDS;
        }
      } catch (o) {
        return t.region_source = sr.FAILED_AUTO_DETECTION, null;
      }
    } else t.region_source = sr.ENVIRONMENT_VARIABLE;
    if (!r) t.region_source = sr.FAILED_AUTO_DETECTION;
    return r || null;
  }
  async getRegionFromIMDS(e, t) {
    return this.performanceClient?.addQueueMeasurement(h.RegionDiscoveryGetRegionFromIMDS, this.correlationId), 
    this.networkInterface.sendGetRequestAsync(`${f.IMDS_ENDPOINT}?api-version=${e}&format=text`, t, f.IMDS_TIMEOUT);
  }
  async getCurrentVersion(e) {
    this.performanceClient?.addQueueMeasurement(h.RegionDiscoveryGetCurrentVersion, this.correlationId);
    try {
      let t = await this.networkInterface.sendGetRequestAsync(`${f.IMDS_ENDPOINT}?format=json`, e);
      if (t.status === P.BAD_REQUEST && t.body && t.body["newest-versions"] && t.body["newest-versions"].length > 0) return t.body["newest-versions"][0];
      return null;
    } catch (t) {
      return null;
    }
  }
}

Co.IMDS_OPTIONS = {
  headers: {
    Metadata: "true"
  }
};

 /*! @azure/msal-common v15.13.1 2025-10-29 */ function Q() {
  return Math.round((new Date).getTime() / 1e3);
}

function Li(e) {
  if (e) return new Date(Number(e) * 1e3);
  return new Date;
}

function Vt(e, t) {
  let r = Number(e) || 0;
  return Q() + t > r;
}

function Qu(e) {
  return Number(e) > Q();
}

function xg(e, t) {
  return new Promise(r => setTimeout(() => r(t), e));
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ function Ju(e, t, r, n, o) {
  return {
    credentialType: K.ID_TOKEN,
    homeAccountId: e,
    environment: t,
    clientId: n,
    secret: r,
    realm: o,
    lastUpdatedAt: Date.now().toString()
  };
}

function Xu(e, t, r, n, o, i, s, a, c, l, d, u, m, p, y) {
  let T = {
    homeAccountId: e,
    credentialType: K.ACCESS_TOKEN,
    secret: r,
    cachedAt: Q().toString(),
    expiresOn: s.toString(),
    extendedExpiresOn: a.toString(),
    environment: t,
    clientId: n,
    realm: o,
    target: i,
    tokenType: d || L.BEARER,
    lastUpdatedAt: Date.now().toString()
  };
  if (u) T.userAssertionHash = u;
  if (l) T.refreshOn = l.toString();
  if (p) T.requestedClaims = p, T.requestedClaimsHash = y;
  if (T.tokenType?.toLowerCase() !== L.BEARER.toLowerCase()) switch (T.credentialType = K.ACCESS_TOKEN_WITH_AUTH_SCHEME, 
  T.tokenType) {
   case L.POP:
    let _ = yt(r, c);
    if (!_?.cnf?.kid) throw g(pn);
    T.keyId = _.cnf.kid;
    break;

   case L.SSH:
    T.keyId = m;
  }
  return T;
}

function Zu(e, t, r, n, o, i, s) {
  let a = {
    credentialType: K.REFRESH_TOKEN,
    homeAccountId: e,
    environment: t,
    clientId: n,
    secret: r,
    lastUpdatedAt: Date.now().toString()
  };
  if (i) a.userAssertionHash = i;
  if (o) a.familyId = o;
  if (s) a.expiresOn = s.toString();
  return a;
}

function za(e) {
  return e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("credentialType") && e.hasOwnProperty("clientId") && e.hasOwnProperty("secret");
}

function eh(e) {
  if (!e) return !1;
  return za(e) && e.hasOwnProperty("realm") && e.hasOwnProperty("target") && (e.credentialType === K.ACCESS_TOKEN || e.credentialType === K.ACCESS_TOKEN_WITH_AUTH_SCHEME);
}

function th(e) {
  if (!e) return !1;
  return za(e) && e.hasOwnProperty("realm") && e.credentialType === K.ID_TOKEN;
}

function rh(e) {
  if (!e) return !1;
  return za(e) && e.credentialType === K.REFRESH_TOKEN;
}

function Mg(e, t) {
  let r = e.indexOf(de.CACHE_KEY) === 0, n = !0;
  if (t) n = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits");
  return r && n;
}

function Dg(e, t) {
  let r = !1;
  if (e) r = e.indexOf(ot.THROTTLING_PREFIX) === 0;
  let n = !0;
  if (t) n = t.hasOwnProperty("throttleTime");
  return r && n;
}

function Ug({environment: e, clientId: t}) {
  return [ ro, e, t ].join(pt.CACHE_KEY_SEPARATOR).toLowerCase();
}

function nh(e, t) {
  if (!t) return !1;
  return e.indexOf(ro) === 0 && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment");
}

function Lg(e, t) {
  if (!t) return !1;
  return e.indexOf(Zr.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri");
}

function Ga() {
  return Q() + Zr.REFRESH_TIME_SECONDS;
}

function Ao(e, t, r) {
  e.authorization_endpoint = t.authorization_endpoint, e.token_endpoint = t.token_endpoint, 
  e.end_session_endpoint = t.end_session_endpoint, e.issuer = t.issuer, e.endpointsFromNetwork = r, 
  e.jwks_uri = t.jwks_uri;
}

function Hi(e, t, r) {
  e.aliases = t.aliases, e.preferred_cache = t.preferred_cache, e.preferred_network = t.preferred_network, 
  e.aliasesFromNetwork = r;
}

function qa(e) {
  return e.expiresAt <= Q();
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class ue {
  constructor(e, t, r, n, o, i, s, a) {
    this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, 
    this.cacheManager = r, this.authorityOptions = n, this.regionDiscoveryMetadata = {
      region_used: void 0,
      region_source: void 0,
      region_outcome: void 0
    }, this.logger = o, this.performanceClient = s, this.correlationId = i, this.managedIdentity = a || !1, 
    this.regionDiscovery = new Co(t, this.logger, this.performanceClient, this.correlationId);
  }
  getAuthorityType(e) {
    if (e.HostNameAndPort.endsWith(f.CIAM_AUTH_URL)) return Ge.Ciam;
    let t = e.PathSegments;
    if (t.length) switch (t[0].toLowerCase()) {
     case f.ADFS:
      return Ge.Adfs;

     case f.DSTS:
      return Ge.Dsts;
    }
    return Ge.Default;
  }
  get authorityType() {
    return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
  }
  get protocolMode() {
    return this.authorityOptions.protocolMode;
  }
  get options() {
    return this.authorityOptions;
  }
  get canonicalAuthority() {
    return this._canonicalAuthority.urlString;
  }
  set canonicalAuthority(e) {
    this._canonicalAuthority = new x(e), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null;
  }
  get canonicalAuthorityUrlComponents() {
    if (!this._canonicalAuthorityUrlComponents) this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
    return this._canonicalAuthorityUrlComponents;
  }
  get hostnameAndPort() {
    return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
  }
  get tenant() {
    return this.canonicalAuthorityUrlComponents.PathSegments[0];
  }
  get authorizationEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.authorization_endpoint); else throw g(Oe);
  }
  get tokenEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint); else throw g(Oe);
  }
  get deviceCodeEndpoint() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode")); else throw g(Oe);
  }
  get endSessionEndpoint() {
    if (this.discoveryComplete()) {
      if (!this.metadata.end_session_endpoint) throw g(gn);
      return this.replacePath(this.metadata.end_session_endpoint);
    } else throw g(Oe);
  }
  get selfSignedJwtAudience() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.issuer); else throw g(Oe);
  }
  get jwksUri() {
    if (this.discoveryComplete()) return this.replacePath(this.metadata.jwks_uri); else throw g(Oe);
  }
  canReplaceTenant(e) {
    return e.PathSegments.length === 1 && !ue.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === Ge.Default && this.protocolMode !== Ae.OIDC;
  }
  replaceTenant(e) {
    return e.replace(/{tenant}|{tenantid}/g, this.tenant);
  }
  replacePath(e) {
    let t = e, n = new x(this.metadata.canonical_authority).getUrlComponents(), o = n.PathSegments;
    return this.canonicalAuthorityUrlComponents.PathSegments.forEach((s, a) => {
      let c = o[a];
      if (a === 0 && this.canReplaceTenant(n)) {
        let l = new x(this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
        if (c !== l) this.logger.verbose(`Replacing tenant domain name ${c} with id ${l}`), 
        c = l;
      }
      if (s !== c) t = t.replace(`/${c}/`, `/${s}/`);
    }), this.replaceTenant(t);
  }
  get defaultOpenIdConfigurationEndpoint() {
    let e = this.hostnameAndPort;
    if (this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === Ge.Adfs || this.protocolMode === Ae.OIDC && !this.isAliasOfKnownMicrosoftAuthority(e)) return `${this.canonicalAuthority}.well-known/openid-configuration`;
    return `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`;
  }
  discoveryComplete() {
    return !!this.metadata;
  }
  async resolveEndpointsAsync() {
    this.performanceClient?.addQueueMeasurement(h.AuthorityResolveEndpointsAsync, this.correlationId);
    let e = this.getCurrentMetadataEntity(), t = await F(this.updateCloudDiscoveryMetadata.bind(this), h.AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(e);
    this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, e.preferred_network);
    let r = await F(this.updateEndpointMetadata.bind(this), h.AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(e);
    this.updateCachedMetadata(e, t, {
      source: r
    }), this.performanceClient?.addFields({
      cloudDiscoverySource: t,
      authorityEndpointSource: r
    }, this.correlationId);
  }
  getCurrentMetadataEntity() {
    let e = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
    if (!e) e = {
      aliases: [],
      preferred_cache: this.hostnameAndPort,
      preferred_network: this.hostnameAndPort,
      canonical_authority: this.canonicalAuthority,
      authorization_endpoint: "",
      token_endpoint: "",
      end_session_endpoint: "",
      issuer: "",
      aliasesFromNetwork: !1,
      endpointsFromNetwork: !1,
      expiresAt: Ga(),
      jwks_uri: ""
    };
    return e;
  }
  updateCachedMetadata(e, t, r) {
    if (t !== Ce.CACHE && r?.source !== Ce.CACHE) e.expiresAt = Ga(), e.canonical_authority = this.canonicalAuthority;
    let n = this.cacheManager.generateAuthorityMetadataCacheKey(e.preferred_cache);
    this.cacheManager.setAuthorityMetadata(n, e), this.metadata = e;
  }
  async updateEndpointMetadata(e) {
    this.performanceClient?.addQueueMeasurement(h.AuthorityUpdateEndpointMetadata, this.correlationId);
    let t = this.updateEndpointMetadataFromLocalSources(e);
    if (t) {
      if (t.source === Ce.HARDCODED_VALUES) {
        if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
          if (t.metadata) {
            let n = await F(this.updateMetadataWithRegionalInformation.bind(this), h.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(t.metadata);
            Ao(e, n, !1), e.canonical_authority = this.canonicalAuthority;
          }
        }
      }
      return t.source;
    }
    let r = await F(this.getEndpointMetadataFromNetwork.bind(this), h.AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (r) {
      if (this.authorityOptions.azureRegionConfiguration?.azureRegion) r = await F(this.updateMetadataWithRegionalInformation.bind(this), h.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(r);
      return Ao(e, r, !0), Ce.NETWORK;
    } else throw g(nn, this.defaultOpenIdConfigurationEndpoint);
  }
  updateEndpointMetadataFromLocalSources(e) {
    this.logger.verbose("Attempting to get endpoint metadata from authority configuration");
    let t = this.getEndpointMetadataFromConfig();
    if (t) return this.logger.verbose("Found endpoint metadata in authority configuration"), 
    Ao(e, t, !1), {
      source: Ce.CONFIG
    };
    if (this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values."), 
    this.authorityOptions.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache."); else {
      let n = this.getEndpointMetadataFromHardcodedValues();
      if (n) return Ao(e, n, !1), {
        source: Ce.HARDCODED_VALUES,
        metadata: n
      }; else this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.");
    }
    let r = qa(e);
    if (this.isAuthoritySameType(e) && e.endpointsFromNetwork && !r) return this.logger.verbose("Found endpoint metadata in the cache."), 
    {
      source: Ce.CACHE
    }; else if (r) this.logger.verbose("The metadata entity is expired.");
    return null;
  }
  isAuthoritySameType(e) {
    return new x(e.canonical_authority).getUrlComponents().PathSegments.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
  }
  getEndpointMetadataFromConfig() {
    if (this.authorityOptions.authorityMetadata) try {
      return JSON.parse(this.authorityOptions.authorityMetadata);
    } catch (e) {
      throw V(wn);
    }
    return null;
  }
  async getEndpointMetadataFromNetwork() {
    this.performanceClient?.addQueueMeasurement(h.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
    let e = {}, t = this.defaultOpenIdConfigurationEndpoint;
    this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${t}`);
    try {
      let r = await this.networkInterface.sendGetRequestAsync(t, e);
      if (Vu(r.body)) return r.body; else return this.logger.verbose("Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration"), 
      null;
    } catch (r) {
      return this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${r}`), null;
    }
  }
  getEndpointMetadataFromHardcodedValues() {
    if (this.hostnameAndPort in ba) return ba[this.hostnameAndPort];
    return null;
  }
  async updateMetadataWithRegionalInformation(e) {
    this.performanceClient?.addQueueMeasurement(h.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
    let t = this.authorityOptions.azureRegionConfiguration?.azureRegion;
    if (t) {
      if (t !== f.AZURE_REGION_AUTO_DISCOVER_FLAG) return this.regionDiscoveryMetadata.region_outcome = ni.CONFIGURED_NO_AUTO_DETECTION, 
      this.regionDiscoveryMetadata.region_used = t, ue.replaceWithRegionalInformation(e, t);
      let r = await F(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), h.RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
      if (r) return this.regionDiscoveryMetadata.region_outcome = ni.AUTO_DETECTION_REQUESTED_SUCCESSFUL, 
      this.regionDiscoveryMetadata.region_used = r, ue.replaceWithRegionalInformation(e, r);
      this.regionDiscoveryMetadata.region_outcome = ni.AUTO_DETECTION_REQUESTED_FAILED;
    }
    return e;
  }
  async updateCloudDiscoveryMetadata(e) {
    this.performanceClient?.addQueueMeasurement(h.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
    let t = this.updateCloudDiscoveryMetadataFromLocalSources(e);
    if (t) return t;
    let r = await F(this.getCloudDiscoveryMetadataFromNetwork.bind(this), h.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
    if (r) return Hi(e, r, !0), Ce.NETWORK;
    throw V(vn);
  }
  updateCloudDiscoveryMetadataFromLocalSources(e) {
    this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration"), 
    this.logger.verbosePii(`Known Authorities: ${this.authorityOptions.knownAuthorities || f.NOT_APPLICABLE}`), 
    this.logger.verbosePii(`Authority Metadata: ${this.authorityOptions.authorityMetadata || f.NOT_APPLICABLE}`), 
    this.logger.verbosePii(`Canonical Authority: ${e.canonical_authority || f.NOT_APPLICABLE}`);
    let t = this.getCloudDiscoveryMetadataFromConfig();
    if (t) return this.logger.verbose("Found cloud discovery metadata in authority configuration"), 
    Hi(e, t, !1), Ce.CONFIG;
    if (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values."), 
    this.options.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache."); else {
      let n = Wd(this.hostnameAndPort);
      if (n) return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), 
      Hi(e, n, !1), Ce.HARDCODED_VALUES;
      this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.");
    }
    let r = qa(e);
    if (this.isAuthoritySameType(e) && e.aliasesFromNetwork && !r) return this.logger.verbose("Found cloud discovery metadata in the cache."), 
    Ce.CACHE; else if (r) this.logger.verbose("The metadata entity is expired.");
    return null;
  }
  getCloudDiscoveryMetadataFromConfig() {
    if (this.authorityType === Ge.Ciam) return this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host."), 
    ue.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    if (this.authorityOptions.cloudDiscoveryMetadata) {
      this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
      try {
        this.logger.verbose("Attempting to parse the cloud discovery metadata.");
        let e = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata), t = go(e.metadata, this.hostnameAndPort);
        if (this.logger.verbose("Parsed the cloud discovery metadata."), t) return this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata."), 
        t; else this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
      } catch (e) {
        throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), 
        V(pr);
      }
    }
    if (this.isInKnownAuthorities()) return this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), 
    ue.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    return null;
  }
  async getCloudDiscoveryMetadataFromNetwork() {
    this.performanceClient?.addQueueMeasurement(h.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
    let e = `${f.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`, t = {}, r = null;
    try {
      let n = await this.networkInterface.sendGetRequestAsync(e, t), o, i;
      if (ju(n.body)) o = n.body, i = o.metadata, this.logger.verbosePii(`tenant_discovery_endpoint is: ${o.tenant_discovery_endpoint}`); else if (Yu(n.body)) {
        if (this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${n.status}`), 
        o = n.body, o.error === f.INVALID_INSTANCE) return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), 
        null;
        this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is ${o.error}`), 
        this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is ${o.error_description}`), 
        this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), 
        i = [];
      } else return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), 
      null;
      this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), 
      r = go(i, this.hostnameAndPort);
    } catch (n) {
      if (n instanceof N) this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.\nError: ${n.errorCode}\nError Description: ${n.errorMessage}`); else {
        let o = n;
        this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.\nError: ${o.name}\nError Description: ${o.message}`);
      }
      return null;
    }
    if (!r) this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."), 
    this.logger.verbose("Creating custom Authority for custom domain scenario."), r = ue.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
    return r;
  }
  isInKnownAuthorities() {
    return this.authorityOptions.knownAuthorities.filter(t => t && x.getDomainFromUrl(t).toLowerCase() === this.hostnameAndPort).length > 0;
  }
  static generateAuthority(e, t) {
    let r;
    if (t && t.azureCloudInstance !== Ht.None) {
      let n = t.tenant ? t.tenant : f.DEFAULT_COMMON_TENANT;
      r = `${t.azureCloudInstance}/${n}/`;
    }
    return r ? r : e;
  }
  static createCloudDiscoveryMetadataFromHost(e) {
    return {
      preferred_network: e,
      preferred_cache: e,
      aliases: [ e ]
    };
  }
  getPreferredCache() {
    if (this.managedIdentity) return f.DEFAULT_AUTHORITY_HOST; else if (this.discoveryComplete()) return this.metadata.preferred_cache; else throw g(Oe);
  }
  isAlias(e) {
    return this.metadata.aliases.indexOf(e) > -1;
  }
  isAliasOfKnownMicrosoftAuthority(e) {
    return Oa.has(e);
  }
  static isPublicCloudAuthority(e) {
    return f.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
  }
  static buildRegionalAuthorityString(e, t, r) {
    let n = new x(e);
    n.validateAsUri();
    let o = n.getUrlComponents(), i = `${t}.${o.HostNameAndPort}`;
    if (this.isPublicCloudAuthority(o.HostNameAndPort)) i = `${t}.${f.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`;
    let s = x.constructAuthorityUriFromObject({
      ...n.getUrlComponents(),
      HostNameAndPort: i
    }).urlString;
    if (r) return `${s}?${r}`;
    return s;
  }
  static replaceWithRegionalInformation(e, t) {
    let r = {
      ...e
    };
    if (r.authorization_endpoint = ue.buildRegionalAuthorityString(r.authorization_endpoint, t), 
    r.token_endpoint = ue.buildRegionalAuthorityString(r.token_endpoint, t), r.end_session_endpoint) r.end_session_endpoint = ue.buildRegionalAuthorityString(r.end_session_endpoint, t);
    return r;
  }
  static transformCIAMAuthority(e) {
    let t = e, n = new x(e).getUrlComponents();
    if (n.PathSegments.length === 0 && n.HostNameAndPort.endsWith(f.CIAM_AUTH_URL)) {
      let o = n.HostNameAndPort.split(".")[0];
      t = `${t}${o}${f.AAD_TENANT_DOMAIN_SUFFIX}`;
    }
    return t;
  }
}

ue.reservedTenantDomains = new Set([ "{tenant}", "{tenantid}", be.COMMON, be.CONSUMERS, be.ORGANIZATIONS ]);

function ih(e) {
  let n = new x(e).getUrlComponents().PathSegments.slice(-1)[0]?.toLowerCase();
  switch (n) {
   case be.COMMON:
   case be.ORGANIZATIONS:
   case be.CONSUMERS:
    return;

   default:
    return n;
  }
}

function Fi(e) {
  return e.endsWith(f.FORWARD_SLASH) ? e : `${e}${f.FORWARD_SLASH}`;
}

function Ka(e) {
  let t = e.cloudDiscoveryMetadata, r = void 0;
  if (t) try {
    r = JSON.parse(t);
  } catch (n) {
    throw V(pr);
  }
  return {
    canonicalAuthority: e.authority ? Fi(e.authority) : void 0,
    knownAuthorities: e.knownAuthorities,
    cloudDiscoveryMetadata: r
  };
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ async function Va(e, t, r, n, o, i, s) {
  s?.addQueueMeasurement(h.AuthorityFactoryCreateDiscoveredInstance, i);
  let a = ue.transformCIAMAuthority(Fi(e)), c = new ue(a, t, r, n, o, i, s);
  try {
    return await F(c.resolveEndpointsAsync.bind(c), h.AuthorityResolveEndpointsAsync, o, s, i)(), 
    c;
  } catch (l) {
    throw g(Oe);
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class qe extends N {
  constructor(e, t, r, n, o) {
    super(e, t, r);
    this.name = "ServerError", this.errorNo = n, this.status = o, Object.setPrototypeOf(this, qe.prototype) /*! @azure/msal-common v15.13.1 2025-10-29 */;
  }
}

function Nn(e, t, r) {
  return {
    clientId: e,
    authority: t.authority,
    scopes: t.scopes,
    homeAccountIdentifier: r,
    claims: t.claims,
    authenticationScheme: t.authenticationScheme,
    resourceRequestMethod: t.resourceRequestMethod,
    resourceRequestUri: t.resourceRequestUri,
    shrClaims: t.shrClaims,
    sshKid: t.sshKid,
    embeddedClientId: t.embeddedClientId || t.tokenBodyParameters?.clientId
  };
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class It {
  static generateThrottlingStorageKey(e) {
    return `${ot.THROTTLING_PREFIX}.${JSON.stringify(e)}`;
  }
  static preProcess(e, t, r) {
    let n = It.generateThrottlingStorageKey(t), o = e.getThrottlingCache(n);
    if (o) {
      if (o.throttleTime < Date.now()) {
        e.removeItem(n, r);
        return;
      }
      throw new qe(o.errorCodes?.join(" ") || f.EMPTY_STRING, o.errorMessage, o.subError);
    }
  }
  static postProcess(e, t, r, n) {
    if (It.checkResponseStatus(r) || It.checkResponseForRetryAfter(r)) {
      let o = {
        throttleTime: It.calculateThrottleTime(parseInt(r.headers[Y.RETRY_AFTER])),
        error: r.body.error,
        errorCodes: r.body.error_codes,
        errorMessage: r.body.error_description,
        subError: r.body.suberror
      };
      e.setThrottlingCache(It.generateThrottlingStorageKey(t), o, n);
    }
  }
  static checkResponseStatus(e) {
    return e.status === 429 || e.status >= 500 && e.status < 600;
  }
  static checkResponseForRetryAfter(e) {
    if (e.headers) return e.headers.hasOwnProperty(Y.RETRY_AFTER) && (e.status < 200 || e.status >= 300);
    return !1;
  }
  static calculateThrottleTime(e) {
    let t = e <= 0 ? 0 : e, r = Date.now() / 1e3;
    return Math.floor(Math.min(r + (t || ot.DEFAULT_THROTTLE_TIME_SECONDS), r + ot.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
  }
  static removeThrottle(e, t, r, n) {
    let o = Nn(t, r, n), i = this.generateThrottlingStorageKey(o);
    e.removeItem(i, r.correlationId);
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class $i extends N {
  constructor(e, t, r) {
    super(e.errorCode, e.errorMessage, e.subError);
    Object.setPrototypeOf(this, $i.prototype), this.name = "NetworkError", this.error = e, 
    this.httpStatus = t, this.responseHeaders = r /*! @azure/msal-common v15.13.1 2025-10-29 */;
  }
}

class Te {
  constructor(e, t) {
    this.config = Xd(e), this.logger = new Le(this.config.loggerOptions, pi, En), this.cryptoUtils = this.config.cryptoInterface, 
    this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, 
    this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, 
    this.performanceClient = t;
  }
  createTokenRequestHeaders(e) {
    let t = {};
    if (t[Y.CONTENT_TYPE] = f.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e) switch (e.type) {
     case Ie.HOME_ACCOUNT_ID:
      try {
        let r = st(e.credential);
        t[Y.CCS_HEADER] = `Oid:${r.uid}@${r.utid}`;
      } catch (r) {
        this.logger.verbose("Could not parse home account ID for CCS Header: " + r);
      }
      break;

     case Ie.UPN:
      t[Y.CCS_HEADER] = `UPN: ${e.credential}`;
      break;
    }
    return t;
  }
  async executePostToTokenEndpoint(e, t, r, n, o, i) {
    if (i) this.performanceClient?.addQueueMeasurement(i, o);
    let s = await this.sendPostRequest(n, e, {
      body: t,
      headers: r
    }, o);
    if (this.config.serverTelemetryManager && s.status < 500 && s.status !== 429) this.config.serverTelemetryManager.clearTelemetryCache();
    return s;
  }
  async sendPostRequest(e, t, r, n) {
    It.preProcess(this.cacheManager, e, n);
    let o;
    try {
      o = await F(this.networkClient.sendPostRequestAsync.bind(this.networkClient), h.NetworkClientSendPostRequestAsync, this.logger, this.performanceClient, n)(t, r);
      let i = o.headers || {};
      this.performanceClient?.addFields({
        refreshTokenSize: o.body.refresh_token?.length || 0,
        httpVerToken: i[Y.X_MS_HTTP_VERSION] || "",
        requestId: i[Y.X_MS_REQUEST_ID] || ""
      }, n);
    } catch (i) {
      if (i instanceof $i) {
        let s = i.responseHeaders;
        if (s) this.performanceClient?.addFields({
          httpVerToken: s[Y.X_MS_HTTP_VERSION] || "",
          requestId: s[Y.X_MS_REQUEST_ID] || "",
          contentTypeHeader: s[Y.CONTENT_TYPE] || void 0,
          contentLengthHeader: s[Y.CONTENT_LENGTH] || void 0,
          httpStatus: i.httpStatus
        }, n);
        throw i.error;
      }
      if (i instanceof N) throw i; else throw g(Mt);
    }
    return It.postProcess(this.cacheManager, e, o, n), o;
  }
  async updateAuthority(e, t) {
    this.performanceClient?.addQueueMeasurement(h.UpdateTokenEndpointAuthority, t);
    let r = `https://${e}/${this.authority.tenant}/`, n = await Va(r, this.networkClient, this.cacheManager, this.authority.options, this.logger, t, this.performanceClient);
    this.authority = n;
  }
  createTokenQueryParameters(e) {
    let t = new Map;
    if (e.embeddedClientId) Kt(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    if (e.tokenQueryParameters) He(t, e.tokenQueryParameters);
    return at(t, e.correlationId), Pn(t, e.correlationId, this.performanceClient), pe(t) /*! @azure/msal-common v15.13.1 2025-10-29 */;
  }
}

var _r = "no_tokens_found", Bi = "native_account_unavailable", zi = "refresh_token_expired", ja = "ux_not_allowed", ah = "interaction_required", ch = "consent_required", lh = "login_required", Sr = "bad_token";

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var dh = [ ah, ch, lh, Sr, ja ], Fg = [ "message_only", "additional_action", "basic_action", "user_password_expired", "consent_required", "bad_token" ], Gi = {
  [_r]: "No refresh token found in the cache. Please sign-in.",
  [Bi]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.",
  [zi]: "Refresh token has expired.",
  [Sr]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve.",
  [ja]: "`canShowUI` flag in Edge was set to false. User interaction required on web page. Please invoke an interactive API to resolve."
}, $g = {
  noTokensFoundError: {
    code: _r,
    desc: Gi[_r]
  },
  native_account_unavailable: {
    code: Bi,
    desc: Gi[Bi]
  },
  bad_token: {
    code: Sr,
    desc: Gi[Sr]
  }
};

class _t extends N {
  constructor(e, t, r, n, o, i, s, a) {
    super(e, t, r);
    Object.setPrototypeOf(this, _t.prototype), this.timestamp = n || f.EMPTY_STRING, 
    this.traceId = o || f.EMPTY_STRING, this.correlationId = i || f.EMPTY_STRING, this.claims = s || f.EMPTY_STRING, 
    this.name = "InteractionRequiredAuthError", this.errorNo = a;
  }
}

function uh(e, t, r) {
  let n = !!e && dh.indexOf(e) > -1, o = !!r && Fg.indexOf(r) > -1, i = !!t && dh.some(s => t.indexOf(s) > -1);
  return n || i || o;
}

function Ya(e) {
  return new _t(e, Gi[e]);
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class qi {
  static setRequestState(e, t, r) {
    let n = qi.generateLibraryState(e, r);
    return t ? `${n}${f.RESOURCE_DELIM}${t}` : n;
  }
  static generateLibraryState(e, t) {
    if (!e) throw g(ur);
    let r = {
      id: e.createNewGuid()
    };
    if (t) r.meta = t;
    let n = JSON.stringify(r);
    return e.base64Encode(n);
  }
  static parseRequestState(e, t) {
    if (!e) throw g(ur);
    if (!t) throw g(lr);
    try {
      let r = t.split(f.RESOURCE_DELIM), n = r[0], o = r.length > 1 ? r.slice(1).join(f.RESOURCE_DELIM) : f.EMPTY_STRING, i = e.base64Decode(n), s = JSON.parse(i);
      return {
        userRequestState: o || f.EMPTY_STRING,
        libraryState: s
      };
    } catch (r) {
      throw g(lr);
    }
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var Bg = {
  SW: "sw"
};

class Rr {
  constructor(e, t) {
    this.cryptoUtils = e, this.performanceClient = t;
  }
  async generateCnf(e, t) {
    this.performanceClient?.addQueueMeasurement(h.PopTokenGenerateCnf, e.correlationId);
    let r = await F(this.generateKid.bind(this), h.PopTokenGenerateCnf, t, this.performanceClient, e.correlationId)(e), n = this.cryptoUtils.base64UrlEncode(JSON.stringify(r));
    return {
      kid: r.kid,
      reqCnfString: n
    };
  }
  async generateKid(e) {
    return this.performanceClient?.addQueueMeasurement(h.PopTokenGenerateKid, e.correlationId), 
    {
      kid: await this.cryptoUtils.getPublicKeyThumbprint(e),
      xms_ksl: Bg.SW
    };
  }
  async signPopToken(e, t, r) {
    return this.signPayload(e, t, r);
  }
  async signPayload(e, t, r, n) {
    let {resourceRequestMethod: o, resourceRequestUri: i, shrClaims: s, shrNonce: a, shrOptions: c} = r, d = (i ? new x(i) : void 0)?.getUrlComponents();
    return this.cryptoUtils.signJwt({
      at: e,
      ts: Q(),
      m: o?.toUpperCase(),
      u: d?.HostNameAndPort,
      nonce: a || this.cryptoUtils.createNewGuid(),
      p: d?.AbsolutePath,
      q: d?.QueryString ? [ [], d.QueryString ] : void 0,
      client_claims: s || void 0,
      ...n
    }, t, c, r.correlationId);
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class Xe {
  constructor(e, t) {
    this.cache = e, this.hasChanged = t;
  }
  get cacheHasChanged() {
    return this.hasChanged;
  }
  get tokenCache() {
    return this.cache;
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class ie {
  constructor(e, t, r, n, o, i, s) {
    this.clientId = e, this.cacheStorage = t, this.cryptoObj = r, this.logger = n, this.serializableCache = o, 
    this.persistencePlugin = i, this.performanceClient = s;
  }
  validateTokenResponse(e, t) {
    if (e.error || e.error_description || e.suberror) {
      let r = `Error(s): ${e.error_codes || f.NOT_AVAILABLE} - Timestamp: ${e.timestamp || f.NOT_AVAILABLE} - Description: ${e.error_description || f.NOT_AVAILABLE} - Correlation ID: ${e.correlation_id || f.NOT_AVAILABLE} - Trace ID: ${e.trace_id || f.NOT_AVAILABLE}`, n = e.error_codes?.length ? e.error_codes[0] : void 0, o = new qe(e.error, r, e.suberror, n, e.status);
      if (t && e.status && e.status >= P.SERVER_ERROR_RANGE_START && e.status <= P.SERVER_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.\n${o}`);
        return;
      } else if (t && e.status && e.status >= P.CLIENT_ERROR_RANGE_START && e.status <= P.CLIENT_ERROR_RANGE_END) {
        this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.\n${o}`);
        return;
      }
      if (uh(e.error, e.error_description, e.suberror)) throw new _t(e.error, e.error_description, e.suberror, e.timestamp || f.EMPTY_STRING, e.trace_id || f.EMPTY_STRING, e.correlation_id || f.EMPTY_STRING, e.claims || f.EMPTY_STRING, n);
      throw o;
    }
  }
  async handleServerTokenResponse(e, t, r, n, o, i, s, a, c) {
    this.performanceClient?.addQueueMeasurement(h.HandleServerTokenResponse, e.correlation_id);
    let l;
    if (e.id_token) {
      if (l = yt(e.id_token || f.EMPTY_STRING, this.cryptoObj.base64Decode), o && o.nonce) {
        if (l.nonce !== o.nonce) throw g(sn);
      }
      if (n.maxAge || n.maxAge === 0) {
        let p = l.auth_time;
        if (!p) throw g(Dt);
        ki(p, n.maxAge);
      }
    }
    this.homeAccountIdentifier = fe.generateHomeAccountId(e.client_info || f.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, l);
    let d;
    if (!!o && !!o.state) d = qi.parseRequestState(this.cryptoObj, o.state);
    e.key_id = e.key_id || n.sshKid || void 0;
    let u = this.generateCacheRecord(e, t, r, n, l, i, o), m;
    try {
      if (this.persistencePlugin && this.serializableCache) this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), 
      m = new Xe(this.serializableCache, !0), await this.persistencePlugin.beforeCacheAccess(m);
      if (s && !a && u.account) {
        let p = this.cacheStorage.generateAccountKey(fe.getAccountInfo(u.account));
        if (!this.cacheStorage.getAccount(p, n.correlationId)) return this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), 
        await ie.generateAuthenticationResult(this.cryptoObj, t, u, !1, n, l, d, void 0, c);
      }
      await this.cacheStorage.saveCacheRecord(u, n.correlationId, qd(l || {}), n.storeInCache);
    } finally {
      if (this.persistencePlugin && this.serializableCache && m) this.logger.verbose("Persistence enabled, calling afterCacheAccess"), 
      await this.persistencePlugin.afterCacheAccess(m);
    }
    return ie.generateAuthenticationResult(this.cryptoObj, t, u, !1, n, l, d, e, c);
  }
  generateCacheRecord(e, t, r, n, o, i, s) {
    let a = t.getPreferredCache();
    if (!a) throw g(Lt);
    let c = vi(o), l, d;
    if (e.id_token && !!o) l = Ju(this.homeAccountIdentifier, a, e.id_token, this.clientId, c || ""), 
    d = hh(this.cacheStorage, t, this.homeAccountIdentifier, this.cryptoObj.base64Decode, n.correlationId, o, e.client_info, a, c, s, void 0, this.logger);
    let u = null;
    if (e.access_token) {
      let y = e.scope ? oe.fromString(e.scope) : new oe(n.scopes || []), T = (typeof e.expires_in === "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, _ = (typeof e.ext_expires_in === "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, k = (typeof e.refresh_in === "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, U = r + T, B = U + _, X = k && k > 0 ? r + k : void 0;
      u = Xu(this.homeAccountIdentifier, a, e.access_token, this.clientId, c || t.tenant || "", y.printScopes(), U, B, this.cryptoObj.base64Decode, X, e.token_type, i, e.key_id, n.claims, n.requestedClaimsHash);
    }
    let m = null;
    if (e.refresh_token) {
      let y;
      if (e.refresh_token_expires_in) {
        let T = typeof e.refresh_token_expires_in === "string" ? parseInt(e.refresh_token_expires_in, 10) : e.refresh_token_expires_in;
        y = r + T;
      }
      m = Zu(this.homeAccountIdentifier, a, e.refresh_token, this.clientId, e.foci, i, y);
    }
    let p = null;
    if (e.foci) p = {
      clientId: this.clientId,
      environment: a,
      familyId: e.foci
    };
    return {
      account: d,
      idToken: l,
      accessToken: u,
      refreshToken: m,
      appMetadata: p
    };
  }
  static async generateAuthenticationResult(e, t, r, n, o, i, s, a, c) {
    let l = f.EMPTY_STRING, d = [], u = null, m, p, y = f.EMPTY_STRING;
    if (r.accessToken) {
      if (r.accessToken.tokenType === L.POP && !o.popKid) {
        let U = new Rr(e), {secret: B, keyId: X} = r.accessToken;
        if (!X) throw g(yn);
        l = await U.signPopToken(B, X, o);
      } else l = r.accessToken.secret;
      if (d = oe.fromString(r.accessToken.target).asArray(), u = Li(r.accessToken.expiresOn), 
      m = Li(r.accessToken.extendedExpiresOn), r.accessToken.refreshOn) p = Li(r.accessToken.refreshOn);
    }
    if (r.appMetadata) y = r.appMetadata.familyId === xt ? xt : "";
    let T = i?.oid || i?.sub || "", _ = i?.tid || "";
    if (a?.spa_accountid && !!r.account) r.account.nativeAccountId = a?.spa_accountid;
    let k = r.account ? wi(fe.getAccountInfo(r.account), void 0, i, r.idToken?.secret) : null;
    return {
      authority: t.canonicalAuthority,
      uniqueId: T,
      tenantId: _,
      scopes: d,
      account: k,
      idToken: r?.idToken?.secret || "",
      idTokenClaims: i || {},
      accessToken: l,
      fromCache: n,
      expiresOn: u,
      extExpiresOn: m,
      refreshOn: p,
      correlationId: o.correlationId,
      requestId: c || f.EMPTY_STRING,
      familyId: y,
      tokenType: r.accessToken?.tokenType || f.EMPTY_STRING,
      state: s ? s.userRequestState : f.EMPTY_STRING,
      cloudGraphHostName: r.account?.cloudGraphHostName || f.EMPTY_STRING,
      msGraphHost: r.account?.msGraphHost || f.EMPTY_STRING,
      code: a?.spa_code,
      fromNativeBroker: !1
    };
  }
}

function hh(e, t, r, n, o, i, s, a, c, l, d, u) {
  u?.verbose("setCachedAccount called");
  let p = e.getAccountKeys().find(U => U.startsWith(r)), y = null;
  if (p) y = e.getAccount(p, o);
  let T = y || fe.createAccount({
    homeAccountId: r,
    idTokenClaims: i,
    clientInfo: s,
    environment: a,
    cloudGraphHostName: l?.cloud_graph_host_name,
    msGraphHost: l?.msgraph_host,
    nativeAccountId: d
  }, t, n), _ = T.tenantProfiles || [], k = c || T.realm;
  if (k && !_.find(U => U.tenantId === k)) {
    let U = po(r, T.localAccountId, k, i);
    _.push(U);
  }
  return T.tenantProfiles = _, T;
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ async function _e(e, t, r) {
  if (typeof e === "string") return e; else return e({
    clientId: t,
    tokenEndpoint: r
  });
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ class Ki extends Te {
  constructor(e, t) {
    super(e, t);
    this.includeRedirectUri = !0, this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes;
  }
  async acquireToken(e, t) {
    if (this.performanceClient?.addQueueMeasurement(h.AuthClientAcquireToken, e.correlationId), 
    !e.code) throw g(dn);
    let r = Q(), n = await F(this.executeTokenRequest.bind(this), h.AuthClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(this.authority, e), o = n.headers?.[Y.X_MS_REQUEST_ID], i = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
    return i.validateTokenResponse(n.body), F(i.handleServerTokenResponse.bind(i), h.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(n.body, this.authority, r, e, t, void 0, void 0, void 0, o);
  }
  getLogoutUri(e) {
    if (!e) throw V(Sn);
    let t = this.createLogoutUrlQueryString(e);
    return x.appendQueryString(this.authority.endSessionEndpoint, t);
  }
  async executeTokenRequest(e, t) {
    this.performanceClient?.addQueueMeasurement(h.AuthClientExecuteTokenRequest, t.correlationId);
    let r = this.createTokenQueryParameters(t), n = x.appendQueryString(e.tokenEndpoint, r), o = await F(this.createTokenRequestBody.bind(this), h.AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, t.correlationId)(t), i = void 0;
    if (t.clientInfo) try {
      let c = kn(t.clientInfo, this.cryptoUtils.base64Decode);
      i = {
        credential: `${c.uid}${pt.CLIENT_INFO_SEPARATOR}${c.utid}`,
        type: Ie.HOME_ACCOUNT_ID
      };
    } catch (c) {
      this.logger.verbose("Could not parse client info for CCS Header: " + c);
    }
    let s = this.createTokenRequestHeaders(i || t.ccsCredential), a = Nn(this.config.authOptions.clientId, t);
    return F(this.executePostToTokenEndpoint.bind(this), h.AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, t.correlationId)(n, o, s, a, t.correlationId, h.AuthorizationCodeClientExecutePostToTokenEndpoint);
  }
  async createTokenRequestBody(e) {
    this.performanceClient?.addQueueMeasurement(h.AuthClientCreateTokenRequestBody, e.correlationId);
    let t = new Map;
    if (Qe(t, e.embeddedClientId || e.tokenBodyParameters?.[Tt] || this.config.authOptions.clientId), 
    !this.includeRedirectUri) {
      if (!e.redirectUri) throw V(Cn);
    } else On(t, e.redirectUri);
    if (We(t, e.scopes, !0, this.oidcDefaultScopes), zu(t, e.code), Et(t, this.config.libraryInfo), 
    Ct(t, this.config.telemetry.application), qt(t), this.serverTelemetryManager && !Oi(this.config)) Gt(t, this.serverTelemetryManager);
    if (e.codeVerifier) qu(t, e.codeVerifier);
    if (this.config.clientCredentials.clientSecret) Tr(t, this.config.clientCredentials.clientSecret);
    if (this.config.clientCredentials.clientAssertion) {
      let n = this.config.clientCredentials.clientAssertion;
      Er(t, await _e(n.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), 
      Cr(t, n.assertionType);
    }
    if (zt(t, Pe.AUTHORIZATION_CODE_GRANT), At(t), e.authenticationScheme === L.POP) {
      let n = new Rr(this.cryptoUtils, this.performanceClient), o;
      if (!e.popKid) o = (await F(n.generateCnf.bind(n), h.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString; else o = this.cryptoUtils.encodeKid(e.popKid);
      Di(t, o);
    } else if (e.authenticationScheme === L.SSH) if (e.sshJwk) Ui(t, e.sshJwk); else throw V(Ft);
    if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Je(t, e.claims, this.config.authOptions.clientCapabilities);
    let r = void 0;
    if (e.clientInfo) try {
      let n = kn(e.clientInfo, this.cryptoUtils.base64Decode);
      r = {
        credential: `${n.uid}${pt.CLIENT_INFO_SEPARATOR}${n.utid}`,
        type: Ie.HOME_ACCOUNT_ID
      };
    } catch (n) {
      this.logger.verbose("Could not parse client info for CCS Header: " + n);
    } else r = e.ccsCredential;
    if (this.config.systemOptions.preventCorsPreflight && r) switch (r.type) {
     case Ie.HOME_ACCOUNT_ID:
      try {
        let n = st(r.credential);
        Bt(t, n);
      } catch (n) {
        this.logger.verbose("Could not parse home account ID for CCS Header: " + n);
      }
      break;

     case Ie.UPN:
      $t(t, r.credential);
      break;
    }
    if (e.embeddedClientId) Kt(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    if (e.tokenBodyParameters) He(t, e.tokenBodyParameters);
    if (e.enableSpaAuthorizationCode && (!e.tokenBodyParameters || !e.tokenBodyParameters[Ha])) He(t, {
      [Ha]: "1"
    });
    return Pn(t, e.correlationId, this.performanceClient), pe(t);
  }
  createLogoutUrlQueryString(e) {
    let t = new Map;
    if (e.postLogoutRedirectUri) Lu(t, e.postLogoutRedirectUri);
    if (e.correlationId) at(t, e.correlationId);
    if (e.idTokenHint) Hu(t, e.idTokenHint);
    if (e.state) xi(t, e.state);
    if (e.logoutHint) Ku(t, e.logoutHint);
    if (e.extraQueryParameters) He(t, e.extraQueryParameters);
    if (this.config.authOptions.instanceAware) Mi(t);
    return pe(t, this.config.authOptions.encodeExtraQueryParams, e.extraQueryParameters);
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var zg = 300;

class xn extends Te {
  constructor(e, t) {
    super(e, t);
  }
  async acquireToken(e) {
    this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientAcquireToken, e.correlationId);
    let t = Q(), r = await F(this.executeTokenRequest.bind(this), h.RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(e, this.authority), n = r.headers?.[Y.X_MS_REQUEST_ID], o = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return o.validateTokenResponse(r.body), F(o.handleServerTokenResponse.bind(o), h.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(r.body, this.authority, t, e, void 0, void 0, !0, e.forceCache, n);
  }
  async acquireTokenByRefreshToken(e) {
    if (!e) throw V(_n);
    if (this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientAcquireTokenByRefreshToken, e.correlationId), 
    !e.account) throw g(Ut);
    if (this.cacheManager.isAppMetadataFOCI(e.account.environment)) try {
      return await F(this.acquireTokenWithCachedRefreshToken.bind(this), h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !0);
    } catch (r) {
      let n = r instanceof _t && r.errorCode === _r, o = r instanceof qe && r.errorCode === no.INVALID_GRANT_ERROR && r.subError === no.CLIENT_MISMATCH_ERROR;
      if (n || o) return F(this.acquireTokenWithCachedRefreshToken.bind(this), h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !1); else throw r;
    }
    return F(this.acquireTokenWithCachedRefreshToken.bind(this), h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !1);
  }
  async acquireTokenWithCachedRefreshToken(e, t) {
    this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId);
    let r = Wu(this.cacheManager.getRefreshToken.bind(this.cacheManager), h.CacheManagerGetRefreshToken, this.logger, this.performanceClient, e.correlationId)(e.account, t, e.correlationId, void 0, this.performanceClient);
    if (!r) throw Ya(_r);
    if (r.expiresOn && Vt(r.expiresOn, e.refreshTokenExpirationOffsetSeconds || zg)) throw this.performanceClient?.addFields({
      rtExpiresOnMs: Number(r.expiresOn)
    }, e.correlationId), Ya(zi);
    let n = {
      ...e,
      refreshToken: r.secret,
      authenticationScheme: e.authenticationScheme || L.BEARER,
      ccsCredential: {
        credential: e.account.homeAccountId,
        type: Ie.HOME_ACCOUNT_ID
      }
    };
    try {
      return await F(this.acquireToken.bind(this), h.RefreshTokenClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(n);
    } catch (o) {
      if (o instanceof _t) {
        if (this.performanceClient?.addFields({
          rtExpiresOnMs: Number(r.expiresOn)
        }, e.correlationId), o.subError === Sr) {
          this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
          let i = this.cacheManager.generateCredentialKey(r);
          this.cacheManager.removeRefreshToken(i, e.correlationId);
        }
      }
      throw o;
    }
  }
  async executeTokenRequest(e, t) {
    this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientExecuteTokenRequest, e.correlationId);
    let r = this.createTokenQueryParameters(e), n = x.appendQueryString(t.tokenEndpoint, r), o = await F(this.createTokenRequestBody.bind(this), h.RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, e.correlationId)(e), i = this.createTokenRequestHeaders(e.ccsCredential), s = Nn(this.config.authOptions.clientId, e);
    return F(this.executePostToTokenEndpoint.bind(this), h.RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, e.correlationId)(n, o, i, s, e.correlationId, h.RefreshTokenClientExecutePostToTokenEndpoint);
  }
  async createTokenRequestBody(e) {
    this.performanceClient?.addQueueMeasurement(h.RefreshTokenClientCreateTokenRequestBody, e.correlationId);
    let t = new Map;
    if (Qe(t, e.embeddedClientId || e.tokenBodyParameters?.[Tt] || this.config.authOptions.clientId), 
    e.redirectUri) On(t, e.redirectUri);
    if (We(t, e.scopes, !0, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes), 
    zt(t, Pe.REFRESH_TOKEN_GRANT), At(t), Et(t, this.config.libraryInfo), Ct(t, this.config.telemetry.application), 
    qt(t), this.serverTelemetryManager && !Oi(this.config)) Gt(t, this.serverTelemetryManager);
    if (Gu(t, e.refreshToken), this.config.clientCredentials.clientSecret) Tr(t, this.config.clientCredentials.clientSecret);
    if (this.config.clientCredentials.clientAssertion) {
      let r = this.config.clientCredentials.clientAssertion;
      Er(t, await _e(r.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), 
      Cr(t, r.assertionType);
    }
    if (e.authenticationScheme === L.POP) {
      let r = new Rr(this.cryptoUtils, this.performanceClient), n;
      if (!e.popKid) n = (await F(r.generateCnf.bind(r), h.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString; else n = this.cryptoUtils.encodeKid(e.popKid);
      Di(t, n);
    } else if (e.authenticationScheme === L.SSH) if (e.sshJwk) Ui(t, e.sshJwk); else throw V(Ft);
    if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Je(t, e.claims, this.config.authOptions.clientCapabilities);
    if (this.config.systemOptions.preventCorsPreflight && e.ccsCredential) switch (e.ccsCredential.type) {
     case Ie.HOME_ACCOUNT_ID:
      try {
        let r = st(e.ccsCredential.credential);
        Bt(t, r);
      } catch (r) {
        this.logger.verbose("Could not parse home account ID for CCS Header: " + r);
      }
      break;

     case Ie.UPN:
      $t(t, e.ccsCredential.credential);
      break;
    }
    if (e.embeddedClientId) Kt(t, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
    if (e.tokenBodyParameters) He(t, e.tokenBodyParameters);
    return Pn(t, e.correlationId, this.performanceClient), pe(t) /*! @azure/msal-common v15.13.1 2025-10-29 */;
  }
}

class Vi extends Te {
  constructor(e, t) {
    super(e, t);
  }
  async acquireCachedToken(e) {
    this.performanceClient?.addQueueMeasurement(h.SilentFlowClientAcquireCachedToken, e.correlationId);
    let t = j.NOT_APPLICABLE;
    if (e.forceRefresh || !this.config.cacheOptions.claimsBasedCachingEnabled && !re.isEmptyObj(e.claims)) throw this.setCacheOutcome(j.FORCE_REFRESH_OR_CLAIMS, e.correlationId), 
    g(Ye);
    if (!e.account) throw g(Ut);
    let r = e.account.tenantId || ih(e.authority), n = this.cacheManager.getTokenKeys(), o = this.cacheManager.getAccessToken(e.account, e, n, r);
    if (!o) throw this.setCacheOutcome(j.NO_CACHED_ACCESS_TOKEN, e.correlationId), g(Ye); else if (Qu(o.cachedAt) || Vt(o.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.setCacheOutcome(j.CACHED_ACCESS_TOKEN_EXPIRED, e.correlationId), 
    g(Ye); else if (o.refreshOn && Vt(o.refreshOn, 0)) t = j.PROACTIVELY_REFRESHED;
    let i = e.authority || this.authority.getPreferredCache(), s = {
      account: this.cacheManager.getAccount(this.cacheManager.generateAccountKey(e.account), e.correlationId),
      accessToken: o,
      idToken: this.cacheManager.getIdToken(e.account, e.correlationId, n, r, this.performanceClient),
      refreshToken: null,
      appMetadata: this.cacheManager.readAppMetadataFromCache(i)
    };
    if (this.setCacheOutcome(t, e.correlationId), this.config.serverTelemetryManager) this.config.serverTelemetryManager.incrementCacheHits();
    return [ await F(this.generateResultFromCacheRecord.bind(this), h.SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, e.correlationId)(s, e), t ];
  }
  setCacheOutcome(e, t) {
    if (this.serverTelemetryManager?.setCacheOutcome(e), this.performanceClient?.addFields({
      cacheOutcome: e
    }, t), e !== j.NOT_APPLICABLE) this.logger.info(`Token refresh is required due to cache outcome: ${e}`);
  }
  async generateResultFromCacheRecord(e, t) {
    this.performanceClient?.addQueueMeasurement(h.SilentFlowClientGenerateResultFromCacheRecord, t.correlationId);
    let r;
    if (e.idToken) r = yt(e.idToken.secret, this.config.cryptoInterface.base64Decode);
    if (t.maxAge || t.maxAge === 0) {
      let n = r?.auth_time;
      if (!n) throw g(Dt);
      ki(n, t.maxAge);
    }
    return ie.generateAuthenticationResult(this.cryptoUtils, this.authority, e, !0, t, r);
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ function Gg(e, t, r, n) {
  let o = t.correlationId, i = new Map;
  Qe(i, t.embeddedClientId || t.extraQueryParameters?.[Tt] || e.clientId);
  let s = [ ...t.scopes || [], ...t.extraScopesToConsent || [] ];
  if (We(i, s, !0, e.authority.options.OIDCOptions?.defaultScopes), On(i, t.redirectUri), 
  at(i, o), Uu(i, t.responseMode), At(i), t.prompt) $u(i, t.prompt), n?.addFields({
    prompt: t.prompt
  }, o);
  if (t.domainHint) Fu(i, t.domainHint), n?.addFields({
    domainHintFromRequest: !0
  }, o);
  if (t.prompt !== or.SELECT_ACCOUNT) {
    if (t.sid && t.prompt === or.NONE) r.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), 
    Ba(i, t.sid), n?.addFields({
      sidFromRequest: !0
    }, o); else if (t.account) {
      let a = Kg(t.account), c = Vg(t.account);
      if (c && t.domainHint) r.warning('AuthorizationCodeClient.createAuthCodeUrlQueryString: "domainHint" param is set, skipping opaque "login_hint" claim. Please consider not passing domainHint'), 
      c = null;
      if (c) {
        r.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), 
        Eo(i, c), n?.addFields({
          loginHintFromClaim: !0
        }, o);
        try {
          let l = st(t.account.homeAccountId);
          Bt(i, l);
        } catch (l) {
          r.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
        }
      } else if (a && t.prompt === or.NONE) {
        r.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), 
        Ba(i, a), n?.addFields({
          sidFromClaim: !0
        }, o);
        try {
          let l = st(t.account.homeAccountId);
          Bt(i, l);
        } catch (l) {
          r.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
        }
      } else if (t.loginHint) r.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), 
      Eo(i, t.loginHint), $t(i, t.loginHint), n?.addFields({
        loginHintFromRequest: !0
      }, o); else if (t.account.username) {
        r.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), Eo(i, t.account.username), 
        n?.addFields({
          loginHintFromUpn: !0
        }, o);
        try {
          let l = st(t.account.homeAccountId);
          Bt(i, l);
        } catch (l) {
          r.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
        }
      }
    } else if (t.loginHint) r.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), 
    Eo(i, t.loginHint), $t(i, t.loginHint), n?.addFields({
      loginHintFromRequest: !0
    }, o);
  } else r.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
  if (t.nonce) Bu(i, t.nonce);
  if (t.state) xi(i, t.state);
  if (t.claims || e.clientCapabilities && e.clientCapabilities.length > 0) Je(i, t.claims, e.clientCapabilities);
  if (t.embeddedClientId) Kt(i, e.clientId, e.redirectUri);
  if (e.instanceAware && (!t.extraQueryParameters || !Object.keys(t.extraQueryParameters).includes(To))) Mi(i);
  return i;
}

function qg(e, t, r, n) {
  let o = pe(t, r, n);
  return x.appendQueryString(e.authorizationEndpoint, o);
}

function Kg(e) {
  return e.idTokenClaims?.sid || null;
}

function Vg(e) {
  return e.loginHint || e.idTokenClaims?.login_hint || null;
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ var mh = ",", ph = "|";

function jg(e) {
  let {skus: t, libraryName: r, libraryVersion: n, extensionName: o, extensionVersion: i} = e, s = new Map([ [ 0, [ r, n ] ], [ 2, [ o, i ] ] ]), a = [];
  if (t?.length) {
    if (a = t.split(mh), a.length < 4) return t;
  } else a = Array.from({
    length: 4
  }, () => ph);
  return s.forEach((c, l) => {
    if (c.length === 2 && c[0]?.length && c[1]?.length) Yg({
      skuArr: a,
      index: l,
      skuName: c[0],
      skuVersion: c[1]
    });
  }), a.join(mh);
}

function Yg(e) {
  let {skuArr: t, index: r, skuName: n, skuVersion: o} = e;
  if (r >= t.length) return;
  t[r] = [ n, o ].join(ph);
}

class jt {
  constructor(e, t) {
    this.cacheOutcome = j.NOT_APPLICABLE, this.cacheManager = t, this.apiId = e.apiId, 
    this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || f.EMPTY_STRING, 
    this.wrapperVer = e.wrapperVer || f.EMPTY_STRING, this.telemetryCacheKey = de.CACHE_KEY + pt.CACHE_KEY_SEPARATOR + e.clientId;
  }
  generateCurrentRequestHeaderValue() {
    let e = `${this.apiId}${de.VALUE_SEPARATOR}${this.cacheOutcome}`, t = [ this.wrapperSKU, this.wrapperVer ], r = this.getNativeBrokerErrorCode();
    if (r?.length) t.push(`broker_error=${r}`);
    let n = t.join(de.VALUE_SEPARATOR), o = this.getRegionDiscoveryFields(), i = [ e, o ].join(de.VALUE_SEPARATOR);
    return [ de.SCHEMA_VERSION, i, n ].join(de.CATEGORY_SEPARATOR);
  }
  generateLastRequestHeaderValue() {
    let e = this.getLastRequests(), t = jt.maxErrorsToSend(e), r = e.failedRequests.slice(0, 2 * t).join(de.VALUE_SEPARATOR), n = e.errors.slice(0, t).join(de.VALUE_SEPARATOR), o = e.errors.length, i = t < o ? de.OVERFLOW_TRUE : de.OVERFLOW_FALSE, s = [ o, i ].join(de.VALUE_SEPARATOR);
    return [ de.SCHEMA_VERSION, e.cacheHits, r, n, s ].join(de.CATEGORY_SEPARATOR);
  }
  cacheFailedRequest(e) {
    let t = this.getLastRequests();
    if (t.errors.length >= de.MAX_CACHED_ERRORS) t.failedRequests.shift(), t.failedRequests.shift(), 
    t.errors.shift();
    if (t.failedRequests.push(this.apiId, this.correlationId), e instanceof Error && !!e && e.toString()) if (e instanceof N) if (e.subError) t.errors.push(e.subError); else if (e.errorCode) t.errors.push(e.errorCode); else t.errors.push(e.toString()); else t.errors.push(e.toString()); else t.errors.push(de.UNKNOWN_ERROR);
    this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId);
    return;
  }
  incrementCacheHits() {
    let e = this.getLastRequests();
    return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId), 
    e.cacheHits;
  }
  getLastRequests() {
    let e = {
      failedRequests: [],
      errors: [],
      cacheHits: 0
    };
    return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || e;
  }
  clearTelemetryCache() {
    let e = this.getLastRequests(), t = jt.maxErrorsToSend(e), r = e.errors.length;
    if (t === r) this.cacheManager.removeItem(this.telemetryCacheKey, this.correlationId); else {
      let n = {
        failedRequests: e.failedRequests.slice(t * 2),
        errors: e.errors.slice(t),
        cacheHits: 0
      };
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, n, this.correlationId);
    }
  }
  static maxErrorsToSend(e) {
    let t, r = 0, n = 0, o = e.errors.length;
    for (t = 0; t < o; t++) {
      let i = e.failedRequests[2 * t] || f.EMPTY_STRING, s = e.failedRequests[2 * t + 1] || f.EMPTY_STRING, a = e.errors[t] || f.EMPTY_STRING;
      if (n += i.toString().length + s.toString().length + a.length + 3, n < de.MAX_LAST_HEADER_BYTES) r += 1; else break;
    }
    return r;
  }
  getRegionDiscoveryFields() {
    let e = [];
    return e.push(this.regionUsed || f.EMPTY_STRING), e.push(this.regionSource || f.EMPTY_STRING), 
    e.push(this.regionOutcome || f.EMPTY_STRING), e.join(",");
  }
  updateRegionDiscoveryMetadata(e) {
    this.regionUsed = e.region_used, this.regionSource = e.region_source, this.regionOutcome = e.region_outcome;
  }
  setCacheOutcome(e) {
    this.cacheOutcome = e;
  }
  setNativeBrokerErrorCode(e) {
    let t = this.getLastRequests();
    t.nativeBrokerErrorCode = e, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId);
  }
  getNativeBrokerErrorCode() {
    return this.getLastRequests().nativeBrokerErrorCode;
  }
  clearNativeBrokerErrorCode() {
    let e = this.getLastRequests();
    delete e.nativeBrokerErrorCode, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId);
  }
  static makeExtraSkuString(e) {
    return jg(e);
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ /*! @azure/msal-node v3.8.1 2025-10-29 */ class wr {
  static deserializeJSONBlob(e) {
    return !e ? {} : JSON.parse(e);
  }
  static deserializeAccounts(e) {
    let t = {};
    if (e) Object.keys(e).map(function(r) {
      let n = e[r], o = {
        homeAccountId: n.home_account_id,
        environment: n.environment,
        realm: n.realm,
        localAccountId: n.local_account_id,
        username: n.username,
        authorityType: n.authority_type,
        name: n.name,
        clientInfo: n.client_info,
        lastModificationTime: n.last_modification_time,
        lastModificationApp: n.last_modification_app,
        tenantProfiles: n.tenantProfiles?.map(s => JSON.parse(s)),
        lastUpdatedAt: Date.now().toString()
      }, i = new fe;
      yr.toObject(i, o), t[r] = i;
    });
    return t;
  }
  static deserializeIdTokens(e) {
    let t = {};
    if (e) Object.keys(e).map(function(r) {
      let n = e[r], o = {
        homeAccountId: n.home_account_id,
        environment: n.environment,
        credentialType: n.credential_type,
        clientId: n.client_id,
        secret: n.secret,
        realm: n.realm,
        lastUpdatedAt: Date.now().toString()
      };
      t[r] = o;
    });
    return t;
  }
  static deserializeAccessTokens(e) {
    let t = {};
    if (e) Object.keys(e).map(function(r) {
      let n = e[r], o = {
        homeAccountId: n.home_account_id,
        environment: n.environment,
        credentialType: n.credential_type,
        clientId: n.client_id,
        secret: n.secret,
        realm: n.realm,
        target: n.target,
        cachedAt: n.cached_at,
        expiresOn: n.expires_on,
        extendedExpiresOn: n.extended_expires_on,
        refreshOn: n.refresh_on,
        keyId: n.key_id,
        tokenType: n.token_type,
        requestedClaims: n.requestedClaims,
        requestedClaimsHash: n.requestedClaimsHash,
        userAssertionHash: n.userAssertionHash,
        lastUpdatedAt: Date.now().toString()
      };
      t[r] = o;
    });
    return t;
  }
  static deserializeRefreshTokens(e) {
    let t = {};
    if (e) Object.keys(e).map(function(r) {
      let n = e[r], o = {
        homeAccountId: n.home_account_id,
        environment: n.environment,
        credentialType: n.credential_type,
        clientId: n.client_id,
        secret: n.secret,
        familyId: n.family_id,
        target: n.target,
        realm: n.realm,
        lastUpdatedAt: Date.now().toString()
      };
      t[r] = o;
    });
    return t;
  }
  static deserializeAppMetadata(e) {
    let t = {};
    if (e) Object.keys(e).map(function(r) {
      let n = e[r];
      t[r] = {
        clientId: n.client_id,
        environment: n.environment,
        familyId: n.family_id
      };
    });
    return t;
  }
  static deserializeAllCache(e) {
    return {
      accounts: e.Account ? this.deserializeAccounts(e.Account) : {},
      idTokens: e.IdToken ? this.deserializeIdTokens(e.IdToken) : {},
      accessTokens: e.AccessToken ? this.deserializeAccessTokens(e.AccessToken) : {},
      refreshTokens: e.RefreshToken ? this.deserializeRefreshTokens(e.RefreshToken) : {},
      appMetadata: e.AppMetadata ? this.deserializeAppMetadata(e.AppMetadata) : {}
    };
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ /*! @azure/msal-node v3.8.1 2025-10-29 */ var gh = "system_assigned_managed_identity", ry = "managed_identity", Wa = `https://login.microsoftonline.com/${ry}/`, xe = {
  AUTHORIZATION_HEADER_NAME: "Authorization",
  METADATA_HEADER_NAME: "Metadata",
  APP_SERVICE_SECRET_HEADER_NAME: "X-IDENTITY-HEADER",
  ML_AND_SF_SECRET_HEADER_NAME: "secret"
}, ce = {
  API_VERSION: "api-version",
  RESOURCE: "resource",
  SHA256_TOKEN_TO_REFRESH: "token_sha256_to_refresh",
  XMS_CC: "xms_cc"
}, v = {
  AZURE_POD_IDENTITY_AUTHORITY_HOST: "AZURE_POD_IDENTITY_AUTHORITY_HOST",
  DEFAULT_IDENTITY_CLIENT_ID: "DEFAULT_IDENTITY_CLIENT_ID",
  IDENTITY_ENDPOINT: "IDENTITY_ENDPOINT",
  IDENTITY_HEADER: "IDENTITY_HEADER",
  IDENTITY_SERVER_THUMBPRINT: "IDENTITY_SERVER_THUMBPRINT",
  IMDS_ENDPOINT: "IMDS_ENDPOINT",
  MSI_ENDPOINT: "MSI_ENDPOINT",
  MSI_SECRET: "MSI_SECRET"
}, b = {
  APP_SERVICE: "AppService",
  AZURE_ARC: "AzureArc",
  CLOUD_SHELL: "CloudShell",
  DEFAULT_TO_IMDS: "DefaultToImds",
  IMDS: "Imds",
  MACHINE_LEARNING: "MachineLearning",
  SERVICE_FABRIC: "ServiceFabric"
}, ne = {
  SYSTEM_ASSIGNED: "system-assigned",
  USER_ASSIGNED_CLIENT_ID: "user-assigned-client-id",
  USER_ASSIGNED_RESOURCE_ID: "user-assigned-resource-id",
  USER_ASSIGNED_OBJECT_ID: "user-assigned-object-id"
}, J = {
  GET: "get",
  POST: "post"
}, ji = {
  SUCCESS_RANGE_START: P.SUCCESS_RANGE_START,
  SUCCESS_RANGE_END: P.SUCCESS_RANGE_END,
  SERVER_ERROR: P.SERVER_ERROR
}, yh = "REGION_NAME", Th = "MSAL_FORCE_REGION", Eh = 32, Ch = {
  SHA256: "sha256"
}, Yi = {
  CV_CHARSET: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
}, Qa = {
  KEY_SEPARATOR: "-"
}, Se = {
  MSAL_SKU: "msal.js.node",
  JWT_BEARER_ASSERTION_TYPE: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
  AUTHORIZATION_PENDING: "authorization_pending",
  HTTP_PROTOCOL: "http://",
  LOCALHOST: "localhost"
}, St = {
  acquireTokenSilent: 62,
  acquireTokenByUsernamePassword: 371,
  acquireTokenByDeviceCode: 671,
  acquireTokenByClientCredential: 771,
  acquireTokenByCode: 871,
  acquireTokenByRefreshToken: 872
}, Ke = {
  RSA_256: "RS256",
  PSS_256: "PS256",
  X5T_256: "x5t#S256",
  X5T: "x5t",
  X5C: "x5c",
  AUDIENCE: "aud",
  EXPIRATION_TIME: "exp",
  ISSUER: "iss",
  SUBJECT: "sub",
  NOT_BEFORE: "nbf",
  JWT_ID: "jti"
}, Wi = {
  INTERVAL_MS: 100,
  TIMEOUT_MS: 5e3
}, Ah = 4096;

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Io {
  static getNetworkResponse(e, t, r) {
    return {
      headers: e,
      body: t,
      status: r
    };
  }
  static urlToHttpOptions(e) {
    let t = {
      protocol: e.protocol,
      hostname: e.hostname && e.hostname.startsWith("[") ? e.hostname.slice(1, -1) : e.hostname,
      hash: e.hash,
      search: e.search,
      pathname: e.pathname,
      path: `${e.pathname || ""}${e.search || ""}`,
      href: e.href
    };
    if (e.port !== "") t.port = Number(e.port);
    if (e.username || e.password) t.auth = `${decodeURIComponent(e.username)}:${decodeURIComponent(e.password)}`;
    return t;
  }
}

import Ja from "http";

import Ih from "https";

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class _o {
  constructor(e, t) {
    this.proxyUrl = e || "", this.customAgentOptions = t || {};
  }
  async sendGetRequestAsync(e, t, r) {
    if (this.proxyUrl) return _h(e, this.proxyUrl, J.GET, t, this.customAgentOptions, r); else return Sh(e, J.GET, t, this.customAgentOptions, r);
  }
  async sendPostRequestAsync(e, t) {
    if (this.proxyUrl) return _h(e, this.proxyUrl, J.POST, t, this.customAgentOptions); else return Sh(e, J.POST, t, this.customAgentOptions);
  }
}

var _h = (e, t, r, n, o, i) => {
  let s = new URL(e), a = new URL(t), c = n?.headers || {}, l = {
    host: a.hostname,
    port: a.port,
    method: "CONNECT",
    path: s.hostname,
    headers: c
  };
  if (o && Object.keys(o).length) l.agent = new Ja.Agent(o);
  let d = "";
  if (r === J.POST) {
    let m = n?.body || "";
    d = `Content-Type: application/x-www-form-urlencoded\r\nContent-Length: ${m.length}\r\n\r\n${m}`;
  } else if (i) l.timeout = i;
  let u = `${r.toUpperCase()} ${s.href} HTTP/1.1\r\nHost: ${s.host}\r\nConnection: close\r\n` + d + `\r\n`;
  return new Promise((m, p) => {
    let y = Ja.request(l);
    if (i) y.on("timeout", () => {
      y.destroy(), p(Error("Request time out"));
    });
    y.end(), y.on("connect", (T, _) => {
      let k = T?.statusCode || ji.SERVER_ERROR;
      if (k < ji.SUCCESS_RANGE_START || k > ji.SUCCESS_RANGE_END) y.destroy(), _.destroy(), 
      p(Error(`Error connecting to proxy. Http status code: ${T.statusCode}. Http status message: ${T?.statusMessage || "Unknown"}`));
      _.write(u);
      let U = [];
      _.on("data", B => {
        U.push(B);
      }), _.on("end", () => {
        let X = Buffer.concat([ ...U ]).toString().split(`\r\n`), I = parseInt(X[0].split(" ")[1]), A = X[0].split(" ").slice(2).join(" "), E = X[X.length - 1], S = X.slice(1, X.length - 2), H = new Map;
        S.forEach(er => {
          let Bc = er.split(new RegExp(/:\s(.*)/s)), um = Bc[0], ks = Bc[1];
          try {
            let No = JSON.parse(ks);
            if (No && typeof No === "object") ks = No;
          } catch (No) {}
          H.set(um, ks);
        });
        let D = Object.fromEntries(H), se = Io.getNetworkResponse(D, Rh(I, A, D, E), I);
        if ((I < P.SUCCESS_RANGE_START || I > P.SUCCESS_RANGE_END) && se.body.error !== Se.AUTHORIZATION_PENDING) y.destroy();
        m(se);
      }), _.on("error", B => {
        y.destroy(), _.destroy(), p(Error(B.toString()));
      });
    }), y.on("error", T => {
      y.destroy(), p(Error(T.toString()));
    });
  });
}, Sh = (e, t, r, n, o) => {
  let i = t === J.POST, s = r?.body || "", a = new URL(e), c = r?.headers || {}, l = {
    method: t,
    headers: c,
    ...Io.urlToHttpOptions(a)
  };
  if (n && Object.keys(n).length) l.agent = new Ih.Agent(n);
  if (i) l.headers = {
    ...l.headers,
    "Content-Length": s.length
  }; else if (o) l.timeout = o;
  return new Promise((d, u) => {
    let m;
    if (l.protocol === "http:") m = Ja.request(l); else m = Ih.request(l);
    if (i) m.write(s);
    if (o) m.on("timeout", () => {
      m.destroy(), u(Error("Request time out"));
    });
    m.end(), m.on("response", p => {
      let {headers: y, statusCode: T, statusMessage: _} = p, k = [];
      p.on("data", U => {
        k.push(U);
      }), p.on("end", () => {
        let U = Buffer.concat([ ...k ]).toString(), B = y, X = Io.getNetworkResponse(B, Rh(T, _, B, U), T);
        if ((T < P.SUCCESS_RANGE_START || T > P.SUCCESS_RANGE_END) && X.body.error !== Se.AUTHORIZATION_PENDING) m.destroy();
        d(X);
      });
    }), m.on("error", p => {
      m.destroy(), u(Error(p.toString()));
    });
  });
}, Rh = (e, t, r, n) => {
  let o;
  try {
    o = JSON.parse(n);
  } catch (i) {
    let s, a;
    if (e >= P.CLIENT_ERROR_RANGE_START && e <= P.CLIENT_ERROR_RANGE_END) s = "client_error", 
    a = "A client"; else if (e >= P.SERVER_ERROR_RANGE_START && e <= P.SERVER_ERROR_RANGE_END) s = "server_error", 
    a = "A server"; else s = "unknown_error", a = "An unknown";
    o = {
      error: s,
      error_description: `${a} error occured.\nHttp status code: ${e}\nHttp status message: ${t || "Unknown"}\nHeaders: ${JSON.stringify(r)}`
    };
  }
  return o;
};

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var Qi = "invalid_file_extension", Ji = "invalid_file_path", Yt = "invalid_managed_identity_id_type", Xi = "invalid_secret", wh = "missing_client_id", vh = "network_unavailable", Zi = "platform_not_supported", es = "unable_to_create_azure_arc", ts = "unable_to_create_cloud_shell", rs = "unable_to_create_source", So = "unable_to_read_secret_file", kh = "user_assigned_not_available_at_runtime", ns = "www_authenticate_header_missing", os = "www_authenticate_header_unsupported_format", vr = {
  [v.AZURE_POD_IDENTITY_AUTHORITY_HOST]: "azure_pod_identity_authority_host_url_malformed",
  [v.IDENTITY_ENDPOINT]: "identity_endpoint_url_malformed",
  [v.IMDS_ENDPOINT]: "imds_endpoint_url_malformed",
  [v.MSI_ENDPOINT]: "msi_endpoint_url_malformed"
};

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var ny = {
  [Qi]: "The file path in the WWW-Authenticate header does not contain a .key file.",
  [Ji]: "The file path in the WWW-Authenticate header is not in a valid Windows or Linux Format.",
  [Yt]: "More than one ManagedIdentityIdType was provided.",
  [Xi]: "The secret in the file on the file path in the WWW-Authenticate header is greater than 4096 bytes.",
  [Zi]: "The platform is not supported by Azure Arc. Azure Arc only supports Windows and Linux.",
  [wh]: "A ManagedIdentityId id was not provided.",
  [vr.AZURE_POD_IDENTITY_AUTHORITY_HOST]: `The Managed Identity's '${v.AZURE_POD_IDENTITY_AUTHORITY_HOST}' environment variable is malformed.`,
  [vr.IDENTITY_ENDPOINT]: `The Managed Identity's '${v.IDENTITY_ENDPOINT}' environment variable is malformed.`,
  [vr.IMDS_ENDPOINT]: `The Managed Identity's '${v.IMDS_ENDPOINT}' environment variable is malformed.`,
  [vr.MSI_ENDPOINT]: `The Managed Identity's '${v.MSI_ENDPOINT}' environment variable is malformed.`,
  [vh]: "Authentication unavailable. The request to the managed identity endpoint timed out.",
  [es]: "Azure Arc Managed Identities can only be system assigned.",
  [ts]: "Cloud Shell Managed Identities can only be system assigned.",
  [rs]: "Unable to create a Managed Identity source based on environment variables.",
  [So]: "Unable to read the secret file.",
  [kh]: "Service Fabric user assigned managed identity ClientId or ResourceId is not configurable at runtime.",
  [ns]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is missing.",
  [os]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is in an unsupported format."
};

class Xa extends N {
  constructor(e) {
    super(e, ny[e]);
    this.name = "ManagedIdentityError", Object.setPrototypeOf(this, Xa.prototype);
  }
}

function ae(e) {
  return new Xa(e);
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Za {
  get id() {
    return this._id;
  }
  set id(e) {
    this._id = e;
  }
  get idType() {
    return this._idType;
  }
  set idType(e) {
    this._idType = e;
  }
  constructor(e) {
    let t = e?.userAssignedClientId, r = e?.userAssignedResourceId, n = e?.userAssignedObjectId;
    if (t) {
      if (r || n) throw ae(Yt);
      this.id = t, this.idType = ne.USER_ASSIGNED_CLIENT_ID;
    } else if (r) {
      if (t || n) throw ae(Yt);
      this.id = r, this.idType = ne.USER_ASSIGNED_RESOURCE_ID;
    } else if (n) {
      if (t || r) throw ae(Yt);
      this.id = n, this.idType = ne.USER_ASSIGNED_OBJECT_ID;
    } else this.id = gh, this.idType = ne.SYSTEM_ASSIGNED /*! @azure/msal-node v3.8.1 2025-10-29 */;
  }
}

var le = {
  invalidLoopbackAddressType: {
    code: "invalid_loopback_server_address_type",
    desc: "Loopback server address is not type string. This is unexpected."
  },
  unableToLoadRedirectUri: {
    code: "unable_to_load_redirectUrl",
    desc: "Loopback server callback was invoked without a url. This is unexpected."
  },
  noAuthCodeInResponse: {
    code: "no_auth_code_in_response",
    desc: "No auth code found in the server response. Please check your network trace to determine what happened."
  },
  noLoopbackServerExists: {
    code: "no_loopback_server_exists",
    desc: "No loopback server exists yet."
  },
  loopbackServerAlreadyExists: {
    code: "loopback_server_already_exists",
    desc: "Loopback server already exists. Cannot create another."
  },
  loopbackServerTimeout: {
    code: "loopback_server_timeout",
    desc: "Timed out waiting for auth code listener to be registered."
  },
  stateNotFoundError: {
    code: "state_not_found",
    desc: "State not found. Please verify that the request originated from msal."
  },
  thumbprintMissing: {
    code: "thumbprint_missing_from_client_certificate",
    desc: "Client certificate does not contain a SHA-1 or SHA-256 thumbprint."
  },
  redirectUriNotSupported: {
    code: "redirect_uri_not_supported",
    desc: "RedirectUri is not supported in this scenario. Please remove redirectUri from the request."
  }
};

class te extends N {
  constructor(e, t) {
    super(e, t);
    this.name = "NodeAuthError";
  }
  static createInvalidLoopbackAddressTypeError() {
    return new te(le.invalidLoopbackAddressType.code, `${le.invalidLoopbackAddressType.desc}`);
  }
  static createUnableToLoadRedirectUrlError() {
    return new te(le.unableToLoadRedirectUri.code, `${le.unableToLoadRedirectUri.desc}`);
  }
  static createNoAuthCodeInResponseError() {
    return new te(le.noAuthCodeInResponse.code, `${le.noAuthCodeInResponse.desc}`);
  }
  static createNoLoopbackServerExistsError() {
    return new te(le.noLoopbackServerExists.code, `${le.noLoopbackServerExists.desc}`);
  }
  static createLoopbackServerAlreadyExistsError() {
    return new te(le.loopbackServerAlreadyExists.code, `${le.loopbackServerAlreadyExists.desc}`);
  }
  static createLoopbackServerTimeoutError() {
    return new te(le.loopbackServerTimeout.code, `${le.loopbackServerTimeout.desc}`);
  }
  static createStateNotFoundError() {
    return new te(le.stateNotFoundError.code, le.stateNotFoundError.desc);
  }
  static createThumbprintMissingError() {
    return new te(le.thumbprintMissing.code, le.thumbprintMissing.desc);
  }
  static createRedirectUriNotSupportedError() {
    return new te(le.redirectUriNotSupported.code, le.redirectUriNotSupported.desc);
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var oy = {
  clientId: f.EMPTY_STRING,
  authority: f.DEFAULT_AUTHORITY,
  clientSecret: f.EMPTY_STRING,
  clientAssertion: f.EMPTY_STRING,
  clientCertificate: {
    thumbprint: f.EMPTY_STRING,
    thumbprintSha256: f.EMPTY_STRING,
    privateKey: f.EMPTY_STRING,
    x5c: f.EMPTY_STRING
  },
  knownAuthorities: [],
  cloudDiscoveryMetadata: f.EMPTY_STRING,
  authorityMetadata: f.EMPTY_STRING,
  clientCapabilities: [],
  protocolMode: Ae.AAD,
  azureCloudOptions: {
    azureCloudInstance: Ht.None,
    tenant: f.EMPTY_STRING
  },
  skipAuthorityMetadataCache: !1,
  encodeExtraQueryParams: !1
}, iy = {
  claimsBasedCachingEnabled: !1
}, ec = {
  loggerCallback: () => {},
  piiLoggingEnabled: !1,
  logLevel: G.Info
}, sy = {
  loggerOptions: ec,
  networkClient: new _o,
  proxyUrl: f.EMPTY_STRING,
  customAgentOptions: {},
  disableInternalRetries: !1
}, ay = {
  application: {
    appName: f.EMPTY_STRING,
    appVersion: f.EMPTY_STRING
  }
};

function bh({auth: e, broker: t, cache: r, system: n, telemetry: o}) {
  let i = {
    ...sy,
    networkClient: new _o(n?.proxyUrl, n?.customAgentOptions),
    loggerOptions: n?.loggerOptions || ec,
    disableInternalRetries: n?.disableInternalRetries || !1
  };
  if (!!e.clientCertificate && !e.clientCertificate.thumbprint && !e.clientCertificate.thumbprintSha256) throw te.createStateNotFoundError();
  return {
    auth: {
      ...oy,
      ...e
    },
    broker: {
      ...t
    },
    cache: {
      ...iy,
      ...r
    },
    system: {
      ...i,
      ...n
    },
    telemetry: {
      ...ay,
      ...o
    }
  };
}

function Ph({clientCapabilities: e, managedIdentityIdParams: t, system: r}) {
  let n = new Za(t), o = r?.loggerOptions || ec, i;
  if (r?.networkClient) i = r.networkClient; else i = new _o(r?.proxyUrl, r?.customAgentOptions);
  return {
    clientCapabilities: e || [],
    managedIdentityId: n,
    system: {
      loggerOptions: o,
      networkClient: i
    },
    disableInternalRetries: r?.disableInternalRetries || !1
  };
}

import { randomUUID as cy } from "crypto";

var tc = {
  randomUUID: cy
};

import { randomFillSync as ly } from "crypto";

var ss = new Uint8Array(256), is = ss.length;

function rc() {
  if (is > ss.length - 16) ly(ss), is = 0;
  return ss.slice(is, is += 16);
}

var ge = [];

for (let e = 0; e < 256; ++e) ge.push((e + 256).toString(16).slice(1));

function Oh(e, t = 0) {
  return (ge[e[t + 0]] + ge[e[t + 1]] + ge[e[t + 2]] + ge[e[t + 3]] + "-" + ge[e[t + 4]] + ge[e[t + 5]] + "-" + ge[e[t + 6]] + ge[e[t + 7]] + "-" + ge[e[t + 8]] + ge[e[t + 9]] + "-" + ge[e[t + 10]] + ge[e[t + 11]] + ge[e[t + 12]] + ge[e[t + 13]] + ge[e[t + 14]] + ge[e[t + 15]]).toLowerCase();
}

function dy(e, t, r) {
  if (tc.randomUUID && !t && !e) return tc.randomUUID();
  e = e || {};
  let n = e.random ?? e.rng?.() ?? rc();
  if (n.length < 16) throw Error("Random bytes length must be >= 16");
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    if (r = r || 0, r < 0 || r + 16 > t.length) throw RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
    for (let o = 0; o < 16; ++o) t[r + o] = n[o];
    return t;
  }
  return Oh(n);
}

var nc = dy;

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Ro {
  generateGuid() {
    return nc();
  }
  isGuid(e) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e);
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Me {
  static base64Encode(e, t) {
    return Buffer.from(e, t).toString(me.BASE64);
  }
  static base64EncodeUrl(e, t) {
    return Me.base64Encode(e, t).replace(/=/g, f.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
  }
  static base64Decode(e) {
    return Buffer.from(e, me.BASE64).toString("utf8");
  }
  static base64DecodeUrl(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    while (t.length % 4) t += "=";
    return Me.base64Decode(t);
  }
}

import uy from "crypto";

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class kr {
  sha256(e) {
    return uy.createHash(Ch.SHA256).update(e).digest();
  }
}

import hy from "crypto";

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class oc {
  constructor() {
    this.hashUtils = new kr;
  }
  async generatePkceCodes() {
    let e = this.generateCodeVerifier(), t = this.generateCodeChallengeFromVerifier(e);
    return {
      verifier: e,
      challenge: t
    };
  }
  generateCodeVerifier() {
    let e = [], t = 256 - 256 % Yi.CV_CHARSET.length;
    while (e.length <= Eh) {
      let n = hy.randomBytes(1)[0];
      if (n >= t) continue;
      let o = n % Yi.CV_CHARSET.length;
      e.push(Yi.CV_CHARSET[o]);
    }
    let r = e.join(f.EMPTY_STRING);
    return Me.base64EncodeUrl(r);
  }
  generateCodeChallengeFromVerifier(e) {
    return Me.base64EncodeUrl(this.hashUtils.sha256(e).toString(me.BASE64), me.BASE64);
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Wt {
  constructor() {
    this.pkceGenerator = new oc, this.guidGenerator = new Ro, this.hashUtils = new kr;
  }
  base64UrlEncode() {
    throw Error("Method not implemented.");
  }
  encodeKid() {
    throw Error("Method not implemented.");
  }
  createNewGuid() {
    return this.guidGenerator.generateGuid();
  }
  base64Encode(e) {
    return Me.base64Encode(e);
  }
  base64Decode(e) {
    return Me.base64Decode(e);
  }
  generatePkceCodes() {
    return this.pkceGenerator.generatePkceCodes();
  }
  getPublicKeyThumbprint() {
    throw Error("Method not implemented.");
  }
  removeTokenBindingKey() {
    throw Error("Method not implemented.");
  }
  clearKeystore() {
    throw Error("Method not implemented.");
  }
  signJwt() {
    throw Error("Method not implemented.");
  }
  async hashString(e) {
    return Me.base64EncodeUrl(this.hashUtils.sha256(e).toString(me.BASE64), me.BASE64);
  }
}

 /*! @azure/msal-common v15.13.1 2025-10-29 */ /*! @azure/msal-node v3.8.1 2025-10-29 */ function Nh(e) {
  let t = e.credentialType === K.REFRESH_TOKEN && e.familyId || e.clientId, r = e.tokenType && e.tokenType.toLowerCase() !== L.BEARER.toLowerCase() ? e.tokenType.toLowerCase() : "";
  return [ e.homeAccountId, e.environment, e.credentialType, t, e.realm || "", e.target || "", e.requestedClaimsHash || "", r ].join(Qa.KEY_SEPARATOR).toLowerCase();
}

function xh(e) {
  let t = e.homeAccountId.split(".")[1];
  return [ e.homeAccountId, e.environment, t || e.tenantId || "" ].join(Qa.KEY_SEPARATOR).toLowerCase();
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class br extends yr {
  constructor(e, t, r, n) {
    super(t, r, e, new bn, n);
    this.cache = {}, this.changeEmitters = [], this.logger = e;
  }
  registerChangeEmitter(e) {
    this.changeEmitters.push(e);
  }
  emitChange() {
    this.changeEmitters.forEach(e => e.call(null));
  }
  cacheToInMemoryCache(e) {
    let t = {
      accounts: {},
      idTokens: {},
      accessTokens: {},
      refreshTokens: {},
      appMetadata: {}
    };
    for (let r in e) {
      let n = e[r];
      if (typeof n !== "object") continue;
      if (n instanceof fe) t.accounts[r] = n; else if (th(n)) t.idTokens[r] = n; else if (eh(n)) t.accessTokens[r] = n; else if (rh(n)) t.refreshTokens[r] = n; else if (nh(r, n)) t.appMetadata[r] = n; else continue;
    }
    return t;
  }
  inMemoryCacheToCache(e) {
    let t = this.getCache();
    return t = {
      ...t,
      ...e.accounts,
      ...e.idTokens,
      ...e.accessTokens,
      ...e.refreshTokens,
      ...e.appMetadata
    }, t;
  }
  getInMemoryCache() {
    return this.logger.trace("Getting in-memory cache"), this.cacheToInMemoryCache(this.getCache());
  }
  setInMemoryCache(e) {
    this.logger.trace("Setting in-memory cache");
    let t = this.inMemoryCacheToCache(e);
    this.setCache(t), this.emitChange();
  }
  getCache() {
    return this.logger.trace("Getting cache key-value store"), this.cache;
  }
  setCache(e) {
    this.logger.trace("Setting cache key value store"), this.cache = e, this.emitChange();
  }
  getItem(e) {
    return this.logger.tracePii(`Item key: ${e}`), this.getCache()[e];
  }
  setItem(e, t) {
    this.logger.tracePii(`Item key: ${e}`);
    let r = this.getCache();
    r[e] = t, this.setCache(r);
  }
  generateCredentialKey(e) {
    return Nh(e);
  }
  generateAccountKey(e) {
    return xh(e);
  }
  getAccountKeys() {
    let e = this.getInMemoryCache();
    return Object.keys(e.accounts);
  }
  getTokenKeys() {
    let e = this.getInMemoryCache();
    return {
      idToken: Object.keys(e.idTokens),
      accessToken: Object.keys(e.accessTokens),
      refreshToken: Object.keys(e.refreshTokens)
    };
  }
  getAccount(e) {
    return this.getItem(e) ? Object.assign(new fe, this.getItem(e)) : null;
  }
  async setAccount(e) {
    let t = this.generateAccountKey(fe.getAccountInfo(e));
    this.setItem(t, e);
  }
  getIdTokenCredential(e) {
    let t = this.getItem(e);
    if (th(t)) return t;
    return null;
  }
  async setIdTokenCredential(e) {
    let t = this.generateCredentialKey(e);
    this.setItem(t, e);
  }
  getAccessTokenCredential(e) {
    let t = this.getItem(e);
    if (eh(t)) return t;
    return null;
  }
  async setAccessTokenCredential(e) {
    let t = this.generateCredentialKey(e);
    this.setItem(t, e);
  }
  getRefreshTokenCredential(e) {
    let t = this.getItem(e);
    if (rh(t)) return t;
    return null;
  }
  async setRefreshTokenCredential(e) {
    let t = this.generateCredentialKey(e);
    this.setItem(t, e);
  }
  getAppMetadata(e) {
    let t = this.getItem(e);
    if (nh(e, t)) return t;
    return null;
  }
  setAppMetadata(e) {
    let t = Ug(e);
    this.setItem(t, e);
  }
  getServerTelemetry(e) {
    let t = this.getItem(e);
    if (t && Mg(e, t)) return t;
    return null;
  }
  setServerTelemetry(e, t) {
    this.setItem(e, t);
  }
  getAuthorityMetadata(e) {
    let t = this.getItem(e);
    if (t && Lg(e, t)) return t;
    return null;
  }
  getAuthorityMetadataKeys() {
    return this.getKeys().filter(e => this.isAuthorityMetadata(e));
  }
  setAuthorityMetadata(e, t) {
    this.setItem(e, t);
  }
  getThrottlingCache(e) {
    let t = this.getItem(e);
    if (t && Dg(e, t)) return t;
    return null;
  }
  setThrottlingCache(e, t) {
    this.setItem(e, t);
  }
  removeItem(e) {
    this.logger.tracePii(`Item key: ${e}`);
    let t = !1, r = this.getCache();
    if (r[e]) delete r[e], t = !0;
    if (t) this.setCache(r), this.emitChange();
    return t;
  }
  removeOutdatedAccount(e) {
    this.removeItem(e);
  }
  containsKey(e) {
    return this.getKeys().includes(e);
  }
  getKeys() {
    this.logger.trace("Retrieving all cache keys");
    let e = this.getCache();
    return [ ...Object.keys(e) ];
  }
  clear() {
    this.logger.trace("Clearing cache entries created by MSAL"), this.getKeys().forEach(t => {
      this.removeItem(t);
    }), this.emitChange();
  }
  static generateInMemoryCache(e) {
    return wr.deserializeAllCache(wr.deserializeJSONBlob(e));
  }
  static generateJsonCache(e) {
    return Jr.serializeAllCache(e);
  }
  updateCredentialCacheKey(e, t) {
    let r = this.generateCredentialKey(t);
    if (e !== r) {
      let n = this.getItem(e);
      if (n) return this.removeItem(e), this.setItem(r, n), this.logger.verbose(`Updated an outdated ${t.credentialType} cache key`), 
      r; else this.logger.error(`Attempted to update an outdated ${t.credentialType} cache key but no item matching the outdated key was found in storage`);
    }
    return e;
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var wo = {
  Account: {},
  IdToken: {},
  AccessToken: {},
  RefreshToken: {},
  AppMetadata: {}
};

class as {
  constructor(e, t, r) {
    if (this.cacheHasChanged = !1, this.storage = e, this.storage.registerChangeEmitter(this.handleChangeEvent.bind(this)), 
    r) this.persistence = r;
    this.logger = t;
  }
  hasChanged() {
    return this.cacheHasChanged;
  }
  serialize() {
    this.logger.trace("Serializing in-memory cache");
    let e = Jr.serializeAllCache(this.storage.getInMemoryCache());
    if (this.cacheSnapshot) this.logger.trace("Reading cache snapshot from disk"), e = this.mergeState(JSON.parse(this.cacheSnapshot), e); else this.logger.trace("No cache snapshot to merge");
    return this.cacheHasChanged = !1, JSON.stringify(e);
  }
  deserialize(e) {
    if (this.logger.trace("Deserializing JSON to in-memory cache"), this.cacheSnapshot = e, 
    this.cacheSnapshot) {
      this.logger.trace("Reading cache snapshot from disk");
      let t = wr.deserializeAllCache(this.overlayDefaults(JSON.parse(this.cacheSnapshot)));
      this.storage.setInMemoryCache(t);
    } else this.logger.trace("No cache snapshot to deserialize");
  }
  getKVStore() {
    return this.storage.getCache();
  }
  getCacheSnapshot() {
    let e = br.generateInMemoryCache(this.cacheSnapshot);
    return this.storage.inMemoryCacheToCache(e);
  }
  async getAllAccounts(e = (new Wt).createNewGuid()) {
    this.logger.trace("getAllAccounts called");
    let t;
    try {
      if (this.persistence) t = new Xe(this, !1), await this.persistence.beforeCacheAccess(t);
      return this.storage.getAllAccounts({}, e);
    } finally {
      if (this.persistence && t) await this.persistence.afterCacheAccess(t);
    }
  }
  async getAccountByHomeId(e) {
    let t = await this.getAllAccounts();
    if (e && t && t.length) return t.filter(r => r.homeAccountId === e)[0] || null; else return null;
  }
  async getAccountByLocalId(e) {
    let t = await this.getAllAccounts();
    if (e && t && t.length) return t.filter(r => r.localAccountId === e)[0] || null; else return null;
  }
  async removeAccount(e, t) {
    this.logger.trace("removeAccount called");
    let r;
    try {
      if (this.persistence) r = new Xe(this, !0), await this.persistence.beforeCacheAccess(r);
      this.storage.removeAccount(e, t || (new Ro).generateGuid());
    } finally {
      if (this.persistence && r) await this.persistence.afterCacheAccess(r);
    }
  }
  async overwriteCache() {
    if (!this.persistence) {
      this.logger.info("No persistence layer specified, cache cannot be overwritten");
      return;
    }
    this.logger.info("Overwriting in-memory cache with persistent cache"), this.storage.clear();
    let e = new Xe(this, !1);
    await this.persistence.beforeCacheAccess(e);
    let t = this.getCacheSnapshot();
    this.storage.setCache(t), await this.persistence.afterCacheAccess(e);
  }
  handleChangeEvent() {
    this.cacheHasChanged = !0;
  }
  mergeState(e, t) {
    this.logger.trace("Merging in-memory cache with cache snapshot");
    let r = this.mergeRemovals(e, t);
    return this.mergeUpdates(r, t);
  }
  mergeUpdates(e, t) {
    return Object.keys(t).forEach(r => {
      let n = t[r];
      if (!e.hasOwnProperty(r)) {
        if (n !== null) e[r] = n;
      } else {
        let o = n !== null, i = typeof n === "object", s = !Array.isArray(n), a = typeof e[r] < "u" && e[r] !== null;
        if (o && i && s && a) this.mergeUpdates(e[r], n); else e[r] = n;
      }
    }), e;
  }
  mergeRemovals(e, t) {
    this.logger.trace("Remove updated entries in cache");
    let r = e.Account ? this.mergeRemovalsDict(e.Account, t.Account) : e.Account, n = e.AccessToken ? this.mergeRemovalsDict(e.AccessToken, t.AccessToken) : e.AccessToken, o = e.RefreshToken ? this.mergeRemovalsDict(e.RefreshToken, t.RefreshToken) : e.RefreshToken, i = e.IdToken ? this.mergeRemovalsDict(e.IdToken, t.IdToken) : e.IdToken, s = e.AppMetadata ? this.mergeRemovalsDict(e.AppMetadata, t.AppMetadata) : e.AppMetadata;
    return {
      ...e,
      Account: r,
      AccessToken: n,
      RefreshToken: o,
      IdToken: i,
      AppMetadata: s
    };
  }
  mergeRemovalsDict(e, t) {
    let r = {
      ...e
    };
    return Object.keys(e).forEach(n => {
      if (!t || !t.hasOwnProperty(n)) delete r[n];
    }), r;
  }
  overlayDefaults(e) {
    return this.logger.trace("Overlaying input cache with the default cache"), {
      Account: {
        ...wo.Account,
        ...e.Account
      },
      IdToken: {
        ...wo.IdToken,
        ...e.IdToken
      },
      AccessToken: {
        ...wo.AccessToken,
        ...e.AccessToken
      },
      RefreshToken: {
        ...wo.RefreshToken,
        ...e.RefreshToken
      },
      AppMetadata: {
        ...wo.AppMetadata,
        ...e.AppMetadata
      }
    };
  }
}

var Lf = we(Uf(), 1);

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class ct {
  static fromAssertion(e) {
    let t = new ct;
    return t.jwt = e, t;
  }
  static fromCertificate(e, t, r) {
    let n = new ct;
    if (n.privateKey = t, n.thumbprint = e, n.useSha256 = !1, r) n.publicCertificate = this.parseCertificate(r);
    return n;
  }
  static fromCertificateWithSha256Thumbprint(e, t, r) {
    let n = new ct;
    if (n.privateKey = t, n.thumbprint = e, n.useSha256 = !0, r) n.publicCertificate = this.parseCertificate(r);
    return n;
  }
  getJwt(e, t, r) {
    if (this.privateKey && this.thumbprint) {
      if (this.jwt && !this.isExpired() && t === this.issuer && r === this.jwtAudience) return this.jwt;
      return this.createJwt(e, t, r);
    }
    if (this.jwt) return this.jwt;
    throw g(uo);
  }
  createJwt(e, t, r) {
    this.issuer = t, this.jwtAudience = r;
    let n = Q();
    this.expirationTime = n + 600;
    let i = {
      alg: this.useSha256 ? Ke.PSS_256 : Ke.RSA_256
    }, s = this.useSha256 ? Ke.X5T_256 : Ke.X5T;
    if (Object.assign(i, {
      [s]: Me.base64EncodeUrl(this.thumbprint, me.HEX)
    }), this.publicCertificate) Object.assign(i, {
      [Ke.X5C]: this.publicCertificate
    });
    let a = {
      [Ke.AUDIENCE]: this.jwtAudience,
      [Ke.EXPIRATION_TIME]: this.expirationTime,
      [Ke.ISSUER]: this.issuer,
      [Ke.SUBJECT]: this.issuer,
      [Ke.NOT_BEFORE]: n,
      [Ke.JWT_ID]: e.createNewGuid()
    };
    return this.jwt = Lf.default.sign(a, this.privateKey, {
      header: i
    }), this.jwt;
  }
  isExpired() {
    return this.expirationTime < Q();
  }
  static parseCertificate(e) {
    let t = /-----BEGIN CERTIFICATE-----\r*\n(.+?)\r*\n-----END CERTIFICATE-----/gs, r = [], n;
    while ((n = t.exec(e)) !== null) r.push(n[1].replace(/\r*\n/g, f.EMPTY_STRING));
    return r;
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var ps = "@azure/msal-node", lt = "3.8.1";

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class gs extends Te {
  constructor(e) {
    super(e);
  }
  async acquireToken(e) {
    this.logger.info("in acquireToken call in username-password client");
    let t = Q(), r = await this.executeTokenRequest(this.authority, e), n = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return n.validateTokenResponse(r.body), n.handleServerTokenResponse(r.body, this.authority, t, e);
  }
  async executeTokenRequest(e, t) {
    let r = this.createTokenQueryParameters(t), n = x.appendQueryString(e.tokenEndpoint, r), o = await this.createTokenRequestBody(t), i = this.createTokenRequestHeaders({
      credential: t.username,
      type: Ie.UPN
    }), s = {
      clientId: this.config.authOptions.clientId,
      authority: e.canonicalAuthority,
      scopes: t.scopes,
      claims: t.claims,
      authenticationScheme: t.authenticationScheme,
      resourceRequestMethod: t.resourceRequestMethod,
      resourceRequestUri: t.resourceRequestUri,
      shrClaims: t.shrClaims,
      sshKid: t.sshKid
    };
    return this.executePostToTokenEndpoint(n, o, i, s, t.correlationId);
  }
  async createTokenRequestBody(e) {
    let t = new Map;
    if (Qe(t, this.config.authOptions.clientId), Og(t, e.username), Ng(t, e.password), 
    We(t, e.scopes), Du(t, Xr.IDTOKEN_TOKEN), zt(t, Pe.RESOURCE_OWNER_PASSWORD_GRANT), 
    At(t), Et(t, this.config.libraryInfo), Ct(t, this.config.telemetry.application), 
    qt(t), this.serverTelemetryManager) Gt(t, this.serverTelemetryManager);
    let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (at(t, r), this.config.clientCredentials.clientSecret) Tr(t, this.config.clientCredentials.clientSecret);
    let n = this.config.clientCredentials.clientAssertion;
    if (n) Er(t, await _e(n.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), 
    Cr(t, n.assertionType);
    if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Je(t, e.claims, this.config.authOptions.clientCapabilities);
    if (this.config.systemOptions.preventCorsPreflight && e.username) $t(t, e.username);
    return pe(t);
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ function Hf(e, t, r, n) {
  let o = Gg({
    ...e.auth,
    authority: t,
    redirectUri: r.redirectUri || ""
  }, r, n);
  if (Et(o, {
    sku: Se.MSAL_SKU,
    version: lt,
    cpu: "x64",
    os: "linux"
  }), e.auth.protocolMode !== Ae.OIDC) Ct(o, e.telemetry.application);
  if (Du(o, Xr.CODE), r.codeChallenge && r.codeChallengeMethod) wg(o, r.codeChallenge, r.codeChallengeMethod);
  return He(o, r.extraQueryParameters || {}), qg(t, o, e.auth.encodeExtraQueryParams, r.extraQueryParameters);
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Mn {
  constructor(e) {
    this.config = bh(e), this.cryptoProvider = new Wt, this.logger = new Le(this.config.system.loggerOptions, ps, lt), 
    this.storage = new br(this.logger, this.config.auth.clientId, this.cryptoProvider, Ka(this.config.auth)), 
    this.tokenCache = new as(this.storage, this.logger, this.config.cache.cachePlugin);
  }
  async getAuthCodeUrl(e) {
    this.logger.info("getAuthCodeUrl called", e.correlationId);
    let t = {
      ...e,
      ...await this.initializeBaseRequest(e),
      responseMode: e.responseMode || mt.QUERY,
      authenticationScheme: L.BEARER,
      state: e.state || "",
      nonce: e.nonce || ""
    }, r = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions);
    return Hf(this.config, r, t, this.logger);
  }
  async acquireTokenByCode(e, t) {
    if (this.logger.info("acquireTokenByCode called"), e.state && t) this.logger.info("acquireTokenByCode - validating state"), 
    this.validateState(e.state, t.state || ""), t = {
      ...t,
      state: ""
    };
    let r = {
      ...e,
      ...await this.initializeBaseRequest(e),
      authenticationScheme: L.BEARER
    }, n = this.initializeServerTelemetryManager(St.acquireTokenByCode, r.correlationId);
    try {
      let o = await this.createAuthority(r.authority, r.correlationId, void 0, e.azureCloudOptions), i = await this.buildOauthClientConfiguration(o, r.correlationId, r.redirectUri, n), s = new Ki(i);
      return this.logger.verbose("Auth code client created", r.correlationId), await s.acquireToken(r, t);
    } catch (o) {
      if (o instanceof N) o.setCorrelationId(r.correlationId);
      throw n.cacheFailedRequest(o), o;
    }
  }
  async acquireTokenByRefreshToken(e) {
    this.logger.info("acquireTokenByRefreshToken called", e.correlationId);
    let t = {
      ...e,
      ...await this.initializeBaseRequest(e),
      authenticationScheme: L.BEARER
    }, r = this.initializeServerTelemetryManager(St.acquireTokenByRefreshToken, t.correlationId);
    try {
      let n = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions), o = await this.buildOauthClientConfiguration(n, t.correlationId, t.redirectUri || "", r), i = new xn(o);
      return this.logger.verbose("Refresh token client created", t.correlationId), await i.acquireToken(t);
    } catch (n) {
      if (n instanceof N) n.setCorrelationId(t.correlationId);
      throw r.cacheFailedRequest(n), n;
    }
  }
  async acquireTokenSilent(e) {
    let t = {
      ...e,
      ...await this.initializeBaseRequest(e),
      forceRefresh: e.forceRefresh || !1
    }, r = this.initializeServerTelemetryManager(St.acquireTokenSilent, t.correlationId, t.forceRefresh);
    try {
      let n = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions), o = await this.buildOauthClientConfiguration(n, t.correlationId, t.redirectUri || "", r), i = new Vi(o);
      this.logger.verbose("Silent flow client created", t.correlationId);
      try {
        return await this.tokenCache.overwriteCache(), await this.acquireCachedTokenSilent(t, i, o);
      } catch (s) {
        if (s instanceof hr && s.errorCode === Ye) return new xn(o).acquireTokenByRefreshToken(t);
        throw s;
      }
    } catch (n) {
      if (n instanceof N) n.setCorrelationId(t.correlationId);
      throw r.cacheFailedRequest(n), n;
    }
  }
  async acquireCachedTokenSilent(e, t, r) {
    let [n, o] = await t.acquireCachedToken({
      ...e,
      scopes: e.scopes?.length ? e.scopes : [ ...ye ]
    });
    if (o === j.PROACTIVELY_REFRESHED) {
      this.logger.info("ClientApplication:acquireCachedTokenSilent - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
      let i = new xn(r);
      try {
        await i.acquireTokenByRefreshToken(e);
      } catch {}
    }
    return n;
  }
  async acquireTokenByUsernamePassword(e) {
    this.logger.info("acquireTokenByUsernamePassword called", e.correlationId);
    let t = {
      ...e,
      ...await this.initializeBaseRequest(e)
    }, r = this.initializeServerTelemetryManager(St.acquireTokenByUsernamePassword, t.correlationId);
    try {
      let n = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions), o = await this.buildOauthClientConfiguration(n, t.correlationId, "", r), i = new gs(o);
      return this.logger.verbose("Username password client created", t.correlationId), 
      await i.acquireToken(t);
    } catch (n) {
      if (n instanceof N) n.setCorrelationId(t.correlationId);
      throw r.cacheFailedRequest(n), n;
    }
  }
  getTokenCache() {
    return this.logger.info("getTokenCache called"), this.tokenCache;
  }
  validateState(e, t) {
    if (!e) throw te.createStateNotFoundError();
    if (e !== t) throw g(so);
  }
  getLogger() {
    return this.logger;
  }
  setLogger(e) {
    this.logger = e;
  }
  async buildOauthClientConfiguration(e, t, r, n) {
    return this.logger.verbose("buildOauthClientConfiguration called", t), this.logger.info(`Building oauth client configuration with the following authority: ${e.tokenEndpoint}.`, t), 
    n?.updateRegionDiscoveryMetadata(e.regionDiscoveryMetadata), {
      authOptions: {
        clientId: this.config.auth.clientId,
        authority: e,
        clientCapabilities: this.config.auth.clientCapabilities,
        redirectUri: r
      },
      loggerOptions: {
        logLevel: this.config.system.loggerOptions.logLevel,
        loggerCallback: this.config.system.loggerOptions.loggerCallback,
        piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled,
        correlationId: t
      },
      cacheOptions: {
        claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled
      },
      cryptoInterface: this.cryptoProvider,
      networkInterface: this.config.system.networkClient,
      storageInterface: this.storage,
      serverTelemetryManager: n,
      clientCredentials: {
        clientSecret: this.clientSecret,
        clientAssertion: await this.getClientAssertion(e)
      },
      libraryInfo: {
        sku: Se.MSAL_SKU,
        version: lt,
        cpu: "x64",
        os: "linux"
      },
      telemetry: this.config.telemetry,
      persistencePlugin: this.config.cache.cachePlugin,
      serializableCache: this.tokenCache
    };
  }
  async getClientAssertion(e) {
    if (this.developerProvidedClientAssertion) this.clientAssertion = ct.fromAssertion(await _e(this.developerProvidedClientAssertion, this.config.auth.clientId, e.tokenEndpoint));
    return this.clientAssertion && {
      assertion: this.clientAssertion.getJwt(this.cryptoProvider, this.config.auth.clientId, e.tokenEndpoint),
      assertionType: Se.JWT_BEARER_ASSERTION_TYPE
    };
  }
  async initializeBaseRequest(e) {
    if (this.logger.verbose("initializeRequestScopes called", e.correlationId), e.authenticationScheme && e.authenticationScheme === L.POP) this.logger.verbose("Authentication Scheme 'pop' is not supported yet, setting Authentication Scheme to 'Bearer' for request", e.correlationId);
    if (e.authenticationScheme = L.BEARER, this.config.cache.claimsBasedCachingEnabled && e.claims && !re.isEmptyObj(e.claims)) e.requestedClaimsHash = await this.cryptoProvider.hashString(e.claims);
    return {
      ...e,
      scopes: [ ...e && e.scopes || [], ...ye ],
      correlationId: e && e.correlationId || this.cryptoProvider.createNewGuid(),
      authority: e.authority || this.config.auth.authority
    };
  }
  initializeServerTelemetryManager(e, t, r) {
    let n = {
      clientId: this.config.auth.clientId,
      correlationId: t,
      apiId: e,
      forceRefresh: r || !1
    };
    return new jt(n, this.storage);
  }
  async createAuthority(e, t, r, n) {
    this.logger.verbose("createAuthority called", t);
    let o = ue.generateAuthority(e, n || this.config.auth.azureCloudOptions), i = {
      protocolMode: this.config.auth.protocolMode,
      knownAuthorities: this.config.auth.knownAuthorities,
      cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
      authorityMetadata: this.config.auth.authorityMetadata,
      azureRegionConfiguration: r,
      skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
    };
    return Va(o, this.config.system.networkClient, this.storage, i, this.logger, t);
  }
  clearCache() {
    this.storage.clear();
  }
}

import PE from "http";

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Tc {
  async listenForAuthCode(e, t) {
    if (this.server) throw te.createLoopbackServerAlreadyExistsError();
    return new Promise((r, n) => {
      this.server = PE.createServer((o, i) => {
        let s = o.url;
        if (!s) {
          i.end(t || "Error occurred loading redirectUrl"), n(te.createUnableToLoadRedirectUrlError());
          return;
        } else if (s === f.FORWARD_SLASH) {
          i.end(e || "Auth code was successfully acquired. You can close this window now.");
          return;
        }
        let a = this.getRedirectUri(), c = new URL(s, a), l = ka(c.search) || {};
        if (l.code) i.writeHead(P.REDIRECT, {
          location: a
        }), i.end();
        if (l.error) i.end(t || `Error occurred: ${l.error}`);
        r(l);
      }), this.server.listen(0, "127.0.0.1");
    });
  }
  getRedirectUri() {
    if (!this.server || !this.server.listening) throw te.createNoLoopbackServerExistsError();
    let e = this.server.address();
    if (!e || typeof e === "string" || !e.port) throw this.closeServer(), te.createInvalidLoopbackAddressTypeError();
    let t = e && e.port;
    return `${Se.HTTP_PROTOCOL}${Se.LOCALHOST}:${t}`;
  }
  closeServer() {
    if (this.server) {
      if (this.server.close(), typeof this.server.closeAllConnections === "function") this.server.closeAllConnections();
      this.server.unref(), this.server = void 0;
    }
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class ys extends Te {
  constructor(e) {
    super(e);
  }
  async acquireToken(e) {
    let t = await this.getDeviceCode(e);
    e.deviceCodeCallback(t);
    let r = Q(), n = await this.acquireTokenWithDeviceCode(e, t), o = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return o.validateTokenResponse(n), o.handleServerTokenResponse(n, this.authority, r, e);
  }
  async getDeviceCode(e) {
    let t = this.createExtraQueryParameters(e), r = x.appendQueryString(this.authority.deviceCodeEndpoint, t), n = this.createQueryString(e), o = this.createTokenRequestHeaders(), i = {
      clientId: this.config.authOptions.clientId,
      authority: e.authority,
      scopes: e.scopes,
      claims: e.claims,
      authenticationScheme: e.authenticationScheme,
      resourceRequestMethod: e.resourceRequestMethod,
      resourceRequestUri: e.resourceRequestUri,
      shrClaims: e.shrClaims,
      sshKid: e.sshKid
    };
    return this.executePostRequestToDeviceCodeEndpoint(r, n, o, i, e.correlationId);
  }
  createExtraQueryParameters(e) {
    let t = new Map;
    if (e.extraQueryParameters) He(t, e.extraQueryParameters);
    return pe(t);
  }
  async executePostRequestToDeviceCodeEndpoint(e, t, r, n, o) {
    let {body: {user_code: i, device_code: s, verification_uri: a, expires_in: c, interval: l, message: d}} = await this.sendPostRequest(n, e, {
      body: t,
      headers: r
    }, o);
    return {
      userCode: i,
      deviceCode: s,
      verificationUri: a,
      expiresIn: c,
      interval: l,
      message: d
    };
  }
  createQueryString(e) {
    let t = new Map;
    if (We(t, e.scopes), Qe(t, this.config.authOptions.clientId), e.extraQueryParameters) He(t, e.extraQueryParameters);
    if (e.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Je(t, e.claims, this.config.authOptions.clientCapabilities);
    return pe(t);
  }
  continuePolling(e, t, r) {
    if (r) throw this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true"), 
    g(ao); else if (t && t < e && Q() > t) throw this.logger.error(`User defined timeout for device code polling reached. The timeout was set for ${t}`), 
    g(ho); else if (Q() > e) {
      if (t) this.logger.verbose(`User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for ${t}`);
      throw this.logger.error(`Device code expired. Expiration time of device code was ${e}`), 
      g(co);
    }
    return !0;
  }
  async acquireTokenWithDeviceCode(e, t) {
    let r = this.createTokenQueryParameters(e), n = x.appendQueryString(this.authority.tokenEndpoint, r), o = this.createTokenRequestBody(e, t), i = this.createTokenRequestHeaders(), s = e.timeout ? Q() + e.timeout : void 0, a = Q() + t.expiresIn, c = t.interval * 1e3;
    while (this.continuePolling(a, s, e.cancel)) {
      let l = {
        clientId: this.config.authOptions.clientId,
        authority: e.authority,
        scopes: e.scopes,
        claims: e.claims,
        authenticationScheme: e.authenticationScheme,
        resourceRequestMethod: e.resourceRequestMethod,
        resourceRequestUri: e.resourceRequestUri,
        shrClaims: e.shrClaims,
        sshKid: e.sshKid
      }, d = await this.executePostToTokenEndpoint(n, o, i, l, e.correlationId);
      if (d.body && d.body.error) if (d.body.error === f.AUTHORIZATION_PENDING) this.logger.info("Authorization pending. Continue polling."), 
      await xg(c); else throw this.logger.info("Unexpected error in polling from the server"), 
      wa(io, d.body.error); else return this.logger.verbose("Authorization completed successfully. Polling stopped."), 
      d.body;
    }
    throw this.logger.error("Polling stopped for unknown reasons."), g(lo);
  }
  createTokenRequestBody(e, t) {
    let r = new Map;
    We(r, e.scopes), Qe(r, this.config.authOptions.clientId), zt(r, Pe.DEVICE_CODE_GRANT), 
    vg(r, t.deviceCode);
    let n = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (at(r, n), At(r), Et(r, this.config.libraryInfo), Ct(r, this.config.telemetry.application), 
    qt(r), this.serverTelemetryManager) Gt(r, this.serverTelemetryManager);
    if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Je(r, e.claims, this.config.authOptions.clientCapabilities);
    return pe(r);
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Ts extends Mn {
  constructor(e) {
    super(e);
    if (this.config.broker.nativeBrokerPlugin) if (this.config.broker.nativeBrokerPlugin.isBrokerAvailable) this.nativeBrokerPlugin = this.config.broker.nativeBrokerPlugin, 
    this.nativeBrokerPlugin.setLogger(this.config.system.loggerOptions); else this.logger.warning("NativeBroker implementation was provided but the broker is unavailable.");
    this.skus = jt.makeExtraSkuString({
      libraryName: Se.MSAL_SKU,
      libraryVersion: lt
    });
  }
  async acquireTokenByDeviceCode(e) {
    this.logger.info("acquireTokenByDeviceCode called", e.correlationId);
    let t = Object.assign(e, await this.initializeBaseRequest(e)), r = this.initializeServerTelemetryManager(St.acquireTokenByDeviceCode, t.correlationId);
    try {
      let n = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions), o = await this.buildOauthClientConfiguration(n, t.correlationId, "", r), i = new ys(o);
      return this.logger.verbose("Device code client created", t.correlationId), await i.acquireToken(t);
    } catch (n) {
      if (n instanceof N) n.setCorrelationId(t.correlationId);
      throw r.cacheFailedRequest(n), n;
    }
  }
  async acquireTokenInteractive(e) {
    let t = e.correlationId || this.cryptoProvider.createNewGuid();
    this.logger.trace("acquireTokenInteractive called", t);
    let {openBrowser: r, successTemplate: n, errorTemplate: o, windowHandle: i, loopbackClient: s, ...a} = e;
    if (this.nativeBrokerPlugin) {
      let p = {
        ...a,
        clientId: this.config.auth.clientId,
        scopes: e.scopes || ye,
        redirectUri: e.redirectUri || "",
        authority: e.authority || this.config.auth.authority,
        correlationId: t,
        extraParameters: {
          ...a.extraQueryParameters,
          ...a.tokenQueryParameters,
          [Mu]: this.skus
        },
        accountId: a.account?.nativeAccountId
      };
      return this.nativeBrokerPlugin.acquireTokenInteractive(p, i);
    }
    if (e.redirectUri) {
      if (!this.config.broker.nativeBrokerPlugin) throw te.createRedirectUriNotSupportedError();
      e.redirectUri = "";
    }
    let {verifier: c, challenge: l} = await this.cryptoProvider.generatePkceCodes(), d = s || new Tc, u = {}, m = null;
    try {
      let p = d.listenForAuthCode(n, o).then(B => {
        u = B;
      }).catch(B => {
        m = B;
      }), y = await this.waitForRedirectUri(d), T = {
        ...a,
        correlationId: t,
        scopes: e.scopes || ye,
        redirectUri: y,
        responseMode: mt.QUERY,
        codeChallenge: l,
        codeChallengeMethod: ri.S256
      }, _ = await this.getAuthCodeUrl(T);
      if (await r(_), await p, m) throw m;
      if (u.error) throw new qe(u.error, u.error_description, u.suberror); else if (!u.code) throw te.createNoAuthCodeInResponseError();
      let k = u.client_info, U = {
        code: u.code,
        codeVerifier: c,
        clientInfo: k || f.EMPTY_STRING,
        ...T
      };
      return await this.acquireTokenByCode(U);
    } finally {
      d.closeServer();
    }
  }
  async acquireTokenSilent(e) {
    let t = e.correlationId || this.cryptoProvider.createNewGuid();
    if (this.logger.trace("acquireTokenSilent called", t), this.nativeBrokerPlugin) {
      let r = {
        ...e,
        clientId: this.config.auth.clientId,
        scopes: e.scopes || ye,
        redirectUri: e.redirectUri || "",
        authority: e.authority || this.config.auth.authority,
        correlationId: t,
        extraParameters: {
          ...e.tokenQueryParameters,
          [Mu]: this.skus
        },
        accountId: e.account.nativeAccountId,
        forceRefresh: e.forceRefresh || !1
      };
      return this.nativeBrokerPlugin.acquireTokenSilent(r);
    }
    if (e.redirectUri) {
      if (!this.config.broker.nativeBrokerPlugin) throw te.createRedirectUriNotSupportedError();
      e.redirectUri = "";
    }
    return super.acquireTokenSilent(e);
  }
  async signOut(e) {
    if (this.nativeBrokerPlugin && e.account.nativeAccountId) {
      let t = {
        clientId: this.config.auth.clientId,
        accountId: e.account.nativeAccountId,
        correlationId: e.correlationId || this.cryptoProvider.createNewGuid()
      };
      await this.nativeBrokerPlugin.signOut(t);
    }
    await this.getTokenCache().removeAccount(e.account, e.correlationId);
  }
  async getAllAccounts() {
    if (this.nativeBrokerPlugin) {
      let e = this.cryptoProvider.createNewGuid();
      return this.nativeBrokerPlugin.getAllAccounts(this.config.auth.clientId, e);
    }
    return this.getTokenCache().getAllAccounts();
  }
  async waitForRedirectUri(e) {
    return new Promise((t, r) => {
      let n = 0, o = setInterval(() => {
        if (Wi.TIMEOUT_MS / Wi.INTERVAL_MS < n) {
          clearInterval(o), r(te.createLoopbackServerTimeoutError());
          return;
        }
        try {
          let i = e.getRedirectUri();
          clearInterval(o), t(i);
          return;
        } catch (i) {
          if (i instanceof N && i.errorCode === le.noLoopbackServerExists.code) {
            n++;
            return;
          }
          clearInterval(o), r(i);
          return;
        }
      }, Wi.INTERVAL_MS);
    });
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Dn extends Te {
  constructor(e, t) {
    super(e);
    this.appTokenProvider = t;
  }
  async acquireToken(e) {
    if (e.skipCache || e.claims) return this.executeTokenRequest(e, this.authority);
    let [t, r] = await this.getCachedAuthenticationResult(e, this.config, this.cryptoUtils, this.authority, this.cacheManager, this.serverTelemetryManager);
    if (t) {
      if (r === j.PROACTIVELY_REFRESHED) {
        this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
        let n = !0;
        await this.executeTokenRequest(e, this.authority, n);
      }
      return t;
    } else return this.executeTokenRequest(e, this.authority);
  }
  async getCachedAuthenticationResult(e, t, r, n, o, i) {
    let s = t, a = t, c = j.NOT_APPLICABLE, l;
    if (s.serializableCache && s.persistencePlugin) l = new Xe(s.serializableCache, !1), 
    await s.persistencePlugin.beforeCacheAccess(l);
    let d = this.readAccessTokenFromCache(n, a.managedIdentityId?.id || s.authOptions.clientId, new oe(e.scopes || []), o, e.correlationId);
    if (s.serializableCache && s.persistencePlugin && l) await s.persistencePlugin.afterCacheAccess(l);
    if (!d) return i?.setCacheOutcome(j.NO_CACHED_ACCESS_TOKEN), [ null, j.NO_CACHED_ACCESS_TOKEN ];
    if (Vt(d.expiresOn, s.systemOptions?.tokenRenewalOffsetSeconds || en)) return i?.setCacheOutcome(j.CACHED_ACCESS_TOKEN_EXPIRED), 
    [ null, j.CACHED_ACCESS_TOKEN_EXPIRED ];
    if (d.refreshOn && Vt(d.refreshOn.toString(), 0)) c = j.PROACTIVELY_REFRESHED, i?.setCacheOutcome(j.PROACTIVELY_REFRESHED);
    return [ await ie.generateAuthenticationResult(r, n, {
      account: null,
      idToken: null,
      accessToken: d,
      refreshToken: null,
      appMetadata: null
    }, !0, e), c ];
  }
  readAccessTokenFromCache(e, t, r, n, o) {
    let i = {
      homeAccountId: f.EMPTY_STRING,
      environment: e.canonicalAuthorityUrlComponents.HostNameAndPort,
      credentialType: K.ACCESS_TOKEN,
      clientId: t,
      realm: e.tenant,
      target: oe.createSearchScopes(r.asArray())
    }, s = n.getAccessTokensByFilter(i, o);
    if (s.length < 1) return null; else if (s.length > 1) throw g(cn);
    return s[0];
  }
  async executeTokenRequest(e, t, r) {
    let n, o;
    if (this.appTokenProvider) {
      this.logger.info("Using appTokenProvider extensibility.");
      let a = {
        correlationId: e.correlationId,
        tenantId: this.config.authOptions.authority.tenant,
        scopes: e.scopes,
        claims: e.claims
      };
      o = Q();
      let c = await this.appTokenProvider(a);
      n = {
        access_token: c.accessToken,
        expires_in: c.expiresInSeconds,
        refresh_in: c.refreshInSeconds,
        token_type: L.BEARER
      };
    } else {
      let a = this.createTokenQueryParameters(e), c = x.appendQueryString(t.tokenEndpoint, a), l = await this.createTokenRequestBody(e), d = this.createTokenRequestHeaders(), u = {
        clientId: this.config.authOptions.clientId,
        authority: e.authority,
        scopes: e.scopes,
        claims: e.claims,
        authenticationScheme: e.authenticationScheme,
        resourceRequestMethod: e.resourceRequestMethod,
        resourceRequestUri: e.resourceRequestUri,
        shrClaims: e.shrClaims,
        sshKid: e.sshKid
      };
      this.logger.info("Sending token request to endpoint: " + t.tokenEndpoint), o = Q();
      let m = await this.executePostToTokenEndpoint(c, l, d, u, e.correlationId);
      n = m.body, n.status = m.status;
    }
    let i = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return i.validateTokenResponse(n, r), await i.handleServerTokenResponse(n, this.authority, o, e);
  }
  async createTokenRequestBody(e) {
    let t = new Map;
    if (Qe(t, this.config.authOptions.clientId), We(t, e.scopes, !1), zt(t, Pe.CLIENT_CREDENTIALS_GRANT), 
    Et(t, this.config.libraryInfo), Ct(t, this.config.telemetry.application), qt(t), 
    this.serverTelemetryManager) Gt(t, this.serverTelemetryManager);
    let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (at(t, r), this.config.clientCredentials.clientSecret) Tr(t, this.config.clientCredentials.clientSecret);
    let n = e.clientAssertion || this.config.clientCredentials.clientAssertion;
    if (n) Er(t, await _e(n.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), 
    Cr(t, n.assertionType);
    if (!re.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Je(t, e.claims, this.config.authOptions.clientCapabilities);
    return pe(t);
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Es extends Te {
  constructor(e) {
    super(e);
  }
  async acquireToken(e) {
    if (this.scopeSet = new oe(e.scopes || []), this.userAssertionHash = await this.cryptoUtils.hashString(e.oboAssertion), 
    e.skipCache || e.claims) return this.executeTokenRequest(e, this.authority, this.userAssertionHash);
    try {
      return await this.getCachedAuthenticationResult(e);
    } catch (t) {
      return await this.executeTokenRequest(e, this.authority, this.userAssertionHash);
    }
  }
  async getCachedAuthenticationResult(e) {
    let t = this.readAccessTokenFromCacheForOBO(this.config.authOptions.clientId, e);
    if (!t) throw this.serverTelemetryManager?.setCacheOutcome(j.NO_CACHED_ACCESS_TOKEN), 
    this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), 
    g(Ye); else if (Vt(t.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.serverTelemetryManager?.setCacheOutcome(j.CACHED_ACCESS_TOKEN_EXPIRED), 
    this.logger.info(`OnbehalfofFlow:getCachedAuthenticationResult - Cached access token is expired or will expire within ${this.config.systemOptions.tokenRenewalOffsetSeconds} seconds.`), 
    g(Ye);
    let r = this.readIdTokenFromCacheForOBO(t.homeAccountId, e.correlationId), n, o = null;
    if (r) {
      n = yt(r.secret, Me.base64Decode);
      let i = n.oid || n.sub, s = {
        homeAccountId: r.homeAccountId,
        environment: r.environment,
        tenantId: r.realm,
        username: f.EMPTY_STRING,
        localAccountId: i || f.EMPTY_STRING
      };
      o = this.cacheManager.getAccount(this.cacheManager.generateAccountKey(s), e.correlationId);
    }
    if (this.config.serverTelemetryManager) this.config.serverTelemetryManager.incrementCacheHits();
    return ie.generateAuthenticationResult(this.cryptoUtils, this.authority, {
      account: o,
      accessToken: t,
      idToken: r,
      refreshToken: null,
      appMetadata: null
    }, !0, e, n);
  }
  readIdTokenFromCacheForOBO(e, t) {
    let r = {
      homeAccountId: e,
      environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
      credentialType: K.ID_TOKEN,
      clientId: this.config.authOptions.clientId,
      realm: this.authority.tenant
    }, n = this.cacheManager.getIdTokensByFilter(r, t);
    if (Object.values(n).length < 1) return null;
    return Object.values(n)[0];
  }
  readAccessTokenFromCacheForOBO(e, t) {
    let r = t.authenticationScheme || L.BEARER, o = {
      credentialType: r && r.toLowerCase() !== L.BEARER.toLowerCase() ? K.ACCESS_TOKEN_WITH_AUTH_SCHEME : K.ACCESS_TOKEN,
      clientId: e,
      target: oe.createSearchScopes(this.scopeSet.asArray()),
      tokenType: r,
      keyId: t.sshKid,
      requestedClaimsHash: t.requestedClaimsHash,
      userAssertionHash: this.userAssertionHash
    }, i = this.cacheManager.getAccessTokensByFilter(o, t.correlationId), s = i.length;
    if (s < 1) return null; else if (s > 1) throw g(cn);
    return i[0];
  }
  async executeTokenRequest(e, t, r) {
    let n = this.createTokenQueryParameters(e), o = x.appendQueryString(t.tokenEndpoint, n), i = await this.createTokenRequestBody(e), s = this.createTokenRequestHeaders(), a = {
      clientId: this.config.authOptions.clientId,
      authority: e.authority,
      scopes: e.scopes,
      claims: e.claims,
      authenticationScheme: e.authenticationScheme,
      resourceRequestMethod: e.resourceRequestMethod,
      resourceRequestUri: e.resourceRequestUri,
      shrClaims: e.shrClaims,
      sshKid: e.sshKid
    }, c = Q(), l = await this.executePostToTokenEndpoint(o, i, s, a, e.correlationId), d = new ie(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
    return d.validateTokenResponse(l.body), await d.handleServerTokenResponse(l.body, this.authority, c, e, void 0, r);
  }
  async createTokenRequestBody(e) {
    let t = new Map;
    if (Qe(t, this.config.authOptions.clientId), We(t, e.scopes), zt(t, Pe.JWT_BEARER), 
    At(t), Et(t, this.config.libraryInfo), Ct(t, this.config.telemetry.application), 
    qt(t), this.serverTelemetryManager) Gt(t, this.serverTelemetryManager);
    let r = e.correlationId || this.config.cryptoInterface.createNewGuid();
    if (at(t, r), bg(t, Rg), kg(t, e.oboAssertion), this.config.clientCredentials.clientSecret) Tr(t, this.config.clientCredentials.clientSecret);
    let n = this.config.clientCredentials.clientAssertion;
    if (n) Er(t, await _e(n.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), 
    Cr(t, n.assertionType);
    if (e.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) Je(t, e.claims, this.config.authOptions.clientCapabilities);
    return pe(t);
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Cs extends Mn {
  constructor(e) {
    super(e);
    let t = !!this.config.auth.clientSecret, r = !!this.config.auth.clientAssertion, n = (!!this.config.auth.clientCertificate?.thumbprint || !!this.config.auth.clientCertificate?.thumbprintSha256) && !!this.config.auth.clientCertificate?.privateKey;
    if (this.appTokenProvider) return;
    if (t && r || r && n || t && n) throw g(mn);
    if (this.config.auth.clientSecret) {
      this.clientSecret = this.config.auth.clientSecret;
      return;
    }
    if (this.config.auth.clientAssertion) {
      this.developerProvidedClientAssertion = this.config.auth.clientAssertion;
      return;
    }
    if (!n) throw g(mn); else this.clientAssertion = this.config.auth.clientCertificate.thumbprintSha256 ? ct.fromCertificateWithSha256Thumbprint(this.config.auth.clientCertificate.thumbprintSha256, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c) : ct.fromCertificate(this.config.auth.clientCertificate.thumbprint, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c);
    this.appTokenProvider = void 0;
  }
  SetAppTokenProvider(e) {
    this.appTokenProvider = e;
  }
  async acquireTokenByClientCredential(e) {
    this.logger.info("acquireTokenByClientCredential called", e.correlationId);
    let t;
    if (e.clientAssertion) t = {
      assertion: await _e(e.clientAssertion, this.config.auth.clientId),
      assertionType: Se.JWT_BEARER_ASSERTION_TYPE
    };
    let r = await this.initializeBaseRequest(e), n = {
      ...r,
      scopes: r.scopes.filter(u => !ye.includes(u))
    }, o = {
      ...e,
      ...n,
      clientAssertion: t
    }, s = new x(o.authority).getUrlComponents().PathSegments[0];
    if (Object.values(be).includes(s)) throw g(fo);
    let a = process.env[Th], c;
    if (o.azureRegion !== "DisableMsalForceRegion") if (!o.azureRegion && a) c = a; else c = o.azureRegion;
    let l = {
      azureRegion: c,
      environmentRegion: process.env[yh]
    }, d = this.initializeServerTelemetryManager(St.acquireTokenByClientCredential, o.correlationId, o.skipCache);
    try {
      let u = await this.createAuthority(o.authority, o.correlationId, l, e.azureCloudOptions), m = await this.buildOauthClientConfiguration(u, o.correlationId, "", d), p = new Dn(m, this.appTokenProvider);
      return this.logger.verbose("Client credential client created", o.correlationId), 
      await p.acquireToken(o);
    } catch (u) {
      if (u instanceof N) u.setCorrelationId(o.correlationId);
      throw d.cacheFailedRequest(u), u;
    }
  }
  async acquireTokenOnBehalfOf(e) {
    this.logger.info("acquireTokenOnBehalfOf called", e.correlationId);
    let t = {
      ...e,
      ...await this.initializeBaseRequest(e)
    };
    try {
      let r = await this.createAuthority(t.authority, t.correlationId, void 0, e.azureCloudOptions), n = await this.buildOauthClientConfiguration(r, t.correlationId, "", void 0), o = new Es(n);
      return this.logger.verbose("On behalf of client created", t.correlationId), await o.acquireToken(t);
    } catch (r) {
      if (r instanceof N) r.setCorrelationId(t.correlationId);
      throw r;
    }
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ function Ff(e) {
  if (typeof e !== "string") return !1;
  let t = new Date(e);
  return !isNaN(t.getTime()) && t.toISOString() === e;
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Ec {
  constructor(e, t, r) {
    this.httpClientNoRetries = e, this.retryPolicy = t, this.logger = r;
  }
  async sendNetworkRequestAsyncHelper(e, t, r) {
    if (e === J.GET) return this.httpClientNoRetries.sendGetRequestAsync(t, r); else return this.httpClientNoRetries.sendPostRequestAsync(t, r);
  }
  async sendNetworkRequestAsync(e, t, r) {
    let n = await this.sendNetworkRequestAsyncHelper(e, t, r);
    if ("isNewRequest" in this.retryPolicy) this.retryPolicy.isNewRequest = !0;
    let o = 0;
    while (await this.retryPolicy.pauseForRetry(n.status, o, this.logger, n.headers[Y.RETRY_AFTER])) n = await this.sendNetworkRequestAsyncHelper(e, t, r), 
    o++;
    return n;
  }
  async sendGetRequestAsync(e, t) {
    return this.sendNetworkRequestAsync(J.GET, e, t);
  }
  async sendPostRequestAsync(e, t) {
    return this.sendNetworkRequestAsync(J.POST, e, t);
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var Pr = {
  MANAGED_IDENTITY_CLIENT_ID_2017: "clientid",
  MANAGED_IDENTITY_CLIENT_ID: "client_id",
  MANAGED_IDENTITY_OBJECT_ID: "object_id",
  MANAGED_IDENTITY_RESOURCE_ID_IMDS: "msi_res_id",
  MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS: "mi_res_id"
};

class De {
  constructor(e, t, r, n, o) {
    this.logger = e, this.nodeStorage = t, this.networkClient = r, this.cryptoProvider = n, 
    this.disableInternalRetries = o;
  }
  async getServerTokenResponseAsync(e, t, r, n) {
    return this.getServerTokenResponse(e);
  }
  getServerTokenResponse(e) {
    let t, r;
    if (e.body.expires_on) {
      if (Ff(e.body.expires_on)) e.body.expires_on = new Date(e.body.expires_on).getTime() / 1e3;
      if (r = e.body.expires_on - Q(), r > 7200) t = r / 2;
    }
    return {
      status: e.status,
      access_token: e.body.access_token,
      expires_in: r,
      scope: e.body.resource,
      token_type: e.body.token_type,
      refresh_in: t,
      correlation_id: e.body.correlation_id || e.body.correlationId,
      error: typeof e.body.error === "string" ? e.body.error : e.body.error?.code,
      error_description: e.body.message || (typeof e.body.error === "string" ? e.body.error_description : e.body.error?.message),
      error_codes: e.body.error_codes,
      timestamp: e.body.timestamp,
      trace_id: e.body.trace_id
    };
  }
  async acquireTokenWithManagedIdentity(e, t, r, n) {
    let o = this.createRequest(e.resource, t);
    if (e.revokedTokenSha256Hash) this.logger.info(`[Managed Identity] The following claims are present in the request: ${e.claims}`), 
    o.queryParameters[ce.SHA256_TOKEN_TO_REFRESH] = e.revokedTokenSha256Hash;
    if (e.clientCapabilities?.length) {
      let m = e.clientCapabilities.toString();
      this.logger.info(`[Managed Identity] The following client capabilities are present in the request: ${m}`), 
      o.queryParameters[ce.XMS_CC] = m;
    }
    let i = o.headers;
    i[Y.CONTENT_TYPE] = f.URL_FORM_CONTENT_TYPE;
    let s = {
      headers: i
    };
    if (Object.keys(o.bodyParameters).length) s.body = o.computeParametersBodyString();
    let a = this.disableInternalRetries ? this.networkClient : new Ec(this.networkClient, o.retryPolicy, this.logger), c = Q(), l;
    try {
      if (o.httpMethod === J.POST) l = await a.sendPostRequestAsync(o.computeUri(), s); else l = await a.sendGetRequestAsync(o.computeUri(), s);
    } catch (m) {
      if (m instanceof N) throw m; else throw g(Mt);
    }
    let d = new ie(t.id, this.nodeStorage, this.cryptoProvider, this.logger, null, null), u = await this.getServerTokenResponseAsync(l, a, o, s);
    return d.validateTokenResponse(u, n), d.handleServerTokenResponse(u, r, c, e);
  }
  getManagedIdentityUserAssignedIdQueryParameterKey(e, t, r) {
    switch (e) {
     case ne.USER_ASSIGNED_CLIENT_ID:
      return this.logger.info(`[Managed Identity] [API version ${r ? "2017+" : "2019+"}] Adding user assigned client id to the request.`), 
      r ? Pr.MANAGED_IDENTITY_CLIENT_ID_2017 : Pr.MANAGED_IDENTITY_CLIENT_ID;

     case ne.USER_ASSIGNED_RESOURCE_ID:
      return this.logger.info("[Managed Identity] Adding user assigned resource id to the request."), 
      t ? Pr.MANAGED_IDENTITY_RESOURCE_ID_IMDS : Pr.MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS;

     case ne.USER_ASSIGNED_OBJECT_ID:
      return this.logger.info("[Managed Identity] Adding user assigned object id to the request."), 
      Pr.MANAGED_IDENTITY_OBJECT_ID;

     default:
      throw ae(Yt);
    }
  }
}

De.getValidatedEnvVariableUrlString = (e, t, r, n) => {
  try {
    return new x(t).urlString;
  } catch (o) {
    throw n.info(`[Managed Identity] ${r} managed identity is unavailable because the '${e}' environment variable is malformed.`), 
    ae(vr[e]);
  }
};

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Cc {
  calculateDelay(e, t) {
    if (!e) return t;
    let r = Math.round(parseFloat(e) * 1e3);
    if (isNaN(r)) r = new Date(e).valueOf() - (new Date).valueOf();
    return Math.max(t, r);
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var OE = 3, NE = 1e3, xE = [ P.NOT_FOUND, P.REQUEST_TIMEOUT, P.TOO_MANY_REQUESTS, P.SERVER_ERROR, P.SERVICE_UNAVAILABLE, P.GATEWAY_TIMEOUT ];

class As {
  constructor() {
    this.linearRetryStrategy = new Cc;
  }
  static get DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS() {
    return NE;
  }
  async pauseForRetry(e, t, r, n) {
    if (xE.includes(e) && t < OE) {
      let o = this.linearRetryStrategy.calculateDelay(n, As.DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS);
      return r.verbose(`Retrying request in ${o}ms (retry attempt: ${t + 1})`), await new Promise(i => setTimeout(i, o)), 
      !0;
    }
    return !1;
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Fe {
  constructor(e, t, r) {
    this.httpMethod = e, this._baseEndpoint = t, this.headers = {}, this.bodyParameters = {}, 
    this.queryParameters = {}, this.retryPolicy = r || new As;
  }
  computeUri() {
    let e = new Map;
    if (this.queryParameters) He(e, this.queryParameters);
    let t = pe(e);
    return x.appendQueryString(this._baseEndpoint, t);
  }
  computeParametersBodyString() {
    let e = new Map;
    if (this.bodyParameters) He(e, this.bodyParameters);
    return pe(e);
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var ME = "2019-08-01";

class Or extends De {
  constructor(e, t, r, n, o, i, s) {
    super(e, t, r, n, o);
    this.identityEndpoint = i, this.identityHeader = s;
  }
  static getEnvironmentVariables() {
    let e = process.env[v.IDENTITY_ENDPOINT], t = process.env[v.IDENTITY_HEADER];
    return [ e, t ];
  }
  static tryCreate(e, t, r, n, o) {
    let [i, s] = Or.getEnvironmentVariables();
    if (!i || !s) return e.info(`[Managed Identity] ${b.APP_SERVICE} managed identity is unavailable because one or both of the '${v.IDENTITY_HEADER}' and '${v.IDENTITY_ENDPOINT}' environment variables are not defined.`), 
    null;
    let a = Or.getValidatedEnvVariableUrlString(v.IDENTITY_ENDPOINT, i, b.APP_SERVICE, e);
    return e.info(`[Managed Identity] Environment variables validation passed for ${b.APP_SERVICE} managed identity. Endpoint URI: ${a}. Creating ${b.APP_SERVICE} managed identity.`), 
    new Or(e, t, r, n, o, i, s);
  }
  createRequest(e, t) {
    let r = new Fe(J.GET, this.identityEndpoint);
    if (r.headers[xe.APP_SERVICE_SECRET_HEADER_NAME] = this.identityHeader, r.queryParameters[ce.API_VERSION] = ME, 
    r.queryParameters[ce.RESOURCE] = e, t.idType !== ne.SYSTEM_ASSIGNED) r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType)] = t.id;
    return r;
  }
}

import { accessSync as DE, constants as $f, statSync as UE, readFileSync as LE } from "fs";

import HE from "path";

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var FE = "2019-11-01", Bf = "http://127.0.0.1:40342/metadata/identity/oauth2/token", zf = "N/A: himds executable exists", Gf = {
  win32: `${process.env.ProgramData}\\AzureConnectedMachineAgent\\Tokens\\`,
  linux: "/var/opt/azcmagent/tokens/"
}, $E = {
  win32: `${process.env.ProgramFiles}\\AzureConnectedMachineAgent\\himds.exe`,
  linux: "/opt/azcmagent/bin/himds"
};

class Jt extends De {
  constructor(e, t, r, n, o, i) {
    super(e, t, r, n, o);
    this.identityEndpoint = i;
  }
  static getEnvironmentVariables() {
    let e = process.env[v.IDENTITY_ENDPOINT], t = process.env[v.IMDS_ENDPOINT];
    if (!e || !t) {
      let r = $E.linux;
      try {
        DE(r, $f.F_OK | $f.R_OK), e = Bf, t = zf;
      } catch (n) {}
    }
    return [ e, t ];
  }
  static tryCreate(e, t, r, n, o, i) {
    let [s, a] = Jt.getEnvironmentVariables();
    if (!s || !a) return e.info(`[Managed Identity] ${b.AZURE_ARC} managed identity is unavailable through environment variables because one or both of '${v.IDENTITY_ENDPOINT}' and '${v.IMDS_ENDPOINT}' are not defined. ${b.AZURE_ARC} managed identity is also unavailable through file detection.`), 
    null;
    if (a === zf) e.info(`[Managed Identity] ${b.AZURE_ARC} managed identity is available through file detection. Defaulting to known ${b.AZURE_ARC} endpoint: ${Bf}. Creating ${b.AZURE_ARC} managed identity.`); else {
      let c = Jt.getValidatedEnvVariableUrlString(v.IDENTITY_ENDPOINT, s, b.AZURE_ARC, e);
      c.endsWith("/") && c.slice(0, -1), Jt.getValidatedEnvVariableUrlString(v.IMDS_ENDPOINT, a, b.AZURE_ARC, e), 
      e.info(`[Managed Identity] Environment variables validation passed for ${b.AZURE_ARC} managed identity. Endpoint URI: ${c}. Creating ${b.AZURE_ARC} managed identity.`);
    }
    if (i.idType !== ne.SYSTEM_ASSIGNED) throw ae(es);
    return new Jt(e, t, r, n, o, s);
  }
  createRequest(e) {
    let t = new Fe(J.GET, this.identityEndpoint.replace("localhost", "127.0.0.1"));
    return t.headers[xe.METADATA_HEADER_NAME] = "true", t.queryParameters[ce.API_VERSION] = FE, 
    t.queryParameters[ce.RESOURCE] = e, t;
  }
  async getServerTokenResponseAsync(e, t, r, n) {
    let o;
    if (e.status === P.UNAUTHORIZED) {
      let i = e.headers["www-authenticate"];
      if (!i) throw ae(ns);
      if (!i.includes("Basic realm=")) throw ae(os);
      let s = i.split("Basic realm=")[1];
      if (!Gf.hasOwnProperty("linux")) throw ae(Zi);
      let a = Gf.linux, c = HE.basename(s);
      if (!c.endsWith(".key")) throw ae(Qi);
      if (a + c !== s) throw ae(Ji);
      let l;
      try {
        l = await UE(s).size;
      } catch (m) {
        throw ae(So);
      }
      if (l > Ah) throw ae(Xi);
      let d;
      try {
        d = LE(s, me.UTF8);
      } catch (m) {
        throw ae(So);
      }
      let u = `Basic ${d}`;
      this.logger.info("[Managed Identity] Adding authorization header to the request."), 
      r.headers[xe.AUTHORIZATION_HEADER_NAME] = u;
      try {
        o = await t.sendGetRequestAsync(r.computeUri(), n);
      } catch (m) {
        if (m instanceof N) throw m; else throw g(Mt);
      }
    }
    return this.getServerTokenResponse(o || e);
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Nr extends De {
  constructor(e, t, r, n, o, i) {
    super(e, t, r, n, o);
    this.msiEndpoint = i;
  }
  static getEnvironmentVariables() {
    return [ process.env[v.MSI_ENDPOINT] ];
  }
  static tryCreate(e, t, r, n, o, i) {
    let [s] = Nr.getEnvironmentVariables();
    if (!s) return e.info(`[Managed Identity] ${b.CLOUD_SHELL} managed identity is unavailable because the '${v.MSI_ENDPOINT} environment variable is not defined.`), 
    null;
    let a = Nr.getValidatedEnvVariableUrlString(v.MSI_ENDPOINT, s, b.CLOUD_SHELL, e);
    if (e.info(`[Managed Identity] Environment variable validation passed for ${b.CLOUD_SHELL} managed identity. Endpoint URI: ${a}. Creating ${b.CLOUD_SHELL} managed identity.`), 
    i.idType !== ne.SYSTEM_ASSIGNED) throw ae(ts);
    return new Nr(e, t, r, n, o, s);
  }
  createRequest(e) {
    let t = new Fe(J.POST, this.msiEndpoint);
    return t.headers[xe.METADATA_HEADER_NAME] = "true", t.bodyParameters[ce.RESOURCE] = e, 
    t /*! @azure/msal-node v3.8.1 2025-10-29 */;
  }
}

class Ac {
  constructor(e, t, r) {
    this.minExponentialBackoff = e, this.maxExponentialBackoff = t, this.exponentialDeltaBackoff = r;
  }
  calculateDelay(e) {
    if (e === 0) return this.minExponentialBackoff;
    return Math.min(Math.pow(2, e - 1) * this.exponentialDeltaBackoff, this.maxExponentialBackoff);
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var BE = [ P.NOT_FOUND, P.REQUEST_TIMEOUT, P.GONE, P.TOO_MANY_REQUESTS ], zE = 3, GE = 7, qE = 1e3, KE = 4e3, VE = 2e3, jE = 1e4;

class xr {
  constructor() {
    this.exponentialRetryStrategy = new Ac(xr.MIN_EXPONENTIAL_BACKOFF_MS, xr.MAX_EXPONENTIAL_BACKOFF_MS, xr.EXPONENTIAL_DELTA_BACKOFF_MS);
  }
  static get MIN_EXPONENTIAL_BACKOFF_MS() {
    return qE;
  }
  static get MAX_EXPONENTIAL_BACKOFF_MS() {
    return KE;
  }
  static get EXPONENTIAL_DELTA_BACKOFF_MS() {
    return VE;
  }
  static get HTTP_STATUS_GONE_RETRY_AFTER_MS() {
    return jE;
  }
  set isNewRequest(e) {
    this._isNewRequest = e;
  }
  async pauseForRetry(e, t, r) {
    if (this._isNewRequest) this._isNewRequest = !1, this.maxRetries = e === P.GONE ? GE : zE;
    if ((BE.includes(e) || e >= P.SERVER_ERROR_RANGE_START && e <= P.SERVER_ERROR_RANGE_END && t < this.maxRetries) && t < this.maxRetries) {
      let n = e === P.GONE ? xr.HTTP_STATUS_GONE_RETRY_AFTER_MS : this.exponentialRetryStrategy.calculateDelay(t);
      return r.verbose(`Retrying request in ${n}ms (retry attempt: ${t + 1})`), await new Promise(o => setTimeout(o, n)), 
      !0;
    }
    return !1;
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var qf = "/metadata/identity/oauth2/token", YE = `http://169.254.169.254${qf}`, WE = "2018-02-01";

class ko extends De {
  constructor(e, t, r, n, o, i) {
    super(e, t, r, n, o);
    this.identityEndpoint = i;
  }
  static tryCreate(e, t, r, n, o) {
    let i;
    if (process.env[v.AZURE_POD_IDENTITY_AUTHORITY_HOST]) e.info(`[Managed Identity] Environment variable ${v.AZURE_POD_IDENTITY_AUTHORITY_HOST} for ${b.IMDS} returned endpoint: ${process.env[v.AZURE_POD_IDENTITY_AUTHORITY_HOST]}`), 
    i = ko.getValidatedEnvVariableUrlString(v.AZURE_POD_IDENTITY_AUTHORITY_HOST, `${process.env[v.AZURE_POD_IDENTITY_AUTHORITY_HOST]}${qf}`, b.IMDS, e); else e.info(`[Managed Identity] Unable to find ${v.AZURE_POD_IDENTITY_AUTHORITY_HOST} environment variable for ${b.IMDS}, using the default endpoint.`), 
    i = YE;
    return new ko(e, t, r, n, o, i);
  }
  createRequest(e, t) {
    let r = new Fe(J.GET, this.identityEndpoint);
    if (r.headers[xe.METADATA_HEADER_NAME] = "true", r.queryParameters[ce.API_VERSION] = WE, 
    r.queryParameters[ce.RESOURCE] = e, t.idType !== ne.SYSTEM_ASSIGNED) r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType, !0)] = t.id;
    return r.retryPolicy = new xr, r /*! @azure/msal-node v3.8.1 2025-10-29 */;
  }
}

var QE = "2019-07-01-preview";

class Mr extends De {
  constructor(e, t, r, n, o, i, s) {
    super(e, t, r, n, o);
    this.identityEndpoint = i, this.identityHeader = s;
  }
  static getEnvironmentVariables() {
    let e = process.env[v.IDENTITY_ENDPOINT], t = process.env[v.IDENTITY_HEADER], r = process.env[v.IDENTITY_SERVER_THUMBPRINT];
    return [ e, t, r ];
  }
  static tryCreate(e, t, r, n, o, i) {
    let [s, a, c] = Mr.getEnvironmentVariables();
    if (!s || !a || !c) return e.info(`[Managed Identity] ${b.SERVICE_FABRIC} managed identity is unavailable because one or all of the '${v.IDENTITY_HEADER}', '${v.IDENTITY_ENDPOINT}' or '${v.IDENTITY_SERVER_THUMBPRINT}' environment variables are not defined.`), 
    null;
    let l = Mr.getValidatedEnvVariableUrlString(v.IDENTITY_ENDPOINT, s, b.SERVICE_FABRIC, e);
    if (e.info(`[Managed Identity] Environment variables validation passed for ${b.SERVICE_FABRIC} managed identity. Endpoint URI: ${l}. Creating ${b.SERVICE_FABRIC} managed identity.`), 
    i.idType !== ne.SYSTEM_ASSIGNED) e.warning(`[Managed Identity] ${b.SERVICE_FABRIC} user assigned managed identity is configured in the cluster, not during runtime. See also: https://learn.microsoft.com/en-us/azure/service-fabric/configure-existing-cluster-enable-managed-identity-token-service.`);
    return new Mr(e, t, r, n, o, s, a);
  }
  createRequest(e, t) {
    let r = new Fe(J.GET, this.identityEndpoint);
    if (r.headers[xe.ML_AND_SF_SECRET_HEADER_NAME] = this.identityHeader, r.queryParameters[ce.API_VERSION] = QE, 
    r.queryParameters[ce.RESOURCE] = e, t.idType !== ne.SYSTEM_ASSIGNED) r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType)] = t.id;
    return r;
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var JE = "2017-09-01", XE = `Only client id is supported for user-assigned managed identity in ${b.MACHINE_LEARNING}.`;

class Dr extends De {
  constructor(e, t, r, n, o, i, s) {
    super(e, t, r, n, o);
    this.msiEndpoint = i, this.secret = s;
  }
  static getEnvironmentVariables() {
    let e = process.env[v.MSI_ENDPOINT], t = process.env[v.MSI_SECRET];
    return [ e, t ];
  }
  static tryCreate(e, t, r, n, o) {
    let [i, s] = Dr.getEnvironmentVariables();
    if (!i || !s) return e.info(`[Managed Identity] ${b.MACHINE_LEARNING} managed identity is unavailable because one or both of the '${v.MSI_ENDPOINT}' and '${v.MSI_SECRET}' environment variables are not defined.`), 
    null;
    let a = Dr.getValidatedEnvVariableUrlString(v.MSI_ENDPOINT, i, b.MACHINE_LEARNING, e);
    return e.info(`[Managed Identity] Environment variables validation passed for ${b.MACHINE_LEARNING} managed identity. Endpoint URI: ${a}. Creating ${b.MACHINE_LEARNING} managed identity.`), 
    new Dr(e, t, r, n, o, i, s);
  }
  createRequest(e, t) {
    let r = new Fe(J.GET, this.msiEndpoint);
    if (r.headers[xe.METADATA_HEADER_NAME] = "true", r.headers[xe.ML_AND_SF_SECRET_HEADER_NAME] = this.secret, 
    r.queryParameters[ce.API_VERSION] = JE, r.queryParameters[ce.RESOURCE] = e, t.idType === ne.SYSTEM_ASSIGNED) r.queryParameters[Pr.MANAGED_IDENTITY_CLIENT_ID_2017] = process.env[v.DEFAULT_IDENTITY_CLIENT_ID]; else if (t.idType === ne.USER_ASSIGNED_CLIENT_ID) r.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(t.idType, !1, !0)] = t.id; else throw Error(XE);
    return r;
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ class Rt {
  constructor(e, t, r, n, o) {
    this.logger = e, this.nodeStorage = t, this.networkClient = r, this.cryptoProvider = n, 
    this.disableInternalRetries = o;
  }
  async sendManagedIdentityTokenRequest(e, t, r, n) {
    if (!Rt.identitySource) Rt.identitySource = this.selectManagedIdentitySource(this.logger, this.nodeStorage, this.networkClient, this.cryptoProvider, this.disableInternalRetries, t);
    return Rt.identitySource.acquireTokenWithManagedIdentity(e, t, r, n);
  }
  allEnvironmentVariablesAreDefined(e) {
    return Object.values(e).every(t => t !== void 0);
  }
  getManagedIdentitySource() {
    return Rt.sourceName = this.allEnvironmentVariablesAreDefined(Mr.getEnvironmentVariables()) ? b.SERVICE_FABRIC : this.allEnvironmentVariablesAreDefined(Or.getEnvironmentVariables()) ? b.APP_SERVICE : this.allEnvironmentVariablesAreDefined(Dr.getEnvironmentVariables()) ? b.MACHINE_LEARNING : this.allEnvironmentVariablesAreDefined(Nr.getEnvironmentVariables()) ? b.CLOUD_SHELL : this.allEnvironmentVariablesAreDefined(Jt.getEnvironmentVariables()) ? b.AZURE_ARC : b.DEFAULT_TO_IMDS, 
    Rt.sourceName;
  }
  selectManagedIdentitySource(e, t, r, n, o, i) {
    let s = Mr.tryCreate(e, t, r, n, o, i) || Or.tryCreate(e, t, r, n, o) || Dr.tryCreate(e, t, r, n, o) || Nr.tryCreate(e, t, r, n, o, i) || Jt.tryCreate(e, t, r, n, o, i) || ko.tryCreate(e, t, r, n, o);
    if (!s) throw ae(rs);
    return s;
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ var ZE = [ b.SERVICE_FABRIC ];

class wt {
  constructor(e) {
    this.config = Ph(e || {}), this.logger = new Le(this.config.system.loggerOptions, ps, lt);
    let t = {
      canonicalAuthority: f.DEFAULT_AUTHORITY
    };
    if (!wt.nodeStorage) wt.nodeStorage = new br(this.logger, this.config.managedIdentityId.id, Tn, t);
    this.networkClient = this.config.system.networkClient, this.cryptoProvider = new Wt;
    let r = {
      protocolMode: Ae.AAD,
      knownAuthorities: [ Wa ],
      cloudDiscoveryMetadata: "",
      authorityMetadata: ""
    };
    this.fakeAuthority = new ue(Wa, this.networkClient, wt.nodeStorage, r, this.logger, this.cryptoProvider.createNewGuid(), void 0, !0), 
    this.fakeClientCredentialClient = new Dn({
      authOptions: {
        clientId: this.config.managedIdentityId.id,
        authority: this.fakeAuthority
      }
    }), this.managedIdentityClient = new Rt(this.logger, wt.nodeStorage, this.networkClient, this.cryptoProvider, this.config.disableInternalRetries), 
    this.hashUtils = new kr;
  }
  async acquireToken(e) {
    if (!e.resource) throw V(fr);
    let t = {
      forceRefresh: e.forceRefresh,
      resource: e.resource.replace("/.default", ""),
      scopes: [ e.resource.replace("/.default", "") ],
      authority: this.fakeAuthority.canonicalAuthority,
      correlationId: this.cryptoProvider.createNewGuid(),
      claims: e.claims,
      clientCapabilities: this.config.clientCapabilities
    };
    if (t.forceRefresh) return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
    let [r, n] = await this.fakeClientCredentialClient.getCachedAuthenticationResult(t, this.config, this.cryptoProvider, this.fakeAuthority, wt.nodeStorage);
    if (t.claims) {
      let o = this.managedIdentityClient.getManagedIdentitySource();
      if (r && ZE.includes(o)) {
        let i = this.hashUtils.sha256(r.accessToken).toString(me.HEX);
        t.revokedTokenSha256Hash = i;
      }
      return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
    }
    if (r) {
      if (n === j.PROACTIVELY_REFRESHED) {
        this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
        let o = !0;
        await this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority, o);
      }
      return r;
    } else return this.acquireTokenFromManagedIdentity(t, this.config.managedIdentityId, this.fakeAuthority);
  }
  async acquireTokenFromManagedIdentity(e, t, r, n) {
    return this.managedIdentityClient.sendManagedIdentityTokenRequest(e, t, r, n);
  }
  getManagedIdentitySource() {
    return Rt.sourceName || this.managedIdentityClient.getManagedIdentitySource();
  }
}

 /*! @azure/msal-node v3.8.1 2025-10-29 */ /*! @azure/msal-node v3.8.1 2025-10-29 */ var bo = z("IdentityUtils"), eC = "1.0";

function Un(e, t, r) {
  let n = o => (bo.getToken.info(o), new dt({
    scopes: Array.isArray(e) ? e : [ e ],
    getTokenOptions: r,
    message: o
  }));
  if (!t) throw n("No response");
  if (!t.expiresOn) throw n('Response had no "expiresOn" property.');
  if (!t.accessToken) throw n('Response had no "accessToken" property.');
}

function _c(e) {
  let t = e === null || e === void 0 ? void 0 : e.authorityHost;
  if (!t && Yn) t = process.env.AZURE_AUTHORITY_HOST;
  return t !== null && t !== void 0 ? t : Fn;
}

function Sc(e, t) {
  if (!t) t = Fn;
  if (new RegExp(`${e}/?$`).test(t)) return t;
  if (t.endsWith("/")) return t + e; else return `${t}/${e}`;
}

function Kf(e, t, r) {
  if (e === "adfs" && t || r) return [ t ];
  return [];
}

var Is = (e, t = (Qo ? "Node" : "Browser")) => (r, n, o) => {
  if (o) return;
  switch (r) {
   case G.Error:
    e.info(`MSAL ${t} V2 error: ${n}`);
    return;

   case G.Info:
    e.info(`MSAL ${t} V2 info message: ${n}`);
    return;

   case G.Verbose:
    e.info(`MSAL ${t} V2 verbose message: ${n}`);
    return;

   case G.Warning:
    e.info(`MSAL ${t} V2 warning: ${n}`);
    return;
  }
};

function _s(e) {
  switch (e) {
   case "error":
    return G.Error;

   case "info":
    return G.Info;

   case "verbose":
    return G.Verbose;

   case "warning":
    return G.Warning;

   default:
    return G.Info;
  }
}

function Ur(e, t, r) {
  if (t.name === "AuthError" || t.name === "ClientAuthError" || t.name === "BrowserAuthError") {
    let n = t;
    switch (n.errorCode) {
     case "endpoints_resolution_error":
      return bo.info(q(e, t.message)), new w(t.message);

     case "device_code_polling_cancelled":
      return new Vr("The authentication has been aborted by the caller.");

     case "consent_required":
     case "interaction_required":
     case "login_required":
      bo.info(q(e, `Authentication returned errorCode ${n.errorCode}`));
      break;

     default:
      bo.info(q(e, `Failed to acquire token: ${t.message}`));
      break;
    }
  }
  if (t.name === "ClientConfigurationError" || t.name === "BrowserConfigurationAuthError" || t.name === "AbortError" || t.name === "AuthenticationError") return t;
  if (t.name === "NativeAuthError") return bo.info(q(e, `Error from the native broker: ${t.message} with status code: ${t.statusCode}`)), 
  t;
  return new dt({
    scopes: e,
    getTokenOptions: r,
    message: t.message
  });
}

function Vf(e) {
  return {
    localAccountId: e.homeAccountId,
    environment: e.authority,
    username: e.username,
    homeAccountId: e.homeAccountId,
    tenantId: e.tenantId
  };
}

function jf(e, t) {
  var r;
  return {
    authority: (r = t.environment) !== null && r !== void 0 ? r : Gc,
    homeAccountId: t.homeAccountId,
    tenantId: t.tenantId || zc,
    username: t.username,
    clientId: e,
    version: eC
  };
}

var tC = 64e3;

function Yf(e) {
  return Ea([ {
    name: "imdsRetryPolicy",
    retry: ({retryCount: t, response: r}) => {
      if ((r === null || r === void 0 ? void 0 : r.status) !== 404) return {
        skipStrategy: !0
      };
      return Xl(t, {
        retryDelayInMs: e.startDelayInMs,
        maxRetryDelayInMs: tC
      });
    }
  } ], {
    maxRetries: e.maxRetries
  });
}

var vt = "ManagedIdentityCredential - IMDS", Lr = z(vt), rC = "http://169.254.169.254", nC = "/metadata/identity/oauth2/token";

function oC(e) {
  var t;
  if (!eo(e)) throw Error(`${vt}: Multiple scopes are not supported.`);
  let n = new URL(nC, (t = process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST) !== null && t !== void 0 ? t : rC), o = {
    Accept: "application/json"
  };
  return {
    url: `${n}`,
    method: "GET",
    headers: rr(o)
  };
}

var Wf = {
  name: "imdsMsi",
  async isAvailable(e) {
    let {scopes: t, identityClient: r, getTokenOptions: n} = e, o = eo(t);
    if (!o) return Lr.info(`${vt}: Unavailable. Multiple scopes are not supported.`), 
    !1;
    if (process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST) return !0;
    if (!r) throw Error("Missing IdentityClient");
    let i = oC(o);
    return Z.withSpan("ManagedIdentityCredential-pingImdsEndpoint", n !== null && n !== void 0 ? n : {}, async s => {
      var a, c;
      i.tracingOptions = s.tracingOptions;
      let l = je(i);
      l.timeout = ((a = s.requestOptions) === null || a === void 0 ? void 0 : a.timeout) || 1e3, 
      l.allowInsecureConnection = !0;
      let d;
      try {
        Lr.info(`${vt}: Pinging the Azure IMDS endpoint`), d = await r.sendRequest(l);
      } catch (u) {
        if (Wo(u)) Lr.verbose(`${vt}: Caught error ${u.name}: ${u.message}`);
        return Lr.info(`${vt}: The Azure IMDS endpoint is unavailable`), !1;
      }
      if (d.status === 403) {
        if ((c = d.bodyAsText) === null || c === void 0 ? void 0 : c.includes("unreachable")) return Lr.info(`${vt}: The Azure IMDS endpoint is unavailable`), 
        Lr.info(`${vt}: ${d.bodyAsText}`), !1;
      }
      return Lr.info(`${vt}: The Azure IMDS endpoint is available`), !0;
    });
  }
};

var Rc;

(function(e) {
  e.AutoDiscoverRegion = "AutoDiscoverRegion", e.USWest = "westus", e.USWest2 = "westus2", 
  e.USCentral = "centralus", e.USEast = "eastus", e.USEast2 = "eastus2", e.USNorthCentral = "northcentralus", 
  e.USSouthCentral = "southcentralus", e.USWestCentral = "westcentralus", e.CanadaCentral = "canadacentral", 
  e.CanadaEast = "canadaeast", e.BrazilSouth = "brazilsouth", e.EuropeNorth = "northeurope", 
  e.EuropeWest = "westeurope", e.UKSouth = "uksouth", e.UKWest = "ukwest", e.FranceCentral = "francecentral", 
  e.FranceSouth = "francesouth", e.SwitzerlandNorth = "switzerlandnorth", e.SwitzerlandWest = "switzerlandwest", 
  e.GermanyNorth = "germanynorth", e.GermanyWestCentral = "germanywestcentral", e.NorwayWest = "norwaywest", 
  e.NorwayEast = "norwayeast", e.AsiaEast = "eastasia", e.AsiaSouthEast = "southeastasia", 
  e.JapanEast = "japaneast", e.JapanWest = "japanwest", e.AustraliaEast = "australiaeast", 
  e.AustraliaSouthEast = "australiasoutheast", e.AustraliaCentral = "australiacentral", 
  e.AustraliaCentral2 = "australiacentral2", e.IndiaCentral = "centralindia", e.IndiaSouth = "southindia", 
  e.IndiaWest = "westindia", e.KoreaSouth = "koreasouth", e.KoreaCentral = "koreacentral", 
  e.UAECentral = "uaecentral", e.UAENorth = "uaenorth", e.SouthAfricaNorth = "southafricanorth", 
  e.SouthAfricaWest = "southafricawest", e.ChinaNorth = "chinanorth", e.ChinaEast = "chinaeast", 
  e.ChinaNorth2 = "chinanorth2", e.ChinaEast2 = "chinaeast2", e.GermanyCentral = "germanycentral", 
  e.GermanyNorthEast = "germanynortheast", e.GovernmentUSVirginia = "usgovvirginia", 
  e.GovernmentUSIowa = "usgoviowa", e.GovernmentUSArizona = "usgovarizona", e.GovernmentUSTexas = "usgovtexas", 
  e.GovernmentUSDodEast = "usdodeast", e.GovernmentUSDodCentral = "usdodcentral";
})(Rc || (Rc = {}));

function Ss(e) {
  var t, r;
  let n = e;
  if (n === void 0 && ((r = (t = globalThis.process) === null || t === void 0 ? void 0 : t.env) === null || r === void 0 ? void 0 : r.AZURE_REGIONAL_AUTHORITY_NAME) !== void 0) n = process.env.AZURE_REGIONAL_AUTHORITY_NAME;
  if (n === Rc.AutoDiscoverRegion) return "AUTO_DISCOVER";
  return n;
}

var Ue = z("MsalClient");

function iC(e, t, r = {}) {
  var n, o, i;
  let s = cl((n = r.logger) !== null && n !== void 0 ? n : Ue, t, e), a = Sc(s, _c(r)), c = new Qr(Object.assign(Object.assign({}, r.tokenCredentialOptions), {
    authorityHost: a,
    loggingOptions: r.loggingOptions
  }));
  return {
    auth: {
      clientId: e,
      authority: a,
      knownAuthorities: Kf(s, a, r.disableInstanceDiscovery)
    },
    system: {
      networkClient: c,
      loggerOptions: {
        loggerCallback: Is((o = r.logger) !== null && o !== void 0 ? o : Ue),
        logLevel: _s(Lo()),
        piiLoggingEnabled: (i = r.loggingOptions) === null || i === void 0 ? void 0 : i.enableUnsafeSupportLogging
      }
    }
  };
}

function Xt(e, t, r = {}) {
  var n;
  let o = {
    msalConfig: iC(e, t, r),
    cachedAccount: r.authenticationRecord ? Vf(r.authenticationRecord) : null,
    pluginConfiguration: Wc.generatePluginConfiguration(r),
    logger: (n = r.logger) !== null && n !== void 0 ? n : Ue
  }, i = new Map;
  async function s(I = {}) {
    let A = I.enableCae ? "CAE" : "default", E = i.get(A);
    if (E) return o.logger.getToken.info("Existing PublicClientApplication found in cache, returning it."), 
    E;
    o.logger.getToken.info(`Creating new PublicClientApplication with CAE ${I.enableCae ? "enabled" : "disabled"}.`);
    let S = I.enableCae ? o.pluginConfiguration.cache.cachePluginCae : o.pluginConfiguration.cache.cachePlugin;
    return o.msalConfig.auth.clientCapabilities = I.enableCae ? [ "cp1" ] : void 0, 
    E = new Ts(Object.assign(Object.assign({}, o.msalConfig), {
      broker: {
        nativeBrokerPlugin: o.pluginConfiguration.broker.nativeBrokerPlugin
      },
      cache: {
        cachePlugin: await S
      }
    })), i.set(A, E), E;
  }
  let a = new Map;
  async function c(I = {}) {
    let A = I.enableCae ? "CAE" : "default", E = a.get(A);
    if (E) return o.logger.getToken.info("Existing ConfidentialClientApplication found in cache, returning it."), 
    E;
    o.logger.getToken.info(`Creating new ConfidentialClientApplication with CAE ${I.enableCae ? "enabled" : "disabled"}.`);
    let S = I.enableCae ? o.pluginConfiguration.cache.cachePluginCae : o.pluginConfiguration.cache.cachePlugin;
    return o.msalConfig.auth.clientCapabilities = I.enableCae ? [ "cp1" ] : void 0, 
    E = new Cs(Object.assign(Object.assign({}, o.msalConfig), {
      broker: {
        nativeBrokerPlugin: o.pluginConfiguration.broker.nativeBrokerPlugin
      },
      cache: {
        cachePlugin: await S
      }
    })), a.set(A, E), E;
  }
  async function l(I, A, E = {}) {
    if (o.cachedAccount === null) throw o.logger.getToken.info("No cached account found in local state."), 
    new dt({
      scopes: A
    });
    if (E.claims) o.cachedClaims = E.claims;
    let S = {
      account: o.cachedAccount,
      scopes: A,
      claims: o.cachedClaims
    };
    if (o.pluginConfiguration.broker.isEnabled) {
      if (S.tokenQueryParameters || (S.tokenQueryParameters = {}), o.pluginConfiguration.broker.enableMsaPassthrough) S.tokenQueryParameters.msal_request_type = "consumer_passthrough";
    }
    if (E.proofOfPossessionOptions) S.shrNonce = E.proofOfPossessionOptions.nonce, S.authenticationScheme = "pop", 
    S.resourceRequestMethod = E.proofOfPossessionOptions.resourceRequestMethod, S.resourceRequestUri = E.proofOfPossessionOptions.resourceRequestUrl;
    o.logger.getToken.info("Attempting to acquire token silently");
    try {
      return await I.acquireTokenSilent(S);
    } catch (H) {
      throw Ur(A, H, E);
    }
  }
  function d(I) {
    if (I === null || I === void 0 ? void 0 : I.tenantId) return Sc(I.tenantId, _c(r));
    return o.msalConfig.auth.authority;
  }
  async function u(I, A, E, S) {
    var H, R;
    let D = null;
    try {
      D = await l(I, A, E);
    } catch (se) {
      if (se.name !== "AuthenticationRequiredError") throw se;
      if (E.disableAutomaticAuthentication) throw new dt({
        scopes: A,
        getTokenOptions: E,
        message: "Automatic authentication has been disabled. You may call the authentication() method."
      });
    }
    if (D === null) try {
      D = await S();
    } catch (se) {
      throw Ur(A, se, E);
    }
    return Un(A, D, E), o.cachedAccount = (H = D === null || D === void 0 ? void 0 : D.account) !== null && H !== void 0 ? H : null, 
    o.logger.getToken.info(he(A)), {
      token: D.accessToken,
      expiresOnTimestamp: D.expiresOn.getTime(),
      refreshAfterTimestamp: (R = D.refreshOn) === null || R === void 0 ? void 0 : R.getTime(),
      tokenType: D.tokenType
    };
  }
  async function m(I, A, E = {}) {
    var S;
    o.logger.getToken.info("Attempting to acquire token using client secret"), o.msalConfig.auth.clientSecret = A;
    let H = await c(E);
    try {
      let R = await H.acquireTokenByClientCredential({
        scopes: I,
        authority: d(E),
        azureRegion: Ss(),
        claims: E === null || E === void 0 ? void 0 : E.claims
      });
      return Un(I, R, E), o.logger.getToken.info(he(I)), {
        token: R.accessToken,
        expiresOnTimestamp: R.expiresOn.getTime(),
        refreshAfterTimestamp: (S = R.refreshOn) === null || S === void 0 ? void 0 : S.getTime(),
        tokenType: R.tokenType
      };
    } catch (R) {
      throw Ur(I, R, E);
    }
  }
  async function p(I, A, E = {}) {
    var S;
    o.logger.getToken.info("Attempting to acquire token using client assertion"), o.msalConfig.auth.clientAssertion = A;
    let H = await c(E);
    try {
      let R = await H.acquireTokenByClientCredential({
        scopes: I,
        authority: d(E),
        azureRegion: Ss(),
        claims: E === null || E === void 0 ? void 0 : E.claims,
        clientAssertion: A
      });
      return Un(I, R, E), o.logger.getToken.info(he(I)), {
        token: R.accessToken,
        expiresOnTimestamp: R.expiresOn.getTime(),
        refreshAfterTimestamp: (S = R.refreshOn) === null || S === void 0 ? void 0 : S.getTime(),
        tokenType: R.tokenType
      };
    } catch (R) {
      throw Ur(I, R, E);
    }
  }
  async function y(I, A, E = {}) {
    var S;
    o.logger.getToken.info("Attempting to acquire token using client certificate"), 
    o.msalConfig.auth.clientCertificate = A;
    let H = await c(E);
    try {
      let R = await H.acquireTokenByClientCredential({
        scopes: I,
        authority: d(E),
        azureRegion: Ss(),
        claims: E === null || E === void 0 ? void 0 : E.claims
      });
      return Un(I, R, E), o.logger.getToken.info(he(I)), {
        token: R.accessToken,
        expiresOnTimestamp: R.expiresOn.getTime(),
        refreshAfterTimestamp: (S = R.refreshOn) === null || S === void 0 ? void 0 : S.getTime(),
        tokenType: R.tokenType
      };
    } catch (R) {
      throw Ur(I, R, E);
    }
  }
  async function T(I, A, E = {}) {
    o.logger.getToken.info("Attempting to acquire token using device code");
    let S = await s(E);
    return u(S, I, E, () => {
      var H, R;
      let D = {
        scopes: I,
        cancel: (R = (H = E === null || E === void 0 ? void 0 : E.abortSignal) === null || H === void 0 ? void 0 : H.aborted) !== null && R !== void 0 ? R : !1,
        deviceCodeCallback: A,
        authority: d(E),
        claims: E === null || E === void 0 ? void 0 : E.claims
      }, se = S.acquireTokenByDeviceCode(D);
      if (E.abortSignal) E.abortSignal.addEventListener("abort", () => {
        D.cancel = !0;
      });
      return se;
    });
  }
  async function _(I, A, E, S = {}) {
    o.logger.getToken.info("Attempting to acquire token using username and password");
    let H = await s(S);
    return u(H, I, S, () => {
      let R = {
        scopes: I,
        username: A,
        password: E,
        authority: d(S),
        claims: S === null || S === void 0 ? void 0 : S.claims
      };
      return H.acquireTokenByUsernamePassword(R);
    });
  }
  function k() {
    if (!o.cachedAccount) return;
    return jf(e, o.cachedAccount);
  }
  async function U(I, A, E, S, H = {}) {
    o.logger.getToken.info("Attempting to acquire token using authorization code");
    let R;
    if (S) o.msalConfig.auth.clientSecret = S, R = await c(H); else R = await s(H);
    return u(R, I, H, () => R.acquireTokenByCode({
      scopes: I,
      redirectUri: A,
      code: E,
      authority: d(H),
      claims: H === null || H === void 0 ? void 0 : H.claims
    }));
  }
  async function B(I, A, E, S = {}) {
    var H;
    if (Ue.getToken.info("Attempting to acquire token on behalf of another user"), typeof E === "string") Ue.getToken.info("Using client secret for on behalf of flow"), 
    o.msalConfig.auth.clientSecret = E; else if (typeof E === "function") Ue.getToken.info("Using client assertion callback for on behalf of flow"), 
    o.msalConfig.auth.clientAssertion = E; else Ue.getToken.info("Using client certificate for on behalf of flow"), 
    o.msalConfig.auth.clientCertificate = E;
    let R = await c(S);
    try {
      let D = await R.acquireTokenOnBehalfOf({
        scopes: I,
        authority: d(S),
        claims: S.claims,
        oboAssertion: A
      });
      return Un(I, D, S), Ue.getToken.info(he(I)), {
        token: D.accessToken,
        expiresOnTimestamp: D.expiresOn.getTime(),
        refreshAfterTimestamp: (H = D.refreshOn) === null || H === void 0 ? void 0 : H.getTime(),
        tokenType: D.tokenType
      };
    } catch (D) {
      throw Ur(I, D, S);
    }
  }
  async function X(I, A = {}) {
    Ue.getToken.info("Attempting to acquire token interactively");
    let E = await s(A);
    async function S(R) {
      var D;
      Ue.verbose("Authentication will resume through the broker");
      let se = H();
      if (o.pluginConfiguration.broker.parentWindowHandle) se.windowHandle = Buffer.from(o.pluginConfiguration.broker.parentWindowHandle); else Ue.warning("Parent window handle is not specified for the broker. This may cause unexpected behavior. Please provide the parentWindowHandle.");
      if (o.pluginConfiguration.broker.enableMsaPassthrough) ((D = se.tokenQueryParameters) !== null && D !== void 0 ? D : se.tokenQueryParameters = {}).msal_request_type = "consumer_passthrough";
      if (R) se.prompt = "none", Ue.verbose("Attempting broker authentication using the default broker account"); else Ue.verbose("Attempting broker authentication without the default broker account");
      if (A.proofOfPossessionOptions) se.shrNonce = A.proofOfPossessionOptions.nonce, 
      se.authenticationScheme = "pop", se.resourceRequestMethod = A.proofOfPossessionOptions.resourceRequestMethod, 
      se.resourceRequestUri = A.proofOfPossessionOptions.resourceRequestUrl;
      try {
        return await E.acquireTokenInteractive(se);
      } catch (er) {
        if (Ue.verbose(`Failed to authenticate through the broker: ${er.message}`), R) return S(!1); else throw er;
      }
    }
    function H() {
      var R, D;
      return {
        openBrowser: async se => {
          let er = await import("./chunk-qxbcpbap.js");
          await er.default(se, {
            wait: !0,
            newInstance: !0
          });
        },
        scopes: I,
        authority: d(A),
        claims: A === null || A === void 0 ? void 0 : A.claims,
        loginHint: A === null || A === void 0 ? void 0 : A.loginHint,
        errorTemplate: (R = A === null || A === void 0 ? void 0 : A.browserCustomizationOptions) === null || R === void 0 ? void 0 : R.errorMessage,
        successTemplate: (D = A === null || A === void 0 ? void 0 : A.browserCustomizationOptions) === null || D === void 0 ? void 0 : D.successMessage,
        prompt: (A === null || A === void 0 ? void 0 : A.loginHint) ? "login" : "select_account"
      };
    }
    return u(E, I, A, async () => {
      var R;
      let D = H();
      if (o.pluginConfiguration.broker.isEnabled) return S((R = o.pluginConfiguration.broker.useDefaultBrokerAccount) !== null && R !== void 0 ? R : !1);
      if (A.proofOfPossessionOptions) D.shrNonce = A.proofOfPossessionOptions.nonce, D.authenticationScheme = "pop", 
      D.resourceRequestMethod = A.proofOfPossessionOptions.resourceRequestMethod, D.resourceRequestUri = A.proofOfPossessionOptions.resourceRequestUrl;
      return E.acquireTokenInteractive(D);
    });
  }
  return {
    getActiveAccount: k,
    getTokenByClientSecret: m,
    getTokenByClientAssertion: p,
    getTokenByClientCertificate: y,
    getTokenByDeviceCode: T,
    getTokenByUsernamePassword: _,
    getTokenByAuthorizationCode: U,
    getTokenOnBehalfOf: B,
    getTokenByInteractiveRequest: X
  };
}

var Qf = z("ClientAssertionCredential");

class wc {
  constructor(e, t, r, n = {}) {
    if (!e) throw new w("ClientAssertionCredential: tenantId is a required parameter.");
    if (!t) throw new w("ClientAssertionCredential: clientId is a required parameter.");
    if (!r) throw new w("ClientAssertionCredential: clientAssertion is a required parameter.");
    this.tenantId = e, this.additionallyAllowedTenantIds = ve(n === null || n === void 0 ? void 0 : n.additionallyAllowedTenants), 
    this.options = n, this.getAssertion = r, this.msalClient = Xt(t, e, Object.assign(Object.assign({}, n), {
      logger: Qf,
      tokenCredentialOptions: this.options
    }));
  }
  async getToken(e, t = {}) {
    return Z.withSpan(`${this.constructor.name}.getToken`, t, async r => {
      r.tenantId = Ee(this.tenantId, r, this.additionallyAllowedTenantIds, Qf);
      let n = Array.isArray(e) ? e : [ e ];
      return this.msalClient.getTokenByClientAssertion(n, this.getAssertion, r);
    });
  }
}

import { readFile as sC } from "fs/promises";

var Hr = "WorkloadIdentityCredential", aC = [ "AZURE_TENANT_ID", "AZURE_CLIENT_ID", "AZURE_FEDERATED_TOKEN_FILE" ], Po = z(Hr);

class Fr {
  constructor(e) {
    this.azureFederatedTokenFileContent = void 0, this.cacheDate = void 0;
    let t = Ho(aC).assigned.join(", ");
    Po.info(`Found the following environment variables: ${t}`);
    let r = e !== null && e !== void 0 ? e : {}, n = r.tenantId || process.env.AZURE_TENANT_ID, o = r.clientId || process.env.AZURE_CLIENT_ID;
    if (this.federatedTokenFilePath = r.tokenFilePath || process.env.AZURE_FEDERATED_TOKEN_FILE, 
    n) Re(Po, n);
    if (!o) throw new w(`${Hr}: is unavailable. clientId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_CLIENT_ID".\n        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    if (!n) throw new w(`${Hr}: is unavailable. tenantId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_TENANT_ID".\n        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    if (!this.federatedTokenFilePath) throw new w(`${Hr}: is unavailable. federatedTokenFilePath is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_FEDERATED_TOKEN_FILE".\n        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
    Po.info(`Invoking ClientAssertionCredential with tenant ID: ${n}, clientId: ${r.clientId} and federated token path: [REDACTED]`), 
    this.client = new wc(n, o, this.readFileContents.bind(this), e);
  }
  async getToken(e, t) {
    if (!this.client) {
      let r = `${Hr}: is unavailable. tenantId, clientId, and federatedTokenFilePath are required parameters. \n      In DefaultAzureCredential and ManagedIdentityCredential, these can be provided as environment variables - \n      "AZURE_TENANT_ID",\n      "AZURE_CLIENT_ID",\n      "AZURE_FEDERATED_TOKEN_FILE". See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`;
      throw Po.info(r), new w(r);
    }
    return Po.info("Invoking getToken() of Client Assertion Credential"), this.client.getToken(e, t);
  }
  async readFileContents() {
    if (this.cacheDate !== void 0 && Date.now() - this.cacheDate >= 3e5) this.azureFederatedTokenFileContent = void 0;
    if (!this.federatedTokenFilePath) throw new w(`${Hr}: is unavailable. Invalid file path provided ${this.federatedTokenFilePath}.`);
    if (!this.azureFederatedTokenFileContent) {
      let t = (await sC(this.federatedTokenFilePath, "utf8")).trim();
      if (!t) throw new w(`${Hr}: is unavailable. No content on the file ${this.federatedTokenFilePath}.`); else this.azureFederatedTokenFileContent = t, 
      this.cacheDate = Date.now();
    }
    return this.azureFederatedTokenFileContent;
  }
}

var Jf = "ManagedIdentityCredential - Token Exchange", cC = z(Jf), vc = {
  name: "tokenExchangeMsi",
  async isAvailable(e) {
    let t = process.env, r = Boolean((e || t.AZURE_CLIENT_ID) && t.AZURE_TENANT_ID && process.env.AZURE_FEDERATED_TOKEN_FILE);
    if (!r) cC.info(`${Jf}: Unavailable. The environment variables needed are: AZURE_CLIENT_ID (or the client ID sent through the parameters), AZURE_TENANT_ID and AZURE_FEDERATED_TOKEN_FILE`);
    return r;
  },
  async getToken(e, t = {}) {
    let {scopes: r, clientId: n} = e, o = {};
    return new Fr(Object.assign(Object.assign({
      clientId: n,
      tenantId: process.env.AZURE_TENANT_ID,
      tokenFilePath: process.env.AZURE_FEDERATED_TOKEN_FILE
    }, o), {
      disableInstanceDiscovery: !0
    })).getToken(r, t);
  }
};

var $e = z("ManagedIdentityCredential");

class Ln {
  constructor(e, t) {
    var r, n;
    this.msiRetryConfig = {
      maxRetries: 5,
      startDelayInMs: 800,
      intervalIncrement: 2
    };
    let o;
    if (typeof e === "string") this.clientId = e, o = t !== null && t !== void 0 ? t : {}; else this.clientId = e === null || e === void 0 ? void 0 : e.clientId, 
    o = e !== null && e !== void 0 ? e : {};
    this.resourceId = o === null || o === void 0 ? void 0 : o.resourceId, this.objectId = o === null || o === void 0 ? void 0 : o.objectId;
    let i = [ {
      key: "clientId",
      value: this.clientId
    }, {
      key: "resourceId",
      value: this.resourceId
    }, {
      key: "objectId",
      value: this.objectId
    } ].filter(a => a.value);
    if (i.length > 1) throw Error(`ManagedIdentityCredential: only one of 'clientId', 'resourceId', or 'objectId' can be provided. Received values: ${JSON.stringify({
      clientId: this.clientId,
      resourceId: this.resourceId,
      objectId: this.objectId
    })}`);
    if (o.allowInsecureConnection = !0, ((r = o.retryOptions) === null || r === void 0 ? void 0 : r.maxRetries) !== void 0) this.msiRetryConfig.maxRetries = o.retryOptions.maxRetries;
    this.identityClient = new Qr(Object.assign(Object.assign({}, o), {
      additionalPolicies: [ {
        policy: Yf(this.msiRetryConfig),
        position: "perCall"
      } ]
    })), this.managedIdentityApp = new wt({
      managedIdentityIdParams: {
        userAssignedClientId: this.clientId,
        userAssignedResourceId: this.resourceId,
        userAssignedObjectId: this.objectId
      },
      system: {
        disableInternalRetries: !0,
        networkClient: this.identityClient,
        loggerOptions: {
          logLevel: _s(Lo()),
          piiLoggingEnabled: (n = o.loggingOptions) === null || n === void 0 ? void 0 : n.enableUnsafeSupportLogging,
          loggerCallback: Is($e)
        }
      }
    }), this.isAvailableIdentityClient = new Qr(Object.assign(Object.assign({}, o), {
      retryOptions: {
        maxRetries: 0
      }
    }));
    let s = this.managedIdentityApp.getManagedIdentitySource();
    if (s === "CloudShell") {
      if (this.clientId || this.resourceId || this.objectId) throw $e.warning(`CloudShell MSI detected with user-provided IDs - throwing. Received values: ${JSON.stringify({
        clientId: this.clientId,
        resourceId: this.resourceId,
        objectId: this.objectId
      })}.`), new w("ManagedIdentityCredential: Specifying a user-assigned managed identity is not supported for CloudShell at runtime. When using Managed Identity in CloudShell, omit the clientId, resourceId, and objectId parameters.");
    }
    if (s === "ServiceFabric") {
      if (this.clientId || this.resourceId || this.objectId) throw $e.warning(`Service Fabric detected with user-provided IDs - throwing. Received values: ${JSON.stringify({
        clientId: this.clientId,
        resourceId: this.resourceId,
        objectId: this.objectId
      })}.`), new w(`ManagedIdentityCredential: ${Ud}`);
    }
    if ($e.info(`Using ${s} managed identity.`), i.length === 1) {
      let {key: a, value: c} = i[0];
      $e.info(`${s} with ${a}: ${c}`);
    }
  }
  async getToken(e, t = {}) {
    $e.getToken.info("Using the MSAL provider for Managed Identity.");
    let r = eo(e);
    if (!r) throw new w(`ManagedIdentityCredential: Multiple scopes are not supported. Scopes: ${JSON.stringify(e)}`);
    return Z.withSpan("ManagedIdentityCredential.getToken", t, async () => {
      var n;
      try {
        let o = await vc.isAvailable(this.clientId), i = this.managedIdentityApp.getManagedIdentitySource(), s = i === "DefaultToImds" || i === "Imds";
        if ($e.getToken.info(`MSAL Identity source: ${i}`), o) {
          $e.getToken.info("Using the token exchange managed identity.");
          let c = await vc.getToken({
            scopes: e,
            clientId: this.clientId,
            identityClient: this.identityClient,
            retryConfig: this.msiRetryConfig,
            resourceId: this.resourceId
          });
          if (c === null) throw new w("Attempted to use the token exchange managed identity, but received a null response.");
          return c;
        } else if (s) {
          if ($e.getToken.info("Using the IMDS endpoint to probe for availability."), !await Wf.isAvailable({
            scopes: e,
            clientId: this.clientId,
            getTokenOptions: t,
            identityClient: this.isAvailableIdentityClient,
            resourceId: this.resourceId
          })) throw new w("Attempted to use the IMDS endpoint, but it is not available.");
        }
        $e.getToken.info("Calling into MSAL for managed identity token.");
        let a = await this.managedIdentityApp.acquireToken({
          resource: r
        });
        return this.ensureValidMsalToken(e, a, t), $e.getToken.info(he(e)), {
          expiresOnTimestamp: a.expiresOn.getTime(),
          token: a.accessToken,
          refreshAfterTimestamp: (n = a.refreshOn) === null || n === void 0 ? void 0 : n.getTime(),
          tokenType: "Bearer"
        };
      } catch (o) {
        if ($e.getToken.error(q(e, o)), o.name === "AuthenticationRequiredError") throw o;
        if (lC(o)) throw new w(`ManagedIdentityCredential: Network unreachable. Message: ${o.message}`, {
          cause: o
        });
        throw new w(`ManagedIdentityCredential: Authentication failed. Message ${o.message}`, {
          cause: o
        });
      }
    });
  }
  ensureValidMsalToken(e, t, r) {
    let n = o => ($e.getToken.info(o), new dt({
      scopes: Array.isArray(e) ? e : [ e ],
      getTokenOptions: r,
      message: o
    }));
    if (!t) throw n("No response.");
    if (!t.expiresOn) throw n('Response had no "expiresOn" property.');
    if (!t.accessToken) throw n('Response had no "accessToken" property.');
  }
}

function lC(e) {
  if (e.errorCode === "network_error") return !0;
  if (e.code === "ENETUNREACH" || e.code === "EHOSTUNREACH") return !0;
  if (e.statusCode === 403 || e.code === 403) {
    if (e.message.includes("unreachable")) return !0;
  }
  return !1;
}

function Rs(e) {
  return Array.isArray(e) ? e : [ e ];
}

function Hn(e, t) {
  if (!e.match(/^[0-9a-zA-Z-_.:/]+$/)) {
    let r = Error("Invalid scope was specified by the user or calling client");
    throw t.getToken.info(q(e, r)), r;
  }
}

function ws(e) {
  return e.replace(/\/.default$/, "");
}

import dC from "child_process";

function kc(e, t) {
  if (!t.match(/^[0-9a-zA-Z-._ ]+$/)) {
    let r = Error("Invalid subscription provided. You can locate your subscription by following the instructions listed here: https://learn.microsoft.com/azure/azure-portal/get-subscription-tenant-id.");
    throw e.info(q("", r)), r;
  }
}

var Ze = z("AzureCliCredential"), Xf = {
  getSafeWorkingDir() {
    return "/bin";
  },
  async getAzureCliAccessToken(e, t, r, n) {
    let o = [], i = [];
    if (t) o = [ "--tenant", t ];
    if (r) i = [ "--subscription", `"${r}"` ];
    return new Promise((s, a) => {
      try {
        dC.execFile("az", [ "account", "get-access-token", "--output", "json", "--resource", e, ...o, ...i ], {
          cwd: Xf.getSafeWorkingDir(),
          shell: !0,
          timeout: n
        }, (c, l, d) => {
          s({
            stdout: l,
            stderr: d,
            error: c
          });
        });
      } catch (c) {
        a(c);
      }
    });
  }
};

class bc {
  constructor(e) {
    if (e === null || e === void 0 ? void 0 : e.tenantId) Re(Ze, e === null || e === void 0 ? void 0 : e.tenantId), 
    this.tenantId = e === null || e === void 0 ? void 0 : e.tenantId;
    if (e === null || e === void 0 ? void 0 : e.subscription) kc(Ze, e === null || e === void 0 ? void 0 : e.subscription), 
    this.subscription = e === null || e === void 0 ? void 0 : e.subscription;
    this.additionallyAllowedTenantIds = ve(e === null || e === void 0 ? void 0 : e.additionallyAllowedTenants), 
    this.timeout = e === null || e === void 0 ? void 0 : e.processTimeoutInMs;
  }
  async getToken(e, t = {}) {
    let r = Ee(this.tenantId, t, this.additionallyAllowedTenantIds);
    if (r) Re(Ze, r);
    if (this.subscription) kc(Ze, this.subscription);
    let n = typeof e === "string" ? e : e[0];
    return Ze.getToken.info(`Using the scope ${n}`), Z.withSpan(`${this.constructor.name}.getToken`, t, async () => {
      var o, i, s, a;
      try {
        Hn(n, Ze);
        let c = ws(n), l = await Xf.getAzureCliAccessToken(c, r, this.subscription, this.timeout), d = (o = l.stderr) === null || o === void 0 ? void 0 : o.match("(.*)az login --scope(.*)"), u = ((i = l.stderr) === null || i === void 0 ? void 0 : i.match("(.*)az login(.*)")) && !d;
        if (((s = l.stderr) === null || s === void 0 ? void 0 : s.match("az:(.*)not found")) || ((a = l.stderr) === null || a === void 0 ? void 0 : a.startsWith("'az' is not recognized"))) {
          let p = new w("Azure CLI could not be found. Please visit https://aka.ms/azure-cli for installation instructions and then, once installed, authenticate to your Azure account using 'az login'.");
          throw Ze.getToken.info(q(e, p)), p;
        }
        if (u) {
          let p = new w("Please run 'az login' from a command prompt to authenticate before using this credential.");
          throw Ze.getToken.info(q(e, p)), p;
        }
        try {
          let p = l.stdout, y = this.parseRawResponse(p);
          return Ze.getToken.info(he(e)), y;
        } catch (p) {
          if (l.stderr) throw new w(l.stderr);
          throw p;
        }
      } catch (c) {
        let l = c.name === "CredentialUnavailableError" ? c : new w(c.message || "Unknown error while trying to retrieve the access token");
        throw Ze.getToken.info(q(e, l)), l;
      }
    });
  }
  parseRawResponse(e) {
    let t = JSON.parse(e), r = t.accessToken, n = Number.parseInt(t.expires_on, 10) * 1e3;
    if (!isNaN(n)) return Ze.getToken.info("expires_on is available and is valid, using it"), 
    {
      token: r,
      expiresOnTimestamp: n,
      tokenType: "Bearer"
    };
    if (n = new Date(t.expiresOn).getTime(), isNaN(n)) throw new w(`Unexpected response from Azure CLI when getting token. Expected "expiresOn" to be a RFC3339 date string. Got: "${t.expiresOn}"`);
    return {
      token: r,
      expiresOnTimestamp: n,
      tokenType: "Bearer"
    };
  }
}

import uC from "child_process";

var Zt = z("AzureDeveloperCliCredential"), Zf = {
  getSafeWorkingDir() {
    return "/bin";
  },
  async getAzdAccessToken(e, t, r) {
    let n = [];
    if (t) n = [ "--tenant-id", t ];
    return new Promise((o, i) => {
      try {
        uC.execFile("azd", [ "auth", "token", "--output", "json", ...e.reduce((s, a) => s.concat("--scope", a), []), ...n ], {
          cwd: Zf.getSafeWorkingDir(),
          timeout: r
        }, (s, a, c) => {
          o({
            stdout: a,
            stderr: c,
            error: s
          });
        });
      } catch (s) {
        i(s);
      }
    });
  }
};

class Pc {
  constructor(e) {
    if (e === null || e === void 0 ? void 0 : e.tenantId) Re(Zt, e === null || e === void 0 ? void 0 : e.tenantId), 
    this.tenantId = e === null || e === void 0 ? void 0 : e.tenantId;
    this.additionallyAllowedTenantIds = ve(e === null || e === void 0 ? void 0 : e.additionallyAllowedTenants), 
    this.timeout = e === null || e === void 0 ? void 0 : e.processTimeoutInMs;
  }
  async getToken(e, t = {}) {
    let r = Ee(this.tenantId, t, this.additionallyAllowedTenantIds);
    if (r) Re(Zt, r);
    let n;
    if (typeof e === "string") n = [ e ]; else n = e;
    return Zt.getToken.info(`Using the scopes ${e}`), Z.withSpan(`${this.constructor.name}.getToken`, t, async () => {
      var o, i, s, a;
      try {
        n.forEach(u => {
          Hn(u, Zt);
        });
        let c = await Zf.getAzdAccessToken(n, r, this.timeout), l = ((o = c.stderr) === null || o === void 0 ? void 0 : o.match("not logged in, run `azd login` to login")) || ((i = c.stderr) === null || i === void 0 ? void 0 : i.match("not logged in, run `azd auth login` to login"));
        if (((s = c.stderr) === null || s === void 0 ? void 0 : s.match("azd:(.*)not found")) || ((a = c.stderr) === null || a === void 0 ? void 0 : a.startsWith("'azd' is not recognized")) || c.error && c.error.code === "ENOENT") {
          let u = new w("Azure Developer CLI couldn't be found. To mitigate this issue, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.");
          throw Zt.getToken.info(q(e, u)), u;
        }
        if (l) {
          let u = new w("Please run 'azd auth login' from a command prompt to authenticate before using this credential. For more information, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.");
          throw Zt.getToken.info(q(e, u)), u;
        }
        try {
          let u = JSON.parse(c.stdout);
          return Zt.getToken.info(he(e)), {
            token: u.token,
            expiresOnTimestamp: new Date(u.expiresOn).getTime(),
            tokenType: "Bearer"
          };
        } catch (u) {
          if (c.stderr) throw new w(c.stderr);
          throw u;
        }
      } catch (c) {
        let l = c.name === "CredentialUnavailableError" ? c : new w(c.message || "Unknown error while trying to retrieve the access token");
        throw Zt.getToken.info(q(e, l)), l;
      }
    });
  }
}

import * as em from "child_process";

var tm = {
  execFile(e, t, r) {
    return new Promise((n, o) => {
      em.execFile(e, t, r, (i, s, a) => {
        if (Buffer.isBuffer(s)) s = s.toString("utf8");
        if (Buffer.isBuffer(a)) a = a.toString("utf8");
        if (a || i) o(a ? Error(a) : i); else n(s);
      });
    });
  }
};

var kt = z("AzurePowerShellCredential"), nm = !1;

function om(e) {
  if (nm) return `${e}.exe`; else return e;
}

async function rm(e, t) {
  let r = [];
  for (let n of e) {
    let [o, ...i] = n, s = await tm.execFile(o, i, {
      encoding: "utf8",
      timeout: t
    });
    r.push(s);
  }
  return r;
}

var im = {
  login: "Run Connect-AzAccount to login",
  installed: "The specified module 'Az.Accounts' with version '2.2.0' was not loaded because no valid module file was found in any module directory"
}, Oc = {
  login: "Please run 'Connect-AzAccount' from PowerShell to authenticate before using this credential.",
  installed: `The 'Az.Account' module >= 2.2.0 is not installed. Install the Azure Az PowerShell module with: "Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force".`,
  troubleshoot: "To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot."
}, hC = e => e.message.match(`(.*)${im.login}(.*)`), fC = e => e.message.match(im.installed), Nc = [ om("pwsh") ];

if (nm) Nc.push(om("powershell"));

class xc {
  constructor(e) {
    if (e === null || e === void 0 ? void 0 : e.tenantId) Re(kt, e === null || e === void 0 ? void 0 : e.tenantId), 
    this.tenantId = e === null || e === void 0 ? void 0 : e.tenantId;
    this.additionallyAllowedTenantIds = ve(e === null || e === void 0 ? void 0 : e.additionallyAllowedTenants), 
    this.timeout = e === null || e === void 0 ? void 0 : e.processTimeoutInMs;
  }
  async getAzurePowerShellAccessToken(e, t, r) {
    for (let n of [ ...Nc ]) {
      try {
        await rm([ [ n, "/?" ] ], r);
      } catch (s) {
        Nc.shift();
        continue;
      }
      let i = (await rm([ [ n, "-NoProfile", "-NonInteractive", "-Command", `\n          $tenantId = "${t !== null && t !== void 0 ? t : ""}"\n          $m = Import-Module Az.Accounts -MinimumVersion 2.2.0 -PassThru\n          $useSecureString = $m.Version -ge [version]'2.17.0'\n\n          $params = @{\n            ResourceUrl = "${e}"\n          }\n\n          if ($tenantId.Length -gt 0) {\n            $params["TenantId"] = $tenantId\n          }\n\n          if ($useSecureString) {\n            $params["AsSecureString"] = $true\n          }\n\n          $token = Get-AzAccessToken @params\n\n          $result = New-Object -TypeName PSObject\n          $result | Add-Member -MemberType NoteProperty -Name ExpiresOn -Value $token.ExpiresOn\n          if ($useSecureString) {\n            $result | Add-Member -MemberType NoteProperty -Name Token -Value (ConvertFrom-SecureString -AsPlainText $token.Token)\n          } else {\n            $result | Add-Member -MemberType NoteProperty -Name Token -Value $token.Token\n          }\n\n          Write-Output (ConvertTo-Json $result)\n          ` ] ]))[0];
      return mC(i);
    }
    throw Error("Unable to execute PowerShell. Ensure that it is installed in your system");
  }
  async getToken(e, t = {}) {
    return Z.withSpan(`${this.constructor.name}.getToken`, t, async () => {
      let r = Ee(this.tenantId, t, this.additionallyAllowedTenantIds), n = typeof e === "string" ? e : e[0];
      if (r) Re(kt, r);
      try {
        Hn(n, kt), kt.getToken.info(`Using the scope ${n}`);
        let o = ws(n), i = await this.getAzurePowerShellAccessToken(o, r, this.timeout);
        return kt.getToken.info(he(e)), {
          token: i.Token,
          expiresOnTimestamp: new Date(i.ExpiresOn).getTime(),
          tokenType: "Bearer"
        };
      } catch (o) {
        if (fC(o)) {
          let s = new w(Oc.installed);
          throw kt.getToken.info(q(n, s)), s;
        } else if (hC(o)) {
          let s = new w(Oc.login);
          throw kt.getToken.info(q(n, s)), s;
        }
        let i = new w(`${o}. ${Oc.troubleshoot}`);
        throw kt.getToken.info(q(n, i)), i;
      }
    });
  }
}

async function mC(e) {
  let t = /{[^{}]*}/g, r = e.match(t), n = e;
  if (r) try {
    for (let o of r) try {
      let i = JSON.parse(o);
      if (i === null || i === void 0 ? void 0 : i.Token) {
        if (n = n.replace(o, ""), n) kt.getToken.warning(n);
        return i;
      }
    } catch (i) {
      continue;
    }
  } catch (o) {
    throw Error(`Unable to parse the output of PowerShell. Received output: ${e}`);
  }
  throw Error(`No access token found in the output. Received output: ${e}`);
}

var Mc = z("ChainedTokenCredential");

class Dc {
  constructor(...e) {
    this._sources = [], this._sources = e;
  }
  async getToken(e, t = {}) {
    let {token: r} = await this.getTokenInternal(e, t);
    return r;
  }
  async getTokenInternal(e, t = {}) {
    let r = null, n, o = [];
    return Z.withSpan("ChainedTokenCredential.getToken", t, async i => {
      for (let s = 0; s < this._sources.length && r === null; s++) try {
        r = await this._sources[s].getToken(e, i), n = this._sources[s];
      } catch (a) {
        if (a.name === "CredentialUnavailableError" || a.name === "AuthenticationRequiredError") o.push(a); else throw Mc.getToken.info(q(e, a)), 
        a;
      }
      if (!r && o.length > 0) {
        let s = new Fs(o, "ChainedTokenCredential authentication failed.");
        throw Mc.getToken.info(q(e, s)), s;
      }
      if (Mc.getToken.info(`Result for ${n.constructor.name}: ${he(e)}`), r === null) throw new w("Failed to retrieve a valid token");
      return {
        token: r,
        successfulCredential: n
      };
    });
  }
}

import { createHash as sm, createPrivateKey as pC } from "crypto";

import { readFile as gC } from "fs/promises";

var Oo = "ClientCertificateCredential", am = z(Oo);

class Uc {
  constructor(e, t, r, n = {}) {
    if (!e || !t) throw Error(`${Oo}: tenantId and clientId are required parameters.`);
    this.tenantId = e, this.additionallyAllowedTenantIds = ve(n === null || n === void 0 ? void 0 : n.additionallyAllowedTenants), 
    this.sendCertificateChain = n.sendCertificateChain, this.certificateConfiguration = Object.assign({}, typeof r === "string" ? {
      certificatePath: r
    } : r);
    let o = this.certificateConfiguration.certificate, i = this.certificateConfiguration.certificatePath;
    if (!this.certificateConfiguration || !(o || i)) throw Error(`${Oo}: Provide either a PEM certificate in string form, or the path to that certificate in the filesystem. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    if (o && i) throw Error(`${Oo}: To avoid unexpected behaviors, providing both the contents of a PEM certificate and the path to a PEM certificate is forbidden. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
    this.msalClient = Xt(t, e, Object.assign(Object.assign({}, n), {
      logger: am,
      tokenCredentialOptions: n
    }));
  }
  async getToken(e, t = {}) {
    return Z.withSpan(`${Oo}.getToken`, t, async r => {
      r.tenantId = Ee(this.tenantId, r, this.additionallyAllowedTenantIds, am);
      let n = Array.isArray(e) ? e : [ e ], o = await this.buildClientCertificate();
      return this.msalClient.getTokenByClientCertificate(n, o, r);
    });
  }
  async buildClientCertificate() {
    var e;
    let t = await yC(this.certificateConfiguration, (e = this.sendCertificateChain) !== null && e !== void 0 ? e : !1), r;
    if (this.certificateConfiguration.certificatePassword !== void 0) r = pC({
      key: t.certificateContents,
      passphrase: this.certificateConfiguration.certificatePassword,
      format: "pem"
    }).export({
      format: "pem",
      type: "pkcs8"
    }).toString(); else r = t.certificateContents;
    return {
      thumbprint: t.thumbprint,
      thumbprintSha256: t.thumbprintSha256,
      privateKey: r,
      x5c: t.x5c
    };
  }
}

async function yC(e, t) {
  let {certificate: r, certificatePath: n} = e, o = r || await gC(n, "utf8"), i = t ? o : void 0, s = /(-+BEGIN CERTIFICATE-+)(\n\r?|\r\n?)([A-Za-z0-9+/\n\r]+=*)(\n\r?|\r\n?)(-+END CERTIFICATE-+)/g, a = [], c;
  do {
    if (c = s.exec(o), c) a.push(c[3]);
  } while (c);
  if (a.length === 0) throw Error("The file at the specified path does not contain a PEM-encoded certificate.");
  let l = sm("sha1").update(Buffer.from(a[0], "base64")).digest("hex").toUpperCase(), d = sm("sha256").update(Buffer.from(a[0], "base64")).digest("hex").toUpperCase();
  return {
    certificateContents: o,
    thumbprintSha256: d,
    thumbprint: l,
    x5c: i
  };
}

var cm = z("ClientSecretCredential");

class Lc {
  constructor(e, t, r, n = {}) {
    if (!e) throw new w("ClientSecretCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    if (!t) throw new w("ClientSecretCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    if (!r) throw new w("ClientSecretCredential: clientSecret is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
    this.clientSecret = r, this.tenantId = e, this.additionallyAllowedTenantIds = ve(n === null || n === void 0 ? void 0 : n.additionallyAllowedTenants), 
    this.msalClient = Xt(t, e, Object.assign(Object.assign({}, n), {
      logger: cm,
      tokenCredentialOptions: n
    }));
  }
  async getToken(e, t = {}) {
    return Z.withSpan(`${this.constructor.name}.getToken`, t, async r => {
      r.tenantId = Ee(this.tenantId, r, this.additionallyAllowedTenantIds, cm);
      let n = Rs(e);
      return this.msalClient.getTokenByClientSecret(n, this.clientSecret, r);
    });
  }
}

var TC = z("UsernamePasswordCredential");

class Hc {
  constructor(e, t, r, n, o = {}) {
    if (!e) throw new w("UsernamePasswordCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    if (!t) throw new w("UsernamePasswordCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    if (!r) throw new w("UsernamePasswordCredential: username is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    if (!n) throw new w("UsernamePasswordCredential: password is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
    this.tenantId = e, this.additionallyAllowedTenantIds = ve(o === null || o === void 0 ? void 0 : o.additionallyAllowedTenants), 
    this.username = r, this.password = n, this.msalClient = Xt(t, this.tenantId, Object.assign(Object.assign({}, o), {
      tokenCredentialOptions: o !== null && o !== void 0 ? o : {}
    }));
  }
  async getToken(e, t = {}) {
    return Z.withSpan(`${this.constructor.name}.getToken`, t, async r => {
      r.tenantId = Ee(this.tenantId, r, this.additionallyAllowedTenantIds, TC);
      let n = Rs(e);
      return this.msalClient.getTokenByUsernamePassword(n, this.username, this.password, r);
    });
  }
}

var EC = [ "AZURE_TENANT_ID", "AZURE_CLIENT_ID", "AZURE_CLIENT_SECRET", "AZURE_CLIENT_CERTIFICATE_PATH", "AZURE_CLIENT_CERTIFICATE_PASSWORD", "AZURE_USERNAME", "AZURE_PASSWORD", "AZURE_ADDITIONALLY_ALLOWED_TENANTS", "AZURE_CLIENT_SEND_CERTIFICATE_CHAIN" ];

function CC() {
  var e;
  return ((e = process.env.AZURE_ADDITIONALLY_ALLOWED_TENANTS) !== null && e !== void 0 ? e : "").split(";");
}

var vs = "EnvironmentCredential", bt = z(vs);

function AC() {
  var e;
  let t = ((e = process.env.AZURE_CLIENT_SEND_CERTIFICATE_CHAIN) !== null && e !== void 0 ? e : "").toLowerCase(), r = t === "true" || t === "1";
  return bt.verbose(`AZURE_CLIENT_SEND_CERTIFICATE_CHAIN: ${process.env.AZURE_CLIENT_SEND_CERTIFICATE_CHAIN}; sendCertificateChain: ${r}`), 
  r;
}

class Fc {
  constructor(e) {
    this._credential = void 0;
    let t = Ho(EC).assigned.join(", ");
    bt.info(`Found the following environment variables: ${t}`);
    let r = process.env.AZURE_TENANT_ID, n = process.env.AZURE_CLIENT_ID, o = process.env.AZURE_CLIENT_SECRET, i = CC(), s = AC(), a = Object.assign(Object.assign({}, e), {
      additionallyAllowedTenantIds: i,
      sendCertificateChain: s
    });
    if (r) Re(bt, r);
    if (r && n && o) {
      bt.info(`Invoking ClientSecretCredential with tenant ID: ${r}, clientId: ${n} and clientSecret: [REDACTED]`), 
      this._credential = new Lc(r, n, o, a);
      return;
    }
    let c = process.env.AZURE_CLIENT_CERTIFICATE_PATH, l = process.env.AZURE_CLIENT_CERTIFICATE_PASSWORD;
    if (r && n && c) {
      bt.info(`Invoking ClientCertificateCredential with tenant ID: ${r}, clientId: ${n} and certificatePath: ${c}`), 
      this._credential = new Uc(r, n, {
        certificatePath: c,
        certificatePassword: l
      }, a);
      return;
    }
    let d = process.env.AZURE_USERNAME, u = process.env.AZURE_PASSWORD;
    if (r && n && d && u) bt.info(`Invoking UsernamePasswordCredential with tenant ID: ${r}, clientId: ${n} and username: ${d}`), 
    bt.warning("Environment is configured to use username and password authentication. This authentication method is deprecated, as it doesn't support multifactor authentication (MFA). Use a more secure credential. For more details, see https://aka.ms/azsdk/identity/mfa."), 
    this._credential = new Hc(r, n, d, u, a);
  }
  async getToken(e, t = {}) {
    return Z.withSpan(`${vs}.getToken`, t, async r => {
      if (this._credential) try {
        let n = await this._credential.getToken(e, r);
        return bt.getToken.info(he(e)), n;
      } catch (n) {
        let o = new $n(400, {
          error: `${vs} authentication failed. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`,
          error_description: n.message.toString().split("More details:").join("")
        });
        throw bt.getToken.info(q(e, o)), o;
      }
      throw new w(`${vs} is unavailable. No underlying credential could be used. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`);
    });
  }
}

var $c = z("DefaultAzureCredential");

function IC(e = {}) {
  var t, r, n, o;
  (t = e.retryOptions) !== null && t !== void 0 || (e.retryOptions = {
    maxRetries: 5,
    retryDelayInMs: 800
  });
  let i = (r = e === null || e === void 0 ? void 0 : e.managedIdentityClientId) !== null && r !== void 0 ? r : process.env.AZURE_CLIENT_ID, s = (n = e === null || e === void 0 ? void 0 : e.workloadIdentityClientId) !== null && n !== void 0 ? n : i, a = e === null || e === void 0 ? void 0 : e.managedIdentityResourceId, c = process.env.AZURE_FEDERATED_TOKEN_FILE, l = (o = e === null || e === void 0 ? void 0 : e.tenantId) !== null && o !== void 0 ? o : process.env.AZURE_TENANT_ID;
  if (a) {
    let d = Object.assign(Object.assign({}, e), {
      resourceId: a
    });
    return new Ln(d);
  }
  if (c && s) {
    let d = Object.assign(Object.assign({}, e), {
      tenantId: l
    });
    return new Ln(s, d);
  }
  if (i) {
    let d = Object.assign(Object.assign({}, e), {
      clientId: i
    });
    return new Ln(d);
  }
  return new Ln(e);
}

function _C(e) {
  var t, r, n;
  let o = (t = e === null || e === void 0 ? void 0 : e.managedIdentityClientId) !== null && t !== void 0 ? t : process.env.AZURE_CLIENT_ID, i = (r = e === null || e === void 0 ? void 0 : e.workloadIdentityClientId) !== null && r !== void 0 ? r : o, s = process.env.AZURE_FEDERATED_TOKEN_FILE, a = (n = e === null || e === void 0 ? void 0 : e.tenantId) !== null && n !== void 0 ? n : process.env.AZURE_TENANT_ID;
  if (s && i) {
    let c = Object.assign(Object.assign({}, e), {
      tenantId: a,
      clientId: i,
      tokenFilePath: s
    });
    return new Fr(c);
  }
  if (a) {
    let c = Object.assign(Object.assign({}, e), {
      tenantId: a
    });
    return new Fr(c);
  }
  return new Fr(e);
}

function SC(e = {}) {
  let t = e.processTimeoutInMs;
  return new Pc(Object.assign({
    processTimeoutInMs: t
  }, e));
}

function RC(e = {}) {
  let t = e.processTimeoutInMs;
  return new bc(Object.assign({
    processTimeoutInMs: t
  }, e));
}

function wC(e = {}) {
  let t = e.processTimeoutInMs;
  return new xc(Object.assign({
    processTimeoutInMs: t
  }, e));
}

function vC(e = {}) {
  return new Fc(e);
}

class lm {
  constructor(e, t) {
    this.credentialName = e, this.credentialUnavailableErrorMessage = t;
  }
  getToken() {
    return $c.getToken.info(`Skipping ${this.credentialName}, reason: ${this.credentialUnavailableErrorMessage}`), 
    Promise.resolve(null);
  }
}

class dm extends Dc {
  constructor(e) {
    let t = process.env.AZURE_TOKEN_CREDENTIALS ? process.env.AZURE_TOKEN_CREDENTIALS.trim().toLowerCase() : void 0, r = [ RC, wC, SC ], n = [ vC, _C, IC ], o = [];
    if (t) switch (t) {
     case "dev":
      o = r;
      break;

     case "prod":
      o = n;
      break;

     default:
      {
        let s = `Invalid value for AZURE_TOKEN_CREDENTIALS = ${process.env.AZURE_TOKEN_CREDENTIALS}. Valid values are 'prod' or 'dev'.`;
        throw $c.warning(s), Error(s);
      }
    } else o = [ ...n, ...r ];
    let i = o.map(s => {
      try {
        return s(e);
      } catch (a) {
        return $c.warning(`Skipped ${s.name} because of an error creating the credential: ${a}`), 
        new lm(s.name, a.message);
      }
    });
    super(...i);
  }
}

function kC(e, t, r) {
  let {abortSignal: n, tracingOptions: o} = r || {}, i = qn();
  i.addPolicy(Zn({
    credential: e,
    scopes: t
  }));
  async function s() {
    var a;
    let l = (a = (await i.sendRequest({
      sendRequest: d => Promise.resolve({
        request: d,
        status: 200,
        headers: d.headers
      })
    }, je({
      url: "https://example.com",
      abortSignal: n,
      tracingOptions: o
    }))).headers.get("authorization")) === null || a === void 0 ? void 0 : a.split(" ")[1];
    if (!l) throw Error("Failed to get access token");
    return l;
  }
  return s;
}

export { dm as DefaultAzureCredential, kC as getBearerTokenProvider };
