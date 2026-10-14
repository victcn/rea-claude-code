// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Yl, Kie, kee, SG } from "./chunk-1z2heevg.js";

import { UUe, BUe } from "./chunk-5axbzaq8.js";

import { vn } from "./chunk-3rbd48rp.js";

import { L } from "./chunk-vh1p9t2h.js";

import { D } from "./chunk-hmqkrrtz.js";

function H() {
  let o = {
    log() {},
    hookFailed() {}
  };
  return {
    set: r => {
      o = r;
    },
    get: () => o
  };
}

var y = H();

var Kl = y.get;

var wnn = y.set;

import { isProxy as so } from "util/types";

import { isProxy as eo } from "util/types";

function oS(o) {
  if (!L(o)) return !1;
  let r = Object.getPrototypeOf(o);
  return r === null || !eo(r) && Object.getPrototypeOf(r) === null;
}

function A(o, r, t) {
  if (typeof o !== "object" || !o || r.has(o)) return t;
  if (so(o)) return t;
  let e = (t?.depth ?? 0) + 1;
  if (e > UUe) throw RangeError(BUe);
  r.add(o);
  let n = Array.isArray(o);
  return n || oS(o) ? {
    node: o,
    keys: n ? [] : Object.keys(o),
    at: 0,
    depth: e,
    below: t
  } : t;
}

function vvo(o, r) {
  let t = A(o, r, void 0);
  while (t !== void 0) {
    let {node: e, keys: n, at: s} = t, a = Array.isArray(e);
    if (s < (a ? e : n).length) t.at = s + 1, t = A(a ? e[s] : e[n[s] ?? ""], r, t); else Object.freeze(e), 
    t = t.below;
  }
}

function NUe(o) {
  return vvo(o, new Set), o;
}

function Mut(o, r = "aborted") {
  let {reason: t} = o;
  return t instanceof Error ? t.message : t === void 0 ? r : String(t);
}

var zGs = o => `the answer is not plain data: ${o}`;

class Ie extends Error {
  name="HooksError";
  telemetryMessage="function hooks error (message not reported: it may contain plugin details)";
  thrownName;
}

