// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le, ys } from "./chunk-2v9tfgc3.js";

import { ve, he } from "./chunk-3pqddg8f.js";

import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { ute } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { Ct } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { kp, hu, $Oe, Mj, Hj, IE, Tp, cHo, dL, uHo } from "./chunk-5brm0azz.js";

import { Y0, dn } from "./chunk-nnrb0acr.js";

import { Y_, fe, iIr, Wp, f1e, Nie, Lve } from "./chunk-dd98x6x7.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { NPe, Cr, k } from "./chunk-xywp7esx.js";

import { Qa } from "./chunk-nc0jxmkt.js";

import { dve, Bc, F8e } from "./chunk-f1zpf9me.js";

import { ee, eUe } from "./chunk-kq1bg4dg.js";

import { lZ, GF, awe } from "./chunk-kd22gz0e.js";

import { EMt, kMt, lk } from "./chunk-ann91fyn.js";

import { mMt, $xe, wt } from "./chunk-hk8p0fqv.js";

import { pTs } from "./chunk-pzbnz6s9.js";

import { gUe, Kkr, Pse, by, e9, Otn, on, yUe, sp, _Ue, jS } from "./chunk-b47tzzqx.js";

import { fh, aZ } from "./chunk-ewk363e4.js";

import { ope, d1n } from "./chunk-yxkwn8vg.js";

import { bZ } from "./chunk-g5zagpgq.js";

var G = "/_warmup", x = 3e3, V = 6e5, q = 262144;

function sTs(e) {
  let n = ee();
  return n.contentHostEgressDenied.has(e.env) || n.contentHostEgressUnanswered.has(F8e(e));
}

function J(e) {
  let n = ee().contentHostEgressProbed.get(e);
  return n !== void 0 && Date.now() - n < V;
}

async function P6e(e, n) {
  let r = ee(), o = F8e(e);
  if (he()) {
    r.contentHostEgressProbed.delete(o), r.contentHostEgressUnanswered.add(o);
    return;
  }
  if (r.contentHostEgressDenied.has(e.env)) {
    r.contentHostEgressProbed.delete(o), r.contentHostEgressUnanswered.add(o);
    return;
  }
  if (J(o)) return;
  let s = r.contentHostEgressInFlight.get(o);
  if (s !== void 0) return s.catch(l => {
    if (n.aborted) throw l;
    return P6e(e, n);
  });
  let f = z(e, o, n).finally(() => {
    r.contentHostEgressInFlight.delete(o);
  });
  return r.contentHostEgressInFlight.set(o, f), f;
}

async function z(e, n, r) {
  let o = ee(), s = () => {
    o.contentHostEgressUnanswered.delete(n), o.contentHostEgressProbed.set(n, Date.now());
  }, f = p => {
    t(`[artifact] egress probe of ${n}: ${p}; reading the host as unreachable for this check`), 
    o.contentHostEgressProbed.delete(n), o.contentHostEgressUnanswered.add(n);
  }, l = () => {
    o.contentHostEgressProbed.delete(n), o.contentHostEgressUnanswered.add(n), o.contentHostEgressDenied.add(e.env);
  }, u;
  try {
    u = await Qa.get(`${n}${G}`, {
      signal: AbortSignal.any([ r, AbortSignal.timeout(x) ]),
      timeout: x,
      maxRedirects: 0,
      maxContentLength: q,
      responseType: "text",
      validateStatus: () => !0
    });
  } catch (p) {
    if (r.aborted) throw p;
    if (awe(p)) return l();
    return f(ute(p) ? "an answer larger than the cap" : "no answer");
  }
  if (GF(u.status, u.headers)) return l();
  let h = () => lZ(u.headers, u.data, p => p);
  if (!(u.status >= 200 && u.status < 300 || u.status === 403 && $xe(u.headers, h()) || u.status === 404 && mMt(u.headers, h()))) return f(`unrecognised HTTP ${u.status}`);
  return s();
}

var _ = "classifier", A = "person", iTs = "classifier";

