// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ke, ux, Qr, ve } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { En, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { Fj } from "./chunk-a16yb89m.js";

import { Jl } from "./chunk-j016gcgm.js";

import { Ho, re } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { SC } from "./chunk-xywp7esx.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { k1e, Uie } from "./chunk-q6wab2jw.js";

import { she } from "./chunk-tba5gzq4.js";

import { wFn } from "./chunk-4v78v8fd.js";

import { u3, T4, L7r } from "./chunk-84yp45y8.js";

import { dNn } from "./chunk-2xhrgh8h.js";

import { D } from "./chunk-hmqkrrtz.js";

function v(e) {
  try {
    let r = new URL(e);
    if (r.protocol !== "https:" && r.protocol !== "http:") return;
    return r.origin;
  } catch {
    return;
  }
}

function tTe(e) {
  return {
    authorizationServerUrl: e.authorizationServerUrl,
    oauthMetadataFound: e.oauthMetadataFound,
    authServerMetadataUrl: e.authServerMetadataUrl
  };
}

function c(e) {
  return e !== void 0 && e.authorizationServerUrl !== "";
}

function Vbn({previous: e, discovered: r, servedMetadataUrl: n}) {
  if (c(e) && e.authServerMetadataUrl !== void 0) return {
    authorizationServerUrl: e.authorizationServerUrl,
    oauthMetadataFound: e.oauthMetadataFound,
    authServerMetadataUrl: e.authServerMetadataUrl
  };
  if (!r.oauthMetadataFound || v(r.authorizationServerUrl) === void 0) return c(e) ? {
    authorizationServerUrl: e.authorizationServerUrl,
    oauthMetadataFound: e.oauthMetadataFound
  } : {
    ...r
  };
  if (c(e) && e.oauthMetadataFound !== !0 && n !== void 0) return {
    authorizationServerUrl: e.authorizationServerUrl,
    oauthMetadataFound: e.oauthMetadataFound
  };
  return {
    ...r,
    authServerMetadataUrl: n ?? null
  };
}

function P(e, {servedMetadataUrl: r, interactiveSignIn: n}) {
  if (!c(e)) return e;
  let a = r ?? null;
  return (n ? e.authServerMetadataUrl === a : e.authServerMetadataUrl !== void 0) ? e : {
    ...e,
    authServerMetadataUrl: a
  };
}

function Kbn({previous: e, signIn: r, servedMetadataUrl: n, interactiveSignIn: a}) {
  if (r !== void 0 && v(r.authorizationServerUrl) !== void 0 && (a || !c(e))) {
    let {authServerMetadataUrl: o, ...s} = e ?? {
      authorizationServerUrl: ""
    };
    return a || r.oauthMetadataFound ? {
      ...e,
      authorizationServerUrl: r.authorizationServerUrl,
      oauthMetadataFound: r.oauthMetadataFound,
      authServerMetadataUrl: n ?? null
    } : {
      ...s,
      authorizationServerUrl: r.authorizationServerUrl,
      oauthMetadataFound: r.oauthMetadataFound
    };
  }
  if (e !== void 0 && !a && e.oauthMetadataFound !== !0 && e.authServerMetadataUrl === void 0) return r !== void 0 && n === void 0 && r.oauthMetadataFound && v(r.authorizationServerUrl) !== void 0 ? {
    ...e,
    authorizationServerUrl: r.authorizationServerUrl,
    oauthMetadataFound: !0,
    authServerMetadataUrl: null
  } : e;
  return e && P(e, {
    servedMetadataUrl: n,
    interactiveSignIn: a
  });
}

function ASt({previous: e, issuedBy: r, interactiveSignIn: n}) {
  let a = e?.authServerMetadataUrl;
  return {
    authorizationServerUrl: r,
    oauthMetadataFound: !0,
    authServerMetadataUrl: !n && a !== void 0 ? a : null
  };
}

import { isAbsolute as b } from "path";

function C(e) {
  switch (e) {
   case "projectSettings":
   case "localSettings":
    return "repo";

   case "plugin":
   case "additionalDirectory":
    return "thirdParty";

   case "userSettings":
   case "flagSettings":
   case "policySettings":
   case "built-in":
    return "operator";

   default:
    return e;
  }
}

function F(e) {
  switch (e) {
   case "project":
   case "local":
    return "repo";

   case "user":
   case "dynamic":
   case "enterprise":
   case "claudeai":
   case "managed":
   case "agent":
    return "operator";

   default:
    return e;
  }
}

function O(e) {
  return F(e.scope) === "repo" || e.agentSource !== void 0 && C(e.agentSource) === "repo";
}

function R(e, r) {
  if (r !== void 0) return !0;
  if (e.scope === "project") return !0;
  return e.agentSource !== void 0 && C(e.agentSource) !== "operator";
}

