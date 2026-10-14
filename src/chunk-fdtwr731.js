// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { Y } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { o, v, oe, u, _t } from "./chunk-cvcg6n1z.js";

var m = 2, vGo = '{"type":"hb"}', u1r = 15e3, l = 1e3, T = 3e4, EGo = 100, kGo = 1e4, TGo = 4e3, _ = 5e3, b = 2e4, M = 3e5, c = .2, f = "device", Kgn = {
  tools_settled: 250,
  tools_changed: 5e3,
  connected_stale: 250
}, p1r = {
  hbIntervalMs: 1e4,
  stalenessMs: 25e3,
  rpcTimeoutMs: 6e4
}, d = {
  hbIntervalMs: {
    min: 2e3,
    max: 12e4
  },
  stalenessMs: {
    min: 5e3,
    max: 6e5
  },
  rpcTimeoutMs: {
    min: 5e3,
    max: 6e5
  }
}, g = 6e3, E = 1e3, R = Object.freeze([ "no_credential", "user_mismatch", "upstream_401", "upstream_403", "upstream_4xx", "upstream_529", "upstream_error", "network_error", "malformed_response", "duplicate_device_id", "device_name_in_use", "device_session_limit" ]);

function h(e) {
  if (typeof e !== "string" || e.length === 0) return;
  return R.includes(e) ? e : "unknown";
}

function AGo(e) {
  return e === "duplicate_device_id" || e === "device_name_in_use" || e === "device_session_limit";
}

var fB = {
  searchHint: "anthropic/searchHint",
  alwaysLoad: "anthropic/alwaysLoad",
  maxResultSizeChars: "anthropic/maxResultSizeChars",
  requiresUserInteraction: "anthropic/requiresUserInteraction"
};

function CGo(e) {
  let n = e.deviceId !== void 0 && e.deviceId !== "";
  return {
    type: "connect",
    oauth_token: e.oauthToken,
    tools: e.tools,
    rtb_protocol_version: m,
    hb_capable: !0,
    cancel_capable: !0,
    ...n && {
      device_id: e.deviceId
    },
    ...n && e.sessionId !== void 0 && e.sessionId !== "" && {
      session_id: e.sessionId
    }
  };
}

var N = 64, x = 1024, I = p(() => _t({
  type: o().optional()
})), O = p(() => u({
  rtb_protocol_version: oe().optional(),
  hb_supported: oe().optional(),
  timings: oe().optional()
}).transform(e => ({
  protocolVersion: k(e.rtb_protocol_version, e.hb_supported),
  timings: y(e.timings)
}))), S = p(() => u({
  reason: o().optional().catch(void 0),
  status: v().optional().catch(void 0),
  error: o().optional().catch(void 0)
}));

function RGo(e) {
  let n;
  try {
    n = Y(e);
  } catch {
    return {
      kind: "ignored"
    };
  }
  if (typeof n === "object" && n !== null) {
    if (Object.prototype.hasOwnProperty.call(n, "__proto__")) delete n.__proto__;
  }
  let r = I().safeParse(n);
  if (!r.success) return {
    kind: "ignored"
  };
  let t = r.data, s = t.type;
  if (s === void 0) return {
    kind: "rpc",
    message: t
  };
  if (typeof s !== "string") return {
    kind: "ignored"
  };
  switch (s) {
   case "connected":
    return {
      kind: "connected",
      ...O().parse(t)
    };

   case "hb_ack":
    return {
      kind: "hb_ack"
    };

   case "error":
    {
      let i = S().parse(t);
      return {
        kind: "error",
        reason: h(i.reason),
        status: i.status,
        detail: i.error === void 0 ? void 0 : ne(i.error, x)
      };
    }

   default:
    return {
      kind: "unknown",
      frameType: ne(s, N)
    };
  }
}

function k(e, n) {
  let r = typeof e === "number" && Number.isInteger(e) && e >= 0 ? e : 0;
  return Math.max(r, n === !0 ? 1 : 0);
}

function y(e) {
  let n = typeof e === "object" && e !== null && !Array.isArray(e) ? e : {};
  return {
    hbIntervalMs: a(n.hb_interval_ms, "hbIntervalMs"),
    stalenessMs: a(n.staleness_ms, "stalenessMs"),
    rpcTimeoutMs: a(n.rpc_timeout_ms, "rpcTimeoutMs")
  };
}

function a(e, n) {
  if (typeof e !== "number" || !Number.isFinite(e) || e <= 0) return p1r[n];
  let {min: r, max: t} = d[n];
  return Math.round(Math.min(Math.max(e, r), t));
}

function f1r(e) {
  let n = Math.min(e.hbIntervalMs, Math.max(Math.floor(e.stalenessMs / 2), d.hbIntervalMs.min));
  return {
    keepaliveIntervalMs: n,
    pongTimeoutMs: Math.max(2 * n + g, e.stalenessMs + E),
    rotateDrainMaxMs: e.rpcTimeoutMs,
    slotContentionFastAttempts: Math.ceil((e.stalenessMs + b) / _)
  };
}

function mXn(e, n, r, t = Math.random) {
  if (n > 0) {
    let s = n <= r ? _ : M, i = 1 - c + t() * (2 * c);
    return Math.round(s * i);
  }
  return Math.round(Math.min(l * 1.5 ** e, T) * (.5 + t() * .5));
}

function m1r(e, n) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+/, "").slice(0, n).replace(/-+$/, "");
}

function lZe(e, n = 48) {
  return m1r(e, n) || f;
}

export { vGo, u1r, EGo, kGo, TGo, Kgn, p1r, AGo, fB, CGo, RGo, f1r, mXn, m1r, lZe };
