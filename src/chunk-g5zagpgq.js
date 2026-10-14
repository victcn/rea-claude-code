// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { KS, u0s, jK } from "./chunk-46phtgr7.js";

import { a } from "./chunk-j016gcgm.js";

import { dt } from "./chunk-dd98x6x7.js";

import { FWn } from "./chunk-x3pasead.js";

function bK(i) {
  return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS || (i ?? dt()).disableBundledSkills === !0;
}

var $Ar = "allow_bundled_skills";

function jUe() {
  return !KS($Ar);
}

function t() {
  return u0s() ?? FWn;
}

function $z(i) {
  return jUe() && !t().includes(i);
}

function bZ(i, e) {
  return bK(e) || $z(i);
}

function tPs() {
  return jK($Ar, "Bundled skills", "are");
}

function $Wn(i) {
  let e = jUe();
  return `${bK(i)}:${e}:${e ? t().join(",") : ""}`;
}

function FAr(i, e) {
  return i.type === "prompt" && i.source === "builtin" && bZ(i.name, e);
}

export { bK, $Ar, jUe, $z, bZ, tPs, $Wn, FAr };
