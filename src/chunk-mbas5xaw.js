// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Mr, l } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { fo, La, Kb } from "./chunk-qk8kpwc4.js";

import { Xt } from "./chunk-q6wab2jw.js";

import { BL, wc } from "./chunk-mrfpzmz6.js";

var a = new Set([ "INVALID_CONFIG", "UNCONFIGURED", "AUTH_HEADER_REJECTED", "HEADERS_HELPER_AUTH_REJECTED", "CLI_OWNED_BEARER_REJECTED", "FIRST_PARTY_AUTH_REJECTED", "CLAUDEAI_BEARER_REJECTED", "ENDPOINT_NOT_FOUND", "CONNECT_TIMEOUT", "POLICY_BLOCKED", "APPROVAL_REQUIRED", "DISABLED", "IDENTITY_CHANGED", "SHUTTING_DOWN" ]);

function h8n(e) {
  let o = BL(e.name, e.config, {
    detail: "origin"
  }), n = e.errorCode, s = r => wc(e.name, e.config, r);
  if (n !== void 0 && a.has(n)) return e.error !== void 0 ? s(e.error) : n;
  if (n) {
    let r = d(n);
    return o ? `${r} at ${o}` : r;
  }
  return e.error !== void 0 ? s(e.error) : "";
}

function d(e) {
  let o = Number(e);
  return e === "23" ? "request timed out" : Number.isInteger(o) && o >= 100 && o <= 599 ? `HTTP ${e}` : e;
}

function Gjo(e) {
  let {errorCode: o, displayDetail: n} = e, s = i => Kb(wc(e.name, e.config, i));
  if (o && !a.has(o)) {
    let i = d(o), f = e.error !== void 0 ? `${i}: ${e.error}` : i;
    return s(n ? `${f} ${n}` : f);
  }
  let r = e.error ?? o ?? "", c = n ? `${r} ${n}`.trim() : r;
  return c === "" ? c : s(c);
}

function Vyt(e, o, n, s) {
  switch (e.client.type) {
   case "connected":
    if (e.client.discoveryBearerRejected) return {
      message: `Reconnected to ${fo(o)}, but your claude.ai session token was rejected. Run /login, then reconnect.`,
      success: !1
    };
    if (e.client.toolsListError) {
      if (n.persistsOffBox) return t(`mcp reconnect tools/list failed for ${Xt(o)}: ${wc(o, e.client.config, e.client.toolsListError)}`, {
        level: "error"
      }), {
        message: `Reconnected to ${fo(o)}, but fetching tools failed (detail withheld on this connection).`,
        success: !1
      };
      return {
        message: `Reconnected to ${fo(o)}, but fetching tools failed: ${La(wc(o, e.client.config, e.client.toolsListError))}`,
        success: !1
      };
    }
    return {
      message: `Reconnected to ${fo(o)}.`,
      success: !0
    };

   case "needs-auth":
    return {
      message: s?.hasHeadersHelper ? `${fo(o)} requires authentication. Use 'Authenticate' if the upstream server uses OAuth, or check the headersHelper script and use 'Reconnect'.` : `${fo(o)} requires authentication. Use the 'Authenticate' option.`,
      success: !1
    };

   case "failed":
    {
      let r = h8n(e.client);
      if (n.persistsOffBox) {
        if (r) t(`mcp reconnect failed for ${Xt(o)}: ${r}`, {
          level: "error"
        });
        return {
          message: `Failed to reconnect to ${fo(o)}${r ? " (detail withheld on this connection)" : ""}.`,
          success: !1
        };
      }
      return {
        message: r ? `Failed to reconnect to ${fo(o)}: ${La(r)}` : `Failed to reconnect to ${fo(o)}.`,
        success: !1
      };
    }

   default:
    return {
      message: `Unknown result when reconnecting to ${fo(o)}.`,
      success: !1
    };
  }
}

function u7e(e, o, n) {
  let s = n.config ? wc(o, n.config, l(e)) : l(e);
  if (e instanceof Mr) return La(l(e), void 0, "none");
  if (n.persistsOffBox) return t(`mcp reconnect error for ${Xt(o)}: ${s}`, {
    level: "error"
  }), `Error reconnecting to ${fo(o)} (detail withheld on this connection).`;
  return `Error reconnecting to ${fo(o)}: ${La(s)}`;
}

function $Me(e, o, n, s) {
  let r = s.config ? wc(o, s.config, l(e)) : l(e);
  if (e instanceof Mr) return La(l(e), void 0, "none");
  if (s.persistsOffBox) return t(`mcp ${n} failed for ${Xt(o)}: ${r}`, {
    level: "error"
  }), `Failed to ${n} MCP server "${fo(o)}" (detail withheld on this connection).`;
  return `Failed to ${n} MCP server "${fo(o)}": ${La(r)}`;
}

export { h8n, Gjo, Vyt, u7e, $Me };
