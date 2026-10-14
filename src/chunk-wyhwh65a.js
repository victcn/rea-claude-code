// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { zn, K, ve, he, Fn } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { l } from "./chunk-b0z4bv3v.js";

import { Y, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { Ho, re } from "./chunk-6ah1819r.js";

import { gn } from "./chunk-yxennhe9.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { Ut } from "./chunk-8yperama.js";

import { fo, Zps, La, Kb } from "./chunk-qk8kpwc4.js";

import { a } from "./chunk-j016gcgm.js";

import { p } from "./chunk-jkzenvsk.js";

import { mAe, zD, UW, Ec, Co } from "./chunk-84yp45y8.js";

import { ZLn, EY } from "./chunk-8a4rbyjg.js";

import { X9t, J9t } from "./chunk-yd16nhae.js";

import { Wo } from "./chunk-9bzw65k3.js";

import { S2 } from "./chunk-sgeq8xme.js";

import { yVr, Or } from "./chunk-tba5gzq4.js";

import { BL, wc } from "./chunk-mrfpzmz6.js";

import { oer, ser, dW } from "./chunk-990gpy2c.js";

import { ATe } from "./chunk-kxf7ma3f.js";

import { zs } from "./chunk-vjmbaret.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import { yt } from "./chunk-9zhz923g.js";

import { join as v } from "path";

function Obn(e) {
  return he() && !(z() && e !== void 0);
}

function jGe() {
  if (he()) throw Error("Cannot use the MCP needs-auth cache file in a diskless session: only a storage backend can hold the cache");
  return v(Ee(), "mcp-needs-auth-cache.json");
}

function ESt() {
  return Fe.state("mcp-needs-auth-cache");
}

function WGe(e) {
  if (Obn(e)) return Promise.resolve({});
  let r = Ut();
  if (!r.authCacheRead) r.authCacheRead = z() && e !== void 0 ? B(e) : gn().read(jGe()).then(n => Y(n)).catch(() => ({}));
  return r.authCacheRead;
}

async function B(e) {
  try {
    let r = await e.read([ ESt() ]);
    if (!r.ok) return {};
    let n = r.value.items[0];
    if (!n.found) return {};
    return Y(Buffer.from(n.value).toString("utf8"));
  } catch {
    return {};
  }
}

function kSt() {
  Ut().authCacheRead = null;
}

function eTe(e) {
  if (Ut().authCacheRead = null, z() && e !== void 0) {
    e.delete(ESt()).then(r => {
      if (!r.ok) t(`mcp needs-auth cache delete failed: ${yt(r.error)}`, {
        level: "error"
      });
    }).catch(() => {});
    return;
  }
  if (he()) return;
  gn().delete(jGe()).catch(() => {});
}

function U() {
  return import.meta.require("./chunk-89c96hkc.js");
}

function C() {
  return U().mcpAuthModule();
}

function w() {
  return U().mcpClientModule();
}

var x = p(() => u({})), j = p(() => u({
  callback_url: o().describe("The full callback URL from the browser address bar after authorizing, e.g. http://localhost:<port>/callback?code=...&state=...")
}));

function F() {
  return a.isSSH() || a.CLAUDE_CODE_REMOTE || Fn();
}

var H = new K(() => new Map), q = 18e4;

function W(e) {
  try {
    let r = new URL(e).searchParams.get("redirect_uri");
    if (r) return r;
  } catch {}
  return "http://localhost:<port>/callback";
}

function B$(e, r) {
  if (ve()) return [];
  let n = BL(e, r, {
    detail: "origin"
  });
  return [ G(e, r, n), V(e, r) ];
}

function L(e) {
  let r = e !== void 0 ? EY(e) : ZLn();
  return "available automatically";
}

function _(e) {
  return "The server's tools should now be available.";
}

function G(e, r, n) {
  let d = r.type ?? "stdio", g = n && n !== d ? `${d} at ${Zps(n, 256)}` : d, y = `The "${fo(e)}" MCP server (${g}) is installed but requires authentication. ` + "Call this tool to start the OAuth flow \u2014 you'll receive an authorization URL to share with the user. " + `Once the user completes authorization in their browser, the server's real tools will become ${L()}.`;
  return {
    name: zs(e, X9t),
    isMcp: !0,
    mcpInfo: {
      serverName: e,
      toolName: X9t,
      serverType: d,
      source: zD(e, r),
      ...r.pluginSource !== void 0 && {
        pluginSource: r.pluginSource
      },
      isAuthStub: !0,
      serverId: mAe(r),
      serverIdStamp: ATe(e, r)
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    toAutoClassifierInput: () => e,
    userFacingName: () => `${e} - authenticate (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Authenticate ${e} MCP server`,
    async description() {
      return y;
    },
    async prompt() {
      return y;
    },
    get inputSchema() {
      return x();
    },
    async checkPermissions(b) {
      return {
        behavior: "allow",
        updatedInput: b
      };
    },
    async call(b, s) {
      let c = Ec(e, r);
      if (c === "managed-policy") return {
        data: {
          status: "error",
          message: dW(e, c, r, `${oer(e)}. Only an organization admin can change this; do not retry or ask the user to enable it.`)
        }
      };
      if (Co(e)) return {
        data: {
          status: "error",
          message: `MCP server ${fo(e)} is disabled. Ask the user to enable it in /mcp before authenticating.`
        }
      };
      if (c === "project-approval") return {
        data: {
          status: "error",
          message: `${ser(e)}. Ask the user to approve it; do not retry until they have.`
        }
      };
      let h = S2(e, r);
      if (h.kind === "claudeai-proxy") return {
        data: {
          status: "unsupported",
          message: `This is a claude.ai MCP connector. Ask the user to run /mcp and select "${fo(e)}" to authenticate.`
        }
      };
      if (h.kind === "unsupported-transport") return {
        data: {
          status: "unsupported",
          message: `Server "${fo(e)}" uses ${d} transport which does not support OAuth from this tool. Ask the user to run /mcp and authenticate manually.`
        }
      };
      if (h.kind === "anthropic-hosted") return {
        data: {
          status: "unsupported",
          message: La(h.message, 1024, "none")
        }
      };
      let i = H.of(s.session.host), m = i.get(e);
      if (m !== void 0 && m.flow === C().getActiveOAuthPromise(e) && m.receivesPastedCallbacks() && zn(m.config, h.config) && m.accountToken !== void 0 && m.accountToken === yVr() && m.identityEpoch === Or() && Date.now() - m.startedAt < q) return I({
        serverName: e,
        config: r,
        authUrlPromise: m.authUrl,
        oauthPromise: m.flow,
        reused: !0,
        tools: s.options.tools
      });
      let R, T = new Promise(f => {
        R = f;
      }), M, A = C().performMCPOAuthFlow(e, h.config, f => R?.(f), void 0, {
        skipBrowserOpen: !0,
        onWaitingForCallback: f => {
          M = f;
        }
      });
      C().setActiveOAuthPromise(e, A);
      let k = {
        flow: A,
        authUrl: T,
        receivesPastedCallbacks: () => M !== void 0 && C().getOAuthCallbackSubmitter(e) === M,
        config: h.config,
        accountToken: yVr(),
        identityEpoch: Or(),
        startedAt: Date.now()
      };
      i.set(e, k), A.catch(() => {}).finally(() => {
        if (i.get(e) === k) i.delete(e);
      });
      let O = k.identityEpoch;
      return A.then(async () => {
        if (Or() !== O) {
          re(e, "OAuth completed after an identity change; discarding without reconnecting");
          return;
        }
        if (eTe(s.storageV5), Co(e) || UW(e, r)) {
          re(e, "OAuth completed but the server is now disabled or policy-blocked; not reconnecting");
          return;
        }
        let f = await w().reconnectMcpServerImpl(e, r, s.storageV5, s.credentials);
        if (Or() !== O) {
          re(e, "OAuth completed after an identity change; discarding the stale reconnect");
          return;
        }
        let D = s.getMcp().clients.some(S => S.name === e), P = s.session.mcpSessionWiring.connections();
        if (!D || P === void 0 || Co(e) || UW(e, r)) {
          re(e, "OAuth completed after the server was removed, disabled, or policy-blocked; discarding the fresh connection"), 
          w().clearServerCache(e, r).catch(S => re(e, `Orphan-connection cleanup failed: ${Wo(S, r)}`)), 
          P?.markReconnectDiscarded(e, r);
          return;
        }
        let E = P.adoptServer(e, f);
        if (E !== "adopted") {
          re(e, `Sign-in finished, but its connection was not adopted (${E}); discarding it`), 
          w().clearServerCache(e, r).catch(S => re(e, `Orphan-connection cleanup failed: ${Wo(S, r)}`));
          return;
        }
        re(e, `OAuth complete, reconnected with ${f.tools.length} tool(s)`);
      }).catch(f => {
        Ho(e, `OAuth flow failed after tool-triggered start: ${Kb(wc(e, r, l(f)))}`);
      }), I({
        serverName: e,
        config: r,
        authUrlPromise: T,
        oauthPromise: A,
        reused: !1,
        tools: s.options.tools
      });
    },
    mapToolResultToToolResultBlockParam(b, s) {
      return {
        tool_use_id: s,
        type: "tool_result",
        content: b.message
      };
    }
  };
}

async function I({serverName: e, config: r, authUrlPromise: n, oauthPromise: d, reused: g, tools: y}) {
  let b = g ? `A sign-in for ${fo(e)} that started earlier is still in progress, so the link below is that sign-in's link, not a new one. If the user says the sign-in page showed an error before they could approve access, ask them to run /mcp and sign in there instead.\n\n` : "";
  try {
    let s = await Promise.race([ n, d.then(() => null) ]);
    if (s) {
      let c = zs(e, J9t), h = W(s), i = F() ? `\n\nThis session is remote, so after authorizing the browser will try to load \`${h}?code=...\` and show a connection error \u2014 that's expected. Ask the user to copy the full URL from the browser's address bar and paste it into chat, then call \`${c}\` with that URL as \`callback_url\`.` : `\n\nIf the browser shows a connection error on the redirect page, ask the user to paste the full URL from the address bar and call \`${c}\` with it.`;
      return {
        data: {
          status: "auth_url",
          authUrl: s,
          message: `${b}Ask the user to open this URL in their browser to authorize the ${fo(e)} MCP server:\n\n${s}\n\nOnce they complete the flow, the server's tools will become ${L(y)}.${i}`
        }
      };
    }
    return {
      data: {
        status: "auth_url",
        message: `Authentication completed silently for ${fo(e)}. ${_(y)}`
      }
    };
  } catch (s) {
    let c = La(wc(e, r, l(s)));
    return {
      data: {
        status: "error",
        message: `Failed to start OAuth flow for ${fo(e)}: ${c}. Ask the user to run /mcp and authenticate manually.`
      }
    };
  }
}

function V(e, r) {
  let n = zs(e, X9t), d = `Complete an in-progress OAuth flow for the "${fo(e)}" MCP server by submitting the callback URL. Call \`${n}\` first to start the flow and get the authorization URL. ` + "After the user authorizes in their browser, the browser is redirected to a `http://localhost:<port>/callback?code=...&state=...` URL \u2014 " + "on remote sessions that page fails to load, but the URL in the address bar is still valid. Pass that full URL here as `callback_url`.";
  return {
    name: zs(e, J9t),
    isMcp: !0,
    mcpInfo: {
      serverName: e,
      toolName: J9t,
      serverType: r.type ?? "stdio",
      source: zD(e, r),
      ...r.pluginSource !== void 0 && {
        pluginSource: r.pluginSource
      },
      isAuthStub: !0,
      serverId: mAe(r),
      serverIdStamp: ATe(e, r)
    },
    isEnabled: () => !0,
    isConcurrencySafe: () => !1,
    isReadOnly: () => !1,
    toAutoClassifierInput: () => e,
    userFacingName: () => `${e} - complete authentication (MCP)`,
    maxResultSizeChars: 1e4,
    renderToolUseMessage: () => `Complete authentication for ${e} MCP server`,
    async description() {
      return d;
    },
    async prompt() {
      return d;
    },
    get inputSchema() {
      return j();
    },
    async checkPermissions(g) {
      return {
        behavior: "allow",
        updatedInput: g
      };
    },
    async call(g, y) {
      let {callback_url: b} = g, s = C().getOAuthCallbackSubmitter(e);
      if (!s) return {
        data: {
          status: "error",
          message: `No OAuth flow is in progress for ${fo(e)}. Call \`${n}\` first, then retry with the callback URL.`
        }
      };
      let c = !1;
      try {
        let i = new URL(b);
        c = i.searchParams.has("code") || i.searchParams.has("error");
      } catch {}
      if (!c) return {
        data: {
          status: "error",
          message: "Invalid callback URL: missing authorization code. Ask the user to paste the full redirect URL from their browser's address bar, including the `?code=...&state=...` query string."
        }
      };
      let h = C().getActiveOAuthPromise(e);
      if (!s(b)) return {
        data: {
          status: "error",
          message: `That callback URL belongs to a different sign-in attempt for ${fo(e)} (its state does not match the flow in progress), or carries no authorization code. The current flow is still waiting: ask the user for the URL from the page this sign-in opened, then retry.`
        }
      };
      try {
        return await h, {
          data: {
            status: "success",
            message: `Authentication complete for ${fo(e)}. ${_(y.options.tools)}`
          }
        };
      } catch (i) {
        if (i instanceof C().AuthenticationCancelledError) return {
          data: {
            status: "error",
            message: `The OAuth flow for ${fo(e)} was cancelled (a newer attempt may have superseded it). Call \`${n}\` again to restart.`
          }
        };
        return {
          data: {
            status: "error",
            message: `Authentication failed for ${fo(e)}: ${La(wc(e, r, l(i)))}`
          }
        };
      }
    },
    mapToolResultToToolResultBlockParam(g, y) {
      return {
        tool_use_id: y,
        type: "tool_result",
        content: g.message
      };
    }
  };
}

export { Obn, jGe, ESt, WGe, kSt, eTe, B$ };
