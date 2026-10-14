// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { SGt } from "./chunk-bbtsya2e.js";

import { yTe } from "./chunk-qjb8dzm4.js";

import { ZK, aOe } from "./chunk-djxzv16h.js";

import { o, kNt, v, M, iX, T, u, _t, A } from "./chunk-cvcg6n1z.js";

import { kG } from "./chunk-yk19sxff.js";

var d = kNt().superRefine((e, t) => {
  if (!URL.canParse(e)) return t.addIssue({
    code: ZK.custom,
    message: "URL must be parseable",
    fatal: !0
  }), kG;
}).refine(e => {
  let t = new URL(e);
  return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
}, {
  message: "URL cannot use javascript:, data:, or vbscript: scheme"
}), Z = _t({
  resource: o().url(),
  authorization_servers: T(d).optional(),
  jwks_uri: o().url().optional(),
  scopes_supported: T(o()).optional(),
  bearer_methods_supported: T(o()).optional(),
  resource_signing_alg_values_supported: T(o()).optional(),
  resource_name: o().optional(),
  resource_documentation: o().optional(),
  resource_policy_uri: o().url().optional(),
  resource_tos_uri: o().url().optional(),
  tls_client_certificate_bound_access_tokens: M().optional(),
  authorization_details_types_supported: T(o()).optional(),
  dpop_signing_alg_values_supported: T(o()).optional(),
  dpop_bound_access_tokens_required: M().optional()
}), tbn = _t({
  issuer: o(),
  authorization_endpoint: d,
  token_endpoint: d,
  registration_endpoint: d.optional(),
  scopes_supported: T(o()).optional(),
  response_types_supported: T(o()),
  response_modes_supported: T(o()).optional(),
  grant_types_supported: T(o()).optional(),
  token_endpoint_auth_methods_supported: T(o()).optional(),
  token_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
  service_documentation: d.optional(),
  revocation_endpoint: d.optional(),
  revocation_endpoint_auth_methods_supported: T(o()).optional(),
  revocation_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
  introspection_endpoint: o().optional(),
  introspection_endpoint_auth_methods_supported: T(o()).optional(),
  introspection_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
  code_challenge_methods_supported: T(o()).optional(),
  client_id_metadata_document_supported: M().optional()
}), ne = _t({
  issuer: o(),
  authorization_endpoint: d,
  token_endpoint: d,
  userinfo_endpoint: d.optional(),
  jwks_uri: d,
  registration_endpoint: d.optional(),
  scopes_supported: T(o()).optional(),
  response_types_supported: T(o()),
  response_modes_supported: T(o()).optional(),
  grant_types_supported: T(o()).optional(),
  acr_values_supported: T(o()).optional(),
  subject_types_supported: T(o()),
  id_token_signing_alg_values_supported: T(o()),
  id_token_encryption_alg_values_supported: T(o()).optional(),
  id_token_encryption_enc_values_supported: T(o()).optional(),
  userinfo_signing_alg_values_supported: T(o()).optional(),
  userinfo_encryption_alg_values_supported: T(o()).optional(),
  userinfo_encryption_enc_values_supported: T(o()).optional(),
  request_object_signing_alg_values_supported: T(o()).optional(),
  request_object_encryption_alg_values_supported: T(o()).optional(),
  request_object_encryption_enc_values_supported: T(o()).optional(),
  token_endpoint_auth_methods_supported: T(o()).optional(),
  token_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
  display_values_supported: T(o()).optional(),
  claim_types_supported: T(o()).optional(),
  claims_supported: T(o()).optional(),
  service_documentation: o().optional(),
  claims_locales_supported: T(o()).optional(),
  ui_locales_supported: T(o()).optional(),
  claims_parameter_supported: M().optional(),
  request_parameter_supported: M().optional(),
  request_uri_parameter_supported: M().optional(),
  require_request_uri_registration: M().optional(),
  op_policy_uri: d.optional(),
  op_tos_uri: d.optional(),
  client_id_metadata_document_supported: M().optional()
}), q7n = u({
  ...ne.shape,
  ...tbn.pick({
    code_challenge_methods_supported: !0
  }).shape
}), Y7n = u({
  access_token: o(),
  id_token: o().optional(),
  token_type: o(),
  expires_in: aOe().optional(),
  scope: o().optional(),
  refresh_token: o().optional()
}).strip(), X7n = u({
  error: o(),
  error_description: o().optional(),
  error_uri: o().optional()
}), F = d.optional().or(A("").transform(() => {})), ae = u({
  redirect_uris: T(d),
  token_endpoint_auth_method: o().optional(),
  grant_types: T(o()).optional(),
  response_types: T(o()).optional(),
  client_name: o().optional(),
  client_uri: d.optional(),
  logo_uri: F,
  scope: o().optional(),
  contacts: T(o()).optional(),
  tos_uri: F,
  policy_uri: o().optional(),
  jwks_uri: d.optional(),
  jwks: iX().optional(),
  software_id: o().optional(),
  software_version: o().optional(),
  software_statement: o().optional()
}).strip(), se = u({
  client_id: o(),
  client_secret: o().optional(),
  client_id_issued_at: v().optional(),
  client_secret_expires_at: v().optional()
}).strip(), J = ae.merge(se), Ce = u({
  error: o(),
  error_description: o().optional()
}).strip(), ke = u({
  token: o(),
  token_type_hint: o().optional()
}).strip();

