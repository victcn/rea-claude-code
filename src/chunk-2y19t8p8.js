// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ZR, f$ } from "./chunk-q6wab2jw.js";

import { bE } from "./chunk-dd98x6x7.js";

import { hBn } from "./chunk-h36n2zxz.js";

import { ASe, L7 } from "./chunk-4v78v8fd.js";

import { DXn, sbt, ibt, NXn, $Xn, FXn, UXn, BXn } from "./chunk-ebx5gr3p.js";

import { join as i, resolve as f } from "path";

function W1r(o, {backstop: t = !1} = {}) {
  return o.allowRules.sources.length > 0 || o.additionalDirectories.sources.length > 0 || !t && (o.hookSources.length > 0 || o.commandHelperSources.length > 0);
}

function z1r() {
  return {
    allowRules: sbt(),
    additionalDirectories: ibt(),
    hookSources: [],
    commandHelperSources: []
  };
}

function yhn(o) {
  let t = f(o), m = f$(t, bE), r = ZR(i(t, ".claude", "settings.json")).settings, c = i(m, ".claude", "settings.local.json"), a = i(t, ".claude", "settings.local.json"), s = [ ZR(c).settings, ...a === c ? [] : [ ZR(a).settings ] ].filter(e => e !== null), S = s.length === 0 ? null : {
    permissions: {
      additionalDirectories: s.flatMap(e => e.permissions?.additionalDirectories ?? [])
    }
  }, u = {
    projectSettings: r,
    localSettings: S
  }, p = {
    sources: [ [ "projectSettings", ".claude/settings.json" ], [ "localSettings", ".claude/settings.local.json" ] ],
    read: e => u[e] ?? null,
    rules: e => e === "localSettings" ? s.flatMap(h => ASe(h, e)) : ASe(u[e] ?? null, e)
  }, d = e => $Xn(e) || FXn(e) || UXn(e) || NXn(e) || BXn(e), l = [], n = [];
  if (DXn(r)) l.push(".claude/settings.json");
  if (s.some(DXn)) l.push(".claude/settings.local.json");
  let g = hBn(t);
  if (g !== null) l.push(L7(g));
  if (d(r)) n.push(".claude/settings.json");
  if (s.some(d)) n.push(".claude/settings.local.json");
  return {
    allowRules: sbt(p),
    additionalDirectories: ibt(p),
    hookSources: l,
    commandHelperSources: n
  };
}

export { W1r, z1r, yhn };
