// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { he, fc } from "./chunk-3pqddg8f.js";

import { gr, Pr } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

var t = {
  claudeMd: !0,
  skills: !0,
  workflows: !1,
  plugins: !0,
  pluginMonitors: !1,
  themes: !1,
  hljsLanguages: !0,
  hooks: !0,
  statusLine: !1,
  fileSuggestion: !1,
  mcpAutoDiscovered: !1,
  mcpClaudeAi: !1,
  mcpAgentFrontmatter: !0,
  agents: !0,
  outputStyles: !1,
  lspServers: !0,
  keybindings: !1
}, l = {
  claudeMd: !1,
  skills: !1,
  workflows: !1,
  plugins: !1,
  pluginMonitors: !1,
  themes: !1,
  hljsLanguages: !1,
  hooks: !0,
  statusLine: !0,
  fileSuggestion: !0,
  mcpAutoDiscovered: !1,
  mcpClaudeAi: !1,
  mcpAgentFrontmatter: !1,
  agents: !1,
  outputStyles: !1,
  lspServers: !1,
  keybindings: !1
}, o = {
  claudeMd: !1,
  skills: !1,
  workflows: !1,
  plugins: !1,
  pluginMonitors: !1,
  themes: !1,
  hljsLanguages: !1,
  hooks: !1,
  statusLine: !0,
  fileSuggestion: !0,
  mcpAutoDiscovered: !1,
  mcpClaudeAi: !1,
  mcpAgentFrontmatter: !1,
  agents: !1,
  outputStyles: !1,
  lspServers: !1,
  keybindings: !0
};

function Sr(e, s) {
  if (o[e] && he()) return !0;
  if (Pr() && !l[e]) return !0;
  if (gr() && !s?.explicitlyRequested) return t[e];
  return !1;
}

function UT() {
  return Boolean(a.CLAUDE_CODE_DISABLE_CLAUDE_MDS || Sr("claudeMd", {
    explicitlyRequested: fc().length > 0
  }));
}

export { Sr, UT };
