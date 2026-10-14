// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q7n, Q2r, LYo } from "./chunk-4srkdgc7.js";

import { x, j, l } from "./chunk-b0z4bv3v.js";

import { Y } from "./chunk-kawq2919.js";

import { re } from "./chunk-6ah1819r.js";

import { so } from "./chunk-3ykz5st8.js";

import { Xn } from "./chunk-x35dw27e.js";

import { Zr, DD } from "./chunk-9bzw65k3.js";

import { aa } from "./chunk-w4hwgefc.js";

import { MD } from "./chunk-4nk5f3x7.js";

import { oTe } from "./chunk-rwk95gwq.js";

import { js } from "./chunk-9g86mkx2.js";

import { O } from "./chunk-1xnsr4dy.js";

import { randomBytes as C } from "crypto";

import { createServer as _ } from "http";

import { parse as b } from "url";

var E = 3e5, T = 3e4, v = 60;

function Pzt(r) {
  try {
    let t = new URL(r);
    return t.pathname = t.pathname.replace(/\/+$/, ""), t.host = t.host.toLowerCase(), 
    t.toString();
  } catch {
    return r.replace(/\/+$/, "");
  }
}

async function Y_n(r) {
  let n = (await Xn().readAsync())?.mcpXaaIdp?.[Pzt(r)];
  if (!n) return;
  if (n.expiresAt - Date.now() <= v * 1e3) return;
  return n.idToken;
}

async function P(r, t, e) {
  await Xn().mutate(n => ({
    ...n,
    mcpXaaIdp: {
      ...n.mcpXaaIdp,
      [Pzt(r)]: {
        idToken: t,
        expiresAt: e
      }
    }
  }));
}

async function u4s(r, t) {
  let e = A(t), n = e ? e * 1e3 : Date.now() + 36e5;
  return await P(r, t, n), n;
}

async function W7n(r) {
  let t = Pzt(r);
  try {
    await Xn().mutate(e => {
      if (!e.mcpXaaIdp?.[t]) return e;
      let n = {
        ...e.mcpXaaIdp
      };
      return delete n[t], {
        ...e,
        mcpXaaIdp: n
      };
    });
  } catch (e) {
    re("xaa", `clearIdpIdToken(${Zr(t)}) failed: ${l(e)}`);
  }
}

async function p4s(r, t) {
  try {
    return await Xn().mutate(e => ({
      ...e,
      mcpXaaIdpConfig: {
        ...e.mcpXaaIdpConfig,
        [Pzt(r)]: {
          clientSecret: t
        }
      }
    }));
  } catch (e) {
    return {
      success: !1,
      warning: l(e)
    };
  }
}

async function z7n(r) {
  return (await Xn().readAsync())?.mcpXaaIdpConfig?.[Pzt(r)]?.clientSecret;
}

async function f4s(r) {
  let t = Pzt(r);
  try {
    await Xn().mutate(e => {
      if (!e.mcpXaaIdpConfig?.[t]) return e;
      let n = {
        ...e.mcpXaaIdpConfig
      };
      return delete n[t], {
        ...e,
        mcpXaaIdpConfig: n
      };
    });
  } catch (e) {
    re("xaa", `clearIdpClientSecret(${Zr(t)}) failed: ${l(e)}`);
  }
}

function k(r, t) {
  return fetch(r, {
    ...t,
    ...aa({
      url: String(r)
    }),
    signal: AbortSignal.timeout(T)
  }).catch(e => DD(e, r));
}

