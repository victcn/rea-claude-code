// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var r = new Set([ "update", "upgrade", "doctor", "forward-home-settings" ]);

function i(o) {
  return !1;
}

function s(o) {
  let n = o.indexOf("mcp");
  return n !== -1 && o[n + 1] === "serve";
}

function a(o) {
  let n = o.indexOf("agents");
  return n !== -1 && o.includes("--json", n + 1);
}

function c(o) {
  return o.some((n, e) => (n === "plugin" || n === "plugins") && o[e + 1] === "eval");
}

function l(o) {
  return o.some(n => n === "remote-control" || n === "rc");
}

export { r as NON_REPL_SUBCOMMANDS, a as isAgentsJsonInvocation, s as isMcpServeInvocation, c as isPluginEvalInvocation, i as isProjectVerbInvocation, l as isRemoteControlInvocation };
