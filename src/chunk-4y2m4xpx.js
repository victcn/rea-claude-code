// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { lt, B, Xg, ic, kdn, Uj, Tdn, tte, qje, _Yn } from "./chunk-3pqddg8f.js";

import { pe } from "./chunk-hwdwjvh8.js";

import { j } from "./chunk-b0z4bv3v.js";

import { p } from "./chunk-jkzenvsk.js";

import { ua, CU, hG, xC, QH, f_ } from "./chunk-q6wab2jw.js";

import { i } from "./chunk-hedpgw9m.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { a } from "./chunk-j016gcgm.js";

import { Iy } from "./chunk-5brm0azz.js";

import { _h, rg } from "./chunk-jnzpsr0d.js";

import { mt } from "./chunk-j90se18b.js";

import { kr, yl } from "./chunk-cqgvwwgb.js";

import { ws, jo, dn, zp } from "./chunk-nnrb0acr.js";

import { G0s, hn, SE, fe, Mve, Wp, dt, CC, aS, cee, Rn, y9e } from "./chunk-dd98x6x7.js";

import { hl, X_, ymt, Oe, cd, fG } from "./chunk-cjt10y7b.js";

import { ZWn, EZ, mCr, uIs, N3e, gIs, Xr, ODt, _v, xCr, sBe, REo, Il, Ke, dm, It, HH, MPe, Wwe, upt, $Pe, Ft, In, k, Ce, ce, Tl, OTo } from "./chunk-xywp7esx.js";

import { gl, p0s } from "./chunk-46phtgr7.js";

import { Ps } from "./chunk-ac1gm9w7.js";

import { Tg } from "./chunk-8es5wy4r.js";

import { zFe } from "./chunk-v2stbart.js";

import { Mt, uc, XH } from "./chunk-3kd8r7rn.js";

import { sn } from "./chunk-642shbw5.js";

import { o, oe, ue } from "./chunk-cvcg6n1z.js";

import { resolve as De } from "path";

var ge = new lt(() => ({
  layers: []
}));

function X() {
  return ge.peek(B())?.layers ?? [];
}

function Jue(e, n, r) {
  switch (e) {
   case "ask":
    return n.isAutoModeAvailable ? "auto" : "default";

   case "default":
    {
      if (n.isAutoModeAvailable) return "auto";
      let s = r ?? "default";
      if (s === "auto" || s === "bypassPermissions" && !n.isBypassPermissionsModeAvailable) return "default";
      return s;
    }

   case "proactive":
    if (n.isBypassPermissionsModeAvailable) return "bypassPermissions";
    return n.isAutoModeAvailable ? "auto" : "acceptEdits";
  }
}

function H(e, n) {
  if (n === "auto" || e === "proactive" && n === "acceptEdits") return n;
  return;
}

function oEr(e) {
  return R1(e) ?? jFe(e);
}

function Z() {
  let {value: e, source: n} = In("tengu_auto_mode_config", {});
  if (e?.enabled !== "disabled") return !1;
  return n === "override" || n === "payload";
}

