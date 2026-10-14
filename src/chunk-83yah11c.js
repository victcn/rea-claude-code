// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { $jn, Fjn, KRs } from "./chunk-0xf5tvmq.js";

import { PHt, Wtn, awo, lwo } from "./chunk-r36nxycs.js";

import { i5, cT } from "./chunk-fzpaq6a9.js";

import { rS } from "./chunk-tz7tmg8b.js";

import { vpe } from "./chunk-b6behehf.js";

import { Ujn, Bjn } from "./chunk-vy6n834a.js";

import { OP } from "./chunk-3yeje51y.js";

import { Dse, Lse, Nse, pZ, XT, fZ, $se, $1, mZ, YF, Fse, Use, Bse, jse, Wse, gZ } from "./chunk-c47gf6gq.js";

import { Iz } from "./chunk-851qddh7.js";

import { Nc } from "./chunk-fzyt9ct7.js";

import { MP } from "./chunk-nj8cgz8s.js";

import { MHt } from "./chunk-8wh7banb.js";

import { DP } from "./chunk-w8hcbtxg.js";

import { og, nD } from "./chunk-w4hwgefc.js";

import { _T, lx } from "./chunk-shz68fkm.js";

import { we } from "./chunk-m8ez8fhk.js";

function ae(e) {
  let {signer: t, signer: o} = e, r = Object.assign(e, {
    eventSigner: t,
    messageSigner: o
  }), n = r.eventStreamPayloadHandlerProvider(r);
  return Object.assign(r, {
    eventStreamPayloadHandler: n
  });
}

var L = we(Dse()), st = we(Lse()), at = we(Nse()), O = we(fZ());

var At = function() {
  function e() {
    this.crc32 = new g;
  }
  return e.prototype.update = function(t) {
    if (Wtn(t)) return;
    this.crc32.update(PHt(t));
  }, e.prototype.digest = function() {
    return $jn(this, void 0, void 0, function() {
      return Fjn(this, function(t) {
        return [ 2, awo(this.crc32.digest()) ];
      });
    });
  }, e.prototype.reset = function() {
    this.crc32 = new g;
  }, e;
}();

var g = function() {
  function e() {
    this.checksum = 4294967295;
  }
  return e.prototype.update = function(t) {
    var o, r;
    try {
      for (var n = KRs(t), s = n.next(); !s.done; s = n.next()) {
        var a = s.value;
        this.checksum = this.checksum >>> 8 ^ Bt[(this.checksum ^ a) & 255];
      }
    } catch (i) {
      o = {
        error: i
      };
    } finally {
      try {
        if (s && !s.done && (r = n.return)) r.call(n);
      } finally {
        if (o) throw o.error;
      }
    }
    return this;
  }, e.prototype.digest = function() {
    return (this.checksum ^ 4294967295) >>> 0;
  }, e;
}();

var yt = [ 0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117 ], Bt = lwo(yt);

var m = we(MHt());

var ce = we(MHt());

class h {
  bytes;
  constructor(e) {
    if (this.bytes = e, e.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes");
  }
  static fromNumber(e) {
    if (e > 0x8000000000000000 || e < -0x8000000000000000) throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
    let t = new Uint8Array(8);
    for (let o = 7, r = Math.abs(Math.round(e)); o > -1 && r > 0; o--, r /= 256) t[o] = r;
    if (e < 0) ie(t);
    return new h(t);
  }
  valueOf() {
    let e = this.bytes.slice(0), t = e[0] & 128;
    if (t) ie(e);
    return parseInt(ce.toHex(e), 16) * (t ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
}

function ie(e) {
  for (let t = 0; t < 8; t++) e[t] ^= 255;
  for (let t = 7; t > -1; t--) if (e[t]++, e[t] !== 0) break;
}

class z {
  toUtf8;
  fromUtf8;
  constructor(e, t) {
    this.toUtf8 = e, this.fromUtf8 = t;
  }
  format(e) {
    let t = [];
    for (let n of Object.keys(e)) {
      let s = this.fromUtf8(n);
      t.push(Uint8Array.from([ s.byteLength ]), s, this.formatHeaderValue(e[n]));
    }
    let o = new Uint8Array(t.reduce((n, s) => n + s.byteLength, 0)), r = 0;
    for (let n of t) o.set(n, r), r += n.byteLength;
    return o;
  }
  formatHeaderValue(e) {
    switch (e.type) {
     case "boolean":
      return Uint8Array.from([ e.value ? 0 : 1 ]);

     case "byte":
      return Uint8Array.from([ 2, e.value ]);

     case "short":
      let t = new DataView(new ArrayBuffer(3));
      return t.setUint8(0, 3), t.setInt16(1, e.value, !1), new Uint8Array(t.buffer);

     case "integer":
      let o = new DataView(new ArrayBuffer(5));
      return o.setUint8(0, 4), o.setInt32(1, e.value, !1), new Uint8Array(o.buffer);

     case "long":
      let r = new Uint8Array(9);
      return r[0] = 5, r.set(e.value.bytes, 1), r;

     case "binary":
      let n = new DataView(new ArrayBuffer(3 + e.value.byteLength));
      n.setUint8(0, 6), n.setUint16(1, e.value.byteLength, !1);
      let s = new Uint8Array(n.buffer);
      return s.set(e.value, 3), s;

     case "string":
      let a = this.fromUtf8(e.value), i = new DataView(new ArrayBuffer(3 + a.byteLength));
      i.setUint8(0, 7), i.setUint16(1, a.byteLength, !1);
      let c = new Uint8Array(i.buffer);
      return c.set(a, 3), c;

     case "timestamp":
      let p = new Uint8Array(9);
      return p[0] = 8, p.set(h.fromNumber(e.value.valueOf()).bytes, 1), p;

     case "uuid":
      if (!bt.test(e.value)) throw Error(`Invalid UUID received: ${e.value}`);
      let u = new Uint8Array(17);
      return u[0] = 9, u.set(m.fromHex(e.value.replace(/\-/g, "")), 1), u;
    }
  }
  parse(e) {
    let t = {}, o = 0;
    while (o < e.byteLength) {
      let r = e.getUint8(o++), n = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + o, r));
      switch (o += r, e.getUint8(o++)) {
       case 0:
        t[n] = {
          type: le,
          value: !0
        };
        break;

       case 1:
        t[n] = {
          type: le,
          value: !1
        };
        break;

       case 2:
        t[n] = {
          type: Rt,
          value: e.getInt8(o++)
        };
        break;

       case 3:
        t[n] = {
          type: Et,
          value: e.getInt16(o, !1)
        }, o += 2;
        break;

       case 4:
        t[n] = {
          type: It,
          value: e.getInt32(o, !1)
        }, o += 4;
        break;

       case 5:
        t[n] = {
          type: Tt,
          value: new h(new Uint8Array(e.buffer, e.byteOffset + o, 8))
        }, o += 8;
        break;

       case 6:
        let s = e.getUint16(o, !1);
        o += 2, t[n] = {
          type: Gt,
          value: new Uint8Array(e.buffer, e.byteOffset + o, s)
        }, o += s;
        break;

       case 7:
        let a = e.getUint16(o, !1);
        o += 2, t[n] = {
          type: kt,
          value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + o, a))
        }, o += a;
        break;

       case 8:
        t[n] = {
          type: Dt,
          value: new Date(new h(new Uint8Array(e.buffer, e.byteOffset + o, 8)).valueOf())
        }, o += 8;
        break;

       case 9:
        let i = new Uint8Array(e.buffer, e.byteOffset + o, 16);
        o += 16, t[n] = {
          type: Pt,
          value: `${m.toHex(i.subarray(0, 4))}-${m.toHex(i.subarray(4, 6))}-${m.toHex(i.subarray(6, 8))}-${m.toHex(i.subarray(8, 10))}-${m.toHex(i.subarray(10))}`
        };
        break;

       default:
        throw Error("Unrecognized header type tag");
      }
    }
    return t;
  }
}

