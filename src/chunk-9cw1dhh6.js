// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { ci } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { kGn, Gt } from "./chunk-xywp7esx.js";

import { p } from "./chunk-jkzenvsk.js";

import { JLt, Hmt } from "./chunk-q6wab2jw.js";

import { s$t, So, aq } from "./chunk-wptm3jf5.js";

import { KS, AC, jK } from "./chunk-46phtgr7.js";

import { Ag } from "./chunk-3zb1ef23.js";

import { L_ } from "./chunk-67jt18z1.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, oe, T, u, A } from "./chunk-cvcg6n1z.js";

var U = 25, O = "public", B = 3, G = 200, H = 8e3, Y = 36e5, q = 8388608, F = p(() => u({
  id: o().min(1),
  name: o().min(1),
  summary: o().optional().catch(void 0),
  description: o().optional().catch(void 0),
  release: u({
    version: o()
  }).optional().catch(void 0),
  publisher: u({
    name: o()
  }).optional().catch(void 0),
  links: u({
    documentation: o().optional().catch(void 0)
  }).optional().catch(void 0),
  surfaces: T(o()).optional().catch(void 0),
  source: u({
    type: A("directory"),
    repository: u({
      url: o().min(1),
      path: o().optional(),
      reviewed_commit: o().optional()
    })
  }),
  checks: u({
    review: u({
      state: o(),
      by: u({
        type: o()
      }).optional().catch(void 0)
    })
  })
}));

function V_n(e) {
  return F().safeParse(x(e)).data;
}

function N(e) {
  if (JLt(e) !== null) return !0;
  if (!e.startsWith("https://") || aq(e)) return !1;
  let n;
  try {
    n = new URL(e);
  } catch {
    return !1;
  }
  return !So(n.hostname) && !s$t(n.hostname, "ssh.github.com");
}

function F2r(e) {
  let {state: n, by: h} = e.checks.review;
  if (n !== "done") return !1;
  switch (h?.type) {
   case "partner":
    return N(e.source.repository.url);

   case "anthropic":
    return Hmt(e.source.repository.url);

   default:
    return !1;
  }
}

var V = p(() => u({
  data: T(oe()).nullish(),
  next_page: o().nullish()
}));

function NGe() {
  return KS("allow_plugin_directory_search") && L_() === null;
}

