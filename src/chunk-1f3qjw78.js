// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { twe } from "./chunk-gmq0qwep.js";

import { Ljn } from "./chunk-nthdrd2d.js";

import { YT } from "./chunk-xsrp0h3z.js";

import { Jn } from "./chunk-b0z4bv3v.js";

import { we } from "./chunk-m8ez8fhk.js";

var p = e => (p = Array.isArray, p(e)), O = p;

var R = Symbol.for("brand.privateNullableHeaders");

function* F(e) {
  if (!e) return;
  if (R in e) {
    let {values: r, nulls: n} = e;
    yield* r.entries();
    for (let s of n) yield [ s, null ];
    return;
  }
  let o = !1, t;
  if (e instanceof Headers) t = e.entries(); else if (O(e)) t = e; else o = !0, t = Object.entries(e ?? {});
  for (let r of t) {
    let n = r[0];
    if (typeof n !== "string") throw TypeError("expected header name to be a string");
    let s = O(r[1]) ? r[1] : [ r[1] ], i = !1;
    for (let f of s) {
      if (f === void 0) continue;
      if (o && !i) i = !0, yield [ n, m ];
      yield [ n, f ];
    }
  }
}

var m = Symbol("clear"), G = new Set([ "x-stainless-helper" ]), H = (e, o) => {
  let t = e ? e.split(",").map(r => r.trim()).filter(Boolean) : [];
  for (let r of o.split(",").map(n => n.trim())) if (r && !t.includes(r)) t.push(r);
  return t.join(", ");
}, E = e => {
  let o = new Headers, t = new Set;
  for (let r of e) {
    let n = new Set;
    for (let [s, i] of F(r)) {
      let f = s.toLowerCase();
      if (G.has(f)) {
        if (i === m) continue;
        if (i === null) o.delete(s), t.add(f); else o.set(s, H(o.get(s), i)), t.delete(f);
        continue;
      }
      if (i === m || !n.has(f)) {
        if (o.delete(s), n.add(f), i === m) continue;
      }
      if (i === null) o.delete(s), t.add(f); else o.append(s, i), t.delete(f);
    }
  }
  return {
    [R]: !0,
    values: o,
    nulls: t
  };
};

var l = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};

