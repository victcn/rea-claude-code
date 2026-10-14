// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Yl, Kie } from "./chunk-1z2heevg.js";

import { fn, Zm } from "./chunk-f1zpf9me.js";

import { de } from "./chunk-5ydr99q3.js";

import { t7, kHn, INe } from "./chunk-5dw3c238.js";

import { yV, yF } from "./chunk-dbedbnkv.js";

import { sl } from "./chunk-smzxkp15.js";

var l = [ fn, Zm ].flatMap(o => [ o, ...Kie(o) ]);

function a(o, s) {
  let e = [ ...Object.entries(o.options.toolAliases ?? {}), ...Object.entries(de(o).toolAliases ?? {}) ], t = e.flatMap(([r, i]) => [ ...s.includes(i) ? [ r ] : [], ...s.includes(r) ? [ i ] : [] ]), n = e.flatMap(([r, i]) => t.includes(i) ? [ r ] : []);
  return [ ...s, ...t, ...n ];
}

function u(o, s) {
  if (!o || o === "*") return !0;
  if (/^[a-zA-Z0-9_|, -]+$/.test(o)) return o.split(/[|,]/).map(e => e.trim()).some(e => s.includes(e) || s.includes(Yl(e)));
  try {
    let e = kHn(o);
    return s.some(t => e.test(t));
  } catch {
    return !0;
  }
}

function c(o, s, e = () => !1) {
  let t = yF("tool.call").filter(r => !e(r)), n = yF("tool.check");
  return sl("classic.PreToolUse", void 0, yF("classic.PreToolUse")) || o.some(r => sl("tool.call", {
    tool: r
  }, t) || sl("tool.check", s ? {
    tool: r
  } : INe({
    name: r
  }), n));
}

function K4r(o, s) {
  try {
    let e = s.flatMap(n => [ n, ...Kie(n) ]), t = a(o, e);
    return c(t, t.length > e.length, yV);
  } catch {
    return !0;
  }
}

function q4r(o, s) {
  try {
    let e = s === void 0 ? l : [ ...l, s, ...Kie(s) ], t = a(o, e);
    if (c(t, t.length > e.length)) return !0;
    if (o.sessionHooksRegistry.has(o.agentId ?? o.session.id, "PreToolUse")) return !0;
    return t7("PreToolUse").some(n => u(n.matcher, t) && n.hooks.some(r => !(r.type === "callback" && r.internal === !0)));
  } catch {
    return !0;
  }
}

export { K4r, q4r };
