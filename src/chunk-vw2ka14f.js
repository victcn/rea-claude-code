// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { t } from "./chunk-kawq2919.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { p } from "./chunk-jkzenvsk.js";

import { vt, An, Cr, v5, Gt, bC, Ce, ce } from "./chunk-xywp7esx.js";

import { fv } from "./chunk-gmq0qwep.js";

import { me, Vo, lr, St, Dd } from "./chunk-dexzwy8h.js";

var A = "tengu_lilac_loom", y = "feature_of_the_week", _ = 864e5, b = () => me().refine(e => !Number.isNaN(Date.parse(e)) && /(z|[+-]\d{2}:?\d{2})$/i.test(e), "must be ISO 8601 with timezone, e.g. 2026-06-04T16:00:00Z"), c = () => me().optional().transform(e => e === "" ? void 0 : e), v = p(() => St({
  feature: me().min(1),
  command: me().optional().transform(e => e === "" ? void 0 : e),
  startsAt: b(),
  endsAt: b(),
  hideCommandChip: Vo().optional(),
  creditless: Vo().optional(),
  titleLabel: c(),
  commandBlurb: c(),
  tipBlurb: c(),
  isTopPriorityAnnouncement: Vo().optional(),
  announcementLines: lr(St({
    text: me(),
    style: Dd([ "bold", "dim" ]).optional()
  })).optional().transform(e => {
    let n = e?.filter(i => i.text !== "");
    return n?.length ? n : void 0;
  }).catch(void 0),
  tips: lr(me()).optional().transform(e => {
    let n = e?.filter(Boolean);
    return n?.length ? n : void 0;
  }).catch(void 0),
  redeemBy: c()
}));

class w {
  parsedCampaign=null;
  inFlightEligibilityRefresh=null;
}

var x = new K(() => new w);

function C() {
  return x.of(B().host);
}

function _ne() {
  let e = bC(A, null);
  if (e === null || e === void 0) return null;
  let n = C();
  if (n.parsedCampaign === null || n.parsedCampaign.raw !== e) {
    let r = v().safeParse(e);
    if (!r.success) t(`Promo campaign payload failed validation: ${r.error.message}`, {
      level: "warn"
    });
    n.parsedCampaign = r.success ? {
      raw: e,
      campaign: r.data,
      startsAtMs: Date.parse(r.data.startsAt),
      endsAtMs: Date.parse(r.data.endsAt)
    } : {
      raw: e,
      campaign: null,
      startsAtMs: 0,
      endsAtMs: 0
    };
  }
  if (n.parsedCampaign.campaign === null) return null;
  let i = Date.now();
  if (i < n.parsedCampaign.startsAtMs) return null;
  if (i > n.parsedCampaign.endsAtMs) return null;
  return n.parsedCampaign.campaign;
}

function qer() {
  return _ne()?.command ?? null;
}

function S(e) {
  if (!vt()) return "excluded";
  let n = Cr();
  if (!n) return "excluded";
  if (e.creditless) return "viewer";
  if (v5()) return "claimant";
  if (n === "team") {
    if (!An()?.organizationRole) return "excluded";
    return fv() ? "claimant" : "viewer";
  }
  return "excluded";
}

function u() {
  let e = _ne();
  if (!e) return null;
  let n = An()?.organizationUuid;
  if (!n) return null;
  let i = S(e);
  if (i === "excluded") return null;
  if (i === "claimant" && I(n, e.feature)) return null;
  return {
    campaign: e,
    orgId: n,
    audience: i
  };
}

function Yer(e) {
  let n = qer();
  return n !== null && e === n;
}

function Xer(e) {
  return Yer(e) && v2e();
}

function v2e() {
  let e = u();
  if (!e || e.audience !== "claimant") return !1;
  if (!e.campaign.command) return !1;
  let n = d(e.orgId, e.campaign.feature);
  return n !== null && n.eligible && n.available;
}

function Rwt() {
  let e = u();
  if (!e || e.audience !== "viewer") return !1;
  if (!e.campaign.command) return !1;
  return !P(e.orgId, e.campaign.feature);
}

function The() {
  let e = _ne(), n = An()?.organizationUuid;
  if (!e || !n) return null;
  let i = d(n, e.feature);
  if (!i || i.amount_minor_units === null || !i.currency) return null;
  return {
    amountMinorUnits: i.amount_minor_units,
    currency: i.currency
  };
}

function dvn(e) {
  let n = C();
  return n.inFlightEligibilityRefresh ??= E(e).catch(i => (t(`FotW eligibility refresh failed: ${i}`, {
    level: "warn"
  }), null)).finally(() => {
    n.inFlightEligibilityRefresh = null;
  }), n.inFlightEligibilityRefresh;
}

