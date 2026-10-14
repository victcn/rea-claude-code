// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { D } from "./chunk-hmqkrrtz.js";

var n = new Set([ "hipaa" ]);

class o {
  latched=new Set;
  latchedTaints=[];
  taints=[];
  current=[];
  changed=Me();
  verdict=void 0;
  replaceTaints(e) {
    this.current = D(e).sort();
    for (let r of e) if (n.has(r)) this.latched.add(r);
    if (this.latched.size !== this.latchedTaints.length) this.latchedTaints = Array.from(this.latched).sort();
    return this.refreshEffectiveTaints();
  }
  latchTaints(e) {
    let r = !1;
    for (let i of e) if (n.has(i) && !this.latched.has(i)) this.latched.add(i), r = !0;
    if (!r) return !1;
    return this.latchedTaints = Array.from(this.latched).sort(), this.refreshEffectiveTaints();
  }
  refreshEffectiveTaints() {
    let e = D([ ...this.latchedTaints, ...this.current ]).sort();
    if (e.length === this.taints.length && e.every((r, i) => r === this.taints[i])) return !1;
    return this.taints = e, this.changed.emit(this.taints), !0;
  }
  registerVerdict(e) {
    this.verdict = e;
  }
  resetForTesting() {
    this.latched.clear(), this.latchedTaints = [], this.taints = [], this.current = [];
  }
}

var a = new K(() => new o);

function t() {
  return a.of(B().host);
}

function DPr(e) {
  return t().replaceTaints(e);
}

function a0s(e) {
  return t().latchTaints(e);
}

function l0s(e) {
  return n.has(e);
}

function gl(e) {
  return t().taints.includes(e);
}

function KH() {
  return t().taints;
}

function bfe() {
  return t().current;
}

function LPr() {
  return t().latchedTaints;
}

function oee(e) {
  return t().changed.subscribe(e);
}

function d0s() {
  t().resetForTesting();
}

function c0s(e) {
  t().registerVerdict(e);
}

function KS(e) {
  return t().verdict?.isPolicyAllowed(e) ?? !1;
}

function u0s() {
  let e = t().verdict;
  return e ? e.rememberedCoreSkills() : [];
}

function kVn(e) {
  try {
    return t().verdict?.commandPolicyGateAllows(e) ?? !1;
  } catch {
    return !1;
  }
}

function AC(e) {
  let r = t().verdict;
  if (!r) return "unregistered";
  return r.policyDenyKind(e);
}

function jK(e, r, i) {
  return t().verdict?.policyDeniedReason(e, r, i) ?? null;
}

function TVn() {
  return t().verdict?.complianceTaintsSettled() ?? !1;
}

function Sfe() {
  let e = t().verdict;
  if (e === void 0) return !1;
  try {
    return !e.policyLimitsCacheLoaded();
  } catch {
    return !0;
  }
}

function p0s() {
  let e = t().verdict;
  if (e === void 0) return "loaded";
  try {
    return e.autoDefaultVerdictState();
  } catch {
    return "pending";
  }
}

function AVn() {
  let e = t().verdict;
  if (e === void 0) return !1;
  try {
    return e.policyVerdictAbsent();
  } catch {
    return !0;
  }
}

function f0s() {
  let e = t().verdict;
  if (e === void 0) return !1;
  try {
    return e.principalSeenUnderHipaa();
  } catch {
    return !0;
  }
}

export { DPr, a0s, l0s, gl, KH, bfe, LPr, oee, d0s, c0s, KS, u0s, kVn, AC, jK, TVn, Sfe, p0s, AVn, f0s };