function hWn(o, r) {
  if (!L(o)) throw new Ie(`${r}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);
  return o;
}

function bvo(o) {
  if (!(o instanceof Error)) return;
  let r = o.cause;
  return typeof r === "string" ? r : void 0;
}

var Fxs = o => typeof o === "object" && o !== null && "aborted" in o && typeof o.addEventListener === "function" && typeof o.removeEventListener === "function";

var bnn = o => `next() argument is not plain data: ${o}`;

var EAr = (o, r) => `${o}: arguments are not plain data: ${r}`;

class Rpe extends Ie {}

var Uxs = o => o.reason instanceof Rpe;

var Svo = (o, r) => r === !0 ? new Rpe(o) : new Ie(o);

var yWn = o => o.reason instanceof Rpe ? {
  isSettled: !0
} : {};

var GGs = o => o instanceof Rpe ? new Ie(o.message) : o;

var k = new WeakMap;

function _Wn(o, r) {
  if (typeof o === "object" && o !== null) k.set(o, r);
  return o;
}

var wvo = o => typeof o === "object" && o !== null ? k.get(o) : void 0;

class kAr extends Ie {
  asked;
  constructor(o, r) {
    super(o);
    this.asked = r;
  }
}

var T = new WeakSet;

var TAr = o => typeof o === "object" && o !== null && T.has(o);

function bWn(o) {
  if (typeof o === "object" && o !== null) T.add(o);
  return o;
}

function P() {
  let o = new WeakMap;
  return {
    mark(r, t) {
      if (typeof r === "object" && r !== null && t !== void 0) o.set(r, t);
      return r;
    },
    of(r) {
      return typeof r === "object" && r !== null ? o.get(r) : void 0;
    }
  };
}

var h = P();

var Hut = (o, r) => h.mark(o, r);

var cPe = o => new Ie(`${o}: its environment was unloaded`);

var SWn = (o, r, t) => ({
  plugin: o,
  op: r,
  message: t
});

function VGs(o, r) {
  let t = cPe(o);
  return Hut(t, SWn(o, r, t.message));
}

var wWn = o => h.of(o);

var Bxs = 8;

var jxs = 256;

var E = 65536;

function $o(o) {
  if (o === void 0) return "undefined";
  if (typeof o === "function") return "a function";
  if (typeof o === "object" && o) {
    let r = Object.prototype.toString.call(o).replace(/^\[object |\]$/g, "");
    return r === "Object" ? "an object" : `a ${r}`;
  }
  return `a ${typeof o}`;
}

function p(o) {
  if (typeof o !== "object" || !o) return !1;
  try {
    return Reflect.get(RegExp.prototype, "source", o), !0;
  } catch {
    return !1;
  }
}

var uPe = o => oS(o) && !p(o);

var W = o => o?.paths.some(r => r.length === 0) === !0;

var _nn = "__proto__";

function pE(o, r) {
  let t = Object.create(null);
  for (let [e, n] of Object.entries(o)) if (e !== _nn && r(n, e)) t[e] = n;
  return t;
}

var KGs = o => Object.freeze(pE(L(o) ? o : {}, r => typeof r === "string"));

function C(o, r) {
  let t = D([ r, Yl(r) ].flatMap(e => kee(e, o)));
  return D(t.concat(t.flatMap(e => SG(e, o))).flatMap(e => [ e, ...Kie(e) ]));
}

function K(o, r) {
  return o.paths.some(e => e[0] === r) ? {
    table: o.table,
    paths: o.paths.filter(e => e[0] === r).map(e => e.slice(1))
  } : void 0;
}

var qGs = Object.freeze({});

var S = Object.freeze({
  "tool.call": [ [ "tool" ] ],
  "tool.check": [ [ "tool" ] ],
  "tool.describe": [ [ "tool" ] ],
  "classic.PreToolUse": [ [ "tool" ] ],
  "classic.PostToolUse": [ [ "tool_name" ] ],
  "classic.PostToolUseFailure": [ [ "tool_name" ] ],
  "classic.PermissionRequest": [ [ "tool_name" ] ],
  "classic.PermissionDenied": [ [ "tool_name" ] ],
  "classic.PostToolBatch": [ [ "tool_calls", "tool_name" ] ],
  "session.append": [ [ "origin", "tool" ] ],
  "session.compact": [ [ "messages", "toolUses", "tool" ] ],
  "ui.render": [ [ "props", "tool" ], [ "props", "calls", "tool" ] ]
});

var Evo = o => Object.hasOwn(S, o) ? S[o] : void 0;

var F = (o, r, t) => W(o) && typeof r === "string" && typeof t === "string" && C(o.table, t).includes(r);

function AAr(o) {
  let r = typeof o === "function";
  return p(o) ? String(o) : Array.isArray(o) ? o.map(AAr).join("|") : uPe(o) ? `{${Object.entries(o).map(([t, e]) => uPe(e) ? `${t} has ${AAr(e)}` : `${t}=${AAr(e)}`).join(", ")}}` : r ? "function" : String(o);
}

var f = o => ({
  source: String(Reflect.get(RegExp.prototype, "source", o)),
  flags: String(Reflect.get(RegExp.prototype, "flags", o))
});

var CAr = /^\^?(?:\((?:\?:)?)?\^?\w+\$?(?:\|\^?\w+\$?)*\)?\$?$/;

var U = "w";

var z = o => Array.from(o, r => vn(r) === r ? U : r).join("");

function G(o) {
  let r = o.source.startsWith("^(") && o.source.endsWith(")$");
  return o.flags === "" && CAr.test(z(o.source)) && (r || o.source.split("|").every(t => t.startsWith("^") && t.endsWith("$")));
}

var Y = (o, r, t) => W(o.names) && typeof t === "string" && G(f(r)) && C(o.names.table, t).some(e => o.test(r, e));

function X(o, r) {
  return o.names === void 0 ? o : {
    test: o.test,
    names: K(o.names, r)
  };
}

function l(o, r, t) {
  if (Array.isArray(o)) return Array.prototype.some.call(o, e => l(e, r, t));
  if (Array.isArray(r)) return Array.prototype.some.call(r, e => l(o, e, t));
  if (typeof o !== "object" || o === null) return o === r || F(t.names, o, r);
  if (oS(o)) {
    if (typeof r !== "object" || !r) return !1;
    for (let e of Object.keys(o)) if (!Object.hasOwn(r, e) || !l(o[e], r[e], X(t, e))) return !1;
    return !0;
  }
  return p(o) && (t.test(o, String(r)) || Y(t, o, r));
}

function Snn(o, r, t = "") {
  let e;
  if (Array.isArray(o)) return Array.prototype.some.call(o, n => (e = Snn(n, r, t), 
  e !== void 0)), e;
  if (Array.isArray(r)) return Array.prototype.some.call(r, n => (e = Snn(o, n, t), 
  e !== void 0)), e;
  if (!uPe(o)) return;
  if (r === null) return {
    path: t,
    kind: "null"
  };
  switch (typeof r) {
   case "string":
    return {
      path: t,
      kind: "string"
    };

   case "number":
    return {
      path: t,
      kind: "number"
    };

   case "boolean":
    return {
      path: t,
      kind: "boolean"
    };

   case "bigint":
    return {
      path: t,
      kind: "bigint"
    };

   case "object":
    break;

   case "undefined":
   case "symbol":
   case "function":
    return;
  }
  for (let n of Object.keys(o)) {
    if (!Object.hasOwn(r, n)) continue;
    if (e = Snn(o[n], r[n], t === "" ? n : `${t}.${n}`), e !== void 0) return e;
  }
  return;
}

function kvo(o, r, t) {
  let e = t.path.split(".").at(-1) ?? t.path;
  return `hooks module ${o}: on('${r}') matcher at ${t.path} is a nested object, but e.${t.path} is a ${t.kind} there, which an object matcher can never match (a matcher has no operator keys); the hook will not run for it. A ${t.kind} is matched by the literal value or, as a string, by a RegExp, e.g. { ${e}: /^prefix/ }`;
}

var Tvo = 32;

var u = "$$regex";

function N(o, r, t) {
  if (Array.isArray(o)) return Array.prototype.map.call(o, (e, n) => N(e, r, `${t}[${n}]`));
  if (uPe(o)) {
    let e = t === "" ? "" : ` at ${t}`, n = o[u];
    if (typeof n === "string" && typeof o.flags === "string" && Object.keys(o).length === 2) return M({
      source: n,
      flags: o.flags,
      where: r,
      at: e
    }), new RegExp(n, o.flags);
    _(o, r, e);
    let a = {};
    for (let [O, Q] of Object.entries(o)) a[O] = N(Q, r, t === "" ? O : `${t}.${O}`);
    return a;
  }
  return o;
}

function b(o) {
  if (p(o)) {
    let {source: r, flags: t} = f(o);
    return {
      [u]: r,
      flags: t
    };
  }
  if (Array.isArray(o)) return Array.prototype.map.call(o, b);
  if (uPe(o)) {
    let r = {};
    for (let [t, e] of Object.entries(o)) r[t] = b(e);
    return r;
  }
  return o;
}

var Avo = o => o.map(({matcher: r, ...t}) => r === void 0 ? t : {
  ...t,
  matcher: b(r)
});

var B = o => /\([^()]*[+*?}]\)\s*[+*{]/.test(o);

var R = o => o.includes("g") ? "g" : o.includes("y") ? "y" : void 0;

function M({source: o, flags: r, where: t, at: e}) {
  let n = R(r);
  if (n) throw new Ie(`${t}: matcher${e} is a RegExp with the ${n} flag, which keeps state between tests; drop it`);
  if (B(o)) throw new Ie(`${t}: matcher${e} is a RegExp with a nested quantifier (${o}), which can backtrack without bound; rewrite it`);
}

function _(o, r, t) {
  if (Object.hasOwn(o, _nn)) throw new Ie(`${r}: matcher${t} has the key ${_nn}, which a matcher does not keep`);
}

function I(o, r, t) {
  let e = t === "" ? "" : ` at ${t}`;
  if (p(o)) {
    M({
      ...f(o),
      where: r,
      at: e
    });
    return;
  }
  if (Array.isArray(o)) {
    Array.prototype.forEach.call(o, (n, s) => I(n, r, `${t}[${s}]`));
    return;
  }
  if (uPe(o)) {
    if (Object.hasOwn(o, u)) throw new Ie(`${r}: matcher${e} uses the reserved key ${u} (how a RegExp crosses the worker boundary); a RegExp goes in as a RegExp`);
    _(o, r, e);
    for (let [n, s] of Object.entries(o)) I(s, r, t === "" ? n : `${t}.${n}`);
    return;
  }
  switch (typeof o) {
   case "string":
    if (o.length > E) throw new Ie(`${r}: matcher${e} is a string longer than ${E} characters, which cannot match`);
    return;

   case "number":
   case "boolean":
    return;

   case "object":
    if (!o) return;
    break;

   case "bigint":
   case "symbol":
   case "undefined":
   case "function":
    break;
  }
  throw new Ie(`${r}: matcher${t === "" ? "" : ` at ${t}`} must be a string, a number, a boolean, null, a RegExp, an array of those, or a nested object; got ${$o(o)}`);
}

function ir(o, r) {
  if (r.length > E) return Kl().log(`matcher: a value of ${r.length} characters is past the ${E} a RegExp matcher reads; it matches, so the hook decides`), 
  !0;
  if (R(f(o).flags)) o.lastIndex = 0;
  return RegExp.prototype.exec.call(o, r) !== null;
}

function YGs(o, r) {
  if (!uPe(o)) throw new Ie(`${r}: the matcher must be a plain object (a partial of e)`);
  I(o, r, "");
}

var XGs = (o, r = "matcher") => N(o, r, "");

var Dut = (o, r, t) => l(o, r, {
  test: ir,
  names: t
});

var vWn = (o, r, t) => l(o, r, {
  test: () => !0,
  names: t
});

var w = (o, r, t) => Array.isArray(o) ? o.some(e => w(e, r, t)) : !oS(o) || !Object.hasOwn(o, r.field) || vWn(o[r.field], r.value, t);

var EWn = (o, r, t) => Object.entries(r).every(([e, n]) => w(o, {
  field: e,
  value: n
}, t && K(t, e)));

var Lut = (o, r, t) => w(o, {
  field: r,
  value: t
});

export { _nn, pE, Mut, zGs, Ie, hWn, bvo, Fxs, bnn, EAr, Rpe, Uxs, Svo, yWn, GGs, _Wn, wvo, kAr, TAr, bWn, Hut, cPe, SWn, VGs, wWn, Bxs, jxs, oS, vvo, NUe, uPe, KGs, qGs, Evo, AAr, CAr, Snn, kvo, Tvo, Avo, Kl, wnn, YGs, XGs, Dut, vWn, EWn, Lut };
