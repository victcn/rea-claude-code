// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, bq } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { un } from "./chunk-y752zmas.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { wwe, ml, Sp, km, vt, Kf, An, _C, sU, sS, RK, Gt, Ce, ce, hE } from "./chunk-xywp7esx.js";

import { Bee } from "./chunk-zx69jgxc.js";

import { at } from "./chunk-0bq6eb61.js";

var S = 36e5, _ = 864e5, h = "/api/claude_code/organizations/metrics_enabled";

class o extends Error {}

async function w() {
  let e = wwe(await sU(), `${un().BASE_API_URL}${h}`);
  if (e.error) throw new o("Auth error: no credential usable for the metrics opt-out check");
  let n = await Gt.get(h, {
    auth: "none",
    headers: e.headers,
    timeout: 5e3,
    bypassEssentialTrafficOnly: !0,
    maxRedirects: 0
  });
  if (!n.ok) throw new o(`metrics_enabled unavailable: ${n.reason}`);
  if (typeof n.data?.metrics_logging_enabled !== "boolean") throw Error("metrics_enabled response missing metrics_logging_enabled");
  return n.data;
}

async function M(e) {
  try {
    let n = await sS(w, {
      also403Revoked: !0,
      gateToSessionOAuthCredential: !0,
      oauthRefreshLatch: e
    });
    return e.attempted = !1, t(`${RK} Metrics opt-out API response: enabled=${n.metrics_logging_enabled}`), 
    g("api_metrics_opt_out_check"), {
      enabled: n.metrics_logging_enabled,
      hasError: !1
    };
  } catch (n) {
    return t(`${RK} Failed to check metrics opt-out status: ${l(n)}`, n instanceof o ? {
      level: "error"
    } : void 0), m("api_metrics_opt_out_check", "request_failed"), {
      enabled: !1,
      hasError: !0
    };
  }
}

var y = new K(() => {
  let e = {
    attempted: !1
  };
  return {
    memo: Bee(() => M(e), S),
    oauthRefreshLatch: e
  };
}), E = new K(() => ({
  identity: void 0
}));

function u() {
  let {key: e, source: n} = Sp();
  if (e === null) return null;
  if (n === "apiKeyHelper") {
    let r = km();
    return r ? `key:helper:${at(r).slice(0, 16)}` : null;
  }
  return `key:${at(e).slice(0, 16)}`;
}

function c(e) {
  let n = _C();
  if (n !== void 0) return n.organizationUuid !== void 0 ? `acct:${n.accountUuid}/${n.organizationUuid}` : null;
  if (!e?.accountUuid || !e.organizationUuid) return null;
  return a.CLAUDE_CODE_OAUTH_TOKEN || bq() ? null : `acct:${e.accountUuid}/${e.organizationUuid}`;
}

function s() {
  let e = An();
  if (e !== void 0) return c(e);
  return ml() ? null : u();
}

async function p(e) {
  let n = An();
  if (n === void 0) return ml() ? null : u();
  if (_C() !== void 0) return c(n);
  return c(await hE(e));
}

function P() {
  let e = An();
  if (e !== void 0 || ml()) {
    let n = _C();
    if (n !== void 0) return `acct:${n.accountUuid}/${n.organizationUuid ?? "?"}`;
    if (e !== void 0) return `acct:${e.accountUuid ?? "?"}/${e.organizationUuid ?? "?"}`;
    return "oauth:no-record";
  }
  return u() ?? "none";
}

function I() {
  let e = B().host, n = y.of(e), r = E.of(e), i = P();
  if (r.identity !== void 0 && r.identity !== i) n.memo.cache.clear(), n.oauthRefreshLatch.attempted = !1;
  return r.identity = i, n.memo();
}

function X6o() {
  let e = B().host, n = y.of(e);
  n.memo.cache.clear(), n.oauthRefreshLatch.attempted = !1, E.of(e).identity = void 0;
}

async function b(e) {
  let n = s() === null ? null : await p(e), r = await I();
  if (r.hasError) return r;
  if (n === null) return r;
  if (await p(e) !== n) return m("api_metrics_opt_out_check", "principal_changed_mid_flight"), 
  {
    enabled: !1,
    hasError: !0
  };
  if (s() !== n) return r;
  let i = C(n);
  if (i !== void 0 && i.enabled === r.enabled && Date.now() - i.timestamp < _) return r;
  return await Ce(k => T(k, n, r.enabled), e), r;
}

function T(e, n, r) {
  if (s() !== n || n.startsWith("acct:") && e.oauthAccount === void 0) return e;
  return {
    ...e,
    metricsStatusCache: void 0,
    metricsStatusCacheByPrincipal: O({
      ...e.metricsStatusCacheByPrincipal,
      [n]: {
        enabled: r,
        timestamp: Date.now()
      }
    })
  };
}

var F = 8;

function O(e) {
  let r = Object.entries(e).filter(([, i]) => A(i)).sort(([, i], [, f]) => f.timestamp - i.timestamp).slice(0, F);
  return Object.fromEntries(r);
}

function A(e) {
  return typeof e?.enabled === "boolean" && Number.isFinite(e.timestamp) && e.timestamp <= Date.now();
}

function C(e) {
  let n = ce().metricsStatusCacheByPrincipal?.[e];
  return n !== void 0 && A(n) ? n : void 0;
}

async function J6o(e) {
  if (vt() && !Kf()) return {
    enabled: !1,
    hasError: !1
  };
  let n = s(), r = n === null ? void 0 : C(n);
  if (r !== void 0) {
    if (Date.now() - r.timestamp > _) b(e).catch(d);
    return {
      enabled: r.enabled,
      hasError: !1
    };
  }
  return b(e);
}

export { X6o, J6o };
