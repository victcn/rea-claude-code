// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { bq, R$, nFt, vEe } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { Mr, l, Xp } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { O3e, jAr, Bz, Dnn, Wvo, Lnn, qCr, YCr, S9, Pg, jP, al, s_, ip, ako, An, _C, Gt, Ce, ce } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { $Pr } from "./chunk-x35dw27e.js";

import { aoe } from "./chunk-7xj6dhxv.js";

import { kle, mwn } from "./chunk-wmk5m9vh.js";

import { Fle } from "./chunk-t3tngvgg.js";

import { O } from "./chunk-1xnsr4dy.js";

async function h(e, s) {
  try {
    if (ce().claudeCodeFirstTokenDate !== void 0) {
      g("api_first_token_date_fetch");
      return;
    }
    let f = await Gt.get("/api/organization/claude_code_first_token_date", {
      auth: "async",
      timeout: 1e4,
      credentials: s
    });
    if (!f.ok) {
      if (f.reason === "no-auth") t(`Failed to get auth headers for first-token-date fetch: ${f.detail}`, {
        level: "error"
      }), m("api_first_token_date_fetch", "request_failed");
      return;
    }
    let o = f.data?.first_token_date ?? null;
    if (o !== null) {
      let u = new Date(o).getTime();
      if (isNaN(u)) {
        d(Error(`Received invalid first_token_date from API: ${o}`)), m("api_first_token_date_fetch", "invalid_date");
        return;
      }
    }
    await Ce(u => ({
      ...u,
      claudeCodeFirstTokenDate: o
    }), e), g("api_first_token_date_fetch");
  } catch (n) {
    if (Xp(n)) t(`Failed to fetch first token date: ${l(n)}`, {
      level: "error"
    }); else d(n);
    m("api_first_token_date_fetch", "request_failed");
  }
}

var y = "Couldn't save your login. Try logging in again.", k = "Couldn't save your login. If your Mac's keychain is locked, unlock it and log in again.";

async function _ze(e, {storageV5: s, credentials: n} = {}) {
  let f = await oUr(e, {
    storageV5: s,
    credentials: n
  }), o = await YCr(e, n);
  if (jP(), process.env.CLAUDE_CODE_OAUTH_TOKEN) if (o.success) delete process.env.CLAUDE_CODE_OAUTH_TOKEN; else process.env.CLAUDE_CODE_OAUTH_TOKEN = e.accessToken;
  if (bq()) R$(o.success ? null : e.accessToken), nFt(!1);
  if ("transient" in o && o.transient === !0 && !a.CLAUDE_CODE_OAUTH_TOKEN && !bq()) throw new Mr(O() === "macos" ? k : y);
  if (z() && n !== void 0) await T(n);
  let {warning: u} = o;
  if (u) i("tengu_oauth_storage_warning", {
    warning: u === $Pr || u === qCr ? c(u) : b("other")
  });
  if (await Dnn(e.accessToken, s).catch(p => t(String(p), {
    level: "error"
  })), Bz(e.scopes)) await h(s, n).catch(p => t(String(p), {
    level: "error"
  })); else if (!await Wvo(e.accessToken, s)) throw Error("Unable to create API key. The server accepted the request but did not return a key.");
  return await sUr({
    storageV5: s,
    credentials: n,
    ...f
  }), {
    storage: {
      success: o.success,
      backendName: o.backendName,
      transient: o.transient,
      sessionAuth: o.success || ako(e.accessToken) ? "fresh" : ip() ? "previous" : "none"
    }
  };
}

async function oUr(e, {storageV5: s, credentials: n}) {
  let f = An(), o = {
    accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid,
    organizationUuid: e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid
  }, u = s_(f, o), p = s_(_C(), o), A = await Pg(n), _ = p && (A === "env" || A === "fd" || A === "store" && u) ? "same_account" : "account_switch";
  await kle({
    clearOnboarding: !1,
    preserveInProcessTokens: !0,
    preserveNonAnthropicAuth: !0,
    storageV5: s,
    preserveQuotaAutoResume: u,
    artifactAccount: _,
    incomingIdentity: o,
    credentials: n
  }), vEe(null);
  let r = e.profile ?? await O3e(e.accessToken);
  if (r?.account && r.organization) Lnn({
    accountUuid: r.account.uuid,
    emailAddress: r.account.email,
    organizationUuid: r.organization.uuid,
    displayName: r.account.display_name || void 0,
    fullName: r.account.full_name || void 0,
    hasExtraUsageEnabled: r.organization.has_extra_usage_enabled ?? void 0,
    billingType: r.organization.billing_type ?? void 0,
    subscriptionCreatedAt: r.organization.subscription_created_at ?? void 0,
    accountCreatedAt: r.account.created_at,
    ccOnboardingFlags: r.organization.cc_onboarding_flags ?? {},
    claudeCodeTrialEndsAt: r.organization.claude_code_trial_ends_at ?? null,
    claudeCodeTrialDurationDays: r.organization.claude_code_trial_duration_days ?? null,
    seatTier: r.organization.seat_tier ?? null,
    planDisplayName: jAr(r),
    profileFetchedAt: Date.now()
  }, s); else if (e.tokenAccount) Lnn({
    accountUuid: e.tokenAccount.uuid,
    emailAddress: e.tokenAccount.emailAddress,
    organizationUuid: e.tokenAccount.organizationUuid
  }, s);
  return aoe({
    action: "login",
    success: !0,
    authMethod: "oauth"
  }), {
    preserveQuotaAutoResume: u,
    artifactAccount: _,
    incomingIdentity: o
  };
}

async function sUr({storageV5: e, credentials: s, preserveQuotaAutoResume: n = !1, incomingIdentity: f}) {
  if (await mwn(e, {
    preserveQuotaAutoResume: n,
    artifactAccount: "same_account",
    incomingIdentity: f
  }), z() && s !== void 0) await T(s);
  await Fle(e, s);
}

async function T(e) {
  S9(), await al(e);
}

export { _ze, oUr, sUr };
