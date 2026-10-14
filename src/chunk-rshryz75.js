// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { Fn } from "./chunk-3pqddg8f.js";

import { Ht } from "./chunk-nvtwm272.js";

import { gr } from "./chunk-z52kmxx4.js";

import { NC } from "./chunk-y752zmas.js";

import { jwe, $a, yk, km, Sn, vt, Kf, UZ, sa, Ig, zGn, In, k, z_, C5, ce, v8e } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { OX, t } from "./chunk-kawq2919.js";

import { k$t, yHr } from "./chunk-6ah1819r.js";

import { ao } from "./chunk-w0q7jqcp.js";

import { bVn } from "./chunk-hmce8a0s.js";

import { Y0 } from "./chunk-nnrb0acr.js";

import { Tv, b9e, Oe, Yn, FIe, vf } from "./chunk-cjt10y7b.js";

import { KH, bfe } from "./chunk-46phtgr7.js";

import { Z0t, dIe, sfe, rft } from "./chunk-f1zpf9me.js";

import { aHt, AH, Ptn, e9, t9, on, Pz, Ise, yUe, WSo, sp, kjn, uHt, GSo, jS, n9 } from "./chunk-b47tzzqx.js";

import { O7, OSr, Amo } from "./chunk-tpkse3bk.js";

import { bve } from "./chunk-g4dysb0v.js";

function PF() {
  if (!Yn()) return !1;
  if (AH() !== void 0) return !0;
  if (a.ANTHROPIC_UNIX_SOCKET) return !1;
  return vf();
}

function jlt() {
  return PF() && c() && (k("tengu_ccr_bridge", !1) || g());
}

function g() {
  if (Ig() || a.DISABLE_GROWTHBOOK || k$t() !== "no-telemetry" || bVn() || !PF() || !p() || !h()?.organizationUuid || z()) return !1;
  try {
    let e = Sn(), o = e?.refreshToken ? e.subscriptionType ?? null : null;
    return o !== null && w.includes(o);
  } catch {
    return !1;
  }
}

var w = [ "pro", "max", "team", "enterprise" ];

function c7t() {
  if (jlt()) return null;
  if (!f()) return "not_signed_in";
  if (!c()) return "api_key_auth";
  if (!p()) return "no_profile_scope";
  return "not_in_rollout";
}

function u() {
  return !1;
}

function az() {
  return Y0()?.settings.disableRemoteControl === !0;
}

function kR() {
  if (u()) return !0;
  if (az()) return !1;
  return !S0() && jlt();
}

function cmo() {
  if (u()) return !0;
  return !az() && !S0() && PF();
}

async function umo() {
  return await ESr() === null;
}

async function ESr() {
  if (u()) return null;
  if (az()) return "managed_disabled";
  if (!PF()) return "not_first_party";
  if (S0()) return "cloud_session";
  if (!c()) return f() ? "not_subscription_auth" : "not_signed_in";
  if (g() || await z_("tengu_ccr_bridge")) return null;
  if (!Ig()) return "flags_disabled";
  return sa() ? "gate_off" : "flags_unreachable";
}

var T = "Remote Control is disabled by your organization's policy. Contact your organization admin for access.", L = 864e5, M = 2147483647;

function I() {
  return n9();
}

function K$n() {
  let {featureLabel: e, verb: o} = t9("allow_remote_control");
  return Z0t(e, o, KH(), T);
}

function sxe(e) {
  let o = e ? [ "allow_remote_control", "allow_remote_sessions" ] : [ "allow_remote_control" ];
  try {
    for (let n of o) {
      let r = sp(n);
      switch (r) {
       case null:
       case "cache_miss":
       case "route_missing":
        continue;

       case "latched":
        {
          if (!Ise() && !B()) continue;
          let {featureLabel: l, verb: d} = t9(n);
          return {
            policy: n,
            kind: r,
            detail: dIe(l, d)
          };
        }

       case "org_denied":
        if (jS()?.restrictions[n]?.allowed !== !1 && !Ise() && !B()) continue;
        return {
          policy: n,
          kind: r,
          detail: n === "allow_remote_control" ? Amo : "Session mirroring was turned off by your organization's policy (allow_remote_sessions)."
        };

       default:
        return {
          policy: n,
          kind: "org_denied",
          detail: Amo
        };
      }
    }
    return null;
  } catch {
    return null;
  }
}

function B() {
  let e = e9();
  return e !== void 0 && Ptn.has(e);
}

var i = (e, o) => ({
  reason: o,
  code: e,
  orgPolicyDenied: !1
});

