// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { LDe, aJo, urr } from "./chunk-7f3bx3dq.js";

function _kn(e, t, n) {
  if (e.length === 0) return {
    kind: "none"
  };
  if (t) {
    let o = e.find(c => c.deviceId === t);
    if (o) return {
      kind: "select",
      extension: o,
      reason: "persisted"
    };
  }
  if (e.length === 1) return {
    kind: "select",
    extension: e[0],
    reason: "only"
  };
  let r = n ? e.filter(o => n.has(o.deviceId)) : [], [i, s] = r;
  if (i && !s && n?.get(i.deviceId) === "live") return {
    kind: "select",
    extension: i,
    reason: "local"
  };
  return {
    kind: "ask",
    candidates: [ ...r, ...e.filter(o => !r.includes(o)) ],
    localCount: r.length
  };
}

function lKt(e) {
  let t;
  try {
    t = e?.();
  } catch {
    return Promise.resolve(void 0);
  }
  if (!t) return Promise.resolve(void 0);
  return new Promise(n => {
    let r = setTimeout(() => n(void 0), aJo);
    t.then(i => {
      clearTimeout(r), n(i);
    }, () => {
      clearTimeout(r), n(void 0);
    });
  });
}

var j = String.raw`(?:No tab with id: \d+|Tab \d+ (?:no longer exists|is not in the same group))`, St = [ {
  pattern: /^Permission denied for JavaScript execution/,
  errorType: "js_permission_denied"
}, {
  pattern: /^JavaScript execution error: Execution timeout: Code exceeded \d+-second limit$/,
  errorType: "js_timeout"
}, {
  pattern: /^JavaScript execution error:/,
  errorType: "js_execution_error"
}, {
  pattern: new RegExp(`^Failed to execute JavaScript: ${j}`),
  errorType: "tab_not_found"
}, {
  pattern: /^Failed to execute JavaScript:/,
  errorType: "js_exception"
} ], Rt = [ {
  pattern: /^Permission denied for this action/,
  errorType: "computer_permission_denied"
}, {
  pattern: /^No element found with reference|^Error getting element coordinates|^Failed to (execute script to get|get) element coordinates/,
  errorType: "computer_element_not_found"
}, {
  pattern: /^Error (clicking|hovering|scrolling|pressing key|performing drag|capturing)|^Failed to (type|scroll to element)/,
  errorType: "computer_action_failed"
}, {
  pattern: /^"[^"]*" was not pressed: page zoom keyboard shortcuts are not supported/,
  errorType: "computer_zoom_shortcut_unsupported"
}, {
  pattern: new RegExp(`^Failed to execute action: ${j}`),
  errorType: "tab_not_found"
}, {
  pattern: /^Failed to execute action:/,
  errorType: "computer_exception"
} ], Et = [ {
  pattern: /^Permission denied for reading page content/,
  errorType: "get_page_text_permission_denied"
}, {
  pattern: /^No semantic content element found|^Output exceeds \d+ character limit/,
  errorType: "get_page_text_too_large"
}, {
  pattern: /^No text content found/,
  errorType: "get_page_text_no_content"
}, {
  pattern: /^Failed to extract page text: No main text content found/,
  errorType: "get_page_text_no_content"
}, {
  pattern: /^Failed to extract page text: (Script execution failed|Page script returned empty result)/,
  errorType: "get_page_text_script_error"
}, {
  pattern: new RegExp(`^Failed to extract page text: ${j}`),
  errorType: "tab_not_found"
}, {
  pattern: /^Failed to extract page text:/,
  errorType: "get_page_text_exception"
} ], At = [ {
  pattern: /^Permission denied by user\. Domain transition denied/,
  errorType: "navigation_blocked"
}, {
  pattern: /^Cannot access this page\. Claude cannot assist/,
  errorType: "navigation_blocked"
}, {
  pattern: /^Permission denied by user/,
  errorType: "permission_denied_user"
}, {
  pattern: /^Permission required but no handler/,
  errorType: "permission_handler_missing"
}, {
  pattern: /^Authentication failed\. The extension may need to be re-authenticated\. Please check your login status/,
  errorType: "authentication_failed"
}, {
  pattern: /^Authentication failed\. The extension may need to be re-authenticated\. Open the Claude in Chrome side panel/,
  errorType: "session_expired"
}, {
  pattern: /^Authentication failed\. The extension may need to be re-authenticated/,
  errorType: "authentication_failed"
}, {
  pattern: /^No tabs? available/,
  errorType: "no_tabs_available"
}, {
  pattern: /^This site is blocked/,
  errorType: "domain_blocked"
}, {
  pattern: /^This site is not allowed due to safety restrictions/,
  errorType: "domain_blocked"
}, {
  pattern: /^Could not verify this site's safety category\. Blocking as a precaution/,
  errorType: "category_lookup_error"
}, {
  pattern: /^Claude in Chrome is turned off/,
  errorType: "domain_blocked"
}, {
  pattern: new RegExp(`^Tab \\d+ no longer exists|^${j}`),
  errorType: "tab_not_found"
}, {
  pattern: /^Security check failed: Domain changed|^Unable to verify current URL for security check/,
  errorType: "security_check_failed"
} ], It = new Map([ [ "javascript_tool", St ], [ "computer", Rt ], [ "get_page_text", Et ] ]);

function Htt(e, t) {
  let n = It.get(e);
  if (n) {
    for (let {pattern: r, errorType: i} of n) if (r.test(t)) return i;
  }
  for (let {pattern: r, errorType: i} of At) if (r.test(t)) return i;
  return "unclassified_tool_error";
}

function Dvt(e) {
  let t = e?.content;
  if (typeof t === "string" && t) return t;
  if (Array.isArray(t)) for (let n of t) {
    let r = n?.text;
    if (typeof r === "string" && r) return r;
  }
  return "Unknown error";
}

import { randomUUID as le } from "crypto";

import { promises as rt } from "fs";

import { createConnection as fn } from "net";

import { platform as hn } from "os";

import { dirname as gn } from "path";

var Ot = [ "pairing_disabled", "not_signed_in", "managed_org_missing", "malformed", "unknown_kid", "jwks_unavailable", "bad_signature", "wrong_issuer_or_audience", "expired", "not_yet_valid", "wrong_peer_kind", "key_binding_mismatch", "account_mismatch", "org_mismatch", "org_not_permitted", "bad_key_confirmation", "attest_failed", "rate_limited", "unsupported_peer", "unknown_pairing" ], $t = new Set(Ot);

class f extends Error {
  code;
  httpStatus;
  peerOrg;
  constructor(e, t, n = {}) {
    super(t ? `${e}: ${t}` : e, {
      cause: n.cause
    });
    this.name = "PairingError", this.code = e, this.httpStatus = n.httpStatus, this.peerOrg = n.peerOrg;
  }
  wireCode() {
    return this.code === "attest_failed" && this.httpStatus !== void 0 ? `attest_failed:${this.httpStatus}` : this.code;
  }
}

function me(e) {
  if (typeof e !== "string") return "malformed";
  let t = e.startsWith("attest_failed:") ? "attest_failed" : e;
  return $t.has(t) ? t : "malformed";
}

function m(e) {
  return new f("malformed", e);
}

class v {
  wall;
  mono;
  constructor(e = {}) {
    this.wall = e.now ?? (() => Date.now() / 1e3), this.mono = e.monotonicNow ?? (() => globalThis.performance.now() / 1e3);
  }
  stamp() {
    return {
      wall: this.wall(),
      mono: this.mono()
    };
  }
  since(e) {
    return Math.max(0, this.wall() - e.wall, this.mono() - e.mono);
  }
}

var Nt = new Set([ "localhost", "127.0.0.1", "[::1]" ]);

function J(e, t = !1) {
  let n;
  try {
    n = new URL(e);
  } catch {
    throw TypeError(`pairing apiOrigin is not a URL: ${e}`);
  }
  if (!(n.protocol === "https:" || t && n.protocol === "http:" && Nt.has(n.hostname)) || n.username || n.password || n.pathname !== "/" && n.pathname !== "" || n.search || n.hash) throw TypeError(`pairing apiOrigin must be a bare https origin: ${e}`);
  let i = `${n.origin}/api/oauth/local_pairing`;
  return {
    issuer: i,
    attest: `${i}/attest`,
    jwks: `${i}/jwks.json`
  };
}

var O = "claude-local-pairing/v1", Ut = new TextEncoder, Dt = new TextDecoder("utf-8", {
  fatal: !0
});

function _(e) {
  return Ut.encode(e);
}

function N(e) {
  return Dt.decode(e);
}

function E(...e) {
  return Y(e);
}

function Y(e) {
  let t = 0;
  for (let i of e) t += i.length;
  let n = new Uint8Array(t), r = 0;
  for (let i of e) n.set(i, r), r += i.length;
  return n;
}

function x(e) {
  let t = typeof e === "string" ? _(e) : e, n = new Uint8Array(4 + t.length);
  return new DataView(n.buffer).setUint32(0, t.length, !1), n.set(t, 4), n;
}

function P(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
}

function U(e) {
  if (!P(e)) throw RangeError("u64be: not a non-negative safe integer");
  let t = new Uint8Array(8);
  return new DataView(t.buffer).setBigUint64(0, BigInt(e), !1), t;
}

var Mt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", Bt = /^[A-Za-z0-9_-]*$/;

function T(e) {
  let t = e.length % 4;
  if (!Bt.test(e) || t === 1) throw SyntaxError("not unpadded base64url");
  if (t !== 0) {
    if ((Mt.indexOf(e.charAt(e.length - 1)) & (t === 2 ? 15 : 3)) !== 0) throw SyntaxError("non-canonical base64url");
  }
  let n = e.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((e.length + 3) % 4), r = atob(n), i = new Uint8Array(r.length);
  for (let s = 0; s < r.length; s++) i[s] = r.charCodeAt(s);
  return i;
}

