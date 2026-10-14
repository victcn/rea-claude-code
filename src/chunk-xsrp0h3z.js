// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, he } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { Jn, Je, j, l, Ms, jt } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, so } from "./chunk-3ykz5st8.js";

import { TDs, ADs, fPr, Hft, CDs, RDs, Dft, xDs, mPr, gPr, Pie, gsn, ZBe, Ru, Z8e, _Lt, _E, Q2n, t9e } from "./chunk-qqd24q2y.js";

import { Ja } from "./chunk-2msx6erf.js";

import { at } from "./chunk-0bq6eb61.js";

var YT = "0.128.0";

var zRs = () => typeof window < "u" && typeof window.document < "u" && typeof navigator < "u";

function ee() {
  if (typeof Deno < "u" && Deno.build != null) return "deno";
  if (typeof EdgeRuntime < "u") return "edge";
  if (Object.prototype.toString.call(typeof globalThis.process < "u" ? globalThis.process : 0) === "[object process]") return "node";
  return "unknown";
}

var te = () => {
  let e = ee();
  if (e === "deno") return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": YT,
    "X-Stainless-OS": x(Deno.build.os),
    "X-Stainless-Arch": D(Deno.build.arch),
    "X-Stainless-Runtime": "deno",
    "X-Stainless-Runtime-Version": typeof Deno.version === "string" ? Deno.version : Deno.version?.deno ?? "unknown"
  };
  if (typeof EdgeRuntime < "u") return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": YT,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": `other:${EdgeRuntime}`,
    "X-Stainless-Runtime": "edge",
    "X-Stainless-Runtime-Version": globalThis.process?.version ?? "unknown"
  };
  if (e === "node") return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": YT,
    "X-Stainless-OS": x(globalThis.process.platform ?? "unknown"),
    "X-Stainless-Arch": D(globalThis.process.arch ?? "unknown"),
    "X-Stainless-Runtime": "node",
    "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown"
  };
  let n = ne();
  if (n) return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": YT,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": `browser:${n.browser}`,
    "X-Stainless-Runtime-Version": n.version
  };
  return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": YT,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": "unknown",
    "X-Stainless-Runtime-Version": "unknown"
  };
};

function ne() {
  if (typeof navigator > "u" || !navigator) return null;
  let e = [ {
    key: "edge",
    pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "ie",
    pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "ie",
    pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "chrome",
    pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "firefox",
    pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "safari",
    pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
  } ];
  for (let {key: n, pattern: r} of e) {
    let s = r.exec(navigator.userAgent);
    if (s) {
      let o = s[1] || 0, u = s[2] || 0, f = s[3] || 0;
      return {
        browser: n,
        version: `${o}.${u}.${f}`
      };
    }
  }
  return null;
}

var D = e => {
  if (e === "x32") return "x32";
  if (e === "x86_64" || e === "x64") return "x64";
  if (e === "arm") return "arm";
  if (e === "aarch64" || e === "arm64") return "arm64";
  if (e) return `other:${e}`;
  return "unknown";
}, x = e => {
  if (e = e.toLowerCase(), e.includes("ios")) return "iOS";
  if (e === "android") return "Android";
  if (e === "darwin") return "MacOS";
  if (e === "win32") return "Windows";
  if (e === "freebsd") return "FreeBSD";
  if (e === "openbsd") return "OpenBSD";
  if (e === "linux") return "Linux";
  if (e) return `Other:${e}`;
  return "Unknown";
}, b, Djn = () => b ?? (b = te());

function y() {
  return Math.floor(Date.now() / 1e3);
}