async function _It() {
  if (u()) return null;
  if (!PF()) return i("not_first_party", V());
  if (S0()) return i("cloud_session", "Remote Control is not available inside a cloud session.");
  if (az()) return i("managed_disabled", O7);
  if (!f()) return i("not_signed_in", "Remote Control requires a claude.ai subscription. Run `claude auth login` to sign in with your claude.ai account.");
  if (!c()) return i("not_subscription_auth", bIt({
    prefix: "Remote Control requires claude.ai subscription auth.",
    suffix: "to use Remote Control."
  }));
  if (!p()) return i("token_scope_limited", "Remote Control requires a full-scope login token. Long-lived tokens (from `claude setup-token` or CLAUDE_CODE_OAUTH_TOKEN) are limited to inference-only for security reasons. Run `claude auth login` to use Remote Control.");
  if (!h()?.organizationUuid) return i("no_organization", "Unable to determine your organization for Remote Control eligibility. Run `claude auth login` to refresh your account information.");
  await Uoe();
  let e = SIt();
  if (e === "unavailable") return i("policy_unverified", OSr);
  if (e === "denied") return {
    reason: D(),
    code: "org_policy_denied",
    orgPolicyDenied: !0
  };
  if (g()) return null;
  if (!Ig()) {
    let o = yHr();
    if (o) return i("flags_disabled", `Remote Control requires feature-flag evaluation, which is disabled because ${o} is set. Unset it (or run in a shell without it) to use Remote Control.`);
    if (a.DISABLE_GROWTHBOOK) return i("flags_disabled", "Remote Control requires feature-flag evaluation, which is disabled because DISABLE_GROWTHBOOK is set. Unset it (or run in a shell without it) to use Remote Control.");
    return i("flags_disabled", "Remote Control requires feature-flag evaluation, which is unavailable in this environment.");
  }
  if (!await z_("tengu_ccr_bridge")) {
    if (!sa()) {
      if (C5(), await z_("tengu_ccr_bridge")) return null;
      if (!sa()) return i("flags_unreachable", "Couldn't verify Remote Control eligibility \u2014 the feature-flag service was unreachable (offline or blocked). Retry, or run with `--debug` / `claude doctor` for details.");
    }
    return i("gate_off", "Remote Control isn't enabled for this account. If you recently changed plans, run `claude auth logout` then `claude auth login` to refresh your entitlements, or `claude doctor` for details.");
  }
  return null;
}

async function N() {
  return (await _It())?.reason ?? null;
}

function D() {
  try {
    if (yUe()) return rft("Remote Control");
    if (kjn("allow_remote_control")) return dIe("Remote Control", "is");
    if (!I()) return sfe("Remote Control");
    if (!WSo()) return T;
    return K$n();
  } catch {
    return OSr;
  }
}

var x = "set by your organization's configuration, not an admin setting";

function U({policyVerdict: e, policyDenialIsAuthoritative: o, currentTaints: n}) {
  if (e !== "denied" || !o) return !1;
  try {
    return !yUe() && !kjn("allow_remote_control") && bve(n).length > 0;
  } catch {
    return !1;
  }
}

function Wlt() {
  if (u()) return null;
  if (az()) return O7;
  let e = ao(), o = aHt(), n = e.remoteControlLockReason;
  if (n !== void 0 && n.policyCacheRevision === o) return n.reason;
  let r = H();
  return e.remoteControlLockReason = {
    policyCacheRevision: o,
    reason: r
  }, r;
}

function H() {
  let e = SIt();
  if (e === "allowed") return null;
  if (e === "unavailable") return OSr;
  return D();
}

function h6s() {
  if (!OX()) return "";
  let e = o => o ? "set" : "unset";
  try {
    let o = Sn(), n = Object.values(b9e).filter(r => Le(process.env[r]));
    return [ "", "[debug] Remote Control auth state:", `  isBareMode=${gr()}`, `  hasOAuthAccessToken=${!!o?.accessToken}`, `  oauthScopes=${o?.scopes?.join(",") ?? "none"}`, `  hasClaudeAIInferenceScope=${f()}`, `  isClaudeAISubscriber=${c()}`, `  hasProfileScope=${p()}`, `  oauthAccount.organizationUuid=${h()?.organizationUuid ? "set" : "unset"}`, `  ANTHROPIC_API_KEY=${e(process.env.ANTHROPIC_API_KEY)}`, `  ANTHROPIC_AUTH_TOKEN=${e(process.env.ANTHROPIC_AUTH_TOKEN)}`, `  apiKeyHelper=${km() ? "set" : "unset"}`, `  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR=${e(process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR)}`, `  CLAUDE_CODE_OAUTH_TOKEN=${e(process.env.CLAUDE_CODE_OAUTH_TOKEN)}`, `  ANTHROPIC_UNIX_SOCKET=${e(process.env.ANTHROPIC_UNIX_SOCKET)}`, `  3P env=${n.length ? n.join(",") : "none"}`, ...K() ].join(`\n`);
  } catch (o) {
    return `\n[debug] failed to collect auth state: ${o}`;
  }
}

