// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { uRe } from "./chunk-sqb9meyh.js";

function wS(t) {
  let s = t.trim();
  if (!s.startsWith("/")) return null;
  let {name: e, args: r} = uRe(s);
  if (!e) return null;
  let n = "(MCP)";
  if (r === n) return {
    commandName: `${e} ${n}`,
    args: "",
    isMcp: !0
  };
  if (r.startsWith(n) && /\s/.test(r.charAt(n.length))) return {
    commandName: `${e} ${n}`,
    args: r.slice(n.length).trimStart(),
    isMcp: !0
  };
  return {
    commandName: e,
    args: r,
    isMcp: !1
  };
}

function ETe(t, s) {
  if (!t.subcommands) return;
  let e = s.trimStart(), r = e.search(/\s/), n = r === -1 ? e : e.slice(0, r), a = n ? t.subcommands[n.toLowerCase()] : void 0;
  if (a === void 0) return;
  let m = r === -1 ? "" : e.slice(r + 1).trim();
  if (t.subcommandsBareOnly && m !== "") return;
  return {
    targetName: a,
    consumedToken: n,
    remainingArgs: m
  };
}

var Cwt = t => typeof t === "string" ? t : t.map(s => ({
  ...s
}));

export { wS, ETe, Cwt };