function Zqs() {
  let e = AC("allow_plugin_directory_search");
  return (e === "cache_miss" || e === "unregistered" ? null : jK("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment";
}

function e4s() {
  if (NGe() || L_() !== null) return null;
  return "policy-not-known";
}

async function U2r({query: e, pageToken: n, signal: h, pageSize: w = U, include: E, keepTokenWhenEmpty: I = !1}) {
  let M = ne(e.trim(), G), l = M !== "", d = n !== void 0, _ = performance.now();
  if (!KS("allow_plugin_directory_search")) {
    let s = AC("allow_plugin_directory_search");
    return z("unavailable", _, l, d, {
      cause: c("policy")
    }), m("plugin_directory_search", s === "org_denied" ? "policy_denied" : s === "unregistered" ? "policy_mirror_unregistered" : s === "route_missing" ? "policy_route_missing" : "policy_cache_miss"), 
    {
      ok: !1,
      reason: "unavailable",
      cause: "policy",
      message: (s === "cache_miss" || s === "unregistered" ? null : jK("allow_plugin_directory_search", "it", "is")) ?? "your organization's policy could not be checked yet; try again in a moment",
      blockedBy: s === "org_denied" || s === "latched" ? "policy_limit" : void 0
    };
  }
  let C = L_();
  if (C !== null) return z("unavailable", _, l, d, {
    cause: c("policy")
  }), {
    ok: !1,
    reason: "unavailable",
    cause: "policy",
    message: "it is blocked by your organization",
    blockedBy: C
  };
  let D = [], P = 0, v = 0, b = n;
  try {
    do {
      let a = new URLSearchParams({
        limit: String(w),
        visibility: O
      });
      if (E !== void 0) a.set("include", E);
      if (l) a.set("q", M);
      if (b !== void 0) a.set("page", b);
      let r = await Gt.get(`${kGn}?${a}`, {
        auth: "none",
        publicPluginDirectoryCatalog: !0,
        timeout: H,
        maxContentLength: q,
        signal: h,
        validateStatus: () => !0
      });
      if (v++, !r.ok) {
        let y = r.reason === "essential-traffic-only", R = y ? "essential-traffic-only" : "data-residency";
        return z("unavailable", _, l, d, {
          cause: c(R)
        }), f("plugin_directory_search", y ? "essential_traffic_only" : "data_residency"), 
        {
          ok: !1,
          reason: "unavailable",
          cause: R
        };
      }
      if (r.status === 404) return z("not_served", _, l, d, {
        http_status: 404
      }), f("plugin_directory_search", "not_served"), {
        ok: !1,
        reason: "not-served"
      };
      if (r.status >= 400) {
        z("failed", _, l, d, {
          error_kind: c("http"),
          http_status: r.status
        }), m("plugin_directory_search", `http_${r.status}`);
        let y;
        if (r.status === 400 && d) y = "it could not continue this results page; search again to start from the first page"; else if (r.status === 429 || r.status >= 500) y = "it is temporarily unavailable; try again shortly"; else y = `the request failed (HTTP ${r.status})`;
        let R = r.status === 429 || r.status === 503 ? r.response.headers["retry-after"] : void 0, j = Ag(typeof R === "string" ? R : void 0);
        return {
          ok: !1,
          reason: "failed",
          message: y,
          ...j !== void 0 && {
            retryAfterMs: Math.min(j, Y)
          }
        };
      }
      let S = V().safeParse(r.data);
      if (!S.success) return z("failed", _, l, d, {
        error_kind: c("invalid_schema")
      }), m("plugin_directory_search", "invalid_schema"), {
        ok: !1,
        reason: "failed",
        message: "it returned a response Claude Code could not read"
      };
      for (let y of S.data.data ?? []) {
        let R = V_n(y);
        if (R) D.push(R); else P++;
      }
      b = S.data.next_page || void 0;
    } while (D.length < w && b !== void 0 && v < B);
    let s = D.length === 0 && b !== void 0, k = s && !I;
    if (k) b = void 0;
    return z("success", _, l, d, {
      result_count: D.length,
      skipped_count: P,
      request_count: v,
      has_more: b !== void 0,
      chase_exhausted: s
    }), g("plugin_directory_search"), {
      ok: !0,
      page: {
        listings: D,
        nextPageToken: b,
        skippedRows: P,
        truncated: k || void 0
      }
    };
  } catch (s) {
    if (h?.aborted) return {
      ok: !1,
      reason: "aborted"
    };
    let {kind: k, status: a, message: r} = ci(s);
    return t(`plugin directory search failed (${k}${a ? ` ${a}` : ""}): ${r}`), z("failed", _, l, d, {
      error_kind: c(k),
      ...a !== void 0 && {
        http_status: a
      }
    }), m("plugin_directory_search", k), {
      ok: !1,
      reason: "failed",
      message: a === void 0 && k !== "other" ? "it could not be reached; check your network connection" : "the request failed"
    };
  }
}

function x(e) {
  if (Array.isArray(e)) return e.map(x);
  if (L(e)) {
    let n = {};
    for (let [h, w] of Object.entries(e)) if (w !== null) n[h] = x(w);
    return n;
  }
  return e;
}

function z(e, n, h, w, E = {}) {
  i("tengu_plugin_directory_search", {
    outcome: c(e),
    has_query: h,
    is_continuation: w,
    duration_ms: Math.round(performance.now() - n),
    ...E
  });
}

export { V_n, F2r, NGe, Zqs, e4s, U2r };