function Ew(e) {
  switch (e.operation) {
   case "delete":
    return d("delete", "person", "this_call", "known");

   case "change_access":
    return d("access_change", "person", "this_call", "known");

   case "standing_job":
    return e.turnStartedByHuman ? d("standing_job", "classifier", "artifact", "known") : d("standing_job", "classifier", "this_call", "unattended");

   case "write":
    {
      if (!e.turnStartedByHuman) {
        if ((e.routineWrite === !0 || e.commentWrite === !0) && e.public === !1 && e.canWrite === !0 && e.invitedByOtherOrg !== !0) return {
          ask: !1,
          foreignRead: !1
        };
        return d("public_change", "classifier", "this_call", "unattended");
      }
      if (e.public === !0) return d("public_change", "classifier", "artifact", "known");
      if (e.public === void 0) return d("public_change", "classifier", "this_call", "facts_missing", "public");
      if (e.invitedByOtherOrg === !0) return {
        ...d("public_change", "classifier", "artifact", "known"),
        about: "someone_else"
      };
      return {
        ask: !1,
        foreignRead: !1
      };
    }

   case "read":
    {
      if (e.owned === !0) return {
        ask: !1,
        foreignRead: !1
      };
      if (e.outsideOrg === !0) return {
        ...d("foreign_read", A, e.turnStartedByHuman ? "artifact" : "this_call", "known"),
        about: "outside_org"
      };
      if (e.owned === void 0) return d("foreign_read", _, "this_call", "facts_missing", "owned");
      if (e.networkOff === void 0) return d("foreign_read", _, "this_call", "facts_missing", "networkOff");
      if (e.networkOff) return d("foreign_read", _, e.turnStartedByHuman ? "artifact" : "this_call", "known");
      return {
        ask: !1,
        foreignRead: !0
      };
    }
  }
}

var Q = !0;

function aTs(e) {
  if (!Q || e.public === !1) return {
    ask: !1,
    foreignRead: !1
  };
  return e.public === !0 ? d("public_change", "classifier", "this_call", "known") : d("public_change", "classifier", "this_call", "facts_missing", "public");
}

function d(e, n, r, o, s) {
  return {
    ask: !0,
    class: e,
    answeredBy: n,
    remember: r,
    basis: o,
    ...s !== void 0 && {
      missing: s
    }
  };
}

function o1n(e) {
  return e.ask && e.remember === "artifact";
}

function pct(e) {
  return e.endpoint ? `${e.class}:endpoint` : e.class;
}

function dK(e, n) {
  return ee().askClassConsent.has(g(e, n));
}

function lTs(e, n, r = !1) {
  let o = ee();
  if (o.askClassConsent.add(g(e, n)), r) o.askClassPersonConsent.add(g(e, n));
}

function GSe(e, n, r = !1) {
  let o = pct(e);
  return e.informedOnly ? d_o(n) : e.answeredBy === "person" || r ? cMt(o, n) : dK(o, n);
}

function dTs(e) {
  ee().askClassOutsideOrgConsent.add(g("foreign_read", e));
}

function d_o(e) {
  return ee().askClassOutsideOrgConsent.has(g("foreign_read", e));
}

var X = 512;

function I6e(e, n, r) {
  if (e.toolUseId === void 0) return;
  let o = ee().askNamedOtherOrg, s = o.get(e.toolUseId), f = r ? n : [], l = s === void 0 ? f : f.filter(u => s.includes(u));
  if (o.delete(e.toolUseId), o.set(e.toolUseId, l), o.size > X) {
    let u = o.keys().next().value;
    if (u !== void 0) o.delete(u);
  }
}

function wEr(e) {
  if (e.toolUseId !== void 0) ee().askNamedOtherOrg.delete(e.toolUseId);
}

function fct(e, n) {
  return e.toolUseId !== void 0 && (ee().askNamedOtherOrg.get(e.toolUseId) ?? []).includes(n);
}

function cMt(e, n) {
  return ee().askClassPersonConsent.has(g(e, n));
}

