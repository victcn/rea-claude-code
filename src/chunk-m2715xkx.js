// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { _et, LSt, NSt, cne, E2, bet, uZn, Fx, $St, LHe, pZn, FSt, fZn, TVr } from "./chunk-wcya8cef.js";

import { At } from "./chunk-vps0k559.js";

import { b, c, pe, kq, vl, hS } from "./chunk-hwdwjvh8.js";

import { Ve, x, l, E } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { Tje } from "./chunk-y752zmas.js";

import { _, Y, se } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { re } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Ja } from "./chunk-2msx6erf.js";

import { aa } from "./chunk-w4hwgefc.js";

import { dd, Xn, EU, lG, tg } from "./chunk-x35dw27e.js";

import { kv, WK } from "./chunk-hazy64h6.js";

import { xK, FZ, Qpe, od, pT, k, f8e, m8e } from "./chunk-xywp7esx.js";

import { p } from "./chunk-jkzenvsk.js";

import { Ut } from "./chunk-8yperama.js";

import { MHe } from "./chunk-fj7rnejy.js";

import { MD } from "./chunk-4nk5f3x7.js";

import { Ng, RSt, OD } from "./chunk-tba5gzq4.js";

import { sGt, KGe, oTe } from "./chunk-rwk95gwq.js";

import { yle, kSn, Hk, Zr, HD, DD } from "./chunk-9bzw65k3.js";

import { Xv } from "./chunk-84yp45y8.js";

import { zbn, rZn, oZn, Gbn, hVr } from "./chunk-mwrzbsz2.js";

import { tTe, Vbn, Kbn, ASt, fle, qbn, Ybn } from "./chunk-8z0esexy.js";

import { pW, js } from "./chunk-9g86mkx2.js";

import { aOe } from "./chunk-djxzv16h.js";

import { sn } from "./chunk-642shbw5.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import { ye } from "./chunk-ne9evs39.js";

import { O } from "./chunk-1xnsr4dy.js";

import { randomBytes as Qe, randomUUID as et } from "crypto";

import { createServer as tt } from "http";

import { join as rt } from "path";

import { parse as it } from "url";

var Xe = 3e4, je = "urn:ietf:params:oauth:grant-type:token-exchange", Oe = "urn:ietf:params:oauth:grant-type:jwt-bearer", Ue = "urn:ietf:params:oauth:token-type:id-jag", Be = "urn:ietf:params:oauth:token-type:id_token";

function Ee(e) {
  return (t, n) => {
    let r = AbortSignal.timeout(Xe), d = e ? AbortSignal.any([ r, e ]) : r;
    return fetch(t, {
      ...n,
      ...aa({
        url: String(t)
      }),
      signal: d
    }).catch(h => DD(h, t));
  };
}

var ce = Ee();

function ae(e) {
  try {
    return new URL(e).href.replace(/\/$/, "");
  } catch {
    return e.replace(/\/$/, "");
  }
}

class W extends Error {
  shouldClearIdToken;
  constructor(e, t) {
    super(e);
    this.name = "XaaTokenExchangeError", this.shouldClearIdToken = t;
  }
}

var Ke = /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;

function te(e) {
  return (typeof e === "string" ? e : _(e)).replace(Ke, (n, r) => `"${r}":"[REDACTED]"`);
}

var We = p(() => u({
  access_token: o().optional(),
  issued_token_type: o().optional(),
  expires_in: aOe().optional(),
  scope: o().optional()
})), Ge = p(() => u({
  access_token: o().min(1),
  token_type: o().default("Bearer"),
  expires_in: aOe().optional(),
  scope: o().optional(),
  refresh_token: o().optional()
}));

async function qe(e, t) {
  let n;
  try {
    n = await pZn(e, void 0, t?.fetchFn ?? ce);
  } catch (r) {
    if (Ve(r)) throw r;
    let d = r instanceof Error ? /^HTTP (\d{3}) /.exec(r.message)?.[1] : void 0;
    throw Error(`XAA: PRM discovery failed for ${Zr(e)} (${d ? `HTTP ${d}` : r instanceof Error ? r.name : typeof r})`);
  }
  if (!n.resource || !n.authorization_servers?.[0]) throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (ae(n.resource) !== ae(e)) throw Error(`XAA: PRM discovery failed: PRM resource mismatch: expected ${Zr(e)}, got ${Zr(n.resource)}`);
  return {
    resource: n.resource,
    authorization_servers: n.authorization_servers
  };
}

async function Je(e, t) {
  let n;
  try {
    n = await FSt(e, {
      fetchFn: t?.fetchFn ?? ce,
      skipIssuerValidation: !0
    });
  } catch (r) {
    if (Ve(r)) throw r;
    let d = r instanceof Error ? /^HTTP (\d{3}) /.exec(r.message)?.[1] : void 0;
    throw new x(`XAA: AS metadata discovery failed (${d ? `HTTP ${d}` : r instanceof Error ? r.name : typeof r})`, "XAA: AS metadata discovery failed");
  }
  if (!n?.issuer || !n.token_endpoint) throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${Zr(e)}`);
  if (ae(n.issuer) !== ae(e)) throw Error(`XAA: AS metadata discovery failed: issuer mismatch: expected ${Zr(e)}, got ${Zr(n.issuer)}`);
  if (!URL.canParse(n.token_endpoint) || new URL(n.token_endpoint).protocol !== "https:") throw Error(`XAA: refusing non-HTTPS token endpoint: ${Zr(n.token_endpoint)}`);
  return {
    issuer: n.issuer,
    token_endpoint: n.token_endpoint,
    grant_types_supported: n.grant_types_supported,
    token_endpoint_auth_methods_supported: n.token_endpoint_auth_methods_supported
  };
}

async function Ye(e) {
  let t = e.fetchFn ?? ce, n = new URLSearchParams({
    grant_type: je,
    requested_token_type: Ue,
    audience: e.audience,
    resource: e.resource,
    subject_token: e.idToken,
    subject_token_type: Be,
    client_id: e.clientId
  });
  if (e.clientSecret) n.set("client_secret", e.clientSecret);
  if (e.scope) n.set("scope", e.scope);
  let r = await t(e.tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: n
  });
  if (!r.ok) {
    let S = te(await r.text()).slice(0, 200), v = r.status < 500;
    throw new W(`XAA: token exchange failed: HTTP ${r.status}: ${S}`, v);
  }
  let d;
  try {
    d = await r.json();
  } catch {
    throw new W(`XAA: token exchange returned non-JSON (captive portal?) at ${Zr(e.tokenEndpoint)}`, !1);
  }
  let h = We().safeParse(d);
  if (!h.success) throw new W(`XAA: token exchange response did not match expected shape: ${te(d)}`, !0);
  let s = h.data;
  if (!s.access_token) throw new W(`XAA: token exchange response missing access_token: ${te(s)}`, !0);
  if (s.issued_token_type !== Ue) throw new W(`XAA: token exchange returned unexpected issued_token_type: ${s.issued_token_type}`, !0);
  return {
    jwtAuthGrant: s.access_token,
    expiresIn: s.expires_in,
    scope: s.scope
  };
}

async function Ze(e) {
  let t = e.fetchFn ?? ce, n = e.authMethod ?? "client_secret_basic", r = new URLSearchParams({
    grant_type: Oe,
    assertion: e.assertion
  });
  if (e.scope) r.set("scope", e.scope);
  let d = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  if (n === "client_secret_basic") {
    let v = Buffer.from(`${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`).toString("base64");
    d.Authorization = `Basic ${v}`, Ng().record(v);
  } else r.set("client_id", e.clientId), r.set("client_secret", e.clientSecret);
  Ng().record(e.clientSecret), Ng().record(e.assertion);
  let h = await t(e.tokenEndpoint, {
    method: "POST",
    headers: d,
    body: r
  });
  if (!h.ok) {
    let v = te(await h.text()).slice(0, 200);
    throw Error(`XAA: jwt-bearer grant failed: HTTP ${h.status}: ${v}`);
  }
  let s;
  try {
    s = await h.json();
  } catch {
    throw Error(`XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${Zr(e.tokenEndpoint)}`);
  }
  let S = Ge().safeParse(s);
  if (!S.success) throw Error(`XAA: jwt-bearer response did not match expected shape: ${te(s)}`);
  return S.data;
}

async function ge(e, t, n = "xaa", r) {
  let d = Ee(r);
  re(n, `XAA: discovering PRM for ${Zr(e)}`);
  let h = await qe(e, {
    fetchFn: d
  });
  re(n, `XAA: discovered resource=${Zr(h.resource)} ASes=[${h.authorization_servers.map(Zr).join(", ")}]`);
  let s, S = [];
  for (let w of h.authorization_servers) {
    let M;
    try {
      M = await Je(w, {
        fetchFn: d
      });
    } catch (D) {
      if (r?.aborted) throw D;
      S.push(`${Zr(w)}: ${D instanceof Error ? D.message : String(D)}`);
      continue;
    }
    if (M.grant_types_supported && !M.grant_types_supported.includes(Oe)) {
      S.push(`${Zr(w)}: does not advertise jwt-bearer grant (supported: ${M.grant_types_supported.join(", ")})`);
      continue;
    }
    s = M;
    break;
  }
  if (!s) throw new x(`XAA: no authorization server supports jwt-bearer. Tried: ${S.join("; ")}`, `XAA: no authorization server supports jwt-bearer (tried ${h.authorization_servers.length})`);
  let v = s.token_endpoint_auth_methods_supported, A = v && !v.includes("client_secret_basic") && v.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
  re(n, `XAA: AS issuer=${Zr(s.issuer)} token_endpoint=${Zr(s.token_endpoint)} auth_method=${A}`), 
  re(n, "XAA: exchanging id_token for ID-JAG at IdP");
  let y = await Ye({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: s.issuer,
    resource: h.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: d
  });
  re(n, "XAA: ID-JAG obtained"), re(n, "XAA: exchanging ID-JAG for access_token at AS");
  let T = await Ze({
    tokenEndpoint: s.token_endpoint,
    assertion: y.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
    authMethod: A,
    fetchFn: d
  });
  return re(n, "XAA: access_token obtained"), {
    ...T,
    authorizationServerUrl: s.issuer
  };
}

var nt = 3e4, st = 500, Re = 6e5, ot = new Set([ ...lG, ...EU, "ETIMEDOUT" ]);

function at(e) {
  if (Ve(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = tg(e);
  return t !== null && ot.has(t.code);
}

function Se(e) {
  let t = e;
  return (t?.name === "ZodError" || t?.name === "$ZodError") && Array.isArray(t?.issues);
}

var ct = new Set(Object.values(cne)), dt = [ "authorization_pending", "expired_token", "slow_down" ], ut = [ ...Object.values(cne), ...dt ];

function M1s(e) {
  let t = ut.find(n => n === e);
  return pe(t) ?? b("other");
}

function H1s(e, t) {
  let n = t instanceof Error ? `${e}\n${t.message}` : e;
  if (t instanceof v2) return "issuer_echo_denied";
  if (t instanceof bet) return t.kind === "metadata" ? "issuer_echo_mismatch" : "issuer_response_mismatch";
  if (t instanceof uZn) return "dcr_rejected";
  if (n.includes("dynamic client registration") || t instanceof E2 && t.code === "invalid_client_metadata") return "dcr_failed";
  if (n.includes("trying to load") && n.includes("metadata") || n.includes("Incompatible auth server")) return "discovery_failed";
  if (t instanceof E2) return "dcr_rejected";
  if (n.includes("Issuer mismatch in authorization server metadata")) return "issuer_echo_mismatch";
  if (n.includes("Issuer mismatch in authorization response")) return "issuer_response_mismatch";
  let r = E(t) ?? E(t instanceof Error ? t.cause : void 0);
  if (r && m8e.has(r)) return "network_failed";
  return "sdk_auth_failed";
}

var ve = 5;

function r5o(e) {
  return Zr(e.origin + e.pathname) + kSn(e);
}

var ht = new Set([ "invalid_refresh_token", "expired_refresh_token", "token_expired" ]);

async function o5o(e) {
  if (!e.ok) return e;
  let t = await e.text(), n;
  try {
    n = Y(t);
  } catch {
    return new Response(t, e);
  }
  if (LSt.safeParse(n).success) return new Response(t, e);
  let r = NSt.safeParse(n);
  if (!r.success) return new Response(t, e);
  let d = ht.has(r.data.error) ? {
    error: "invalid_grant",
    error_description: r.data.error_description ?? `Server returned non-standard error code: ${r.data.error}`
  } : r.data;
  return new Response(_(d), {
    status: 400,
    statusText: "Bad Request",
    headers: e.headers
  });
}

function Jzt() {
  return async (e, t) => {
    try {
      return await Me(e, t);
    } catch (n) {
      if (t?.signal?.aborted || !at(n)) throw n;
      return await J(st, t?.signal ?? void 0), await Me(e, t);
    }
  };
}

async function Me(e, t) {
  let n = AbortSignal.timeout(nt), r = t?.method?.toUpperCase() === "POST", d = aa({
    url: String(e)
  });
  if (!t?.signal) {
    let v;
    try {
      v = await fetch(e, {
        ...t,
        ...d,
        signal: n
      });
    } catch (A) {
      DD(A, e);
    }
    return r ? o5o(v) : v;
  }
  let h = new AbortController, s = () => h.abort();
  t.signal.addEventListener("abort", s), n.addEventListener("abort", s);
  let S = () => {
    t.signal?.removeEventListener("abort", s), n.removeEventListener("abort", s);
  };
  if (t.signal.aborted) h.abort();
  try {
    let v = await fetch(e, {
      ...t,
      ...d,
      signal: h.signal
    });
    return S(), r ? o5o(v) : v;
  } catch (v) {
    S(), DD(v, e);
  }
}

async function ue(e, t, n) {
  let {configuredMetadataUrl: r, fetchFn: d, resourceMetadataUrl: h, serverConfigForAnalytics: s} = n ?? {}, S = d ?? Jzt();
  if (r) {
    if (!r.startsWith("https://")) throw Error(`authServerMetadataUrl must use https:// (got: ${Zr(r)})`);
    let A = await S(r, {
      headers: {
        Accept: "application/json"
      }
    });
    if (A.ok) {
      let y;
      try {
        y = await A.json();
      } catch {
        throw Error(`Configured auth server metadata at ${Zr(r)} is not valid JSON`);
      }
      return _et.parse(y);
    }
    throw Error(`HTTP ${A.status} fetching configured auth server metadata from ${Zr(r)}`);
  }
  try {
    let {authorizationServerUrl: A, authorizationServerMetadata: y} = await fZn(t, {
      fetchFn: S,
      ...h && {
        resourceMetadataUrl: h
      },
      skipIssuerMetadataValidation: !0
    });
    if (y) return jbn({
      serverName: e,
      site: "rfc9728_chain",
      expectedIssuer: A,
      receivedIssuer: y.issuer,
      serverConfig: s
    }), y;
  } catch (A) {
    if (A instanceof v2) throw A;
    re(e, `RFC 9728 discovery failed, falling back: ${HD(A, t)}`);
  }
  let v = new URL(t);
  if (v.pathname === "/") return;
  try {
    let A = await FSt(v, {
      fetchFn: S,
      skipIssuerValidation: !0
    });
    if (A) jbn({
      serverName: e,
      site: "legacy_path_fallback",
      expectedIssuer: v.href,
      receivedIssuer: A.issuer,
      serverConfig: s
    });
    return A;
  } catch (A) {
    if (A instanceof v2) throw A;
    re(e, `Path-aware auth server discovery failed: ${HD(A, t)}`);
    return;
  }
}

