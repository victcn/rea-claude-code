// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, B, ps, yq, Qee, Kp, ZS } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { c, pe } from "./chunk-hwdwjvh8.js";

import { j, l, E, W, ci, XJe } from "./chunk-b0z4bv3v.js";

import { J, Ht } from "./chunk-nvtwm272.js";

import { bt, _, se, t } from "./chunk-kawq2919.js";

import { Ap, un } from "./chunk-y752zmas.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { i, Vs } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Wxo, qK, ELs, fin, L5, zxo, min, FLt, Gxo, wmt, gin, hin, yin, PLs, ILs, OLs, S1e, w1e, Vxo, Kxo, E9e } from "./chunk-q6wab2jw.js";

import { Oe, vf, din } from "./chunk-cjt10y7b.js";

import { At } from "./chunk-vps0k559.js";

import { CG, Tf, xy } from "./chunk-w4hwgefc.js";

import { _Ps, mDt, bPs, KAr, nc, Pw, $a, frn, yk, km, Sn, S9, QT, Pg, _rn, brn, Q3e, GDt, al, Z3e, uie, vt, Up, sU, UPe, BPe, sS, SGn, wGn, k } from "./chunk-xywp7esx.js";

import { vU } from "./chunk-x35dw27e.js";

import { gT } from "./chunk-3kb22va7.js";

import { l0s, d0s } from "./chunk-46phtgr7.js";

import { dve } from "./chunk-f1zpf9me.js";

import { gpe } from "./chunk-2mq6q9dt.js";

import { sut, Lkr, gUe, _Rs, bRs, SRs, _pe, bpe, Ctn, $kr, hjn, r3e, vSo, vRs, Fkr, Ukr, ERs, jkr, Wkr, zkr, Rtn, yjn, Gkr, sHt, kSo, iHt, TSo, Vkr, Pse, ASo, Jxe, _jn, qkr, H0, xtn, o3e, bjn, Sjn, fk, AH, RSo, xSo, Ykr, by, e9, lHt, Xkr, s5, PSo, Jkr, ISo, Qkr, dHt, OSo, MSo, wjn, HSo, vjn, eTr, i3e, LSo, NSo, tTr, cHt, Ejn, Itn, a3e, nTr, jSo, VSo, jS } from "./chunk-b47tzzqx.js";

import { _So } from "./chunk-fmrcybq2.js";

import { Rse } from "./chunk-v9pbhfvh.js";

import { Zxe } from "./chunk-86k06k4p.js";

import { RE } from "./chunk-gkzapwcq.js";

import { Qo } from "./chunk-eha3vdmz.js";

import { N, D } from "./chunk-hmqkrrtz.js";

import { uDo, yt } from "./chunk-9zhz923g.js";

var Gt = new K(() => Me());

function ot() {
  return Gt.of(B().host);
}

function Mkr() {
  ot().emit();
}

function st(e) {
  return ot().subscribe(e);
}

import { statSync as ni } from "fs";

import { unlink as oi, utimes as si, writeFile as ai } from "fs/promises";

function Ae(e, r, n = {}) {
  let o = setInterval(e, r);
  if (n.unref) o.unref?.();
  return {
    [Symbol.dispose]: () => clearInterval(o)
  };
}

var Vt = 3;

function Ut() {
  let e = k("tengu_zippy_gosling", 0);
  return typeof e === "number" && Number.isFinite(e) ? e : 0;
}

function oSo(e) {
  let r = Math.max(Kp(), Qee() ?? 0);
  return !gpe() && Date.now() - r > e;
}

function sjn(e, r, n = {}) {
  let o = 0, s = null, p = null, h = Ae(y, r, n);
  function v() {
    if (s?.(), s = null, p !== null) clearTimeout(p), p = null;
  }
  function S() {
    o = 0, v(), e();
  }
  function y() {
    let w = Ut();
    if (!(w > 0 && oSo(w)) || o >= Vt) {
      S();
      return;
    }
    o++, s ??= yq(() => {
      p ??= setTimeout(() => {
        h[Symbol.dispose](), h = Ae(y, r, n), S();
      }, 0);
    });
  }
  return {
    [Symbol.dispose]: () => {
      h[Symbol.dispose](), v();
    }
  };
}

function _tn(e) {
  let r = e?.response?.data?.error;
  if (!r || typeof r !== "object") return {};
  let n = typeof r.type === "string" ? r.type : void 0, o = r.details?.error_code, s = typeof o === "string" ? o : typeof r.error_code === "string" ? r.error_code : typeof r.code === "string" ? r.code : void 0, p = typeof r.message === "string" ? r.message : void 0, h = s === void 0 && p !== void 0 && (n === "authentication_error" || n === "permission_error") ? Wt(p) : void 0;
  return {
    serverErrorType: n === void 0 ? void 0 : bRs.includes(n) ? n : "other",
    serverErrorCode: s === void 0 ? void 0 : SRs.includes(s) ? s : "other",
    ...h !== void 0 && {
      serverAuthDenial: h
    }
  };
}

function Wt(e) {
  if (e.startsWith("Organization access has been revoked")) return "org_access_revoked";
  if (e.startsWith("Workspace access has been revoked")) return "workspace_revoked";
  if (/^OAuth (?:access )?token has been revoked\b/.test(e)) return "token_revoked";
  if (/^OAuth (?:access )?token has expired\b/.test(e)) return "token_expired";
  if (e.startsWith("OAuth access token is invalid") || e.startsWith("Invalid bearer token")) return "token_invalid";
  if (e.startsWith("OAuth token application has been deactivated")) return "application_deactivated";
  if (e.startsWith("Credential is invalid")) return "credential_invalid";
  return "other";
}

class ct {
  settings=void 0;
  policy=void 0;
  settingsBarrier=void 0;
  policyBarrier=void 0;
  isDefaultCommand=void 0;
  openStartupBlocks=0;
  policyGate=void 0;
  settingsReader=void 0;
  orgGateShadow=void 0;
  logged=!1;
  unregisterExitFlush=void 0;
}

var Nt = new K(() => new ct);

function Ie(e = performance.now()) {
  return ZS() ? void 0 : Math.round(e);
}

function at(e, r) {
  return e === void 0 || r === void 0 ? void 0 : Math.max(e, r);
}

function q(e) {
  try {
    let r = ps(Nt);
    if (r.logged) return;
    r.unregisterExitFlush ??= bt(() => q(n => Be(n, "exit"))), e(r);
  } catch (r) {
    d(j(r));
  }
}

function nRs(e) {
  q(r => {
    r.isDefaultCommand ??= e;
  });
}

function De(e) {
  q(r => {
    r.policyGate ??= e;
  });
}

function rRs(e) {
  q(r => {
    r.settingsReader ??= e;
  });
}

function oRs(e) {
  q(r => {
    r.orgGateShadow ??= e;
  });
}

var Le = new Set([ "ineligible", "superseded" ]);

function Z8(e, r) {
  q(n => {
    let o = n[e];
    if (o !== void 0 && !Le.has(o.source)) return;
    n[e] = {
      ...r,
      settledMs: Ie()
    }, xe(n);
  });
}

function Q6e(e, r, {since: n, supersede: o = !1} = {}) {
  q(s => {
    ut(s, e, r, n, o), xe(s);
  });
}

function Rkr(e, {supersede: r = !1} = {}) {
  let n = performance.now(), o = !1;
  return q(s => {
    s.openStartupBlocks++, o = !0;
  }), s => q(p => {
    if (!o) return;
    o = !1, p.openStartupBlocks--, ut(p, e, s, n, r), xe(p);
  });
}

function ut(e, r, n, o, s) {
  let p = r === "settings" ? "settingsBarrier" : "policyBarrier";
  if (e[p] !== void 0 && !s) return;
  let h = performance.now();
  e[p] = {
    result: typeof n === "function" ? n() : n,
    waitMs: o === void 0 ? 0 : Math.round(h - o),
    crossedMs: Ie(h)
  };
}

function btn() {
  let e = Promise.resolve();
  return q(r => {
    let n = He(r.policyGate);
    e = Vs(pt, ft(r, "exit", n)).catch(o => {
      d(j(o));
    }), ht(r, n);
  }), e;
}

function sRs() {
  q(e => Be(e, "first_prompt"));
}

function xe(e) {
  if (e.settings && e.policy && e.settingsBarrier && e.policyBarrier && !Le.has(e.settings.source) && !Le.has(e.policy.source) && e.openStartupBlocks === 0) Be(e, "both_resolved");
}

var pt = "tengu_managed_config_ready", Kt = "tengu_org_config_gate_shadow";

function Be(e, r) {
  let n = He(e.policyGate);
  i(pt, ft(e, r, n)), ht(e, n);
}

function ht(e, r) {
  if (e.orgGateShadow === void 0) return;
  try {
    i(Kt, e.orgGateShadow({
      settings: e.settings,
      policy: e.policy,
      policyGateFields: r
    }));
  } catch (n) {
    d(j(n));
  }
}

function ft(e, r, n) {
  e.logged = !0, e.unregisterExitFlush?.();
  let {settings: o, policy: s, settingsBarrier: p, policyBarrier: h} = e;
  return {
    trigger: c(r),
    emitted_ms: Ie(),
    is_default_command: e.isDefaultCommand,
    settled_ms: at(o?.settledMs, s?.settledMs),
    barrier_crossed_ms: at(p?.crossedMs, h?.crossedMs),
    ...dt("settings", o),
    ...lt("settings", p),
    ...He(e.settingsReader),
    ...dt("policy", s),
    ...lt("policy", h),
    ...n
  };
}

function He(e) {
  if (e === void 0) return {};
  try {
    return e();
  } catch (r) {
    return d(j(r)), {};
  }
}

function dt(e, r) {
  return {
    [`${e}_source`]: r ? c(r.source) : c("pending"),
    [`${e}_had_cache`]: r?.hadCache,
    [`${e}_awaited`]: r?.awaited,
    [`${e}_fetch_ms`]: r?.fetchMs,
    [`${e}_settled_ms`]: r?.settledMs
  };
}

function lt(e, r) {
  return {
    [`${e}_barrier`]: r ? c(r.result) : c("not_reached"),
    [`${e}_barrier_wait_ms`]: r?.waitMs
  };
}

function Stn(e) {
  let r = new AbortController;
  return {
    attempt: e(r.signal),
    abort: () => r.abort()
  };
}

function xkr({first: e, send: r, isAnswer: n, delayMs: o = 3e3, stillWanted: s = () => !0, retryFollows: p = !0}) {
  return new Promise((h, v) => {
    let S = !1, y, w = 1, T, P, C = R => {
      if (S = !0, clearTimeout(b), e.abort(), y?.abort(), R.ok) h({
        result: R.value,
        hedged: y !== void 0
      }); else v(R.error);
    }, L = R => {
      R.then(F => M({
        ok: !0,
        value: F
      }), F => M({
        ok: !1,
        error: F
      }));
    }, M = R => {
      if (S) return;
      w--;
      let F = w > 0;
      if (R.ok && n(R.value, F)) {
        C(P && !n(R.value, !0) ? P : R);
        return;
      }
      if (F) {
        if (R.ok && n(R.value, !1)) T ??= {
          value: R.value
        }; else if (R.ok && p) P ??= R;
        return;
      }
      C(T && !(R.ok && p) ? {
        ok: !0,
        value: T.value
      } : R);
    }, b = setTimeout(() => {
      if (S || !s()) return;
      w++, y = Stn(r), L(y.attempt);
    }, o);
    L(e.attempt);
  });
}

