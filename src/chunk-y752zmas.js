// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { D } from "./chunk-hmqkrrtz.js";

function s() {
  return "prod";
}

var TX = [ "", "-staging-oauth", "-local-oauth", "-custom-oauth" ];

function e6() {
  if (process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL) return "-custom-oauth";
  switch (s()) {
   case "local":
    return "-local-oauth";

   case "staging":
    return "-staging-oauth";

   case "prod":
    return "";
  }
}

function SHo() {
  return e6() === "-staging-oauth";
}

var Wee = 31536e3;

var wHo = Math.round(Wee / 86400), NC = "user:inference", AX = "user:profile", Dgt = "user:plugins", v4n = "user:projects:read", E4n = "user:projects:write";

function k4n(t) {
  return Array.isArray(t) && t.includes(NC);
}

var c = "org:create_api_key", Ap = "oauth-2025-04-20", r = [ c, AX ], n = [ AX, NC, "user:sessions:claude_code", "user:mcp_servers", "user:file_upload" ];

function Lgt() {
  let t = un(), _ = [ ...n ];
  if (t.PLUGINS_SCOPE_REGISTERED) _.push(Dgt);
  return _;
}

function vHo() {
  return D([ ...r, ...Lgt() ]);
}

var jOe = [ "user:design:read", "user:design:write" ], u = [ v4n, E4n ];

function pHr(t) {
  if (!Array.isArray(t)) return [];
  let _ = u;
  return t.filter(o => _.includes(o));
}

function EHo(t) {
  return D([ ...Lgt(), ...pHr(t) ]);
}

var a = {
  BASE_API_URL: "https://api.anthropic.com",
  CONSOLE_AUTHORIZE_URL: "https://platform.claude.com/oauth/authorize",
  CLAUDE_AI_AUTHORIZE_URL: "https://claude.com/cai/oauth/authorize",
  CLAUDE_AI_ORIGIN: "https://claude.ai",
  TOKEN_URL: "https://platform.claude.com/v1/oauth/token",
  API_KEY_URL: "https://api.anthropic.com/api/oauth/claude_cli/create_api_key",
  ROLES_URL: "https://api.anthropic.com/api/oauth/claude_cli/roles",
  CONSOLE_SUCCESS_URL: "https://platform.claude.com/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code",
  CLAUDEAI_SUCCESS_URL: "https://platform.claude.com/oauth/code/success?app=claude-code",
  MANUAL_REDIRECT_URL: "https://platform.claude.com/oauth/code/callback",
  CLIENT_ID: "9d1c250a-e61b-44d9-88ed-5944d1962f5e",
  DESIGN_CLIENT_ID: "59637612-477b-4836-a601-b0589eda7704",
  OAUTH_FILE_SUFFIX: "",
  PLUGINS_SCOPE_REGISTERED: !0,
  PROJECTS_SCOPES_REGISTERED: !0,
  MCP_PROXY_URL: "https://mcp-proxy.anthropic.com",
  MCP_PROXY_PATH: "/v1/mcp/{server_id}"
}, Tje = "https://claude.ai/oauth/claude-code-client-metadata", i = void 0;

function S() {
  let t = process.env.CLAUDE_LOCAL_OAUTH_API_BASE?.replace(/\/$/, "") ?? "http://localhost:8000", _ = process.env.CLAUDE_LOCAL_OAUTH_APPS_BASE?.replace(/\/$/, "") ?? "http://localhost:4000", o = process.env.CLAUDE_LOCAL_OAUTH_CONSOLE_BASE?.replace(/\/$/, "") ?? "http://localhost:3000";
  return {
    BASE_API_URL: t,
    CONSOLE_AUTHORIZE_URL: `${o}/oauth/authorize`,
    CLAUDE_AI_AUTHORIZE_URL: `${_}/oauth/authorize`,
    CLAUDE_AI_ORIGIN: _,
    TOKEN_URL: `${t}/v1/oauth/token`,
    API_KEY_URL: `${t}/api/oauth/claude_cli/create_api_key`,
    ROLES_URL: `${t}/api/oauth/claude_cli/roles`,
    CONSOLE_SUCCESS_URL: `${o}/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code`,
    CLAUDEAI_SUCCESS_URL: `${o}/oauth/code/success?app=claude-code`,
    MANUAL_REDIRECT_URL: `${o}/oauth/code/callback`,
    CLIENT_ID: "22422756-60c9-4084-8eb7-27705fd5cf9a",
    DESIGN_CLIENT_ID: "00000000-0000-4000-8000-000000000000",
    OAUTH_FILE_SUFFIX: "-local-oauth",
    PLUGINS_SCOPE_REGISTERED: !0,
    PROJECTS_SCOPES_REGISTERED: !0,
    MCP_PROXY_URL: "http://localhost:8205",
    MCP_PROXY_PATH: "/v1/toolbox/shttp/mcp/{server_id}"
  };
}

var Aje = [ "https://beacon.claude-ai.staging.ant.dev", "https://claude.fedstart.com", "https://claude-staging.fedstart.com" ];

function fHr() {
  switch (s()) {
   case "local":
    return S();

   case "staging":
    return i ?? a;

   case "prod":
    return a;
  }
}

function un() {
  let t = fHr(), _ = process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL;
  if (_) {
    let e = _.replace(/\/$/, "");
    if (!Aje.includes(e)) throw Error("CLAUDE_CODE_CUSTOM_OAUTH_URL is not an approved endpoint.");
    t = {
      ...t,
      BASE_API_URL: e,
      CONSOLE_AUTHORIZE_URL: `${e}/oauth/authorize`,
      CLAUDE_AI_AUTHORIZE_URL: `${e}/oauth/authorize`,
      CLAUDE_AI_ORIGIN: e,
      TOKEN_URL: `${e}/v1/oauth/token`,
      API_KEY_URL: `${e}/api/oauth/claude_cli/create_api_key`,
      ROLES_URL: `${e}/api/oauth/claude_cli/roles`,
      CONSOLE_SUCCESS_URL: `${e}/oauth/code/success?app=claude-code`,
      CLAUDEAI_SUCCESS_URL: `${e}/oauth/code/success?app=claude-code`,
      MANUAL_REDIRECT_URL: `${e}/oauth/code/callback`,
      OAUTH_FILE_SUFFIX: "-custom-oauth",
      PLUGINS_SCOPE_REGISTERED: !1,
      PROJECTS_SCOPES_REGISTERED: !1
    };
  }
  let o = process.env.CLAUDE_CODE_OAUTH_CLIENT_ID;
  if (o) t = {
    ...t,
    CLIENT_ID: o,
    PLUGINS_SCOPE_REGISTERED: !1,
    PROJECTS_SCOPES_REGISTERED: !1
  };
  return t;
}

export { TX, e6, SHo, Wee, wHo, NC, AX, Dgt, v4n, E4n, k4n, Ap, Lgt, vHo, jOe, pHr, EHo, Tje, Aje, fHr, un };
