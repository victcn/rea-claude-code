// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { la } from "./chunk-m8ez8fhk.js";

var p, g = e => e instanceof CryptoKey;

var W = la(() => {
  p = crypto;
});

var mr = async (e, t) => {
  let r = `SHA-${e.slice(-3)}`;
  return new Uint8Array(await p.subtle.digest(r, t));
}, ue;

var Ie = la(() => {
  W();
  ue = mr;
});

function _(...e) {
  let t = e.reduce((n, {length: a}) => n + a, 0), r = new Uint8Array(t), o = 0;
  return e.forEach(n => {
    r.set(n, o), o += n.length;
  }), r;
}

function ft(e, t) {
  return _(l.encode(e), new Uint8Array([ 0 ]), t);
}

function Re(e, t, r) {
  if (t < 0 || t >= le) throw RangeError(`value must be >= 0 and <= ${le - 1}. Received ${t}`);
  e.set([ t >>> 24, t >>> 16, t >>> 8, t & 255 ], r);
}

function he(e) {
  let t = Math.floor(e / le), r = e % le, o = new Uint8Array(8);
  return Re(o, t, 0), Re(o, r, 4), o;
}

function ye(e) {
  let t = new Uint8Array(4);
  return Re(t, e), t;
}

function we(e) {
  return _(ye(e.length), e);
}

async function mt(e, t, r) {
  let o = Math.ceil((t >> 3) / 32), n = new Uint8Array(o * 32);
  for (let a = 0; a < o; a++) {
    let i = new Uint8Array(4 + e.length + r.length);
    i.set(ye(a + 1)), i.set(e, 4), i.set(r, 4 + e.length), n.set(await ue("sha256", i), a * 32);
  }
  return n.slice(0, t >> 3);
}

var l, C, le = 4294967296;

var v = la(() => {
  Ie();
  l = new TextEncoder, C = new TextDecoder;
});

var ur = e => {
  let t = e;
  if (typeof t === "string") t = l.encode(t);
  let r = 32768, o = [];
  for (let n = 0; n < t.length; n += r) o.push(String.fromCharCode.apply(null, t.subarray(n, n + r)));
  return btoa(o.join(""));
}, w = e => ur(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"), lr = e => {
  let t = atob(e), r = new Uint8Array(t.length);
  for (let o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
  return r;
}, S = e => {
  let t = e;
  if (t instanceof Uint8Array) t = C.decode(t);
  t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
  try {
    return lr(t);
  } catch (r) {
    throw TypeError("The input to be decoded is not correctly encoded.");
  }
};

var P = la(() => {
  v();
});

var N, Q, f, re, s, y, Te, Ue, De;

var E = la(() => {
  N = class N extends Error {
    static get code() {
      return "ERR_JOSE_GENERIC";
    }
    constructor(e) {
      var t;
      super(e);
      this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, (t = Error.captureStackTrace) === null || t === void 0 || t.call(Error, this, this.constructor);
    }
  };
  Q = class Q extends N {
    constructor() {
      super(...arguments);
      this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
    }
    static get code() {
      return "ERR_JOSE_ALG_NOT_ALLOWED";
    }
  };
  f = class f extends N {
    constructor() {
      super(...arguments);
      this.code = "ERR_JOSE_NOT_SUPPORTED";
    }
    static get code() {
      return "ERR_JOSE_NOT_SUPPORTED";
    }
  };
  re = class re extends N {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWE_DECRYPTION_FAILED", this.message = "decryption operation failed";
    }
    static get code() {
      return "ERR_JWE_DECRYPTION_FAILED";
    }
  };
  s = class s extends N {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWE_INVALID";
    }
    static get code() {
      return "ERR_JWE_INVALID";
    }
  };
  y = class y extends N {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWS_INVALID";
    }
    static get code() {
      return "ERR_JWS_INVALID";
    }
  };
  Te = class Te extends N {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWT_INVALID";
    }
    static get code() {
      return "ERR_JWT_INVALID";
    }
  };
  Ue = class Ue extends N {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWK_INVALID";
    }
    static get code() {
      return "ERR_JWK_INVALID";
    }
  };
  De = class De extends N {
    constructor() {
      super(...arguments);
      this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED", this.message = "signature verification failed";
    }
    static get code() {
      return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    }
  };
});

var k;

var Ee = la(() => {
  W();
  k = p.getRandomValues.bind(p);
});

function Oe(e) {
  switch (e) {
   case "A128GCM":
   case "A128GCMKW":
   case "A192GCM":
   case "A192GCMKW":
   case "A256GCM":
   case "A256GCMKW":
    return 96;

   case "A128CBC-HS256":
   case "A192CBC-HS384":
   case "A256CBC-HS512":
    return 128;

   default:
    throw new f(`Unsupported JWE Algorithm: ${e}`);
  }
}

var Se = e => k(new Uint8Array(Oe(e) >> 3));

var Ae = la(() => {
  E();
  Ee();
});

var yr = (e, t) => {
  if (t.length << 3 !== Oe(e)) throw new s("Invalid Initialization Vector length");
}, ge;

var Me = la(() => {
  E();
  Ae();
  ge = yr;
});

var wr = (e, t) => {
  let r = e.byteLength << 3;
  if (r !== t) throw new s(`Invalid Content Encryption Key length. Expected ${t} bits, got ${r} bits`);
}, j;

var Ne = la(() => {
  E();
  j = wr;
});

var Er = (e, t) => {
  if (!(e instanceof Uint8Array)) throw TypeError("First argument must be a buffer");
  if (!(t instanceof Uint8Array)) throw TypeError("Second argument must be a buffer");
  if (e.length !== t.length) throw TypeError("Input buffers must have the same length");
  let r = e.length, o = 0, n = -1;
  while (++n < r) o |= e[n] ^ t[n];
  return o === 0;
}, ut;

var lt = la(() => {
  ut = Er;
});

