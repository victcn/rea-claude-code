// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

import { c, pe } from "./chunk-hwdwjvh8.js";

import { E, W, ci } from "./chunk-b0z4bv3v.js";

import { Ht, We } from "./chunk-nvtwm272.js";

import { d } from "./chunk-6ah1819r.js";

import { _, t } from "./chunk-kawq2919.js";

import { hl, _9e, Ur } from "./chunk-cjt10y7b.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { Wnn, uT, RPe, oIs, Gnn, of, dIs, sEo, uCr, pzn, TDt, F3e, aU, NH, Gt } from "./chunk-xywp7esx.js";

import { X } from "./chunk-1zg3hbfq.js";

import { mt } from "./chunk-j90se18b.js";

import { p } from "./chunk-jkzenvsk.js";

import { ng, PC, U9e, f_ } from "./chunk-q6wab2jw.js";

import { Yit, RV, HDn, DDn, Xit } from "./chunk-sqb9meyh.js";

import { Dnr, Lnr, h5r, xDe, jhe, Nnr, Ttt, YVt, $nr, y5r, XVt, kXo, TXo, Att, $Te, Ctt, q2e, zJ, X6 } from "./chunk-4bxgvwk3.js";

import { GEn, ZVt, OXo, Svt, VEn, FTe, Y2e, Bnr, wvt, KEn, vvt } from "./chunk-38c4jbk6.js";

import { oJn, Ajr, iVo, Cjr, sJn, Rjr, aVo, lVo, xjr, oGe, iJn, aJn, Djt, Pjr } from "./chunk-bpntmzk7.js";

import { qkn, Gvt } from "./chunk-19d60ej4.js";

import { cC } from "./chunk-ewk363e4.js";

import { Yg } from "./chunk-eha3vdmz.js";

var le = 5e3, fe = [ "not_permitted", "ip_restricted", "lane_unavailable" ];

function R(e) {
  return fe.some(o => o === e);
}

async function B(e, o, {etag: a} = {}) {
  let i = xDe(e);
  try {
    let s = ce(e, o), n = {
      ...s.headers,
      ...a !== void 0 && {
        "If-None-Match": a
      }
    }, r = await Gt.get(s.path, {
      auth: s.auth,
      isBackground: !0,
      timeout: le,
      maxContentLength: Yit,
      validateStatus: () => !0,
      ...Object.keys(n).length > 0 && {
        headers: n
      }
    });
    if (!r.ok) return t(`[servedCatalog] fetch (${i}) skipped: ${r.reason}${r.reason === "no-auth" ? ` (${r.detail})` : ""}`), 
    {
      status: "skipped",
      reason: r.reason
    };
    let m = r.status;
    if (m === 304 && a !== void 0) return t(`[servedCatalog] fetch (${i}): not modified`), 
    {
      status: "not_modified",
      httpStatus: m
    };
    if (m < 200 || m >= 300) {
      let u = I(e, m, r.data);
      return t(`[servedCatalog] fetch (${i}): HTTP ${m}${ge(u)}`), u ?? {
        status: "error",
        reason: "http_status",
        httpStatus: m
      };
    }
    let y = DDn().safeParse(r.data);
    if (!y.success) return t(`[servedCatalog] fetch (${i}): response failed validation`), 
    {
      status: "error",
      reason: "parse_failed",
      httpStatus: m
    };
    let h = xe(r.response?.headers), l = i === "orgless" ? he(y.data) : {}, b = Xit(y.data, o);
    if (b === null) return t(`[servedCatalog] fetch (${i}) ok: surface not served${L(l)}`), 
    {
      status: "empty",
      etag: h,
      httpStatus: m,
      ...l
    };
    if (Gnn(b)) return t(`[servedCatalog] fetch (${i}) ok: ${b.config.models?.length ?? 0} rows kept after row validation dropped others; etag withheld, full refetch next refresh${L(l)}`), 
    {
      status: "ok",
      catalog: b,
      etag: void 0,
      httpStatus: m,
      ...l
    };
    return t(`[servedCatalog] fetch (${i}) ok: ${b.config.models?.length ?? 0} rows${L(l)}`), 
    {
      status: "ok",
      catalog: b,
      etag: h,
      httpStatus: m,
      ...l
    };
  } catch (s) {
    let {kind: n, status: r} = ci(s);
    switch (t(`[servedCatalog] fetch (${i}) failed: ${n}${r !== void 0 ? ` ${r}` : ""}`), 
    n) {
     case "timeout":
      return {
        status: "error",
        reason: "timeout"
      };

     case "network":
      return {
        status: "error",
        reason: "network"
      };

     case "auth":
     case "http":
      return r === void 0 ? {
        status: "error",
        reason: "network"
      } : I(e, r, be(s)) ?? {
        status: "error",
        reason: "http_status",
        httpStatus: r
      };

     case "other":
      return {
        status: "error",
        reason: "exception"
      };
    }
  }
}

function ce(e, o) {
  switch (e.kind) {
   case "account":
    return {
      path: `/api/organizations/:orgUUID/model_selector/${o}`,
      auth: "teleport-org",
      headers: {}
    };

   case "token":
    return {
      path: `/api/model_selector/${o}`,
      auth: "claude-ai-oauth",
      headers: {
        "anthropic-client-platform": Yg()
      }
    };

   case "api_key":
    return {
      path: `/api/model_selector/${o}`,
      auth: "required",
      headers: {
        "anthropic-client-platform": Yg()
      }
    };

   case "profile":
   case "federation":
    return {
      path: `/api/model_selector/${o}`,
      auth: "async",
      headers: {
        "anthropic-client-platform": Yg()
      }
    };
  }
}

function he(e) {
  let o = Vt(e.organization_uuid)?.toLowerCase(), a = HDn.find(i => i === e.resolution);
  return {
    ...o !== void 0 && {
      organizationUuid: o
    },
    ...a !== void 0 && {
      resolution: a
    }
  };
}

function L(e) {
  return e.resolution === void 0 ? "" : ` (resolution ${e.resolution})`;
}

var j = [ "oauth_scope_insufficient", "oauth_token_narrowed" ], T = "ip_not_in_allowed_range", K = [ "not_found", "account_session_invalid", "organization_not_visible" ], lt = [ ...j, T, ...K ];

function V(e, o) {
  let a = q(o);
  return e.find(i => i === a);
}

function I(e, o, a) {
  return _e(o, a) ?? ye(o, a) ?? ke(e, o, a);
}

function ge(e) {
  if (e === void 0 || !R(e.reason)) return "";
  return `${e.errorCode !== void 0 ? ` ${e.errorCode}` : ""} (${U(e.reason)})`;
}

function U(e) {
  switch (e) {
   case "not_permitted":
    return "this credential cannot read the served list";

   case "ip_restricted":
    return "the organization's IP allowlist refuses this network";

   case "lane_unavailable":
    return "the server has not enabled the org-less route for this session";
  }
}