var Z = [ "artifactDbReadConsentSlugs", "artifactDbReadHumanConsentSlugs", "artifactReadConsentSlugs", "artifactAssetUploadConsentSlugs", "artifactAssetUploadHumanConsentSlugs", "artifactAssetReadConsentSlugs", "artifactAssetReadHumanConsentSlugs", "artifactOutsideOrgConsentSlugs", "artifactHandlersReadConsentSlugs", "artifactHandlersReadHumanConsentSlugs", "artifactHandlersWriteConsentSlugs", "artifactHandlersWriteHumanConsentSlugs" ], cTs = [ ...Z, "artifactRoomJoinConsentSlugs", "artifactPlanPublishConsentPaths", "artifactWatchApproved", "artifactDbWriteApproved", "artifactDbWriteHumanApproved", "artifactReadPageDataApproved", "artifactReadPageDataHumanApproved" ], te = Object.freeze({});

function VSe(e) {
  return (e.artifactConsentEpoch ?? 0) === ee().accountEpoch ? e : te;
}

function Y8(e, n, r) {
  return VSe(e)[n]?.[r] === !0;
}

function s1n(e, n) {
  return Y8({
    artifactConsentEpoch: e.consentEpoch.get(),
    artifactReadConsentSlugs: e.sharedReadConsent.get()
  }, "artifactReadConsentSlugs", n);
}

function O6e() {
  let {accountEpoch: e, conversationEpoch: n} = ee();
  return `${e}:${n}`;
}

function g(e, n) {
  return `${O6e()}:${e}:${n}`;
}

var m = " \xb7 web fetch, design sync and Channels wait for it";

function S() {
  let e = jS();
  if (e === null) return "nothing";
  return e === gUe ? "unrestricted" : "stale_cache";
}

function i1n() {
  let e = e9();
  if (e !== void 0) return {
    state: "ineligible",
    reason: e
  };
  let n = Pse(), r = jS() !== null, o = Otn("allow_web_fetch");
  if (n === null) return {
    state: "pending",
    hasCache: r,
    egressKeysWithheld: o
  };
  return {
    state: "settled",
    outcome: n,
    served: S(),
    egressKeysWithheld: o
  };
}

function ne(e) {
  switch (e) {
   case "third_party_provider":
    return "not fetched: this session doesn't connect to the Anthropic API directly (Bedrock, Vertex, Foundry, or a gateway)";

   case "custom_base_url":
    return "not fetched with a custom ANTHROPIC_BASE_URL";

   case "no_auth":
    return "not fetched: no API key or claude.ai sign-in for the policy lookup (apiKeyHelper keys are not used for it)";

   case "oauth_no_inference_scope":
    return "not fetched: this sign-in lacks the inference scope";

   case "prosumer_oauth":
    return "not applicable to Pro and Max accounts";
  }
}

function re(e, n, r, o) {
  let s = o ? "" : " \xb7 Retried hourly while Claude Code runs; restart to retry now";
  switch (e) {
   case "auth_failed":
    if (n === 403) return `${r}, or a proxy in front of it, refused the request (HTTP 403) \xb7 Fix: if you use a web proxy make sure it allows ${r}; if your organization restricts by IP, check this machine is allowed${s}`;
    if (n === 401 && o) return `${r} rejected this session's sign-in (HTTP 401) while it was being refreshed \xb7 Claude Code is retrying with the refreshed sign-in`;
    return n ? `${r} rejected this session's credentials (HTTP ${n}) \xb7 Fix: sign in again or check the API key this session uses` : "Couldn't attach credentials to the request \xb7 Fix: sign in, set the API key this session should use, or check your workload-identity setup";

   case "timeout":
    return `${r} took too long to answer \xb7 Fix: check your network or proxy${s}`;

   case "network_error":
    return `Couldn't reach ${r} \xb7 Fix: check your network or proxy${s}`;

   case "parse_failed":
    return `The answer from ${r} couldn't be read, either because a proxy replaced it or because this version of Claude Code doesn't understand it \xb7 Fix: check your proxy settings, or update Claude Code${s}`;

   case "spurious_304":
    return `${r} confirmed a cached copy from a previous sign-in, which this session can't use${s}`;

   case "stale_tunnel_credential":
    return `The machine running claude ssh changed credentials while ${r} was answering, so that answer wasn't used${s}`;

   case "request_failed":
    if (n === 404) return `The request for ${dve} on ${r} got a 404, which usually means a proxy or gateway between you and the API isn't forwarding that path \xb7 Fix: ask your network admin to allow it${s}`;
    if (n === 304) return `A caching proxy between you and ${r} answered in place of the API (HTTP 304) \xb7 Fix: ask your network admin to stop caching ${dve}${s}`;
    if (n === 407) return `Your proxy asked for authentication before it would forward the request to ${r} (HTTP 407) \xb7 Fix: check your proxy credentials${s}`;
    return n ? `HTTP ${n} on the request to ${r}${s}` : `Couldn't complete the request to ${r}; if a proxy intercepts TLS, its certificate must be trusted (NODE_EXTRA_CA_CERTS) \xb7 Fix: check your network or proxy${s}`;
  }
}

