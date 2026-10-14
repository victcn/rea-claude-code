// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { Oe } from "./chunk-cjt10y7b.js";

var d = 10, Wsr = 50, zsr = /^(?:session|cse)_[A-Za-z0-9_-]+$/;

function O(e) {
  let r = (e.title ?? "").trim();
  return r !== "" && !f(r);
}

function f(e) {
  return e.includes("__CBU_POOLED__") || e === "__warming__" || e.startsWith("ditto:");
}

async function m5s(e) {
  if (Oe() !== "firstParty") return [];
  try {
    let {axiosGetWithRetry: r, prepareApiRequest: o, getOAuthRequestHeaders: S} = await import("./chunk-80xde28b.js"), {getOauthConfig: C} = await import("./chunk-a8eh2v5r.js"), {accessToken: R} = await o(e?.credentials), b = (e?.statuses ?? []).map(c => `&statuses=${c}`).join(""), g = `${C().BASE_API_URL}/v1/code/sessions?limit=100${b}`, w = {
      ...S(R),
      ...e?.requestReason && {
        "anthropic-client-request-reason": e.requestReason
      }
    }, m = new Set, s = [], h = 0, n = null, a = 0;
    for (;a < d; a++) {
      let c = n ? `${g}&cursor=${encodeURIComponent(n)}` : g, i;
      try {
        i = await r(c, {
          headers: w,
          timeout: 15e3
        });
      } catch (t) {
        if (e?.throwOnError) throw t;
        let {logForDebugging: y} = await import("./chunk-fs90awgg.js");
        y(`[ccr:list] page ${a} failed (${s.length} rows so far): ${l(t)}`);
        break;
      }
      h += i.data.data.length;
      for (let t of i.data.data) {
        if (m.has(t.id)) continue;
        if (m.add(t.id), t.status !== "archived" && (e?.includeBridgeKind || t.environment_kind !== "bridge") && zsr.test(t.id) && (e?.includeBridgeKind && t.environment_kind === "bridge" ? !f((t.title ?? "").trim()) : O(t)) && (e?.accept?.(t) ?? !0)) s.push(t);
      }
      n = i.data.next_cursor ?? null;
      let u = i.data.data.at(-1), _ = u ? Date.parse(u.last_event_at ?? u.created_at) : Number.NaN;
      if (!n || !e?.exhaustive && s.length >= Wsr || e?.stopWhenOlderThan !== void 0 && !Number.isNaN(_) && _ < e.stopWhenOlderThan) break;
    }
    let {logForDebugging: v} = await import("./chunk-fs90awgg.js"), p = a >= d && n !== null;
    if (e?.status) e.status.truncated = p;
    return v(`[ccr:list]: ${h} fetched, ${s.length} after archive/bridge/husk${e?.accept ? "/accept" : ""} filter${p ? ` (TRUNCATED: ${d}-page budget exhausted with more remaining)` : ""}`), 
    s;
  } catch (r) {
    if (e?.throwOnError) throw r;
    let {logForDebugging: o} = await import("./chunk-fs90awgg.js");
    o(`[ccr:list] failed: ${l(r)}`);
  }
  return [];
}

export { Wsr, zsr, m5s };
