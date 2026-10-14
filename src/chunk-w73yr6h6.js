// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { twe } from "./chunk-gmq0qwep.js";

import { OP } from "./chunk-3yeje51y.js";

import { cT } from "./chunk-fzpaq6a9.js";

import "./chunk-0xf5tvmq.js";

import { PMt } from "./chunk-fc3gaqkp.js";

import "./chunk-r36nxycs.js";

import { YT } from "./chunk-xsrp0h3z.js";

import { f3e } from "./chunk-vnxjpmqe.js";

import "./chunk-qcf34wnk.js";

import "./chunk-w8hcbtxg.js";

import { og } from "./chunk-w4hwgefc.js";

import { aEe } from "./chunk-shz68fkm.js";

import { Jn, Hu } from "./chunk-b0z4bv3v.js";

import { we } from "./chunk-m8ez8fhk.js";

var d = e => (d = Array.isArray, d(e)), A = d;

var I = Symbol.for("brand.privateNullableHeaders");

function* M(e) {
  if (!e) return;
  if (I in e) {
    let {values: n, nulls: o} = e;
    yield* n.entries();
    for (let i of o) yield [ i, null ];
    return;
  }
  let t = !1, r;
  if (e instanceof Headers) r = e.entries(); else if (A(e)) r = e; else t = !0, r = Object.entries(e ?? {});
  for (let n of r) {
    let o = n[0];
    if (typeof o !== "string") throw TypeError("expected header name to be a string");
    let i = A(n[1]) ? n[1] : [ n[1] ], s = !1;
    for (let a of i) {
      if (a === void 0) continue;
      if (t && !s) s = !0, yield [ o, w ];
      yield [ o, a ];
    }
  }
}

var w = Symbol("clear"), Q = new Set([ "x-stainless-helper" ]), J = (e, t) => {
  let r = e ? e.split(",").map(n => n.trim()).filter(Boolean) : [];
  for (let n of t.split(",").map(o => o.trim())) if (n && !r.includes(n)) r.push(n);
  return r.join(", ");
}, E = e => {
  let t = new Headers, r = new Set;
  for (let n of e) {
    let o = new Set;
    for (let [i, s] of M(n)) {
      let a = i.toLowerCase();
      if (Q.has(a)) {
        if (s === w) continue;
        if (s === null) t.delete(i), r.add(a); else t.set(i, J(t.get(i), s)), r.delete(a);
        continue;
      }
      if (s === w || !o.has(a)) {
        if (t.delete(i), o.add(a), s === w) continue;
      }
      if (s === null) t.delete(i), r.add(a); else t.append(i, s), r.delete(a);
    }
  }
  return {
    [I]: !0,
    values: t,
    nulls: r
  };
};

var f = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};

var T = {
  off: 0,
  error: 200,
  warn: 300,
  info: 400,
  debug: 500
};

function p() {}

function b(e, t, r) {
  if (!t || T[e] > T[r]) return p; else return t[e].bind(t);
}

var Y = {
  error: p,
  warn: p,
  info: p,
  debug: p
}, v = new WeakMap;

function X(e, t) {
  let r = v.get(e);
  if (r && r[0] === t) return r[1];
  let n = {
    error: b("error", e, t),
    warn: b("warn", e, t),
    info: b("info", e, t),
    debug: b("debug", e, t)
  };
  return v.set(e, [ t, n ]), n;
}

function _(e) {
  let t = e.logger, r = e.logLevel ?? "off";
  if (!t) return Y;
  return X(t, r);
}

var H = we(OP(), 1), g = we(cT(), 1);

var k = we(aEe(), 1), N = we(og(), 1), D = we(f3e(), 1);

import ee from "assert";

var j = e => {
  if (e instanceof Error) return e;
  if (typeof e === "object" && e !== null) {
    try {
      let t = Object.prototype.toString.call(e);
      if (t === "[object Error]" || t === "[object DOMException]") {
        let r = Error(e.message, e.cause ? {
          cause: e.cause
        } : {});
        if (e.stack) r.stack = e.stack;
        if (e.cause && !r.cause) r.cause = e.cause;
        if (e.name) r.name = e.name;
        return r;
      }
    } catch {}
    try {
      return Error(JSON.stringify(e));
    } catch {}
  }
  return Error(e);
};

var te = (e, t) => import("./chunk-bjsm86dj.js").then(({createCredentialChain: r, fromEnv: n, fromNodeProviderChain: o}) => {
  let i = o({
    ...e != null ? {
      profile: e
    } : {},
    ...t != null ? {
      logger: t
    } : {},
    clientConfig: {
      ...t != null ? {
        logger: t
      } : {},
      requestHandler: new k.FetchHttpHandler({
        requestInit: s => ({
          ...s
        })
      })
    }
  });
  if (e != null) return i;
  return r(n(t != null ? {
    logger: t
  } : {}), i);
}).catch(r => {
  throw Error(`Failed to import '@aws-sdk/credential-providers'. You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicAws({ providerChainResolver })\` Original error: ${r.message}`);
}), F = async (e, t) => {
  ee(e.method, "Expected request method property to be set");
  let r;
  if (t.awsAccessKey && t.awsSecretAccessKey) r = {
    accessKeyId: t.awsAccessKey,
    secretAccessKey: t.awsSecretAccessKey,
    ...t.awsSessionToken != null && {
      sessionToken: t.awsSessionToken
    }
  }; else {
    let c = await (t.providerChainResolver ? t.providerChainResolver() : te(t.awsProfile, t.logger));
    try {
      r = await c();
    } catch (x) {
      throw new Hu({
        message: "Failed to resolve AWS credentials from the credential provider chain.",
        cause: j(x)
      });
    }
  }
  let n = new D.SignatureV4({
    service: t.serviceName,
    region: t.regionName,
    credentials: r,
    sha256: PMt
  }), o = new URL(t.url), i = !e.headers ? {} : Symbol.iterator in e.headers ? Object.fromEntries(Array.from(e.headers).map(c => [ ...c ])) : {
    ...e.headers
  };
  delete i.connection, i.host = o.host;
  let s = Object.fromEntries([ ...new Set(o.searchParams.keys()) ].map(c => [ c, o.searchParams.getAll(c) ])), a = new N.HttpRequest({
    method: e.method.toUpperCase(),
    protocol: o.protocol,
    path: o.pathname,
    query: s,
    headers: i,
    body: e.body
  });
  return (await n.sign(a)).headers;
};

