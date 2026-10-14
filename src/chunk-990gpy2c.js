// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Mr } from "./chunk-b0z4bv3v.js";

import { U1 } from "./chunk-8drhysk2.js";

import { fo, a7, efs, sXt, hR } from "./chunk-qk8kpwc4.js";

import { k9 } from "./chunk-xywp7esx.js";

import { vs } from "./chunk-q6wab2jw.js";

import { N } from "./chunk-hmqkrrtz.js";

function hhe(e) {
  return e.type;
}

function rer(e) {
  return e.type === "failed" && !hR(e) || e.type === "needs-auth";
}

function uwn(e, n) {
  return rer(e) && !n(e.name);
}

function dwt(e) {
  let n = hhe(e);
  switch (n) {
   case "disabled":
   case "pending":
   case "needs-approval":
    return n;

   case "connected":
   case "failed":
   case "needs-auth":
   case "cached":
    return null;

   default:
    return n;
  }
}

function qHe(e) {
  return `"${fo(e)}" is disabled \u2014 enable it in /mcp first`;
}

function cwt(e, n) {
  return `MCP server ${fo(e)} is disabled \u2014 enable it (mcp_toggle) before ${n}`;
}

function Vet(e, n) {
  return `MCP server ${fo(e)} is not approved for this project \u2014 approve it in /mcp before ${n}`;
}

function mne(e) {
  return `"${fo(e)}" was disabled in another session \u2014 disable and re-enable it in /mcp, or restart, to reconnect`;
}

function l2t(e) {
  let n = fo(e), t = `"${e}" was re-enabled in another session, so this disable didn't persist \u2014 /mcp enable ${e} then /mcp disable ${e} makes it stick. Left alone, it connects on the next launch.`;
  return U1(e) && [ ...t ].length <= 1024 ? t : `"${n}" was re-enabled in another session, so this disable didn't persist. Left alone, it connects on the next launch.`;
}

function YHe(e, n, t) {
  if (!n) {
    let o = N(e, s => s.type === "disabled" && !t(s.name));
    if (o === 0) return null;
    let l = N(e, s => s.type === "disabled" && t(s.name));
    return `${o} MCP server(s) were re-enabled in another session, so this disable didn't persist for them \u2014 enable then disable each in /mcp to make it stick. Left alone, they connect on the next launch.` + (l > 0 ? ` The other ${l} ${l === 1 ? "remains" : "remain"} disabled.` : "");
  }
  let r = e.filter(o => o.type !== "disabled" && hhe(o) !== "needs-approval" && t(o.name));
  if (r.length === 0) return null;
  let i = N(r, vs), c = N(r, o => !vs(o) && hR(o)), d = r.length - i - c, a = [];
  if (d > 0) a.push(`${d} MCP server(s) were disabled in another session \u2014 disable and re-enable them in /mcp, or restart, to reconnect.`);
  if (c > 0) a.push(`${c} MCP server(s) were disabled in another session but aren't configured yet \u2014 there's nothing to reconnect until they are.`);
  if (i > 0) a.push(`${i} MCP server(s) are still available in this session but were disabled in another \u2014 they keep working here and won't reconnect after the next launch. Disable and re-enable them in /mcp to persist the re-enable.`);
  return a.join(" ");
}

function oer(e) {
  return `"${fo(e)}" is blocked by your organization's managed policy \u2014 it can't be authenticated or reconnected here`;
}

function XHe(e) {
  return `Claude Code refuses MCP server "${fo(e)}" because it reserves that address for its own use. No administrator set this. Retrying won't help, only removing it or changing its address.`;
}

function ser(e) {
  return `"${fo(e)}" is a project-scope MCP server (.mcp.json) that is not approved for this project \u2014 approve it via /mcp first, then authenticate or reconnect it`;
}

function dW(e, n, t, r) {
  return n === "project-approval" ? ser(e) : k9(e, t) ? XHe(e) : r ?? oer(e);
}

function NKr(e, n, t, r) {
  if (n !== "project-approval" && k9(e, t)) return new Mr(XHe(e), "MCP server refused at a reserved address");
  return n === "project-approval" ? new Mr(ser(e), "MCP server not approved for this project") : new Mr(r ?? oer(e), "MCP server blocked by enterprise managed policy");
}

function E_(e, n, t) {
  return e === "project-approval" ? {
    error: efs,
    errorCode: "APPROVAL_REQUIRED"
  } : {
    error: k9(n, t) ? sXt : a7,
    errorCode: "POLICY_BLOCKED"
  };
}

function pwn(e) {
  return e.type === "failed" && e.errorCode === "POLICY_BLOCKED";
}

function d2t(e) {
  return `"${fo(e)}" is still available in this session, but another session disabled it \u2014 it keeps working here and won't reconnect after the next launch. Disable and re-enable it in /mcp to persist the re-enable.`;
}

function $Kr(e, n) {
  if (n === "ide") throw new Mr("The IDE connection is managed automatically and can't be reconnected manually");
  let t = e.find(i => i.name === n), r = t && dwt(t);
  if (r) throw new Mr(r === "disabled" ? qHe(n) : r === "pending" ? `"${fo(n)}" is already reconnecting \u2014 retries can take a few minutes when a server keeps failing` : `"${fo(n)}" is pending approval \u2014 approve it in the terminal first`);
}

export { hhe, rer, uwn, dwt, qHe, cwt, Vet, mne, l2t, YHe, oer, XHe, ser, dW, NKr, E_, pwn, d2t, $Kr };
