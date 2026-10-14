// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _wo, rS } from "./chunk-tz7tmg8b.js";

import { OP } from "./chunk-3yeje51y.js";

import { L0 } from "./chunk-qcf34wnk.js";

import { i5, cT } from "./chunk-fzpaq6a9.js";

import { f3e } from "./chunk-vnxjpmqe.js";

import { Iz } from "./chunk-851qddh7.js";

import { Nc } from "./chunk-fzyt9ct7.js";

import { MP, Swo, OHt, gut } from "./chunk-nj8cgz8s.js";

import { HP } from "./chunk-p5n1wfty.js";

import { DP } from "./chunk-w8hcbtxg.js";

import { Ym } from "./chunk-g7w8fv6g.js";

import { og } from "./chunk-w4hwgefc.js";

import { d$t, _T, lx } from "./chunk-shz68fkm.js";

import { C, Ne } from "./chunk-m8ez8fhk.js";

var Dse = C(function(oo) {
  var so = og();
  function no(e) {
    return e;
  }
  var zr = e => t => async r => {
    if (!so.HttpRequest.isInstance(r.request)) return t(r);
    let {request: s} = r, {handlerProtocol: o = ""} = e.requestHandler.metadata || {};
    if (o.indexOf("h2") >= 0 && !s.headers[":authority"]) delete s.headers.host, s.headers[":authority"] = s.hostname + (s.port ? ":" + s.port : ""); else if (!s.headers.host) {
      let a = s.hostname;
      if (s.port != null) a += `:${s.port}`;
      s.headers.host = a;
    }
    return t(r);
  }, $r = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: [ "HOST" ],
    override: !0
  }, io = e => ({
    applyToStack: t => {
      t.add(zr(e), $r);
    }
  });
  oo.getHostHeaderPlugin = io;
  oo.hostHeaderMiddleware = zr;
  oo.hostHeaderMiddlewareOptions = $r;
  oo.resolveHostHeaderConfig = no;
});

var Lse = C(function(fo) {
  var Br = () => (e, t) => async r => {
    try {
      let s = await e(r), {clientName: o, commandName: a, logger: c, dynamoDbDocumentClientOptions: d = {}} = t, {overrideInputFilterSensitiveLog: f, overrideOutputFilterSensitiveLog: m} = d, y = f ?? t.inputFilterSensitiveLog, b = m ?? t.outputFilterSensitiveLog, {$metadata: x, ...N} = s.output;
      return c?.info?.({
        clientName: o,
        commandName: a,
        input: y(r.input),
        output: b(N),
        metadata: x
      }), s;
    } catch (s) {
      let {clientName: o, commandName: a, logger: c, dynamoDbDocumentClientOptions: d = {}} = t, {overrideInputFilterSensitiveLog: f} = d, m = f ?? t.inputFilterSensitiveLog;
      throw c?.error?.({
        clientName: o,
        commandName: a,
        input: m(r.input),
        error: s,
        metadata: s.$metadata
      }), s;
    }
  }, Lr = {
    name: "loggerMiddleware",
    tags: [ "LOGGER" ],
    step: "initialize",
    override: !0
  }, ho = e => ({
    applyToStack: t => {
      t.add(Br(), Lr);
    }
  });
  fo.getLoggerPlugin = ho;
  fo.loggerMiddleware = Br;
  fo.loggerMiddlewareOptions = Lr;
});

var Vr = C(function(yo) {
  var ze = {
    REQUEST_ID: Symbol.for("_AWS_LAMBDA_REQUEST_ID"),
    X_RAY_TRACE_ID: Symbol.for("_AWS_LAMBDA_X_RAY_TRACE_ID"),
    TENANT_ID: Symbol.for("_AWS_LAMBDA_TENANT_ID")
  }, xt = [ "true", "1" ].includes(process.env?.AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA ?? "");
  if (!xt) globalThis.awslambda = globalThis.awslambda || {};
  class Xe {
    static PROTECTED_KEYS=ze;
    isProtectedKey(e) {
      return Object.values(ze).includes(e);
    }
    getRequestId() {
      return this.get(ze.REQUEST_ID) ?? "-";
    }
    getXRayTraceId() {
      return this.get(ze.X_RAY_TRACE_ID);
    }
    getTenantId() {
      return this.get(ze.TENANT_ID);
    }
  }
  class Ur extends Xe {
    currentContext;
    getContext() {
      return this.currentContext;
    }
    hasContext() {
      return this.currentContext !== void 0;
    }
    get(e) {
      return this.currentContext?.[e];
    }
    set(e, t) {
      if (this.isProtectedKey(e)) throw Error(`Cannot modify protected Lambda context field: ${String(e)}`);
      this.currentContext = this.currentContext || {}, this.currentContext[e] = t;
    }
    run(e, t) {
      this.currentContext = e;
      try {
        return t();
      } finally {
        this.currentContext = void 0;
      }
    }
  }
  class Nt extends Xe {
    als;
    static async create() {
      let e = new Nt, t = await import("async_hooks");
      return e.als = new t.AsyncLocalStorage, e;
    }
    getContext() {
      return this.als.getStore();
    }
    hasContext() {
      return this.als.getStore() !== void 0;
    }
    get(e) {
      return this.als.getStore()?.[e];
    }
    set(e, t) {
      if (this.isProtectedKey(e)) throw Error(`Cannot modify protected Lambda context field: ${String(e)}`);
      let r = this.als.getStore();
      if (!r) throw Error("No context available");
      r[e] = t;
    }
    run(e, t) {
      return this.als.run(e, t);
    }
  }
  yo.InvokeStore = void 0;
  (function(e) {
    let t = null;
    async function r() {
      if (!t) t = (async () => {
        let o = "AWS_LAMBDA_MAX_CONCURRENCY" in process.env ? await Nt.create() : new Ur;
        if (!xt && globalThis.awslambda?.InvokeStore) return globalThis.awslambda.InvokeStore; else if (!xt && globalThis.awslambda) return globalThis.awslambda.InvokeStore = o, 
        o; else return o;
      })();
      return t;
    }
    e.getInstanceAsync = r, e._testing = process.env.AWS_LAMBDA_BENCHMARK_MODE === "1" ? {
      reset: () => {
        if (t = null, globalThis.awslambda?.InvokeStore) delete globalThis.awslambda.InvokeStore;
        globalThis.awslambda = {};
      }
    } : void 0;
  })(yo.InvokeStore || (yo.InvokeStore = {}));
  yo.InvokeStoreBase = Xe;
});

var Gr = C(function(qr) {
  Object.defineProperty(qr, "__esModule", {
    value: !0
  });
  qr.recursionDetectionMiddleware = void 0;
  var Fr = Vr(), jr = og(), Tt = "X-Amzn-Trace-Id", So = "AWS_LAMBDA_FUNCTION_NAME", wo = "_X_AMZN_TRACE_ID", xo = () => e => async t => {
    let {request: r} = t;
    if (!jr.HttpRequest.isInstance(r)) return e(t);
    let s = Object.keys(r.headers ?? {}).find(y => y.toLowerCase() === Tt.toLowerCase()) ?? Tt;
    if (r.headers.hasOwnProperty(s)) return e(t);
    let o = process.env[So], a = process.env[wo], f = (await Fr.InvokeStore.getInstanceAsync())?.getXRayTraceId() ?? a, m = y => typeof y === "string" && y.length > 0;
    if (m(o) && m(f)) r.headers[Tt] = f;
    return e({
      ...t,
      request: r
    });
  };
  qr.recursionDetectionMiddleware = xo;
});

var Nse = C(function(Ct) {
  var _t = Gr(), bo = {
    step: "build",
    tags: [ "RECURSION_DETECTION" ],
    name: "recursionDetectionMiddleware",
    override: !0,
    priority: "low"
  }, No = e => ({
    applyToStack: t => {
      t.add(_t.recursionDetectionMiddleware(), bo);
    }
  });
  Ct.getRecursionDetectionPlugin = No;
  Object.keys(_t).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(Ct, e)) Object.defineProperty(Ct, e, {
      enumerable: !0,
      get: function() {
        return _t[e];
      }
    });
  });
});

var pZ = C(function(We) {
  var Ae = i5(), _o = Iz(), Wr = (e, t = !1) => {
    if (t) {
      for (let r of e.split(".")) if (!Wr(r)) return !1;
      return !0;
    }
    if (!Ae.isValidHostLabel(e)) return !1;
    if (e.length < 3 || e.length > 63) return !1;
    if (e !== e.toLowerCase()) return !1;
    if (Ae.isIpAddress(e)) return !1;
    return !0;
  }, Xr = ":", Co = "/", Ao = e => {
    let t = e.split(Xr);
    if (t.length < 6) return null;
    let [r, s, o, a, c, ...d] = t;
    if (r !== "arn" || s === "" || o === "" || d.join(Xr) === "") return null;
    let f = d.map(m => m.split(Co)).flat();
    return {
      partition: s,
      service: o,
      region: a,
      accountId: c,
      resourceId: f
    };
  }, Ro = [ {
    id: "aws",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      implicitGlobalRegion: "us-east-1",
      name: "aws",
      supportsDualStack: !0,
      supportsFIPS: !0
    },
    regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
    regions: {
      "af-south-1": {
        description: "Africa (Cape Town)"
      },
      "ap-east-1": {
        description: "Asia Pacific (Hong Kong)"
      },
      "ap-east-2": {
        description: "Asia Pacific (Taipei)"
      },
      "ap-northeast-1": {
        description: "Asia Pacific (Tokyo)"
      },
      "ap-northeast-2": {
        description: "Asia Pacific (Seoul)"
      },
      "ap-northeast-3": {
        description: "Asia Pacific (Osaka)"
      },
      "ap-south-1": {
        description: "Asia Pacific (Mumbai)"
      },
      "ap-south-2": {
        description: "Asia Pacific (Hyderabad)"
      },
      "ap-southeast-1": {
        description: "Asia Pacific (Singapore)"
      },
      "ap-southeast-2": {
        description: "Asia Pacific (Sydney)"
      },
      "ap-southeast-3": {
        description: "Asia Pacific (Jakarta)"
      },
      "ap-southeast-4": {
        description: "Asia Pacific (Melbourne)"
      },
      "ap-southeast-5": {
        description: "Asia Pacific (Malaysia)"
      },
      "ap-southeast-6": {
        description: "Asia Pacific (New Zealand)"
      },
      "ap-southeast-7": {
        description: "Asia Pacific (Thailand)"
      },
      "aws-global": {
        description: "aws global region"
      },
      "ca-central-1": {
        description: "Canada (Central)"
      },
      "ca-west-1": {
        description: "Canada West (Calgary)"
      },
      "eu-central-1": {
        description: "Europe (Frankfurt)"
      },
      "eu-central-2": {
        description: "Europe (Zurich)"
      },
      "eu-north-1": {
        description: "Europe (Stockholm)"
      },
      "eu-south-1": {
        description: "Europe (Milan)"
      },
      "eu-south-2": {
        description: "Europe (Spain)"
      },
      "eu-west-1": {
        description: "Europe (Ireland)"
      },
      "eu-west-2": {
        description: "Europe (London)"
      },
      "eu-west-3": {
        description: "Europe (Paris)"
      },
      "il-central-1": {
        description: "Israel (Tel Aviv)"
      },
      "me-central-1": {
        description: "Middle East (UAE)"
      },
      "me-south-1": {
        description: "Middle East (Bahrain)"
      },
      "mx-central-1": {
        description: "Mexico (Central)"
      },
      "sa-east-1": {
        description: "South America (Sao Paulo)"
      },
      "us-east-1": {
        description: "US East (N. Virginia)"
      },
      "us-east-2": {
        description: "US East (Ohio)"
      },
      "us-west-1": {
        description: "US West (N. California)"
      },
      "us-west-2": {
        description: "US West (Oregon)"
      }
    }
  }, {
    id: "aws-cn",
    outputs: {
      dnsSuffix: "amazonaws.com.cn",
      dualStackDnsSuffix: "api.amazonwebservices.com.cn",
      implicitGlobalRegion: "cn-northwest-1",
      name: "aws-cn",
      supportsDualStack: !0,
      supportsFIPS: !0
    },
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    regions: {
      "aws-cn-global": {
        description: "aws-cn global region"
      },
      "cn-north-1": {
        description: "China (Beijing)"
      },
      "cn-northwest-1": {
        description: "China (Ningxia)"
      }
    }
  }, {
    id: "aws-eusc",
    outputs: {
      dnsSuffix: "amazonaws.eu",
      dualStackDnsSuffix: "api.amazonwebservices.eu",
      implicitGlobalRegion: "eusc-de-east-1",
      name: "aws-eusc",
      supportsDualStack: !0,
      supportsFIPS: !0
    },
    regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
    regions: {
      "eusc-de-east-1": {
        description: "EU (Germany)"
      }
    }
  }, {
    id: "aws-iso",
    outputs: {
      dnsSuffix: "c2s.ic.gov",
      dualStackDnsSuffix: "api.aws.ic.gov",
      implicitGlobalRegion: "us-iso-east-1",
      name: "aws-iso",
      supportsDualStack: !0,
      supportsFIPS: !0
    },
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-global": {
        description: "aws-iso global region"
      },
      "us-iso-east-1": {
        description: "US ISO East"
      },
      "us-iso-west-1": {
        description: "US ISO WEST"
      }
    }
  }, {
    id: "aws-iso-b",
    outputs: {
      dnsSuffix: "sc2s.sgov.gov",
      dualStackDnsSuffix: "api.aws.scloud",
      implicitGlobalRegion: "us-isob-east-1",
      name: "aws-iso-b",
      supportsDualStack: !0,
      supportsFIPS: !0
    },
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-b-global": {
        description: "aws-iso-b global region"
      },
      "us-isob-east-1": {
        description: "US ISOB East (Ohio)"
      },
      "us-isob-west-1": {
        description: "US ISOB West"
      }
    }
  }, {
    id: "aws-iso-e",
    outputs: {
      dnsSuffix: "cloud.adc-e.uk",
      dualStackDnsSuffix: "api.cloud-aws.adc-e.uk",
      implicitGlobalRegion: "eu-isoe-west-1",
      name: "aws-iso-e",
      supportsDualStack: !0,
      supportsFIPS: !0
    },
    regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-e-global": {
        description: "aws-iso-e global region"
      },
      "eu-isoe-west-1": {
        description: "EU ISOE West"
      }
    }
  }, {
    id: "aws-iso-f",
    outputs: {
      dnsSuffix: "csp.hci.ic.gov",
      dualStackDnsSuffix: "api.aws.hci.ic.gov",
      implicitGlobalRegion: "us-isof-south-1",
      name: "aws-iso-f",
      supportsDualStack: !0,
      supportsFIPS: !0
    },
    regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-f-global": {
        description: "aws-iso-f global region"
      },
      "us-isof-east-1": {
        description: "US ISOF EAST"
      },
      "us-isof-south-1": {
        description: "US ISOF SOUTH"
      }
    }
  }, {
    id: "aws-us-gov",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      implicitGlobalRegion: "us-gov-west-1",
      name: "aws-us-gov",
      supportsDualStack: !0,
      supportsFIPS: !0
    },
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    regions: {
      "aws-us-gov-global": {
        description: "aws-us-gov global region"
      },
      "us-gov-east-1": {
        description: "AWS GovCloud (US-East)"
      },
      "us-gov-west-1": {
        description: "AWS GovCloud (US-West)"
      }
    }
  } ], Io = "1.1", Kr = {
    partitions: Ro,
    version: Io
  }, Qr = Kr, Yr = "", Jr = e => {
    let {partitions: t} = Qr;
    for (let s of t) {
      let {regions: o, outputs: a} = s;
      for (let [c, d] of Object.entries(o)) if (c === e) return {
        ...a,
        ...d
      };
    }
    for (let s of t) {
      let {regionRegex: o, outputs: a} = s;
      if (new RegExp(o).test(e)) return {
        ...a
      };
    }
    let r = t.find(s => s.id === "aws");
    if (!r) throw Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
    return {
      ...r.outputs
    };
  }, Zr = (e, t = "") => {
    Qr = e, Yr = t;
  }, Oo = () => {
    Zr(Kr, "");
  }, Mo = () => Yr, es = {
    isVirtualHostableS3Bucket: Wr,
    parseArn: Ao,
    partition: Jr
  };
  Ae.customEndpointFunctions.aws = es;
  var Do = e => {
    if (typeof e.endpointProvider !== "function") throw Error("@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.");
    let {endpoint: t} = e;
    if (t === void 0) e.endpoint = async () => ts(e.endpointProvider({
      Region: typeof e.region === "function" ? await e.region() : e.region,
      UseDualStack: typeof e.useDualstackEndpoint === "function" ? await e.useDualstackEndpoint() : e.useDualstackEndpoint,
      UseFIPS: typeof e.useFipsEndpoint === "function" ? await e.useFipsEndpoint() : e.useFipsEndpoint,
      Endpoint: void 0
    }, {
      logger: e.logger
    }));
    return e;
  }, ts = e => _o.parseUrl(e.url);
  Object.defineProperty(We, "EndpointError", {
    enumerable: !0,
    get: function() {
      return Ae.EndpointError;
    }
  });
  Object.defineProperty(We, "isIpAddress", {
    enumerable: !0,
    get: function() {
      return Ae.isIpAddress;
    }
  });
  Object.defineProperty(We, "resolveEndpoint", {
    enumerable: !0,
    get: function() {
      return Ae.resolveEndpoint;
    }
  });
  We.awsEndpointFunctions = es;
  We.getUserAgentPrefix = Mo;
  We.partition = Jr;
  We.resolveDefaultAwsRegionalEndpointsConfig = Do;
  We.setPartitionInfo = Zr;
  We.toEndpointV1 = ts;
  We.useDefaultPartitionInfo = Oo;
});

var ss = C(function(Vo) {
  var rs = typeof TextEncoder == "function" ? new TextEncoder : null, Uo = e => {
    if (typeof e === "string") {
      if (rs) return rs.encode(e).byteLength;
      let t = e.length;
      for (let r = t - 1; r >= 0; r--) {
        let s = e.charCodeAt(r);
        if (s > 127 && s <= 2047) t++; else if (s > 2047 && s <= 65535) t += 2;
        if (s >= 56320 && s <= 57343) r--;
      }
      return t;
    } else if (typeof e.byteLength === "number") return e.byteLength; else if (typeof e.size === "number") return e.size;
    throw Error(`Body Length computation failed for ${e}`);
  };
  Vo.calculateBodyLength = Uo;
});

var Ut = C(function(da) {
  var Ze = OHt(), as = _T(), Be = gut(), jo = og(), qo = ss(), Re = MP(), Ho = DP(), cs = lx(), Ye = 0, Je = 1, Te = 2, fe = 3, $e = 4, Ke = 5, us = 6, At = 7, ls = 20, Ot = 21, ds = 22, Go = 23, Dt = 24, _e = 25, Ce = 26, pe = 27, Pt = 31;
  function Ie(e) {
    return typeof Buffer < "u" ? Buffer.alloc(e) : new Uint8Array(e);
  }
  var kt = Symbol("@smithy/core/cbor::tagSymbol");
  function vt(e) {
    return e[kt] = !0, e;
  }
  var Xo = typeof TextDecoder < "u", Wo = typeof Buffer < "u", V = Ie(0), ue = new DataView(V.buffer, V.byteOffset, V.byteLength), ns = Xo ? new TextDecoder : null, P = 0;
  function Ko(e) {
    V = e, ue = new DataView(V.buffer, V.byteOffset, V.byteLength);
  }
  function le(e, t) {
    if (e >= t) throw Error("unexpected end of (decode) payload.");
    let r = (V[e] & 224) >> 5, s = V[e] & 31;
    switch (r) {
     case Ye:
     case Je:
     case us:
      let o, a;
      if (s < 24) o = s, a = 1; else switch (s) {
       case Dt:
       case _e:
       case Ce:
       case pe:
        let c = fs[s], d = c + 1;
        if (a = d, t - e < d) throw Error(`countLength ${c} greater than remaining buf len.`);
        let f = e + 1;
        if (c === 1) o = V[f]; else if (c === 2) o = ue.getUint16(f); else if (c === 4) o = ue.getUint32(f); else o = ue.getBigUint64(f);
        break;

       default:
        throw Error(`unexpected minor value ${s}.`);
      }
      if (r === Ye) return P = a, Rt(o); else if (r === Je) {
        let c;
        if (typeof o === "bigint") c = BigInt(-1) - o; else c = -1 - o;
        return P = a, Rt(c);
      } else if (s === 2 || s === 3) {
        let c = Le(e + a, t), d = BigInt(0), f = e + a + P;
        for (let m = f; m < f + c; ++m) d = d << BigInt(8) | BigInt(V[m]);
        return P = a + P + c, s === 3 ? -d - BigInt(1) : d;
      } else if (s === 4) {
        let c = le(e + a, t), [d, f] = c, m = f < 0 ? -1 : 1, y = "0".repeat(Math.abs(d) + 1) + String(BigInt(m) * BigInt(f)), b, x = f < 0 ? "-" : "";
        if (b = d === 0 ? y : y.slice(0, y.length + d) + "." + y.slice(d), b = b.replace(/^0+/g, ""), 
        b === "") b = "0";
        if (b[0] === ".") b = "0" + b;
        return b = x + b, P = a + P, Ze.nv(b);
      } else {
        let c = le(e + a, t);
        return P = a + P, vt({
          tag: Rt(o),
          value: c
        });
      }

     case fe:
     case Ke:
     case $e:
     case Te:
      if (s === Pt) switch (r) {
       case fe:
        return Zo(e, t);

       case Ke:
        return na(e, t);

       case $e:
        return ra(e, t);

       case Te:
        return ea(e, t);
      } else switch (r) {
       case fe:
        return Jo(e, t);

       case Ke:
        return sa(e, t);

       case $e:
        return ta(e, t);

       case Te:
        return zt(e, t);
      }

     default:
      return ia(e, t);
    }
  }
  function hs(e, t, r) {
    if (Wo && e.constructor?.name === "Buffer") return e.toString("utf-8", t, r);
    if (ns) return ns.decode(e.subarray(t, r));
    return as.toUtf8(e.subarray(t, r));
  }
  function Qo(e) {
    let t = Number(e);
    if (t < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < t) console.warn(Error(`@smithy/core/cbor - truncating BigInt(${e}) to ${t} with loss of precision.`));
    return t;
  }
  var fs = {
    [Dt]: 1,
    [_e]: 2,
    [Ce]: 4,
    [pe]: 8
  };
  function Yo(e, t) {
    let r = e >> 7, s = (e & 124) >> 2, o = (e & 3) << 8 | t, a = r === 0 ? 1 : -1, c, d;
    if (s === 0) if (o === 0) return 0; else c = Math.pow(2, -14), d = 0; else if (s === 31) if (o === 0) return a * (1 / 0); else return NaN; else c = Math.pow(2, s - 15), 
    d = 1;
    return d += o / 1024, a * (c * d);
  }
  function Le(e, t) {
    let r = V[e] & 31;
    if (r < 24) return P = 1, r;
    if (r === Dt || r === _e || r === Ce || r === pe) {
      let s = fs[r];
      if (P = s + 1, t - e < P) throw Error(`countLength ${s} greater than remaining buf len.`);
      let o = e + 1;
      if (s === 1) return V[o]; else if (s === 2) return ue.getUint16(o); else if (s === 4) return ue.getUint32(o);
      return Qo(ue.getBigUint64(o));
    }
    throw Error(`unexpected minor value ${r}.`);
  }
  function Jo(e, t) {
    let r = Le(e, t), s = P;
    if (e += s, t - e < r) throw Error(`string len ${r} greater than remaining buf len.`);
    let o = hs(V, e, e + r);
    return P = s + r, o;
  }
  function Zo(e, t) {
    e += 1;
    let r = [];
    for (let s = e; e < t; ) {
      if (V[e] === 255) {
        let f = Ie(r.length);
        return f.set(r, 0), P = e - s + 2, hs(f, 0, f.length);
      }
      let o = (V[e] & 224) >> 5, a = V[e] & 31;
      if (o !== fe) throw Error(`unexpected major type ${o} in indefinite string.`);
      if (a === Pt) throw Error("nested indefinite string.");
      let c = zt(e, t);
      e += P;
      for (let f = 0; f < c.length; ++f) r.push(c[f]);
    }
    throw Error("expected break marker.");
  }
  function zt(e, t) {
    let r = Le(e, t), s = P;
    if (e += s, t - e < r) throw Error(`unstructured byte string len ${r} greater than remaining buf len.`);
    let o = V.subarray(e, e + r);
    return P = s + r, o;
  }
  function ea(e, t) {
    e += 1;
    let r = [];
    for (let s = e; e < t; ) {
      if (V[e] === 255) {
        let f = Ie(r.length);
        return f.set(r, 0), P = e - s + 2, f;
      }
      let o = (V[e] & 224) >> 5, a = V[e] & 31;
      if (o !== Te) throw Error(`unexpected major type ${o} in indefinite string.`);
      if (a === Pt) throw Error("nested indefinite string.");
      let c = zt(e, t);
      e += P;
      for (let f = 0; f < c.length; ++f) r.push(c[f]);
    }
    throw Error("expected break marker.");
  }
  function ta(e, t) {
    let r = Le(e, t), s = P;
    e += s;
    let o = e, a = Array(r);
    for (let c = 0; c < r; ++c) {
      let d = le(e, t), f = P;
      a[c] = d, e += f;
    }
    return P = s + (e - o), a;
  }
  function ra(e, t) {
    e += 1;
    let r = [];
    for (let s = e; e < t; ) {
      if (V[e] === 255) return P = e - s + 2, r;
      let o = le(e, t);
      e += P, r.push(o);
    }
    throw Error("expected break marker.");
  }
  function sa(e, t) {
    let r = Le(e, t), s = P;
    e += s;
    let o = e, a = {};
    for (let c = 0; c < r; ++c) {
      if (e >= t) throw Error("unexpected end of map payload.");
      let d = (V[e] & 224) >> 5;
      if (d !== fe) throw Error(`unexpected major type ${d} for map key at index ${e}.`);
      let f = le(e, t);
      e += P;
      let m = le(e, t);
      e += P, a[f] = m;
    }
    return P = s + (e - o), a;
  }
  function na(e, t) {
    e += 1;
    let r = e, s = {};
    for (;e < t; ) {
      if (e >= t) throw Error("unexpected end of map payload.");
      if (V[e] === 255) return P = e - r + 2, s;
      let o = (V[e] & 224) >> 5;
      if (o !== fe) throw Error(`unexpected major type ${o} for map key.`);
      let a = le(e, t);
      e += P;
      let c = le(e, t);
      e += P, s[a] = c;
    }
    throw Error("expected break marker.");
  }
  function ia(e, t) {
    let r = V[e] & 31;
    switch (r) {
     case Ot:
     case ls:
      return P = 1, r === Ot;

     case ds:
      return P = 1, null;

     case Go:
      return P = 1, null;

     case _e:
      if (t - e < 3) throw Error("incomplete float16 at end of buf.");
      return P = 3, Yo(V[e + 1], V[e + 2]);

     case Ce:
      if (t - e < 5) throw Error("incomplete float32 at end of buf.");
      return P = 5, ue.getFloat32(e + 1);

     case pe:
      if (t - e < 9) throw Error("incomplete float64 at end of buf.");
      return P = 9, ue.getFloat64(e + 1);

     default:
      throw Error(`unexpected minor value ${r}.`);
    }
  }
  function Rt(e) {
    if (typeof e === "number") return e;
    let t = Number(e);
    if (Number.MIN_SAFE_INTEGER <= t && t <= Number.MAX_SAFE_INTEGER) return t;
    return e;
  }
  var is = typeof Buffer < "u", oa = 2048, O = Ie(oa), ce = new DataView(O.buffer, O.byteOffset, O.byteLength), R = 0;
  function It(e) {
    if (O.byteLength - R < e) if (R < 16e6) Mt(Math.max(O.byteLength * 4, O.byteLength + e)); else Mt(O.byteLength + e + 16e6);
  }
  function os() {
    let e = Ie(R);
    return e.set(O.subarray(0, R), 0), R = 0, e;
  }
  function Mt(e) {
    let t = O;
    if (O = Ie(e), t) if (t.copy) t.copy(O, 0, 0, t.byteLength); else O.set(t, 0);
    ce = new DataView(O.buffer, O.byteOffset, O.byteLength);
  }
  function ae(e, t) {
    if (t < 24) O[R++] = e << 5 | t; else if (t < 256) O[R++] = e << 5 | 24, O[R++] = t; else if (t < 65536) O[R++] = e << 5 | _e, 
    ce.setUint16(R, t), R += 2; else if (t < 4294967296) O[R++] = e << 5 | Ce, ce.setUint32(R, t), 
    R += 4; else O[R++] = e << 5 | pe, ce.setBigUint64(R, typeof t === "bigint" ? t : BigInt(t)), 
    R += 8;
  }
  function aa(e) {
    let t = [ e ];
    while (t.length) {
      let r = t.pop();
      if (It(typeof r === "string" ? r.length * 4 : 64), typeof r === "string") {
        if (is) ae(fe, Buffer.byteLength(r)), R += O.write(r, R); else {
          let s = as.fromUtf8(r);
          ae(fe, s.byteLength), O.set(s, R), R += s.byteLength;
        }
        continue;
      } else if (typeof r === "number") {
        if (Number.isInteger(r)) {
          let s = r >= 0, o = s ? Ye : Je, a = s ? r : -r - 1;
          if (a < 24) O[R++] = o << 5 | a; else if (a < 256) O[R++] = o << 5 | 24, O[R++] = a; else if (a < 65536) O[R++] = o << 5 | _e, 
          O[R++] = a >> 8, O[R++] = a; else if (a < 4294967296) O[R++] = o << 5 | Ce, ce.setUint32(R, a), 
          R += 4; else O[R++] = o << 5 | pe, ce.setBigUint64(R, BigInt(a)), R += 8;
          continue;
        }
        O[R++] = At << 5 | pe, ce.setFloat64(R, r), R += 8;
        continue;
      } else if (typeof r === "bigint") {
        let s = r >= 0, o = s ? Ye : Je, a = s ? r : -r - BigInt(1), c = Number(a);
        if (c < 24) O[R++] = o << 5 | c; else if (c < 256) O[R++] = o << 5 | 24, O[R++] = c; else if (c < 65536) O[R++] = o << 5 | _e, 
        O[R++] = c >> 8, O[R++] = c & 255; else if (c < 4294967296) O[R++] = o << 5 | Ce, 
        ce.setUint32(R, c), R += 4; else if (a < BigInt("18446744073709551616")) O[R++] = o << 5 | pe, 
        ce.setBigUint64(R, a), R += 8; else {
          let d = a.toString(2), f = new Uint8Array(Math.ceil(d.length / 8)), m = a, y = 0;
          while (f.byteLength - ++y >= 0) f[f.byteLength - y] = Number(m & BigInt(255)), m >>= BigInt(8);
          if (It(f.byteLength * 2), O[R++] = s ? 194 : 195, is) ae(Te, Buffer.byteLength(f)); else ae(Te, f.byteLength);
          O.set(f, R), R += f.byteLength;
        }
        continue;
      } else if (r === null) {
        O[R++] = At << 5 | ds;
        continue;
      } else if (typeof r === "boolean") {
        O[R++] = At << 5 | (r ? Ot : ls);
        continue;
      } else if (typeof r > "u") throw Error("@smithy/core/cbor: client may not serialize undefined value."); else if (Array.isArray(r)) {
        for (let s = r.length - 1; s >= 0; --s) t.push(r[s]);
        ae($e, r.length);
        continue;
      } else if (typeof r.byteLength === "number") {
        It(r.length * 2), ae(Te, r.length), O.set(r, R), R += r.byteLength;
        continue;
      } else if (typeof r === "object") {
        if (r instanceof Ze.NumericValue) {
          let o = r.string.indexOf("."), a = o === -1 ? 0 : o - r.string.length + 1, c = BigInt(r.string.replace(".", ""));
          O[R++] = 196, t.push(c), t.push(a), ae($e, 2);
          continue;
        }
        if (r[kt]) if ("tag" in r && "value" in r) {
          t.push(r.value), ae(us, r.tag);
          continue;
        } else throw Error("tag encountered with missing fields, need 'tag' and 'value', found: " + JSON.stringify(r));
        let s = Object.keys(r);
        for (let o = s.length - 1; o >= 0; --o) {
          let a = s[o];
          t.push(r[a]), t.push(a);
        }
        ae(Ke, s.length);
        continue;
      }
      throw Error(`data type ${r?.constructor?.name ?? typeof r} not compatible for encoding.`);
    }
  }
  var et = {
    deserialize(e) {
      return Ko(e), le(0, e.length);
    },
    serialize(e) {
      try {
        return aa(e), os();
      } catch (t) {
        throw os(), t;
      }
    },
    resizeEncodingBuffer(e) {
      Mt(e);
    }
  }, ps = (e, t) => Be.collectBody(e, t).then(async r => {
    if (r.length) try {
      return et.deserialize(r);
    } catch (s) {
      throw Object.defineProperty(s, "$responseBodyText", {
        value: t.utf8Encoder(r)
      }), s;
    }
    return {};
  }), Qe = e => vt({
    tag: 1,
    value: e.getTime() / 1e3
  }), ca = async (e, t) => {
    let r = await ps(e, t);
    return r.message = r.message ?? r.Message, r;
  }, ms = (e, t) => {
    let r = o => {
      let a = o;
      if (typeof a === "number") a = a.toString();
      if (a.indexOf(",") >= 0) a = a.split(",")[0];
      if (a.indexOf(":") >= 0) a = a.split(":")[0];
      if (a.indexOf("#") >= 0) a = a.split("#")[1];
      return a;
    };
    if (t.__type !== void 0) return r(t.__type);
    let s = Object.keys(t).find(o => o.toLowerCase() === "code");
    if (s && t[s] !== void 0) return r(t[s]);
  }, ua = e => {
    if (String(e.headers["smithy-protocol"]).toLowerCase() !== "rpc-v2-cbor") throw Error("Malformed RPCv2 CBOR response, status: " + e.statusCode);
  }, la = async (e, t, r, s, o) => {
    let {hostname: a, protocol: c = "https", port: d, path: f} = await e.endpoint(), m = {
      protocol: c,
      hostname: a,
      port: d,
      method: "POST",
      path: f.endsWith("/") ? f.slice(0, -1) + r : f + r,
      headers: {
        ...t
      }
    };
    if (s !== void 0) m.hostname = s;
    if (o !== void 0) {
      m.body = o;
      try {
        m.headers["content-length"] = String(qo.calculateBodyLength(o));
      } catch (y) {}
    }
    return new jo.HttpRequest(m);
  };
  class $t extends Be.SerdeContext {
    createSerializer() {
      let e = new Bt;
      return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
      let e = new Lt;
      return e.setSerdeContext(this.serdeContext), e;
    }
  }
  class Bt extends Be.SerdeContext {
    value;
    write(e, t) {
      this.value = this.serialize(e, t);
    }
    serialize(e, t) {
      let r = Re.NormalizedSchema.of(e);
      if (t == null) {
        if (r.isIdempotencyToken()) return Ze.generateIdempotencyToken();
        return t;
      }
      if (r.isBlobSchema()) {
        if (typeof t === "string") return (this.serdeContext?.base64Decoder ?? cs.fromBase64)(t);
        return t;
      }
      if (r.isTimestampSchema()) {
        if (typeof t === "number" || typeof t === "bigint") return Qe(new Date(Number(t) / 1e3 | 0));
        return Qe(t);
      }
      if (typeof t === "function" || typeof t === "object") {
        let s = t;
        if (r.isListSchema() && Array.isArray(s)) {
          let a = !!r.getMergedTraits().sparse, c = [], d = 0;
          for (let f of s) {
            let m = this.serialize(r.getValueSchema(), f);
            if (m != null || a) c[d++] = m;
          }
          return c;
        }
        if (s instanceof Date) return Qe(s);
        let o = {};
        if (r.isMapSchema()) {
          let a = !!r.getMergedTraits().sparse;
          for (let c of Object.keys(s)) {
            let d = this.serialize(r.getValueSchema(), s[c]);
            if (d != null || a) o[c] = d;
          }
        } else if (r.isStructSchema()) for (let [a, c] of r.structIterator()) {
          let d = this.serialize(c, s[a]);
          if (d != null) o[a] = d;
        } else if (r.isDocumentSchema()) for (let a of Object.keys(s)) o[a] = this.serialize(r.getValueSchema(), s[a]);
        return o;
      }
      return t;
    }
    flush() {
      let e = et.serialize(this.value);
      return this.value = void 0, e;
    }
  }
  class Lt extends Be.SerdeContext {
    read(e, t) {
      let r = et.deserialize(t);
      return this.readValue(e, r);
    }
    readValue(e, t) {
      let r = Re.NormalizedSchema.of(e);
      if (r.isTimestampSchema() && typeof t === "number") return Ze._parseEpochTimestamp(t);
      if (r.isBlobSchema()) {
        if (typeof t === "string") return (this.serdeContext?.base64Decoder ?? cs.fromBase64)(t);
        return t;
      }
      if (typeof t > "u" || typeof t === "boolean" || typeof t === "number" || typeof t === "string" || typeof t === "bigint" || typeof t === "symbol") return t; else if (typeof t === "function" || typeof t === "object") {
        if (t === null) return null;
        if ("byteLength" in t) return t;
        if (t instanceof Date) return t;
        if (r.isDocumentSchema()) return t;
        if (r.isListSchema()) {
          let o = [], a = r.getValueSchema(), c = !!r.getMergedTraits().sparse;
          for (let d of t) {
            let f = this.readValue(a, d);
            if (f != null || c) o.push(f);
          }
          return o;
        }
        let s = {};
        if (r.isMapSchema()) {
          let o = !!r.getMergedTraits().sparse, a = r.getValueSchema();
          for (let c of Object.keys(t)) {
            let d = this.readValue(a, t[c]);
            if (d != null || o) s[c] = d;
          }
        } else if (r.isStructSchema()) for (let [o, a] of r.structIterator()) {
          let c = this.readValue(a, t[o]);
          if (c != null) s[o] = c;
        }
        return s;
      } else return t;
    }
  }
  class gs extends Be.RpcProtocol {
    codec=new $t;
    serializer=this.codec.createSerializer();
    deserializer=this.codec.createDeserializer();
    constructor({defaultNamespace: e}) {
      super({
        defaultNamespace: e
      });
    }
    getShapeId() {
      return "smithy.protocols#rpcv2Cbor";
    }
    getPayloadCodec() {
      return this.codec;
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (Object.assign(s.headers, {
        "content-type": this.getDefaultContentType(),
        "smithy-protocol": "rpc-v2-cbor",
        accept: this.getDefaultContentType()
      }), Re.deref(e.input) === "unit") delete s.body, delete s.headers["content-type"]; else {
        if (!s.body) this.serializer.write(15, {}), s.body = this.serializer.flush();
        try {
          s.headers["content-length"] = String(s.body.byteLength);
        } catch (d) {}
      }
      let {service: o, operation: a} = Ho.getSmithyContext(r), c = `/service/${o}/operation/${a}`;
      if (s.path.endsWith("/")) s.path += c.slice(1); else s.path += c;
      return s;
    }
    async deserializeResponse(e, t, r) {
      return super.deserializeResponse(e, t, r);
    }
    async handleError(e, t, r, s, o) {
      let a = ms(r, s) ?? "Unknown", c = this.options.defaultNamespace;
      if (a.includes("#")) [c] = a.split("#");
      let d = {
        $metadata: o,
        $fault: r.statusCode <= 500 ? "client" : "server"
      }, f = Re.TypeRegistry.for(c), m;
      try {
        m = f.getSchema(a);
      } catch (I) {
        if (s.Message) s.message = s.Message;
        let F = Re.TypeRegistry.for("smithy.ts.sdk.synthetic." + c), v = F.getBaseException();
        if (v) {
          let W = F.getErrorCtor(v);
          throw Object.assign(new W({
            name: a
          }), d, s);
        }
        throw Object.assign(Error(a), d, s);
      }
      let y = Re.NormalizedSchema.of(m), b = f.getErrorCtor(m), x = s.message ?? s.Message ?? "Unknown", N = new b(x), T = {};
      for (let [I, F] of y.structIterator()) T[I] = this.deserializer.readValue(F, s[I]);
      throw Object.assign(N, d, {
        $fault: y.getMergedTraits().error,
        message: x
      }, T);
    }
    getDefaultContentType() {
      return "application/cbor";
    }
  }
  da.CborCodec = $t;
  da.CborShapeDeserializer = Lt;
  da.CborShapeSerializer = Bt;
  da.SmithyRpcV2CborProtocol = gs;
  da.buildHttpRpcRequest = la;
  da.cbor = et;
  da.checkCborResponse = ua;
  da.dateToTag = Qe;
  da.loadSmithyRpcV2CborErrorCode = ms;
  da.parseCborBody = ps;
  da.parseCborErrorBody = ca;
  da.tag = vt;
  da.tagSymbol = kt;
});