function k(e) {
  let t = "";
  for (let n = 0; n < e.length; n += 32768) t += String.fromCharCode.apply(null, e.subarray(n, n + 32768));
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function ye(e, t) {
  if (e.length !== t.length) return !1;
  let n = 0;
  for (let r = 0; r < e.length; r++) n |= (e[r] ?? 0) ^ (t[r] ?? 0);
  return n === 0;
}

function we(e) {
  let t = new Uint8Array(e);
  return globalThis.crypto.getRandomValues(t), t;
}

function y(e) {
  return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
}

async function q(e) {
  return new Uint8Array(await globalThis.crypto.subtle.digest("SHA-256", y(e)));
}

var Lt = 87;

function be(e) {
  if (typeof e !== "string" || e.length !== Lt) throw m("public_key must be 87 base64url chars");
  let t;
  try {
    t = T(e);
  } catch {
    throw m("public_key is not base64url");
  }
  if (t.length !== 65 || t[0] !== 4) throw m("public_key must be an uncompressed P-256 point");
  return t;
}

function jt(e) {
  let t = k(e.subarray(1, 33)), n = k(e.subarray(33, 65));
  return `{"crv":"P-256","kty":"EC","x":"${t}","y":"${n}"}`;
}

async function Q(e) {
  return k(await q(_(jt(e))));
}

async function _e(e) {
  try {
    return await globalThis.crypto.subtle.importKey("raw", y(e), {
      name: "ECDH",
      namedCurve: "P-256"
    }, !1, []);
  } catch {
    throw m("public_key is not a point on P-256");
  }
}

async function ke(e, t) {
  return globalThis.crypto.subtle.importKey("jwk", {
    kty: "EC",
    crv: "P-256",
    x: e,
    y: t,
    ext: !0
  }, {
    name: "ECDSA",
    namedCurve: "P-256"
  }, !1, [ "verify" ]);
}

async function xe() {
  let e = await globalThis.crypto.subtle.generateKey({
    name: "ECDH",
    namedCurve: "P-256"
  }, !1, [ "deriveBits" ]), t = new Uint8Array(await globalThis.crypto.subtle.exportKey("raw", e.publicKey));
  return {
    keyPair: e,
    publicKey: k(t),
    jkt: await Q(t)
  };
}

var Z = 10;

function ee(e, t, n) {
  let r, i = new Promise((s, o) => {
    r = setTimeout(() => o(n()), t * 1e3), r.unref?.();
  });
  return Promise.race([ e, i ]).finally(() => clearTimeout(r));
}

var Jt = 60, Te = 300, ve = 3600;

function Pe(e, t, n) {
  let r = new RegExp(`(?:^|,)\\s*${t}=(\\d+)`).exec(e ?? "");
  return r ? Number(r[1]) : n;
}

function S(e, t) {
  return new f("jwks_unavailable", e, {
    cause: t
  });
}

class te {
  opts;
  keys=new Map;
  fetchedAt;
  maxAge=Te;
  staleIfError=ve;
  flooredAt;
  inflight;
  clock;
  floor;
  timeoutSec;
  url;
  constructor(e) {
    this.opts = e;
    this.clock = new v(e), this.floor = Jt, this.timeoutSec = e.timeoutSec ?? Z, this.url = J(e.apiOrigin, e.allowLoopbackHttp).jwks;
  }
  async getKey(e) {
    let t = this.lookup(e);
    if (!t || this.age() > this.maxAge) {
      if (!this.inflight && !this.floored()) {
        if (!t) this.flooredAt = this.clock.stamp();
        this.inflight = this.fetch().finally(() => {
          this.inflight = void 0;
        });
      }
      await this.inflight, t = this.lookup(e);
    }
    if (t) return t;
    if (this.keys.size === 0) throw S("no verification keys");
    throw new f("unknown_kid", e.slice(0, 32));
  }
  lookup(e) {
    return this.servable().get(e);
  }
  servable() {
    if (this.age() > this.maxAge + this.staleIfError) this.keys = new Map;
    return this.keys;
  }
  age() {
    return this.fetchedAt ? this.clock.since(this.fetchedAt) : 1 / 0;
  }
  floored() {
    return this.flooredAt !== void 0 && this.clock.since(this.flooredAt) < this.floor;
  }
  async fetch() {
    try {
      await this.load();
    } catch (e) {
      if (this.flooredAt = this.clock.stamp(), this.servable().size > 0) return;
      throw e instanceof f ? e : S("fetch failed", e);
    }
  }
  async load() {
    let e = await ee(this.get(), this.timeoutSec, () => S("timed out"));
    if (e.status !== 200) throw S(`HTTP ${e.status}`);
    let t;
    try {
      t = JSON.parse(e.text);
    } catch {
      throw S("not JSON");
    }
    let n = t?.keys;
    if (!Array.isArray(n)) throw S("no keys array");
    let r = new Map;
    for (let i of n) {
      if (i?.kty !== "EC" || i.crv !== "P-256" || typeof i.kid !== "string" || typeof i.x !== "string" || typeof i.y !== "string" || i.alg !== void 0 && i.alg !== "ES256" || i.use !== void 0 && i.use !== "sig") continue;
      try {
        r.set(i.kid, await ke(i.x, i.y));
      } catch {}
    }
    if (r.size === 0) throw S("no usable EC P-256 keys");
    this.maxAge = Math.max(Pe(e.cacheControl, "max-age", Te), this.floor), this.staleIfError = Pe(e.cacheControl, "stale-if-error", ve), 
    this.keys = r, this.fetchedAt = this.clock.stamp();
  }
  async get() {
    let e = await this.opts.fetchImpl(this.url, {
      method: "GET",
      headers: {
        accept: "application/json",
        "cache-control": "no-cache"
      }
    }), t = e.status, n = e.headers.get("cache-control");
    return {
      status: t,
      cacheControl: n,
      text: t === 200 ? await e.text() : ""
    };
  }
}

function C(e) {
  if (e === null || typeof e === "boolean" || typeof e === "string") return JSON.stringify(e);
  if (typeof e === "number") {
    if (!Number.isFinite(e)) throw TypeError("canonicalJson: non-finite number");
    return JSON.stringify(e);
  }
  if (Array.isArray(e)) return "[" + e.map(t => C(t)).join(",") + "]";
  if (typeof e === "object") {
    let t = e;
    return "{" + Object.keys(t).filter(r => t[r] !== void 0).sort().map(r => JSON.stringify(r) + ":" + C(t[r])).join(",") + "}";
  }
  throw TypeError(`canonicalJson: unsupported ${typeof e}`);
}

function ne(e) {
  let t = 0, n = c => {
    throw SyntaxError(`strict JSON: ${c} at ${t}`);
  }, r = () => {
    while (t < e.length && ` \t\n\r`.includes(e.charAt(t))) t++;
  }, i = () => {
    let c = t;
    if (e[t] !== '"') n("expected string");
    t++;
    while (t < e.length && e[t] !== '"') {
      if (e[t] === "\\") t++;
      t++;
    }
    if (t >= e.length) n("unterminated string");
    return t++, JSON.parse(e.slice(c, t));
  }, s = () => {
    r();
    let c = e[t];
    if (c === "{") {
      t++;
      let u = {}, l = new Set;
      if (r(), e[t] === "}") return t++, u;
      for (;;) {
        r();
        let p = i();
        if (l.has(p)) n(`duplicate key ${JSON.stringify(p)}`);
        if (l.add(p), r(), e[t] !== ":") n("expected ':'");
        if (t++, Object.defineProperty(u, p, {
          value: s(),
          enumerable: !0,
          writable: !0,
          configurable: !0
        }), r(), e[t] === ",") {
          t++;
          continue;
        }
        if (e[t] === "}") return t++, u;
        n("expected ',' or '}'");
      }
    }
    if (c === "[") {
      t++;
      let u = [];
      if (r(), e[t] === "]") return t++, u;
      for (;;) {
        if (u.push(s()), r(), e[t] === ",") {
          t++;
          continue;
        }
        if (e[t] === "]") return t++, u;
        n("expected ',' or ']'");
      }
    }
    if (c === '"') return i();
    let a = /^(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null)/.exec(e.slice(t));
    if (!a) n("unexpected token");
    return t += a[0].length, JSON.parse(a[0]);
  }, o = s();
  if (r(), t !== e.length) n("trailing data");
  return o;
}

var qt = "local-pairing+jwt", Ft = 4096, Kt = 256;

function re(e) {
  if (typeof e !== "string" || e.length === 0 || e.length > Ft) throw m("assertion missing or too long");
  let t = e.split("."), [n, r, i] = t;
  if (t.length !== 3 || n === void 0 || r === void 0 || i === void 0) throw m("assertion is not a compact JWS");
  let s, o, c;
  try {
    s = ne(N(T(n))), o = ne(N(T(r))), c = T(i);
  } catch (u) {
    throw m(`assertion does not decode: ${String(u)}`);
  }
  if (s === null || typeof s !== "object" || Array.isArray(s) || o === null || typeof o !== "object" || Array.isArray(o)) throw m("assertion header/payload are not objects");
  let a = s;
  if (a.alg !== "ES256") throw new f("bad_signature", `alg ${JSON.stringify(a.alg)} is not ES256`);
  if ("crit" in a) throw m("crit header is not accepted");
  if (a.typ !== qt) throw new f("wrong_issuer_or_audience", `typ ${JSON.stringify(a.typ)}`);
  if (typeof a.kid !== "string" || a.kid.length === 0 || a.kid.length > Kt) throw m("kid missing or too long");
  if (c.length !== 64) throw new f("bad_signature", "ES256 signature must be exactly 64 bytes");
  return {
    header: {
      kid: a.kid
    },
    payload: o,
    signingInput: _(`${n}.${r}`),
    signature: c
  };
}

async function Ce(e, t) {
  if (!await globalThis.crypto.subtle.verify({
    name: "ECDSA",
    hash: "SHA-256"
  }, t, y(e.signature), y(e.signingInput))) throw new f("bad_signature");
}

var Ht = [ "desktop", "chrome_extension" ];

function Wt(e) {
  return Ht.includes(e);
}

var Se = "claude-local-pairing/v1", Re = 60, Ee = 301, Gt = 30;

function F(e, t) {
  let n = e[t];
  if (typeof n !== "string" || n.length === 0) throw m(`claim ${t} missing`);
  return n;
}

function Ae(e, t) {
  let n = e[t];
  if (typeof n !== "number" || !Number.isFinite(n)) throw m(`claim ${t} missing`);
  return n;
}

function Ie(e) {
  let t = F(e, "client_kind");
  if (!Wt(t)) throw new f("wrong_peer_kind", t);
  let n = e.cnf;
  if (!n || typeof n !== "object" || Array.isArray(n) || typeof n.jkt !== "string") throw m("cnf.jkt missing");
  return {
    iss: F(e, "iss"),
    sub: F(e, "sub"),
    org: F(e, "org"),
    azp: typeof e.azp === "string" ? e.azp : void 0,
    client_kind: t,
    hybrid: e.hybrid === !0,
    cnf: {
      jkt: n.jkt
    },
    iat: Ae(e, "iat"),
    exp: Ae(e, "exp"),
    jti: typeof e.jti === "string" ? e.jti : void 0
  };
}

async function Oe(e, t, n) {
  let r = re(e), i = be(t), s = await n.jwks.getKey(r.header.kid);
  await Ce(r, s);
  let o = Ie(r.payload), c = r.payload.aud, a = c === Se || Array.isArray(c) && c.includes(Se);
  if (o.iss !== n.expectedIssuer || !a) throw new f("wrong_issuer_or_audience");
  if (o.exp - o.iat > Ee) throw new f("expired", `assertion lifetime exceeds ${Ee} s`);
  if (o.client_kind !== n.expectedKind) throw new f("wrong_peer_kind", o.client_kind);
  if (await Q(i) !== o.cnf.jkt) throw new f("key_binding_mismatch");
  return {
    claims: o,
    peerRaw: i
  };
}

function $e(e, t) {
  if (e.iat > t + Re) throw new f("not_yet_valid");
  if (e.exp + Re <= t) throw new f("expired");
}

var zt = 5, Vt = 60;

class ie {
  opts;
  current;
  minting;
  lastFailure;
  epoch=0;
  clock;
  timeoutSec;
  urls;
  constructor(e) {
    this.opts = e;
    this.clock = new v(e), this.timeoutSec = e.timeoutSec ?? Z, this.urls = J(e.apiOrigin, e.allowLoopbackHttp);
  }
  get issuer() {
    return this.urls.issuer;
  }
  serverNow(e) {
    return e.claims.iat + this.clock.since(e.minted);
  }
  async get() {
    let e = this.current;
    if (e && e.claims.exp - Gt > this.serverNow(e)) return e;
    let t = this.lastFailure;
    if (t && this.clock.since(t.at) < t.floor) throw t.error;
    let n = this.minting ??= this.mint().finally(() => {
      if (this.minting === n) this.minting = void 0;
    });
    return n;
  }
  isCurrent(e) {
    return e.epoch === this.epoch;
  }
  clear() {
    this.epoch += 1, this.current = void 0, this.minting = void 0, this.lastFailure = void 0;
  }
  async mint() {
    let e = this.epoch;
    try {
      let t = await ee(this.attest(e), this.timeoutSec, () => new f("attest_failed", "timed out", {
        httpStatus: 0
      }));
      if (e !== this.epoch) throw new f("not_signed_in", "identity changed during attest");
      return this.current = t, this.lastFailure = void 0, t;
    } catch (t) {
      let n = t instanceof f ? t : new f("attest_failed", "unexpected", {
        cause: t
      });
      if (e === this.epoch && n.code !== "not_signed_in") {
        let r = n.code === "rate_limited" || n.code === "pairing_disabled";
        this.lastFailure = {
          error: n,
          at: this.clock.stamp(),
          floor: r ? Vt : zt
        };
      }
      throw n;
    }
  }
  async attest(e) {
    let t;
    try {
      t = await this.opts.getBearer();
    } catch (a) {
      throw new f("not_signed_in", "bearer unavailable", {
        cause: a
      });
    }
    if (!t) throw new f("not_signed_in");
    let n = await xe(), r = this.clock.stamp(), i;
    try {
      i = await this.opts.fetchImpl(this.urls.attest, {
        method: "POST",
        headers: {
          authorization: `Bearer ${t}`,
          "content-type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify({
          public_key: n.publicKey
        })
      });
    } catch (a) {
      throw new f("attest_failed", "fetch failed", {
        httpStatus: 0,
        cause: a
      });
    }
    if (i.status === 404) throw new f("pairing_disabled", "attest is not enabled", {
      httpStatus: 404
    });
    if (i.status === 429) throw new f("rate_limited", void 0, {
      httpStatus: 429
    });
    if (i.status !== 200) throw new f("attest_failed", `HTTP ${i.status}`, {
      httpStatus: i.status
    });
    let s;
    try {
      s = JSON.parse(await i.text());
    } catch {
      throw new f("attest_failed", "response is not JSON", {
        httpStatus: 200
      });
    }
    let o = s?.assertion;
    if (typeof o !== "string") throw new f("attest_failed", "response lacks assertion", {
      httpStatus: 200
    });
    let c = Ie(re(o).payload);
    if (c.cnf.jkt !== n.jkt) throw new f("key_binding_mismatch", "server bound a different key");
    return {
      assertion: o,
      claims: c,
      eph: n,
      minted: r,
      epoch: e
    };
  }
}

async function Ne(e, t) {
  let {mac: n, ...r} = t;
  return q(E(x(O), x(_(C(e))), x(_(C(r)))));
}

async function Ue(e, t) {
  return new Uint8Array(await globalThis.crypto.subtle.deriveBits({
    name: "ECDH",
    public: t
  }, e, 256));
}

async function D(e, t, n, r) {
  return new Uint8Array(await globalThis.crypto.subtle.deriveBits({
    name: "HKDF",
    hash: "SHA-256",
    salt: y(t),
    info: y(_(`${O} ${n}`))
  }, e, r * 8));
}

