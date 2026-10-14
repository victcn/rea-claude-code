// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { tbn, Y7n, X7n, Dx, aet, xHe, Lzt, Nzt, Lx, ine, Qke, J7n, mSt, J2r, Z2r } from "./chunk-4srkdgc7.js";

import { At } from "./chunk-vps0k559.js";

import { b, c, pe, kq } from "./chunk-hwdwjvh8.js";

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

import { Ut } from "./chunk-8yperama.js";

import { MHe } from "./chunk-fj7rnejy.js";

import { p } from "./chunk-jkzenvsk.js";

import { xK, FZ, Qpe, od, f8e, m8e } from "./chunk-xywp7esx.js";

import { MD } from "./chunk-4nk5f3x7.js";

import { Ng, RSt, OD } from "./chunk-tba5gzq4.js";

import { KGe, oTe } from "./chunk-rwk95gwq.js";

import { yle, kSn, Hk, Zr, HD, DD } from "./chunk-9bzw65k3.js";

import { Xv } from "./chunk-84yp45y8.js";

import { Y_n, W7n, z7n, X_n, j2r } from "./chunk-h6v5eh71.js";

import { tTe, Vbn, Kbn, ASt, fle, qbn, Ybn } from "./chunk-8z0esexy.js";

import { pW, js } from "./chunk-9g86mkx2.js";

import { aOe } from "./chunk-djxzv16h.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import { ye } from "./chunk-ne9evs39.js";

import { O } from "./chunk-1xnsr4dy.js";

import { randomBytes as We, randomUUID as Ge } from "crypto";

import { createServer as qe } from "http";

import { join as Je } from "path";

import { parse as Ye } from "url";

var Ne = 3e4, Le = "urn:ietf:params:oauth:grant-type:token-exchange", Te = "urn:ietf:params:oauth:grant-type:jwt-bearer", we = "urn:ietf:params:oauth:token-type:id-jag", Fe = "urn:ietf:params:oauth:token-type:id_token";

function Ce(e) {
  return (t, r) => {
    let n = AbortSignal.timeout(Ne), d = e ? AbortSignal.any([ n, e ]) : n;
    return fetch(t, {
      ...r,
      ...aa({
        url: String(t)
      }),
      signal: d
    }).catch(h => DD(h, t));
  };
}

var oe = Ce();

function ie(e) {
  try {
    return new URL(e).href.replace(/\/$/, "");
  } catch {
    return e.replace(/\/$/, "");
  }
}

class K extends Error {
  shouldClearIdToken;
  constructor(e, t) {
    super(e);
    this.name = "XaaTokenExchangeError", this.shouldClearIdToken = t;
  }
}

var ze = /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;

function te(e) {
  return (typeof e === "string" ? e : _(e)).replace(ze, (r, n) => `"${n}":"[REDACTED]"`);
}

var De = p(() => u({
  access_token: o().optional(),
  issued_token_type: o().optional(),
  expires_in: aOe().optional(),
  scope: o().optional()
})), Xe = p(() => u({
  access_token: o().min(1),
  token_type: o().default("Bearer"),
  expires_in: aOe().optional(),
  scope: o().optional(),
  refresh_token: o().optional()
}));

async function He(e, t) {
  let r;
  try {
    r = await J7n(e, void 0, t?.fetchFn ?? oe);
  } catch (n) {
    if (Ve(n)) throw n;
    let d = n instanceof Error ? /^HTTP (\d{3}) /.exec(n.message)?.[1] : void 0;
    throw Error(`XAA: PRM discovery failed for ${Zr(e)} (${d ? `HTTP ${d}` : n instanceof Error ? n.name : typeof n})`);
  }
  if (!r.resource || !r.authorization_servers?.[0]) throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
  if (ie(r.resource) !== ie(e)) throw Error(`XAA: PRM discovery failed: PRM resource mismatch: expected ${Zr(e)}, got ${Zr(r.resource)}`);
  return {
    resource: r.resource,
    authorization_servers: r.authorization_servers
  };
}

