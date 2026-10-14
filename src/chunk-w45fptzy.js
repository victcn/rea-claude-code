// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { i } from "./chunk-hedpgw9m.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { un } from "./chunk-y752zmas.js";

import { d } from "./chunk-6ah1819r.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { WAr, Bz, JWn, zAr, jvo, GAr } from "./chunk-xywp7esx.js";

import { hLt, Mft, QBe, B9 } from "./chunk-qqd24q2y.js";

import { aoe } from "./chunk-7xj6dhxv.js";

import { js } from "./chunk-9g86mkx2.js";

import { createServer as k } from "http";

var L = 200;

class u {
  localServer;
  port=0;
  promiseResolver=null;
  promiseRejecter=null;
  expectedState=null;
  pendingResponse=null;
  callbackPath;
  codeReceived=!1;
  constructor(e = "/callback") {
    this.localServer = k(), this.callbackPath = e;
  }
  async start(e) {
    return new Promise((t, r) => {
      this.localServer.once("error", o => {
        m("oauth_callback_listener", "oauth_callback_server_start_failed"), r(Error(`Failed to start OAuth callback server: ${o.message}`));
      }), this.localServer.listen(e ?? 0, "127.0.0.1", () => {
        let o = this.localServer.address();
        this.port = o.port, t(this.port);
      });
    });
  }
  getPort() {
    return this.port;
  }
  hasPendingResponse() {
    return this.pendingResponse !== null;
  }
  async waitForAuthorization(e, t) {
    return new Promise((r, o) => {
      this.promiseResolver = r, this.promiseRejecter = o, this.expectedState = e, this.startLocalListener(t);
    });
  }
  handleSuccessRedirect(e, t) {
    if (!this.pendingResponse) return;
    if (t) {
      t(this.pendingResponse, e), this.pendingResponse = null, i("tengu_oauth_automatic_redirect", {
        custom_handler: !0
      });
      return;
    }
    let r = Bz(e) ? un().CLAUDEAI_SUCCESS_URL : un().CONSOLE_SUCCESS_URL;
    this.pendingResponse.writeHead(302, {
      Location: r
    }), this.pendingResponse.end(), this.pendingResponse = null, i("tengu_oauth_automatic_redirect", {});
  }
  handleErrorRedirect() {
    if (!this.pendingResponse) return;
    let e = un().CLAUDEAI_SUCCESS_URL;
    this.pendingResponse.writeHead(302, {
      Location: e
    }), this.pendingResponse.end(), this.pendingResponse = null, i("tengu_oauth_automatic_redirect_error", {});
  }
  startLocalListener(e) {
    this.localServer.on("request", this.handleRedirect.bind(this)), this.localServer.on("error", this.handleError.bind(this)), 
    e();
  }
  handleRedirect(e, t) {
    let r = new URL(e.url || "", `http://${e.headers.host || "localhost"}`);
    if (r.pathname !== this.callbackPath) {
      t.writeHead(404), t.end();
      return;
    }
    let o = r.searchParams.get("code") ?? void 0, n = r.searchParams.get("state") ?? void 0, s = r.searchParams.get("error") ?? void 0;
    if (!o && s && hLt()) {
      this.respondToErrorCallback({
        error: s,
        errorDescription: r.searchParams.get("error_description") ?? void 0,
        errorUri: r.searchParams.get("error_uri") ?? void 0,
        state: n,
        res: t
      });
      return;
    }
    this.validateAndRespond(o, n, t);
  }
  validateAndRespond(e, t, r) {
    if (t === this.expectedState && this.answerIfCodeReceived(r)) return;
    if (!e) {
      m("oauth_callback_listener", "oauth_callback_no_code"), r.writeHead(400), r.end("Authorization code not found"), 
      this.reject(Error("No authorization code received"));
      return;
    }
    if (this.rejectOnStateMismatch(t, r)) return;
    this.codeReceived = !0, this.pendingResponse = r, g("oauth_callback_listener"), 
    this.resolve(e);
  }
  respondToErrorCallback({error: e, errorDescription: t, errorUri: r, state: o, res: n}) {
    if (this.rejectOnStateMismatch(o, n)) return;
    if (this.answerIfCodeReceived(n)) return;
    let s = t === Mft;
    m("oauth_callback_listener", s ? "oauth_callback_account_on_hold" : "oauth_callback_authorize_error"), 
    n.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8"
    }), n.end(s ? "Your account is on hold. You can close this window." : "Sign-in was canceled or failed. You can close this window."), 
    this.reject(new B9(C(e), t === void 0 ? void 0 : C(t), s ? QBe(r) : void 0));
  }
  answerIfCodeReceived(e) {
    if (!this.codeReceived) return !1;
    return e.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8"
    }), e.end("Sign-in is already finishing. You can close this window."), !0;
  }
  rejectOnStateMismatch(e, t) {
    if (e === this.expectedState) return !1;
    return m("oauth_callback_listener", "oauth_callback_state_mismatch"), t.writeHead(400), 
    t.end("Invalid state parameter"), this.reject(Error("Invalid state parameter")), 
    !0;
  }
  handleError(e) {
    m("oauth_callback_listener", "oauth_callback_server_error"), d(e), this.close(), 
    this.reject(e);
  }
  resolve(e) {
    if (this.promiseResolver) this.promiseResolver(e), this.promiseResolver = null, 
    this.promiseRejecter = null;
  }
  reject(e) {
    if (this.promiseRejecter) this.promiseRejecter(e), this.promiseResolver = null, 
    this.promiseRejecter = null;
  }
  close() {
    if (this.pendingResponse) this.handleErrorRedirect();
    if (this.localServer) this.localServer.removeAllListeners(), this.localServer.close();
  }
  [Symbol.dispose]() {
    this.close();
  }
}