function a1n(e) {
  switch (e.state) {
   case "ineligible":
    return ne(e.reason);

   case "pending":
    return e.hasCache ? `Using the copy on disk \xb7 not refreshed yet this session${e.egressKeysWithheld ? m : ""}` : `Not loaded yet${e.egressKeysWithheld ? m : ""} \xb7 if this persists, check your network or proxy`;

   case "settled":
    {
      let {outcome: n} = e;
      if (n.success) return `Loaded from ${n.host}`;
      let r = re(n.errorCode, n.httpStatus, n.host, n.retrying), o = n.retrying ? " yet, still retrying" : "", s = e.egressKeysWithheld ? ", web fetch, design sync, Channels" : "";
      switch (e.served) {
       case "stale_cache":
        return `Couldn't refresh${o} \xb7 using the last copy on this machine${e.egressKeysWithheld ? m : ""} \xb7 ${r}`;

       case "unrestricted":
        return e.egressKeysWithheld ? `Couldn't load${o} \xb7 no restrictions applied this session, except that web fetch, design sync and Channels stay off until it loads \xb7 ${r}` : `Couldn't load${o} \xb7 no restrictions applied this session \xb7 ${r}`;

       case "nothing":
        return `Couldn't load${o} \xb7 features that must check it first (Remote Control, cloud sessions, /feedback${s} and others) stay off, and some need a restart once it loads \xb7 ${r}`;
      }
    }
  }
}

function uTs(e) {
  switch (e.state) {
   case "pending":
    return !1;

   case "settled":
    return !e.outcome.success;

   case "ineligible":
    return e.reason === "third_party_provider" || e.reason === "custom_base_url";
  }
}

var oe = [ "policySettings", "flagSettings", "userSettings" ], ie = [ "localSettings", "projectSettings" ];

function L(e) {
  let n = [];
  if (e.envDisableVar !== void 0 && ae(e.envDisableVar)) n.push({
    layer: "env",
    via: "envVar"
  });
  let r;
  for (let l of oe) {
    let u = O(l, e);
    if (v(n, l, l === "policySettings" ? [ ...u, ...Nie() ] : u, e), r === void 0 && u.some(h => h?.[e.enableKey] === !0) && (l !== "policySettings" || Lve())) r = l;
  }
  let o = n.some(l => l.layer === "env" || l.layer === "policySettings" || l.layer === "flagSettings");
  for (let l of ie) v(n, l, O(l, e), e);
  let s = n.some(l => l.layer === "localSettings" || l.layer === "projectSettings");
  return {
    enabled: n.length === 0 && (e.defaultOn || r !== void 0),
    decidedBy: n[0]?.layer ?? r ?? "default",
    offSources: n,
    lockedAboveUser: o,
    userControllable: !o && !s && dn("userSettings")
  };
}

function O(e, n) {
  if (e === "policySettings") return [ ...Wp(), fe("policySettings") ];
  if (!dn(e)) return [];
  if (e === "localSettings") return [ fe(e), iIr() ];
  let r = fe(e);
  if (e === "projectSettings" && se(r, n) && dn("userSettings") && Y_()) return [];
  return [ r ];
}

