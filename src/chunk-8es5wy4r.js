// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { Cr, k } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { Y0 } from "./chunk-nnrb0acr.js";

import { on } from "./chunk-b47tzzqx.js";

import { bs } from "./chunk-zzhmvqjt.js";

var Byo = [ "unrestricted", "small", "medium", "large" ], s = "medium", u = "small";

function ven(e) {
  return Byo.find(o => o === e);
}

var n = {
  small: 5,
  medium: 10,
  large: 50
};

function c(e) {
  let o = e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
  return o === void 0 ? e : `${e} (aim for <${o} agents)`;
}

function Iks(e, o) {
  return o && e !== "unrestricted" ? `${e} (default)` : c(e);
}

function Oks(e) {
  return e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
}

function f(e) {
  if (!(e in n)) return e;
  return `${e} \u2014 keep workflows under ${n[e]} agents`;
}

function d() {
  return "This is a guideline, not a hard limit \u2014 follow it unless the user's prompt calls for a different scale.";
}

function Mks(e, o) {
  let t = o ? "This session has the default workflow size guideline:" : "A workflow size guideline is configured for this session:", r = o ? ' The user can raise or remove it with "Dynamic workflow size" in /config.' : "";
  return `${t} ${f(e)}. ${d()}${r}`;
}

function Hks(e) {
  if (e === "unrestricted") return "Workflow size is now unrestricted \u2014 no size guideline applies.";
  return `The workflow size guideline for this session changed: ${f(e)}. ${d()}`;
}

function zBn() {
  return fEr() || Y0()?.settings.disableWorkflows === !0;
}

function fEr() {
  return a.CLAUDE_CODE_DISABLE_WORKFLOWS;
}

class w {
  cached=void 0;
  resolve() {
    if (this.cached !== void 0) return this.cached;
    return this.cached = W(), this.cached;
  }
}

var p = new K(() => new w);

function Tg() {
  return jyo() === void 0;
}

function jyo() {
  let e = zBn(), o = e && !a.CLAUDE_CODE_DISABLE_WORKFLOWS && bs("disableWorkflows", !1).source === "userSettings";
  if (e && !o) return "managed_settings";
  if (!VBn()) return "org_policy";
  let {available: t, defaultOn: r} = i();
  if (!t) return "unavailable";
  if (!(Y0()?.settings.enableWorkflows ?? r)) {
    let l = bs("enableWorkflows", r).source;
    return l === "userSettings" || l === "default" ? "user_setting" : "managed_settings";
  }
  return o ? "user_setting" : void 0;
}

function Wyo() {
  return i().defaultOn;
}

function tpe() {
  return Cr() === "pro" ? u : s;
}

function GBn() {
  return VBn() && !a.CLAUDE_CODE_DISABLE_WORKFLOWS && i().available;
}

function Een() {
  return Y0()?.settings.workflowKeywordTriggerEnabled ?? !0;
}

function VBn() {
  return on("allow_workflows");
}

function Dks() {
  if (zBn() || !VBn()) return !0;
  if (Y0()?.settings.enableWorkflows === !1) return !0;
  return a.CLAUDE_CODE_WORKFLOWS === !1 || !k("tengu_workflows_enabled", !0);
}

function i() {
  return p.of(B().host).resolve();
}

function W() {
  if (a.CLAUDE_CODE_WORKFLOWS === !0) {
    let o = k("tengu_workflows_enabled", !0);
    return {
      available: o,
      defaultOn: o
    };
  }
  if (a.CLAUDE_CODE_WORKFLOWS === !1) return {
    available: !1,
    defaultOn: !1
  };
  if (!k("tengu_workflows_enabled", !0)) return {
    available: !1,
    defaultOn: !1
  };
  return {
    available: !0,
    defaultOn: Cr() !== "pro"
  };
}

function zyo() {
  return k("tengu_jade_compass", !0);
}

export { Byo, ven, Iks, Oks, Mks, Hks, zBn, fEr, Tg, jyo, Wyo, tpe, GBn, Een, VBn, Dks, zyo };