function E(e) {
  let t = typeof e === "string" ? new URL(e) : new URL(e.href);
  return t.hash = "", t;
}

function Y({requestedResource: e, configuredResource: t}) {
  let r = typeof e === "string" ? new URL(e) : new URL(e.href), n = typeof t === "string" ? new URL(t) : new URL(t.href);
  if (r.origin !== n.origin) return !1;
  if (r.pathname.length < n.pathname.length) return !1;
  let a = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/", i = n.pathname.endsWith("/") ? n.pathname : n.pathname + "/";
  return a.startsWith(i);
}

class Dx extends Error {
  constructor(e, t) {
    super(e);
    this.errorUri = t, this.name = this.constructor.name;
  }
  toResponseObject() {
    let e = {
      error: this.errorCode,
      error_description: this.message
    };
    if (this.errorUri) e.error_uri = this.errorUri;
    return e;
  }
  get errorCode() {
    return this.constructor.errorCode;
  }
}

class x extends Dx {}

x.errorCode = "invalid_request";

class g extends Dx {}

g.errorCode = "invalid_client";

class aet extends Dx {}

aet.errorCode = "invalid_grant";

class w extends Dx {}

w.errorCode = "unauthorized_client";

class U extends Dx {}

U.errorCode = "unsupported_grant_type";

class R extends Dx {}

R.errorCode = "invalid_scope";

class C extends Dx {}

C.errorCode = "access_denied";

class xHe extends Dx {}

xHe.errorCode = "server_error";

class Lzt extends Dx {}

Lzt.errorCode = "temporarily_unavailable";

class k extends Dx {}

k.errorCode = "unsupported_response_type";

class b extends Dx {}

b.errorCode = "unsupported_token_type";

class S extends Dx {}

S.errorCode = "invalid_token";

class L extends Dx {}

L.errorCode = "method_not_allowed";

class Nzt extends Dx {}

Nzt.errorCode = "too_many_requests";

class z extends Dx {}

z.errorCode = "invalid_client_metadata";

class P extends Dx {}

P.errorCode = "insufficient_scope";

class O extends Dx {}

O.errorCode = "invalid_target";

var K = {
  [x.errorCode]: x,
  [g.errorCode]: g,
  [aet.errorCode]: aet,
  [w.errorCode]: w,
  [U.errorCode]: U,
  [R.errorCode]: R,
  [C.errorCode]: C,
  [xHe.errorCode]: xHe,
  [Lzt.errorCode]: Lzt,
  [k.errorCode]: k,
  [b.errorCode]: b,
  [S.errorCode]: S,
  [L.errorCode]: L,
  [Nzt.errorCode]: Nzt,
  [z.errorCode]: z,
  [P.errorCode]: P,
  [O.errorCode]: O
};

class Lx extends Error {
  constructor(e) {
    super(e ?? "Unauthorized");
  }
}

function ie(e) {
  return [ "client_secret_basic", "client_secret_post", "none" ].includes(e);
}

var j = "code", W = "S256";

function ce(e, t) {
  let r = e.client_secret !== void 0;
  if ("token_endpoint_auth_method" in e && e.token_endpoint_auth_method && ie(e.token_endpoint_auth_method) && (t.length === 0 || t.includes(e.token_endpoint_auth_method))) return e.token_endpoint_auth_method;
  if (t.length === 0) return r ? "client_secret_basic" : "none";
  if (r && t.includes("client_secret_basic")) return "client_secret_basic";
  if (r && t.includes("client_secret_post")) return "client_secret_post";
  if (t.includes("none")) return "none";
  return r ? "client_secret_post" : "none";
}

function ue(e, t, r, n) {
  let {client_id: a, client_secret: i} = t;
  switch (e) {
   case "client_secret_basic":
    le(a, i, r);
    return;

   case "client_secret_post":
    pe(a, i, n);
    return;

   case "none":
    de(a, n);
    return;

   default:
    throw Error(`Unsupported client authentication method: ${e}`);
  }
}