async function E(e) {
  let n = u();
  if (!n || n.audience !== "claimant") return null;
  let {campaign: i, orgId: r} = n;
  if (d(r, i.feature) !== null) return null;
  let a;
  try {
    a = await Gt.get(`/api/oauth/organizations/:orgUUID/overage_credit_grant?campaign=${y}`, {
      auth: "teleport-org",
      timeout: 1e4,
      validateStatus: o => o < 500,
      credentials: e
    });
  } catch (o) {
    return f("api_fotw_eligibility_fetch", "request_failed"), t(`FotW eligibility fetch failed: ${o}`, {
      level: "warn"
    }), null;
  }
  if (!a.ok || a.status >= 400) return f("api_fotw_eligibility_fetch", "unavailable"), 
  null;
  if (g("api_fotw_eligibility_fetch"), a.data.granted) h(r, i.feature);
  if (a.data.eligible && a.data.needs_payment_setup === !0) {
    if (a.data.amount_minor_units == null || !a.data.currency) return null;
    return {
      amountMinorUnits: a.data.amount_minor_units,
      currency: a.data.currency
    };
  }
  if (d(r, i.feature) !== null) return null;
  return F(r, i.feature, {
    available: a.data.available,
    eligible: a.data.eligible,
    granted: a.data.granted,
    amount_minor_units: a.data.amount_minor_units ?? null,
    currency: a.data.currency ?? null
  }, {
    onlyIfAbsent: !0
  }), null;
}

function d(e, n) {
  let r = ce().fotwEligibilityCache?.[e]?.[n];
  if (!r) return null;
  if (Date.now() - r.timestamp > _) return null;
  return r.info;
}

async function T3o(e, n) {
  if (!Xer(e)) return {
    outcome: "skipped"
  };
  let i = u();
  if (!i) return {
    outcome: "skipped"
  };
  let {campaign: r, orgId: a} = i, o = The(), l;
  try {
    l = await Gt.post("/api/oauth/organizations/:orgUUID/overage_credit_grant", {
      campaign: y,
      feature: r.feature,
      enable_overages: !0
    }, {
      auth: "teleport-org",
      timeout: 6e4,
      validateStatus: s => s < 500,
      credentials: n
    });
  } catch (s) {
    return m("api_fotw_claim", "request_failed"), t(`FotW claim failed: ${s}`, {
      level: "warn"
    }), {
      outcome: "failed"
    };
  }
  if (!l.ok) return {
    outcome: "failed"
  };
  if (l.status >= 400) {
    if (U(l.data) === "Failed to grant credit") return m("api_fotw_claim", "grant_failed"), 
    {
      outcome: "failed"
    };
    return f("api_fotw_claim", "not_available"), F(a, r.feature, {
      available: !1,
      eligible: !1,
      granted: !1,
      amount_minor_units: null,
      currency: null
    }), {
      outcome: "not_available"
    };
  }
  if (!l.data.success) return m("api_fotw_claim", "grant_failed"), {
    outcome: "failed"
  };
  return g("api_fotw_claim"), h(a, r.feature), {
    outcome: "granted",
    amountMinorUnits: l.data.amount_minor_units ?? o?.amountMinorUnits ?? 0,
    currency: l.data.currency ?? o?.currency ?? "USD",
    expiresAt: l.data.expires_at ?? null
  };
}

var M = p(() => St({
  error: St({
    message: me()
  })
}));

function U(e) {
  let n = M().safeParse(e);
  return n.success ? n.data.error.message : void 0;
}

function I(e, n) {
  let i = ce().fotwClaimedFeatures;
  return Boolean(i?.[e]?.includes(n));
}

function h(e, n) {
  Ce(i => {
    let r = i.fotwClaimedFeatures?.[e] ?? [];
    if (r.includes(n)) return i;
    return {
      ...i,
      fotwClaimedFeatures: {
        ...i.fotwClaimedFeatures,
        [e]: [ ...r, n ]
      }
    };
  });
}

function P(e, n) {
  let i = ce().fotwUpsellFulfilled;
  return Boolean(i?.[e]?.includes(n));
}

function A3o(e) {
  let n = u();
  if (!n || n.audience !== "viewer" || !Yer(e)) return;
  let {orgId: i, campaign: r} = n;
  Ce(a => {
    let o = a.fotwUpsellFulfilled?.[i] ?? [];
    if (o.includes(r.feature)) return a;
    return {
      ...a,
      fotwUpsellFulfilled: {
        ...a.fotwUpsellFulfilled,
        [i]: [ ...o, r.feature ]
      }
    };
  });
}

function F(e, n, i, {onlyIfAbsent: r = !1} = {}) {
  Ce(a => {
    let o = a.fotwEligibilityCache?.[e]?.[n], l = o && Date.now() - o.timestamp <= _;
    if (r && l) return a;
    if (o && o.info.available === i.available && o.info.eligible === i.eligible && o.info.granted === i.granted && o.info.amount_minor_units === i.amount_minor_units && o.info.currency === i.currency && l) return a;
    return {
      ...a,
      fotwEligibilityCache: {
        ...a.fotwEligibilityCache,
        [e]: {
          ...a.fotwEligibilityCache?.[e],
          [n]: {
            info: i,
            timestamp: Date.now()
          }
        }
      }
    };
  });
}

export { _ne, qer, Yer, Xer, v2e, Rwt, The, dvn, T3o, A3o };