function _e(e, o) {
  let a = V(j, o);
  if (e === 403 && a !== void 0) return {
    status: "error",
    reason: "not_permitted",
    httpStatus: e,
    errorCode: a
  };
  return;
}

function ye(e, o) {
  if (e === 403 && q(o) === T) return {
    status: "error",
    reason: "ip_restricted",
    httpStatus: e,
    errorCode: T
  };
  return;
}

function ke(e, o, a) {
  if (xDe(e) !== "orgless") return;
  let i = V(K, a);
  if (o === 404 || o === 403 && i === "account_session_invalid" || o === 401 && i === "organization_not_visible" && jhe(e) === "profile") return {
    status: "error",
    reason: "lane_unavailable",
    httpStatus: o,
    ...i !== void 0 && {
      errorCode: i
    }
  };
  return;
}

function q(e) {
  let o = F(e, "error"), a = F(F(o, "details"), "error_code");
  return typeof a === "string" && a.length > 0 ? a : void 0;
}

function F(e, o) {
  return typeof e === "object" && e !== null && o in e ? e[o] : void 0;
}

function be(e) {
  return F(F(e, "response"), "data");
}

function xe(e) {
  let o = e?.etag;
  return RV(o) ? o : void 0;
}

var ve = 3e4, N = Dnr, we = 256;

function z(e) {
  return `${e.replace(/\.json$/, "")}.headless-failed.json`;
}

function Se(e, o = Math.random()) {
  return h5r(G(e), o);
}

function G(e) {
  return Math.min(ve * 2 ** (Math.max(1, e) - 1), N);
}

function Ce(e) {
  return G(e) * (1 + Lnr);
}

async function Hjt(e, o = Date.now(), a = Math.random()) {
  let i = await Y(e);
  if (i === void 0 || i.failedAt > o) return !0;
  return o - i.failedAt >= Se(i.failures, a);
}

async function Y(e) {
  let o;
  try {
    o = (await aU().readRange(z(e), 0, we)).toString("utf8");
  } catch (n) {
    if (!W(n)) t(`[servedCatalog] headless retry marker read failed: ${E(n) ?? "unknown"}`);
    return;
  }
  let a = mt(o, !1);
  if (typeof a !== "object" || a === null) return;
  let i = "failedAt" in a ? a.failedAt : void 0;
  if (typeof i !== "number" || !Number.isFinite(i)) return;
  let s = "failures" in a ? a.failures : void 0;
  return {
    failedAt: i,
    failures: typeof s === "number" && Number.isSafeInteger(s) && s >= 1 ? s : 1
  };
}

function Re(e, o) {
  return e.failedAt <= o && o - e.failedAt < Ce(e.failures) + N;
}

async function Ohn(e, o, a = Date.now()) {
  let i = aU(), s = z(e);
  try {
    if (o === "clear") {
      await i.delete(s);
      return;
    }
    let n = o === "back_off" ? await Y(e) : void 0, r = {
      failedAt: a,
      failures: n !== void 0 && Re(n, a) ? n.failures + 1 : 1
    };
    await i.mkdir(NH()), await i.atomicWrite(s, _(r), 384);
  } catch (n) {
    if (!W(n)) t(`[servedCatalog] headless retry marker write failed: ${E(n) ?? "unknown"}`);
  }
}

async function rJn(e, o) {
  let a = Ur().servedCatalogSettledRefreshes;
  if (a.has(o)) return;
  switch (a.add(o), o.fetchStatus) {
   case "error":
   case "skipped":
    await Ohn(e, Me(o) ? "retry_soon" : "back_off");
    return;

   case "ok":
   case "empty":
   case "not_modified":
    await Ohn(e, o.entry === void 0 || Att(o.entry) ? "back_off" : "clear");
    return;

   default:
    return;
  }
}

function Me(e) {
  return e.prior === void 0 && e.fetchStatus === "error" && !R(e.fetchReason);
}

function Mhn({allowNetwork: e}) {
  let o = $Te(), a = X6(), i = zJ();
  if (o === "off" || i === null) return Promise.resolve({
    mode: "off",
    surface: a,
    fetchStatus: "off",
    entry: void 0,
    prior: void 0
  });
  let s = Ur().servedCatalogRefreshes, n = YVt(i, a), r = s.get(n);
  if (r) return r;
  let m = Ee({
    mode: o,
    surface: a,
    scope: i,
    allowNetwork: e
  }).finally(() => {
    s.delete(n);
  });
  return s.set(n, m), m;
}

async function Ee({mode: e, surface: o, scope: a, allowNetwork: i}) {
  let s, n, r = xDe(a), m = jhe(a), y = l => ({
    mode: e,
    surface: o,
    route: r,
    credential: m,
    ...l?.resolution !== void 0 && {
      resolution: l.resolution
    },
    prior: s,
    ...n !== void 0 && {
      fetchMs: n
    }
  }), h = () => y(s);
  try {
    if (s = await $nr(a, o), s && !Att(s)) return {
      ...h(),
      fetchStatus: "cache_fresh",
      entry: s
    };
    if (!i) return {
      ...h(),
      fetchStatus: "cache_only",
      entry: s
    };
    let l = Ur().servedCatalogRefusal;
    if (l !== void 0) return {
      ...h(),
      fetchStatus: "cache_only",
      fetchReason: l,
      entry: s
    };
    let b = performance.now(), u = await B(a, o, {
      etag: s?.etag
    });
    if (n = Math.round(performance.now() - b), !Nnr(zJ(), a)) return t("[servedCatalog] scope changed during fetch; answer dropped"), 
    {
      ...h(),
      fetchStatus: "error",
      fetchReason: "scope_changed",
      entry: void 0
    };
    switch (u.status) {
     case "ok":
     case "empty":
      {
        let k = kXo({
          catalog: u.status === "ok" ? u.catalog : null,
          etag: u.etag,
          organizationUuid: u.organizationUuid,
          resolution: u.resolution
        });
        if (await XVt(a, o, k), u.status === "ok") pzn(u.catalog);
        return {
          ...h(),
          resolution: u.resolution,
          fetchStatus: u.status,
          httpStatus: u.httpStatus,
          entry: k
        };
      }

     case "not_modified":
      {
        let k = s ? TXo(s) : void 0;
        if (k) await XVt(a, o, k);
        return {
          ...h(),
          fetchStatus: "not_modified",
          httpStatus: u.httpStatus,
          entry: k
        };
      }

     case "skipped":
      return {
        ...h(),
        fetchStatus: "skipped",
        fetchReason: u.reason,
        entry: s
      };

     case "error":
      {
        if (R(u.reason)) Ur().servedCatalogRefusal = u.reason;
        let k = s;
        if (u.reason === "lane_unavailable" && s !== void 0) t("[servedCatalog] org-less route not enabled; cached entry discarded"), 
        await y5r(a, o), k = void 0;
        return {
          ...y(k),
          fetchStatus: "error",
          fetchReason: u.reason,
          httpStatus: u.httpStatus,
          ...u.errorCode !== void 0 && {
            errorCode: u.errorCode
          },
          entry: k
        };
      }
    }
  } catch (l) {
    return d(l), {
      ...h(),
      fetchStatus: "error",
      fetchReason: "exception",
      entry: s
    };
  }
}