function le(e, t, r) {
  if (!t) throw Error("client_secret_basic authentication requires a client_secret");
  let n = btoa(`${e}:${t}`);
  r.set("Authorization", `Basic ${n}`);
}

function pe(e, t, r) {
  if (r.set("client_id", e), t) r.set("client_secret", t);
}

function de(e, t) {
  t.set("client_id", e);
}

async function X(e) {
  let t = e instanceof Response ? e.status : void 0, r = e instanceof Response ? await e.text() : e;
  try {
    let n = X7n.parse(JSON.parse(r)), {error: a, error_description: i, error_uri: c} = n;
    return new (K[a] || xHe)(i || "", c);
  } catch (n) {
    let a = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${n}. Raw body: ${r}`;
    return new xHe(a);
  }
}

async function ine(e, t) {
  try {
    return await H(e, t);
  } catch (r) {
    if (r instanceof g || r instanceof w) return await (e.invalidateCredentials?.("all")), 
    await H(e, t); else if (r instanceof aet) return await (e.invalidateCredentials?.("tokens")), 
    await H(e, t);
    throw r;
  }
}

async function H(e, {serverUrl: t, authorizationCode: r, scope: n, resourceMetadataUrl: a, fetchFn: i}) {
  let c = await (e.discoveryState?.()), s, l, p, h = a;
  if (!h && c?.resourceMetadataUrl) h = new URL(c.resourceMetadataUrl);
  if (c?.authorizationServerUrl) {
    if (l = c.authorizationServerUrl, s = c.resourceMetadata, p = c.authorizationServerMetadata ?? await mSt(l, {
      fetchFn: i
    }), !s) try {
      s = await J7n(t, {
        resourceMetadataUrl: h
      }, i);
    } catch {}
    if (p !== c.authorizationServerMetadata || s !== c.resourceMetadata) await (e.saveDiscoveryState?.({
      authorizationServerUrl: String(l),
      resourceMetadataUrl: h?.toString(),
      resourceMetadata: s,
      authorizationServerMetadata: p
    }));
  } else {
    let _ = await J2r(t, {
      resourceMetadataUrl: h,
      fetchFn: i
    });
    l = _.authorizationServerUrl, p = _.authorizationServerMetadata, s = _.resourceMetadata, 
    await (e.saveDiscoveryState?.({
      authorizationServerUrl: String(l),
      resourceMetadataUrl: h?.toString(),
      resourceMetadata: s,
      authorizationServerMetadata: p
    }));
  }
  let m = await he(t, e, s), V = n || s?.scopes_supported?.join(" ") || e.clientMetadata.scope, f = await Promise.resolve(e.clientInformation());
  if (!f) {
    if (r !== void 0) throw Error("Existing OAuth client information is required when exchanging an authorization code");
    let _ = p?.client_id_metadata_document_supported === !0, y = e.clientMetadataUrl;
    if (y && !_e(y)) throw new z(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${y}`);
    if (_ && y) f = {
      client_id: y
    }, await (e.saveClientInformation?.(f)); else {
      if (!e.saveClientInformation) throw Error("OAuth client information must be saveable for dynamic registration");
      let B = await ye(l, {
        metadata: p,
        clientMetadata: e.clientMetadata,
        scope: V,
        fetchFn: i
      });
      await e.saveClientInformation(B), f = B;
    }
  }
  let ee = !e.redirectUrl;
  if (r !== void 0 || ee) {
    let _ = await me(e, l, {
      metadata: p,
      resource: m,
      authorizationCode: r,
      fetchFn: i
    });
    return await e.saveTokens(_), "AUTHORIZED";
  }
  let N = await e.tokens();
  if (N?.refresh_token) try {
    let _ = await Z2r(l, {
      metadata: p,
      clientInformation: f,
      refreshToken: N.refresh_token,
      resource: m,
      addClientAuthentication: e.addClientAuthentication,
      fetchFn: i
    });
    return await e.saveTokens(_), "AUTHORIZED";
  } catch (_) {
    if (!(_ instanceof Dx) || _ instanceof xHe) ; else throw _;
  }
  let te = e.state ? await e.state() : void 0, {authorizationUrl: re, codeVerifier: oe} = await Q2r(l, {
    metadata: p,
    clientInformation: f,
    state: te,
    redirectUrl: e.redirectUrl,
    scope: V,
    resource: m
  });
  return await e.saveCodeVerifier(oe), await e.redirectToAuthorization(re), "REDIRECT";
}