class v2 extends x {
  expected;
  received;
  constructor(e, t) {
    super(`Issuer echo cross-origin mismatch (RFC 8414 \xa73.3): expected ${_(e)}, received ${_(t)}`, "issuer echo cross-origin mismatch (RFC 8414 \xa73.3)", "issuer_echo_denied");
    this.expected = e;
    this.received = t;
    this.name = "IssuerEchoCrossOriginError";
  }
}

function de() {
  try {
    return k("tengu_mcp_issuer_strict_echo", !1) === !0;
  } catch {
    return !1;
  }
}

function lt(e, t) {
  return t === e || e.endsWith("/") && t === e.slice(0, -1);
}

function he(e) {
  try {
    let t = new URL(e);
    if ((t.protocol === "https:" || t.protocol === "http:") && t.origin !== "null") return t;
  } catch {}
  return;
}

function ft(e, t) {
  let n = he(e), r = he(t);
  if (!n || !r) return "unparseable";
  if (n.username !== "" || n.password !== "" || r.username !== "" || r.password !== "" || r.search !== "" || r.hash !== "") return "cross_origin";
  return n.origin === r.origin ? "same_origin" : "cross_origin";
}

function pt(e, t) {
  let n = he(e), r = he(t);
  if (!n || !r) return [];
  let d = [];
  if (n.protocol !== r.protocol) d.push("scheme");
  if (n.username !== r.username || n.password !== r.password) d.push("userinfo");
  if (n.hostname !== r.hostname) d.push("host");
  if (n.port !== r.port) d.push("port");
  if (n.pathname !== r.pathname) d.push("path");
  if (n.search !== r.search) d.push("query");
  if (n.hash !== r.hash) d.push("fragment");
  if (d.length === 0) d.push("normalization_only");
  return d;
}

function jbn({serverName: e, site: t, expectedIssuer: n, receivedIssuer: r, serverConfig: d}) {
  if (n === void 0) return;
  if (r !== void 0 && lt(n, r)) return;
  let h = r === void 0 ? "unparseable" : ft(n, r), s = de() ? "enforce" : "observe", S = s === "enforce" && h !== "same_origin";
  try {
    let v = r === void 0 ? [ "issuer_missing" ] : pt(n, r), A = d ? Xv(d) : void 0, y = d ? hS(e, pT(e, d)) : void 0;
    i("tengu_mcp_oauth_issuer_echo_mismatch", {
      site: c(t),
      mode: c(s),
      originRelation: c(h),
      outcome: S ? b("denied") : b("proceeded"),
      ...v.length > 0 && {
        mismatchFacets: vl(v)
      },
      expectedIssuerHash: sn(n),
      ...r !== void 0 && {
        receivedIssuerHash: sn(r)
      },
      ...A && {
        mcpServerBaseUrl: A
      },
      ...y && {
        mcpServerName: y
      }
    });
  } catch (v) {
    try {
      re(e, `issuer-echo telemetry failed: ${l(v)}`);
    } catch {}
  }
  if (S) throw new v2(n, r);
}

class s5o extends Fx {
  serverName;
  constructor(e) {
    super("Authentication required; client registration is deferred until the user authenticates");
    this.serverName = e;
    this.name = "McpClientRegistrationDeferredError";
  }
}

class Qzt extends Error {
  constructor() {
    super("Authentication was cancelled");
    this.name = "AuthenticationCancelledError";
  }
}