var Oe = 1750, Fe = 1500, Pe = 4500;

function He(e) {
  if (X6() === "ccr") return Pe;
  return e ? Fe : Oe;
}

var Ae = 2e3;

async function Z({headless: e}) {
  if (Ur().servedCatalogActive !== void 0) return;
  try {
    if ($Te() !== "primary" || Le()) {
      Te(e);
      return;
    }
    let o = zJ();
    if (o === null) {
      M("no_scope", "no cache scope");
      return;
    }
    let a = X6(), i = await $nr(o, a), s = "cache", n, r = {}, m, y = !1, h;
    if (i === void 0) {
      let x = e ? Ttt(o, a) : null;
      if (x !== null && !await Hjt(x)) y = !0; else {
        let v = Mhn({
          allowNetwork: !0
        });
        if (x !== null) v = v.then(async O => (await rJn(x, O), O));
        let w = await J(v, {
          wait: "first_fetch",
          headless: e,
          budgetMs: He(e),
          scope: o
        });
        m = w.timing, h = w.outcome, i = w.outcome?.entry, n = w.outcome === void 0 ? "timeout" : w.outcome.fetchStatus, 
        r = Q(w.outcome), s = `fetch:${n}`;
      }
    } else if (!e && Att(i)) {
      let x = await J(Mhn({
        allowNetwork: !0
      }), {
        wait: "stale_refresh",
        headless: e,
        budgetMs: Ae,
        scope: o
      });
      if (m = x.timing, h = x.outcome, n = x.outcome === void 0 ? "timeout" : x.outcome.fetchStatus, 
      x.outcome?.fetchReason === "lane_unavailable") i = void 0; else i = x.outcome?.entry ?? i, 
      s = `stale cache: waited ${m.wait_ms}ms for refresh \u2192 ${Att(i) ? "kept stale" : "refreshed"} (fetch:${n})`;
    }
    if (Ur().servedCatalogActive !== void 0 || !Nnr(zJ(), o)) return;
    let l = i?.catalog ?? null, b = i?.resolution ?? h?.resolution, u = ee(o, b);
    if (l === null) {
      if (i !== void 0) M("surface_not_served", "server serves this surface no rows", {
        ...u,
        ...m
      }, o); else if (y) M("headless_held_off", "nothing cached, and a recent headless request failed, so this run does not ask again", u, o); else if (h !== void 0 && De(h)) Be(h, {
        headless: e,
        timing: m,
        lane: u,
        scope: o
      }); else M(`${e ? "headless_" : ""}fetch_${n ?? "none"}`, `nothing cached, ${s} produced no rows`, {
        ...u,
        ...r,
        ...m
      }, o);
      return;
    }
    if (F3e(l).length === 0) {
      M(RPe(l).length === 0 ? "no_selectable_rows" : "no_offered_rows", `served rows hold no model this build offers (${uT(l).length} rows via ${s})`, {
        ...u,
        ...m
      }, o);
      return;
    }
    let k = i !== void 0 && Att(i);
    dIs(l, i?.fetchedAt, k, {
      route: xDe(o),
      credential: jhe(o),
      organizationUuid: i?.organizationUuid,
      resolution: i?.resolution
    }), g("model_catalog_primary", {
      decision: c("served"),
      ...u,
      ...m
    }), t(`[servedCatalog] primary: using served rows (${uT(l).length} rows via ${s} over the ${xDe(o)} route${Ue(jhe(o))}, fetched ${Math.max(0, Math.round((Date.now() - (i?.fetchedAt ?? Date.now())) / 1e3))}s ago${k ? ", stale" : ""}); the served list replaces the compiled picker for this session`);
  } catch (o) {
    if (d(o), Ur().servedCatalogActive === void 0 && $Te() === "primary") M("exception", "exception");
  }
}

async function X2o() {}

function Le() {
  return !1;
}

function Te(e) {}

function Q(e) {
  let o = pe(e?.fetchReason), a = e?.httpStatus;
  return {
    ...o !== void 0 && {
      fetch_reason: o
    },
    ...a !== void 0 && {
      http_status: a
    }
  };
}

function ee(e, o) {
  let a = xDe(e);
  return {
    route: c(a),
    credential: c(jhe(e)),
    auth_kind: c(q2e()),
    ...a === "orgless" && {
      resolution: c(o ?? "unknown")
    }
  };
}

function Ue(e) {
  switch (e) {
   case "oauth":
    return "";

   case "api_key":
    return " with the API key";

   case "profile":
    return " with the Console profile";

   case "federation":
    return " with the federation credential";
  }
}

function te(e) {
  return {
    route: xDe(e),
    credential: jhe(e)
  };
}

async function J(e, o) {
  let {budgetMs: a} = o, i = performance.now(), s = await Ht(e, a, `served catalog ${o.wait}`).catch(() => {});
  if (s === void 0) e.then(r => $e(r, o)).catch(r => d(r));
  let n = s?.fetchMs;
  return X(s === void 0 ? "warn" : "info", "model_catalog_refresh_wait", {
    budget_ms: a,
    waited_ms: Math.round(performance.now() - i),
    timed_out: s === void 0,
    first_fetch: o.wait === "first_fetch"
  }), {
    outcome: s,
    timing: {
      wait_ms: Math.round(performance.now() - i),
      wait_budget_ms: a,
      wait_timed_out: s === void 0,
      ...n !== void 0 && {
        fetch_ms: n
      },
      startup_ms: Math.round(i)
    }
  };
}

function $e(e, {wait: o, headless: a, budgetMs: i, scope: s}) {
  let n = e.fetchStatus === "error" || e.fetchStatus === "skipped", r = {
    wait: c(o),
    headless: a,
    wait_budget_ms: i,
    ...ee(s, e.resolution),
    ...e.fetchMs !== void 0 && {
      fetch_ms: e.fetchMs
    },
    fetch_status: c(e.fetchStatus),
    ...Q(e),
    cache_written: !n && e.fetchStatus !== "cache_fresh" && e.fetchStatus !== "cache_only" && e.entry !== void 0
  };
  if (n) f("model_catalog_late_fetch", `fetch_${e.fetchStatus}`, r); else g("model_catalog_late_fetch", r);
  t(`[servedCatalog] ${o} settled after its ${i}ms wait: fetch:${e.fetchStatus}, request took ${e.fetchMs ?? "?"}ms`);
}

function De(e) {
  return R(e.fetchReason);
}

var Ie = {
  not_permitted: "credential_scope",
  ip_restricted: "ip_restricted",
  lane_unavailable: "lane_unavailable"
};