var re = function(e, t, r, n) {
  if (r === "a" && !n) throw TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !n : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, S, L, ne = "aws-external-anthropic", P = () => new Jn("No AWS region or base URL found. Set `awsRegion` in the constructor, the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable, configure a `region` for your profile in `~/.aws/config`, or provide a `baseURL` / `ANTHROPIC_AWS_BASE_URL` environment variable.");

class U extends twe {
  constructor({awsRegion: e, baseURL: t, apiKey: r, awsAccessKey: n = null, awsSecretAccessKey: o = null, awsSessionToken: i = null, awsProfile: s, providerChainResolver: a = null, workspaceId: R, skipAuth: c = !1, credentials: x, config: B, profile: K, ...O} = {}) {
    let h = e ?? f("AWS_REGION") ?? f("AWS_DEFAULT_REGION"), l = t ?? f("ANTHROPIC_AWS_BASE_URL"), y;
    if (l) y = l; else if (h) y = `https://aws-external-anthropic.${h}.api.aws`; else y = void 0;
    let W = r != null;
    if (n != null !== (o != null)) throw new Jn("`awsAccessKey` and `awsSecretAccessKey` must be provided together. You provided only one.");
    let G = n != null && o != null, V = s != null, u;
    if (W) u = r; else if (!G && !V) u = f("ANTHROPIC_AWS_API_KEY") ?? void 0;
    let m = R ?? f("ANTHROPIC_AWS_WORKSPACE_ID");
    if (!m && !c) throw new Jn("No workspace ID found. Set `workspaceId` in the constructor or the `ANTHROPIC_AWS_WORKSPACE_ID` environment variable.");
    super({
      apiKey: u ?? null,
      authToken: null,
      baseURL: y,
      ...O,
      defaultHeaders: E([ O.defaultHeaders, {
        "anthropic-workspace-id": m
      } ])
    });
    if (S.add(this), this.skipAuth = !1, x != null || B != null || K != null) _(this).warn("`credentials`, `config`, and `profile` are not supported by the AWS client and were ignored. Authenticate with `apiKey` or AWS credentials (SigV4) instead.");
    this._baseURLIsExplicit = !!l, this.awsRegion = h, this.awsAccessKey = n, this.awsSecretAccessKey = o, 
    this.awsSessionToken = i, this.awsProfile = s ?? null, this.providerChainResolver = a, 
    this.workspaceId = m, this.skipAuth = c, this._useSigV4 = u == null;
    let q = {
      ...this._options,
      apiKey: u ?? null,
      baseURL: l,
      awsRegion: e,
      awsAccessKey: n,
      awsSecretAccessKey: o,
      awsSessionToken: i,
      awsProfile: s,
      providerChainResolver: a,
      workspaceId: m,
      skipAuth: c
    };
    if (this._options = q, h || l || c) this.ready = Promise.resolve(); else this.ready = this._resolveRegionFromConfig(s).then(C => {
      this.awsRegion = C, this.baseURL = `https://aws-external-anthropic.${C}.api.aws`;
    }), this.ready.catch(() => {});
  }
  _shouldResolveDefaultCredentials() {
    return !1;
  }
  withOptions(e) {
    return super.withOptions({
      awsRegion: this.awsRegion,
      ...e
    });
  }
  _resolveRegionFromConfig(e) {
    return H.loadConfig({
      ...g.NODE_REGION_CONFIG_OPTIONS,
      default: () => {
        throw P();
      }
    }, {
      ...g.NODE_REGION_CONFIG_FILE_OPTIONS,
      ...e && {
        profile: e
      }
    })();
  }
  async prepareOptions(e) {
    await super.prepareOptions(e), await this.ready;
  }
  async authHeaders(e) {
    if (this.skipAuth) return;
    if (!this._useSigV4) return super.authHeaders(e);
    return;
  }
  validateHeaders() {}
  getUserAgent() {
    return `AnthropicAws/JS ${YT}`;
  }
  backendMiddleware() {
    return [ async (e, t) => t(await re(this, S, "m", L).call(this, e)) ];
  }
}

S = new WeakSet, L = async function(t) {
  if (this.skipAuth || !this._useSigV4) return t;
  if (!this.awsRegion) throw P();
  let r = await F(t, {
    url: t.url,
    regionName: this.awsRegion,
    serviceName: ne,
    awsAccessKey: this.awsAccessKey,
    awsSecretAccessKey: this.awsSecretAccessKey,
    awsSessionToken: this.awsSessionToken,
    awsProfile: this.awsProfile,
    providerChainResolver: this.providerChainResolver,
    logger: _(this)
  });
  return {
    ...t,
    headers: E([ t.headers, r ]).values
  };
};

export { U as AnthropicAws };