class wHt {
  constructor(e, n) {
    this.cached = null, this.pendingRefresh = null, this.nextForce = !1, this.lastAdvisoryError = 0, 
    this.provider = e, this.onAdvisoryRefreshError = n;
  }
  async getToken() {
    let e = this.nextForce;
    this.nextForce = !1;
    let n = this.cached;
    if (e || n == null) return (await this.refresh(e)).token;
    if (n.expiresAt == null) return n.token;
    let r = n.expiresAt - y();
    if (r > RDs) return n.token;
    if (r > Dft) return this.backgroundRefresh(), n.token;
    return (await this.refresh()).token;
  }
  invalidate() {
    this.cached = null, this.nextForce = !0;
  }
  refresh(e = !1) {
    if (this.pendingRefresh && !e) return this.pendingRefresh;
    return this.doRefresh(e);
  }
  backgroundRefresh() {
    if (this.pendingRefresh) return;
    if (y() - this.lastAdvisoryError < xDs) return;
    this.doRefresh().catch(e => {
      this.lastAdvisoryError = y(), this.onAdvisoryRefreshError?.(e);
    });
  }
  doRefresh(e = !1) {
    return this.pendingRefresh = this.provider(e ? {
      forceRefresh: !0
    } : void 0).then(n => (this.cached = n, this.pendingRefresh = null, n), n => {
      throw this.pendingRefresh = null, n;
    }), this.pendingRefresh;
  }
}

var n_ = e => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};

var GRs = "1.0", Btn = "1.0", re = /^[A-Za-z0-9_.-]+$/;

function H(e) {
  if (!e) throw Error("profile name is empty");
  if (e === "." || e === "..") throw Error(`profile name "${e}" is not allowed`);
  if (e.includes("/") || e.includes("\\")) throw Error(`profile name "${e}" must not contain path separators`);
  if (!re.test(e)) throw Error(`profile name "${e}" contains disallowed characters (allowed: letters, digits, '_', '.', '-')`);
}

var L = async e => (await O(e))?.config ?? null, O = async e => {
  var n, r;
  let s = await C();
  if (s === null) return null;
  let o = e ?? await W();
  if (o === null) return null;
  H(o);
  let {fs: u, path: f} = await import("./chunk-ak4abj51.js"), h = f.join(s, "configs", `${o}.json`), _;
  try {
    _ = await u.promises.readFile(h, "utf-8");
  } catch (E) {
    if (E?.code !== "ENOENT") throw Error(`failed to read config file ${h}: ${E}`);
    _ = null;
  }
  if (_ === null) {
    let E = n_("ANTHROPIC_ORGANIZATION_ID"), k = n_("ANTHROPIC_IDENTITY_TOKEN_FILE"), I = n_("ANTHROPIC_FEDERATION_RULE_ID");
    if (I && E) return {
      fromFile: !1,
      config: {
        organization_id: E,
        workspace_id: n_("ANTHROPIC_WORKSPACE_ID"),
        base_url: n_("ANTHROPIC_BASE_URL"),
        authentication: {
          type: "oidc_federation",
          federation_rule_id: I,
          service_account_id: n_("ANTHROPIC_SERVICE_ACCOUNT_ID"),
          identity_token: k ? {
            source: "file",
            path: k
          } : void 0,
          scope: n_("ANTHROPIC_SCOPE")
        }
      }
    };
    return null;
  }
  let p;
  try {
    p = JSON.parse(_);
  } catch (E) {
    throw Error(`failed to parse config file ${h}: ${E}`);
  }
  if (!p.authentication) throw Error(`config file ${h} is missing "authentication"`);
  let w = p.authentication.type;
  if (w !== "oidc_federation" && w !== "user_oauth") throw Error(`authentication.type "${w}" is not a known authentication type`);
  if (p.organization_id ?? (p.organization_id = n_("ANTHROPIC_ORGANIZATION_ID")), 
  p.workspace_id ?? (p.workspace_id = n_("ANTHROPIC_WORKSPACE_ID")), p.base_url ?? (p.base_url = n_("ANTHROPIC_BASE_URL")), 
  (n = p.authentication).scope ?? (n.scope = n_("ANTHROPIC_SCOPE")), p.authentication.type === "oidc_federation") {
    if (!p.authentication.identity_token) {
      let E = n_("ANTHROPIC_IDENTITY_TOKEN_FILE");
      if (E) p.authentication.identity_token = {
        source: "file",
        path: E
      };
    }
    if (!p.authentication.federation_rule_id) p.authentication.federation_rule_id = n_("ANTHROPIC_FEDERATION_RULE_ID") ?? "";
    (r = p.authentication).service_account_id ?? (r.service_account_id = n_("ANTHROPIC_SERVICE_ACCOUNT_ID"));
  }
  return {
    config: p,
    fromFile: !0
  };
};

