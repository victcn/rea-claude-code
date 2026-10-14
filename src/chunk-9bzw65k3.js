// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ve, x, l } from "./chunk-b0z4bv3v.js";

import { tg } from "./chunk-x35dw27e.js";

import { Nt } from "./chunk-5wbhf1bk.js";

import { D } from "./chunk-hmqkrrtz.js";

var N = 8;

var F = /^v?\d+(?:[._-]\d+)*$/i;

var S = new RegExp("^[A-Za-z0-9._~+/=%-]+$"), I = new RegExp("[^A-Za-z0-9._~+/=%-]+"), K = /^(?=.{1,32}$)(?:[a-z]+|[A-Z][a-z]{2,}|[A-Z]+|\d+)(?:[-_](?:[a-z]+|[A-Z][a-z]{2,}|[A-Z]+|\d+))*$/;

function p(t) {
  return /[a-z]/i.test(t) && (/\d/.test(t) || /[a-z]/.test(t) && /[A-Z]/.test(t));
}

function h(t) {
  return t.length >= 24 && S.test(t) && !F.test(t) && !K.test(t) && p(t);
}

function E(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    return t.replace(/%[0-9A-Fa-f]{2}/g, e => String.fromCharCode(parseInt(e.slice(1), 16)));
  }
}

var Z = /^(?:\*|application|audio|font|example|haptics|image|message|model|multipart|text|video)\/(?:\*|[a-z0-9](?:[a-z0-9!#$&^_.+-])*)(?:\s*;\s*[a-z0-9!#$&^_.-]+=[\w!#$&^_.+-]*)*$/i, q = /^(?:gzip|x-gzip|deflate|br|zstd|compress|identity|\*)(?:\s*;\s*q=[\d.]+)?$/i, G = /^charset=[\w.:-]+$/i, V = /(?<![;,\s])[;,\s]+$/;

function L(t) {
  let e = t.replace(V, "").split(",").map(n => n.trim()).filter(Boolean);
  if (e.length === 0) return !1;
  return e.every(n => Z.test(n) || q.test(n) || G.test(n));
}

var v = new Set([ "accept", "accept-encoding", "content-length", "content-type", "user-agent" ]), Q = /^\d+$/, W = /(?:^|[^A-Za-z0-9_-])[A-Za-z][A-Za-z0-9_-]{1,31}\s+[A-Za-z0-9._~+/=%-]{8,}(?![A-Za-z0-9._~+/=%-])/, Y = /([;,&\s]+)/, J = /[a-z0-9+.-]+/gi, X = /^(?:https?|wss?|ftp)$/i, tt = /[;,&=]/, et = /[\t\n\r]/g;

function w(t) {
  return t.length >= N && p(t) && !L(t);
}

function b(t) {
  return w(t) || t.includes("+") && t.split("+").some(w);
}

function nt(t) {
  return t.split(/\s+/).some(e => e.includes("+") && e.split("+").some(w)) || t.split(/[;,&\s]+/).some(e => {
    let n = e.indexOf("=");
    return n === -1 ? b(e) : b(e.slice(0, n)) || b(e.slice(n + 1));
  });
}

function rt(t, e) {
  if (t === "user-agent") return !W.test(e);
  return Q.test(e) || L(e) && !nt(e);
}

function yle(t) {
  let e = {};
  for (let [n, o] of Object.entries(t)) {
    let r = n.toLowerCase();
    e[n] = v.has(r) && rt(r, o) ? o : "[REDACTED]";
  }
  return e;
}

function P(t, e = !1) {
  let n = t.replace(et, "");
  if (!n.includes(":")) return !1;
  let o = e ? -1 : n.lastIndexOf("?");
  for (let r of n.matchAll(J)) {
    let c = r.index + r[0].length;
    if (n[c] !== ":" || !/[a-z]/i.test(r[0])) continue;
    if (/[/\\]/.test(n[c + 1] ?? "") || !e && X.test(r[0]) || o > c) return !0;
  }
  return !1;
}

function R(t) {
  let e = t;
  for (let n = 0; ;n++) {
    if (P(e)) return !0;
    let o = n < 3 ? E(e) : e;
    if (o === e) return !1;
    e = o;
  }
}

function _(t) {
  let e = t.length < 2 ? -1 : t.lastIndexOf("@", t.length - 2), n = t.indexOf(":");
  return n !== -1 && e > n + 1 ? e : -1;
}

function d(t, e = !0) {
  for (let n of D([ t, t.replaceAll(" ", "+") ])) {
    let o = n;
    for (let r = 0; ;r++) {
      if (h(o) || P(o) || _(o) !== -1 || e && A(o)) return !0;
      let c = r < 3 ? E(o) : o;
      if (c === o) break;
      o = c;
    }
  }
  return !1;
}

function y(t, e) {
  return !e || d(t) ? "REDACTED" : t;
}

function m(t) {
  return h(t) || h(E(t));
}

function A(t) {
  return t.replace(/\s+/g, "+").split(I).some(m);
}

var ot = new Map([ [ "state", "sensitive" ], [ "nonce", "sensitive" ], [ "code_challenge", "sensitive" ], [ "code_verifier", "sensitive" ], [ "code", "sensitive" ], [ "redirect_uri", "url" ], [ "resource", "url" ], [ "audience", "url" ], [ "scope", "judged" ], [ "client_id", "judged" ], [ "response_type", "judged" ], [ "response_mode", "judged" ], [ "code_challenge_method", "judged" ], [ "prompt", "judged" ], [ "access_type", "judged" ], [ "display", "judged" ] ]);

function kSn(t) {
  let e = new URLSearchParams;
  for (let [o, r] of t.searchParams) {
    let c = y(o, r !== "");
    e.append(c, c === "REDACTED" ? "REDACTED" : Hk(o, r));
  }
  let n = e.toString();
  return n === "" ? "" : `?${n}`;
}

function Hk(t, e) {
  let n = ot.get(t);
  if (n === void 0) return "REDACTED";
  switch (n) {
   case "sensitive":
    return "[REDACTED]";

   case "url":
    return R(e) || R(e.replaceAll(" ", "+")) ? Zr(e) : "REDACTED";

   case "judged":
    return st(e);
  }
}

function st(t) {
  let e = [], n = [], o = () => {
    if (n.length > 0) e.push(...it(n)), n = [];
  };
  for (let r of t.split(" ")) if (R(r)) o(), e.push(Zr(r)); else n.push(r);
  return o(), e.join(" ");
}

function it(t) {
  if (d(t.join(" "), !1)) return [ "REDACTED" ];
  let e = [], n = [], o = () => {
    if (n.length > 0) e.push(...d(n.join("+")) ? [ "REDACTED" ] : n.map(r => d(r) ? "REDACTED" : r)), 
    n = [];
  };
  for (let r of t) if (r === "" || S.test(r)) n.push(r); else o(), e.push(d(r) || A(r) ? "REDACTED" : r);
  return o(), e;
}

function Zr(t) {
  let e;
  try {
    e = new URL(t);
  } catch {
    return "[unparseable url]";
  }
  let n = e.host === "" && !e.href.startsWith(`${e.protocol}//`);
  if (e.username !== "") e.username = "REDACTED";
  if (e.password !== "") e.password = "REDACTED";
  let o = s => {
    let i = s.indexOf("=");
    if (i === -1 || /^=*$/.test(s.slice(i + 1))) return m(s) ? "REDACTED" : s;
    let a = s.slice(0, i);
    return `${m(a) || m(s) && p(a) ? "REDACTED" : a}=REDACTED`;
  }, r = s => s.split(Y).map((i, a) => a % 2 === 1 ? i : o(i)).join(""), c = s => {
    let i = r(s);
    if (R(i) || A(i)) return "REDACTED";
    let a = i;
    for (let g = 0; g < 3; g++) {
      let u = E(a);
      if (u === a) break;
      if (r(u) !== u || _(u) !== -1 || A(u)) return "REDACTED";
      a = u;
    }
    return i;
  }, C = `${n ? e.protocol : ""}${e.pathname}`, M = _(C), f;
  if (P(e.pathname, !0)) {
    let s = e.pathname.indexOf("/"), i = `${e.protocol}${s === -1 ? e.pathname : e.pathname.slice(0, s)}`;
    f = n && _(i) !== -1 ? "REDACTED" : `${n ? e.protocol : ""}${e.pathname.startsWith("/") ? "/" : ""}REDACTED`;
  } else {
    let s = e.pathname.split("/").map(c);
    if (n) s[0] = `${e.protocol}${s[0] ?? ""}`;
    if (M !== -1) {
      let i = B => Nt(C.slice(0, B), "/"), a = i(C.indexOf(":")), g = i(M), u = s[g] ?? "", U = u.includes("@") ? u.slice(u.lastIndexOf("@")) : "";
      s.splice(a, g - a + 1, `REDACTED${U}`);
    }
    f = s.join("/");
  }
  if (!n) {
    if (e.pathname = f, tt.test(e.hostname)) e.hostname = "REDACTED";
  }
  let z = D(e.searchParams.keys()), j = new Set([ ...e.searchParams.entries() ].filter(([, s]) => s === "").map(([s]) => s)), O = new URLSearchParams;
  for (let s of z) O.append(y(s, !j.has(s)), "REDACTED");
  return e.search = O.toString(), e.hash = "", n ? `${f}${e.search}` : e.href;
}

function H(t) {
  try {
    let e = new URL(t);
    return e.username !== "" || e.password !== "";
  } catch {
    return !0;
  }
}

function T(t) {
  return Ve(t) || t instanceof Error && (t.name === "TimeoutError" || t.name === "AuthenticationCancelledError") || t instanceof x;
}

function at(t, e) {
  let n = String(e);
  return H(n) && !T(t) ? `${t instanceof Error ? t.name : typeof t} fetching ${Zr(n)}` : l(t);
}

function ct(t) {
  try {
    return Zr(t) === new URL(t).href;
  } catch {
    return !1;
  }
}

function HD(t, e) {
  return k(t, String(e), "from the MCP SDK for");
}

function k(t, e, n) {
  if (T(t) || ct(e)) return l(t);
  let o = t instanceof Error ? /\bHTTP (\d{3})\b/.exec(t.message)?.[1] : void 0, r = tg(t)?.code;
  return `${o ? `HTTP ${o}` : t instanceof Error ? t.name : typeof t} ${n} ${Zr(e)}${r ? ` (${r})` : ""}`;
}

function k2(t) {
  if (T(t)) return l(t);
  let e = tg(t)?.code;
  return `${t instanceof Error ? t.name : typeof t}${e ? ` (${e})` : ""}`;
}

function Wo(t, e) {
  switch (e.type) {
   case "ws":
   case "ws-ide":
   case "sse":
   case "sse-ide":
   case "http":
   case "claudeai-proxy":
    return k(t, e.url, "dialing");

   case void 0:
   case "stdio":
   case "sdk":
    return l(t);

   default:
    return e;
  }
}

function aTe(t, e) {
  let n = Wo(t, e);
  return n === l(t) ? t : n;
}

function DD(t, e) {
  if (T(t)) throw t;
  if (H(String(e))) {
    let n = tg(t)?.code;
    throw Object.assign(TypeError(at(t, e)), n === void 0 ? {} : {
      code: n
    });
  }
  throw t;
}

export { yle, kSn, Hk, Zr, HD, k2, Wo, aTe, DD };
