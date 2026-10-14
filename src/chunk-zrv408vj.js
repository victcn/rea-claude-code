// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Y } from "./chunk-kawq2919.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { t0e, jqt, Wqt } from "./chunk-8rx1kgjh.js";

import { L } from "./chunk-vh1p9t2h.js";

import { N } from "./chunk-hmqkrrtz.js";

var ZJ = new RegExp(`^${t0e}$`), E = 1, dor = 16, I = 16, cor = 16, w = 16, x = 16, uor = 64;

var O = 65536, q3r = 16;

function g(e) {
  return typeof e === "string" && ZJ.test(e);
}

function R(e) {
  if (!L(e)) return "schema document must be an object";
  let s = Object.keys(e).sort(), i = [ "fields", "format", "invariants", "island", "key", "maxEntries", "name" ], o = i.filter(n => n !== "invariants");
  for (let n of s) if (!i.includes(n)) return `unknown schema key: ${n}`;
  for (let n of o) if (!(n in e)) return `missing schema key: ${n}`;
  if (e.format !== E) return "unsupported format version";
  if (!g(e.name)) return "name must be a token";
  if (!g(e.island)) return "island must be a token";
  let r = e.maxEntries;
  if (typeof r !== "number" || !Number.isInteger(r) || r < 1 || r > uor) return `maxEntries must be an integer in 1..${uor}`;
  if (!L(e.fields)) return "fields must be an object";
  let u = Object.keys(e.fields);
  if (u.length === 0 || u.length > dor) return `fields must declare 1..${dor} fields`;
  let k = e.fields;
  for (let n of u) {
    if (!g(n)) return `field name must be a token: ${n}`;
    let c = k[n];
    if (!L(c)) return `field ${n} must be an object`;
    let d = c.nullable;
    if (d !== void 0 && typeof d !== "boolean") return `field ${n}: nullable must be boolean`;
    let m = Object.keys(c).filter(t => t !== "kind" && t !== "nullable");
    switch (c.kind) {
     case "token":
      if (m.length > 0) return `field ${n}: unknown keys ${m.join(",")}`;
      break;

     case "enum":
      {
        if (m.some(y => y !== "values")) return `field ${n}: unknown keys`;
        let t = c.values;
        if (!Array.isArray(t) || t.length < 1 || t.length > I || t.some(y => !g(y)) || new Set(t).size !== t.length) return `field ${n}: enum values must be 1..${I} unique tokens`;
        break;
      }

     case "tokenArray":
      {
        if (m.some(p => p !== "minItems" && p !== "maxItems" && p !== "unique")) return `field ${n}: unknown keys`;
        let {minItems: t, maxItems: y, unique: h} = c;
        if (h !== !0) return `field ${n}: tokenArray requires unique: true`;
        if (typeof t !== "number" || typeof y !== "number" || !Number.isInteger(t) || !Number.isInteger(y) || t < 0 || y < t || y > cor) return `field ${n}: need 0 <= minItems <= maxItems <= ${cor}`;
        break;
      }

     case "ref":
      {
        if (m.some(h => h !== "into")) return `field ${n}: unknown keys`;
        let t = c.into;
        if (typeof t !== "string" || t === n) return `field ${n}: ref.into must name another field`;
        let y = k[t];
        if (!L(y) || y.kind !== "tokenArray") return `field ${n}: ref.into must name a declared tokenArray field`;
        break;
      }

     case "text":
      if (m.length > 0) return `field ${n}: unknown keys ${m.join(",")}`;
      break;

     default:
      return `field ${n}: unknown kind`;
    }
  }
  let l = e.key;
  if (typeof l !== "string" || !u.includes(l)) return "key must name a declared field";
  let f = k[l];
  if (f.kind !== "token" || f.nullable === !0) return "key field must be kind token and non-nullable";
  let a = e.invariants;
  if (a !== void 0) {
    if (!Array.isArray(a) || a.length > w) return `invariants must be an array of at most ${w}`;
    for (let [n, c] of a.entries()) {
      let d = v(c, k, u, l);
      if (d !== null) return `invariant ${n}: ${d}`;
    }
  }
  return null;
}

