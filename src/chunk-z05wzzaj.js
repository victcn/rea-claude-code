// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Fn } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { jOe, un } from "./chunk-y752zmas.js";

import { m, f } from "./chunk-3ykz5st8.js";

import { a } from "./chunk-j016gcgm.js";

import { se, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Ja } from "./chunk-2msx6erf.js";

import { vwe, gC, OH, Ewe, JCr } from "./chunk-xywp7esx.js";

import { Xn } from "./chunk-x35dw27e.js";

import { kv } from "./chunk-hazy64h6.js";

import { _B } from "./chunk-w45fptzy.js";

import { join as D } from "path";

async function hTe(r) {
  try {
    return (await Xn().readAsync(r))?.designOauth ?? null;
  } catch (o) {
    return t(`Failed to read design OAuth tokens: ${l(o)}`, {
      level: "error"
    }), null;
  }
}

async function Rwn(r, o) {
  try {
    let n = !1, s = await Xn().mutate(e => {
      if (o?.onlyIf && !o.onlyIf(e.designOauth)) return n = !0, e;
      return {
        ...e,
        designOauth: r
      };
    });
    return n ? {
      ...s,
      raced: !0
    } : s;
  } catch (n) {
    return t(`Failed to save design OAuth tokens: ${l(n)}`, {
      level: "error"
    }), {
      success: !1,
      warning: "Failed to save design OAuth tokens"
    };
  }
}

async function T(r) {
  try {
    await Xn().mutate(o => {
      if (!o.designOauth) return o;
      if (!r(o.designOauth)) return o;
      let n = {
        ...o
      };
      return delete n.designOauth, n;
    });
  } catch (o) {
    t(`Failed to clear design OAuth tokens: ${l(o)}`, {
      level: "error"
    });
  }
}

var y = ".design_oauth_refresh.lock", A = 5;

class O extends Error {
  constructor() {
    super("Design OAuth lock contention: another process is holding the refresh lock");
    this.name = "DesignOauthLockContendedError";
  }
}

async function C(r) {
  let o = kv();
  await se().mkdir(o);
  let n = D(o, y), s = !1, e, c = 0;
  while (!e) {
    c++;
    try {
      e = await Ja(n, {
        lockfilePath: n,
        realpath: !1,
        stale: 6e4,
        update: 5e3,
        onCompromised: u => {
          s = !0, t(`Design OAuth refresh lock compromised: ${u.message}`, {
            level: "error"
          });
        }
      });
    } catch (u) {
      if (u.code === "ELOCKED") {
        if (c < A) {
          await J(1e3 + Math.random() * 1e3);
          continue;
        }
        throw new O;
      }
      throw u;
    }
  }
  let h = {
    isCompromised: () => s
  }, i = JCr();
  try {
    return await r(h);
  } finally {
    try {
      try {
        await e();
      } catch (u) {
        t(`Design OAuth refresh lock release failed: ${l(u)}`, {
          level: "error"
        });
      }
    } finally {
      i();
    }
  }
}

async function _() {
  let r = Xn();
  return r.invalidateCache?.(), (await r.readAsync())?.designOauth ?? null;
}

async function dqr(r) {
  let o = await hTe(r);
  if (!o?.accessToken) return {
    ok: !1,
    reason: "needs_design_login"
  };
  if (!OH(o.expiresAt)) return {
    ok: !0,
    accessToken: o.accessToken
  };
  try {
    return await C(async n => {
      let s = await _();
      if (!s?.accessToken) return {
        ok: !1,
        reason: "needs_design_login"
      };
      if (!OH(s.expiresAt)) return {
        ok: !0,
        accessToken: s.accessToken
      };
      if (!s.refreshToken) {
        let e = s.refreshToken;
        return await T(c => c.refreshToken === e), {
          ok: !1,
          reason: "needs_design_login"
        };
      }
      if (!Array.isArray(s.scopes) || s.scopes.length === 0) {
        let e = s.refreshToken;
        return await T(c => c.refreshToken === e), {
          ok: !1,
          reason: "needs_design_login"
        };
      }
      if (n.isCompromised()) return f("oauth_token_refresh", "design_oauth_refresh_lock_compromised"), 
      {
        ok: !1,
        reason: "design_refresh_failed",
        detail: "another process is refreshing the design token"
      };
      try {
        let e = await vwe(s.refreshToken, {
          clientId: s.clientId,
          scopes: s.scopes,
          skipProfileFetch: !0
        });
        if (!e.refreshToken || !e.expiresAt) {
          if (e.refreshToken && e.refreshToken !== s.refreshToken) await gC(e.refreshToken, s.clientId);
          return {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "refresh response missing refresh_token or expiry"
          };
        }
        if (!jOe.every(i => e.scopes.includes(i))) {
          if (e.refreshToken) await gC(e.refreshToken, s.clientId);
          let i = s.refreshToken;
          return await T(u => u.refreshToken === i), {
            ok: !1,
            reason: "needs_design_login",
            detail: "refresh response missing design scopes"
          };
        }
        let c = s.refreshToken, h = await Rwn({
          accessToken: e.accessToken,
          refreshToken: e.refreshToken,
          expiresAt: e.expiresAt,
          scopes: e.scopes.filter(i => jOe.some(u => u === i)),
          clientId: s.clientId
        }, {
          onlyIf: i => i?.refreshToken === c
        });
        if (h.raced) {
          await gC(e.refreshToken, s.clientId);
          let i = await _();
          return i?.accessToken && !OH(i.expiresAt) ? {
            ok: !0,
            accessToken: i.accessToken
          } : {
            ok: !1,
            reason: "needs_design_login"
          };
        }
        if (!h.success) t("Design OAuth refresh succeeded but persist failed; continuing with in-memory token.", {
          level: "error"
        });
        return {
          ok: !0,
          accessToken: e.accessToken
        };
      } catch (e) {
        if (n.isCompromised()) {
          let c = await _();
          if (c?.accessToken && !OH(c.expiresAt)) return {
            ok: !0,
            accessToken: c.accessToken
          };
          if (!Ewe(e)) f("oauth_token_refresh", "design_oauth_refresh_lock_compromised");
          return {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "another process is refreshing the design token"
          };
        }
        if (Ewe(e)) {
          let c = s.refreshToken;
          return await T(h => h.refreshToken === c), {
            ok: !1,
            reason: "needs_design_login",
            detail: "design authorization expired"
          };
        }
        return {
          ok: !1,
          reason: "design_refresh_failed",
          detail: l(e)
        };
      }
    });
  } catch (n) {
    if (n instanceof O) f("oauth_token_refresh", "design_oauth_refresh_lock_contention"); else d(n), 
    m("oauth_token_refresh", "design_oauth_refresh_lock_error");
    return {
      ok: !1,
      reason: "design_refresh_failed",
      detail: l(n)
    };
  }
}

