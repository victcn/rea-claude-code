// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var a = null, s = null, u = null;

function W$s() {
  if (!u) u = new Intl.DisplayNames([ "en" ], {
    type: "language"
  });
  return u;
}

function pa() {
  if (!a) a = new Intl.Segmenter(void 0, {
    granularity: "grapheme"
  });
  return a;
}

function Zve(e) {
  if (!e) return "";
  return pa().segment(e)[Symbol.iterator]().next().value?.segment ?? "";
}

function q5(e) {
  if (!e) return "";
  let t = "";
  for (let {segment: r} of pa().segment(e)) t = r;
  return t;
}

function Dee(e) {
  if (!e) return 0;
  let t = 0;
  for (let r of pa().segment(e)) t++;
  return t;
}

function pme(e) {
  if (!e) return [];
  return Array.from(pa().segment(e), t => t.segment);
}

function Nqn(e) {
  if (e.length < 2) return e;
  let t = e.join("");
  if (!y(t)) return e;
  let r = [], n = "", i = 0, o = e[0].length;
  for (let {segment: h, index: I} of pa().segment(t)) {
    while (I >= o && i < e.length - 1) r.push(n), n = "", i++, o += e[i].length;
    n += h;
  }
  r.push(n);
  while (r.length < e.length) r.push("");
  return r;
}

function y(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (r >= 128 || r === 13) return !0;
  }
  return !1;
}

function IMo() {
  if (!s) s = new Intl.Segmenter(void 0, {
    granularity: "word"
  });
  return s;
}

function z$s(e) {
  let t = e.trim();
  if (t === "") return 0;
  let r = t.split(/\s+/).length, n = 0;
  for (let i of IMo().segment(t)) if (i.isWordLike) n++;
  return Math.max(r, n);
}

var m = new Map;

function OMo(e, t) {
  let r = `${e}:${t}`, n = m.get(r);
  if (!n) n = new Intl.RelativeTimeFormat("en", {
    style: e,
    numeric: t
  }), m.set(r, n);
  return n;
}

var g = null;

function G$s() {
  if (!g) g = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return g;
}

var l = null;

function V$s() {
  if (l === null) try {
    let e = Intl.DateTimeFormat().resolvedOptions().locale;
    l = new Intl.Locale(e).language;
  } catch {
    l = void 0;
  }
  return l;
}

var f = new WeakMap;

function p(e) {
  if (!e) return "";
  let t = f.get(e);
  if (t !== void 0) return t;
  let r = Object.entries(e).sort(([i], [o]) => i < o ? -1 : i > o ? 1 : 0), n = "";
  for (let [i, o] of r) n += `${i}=${String(o)};`;
  return f.set(e, n), n;
}

var c = new Map;

function wOe(e, t) {
  return t ? {
    ...e,
    timeZone: t
  } : e;
}

function Tj(e, t) {
  let r = `${e ?? ""}|${p(t)}`, n = c.get(r);
  if (!n) n = new Intl.DateTimeFormat(e, t), c.set(r, n);
  return n;
}

var d = new Map;

function K$s(e, t) {
  let r = `${e ?? ""}|${p(t)}`, n = d.get(r);
  if (!n) n = new Intl.NumberFormat(e, t), d.set(r, n);
  return n;
}

export { W$s, pa, Zve, q5, Dee, pme, Nqn, IMo, z$s, OMo, G$s, V$s, wOe, Tj, K$s };
