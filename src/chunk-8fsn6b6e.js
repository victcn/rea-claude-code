// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { xot, Was, lpr, cw, lV, cf, Yy } from "./chunk-84yp45y8.js";

import { ux, QS } from "./chunk-3pqddg8f.js";

import { jo } from "./chunk-nnrb0acr.js";

import { Jl } from "./chunk-j016gcgm.js";

import { Y_, fe } from "./chunk-dd98x6x7.js";

import { Bf, EP, Hc } from "./chunk-67jt18z1.js";

import { fgo, H7t } from "./chunk-4v78v8fd.js";

var a = lpr.filter(e => e !== "userSettings");

function tGe(e) {
  if (fgo()) return !1;
  if (H7t()) return !0;
  return (e ?? rbt()).length > 0;
}

function rbt(e = PXn()) {
  let r = [ ...e ];
  if (i("project")) r.push(".mcp.json");
  if (i("local")) r.push(`${Jl()} (local-scope MCP servers for this project)`);
  return r;
}

function c(e, r) {
  if (EP()) return !1;
  let o = r?.extraKnownMarketplaces ?? {};
  return Object.entries(e?.extraKnownMarketplaces ?? {}).some(([t, l]) => {
    if (Object.hasOwn(o, t)) return !1;
    let s = l.source;
    if (s.source === "url") return !!s.headersHelper && /^https:\/\//i.test(s.url) && Hc(s) && !u(t, s.url);
    if (s.source === "settings") return Hc(s) && !p(t) && s.plugins.some(n => !!n.headersHelper && typeof n.source === "object" && n.source.source === "archive" && !Bf(`${n.name}@${t}`));
    return !1;
  });
}

function u(e, r) {
  let o = jo();
  if (a.some(t => o.includes(t) && Object.hasOwn(fe(t)?.extraKnownMarketplaces ?? {}, e))) return !0;
  return Was({
    source: "url",
    url: r
  }, e) !== void 0;
}

function p(e) {
  return Object.hasOwn(cw(), e);
}

function i(e) {
  if (QS() || Yy()) return !1;
  let {servers: r} = cf(e, {
    expandVars: !1
  });
  return Object.entries(r).some(([o, t]) => "headersHelper" in t && !!t.headersHelper && !(e === "project" && xot(o) === "rejected") && lV(o, t));
}

function PXn() {
  if (ux()) return [];
  let e = jo(), r = e.includes("localSettings") ? fe("localSettings") : null, o = [];
  if (e.includes("projectSettings") && !Y_() && c(fe("projectSettings"), r)) o.push(".claude/settings.json");
  if (c(r)) o.push(".claude/settings.local.json");
  return o;
}

export { tGe, rbt, PXn };