var S = async (e, n) => {
  if (e?.authentication.credentials_path) return e.authentication.credentials_path;
  let r = await C();
  if (!r) return null;
  let s = n ?? await W();
  if (!s) return null;
  H(s);
  let {path: o} = await import("./chunk-ak4abj51.js");
  return o.join(r, "credentials", `${s}.json`);
}, C = async () => {
  if (!ie()) return null;
  let {path: e} = await import("./chunk-ak4abj51.js"), n = n_("ANTHROPIC_CONFIG_DIR");
  if (n) return n;
  if (Djn()["X-Stainless-OS"] === "Windows") {
    let u = n_("APPDATA");
    if (u) return e.join(u, "Anthropic");
    let f = n_("USERPROFILE");
    if (f) return e.join(f, "AppData", "Roaming", "Anthropic");
    return null;
  }
  let s = n_("XDG_CONFIG_HOME");
  if (s) return e.join(s, "anthropic");
  let o = n_("HOME");
  if (o) return e.join(o, ".config", "anthropic");
  return null;
}, ie = () => {
  let e = Djn()["X-Stainless-Runtime"];
  return e === "node" || e === "deno";
}, W = async () => {
  let e = await C();
  if (!e) return null;
  let n = n_("ANTHROPIC_PROFILE");
  if (n) return n;
  let {fs: r, path: s} = await import("./chunk-ak4abj51.js"), o = s.join(e, "active_config");
  try {
    return (await r.promises.readFile(o, "utf-8")).trim() || "default";
  } catch (u) {
    if (u?.code !== "ENOENT") throw Error(`failed to read ${o}: ${u}`);
    return "default";
  }
};

function N(e) {
  if (!e) throw new Jn("Identity token file path is empty");
  return async () => {
    let {fs: n} = await import("./chunk-ak4abj51.js"), r;
    try {
      r = await n.promises.readFile(e, "utf-8");
    } catch (o) {
      throw new Jn(`Failed to read identity token file at ${e}: ${o}`);
    }
    let s = r.trim();
    if (!s) throw new Jn(`Identity token file at ${e} is empty`);
    return s;
  };
}

function U(e) {
  if (!e) throw new Jn("Identity token value is empty");
  return () => e;
}

function X(e) {
  return async () => {
    mPr(e.baseURL);
    let n = await e.identityTokenProvider();
    if (n.length > 16384) throw new Ru(`Identity token is ${Math.ceil(n.length / 1024)} KiB, exceeds the 16 KiB assertion limit`);
    let r = {
      grant_type: TDs,
      assertion: n,
      federation_rule_id: e.federationRuleId,
      organization_id: e.organizationId
    };
    if (e.serviceAccountId) r.service_account_id = e.serviceAccountId;
    if (e.workspaceId) r.workspace_id = e.workspaceId;
    let s = `${e.baseURL}${fPr}`, o;
    try {
      o = await e.fetch(s, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-beta": `${Hft},${CDs}`,
          "User-Agent": e.userAgent || `anthropic-sdk-typescript/${YT} oidcFederationProvider`
        },
        body: JSON.stringify(r)
      });
    } catch (_) {
      throw new Ru(`Failed to reach token endpoint ${s}: ${_}`);
    }
    let u = o.headers.get("Request-Id");
    if (!o.ok) {
      let _ = await o.text().catch(() => ""), p = Pie(_), w = "";
      if (o.status === 401) w = ` Ensure your federation rule matches your identity token. ${e.workspaceId ? "" : "If your federation rule is scoped to multiple workspaces, set the ANTHROPIC_WORKSPACE_ID environment variable, the 'workspace_id' config key, or the `workspaceId` option. "}View your authentication events in the Workload identity page of Claude Console for more details.`;
      throw new Ru(`Token exchange failed with status ${o.status}${u ? ` (request-id ${u})` : ""}: ${p}${w}`, o.status, p, u);
    }
    let f = await gPr(o, u), h = Number(f.expires_in);
    if (!Number.isFinite(h)) throw new Ru(`Token endpoint response missing required fields: ${JSON.stringify(Pie(f))}`, o.status, Pie(f), u);
    return {
      token: f.access_token,
      expiresAt: y() + h
    };
  };
}