async function X_n(r) {
  let t = r.endsWith("/") ? r : r + "/";
  if (!URL.canParse(".well-known/openid-configuration", t)) throw new x(`XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${Zr(r)}`, "XAA IdP: OIDC discovery failed: issuer is not a valid URL");
  let e = new URL(".well-known/openid-configuration", t), n = await k(e, {
    headers: {
      Accept: "application/json"
    }
  });
  if (!n.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${n.status} at ${Zr(e.href)}`);
  let o;
  try {
    o = await n.json();
  } catch {
    throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${Zr(e.href)} (captive portal or proxy?)`);
  }
  let i = q7n.safeParse(o);
  if (!i.success) throw Error(`XAA IdP: invalid OIDC metadata: ${i.error.message}`);
  if (!URL.canParse(i.data.token_endpoint) || new URL(i.data.token_endpoint).protocol !== "https:") throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${Zr(i.data.token_endpoint)}`);
  return i.data;
}

function A(r) {
  let t = r.split(".");
  if (t.length !== 3) return;
  try {
    let e = Y(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof e.exp === "number" ? e.exp : void 0;
  } catch {
    return;
  }
}

function X(r, t, e, n) {
  let o = null, i = null, c = null, m = () => {
    if (o?.removeAllListeners(), o?.on("error", () => {}), o?.close(), o = null, i) clearTimeout(i), 
    i = null;
    if (e && c) e.removeEventListener("abort", c), c = null;
  };
  return new Promise((f, g) => {
    let p = !1, h = a => {
      if (p) return;
      p = !0, m(), f(a);
    }, d = a => {
      if (p) return;
      p = !0, m(), g(a);
    };
    if (e) {
      if (c = () => d(Error("XAA IdP: login cancelled")), e.aborted) {
        c();
        return;
      }
      e.addEventListener("abort", c, {
        once: !0
      });
    }
    o = _((a, s) => {
      let u = b(a.url || "", !0);
      if (u.pathname !== "/callback") {
        s.writeHead(404), s.end();
        return;
      }
      let y = u.query.code, S = u.query.state, I = u.query.error;
      if (I) {
        let w = u.query.error_description;
        s.writeHead(400, {
          "Content-Type": "text/html"
        }), s.end(MD({
          ok: !1,
          heading: "Sign-in failed",
          message: "Close this tab and try again from Claude Code.",
          detail: `${I}: ${w ?? ""}`
        })), d(Error(`XAA IdP: ${I}${w ? ` \u2014 ${w}` : ""}`));
        return;
      }
      if (S !== t) {
        s.writeHead(400, {
          "Content-Type": "text/html"
        }), s.end(MD({
          ok: !1,
          heading: "Sign-in failed",
          message: "State mismatch. Close this tab and try again."
        })), d(Error("XAA IdP: state mismatch (possible CSRF)"));
        return;
      }
      if (!y) {
        s.writeHead(400, {
          "Content-Type": "text/html"
        }), s.end(MD({
          ok: !1,
          heading: "Sign-in failed",
          message: "No authorization code received. Close this tab and try again."
        })), d(Error("XAA IdP: callback missing code"));
        return;
      }
      s.writeHead(200, {
        "Content-Type": "text/html"
      }), s.end(MD({
        ok: !0,
        heading: "Sign-in complete",
        message: "You can close this tab and return to Claude Code."
      })), h(y);
    }), o.on("error", a => {
      if (a.code === "EADDRINUSE") {
        let s = O() === "windows" ? `netstat -ano | findstr :${r}` : `lsof -ti:${r} -sTCP:LISTEN`;
        d(Error(`XAA IdP: callback port ${r} is already in use. Run \`${s}\` to find the holder.`));
      } else d(Error(`XAA IdP: callback server failed: ${a.message}`));
    }), o.listen(r, "127.0.0.1", () => {
      try {
        n();
      } catch (a) {
        d(j(a));
      }
    }), o.unref(), i = setTimeout(a => a(Error("XAA IdP: login timed out")), E, d), 
    i.unref();
  });
}

async function j2r(r) {
  return so("mcp_xaa_idp_login", async () => {
    let {idpIssuer: t, idpClientId: e} = r, n = await Y_n(t);
    if (n) return re("xaa", `Using cached id_token for ${Zr(t)}`), n;
    re("xaa", `No cached id_token for ${Zr(t)}; starting OIDC login`);
    let o = await X_n(t), i = r.callbackPort ?? await oTe(), c = `http://localhost:${i}/callback`, m = C(32).toString("base64url"), f = {
      client_id: e,
      ...r.idpClientSecret && {
        client_secret: r.idpClientSecret
      }
    }, {authorizationUrl: g, codeVerifier: p} = await Q2r(t, {
      metadata: o,
      clientInformation: f,
      redirectUrl: c,
      scope: "openid",
      state: m
    }), h = await X(i, m, r.abortSignal, () => {
      if (r.onAuthorizationUrl(g.toString()), !r.skipBrowserOpen) re("xaa", "Opening browser to IdP authorization endpoint"), 
      js(g.toString());
    }), d = await LYo(t, {
      metadata: o,
      clientInformation: f,
      authorizationCode: h,
      codeVerifier: p,
      redirectUri: c,
      fetchFn: k
    });
    if (!d.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let a = A(d.id_token), s = a ? a * 1e3 : Date.now() + (d.expires_in ?? 3600) * 1e3;
    try {
      await P(t, d.id_token, s), re("xaa", `Cached id_token for ${Zr(t)} (expires ${new Date(s).toISOString()})`);
    } catch (u) {
      re("xaa", `id_token cache write failed: ${l(u)}`);
    }
    return d.id_token;
  });
}

export { Pzt, Y_n, u4s, W7n, p4s, z7n, f4s, X_n, j2r };
