// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ut } from "./chunk-8yperama.js";

import { Da } from "./chunk-84yp45y8.js";

import { z6 } from "./chunk-kxf7ma3f.js";

import { qn } from "./chunk-wgsx43va.js";

function s() {
  return import.meta.require("./chunk-89c96hkc.js").mcpClientModule();
}

async function Qte(e, c, d) {
  let i = qn(e.name, e.config), {captureDiscoveryGrantLeg: h, ensureDiscoveryCacheAccount: l, getMcpIdentityEpoch: f, persistRefreshedToolsIfPresent: m} = s();
  l();
  let a = Da() ? h(e.name, e.config) : void 0, n = Ut().toolRefreshSequences, r = n.get(e) ?? {
    started: 0,
    applied: 0
  };
  n.set(e, r), r.started += 1;
  let p = r.started, {fetchToolsForClient: t} = s(), v = t.cache.get(i), g = f();
  t.cache.delete(i);
  let o = await t(e, d), u = s().getToolsListErrorForResult(o);
  if (u) return {
    status: "kept-previous",
    error: u
  };
  if (e.discoveryAuthFailure && o.length === 0) return {
    status: "kept-previous",
    error: "the server rejected tool discovery as unauthorized \u2014 the user needs to authorize this connector (e.g. via /mcp) before its tools are available"
  };
  if (r.applied > p) return {
    status: "kept-previous",
    error: "superseded by a newer concurrent refresh of this server \u2014 the newer refresh result is the one applied"
  };
  if (r.applied = p, c(e.name, z6(e, o)), a) a.then(y => m(e, o, {
    identityEpoch: g,
    grantLeg: y
  }));
  return {
    status: "refreshed",
    newTools: o,
    previousToolsPromise: v
  };
}

export { Qte };