function V(e) {
  return async n => {
    let {fs: r} = await import("./chunk-ak4abj51.js");
    await gsn(e.credentialsPath, e.onSafetyWarning);
    let s;
    try {
      s = await r.promises.readFile(e.credentialsPath, "utf-8");
    } catch (T) {
      throw new Ru(`Credentials file not found at ${e.credentialsPath}: ${T}`);
    }
    let o;
    try {
      o = JSON.parse(s);
    } catch (T) {
      throw new Ru(`Credentials file at ${e.credentialsPath} is not valid JSON: ${T}`);
    }
    let u = o.access_token;
    if (!u) throw new Ru(`Credentials file at ${e.credentialsPath} must include 'access_token'`);
    let f = o.expires_at;
    if (!n?.forceRefresh && (f == null || y() < f - Dft)) return {
      token: u,
      expiresAt: f ?? null
    };
    let h = o.refresh_token;
    if (!e.clientId || !h) throw new Ru(`Access token at ${e.credentialsPath} has expired and no refresh is available (client_id ${e.clientId ? "set" : "empty"}, refresh_token ${h ? "set" : "empty"})`);
    mPr(e.baseURL);
    let _ = {
      grant_type: ADs,
      refresh_token: h,
      client_id: e.clientId
    }, p = `${e.baseURL}${fPr}`, w;
    try {
      w = await e.fetch(p, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-beta": Hft,
          "User-Agent": e.userAgent || `anthropic-sdk-typescript/${YT} userOAuthProvider`
        },
        body: JSON.stringify(_)
      });
    } catch (T) {
      throw new Ru(`User OAuth refresh failed to reach token endpoint: ${T}`);
    }
    let E = w.headers.get("Request-Id");
    if (!w.ok) {
      let T = await w.text().catch(() => "");
      throw new Ru(`User OAuth refresh failed (HTTP ${w.status}): ${Pie(T)}`, w.status, Pie(T), E);
    }
    let k = await gPr(w, E), I = Number(k.expires_in);
    if (!Number.isFinite(I)) throw new Ru(`User OAuth refresh response missing or invalid expires_in: ${JSON.stringify(Pie(k))}`, w.status, Pie(k), E);
    let F = y() + I, Q = k.refresh_token || h;
    return await ZBe(e.credentialsPath, {
      ...o,
      version: Btn,
      type: "oauth_token",
      access_token: k.access_token,
      expires_at: F,
      refresh_token: Q
    }), {
      token: k.access_token,
      expiresAt: F
    };
  };
}

function vHt(e, n) {
  let r = e.authentication.credentials_path ?? null, s = (e.base_url || n.baseURL).replace(/\/+$/, ""), o = oe(e, r, s, n), u = {};
  if (e.workspace_id && e.authentication.type === "user_oauth") u["anthropic-workspace-id"] = e.workspace_id;
  return {
    provider: o,
    extraHeaders: u,
    baseURL: e.base_url || void 0
  };
}

async function VRs(e, n) {
  let r = await O(n);
  if (!r) return null;
  let {config: s, fromFile: o} = r, u = s.authentication.credentials_path || !o ? s : {
    ...s,
    authentication: {
      ...s.authentication,
      credentials_path: await S(s, n) ?? void 0
    }
  };
  return vHt(u, e);
}