function sEr(e) {
  let {cli: n, env: r, settings: s, agentFrontmatter: f} = e, l = _h(n.permissionMode), c = _h(n.inheritPermissionMode), S = n.dangerouslySkipPermissions, m = f?.permissionMode, E = Boolean(S || l || m);
  if (Le(r.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
    let g = S || l && l !== "default" || c && c !== "default" || m && m !== "default", _ = "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " + "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    return {
      mode: "default",
      notification: g ? _ : void 0,
      fromAutoFallback: !1,
      baselineMode: "default",
      decidedByProactivityLevel: !1,
      modeSuppliedOnInvocation: !0,
      autoDefaultWithheldForPendingVerdict: !1,
      levelPickHeldForPendingVerdict: void 0,
      autoStartWithheldForHipaaTaint: !1
    };
  }
  let v = s.permissions?.disableBypassPermissionsMode === "disable", y = Z(), x = !y && !W(s), u = [], h, D = c ? Q(c, y, "inherited auto mode dropped \u2014 auto mode killswitch active (override- or payload-served)") : void 0, P = c ? D?.mode ?? xC(c) : void 0;
  if (S) if (yen("bypassPermissions")) h = Xdt, u.push("default"); else u.push("bypassPermissions");
  if (l) {
    let g = Q(l, y, "auto mode killswitch active (override- or payload-served) \u2014 falling back to default");
    if (g) {
      if (g.unconsented) h = Xdt;
      u.push(g.mode);
    }
  }
  if (m) if (m === "auto" && y) t("agent frontmatter requested auto mode but circuit breaker active \u2014 falling through", {
    level: "warn"
  }); else if (P && hG(m, P) === void 0) t(`agent frontmatter permissionMode "${m}" ignored \u2014 it would widen the agent view's inherited mode (effective "${P}"), and the dispatched agent name is repo-controllable (settings \`agent\`)`, {
    level: "warn"
  }), i("tengu_agent_frontmatter_mode_widening_carry_ignored", {}); else u.push(m);
  if (Iy()) {
    let g = !OBn() ? void 0 : Y().map(_ => _h(fe(_)?.permissions?.defaultMode)).find(_ => _ != null);
    if (g != null && Le(r.CLAUDE_CODE_REMOTE) && !R(g)) {
      if (t(`settings defaultMode "${g}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`, {
        level: "warn"
      }), u.length === 0) i("tengu_ccr_unsupported_default_mode_ignored", {
        mode_hash: sn(g)
      }), u.push("default");
    } else if (g === "bypassPermissions") {
      if (S || n.allowDangerouslySkipPermissions) if (yen("bypassPermissions")) {
        if (u.length === 0) h = Xdt, process.stderr.write(`\u26a0 ${h}\n`);
        u.push("default");
      } else u.push(g); else if (u.length === 0) h = 'Permission mode bypassPermissions from settings was ignored \u2014 enable the "Claude Code: Allow Dangerously Skip Permissions" setting in VS Code to consent to it', 
      t('settings defaultMode "bypassPermissions" ignored for a VS Code-owned session without the allow-bypass setting', {
        level: "warn"
      }), i("tengu_settings_bypass_unconsented_noninteractive_ignored", {}), process.stderr.write(`\u26a0 ${h}\n`), 
      u.push("default");
    } else if (g === "auto") if (!y) u.push(g); else t('settings defaultMode "auto" ignored for the IDE session \u2014 auto-mode circuit breaker is active', {
      level: "warn"
    }); else if (g != null) u.push(g);
  } else if (s.permissions?.defaultMode) {
    let g = _h(s.permissions.defaultMode);
    if (Le(r.CLAUDE_CODE_REMOTE) && !R(g)) t(`settings defaultMode "${g}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`, {
      level: "warn"
    }), i("tengu_ccr_unsupported_default_mode_ignored", {
      mode_hash: sn(g)
    }); else if (g === "bypassPermissions") if (!T("bypassPermissions")) {
      if (t('settings defaultMode "bypassPermissions" ignored \u2014 only policy/user/flag settings may grant bypass mode (projectSettings and localSettings are repo-controllable)', {
        level: "warn"
      }), i("tengu_settings_bypass_mode_untrusted_source_ignored", {}), !c) u.push("default");
    } else if (yen("bypassPermissions")) {
      if (u.length === 0) h = Xdt;
      u.push("default");
    } else u.push(g); else if (g !== "auto") if (P && !T(g) && hG(g, P) === void 0) t(`settings defaultMode "${g}" ignored \u2014 it would widen the agent view's inherited mode (effective "${P}"), and only policy/user/flag settings may do that (projectSettings and localSettings are repo-controllable)`, {
      level: "warn"
    }), i("tengu_settings_mode_widening_carry_ignored", {}); else u.push(g); else if (!T("auto")) t('settings defaultMode "auto" ignored \u2014 only policy/user/flag settings may grant auto mode (projectSettings and localSettings are repo-controllable)', {
      level: "warn"
    }), i("tengu_settings_auto_mode_untrusted_source_ignored", {}); else if (y) t("auto mode killswitch active (override- or payload-served) \u2014 falling back to default", {
      level: "warn"
    }); else if (Le(r.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) && W(s)) t('settings defaultMode "auto" ignored \u2014 disableAutoMode is set and this is an unattended Remote Control machine session', {
      level: "warn"
    }); else u.push("auto");
  }
  if (c) {
    let g = D;
    if (g) {
      if (g.unconsented && u.length === 0) h = Xdt;
      u.push(g.mode);
    }
  }
  let M;
  for (let g of u) {
    if (g === "bypassPermissions" && v) {
      t("bypassPermissions mode is disabled by settings", {
        level: "warn"
      }), h = "Bypass permissions mode was disabled by settings";
      continue;
    }
    M = {
      mode: g,
      notification: h
    };
    break;
  }
  let L = !1, C = !1, I, F = !1;
  if (!M) {
    let g = x && (!Le(r.CLAUDE_CODE_REMOTE) && OBn() && (!n.isNonInteractiveSession || Iy() || k("tengu_moss_anchor", !0)) || Le(r.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT)), _ = "default";
    if (g) {
      let w = iEr(), A = Le(r.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT);
      if (w === void 0 || w === "pending" && A) _ = "auto", L = !0; else if (w === "taint") h ??= Ee, 
      F = !0; else if (w === "pending") C = !0;
    }
    M = {
      mode: _,
      notification: h
    };
  }
  let N = M.mode, q = !1;
  if (e.proactivityLevel && e.proactivityLevel !== "default" && !E) {
    let g = Jue(e.proactivityLevel, {
      isAutoModeAvailable: x,
      isBypassPermissionsModeAvailable: !1
    }, N), _ = H(e.proactivityLevel, g), w = Mxe(e.proactivityLevel, g, N), A = w === "pending" && Le(r.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) ? void 0 : w;
    if (_ !== void 0 && A === "taint") M.notification ??= te(_), F = !0; else if (A === "pending") C = !0, 
    I = _;
    M = {
      mode: A === void 0 ? g : "default",
      notification: M.notification
    }, L = !1, q = !0;
  }
  return {
    mode: M.mode,
    notification: M.notification,
    fromAutoFallback: L,
    baselineMode: N,
    decidedByProactivityLevel: q,
    modeSuppliedOnInvocation: E,
    autoDefaultWithheldForPendingVerdict: C,
    levelPickHeldForPendingVerdict: I,
    autoStartWithheldForHipaaTaint: F
  };
}

var ee = {
  auto: "Auto mode",
  acceptEdits: "Accept edits"
}, Ee = te("auto");

