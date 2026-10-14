// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Hy, gL, Ome, ZOe, eMe, hM } from "./chunk-3pqddg8f.js";

import { l, Xp } from "./chunk-b0z4bv3v.js";

import { _, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { ume } from "./chunk-yxennhe9.js";

import { vt, Kf, An, Cr } from "./chunk-xywp7esx.js";

import { zAs, BMt, swe, kbo, ntn, GAs, jMt, I0, XAs, ckr, JAs, ZY, Mbo } from "./chunk-gmq0qwep.js";

import { l2e, ZGt } from "./chunk-rmfejzkw.js";

function swn(e) {
  let n = ZY();
  if (!n.five_hour && !n.seven_day) {
    let s = ckr(e);
    return s ? {
      utilization: s.utilization,
      source: "persisted",
      fetchedAtMs: s.fetchedAtMs
    } : null;
  }
  let o = s => s ? {
    utilization: ume(s.utilization),
    resets_at: new Date(s.resets_at * 1e3).toISOString()
  } : void 0, i = z(Mbo().seven_day_overage_included, e);
  return {
    utilization: {
      five_hour: o(n.five_hour),
      seven_day: o(n.seven_day),
      ...i && {
        limits: [ i ]
      }
    },
    source: "headers"
  };
}

function z(e, n) {
  if (!e) return;
  let o = swe();
  if (!o[0]) return;
  let i = jMt(ckr(n)?.utilization.limits, o), s = i.length === 1 ? i[0].displayName : o[0];
  return {
    kind: "weekly_scoped",
    group: "weekly",
    percent: ume(e.utilization),
    resets_at: new Date(e.resets_at * 1e3).toISOString(),
    scope: {
      model: {
        display_name: s
      }
    }
  };
}

function f(e, n) {
  return {
    status: "seeded",
    utilization: e.utilization,
    rateLimitedVia: n,
    seedSource: e.source,
    seedFetchedAtMs: e.fetchedAtMs
  };
}

var y = 200;

function g(e) {
  if (e.length <= y) return e;
  return `${e.slice(0, y).replace(/[\uD800-\uDBFF]$/, "")}\u2026`;
}

async function XZn(e, n) {
  let o = await R(e, n);
  if (o.status !== "ok" && o.status !== "seeded") return o;
  if (o.status === "seeded" && o.seedSource === "headers") {
    let i = Mbo().seven_day_overage_included;
    if (i) {
      await kbo();
      let s = z(i, e), {limits: a, ...c} = o.utilization;
      return {
        ...o,
        utilization: s ? {
          ...c,
          limits: [ s ]
        } : c
      };
    }
  }
  if (ntn(o.utilization.limits)) await kbo();
  return o;
}

async function R(e, n) {
  let o = An()?.accountUuid;
  if (vt() && Kf()) {
    let i = JAs(e);
    if (i) return t(`Usage read answered from a snapshot ${Math.round(i.ageMs / 1e3)}s old; endpoint not asked`), 
    {
      status: "ok",
      utilization: i.utilization
    };
  }
  try {
    let i = await I0(n);
    if (!i) return {
      status: "empty_response"
    };
    let s = vt() && Kf(), a = zAs(i), c = BMt(i);
    if (!a || s && !c) {
      t("Usage fetch returned a fieldless or non-object body (in-band error)", {
        level: "error"
      });
      let u = a && "error" in i ? i.error : void 0, p = typeof u === "object" && u !== null && "type" in u && u.type === "rate_limit_error" ? "envelope" : null, m = swn(e);
      if (m) return f(m, p);
      return {
        status: "unavailable",
        rateLimitedVia: p,
        responseBody: g(_(i))
      };
    }
    if (c) XAs(i, o, e);
    return {
      status: "ok",
      utilization: i
    };
  } catch (i) {
    if (Xp(i)) t(`Failed to load usage data: ${l(i)}`, {
      level: "error"
    }); else d(i);
    let s = i, a = s.response?.status === 429 ? "http_429" : null, c = swn(e);
    if (c) return f(c, a);
    return {
      status: "unavailable",
      rateLimitedVia: a,
      responseBody: s.response?.data ? g(_(s.response.data)) : void 0
    };
  }
}

var AKr = 10;

function h(e) {
  return {
    request_count: e.requestCount,
    session_count: e.sessionCount,
    behaviors: e.behaviors.filter(n => e.totalCost > 0 && n.cost / e.totalCost * 100 >= AKr).map(n => ({
      key: n.key,
      pct: Math.round(n.cost / e.totalCost * 100),
      count: n.count
    })),
    agents: e.agents,
    skills: e.skills,
    plugins: e.plugins,
    mcp_servers: e.mcpServers
  };
}

async function iwn({includeBehaviors: e = !0, storageV5: n, credentials: o}) {
  let i = vt(), s = i && Kf(), [a, c] = await Promise.all([ s ? XZn(n, o) : Promise.resolve(null), e && i && l2e().allowed ? ZGt(n).then(r => ({
    day: h(r.day),
    week: h(r.week)
  }), r => (d(r), null)) : Promise.resolve(null) ]), u = a?.status === "ok" || a?.status === "seeded" ? a.utilization : null, p;
  if (u !== null) try {
    p = jMt(u.limits, swe()).map(r => ({
      display_name: r.displayName,
      utilization: r.limit.utilization ?? null,
      resets_at: typeof r.limit.resets_at === "number" ? new Date(r.limit.resets_at * 1e3).toISOString() : r.limit.resets_at ?? null
    }));
  } catch (r) {
    t(`model_scoped projection failed: ${l(r)}`, {
      level: "error"
    });
  }
  let m = u;
  if (u !== null && a?.status === "seeded") {
    let {limits: r, ...S} = u;
    m = S;
  }
  let v = p !== void 0 && a?.status === "ok" && (a.utilization.five_hour != null || a.utilization.seven_day != null) && Array.isArray(a.utilization.limits) && !GAs(a.utilization.limits);
  return {
    session: {
      total_cost_usd: Hy(),
      total_api_duration_ms: gL(),
      total_duration_ms: Ome(),
      total_lines_added: ZOe(),
      total_lines_removed: eMe(),
      model_usage: hM()
    },
    subscription_type: Cr(),
    rate_limits_available: s,
    rate_limits: u === null ? null : p !== void 0 && p.length > 0 ? {
      ...m,
      model_scoped: p
    } : v ? {
      ...m,
      model_scoped: []
    } : m,
    behaviors: c
  };
}

export { swn, XZn, AKr, iwn };