var _e;

(function(e) {
  e[e.boolTrue = 0] = "boolTrue", e[e.boolFalse = 1] = "boolFalse", e[e.byte = 2] = "byte", 
  e[e.short = 3] = "short", e[e.integer = 4] = "integer", e[e.long = 5] = "long", 
  e[e.byteArray = 6] = "byteArray", e[e.string = 7] = "string", e[e.timestamp = 8] = "timestamp", 
  e[e.uuid = 9] = "uuid";
})(_e || (_e = {}));

var le = "boolean", Rt = "byte", Et = "short", It = "integer", Tt = "long", Gt = "binary", kt = "string", Dt = "timestamp", Pt = "uuid", bt = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

var ue = 4, x = ue * 2, f = 4, Mt = x + f * 2;

function de({byteLength: e, byteOffset: t, buffer: o}) {
  if (e < Mt) throw Error("Provided message too short to accommodate event stream message overhead");
  let r = new DataView(o, t, e), n = r.getUint32(0, !1);
  if (e !== n) throw Error("Reported message length does not match received message length");
  let s = r.getUint32(ue, !1), a = r.getUint32(x, !1), i = r.getUint32(e - f, !1), c = (new g).update(new Uint8Array(o, t, x));
  if (a !== c.digest()) throw Error(`The prelude checksum specified in the message (${a}) does not match the calculated CRC32 checksum (${c.digest()})`);
  if (c.update(new Uint8Array(o, t + x, e - (x + f))), i !== c.digest()) throw Error(`The message checksum (${c.digest()}) did not match the expected value of ${i}`);
  return {
    headers: new DataView(o, t + x + f, s),
    body: new Uint8Array(o, t + x + f + s, n - s - (x + f + f))
  };
}

class E {
  headerMarshaller;
  messageBuffer;
  isEndOfStream;
  constructor(e, t) {
    this.headerMarshaller = new z(e, t), this.messageBuffer = [], this.isEndOfStream = !1;
  }
  feed(e) {
    this.messageBuffer.push(this.decode(e));
  }
  endOfStream() {
    this.isEndOfStream = !0;
  }
  getMessage() {
    let e = this.messageBuffer.pop(), t = this.isEndOfStream;
    return {
      getMessage() {
        return e;
      },
      isEndOfStream() {
        return t;
      }
    };
  }
  getAvailableMessages() {
    let e = this.messageBuffer;
    this.messageBuffer = [];
    let t = this.isEndOfStream;
    return {
      getMessages() {
        return e;
      },
      isEndOfStream() {
        return t;
      }
    };
  }
  encode({headers: e, body: t}) {
    let o = this.headerMarshaller.format(e), r = o.byteLength + t.byteLength + 16, n = new Uint8Array(r), s = new DataView(n.buffer, n.byteOffset, n.byteLength), a = new g;
    return s.setUint32(0, r, !1), s.setUint32(4, o.byteLength, !1), s.setUint32(8, a.update(n.subarray(0, 8)).digest(), !1), 
    n.set(o, 12), n.set(t, o.byteLength + 12), s.setUint32(r - 4, a.update(n.subarray(8, r - 4)).digest(), !1), 
    n;
  }
  decode(e) {
    let {headers: t, body: o} = de(e);
    return {
      headers: this.headerMarshaller.parse(t),
      body: o
    };
  }
  formatHeaders(e) {
    return this.headerMarshaller.format(e);
  }
}

class Q {
  options;
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async* asyncIterator() {
    for await (let e of this.options.inputStream) yield this.options.decoder.decode(e);
  }
}

class K {
  options;
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async* asyncIterator() {
    for await (let e of this.options.messageStream) yield this.options.encoder.encode(e);
    if (this.options.includeEndFrame) yield new Uint8Array(0);
  }
}

class J {
  options;
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async* asyncIterator() {
    for await (let e of this.options.messageStream) {
      let t = await this.options.deserializer(e);
      if (t === void 0) continue;
      yield t;
    }
  }
}

class Z {
  options;
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async* asyncIterator() {
    for await (let e of this.options.inputStream) yield this.options.serializer(e);
  }
}

var me = we(og());

var pe = e => e.protocol === "ws:" || e.protocol === "wss:";

class Y {
  signer;
  constructor(e) {
    this.signer = e.signer;
  }
  presign(e, t = {}) {
    return this.signer.presign(e, t);
  }
  async sign(e, t) {
    if (me.HttpRequest.isInstance(e) && pe(e)) return {
      ...await this.signer.presign({
        ...e,
        body: ""
      }, {
        ...t,
        expiresIn: 60,
        unsignableHeaders: new Set(Object.keys(e.headers).filter(r => r !== "host"))
      }),
      body: e.body
    }; else return this.signer.sign(e, t);
  }
}

var xe = e => {
  let {signer: t} = e;
  return Object.assign(e, {
    signer: async o => {
      let r = await t(o);
      if (wt(r)) return new Y({
        signer: r
      });
      throw Error("Expected WebsocketSignatureV4 signer, please check the client constructor.");
    }
  });
}, wt = e => !!e;

