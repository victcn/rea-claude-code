// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { ec } from "./chunk-8drhysk2.js";

import { k } from "./chunk-xywp7esx.js";

import { on, sp } from "./chunk-b47tzzqx.js";

import { o, T, u } from "./chunk-cvcg6n1z.js";

var l = p(() => T(u({
  marketplace: o(),
  plugin: o()
})));

function WZn() {
  let e = k("tengu_harbor_ledger", []), n = l().safeParse(e);
  return n.success ? n.data : [];
}

function z$() {
  return on("allow_channels") && k("tengu_harbor", !1);
}

function lwt() {
  if (!k("tengu_harbor", !1)) return !0;
  let e = sp("allow_channels");
  return e !== null && e !== "cache_miss" && e !== "route_missing";
}

function KGt(e) {
  if (!e) return !1;
  let {name: n, marketplace: r} = ec(e);
  if (!r) return !1;
  return WZn().some(t => t.plugin === n && t.marketplace === r);
}

export { WZn, z$, lwt, KGt };
