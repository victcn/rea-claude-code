// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { rZ, oZ, xct } from "./chunk-gmq0qwep.js";

import { Ljn } from "./chunk-nthdrd2d.js";

import { YT } from "./chunk-xsrp0h3z.js";

import { Hu } from "./chunk-b0z4bv3v.js";

import { we } from "./chunk-m8ez8fhk.js";

var _ = we(Ljn(), 1);

var g = e => {
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

var l = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};

var d = e => (d = Array.isArray, d(e)), f = d;

function b(e) {
  return e != null && typeof e === "object" && !Array.isArray(e);
}

var w = e => {
  try {
    return JSON.parse(e);
  } catch (t) {
    return;
  }
};

var y = Symbol.for("brand.privateNullableHeaders");

function* O(e) {
  if (!e) return;
  if (y in e) {
    let {values: o, nulls: a} = e;
    yield* o.entries();
    for (let i of a) yield [ i, null ];
    return;
  }
  let t = !1, r;
  if (e instanceof Headers) r = e.entries(); else if (f(e)) r = e; else t = !0, r = Object.entries(e ?? {});
  for (let o of r) {
    let a = o[0];
    if (typeof a !== "string") throw TypeError("expected header name to be a string");
    let i = f(o[1]) ? o[1] : [ o[1] ], n = !1;
    for (let s of i) {
      if (s === void 0) continue;
      if (t && !n) n = !0, yield [ a, u ];
      yield [ a, s ];
    }
  }
}

var u = Symbol("clear"), C = new Set([ "x-stainless-helper" ]), P = (e, t) => {
  let r = e ? e.split(",").map(o => o.trim()).filter(Boolean) : [];
  for (let o of t.split(",").map(a => a.trim())) if (o && !r.includes(o)) r.push(o);
  return r.join(", ");
}, E = e => {
  let t = new Headers, r = new Set;
  for (let o of e) {
    let a = new Set;
    for (let [i, n] of O(o)) {
      let s = i.toLowerCase();
      if (C.has(s)) {
        if (n === u) continue;
        if (n === null) t.delete(i), r.add(s); else t.set(i, P(t.get(i), n)), r.delete(s);
        continue;
      }
      if (n === u || !a.has(s)) {
        if (t.delete(i), a.add(s), n === u) continue;
      }
      if (n === null) t.delete(i), r.add(s); else t.append(i, n), r.delete(s);
    }
  }
  return {
    [y]: !0,
    values: t,
    nulls: r
  };
};

var j = function(e, t, r, o) {
  if (r === "a" && !o) throw TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !o : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? o : r === "a" ? o.call(e) : o ? o.value : t.get(e);
}, h, x, R = "vertex-2023-10-16", T = new Set([ "/v1/messages", "/v1/messages?beta=true" ]);

class A extends xct {
  constructor({baseURL: e = l("ANTHROPIC_VERTEX_BASE_URL"), region: t = l("CLOUD_ML_REGION") ?? null, projectId: r = l("ANTHROPIC_VERTEX_PROJECT_ID") ?? null, ...o} = {}) {
    if (!t) throw Error("No region was given. The client should be instantiated with the `region` option or the `CLOUD_ML_REGION` environment variable should be set.");
    if (!e) switch (t) {
     case "global":
      e = "https://aiplatform.googleapis.com/v1";
      break;

     case "us":
      e = "https://aiplatform.us.rep.googleapis.com/v1";
      break;

     case "eu":
      e = "https://aiplatform.eu.rep.googleapis.com/v1";
      break;

     default:
      e = `https://${t}-aiplatform.googleapis.com/v1`;
    }
    super({
      baseURL: e,
      apiKey: null,
      authToken: null,
      ...o
    });
    if (h.add(this), this.messages = N(this), this.beta = S(this), this.region = t, 
    this.projectId = r, this.accessToken = o.accessToken ?? null, o.authClient && o.googleAuth) throw Error("You cannot provide both `authClient` and `googleAuth`. Please provide only one of them."); else if (o.authClient) this._authClientPromise = Promise.resolve(o.authClient); else this._auth = o.googleAuth ?? new _.GoogleAuth({
      scopes: "https://www.googleapis.com/auth/cloud-platform"
    }), this._authClientPromise = this._auth.getClient();
  }
  validateHeaders() {}
  _shouldResolveDefaultCredentials() {
    return !1;
  }
  async authHeaders() {
    return;
  }
  getUserAgent() {
    return `AnthropicVertex/JS ${YT}`;
  }
  backendMiddleware() {
    return [ async (e, t, r) => t(await j(this, h, "m", x).call(this, e, r.options)) ];
  }
}

h = new WeakSet, x = async function(t, r) {
  let o, a;
  try {
    o = await this._authClientPromise, a = await o.getRequestHeaders();
  } catch (c) {
    throw new Hu({
      message: "Failed to acquire Google OAuth credentials.",
      cause: g(c)
    });
  }
  let i = o.projectId ?? a.get("x-goog-user-project");
  if (!this.projectId && i) this.projectId = i;
  let n = new URL(t.url), s;
  if (typeof t.body === "string") {
    let c = w(t.body);
    if (b(c)) s = c;
  }
  if (s && !s.anthropic_version) s.anthropic_version = R;
  if (r && T.has(r.path) && r.method === "post") {
    let c = r.path.split("?")[0];
    if (n.pathname.endsWith(c)) {
      if (!this.projectId) throw Error("No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.");
      if (!s) throw Error("Expected request body to be an object for post /v1/messages");
      let p = s.model;
      delete s.model;
      let v = s.stream ?? !1 ? "streamRawPredict" : "rawPredict", I = n.pathname.slice(0, n.pathname.length - c.length);
      n.pathname = `${I}/projects/${this.projectId}/locations/${this.region}/publishers/anthropic/models/${p}:${v}`, 
      n.searchParams.delete("beta");
    }
  }
  if (r && (r.path === "/v1/messages/count_tokens" || r.path == "/v1/messages/count_tokens?beta=true" && r.method === "post")) {
    let c = r.path.split("?")[0];
    if (n.pathname.endsWith(c)) {
      if (!this.projectId) throw Error("No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.");
      let p = n.pathname.slice(0, n.pathname.length - c.length);
      n.pathname = `${p}/projects/${this.projectId}/locations/${this.region}/publishers/anthropic/models/count-tokens:rawPredict`, 
      n.searchParams.delete("beta");
    }
  }
  let m = {
    ...t,
    url: n.toString(),
    headers: E([ a, t.headers ]).values
  };
  if (s) m.body = JSON.stringify(s);
  return m;
};

function N(e) {
  let t = new oZ(e);
  return delete t.batches, t;
}

function S(e) {
  let t = new rZ(e);
  return delete t.messages.batches, t;
}

export { A as AnthropicVertex };