function se(e, n) {
  return e?.[n.enableKey] !== void 0 || n.legacyDisableKey !== void 0 && e?.[n.legacyDisableKey] !== void 0;
}

function v(e, n, r, o) {
  if (r.some(f => f?.[o.enableKey] === !1)) e.push({
    layer: n,
    via: "enableKey"
  });
  let s = o.legacyDisableKey;
  if (s !== void 0 && r.some(f => f?.[s] === !0)) e.push({
    layer: n,
    via: "legacyDisableKey"
  });
}

function ae(e) {
  if (a[e] || Le(E(fh(), e)) || Le(f1e(e)) || Le(E(aZ(), e))) return !0;
  for (let n of [ "flagSettings", "userSettings" ]) if (dn(n) && Le(E(fe(n)?.env, e))) return !0;
  return !1;
}

function E(e, n) {
  if (e === void 0) return;
  if (n in e) return e[n];
  let r = T.get(e);
  if (r?.has(n)) return r.get(n);
  let o = Object.entries(e).find(([s]) => s.toUpperCase() === n)?.[1];
  if (Object.isFrozen(e)) if (r) r.set(n, o); else T.set(e, new Map([ [ n, o ] ]));
  return o;
}

var T = new WeakMap;

var F = {
  enableKey: "enableArtifact",
  legacyDisableKey: "disableArtifact",
  envDisableVar: "CLAUDE_CODE_DISABLE_ARTIFACT",
  defaultOn: !0
};

function uMt() {
  return L(F);
}

function y() {
  return !uMt().enabled;
}

function vEr() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return Hj() || e === "claude-code-github-action" || e === "mcp";
}

function I(e) {
  return e === "local-agent" || e?.startsWith("claude-coworker") === !0;
}

function VT() {
  return IE() === "local-agent" && Tp() && !dL() && uHo();
}

function GY() {
  return $Oe() && cHo() || VT();
}

function XFe() {
  return Mj();
}

function uv(e) {
  return e !== void 0 && XFe() && sTs(e);
}

function Nxe(e, n) {
  return !e && (uv(n) || rpe(n.slug));
}

function x0(e) {
  return e !== void 0 && e.outsideOrgReader === !0 && lk();
}

function rpe(e) {
  return A === "person" && x0(wt(e));
}

function lC(e) {
  return x0(e) || pMt(e);
}

function pMt(e) {
  return e !== void 0 && e.external === !0 && lk();
}

function EEr(e) {
  return e !== void 0 && e.probeFailed !== !0 && e.external !== !0 && (e.outsideOrgReader === !1 || e.role === "owner");
}

function le() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  if (e === "local-agent" && VT()) return !1;
  return I(e);
}

function Cen() {
  return I(IE()) && !VT();
}

function ce() {
  return EMt() && ue();
}

function ue() {
  return U() === null;
}

function U() {
  if (Oe() !== "firstParty") return "third_party_provider";
  if (Ct()) return "essential_traffic_only";
  if (ys(a.CLAUDE_CODE_ARTIFACT)) return "artifact_env_off";
  if (!Le(a.CLAUDE_CODE_ARTIFACT) && !Le(a.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT) && vEr()) return "sdk_default_off";
  return null;
}

function W() {
  return EMt() && R();
}

function R() {
  return K() === null;
}

function K() {
  if (le()) return "surface_excluded";
  return U();
}

function S6s() {
  if (y()) return !1;
  return W();
}

function c_o() {
  return a.CLAUDE_CODE_ARTIFACT_ASSETS === void 0 && RO() && Bc() === null && !a.CLAUDE_CODE_REMOTE;
}

function de() {
  let e = e9();
  return e === void 0 || e === "prosumer_oauth" || e === "no_auth";
}

function N() {
  return Le(a.CLAUDE_CODE_ARTIFACT) && !1 || k("tengu_cobalt_plinth", de());
}

function M() {
  return N() && fMt();
}

function ge() {
  return B() === null;
}

function B() {
  if (!N()) return "growthbook_off";
  if (kMt() || fMt()) return Y(), null;
  if (l1n() !== null) return null;
  return "admin_policy";
}

