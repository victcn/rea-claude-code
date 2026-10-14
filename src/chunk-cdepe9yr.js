// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ste } from "./chunk-z52kmxx4.js";

import { ve } from "./chunk-3pqddg8f.js";

import { dk } from "./chunk-tz958kay.js";

import { Ts } from "./chunk-xywp7esx.js";

import { hI } from "./chunk-5brm0azz.js";

import { dn } from "./chunk-nnrb0acr.js";

import { fe } from "./chunk-dd98x6x7.js";

import { nme, lX, AG, CG, Pan, XS } from "./chunk-w4hwgefc.js";

import { kJn } from "./chunk-66f63yrn.js";

import { eHn } from "./chunk-wf74a67p.js";

import { Mzt } from "./chunk-44akqg34.js";

import { iet } from "./chunk-mg9rg8zk.js";

import { Nr } from "./chunk-m8ez8fhk.js";

var aWr = {};

Nr(aWr, {
  default: () => aWr,
  earlyCredentialsOf: () => nWr,
  hostProxyAuthConfigured: () => oWr,
  personProxyAuthHelper: () => rWr,
  proxyAgentsInstalled: () => sWr,
  sessionFactsRestored: () => vZe,
  signInRestored: () => iWr
});

function nWr(e) {
  return e?.backend !== void 0 && ste(e.configHome) ? dk(e?.backend) : void 0;
}

function rWr() {
  let e = fe("policySettings")?.proxyAuthHelper, r = dn("userSettings") ? fe("userSettings")?.proxyAuthHelper : void 0;
  return {
    helper: e ?? r,
    fromProjectOrLocal: e === void 0 && r !== void 0 && (fe("projectSettings")?.proxyAuthHelper === r || fe("localSettings")?.proxyAuthHelper === r),
    trustAccepted: Ts,
    sources: "personAndPolicy"
  };
}

var s = `a proxy helper set by this project is not run by this command\n`;

function oWr() {
  let e = hI(), t = e && Boolean(process.stderr.isTTY) && (fe("projectSettings")?.proxyAuthHelper !== void 0 || fe("localSettings")?.proxyAuthHelper !== void 0);
  if (e) Pan(rWr());
  if (t) process.stderr.write(s);
}

var p = "Error: the proxy setting named above is refused.";

function sWr() {
  let e = AG(), t = e !== void 0 && !CG(e.value);
  return XS(), t ? {
    reason: p,
    kind: "lasting"
  } : null;
}

function iWr(e) {
  let t = Boolean(process.stderr.isTTY) || !ve();
  return Mzt(nWr(e), () => t);
}

async function vZe(e) {
  let t = await Promise.resolve().then(iet).then(() => Promise.all([ nme(), lX() ])).then(eHn).then(oWr).then(() => iWr(e)).then(() => null, kJn), r = await Promise.resolve().then(sWr).catch(kJn);
  return t ?? r;
}

export { nWr, rWr, oWr, sWr, iWr, vZe, aWr };