async function je(e, t) {
  let r;
  try {
    r = await mSt(e, {
      fetchFn: t?.fetchFn ?? oe
    });
  } catch (n) {
    if (Ve(n)) throw n;
    let d = n instanceof Error ? /^HTTP (\d{3}) /.exec(n.message)?.[1] : void 0;
    throw new x(`XAA: AS metadata discovery failed (${d ? `HTTP ${d}` : n instanceof Error ? n.name : typeof n})`, "XAA: AS metadata discovery failed");
  }
  if (!r?.issuer || !r.token_endpoint) throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${Zr(e)}`);
  if (ie(r.issuer) !== ie(e)) throw Error(`XAA: AS metadata discovery failed: issuer mismatch: expected ${Zr(e)}, got ${Zr(r.issuer)}`);
  if (!URL.canParse(r.token_endpoint) || new URL(r.token_endpoint).protocol !== "https:") throw Error(`XAA: refusing non-HTTPS token endpoint: ${Zr(r.token_endpoint)}`);
  return {
    issuer: r.issuer,
    token_endpoint: r.token_endpoint,
    grant_types_supported: r.grant_types_supported,
    token_endpoint_auth_methods_supported: r.token_endpoint_auth_methods_supported
  };
}

async function Be(e) {
  let t = e.fetchFn ?? oe, r = new URLSearchParams({
    grant_type: Le,
    requested_token_type: we,
    audience: e.audience,
    resource: e.resource,
    subject_token: e.idToken,
    subject_token_type: Fe,
    client_id: e.clientId
  });
  if (e.clientSecret) r.set("client_secret", e.clientSecret);
  if (e.scope) r.set("scope", e.scope);
  let n = await t(e.tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: r
  });
  if (!n.ok) {
    let k = te(await n.text()).slice(0, 200), v = n.status < 500;
    throw new K(`XAA: token exchange failed: HTTP ${n.status}: ${k}`, v);
  }
  let d;
  try {
    d = await n.json();
  } catch {
    throw new K(`XAA: token exchange returned non-JSON (captive portal?) at ${Zr(e.tokenEndpoint)}`, !1);
  }
  let h = De().safeParse(d);
  if (!h.success) throw new K(`XAA: token exchange response did not match expected shape: ${te(d)}`, !0);
  let s = h.data;
  if (!s.access_token) throw new K(`XAA: token exchange response missing access_token: ${te(s)}`, !0);
  if (s.issued_token_type !== we) throw new K(`XAA: token exchange returned unexpected issued_token_type: ${s.issued_token_type}`, !0);
  return {
    jwtAuthGrant: s.access_token,
    expiresIn: s.expires_in,
    scope: s.scope
  };
}

async function Ke(e) {
  let t = e.fetchFn ?? oe, r = e.authMethod ?? "client_secret_basic", n = new URLSearchParams({
    grant_type: Te,
    assertion: e.assertion
  });
  if (e.scope) n.set("scope", e.scope);
  let d = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  if (r === "client_secret_basic") {
    let v = Buffer.from(`${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`).toString("base64");
    d.Authorization = `Basic ${v}`, Ng().record(v);
  } else n.set("client_id", e.clientId), n.set("client_secret", e.clientSecret);
  Ng().record(e.clientSecret), Ng().record(e.assertion);
  let h = await t(e.tokenEndpoint, {
    method: "POST",
    headers: d,
    body: n
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
  let k = Xe().safeParse(s);
  if (!k.success) throw Error(`XAA: jwt-bearer response did not match expected shape: ${te(s)}`);
  return k.data;
}

async function le(e, t, r = "xaa", n) {
  let d = Ce(n);
  re(r, `XAA: discovering PRM for ${Zr(e)}`);
  let h = await He(e, {
    fetchFn: d
  });
  re(r, `XAA: discovered resource=${Zr(h.resource)} ASes=[${h.authorization_servers.map(Zr).join(", ")}]`);
  let s, k = [];
  for (let A of h.authorization_servers) {
    let R;
    try {
      R = await je(A, {
        fetchFn: d
      });
    } catch (I) {
      if (n?.aborted) throw I;
      k.push(`${Zr(A)}: ${I instanceof Error ? I.message : String(I)}`);
      continue;
    }
    if (R.grant_types_supported && !R.grant_types_supported.includes(Te)) {
      k.push(`${Zr(A)}: does not advertise jwt-bearer grant (supported: ${R.grant_types_supported.join(", ")})`);
      continue;
    }
    s = R;
    break;
  }
  if (!s) throw new x(`XAA: no authorization server supports jwt-bearer. Tried: ${k.join("; ")}`, `XAA: no authorization server supports jwt-bearer (tried ${h.authorization_servers.length})`);
  let v = s.token_endpoint_auth_methods_supported, S = v && !v.includes("client_secret_basic") && v.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
  re(r, `XAA: AS issuer=${Zr(s.issuer)} token_endpoint=${Zr(s.token_endpoint)} auth_method=${S}`), 
  re(r, "XAA: exchanging id_token for ID-JAG at IdP");
  let y = await Be({
    tokenEndpoint: t.idpTokenEndpoint,
    audience: s.issuer,
    resource: h.resource,
    idToken: t.idpIdToken,
    clientId: t.idpClientId,
    clientSecret: t.idpClientSecret,
    fetchFn: d
  });
  re(r, "XAA: ID-JAG obtained"), re(r, "XAA: exchanging ID-JAG for access_token at AS");
  let T = await Ke({
    tokenEndpoint: s.token_endpoint,
    assertion: y.jwtAuthGrant,
    clientId: t.clientId,
    clientSecret: t.clientSecret,
    authMethod: S,
    fetchFn: d
  });
  return re(r, "XAA: access_token obtained"), {
    ...T,
    authorizationServerUrl: s.issuer
  };
}

var Ze = 3e4, Qe = 500, et = new Set([ ...lG, ...EU, "ETIMEDOUT" ]);

function tt(e) {
  if (Ve(e)) return !0;
  if (e instanceof Error && e.name === "TimeoutError") return !0;
  let t = tg(e);
  return t !== null && et.has(t.code);
}

function fe(e) {
  let t = e;
  return (t?.name === "ZodError" || t?.name === "$ZodError") && Array.isArray(t?.issues);
}

var rt = [ "invalid_request", "invalid_client", "invalid_grant", "unauthorized_client", "unsupported_grant_type", "invalid_scope", "access_denied", "server_error", "temporarily_unavailable", "unsupported_response_type", "unsupported_token_type", "invalid_token", "method_not_allowed", "too_many_requests", "invalid_client_metadata", "insufficient_scope", "invalid_target", "authorization_pending", "expired_token", "slow_down" ];

function x1s(e) {
  let t = rt.find(r => r === e);
  return pe(t) ?? b("other");
}

function P1s(e, t) {
  let r = t instanceof Error ? `${e}\n${t.message}` : e;
  if (r.includes("dynamic client registration") || t instanceof Dx && t.errorCode === "invalid_client_metadata") return "dcr_failed";
  if (r.includes("trying to load") && r.includes("metadata") || r.includes("Incompatible auth server")) return "discovery_failed";
  if (t instanceof Dx) return "dcr_rejected";
  let n = E(t) ?? E(t instanceof Error ? t.cause : void 0);
  if (n && m8e.has(n)) return "network_failed";
  return "sdk_auth_failed";
}

var he = 5;

function CYo(e) {
  return Zr(e.origin + e.pathname) + kSn(e);
}

var nt = new Set([ "invalid_refresh_token", "expired_refresh_token", "token_expired" ]);

async function RYo(e) {
  if (!e.ok) return e;
  let t = await e.text(), r;
  try {
    r = Y(t);
  } catch {
    return new Response(t, e);
  }
  if (Y7n.safeParse(r).success) return new Response(t, e);
  let n = X7n.safeParse(r);
  if (!n.success) return new Response(t, e);
  let d = nt.has(n.data.error) ? {
    error: "invalid_grant",
    error_description: n.data.error_description ?? `Server returned non-standard error code: ${n.data.error}`
  } : n.data;
  return new Response(_(d), {
    status: 400,
    statusText: "Bad Request",
    headers: e.headers
  });
}

function Czt() {
  return async (e, t) => {
    try {
      return await Ue(e, t);
    } catch (r) {
      if (t?.signal?.aborted || !tt(r)) throw r;
      return await J(Qe, t?.signal ?? void 0), await Ue(e, t);
    }
  };
}

async function Ue(e, t) {
  let r = AbortSignal.timeout(Ze), n = t?.method?.toUpperCase() === "POST", d = aa({
    url: String(e)
  });
  if (!t?.signal) {
    let v;
    try {
      v = await fetch(e, {
        ...t,
        ...d,
        signal: r
      });
    } catch (S) {
      DD(S, e);
    }
    return n ? RYo(v) : v;
  }
  let h = new AbortController, s = () => h.abort();
  t.signal.addEventListener("abort", s), r.addEventListener("abort", s);
  let k = () => {
    t.signal?.removeEventListener("abort", s), r.removeEventListener("abort", s);
  };
  if (t.signal.aborted) h.abort();
  try {
    let v = await fetch(e, {
      ...t,
      ...d,
      signal: h.signal
    });
    return k(), n ? RYo(v) : v;
  } catch (v) {
    k(), DD(v, e);
  }
}

async function ae(e, t, r) {
  let {configuredMetadataUrl: n, fetchFn: d, resourceMetadataUrl: h} = r ?? {}, s = d ?? Czt();
  if (n) {
    if (!n.startsWith("https://")) throw Error(`authServerMetadataUrl must use https:// (got: ${Zr(n)})`);
    let v = await s(n, {
      headers: {
        Accept: "application/json"
      }
    });
    if (v.ok) {
      let S;
      try {
        S = await v.json();
      } catch {
        throw Error(`Configured auth server metadata at ${Zr(n)} is not valid JSON`);
      }
      return tbn.parse(S);
    }
    throw Error(`HTTP ${v.status} fetching configured auth server metadata from ${Zr(n)}`);
  }
  try {
    let {authorizationServerMetadata: v} = await J2r(t, {
      fetchFn: s,
      ...h && {
        resourceMetadataUrl: h
      }
    });
    if (v) return v;
  } catch (v) {
    re(e, `RFC 9728 discovery failed, falling back: ${HD(v, t)}`);
  }
  let k = new URL(t);
  if (k.pathname === "/") return;
  try {
    return await mSt(k, {
      fetchFn: s
    });
  } catch (v) {
    re(e, `Path-aware auth server discovery failed: ${HD(v, t)}`);
    return;
  }
}

class xYo extends Lx {
  serverName;
  constructor(e) {
    super("Authentication required; client registration is deferred until the user authenticates");
    this.serverName = e;
    this.name = "McpClientRegistrationDeferredError";
  }
}

class Rzt extends Error {
  constructor() {
    super("Authentication was cancelled");
    this.name = "AuthenticationCancelledError";
  }
}

function _e(e) {
  try {
    let t = new URL(e);
    return `${t.protocol}//${t.hostname}`;
  } catch {
    return e;
  }
}

function be(e) {
  let t = _e(e);
  return t === "http://127.0.0.1" || t === "http://localhost";
}

function Oe(e) {
  if (!e?.clientId || !e.redirectUri || !be(e.redirectUri)) return;
  let t = Number(new URL(e.redirectUri).port);
  return t && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === KGe(t) ? t : void 0;
}

function Me() {
  return a.MCP_OAUTH_CLIENT_METADATA_URL || Tje;
}

function Re(e) {
  if (!be(e)) return !1;
  try {
    return new URL(e).pathname === "/callback";
  } catch {
    return !1;
  }
}

function it(e) {
  return e !== void 0 && (e === Tje || e === Me());
}

function t4s(e) {
  return Ut().oauthCallbackSubmitters.get(e);
}

function n4s(e, t) {
  let r = Ut().activeOAuthFlows;
  r.set(e, t), t.finally(() => {
    if (r.get(e) === t) r.delete(e);
  }).catch(() => {});
}

function r4s(e) {
  return Ut().activeOAuthFlows.get(e);
}

async function j7n(e, t) {
  let r = od(e, t), n = (await Xn().readAsync())?.mcpOAuth?.[r];
  if (!n || n.accessToken || n.refreshToken) return;
  try {
    await Xn().mutate(d => {
      let h = d.mcpOAuth?.[r];
      if (!h || h.accessToken || h.refreshToken) return d;
      let s = {
        ...d.mcpOAuth
      };
      return delete s[r], {
        ...d,
        mcpOAuth: s
      };
    });
  } catch (d) {
    re(e, `clear tokenless stub failed: ${l(d)}`);
  }
}