function _e(e) {
  if (!e) return !1;
  try {
    let t = new URL(e);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return !1;
  }
}

async function he(e, t, r) {
  let n = E(e);
  if (t.validateResourceURL) return await t.validateResourceURL(n, r?.resource);
  if (!r) return;
  if (!Y({
    requestedResource: n,
    configuredResource: r.resource
  })) throw Error(`Protected resource ${r.resource} does not match expected ${n} (or origin)`);
  return new URL(r.resource);
}

function Qke(e) {
  let t = e.headers.get("WWW-Authenticate");
  if (!t) return {};
  let [r, n] = t.split(" ");
  if (r.toLowerCase() !== "bearer" || !n) return {};
  let a = q(e, "resource_metadata") || void 0, i;
  if (a) try {
    i = new URL(a);
  } catch {}
  let c = q(e, "scope") || void 0, s = q(e, "error") || void 0;
  return {
    resourceMetadataUrl: i,
    scope: c,
    error: s
  };
}

function q(e, t) {
  let r = e.headers.get("WWW-Authenticate");
  if (!r) return null;
  let n = new RegExp(`${t}=(?:"([^"]+)"|([^\\s,]+))`), a = r.match(n);
  if (a) return a[1] || a[2];
  return null;
}

async function J7n(e, t, r = fetch) {
  let n = await we(e, "oauth-protected-resource", r, {
    protocolVersion: t?.protocolVersion,
    metadataUrl: t?.resourceMetadataUrl
  });
  if (!n || n.status === 404) throw await (n?.body?.cancel()), Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
  if (!n.ok) throw await (n.body?.cancel()), Error(`HTTP ${n.status} trying to load well-known OAuth protected resource metadata.`);
  return Z.parse(await n.json());
}

async function I(e, t, r = fetch) {
  try {
    return await r(e, {
      headers: t
    });
  } catch (n) {
    if (n instanceof TypeError) if (t) return I(e, void 0, r); else return;
    throw n;
  }
}

function fe(e, t = "", r = {}) {
  if (t.endsWith("/")) t = t.slice(0, -1);
  return r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}

async function Q(e, t, r = fetch) {
  return await I(e, {
    "MCP-Protocol-Version": t
  }, r);
}

function ge(e, t) {
  return !e || e.status >= 400 && e.status < 500 && t !== "/";
}

async function we(e, t, r, n) {
  let a = new URL(e), i = n?.protocolVersion ?? yTe, c;
  if (n?.metadataUrl) c = new URL(n.metadataUrl); else {
    let l = fe(t, a.pathname);
    c = new URL(l, n?.metadataServerUrl ?? a), c.search = a.search;
  }
  let s = await Q(c, i, r);
  if (!n?.metadataUrl && ge(s, a.pathname)) {
    let l = new URL(`/.well-known/${t}`, a);
    s = await Q(l, i, r);
  }
  return s;
}

function ze(e) {
  let t = typeof e === "string" ? new URL(e) : e, r = t.pathname !== "/", n = [];
  if (!r) return n.push({
    url: new URL("/.well-known/oauth-authorization-server", t.origin),
    type: "oauth"
  }), n.push({
    url: new URL("/.well-known/openid-configuration", t.origin),
    type: "oidc"
  }), n;
  let a = t.pathname;
  if (a.endsWith("/")) a = a.slice(0, -1);
  return n.push({
    url: new URL(`/.well-known/oauth-authorization-server${a}`, t.origin),
    type: "oauth"
  }), n.push({
    url: new URL(`/.well-known/openid-configuration${a}`, t.origin),
    type: "oidc"
  }), n.push({
    url: new URL(`${a}/.well-known/openid-configuration`, t.origin),
    type: "oidc"
  }), n;
}

async function mSt(e, {fetchFn: t = fetch, protocolVersion: r = yTe} = {}) {
  let n = {
    "MCP-Protocol-Version": r,
    Accept: "application/json"
  }, a = ze(e);
  for (let {url: i, type: c} of a) {
    let s = await I(i, n, t);
    if (!s) continue;
    if (!s.ok) {
      if (await (s.body?.cancel()), s.status >= 400 && s.status < 500) continue;
      throw Error(`HTTP ${s.status} trying to load ${c === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${i}`);
    }
    if (c === "oauth") return tbn.parse(await s.json()); else return q7n.parse(await s.json());
  }
  return;
}