async function De(e, t) {
  let n = await globalThis.crypto.subtle.importKey("raw", y(e), "HKDF", !1, [ "deriveBits" ]), [r, i, s, o, c] = await Promise.all([ D(n, t, "confirm d", 32), D(n, t, "confirm e", 32), D(n, t, "aead d2e", 32), D(n, t, "aead e2d", 32), D(n, t, "sid", 16) ]);
  return {
    th: t,
    kcD: r,
    kcE: i,
    kD2e: s,
    kE2d: o,
    sid: c
  };
}

async function oe(e, t) {
  let n = await globalThis.crypto.subtle.importKey("raw", y(e), {
    name: "HMAC",
    hash: "SHA-256"
  }, !1, [ "sign" ]);
  return new Uint8Array(await globalThis.crypto.subtle.sign("HMAC", n, y(t)));
}

function Me(e) {
  return oe(e.kcE, e.th);
}

function Be(e) {
  return oe(e.kcD, e.th);
}

function Le(e) {
  return oe(e.kcE, E(e.th, _("done")));
}

var Xt = [ "execute_tool", "tool_response", "notification:permission_request", "notification:sealed_broadcast", "notification:inference_request", "notification:inference_response" ], Yt = 3, Qt = 33554432, Zt = 60, en = /\p{Surrogate}/u, tn = new Set(Xt);

function je(e) {
  return typeof e === "string" && tn.has(e);
}

function Je(e) {
  return e === void 0 || typeof e === "string" && e !== "" && !en.test(e);
}

function nn(e) {
  if (e === void 0) return !0;
  let t = e;
  return !!t && typeof t === "object" && P(t.n) && t.n >= 1 && P(t.i) && t.i < t.n;
}

function qe(e, t, n, r, i, s, o) {
  let c = U(n);
  return {
    name: "AES-GCM",
    iv: y(E(new Uint8Array(4), c)),
    additionalData: y(E(x(O), x(e), x(t), c, x(r), x(i ?? ""), U(s), ...o ? [ x("chunk"), U(o.i), U(o.n) ] : [])),
    tagLength: 128
  };
}

function Fe(e) {
  try {
    let t = Math.floor(e());
    return P(t) ? t : Number.NaN;
  } catch {
    return Number.NaN;
  }
}

async function Ke(e, t) {
  return globalThis.crypto.subtle.importKey("raw", y(e), {
    name: "AES-GCM"
  }, !1, [ t ]);
}

var He = () => {};

function We(e) {
  try {
    return {
      ok: !0,
      inner: JSON.parse(N(e))
    };
  } catch {
    return {
      ok: !1,
      reason: "malformed"
    };
  }
}

class K {
  sid;
  dirOut;
  kOut;
  kIn;
  clock;
  sidB64;
  ctrOut=0;
  ctrIn=-1;
  tagFailures=0;
  tornDown=!1;
  q={
    send: Promise.resolve(),
    recv: Promise.resolve()
  };
  partial;
  stats={
    gaps: 0,
    replays: 0,
    stale: 0,
    badTags: 0
  };
  born;
  constructor(e, t, n, r, i) {
    this.sid = e;
    this.dirOut = t;
    this.kOut = n;
    this.kIn = r;
    this.clock = i;
    this.sidB64 = k(e), this.born = i.stamp();
  }
  static async create(e, t, n = {}) {
    let [r, i, s] = e === "desktop" ? [ t.kD2e, t.kE2d, "d2e" ] : [ t.kE2d, t.kD2e, "e2d" ];
    return new K(t.sid, s, await Ke(r, "encrypt"), await Ke(i, "decrypt"), n.clock ?? new v);
  }
  ownSeconds() {
    return Fe(() => this.born.wall + this.clock.since(this.born));
  }
  get dirIn() {
    return this.dirOut === "d2e" ? "e2d" : "d2e";
  }
  get isTornDown() {
    return this.tornDown;
  }
  enqueue(e, t) {
    let n = this.q[e].then(t, t);
    return this.q[e] = n.then(He, He), n;
  }
  seal(e, t, n) {
    return this.sealFrames(e, t, n, void 0).then(([r]) => {
      if (r === void 0) throw Error("seal: no envelope produced");
      return r;
    });
  }
  sealChunked(e, t, n, r) {
    if (!Number.isSafeInteger(r) || r < 1) return Promise.reject(RangeError("sealChunked: maxChunkBytes must be a positive integer"));
    return this.sealFrames(e, t, n, r);
  }
  sealFrames(e, t, n, r) {
    if (this.tornDown) return Promise.reject(Error("sealed channel torn down"));
    if (!je(e)) return Promise.reject(TypeError("seal: unknown frame kind"));
    if (!Je(t)) return Promise.reject(TypeError("seal: toolUseId must be a non-empty well-formed string"));
    let i;
    try {
      let l = JSON.stringify(n);
      if (typeof l !== "string") throw TypeError("not JSON-serialisable");
      i = _(l);
    } catch (l) {
      return Promise.reject(TypeError("seal: inner is not JSON-serialisable", {
        cause: l
      }));
    }
    let s = r !== void 0, o = r ?? i.length, c = Math.ceil(i.length / o), a = Fe(this.clock.wall);
    if (!P(a)) return Promise.reject(Error("seal: clock is not a usable time"));
    let u = this.ctrOut;
    if (this.ctrOut = u + c, !Number.isSafeInteger(this.ctrOut)) return this.tornDown = !0, 
    Promise.reject(Error("sealed channel counter exhausted"));
    return this.enqueue("send", async () => {
      let l = [];
      for (let p = 0; p < c; p++) {
        let h = s ? {
          i: p,
          n: c
        } : void 0, g = new Uint8Array(await globalThis.crypto.subtle.encrypt(qe(this.dirOut, this.sid, u + p, e, t, a, h), this.kOut, y(i.subarray(p * o, (p + 1) * o))));
        if (this.tornDown) throw Error("sealed channel torn down");
        l.push({
          sid: this.sidB64,
          ctr: u + p,
          t: a,
          ct: k(g),
          ...h && {
            chunk: h
          }
        });
      }
      return l;
    });
  }
  open(e, t, n) {
    return this.enqueue("recv", () => this.openNow(e, t, n));
  }
  async openNow(e, t, n) {
    if (this.tornDown) return {
      ok: !1,
      reason: "torn_down"
    };
    let r = n;
    if (!r || typeof r !== "object" || typeof r.sid !== "string" || typeof r.ct !== "string" || !P(r.t) || !je(e) || !Je(t) || !nn(r.chunk)) return {
      ok: !1,
      reason: "malformed"
    };
    let {t: i, chunk: s} = r;
    if (r.sid !== this.sidB64) return {
      ok: !1,
      reason: "foreign_sid"
    };
    let o = r.ctr;
    if (!P(o)) return {
      ok: !1,
      reason: "malformed"
    };
    if (o <= this.ctrIn) return this.stats.replays += 1, {
      ok: !1,
      reason: "replay"
    };
    if (!(Math.abs(this.ownSeconds() - i) <= Zt)) return this.stats.stale += 1, {
      ok: !1,
      reason: "stale"
    };
    let a;
    try {
      a = T(r.ct);
    } catch {
      return {
        ok: !1,
        reason: "malformed"
      };
    }
    if (a.length < 16) return {
      ok: !1,
      reason: "malformed"
    };
    let u;
    try {
      u = await globalThis.crypto.subtle.decrypt(qe(this.dirIn, this.sid, o, e, t, i, s), this.kIn, y(a));
    } catch {
      if (this.stats.badTags += 1, ++this.tagFailures >= Yt) this.tearDown();
      return {
        ok: !1,
        reason: "bad_tag"
      };
    }
    if (this.tornDown) return {
      ok: !1,
      reason: "torn_down"
    };
    if (o > this.ctrIn + 1) this.stats.gaps += o - this.ctrIn - 1;
    this.ctrIn = o;
    let l = new Uint8Array(u);
    if (!s) return this.partial = void 0, We(l);
    return this.reassemble(o, s, l);
  }
  reassemble(e, t, n) {
    let r = this.partial;
    if (this.partial = void 0, t.i === 0) r = {
      firstCtr: e,
      n: t.n,
      parts: [],
      bytes: 0
    }; else if (!r || e !== r.firstCtr + r.parts.length) return {
      ok: !1,
      reason: "bad_chunk"
    };
    if (r.bytes + n.length > Qt) return {
      ok: !1,
      reason: "bad_chunk"
    };
    if (r.parts.push(n), r.bytes += n.length, r.parts.length < r.n) return this.partial = r, 
    {
      ok: !1,
      reason: "partial"
    };
    return We(Y(r.parts));
  }
  tearDown() {
    this.tornDown = !0, this.partial = void 0;
  }
}

var ae = 1, rn = 30, Ve = {
  offer: "instance_hint",
  accept: "instance"
}, Xe = 32;

function se(e, t) {
  return e.toLowerCase() === t.toLowerCase();
}

function on(e, t, n) {
  if (t.sub !== e.sub) throw new f("account_mismatch");
  if (n.requiredOrg !== void 0) {
    if (!se(e.org, n.requiredOrg)) throw new f("org_not_permitted", "own sign-in is not in the configured org");
  }
  let r = t.hybrid && t.client_kind === "desktop", i = !n.allowedOrgs || n.allowedOrgs.some(s => se(s, t.org));
  if (r && !i) throw new f("org_not_permitted", "the managing Desktop's org is outside the configured list");
  if ((n.requiredOrg !== void 0 || r || n.hybridSignIn) && !se(t.org, e.org)) throw new f("org_mismatch", void 0, i ? {
    peerOrg: t.org
  } : {});
}

function ce(e, t, n) {
  if (typeof e !== "string") throw m(`${t} missing`);
  let r;
  try {
    r = T(e);
  } catch {
    throw m(`${t} not base64url`);
  }
  if (n !== void 0 && r.length !== n) throw m(`${t} must be ${n} bytes`);
  return r;
}

function Ye(e, t) {
  let n = e;
  if (!n || typeof n !== "object" || n.msg !== t) throw m(`pair_${t} malformed`);
  if (n.v !== ae) {
    let r = typeof n.v === "number" ? String(n.v) : typeof n.v;
    throw m(`unsupported v ${r}`);
  }
  return n;
}

function Qe(e, t) {
  if (e === void 0) return;
  if (!e || typeof e !== "object" || Array.isArray(e) || C(e).length > 1024) throw m(`${t} must be a small object`);
  return e;
}

function sn(e, t) {
  let n = Ve[t], r = Ye(e, t);
  try {
    C(r);
  } catch {
    throw m(`pair_${t} is not canonical JSON`);
  }
  ce(r.nonce, "nonce", Xe);
  let i = Qe(r[n], n);
  return {
    hello: r,
    instance: i
  };
}

function an(e, t, n) {
  let r = {
    msg: e,
    v: ae,
    assertion: t.assertion,
    public_key: t.eph.publicKey,
    nonce: k(we(Xe))
  };
  if (n) r[Ve[e]] = n;
  return r;
}

function cn(e, t) {
  let n = Ye(e, t);
  if (typeof n.sid !== "string") throw m(`pair_${t} sid missing`);
  return {
    sid: n.sid,
    mac: ce(n.mac, `pair_${t} mac`)
  };
}

function un(e, t) {
  if (e === void 0) return;
  try {
    return Qe(JSON.parse(JSON.stringify(e)), t);
  } catch (n) {
    throw TypeError(`${t} must be a small JSON object`, {
      cause: n
    });
  }
}

function Ze(e, t) {
  if (!e.isCurrent(t)) throw new f("not_signed_in", "identity changed during the handshake");
}

function Ge(e, t, n) {
  if (!ye(e, t)) throw new f("bad_key_confirmation", n);
}

function ze(e, t, n) {
  if (e.since(t) > rn) throw new f("expired", `${n} took too long`);
}

async function ln(e, t, n, r) {
  let i = await K.create(e, r.secrets, {
    clock: n
  });
  return Ze(t, r.own), {
    sidB64: i.sidB64,
    channel: i,
    own: r.own.claims,
    peer: r.peer,
    peerInstance: r.peerInstance,
    establishedAt: n.wall()
  };
}