function te(e) {
  return `${ee[e]} isn't the default for your organization \xb7 Shift+Tab to switch`;
}

function gks(e) {
  return `${ee[e]} didn't start: your organization's policy hasn't loaded \xb7 Shift+Tab to switch`;
}

function Mxe(e, n, r) {
  let s = H(e, n);
  if (s === void 0 || s === r) return;
  return iEr();
}

function iEr() {
  let e = p0s();
  if (gl("hipaa") || e === "unobtainable_seen_hipaa") return "taint";
  return e === "pending" ? "pending" : void 0;
}

function hks(e) {
  let n = e.cli.fallbackModel ?? (Array.isArray(e.settings.fallbackModel) ? e.settings.fallbackModel : void 0);
  if (n === void 0) return;
  return Se(n, Xr);
}

function Iyo(e) {
  return e.split(",").map(n => n.trim()).filter(n => n !== "");
}

function Se(e, n) {
  let r = typeof e === "string" ? Iyo(e) : e, s = new Set, f = [];
  for (let l of r) {
    let c = typeof l === "string" ? l.trim() : "";
    if (c === "") continue;
    let S = It(c === "default" ? Il() : c);
    if (s.has(S)) continue;
    if (!n(S)) continue;
    if (s.add(S), f.push(S), f.length === ye) break;
  }
  return f.length > 0 ? f : void 0;
}

var ye = 3;

function ve(e) {
  switch (e) {
   case "userSettings":
    return "user_settings";

   case "projectSettings":
    return "project_settings";

   case "localSettings":
    return "local_settings";

   case "flagSettings":
    return "flag_settings";

   case "policySettings":
    return "policy_settings";

   case null:
    return "settings";
  }
}

function he(e) {
  switch (e) {
   case "env":
   case "user_settings":
   case "project_settings":
   case "local_settings":
   case "flag_settings":
   case "policy_settings":
   case "settings":
   case "agent_frontmatter":
   case "routine_frontmatter":
    return !0;

   default:
    return !1;
  }
}

function be(e, n, r) {
  if (EZ()) {
    let y = gIs();
    if (y !== null && !n && qje().includes("userSettings") && new Date(y).getTime() > new Date(ce().lastSeenOrgDefaultUpdatedAt ?? 0).getTime()) Ce(u => u.lastSeenOrgDefaultUpdatedAt === y ? u : {
      ...u,
      lastSeenOrgDefaultUpdatedAt: y
    }, r);
    if (sBe() === null) return e;
    let x = e ? CC("model") : null;
    if (x === "policySettings" || x === "flagSettings") return e;
    return;
  }
  let s = N3e();
  if (!s || xCr() === null) return e;
  let f = e ? CC("model") : null;
  if (f === "policySettings" || f === "flagSettings") return e;
  let l = qje().includes("userSettings"), c = ce().lastSeenOrgDefaultUpdatedAt, S = new Date(s.updated_at).getTime() > new Date(c ?? 0).getTime(), m = S && !n && l, E = () => Ce(y => y.lastSeenOrgDefaultUpdatedAt === s.updated_at ? y : {
    ...y,
    lastSeenOrgDefaultUpdatedAt: s.updated_at
  }, r);
  if (s.override_user_selection) {
    if (m) E();
    return;
  }
  if (n) return e;
  let v = l ? fe("userSettings")?.model : void 0;
  if (S && v) {
    if (Rn("userSettings", {
      model: void 0
    }, void 0, r).then(y => {
      if (!y.error) E();
    }), f === "userSettings") return;
  } else if (m) E();
  return e;
}

function Oyo(e, n) {
  let {cli: r, env: s, settings: f, agentFrontmatter: l} = e, c = r.model === "default" ? Il() : r.model, S = c, m = null;
  if (c) m = r.model === "default" ? "cli_default" : "cli";
  let E = l?.model, v;
  if (!c && E && E !== "inherit") v = E, c = It(E), S = E, m = l?.modelSource === "routine" ? "routine_frontmatter" : "agent_frontmatter";
  let y = !1, x, u = c;
  if (u === void 0) {
    if (s.ANTHROPIC_MODEL) u = s.ANTHROPIC_MODEL, m = "env"; else if (u = be(f.model || void 0, r.isNonInteractiveSession === !0, n) || void 0, 
    u !== void 0) m = ve(CC("model"));
    S = u;
  }
  let h;
  if (u && !Xr(u)) {
    let L = v !== void 0 && !y ? v : u, C = y ? null : _v(L);
    if (C !== null) {
      if (h = L, u = C, c !== void 0) c = C;
    } else {
      if (!(L.trim().toLowerCase() === "default" || REo(L)) && !y) h = L;
      u = void 0, S = void 0, m = null, c = void 0;
    }
  }
  let D;
  if (u && ODt(u, he(m) ? "persisted" : "explicit")) D = u, u = void 0, S = void 0, 
  m = null, c = void 0;
  let P = u || null, M = It(P ?? Il());
  return {
    effectiveModel: c,
    initialMainLoopModel: P,
    resolvedInitialModel: M,
    rawModelRequest: S || null,
    restrictedModel: h,
    unservedModelSpelling: D,
    settingLayer: m,
    modelWithoutStartupOverride: x
  };
}