function ke(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`;
  } catch {
    return e;
  }
}

function xe(e) {
  let t = ke(e);
  return t === "http://127.0.0.1" || t === "http://localhost";
}

function be(e) {
  if (!e?.clientId || !e.redirectUri || !xe(e.redirectUri)) return;
  let t = Number(new URL(e.redirectUri).port);
  return t && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === KGe(t) ? t : void 0;
}

function $e() {
  return a.MCP_OAUTH_CLIENT_METADATA_URL || Tje;
}

function Ie(e) {
  if (!xe(e)) return !1;
  try {
    return new URL(e).pathname === "/callback";
  } catch {
    return !1;
  }
}

function _t(e) {
  return e !== void 0 && (e === Tje || e === $e());
}

function A4s(e) {
  return Ut().oauthCallbackSubmitters.get(e);
}

function C4s(e, t) {
  let n = Ut().activeOAuthFlows;
  n.set(e, t), t.finally(() => {
    if (n.get(e) === t) n.delete(e);
  }).catch(() => {});
}

function R4s(e) {
  return Ut().activeOAuthFlows.get(e);
}

async function nZn(e, t) {
  let n = od(e, t), r = (await Xn().readAsync())?.mcpOAuth?.[n];
  if (!r || r.accessToken || r.refreshToken) return;
  try {
    await Xn().mutate(d => {
      let h = d.mcpOAuth?.[n];
      if (!h || h.accessToken || h.refreshToken) return d;
      let s = {
        ...d.mcpOAuth
      };
      return delete s[n], {
        ...d,
        mcpOAuth: s
      };
    });
  } catch (d) {
    re(e, `clear tokenless stub failed: ${l(d)}`);
  }
}

async function Pe({serverName: e, endpoint: t, token: n, tokenTypeHint: r, clientId: d, clientSecret: h, accessToken: s, authMethod: S = "client_secret_basic", configuredHeaders: v}) {
  let A = new URLSearchParams;
  A.set("token", n), A.set("token_type_hint", r);
  let y = {
    ...v,
    "Content-Type": "application/x-www-form-urlencoded"
  }, T = Object.keys(v).length > 0 ? {
    beforeRedirect: Ybn(t)
  } : {};
  if (d && h) if (S === "client_secret_post") A.set("client_id", d), A.set("client_secret", h); else {
    let w = Buffer.from(`${encodeURIComponent(d)}:${encodeURIComponent(h)}`).toString("base64");
    y.Authorization = `Basic ${w}`, Ng().record(w);
  } else if (d) A.set("client_id", d); else re(e, `No client_id available for ${r} revocation - server may reject`);
  try {
    await At.post(t, A, {
      headers: y,
      ...T
    }), re(e, `Successfully revoked ${r}`);
  } catch (w) {
    if (At.isAxiosError(w) && w.response?.status === 401 && s) re(e, `Got 401, retrying ${r} revocation with Bearer auth`), 
    A.delete("client_id"), A.delete("client_secret"), await At.post(t, A, {
      headers: {
        ...y,
        Authorization: `Bearer ${s}`
      },
      ...T
    }), re(e, `Successfully revoked ${r} with Bearer auth`); else throw w;
  }
}

async function x4s(e, t) {
  let r = (await Xn().readAsync())?.mcpOAuth?.[od(e, t)];
  if (!r?.accessToken && !r?.refreshToken) return;
  return {
    accessToken: r.accessToken || void 0,
    refreshToken: r.refreshToken,
    clientId: r.clientId,
    clientSecret: r.clientSecret,
    ...r.discoveryState && {
      discoveryState: tTe(r.discoveryState)
    }
  };
}

async function De(e, t, n) {
  let r = Ng();
  r.record(n.accessToken), r.record(n.refreshToken), r.record(n.clientSecret);
  let d;
  try {
    let h = n.discoveryState?.authorizationServerUrl ?? t.url, s = await ue(e, h, {
      configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
      fetchFn: fle(e, t, Jzt()),
      serverConfigForAnalytics: t
    });
    if (!s) re(e, "No OAuth metadata found"), d = "no_metadata"; else {
      let S = "revocation_endpoint" in s ? s.revocation_endpoint : null;
      if (!S) re(e, "Server does not support token revocation"), d = "no_revocation_endpoint"; else {
        let v = String(S), A = await qbn(e, t, v), y = ("revocation_endpoint_auth_methods_supported" in s ? s.revocation_endpoint_auth_methods_supported : void 0) ?? ("token_endpoint_auth_methods_supported" in s ? s.token_endpoint_auth_methods_supported : void 0), T = y && !y.includes("client_secret_basic") && y.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
        if (re(e, `Revoking tokens via ${Zr(v)} (${T})`), n.refreshToken) try {
          await Pe({
            serverName: e,
            endpoint: v,
            token: n.refreshToken,
            tokenTypeHint: "refresh_token",
            clientId: n.clientId,
            clientSecret: n.clientSecret,
            accessToken: n.accessToken,
            authMethod: T,
            configuredHeaders: A
          });
        } catch (w) {
          re(e, `Failed to revoke refresh token: ${l(w)}`), d = "server_revoke_failed";
        }
        if (n.accessToken) try {
          await Pe({
            serverName: e,
            endpoint: v,
            token: n.accessToken,
            tokenTypeHint: "access_token",
            clientId: n.clientId,
            clientSecret: n.clientSecret,
            accessToken: n.accessToken,
            authMethod: T,
            configuredHeaders: A
          });
        } catch (w) {
          re(e, `Failed to revoke access token: ${l(w)}`), d = "server_revoke_failed";
        }
      }
    }
  } catch (h) {
    re(e, `Failed to revoke tokens: ${l(h)}`), d = h instanceof v2 ? "issuer_echo_denied" : "server_revoke_failed";
  }
  return d;
}

async function P4s(e, t, n) {
  let r;
  try {
    let d = (await Xn().readAsync())?.mcpOAuth?.[od(e, t)], h = {
      ...n,
      accessToken: n.accessToken && n.accessToken !== d?.accessToken ? n.accessToken : void 0,
      refreshToken: n.refreshToken && n.refreshToken !== d?.refreshToken ? n.refreshToken : void 0
    };
    if (!h.accessToken && !h.refreshToken) {
      re(e, "No replaced tokens to revoke"), g("mcp_oauth_revoke");
      return;
    }
    r = await De(e, t, h);
  } catch (d) {
    re(e, `Failed to revoke replaced tokens: ${l(d)}`), r = "server_revoke_failed";
  }
  if (r) f("mcp_oauth_revoke", r); else g("mcp_oauth_revoke");
}

async function I4s(e, t, {preserveStepUpState: n = !1} = {}) {
  let r = Xn(), d = await r.readAsync();
  if (!d?.mcpOAuth) {
    g("mcp_oauth_revoke");
    return;
  }
  let h = od(e, t), s = d.mcpOAuth[h], S;
  if (s?.accessToken || s?.refreshToken) S = await De(e, t, {
    accessToken: s.accessToken || void 0,
    refreshToken: s.refreshToken,
    clientId: s.clientId,
    clientSecret: s.clientSecret,
    ...s.discoveryState && {
      discoveryState: tTe(s.discoveryState)
    }
  }); else re(e, "No tokens to revoke");
  try {
    if (n && s && (s.stepUpScope || s.discoveryState || s.clientId)) await r.mutate(v => {
      let A = v.mcpOAuth?.[h];
      if (A?.accessToken !== s.accessToken || A?.clientId !== s.clientId) return v;
      return {
        ...v,
        mcpOAuth: {
          ...v.mcpOAuth,
          [h]: {
            serverName: e,
            serverUrl: t.url,
            accessToken: "",
            refreshToken: void 0,
            expiresAt: void 0,
            ...s.clientId && {
              clientId: s.clientId,
              ...s.redirectUri && {
                redirectUri: s.redirectUri
              },
              ...s.clientSecret !== void 0 && {
                clientSecret: s.clientSecret
              }
            },
            ...s.stepUpScope && {
              stepUpScope: s.stepUpScope
            },
            ...s.discoveryState && {
              discoveryState: {
                ...tTe(s.discoveryState),
                resourceMetadataUrl: s.discoveryState.resourceMetadataUrl
              }
            }
          }
        }
      };
    }), re(e, "Preserved step-up auth state across revocation"); else await i5o(e, t);
  } catch (v) {
    re(e, `clear local tokens failed: ${l(v)}`), S ??= "local_clear_failed";
  }
  if (OD(e), S) f("mcp_oauth_revoke", S); else g("mcp_oauth_revoke");
}

async function i5o(e, t, n) {
  let r = od(e, t), d;
  if (await Xn().mutate(h => {
    let s = h.mcpOAuth?.[r];
    if (!s) return h;
    let S = {
      ...h.mcpOAuth
    };
    if (s.clientId && n?.preserveClientRegistration?.(s)) {
      if (!s.accessToken && !s.refreshToken) return h;
      S[r] = {
        ...s,
        accessToken: "",
        refreshToken: void 0,
        expiresAt: 0,
        scope: void 0
      }, d = "tokens";
    } else delete S[r], d = "all";
    return {
      ...h,
      mcpOAuth: S
    };
  }), d) re(e, d === "tokens" ? "Cleared stored tokens (preserved client registration)" : "Cleared stored tokens");
}

function Fe(e, t, n, r) {
  if (n?.success) return;
  let d = r ? "mutate_rejected" : "storage_write_failed", h = r ? l(r) : n?.warning ?? "storage write failed";
  re(e, `Token persist failed: ${h}`);
  let s = Xv(t);
  i("tengu_mcp_oauth_token_persist_failed", {
    transportType: c(t.type),
    ...s && {
      mcpServerBaseUrl: s
    },
    reason: c(d)
  });
}

async function mt(e, t, n, r, d) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let h = FZ();
  if (!h) throw Error("XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.");
  let s = t.oauth?.clientId;
  if (!s) throw Error(`XAA: server '${e}' needs an AS client_id. Re-add with --client-id.`);
  let v = (await a5o(e, t))?.clientSecret;
  if (!v) {
    let w = od(e, t), M = Object.keys((await Xn().readAsync())?.mcpOAuthClientConfig ?? {}), D = yle(t.headers ?? {});
    throw re(e, `XAA: secret lookup miss. wanted=${w} have=[${M.join(", ")}] configHeaders=${_(D)}`), 
    Error(`XAA: AS client secret not found for '${e}'. Re-add with --client-secret.`);
  }
  re(e, "XAA: starting cross-app access flow");
  let A = await oZn(h.issuer), y = await zbn(h.issuer) !== void 0, T = "idp_login";
  try {
    let w;
    try {
      w = await hVr({
        idpIssuer: h.issuer,
        idpClientId: h.clientId,
        idpClientSecret: A,
        callbackPort: h.callbackPort,
        onAuthorizationUrl: n,
        skipBrowserOpen: d,
        abortSignal: r
      });
    } catch (C) {
      if (r?.aborted) throw new Qzt;
      throw C;
    }
    T = "discovery";
    let M = await Gbn(h.issuer);
    T = "token_exchange", Ng().record(v);
    let D;
    try {
      D = await ge(t.url, {
        clientId: s,
        clientSecret: v,
        idpClientId: h.clientId,
        idpClientSecret: A,
        idpIdToken: w,
        idpTokenEndpoint: M.token_endpoint
      }, e, r);
    } catch (C) {
      if (r?.aborted) throw new Qzt;
      let P = l(C);
      if (C instanceof W) {
        if (C.shouldClearIdToken) await rZn(h.issuer), re(e, "XAA: cleared cached id_token after token-exchange failure");
      } else if (P.includes("PRM discovery failed") || P.includes("AS metadata discovery failed") || P.includes("no authorization server supports jwt-bearer")) T = "discovery"; else if (P.includes("jwt-bearer")) T = "jwt_bearer";
      throw C;
    }
    let U = od(e, t), R = Ng();
    R.record(D.access_token), R.record(D.refresh_token);
    let I, B;
    try {
      I = await Xn().mutate(C => {
        let P = C.mcpOAuth?.[U];
        return {
          ...C,
          mcpOAuth: {
            ...C.mcpOAuth,
            [U]: {
              ...P,
              serverName: e,
              serverUrl: t.url,
              accessToken: D.access_token,
              refreshToken: D.refresh_token ?? P?.refreshToken,
              expiresAt: D.expires_in != null ? Date.now() + D.expires_in * 1e3 : void 0,
              scope: D.scope,
              clientId: s,
              clientSecret: v,
              discoveryState: ASt({
                previous: P?.discoveryState,
                issuedBy: D.authorizationServerUrl,
                interactiveSignIn: !0
              })
            }
          }
        };
      });
    } catch (C) {
      B = C;
    }
    if (I?.success) re(e, "XAA: tokens saved"); else Fe(e, t, I, B);
    i("tengu_mcp_oauth_flow_success", {
      authMethod: b("xaa"),
      idTokenCacheHit: y
    }), g("mcp_oauth_flow");
  } catch (w) {
    if (w instanceof Qzt) throw w;
    throw m("mcp_oauth_flow", "mcp_oauth_xaa_failed"), i("tengu_mcp_oauth_flow_failure", {
      authMethod: b("xaa"),
      xaaFailureStage: c(T),
      idTokenCacheHit: y
    }), w;
  }
}

async function gVr(e, t, n, r, d) {
  if (!URL.canParse(t.url)) {
    m("mcp_oauth_flow", "mcp_oauth_no_valid_url");
    let U = "configError" in t && typeof t.configError === "string" ? t.configError : void 0;
    throw new x(U || "This server's URL is missing or not a valid URL, so sign-in can't start. Fix the URL in its MCP config (or set the environment variable it uses) and try again.", "MCP OAuth refused: no valid server URL");
  }
  if (t.oauth?.xaa) {
    if (!xK()) throw Error(`XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`);
    i("tengu_mcp_oauth_flow_start", {
      isOAuthFlow: !0,
      authMethod: b("xaa"),
      transportType: c(t.type),
      ...Xv(t) && {
        mcpServerBaseUrl: Xv(t)
      }
    }), await mt(e, t, n, r, d?.skipBrowserOpen);
    return;
  }
  let h = Xn(), s = od(e, t), S = (await h.readAsync())?.mcpOAuth?.[s], v = S?.stepUpScope, A = S?.discoveryState?.resourceMetadataUrl, y = be(S), T;
  if (A) try {
    T = new URL(A);
  } catch {
    re(e, `Invalid cached resourceMetadataUrl: ${Zr(A)}`);
  }
  let w = {
    scope: v,
    resourceMetadataUrl: T
  }, M = et();
  i("tengu_mcp_oauth_flow_start", {
    flowAttemptId: ye(M),
    isOAuthFlow: !0,
    transportType: c(t.type),
    ...Xv(t) && {
      mcpServerBaseUrl: Xv(t)
    }
  });
  let D = !1;
  try {
    let U = t.oauth?.callbackPort, R = !!d?.redirectUri, I = R ? 0 : U ?? await oTe(y), B = d?.redirectUri ?? KGe(I);
    re(e, R ? `Using custom redirectUri: ${Zr(B)} (no localhost listener)` : `Using redirect port: ${I}${U ? " (from config)" : y && I === y ? " (reusing registered port)" : ""}`);
    try {
      await i5o(e, t, {
        preserveClientRegistration: L => I === be(L) || L.redirectUri === B
      });
    } catch (L) {
      re(e, `clear stored credentials failed: ${l(L)}`);
    }
    let C = Ut(), P = new AbortController;
    if (!R) C.oauthCallbackListeners.get(I)?.abort(), C.oauthCallbackListeners.set(I, P);
    let K = new Zzt(e, t, B, !0, n, d?.skipBrowserOpen), ie = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
    if (w.scope && !ie) K.markStepUpPending(w.scope);
    let le = fle(e, t, Jzt());
    try {
      let L = await ue(e, t.url, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        fetchFn: le,
        resourceMetadataUrl: w.resourceMetadataUrl,
        serverConfigForAnalytics: t
      });
      if (L) K.setMetadata(L), re(e, `Fetched OAuth metadata with scope: ${Hk("scope", Ne(L) ?? "") || "NONE"}`);
    } catch (L) {
      if (L instanceof v2) throw L;
      re(e, `Failed to fetch OAuth metadata: ${HD(L, t.url)}`);
    }
    let Z = await K.state(), z = null, N = null, H = null, Ae = null, G = () => {
      if (z) z.removeAllListeners(), z.on("error", () => {}), z.close(), z = null;
      if (N) clearTimeout(N), N = null;
      if (H) r?.removeEventListener("abort", H), P.signal.removeEventListener("abort", H), 
      H = null;
      if (C.oauthCallbackListeners.get(I) === P) C.oauthCallbackListeners.delete(I);
      if (C.oauthCallbackSubmitters.get(e) === Ae) C.oauthCallbackSubmitters.delete(e);
      re(e, "MCP OAuth server cleaned up");
    }, {code: we, iss: ze} = await new Promise((L, Le) => {
      let ne = !1, Te = (F, X) => {
        if (ne) return;
        ne = !0, L({
          code: F,
          iss: X
        });
      }, q = F => {
        if (ne) return;
        ne = !0, Le(F);
      };
      if (H = () => {
        G(), q(new Qzt);
      }, r?.aborted || P.signal.aborted) {
        H();
        return;
      }
      r?.addEventListener("abort", H), P.signal.addEventListener("abort", H);
      {
        let F = X => {
          try {
            let j = new URL(X), Q = j.searchParams.get("code"), _e = j.searchParams.get("state"), V = j.searchParams.get("error"), ee = sGt(j.searchParams.get("iss"));
            if (!Q && !V) return !1;
            if (_e !== Z) return re(e, "Ignoring manual callback URL whose state belongs to a different flow"), 
            !1;
            if (V) {
              let oe = j.searchParams.get("error_description") || "";
              return G(), q(Error(`OAuth error: ${V} - ${oe}`)), !0;
            }
            if (!Q) return !1;
            return re(e, "Received auth code via manual callback URL"), G(), Te(Q, ee), !0;
          } catch {
            return !1;
          }
        };
        Ae = F, C.oauthCallbackSubmitters.set(e, F), d?.onWaitingForCallback?.(F, I, Z);
      }
      let Ce = async () => {
        try {
          re(e, "Starting SDK auth"), re(e, `Server URL: ${Zr(t.url)}`);
          let F = await $St(K, {
            serverUrl: t.url,
            scope: w.scope,
            resourceMetadataUrl: w.resourceMetadataUrl,
            fetchFn: le,
            skipIssuerMetadataValidation: !0
          });
          if (re(e, `Initial auth result: ${F}`), F !== "REDIRECT") re(e, `Unexpected auth result, expected REDIRECT: ${F}`);
        } catch (F) {
          re(e, `SDK auth error: ${HD(F, t.url)}`), G(), q(Object.assign(new x(`SDK auth failed: ${HD(F, t.url)}`, "SDK auth failed"), {
            cause: F
          }));
        }
      };
      if (R) Ce(); else z = tt((F, X) => {
        let j = it(F.url || "", !0);
        if (j.pathname === "/callback") {
          let Q = j.query.code, _e = j.query.state, V = j.query.error, ee = j.query.error_description, oe = j.query.error_uri, He = sGt(j.query.iss);
          if (_e !== Z) {
            X.writeHead(400, {
              "Content-Type": "text/html"
            }), X.end(MD({
              ok: !1,
              heading: "Authentication failed",
              message: "Invalid state parameter. Close this tab and try again from Claude Code."
            }));
            return;
          }
          if (V) {
            X.writeHead(200, {
              "Content-Type": "text/html"
            }), X.end(MD({
              ok: !1,
              heading: "Authentication failed",
              message: "Close this tab and try again from Claude Code.",
              detail: `${String(V)}: ${ee ?? ""}`
            })), G();
            let me = `OAuth error: ${V}`;
            if (ee) me += ` - ${ee}`;
            if (oe) me += ` (See: ${oe})`;
            q(Error(me));
            return;
          }
          if (Q) X.writeHead(200, {
            "Content-Type": "text/html"
          }), X.end(MD({
            ok: !0,
            heading: "Authentication successful",
            message: "You can close this tab and return to Claude Code."
          })), G(), Te(Q, He);
        } else X.writeHead(404, {
          "Content-Type": "text/html"
        }), X.end(MD({
          ok: !1,
          heading: "Not found",
          message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${Zr(B)}.`
        }));
      }), z.on("error", F => {
        if (G(), F.code === "EADDRINUSE") {
          let X = O() === "windows" ? `netstat -ano | findstr :${I}` : `lsof -ti:${I} -sTCP:LISTEN`;
          q(new x(`OAuth callback port ${I} is already in use \u2014 another process may be holding it. ` + `Run \`${X}\` to find it.`, "OAuth callback port already in use"));
        } else q(new x(`OAuth callback server failed: ${F.message}`, "OAuth callback server failed"));
      }), z.listen(I, "127.0.0.1", () => void Ce()), z.unref();
      N = setTimeout((F, X) => {
        F(), X(new x("Authentication timeout", "Authentication timeout"));
      }, 3e5, G, q), N.unref();
    });
    D = !0, re(e, "Completing auth flow with authorization code"), Ng().record(we);
    let fe = await $St(K, {
      serverUrl: t.url,
      authorizationCode: we,
      iss: ze,
      resourceMetadataUrl: w.resourceMetadataUrl,
      fetchFn: fle(e, t, Jzt()),
      skipIssuerMetadataValidation: !0
    });
    if (re(e, `Auth result: ${fe}`), fe === "AUTHORIZED") {
      let L = await K.tokens().catch(() => {});
      if (re(e, `Tokens after auth: ${L ? "Present" : "Missing"}`), L) re(e, `Token expires_in: ${L.expires_in}`);
      i("tengu_mcp_oauth_flow_success", {
        flowAttemptId: ye(M),
        transportType: c(t.type),
        ...Xv(t) && {
          mcpServerBaseUrl: Xv(t)
        }
      }), g("mcp_oauth_flow");
    } else throw new x("Unexpected auth result: " + fe, "Unexpected auth result");
  } catch (U) {
    re(e, `Error during auth completion: ${HD(U, t.url)}`);
    let R = "unknown", I, B, C = l(U), P = U instanceof Error ? U.cause : void 0;
    if (U instanceof Qzt) R = "cancelled"; else if (U instanceof v2 || P instanceof v2) R = "issuer_echo_denied"; else if (U instanceof bet || P instanceof bet) R = [ U, P ].find(N => N instanceof bet)?.kind === "metadata" ? "issuer_echo_mismatch" : "issuer_response_mismatch"; else if (/AADSTS\d/.test(C)) R = "entra_specific"; else if (/redirect[_ ]uri/i.test(C)) R = "redirect_uri_mismatch"; else if (D && (Se(U) || Se(P))) R = "token_response_schema_rejected"; else if (D) R = "token_exchange_failed"; else if (C.includes("Authentication timeout")) R = "timeout"; else if (C.includes("OAuth error:")) R = "provider_denied"; else if (C.includes("already in use") || C.includes("EADDRINUSE") || C.includes("callback server failed") || C.includes("No available port")) R = "port_unavailable"; else if (C.includes("SDK auth failed")) R = H1s(C, P);
    let K = [ P, U ].find(z => z instanceof uZn), ie = (P instanceof Error ? P : U instanceof Error ? U : null)?.message.match(/^HTTP (\d{3})\b/);
    if (K) B = K.status; else if (ie) B = Number(ie[1]);
    if (P instanceof E2) I = P.code;
    if (U instanceof E2) {
      if (I = U.code, U.code === "invalid_client" || U.code === "unauthorized_client") {
        let z = od(e, t);
        try {
          await Xn().mutate(N => {
            let H = N.mcpOAuth?.[z];
            if (!H) return N;
            return {
              ...N,
              mcpOAuth: {
                ...N.mcpOAuth,
                [z]: {
                  ...H,
                  clientId: void 0,
                  clientSecret: void 0
                }
              }
            };
          });
        } catch (N) {
          re(e, `clear clientId failed: ${l(N)}`);
        }
      }
    }
    if (!/^OAuth error: access_denied(?: |$)/.test(C) && (R === "timeout" || C.includes("OAuth error:"))) {
      let z = od(e, t);
      await Xn().mutate(N => {
        let H = N.mcpOAuth?.[z];
        if (!H?.clientId || H.accessToken || H.refreshToken || H.clientId !== S?.clientId) return N;
        return {
          ...N,
          mcpOAuth: {
            ...N.mcpOAuth,
            [z]: {
              ...H,
              clientId: void 0,
              clientSecret: void 0
            }
          }
        };
      }).catch(N => re(e, `drop clientId failed: ${l(N)}`));
    }
    if (R !== "cancelled") m("mcp_oauth_flow", "mcp_oauth_flow_failed");
    i("tengu_mcp_oauth_flow_error", {
      flowAttemptId: ye(M),
      reason: c(R),
      error_code: I === void 0 ? void 0 : M1s(I),
      http_status: kq(B),
      transportType: c(t.type),
      ...Xv(t) && {
        mcpServerBaseUrl: Xv(t)
      }
    });
    let Z = HD(U, t.url);
    throw Z === l(U) ? U : Error(Z, {
      cause: U
    });
  }
}