async function Ee({serverName: e, endpoint: t, token: r, tokenTypeHint: n, clientId: d, clientSecret: h, accessToken: s, authMethod: k = "client_secret_basic", configuredHeaders: v}) {
  let S = new URLSearchParams;
  S.set("token", r), S.set("token_type_hint", n);
  let y = {
    ...v,
    "Content-Type": "application/x-www-form-urlencoded"
  }, T = Object.keys(v).length > 0 ? {
    beforeRedirect: Ybn(t)
  } : {};
  if (d && h) if (k === "client_secret_post") S.set("client_id", d), S.set("client_secret", h); else {
    let A = Buffer.from(`${encodeURIComponent(d)}:${encodeURIComponent(h)}`).toString("base64");
    y.Authorization = `Basic ${A}`, Ng().record(A);
  } else if (d) S.set("client_id", d); else re(e, `No client_id available for ${n} revocation - server may reject`);
  try {
    await At.post(t, S, {
      headers: y,
      ...T
    }), re(e, `Successfully revoked ${n}`);
  } catch (A) {
    if (At.isAxiosError(A) && A.response?.status === 401 && s) re(e, `Got 401, retrying ${n} revocation with Bearer auth`), 
    S.delete("client_id"), S.delete("client_secret"), await At.post(t, S, {
      headers: {
        ...y,
        Authorization: `Bearer ${s}`
      },
      ...T
    }), re(e, `Successfully revoked ${n} with Bearer auth`); else throw A;
  }
}

async function o4s(e, t) {
  let n = (await Xn().readAsync())?.mcpOAuth?.[od(e, t)];
  if (!n?.accessToken && !n?.refreshToken) return;
  return {
    accessToken: n.accessToken || void 0,
    refreshToken: n.refreshToken,
    clientId: n.clientId,
    clientSecret: n.clientSecret,
    ...n.discoveryState && {
      discoveryState: tTe(n.discoveryState)
    }
  };
}

async function Ie(e, t, r) {
  let n = Ng();
  n.record(r.accessToken), n.record(r.refreshToken), n.record(r.clientSecret);
  let d;
  try {
    let h = r.discoveryState?.authorizationServerUrl ?? t.url, s = await ae(e, h, {
      configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
      fetchFn: fle(e, t, Czt())
    });
    if (!s) re(e, "No OAuth metadata found"), d = "no_metadata"; else {
      let k = "revocation_endpoint" in s ? s.revocation_endpoint : null;
      if (!k) re(e, "Server does not support token revocation"), d = "no_revocation_endpoint"; else {
        let v = String(k), S = await qbn(e, t, v), y = ("revocation_endpoint_auth_methods_supported" in s ? s.revocation_endpoint_auth_methods_supported : void 0) ?? ("token_endpoint_auth_methods_supported" in s ? s.token_endpoint_auth_methods_supported : void 0), T = y && !y.includes("client_secret_basic") && y.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
        if (re(e, `Revoking tokens via ${Zr(v)} (${T})`), r.refreshToken) try {
          await Ee({
            serverName: e,
            endpoint: v,
            token: r.refreshToken,
            tokenTypeHint: "refresh_token",
            clientId: r.clientId,
            clientSecret: r.clientSecret,
            accessToken: r.accessToken,
            authMethod: T,
            configuredHeaders: S
          });
        } catch (A) {
          re(e, `Failed to revoke refresh token: ${l(A)}`), d = "server_revoke_failed";
        }
        if (r.accessToken) try {
          await Ee({
            serverName: e,
            endpoint: v,
            token: r.accessToken,
            tokenTypeHint: "access_token",
            clientId: r.clientId,
            clientSecret: r.clientSecret,
            accessToken: r.accessToken,
            authMethod: T,
            configuredHeaders: S
          });
        } catch (A) {
          re(e, `Failed to revoke access token: ${l(A)}`), d = "server_revoke_failed";
        }
      }
    }
  } catch (h) {
    re(e, `Failed to revoke tokens: ${l(h)}`), d = "server_revoke_failed";
  }
  return d;
}

async function s4s(e, t, r) {
  let n;
  try {
    let d = (await Xn().readAsync())?.mcpOAuth?.[od(e, t)], h = {
      ...r,
      accessToken: r.accessToken && r.accessToken !== d?.accessToken ? r.accessToken : void 0,
      refreshToken: r.refreshToken && r.refreshToken !== d?.refreshToken ? r.refreshToken : void 0
    };
    if (!h.accessToken && !h.refreshToken) {
      re(e, "No replaced tokens to revoke"), g("mcp_oauth_revoke");
      return;
    }
    n = await Ie(e, t, h);
  } catch (d) {
    re(e, `Failed to revoke replaced tokens: ${l(d)}`), n = "server_revoke_failed";
  }
  if (n) f("mcp_oauth_revoke", n); else g("mcp_oauth_revoke");
}

async function i4s(e, t, {preserveStepUpState: r = !1} = {}) {
  let n = Xn(), d = await n.readAsync();
  if (!d?.mcpOAuth) {
    g("mcp_oauth_revoke");
    return;
  }
  let h = od(e, t), s = d.mcpOAuth[h], k;
  if (s?.accessToken || s?.refreshToken) k = await Ie(e, t, {
    accessToken: s.accessToken || void 0,
    refreshToken: s.refreshToken,
    clientId: s.clientId,
    clientSecret: s.clientSecret,
    ...s.discoveryState && {
      discoveryState: tTe(s.discoveryState)
    }
  }); else re(e, "No tokens to revoke");
  try {
    if (r && s && (s.stepUpScope || s.discoveryState || s.clientId)) await n.mutate(v => {
      let S = v.mcpOAuth?.[h];
      if (S?.accessToken !== s.accessToken || S?.clientId !== s.clientId) return v;
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
    }), re(e, "Preserved step-up auth state across revocation"); else await PYo(e, t);
  } catch (v) {
    re(e, `clear local tokens failed: ${l(v)}`), k ??= "local_clear_failed";
  }
  if (OD(e), k) f("mcp_oauth_revoke", k); else g("mcp_oauth_revoke");
}

async function PYo(e, t, r) {
  let n = od(e, t), d;
  if (await Xn().mutate(h => {
    let s = h.mcpOAuth?.[n];
    if (!s) return h;
    let k = {
      ...h.mcpOAuth
    };
    if (s.clientId && r?.preserveClientRegistration?.(s)) {
      if (!s.accessToken && !s.refreshToken) return h;
      k[n] = {
        ...s,
        accessToken: "",
        refreshToken: void 0,
        expiresAt: 0,
        scope: void 0
      }, d = "tokens";
    } else delete k[n], d = "all";
    return {
      ...h,
      mcpOAuth: k
    };
  }), d) re(e, d === "tokens" ? "Cleared stored tokens (preserved client registration)" : "Cleared stored tokens");
}