function yks(e) {
  let n = e.cli.systemPrompt, r = e.cli.appendSystemPrompt, s = G0s();
  if (s) r = r ? `${r}\n\n${s}` : s;
  return {
    systemPrompt: n,
    appendSystemPrompt: r
  };
}

function OBn() {
  return k("tengu_harbor_willow", !0) || OTo()?.meadow_lantern === !0;
}

var _e = ws.filter(e => !zp.has(e)).toReversed(), Me = [ "acceptEdits", "plan", "default", "auto" ];

function R(e) {
  return Me.includes(e);
}

function Y() {
  return _e.filter(dn);
}

function T(e) {
  return Y().some(n => fe(n)?.permissions?.defaultMode === e);
}

function W(e) {
  return e.permissions?.disableAutoMode === "disable" || e.disableAutoMode === "disable";
}

function nMt(e) {
  return !W(e) && !Z();
}

function xe(e) {
  return Y().map(r => _h(fe(r)?.permissions?.defaultMode)).find(r => r != null) === "plan" && _h(e.permissions?.defaultMode) !== "plan";
}

function Myo() {
  let e = ws.filter(dn).map(n => ({
    source: n,
    mode: (n === "policySettings" ? cee().length > 0 || aS().some(r => r.userWritable === !0 && r.path === "") || tte() && Mve() || QH() !== !1 && !f_() : SE(n).some(r => r.severity !== "warning")) ? "unreadable" : fe(n)?.permissions?.defaultMode
  })).findLast(({source: n, mode: r}) => r !== void 0 && (r !== "auto" || !zp.has(n)));
  return e === void 0 || e.mode === "auto" ? void 0 : e.mode === "unreadable" ? "settings_unreadable" : "stored_default";
}

function MBn({settings: e, scrubbed: n, typedLevel: r, carriedMode: s}) {
  let f = r !== void 0 && r !== "default";
  return {
    autoSeedable: nMt(e) && !n,
    storedDefaultBar: Myo(),
    otherChoiceTyped: f || s !== void 0 && s !== "auto",
    carriedPlanHolds: s === "plan" && !f,
    trustedPlanDisplaced: xe(e)
  };
}

function Pe(e) {
  let n = _h(e.permissions?.defaultMode);
  if (n == null || !R(n)) return;
  if (n !== "auto") return n;
  return T("auto") && nMt(e) ? "auto" : void 0;
}

function HBn({gateOn: e, permissionModeTyped: n, dangerouslySkipPermissions: r, scrubbed: s, settings: f, effort: l}) {
  let c = !n && !r && !s, S = c ? Pe(f) : void 0;
  return {
    considered: e && c,
    settingsDefaultModePresent: f.permissions?.defaultMode != null,
    settingsDefault: S,
    permissionMode: e ? S : void 0,
    effort: e ? l : void 0
  };
}

function _ks({sentMode: e, repositorySettings: n}) {
  if (e === "auto") return;
  if (e !== void 0) return e;
  let r = J(n?.permissions?.defaultMode);
  return r !== void 0 && r !== "auto" && R(r) ? r : "default";
}

function bks({seed: e, settingsMode: n, sentMode: r, startsIn: s}) {
  if (!e.considered || !e.settingsDefaultModePresent || e.permissionMode !== void 0 || n === void 0 || r !== void 0 && J(n) === r) return null;
  let f = J(n) === "auto" ? "auto mode could not be requested from this machine (it is off here, or only the repository asked for it)" : "not a mode a cloud session can start in";
  return {
    text: `Settings kept on this machine: the default permission mode in your settings (${n}) \u2014 ${f}${s !== void 0 ? `; the session starts in ${s} mode` : ""}`,
    level: "info"
  };
}

function J(e) {
  return e === void 0 ? void 0 : rg(e);
}

var Hyo = 'bypass in a background worker needs consent recorded in your user settings \u2014 add "skipDangerousModePermissionPrompt": true to ~/.claude/settings.json (accepting the interactive disclaimer writes the same key, but that dialog is skipped while consent already exists in .claude/settings.local.json or via --settings, which does not count here)', Xdt = `Permission mode downgraded to default: ${Hyo}`;

function yen(e) {
  if (!Ft()) return !1;
  if (e === "bypassPermissions") return !y9e() && !ce().bypassPermissionsModeAccepted;
  return !1;
}

function Q(e, n, r) {
  let s = xC(e);
  if (yen(s)) return {
    mode: "default",
    unconsented: !0
  };
  if (s === "auto" && n) {
    t(r, {
      level: "warn"
    });
    return;
  }
  return {
    mode: s
  };
}

function Jdt(e, n) {
  return dm(It(e)) === dm(It(n));
}

var we = "tengu_loggia_passage";

function V() {
  return k(we, !1);
}

function Sks({sent: e, turnEffort: n, hookEffortValue: r}) {
  if (e === void 0) return {
    carry: null,
    withheld: "none_sent"
  };
  if (r !== void 0) return {
    carry: null,
    withheld: "hook"
  };
  if (n !== void 0) return {
    carry: null,
    withheld: "turn_layer"
  };
  return V() ? {
    carry: null,
    withheld: "killed"
  } : {
    carry: e
  };
}

function _en(e) {
  return {
    refused_effort_level: pe(e.carry),
    refused_effort_withheld: pe(e.carry === null ? e.withheld : void 0)
  };
}

