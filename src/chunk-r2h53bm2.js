// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { b_, En } from "./chunk-kawq2919.js";

import { ne, Ql, d6, Mv, Br, My } from "./chunk-5wbhf1bk.js";

var s = /[\p{Pi}\p{Pf}\u201a\u201e\u201f\u2e32\u2e34\u2e41\u2e49\u2e42\u3003\u300c-\u300f\ufe41-\ufe44\u301d-\u301f\u275b-\u2760\u276e\u276f\u{1f676}-\u{1f678}\u2032-\u2037\u2057\u02b9\u02ba\u0374\u02bd-\u02bf\u02c8\u02d2\u02d3\u02ca\u02ce\u02cf\u02dd\u02f4-\u02f6\u02ee\u00b4\u0384\u0385\u1fbd\u1fbf\u1fcd-\u1fcf\u1fdd-\u1fdf\u1ffd\u1ffe\u05f3\u05f4\u0559-\u055b\u07f4\u07f5\ua67f\ua78b\ua78c\uff02\uff07\uff62\uff63]/gu, i = /(?<![^\s\p{P}])\p{M}+/gu;

function tD(e) {
  return En(Ean(Mv(e))).replace(/ {2,}/g, " ").trim();
}

var a = /\x1b\[[\x30-\x3f]*[\x20-\x2f]*[\x40-\x7e]|\x1b[\]PX^_][^\x1b\x07]*(?:\x07|\x1b\\)/g, d = 4;

function Ean(e) {
  let n = e;
  for (let t = 0; t < d; t++) {
    let r = n.replace(a, "");
    if (r === n) break;
    n = r;
  }
  return n;
}

function kt(e, n = 160) {
  return W5(tD(g(e, n)).normalize("NFC").replace(/[`\uff40\u02cb\u1fef\u2035]/g, "'").replace(i, ""), n);
}

var x = new RegExp(`[^\\S ]|[${b_}]`, "u");

function sgt(e, n) {
  return e.length <= n && !x.test(e) && kt(e, n) === e.replaceAll("`", "'");
}

function ENt(e, n = 2e3) {
  let t = tD(g(e, n));
  return t.length > n ? `${ne(t, n)}\u2026` : t;
}

function W5(e, n = 2e3) {
  return e.length > n ? `${ne(e, n)}\u2026` : e;
}

function vG(e, n = 160) {
  let t = Mv(e).replace(/[\p{Cc}\p{Cf}]/gu, r => /\s/.test(r) ? r : "").replace(/\s+/g, " ").trim();
  return t.length > n ? `${ne(t, n)}\u2026` : t;
}

function Us(e, n = 300) {
  return kt(e ?? "", n);
}

function ze(e, n = 300) {
  return kt(e ?? "", n).replace(s, "").replace(/[\u02bb\u02bc]/g, "\u2019").replace(/"/g, "\u201d").replace(/'/g, "\u2019").replace(i, "");
}

function Xl(e, n) {
  let t = Br(My(Mv(e).replace(/\s+/g, " "))).normalize("NFC").replace(s, "'").replace(/["\u02BB\u02BC]/g, "'").replace(i, "").trim();
  if (!t) return "";
  return `\u201c${n ? d6(t, n.head, n.tail, () => "\u2026") : t}\u201d`;
}

function NNs(e, n) {
  let t = Xl(e) || "\u201c\u201d";
  return t.length <= n ? t : Xl(e, {
    head: n - 3,
    tail: 0
  });
}

function tOo(e, {head: n, tail: t}) {
  if (e.length <= n + t) return e;
  let r = n > 0 ? ne(e, n) : "", u = t > 0 ? Ql(e, t) : "", o = (r.match(/\u201C/g)?.length ?? 0) > (r.match(/\u201D/g)?.length ?? 0), c = u.indexOf("\u201d"), f = u.indexOf("\u201c"), p = c !== -1 && (f === -1 || c < f);
  return `${r}${o === p ? "\u2026" : o ? "\u2026\u201d\u2026" : "\u2026\u201c\u2026"}${u}`;
}

function g(e, n) {
  let t = ne(e, n * 8);
  if (t.length === e.length) return t;
  let r = /\x1b(?:[\]PX^_][^\x1b\x07]*\x1b?|\[[\x30-\x3f]*[\x20-\x2f]*)$/.exec(t);
  if (r === null) return t;
  let u = e.slice(r.index);
  return (u[1] === "[" ? /^\x1b\[[\x30-\x3f]*[\x20-\x2f]*[\x40-\x7e]/.test(u) : /^\x1b[\]PX^_][^\x1b\x07]*(?:\x07|\x1b\\)/.test(u)) ? t.slice(0, r.index) : t;
}

function hT(e, {isComposed: n} = {}) {
  let t = l(e);
  return n?.(e) ? ENt(t, 2e3) : kt(t, 500);
}

export { tD, Ean, kt, sgt, ENt, W5, vG, Us, ze, Xl, NNs, tOo, hT };