function Ce(e) {
  let t = 0, o = 0, r = null, n = null, s = i => {
    if (typeof i !== "number") throw Error("Attempted to allocate an event message where size was not a number: " + i);
    t = i, o = 4, r = new Uint8Array(i), new DataView(r.buffer).setUint32(0, i, !1);
  }, a = async function*() {
    let i = e[Symbol.asyncIterator]();
    while (!0) {
      let {value: c, done: p} = await i.next();
      if (p) {
        if (!t) return; else if (t === o) yield r; else throw Error("Truncated event message received.");
        return;
      }
      let u = c.length, _ = 0;
      while (_ < u) {
        if (!r) {
          let T = u - _;
          if (!n) n = new Uint8Array(4);
          let X = Math.min(4 - o, T);
          if (n.set(c.slice(_, _ + X), o), o += X, _ += X, o < 4) break;
          s(new DataView(n.buffer).getUint32(0, !1)), n = null;
        }
        let R = Math.min(t - o, u - _);
        if (r.set(c.slice(_, _ + R), o), o += R, _ += R, t && t === o) yield r, r = null, 
        t = 0, o = 0;
      }
    }
  };
  return {
    [Symbol.asyncIterator]: a
  };
}

function ve(e, t) {
  return async function(o) {
    let {value: r} = o.headers[":message-type"];
    if (r === "error") {
      let n = Error(o.headers[":error-message"].value || "UnknownError");
      throw n.name = o.headers[":error-code"].value, n;
    } else if (r === "exception") {
      let n = o.headers[":exception-type"].value, s = {
        [n]: o
      }, a = await e(s);
      if (a.$unknown) {
        let i = Error(t(o.body));
        throw i.name = n, i;
      }
      throw a[n];
    } else if (r === "event") {
      let n = {
        [o.headers[":event-type"].value]: o
      }, s = await e(n);
      if (s.$unknown) return;
      return s;
    } else throw Error(`Unrecognizable event type: ${o.headers[":event-type"].value}`);
  };
}

class ee {
  eventStreamCodec;
  utfEncoder;
  constructor({utf8Encoder: e, utf8Decoder: t}) {
    this.eventStreamCodec = new E(e, t), this.utfEncoder = e;
  }
  deserialize(e, t) {
    let o = Ce(e);
    return new J({
      messageStream: new Q({
        inputStream: o,
        decoder: this.eventStreamCodec
      }),
      deserializer: ve(t, this.utfEncoder)
    });
  }
  serialize(e, t) {
    return new K({
      messageStream: new Z({
        inputStream: e,
        serializer: t
      }),
      encoder: this.eventStreamCodec,
      includeEndFrame: !0
    });
  }
}

var it = we(cT()), B = we(rS()), ct = we(MP());

var ge = e => Object.assign(e, {
  eventStreamMarshaller: e.eventStreamSerdeProvider(e)
});

var _t = we($se()), lt = we($1()), U = we(YF()), ut = we(Nc());

var fe = we(XT()), S = we(rS()), I = we(DP()), he = async (e, t, o) => ({
  operation: I.getSmithyContext(t).operation,
  region: await I.normalizeProvider(e.region)() || (() => {
    throw Error("expected `region` to be configured for `aws.auth#sigv4`");
  })()
});

function Ft(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "bedrock",
      region: e.region
    },
    propertiesExtractor: (t, o) => ({
      signingProperties: {
        config: t,
        context: o
      }
    })
  };
}

function Lt(e) {
  return {
    schemeId: "smithy.api#httpBearerAuth",
    propertiesExtractor: ({profile: t, filepath: o, configFilepath: r, ignoreCache: n}, s) => ({
      identityProperties: {
        profile: t,
        filepath: o,
        configFilepath: r,
        ignoreCache: n
      }
    })
  };
}

var Se = e => {
  let t = [];
  switch (e.operation) {
   default:
    t.push(Ft(e)), t.push(Lt(e));
  }
  return t;
}, Ae = e => {
  let t = S.memoizeIdentityProvider(e.token, S.isIdentityExpired, S.doesIdentityRequireRefresh), o = fe.resolveAwsSdkSigV4Config(e);
  return Object.assign(o, {
    authSchemePreference: I.normalizeProvider(e.authSchemePreference ?? []),
    token: t
  });
};

var ye = e => Object.assign(e, {
  useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
  useFipsEndpoint: e.useFipsEndpoint ?? !1,
  defaultSigningName: "bedrock"
}), Be = {
  UseFIPS: {
    type: "builtInParams",
    name: "useFipsEndpoint"
  },
  Endpoint: {
    type: "builtInParams",
    name: "endpoint"
  },
  Region: {
    type: "builtInParams",
    name: "region"
  },
  UseDualStack: {
    type: "builtInParams",
    name: "useDualstackEndpoint"
  }
};

var Re = {
  name: "@aws-sdk/client-bedrock-runtime",
  description: "AWS SDK for JavaScript Bedrock Runtime Client for Node.js, Browser and React Native",
  version: "3.936.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-bedrock-runtime",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock-runtime"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: !1,
  dependencies: {
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/core": "3.936.0",
    "@aws-sdk/credential-provider-node": "3.936.0",
    "@aws-sdk/eventstream-handler-node": "3.936.0",
    "@aws-sdk/middleware-eventstream": "3.936.0",
    "@aws-sdk/middleware-host-header": "3.936.0",
    "@aws-sdk/middleware-logger": "3.936.0",
    "@aws-sdk/middleware-recursion-detection": "3.936.0",
    "@aws-sdk/middleware-user-agent": "3.936.0",
    "@aws-sdk/middleware-websocket": "3.936.0",
    "@aws-sdk/region-config-resolver": "3.936.0",
    "@aws-sdk/token-providers": "3.936.0",
    "@aws-sdk/types": "3.936.0",
    "@aws-sdk/util-endpoints": "3.936.0",
    "@aws-sdk/util-user-agent-browser": "3.936.0",
    "@aws-sdk/util-user-agent-node": "3.936.0",
    "@smithy/config-resolver": "^4.4.3",
    "@smithy/core": "^3.18.5",
    "@smithy/eventstream-serde-browser": "^4.2.5",
    "@smithy/eventstream-serde-config-resolver": "^4.3.5",
    "@smithy/eventstream-serde-node": "^4.2.5",
    "@smithy/fetch-http-handler": "^5.3.6",
    "@smithy/hash-node": "^4.2.5",
    "@smithy/invalid-dependency": "^4.2.5",
    "@smithy/middleware-content-length": "^4.2.5",
    "@smithy/middleware-endpoint": "^4.3.12",
    "@smithy/middleware-retry": "^4.4.12",
    "@smithy/middleware-serde": "^4.2.6",
    "@smithy/middleware-stack": "^4.2.5",
    "@smithy/node-config-provider": "^4.3.5",
    "@smithy/node-http-handler": "^4.4.5",
    "@smithy/protocol-http": "^5.3.5",
    "@smithy/smithy-client": "^4.9.8",
    "@smithy/types": "^4.9.0",
    "@smithy/url-parser": "^4.2.5",
    "@smithy/util-base64": "^4.3.0",
    "@smithy/util-body-length-browser": "^4.2.0",
    "@smithy/util-body-length-node": "^4.2.1",
    "@smithy/util-defaults-mode-browser": "^4.3.11",
    "@smithy/util-defaults-mode-node": "^4.2.14",
    "@smithy/util-endpoints": "^3.2.5",
    "@smithy/util-middleware": "^4.2.5",
    "@smithy/util-retry": "^4.2.5",
    "@smithy/util-stream": "^4.5.6",
    "@smithy/util-utf8": "^4.2.0",
    tslib: "^2.6.2"
  },
  devDependencies: {
    "@tsconfig/node18": "18.2.4",
    "@types/node": "^18.19.69",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~5.8.3"
  },
  engines: {
    node: ">=18.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [ "dist-types/ts3.4/*" ]
    }
  },
  files: [ "dist-*/**" ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock-runtime",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-bedrock-runtime"
  }
};