async function J2r(e, t) {
  let r, n;
  try {
    if (r = await J7n(e, {
      resourceMetadataUrl: t?.resourceMetadataUrl
    }, t?.fetchFn), r.authorization_servers && r.authorization_servers.length > 0) n = r.authorization_servers[0];
  } catch {}
  if (!n) n = String(new URL("/", e));
  let a = await mSt(n, {
    fetchFn: t?.fetchFn
  });
  return {
    authorizationServerUrl: n,
    authorizationServerMetadata: a,
    resourceMetadata: r
  };
}

async function Q2r(e, {metadata: t, clientInformation: r, redirectUrl: n, scope: a, state: i, resource: c}) {
  let s;
  if (t) {
    if (s = new URL(t.authorization_endpoint), !t.response_types_supported.includes(j)) throw Error(`Incompatible auth server: does not support response type ${j}`);
    if (t.code_challenge_methods_supported && !t.code_challenge_methods_supported.includes(W)) throw Error(`Incompatible auth server: does not support code challenge method ${W}`);
  } else s = new URL("/authorize", e);
  let l = await SGt(), {code_verifier: p, code_challenge: h} = l;
  if (s.searchParams.set("response_type", j), s.searchParams.set("client_id", r.client_id), 
  s.searchParams.set("code_challenge", h), s.searchParams.set("code_challenge_method", W), 
  s.searchParams.set("redirect_uri", String(n)), i) s.searchParams.set("state", i);
  if (a) s.searchParams.set("scope", a);
  if (a?.includes("offline_access")) s.searchParams.append("prompt", "consent");
  if (c) s.searchParams.set("resource", c.href);
  return {
    authorizationUrl: s,
    codeVerifier: p
  };
}

function G(e, t, r) {
  return new URLSearchParams({
    grant_type: "authorization_code",
    code: e,
    code_verifier: t,
    redirect_uri: String(r)
  });
}

async function D(e, {metadata: t, tokenRequestParams: r, clientInformation: n, addClientAuthentication: a, resource: i, fetchFn: c}) {
  let s = t?.token_endpoint ? new URL(t.token_endpoint) : new URL("/token", e), l = new Headers({
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  });
  if (i) r.set("resource", i.href);
  if (a) await a(l, r, s, t); else if (n) {
    let h = t?.token_endpoint_auth_methods_supported ?? [], m = ce(n, h);
    ue(m, n, l, r);
  }
  let p = await (c ?? fetch)(s, {
    method: "POST",
    headers: l,
    body: r
  });
  if (!p.ok) throw await X(p);
  return Y7n.parse(await p.json());
}

async function LYo(e, {metadata: t, clientInformation: r, authorizationCode: n, codeVerifier: a, redirectUri: i, resource: c, addClientAuthentication: s, fetchFn: l}) {
  let p = G(n, a, i);
  return D(e, {
    metadata: t,
    tokenRequestParams: p,
    clientInformation: r,
    addClientAuthentication: s,
    resource: c,
    fetchFn: l
  });
}

async function Z2r(e, {metadata: t, clientInformation: r, refreshToken: n, resource: a, addClientAuthentication: i, fetchFn: c}) {
  let s = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: n
  }), l = await D(e, {
    metadata: t,
    tokenRequestParams: s,
    clientInformation: r,
    addClientAuthentication: i,
    resource: a,
    fetchFn: c
  });
  return {
    refresh_token: n,
    ...l
  };
}

async function me(e, t, {metadata: r, resource: n, authorizationCode: a, fetchFn: i} = {}) {
  let c = e.clientMetadata.scope, s;
  if (e.prepareTokenRequest) s = await e.prepareTokenRequest(c);
  if (!s) {
    if (!a) throw Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!e.redirectUrl) throw Error("redirectUrl is required for authorization_code flow");
    let p = await e.codeVerifier();
    s = G(a, p, e.redirectUrl);
  }
  let l = await e.clientInformation();
  return D(t, {
    metadata: r,
    tokenRequestParams: s,
    clientInformation: l ?? void 0,
    addClientAuthentication: e.addClientAuthentication,
    resource: n,
    fetchFn: i
  });
}

async function ye(e, {metadata: t, clientMetadata: r, scope: n, fetchFn: a}) {
  let i;
  if (t) {
    if (!t.registration_endpoint) throw Error("Incompatible auth server: does not support dynamic client registration");
    i = new URL(t.registration_endpoint);
  } else i = new URL("/register", e);
  let c = await (a ?? fetch)(i, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...r,
      ...n !== void 0 ? {
        scope: n
      } : {}
    })
  });
  if (!c.ok) throw await X(c);
  return J.parse(await c.json());
}

export { tbn, q7n, Y7n, X7n, Dx, aet, xHe, Lzt, Nzt, Lx, ine, Qke, J7n, mSt, J2r, Q2r, LYo, Z2r };
