// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Wc } from "./chunk-cvcg6n1z.js";

var FBe = "(invalid tool name)";

function qh(e) {
  return Wc(e);
}

function $9(e) {
  return e;
}

function yAo(e) {
  return e;
}

function vHs(e) {
  return e;
}

function EHs(e) {
  return e;
}

function _Ao(e) {
  if (Object.getPrototypeOf(e) !== Array.prototype) throw TypeError("mintDisplayedUpdates: non-plain array in mint input \u2014 plain data only");
  if (!Number.isSafeInteger(e.length) || e.length < 0) throw TypeError("mintDisplayedUpdates: non-integer length in mint input \u2014 plain data only");
  let t = [];
  for (let o = 0; o < e.length; o++) {
    if (!(o in e)) throw TypeError("mintDisplayedUpdates: sparse mint input \u2014 plain data only");
    t.push(f(e[o]));
  }
  return Object.freeze(t);
}

function f(e, t = new WeakMap) {
  if (typeof e === "function") throw TypeError("deepFreezePlainData: function in mint input \u2014 plain data only");
  if (e !== null && typeof e === "object") {
    let o = t.get(e);
    if (o !== void 0) return o;
    let n = Object.getPrototypeOf(e);
    if (!(Array.isArray(e) ? n === Array.prototype : n === Object.prototype || n === null)) throw TypeError("deepFreezePlainData: non-plain prototype in mint input \u2014 plain data only");
    let a = Object.getOwnPropertyDescriptors(e);
    for (let r of Object.keys(a)) {
      let s = a[r];
      if (s && (s.get !== void 0 || s.set !== void 0)) throw TypeError("deepFreezePlainData: accessor property in mint input \u2014 plain data only");
    }
    if (Object.getOwnPropertySymbols(e).length > 0) throw TypeError("deepFreezePlainData: symbol-keyed property in mint input \u2014 plain data only");
    for (let r of Object.keys(a)) {
      let s = a[r];
      if (s && s.enumerable === !1 && !(Array.isArray(e) && r === "length")) throw TypeError("deepFreezePlainData: non-enumerable property in mint input \u2014 plain data only");
    }
    let l = Array.isArray(e) ? [] : {};
    t.set(e, l);
    for (let r of Object.keys(a)) {
      if (Array.isArray(e) && r === "length") continue;
      if (r === "__proto__" || r === "constructor") throw TypeError("deepFreezePlainData: prototype-key property in mint input \u2014 plain data only");
      let s = a[r];
      Object.defineProperty(l, r, {
        value: f(s?.value, t),
        enumerable: !0,
        writable: !1,
        configurable: !1
      });
    }
    return Object.freeze(l), l;
  }
  return e;
}

var h = [ "panel" ];

function rs({hideWhile: e = h, ...t}) {
  return {
    ...t,
    hideWhile: e
  };
}

function kHs(e) {
  return async function(o, n, i) {
    if (Q0t(n)) return T(e, o, n, i);
    return D(e, o, n, i);
  };
}

function Q0t(e) {
  return typeof e === "object" && e !== null && Symbol.asyncIterator in e;
}

async function D(e, t, o, n) {
  let i = t.payload().safeParse(o);
  if (!i.success) return t.default;
  let a;
  try {
    let {replied: r} = e.request({
      kind: t.kind,
      payload: i.data,
      userInvoked: t.userInvoked,
      hideWhile: t.hideWhile,
      holdsTop: t.holdsTop
    }, n);
    a = await r;
  } catch {
    return t.default;
  }
  if ("cancelled" in a) return t.default;
  let l = t.result().safeParse(a.result);
  return l.success ? l.data : t.default;
}

async function T(e, t, o, n) {
  let i = o[Symbol.asyncIterator](), a = await i.next();
  if (a.done) return t.default;
  let l = t.payload().safeParse(a.value);
  if (!l.success) return i.return?.(void 0), t.default;
  let r = new AbortController, s = () => r.abort();
  if (n?.signal) if (n.signal.aborted) r.abort(); else n.signal.addEventListener("abort", s, {
    once: !0
  });
  let {replied: P, update: m} = e.request({
    kind: t.kind,
    payload: l.data,
    userInvoked: t.userInvoked,
    hideWhile: t.hideWhile,
    holdsTop: t.holdsTop
  }, {
    signal: r.signal,
    place: n?.place,
    askOrder: n?.askOrder,
    armInputGrace: n?.armInputGrace,
    succeeds: n?.succeeds,
    onFirstReveal: n?.onFirstReveal,
    onClaimed: n?.onClaimed,
    countedAsk: n?.countedAsk
  }), p;
  (async () => {
    try {
      while (!r.signal.aborted) {
        let d = await i.next();
        if (d.done) return;
        if (r.signal.aborted) return;
        let c = t.payload().safeParse(d.value);
        if (!c.success) continue;
        m(c.data);
      }
    } catch (d) {
      p = d, r.abort();
    }
  })().catch(() => {});
  let u;
  try {
    u = await P;
  } finally {
    n?.signal?.removeEventListener("abort", s), i.return?.(void 0);
  }
  if (p !== void 0) throw p;
  if ("cancelled" in u) return t.default;
  let y = t.result().safeParse(u.result);
  return y.success ? y.data : t.default;
}

export { FBe, qh, $9, yAo, vHs, EHs, _Ao, rs, kHs, Q0t };