async function w(e, r) {
  if (!r.headersHelper) return null;
  let n = typeof r.pluginPath === "string" && b(r.pluginPath) ? r.pluginPath : void 0;
  try {
    re(e, "Executing headersHelper to get dynamic headers");
    let a = r.scope !== void 0 && O({
      scope: r.scope,
      agentSource: r.agentSource
    }), o = await dNn({
      command: r.headersHelper,
      isRepoResidentConfig: a,
      repoResidentOrigin: r.declaredIn,
      cwd: n ?? (a ? Qr() ?? r.declaredIn ?? ke() : r.scope === "dynamic" && r.agentSource === void 0 ? Qr() ?? ke() : Ee()),
      scrubCredentialEnv: R(r, n),
      env: {
        CLAUDE_CODE_MCP_SERVER_NAME: e,
        CLAUDE_CODE_MCP_SERVER_URL: r.url,
        ...n && {
          CLAUDE_PLUGIN_ROOT: n
        }
      }
    });
    if (o.ok) return re(e, `Successfully retrieved ${Object.keys(o.headers).length} headers from headersHelper`), 
    g("mcp_headers_helper"), o.headers;
    if (o.reason === "missing_trust") {
      let s = ux() ? "not available to a session rooted at the home directory without a person present (home trust is session-only): run Claude Code interactively here and accept the trust dialog for that session, or work from a project directory you have trusted" : `accept the trust dialog here once interactively, or set projects[${L7r(SC())}].hasTrustDialogAccepted in ${Jl()}`;
      if (re(e, `headersHelper not run: this workspace has no persisted trust; ${s}.`), 
      ve() && wFn(`mcp headersHelper ${e}`)) Fj(`MCP server '${En(e)}': headersHelper not run \u2014 this workspace has no persisted trust; ${s}.\n`);
      return i("tengu_mcp_headersHelper_missing_trust", {}), f("mcp_headers_helper", "missing_trust"), 
      null;
    }
    throw m("mcp_headers_helper", o.reason), Error(E(e, o.reason));
  } catch (a) {
    return Ho(e, `Error getting headers from headersHelper: ${l(a)}`), t(`Error getting MCP headers from headersHelper for server '${e}': ${l(a)}`, {
      level: "error"
    }), null;
  }
}

function E(e, r) {
  switch (r) {
   case "exec_failed":
    return `headersHelper for MCP server '${e}' did not return a valid value`;

   case "parse_failed":
    return `headersHelper for MCP server '${e}' did not return valid JSON`;

   case "non_object":
    return `headersHelper for MCP server '${e}' must return a JSON object with string key-value pairs`;

   case "non_string_value":
    return `headersHelper for MCP server '${e}' returned a non-string header value`;
  }
}

async function CSt(e, r) {
  let n = {}, a = [], o = u3();
  for (let [M, u] of Object.entries(r.headers ?? {})) {
    let {expanded: h, missingVars: p} = T4(u, void 0, void 0, {
      remoteSink: !0,
      blankList: o
    });
    n[M] = h, a.push(...p);
  }
  if (a.length > 0) re(e, `Header values reference unset environment variables: ${D(a).join(", ")}`);
  let s = await w(e, r) || {};
  return {
    ...n,
    ...s
  };
}

var x = 5;

function fle(e, r, n) {
  let a;
  return async (o, s) => {
    let M = (s?.method ?? "GET").toUpperCase() === "GET", u = o;
    for (let h = 0; ;h++) {
      if (!U(r, u)) return n(u, s);
      a ??= _(e, r);
      let p = new Headers(await a);
      new Headers(s?.headers).forEach((A, H) => p.set(H, A));
      let d = await n(u, {
        ...s,
        headers: p,
        redirect: "manual"
      }), y = d.headers.get("location");
      if (!(d.status >= 300 && d.status < 400) || !y || h === x) return d;
      let S = new URL(y, u);
      if (!(M ? S.protocol === "https:" || S.protocol === "http:" : (d.status === 307 || d.status === 308) && U(r, S))) return d;
      u = S;
    }
  };
}

async function qbn(e, r, n) {
  return U(r, n) ? Object.fromEntries(await _(e, r)) : {};
}

function Ybn(e) {
  return r => {
    if (!Uie(k1e(r), e)) throw Error("Refused a redirect to another origin");
  };
}

function U(e, r) {
  return (!!e.headers || !!e.headersHelper) && Uie(String(r), e.url);
}

async function _(e, r) {
  let n = new Headers;
  for (let [a, o] of Object.entries(await CSt(e, r))) n.set(a, o);
  return n.delete("authorization"), she(r.headers, Object.fromEntries(n)), n;
}

export { tTe, Vbn, Kbn, ASt, CSt, fle, qbn, Ybn };