function Pe(e, t, r, n) {
  if (r?.success) return;
  let d = n ? "mutate_rejected" : "storage_write_failed", h = n ? l(n) : r?.warning ?? "storage write failed";
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

async function st(e, t, r, n, d) {
  if (!t.oauth?.xaa) throw Error("XAA: oauth.xaa must be set");
  let h = FZ();
  if (!h) throw Error("XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.");
  let s = t.oauth?.clientId;
  if (!s) throw Error(`XAA: server '${e}' needs an AS client_id. Re-add with --client-id.`);
  let v = (await IYo(e, t))?.clientSecret;
  if (!v) {
    let A = od(e, t), R = Object.keys((await Xn().readAsync())?.mcpOAuthClientConfig ?? {}), I = yle(t.headers ?? {});
    throw re(e, `XAA: secret lookup miss. wanted=${A} have=[${R.join(", ")}] configHeaders=${_(I)}`), 
    Error(`XAA: AS client secret not found for '${e}'. Re-add with --client-secret.`);
  }
  re(e, "XAA: starting cross-app access flow");
  let S = await z7n(h.issuer), y = await Y_n(h.issuer) !== void 0, T = "idp_login";
  try {
    let A;
    try {
      A = await j2r({
        idpIssuer: h.issuer,
        idpClientId: h.clientId,
        idpClientSecret: S,
        callbackPort: h.callbackPort,
        onAuthorizationUrl: r,
        skipBrowserOpen: d,
        abortSignal: n
      });
    } catch (w) {
      if (n?.aborted) throw new Rzt;
      throw w;
    }
    T = "discovery";
    let R = await X_n(h.issuer);
    T = "token_exchange", Ng().record(v);
    let I;
    try {
      I = await le(t.url, {
        clientId: s,
        clientSecret: v,
        idpClientId: h.clientId,
        idpClientSecret: S,
        idpIdToken: A,
        idpTokenEndpoint: R.token_endpoint
      }, e, n);
    } catch (w) {
      if (n?.aborted) throw new Rzt;
      let L = l(w);
      if (w instanceof K) {
        if (w.shouldClearIdToken) await W7n(h.issuer), re(e, "XAA: cleared cached id_token after token-exchange failure");
      } else if (L.includes("PRM discovery failed") || L.includes("AS metadata discovery failed") || L.includes("no authorization server supports jwt-bearer")) T = "discovery"; else if (L.includes("jwt-bearer")) T = "jwt_bearer";
      throw w;
    }
    let C = od(e, t), U = Ng();
    U.record(I.access_token), U.record(I.refresh_token);
    let M, H;
    try {
      M = await Xn().mutate(w => {
        let L = w.mcpOAuth?.[C];
        return {
          ...w,
          mcpOAuth: {
            ...w.mcpOAuth,
            [C]: {
              ...L,
              serverName: e,
              serverUrl: t.url,
              accessToken: I.access_token,
              refreshToken: I.refresh_token ?? L?.refreshToken,
              expiresAt: I.expires_in != null ? Date.now() + I.expires_in * 1e3 : void 0,
              scope: I.scope,
              clientId: s,
              clientSecret: v,
              discoveryState: ASt({
                previous: L?.discoveryState,
                issuedBy: I.authorizationServerUrl,
                interactiveSignIn: !0
              })
            }
          }
        };
      });
    } catch (w) {
      H = w;
    }
    if (M?.success) re(e, "XAA: tokens saved"); else Pe(e, t, M, H);
    i("tengu_mcp_oauth_flow_success", {
      authMethod: b("xaa"),
      idTokenCacheHit: y
    }), g("mcp_oauth_flow");
  } catch (A) {
    if (A instanceof Rzt) throw A;
    throw m("mcp_oauth_flow", "mcp_oauth_xaa_failed"), i("tengu_mcp_oauth_flow_failure", {
      authMethod: b("xaa"),
      xaaFailureStage: c(T),
      idTokenCacheHit: y
    }), A;
  }
}

async function a4s(e, t, r, n, d) {
  if (!URL.canParse(t.url)) {
    m("mcp_oauth_flow", "mcp_oauth_no_valid_url");
    let C = "configError" in t && typeof t.configError === "string" ? t.configError : void 0;
    throw new x(C || "This server's URL is missing or not a valid URL, so sign-in can't start. Fix the URL in its MCP config (or set the environment variable it uses) and try again.", "MCP OAuth refused: no valid server URL");
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
    }), await st(e, t, r, n, d?.skipBrowserOpen);
    return;
  }
  let h = Xn(), s = od(e, t), k = (await h.readAsync())?.mcpOAuth?.[s], v = k?.stepUpScope, S = k?.discoveryState?.resourceMetadataUrl, y = Oe(k), T;
  if (S) try {
    T = new URL(S);
  } catch {
    re(e, `Invalid cached resourceMetadataUrl: ${Zr(S)}`);
  }
  let A = {
    scope: v,
    resourceMetadataUrl: T
  }, R = Ge();
  i("tengu_mcp_oauth_flow_start", {
    flowAttemptId: ye(R),
    isOAuthFlow: !0,
    transportType: c(t.type),
    ...Xv(t) && {
      mcpServerBaseUrl: Xv(t)
    }
  });
  let I = !1;
  try {
    let C = t.oauth?.callbackPort, U = !!d?.redirectUri, M = U ? 0 : C ?? await oTe(y), H = d?.redirectUri ?? KGe(M);
    re(e, U ? `Using custom redirectUri: ${Zr(H)} (no localhost listener)` : `Using redirect port: ${M}${C ? " (from config)" : y && M === y ? " (reusing registered port)" : ""}`);
    try {
      await PYo(e, t, {
        preserveClientRegistration: F => M === Oe(F) || F.redirectUri === H
      });
    } catch (F) {
      re(e, `clear stored credentials failed: ${l(F)}`);
    }
    let w = Ut(), L = new AbortController;
    if (!U) w.oauthCallbackListeners.get(M)?.abort(), w.oauthCallbackListeners.set(M, L);
    let j = new xzt(e, t, H, !0, r, d?.skipBrowserOpen), me = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
    if (A.scope && !me) j.markStepUpPending(A.scope);
    let Q = fle(e, t, Czt());
    try {
      let F = await ae(e, t.url, {
        configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
        fetchFn: Q,
        resourceMetadataUrl: A.resourceMetadataUrl
      });
      if (F) j.setMetadata(F), re(e, `Fetched OAuth metadata with scope: ${Hk("scope", xe(F) ?? "") || "NONE"}`);
    } catch (F) {
      re(e, `Failed to fetch OAuth metadata: ${HD(F, t.url)}`);
    }
    let B = await j.state(), P = null, z = null, W = null, ge = null, G = () => {
      if (P) P.removeAllListeners(), P.on("error", () => {}), P.close(), P = null;
      if (z) clearTimeout(z), z = null;
      if (W) n?.removeEventListener("abort", W), L.signal.removeEventListener("abort", W), 
      W = null;
      if (w.oauthCallbackListeners.get(M) === L) w.oauthCallbackListeners.delete(M);
      if (w.oauthCallbackSubmitters.get(e) === ge) w.oauthCallbackSubmitters.delete(e);
      re(e, "MCP OAuth server cleaned up");
    }, ve = await new Promise((F, $e) => {
      let ne = !1, ke = N => {
        if (ne) return;
        ne = !0, F(N);
      }, q = N => {
        if (ne) return;
        ne = !0, $e(N);
      };
      if (W = () => {
        G(), q(new Rzt);
      }, n?.aborted || L.signal.aborted) {
        W();
        return;
      }
      n?.addEventListener("abort", W), L.signal.addEventListener("abort", W);
      {
        let N = D => {
          try {
            let X = new URL(D), Z = X.searchParams.get("code"), de = X.searchParams.get("state"), V = X.searchParams.get("error");
            if (!Z && !V) return !1;
            if (de !== B) return re(e, "Ignoring manual callback URL whose state belongs to a different flow"), 
            !1;
            if (V) {
              let ee = X.searchParams.get("error_description") || "";
              return G(), q(Error(`OAuth error: ${V} - ${ee}`)), !0;
            }
            if (!Z) return !1;
            return re(e, "Received auth code via manual callback URL"), G(), ke(Z), !0;
          } catch {
            return !1;
          }
        };
        ge = N, w.oauthCallbackSubmitters.set(e, N), d?.onWaitingForCallback?.(N, M, B);
      }
      let Se = async () => {
        try {
          re(e, "Starting SDK auth"), re(e, `Server URL: ${Zr(t.url)}`);
          let N = await ine(j, {
            serverUrl: t.url,
            scope: A.scope,
            resourceMetadataUrl: A.resourceMetadataUrl,
            fetchFn: Q
          });
          if (re(e, `Initial auth result: ${N}`), N !== "REDIRECT") re(e, `Unexpected auth result, expected REDIRECT: ${N}`);
        } catch (N) {
          re(e, `SDK auth error: ${HD(N, t.url)}`), G(), q(Object.assign(new x(`SDK auth failed: ${HD(N, t.url)}`, "SDK auth failed"), {
            cause: N
          }));
        }
      };
      if (U) Se(); else P = qe((N, D) => {
        let X = Ye(N.url || "", !0);
        if (X.pathname === "/callback") {
          let Z = X.query.code, de = X.query.state, V = X.query.error, ee = X.query.error_description, Ae = X.query.error_uri;
          if (de !== B) {
            D.writeHead(400, {
              "Content-Type": "text/html"
            }), D.end(MD({
              ok: !1,
              heading: "Authentication failed",
              message: "Invalid state parameter. Close this tab and try again from Claude Code."
            }));
            return;
          }
          if (V) {
            D.writeHead(200, {
              "Content-Type": "text/html"
            }), D.end(MD({
              ok: !1,
              heading: "Authentication failed",
              message: "Close this tab and try again from Claude Code.",
              detail: `${String(V)}: ${ee ?? ""}`
            })), G();
            let ue = `OAuth error: ${V}`;
            if (ee) ue += ` - ${ee}`;
            if (Ae) ue += ` (See: ${Ae})`;
            q(Error(ue));
            return;
          }
          if (Z) D.writeHead(200, {
            "Content-Type": "text/html"
          }), D.end(MD({
            ok: !0,
            heading: "Authentication successful",
            message: "You can close this tab and return to Claude Code."
          })), G(), ke(Z);
        } else D.writeHead(404, {
          "Content-Type": "text/html"
        }), D.end(MD({
          ok: !1,
          heading: "Not found",
          message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${Zr(H)}.`
        }));
      }), P.on("error", N => {
        if (G(), N.code === "EADDRINUSE") {
          let D = O() === "windows" ? `netstat -ano | findstr :${M}` : `lsof -ti:${M} -sTCP:LISTEN`;
          q(new x(`OAuth callback port ${M} is already in use \u2014 another process may be holding it. ` + `Run \`${D}\` to find it.`, "OAuth callback port already in use"));
        } else q(new x(`OAuth callback server failed: ${N.message}`, "OAuth callback server failed"));
      }), P.listen(M, "127.0.0.1", () => void Se()), P.unref();
      z = setTimeout((N, D) => {
        N(), D(new x("Authentication timeout", "Authentication timeout"));
      }, 3e5, G, q), z.unref();
    });
    I = !0, re(e, "Completing auth flow with authorization code"), Ng().record(ve);
    let ce = await ine(j, {
      serverUrl: t.url,
      authorizationCode: ve,
      resourceMetadataUrl: A.resourceMetadataUrl,
      fetchFn: fle(e, t, Czt())
    });
    if (re(e, `Auth result: ${ce}`), ce === "AUTHORIZED") {
      let F = await j.tokens().catch(() => {});
      if (re(e, `Tokens after auth: ${F ? "Present" : "Missing"}`), F) re(e, `Token expires_in: ${F.expires_in}`);
      i("tengu_mcp_oauth_flow_success", {
        flowAttemptId: ye(R),
        transportType: c(t.type),
        ...Xv(t) && {
          mcpServerBaseUrl: Xv(t)
        }
      }), g("mcp_oauth_flow");
    } else throw new x("Unexpected auth result: " + ce, "Unexpected auth result");
  } catch (C) {
    re(e, `Error during auth completion: ${HD(C, t.url)}`);
    let U = "unknown", M, H, w = l(C), L = C instanceof Error ? C.cause : void 0;
    if (C instanceof Rzt) U = "cancelled"; else if (/AADSTS\d/.test(w)) U = "entra_specific"; else if (/redirect[_ ]uri/i.test(w)) U = "redirect_uri_mismatch"; else if (I && (fe(C) || fe(L))) U = "token_response_schema_rejected"; else if (I) U = "token_exchange_failed"; else if (w.includes("Authentication timeout")) U = "timeout"; else if (w.includes("OAuth error:")) U = "provider_denied"; else if (w.includes("already in use") || w.includes("EADDRINUSE") || w.includes("callback server failed") || w.includes("No available port")) U = "port_unavailable"; else if (w.includes("SDK auth failed")) U = P1s(w, L);
    let j = (L instanceof Error ? L : C instanceof Error ? C : null)?.message.match(/^HTTP (\d{3})\b/);
    if (j) H = Number(j[1]);
    if (L instanceof Dx) M = L.errorCode;
    if (C instanceof Dx) {
      if (M = C.errorCode, C.errorCode === "invalid_client" || C.errorCode === "unauthorized_client") {
        let B = od(e, t);
        try {
          await Xn().mutate(P => {
            let z = P.mcpOAuth?.[B];
            if (!z) return P;
            return {
              ...P,
              mcpOAuth: {
                ...P.mcpOAuth,
                [B]: {
                  ...z,
                  clientId: void 0,
                  clientSecret: void 0
                }
              }
            };
          });
        } catch (P) {
          re(e, `clear clientId failed: ${l(P)}`);
        }
      }
    }
    if (!/^OAuth error: access_denied(?: |$)/.test(w) && (U === "timeout" || w.includes("OAuth error:"))) {
      let B = od(e, t);
      await Xn().mutate(P => {
        let z = P.mcpOAuth?.[B];
        if (!z?.clientId || z.accessToken || z.refreshToken || z.clientId !== k?.clientId) return P;
        return {
          ...P,
          mcpOAuth: {
            ...P.mcpOAuth,
            [B]: {
              ...z,
              clientId: void 0,
              clientSecret: void 0
            }
          }
        };
      }).catch(P => re(e, `drop clientId failed: ${l(P)}`));
    }
    if (U !== "cancelled") m("mcp_oauth_flow", "mcp_oauth_flow_failed");
    i("tengu_mcp_oauth_flow_error", {
      flowAttemptId: ye(R),
      reason: c(U),
      error_code: M === void 0 ? void 0 : x1s(M),
      http_status: kq(H),
      transportType: c(t.type),
      ...Xv(t) && {
        mcpServerBaseUrl: Xv(t)
      }
    });
    let Q = HD(C, t.url);
    throw Q === l(C) ? C : Error(Q, {
      cause: C
    });
  }
}