function Wbn(e, t) {
  return async (n, r) => {
    let d = await e(n, r);
    if (d.status === 401 || d.status === 403) t.sawAuthChallenge = !0;
    if (t.noteServerAnswer(n, d.status === 401 || d.status === 403 && LHe(d).error === "insufficient_scope"), 
    !new Headers(r?.headers).has("authorization")) return d;
    if (d.status === 403) {
      let {error: h, scope: s} = LHe(d);
      if (h === "insufficient_scope" && s) t.markStepUpPending(s);
    } else if (d.status === 401) t.clearStepUpPending();
    return d;
  };
}

class Zzt {
  serverName;
  serverConfig;
  redirectUri;
  handleRedirection;
  _codeVerifier;
  _flowDiscoveryState;
  _flowDiscoveryStateAt=0;
  _flowDiscoveryStateFromConfiguredUrl=!1;
  _metadataEchoMode;
  _authorizationUrl;
  _state;
  _scopes;
  _metadata;
  _refreshInProgress;
  _pendingStepUpScope;
  _servedOverrideAuthorizationServerUrl;
  _servedOverrideDocuments=new WeakMap;
  _discoveredAuthorizationServer;
  _lastServedClientId;
  _lastServedAccessToken;
  _lastServedRefreshToken;
  _presented;
  onAuthorizationUrlCallback;
  skipBrowserOpen;
  constructor(e, t, n = KGe(), r = !1, d, h) {
    this.serverName = e, this.serverConfig = t, this.redirectUri = n, this.handleRedirection = r, 
    this.onAuthorizationUrlCallback = d, this.skipBrowserOpen = h ?? !1, this._presented = Ng();
  }
  get redirectUrl() {
    return this.redirectUri;
  }
  get authorizationUrl() {
    return this._authorizationUrl;
  }
  get clientMetadata() {
    let e = {
      client_name: `Claude Code (${this.serverName})`,
      redirect_uris: [ this.redirectUri ],
      grant_types: [ "authorization_code", "refresh_token" ],
      response_types: [ "code" ],
      token_endpoint_auth_method: "none"
    }, t = this.getCuratedMetadataScope();
    if (t) e.scope = t, re(this.serverName, `Using scope from metadata: ${Hk("scope", e.scope)}`);
    return e;
  }
  get clientMetadataUrl() {
    if (!Ie(this.redirectUri)) {
      re(this.serverName, `redirectUri ${Zr(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`);
      return;
    }
    let e = $e();
    if (e !== Tje) re(this.serverName, `Using CIMD URL from env: ${e}`);
    return e;
  }
  setMetadata(e) {
    this._metadata = e, this._metadataEchoMode = de() ? "enforce" : "observe";
  }
  getCuratedMetadataScope() {
    let e = Ne(this._metadata);
    if (e !== void 0) return e;
    if (this.serverConfig.oauth?.authServerMetadataUrl && Array.isArray(this._metadata?.scopes_supported)) return this._metadata.scopes_supported.join(" ");
    return;
  }
  markStepUpPending(e) {
    this._pendingStepUpScope = e, re(this.serverName, `Marked step-up pending: ${Hk("scope", e)}`);
  }
  get pendingStepUpScope() {
    return this._pendingStepUpScope;
  }
  clearStepUpPending() {
    this._pendingStepUpScope = void 0;
  }
  clearStepUpPendingOnCredentialGone() {
    if (!this.handleRedirection) this.clearStepUpPending();
  }
  sawAuthChallenge=!1;
  authChallengeOpen=!1;
  noteServerAnswer(e, t) {
    let n = this.serverConfig.url;
    if (String(e) === (URL.canParse(n) ? new URL(n).href : n)) this.authChallengeOpen = t;
  }
  registrationOfferedByDiscovery=!1;
  async readCredentialStore() {
    let e = await Qpe();
    if (e === dd) throw re(this.serverName, "Credential store read failed; not reporting credentials as absent"), 
    new f8e(this.serverName);
    return e;
  }
  async state() {
    if (!this._state) this._state = Qe(32).toString("base64url"), re(this.serverName, "Generated new OAuth state");
    return this._state;
  }
  async clientInformation() {
    let e = await this.resolveClientInformation();
    return this._presented.record(e?.client_secret), this._presented.record(RSt(e?.client_id, e?.client_secret)), 
    e;
  }
  async resolveClientInformation() {
    let e = await this.readCredentialStore(), t = od(this.serverName, this.serverConfig), n = e?.mcpOAuthClientConfig?.[t]?.clientSecret, r = this.serverConfig.oauth?.clientId, d = e?.mcpOAuth?.[t], h = this.handleRedirection && _t(d?.clientId) && !Ie(this.redirectUri);
    if (h) {
      if (re(this.serverName, `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${Zr(this.redirectUri)} \u2014 ${r ? "serving the configured client" : "registering via DCR"} instead`), 
      r) await this.patchStoredClientEntry(t, {
        clientId: r,
        clientSecret: void 0,
        redirectUri: this.redirectUri
      }, "stale CIMD client_id repair");
    }
    if (d?.clientId && !h) {
      let s = d.redirectUri;
      if (this.handleRedirection && (s ? ke(s) !== ke(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))) {
        let S = s ? Zr(s) : "localhost";
        if (!r) {
          re(this.serverName, `Cached client_id was registered for ${S}; current redirectUri is ${Zr(this.redirectUri)} \u2014 forcing re-DCR`);
          return;
        }
        if (d.clientId !== r) return re(this.serverName, `Stored client_id is stale and its redirectUri ${S} predates ${Zr(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`), 
        await this.patchStoredClientEntry(t, {
          clientId: r,
          clientSecret: void 0,
          redirectUri: this.redirectUri
        }, "stale client_id repair"), this._lastServedClientId = r, {
          client_id: r,
          issuer: d.issuer,
          client_secret: n
        };
        re(this.serverName, `Stored redirectUri ${S} predates ${Zr(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`), 
        await this.patchStoredClientEntry(t, {
          redirectUri: this.redirectUri
        }, "stored redirectUri convergence");
      }
      return re(this.serverName, "Found client info"), this._lastServedClientId = d.clientId, 
      {
        client_id: d.clientId,
        issuer: d.issuer,
        client_secret: d.clientSecret ?? (d.clientId === r ? n : void 0)
      };
    }
    if (r) return re(this.serverName, "Using pre-configured client ID"), this._lastServedClientId = r, 
    {
      client_id: r,
      client_secret: n
    };
    if (!this.handleRedirection && this.registrationOfferedByDiscovery && !d?.accessToken && !d?.refreshToken) throw re(this.serverName, "No client info found; deferring client registration to authentication time"), 
    new s5o(this.serverName);
    re(this.serverName, "No client info found");
    return;
  }
  async patchStoredClientEntry(e, t, n) {
    try {
      if (!(await Xn().mutate(d => {
        let h = d.mcpOAuth?.[e];
        if (!h) return d;
        return {
          ...d,
          mcpOAuth: {
            ...d.mcpOAuth,
            [e]: {
              ...h,
              ...t
            }
          }
        };
      }))?.success) re(this.serverName, `${n} resolved unsuccessful`);
    } catch (r) {
      re(this.serverName, `${n} failed: ${l(r)}`);
    }
  }
  async saveClientInformation(e) {
    this._presented.record(e.client_secret), this._presented.record(RSt(e.client_id, e.client_secret));
    let t = od(this.serverName, this.serverConfig);
    try {
      if ((await Xn().mutate(r => ({
        ...r,
        mcpOAuth: {
          ...r.mcpOAuth,
          [t]: {
            ...r.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            clientId: e.client_id,
            clientSecret: e.issuer !== void 0 && e.client_id === r.mcpOAuth?.[t]?.clientId && r.mcpOAuth?.[t]?.clientSecret === void 0 && e.client_id === this.serverConfig.oauth?.clientId ? void 0 : e.client_secret,
            issuer: e.issuer ?? r.mcpOAuth?.[t]?.issuer,
            redirectUri: !this.handleRedirection && e.client_id === r.mcpOAuth?.[t]?.clientId ? r.mcpOAuth?.[t]?.redirectUri : this.redirectUri,
            accessToken: r.mcpOAuth?.[t]?.accessToken || "",
            expiresAt: r.mcpOAuth?.[t]?.expiresAt
          }
        }
      })))?.success) this._lastServedClientId = e.client_id; else re(this.serverName, "saveClientInformation persist resolved unsuccessful");
    } catch (n) {
      re(this.serverName, `saveClientInformation persist failed: ${l(n)}`);
    }
  }
  async tokens() {
    let e = await this.readCredentialStore(), t = od(this.serverName, this.serverConfig), n = e?.mcpOAuth?.[t];
    if (xK() && this.serverConfig.oauth?.xaa && !n?.refreshToken && (!n?.accessToken || n.expiresAt != null && (n.expiresAt - Date.now()) / 1e3 <= 300)) {
      if (!this._refreshInProgress) re(this.serverName, n ? "XAA: access_token expiring, attempting silent exchange" : "XAA: no access_token yet, attempting silent exchange"), 
      this._refreshInProgress = this.xaaRefresh().finally(() => {
        this._refreshInProgress = void 0;
      });
      try {
        let S = await this._refreshInProgress;
        if (S) return this._lastServedAccessToken = S.access_token, this._presented.record(S.access_token), 
        this._presented.record(S.refresh_token), this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken, 
        {
          ...S,
          issuer: n?.issuer
        };
      } catch (S) {
        re(this.serverName, `XAA silent exchange failed: ${l(S)}`);
      }
    }
    if (!n) {
      re(this.serverName, "No token data found"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (!n.accessToken) {
      re(this.serverName, "No access token in storage"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    this._lastServedAccessToken = n.accessToken, this._presented.record(n.accessToken), 
    this._presented.record(n.refreshToken), this._lastServedRefreshToken = n.refreshToken;
    let r = n.expiresAt != null ? (n.expiresAt - Date.now()) / 1e3 : void 0, d = this._pendingStepUpScope, h = d !== void 0;
    if (h) re(this.serverName, `Step-up pending (${Hk("scope", d)}), omitting refresh_token`);
    if (r != null && r <= 0 && !n.refreshToken) {
      re(this.serverName, "Token expired without refresh token"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (r != null && r <= 300 && n.refreshToken && !h) {
      if (!this._refreshInProgress) re(this.serverName, `Token expires in ${Math.floor(r)}s, attempting proactive refresh`), 
      this._refreshInProgress = this.refreshAuthorization(n.refreshToken).finally(() => {
        this._refreshInProgress = void 0;
      }); else re(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let S = await this._refreshInProgress;
        if (S) return re(this.serverName, "Token refreshed successfully"), this._lastServedAccessToken = S.access_token, 
        this._presented.record(S.access_token), this._presented.record(S.refresh_token), 
        this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken, 
        {
          ...S,
          issuer: n?.issuer
        };
        re(this.serverName, "Token refresh failed, returning current tokens");
      } catch (S) {
        re(this.serverName, `Token refresh error: ${HD(S, this.serverConfig.url)}`);
      }
    }
    let s = {
      access_token: n.accessToken,
      refresh_token: h ? void 0 : n.refreshToken,
      expires_in: r,
      scope: n.scope,
      token_type: "Bearer",
      issuer: n.issuer
    };
    return re(this.serverName, "Returning tokens"), re(this.serverName, `Has refresh token: ${!!s.refresh_token}`), 
    re(this.serverName, r != null ? `Expires in: ${Math.floor(r)}s` : "No expiration specified"), 
    s;
  }
  async saveTokens(e) {
    this._presented.record(e.access_token), this._presented.record(e.refresh_token);
    let t = e.access_token !== this._lastServedAccessToken, n = this._flowDiscoveryStateAt;
    if (t && this.handleRedirection) this._pendingStepUpScope = void 0;
    let r = od(this.serverName, this.serverConfig);
    re(this.serverName, "Saving tokens"), re(this.serverName, `Token expires in: ${e.expires_in}`), 
    re(this.serverName, `Has refresh token: ${!!e.refresh_token}`);
    let d = this._servedOverrideAuthorizationServerUrl === void 0 ? this._discoveredAuthorizationServer : {
      authorizationServerUrl: this._servedOverrideAuthorizationServerUrl,
      oauthMetadataFound: !0
    }, h = this.servedMetadataUrl() ?? this._discoveredAuthorizationServer?.servedMetadataUrl, s, S;
    try {
      s = await Xn().mutate(v => ({
        ...v,
        mcpOAuth: {
          ...v.mcpOAuth,
          [r]: {
            ...v.mcpOAuth?.[r],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? v.mcpOAuth?.[r]?.refreshToken,
            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1e3 : void 0,
            scope: e.scope,
            issuer: e.issuer ?? v.mcpOAuth?.[r]?.issuer,
            discoveryState: Kbn({
              previous: v.mcpOAuth?.[r]?.discoveryState,
              signIn: d,
              servedMetadataUrl: h,
              interactiveSignIn: this.handleRedirection
            })
          }
        }
      }));
    } catch (v) {
      S = v;
    }
    if (s?.success) this._lastServedAccessToken = e.access_token, this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken;
    if (this.logTokenPersistFailed(s, S), t && this._flowDiscoveryStateAt === n) this._flowDiscoveryState = void 0, 
    this._flowDiscoveryStateAt = 0;
  }
  logTokenPersistFailed(e, t) {
    Fe(this.serverName, this.serverConfig, e, t);
  }
  async xaaRefresh() {
    let e = FZ();
    if (!e) return;
    let t = await zbn(e.issuer);
    if (!t) {
      re(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return;
    }
    let n = this.serverConfig.oauth?.clientId, r = await a5o(this.serverName, this.serverConfig);
    if (!n || !r?.clientSecret) {
      re(this.serverName, "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh");
      return;
    }
    let d = await oZn(e.issuer), h;
    try {
      h = await Gbn(e.issuer);
    } catch (s) {
      re(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${l(s)}`);
      return;
    }
    this._presented.record(r.clientSecret);
    try {
      let s = await ge(this.serverConfig.url, {
        clientId: n,
        clientSecret: r.clientSecret,
        idpClientId: e.clientId,
        idpClientSecret: d,
        idpIdToken: t,
        idpTokenEndpoint: h.token_endpoint
      }, this.serverName), S = od(this.serverName, this.serverConfig), v, A;
      try {
        v = await Xn().mutate(y => {
          let T = y.mcpOAuth?.[S];
          return {
            ...y,
            mcpOAuth: {
              ...y.mcpOAuth,
              [S]: {
                ...T,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: s.access_token,
                refreshToken: s.refresh_token ?? T?.refreshToken,
                expiresAt: s.expires_in != null ? Date.now() + s.expires_in * 1e3 : void 0,
                scope: s.scope,
                clientId: n,
                clientSecret: r.clientSecret,
                discoveryState: ASt({
                  previous: T?.discoveryState,
                  issuedBy: s.authorizationServerUrl,
                  interactiveSignIn: !1
                })
              }
            }
          };
        });
      } catch (y) {
        A = y;
      }
      return this.logTokenPersistFailed(v, A), {
        access_token: s.access_token,
        token_type: "Bearer",
        expires_in: s.expires_in,
        scope: s.scope,
        refresh_token: s.refresh_token
      };
    } catch (s) {
      if (s instanceof W && s.shouldClearIdToken) await rZn(e.issuer), re(this.serverName, "XAA: cleared id_token after exchange failure");
      throw s;
    }
  }
  async redirectToAuthorization(e) {
    let t = this._pendingStepUpScope ? void 0 : this.serverConfig.oauth?.scopes || (this.serverConfig.oauth?.authServerMetadataUrl ? this.getCuratedMetadataScope() : void 0), n = e.searchParams.get("scope"), r = t ?? n;
    if (r !== n) re(this.serverName, `Overrode authorization scope from ${n ? Hk("scope", n) : "NONE"} to configured: ${r ? Hk("scope", r) : "NONE"}`);
    let d = r === null ? null : D1s(r, this._metadata);
    if (d !== null && d !== n) {
      if (e.searchParams.set("scope", d), d !== t) re(this.serverName, "Appended offline_access to authorization scope");
    }
    let h = L1s(e), s = e.searchParams.getAll("prompt"), S = h ? s.filter(M => M !== "consent") : s;
    if (S.length !== s.length || S.length > 1) {
      if (e.searchParams.delete("prompt"), S.length > 0) e.searchParams.set("prompt", S.includes("consent") ? "consent" : S.at(-1));
    }
    this._authorizationUrl = e.toString();
    let v = e.searchParams.get("scope");
    if (re(this.serverName, `Authorization URL: ${r5o(e)}`), re(this.serverName, `Scopes in URL: ${v ? Hk("scope", v) : "NOT FOUND"}`), 
    v) this._scopes = v, re(this.serverName, `Captured scopes from authorization URL: ${Hk("scope", v)}`); else {
      let M = this.getCuratedMetadataScope();
      if (M) this._scopes = M, re(this.serverName, `Using scopes from metadata: ${Hk("scope", M)}`); else re(this.serverName, "No scopes available from URL or metadata");
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let M = od(this.serverName, this.serverConfig), D = this._scopes, U = !1;
      try {
        await Xn().mutate(R => {
          let I = R.mcpOAuth?.[M];
          if (!I) return R;
          return U = !0, {
            ...R,
            mcpOAuth: {
              ...R.mcpOAuth,
              [M]: {
                ...I,
                stepUpScope: D
              }
            }
          };
        });
      } catch (R) {
        re(this.serverName, `step-up scope persist failed: ${l(R)}`);
      }
      if (U) re(this.serverName, `Persisted step-up scope: ${Hk("scope", D)}`);
    }
    if (!this.handleRedirection) {
      re(this.serverName, "Redirection handling is disabled, skipping redirect");
      return;
    }
    let A = e.toString();
    if (!A.startsWith("http://") && !A.startsWith("https://")) throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    re(this.serverName, "Redirecting to authorization URL");
    let y = r5o(e);
    if (re(this.serverName, `Authorization URL: ${y}`), this.onAuthorizationUrlCallback) this.onAuthorizationUrlCallback(A);
    if (this.skipBrowserOpen) {
      re(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${y}`);
      return;
    }
    let T = pW();
    if (T) re(this.serverName, `Skipping browser open (headless environment). URL: ${y}`); else re(this.serverName, `Opening authorization URL: ${y}`);
    let w = T ? !1 : await js(A);
    if (i("tengu_mcp_oauth_browser_open", {
      success: w,
      headless: T,
      platform: c(O())
    }), !T && !w) re(this.serverName, "Browser didn't open automatically. URL is shown in UI.");
  }
  async saveCodeVerifier(e) {
    re(this.serverName, "Saving code verifier"), this._codeVerifier = e;
  }
  async codeVerifier() {
    if (!this._codeVerifier) throw re(this.serverName, "No code verifier saved"), Error("No code verifier saved");
    return re(this.serverName, "Returning code verifier"), this._presented.record(this._codeVerifier), 
    this._codeVerifier;
  }
  async invalidateCredentials(e) {
    if (e === "verifier") {
      this._codeVerifier = void 0, re(this.serverName, "Invalidated credentials (scope: verifier)");
      return;
    }
    let t = e, n = od(this.serverName, this.serverConfig), r = !1;
    try {
      let d = this._lastServedClientId, h = this._lastServedAccessToken, s = this._lastServedRefreshToken;
      await Xn().mutate(S => {
        let v = S.mcpOAuth?.[n];
        if (!v) return S;
        let A = {
          ...S.mcpOAuth
        };
        switch (t) {
         case "all":
          {
            let y = h != null && !!v.accessToken && v.accessToken !== h, T = d != null && v.clientId != null && v.clientId !== d;
            if (y || T) return re(this.serverName, `invalidateCredentials('all') preserved: ${y ? "foreign token" : "concurrent re-registration"}`), 
            S;
            if (!v.clientId && !v.refreshToken && v.accessToken === "") return S;
            A[n] = {
              serverName: v.serverName,
              serverUrl: v.serverUrl,
              accessToken: "",
              ...v.discoveryState && {
                discoveryState: v.discoveryState
              },
              ...v.stepUpScope && {
                stepUpScope: v.stepUpScope
              }
            };
            break;
          }

         case "client":
          A[n] = {
            ...v,
            clientId: void 0,
            clientSecret: void 0
          };
          break;

         case "tokens":
          {
            if (s != null && v.refreshToken && v.refreshToken !== s || h != null && !!v.accessToken && v.accessToken !== h) return re(this.serverName, "invalidateCredentials('tokens') preserved: concurrent rotation"), 
            S;
            A[n] = {
              ...v,
              accessToken: "",
              refreshToken: void 0,
              expiresAt: 0
            };
            break;
          }

         case "discovery":
          {
            if (!v.discoveryState?.authorizationServerMetadata) return re(this.serverName, "invalidateCredentials('discovery') preserved: concurrent URL-only re-save"), 
            S;
            A[n] = {
              ...v,
              discoveryState: tTe(v.discoveryState)
            };
            break;
          }
        }
        return r = !0, {
          ...S,
          mcpOAuth: A
        };
      });
    } catch (d) {
      re(this.serverName, `invalidateCredentials persist failed: ${l(d)}`);
    }
    if (r) re(this.serverName, `Invalidated credentials (scope: ${e})`);
  }
  async saveDiscoveryState(e) {
    if (e.authorizationServerMetadata) jbn({
      serverName: this.serverName,
      site: "sdk_auth",
      expectedIssuer: e.authorizationServerUrl,
      receivedIssuer: e.authorizationServerMetadata.issuer,
      serverConfig: this.serverConfig
    });
    this._flowDiscoveryState = e, this._flowDiscoveryStateAt = Date.now(), this._flowDiscoveryStateFromConfiguredUrl = !1;
    let t = od(this.serverName, this.serverConfig);
    re(this.serverName, `Saving discovery state (authServer: ${Zr(e.authorizationServerUrl)})`);
    let n = e.authorizationServerMetadata;
    this.registrationOfferedByDiscovery = n !== void 0 && (typeof n.registration_endpoint === "string" || n.client_id_metadata_document_supported === !0 && this.clientMetadataUrl !== void 0);
    let r = {
      authorizationServerUrl: e.authorizationServerUrl,
      oauthMetadataFound: !!e.authorizationServerMetadata
    }, d = (e.authorizationServerMetadata !== void 0 ? this._servedOverrideDocuments.get(e.authorizationServerMetadata) : void 0) ?? this.servedMetadataUrl();
    this._discoveredAuthorizationServer = {
      ...r,
      servedMetadataUrl: d
    };
    try {
      await Xn().mutate(h => {
        let s = Vbn({
          previous: h.mcpOAuth?.[t]?.discoveryState,
          discovered: r,
          servedMetadataUrl: d
        });
        return {
          ...h,
          mcpOAuth: {
            ...h.mcpOAuth,
            [t]: {
              ...h.mcpOAuth?.[t],
              serverName: this.serverName,
              serverUrl: this.serverConfig.url,
              accessToken: h.mcpOAuth?.[t]?.accessToken || "",
              expiresAt: h.mcpOAuth?.[t]?.expiresAt,
              discoveryState: {
                ...s,
                resourceMetadataUrl: e.resourceMetadataUrl,
                registrationNotOfferedAt: n === void 0 ? h.mcpOAuth?.[t]?.discoveryState?.registrationNotOfferedAt : typeof n.registration_endpoint !== "string" && n.client_id_metadata_document_supported !== !0 ? Date.now() : void 0
              }
            }
          }
        };
      });
    } catch (h) {
      re(this.serverName, `saveDiscoveryState persist failed: ${l(h)}`);
    }
  }
  servePolicyCheckedDiscoveryState(e) {
    if (e?.authorizationServerMetadata && e.authorizationServerUrl) try {
      jbn({
        serverName: this.serverName,
        site: "persisted_state",
        expectedIssuer: e.authorizationServerUrl,
        receivedIssuer: e.authorizationServerMetadata.issuer,
        serverConfig: this.serverConfig
      });
    } catch (t) {
      if (t instanceof v2 && this._flowDiscoveryState === e) this._flowDiscoveryState = void 0, 
      this._flowDiscoveryStateAt = 0;
      throw t;
    }
    return e;
  }
  servedMetadataUrl() {
    return this._servedOverrideAuthorizationServerUrl === void 0 ? void 0 : this.serverConfig.oauth?.authServerMetadataUrl;
  }
  async discoveryState() {
    this._servedOverrideAuthorizationServerUrl = void 0;
    let e = this.serverConfig.oauth?.authServerMetadataUrl;
    if (e) {
      re(this.serverName, `Fetching metadata from configured URL: ${Zr(e)}`);
      try {
        let s = await ue(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: e,
          fetchFn: fle(this.serverName, this.serverConfig, Jzt())
        });
        if (s) {
          let S = {
            authorizationServerUrl: s.issuer,
            authorizationServerMetadata: s
          };
          return this._servedOverrideAuthorizationServerUrl = s.issuer, this._servedOverrideDocuments.set(s, e), 
          this._flowDiscoveryState = S, this._flowDiscoveryStateFromConfiguredUrl = !0, this.servePolicyCheckedDiscoveryState(S);
        }
      } catch (s) {
        re(this.serverName, `Failed to fetch from configured metadata URL: ${HD(s, this.serverConfig.url)}`);
      }
      if (this._flowDiscoveryStateFromConfiguredUrl) this._servedOverrideAuthorizationServerUrl = this._flowDiscoveryState?.authorizationServerUrl;
      return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    }
    if (this._flowDiscoveryState && Date.now() - this._flowDiscoveryStateAt < Re) return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    let t = this._flowDiscoveryStateAt, r = await Xn().readAsync();
    if (this._flowDiscoveryState && this._flowDiscoveryStateAt !== t && Date.now() - this._flowDiscoveryStateAt < Re) return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    let d = od(this.serverName, this.serverConfig), h = r?.mcpOAuth?.[d]?.discoveryState;
    if (h?.authorizationServerUrl) {
      re(this.serverName, `Returning cached discovery state (authServer: ${Zr(h.authorizationServerUrl)})`);
      let s = {
        authorizationServerUrl: h.authorizationServerUrl,
        resourceMetadataUrl: h.resourceMetadataUrl,
        resourceMetadata: h.resourceMetadata,
        authorizationServerMetadata: h.authorizationServerMetadata
      };
      try {
        this.servePolicyCheckedDiscoveryState(s);
      } catch (S) {
        if (S instanceof v2) {
          if (await this.invalidateCredentials("discovery").catch(() => {}), this._flowDiscoveryStateAt === t) this._flowDiscoveryState = void 0, 
          this._flowDiscoveryStateAt = 0;
        }
        throw S;
      }
      return this._flowDiscoveryStateFromConfiguredUrl = !1, this._flowDiscoveryState = s;
    }
    return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
  }
  async refreshAuthorization(e) {
    let t = od(this.serverName, this.serverConfig), n = kv();
    await se().mkdir(n);
    let r = t.replace(/[^a-zA-Z0-9]/g, "_"), d = rt(n, `mcp-refresh-${r}.lock`), h;
    for (let s = 0; s < ve; s++) try {
      re(this.serverName, `Acquiring refresh lock (attempt ${s + 1})`), h = await Ja(d, {
        realpath: !1,
        stale: 6e4,
        update: 5e3,
        onCompromised: () => {
          re(this.serverName, "Refresh lock was compromised");
        }
      }), re(this.serverName, "Acquired refresh lock");
      break;
    } catch (S) {
      let v = E(S);
      if (v === "ELOCKED") {
        re(this.serverName, `Refresh lock held by another process, waiting (attempt ${s + 1}/${ve})`), 
        await J(1e3 + Math.random() * 1e3);
        continue;
      }
      re(this.serverName, `Failed to acquire refresh lock: ${v}; skipping refresh`);
      return;
    }
    if (!h) {
      re(this.serverName, `Could not acquire refresh lock after ${ve} retries; skipping refresh`);
      return;
    }
    try {
      WK();
      let v = (await Xn().readAsync())?.mcpOAuth?.[t];
      if (v) {
        let A = v.expiresAt != null ? (v.expiresAt - Date.now()) / 1e3 : void 0;
        if (v.accessToken && (A == null || A > 300)) return re(this.serverName, A != null ? `Another process already refreshed tokens (expires in ${Math.floor(A)}s)` : "Another process already refreshed tokens (no expiration)"), 
        {
          access_token: v.accessToken,
          refresh_token: v.refreshToken,
          expires_in: A,
          scope: v.scope,
          token_type: "Bearer"
        };
        if (v.refreshToken) e = v.refreshToken, this._lastServedRefreshToken = v.refreshToken, 
        this._presented.record(v.refreshToken);
      }
      return await this._doRefresh(e);
    } finally {
      if (h) try {
        await h(), re(this.serverName, "Released refresh lock");
      } catch {
        re(this.serverName, "Failed to release refresh lock");
      }
    }
  }
  async readConcurrentRefreshWinner() {
    WK();
    let t = (await Xn().readAsync())?.mcpOAuth?.[od(this.serverName, this.serverConfig)], n = t?.expiresAt != null ? (t.expiresAt - Date.now()) / 1e3 : void 0;
    if (t?.accessToken && (n == null || n > 300)) {
      re(this.serverName, "Another process landed fresh tokens; using those");
      let r = {
        access_token: t.accessToken,
        refresh_token: t.refreshToken,
        expires_in: n,
        scope: t.scope,
        token_type: "Bearer"
      };
      return {
        tokenData: t,
        freshTokens: r
      };
    }
    return {
      tokenData: t,
      freshTokens: void 0
    };
  }
  async _doRefresh(e) {
    this._presented.record(e);
    let t = 3, n = Xv(this.serverConfig), r = (d, h) => {
      i(d === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
        transportType: c(this.serverConfig.type),
        ...n && {
          mcpServerBaseUrl: n
        },
        ...h && {
          reason: c(h)
        }
      });
    };
    for (let d = 1; d <= t; d++) {
      let h;
      try {
        re(this.serverName, "Starting token refresh");
        let s = fle(this.serverName, this.serverConfig, Jzt()), S = de() ? "enforce" : "observe", v = this._metadataEchoMode === S ? this._metadata : void 0;
        if (!v) {
          let y = await this.discoveryState();
          if (y?.authorizationServerMetadata) v = y.authorizationServerMetadata; else if (y?.authorizationServerUrl) {
            re(this.serverName, `Re-discovering metadata from persisted auth server URL: ${Zr(y.authorizationServerUrl)}`);
            let T = y.authorizationServerUrl;
            if (v = await FSt(T, {
              fetchFn: s,
              skipIssuerValidation: !0
            }), v) jbn({
              serverName: this.serverName,
              site: "refresh_rediscovery",
              expectedIssuer: T,
              receivedIssuer: v.issuer,
              serverConfig: this.serverConfig
            });
          }
        }
        if (!v) v = await ue(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl,
          fetchFn: s,
          serverConfigForAnalytics: this.serverConfig
        });
        if (!v) {
          re(this.serverName, "Failed to discover OAuth metadata"), r("failure", "metadata_discovery_failed"), 
          m("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed");
          return;
        }
        if (this._metadata = v, this._metadataEchoMode = de() ? "enforce" : "observe", h = await this.clientInformation(), 
        !h) {
          re(this.serverName, "No client information available"), r("failure", "no_client_info"), 
          m("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info");
          return;
        }
        let A = await TVr(new URL(this.serverConfig.url), {
          metadata: v,
          clientInformation: h,
          refreshToken: e,
          resource: new URL(this.serverConfig.url),
          fetchFn: s
        });
        if (A) return re(this.serverName, "Token refresh successful"), await this.saveTokens(A), 
        r("success"), g("mcp_oauth_refresh"), A;
        re(this.serverName, "Token refresh returned no tokens"), r("failure", "no_tokens_returned"), 
        m("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens");
        return;
      } catch (s) {
        if (s instanceof v2) {
          re(this.serverName, `Token refresh denied by issuer-echo policy: ${l(s)}`), r("failure", "issuer_echo_denied"), 
          m("mcp_oauth_refresh", "mcp_oauth_refresh_issuer_echo_denied");
          return;
        }
        if (s instanceof E2 && s.code === cne.InvalidGrant) {
          re(this.serverName, `Token refresh failed with invalid_grant: ${s.message}`);
          let {freshTokens: w} = await this.readConcurrentRefreshWinner();
          if (w) return f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), w;
          re(this.serverName, "No valid tokens in storage, clearing stored tokens"), r("failure", "invalid_grant"), 
          m("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"), await this.invalidateCredentials("tokens"), 
          MHe.emit(this.serverName);
          return;
        }
        if (s instanceof E2 && (s.code === "invalid_client" || s.code === "unauthorized_client")) {
          re(this.serverName, "Token refresh failed: DCR client expired or invalid; clearing stored client registration");
          let {tokenData: w, freshTokens: M} = await this.readConcurrentRefreshWinner();
          if (M) return f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), M;
          if (w?.clientId && h && w.clientId !== h.client_id) {
            re(this.serverName, "Another process re-registered client; preserving"), r("failure", "concurrent_reregister"), 
            f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister");
            return;
          }
          r("failure", s.code === "unauthorized_client" ? "unauthorized_client" : "invalid_client"), 
          m("mcp_oauth_refresh", s.code === "unauthorized_client" ? "mcp_oauth_refresh_unauthorized_client" : "mcp_oauth_refresh_invalid_client"), 
          await this.invalidateCredentials("all"), MHe.emit(this.serverName);
          return;
        }
        if (Se(s)) {
          re(this.serverName, `Token refresh failed: token response rejected by SDK schema: ${l(s)}`), 
          r("failure", "token_response_schema_rejected"), m("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected");
          return;
        }
        let S = s instanceof f8e, v = s instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(s.message), A = s instanceof E2 && (s.code === cne.ServerError || s.code === cne.TemporarilyUnavailable || s.code === cne.TooManyRequests || !ct.has(s.code)), y = v || A || S;
        if (!y || d >= t) {
          re(this.serverName, `Token refresh failed: ${HD(s, this.serverConfig.url)}`), r("failure", y ? "transient_retries_exhausted" : "request_failed"), 
          m("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed");
          return;
        }
        let T = 1e3 * Math.pow(2, d - 1);
        re(this.serverName, `Token refresh failed, retrying in ${T}ms (attempt ${d}/${t})`), 
        await J(T);
      }
    }
    return;
  }
}

async function O4s() {
  let e = process.env.MCP_CLIENT_SECRET;
  if (e) return e;
  if (!process.stdin.isTTY) throw Error("No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.");
  return new Promise((t, n) => {
    process.stderr.write("Enter OAuth client secret: "), process.stdin.setRawMode?.(!0);
    let r = "", d = h => {
      let s = h.toString();
      if (s === `\n` || s === "\r") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", d), 
      process.stderr.write(`\n`), t(r); else if (s === "\x03") process.stdin.setRawMode?.(!1), 
      process.stdin.removeListener("data", d), n(Error("Cancelled")); else if (s === "\x7f" || s === "\b") r = r.slice(0, -1); else r += s;
    };
    process.stdin.on("data", d);
  });
}

async function M4s(e, t, n) {
  let r = od(e, t);
  try {
    return await Xn().mutate(d => ({
      ...d,
      mcpOAuthClientConfig: {
        ...d.mcpOAuthClientConfig,
        [r]: {
          clientSecret: n
        }
      }
    }));
  } catch (d) {
    return {
      success: !1,
      warning: l(d)
    };
  }
}

async function H4s(e, t) {
  let n = od(e, t);
  await Xn().mutate(r => {
    if (!r.mcpOAuthClientConfig?.[n]) return r;
    let d = {
      ...r.mcpOAuthClientConfig
    };
    return delete d[n], {
      ...r,
      mcpOAuthClientConfig: d
    };
  });
}

async function a5o(e, t) {
  let r = await Xn().readAsync(), d = od(e, t);
  return r?.mcpOAuthClientConfig?.[d];
}

function Ne(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string") return e.default_scope;
  return;
}

function D1s(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`;
}

var gt = [ "login.microsoftonline.com", "login.microsoftonline.us", "login.partner.microsoftonline.cn", "login.chinacloudapi.cn" ], vt = [ ".b2clogin.com", ".ciamlogin.com" ];

function L1s(e) {
  try {
    let t = (typeof e === "string" ? new URL(e) : e).hostname;
    return gt.includes(t) || vt.some(n => t.endsWith(n));
  } catch {
    return !1;
  }
}

export { M1s, H1s, r5o, o5o, Jzt, v2, jbn, s5o, Qzt, A4s, C4s, R4s, nZn, x4s, P4s, I4s, i5o, gVr, Wbn, Zzt, O4s, M4s, H4s, a5o, D1s, L1s };