function Dyo({refusedEffort: e, fallbackModel: n, heldBySession: r, loopOverride: s, loopEffort: f}) {
  if (r) return {
    latchEffort: e.carry ?? void 0,
    loopEffort: void 0
  };
  let l = e.carry ?? Lyo(s, f);
  return {
    latchEffort: void 0,
    loopEffort: l === void 0 ? void 0 : {
      model: n,
      level: l
    }
  };
}

function Lyo(e, n) {
  return n !== void 0 && n.model === e ? n.level : void 0;
}

function ne() {
  return Uj()?.carriedEffort !== void 0;
}

function O(e) {
  let n = Uj(), r = ic();
  if (n?.carriedEffort === void 0 || r == null || V()) return;
  try {
    return Jdt(r, n.fallbackModel) && Jdt(e, n.fallbackModel) ? n.carriedEffort : void 0;
  } catch (s) {
    d(j(s));
    return;
  }
}

function DBn({loopEffort: e, continuesMainConversation: n}, r) {
  if (e !== void 0) return V() ? null : e;
  return (n ? O(r) : void 0) ?? null;
}

function wks({carried: e, withIt: n, withoutIt: r, isSavedSetAside: s}) {
  if (n === r) return n === e ? "moot" : "no_effect";
  if (n !== e) return "clamped";
  return s ? "applied_over_saved" : "applied";
}

function LBn() {
  Tdn("effort_change");
}

function vks(e) {
  let n = Uj();
  if (n !== void 0 && !Jdt(e, n.fallbackModel)) Tdn("model_change");
}

function Eks() {
  let e = Uj();
  if (e?.carriedEffort === void 0) return;
  let n = ic();
  if (V()) Tdn("kill_switch"); else if (n == null || !Jdt(n, e.fallbackModel)) Tdn("model_change");
}

function Que() {
  return a.CLAUDE_CODE_MAX_EFFORT_REMINDER ?? k("tengu_proud_clover", !1);
}

function bb(e) {
  if (_Yn(e)) return !1;
  let n = MPe(e, "effort");
  if (n !== void 0) return n;
  let r = Ke(e), s = ymt("effort", r);
  if (s !== void 0) return s;
  let f = mCr(e, r);
  if (f !== void 0) return f.length > 0;
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-haiku-4-5") return !1;
  if (a.CLAUDE_CODE_ALWAYS_ENABLE_EFFORT) return !0;
  if (X_(r, "effort", e) || r === "claude-mythos-5") return !0;
  return fG(cd(e));
}

function cse(e) {
  if (_Yn(e)) return !1;
  let n = MPe(e, "max_effort");
  if (n !== void 0) return n;
  let r = Ke(e), s = se("max_effort", e, r);
  if (s !== void 0) return s;
  let f = mCr(e, r);
  if (f !== void 0) return f.includes("max");
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-opus-4-5" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-haiku-4-5") return !1;
  if (X_(r, "max_effort", e) || r === "claude-mythos-5") return !0;
  return fG(cd(e));
}

function Qdt(e) {
  if (_Yn(e)) return !1;
  let n = MPe(e, "xhigh_effort");
  if (n !== void 0) return n;
  let r = Ke(e), s = se("xhigh_effort", e, r);
  if (s !== void 0) return s;
  let f = mCr(e, r);
  if (f !== void 0) return f.includes("xhigh");
  if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-opus-4-5" || r === "claude-opus-4-6" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-sonnet-4-6" || r === "claude-haiku-4-5") return !1;
  if (X_(r, "xhigh_effort", e) || r === "claude-mythos-5") return !0;
  return fG(cd(e));
}

function se(e, n, r) {
  if (ymt("effort", r) === !1) return !1;
  let s = ymt(e, r);
  if (s === void 0) return;
  return s && bb(n);
}

function ke(e) {
  return Qdt(e);
}

function AO(e) {
  return Tg() && (e === void 0 || ke(e));
}

function ch(e, n) {
  return e === !0 && AO(n);
}

function NBn(e, n, r) {
  if (n.sessionEffort?.kind === "level") {
    let s = n.sessionEffort.value;
    return !(r === s || typeof r === "string" && Zb(r) && K8(r, e) === s);
  }
  return iC(e, wd(n)) !== iC(e, r);
}

function $Bn(e, n, r) {
  if (r.sessionEffort?.kind === "level" || typeof n !== "string") return !1;
  let s = US(e, wd(r, e)), f = US(e, wd(r, e, {
    withHold: !1
  }), {
    carriedEffort: null
  });
  return EH(n) === s && s !== f;
}

function Zb(e) {
  return ua.includes(e);
}

function b(e) {
  return ua.indexOf(e);
}

var Zdt = "high";

function aEr(e) {
  return Zb(e) && b(e) > b(Zdt);
}

function lEr(e) {
  let n = Ke(e);
  return X_(n, "thinking_disabled_effort_cap", e) ?? n === "claude-opus-5";
}

function de(e) {
  let n = [ ...Wp(), ...jo().map(f => fe(f)), ...X() ], r = n.some(f => Object.values(f?.modelSettings ?? {}).some(l => l?.maxEffortLevel !== void 0)) ? lK(e) : void 0, s = null;
  for (let f of n) {
    if (!f) continue;
    let l;
    if (r !== void 0) for (let [c, S] of Object.entries(f.modelSettings ?? {})) {
      let m = S?.maxEffortLevel;
      if (m !== void 0 && (l === void 0 || b(m) < b(l)) && lK(c) === r) l = m;
    }
    if (l ??= f.maxEffortLevel, l !== void 0 && l !== "max" && (s === null || b(l) < b(s))) s = l;
  }
  return s;
}

