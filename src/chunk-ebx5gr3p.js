// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ke } from "./chunk-3pqddg8f.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { Tmt } from "./chunk-q6wab2jw.js";

import { Xgt } from "./chunk-kawq2919.js";

import { bn } from "./chunk-1z2heevg.js";

import { fe } from "./chunk-dd98x6x7.js";

import { j0 } from "./chunk-xywp7esx.js";

import { je } from "./chunk-s2t7g8m9.js";

import { hBn } from "./chunk-h36n2zxz.js";

import { SFn, uxe, L7 } from "./chunk-4v78v8fd.js";

import { isAbsolute as h } from "path";

function S() {
  return {
    sources: m(),
    read: fe,
    rules: uxe
  };
}

var m = () => {
  let {gateProject: t} = SFn(), e = j0({
    onIndeterminate: "tracked"
  });
  return [ ...t ? [ [ "projectSettings", ".claude/settings.json" ] ] : [], ...e ? [ [ "localSettings", ".claude/settings.local.json" ] ] : [] ];
};

function DXn(t) {
  if (t === null) return !1;
  if (t.statusLine) return !0;
  if (t.fileSuggestion) return !0;
  if (t.subagentStatusLine) return !0;
  if (!t.hooks) return !1;
  for (let e of Object.values(t.hooks)) if (e.length > 0) return !0;
  return !1;
}

function G1r(t = {
  sources: [ [ "projectSettings", ".claude/settings.json" ], [ "localSettings", ".claude/settings.local.json" ] ],
  read: fe,
  rules: uxe
}, e = ke()) {
  let s = [];
  for (let [n, c] of t.sources) if (DXn(t.read(n))) s.push(c);
  let r = hBn(e);
  if (r !== null) s.push(L7(r));
  return s;
}

function l(t) {
  return t.some(e => e.ruleBehavior === "allow" && (e.ruleValue.toolName === je || e.ruleValue.toolName.startsWith(je + "(")));
}

var j = /[\x00-\x1f\x7f-\x9f\u2028\u2029]|\p{Cf}/gu, a = 60;

function LXn(t) {
  let e = Xgt(t).replace(j, "").trim();
  return e.length > a ? `${ne(e, a)}\u2026` : e;
}

var R = new Set([ je, "PowerShell", "Write", "Edit", "MultiEdit", "NotebookEdit", "WebFetch", "WebSearch" ]);

function g(t) {
  let {toolName: e, ruleContent: s} = t.ruleValue, r = R.has(e) || e.startsWith("mcp__"), n = s === void 0;
  if (r) return n ? 0 : 1;
  return n ? 2 : 3;
}

function sbt(t = S()) {
  let e = [], s = [];
  for (let [i, o] of t.sources) {
    let u = t.rules(i).filter(d => d.ruleBehavior === "allow");
    if (u.length > 0) e.push(o), s.push(...u);
  }
  let r = s.length;
  s.sort((i, o) => g(i) - g(o));
  let n = new Set, c = [];
  for (let i of s) {
    let o = LXn(bn(i.ruleValue));
    if (o.length > 0 && !n.has(o)) n.add(o), c.push(o);
  }
  return {
    rules: c,
    sources: e,
    rawCount: r
  };
}

function p(t) {
  if (h(t) || t.startsWith("~")) return 0;
  if (t.includes("..")) return 1;
  return 2;
}

function ibt(t = S()) {
  let e = [], s = [];
  for (let [i, o] of t.sources) {
    let u = t.read(i)?.permissions?.additionalDirectories ?? [];
    if (u.length > 0) e.push(o), s.push(...u);
  }
  let r = s.length, n = new Set, c = [];
  for (let i of s) {
    let o = LXn(i);
    if (o.length > 0 && !n.has(o)) n.add(o), c.push(o);
  }
  return c.sort((i, o) => p(i) - p(o)), {
    dirs: c,
    sources: e,
    rawCount: r
  };
}

function V1r() {
  let t = [], e = uxe("projectSettings");
  if (l(e)) t.push(".claude/settings.json");
  let s = uxe("localSettings");
  if (l(s)) t.push(".claude/settings.local.json");
  return t;
}

function rb(t, e) {
  if (t.length === 0) return "";
  let s = e === 0 ? void 0 : e;
  if (!s || t.length <= s) {
    if (t.length === 1) return t[0];
    if (t.length === 2) return `${t[0]} and ${t[1]}`;
    let c = t.at(-1);
    return `${t.slice(0, -1).join(", ")}, and ${c}`;
  }
  let r = t.slice(0, s), n = t.length - s;
  if (r.length === 1) return `${r[0]} and ${n} more`;
  return `${r.join(", ")}, and ${n} more`;
}

function NXn(t) {
  return !!t?.otelHeadersHelper;
}

function K1r() {
  let t = [], e = fe("projectSettings");
  if (NXn(e)) t.push(".claude/settings.json");
  let s = fe("localSettings");
  if (NXn(s)) t.push(".claude/settings.local.json");
  return t;
}

function Cjt() {
  let t = [];
  if (fe("projectSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.json");
  if (fe("localSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.local.json");
  return t;
}

function $Xn(t) {
  return !!t?.apiKeyHelper;
}

function q1r() {
  let t = [], e = fe("projectSettings");
  if ($Xn(e)) t.push(".claude/settings.json");
  let s = fe("localSettings");
  if ($Xn(s)) t.push(".claude/settings.local.json");
  return t;
}

function FXn(t) {
  return !!(t?.awsAuthRefresh || t?.awsCredentialExport);
}

function Y1r() {
  let t = [], e = fe("projectSettings");
  if (FXn(e)) t.push(".claude/settings.json");
  let s = fe("localSettings");
  if (FXn(s)) t.push(".claude/settings.local.json");
  return t;
}

function UXn(t) {
  return !!t?.gcpAuthRefresh;
}

function X1r() {
  let t = [], e = fe("projectSettings");
  if (UXn(e)) t.push(".claude/settings.json");
  let s = fe("localSettings");
  if (UXn(s)) t.push(".claude/settings.local.json");
  return t;
}

function BXn(t) {
  return !!t?.proxyAuthHelper;
}

function J1r() {
  let t = [], e = fe("projectSettings");
  if (BXn(e)) t.push(".claude/settings.json");
  let s = fe("localSettings");
  if (BXn(s)) t.push(".claude/settings.local.json");
  return t;
}

function f(t) {
  if (!t?.env) return !1;
  return Object.entries(t.env).some(([e, s]) => !Tmt(e, s));
}

function Rjt() {
  let t = [], e = fe("projectSettings");
  if (f(e)) t.push(".claude/settings.json");
  let s = fe("localSettings");
  if (f(s)) t.push(".claude/settings.local.json");
  return t;
}

export { DXn, G1r, LXn, sbt, ibt, V1r, rb, NXn, K1r, Cjt, $Xn, q1r, FXn, Y1r, UXn, X1r, BXn, J1r, Rjt };
