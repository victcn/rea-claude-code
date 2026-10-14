// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var k = Object.create;

var {getPrototypeOf: l, defineProperty: f, getOwnPropertyNames: m} = Object;

var j = Object.prototype.hasOwnProperty;

function n(a) {
  return this[a];
}

var o, p, we = (a, b, c) => {
  var d = a != null && typeof a === "object";
  if (d) {
    var h = b ? o ??= new WeakMap : p ??= new WeakMap, i = h.get(a);
    if (i) return i;
  }
  c = a != null ? k(l(a)) : {};
  let e = b || !a || !a.__esModule || !j.call(a, "default") ? f(c, "default", {
    value: a,
    enumerable: !0
  }) : c;
  if (a && typeof a === "object" || typeof a === "function") {
    for (let g of m(a)) if (!j.call(e, g)) f(e, g, {
      get: n.bind(a, g),
      enumerable: !0
    });
  }
  if (d) h.set(a, e);
  return e;
};

var C = (a, b) => () => (b || a((b = {
  exports: {}
}).exports, b), b.exports);

var q = a => a;

function r(a, b) {
  this[a] = q.bind(null, b);
}

var Nr = (a, b) => {
  for (var c in b) f(a, c, {
    get: b[c],
    enumerable: !0,
    configurable: !0,
    set: r.bind(b, c)
  });
};

var la = (a, b, c) => () => {
  if (a) try {
    b = a(a = 0);
  } catch (d) {
    c = [ d ];
  }
  if (c) throw c[0];
  return b;
};

var S = Symbol.for("react.memo_cache_sentinel"), _n = Symbol.for("react.early_return_sentinel"), PVs = (a, b, c) => {
  for (var d in b) f(a, d, {
    get: b[d],
    set: c[d],
    enumerable: !0,
    configurable: !0
  });
}, Ne = ((req, dir, fs, path) => id => {
  if (typeof id === "string" && (id.startsWith("./") || id.startsWith("../") || id.startsWith("/$bunfs/root/"))) {
    let p = id.startsWith("/$bunfs/root/") ? path.join(dir, id.slice(13)) : path.resolve(dir, id);
    if (p.endsWith(".md") || p.endsWith(".txt") || p.endsWith(".mjs")) return fs.readFileSync(p, "utf8");
    return req(p);
  }
  return req(id);
})(import.meta.require, import.meta.dirname, import.meta.require("fs"), import.meta.require("path"));

export { we, C, Nr, la, S, _n, PVs, Ne };