class ijn {
  entry=null;
  set(e, r, n = () => !0) {
    this.clear();
    let o = Stn(r), s = {
      key: e,
      inFlight: o,
      sentAtMs: Date.now(),
      failed: !1
    };
    o.attempt.then(p => {
      s.failed = !n(p);
    }, () => {
      s.failed = !0;
    }), this.entry = s;
  }
  get pending() {
    return this.entry !== null;
  }
  take(e) {
    let r = this.entry;
    if (this.entry = null, r === null) return;
    let n = Math.abs(Date.now() - r.sentAtMs) <= 6e4;
    if (!r.failed && n && e(r.key)) return r.inFlight;
    r.inFlight.abort();
    return;
  }
  clear() {
    this.entry?.inFlight.abort(), this.entry = null;
  }
}

async function mt({kind: e, cachePath: r, bodySha: n, orgUuid: o, accountUuid: s, workspaceUuid: p, readOrgPin: h, onJudged: v}) {
  try {
    let S = {
      typ: e,
      aud: o,
      sub: s,
      ws: p
    }, [y, w] = await Promise.all([ PLs(r), ILs(r, S) ]), T = Date.now(), P = performance.now(), C = min({
      jws: y?.jws,
      kind: e,
      orgUuid: o,
      accountUuid: s,
      workspaceUuid: p,
      bodySha: n,
      highWaterIat: w,
      nowMs: T,
      roots: E9e()
    }), L = Math.round((performance.now() - P) * 1e3), M = $t({
      orgUuid: o,
      readOrgPin: h,
      verification: C
    });
    try {
      v(M === "trusted" ? {
        trusted: !0,
        principal: {
          orgUuid: o,
          accountUuid: s,
          workspaceUuid: p
        }
      } : {
        trusted: !1,
        reason: M
      });
    } catch (b) {
      t(`signed-cache: telling the loader failed: ${l(b)}`, {
        level: "error"
      });
    }
    if (C.result === "valid") await OLs(r, S, Math.min(C.issuedAt, Math.floor(T / 1e3)));
    i("tengu_signed_cache_shadow", {
      cache: c(e),
      result: c(C.result),
      age_s: C.ageSeconds,
      cert_hours_left: C.certHoursLeft,
      verify_micros: L,
      has_org_uuid: o !== void 0,
      has_account_uuid: s !== void 0,
      has_workspace_uuid: p !== void 0,
      ws_unanchored: C.wsUnanchored === !0,
      absence: C.absence === !0,
      states_lifetime: C.statesLifetime === !0,
      stored_copy: c(M)
    });
  } catch (S) {
    t(`Signed cache: shadow check failed (${e}) - ${l(S)}`);
  }
}

function $t({orgUuid: e, readOrgPin: r, verification: n}) {
  try {
    return Kxo(e, r()) ?? Vxo(n) ?? "trusted";
  } catch (o) {
    return t(`signed-cache: the organization pin could not be read: ${l(o)}`, {
      level: "error"
    }), "org_pin_unknown";
  }
}

function Pkr({kind: e, cachePath: r, bodySha: n, readStoredAccount: o, readOrgPin: s, onJudged: p}) {
  try {
    let h = o();
    mt({
      kind: e,
      cachePath: r,
      bodySha: n,
      orgUuid: h?.organizationUuid || void 0,
      accountUuid: h?.accountUuid || void 0,
      workspaceUuid: h?.workspaceUuid || void 0,
      readOrgPin: s,
      onJudged: p
    }).catch(() => {});
  } catch {}
}

function Ikr({kind: e, jws: r, trustedPrincipal: n, gate: o}) {
  try {
    if (r === void 0) return;
    let {result: s} = min({
      jws: r,
      kind: e,
      orgUuid: n.orgUuid,
      accountUuid: n.accountUuid,
      workspaceUuid: n.workspaceUuid,
      bodySha: zxo,
      highWaterIat: void 0,
      nowMs: Date.now(),
      roots: E9e()
    });
    if (s !== "aud_mismatch" && s !== "sub_mismatch") return;
    i("tengu_signed_cache_principal_change", {
      cache: c(e),
      differs: c(s === "aud_mismatch" ? "aud" : "sub"),
      stored_copy_gate: c(o)
    });
  } catch (s) {
    t(`signed-cache: live principal check failed: ${l(s)}`);
  }
}

var jt = [ [ "text/html", "html" ], [ "application/json", "json" ], [ "text/json", "json" ], [ "text/", "text" ] ];

function Ge(e) {
  let r = e.toLowerCase();
  return jt.find(([n]) => r.includes(n))?.[1] ?? "other";
}

function Ve(e) {
  if (!e || typeof e !== "object") return !1;
  return Rse(e["request-id"]);
}

function ajn(e) {
  if (!e || typeof e !== "object") return {};
  let r = e;
  return {
    requestIdPresent: Ve(r),
    responseContentType: Ge(String(r["content-type"] ?? ""))
  };
}

function ljn(e) {
  let r = e?.response;
  if (!r || typeof r !== "object") return {};
  return ajn(r.headers);
}

var qt = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache"
};

function gt(e) {
  return `${e}${dve}`;
}

async function Ue(e) {
  let r = await At.get(e.endpoint, {
    headers: {
      "User-Agent": Qo(),
      ...qt,
      ...e.ifNoneMatch !== void 0 && {
        "If-None-Match": `"${e.ifNoneMatch}"`
      },
      ...e.authHeaders
    },
    timeout: e.timeoutMs,
    validateStatus: e.acceptAny2xx ? h => h >= 200 && h < 300 || h === 304 : h => h === 200 || h === 304,
    ...e.socketPath !== void 0 && {
      socketPath: e.socketPath
    },
    ...e.signal !== void 0 && {
      signal: e.signal
    }
  }), n = r.headers ?? {}, o = FLt(n), s = n[mDt], p = KAr(typeof s === "string" ? s : void 0);
  if (r.status === 304) return {
    kind: "not_modified",
    signature: o,
    tunnelCredentialEpoch: p
  };
  return {
    kind: "ok",
    data: r.data,
    signature: o,
    contentType: String(n["content-type"] ?? "").toLowerCase(),
    requestIdPresent: Ve(n),
    tunnelCredentialEpoch: p
  };
}

function _t(e) {
  if (!At.isAxiosError(e)) return;
  let r = e.response?.headers?.[mDt];
  return KAr(typeof r === "string" ? r : void 0);
}

var Yt = new Set([ "oauth_not_allowed_for_organization", "organization_disabled", "organization_on_hold", "claude_code_key_creator_not_member", "ip_not_in_allowed_range" ]), zt = new Set([ "org_access_revoked", "workspace_revoked", "application_deactivated" ]), Jt = new Set([ "token_expired", "token_revoked", "token_invalid", "credential_invalid" ]), Xt = new Set([ "restricted_regime_endpoint", "oauth_scope_insufficient" ]), Qt = new Set([ "known_dead_refresh_token", "no_refresh_token", "account_on_hold", "not_refreshable" ]), Ct = new Set([ "lock_timeout", "lock_busy", "lock_compromised", "lock_error", "refresh_failed" ]), Zt = new Set([ "refreshed", "not_needed" ]);

function Okr(e) {
  let {errorCode: r, httpStatus: n, serverErrorType: o, serverErrorCode: s, serverAuthDenial: p, authUnavailableReason: h, authType: v, credentialOrigin: S} = e, y = v === void 0 || v === "oauth", w = y ? e.tokenRefreshOutcome : void 0, T = y ? e.forcedRefreshOutcome ?? e.tokenRefreshOutcome : void 0;
  if (r === void 0) return "unknown";
  if (s !== void 0 && Yt.has(s) || p !== void 0 && zt.has(p)) return "dead";
  if (s !== void 0 && Xt.has(s)) return "live";
  if (r === "network_error" || r === "timeout" || r === "parse_failed" || r === "spurious_304" || r === "stale_tunnel_credential" || r === "request_failed" && n === void 0 && e.noResponse === !0) return "live";
  if (n === void 0) {
    if (h === "no_oauth_token") return w !== void 0 && Ct.has(w) ? "unknown" : "dead";
    return "unknown";
  }
  if (n >= 500 || n === 429 || o === "rate_limit_error") return "live";
  if (n === 404 || n === 304) return "live";
  if (n === 401) {
    if (S === "proxy") return "unknown";
    if (v === "api_key") return S === "helper_key" ? "unknown" : "dead";
    let P = o === "authentication_error" || p !== void 0 && Jt.has(p);
    if (S === "injected_token" && P) switch (e.injectedTokenRecovery) {
     case "none":
      return "dead";

     case "sdk_host_refresh":
     case "runner_rotation":
      return "live";

     case void 0:
      break;
    }
    if (T === void 0) return "unknown";
    if (Qt.has(T)) return "dead";
    if (S === "injected_token") return "unknown";
    if (Ct.has(T) || Zt.has(T)) return "live";
    return "unknown";
  }
  return "unknown";
}

var ei = new Set(_Rs);

function ti(e) {
  return ei.has(e);
}