var y = we(XT());

import { PassThrough as Nt, pipeline as Ht, Readable as Vt } from "stream";

import { Transform as Ut } from "stream";

class te extends Ut {
  priorSignature;
  messageSigner;
  eventStreamCodec;
  systemClockOffsetProvider;
  constructor(e) {
    super({
      autoDestroy: !0,
      readableObjectMode: !0,
      writableObjectMode: !0,
      ...e
    });
    this.priorSignature = e.priorSignature, this.eventStreamCodec = e.eventStreamCodec, 
    this.messageSigner = e.messageSigner, this.systemClockOffsetProvider = e.systemClockOffsetProvider;
  }
  async _transform(e, t, o) {
    try {
      let r = new Date(Date.now() + await this.systemClockOffsetProvider()), n = {
        ":date": {
          type: "timestamp",
          value: r
        }
      }, s = await this.messageSigner.sign({
        message: {
          body: e,
          headers: n
        },
        priorSignature: this.priorSignature
      }, {
        signingDate: r
      });
      this.priorSignature = s.signature;
      let a = this.eventStreamCodec.encode({
        headers: {
          ...n,
          ":chunk-signature": {
            type: "binary",
            value: Wt(s.signature)
          }
        },
        body: e
      });
      return this.push(a), o();
    } catch (r) {
      o(r);
    }
  }
}

function Wt(e) {
  let t = Buffer.from(e, "hex");
  return new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}

class oe {
  messageSigner;
  eventStreamCodec;
  systemClockOffsetProvider;
  constructor(e) {
    this.messageSigner = e.messageSigner, this.eventStreamCodec = new E(e.utf8Encoder, e.utf8Decoder), 
    this.systemClockOffsetProvider = async () => e.systemClockOffset ?? 0;
  }
  async handle(e, t, o = {}) {
    let r = t.request, {body: n, query: s} = r;
    if (!(n instanceof Vt)) throw Error("Eventstream payload must be a Readable stream.");
    let a = n;
    r.body = new Nt({
      objectMode: !0
    });
    let c = r.headers?.authorization?.match(/Signature=([\w]+)$/)?.[1] ?? s?.["X-Amz-Signature"] ?? "", p = new te({
      priorSignature: c,
      eventStreamCodec: this.eventStreamCodec,
      messageSigner: await this.messageSigner(),
      systemClockOffsetProvider: this.systemClockOffsetProvider
    });
    Ht(a, p, r.body, _ => {
      if (_) throw _;
    });
    let u;
    try {
      u = await e(t);
    } catch (_) {
      throw r.body.end(), _;
    }
    return u;
  }
}

var ne = e => new oe(e);

var D = we(Fse()), v = we(cT()), ze = we(rS());

import { Readable as qt } from "stream";

async function* Ee(e) {
  let t = !1, o = !1, r = [];
  e.on("error", n => {
    if (!t) t = !0;
    if (n) throw n;
  }), e.on("data", n => {
    r.push(n);
  }), e.on("end", () => {
    t = !0;
  });
  while (!o) {
    let n = await new Promise(s => setTimeout(() => s(r.shift()), 0));
    if (n) yield n;
    o = t && r.length === 0;
  }
}

class Njn {
  universalMarshaller;
  constructor({utf8Encoder: e, utf8Decoder: t}) {
    this.universalMarshaller = new ee({
      utf8Decoder: t,
      utf8Encoder: e
    });
  }
  deserialize(e, t) {
    let o = typeof e[Symbol.asyncIterator] === "function" ? e : Ee(e);
    return this.universalMarshaller.deserialize(o, t);
  }
  serialize(e, t) {
    return qt.from(this.universalMarshaller.serialize(e, t));
  }
}

var Ie = e => new Njn(e);

var Qe = we(Use()), P = we(YF()), C = we(OP()), b = we(nD()), Ke = we(Bse()), Je = we(mZ());

var He = we(XT()), Ve = we(jse()), qe = we(rS()), je = we(Nc()), $e = we(Iz()), G = we(lx()), k = we(_T());

var We = we(pZ()), A = we(i5());

