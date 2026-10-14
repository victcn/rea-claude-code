// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At } from "./chunk-vps0k559.js";

import { u9, Uz, HO, WP, Cr, Gt, Ft, k } from "./chunk-xywp7esx.js";

import { l, Xp } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import { so } from "./chunk-3ykz5st8.js";

import { fv, I0 } from "./chunk-gmq0qwep.js";

import { js } from "./chunk-9g86mkx2.js";

async function p(r, s) {
  return so("api_admin_request_create", async () => {
    let e = await Gt.post("/api/oauth/organizations/:orgUUID/admin_requests", r, {
      auth: "teleport-org",
      credentials: s
    });
    if (!e.ok) throw Error(e.reason === "no-auth" ? e.detail : `admin_requests: ${e.reason}`);
    return e.data;
  });
}

async function c(r, s, e) {
  return so("api_admin_request_list", async () => {
    let n = new URLSearchParams({
      request_type: r
    });
    for (let a of s) n.append("statuses", a);
    let u = await Gt.get(`/api/oauth/organizations/:orgUUID/admin_requests/me?${n}`, {
      auth: "teleport-org",
      credentials: e
    });
    if (!u.ok) throw Error(u.reason === "no-auth" ? u.detail : `admin_requests/me: ${u.reason}`);
    return u.data;
  });
}

async function g(r, s) {
  return so("api_admin_request_eligibility", async () => {
    let e = await Gt.get(`/api/oauth/organizations/:orgUUID/admin_requests/eligibility?request_type=${r}`, {
      auth: "teleport-org",
      credentials: s
    });
    if (!e.ok) throw Error(e.reason === "no-auth" ? e.detail : `admin_requests/eligibility: ${e.reason}`);
    return e.data;
  });
}

function f(r) {
  if (!At.isAxiosError(r)) return null;
  let s = r.response?.status;
  if (typeof s !== "number" || s >= 500) return null;
  let e = r.response?.data;
  if (!e || typeof e !== "object") return null;
  let n = e, u = n.error;
  if (u && typeof u === "object") {
    let a = u.message;
    if (typeof a === "string" && a.length > 0) return a;
  }
  for (let a of [ "message", "detail" ]) {
    let i = n[a];
    if (typeof i === "string" && i.length > 0) return i;
  }
  return null;
}

var Let = "Requesting usage credits notifies your organization admins. To review and send the request, run /usage-credits in an interactive Claude Code session.";

async function nwt(r, s) {
  try {
    return await p({
      request_type: "limit_increase",
      details: null
    }, s), {
      type: "message",
      filed: !0,
      value: r == null ? "Request sent to your admin for usage credits." : r.is_enabled ? "Request sent to your admin to increase your usage credit limit." : "Request sent to your admin to turn on usage credits."
    };
  } catch (e) {
    let n = f(e);
    if (Xp(e, u => f(u) !== null)) t(`Admin request rejected: ${n ?? l(e)}`, {
      level: "error"
    }); else d(e);
    if (n) return {
      type: "message",
      value: n,
      filed: !1
    };
  }
  return {
    type: "message",
    filed: !1,
    value: "Couldn't send your request. Try again later."
  };
}

function BGt() {
  if (Ft()) return !1;
  let r = Cr(), s = HO() !== null, e = k("tengu_ember_latch", !1) || s, n = WP() && (s || (r === "pro" || r === "max") && !Ct());
  return e && n;
}

async function fhe(r, s) {
  let e = Cr(), n = e === "team" || e === "enterprise";
  if (!fv() && n) {
    let i, m = !0;
    try {
      i = (await I0(s))?.extra_usage, m &&= i !== void 0;
    } catch (o) {
      m = !1, t(`extra-usage: fetchUtilization failed, falling through to ask user: ${o}`, {
        level: "error"
      });
    }
    switch (i?.disabled_reason) {
     case "out_of_credits":
      return {
        type: "message",
        value: "Your organization is out of usage credits. Contact your admin to add more."
      };

     case "org_level_disabled_until":
     case "org_spend_cap_reached":
      if (i.disabled_reason === "org_level_disabled_until" && i.spend_limit_reached === !1) break;
      return {
        type: "message",
        value: "Your organization's usage credit cap is reached for this period. Contact your admin to raise it."
      };

     default:
    }
    if (i?.is_enabled && i.monthly_limit === null) return {
      type: "message",
      value: "Your organization already has unlimited usage credits. No request needed."
    };
    try {
      let o = await g("limit_increase", s);
      if (o?.is_allowed === !1) return {
        type: "message",
        value: "Usage credit requests are turned off for your organization."
      };
      m &&= o?.is_allowed === !0;
    } catch (o) {
      m = !1, t(`Extra usage eligibility check failed: ${o}`, {
        level: "error"
      });
    }
    try {
      let o = await c("limit_increase", [ "pending" ], s);
      if (o && o.length > 0) return {
        type: "message",
        value: "You've already sent a usage credit request to your admin."
      };
      m &&= o !== null;
    } catch (o) {
      m = !1, t(`Failed to fetch pending admin requests: ${o}`, {
        level: "error"
      });
    }
    return {
      type: "confirm-admin-request",
      extraUsage: i,
      checked: m
    };
  }
  let a = n ? Uz : u9;
  if (!r.openInBrowser || Ft()) return {
    type: "browser-opened",
    url: a,
    opened: !1
  };
  try {
    let i = await js(a);
    return {
      type: "browser-opened",
      url: a,
      opened: i
    };
  } catch (i) {
    return t(`Failed to open browser for ${a}: ${i}`, {
      level: "error"
    }), {
      type: "message",
      value: `Couldn't open your browser. Visit ${a} to manage usage credits.`
    };
  }
}

export { Let, nwt, BGt, fhe };
