// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { x, l } from "./chunk-b0z4bv3v.js";

import { z } from "./chunk-bmq0vae0.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { Sn, al, oa, Gt } from "./chunk-xywp7esx.js";

import { Ct } from "./chunk-6ah1819r.js";

import { Yn } from "./chunk-cjt10y7b.js";

import { o3o, s3o, sDe, _he, i3o, a3o } from "./chunk-49zcmz6n.js";

import { hTe, dqr } from "./chunk-z05wzzaj.js";

import { p3o, f3o, m3o } from "./chunk-zxrtm1b2.js";

var u = [ "agent_design_projects" ];

function y2t(e) {
  return typeof e === "string" && u.includes(e);
}

function eDe(e) {
  switch (e) {
   case "agent_design_projects":
    return "Connect to Claude Design? Claude can read and edit your Design projects from this tool. Change anytime at claude.ai/design/settings or with /design revoke.";
  }
}

function Q6o(e) {
  e.consentCache = null, e.consentFetch = null, e.consentCacheGeneration++;
}

async function c(e) {
  await oa({
    credentials: e
  });
  let n;
  if (z() && e !== void 0) n = await al(e); else n = Sn();
  let s = n?.refreshToken && n.scopes?.includes("user:design:read") ? n.accessToken : null;
  if (!s) {
    let r = await dqr(e);
    s = r.ok ? r.accessToken : n?.accessToken ?? null;
  }
  return {
    auth: "none",
    ...s && {
      headers: {
        Authorization: `Bearer ${s}`
      }
    }
  };
}

async function y(e) {
  try {
    let n = await Gt.get("/v1/design/consent", {
      ...await c(e),
      validateStatus: r => r < 500
    });
    if (!n.ok || n.status !== 200) return {};
    let s = {};
    for (let r of u) {
      let o = n.data?.[r];
      if (typeof o === "boolean") s[r] = o;
    }
    return s;
  } catch (n) {
    return t(`Design consent pre-flight GET failed (${l(n)}); falling back to 403-seeded cache.`), 
    {};
  }
}

function Cle(e, n, s) {
  if (n === "agent_design_projects" && s === !1) s3o(e), i3o(e), o3o(e);
  e.consentCache = {
    ...e.consentCache ?? {},
    [n]: s
  };
}

async function Z6o(e) {
  return !!(await hTe(e))?.accessToken;
}

async function h(e) {
  if (!Yn()) return {
    ok: !1,
    reason: "wrong_provider"
  };
  if (Ct()) return {
    ok: !1,
    reason: "essential_traffic_only"
  };
  await oa({
    credentials: e
  });
  let n;
  if (z() && e !== void 0) n = await al(e); else n = Sn();
  if (n?.accessToken && n.refreshToken && n.scopes?.includes("user:design:read")) return {
    ok: !0,
    accessToken: n.accessToken,
    bearer: "design_scoped_login"
  };
  let s = await dqr(e);
  if (s.ok) return {
    ok: !0,
    accessToken: s.accessToken,
    bearer: "design_credential"
  };
  if (n?.accessToken) return {
    ok: !0,
    accessToken: n.accessToken,
    bearer: n.scopes?.includes("user:design:read") ? "design_scoped_login" : "login"
  };
  return {
    ok: !1,
    reason: s.reason,
    detail: s.detail
  };
}

async function Swt(e) {
  return h(e);
}

async function _2t(e, n) {
  if (!Yn() || Ct()) return null;
  if (e.consentCache === null) {
    let s = e.consentFetch ??= y(n), r = e.consentCacheGeneration, o = await s;
    if (e.consentCache === null && e.consentCacheGeneration === r) {
      e.consentCache = {};
      for (let a of u) {
        let i = o[a];
        if (typeof i === "boolean") Cle(e, a, i);
      }
    }
    if (e.consentFetch === s) e.consentFetch = null;
  }
  return e.consentCache?.agent_design_projects === !1 ? "agent_design_projects" : null;
}

async function lqr(e) {
  if (!Yn() || Ct()) return !1;
  let n;
  if (z() && e !== void 0) n = (await al(e))?.accessToken; else n = Sn()?.accessToken;
  if (n) return !1;
  return !(await hTe(e))?.accessToken;
}