function oe(e, n, r, s) {
  switch (e.authentication.type) {
   case "oidc_federation":
    {
      let o = e.authentication, u = se(o);
      if (!u) throw new Ru("oidc_federation config requires an identity token (set authentication.identity_token, ANTHROPIC_IDENTITY_TOKEN_FILE, or ANTHROPIC_IDENTITY_TOKEN)");
      if (!o.federation_rule_id) throw new Ru("oidc_federation config requires 'federation_rule_id'. Set it in authentication.federation_rule_id in your profile, or via ANTHROPIC_FEDERATION_RULE_ID (profile takes precedence).");
      if (!e.organization_id) throw new Ru("oidc_federation config requires organization_id (set ANTHROPIC_ORGANIZATION_ID or config.organization_id)");
      let f = X({
        identityTokenProvider: u,
        federationRuleId: o.federation_rule_id,
        organizationId: e.organization_id,
        serviceAccountId: o.service_account_id,
        workspaceId: e.workspace_id,
        baseURL: r,
        fetch: s.fetch,
        userAgent: s.userAgent
      });
      if (n) return ae(f, n, s.onCacheWriteError, s.onSafetyWarning);
      return f;
    }

   case "user_oauth":
    {
      if (!n) throw new Ru("user_oauth config requires authentication.credentials_path (or load via a profile so it defaults to <config_dir>/credentials/<profile>.json)");
      return V({
        credentialsPath: n,
        clientId: e.authentication.client_id,
        baseURL: r,
        fetch: s.fetch,
        userAgent: s.userAgent,
        onSafetyWarning: s.onSafetyWarning
      });
    }

   default:
    {
      let o = e.authentication.type;
      throw new Ru(`authentication.type "${o}" is not a known authentication type`);
    }
  }
}

function se(e) {
  if (e.identity_token) {
    let s = e.identity_token.source;
    if (s !== "file") throw new Ru(`identity_token.source "${s}" is not supported by this SDK version (only "file")`);
    if (!e.identity_token.path) throw new Ru('identity_token.source "file" requires a non-empty path');
    return N(e.identity_token.path);
  }
  let n = n_("ANTHROPIC_IDENTITY_TOKEN_FILE");
  if (n) return N(n);
  let r = n_("ANTHROPIC_IDENTITY_TOKEN");
  if (r) return U(r);
  return null;
}

function ae(e, n, r, s) {
  return async o => {
    let {fs: u} = await import("./chunk-ak4abj51.js");
    await gsn(n, s);
    let f;
    try {
      let _ = await u.promises.readFile(n, "utf-8");
      f = JSON.parse(_);
      let p = f?.access_token;
      if (p && !o?.forceRefresh) {
        let w = f?.expires_at;
        if (w == null || y() < w - Dft) return {
          token: p,
          expiresAt: w ?? null
        };
      }
    } catch (_) {
      if (_?.code !== "ENOENT" && !(_ instanceof SyntaxError)) r?.(_);
    }
    let h = await e(o);
    try {
      await ZBe(n, {
        ...f ?? {},
        version: Btn,
        type: "oauth_token",
        access_token: h.token,
        expires_at: h.expiresAt
      });
    } catch (_) {
      r?.(_);
    }
    return h;
  };
}

import { mkdir as Y, readFile as ue, stat as fe } from "fs/promises";

import { dirname as pe, join as _e } from "path";

import { dirname as ce } from "path";

var de = {
  "fail-closed": 5,
  "fail-open": 15
};

function P(e, n, r) {
  return s => z(n, () => e(s), r);
}

function owo(e, n) {
  return z(ce(e), n, "fail-closed");
}