function Be(e, {headless: o, timing: a, lane: i, scope: s}) {
  let n = Ie[e.fetchReason];
  sEo(n, te(s)), g("model_catalog_primary", {
    decision: c("off"),
    off_reason: c(n),
    ...oe(n),
    headless: o,
    ...i,
    ...e.httpStatus !== void 0 && {
      http_status: e.httpStatus
    },
    ...e.errorCode !== void 0 && {
      refusal_code: c(e.errorCode)
    },
    ...a
  });
  let r = `${e.httpStatus ?? "?"}${e.errorCode !== void 0 ? ` ${e.errorCode}` : ""}`;
  t(`[servedCatalog] primary: served rows unavailable (${U(e.fetchReason)}: ${r}); using compiled behavior`);
}

function M(e, o, a, i, s) {
  sEo(e, {
    ...i !== void 0 && te(i),
    ...s !== void 0 && {
      organizationUuid: s
    }
  }), f("model_catalog_primary", e, {
    ...oe(e),
    ...a
  }), t(`[servedCatalog] primary: served rows unavailable (${o}); using compiled behavior`);
}

function oe(e) {
  return {};
}

var ae = {
  $schema: "https://downloads.claude.ai/model-catalog/v1/schema.json",
  schema_version: 1,
  version: 2160,
  issued_at: "2026-10-13T01:07:10Z",
  expires_at: "2026-10-20T01:07:10Z",
  key_id: "claude-code-release-signing-key",
  surfaces: {
    cc: {
      model_selector_state: [ {
        id: "cc",
        model: "claude-opus-5",
        thinking: {
          type: "effort",
          effort: "high"
        },
        thinking_by_model: [ {
          id: "claude-fable-5-1",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-sonnet-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-haiku-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-fable-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-4-8",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-4-7",
          thinking: {
            type: "effort",
            effort: "xhigh"
          }
        }, {
          id: "claude-opus-4-6",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-sonnet-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-sonnet-4-6",
          thinking: {
            type: "effort",
            effort: "high"
          }
        } ],
        selection_source: "global_default"
      } ],
      model_selector_config: [ {
        id: "cc",
        models: [ {
          id: "claude-opus-5-5",
          name: "Opus 5.5",
          short_name: "Opus",
          description: "For complex work and everyday tasks",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [ {
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          min_claude_code_version: "2.1.280",
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "medium",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-sonnet-5-5",
          name: "Sonnet 5.5",
          short_name: "Sonnet",
          description: "Most efficient for simpler tasks",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "medium",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "sonnet"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-fable-5-1",
          name: "Fable 5.1",
          short_name: "Fable",
          description: "For your toughest challenges",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          min_claude_code_version: "2.1.251",
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "fable"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-haiku-5-5",
          name: "Haiku 5.5",
          short_name: "Haiku",
          description: "Fastest for quick answers",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "medium",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "haiku"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-haiku-4-5-20251001",
          name: "Haiku 4.5",
          short_name: "Haiku",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "none"
          },
          auto_permission_mode: "unavailable",
          runtime: {
            max_input_tokens: 2e5,
            max_output_tokens: 64e3,
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "haiku"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-sonnet-5",
          name: "Sonnet 5",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "sonnet"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-5",
          name: "Opus 5",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [ {
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-fable-5",
          name: "Fable 5",
          short_name: "Fable",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "fable"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-4-8",
          name: "Opus 4.8",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [ {
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-4-7",
          name: "Opus 4.7",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "xhigh",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-4-6",
          name: "Opus 4.6",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [ {
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-sonnet-4-6",
          name: "Sonnet 4.6",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "sonnet"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-4-1-20250805",
          name: "Opus 4.1",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "none"
          },
          auto_permission_mode: "unavailable",
          runtime: {
            max_input_tokens: 2e5,
            max_output_tokens: 32e3,
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "opus"
          },
          offered_on: [ "bedrock", "vertex" ]
        } ],
        settings_vocabulary: {
          create_mode: {
            default: 1
          },
          effort_level: {
            high: 3,
            low: 1,
            max: 5,
            medium: 2,
            xhigh: 4
          },
          thinking_mode: {
            auto: 2,
            extended: 1,
            off: 3
          }
        },
        provider_alias_targets: {
          fable: {
            default: "claude-fable-5-1",
            per_provider: {
              gateway: "claude-fable-5"
            }
          },
          haiku: {
            default: "claude-haiku-4-5-20251001"
          },
          opus: {
            default: "claude-opus-5",
            per_provider: {
              anthropic_aws: "claude-opus-5",
              bedrock: "claude-opus-5",
              foundry: "claude-opus-4-6",
              gateway: "claude-opus-4-7",
              mantle: "claude-opus-5",
              vertex: "claude-opus-5"
            }
          },
          sonnet: {
            default: "claude-sonnet-5",
            per_provider: {
              anthropic_aws: "claude-sonnet-4-6",
              gateway: "claude-sonnet-4-6"
            }
          }
        }
      } ]
    },
    ccd: {
      model_selector_state: [ {
        id: "ccd",
        model: "claude-opus-5",
        thinking: {
          type: "effort",
          effort: "high"
        },
        thinking_by_model: [ {
          id: "claude-fable-5-1",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-sonnet-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-haiku-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-fable-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-4-8",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-4-7",
          thinking: {
            type: "effort",
            effort: "xhigh"
          }
        }, {
          id: "claude-opus-4-6",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-sonnet-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-sonnet-4-6",
          thinking: {
            type: "effort",
            effort: "high"
          }
        } ],
        selection_source: "global_default"
      } ],
      model_selector_config: [ {
        id: "ccd",
        models: [ {
          id: "claude-opus-5-5",
          name: "Opus 5.5",
          short_name: "Opus",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [ {
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          min_claude_code_version: "2.1.280",
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "medium",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-sonnet-5-5",
          name: "Sonnet 5.5",
          short_name: "Sonnet",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "medium",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "sonnet"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-fable-5-1",
          name: "Fable 5.1",
          short_name: "Fable",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          min_claude_code_version: "2.1.251",
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "fable"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-haiku-5-5",
          name: "Haiku 5.5",
          short_name: "Haiku",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "medium",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "haiku"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-haiku-4-5-20251001",
          name: "Haiku 4.5",
          short_name: "Haiku",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "none"
          },
          auto_permission_mode: "unavailable",
          runtime: {
            max_input_tokens: 2e5,
            max_output_tokens: 64e3,
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "haiku"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-sonnet-5",
          name: "Sonnet 5",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "sonnet"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-5",
          name: "Opus 5",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [ {
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-fable-5",
          name: "Fable 5",
          short_name: "Fable",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "fable"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-4-8",
          name: "Opus 4.8",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [ {
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-4-7",
          name: "Opus 4.7",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "xhigh",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-4-6",
          name: "Opus 4.6",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [ {
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-sonnet-4-6",
          name: "Sonnet 4.6",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "sonnet"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-4-1-20250805",
          name: "Opus 4.1",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "none"
          },
          auto_permission_mode: "unavailable",
          runtime: {
            max_input_tokens: 2e5,
            max_output_tokens: 32e3,
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "opus"
          },
          offered_on: [ "bedrock", "vertex" ]
        } ],
        settings_vocabulary: {
          create_mode: {
            default: 1
          },
          effort_level: {
            high: 3,
            low: 1,
            max: 5,
            medium: 2,
            xhigh: 4
          },
          thinking_mode: {
            auto: 2,
            extended: 1,
            off: 3
          }
        },
        provider_alias_targets: {
          fable: {
            default: "claude-fable-5-1",
            per_provider: {
              gateway: "claude-fable-5"
            }
          },
          haiku: {
            default: "claude-haiku-4-5-20251001"
          },
          opus: {
            default: "claude-opus-5",
            per_provider: {
              anthropic_aws: "claude-opus-5",
              bedrock: "claude-opus-5",
              foundry: "claude-opus-4-6",
              gateway: "claude-opus-4-7",
              mantle: "claude-opus-5",
              vertex: "claude-opus-5"
            }
          },
          sonnet: {
            default: "claude-sonnet-5",
            per_provider: {
              anthropic_aws: "claude-sonnet-4-6",
              gateway: "claude-sonnet-4-6"
            }
          }
        }
      } ]
    },
    ccr: {
      model_selector_state: [ {
        id: "ccr",
        model: "claude-opus-5",
        thinking: {
          type: "effort",
          effort: "high"
        },
        thinking_by_model: [ {
          id: "claude-fable-5-1",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-sonnet-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-haiku-5-5",
          thinking: {
            type: "effort",
            effort: "medium"
          }
        }, {
          id: "claude-fable-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-4-8",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-opus-4-7",
          thinking: {
            type: "effort",
            effort: "xhigh"
          }
        }, {
          id: "claude-opus-4-6",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-sonnet-5",
          thinking: {
            type: "effort",
            effort: "high"
          }
        }, {
          id: "claude-sonnet-4-6",
          thinking: {
            type: "effort",
            effort: "high"
          }
        } ],
        selection_source: "global_default"
      } ],
      model_selector_config: [ {
        id: "ccr",
        models: [ {
          id: "claude-opus-5-5",
          name: "Opus 5.5",
          short_name: "Opus",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [ {
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          min_claude_code_version: "2.1.280",
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "medium",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-sonnet-5-5",
          name: "Sonnet 5.5",
          short_name: "Sonnet",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "medium",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "sonnet"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-fable-5-1",
          name: "Fable 5.1",
          short_name: "Fable",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          min_claude_code_version: "2.1.251",
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "fable"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-haiku-5-5",
          name: "Haiku 5.5",
          short_name: "Haiku",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          quick_select: !0,
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "medium",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "haiku"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-haiku-4-5-20251001",
          name: "Haiku 4.5",
          short_name: "Haiku",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "none"
          },
          auto_permission_mode: "unavailable",
          runtime: {
            max_input_tokens: 2e5,
            max_output_tokens: 64e3,
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "haiku"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-sonnet-5",
          name: "Sonnet 5",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "sonnet"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-5",
          name: "Opus 5",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [ {
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-fable-5",
          name: "Fable 5",
          short_name: "Fable",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "fable"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-4-8",
          name: "Opus 4.8",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [ {
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-4-7",
          name: "Opus 4.7",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "xhigh", "max" ],
            default_effort: "xhigh",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 2576,
              max_height: 2576,
              max_image_tokens: 4784
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-opus-4-6",
          name: "Opus 4.6",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          fast_mode: {
            type: "toggle",
            name: "Fast mode",
            options: [ {
              id: "fast",
              name: "Enable fast mode",
              selector_label: "Fast"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "opus"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        }, {
          id: "claude-sonnet-4-6",
          name: "Sonnet 4.6",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ]
          },
          runtime: {
            max_input_tokens: 1e6,
            max_output_tokens: 128e3,
            effort_levels: [ "low", "medium", "high", "max" ],
            default_effort: "high",
            capabilities: [ "compass", "gsuite_tools", "mm_images", "mm_pdf", "web_search" ],
            image_limits: {
              max_width: 1568,
              max_height: 1568,
              max_image_tokens: 1568
            },
            family: "sonnet"
          },
          offered_on: [ "first_party", "anthropic_aws", "bedrock", "vertex", "foundry", "mantle", "gateway" ]
        } ],
        settings_vocabulary: {
          create_mode: {
            default: 1
          },
          effort_level: {
            high: 3,
            low: 1,
            max: 5,
            medium: 2,
            xhigh: 4
          },
          thinking_mode: {
            auto: 2,
            extended: 1,
            off: 3
          }
        },
        provider_alias_targets: {
          fable: {
            default: "claude-fable-5-1",
            per_provider: {
              gateway: "claude-fable-5"
            }
          },
          haiku: {
            default: "claude-haiku-4-5-20251001"
          },
          opus: {
            default: "claude-opus-5",
            per_provider: {
              anthropic_aws: "claude-opus-5",
              bedrock: "claude-opus-5",
              foundry: "claude-opus-4-6",
              gateway: "claude-opus-4-7",
              mantle: "claude-opus-5",
              vertex: "claude-opus-5"
            }
          },
          sonnet: {
            default: "claude-sonnet-5",
            per_provider: {
              anthropic_aws: "claude-sonnet-4-6",
              gateway: "claude-sonnet-4-6"
            }
          }
        }
      } ]
    },
    chat: {
      model_selector_state: [ {
        id: "chat",
        model: "claude-sonnet-4-6",
        thinking: {
          type: "effort_and_mode",
          effort: "low",
          mode: "off"
        },
        thinking_by_model: [ {
          id: "claude-fable-5-1",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-opus-5-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-sonnet-5-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-haiku-5-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-fable-5",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-opus-5",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-opus-4-8",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-opus-4-7",
          thinking: {
            type: "effort_and_mode",
            effort: "xhigh",
            mode: "auto"
          }
        }, {
          id: "claude-opus-4-6",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "extended"
          }
        }, {
          id: "claude-sonnet-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-sonnet-4-6",
          thinking: {
            type: "effort_and_mode",
            effort: "low",
            mode: "off"
          }
        }, {
          id: "claude-haiku-4-5-20251001",
          thinking: {
            type: "mode",
            mode: "extended"
          }
        } ],
        selection_source: "global_default"
      } ],
      model_selector_config: [ {
        id: "chat",
        models: [ {
          id: "claude-fable-5-1",
          name: "Fable 5.1",
          short_name: "Fable",
          description: "For your toughest challenges",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            } ]
          },
          hard_limit: 95e4,
          voice_model: "claude-opus-5",
          min_claude_code_version: "2.1.251",
          quick_select: !0
        }, {
          id: "claude-opus-5-5",
          name: "Opus 5.5",
          short_name: "Opus",
          description: "For complex work and everyday tasks",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            } ]
          },
          hard_limit: 95e4,
          supports_fast_mode: !0,
          voice_model: "claude-opus-5",
          min_claude_code_version: "2.1.280",
          quick_select: !0
        }, {
          id: "claude-sonnet-5-5",
          name: "Sonnet 5.5",
          short_name: "Sonnet",
          description: "Most efficient for simpler tasks",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            } ],
            always_on: !0
          },
          hard_limit: 95e4,
          voice_model: "claude-sonnet-5",
          quick_select: !0
        }, {
          id: "claude-haiku-5-5",
          name: "Haiku 5.5",
          short_name: "Haiku",
          description: "Fastest for quick answers",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            } ],
            always_on: !0
          },
          hard_limit: 95e4,
          voice_model: "claude-haiku-4-5-20251001",
          quick_select: !0
        }, {
          id: "claude-fable-5",
          name: "Fable 5",
          short_name: "Fable",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            } ]
          },
          hard_limit: 449e3,
          voice_model: "claude-opus-5"
        }, {
          id: "claude-opus-5",
          name: "Opus 5",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            } ],
            always_on: !0
          },
          hard_limit: 95e4,
          supports_fast_mode: !0
        }, {
          id: "claude-opus-4-8",
          name: "Opus 4.8",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 95e4,
          supports_fast_mode: !0,
          voice_model: "claude-opus-5"
        }, {
          id: "claude-opus-4-7",
          name: "Opus 4.7",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 449e3,
          voice_model: "claude-opus-5"
        }, {
          id: "claude-opus-4-6",
          name: "Opus 4.6",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "extended",
              name: "Extended",
              description: "Always uses deep reasoning"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 449e3,
          supports_fast_mode: !0,
          voice_model: "claude-opus-5"
        }, {
          id: "claude-sonnet-5",
          name: "Sonnet 5",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 95e4
        }, {
          id: "claude-sonnet-4-6",
          name: "Sonnet 4.6",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 449e3,
          voice_model: "claude-sonnet-5"
        }, {
          id: "claude-haiku-4-5-20251001",
          name: "Haiku 4.5",
          short_name: "Haiku",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "mode",
            mode_options: [ {
              id: "extended",
              name: "Extended",
              description: "Always uses deep reasoning"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 19e4,
          auto_permission_mode: "unavailable"
        }, {
          id: "claude-opus-4-5-20251101",
          name: "Opus 4.5",
          short_name: "Opus",
          section: "deprecated",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            } ],
            mode_options: [ {
              id: "extended",
              name: "Extended",
              description: "Always uses deep reasoning"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 19e4,
          auto_permission_mode: "unavailable",
          voice_model: "claude-opus-5",
          disabled: !0
        } ],
        settings_vocabulary: {
          create_mode: {
            default: 1
          },
          effort_level: {
            high: 3,
            low: 1,
            max: 5,
            medium: 2,
            xhigh: 4
          },
          thinking_mode: {
            auto: 2,
            extended: 1,
            off: 3
          }
        }
      } ]
    },
    cowork: {
      model_selector_state: [ {
        id: "cowork",
        model: "claude-sonnet-4-6",
        thinking: {
          type: "effort_and_mode",
          effort: "medium",
          mode: "auto"
        },
        thinking_by_model: [ {
          id: "claude-fable-5-1",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-opus-5-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-sonnet-5-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-haiku-5-5",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-fable-5",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-opus-5",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-opus-4-8",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-opus-4-7",
          thinking: {
            type: "effort_and_mode",
            effort: "xhigh",
            mode: "auto"
          }
        }, {
          id: "claude-opus-4-6",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "extended"
          }
        }, {
          id: "claude-sonnet-5",
          thinking: {
            type: "effort_and_mode",
            effort: "high",
            mode: "auto"
          }
        }, {
          id: "claude-sonnet-4-6",
          thinking: {
            type: "effort_and_mode",
            effort: "medium",
            mode: "auto"
          }
        }, {
          id: "claude-haiku-4-5-20251001",
          thinking: {
            type: "mode",
            mode: "extended"
          }
        } ],
        selection_source: "global_default"
      } ],
      model_selector_config: [ {
        id: "cowork",
        models: [ {
          id: "claude-fable-5-1",
          name: "Fable 5.1",
          short_name: "Fable",
          description: "For your toughest challenges",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            } ]
          },
          hard_limit: 95e4,
          min_claude_code_version: "2.1.251",
          quick_select: !0
        }, {
          id: "claude-opus-5-5",
          name: "Opus 5.5",
          short_name: "Opus",
          description: "For complex work and everyday tasks",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            } ]
          },
          hard_limit: 95e4,
          supports_fast_mode: !0,
          min_claude_code_version: "2.1.280",
          quick_select: !0
        }, {
          id: "claude-sonnet-5-5",
          name: "Sonnet 5.5",
          short_name: "Sonnet",
          description: "Most efficient for simpler tasks",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            } ],
            always_on: !0
          },
          hard_limit: 95e4,
          quick_select: !0
        }, {
          id: "claude-haiku-5-5",
          name: "Haiku 5.5",
          short_name: "Haiku",
          description: "Fastest for quick answers",
          section: "main",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            } ],
            always_on: !0
          },
          hard_limit: 95e4,
          quick_select: !0
        }, {
          id: "claude-fable-5",
          name: "Fable 5",
          short_name: "Fable",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            } ]
          },
          hard_limit: 449e3
        }, {
          id: "claude-opus-5",
          name: "Opus 5",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            } ],
            always_on: !0
          },
          hard_limit: 95e4,
          supports_fast_mode: !0
        }, {
          id: "claude-opus-4-8",
          name: "Opus 4.8",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 95e4,
          supports_fast_mode: !0
        }, {
          id: "claude-opus-4-7",
          name: "Opus 4.7",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High"
            }, {
              id: "xhigh",
              name: "Extra",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 449e3
        }, {
          id: "claude-opus-4-6",
          name: "Opus 4.6",
          short_name: "Opus",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "extended",
              name: "Extended",
              description: "Always uses deep reasoning"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 449e3,
          supports_fast_mode: !0
        }, {
          id: "claude-sonnet-5",
          name: "Sonnet 5",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium"
            }, {
              id: "high",
              name: "High",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "xhigh",
              name: "Extra"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 95e4
        }, {
          id: "claude-sonnet-4-6",
          name: "Sonnet 4.6",
          short_name: "Sonnet",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "effort_and_mode",
            description: "Higher effort means more thorough responses, but takes longer and uses your limits faster.",
            effort_options: [ {
              id: "low",
              name: "Low"
            }, {
              id: "medium",
              name: "Medium",
              recommended: !0,
              badge: {
                message: "Recommended",
                variant: "neutral"
              }
            }, {
              id: "high",
              name: "High"
            }, {
              id: "max",
              name: "Max",
              tooltip: {
                content: "May use excessive tokens resulting in long response times and may hit token limits. Use sparingly for the hardest tasks."
              }
            } ],
            mode_options: [ {
              id: "auto",
              name: "Thinking",
              description: "Can think for more complex tasks"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 449e3
        }, {
          id: "claude-haiku-4-5-20251001",
          name: "Haiku 4.5",
          short_name: "Haiku",
          section: "overflow",
          capabilities: {
            compass: !0,
            gsuite_tools: !0,
            mm_images: !0,
            mm_pdf: !0,
            web_search: !0
          },
          thinking: {
            type: "mode",
            mode_options: [ {
              id: "extended",
              name: "Extended",
              description: "Always uses deep reasoning"
            }, {
              id: "off",
              name: "Off"
            } ]
          },
          hard_limit: 19e4,
          auto_permission_mode: "unavailable"
        } ],
        settings_vocabulary: {
          create_mode: {
            default: 1
          },
          effort_level: {
            high: 3,
            low: 1,
            max: 5,
            medium: 2,
            xhigh: 4
          },
          thinking_mode: {
            auto: 2,
            extended: 1,
            off: 3
          }
        }
      } ]
    }
  }
};

