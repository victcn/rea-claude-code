// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
function $Or(e) {
  let t = Object.values(e).filter(n => typeof n === "number");
  return Object.entries(e).filter(([n, i]) => t.indexOf(+n) === -1).map(([n, i]) => i);
}

function iOo(e, t = "|") {
  return e.map(r => dOo(r)).join(t);
}

function gqn(e, t) {
  if (typeof t === "bigint") return t.toString();
  return t;
}

function hqn(e) {
  return {
    get value() {
      {
        let r = e();
        return Object.defineProperty(this, "value", {
          value: r
        }), r;
      }
      throw Error("cached value already set");
    }
  };
}

function GNs(e) {
  return e === null || e === void 0;
}

function Can(e) {
  let t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}

function VNs(e, t) {
  let r = e / t, n = Math.round(r), i = 4 * Number.EPSILON * Math.max(Math.abs(r), 1);
  if (Math.abs(r - n) < i) return 0;
  return r - n;
}

var j = Symbol("evaluating");

function Ran(e, t, r) {
  let n = void 0;
  Object.defineProperty(e, t, {
    get() {
      if (n === j) return;
      if (n === void 0) n = j, n = r();
      return n;
    },
    set(i) {
      Object.defineProperty(e, t, {
        value: i
      });
    },
    configurable: !0
  });
}

function EG(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}

function igt(...e) {
  let t = {};
  for (let r of e) {
    let n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}

function KNs(e) {
  return JSON.stringify(e);
}

function qNs(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}

var aOo = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};

function xan(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}

var YNs = hqn(() => {
  if (Tee.jitless) return !1;
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
  try {
    return new Function(""), !0;
  } catch (e) {
    return !1;
  }
});