async function z(e, n, r) {
  let s = de[r], o;
  try {
    o = await le(e, s, r);
  } catch (u) {
    if (r === "fail-closed" || u instanceof Ru) throw u;
    return t(`wif: credentials lock unavailable at ${e} (${l(u)}); refreshing without cross-process serialization`), 
    n();
  }
  try {
    return i("tengu_wif_user_oauth_lock_acquired", {
      mode: c(r)
    }), await n();
  } finally {
    i("tengu_wif_user_oauth_lock_released", {
      mode: c(r)
    });
    try {
      await o();
    } catch (u) {
      if (Ms(u)) t(`wif: lock release failed: ${u}`); else d(u);
    }
  }
}

async function le(e, n, r) {
  for (let s = 0; ;s++) try {
    return await Ja(e, {
      stale: 6e4,
      update: 5e3,
      onCompromised: o => t(`WIF credentials lock compromised: ${o}`, {
        level: "error"
      })
    });
  } catch (o) {
    if (o.code !== "ELOCKED") throw o;
    if (s >= n) {
      i("tengu_wif_user_oauth_lock_retry_limit", {
        attempt: s,
        mode: c(r)
      });
      let u = new Ru(`Could not acquire credentials lock at ${e} after ${n} retries`);
      throw u.cause = Object.assign(Error("credentials lock busy"), {
        code: "ELOCKED"
      }), u;
    }
    i("tengu_wif_user_oauth_lock_retry", {
      attempt: s,
      mode: c(r)
    }), await J(1e3 + Math.random() * 1e3);
  }
}

class G {
  generation=0;
  credentialsPromise=void 0;
  tokenCachePromise=void 0;
  resolvedBaseUrlSnapshot=void 0;
  failedAccessTokens=new Set;
  reset() {
    this.generation += 1, this.credentialsPromise = void 0, this.tokenCachePromise = void 0, 
    this.resolvedBaseUrlSnapshot = void 0, this.failedAccessTokens.clear();
  }
}

var we = new K(() => new G);

function A() {
  return we.of(B().host);
}

var me = 20;

function wpe() {
  return A().resolvedBaseUrlSnapshot;
}

function vUe() {
  return v(A());
}

function v(e) {
  if (e.credentialsPromise === void 0) {
    let {generation: n} = e;
    e.credentialsPromise = so("wif_credentials_resolve", async () => {
      let r = await Te();
      if (e.generation !== n) return M(e);
      if (r === null) return e.resolvedBaseUrlSnapshot = null, null;
      let s = a.ANTHROPIC_BASE_URL || r.base_url, o = s || "https://api.anthropic.com", f = _E() === "env-quad" ? await ge(r, o) : await S(r), h = {
        ...r,
        base_url: s,
        ...r.authentication.credentials_path || f === null ? {} : {
          authentication: {
            ...r.authentication,
            credentials_path: f
          }
        }
      }, [{getUserAgent: _}, {getProxyFetchOptions: p}] = await Promise.all([ import("./chunk-qm419kgx.js"), import("./chunk-adh1rnwr.js") ]), w = vHt(h, {
        baseURL: o,
        fetch: (E, k) => fetch(E, {
          ...k,
          ...p({
            forAnthropicAPI: !0,
            url: String(E)
          }),
          signal: AbortSignal.timeout(1e4)
        }),
        userAgent: _(),
        onSafetyWarning: E => t(E, {
          level: "warn"
        }),
        onCacheWriteError: E => t(String(E), {
          level: "warn"
        })
      });
      if (f) switch (r.authentication.type) {
       case "user_oauth":
        w.provider = P(q(Ee(w.provider, f), f, "after-recorded-401", e.failedAccessTokens), pe(f), "fail-closed");
        break;

       case "oidc_federation":
        {
          let E = t9e();
          if (E === null) break;
          await Y(E, {
            recursive: !0,
            mode: 448
          }).catch(k => t(`wif: cannot create ${E} (${l(k)}); the credentials lock may be unavailable`, {
            level: "warn"
          })), w.provider = P(q(w.provider, f, "always", e.failedAccessTokens), E, "fail-open");
          break;
        }
      }
      if (e.generation !== n) return M(e);
      return e.resolvedBaseUrlSnapshot = w.baseURL ?? null, w;
    }).catch(r => {
      throw t(`WIF credential resolution failed: ${l(r)}`, {
        level: "error"
      }), r instanceof Ru ? r : new Ru(l(r));
    });
  }
  return e.credentialsPromise;
}

