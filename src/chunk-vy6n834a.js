// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { rS } from "./chunk-tz7tmg8b.js";

import { jjn } from "./chunk-hvtc51w3.js";

import { f3e } from "./chunk-vnxjpmqe.js";

import { HP } from "./chunk-p5n1wfty.js";

import { Ym } from "./chunk-g7w8fv6g.js";

import { og } from "./chunk-w4hwgefc.js";

import { we } from "./chunk-m8ez8fhk.js";

var a = we(HP());

var c = og(), d = rS(), l = Ym(), u = HP(), S = f3e();

var g = e => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`;

var r = g;

var s = we(Ym()), Ujn = ({logger: e, signingName: n} = {}) => async () => {
  if (e?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !n) throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key", {
    logger: e
  });
  let t = r(n);
  if (!(t in process.env)) throw new s.TokenProviderError(`Token not present in '${t}' environment variable`, {
    logger: e
  });
  let o = {
    token: process.env[t]
  };
  return a.setTokenFeature(o, "BEARER_SERVICE_ENV_VARS", "3"), o;
};

var i = we(Ym());

var Bjn = (e = {}) => i.memoize(i.chain(jjn(e), async () => {
  throw new i.TokenProviderError("Could not load token from any providers", !1);
}), n => n.expiration !== void 0 && n.expiration.getTime() - Date.now() < 3e5, n => n.expiration !== void 0);

export { Ujn, Bjn };
