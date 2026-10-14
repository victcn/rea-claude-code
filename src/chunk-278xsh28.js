// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { a } from "./chunk-j016gcgm.js";

import { $j, fM } from "./chunk-kawq2919.js";

import { y_ } from "./chunk-5brm0azz.js";

function dyo(e) {
  if (e.loadedFrom === void 0) return Boolean(e.isMcp);
  switch (e.loadedFrom) {
   case "skills":
   case "commands_DEPRECATED":
   case "plugin":
   case "managed":
   case "bundled":
    return !1;

   case "syncedSkills":
   case "mcp":
   case "memoryStore":
   case "attachedFolder":
    return !0;
  }
}

function E6e(e) {
  if (e.loadedFrom === "syncedSkills") return !zvr();
  return dyo(e);
}

function zvr() {
  return Boolean(a.CLAUDE_CODE_REMOTE) || Boolean(a.CLAUDE_CODE_IS_COWORK) || y_();
}

function _Bn() {
  return {
    hooks: void 0,
    allowedTools: [],
    disallowedTools: [],
    executionContext: void 0,
    agent: void 0,
    background: void 0,
    model: void 0,
    effort: void 0,
    shell: void 0,
    paths: void 0,
    fallback: void 0,
    createdBy: void 0,
    displayName: void 0,
    metadata: void 0
  };
}

function ZZt(e) {
  return {
    description: sK(e.description),
    argumentHint: i(e.argumentHint),
    whenToUse: i(e.whenToUse),
    argumentNames: e.argumentNames.map(sK)
  };
}

function QEs(e) {
  return {
    ...ZZt(e),
    displayName: i(e.displayName),
    argumentHint: e.argumentHint === void 0 ? void 0 : t(e.argumentHint),
    fallback: void 0
  };
}

function i(e) {
  return e === void 0 ? void 0 : sK(e);
}

function sK(e) {
  return $j(t(e));
}

function t(e) {
  return fM(e, " ");
}

function een(e) {
  return sK(e).replaceAll('"', "&quot;");
}

function zdt(e) {
  return $j(e.replace(/[\p{Cc}\p{Cs}]/gu, n => n === "\t" || n === `\n` || n === "\r" ? n : ""));
}

export { dyo, E6e, zvr, _Bn, ZZt, QEs, sK, een, zdt };