var Ke = p(() => {
  let e = Y2e().safeParse(ae);
  if (!e.success) d(Error("published model-catalog seed does not parse"));
  return {
    document: e.success ? e.data : null
  };
});

function se() {
  return Ke().document;
}

function ne() {
  return se()?.version ?? 0;
}

function re(e) {
  let o = se();
  return o === null ? null : wvt(o, e);
}

function ie(e) {
  return of(e).replace(/-\d{8}$/, "");
}

function de(e) {
  let o = new Set(uT(e).map(i => ie(i.id))), a = oIs(e);
  for (let i of Wnn) {
    let s = a[i], n = _9e(i, "first_party");
    if (s === void 0 || n === void 0) continue;
    if (o.has(n)) continue;
    if (hl(ie(s)) === void 0) continue;
    return {
      family: i,
      compiled: n,
      seed: s
    };
  }
  return null;
}

async function P(e) {
  if (e.trust.kind === "untrusted") return;
  let o = await oJn(e.cacheKey);
  if (o === void 0) return;
  let a = await Ve(o, e);
  if (!a.ok) {
    if (a.reason === "unknown_key" && e.kind !== "hosted" && ZVt()) {
      t("[publishedCatalog] cached document names a key this session does not hold while server-managed settings are unconfirmed; not using it this session, keeping the file"), 
      iVo(e.cacheKey);
      return;
    }
    t(`[publishedCatalog] cached document not re-established (${a.reason}); discarding`), 
    await Ajr(e.cacheKey);
    return;
  }
  let i = a.entry;
  return await sJn(e.cacheKey, i, {
    verified: !0
  }), i;
}