function M(e) {
  return t("wif: sign-in state was reset during this lookup; looking it up again"), 
  v(e);
}

async function swo(e) {
  let n = A(), r = await Z(n).catch(() => null);
  if (r === null) return;
  if (e) {
    if (n.failedAccessTokens.add(e), n.failedAccessTokens.size > me) for (let s of n.failedAccessTokens) {
      n.failedAccessTokens.delete(s);
      break;
    }
  }
  r.invalidate();
}

function mwe() {
  return Z(A());
}

function Z(e) {
  return e.tokenCachePromise ??= v(e).then(n => {
    if (n === null) return null;
    return new wHt(async s => {
      try {
        let o = await n.provider(s);
        return g("wif_token_exchange"), o;
      } catch (o) {
        let u = o instanceof Ru ? o : new Ru(o instanceof Error ? o.message : String(o), null);
        if (u !== o) u.cause = o;
        throw m("wif_token_exchange", ye(u)), u;
      }
    }, s => t(String(s), {
      level: "warn"
    }));
  }), e.tokenCachePromise;
}

function q(e, n, r, s) {
  return async o => {
    if (!o?.forceRefresh) return e(o);
    if (r === "always" || s.size > 0) try {
      await gsn(n, p => t(p, {
        level: "warn"
      }));
      let u = await import("fs"), f = JSON.parse(await u.promises.readFile(n, "utf-8")), h = f.access_token, _ = f.expires_at == null ? null : Number(f.expires_at);
      if (typeof h === "string" && h && !s.has(h) && (_ === null || Date.now() / 1e3 < _ - Dft)) {
        let {logEvent: p} = await import("./chunk-4q7vvg1t.js"), {fromEnum: w} = await import("./chunk-ktdk9ckq.js");
        return p("tengu_wif_user_oauth_refresh_race_resolved", {
          mode: w(r)
        }), t("wif: adopting sibling-rotated access token from credentials file; skipping refresh grant"), 
        {
          token: h,
          expiresAt: _
        };
      }
    } catch (u) {
      t(`wif: rotated-token adoption check failed: ${l(u)}`);
    }
    return e(o);
  };
}

function Ee(e, n) {
  let r = async () => {
    try {
      let s = await import("fs");
      return JSON.parse(await s.promises.readFile(n, "utf-8"));
    } catch {
      return null;
    }
  };
  return async s => {
    let u = (await r())?.refresh_token;
    try {
      return await e(s);
    } catch (f) {
      if (f instanceof Ru && (f.statusCode === 400 || f.statusCode === 401) && typeof f.body === "string" && f.body.includes('"invalid_grant"') && Z8e(f) === null && typeof u === "string" && u) try {
        let h = await r();
        if (h && h.refresh_token === u) {
          let {logEvent: _} = await import("./chunk-4q7vvg1t.js");
          await ZBe(n, {
            ...h,
            refresh_token: void 0
          }), _("tengu_wif_user_oauth_refresh_token_cleared", {});
        }
      } catch (h) {
        if (jt(h)) t(`wif: refresh-token cleanup write failed: ${h}`); else d(Je(j(h), "WIF: failed to clear stale user_oauth refresh_token"));
      }
      throw f;
    }
  };
}

function z6s(e) {
  if (e instanceof Ru && typeof e.statusCode === "number") return e.statusCode >= 500 || e.statusCode === 429 || e.statusCode === 408;
  let n = e;
  for (let r = 0; r < 4 && n instanceof Error; r++) {
    if (n.name === "TimeoutError" || ke(n)) return !0;
    n = n.cause;
  }
  return !1;
}

