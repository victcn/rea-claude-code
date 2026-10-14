// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var qFn = [ "mcp__Claude_Preview__", "mcp__Claude_Browser__", "mcp__remote-devices__Claude_Browser__" ];

var Dgo = "mcp__claude-device__chrome_", OSe = [ "mcp__claude-in-chrome__", "mcp__Claude_in_Chrome__", "mcp__remote-devices__claude-in-chrome__", "mcp__remote-devices__Claude_in_Chrome__", "mcp__claude-device__chrome_", ...qFn ];

function r(_) {
  if (!_.startsWith("mcp__claude-device__chrome_")) return null;
  let e = _.slice(27);
  return e === "" || e.startsWith("_") || e.includes("__") ? null : e;
}

function Lgo(_) {
  let e = r(_);
  return e === null ? _ : "mcp__claude-in-chrome__" + e;
}

function Bws(_, e) {
  let n = r(_);
  return n !== null && e === "chrome_" + n ? n : e;
}

var t = new RegExp("(?<![\\w-])mcp__claude-device__chrome_[\\w-]*", "g");

function bwr(_) {
  return _.replace(t, e => e === "mcp__claude-device__chrome_" ? "mcp__claude-in-chrome__" : Lgo(e));
}

function mH(_) {
  return OSe.some(e => _.startsWith(e));
}

function Ngo(_) {
  return qFn.some(e => _.startsWith(e));
}

export { qFn, Dgo, OSe, Lgo, Bws, bwr, mH, Ngo };
