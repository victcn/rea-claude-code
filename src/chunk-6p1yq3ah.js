// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { kd, zCo, GCo, UDs, Kft } from "./chunk-8yperama.js";

import { Sh } from "./chunk-w0q7jqcp.js";

import { t } from "./chunk-kawq2919.js";

import { thn } from "./chunk-v8kk908e.js";

var yKs = "hearth_binding_changed";

function pLr(e, n) {
  if (e === null || typeof e !== "object" || !("hearth" in e)) return {
    binding: null,
    reason: "not_joined"
  };
  let s = e.hearth;
  if (s === null || typeof s !== "object") return {
    binding: null,
    reason: "not_joined"
  };
  let i = s, l = typeof i.channel_id === "string" ? i.channel_id : "", u = typeof i.thread_id === "string" ? i.thread_id : "";
  if (!zCo.test(l) || !zCo.test(u)) return t("[bridge:projects] binding ids are malformed \u2014 no mount", {
    level: "warn"
  }), {
    binding: null,
    reason: "bad_ids"
  };
  let a = i.mcp_server;
  if (a === null || typeof a !== "object") return {
    binding: null,
    reason: "bad_server_name"
  };
  let o = a;
  if (o.name !== kd) return t("[bridge:projects] binding names an unexpected MCP server \u2014 no mount", {
    level: "warn"
  }), {
    binding: null,
    reason: "bad_server_name"
  };
  if (o.type !== "http" || typeof o.url !== "string") return {
    binding: null,
    reason: "not_http"
  };
  let d = Kft(n.apiBaseUrl);
  if (d === null) return t("[bridge:projects] api base is not an approved ingress origin \u2014 no mount", {
    level: "warn"
  }), {
    binding: null,
    reason: "untrusted_origin"
  };
  let c = `${d}${GCo(n.sessionId)}`, r;
  try {
    r = new URL(o.url);
  } catch {
    return {
      binding: null,
      reason: "url_mismatch"
    };
  }
  if (r.origin !== d || r.pathname !== GCo(n.sessionId) || r.search !== "" || r.hash !== "" || r.username !== "" || r.password !== "") return t("[bridge:projects] binding url is not this session\u2019s hearthbot mount on our own api base \u2014 no mount", {
    level: "warn"
  }), {
    binding: null,
    reason: "url_mismatch"
  };
  let g = thn(o, kd);
  if (!g) return {
    binding: null,
    reason: "bad_tools"
  };
  let h = g.filter(_ => UDs.has(_));
  return {
    binding: {
      channelId: l,
      threadId: u,
      mountUrl: c,
      autoAllowTools: h
    }
  };
}

var p = /^(.*)\/v1\/code\/sessions\/([^/?#]+)$/;

function _Ks(e) {
  if (!e) return null;
  let n = p.exec(e);
  if (!n?.[1] || !n[2]) return null;
  try {
    Sh(n[2], "sessionId");
  } catch {
    return null;
  }
  return {
    apiBaseUrl: n[1],
    sessionId: n[2]
  };
}

export { yKs, pLr, _Ks };
