// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { h9, It } from "./chunk-xywp7esx.js";

import { Emt } from "./chunk-q6wab2jw.js";

import { jo } from "./chunk-nnrb0acr.js";

import { Y_, fe, CC } from "./chunk-dd98x6x7.js";

import { t5 } from "./chunk-ewk363e4.js";

import { Mt } from "./chunk-3kd8r7rn.js";

function jFt(e) {
  return !1;
}

function aun({model: e, modelCli: o, agent: t, agentSelectedByCli: r, agents: i, effectiveModel: a, initialMainLoopModel: p, restrictedModel: m}) {
  let l = o === "default" || a === void 0 && p === null;
  if (R() && (m !== void 0 && !jFt(m) || l && (h9().attribution === "enforced" || N()))) return "allowlist";
  if (l && h9().attribution === "env" && C("ANTHROPIC_DEFAULT_MODEL", e)) return "settings_env_default";
  let s = T(e) ? "remap" : void 0;
  if (o) return s;
  if (a !== void 0 && t?.model && t.model !== "inherit") {
    let n = CC("agent"), u = !r && (n === null || d(n));
    return h(t) || u ? "agent" : s;
  }
  if (a !== void 0) return s;
  let b = !r && d(CC("agent")) && jo().some(n => !d(n) && fe(n)?.agent !== void 0), D = t !== void 0 && h(t) && i.some(n => n.agentType === t.agentType && !h(n) && Boolean(n.model) && n.model !== "inherit");
  if (b || D) return "agent";
  if (M("ANTHROPIC_MODEL")) return "settings_env";
  if (!l && process.env.ANTHROPIC_MODEL) return s;
  return d(CC("model")) ? "settings" : s;
}

function GFo(e) {
  return e || !1;
}

function lun({model: e, internal: o, explicitMode: t, droppedMode: r = !1, pinnedDefault: i = !1, settingsMode: a, settingsModeForwardable: p, autoSeedable: m, storedDefaultBar: l, otherChoiceTyped: s, carriedPlanHolds: b, repositoryModel: D, trustedPlanDisplaced: n}) {
  let u = !r && (t === void 0 || i && t === "default");
  return {
    permissionMode: u ? p ? u ? a : void 0 : void 0 : t,
    action: "none"
  };
}

var v = Emt.filter(e => /^ANTHROPIC_DEFAULT_[A-Z]+_MODEL$/.test(e));

function T(e) {
  return c().some(o => {
    let t = fe(o), r = y(o);
    return [ ...Object.values(t?.modelOverrides ?? {}), ...v.filter(i => M(i)).flatMap(i => w(r, i)) ].some(i => S(i, e));
  });
}

function C(e, o) {
  return M(e) && c().some(t => w(y(t), e).some(r => S(r, o)));
}

function S(e, o) {
  return f(e) === f(o) || f(It(e)) === f(It(o));
}

function f(e) {
  return Mt(e.trim().toLowerCase()).trim();
}

function N() {
  return jo().some(e => e !== "policySettings" && fe(e)?.enforceAvailableModels === !0);
}

function R() {
  return fe("policySettings")?.availableModels === void 0 && c().some(e => {
    let o = fe(e);
    return o?.availableModels !== void 0 || o?.enforceAvailableModels !== void 0;
  });
}

function M(e) {
  return c().some(o => g(o, e)) && !g("flagSettings", e) && !g("policySettings", e);
}

function g(e, o) {
  return w(y(e), o).length > 0;
}

function y(e) {
  return t5(fe(e)?.env, e);
}

function w(e, o) {
  return Object.entries(e).filter(([t]) => t.toUpperCase() === o).map(([, t]) => t);
}

function h(e) {
  return d(e.source) || e.source === "plugin" || e.fromAdditionalDirectory === !0;
}

function c() {
  return jo().filter(d);
}

function d(e) {
  return e === "localSettings" || e === "projectSettings" && !Y_();
}

export { jFt, aun, GFo, lun };