async function tDe(e, n, s) {
  try {
    let r = await Gt.post("/v1/design/consent", {
      consent: n
    }, {
      ...await c(s),
      validateStatus: o => o < 300
    });
    if (!r.ok) throw new x(`Couldn't record Design consent (${r.reason === "no-auth" ? r.detail : r.reason}).`, "design consent POST blocked by policy gate");
  } catch (r) {
    throw m("design_consent", "post_failed"), r;
  }
  Cle(e, n, !0), g("design_consent");
}

async function e3o(e, n, s) {
  try {
    let r = await Gt.delete("/v1/design/consent", {
      consent: n
    }, {
      ...await c(s),
      validateStatus: o => o < 300 || o === 404
    });
    if (!r.ok) throw new x(`Couldn't revoke Design consent (${r.reason === "no-auth" ? r.detail : r.reason}).`, "design consent DELETE blocked by policy gate");
  } catch (r) {
    throw m("design_consent", "delete_failed"), r;
  }
  Cle(e, n, !1), g("design_consent");
}

async function _(e) {
  try {
    let n = await Gt.get("/v1/design/grants", {
      ...await c(e),
      validateStatus: o => o < 500
    });
    if (!n.ok || n.status !== 200) {
      let o = n.ok ? n.status : 0;
      return f("design_project_grant", o === 404 ? "probe_404_old_server" : "probe_http_error", {
        status: o
      }), null;
    }
    let s = n.data?.grants;
    if (!Array.isArray(s)) return f("design_project_grant", "probe_shape"), null;
    let r = new Set;
    for (let o of s) {
      let a = o?.project_id;
      if (typeof a === "string" && a.length > 0) r.add(a);
    }
    return r;
  } catch (n) {
    return t(`Design project-grant probe failed (${l(n)}); falling back to the per-batch plan flow.`), 
    f("design_project_grant", "probe_network"), null;
  }
}

async function Cwn(e, n, s) {
  let r = e.grantsFetch ??= _(s);
  try {
    let o = await r;
    if (o === null) return "unavailable";
    return o.has(n) ? "granted" : "notGranted";
  } finally {
    if (e.grantsFetch === r) e.grantsFetch = null;
  }
}

async function t3o(e, n, s) {
  let r;
  try {
    let o = await Gt.post("/v1/design/grants", {
      project_id: n
    }, {
      ...await c(s),
      validateStatus: a => a < 300 || a === 404
    });
    if (!o.ok) throw new x(`Couldn't record the Design project write grant (${o.reason === "no-auth" ? o.detail : o.reason}).`, "design project grant POST blocked by policy gate");
    r = o.status;
  } catch (o) {
    throw m("design_project_grant", "post_failed"), o;
  }
  if (r === 404) throw a3o(e, n), m("design_project_grant", "mint_refused_404"), new x("This project cannot hold a durable write grant for this account (it may be shared from another organization, or not viewable) \u2014 use finalize_plan with writes/deletes and pass the returned plan_token for writes to this project.", "design project grant mint refused for this project");
  sDe(e, n), g("design_project_grant");
}

function n3o(e, n, s) {
  let r = null;
  async function o() {
    let a;
    try {
      let i = await Gt.get("/v1/design/grants", {
        ...await c(s),
        validateStatus: d => d < 500
      });
      if (!i.ok || i.status !== 200) return null;
      a = i.data?.grants;
    } catch (i) {
      return t(`Server-approval watcher poll failed (${l(i)}); will poll again.`), null;
    }
    if (!Array.isArray(a)) return null;
    for (let i of a) {
      let d = i;
      if (d?.project_id !== n) continue;
      let p = typeof d.created_at === "string" ? Date.parse(d.created_at) : NaN;
      if (Number.isNaN(p)) return null;
      return {
        present: !0,
        createdAtMs: p
      };
    }
    return {
      present: !1
    };
  }
  return {
    async poll() {
      let a = await o();
      if (a === null) return !1;
      if (r === null) return r = {
        createdAtMs: a.present ? a.createdAtMs : null
      }, !1;
      if (!a.present) return !1;
      if (!(r.createdAtMs === null || a.createdAtMs > r.createdAtMs)) return !1;
      if (_he(e, n)) return !1;
      return sDe(e, n), !0;
    }
  };
}

p3o(h);

f3o(async e => !!await hTe(e));

m3o({
  wouldNeedDesignConsent: _2t,
  consentPromptFor: eDe,
  postDesignConsent: tDe,
  seedDesignConsentBit: Cle,
  isConsentBit: y2t
});

export { y2t, eDe, Q6o, Cle, Z6o, Swt, _2t, lqr, tDe, e3o, Cwn, t3o, n3o };