function xwn() {
  return a.CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID ?? un().DESIGN_CLIENT_ID;
}

function nDe() {
  return !xwn().startsWith("00000000-");
}

async function Eer(r, o) {
  let n = jOe.filter(s => !r.scopes.includes(s));
  if (n.length > 0) {
    if (r.refreshToken) await gC(r.refreshToken, o);
    return {
      ok: !1,
      message: `The authorization server did not grant the design scopes (missing: ${n.join(", ")}) \u2014 the Claude Design app registration may be incomplete or out of date.`
    };
  }
  if (!r.refreshToken || !r.expiresAt) {
    if (r.refreshToken) await gC(r.refreshToken, o);
    return {
      ok: !1,
      message: "The token response was missing a refresh token or expiry \u2014 cannot store a usable design credential."
    };
  }
  return {
    ok: !0,
    slot: {
      accessToken: r.accessToken,
      refreshToken: r.refreshToken,
      expiresAt: r.expiresAt,
      scopes: r.scopes.filter(s => jOe.some(e => e === s)),
      clientId: o
    }
  };
}

function b2t() {
  return a.isSSH() || a.CLAUDE_CODE_REMOTE === !0 || Fn();
}

var I = 3e5;

async function Pwn(r, o) {
  if (r?.aborted) return {
    ok: !1,
    reason: "interrupted",
    message: "Design login was interrupted."
  };
  if (!nDe()) return {
    ok: !1,
    reason: "unconfigured",
    message: "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client."
  };
  if (b2t() && !o?.onManualCode) return {
    ok: !1,
    reason: "remote",
    message: "This session is remote, so the browser can't reach the local sign-in listener. Run /design-login instead \u2014 it supports pasting the authorization code manually."
  };
  let n = xwn(), s = new _B, e = !1, c = !1, h;
  try {
    let i = o?.onAuthUrl;
    o?.onManualCode?.((k, p) => s.handleManualAuthCodeInput({
      authorizationCode: k,
      state: p
    }));
    let u = s.startOAuthFlow(i ? async (k, p) => {
      i(p ?? k, k);
    } : async () => {}, {
      loginWithClaudeAi: !0,
      oauthClient: {
        clientId: n,
        scopes: jOe
      },
      skipProfileFetch: !0,
      successRedirectUrl: un().CLAUDEAI_SUCCESS_URL,
      ...i && {
        skipBrowserOpen: !0
      }
    });
    u.then(k => {
      if (c && k.refreshToken) gC(k.refreshToken, n);
    }).catch(() => {});
    let w = await Promise.race([ u, new Promise((k, p) => {
      h = setTimeout(() => {
        e = !0, c = !0, p(Error("design login timed out"));
      }, I), r?.addEventListener("abort", () => {
        c = !0, p(Error("design login interrupted"));
      }, {
        once: !0
      });
    }) ]), g = await Eer(w, n);
    if (!g.ok) return {
      ok: !1,
      reason: "invalid",
      message: g.message
    };
    if (r?.aborted) return await gC(g.slot.refreshToken, g.slot.clientId), {
      ok: !1,
      reason: "interrupted",
      message: "Design login was interrupted."
    };
    if (!(await Rwn(g.slot)).success) return await gC(g.slot.refreshToken, g.slot.clientId), 
    {
      ok: !1,
      reason: "save_failed",
      message: "Could not save the design credential to secure storage. Retry, or run /design-login."
    };
    return {
      ok: !0,
      accessToken: g.slot.accessToken
    };
  } catch (i) {
    if (c = !0, r?.aborted) return {
      ok: !1,
      reason: "interrupted",
      message: "Design login was interrupted."
    };
    if (e) return {
      ok: !1,
      reason: "timed_out",
      message: "The browser authorization timed out after 5 minutes. Retry, or run /design-login for the manual flow."
    };
    return {
      ok: !1,
      reason: "failed",
      cause: l(i),
      message: `The browser authorization failed (${l(i)}). Run /design-login to retry with the manual flow.`
    };
  } finally {
    if (h !== void 0) clearTimeout(h);
    s.cleanup();
  }
}

export { hTe, Rwn, dqr, xwn, nDe, Eer, b2t, Pwn };
