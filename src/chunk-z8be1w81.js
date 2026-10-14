// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { tc, Bwe, $a, k } from "./chunk-xywp7esx.js";

import { YU, Fn } from "./chunk-3pqddg8f.js";

import { gr } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

import { Ct } from "./chunk-6ah1819r.js";

import { Ij, Fln, dL } from "./chunk-5brm0azz.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { on } from "./chunk-b47tzzqx.js";

import { YYe } from "./chunk-2xhrgh8h.js";

var l = "tengu_copper_gazette";

var x = !1;

var y7n = () => k(l, x) === !0;

var g2r = o => o.find(u => u !== !1) || void 0;

function E() {
  let {source: o} = $a();
  return o === "CLAUDE_CODE_OAUTH_TOKEN" || o === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR";
}

var _ = () => $a().source === "CCR_OAUTH_TOKEN_FILE" && YU() && tc();

var g = () => Fln() && !dL() && tc() && (E() || _());

var P_n = () => Bwe() && !Fn() && (Ij() && $a().source === "CLAUDE_CODE_OAUTH_TOKEN" || g());

var O = () => YYe() || P_n();

var _zt = "allow_plugin_publish";

var D4o = () => a.CLAUDE_CODE_REMOTE ? "cloud-session" : "signed-out";

var _7n = () => g2r([ Oe() !== "firstParty" && "third-party", gr() && "bare", Ct() && "traffic-off", !on(_zt) && "policy", !O() && D4o() ]);

export { y7n, g2r, P_n, _zt, D4o, _7n };