var ii = new Set([ "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "SELF_SIGNED_CERT_IN_CHAIN", "DEPTH_ZERO_SELF_SIGNED_CERT", "CERT_HAS_EXPIRED", "CERT_NOT_YET_VALID", "CERT_UNTRUSTED", "CERT_REJECTED", "CERT_SIGNATURE_FAILURE", "ERR_TLS_CERT_ALTNAME_INVALID", "HOSTNAME_MISMATCH" ]), ri = new Set([ "ECONNABORTED", "ERR_CANCELED" ]);

function St(e) {
  if (e === void 0) return;
  if (ti(e)) return e;
  if (ii.has(e)) return "CERT_ERROR";
  if (ri.has(e)) return "ABORTED";
  return;
}

function tut(e) {
  let r = e !== null && typeof e === "object" && "cause" in e ? e.cause : void 0;
  return St(E(e)) ?? St(E(r)) ?? "OTHER";
}

var qe = () => a.CLAUDE_CODE_MANAGED_CONFIG_PREFETCH === !0;

function sSo(e) {
  qe = e;
}

var Ye = 1e4, R6s = Ye + 2e3, Lt = 5, di = new Set([ ...Z3e ].filter(e => e !== "lock_error")), li = 36e5, Et = [ 15e3, 15e3, 3e4, 6e4, 18e4, 6e5 ], Pt = .2;

function Ke() {
  return k("tengu_shimmying_stardust", !1);
}

var iRs = 6e4;

function ui(e) {
  return e === "load" ? "other" : e;
}

function Rt(e) {
  return e === "accelerated_retry" || e === "api_success_trigger";
}

var pi = 3e4, rHt = 5e3, iGs = 864e5;

function kt() {
  if (qkr()) return;
  let e = NSo();
  if (e !== null) return Math.max(0, Date.now() - e);
  try {
    return Math.max(0, Date.now() - ni(fk()).mtimeMs);
  } catch {
    return;
  }
}

var We = Date.now();

function wt(e) {
  let r = H0();
  if (!r) return e;
  TSo(e.compliance_taints);
  let n = D([ ...r.compliance_taints, ...e.compliance_taints.filter(o => !l0s(o)) ]).slice(0, sut);
  if (n.length === r.compliance_taints.length) return r;
  return {
    ...r,
    compliance_taints: n
  };
}

function ze() {
  return gt(AH() ? "http://localhost" : un().BASE_API_URL);
}

function he() {
  if (AH()) return "local machine (via claude ssh tunnel)";
  try {
    return new URL(un().BASE_API_URL).host;
  } catch {
    return "unknown host";
  }
}

function ie(e) {
  return L5(a3e(e));
}

function Yxe() {
  return by() && lHt() === null;
}

function hi() {
  if (AH()) return {
    authType: a.CLAUDE_CODE_OAUTH_TOKEN ? "oauth" : "api_key",
    apiKeyFromHelper: !1
  };
  let e = null, r = "none";
  try {
    let s = yk({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    e = s.key, r = s.source;
  } catch {}
  let n = r === "apiKeyHelper", o = Boolean(e) || n;
  if (!o && nc()) return {
    authType: "wif",
    apiKeyFromHelper: !1
  };
  if (vt() && Sn()?.accessToken) return {
    authType: "oauth",
    apiKeyFromHelper: !1
  };
  return o ? {
    authType: "api_key",
    apiKeyFromHelper: n
  } : {
    authType: "oauth",
    apiKeyFromHelper: !1
  };
}

function fi(e, r) {
  if (AH()) return "proxy";
  switch (e.authType) {
   case "api_key":
    return e.apiKeyFromHelper ? "helper_key" : "static_key";

   case "oauth":
    return r.sentStoredLogin === void 0 ? void 0 : r.sentStoredLogin ? "stored_login" : "injected_token";

   case "wif":
    return;
  }
}

function Tt() {
  if (AH()) return a.CLAUDE_CODE_OAUTH_TOKEN ? "CLAUDE_CODE_OAUTH_TOKEN" : "none";
  return $a().source;
}

function mi() {
  if (AH()) return {
    proxy_in_use: !1,
    proxy_is_loopback: !1
  };
  let e, r = !1;
  try {
    e = Tf(), r = e !== void 0 && xy(ze());
  } catch {
    return {
      proxy_in_use: !1,
      proxy_is_loopback: !1
    };
  }
  if (e === void 0 || r) return {
    proxy_in_use: !1,
    proxy_is_loopback: !1
  };
  let n = CG(e);
  return {
    proxy_in_use: !0,
    proxy_is_loopback: n !== void 0 && RE(n.hostname)
  };
}

async function yi(e, r, n, o, s, p, h = Lt, {hedge: v = !1, prefetched: S} = {}) {
  let y = null, w = (P, C = !1) => Ot(e, r, n, p, P, C), T = !1;
  for (let P = 1; P <= h + 1; P++) {
    let C = S ?? Stn(w);
    if (S = void 0, v && P === 1) {
      let M = await xkr({
        first: C,
        send: b => w(b, !0),
        isAnswer: (b, R) => b.success || b.skipRetry === !0 && !(R && b.errorCode === "auth_failed" && b.httpStatus === 401),
        stillWanted: qe,
        retryFollows: h > 0
      });
      y = M.result, T ||= M.hedged;
    } else y = await C.attempt;
    if (y.attempts = P, T) y.hedged = !0;
    if (y.success || y.skipRetry || P > h) return y;
    s(y);
    let L = vU(P);
    if (t(`Policy limits: Retry ${P}/${h} after ${L}ms`), await J(L, o), o?.aborted) return y;
  }
  return y;
}

async function Ot(e, r, n, o, s, p = !1) {
  let h, v, S = !1, y = 0, w = UPe(o.recoveries), T = AH(), P = null, C = null, L = !1, M = null;
  try {
    let b = ze(), R = {}, F = async () => {
      await Jkr(n, r);
      let A = je(), G = await sU(fin() ? {} : {
        envBearerFallbackFor: b
      }), re = Pw();
      if (M = re !== void 0 && G.headers.Authorization === `Bearer ${re}` ? bpe(re) : null, 
      G.error) return L = !0, P = null, C = null, G;
      PSo();
      let X = s5(), ae = X === null ? null : ee(X);
      return L = A !== ae, P = L ? null : ae, C = P !== null && fe(X) ? we(X) : null, 
      G;
    };
    if (!T) {
      h = await uie({
        credentials: r
      });
      let A = await F();
      if (A.error) return {
        success: !1,
        error: "Authentication required for policy limits",
        errorCode: "auth_failed",
        authUnavailableReason: A.reasonCode,
        tokenRefreshOutcome: h,
        skipRetry: !0
      };
      R = A.headers;
      let G = Sn();
      S = Boolean(G?.accessToken && G.refreshToken && R.Authorization === `Bearer ${G.accessToken}`);
    }
    let I = async () => {
      if (y++, y > 1) w = UPe(o.recoveries);
      let A = y === 1 || T ? R : (await F()).headers;
      return Ue({
        endpoint: b,
        authHeaders: A,
        ifNoneMatch: e || void 0,
        timeoutMs: Ye,
        socketPath: T,
        signal: s
      });
    }, x = T ? await I() : await sS(I, {
      credentials: r,
      gateToSessionOAuthCredential: !0,
      oauthRefreshLatch: o,
      signal: s,
      onForcedRefreshOutcome: A => {
        v = {
          outcome: A
        }, o.lastOutcome = A;
      }
    });
    if (x.kind === "not_modified") {
      if (!e) return t("Policy limits: 304 to an unconditional request"), {
        success: !1,
        error: "Unexpected 304 Not Modified",
        errorCode: "request_failed",
        httpStatus: 304,
        skipRetry: !0,
        principalKeyAtWire: P,
        askedKeyAtWire: C,
        principalMovedAtWire: L,
        retriedAfter401: y > 1
      };
      if (y === 1 && !p) BPe(o, w);
      return t("Policy limits: Using cached restrictions (304)"), {
        success: !0,
        response: null,
        etag: e,
        signature: x.signature,
        principalKeyAtWire: P,
        askedKeyAtWire: C,
        principalMovedAtWire: L,
        retriedAfter401: y > 1,
        ...M !== null && y === 1 && {
          sentEnvBearerDigest: M
        },
        ...x.tunnelCredentialEpoch !== void 0 && {
          tunnelCredentialEpoch: x.tunnelCredentialEpoch
        }
      };
    }
    let Y = Itn(x.data);
    if (!Y.success) {
      let A = gi(Y.error.issues[0]?.path[0]), G = Ge(x.contentType);
      return t(`Policy limits: Invalid response format - field=${A} ct=${G} - ${Y.error.message}`), 
      {
        success: !1,
        error: "Invalid policy limits format",
        errorCode: "parse_failed",
        parseErrorField: A,
        parseErrorContentType: G,
        responseContentType: G,
        requestIdPresent: x.requestIdPresent,
        skipRetry: Ke(),
        principalKeyAtWire: P,
        askedKeyAtWire: C,
        principalMovedAtWire: L,
        retriedAfter401: y > 1
      };
    }
    BPe(o, w);
    let te = Lkr(x.data);
    if (te > 0) return t(`Policy limits: Fetched with ${te} malformed compliance_taints element(s) dropped`), 
    {
      success: !0,
      response: Y.data,
      parseErrorField: "compliance_taints",
      lossyComplianceTaints: !0,
      signature: x.signature,
      principalKeyAtWire: P,
      askedKeyAtWire: C,
      principalMovedAtWire: L,
      retriedAfter401: y > 1,
      ...M !== null && {
        sentEnvBearerDigest: M
      },
      ...x.tunnelCredentialEpoch !== void 0 && {
        tunnelCredentialEpoch: x.tunnelCredentialEpoch
      }
    };
    return t("Policy limits: Fetched successfully"), {
      success: !0,
      response: Y.data,
      signature: x.signature,
      principalKeyAtWire: P,
      askedKeyAtWire: C,
      principalMovedAtWire: L,
      retriedAfter401: y > 1,
      ...M !== null && {
        sentEnvBearerDigest: M
      },
      ...x.tunnelCredentialEpoch !== void 0 && {
        tunnelCredentialEpoch: x.tunnelCredentialEpoch
      }
    };
  } catch (b) {
    let {kind: R, status: F, message: I} = ci(b), x = {
      ..._tn(b),
      ...ljn(b)
    }, Y = v !== void 0 ? v.outcome : S && o.attempted ? o.lastOutcome : void 0, te = _t(b), A = {
      ...y > 0 && {
        principalKeyAtWire: P,
        askedKeyAtWire: C,
        principalMovedAtWire: L
      },
      ...te !== void 0 && {
        tunnelCredentialEpoch: te
      }
    };
    switch (t(`Policy limits: fetch failed (${R}${F ? ` ${F}` : ""}) from ${he()} \u2014 ${I}`), 
    R) {
     case "auth":
      return {
        success: !1,
        error: "Not authorized for policy limits",
        errorCode: "auth_failed",
        httpStatus: F,
        tokenRefreshOutcome: h,
        skipRetry: !(F === 401 && S && h !== void 0 && di.has(h) && (v === void 0 || v.outcome !== void 0 && Z3e.has(v.outcome))),
        retriedAfter401: y > 1,
        forcedRefreshOutcome: Y,
        sentStoredLogin: S,
        ...x,
        ...A
      };

     case "timeout":
      return {
        success: !1,
        error: "Policy limits request timeout",
        errorCode: "timeout",
        errno: tut(b),
        retriedAfter401: y > 1,
        ...A
      };

     case "network":
      return {
        success: !1,
        error: "Cannot connect to server",
        errorCode: "network_error",
        errno: tut(b),
        retriedAfter401: y > 1,
        ...A
      };

     default:
      return {
        success: !1,
        error: I,
        errorCode: "request_failed",
        httpStatus: F,
        skipRetry: XJe(F),
        retriedAfter401: y > 1,
        forcedRefreshOutcome: Y,
        ...R === "http" && F === void 0 && {
          noResponse: !0,
          errno: tut(b)
        },
        ...x,
        ...A
      };
    }
  }
}

async function iSo(e, {timeoutMs: r = Ye} = {}) {
  if (Oe() !== "firstParty" || !vf()) return null;
  try {
    let n = await Ue({
      endpoint: ze(),
      authHeaders: {
        Authorization: `Bearer ${e}`,
        "anthropic-beta": Ap
      },
      timeoutMs: r,
      acceptAny2xx: !0
    });
    if (n.kind === "not_modified") return t("Policy limits (bearer read): 304 to an unconditional request"), 
    null;
    let o = Itn(n.data);
    if (!o.success) return t(`Policy limits (bearer read): invalid response format \u2014 ${o.error.message}`), 
    null;
    return o.data;
  } catch (n) {
    let {kind: o, status: s, message: p} = ci(n);
    return t(`Policy limits (bearer read): fetch failed (${o}${s ? ` ${s}` : ""}) \u2014 ${p}`), 
    null;
  }
}

function gi(e) {
  if (e === void 0) return "root";
  return e === "restrictions" || e === "compliance_taints" || e === "defaults" ? e : "other";
}

function Ne() {
  return {
    has_custom_base_url: din(),
    via_unix_socket: AH() !== void 0,
    has_unix_socket: a.ANTHROPIC_UNIX_SOCKET !== void 0,
    has_auth_token: Boolean(Pw()),
    has_api_key_helper: Boolean(km()),
    api_key_prefix: c(frn())
  };
}

var _i = [ "EACCES", "EPERM", "EROFS", "ENOSPC", "EDQUOT", "ENOENT", "ENOTDIR", "EISDIR", "EMFILE", "ENFILE", "EBUSY" ];

function Ft(e) {
  return e !== void 0 && _i.includes(e) ? e : "other";
}

function Re(e) {
  return Ft(E(e));
}

function vi(e) {
  let r = "telemetryCode" in e ? e.telemetryCode : void 0;
  return Ft(r === "UnexpectedAbsent" || r === uDo ? "ENOENT" : r);
}

function ke() {
  return Fe.state("policy-limits");
}

var $e = 1048576;

async function aSo(e) {
  if (!z() || e === void 0 || !by() || Jxe()) return;
  try {
    let r = Wkr(), n = await e.read([ {
      key: ke(),
      offset: 0,
      length: $e + 1
    } ]);
    if (!n.ok) {
      t(`Policy limits: prime read failed: ${n.error.code}; raw cache read stays`);
      return;
    }
    let o = n.value.items[0];
    if (!o.found) {
      nTr(e, null);
      return;
    }
    if (o.totalBytes > $e) {
      t("Policy limits: prime skipped (oversize cache); raw cache read stays");
      return;
    }
    let s = Ejn(Buffer.from(o.value).toString("utf-8"));
    nTr(e, s === null ? null : Xkr(s, zkr(r)));
  } catch (r) {
    t(`Policy limits: prime failed: ${l(r)}`);
  }
}

class lSo {
  storageV5;
  credentials;
  used=!1;
  constructor(e = {}) {
    this.storageV5 = e.storageV5, this.credentials = e.credentials;
  }
  adoptStartupServices(e) {
    if (e.storageV5 === void 0 && e.credentials === void 0) return "nothing to adopt";
    if (this.storageV5 !== void 0 || this.credentials !== void 0) return "already composed";
    if (this.used) return "already used";
    return this.storageV5 = e.storageV5, this.credentials = e.credentials, "adopted";
  }
  oauthRefreshLatch={
    attempted: !1,
    recoveries: {
      begun: 0,
      running: 0
    }
  };
  prefetchSlot=new ijn;
  renewOAuthRefreshLatch() {
    this.oauthRefreshLatch = {
      attempted: !1,
      lastOutcome: this.oauthRefreshLatch.lastOutcome,
      recoveries: {
        begun: 0,
        running: 0
      }
    };
  }
  prefetch() {
    if (!by()) return;
    let e = je();
    if (e === null) return;
    let r = Sjn() ? null : lHt(), n = r === gUe ? null : r, o = n ? ie(n) : void 0, {credentials: s, storageV5: p, oauthRefreshLatch: h} = this;
    this.prefetchSlot.set({
      checksum: o,
      generation: this.sessionGeneration,
      diskEpoch: o3e(),
      endpointHost: he(),
      storageV5: p,
      credentials: s,
      principalKey: e
    }, v => Ot(o, s, p, h, v), v => v.success || v.httpStatus === 404);
  }
  poller=null;
  cleanupRegistered=!1;
  loadingCompletePromise=null;
  loadingCompleteResolve=null;
  loadingTimeoutId=null;
  abortController=new AbortController;
  firstPromptStateLogged=!1;
  cacheWriteFailureLogged=!1;
  sessionGeneration=0;
  serverConfirmedGeneration=-1;
  verdictPrincipalIdentity=null;
  verdictKey=null;
  verdictPrincipalKind=null;
  askedKey=null;
  cyclesInFlight=0;
  unsettledCycles=new Set;
  principalCheckOwed=!1;
  unclassifiedRecheckTimer=null;
  stopCredentialWatch=null;
  stopTunnelEpochWatch=null;
  tunnelEpochSeen=void 0;
  tunnelVerdictEpoch=void 0;
  tunnelRepolledForEpoch=void 0;
  principalCheckQueued=!1;
  signedCacheShadowChecked=!1;
  storedCopyShadow=void 0;
  storedCopyReported=!1;
  livePrincipalChecked=!1;
  cacheClearEpoch=0;
  verdictlessRetry=null;
  verdictlessRetryStep=0;
  stopNetworkWatch=null;
  verdictlessEpisode=null;
  startupLoadState="not_started";
  startupLoadClaimed=!1;
  prefetchAdmittedGeneration=-1;
  startupLoadErrorCode;
  startupLoadCredentialState;
  startupLoadOutcomeReason;
  startupLoadHttpStatus;
  startupLoadServerErrorType;
  startupAwaitResult="not_awaited";
  gateSnapshotThisRun;
  coldStartFirstWaitAtMs=void 0;
  coldStartWaitedMs=0;
  recordStartupAwaitResult(e) {
    this.startupAwaitResult = e;
  }
  get coldStartTimedOut() {
    return this.startupAwaitResult === "timed_out";
  }
  async awaitColdStartVerdict() {
    let e = performance.now();
    this.coldStartFirstWaitAtMs ??= e;
    let r = Math.max(0, Math.round(this.coldStartFirstWaitAtMs + rHt - e)), n;
    try {
      await Ht(this.waitForLoad(), r, "policy_limits_cold_await"), n = "completed";
    } catch {
      n = "timed_out";
    }
    if (this.coldStartWaitedMs += performance.now() - e, this.startupAwaitResult !== "timed_out") this.recordStartupAwaitResult(n);
    return n;
  }
  get coldStartVerdictWait() {
    return this.coldStartFirstWaitAtMs === void 0 ? null : {
      waitedMs: this.coldStartWaitedMs,
      firstAtMs: this.coldStartFirstWaitAtMs
    };
  }
  async admitPrefetched(e) {
    let r = n => (t(`Policy limits: host prefetch not admitted (${n})`), {
      admitted: !1,
      refused: n
    });
    try {
      if (!by()) return r("ineligible");
      if (this.startupLoadClaimed || this.cyclesInFlight > 0 || this.serverConfirmedGeneration === this.sessionGeneration) return r("already_loading");
      if (this.prefetchAdmittedGeneration === this.sessionGeneration) return r("already_admitted");
      let n = s5();
      if (n === null || n.kind !== "org" || n.unclassified === !0 || n.descriptor !== `org:${e.orgUuid.toLowerCase()}` || n.bearerDigest === void 0 || n.bearerDigest !== e.bearerDigest) return r("principal_mismatch");
      let o = he();
      if (e.endpointHost !== o) return r("endpoint_mismatch");
      let s = Date.now() - e.fetchedAtMs;
      if (!Number.isFinite(e.fetchedAtMs) || s < -iRs || s > iRs) return r("stale");
      let p = Itn(e.data);
      if (!p.success) return r("unparseable");
      if (Lkr(e.data) > 0) return r("lossy_taints");
      let h = p.data, v = this.sessionGeneration, S = H0() !== null;
      this.used = !0, this.prefetchAdmittedGeneration = v, De(() => this.managedConfigPolicyGateFields()), 
      yjn(h), this.recordVerdictPrincipal(n);
      let y = o3e(), w = await this.saveCachedResponse(h, v, Gxo(e.signature), n, "prior_evidence");
      if (this.sessionGeneration !== v) {
        if (Z8("policy", {
          source: "superseded",
          hadCache: S,
          awaited: !1
        }), w !== "stale" && w !== "skipped") await this.deleteCacheFile(), xtn();
        return this.dropUnconfirmedSessionCache(), r("superseded");
      }
      if (Z8("policy", {
        source: "cache",
        hadCache: S,
        awaited: !1
      }), w === "saved" && o3e() === y) bjn();
      return t(`Policy limits: admitted the host's prefetch as this session's prior-evidence verdict (${Object.keys(h.restrictions).length} restriction(s), ${h.compliance_taints?.length ?? 0} taint(s), persisted=${w})`), 
      {
        admitted: !0
      };
    } catch (n) {
      return d(n), r("error");
    }
  }
  ensureLoadRequested(e) {
    let r = this.startupLoadClaimed && this.startupLoadState === "not_started" && !this.loadingCompletePromise && by();
    if (this.startupLoadClaimed && !r) return !1;
    return this.initializeLoadingPromise(), this.load(e).catch(n => d(n)), !0;
  }
  stop() {
    if (this.sessionGeneration++, this.prefetchSlot.clear(), this.verdictPrincipalIdentity = null, 
    this.verdictPrincipalKind = null, this.verdictKey = null, this.askedKey = null, 
    this.cyclesInFlight = 0, this.principalCheckOwed = !1, this.unclassifiedRecheckTimer !== null) clearTimeout(this.unclassifiedRecheckTimer), 
    this.unclassifiedRecheckTimer = null;
    this.stopCredentialWatch?.(), this.stopCredentialWatch = null, this.stopTunnelEpochWatch?.(), 
    this.stopTunnelEpochWatch = null, this.renewOAuthRefreshLatch(), xtn(), cHt(), this.stopBackgroundPolling(), 
    this.abortController.abort(), this.abortController = new AbortController, Rtn(null), 
    Vkr(null), ASo(), this.releaseLoadingPromise();
  }
  releaseLoadingPromise() {
    if (this.loadingCompleteResolve?.(), this.loadingCompletePromise = null, this.loadingCompleteResolve = null, 
    this.loadingTimeoutId !== null) clearTimeout(this.loadingTimeoutId), this.loadingTimeoutId = null;
  }
  initializeLoadingPromise() {
    if (this.loadingCompletePromise) return;
    if (by()) this.loadingCompletePromise = new Promise(e => {
      this.loadingCompleteResolve = e, this.loadingTimeoutId = setTimeout(r => {
        if (this.loadingCompleteResolve === r) t("Policy limits: Loading promise timed out, resolving anyway"), 
        this.loadingCompleteResolve(), this.loadingCompleteResolve = null;
      }, pi, e);
    });
  }
  async waitForLoad() {
    if (this.loadingCompletePromise) await this.loadingCompletePromise;
  }
  async saveCachedResponse(e, r, n, o, s) {
    if (this.sessionGeneration !== r) return t("Policy limits: skipped saving a fetch that outlived the account session"), 
    "stale";
    if (Jxe()) return "skipped";
    if (o === null) return t("Policy limits: no attributable principal for this credential; the verdict is used for the session and not persisted"), 
    "skipped";
    let p;
    try {
      p = await this.writeStampForSave(e, o, s);
    } catch (v) {
      return this.recordCacheWriteFailure(v instanceof Error ? v.message : "unknown error", Re(v)), 
      "failed";
    }
    if (p === null) return "failed";
    let h = ie(e);
    if (z() && this.storageV5 !== void 0) {
      let v, S;
      try {
        let y = await this.storageV5.write(ke(), _(a3e(e), null, 2), {
          publishDiscipline: "inPlace",
          mode: 384
        });
        if (y.ok) return t(`Policy limits: Saved to ${fk()}`), await wmt(fk(), n), await this.sealSavedBody(p, h);
        v = yt(y.error), S = vi(y.error);
      } catch (y) {
        v = l(y), S = Re(y);
      }
      return cHt(), this.recordCacheWriteFailure(v, S), "failed";
    }
    try {
      let v = fk();
      await ai(v, _(a3e(e), null, 2), {
        encoding: "utf-8",
        mode: 384
      }), t(`Policy limits: Saved to ${v}`), await wmt(v, n);
    } catch (v) {
      return cHt(), this.recordCacheWriteFailure(v instanceof Error ? v.message : "unknown error", Re(v)), 
      "failed";
    }
    return this.sealSavedBody(p, h);
  }
  async sealSavedBody(e, r) {
    try {
      await e.rewrite();
    } catch (n) {
      let o = await r3e(fk());
      if (i3e(o), o.kind !== "ok" || o.stamp.identity !== e.identity || o.stamp.sha !== r) {
        if (o.kind !== "ok") {
          let s = await this.readDiskBody();
          if ((s.kind === "unreadable" || s.kind === "body" && s.checksum === r) && !await this.removeBodyLeavingStamp()) {
            let h = await r3e(fk());
            if (i3e(h), h.kind !== "ok") await e.vouch();
          }
        }
        return this.recordCacheWriteFailure(n instanceof Error ? n.message : "unknown error", Re(n)), 
        "failed";
      }
    }
    return eTr(r, e.evidence, e.confirmedAt), "saved";
  }
  async readDiskBody() {
    let e = !1, r;
    try {
      r = await gT(se(), fk(), $e, o => {
        e = o.isFile();
      });
    } catch (o) {
      return {
        kind: W(o) ? "none" : "unreadable"
      };
    }
    if (e) return {
      kind: "unreadable"
    };
    let n = r === null ? null : Ejn(r);
    return n === null ? {
      kind: "none"
    } : {
      kind: "body",
      checksum: ie(n)
    };
  }
  async removeBodyLeavingStamp() {
    if (cHt(), await hin(fk()), z() && this.storageV5 !== void 0) try {
      await this.storageV5.delete(ke());
    } catch {}
    try {
      return await oi(fk()), !0;
    } catch (e) {
      return W(e);
    }
  }
  async removeUnstampedBody() {
    if (Jxe()) return;
    let e = await r3e(fk());
    if (i3e(e), e.kind === "absent") await this.removeBodyLeavingStamp();
  }
  async removeSupersededLegacyBody(e, r) {
    if (!jSo(e)) return;
    let n = await r3e(fk());
    if (i3e(n), n.kind !== "absent") return;
    let o = await this.readDiskBody();
    if (o.kind !== "body" || o.checksum !== r) return;
    t("Policy limits: removed an unstamped cache this credential cannot restamp after the server superseded it"), 
    await this.removeBodyLeavingStamp();
  }
  async writeStampForSave(e, r, n) {
    let o = fk(), s = await r3e(o);
    if (i3e(s), hjn(s)) return t(`Policy limits: the cache stamp could not be read just now (${s.code}); nothing persisted this cycle`), 
    null;
    let p = vSo({
      principal: r,
      bodySha: ie(e),
      confirmedAt: Date.now(),
      bodyTaints: e.compliance_taints,
      previous: $kr(s, vjn()),
      authority: n
    });
    return await Fkr(o, p), {
      identity: p.identity,
      evidence: Ctn(p),
      confirmedAt: p.confirmed_at,
      rewrite: () => Fkr(o, p),
      vouch: async () => {
        await Ukr(o, p);
      }
    };
  }
  async restampConfirmedCache(e, r, n, o, s) {
    if (this.sessionGeneration !== o || n === null || r === void 0 || LSo() !== r) return;
    let p = this.cacheClearEpoch, h = await r3e(fk());
    if (i3e(h), h.kind !== "absent" && !(h.kind === "ok" && h.stamp.sha === r)) return;
    let v = vSo({
      principal: n,
      bodySha: r,
      confirmedAt: Date.now(),
      bodyTaints: e.compliance_taints,
      previous: $kr(h, vjn()),
      authority: s
    });
    if (await Ukr(fk(), v), this.cacheClearEpoch !== p) {
      await this.deleteCacheFile();
      return;
    }
    if (this.sessionGeneration !== o) return;
    eTr(r, Ctn(v), v.confirmed_at);
  }
  recordCacheWriteFailure(e, r) {
    if (t(`Policy limits: Failed to save - ${e}`), !this.cacheWriteFailureLogged) this.cacheWriteFailureLogged = !0, 
    i("tengu_policy_limits_cache_write_failed", {
      errno: c(r)
    });
  }
  async fetchAndLoad(e, r, n = !1) {
    let o = this.sessionGeneration;
    this.cyclesInFlight++;
    let s = this.runFetchCycle(e, r, n);
    this.unsettledCycles.add(s);
    try {
      return await s;
    } finally {
      this.unsettledCycles.delete(s), this.endCycle(o);
    }
  }
  async _settleCyclesForTesting() {
    while (this.unsettledCycles.size > 0) await Promise.allSettled([ ...this.unsettledCycles ]);
  }
  endCycle(e) {
    if (this.sessionGeneration !== e) return;
    if (this.cyclesInFlight--, this.cyclesInFlight === 0 && this.principalCheckOwed) this.principalCheckOwed = !1, 
    this.onCredentialMayHaveChanged();
  }
  async runFetchCycle(e, r, n) {
    this.used = !0;
    let o = e === "policy_limits_load" && !this.startupLoadClaimed;
    if (o) this.startupLoadClaimed = !0;
    if (De(() => this.managedConfigPolicyGateFields()), !by()) return this.prefetchSlot.clear(), 
    Z8("policy", {
      source: "ineligible",
      hadCache: !1,
      awaited: n
    }), null;
    if (o) this.startupLoadState = "in_flight";
    let s = Sjn() ? null : lHt(), p = s === gUe ? null : s, h = s === null ? void 0 : MSo(), v = o3e(), S = kt(), y = s5(), w = y === null ? "" : _pe(y), T = !Rt(r);
    if (p && !H0()) iHt(p);
    let P = H0();
    if (p && P !== null && this.verdictPrincipalIdentity === null && this.serverConfirmedGeneration !== this.sessionGeneration) if (fe(y) && wjn() === "match" && HSo() === _pe(y) && ie(P) === ie(p)) this.recordVerdictPrincipal(y); else this.ensureCredentialWatch();
    if (p) Z8("policy", {
      source: "cache",
      hadCache: !0,
      awaited: n
    });
    let C = p ? ie(p) : void 0, L = this.cacheClearEpoch;
    if (!this.signedCacheShadowChecked) {
      if (this.signedCacheShadowChecked = !0, C !== void 0 && !Jxe()) Pkr({
        kind: "policy-limits",
        cachePath: fk(),
        bodySha: C,
        readStoredAccount: Up,
        readOrgPin: Zxe,
        onJudged: u => {
          this.storedCopyShadow = u;
        }
      });
    }
    let M = hi(), b = M.authType, R = Date.now(), F = this.abortController.signal, I = this.sessionGeneration, x = Pse(), Y = () => {
      let u = Pse();
      return u !== null && u.success && u !== x;
    }, te = !1, A = u => {
      if (te = !0, !u.success && Y()) return;
      this.recordFetchOutcome(I, L, u, w, T);
    }, G = () => A({
      success: !1,
      errorCode: "request_failed",
      httpStatus: null,
      host: he(),
      retrying: !1
    });
    if (e === "policy_limits_load" && this.prefetchSlot.pending) {
      let u = await Pg(this.credentials);
      if (u !== "store") S9();
      if (brn(u)) await Q3e(B().host, this.credentials);
      y = s5();
    }
    let re = y === null ? null : ee(y), X = he(), ae = e === "policy_limits_load" ? this.prefetchSlot.take(u => u.checksum === C && u.generation === I && u.diskEpoch === v && u.endpointHost === X && u.storageV5 === this.storageV5 && u.credentials === this.credentials && u.principalKey === re) : void 0;
    try {
      let u = await yi(C, this.credentials, this.storageV5, F, O => {
        if (Pse()?.success) return;
        this.recordFetchOutcome(I, L, {
          success: !1,
          host: X,
          httpStatus: O.httpStatus ?? null,
          errorCode: O.errorCode ?? "request_failed",
          retrying: !0
        }, w, T);
      }, this.oauthRefreshLatch, Rt(r) ? 0 : Lt, {
        hedge: n && qe(),
        prefetched: ae
      });
      if (this.sessionGeneration !== I || F.aborted) {
        if (o && this.startupLoadState === "in_flight") this.startupLoadState = "failed", 
        this.startupLoadErrorCode = "session_changed", this.startupLoadCredentialState = void 0, 
        this.startupLoadOutcomeReason = void 0, this.startupLoadHttpStatus = void 0, this.startupLoadServerErrorType = void 0;
        return Z8("policy", {
          source: "superseded",
          hadCache: p !== null,
          awaited: n
        }), t("Policy limits: Discarding a fetch that outlived the account session"), f(e, "cycle_aborted"), 
        H0();
      }
      let ne = s5(), oe = ne === null ? null : ee(ne), Mt = u.principalKeyAtWire === void 0 ? oe : u.principalKeyAtWire, be = u.success && this.isStaleTunnelCredentialEpoch(u.tunnelCredentialEpoch);
      if (be) t("Policy limits: this answer came back under an older claude ssh credential epoch than one already seen; not installing it");
      let U = u.principalMovedAtWire === !0 || Mt !== oe;
      if (!U && u.askedKeyAtWire !== void 0 && u.askedKeyAtWire !== null) this.askedKey = u.askedKeyAtWire;
      if (U) t("Policy limits: the credential changed principal during the fetch; this response is used for the session but not persisted or attributed"), 
      y = null; else if (re !== oe) t("Policy limits: the credential changed principal before the request went out; attributing the response to the principal it authenticated as"), 
      y = ne;
      if (o3e() !== v) t("Policy limits: the disk snapshot predates an account-boundary hold; not installable"), 
      p = null;
      let ye = u.success && u.response === null && !p, V = u.success && !ye && !be;
      if (!V) this.observeTunnelCredentialEpoch(u.tunnelCredentialEpoch, u.success ? "a stale policy answer" : "a refused policy request", !1);
      let Z = be ? "stale_tunnel_credential" : ye ? "spurious_304" : u.errorCode ?? "request_failed", Je = V ? void 0 : Z, Xe = fi(M, u), Qe = Xe === "injected_token" ? GDt() : void 0, de = Okr({
        errorCode: Z,
        httpStatus: u.httpStatus,
        serverErrorType: u.serverErrorType,
        serverErrorCode: u.serverErrorCode,
        serverAuthDenial: u.serverAuthDenial,
        tokenRefreshOutcome: u.tokenRefreshOutcome,
        forcedRefreshOutcome: u.forcedRefreshOutcome,
        authUnavailableReason: u.authUnavailableReason,
        authType: b,
        credentialOrigin: Xe,
        injectedTokenRecovery: Qe,
        noResponse: u.noResponse
      }), Te = V ? void 0 : de, Ze = SGn(V ? {
        succeeded: !0,
        responseKind: u.response === null ? "not_modified" : "body"
      } : {
        succeeded: !1,
        failure: u.authUnavailableReason !== void 0 ? "no_credentials" : Z === "timeout" ? "timeout" : Z === "network_error" || u.noResponse ? "network" : Z === "parse_failed" ? "parse" : u.httpStatus !== void 0 ? "http" : "other",
        httpStatus: u.httpStatus,
        serverErrorType: u.serverErrorType,
        serverErrorCode: u.serverErrorCode,
        serverAuthDenial: u.serverAuthDenial,
        credentialState: Te,
        tokenRefreshOutcome: u.tokenRefreshOutcome,
        forcedRefreshOutcome: u.forcedRefreshOutcome,
        errno: u.errno,
        responseContentType: u.responseContentType ?? u.parseErrorContentType,
        requestIdPresent: u.requestIdPresent
      }), le = Date.now(), It = wjn(), ge = qK(), et = OSo(), tt = ge ? h : w1e(this.storedCopyShadow), Dt = ge ? et === "not_asked" ? "none" : et : p === null ? "none" : this.storedCopyShadow === void 0 ? "pending" : S1e(this.storedCopyShadow), it = !this.storedCopyReported;
      if (this.storedCopyReported = !0, o) this.startupLoadState = V ? "succeeded" : "failed", 
      this.startupLoadErrorCode = Je, this.startupLoadCredentialState = Te, this.startupLoadOutcomeReason = Ze, 
      this.startupLoadHttpStatus = V ? void 0 : u.httpStatus, this.startupLoadServerErrorType = V ? void 0 : u.serverErrorType;
      let _e = {
        source: V ? "fetch" : "error",
        hadCache: p !== null,
        awaited: n,
        fetchMs: le - R
      };
      if (!V) Z8("policy", _e);
      let ve, rt = !1;
      if (!u.success && (!u.skipRetry || u.errorCode === "parse_failed") && Ke()) {
        ve = this.staleFallbackSource();
        let O = r !== "api_success_trigger";
        if (ve === null) {
          if (rt = this.armVerdictlessRetry(), O) this.armNetworkKick();
        } else if (!this.hasLiveVerdict() && O) this.armNetworkKick();
      }
      let Ce = V ? u.response ?? p : null;
      if (V && u.signature !== void 0 && tt !== void 0 && !this.livePrincipalChecked) this.livePrincipalChecked = !0, 
      Ikr({
        kind: "policy-limits",
        jws: u.signature,
        trustedPrincipal: tt,
        gate: ge ? "enforced" : "shadow"
      });
      if (i("tengu_policy_limits_fetch", {
        duration_ms: le - R,
        ms_since_startup: le - We,
        success: V,
        had_cache: p !== null,
        cache_stamp: c(It),
        stored_copy: it ? c(Dt) : void 0,
        stored_copy_gate: it ? c(ge ? "enforced" : "shadow") : void 0,
        cache_age_ms: S,
        attempts: u.attempts,
        prefetched: ae !== void 0,
        hedged: u.hedged === !0,
        restrictions_denied_count: Ce ? N(Object.values(Ce.restrictions), O => !O.allowed) : void 0,
        compliance_taint_count: Ce ? Ce.compliance_taints?.length ?? 0 : void 0,
        is_load: e === "policy_limits_load",
        awaited: n,
        auth_type: c(b),
        error_code: pe(Je),
        token_source: c(Tt()),
        ...Ne(),
        auth_unavailable_reason: pe(u.authUnavailableReason),
        token_refresh_outcome: b === "oauth" ? pe(u.tokenRefreshOutcome) : void 0,
        forced_refresh_outcome: b === "oauth" ? pe(u.forcedRefreshOutcome) : void 0,
        retried_after_401: u.retriedAfter401 ?? !1,
        http_status: u.httpStatus,
        parse_error_field: pe(u.parseErrorField),
        parse_error_content_type: pe(u.parseErrorContentType),
        server_error_type: pe(u.serverErrorType),
        server_error_code: pe(u.serverErrorCode),
        server_auth_denial: pe(u.serverAuthDenial),
        injected_token_recovery: pe(V ? void 0 : Qe),
        credential_state: pe(Te),
        outcome_reason: c(Ze),
        response_kind: V ? c(u.response === null ? "not_modified" : "body") : void 0,
        request_id_present: u.requestIdPresent,
        response_content_type: pe(u.responseContentType),
        fetch_trigger: c(r),
        verdictless_retry_scheduled: rt,
        error_errno: pe(u.errno),
        ...mi()
      }), !V) {
        A({
          success: !1,
          host: X,
          httpStatus: u.httpStatus ?? null,
          errorCode: Z,
          retrying: !1,
          credentialState: de,
          ...u.serverErrorCode !== void 0 && {
            serverErrorCode: u.serverErrorCode
          }
        });
        let O = ve !== void 0 ? ve : this.staleFallbackSource();
        if (O) {
          t(ye ? "Policy limits: 304 with no outstanding ETag \u2014 using stale cache" : "Policy limits: Using stale cache after fetch failure");
          let ce = wt(O);
          if (iHt(ce), this.disposeVerdictlessRetryTimer(), !this.hasLiveVerdict()) this.noteUnverifiedCycle(Z, !0);
          return f(e, ye ? "spurious_304" : "stale_cache_used", {
            credential_state: c(de)
          }), ce;
        }
        if ((u.httpStatus === 404 || u.httpStatus === 304) && H0() === null && !_jn() && !k("tengu_rustling_orbit", !1)) return t(`Policy limits: ${u.httpStatus} with no cache, no restrictions for this session (not persisted)`), 
        dHt(), kSo(), this.serverConfirmedGeneration = I, this.disposeVerdictlessRetryTimer(), 
        this.disarmNetworkKick(), this.recordVerdictPrincipal(y), f(e, u.httpStatus === 404 ? "route_missing_fail_open" : "unsolicited_304_fail_open", {
          credential_state: c(de)
        }), gUe;
        return this.noteUnverifiedCycle(Z, !1), m(e, Z, {
          credential_state: c(de)
        }), null;
      }
      let Se = u.response;
      if (Se === null || Se === void 0) {
        if (!p) return G(), Z8("policy", {
          ..._e,
          source: "error"
        }), m(e, "unexpected_error"), null;
        t("Policy limits: Cache still valid (304 Not Modified)");
        let O = p, ce = p.compliance_taints, nt = this.serverConfirmedGeneration === I ? H0()?.compliance_taints ?? [] : [], Pe = Lkr(a3e(p)) > 0;
        if (Pe && nt.some(ue => !ce.includes(ue))) O = {
          ...p,
          compliance_taints: D([ ...nt, ...ce ]).slice(0, sut)
        }, t("Policy limits: lossy cached compliance_taints \u2014 kept the session taint set");
        if (U) dHt(); else Qkr();
        if (U || Pe) yjn(O); else Rtn(O);
        if (Gkr(U ? null : u.sentEnvBearerDigest ?? null), this.settleTunnelCredentialEpoch(u.tunnelCredentialEpoch), 
        this.serverConfirmedGeneration = I, this.onLiveVerdict(r), this.recordVerdictPrincipal(y), 
        A({
          success: !0,
          host: X
        }), !Jxe()) try {
          if (z() && this.storageV5 !== void 0) {
            if ((await this.storageV5.touch(ke())).ok) {
              if (await gin(fk(), u.signature), !await yin(fk(), this.cacheClearEpoch !== L)) {
                if (tTr(C, le), !U) await this.restampConfirmedCache(O, C, y, I, Pe ? "prior_evidence" : "confirmed");
              }
            }
          } else {
            let ue = new Date;
            if (await si(fk(), ue, ue), await gin(fk(), u.signature), !await yin(fk(), this.cacheClearEpoch !== L)) {
              if (tTr(C, le), !U) await this.restampConfirmedCache(O, C, y, I, Pe ? "prior_evidence" : "confirmed");
            }
          }
        } catch {}
        return Z8("policy", _e), g(e), O;
      }
      let Q = Se;
      if (u.lossyComplianceTaints) {
        let O = [ ...H0()?.compliance_taints ?? [], ...p?.compliance_taints ?? [] ];
        if (O.length > 0) Q = {
          ...Q,
          compliance_taints: D([ ...Q.compliance_taints, ...O ]).slice(0, sut)
        }, t("Policy limits: lossy compliance_taints \u2014 kept the known taint set");
      }
      if (U) dHt(); else Qkr();
      if (U || u.lossyComplianceTaints) yjn(Q); else Rtn(Q);
      Gkr(U ? null : u.sentEnvBearerDigest ?? null), this.settleTunnelCredentialEpoch(u.tunnelCredentialEpoch), 
      this.serverConfirmedGeneration = I, this.onLiveVerdict(r), this.recordVerdictPrincipal(y), 
      A({
        success: !0,
        host: X
      });
      let xt = o3e(), Ee = U ? "stale" : await this.saveCachedResponse(Q, I, Q === Se ? u.signature : void 0, y, u.lossyComplianceTaints ? "prior_evidence" : "confirmed");
      if (Z8("policy", _e), Ee === "skipped" && y === null && !U && !Jxe() && p !== null && C !== void 0 && wjn() === "legacy" && C !== ie(Q)) await this.removeSupersededLegacyBody(p, C);
      if (this.sessionGeneration !== I) {
        if (Ee !== "stale" && Ee !== "skipped") {
          let O = await this.deleteCacheFile();
          if (xtn(), !O) t("Policy limits: could not remove a dead fetch's cache write; disk adoption suppressed until the next save");
        }
        return this.dropUnconfirmedSessionCache(), f(e, "cycle_aborted"), H0();
      }
      if (Ee === "saved" && o3e() === xt) bjn();
      if (t(Object.keys(Q.restrictions).length > 0 ? "Policy limits: Applied new restrictions successfully" : "Policy limits: No restrictions (cached empty)"), 
      u.lossyComplianceTaints) f(e, "lossy_compliance_taints"); else g(e);
      return Q;
    } catch {
      let u = this.sessionGeneration !== I;
      if (o && this.startupLoadState === "in_flight") this.startupLoadState = "failed", 
      this.startupLoadErrorCode = u ? "session_changed" : "unexpected_error", this.startupLoadCredentialState = void 0, 
      this.startupLoadOutcomeReason = void 0, this.startupLoadHttpStatus = void 0, this.startupLoadServerErrorType = void 0;
      if (Z8("policy", {
        source: u ? "superseded" : "error",
        hadCache: p !== null,
        awaited: n
      }), u || F.aborted) return f(e, "cycle_aborted"), H0();
      if (!te) G();
      let ne = this.staleFallbackSource();
      if (ne) {
        t("Policy limits: Using stale cache after error");
        let oe = wt(ne);
        if (iHt(oe), this.disposeVerdictlessRetryTimer(), !this.hasLiveVerdict()) this.noteUnverifiedCycle("unexpected_error", !0);
        return f(e, "stale_cache_used"), oe;
      }
      return this.noteUnverifiedCycle("unexpected_error", !1), m(e, "unexpected_error"), 
      null;
    }
  }
  hasLiveVerdict() {
    let e = H0();
    return e !== null && e !== gUe && this.serverConfirmedGeneration === this.sessionGeneration;
  }
  armVerdictlessRetry() {
    if (this.verdictlessRetry !== null) return !0;
    let e = this.verdictlessRetryStep, r = Et[e];
    if (r === void 0 || !by()) return !1;
    this.verdictlessRetryStep = e + 1;
    let n = Math.round(r * (1 - Pt + 2 * Pt * Math.random())), o = this.sessionGeneration;
    t(`Policy limits: no verdict \u2014 accelerated retry ${e + 1}/${Et.length} in ${Math.round(n / 1e3)}s`);
    let s = sjn(() => {
      if (s[Symbol.dispose](), this.verdictlessRetry === s) this.verdictlessRetry = null;
      if (this.sessionGeneration !== o) return;
      if (H0() !== null) return;
      this.poll("accelerated_retry").catch(p => d(p));
    }, n, {
      unref: !0
    });
    return this.verdictlessRetry = s, !0;
  }
  disposeVerdictlessRetryTimer() {
    this.verdictlessRetry?.[Symbol.dispose](), this.verdictlessRetry = null;
  }
  armNetworkKick() {
    if (this.stopNetworkWatch !== null) return;
    let e = this.sessionGeneration, r = st(() => {
      queueMicrotask(() => {
        if (this.stopNetworkWatch !== r) return;
        try {
          this.kickOnNetworkSuccess(e);
        } catch (n) {
          d(n);
        }
      });
    });
    this.stopNetworkWatch = r;
  }
  disarmNetworkKick() {
    this.stopNetworkWatch?.(), this.stopNetworkWatch = null;
  }
  kickOnNetworkSuccess(e) {
    if (this.sessionGeneration !== e) {
      this.disarmNetworkKick();
      return;
    }
    if (this.cyclesInFlight > 0) return;
    if (this.disarmNetworkKick(), !by() || this.hasLiveVerdict()) return;
    t("Policy limits: the API answered a request \u2014 re-fetching the org policy now"), 
    this.poll("api_success_trigger").catch(r => d(r));
  }
  resetAcceleratedRecovery() {
    this.disposeVerdictlessRetryTimer(), this.verdictlessRetryStep = 0, this.disarmNetworkKick();
  }
  noteUnverifiedCycle(e, r) {
    if (this.verdictlessEpisode === null) this.verdictlessEpisode = {
      sinceMs: Date.now(),
      errorCode: e,
      failedCycles: 1,
      staleServed: r
    }; else this.verdictlessEpisode.failedCycles++;
  }
  onLiveVerdict(e) {
    this.resetAcceleratedRecovery();
    let r = this.verdictlessEpisode;
    if (r === null) return;
    this.verdictlessEpisode = null;
    let n = Date.now(), o = ui(e), s = r.errorCode;
    i("tengu_policy_limits_verdict_recovered", {
      ms_since_startup: n - We,
      ms_verdictless: n - r.sinceMs,
      recovered_by: c(o),
      startup_error_code: c(s),
      attempts_before_recovery: r.failedCycles,
      was_stale_served: r.staleServed,
      fast_retry_enabled: Ke()
    });
  }
  policyGateSnapshot() {
    if (this.gateSnapshotThisRun !== void 0) return this.gateSnapshotThisRun;
    let e = e9(), r = e === void 0, n = e === "custom_base_url" ? e9({
      skipBaseUrlCheck: !0
    }) === void 0 : r, o = jS() !== null, s = r ? kt() : void 0, p = this.hasLiveVerdict(), h = {
      ineligibleReason: e,
      eligible: r,
      eligibleIfBaseUrlGateRemoved: n,
      hasCache: o,
      cacheAgeMs: s,
      liveVerdict: p,
      wouldFailClosed: r && !p && (!o || AH() === void 0 && (s ?? 1 / 0) > iGs),
      loadState: this.startupLoadState,
      loadErrorCode: this.startupLoadErrorCode,
      loadCredentialState: this.startupLoadCredentialState,
      loadOutcomeReason: r ? this.startupLoadOutcomeReason : wGn(_rn(e)),
      loadHttpStatus: this.startupLoadHttpStatus,
      loadServerErrorType: this.startupLoadServerErrorType,
      awaitResult: this.startupAwaitResult
    };
    return this.gateSnapshotThisRun = h, queueMicrotask(() => {
      this.gateSnapshotThisRun = void 0;
    }), h;
  }
  managedConfigPolicyGateFields() {
    let e = this.policyGateSnapshot(), r = Ne();
    return {
      policy_ineligible_reason: pe(e.ineligibleReason),
      policy_eligible_if_base_url_gate_removed: e.eligibleIfBaseUrlGateRemoved,
      policy_cache_age_ms: e.cacheAgeMs,
      policy_would_fail_closed: e.wouldFailClosed,
      policy_live_verdict: e.liveVerdict,
      policy_load_state: c(e.loadState),
      policy_error_code: pe(e.loadErrorCode),
      policy_credential_state: pe(e.loadCredentialState),
      policy_outcome_reason: pe(e.loadOutcomeReason),
      policy_has_auth_token: r.has_auth_token,
      policy_has_api_key_helper: r.has_api_key_helper,
      policy_has_custom_base_url: r.has_custom_base_url,
      policy_api_provider: c(Oe()),
      policy_http_status: e.loadHttpStatus,
      policy_server_error_type: pe(e.loadServerErrorType)
    };
  }
  logCacheStateAtFirstPrompt() {
    if (this.firstPromptStateLogged) return;
    this.firstPromptStateLogged = !0;
    let e = this.policyGateSnapshot(), r = c(_So());
    i("tengu_policy_limits_cache_state_at_first_prompt", {
      eligible: e.eligible,
      ineligible_reason: pe(e.ineligibleReason),
      eligible_if_base_url_gate_removed: e.eligibleIfBaseUrlGateRemoved,
      has_cache: e.hasCache,
      cache_age_ms: e.cacheAgeMs,
      would_fail_closed: e.wouldFailClosed,
      live_verdict: e.liveVerdict,
      token_source: c(Tt()),
      ...Ne(),
      ms_since_startup: Date.now() - We,
      load_state: c(e.loadState),
      startup_fetch_error_code: pe(e.loadErrorCode),
      startup_credential_state: pe(e.loadCredentialState),
      outcome_reason: pe(e.loadOutcomeReason),
      startup_await_result: c(e.awaitResult),
      error_reporting_gate: r
    });
  }
  async load({startupAwaited: e = !1} = {}) {
    return this.loadFor("load", e);
  }
  async loadFor(e, r = !1) {
    if (this.used = !0, this.ensureCredentialWatch(), by() && !this.loadingCompletePromise) this.loadingCompletePromise = new Promise(o => {
      this.loadingCompleteResolve = o;
    });
    let n = this.loadingCompleteResolve;
    try {
      if (await this.fetchAndLoad("policy_limits_load", e, r), by()) this.startBackgroundPolling();
    } finally {
      if (n) {
        if (n(), this.loadingCompleteResolve === n) {
          if (this.loadingCompleteResolve = null, this.loadingTimeoutId) clearTimeout(this.loadingTimeoutId), 
          this.loadingTimeoutId = null;
        }
      }
    }
  }
  async refresh({observedBoundary: e = !1} = {}) {
    this.used = !0, this.stop(), this.ensureCredentialWatch(), this.initializeLoadingPromise();
    let r = by();
    if (e) await this.removeUnstampedBody(); else if (!await this.deleteCacheFile()) t("Policy limits: could not remove the previous account's cache; disk adoption stays suppressed");
    if (this.dropUnconfirmedSessionCache(), !r) return;
    await this.loadFor("login_refresh"), t("Policy limits: Refreshed after auth change");
  }
  async clearCache() {
    if (this.used = !0, this.stop(), this.verdictlessEpisode = null, this.ensureCredentialWatch(), 
    !await this.deleteCacheFile()) t("Policy limits: could not remove the previous account's cache; disk adoption stays suppressed");
    this.dropUnconfirmedSessionCache();
  }
  recordFetchOutcome(e, r, n, o, s) {
    if (this.sessionGeneration === e && this.cacheClearEpoch === r) Vkr(n, o, s);
  }
  staleFallbackSource() {
    if (Sjn()) return H0();
    return lHt() ?? H0();
  }
  dropUnconfirmedSessionCache() {
    if (H0() !== null && this.serverConfirmedGeneration !== this.sessionGeneration) Rtn(null);
  }
  async deleteCacheFile() {
    if (this.cacheClearEpoch++, Jxe()) return !1;
    if (i3e(await r3e(fk())), !await this.removeBodyLeavingStamp()) return !1;
    let r = await r3e(fk());
    if (r.kind === "unusable") return !0;
    let n = $kr(r, vjn());
    if (n.seen.length === 0 && !n.incomplete) await ERs(fk()); else await Ukr(fk(), vRs(n));
    return !0;
  }
  recordVerdictPrincipal(e) {
    if (e === null || fe(e)) {
      if (this.verdictPrincipalIdentity = e === null ? null : _pe(e), this.verdictPrincipalKind = e === null ? null : e.kind, 
      this.verdictKey = e === null ? null : ee(e), e !== null) this.askedKey = null;
    } else this.verdictKey = ee(e);
    this.ensureCredentialWatch(), this.onCredentialMayHaveChanged();
  }
  isVerdictOfLiveCredential() {
    return this.verdictKey !== null && je() === this.verdictKey;
  }
  ensureCredentialWatch() {
    if (this.stopCredentialWatch === null) this.stopCredentialWatch = _Ps(this.onCredentialMayHaveChanged);
    if (this.stopTunnelEpochWatch === null) this.stopTunnelEpochWatch = bPs(this.onTunnelCredentialEpoch);
  }
  onTunnelCredentialEpoch=e => {
    this.observeTunnelCredentialEpoch(e, "a model response", !0);
  };
  observeTunnelCredentialEpoch(e, r, n) {
    if (e === void 0 || AH() === void 0) return;
    let o = this.tunnelEpochSeen !== void 0;
    if (this.tunnelEpochSeen === void 0 || e > this.tunnelEpochSeen) this.tunnelEpochSeen = e;
    if (this.tunnelVerdictEpoch !== void 0 && e <= this.tunnelVerdictEpoch) return;
    if (!o && this.tunnelVerdictEpoch === void 0) return;
    let s = H0() !== null, p = n && this.tunnelRepolledForEpoch !== this.tunnelEpochSeen && this.cyclesInFlight === 0;
    if (!s && !p) return;
    if (t(`Policy limits: the claude ssh launcher injects a different credential than the one this policy was fetched with (${r}); ${s ? "withholding client-only keys" : "no verdict held"}${p ? ", re-polling" : ""}`), 
    s) dHt();
    if (p) this.tunnelRepolledForEpoch = this.tunnelEpochSeen, i("tengu_policy_limits_principal_changed", {
      next_kind: c("none"),
      reason: c("tunnel_credential")
    }), this.fetchAndLoad("policy_limits_poll", "credential_change").catch(h => d(h));
  }
  settleTunnelCredentialEpoch(e) {
    if (e === void 0 || AH() === void 0) return;
    if (this.tunnelVerdictEpoch = e, this.tunnelEpochSeen === void 0 || e > this.tunnelEpochSeen) this.tunnelEpochSeen = e;
  }
  isStaleTunnelCredentialEpoch(e) {
    return e !== void 0 && this.tunnelEpochSeen !== void 0 && e < this.tunnelEpochSeen && AH() !== void 0;
  }
  onCredentialMayHaveChanged=() => {
    if (this.principalCheckQueued) return;
    this.principalCheckQueued = !0, queueMicrotask(() => {
      this.checkPrincipal().catch(e => {
        d(e);
      });
    });
  };
  async checkPrincipal(e = "credential_change") {
    let r = this.sessionGeneration;
    try {
      if (this.verdictPrincipalIdentity === null && H0() === null && Ykr() !== void 0) return "unchanged";
      try {
        await al(this.credentials);
      } catch {}
      if (ISo() && QT() === "store") try {
        await Jkr(this.storageV5, this.credentials);
      } catch (v) {
        t(`Policy limits: stored login origin or account record unreadable (${l(v)})`);
      }
    } finally {
      this.principalCheckQueued = !1;
    }
    if (this.sessionGeneration !== r) return "superseded";
    if (sHt() === !1) return t("Policy limits: the env bearer the loaded policy was fetched with is no longer the wire credential; reloading as an account change"), 
    i("tengu_policy_limits_principal_changed", {
      next_kind: c("none"),
      reason: c("env_bearer")
    }), this.refresh({
      observedBoundary: !0
    }).catch(v => d(v)), "changed";
    let n = s5();
    if (n !== null && !fe(n)) this.scheduleUnclassifiedRecheck();
    if (!fe(n)) {
      if (n !== null && H0() !== null && ee(n) !== this.verdictKey && QT() === "store") {
        if (this.cyclesInFlight > 0) return this.principalCheckOwed = !0, "unchanged";
        let v = we(n);
        if (v !== this.askedKey) return t("Policy limits: the stored login in use is not the one the loaded policy was fetched with, and its account record has not settled; asking the server with it (keyed on the token until the record settles)"), 
        this.repollFor(n, v, "unattributed", e);
      }
      return "unchanged";
    }
    let o = _pe(n), s = this.verdictPrincipalKind === "token" && n.kind === "token";
    if (this.verdictPrincipalIdentity !== null && o !== this.verdictPrincipalIdentity && !s) {
      if (ELs()) {
        let v = we(n), S = this.cyclesInFlight > 0;
        if (S && v === this.askedKey) return this.principalCheckOwed = !0, "unchanged";
        if (!S && v !== this.askedKey) return t(`Policy limits: the credential now belongs to a different principal than the loaded policy; ${Wxo} keeps the loaded verdict while the new principal's policy is fetched`), 
        i("tengu_policy_limits_principal_changed", {
          next_kind: c(n.kind),
          reason: c("identity_kept")
        }), this.askedKey = v, this.fetchAcrossBoundaryKeepingVerdict(e).catch(y => d(y)), 
        "changed";
      }
      return t("Policy limits: the credential now belongs to a different principal than the loaded policy; reloading as an account change"), 
      i("tengu_policy_limits_principal_changed", {
        next_kind: c(n.kind),
        reason: c("identity")
      }), this.refresh({
        observedBoundary: !0
      }).catch(v => d(v)), "changed";
    }
    if (this.cyclesInFlight > 0) return this.principalCheckOwed = !0, "unchanged";
    let p = ee(n), h = we(n);
    if (h === this.askedKey) return "unchanged";
    if (this.verdictPrincipalIdentity === null) {
      if (H0() === null) {
        if (!by() || this.loadingCompleteResolve !== null) return "unchanged";
        return this.askedKey = h, this.releaseLoadingPromise(), this.initializeLoadingPromise(), 
        this.loadFor(e).catch(v => d(v)), "started";
      }
      return this.repollFor(n, h, "unattributed", e);
    }
    if (p !== this.verdictKey) return t("Policy limits: a new bearer for the loaded policy (a declared organization's new bearer, one keyed on itself replacing another, a healed store); keeping the verdict and re-polling"), 
    this.repollFor(n, h, n.bearerDigest !== void 0 || s ? "bearer" : "reclassified", e);
    return "unchanged";
  }
  scheduleUnclassifiedRecheck() {
    if (this.unclassifiedRecheckTimer !== null) return;
    this.unclassifiedRecheckTimer = setTimeout(() => {
      this.unclassifiedRecheckTimer = null, this.onCredentialMayHaveChanged();
    }, Ci), this.unclassifiedRecheckTimer.unref?.();
  }
  repollFor(e, r, n, o) {
    return this.askedKey = r, i("tengu_policy_limits_principal_changed", {
      next_kind: c(e.kind),
      reason: c(n)
    }), this.fetchAndLoad("policy_limits_poll", o).catch(s => d(s)), "repolled";
  }
  async fetchAcrossBoundaryKeepingVerdict(e) {
    let r = this.sessionGeneration, n = this.verdictPrincipalIdentity;
    xtn(), cHt(), dHt(), this.prefetchSlot.clear(), this.renewOAuthRefreshLatch(), this.cyclesInFlight++;
    try {
      if (await this.removeUnstampedBody().catch(o => d(o)), this.sessionGeneration === r) await this.fetchAndLoad("policy_limits_poll", e).catch(o => d(o));
    } finally {
      this.endCycle(r);
    }
    if (this.sessionGeneration !== r || this.verdictPrincipalIdentity !== n) return;
    t("Policy limits: the new principal's fetch installed nothing; dropping the previous principal's verdict as an account change"), 
    await this.refresh({
      observedBoundary: !0
    });
  }
  async poll(e = "hourly_poll") {
    if (!by()) return;
    let r = H0(), n = r ? _(r) : null;
    try {
      if (await this.checkPrincipal(e) !== "unchanged") return;
      if (this.cyclesInFlight > 0) return;
      await this.fetchAndLoad("policy_limits_poll", e);
      let o = H0();
      if ((o ? _(o) : null) !== n) t("Policy limits: Changed during background poll");
    } catch {}
  }
  startBackgroundPolling() {
    if (this.used = !0, this.poller !== null) return;
    if (!by()) return;
    if (this.poller = sjn(() => void this.poll(), li, {
      unref: !0
    }), !this.cleanupRegistered) this.cleanupRegistered = !0, bt(() => this.stopBackgroundPolling());
  }
  stopBackgroundPolling() {
    this.poller?.[Symbol.dispose](), this.poller = null, this.resetAcceleratedRecovery();
  }
}

class aRs {
  client=void 0;
}

var aGs = new K(() => new aRs);

function me() {
  return aGs.of(B().host);
}

function H() {
  let e = me();
  return e.client ??= new lSo, e.client;
}

function dSo(e) {
  let r = me();
  if (r.client === void 0) {
    r.client = new lSo(e);
    return;
  }
  let n = r.client.adoptStartupServices(e);
  switch (n) {
   case "nothing to adopt":
    t("Policy limits: default client already constructed; start-up composition skipped");
    return;

   case "already used":
    t("Policy limits: start-up composition came after the bare default client was used; it keeps running without the backend and credentials store", {
      level: "warn"
    }), i("tengu_policy_limits_late_composition", {});
    return;

   case "already composed":
    t("Policy limits: default client already composed; later start-up composition skipped");
    return;

   case "adopted":
    t("Policy limits: start-up services adopted by the default client");
    return;

   default:
  }
}

function x6s(e) {
  H().recordStartupAwaitResult(e);
}

async function Hkr() {
  let e = performance.now(), r;
  try {
    let n = H();
    n.ensureLoadRequested({
      startupAwaited: !0
    }), r = await n.awaitColdStartVerdict();
  } catch (n) {
    d(n), r = "timed_out";
  }
  return Q6e("policy", r, {
    since: e
  }), r;
}

function wtn() {
  return H().coldStartTimedOut;
}

function cSo() {
  return H().coldStartVerdictWait;
}

function oHt() {
  Q6e("policy", "not_awaited");
  try {
    if (by()) H().ensureLoadRequested({
      startupAwaited: !1
    });
  } catch (e) {
    d(e);
  }
}

async function nut() {
  let e = performance.now();
  try {
    if (!Yxe()) return oHt(), "skipped";
  } catch (r) {
    return d(r), Q6e("policy", "timed_out", {
      since: e
    }), "timed_out";
  }
  return Hkr();
}

function P6s() {
  return H();
}

async function I6s() {
  let e = me().client;
  if (e !== void 0) await e._settleCyclesForTesting();
}

function O6s() {
  H().stop(), bjn(), me().client = void 0, d0s(), VSo(), RSo(), xSo();
}

function vtn() {
  H().initializeLoadingPromise();
}

function mv() {
  return H().waitForLoad();
}

function uSo() {
  H().logCacheStateAtFirstPrompt();
}

function M6s(e) {
  return H().admitPrefetched(e);
}

function pSo() {
  return me().client?.isVerdictOfLiveCredential() ?? !1;
}

function fSo(e = {}) {
  return H().load(e);
}

function mSo() {
  H().prefetch();
}

function Etn() {
  return H().refresh();
}

function gSo() {
  return H().clearCache();
}

function H6s() {
  H().startBackgroundPolling();
}

function D6s() {
  H().stopBackgroundPolling();
}

function L6s() {
  H().stop();
}

var Ci = jkr + 1e3;

function fe(e) {
  return e !== null && e.unclassified !== !0;
}

function ee(e) {
  let r = _pe(e);
  return e.bearerDigest === void 0 ? r : `${r}:${e.bearerDigest}`;
}

function je() {
  let e = s5();
  return e === null ? null : ee(e);
}

function we(e) {
  let r = Sn()?.accessToken;
  return `${ee(e)}#${r ? bpe(r) : ""}`;
}

export { oSo, sjn, _tn, nRs, rRs, oRs, Z8, Q6e, Rkr, btn, sRs, Stn, xkr, ijn, Pkr, Ikr, ajn, ljn, Okr, tut, Mkr, sSo, R6s, iRs, rHt, iGs, Yxe, iSo, aSo, lSo, aRs, aGs, dSo, x6s, Hkr, wtn, cSo, oHt, nut, P6s, I6s, O6s, vtn, mv, uSo, M6s, pSo, fSo, mSo, Etn, gSo, H6s, D6s, L6s };