var Es = C(function(Sh, ys) {
  (() => {
    var e = {
      d: (n, i) => {
        for (var u in i) e.o(i, u) && !e.o(n, u) && Object.defineProperty(n, u, {
          enumerable: !0,
          get: i[u]
        });
      },
      o: (n, i) => Object.prototype.hasOwnProperty.call(n, i),
      r: n => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(n, "__esModule", {
          value: !0
        });
      }
    }, t = {};
    e.r(t), e.d(t, {
      XMLBuilder: () => to,
      XMLParser: () => Mr,
      XMLValidator: () => ro
    });
    let r = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", s = new RegExp("^[" + r + "][" + r + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
    function o(n, i) {
      let u = [], l = i.exec(n);
      for (;l; ) {
        let p = [];
        p.startIndex = i.lastIndex - l[0].length;
        let h = l.length;
        for (let S = 0; S < h; S++) p.push(l[S]);
        u.push(p), l = i.exec(n);
      }
      return u;
    }
    let a = function(n) {
      return s.exec(n) != null;
    }, c = [ "hasOwnProperty", "toString", "valueOf", "__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__" ], d = [ "__proto__", "constructor", "prototype" ], f = {
      allowBooleanAttributes: !1,
      unpairedTags: []
    };
    function m(n, i) {
      i = Object.assign({}, f, i);
      let u = [], l = !1, p = !1;
      n[0] === "\ufeff" && (n = n.substr(1));
      for (let h = 0; h < n.length; h++) if (n[h] === "<" && n[h + 1] === "?") {
        if (h += 2, h = b(n, h), h.err) return h;
      } else {
        if (n[h] !== "<") {
          if (y(n[h])) continue;
          return M("InvalidChar", "char '" + n[h] + "' is not expected.", q(n, h));
        }
        {
          let S = h;
          if (h++, n[h] === "!") {
            h = x(n, h);
            continue;
          }
          {
            let g = !1;
            n[h] === "/" && (g = !0, h++);
            let E = "";
            for (;h < n.length && n[h] !== ">" && n[h] !== " " && n[h] !== "\t" && n[h] !== `\n` && n[h] !== "\r"; h++) E += n[h];
            if (E = E.trim(), E[E.length - 1] === "/" && (E = E.substring(0, E.length - 1), 
            h--), !ke(E)) {
              let _;
              return _ = E.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + E + "' is an invalid name.", 
              M("InvalidTag", _, q(n, h));
            }
            let w = I(n, h);
            if (w === !1) return M("InvalidAttr", "Attributes for '" + E + "' have open quote.", q(n, h));
            let A = w.value;
            if (h = w.index, A[A.length - 1] === "/") {
              let _ = h - A.length;
              A = A.substring(0, A.length - 1);
              let z = v(A, i);
              if (z !== !0) return M(z.err.code, z.err.msg, q(n, _ + z.err.line));
              l = !0;
            } else if (g) {
              if (!w.tagClosed) return M("InvalidTag", "Closing tag '" + E + "' doesn't have proper closing.", q(n, h));
              if (A.trim().length > 0) return M("InvalidTag", "Closing tag '" + E + "' can't have attributes or invalid starting.", q(n, S));
              if (u.length === 0) return M("InvalidTag", "Closing tag '" + E + "' has not been opened.", q(n, S));
              {
                let _ = u.pop();
                if (E !== _.tagName) {
                  let z = q(n, _.tagStartPos);
                  return M("InvalidTag", "Expected closing tag '" + _.tagName + "' (opened in line " + z.line + ", col " + z.col + ") instead of closing tag '" + E + "'.", q(n, S));
                }
                u.length == 0 && (p = !0);
              }
            } else {
              let _ = v(A, i);
              if (_ !== !0) return M(_.err.code, _.err.msg, q(n, h - A.length + _.err.line));
              if (p === !0) return M("InvalidXml", "Multiple possible root nodes found.", q(n, h));
              i.unpairedTags.indexOf(E) !== -1 || u.push({
                tagName: E,
                tagStartPos: S
              }), l = !0;
            }
            for (h++; h < n.length; h++) if (n[h] === "<") {
              if (n[h + 1] === "!") {
                h++, h = x(n, h);
                continue;
              }
              if (n[h + 1] !== "?") break;
              if (h = b(n, ++h), h.err) return h;
            } else if (n[h] === "&") {
              let _ = W(n, h);
              if (_ == -1) return M("InvalidChar", "char '&' is not expected.", q(n, h));
              h = _;
            } else if (p === !0 && !y(n[h])) return M("InvalidXml", "Extra text at the end", q(n, h));
            n[h] === "<" && h--;
          }
        }
      }
      return l ? u.length == 1 ? M("InvalidTag", "Unclosed tag '" + u[0].tagName + "'.", q(n, u[0].tagStartPos)) : !(u.length > 0) || M("InvalidXml", "Invalid '" + JSON.stringify(u.map(h => h.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
        line: 1,
        col: 1
      }) : M("InvalidXml", "Start tag expected.", 1);
    }
    function y(n) {
      return n === " " || n === "\t" || n === `\n` || n === "\r";
    }
    function b(n, i) {
      let u = i;
      for (;i < n.length; i++) if (n[i] == "?" || n[i] == " ") {
        let l = n.substr(u, i - u);
        if (i > 5 && l === "xml") return M("InvalidXml", "XML declaration allowed only at the start of the document.", q(n, i));
        if (n[i] == "?" && n[i + 1] == ">") {
          i++;
          break;
        }
        continue;
      }
      return i;
    }
    function x(n, i) {
      if (n.length > i + 5 && n[i + 1] === "-" && n[i + 2] === "-") {
        for (i += 3; i < n.length; i++) if (n[i] === "-" && n[i + 1] === "-" && n[i + 2] === ">") {
          i += 2;
          break;
        }
      } else if (n.length > i + 8 && n[i + 1] === "D" && n[i + 2] === "O" && n[i + 3] === "C" && n[i + 4] === "T" && n[i + 5] === "Y" && n[i + 6] === "P" && n[i + 7] === "E") {
        let u = 1;
        for (i += 8; i < n.length; i++) if (n[i] === "<") u++; else if (n[i] === ">" && (u--, 
        u === 0)) break;
      } else if (n.length > i + 9 && n[i + 1] === "[" && n[i + 2] === "C" && n[i + 3] === "D" && n[i + 4] === "A" && n[i + 5] === "T" && n[i + 6] === "A" && n[i + 7] === "[") {
        for (i += 8; i < n.length; i++) if (n[i] === "]" && n[i + 1] === "]" && n[i + 2] === ">") {
          i += 2;
          break;
        }
      }
      return i;
    }
    let N = '"', T = "'";
    function I(n, i) {
      let u = "", l = "", p = !1;
      for (;i < n.length; i++) {
        if (n[i] === N || n[i] === T) l === "" ? l = n[i] : l !== n[i] || (l = ""); else if (n[i] === ">" && l === "") {
          p = !0;
          break;
        }
        u += n[i];
      }
      return l === "" && {
        value: u,
        index: i,
        tagClosed: p
      };
    }
    let F = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function v(n, i) {
      let u = o(n, F), l = {};
      for (let p = 0; p < u.length; p++) {
        if (u[p][1].length === 0) return M("InvalidAttr", "Attribute '" + u[p][2] + "' has no space in starting.", K(u[p]));
        if (u[p][3] !== void 0 && u[p][4] === void 0) return M("InvalidAttr", "Attribute '" + u[p][2] + "' is without value.", K(u[p]));
        if (u[p][3] === void 0 && !i.allowBooleanAttributes) return M("InvalidAttr", "boolean attribute '" + u[p][2] + "' is not allowed.", K(u[p]));
        let h = u[p][2];
        if (!ee(h)) return M("InvalidAttr", "Attribute '" + h + "' is an invalid name.", K(u[p]));
        if (Object.prototype.hasOwnProperty.call(l, h)) return M("InvalidAttr", "Attribute '" + h + "' is repeated.", K(u[p]));
        l[h] = 1;
      }
      return !0;
    }
    function W(n, i) {
      if (n[++i] === ";") return -1;
      if (n[i] === "#") return function(l, p) {
        let h = /\d/;
        for (l[p] === "x" && (p++, h = /[\da-fA-F]/); p < l.length; p++) {
          if (l[p] === ";") return p;
          if (!l[p].match(h)) break;
        }
        return -1;
      }(n, ++i);
      let u = 0;
      for (;i < n.length; i++, u++) if (!(n[i].match(/\w/) && u < 20)) {
        if (n[i] === ";") break;
        return -1;
      }
      return i;
    }
    function M(n, i, u) {
      return {
        err: {
          code: n,
          msg: i,
          line: u.line || u,
          col: u.col
        }
      };
    }
    function ee(n) {
      return a(n);
    }
    function ke(n) {
      return a(n);
    }
    function q(n, i) {
      let u = n.substring(0, i).split(/\r?\n/);
      return {
        line: u.length,
        col: u[u.length - 1].length + 1
      };
    }
    function K(n) {
      return n.startIndex + n[1].length;
    }
    let Nr = n => c.includes(n) ? "__" + n : n, xi = {
      preserveOrder: !1,
      attributeNamePrefix: "@_",
      attributesGroupName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      removeNSPrefix: !1,
      allowBooleanAttributes: !1,
      parseTagValue: !0,
      parseAttributeValue: !1,
      trimValues: !0,
      cdataPropName: !1,
      numberParseOptions: {
        hex: !0,
        leadingZeros: !0,
        eNotation: !0
      },
      tagValueProcessor: function(n, i) {
        return i;
      },
      attributeValueProcessor: function(n, i) {
        return i;
      },
      stopNodes: [],
      alwaysCreateTextNode: !1,
      isArray: () => !1,
      commentPropName: !1,
      unpairedTags: [],
      processEntities: !0,
      htmlEntities: !1,
      ignoreDeclaration: !1,
      ignorePiTags: !1,
      transformTagName: !1,
      transformAttributeName: !1,
      updateTag: function(n, i, u) {
        return n;
      },
      captureMetaData: !1,
      maxNestedTags: 100,
      strictReservedNames: !0,
      jPath: !0,
      onDangerousProperty: Nr
    };
    function bi(n, i) {
      if (typeof n != "string") return;
      let u = n.toLowerCase();
      if (c.some(l => u === l.toLowerCase())) throw Error(`[SECURITY] Invalid ${i}: "${n}" is a reserved JavaScript keyword that could cause prototype pollution`);
      if (d.some(l => u === l.toLowerCase())) throw Error(`[SECURITY] Invalid ${i}: "${n}" is a reserved JavaScript keyword that could cause prototype pollution`);
    }
    function Tr(n) {
      return typeof n == "boolean" ? {
        enabled: n,
        maxEntitySize: 1e4,
        maxExpansionDepth: 10,
        maxTotalExpansions: 1e3,
        maxExpandedLength: 1e5,
        maxEntityCount: 100,
        allowedTags: null,
        tagFilter: null
      } : typeof n == "object" && n !== null ? {
        enabled: n.enabled !== !1,
        maxEntitySize: Math.max(1, n.maxEntitySize ?? 1e4),
        maxExpansionDepth: Math.max(1, n.maxExpansionDepth ?? 10),
        maxTotalExpansions: Math.max(1, n.maxTotalExpansions ?? 1e3),
        maxExpandedLength: Math.max(1, n.maxExpandedLength ?? 1e5),
        maxEntityCount: Math.max(1, n.maxEntityCount ?? 100),
        allowedTags: n.allowedTags ?? null,
        tagFilter: n.tagFilter ?? null
      } : Tr(!0);
    }
    let Ni = function(n) {
      let i = Object.assign({}, xi, n), u = [ {
        value: i.attributeNamePrefix,
        name: "attributeNamePrefix"
      }, {
        value: i.attributesGroupName,
        name: "attributesGroupName"
      }, {
        value: i.textNodeName,
        name: "textNodeName"
      }, {
        value: i.cdataPropName,
        name: "cdataPropName"
      }, {
        value: i.commentPropName,
        name: "commentPropName"
      } ];
      for (let {value: l, name: p} of u) l && bi(l, p);
      return i.onDangerousProperty === null && (i.onDangerousProperty = Nr), i.processEntities = Tr(i.processEntities), 
      i.stopNodes && Array.isArray(i.stopNodes) && (i.stopNodes = i.stopNodes.map(l => typeof l == "string" && l.startsWith("*.") ? ".." + l.substring(2) : l)), 
      i;
    }, pt;
    pt = typeof Symbol != "function" ? "@@xmlMetadata" : Symbol("XML Node Metadata");
    class oe {
      constructor(n) {
        this.tagname = n, this.child = [], this[":@"] = Object.create(null);
      }
      add(n, i) {
        n === "__proto__" && (n = "#__proto__"), this.child.push({
          [n]: i
        });
      }
      addChild(n, i) {
        n.tagname === "__proto__" && (n.tagname = "#__proto__"), n[":@"] && Object.keys(n[":@"]).length > 0 ? this.child.push({
          [n.tagname]: n.child,
          ":@": n[":@"]
        }) : this.child.push({
          [n.tagname]: n.child
        }), i !== void 0 && (this.child[this.child.length - 1][pt] = {
          startIndex: i
        });
      }
      static getMetaDataSymbol() {
        return pt;
      }
    }
    class _r {
      constructor(n) {
        this.suppressValidationErr = !n, this.options = n;
      }
      readDocType(n, i) {
        let u = Object.create(null), l = 0;
        if (n[i + 3] !== "O" || n[i + 4] !== "C" || n[i + 5] !== "T" || n[i + 6] !== "Y" || n[i + 7] !== "P" || n[i + 8] !== "E") throw Error("Invalid Tag instead of DOCTYPE");
        {
          i += 9;
          let p = 1, h = !1, S = !1, g = "";
          for (;i < n.length; i++) if (n[i] !== "<" || S) if (n[i] === ">") {
            if (S ? n[i - 1] === "-" && n[i - 2] === "-" && (S = !1, p--) : p--, p === 0) break;
          } else n[i] === "[" ? h = !0 : g += n[i]; else {
            if (h && we(n, "!ENTITY", i)) {
              let E, w;
              if (i += 7, [E, w, i] = this.readEntityExp(n, i + 1, this.suppressValidationErr), 
              w.indexOf("&") === -1) {
                if (this.options.enabled !== !1 && this.options.maxEntityCount != null && l >= this.options.maxEntityCount) throw Error(`Entity count (${l + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
                let A = E.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                u[E] = {
                  regx: RegExp(`&${A};`, "g"),
                  val: w
                }, l++;
              }
            } else if (h && we(n, "!ELEMENT", i)) {
              i += 8;
              let {index: E} = this.readElementExp(n, i + 1);
              i = E;
            } else if (h && we(n, "!ATTLIST", i)) i += 8; else if (h && we(n, "!NOTATION", i)) {
              i += 9;
              let {index: E} = this.readNotationExp(n, i + 1, this.suppressValidationErr);
              i = E;
            } else {
              if (!we(n, "!--", i)) throw Error("Invalid DOCTYPE");
              S = !0;
            }
            p++, g = "";
          }
          if (p !== 0) throw Error("Unclosed DOCTYPE");
        }
        return {
          entities: u,
          i
        };
      }
      readEntityExp(n, i) {
        let u = i = J(n, i);
        for (;i < n.length && !/\s/.test(n[i]) && n[i] !== '"' && n[i] !== "'"; ) i++;
        let l = n.substring(u, i);
        if (ve(l), i = J(n, i), !this.suppressValidationErr) {
          if (n.substring(i, i + 6).toUpperCase() === "SYSTEM") throw Error("External entities are not supported");
          if (n[i] === "%") throw Error("Parameter entities are not supported");
        }
        let p = "";
        if ([i, p] = this.readIdentifierVal(n, i, "entity"), this.options.enabled !== !1 && this.options.maxEntitySize != null && p.length > this.options.maxEntitySize) throw Error(`Entity "${l}" size (${p.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);
        return [ l, p, --i ];
      }
      readNotationExp(n, i) {
        let u = i = J(n, i);
        for (;i < n.length && !/\s/.test(n[i]); ) i++;
        let l = n.substring(u, i);
        !this.suppressValidationErr && ve(l), i = J(n, i);
        let p = n.substring(i, i + 6).toUpperCase();
        if (!this.suppressValidationErr && p !== "SYSTEM" && p !== "PUBLIC") throw Error(`Expected SYSTEM or PUBLIC, found "${p}"`);
        i += p.length, i = J(n, i);
        let h = null, S = null;
        if (p === "PUBLIC") [i, h] = this.readIdentifierVal(n, i, "publicIdentifier"), n[i = J(n, i)] !== '"' && n[i] !== "'" || ([i, S] = this.readIdentifierVal(n, i, "systemIdentifier")); else if (p === "SYSTEM" && ([i, S] = this.readIdentifierVal(n, i, "systemIdentifier"), 
        !this.suppressValidationErr && !S)) throw Error("Missing mandatory system identifier for SYSTEM notation");
        return {
          notationName: l,
          publicIdentifier: h,
          systemIdentifier: S,
          index: --i
        };
      }
      readIdentifierVal(n, i, u) {
        let l = "", p = n[i];
        if (p !== '"' && p !== "'") throw Error(`Expected quoted string, found "${p}"`);
        let h = ++i;
        for (;i < n.length && n[i] !== p; ) i++;
        if (l = n.substring(h, i), n[i] !== p) throw Error(`Unterminated ${u} value`);
        return [ ++i, l ];
      }
      readElementExp(n, i) {
        let u = i = J(n, i);
        for (;i < n.length && !/\s/.test(n[i]); ) i++;
        let l = n.substring(u, i);
        if (!this.suppressValidationErr && !a(l)) throw Error(`Invalid element name: "${l}"`);
        let p = "";
        if (n[i = J(n, i)] === "E" && we(n, "MPTY", i)) i += 4; else if (n[i] === "A" && we(n, "NY", i)) i += 2; else if (n[i] === "(") {
          let h = ++i;
          for (;i < n.length && n[i] !== ")"; ) i++;
          if (p = n.substring(h, i), n[i] !== ")") throw Error("Unterminated content model");
        } else if (!this.suppressValidationErr) throw Error(`Invalid Element Expression, found "${n[i]}"`);
        return {
          elementName: l,
          contentModel: p.trim(),
          index: i
        };
      }
      readAttlistExp(n, i) {
        let u = i = J(n, i);
        for (;i < n.length && !/\s/.test(n[i]); ) i++;
        let l = n.substring(u, i);
        for (ve(l), u = i = J(n, i); i < n.length && !/\s/.test(n[i]); ) i++;
        let p = n.substring(u, i);
        if (!ve(p)) throw Error(`Invalid attribute name: "${p}"`);
        i = J(n, i);
        let h = "";
        if (n.substring(i, i + 8).toUpperCase() === "NOTATION") {
          if (h = "NOTATION", n[i = J(n, i += 8)] !== "(") throw Error(`Expected '(', found "${n[i]}"`);
          i++;
          let g = [];
          for (;i < n.length && n[i] !== ")"; ) {
            let E = i;
            for (;i < n.length && n[i] !== "|" && n[i] !== ")"; ) i++;
            let w = n.substring(E, i);
            if (w = w.trim(), !ve(w)) throw Error(`Invalid notation name: "${w}"`);
            g.push(w), n[i] === "|" && (i++, i = J(n, i));
          }
          if (n[i] !== ")") throw Error("Unterminated list of notations");
          i++, h += " (" + g.join("|") + ")";
        } else {
          let g = i;
          for (;i < n.length && !/\s/.test(n[i]); ) i++;
          h += n.substring(g, i);
          let E = [ "CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS" ];
          if (!this.suppressValidationErr && !E.includes(h.toUpperCase())) throw Error(`Invalid attribute type: "${h}"`);
        }
        i = J(n, i);
        let S = "";
        return n.substring(i, i + 8).toUpperCase() === "#REQUIRED" ? (S = "#REQUIRED", i += 8) : n.substring(i, i + 7).toUpperCase() === "#IMPLIED" ? (S = "#IMPLIED", 
        i += 7) : [i, S] = this.readIdentifierVal(n, i, "ATTLIST"), {
          elementName: l,
          attributeName: p,
          attributeType: h,
          defaultValue: S,
          index: i
        };
      }
    }
    let J = (n, i) => {
      for (;i < n.length && /\s/.test(n[i]); ) i++;
      return i;
    };
    function we(n, i, u) {
      for (let l = 0; l < i.length; l++) if (i[l] !== n[u + l + 1]) return !1;
      return !0;
    }
    function ve(n) {
      if (a(n)) return n;
      throw Error(`Invalid entity name ${n}`);
    }
    let Ti = /^[-+]?0x[a-fA-F0-9]+$/, _i = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Ci = {
      hex: !0,
      leadingZeros: !0,
      decimalPoint: ".",
      eNotation: !0,
      infinity: "original"
    }, Ai = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/, Ri = new Set([ "push", "pop", "reset", "updateCurrent", "restore" ]);
    class Ge {
      constructor(n = {}) {
        this.separator = n.separator || ".", this.path = [], this.siblingStacks = [];
      }
      push(n, i = null, u = null) {
        this.path.length > 0 && (this.path[this.path.length - 1].values = void 0);
        let l = this.path.length;
        this.siblingStacks[l] || (this.siblingStacks[l] = new Map);
        let p = this.siblingStacks[l], h = u ? `${u}:${n}` : n, S = p.get(h) || 0, g = 0;
        for (let w of p.values()) g += w;
        p.set(h, S + 1);
        let E = {
          tag: n,
          position: g,
          counter: S
        };
        u != null && (E.namespace = u), i != null && (E.values = i), this.path.push(E);
      }
      pop() {
        if (this.path.length === 0) return;
        let n = this.path.pop();
        return this.siblingStacks.length > this.path.length + 1 && (this.siblingStacks.length = this.path.length + 1), 
        n;
      }
      updateCurrent(n) {
        if (this.path.length > 0) {
          let i = this.path[this.path.length - 1];
          n != null && (i.values = n);
        }
      }
      getCurrentTag() {
        return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
      }
      getCurrentNamespace() {
        return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
      }
      getAttrValue(n) {
        if (this.path.length === 0) return;
        return this.path[this.path.length - 1].values?.[n];
      }
      hasAttr(n) {
        if (this.path.length === 0) return !1;
        let i = this.path[this.path.length - 1];
        return i.values !== void 0 && n in i.values;
      }
      getPosition() {
        return this.path.length === 0 ? -1 : this.path[this.path.length - 1].position ?? 0;
      }
      getCounter() {
        return this.path.length === 0 ? -1 : this.path[this.path.length - 1].counter ?? 0;
      }
      getIndex() {
        return this.getPosition();
      }
      getDepth() {
        return this.path.length;
      }
      toString(n, i = !0) {
        let u = n || this.separator;
        return this.path.map(l => i && l.namespace ? `${l.namespace}:${l.tag}` : l.tag).join(u);
      }
      toArray() {
        return this.path.map(n => n.tag);
      }
      reset() {
        this.path = [], this.siblingStacks = [];
      }
      matches(n) {
        let i = n.segments;
        return i.length !== 0 && (n.hasDeepWildcard() ? this._matchWithDeepWildcard(i) : this._matchSimple(i));
      }
      _matchSimple(n) {
        if (this.path.length !== n.length) return !1;
        for (let i = 0; i < n.length; i++) {
          let u = n[i], l = this.path[i], p = i === this.path.length - 1;
          if (!this._matchSegment(u, l, p)) return !1;
        }
        return !0;
      }
      _matchWithDeepWildcard(n) {
        let i = this.path.length - 1, u = n.length - 1;
        for (;u >= 0 && i >= 0; ) {
          let l = n[u];
          if (l.type === "deep-wildcard") {
            if (u--, u < 0) return !0;
            let p = n[u], h = !1;
            for (let S = i; S >= 0; S--) {
              let g = S === this.path.length - 1;
              if (this._matchSegment(p, this.path[S], g)) {
                i = S - 1, u--, h = !0;
                break;
              }
            }
            if (!h) return !1;
          } else {
            let p = i === this.path.length - 1;
            if (!this._matchSegment(l, this.path[i], p)) return !1;
            i--, u--;
          }
        }
        return u < 0;
      }
      _matchSegment(n, i, u) {
        if (n.tag !== "*" && n.tag !== i.tag) return !1;
        if (n.namespace !== void 0 && n.namespace !== "*" && n.namespace !== i.namespace) return !1;
        if (n.attrName !== void 0) {
          if (!u) return !1;
          if (!i.values || !(n.attrName in i.values)) return !1;
          if (n.attrValue !== void 0) {
            let l = i.values[n.attrName];
            if (String(l) !== String(n.attrValue)) return !1;
          }
        }
        if (n.position !== void 0) {
          if (!u) return !1;
          let l = i.counter ?? 0;
          if (n.position === "first" && l !== 0) return !1;
          if (n.position === "odd" && l % 2 != 1) return !1;
          if (n.position === "even" && l % 2 != 0) return !1;
          if (n.position === "nth" && l !== n.positionValue) return !1;
        }
        return !0;
      }
      snapshot() {
        return {
          path: this.path.map(n => ({
            ...n
          })),
          siblingStacks: this.siblingStacks.map(n => new Map(n))
        };
      }
      restore(n) {
        this.path = n.path.map(i => ({
          ...i
        })), this.siblingStacks = n.siblingStacks.map(i => new Map(i));
      }
      readOnly() {
        return new Proxy(this, {
          get(n, i, u) {
            if (Ri.has(i)) return () => {
              throw TypeError(`Cannot call '${i}' on a read-only Matcher. Obtain a writable instance to mutate state.`);
            };
            let l = Reflect.get(n, i, u);
            return i === "path" || i === "siblingStacks" ? Object.freeze(Array.isArray(l) ? l.map(p => p instanceof Map ? Object.freeze(new Map(p)) : Object.freeze({
              ...p
            })) : l) : typeof l == "function" ? l.bind(n) : l;
          },
          set(n, i) {
            throw TypeError(`Cannot set property '${String(i)}' on a read-only Matcher.`);
          },
          deleteProperty(n, i) {
            throw TypeError(`Cannot delete property '${String(i)}' from a read-only Matcher.`);
          }
        });
      }
    }
    class xe {
      constructor(n, i = {}) {
        this.pattern = n, this.separator = i.separator || ".", this.segments = this._parse(n), 
        this._hasDeepWildcard = this.segments.some(u => u.type === "deep-wildcard"), this._hasAttributeCondition = this.segments.some(u => u.attrName !== void 0), 
        this._hasPositionSelector = this.segments.some(u => u.position !== void 0);
      }
      _parse(n) {
        let i = [], u = 0, l = "";
        for (;u < n.length; ) n[u] === this.separator ? u + 1 < n.length && n[u + 1] === this.separator ? (l.trim() && (i.push(this._parseSegment(l.trim())), 
        l = ""), i.push({
          type: "deep-wildcard"
        }), u += 2) : (l.trim() && i.push(this._parseSegment(l.trim())), l = "", u++) : (l += n[u], 
        u++);
        return l.trim() && i.push(this._parseSegment(l.trim())), i;
      }
      _parseSegment(n) {
        let i = {
          type: "tag"
        }, u = null, l = n, p = n.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
        if (p && (l = p[1] + p[3], p[2])) {
          let w = p[2].slice(1, -1);
          w && (u = w);
        }
        let h, S, g = l;
        if (l.includes("::")) {
          let w = l.indexOf("::");
          if (h = l.substring(0, w).trim(), g = l.substring(w + 2).trim(), !h) throw Error(`Invalid namespace in pattern: ${n}`);
        }
        let E = null;
        if (g.includes(":")) {
          let w = g.lastIndexOf(":"), A = g.substring(0, w).trim(), _ = g.substring(w + 1).trim();
          [ "first", "last", "odd", "even" ].includes(_) || /^nth\(\d+\)$/.test(_) ? (S = A, 
          E = _) : S = g;
        } else S = g;
        if (!S) throw Error(`Invalid segment pattern: ${n}`);
        if (i.tag = S, h && (i.namespace = h), u) if (u.includes("=")) {
          let w = u.indexOf("=");
          i.attrName = u.substring(0, w).trim(), i.attrValue = u.substring(w + 1).trim();
        } else i.attrName = u.trim();
        if (E) {
          let w = E.match(/^nth\((\d+)\)$/);
          w ? (i.position = "nth", i.positionValue = parseInt(w[1], 10)) : i.position = E;
        }
        return i;
      }
      get length() {
        return this.segments.length;
      }
      hasDeepWildcard() {
        return this._hasDeepWildcard;
      }
      hasAttributeCondition() {
        return this._hasAttributeCondition;
      }
      hasPositionSelector() {
        return this._hasPositionSelector;
      }
      toString() {
        return this.pattern;
      }
    }
    function Ii(n, i) {
      if (!n) return {};
      let u = i.attributesGroupName ? n[i.attributesGroupName] : n;
      if (!u) return {};
      let l = {};
      for (let p in u) p.startsWith(i.attributeNamePrefix) ? l[p.substring(i.attributeNamePrefix.length)] = u[p] : l[p] = u[p];
      return l;
    }
    function Oi(n) {
      if (!n || typeof n != "string") return;
      let i = n.indexOf(":");
      if (i !== -1 && i > 0) {
        let u = n.substring(0, i);
        if (u !== "xmlns") return u;
      }
    }
    class Cr {
      constructor(n) {
        var i;
        if (this.options = n, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, 
        this.lastEntities = {
          apos: {
            regex: /&(apos|#39|#x27);/g,
            val: "'"
          },
          gt: {
            regex: /&(gt|#62|#x3E);/g,
            val: ">"
          },
          lt: {
            regex: /&(lt|#60|#x3C);/g,
            val: "<"
          },
          quot: {
            regex: /&(quot|#34|#x22);/g,
            val: '"'
          }
        }, this.ampEntity = {
          regex: /&(amp|#38|#x26);/g,
          val: "&"
        }, this.htmlEntities = {
          space: {
            regex: /&(nbsp|#160);/g,
            val: " "
          },
          cent: {
            regex: /&(cent|#162);/g,
            val: "\xa2"
          },
          pound: {
            regex: /&(pound|#163);/g,
            val: "\xa3"
          },
          yen: {
            regex: /&(yen|#165);/g,
            val: "\xa5"
          },
          euro: {
            regex: /&(euro|#8364);/g,
            val: "\u20ac"
          },
          copyright: {
            regex: /&(copy|#169);/g,
            val: "\xa9"
          },
          reg: {
            regex: /&(reg|#174);/g,
            val: "\xae"
          },
          inr: {
            regex: /&(inr|#8377);/g,
            val: "\u20b9"
          },
          num_dec: {
            regex: /&#([0-9]{1,7});/g,
            val: (u, l) => Rr(l, 10, "&#")
          },
          num_hex: {
            regex: /&#x([0-9a-fA-F]{1,6});/g,
            val: (u, l) => Rr(l, 16, "&#x")
          }
        }, this.addExternalEntities = Mi, this.parseXml = zi, this.parseTextData = Di, this.resolveNameSpace = Pi, 
        this.buildAttributesMap = vi, this.isItStopNode = Ui, this.replaceEntitiesValue = Bi, 
        this.readStopNodeData = Vi, this.saveTextToParentTag = Li, this.addChild = $i, this.ignoreAttributesFn = typeof (i = this.options.ignoreAttributes) == "function" ? i : Array.isArray(i) ? u => {
          for (let l of i) {
            if (typeof l == "string" && u === l) return !0;
            if (l instanceof RegExp && l.test(u)) return !0;
          }
        } : () => !1, this.entityExpansionCount = 0, this.currentExpandedLength = 0, this.matcher = new Ge, 
        this.readonlyMatcher = this.matcher.readOnly(), this.isCurrentNodeStopNode = !1, 
        this.options.stopNodes && this.options.stopNodes.length > 0) {
          this.stopNodeExpressions = [];
          for (let u = 0; u < this.options.stopNodes.length; u++) {
            let l = this.options.stopNodes[u];
            typeof l == "string" ? this.stopNodeExpressions.push(new xe(l)) : l instanceof xe && this.stopNodeExpressions.push(l);
          }
        }
      }
    }
    function Mi(n) {
      let i = Object.keys(n);
      for (let u = 0; u < i.length; u++) {
        let l = i[u], p = l.replace(/[.\-+*:]/g, "\\.");
        this.lastEntities[l] = {
          regex: new RegExp("&" + p + ";", "g"),
          val: n[l]
        };
      }
    }
    function Di(n, i, u, l, p, h, S) {
      if (n !== void 0 && (this.options.trimValues && !l && (n = n.trim()), n.length > 0)) {
        S || (n = this.replaceEntitiesValue(n, i, u));
        let g = this.options.jPath ? u.toString() : u, E = this.options.tagValueProcessor(i, n, g, p, h);
        return E == null ? n : typeof E != typeof n || E !== n ? E : this.options.trimValues || n.trim() === n ? Ar(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
      }
    }
    function Pi(n) {
      if (this.options.removeNSPrefix) {
        let i = n.split(":"), u = n.charAt(0) === "/" ? "/" : "";
        if (i[0] === "xmlns") return "";
        i.length === 2 && (n = u + i[1]);
      }
      return n;
    }
    let ki = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function vi(n, i, u) {
      if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
        let l = o(n, ki), p = l.length, h = {}, S = {};
        for (let g = 0; g < p; g++) {
          let E = this.resolveNameSpace(l[g][1]), w = l[g][4];
          if (E.length && w !== void 0) {
            let A = w;
            this.options.trimValues && (A = A.trim()), A = this.replaceEntitiesValue(A, u, this.readonlyMatcher), 
            S[E] = A;
          }
        }
        Object.keys(S).length > 0 && typeof i == "object" && i.updateCurrent && i.updateCurrent(S);
        for (let g = 0; g < p; g++) {
          let E = this.resolveNameSpace(l[g][1]), w = this.options.jPath ? i.toString() : this.readonlyMatcher;
          if (this.ignoreAttributesFn(E, w)) continue;
          let A = l[g][4], _ = this.options.attributeNamePrefix + E;
          if (E.length) if (this.options.transformAttributeName && (_ = this.options.transformAttributeName(_)), 
          _ = Ir(_, this.options), A !== void 0) {
            this.options.trimValues && (A = A.trim()), A = this.replaceEntitiesValue(A, u, this.readonlyMatcher);
            let z = this.options.jPath ? i.toString() : this.readonlyMatcher, D = this.options.attributeValueProcessor(E, A, z);
            h[_] = D == null ? A : typeof D != typeof A || D !== A ? D : Ar(A, this.options.parseAttributeValue, this.options.numberParseOptions);
          } else this.options.allowBooleanAttributes && (h[_] = !0);
        }
        if (!Object.keys(h).length) return;
        if (this.options.attributesGroupName) {
          let g = {};
          return g[this.options.attributesGroupName] = h, g;
        }
        return h;
      }
    }
    let zi = function(n) {
      n = n.replace(/\r\n?/g, `\n`);
      let i = new oe("!xml"), u = i, l = "";
      this.matcher.reset(), this.entityExpansionCount = 0, this.currentExpandedLength = 0;
      let p = new _r(this.options.processEntities);
      for (let h = 0; h < n.length; h++) if (n[h] === "<") if (n[h + 1] === "/") {
        let S = be(n, ">", h, "Closing Tag is not closed."), g = n.substring(h + 2, S).trim();
        if (this.options.removeNSPrefix) {
          let w = g.indexOf(":");
          w !== -1 && (g = g.substr(w + 1));
        }
        g = gt(this.options.transformTagName, g, "", this.options).tagName, u && (l = this.saveTextToParentTag(l, u, this.readonlyMatcher));
        let E = this.matcher.getCurrentTag();
        if (g && this.options.unpairedTags.indexOf(g) !== -1) throw Error(`Unpaired tag can not be used as closing tag: </${g}>`);
        E && this.options.unpairedTags.indexOf(E) !== -1 && (this.matcher.pop(), this.tagsNodeStack.pop()), 
        this.matcher.pop(), this.isCurrentNodeStopNode = !1, u = this.tagsNodeStack.pop(), 
        l = "", h = S;
      } else if (n[h + 1] === "?") {
        let S = mt(n, h, !1, "?>");
        if (!S) throw Error("Pi Tag is not closed.");
        if (l = this.saveTextToParentTag(l, u, this.readonlyMatcher), this.options.ignoreDeclaration && S.tagName === "?xml" || this.options.ignorePiTags) ; else {
          let g = new oe(S.tagName);
          g.add(this.options.textNodeName, ""), S.tagName !== S.tagExp && S.attrExpPresent && (g[":@"] = this.buildAttributesMap(S.tagExp, this.matcher, S.tagName)), 
          this.addChild(u, g, this.readonlyMatcher, h);
        }
        h = S.closeIndex + 1;
      } else if (n.substr(h + 1, 3) === "!--") {
        let S = be(n, "--\x3e", h + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          let g = n.substring(h + 4, S - 2);
          l = this.saveTextToParentTag(l, u, this.readonlyMatcher), u.add(this.options.commentPropName, [ {
            [this.options.textNodeName]: g
          } ]);
        }
        h = S;
      } else if (n.substr(h + 1, 2) === "!D") {
        let S = p.readDocType(n, h);
        this.docTypeEntities = S.entities, h = S.i;
      } else if (n.substr(h + 1, 2) === "![") {
        let S = be(n, "]]>", h, "CDATA is not closed.") - 2, g = n.substring(h + 9, S);
        l = this.saveTextToParentTag(l, u, this.readonlyMatcher);
        let E = this.parseTextData(g, u.tagname, this.readonlyMatcher, !0, !1, !0, !0);
        E == null && (E = ""), this.options.cdataPropName ? u.add(this.options.cdataPropName, [ {
          [this.options.textNodeName]: g
        } ]) : u.add(this.options.textNodeName, E), h = S + 2;
      } else {
        let S = mt(n, h, this.options.removeNSPrefix);
        if (!S) {
          let Z = n.substring(Math.max(0, h - 50), Math.min(n.length, h + 50));
          throw Error(`readTagExp returned undefined at position ${h}. Context: "${Z}"`);
        }
        let {tagName: g, rawTagName: E, tagExp: w, attrExpPresent: A, closeIndex: _} = S;
        if (({tagName: g, tagExp: w} = gt(this.options.transformTagName, g, w, this.options)), 
        this.options.strictReservedNames && (g === this.options.commentPropName || g === this.options.cdataPropName || g === this.options.textNodeName || g === this.options.attributesGroupName)) throw Error(`Invalid tag name: ${g}`);
        u && l && u.tagname !== "!xml" && (l = this.saveTextToParentTag(l, u, this.readonlyMatcher, !1));
        let z = u;
        z && this.options.unpairedTags.indexOf(z.tagname) !== -1 && (u = this.tagsNodeStack.pop(), 
        this.matcher.pop());
        let D = !1;
        w.length > 0 && w.lastIndexOf("/") === w.length - 1 && (D = !0, g[g.length - 1] === "/" ? (g = g.substr(0, g.length - 1), 
        w = g) : w = w.substr(0, w.length - 1), A = g !== w);
        let k, B = null, ne = {};
        k = Oi(E), g !== i.tagname && this.matcher.push(g, {}, k), g !== w && A && (B = this.buildAttributesMap(w, this.matcher, g), 
        B && (ne = Ii(B, this.options))), g !== i.tagname && (this.isCurrentNodeStopNode = this.isItStopNode(this.stopNodeExpressions, this.matcher));
        let H = h;
        if (this.isCurrentNodeStopNode) {
          let Z = "";
          if (D) h = S.closeIndex; else if (this.options.unpairedTags.indexOf(g) !== -1) h = S.closeIndex; else {
            let wt = this.readStopNodeData(n, E, _ + 1);
            if (!wt) throw Error(`Unexpected end of ${E}`);
            h = wt.i, Z = wt.tagContent;
          }
          let St = new oe(g);
          B && (St[":@"] = B), St.add(this.options.textNodeName, Z), this.matcher.pop(), this.isCurrentNodeStopNode = !1, 
          this.addChild(u, St, this.readonlyMatcher, H);
        } else {
          if (D) {
            ({tagName: g, tagExp: w} = gt(this.options.transformTagName, g, w, this.options));
            let Z = new oe(g);
            B && (Z[":@"] = B), this.addChild(u, Z, this.readonlyMatcher, H), this.matcher.pop(), 
            this.isCurrentNodeStopNode = !1;
          } else {
            if (this.options.unpairedTags.indexOf(g) !== -1) {
              let Z = new oe(g);
              B && (Z[":@"] = B), this.addChild(u, Z, this.readonlyMatcher, H), this.matcher.pop(), 
              this.isCurrentNodeStopNode = !1, h = S.closeIndex;
              continue;
            }
            {
              let Z = new oe(g);
              if (this.tagsNodeStack.length > this.options.maxNestedTags) throw Error("Maximum nested tags exceeded");
              this.tagsNodeStack.push(u), B && (Z[":@"] = B), this.addChild(u, Z, this.readonlyMatcher, H), 
              u = Z;
            }
          }
          l = "", h = _;
        }
      } else l += n[h];
      return i.child;
    };
    function $i(n, i, u, l) {
      this.options.captureMetaData || (l = void 0);
      let p = this.options.jPath ? u.toString() : u, h = this.options.updateTag(i.tagname, p, i[":@"]);
      h === !1 || (typeof h == "string" ? (i.tagname = h, n.addChild(i, l)) : n.addChild(i, l));
    }
    function Bi(n, i, u) {
      let l = this.options.processEntities;
      if (!l || !l.enabled) return n;
      if (l.allowedTags) {
        let p = this.options.jPath ? u.toString() : u;
        if (!(Array.isArray(l.allowedTags) ? l.allowedTags.includes(i) : l.allowedTags(i, p))) return n;
      }
      if (l.tagFilter) {
        let p = this.options.jPath ? u.toString() : u;
        if (!l.tagFilter(i, p)) return n;
      }
      for (let p of Object.keys(this.docTypeEntities)) {
        let h = this.docTypeEntities[p], S = n.match(h.regx);
        if (S) {
          if (this.entityExpansionCount += S.length, l.maxTotalExpansions && this.entityExpansionCount > l.maxTotalExpansions) throw Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${l.maxTotalExpansions}`);
          let g = n.length;
          if (n = n.replace(h.regx, h.val), l.maxExpandedLength && (this.currentExpandedLength += n.length - g, 
          this.currentExpandedLength > l.maxExpandedLength)) throw Error(`Total expanded content size exceeded: ${this.currentExpandedLength} > ${l.maxExpandedLength}`);
        }
      }
      for (let p of Object.keys(this.lastEntities)) {
        let h = this.lastEntities[p], S = n.match(h.regex);
        if (S && (this.entityExpansionCount += S.length, l.maxTotalExpansions && this.entityExpansionCount > l.maxTotalExpansions)) throw Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${l.maxTotalExpansions}`);
        n = n.replace(h.regex, h.val);
      }
      if (n.indexOf("&") === -1) return n;
      if (this.options.htmlEntities) for (let p of Object.keys(this.htmlEntities)) {
        let h = this.htmlEntities[p], S = n.match(h.regex);
        if (S && (this.entityExpansionCount += S.length, l.maxTotalExpansions && this.entityExpansionCount > l.maxTotalExpansions)) throw Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${l.maxTotalExpansions}`);
        n = n.replace(h.regex, h.val);
      }
      return n.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    function Li(n, i, u, l) {
      return n && (l === void 0 && (l = i.child.length === 0), (n = this.parseTextData(n, i.tagname, u, !1, !!i[":@"] && Object.keys(i[":@"]).length !== 0, l)) !== void 0 && n !== "" && i.add(this.options.textNodeName, n), 
      n = ""), n;
    }
    function Ui(n, i) {
      if (!n || n.length === 0) return !1;
      for (let u = 0; u < n.length; u++) if (i.matches(n[u])) return !0;
      return !1;
    }
    function be(n, i, u, l) {
      let p = n.indexOf(i, u);
      if (p === -1) throw Error(l);
      return p + i.length - 1;
    }
    function mt(n, i, u, l = ">") {
      let p = function(_, z, D = ">") {
        let k, B = "";
        for (let ne = z; ne < _.length; ne++) {
          let H = _[ne];
          if (k) H === k && (k = ""); else if (H === '"' || H === "'") k = H; else if (H === D[0]) {
            if (!D[1]) return {
              data: B,
              index: ne
            };
            if (_[ne + 1] === D[1]) return {
              data: B,
              index: ne
            };
          } else H === "\t" && (H = " ");
          B += H;
        }
      }(n, i + 1, l);
      if (!p) return;
      let {data: h, index: S} = p, g = h.search(/\s/), E = h, w = !0;
      g !== -1 && (E = h.substring(0, g), h = h.substring(g + 1).trimStart());
      let A = E;
      if (u) {
        let _ = E.indexOf(":");
        _ !== -1 && (E = E.substr(_ + 1), w = E !== p.data.substr(_ + 1));
      }
      return {
        tagName: E,
        tagExp: h,
        closeIndex: S,
        attrExpPresent: w,
        rawTagName: A
      };
    }
    function Vi(n, i, u) {
      let l = u, p = 1;
      for (;u < n.length; u++) if (n[u] === "<") if (n[u + 1] === "/") {
        let h = be(n, ">", u, `${i} is not closed`);
        if (n.substring(u + 2, h).trim() === i && (p--, p === 0)) return {
          tagContent: n.substring(l, u),
          i: h
        };
        u = h;
      } else if (n[u + 1] === "?") u = be(n, "?>", u + 1, "StopNode is not closed."); else if (n.substr(u + 1, 3) === "!--") u = be(n, "--\x3e", u + 3, "StopNode is not closed."); else if (n.substr(u + 1, 2) === "![") u = be(n, "]]>", u, "StopNode is not closed.") - 2; else {
        let h = mt(n, u, ">");
        h && ((h && h.tagName) === i && h.tagExp[h.tagExp.length - 1] !== "/" && p++, u = h.closeIndex);
      }
    }
    function Ar(n, i, u) {
      if (i && typeof n == "string") {
        let l = n.trim();
        return l === "true" || l !== "false" && function(p, h = {}) {
          if (h = Object.assign({}, Ci, h), !p || typeof p != "string") return p;
          let S = p.trim();
          if (h.skipLike !== void 0 && h.skipLike.test(S)) return p;
          if (p === "0") return 0;
          if (h.hex && Ti.test(S)) return function(E) {
            if (parseInt) return parseInt(E, 16);
            if (Number.parseInt) return Number.parseInt(E, 16);
            if (window && window.parseInt) return window.parseInt(E, 16);
            throw Error("parseInt, Number.parseInt, window.parseInt are not supported");
          }(S);
          if (isFinite(S)) {
            if (S.includes("e") || S.includes("E")) return function(E, w, A) {
              if (!A.eNotation) return E;
              let _ = w.match(Ai);
              if (_) {
                let z = _[1] || "", D = _[3].indexOf("e") === -1 ? "E" : "e", k = _[2], B = z ? E[k.length + 1] === D : E[k.length] === D;
                return k.length > 1 && B ? E : (k.length !== 1 || !_[3].startsWith(`.${D}`) && _[3][0] !== D) && k.length > 0 ? A.leadingZeros && !B ? (w = (_[1] || "") + _[3], 
                Number(w)) : E : Number(w);
              }
              return E;
            }(p, S, h);
            {
              let E = _i.exec(S);
              if (E) {
                let w = E[1] || "", A = E[2], _ = (g = E[3]) && g.indexOf(".") !== -1 ? ((g = g.replace(/0+$/, "")) === "." ? g = "0" : g[0] === "." ? g = "0" + g : g[g.length - 1] === "." && (g = g.substring(0, g.length - 1)), 
                g) : g, z = w ? p[A.length + 1] === "." : p[A.length] === ".";
                if (!h.leadingZeros && (A.length > 1 || A.length === 1 && !z)) return p;
                {
                  let D = Number(S), k = String(D);
                  if (D === 0) return D;
                  if (k.search(/[eE]/) !== -1) return h.eNotation ? D : p;
                  if (S.indexOf(".") !== -1) return k === "0" || k === _ || k === `${w}${_}` ? D : p;
                  let B = A ? _ : S;
                  return A ? B === k || w + B === k ? D : p : B === k || B === w + k ? D : p;
                }
              }
              return p;
            }
          }
          var g;
          return function(E, w, A) {
            let _ = w === 1 / 0;
            switch (A.infinity.toLowerCase()) {
             case "null":
              return null;

             case "infinity":
              return w;

             case "string":
              return _ ? "Infinity" : "-Infinity";

             default:
              return E;
            }
          }(p, Number(S), h);
        }(n, u);
      }
      return n !== void 0 ? n : "";
    }
    function Rr(n, i, u) {
      let l = Number.parseInt(n, i);
      return l >= 0 && l <= 1114111 ? String.fromCodePoint(l) : u + n + ";";
    }
    function gt(n, i, u, l) {
      if (n) {
        let p = n(i);
        u === i && (u = p), i = p;
      }
      return {
        tagName: i = Ir(i, l),
        tagExp: u
      };
    }
    function Ir(n, i) {
      if (d.includes(n)) throw Error(`[SECURITY] Invalid name: "${n}" is a reserved JavaScript keyword that could cause prototype pollution`);
      return c.includes(n) ? i.onDangerousProperty(n) : n;
    }
    let yt = oe.getMetaDataSymbol();
    function Fi(n, i) {
      if (!n || typeof n != "object") return {};
      if (!i) return n;
      let u = {};
      for (let l in n) l.startsWith(i) ? u[l.substring(i.length)] = n[l] : u[l] = n[l];
      return u;
    }
    function ji(n, i, u, l) {
      return Or(n, i, u, l);
    }
    function Or(n, i, u, l) {
      let p, h = {};
      for (let S = 0; S < n.length; S++) {
        let g = n[S], E = qi(g);
        if (E !== void 0 && E !== i.textNodeName) {
          let w = Fi(g[":@"] || {}, i.attributeNamePrefix);
          u.push(E, w);
        }
        if (E === i.textNodeName) p === void 0 ? p = g[E] : p += "" + g[E]; else {
          if (E === void 0) continue;
          if (g[E]) {
            let w = Or(g[E], i, u, l), A = Gi(w, i);
            if (g[":@"] ? Hi(w, g[":@"], l, i) : Object.keys(w).length !== 1 || w[i.textNodeName] === void 0 || i.alwaysCreateTextNode ? Object.keys(w).length === 0 && (i.alwaysCreateTextNode ? w[i.textNodeName] = "" : w = "") : w = w[i.textNodeName], 
            g[yt] !== void 0 && typeof w == "object" && w !== null && (w[yt] = g[yt]), h[E] !== void 0 && Object.prototype.hasOwnProperty.call(h, E)) Array.isArray(h[E]) || (h[E] = [ h[E] ]), 
            h[E].push(w); else {
              let _ = i.jPath ? l.toString() : l;
              i.isArray(E, _, A) ? h[E] = [ w ] : h[E] = w;
            }
            E !== void 0 && E !== i.textNodeName && u.pop();
          }
        }
      }
      return typeof p == "string" ? p.length > 0 && (h[i.textNodeName] = p) : p !== void 0 && (h[i.textNodeName] = p), 
      h;
    }
    function qi(n) {
      let i = Object.keys(n);
      for (let u = 0; u < i.length; u++) {
        let l = i[u];
        if (l !== ":@") return l;
      }
    }
    function Hi(n, i, u, l) {
      if (i) {
        let p = Object.keys(i), h = p.length;
        for (let S = 0; S < h; S++) {
          let g = p[S], E = g.startsWith(l.attributeNamePrefix) ? g.substring(l.attributeNamePrefix.length) : g, w = l.jPath ? u.toString() + "." + E : u;
          l.isArray(g, w, !0, !0) ? n[g] = [ i[g] ] : n[g] = i[g];
        }
      }
    }
    function Gi(n, i) {
      let {textNodeName: u} = i, l = Object.keys(n).length;
      return l === 0 || !(l !== 1 || !n[u] && typeof n[u] != "boolean" && n[u] !== 0);
    }
    class Mr {
      constructor(n) {
        this.externalEntities = {}, this.options = Ni(n);
      }
      parse(n, i) {
        if (typeof n != "string" && n.toString) n = n.toString(); else if (typeof n != "string") throw Error("XML data is accepted in String or Bytes[] form.");
        if (i) {
          i === !0 && (i = {});
          let p = m(n, i);
          if (p !== !0) throw Error(`${p.err.msg}:${p.err.line}:${p.err.col}`);
        }
        let u = new Cr(this.options);
        u.addExternalEntities(this.externalEntities);
        let l = u.parseXml(n);
        return this.options.preserveOrder || l === void 0 ? l : ji(l, this.options, u.matcher, u.readonlyMatcher);
      }
      addEntity(n, i) {
        if (i.indexOf("&") !== -1) throw Error("Entity value can't have '&'");
        if (n.indexOf("&") !== -1 || n.indexOf(";") !== -1) throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        if (i === "&") throw Error("An entity with value '&' is not permitted");
        this.externalEntities[n] = i;
      }
      static getMetaDataSymbol() {
        return oe.getMetaDataSymbol();
      }
    }
    function Xi(n, i) {
      let u = "";
      i.format && i.indentBy.length > 0 && (u = `\n`);
      let l = [];
      if (i.stopNodes && Array.isArray(i.stopNodes)) for (let p = 0; p < i.stopNodes.length; p++) {
        let h = i.stopNodes[p];
        typeof h == "string" ? l.push(new xe(h)) : h instanceof xe && l.push(h);
      }
      return Dr(n, i, u, new Ge, l);
    }
    function Dr(n, i, u, l, p) {
      let h = "", S = !1;
      if (i.maxNestedTags && l.getDepth() > i.maxNestedTags) throw Error("Maximum nested tags exceeded");
      if (!Array.isArray(n)) {
        if (n != null) {
          let g = n.toString();
          return g = Et(g, i), g;
        }
        return "";
      }
      for (let g = 0; g < n.length; g++) {
        let E = n[g], w = kr(E);
        if (w === void 0) continue;
        let A = Wi(E[":@"], i);
        l.push(w, A);
        let _ = Qi(l, p);
        if (w === i.textNodeName) {
          let B = E[w];
          _ || (B = i.tagValueProcessor(w, B), B = Et(B, i)), S && (h += u), h += B, S = !1, 
          l.pop();
          continue;
        }
        if (w === i.cdataPropName) {
          S && (h += u), h += `<![CDATA[${E[w][0][i.textNodeName]}]]>`, S = !1, l.pop();
          continue;
        }
        if (w === i.commentPropName) {
          h += u + `\x3c!--${E[w][0][i.textNodeName]}--\x3e`, S = !0, l.pop();
          continue;
        }
        if (w[0] === "?") {
          let B = vr(E[":@"], i, _), ne = w === "?xml" ? "" : u, H = E[w][0][i.textNodeName];
          H = H.length !== 0 ? " " + H : "", h += ne + `<${w}${H}${B}?>`, S = !0, l.pop();
          continue;
        }
        let z = u;
        z !== "" && (z += i.indentBy);
        let D = u + `<${w}${vr(E[":@"], i, _)}`, k;
        k = _ ? Pr(E[w], i) : Dr(E[w], i, z, l, p), i.unpairedTags.indexOf(w) !== -1 ? i.suppressUnpairedNode ? h += D + ">" : h += D + "/>" : k && k.length !== 0 || !i.suppressEmptyNode ? k && k.endsWith(">") ? h += D + `>${k}${u}</${w}>` : (h += D + ">", 
        k && u !== "" && (k.includes("/>") || k.includes("</")) ? h += u + i.indentBy + k + u : h += k, 
        h += `</${w}>`) : h += D + "/>", S = !0, l.pop();
      }
      return h;
    }
    function Wi(n, i) {
      if (!n || i.ignoreAttributes) return null;
      let u = {}, l = !1;
      for (let p in n) Object.prototype.hasOwnProperty.call(n, p) && (u[p.startsWith(i.attributeNamePrefix) ? p.substr(i.attributeNamePrefix.length) : p] = n[p], 
      l = !0);
      return l ? u : null;
    }
    function Pr(n, i) {
      if (!Array.isArray(n)) return n != null ? n.toString() : "";
      let u = "";
      for (let l = 0; l < n.length; l++) {
        let p = n[l], h = kr(p);
        if (h === i.textNodeName) u += p[h]; else if (h === i.cdataPropName) u += p[h][0][i.textNodeName]; else if (h === i.commentPropName) u += p[h][0][i.textNodeName]; else {
          if (h && h[0] === "?") continue;
          if (h) {
            let S = Ki(p[":@"], i), g = Pr(p[h], i);
            g && g.length !== 0 ? u += `<${h}${S}>${g}</${h}>` : u += `<${h}${S}/>`;
          }
        }
      }
      return u;
    }
    function Ki(n, i) {
      let u = "";
      if (n && !i.ignoreAttributes) for (let l in n) {
        if (!Object.prototype.hasOwnProperty.call(n, l)) continue;
        let p = n[l];
        p === !0 && i.suppressBooleanAttributes ? u += ` ${l.substr(i.attributeNamePrefix.length)}` : u += ` ${l.substr(i.attributeNamePrefix.length)}="${p}"`;
      }
      return u;
    }
    function kr(n) {
      let i = Object.keys(n);
      for (let u = 0; u < i.length; u++) {
        let l = i[u];
        if (Object.prototype.hasOwnProperty.call(n, l) && l !== ":@") return l;
      }
    }
    function vr(n, i, u) {
      let l = "";
      if (n && !i.ignoreAttributes) for (let p in n) {
        if (!Object.prototype.hasOwnProperty.call(n, p)) continue;
        let h;
        u ? h = n[p] : (h = i.attributeValueProcessor(p, n[p]), h = Et(h, i)), h === !0 && i.suppressBooleanAttributes ? l += ` ${p.substr(i.attributeNamePrefix.length)}` : l += ` ${p.substr(i.attributeNamePrefix.length)}="${h}"`;
      }
      return l;
    }
    function Qi(n, i) {
      if (!i || i.length === 0) return !1;
      for (let u = 0; u < i.length; u++) if (n.matches(i[u])) return !0;
      return !1;
    }
    function Et(n, i) {
      if (n && n.length > 0 && i.processEntities) for (let u = 0; u < i.entities.length; u++) {
        let l = i.entities[u];
        n = n.replace(l.regex, l.val);
      }
      return n;
    }
    let Yi = {
      attributeNamePrefix: "@_",
      attributesGroupName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      cdataPropName: !1,
      format: !1,
      indentBy: "  ",
      suppressEmptyNode: !1,
      suppressUnpairedNode: !0,
      suppressBooleanAttributes: !0,
      tagValueProcessor: function(n, i) {
        return i;
      },
      attributeValueProcessor: function(n, i) {
        return i;
      },
      preserveOrder: !1,
      commentPropName: !1,
      unpairedTags: [],
      entities: [ {
        regex: new RegExp("&", "g"),
        val: "&amp;"
      }, {
        regex: new RegExp(">", "g"),
        val: "&gt;"
      }, {
        regex: new RegExp("<", "g"),
        val: "&lt;"
      }, {
        regex: new RegExp("'", "g"),
        val: "&apos;"
      }, {
        regex: new RegExp('"', "g"),
        val: "&quot;"
      } ],
      processEntities: !0,
      stopNodes: [],
      oneListGroup: !1,
      maxNestedTags: 100,
      jPath: !0
    };
    function te(n) {
      if (this.options = Object.assign({}, Yi, n), this.options.stopNodes && Array.isArray(this.options.stopNodes) && (this.options.stopNodes = this.options.stopNodes.map(u => typeof u == "string" && u.startsWith("*.") ? ".." + u.substring(2) : u)), 
      this.stopNodeExpressions = [], this.options.stopNodes && Array.isArray(this.options.stopNodes)) for (let u = 0; u < this.options.stopNodes.length; u++) {
        let l = this.options.stopNodes[u];
        typeof l == "string" ? this.stopNodeExpressions.push(new xe(l)) : l instanceof xe && this.stopNodeExpressions.push(l);
      }
      var i;
      this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
        return !1;
      } : (this.ignoreAttributesFn = typeof (i = this.options.ignoreAttributes) == "function" ? i : Array.isArray(i) ? u => {
        for (let l of i) {
          if (typeof l == "string" && u === l) return !0;
          if (l instanceof RegExp && l.test(u)) return !0;
        }
      } : () => !1, this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = eo), 
      this.processTextOrObjNode = Ji, this.options.format ? (this.indentate = Zi, this.tagEndChar = `>\n`, 
      this.newLine = `\n`) : (this.indentate = function() {
        return "";
      }, this.tagEndChar = ">", this.newLine = "");
    }
    function Ji(n, i, u, l) {
      let p = this.extractAttributes(n);
      if (l.push(i, p), this.checkStopNode(l)) {
        let S = this.buildRawContent(n), g = this.buildAttributesForStopNode(n);
        return l.pop(), this.buildObjectNode(S, i, g, u);
      }
      let h = this.j2x(n, u + 1, l);
      return l.pop(), n[this.options.textNodeName] !== void 0 && Object.keys(n).length === 1 ? this.buildTextValNode(n[this.options.textNodeName], i, h.attrStr, u, l) : this.buildObjectNode(h.val, i, h.attrStr, u);
    }
    function Zi(n) {
      return this.options.indentBy.repeat(n);
    }
    function eo(n) {
      return !(!n.startsWith(this.options.attributeNamePrefix) || n === this.options.textNodeName) && n.substr(this.attrPrefixLen);
    }
    te.prototype.build = function(n) {
      if (this.options.preserveOrder) return Xi(n, this.options);
      {
        Array.isArray(n) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (n = {
          [this.options.arrayNodeName]: n
        });
        let i = new Ge;
        return this.j2x(n, 0, i).val;
      }
    }, te.prototype.j2x = function(n, i, u) {
      let l = "", p = "";
      if (this.options.maxNestedTags && u.getDepth() >= this.options.maxNestedTags) throw Error("Maximum nested tags exceeded");
      let h = this.options.jPath ? u.toString() : u, S = this.checkStopNode(u);
      for (let g in n) if (Object.prototype.hasOwnProperty.call(n, g)) if (n[g] === void 0) this.isAttribute(g) && (p += ""); else if (n[g] === null) this.isAttribute(g) || g === this.options.cdataPropName ? p += "" : g[0] === "?" ? p += this.indentate(i) + "<" + g + "?" + this.tagEndChar : p += this.indentate(i) + "<" + g + "/" + this.tagEndChar; else if (n[g] instanceof Date) p += this.buildTextValNode(n[g], g, "", i, u); else if (typeof n[g] != "object") {
        let E = this.isAttribute(g);
        if (E && !this.ignoreAttributesFn(E, h)) l += this.buildAttrPairStr(E, "" + n[g], S); else if (!E) if (g === this.options.textNodeName) {
          let w = this.options.tagValueProcessor(g, "" + n[g]);
          p += this.replaceEntitiesValue(w);
        } else {
          u.push(g);
          let w = this.checkStopNode(u);
          if (u.pop(), w) {
            let A = "" + n[g];
            p += A === "" ? this.indentate(i) + "<" + g + this.closeTag(g) + this.tagEndChar : this.indentate(i) + "<" + g + ">" + A + "</" + g + this.tagEndChar;
          } else p += this.buildTextValNode(n[g], g, "", i, u);
        }
      } else if (Array.isArray(n[g])) {
        let E = n[g].length, w = "", A = "";
        for (let _ = 0; _ < E; _++) {
          let z = n[g][_];
          if (z === void 0) ; else if (z === null) g[0] === "?" ? p += this.indentate(i) + "<" + g + "?" + this.tagEndChar : p += this.indentate(i) + "<" + g + "/" + this.tagEndChar; else if (typeof z == "object") if (this.options.oneListGroup) {
            u.push(g);
            let D = this.j2x(z, i + 1, u);
            u.pop(), w += D.val, this.options.attributesGroupName && z.hasOwnProperty(this.options.attributesGroupName) && (A += D.attrStr);
          } else w += this.processTextOrObjNode(z, g, i, u); else if (this.options.oneListGroup) {
            let D = this.options.tagValueProcessor(g, z);
            D = this.replaceEntitiesValue(D), w += D;
          } else {
            u.push(g);
            let D = this.checkStopNode(u);
            if (u.pop(), D) {
              let k = "" + z;
              w += k === "" ? this.indentate(i) + "<" + g + this.closeTag(g) + this.tagEndChar : this.indentate(i) + "<" + g + ">" + k + "</" + g + this.tagEndChar;
            } else w += this.buildTextValNode(z, g, "", i, u);
          }
        }
        this.options.oneListGroup && (w = this.buildObjectNode(w, g, A, i)), p += w;
      } else if (this.options.attributesGroupName && g === this.options.attributesGroupName) {
        let E = Object.keys(n[g]), w = E.length;
        for (let A = 0; A < w; A++) l += this.buildAttrPairStr(E[A], "" + n[g][E[A]], S);
      } else p += this.processTextOrObjNode(n[g], g, i, u);
      return {
        attrStr: l,
        val: p
      };
    }, te.prototype.buildAttrPairStr = function(n, i, u) {
      return u || (i = this.options.attributeValueProcessor(n, "" + i), i = this.replaceEntitiesValue(i)), 
      this.options.suppressBooleanAttributes && i === "true" ? " " + n : " " + n + '="' + i + '"';
    }, te.prototype.extractAttributes = function(n) {
      if (!n || typeof n != "object") return null;
      let i = {}, u = !1;
      if (this.options.attributesGroupName && n[this.options.attributesGroupName]) {
        let l = n[this.options.attributesGroupName];
        for (let p in l) Object.prototype.hasOwnProperty.call(l, p) && (i[p.startsWith(this.options.attributeNamePrefix) ? p.substring(this.options.attributeNamePrefix.length) : p] = l[p], 
        u = !0);
      } else for (let l in n) {
        if (!Object.prototype.hasOwnProperty.call(n, l)) continue;
        let p = this.isAttribute(l);
        p && (i[p] = n[l], u = !0);
      }
      return u ? i : null;
    }, te.prototype.buildRawContent = function(n) {
      if (typeof n == "string") return n;
      if (typeof n != "object" || n === null) return String(n);
      if (n[this.options.textNodeName] !== void 0) return n[this.options.textNodeName];
      let i = "";
      for (let u in n) {
        if (!Object.prototype.hasOwnProperty.call(n, u)) continue;
        if (this.isAttribute(u)) continue;
        if (this.options.attributesGroupName && u === this.options.attributesGroupName) continue;
        let l = n[u];
        if (u === this.options.textNodeName) i += l; else if (Array.isArray(l)) {
          for (let p of l) if (typeof p == "string" || typeof p == "number") i += `<${u}>${p}</${u}>`; else if (typeof p == "object" && p !== null) {
            let h = this.buildRawContent(p), S = this.buildAttributesForStopNode(p);
            i += h === "" ? `<${u}${S}/>` : `<${u}${S}>${h}</${u}>`;
          }
        } else if (typeof l == "object" && l !== null) {
          let p = this.buildRawContent(l), h = this.buildAttributesForStopNode(l);
          i += p === "" ? `<${u}${h}/>` : `<${u}${h}>${p}</${u}>`;
        } else i += `<${u}>${l}</${u}>`;
      }
      return i;
    }, te.prototype.buildAttributesForStopNode = function(n) {
      if (!n || typeof n != "object") return "";
      let i = "";
      if (this.options.attributesGroupName && n[this.options.attributesGroupName]) {
        let u = n[this.options.attributesGroupName];
        for (let l in u) {
          if (!Object.prototype.hasOwnProperty.call(u, l)) continue;
          let p = l.startsWith(this.options.attributeNamePrefix) ? l.substring(this.options.attributeNamePrefix.length) : l, h = u[l];
          h === !0 && this.options.suppressBooleanAttributes ? i += " " + p : i += " " + p + '="' + h + '"';
        }
      } else for (let u in n) {
        if (!Object.prototype.hasOwnProperty.call(n, u)) continue;
        let l = this.isAttribute(u);
        if (l) {
          let p = n[u];
          p === !0 && this.options.suppressBooleanAttributes ? i += " " + l : i += " " + l + '="' + p + '"';
        }
      }
      return i;
    }, te.prototype.buildObjectNode = function(n, i, u, l) {
      if (n === "") return i[0] === "?" ? this.indentate(l) + "<" + i + u + "?" + this.tagEndChar : this.indentate(l) + "<" + i + u + this.closeTag(i) + this.tagEndChar;
      {
        let p = "</" + i + this.tagEndChar, h = "";
        return i[0] === "?" && (h = "?", p = ""), !u && u !== "" || n.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && i === this.options.commentPropName && h.length === 0 ? this.indentate(l) + `\x3c!--${n}--\x3e` + this.newLine : this.indentate(l) + "<" + i + u + h + this.tagEndChar + n + this.indentate(l) + p : this.indentate(l) + "<" + i + u + h + ">" + n + p;
      }
    }, te.prototype.closeTag = function(n) {
      let i = "";
      return this.options.unpairedTags.indexOf(n) !== -1 ? this.options.suppressUnpairedNode || (i = "/") : i = this.options.suppressEmptyNode ? "/" : `></${n}`, 
      i;
    }, te.prototype.checkStopNode = function(n) {
      if (!this.stopNodeExpressions || this.stopNodeExpressions.length === 0) return !1;
      for (let i = 0; i < this.stopNodeExpressions.length; i++) if (n.matches(this.stopNodeExpressions[i])) return !0;
      return !1;
    }, te.prototype.buildTextValNode = function(n, i, u, l, p) {
      if (this.options.cdataPropName !== !1 && i === this.options.cdataPropName) return this.indentate(l) + `<![CDATA[${n}]]>` + this.newLine;
      if (this.options.commentPropName !== !1 && i === this.options.commentPropName) return this.indentate(l) + `\x3c!--${n}--\x3e` + this.newLine;
      if (i[0] === "?") return this.indentate(l) + "<" + i + u + "?" + this.tagEndChar;
      {
        let h = this.options.tagValueProcessor(i, n);
        return h = this.replaceEntitiesValue(h), h === "" ? this.indentate(l) + "<" + i + u + this.closeTag(i) + this.tagEndChar : this.indentate(l) + "<" + i + u + ">" + h + "</" + i + this.tagEndChar;
      }
    }, te.prototype.replaceEntitiesValue = function(n) {
      if (n && n.length > 0 && this.options.processEntities) for (let i = 0; i < this.options.entities.length; i++) {
        let u = this.options.entities[i];
        n = n.replace(u.regex, u.val);
      }
      return n;
    };
    let to = te, ro = {
      validate: m
    };
    ys.exports = t;
  })();
});

var xs = C(function(ws) {
  Object.defineProperty(ws, "__esModule", {
    value: !0
  });
  ws.parseXML = _a;
  var Ss = Es(), Vt = new Ss.XMLParser({
    attributeNamePrefix: "",
    htmlEntities: !0,
    ignoreAttributes: !1,
    ignoreDeclaration: !0,
    parseTagValue: !1,
    trimValues: !1,
    tagValueProcessor: (e, t) => t.trim() === "" && t.includes(`\n`) ? "" : void 0
  });
  Vt.addEntity("#xD", "\r");
  Vt.addEntity("#10", `\n`);
  function _a(e) {
    return Vt.parse(e, !0);
  }
});

var jt = C(function(bs) {
  var Aa = xs();
  function Ra(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function Ia(e) {
    return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;");
  }
  class Ft {
    value;
    constructor(e) {
      this.value = e;
    }
    toString() {
      return Ia("" + this.value);
    }
  }
  class Ue {
    name;
    children;
    attributes={};
    static of(e, t, r) {
      let s = new Ue(e);
      if (t !== void 0) s.addChildNode(new Ft(t));
      if (r !== void 0) s.withName(r);
      return s;
    }
    constructor(e, t = []) {
      this.name = e, this.children = t;
    }
    withName(e) {
      return this.name = e, this;
    }
    addAttribute(e, t) {
      return this.attributes[e] = t, this;
    }
    addChildNode(e) {
      return this.children.push(e), this;
    }
    removeAttribute(e) {
      return delete this.attributes[e], this;
    }
    n(e) {
      return this.name = e, this;
    }
    c(e) {
      return this.children.push(e), this;
    }
    a(e, t) {
      if (t != null) this.attributes[e] = t;
      return this;
    }
    cc(e, t, r = t) {
      if (e[t] != null) {
        let s = Ue.of(t, e[t]).withName(r);
        this.c(s);
      }
    }
    l(e, t, r, s) {
      if (e[t] != null) s().map(a => {
        a.withName(r), this.c(a);
      });
    }
    lc(e, t, r, s) {
      if (e[t] != null) {
        let o = s(), a = new Ue(r);
        o.map(c => {
          a.c(c);
        }), this.c(a);
      }
    }
    toString() {
      let e = Boolean(this.children.length), t = `<${this.name}`, r = this.attributes;
      for (let s of Object.keys(r)) {
        let o = r[s];
        if (o != null) t += ` ${s}="${Ra("" + o)}"`;
      }
      return t += !e ? "/>" : `>${this.children.map(s => s.toString()).join("")}</${this.name}>`;
    }
  }
  Object.defineProperty(bs, "parseXML", {
    enumerable: !0,
    get: function() {
      return Aa.parseXML;
    }
  });
  bs.XmlNode = Ue;
  bs.XmlText = Ft;
});

var XT = C(function(Ja) {
  var Ht = og(), me = rS(), Ns = Ym(), Da = HP(), Ts = f3e(), _s = Ut(), L = MP(), de = Nc(), Q = gut(), G = OHt(), Fe = lx(), Ds = _T(), re = jt(), qt = {
    warningEmitted: !1
  }, Pa = e => {
    if (e && !qt.warningEmitted && parseInt(e.substring(1, e.indexOf("."))) < 18) qt.warningEmitted = !0, 
    process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will\nno longer support Node.js 16.x on January 6, 2025.\n\nTo continue receiving updates to AWS services, bug fixes, and security\nupdates please upgrade to a supported Node.js LTS version.\n\nMore information can be found at: https://a.co/74kJMmI`);
  };
  function ka(e, t, r) {
    if (!e.$source) e.$source = {};
    return e.$source[t] = r, e;
  }
  function va(e, t, r) {
    if (!e.__aws_sdk_context) e.__aws_sdk_context = {
      features: {}
    }; else if (!e.__aws_sdk_context.features) e.__aws_sdk_context.features = {};
    e.__aws_sdk_context.features[t] = r;
  }
  function za(e, t, r) {
    if (!e.$source) e.$source = {};
    return e.$source[t] = r, e;
  }
  var Cs = e => Ht.HttpResponse.isInstance(e) ? e.headers?.date ?? e.headers?.Date : void 0, Gt = e => new Date(Date.now() + e), $a = (e, t) => Math.abs(Gt(t).getTime() - e) >= 3e5, As = (e, t) => {
    let r = Date.parse(e);
    if ($a(r, t)) return r - Date.now();
    return t;
  }, Ve = (e, t) => {
    if (!t) throw Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`);
    return t;
  }, Xt = async e => {
    let t = Ve("context", e.context), r = Ve("config", e.config), s = t.endpointV2?.properties?.authSchemes?.[0], a = await Ve("signer", r.signer)(s), c = e?.signingRegion, d = e?.signingRegionSet, f = e?.signingName;
    return {
      config: r,
      signer: a,
      signingRegion: c,
      signingRegionSet: d,
      signingName: f
    };
  };
  class tt {
    async sign(e, t, r) {
      if (!Ht.HttpRequest.isInstance(e)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
      let s = await Xt(r), {config: o, signer: a} = s, {signingRegion: c, signingName: d} = s, f = r.context;
      if (f?.authSchemes?.length ?? !1) {
        let [y, b] = f.authSchemes;
        if (y?.name === "sigv4a" && b?.name === "sigv4") c = b?.signingRegion ?? c, d = b?.signingName ?? d;
      }
      return await a.sign(e, {
        signingDate: Gt(o.systemClockOffset),
        signingRegion: c,
        signingService: d
      });
    }
    errorHandler(e) {
      return t => {
        let r = t.ServerTime ?? Cs(t.$response);
        if (r) {
          let s = Ve("config", e.config), o = s.systemClockOffset;
          if (s.systemClockOffset = As(r, s.systemClockOffset), s.systemClockOffset !== o && t.$metadata) t.$metadata.clockSkewCorrected = !0;
        }
        throw t;
      };
    }
    successHandler(e, t) {
      let r = Cs(e);
      if (r) {
        let s = Ve("config", t.config);
        s.systemClockOffset = As(r, s.systemClockOffset);
      }
    }
  }
  var Ba = tt;
  class Ps extends tt {
    async sign(e, t, r) {
      if (!Ht.HttpRequest.isInstance(e)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
      let {config: s, signer: o, signingRegion: a, signingRegionSet: c, signingName: d} = await Xt(r), m = (await (s.sigv4aSigningRegionSet?.()) ?? c ?? [ a ]).join(",");
      return await o.sign(e, {
        signingDate: Gt(s.systemClockOffset),
        signingRegion: m,
        signingService: d
      });
    }
  }
  var Rs = e => typeof e === "string" && e.length > 0 ? e.split(",").map(t => t.trim()) : [], ks = e => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`, Is = "AWS_AUTH_SCHEME_PREFERENCE", Os = "auth_scheme_preference", La = {
    environmentVariableSelector: (e, t) => {
      if (t?.signingName) {
        if (ks(t.signingName) in e) return [ "httpBearerAuth" ];
      }
      if (!(Is in e)) return;
      return Rs(e[Is]);
    },
    configFileSelector: e => {
      if (!(Os in e)) return;
      return Rs(e[Os]);
    },
    default: []
  }, Ua = e => (e.sigv4aSigningRegionSet = me.normalizeProvider(e.sigv4aSigningRegionSet), 
  e), Va = {
    environmentVariableSelector(e) {
      if (e.AWS_SIGV4A_SIGNING_REGION_SET) return e.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map(t => t.trim());
      throw new Ns.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
        tryNextLink: !0
      });
    },
    configFileSelector(e) {
      if (e.sigv4a_signing_region_set) return (e.sigv4a_signing_region_set ?? "").split(",").map(t => t.trim());
      throw new Ns.ProviderError("sigv4a_signing_region_set not set in profile.", {
        tryNextLink: !0
      });
    },
    default: void 0
  }, vs = e => {
    let t = e.credentials, r = !!e.credentials, s = void 0;
    Object.defineProperty(e, "credentials", {
      set(m) {
        if (m && m !== t && m !== s) r = !0;
        t = m;
        let y = ja(e, {
          credentials: t,
          credentialDefaultProvider: e.credentialDefaultProvider
        }), b = qa(e, y);
        if (r && !b.attributed) s = async x => b(x).then(N => Da.setCredentialFeature(N, "CREDENTIALS_CODE", "e")), 
        s.memoized = b.memoized, s.configBound = b.configBound, s.attributed = !0; else s = b;
      },
      get() {
        return s;
      },
      enumerable: !0,
      configurable: !0
    }), e.credentials = t;
    let {signingEscapePath: o = !0, systemClockOffset: a = e.systemClockOffset || 0, sha256: c} = e, d;
    if (e.signer) d = me.normalizeProvider(e.signer); else if (e.regionInfoProvider) d = () => me.normalizeProvider(e.region)().then(async m => [ await e.regionInfoProvider(m, {
      useFipsEndpoint: await e.useFipsEndpoint(),
      useDualstackEndpoint: await e.useDualstackEndpoint()
    }) || {}, m ]).then(([m, y]) => {
      let {signingRegion: b, signingService: x} = m;
      e.signingRegion = e.signingRegion || b || y, e.signingName = e.signingName || x || e.serviceId;
      let N = {
        ...e,
        credentials: e.credentials,
        region: e.signingRegion,
        service: e.signingName,
        sha256: c,
        uriEscapePath: o
      };
      return new (e.signerConstructor || Ts.SignatureV4)(N);
    }); else d = async m => {
      m = Object.assign({}, {
        name: "sigv4",
        signingName: e.signingName || e.defaultSigningName,
        signingRegion: await me.normalizeProvider(e.region)(),
        properties: {}
      }, m);
      let y = m.signingRegion, b = m.signingName;
      e.signingRegion = e.signingRegion || y, e.signingName = e.signingName || b || e.serviceId;
      let x = {
        ...e,
        credentials: e.credentials,
        region: e.signingRegion,
        service: e.signingName,
        sha256: c,
        uriEscapePath: o
      };
      return new (e.signerConstructor || Ts.SignatureV4)(x);
    };
    return Object.assign(e, {
      systemClockOffset: a,
      signingEscapePath: o,
      signer: d
    });
  }, Fa = vs;
  function ja(e, {credentials: t, credentialDefaultProvider: r}) {
    let s;
    if (t) if (!t?.memoized) s = me.memoizeIdentityProvider(t, me.isIdentityExpired, me.doesIdentityRequireRefresh); else s = t; else if (r) s = me.normalizeProvider(r(Object.assign({}, e, {
      parentClientConfig: e
    }))); else s = async () => {
      throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
    };
    return s.memoized = !0, s;
  }
  function qa(e, t) {
    if (t.configBound) return t;
    let r = async s => t({
      ...s,
      callerClientConfig: e
    });
    return r.memoized = t.memoized, r.configBound = !0, r;
  }
  class Oe {
    queryCompat;
    constructor(e = !1) {
      this.queryCompat = e;
    }
    resolveRestContentType(e, t) {
      let r = t.getMemberSchemas(), s = Object.values(r).find(o => !!o.getMergedTraits().httpPayload);
      if (s) {
        let o = s.getMergedTraits().mediaType;
        if (o) return o; else if (s.isStringSchema()) return "text/plain"; else if (s.isBlobSchema()) return "application/octet-stream"; else return e;
      } else if (!t.isUnitSchema()) {
        if (Object.values(r).find(a => {
          let {httpQuery: c, httpQueryParams: d, httpHeader: f, httpLabel: m, httpPrefixHeaders: y} = a.getMergedTraits();
          return !c && !d && !f && !m && y === void 0;
        })) return e;
      }
    }
    async getErrorSchemaOrThrowBaseException(e, t, r, s, o, a) {
      let c = t, d = e;
      if (e.includes("#")) [c, d] = e.split("#");
      let f = {
        $metadata: o,
        $fault: r.statusCode < 500 ? "client" : "server"
      }, m = L.TypeRegistry.for(c);
      try {
        return {
          errorSchema: a?.(m, d) ?? m.getSchema(e),
          errorMetadata: f
        };
      } catch (y) {
        s.message = s.message ?? s.Message ?? "UnknownError";
        let b = L.TypeRegistry.for("smithy.ts.sdk.synthetic." + c), x = b.getBaseException();
        if (x) {
          let N = b.getErrorCtor(x) ?? Error;
          throw this.decorateServiceException(Object.assign(new N({
            name: d
          }), f), s);
        }
        throw this.decorateServiceException(Object.assign(Error(d), f), s);
      }
    }
    decorateServiceException(e, t = {}) {
      if (this.queryCompat) {
        let r = e.Message ?? t.Message, s = de.decorateServiceException(e, t);
        if (r) s.Message = r, s.message = r;
        return s;
      }
      return de.decorateServiceException(e, t);
    }
    setQueryCompatError(e, t) {
      let r = t.headers?.["x-amzn-query-error"];
      if (e !== void 0 && r != null) {
        let [s, o] = r.split(";"), a = Object.entries(e), c = {
          Code: s,
          Type: o
        };
        Object.assign(e, c);
        for (let [d, f] of a) c[d] = f;
        delete c.__type, e.Error = c;
      }
    }
    queryCompatOutput(e, t) {
      if (e.Error) t.Error = e.Error;
      if (e.Type) t.Type = e.Type;
      if (e.Code) t.Code = e.Code;
    }
  }
  class zs extends _s.SmithyRpcV2CborProtocol {
    awsQueryCompatible;
    mixin;
    constructor({defaultNamespace: e, awsQueryCompatible: t}) {
      super({
        defaultNamespace: e
      });
      this.awsQueryCompatible = !!t, this.mixin = new Oe(this.awsQueryCompatible);
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (this.awsQueryCompatible) s.headers["x-amzn-query-mode"] = "true";
      return s;
    }
    async handleError(e, t, r, s, o) {
      if (this.awsQueryCompatible) this.mixin.setQueryCompatError(s, r);
      let a = _s.loadSmithyRpcV2CborErrorCode(r, s) ?? "Unknown", {errorSchema: c, errorMetadata: d} = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = L.NormalizedSchema.of(c), m = s.message ?? s.Message ?? "Unknown", b = new (L.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m), x = {};
      for (let [N, T] of f.structIterator()) x[N] = this.deserializer.readValue(T, s[N]);
      if (this.awsQueryCompatible) this.mixin.queryCompatOutput(s, x);
      throw this.mixin.decorateServiceException(Object.assign(b, d, {
        $fault: f.getMergedTraits().error,
        message: m
      }, x), s);
    }
  }
  var Ha = e => {
    if (e == null) return e;
    if (typeof e === "number" || typeof e === "bigint") {
      let t = Error(`Received number ${e} where a string was expected.`);
      return t.name = "Warning", console.warn(t), String(e);
    }
    if (typeof e === "boolean") {
      let t = Error(`Received boolean ${e} where a string was expected.`);
      return t.name = "Warning", console.warn(t), String(e);
    }
    return e;
  }, Ga = e => {
    if (e == null) return e;
    if (typeof e === "string") {
      let t = e.toLowerCase();
      if (e !== "" && t !== "false" && t !== "true") {
        let r = Error(`Received string "${e}" where a boolean was expected.`);
        r.name = "Warning", console.warn(r);
      }
      return e !== "" && t !== "false";
    }
    return e;
  }, Xa = e => {
    if (e == null) return e;
    if (typeof e === "string") {
      let t = Number(e);
      if (t.toString() !== e) {
        let r = Error(`Received string "${e}" where a number was expected.`);
        return r.name = "Warning", console.warn(r), e;
      }
      return t;
    }
    return e;
  };
  class ge {
    serdeContext;
    setSerdeContext(e) {
      this.serdeContext = e;
    }
  }
  function Wa(e, t, r) {
    if (r?.source) {
      let s = r.source;
      if (typeof t === "number") {
        if (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER || s !== String(t)) if (s.includes(".")) return new G.NumericValue(s, "bigDecimal"); else return BigInt(s);
      }
    }
    return t;
  }
  var $s = (e, t) => de.collectBody(e, t).then(r => (t?.utf8Encoder ?? Ds.toUtf8)(r)), Wt = (e, t) => $s(e, t).then(r => {
    if (r.length) try {
      return JSON.parse(r);
    } catch (s) {
      if (s?.name === "SyntaxError") Object.defineProperty(s, "$responseBodyText", {
        value: r
      });
      throw s;
    }
    return {};
  }), Ka = async (e, t) => {
    let r = await Wt(e, t);
    return r.message = r.message ?? r.Message, r;
  }, Kt = (e, t) => {
    let r = (a, c) => Object.keys(a).find(d => d.toLowerCase() === c.toLowerCase()), s = a => {
      let c = a;
      if (typeof c === "number") c = c.toString();
      if (c.indexOf(",") >= 0) c = c.split(",")[0];
      if (c.indexOf(":") >= 0) c = c.split(":")[0];
      if (c.indexOf("#") >= 0) c = c.split("#")[1];
      return c;
    }, o = r(e.headers, "x-amzn-errortype");
    if (o !== void 0) return s(e.headers[o]);
    if (t && typeof t === "object") {
      let a = r(t, "code");
      if (a && t[a] !== void 0) return s(t[a]);
      if (t.__type !== void 0) return s(t.__type);
    }
  };
  class Qt extends ge {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    async read(e, t) {
      return this._read(e, typeof t === "string" ? JSON.parse(t, Wa) : await Wt(t, this.serdeContext));
    }
    readObject(e, t) {
      return this._read(e, t);
    }
    _read(e, t) {
      let r = t !== null && typeof t === "object", s = L.NormalizedSchema.of(e);
      if (s.isListSchema() && Array.isArray(t)) {
        let a = s.getValueSchema(), c = [], d = !!s.getMergedTraits().sparse;
        for (let f of t) if (d || f != null) c.push(this._read(a, f));
        return c;
      } else if (s.isMapSchema() && r) {
        let a = s.getValueSchema(), c = {}, d = !!s.getMergedTraits().sparse;
        for (let [f, m] of Object.entries(t)) if (d || m != null) c[f] = this._read(a, m);
        return c;
      } else if (s.isStructSchema() && r) {
        let a = {};
        for (let [c, d] of s.structIterator()) {
          let f = this.settings.jsonName ? d.getMergedTraits().jsonName ?? c : c, m = this._read(d, t[f]);
          if (m != null) a[c] = m;
        }
        return a;
      }
      if (s.isBlobSchema() && typeof t === "string") return Fe.fromBase64(t);
      let o = s.getMergedTraits().mediaType;
      if (s.isStringSchema() && typeof t === "string" && o) {
        if (o === "application/json" || o.endsWith("+json")) return G.LazyJsonString.from(t);
      }
      if (s.isTimestampSchema() && t != null) switch (Q.determineTimestampFormat(s, this.settings)) {
       case 5:
        return G.parseRfc3339DateTimeWithOffset(t);

       case 6:
        return G.parseRfc7231DateTime(t);

       case 7:
        return G.parseEpochTimestamp(t);

       default:
        return console.warn("Missing timestamp format, parsing value with Date constructor:", t), 
        new Date(t);
      }
      if (s.isBigIntegerSchema() && (typeof t === "number" || typeof t === "string")) return BigInt(t);
      if (s.isBigDecimalSchema() && t != null) {
        if (t instanceof G.NumericValue) return t;
        let a = t;
        if (a.type === "bigDecimal" && "string" in a) return new G.NumericValue(a.string, a.type);
        return new G.NumericValue(String(t), "bigDecimal");
      }
      if (s.isNumericSchema() && typeof t === "string") switch (t) {
       case "Infinity":
        return 1 / 0;

       case "-Infinity":
        return -1 / 0;

       case "NaN":
        return NaN;
      }
      if (s.isDocumentSchema()) if (r) {
        let a = Array.isArray(t) ? [] : {};
        for (let [c, d] of Object.entries(t)) if (d instanceof G.NumericValue) a[c] = d; else a[c] = this._read(s, d);
        return a;
      } else return structuredClone(t);
      return t;
    }
  }
  var Ms = String.fromCharCode(925);
  class Bs {
    values=new Map;
    counter=0;
    stage=0;
    createReplacer() {
      if (this.stage === 1) throw Error("@aws-sdk/core/protocols - JsonReplacer already created.");
      if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      return this.stage = 1, (e, t) => {
        if (t instanceof G.NumericValue) {
          let r = `${Ms + "nv" + this.counter++}_` + t.string;
          return this.values.set(`"${r}"`, t.string), r;
        }
        if (typeof t === "bigint") {
          let r = t.toString(), s = `${Ms + "b" + this.counter++}_` + r;
          return this.values.set(`"${s}"`, r), s;
        }
        return t;
      };
    }
    replaceInJson(e) {
      if (this.stage === 0) throw Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
      if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      if (this.stage = 2, this.counter === 0) return e;
      for (let [t, r] of this.values) e = e.replace(t, r);
      return e;
    }
  }
  class Yt extends ge {
    settings;
    buffer;
    rootSchema;
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t) {
      this.rootSchema = L.NormalizedSchema.of(e), this.buffer = this._write(this.rootSchema, t);
    }
    writeDiscriminatedDocument(e, t) {
      if (this.write(e, t), typeof this.buffer === "object") this.buffer.__type = L.NormalizedSchema.of(e).getName(!0);
    }
    flush() {
      let {rootSchema: e} = this;
      if (this.rootSchema = void 0, e?.isStructSchema() || e?.isDocumentSchema()) {
        let t = new Bs;
        return t.replaceInJson(JSON.stringify(this.buffer, t.createReplacer(), 0));
      }
      return this.buffer;
    }
    _write(e, t, r) {
      let s = t !== null && typeof t === "object", o = L.NormalizedSchema.of(e);
      if (o.isListSchema() && Array.isArray(t)) {
        let a = o.getValueSchema(), c = [], d = !!o.getMergedTraits().sparse;
        for (let f of t) if (d || f != null) c.push(this._write(a, f));
        return c;
      } else if (o.isMapSchema() && s) {
        let a = o.getValueSchema(), c = {}, d = !!o.getMergedTraits().sparse;
        for (let [f, m] of Object.entries(t)) if (d || m != null) c[f] = this._write(a, m);
        return c;
      } else if (o.isStructSchema() && s) {
        let a = {};
        for (let [c, d] of o.structIterator()) {
          let f = this.settings.jsonName ? d.getMergedTraits().jsonName ?? c : c, m = this._write(d, t[c], o);
          if (m !== void 0) a[f] = m;
        }
        return a;
      }
      if (t === null && r?.isStructSchema()) return;
      if (o.isBlobSchema() && (t instanceof Uint8Array || typeof t === "string") || o.isDocumentSchema() && t instanceof Uint8Array) {
        if (o === this.rootSchema) return t;
        return (this.serdeContext?.base64Encoder ?? Fe.toBase64)(t);
      }
      if ((o.isTimestampSchema() || o.isDocumentSchema()) && t instanceof Date) switch (Q.determineTimestampFormat(o, this.settings)) {
       case 5:
        return t.toISOString().replace(".000Z", "Z");

       case 6:
        return G.dateToUtcString(t);

       case 7:
        return t.getTime() / 1e3;

       default:
        return console.warn("Missing timestamp format, using epoch seconds", t), t.getTime() / 1e3;
      }
      if (o.isNumericSchema() && typeof t === "number") {
        if (Math.abs(t) === 1 / 0 || isNaN(t)) return String(t);
      }
      if (o.isStringSchema()) {
        if (typeof t > "u" && o.isIdempotencyToken()) return G.generateIdempotencyToken();
        let a = o.getMergedTraits().mediaType;
        if (t != null && a) {
          if (a === "application/json" || a.endsWith("+json")) return G.LazyJsonString.from(t);
        }
      }
      if (o.isDocumentSchema()) if (s) {
        let a = Array.isArray(t) ? [] : {};
        for (let [c, d] of Object.entries(t)) if (d instanceof G.NumericValue) a[c] = d; else a[c] = this._write(o, d);
        return a;
      } else return structuredClone(t);
      return t;
    }
  }
  class rt extends ge {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    createSerializer() {
      let e = new Yt(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
      let e = new Qt(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
  }
  class st extends Q.RpcProtocol {
    serializer;
    deserializer;
    serviceTarget;
    codec;
    mixin;
    awsQueryCompatible;
    constructor({defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r}) {
      super({
        defaultNamespace: e
      });
      this.serviceTarget = t, this.codec = new rt({
        timestampFormat: {
          useTrait: !0,
          default: 7
        },
        jsonName: !1
      }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer(), 
      this.awsQueryCompatible = !!r, this.mixin = new Oe(this.awsQueryCompatible);
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (!s.path.endsWith("/")) s.path += "/";
      if (Object.assign(s.headers, {
        "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
        "x-amz-target": `${this.serviceTarget}.${e.name}`
      }), this.awsQueryCompatible) s.headers["x-amzn-query-mode"] = "true";
      if (L.deref(e.input) === "unit" || !s.body) s.body = "{}";
      return s;
    }
    getPayloadCodec() {
      return this.codec;
    }
    async handleError(e, t, r, s, o) {
      if (this.awsQueryCompatible) this.mixin.setQueryCompatError(s, r);
      let a = Kt(r, s) ?? "Unknown", {errorSchema: c, errorMetadata: d} = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = L.NormalizedSchema.of(c), m = s.message ?? s.Message ?? "Unknown", b = new (L.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m), x = {};
      for (let [N, T] of f.structIterator()) {
        let I = T.getMergedTraits().jsonName ?? N;
        x[N] = this.codec.createDeserializer().readObject(T, s[I]);
      }
      if (this.awsQueryCompatible) this.mixin.queryCompatOutput(s, x);
      throw this.mixin.decorateServiceException(Object.assign(b, d, {
        $fault: f.getMergedTraits().error,
        message: m
      }, x), s);
    }
  }
  class Ls extends st {
    constructor({defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r}) {
      super({
        defaultNamespace: e,
        serviceTarget: t,
        awsQueryCompatible: r
      });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_0";
    }
    getJsonRpcVersion() {
      return "1.0";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.0";
    }
  }
  class Us extends st {
    constructor({defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r}) {
      super({
        defaultNamespace: e,
        serviceTarget: t,
        awsQueryCompatible: r
      });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_1";
    }
    getJsonRpcVersion() {
      return "1.1";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.1";
    }
  }
  class Vs extends Q.HttpBindingProtocol {
    serializer;
    deserializer;
    codec;
    mixin=new Oe;
    constructor({defaultNamespace: e}) {
      super({
        defaultNamespace: e
      });
      let t = {
        timestampFormat: {
          useTrait: !0,
          default: 7
        },
        httpBindings: !0,
        jsonName: !0
      };
      this.codec = new rt(t), this.serializer = new Q.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t), 
      this.deserializer = new Q.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
    }
    getShapeId() {
      return "aws.protocols#restJson1";
    }
    getPayloadCodec() {
      return this.codec;
    }
    setSerdeContext(e) {
      this.codec.setSerdeContext(e), super.setSerdeContext(e);
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r), o = L.NormalizedSchema.of(e.input);
      if (!s.headers["content-type"]) {
        let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
        if (a) s.headers["content-type"] = a;
      }
      if (s.body == null && s.headers["content-type"] === this.getDefaultContentType()) s.body = "{}";
      return s;
    }
    async deserializeResponse(e, t, r) {
      let s = await super.deserializeResponse(e, t, r), o = L.NormalizedSchema.of(e.output);
      for (let [a, c] of o.structIterator()) if (c.getMemberTraits().httpPayload && !(a in s)) s[a] = null;
      return s;
    }
    async handleError(e, t, r, s, o) {
      let a = Kt(r, s) ?? "Unknown", {errorSchema: c, errorMetadata: d} = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = L.NormalizedSchema.of(c), m = s.message ?? s.Message ?? "Unknown", b = new (L.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m);
      await this.deserializeHttpMessage(c, t, r, s);
      let x = {};
      for (let [N, T] of f.structIterator()) {
        let I = T.getMergedTraits().jsonName ?? N;
        x[N] = this.codec.createDeserializer().readObject(T, s[I]);
      }
      throw this.mixin.decorateServiceException(Object.assign(b, d, {
        $fault: f.getMergedTraits().error,
        message: m
      }, x), s);
    }
    getDefaultContentType() {
      return "application/json";
    }
  }
  var Qa = e => {
    if (e == null) return;
    if (typeof e === "object" && "__type" in e) delete e.__type;
    return de.expectUnion(e);
  };
  class nt extends ge {
    settings;
    stringDeserializer;
    constructor(e) {
      super();
      this.settings = e, this.stringDeserializer = new Q.FromStringShapeDeserializer(e);
    }
    setSerdeContext(e) {
      this.serdeContext = e, this.stringDeserializer.setSerdeContext(e);
    }
    read(e, t, r) {
      let s = L.NormalizedSchema.of(e), o = s.getMemberSchemas();
      if (s.isStructSchema() && s.isMemberSchema() && !!Object.values(o).find(f => !!f.getMemberTraits().eventPayload)) {
        let f = {}, m = Object.keys(o)[0];
        if (o[m].isBlobSchema()) f[m] = t; else f[m] = this.read(o[m], t);
        return f;
      }
      let c = (this.serdeContext?.utf8Encoder ?? Ds.toUtf8)(t), d = this.parseXml(c);
      return this.readSchema(e, r ? d[r] : d);
    }
    readSchema(e, t) {
      let r = L.NormalizedSchema.of(e);
      if (r.isUnitSchema()) return;
      let s = r.getMergedTraits();
      if (r.isListSchema() && !Array.isArray(t)) return this.readSchema(r, [ t ]);
      if (t == null) return t;
      if (typeof t === "object") {
        let o = !!s.sparse, a = !!s.xmlFlattened;
        if (r.isListSchema()) {
          let d = r.getValueSchema(), f = [], m = d.getMergedTraits().xmlName ?? "member", y = a ? t : (t[0] ?? t)[m], b = Array.isArray(y) ? y : [ y ];
          for (let x of b) if (x != null || o) f.push(this.readSchema(d, x));
          return f;
        }
        let c = {};
        if (r.isMapSchema()) {
          let d = r.getKeySchema(), f = r.getValueSchema(), m;
          if (a) m = Array.isArray(t) ? t : [ t ]; else m = Array.isArray(t.entry) ? t.entry : [ t.entry ];
          let y = d.getMergedTraits().xmlName ?? "key", b = f.getMergedTraits().xmlName ?? "value";
          for (let x of m) {
            let N = x[y], T = x[b];
            if (T != null || o) c[N] = this.readSchema(f, T);
          }
          return c;
        }
        if (r.isStructSchema()) {
          for (let [d, f] of r.structIterator()) {
            let m = f.getMergedTraits(), y = !m.httpPayload ? f.getMemberTraits().xmlName ?? d : m.xmlName ?? f.getName();
            if (t[y] != null) c[d] = this.readSchema(f, t[y]);
          }
          return c;
        }
        if (r.isDocumentSchema()) return t;
        throw Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${r.getName(!0)}`);
      }
      if (r.isListSchema()) return [];
      if (r.isMapSchema() || r.isStructSchema()) return {};
      return this.stringDeserializer.read(r, t);
    }
    parseXml(e) {
      if (e.length) {
        let t;
        try {
          t = re.parseXML(e);
        } catch (a) {
          if (a && typeof a === "object") Object.defineProperty(a, "$responseBodyText", {
            value: e
          });
          throw a;
        }
        let r = "#text", s = Object.keys(t)[0], o = t[s];
        if (o[r]) o[s] = o[r], delete o[r];
        return de.getValueFromTextNode(o);
      }
      return {};
    }
  }
  class Fs extends ge {
    settings;
    buffer;
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t, r = "") {
      if (this.buffer === void 0) this.buffer = "";
      let s = L.NormalizedSchema.of(e);
      if (r && !r.endsWith(".")) r += ".";
      if (s.isBlobSchema()) {
        if (typeof t === "string" || t instanceof Uint8Array) this.writeKey(r), this.writeValue((this.serdeContext?.base64Encoder ?? Fe.toBase64)(t));
      } else if (s.isBooleanSchema() || s.isNumericSchema() || s.isStringSchema()) {
        if (t != null) this.writeKey(r), this.writeValue(String(t)); else if (s.isIdempotencyToken()) this.writeKey(r), 
        this.writeValue(G.generateIdempotencyToken());
      } else if (s.isBigIntegerSchema()) {
        if (t != null) this.writeKey(r), this.writeValue(String(t));
      } else if (s.isBigDecimalSchema()) {
        if (t != null) this.writeKey(r), this.writeValue(t instanceof G.NumericValue ? t.string : String(t));
      } else if (s.isTimestampSchema()) {
        if (t instanceof Date) switch (this.writeKey(r), Q.determineTimestampFormat(s, this.settings)) {
         case 5:
          this.writeValue(t.toISOString().replace(".000Z", "Z"));
          break;

         case 6:
          this.writeValue(de.dateToUtcString(t));
          break;

         case 7:
          this.writeValue(String(t.getTime() / 1e3));
          break;
        }
      } else if (s.isDocumentSchema()) throw Error(`@aws-sdk/core/protocols - QuerySerializer unsupported document type ${s.getName(!0)}`); else if (s.isListSchema()) {
        if (Array.isArray(t)) if (t.length === 0) {
          if (this.settings.serializeEmptyLists) this.writeKey(r), this.writeValue("");
        } else {
          let o = s.getValueSchema(), a = this.settings.flattenLists || s.getMergedTraits().xmlFlattened, c = 1;
          for (let d of t) {
            if (d == null) continue;
            let f = this.getKey("member", o.getMergedTraits().xmlName), m = a ? `${r}${c}` : `${r}${f}.${c}`;
            this.write(o, d, m), ++c;
          }
        }
      } else if (s.isMapSchema()) {
        if (t && typeof t === "object") {
          let o = s.getKeySchema(), a = s.getValueSchema(), c = s.getMergedTraits().xmlFlattened, d = 1;
          for (let [f, m] of Object.entries(t)) {
            if (m == null) continue;
            let y = this.getKey("key", o.getMergedTraits().xmlName), b = c ? `${r}${d}.${y}` : `${r}entry.${d}.${y}`, x = this.getKey("value", a.getMergedTraits().xmlName), N = c ? `${r}${d}.${x}` : `${r}entry.${d}.${x}`;
            this.write(o, f, b), this.write(a, m, N), ++d;
          }
        }
      } else if (s.isStructSchema()) {
        if (t && typeof t === "object") for (let [o, a] of s.structIterator()) {
          if (t[o] == null && !a.isIdempotencyToken()) continue;
          let c = this.getKey(o, a.getMergedTraits().xmlName), d = `${r}${c}`;
          this.write(a, t[o], d);
        }
      } else if (s.isUnitSchema()) ; else throw Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${s.getName(!0)}`);
    }
    flush() {
      if (this.buffer === void 0) throw Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
      let e = this.buffer;
      return delete this.buffer, e;
    }
    getKey(e, t) {
      let r = t ?? e;
      if (this.settings.capitalizeKeys) return r[0].toUpperCase() + r.slice(1);
      return r;
    }
    writeKey(e) {
      if (e.endsWith(".")) e = e.slice(0, e.length - 1);
      this.buffer += `&${Q.extendedEncodeURIComponent(e)}=`;
    }
    writeValue(e) {
      this.buffer += Q.extendedEncodeURIComponent(e);
    }
  }
  class Jt extends Q.RpcProtocol {
    options;
    serializer;
    deserializer;
    mixin=new Oe;
    constructor(e) {
      super({
        defaultNamespace: e.defaultNamespace
      });
      this.options = e;
      let t = {
        timestampFormat: {
          useTrait: !0,
          default: 5
        },
        httpBindings: !1,
        xmlNamespace: e.xmlNamespace,
        serviceNamespace: e.defaultNamespace,
        serializeEmptyLists: !0
      };
      this.serializer = new Fs(t), this.deserializer = new nt(t);
    }
    getShapeId() {
      return "aws.protocols#awsQuery";
    }
    setSerdeContext(e) {
      this.serializer.setSerdeContext(e), this.deserializer.setSerdeContext(e);
    }
    getPayloadCodec() {
      throw Error("AWSQuery protocol has no payload codec.");
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (!s.path.endsWith("/")) s.path += "/";
      if (Object.assign(s.headers, {
        "content-type": "application/x-www-form-urlencoded"
      }), L.deref(e.input) === "unit" || !s.body) s.body = "";
      let o = e.name.split("#")[1] ?? e.name;
      if (s.body = `Action=${o}&Version=${this.options.version}` + s.body, s.body.endsWith("&")) s.body = s.body.slice(-1);
      return s;
    }
    async deserializeResponse(e, t, r) {
      let s = this.deserializer, o = L.NormalizedSchema.of(e.output), a = {};
      if (r.statusCode >= 300) {
        let y = await Q.collectBody(r.body, t);
        if (y.byteLength > 0) Object.assign(a, await s.read(15, y));
        await this.handleError(e, t, r, a, this.deserializeMetadata(r));
      }
      for (let y in r.headers) {
        let b = r.headers[y];
        delete r.headers[y], r.headers[y.toLowerCase()] = b;
      }
      let c = e.name.split("#")[1] ?? e.name, d = o.isStructSchema() && this.useNestedResult() ? c + "Result" : void 0, f = await Q.collectBody(r.body, t);
      if (f.byteLength > 0) Object.assign(a, await s.read(o, f, d));
      return {
        $metadata: this.deserializeMetadata(r),
        ...a
      };
    }
    useNestedResult() {
      return !0;
    }
    async handleError(e, t, r, s, o) {
      let a = this.loadQueryErrorCode(r, s) ?? "Unknown", c = this.loadQueryError(s), d = this.loadQueryErrorMessage(s);
      c.message = d, c.Error = {
        Type: c.Type,
        Code: c.Code,
        Message: d
      };
      let {errorSchema: f, errorMetadata: m} = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, c, o, (T, I) => {
        try {
          return T.getSchema(I);
        } catch (F) {
          return T.find(v => L.NormalizedSchema.of(v).getMergedTraits().awsQueryError?.[0] === I);
        }
      }), y = L.NormalizedSchema.of(f), x = new (L.TypeRegistry.for(f[1]).getErrorCtor(f) ?? Error)(d), N = {
        Error: c.Error
      };
      for (let [T, I] of y.structIterator()) {
        let F = I.getMergedTraits().xmlName ?? T, v = c[F] ?? s[F];
        N[T] = this.deserializer.readSchema(I, v);
      }
      throw this.mixin.decorateServiceException(Object.assign(x, m, {
        $fault: y.getMergedTraits().error,
        message: d
      }, N), s);
    }
    loadQueryErrorCode(e, t) {
      let r = (t.Errors?.[0]?.Error ?? t.Errors?.Error ?? t.Error)?.Code;
      if (r !== void 0) return r;
      if (e.statusCode == 404) return "NotFound";
    }
    loadQueryError(e) {
      return e.Errors?.[0]?.Error ?? e.Errors?.Error ?? e.Error;
    }
    loadQueryErrorMessage(e) {
      let t = this.loadQueryError(e);
      return t?.message ?? t?.Message ?? e.message ?? e.Message ?? "Unknown";
    }
    getDefaultContentType() {
      return "application/x-www-form-urlencoded";
    }
  }
  class js extends Jt {
    options;
    constructor(e) {
      super(e);
      this.options = e;
      let t = {
        capitalizeKeys: !0,
        flattenLists: !0,
        serializeEmptyLists: !1
      };
      Object.assign(this.serializer.settings, t);
    }
    useNestedResult() {
      return !1;
    }
  }
  var qs = (e, t) => $s(e, t).then(r => {
    if (r.length) {
      let s;
      try {
        s = re.parseXML(r);
      } catch (d) {
        if (d && typeof d === "object") Object.defineProperty(d, "$responseBodyText", {
          value: r
        });
        throw d;
      }
      let o = "#text", a = Object.keys(s)[0], c = s[a];
      if (c[o]) c[a] = c[o], delete c[o];
      return de.getValueFromTextNode(c);
    }
    return {};
  }), Ya = async (e, t) => {
    let r = await qs(e, t);
    if (r.Error) r.Error.message = r.Error.message ?? r.Error.Message;
    return r;
  }, Hs = (e, t) => {
    if (t?.Error?.Code !== void 0) return t.Error.Code;
    if (t?.Code !== void 0) return t.Code;
    if (e.statusCode == 404) return "NotFound";
  };
  class Zt extends ge {
    settings;
    stringBuffer;
    byteBuffer;
    buffer;
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t) {
      let r = L.NormalizedSchema.of(e);
      if (r.isStringSchema() && typeof t === "string") this.stringBuffer = t; else if (r.isBlobSchema()) this.byteBuffer = "byteLength" in t ? t : (this.serdeContext?.base64Decoder ?? Fe.fromBase64)(t); else {
        this.buffer = this.writeStruct(r, t, void 0);
        let s = r.getMergedTraits();
        if (s.httpPayload && !s.xmlName) this.buffer.withName(r.getName());
      }
    }
    flush() {
      if (this.byteBuffer !== void 0) {
        let t = this.byteBuffer;
        return delete this.byteBuffer, t;
      }
      if (this.stringBuffer !== void 0) {
        let t = this.stringBuffer;
        return delete this.stringBuffer, t;
      }
      let e = this.buffer;
      if (this.settings.xmlNamespace) {
        if (!e?.attributes?.xmlns) e.addAttribute("xmlns", this.settings.xmlNamespace);
      }
      return delete this.buffer, e.toString();
    }
    writeStruct(e, t, r) {
      let s = e.getMergedTraits(), o = e.isMemberSchema() && !s.httpPayload ? e.getMemberTraits().xmlName ?? e.getMemberName() : s.xmlName ?? e.getName();
      if (!o || !e.isStructSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${e.getName(!0)}.`);
      let a = re.XmlNode.of(o), [c, d] = this.getXmlnsAttribute(e, r);
      for (let [f, m] of e.structIterator()) {
        let y = t[f];
        if (y != null || m.isIdempotencyToken()) {
          if (m.getMergedTraits().xmlAttribute) {
            a.addAttribute(m.getMergedTraits().xmlName ?? f, this.writeSimple(m, y));
            continue;
          }
          if (m.isListSchema()) this.writeList(m, y, a, d); else if (m.isMapSchema()) this.writeMap(m, y, a, d); else if (m.isStructSchema()) a.addChildNode(this.writeStruct(m, y, d)); else {
            let b = re.XmlNode.of(m.getMergedTraits().xmlName ?? m.getMemberName());
            this.writeSimpleInto(m, y, b, d), a.addChildNode(b);
          }
        }
      }
      if (d) a.addAttribute(c, d);
      return a;
    }
    writeList(e, t, r, s) {
      if (!e.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${e.getName(!0)}`);
      let o = e.getMergedTraits(), a = e.getValueSchema(), c = a.getMergedTraits(), d = !!c.sparse, f = !!o.xmlFlattened, [m, y] = this.getXmlnsAttribute(e, s), b = (x, N) => {
        if (a.isListSchema()) this.writeList(a, Array.isArray(N) ? N : [ N ], x, y); else if (a.isMapSchema()) this.writeMap(a, N, x, y); else if (a.isStructSchema()) {
          let T = this.writeStruct(a, N, y);
          x.addChildNode(T.withName(f ? o.xmlName ?? e.getMemberName() : c.xmlName ?? "member"));
        } else {
          let T = re.XmlNode.of(f ? o.xmlName ?? e.getMemberName() : c.xmlName ?? "member");
          this.writeSimpleInto(a, N, T, y), x.addChildNode(T);
        }
      };
      if (f) {
        for (let x of t) if (d || x != null) b(r, x);
      } else {
        let x = re.XmlNode.of(o.xmlName ?? e.getMemberName());
        if (y) x.addAttribute(m, y);
        for (let N of t) if (d || N != null) b(x, N);
        r.addChildNode(x);
      }
    }
    writeMap(e, t, r, s, o = !1) {
      if (!e.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${e.getName(!0)}`);
      let a = e.getMergedTraits(), c = e.getKeySchema(), f = c.getMergedTraits().xmlName ?? "key", m = e.getValueSchema(), y = m.getMergedTraits(), b = y.xmlName ?? "value", x = !!y.sparse, N = !!a.xmlFlattened, [T, I] = this.getXmlnsAttribute(e, s), F = (v, W, M) => {
        let ee = re.XmlNode.of(f, W), [ke, q] = this.getXmlnsAttribute(c, I);
        if (q) ee.addAttribute(ke, q);
        v.addChildNode(ee);
        let K = re.XmlNode.of(b);
        if (m.isListSchema()) this.writeList(m, M, K, I); else if (m.isMapSchema()) this.writeMap(m, M, K, I, !0); else if (m.isStructSchema()) K = this.writeStruct(m, M, I); else this.writeSimpleInto(m, M, K, I);
        v.addChildNode(K);
      };
      if (N) {
        for (let [v, W] of Object.entries(t)) if (x || W != null) {
          let M = re.XmlNode.of(a.xmlName ?? e.getMemberName());
          F(M, v, W), r.addChildNode(M);
        }
      } else {
        let v;
        if (!o) {
          if (v = re.XmlNode.of(a.xmlName ?? e.getMemberName()), I) v.addAttribute(T, I);
          r.addChildNode(v);
        }
        for (let [W, M] of Object.entries(t)) if (x || M != null) {
          let ee = re.XmlNode.of("entry");
          F(ee, W, M), (o ? r : v).addChildNode(ee);
        }
      }
    }
    writeSimple(e, t) {
      if (t === null) throw Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
      let r = L.NormalizedSchema.of(e), s = null;
      if (t && typeof t === "object") if (r.isBlobSchema()) s = (this.serdeContext?.base64Encoder ?? Fe.toBase64)(t); else if (r.isTimestampSchema() && t instanceof Date) switch (Q.determineTimestampFormat(r, this.settings)) {
       case 5:
        s = t.toISOString().replace(".000Z", "Z");
        break;

       case 6:
        s = de.dateToUtcString(t);
        break;

       case 7:
        s = String(t.getTime() / 1e3);
        break;

       default:
        console.warn("Missing timestamp format, using http date", t), s = de.dateToUtcString(t);
        break;
      } else if (r.isBigDecimalSchema() && t) {
        if (t instanceof G.NumericValue) return t.string;
        return String(t);
      } else if (r.isMapSchema() || r.isListSchema()) throw Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead."); else throw Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${r.getName(!0)}`);
      if (r.isBooleanSchema() || r.isNumericSchema() || r.isBigIntegerSchema() || r.isBigDecimalSchema()) s = String(t);
      if (r.isStringSchema()) if (t === void 0 && r.isIdempotencyToken()) s = G.generateIdempotencyToken(); else s = String(t);
      if (s === null) throw Error(`Unhandled schema-value pair ${r.getName(!0)}=${t}`);
      return s;
    }
    writeSimpleInto(e, t, r, s) {
      let o = this.writeSimple(e, t), a = L.NormalizedSchema.of(e), c = new re.XmlText(o), [d, f] = this.getXmlnsAttribute(a, s);
      if (f) r.addAttribute(d, f);
      r.addChildNode(c);
    }
    getXmlnsAttribute(e, t) {
      let r = e.getMergedTraits(), [s, o] = r.xmlNamespace ?? [];
      if (o && o !== t) return [ s ? `xmlns:${s}` : "xmlns", o ];
      return [ void 0, void 0 ];
    }
  }
  class er extends ge {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    createSerializer() {
      let e = new Zt(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
      let e = new nt(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
  }
  class Gs extends Q.HttpBindingProtocol {
    codec;
    serializer;
    deserializer;
    mixin=new Oe;
    constructor(e) {
      super(e);
      let t = {
        timestampFormat: {
          useTrait: !0,
          default: 5
        },
        httpBindings: !0,
        xmlNamespace: e.xmlNamespace,
        serviceNamespace: e.defaultNamespace
      };
      this.codec = new er(t), this.serializer = new Q.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t), 
      this.deserializer = new Q.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
    }
    getPayloadCodec() {
      return this.codec;
    }
    getShapeId() {
      return "aws.protocols#restXml";
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r), o = L.NormalizedSchema.of(e.input);
      if (!s.headers["content-type"]) {
        let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
        if (a) s.headers["content-type"] = a;
      }
      if (s.headers["content-type"] === this.getDefaultContentType()) {
        if (typeof s.body === "string") s.body = '<?xml version="1.0" encoding="UTF-8"?>' + s.body;
      }
      return s;
    }
    async deserializeResponse(e, t, r) {
      return super.deserializeResponse(e, t, r);
    }
    async handleError(e, t, r, s, o) {
      let a = Hs(r, s) ?? "Unknown", {errorSchema: c, errorMetadata: d} = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = L.NormalizedSchema.of(c), m = s.Error?.message ?? s.Error?.Message ?? s.message ?? s.Message ?? "Unknown", b = new (L.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m);
      await this.deserializeHttpMessage(c, t, r, s);
      let x = {};
      for (let [N, T] of f.structIterator()) {
        let I = T.getMergedTraits().xmlName ?? N, F = s.Error?.[I] ?? s[I];
        x[N] = this.codec.createDeserializer().readSchema(T, F);
      }
      throw this.mixin.decorateServiceException(Object.assign(b, d, {
        $fault: f.getMergedTraits().error,
        message: m
      }, x), s);
    }
    getDefaultContentType() {
      return "application/xml";
    }
  }
  Ja.AWSSDKSigV4Signer = Ba;
  Ja.AwsEc2QueryProtocol = js;
  Ja.AwsJson1_0Protocol = Ls;
  Ja.AwsJson1_1Protocol = Us;
  Ja.AwsJsonRpcProtocol = st;
  Ja.AwsQueryProtocol = Jt;
  Ja.AwsRestJsonProtocol = Vs;
  Ja.AwsRestXmlProtocol = Gs;
  Ja.AwsSdkSigV4ASigner = Ps;
  Ja.AwsSdkSigV4Signer = tt;
  Ja.AwsSmithyRpcV2CborProtocol = zs;
  Ja.JsonCodec = rt;
  Ja.JsonShapeDeserializer = Qt;
  Ja.JsonShapeSerializer = Yt;
  Ja.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = La;
  Ja.NODE_SIGV4A_CONFIG_OPTIONS = Va;
  Ja.XmlCodec = er;
  Ja.XmlShapeDeserializer = nt;
  Ja.XmlShapeSerializer = Zt;
  Ja._toBool = Ga;
  Ja._toNum = Xa;
  Ja._toStr = Ha;
  Ja.awsExpectUnion = Qa;
  Ja.emitWarningIfUnsupportedVersion = Pa;
  Ja.getBearerTokenEnvKey = ks;
  Ja.loadRestJsonErrorCode = Kt;
  Ja.loadRestXmlErrorCode = Hs;
  Ja.parseJsonBody = Wt;
  Ja.parseJsonErrorBody = Ka;
  Ja.parseXmlBody = qs;
  Ja.parseXmlErrorBody = Ya;
  Ja.resolveAWSSDKSigV4Config = Fa;
  Ja.resolveAwsSdkSigV4AConfig = Ua;
  Ja.resolveAwsSdkSigV4Config = vs;
  Ja.setCredentialFeature = ka;
  Ja.setFeature = va;
  Ja.setTokenFeature = za;
  Ja.state = qt;
  Ja.validateSigningProperties = Xt;
});

var fZ = C(function(Yc) {
  var Lc = rS(), Uc = pZ(), Vc = og(), ie = XT(), Qs = void 0;
  function Fc(e) {
    if (e === void 0) return !0;
    return typeof e === "string" && e.length <= 50;
  }
  function jc(e) {
    let t = Lc.normalizeProvider(e.userAgentAppId ?? Qs), {customUserAgent: r} = e;
    return Object.assign(e, {
      customUserAgent: typeof r === "string" ? [ [ r ] ] : r,
      userAgentAppId: async () => {
        let s = await t();
        if (!Fc(s)) {
          let o = e.logger?.constructor?.name === "NoOpLogger" || !e.logger ? console : e.logger;
          if (typeof s !== "string") o?.warn("userAgentAppId must be a string or undefined."); else if (s.length > 50) o?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
        return s;
      }
    });
  }
  var qc = /\d{12}\.ddb/;
  async function Hc(e, t, r) {
    if (r.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") ie.setFeature(e, "PROTOCOL_RPC_V2_CBOR", "M");
    if (typeof t.retryStrategy === "function") {
      let a = await t.retryStrategy();
      if (typeof a.acquireInitialRetryToken === "function") if (a.constructor?.name?.includes("Adaptive")) ie.setFeature(e, "RETRY_MODE_ADAPTIVE", "F"); else ie.setFeature(e, "RETRY_MODE_STANDARD", "E"); else ie.setFeature(e, "RETRY_MODE_LEGACY", "D");
    }
    if (typeof t.accountIdEndpointMode === "function") {
      let a = e.endpointV2;
      if (String(a?.url?.hostname).match(qc)) ie.setFeature(e, "ACCOUNT_ID_ENDPOINT", "O");
      switch (await (t.accountIdEndpointMode?.())) {
       case "disabled":
        ie.setFeature(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;

       case "preferred":
        ie.setFeature(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;

       case "required":
        ie.setFeature(e, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
      }
    }
    let o = e.__smithy_context?.selectedHttpAuthScheme?.identity;
    if (o?.$source) {
      let a = o;
      if (a.accountId) ie.setFeature(e, "RESOLVED_ACCOUNT_ID", "T");
      for (let [c, d] of Object.entries(a.$source ?? {})) ie.setFeature(e, c, d);
    }
  }
  var Xs = "user-agent", tr = "x-amz-user-agent", Ws = " ", rr = "/", Gc = /[^!$%&'*+\-.^_`|~\w]/g, Xc = /[^!$%&'*+\-.^_`|~\w#]/g, Ks = "-", Wc = 1024;
  function Kc(e) {
    let t = "";
    for (let r in e) {
      let s = e[r];
      if (t.length + s.length + 1 <= Wc) {
        if (t.length) t += "," + s; else t += s;
        continue;
      }
      break;
    }
    return t;
  }
  var Ys = e => (t, r) => async s => {
    let {request: o} = s;
    if (!Vc.HttpRequest.isInstance(o)) return t(s);
    let {headers: a} = o, c = r?.userAgent?.map(it) || [], d = (await e.defaultUserAgentProvider()).map(it);
    await Hc(r, e, s);
    let f = r;
    d.push(`m/${Kc(Object.assign({}, r.__smithy_context?.features, f.__aws_sdk_context?.features))}`);
    let m = e?.customUserAgent?.map(it) || [], y = await e.userAgentAppId();
    if (y) d.push(it([ "app", `${y}` ]));
    let b = Uc.getUserAgentPrefix(), x = (b ? [ b ] : []).concat([ ...d, ...c, ...m ]).join(Ws), N = [ ...d.filter(T => T.startsWith("aws-sdk-")), ...m ].join(Ws);
    if (e.runtime !== "browser") {
      if (N) a[tr] = a[tr] ? `${a[Xs]} ${N}` : N;
      a[Xs] = x;
    } else a[tr] = x;
    return t({
      ...s,
      request: o
    });
  }, it = e => {
    let t = e[0].split(rr).map(c => c.replace(Gc, Ks)).join(rr), r = e[1]?.replace(Xc, Ks), s = t.indexOf(rr), o = t.substring(0, s), a = t.substring(s + 1);
    if (o === "api") a = a.toLowerCase();
    return [ o, a, r ].filter(c => c && c.length > 0).reduce((c, d, f) => {
      switch (f) {
       case 0:
        return d;

       case 1:
        return `${c}/${d}`;

       default:
        return `${c}#${d}`;
      }
    }, "");
  }, Js = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: [ "SET_USER_AGENT", "USER_AGENT" ],
    override: !0
  }, Qc = e => ({
    applyToStack: t => {
      t.add(Ys(e), Js);
    }
  });
  Yc.DEFAULT_UA_APP_ID = Qs;
  Yc.getUserAgentMiddlewareOptions = Js;
  Yc.getUserAgentPlugin = Qc;
  Yc.resolveUserAgentConfig = jc;
  Yc.userAgentMiddleware = Ys;
});

var $se = C(function(iu) {
  var su = og(), Zs = "content-length";
  function en(e) {
    return t => async r => {
      let s = r.request;
      if (su.HttpRequest.isInstance(s)) {
        let {body: o, headers: a} = s;
        if (o && Object.keys(a).map(c => c.toLowerCase()).indexOf(Zs) === -1) try {
          let c = e(o);
          s.headers = {
            ...s.headers,
            [Zs]: String(c)
          };
        } catch (c) {}
      }
      return t({
        ...r,
        request: s
      });
    };
  }
  var tn = {
    step: "build",
    tags: [ "SET_CONTENT_LENGTH", "CONTENT_LENGTH" ],
    name: "contentLengthMiddleware",
    override: !0
  }, nu = e => ({
    applyToStack: t => {
      t.add(en(e.bodyLengthChecker), tn);
    }
  });
  iu.contentLengthMiddleware = en;
  iu.contentLengthMiddlewareOptions = tn;
  iu.getContentLengthPlugin = nu;
});

var an = C(function(nn) {
  Object.defineProperty(nn, "__esModule", {
    value: !0
  });
  nn.getEndpointUrlConfig = void 0;
  var ot = L0(), rn = "AWS_ENDPOINT_URL", sn = "endpoint_url", uu = e => ({
    environmentVariableSelector: t => {
      let r = e.split(" ").map(a => a.toUpperCase()), s = t[[ rn, ...r ].join("_")];
      if (s) return s;
      let o = t[rn];
      if (o) return o;
      return;
    },
    configFileSelector: (t, r) => {
      if (r && t.services) {
        let o = r[[ "services", t.services ].join(ot.CONFIG_PREFIX_SEPARATOR)];
        if (o) {
          let a = e.split(" ").map(d => d.toLowerCase()), c = o[[ a.join("_"), sn ].join(ot.CONFIG_PREFIX_SEPARATOR)];
          if (c) return c;
        }
      }
      let s = t[sn];
      if (s) return s;
      return;
    },
    default: void 0
  });
  nn.getEndpointUrlConfig = uu;
});

var hn = C(function(ln) {
  Object.defineProperty(ln, "__esModule", {
    value: !0
  });
  ln.getEndpointFromConfig = void 0;
  var cn = OP(), un = an(), lu = async e => cn.loadConfig(un.getEndpointUrlConfig(e ?? ""))();
  ln.getEndpointFromConfig = lu;
});

var $1 = C(function(Nu) {
  var pn = hn(), fn = Iz(), du = rS(), at = DP(), hu = _wo(), fu = async e => {
    let t = e?.Bucket || "";
    if (typeof e.Bucket === "string") e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    if (Eu(t)) {
      if (e.ForcePathStyle === !0) throw Error("Path-style addressing cannot be used with ARN buckets");
    } else if (!yu(t) || t.indexOf(".") !== -1 && !String(e.Endpoint).startsWith("http:") || t.toLowerCase() !== t || t.length < 3) e.ForcePathStyle = !0;
    if (e.DisableMultiRegionAccessPoints) e.disableMultiRegionAccessPoints = !0, e.DisableMRAP = !0;
    return e;
  }, pu = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/, mu = /(\d+\.){3}\d+/, gu = /\.\./, yu = e => pu.test(e) && !mu.test(e) && !gu.test(e), Eu = e => {
    let [t, r, s, , , o] = e.split(":"), a = t === "arn" && e.split(":").length >= 6, c = Boolean(a && r && s && o);
    if (a && !c) throw Error(`Invalid ARN: ${e} was an invalid ARN.`);
    return c;
  }, Su = (e, t, r) => {
    let s = async () => {
      let o = r[e] ?? r[t];
      if (typeof o === "function") return o();
      return o;
    };
    if (e === "credentialScope" || t === "CredentialScope") return async () => {
      let o = typeof r.credentials === "function" ? await r.credentials() : r.credentials;
      return o?.credentialScope ?? o?.CredentialScope;
    };
    if (e === "accountId" || t === "AccountId") return async () => {
      let o = typeof r.credentials === "function" ? await r.credentials() : r.credentials;
      return o?.accountId ?? o?.AccountId;
    };
    if (e === "endpoint" || t === "endpoint") return async () => {
      if (r.isCustomEndpoint === !1) return;
      let o = await s();
      if (o && typeof o === "object") {
        if ("url" in o) return o.url.href;
        if ("hostname" in o) {
          let {protocol: a, hostname: c, port: d, path: f} = o;
          return `${a}//${c}${d ? ":" + d : ""}${f}`;
        }
      }
      return o;
    };
    return s;
  }, sr = e => {
    if (typeof e === "object") {
      if ("url" in e) return fn.parseUrl(e.url);
      return e;
    }
    return fn.parseUrl(e);
  }, mn = async (e, t, r, s) => {
    if (!r.isCustomEndpoint) {
      let c;
      if (r.serviceConfiguredEndpoint) c = await r.serviceConfiguredEndpoint(); else c = await pn.getEndpointFromConfig(r.serviceId);
      if (c) r.endpoint = () => Promise.resolve(sr(c)), r.isCustomEndpoint = !0;
    }
    let o = await gn(e, t, r);
    if (typeof r.endpointProvider !== "function") throw Error("config.endpointProvider is not set.");
    return r.endpointProvider(o, s);
  }, gn = async (e, t, r) => {
    let s = {}, o = t?.getEndpointParameterInstructions?.() || {};
    for (let [a, c] of Object.entries(o)) switch (c.type) {
     case "staticContextParams":
      s[a] = c.value;
      break;

     case "contextParams":
      s[a] = e[c.name];
      break;

     case "clientContextParams":
     case "builtInParams":
      s[a] = await Su(c.name, a, r)();
      break;

     case "operationContextParams":
      s[a] = c.get(e);
      break;

     default:
      throw Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(c));
    }
    if (Object.keys(o).length === 0) Object.assign(s, r);
    if (String(r.serviceId).toLowerCase() === "s3") await fu(s);
    return s;
  }, yn = ({config: e, instructions: t}) => (r, s) => async o => {
    if (e.isCustomEndpoint) du.setFeature(s, "ENDPOINT_OVERRIDE", "N");
    let a = await mn(o.input, {
      getEndpointParameterInstructions() {
        return t;
      }
    }, {
      ...e
    }, s);
    s.endpointV2 = a, s.authSchemes = a.properties?.authSchemes;
    let c = s.authSchemes?.[0];
    if (c) {
      s.signing_region = c.signingRegion, s.signing_service = c.signingName;
      let f = at.getSmithyContext(s)?.selectedHttpAuthScheme?.httpAuthOption;
      if (f) f.signingProperties = Object.assign(f.signingProperties || {}, {
        signing_region: c.signingRegion,
        signingRegion: c.signingRegion,
        signing_service: c.signingName,
        signingName: c.signingName,
        signingRegionSet: c.signingRegionSet
      }, c.properties);
    }
    return r({
      ...o
    });
  }, En = {
    step: "serialize",
    tags: [ "ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT" ],
    name: "endpointV2Middleware",
    override: !0,
    relation: "before",
    toMiddleware: hu.serializerMiddlewareOption.name
  }, wu = (e, t) => ({
    applyToStack: r => {
      r.addRelativeTo(yn({
        config: e,
        instructions: t
      }), En);
    }
  }), xu = e => {
    let t = e.tls ?? !0, {endpoint: r, useDualstackEndpoint: s, useFipsEndpoint: o} = e, a = r != null ? async () => sr(await at.normalizeProvider(r)()) : void 0, d = Object.assign(e, {
      endpoint: a,
      tls: t,
      isCustomEndpoint: !!r,
      useDualstackEndpoint: at.normalizeProvider(s ?? !1),
      useFipsEndpoint: at.normalizeProvider(o ?? !1)
    }), f = void 0;
    return d.serviceConfiguredEndpoint = async () => {
      if (e.serviceId && !f) f = pn.getEndpointFromConfig(e.serviceId);
      return f;
    }, d;
  }, bu = e => {
    let {endpoint: t} = e;
    if (t === void 0) e.endpoint = async () => {
      throw Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.");
    };
    return e;
  };
  Nu.endpointMiddleware = yn;
  Nu.endpointMiddlewareOptions = En;
  Nu.getEndpointFromInstructions = mn;
  Nu.getEndpointPlugin = wu;
  Nu.resolveEndpointConfig = xu;
  Nu.resolveEndpointRequiredConfig = bu;
  Nu.resolveParams = gn;
  Nu.toEndpointV1 = sr;
});

var ir = C(function(Vu) {
  var Du = [ "AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch" ], Pu = [ "BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException" ], ku = [ "TimeoutError", "RequestTimeout", "RequestTimeoutException" ], vu = [ 500, 502, 503, 504 ], zu = [ "ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT" ], $u = [ "EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND" ], Sn = e => e?.$retryable !== void 0, Bu = e => Du.includes(e.name), wn = e => e.$metadata?.clockSkewCorrected, xn = e => {
    let t = new Set([ "Failed to fetch", "NetworkError when attempting to fetch resource", "The Internet connection appears to be offline", "Load failed", "Network request failed" ]);
    if (!(e && e instanceof TypeError)) return !1;
    return t.has(e.message);
  }, Lu = e => e.$metadata?.httpStatusCode === 429 || Pu.includes(e.name) || e.$retryable?.throttling == !0, nr = (e, t = 0) => Sn(e) || wn(e) || ku.includes(e.name) || zu.includes(e?.code || "") || $u.includes(e?.code || "") || vu.includes(e.$metadata?.httpStatusCode || 0) || xn(e) || e.cause !== void 0 && t <= 10 && nr(e.cause, t + 1), Uu = e => {
    if (e.$metadata?.httpStatusCode !== void 0) {
      let t = e.$metadata.httpStatusCode;
      if (500 <= t && t <= 599 && !nr(e)) return !0;
      return !1;
    }
    return !1;
  };
  Vu.isBrowserNetworkError = xn;
  Vu.isClockSkewCorrectedError = wn;
  Vu.isClockSkewError = Bu;
  Vu.isRetryableByTrait = Sn;
  Vu.isServerError = Uu;
  Vu.isThrottlingError = Lu;
  Vu.isTransientError = nr;
});

var mZ = C(function(el) {
  var Ku = ir();
  el.RETRY_MODES = void 0;
  (function(e) {
    e.STANDARD = "standard", e.ADAPTIVE = "adaptive";
  })(el.RETRY_MODES || (el.RETRY_MODES = {}));
  var or = 3, Qu = el.RETRY_MODES.STANDARD;
  class ct {
    static setTimeoutFn=setTimeout;
    beta;
    minCapacity;
    minFillRate;
    scaleConstant;
    smooth;
    currentCapacity=0;
    enabled=!1;
    lastMaxRate=0;
    measuredTxRate=0;
    requestCount=0;
    fillRate;
    lastThrottleTime;
    lastTimestamp=0;
    lastTxRateBucket;
    maxCapacity;
    timeWindow=0;
    constructor(e) {
      this.beta = e?.beta ?? .7, this.minCapacity = e?.minCapacity ?? 1, this.minFillRate = e?.minFillRate ?? .5, 
      this.scaleConstant = e?.scaleConstant ?? .4, this.smooth = e?.smooth ?? .8;
      let t = this.getCurrentTimeInSeconds();
      this.lastThrottleTime = t, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), 
      this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
      return Date.now() / 1e3;
    }
    async getSendToken() {
      return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(e) {
      if (!this.enabled) return;
      if (this.refillTokenBucket(), e > this.currentCapacity) {
        let t = (e - this.currentCapacity) / this.fillRate * 1e3;
        await new Promise(r => ct.setTimeoutFn(r, t));
      }
      this.currentCapacity = this.currentCapacity - e;
    }
    refillTokenBucket() {
      let e = this.getCurrentTimeInSeconds();
      if (!this.lastTimestamp) {
        this.lastTimestamp = e;
        return;
      }
      let t = (e - this.lastTimestamp) * this.fillRate;
      this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + t), this.lastTimestamp = e;
    }
    updateClientSendingRate(e) {
      let t;
      if (this.updateMeasuredRate(), Ku.isThrottlingError(e)) {
        let s = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
        this.lastMaxRate = s, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), 
        t = this.cubicThrottle(s), this.enableTokenBucket();
      } else this.calculateTimeWindow(), t = this.cubicSuccess(this.getCurrentTimeInSeconds());
      let r = Math.min(t, 2 * this.measuredTxRate);
      this.updateTokenBucketRate(r);
    }
    calculateTimeWindow() {
      this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, .3333333333333333));
    }
    cubicThrottle(e) {
      return this.getPrecise(e * this.beta);
    }
    cubicSuccess(e) {
      return this.getPrecise(this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
      this.enabled = !0;
    }
    updateTokenBucketRate(e) {
      this.refillTokenBucket(), this.fillRate = Math.max(e, this.minFillRate), this.maxCapacity = Math.max(e, this.minCapacity), 
      this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
      let e = this.getCurrentTimeInSeconds(), t = Math.floor(e * 2) / 2;
      if (this.requestCount++, t > this.lastTxRateBucket) {
        let r = this.requestCount / (t - this.lastTxRateBucket);
        this.measuredTxRate = this.getPrecise(r * this.smooth + this.measuredTxRate * (1 - this.smooth)), 
        this.requestCount = 0, this.lastTxRateBucket = t;
      }
    }
    getPrecise(e) {
      return parseFloat(e.toFixed(8));
    }
  }
  var je = 100, cr = 2e4, Nn = 500, ar = 500, Tn = 5, _n = 10, Cn = 1, Yu = "amz-sdk-invocation-id", Ju = "amz-sdk-request", Zu = () => {
    let e = je;
    return {
      computeNextBackoffDelay: s => Math.floor(Math.min(cr, Math.random() * 2 ** s * e)),
      setDelayBase: s => {
        e = s;
      }
    };
  }, bn = ({retryDelay: e, retryCount: t, retryCost: r}) => ({
    getRetryCount: () => t,
    getRetryDelay: () => Math.min(cr, e),
    getRetryCost: () => r
  });
  class ut {
    maxAttempts;
    mode=el.RETRY_MODES.STANDARD;
    capacity=ar;
    retryBackoffStrategy=Zu();
    maxAttemptsProvider;
    constructor(e) {
      this.maxAttempts = e, this.maxAttemptsProvider = typeof e === "function" ? e : async () => e;
    }
    async acquireInitialRetryToken(e) {
      return bn({
        retryDelay: je,
        retryCount: 0
      });
    }
    async refreshRetryTokenForRetry(e, t) {
      let r = await this.getMaxAttempts();
      if (this.shouldRetry(e, t, r)) {
        let s = t.errorType;
        this.retryBackoffStrategy.setDelayBase(s === "THROTTLING" ? Nn : je);
        let o = this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount()), a = t.retryAfterHint ? Math.max(t.retryAfterHint.getTime() - Date.now() || 0, o) : o, c = this.getCapacityCost(s);
        return this.capacity -= c, bn({
          retryDelay: a,
          retryCount: e.getRetryCount() + 1,
          retryCost: c
        });
      }
      throw Error("No retry token available");
    }
    recordSuccess(e) {
      this.capacity = Math.max(ar, this.capacity + (e.getRetryCost() ?? Cn));
    }
    getCapacity() {
      return this.capacity;
    }
    async getMaxAttempts() {
      try {
        return await this.maxAttemptsProvider();
      } catch (e) {
        return console.warn(`Max attempts provider could not resolve. Using default of ${or}`), 
        or;
      }
    }
    shouldRetry(e, t, r) {
      return e.getRetryCount() + 1 < r && this.capacity >= this.getCapacityCost(t.errorType) && this.isRetryableError(t.errorType);
    }
    getCapacityCost(e) {
      return e === "TRANSIENT" ? _n : Tn;
    }
    isRetryableError(e) {
      return e === "THROTTLING" || e === "TRANSIENT";
    }
  }
  class An {
    maxAttemptsProvider;
    rateLimiter;
    standardRetryStrategy;
    mode=el.RETRY_MODES.ADAPTIVE;
    constructor(e, t) {
      this.maxAttemptsProvider = e;
      let {rateLimiter: r} = t ?? {};
      this.rateLimiter = r ?? new ct, this.standardRetryStrategy = new ut(e);
    }
    async acquireInitialRetryToken(e) {
      return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(e);
    }
    async refreshRetryTokenForRetry(e, t) {
      return this.rateLimiter.updateClientSendingRate(t), this.standardRetryStrategy.refreshRetryTokenForRetry(e, t);
    }
    recordSuccess(e) {
      this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e);
    }
  }
  class Rn extends ut {
    computeNextBackoffDelay;
    constructor(e, t = je) {
      super(typeof e === "function" ? e : async () => e);
      if (typeof t === "number") this.computeNextBackoffDelay = () => t; else this.computeNextBackoffDelay = t;
    }
    async refreshRetryTokenForRetry(e, t) {
      let r = await super.refreshRetryTokenForRetry(e, t);
      return r.getRetryDelay = () => this.computeNextBackoffDelay(r.getRetryCount()), 
      r;
    }
  }
  el.AdaptiveRetryStrategy = An;
  el.ConfiguredRetryStrategy = Rn;
  el.DEFAULT_MAX_ATTEMPTS = or;
  el.DEFAULT_RETRY_DELAY_BASE = je;
  el.DEFAULT_RETRY_MODE = Qu;
  el.DefaultRateLimiter = ct;
  el.INITIAL_RETRY_TOKENS = ar;
  el.INVOCATION_ID_HEADER = Yu;
  el.MAXIMUM_RETRY_DELAY = cr;
  el.NO_RETRY_INCREMENT = Cn;
  el.REQUEST_HEADER = Ju;
  el.RETRY_COST = Tn;
  el.StandardRetryStrategy = ut;
  el.THROTTLING_RETRY_DELAY_BASE = Nn;
  el.TIMEOUT_RETRY_COST = _n;
});

var Dn = C(function(On) {
  Object.defineProperty(On, "__esModule", {
    value: !0
  });
  On.isStreamingPayload = void 0;
  var In = Ne("stream"), gl = e => e?.body instanceof In.Readable || typeof ReadableStream < "u" && e?.body instanceof ReadableStream;
  On.isStreamingPayload = gl;
});

var YF = C(function(Il) {
  var j = mZ(), De = og(), ye = ir(), kn = Swo(), Pn = DP(), yl = Nc(), El = Dn(), Sl = (e, t) => {
    let r = e, {NO_RETRY_INCREMENT: s, RETRY_COST: o, TIMEOUT_RETRY_COST: a} = j, c = e, d = b => b.name === "TimeoutError" ? a : o, f = b => d(b) <= c;
    return Object.freeze({
      hasRetryTokens: f,
      retrieveRetryTokens: b => {
        if (!f(b)) throw Error("No retry token available");
        let x = d(b);
        return c -= x, x;
      },
      releaseRetryTokens: b => {
        c += b ?? s, c = Math.min(c, r);
      }
    });
  }, vn = (e, t) => Math.floor(Math.min(j.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** t * e)), zn = e => {
    if (!e) return !1;
    return ye.isRetryableByTrait(e) || ye.isClockSkewError(e) || ye.isThrottlingError(e) || ye.isTransientError(e);
  }, $n = e => {
    if (e instanceof Error) return e;
    if (e instanceof Object) return Object.assign(Error(), e);
    if (typeof e === "string") return Error(e);
    return Error(`AWS SDK error wrapper for ${e}`);
  };
  class dr {
    maxAttemptsProvider;
    retryDecider;
    delayDecider;
    retryQuota;
    mode=j.RETRY_MODES.STANDARD;
    constructor(e, t) {
      this.maxAttemptsProvider = e, this.retryDecider = t?.retryDecider ?? zn, this.delayDecider = t?.delayDecider ?? vn, 
      this.retryQuota = t?.retryQuota ?? Sl(j.INITIAL_RETRY_TOKENS);
    }
    shouldRetry(e, t, r) {
      return t < r && this.retryDecider(e) && this.retryQuota.hasRetryTokens(e);
    }
    async getMaxAttempts() {
      let e;
      try {
        e = await this.maxAttemptsProvider();
      } catch (t) {
        e = j.DEFAULT_MAX_ATTEMPTS;
      }
      return e;
    }
    async retry(e, t, r) {
      let s, o = 0, a = 0, c = await this.getMaxAttempts(), {request: d} = t;
      if (De.HttpRequest.isInstance(d)) d.headers[j.INVOCATION_ID_HEADER] = kn.v4();
      while (!0) try {
        if (De.HttpRequest.isInstance(d)) d.headers[j.REQUEST_HEADER] = `attempt=${o + 1}; max=${c}`;
        if (r?.beforeRequest) await r.beforeRequest();
        let {response: f, output: m} = await e(t);
        if (r?.afterRequest) r.afterRequest(f);
        return this.retryQuota.releaseRetryTokens(s), m.$metadata.attempts = o + 1, m.$metadata.totalRetryDelay = a, 
        {
          response: f,
          output: m
        };
      } catch (f) {
        let m = $n(f);
        if (o++, this.shouldRetry(m, o, c)) {
          s = this.retryQuota.retrieveRetryTokens(m);
          let y = this.delayDecider(ye.isThrottlingError(m) ? j.THROTTLING_RETRY_DELAY_BASE : j.DEFAULT_RETRY_DELAY_BASE, o), b = wl(m.$response), x = Math.max(b || 0, y);
          a += x, await new Promise(N => setTimeout(N, x));
          continue;
        }
        if (!m.$metadata) m.$metadata = {};
        throw m.$metadata.attempts = o, m.$metadata.totalRetryDelay = a, m;
      }
    }
  }
  var wl = e => {
    if (!De.HttpResponse.isInstance(e)) return;
    let t = Object.keys(e.headers).find(a => a.toLowerCase() === "retry-after");
    if (!t) return;
    let r = e.headers[t], s = Number(r);
    if (!Number.isNaN(s)) return s * 1e3;
    return new Date(r).getTime() - Date.now();
  };
  class Bn extends dr {
    rateLimiter;
    constructor(e, t) {
      let {rateLimiter: r, ...s} = t ?? {};
      super(e, s);
      this.rateLimiter = r ?? new j.DefaultRateLimiter, this.mode = j.RETRY_MODES.ADAPTIVE;
    }
    async retry(e, t) {
      return super.retry(e, t, {
        beforeRequest: async () => this.rateLimiter.getSendToken(),
        afterRequest: r => {
          this.rateLimiter.updateClientSendingRate(r);
        }
      });
    }
  }
  var ur = "AWS_MAX_ATTEMPTS", lr = "max_attempts", xl = {
    environmentVariableSelector: e => {
      let t = e[ur];
      if (!t) return;
      let r = parseInt(t);
      if (Number.isNaN(r)) throw Error(`Environment variable ${ur} mast be a number, got "${t}"`);
      return r;
    },
    configFileSelector: e => {
      let t = e[lr];
      if (!t) return;
      let r = parseInt(t);
      if (Number.isNaN(r)) throw Error(`Shared config file entry ${lr} mast be a number, got "${t}"`);
      return r;
    },
    default: j.DEFAULT_MAX_ATTEMPTS
  }, bl = e => {
    let {retryStrategy: t, retryMode: r, maxAttempts: s} = e, o = Pn.normalizeProvider(s ?? j.DEFAULT_MAX_ATTEMPTS);
    return Object.assign(e, {
      maxAttempts: o,
      retryStrategy: async () => {
        if (t) return t;
        if (await Pn.normalizeProvider(r)() === j.RETRY_MODES.ADAPTIVE) return new j.AdaptiveRetryStrategy(o);
        return new j.StandardRetryStrategy(o);
      }
    });
  }, Ln = "AWS_RETRY_MODE", Un = "retry_mode", Nl = {
    environmentVariableSelector: e => e[Ln],
    configFileSelector: e => e[Un],
    default: j.DEFAULT_RETRY_MODE
  }, Vn = () => e => async t => {
    let {request: r} = t;
    if (De.HttpRequest.isInstance(r)) delete r.headers[j.INVOCATION_ID_HEADER], delete r.headers[j.REQUEST_HEADER];
    return e(t);
  }, Fn = {
    name: "omitRetryHeadersMiddleware",
    tags: [ "RETRY", "HEADERS", "OMIT_RETRY_HEADERS" ],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: !0
  }, Tl = e => ({
    applyToStack: t => {
      t.addRelativeTo(Vn(), Fn);
    }
  }), jn = e => (t, r) => async s => {
    let o = await e.retryStrategy(), a = await e.maxAttempts();
    if (_l(o)) {
      o = o;
      let c = await o.acquireInitialRetryToken(r.partition_id), d = Error(), f = 0, m = 0, {request: y} = s, b = De.HttpRequest.isInstance(y);
      if (b) y.headers[j.INVOCATION_ID_HEADER] = kn.v4();
      while (!0) try {
        if (b) y.headers[j.REQUEST_HEADER] = `attempt=${f + 1}; max=${a}`;
        let {response: x, output: N} = await t(s);
        return o.recordSuccess(c), N.$metadata.attempts = f + 1, N.$metadata.totalRetryDelay = m, 
        {
          response: x,
          output: N
        };
      } catch (x) {
        let N = Cl(x);
        if (d = $n(x), b && El.isStreamingPayload(y)) throw (r.logger instanceof yl.NoOpLogger ? console : r.logger)?.warn("An error was encountered in a non-retryable streaming request."), 
        d;
        try {
          c = await o.refreshRetryTokenForRetry(c, N);
        } catch (I) {
          if (!d.$metadata) d.$metadata = {};
          throw d.$metadata.attempts = f + 1, d.$metadata.totalRetryDelay = m, d;
        }
        f = c.getRetryCount();
        let T = c.getRetryDelay();
        m += T, await new Promise(I => setTimeout(I, T));
      }
    } else {
      if (o = o, o?.mode) r.userAgent = [ ...r.userAgent || [], [ "cfg/retry-mode", o.mode ] ];
      return o.retry(t, s);
    }
  }, _l = e => typeof e.acquireInitialRetryToken < "u" && typeof e.refreshRetryTokenForRetry < "u" && typeof e.recordSuccess < "u", Cl = e => {
    let t = {
      error: e,
      errorType: Al(e)
    }, r = Hn(e.$response);
    if (r) t.retryAfterHint = r;
    return t;
  }, Al = e => {
    if (ye.isThrottlingError(e)) return "THROTTLING";
    if (ye.isTransientError(e)) return "TRANSIENT";
    if (ye.isServerError(e)) return "SERVER_ERROR";
    return "CLIENT_ERROR";
  }, qn = {
    name: "retryMiddleware",
    tags: [ "RETRY" ],
    step: "finalizeRequest",
    priority: "high",
    override: !0
  }, Rl = e => ({
    applyToStack: t => {
      t.add(jn(e), qn);
    }
  }), Hn = e => {
    if (!De.HttpResponse.isInstance(e)) return;
    let t = Object.keys(e.headers).find(a => a.toLowerCase() === "retry-after");
    if (!t) return;
    let r = e.headers[t], s = Number(r);
    if (!Number.isNaN(s)) return new Date(s * 1e3);
    return new Date(r);
  };
  Il.AdaptiveRetryStrategy = Bn;
  Il.CONFIG_MAX_ATTEMPTS = lr;
  Il.CONFIG_RETRY_MODE = Un;
  Il.ENV_MAX_ATTEMPTS = ur;
  Il.ENV_RETRY_MODE = Ln;
  Il.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = xl;
  Il.NODE_RETRY_MODE_CONFIG_OPTIONS = Nl;
  Il.StandardRetryStrategy = dr;
  Il.defaultDelayDecider = vn;
  Il.defaultRetryDecider = zn;
  Il.getOmitRetryHeadersPlugin = Tl;
  Il.getRetryAfterHint = Hn;
  Il.getRetryPlugin = Rl;
  Il.omitRetryHeadersMiddleware = Vn;
  Il.omitRetryHeadersMiddlewareOptions = Fn;
  Il.resolveRetryConfig = bl;
  Il.retryMiddleware = jn;
  Il.retryMiddlewareOptions = qn;
});

var Fse = C(function(Zl) {
  var Gn = Ne("os"), hr = Ne("process"), Wl = fZ(), Xn = {
    isCrtAvailable: !1
  }, Kl = () => {
    if (Xn.isCrtAvailable) return [ "md/crt-avail" ];
    return null;
  }, Wn = ({serviceId: e, clientVersion: t}) => async r => {
    let s = [ [ "aws-sdk-js", t ], [ "ua", "2.1" ], [ `os/${Gn.platform()}`, Gn.release() ], [ "lang/js" ], [ "md/nodejs", `${hr.versions.node}` ] ], o = Kl();
    if (o) s.push(o);
    if (e) s.push([ `api/${e}`, t ]);
    if (hr.env.AWS_EXECUTION_ENV) s.push([ `exec-env/${hr.env.AWS_EXECUTION_ENV}` ]);
    let a = await (r?.userAgentAppId?.());
    return a ? [ ...s, [ `app/${a}` ] ] : [ ...s ];
  }, Ql = Wn, Kn = "AWS_SDK_UA_APP_ID", Qn = "sdk_ua_app_id", Yl = "sdk-ua-app-id", Jl = {
    environmentVariableSelector: e => e[Kn],
    configFileSelector: e => e[Qn] ?? e[Yl],
    default: Wl.DEFAULT_UA_APP_ID
  };
  Zl.NODE_APP_ID_CONFIG_OPTIONS = Jl;
  Zl.UA_APP_ID_ENV_NAME = Kn;
  Zl.UA_APP_ID_INI_NAME = Qn;
  Zl.createDefaultUserAgentProvider = Wn;
  Zl.crtAvailability = Xn;
  Zl.defaultUserAgent = Ql;
});

var Use = C(function(cd) {
  var fr = d$t(), od = _T(), ad = Ne("buffer"), Yn = Ne("crypto");
  class Zn {
    algorithmIdentifier;
    secret;
    hash;
    constructor(e, t) {
      this.algorithmIdentifier = e, this.secret = t, this.reset();
    }
    update(e, t) {
      this.hash.update(od.toUint8Array(Jn(e, t)));
    }
    digest() {
      return Promise.resolve(this.hash.digest());
    }
    reset() {
      this.hash = this.secret ? Yn.createHmac(this.algorithmIdentifier, Jn(this.secret)) : Yn.createHash(this.algorithmIdentifier);
    }
  }
  function Jn(e, t) {
    if (ad.Buffer.isBuffer(e)) return e;
    if (typeof e === "string") return fr.fromString(e, t);
    if (ArrayBuffer.isView(e)) return fr.fromArrayBuffer(e.buffer, e.byteOffset, e.byteLength);
    return fr.fromArrayBuffer(e);
  }
  cd.Hash = Zn;
});

var Bse = C(function(dd) {
  var pr = Ne("fs"), ld = e => {
    if (!e) return 0;
    if (typeof e === "string") return Buffer.byteLength(e); else if (typeof e.byteLength === "number") return e.byteLength; else if (typeof e.size === "number") return e.size; else if (typeof e.start === "number" && typeof e.end === "number") return e.end + 1 - e.start; else if (e instanceof pr.ReadStream) {
      if (e.path != null) return pr.lstatSync(e.path).size; else if (typeof e.fd === "number") return pr.fstatSync(e.fd).size;
    }
    throw Error(`Body Length computation failed for ${e}`);
  };
  dd.calculateBodyLength = ld;
});

var jse = C(function(wd) {
  var ei = Ut(), U = MP(), he = Nc(), Y = gut(), X = OHt(), qe = lx(), ri = _T(), se = jt();
  class Pe {
    queryCompat;
    constructor(e = !1) {
      this.queryCompat = e;
    }
    resolveRestContentType(e, t) {
      let r = t.getMemberSchemas(), s = Object.values(r).find(o => !!o.getMergedTraits().httpPayload);
      if (s) {
        let o = s.getMergedTraits().mediaType;
        if (o) return o; else if (s.isStringSchema()) return "text/plain"; else if (s.isBlobSchema()) return "application/octet-stream"; else return e;
      } else if (!t.isUnitSchema()) {
        if (Object.values(r).find(a => {
          let {httpQuery: c, httpQueryParams: d, httpHeader: f, httpLabel: m, httpPrefixHeaders: y} = a.getMergedTraits();
          return !c && !d && !f && !m && y === void 0;
        })) return e;
      }
    }
    async getErrorSchemaOrThrowBaseException(e, t, r, s, o, a) {
      let c = t, d = e;
      if (e.includes("#")) [c, d] = e.split("#");
      let f = {
        $metadata: o,
        $fault: r.statusCode < 500 ? "client" : "server"
      }, m = U.TypeRegistry.for(c);
      try {
        return {
          errorSchema: a?.(m, d) ?? m.getSchema(e),
          errorMetadata: f
        };
      } catch (y) {
        s.message = s.message ?? s.Message ?? "UnknownError";
        let b = U.TypeRegistry.for("smithy.ts.sdk.synthetic." + c), x = b.getBaseException();
        if (x) {
          let N = b.getErrorCtor(x) ?? Error;
          throw this.decorateServiceException(Object.assign(new N({
            name: d
          }), f), s);
        }
        throw this.decorateServiceException(Object.assign(Error(d), f), s);
      }
    }
    decorateServiceException(e, t = {}) {
      if (this.queryCompat) {
        let r = e.Message ?? t.Message, s = he.decorateServiceException(e, t);
        if (r) s.Message = r, s.message = r;
        return s;
      }
      return he.decorateServiceException(e, t);
    }
    setQueryCompatError(e, t) {
      let r = t.headers?.["x-amzn-query-error"];
      if (e !== void 0 && r != null) {
        let [s, o] = r.split(";"), a = Object.entries(e), c = {
          Code: s,
          Type: o
        };
        Object.assign(e, c);
        for (let [d, f] of a) c[d] = f;
        delete c.__type, e.Error = c;
      }
    }
    queryCompatOutput(e, t) {
      if (e.Error) t.Error = e.Error;
      if (e.Type) t.Type = e.Type;
      if (e.Code) t.Code = e.Code;
    }
  }
  class si extends ei.SmithyRpcV2CborProtocol {
    awsQueryCompatible;
    mixin;
    constructor({defaultNamespace: e, awsQueryCompatible: t}) {
      super({
        defaultNamespace: e
      });
      this.awsQueryCompatible = !!t, this.mixin = new Pe(this.awsQueryCompatible);
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (this.awsQueryCompatible) s.headers["x-amzn-query-mode"] = "true";
      return s;
    }
    async handleError(e, t, r, s, o) {
      if (this.awsQueryCompatible) this.mixin.setQueryCompatError(s, r);
      let a = ei.loadSmithyRpcV2CborErrorCode(r, s) ?? "Unknown", {errorSchema: c, errorMetadata: d} = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = U.NormalizedSchema.of(c), m = s.message ?? s.Message ?? "Unknown", b = new (U.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m), x = {};
      for (let [N, T] of f.structIterator()) x[N] = this.deserializer.readValue(T, s[N]);
      if (this.awsQueryCompatible) this.mixin.queryCompatOutput(s, x);
      throw this.mixin.decorateServiceException(Object.assign(b, d, {
        $fault: f.getMergedTraits().error,
        message: m
      }, x), s);
    }
  }
  var fd = e => {
    if (e == null) return e;
    if (typeof e === "number" || typeof e === "bigint") {
      let t = Error(`Received number ${e} where a string was expected.`);
      return t.name = "Warning", console.warn(t), String(e);
    }
    if (typeof e === "boolean") {
      let t = Error(`Received boolean ${e} where a string was expected.`);
      return t.name = "Warning", console.warn(t), String(e);
    }
    return e;
  }, pd = e => {
    if (e == null) return e;
    if (typeof e === "string") {
      let t = e.toLowerCase();
      if (e !== "" && t !== "false" && t !== "true") {
        let r = Error(`Received string "${e}" where a boolean was expected.`);
        r.name = "Warning", console.warn(r);
      }
      return e !== "" && t !== "false";
    }
    return e;
  }, md = e => {
    if (e == null) return e;
    if (typeof e === "string") {
      let t = Number(e);
      if (t.toString() !== e) {
        let r = Error(`Received string "${e}" where a number was expected.`);
        return r.name = "Warning", console.warn(r), e;
      }
      return t;
    }
    return e;
  };
  class Ee {
    serdeContext;
    setSerdeContext(e) {
      this.serdeContext = e;
    }
  }
  function gd(e, t, r) {
    if (r?.source) {
      let s = r.source;
      if (typeof t === "number") {
        if (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER || s !== String(t)) if (s.includes(".")) return new X.NumericValue(s, "bigDecimal"); else return BigInt(s);
      }
    }
    return t;
  }
  var ni = (e, t) => he.collectBody(e, t).then(r => (t?.utf8Encoder ?? ri.toUtf8)(r)), mr = (e, t) => ni(e, t).then(r => {
    if (r.length) try {
      return JSON.parse(r);
    } catch (s) {
      if (s?.name === "SyntaxError") Object.defineProperty(s, "$responseBodyText", {
        value: r
      });
      throw s;
    }
    return {};
  }), yd = async (e, t) => {
    let r = await mr(e, t);
    return r.message = r.message ?? r.Message, r;
  }, gr = (e, t) => {
    let r = (a, c) => Object.keys(a).find(d => d.toLowerCase() === c.toLowerCase()), s = a => {
      let c = a;
      if (typeof c === "number") c = c.toString();
      if (c.indexOf(",") >= 0) c = c.split(",")[0];
      if (c.indexOf(":") >= 0) c = c.split(":")[0];
      if (c.indexOf("#") >= 0) c = c.split("#")[1];
      return c;
    }, o = r(e.headers, "x-amzn-errortype");
    if (o !== void 0) return s(e.headers[o]);
    if (t && typeof t === "object") {
      let a = r(t, "code");
      if (a && t[a] !== void 0) return s(t[a]);
      if (t.__type !== void 0) return s(t.__type);
    }
  };
  class yr extends Ee {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    async read(e, t) {
      return this._read(e, typeof t === "string" ? JSON.parse(t, gd) : await mr(t, this.serdeContext));
    }
    readObject(e, t) {
      return this._read(e, t);
    }
    _read(e, t) {
      let r = t !== null && typeof t === "object", s = U.NormalizedSchema.of(e);
      if (s.isListSchema() && Array.isArray(t)) {
        let a = s.getValueSchema(), c = [], d = !!s.getMergedTraits().sparse;
        for (let f of t) if (d || f != null) c.push(this._read(a, f));
        return c;
      } else if (s.isMapSchema() && r) {
        let a = s.getValueSchema(), c = {}, d = !!s.getMergedTraits().sparse;
        for (let [f, m] of Object.entries(t)) if (d || m != null) c[f] = this._read(a, m);
        return c;
      } else if (s.isStructSchema() && r) {
        let a = {};
        for (let [c, d] of s.structIterator()) {
          let f = this.settings.jsonName ? d.getMergedTraits().jsonName ?? c : c, m = this._read(d, t[f]);
          if (m != null) a[c] = m;
        }
        return a;
      }
      if (s.isBlobSchema() && typeof t === "string") return qe.fromBase64(t);
      let o = s.getMergedTraits().mediaType;
      if (s.isStringSchema() && typeof t === "string" && o) {
        if (o === "application/json" || o.endsWith("+json")) return X.LazyJsonString.from(t);
      }
      if (s.isTimestampSchema() && t != null) switch (Y.determineTimestampFormat(s, this.settings)) {
       case 5:
        return X.parseRfc3339DateTimeWithOffset(t);

       case 6:
        return X.parseRfc7231DateTime(t);

       case 7:
        return X.parseEpochTimestamp(t);

       default:
        return console.warn("Missing timestamp format, parsing value with Date constructor:", t), 
        new Date(t);
      }
      if (s.isBigIntegerSchema() && (typeof t === "number" || typeof t === "string")) return BigInt(t);
      if (s.isBigDecimalSchema() && t != null) {
        if (t instanceof X.NumericValue) return t;
        let a = t;
        if (a.type === "bigDecimal" && "string" in a) return new X.NumericValue(a.string, a.type);
        return new X.NumericValue(String(t), "bigDecimal");
      }
      if (s.isNumericSchema() && typeof t === "string") switch (t) {
       case "Infinity":
        return 1 / 0;

       case "-Infinity":
        return -1 / 0;

       case "NaN":
        return NaN;
      }
      if (s.isDocumentSchema()) if (r) {
        let a = Array.isArray(t) ? [] : {};
        for (let [c, d] of Object.entries(t)) if (d instanceof X.NumericValue) a[c] = d; else a[c] = this._read(s, d);
        return a;
      } else return structuredClone(t);
      return t;
    }
  }
  var ti = String.fromCharCode(925);
  class ii {
    values=new Map;
    counter=0;
    stage=0;
    createReplacer() {
      if (this.stage === 1) throw Error("@aws-sdk/core/protocols - JsonReplacer already created.");
      if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      return this.stage = 1, (e, t) => {
        if (t instanceof X.NumericValue) {
          let r = `${ti + "nv" + this.counter++}_` + t.string;
          return this.values.set(`"${r}"`, t.string), r;
        }
        if (typeof t === "bigint") {
          let r = t.toString(), s = `${ti + "b" + this.counter++}_` + r;
          return this.values.set(`"${s}"`, r), s;
        }
        return t;
      };
    }
    replaceInJson(e) {
      if (this.stage === 0) throw Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
      if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
      if (this.stage = 2, this.counter === 0) return e;
      for (let [t, r] of this.values) e = e.replace(t, r);
      return e;
    }
  }
  class Er extends Ee {
    settings;
    buffer;
    rootSchema;
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t) {
      this.rootSchema = U.NormalizedSchema.of(e), this.buffer = this._write(this.rootSchema, t);
    }
    writeDiscriminatedDocument(e, t) {
      if (this.write(e, t), typeof this.buffer === "object") this.buffer.__type = U.NormalizedSchema.of(e).getName(!0);
    }
    flush() {
      let {rootSchema: e} = this;
      if (this.rootSchema = void 0, e?.isStructSchema() || e?.isDocumentSchema()) {
        let t = new ii;
        return t.replaceInJson(JSON.stringify(this.buffer, t.createReplacer(), 0));
      }
      return this.buffer;
    }
    _write(e, t, r) {
      let s = t !== null && typeof t === "object", o = U.NormalizedSchema.of(e);
      if (o.isListSchema() && Array.isArray(t)) {
        let a = o.getValueSchema(), c = [], d = !!o.getMergedTraits().sparse;
        for (let f of t) if (d || f != null) c.push(this._write(a, f));
        return c;
      } else if (o.isMapSchema() && s) {
        let a = o.getValueSchema(), c = {}, d = !!o.getMergedTraits().sparse;
        for (let [f, m] of Object.entries(t)) if (d || m != null) c[f] = this._write(a, m);
        return c;
      } else if (o.isStructSchema() && s) {
        let a = {};
        for (let [c, d] of o.structIterator()) {
          let f = this.settings.jsonName ? d.getMergedTraits().jsonName ?? c : c, m = this._write(d, t[c], o);
          if (m !== void 0) a[f] = m;
        }
        return a;
      }
      if (t === null && r?.isStructSchema()) return;
      if (o.isBlobSchema() && (t instanceof Uint8Array || typeof t === "string") || o.isDocumentSchema() && t instanceof Uint8Array) {
        if (o === this.rootSchema) return t;
        return (this.serdeContext?.base64Encoder ?? qe.toBase64)(t);
      }
      if ((o.isTimestampSchema() || o.isDocumentSchema()) && t instanceof Date) switch (Y.determineTimestampFormat(o, this.settings)) {
       case 5:
        return t.toISOString().replace(".000Z", "Z");

       case 6:
        return X.dateToUtcString(t);

       case 7:
        return t.getTime() / 1e3;

       default:
        return console.warn("Missing timestamp format, using epoch seconds", t), t.getTime() / 1e3;
      }
      if (o.isNumericSchema() && typeof t === "number") {
        if (Math.abs(t) === 1 / 0 || isNaN(t)) return String(t);
      }
      if (o.isStringSchema()) {
        if (typeof t > "u" && o.isIdempotencyToken()) return X.generateIdempotencyToken();
        let a = o.getMergedTraits().mediaType;
        if (t != null && a) {
          if (a === "application/json" || a.endsWith("+json")) return X.LazyJsonString.from(t);
        }
      }
      if (o.isDocumentSchema()) if (s) {
        let a = Array.isArray(t) ? [] : {};
        for (let [c, d] of Object.entries(t)) if (d instanceof X.NumericValue) a[c] = d; else a[c] = this._write(o, d);
        return a;
      } else return structuredClone(t);
      return t;
    }
  }
  class lt extends Ee {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    createSerializer() {
      let e = new Er(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
      let e = new yr(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
  }
  class dt extends Y.RpcProtocol {
    serializer;
    deserializer;
    serviceTarget;
    codec;
    mixin;
    awsQueryCompatible;
    constructor({defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r}) {
      super({
        defaultNamespace: e
      });
      this.serviceTarget = t, this.codec = new lt({
        timestampFormat: {
          useTrait: !0,
          default: 7
        },
        jsonName: !1
      }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer(), 
      this.awsQueryCompatible = !!r, this.mixin = new Pe(this.awsQueryCompatible);
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (!s.path.endsWith("/")) s.path += "/";
      if (Object.assign(s.headers, {
        "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
        "x-amz-target": `${this.serviceTarget}.${e.name}`
      }), this.awsQueryCompatible) s.headers["x-amzn-query-mode"] = "true";
      if (U.deref(e.input) === "unit" || !s.body) s.body = "{}";
      return s;
    }
    getPayloadCodec() {
      return this.codec;
    }
    async handleError(e, t, r, s, o) {
      if (this.awsQueryCompatible) this.mixin.setQueryCompatError(s, r);
      let a = gr(r, s) ?? "Unknown", {errorSchema: c, errorMetadata: d} = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = U.NormalizedSchema.of(c), m = s.message ?? s.Message ?? "Unknown", b = new (U.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m), x = {};
      for (let [N, T] of f.structIterator()) {
        let I = T.getMergedTraits().jsonName ?? N;
        x[N] = this.codec.createDeserializer().readObject(T, s[I]);
      }
      if (this.awsQueryCompatible) this.mixin.queryCompatOutput(s, x);
      throw this.mixin.decorateServiceException(Object.assign(b, d, {
        $fault: f.getMergedTraits().error,
        message: m
      }, x), s);
    }
  }
  class oi extends dt {
    constructor({defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r}) {
      super({
        defaultNamespace: e,
        serviceTarget: t,
        awsQueryCompatible: r
      });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_0";
    }
    getJsonRpcVersion() {
      return "1.0";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.0";
    }
  }
  class ai extends dt {
    constructor({defaultNamespace: e, serviceTarget: t, awsQueryCompatible: r}) {
      super({
        defaultNamespace: e,
        serviceTarget: t,
        awsQueryCompatible: r
      });
    }
    getShapeId() {
      return "aws.protocols#awsJson1_1";
    }
    getJsonRpcVersion() {
      return "1.1";
    }
    getDefaultContentType() {
      return "application/x-amz-json-1.1";
    }
  }
  class ci extends Y.HttpBindingProtocol {
    serializer;
    deserializer;
    codec;
    mixin=new Pe;
    constructor({defaultNamespace: e}) {
      super({
        defaultNamespace: e
      });
      let t = {
        timestampFormat: {
          useTrait: !0,
          default: 7
        },
        httpBindings: !0,
        jsonName: !0
      };
      this.codec = new lt(t), this.serializer = new Y.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t), 
      this.deserializer = new Y.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
    }
    getShapeId() {
      return "aws.protocols#restJson1";
    }
    getPayloadCodec() {
      return this.codec;
    }
    setSerdeContext(e) {
      this.codec.setSerdeContext(e), super.setSerdeContext(e);
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r), o = U.NormalizedSchema.of(e.input);
      if (!s.headers["content-type"]) {
        let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
        if (a) s.headers["content-type"] = a;
      }
      if (s.body == null && s.headers["content-type"] === this.getDefaultContentType()) s.body = "{}";
      return s;
    }
    async deserializeResponse(e, t, r) {
      let s = await super.deserializeResponse(e, t, r), o = U.NormalizedSchema.of(e.output);
      for (let [a, c] of o.structIterator()) if (c.getMemberTraits().httpPayload && !(a in s)) s[a] = null;
      return s;
    }
    async handleError(e, t, r, s, o) {
      let a = gr(r, s) ?? "Unknown", {errorSchema: c, errorMetadata: d} = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = U.NormalizedSchema.of(c), m = s.message ?? s.Message ?? "Unknown", b = new (U.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m);
      await this.deserializeHttpMessage(c, t, r, s);
      let x = {};
      for (let [N, T] of f.structIterator()) {
        let I = T.getMergedTraits().jsonName ?? N;
        x[N] = this.codec.createDeserializer().readObject(T, s[I]);
      }
      throw this.mixin.decorateServiceException(Object.assign(b, d, {
        $fault: f.getMergedTraits().error,
        message: m
      }, x), s);
    }
    getDefaultContentType() {
      return "application/json";
    }
  }
  var Ed = e => {
    if (e == null) return;
    if (typeof e === "object" && "__type" in e) delete e.__type;
    return he.expectUnion(e);
  };
  class ht extends Ee {
    settings;
    stringDeserializer;
    constructor(e) {
      super();
      this.settings = e, this.stringDeserializer = new Y.FromStringShapeDeserializer(e);
    }
    setSerdeContext(e) {
      this.serdeContext = e, this.stringDeserializer.setSerdeContext(e);
    }
    read(e, t, r) {
      let s = U.NormalizedSchema.of(e), o = s.getMemberSchemas();
      if (s.isStructSchema() && s.isMemberSchema() && !!Object.values(o).find(f => !!f.getMemberTraits().eventPayload)) {
        let f = {}, m = Object.keys(o)[0];
        if (o[m].isBlobSchema()) f[m] = t; else f[m] = this.read(o[m], t);
        return f;
      }
      let c = (this.serdeContext?.utf8Encoder ?? ri.toUtf8)(t), d = this.parseXml(c);
      return this.readSchema(e, r ? d[r] : d);
    }
    readSchema(e, t) {
      let r = U.NormalizedSchema.of(e);
      if (r.isUnitSchema()) return;
      let s = r.getMergedTraits();
      if (r.isListSchema() && !Array.isArray(t)) return this.readSchema(r, [ t ]);
      if (t == null) return t;
      if (typeof t === "object") {
        let o = !!s.sparse, a = !!s.xmlFlattened;
        if (r.isListSchema()) {
          let d = r.getValueSchema(), f = [], m = d.getMergedTraits().xmlName ?? "member", y = a ? t : (t[0] ?? t)[m], b = Array.isArray(y) ? y : [ y ];
          for (let x of b) if (x != null || o) f.push(this.readSchema(d, x));
          return f;
        }
        let c = {};
        if (r.isMapSchema()) {
          let d = r.getKeySchema(), f = r.getValueSchema(), m;
          if (a) m = Array.isArray(t) ? t : [ t ]; else m = Array.isArray(t.entry) ? t.entry : [ t.entry ];
          let y = d.getMergedTraits().xmlName ?? "key", b = f.getMergedTraits().xmlName ?? "value";
          for (let x of m) {
            let N = x[y], T = x[b];
            if (T != null || o) c[N] = this.readSchema(f, T);
          }
          return c;
        }
        if (r.isStructSchema()) {
          for (let [d, f] of r.structIterator()) {
            let m = f.getMergedTraits(), y = !m.httpPayload ? f.getMemberTraits().xmlName ?? d : m.xmlName ?? f.getName();
            if (t[y] != null) c[d] = this.readSchema(f, t[y]);
          }
          return c;
        }
        if (r.isDocumentSchema()) return t;
        throw Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${r.getName(!0)}`);
      }
      if (r.isListSchema()) return [];
      if (r.isMapSchema() || r.isStructSchema()) return {};
      return this.stringDeserializer.read(r, t);
    }
    parseXml(e) {
      if (e.length) {
        let t;
        try {
          t = se.parseXML(e);
        } catch (a) {
          if (a && typeof a === "object") Object.defineProperty(a, "$responseBodyText", {
            value: e
          });
          throw a;
        }
        let r = "#text", s = Object.keys(t)[0], o = t[s];
        if (o[r]) o[s] = o[r], delete o[r];
        return he.getValueFromTextNode(o);
      }
      return {};
    }
  }
  class ui extends Ee {
    settings;
    buffer;
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t, r = "") {
      if (this.buffer === void 0) this.buffer = "";
      let s = U.NormalizedSchema.of(e);
      if (r && !r.endsWith(".")) r += ".";
      if (s.isBlobSchema()) {
        if (typeof t === "string" || t instanceof Uint8Array) this.writeKey(r), this.writeValue((this.serdeContext?.base64Encoder ?? qe.toBase64)(t));
      } else if (s.isBooleanSchema() || s.isNumericSchema() || s.isStringSchema()) {
        if (t != null) this.writeKey(r), this.writeValue(String(t)); else if (s.isIdempotencyToken()) this.writeKey(r), 
        this.writeValue(X.generateIdempotencyToken());
      } else if (s.isBigIntegerSchema()) {
        if (t != null) this.writeKey(r), this.writeValue(String(t));
      } else if (s.isBigDecimalSchema()) {
        if (t != null) this.writeKey(r), this.writeValue(t instanceof X.NumericValue ? t.string : String(t));
      } else if (s.isTimestampSchema()) {
        if (t instanceof Date) switch (this.writeKey(r), Y.determineTimestampFormat(s, this.settings)) {
         case 5:
          this.writeValue(t.toISOString().replace(".000Z", "Z"));
          break;

         case 6:
          this.writeValue(he.dateToUtcString(t));
          break;

         case 7:
          this.writeValue(String(t.getTime() / 1e3));
          break;
        }
      } else if (s.isDocumentSchema()) throw Error(`@aws-sdk/core/protocols - QuerySerializer unsupported document type ${s.getName(!0)}`); else if (s.isListSchema()) {
        if (Array.isArray(t)) if (t.length === 0) {
          if (this.settings.serializeEmptyLists) this.writeKey(r), this.writeValue("");
        } else {
          let o = s.getValueSchema(), a = this.settings.flattenLists || s.getMergedTraits().xmlFlattened, c = 1;
          for (let d of t) {
            if (d == null) continue;
            let f = this.getKey("member", o.getMergedTraits().xmlName), m = a ? `${r}${c}` : `${r}${f}.${c}`;
            this.write(o, d, m), ++c;
          }
        }
      } else if (s.isMapSchema()) {
        if (t && typeof t === "object") {
          let o = s.getKeySchema(), a = s.getValueSchema(), c = s.getMergedTraits().xmlFlattened, d = 1;
          for (let [f, m] of Object.entries(t)) {
            if (m == null) continue;
            let y = this.getKey("key", o.getMergedTraits().xmlName), b = c ? `${r}${d}.${y}` : `${r}entry.${d}.${y}`, x = this.getKey("value", a.getMergedTraits().xmlName), N = c ? `${r}${d}.${x}` : `${r}entry.${d}.${x}`;
            this.write(o, f, b), this.write(a, m, N), ++d;
          }
        }
      } else if (s.isStructSchema()) {
        if (t && typeof t === "object") for (let [o, a] of s.structIterator()) {
          if (t[o] == null && !a.isIdempotencyToken()) continue;
          let c = this.getKey(o, a.getMergedTraits().xmlName), d = `${r}${c}`;
          this.write(a, t[o], d);
        }
      } else if (s.isUnitSchema()) ; else throw Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${s.getName(!0)}`);
    }
    flush() {
      if (this.buffer === void 0) throw Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
      let e = this.buffer;
      return delete this.buffer, e;
    }
    getKey(e, t) {
      let r = t ?? e;
      if (this.settings.capitalizeKeys) return r[0].toUpperCase() + r.slice(1);
      return r;
    }
    writeKey(e) {
      if (e.endsWith(".")) e = e.slice(0, e.length - 1);
      this.buffer += `&${Y.extendedEncodeURIComponent(e)}=`;
    }
    writeValue(e) {
      this.buffer += Y.extendedEncodeURIComponent(e);
    }
  }
  class Sr extends Y.RpcProtocol {
    options;
    serializer;
    deserializer;
    mixin=new Pe;
    constructor(e) {
      super({
        defaultNamespace: e.defaultNamespace
      });
      this.options = e;
      let t = {
        timestampFormat: {
          useTrait: !0,
          default: 5
        },
        httpBindings: !1,
        xmlNamespace: e.xmlNamespace,
        serviceNamespace: e.defaultNamespace,
        serializeEmptyLists: !0
      };
      this.serializer = new ui(t), this.deserializer = new ht(t);
    }
    getShapeId() {
      return "aws.protocols#awsQuery";
    }
    setSerdeContext(e) {
      this.serializer.setSerdeContext(e), this.deserializer.setSerdeContext(e);
    }
    getPayloadCodec() {
      throw Error("AWSQuery protocol has no payload codec.");
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r);
      if (!s.path.endsWith("/")) s.path += "/";
      if (Object.assign(s.headers, {
        "content-type": "application/x-www-form-urlencoded"
      }), U.deref(e.input) === "unit" || !s.body) s.body = "";
      let o = e.name.split("#")[1] ?? e.name;
      if (s.body = `Action=${o}&Version=${this.options.version}` + s.body, s.body.endsWith("&")) s.body = s.body.slice(-1);
      return s;
    }
    async deserializeResponse(e, t, r) {
      let s = this.deserializer, o = U.NormalizedSchema.of(e.output), a = {};
      if (r.statusCode >= 300) {
        let y = await Y.collectBody(r.body, t);
        if (y.byteLength > 0) Object.assign(a, await s.read(15, y));
        await this.handleError(e, t, r, a, this.deserializeMetadata(r));
      }
      for (let y in r.headers) {
        let b = r.headers[y];
        delete r.headers[y], r.headers[y.toLowerCase()] = b;
      }
      let c = e.name.split("#")[1] ?? e.name, d = o.isStructSchema() && this.useNestedResult() ? c + "Result" : void 0, f = await Y.collectBody(r.body, t);
      if (f.byteLength > 0) Object.assign(a, await s.read(o, f, d));
      return {
        $metadata: this.deserializeMetadata(r),
        ...a
      };
    }
    useNestedResult() {
      return !0;
    }
    async handleError(e, t, r, s, o) {
      let a = this.loadQueryErrorCode(r, s) ?? "Unknown", c = this.loadQueryError(s), d = this.loadQueryErrorMessage(s);
      c.message = d, c.Error = {
        Type: c.Type,
        Code: c.Code,
        Message: d
      };
      let {errorSchema: f, errorMetadata: m} = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, c, o, (T, I) => {
        try {
          return T.getSchema(I);
        } catch (F) {
          return T.find(v => U.NormalizedSchema.of(v).getMergedTraits().awsQueryError?.[0] === I);
        }
      }), y = U.NormalizedSchema.of(f), x = new (U.TypeRegistry.for(f[1]).getErrorCtor(f) ?? Error)(d), N = {
        Error: c.Error
      };
      for (let [T, I] of y.structIterator()) {
        let F = I.getMergedTraits().xmlName ?? T, v = c[F] ?? s[F];
        N[T] = this.deserializer.readSchema(I, v);
      }
      throw this.mixin.decorateServiceException(Object.assign(x, m, {
        $fault: y.getMergedTraits().error,
        message: d
      }, N), s);
    }
    loadQueryErrorCode(e, t) {
      let r = (t.Errors?.[0]?.Error ?? t.Errors?.Error ?? t.Error)?.Code;
      if (r !== void 0) return r;
      if (e.statusCode == 404) return "NotFound";
    }
    loadQueryError(e) {
      return e.Errors?.[0]?.Error ?? e.Errors?.Error ?? e.Error;
    }
    loadQueryErrorMessage(e) {
      let t = this.loadQueryError(e);
      return t?.message ?? t?.Message ?? e.message ?? e.Message ?? "Unknown";
    }
    getDefaultContentType() {
      return "application/x-www-form-urlencoded";
    }
  }
  class li extends Sr {
    options;
    constructor(e) {
      super(e);
      this.options = e;
      let t = {
        capitalizeKeys: !0,
        flattenLists: !0,
        serializeEmptyLists: !1
      };
      Object.assign(this.serializer.settings, t);
    }
    useNestedResult() {
      return !1;
    }
  }
  var di = (e, t) => ni(e, t).then(r => {
    if (r.length) {
      let s;
      try {
        s = se.parseXML(r);
      } catch (d) {
        if (d && typeof d === "object") Object.defineProperty(d, "$responseBodyText", {
          value: r
        });
        throw d;
      }
      let o = "#text", a = Object.keys(s)[0], c = s[a];
      if (c[o]) c[a] = c[o], delete c[o];
      return he.getValueFromTextNode(c);
    }
    return {};
  }), Sd = async (e, t) => {
    let r = await di(e, t);
    if (r.Error) r.Error.message = r.Error.message ?? r.Error.Message;
    return r;
  }, hi = (e, t) => {
    if (t?.Error?.Code !== void 0) return t.Error.Code;
    if (t?.Code !== void 0) return t.Code;
    if (e.statusCode == 404) return "NotFound";
  };
  class wr extends Ee {
    settings;
    stringBuffer;
    byteBuffer;
    buffer;
    constructor(e) {
      super();
      this.settings = e;
    }
    write(e, t) {
      let r = U.NormalizedSchema.of(e);
      if (r.isStringSchema() && typeof t === "string") this.stringBuffer = t; else if (r.isBlobSchema()) this.byteBuffer = "byteLength" in t ? t : (this.serdeContext?.base64Decoder ?? qe.fromBase64)(t); else {
        this.buffer = this.writeStruct(r, t, void 0);
        let s = r.getMergedTraits();
        if (s.httpPayload && !s.xmlName) this.buffer.withName(r.getName());
      }
    }
    flush() {
      if (this.byteBuffer !== void 0) {
        let t = this.byteBuffer;
        return delete this.byteBuffer, t;
      }
      if (this.stringBuffer !== void 0) {
        let t = this.stringBuffer;
        return delete this.stringBuffer, t;
      }
      let e = this.buffer;
      if (this.settings.xmlNamespace) {
        if (!e?.attributes?.xmlns) e.addAttribute("xmlns", this.settings.xmlNamespace);
      }
      return delete this.buffer, e.toString();
    }
    writeStruct(e, t, r) {
      let s = e.getMergedTraits(), o = e.isMemberSchema() && !s.httpPayload ? e.getMemberTraits().xmlName ?? e.getMemberName() : s.xmlName ?? e.getName();
      if (!o || !e.isStructSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${e.getName(!0)}.`);
      let a = se.XmlNode.of(o), [c, d] = this.getXmlnsAttribute(e, r);
      for (let [f, m] of e.structIterator()) {
        let y = t[f];
        if (y != null || m.isIdempotencyToken()) {
          if (m.getMergedTraits().xmlAttribute) {
            a.addAttribute(m.getMergedTraits().xmlName ?? f, this.writeSimple(m, y));
            continue;
          }
          if (m.isListSchema()) this.writeList(m, y, a, d); else if (m.isMapSchema()) this.writeMap(m, y, a, d); else if (m.isStructSchema()) a.addChildNode(this.writeStruct(m, y, d)); else {
            let b = se.XmlNode.of(m.getMergedTraits().xmlName ?? m.getMemberName());
            this.writeSimpleInto(m, y, b, d), a.addChildNode(b);
          }
        }
      }
      if (d) a.addAttribute(c, d);
      return a;
    }
    writeList(e, t, r, s) {
      if (!e.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${e.getName(!0)}`);
      let o = e.getMergedTraits(), a = e.getValueSchema(), c = a.getMergedTraits(), d = !!c.sparse, f = !!o.xmlFlattened, [m, y] = this.getXmlnsAttribute(e, s), b = (x, N) => {
        if (a.isListSchema()) this.writeList(a, Array.isArray(N) ? N : [ N ], x, y); else if (a.isMapSchema()) this.writeMap(a, N, x, y); else if (a.isStructSchema()) {
          let T = this.writeStruct(a, N, y);
          x.addChildNode(T.withName(f ? o.xmlName ?? e.getMemberName() : c.xmlName ?? "member"));
        } else {
          let T = se.XmlNode.of(f ? o.xmlName ?? e.getMemberName() : c.xmlName ?? "member");
          this.writeSimpleInto(a, N, T, y), x.addChildNode(T);
        }
      };
      if (f) {
        for (let x of t) if (d || x != null) b(r, x);
      } else {
        let x = se.XmlNode.of(o.xmlName ?? e.getMemberName());
        if (y) x.addAttribute(m, y);
        for (let N of t) if (d || N != null) b(x, N);
        r.addChildNode(x);
      }
    }
    writeMap(e, t, r, s, o = !1) {
      if (!e.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${e.getName(!0)}`);
      let a = e.getMergedTraits(), c = e.getKeySchema(), f = c.getMergedTraits().xmlName ?? "key", m = e.getValueSchema(), y = m.getMergedTraits(), b = y.xmlName ?? "value", x = !!y.sparse, N = !!a.xmlFlattened, [T, I] = this.getXmlnsAttribute(e, s), F = (v, W, M) => {
        let ee = se.XmlNode.of(f, W), [ke, q] = this.getXmlnsAttribute(c, I);
        if (q) ee.addAttribute(ke, q);
        v.addChildNode(ee);
        let K = se.XmlNode.of(b);
        if (m.isListSchema()) this.writeList(m, M, K, I); else if (m.isMapSchema()) this.writeMap(m, M, K, I, !0); else if (m.isStructSchema()) K = this.writeStruct(m, M, I); else this.writeSimpleInto(m, M, K, I);
        v.addChildNode(K);
      };
      if (N) {
        for (let [v, W] of Object.entries(t)) if (x || W != null) {
          let M = se.XmlNode.of(a.xmlName ?? e.getMemberName());
          F(M, v, W), r.addChildNode(M);
        }
      } else {
        let v;
        if (!o) {
          if (v = se.XmlNode.of(a.xmlName ?? e.getMemberName()), I) v.addAttribute(T, I);
          r.addChildNode(v);
        }
        for (let [W, M] of Object.entries(t)) if (x || M != null) {
          let ee = se.XmlNode.of("entry");
          F(ee, W, M), (o ? r : v).addChildNode(ee);
        }
      }
    }
    writeSimple(e, t) {
      if (t === null) throw Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
      let r = U.NormalizedSchema.of(e), s = null;
      if (t && typeof t === "object") if (r.isBlobSchema()) s = (this.serdeContext?.base64Encoder ?? qe.toBase64)(t); else if (r.isTimestampSchema() && t instanceof Date) switch (Y.determineTimestampFormat(r, this.settings)) {
       case 5:
        s = t.toISOString().replace(".000Z", "Z");
        break;

       case 6:
        s = he.dateToUtcString(t);
        break;

       case 7:
        s = String(t.getTime() / 1e3);
        break;

       default:
        console.warn("Missing timestamp format, using http date", t), s = he.dateToUtcString(t);
        break;
      } else if (r.isBigDecimalSchema() && t) {
        if (t instanceof X.NumericValue) return t.string;
        return String(t);
      } else if (r.isMapSchema() || r.isListSchema()) throw Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead."); else throw Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${r.getName(!0)}`);
      if (r.isBooleanSchema() || r.isNumericSchema() || r.isBigIntegerSchema() || r.isBigDecimalSchema()) s = String(t);
      if (r.isStringSchema()) if (t === void 0 && r.isIdempotencyToken()) s = X.generateIdempotencyToken(); else s = String(t);
      if (s === null) throw Error(`Unhandled schema-value pair ${r.getName(!0)}=${t}`);
      return s;
    }
    writeSimpleInto(e, t, r, s) {
      let o = this.writeSimple(e, t), a = U.NormalizedSchema.of(e), c = new se.XmlText(o), [d, f] = this.getXmlnsAttribute(a, s);
      if (f) r.addAttribute(d, f);
      r.addChildNode(c);
    }
    getXmlnsAttribute(e, t) {
      let r = e.getMergedTraits(), [s, o] = r.xmlNamespace ?? [];
      if (o && o !== t) return [ s ? `xmlns:${s}` : "xmlns", o ];
      return [ void 0, void 0 ];
    }
  }
  class xr extends Ee {
    settings;
    constructor(e) {
      super();
      this.settings = e;
    }
    createSerializer() {
      let e = new wr(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
    createDeserializer() {
      let e = new ht(this.settings);
      return e.setSerdeContext(this.serdeContext), e;
    }
  }
  class fi extends Y.HttpBindingProtocol {
    codec;
    serializer;
    deserializer;
    mixin=new Pe;
    constructor(e) {
      super(e);
      let t = {
        timestampFormat: {
          useTrait: !0,
          default: 5
        },
        httpBindings: !0,
        xmlNamespace: e.xmlNamespace,
        serviceNamespace: e.defaultNamespace
      };
      this.codec = new xr(t), this.serializer = new Y.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t), 
      this.deserializer = new Y.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
    }
    getPayloadCodec() {
      return this.codec;
    }
    getShapeId() {
      return "aws.protocols#restXml";
    }
    async serializeRequest(e, t, r) {
      let s = await super.serializeRequest(e, t, r), o = U.NormalizedSchema.of(e.input);
      if (!s.headers["content-type"]) {
        let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
        if (a) s.headers["content-type"] = a;
      }
      if (s.headers["content-type"] === this.getDefaultContentType()) {
        if (typeof s.body === "string") s.body = '<?xml version="1.0" encoding="UTF-8"?>' + s.body;
      }
      return s;
    }
    async deserializeResponse(e, t, r) {
      return super.deserializeResponse(e, t, r);
    }
    async handleError(e, t, r, s, o) {
      let a = hi(r, s) ?? "Unknown", {errorSchema: c, errorMetadata: d} = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o), f = U.NormalizedSchema.of(c), m = s.Error?.message ?? s.Error?.Message ?? s.message ?? s.Message ?? "Unknown", b = new (U.TypeRegistry.for(c[1]).getErrorCtor(c) ?? Error)(m);
      await this.deserializeHttpMessage(c, t, r, s);
      let x = {};
      for (let [N, T] of f.structIterator()) {
        let I = T.getMergedTraits().xmlName ?? N, F = s.Error?.[I] ?? s[I];
        x[N] = this.codec.createDeserializer().readSchema(T, F);
      }
      throw this.mixin.decorateServiceException(Object.assign(b, d, {
        $fault: f.getMergedTraits().error,
        message: m
      }, x), s);
    }
    getDefaultContentType() {
      return "application/xml";
    }
  }
  wd.AwsEc2QueryProtocol = li;
  wd.AwsJson1_0Protocol = oi;
  wd.AwsJson1_1Protocol = ai;
  wd.AwsJsonRpcProtocol = dt;
  wd.AwsQueryProtocol = Sr;
  wd.AwsRestJsonProtocol = ci;
  wd.AwsRestXmlProtocol = fi;
  wd.AwsSmithyRpcV2CborProtocol = si;
  wd.JsonCodec = lt;
  wd.JsonShapeDeserializer = yr;
  wd.JsonShapeSerializer = Er;
  wd.XmlCodec = xr;
  wd.XmlShapeDeserializer = ht;
  wd.XmlShapeSerializer = wr;
  wd._toBool = pd;
  wd._toNum = md;
  wd._toStr = fd;
  wd.awsExpectUnion = Ed;
  wd.loadRestJsonErrorCode = gr;
  wd.loadRestXmlErrorCode = hi;
  wd.parseJsonBody = mr;
  wd.parseJsonErrorBody = yd;
  wd.parseXmlBody = di;
  wd.parseXmlErrorBody = Sd;
});

var Wse = C(function(sh) {
  var Hd = cT(), pi = OP(), Gd = Ym(), Xd = "AWS_EXECUTION_ENV", mi = "AWS_REGION", gi = "AWS_DEFAULT_REGION", Wd = "AWS_EC2_METADATA_DISABLED", Kd = [ "in-region", "cross-region", "mobile", "standard", "legacy" ], Qd = "/latest/meta-data/placement/region", Yd = "AWS_DEFAULTS_MODE", Jd = "defaults_mode", Zd = {
    environmentVariableSelector: e => e[Yd],
    configFileSelector: e => e[Jd],
    default: "legacy"
  }, eh = ({region: e = pi.loadConfig(Hd.NODE_REGION_CONFIG_OPTIONS), defaultsMode: t = pi.loadConfig(Zd)} = {}) => Gd.memoize(async () => {
    let r = typeof t === "function" ? await t() : t;
    switch (r?.toLowerCase()) {
     case "auto":
      return th(e);

     case "in-region":
     case "cross-region":
     case "mobile":
     case "standard":
     case "legacy":
      return Promise.resolve(r?.toLocaleLowerCase());

     case void 0:
      return Promise.resolve("legacy");

     default:
      throw Error(`Invalid parameter for "defaultsMode", expect ${Kd.join(", ")}, got ${r}`);
    }
  }), th = async e => {
    if (e) {
      let t = typeof e === "function" ? await e() : e, r = await rh();
      if (!r) return "standard";
      if (t === r) return "in-region"; else return "cross-region";
    }
    return "standard";
  }, rh = async () => {
    if (process.env[Xd] && (process.env[mi] || process.env[gi])) return process.env[mi] ?? process.env[gi];
    if (!process.env[Wd]) try {
      let {getInstanceMetadataEndpoint: e, httpRequest: t} = await import("./chunk-rkwvs1ne.js"), r = await e();
      return (await t({
        ...r,
        path: Qd
      })).toString();
    } catch (e) {}
  };
  sh.resolveDefaultsModeConfig = eh;
});

var Si = C(function(Ei) {
  Object.defineProperty(Ei, "__esModule", {
    value: !0
  });
  Ei.warning = void 0;
  Ei.stsRegionDefaultResolver = ih;
  var ft = cT(), yi = OP();
  function ih(e = {}) {
    return yi.loadConfig({
      ...ft.NODE_REGION_CONFIG_OPTIONS,
      async default() {
        if (!Ei.warning.silence) console.warn("@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly.");
        return "us-east-1";
      }
    }, {
      ...ft.NODE_REGION_CONFIG_FILE_OPTIONS,
      ...e
    });
  }
  Ei.warning = {
    silence: !1
  };
});

var gZ = C(function(Se) {
  var He = cT(), wi = Si(), ah = e => ({
    setRegion(t) {
      e.region = t;
    },
    region() {
      return e.region;
    }
  }), ch = e => ({
    region: e.region()
  });
  Object.defineProperty(Se, "NODE_REGION_CONFIG_FILE_OPTIONS", {
    enumerable: !0,
    get: function() {
      return He.NODE_REGION_CONFIG_FILE_OPTIONS;
    }
  });
  Object.defineProperty(Se, "NODE_REGION_CONFIG_OPTIONS", {
    enumerable: !0,
    get: function() {
      return He.NODE_REGION_CONFIG_OPTIONS;
    }
  });
  Object.defineProperty(Se, "REGION_ENV_NAME", {
    enumerable: !0,
    get: function() {
      return He.REGION_ENV_NAME;
    }
  });
  Object.defineProperty(Se, "REGION_INI_NAME", {
    enumerable: !0,
    get: function() {
      return He.REGION_INI_NAME;
    }
  });
  Object.defineProperty(Se, "resolveRegionConfig", {
    enumerable: !0,
    get: function() {
      return He.resolveRegionConfig;
    }
  });
  Se.getAwsRegionExtensionConfiguration = ah;
  Se.resolveAwsRegionExtensionConfiguration = ch;
  Object.keys(wi).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(Se, e)) Object.defineProperty(Se, e, {
      enumerable: !0,
      get: function() {
        return wi[e];
      }
    });
  });
});

export { Dse, Lse, Nse, pZ, XT, fZ, $se, $1, mZ, YF, Fse, Use, Bse, jse, Wse, gZ };