function ben(e) {
  let n = de(e), r = null, s = Oe();
  if (s === "firstParty" || s === "gateway") {
    let l = Ke(HH(e.trim().toLowerCase()), {
      identity: !0
    }), c = Wwe().find(S => Ke(HH(S.apiName.trim().toLowerCase()), {
      identity: !0
    }) === l)?.maxEffortLevel;
    r = c != null && Zb(c) ? c : null;
  }
  let f = r === null ? n : n === null ? r : b(n) < b(r) ? n : r;
  return f === "max" ? null : f;
}

function BFe(e) {
  if (Oe() !== "firstParty") return null;
  let n = upt();
  if (n === null) return null;
  let r = n.default_effort_level;
  if (r == null || !Zb(r)) return null;
  let s = Ke(HH(e.trim().toLowerCase()), {
    identity: !0
  });
  return Ke(HH(n.name.trim().toLowerCase()), {
    identity: !0
  }) === s ? r : null;
}

function dEr(e) {
  return upt()?.override_user_effort === !0 && BFe(e) !== null;
}

function cEr(e, n) {
  let r = ben(n);
  return r === null || b(e) <= b(r);
}

function Zue(e) {
  return ua.filter(n => cEr(n, e));
}

function K8(e, n) {
  let r = ben(n);
  return r !== null && b(e) > b(r) ? r : e;
}

function G(e, n) {
  if (n === "xhigh") return Qdt(e);
  if (n === "max") return cse(e);
  return !0;
}

function kks(e, n, r) {
  let s = Zue(e).filter(f => f !== "max" && G(e, f));
  return r === 1 ? s.find(f => b(f) > b(n)) : s.findLast(f => b(f) < b(n));
}

function Tks(e) {
  let n = ben(e);
  return n !== null && ua.some(r => b(r) > b(n) && G(e, r));
}

function Aks(e, n) {
  if (typeof e !== "string" || !Zb(e)) return null;
  let r = ben(n);
  if (r === null || b(e) <= b(r)) return null;
  let s = US(n, e) ?? r;
  return `Effort '${e}' exceeds the cap for ${n} set by your settings or organization; using '${s}'.`;
}

var le = {
  med: "medium"
}, ae = {
  ultracode: "xhigh"
};

function epe(e) {
  if (typeof e !== "string") return;
  let n = e.trim().toLowerCase();
  return Object.hasOwn(ae, n) ? n : void 0;
}

function jFe(e) {
  let n = epe(e);
  return n === void 0 ? void 0 : ae[n];
}

function Y7(e) {
  return String(e);
}

function EH(e) {
  let n = e.trim().toLowerCase(), r = le[n] ?? n;
  return Zb(r) ? r : void 0;
}

function ect(e) {
  let n = EH(e);
  if (n !== void 0) return {
    level: n,
    warning: void 0
  };
  let r = epe(e);
  if (r !== void 0) return {
    level: r,
    warning: void 0
  };
  return {
    level: void 0,
    warning: `Unknown --effort value '${e}' \u2014 ignoring it and using the default effort. Valid values: ${ua.join(", ")}.`
  };
}

function R1(e) {
  if (e === void 0 || e === null || e === "") return;
  if (typeof e === "number" && ie(e)) return e;
  let n = String(e).toLowerCase(), r = le[n] ?? n;
  if (Zb(r)) return r;
  let s = parseInt(n, 10);
  if (!isNaN(s) && ie(s)) return s;
  return;
}

function zSe(e) {
  if (e === "low" || e === "medium" || e === "high" || e === "xhigh") return e;
  return;
}

function tct(e) {
  return dt().ultracode === !0 || epe(e) === "ultracode";
}

function RR() {
  let e = a.CLAUDE_CODE_EFFORT_LEVEL;
  return e?.toLowerCase() === "unset" || e?.toLowerCase() === "auto" ? null : R1(e);
}

var K = Object.freeze({
  kind: "inherit"
}), Ae = Object.freeze({
  kind: "default"
});

function X7(e) {
  return {
    kind: "level",
    value: e
  };
}

function nct(e) {
  return e === void 0 ? Ae : X7(e);
}

function Fe(e) {
  return e === void 0 ? K : X7(e);
}

function Cks(e) {
  return e.kind === "level" ? String(e.value) : null;
}

function use(e, n) {
  return e === n || e.kind === n.kind && (e.kind !== "level" || n.kind === "level" && e.value === n.value);
}

var Te = new Set([ "claude-3-5-haiku", "claude-3-5-sonnet", "claude-3-7-sonnet", "claude-haiku-4-5", "claude-sonnet-4-0", "claude-sonnet-4-5", "claude-sonnet-4-6", "claude-sonnet-5", "claude-opus-4-0", "claude-opus-4-1", "claude-opus-4-5", "claude-opus-4-6", "claude-opus-4-7", "claude-opus-4-8", "claude-opus-5", "claude-fable-5", "claude-fable-5-1", "claude-mythos-5", "claude-mythos-5-1" ]), re = new Map;