class ue {
  opts;
  phase={
    is: "fresh"
  };
  clock;
  instanceHint;
  constructor(e) {
    this.opts = e;
    this.clock = new v(e), this.instanceHint = un(e.instanceHint, "instanceHint");
  }
  enter(e, t) {
    let n = this.phase;
    if (n.is !== e) throw m(t);
    return this.phase = {
      is: "busy"
    }, n;
  }
  async step(e) {
    try {
      let {next: t, out: n} = await e();
      return this.phase = t, n;
    } catch (t) {
      throw this.phase = {
        is: "spent"
      }, t;
    }
  }
  async createOffer() {
    return this.enter("fresh", "createOffer already called; use a new Initiator"), this.step(async () => {
      let e = await this.opts.source.get(), t = an("offer", e, this.instanceHint);
      return {
        next: {
          is: "offered",
          offer: t,
          own: e,
          at: this.clock.stamp()
        },
        out: t
      };
    });
  }
  async onAccept(e) {
    let t = this.enter("offered", "no offer outstanding");
    return this.step(async () => {
      ze(this.clock, t.at, "pair_accept");
      let {hello: n, instance: r} = sn(e, "accept"), i = ce(n.mac, "pair_accept mac"), {source: s, jwks: o, policy: c} = this.opts, {claims: a, peerRaw: u} = await Oe(n.assertion, n.public_key, {
        jwks: o,
        expectedIssuer: s.issuer,
        expectedKind: "chrome_extension"
      });
      $e(a, s.serverNow(t.own)), on(t.own.claims, a, c);
      let l = await _e(u), p = await Ue(t.own.eph.keyPair.privateKey, l), h = await Ne(t.offer, n), g = await De(p, h);
      Ge(i, await Me(g));
      let d = await Be(g);
      Ze(s, t.own);
      let w = k(g.sid);
      return {
        next: {
          is: "finishing",
          own: t.own,
          secrets: g,
          sidB64: w,
          peer: a,
          peerInstance: r,
          at: this.clock.stamp()
        },
        out: {
          msg: "finish",
          v: ae,
          sid: w,
          mac: k(d)
        }
      };
    });
  }
  async onDone(e) {
    let t = this.enter("finishing", "no finish outstanding");
    return this.step(async () => {
      ze(this.clock, t.at, "pair_done");
      let n = cn(e, "done");
      if (n.sid !== t.sidB64) throw new f("bad_key_confirmation", "pair_done sid differs");
      Ge(n.mac, await Le(t.secrets), "pair_done mac");
      let r = await ln("desktop", this.opts.source, this.clock, t);
      return {
        next: {
          is: "spent"
        },
        out: r
      };
    });
  }
}

function et(e) {
  let t = e;
  if (!t || typeof t !== "object" || t.msg !== "refuse") return;
  return me(t.code);
}

var tt = new WeakMap;

function nt(e) {
  let t = tt.get(e);
  if (!t) t = {
    source: new ie(e),
    jwks: new te(e)
  }, tt.set(e, t);
  return t;
}

function dn(e) {
  return typeof e === "string" && /^category[0-9a-z_]{1,32}$/.test(e) ? e : void 0;
}

function pn(e) {
  let {_perActionOnly: t, _privateHostReadAlwaysOffer: n, _privateHostReadAlways: r, ...i} = e;
  return i;
}

function lrr(e, t) {
  return {
    toolUseId: t.toolUseId,
    requestId: t.requestId,
    toolType: typeof e.tool_type === "string" ? e.tool_type : "unknown",
    url: typeof e.url === "string" ? e.url : "",
    actionData: e.action_data && typeof e.action_data === "object" ? pn(e.action_data) : void 0,
    category: dn(e.category)
  };
}

function drr(e) {
  return {
    ...e?.permissionMode ? {
      permission_mode: e.permissionMode
    } : {},
    ...e?.allowedDomains?.length ? {
      allowed_domains: e.allowedDomains
    } : {},
    ...e?.onPermissionRequest ? {
      handle_permission_prompts: !0
    } : {},
    ...e?.sessionScope ? {
      session_scope: e.sessionScope
    } : {}
  };
}

function DDe(e, t = 64) {
  return JSON.stringify(String(e).slice(0, t));
}

class zI extends Error {
  constructor(e) {
    super(e);
    this.name = "SocketConnectionError";
  }
}

class W extends Error {
  constructor(e) {
    super(e);
    this.name = "ToolCallSupersededError";
  }
}

class eVe extends Error {
  constructor(e) {
    super(e);
    this.name = "NoExtensionConnectedError";
  }
}

class tVe extends Error {
  routingAckReceived;
  constructor(e, t) {
    super(e);
    this.name = "ToolCallTimeoutError", this.routingAckReceived = t?.routingAckReceived;
  }
}

class VJ extends Error {
  constructor(e) {
    super(e);
    this.name = "ExtensionDisconnectedMidCallError";
  }
}

class B extends Error {
  constructor(e) {
    super(e);
    this.name = "RequestTooLargeError";
  }
}

function it(e) {
  return "result" in e || "error" in e;
}

function ot(e) {
  return "method" in e && typeof e.method === "string";
}

var H = 5e3, mn = 15e3, yn = 15e3, st = 288e5, at = 1e3, ct = 2e4, ut = 5e3, wn = 1e4, I = 1032192, bn = 1024, de = Math.floor((I - bn) * 3 / 4) - 16;

class M extends f {
  constructor(e, t) {
    super(e, "peer-reported", {
      httpStatus: t
    });
    this.name = "PeerRefusedPairing";
  }
}

class A extends Error {
  which;
  constructor(e) {
    super(e === "reply" ? "No reply to a pairing message" : "Our attest/JWKS step overran while pairing");
    this.which = e;
    this.name = "HandshakeTimeout";
  }
}

function lt(e, t) {
  let n = e.result;
  if (n && typeof n === "object" && n.local_pairing) {
    if (n.local_pairing.msg === t) return n.local_pairing;
    throw new f("malformed", `expected ${t}`);
  }
  let r = e.error;
  if (r && typeof r === "object" && r.local_pairing) {
    let i = et(r.local_pairing), s = r.local_pairing.code, o = typeof s === "string" && /^attest_failed:\d{1,3}$/.test(s) ? Number(s.slice(14)) : void 0;
    throw new M(i ?? "malformed", o);
  }
  if (t === "accept" && pt(e)) throw new M("unsupported_peer");
  throw new f("malformed", "unrecognised reply to a pairing message");
}

function _n(e) {
  return e === void 0 || e < 400 || e >= 500;
}

var dt = e => e === "ENOENT" || e === "ECONNREFUSED";

function iJo(e, t) {
  switch (e) {
   case "pairing_disabled":
   case "org_not_permitted":
   case "unsupported_peer":
   case "wrong_peer_kind":
    return "durable";

   case "account_mismatch":
   case "org_mismatch":
    return "peer_may_move";

   case "not_signed_in":
    return t ? "peer_not_ready" : "awaits_token";

   case "managed_org_missing":
    return "peer_not_ready";

   case "attest_failed":
    return "awaits_token";

   default:
    return "retry";
  }
}

function kn(e) {
  if (!(e instanceof f)) return !1;
  switch (e.code) {
   case "jwks_unavailable":
    return !0;

   case "attest_failed":
    return _n(e.httpStatus);

   case "not_signed_in":
    return !(e instanceof M) && e.cause !== void 0;

   default:
    return !1;
  }
}

function pt(e) {
  let t = e.error?.content;
  if (!Array.isArray(t) || t.length !== 1) return !1;
  let n = t[0];
  return n?.type === "text" && n.text === "No tool specified";
}

function pe(e, t = I) {
  return new B(`Request too large for the local browser connection (${e} bytes; limit ${t}). Send smaller inputs or fewer files per call.`);
}

function xn(e) {
  let t = e.peerInstance?.max_reassembly_bytes;
  return typeof t === "number" && Number.isSafeInteger(t) && t > 0 ? t : void 0;
}

function Tn(e) {
  let t = e;
  return !!t && typeof t === "object" && typeof t.max_tokens === "number" && Array.isArray(t.messages);
}

