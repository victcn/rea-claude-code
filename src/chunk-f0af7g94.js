// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { xu } from "./chunk-8yperama.js";

import { Ey } from "./chunk-j41af3ah.js";

import { a } from "./chunk-j016gcgm.js";

import { Tt, zue, dv } from "./chunk-9tdwgnpn.js";

import { je } from "./chunk-s2t7g8m9.js";

import { vi } from "./chunk-jnzpsr0d.js";

import { Yf } from "./chunk-e7rgnck3.js";

import { $ws } from "./chunk-htg8b98h.js";

import { Qit } from "./chunk-sqb9meyh.js";

import { CLn, tuo, Dys, IJt } from "./chunk-xd492737.js";

import { Lh } from "./chunk-8a4rbyjg.js";

import { TLn, hPt } from "./chunk-f680m8m6.js";

import { SJn } from "./chunk-s0van10s.js";

import { qk } from "./chunk-bkx9v5fh.js";

import { EV } from "./chunk-yd16nhae.js";

import { po, pc } from "./chunk-vjmbaret.js";

var p = new Set([ Yf, Ey ]);

function XWr(o, e) {
  if (e.length === 0) return o;
  let t = e.map(r => [ r, po(r) ]), n = o.filter(r => !t.some(([m, i]) => pc(r, m, i)));
  return n.length === o.length ? o : n;
}

function c(o) {
  return o.mcpInfo?.cliOwned === !0 && o.mcpInfo.serverName === xu;
}

var l = import.meta.require("./chunk-wc7h1bgn.js");

function Oyn() {
  return (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "").split(",").map(o => o.trim()).filter(Boolean);
}

function JWr(o, e = Oyn()) {
  if (TLn(o) || tuo.includes(o.name)) return !0;
  let t = po(o.name);
  return e.some(n => n.startsWith(t));
}

function b1s(o) {
  let e = a.CLAUDE_CODE_BRIEF, t = new Set(Oyn()), n = IJt();
  return o.filter(r => CLn.has(r.name) || n && Tt(r, je) && !Lh(r) || Dys(r.name) || c(r) || hPt(r) || e && p.has(r.name) || dv(r, t));
}

function dWt(o, e, t, n) {
  let [r, m] = qk(SJn(vi(Qit([ ...o, ...e ]), "name"), n), s => Lh(s) || EV(s)), i = [ ...m.sort(zue), ...r.sort(zue) ];
  if (l.isCoordinatorMode()) return b1s(i);
  return i;
}

function cWt(o, e) {
  let t = o.length === 1 ? o[0] : void 0;
  if (t && $ws(e, t)) return [];
  return o;
}

export { XWr, Oyn, JWr, b1s, dWt, cWt };
