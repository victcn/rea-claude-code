// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { B, MJe, R$, nte, vEe, iMe } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { x, l, E, jt, $y } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { NC, AX } from "./chunk-y752zmas.js";

import { g } from "./chunk-3ykz5st8.js";

import { gC, cIs, fIs, ZN, JIs, _9, FCr, QEo, S9, oRr, Xz, Ft, C5, Ce, z0, C0t } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { Y, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { Ur, Tv, Oe, Pm } from "./chunk-cjt10y7b.js";

import { dd, lRo, h0s, RIe, Xn } from "./chunk-x35dw27e.js";

import { ZBe, vIe, wU } from "./chunk-qqd24q2y.js";

import { QTs, $N, X1n, fCs, mCs } from "./chunk-gmq0qwep.js";

import { VN } from "./chunk-gzzx34vb.js";

import { air, nR } from "./chunk-84yp45y8.js";

import { Rms } from "./chunk-sqb9meyh.js";

import { H7 } from "./chunk-4v78v8fd.js";

import { ict, Ps } from "./chunk-ac1gm9w7.js";

import { M_r } from "./chunk-2xhrgh8h.js";

import { aoe } from "./chunk-7xj6dhxv.js";

import { GRs, Btn, owo, kTr } from "./chunk-xsrp0h3z.js";

import { UTs, BTs } from "./chunk-kq1bg4dg.js";

import { ATs } from "./chunk-ann91fyn.js";

import { gSo } from "./chunk-4dpx2qvt.js";

import { X6o } from "./chunk-5jp7710h.js";

import { gne, pTe } from "./chunk-k0z2rzcx.js";

import { R7o } from "./chunk-7x8whmnx.js";

import { X$ } from "./chunk-g8dhxbna.js";

import { p2t } from "./chunk-1cvvd6ss.js";

import { cW } from "./chunk-afb3v15j.js";

import { fwt } from "./chunk-h1kydj01.js";

import { o, _t } from "./chunk-cvcg6n1z.js";

import { mkdir as I, readFile as T, unlink as F, writeFile as H } from "fs/promises";

import { join as y } from "path";

var uwt = "41077d10-94b8-4194-be48-d251e9eb21b4", $6o = [ AX, NC ], U = /^[A-Za-z0-9_.-]+$/, v = {
  created_by: "claude-code"
}, j = p(() => _t({
  created_by: o().optional(),
  base_url: o().optional(),
  authentication: _t({
    type: o(),
    client_id: o().optional(),
    credentials_path: o().optional()
  })
})), K = p(() => _t({
  created_by: o().optional()
})), O = {
  no_config_dir: !0,
  invalid_profile_name: !0,
  foreign_profile: !0,
  custom_credentials_path: !0,
  api_key_env_nondispatching: !0,
  wif_env_quad: !1,
  third_party_provider: !1,
  api_key_env: !1,
  env_credential_shadow: !1,
  other_deployment_profile: !1,
  federation_profile: !1,
  unreadable_profile: !1
};

function G(e) {
  return Object.hasOwn(O, e);
}

function F6o(e) {
  if (!(e instanceof x) || e.errorClass === void 0 || !G(e.errorClass)) return null;
  return O[e.errorClass];
}

var M = {
  no_config_dir: "no Anthropic config directory was found",
  invalid_profile_name: "the configured profile name isn't valid",
  foreign_profile: "the profile on this machine belongs to another tool",
  custom_credentials_path: "the existing profile keeps its sign-in somewhere custom",
  api_key_env_nondispatching: "ANTHROPIC_API_KEY is set in this environment"
};

function U6o(e) {
  if (!(e instanceof x) || e.errorClass === void 0 || !q(e.errorClass)) return null;
  return M[e.errorClass];
}

function q(e) {
  return Object.hasOwn(M, e);
}

async function ler() {
  if (!b(a.ANTHROPIC_PROFILE) && a.ANTHROPIC_FEDERATION_RULE_ID && a.ANTHROPIC_ORGANIZATION_ID) throw new x("Workload identity federation is configured in this environment (ANTHROPIC_FEDERATION_RULE_ID and ANTHROPIC_ORGANIZATION_ID), and it takes precedence over the default profile. Set ANTHROPIC_PROFILE to a profile name to sign in with a profile that outranks it.", "Console profile login refused: env-quad federation outranks the implicit profile", "wif_env_quad");
  let e = Oe();
  if (e !== "firstParty") throw new x(`This session uses ${Tv[e]}, which does not use Anthropic Console sign-in.`, "This session uses a third-party provider, which does not use Anthropic Console sign-in.", "third_party_provider");
  let r = a.ANTHROPIC_API_KEY;
  if (r) {
    let f = await oRr({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    if (f.source === "ANTHROPIC_API_KEY" && f.key === r) throw new x("ANTHROPIC_API_KEY is set in this environment and takes precedence over a profile, so a profile sign-in would not be used. Unset it to sign in this way.", "Console profile login refused: env credential shadows the profile", "api_key_env");
  }
  if (FCr()) throw new x("Something in this environment \u2014 an API key helper, an injected token, or a third-party provider setting \u2014 takes precedence over a profile sign-in, so it would not be used here.", "Console profile login refused: env credential shadows the profile", "env_credential_shadow");
  let n = wU();
  if (n === null) throw new x("Cannot locate the Anthropic config directory. Set ANTHROPIC_CONFIG_DIR (or HOME) and try again.", "Console profile login refused: no config directory", "no_config_dir");
  let s = S(n), c = await R(y(n, "configs", `${s}.json`));
  if (c !== null) {
    if (c.base_url && !Pm(c.base_url)) throw new x("This profile is bound to a different Anthropic deployment, so Claude Code will not replace it here. Sign out of it with the tool that created it, then try again.", "Console profile login refused: profile bound to another deployment", "other_deployment_profile");
    if (c.authentication.type === "oidc_federation") throw new x("This machine is set up for workload identity federation, which signs in on its own. If you need a different sign-in, ask whoever configured it.", "Console profile login refused: federation profile", "federation_profile");
    if (c.authentication.type !== "user_oauth") throw new x("Claude Code cannot read the existing sign-in on this machine, so it will not overwrite it. Check the permissions on your Anthropic config directory, then try again.", "Console profile login refused: unreadable or unrecognized profile config", "unreadable_profile");
    if (c.authentication.client_id !== uwt) throw new x("This machine already has a sign-in from another tool that Claude Code cannot replace. Sign out with that tool, then try again.", "Console profile login refused: profile is not a same-client login", "foreign_profile");
    if (c.authentication.credentials_path) throw new x("This profile keeps its sign-in somewhere custom, so Claude Code cannot replace it. Sign out of it with the tool that created it, then try again.", "Console profile login refused: custom credentials_path", "custom_credentials_path");
  }
  if (r) throw new x("ANTHROPIC_API_KEY is set in this environment. Unset it to sign in without an API key.", "Console profile login refused: non-dispatching env API key present", "api_key_env_nondispatching");
  return {
    profile: s,
    configDir: n,
    isNewProfile: c === null
  };
}

async function B6o(e) {
  let r = await ler();
  return await I(y(r.configDir, "credentials"), {
    recursive: !0,
    mode: 448
  }), owo(P(r.configDir, r.profile), () => V(e));
}

async function V(e) {
  let {profile: r, configDir: n, isNewProfile: s} = await ler(), c = y(n, "configs", `${r}.json`);
  await I(y(n, "configs"), {
    recursive: !0,
    mode: 448
  });
  let f = {
    version: GRs,
    organization_id: e.organizationUuid,
    workspace_id: e.workspaceId,
    authentication: {
      type: "user_oauth",
      client_id: uwt
    },
    ...v
  };
  await ZBe(c, f);
  let C = s, h = {
    version: Btn,
    type: "oauth_token",
    access_token: e.accessToken,
    refresh_token: e.refreshToken,
    expires_at: Math.floor(e.expiresAtMs / 1e3),
    scope: e.scopes.join(" "),
    organization_uuid: e.organizationUuid,
    organization_name: e.organizationName,
    account_email: e.accountEmail
  };
  await ZBe(P(n, r), {
    ...h,
    workspace_id: e.workspaceId,
    workspace_name: e.workspaceName,
    ...v
  });
  let A = await Q(y(n, "active_config"), r + `\n`);
  return t(`Console profile login: wrote credentials for profile ${r}${C ? " (new profile)" : ""}${A ? " (set active)" : ""}`), 
  kTr(), {
    profile: r,
    configDir: n
  };
}

async function N({revoke: e} = {}) {
  try {
    let r = wU();
    if (r === null) return {
      removed: !1
    };
    let n;
    try {
      n = S(r);
    } catch {
      return {
        removed: !1
      };
    }
    let s = await R(y(r, "configs", `${n}.json`));
    if (s === null || !L(s)) return {
      removed: !1
    };
    if (await k(P(r, n)) === null) return {
      removed: !1
    };
    return await owo(P(r, n), () => W(e));
  } catch (r) {
    if (E(r) === "ENOENT") return {
      removed: !1
    };
    return t(`Logout: profile credential removal failed: ${l(r)}`, {
      level: "error"
    }), {
      removed: !1
    };
  }
}

async function W(e) {
  let r = wU();
  if (r === null) return {
    removed: !1
  };
  let n;
  try {
    n = S(r);
  } catch {
    return {
      removed: !1
    };
  }
  let s = await R(y(r, "configs", `${n}.json`));
  if (s === null || !L(s)) return {
    removed: !1
  };
  let c = P(r, n), f = await k(c);
  if (f === null) return {
    removed: !1
  };
  let C = {
    refreshToken: f.refreshToken,
    clientId: uwt
  };
  if (e && C.refreshToken) await e({
    refreshToken: C.refreshToken,
    clientId: C.clientId
  });
  try {
    await F(c);
  } catch (h) {
    return t(`Logout: could not remove profile credentials: ${l(h)}`, {
      level: "error"
    }), {
      removed: !1,
      ...C
    };
  }
  return t(`Logout: removed credentials for profile ${n}`), kTr(), {
    removed: !0,
    ...C
  };
}

function S(e) {
  let r = a.ANTHROPIC_PROFILE || vIe(e);
  if (!b(r)) throw new x(`ANTHROPIC_PROFILE "${r}" is not a valid profile name (letters, digits, '_', '.', '-')`, "ANTHROPIC_PROFILE is not a valid profile name", "invalid_profile_name");
  return r;
}

function b(e) {
  return !!e && U.test(e) && e !== "." && e !== "..";
}

function P(e, r) {
  return y(e, "credentials", `${r}.json`);
}

async function R(e) {
  let r;
  try {
    r = await T(e, "utf-8");
  } catch (c) {
    if (E(c) === "ENOENT") return null;
    if (jt(c)) return {
      authentication: {
        type: "unreadable"
      }
    };
    throw c;
  }
  let n;
  try {
    n = Y(r);
  } catch (c) {
    return t(`Profile config is not JSON, treating as foreign: ${l(c)}`), {
      authentication: {
        type: "unreadable"
      }
    };
  }
  let s = j().safeParse(n);
  return s.success ? s.data : {
    authentication: {
      type: "unreadable"
    }
  };
}

function L(e) {
  return e.created_by === v.created_by && e.authentication.type === "user_oauth" && e.authentication.client_id === uwt;
}

async function k(e) {
  let r;
  try {
    r = await T(e, "utf-8");
  } catch (f) {
    if (jt(f)) return null;
    throw f;
  }
  let n;
  try {
    n = Y(r);
  } catch {
    return null;
  }
  let s = K().safeParse(n);
  if (!s.success || s.data.created_by !== v.created_by) return null;
  let c = s.data.refresh_token;
  return {
    refreshToken: typeof c === "string" ? c : void 0
  };
}

async function j6o(e) {
  let r = wU();
  if (r === null) return !1;
  try {
    let n = await k(P(r, S(r)));
    return n !== null && n.refreshToken === e;
  } catch {
    return !0;
  }
}

async function Q(e, r) {
  try {
    return await H(e, r, {
      flag: "wx",
      mode: 420
    }), !0;
  } catch (n) {
    if (E(n) === "EEXIST") return !1;
    throw n;
  }
}

async function kle({clearOnboarding: e = !1, preserveInProcessTokens: r = !1, preserveNonAnthropicAuth: n = !1, storageV5: s, preserveQuotaAutoResume: c = !1, artifactAccount: f = "signed_out", incomingIdentity: C, credentials: h}) {
  let {flushTelemetry: A} = await import("./chunk-qkhf00v1.js");
  if (await A(), await BTs(f), Ft()) {
    await mwn(s, {
      preserveQuotaAutoResume: c,
      artifactAccount: f,
      incomingIdentity: C
    });
    return;
  }
  if (!r && Oe() === "firstParty") {
    let u = Xn();
    u.invalidateCache?.();
    let i = await u.readAsync(h), m = i?.claudeAiOauth;
    if (m?.refreshToken) await gC(m.refreshToken, m.clientId);
    let _ = i?.designOauth;
    if (_?.refreshToken) await gC(_.refreshToken, _.clientId);
  }
  if (Oe() === "gateway") {
    let u = Date.now() + 5e3;
    for (let _ = iMe(); _ && Date.now() < u; _ = iMe()) await We(_.catch(() => {}), u - Date.now());
    let i = Xn();
    i.invalidateCache?.();
    let m = (await i.readAsync(h))?.enterpriseGateway;
    if (m) await JIs(m, h);
  }
  if (!r) a.unset("CLAUDE_CODE_OAUTH_TOKEN"), R$(null);
  await QEo(s), await N({
    revoke: !r && Oe() === "firstParty" ? ({refreshToken: u, clientId: i}) => gC(u, i) : void 0
  });
  let w = Xn();
  if (n) {
    if (Oe() === "firstParty") {
      w.invalidateCache?.();
      let u = (await w.readAsync(h))?.designOauth;
      if (u?.refreshToken) await gC(u.refreshToken, u.clientId);
    }
    await w.mutate(u => {
      let i = {
        ...u
      };
      return delete i.claudeAiOauth, delete i.organizationUuid, delete i.trustedDeviceToken, 
      delete i.trustedDeviceEnrolledAfterRefusalAtMs, delete i.enterpriseGateway, delete i.designOauth, 
      i;
    }, h).catch(u => {
      let i = E(u);
      if (i === "EPERM" || i === "ENOENT" || $y(u)) {
        t(`[performLogout] re-login secure-storage prune failed (${i}): ${l(u)}`, {
          level: "error"
        });
        return;
      }
      d(u);
    });
  } else {
    let u = !1, i = async () => {
      u = !0;
      let m = await X(w, h);
      if (await w.delete(h), m && Object.keys(m).length > 0) await J(w, m, h);
    };
    await lRo(i).catch(m => {
      if (u) throw m;
      return d(m), h0s(i);
    });
  }
  nte(null), vEe(null), await mwn(s, {
    preserveQuotaAutoResume: c,
    artifactAccount: f,
    incomingIdentity: C,
    credentials: h
  }), await Ce(u => {
    let i = {
      ...u
    };
    if (e) {
      if (i.hasCompletedOnboarding = !1, i.subscriptionNoticeCount = 0, i.hasAvailableSubscription = !1, 
      i.customApiKeyResponses !== void 0) i.customApiKeyResponses = {
        approved: [],
        rejected: z0(i).rejected
      };
      let m = fwt;
      if (i.seenNotifications?.[m] !== void 0) {
        let {[m]: _, ...D} = i.seenNotifications;
        i.seenNotifications = D;
      }
    }
    return i.oauthAccount = void 0, i.additionalModelOptionsCache = void 0, i.additionalModelOptionsAnsweredAt = void 0, 
    i.additionalModelCostsCache = void 0, i.modelAccessCache = void 0, i.orgModelDefaultCache = void 0, 
    i.cachedArtifactRoster = void 0, i.artifactRosterDenied = void 0, i.lastSeenOrgDefaultUpdatedAt = void 0, 
    i.clientDataCache = void 0, i.clientDataCacheSlots = void 0, i.autoCompactWindowsCache = void 0, 
    i.cachedUsageUtilization = void 0, i.metricsStatusCache = void 0, i.metricsStatusCacheByPrincipal = void 0, 
    i.githubWebConnectionStatusCache = void 0, i.startupPrefetchedAt = void 0, i;
  }, s), await Z(), MJe(void 0), g("oauth_logout");
}

async function Z() {}

async function mwn(e, {preserveQuotaAutoResume: r = !1, artifactAccount: n = "signed_out", incomingIdentity: s, credentials: c} = {}) {
  if (S9(), z() && c === void 0) RIe();
  VN(), C0t(), Ur().providerCache.clientDataFetches.clear(), ZN(), Ur().providerCache.modelConfigs.clear(), 
  Ur().providerCache.validatedModels.clear(), fIs(), cIs(), _9(), ict(Ps().gzipRequestBody.blockStore), 
  H7();
  let f = B();
  if (Rms(f.host), R7o(f.host), UTs(n, s), n !== "same_account") {
    if (ATs(f), !(Ft() && n === "signed_out")) air("account_change"), M_r("account_change");
  }
  if (cW.of(f.host).clear(), Xz(), nR(f, "account_change"), C5(), pTe.cache?.clear?.(), 
  gne.cache?.clear?.(), await p2t(e), await gSo(), X6o(), fCs(), mCs(), !r) X$("account_switch"), 
  $N("account_switch"), QTs();
  X1n();
}

async function nYs({exit: e, setError: r, setInfo: n, storageV5: s, credentials: c}) {
  n("Signing out\u2026"), aoe({
    action: "logout",
    success: !0,
    authMethod: "oauth"
  });
  try {
    await kle({
      clearOnboarding: !0,
      storageV5: s,
      credentials: c
    }), e();
  } catch (f) {
    d(f), r(`Couldn't sign out \u2014 ${f instanceof Error ? f.message : String(f)}`);
  }
}

async function J(e, r, n) {
  let s;
  for (let c = 0; c < 2; c++) try {
    let f = await e.mutate(() => ({
      coworkRemoteDevice: r
    }), n);
    if (f.success) return;
    if (s = Error("logout: the device identity could not be written back after the credential wipe"), 
    !f.transient) break;
  } catch (f) {
    s = f;
  }
  d(s);
}

async function X(e, r) {
  for (let n = 0; n < 2; n++) {
    let s = await (e.readAsyncStrict?.(r) ?? e.readAsync(r));
    if (s !== dd) return s?.coworkRemoteDevice;
  }
  d(Error("logout: secure storage could not be read, so the device identity is not carried across the wipe"));
  return;
}

export { uwt, $6o, F6o, U6o, ler, B6o, j6o, kle, mwn, nYs };