function x(e, t = "algorithm.name") {
  return TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`);
}

function B(e, t) {
  return e.name === t;
}

function be(e) {
  return parseInt(e.name.slice(4), 10);
}

function Sr(e) {
  switch (e) {
   case "ES256":
    return "P-256";

   case "ES384":
    return "P-384";

   case "ES512":
    return "P-521";

   default:
    throw Error("unreachable");
  }
}

function ht(e, t) {
  if (t.length && !t.some(r => e.usages.includes(r))) {
    let r = "CryptoKey does not support this operation, its usages must include ";
    if (t.length > 2) {
      let o = t.pop();
      r += `one of ${t.join(", ")}, or ${o}.`;
    } else if (t.length === 2) r += `one of ${t[0]} or ${t[1]}.`; else r += `${t[0]}.`;
    throw TypeError(r);
  }
}

function yt(e, t, ...r) {
  switch (t) {
   case "HS256":
   case "HS384":
   case "HS512":
    {
      if (!B(e.algorithm, "HMAC")) throw x("HMAC");
      let o = parseInt(t.slice(2), 10);
      if (be(e.algorithm.hash) !== o) throw x(`SHA-${o}`, "algorithm.hash");
      break;
    }

   case "RS256":
   case "RS384":
   case "RS512":
    {
      if (!B(e.algorithm, "RSASSA-PKCS1-v1_5")) throw x("RSASSA-PKCS1-v1_5");
      let o = parseInt(t.slice(2), 10);
      if (be(e.algorithm.hash) !== o) throw x(`SHA-${o}`, "algorithm.hash");
      break;
    }

   case "PS256":
   case "PS384":
   case "PS512":
    {
      if (!B(e.algorithm, "RSA-PSS")) throw x("RSA-PSS");
      let o = parseInt(t.slice(2), 10);
      if (be(e.algorithm.hash) !== o) throw x(`SHA-${o}`, "algorithm.hash");
      break;
    }

   case "EdDSA":
    {
      if (e.algorithm.name !== "Ed25519" && e.algorithm.name !== "Ed448") throw x("Ed25519 or Ed448");
      break;
    }

   case "ES256":
   case "ES384":
   case "ES512":
    {
      if (!B(e.algorithm, "ECDSA")) throw x("ECDSA");
      let o = Sr(t);
      if (e.algorithm.namedCurve !== o) throw x(o, "algorithm.namedCurve");
      break;
    }

   default:
    throw TypeError("CryptoKey does not support this operation");
  }
  ht(e, r);
}

function J(e, t, ...r) {
  switch (t) {
   case "A128GCM":
   case "A192GCM":
   case "A256GCM":
    {
      if (!B(e.algorithm, "AES-GCM")) throw x("AES-GCM");
      let o = parseInt(t.slice(1, 4), 10);
      if (e.algorithm.length !== o) throw x(o, "algorithm.length");
      break;
    }

   case "A128KW":
   case "A192KW":
   case "A256KW":
    {
      if (!B(e.algorithm, "AES-KW")) throw x("AES-KW");
      let o = parseInt(t.slice(1, 4), 10);
      if (e.algorithm.length !== o) throw x(o, "algorithm.length");
      break;
    }

   case "ECDH":
    {
      switch (e.algorithm.name) {
       case "ECDH":
       case "X25519":
       case "X448":
        break;

       default:
        throw x("ECDH, X25519, or X448");
      }
      break;
    }

   case "PBES2-HS256+A128KW":
   case "PBES2-HS384+A192KW":
   case "PBES2-HS512+A256KW":
    if (!B(e.algorithm, "PBKDF2")) throw x("PBKDF2");
    break;

   case "RSA-OAEP":
   case "RSA-OAEP-256":
   case "RSA-OAEP-384":
   case "RSA-OAEP-512":
    {
      if (!B(e.algorithm, "RSA-OAEP")) throw x("RSA-OAEP");
      let o = parseInt(t.slice(9), 10) || 1;
      if (be(e.algorithm.hash) !== o) throw x(`SHA-${o}`, "algorithm.hash");
      break;
    }

   default:
    throw TypeError("CryptoKey does not support this operation");
  }
  ht(e, r);
}

var L = () => {};

function wt(e, t, ...r) {
  if (r.length > 2) {
    let o = r.pop();
    e += `one of type ${r.join(", ")}, or ${o}.`;
  } else if (r.length === 2) e += `one of type ${r[0]} or ${r[1]}.`; else e += `of type ${r[0]}.`;
  if (t == null) e += ` Received ${t}`; else if (typeof t === "function" && t.name) e += ` Received function ${t.name}`; else if (typeof t === "object" && t != null) {
    if (t.constructor && t.constructor.name) e += ` Received an instance of ${t.constructor.name}`;
  }
  return e;
}

function Be(e, t, ...r) {
  return wt(`Key for the ${e} algorithm must be `, t, ...r);
}

var A = (e, ...t) => wt("Key must be ", e, ...t);

var O = () => {};

var Le = e => g(e), m;

var M = la(() => {
  W();
  m = [ "CryptoKey" ];
});

async function Ar(e, t, r, o, n, a) {
  if (!(t instanceof Uint8Array)) throw TypeError(A(t, "Uint8Array"));
  let i = parseInt(e.slice(1, 4), 10), c = await p.subtle.importKey("raw", t.subarray(i >> 3), "AES-CBC", !1, [ "decrypt" ]), d = await p.subtle.importKey("raw", t.subarray(0, i >> 3), {
    hash: `SHA-${i << 1}`,
    name: "HMAC"
  }, !1, [ "sign" ]), u = _(a, o, r, he(a.length << 3)), h = new Uint8Array((await p.subtle.sign("HMAC", d, u)).slice(0, i >> 3)), I;
  try {
    I = ut(n, h);
  } catch (H) {}
  if (!I) throw new re;
  let b;
  try {
    b = new Uint8Array(await p.subtle.decrypt({
      iv: o,
      name: "AES-CBC"
    }, c, r));
  } catch (H) {}
  if (!b) throw new re;
  return b;
}

async function gr(e, t, r, o, n, a) {
  let i;
  if (t instanceof Uint8Array) i = await p.subtle.importKey("raw", t, "AES-GCM", !1, [ "decrypt" ]); else J(t, e, "decrypt"), 
  i = t;
  try {
    return new Uint8Array(await p.subtle.decrypt({
      additionalData: a,
      iv: o,
      name: "AES-GCM",
      tagLength: 128
    }, i, _(r, n)));
  } catch (c) {
    throw new re;
  }
}

var br = async (e, t, r, o, n, a) => {
  if (!g(t) && !(t instanceof Uint8Array)) throw TypeError(A(t, ...m, "Uint8Array"));
  switch (ge(e, o), e) {
   case "A128CBC-HS256":
   case "A192CBC-HS384":
   case "A256CBC-HS512":
    if (t instanceof Uint8Array) j(t, parseInt(e.slice(-3), 10));
    return Ar(e, t, r, o, n, a);

   case "A128GCM":
   case "A192GCM":
   case "A256GCM":
    if (t instanceof Uint8Array) j(t, parseInt(e.slice(1, 4), 10));
    return gr(e, t, r, o, n, a);

   default:
    throw new f("Unsupported JWE Content Encryption Algorithm");
  }
}, Ke;

var $e = la(() => {
  v();
  Me();
  Ne();
  lt();
  E();
  W();
  L();
  O();
  M();
  Ke = br;
});

var Et = async () => {
  throw new f('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `inflateRaw` decrypt option to provide Inflate Raw implementation.');
}, St = async () => {
  throw new f('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.');
};

var Ge = la(() => {
  E();
});

var Kr = (...e) => {
  let t = e.filter(Boolean);
  if (t.length === 0 || t.length === 1) return !0;
  let r;
  for (let o of t) {
    let n = Object.keys(o);
    if (!r || r.size === 0) {
      r = new Set(n);
      continue;
    }
    for (let a of n) {
      if (r.has(a)) return !1;
      r.add(a);
    }
  }
  return !0;
}, G;

var oe = la(() => {
  G = Kr;
});

function Cr(e) {
  return typeof e === "object" && e !== null;
}

function K(e) {
  if (!Cr(e) || Object.prototype.toString.call(e) !== "[object Object]") return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  let t = e;
  while (Object.getPrototypeOf(t) !== null) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}

var F = () => {};

var _r, ee;

var Fe = la(() => {
  _r = [ {
    hash: "SHA-256",
    name: "HMAC"
  }, !0, [ "sign" ] ], ee = _r;
});

function At(e, t) {
  if (e.algorithm.length !== parseInt(t.slice(1, 4), 10)) throw TypeError(`Invalid key size for alg: ${t}`);
}

function gt(e, t, r) {
  if (g(e)) return J(e, t, r), e;
  if (e instanceof Uint8Array) return p.subtle.importKey("raw", e, "AES-KW", !0, [ r ]);
  throw TypeError(A(e, ...m, "Uint8Array"));
}

var ne = async (e, t, r) => {
  let o = await gt(t, e, "wrapKey");
  At(o, e);
  let n = await p.subtle.importKey("raw", r, ...ee);
  return new Uint8Array(await p.subtle.wrapKey("raw", n, o, "AES-KW"));
}, ae = async (e, t, r) => {
  let o = await gt(t, e, "unwrapKey");
  At(o, e);
  let n = await p.subtle.unwrapKey("raw", r, o, "AES-KW", ...ee);
  return new Uint8Array(await p.subtle.exportKey("raw", n));
};

var Ce = la(() => {
  Fe();
  W();
  L();
  O();
  M();
});

async function _e(e, t, r, o, n = new Uint8Array(0), a = new Uint8Array(0)) {
  if (!g(e)) throw TypeError(A(e, ...m));
  if (J(e, "ECDH"), !g(t)) throw TypeError(A(t, ...m));
  J(t, "ECDH", "deriveBits");
  let i = _(we(l.encode(r)), we(n), we(a), ye(o)), c;
  if (e.algorithm.name === "X25519") c = 256; else if (e.algorithm.name === "X448") c = 448; else c = Math.ceil(parseInt(e.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
  let d = new Uint8Array(await p.subtle.deriveBits({
    name: e.algorithm.name,
    public: e
  }, t, c));
  return mt(d, o, i);
}

async function bt(e) {
  if (!g(e)) throw TypeError(A(e, ...m));
  return p.subtle.generateKey(e.algorithm, !0, [ "deriveBits" ]);
}

function xe(e) {
  if (!g(e)) throw TypeError(A(e, ...m));
  return [ "P-256", "P-384", "P-521" ].includes(e.algorithm.namedCurve) || e.algorithm.name === "X25519" || e.algorithm.name === "X448";
}

var Ve = la(() => {
  v();
  W();
  L();
  O();
  M();
});

function ze(e) {
  if (!(e instanceof Uint8Array) || e.length < 8) throw new s("PBES2 Salt Input must be 8 or more octets");
}

var Ct = la(() => {
  E();
});

function xr(e, t) {
  if (e instanceof Uint8Array) return p.subtle.importKey("raw", e, "PBKDF2", !1, [ "deriveBits" ]);
  if (g(e)) return J(e, t, "deriveBits", "deriveKey"), e;
  throw TypeError(A(e, ...m, "Uint8Array"));
}

async function _t(e, t, r, o) {
  ze(e);
  let n = ft(t, e), a = parseInt(t.slice(13, 16), 10), i = {
    hash: `SHA-${t.slice(8, 11)}`,
    iterations: r,
    name: "PBKDF2",
    salt: n
  }, c = {
    length: a,
    name: "AES-KW"
  }, d = await xr(o, t);
  if (d.usages.includes("deriveBits")) return new Uint8Array(await p.subtle.deriveBits(i, d, a));
  if (d.usages.includes("deriveKey")) return p.subtle.deriveKey(i, d, c, !1, [ "wrapKey", "unwrapKey" ]);
  throw TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
}

var xt = async (e, t, r, o = 2048, n = k(new Uint8Array(16))) => {
  let a = await _t(n, e, o, t);
  return {
    encryptedKey: await ne(e.slice(-6), a, r),
    p2c: o,
    p2s: w(n)
  };
}, Ht = async (e, t, r, o, n) => {
  let a = await _t(n, e, o, t);
  return ae(e.slice(-6), a, r);
};

var Xe = la(() => {
  Ee();
  v();
  P();
  Ce();
  Ct();
  W();
  L();
  O();
  M();
});

function te(e) {
  switch (e) {
   case "RSA-OAEP":
   case "RSA-OAEP-256":
   case "RSA-OAEP-384":
   case "RSA-OAEP-512":
    return "RSA-OAEP";

   default:
    throw new f(`alg ${e} is not supported either by JOSE or your javascript runtime`);
  }
}

var Wt = la(() => {
  E();
});

var q = (e, t) => {
  if (e.startsWith("RS") || e.startsWith("PS")) {
    let {modulusLength: r} = t.algorithm;
    if (typeof r !== "number" || r < 2048) throw TypeError(`${e} requires key modulusLength to be 2048 bits or larger`);
  }
};

var He = () => {};

var vt = async (e, t, r) => {
  if (!g(t)) throw TypeError(A(t, ...m));
  if (J(t, e, "encrypt", "wrapKey"), q(e, t), t.usages.includes("encrypt")) return new Uint8Array(await p.subtle.encrypt(te(e), t, r));
  if (t.usages.includes("wrapKey")) {
    let o = await p.subtle.importKey("raw", r, ...ee);
    return new Uint8Array(await p.subtle.wrapKey("raw", o, t, te(e)));
  }
  throw TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');
}, Pt = async (e, t, r) => {
  if (!g(t)) throw TypeError(A(t, ...m));
  if (J(t, e, "decrypt", "unwrapKey"), q(e, t), t.usages.includes("decrypt")) return new Uint8Array(await p.subtle.decrypt(te(e), t, r));
  if (t.usages.includes("unwrapKey")) {
    let o = await p.subtle.unwrapKey("raw", r, t, te(e), ...ee);
    return new Uint8Array(await p.subtle.exportKey("raw", o));
  }
  throw TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');
};

var Ye = la(() => {
  Wt();
  Fe();
  W();
  L();
  He();
  O();
  M();
});

function ie(e) {
  switch (e) {
   case "A128GCM":
    return 128;

   case "A192GCM":
    return 192;

   case "A256GCM":
   case "A128CBC-HS256":
    return 256;

   case "A192CBC-HS384":
    return 384;

   case "A256CBC-HS512":
    return 512;

   default:
    throw new f(`Unsupported JWE Algorithm: ${e}`);
  }
}

var V = e => k(new Uint8Array(ie(e) >> 3));

var We = la(() => {
  E();
  Ee();
});

function Hr(e) {
  let t, r;
  switch (e.kty) {
   case "oct":
    {
      switch (e.alg) {
       case "HS256":
       case "HS384":
       case "HS512":
        t = {
          name: "HMAC",
          hash: `SHA-${e.alg.slice(-3)}`
        }, r = [ "sign", "verify" ];
        break;

       case "A128CBC-HS256":
       case "A192CBC-HS384":
       case "A256CBC-HS512":
        throw new f(`${e.alg} keys cannot be imported as CryptoKey instances`);

       case "A128GCM":
       case "A192GCM":
       case "A256GCM":
       case "A128GCMKW":
       case "A192GCMKW":
       case "A256GCMKW":
        t = {
          name: "AES-GCM"
        }, r = [ "encrypt", "decrypt" ];
        break;

       case "A128KW":
       case "A192KW":
       case "A256KW":
        t = {
          name: "AES-KW"
        }, r = [ "wrapKey", "unwrapKey" ];
        break;

       case "PBES2-HS256+A128KW":
       case "PBES2-HS384+A192KW":
       case "PBES2-HS512+A256KW":
        t = {
          name: "PBKDF2"
        }, r = [ "deriveBits" ];
        break;

       default:
        throw new f('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }

   case "RSA":
    {
      switch (e.alg) {
       case "PS256":
       case "PS384":
       case "PS512":
        t = {
          name: "RSA-PSS",
          hash: `SHA-${e.alg.slice(-3)}`
        }, r = e.d ? [ "sign" ] : [ "verify" ];
        break;

       case "RS256":
       case "RS384":
       case "RS512":
        t = {
          name: "RSASSA-PKCS1-v1_5",
          hash: `SHA-${e.alg.slice(-3)}`
        }, r = e.d ? [ "sign" ] : [ "verify" ];
        break;

       case "RSA-OAEP":
       case "RSA-OAEP-256":
       case "RSA-OAEP-384":
       case "RSA-OAEP-512":
        t = {
          name: "RSA-OAEP",
          hash: `SHA-${parseInt(e.alg.slice(-3), 10) || 1}`
        }, r = e.d ? [ "decrypt", "unwrapKey" ] : [ "encrypt", "wrapKey" ];
        break;

       default:
        throw new f('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }

   case "EC":
    {
      switch (e.alg) {
       case "ES256":
        t = {
          name: "ECDSA",
          namedCurve: "P-256"
        }, r = e.d ? [ "sign" ] : [ "verify" ];
        break;

       case "ES384":
        t = {
          name: "ECDSA",
          namedCurve: "P-384"
        }, r = e.d ? [ "sign" ] : [ "verify" ];
        break;

       case "ES512":
        t = {
          name: "ECDSA",
          namedCurve: "P-521"
        }, r = e.d ? [ "sign" ] : [ "verify" ];
        break;

       case "ECDH-ES":
       case "ECDH-ES+A128KW":
       case "ECDH-ES+A192KW":
       case "ECDH-ES+A256KW":
        t = {
          name: "ECDH",
          namedCurve: e.crv
        }, r = e.d ? [ "deriveBits" ] : [];
        break;

       default:
        throw new f('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }

   case "OKP":
    {
      switch (e.alg) {
       case "EdDSA":
        t = {
          name: e.crv
        }, r = e.d ? [ "sign" ] : [ "verify" ];
        break;

       case "ECDH-ES":
       case "ECDH-ES+A128KW":
       case "ECDH-ES+A192KW":
       case "ECDH-ES+A256KW":
        t = {
          name: e.crv
        }, r = e.d ? [ "deriveBits" ] : [];
        break;

       default:
        throw new f('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }

   default:
    throw new f('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return {
    algorithm: t,
    keyUsages: r
  };
}

var Wr = async e => {
  var t, r;
  if (!e.alg) throw TypeError('"alg" argument is required when "jwk.alg" is not present');
  let {algorithm: o, keyUsages: n} = Hr(e), a = [ o, (t = e.ext) !== null && t !== void 0 ? t : !1, (r = e.key_ops) !== null && r !== void 0 ? r : n ];
  if (o.name === "PBKDF2") return p.subtle.importKey("raw", S(e.k), ...a);
  let i = {
    ...e
  };
  return delete i.alg, delete i.use, p.subtle.importKey("jwk", i, ...a);
}, qe;

var Jt = la(() => {
  W();
  E();
  P();
  qe = Wr;
});

async function Ze(e, t, r) {
  var o;
  if (!K(e)) throw TypeError("JWK must be an object");
  switch (t || (t = e.alg), e.kty) {
   case "oct":
    if (typeof e.k !== "string" || !e.k) throw TypeError('missing "k" (Key Value) Parameter value');
    if (r !== null && r !== void 0 || (r = e.ext !== !0), r) return qe({
      ...e,
      alg: t,
      ext: (o = e.ext) !== null && o !== void 0 ? o : !1
    });
    return S(e.k);

   case "RSA":
    if (e.oth !== void 0) throw new f('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');

   case "EC":
   case "OKP":
    return qe({
      ...e,
      alg: t
    });

   default:
    throw new f('Unsupported "kty" (Key Type) Parameter value');
  }
}

var Qe = la(() => {
  P();
  Jt();
  E();
  F();
});

var vr = (e, t) => {
  if (t instanceof Uint8Array) return;
  if (!Le(t)) throw TypeError(Be(e, t, ...m, "Uint8Array"));
  if (t.type !== "secret") throw TypeError(`${m.join(" or ")} instances for symmetric algorithms must be of type "secret"`);
}, Pr = (e, t, r) => {
  if (!Le(t)) throw TypeError(Be(e, t, ...m));
  if (t.type === "secret") throw TypeError(`${m.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
  if (r === "sign" && t.type === "public") throw TypeError(`${m.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
  if (r === "decrypt" && t.type === "public") throw TypeError(`${m.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
  if (t.algorithm && r === "verify" && t.type === "private") throw TypeError(`${m.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
  if (t.algorithm && r === "encrypt" && t.type === "private") throw TypeError(`${m.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`);
}, Jr = (e, t, r) => {
  if (e.startsWith("HS") || e === "dir" || e.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(e)) vr(e, t); else Pr(e, t, r);
}, z;

var se = la(() => {
  O();
  M();
  z = Jr;
});

async function Ir(e, t, r, o, n) {
  if (!(r instanceof Uint8Array)) throw TypeError(A(r, "Uint8Array"));
  let a = parseInt(e.slice(1, 4), 10), i = await p.subtle.importKey("raw", r.subarray(a >> 3), "AES-CBC", !1, [ "encrypt" ]), c = await p.subtle.importKey("raw", r.subarray(0, a >> 3), {
    hash: `SHA-${a << 1}`,
    name: "HMAC"
  }, !1, [ "sign" ]), d = new Uint8Array(await p.subtle.encrypt({
    iv: o,
    name: "AES-CBC"
  }, i, t)), u = _(n, o, d, he(n.length << 3)), h = new Uint8Array((await p.subtle.sign("HMAC", c, u)).slice(0, a >> 3));
  return {
    ciphertext: d,
    tag: h
  };
}

async function Rr(e, t, r, o, n) {
  let a;
  if (r instanceof Uint8Array) a = await p.subtle.importKey("raw", r, "AES-GCM", !1, [ "encrypt" ]); else J(r, e, "encrypt"), 
  a = r;
  let i = new Uint8Array(await p.subtle.encrypt({
    additionalData: n,
    iv: o,
    name: "AES-GCM",
    tagLength: 128
  }, a, t)), c = i.slice(-16);
  return {
    ciphertext: i.slice(0, -16),
    tag: c
  };
}

var Tr = async (e, t, r, o, n) => {
  if (!g(r) && !(r instanceof Uint8Array)) throw TypeError(A(r, ...m, "Uint8Array"));
  switch (ge(e, o), e) {
   case "A128CBC-HS256":
   case "A192CBC-HS384":
   case "A256CBC-HS512":
    if (r instanceof Uint8Array) j(r, parseInt(e.slice(-3), 10));
    return Ir(e, t, r, o, n);

   case "A128GCM":
   case "A192GCM":
   case "A256GCM":
    if (r instanceof Uint8Array) j(r, parseInt(e.slice(1, 4), 10));
    return Rr(e, t, r, o, n);

   default:
    throw new f("Unsupported JWE Content Encryption Algorithm");
  }
}, ce;

var ke = la(() => {
  v();
  Me();
  Ne();
  W();
  L();
  O();
  E();
  M();
  ce = Tr;
});

async function It(e, t, r, o) {
  let n = e.slice(0, 7);
  o || (o = Se(n));
  let {ciphertext: a, tag: i} = await ce(n, r, t, o, new Uint8Array(0));
  return {
    encryptedKey: a,
    iv: w(o),
    tag: w(i)
  };
}

async function Rt(e, t, r, o, n) {
  let a = e.slice(0, 7);
  return Ke(a, t, r, o, n, new Uint8Array(0));
}

var je = la(() => {
  ke();
  $e();
  Ae();
  P();
});

async function Ur(e, t, r, o, n) {
  switch (z(e, t, "decrypt"), e) {
   case "dir":
    {
      if (r !== void 0) throw new s("Encountered unexpected JWE Encrypted Key");
      return t;
    }

   case "ECDH-ES":
    if (r !== void 0) throw new s("Encountered unexpected JWE Encrypted Key");

   case "ECDH-ES+A128KW":
   case "ECDH-ES+A192KW":
   case "ECDH-ES+A256KW":
    {
      if (!K(o.epk)) throw new s('JOSE Header "epk" (Ephemeral Public Key) missing or invalid');
      if (!xe(t)) throw new f("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      let a = await Ze(o.epk, e), i, c;
      if (o.apu !== void 0) {
        if (typeof o.apu !== "string") throw new s('JOSE Header "apu" (Agreement PartyUInfo) invalid');
        try {
          i = S(o.apu);
        } catch (u) {
          throw new s("Failed to base64url decode the apu");
        }
      }
      if (o.apv !== void 0) {
        if (typeof o.apv !== "string") throw new s('JOSE Header "apv" (Agreement PartyVInfo) invalid');
        try {
          c = S(o.apv);
        } catch (u) {
          throw new s("Failed to base64url decode the apv");
        }
      }
      let d = await _e(a, t, e === "ECDH-ES" ? o.enc : e, e === "ECDH-ES" ? ie(o.enc) : parseInt(e.slice(-5, -2), 10), i, c);
      if (e === "ECDH-ES") return d;
      if (r === void 0) throw new s("JWE Encrypted Key missing");
      return ae(e.slice(-6), d, r);
    }

   case "RSA1_5":
   case "RSA-OAEP":
   case "RSA-OAEP-256":
   case "RSA-OAEP-384":
   case "RSA-OAEP-512":
    {
      if (r === void 0) throw new s("JWE Encrypted Key missing");
      return Pt(e, t, r);
    }

   case "PBES2-HS256+A128KW":
   case "PBES2-HS384+A192KW":
   case "PBES2-HS512+A256KW":
    {
      if (r === void 0) throw new s("JWE Encrypted Key missing");
      if (typeof o.p2c !== "number") throw new s('JOSE Header "p2c" (PBES2 Count) missing or invalid');
      let a = (n === null || n === void 0 ? void 0 : n.maxPBES2Count) || 1e4;
      if (o.p2c > a) throw new s('JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds');
      if (typeof o.p2s !== "string") throw new s('JOSE Header "p2s" (PBES2 Salt) missing or invalid');
      let i;
      try {
        i = S(o.p2s);
      } catch (c) {
        throw new s("Failed to base64url decode the p2s");
      }
      return Ht(e, t, r, o.p2c, i);
    }

   case "A128KW":
   case "A192KW":
   case "A256KW":
    {
      if (r === void 0) throw new s("JWE Encrypted Key missing");
      return ae(e, t, r);
    }

   case "A128GCMKW":
   case "A192GCMKW":
   case "A256GCMKW":
    {
      if (r === void 0) throw new s("JWE Encrypted Key missing");
      if (typeof o.iv !== "string") throw new s('JOSE Header "iv" (Initialization Vector) missing or invalid');
      if (typeof o.tag !== "string") throw new s('JOSE Header "tag" (Authentication Tag) missing or invalid');
      let a;
      try {
        a = S(o.iv);
      } catch (c) {
        throw new s("Failed to base64url decode the iv");
      }
      let i;
      try {
        i = S(o.tag);
      } catch (c) {
        throw new s("Failed to base64url decode the tag");
      }
      return Rt(e, t, r, a, i);
    }

   default:
    throw new f('Invalid or unsupported "alg" (JWE Algorithm) header value');
  }
}

var Tt;

var Ut = la(() => {
  Ce();
  Ve();
  Xe();
  Ye();
  P();
  E();
  We();
  Qe();
  se();
  F();
  je();
  Tt = Ur;
});

function Dr(e, t, r, o, n) {
  if (n.crit !== void 0 && o.crit === void 0) throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
  if (!o || o.crit === void 0) return new Set;
  if (!Array.isArray(o.crit) || o.crit.length === 0 || o.crit.some(i => typeof i !== "string" || i.length === 0)) throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  let a;
  if (r !== void 0) a = new Map([ ...Object.entries(r), ...t.entries() ]); else a = t;
  for (let i of o.crit) {
    if (!a.has(i)) throw new f(`Extension Header Parameter "${i}" is not recognized`);
    if (n[i] === void 0) throw new e(`Extension Header Parameter "${i}" is missing`); else if (a.get(i) && o[i] === void 0) throw new e(`Extension Header Parameter "${i}" MUST be integrity protected`);
  }
  return new Set(o.crit);
}

var X;

var pe = la(() => {
  E();
  X = Dr;
});

var Or = (e, t) => {
  if (t !== void 0 && (!Array.isArray(t) || t.some(r => typeof r !== "string"))) throw TypeError(`"${e}" option must be an array of strings`);
  if (!t) return;
  return new Set(t);
}, de;

var et = la(() => {
  de = Or;
});

async function Dt(e, t, r) {
  var o;
  if (!K(e)) throw new s("Flattened JWE must be an object");
  if (e.protected === void 0 && e.header === void 0 && e.unprotected === void 0) throw new s("JOSE Header missing");
  if (typeof e.iv !== "string") throw new s("JWE Initialization Vector missing or incorrect type");
  if (typeof e.ciphertext !== "string") throw new s("JWE Ciphertext missing or incorrect type");
  if (typeof e.tag !== "string") throw new s("JWE Authentication Tag missing or incorrect type");
  if (e.protected !== void 0 && typeof e.protected !== "string") throw new s("JWE Protected Header incorrect type");
  if (e.encrypted_key !== void 0 && typeof e.encrypted_key !== "string") throw new s("JWE Encrypted Key incorrect type");
  if (e.aad !== void 0 && typeof e.aad !== "string") throw new s("JWE AAD incorrect type");
  if (e.header !== void 0 && !K(e.header)) throw new s("JWE Shared Unprotected Header incorrect type");
  if (e.unprotected !== void 0 && !K(e.unprotected)) throw new s("JWE Per-Recipient Unprotected Header incorrect type");
  let n;
  if (e.protected) try {
    let R = S(e.protected);
    n = JSON.parse(C.decode(R));
  } catch (R) {
    throw new s("JWE Protected Header is invalid");
  }
  if (!G(n, e.header, e.unprotected)) throw new s("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
  let a = {
    ...n,
    ...e.header,
    ...e.unprotected
  };
  if (X(s, new Map, r === null || r === void 0 ? void 0 : r.crit, n, a), a.zip !== void 0) {
    if (!n || !n.zip) throw new s('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
    if (a.zip !== "DEF") throw new f('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
  }
  let {alg: i, enc: c} = a;
  if (typeof i !== "string" || !i) throw new s("missing JWE Algorithm (alg) in JWE Header");
  if (typeof c !== "string" || !c) throw new s("missing JWE Encryption Algorithm (enc) in JWE Header");
  let d = r && de("keyManagementAlgorithms", r.keyManagementAlgorithms), u = r && de("contentEncryptionAlgorithms", r.contentEncryptionAlgorithms);
  if (d && !d.has(i)) throw new Q('"alg" (Algorithm) Header Parameter not allowed');
  if (u && !u.has(c)) throw new Q('"enc" (Encryption Algorithm) Header Parameter not allowed');
  let h;
  if (e.encrypted_key !== void 0) try {
    h = S(e.encrypted_key);
  } catch (R) {
    throw new s("Failed to base64url decode the encrypted_key");
  }
  let I = !1;
  if (typeof t === "function") t = await t(n, e), I = !0;
  let b;
  try {
    b = await Tt(i, t, h, a, r);
  } catch (R) {
    if (R instanceof TypeError || R instanceof s || R instanceof f) throw R;
    b = V(c);
  }
  let H, T;
  try {
    H = S(e.iv);
  } catch (R) {
    throw new s("Failed to base64url decode the iv");
  }
  try {
    T = S(e.tag);
  } catch (R) {
    throw new s("Failed to base64url decode the tag");
  }
  let U = l.encode((o = e.protected) !== null && o !== void 0 ? o : ""), D;
  if (e.aad !== void 0) D = _(U, l.encode("."), l.encode(e.aad)); else D = U;
  let dt;
  try {
    dt = S(e.ciphertext);
  } catch (R) {
    throw new s("Failed to base64url decode the ciphertext");
  }
  let Je = await Ke(c, b, dt, H, T, D);
  if (a.zip === "DEF") Je = await ((r === null || r === void 0 ? void 0 : r.inflateRaw) || Et)(Je);
  let Z = {
    plaintext: Je
  };
  if (e.protected !== void 0) Z.protectedHeader = n;
  if (e.aad !== void 0) try {
    Z.additionalAuthenticatedData = S(e.aad);
  } catch (R) {
    throw new s("Failed to base64url decode the aad");
  }
  if (e.unprotected !== void 0) Z.sharedUnprotectedHeader = e.unprotected;
  if (e.header !== void 0) Z.unprotectedHeader = e.header;
  if (I) return {
    ...Z,
    key: t
  };
  return Z;
}

var Ot = la(() => {
  P();
  $e();
  Ge();
  E();
  oe();
  F();
  Ut();
  v();
  We();
  pe();
  et();
});

async function Mr(e, t, r) {
  if (e instanceof Uint8Array) e = C.decode(e);
  if (typeof e !== "string") throw new s("Compact JWE must be a string or Uint8Array");
  let {0: o, 1: n, 2: a, 3: i, 4: c, length: d} = e.split(".");
  if (d !== 5) throw new s("Invalid Compact JWE");
  let u = await Dt({
    ciphertext: i,
    iv: a || void 0,
    protected: o || void 0,
    tag: c || void 0,
    encrypted_key: n || void 0
  }, t, r), h = {
    plaintext: u.plaintext,
    protectedHeader: u.protectedHeader
  };
  if (typeof t === "function") return {
    ...h,
    key: u.key
  };
  return h;
}

var Mt = la(() => {
  Ot();
  E();
  v();
});

function fe(e, t) {
  let r = `SHA-${e.slice(-3)}`;
  switch (e) {
   case "HS256":
   case "HS384":
   case "HS512":
    return {
      hash: r,
      name: "HMAC"
    };

   case "PS256":
   case "PS384":
   case "PS512":
    return {
      hash: r,
      name: "RSA-PSS",
      saltLength: e.slice(-3) >> 3
    };

   case "RS256":
   case "RS384":
   case "RS512":
    return {
      hash: r,
      name: "RSASSA-PKCS1-v1_5"
    };

   case "ES256":
   case "ES384":
   case "ES512":
    return {
      hash: r,
      name: "ECDSA",
      namedCurve: t.namedCurve
    };

   case "EdDSA":
    return {
      name: t.name
    };

   default:
    throw new f(`alg ${e} is not supported either by JOSE or your javascript runtime`);
  }
}

var tt = la(() => {
  E();
});

function me(e, t, r) {
  if (g(t)) return yt(t, e, r), t;
  if (t instanceof Uint8Array) {
    if (!e.startsWith("HS")) throw TypeError(A(t, ...m));
    return p.subtle.importKey("raw", t, {
      hash: `SHA-${e.slice(-3)}`,
      name: "HMAC"
    }, !1, [ r ]);
  }
  throw TypeError(A(t, ...m, "Uint8Array"));
}

var rt = la(() => {
  W();
  L();
  O();
  M();
});

var Nr = async (e, t, r, o) => {
  let n = await me(e, t, "verify");
  q(e, n);
  let a = fe(e, n.algorithm);
  try {
    return await p.subtle.verify(a, n, r, o);
  } catch (i) {
    return !1;
  }
}, Nt;

var Bt = la(() => {
  tt();
  W();
  He();
  rt();
  Nt = Nr;
});

async function Lt(e, t, r) {
  var o;
  if (!K(e)) throw new y("Flattened JWS must be an object");
  if (e.protected === void 0 && e.header === void 0) throw new y('Flattened JWS must have either of the "protected" or "header" members');
  if (e.protected !== void 0 && typeof e.protected !== "string") throw new y("JWS Protected Header incorrect type");
  if (e.payload === void 0) throw new y("JWS Payload missing");
  if (typeof e.signature !== "string") throw new y("JWS Signature missing or incorrect type");
  if (e.header !== void 0 && !K(e.header)) throw new y("JWS Unprotected Header incorrect type");
  let n = {};
  if (e.protected) try {
    let D = S(e.protected);
    n = JSON.parse(C.decode(D));
  } catch (D) {
    throw new y("JWS Protected Header is invalid");
  }
  if (!G(n, e.header)) throw new y("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  let a = {
    ...n,
    ...e.header
  }, i = X(y, new Map([ [ "b64", !0 ] ]), r === null || r === void 0 ? void 0 : r.crit, n, a), c = !0;
  if (i.has("b64")) {
    if (c = n.b64, typeof c !== "boolean") throw new y('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
  }
  let {alg: d} = a;
  if (typeof d !== "string" || !d) throw new y('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  let u = r && de("algorithms", r.algorithms);
  if (u && !u.has(d)) throw new Q('"alg" (Algorithm) Header Parameter not allowed');
  if (c) {
    if (typeof e.payload !== "string") throw new y("JWS Payload must be a string");
  } else if (typeof e.payload !== "string" && !(e.payload instanceof Uint8Array)) throw new y("JWS Payload must be a string or an Uint8Array instance");
  let h = !1;
  if (typeof t === "function") t = await t(n, e), h = !0;
  z(d, t, "verify");
  let I = _(l.encode((o = e.protected) !== null && o !== void 0 ? o : ""), l.encode("."), typeof e.payload === "string" ? l.encode(e.payload) : e.payload), b;
  try {
    b = S(e.signature);
  } catch (D) {
    throw new y("Failed to base64url decode the signature");
  }
  if (!await Nt(d, t, b, I)) throw new De;
  let T;
  if (c) try {
    T = S(e.payload);
  } catch (D) {
    throw new y("Failed to base64url decode the payload");
  } else if (typeof e.payload === "string") T = l.encode(e.payload); else T = e.payload;
  let U = {
    payload: T
  };
  if (e.protected !== void 0) U.protectedHeader = n;
  if (e.header !== void 0) U.unprotectedHeader = e.header;
  if (h) return {
    ...U,
    key: t
  };
  return U;
}

var $t = la(() => {
  P();
  Bt();
  E();
  v();
  oe();
  F();
  se();
  pe();
  et();
});

async function Br(e, t, r) {
  if (e instanceof Uint8Array) e = C.decode(e);
  if (typeof e !== "string") throw new y("Compact JWS must be a string or Uint8Array");
  let {0: o, 1: n, 2: a, length: i} = e.split(".");
  if (i !== 3) throw new y("Invalid Compact JWS");
  let c = await Lt({
    payload: n,
    protected: o,
    signature: a
  }, t, r), d = {
    payload: c.payload,
    protectedHeader: c.protectedHeader
  };
  if (typeof t === "function") return {
    ...d,
    key: c.key
  };
  return d;
}

var Gt = la(() => {
  $t();
  E();
  v();
});

var Lr = async e => {
  if (e instanceof Uint8Array) return {
    kty: "oct",
    k: w(e)
  };
  if (!g(e)) throw TypeError(A(e, ...m, "Uint8Array"));
  if (!e.extractable) throw TypeError("non-extractable CryptoKey cannot be exported as a JWK");
  let {ext: t, key_ops: r, alg: o, use: n, ...a} = await p.subtle.exportKey("jwk", e);
  return a;
}, Ft;

var Vt = la(() => {
  W();
  O();
  P();
  M();
  Ft = Lr;
});

async function ot(e) {
  return Ft(e);
}

var nt = la(() => {
  Vt();
});

async function $r(e, t, r, o, n = {}) {
  let a, i, c;
  switch (z(e, r, "encrypt"), e) {
   case "dir":
    {
      c = r;
      break;
    }

   case "ECDH-ES":
   case "ECDH-ES+A128KW":
   case "ECDH-ES+A192KW":
   case "ECDH-ES+A256KW":
    {
      if (!xe(r)) throw new f("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      let {apu: d, apv: u} = n, {epk: h} = n;
      h || (h = (await bt(r)).privateKey);
      let {x: I, y: b, crv: H, kty: T} = await ot(h), U = await _e(r, h, e === "ECDH-ES" ? t : e, e === "ECDH-ES" ? ie(t) : parseInt(e.slice(-5, -2), 10), d, u);
      if (i = {
        epk: {
          x: I,
          crv: H,
          kty: T
        }
      }, T === "EC") i.epk.y = b;
      if (d) i.apu = w(d);
      if (u) i.apv = w(u);
      if (e === "ECDH-ES") {
        c = U;
        break;
      }
      c = o || V(t);
      let D = e.slice(-6);
      a = await ne(D, U, c);
      break;
    }

   case "RSA1_5":
   case "RSA-OAEP":
   case "RSA-OAEP-256":
   case "RSA-OAEP-384":
   case "RSA-OAEP-512":
    {
      c = o || V(t), a = await vt(e, r, c);
      break;
    }

   case "PBES2-HS256+A128KW":
   case "PBES2-HS384+A192KW":
   case "PBES2-HS512+A256KW":
    {
      c = o || V(t);
      let {p2c: d, p2s: u} = n;
      ({encryptedKey: a, ...i} = await xt(e, r, c, d, u));
      break;
    }

   case "A128KW":
   case "A192KW":
   case "A256KW":
    {
      c = o || V(t), a = await ne(e, r, c);
      break;
    }

   case "A128GCMKW":
   case "A192GCMKW":
   case "A256GCMKW":
    {
      c = o || V(t);
      let {iv: d} = n;
      ({encryptedKey: a, ...i} = await It(e, r, c, d));
      break;
    }

   default:
    throw new f('Invalid or unsupported "alg" (JWE Algorithm) header value');
  }
  return {
    cek: c,
    encryptedKey: a,
    parameters: i
  };
}

var zt;

var Xt = la(() => {
  Ce();
  Ve();
  Xe();
  Ye();
  P();
  We();
  E();
  nt();
  se();
  je();
  zt = $r;
});

class at {
  constructor(e) {
    if (!(e instanceof Uint8Array)) throw TypeError("plaintext must be an instance of Uint8Array");
    this._plaintext = e;
  }
  setKeyManagementParameters(e) {
    if (this._keyManagementParameters) throw TypeError("setKeyManagementParameters can only be called once");
    return this._keyManagementParameters = e, this;
  }
  setProtectedHeader(e) {
    if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
    return this._protectedHeader = e, this;
  }
  setSharedUnprotectedHeader(e) {
    if (this._sharedUnprotectedHeader) throw TypeError("setSharedUnprotectedHeader can only be called once");
    return this._sharedUnprotectedHeader = e, this;
  }
  setUnprotectedHeader(e) {
    if (this._unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
    return this._unprotectedHeader = e, this;
  }
  setAdditionalAuthenticatedData(e) {
    return this._aad = e, this;
  }
  setContentEncryptionKey(e) {
    if (this._cek) throw TypeError("setContentEncryptionKey can only be called once");
    return this._cek = e, this;
  }
  setInitializationVector(e) {
    if (this._iv) throw TypeError("setInitializationVector can only be called once");
    return this._iv = e, this;
  }
  async encrypt(e, t) {
    if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) throw new s("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
    if (!G(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) throw new s("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
    let r = {
      ...this._protectedHeader,
      ...this._unprotectedHeader,
      ...this._sharedUnprotectedHeader
    };
    if (X(s, new Map, t === null || t === void 0 ? void 0 : t.crit, this._protectedHeader, r), 
    r.zip !== void 0) {
      if (!this._protectedHeader || !this._protectedHeader.zip) throw new s('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
      if (r.zip !== "DEF") throw new f('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
    }
    let {alg: o, enc: n} = r;
    if (typeof o !== "string" || !o) throw new s('JWE "alg" (Algorithm) Header Parameter missing or invalid');
    if (typeof n !== "string" || !n) throw new s('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
    let a;
    if (o === "dir") {
      if (this._cek) throw TypeError("setContentEncryptionKey cannot be called when using Direct Encryption");
    } else if (o === "ECDH-ES") {
      if (this._cek) throw TypeError("setContentEncryptionKey cannot be called when using Direct Key Agreement");
    }
    let i;
    {
      let H;
      if (({cek: i, encryptedKey: a, parameters: H} = await zt(o, n, e, this._cek, this._keyManagementParameters)), 
      H) if (t && Gr in t) if (!this._unprotectedHeader) this.setUnprotectedHeader(H); else this._unprotectedHeader = {
        ...this._unprotectedHeader,
        ...H
      }; else if (!this._protectedHeader) this.setProtectedHeader(H); else this._protectedHeader = {
        ...this._protectedHeader,
        ...H
      };
    }
    this._iv || (this._iv = Se(n));
    let c, d, u;
    if (this._protectedHeader) d = l.encode(w(JSON.stringify(this._protectedHeader))); else d = l.encode("");
    if (this._aad) u = w(this._aad), c = _(d, l.encode("."), l.encode(u)); else c = d;
    let h, I;
    if (r.zip === "DEF") {
      let H = await ((t === null || t === void 0 ? void 0 : t.deflateRaw) || St)(this._plaintext);
      ({ciphertext: h, tag: I} = await ce(n, H, i, this._iv, c));
    } else ({ciphertext: h, tag: I} = await ce(n, this._plaintext, i, this._iv, c));
    let b = {
      ciphertext: w(h),
      iv: w(this._iv),
      tag: w(I)
    };
    if (a) b.encrypted_key = w(a);
    if (u) b.aad = u;
    if (this._protectedHeader) b.protected = C.decode(d);
    if (this._sharedUnprotectedHeader) b.unprotected = this._sharedUnprotectedHeader;
    if (this._unprotectedHeader) b.header = this._unprotectedHeader;
    return b;
  }
}

var Gr;

var Yt = la(() => {
  P();
  ke();
  Ge();
  Ae();
  Xt();
  E();
  oe();
  v();
  pe();
  Gr = Symbol();
});

class qt {
  constructor(e) {
    this._flattened = new at(e);
  }
  setContentEncryptionKey(e) {
    return this._flattened.setContentEncryptionKey(e), this;
  }
  setInitializationVector(e) {
    return this._flattened.setInitializationVector(e), this;
  }
  setProtectedHeader(e) {
    return this._flattened.setProtectedHeader(e), this;
  }
  setKeyManagementParameters(e) {
    return this._flattened.setKeyManagementParameters(e), this;
  }
  async encrypt(e, t) {
    let r = await this._flattened.encrypt(e, t);
    return [ r.protected, r.encrypted_key, r.iv, r.ciphertext, r.tag ].join(".");
  }
}

var Zt = la(() => {
  Yt();
});

var Fr = async (e, t, r) => {
  let o = await me(e, t, "sign");
  q(e, o);
  let n = await p.subtle.sign(fe(e, o.algorithm), o, r);
  return new Uint8Array(n);
}, Qt;

var kt = la(() => {
  tt();
  W();
  He();
  rt();
  Qt = Fr;
});

class it {
  constructor(e) {
    if (!(e instanceof Uint8Array)) throw TypeError("payload must be an instance of Uint8Array");
    this._payload = e;
  }
  setProtectedHeader(e) {
    if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
    return this._protectedHeader = e, this;
  }
  setUnprotectedHeader(e) {
    if (this._unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
    return this._unprotectedHeader = e, this;
  }
  async sign(e, t) {
    if (!this._protectedHeader && !this._unprotectedHeader) throw new y("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
    if (!G(this._protectedHeader, this._unprotectedHeader)) throw new y("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    let r = {
      ...this._protectedHeader,
      ...this._unprotectedHeader
    }, o = X(y, new Map([ [ "b64", !0 ] ]), t === null || t === void 0 ? void 0 : t.crit, this._protectedHeader, r), n = !0;
    if (o.has("b64")) {
      if (n = this._protectedHeader.b64, typeof n !== "boolean") throw new y('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
    let {alg: a} = r;
    if (typeof a !== "string" || !a) throw new y('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    z(a, e, "sign");
    let i = this._payload;
    if (n) i = l.encode(w(i));
    let c;
    if (this._protectedHeader) c = l.encode(w(JSON.stringify(this._protectedHeader))); else c = l.encode("");
    let d = _(c, l.encode("."), i), u = await Qt(a, e, d), h = {
      signature: w(u),
      payload: ""
    };
    if (n) h.payload = C.decode(i);
    if (this._unprotectedHeader) h.header = this._unprotectedHeader;
    if (this._protectedHeader) h.protected = C.decode(c);
    return h;
  }
}

var jt = la(() => {
  P();
  kt();
  oe();
  E();
  v();
  se();
  pe();
});

class ve {
  constructor(e) {
    this._flattened = new it(e);
  }
  setProtectedHeader(e) {
    return this._flattened.setProtectedHeader(e), this;
  }
  async sign(e, t) {
    let r = await this._flattened.sign(e, t);
    if (r.payload === void 0) throw TypeError("use the flattened module for creating JWS with b64: false");
    return `${r.protected}.${r.payload}.${r.signature}`;
  }
}

var st = la(() => {
  jt();
});

var Pe = e => Math.floor(e.getTime() / 1e3);

var er = () => {};

var Vr, ct = e => {
  let t = Vr.exec(e);
  if (!t) throw TypeError("Invalid time period format");
  let r = parseFloat(t[1]);
  switch (t[2].toLowerCase()) {
   case "sec":
   case "secs":
   case "second":
   case "seconds":
   case "s":
    return Math.round(r);

   case "minute":
   case "minutes":
   case "min":
   case "mins":
   case "m":
    return Math.round(r * 60);

   case "hour":
   case "hours":
   case "hr":
   case "hrs":
   case "h":
    return Math.round(r * 3600);

   case "day":
   case "days":
   case "d":
    return Math.round(r * 86400);

   case "week":
   case "weeks":
   case "w":
    return Math.round(r * 604800);

   default:
    return Math.round(r * 31557600);
  }
};

var tr = la(() => {
  Vr = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
});

class pt {
  constructor(e) {
    if (!K(e)) throw TypeError("JWT Claims Set MUST be an object");
    this._payload = e;
  }
  setIssuer(e) {
    return this._payload = {
      ...this._payload,
      iss: e
    }, this;
  }
  setSubject(e) {
    return this._payload = {
      ...this._payload,
      sub: e
    }, this;
  }
  setAudience(e) {
    return this._payload = {
      ...this._payload,
      aud: e
    }, this;
  }
  setJti(e) {
    return this._payload = {
      ...this._payload,
      jti: e
    }, this;
  }
  setNotBefore(e) {
    if (typeof e === "number") this._payload = {
      ...this._payload,
      nbf: e
    }; else this._payload = {
      ...this._payload,
      nbf: Pe(new Date) + ct(e)
    };
    return this;
  }
  setExpirationTime(e) {
    if (typeof e === "number") this._payload = {
      ...this._payload,
      exp: e
    }; else this._payload = {
      ...this._payload,
      exp: Pe(new Date) + ct(e)
    };
    return this;
  }
  setIssuedAt(e) {
    if (typeof e > "u") this._payload = {
      ...this._payload,
      iat: Pe(new Date)
    }; else this._payload = {
      ...this._payload,
      iat: e
    };
    return this;
  }
}

var rr = la(() => {
  er();
  F();
  tr();
});

var or;

var nr = la(() => {
  st();
  E();
  v();
  rr();
  or = class or extends pt {
    setProtectedHeader(e) {
      return this._protectedHeader = e, this;
    }
    async sign(e, t) {
      var r;
      let o = new ve(l.encode(JSON.stringify(this._payload)));
      if (o.setProtectedHeader(this._protectedHeader), Array.isArray((r = this._protectedHeader) === null || r === void 0 ? void 0 : r.crit) && this._protectedHeader.crit.includes("b64") && this._protectedHeader.b64 === !1) throw new Te("JWTs MUST NOT use unencoded payload");
      return o.sign(e, t);
    }
  };
});

async function zr(e, t) {
  if (!K(e)) throw TypeError("JWK must be an object");
  if (t !== null && t !== void 0 || (t = "sha256"), t !== "sha256" && t !== "sha384" && t !== "sha512") throw TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
  let r;
  switch (e.kty) {
   case "EC":
    Y(e.crv, '"crv" (Curve) Parameter'), Y(e.x, '"x" (X Coordinate) Parameter'), Y(e.y, '"y" (Y Coordinate) Parameter'), 
    r = {
      crv: e.crv,
      kty: e.kty,
      x: e.x,
      y: e.y
    };
    break;

   case "OKP":
    Y(e.crv, '"crv" (Subtype of Key Pair) Parameter'), Y(e.x, '"x" (Public Key) Parameter'), 
    r = {
      crv: e.crv,
      kty: e.kty,
      x: e.x
    };
    break;

   case "RSA":
    Y(e.e, '"e" (Exponent) Parameter'), Y(e.n, '"n" (Modulus) Parameter'), r = {
      e: e.e,
      kty: e.kty,
      n: e.n
    };
    break;

   case "oct":
    Y(e.k, '"k" (Key Value) Parameter'), r = {
      k: e.k,
      kty: e.kty
    };
    break;

   default:
    throw new f('"kty" (Key Type) Parameter missing or unsupported');
  }
  let o = l.encode(JSON.stringify(r));
  return w(await ue(t, o));
}

var Y = (e, t) => {
  if (typeof e !== "string" || !e) throw new Ue(`${t} missing or invalid`);
};

var ar = la(() => {
  Ie();
  P();
  E();
  v();
  F();
});

var ir;

var sr = la(() => {
  P();
  ir = S;
});

function Xr(e) {
  let t;
  if (typeof e === "string") {
    let r = e.split(".");
    if (r.length === 3 || r.length === 5) [t] = r;
  } else if (typeof e === "object" && e) if ("protected" in e) t = e.protected; else throw TypeError("Token does not contain a Protected Header");
  try {
    if (typeof t !== "string" || !t) throw Error();
    let r = JSON.parse(C.decode(ir(t)));
    if (!K(r)) throw Error();
    return r;
  } catch (r) {
    throw TypeError("Invalid Token or Protected Header formatting");
  }
}

var cr = la(() => {
  sr();
  v();
  F();
});

var pr = "WebCryptoAPI";

var dr = () => {};

var Yr;

var fr = la(() => {
  dr();
  Yr = pr;
});

var qr = la(() => {
  Mt();
  Gt();
  Zt();
  st();
  nr();
  ar();
  nt();
  Qe();
  cr();
  fr();
});

qr();

export { qt as CompactEncrypt, ve as CompactSign, or as SignJWT, zr as calculateJwkThumbprint, Mr as compactDecrypt, Br as compactVerify, Yr as cryptoRuntime, Xr as decodeProtectedHeader, ot as exportJWK, Ze as importJWK };