function K() {
  let e = r => r ? "set" : "unset", o = UZ(), n = F();
  return [ `  isGrowthBookEnabled=${Ig()}`, `  telemetryDisabledBy=${yHr() ?? "none"}`, `  DISABLE_GROWTHBOOK=${e(process.env.DISABLE_GROWTHBOOK)}`, `  hasFreshGrowthBookFeatures=${sa()}`, `  growthBookFeaturesLoaded=${Object.keys(o).length}`, `  growthBookLastFetched=${n ? `${G(Date.now() - n)} ago` : "never"}`, `  tengu_ccr_bridge=${String(o.tengu_ccr_bridge ?? "unset")}` ];
}

async function pmo() {
  if (S0() && !u()) return {
    disabledReason: null,
    inRemoteSession: !0,
    checks: []
  };
  C5(), await Uoe();
  let e = await N(), o = yHr() ?? (a.DISABLE_GROWTHBOOK ? "DISABLE_GROWTHBOOK" : null), n = PF(), r = !az(), l = f(), d = c(), m = p(), y = !!h()?.organizationUuid, _ = SIt(), E = I(), P = U({
    policyVerdict: _,
    policyDenialIsAuthoritative: E,
    currentTaints: bfe()
  }), A = Ig(), b = g(), O = b || await z_("tengu_ccr_bridge"), S = sa(), v = [ {
    label: n ? "Connected to the Anthropic API (api.anthropic.com)" : "Not connected to the Anthropic API (api.anthropic.com)",
    ok: n
  }, {
    label: r ? "Not disabled by org policy (disableRemoteControl)" : "Disabled by org policy (disableRemoteControl)",
    ok: r
  }, {
    label: l ? "Signed in to claude.ai" : "Not signed in to claude.ai",
    ok: l
  }, {
    label: d ? "claude.ai subscription active" : "claude.ai subscription auth not active",
    ok: d
  }, {
    label: m ? "Sign-in includes the user:profile scope" : "Sign-in is missing the user:profile scope",
    ok: m
  }, {
    label: y ? "Organization resolved" : "Organization not resolved",
    ok: y
  }, {
    label: _ === "allowed" ? "Org policy allows Remote Control (allow_remote_control)" : _ === "unavailable" ? "Org policy could not be verified (allow_remote_control)" : !E ? "Org policy not loaded, see the Organization policy line above (allow_remote_control)" : "Org policy does not allow Remote Control (allow_remote_control)",
    ok: _ === "allowed",
    detail: P ? x : void 0
  }, {
    label: A ? "Feature-flag evaluation enabled" : "Feature-flag evaluation disabled",
    ok: A || b,
    detail: o ? b ? `disabled by ${o}; Remote Control does not need it on a paid plan` : `disabled by ${o}` : void 0
  }, {
    label: O ? "Remote Control enabled for this account" : S ? "Remote Control not enabled for this account" : "Remote Control availability could not be verified",
    ok: O,
    detail: b ? "decided from your plan, feature flags are off" : S ? void 0 : "no server response this session"
  } ];
  return {
    disabledReason: e !== null && n && r && l && d && m && y && _ === "denied" && !E ? "Remote Control needs your organization's policy, which isn't loaded \u2014 see the Organization policy line above." : e,
    inRemoteSession: !1,
    checks: v
  };
}

function F() {
  try {
    return ce().cachedGrowthBookFeaturesAt;
  } catch {
    return;
  }
}

function G(e) {
  let o = Math.round(e / 1e3);
  if (o < 120) return `${o}s`;
  let n = Math.round(o / 60);
  if (n < 120) return `${n}m`;
  let r = Math.round(n / 60);
  if (r < 48) return `${r}h`;
  return `${Math.round(r / 24)}d`;
}