function v(e, s, i, o) {
  if (!L(e)) return "must be an object";
  let r = Object.keys(e).sort(), u = (l, f) => {
    if (!Array.isArray(l) || l.length === 0 || l.length > x || new Set(l).size !== l.length) return `${f} must be 1..${x} unique field names`;
    for (let a of l) {
      if (typeof a !== "string" || !i.includes(a)) return `${f} names undeclared field: ${String(a)}`;
      if (s[a].nullable !== !0) return `${f} names non-nullable field: ${a}`;
    }
    return null;
  }, k = l => {
    if (!L(l)) return "when must be an object";
    let f = Object.keys(l);
    if (f.length !== 1) return "when must compare exactly one field";
    let a = f[0], n = l[a];
    if (!i.includes(a)) return `when names undeclared field: ${a}`;
    if (!g(n)) return "when must compare against a token";
    let c = s[a];
    if (c.kind === "enum") {
      if (!c.values.includes(n)) return `when compares ${a} against a value outside its enum \u2014 dead rule`;
    } else if (c.kind !== "token") return `when field ${a} must be kind token or enum`;
    return null;
  };
  if (r.length === 2 && r[0] === "null" && r[1] === "when") return k(e.when) ?? u(e.null, "null");
  if (r.length === 2 && r[0] === "exactlyOneOf" && r[1] === "when") return k(e.when) ?? u(e.exactlyOneOf, "exactlyOneOf");
  if (r.length === 2 && r[0] === "forKey" && r[1] === "null") {
    if (!g(e.forKey)) return "forKey must be a token";
    return u(e.null, "null");
  }
  return "unknown invariant shape";
}

function t7o(e, s) {
  if (Buffer.byteLength(e, "utf-8") > O) return null;
  let i;
  try {
    i = Y(e);
  } catch {
    return null;
  }
  if (!L(i)) return null;
  let o = Object.keys(i);
  if (o.length !== 1 || o[0] !== "items") return null;
  let r = i.items;
  if (!Array.isArray(r) || r.length > s.maxEntries) return null;
  let u = Object.keys(s.fields).sort(), k = [], l = new Set;
  for (let f of r) {
    if (!L(f)) return null;
    let a = Object.keys(f).sort();
    if (a.length !== u.length || a.some((d, m) => d !== u[m])) return null;
    let n = Object.create(null);
    for (let d of u) {
      let m = s.fields[d], t = f[d];
      if (t === null) {
        if (m.nullable !== !0) return null;
        n[d] = null;
        continue;
      }
      switch (m.kind) {
       case "token":
        if (!g(t)) return null;
        n[d] = t;
        break;

       case "enum":
        if (typeof t !== "string" || !m.values.includes(t)) return null;
        n[d] = t;
        break;

       case "tokenArray":
        {
          if (!Array.isArray(t) || t.length < m.minItems || t.length > m.maxItems || t.some(y => !g(y)) || new Set(t).size !== t.length) return null;
          n[d] = t.slice();
          break;
        }

       case "ref":
        {
          if (typeof t !== "string") return null;
          let y = f[m.into];
          if (!Array.isArray(y) || !y.includes(t)) return null;
          n[d] = t;
          break;
        }

       case "text":
        if (typeof t !== "string" || jqt(t) === null) return null;
        n[d] = t;
        break;
      }
    }
    let c = n[s.key];
    if (typeof c !== "string" || l.has(c)) return null;
    l.add(c), k.push(n);
  }
  for (let f of s.invariants ?? []) for (let a of k) if (!_(f, a, s.key)) return null;
  return k;
}