async function Ve(e, o) {
  let a = o.trust;
  if (a.kind === "untrusted") return {
    ok: !1,
    reason: "untrusted_source"
  };
  let i = qe(e.documentBytes);
  if (i === void 0) return {
    ok: !1,
    reason: "undecodable_bytes"
  };
  let s = await vvt({
    documentBytes: i,
    sidecar: e.sidecar,
    roots: a.roots
  });
  if (!s.ok) return {
    ok: !1,
    reason: s.reason
  };
  let n = Ne(i);
  if (n === void 0) return {
    ok: !1,
    reason: "unparseable_document"
  };
  let r = await D(n, o, void 0, s.rootId);
  if (r !== void 0) return {
    ok: !1,
    reason: r
  };
  return await Gvt(o.cacheKey, n), {
    ok: !0,
    entry: {
      ...e,
      document: n,
      rootId: s.rootId,
      source: o.kind
    }
  };
}

function qe(e) {
  let o = Buffer.from(e, "base64");
  if (o.toString("base64") !== e) return;
  return o.length > 0 && o.length <= FTe ? new Uint8Array(o) : void 0;
}

function Ne(e) {
  let o = mt(Buffer.from(e).toString("utf8"), !1);
  if (Bnr(o) !== VEn) return;
  let a = Y2e().safeParse(o);
  return a.success ? a.data : void 0;
}