var Te = {
  ["required"]: !1,
  type: "string"
}, Ge = {
  ["required"]: !0,
  default: !1,
  type: "boolean"
}, ke = {
  ["ref"]: "Endpoint"
}, Le = {
  ["fn"]: "booleanEquals",
  ["argv"]: [ {
    ["ref"]: "UseFIPS"
  }, !0 ]
}, Oe = {
  ["fn"]: "booleanEquals",
  ["argv"]: [ {
    ["ref"]: "UseDualStack"
  }, !0 ]
}, d = {}, De = {
  ["fn"]: "getAttr",
  ["argv"]: [ {
    ["ref"]: "PartitionResult"
  }, "supportsFIPS" ]
}, Pe = {
  ["fn"]: "booleanEquals",
  ["argv"]: [ !0, {
    ["fn"]: "getAttr",
    ["argv"]: [ {
      ["ref"]: "PartitionResult"
    }, "supportsDualStack" ]
  } ]
}, be = [ Le ], Me = [ Oe ], Fe = [ {
  ["ref"]: "Region"
} ], jt = {
  version: "1.0",
  parameters: {
    Region: Te,
    UseDualStack: Ge,
    UseFIPS: Ge,
    Endpoint: Te
  },
  rules: [ {
    conditions: [ {
      ["fn"]: "isSet",
      ["argv"]: [ ke ]
    } ],
    rules: [ {
      conditions: be,
      error: "Invalid Configuration: FIPS and custom endpoint are not supported",
      type: "error"
    }, {
      rules: [ {
        conditions: Me,
        error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
        type: "error"
      }, {
        endpoint: {
          url: ke,
          properties: d,
          headers: d
        },
        type: "endpoint"
      } ],
      type: "tree"
    } ],
    type: "tree"
  }, {
    rules: [ {
      conditions: [ {
        ["fn"]: "isSet",
        ["argv"]: Fe
      } ],
      rules: [ {
        conditions: [ {
          ["fn"]: "aws.partition",
          ["argv"]: Fe,
          assign: "PartitionResult"
        } ],
        rules: [ {
          conditions: [ Le, Oe ],
          rules: [ {
            conditions: [ {
              ["fn"]: "booleanEquals",
              ["argv"]: [ !0, De ]
            }, Pe ],
            rules: [ {
              rules: [ {
                endpoint: {
                  url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: d,
                  headers: d
                },
                type: "endpoint"
              } ],
              type: "tree"
            } ],
            type: "tree"
          }, {
            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
            type: "error"
          } ],
          type: "tree"
        }, {
          conditions: be,
          rules: [ {
            conditions: [ {
              ["fn"]: "booleanEquals",
              ["argv"]: [ De, !0 ]
            } ],
            rules: [ {
              rules: [ {
                endpoint: {
                  url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: d,
                  headers: d
                },
                type: "endpoint"
              } ],
              type: "tree"
            } ],
            type: "tree"
          }, {
            error: "FIPS is enabled but this partition does not support FIPS",
            type: "error"
          } ],
          type: "tree"
        }, {
          conditions: Me,
          rules: [ {
            conditions: [ Pe ],
            rules: [ {
              rules: [ {
                endpoint: {
                  url: "https://bedrock-runtime.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: d,
                  headers: d
                },
                type: "endpoint"
              } ],
              type: "tree"
            } ],
            type: "tree"
          }, {
            error: "DualStack is enabled but this partition does not support DualStack",
            type: "error"
          } ],
          type: "tree"
        }, {
          rules: [ {
            endpoint: {
              url: "https://bedrock-runtime.{Region}.{PartitionResult#dnsSuffix}",
              properties: d,
              headers: d
            },
            type: "endpoint"
          } ],
          type: "tree"
        } ],
        type: "tree"
      } ],
      type: "tree"
    }, {
      error: "Invalid Configuration: Missing Region",
      type: "error"
    } ],
    type: "tree"
  } ]
}, Ue = jt;

var $t = new A.EndpointCache({
  size: 50,
  params: [ "Endpoint", "Region", "UseDualStack", "UseFIPS" ]
}), Ne = (e, t = {}) => $t.get(e, () => A.resolveEndpoint(Ue, {
  endpointParams: e,
  logger: t.logger
}));

A.customEndpointFunctions.aws = We.awsEndpointFunctions;

var Xe = e => ({
  apiVersion: "2023-09-30",
  base64Decoder: e?.base64Decoder ?? G.fromBase64,
  base64Encoder: e?.base64Encoder ?? G.toBase64,
  disableHostPrefix: e?.disableHostPrefix ?? !1,
  endpointProvider: e?.endpointProvider ?? Ne,
  extensions: e?.extensions ?? [],
  httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? Se,
  httpAuthSchemes: e?.httpAuthSchemes ?? [ {
    schemeId: "aws.auth#sigv4",
    identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"),
    signer: new He.AwsSdkSigV4Signer
  }, {
    schemeId: "smithy.api#httpBearerAuth",
    identityProvider: t => t.getIdentityProvider("smithy.api#httpBearerAuth"),
    signer: new qe.HttpBearerAuthSigner
  } ],
  logger: e?.logger ?? new je.NoOpLogger,
  protocol: e?.protocol ?? new Ve.AwsRestJsonProtocol({
    defaultNamespace: "com.amazonaws.bedrockruntime"
  }),
  serviceId: e?.serviceId ?? "Bedrock Runtime",
  urlParser: e?.urlParser ?? $e.parseUrl,
  utf8Decoder: e?.utf8Decoder ?? k.fromUtf8,
  utf8Encoder: e?.utf8Encoder ?? k.toUtf8
});

