// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { DSt, kVr, d5o } from "./chunk-wcya8cef.js";

import { x, j, l } from "./chunk-b0z4bv3v.js";

import { Y } from "./chunk-kawq2919.js";

import { re } from "./chunk-6ah1819r.js";

import { so } from "./chunk-3ykz5st8.js";

import { Xn } from "./chunk-x35dw27e.js";

import { Zr, DD } from "./chunk-9bzw65k3.js";

import { aa } from "./chunk-w4hwgefc.js";

import { MD } from "./chunk-4nk5f3x7.js";

import { sGt, oTe } from "./chunk-rwk95gwq.js";

import { js } from "./chunk-9g86mkx2.js";

import { O } from "./chunk-1xnsr4dy.js";

import { randomBytes as b } from "crypto";

import { createServer as _ } from "http";

import { parse as E } from "url";

var T = 3e5, v = 3e4, X = 60;

function eGt(n) {
  try {
    let t = new URL(n);
    return t.pathname = t.pathname.replace(/\/+$/, ""), t.host = t.host.toLowerCase(), 
    t.toString();
  } catch {
    return n.replace(/\/+$/, "");
  }
}

async function zbn(n) {
  let r = (await Xn().readAsync())?.mcpXaaIdp?.[eGt(n)];
  if (!r) return;
  if (r.expiresAt - Date.now() <= X * 1e3) return;
  return r.idToken;
}

async function k(n, t, e) {
  await Xn().mutate(r => ({
    ...r,
    mcpXaaIdp: {
      ...r.mcpXaaIdp,
      [eGt(n)]: {
        idToken: t,
        expiresAt: e
      }
    }
  }));
}

async function D4s(n, t) {
  let e = A(t), r = e ? e * 1e3 : Date.now() + 36e5;
  return await k(n, t, r), r;
}

async function rZn(n) {
  let t = eGt(n);
  try {
    await Xn().mutate(e => {
      if (!e.mcpXaaIdp?.[t]) return e;
      let r = {
        ...e.mcpXaaIdp
      };
      return delete r[t], {
        ...e,
        mcpXaaIdp: r
      };
    });
  } catch (e) {
    re("xaa", `clearIdpIdToken(${Zr(t)}) failed: ${l(e)}`);
  }
}