var A = we(Ljn(), 1), c = function(e, o, t, r, n) {
  if (r === "m") throw TypeError("Private method is not writable");
  if (r === "a" && !n) throw TypeError("Private accessor was defined without a setter");
  if (typeof o === "function" ? e !== o || !n : !o.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? n.call(e, t) : n ? n.value = t : o.set(e, t), t;
}, a = function(e, o, t, r) {
  if (t === "a" && !r) throw TypeError("Private accessor was defined without a getter");
  if (typeof o === "function" ? e !== o || !r : !o.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r : t === "a" ? r.call(e) : r ? r.value : o.get(e);
}, C, d, b, g, u, w, v, S = "https://www.googleapis.com/auth/cloud-platform", W = "global", L = (e, o, t) => `https://claude.googleapis.com/v1alpha/projects/${e}/locations/${o}/workspaces/${t}/invoke`, D = "Set `project` or the `ANTHROPIC_GOOGLE_CLOUD_PROJECT` environment variable (or provide `baseURL`).", z = [ "apiKey", "authToken", "credentials", "config", "profile" ];

class I extends twe {
  get completions() {
    throw new Jn("The deprecated text Completions API is not available on Claude Platform on Google Cloud");
  }
  set completions(e) {}
  constructor({baseURL: e = l("ANTHROPIC_GOOGLE_CLOUD_BASE_URL"), project: o = l("ANTHROPIC_GOOGLE_CLOUD_PROJECT") ?? l("GOOGLE_CLOUD_PROJECT"), location: t = l("ANTHROPIC_GOOGLE_CLOUD_LOCATION"), workspaceId: r = l("ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID"), bearerTokenProvider: n, googleAuth: s, authClient: i, skipAuth: f = !1, ...T} = {}) {
    if (i && s) throw new Jn("The `authClient` and `googleAuth` arguments are mutually exclusive; only one can be passed at a time.");
    if (f && (n || s || i)) throw new Jn("The `skipAuth` option is mutually exclusive with `bearerTokenProvider`, `googleAuth`, and `authClient`; `skipAuth` disables authentication entirely.");
    for (let h of z) if (T[h] != null) throw new Jn(`The \`${h}\` option is not supported by AnthropicGoogleCloud; authentication uses a Google bearer token (\`bearerTokenProvider\`, \`googleAuth\`/\`authClient\`, or Application Default Credentials).`);
    if (t = t || W, !r && !(f && e)) throw new Jn("No workspace ID found. Set `workspaceId` in the constructor or the `ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID` environment variable.");
    let x = e, k = !1;
    if (!x) if (o) x = L(o, t, r); else if (f) throw new Jn(`No project was given. ${D}`); else k = !0;
    super({
      baseURL: x ?? null,
      ...T,
      apiKey: null,
      authToken: null,
      ...{
        __auth: {
          provider: null,
          tokenCache: null,
          resolution: null,
          error: null,
          extraHeaders: {}
        }
      }
    });
    C.add(this), d.set(this, void 0), b.set(this, void 0), g.set(this, void 0), u.set(this, void 0), 
    w.set(this, void 0), this.project = o ?? null, this.location = t ?? null, this.workspaceId = r, 
    this.skipAuth = f, c(this, d, n, "f"), c(this, b, s ?? null, "f"), c(this, g, i ?? null, "f"), 
    c(this, w, !!e, "f");
    let _;
    if (!f && !n) if (i) c(this, u, Promise.resolve(i), "f"); else _ = s ?? new A.GoogleAuth({
      scopes: S
    }), c(this, u, _.getClient(), "f"), a(this, u, "f").catch(() => {});
    if (!k) this.ready = Promise.resolve(); else {
      let h = _ ?? s ?? new A.GoogleAuth({
        scopes: S,
        ...i ? {
          authClient: i
        } : {}
      }), P = t, N = r;
      this.baseURL = "https://unresolved.invalid", this.ready = h.getProjectId().then(y => {
        this.project = y, this.baseURL = L(y, P, N);
      }, y => {
        let j = new Jn(`No project was given and it could not be resolved from Google credentials. ${D}`);
        throw j.cause = y, j;
      }), this.ready.catch(() => {});
    }
  }
  withOptions(e) {
    return super.withOptions({
      project: this.project ?? void 0,
      location: this.location ?? void 0,
      workspaceId: this.workspaceId,
      bearerTokenProvider: a(this, d, "f"),
      googleAuth: a(this, b, "f") ?? void 0,
      authClient: a(this, g, "f") ?? void 0,
      skipAuth: this.skipAuth,
      baseURL: a(this, w, "f") ? this.baseURL : void 0,
      ...e
    });
  }
  async prepareOptions(e) {
    await super.prepareOptions(e), await this.ready;
  }
  async buildRequest(e, o = {}) {
    return await this.ready, await super.buildRequest(e, o);
  }
  async authHeaders(e) {
    if (this.skipAuth) return;
    let o = E([ this._options.defaultHeaders, e.headers ]);
    if (o.values.get("authorization") || o.nulls.has("authorization")) return;
    let t = await a(this, C, "m", v).call(this);
    return E([ {
      Authorization: `Bearer ${t}`
    } ]);
  }
  validateHeaders() {
    return;
  }
  getUserAgent() {
    return `AnthropicGoogleCloud/JS ${YT}`;
  }
}

d = new WeakMap, b = new WeakMap, g = new WeakMap, u = new WeakMap, w = new WeakMap, 
C = new WeakSet, v = async function() {
  if (a(this, d, "f")) return await a(this, d, "f").call(this);
  let o = await a(this, u, "f"), {token: t} = await o.getAccessToken();
  if (!t) throw new Jn("Failed to obtain a Google access token from Application Default Credentials.");
  return t;
};

export { I as AnthropicGoogleCloud };
