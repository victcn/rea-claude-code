// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { p } from "./chunk-jkzenvsk.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { Wft } from "./chunk-8yperama.js";

import { Gt } from "./chunk-xywp7esx.js";

import { KS, AC, jK } from "./chunk-46phtgr7.js";

import { o, M, T, u, _t } from "./chunk-cvcg6n1z.js";

var vGe = p(() => _t({
  name: o().optional()
})), C = p(() => u({
  results: T(vGe()),
  opt_in_required: M().optional(),
  message: o().nullish()
}));

function Gke(e) {
  return !Array.isArray(e) && e.opt_in_required === !0;
}

class qge extends Error {
  constructor(e) {
    super(e);
    this.name = "ConnectorRegistryUnavailableError";
  }
}

var y = 15e3, h = "/api/oauth/organizations/:orgUUID/mcp/connectors/search", S = "/api/oauth/organizations/:orgUUID/mcp/connectors/suggest", R = "/api/oauth/organizations/:orgUUID/mcp/connectors/list";

async function d(e, n, r, a) {
  let i = await Gt.post(e, n, {
    auth: "teleport-org",
    timeout: y,
    signal: r,
    credentials: a
  });
  if (!i.ok) throw Error(i.reason === "no-auth" ? "Not authenticated with a claude.ai account." : `connector route unavailable: ${i.reason}`);
  if (i.status >= 400) {
    let c = u({
      error: u({
        type: o(),
        message: o()
      })
    }).safeParse(i.data);
    throw Error(c.success ? `connector route ${i.status} ${c.data.error.type}: ${c.data.error.message}` : `connector route ${i.status}`);
  }
  let s = C().safeParse(i.data);
  if (!s.success) throw Error("malformed connector response");
  if (s.data.opt_in_required) return {
    opt_in_required: !0,
    message: s.data.message ?? "Enable connector suggestions in your Claude settings to use this."
  };
  return s.data.results;
}

function _(e) {
  if (KS("allow_connector_suggest")) return;
  let n = AC("allow_connector_suggest"), r = e === "search" ? "Connector search" : "Connector lookup";
  throw m(e === "search" ? "connector_suggest_search" : "connector_suggest_lookup", n === "org_denied" ? "policy_denied" : n === "unregistered" ? "policy_mirror_unregistered" : n === "route_missing" ? "policy_route_missing" : "policy_cache_miss"), 
  new qge(jK("allow_connector_suggest", r, "is") ?? `${r} is unavailable right now; please try again.`);
}

async function Hqo(e, n, r) {
  _("search");
  let a = await d(h, {
    keywords: e,
    include_custom: !0
  }, n, r);
  if (!Gke(a)) g("connector_suggest_search");
  return a;
}

async function Dqo(e, n, r) {
  _("lookup");
  let a = await d(S, {
    uuids: e
  }, n, r);
  if (!Gke(a)) g("connector_suggest_lookup");
  return a;
}

function u_n(e, n, r) {
  let a = Wft.peek(r)?.read?.(), i = new Set;
  for (let s of n) {
    if (s.type === "disabled") continue;
    let c = s.config, f = ("headers" in c ? c.headers?.["X-MCP-Server-ID"] : void 0) ?? a?.[s.name];
    if (f) i.add(f.toLowerCase());
  }
  return e.map(s => {
    let c = typeof s.installedServerId === "string" ? s.installedServerId : void 0;
    return {
      ...s,
      enabledInChat: c !== void 0 && i.has(c.toLowerCase())
    };
  });
}

async function Lqo(e, n) {
  let r = await d(R, {}, e, n);
  if (!Gke(r)) g("connector_suggest_list");
  return r;
}

function zZe(e, n) {
  t(`[connector-suggest] ${e} failed: ${l(n)}`, {
    level: "error"
  }), m(e === "search" ? "connector_suggest_search" : e === "lookup" ? "connector_suggest_lookup" : "connector_suggest_list", "fetch_failed");
}

export { vGe, Gke, qge, Hqo, Dqo, u_n, Lqo, zZe };
