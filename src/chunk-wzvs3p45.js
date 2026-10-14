// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Rse } from "./chunk-v9pbhfvh.js";

var t = /cloudflare/i;

function nHt(e) {
  let n = e("request-id");
  if (typeof n === "string" && Rse(n.trim())) return "origin";
  let r = e("cf-ray"), o = e("server");
  if (typeof r === "string" && r !== "" || typeof o === "string" && t.test(o)) return "nonorigin_cf";
  return "nonorigin_other";
}

function pUe(e) {
  return e === "nonorigin_cf" || e === "nonorigin_other";
}

function Akr(e) {
  switch (e) {
   case "nonorigin_cf":
    return "a network edge refused the connection before it reached Anthropic's server (HTTP 403 \u2014 Anthropic's CDN enforcing a region or network policy, or a Cloudflare gateway on this network) rather than this session; this often follows a VPN or network change";

   case "nonorigin_other":
    return "the connection was refused before it reached Anthropic (HTTP 403) \u2014 usually a proxy, VPN or firewall on this network";
  }
}

export { nHt, pUe, Akr };