class ft {
  socket=null;
  connected=!1;
  connecting=!1;
  connectEpoch=0;
  pending=null;
  currentPath;
  handshaking=!1;
  pairing=null;
  pairingWaiter=null;
  pairingExpired=!1;
  pairingAgeTimer=null;
  pairingGraceTimer=null;
  lastPairingRefuse;
  loggedRefusal;
  forcedTeardownAt=0;
  notificationHandler=null;
  responseBuffer=Buffer.alloc(0);
  responseChunks=[];
  responseChunkBytes=0;
  reconnectAttempts=0;
  maxReconnectAttempts=10;
  reconnectDelay=1e3;
  reconnectTimer=null;
  connectTimer=null;
  context;
  disableAutoReconnect=!1;
  onRedialWanted;
  pairingProbeTimer=null;
  probeToolUseId;
  probesAnswered=0;
  constructor(e) {
    this.context = e;
  }
  async connect() {
    let {serverName: e, logger: t} = this.context;
    if (this.connecting) {
      t.info(`[${e}] Already connecting, skipping duplicate attempt`);
      return;
    }
    this.closeSocket(), this.connecting = !0, this.lastPairingRefuse = void 0;
    let n = this.connectEpoch, r = this.context.getSocketPath?.() ?? this.context.socketPath;
    this.currentPath = r, this.logDial(`[${e}] Attempting to connect to: ${r}`);
    let i;
    try {
      i = await this.validateSocketSecurity(r);
    } catch (u) {
      if (n === this.connectEpoch) this.connecting = !1;
      t.info(`[${e}] Security validation failed:`, u);
      return;
    }
    if (!i) {
      if (n === this.connectEpoch) this.connecting = !1, this.scheduleReconnect("dead");
      return;
    }
    if (n !== this.connectEpoch) return;
    let s = this.context.localPairing;
    if (s && !await this.ownIdentityPresent(s, n)) return;
    let o, {connectVerified: c} = this.context;
    if (c) {
      try {
        o = await c(r);
      } catch (u) {
        if (n !== this.connectEpoch) return;
        this.connecting = !1;
        let l = u.code;
        if (dt(l)) t.info(`[${e}] Socket not found; not dialing`), this.scheduleReconnect("dead"); else if (l === "EPERM" || l === "EACCES" || l === "EPEERCRED" || !l) t.info(`[${e}] Security validation failed:`, u); else t.info(`[${e}] Verified dial failed:`, u), 
        this.scheduleReconnect();
        return;
      }
      if (n !== this.connectEpoch) {
        o.destroy();
        return;
      }
    } else o = fn(r);
    this.socket = o;
    let a = () => {
      if (this.clearConnectTimer(), this.clearReconnectTimer(), s) {
        this.reconnectAttempts = Math.min(this.reconnectAttempts, this.maxReconnectAttempts), 
        this.pair(n, s);
        return;
      }
      this.connected = !0, this.connecting = !1, this.reconnectAttempts = 0, t.info(`[${e}] Successfully connected to bridge server`);
    };
    if (o.on("data", u => {
      let l = this.responseBuffer, p = l.length + this.responseChunkBytes + u.length;
      if (l.length >= 4 && p < 4 + l.readUInt32LE(0)) {
        this.responseChunks.push(u), this.responseChunkBytes += u.length;
        return;
      }
      if (this.responseChunks.length > 0) this.responseBuffer = Buffer.concat([ l, ...this.responseChunks, u ], p), 
      this.responseChunks = [], this.responseChunkBytes = 0; else this.responseBuffer = l.length === 0 ? u : Buffer.concat([ l, u ], p);
      while (this.responseBuffer.length >= 4) {
        let h = this.responseBuffer.readUInt32LE(0);
        if (this.responseBuffer.length < 4 + h) break;
        let g = this.responseBuffer.slice(4, 4 + h);
        this.responseBuffer = this.responseBuffer.slice(4 + h);
        try {
          let d = JSON.parse(g.toString("utf-8"));
          if (s) {
            this.dispatchPairingRail(d, n);
            continue;
          }
          if (ot(d)) {
            if (t.info(`[${e}] Received notification: ${DDe(d.method)}`), !(d.method === "permission_request" && this.claimPermissionRequest(d.params))) this.notificationHandler?.(d);
          } else if (it(d)) t.info(`[${e}] Received tool response for ${DDe(d.tool_use_id ?? "(untagged)")}`), 
          this.handleResponse(d, h); else t.info(`[${e}] Received a message of unknown shape`);
        } catch (d) {
          t.info(`[${e}] Failed to parse message:`, d);
        }
      }
    }), o.on("error", u => {
      t.info(`[${e}] Socket error (code: ${u.code}):`, u), this.closeSocket(), this.scheduleReconnect(dt(u.code) ? "dead" : "transport");
    }), o.on("close", () => {
      this.closeSocket(), this.scheduleReconnect();
    }), c) {
      a();
      return;
    }
    this.connectTimer = setTimeout(() => {
      if (!this.connected) t.info(`[${e}] Connection attempt timed out after ${H}ms`), 
      this.closeSocket(), this.scheduleReconnect();
    }, H), o.on("connect", a);
  }
  scheduleReconnect(e = "transport") {
    let {serverName: t, logger: n} = this.context;
    if (this.disableAutoReconnect) {
      this.onRedialWanted?.(e);
      return;
    }
    if (this.reconnectTimer) {
      n.info(`[${t}] Reconnect already scheduled, skipping`);
      return;
    }
    this.reconnectAttempts++;
    let r = 100;
    if (this.reconnectAttempts > r) {
      n.info(`[${t}] Giving up after ${r} attempts. Will retry on next tool call.`), this.reconnectAttempts = 0;
      return;
    }
    let i = Math.min(this.reconnectDelay * Math.pow(1.5, this.reconnectAttempts - 1), 3e4);
    if (this.reconnectAttempts <= this.maxReconnectAttempts) n.info(`[${t}] Reconnecting in ${Math.round(i)}ms (attempt ${this.reconnectAttempts})`); else if (this.reconnectAttempts % 10 === 0) n.info(`[${t}] Still polling for native host (attempt ${this.reconnectAttempts})`);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, i);
  }
  dispatchPairingRail(e, t) {
    let {serverName: n, logger: r} = this.context;
    if (!e || typeof e !== "object") {
      r.info(`[${n}] Dropping a non-object frame`);
      return;
    }
    if (!this.connected) {
      if (this.pairingWaiter && it(e) && (e.tool_use_id === this.pairingWaiter.toolUseId || e.tool_use_id === void 0 && this.pairingWaiter.acceptsUntagged && pt(e))) {
        let i = this.pairingWaiter;
        this.pairingWaiter = null, clearTimeout(i.timer), i.resolve(e);
        return;
      }
      r.info(`[${n}] Dropping frame received before the connection was admitted`);
      return;
    }
    this.dispatchSealed(e, t);
  }
  async pair(e, t) {
    let {serverName: n, logger: r} = this.context, i = this.currentPath ?? this.context.socketPath;
    this.handshaking = !0, this.reportPairingState(t, {
      state: "pairing",
      socketPath: i
    });
    try {
      let {source: s, jwks: o} = nt(t), c = new ue({
        source: s,
        jwks: o,
        policy: {
          requiredOrg: t.requiredOrg
        },
        instanceHint: t.instanceHint
      }), a = Math.min(at, this.forcedTeardownAt + at - Date.now());
      if (a > 0) {
        if (await new Promise(d => setTimeout(d, a).unref?.()), e !== this.connectEpoch) return;
      }
      let u = await this.withPairingStepDeadline(c.createOffer());
      if (e !== this.connectEpoch) return;
      let l = lt(await this.exchangePairing({
        ...u
      }, !0), "accept");
      if (e !== this.connectEpoch) return;
      let p = await this.withPairingStepDeadline(c.onAccept(l));
      if (e !== this.connectEpoch) return;
      let h = lt(await this.exchangePairing({
        ...p
      }, !1), "done");
      if (e !== this.connectEpoch) return;
      let g = await c.onDone(h);
      if (e !== this.connectEpoch) {
        g.channel.tearDown();
        return;
      }
      if (!this.socket || this.socket.destroyed) {
        g.channel.tearDown(), this.closeSocket(), this.scheduleReconnect();
        return;
      }
      this.pairing = g, this.pairingExpired = !1, this.pairingAgeTimer = setTimeout(() => {
        if (this.pairing !== g) return;
        if (this.pairingExpired = !0, !this.pending) {
          this.expirePairing();
          return;
        }
        this.startAgeGrace(this.pending);
      }, st), this.pairingAgeTimer.unref?.(), this.handshaking = !1, this.connected = !0, 
      this.connecting = !1, this.reconnectAttempts = 0, this.probesAnswered = 0, this.schedulePairingProbe(), 
      this.loggedRefusal = void 0, r.info(`[${n}] Local pairing established with ${i} (peer ${g.peer.client_kind}, sid ${g.sidB64.slice(0, 8)}\u2026)`), 
      this.reportPairingState(t, {
        state: "established",
        socketPath: i,
        peerKind: g.peer.client_kind,
        peerInstance: g.peerInstance,
        assertionExp: g.peer.exp
      });
    } catch (s) {
      if (e !== this.connectEpoch) return;
      if (this.handshaking = !1, s instanceof A) {
        r.warn(`[${n}] ${s.message} (${i}); reconnecting`), this.lastPairingRefuse = {
          code: "timeout",
          peerReported: !1
        }, this.reportPairingState(t, {
          state: "refused",
          socketPath: i,
          code: "timeout",
          wire: "timeout",
          peerReported: !1
        }), this.closeSocket(), this.scheduleReconnect();
        return;
      }
      let o = s instanceof M, c = s instanceof f ? s : void 0, a = c?.code ?? "malformed", u = c?.wireCode() ?? a;
      if (this.logRefusal(`[${n}] Local pairing with ${i} refused: ${u}${o ? " (peer-reported, unauthenticated)" : ""}`, c ? void 0 : s), 
      this.lastPairingRefuse = {
        code: a,
        peerReported: o
      }, this.reportPairingState(t, {
        state: "refused",
        socketPath: i,
        code: a,
        wire: u,
        ...c?.httpStatus !== void 0 && {
          httpStatus: c.httpStatus
        },
        peerReported: o
      }), this.closeSocket(), kn(s)) this.scheduleReconnect();
    }
  }
  async ownIdentityPresent(e, t) {
    let {serverName: n} = this.context, r = this.currentPath ?? this.context.socketPath, i, s = !1;
    try {
      i = await this.withPairingStepDeadline(e.getBearer());
    } catch {
      s = !0;
    }
    if (t !== this.connectEpoch) return !1;
    if (i) return !0;
    if (this.connecting = !1, this.lastPairingRefuse = {
      code: "not_signed_in",
      peerReported: !1
    }, this.logRefusal(`[${n}] Local pairing with ${r} refused: not_signed_in (no bearer of our own${s ? "; token source failed" : ""}; not dialing)`), 
    this.reportPairingState(e, {
      state: "refused",
      socketPath: r,
      code: "not_signed_in",
      wire: "not_signed_in",
      peerReported: !1
    }), s) this.scheduleReconnect();
    return !1;
  }
  logRefusal(e, ...t) {
    if (e === this.loggedRefusal) {
      this.context.logger.debug(e, ...t);
      return;
    }
    this.loggedRefusal = e, this.context.logger.warn(e, ...t);
  }
  logDial(e) {
    if (this.loggedRefusal === void 0) this.context.logger.info(e); else this.context.logger.debug(e);
  }
  withPairingStepDeadline(e) {
    let t, n = new Promise((r, i) => {
      t = setTimeout(() => i(new A("step")), yn), t.unref?.();
    });
    return Promise.race([ e, n ]).finally(() => clearTimeout(t));
  }
  reportPairingState(e, t) {
    try {
      e.onPairingState?.(t);
    } catch (n) {
      this.context.logger.warn(`[${this.context.serverName}] onPairingState handler threw:`, n);
    }
  }
  exchangePairing(e, t) {
    return new Promise((n, r) => {
      let i = le(), s = setTimeout(() => {
        if (this.pairingWaiter?.toolUseId === i) this.pairingWaiter = null, r(new A("reply"));
      }, mn);
      if (this.pairingWaiter) clearTimeout(this.pairingWaiter.timer), this.pairingWaiter.reject(new A("reply"));
      this.pairingWaiter = {
        toolUseId: i,
        acceptsUntagged: t,
        resolve: n,
        reject: r,
        timer: s
      }, this.writeRaw({
        method: "execute_tool",
        params: {
          client_id: this.context.clientTypeId,
          tool_use_id: i,
          local_pairing: e
        }
      });
    });
  }
  async writeSealed(e, t) {
    let n = this.pairing;
    if (!n || !this.connected) throw new zI(`[${this.context.serverName}] Cannot send request: not paired`);
    let r = Buffer.byteLength(JSON.stringify(t), "utf-8"), i = xn(n), s = r > de && i !== void 0;
    if (s && r > i) throw pe(r, i);
    if (!s && Math.ceil(r * 4 / 3) > I) throw pe(Math.ceil(r * 4 / 3));
    let o;
    try {
      o = s ? await n.channel.sealChunked("execute_tool", e, t, de) : [ await n.channel.seal("execute_tool", e, t) ];
    } catch (a) {
      if (this.pairing !== n || n.channel.isTornDown) throw new zI(`[${this.context.serverName}] Pairing changed while sealing`);
      throw a;
    }
    if (this.pairing !== n) throw new zI(`[${this.context.serverName}] Pairing changed while sealing`);
    if (s) this.context.logger.info(`[${this.context.serverName}] Sealed request sliced into ${o.length} frames (${r} bytes, max ${de} per slice)`);
    let c = o.map(a => {
      let u = {
        method: "execute_tool",
        params: {
          tool_use_id: e,
          sealed: a
        }
      }, l = Buffer.from(JSON.stringify(u), "utf-8");
      if (l.length > I) throw pe(l.length);
      return {
        frame: u,
        bytes: l
      };
    });
    for (let {frame: a, bytes: u} of c) this.writeRaw(a, u);
  }
  async answerInferenceRequest(e, t, n) {
    let {serverName: r, logger: i, localPairing: s} = this.context, o;
    try {
      if (!e || !Tn(t)) o = {
        ok: !1,
        error: "malformed"
      }; else if (this.context.isDisabled?.() || !s?.onInferenceRequest) o = {
        ok: !1,
        error: "not_supported"
      }; else o = await s.onInferenceRequest(t);
      let a = Math.ceil(Buffer.byteLength(JSON.stringify(o), "utf-8") * 4 / 3);
      if (a > I) i.warn(`[${r}] inference_response too large (${a} bytes); answering too_large`), 
      o = {
        ok: !1,
        error: "too_large"
      };
    } catch (a) {
      i.warn(`[${r}] inference seam failed:`, a), o = {
        ok: !1,
        error: "handler_error"
      };
    }
    let c = this.pairing;
    if (n !== this.connectEpoch || !c) return;
    try {
      let a = await c.channel.seal("notification:inference_response", e, {
        method: "inference_response",
        params: {
          request_id: e,
          result: o
        }
      });
      if (n !== this.connectEpoch || this.pairing !== c) return;
      let u = {
        method: "inference_response",
        params: {
          request_id: e,
          sealed: a
        }
      }, l = Buffer.from(JSON.stringify(u), "utf-8");
      if (l.length > I) {
        i.warn(`[${r}] inference_response frame oversized after seal (${l.length} bytes); dropped`);
        return;
      }
      this.writeRaw(u, l);
    } catch (a) {
      i.warn(`[${r}] Failed to seal inference_response:`, a);
    }
  }
  lastPairingRefuseCode() {
    return this.lastPairingRefuse?.code;
  }
  lastPairingRefusePeerReported() {
    return this.lastPairingRefuse?.peerReported ?? !1;
  }
  isPaired() {
    return this.connected && this.pairing !== null;
  }
  pairingAgedOut() {
    if (!this.pairing) return !1;
    if (Date.now() / 1e3 - this.pairing.establishedAt > st / 1e3) this.pairingExpired = !0;
    if (this.pairingExpired && this.pending) this.startAgeGrace(this.pending);
    return this.pairingExpired;
  }
  startAgeGrace(e) {
    if (this.pairingGraceTimer) return;
    let t = this.pairing;
    this.pairingGraceTimer = setTimeout(() => {
      if (this.pairing === t) this.expirePairing();
    }, e.timeoutMs), this.pairingGraceTimer.unref?.();
  }
  forceRepair(e, t = !1) {
    this.forcedTeardownAt = Date.now(), this.failPending(e), this.closeSocket(), this.scheduleReconnect(t ? "peer_dropped" : "transport");
  }
  schedulePairingProbe() {
    this.clearPairingProbe(), this.pairingProbeTimer = setTimeout(() => {
      if (this.pairingProbeTimer = null, !this.connected || !this.pairing) return;
      if (this.pending) {
        this.schedulePairingProbe();
        return;
      }
      if (this.pairingAgedOut()) {
        this.expirePairing();
        return;
      }
      let e = {
        method: "execute_tool",
        params: {
          client_id: this.context.clientTypeId,
          tool_use_id: le()
        }
      };
      this.probeToolUseId = e.params.tool_use_id;
      let t = () => {
        if (this.probeToolUseId = void 0, this.connected && this.pairing) this.schedulePairingProbe();
      };
      this.sendRequest(e, wn).then(() => {
        if (this.probesAnswered += 1, this.probesAnswered === 1) this.context.logger.info(`[${this.context.serverName}] Local pairing liveness probe answered; probing every ${(this.context.localPairing?.probeIntervalMs ?? ut) / 1e3} s while idle`); else this.context.logger.debug(`[${this.context.serverName}] Local pairing liveness probe ${this.probesAnswered} answered`);
        t();
      }, t);
    }, this.context.localPairing?.probeIntervalMs ?? ut), this.pairingProbeTimer.unref?.();
  }
  probesAnsweredCount() {
    return this.probesAnswered;
  }
  clearPairingProbe() {
    if (this.pairingProbeTimer) clearTimeout(this.pairingProbeTimer), this.pairingProbeTimer = null;
  }
  expirePairing() {
    this.context.logger.info(`[${this.context.serverName}] Local pairing reached its maximum age; re-pairing`), 
    this.closeSocket(), this.scheduleReconnect();
  }
  clearPairing(e) {
    if (this.pairingWaiter) {
      clearTimeout(this.pairingWaiter.timer);
      let r = this.pairingWaiter;
      this.pairingWaiter = null, r.reject(new A("reply"));
    }
    if (this.pairingAgeTimer) clearTimeout(this.pairingAgeTimer), this.pairingAgeTimer = null;
    if (this.pairingGraceTimer) clearTimeout(this.pairingGraceTimer), this.pairingGraceTimer = null;
    let t = this.pairing, n = !t ? "handshake_aborted" : t.channel.isTornDown ? "forged_frames" : this.pairingExpired ? "expired" : "connection_closed";
    if (this.pairing?.channel.tearDown(), this.pairing = null, this.pairingExpired = !1, 
    (t || e) && this.context.localPairing) this.reportPairingState(this.context.localPairing, {
      state: "closed",
      socketPath: this.currentPath ?? this.context.socketPath,
      reason: n
    });
  }
  async dispatchSealed(e, t) {
    let {serverName: n, logger: r} = this.context, i = this.pairing;
    if (!i) return;
    let s, o, c;
    if (ot(e)) {
      if (e.method === "permission_request") {
        s = "notification:permission_request";
        let l = e.params?.tool_use_id;
        o = typeof l === "string" ? l : void 0;
      } else if (e.method === "sealed_broadcast") s = "notification:sealed_broadcast", 
      o = void 0; else if (e.method === "inference_request") {
        s = "notification:inference_request";
        let l = e.params?.request_id;
        o = typeof l === "string" ? l : void 0;
      } else {
        r.info(`[${n}] Dropping unsealed notification on a paired connection`);
        return;
      }
      c = e.params?.sealed;
    } else {
      let l = e;
      if (typeof l.tool_use_id !== "string") {
        r.info(`[${n}] Dropping a response without a routing id on a paired connection`);
        return;
      }
      if (s = "tool_response", o = l.tool_use_id, c = l.sealed, c === void 0 && o === this.pending?.toolUseId && l.error?.local_pairing) {
        r.warn(`[${n}] Peer reports the pairing is unknown to it${o === this.probeToolUseId ? " (it dropped the pairing; found by the liveness probe)" : ""}; re-pairing`), 
        this.forceRepair(new VJ(`[${n}] Peer reports the pairing is unknown; re-pairing`), !0);
        return;
      }
    }
    if (c === void 0) {
      r.info(`[${n}] Dropping clear-text ${s} on a paired connection`);
      return;
    }
    if (this.pairingAgedOut() && !(s === "tool_response" && o === this.pending?.toolUseId)) {
      if (this.pending) r.info(`[${n}] Dropping sealed ${s} past the pairing's maximum age`); else this.expirePairing();
      return;
    }
    let a = await i.channel.open(s, o, c);
    if (t !== this.connectEpoch || this.pairing !== i) return;
    if (!a.ok) {
      if (a.reason !== "foreign_sid") r.warn(`[${n}] Sealed ${s} rejected: ${a.reason}`);
      if (i.channel.isTornDown) r.warn(`[${n}] Sealed channel torn down; re-pairing`), 
      this.forceRepair(new VJ(`[${n}] Sealed channel to the extension was torn down`));
      return;
    }
    let u = a.inner;
    if (!u || typeof u !== "object") return;
    try {
      if (s === "tool_response") this.handleResponse({
        ..."result" in u && {
          result: u.result
        },
        ..."error" in u && {
          error: u.error
        },
        tool_use_id: o
      }, Buffer.byteLength(JSON.stringify(u), "utf-8")); else if (s === "notification:permission_request") {
        let l = u.params ?? {};
        if (u.method !== "permission_request" || l.tool_use_id !== o) {
          r.warn(`[${n}] Sealed permission_request mislabelled; dropped`);
          return;
        }
        this.claimPermissionRequest(l);
      } else if (s === "notification:inference_request") {
        let l = u.params ?? {};
        if (u.method !== "inference_request" || l.request_id !== o) {
          r.warn(`[${n}] Sealed inference_request mislabelled; dropped`);
          return;
        }
        this.answerInferenceRequest(o, l.body, t);
      } else if (this.notificationHandler && typeof u.method === "string") this.notificationHandler({
        method: u.method,
        params: u.params ?? void 0
      });
    } catch (l) {
      r.error(`[${n}] Error handling a sealed ${s}:`, l);
    }
  }
  handleResponse(e, t) {
    let n = this.pending;
    if (!n || typeof e.tool_use_id === "string" && e.tool_use_id !== n.toolUseId) return;
    if (this.pending = null, clearTimeout(n.timer), n.resolve(e, t), this.pairingAgedOut()) this.expirePairing();
  }
  claimPermissionRequest(e) {
    let t = this.pending, n = e?.request_id;
    if (!t?.onPermissionRequest || typeof n !== "string" || e?.tool_use_id !== t.toolUseId) return !1;
    return this.answerPermissionRequest(t, t.onPermissionRequest, n, e), !0;
  }
  async answerPermissionRequest(e, t, n, r) {
    let i = lrr(r, {
      toolUseId: e.toolUseId,
      requestId: n
    });
    clearTimeout(e.timer);
    let s = !1;
    try {
      s = await t(i);
    } catch (c) {
      this.context.logger.error(`[${this.context.serverName}] Error handling permission request:`, c);
    }
    if (this.pending !== e) return;
    if (this.pairingAgedOut()) {
      this.expirePairing();
      return;
    }
    let o = {
      method: "permission_response",
      params: {
        request_id: n,
        allowed: s
      }
    };
    if (this.context.localPairing) {
      let c = {
        ...o,
        params: {
          ...o.params,
          tool_use_id: e.toolUseId
        }
      };
      if (await this.writeSealed(e.toolUseId, c).catch(a => {
        this.context.logger.warn(`[${this.context.serverName}] Could not send permission_response:`, a);
      }), this.pending !== e) return;
    } else this.writeFrame(o);
    this.armTimeout(e);
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
  }
  async ensureConnected() {
    let {serverName: e} = this.context;
    if (this.connected && this.socket) return !0;
    if (!this.socket && !this.connecting) await this.connect();
    return new Promise((t, n) => {
      let r = null, i = H, s = () => {
        if (this.connected) {
          if (r) clearTimeout(r);
          t(!0);
          return;
        }
        if (this.context.localPairing && (this.handshaking || this.lastPairingRefuse?.code === "timeout") && i < ct) {
          i = ct, o = setTimeout(s, i - H);
          return;
        }
        if (r) clearTimeout(r);
        n(new zI(`[${e}] Connection attempt timed out after ${i}ms`));
      }, o = setTimeout(s, i), c = () => {
        if (this.connected) clearTimeout(o), t(!0); else if (!this.socket && !this.connecting && (!this.reconnectTimer || this.context.localPairing && this.lastPairingRefuse !== void 0 && this.lastPairingRefuse.code !== "timeout")) clearTimeout(o), 
        t(!1); else r = setTimeout(c, 500);
      };
      c();
    });
  }
  armTimeout(e) {
    let {serverName: t} = this.context;
    clearTimeout(e.timer), e.timer = setTimeout(() => {
      if (this.pending !== e) return;
      this.failPending(new tVe(`[${t}] Tool request timed out after ${e.timeoutMs}ms`)), 
      this.closeSocket(), this.scheduleReconnect();
    }, e.timeoutMs);
  }
  writeRaw(e, t) {
    if (!this.socket || this.socket.destroyed) return;
    let n = t ?? Buffer.from(JSON.stringify(e), "utf-8"), r = Buffer.allocUnsafe(4);
    r.writeUInt32LE(n.length, 0), this.socket.write(Buffer.concat([ r, n ]));
  }
  writeFrame(e) {
    if (this.context.localPairing) throw Error("clear-text frames are disabled when local pairing is configured");
    this.writeRaw(e);
  }
  async sendRequest(e, t, n) {
    let {serverName: r} = this.context;
    if (this.pairingAgedOut()) this.closeSocket();
    if (!this.socket || this.socket.destroyed || this.context.localPairing && !this.connected) throw new zI(`[${r}] Cannot send request: not connected`);
    return new Promise((i, s) => {
      this.failPending(new W(`[${r}] Superseded by a newer tool request on the same connection`));
      let o = Date.now(), c = {
        toolUseId: e.params.tool_use_id,
        resolve: (a, u) => i({
          response: a,
          responseBytes: u,
          sentAt: o
        }),
        reject: s,
        timeoutMs: t,
        onPermissionRequest: n
      };
      if (this.armTimeout(c), this.pending = c, this.context.localPairing) this.writeSealed(c.toolUseId, e).catch(a => {
        if (this.pending === c) this.failPending(a instanceof Error ? a : new zI(String(a)));
      }); else this.writeFrame(e);
    });
  }
  async callTool(e, t, n) {
    let r = {
      method: "execute_tool",
      params: {
        client_id: this.context.clientTypeId,
        tool: e,
        args: t,
        tool_use_id: le(),
        ...drr(n)
      }
    }, {trackEvent: i} = this.context, s = this.context.getToolCallTimeoutMs?.(e) ?? LDe, o = n?.sessionScope, c = Date.now(), a = {
      tool_name: `browser:${e}`,
      tool_use_id: r.params.tool_use_id,
      session_id: o?.sessionId,
      user_message_uuid: o?.userMessageUuid,
      transport: "native"
    };
    i?.("chrome_bridge_tool_call_started", {
      ...a,
      timeout_ms: s,
      request_bytes: Buffer.byteLength(JSON.stringify(r), "utf-8")
    });
    let u = (d, w, Ct) => {
      i?.("chrome_bridge_tool_call_error", {
        ...a,
        duration_ms: Date.now() - w,
        error_type: Ct ?? Htt(e, d)
      });
    }, l;
    try {
      l = await this.sendRequestWithRetry(r, s, n?.onPermissionRequest);
    } catch (d) {
      if (d instanceof tVe) i?.("chrome_bridge_tool_call_timeout", {
        ...a,
        duration_ms: Date.now() - c,
        timeout_ms: s
      }); else u(d instanceof Error ? d.message : String(d), c, d instanceof B ? "request_too_large" : void 0);
      throw d;
    }
    let {response: p, responseBytes: h, sentAt: g} = l;
    if ("error" in p) u(Dvt(p.error), g); else i?.("chrome_bridge_tool_call_completed", {
      ...a,
      duration_ms: Date.now() - g,
      response_bytes: h
    });
    return p;
  }
  async sendRequestWithRetry(e, t, n) {
    let {serverName: r, logger: i} = this.context;
    try {
      return await this.sendRequest(e, t, n);
    } catch (s) {
      if (!(s instanceof zI)) throw s;
      if (i.info(`[${r}] Connection error, forcing reconnect and retrying: ${s.message}`), 
      !this.connecting) this.closeSocket();
      let o;
      try {
        o = await this.ensureConnected();
      } catch (a) {
        if (!(this.context.localPairing && this.lastPairingRefuse)) throw a;
        o = !1;
      }
      let c = this.lastPairingRefuse;
      if (!o && this.context.localPairing && c) {
        let a = c.peerReported ? `reported by the extension, unverified: ${c.code}` : c.code;
        throw new zI(`[${r}] Claude in Chrome isn't paired with your browser (${a})`);
      }
      return await this.sendRequest(e, t, n);
    }
  }
  isConnected() {
    return this.connected;
  }
  isConnecting() {
    return this.connecting;
  }
  clearConnectTimer() {
    if (this.connectTimer) clearTimeout(this.connectTimer), this.connectTimer = null;
  }
  closeSocket() {
    this.connectEpoch += 1, this.clearConnectTimer(), this.clearPairingProbe();
    let e = this.handshaking;
    if (this.handshaking = !1, this.socket) this.socket.removeAllListeners(), this.socket.end(), 
    this.socket.destroy(), this.socket = null;
    this.responseBuffer = Buffer.alloc(0), this.responseChunks = [], this.responseChunkBytes = 0, 
    this.connected = !1, this.connecting = !1, this.clearPairing(e), this.failPending(new VJ(`[${this.context.serverName}] Native host connection closed before the tool responded`));
  }
  clearReconnectTimer() {
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
  }
  failPending(e) {
    let t = this.pending;
    if (!t) return;
    this.pending = null, clearTimeout(t.timer), t.reject(e);
  }
  disconnect() {
    this.clearReconnectTimer(), this.failPending(new VJ(`[${this.context.serverName}] Socket client disconnected`)), 
    this.closeSocket(), this.reconnectAttempts = 0;
  }
  async validateSocketSecurity(e) {
    let {serverName: t, logger: n} = this.context;
    if (hn() === "win32" || this.context.connectVerified) return !0;
    try {
      let r = gn(e);
      if ((r.split("/").pop() || "").startsWith("claude-mcp-browser-bridge-")) try {
        let u = await rt.lstat(r);
        if (u.isSymbolicLink()) throw Error(`[${t}] Socket directory is a symlink: ${r}. Directory may have been tampered with.`);
        if (u.isDirectory()) {
          let l = u.mode & 511;
          if (l !== 448) throw Error(`[${t}] Insecure socket directory permissions: ${l.toString(8)} (expected 0700). Directory may have been tampered with.`);
          let p = process.getuid?.();
          if (p !== void 0 && u.uid !== p) throw Error(`Socket directory not owned by current user (uid: ${p}, dir uid: ${u.uid}). Potential security risk.`);
        }
      } catch (u) {
        if (u.code !== "ENOENT") throw u;
        return n.info(`[${t}] Socket directory not found; not dialing`), !1;
      }
      let o = await rt.lstat(e);
      if (!o.isSocket()) throw Error(`[${t}] Path exists but it's not a socket: ${e}`);
      let c = o.mode & 511;
      if (c !== 384) throw Error(`[${t}] Insecure socket permissions: ${c.toString(8)} (expected 0600). Socket may have been tampered with.`);
      let a = process.getuid?.();
      if (a !== void 0 && o.uid !== a) throw Error(`Socket not owned by current user (uid: ${a}, socket uid: ${o.uid}). Potential security risk.`);
      return this.logDial(`[${t}] Socket security validation passed`), !0;
    } catch (r) {
      if (r.code === "ENOENT") return n.info(`[${t}] Socket not found; not dialing`), 
      !1;
      throw r;
    }
  }
}