function _(e, s, i) {
  if ("forKey" in e) {
    if (s[i] !== e.forKey) return !0;
    return e.null.every(r => s[r] === null);
  }
  let o = Object.keys(e.when)[0];
  if (s[o] !== e.when[o]) return !0;
  if ("null" in e) return e.null.every(r => s[r] === null);
  return N(e.exactlyOneOf, r => s[r] !== null) === 1;
}

function por(e) {
  if (Array.isArray(e)) return `[${e.map(s => por(s) ?? "null").join(",")}]`;
  if (e !== null && typeof e === "object") return `{${Object.keys(e).sort().flatMap(i => {
    let o = por(e[i]);
    return o === void 0 ? [] : [ `${JSON.stringify(i)}:${o}` ];
  }).join(",")}}`;
  return JSON.stringify(e);
}

function b() {
  let e = ee();
  if (e.interactionSchemas === void 0) e.interactionSchemas = {
    byName: new Map,
    islandOwners: new Map,
    metaVerdicts: new Map
  }, j({
    doc: Y3r,
    enabled: () => S.isOpen(),
    derive: D
  });
  return e.interactionSchemas;
}

function j(e) {
  let {name: s, island: i} = e.doc, {byName: o, islandOwners: r} = b();
  if (o.has(s)) throw Error("interaction schema name already registered");
  if (r.has(i)) throw Error("interaction schema island id already owned \u2014 one island id, one grammar");
  o.set(s, e), r.set(i, s);
}

function rqt(e) {
  let {byName: s, metaVerdicts: i} = b(), o = s.get(e);
  if (o === void 0) return {
    ok: !1,
    reason: "unknown"
  };
  let r = i.get(e);
  if (r === void 0) r = R(o.doc), i.set(e, r);
  if (r !== null) return {
    ok: !1,
    reason: "invalid"
  };
  return {
    ok: !0,
    reg: o
  };
}

function n7o() {
  return [ ...b().byName.entries() ].filter(([, e]) => e.enabled()).map(([e]) => e);
}

function r7o() {
  return [ ...b().byName.keys() ];
}

function o7o(e, s) {
  if (e.derive === void 0) return {
    ok: !0
  };
  let i;
  try {
    i = e.derive(s);
  } catch {
    return {
      ok: !1
    };
  }
  if (!L(i)) return {
    ok: !1
  };
  let o = Object.keys(i);
  if (o.length > q3r) return {
    ok: !1
  };
  let r = {};
  for (let u of o) {
    let k = i[u];
    if (!g(u) || !g(k)) return {
      ok: !1
    };
    r[u] = k;
  }
  return {
    ok: !0,
    derived: r
  };
}

var Y3r = {
  format: 1,
  name: "workshop-decisions",
  island: "ws-decisions",
  key: "id",
  maxEntries: 20,
  fields: {
    id: {
      kind: "token"
    },
    opts: {
      kind: "tokenArray",
      minItems: 2,
      maxItems: 5,
      unique: !0
    },
    state: {
      kind: "enum",
      values: [ "open", "resolved" ]
    },
    choice: {
      kind: "ref",
      into: "opts",
      nullable: !0
    },
    custom: {
      kind: "text",
      nullable: !0
    }
  },
  invariants: [ {
    when: {
      state: "open"
    },
    null: [ "choice", "custom" ]
  }, {
    when: {
      state: "resolved"
    },
    exactlyOneOf: [ "choice", "custom" ]
  }, {
    forKey: "get-started",
    null: [ "custom" ]
  } ]
};

function D(e) {
  let s = e.map(i => ({
    id: i.id,
    opts: i.opts.slice(),
    state: i.state,
    choice: i.choice,
    custom: i.custom
  }));
  return {
    state: Wqt(s)
  };
}

class A {
  gate=() => !1;
  register(e) {
    this.gate = e;
  }
  isOpen() {
    return this.gate();
  }
}

var S = new A;

function s7o(e) {
  S.register(e);
}

export { ZJ, dor, cor, uor, q3r, t7o, por, rqt, n7o, r7o, o7o, Y3r, s7o };
