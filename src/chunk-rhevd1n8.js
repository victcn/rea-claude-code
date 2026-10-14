// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b } from "./chunk-hwdwjvh8.js";

import { _, t } from "./chunk-kawq2919.js";

import { i } from "./chunk-hedpgw9m.js";

import { gvr, kvs } from "./chunk-9tdwgnpn.js";

import { L } from "./chunk-vh1p9t2h.js";

var s = "https://json-schema.org/draft/2020-12/schema", c;

function f() {
  if (c === void 0) {
    try {
      let e = import.meta.require("./chunk-sj6crj87.js");
      c = typeof e.default === "function" ? e.default : null;
    } catch {
      c = null;
    }
    if (c === null) t("MCP: draft 2020-12 meta-validator unavailable \u2014 tool schema checks fail open", {
      level: "warn"
    }), i("tengu_mcp_degraded", {
      reason: b("schema_validator_unavailable")
    });
  }
  return c;
}

function h() {
  return !1;
}

function v(e) {
  if (!L(e) || !L(e.properties)) return null;
  for (let r of Object.keys(e.properties)) if (!gvr.test(r)) return r;
  return null;
}

function m(e) {
  return S(f(), e, h());
}

function S(e, r, n) {
  let l = v(r);
  if (l !== null) return {
    valid: !1,
    check: "propertyKey",
    detail: `property key ${_(l.slice(0, 80))} does not match ${gvr}`
  };
  if (e === null) return {
    valid: !0
  };
  let a = r;
  if (L(r)) {
    let o = Object.entries(r);
    if (o.some(([, u]) => u === null)) o = o.filter(([, u]) => u !== null), a = Object.fromEntries(o);
    let d = a.$schema;
    if (d !== void 0) if (n) {
      let {$schema: u, ...p} = a;
      a = p;
    } else if (typeof d === "string" && (d === s || d === `${s}#`)) ; else return {
      valid: !0
    };
  }
  try {
    if (e(a)) return {
      valid: !0
    };
    let o = e.errors?.[0];
    return {
      valid: !1,
      check: "meta",
      detail: o ? `schema${o.instancePath} ${o.message ?? "is invalid"}` : "schema is invalid"
    };
  } catch (o) {
    return {
      valid: !1,
      check: "meta",
      detail: `validation threw: ${o instanceof Error ? o.message : String(o)}`
    };
  }
}

function Kzt(e, r) {
  let n = kvs(e);
  if (n.outcome === "drop") return {
    verdict: "drop",
    cause: "schema_unsupported",
    reason: n.reason
  };
  if (n.outcome === "normalized" && !r.normalizeEnabled) return {
    verdict: "drop",
    cause: "normalize_gated",
    reason: `its input schema uses top-level ${n.combinators.join("/")}, which the Anthropic API does not accept`
  };
  let l = n.outcome === "normalized" ? {
    schema: n.schema,
    note: n.note,
    combinators: n.combinators
  } : void 0, a = m(l?.schema ?? e);
  if (a.valid) return {
    verdict: "send",
    normalized: l,
    apiWouldReject: void 0
  };
  if (!r.apiValidateEnabled) return {
    verdict: "send",
    normalized: l,
    apiWouldReject: a
  };
  return {
    verdict: "drop",
    cause: "api_invalid",
    normalized: l,
    rejection: a
  };
}

export { Kzt };
