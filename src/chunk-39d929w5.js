// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Mf, gx, di } from "./chunk-3pqddg8f.js";

import { b } from "./chunk-hwdwjvh8.js";

import { Et, y9 } from "./chunk-xywp7esx.js";

import { cn } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { kr, yl } from "./chunk-cqgvwwgb.js";

import { Rn } from "./chunk-dd98x6x7.js";

import { tRe } from "./chunk-yd16nhae.js";

import { CV, nYe, hY, qce, Kit, qit, Cbe, rYe, Sxt } from "./chunk-sqb9meyh.js";

import { ewn } from "./chunk-sq18d1pd.js";

import { On } from "./chunk-3kd8r7rn.js";

function wKr(o, n = !1) {
  return `${Kit(o)} Run ${qit(o)}${n ? " in an interactive terminal session" : ""} to review and enable, then set it as the advisor.`;
}

function Uet(o, n, f, u, t = !0, m = !1, s = []) {
  let l = yl(), e = o === "off" ? void 0 : On(o), a = e === void 0 || nYe(e);
  if (i("tengu_advisor_command", {
    advisor: e === void 0 ? b("off") : a ? Et(o) : qce(e) ? b("consent_pending") : b("invalid"),
    remote: l
  }), !l && kr()) return "The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";
  let c = l ? " (this session only)" : t ? "" : " for this session \u2014 run /advisor in the terminal to change your default";
  if (e === void 0) {
    if (f(r => r.advisorModel === void 0 ? r : {
      ...r,
      advisorModel: void 0
    }), l) kr()?.sendControlRequest({
      subtype: "apply_flag_settings",
      settings: {
        advisorModel: null
      }
    }).catch(d); else if (S(""), t) Rn("userSettings", {
      advisorModel: void 0
    }, void 0, u);
    return `Advisor disabled${c}${h(s, void 0, n)}`;
  }
  if (!a) {
    if (qce(e)) return wKr(e, m);
    let r = [ ...hY(), "off" ].join(", ");
    return `${cn(y9(e))} cannot be used as an advisor. Valid options: ${r}`;
  }
  if (f(r => r.advisorModel === e ? r : {
    ...r,
    advisorModel: e
  }), l) kr()?.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      advisorModel: e
    }
  }).catch(d); else if (S(e), t) Rn("userSettings", {
    advisorModel: e
  }, void 0, u);
  let p = cn(y9(e)), v = cn(y9(n)), g = `Advisor set to ${p}${c}`;
  if (!CV(n)) g += `\nNote: the current main model (${v}) does not support the advisor. It will activate when you switch to a supported main model.`; else if (!Cbe(n, e)) g += `\nNote: ${p} is less capable than the current main model (${v}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;
  return g + h(s, e, n);
}

function h(o, n, f) {
  let u = di(), t = u.advisorHeld ?? ewn(Sxt(o));
  if (t === void 0) return "";
  if (t.refused) return n === void 0 ? "" : `\nThe API refused the advisor for the current conversation, so it runs without one until /clear or /compact; the setting applies from there and in new conversations.`;
  let m = tRe(u, f);
  if (t.model === void 0 && m) return "";
  if (t.viaToolChange && (m || t.inFallback !== !0 && t.model !== void 0)) return t.model !== void 0 && n !== void 0 && !y(n, t.model) ? `\nThe current conversation keeps ${cn(y9(t.model))} as its advisor model until /clear or /compact, so the tool it has already declared stays unchanged; turning the advisor on or off applies right away.` : "";
  let s = Sxt(o), l = s !== void 0 && !s.available && s.toolChange && !s.byBase, e = t.standby === !0 && s === void 0, a = l || e ? void 0 : t.model;
  if (a === n || a !== void 0 && n !== void 0 && y(n, a)) return "";
  return `\nThe current conversation ${a === void 0 ? "runs without the advisor" : `keeps ${cn(y9(a))} as its advisor`} until /clear or /compact, so the prompt it has already sent stays unchanged; the new setting applies from there and in new conversations.`;
}

function y(o, n) {
  return rYe(o, n);
}

function S(o) {
  gx({
    ...Mf() ?? {},
    advisorModel: o
  });
}

export { wKr, Uet };
