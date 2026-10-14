// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { bhe, mqr, n4, C2t, hne, _i, _Te, Uwn, zwn, Gwn, She, R2t, Vwn, Kwn, qwn, Ywn, Xwn, Jwn, hqr, ii } from "./chunk-qjb8dzm4.js";

import { bm, nNn } from "./chunk-ygsdtp4w.js";

import { cqn } from "./chunk-cvcg6n1z.js";

import { we, C } from "./chunk-m8ez8fhk.js";

var X = C(function(W) {
  Object.defineProperty(W, "__esModule", {
    value: !0
  });
  W.formatNames = W.fastFormats = W.fullFormats = void 0;
  function k(e, t) {
    return {
      validate: e,
      compare: t
    };
  }
  W.fullFormats = {
    date: k(Q, N),
    time: k(E(!0), O),
    "date-time": k(U(!0), K),
    "iso-time": k(E(), B),
    "iso-date-time": k(U(), G),
    duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
    uri: Se,
    "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
    "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
    ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
    regex: Re,
    uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
    "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    byte: Pe,
    int32: {
      type: "number",
      validate: $e
    },
    int64: {
      type: "number",
      validate: De
    },
    float: {
      type: "number",
      validate: J
    },
    double: {
      type: "number",
      validate: J
    },
    password: !0,
    binary: !0
  };
  W.fastFormats = {
    ...W.fullFormats,
    date: k(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, N),
    time: k(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, O),
    "date-time": k(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, K),
    "iso-time": k(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, B),
    "iso-date-time": k(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, G),
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
  };
  W.formatNames = Object.keys(W.fullFormats);
  function _e(e) {
    return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
  }
  var ke = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, ve = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  function Q(e) {
    let t = ke.exec(e);
    if (!t) return !1;
    let r = +t[1], a = +t[2], n = +t[3];
    return a >= 1 && a <= 12 && n >= 1 && n <= (a === 2 && _e(r) ? 29 : ve[a]);
  }
  function N(e, t) {
    if (!(e && t)) return;
    if (e > t) return 1;
    if (e < t) return -1;
    return 0;
  }
  var z = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
  function E(e) {
    return function(r) {
      let a = z.exec(r);
      if (!a) return !1;
      let n = +a[1], s = +a[2], o = +a[3], u = a[4], p = a[5] === "-" ? -1 : 1, i = +(a[6] || 0), c = +(a[7] || 0);
      if (i > 23 || c > 59 || e && !u) return !1;
      if (n <= 23 && s <= 59 && o < 60) return !0;
      let d = s - c * p, f = n - i * p - (d < 0 ? 1 : 0);
      return (f === 23 || f === -1) && (d === 59 || d === -1) && o < 61;
    };
  }
  function O(e, t) {
    if (!(e && t)) return;
    let r = new Date("2020-01-01T" + e).valueOf(), a = new Date("2020-01-01T" + t).valueOf();
    if (!(r && a)) return;
    return r - a;
  }
  function B(e, t) {
    if (!(e && t)) return;
    let r = z.exec(e), a = z.exec(t);
    if (!(r && a)) return;
    if (e = r[1] + r[2] + r[3], t = a[1] + a[2] + a[3], e > t) return 1;
    if (e < t) return -1;
    return 0;
  }
  var M = /t|\s/i;
  function U(e) {
    let t = E(e);
    return function(a) {
      let n = a.split(M);
      return n.length === 2 && Q(n[0]) && t(n[1]);
    };
  }
  function K(e, t) {
    if (!(e && t)) return;
    let r = new Date(e).valueOf(), a = new Date(t).valueOf();
    if (!(r && a)) return;
    return r - a;
  }
  function G(e, t) {
    if (!(e && t)) return;
    let [r, a] = e.split(M), [n, s] = t.split(M), o = N(r, n);
    if (o === void 0) return;
    return o || O(a, s);
  }
  var Te = /\/|:/, be = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  function Se(e) {
    return Te.test(e) && be.test(e);
  }
  var V = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
  function Pe(e) {
    return V.lastIndex = 0, V.test(e);
  }
  var xe = -2147483648, Ae = 2147483647;
  function $e(e) {
    return Number.isInteger(e) && e <= Ae && e >= xe;
  }
  function De(e) {
    return Number.isInteger(e);
  }
  function J() {
    return !0;
  }
  var Ie = /[^\\]\\Z/;
  function Re(e) {
    if (Ie.test(e)) return !1;
    try {
      return new RegExp(e), !0;
    } catch (t) {
      return !1;
    }
  }
});