function q_n(e, t) {
  return async (r, n) => {
    let d = await e(r, n);
    if (d.status === 401 || d.status === 403) t.sawAuthChallenge = !0;
    if (t.noteServerAnswer(r, d.status === 401 || d.status === 403 && Qke(d).error === "insufficient_scope"), 
    !new Headers(n?.headers).has("authorization")) return d;
    if (d.status === 403) {
      let {error: h, scope: s} = Qke(d);
      if (h === "insufficient_scope" && s) t.markStepUpPending(s);
    } else if (d.status === 401) t.clearStepUpPending();
    return d;
  };
}

class xzt {
  serverName;
  serverConfig;
  redirectUri;
  handleRedirection;
  _codeVerifier;
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
  constructor(e, t, r = KGe(), n = !1, d, h) {
    this.serverName = e, this.serverConfig = t, this.redirectUri = r, this.handleRedirection = n, 
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
    if (!Re(this.redirectUri)) {
      re(this.serverName, `redirectUri ${Zr(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`);
      return;
    }
    let e = Me();
    if (e !== Tje) re(this.serverName, `Using CIMD URL from env: ${e}`);
    return e;
  }
  setMetadata(e) {
    this._metadata = e;
  }
  getCuratedMetadataScope() {
    let e = xe(this._metadata);
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
    let r = this.serverConfig.url;
    if (String(e) === (URL.canParse(r) ? new URL(r).href : r)) this.authChallengeOpen = t;
  }
  registrationOfferedByDiscovery=!1;
  async readCredentialStore() {
    let e = await Qpe();
    if (e === dd) throw re(this.serverName, "Credential store read failed; not reporting credentials as absent"), 
    new f8e(this.serverName);
    return e;
  }
  async state() {
    if (!this._state) this._state = We(32).toString("base64url"), re(this.serverName, "Generated new OAuth state");
    return this._state;
  }
  async clientInformation() {
    let e = await this.resolveClientInformation();
    return this._presented.record(e?.client_secret), this._presented.record(RSt(e?.client_id, e?.client_secret)), 
    e;
  }
  async resolveClientInformation() {
    let e = await this.readCredentialStore(), t = od(this.serverName, this.serverConfig), r = e?.mcpOAuthClientConfig?.[t]?.clientSecret, n = this.serverConfig.oauth?.clientId, d = e?.mcpOAuth?.[t], h = this.handleRedirection && it(d?.clientId) && !Re(this.redirectUri);
    if (h) {
      if (re(this.serverName, `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${Zr(this.redirectUri)} \u2014 ${n ? "serving the configured client" : "registering via DCR"} instead`), 
      n) await this.patchStoredClientEntry(t, {
        clientId: n,
        clientSecret: void 0,
        redirectUri: this.redirectUri
      }, "stale CIMD client_id repair");
    }
    if (d?.clientId && !h) {
      let s = d.redirectUri;
      if (this.handleRedirection && (s ? _e(s) !== _e(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))) {
        let k = s ? Zr(s) : "localhost";
        if (!n) {
          re(this.serverName, `Cached client_id was registered for ${k}; current redirectUri is ${Zr(this.redirectUri)} \u2014 forcing re-DCR`);
          return;
        }
        if (d.clientId !== n) return re(this.serverName, `Stored client_id is stale and its redirectUri ${k} predates ${Zr(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`), 
        await this.patchStoredClientEntry(t, {
          clientId: n,
          clientSecret: void 0,
          redirectUri: this.redirectUri
        }, "stale client_id repair"), this._lastServedClientId = n, {
          client_id: n,
          client_secret: r
        };
        re(this.serverName, `Stored redirectUri ${k} predates ${Zr(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`), 
        await this.patchStoredClientEntry(t, {
          redirectUri: this.redirectUri
        }, "stored redirectUri convergence");
      }
      return re(this.serverName, "Found client info"), this._lastServedClientId = d.clientId, 
      {
        client_id: d.clientId,
        client_secret: d.clientSecret ?? (d.clientId === n ? r : void 0)
      };
    }
    if (n) return re(this.serverName, "Using pre-configured client ID"), this._lastServedClientId = n, 
    {
      client_id: n,
      client_secret: r
    };
    if (!this.handleRedirection && this.registrationOfferedByDiscovery && !d?.accessToken && !d?.refreshToken) throw re(this.serverName, "No client info found; deferring client registration to authentication time"), 
    new xYo(this.serverName);
    re(this.serverName, "No client info found");
    return;
  }
  async patchStoredClientEntry(e, t, r) {
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
      }))?.success) re(this.serverName, `${r} resolved unsuccessful`);
    } catch (n) {
      re(this.serverName, `${r} failed: ${l(n)}`);
    }
  }
  async saveClientInformation(e) {
    this._presented.record(e.client_secret), this._presented.record(RSt(e.client_id, e.client_secret));
    let t = od(this.serverName, this.serverConfig);
    try {
      if ((await Xn().mutate(n => ({
        ...n,
        mcpOAuth: {
          ...n.mcpOAuth,
          [t]: {
            ...n.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            clientId: e.client_id,
            clientSecret: e.client_secret,
            redirectUri: this.redirectUri,
            accessToken: n.mcpOAuth?.[t]?.accessToken || "",
            expiresAt: n.mcpOAuth?.[t]?.expiresAt
          }
        }
      })))?.success) this._lastServedClientId = e.client_id; else re(this.serverName, "saveClientInformation persist resolved unsuccessful");
    } catch (r) {
      re(this.serverName, `saveClientInformation persist failed: ${l(r)}`);
    }
  }
  async tokens() {
    let e = await this.readCredentialStore(), t = od(this.serverName, this.serverConfig), r = e?.mcpOAuth?.[t];
    if (xK() && this.serverConfig.oauth?.xaa && !r?.refreshToken && (!r?.accessToken || r.expiresAt != null && (r.expiresAt - Date.now()) / 1e3 <= 300)) {
      if (!this._refreshInProgress) re(this.serverName, r ? "XAA: access_token expiring, attempting silent exchange" : "XAA: no access_token yet, attempting silent exchange"), 
      this._refreshInProgress = this.xaaRefresh().finally(() => {
        this._refreshInProgress = void 0;
      });
      try {
        let k = await this._refreshInProgress;
        if (k) return this._lastServedAccessToken = k.access_token, this._presented.record(k.access_token), 
        this._presented.record(k.refresh_token), this._lastServedRefreshToken = k.refresh_token ?? this._lastServedRefreshToken, 
        k;
      } catch (k) {
        re(this.serverName, `XAA silent exchange failed: ${l(k)}`);
      }
    }
    if (!r) {
      re(this.serverName, "No token data found"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (!r.accessToken) {
      re(this.serverName, "No access token in storage"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    this._lastServedAccessToken = r.accessToken, this._presented.record(r.accessToken), 
    this._presented.record(r.refreshToken), this._lastServedRefreshToken = r.refreshToken;
    let n = r.expiresAt != null ? (r.expiresAt - Date.now()) / 1e3 : void 0, d = this._pendingStepUpScope, h = d !== void 0;
    if (h) re(this.serverName, `Step-up pending (${Hk("scope", d)}), omitting refresh_token`);
    if (n != null && n <= 0 && !r.refreshToken) {
      re(this.serverName, "Token expired without refresh token"), this.clearStepUpPendingOnCredentialGone();
      return;
    }
    if (n != null && n <= 300 && r.refreshToken && !h) {
      if (!this._refreshInProgress) re(this.serverName, `Token expires in ${Math.floor(n)}s, attempting proactive refresh`), 
      this._refreshInProgress = this.refreshAuthorization(r.refreshToken).finally(() => {
        this._refreshInProgress = void 0;
      }); else re(this.serverName, "Token refresh already in progress, reusing existing promise");
      try {
        let k = await this._refreshInProgress;
        if (k) return re(this.serverName, "Token refreshed successfully"), this._lastServedAccessToken = k.access_token, 
        this._presented.record(k.access_token), this._presented.record(k.refresh_token), 
        this._lastServedRefreshToken = k.refresh_token ?? this._lastServedRefreshToken, 
        k;
        re(this.serverName, "Token refresh failed, returning current tokens");
      } catch (k) {
        re(this.serverName, `Token refresh error: ${HD(k, this.serverConfig.url)}`);
      }
    }
    let s = {
      access_token: r.accessToken,
      refresh_token: h ? void 0 : r.refreshToken,
      expires_in: n,
      scope: r.scope,
      token_type: "Bearer"
    };
    return re(this.serverName, "Returning tokens"), re(this.serverName, `Has refresh token: ${!!s.refresh_token}`), 
    re(this.serverName, n != null ? `Expires in: ${Math.floor(n)}s` : "No expiration specified"), 
    s;
  }
  async saveTokens(e) {
    if (this._presented.record(e.access_token), this._presented.record(e.refresh_token), 
    this.handleRedirection) this._pendingStepUpScope = void 0;
    let t = od(this.serverName, this.serverConfig);
    re(this.serverName, "Saving tokens"), re(this.serverName, `Token expires in: ${e.expires_in}`), 
    re(this.serverName, `Has refresh token: ${!!e.refresh_token}`);
    let r = this._servedOverrideAuthorizationServerUrl === void 0 ? this._discoveredAuthorizationServer : {
      authorizationServerUrl: this._servedOverrideAuthorizationServerUrl,
      oauthMetadataFound: !0
    }, n = this.servedMetadataUrl() ?? this._discoveredAuthorizationServer?.servedMetadataUrl, d, h;
    try {
      d = await Xn().mutate(s => ({
        ...s,
        mcpOAuth: {
          ...s.mcpOAuth,
          [t]: {
            ...s.mcpOAuth?.[t],
            serverName: this.serverName,
            serverUrl: this.serverConfig.url,
            accessToken: e.access_token,
            refreshToken: e.refresh_token ?? s.mcpOAuth?.[t]?.refreshToken,
            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1e3 : void 0,
            scope: e.scope,
            discoveryState: Kbn({
              previous: s.mcpOAuth?.[t]?.discoveryState,
              signIn: r,
              servedMetadataUrl: n,
              interactiveSignIn: this.handleRedirection
            })
          }
        }
      }));
    } catch (s) {
      h = s;
    }
    if (d?.success) this._lastServedAccessToken = e.access_token, this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken;
    this.logTokenPersistFailed(d, h);
  }
  logTokenPersistFailed(e, t) {
    Pe(this.serverName, this.serverConfig, e, t);
  }
  async xaaRefresh() {
    let e = FZ();
    if (!e) return;
    let t = await Y_n(e.issuer);
    if (!t) {
      re(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
      return;
    }
    let r = this.serverConfig.oauth?.clientId, n = await IYo(this.serverName, this.serverConfig);
    if (!r || !n?.clientSecret) {
      re(this.serverName, "XAA: missing clientId or clientSecret in config \u2014 skipping silent refresh");
      return;
    }
    let d = await z7n(e.issuer), h;
    try {
      h = await X_n(e.issuer);
    } catch (s) {
      re(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${l(s)}`);
      return;
    }
    this._presented.record(n.clientSecret);
    try {
      let s = await le(this.serverConfig.url, {
        clientId: r,
        clientSecret: n.clientSecret,
        idpClientId: e.clientId,
        idpClientSecret: d,
        idpIdToken: t,
        idpTokenEndpoint: h.token_endpoint
      }, this.serverName), k = od(this.serverName, this.serverConfig), v, S;
      try {
        v = await Xn().mutate(y => {
          let T = y.mcpOAuth?.[k];
          return {
            ...y,
            mcpOAuth: {
              ...y.mcpOAuth,
              [k]: {
                ...T,
                serverName: this.serverName,
                serverUrl: this.serverConfig.url,
                accessToken: s.access_token,
                refreshToken: s.refresh_token ?? T?.refreshToken,
                expiresAt: s.expires_in != null ? Date.now() + s.expires_in * 1e3 : void 0,
                scope: s.scope,
                clientId: r,
                clientSecret: n.clientSecret,
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
        S = y;
      }
      return this.logTokenPersistFailed(v, S), {
        access_token: s.access_token,
        token_type: "Bearer",
        expires_in: s.expires_in,
        scope: s.scope,
        refresh_token: s.refresh_token
      };
    } catch (s) {
      if (s instanceof K && s.shouldClearIdToken) await W7n(e.issuer), re(this.serverName, "XAA: cleared id_token after exchange failure");
      throw s;
    }
  }
  async redirectToAuthorization(e) {
    let t = this._pendingStepUpScope ? void 0 : this.serverConfig.oauth?.scopes || (this.serverConfig.oauth?.authServerMetadataUrl ? this.getCuratedMetadataScope() : void 0), r = e.searchParams.get("scope"), n = t ?? r;
    if (n !== r) re(this.serverName, `Overrode authorization scope from ${r ? Hk("scope", r) : "NONE"} to configured: ${n ? Hk("scope", n) : "NONE"}`);
    let d = n === null ? null : I1s(n, this._metadata);
    if (d !== null && d !== r) {
      if (e.searchParams.set("scope", d), d !== t) re(this.serverName, "Appended offline_access to authorization scope");
    }
    let h = O1s(e), s = e.searchParams.getAll("prompt"), k = h ? s.filter(R => R !== "consent") : s;
    if (k.length !== s.length || k.length > 1) {
      if (e.searchParams.delete("prompt"), k.length > 0) e.searchParams.set("prompt", k.includes("consent") ? "consent" : k.at(-1));
    }
    this._authorizationUrl = e.toString();
    let v = e.searchParams.get("scope");
    if (re(this.serverName, `Authorization URL: ${CYo(e)}`), re(this.serverName, `Scopes in URL: ${v ? Hk("scope", v) : "NOT FOUND"}`), 
    v) this._scopes = v, re(this.serverName, `Captured scopes from authorization URL: ${Hk("scope", v)}`); else {
      let R = this.getCuratedMetadataScope();
      if (R) this._scopes = R, re(this.serverName, `Using scopes from metadata: ${Hk("scope", R)}`); else re(this.serverName, "No scopes available from URL or metadata");
    }
    if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
      let R = od(this.serverName, this.serverConfig), I = this._scopes, C = !1;
      try {
        await Xn().mutate(U => {
          let M = U.mcpOAuth?.[R];
          if (!M) return U;
          return C = !0, {
            ...U,
            mcpOAuth: {
              ...U.mcpOAuth,
              [R]: {
                ...M,
                stepUpScope: I
              }
            }
          };
        });
      } catch (U) {
        re(this.serverName, `step-up scope persist failed: ${l(U)}`);
      }
      if (C) re(this.serverName, `Persisted step-up scope: ${Hk("scope", I)}`);
    }
    if (!this.handleRedirection) {
      re(this.serverName, "Redirection handling is disabled, skipping redirect");
      return;
    }
    let S = e.toString();
    if (!S.startsWith("http://") && !S.startsWith("https://")) throw Error("Invalid authorization URL: must use http:// or https:// scheme");
    re(this.serverName, "Redirecting to authorization URL");
    let y = CYo(e);
    if (re(this.serverName, `Authorization URL: ${y}`), this.onAuthorizationUrlCallback) this.onAuthorizationUrlCallback(S);
    if (this.skipBrowserOpen) {
      re(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${y}`);
      return;
    }
    let T = pW();
    if (T) re(this.serverName, `Skipping browser open (headless environment). URL: ${y}`); else re(this.serverName, `Opening authorization URL: ${y}`);
    let A = T ? !1 : await js(S);
    if (i("tengu_mcp_oauth_browser_open", {
      success: A,
      headless: T,
      platform: c(O())
    }), !T && !A) re(this.serverName, "Browser didn't open automatically. URL is shown in UI.");
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
    let t = e, r = od(this.serverName, this.serverConfig), n = !1;
    try {
      let d = this._lastServedClientId, h = this._lastServedAccessToken, s = this._lastServedRefreshToken;
      await Xn().mutate(k => {
        let v = k.mcpOAuth?.[r];
        if (!v) return k;
        let S = {
          ...k.mcpOAuth
        };
        switch (t) {
         case "all":
          {
            let y = h != null && !!v.accessToken && v.accessToken !== h, T = d != null && v.clientId != null && v.clientId !== d;
            if (y || T) return re(this.serverName, `invalidateCredentials('all') preserved: ${y ? "foreign token" : "concurrent re-registration"}`), 
            k;
            if (!v.clientId && !v.refreshToken && v.accessToken === "") return k;
            S[r] = {
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
          S[r] = {
            ...v,
            clientId: void 0,
            clientSecret: void 0
          };
          break;

         case "tokens":
          {
            if (s != null && v.refreshToken && v.refreshToken !== s || h != null && !!v.accessToken && v.accessToken !== h) return re(this.serverName, "invalidateCredentials('tokens') preserved: concurrent rotation"), 
            k;
            S[r] = {
              ...v,
              accessToken: "",
              refreshToken: void 0,
              expiresAt: 0
            };
            break;
          }

         case "discovery":
          S[r] = {
            ...v,
            discoveryState: v.discoveryState && tTe(v.discoveryState),
            stepUpScope: void 0
          };
          break;
        }
        return n = !0, {
          ...k,
          mcpOAuth: S
        };
      });
    } catch (d) {
      re(this.serverName, `invalidateCredentials persist failed: ${l(d)}`);
    }
    if (n) re(this.serverName, `Invalidated credentials (scope: ${e})`);
  }
  async saveDiscoveryState(e) {
    let t = od(this.serverName, this.serverConfig);
    re(this.serverName, `Saving discovery state (authServer: ${Zr(e.authorizationServerUrl)})`);
    let r = e.authorizationServerMetadata;
    this.registrationOfferedByDiscovery = r !== void 0 && (typeof r.registration_endpoint === "string" || r.client_id_metadata_document_supported === !0 && this.clientMetadataUrl !== void 0);
    let n = {
      authorizationServerUrl: e.authorizationServerUrl,
      oauthMetadataFound: !!e.authorizationServerMetadata
    }, d = (e.authorizationServerMetadata !== void 0 ? this._servedOverrideDocuments.get(e.authorizationServerMetadata) : void 0) ?? this.servedMetadataUrl();
    this._discoveredAuthorizationServer = {
      ...n,
      servedMetadataUrl: d
    };
    try {
      await Xn().mutate(h => {
        let s = Vbn({
          previous: h.mcpOAuth?.[t]?.discoveryState,
          discovered: n,
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
                registrationNotOfferedAt: r === void 0 ? h.mcpOAuth?.[t]?.discoveryState?.registrationNotOfferedAt : typeof r.registration_endpoint !== "string" && r.client_id_metadata_document_supported !== !0 ? Date.now() : void 0
              }
            }
          }
        };
      });
    } catch (h) {
      re(this.serverName, `saveDiscoveryState persist failed: ${l(h)}`);
    }
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
        let h = await ae(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: e,
          fetchFn: fle(this.serverName, this.serverConfig, Czt())
        });
        if (h) return this._servedOverrideAuthorizationServerUrl = h.issuer, this._servedOverrideDocuments.set(h, e), 
        {
          authorizationServerUrl: h.issuer,
          authorizationServerMetadata: h
        };
      } catch (h) {
        re(this.serverName, `Failed to fetch from configured metadata URL: ${HD(h, this.serverConfig.url)}`);
      }
      return;
    }
    let r = await Xn().readAsync(), n = od(this.serverName, this.serverConfig), d = r?.mcpOAuth?.[n]?.discoveryState;
    if (d?.authorizationServerUrl) return re(this.serverName, `Returning cached discovery state (authServer: ${Zr(d.authorizationServerUrl)})`), 
    {
      authorizationServerUrl: d.authorizationServerUrl,
      resourceMetadataUrl: d.resourceMetadataUrl,
      resourceMetadata: d.resourceMetadata,
      authorizationServerMetadata: d.authorizationServerMetadata
    };
    return;
  }
  async refreshAuthorization(e) {
    let t = od(this.serverName, this.serverConfig), r = kv();
    await se().mkdir(r);
    let n = t.replace(/[^a-zA-Z0-9]/g, "_"), d = Je(r, `mcp-refresh-${n}.lock`), h;
    for (let s = 0; s < he; s++) try {
      re(this.serverName, `Acquiring refresh lock (attempt ${s + 1})`), h = await Ja(d, {
        realpath: !1,
        stale: 6e4,
        update: 5e3,
        onCompromised: () => {
          re(this.serverName, "Refresh lock was compromised");
        }
      }), re(this.serverName, "Acquired refresh lock");
      break;
    } catch (k) {
      let v = E(k);
      if (v === "ELOCKED") {
        re(this.serverName, `Refresh lock held by another process, waiting (attempt ${s + 1}/${he})`), 
        await J(1e3 + Math.random() * 1e3);
        continue;
      }
      re(this.serverName, `Failed to acquire refresh lock: ${v}; skipping refresh`);
      return;
    }
    if (!h) {
      re(this.serverName, `Could not acquire refresh lock after ${he} retries; skipping refresh`);
      return;
    }
    try {
      WK();
      let v = (await Xn().readAsync())?.mcpOAuth?.[t];
      if (v) {
        let S = v.expiresAt != null ? (v.expiresAt - Date.now()) / 1e3 : void 0;
        if (v.accessToken && (S == null || S > 300)) return re(this.serverName, S != null ? `Another process already refreshed tokens (expires in ${Math.floor(S)}s)` : "Another process already refreshed tokens (no expiration)"), 
        {
          access_token: v.accessToken,
          refresh_token: v.refreshToken,
          expires_in: S,
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
    let t = (await Xn().readAsync())?.mcpOAuth?.[od(this.serverName, this.serverConfig)], r = t?.expiresAt != null ? (t.expiresAt - Date.now()) / 1e3 : void 0;
    if (t?.accessToken && (r == null || r > 300)) {
      re(this.serverName, "Another process landed fresh tokens; using those");
      let n = {
        access_token: t.accessToken,
        refresh_token: t.refreshToken,
        expires_in: r,
        scope: t.scope,
        token_type: "Bearer"
      };
      return {
        tokenData: t,
        freshTokens: n
      };
    }
    return {
      tokenData: t,
      freshTokens: void 0
    };
  }
  async _doRefresh(e) {
    this._presented.record(e);
    let t = 3, r = Xv(this.serverConfig), n = (d, h) => {
      i(d === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
        transportType: c(this.serverConfig.type),
        ...r && {
          mcpServerBaseUrl: r
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
        let s = fle(this.serverName, this.serverConfig, Czt()), k = this._metadata;
        if (!k) {
          let S = await this.discoveryState();
          if (S?.authorizationServerMetadata) k = S.authorizationServerMetadata; else if (S?.authorizationServerUrl) re(this.serverName, `Re-discovering metadata from persisted auth server URL: ${Zr(S.authorizationServerUrl)}`), 
          k = await mSt(S.authorizationServerUrl, {
            fetchFn: s
          });
        }
        if (!k) k = await ae(this.serverName, this.serverConfig.url, {
          configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl,
          fetchFn: s
        });
        if (!k) {
          re(this.serverName, "Failed to discover OAuth metadata"), n("failure", "metadata_discovery_failed"), 
          m("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed");
          return;
        }
        if (this._metadata = k, h = await this.clientInformation(), !h) {
          re(this.serverName, "No client information available"), n("failure", "no_client_info"), 
          m("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info");
          return;
        }
        let v = await Z2r(new URL(this.serverConfig.url), {
          metadata: k,
          clientInformation: h,
          refreshToken: e,
          resource: new URL(this.serverConfig.url),
          fetchFn: s
        });
        if (v) return re(this.serverName, "Token refresh successful"), await this.saveTokens(v), 
        n("success"), g("mcp_oauth_refresh"), v;
        re(this.serverName, "Token refresh returned no tokens"), n("failure", "no_tokens_returned"), 
        m("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens");
        return;
      } catch (s) {
        if (s instanceof aet) {
          re(this.serverName, `Token refresh failed with invalid_grant: ${s.message}`);
          let {freshTokens: A} = await this.readConcurrentRefreshWinner();
          if (A) return f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), A;
          re(this.serverName, "No valid tokens in storage, clearing stored tokens"), n("failure", "invalid_grant"), 
          m("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant"), await this.invalidateCredentials("tokens"), 
          MHe.emit(this.serverName);
          return;
        }
        if (s instanceof Dx && (s.errorCode === "invalid_client" || s.errorCode === "unauthorized_client")) {
          re(this.serverName, "Token refresh failed: DCR client expired or invalid; clearing stored client registration");
          let {tokenData: A, freshTokens: R} = await this.readConcurrentRefreshWinner();
          if (R) return f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner"), R;
          if (A?.clientId && h && A.clientId !== h.client_id) {
            re(this.serverName, "Another process re-registered client; preserving"), n("failure", "concurrent_reregister"), 
            f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister");
            return;
          }
          n("failure", s.errorCode === "unauthorized_client" ? "unauthorized_client" : "invalid_client"), 
          m("mcp_oauth_refresh", s.errorCode === "unauthorized_client" ? "mcp_oauth_refresh_unauthorized_client" : "mcp_oauth_refresh_invalid_client"), 
          await this.invalidateCredentials("all"), MHe.emit(this.serverName);
          return;
        }
        if (fe(s)) {
          re(this.serverName, `Token refresh failed: token response rejected by SDK schema: ${l(s)}`), 
          n("failure", "token_response_schema_rejected"), m("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected");
          return;
        }
        let k = s instanceof f8e, v = s instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(s.message), S = s instanceof xHe || s instanceof Lzt || s instanceof Nzt, y = v || S || k;
        if (!y || d >= t) {
          re(this.serverName, `Token refresh failed: ${HD(s, this.serverConfig.url)}`), n("failure", y ? "transient_retries_exhausted" : "request_failed"), 
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

async function l4s() {
  let e = process.env.MCP_CLIENT_SECRET;
  if (e) return e;
  if (!process.stdin.isTTY) throw Error("No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.");
  return new Promise((t, r) => {
    process.stderr.write("Enter OAuth client secret: "), process.stdin.setRawMode?.(!0);
    let n = "", d = h => {
      let s = h.toString();
      if (s === `\n` || s === "\r") process.stdin.setRawMode?.(!1), process.stdin.removeListener("data", d), 
      process.stderr.write(`\n`), t(n); else if (s === "\x03") process.stdin.setRawMode?.(!1), 
      process.stdin.removeListener("data", d), r(Error("Cancelled")); else if (s === "\x7f" || s === "\b") n = n.slice(0, -1); else n += s;
    };
    process.stdin.on("data", d);
  });
}

async function d4s(e, t, r) {
  let n = od(e, t);
  try {
    return await Xn().mutate(d => ({
      ...d,
      mcpOAuthClientConfig: {
        ...d.mcpOAuthClientConfig,
        [n]: {
          clientSecret: r
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

async function c4s(e, t) {
  let r = od(e, t);
  await Xn().mutate(n => {
    if (!n.mcpOAuthClientConfig?.[r]) return n;
    let d = {
      ...n.mcpOAuthClientConfig
    };
    return delete d[r], {
      ...n,
      mcpOAuthClientConfig: d
    };
  });
}

async function IYo(e, t) {
  let n = await Xn().readAsync(), d = od(e, t);
  return n?.mcpOAuthClientConfig?.[d];
}

function xe(e) {
  if (!e) return;
  if ("scope" in e && typeof e.scope === "string") return e.scope;
  if ("default_scope" in e && typeof e.default_scope === "string") return e.default_scope;
  return;
}

function I1s(e, t) {
  if (e !== null && e.split(" ").includes("offline_access")) return e;
  if (!t?.scopes_supported?.includes("offline_access")) return e;
  return e === null ? "offline_access" : `${e} offline_access`;
}

var ot = [ "login.microsoftonline.com", "login.microsoftonline.us", "login.partner.microsoftonline.cn", "login.chinacloudapi.cn" ], at = [ ".b2clogin.com", ".ciamlogin.com" ];

function O1s(e) {
  try {
    let t = (typeof e === "string" ? new URL(e) : e).hostname;
    return ot.includes(t) || at.some(r => t.endsWith(r));
  } catch {
    return !1;
  }
}

export { x1s, P1s, CYo, RYo, Czt, xYo, Rzt, t4s, n4s, r4s, j7n, o4s, s4s, i4s, PYo, a4s, q_n, xzt, l4s, d4s, c4s, IYo, I1s, O1s };