function bIt({prefix: e, suffix: o}) {
  try {
    let {source: n} = yk({
      skipRetrievingKeyFromApiKeyHelper: !0
    });
    if (n === "ANTHROPIC_API_KEY") return `${e} ANTHROPIC_API_KEY is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${o}`;
    if (n === "apiKeyHelper") return `${e} apiKeyHelper is configured, so this session is using API-key auth \u2014 unset it ${o}`;
    if (process.env.ANTHROPIC_AUTH_TOKEN) return `${e} ANTHROPIC_AUTH_TOKEN is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${o}`;
    let {source: r} = $a(), l = jwe(r);
    if (r !== "none" && l) return `${e} This session is using ${r} auth \u2014 ${l}`;
    if (process.env.ANTHROPIC_UNIX_SOCKET) return `${e} ANTHROPIC_UNIX_SOCKET is set without CLAUDE_CODE_OAUTH_TOKEN, so requests on the socket carry no claude.ai login (on a claude ssh remote: the local machine is API-key-authed).`;
  } catch {}
  return `${e} Unset ANTHROPIC_API_KEY / apiKeyHelper / ANTHROPIC_AUTH_TOKEN ${o}`;
}

var s = "Remote Control is only available when using Claude via api.anthropic.com.", C = "unset it (or run in a shell without it) to use Remote Control.", Y = "unset them (or run in a shell without them) to use Remote Control.";

function V() {
  let e = Oe();
  if (e !== "firstParty") {
    if (e === "gateway") return `${s} This session uses a ${Tv.gateway}, which does not support Remote Control.`;
    if (e === "bedrock" && FIe() === "mantle") return `${s} ${b9e.bedrock} and ${b9e.mantle} are set, so this session is using ${Tv.bedrock} + ${Tv.mantle} \u2014 ${Y}`;
    return `${s} ${b9e[e]} is set, so this session is using ${Tv[e]} \u2014 ${C}`;
  }
  if (!vf()) {
    let o = a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL ? " (_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL does not apply to Remote Control.)" : "";
    return `${s} ANTHROPIC_BASE_URL is set and does not point at api.anthropic.com, so this session is using a custom endpoint \u2014 ${C}${o}`;
  }
  if (a.ANTHROPIC_UNIX_SOCKET) return `${s} ANTHROPIC_UNIX_SOCKET is set, so this session sends requests through a local socket rather than to api.anthropic.com \u2014 ${C}`;
  return s;
}

function f() {
  try {
    return Boolean(Sn()?.scopes?.includes(NC));
  } catch {
    return !1;
  }
}

function c() {
  try {
    return vt();
  } catch {
    return !1;
  }
}

function p() {
  try {
    return Kf();
  } catch {
    return !1;
  }
}

function h() {
  try {
    return ce().oauthAccount;
  } catch {
    return;
  }
}

function z() {
  try {
    return uHt("require_trusted_devices") || Pz();
  } catch {
    return !0;
  }
}

async function Uoe() {
  try {
    await W();
  } catch (e) {
    t(`[bridge] policy-limits hydrate for the Remote Control diagnostic failed: ${e instanceof Error ? e.message : String(e)}`);
  }
}

async function W() {
  try {
    if (jS() !== null) return;
  } catch {}
  let e = await import("./chunk-egjan19g.js");
  e.initializePolicyLimitsLoadingPromise();
  let o = ao();
  if (o.diagnosticPolicyKick === void 0) {
    let n = e.loadPolicyLimits();
    n.catch(() => {}).finally(() => {
      o.diagnosticPolicyKick = void 0;
    }), o.diagnosticPolicyKick = Ht(n, e.POLICY_LIMITS_COLD_AWAIT_MS, "bridge_diagnostic_policy_limits").catch(() => {});
  }
  await o.diagnosticPolicyKick;
}

function SIt() {
  try {
    return on("allow_remote_control") ? "allowed" : "denied";
  } catch {
    return "unavailable";
  }
}

function bSe() {
  return kR() && SIt() === "allowed";
}

function S0() {
  return Le(process.env.CLAUDE_CODE_REMOTE) || Fn();
}

function fmo() {
  return k("tengu_bridge_repl_v2_cse_shim_enabled", !0);
}

function SSe() {
  return k("tengu_luminous_seal", !0);
}

function mmo() {
  return k("tengu_bridge_partial_messages", !1);
}

function q$n() {
  return k("tengu_wobbly_pinwheel", !0);
}

function kSr() {
  return k("tengu_copper_kestrel", !0);
}

function wIt() {
  return k("tengu_bridge_auth_revive", !0);
}

function TSr() {
  return k("tengu_ethereal_mist", !0);
}

function gmo() {
  return k("tengu_wild_gosling", !1);
}