function crr(e) {
  return new ft(e);
}

import { lstat as vn, mkdir as Pn, mkdtemp as Cn, writeFile as Sn } from "fs/promises";

import { tmpdir as Rn } from "os";

import { join as mt } from "path";

var ht = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif"
}, En = "Screenshot saved to: ", An = 0, G;

function gt() {
  return G ??= Cn(mt(Rn(), "claude-chrome-screenshots-")).catch(e => {
    throw G = void 0, e;
  }), G;
}

async function In(e) {
  if (e.getScreenshotSaveDir) {
    let n = e.getScreenshotSaveDir();
    if (n === void 0) return;
    return await Pn(n, {
      recursive: !0,
      mode: 448
    }), n;
  }
  let t = await gt();
  try {
    let n = await vn(t), r = process.getuid;
    if (n.isDirectory() && (r === void 0 || n.uid === r() && (n.mode & 511) === 448)) return t;
  } catch {}
  return G = void 0, gt();
}

async function yt(e, t) {
  if (e.isError || !e.content.some(o => o.type === "image")) return e;
  let n;
  try {
    n = await In(t);
  } catch (o) {
    return t.logger.warn(`[${t.serverName}] save_to_disk: could not prepare screenshot directory: ${o instanceof Error ? o.message : String(o)}`), 
    {
      ...e,
      content: [ ...e.content, {
        type: "text",
        text: "Note: save_to_disk failed \u2014 the screenshot directory could not " + "be created. The image is included inline above."
      } ]
    };
  }
  if (n === void 0) return {
    ...e,
    content: [ ...e.content, {
      type: "text",
      text: "Note: save_to_disk had no effect \u2014 screenshots are not " + "persisted to disk in this session. The image is included inline above; refer to it directly. Do not retry with save_to_disk."
    } ]
  };
  let r = [], i = !1, s = !1;
  for (let o of e.content) {
    if (r.push(o), o.type !== "image") continue;
    let c = Object.hasOwn(ht, o.mimeType) ? ht[o.mimeType] : "png", a = mt(n, `screenshot-${Date.now()}-${An++}.${c}`);
    try {
      await Sn(a, Buffer.from(o.data, "base64"), {
        flag: "wx",
        mode: 384
      }), i = !0, r.push({
        type: "text",
        text: `${En}${a}`
      });
    } catch (u) {
      s = !0, t.logger.warn(`[${t.serverName}] save_to_disk: failed to write screenshot: ${u instanceof Error ? u.message : String(u)}`);
    }
  }
  if (i) r.push({
    type: "text",
    text: "Include the saved path(s) in your response so they can be attached for the user."
  });
  if (s) r.push({
    type: "text",
    text: "Note: save_to_disk failed for at least one screenshot \u2014 it could " + "not be written to disk. The image is included inline above."
  });
  return {
    ...e,
    content: r
  };
}

