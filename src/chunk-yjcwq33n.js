// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ce } from "./chunk-xywp7esx.js";

import { dn } from "./chunk-nnrb0acr.js";

import { fe } from "./chunk-dd98x6x7.js";

import { pk, t5 } from "./chunk-ewk363e4.js";

function i() {
  return c(t5(ce().env, "globalConfig"), dn("userSettings") ? t5(fe("userSettings")?.env, "userSettings") : {}, t5(fe("flagSettings")?.env, "flagSettings"), t5(fe("policySettings")?.env, "policySettings"));
}

function zRt() {
  return g(pk(), i());
}

function g(s, r) {
  let n = new Set(Object.keys(r).map(e => e.toUpperCase())), t = {
    ...s
  };
  for (let e of Object.keys(t)) if (!(e in r) && n.has(e.toUpperCase())) delete t[e];
  return Object.assign(t, r);
}

function c(...s) {
  let r = new Map;
  for (let t of s) for (let [e, o] of Object.entries(t)) r.set(e.toUpperCase(), {
    key: e,
    value: o
  });
  let n = {};
  for (let {key: t, value: e} of r.values()) n[t] = e;
  return n;
}

export { zRt };