function l1n() {
  if (kMt()) return null;
  if (!P(Cr())) return null;
  let e = sp("allow_cobalt_plinth");
  if (e !== "cache_miss" && e !== "route_missing") return Y(), null;
  if (_Ue("allow_cobalt_plinth")) return null;
  let n = e === "route_missing" ? "policy_route_missing" : "policy_fetch_failed", r = Pse();
  if (r !== null && !r.success && ye(r)) return ee().artifactPolicyFetchAnswer = r, 
  {
    cause: n,
    outcome: r
  };
  let o = kEr();
  return o === null ? null : {
    cause: n,
    outcome: o
  };
}

function kEr() {
  return eUe() ? ee().artifactPolicyFetchAnswer : null;
}

function u_o() {
  if (_Ue("allow_cobalt_plinth")) return "org_denied";
  let e = sp("allow_cobalt_plinth");
  return e === "org_denied" || e === "latched" ? e : null;
}

function ye(e) {
  if (!e.retrying) return !0;
  if (e.errorCode === "auth_failed" && e.httpStatus === 401 || e.errorCode === "spurious_304") return !1;
  return !Kkr(e);
}

function Y() {
  if (eUe()) ee().artifactPolicyFetchAnswer = null;
}

function RO() {
  if (Bc() !== null) return PP();
  return EMt() && PP() && fMt();
}

function PP() {
  return TEr() === null;
}

function TEr() {
  if (y()) return "switched_off";
  if (Bc() !== null) return null;
  return K() ?? B();
}

function Ren() {
  if (y()) return !1;
  if (!ce()) return !1;
  return M();
}

function w() {
  let e = new Set, n = !1, r = !1;
  for (let s of uMt().offSources) switch (s.layer) {
   case "env":
    e.add("env");
    break;

   case "userSettings":
    e.add(s.via === "legacyDisableKey" ? "setting" : "config_pref");
    break;

   case "policySettings":
   case "flagSettings":
    n = !0;
    break;

   case "localSettings":
   case "projectSettings":
    r = !0;
    break;
  }
  if (n) e.delete("setting"), e.delete("config_pref");
  if (e.size > 1) return "multiple";
  let [o] = e;
  if (o !== void 0) return o;
  return n || r ? "admin_managed" : null;
}

function be() {
  return w() !== null && W() && M();
}

function p_o() {
  let e = ee();
  if (e.artifactDisabledSessionEvaluated) return;
  if (Y0() === null) return;
  if (e.artifactDisabledSessionEvaluated = !0, !be()) return;
  let n = w();
  if (n === null) return;
  C("tengu_artifact_disabled_session", {
    mechanism: c(n),
    session_interactivity: !ve() || kp() === "claude-vscode" || hu() ? b("interactive") : b("noninteractive")
  });
}

function f_o(e) {
  if (!uHo() || IE() !== "local-agent" || dL()) return;
  let n = ee(), r = e === null && !kMt() && !fMt() && l1n() !== null, o = r ? "admin_policy" : e;
  if (o === null) {
    n.artifactRegisteredSeen = !0;
    let l = n.artifactWithheldReasonsLogged.at(-1);
    if (l === void 0 || n.artifactWithheldRecoveryLogged) return;
    n.artifactWithheldRecoveryLogged = !0, C("tengu_artifact_tool_recovered", {
      withheld_reason: c(l),
      ...D(l)
    });
    return;
  }
  if (Y0() === null) return;
  let s = _e(o), f = n.artifactWithheldReasonsLogged.includes(s);
  if (f && (!r || n.artifactWithheldListedLogged)) return;
  if (!f) n.artifactWithheldReasonsLogged.push(s);
  if (r) n.artifactWithheldListedLogged = !0;
  C("tengu_artifact_tool_withheld", {
    reason: c(s),
    off_mechanism: pe(s === "switched_off" ? w() : null),
    after_registered: n.artifactRegisteredSeen,
    tool_listed: r,
    ...D(s)
  });
}

