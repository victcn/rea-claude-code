// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { rZ, oZ, twe } from "./chunk-gmq0qwep.js";

import { YT } from "./chunk-xsrp0h3z.js";

import { Jn } from "./chunk-b0z4bv3v.js";

var c = e => (c = Array.isArray, c(e)), l = c;

var d = Symbol.for("brand.privateNullableHeaders");

function* h(e) {
  if (!e) return;
  if (d in e) {
    let {values: r, nulls: o} = e;
    yield* r.entries();
    for (let i of o) yield [ i, null ];
    return;
  }
  let t = !1, n;
  if (e instanceof Headers) n = e.entries(); else if (l(e)) n = e; else t = !0, n = Object.entries(e ?? {});
  for (let r of n) {
    let o = r[0];
    if (typeof o !== "string") throw TypeError("expected header name to be a string");
    let i = l(r[1]) ? r[1] : [ r[1] ], f = !1;
    for (let s of i) {
      if (s === void 0) continue;
      if (t && !f) f = !0, yield [ o, a ];
      yield [ o, s ];
    }
  }
}

var a = Symbol("clear"), b = new Set([ "x-stainless-helper" ]), x = (e, t) => {
  let n = e ? e.split(",").map(r => r.trim()).filter(Boolean) : [];
  for (let r of t.split(",").map(o => o.trim())) if (r && !n.includes(r)) n.push(r);
  return n.join(", ");
}, p = e => {
  let t = new Headers, n = new Set;
  for (let r of e) {
    let o = new Set;
    for (let [i, f] of h(r)) {
      let s = i.toLowerCase();
      if (b.has(s)) {
        if (f === a) continue;
        if (f === null) t.delete(i), n.add(s); else t.set(i, x(t.get(i), f)), n.delete(s);
        continue;
      }
      if (f === a || !o.has(s)) {
        if (t.delete(i), o.add(s), f === a) continue;
      }
      if (f === null) t.delete(i), n.add(s); else t.append(i, f), n.delete(s);
    }
  }
  return {
    [d]: !0,
    values: t,
    nulls: n
  };
};

var u = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};

class y extends twe {
  constructor({baseURL: e = u("ANTHROPIC_FOUNDRY_BASE_URL"), apiKey: t = u("ANTHROPIC_FOUNDRY_API_KEY"), resource: n = u("ANTHROPIC_FOUNDRY_RESOURCE"), azureADTokenProvider: r, dangerouslyAllowBrowser: o, ...i} = {}) {
    if (typeof r === "function") o = !0;
    if (!r && !t) throw new Jn("Missing credentials. Please pass one of `apiKey` and `azureTokenProvider`, or set the `ANTHROPIC_FOUNDRY_API_KEY` environment variable.");
    if (r && t) throw new Jn("The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time.");
    if (!e) {
      if (!n) throw new Jn("Must provide one of the `baseURL` or `resource` arguments, or the `ANTHROPIC_FOUNDRY_RESOURCE` environment variable");
      e = `https://${n}.services.ai.azure.com/anthropic/`;
    } else if (n) throw new Jn("baseURL and resource are mutually exclusive");
    super({
      apiKey: r ?? t,
      baseURL: e,
      ...i,
      ...o !== void 0 ? {
        dangerouslyAllowBrowser: o
      } : {}
    });
    this.resource = null, this.messages = w(this), this.beta = E(this), this.models = void 0;
  }
  async authHeaders() {
    if (typeof this._options.apiKey === "function") {
      let e;
      try {
        e = await this._options.apiKey();
      } catch (t) {
        if (t instanceof Jn) throw t;
        throw new Jn(`Failed to get token from azureADTokenProvider: ${t.message}`, {
          cause: t
        });
      }
      if (typeof e !== "string" || !e) throw new Jn(`Expected azureADTokenProvider function argument to return a string but it returned ${e}`);
      return p([ {
        Authorization: `Bearer ${e}`
      } ]);
    }
    if (typeof this._options.apiKey === "string") return p([ {
      "x-api-key": this.apiKey
    } ]);
    return;
  }
  validateHeaders() {
    return;
  }
  getUserAgent() {
    return `AnthropicFoundry/JS ${YT}`;
  }
}

function w(e) {
  let t = new oZ(e);
  return delete t.batches, t;
}

function E(e) {
  let t = new rZ(e);
  return delete t.messages.batches, t;
}

export { y as AnthropicFoundry };
