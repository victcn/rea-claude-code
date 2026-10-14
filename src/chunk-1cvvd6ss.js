// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, B, qp, Lr, hx, lYn } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { l, W, ci, XJe } from "./chunk-b0z4bv3v.js";

import { J, Ht, We } from "./chunk-nvtwm272.js";

import { qK, Smt, L5, FLt, wmt, gin, hin, yin, S1e, w1e, OU, _ee, hNs, Wve, UKn, WPo, eOr, Gin, Wie, BKn, tOr, zPo, Wmt, ng, qPo, QPo, ZPo, qfe, jKn, PC, nOr, dNt, Ow, B9e, eOe, $5, WKn, Vin, j9e, zKn, qin, f_, G9e, tOe, nX, Vmt } from "./chunk-q6wab2jw.js";

import { bt, _, Y, t } from "./chunk-kawq2919.js";

import { Fj } from "./chunk-a16yb89m.js";

import { d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { Ap, un } from "./chunk-y752zmas.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { a } from "./chunk-j016gcgm.js";

import { wje, hI, iHr, u4n } from "./chunk-5brm0azz.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { UAr, Fz, $vo, Wut, cDt, bwe, GWn, VWn, KWn, uDt, Swe, iPs, f5, Rw, kK, cpt, $a, Sp, prn, frn, yk, Sn, S9, Pg, _rn, brn, Q3e, j_, GDt, uie, vt, Up, $0, VDt, UPe, BPe, SGn, wGn, k } from "./chunk-xywp7esx.js";

import { At } from "./chunk-vps0k559.js";

import { vU } from "./chunk-x35dw27e.js";

import { Oe, vf, din } from "./chunk-cjt10y7b.js";

import { ar } from "./chunk-nnrb0acr.js";

import { nIr, J0s } from "./chunk-dd98x6x7.js";

import { O9 } from "./chunk-s2t7g8m9.js";

import { e1e, PDs, IDs } from "./chunk-qqd24q2y.js";

import { AH } from "./chunk-b47tzzqx.js";

import { sjn, _tn, rRs, Z8, Rkr, Stn, xkr, ijn, Pkr, Ikr, ajn, ljn, Okr, tut } from "./chunk-4dpx2qvt.js";

import { _Dn } from "./chunk-7xj6dhxv.js";

import { Pa } from "./chunk-4v78v8fd.js";

import { tms, nms } from "./chunk-sqb9meyh.js";

import { oi } from "./chunk-bp2n0w3d.js";

import { Ckt, uV, Hs, ks } from "./chunk-84yp45y8.js";

import { gkr, e5, QCs, cC, hkr } from "./chunk-ewk363e4.js";

import { Pbr, jpo, mbs } from "./chunk-r8a304y3.js";

import { QE } from "./chunk-ghdkaeg7.js";

import { qet } from "./chunk-69v14wbe.js";

import { s8o } from "./chunk-pses58nm.js";

import { Zxe } from "./chunk-86k06k4p.js";

import { o, oe, u, ue } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

import { Qo } from "./chunk-eha3vdmz.js";

import { yt } from "./chunk-9zhz923g.js";

import { createHash as et } from "crypto";

import { hostname as Te } from "os";

import { open as tt, readFile as nt, rm as rt, unlink as ot, writeFile as st } from "fs/promises";

var Xe = "tengu_managed_config_prefetch_off";

function u2t() {
  let e = a.CLAUDE_CODE_MANAGED_CONFIG_PREFETCH;
  if (e !== void 0) return e;
  if (Oe() !== "firstParty" || !vf() && AH() === void 0) return !1;
  return !k(Xe, !1);
}

var Qe = 5e3;

class we {
  updates=new QE;
  owner;
  constructor(e) {
    this.owner = e;
  }
  supersede(e, n, r) {
    let s = this.owner;
    this.owner = r, this.updates.enqueue({
      settings: e,
      baseline: n
    }), s("superseded");
  }
  settle(e) {
    this.updates.done(), this.owner(e);
  }
}

class ve {
  replRequester=null;
  requesterWaiters=[];
  noConsentSurface=!1;
  stopsWhenApprovalCannotBeAsked=!1;
  standaloneDialogUnanswered=null;
  pendingReview=null;
  registerRequester(e) {
    if (this.replRequester = e, e && this.requesterWaiters.length > 0) {
      let n = this.requesterWaiters;
      this.requesterWaiters = [];
      for (let r of n) r(e);
    }
  }
  addWaiter(e) {
    this.requesterWaiters.push(e);
  }
  dropWaiter(e) {
    this.requesterWaiters = this.requesterWaiters.filter(n => n !== e);
  }
  review(e, n, r) {
    return new Promise(s => {
      if (this.pendingReview) {
        this.pendingReview.supersede(n, r, s);
        return;
      }
      let y = new we(s);
      this.pendingReview = y, i("tengu_managed_settings_security_dialog_shown", {});
      let S;
      try {
        S = e(n, r, y.updates);
      } catch {
        S = Promise.resolve("deferred_no_consent_surface");
      }
      S.then(C => this.close(y, C), () => this.close(y, "deferred_no_consent_surface"));
    });
  }
  close(e, n) {
    if (this.pendingReview = null, n === "approved") i("tengu_managed_settings_security_dialog_accepted", {}), 
    g("remote_managed_settings_security_check"); else if (n === "rejected") i("tengu_managed_settings_security_dialog_rejected", {});
    e.settle(n);
  }
  startupConsentRelease=null;
  fireStartupConsentRelease() {
    let e = this.startupConsentRelease;
    if (e) this.startupConsentRelease = null, e();
  }
  consentNeededRelease=null;
  async fireConsentNeededRelease() {
    let e = this.consentNeededRelease;
    if (e) this.consentNeededRelease = null, await e();
  }
  consentHandoffHolds=new Set;
  consentHandoffSignal=Me();
  consentHandoffRevealActive=!1;
}

var Ze = new K(() => new ve);

function x() {
  return Ze.of(B().host);
}

function ke() {
  return oi().pendingStandaloneRender !== null;
}

function gwn() {
  return x().standaloneDialogUnanswered;
}

function zKr(e) {
  x().registerRequester(e);
}

function Ce(e) {
  let n = x();
  return n.startupConsentRelease = e, () => {
    if (n.startupConsentRelease === e) n.startupConsentRelease = null;
  };
}

function GKr() {
  let e = x(), n = Symbol("consent-handoff-hold");
  if (e.consentHandoffHolds.add(n), e.consentHandoffHolds.size === 1) e.consentHandoffSignal.emit();
  return () => {
    if (e.consentHandoffHolds.delete(n) && e.consentHandoffHolds.size === 0) e.consentHandoffSignal.emit();
  };
}

function mwt() {
  return x().consentHandoffHolds.size > 0;
}

function VKr() {
  return x().consentHandoffRevealActive;
}

function z6o(e) {
  return x().consentHandoffSignal.subscribe(e);
}

function G6o(e) {
  let n = x();
  return n.consentNeededRelease = e, () => {
    if (n.consentNeededRelease === e) n.consentNeededRelease = null;
  };
}

function KKr() {
  x().noConsentSurface = !0, zPo();
}

function V6o() {
  x().stopsWhenApprovalCannotBeAsked = !0;
}

function Ee() {
  return x().noConsentSurface;
}

async function Re() {
  let e = x(), n, r = new Promise(y => {
    n = y, e.addWaiter(y);
  }), s = await Ht(r, Qe, "managed-settings security dialog requester wait timed out").catch(() => null);
  if (s === null) e.dropWaiter(n);
  return s;
}

async function Ae(e, n, r) {
  if (!n || !_ee(OU(n))) return "no_check_needed";
  if (!hNs(e, n)) return "no_check_needed";
  let s = x();
  if (!qp() || iHr() && a.CLAUDE_CODE_SESSION_KIND === "bg") return s.noConsentSurface ? "deferred_no_consent_surface" : "deferred_non_interactive";
  let y = e.source === "consented_payload" ? e.settings : e.consentedPayload;
  if (s.replRequester) if (s.consentNeededRelease) {
    let A = null;
    try {
      A = GKr(), await s.fireConsentNeededRelease();
      let v = s.replRequester;
      if (v) return s.consentHandoffRevealActive = !0, await s.review(v, n, y);
      if (oi().has(process.stdout)) {
        let w = await Re();
        if (w) return s.consentHandoffRevealActive = !0, await s.review(w, n, y);
      }
      return "deferred_no_consent_surface";
    } finally {
      s.consentHandoffRevealActive = !1, A?.();
    }
  } else return s.review(s.replRequester, n, y);
  if (s.noConsentSurface) return "deferred_no_consent_surface";
  let S = oi();
  if (S.has(process.stdout)) {
    s.fireStartupConsentRelease();
    let A = await Re();
    if (A) return s.review(A, n, y);
  }
  if (r === void 0 || s.noConsentSurface || s.stopsWhenApprovalCannotBeAsked && qet.get().kind === "unavailable") {
    if (!s.noConsentSurface) s.standaloneDialogUnanswered = "not_asked";
    return "deferred_no_consent_surface";
  }
  i("tengu_managed_settings_security_dialog_shown", {});
  let C = S.has(process.stdout), R = r(n, C, y);
  if (!C) S.claimForStandaloneRender(R);
  let E;
  try {
    E = await R, s.standaloneDialogUnanswered = null;
  } catch (A) {
    throw s.standaloneDialogUnanswered = "closed_unanswered", m("remote_managed_settings_security_check", "dialog_unavailable"), 
    A;
  }
  if (i(E === "approved" ? "tengu_managed_settings_security_dialog_accepted" : "tengu_managed_settings_security_dialog_rejected", {}), 
  E === "approved") g("remote_managed_settings_security_check");
  return E;
}

var qKr = "Managed settings were not approved; exiting without applying them.", K6o = "Your organization's managed settings need your approval, which couldn't be asked for here. Run `claude` in a terminal and approve them, then run this command again.", YKr = Me();

function be(e) {
  switch (e) {
   case "rejected":
    if (process.stderr.isTTY && !ks()) O9(), uV(qKr);
    if (!ks()) YKr.emit();
    return Hs(1), !1;

   case "deferred_no_consent_surface":
    return !1;

   case "superseded":
    return !1;

   case "approved":
   case "no_check_needed":
   case "deferred_non_interactive":
    return !0;
  }
}

var Pe = p(() => u({
  uuid: o(),
  checksum: o(),
  settings: ue(o(), oe())
}));

var it = 1e4, dt = 5, ct = 36e5, ut = 3e4;

class xe {
  poller=null;
  loadingCompletePromise=null;
  loadingCompleteResolve=null;
  fetchSettledPromise=null;
  fetchSettledResolve=null;
  signedCacheShadowChecked=!1;
  storedCopyShadow=void 0;
  storedCopyReported=!1;
  livePrincipalChecked=!1;
  backstopReleased=!1;
  prefetch=new ijn;
  oauthRefreshLatch={
    attempted: !1,
    recoveries: {
      begun: 0,
      running: 0
    }
  };
  createBarrier(e) {
    this.fetchSettledPromise = new Promise(n => {
      this.fetchSettledResolve = n, e?.(n);
    }), this.loadingCompletePromise = new Promise(n => {
      this.loadingCompleteResolve = n;
    });
  }
  releaseLoadBarrier() {
    this.loadingCompleteResolve?.(), this.loadingCompleteResolve = null;
  }
  releaseBarrier() {
    this.releaseLoadBarrier(), this.fetchSettledResolve?.(), this.fetchSettledResolve = null;
  }
  detachBarrier() {
    let e = this.loadingCompleteResolve, n = this.fetchSettledResolve;
    if (this.loadingCompleteResolve = null, this.loadingCompletePromise = null, this.fetchSettledResolve = null, 
    this.fetchSettledPromise = null, !e && !n) return null;
    return () => {
      e?.(), n?.();
    };
  }
  startPoller(e) {
    this.poller = e;
  }
  stopPoller() {
    this.poller?.[Symbol.dispose](), this.poller = null;
  }
}

var lt = new K(() => new xe);

function F() {
  return lt.of(B().host);
}

function gwt() {
  Ue();
  let e = F();
  if (e.loadingCompletePromise) return;
  if (cC()) e.createBarrier(n => {
    setTimeout((r, s) => {
      if (s.fetchSettledResolve === r) {
        if (ke()) {
          t("Remote settings: Loading promise timeout deferred \u2014 consent dialog pending");
          return;
        }
        t("Remote settings: Loading promise timed out, resolving anyway (load and fetch barriers)"), 
        s.backstopReleased = !0, s.releaseBarrier();
      }
    }, ut, n, e);
  });
}

function XKr(e) {
  if (Lr() || !cC() || Ow() || B9e() || WKn() !== void 0) return;
  if (Sn()?.refreshToken && Up() === void 0) return;
  let n = qin(), r = n ? L5(n) : void 0, s = F(), {oauthRefreshLatch: y} = s;
  s.prefetch.set({
    checksum: r,
    epoch: Wie(),
    endpoint: le(),
    principal: Le()
  }, S => fe(r, !1, e, S, y), S => S.success);
}

function mer() {
  let e = F();
  e.prefetch.clear(), e.oauthRefreshLatch = {
    attempted: !1,
    recoveries: {
      begun: 0,
      running: 0
    }
  };
}

function Le() {
  if (Lr()) return "gateway";
  let e = Sn(), n = Up();
  return at(_([ vt() && hkr(), e?.accessToken === void 0 ? null : e.refreshToken ? [ n?.organizationUuid ?? "", n?.accountUuid ?? "", at(e.accessToken) ] : at(e.accessToken), prn().fingerprint, cpt() ? e1e()?.organizationUuid ?? "" : null ]));
}

function ft() {
  let e = $0();
  if (!iHr()) return e;
  let n = `, ${a.CLAUDE_CODE_ENTRYPOINT ?? "cli"}`, r = e.indexOf(n);
  return r === -1 ? e : e.slice(0, r + n.length) + `, ${u4n}` + e.slice(r + n.length);
}

function le() {
  let e = Lr();
  if (e) return `${e.url}/managed/settings`;
  return `${un().BASE_API_URL}/api/claude_code/settings`;
}

function te(e) {
  if (!e) return e;
  return tOe(e, "remote managed settings").settings ?? {};
}

function He(e, n) {
  let r = eOr(e), s = tOe(r, n), y = r, S = Object.keys(y);
  if (!s.settings && S.length > 0 && !S.every(C => s.removed.includes(C)) && !gt(y)) return t(`Remote settings: ruled_empty - no key in the payload could be applied as written (${s.errors.length} rulings); nothing of it applies`), 
  {
    ruledEmpty: {
      success: !1,
      error: "No setting in the payload could be applied as written",
      errorKind: "ruled_empty",
      rulings: s.errors,
      skipRetry: !0
    }
  };
  if (s.errors.length > 0) t(`Remote settings: Payload contains ${s.errors.length} invalid entries; applying the salvaged subset`);
  return {
    settings: r,
    salvagedSettings: ht(y, s)
  };
}

function gt(e) {
  let n = Object.keys(e);
  return n.length > 0 && n.every(r => Vmt.some(s => s === r));
}

function Ke(e, n, r) {
  let s = [ ...Vmt.filter(y => y in n && !(y in e)), ...r.onlySubstitutes ? r.errors.filter(y => y.onlySubstitutes).map(y => y.path) : [] ].filter(y => y in n);
  if (s.length === 0) return e;
  return {
    ...e,
    ...Object.fromEntries(s.map(y => [ y, n[y] ]))
  };
}

function pt(e) {
  let n = tOe(e, "remote managed settings");
  return Ke(n.settings ?? {}, e, n);
}

function ht(e, n) {
  let r = n.errors.length > 0 ? n.settings ?? {} : void 0;
  return r === void 0 ? void 0 : Ke(r, e, n);
}

async function mt(e) {
  let n = WKn();
  if (n === void 0) return null;
  if (n === "fail") return {
    success: !1,
    error: "mocked fetch failure",
    errorKind: "unknown_error",
    skipRetry: !0
  };
  if (n === "empty") return {
    success: !0,
    settings: {},
    checksum: void 0,
    consentIdentity: await ae(e)
  };
  try {
    let r = Vin(), s = r !== void 0 ? await nt(r, "utf-8") : n, y = Y(s);
    if (!y || typeof y !== "object" || Array.isArray(y)) return {
      success: !1,
      error: "mock JSON parse failed",
      errorKind: "parse_error",
      skipRetry: !0
    };
    let S = He(y, "mock remote settings");
    if ("ruledEmpty" in S) return S.ruledEmpty;
    return {
      success: !0,
      ...S,
      checksum: "mock",
      consentIdentity: await ae(e)
    };
  } catch {
    return {
      success: !1,
      error: "mock JSON parse failed",
      errorKind: "parse_error",
      skipRetry: !0
    };
  }
}

function ger() {
  return cC();
}

async function yB() {
  let e = F();
  if (e.loadingCompletePromise) await e.loadingCompletePromise;
}

async function fTe() {
  let e = F();
  if (e.fetchSettledPromise) await e.fetchSettledPromise;
}

iPs(fTe);

function hwt() {
  return F().backstopReleased;
}

function mTe() {
  return cC() && !f_();
}

function her() {
  return !wje() && cC() && zKn();
}

function Ue() {
  s8o(async () => {
    if (her()) await fTe(); else if (mTe()) await yB();
  });
}

async function St(e) {
  let n = Lr();
  if (n) {
    let s = hx(n) ? await je(n, e) : void 0;
    return {
      headers: {
        Authorization: `Bearer ${n.jwt}`
      },
      authType: "gateway_jwt",
      consentIdentity: Be(n, s),
      pinnedFingerprint: s
    };
  }
  if (vt() && hkr()) {
    let s = Sn();
    if (s?.accessToken) return {
      headers: {
        Authorization: `Bearer ${s.accessToken}`,
        "anthropic-beta": Ap
      },
      authType: "oauth",
      accessToken: s.accessToken,
      ...await ie(e)
    };
  }
  try {
    let {key: s} = yk({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    if (s) {
      if (f5(s) === null) return t("Remote settings: API key not sent: ANTHROPIC_BASE_URL is not an Anthropic host"), 
      {
        headers: {},
        error: "Remote settings: API key not sent: ANTHROPIC_BASE_URL is not an Anthropic host",
        authType: "api_key"
      };
      return {
        headers: {
          "x-api-key": s
        },
        authType: "api_key"
      };
    }
  } catch {}
  if (cpt()) {
    if (PDs()) return t("Remote settings: the settings endpoint rejected the profile credential after a forced refresh; not fetching with it again until the next sign-in or restart"), 
    {
      headers: {},
      error: "Remote settings: the settings endpoint rejected the profile credential after a forced refresh; not fetching with it again until the next sign-in or restart",
      authType: "profile",
      profileError: !0
    };
    try {
      let {getWIFCredentials: s, getWIFTokenCache: y} = await import("./chunk-cyax6nsc.js"), [S, C] = await Promise.all([ y(), s() ]);
      if (S !== null) {
        if (!gkr(C?.baseURL)) {
          let E = `Remote settings: profile base URL ${C?.baseURL ?? "(unknown)"} is not the settings endpoint's host; not fetching with the profile credential`;
          return t(E), {
            headers: {},
            error: E,
            authType: "profile",
            profileError: !0
          };
        }
        let R = await S.getToken();
        return {
          headers: {
            ...C?.extraHeaders,
            Authorization: `Bearer ${R}`
          },
          authType: "profile",
          accessToken: R,
          profileBearer: !0,
          consentIdentity: $e()
        };
      }
    } catch (s) {
      let y = `Remote settings: profile credential unavailable: ${l(s)}`;
      t(y, {
        level: "error"
      });
      let {isWIFTransientExchangeError: S} = await import("./chunk-cyax6nsc.js");
      return {
        headers: {},
        error: y,
        authType: "profile",
        profileError: !0,
        retryable: S(s)
      };
    }
  }
  let r = Sn();
  if (r?.accessToken) return {
    headers: {
      Authorization: `Bearer ${r.accessToken}`,
      "anthropic-beta": Ap
    },
    authType: "oauth",
    accessToken: r.accessToken,
    ...await ie(e)
  };
  return {
    headers: {},
    error: "No authentication available",
    authType: "none"
  };
}

async function _t(e) {
  return (await ie(e)).consentIdentity;
}

async function ie(e) {
  let n = Up(), r = await Pg(e), s = r === "store" ? "stored_login" : r === "env" || r === "fd" ? "injected_token" : void 0;
  if (r !== "store") return {
    credentialOrigin: s
  };
  return {
    credentialOrigin: s,
    consentIdentity: n?.organizationUuid ? {
      organizationUuid: n.organizationUuid,
      accountUuid: n.accountUuid
    } : void 0
  };
}

function $e() {
  let e = e1e(), n = Up();
  return e?.organizationUuid && e.accountEmail && n?.organizationUuid === e.organizationUuid && n.emailAddress === e.accountEmail && n.accountUuid ? {
    organizationUuid: e.organizationUuid,
    accountUuid: n.accountUuid
  } : void 0;
}

var Ne = "gateway:", Rt = 256;

function Be(e, n) {
  if (!hx(e) || !n || n === $vo) return;
  let r;
  try {
    r = new URL(e.url);
  } catch {
    return;
  }
  if (r.protocol !== "https:") return;
  let s = `${r.origin}${r.pathname === "/" ? "" : r.pathname}`, y = _Dn(e) ?? "";
  return {
    organizationUuid: `${Ne}${s}#${n}`,
    accountUuid: y.length > Rt ? `sha256:${et("sha256").update(y).digest("hex")}` : y
  };
}

async function je(e, n) {
  return bwe(Fz(new URL(e.url)), n);
}

async function ae(e) {
  let n = Lr();
  if (n) return Be(n, await je(n, e).catch(() => {}));
  if (Sp({
    skipRetrievingKeyFromApiKeyHelper: !0
  }).key === null && cpt()) return $e();
  return _t(e);
}

async function ne(e, n, r, s) {
  if (!e) return;
  let y = e.organizationUuid.startsWith(Ne) ? await ae(s) : Up();
  if (y?.organizationUuid !== e.organizationUuid || y.accountUuid !== e.accountUuid) {
    t("Remote settings: consent identity no longer matches the fetch identity; not recording org consent");
    return;
  }
  await nms(e, n, r);
}

function j(e) {
  if (Wie() === e) return !1;
  return t("Remote settings: Cache was reset (login/logout) during this fetch; discarding its result"), 
  f("remote_managed_settings_pull", "reset_during_fetch"), !0;
}

function Q(e) {
  return e.httpStatus !== void 0 ? `${e.errorKind}/${e.httpStatus}` : e.errorKind;
}

async function wt(e, n = {}) {
  let r = await mt(n.credentials);
  if (r) return r;
  let s = null, y = Lr() && !n.background || n.singleAttempt ? 0 : dt, S = u2t(), C = S && n.startupAwaited === !0 && !n.background && !Lr(), R = S ? n.oauthRefreshLatch : void 0, E = w => fe(e, !1, n.credentials, w, R), A = n.prefetched, v = !1;
  for (let w = 1; w <= y + 1; w++) {
    let h = A ?? Stn(E);
    if (A = void 0, C && w === 1) {
      let T = await xkr({
        first: h,
        send: E,
        isAnswer: (M, L) => M.success || M.skipRetry === !0 && !(L && M.errorKind === "http_401"),
        stillWanted: u2t,
        retryFollows: y > 0
      });
      s = T.result, v ||= T.hedged;
    } else s = await h.attempt;
    if (s.attempts = w, v) s.hedged = !0;
    if (s.success) return s;
    if (s.skipRetry) return s;
    if (w > y) return s;
    let O = vU(w);
    t(`Remote settings: Retry ${w}/${y} after ${O}ms (${Q({
      errorKind: s.errorKind ?? "unknown_error",
      ...s.httpStatus !== void 0 && {
        httpStatus: s.httpStatus
      }
    })})`), await J(O);
  }
  return s;
}

var kt = Date.now();

function Ie(e) {
  let n = (() => {
    switch (e.errorKind) {
     case "http_401":
     case "http_403":
      return "auth_failed";

     case "timeout":
      return "timeout";

     case "network_error":
      return "network_error";

     case "parse_error":
     case "ruled_empty":
      return "parse_failed";

     case "http_4xx":
     case "http_5xx":
     case "unknown_error":
     case "gateway_cert_mismatch":
     case "gateway_public_address":
     case "gateway_pin_refused":
     case "gateway_pin_unreadable":
      return "request_failed";

     case "no_auth_available":
     case "profile_credential_error":
     case "api_key_not_sent":
     case void 0:
      return;
    }
  })(), r = e.errorKind === "http_401" ? 401 : e.errorKind === "http_403" ? 403 : e.httpStatus, s = e.authType === "oauth" ? "oauth" : e.authType === "api_key" ? "api_key" : e.authType === "profile" ? "wif" : void 0;
  return Okr({
    errorCode: n,
    httpStatus: r,
    serverErrorType: e.serverErrorType,
    serverErrorCode: e.serverErrorCode,
    serverAuthDenial: e.serverAuthDenial,
    tokenRefreshOutcome: e.tokenRefreshOutcome,
    forcedRefreshOutcome: e.forcedRefreshOutcome,
    authType: s,
    credentialOrigin: e.authType === "api_key" ? "static_key" : e.credentialOrigin,
    injectedTokenRecovery: e.credentialOrigin === "injected_token" ? GDt() : void 0,
    noResponse: e.noResponse
  });
}

async function fe(e, n = !1, r, s, y) {
  let S = y && UPe(y.recoveries), C, R = !1, E, A = {}, v = w => (t(`Remote settings: Fetch attempt failed (${Q({
    errorKind: w.errorKind ?? "unknown_error",
    ...w.httpStatus !== void 0 && {
      httpStatus: w.httpStatus
    }
  })})`), {
    ...A,
    ...w
  });
  try {
    let w = await uie({
      credentials: r
    });
    await kK(r);
    let h = await St(r);
    if (C = h.accessToken, R = h.profileBearer === !0, E = h.consentIdentity, A = {
      authType: h.authType,
      credentialOrigin: h.credentialOrigin,
      tokenRefreshOutcome: h.authType === "oauth" ? w : void 0
    }, h.error) return v({
      success: !1,
      error: h.profileError ? h.error : "Authentication required for remote settings",
      errorKind: h.profileError ? "profile_credential_error" : h.authType === "api_key" ? "api_key_not_sent" : "no_auth_available",
      skipRetry: !(h.profileError && h.retryable)
    });
    let O = le(), T = {
      ...h.headers,
      "User-Agent": hI() ? ft() : Qo(),
      "Cache-Control": "no-cache",
      Pragma: "no-cache"
    };
    if (e) T["If-None-Match"] = `"${e}"`;
    let M = Lr()?.hostVerdict, L = Swe(h.pinnedFingerprint, O) ?? (M && "verified" in M && M.verified && !("vouched" in M) ? VWn(O, M.network) : void 0), P = await At.get(O, {
      headers: T,
      timeout: it,
      ...L && {
        httpsAgent: L
      },
      validateStatus: H => H === 200 || H === 204 || H === 304 || H === 404,
      signal: s
    });
    if (UAr(P.headers?.["x-cc-gateway-version"]), P.status === 304) {
      if (!e) return t("Remote settings: 304 to an unconditional request"), {
        success: !1,
        error: "Unexpected 304 Not Modified",
        errorKind: "unknown_error",
        httpStatus: 304,
        skipRetry: !0,
        ...A,
        ...ajn(P.headers)
      };
      return t("Remote settings: Using cached settings (304)"), {
        success: !0,
        settings: null,
        checksum: e,
        signature: FLt(P.headers),
        consentIdentity: E,
        ...A,
        responseKind: "not_modified"
      };
    }
    if (P.status === 204 || P.status === 404) return t(`Remote settings: No settings found (${P.status})`), 
    {
      success: !0,
      settings: {},
      checksum: void 0,
      signature: FLt(P.headers),
      consentIdentity: E,
      ...A,
      responseKind: "none_configured",
      ...ajn(P.headers)
    };
    let D = Pe().safeParse(P.data);
    if (!D.success) return t(`Remote settings: Invalid response format - ${D.error.message}`), 
    {
      success: !1,
      error: "Invalid remote settings format",
      errorKind: "parse_error",
      skipRetry: !0,
      ...A,
      ...ajn(P.headers)
    };
    let G = He(D.data.settings, "remote managed settings");
    if ("ruledEmpty" in G) return {
      ...G.ruledEmpty,
      ...A
    };
    if (y && D.data.checksum) BPe(y, S);
    return t("Remote settings: Fetched successfully"), {
      success: !0,
      ...G,
      checksum: D.data.checksum,
      signature: FLt(P.headers),
      consentIdentity: E,
      ...A
    };
  } catch (w) {
    let h = l(w?.cause);
    if (l(w).includes(Wut)) return v({
      success: !1,
      error: "Cloud gateway TLS pin is in a symlinked credentials file",
      errorKind: "gateway_pin_refused",
      skipRetry: !0
    });
    if (l(w).includes(cDt)) return v({
      success: !1,
      error: "Cloud gateway TLS pin could not be read from the credentials file",
      errorKind: "gateway_pin_unreadable"
    });
    if (l(w).includes(KWn) || h.includes(KWn)) {
      let P = uDt(w);
      return v({
        success: !1,
        error: "Cloud gateway TLS certificate does not match stored pin",
        errorKind: "gateway_cert_mismatch",
        ...P && {
          gatewayPinMismatch: P
        },
        skipRetry: !0
      });
    }
    if (l(w).includes(GWn) || h.includes(GWn)) return v({
      success: !1,
      error: "Cloud gateway connection outside the network it was checked on",
      errorKind: "gateway_public_address",
      skipRetry: !0
    });
    let {kind: O, status: T, message: M} = ci(w);
    if (T === 404) return {
      success: !0,
      settings: {},
      checksum: "",
      consentIdentity: E,
      ...A,
      responseKind: "none_configured",
      ...ljn(w)
    };
    let L = {
      ..._tn(w),
      ...ljn(w)
    };
    switch (O) {
     case "auth":
      {
        let P = {
          success: !1,
          error: "Not authorized for remote settings",
          errorKind: T === 401 ? "http_401" : "http_403",
          skipRetry: !0,
          ...L
        };
        if (s?.aborted) return v(P);
        if (T === 401 && C && !n && !y?.attempted) {
          let D = C, H = await VDt(y, async () => {
            if (R) {
              if (y) y.attempted = !0;
              let {getWIFTokenCache: U, invalidateWIFToken: I} = await import("./chunk-cyax6nsc.js");
              return await I(D), U().then(me => me?.getToken()).catch(() => {});
            }
            return await j_(D, r, void 0, {
              onForcedRefreshOutcome: U => {
                if (P.forcedRefreshOutcome = U, y) y.attempted = !0, y.lastOutcome = U;
              }
            }), Sn()?.accessToken;
          });
          if (H && H !== C) {
            v(P), i("tengu_remote_settings_401_force_refresh_retry", {});
            let U = await fe(e, !0, r, s, y);
            return {
              ...U,
              retriedAfter401: !0,
              forcedRefreshOutcome: U.forcedRefreshOutcome ?? P.forcedRefreshOutcome
            };
          }
        }
        if (T === 401 && R && n) IDs(!0);
        if (T === 401 && P.forcedRefreshOutcome === void 0 && y?.attempted) P.forcedRefreshOutcome = y.lastOutcome;
        return v(P);
      }

     case "timeout":
      return v({
        success: !1,
        error: "Remote settings request timeout",
        errorKind: "timeout",
        errno: tut(w)
      });

     case "network":
      return v({
        success: !1,
        error: "Cannot connect to server",
        errorKind: "network_error",
        errno: tut(w)
      });

     default:
      return v({
        success: !1,
        error: M,
        errorKind: T !== void 0 && T >= 500 ? "http_5xx" : T !== void 0 && T >= 400 ? "http_4xx" : "unknown_error",
        ...T !== void 0 && T >= 400 && {
          httpStatus: T
        },
        ...O === "http" && T === void 0 && {
          noResponse: !0,
          errno: tut(w)
        },
        ...L,
        ...XJe(T) && {
          skipRetry: !0
        }
      });
    }
  }
}

var de = Symbol("keep the stored statement");

async function De(e, n, r) {
  if (eOe()) return;
  let s = _(Smt() ? Gin(e) : e, null, 2), y = WPo(e);
  if (z() && n !== void 0 && !Ow()) {
    let S = await n.write(Fe.state("remote-settings"), s, {
      publishDiscipline: "inPlace",
      mode: 384,
      flush: !0
    });
    if (!S.ok) {
      t(`Remote settings: Failed to save - ${yt(S.error)}`);
      return;
    }
    if (t("Remote settings: Saved via storage backend"), j9e("cache", s), r !== de) await wmt($5(), r);
    if (await Pbr(), y !== void 0) {
      let C = await n.write(Fe.state(Wve), y, {
        publishDiscipline: "inPlace",
        mode: 384
      });
      if (t(C.ok ? "Remote settings: Saved helper consent via storage backend" : `Remote settings: Failed to save helper consent - ${yt(C.error)}`), 
      C.ok) j9e("helperConsent", y);
    }
    return;
  }
  try {
    let S = $5(), C = await tt(S, "w", 384);
    try {
      await C.writeFile(s, {
        encoding: "utf-8"
      }), await C.datasync();
    } finally {
      await C.close();
    }
    t(`Remote settings: Saved to ${S}`);
  } catch (S) {
    t(`Remote settings: Failed to save - ${S instanceof Error ? S.message : "unknown error"}`);
    return;
  }
  if (z() && !Ow()) j9e("cache", s);
  if (r !== de) await wmt($5(), r);
  if (await Pbr(), y === void 0) return;
  try {
    if (await st(UKn(), y, {
      mode: 384
    }), z() && !Ow()) j9e("helperConsent", y);
  } catch (S) {
    t(`Remote settings: Failed to save helper consent - ${l(S)}`);
  }
}

async function p2t(e) {
  _wn(), e5(), ar(), mer(), F().detachBarrier()?.();
  let n = z() && e !== void 0 ? await e.delete(Fe.state(Wve)).then(r => r.ok ? void 0 : yt(r.error)) : await rt(UKn(), {
    force: !0
  }).then(() => {}, l);
  if (n !== void 0) {
    t(`Remote settings: Failed to remove helper consent - ${n}`);
    return;
  }
  if (z() && !Ow()) j9e("helperConsent", null);
  if (Ow()) return;
  if (await hin($5()), await jpo(), z() && e !== void 0) {
    if ((await e.delete(Fe.state("remote-settings"))).ok) j9e("cache", null);
    return;
  }
  try {
    let r = $5();
    await ot(r);
  } catch (r) {
    if (z() && !W(r)) return;
  }
  if (z()) j9e("cache", null);
}

var ge;

async function he(e = {}) {
  try {
    return await Ct(e);
  } finally {
    let n = () => nX().settings;
    J0s(n), nIr(n);
  }
}

async function Ct(e) {
  if (!cC()) return F().prefetch.clear(), {
    settings: null,
    fetchSucceeded: !0,
    resolution: "ineligible"
  };
  let n = Ow();
  if (n || B9e()) return F().prefetch.clear(), t(n ? `Remote settings: Using override file ${n} (CLAUDE_CODE_REMOTE_SETTINGS_PATH), skipping API fetch` : "Remote settings: confined evaluation child \u2014 serving the harness-written policy snapshot, no fetch"), 
  {
    settings: f_(),
    fetchSucceeded: !0,
    resolution: "local"
  };
  QCs();
  let r = qin(), s = ng(), y = QPo(), S = ZPo(), C = r ? L5(r) : void 0, R = Wie(), E = F();
  if (!E.signedCacheShadowChecked) {
    if (E.signedCacheShadowChecked = !0, r) Pkr({
      kind: "managed-settings",
      cachePath: $5(),
      bodySha: Smt() ? L5(Gin(r)) : L5(r),
      readStoredAccount: Up,
      readOrgPin: Zxe,
      onJudged: v => {
        E.storedCopyShadow = v;
      }
    });
  }
  if (!e.background && E.prefetch.pending) {
    let v = await Pg(e.credentials);
    if (v !== "store") S9();
    if (brn(v)) await Q3e(B().host, e.credentials);
  }
  let A = e.background ? void 0 : E.prefetch.take(v => v.checksum === C && v.epoch === R && v.endpoint === le() && v.principal === Le());
  try {
    let v = await mbs(), w = Date.now(), h = await wt(C, {
      ...e,
      prefetched: A,
      oauthRefreshLatch: e.background ? void 0 : E.oauthRefreshLatch
    }), O = Date.now() - w;
    if (e.cycleFacts) e.cycleFacts.hadCache = r !== null, e.cycleFacts.fetchMs = O;
    let T = w + O, M = h.authType === "oauth", L = h.success ? void 0 : Ie(h), P = SGn(h.success ? {
      succeeded: !0,
      responseKind: h.responseKind ?? "body"
    } : {
      succeeded: !1,
      failure: h.errorKind === "no_auth_available" || h.errorKind === "api_key_not_sent" ? "no_credentials" : h.errorKind === "profile_credential_error" ? "credential_exchange" : h.errorKind === "timeout" ? "timeout" : h.errorKind === "network_error" || h.errorKind === "gateway_public_address" || h.noResponse ? "network" : h.errorKind === "gateway_cert_mismatch" || h.errorKind === "gateway_pin_refused" || h.errorKind === "gateway_pin_unreadable" ? "tls" : h.errorKind === "parse_error" || h.errorKind === "ruled_empty" ? "parse" : h.httpStatus !== void 0 || h.errorKind === "http_401" || h.errorKind === "http_403" ? "http" : "other",
      httpStatus: h.httpStatus ?? (h.errorKind === "http_401" ? 401 : h.errorKind === "http_403" ? 403 : void 0),
      serverErrorType: h.serverErrorType,
      serverErrorCode: h.serverErrorCode,
      serverAuthDenial: h.serverAuthDenial,
      credentialState: L,
      tokenRefreshOutcome: h.tokenRefreshOutcome,
      forcedRefreshOutcome: h.forcedRefreshOutcome,
      errno: h.errno,
      responseContentType: h.responseContentType,
      requestIdPresent: h.requestIdPresent,
      exchangeFinal: h.errorKind === "profile_credential_error" ? h.skipRetry === !0 : void 0
    });
    if (e.cycleFacts) e.cycleFacts.outcomeReason = P;
    let D = qK(), G = D ? y === "not_asked" ? "none" : y : r === null ? "none" : E.storedCopyShadow === void 0 ? "pending" : S1e(E.storedCopyShadow), H = !E.storedCopyReported;
    E.storedCopyReported = !0;
    let U = D ? S : w1e(E.storedCopyShadow);
    if (h.success && h.signature !== void 0 && U !== void 0 && !E.livePrincipalChecked) E.livePrincipalChecked = !0, 
    Ikr({
      kind: "managed-settings",
      jws: h.signature,
      trustedPrincipal: U,
      gate: D ? "enforced" : "shadow"
    });
    if (i("tengu_remote_settings_fetch", {
      duration_ms: O,
      ms_since_startup: T - kt,
      success: h.success,
      error_kind: pe(h.errorKind),
      http_status: h.httpStatus,
      attempts: h.attempts,
      had_cache: r !== null,
      cache_age_ms: r !== null ? v : void 0,
      stored_copy: H ? c(G) : void 0,
      stored_copy_gate: H ? c(D ? "enforced" : "shadow") : void 0,
      is_load: !e.background,
      awaited: e.startupAwaited === !0,
      auth_type: pe(h.authType),
      token_source: c($a().source),
      credential_origin: pe(h.credentialOrigin),
      api_key_prefix: h.authType === "api_key" ? c(frn()) : void 0,
      has_custom_base_url: din(),
      token_refresh_outcome: M ? pe(h.tokenRefreshOutcome) : void 0,
      forced_refresh_outcome: M ? pe(h.forcedRefreshOutcome) : void 0,
      retried_after_401: h.retriedAfter401 ?? !1,
      server_error_type: pe(h.serverErrorType),
      server_error_code: pe(h.serverErrorCode),
      server_auth_denial: pe(h.serverAuthDenial),
      injected_token_recovery: pe(!h.success && h.credentialOrigin === "injected_token" ? GDt() : void 0),
      credential_state: pe(L),
      error_errno: pe(h.errno),
      outcome_reason: c(P),
      response_kind: pe(h.success ? h.responseKind ?? "body" : void 0),
      request_id_present: h.requestIdPresent,
      response_content_type: pe(h.responseContentType),
      prefetched: A !== void 0,
      hedged: h.hedged === !0
    }), j(R)) return {
      settings: null,
      fetchSucceeded: !1,
      resolution: "reset"
    };
    if (!h.success && h.errorKind === "ruled_empty") {
      if (r) Wmt(r);
      if (r !== null && Object.keys(r).length > 0) f("remote_managed_settings_pull", "ruled_empty_kept_previous"), 
      t("Remote settings: ruled_empty_kept_previous - the previously accepted settings stay in force"); else m("remote_managed_settings_pull", "ruled_empty_nothing_kept"), 
      t("Remote settings: ruled_empty_nothing_kept - no previously accepted settings to keep; nothing applied");
      return {
        settings: r,
        fetchSucceeded: !1,
        failure: {
          errorKind: "ruled_empty",
          message: h.error ?? "ruled empty",
          rulings: h.rulings ?? []
        },
        resolution: "ruled_empty"
      };
    }
    if (!h.success) {
      m("remote_managed_settings_pull", h.errorKind ?? "remote_managed_settings_fetch_failed");
      let N = {
        errorKind: h.errorKind ?? "unknown_error",
        message: h.error ?? "Unknown error",
        ...h.httpStatus !== void 0 && {
          httpStatus: h.httpStatus
        },
        ...h.serverErrorType !== void 0 && {
          serverErrorType: h.serverErrorType
        },
        ...(h.errorKind === "http_401" || h.errorKind === "http_403") && {
          credentialState: Ie(h)
        },
        ...h.gatewayPinMismatch && {
          gatewayPinMismatch: h.gatewayPinMismatch
        }
      };
      if (r) return t(`Remote settings: Using stale cache after fetch failure (${Q(N)})`), 
      Wmt(r), {
        settings: r,
        fetchSucceeded: !1,
        failure: N,
        resolution: "failed"
      };
      return t(`Remote settings: Fetch failed (${Q(N)}) and no cached settings`), {
        settings: null,
        fetchSucceeded: !1,
        failure: N,
        resolution: "failed"
      };
    }
    if (h.settings === null && r && r === BKn()) {
      if (t("Remote settings: Cache still valid (304 Not Modified)"), Wmt(r, {
        verified: !0
      }), !eOe()) {
        await gin($5(), h.signature);
        let N = j(R);
        if (await yin($5(), N)) await jpo(); else await Pbr();
        if (N) return {
          settings: null,
          fetchSucceeded: !1,
          resolution: "reset"
        };
      }
      if (!s) {
        if (await re(), j(R)) return {
          settings: null,
          fetchSucceeded: !1,
          resolution: "reset"
        };
        if (r === BKn()) {
          if (await ne(h.consentIdentity, te(r), e.storageV5, e.credentials), j(R)) return {
            settings: null,
            fetchSucceeded: !1,
            resolution: "reset"
          };
        }
      }
      return g("remote_managed_settings_pull", {
        status: b("not_modified")
      }), {
        settings: r,
        fetchSucceeded: !0,
        resolution: "applied"
      };
    }
    let I = h.settings ?? r ?? {};
    if (Object.keys(I).length > 0) {
      let N = h.consentIdentity ? await tms(h.consentIdentity, e.storageV5) : null, ye = te(BKn()), Ye = N !== null ? {
        source: "org_record",
        dangerousSettingsHash: N,
        consentedPayload: ye
      } : {
        source: "consented_payload",
        settings: ye
      }, Se = te(I), q = await Ae(Ye, Se, e.showSecurityDialog);
      if (j(R)) return {
        settings: null,
        fetchSucceeded: !1,
        resolution: "reset"
      };
      if (!be(q)) {
        if (q === "superseded") return t("Remote settings: A newer fetch took over the pending consent review; leaving the decision to it"), 
        {
          settings: r,
          fetchSucceeded: !0,
          resolution: "consent_superseded"
        };
        if (q === "deferred_no_consent_surface") {
          let V = Ee();
          if (V) t("Remote settings: Consent prompt deferred to the next interactive session (this command cannot host it); keeping the consented baseline"), 
          f("remote_managed_settings_pull", "consent_deferred_no_surface"); else t("Remote settings: No consent surface in this interactive session; keeping the consented baseline"), 
          m("remote_managed_settings_pull", "remote_managed_settings_no_consent_surface");
          return {
            settings: r,
            fetchSucceeded: !1,
            resolution: V ? "deferred" : "no_consent_surface"
          };
        }
        return t("Remote settings: User rejected new settings, using cached settings"), 
        {
          settings: r,
          fetchSucceeded: !0,
          resolution: "rejected"
        };
      }
      if (Wmt(I, {
        verified: !0,
        consentDeferred: q === "deferred_non_interactive"
      }), !s) {
        if (await re(), j(R)) return {
          settings: null,
          fetchSucceeded: !1,
          resolution: "reset"
        };
      }
      switch (q) {
       case "approved":
       case "no_check_needed":
        if (tOr(I), await ne(h.consentIdentity, Se, e.storageV5, e.credentials), j(R)) return {
          settings: null,
          fetchSucceeded: !1,
          resolution: "reset"
        };
        let V = Smt() && h.settings !== null && h.signature !== void 0, _e = Smt() && h.settings === null;
        await De(V || _e ? I : h.salvagedSettings ?? (h.settings === null ? pt(I) : I), e.storageV5, V || h.salvagedSettings === void 0 && h.settings !== null ? h.signature : _e ? h.signature ?? de : void 0), 
        t("Remote settings: Applied new settings successfully"), g("remote_managed_settings_pull", {
          status: b("updated")
        });
        break;

       case "deferred_non_interactive":
        t("Remote settings: Applied for this non-interactive run; consent deferred \u2014 not persisting the disk cache as consented"), 
        g("remote_managed_settings_pull", {
          status: b("applied_consent_deferred")
        });
        break;

       case "rejected":
       case "deferred_no_consent_surface":
       case "superseded":
        break;
      }
      return {
        settings: I,
        fetchSucceeded: !0,
        resolution: "applied"
      };
    }
    if (Wmt(I, {
      verified: !0
    }), !s) {
      if (await re(), j(R)) return {
        settings: null,
        fetchSucceeded: !1,
        resolution: "reset"
      };
    }
    if (tOr(I), await ne(h.consentIdentity, I, e.storageV5, e.credentials), j(R)) return {
      settings: null,
      fetchSucceeded: !1,
      resolution: "reset"
    };
    return await De(h.settings ?? {}, e.storageV5, h.signature), t("Remote settings: Saved empty sentinel (404 response)"), 
    g("remote_managed_settings_pull", {
      status: b("no_content")
    }), {
      settings: I,
      fetchSucceeded: !0,
      resolution: "none"
    };
  } catch {
    if (j(R)) return {
      settings: null,
      fetchSucceeded: !1,
      resolution: "reset"
    };
    m("remote_managed_settings_pull", "remote_managed_settings_unexpected");
    let v = {
      errorKind: "unknown_error",
      message: "Unexpected error while applying remote settings"
    };
    if (r) return t("Remote settings: Using stale cache after error"), Wmt(r), {
      settings: r,
      fetchSucceeded: !1,
      failure: v,
      resolution: "failed"
    };
    return {
      settings: null,
      fetchSucceeded: !1,
      failure: v,
      resolution: "failed"
    };
  }
}

function Z(e) {
  if (!cC()) {
    let r = qfe();
    if (r) jKn({
      state: "ineligible",
      reason: r
    });
    return;
  }
  let n = Ge() !== void 0;
  if (e.fetchSucceeded) {
    if (jKn({
      state: "ok",
      hasSettings: e.settings !== null && Object.keys(e.settings).length > 0
    }), n) ar();
    return;
  }
  if (e.failure) {
    let r = e.settings !== null && Object.keys(e.settings).length > 0;
    if (jKn(r ? {
      state: "stale_cache",
      failure: e.failure,
      transportEnvWithheld: !ng()
    } : {
      state: "failed",
      failure: e.failure
    }), n || e.failure.rulings !== void 0) ar();
  }
}

function Ge() {
  let e = PC();
  return e?.state === "failed" || e?.state === "stale_cache" ? e.failure.rulings : void 0;
}

async function f2t(e, n, r) {
  dNt(), Ue(), rRs(Et);
  let s = F();
  if (cC() && !s.loadingCompletePromise) s.createBarrier();
  let S = s.fetchSettledResolve, C = Wie(), R = f_() !== null;
  if (R && s.loadingCompleteResolve) s.releaseLoadBarrier();
  let E = r?.startupAwaited === !0;
  if (R && !E) Z8("settings", {
    source: "cache",
    hadCache: R,
    awaited: E
  });
  let A = {}, v = "error", w = E ? Rkr("settings") : null;
  try {
    let h = await he({
      ...r,
      showSecurityDialog: e,
      storageV5: n,
      cycleFacts: A
    }), {settings: O, fetchSucceeded: T} = h;
    if (v = qe(h), Wie() === C) Z(h);
    if (Wie() === C && cC() && !Ow() && !B9e()) Ve(e, n, r?.credentials);
    if (O !== null) ee();
    return T;
  } finally {
    if (ze(S), Wie() === C) nOr();
    if (A.outcomeReason !== void 0) ge = A.outcomeReason;
    Z8("settings", {
      source: v,
      hadCache: R,
      awaited: E,
      fetchMs: A.fetchMs
    }), w?.("completed");
  }
}

function Et() {
  let e = qfe(), n = cC() ? ge : wGn(_rn(e));
  return {
    settings_outcome_reason: pe(n),
    settings_ineligible_reason: pe(e)
  };
}

function qe({resolution: e, settings: n}) {
  switch (e) {
   case "applied":
    return n !== null && Object.keys(n).length > 0 ? "fetch" : "none";

   case "none":
    return "none";

   case "local":
    return "cache";

   case "failed":
   case "ruled_empty":
   case "no_consent_surface":
    return "error";

   case "reset":
   case "consent_superseded":
    return "superseded";

   case "rejected":
    return "rejected";

   case "deferred":
    return "deferred";

   case "ineligible":
    return "ineligible";
  }
}

function ze(e) {
  let n = F();
  if (n.fetchSettledResolve && n.fetchSettledResolve === e) n.releaseBarrier();
}

async function JHe(e, n, r, s) {
  return (await hwn(e, n, r, s)).fetchSucceeded;
}

var Pt = 5e3;

async function JKr(e, n, r) {
  let s, y = new Promise(R => {
    s = Ce(() => R("consent_pending"));
  }), S = Rkr("settings", {
    supersede: !0
  }), C = hwn(e, n, r, {
    startupAwaited: !0,
    callerRecordsBarrier: !0
  }).then(({fetchSucceeded: R}) => R ? "refreshed" : "failed", R => (d(R), "failed"));
  try {
    let R = await We(Promise.race([ C, y ]), Pt);
    if (S(R === void 0 ? "timed_out" : "completed"), R === void 0) return f("remote_managed_settings_startup_await", "deadline_expired"), 
    "timed_out";
    return R;
  } finally {
    s?.(), S("completed");
  }
}

async function hwn(e, n, r, s) {
  let y = s?.startupAwaited === !0;
  _wn(), e5(), dNt();
  let S = Wie(), C = F(), R = C.detachBarrier();
  if (!cC()) return C.prefetch.clear(), R?.(), Z({
    settings: null,
    fetchSucceeded: !0,
    resolution: "ineligible"
  }), Z8("settings", {
    source: "ineligible",
    hadCache: !1,
    awaited: y
  }), ee(), nIr(() => nX().settings), {
    fetchSucceeded: !0
  };
  gwt();
  let E = C.fetchSettledResolve;
  if (R) if (C.fetchSettledPromise) C.fetchSettledPromise.then(R); else R();
  let A, v, w = {}, h = "error", O = y && !s?.callerRecordsBarrier ? Rkr("settings", {
    supersede: !0
  }) : null;
  try {
    v = await he({
      showSecurityDialog: e,
      storageV5: n,
      credentials: r,
      startupAwaited: y,
      cycleFacts: w
    }), h = qe(v), A = {
      fetchSucceeded: v.fetchSucceeded,
      ...v.failure && {
        failure: v.failure
      }
    };
  } finally {
    if (ze(E), Wie() === S) nOr();
    if (w.outcomeReason !== void 0) ge = w.outcomeReason;
    Z8("settings", {
      source: h,
      hadCache: w.hadCache === !0,
      awaited: y,
      fetchMs: w.fetchMs
    }), O?.("completed");
  }
  if (t("Remote settings: Refreshed after auth change"), Wie() !== S) return t("Remote settings: Refresh superseded by a login/logout reset; not notifying"), 
  A;
  if (Z(v), !Ow()) Ve(e, n, r);
  return ee(), A;
}

function ee() {
  try {
    qPo(), Pa.notifyChange("policySettings");
  } catch (e) {
    d(e);
  }
}

async function re() {
  try {
    let [{applyConfigEnvironmentVariables: e, applySafeConfigEnvironmentVariables: n}, {checkHasTrustDialogAccepted: r}, {captureAdmin3PSteeringSnapshot: s}] = await Promise.all([ import("./chunk-k8hrxgsx.js"), import("./chunk-2phrn1w8.js"), import("./chunk-t33ppyd8.js") ]);
    if (r()) e(); else {
      n();
      let [{clearProxyCache: y, configureGlobalAgents: S}, {clearCACertsCache: C, loadExtraCACerts: R}, {clearMTLSCache: E, loadMTLSClientMaterial: A}] = await Promise.all([ import("./chunk-adh1rnwr.js"), import("./chunk-s4p4yf1m.js"), import("./chunk-8mq681z1.js") ]);
      y(), C(), E(), await Promise.all([ R(), A() ]), S();
    }
    s();
  } catch (e) {
    d(e);
  }
}

function ywn(e) {
  let [n] = G9e(e?.slice(0, 1) ?? []);
  if (!n || !e) return "";
  let r = e.length - 1;
  return ` (${n.path}: ${n.message}${r > 0 ? `, and ${r} more` : ""})`;
}

function ce(e) {
  let {origin: n, pathname: r} = new URL(e);
  return `${n}${r.replace(/\/$/, "")}`;
}

function X(e) {
  return `Claude Desktop runs Claude Code under your organization's policy from the gateway at ${ce(e)}, but`;
}

function QKr(e) {
  let n = Lr(), r = n?.hostVerdict;
  if (!n || !r) return;
  if ("unresolvedReason" in r) return `${X(n.url)} it could not be checked. ${r.unresolvedReason} If this keeps happening, contact your administrator.`;
  if (r.verified) return;
  let s = r.reason ?? "it is not Anthropic-operated or inside your organization's network.";
  if (e) return `Your organization requires managed settings, but the gateway at ${ce(n.url)} is not an accepted source for them: ${s} Contact your administrator.`;
  if (r.codeTabRulesUnanswered !== void 0) return `${X(n.url)} Claude Code couldn't ask that gateway whether it has rules for this session (${r.codeTabRulesUnanswered}). Send your message again. This check runs because Claude Code on ${Te()} doesn't take settings from that gateway: ${s}`;
  if (r.hasCodeTabRules) return `${X(n.url)} Claude Code on ${Te()} doesn't take settings from that gateway: ${s}`;
  if (r.hasCodeTabRules === !1) {
    t(`[gateway] ${ce(n.url)} is not accepted as a source of managed settings. It says that it has no Code tab rules for this person, so no warning is shown`);
    return;
  }
  Je(`the gateway at ${n.url} is not an accepted source for them: ${s.replace(/\.\s*$/, "")}`);
  return;
}

function yer(e) {
  let n = Lr();
  if (!n || !lYn(n)) return;
  let r = X(n.url), s = PC(), y = s?.state === "failed" || s?.state === "stale_cache" ? s.failure : void 0;
  if (y?.errorKind === "gateway_public_address") return `${r} this machine is no longer reaching it from inside your organization's network (it may have left that network or VPN, or the gateway's name now resolves elsewhere), so the policy was not fetched. Reconnect to that network and start again, or contact your administrator.`;
  if (y?.errorKind === "ruled_empty") return `${r} none of the settings it served could be applied as written${ywn(y.rulings)}. Ask your administrator to fix them.`;
  if (!e || y) {
    let S = y ? `: ${Ckt(y.errorKind, y.httpStatus)}` : "";
    return `${r} the policy could not be loaded from it${S}. Check your network connection, or contact your administrator.`;
  }
  _er();
  return;
}

function _er() {
  let e = Lr();
  if (!e || !lYn(e)) return;
  let n = PC();
  if (n?.state === "ok" && !n.hasSettings) Je(`the gateway at ${e.url} has no Claude Code policy for this Desktop session (self-hosted gateway admins: set \`serve_to_desktop: true\` on this user's policy, or change \`cli\` to \`code\` in every policy)`);
}

function Je(e) {
  let n = `Starting without your organization's managed settings: ${e}.`;
  t(`Remote settings: ${n}`, {
    level: "warn"
  }), Fj(`${n}\n`);
}

var se = "Your organization requires remote managed settings to load, but they could not be loaded.";

async function m2t(e, n) {
  try {
    if (await e()) {
      let y = n();
      return y === void 0 ? {
        valid: !0
      } : {
        valid: !1,
        message: `${se} ${y}`
      };
    }
  } catch (y) {
    d(y);
  }
  let r = Ge();
  if (r !== void 0) return {
    valid: !1,
    message: `${se} None of the settings the server returned could be applied as written${ywn(r)}; ask your administrator to fix them.`
  };
  let s = Rw() ? "You can check your network connection or contact your admin." : "Run `claude auth login` to re-authenticate, check your network connection, or contact your administrator.";
  return {
    valid: !1,
    message: `${se} ${s}`
  };
}

async function Tt(e, n, r) {
  if (!cC()) return;
  let s = f_(), y = s ? _(s) : null, S = ng(), C = Wie();
  try {
    let R = await he({
      background: !0,
      showSecurityDialog: e,
      storageV5: n,
      credentials: r
    });
    if (Wie() !== C) {
      t("Remote settings: Background poll superseded by a login/logout reset; not notifying");
      return;
    }
    if (R.fetchSucceeded || R.failure?.errorKind === "ruled_empty") Z(R);
    let E = f_(), v = (E ? _(E) : null) !== y, w = !S && ng();
    if (v || w) t(v ? "Remote settings: Changed during background poll" : "Remote settings: Confirmed by a background poll"), 
    ee();
  } catch {}
}

function Ve(e, n, r) {
  let s = F();
  if (s.poller !== null) return;
  if (!cC()) return;
  let S = sjn(() => void Tt(e, n, r), ct, {
    unref: !0
  });
  s.startPoller(S), bt(S);
}

function _wn() {
  F().stopPoller();
}

export { u2t, gwn, zKr, GKr, mwt, VKr, z6o, G6o, KKr, V6o, qKr, K6o, YKr, gwt, XKr, mer, ger, yB, fTe, hwt, mTe, her, p2t, f2t, JHe, JKr, hwn, ywn, QKr, yer, _er, m2t, _wn };