function D(e) {
  if (e !== "org_policy_denied" && e !== "compliance_taint" && e !== "policy_cache_miss" && e !== "policy_route_missing") return {};
  let n = Pse(), r = S(), o = r === "nothing" ? "none" : r === "unrestricted" ? "fail_open" : n?.success ? "network" : "disk", s = !by() ? "ineligible" : n === null || !n.success && n.retrying ? "pending" : n.success ? "ok" : "failed";
  return {
    policy_source: c(o),
    policy_fetch: c(s)
  };
}

function w6s() {
  return ee().heldStartupTelemetry ??= [], {
    flush: H,
    [Symbol.dispose]: H
  };
}

function H() {
  let e = ee(), n = e.heldStartupTelemetry;
  e.heldStartupTelemetry = null;
  for (let r of n ?? []) r();
}

function C(...e) {
  let n = ee().heldStartupTelemetry;
  if (n === null) {
    i(...e);
    return;
  }
  n.push(() => i(...e));
}

function _e(e) {
  switch (e) {
   case "surface_excluded":
    return Tp() ? "surface_excluded" : "nested_child_session";

   case "admin_policy":
    {
      if (!P(Cr())) return "subscription_ineligible";
      let n = jS();
      if (n === null) return yUe() ? "policy_route_missing" : "policy_cache_miss";
      return n.restrictions.allow_cobalt_plinth === void 0 ? "compliance_taint" : "org_policy_denied";
    }

   default:
    return e;
  }
}

function AEr() {
  return F.defaultOn;
}

function Ae() {
  return R() && ge();
}

function xen() {
  return Ae() && uMt().userControllable;
}

function fMt() {
  return me();
}

function me() {
  if (kMt()) return j() === null;
  if (!P(Cr())) return !1;
  return on("allow_cobalt_plinth");
}

function P(e) {
  return e === "team" || e === "enterprise" || e === "pro" || e === "max" || e == null;
}

function m_o() {
  return j();
}

function j() {
  if (!kMt()) return null;
  let e = NPe();
  if (e === null) return "plan_unreadable";
  if (e !== "pro" && e !== "max") return "org_policy_unverifiable";
  if (!by()) return "policy_unavailable";
  if (on("allow_cobalt_plinth")) return null;
  let n = sp("allow_cobalt_plinth") ?? "org_denied";
  switch (n) {
   case "org_denied":
   case "latched":
   case "cache_miss":
    return n;

   case "route_missing":
    return "policy_route_missing";
  }
}

function mse() {
  return RO() && k("tengu_gable_onyx_sluice", !1);
}

pTs(mse);

function g_o() {
  return PP() && k("tengu_gable_onyx_sluice", !1);
}

function h_o() {
  return !1;
}

function y_o() {
  return !1;
}

function CEr() {
  return !1;
}

function __o() {
  return mse() && !bZ(ope) && !k("tengu_cedar_transom", !1);
}

function b_o() {
  return CEr() && !bZ(d1n);
}

function S_o() {
  return !1;
}

function Pen() {
  return k("tengu_cobalt_plinth_thrift", !1) === !0;
}

var Se = "tengu_russet_pergola";

function w_o() {
  return !1;
}

function REr() {
  return !1;
}

function v_o() {
  return REr();
}

function Ee() {
  return !1;
}

function JFe() {
  let e = ee();
  if (e.prReviewComposeLatch === null) e.prReviewComposeLatch = Ee();
  return e.prReviewComposeLatch;
}

function KSe() {
  return RO();
}

function QFe() {
  return !y() && R();
}

export { sTs, P6e, iTs, Ew, aTs, o1n, pct, dK, lTs, GSe, dTs, d_o, I6e, wEr, fct, cMt, cTs, VSe, Y8, s1n, O6e, i1n, a1n, uTs, uMt, vEr, VT, GY, XFe, uv, Nxe, x0, rpe, lC, pMt, EEr, Cen, S6s, c_o, l1n, kEr, u_o, RO, PP, TEr, Ren, p_o, f_o, w6s, AEr, xen, fMt, m_o, mse, g_o, h_o, y_o, CEr, __o, b_o, S_o, Pen, w_o, REr, v_o, JFe, KSe, QFe };