var re = C(function(te) {
  Object.defineProperty(te, "__esModule", {
    value: !0
  });
  te.formatLimitDefinition = void 0;
  var ee = nNn(), l = bm(), b = l.operators, D = {
    formatMaximum: {
      okStr: "<=",
      ok: b.LTE,
      fail: b.GT
    },
    formatMinimum: {
      okStr: ">=",
      ok: b.GTE,
      fail: b.LT
    },
    formatExclusiveMaximum: {
      okStr: "<",
      ok: b.LT,
      fail: b.GTE
    },
    formatExclusiveMinimum: {
      okStr: ">",
      ok: b.GT,
      fail: b.LTE
    }
  }, Ee = {
    message: ({keyword: e, schemaCode: t}) => l.str`should be ${D[e].okStr} ${t}`,
    params: ({keyword: e, schemaCode: t}) => l._`{comparison: ${D[e].okStr}, limit: ${t}}`
  };
  te.formatLimitDefinition = {
    keyword: Object.keys(D),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: Ee,
    code(e) {
      let {gen: t, data: r, schemaCode: a, keyword: n, it: s} = e, {opts: o, self: u} = s;
      if (!o.validateFormats) return;
      let p = new ee.KeywordCxt(s, u.RULES.all.format.definition, "format");
      if (p.$data) i(); else c();
      function i() {
        let f = t.scopeValue("formats", {
          ref: u.formats,
          code: o.code.formats
        }), m = t.const("fmt", l._`${f}[${p.schemaCode}]`);
        e.fail$data(l.or(l._`typeof ${m} != "object"`, l._`${m} instanceof RegExp`, l._`typeof ${m}.compare != "function"`, d(m)));
      }
      function c() {
        let f = p.schema, m = u.formats[f];
        if (!m || m === !0) return;
        if (typeof m != "object" || m instanceof RegExp || typeof m.compare != "function") throw Error(`"${n}": format "${f}" does not define "compare" function`);
        let x = t.scopeValue("formats", {
          key: f,
          ref: m,
          code: o.code.formats ? l._`${o.code.formats}${l.getProperty(f)}` : void 0
        });
        e.fail$data(d(x));
      }
      function d(f) {
        return l._`${f}.compare(${r}, ${a}) ${D[n].fail} 0`;
      }
    },
    dependencies: [ "format" ]
  };
  var Me = e => (e.addKeyword(te.formatLimitDefinition), e);
  te.default = Me;
});

var oe = C(function(P, se) {
  Object.defineProperty(P, "__esModule", {
    value: !0
  });
  var y = X(), Oe = re(), w = bm(), ae = new w.Name("fullFormats"), je = new w.Name("fastFormats"), Z = (e, t = {
    keywords: !0
  }) => {
    if (Array.isArray(t)) return ne(e, t, y.fullFormats, ae), e;
    let [r, a] = t.mode === "fast" ? [ y.fastFormats, je ] : [ y.fullFormats, ae ], n = t.formats || y.formatNames;
    if (ne(e, n, r, a), t.keywords) (0, Oe.default)(e);
    return e;
  };
  Z.get = (e, t = "full") => {
    let a = (t === "fast" ? y.fastFormats : y.fullFormats)[e];
    if (!a) throw Error(`Unknown format "${e}"`);
    return a;
  };
  function ne(e, t, r, a) {
    var n, s;
    (n = (s = e.opts.code).formats) !== null && n !== void 0 || (s.formats = w._`require("ajv-formats/dist/formats").${a}`);
    for (let o of t) e.addFormat(o, r[o]);
  }
  se.exports = P = Z;
  Object.defineProperty(P, "__esModule", {
    value: !0
  });
  P.default = Z;
});

function g2e(e) {
  return !!e._zod;
}

function j6(e, t) {
  if (g2e(e)) return cqn(e, t);
  return e.safeParse(t);
}

function Ewt(e) {
  if (!e) return;
  let t;
  if (g2e(e)) t = e._zod?.def?.shape; else t = e.shape;
  if (!t) return;
  if (typeof t === "function") try {
    return t();
  } catch {
    return;
  }
  return t;
}