var R = new WeakMap;

function q5r(e) {
  R.delete(e), e.clearSelection?.();
}

function z(e, t) {
  return ge(e, t).replace(/[\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}]/gu, " ").replace(/[\p{Quotation_Mark}\u02BA\u02DD\u02EE\u05F4\u2033\u3003]+/gu, "'").replace(/\s+/g, " ").replace(/this\s*computer/giu, "[?]").trim() || `Browser ${t + 1}`;
}

function ge(e, t) {
  let n = (e.name ?? "").replace(/[\r\n\t\u0000-\u001f]/g, " ").trim();
  if (!n) return `Browser ${t + 1}`;
  return n.length > 50 ? `${n.slice(0, 50)}\u2026` : n;
}

var xt = new Map([ [ "macOS", "macOS" ], [ "Windows", "Windows" ], [ "Linux", "Linux" ], [ "Chrome OS", "Chrome OS" ], [ "Chromium OS", "Chromium OS" ], [ "Android", "Android" ], [ "iOS", "iOS" ], [ "MacIntel", "macOS" ], [ "Win32", "Windows" ], [ "Linux x86_64", "Linux" ], [ "Linux aarch64", "Linux" ], [ "Linux armv8l", "Linux" ] ]);

function On(e) {
  return e !== void 0 && xt.get(e) || "unknown OS";
}

async function $n(e, t) {
  if (!t.listConnectedExtensions) return R.set(t, !0), null;
  if (R.get(t) && t.hasActiveSelection?.()) return null;
  R.delete(t);
  let n = await t.listConnectedExtensions();
  if (n.length === 0) return null;
  let r = n.length > 1 ? await lKt(e.getLocalDeviceIds) : void 0, i = _kn(n, t.getSelectedDeviceId?.(), r);
  if (i.kind !== "ask") return R.set(t, !0), null;
  let {candidates: s, localCount: o} = i, c = s.slice(0, 8), a = (d, w) => `${w + 1}. "${z(d, w)}" (${On(d.osPlatform)})${r?.get(d.deviceId) === "remembered" ? " \u2014 seen recently, not answering right now" : ""} \u2014 deviceId: ${d.deviceId}`, u = c.slice(0, o).map(a), l = c.slice(o).map((d, w) => a(d, w + u.length)), p = o > 0 ? `Browsers on this computer:\n${u.join(`\n`)}\n\nOther connected browsers:\n${l.join(`\n`) || (s.length === o ? "(none)" : "")}` : `Connected browsers:\n${l.join(`\n`)}`, h = s.length > c.length ? `\n\u2026and ${s.length - c.length} more not shown` : "";
  return {
    content: [ {
      type: "text",
      text: `${o > 0 ? `${s.length} Chrome browsers are connected to this account, ${o} of them on this computer, and none has been selected for this session. ` : "Multiple Chrome browsers are connected to this account and none has been selected for this session. "}${urr(e.askUserToolName)}${o > 0 ? " List the browsers on this computer first, in the order below." : ""}\n\n${p}${h}`
    } ],
    isError: !0
  };
}

function Tt(e) {
  return JSON.stringify(e, (t, n) => typeof n === "string" && n.length > 256 ? `<${n.length} chars elided>` : n);
}

class V extends Error {}

function X(e, t, n, r, i) {
  if (e.isDisabled?.()) return Promise.reject(new V(`disabled: ${n} not sent`));
  return t.callTool(n, r, i);
}

async function wt(e, t, n) {
  if (e.isDisabled?.()) return;
  try {
    if (!await t.ensureConnected()) return;
    let i = (await X(e, t, "tabs_context_mcp", {}, n ? {
      ...n,
      permissionMode: "ask"
    } : void 0))?.result?.content;
    if (!Array.isArray(i)) return;
    let s;
    for (let a of i) {
      if (typeof a !== "object" || a === null || a.type !== "text" || typeof a.text !== "string") continue;
      try {
        let u = JSON.parse(a.text);
        if (Array.isArray(u.availableTabs)) {
          s = {
            ...u,
            availableTabs: u.availableTabs
          };
          break;
        }
      } catch {}
    }
    if (!s) return;
    let o = s.availableTabs.filter(a => typeof a === "object" && a !== null && typeof a.tabId === "number" && typeof a.url === "string"), c = typeof s.selectedTabId === "number" ? o.find(a => a.tabId === s.selectedTabId) : o.length === 1 ? o[0] : void 0;
    return c ? {
      tabId: c.tabId,
      origin: new URL(c.url).origin
    } : void 0;
  } catch (r) {
    e.logger.debug(`[${e.serverName}] fetchActiveTab failed`, r);
    return;
  }
}

function Nn(e) {
  if (typeof e !== "object" || e === null) return "";
  let n = e.error?.content;
  return typeof n === "string" || Array.isArray(n) ? n : "";
}

async function Un(e, t, n, r, i, s) {
  if (e.isDisabled?.()) return {
    ok: !1,
    reason: "disabled"
  };
  try {
    if (!await t.ensureConnected()) return {
      ok: !1,
      reason: "disconnected"
    };
    let o = await X(e, t, "computer", {
      action: "type",
      text: i,
      tabId: r,
      ...s !== void 0 ? {
        expected_origin: s
      } : {}
    }, {
      ...n,
      permissionMode: "skip_all_permission_checks",
      onPermissionRequest: void 0
    }), c = typeof o === "object" && o !== null && !("error" in o) ? o.result : void 0, a = typeof c === "object" && c !== null && (c.isError === !0 || c.is_error === !0);
    if (c !== void 0 && c !== null && c !== !1 && !a) return {
      ok: !0
    };
    let l = a ? c.content ?? "" : "";
    if ((he(Nn(o)) || he(l)).startsWith("Origin mismatch")) return {
      ok: !1,
      reason: "origin_mismatch"
    };
    return {
      ok: !1,
      reason: "tool_error"
    };
  } catch (o) {
    return e.logger.debug(`[${e.serverName}] typeIntoTab failed`, o), {
      ok: !1,
      reason: o instanceof V ? "disabled" : "transport"
    };
  }
}

function bt(e, t, n, r) {
  return {
    sessionId: r,
    getActiveTabOrigin: async () => (await wt(e, t, n))?.origin,
    getActiveTab: () => wt(e, t, n),
    typeIntoTab: (i, s, o) => Un(e, t, n, i, s, o)
  };
}

function Dn(e, t) {
  if (e === "browser_batch" && Array.isArray(t.actions)) {
    let {save_to_disk: i, ...s} = t, o = i === !0, c = t.actions.map(a => {
      if (typeof a !== "object" || a === null) return a;
      let u = a;
      if (typeof u.input !== "object" || u.input === null) return a;
      let {save_to_disk: l, ...p} = u.input;
      if (l === !0 && u.name === "computer") o = !0;
      return {
        ...u,
        input: p
      };
    });
    return {
      args: {
        ...s,
        actions: c
      },
      wantsSave: o
    };
  }
  if (!("save_to_disk" in t)) return {
    args: t,
    wantsSave: !1
  };
  let {save_to_disk: n, ...r} = t;
  return {
    args: r,
    wantsSave: e === "computer" && n === !0
  };
}

function Mn(e, t, n) {
  let r = e.excludedTools;
  if (!r) return;
  if (r.has(t)) return `Unknown tool: ${t}`;
  if (t !== "browser_batch") return;
  if (!Array.isArray(n.actions)) return "browser_batch: actions must be an array";
  for (let i of n.actions) {
    let s = i?.name;
    if (typeof s !== "string" || s === "browser_batch") return "browser_batch: every action needs a string tool name (and batches don't nest)";
    if (r.has(s)) return `Unknown tool: ${s}`;
  }
  return;
}

function Bn(e, t) {
  let n = t?.onPermissionRequest, r = e.isDisabled;
  if (!t || !n || !r) return t;
  return {
    ...t,
    onPermissionRequest: async i => !r() && await n(i) && !r()
  };
}

var bkn = async (e, t, n, r, i) => {
  let {args: s, wantsSave: o} = Dn(n, r);
  if (e.isDisabled?.()) return b(`Unknown tool: ${n}`);
  let c = Bn(e, i), a = Mn(e, n, s);
  if (a !== void 0) return b(a);
  if (n === "switch_browser") return Kn(e, t);
  if (n === "list_connected_browsers") return Hn(e, t);
  if (n === "select_browser") return Gn(e, t, s);
  let u = c?.sessionScope?.sessionId ?? "";
  if (e.handleHostTool && e.hostToolBypassesBrowser?.(n, s)) {
    let p = await e.handleHostTool(n, s, bt(e, t, c, u));
    if (p !== void 0) return p;
  }
  let l = {
    args: s
  };
  try {
    let p = await t.ensureConnected();
    if (e.logger.silly(`[${e.serverName}] Server is connected: ${p}. Received tool call: ${DDe(n)} with args: ${Tt(s)}.`), 
    p) {
      if (e.isDisabled?.()) return b(`Unknown tool: ${n}`);
      let h = await $n(e, t);
      if (h) return h;
      if (e.isDisabled?.()) return b(`Unknown tool: ${n}`);
      if (e.handleHostTool) {
        let d = await e.handleHostTool(n, s, bt(e, t, c, u));
        if (d !== void 0) return d;
      }
      if (l = await qn(e, t, n, s, c), l.error) return fe(l, l.error);
      let g = await Fn(e, t, n, l.args, c);
      if (o) g = await yt(g, e);
      return fe(l, g);
    }
    return L(e);
  } catch (p) {
    return fe(l, Ln(p, n, e));
  }
};

