// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At } from "./chunk-vps0k559.js";

import { _j, Gve } from "./chunk-nc0jxmkt.js";

import { c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { rr } from "./chunk-wptm3jf5.js";

import { du } from "./chunk-e2kb3426.js";

var a = /^([a-z][a-z\d+\-.]*:)?\/\//i;

function l(t, e) {
  let o = e?.baseURL, r = a.test(t), n = null;
  if (r && !_j(t)) n = t; else if (o != null && !_j(o)) n = o; else if (!r && o == null) n = t;
  if (n !== null) throw Error(`downloads: request (url="${t}"` + (o != null ? `, baseURL="${o}"` : "") + ") does not resolve to the public CDN (downloads.claude.ai). Use firstPartyApi for api.anthropic.com (residency-gated) or externalHttp for non-Anthropic hosts.");
}

var NV = {
  get(t, e) {
    return l(t, e), Gve(), At.get(t, e);
  }
};

var d = [ rr, "raw.githubusercontent.com", "objects.githubusercontent.com", "gist.githubusercontent.com", "gitlab.com", "bitbucket.org", "codeberg.org", "dev.azure.com", "ssh.dev.azure.com", "storage.googleapis.com" ];

function m(t) {
  let e, o = /^[^@/]+@([^:/]+):/.exec(t);
  if (o) e = o[1]; else try {
    e = new URL(t).hostname;
  } catch {
    return "unknown";
  }
  let r = e.toLowerCase();
  return d.find(n => n === r) ?? "other";
}

function f(t) {
  return t.includes(`anthropics/${du}`);
}

function _O(t, e, o, r, n, u, s) {
  i("tengu_plugin_remote_fetch", {
    source: c(t),
    host: c(e ? m(e) : "unknown"),
    is_official: t === "plugin_catalog" || (e ? f(e) : !1),
    outcome: c(o),
    duration_ms: Math.round(r),
    ...n && {
      error_kind: c(n)
    },
    ...u !== void 0 ? {
      is_directory: u
    } : {},
    ...s && {
      submodule_selection: c(s.fetched === "all" ? "all" : "selected"),
      submodules_recorded: s.recorded,
      submodules_fetched: s.fetched === "all" ? s.recorded : s.fetched
    }
  });
}

function $V(t) {
  let e = String(t?.message ?? t);
  if (/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|Could not resolve host|Connection refused/i.test(e)) return "dns_or_refused";
  if (/ETIMEDOUT|timed out|timeout/i.test(e)) return "timeout";
  if (/ECONNRESET|socket hang up|Connection reset by peer|remote end hung up/i.test(e)) return "conn_reset";
  if (/403|401|authentication|permission denied/i.test(e)) return "auth";
  if (/404|not found|repository not found/i.test(e)) return "not_found";
  if (/certificate|SSL|TLS|unable to get local issuer/i.test(e)) return "tls";
  if (/Invalid response format|Invalid marketplace schema/i.test(e)) return "invalid_schema";
  return "other";
}

export { NV, _O, $V };