function ke(e) {
  switch ("code" in e && typeof e.code === "string" ? e.code : "") {
   case "ECONNRESET":
   case "ECONNREFUSED":
   case "ECONNABORTED":
   case "ETIMEDOUT":
   case "EHOSTUNREACH":
   case "ENETUNREACH":
   case "ENETDOWN":
   case "ENOTFOUND":
   case "EAI_AGAIN":
   case "EPIPE":
   case "UND_ERR_SOCKET":
   case "UND_ERR_CONNECT_TIMEOUT":
   case "ELOCKED":
   case "ConnectionRefused":
   case "ConnectionClosed":
   case "FailedToOpenSocket":
   case "Timeout":
    return !0;

   default:
    return !1;
  }
}

function ye(e) {
  if (_Lt(e)) return "no_refresh_available";
  if (Z8e(e)) return "account_on_hold";
  if (typeof e.body === "string" && e.body.includes('"invalid_grant"')) return "invalid_grant";
  if (typeof e.statusCode === "number") {
    if (e.statusCode >= 500) return "http_5xx";
    if (e.statusCode >= 400) return "http_4xx";
  }
  let n = e.message.toLowerCase();
  if (n.includes("parse") || n.includes("json")) return "parse_failed";
  return "network_error";
}

function kTr() {
  A().reset(), Q2n();
}

var R = e => process.env[e]?.trim() || void 0;

async function Te() {
  if (_E() === "env-quad") {
    let e = R("ANTHROPIC_FEDERATION_RULE_ID"), n = R("ANTHROPIC_ORGANIZATION_ID");
    if (e && n) {
      let r = R("ANTHROPIC_IDENTITY_TOKEN_FILE");
      return {
        organization_id: n,
        workspace_id: R("ANTHROPIC_WORKSPACE_ID"),
        base_url: R("ANTHROPIC_BASE_URL"),
        authentication: {
          type: "oidc_federation",
          federation_rule_id: e,
          service_account_id: R("ANTHROPIC_SERVICE_ACCOUNT_ID"),
          identity_token: r ? {
            source: "file",
            path: r
          } : void 0,
          scope: R("ANTHROPIC_SCOPE")
        }
      };
    }
  }
  if (he()) return null;
  return L();
}

async function ge(e, n) {
  if (e.authentication.type !== "oidc_federation") return null;
  let r = e.authentication.identity_token?.path, s;
  if (r) try {
    s = (await ue(r, "utf-8")).trim();
  } catch (f) {
    return t(`wif: cannot read identity token at ${r} (${l(f)}); federation token cache disabled`), 
    null;
  } else s = R("ANTHROPIC_IDENTITY_TOKEN");
  if (!s) return t("wif: no identity token; federation token cache disabled"), null;
  let o = t9e();
  if (o === null) return t("wif: no config directory, or a diskless session; federation token cache disabled"), 
  null;
  try {
    await Y(o, {
      recursive: !0,
      mode: 448
    });
    {
      let f = await fe(o), h = f.mode & 511;
      if (h & 63) return t(`wif: ${o} is mode 0o${h.toString(8)} (filesystem ignores modes, or directory pre-existed shared); federation token cache disabled`), 
      null;
      let _ = process.getuid?.();
      if (_ !== void 0 && f.uid !== _) return t(`wif: ${o} is owned by uid ${f.uid}, not ${_}; federation token cache disabled`), 
      null;
    }
  } catch (f) {
    return t(`wif: cannot prepare ${o} (${l(f)}); federation token cache disabled`), 
    null;
  }
  let u = at(JSON.stringify([ e.authentication.federation_rule_id, e.organization_id, e.workspace_id ?? "", e.authentication.service_account_id ?? "", e.authentication.scope ?? "", n, at(s) ]));
  return _e(o, `${u}.json`);
}

export { YT, zRs, Djn, wHt, n_, GRs, Btn, vHt, VRs, owo, wpe, vUe, swo, mwe, z6s, kTr };