function H(e) {
  if (g2e(e)) {
    let s = e._zod?.def;
    if (s) {
      if (s.value !== void 0) return s.value;
      if (Array.isArray(s.values) && s.values.length > 0) return s.values[0];
    }
  }
  let r = e._def;
  if (r) {
    if (r.value !== void 0) return r.value;
    if (Array.isArray(r.values) && r.values.length > 0) return r.values[0];
  }
  let a = e.value;
  if (a !== void 0) return a;
  return;
}

function T(e) {
  return e === "completed" || e === "failed" || e === "cancelled";
}

var fe = Symbol("Let zodToJsonSchema decide on which parser to use");

var Et = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");

function I(e) {
  let r = Ewt(e)?.method;
  if (!r) throw Error("Schema is missing a method literal");
  let a = H(r);
  if (typeof a !== "string") throw Error("Schema method literal must be a string");
  return a;
}

function R(e, t) {
  let r = j6(e, t);
  if (!r.success) throw r.error;
  return r.data;
}

var ye = 6e4;

class T2t {
  constructor(e) {
    if (this._options = e, this._requestMessageId = 0, this._requestHandlers = new Map, 
    this._requestHandlerAbortControllers = new Map, this._notificationHandlers = new Map, 
    this._responseHandlers = new Map, this._progressHandlers = new Map, this._timeoutInfo = new Map, 
    this._pendingDebouncedNotifications = new Set, this._taskProgressTokens = new Map, 
    this._requestResolvers = new Map, this.setNotificationHandler(Uwn, t => {
      this._oncancel(t);
    }), this.setNotificationHandler(Gwn, t => {
      this._onprogress(t);
    }), this.setRequestHandler(zwn, t => ({})), this._taskStore = e?.taskStore, this._taskMessageQueue = e?.taskMessageQueue, 
    this._taskStore) this.setRequestHandler(Vwn, async (t, r) => {
      let a = await this._taskStore.getTask(t.params.taskId, r.sessionId);
      if (!a) throw new ii(_i.InvalidParams, "Failed to retrieve task: Task not found");
      return {
        ...a
      };
    }), this.setRequestHandler(qwn, async (t, r) => {
      let a = async () => {
        let n = t.params.taskId;
        if (this._taskMessageQueue) {
          let o;
          while (o = await this._taskMessageQueue.dequeue(n, r.sessionId)) {
            if (o.type === "response" || o.type === "error") {
              let u = o.message, p = u.id, i = this._requestResolvers.get(p);
              if (i) if (this._requestResolvers.delete(p), o.type === "response") i(u); else {
                let c = u, d = new ii(c.error.code, c.error.message, c.error.data);
                i(d);
              } else {
                let c = o.type === "response" ? "Response" : "Error";
                this._onerror(Error(`${c} handler missing for request ${p}`));
              }
              continue;
            }
            await (this._transport?.send(o.message, {
              relatedRequestId: r.requestId
            }));
          }
        }
        let s = await this._taskStore.getTask(n, r.sessionId);
        if (!s) throw new ii(_i.InvalidParams, `Task not found: ${n}`);
        if (!T(s.status)) return await this._waitForTaskUpdate(n, r.signal), await a();
        if (T(s.status)) {
          let o = await this._taskStore.getTaskResult(n, r.sessionId);
          return this._clearTaskQueue(n), {
            ...o,
            _meta: {
              ...o._meta,
              [bhe]: {
                taskId: n
              }
            }
          };
        }
        return await a();
      };
      return await a();
    }), this.setRequestHandler(Ywn, async (t, r) => {
      try {
        let {tasks: a, nextCursor: n} = await this._taskStore.listTasks(t.params?.cursor, r.sessionId);
        return {
          tasks: a,
          nextCursor: n,
          _meta: {}
        };
      } catch (a) {
        throw new ii(_i.InvalidParams, `Failed to list tasks: ${a instanceof Error ? a.message : String(a)}`);
      }
    }), this.setRequestHandler(Jwn, async (t, r) => {
      try {
        let a = await this._taskStore.getTask(t.params.taskId, r.sessionId);
        if (!a) throw new ii(_i.InvalidParams, `Task not found: ${t.params.taskId}`);
        if (T(a.status)) throw new ii(_i.InvalidParams, `Cannot cancel task in terminal status: ${a.status}`);
        await this._taskStore.updateTaskStatus(t.params.taskId, "cancelled", "Client cancelled task execution.", r.sessionId), 
        this._clearTaskQueue(t.params.taskId);
        let n = await this._taskStore.getTask(t.params.taskId, r.sessionId);
        if (!n) throw new ii(_i.InvalidParams, `Task not found after cancellation: ${t.params.taskId}`);
        return {
          _meta: {},
          ...n
        };
      } catch (a) {
        if (a instanceof ii) throw a;
        throw new ii(_i.InvalidRequest, `Failed to cancel task: ${a instanceof Error ? a.message : String(a)}`);
      }
    });
  }
  async _oncancel(e) {
    if (!e.params.requestId) return;
    this._requestHandlerAbortControllers.get(e.params.requestId)?.abort(e.params.reason);
  }
  _setupTimeout(e, t, r, a, n = !1) {
    this._timeoutInfo.set(e, {
      timeoutId: setTimeout(a, t),
      startTime: Date.now(),
      timeout: t,
      maxTotalTimeout: r,
      resetTimeoutOnProgress: n,
      onTimeout: a
    });
  }
  _resetTimeout(e) {
    let t = this._timeoutInfo.get(e);
    if (!t) return !1;
    let r = Date.now() - t.startTime;
    if (t.maxTotalTimeout && r >= t.maxTotalTimeout) throw this._timeoutInfo.delete(e), 
    ii.fromError(_i.RequestTimeout, "Maximum total timeout exceeded", {
      maxTotalTimeout: t.maxTotalTimeout,
      totalElapsed: r
    });
    return clearTimeout(t.timeoutId), t.timeoutId = setTimeout(t.onTimeout, t.timeout), 
    !0;
  }
  _cleanupTimeout(e) {
    let t = this._timeoutInfo.get(e);
    if (t) clearTimeout(t.timeoutId), this._timeoutInfo.delete(e);
  }
  async connect(e) {
    if (this._transport) throw Error("Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.");
    this._transport = e;
    let t = this.transport?.onclose;
    this._transport.onclose = () => {
      t?.(), this._onclose();
    };
    let r = this.transport?.onerror;
    this._transport.onerror = n => {
      r?.(n), this._onerror(n);
    };
    let a = this._transport?.onmessage;
    this._transport.onmessage = (n, s) => {
      if (a?.(n, s), hne(n) || _Te(n)) this._onresponse(n); else if (n4(n)) this._onrequest(n, s); else if (C2t(n)) this._onnotification(n); else this._onerror(Error(`Unknown message type: ${JSON.stringify(n)}`));
    }, await this._transport.start();
  }
  _onclose() {
    let e = this._responseHandlers;
    this._responseHandlers = new Map, this._progressHandlers.clear(), this._taskProgressTokens.clear(), 
    this._pendingDebouncedNotifications.clear();
    for (let r of this._timeoutInfo.values()) clearTimeout(r.timeoutId);
    this._timeoutInfo.clear();
    for (let r of this._requestHandlerAbortControllers.values()) r.abort();
    this._requestHandlerAbortControllers.clear();
    let t = ii.fromError(_i.ConnectionClosed, "Connection closed");
    this._transport = void 0, this.onclose?.();
    for (let r of e.values()) r(t);
  }
  _onerror(e) {
    this.onerror?.(e);
  }
  _onnotification(e) {
    let t = this._notificationHandlers.get(e.method) ?? this.fallbackNotificationHandler;
    if (t === void 0) return;
    Promise.resolve().then(() => t(e)).catch(r => this._onerror(Error(`Uncaught error in notification handler: ${r}`)));
  }
  _onrequest(e, t) {
    let r = this._requestHandlers.get(e.method) ?? this.fallbackRequestHandler, a = this._transport, n = e.params?._meta?.[bhe]?.taskId;
    if (r === void 0) {
      let i = {
        jsonrpc: "2.0",
        id: e.id,
        error: {
          code: _i.MethodNotFound,
          message: "Method not found"
        }
      };
      if (n && this._taskMessageQueue) this._enqueueTaskMessage(n, {
        type: "error",
        message: i,
        timestamp: Date.now()
      }, a?.sessionId).catch(c => this._onerror(Error(`Failed to enqueue error response: ${c}`))); else a?.send(i).catch(c => this._onerror(Error(`Failed to send an error response: ${c}`)));
      return;
    }
    let s = new AbortController;
    this._requestHandlerAbortControllers.set(e.id, s);
    let o = mqr(e.params) ? e.params.task : void 0, u = this._taskStore ? this.requestTaskStore(e, a?.sessionId) : void 0, p = {
      signal: s.signal,
      sessionId: a?.sessionId,
      _meta: e.params?._meta,
      sendNotification: async i => {
        if (s.signal.aborted) return;
        let c = {
          relatedRequestId: e.id
        };
        if (n) c.relatedTask = {
          taskId: n
        };
        await this.notification(i, c);
      },
      sendRequest: async (i, c, d) => {
        if (s.signal.aborted) throw new ii(_i.ConnectionClosed, "Request was cancelled");
        let f = {
          ...d,
          relatedRequestId: e.id
        };
        if (n && !f.relatedTask) f.relatedTask = {
          taskId: n
        };
        let m = f.relatedTask?.taskId ?? n;
        if (m && u) await u.updateTaskStatus(m, "input_required");
        return await this.request(i, c, f);
      },
      authInfo: t?.authInfo,
      requestId: e.id,
      requestInfo: t?.requestInfo,
      taskId: n,
      taskStore: u,
      taskRequestedTtl: o?.ttl,
      closeSSEStream: t?.closeSSEStream,
      closeStandaloneSSEStream: t?.closeStandaloneSSEStream
    };
    Promise.resolve().then(() => {
      if (o) this.assertTaskHandlerCapability(e.method);
    }).then(() => r(e, p)).then(async i => {
      if (s.signal.aborted) return;
      let c = {
        result: i,
        jsonrpc: "2.0",
        id: e.id
      };
      if (n && this._taskMessageQueue) await this._enqueueTaskMessage(n, {
        type: "response",
        message: c,
        timestamp: Date.now()
      }, a?.sessionId); else await (a?.send(c));
    }, async i => {
      if (s.signal.aborted) return;
      let c = {
        jsonrpc: "2.0",
        id: e.id,
        error: {
          code: Number.isSafeInteger(i.code) ? i.code : _i.InternalError,
          message: i.message ?? "Internal error",
          ...i.data !== void 0 && {
            data: i.data
          }
        }
      };
      if (n && this._taskMessageQueue) await this._enqueueTaskMessage(n, {
        type: "error",
        message: c,
        timestamp: Date.now()
      }, a?.sessionId); else await (a?.send(c));
    }).catch(i => this._onerror(Error(`Failed to send response: ${i}`))).finally(() => {
      if (this._requestHandlerAbortControllers.get(e.id) === s) this._requestHandlerAbortControllers.delete(e.id);
    });
  }
  _onprogress(e) {
    let {progressToken: t, ...r} = e.params, a = Number(t), n = this._progressHandlers.get(a);
    if (!n) {
      this._onerror(Error(`Received a progress notification for an unknown token: ${JSON.stringify(e)}`));
      return;
    }
    let s = this._responseHandlers.get(a), o = this._timeoutInfo.get(a);
    if (o && s && o.resetTimeoutOnProgress) try {
      this._resetTimeout(a);
    } catch (u) {
      this._responseHandlers.delete(a), this._progressHandlers.delete(a), this._cleanupTimeout(a), 
      s(u);
      return;
    }
    n(r);
  }
  _onresponse(e) {
    let t = Number(e.id), r = this._requestResolvers.get(t);
    if (r) {
      if (this._requestResolvers.delete(t), hne(e)) r(e); else {
        let s = new ii(e.error.code, e.error.message, e.error.data);
        r(s);
      }
      return;
    }
    let a = this._responseHandlers.get(t);
    if (a === void 0) {
      this._onerror(Error(`Received a response for an unknown message ID: ${JSON.stringify(e)}`));
      return;
    }
    this._responseHandlers.delete(t), this._cleanupTimeout(t);
    let n = !1;
    if (hne(e) && e.result && typeof e.result === "object") {
      let s = e.result;
      if (s.task && typeof s.task === "object") {
        let o = s.task;
        if (typeof o.taskId === "string") n = !0, this._taskProgressTokens.set(o.taskId, t);
      }
    }
    if (!n) this._progressHandlers.delete(t);
    if (hne(e)) a(e); else {
      let s = ii.fromError(e.error.code, e.error.message, e.error.data);
      a(s);
    }
  }
  get transport() {
    return this._transport;
  }
  async close() {
    await (this._transport?.close());
  }
  async* requestStream(e, t, r) {
    let {task: a} = r ?? {};
    if (!a) {
      try {
        yield {
          type: "result",
          result: await this.request(e, t, r)
        };
      } catch (s) {
        yield {
          type: "error",
          error: s instanceof ii ? s : new ii(_i.InternalError, String(s))
        };
      }
      return;
    }
    let n;
    try {
      let s = await this.request(e, She, r);
      if (s.task) n = s.task.taskId, yield {
        type: "taskCreated",
        task: s.task
      }; else throw new ii(_i.InternalError, "Task creation did not return a task");
      while (!0) {
        let o = await this.getTask({
          taskId: n
        }, r);
        if (yield {
          type: "taskStatus",
          task: o
        }, T(o.status)) {
          if (o.status === "completed") yield {
            type: "result",
            result: await this.getTaskResult({
              taskId: n
            }, t, r)
          }; else if (o.status === "failed") yield {
            type: "error",
            error: new ii(_i.InternalError, `Task ${n} failed`)
          }; else if (o.status === "cancelled") yield {
            type: "error",
            error: new ii(_i.InternalError, `Task ${n} was cancelled`)
          };
          return;
        }
        if (o.status === "input_required") {
          yield {
            type: "result",
            result: await this.getTaskResult({
              taskId: n
            }, t, r)
          };
          return;
        }
        let u = o.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1e3;
        await new Promise(p => setTimeout(p, u)), r?.signal?.throwIfAborted();
      }
    } catch (s) {
      yield {
        type: "error",
        error: s instanceof ii ? s : new ii(_i.InternalError, String(s))
      };
    }
  }
  request(e, t, r) {
    let {relatedRequestId: a, resumptionToken: n, onresumptiontoken: s, task: o, relatedTask: u} = r ?? {};
    return new Promise((p, i) => {
      let c = g => {
        i(g);
      };
      if (!this._transport) {
        c(Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === !0) try {
        if (this.assertCapabilityForMethod(e.method), o) this.assertTaskCapability(e.method);
      } catch (g) {
        c(g);
        return;
      }
      r?.signal?.throwIfAborted();
      let d = this._requestMessageId++, f = {
        ...e,
        jsonrpc: "2.0",
        id: d
      };
      if (r?.onprogress) this._progressHandlers.set(d, r.onprogress), f.params = {
        ...e.params,
        _meta: {
          ...e.params?._meta || {},
          progressToken: d
        }
      };
      if (o) f.params = {
        ...f.params,
        task: o
      };
      if (u) f.params = {
        ...f.params,
        _meta: {
          ...f.params?._meta || {},
          [bhe]: u
        }
      };
      let m = g => {
        this._responseHandlers.delete(d), this._progressHandlers.delete(d), this._cleanupTimeout(d), 
        this._transport?.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: d,
            reason: String(g)
          }
        }, {
          relatedRequestId: a,
          resumptionToken: n,
          onresumptiontoken: s
        }).catch(A => this._onerror(Error(`Failed to send cancellation: ${A}`)));
        let _ = g instanceof ii ? g : new ii(_i.RequestTimeout, String(g));
        i(_);
      };
      this._responseHandlers.set(d, g => {
        if (r?.signal?.aborted) return;
        if (g instanceof Error) return i(g);
        try {
          let _ = j6(t, g.result);
          if (!_.success) i(_.error); else p(_.data);
        } catch (_) {
          i(_);
        }
      }), r?.signal?.addEventListener("abort", () => {
        m(r?.signal?.reason);
      });
      let x = r?.timeout ?? ye, ce = () => m(ii.fromError(_i.RequestTimeout, "Request timed out", {
        timeout: x
      }));
      this._setupTimeout(d, x, r?.maxTotalTimeout, ce, r?.resetTimeoutOnProgress ?? !1);
      let F = u?.taskId;
      if (F) {
        let g = _ => {
          let A = this._responseHandlers.get(d);
          if (A) A(_); else this._onerror(Error(`Response handler missing for side-channeled request ${d}`));
        };
        this._requestResolvers.set(d, g), this._enqueueTaskMessage(F, {
          type: "request",
          message: f,
          timestamp: Date.now()
        }).catch(_ => {
          this._cleanupTimeout(d), i(_);
        });
      } else this._transport.send(f, {
        relatedRequestId: a,
        resumptionToken: n,
        onresumptiontoken: s
      }).catch(g => {
        this._cleanupTimeout(d), i(g);
      });
    });
  }
  async getTask(e, t) {
    return this.request({
      method: "tasks/get",
      params: e
    }, Kwn, t);
  }
  async getTaskResult(e, t, r) {
    return this.request({
      method: "tasks/result",
      params: e
    }, t, r);
  }
  async listTasks(e, t) {
    return this.request({
      method: "tasks/list",
      params: e
    }, Xwn, t);
  }
  async cancelTask(e, t) {
    return this.request({
      method: "tasks/cancel",
      params: e
    }, hqr, t);
  }
  async notification(e, t) {
    if (!this._transport) throw Error("Not connected");
    this.assertNotificationCapability(e.method);
    let r = t?.relatedTask?.taskId;
    if (r) {
      let o = {
        ...e,
        jsonrpc: "2.0",
        params: {
          ...e.params,
          _meta: {
            ...e.params?._meta || {},
            [bhe]: t.relatedTask
          }
        }
      };
      await this._enqueueTaskMessage(r, {
        type: "notification",
        message: o,
        timestamp: Date.now()
      });
      return;
    }
    if ((this._options?.debouncedNotificationMethods ?? []).includes(e.method) && !e.params && !t?.relatedRequestId && !t?.relatedTask) {
      if (this._pendingDebouncedNotifications.has(e.method)) return;
      this._pendingDebouncedNotifications.add(e.method), Promise.resolve().then(() => {
        if (this._pendingDebouncedNotifications.delete(e.method), !this._transport) return;
        let o = {
          ...e,
          jsonrpc: "2.0"
        };
        if (t?.relatedTask) o = {
          ...o,
          params: {
            ...o.params,
            _meta: {
              ...o.params?._meta || {},
              [bhe]: t.relatedTask
            }
          }
        };
        this._transport?.send(o, t).catch(u => this._onerror(u));
      });
      return;
    }
    let s = {
      ...e,
      jsonrpc: "2.0"
    };
    if (t?.relatedTask) s = {
      ...s,
      params: {
        ...s.params,
        _meta: {
          ...s.params?._meta || {},
          [bhe]: t.relatedTask
        }
      }
    };
    await this._transport.send(s, t);
  }
  setRequestHandler(e, t) {
    let r = I(e);
    this.assertRequestHandlerCapability(r), this._requestHandlers.set(r, (a, n) => {
      let s = R(e, a);
      return Promise.resolve(t(s, n));
    });
  }
  removeRequestHandler(e) {
    this._requestHandlers.delete(e);
  }
  assertCanSetRequestHandler(e) {
    if (this._requestHandlers.has(e)) throw Error(`A request handler for ${e} already exists, which would be overridden`);
  }
  setNotificationHandler(e, t) {
    let r = I(e);
    this._notificationHandlers.set(r, a => {
      let n = R(e, a);
      return Promise.resolve(t(n));
    });
  }
  removeNotificationHandler(e) {
    this._notificationHandlers.delete(e);
  }
  _cleanupTaskProgressHandler(e) {
    let t = this._taskProgressTokens.get(e);
    if (t !== void 0) this._progressHandlers.delete(t), this._taskProgressTokens.delete(e);
  }
  async _enqueueTaskMessage(e, t, r) {
    if (!this._taskStore || !this._taskMessageQueue) throw Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
    let a = this._options?.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue(e, t, r, a);
  }
  async _clearTaskQueue(e, t) {
    if (this._taskMessageQueue) {
      let r = await this._taskMessageQueue.dequeueAll(e, t);
      for (let a of r) if (a.type === "request" && n4(a.message)) {
        let n = a.message.id, s = this._requestResolvers.get(n);
        if (s) s(new ii(_i.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(n); else this._onerror(Error(`Resolver missing for request ${n} during task ${e} cleanup`));
      }
    }
  }
  async _waitForTaskUpdate(e, t) {
    let r = this._options?.defaultTaskPollInterval ?? 1e3;
    try {
      let a = await (this._taskStore?.getTask(e));
      if (a?.pollInterval) r = a.pollInterval;
    } catch {}
    return new Promise((a, n) => {
      if (t.aborted) {
        n(new ii(_i.InvalidRequest, "Request cancelled"));
        return;
      }
      let s = setTimeout(a, r);
      t.addEventListener("abort", () => {
        clearTimeout(s), n(new ii(_i.InvalidRequest, "Request cancelled"));
      }, {
        once: !0
      });
    });
  }
  requestTaskStore(e, t) {
    let r = this._taskStore;
    if (!r) throw Error("No task store configured");
    return {
      createTask: async a => {
        if (!e) throw Error("No request provided");
        return await r.createTask(a, e.id, {
          method: e.method,
          params: e.params
        }, t);
      },
      getTask: async a => {
        let n = await r.getTask(a, t);
        if (!n) throw new ii(_i.InvalidParams, "Failed to retrieve task: Task not found");
        return n;
      },
      storeTaskResult: async (a, n, s) => {
        await r.storeTaskResult(a, n, s, t);
        let o = await r.getTask(a, t);
        if (o) {
          let u = R2t.parse({
            method: "notifications/tasks/status",
            params: o
          });
          if (await this.notification(u), T(o.status)) this._cleanupTaskProgressHandler(a);
        }
      },
      getTaskResult: a => r.getTaskResult(a, t),
      updateTaskStatus: async (a, n, s) => {
        let o = await r.getTask(a, t);
        if (!o) throw new ii(_i.InvalidParams, `Task "${a}" not found - it may have been cleaned up`);
        if (T(o.status)) throw new ii(_i.InvalidParams, `Cannot update task "${a}" from terminal status "${o.status}" to "${n}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        await r.updateTaskStatus(a, n, s, t);
        let u = await r.getTask(a, t);
        if (u) {
          let p = R2t.parse({
            method: "notifications/tasks/status",
            params: u
          });
          if (await this.notification(p), T(u.status)) this._cleanupTaskProgressHandler(a);
        }
      },
      listTasks: a => r.listTasks(a, t)
    };
  }
}

function L(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}

function Nwn(e, t) {
  let r = {
    ...e
  };
  for (let a in t) {
    let n = a, s = t[n];
    if (s === void 0) continue;
    let o = r[n];
    if (L(o) && L(s)) r[n] = {
      ...o,
      ...s
    }; else r[n] = s;
  }
  return r;
}

var ie = we(nNn(), 1), ue = we(oe(), 1);

function qe() {
  let e = new ie.default({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0
  });
  return ue.default(e), e;
}

class A2t {
  constructor(e) {
    this._ajv = e ?? qe();
  }
  getValidator(e) {
    let t = "$id" in e && typeof e.$id === "string" ? this._ajv.getSchema(e.$id) ?? this._ajv.compile(e) : this._ajv.compile(e);
    return r => {
      if (t(r)) return {
        valid: !0,
        data: r,
        errorMessage: void 0
      }; else return {
        valid: !1,
        data: void 0,
        errorMessage: this._ajv.errorsText(t.errors)
      };
    };
  }
}

function $wn(e, t, r) {
  if (!e) throw Error(`${r} does not support task creation (required for ${t})`);
  switch (t) {
   case "tools/call":
    if (!e.tools?.call) throw Error(`${r} does not support task creation for tools/call (required for ${t})`);
    break;

   default:
    break;
  }
}

function Fwn(e, t, r) {
  if (!e) throw Error(`${r} does not support task creation (required for ${t})`);
  switch (t) {
   case "sampling/createMessage":
    if (!e.sampling?.createMessage) throw Error(`${r} does not support task creation for sampling/createMessage (required for ${t})`);
    break;

   case "elicitation/create":
    if (!e.elicitation?.create) throw Error(`${r} does not support task creation for elicitation/create (required for ${t})`);
    break;

   default:
    break;
  }
}

export { g2e, j6, Ewt, T2t, Nwn, A2t, $wn, Fwn };