var Ze = we(Nc()), Ye = we(Wse()), et = we(Nc()), tt = e => {
  et.emitWarningIfUnsupportedVersion(process.version);
  let t = Ye.resolveDefaultsModeConfig(e), o = () => t().then(Ze.loadConfigsForDefaultMode), r = Xe(e);
  y.emitWarningIfUnsupportedVersion(process.version);
  let n = {
    profile: e?.profile,
    logger: r.logger,
    signingName: "bedrock"
  };
  return {
    ...r,
    ...e,
    runtime: "node",
    defaultsMode: t,
    authSchemePreference: e?.authSchemePreference ?? C.loadConfig(y.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, n),
    bodyLengthChecker: e?.bodyLengthChecker ?? Ke.calculateBodyLength,
    credentialDefaultProvider: e?.credentialDefaultProvider ?? vpe,
    defaultUserAgentProvider: e?.defaultUserAgentProvider ?? D.createDefaultUserAgentProvider({
      serviceId: r.serviceId,
      clientVersion: Re.version
    }),
    eventStreamPayloadHandlerProvider: e?.eventStreamPayloadHandlerProvider ?? ne,
    eventStreamSerdeProvider: e?.eventStreamSerdeProvider ?? Ie,
    httpAuthSchemes: e?.httpAuthSchemes ?? [ {
      schemeId: "aws.auth#sigv4",
      identityProvider: s => s.getIdentityProvider("aws.auth#sigv4"),
      signer: new y.AwsSdkSigV4Signer
    }, {
      schemeId: "smithy.api#httpBearerAuth",
      identityProvider: s => s.getIdentityProvider("smithy.api#httpBearerAuth") || (async a => {
        try {
          return await Ujn({
            signingName: "bedrock"
          })();
        } catch (i) {
          return await Bjn(a)(a);
        }
      }),
      signer: new ze.HttpBearerAuthSigner
    } ],
    maxAttempts: e?.maxAttempts ?? C.loadConfig(P.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
    region: e?.region ?? C.loadConfig(v.NODE_REGION_CONFIG_OPTIONS, {
      ...v.NODE_REGION_CONFIG_FILE_OPTIONS,
      ...n
    }),
    requestHandler: b.NodeHttp2Handler.create(e?.requestHandler ?? (async () => ({
      ...await o(),
      disableConcurrentStreams: !0
    }))),
    retryMode: e?.retryMode ?? C.loadConfig({
      ...P.NODE_RETRY_MODE_CONFIG_OPTIONS,
      default: async () => (await o()).retryMode || Je.DEFAULT_RETRY_MODE
    }, e),
    sha256: e?.sha256 ?? Qe.Hash.bind(null, "sha256"),
    streamCollector: e?.streamCollector ?? b.streamCollector,
    useDualstackEndpoint: e?.useDualstackEndpoint ?? C.loadConfig(v.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, n),
    useFipsEndpoint: e?.useFipsEndpoint ?? C.loadConfig(v.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, n),
    userAgentAppId: e?.userAgentAppId ?? C.loadConfig(D.NODE_APP_ID_CONFIG_OPTIONS, n)
  };
};

var M = we(gZ()), w = we(og()), F = we(Nc());

var ot = e => {
  let {httpAuthSchemes: t, httpAuthSchemeProvider: o, credentials: r, token: n} = e;
  return {
    setHttpAuthScheme(s) {
      let a = t.findIndex(i => i.schemeId === s.schemeId);
      if (a === -1) t.push(s); else t.splice(a, 1, s);
    },
    httpAuthSchemes() {
      return t;
    },
    setHttpAuthSchemeProvider(s) {
      o = s;
    },
    httpAuthSchemeProvider() {
      return o;
    },
    setCredentials(s) {
      r = s;
    },
    credentials() {
      return r;
    },
    setToken(s) {
      n = s;
    },
    token() {
      return n;
    }
  };
}, nt = e => ({
  httpAuthSchemes: e.httpAuthSchemes(),
  httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
  credentials: e.credentials(),
  token: e.token()
});

var rt = (e, t) => {
  let o = Object.assign(M.getAwsRegionExtensionConfiguration(e), F.getDefaultExtensionConfiguration(e), w.getHttpHandlerExtensionConfiguration(e), ot(e));
  return t.forEach(r => r.configure(o)), Object.assign(e, M.resolveAwsRegionExtensionConfiguration(o), F.resolveDefaultRuntimeConfig(o), w.resolveHttpHandlerRuntimeConfig(o), nt(o));
};

class bGs extends ut.Client {
  config;
  constructor(...[e]) {
    let t = tt(e || {});
    super(t);
    this.initConfig = t;
    let o = ye(t), r = O.resolveUserAgentConfig(o), n = U.resolveRetryConfig(r), s = it.resolveRegionConfig(n), a = L.resolveHostHeaderConfig(s), i = lt.resolveEndpointConfig(a), c = ge(i), p = Ae(c), u = ae(p), _ = xe(u), R = rt(_, e?.extensions || []);
    this.config = R, this.middlewareStack.use(ct.getSchemaSerdePlugin(this.config)), 
    this.middlewareStack.use(O.getUserAgentPlugin(this.config)), this.middlewareStack.use(U.getRetryPlugin(this.config)), 
    this.middlewareStack.use(_t.getContentLengthPlugin(this.config)), this.middlewareStack.use(L.getHostHeaderPlugin(this.config)), 
    this.middlewareStack.use(st.getLoggerPlugin(this.config)), this.middlewareStack.use(at.getRecursionDetectionPlugin(this.config)), 
    this.middlewareStack.use(B.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: he,
      identityProviderConfigProvider: async T => new B.DefaultIdentityProviderConfig({
        "aws.auth#sigv4": T.credentials,
        "smithy.api#httpBearerAuth": T.token
      })
    })), this.middlewareStack.use(B.getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
}

var l = we(MP());

var dt = we(Nc());

class qF extends dt.ServiceException {
  constructor(e) {
    super(e);
    Object.setPrototypeOf(this, qF.prototype);
  }
}

class W extends qF {
  name="AccessDeniedException";
  $fault="client";
  constructor(e) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, W.prototype);
  }
}

class kHt extends qF {
  name="InternalServerException";
  $fault="server";
  constructor(e) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...e
    });
    Object.setPrototypeOf(this, kHt.prototype);
  }
}

class THt extends qF {
  name="ThrottlingException";
  $fault="client";
  constructor(e) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, THt.prototype);
  }
}

class AHt extends qF {
  name="ValidationException";
  $fault="client";
  constructor(e) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, AHt.prototype);
  }
}

class N extends qF {
  name="ConflictException";
  $fault="client";
  constructor(e) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, N.prototype);
  }
}

class H extends qF {
  name="ResourceNotFoundException";
  $fault="client";
  constructor(e) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, H.prototype);
  }
}

class V extends qF {
  name="ServiceQuotaExceededException";
  $fault="client";
  constructor(e) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, V.prototype);
  }
}

class CHt extends qF {
  name="ServiceUnavailableException";
  $fault="server";
  constructor(e) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...e
    });
    Object.setPrototypeOf(this, CHt.prototype);
  }
}