function CNt(e) {
  if (xan(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  if (typeof t !== "function") return !0;
  let r = t.prototype;
  if (xan(r) === !1) return !1;
  if (Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1) return !1;
  return !0;
}

function lOo(e) {
  if (CNt(e)) return {
    ...e
  };
  if (Array.isArray(e)) return [ ...e ];
  if (e instanceof Map) return new Map(e);
  if (e instanceof Set) return new Set(e);
  return e;
}

var XNs = new Set([ "string", "number", "symbol" ]);

function agt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function W1e(e, t, r) {
  let n = new e._zod.constr(t ?? e._zod.def);
  if (!t || r?.parent) n._zod.parent = e;
  return n;
}

function Hl(e) {
  let t = e;
  if (!t) return {};
  if (typeof t === "string") return {
    error: () => t
  };
  if (t?.message !== void 0) {
    if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  if (delete t.message, typeof t.error === "string") return {
    ...t,
    error: () => t.error
  };
  return t;
}

function dOo(e) {
  if (typeof e === "bigint") return e.toString() + "n";
  if (typeof e === "string") return `"${e}"`;
  return `${e}`;
}

function JNs(e) {
  return Object.keys(e).filter(t => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}

var QNs = (() => ({
  safeint: [ Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER ],
  int32: [ -2147483648, 2147483647 ],
  uint32: [ 0, 4294967295 ],
  float32: [ -34028234663852886e22, 34028234663852886e22 ],
  float64: [ -Number.MAX_VALUE, Number.MAX_VALUE ]
}))();

function bVs(e, t) {
  let r = e._zod.def, n = r.checks;
  if (n && n.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
  let o = igt(e._zod.def, {
    get shape() {
      let c = {};
      for (let s of Reflect.ownKeys(t)) {
        if (!Object.prototype.hasOwnProperty.call(r.shape, s)) throw Error(`Unrecognized key: "${String(s)}"`);
        if (!t[s]) continue;
        EG(c, s, r.shape[s]);
      }
      return EG(this, "shape", c), c;
    },
    checks: []
  });
  return W1e(e, o);
}

function SVs(e, t) {
  let r = e._zod.def, n = r.checks;
  if (n && n.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
  let o = igt(e._zod.def, {
    get shape() {
      let c = {
        ...e._zod.def.shape
      };
      for (let s of Reflect.ownKeys(t)) {
        if (!Object.prototype.hasOwnProperty.call(r.shape, s)) throw Error(`Unrecognized key: "${String(s)}"`);
        if (!t[s]) continue;
        delete c[s];
      }
      return EG(this, "shape", c), c;
    },
    checks: []
  });
  return W1e(e, o);
}

function wVs(e, t) {
  if (!CNt(t)) throw Error("Invalid input to extend: expected a plain object");
  let r = e._zod.def.checks;
  if (r && r.length > 0) {
    let o = e._zod.def.shape;
    for (let c of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(o, c) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  let i = igt(e._zod.def, {
    get shape() {
      let o = {
        ...e._zod.def.shape,
        ...t
      };
      return EG(this, "shape", o), o;
    }
  });
  return W1e(e, i);
}

function vVs(e, t) {
  if (!CNt(t)) throw Error("Invalid input to safeExtend: expected a plain object");
  let r = igt(e._zod.def, {
    get shape() {
      let n = {
        ...e._zod.def.shape,
        ...t
      };
      return EG(this, "shape", n), n;
    }
  });
  return W1e(e, r);
}

function EVs(e, t) {
  if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  let r = igt(e._zod.def, {
    get shape() {
      let n = {
        ...e._zod.def.shape,
        ...t._zod.def.shape
      };
      return EG(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? []
  });
  return W1e(e, r);
}

function ZNs(e, t, r, n = "partial") {
  let o = t._zod.def.checks;
  if (o && o.length > 0) throw Error(`.${n}() cannot be used on object schemas containing refinements`);
  let s = igt(t._zod.def, {
    get shape() {
      let p = t._zod.def.shape, g = {
        ...p
      };
      if (r) for (let f of Reflect.ownKeys(r)) {
        if (!Object.prototype.hasOwnProperty.call(p, f)) throw Error(`Unrecognized key: "${String(f)}"`);
        if (!r[f]) continue;
        g[f] = e ? new e({
          type: "optional",
          innerType: p[f]
        }) : p[f];
      } else for (let f of Reflect.ownKeys(p)) g[f] = e ? new e({
        type: "optional",
        innerType: p[f]
      }) : p[f];
      return EG(this, "shape", g), g;
    },
    checks: []
  });
  return W1e(t, s);
}

function kVs(e, t, r) {
  let n = igt(t._zod.def, {
    get shape() {
      let i = t._zod.def.shape, o = {
        ...i
      };
      if (r) for (let c of Reflect.ownKeys(r)) {
        if (!Object.prototype.hasOwnProperty.call(o, c)) throw Error(`Unrecognized key: "${String(c)}"`);
        if (!r[c]) continue;
        o[c] = new e({
          type: "nonoptional",
          innerType: i[c]
        });
      } else for (let c of Reflect.ownKeys(i)) o[c] = new e({
        type: "nonoptional",
        innerType: i[c]
      });
      return EG(this, "shape", o), o;
    }
  });
  return W1e(t, n);
}

function RNt(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let r = t; r < e.issues.length; r++) if (e.issues[r]?.continue !== !0) return !0;
  return !1;
}

function e$s(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let r = t; r < e.issues.length; r++) if (e.issues[r]?.continue === !1) return !0;
  return !1;
}

function z1e(e, t) {
  return t.map(r => {
    var n;
    return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
  });
}

function x(e) {
  return typeof e === "string" ? e : e?.message;
}

function cOo(e, t, r) {
  var n;
  for (let i = t; i < e.length; i++) (n = e[i]).schema ?? (n.schema = r);
}

function G1e(e, t, r) {
  var n;
  let i = e.inst?._zod?.traits;
  if (i?.has("$ZodType")) if (i.has("$ZodCheck")) (n = e).schema ?? (n.schema = e.inst); else e.schema = e.inst;
  let o = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0, c = e.message ? e.message : x(e.inst?._zod.def?.error?.(e)) ?? x(o?.(e)) ?? x(t?.error?.(e)) ?? x(r.customError?.(e)) ?? x(r.localeError?.(e)) ?? "Invalid input", {inst: s, schema: p, continue: g, input: f, ...a} = e;
  if (a.path ?? (a.path = []), a.message = c, t?.reportInput) a.input = f;
  return a;
}

var S = /[\uD800-\uDBFF]/;

function FOr(e) {
  let t = e.length;
  if (!S.test(e)) return t;
  let r = t;
  for (let n = 0; n < t - 1; n++) if ((e.charCodeAt(n) & 64512) === 55296 && (e.charCodeAt(n + 1) & 64512) === 56320) r--, 
  n++;
  return r;
}

function UOr(e) {
  if (Array.isArray(e)) return "array";
  if (typeof e === "string") return "string";
  return "unknown";
}

function t$s(e) {
  let t = typeof e;
  switch (t) {
   case "number":
    return Number.isNaN(e) ? "nan" : "number";

   case "object":
    {
      if (e === null) return "null";
      if (Array.isArray(e)) return "array";
      let r = e;
      if (r && Object.getPrototypeOf(r) !== Object.prototype && "constructor" in r && r.constructor) return r.constructor.name;
    }
  }
  return t;
}

function xNt(...e) {
  let [t, r, n] = e;
  if (typeof t === "string") return {
    message: t,
    code: "custom",
    input: r,
    inst: n
  };
  return {
    ...t
  };
}

function P(e, t) {
  for (let r in t) {
    let n = Object.getOwnPropertyDescriptor(t, r);
    if (n.get) Object.defineProperty(e, r, {
      ...n,
      enumerable: !1
    }); else A(e, r, n.value);
  }
}

function PNt(e, t, r, n = !0) {
  return Object.defineProperty(e, t, {
    configurable: !0,
    writable: !0,
    enumerable: n,
    value: r
  }), r;
}

function uOo(e, t, r) {
  return PNt(e, t, r, !1);
}

function A(e, t, r) {
  Object.defineProperty(e, t, {
    configurable: !0,
    get() {
      return this == null ? r : PNt(this, t, r.bind(this));
    },
    set(n) {
      PNt(this, t, n);
    }
  });
}

function k(e, t) {
  let r = Object.getPrototypeOf(e);
  return t in r ? void 0 : r;
}

var m, h = !1, v = {
  configurable: !0,
  get() {
    h = !0;
    return;
  }
};

function Hw(e, t, r) {
  let n = Object.getPrototypeOf(e._zod);
  if (t in n && m !== e._zod) {
    m = void 0;
    return;
  }
  m = e._zod, Object.defineProperty(n, t, {
    configurable: !0,
    get() {
      Object.defineProperty(this, t, v);
      let i = h;
      h = !1;
      try {
        let o = r(this);
        if (h) delete this[t]; else Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          value: o
        });
        return h = h || i, o;
      } catch (o) {
        throw delete this[t], h = h || i, o;
      }
    },
    set(i) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: i
      });
    }
  });
}

function TVs(e, t, r, n) {
  let i = k(e, t);
  if (!i) return;
  Object.defineProperty(i, t, {
    configurable: !0,
    get() {
      let o = {
        configurable: !0,
        writable: !0,
        enumerable: n,
        value: void 0
      };
      return Object.defineProperty(this, t, o), o.value = r(this), Object.defineProperty(this, t, o), 
      o.value;
    },
    set(o) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        enumerable: n,
        value: o
      });
    }
  });
}

