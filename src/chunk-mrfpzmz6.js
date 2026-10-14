// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { man, gan } from "./chunk-7tfkg6bp.js";

import { tfs } from "./chunk-qk8kpwc4.js";

import { Ep, s1e, a9e, Iie, gVn, Tsn } from "./chunk-8yperama.js";

import { K4, cf } from "./chunk-84yp45y8.js";

function m(t) {
  if (!("scope" in t)) return;
  let e = t.scope;
  return K4.find(n => n === e);
}

function BL(t, e, n) {
  let r = Ep(e), i = S(t, e);
  if (i === void 0 && m(e)) return n?.detail === "origin" ? void 0 : Iie(e);
  return gVn({
    authoredUnexpanded: i,
    expanded: e,
    cliOwned: r,
    detail: n?.detail
  });
}

function S(t, e) {
  let n = m(e);
  if (n === void 0) return;
  try {
    let r = cf(n, {
      expandVars: !1
    }).servers[t];
    return r && LKr(r, e) ? r : void 0;
  } catch {
    return;
  }
}

function M(t) {
  if (!URL.canParse(t)) return !1;
  let {protocol: e} = new URL(t);
  return e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
}

function LKr(t, e) {
  if ((t.type ?? "stdio") !== (e.type ?? "stdio")) return !1;
  let n = s1e(t), r = s1e(e);
  if (n !== null || r !== null) {
    if (!(() => {
      if (n === null || r === null) return !1;
      let l = gan(n), o = Tsn(n, l), s = Tsn(r), g = C => man(C).every(y => y === "");
      if (g(n)) return !0;
      if (o.scheme === "" && g(o.authority)) return f(n, r);
      let a = Tsn(l).authority.lastIndexOf("@"), d = s.authority.lastIndexOf("@");
      if (a === -1 !== (d === -1)) return !1;
      if (o.scheme === "") return s.scheme === "" && !M(r) && f(n, r);
      if (s.scheme === "") return !1;
      return f(o.scheme.toLowerCase(), s.scheme.toLowerCase()) && (a === -1 || f(o.authority.slice(0, a), s.authority.slice(0, d))) && f(o.authority.slice(a + 1), s.authority.slice(d + 1)) && f(o.rest, s.rest);
    })()) return !1;
  }
  let i = a9e(t), c = a9e(e);
  if (i !== null || c !== null) {
    if (i === null || c === null || i.length !== c.length || !i.every((u, l) => f(u, c[l] ?? ""))) return !1;
  }
  return h(p(t, "headers"), p(e, "headers")) && h(p(t, "env"), p(e, "env"));
}

function p(t, e) {
  let n = t[e];
  return n && typeof n === "object" ? n : void 0;
}

function h(t, e) {
  let n = Object.entries(t ?? {}), r = e ?? {};
  if (n.length !== Object.keys(r).length) return !1;
  return n.every(([i, c]) => typeof r[i] === "string" && f(c, r[i]));
}

function f(t, e) {
  let n = man(t);
  if (n.length === 1) return t === e;
  let r = n[0] ?? "", i = n.at(-1) ?? "";
  if (!e.startsWith(r) || !e.endsWith(i)) return !1;
  let c = r.length, u = e.length - i.length;
  for (let l = 1; l < n.length - 1; l++) {
    let o = n[l] ?? "", s = e.indexOf(o, c);
    if (s === -1 || s + o.length > u) return !1;
    c = s + o.length;
  }
  return c <= u;
}

function wc(t, e, n) {
  try {
    return tfs(n, e, BL(t, e, {
      detail: "origin"
    }) ?? Iie(e), S(t, e));
  } catch {
    return "[mcp error detail unavailable: redaction failed]";
  }
}

export { BL, LKr, wc };