function b(e, t) {
  return {
    content: [ {
      type: "text",
      text: e
    } ],
    isError: !0,
    ...t && {
      _meta: t
    }
  };
}

function Ln(e, t, n) {
  if (n.logger.info(`[${n.serverName}] Error calling tool:`, e), e instanceof V) return b(`Unknown tool: ${t}`);
  if (e instanceof zI || e instanceof eVe) return L(n);
  if (e instanceof tVe && e.routingAckReceived === !1) return b(`The "${t}" call was never delivered to the Chrome extension: the computer running that browser appears to be offline or asleep, or Chrome is not running there. This is a connection problem, not a permission or site-access issue. Ask the user to make sure that computer is awake and Chrome is open with the Claude extension, then retry.`, {
    isBridgeTimeout: !0
  });
  if (e instanceof tVe) return b(jn(t, e), {
    isBridgeTimeout: !0
  });
  if (e instanceof W) return b(`The "${t}" tool call was displaced by a newer call on the same browser connection before its result arrived. ` + 'The action may already have executed \u2014 check the page state (e.g. "get_page_text") before repeating it.');
  if (e instanceof VJ) return b(`The "${t}" tool call failed because the Chrome extension disconnected mid-operation. This is usually transient (Chrome service worker restart, tab closed, network blip) and the extension often reconnects automatically. Retry the same tool call in a few seconds. If it keeps failing, ask the user to switch to Chrome (which wakes the extension) or check that the extension is still logged in.`);
  if (e instanceof B) return b(`The "${t}" tool call was not sent: ${e.message} Do not retry the identical call.`);
  return b(`The "${t}" tool call failed unexpectedly. This is usually transient \u2014 retry the same call in a few seconds.`);
}

function jn(e, t) {
  let n = `The "${e}" tool did not respond in time.`, r = 'a lighter operation (e.g., "get_page_text" instead of a screenshot)';
  if (t.routingAckReceived === void 0) return `${n} The page or Chrome may be unresponsive, or Chrome may be waiting for the user. Try a lighter operation (e.g., "get_page_text" instead of a screenshot), or ask the user to check Chrome.`;
  return `${n} If Chrome is on another computer, that computer may be closed or asleep. The page may also be loading or unresponsive, or Chrome may be waiting for the user. Try a lighter operation (e.g., "get_page_text" instead of a screenshot) once. If that also gets no response, ask the user to check that the computer running Chrome is awake, that Chrome is open, and that nothing in Chrome is waiting for them.`;
}

function dKt(e) {
  let t = e?.result?.content;
  if (!Array.isArray(t)) return {};
  for (let n of t) {
    if (typeof n !== "object" || n === null || n.type !== "text" || typeof n.text !== "string") continue;
    let r = n.text;
    try {
      let i = JSON.parse(r);
      if (!Array.isArray(i.availableTabs)) continue;
      let s = i.availableTabs.find(c => typeof c?.tabId === "number")?.tabId, o = typeof i.tabGroupId === "number" ? i.tabGroupId : void 0;
      return {
        tabId: s,
        tabGroupId: o,
        json: r
      };
    } catch {}
  }
  return {};
}

var vt = Symbol("timed-out");

async function Jn(e, t) {
  let n;
  try {
    return await Promise.race([ e, new Promise(r => {
      n = setTimeout(() => r(vt), t);
    }) ]);
  } finally {
    if (n !== void 0) clearTimeout(n);
  }
}

var _t = new WeakMap, kt = 8e3;

async function qn(e, t, n, r, i) {
  if (n !== "navigate" || r.tabId !== null && r.tabId !== void 0) return {
    args: r
  };
  let s = typeof r.url === "string" ? r.url.trim().toLowerCase() : "";
  if (s === "back" || s === "forward") return {
    args: r,
    error: b('tabId is required for url:"back"/"forward". Call tabs_context_mcp first to get a tab ID.')
  };
  let o = i?.sessionScope?.sessionId;
  if (!s || !o) return {
    args: r
  };
  let c = _t.get(t);
  if (!c) c = new Map, _t.set(t, c);
  let a = c.get(o);
  if (!a) a = X(e, t, "tabs_context_mcp", {
    createIfEmpty: !0
  }, {
    ...i,
    permissionMode: "ask"
  }).finally(() => {
    if (c.get(o) === a) c.delete(o);
  }), c.set(o, a);
  let u = await Jn(a, kt);
  if (u === vt) return {
    args: r,
    error: b(`The hidden tabs_context_mcp lookup did not respond within ${kt / 1e3}s. The Chrome extension may be slow to start, or the computer running that browser may be offline or asleep. Retry navigate, or call tabs_context_mcp explicitly to get a tabId first.`, {
      isFrontLoadBoundExceeded: !0
    })
  };
  let l = u?.error;
  if (l) {
    let d = Array.isArray(l.content) ? l.content : [ {
      type: "text",
      text: "tabs_context_mcp returned an error."
    } ];
    if (Pt(d)) e.onAuthenticationError();
    return {
      args: r,
      error: {
        content: d,
        isError: !0
      }
    };
  }
  let {tabId: p, tabGroupId: h, json: g} = dKt(u);
  if (p === void 0) return {
    args: r,
    tabGroupId: h
  };
  return {
    args: {
      ...r,
      tabId: p
    },
    tabContextJson: g,
    tabGroupId: h
  };
}

function fe(e, t) {
  let n = t;
  if (e.tabContextJson && !n.isError) n = {
    ...n,
    content: [ ...Array.isArray(n.content) ? n.content : [], {
      type: "text",
      text: `\nTab context (from front-loaded tabs_context_mcp):\n${e.tabContextJson}\nTabs in this group were opened for this task and are yours to clean up: close each with tabs_close_mcp once you no longer need it and before finishing, unless the user asked to see it or wants it kept open.`
    } ]
  };
  if (e.tabGroupId !== void 0) n = {
    ...n,
    _meta: {
      ...n._meta,
      frontLoadedTabGroupId: e.tabGroupId
    }
  };
  return n;
}

async function Fn(e, t, n, r, i) {
  let s = await X(e, t, n, r, i);
  if (e.logger.silly(`[${e.serverName}] Received result from socket bridge: ${Tt(s)}`), 
  s === null || s === void 0) return {
    content: [ {
      type: "text",
      text: "Tool execution completed"
    } ]
  };
  let {result: o, error: c, notices: a} = s, u = Array.isArray(a) && a.length > 0 ? {
    notices: a
  } : void 0, l = c || o, p = !!c;
  if (!l) return {
    content: [ {
      type: "text",
      text: "Tool execution completed"
    } ],
    ...u && {
      _meta: u
    }
  };
  if (p && Pt(l.content)) e.onAuthenticationError();
  let {content: h} = l;
  if (h && Array.isArray(h)) {
    if (p) return {
      content: h.map(d => {
        if (typeof d === "object" && d !== null && "type" in d) return d;
        return {
          type: "text",
          text: String(d)
        };
      }),
      isError: !0,
      ...u && {
        _meta: u
      }
    };
    return {
      content: h.map(d => {
        if (typeof d === "object" && d !== null && "type" in d && "source" in d) {
          let w = d;
          if (w.type === "image" && typeof w.source === "object" && w.source !== null && "data" in w.source) return {
            type: "image",
            data: w.source.data,
            mimeType: "media_type" in w.source ? w.source.media_type || "image/png" : "image/png"
          };
        }
        if (typeof d === "object" && d !== null && "type" in d) return d;
        return {
          type: "text",
          text: String(d)
        };
      }),
      isError: p,
      ...u && {
        _meta: u
      }
    };
  }
  if (typeof h === "string") return {
    content: [ {
      type: "text",
      text: h
    } ],
    isError: p,
    ...u && {
      _meta: u
    }
  };
  return e.logger.warn(`[${e.serverName}] Unexpected result format from socket bridge`, s), 
  {
    content: [ {
      type: "text",
      text: JSON.stringify(s)
    } ],
    isError: p,
    ...u && {
      _meta: u
    }
  };
}

function L(e) {
  return {
    content: [ {
      type: "text",
      text: e.onToolCallDisconnected()
    } ]
  };
}

async function Kn(e, t) {
  if (!e.bridgeConfig) return {
    content: [ {
      type: "text",
      text: "Browser switching is only available with bridge connections."
    } ],
    isError: !0
  };
  if (!await t.ensureConnected()) return L(e);
  if (e.isDisabled?.()) return b("Unknown tool: switch_browser");
  let r = await (t.switchBrowser?.()) ?? null;
  if (r === "no_other_browsers") return {
    content: [ {
      type: "text",
      text: "No other browsers available to switch to. Open Chrome with the Claude extension in another browser to switch."
    } ],
    isError: !1
  };
  if (r) return R.set(t, !0), {
    content: [ {
      type: "text",
      text: `Selected browser "${z(r, 0)}".`
    } ]
  };
  return {
    content: [ {
      type: "text",
      text: "No browser responded within the timeout. Make sure Chrome is open with the Claude extension installed, then try again."
    } ],
    isError: !0
  };
}

async function Hn(e, t) {
  if (!e.bridgeConfig || !t.listConnectedExtensions) return {
    content: [ {
      type: "text",
      text: "Listing browsers is only available with bridge connections."
    } ],
    isError: !0
  };
  if (!await t.ensureConnected()) return L(e);
  if (e.isDisabled?.()) return b("Unknown tool: list_connected_browsers");
  let r = await t.listConnectedExtensions(), i = _kn(r, t.getSelectedDeviceId?.(), r.length > 1 ? await lKt(e.getLocalDeviceIds) : void 0), s = i.kind === "select" ? i.extension.deviceId : void 0, o = r.map((a, u) => ({
    ...a,
    name: ge(a, u),
    osPlatform: a.osPlatform === void 0 ? void 0 : xt.get(a.osPlatform),
    ...a.deviceId === s && {
      inUse: !0
    }
  })), c = [ {
    type: "text",
    text: JSON.stringify(o)
  } ];
  if (r.length > 1) c.push({
    type: "text",
    text: Wn(e, t, o, i)
  });
  return {
    content: c
  };
}

function Wn(e, t, n, r) {
  if (r.kind === "select") {
    let i = "is the one on this computer and will be used";
    if (r.reason === "persisted") i = t.hasActiveSelection?.() ? "is the one in use for this session" : "is the one picked last and will be used";
    let s = n.findIndex(o => o.deviceId === r.extension.deviceId);
    return `${n.length} browsers are connected; "${z(r.extension, s)}" (deviceId ${r.extension.deviceId}) ${i}. No question is needed unless the user wants a different browser (then select_browser with its deviceId, or switch_browser).`;
  }
  if (r.kind === "ask" && r.localCount > 0) return `${n.length} browsers are connected, ${r.localCount} of them on this computer (onThisComputer: true), and none is selected for this session. ${urr(e.askUserToolName)} List the browsers on this computer first.`;
  return `${n.length} browsers are connected and none is selected for this session. ${urr(e.askUserToolName)}`;
}

async function Gn(e, t, n) {
  let r = typeof n.deviceId === "string" ? n.deviceId : "";
  if (!e.bridgeConfig || !t.selectExtensionById || !t.listConnectedExtensions || !r) return {
    content: [ {
      type: "text",
      text: "select_browser requires a bridge connection and a deviceId argument."
    } ],
    isError: !0
  };
  if (!await t.ensureConnected()) return L(e);
  let s = await t.listConnectedExtensions(), o = s.find(a => a.deviceId === r);
  if (!o) return {
    content: [ {
      type: "text",
      text: `No connected browser has deviceId "${r}". Call list_connected_browsers to see currently connected browsers.`
    } ],
    isError: !0
  };
  if (e.isDisabled?.()) return b("Unknown tool: select_browser");
  let c = s.indexOf(o);
  return t.selectExtensionById(r, ge(o, c)), R.set(t, !0), {
    content: [ {
      type: "text",
      text: `Selected browser "${z(o, c)}".`
    } ]
  };
}

function he(e) {
  if (!Array.isArray(e)) return String(e);
  return e.map(t => {
    if (typeof t === "string") return t;
    if (typeof t === "object" && t !== null && "text" in t && typeof t.text === "string") return t.text;
    return "";
  }).join(" ");
}

function Pt(e) {
  return he(e).toLowerCase().includes("re-authenticated");
}

export { _kn, lKt, Htt, Dvt, lrr, drr, DDe, zI, eVe, tVe, VJ, iJo, crr, q5r, bkn, dKt };
