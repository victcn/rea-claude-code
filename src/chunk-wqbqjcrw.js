// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { jn } from "./chunk-1z2heevg.js";

import { hwr, ywr } from "./chunk-htg8b98h.js";

import { je, Rt } from "./chunk-s2t7g8m9.js";

var p = [ "userSettings", "projectSettings", "localSettings", "flagSettings", "cliArg", "session" ];

function s(l) {
  if (l === je) return je;
  if (l === Rt) return Rt;
  return null;
}

function m(l, e) {
  let o = s(l);
  if (o === null) return null;
  if (e === void 0 || e === "" || /^[\s*]+$/.test(e)) return "bare";
  return (o === je ? hwr(o, e) : ywr(o, e)) ? "dangerous_prefix" : "scoped";
}

function y(l) {
  let e = {}, o = 0;
  for (let r of p) for (let t of l[r] ?? []) {
    let {toolName: f, ruleContent: S} = jn(t), n = s(f);
    if (n === null) continue;
    let u = m(n, S);
    if (u === null) continue;
    let a = `${r}_${n}_${u}`;
    e[a] = (e[a] ?? 0) + 1, o++;
  }
  return e.total_shell_allow_rules = o, e;
}

function Xqo(l) {
  i("tengu_shell_allow_rules_at_init", y(l));
}

function YQn(l) {
  for (let e of l) {
    if (e.type !== "addRules" || e.behavior !== "allow") continue;
    for (let o of e.rules) {
      let r = s(o.toolName);
      if (r === null) continue;
      let t = m(o.toolName, o.ruleContent);
      if (t === null) continue;
      i("tengu_shell_allow_rule_added", {
        toolName: c(r),
        category: c(t),
        destination: c(e.destination)
      });
    }
  }
}

export { Xqo, YQn };