class q extends qF {
  name="ModelErrorException";
  $fault="client";
  originalStatusCode;
  resourceName;
  constructor(e) {
    super({
      name: "ModelErrorException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, q.prototype), this.originalStatusCode = e.originalStatusCode, 
    this.resourceName = e.resourceName;
  }
}

class j extends qF {
  name="ModelNotReadyException";
  $fault="client";
  $retryable={};
  constructor(e) {
    super({
      name: "ModelNotReadyException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, j.prototype);
  }
}

class RHt extends qF {
  name="ModelTimeoutException";
  $fault="client";
  constructor(e) {
    super({
      name: "ModelTimeoutException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, RHt.prototype);
  }
}

class xHt extends qF {
  name="ModelStreamErrorException";
  $fault="client";
  originalStatusCode;
  originalMessage;
  constructor(e) {
    super({
      name: "ModelStreamErrorException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, xHt.prototype), this.originalStatusCode = e.originalStatusCode, 
    this.originalMessage = e.originalMessage;
  }
}

var Xt = [ 0, "com.amazonaws.bedrockruntime", "Body", 8, 21 ];

var zt = [ -3, "com.amazonaws.bedrockruntime", "AccessDeniedException", {
  ["error"]: "client",
  ["httpError"]: 403
}, [ "message" ], [ 0 ] ];

l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(zt, W);

var Qt = [ 3, "com.amazonaws.bedrockruntime", "AnyToolChoice", 0, [], [] ];

var Kt = [ 3, "com.amazonaws.bedrockruntime", "AutoToolChoice", 0, [], [] ];

var re = [ 3, "com.amazonaws.bedrockruntime", "CachePointBlock", 0, [ "type" ], [ 0 ] ], Jt = [ 3, "com.amazonaws.bedrockruntime", "Citation", 0, [ "title", "source", "sourceContent", "location" ], [ 0, 0, () => Mo, () => Vo ] ], pt = [ 3, "com.amazonaws.bedrockruntime", "CitationsConfig", 0, [ "enabled" ], [ 2 ] ], Zt = [ 3, "com.amazonaws.bedrockruntime", "CitationsContentBlock", 0, [ "content", "citations" ], [ () => Po, () => bo ] ];

var Yt = [ -3, "com.amazonaws.bedrockruntime", "ConflictException", {
  ["error"]: "client",
  ["httpError"]: 400
}, [ "message" ], [ 0 ] ];

l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(Yt, N);

var eo = [ 3, "com.amazonaws.bedrockruntime", "ConverseTokensRequest", 0, [ "messages", "system", "toolConfig", "additionalModelRequestFields" ], [ [ () => Lo, 0 ], [ () => Uo, 0 ], () => Ro, 15 ] ];

var to = [ 3, "com.amazonaws.bedrockruntime", "CountTokensRequest", 0, [ "modelId", "input" ], [ [ 0, 1 ], [ () => $o, 0 ] ] ], oo = [ 3, "com.amazonaws.bedrockruntime", "CountTokensResponse", 0, [ "inputTokens" ], [ 1 ] ], mt = [ 3, "com.amazonaws.bedrockruntime", "DocumentBlock", 0, [ "format", "name", "source", "context", "citations" ], [ 0, 0, () => zo, 0, () => pt ] ], no = [ 3, "com.amazonaws.bedrockruntime", "DocumentCharLocation", 0, [ "documentIndex", "start", "end" ], [ 1, 1, 1 ] ], ro = [ 3, "com.amazonaws.bedrockruntime", "DocumentChunkLocation", 0, [ "documentIndex", "start", "end" ], [ 1, 1, 1 ] ], so = [ 3, "com.amazonaws.bedrockruntime", "DocumentPageLocation", 0, [ "documentIndex", "start", "end" ], [ 1, 1, 1 ] ];

var ao = [ 3, "com.amazonaws.bedrockruntime", "GuardrailConverseImageBlock", 8, [ "format", "source" ], [ 0, [ () => Qo, 0 ] ] ], io = [ 3, "com.amazonaws.bedrockruntime", "GuardrailConverseTextBlock", 0, [ "text", "qualifiers" ], [ 0, 64 ] ];

var xt = [ 3, "com.amazonaws.bedrockruntime", "ImageBlock", 0, [ "format", "source" ], [ 0, () => Ko ] ];

var co = [ -3, "com.amazonaws.bedrockruntime", "InternalServerException", {
  ["error"]: "server",
  ["httpError"]: 500
}, [ "message" ], [ 0 ] ];

l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(co, kHt);

var _o = [ 3, "com.amazonaws.bedrockruntime", "InvokeModelTokensRequest", 0, [ "body" ], [ [ () => Xt, 0 ] ] ];

var lo = [ 3, "com.amazonaws.bedrockruntime", "Message", 0, [ "role", "content" ], [ 0, [ () => wo, 0 ] ] ];

var uo = [ -3, "com.amazonaws.bedrockruntime", "ModelErrorException", {
  ["error"]: "client",
  ["httpError"]: 424
}, [ "message", "originalStatusCode", "resourceName" ], [ 0, 1, 0 ] ];

l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(uo, q);

var po = [ -3, "com.amazonaws.bedrockruntime", "ModelNotReadyException", {
  ["error"]: "client",
  ["httpError"]: 429
}, [ "message" ], [ 0 ] ];

l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(po, j);

var mo = [ -3, "com.amazonaws.bedrockruntime", "ModelStreamErrorException", {
  ["error"]: "client",
  ["httpError"]: 424
}, [ "message", "originalStatusCode", "originalMessage" ], [ 0, 1, 0 ] ];

l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(mo, xHt);

var xo = [ -3, "com.amazonaws.bedrockruntime", "ModelTimeoutException", {
  ["error"]: "client",
  ["httpError"]: 408
}, [ "message" ], [ 0 ] ];

l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(xo, RHt);

var Co = [ 3, "com.amazonaws.bedrockruntime", "ReasoningTextBlock", 8, [ "text", "signature" ], [ 0, 0 ] ], vo = [ -3, "com.amazonaws.bedrockruntime", "ResourceNotFoundException", {
  ["error"]: "client",
  ["httpError"]: 404
}, [ "message" ], [ 0 ] ];

l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(vo, H);

var se = [ 3, "com.amazonaws.bedrockruntime", "S3Location", 0, [ "uri", "bucketOwner" ], [ 0, 0 ] ], Ct = [ 3, "com.amazonaws.bedrockruntime", "SearchResultBlock", 0, [ "source", "title", "content", "citations" ], [ 0, 0, () => Oo, () => pt ] ], go = [ 3, "com.amazonaws.bedrockruntime", "SearchResultContentBlock", 0, [ "text" ], [ 0 ] ], fo = [ 3, "com.amazonaws.bedrockruntime", "SearchResultLocation", 0, [ "searchResultIndex", "start", "end" ], [ 1, 1, 1 ] ], ho = [ -3, "com.amazonaws.bedrockruntime", "ServiceQuotaExceededException", {
  ["error"]: "client",
  ["httpError"]: 400
}, [ "message" ], [ 0 ] ];

l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(ho, V);

var So = [ -3, "com.amazonaws.bedrockruntime", "ServiceUnavailableException", {
  ["error"]: "server",
  ["httpError"]: 503
}, [ "message" ], [ 0 ] ];

l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(So, CHt);

var Ao = [ 3, "com.amazonaws.bedrockruntime", "SpecificToolChoice", 0, [ "name" ], [ 0 ] ];

var yo = [ 3, "com.amazonaws.bedrockruntime", "SystemTool", 0, [ "name" ], [ 0 ] ];

var Bo = [ -3, "com.amazonaws.bedrockruntime", "ThrottlingException", {
  ["error"]: "client",
  ["httpError"]: 429
}, [ "message" ], [ 0 ] ];

l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(Bo, THt);

var Ro = [ 3, "com.amazonaws.bedrockruntime", "ToolConfiguration", 0, [ "tools", "toolChoice" ], [ () => No, () => en ] ], Eo = [ 3, "com.amazonaws.bedrockruntime", "ToolResultBlock", 0, [ "toolUseId", "content", "status", "type" ], [ 0, () => Wo, 0, 0 ] ];

var Io = [ 3, "com.amazonaws.bedrockruntime", "ToolSpecification", 0, [ "name", "description", "inputSchema" ], [ 0, 0, () => tn ] ], To = [ 3, "com.amazonaws.bedrockruntime", "ToolUseBlock", 0, [ "toolUseId", "name", "input", "type" ], [ 0, 0, 15, 0 ] ];

var Go = [ -3, "com.amazonaws.bedrockruntime", "ValidationException", {
  ["error"]: "client",
  ["httpError"]: 400
}, [ "message" ], [ 0 ] ];

l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(Go, AHt);

var vt = [ 3, "com.amazonaws.bedrockruntime", "VideoBlock", 0, [ "format", "source" ], [ 0, () => nn ] ], ko = [ 3, "com.amazonaws.bedrockruntime", "WebLocation", 0, [ "url", "domain" ], [ 0, 0 ] ];

var Do = [ -3, "smithy.ts.sdk.synthetic.com.amazonaws.bedrockruntime", "BedrockRuntimeServiceException", 0, [], [] ];

l.TypeRegistry.for("smithy.ts.sdk.synthetic.com.amazonaws.bedrockruntime").registerError(Do, qF);

var Po = [ 1, "com.amazonaws.bedrockruntime", "CitationGeneratedContentList", 0, () => Ho ], bo = [ 1, "com.amazonaws.bedrockruntime", "Citations", 0, () => Jt ], Mo = [ 1, "com.amazonaws.bedrockruntime", "CitationSourceContentList", 0, () => qo ];

var wo = [ 1, "com.amazonaws.bedrockruntime", "ContentBlocks", 0, [ () => jo, 0 ] ], Fo = [ 1, "com.amazonaws.bedrockruntime", "DocumentContentBlocks", 0, () => Xo ];

var Lo = [ 1, "com.amazonaws.bedrockruntime", "Messages", 0, [ () => lo, 0 ] ];

var Oo = [ 1, "com.amazonaws.bedrockruntime", "SearchResultContentBlocks", 0, () => go ], Uo = [ 1, "com.amazonaws.bedrockruntime", "SystemContentBlocks", 0, [ () => Zo, 0 ] ];

var Wo = [ 1, "com.amazonaws.bedrockruntime", "ToolResultContentBlocks", 0, () => on ], No = [ 1, "com.amazonaws.bedrockruntime", "Tools", 0, () => Yo ];

var Ho = [ 3, "com.amazonaws.bedrockruntime", "CitationGeneratedContent", 0, [ "text" ], [ 0 ] ], Vo = [ 3, "com.amazonaws.bedrockruntime", "CitationLocation", 0, [ "web", "documentChar", "documentPage", "documentChunk", "searchResultLocation" ], [ () => ko, () => no, () => so, () => ro, () => fo ] ], qo = [ 3, "com.amazonaws.bedrockruntime", "CitationSourceContent", 0, [ "text" ], [ 0 ] ], jo = [ 3, "com.amazonaws.bedrockruntime", "ContentBlock", 0, [ "text", "image", "document", "video", "toolUse", "toolResult", "guardContent", "cachePoint", "reasoningContent", "citationsContent", "searchResult" ], [ 0, () => xt, () => mt, () => vt, () => To, () => Eo, [ () => gt, 0 ], () => re, [ () => Jo, 0 ], () => Zt, () => Ct ] ];

var $o = [ 3, "com.amazonaws.bedrockruntime", "CountTokensInput", 0, [ "invokeModel", "converse" ], [ [ () => _o, 0 ], [ () => eo, 0 ] ] ], Xo = [ 3, "com.amazonaws.bedrockruntime", "DocumentContentBlock", 0, [ "text" ], [ 0 ] ], zo = [ 3, "com.amazonaws.bedrockruntime", "DocumentSource", 0, [ "bytes", "s3Location", "text", "content" ], [ 21, () => se, 0, () => Fo ] ];

var gt = [ 3, "com.amazonaws.bedrockruntime", "GuardrailConverseContentBlock", 0, [ "text", "image" ], [ () => io, [ () => ao, 0 ] ] ], Qo = [ 3, "com.amazonaws.bedrockruntime", "GuardrailConverseImageSource", 8, [ "bytes" ], [ 21 ] ];

var Ko = [ 3, "com.amazonaws.bedrockruntime", "ImageSource", 0, [ "bytes", "s3Location" ], [ 21, () => se ] ];

var Jo = [ 3, "com.amazonaws.bedrockruntime", "ReasoningContentBlock", 8, [ "reasoningText", "redactedContent" ], [ [ () => Co, 0 ], 21 ] ];

var Zo = [ 3, "com.amazonaws.bedrockruntime", "SystemContentBlock", 0, [ "text", "guardContent", "cachePoint" ], [ 0, [ () => gt, 0 ], () => re ] ], Yo = [ 3, "com.amazonaws.bedrockruntime", "Tool", 0, [ "toolSpec", "systemTool", "cachePoint" ], [ () => Io, () => yo, () => re ] ], en = [ 3, "com.amazonaws.bedrockruntime", "ToolChoice", 0, [ "auto", "any", "tool" ], [ () => Kt, () => Qt, () => Ao ] ], tn = [ 3, "com.amazonaws.bedrockruntime", "ToolInputSchema", 0, [ "json" ], [ 15 ] ];

var on = [ 3, "com.amazonaws.bedrockruntime", "ToolResultContentBlock", 0, [ "json", "text", "image", "document", "video", "searchResult" ], [ 15, 0, () => xt, () => mt, () => vt, () => Ct ] ], nn = [ 3, "com.amazonaws.bedrockruntime", "VideoSource", 0, [ "bytes", "s3Location" ], [ 21, () => se ] ];

var ft = [ 9, "com.amazonaws.bedrockruntime", "CountTokens", {
  ["http"]: [ "POST", "/model/{modelId}/count-tokens", 200 ]
}, () => to, () => oo ];

var ht = we($1()), St = we(Nc());

class SGs extends(St.Command.classBuilder().ep(Be).m(function(e, t, o, r) {
  return [ ht.getEndpointPlugin(o, e.getEndpointParameterInstructions()) ];
}).s("AmazonBedrockFrontendService", "CountTokens", {}).n("BedrockRuntimeClient", "CountTokensCommand").sc(ft).build()){}

export { Njn, bGs, qF, kHt, THt, AHt, CHt, RHt, xHt, SGs };