function Nyo(e) {
  let n = re.get(e);
  if (n === void 0) n = Te.has(e) || !XH(uc(e)), re.set(e, n);
  return n;
}

function Re() {
  let e = ce();
  if (e.firstStartVersion !== void 0) return [];
  let n = [];
  if (!e.unpinOpus47LaunchEffort) n.push("claude-opus-4-7");
  if (!e.unpinOpus48LaunchEffort) n.push("claude-opus-4-8");
  if (!e.unpinFable5LaunchEffort) {
    n.push("claude-fable-5");
    let r = a.ANTHROPIC_DEFAULT_FABLE_MODEL;
    if (r && !zFe(Ke(It(r), {
      deterministic: !0,
      identity: !0
    }))) n.push(lK(r));
  }
  return n;
}

function Sen() {
  let e = new Set, n = [];
  for (let r of jo()) {
    let s = hn(r);
    if (s !== void 0) {
      let l = De(s);
      if (e.has(l) && r !== "flagSettings") continue;
      e.add(l);
    }
    let f = fe(r);
    if (f !== void 0 && f !== null) n.push({
      source: r,
      settings: f
    });
  }
  return n;
}

function uEr() {
  let e = Sen(), n = upt(), r = n !== null && dEr(n.name) ? lK(n.name) : void 0, s, f, l = [];
  for (let {source: E, settings: v} of e) {
    let y = v.effortLevel !== void 0;
    if (E === "userSettings") {
      s = zSe(v.effortLevel), l.push({
        source: E,
        setsTopLevel: !1,
        settings: v
      });
      continue;
    }
    if (y) f = {
      level: zSe(v.effortLevel)
    };
    l.push({
      source: E,
      setsTopLevel: y,
      settings: v
    });
  }
  l.reverse();
  let c = l.map(({settings: E}) => {
    let v = new Map;
    for (let [y, x] of Object.entries(E.modelSettings ?? {})) {
      let u = x?.effortLevel;
      if (u === void 0) continue;
      let h = lK(y);
      if (y === h || !v.has(h)) v.set(h, u);
    }
    return v;
  }), S = new Set;
  if (r !== void 0) S.add(r);
  for (let E of c) for (let v of E.keys()) S.add(v);
  let m = {};
  for (let E of S) {
    if (E === r) m[E] = void 0;
    for (let v = 0; v < l.length; v++) {
      if (E === r && !Ve(l[v].source)) continue;
      let y = c[v].get(E);
      if (y !== void 0) {
        m[E] = zSe(y);
        break;
      }
      if (l[v].setsTopLevel) {
        m[E] = zSe(l[v].settings.effortLevel);
        break;
      }
    }
  }
  if (f !== void 0) s = void 0;
  if (s !== void 0) {
    for (let E of Re()) if (!Object.hasOwn(m, E) && !Object.hasOwn(Object.prototype, E)) m[E] = void 0;
  }
  return {
    default: f?.level,
    legacyUserEffort: s,
    byModel: m
  };
}

function Ve(e) {
  return e === "policySettings" || e === "flagSettings";
}

function FBn(e) {
  if (!dEr(e)) return null;
  return A0(U(pEr(uEr(), e) ?? jBn(e), e));
}

function pEr(e, n) {
  let r = lK(n);
  if (Object.hasOwn(e.byModel, r)) return e.byModel[r];
  if (e.default !== void 0 || e.legacyUserEffort === void 0) return e.default;
  return Nyo(r) ? e.legacyUserEffort : void 0;
}

function Ue(e) {
  if (e.legacyUserEffort !== void 0) return !1;
  for (let n in e.byModel) return !1;
  return !0;
}

function lK(e) {
  return Mt(Ke(It(e), {
    deterministic: !0,
    identity: !0
  }));
}

function Be(e, n) {
  return $yo(e, {
    effortLevel: n
  }, {
    effortLevel: n
  });
}

function $yo(e, n, r) {
  let s = lK(e);
  return Object.hasOwn(Object.prototype, s) ? r : {
    modelSettings: {
      [s]: n
    }
  };
}

function wd(e, n, {withHold: r = !0} = {}) {
  let s = e.sessionEffort ?? K;
  switch (s.kind) {
   case "level":
    return s.value;

   case "default":
    return;

   case "inherit":
    {
      if (e.settingsEffortTable === void 0) return;
      if (Ue(e.settingsEffortTable) && !ne()) return e.settingsEffortTable.default;
      let f = n ?? e.mainLoopModelForSession ?? e.mainLoopModel ?? Il();
      return r && rMt(f) !== void 0 ? void 0 : pEr(e.settingsEffortTable, f);
    }
  }
}

function UBn(e, n) {
  return lK(e) === lK(n);
}

function Rks(e, n) {
  return wd(Fyo(e), n, {
    withHold: !1
  });
}

function Fyo(e) {
  return e.sessionEffort?.kind === "level" ? {
    ...e,
    sessionEffort: K
  } : e;
}

function rct(e) {
  return e.kind === "level" && typeof e.value === "string" ? e.value : void 0;
}

function US(e, n, {turnEffort: r, hookEffortValue: s, carriedEffort: f = O(e)} = {}) {
  if (!bb(e)) return;
  let l = de(e) !== null;
  if (s !== void 0) {
    let E = typeof s === "number" && l ? A0(s) : s;
    return U(E, e);
  }
  let c = RR();
  if (c === null && !l) return;
  let S = jBn(e, f), m = c ?? (c === null ? S : void 0) ?? r ?? n ?? S;
  if (typeof m === "number" && l) m = A0(m);
  return U(m, e);
}