function zlt() {
  return k("tengu_humble_petal", !0);
}

function hmo() {
  return k("tengu_moonlit_lagoon", !0);
}

function ymo() {
  return k("tengu_bridge_resume_respects_local_owner", !0);
}

function _mo() {
  return k("tengu_sequential_puffin", !0);
}

function wSe() {
  return k("tengu_bridge_owner_pinned_end", !0);
}

function Y$n() {
  return k("tengu_glimmering_glade", !0);
}

function bmo() {
  return k("tengu_lucky_quill", !0);
}

function Smo() {
  return k("tengu_keen_lantern", !0);
}

function ASr() {
  return k("tengu_bridge_host_declined_end", !0);
}

function wmo() {
  return k("tengu_bridge_signed_out_neutral", !0);
}

function u7t() {
  return k("tengu_ccr_v2_send_events_cli", !0);
}

function lz() {
  return k("tengu_ccr_v2_session_crud_cli", !1);
}

function y6s() {
  return k("tengu_ccr_v2_bridge_create_cli", !1);
}

function p7t() {
  return k("tengu_composed_quail", !0);
}

function vmo() {
  return k("tengu_gravel_chorus", !0);
}

function Glt() {
  return CSr().value;
}

function CSr() {
  if (S0()) return {
    value: !1,
    source: "remote_env"
  };
  let e = GSo("remote_control_at_startup");
  if (g()) return {
    value: !1,
    source: e === !1 ? "org_policy" : "growthbook"
  };
  if (ixe()) return {
    value: !0,
    source: "persistent_remote_session"
  };
  if (e !== void 0) return {
    value: e,
    source: "org_policy"
  };
  return {
    value: k("tengu_cobalt_harbor", !1),
    source: "growthbook"
  };
}

function Boe() {
  let e = v8e();
  return e !== void 0 ? e : Glt();
}

function ixe() {
  return !1;
}

function _6s() {
  return !1;
}

function f7t() {
  return k("tengu_amber_relay", !1);
}

function P5e() {
  {
    let {value: e, source: o} = In("tengu_bridge_apply_server_session_config", !0);
    if (e !== !1) return !0;
    if (o === "override") return !1;
    return !(o === "payload" && zGn().organizationUUID);
  }
  return !1;
}

function RSr() {
  return k("tengu_bridge_child_auto_mode", !0);
}

function Emo() {
  return k("tengu_bridge_child_auto_over_settings", !0);
}

function xSr() {
  return k("tengu_bridge_rc_child_artifact", !0);
}

function X$n() {
  return k("tengu_bridge_rc_projects_hint", !0);
}

function PSr() {
  return k("tengu_bridge_child_machine_settings", !0);
}

function ISr() {
  return k("tengu_bridge_rc_child_auto_compact", !0);
}

function kmo() {
  let e = k("tengu_bridge_rc_child_idle_exit_ms", L);
  if (typeof e !== "number" || !Number.isFinite(e) || e < 1) return 0;
  return Math.min(Math.floor(e), M);
}

function m7t() {
  return k("tengu_bridge_rc_child_restart_resume", !0);
}

function g7t() {
  return {
    enabled: k("tengu_bridge_subagent_frames", !0),
    forwardText: k("tengu_bridge_subagent_text", !1)
  };
}

function Tmo(e, o) {
  if (e.replBridgeOutboundOnly && !o) return e.replBridgeSessionGroupingId !== void 0 ? {
    ...e,
    replBridgeSessionGroupingId: void 0
  } : e;
  if (e.replBridgeEnabled === o && !e.replBridgeOutboundOnly) return !o && e.replBridgeSessionGroupingId !== void 0 ? {
    ...e,
    replBridgeSessionGroupingId: void 0
  } : e;
  return {
    ...e,
    replBridgeEnabled: o,
    replBridgeOutboundOnly: !1,
    ...!o && {
      replBridgeSessionGroupingId: void 0
    }
  };
}

export { PF, jlt, c7t, az, kR, cmo, umo, ESr, K$n, sxe, _It, Wlt, h6s, pmo, bIt, Uoe, SIt, bSe, S0, fmo, SSe, mmo, q$n, kSr, wIt, TSr, gmo, zlt, hmo, ymo, _mo, wSe, Y$n, bmo, Smo, ASr, wmo, u7t, lz, y6s, p7t, vmo, Glt, CSr, Boe, ixe, _6s, f7t, P5e, RSr, Emo, xSr, X$n, PSr, ISr, kmo, m7t, g7t, Tmo };