function ze(e, o, a) {
  let i = e.kind === "hosted" || GEn(a) === "compiled_roots";
  return Math.max(o?.document.version ?? 0, i ? ne() : 0);
}

async function D(e, o, a, i) {
  if (e.version < ze(o, a, i)) return "replayed_version";
  if (e.version < await qkn(o.cacheKey)) return "catalog_version_rollback";
  return;
}

function Hhn({allowNetwork: e}) {
  let o = Ctt("published");
  if (!Djt()) return Promise.resolve({
    mode: o,
    source: void 0,
    fetchStatus: "off",
    expired: !1,
    entry: void 0
  });
  let a = Svt();
  if (!a.ok) return Promise.resolve({
    mode: o,
    source: void 0,
    fetchStatus: "invalid_url",
    expired: !1,
    entry: void 0
  });
  let {source: i} = a, s = Ur().publishedCatalogRefreshes, n = s.get(i.cacheKey);
  if (n) return n;
  let r = Ge({
    mode: o,
    source: i,
    allowNetwork: e
  }).finally(() => {
    s.delete(i.cacheKey);
  });
  return s.set(i.cacheKey, r), r;
}

async function Ge({mode: e, source: o, allowNetwork: a}) {
  let i = {
    mode: e,
    source: o
  }, s, n = r => r !== void 0 && xjr(r.document);
  try {
    if (o.trust.kind === "untrusted") return t(`[publishedCatalog] ${o.kind} source skipped: ${o.trust.reason}`), 
    {
      ...i,
      fetchStatus: "skipped",
      fetchReason: o.trust.reason,
      expired: !1,
      entry: void 0
    };
    if (s = await P(o), s && !oGe(s)) return {
      ...i,
      fetchStatus: "cache_fresh",
      expired: !1,
      entry: s
    };
    if (s && n(s)) t("[publishedCatalog] cached document is past its expires_at; refreshing");
    if (!a && o.kind !== "file") return {
      ...i,
      fetchStatus: "cache_only",
      expired: n(s),
      entry: s
    };
    let r = await KEn(o, {
      etag: s?.etag
    });
    switch (r.status) {
     case "not_modified":
      {
        let m = s ? lVo(s) : void 0;
        if (m) await Cjr(o.cacheKey, m);
        return {
          ...i,
          fetchStatus: "not_modified",
          httpStatus: r.httpStatus,
          expired: n(m),
          entry: m
        };
      }

     case "error":
      return {
        ...i,
        fetchStatus: "error",
        fetchReason: r.reason,
        httpStatus: r.httpStatus,
        expired: n(s),
        entry: s
      };

     case "ok":
      {
        let m = await Ye({
          source: o,
          cached: s,
          result: r
        });
        if (!m.ok) return t(`[publishedCatalog] document rejected: ${m.reason}; keeping ${s ? "last good document" : "nothing"}`), 
        {
          ...i,
          fetchStatus: "rejected",
          fetchReason: m.reason,
          httpStatus: r.httpStatus,
          expired: n(s),
          entry: s
        };
        let y = aVo({
          document: m.document,
          documentBytes: r.documentBytes,
          sidecar: r.sidecar,
          etag: r.etag,
          source: o.kind,
          rootId: m.rootId
        });
        await Cjr(o.cacheKey, y);
        let h = n(y);
        return t(`[publishedCatalog] accepted ${o.kind} document v${m.document.version} (verified by ${m.rootId})${h ? ", past its expires_at" : ""}`), 
        {
          ...i,
          fetchStatus: "ok",
          httpStatus: r.httpStatus,
          expired: h,
          entry: y
        };
      }
    }
  } catch (r) {
    return d(r), {
      ...i,
      fetchStatus: "error",
      fetchReason: "exception",
      expired: n(s),
      entry: s
    };
  }
}

