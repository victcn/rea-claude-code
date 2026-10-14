// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { gut } from "./chunk-nj8cgz8s.js";

import { DP } from "./chunk-w8hcbtxg.js";

import { pOe, og } from "./chunk-w4hwgefc.js";

import { C } from "./chunk-m8ez8fhk.js";

var _wo = C(function(B) {
  var N = og(), g = (e, r) => (t, i) => async n => {
    let {response: o} = await t(n);
    try {
      let s = await r(o, e);
      return {
        response: o,
        output: s
      };
    } catch (s) {
      if (Object.defineProperty(s, "$response", {
        value: o,
        enumerable: !1,
        writable: !1,
        configurable: !1
      }), !("$metadata" in s)) {
        try {
          s.message += `\n  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
        } catch (d) {
          if (!i.logger || i.logger?.constructor?.name === "NoOpLogger") console.warn("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object."); else i.logger?.warn?.("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");
        }
        if (typeof s.$responseBodyText < "u") {
          if (s.$response) s.$response.body = s.$responseBodyText;
        }
        try {
          if (N.HttpResponse.isInstance(o)) {
            let {headers: d = {}} = o, a = Object.entries(d);
            s.$metadata = {
              httpStatusCode: o.statusCode,
              requestId: m(/^x-[\w-]+-request-?id$/, a),
              extendedRequestId: m(/^x-[\w-]+-id-2$/, a),
              cfId: m(/^x-[\w-]+-cf-id$/, a)
            };
          }
        } catch (d) {}
      }
      throw s;
    }
  }, m = (e, r) => (r.find(([t]) => t.match(e)) || [ void 0, void 0 ])[1], S = (e, r) => (t, i) => async n => {
    let o = e, s = i.endpointV2?.url && o.urlParser ? async () => o.urlParser(i.endpointV2.url) : o.endpoint;
    if (!s) throw Error("No valid endpoint provider available.");
    let c = await r(n.input, {
      ...e,
      endpoint: s
    });
    return t({
      ...n,
      request: c
    });
  }, A = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: [ "DESERIALIZER" ],
    override: !0
  }, v = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: [ "SERIALIZER" ],
    override: !0
  };
  function j(e, r, t) {
    return {
      applyToStack: i => {
        i.add(g(e, t), A), i.add(S(e, r), v);
      }
    };
  }
  B.deserializerMiddleware = g;
  B.deserializerMiddlewareOption = A;
  B.getSerdePlugin = j;
  B.serializerMiddleware = S;
  B.serializerMiddlewareOption = v;
});

var rS = C(function(z) {
  var f = pOe(), x = DP(), U = _wo(), w = og(), V = gut(), G = e => e[f.SMITHY_CONTEXT_KEY] || (e[f.SMITHY_CONTEXT_KEY] = {}), Z = (e, r) => {
    if (!r || r.length === 0) return e;
    let t = [];
    for (let i of r) for (let n of e) if (n.schemeId.split("#")[1] === i) t.push(n);
    for (let i of e) if (!t.find(({schemeId: n}) => n === i.schemeId)) t.push(i);
    return t;
  };
  function Q(e) {
    let r = new Map;
    for (let t of e) r.set(t.schemeId, t);
    return r;
  }
  var y = (e, r) => (t, i) => async n => {
    let o = e.httpAuthSchemeProvider(await r.httpAuthSchemeParametersProvider(e, i, n.input)), s = e.authSchemePreference ? await e.authSchemePreference() : [], c = Z(o, s), d = Q(e.httpAuthSchemes), a = x.getSmithyContext(i), p = [];
    for (let u of c) {
      let h = d.get(u.schemeId);
      if (!h) {
        p.push(`HttpAuthScheme \`${u.schemeId}\` was not enabled for this service.`);
        continue;
      }
      let l = h.identityProvider(await r.identityProviderConfigProvider(e));
      if (!l) {
        p.push(`HttpAuthScheme \`${u.schemeId}\` did not have an IdentityProvider configured.`);
        continue;
      }
      let {identityProperties: K = {}, signingProperties: k = {}} = u.propertiesExtractor?.(e, i) || {};
      u.identityProperties = Object.assign(u.identityProperties || {}, K), u.signingProperties = Object.assign(u.signingProperties || {}, k), 
      a.selectedHttpAuthScheme = {
        httpAuthOption: u,
        identity: await l(u.identityProperties),
        signer: h.signer
      };
      break;
    }
    if (!a.selectedHttpAuthScheme) throw Error(p.join(`\n`));
    return t(n);
  }, M = {
    step: "serialize",
    tags: [ "HTTP_AUTH_SCHEME" ],
    name: "httpAuthSchemeMiddleware",
    override: !0,
    relation: "before",
    toMiddleware: "endpointV2Middleware"
  }, J = (e, {httpAuthSchemeParametersProvider: r, identityProviderConfigProvider: t}) => ({
    applyToStack: i => {
      i.addRelativeTo(y(e, {
        httpAuthSchemeParametersProvider: r,
        identityProviderConfigProvider: t
      }), M);
    }
  }), P = {
    step: "serialize",
    tags: [ "HTTP_AUTH_SCHEME" ],
    name: "httpAuthSchemeMiddleware",
    override: !0,
    relation: "before",
    toMiddleware: U.serializerMiddlewareOption.name
  }, W = (e, {httpAuthSchemeParametersProvider: r, identityProviderConfigProvider: t}) => ({
    applyToStack: i => {
      i.addRelativeTo(y(e, {
        httpAuthSchemeParametersProvider: r,
        identityProviderConfigProvider: t
      }), P);
    }
  }), ee = e => r => {
    throw r;
  }, te = (e, r) => {}, E = e => (r, t) => async i => {
    if (!w.HttpRequest.isInstance(i.request)) return r(i);
    let o = x.getSmithyContext(t).selectedHttpAuthScheme;
    if (!o) throw Error("No HttpAuthScheme was selected: unable to sign request");
    let {httpAuthOption: {signingProperties: s = {}}, identity: c, signer: d} = o, a = await r({
      ...i,
      request: await d.sign(i.request, c, s)
    }).catch((d.errorHandler || ee)(s));
    return (d.successHandler || te)(a.response, s), a;
  }, H = {
    step: "finalizeRequest",
    tags: [ "HTTP_SIGNING" ],
    name: "httpSigningMiddleware",
    aliases: [ "apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware" ],
    override: !0,
    relation: "after",
    toMiddleware: "retryMiddleware"
  }, re = e => ({
    applyToStack: r => {
      r.addRelativeTo(E(), H);
    }
  }), ie = e => {
    if (typeof e === "function") return e;
    let r = Promise.resolve(e);
    return () => r;
  }, ne = async (e, r, t, i = o => o, ...n) => {
    let o = new e(t);
    return o = i(o) ?? o, await r.send(o, ...n);
  };
  function se(e, r, t, i, n) {
    return async function*(s, c, ...d) {
      let a = c, p = s.startingToken ?? a[t], u = !0, h;
      while (u) {
        if (a[t] = p, n) a[n] = a[n] ?? s.pageSize;
        if (s.client instanceof e) h = await ne(r, s.client, c, s.withCommand, ...d); else throw Error(`Invalid client, expected instance of ${e.name}`);
        yield h;
        let l = p;
        p = oe(h, i), u = !!(p && (!s.stopOnSameToken || p !== l));
      }
      return;
    };
  }
  var oe = (e, r) => {
    let t = e, i = r.split(".");
    for (let n of i) {
      if (!t || typeof t !== "object") return;
      t = t[n];
    }
    return t;
  };
  function ae(e, r, t) {
    if (!e.__smithy_context) e.__smithy_context = {
      features: {}
    }; else if (!e.__smithy_context.features) e.__smithy_context.features = {};
    e.__smithy_context.features[r] = t;
  }
  class I {
    authSchemes=new Map;
    constructor(e) {
      for (let [r, t] of Object.entries(e)) if (t !== void 0) this.authSchemes.set(r, t);
    }
    getIdentityProvider(e) {
      return this.authSchemes.get(e);
    }
  }
  class q {
    async sign(e, r, t) {
      if (!t) throw Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
      if (!t.name) throw Error("request could not be signed with `apiKey` since the `name` signer property is missing");
      if (!t.in) throw Error("request could not be signed with `apiKey` since the `in` signer property is missing");
      if (!r.apiKey) throw Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
      let i = w.HttpRequest.clone(e);
      if (t.in === f.HttpApiKeyAuthLocation.QUERY) i.query[t.name] = r.apiKey; else if (t.in === f.HttpApiKeyAuthLocation.HEADER) i.headers[t.name] = t.scheme ? `${t.scheme} ${r.apiKey}` : r.apiKey; else throw Error("request can only be signed with `apiKey` locations `query` or `header`, but found: `" + t.in + "`");
      return i;
    }
  }
  class R {
    async sign(e, r, t) {
      let i = w.HttpRequest.clone(e);
      if (!r.token) throw Error("request could not be signed with `token` since the `token` is not defined");
      return i.headers.Authorization = `Bearer ${r.token}`, i;
    }
  }
  class O {
    async sign(e, r, t) {
      return e;
    }
  }
  var _ = e => function(t) {
    return b(t) && t.expiration.getTime() - Date.now() < e;
  }, T = 3e5, de = _(T), b = e => e.expiration !== void 0, ce = (e, r, t) => {
    if (e === void 0) return;
    let i = typeof e !== "function" ? async () => Promise.resolve(e) : e, n, o, s, c = !1, d = async a => {
      if (!o) o = i(a);
      try {
        n = await o, s = !0, c = !1;
      } finally {
        o = void 0;
      }
      return n;
    };
    if (r === void 0) return async a => {
      if (!s || a?.forceRefresh) n = await d(a);
      return n;
    };
    return async a => {
      if (!s || a?.forceRefresh) n = await d(a);
      if (c) return n;
      if (!t(n)) return c = !0, n;
      if (r(n)) return await d(a), n;
      return n;
    };
  };
  Object.defineProperty(z, "requestBuilder", {
    enumerable: !0,
    get: function() {
      return V.requestBuilder;
    }
  });
  z.DefaultIdentityProviderConfig = I;
  z.EXPIRATION_MS = T;
  z.HttpApiKeyAuthSigner = q;
  z.HttpBearerAuthSigner = R;
  z.NoAuthSigner = O;
  z.createIsIdentityExpiredFunction = _;
  z.createPaginator = se;
  z.doesIdentityRequireRefresh = b;
  z.getHttpAuthSchemeEndpointRuleSetPlugin = J;
  z.getHttpAuthSchemePlugin = W;
  z.getHttpSigningPlugin = re;
  z.getSmithyContext = G;
  z.httpAuthSchemeEndpointRuleSetMiddlewareOptions = M;
  z.httpAuthSchemeMiddleware = y;
  z.httpAuthSchemeMiddlewareOptions = P;
  z.httpSigningMiddleware = E;
  z.httpSigningMiddlewareOptions = H;
  z.isIdentityExpired = de;
  z.memoizeIdentityProvider = ce;
  z.normalizeProvider = ie;
  z.setFeature = ae;
});

export { _wo, rS };
