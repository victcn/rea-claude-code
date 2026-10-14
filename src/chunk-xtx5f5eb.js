// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, vI, B } from "./chunk-3pqddg8f.js";

var ztt = vI(() => a().rowStaged);

function m() {
  return a().attestationEnforcement;
}

function nQo() {
  return m() === "not_enforced";
}

var v = /^[A-Za-z_$][\w$.]{0,63}$/;

function FDe(e) {
  try {
    let t = e instanceof Error ? e.name : typeof e;
    return typeof t === "string" && v.test(t) ? t : "unnamed";
  } catch {
    return "unnamed";
  }
}

function b(e, t) {
  if (e === void 0) return "deliver";
  if (t === e) return "repeat";
  return e === "served" && t === "refused" ? "deliver" : "out_of_order";
}

function g(e) {
  return typeof e === "object" && e !== null && "then" in e && typeof e.then === "function";
}

function y(e, t) {
  if (!g(e)) return;
  Promise.resolve(e).catch(s => {
    try {
      t?.(FDe(s));
    } catch {}
  });
}

function w() {
  let e, t = [], s = !1, c = [], f = r => () => {
    t = t.filter(n => n !== r);
  }, h = (r, n, o) => {
    try {
      return y(r.listener(n, f(r)), o), null;
    } catch (i) {
      return FDe(i);
    }
  }, l = ({verdict: r, onRejected: n}) => {
    e = r;
    let o = t, i = 0, d = [];
    for (let u of o) {
      if (!t.includes(u)) continue;
      i++;
      let S = h(u, r, n);
      if (S !== null) d.push(S);
    }
    if (r !== "served") t = [];
    return {
      listeners: i,
      threw: d
    };
  }, p = () => {
    let r = [];
    while (c.length > 0) r.push(...l(c.shift()).threw);
    return r;
  };
  return {
    current: () => e,
    subscribe: r => {
      let n = {
        listener: r
      }, o = f(n);
      if (e === void 0) return t = [ ...t, n ], o;
      let i = e;
      if (i === "served") t = [ ...t, n ];
      let d = s;
      s = !0;
      try {
        let u = r(i, o);
        if (g(u)) Promise.resolve(u).catch(() => {});
      } catch (u) {
        throw o(), u;
      } finally {
        if (!d) p(), s = !1;
      }
      return o;
    },
    publish: (r, n) => {
      let o = c.at(-1)?.verdict ?? e, i = b(o, r);
      if (i === "repeat") return {
        kind: "repeat"
      };
      if (i === "out_of_order") return {
        kind: "out_of_order",
        basis: o
      };
      if (c.push({
        verdict: r,
        onRejected: n
      }), s) return {
        kind: "queued"
      };
      s = !0;
      try {
        let d = l(c.shift());
        return {
          kind: "delivered",
          listeners: d.listeners,
          threw: [ ...d.threw, ...p() ]
        };
      } finally {
        c.length = 0, s = !1;
      }
    },
    reset: () => {
      e = void 0, t = [], s = !1, c.length = 0;
    }
  };
}

var V = new K(() => ({
  rowStaged: Me(),
  streamReconnected: Me(),
  attestationEnforcement: "unknown",
  verdict: w()
}));

function a() {
  return V.of(B().host);
}

var rQo = Object.freeze({
  current: () => a().verdict.current(),
  subscribe: e => a().verdict.subscribe(e)
}), oQo = (e, t) => a().verdict.publish(e, t);

export { ztt, nQo, FDe, rQo, oQo };