function BBn(e, n) {
  if (!bb(e) || RR() !== void 0) return;
  if (typeof n === "string") return K8(n, e);
  if (n === void 0 && BFe(e)) return J7(e);
  return;
}

function U(e, n) {
  let r = e;
  if (typeof r === "string" && Zb(r)) r = K8(r, n);
  if (r === "max" && !cse(n)) r = "high";
  if (r === "xhigh" && !Qdt(n)) r = "high";
  return r;
}

function J7(e) {
  return A0(U(jBn(e), e));
}

function WFe(e, n, r, s, f) {
  if (!f) return !1;
  let l = Xg();
  if (l === 0 || l === s) return !1;
  if (!bb(r)) return !1;
  if (typeof US(r, e) !== "number" && typeof US(r, n) !== "number" && ZWn(r, Ke(r)) && !Ps().rootLatestRequestThreaded) return !1;
  if (US(r, e, {
    carriedEffort: null
  }) === US(r, n)) return !1;
  if (yl() && e !== void 0 && zSe(typeof e === "string" ? K8(e, r) : e) === void 0) return !1;
  return !0;
}

async function Ie(e, n, r) {
  return Rn("userSettings", Be(n, e), void 0, r);
}

async function q8(e, n, r = !0, s) {
  let f = e !== void 0 ? zSe(e) : void 0;
  if (r && (e === void 0 || f !== void 0) && !kr()) {
    let l = await Ie(f, n, s);
    if (l.error) return l.error;
  }
  return;
}

function oct(e) {
  let n = {
    sessionEffort: Fe(oEr(e)),
    settingsEffortTable: uEr()
  };
  return kdn(n), n;
}

function iC(e, n, r) {
  let s = US(e, n, {
    turnEffort: r
  }) ?? "high";
  return A0(s);
}

function t_(e, n, r) {
  return bb(e) ? iC(e, n, r) : void 0;
}

function wen(e, n, r) {
  if (n === void 0 && r === void 0) return "";
  let s = US(e, n, {
    turnEffort: r
  });
  if (s === void 0) return "";
  return ` with ${Y7(A0(s))} effort`;
}

function ie(e) {
  return Number.isInteger(e);
}

function A0(e) {
  if (typeof e === "string") return Zb(e) ? e : "high";
  return "high";
}

function Ne(e) {
  switch (e) {
   case "low":
    return "Quick, straightforward implementation with minimal overhead";

   case "medium":
    return "Balanced approach with standard implementation and testing";

   case "high":
    return "Comprehensive implementation with extensive testing and documentation";

   case "xhigh":
    return "Deeper reasoning than high, just below maximum (on supported models)";

   case "max":
    return `Maximum capability with deepest reasoning. ${CU}`;
  }
}

function Uyo(e) {
  if (typeof e === "string") {
    let n = Ne(e);
    if (e === "high" && $Pe() && k("tengu_slate_finch", !1)) return `${n} \xb7 burns fastest \u2014 medium handles most tasks`;
    return n;
  }
  return "Balanced approach with standard implementation and testing";
}

function jBn(e, n) {
  let r = z(e);
  return (r === void 0 ? n : void 0) ?? BFe(e) ?? r ?? $e(e) ?? He(e) ?? Je(e);
}

function He(e) {
  let n = Tl(e)?.default_effort;
  return typeof n === "string" && Zb(n) && G(e, n) ? n : void 0;
}

function rMt(e) {
  let n = O(e);
  return n !== void 0 && z(e) === void 0 ? n : void 0;
}

function xks(e) {
  return BFe(e) !== null || z(e) !== void 0 || O(e) !== void 0;
}

var We = "tengu_witty_wand", je = p(() => ue(o(), oe()));

function z(e) {
  let n = k(We, {});
  if (typeof n === "string") n = mt(n, !1);
  let r = je().safeParse(n);
  if (!r.success) return;
  let s = r.data[Mt(Ke(e))], f = typeof s === "string" ? s.trim().toLowerCase() : void 0;
  return f !== void 0 && Zb(f) ? f : void 0;
}

function $e(e) {
  let n = uIs(e, Ke(e));
  return n !== void 0 && Zb(n) ? n : void 0;
}

function Je(e) {
  return hl(Ke(e))?.default_effort ?? "high";
}

export { Jue, oEr, sEr, gks, Mxe, iEr, hks, Iyo, Oyo, yks, OBn, nMt, Myo, MBn, HBn, _ks, bks, Hyo, Xdt, yen, Jdt, Sks, _en, Dyo, Lyo, DBn, wks, LBn, vks, Eks, Que, bb, cse, Qdt, AO, ch, NBn, $Bn, Zb, Zdt, aEr, lEr, ben, BFe, dEr, cEr, Zue, K8, kks, Tks, Aks, epe, jFe, Y7, EH, ect, R1, zSe, tct, RR, X7, nct, Cks, use, Nyo, Sen, uEr, FBn, pEr, lK, $yo, wd, UBn, Rks, Fyo, rct, US, BBn, J7, WFe, q8, oct, iC, t_, wen, A0, Uyo, jBn, rMt, xks };