function C(e) {
  return ne(e.replace(/[\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]/gu, ""), L);
}

import { createHash as E, randomBytes as _ } from "crypto";

function h(e) {
  return e.toString("base64").replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function A() {
  return h(_(32));
}

function S(e) {
  let t = E("sha256");
  return t.update(e), h(t.digest());
}

function w() {
  return h(_(32));
}

class _B {
  codeVerifier;
  authCodeListener=null;
  port=null;
  manualAuthCodeResolver=null;
  authorizationCodeReceived=!1;
  constructor() {
    this.codeVerifier = A();
  }
  async startOAuthFlow(e, t) {
    this.authorizationCodeReceived = !1, this.authCodeListener = new u, this.port = await this.authCodeListener.start();
    let r = S(this.codeVerifier), o = w(), n = {
      codeChallenge: r,
      state: o,
      port: this.port,
      loginWithClaudeAi: t?.loginWithClaudeAi,
      inferenceOnly: t?.inferenceOnly,
      orgUUID: t?.orgUUID,
      loginHint: t?.loginHint,
      loginMethod: t?.loginMethod,
      oauthClient: t?.oauthClient
    }, s = zAr({
      ...n,
      isManual: !0
    }), p = zAr({
      ...n,
      isManual: !1
    }), b = await this.waitForAuthorizationCode(o, async () => {
      if (t?.skipBrowserOpen) await e(s, p); else await e(s), await js(p);
    }), l = this.authCodeListener?.hasPendingResponse() ?? !1;
    i("tengu_oauth_auth_code_received", {
      automatic: l
    });
    try {
      let a = await jvo(b, {
        state: o,
        codeVerifier: this.codeVerifier,
        port: this.port,
        useManualRedirect: !l,
        expiresIn: t?.expiresIn,
        clientId: t?.oauthClient?.clientId
      }), c = t?.skipProfileFetch ? null : await GAr(a.access_token);
      if (l) {
        let f = JWn(a.scope), v = t?.successRedirectUrl;
        if (v) this.authCodeListener?.handleSuccessRedirect(f, R => {
          R.writeHead(302, {
            Location: v
          }), R.end();
        }); else this.authCodeListener?.handleSuccessRedirect(f);
      }
      return g("oauth_login"), this.formatTokens(a, {
        subscriptionType: c?.subscriptionType ?? null,
        rateLimitTier: c?.rateLimitTier ?? null,
        profile: c?.rawProfile,
        clientId: t?.oauthClient?.clientId
      });
    } catch (a) {
      if (m("oauth_login", "oauth_login_failed"), l) this.authCodeListener?.handleErrorRedirect();
      if (!t?.inferenceOnly && !t?.oauthClient) aoe({
        action: "login",
        success: !1,
        authMethod: "oauth",
        error: a
      });
      throw a;
    } finally {
      this.authCodeListener?.close();
    }
  }
  async waitForAuthorizationCode(e, t) {
    return new Promise((r, o) => {
      this.manualAuthCodeResolver = r, this.authCodeListener?.waitForAuthorization(e, t).then(n => {
        this.manualAuthCodeResolver = null, this.authorizationCodeReceived = !0, r(n);
      }).catch(n => {
        this.manualAuthCodeResolver = null, o(n);
      });
    });
  }
  handleManualAuthCodeInput(e) {
    if (this.manualAuthCodeResolver) this.authorizationCodeReceived = !0, this.manualAuthCodeResolver(e.authorizationCode), 
    this.manualAuthCodeResolver = null, this.authCodeListener?.close();
  }
  formatTokens(e, {subscriptionType: t, rateLimitTier: r, profile: o, clientId: n}) {
    return {
      accessToken: e.access_token,
      refreshToken: e.refresh_token,
      expiresAt: Date.now() + e.expires_in * 1e3,
      refreshTokenExpiresAt: WAr(e.refresh_token_expires_in, !0),
      scopes: JWn(e.scope),
      subscriptionType: t,
      rateLimitTier: r,
      profile: o,
      clientId: n,
      tokenAccount: e.account ? {
        uuid: e.account.uuid,
        emailAddress: e.account.email_address,
        organizationUuid: e.organization?.uuid,
        organizationName: e.organization?.name,
        workspaceId: e.workspace?.id,
        workspaceName: e.workspace?.name
      } : void 0
    };
  }
  hasReceivedAuthorizationCode() {
    return this.authorizationCodeReceived;
  }
  cleanup() {
    this.authCodeListener?.close(), this.manualAuthCodeResolver = null;
  }
}

export { _B };