var T = "~constantCatch";

function n$s(e) {
  let t = () => e;
  return t[T] = !0, t;
}

var z, kG = Object.freeze({
  status: "aborted"
}), O = {
  value: void 0,
  enumerable: !1
}, E = "captureStackTrace" in Error ? Error : null;

function N(e) {
  let t = E;
  if (t) {
    let r = t.stackTraceLimit;
    if (typeof r === "number") {
      try {
        t.stackTraceLimit = 0;
      } catch {
        return E = null, new e;
      }
      try {
        return new e;
      } finally {
        t.stackTraceLimit = r;
      }
    }
  }
  return new e;
}

function ur(e, t, r, n) {
  let i = {};
  function o(u) {
    this.def = u, this.constr = a, this.traits = new Set;
  }
  o.prototype = i;
  let c = r, s = c && new WeakSet;
  function p(u, d) {
    if (!u._zod) {
      O.value = new o(d);
      try {
        Object.defineProperty(u, "_zod", O);
      } finally {
        O.value = void 0;
      }
    }
    if (u._zod.traits.has(e)) return;
    if (u._zod.traits.add(e), t(u, d), s) {
      let l = Object.getPrototypeOf(u), _ = u._zod.constr.prototype, b = l;
      while (b && b !== _) b = Object.getPrototypeOf(b);
      let w = b ?? l;
      if (!s.has(w)) s.add(w), P(w, c);
    }
    let y = a.prototype;
    for (let l in y) {
      if (!Object.prototype.hasOwnProperty.call(y, l)) continue;
      if (!(l in u)) u[l] = y[l].bind(u);
    }
  }
  let g = n?.Parent ?? Object;
  class f extends g {}
  Object.defineProperty(f, "name", {
    value: e
  });
  function a(u) {
    let d = n?.Parent ? N(f) : this;
    p(d, u);
    let y = d._zod.deferred;
    if (y) {
      for (let _ of y) _();
      d._zod.deferred = void 0;
    }
    let l = globalThis.__zod_globalConfig?.postProcessor;
    if (l) l(d);
    return d;
  }
  return Object.defineProperty(a, "init", {
    value: p
  }), Object.defineProperty(a, Symbol.hasInstance, {
    value: u => {
      if (n?.Parent && u instanceof n.Parent) return !0;
      return u?._zod?.traits?.has(e);
    }
  }), Object.defineProperty(a, "name", {
    value: e
  }), a;
}

class uXe extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}

class yqn extends Error {
  constructor(e) {
    super(`Encountered unidirectional transform during encode: ${e}`);
    this.name = "ZodEncodeError";
  }
}

(z = globalThis).__zod_globalConfig ?? (z.__zod_globalConfig = {});

var Tee = globalThis.__zod_globalConfig;

function aX(e) {
  if (e) Object.assign(Tee, e);
  return Tee;
}

export { $Or, iOo, gqn, hqn, GNs, Can, VNs, Ran, EG, igt, KNs, qNs, aOo, xan, YNs, CNt, lOo, XNs, agt, W1e, Hl, dOo, JNs, QNs, bVs, SVs, wVs, vVs, EVs, ZNs, kVs, RNt, e$s, z1e, cOo, G1e, FOr, UOr, t$s, xNt, PNt, uOo, Hw, TVs, n$s, kG, ur, uXe, yqn, Tee, aX };