async function L4s(n, t) {
  try {
    return await Xn().mutate(e => ({
      ...e,
      mcpXaaIdpConfig: {
        ...e.mcpXaaIdpConfig,
        [eGt(n)]: {
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

async function oZn(n) {
  return (await Xn().readAsync())?.mcpXaaIdpConfig?.[eGt(n)]?.clientSecret;
}

async function N4s(n) {
  let t = eGt(n);
  try {
    await Xn().mutate(e => {
      if (!e.mcpXaaIdpConfig?.[t]) return e;
      let r = {
        ...e.mcpXaaIdpConfig
      };
      return delete r[t], {
        ...e,
        mcpXaaIdpConfig: r
      };
    });
  } catch (e) {
    re("xaa", `clearIdpClientSecret(${Zr(t)}) failed: ${l(e)}`);
  }
}

function P(n, t) {
  return fetch(n, {
    ...t,
    ...aa({
      url: String(n)
    }),
    signal: AbortSignal.timeout(v)
  }).catch(e => DD(e, n));
}

async function Gbn(n) {
  let t = n.endsWith("/") ? n : n + "/";
  if (!URL.canParse(".well-known/openid-configuration", t)) throw new x(`XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${Zr(n)}`, "XAA IdP: OIDC discovery failed: issuer is not a valid URL");
  let e = new URL(".well-known/openid-configuration", t), r = await P(e, {
    headers: {
      Accept: "application/json"
    }
  });
  if (!r.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${r.status} at ${Zr(e.href)}`);
  let i;
  try {
    i = await r.json();
  } catch {
    throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${Zr(e.href)} (captive portal or proxy?)`);
  }
  let a = DSt.safeParse(i);
  if (!a.success) throw Error(`XAA IdP: invalid OIDC metadata: ${a.error.message}`);
  if (!URL.canParse(a.data.token_endpoint) || new URL(a.data.token_endpoint).protocol !== "https:") throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${Zr(a.data.token_endpoint)}`);
  return a.data;
}

function A(n) {
  let t = n.split(".");
  if (t.length !== 3) return;
  try {
    let e = Y(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof e.exp === "number" ? e.exp : void 0;
  } catch {
    return;
  }
}

function R(n, t, e, r) {
  let i = null, a = null, c = null, f = () => {
    if (i?.removeAllListeners(), i?.on("error", () => {}), i?.close(), i = null, a) clearTimeout(a), 
    a = null;
    if (e && c) e.removeEventListener("abort", c), c = null;
  };
  return new Promise((m, g) => {
    let p = !1, I = (s, o) => {
      if (p) return;
      p = !0, f(), m({
        code: s,
        iss: o
      });
    }, d = s => {
      if (p) return;
      p = !0, f(), g(s);
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
    i = _((s, o) => {
      let u = E(s.url || "", !0);
      if (u.pathname !== "/callback") {
        o.writeHead(404), o.end();
        return;
      }
      let y = u.query.code, C = u.query.state, h = u.query.error, S = sGt(u.query.iss);
      if (h) {
        let w = u.query.error_description;
        o.writeHead(400, {
          "Content-Type": "text/html"
        }), o.end(MD({
          ok: !1,
          heading: "Sign-in failed",
          message: "Close this tab and try again from Claude Code.",
          detail: `${h}: ${w ?? ""}`
        })), d(Error(`XAA IdP: ${h}${w ? ` \u2014 ${w}` : ""}`));
        return;
      }
      if (C !== t) {
        o.writeHead(400, {
          "Content-Type": "text/html"
        }), o.end(MD({
          ok: !1,
          heading: "Sign-in failed",
          message: "State mismatch. Close this tab and try again."
        })), d(Error("XAA IdP: state mismatch (possible CSRF)"));
        return;
      }
      if (!y) {
        o.writeHead(400, {
          "Content-Type": "text/html"
        }), o.end(MD({
          ok: !1,
          heading: "Sign-in failed",
          message: "No authorization code received. Close this tab and try again."
        })), d(Error("XAA IdP: callback missing code"));
        return;
      }
      o.writeHead(200, {
        "Content-Type": "text/html"
      }), o.end(MD({
        ok: !0,
        heading: "Sign-in complete",
        message: "You can close this tab and return to Claude Code."
      })), I(y, S);
    }), i.on("error", s => {
      if (s.code === "EADDRINUSE") {
        let o = O() === "windows" ? `netstat -ano | findstr :${n}` : `lsof -ti:${n} -sTCP:LISTEN`;
        d(Error(`XAA IdP: callback port ${n} is already in use. Run \`${o}\` to find the holder.`));
      } else d(Error(`XAA IdP: callback server failed: ${s.message}`));
    }), i.listen(n, "127.0.0.1", () => {
      try {
        r();
      } catch (s) {
        d(j(s));
      }
    }), i.unref(), a = setTimeout(s => s(Error("XAA IdP: login timed out")), T, d), 
    a.unref();
  });
}

async function hVr(n) {
  return so("mcp_xaa_idp_login", async () => {
    let {idpIssuer: t, idpClientId: e} = n, r = await zbn(t);
    if (r) return re("xaa", `Using cached id_token for ${Zr(t)}`), r;
    re("xaa", `No cached id_token for ${Zr(t)}; starting OIDC login`);
    let i = await Gbn(t), a = n.callbackPort ?? await oTe(), c = `http://localhost:${a}/callback`, f = b(32).toString("base64url"), m = {
      client_id: e,
      ...n.idpClientSecret && {
        client_secret: n.idpClientSecret
      }
    }, {authorizationUrl: g, codeVerifier: p} = await kVr(t, {
      metadata: i,
      clientInformation: m,
      redirectUrl: c,
      scope: "openid",
      state: f
    }), I = await R(a, f, n.abortSignal, () => {
      if (n.onAuthorizationUrl(g.toString()), !n.skipBrowserOpen) re("xaa", "Opening browser to IdP authorization endpoint"), 
      js(g.toString());
    }), d = await d5o(t, {
      metadata: i,
      clientInformation: m,
      authorizationCode: I.code,
      iss: I.iss,
      codeVerifier: p,
      redirectUri: c,
      fetchFn: P
    });
    if (!d.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let s = A(d.id_token), o = s ? s * 1e3 : Date.now() + (d.expires_in ?? 3600) * 1e3;
    try {
      await k(t, d.id_token, o), re("xaa", `Cached id_token for ${Zr(t)} (expires ${new Date(o).toISOString()})`);
    } catch (u) {
      re("xaa", `id_token cache write failed: ${l(u)}`);
    }
    return d.id_token;
  });
}

export { eGt, zbn, D4s, rZn, L4s, oZn, N4s, Gbn, hVr };