async function Ye({source: e, cached: o, result: a}) {
  let i = e.trust;
  if (i.kind === "untrusted") return {
    ok: !1,
    reason: "unsigned"
  };
  if (!a.hasSidecar) return {
    ok: !1,
    reason: "unsigned"
  };
  let s = await vvt({
    documentBytes: a.documentBytes,
    sidecar: a.sidecar,
    roots: i.roots
  });
  if (!s.ok) return {
    ok: !1,
    reason: s.reason
  };
  let n = mt(Buffer.from(a.documentBytes).toString("utf8"), !1), r = Bnr(n);
  if (r === void 0) return {
    ok: !1,
    reason: "parse_failed"
  };
  if (r !== VEn) return {
    ok: !1,
    reason: "unsupported_schema"
  };
  let m = Y2e().safeParse(n);
  if (!m.success) return {
    ok: !1,
    reason: "parse_failed"
  };
  let y = m.data, h = await D(y, e, o, s.rootId);
  if (h !== void 0) return await Rjr(y), {
    ok: !1,
    reason: h
  };
  return await Gvt(e.cacheKey, y), {
    ok: !0,
    document: y,
    rootId: s.rootId
  };
}

var me = 2e3;

async function ue({allowNetwork: e}) {
  try {
    let o = TDt();
    if (o !== void 0 && !aJn(o)) return;
    let a = Date.now() + (e ? me : 0), i = Ze() && Ctt("published") === "primary" && await Xe(a), s = {
      ...H(),
      ...i && {
        remote_settings_unconfirmed: !0
      }
    }, n = iJn();
    if (n !== null) {
      if (i && n === "essential_traffic") f("model_catalog_published", "essential_traffic", s), 
      t("[publishedCatalog] primary: nonessential traffic is disabled and the server-managed catalog source is not yet confirmed by the server; published path off this session");
      return;
    }
    let r = Pjr(), m = Svt();
    if (!m.ok) {
      if (r === "primary") C(m.reason, "configured catalog URL is unusable", s);
      return;
    }
    let {source: y} = m;
    if (y.trust.kind === "untrusted") {
      if (r === "primary") C(y.trust.reason, `custom source is untrusted (${y.trust.reason})`, s);
      return;
    }
    if (r !== "primary") {
      await oJn(y.cacheKey);
      return;
    }
    let h = X6(), l = await P(y), b = "cache", u, k = e || y.kind === "file", x = () => e ? Math.max(0, a - Date.now()) : me;
    if (l === void 0 && k) {
      b = "fetch";
      let S = await Ht(Hhn({
        allowNetwork: e
      }), x(), "published catalog first fetch").catch(() => {});
      l = S?.entry, u = S === void 0 ? "timeout" : S.fetchStatus, b = `fetch:${u}`;
    } else if (l !== void 0 && k && oGe(l)) {
      let S = Date.now(), A = await Ht(Hhn({
        allowNetwork: e
      }), x(), "published catalog stale refresh").catch(() => {});
      u = A === void 0 ? "timeout" : A.fetchStatus, l = A?.entry ?? l, b = `stale cache: waited ${Date.now() - S}ms for refresh \u2192 ${oGe(l) ? "kept stale" : "refreshed"} (fetch:${u})`;
    }
    if (TDt() !== o) return;
    let {catalog: v, kind: w} = Je(l, h);
    if (v === null) {
      if (l !== void 0) C("surface_not_served", "document serves this surface no rows", s); else if (k) C(`fetch_${u ?? "none"}`, `nothing cached and no seed, ${b} produced no rows`, s); else C("headless_no_cache", "nothing cached, headless launch does not fetch, no seed", s);
      return;
    }
    if (w === "seed") {
      let S = de(v);
      if (S !== null) {
        C("seed_stale", `compiled seed resolves ${S.family} to ${S.seed}, this build to ${S.compiled}`, s);
        return;
      }
    }
    if (F3e(v).length === 0) {
      C(RPe(v).length === 0 ? "no_selectable_rows" : "no_offered_rows", `published rows hold no model this build offers (${uT(v).length} rows via ${w})`, s);
      return;
    }
    let O = l !== void 0 && oGe(l);
    if (uCr(v, l?.fetchedAt, O), w === "seed") f("model_catalog_published", "seed", s); else if (i) f("model_catalog_published", "remote_settings_unconfirmed", H()); else g("model_catalog_published", H());
    t(`[publishedCatalog] primary: using ${w} rows (${uT(v).length} rows via ${b}${O ? ", stale" : ""})`);
  } catch (o) {
    d(o);
    let a = TDt();
    if ((a === void 0 || aJn(a)) && Pjr() === "primary") C("exception", "exception", H());
  }
}

function Je(e, o) {
  if (e !== void 0) return {
    catalog: wvt(e.document, o),
    kind: e.source
  };
  return {
    catalog: re(o),
    kind: "seed"
  };
}

async function Xe(e) {
  if (Qe()) {
    let o = e - Date.now();
    if (o > 0) t(`[publishedCatalog] waiting up to ${o}ms for server-managed settings to be confirmed`), 
    await et(o);
  }
  if (!ZVt()) return !1;
  return t("[publishedCatalog] server-managed settings name managed model-catalog source settings the server has not confirmed; deciding this session without them"), 
  !0;
}

function Ze() {
  let e = iJn();
  return e === null || e === "essential_traffic" && (OXo() || f_() === null);
}

function Qe() {
  if (!cC() || ng() || PC() !== void 0) return !1;
  return ZVt() || f_() === null;
}

async function et(e) {
  let o = () => {}, a = new Promise(i => {
    if (o = U9e(s => {
      if (s !== void 0) i();
    }), PC() !== void 0) i();
  });
  try {
    await We(a, e);
  } finally {
    o();
  }
}

function H() {
  return {
    auth_kind: c(q2e())
  };
}

function C(e, o, a) {
  uCr(null), f("model_catalog_published", e, a), t(`[publishedCatalog] primary: published rows unavailable (${o}); using compiled behavior`);
}

function Dhn({headless: e}) {
  let o = Ur();
  if (o.catalogDecision === void 0) o.catalogDecision = tt(e).catch(a => d(a));
  return o.catalogDecision;
}

async function tt(e) {
  await Z({
    headless: e
  }), await ue({
    allowNetwork: !e
  });
}

export { Hjt, Ohn, rJn, Mhn, Hhn, X2o, Dhn };
