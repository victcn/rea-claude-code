// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { l, E } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { i } from "./chunk-hedpgw9m.js";

import { Wee, NC } from "./chunk-y752zmas.js";

import { t } from "./chunk-kawq2919.js";

import { I, ne, My, uD } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { _Pe, oPs, dDt, Wut, cDt, bwe, uDt, Swe, sPs, Gut, SPe, SZ, KUe, YUe, fDt, gC, Dnn, zEo, NCr, $Cr, QIs, q3e, zwe, Y3e, WCr, die, gpt, An, oU, w9, pko, TMs, Ts, Ce } from "./chunk-xywp7esx.js";

import { si } from "./chunk-9yajep3y.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { p } from "./chunk-jkzenvsk.js";

import { hn, dt, mmt } from "./chunk-dd98x6x7.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { Xn, V9 } from "./chunk-x35dw27e.js";

import { tee, X2n, QBe, B9, J2n } from "./chunk-qqd24q2y.js";

import { Qa } from "./chunk-nc0jxmkt.js";

import { dp } from "./chunk-mw643xee.js";

import { aoe } from "./chunk-7xj6dhxv.js";

import { XB, cO } from "./chunk-1pzzpwf7.js";

import { Qqe } from "./chunk-bp2n0w3d.js";

import { uwt, $6o, F6o, U6o, ler, B6o, j6o } from "./chunk-wmk5m9vh.js";

import { w } from "./chunk-9rj1xaxr.js";

import { pl } from "./chunk-1pxjahnn.js";

import { AM } from "./chunk-150qmpyg.js";

import { Pe } from "./chunk-7w995nyx.js";

import { an, st, s, n, zt, MA, qr } from "./chunk-3vw306fv.js";

import { jae, v6, E6 } from "./chunk-sgf2dgh5.js";

import { Te } from "./chunk-dmfz0ptg.js";

import { rt, Wy } from "./chunk-ytac37d4.js";

import { Fo } from "./chunk-jb3h1y0s.js";

import { y7e } from "./chunk-mggq5sa8.js";

import { Er } from "./chunk-t54wevgw.js";

import { G } from "./chunk-j706jx8h.js";

import { Qyt } from "./chunk-wct14vga.js";

import { Xe } from "./chunk-yrpmvsj8.js";

import { sr } from "./chunk-stbhy0k1.js";

import { hi } from "./chunk-vks3d7q4.js";

import { Zyt } from "./chunk-979j60rg.js";

import { _ze, oUr, sUr } from "./chunk-4f9jhmnc.js";

import { IL } from "./chunk-9x0yncgs.js";

import { l2 } from "./chunk-wwjrcnvz.js";

import { Q, e, r } from "./chunk-xx3xgkvz.js";

import { _B } from "./chunk-w45fptzy.js";

import { pW, js } from "./chunk-9g86mkx2.js";

import { ZXo } from "./chunk-dk14h9bn.js";

import { ae, P, R, y, F } from "./chunk-cpyd3eya.js";

import { me, yn, St } from "./chunk-dexzwy8h.js";

import { Qo } from "./chunk-eha3vdmz.js";

import { S, _n } from "./chunk-m8ez8fhk.js";

F();

class Ue extends Error {
  fallbackCures;
  causeSummary;
  constructor(v, o) {
    super(v, {
      cause: o.cause
    });
    this.fallbackCures = o.fallbackCures, this.causeSummary = o.fallbackCures ? o.causeSummary : null;
  }
}

async function _t(v, o, N = {}) {
  try {
    let B = await $t(v, o, N);
    return g("oauth_console_profile_login"), B;
  } catch (B) {
    if (B instanceof Ue && B.fallbackCures) f("oauth_console_profile_login", "refused_fell_back"); else m("oauth_console_profile_login", B instanceof Ue ? "refused" : "error");
    throw B;
  }
}

async function $t(v, o, {loginHint: N, loginMethod: B, orgUUID: H}) {
  try {
    await ler();
  } catch (W) {
    let j = F6o(W);
    if (j === null) throw W;
    let q = U6o(W);
    throw new Ue(l(W), j && q !== null ? {
      fallbackCures: !0,
      causeSummary: q,
      cause: W
    } : {
      fallbackCures: !1,
      cause: W
    });
  }
  let C = await v.startOAuthFlow(o, {
    loginWithClaudeAi: !1,
    oauthClient: {
      clientId: uwt,
      scopes: $6o
    },
    loginHint: N,
    loginMethod: B,
    orgUUID: H
  }), M = jt(C);
  if (M instanceof Error) throw await yt(C), M;
  await Vt(await Yt());
  let O = await oUr(C, {}), D;
  try {
    let W = C.tokenAccount;
    D = await B6o({
      accessToken: C.accessToken,
      refreshToken: M.refreshToken,
      expiresAtMs: M.expiresAtMs,
      scopes: C.scopes,
      organizationUuid: W?.organizationUuid ?? C.profile?.organization.uuid,
      organizationName: W?.organizationName ?? C.profile?.organization.name,
      accountEmail: W?.emailAddress ?? C.profile?.account.email,
      workspaceId: W?.workspaceId,
      workspaceName: W?.workspaceName
    });
  } catch (W) {
    if (!await j6o(M.refreshToken)) await yt(C);
    throw W;
  }
  return await Dnn(C.accessToken).catch(W => t(String(W), {
    level: "error"
  })), await sUr({
    ...O
  }), D;
}

async function Yt() {
  if (Oe() !== "firstParty") return null;
  let v = Xn();
  v.invalidateCache?.();
  let o = (await v.readAsync())?.claudeAiOauth;
  return o?.refreshToken ? {
    refreshToken: o.refreshToken,
    clientId: o.clientId
  } : null;
}

async function Vt(v) {
  if (v === null) return;
  await gC(v.refreshToken, v.clientId);
  try {
    await Xn().mutate(o => ({
      ...o,
      claudeAiOauth: void 0
    }));
  } catch (o) {
    t(`Console profile login: could not clear the replaced claude.ai login record: ${l(o)}`, {
      level: "error"
    });
  }
}

function jt(v) {
  if (!v.scopes.includes(NC)) return Error("The organization didn't grant inference access to this sign-in, so Claude Code can't use it.");
  if (!v.refreshToken) return Error("The sign-in came back without a refresh token, so it would stop working within hours. Try again.");
  if (v.expiresAt === null || !Number.isFinite(v.expiresAt)) return Error("The sign-in came back without the token's expiry, so it can't be refreshed on time. Try again.");
  return {
    refreshToken: v.refreshToken,
    expiresAtMs: v.expiresAt
  };
}

async function yt(v) {
  if (v.refreshToken) await gC(v.refreshToken, uwt);
}

F();

var Xt = "urn:ietf:params:oauth:grant-type:device_code", Kt = "claude_code", qt = new Set([ "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "CERT_UNTRUSTED" ]), tt = 254, Zt = "Sign-in timed out while waiting for you to continue. Try again.", At = "The gateway's TLS certificate changed during sign-in: it no longer matches the one you trusted. Aborting without storing credentials; start the sign-in again to review the new certificate.";

function ot(v) {
  let o = l(v);
  if (o.includes(Wut)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) is a symlink, which it does not follow. Replace the link with the file itself and try again.";
  if (o.includes(cDt)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) could not be read. Try again; if it keeps failing, check the file.";
  if (uDt(v) !== void 0) return At;
  return o;
}

function Jt(v) {
  let o = v?.response?.data;
  if (typeof o !== "object" || o === null) return;
  let N = o.error_description;
  if (typeof N !== "string") return;
  return ne(My(N), 300).trim() || void 0;
}

function Qt(v) {
  let o = E(v) ?? E(v?.cause), N = l(v);
  if (!(o !== void 0 && qt.has(o) || /self[- ]?signed certificate|unable to (verify the first|get (local )?issuer) certificate|certificate not trusted/i.test(N))) return null;
  return "Could not verify the gateway's TLS certificate. If your gateway uses a private CA or self-signed certificate: Claude Code reads your OS trust " + "store by default on the native binary and Node \u226522.15, so if the CA is " + "already installed there, upgrade to a current runtime. Otherwise set " + "NODE_EXTRA_CA_CERTS to the CA certificate PEM file before starting \u2014 " + "e.g. `export NODE_EXTRA_CA_CERTS=/path/to/ca.pem` \u2014 or add it under " + "`env.NODE_EXTRA_CA_CERTS` in your user settings (~/.claude/settings.json).";
}

var eo = p(() => St({
  device_authorization_endpoint: me().optional(),
  token_endpoint: me().optional(),
  revocation_endpoint: me().nullish().catch(void 0)
}));

function Ct(v, o, N) {
  let B = NCr(v, o);
  if (B) return B;
  if (o) t(`[gateway-login] ignoring advertised endpoint ${o} (not same-origin with ${v}); using ${N}`);
  return `${v}${N}`;
}

var to = p(() => St({
  device_code: me(),
  user_code: me(),
  verification_uri: me(),
  verification_uri_complete: me().optional(),
  expires_in: yn(),
  interval: yn().optional()
}));

function nt({onDone: v, onCancel: o, initialUrl: N, namedBy: B = "administrator", internalNetworks: H, screenLocked: C}) {
  let {credentials: M} = Pe(), [O, D] = y({
    state: "url_input"
  }), W = void 0, j = N ?? (void 0)?.url, q = (void 0)?.caption ?? (B === "developer" ? `Gateway URL from your settings file (${hn("userSettings")}), not from your organization's managed settings.` : "Your organization's gateway URL (set by managed settings):"), U = R(0), ue = R(!1);
  P(() => () => {
    U.current += 1;
  }, []);
  let Ae = C ? () => D({
    state: "url_input"
  }) : o;
  function fe() {
    U.current += 1, Ae();
  }
  async function ye(V) {
    let L = ++U.current;
    D({
      state: "connecting"
    });
    try {
      let k = _Pe(V), z = await oPs(k, H);
      if (L !== U.current) return;
      let X = z ? await dDt(k, 1e4, z) : void 0;
      if (L !== U.current) return;
      let u = await Qa.get(`${k}/.well-known/oauth-authorization-server`, {
        headers: {
          "User-Agent": Qo()
        },
        timeout: 1e4
      });
      if (L !== U.current) return;
      let se = eo().safeParse(u.data), a = se.success ? se.data : void 0, A = NCr(k, a?.revocation_endpoint);
      if (a?.revocation_endpoint && !A) t(`[gateway-login] ignoring advertised revocation endpoint ${a.revocation_endpoint} (not same-origin with ${k}); sign-out will not revoke`);
      let le = {
        deviceAuthorizationEndpoint: Ct(k, a?.device_authorization_endpoint, "/oauth/device_authorization"),
        tokenEndpoint: Ct(k, a?.token_endpoint, "/oauth/token"),
        ...A && {
          revocationEndpoint: A
        }
      }, {hostname: he, fingerprint: _e, localAddress: xe, remoteAddress: h} = X ?? await dDt(k);
      if (L !== U.current) return;
      let _ = await bwe(he, M);
      if (L !== U.current) return;
      if (_ === _e) await ke(k, le, _e); else D({
        state: "trust_prompt",
        url: k,
        hostname: he,
        fingerprint: _e,
        previouslyPinned: _,
        endpoints: le,
        ...z && {
          route: `from ${xe} to ${h}, both inside declared ${z}`
        }
      });
    } catch (k) {
      if (L !== U.current) return;
      let z = Qt(k);
      D(z ? {
        state: "error",
        message: z,
        detail: l(k)
      } : {
        state: "error",
        message: ot(k)
      });
    }
  }
  async function ke(V, L, k) {
    let z = ++U.current;
    D({
      state: "connecting"
    });
    try {
      let X = Swe(k, L.deviceAuthorizationEndpoint), {data: u} = await Qa.post(L.deviceAuthorizationEndpoint, new URLSearchParams({
        surface: Kt
      }).toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": Qo()
        },
        timeout: 1e4,
        maxRedirects: 0,
        ...X && {
          httpsAgent: X
        }
      });
      if (z !== U.current) return;
      let se = to().safeParse(u);
      if (!se.success) throw Error("gateway device authorization endpoint returned malformed response");
      let a = se.data;
      js(a.verification_uri_complete ?? a.verification_uri), D({
        state: "polling",
        url: V,
        userCode: a.user_code,
        verificationUri: a.verification_uri
      }), await x(V, L, a.device_code, a.interval ?? 5, z, k);
    } catch (X) {
      if (z !== U.current) return;
      if ($Cr(X) === "slow_down") {
        D({
          state: "error",
          message: "The gateway is limiting sign-in attempts right now. Wait a few minutes and try again.",
          detail: Jt(X)
        });
        return;
      }
      D({
        state: "error",
        message: ot(X)
      });
    }
  }
  async function x(V, L, k, z, X, u) {
    let {tokenEndpoint: se} = L, a = Math.max(1, z);
    while (X === U.current) {
      if (await J(a * 1e3), X !== U.current) return;
      try {
        let A = Swe(u, se), {data: le} = await Qa.post(se, new URLSearchParams({
          grant_type: Xt,
          device_code: k
        }).toString(), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": Qo()
          },
          timeout: 1e4,
          maxRedirects: 0,
          ...A && {
            httpsAgent: A
          }
        });
        if (X !== U.current) return;
        let he = zEo().safeParse(le);
        if (!he.success) throw Error("gateway token endpoint returned malformed response");
        await pe(V, L, he.data, X);
        return;
      } catch (A) {
        if (X !== U.current) return;
        let le = $Cr(A);
        if (le === "authorization_pending") continue;
        if (le === "slow_down") {
          a += 5;
          continue;
        }
        if (le === "expired_token") {
          D({
            state: "error",
            message: "Sign-in timed out before the browser flow completed. Try again."
          });
          return;
        }
        if (le === "access_denied") {
          D({
            state: "error",
            message: "Sign-in was denied in the browser."
          });
          return;
        }
        D({
          state: "error",
          message: ot(A)
        });
        return;
      }
    }
  }
  async function pe(V, L, k, z) {
    let X = k.email ?? "", u = ne(X, 16 * tt), se = uD(u), a = u.length < X.length || se.length > tt ? `${ne(se, tt)}\u2026` : se, A = {
      url: V,
      jwt: k.access_token,
      expiresAt: Date.now() + k.expires_in * 1e3,
      tokenEndpoint: L.tokenEndpoint,
      ...L.revocationEndpoint && {
        revocationEndpoint: L.revocationEndpoint
      },
      ...k.refresh_token && {
        idpRefreshToken: k.refresh_token
      },
      ...a && {
        email: a
      }
    }, {hostname: le, fingerprint: he} = await dDt(V);
    if (z !== U.current) return;
    let _e = await bwe(le, M);
    if (z !== U.current) return;
    if (_e !== he) {
      D({
        state: "error",
        message: At
      });
      return;
    }
    if (a) {
      ue.current = !1, D({
        state: "confirm_account",
        auth: A,
        email: a,
        saving: !1
      });
      return;
    }
    await ce(A, z);
  }
  async function ce(V, L) {
    try {
      await QIs(V, M);
    } catch (k) {
      if (L !== U.current) return;
      let z = l(k);
      t(`[gateway-login] secureStorage write failed: ${z}`, {
        level: "error"
      }), D({
        state: "error",
        message: z
      });
      return;
    }
    if (L !== U.current) return;
    aoe({
      action: "login",
      success: !0,
      authMethod: "oauth"
    }), v();
  }
  let Se = O.state === "url_input";
  switch (rt("confirm:yes", () => {
    if (j) ye(j);
  }, {
    context: "Confirmation",
    isActive: Se
  }), rt("confirm:no", C ? () => !1 : o, {
    context: "Confirmation",
    isActive: Se
  }), Wy((V, L) => L.escape, {
    isActive: O.state === "confirm_account" && O.saving
  }), O.state) {
   case "url_input":
    if (!j) return r(s, {
      flexDirection: "column",
      gap: 1,
      children: [ e(n, {
        bold: !0,
        children: "Cloud gateway"
      }), e(n, {
        color: "warning",
        children: "Gateway login is required by your organization's policy, but no gateway URL is configured. Contact your IT administrator."
      }) ]
    });
    return r(s, {
      flexDirection: "column",
      gap: 1,
      children: [ e(n, {
        bold: !0,
        children: "Cloud gateway"
      }), e(n, {
        children: q
      }), e(s, {
        borderDimColor: !0,
        borderStyle: "round",
        paddingLeft: 1,
        children: e(n, {
          children: j
        })
      }), r(n, {
        dimColor: !0,
        children: [ "Press Enter to connect", C ? "" : " \xb7 Esc for other login methods" ]
      }) ]
    });

   case "polling":
    return e(kt, {
      userCode: O.userCode,
      verificationUri: O.verificationUri,
      onCancel: fe
    });

   case "connecting":
    return e(bt, {
      label: "Connecting to gateway\u2026",
      onCancel: fe
    });

   case "trust_prompt":
    return r(s, {
      flexDirection: "column",
      gap: 1,
      children: [ r(n, {
        bold: !0,
        children: [ "Trust gateway ", e(n, {
          color: "suggestion",
          children: O.hostname
        }), "?" ]
      }), O.previouslyPinned ? e(n, {
        color: "warning",
        children: "The TLS certificate for this gateway has changed since you last connected. Only continue if your administrator has confirmed a certificate rotation."
      }) : e(n, {
        children: "You haven't connected to this gateway before. Once trusted, it can push settings to this machine that execute commands and change your environment. Only continue if this is your organization's gateway."
      }), O.route && r(n, {
        dimColor: !0,
        children: [ "Connecting ", O.route ]
      }), r(n, {
        dimColor: !0,
        children: [ "Certificate fingerprint (SHA-256): ", O.fingerprint.slice(0, 16), "\u2026" ]
      }), e(sr, {
        hideIndexes: !0,
        confirmLabel: "Yes, trust this gateway",
        cancelLabel: C ? "No, go back" : "No, cancel login",
        focus: "cancel",
        onConfirm: () => {
          let V = U.current;
          sPs(O.hostname, O.fingerprint, M).then(() => {
            if (V !== U.current) return;
            return ke(O.url, O.endpoints, O.fingerprint);
          }).catch(L => {
            if (V !== U.current) return;
            D({
              state: "error",
              message: l(L)
            });
          });
        },
        onCancel: fe
      }) ]
    });

   case "confirm_account":
    return r(s, {
      flexDirection: "column",
      gap: 1,
      children: [ r(n, {
        bold: !0,
        children: [ "Signed in to Cloud gateway as", " ", e(n, {
          color: "suggestion",
          children: O.email
        }) ]
      }), O.saving ? r(s, {
        gap: 1,
        children: [ e(hi, {}), e(n, {
          dimColor: !0,
          children: "Finishing sign-in\u2026"
        }) ]
      }) : r(Q, {
        children: [ e(n, {
          children: "Continue only if this is your account; that organization's settings will then apply to this machine. Otherwise go back: nothing is saved, and you can sign in again."
        }), e(sr, {
          hideIndexes: !0,
          focus: "cancel",
          confirmLabel: "Yes, continue",
          cancelLabel: C ? "No, go back" : "No, cancel login",
          onConfirm: () => {
            if (ue.current) return;
            if (ue.current = !0, O.auth.expiresAt <= Date.now() && !O.auth.idpRefreshToken) {
              D({
                state: "error",
                message: Zt
              });
              return;
            }
            let V = U.current;
            D(L => L.state === "confirm_account" ? {
              ...L,
              saving: !0
            } : L), ce(O.auth, V);
          },
          onCancel: () => {
            if (ue.current) return;
            ue.current = !0, t("[gateway-login] signed-in account declined; nothing saved"), 
            Ae();
          }
        }) ]
      }) ]
    });

   case "error":
    return e(xt, {
      message: O.message,
      detail: O.detail,
      onCancel: Ae
    });
  }
}

function kt(v) {
  let H = w(13), {userCode: o, verificationUri: N, onCancel: B} = v, C;
  if (H[0] === S) C = {
    context: "Confirmation"
  }, H[0] = C; else C = H[0];
  rt("confirm:no", B, C);
  let M, O;
  if (H[1] === S) M = e(n, {
    bold: !0,
    children: "Cloud gateway \xb7 sign in"
  }), O = e(n, {
    children: "A browser window should have opened. After signing in with your identity provider, confirm this code on the verification page:"
  }), H[1] = M, H[2] = O; else M = H[1], O = H[2];
  let D;
  if (H[3] !== o) D = e(s, {
    borderDimColor: !0,
    borderStyle: "round",
    paddingX: 2,
    children: e(n, {
      bold: !0,
      color: "suggestion",
      children: o
    })
  }), H[3] = o, H[4] = D; else D = H[4];
  let W;
  if (H[5] === S) W = e(n, {
    dimColor: !0,
    children: "Browser didn't open? Visit:"
  }), H[5] = W; else W = H[5];
  let j;
  if (H[6] !== N) j = r(s, {
    flexDirection: "column",
    children: [ W, e(n, {
      dimColor: !0,
      wrap: "wrap",
      children: N
    }) ]
  }), H[6] = N, H[7] = j; else j = H[7];
  let q, U;
  if (H[8] === S) q = r(s, {
    gap: 1,
    children: [ e(hi, {}), e(n, {
      dimColor: !0,
      children: "Waiting for sign-in to complete in your browser\u2026"
    }) ]
  }), U = e(n, {
    dimColor: !0,
    children: "Press Esc to cancel"
  }), H[8] = q, H[9] = U; else q = H[8], U = H[9];
  let ue;
  if (H[10] !== D || H[11] !== j) ue = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ M, O, D, j, q, U ]
  }), H[10] = D, H[11] = j, H[12] = ue; else ue = H[12];
  return ue;
}

function bt(v) {
  let B = w(7), {label: o, onCancel: N} = v, H;
  if (B[0] === S) H = {
    context: "Confirmation"
  }, B[0] = H; else H = B[0];
  rt("confirm:no", N, H);
  let C;
  if (B[1] === S) C = e(hi, {}), B[1] = C; else C = B[1];
  let M;
  if (B[2] !== o) M = r(s, {
    gap: 1,
    children: [ C, e(n, {
      children: o
    }) ]
  }), B[2] = o, B[3] = M; else M = B[3];
  let O;
  if (B[4] === S) O = e(n, {
    dimColor: !0,
    children: "Press Esc to cancel"
  }), B[4] = O; else O = B[4];
  let D;
  if (B[5] !== M) D = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ M, O ]
  }), B[5] = M, B[6] = D; else D = B[6];
  return D;
}

function xt(v) {
  let H = w(9), {message: o, detail: N, onCancel: B} = v, C;
  if (H[0] === S) C = {
    context: "Confirmation"
  }, H[0] = C; else C = H[0];
  rt("confirm:no", B, C);
  let M;
  if (H[1] !== o) M = r(n, {
    color: "error",
    children: [ "Error: ", o ]
  }), H[1] = o, H[2] = M; else M = H[2];
  let O;
  if (H[3] !== N) O = N && e(n, {
    dimColor: !0,
    children: N
  }), H[3] = N, H[4] = O; else O = H[4];
  let D;
  if (H[5] === S) D = e(n, {
    dimColor: !0,
    children: "Press Esc to go back"
  }), H[5] = D; else D = H[5];
  let W;
  if (H[6] !== M || H[7] !== O) W = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ M, O, D ]
  }), H[6] = M, H[7] = O, H[8] = W; else W = H[8];
  return W;
}

function Do(Z) {
  return Z.title;
}

function No(ge) {
  return {
    label: r(n, {
      children: [ ge.title, " \xb7 ", e(n, {
        dimColor: !0,
        children: ge.hint
      }) ]
    }),
    value: ge.value
  };
}

function Mo(Y) {
  return Y.value === "foundry";
}

var pt = "Paste code here if prompted > ", Ye = "The recommended sign-in isn't available on this machine";

function uo(v) {
  let o = Math.round(v / 86400);
  if (o < 1) return "less than a day";
  if (o === 365) return "1 year";
  return `${o} ${I(o, "day")}`;
}

function dke({onDone: v, onAuthSuccess: o, onFreshPickerChange: N, onAccountOnHold: B, startingMessage: H, mode: C = "login", expiresIn: M, forceLoginMethod: O, urlOutdent: D = 0, allowContinueWithoutLogin: W = !1}) {
  let j = pl(), {storageV5: q, credentials: U} = Pe(), ue = Fo(oe => oe.proactivityLevel), Ae = Fo(oe => oe.toolPermissionContext), fe = (j ? l2 : 0) + D, ye = dt(), {forceLoginGatewayUrl: ke, gatewayInternalNetworks: x} = mmt(), [pe] = y(q3e), ce = ke ?? pe, Se = ce === ke ? "administrator" : "developer", V = w9(), L = V === "gateway", k = L ? "gateway" : O ?? V, z = k === "claudeai" ? "Login method pre-selected: Subscription Plan (Claude Pro/Max)" : k === "console" ? "Login method pre-selected: API usage billing (Anthropic Console)" : null, X = null, u = AM(), se = an(), [a, A] = y(() => {
    if (C === "setup-token") return {
      state: "ready_to_start"
    };
    if (k === "claudeai" || k === "console") return {
      state: "ready_to_start"
    };
    if (L || pe) return {
      state: "gateway_setup"
    };
    return {
      state: "idle"
    };
  }), le = R(!1);
  P(() => {
    if (a.state !== "idle" && a.state !== "platform_setup" && a.state !== "console_method") le.current = !0;
    N?.(a.state === "idle" && !le.current);
  }, [ a.state, N ]);
  let [he, _e] = y(""), [xe, h] = y(0), [_] = y(() => new _B), [T, K] = y(() => C === "setup-token" || k === "claudeai"), [re, ie] = y(!1), [de, ve] = y(null), Ne = pko(), Le = Oe() === "firstParty" && !Ne && ye.forceLoginOrgUUID === void 0 && k !== "claudeai", Me = SPe(), qe = SZ("firstParty") === void 0, Ht = ye.forceLoginMethod !== void 0 && T !== (ye.forceLoginMethod === "claudeai"), Ie = typeof ye.forceLoginOrgUUID === "string" && !Ht ? ye.forceLoginOrgUUID : void 0, [Fe, Ze] = y(!1), {copiedVia: Je, copy: Qe, reset: et} = jae(a.state === "waiting_for_login" ? a.url : null), wt = Te().columns - pt.length - 1, [be] = y(() => cO() && XB() !== "off");
  P(() => {
    if (k === "claudeai") i("tengu_oauth_claudeai_forced", {}); else if (k === "console") i("tengu_oauth_console_forced", {}); else if (L && !0 && C !== "setup-token") i("tengu_oauth_gateway_forced", {});
  }, [ k, L, C ]), qr(() => {
    if (a.state === "about_to_retry") A(a.nextState);
  }, a.state === "about_to_retry" ? 1e3 : null, [ a ]), rt("confirm:yes", () => {
    if (a.state !== "storage_failed") i(a.state === "gateway_done" ? "tengu_oauth_gateway_done" : "tengu_oauth_success", {
      loginWithClaudeAi: T
    });
    v();
  }, {
    context: "Confirmation",
    isActive: a.state === "success" && C !== "setup-token" || a.state === "storage_failed" && a.sessionAuth === "fresh" || a.state === "gateway_done"
  });
  let Ge = MA(), ze = R(!1);
  rt("confirm:yes", () => {
    if (ze.current) return;
    ze.current = !0, Ce(oe => ({
      ...oe,
      hasCompletedOnboarding: !0,
      lastOnboardingVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION
    }), q).then(() => {
      Ge.exit();
      let oe = ue !== void 0 && Ae !== void 0 ? ZXo({
        proactivityLevel: ue,
        toolPermissionContext: Ae
      }) : void 0;
      import("./chunk-c0k989ye.js").then(Z => Z.execRelaunch(oe ? {
        proactivity: oe
      } : {}));
    });
  }, {
    context: "Confirmation",
    isActive: a.state === "bedrock_done" || a.state === "vertex_done"
  }), rt("confirm:yes", () => A({
    state: "platform_setup"
  }), {
    context: "Confirmation",
    isActive: a.state === "aws_refresh_done"
  }), rt("confirm:yes", () => {
    if (a.state === "error" && a.toRetry) _e(""), A({
      state: "about_to_retry",
      nextState: a.toRetry
    }); else if (a.state === "storage_failed" && a.sessionAuth !== "fresh") _e(""), 
    A({
      state: "about_to_retry",
      nextState: k === "claudeai" || k === "console" ? {
        state: "ready_to_start"
      } : {
        state: "idle"
      }
    });
  }, {
    context: "Confirmation",
    isActive: a.state === "error" && !!a.toRetry || a.state === "storage_failed" && a.sessionAuth !== "fresh"
  }), rt("confirm:no", () => v(), {
    context: "Confirmation",
    isActive: W && (a.state === "storage_failed" && a.sessionAuth !== "fresh" || a.state === "error")
  }), rt("confirm:yes", () => A({
    state: "idle"
  }), {
    context: "Confirmation",
    isActive: a.state === "account_on_hold" && C !== "setup-token"
  }), P(() => {
    if (/^c+$/.test(he) && a.state === "waiting_for_login" && Fe) _e(""), Qe(a.url);
  }, [ he, a, Fe, Qe ]);
  async function Be(oe, Z) {
    if (!oe.trim()) {
      _e(""), h(0);
      return;
    }
    try {
      let [ge, Y] = oe.split("#");
      if (!ge || !Y) {
        A({
          state: "error",
          message: "Invalid code. Please make sure the full code was copied",
          toRetry: {
            state: "waiting_for_login",
            url: Z
          }
        });
        return;
      }
      i("tengu_oauth_manual_entry", {}), _.handleManualAuthCodeInput({
        authorizationCode: ge,
        state: Y
      });
    } catch (ge) {
      d(ge), A({
        state: "error",
        message: l(ge),
        toRetry: {
          state: "waiting_for_login",
          url: Z
        }
      });
    }
  }
  let Ee = ae(async () => {
    let oe = Z => {
      if (et(), Ze(!1), A({
        state: "waiting_for_login",
        url: Z
      }), pW()) Ze(!0); else se.setTimeout(() => Ze(!0), 3e3);
    };
    ve(null);
    try {
      let Z = KUe("firstParty");
      if (Z !== void 0) throw new Gut(Z);
      if (i("tengu_oauth_flow_start", {
        loginWithClaudeAi: T
      }), re && C !== "setup-token") {
        if (!Le) throw Error("Settings on this machine pin the login method or organization, so signing in without an API key is not available here.");
        try {
          await _t(_, async Y => oe(Y), {
            orgUUID: Ie
          }), A({
            state: "success"
          }), o?.(), IL({
            message: "Claude Code login successful",
            notificationType: "auth_success"
          }, u, {
            storageV5: q,
            credentials: U
          });
          return;
        } catch (Y) {
          if (!(Y instanceof Ue) || !Y.fallbackCures) throw Y;
          let Re = si(l(Y));
          ve({
            cause: Y.causeSummary !== null ? si(Y.causeSummary) : Re,
            message: Re
          }), t(`Keyless Console sign-in unavailable here, continuing with the API-key sign-in: ${Re}`, {
            level: "warn"
          });
        }
      }
      let ge = await _.startOAuthFlow(async Y => oe(Y), {
        loginWithClaudeAi: T,
        inferenceOnly: C === "setup-token",
        expiresIn: C === "setup-token" ? M ?? Wee : void 0,
        orgUUID: Ie
      }).catch(Y => {
        if (Y instanceof B9) throw Y;
        let Re = Y.message.includes("Token exchange failed"), we = V9(Y);
        throw A({
          state: "error",
          message: we ?? (Re ? "Failed to exchange authorization code for access token. Please try again." : Y.message),
          toRetry: C === "setup-token" ? {
            state: "ready_to_start"
          } : {
            state: "idle"
          }
        }), i("tengu_oauth_token_exchange_error", {
          ...dp(Y),
          ssl_error: we !== null
        }), Y;
      });
      if (C === "setup-token") A({
        state: "success",
        token: ge.accessToken,
        expiresAt: ge.expiresAt ?? void 0
      }), o?.(); else {
        let Y = await _ze(ge, {
          storageV5: q,
          credentials: U
        }), Re = await oU(U);
        if (!Re.valid) throw Error(Re.message);
        let we = Y?.storage;
        if (we && !we.success) {
          if (A({
            state: "storage_failed",
            backendName: we.backendName,
            sessionAuth: we.sessionAuth,
            transient: we.transient
          }), i("tengu_oauth_persist_failure_shown", {
            storageBackend: TMs(we.backendName),
            session_auth: c(we.sessionAuth),
            transient: we.transient === !0
          }), we.sessionAuth === "fresh") o?.();
          IL({
            message: we.transient ? "Claude Code login needs attention: credentials may not have been saved" : "Claude Code login needs attention: credentials could not be saved",
            notificationType: "auth_storage_failure"
          }, u, {
            storageV5: q,
            credentials: U
          });
        } else A({
          state: "success"
        }), o?.(), IL({
          message: "Claude Code login successful",
          notificationType: "auth_success"
        }, u, {
          storageV5: q,
          credentials: U
        });
      }
    } catch (Z) {
      if (J2n(Z)) {
        A({
          state: "account_on_hold",
          message: X2n(QBe(Z.errorUri))
        }), i("tengu_oauth_error", {
          account_on_hold: !0
        });
        return;
      }
      let ge = Z instanceof B9 ? Z.displayMessage : l(Z), Y = V9(Z);
      A({
        state: "error",
        message: Y ?? ge,
        ...fDt(Z) && {
          verbatim: !0
        },
        toRetry: {
          state: C === "setup-token" || k === "claudeai" || k === "console" && !Le ? "ready_to_start" : k === "console" ? "console_method" : "idle"
        }
      }), i("tengu_oauth_error", {
        ...dp(Z),
        ssl_error: Y !== null
      });
    }
  }, [ _, T, re, Le, C, M, Ie, u, se, o, k, q, U, et ]), $e = R(!1);
  return P(() => {
    if (a.state === "ready_to_start" && !$e.current) $e.current = !0, process.nextTick((oe, Z) => {
      oe().finally(() => {
        Z.current = !1;
      });
    }, Ee, $e);
  }, [ a.state, Ee ]), qr(() => {
    i("tengu_oauth_success", {
      loginWithClaudeAi: T
    }), v();
  }, C === "setup-token" && a.state === "success" ? 500 : null, [ C, a, T, v ]), qr(() => B?.(), C === "setup-token" && a.state === "account_on_hold" ? 500 : null, [ C, a, B ]), 
  P(() => () => {
    _.cleanup();
  }, [ _ ]), r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ a.state === "waiting_for_login" && Fe && r(s, {
      flexDirection: "column",
      gap: 1,
      paddingBottom: 1,
      marginX: fe ? -fe : void 0,
      children: [ r(s, {
        flexDirection: "column",
        paddingX: fe,
        children: [ r(s, {
          children: [ r(n, {
            dimColor: !0,
            children: [ "Browser didn't open? Use the url below to sign in", " " ]
          }), e(v6, {
            via: Je
          }) ]
        }), e(E6, {
          via: Je
        }) ]
      }), e(s, {
        children: e(zt, {
          url: a.url,
          assumeSupport: !0,
          children: e(n, {
            dimColor: !0,
            children: a.url
          })
        })
      }), be && e(s, {
        paddingX: fe,
        children: r(n, {
          dimColor: !0,
          children: [ "Hold ", Qqe(), " while selecting to use your terminal's native copy" ]
        })
      }) ]
    }, "urlToCopy"), C === "setup-token" && a.state === "success" && a.token && r(s, {
      flexDirection: "column",
      gap: 1,
      paddingTop: 1,
      children: [ e(n, {
        color: "success",
        children: "\u2713 Long-lived authentication token created successfully!"
      }), r(s, {
        flexDirection: "column",
        gap: 1,
        children: [ r(n, {
          children: [ "Your OAuth token (valid for", " ", uo(a.expiresAt !== void 0 && Number.isFinite(a.expiresAt) ? Math.round((a.expiresAt - Date.now()) / 1e3) : M ?? Wee), "):" ]
        }), e(n, {
          color: "warning",
          children: a.token
        }), e(n, {
          dimColor: !0,
          children: "Store this token securely. You won't be able to see it again."
        }), e(n, {
          dimColor: !0,
          children: "Use this token by setting: export CLAUDE_CODE_OAUTH_TOKEN=<token>"
        }) ]
      }) ]
    }, "tokenOutput"), e(s, {
      flexDirection: "column",
      gap: 1,
      children: e(Wt, {
        oauthStatus: a,
        mode: C,
        startingMessage: H,
        forcedMethodMessage: z,
        gatewayUnsupportedWarning: null,
        forceLoginGatewayUrl: ce,
        gatewayNamedBy: Se,
        gatewayInternalNetworks: x,
        gatewayScreenLocked: L,
        keyMintFallbackReason: de,
        showPastePrompt: Fe,
        pastedCode: he,
        setPastedCode: _e,
        cursorOffset: xe,
        setCursorOffset: h,
        textInputColumns: wt,
        handleSubmitCode: Be,
        setOAuthStatus: A,
        setLoginWithClaudeAi: K,
        setConsoleProfileLogin: ie,
        consoleProfileLoginAllowed: Le,
        allowedProviders: Me,
        firstPartyLoginAllowed: qe,
        onAuthSuccess: o,
        allowContinueWithoutLogin: W
      })
    }) ]
  });
}

function ht(v) {
  let N = w(4), {onComplete: o} = v, B;
  if (N[0] !== o) B = () => {
    let H = zwe();
    if (!H) {
      o(!1);
      return;
    }
    if (Y3e() && !Ts()) {
      o(!1);
      return;
    }
    let C = new AbortController;
    return WCr(H, C.signal).then(M => {
      if (C.signal.aborted) {
        return;
      }
      if (M) die(), gpt();
      o(M);
    }), () => C.abort();
  }, N[0] = o, N[1] = B; else B = N[1];
  let O;
  if (N[2] === S) O = [], N[2] = O; else O = N[2];
  P(B, O);
  let D;
  if (N[3] === S) D = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ r(s, {
      children: [ e(hi, {}), e(n, {
        children: "Running awsAuthRefresh\u2026"
      }) ]
    }), e(y7e, {}) ]
  }), N[3] = D; else D = N[3];
  return D;
}

var Pt = [ {
  value: "bedrock",
  providers: [ "bedrock" ],
  title: "Amazon Bedrock",
  hint: "interactive setup"
}, {
  value: "aws_refresh",
  providers: [ "anthropicAws", "bedrock", "mantle" ],
  title: "Claude Platform on AWS",
  hint: "refresh credentials"
}, {
  value: "foundry",
  providers: [ "foundry" ],
  title: "Microsoft Foundry",
  hint: "opens docs"
}, {
  value: "vertex",
  providers: [ "vertex" ],
  title: "Google Vertex AI",
  hint: "interactive setup"
} ];

function Wt(v) {
  let u = w(182), {oauthStatus: o, mode: N, startingMessage: B, forcedMethodMessage: H, gatewayUnsupportedWarning: C, forceLoginGatewayUrl: M, gatewayNamedBy: O, gatewayInternalNetworks: D, gatewayScreenLocked: W, keyMintFallbackReason: j, showPastePrompt: q, pastedCode: U, setPastedCode: ue, cursorOffset: Ae, setCursorOffset: fe, textInputColumns: ye, handleSubmitCode: ke, setOAuthStatus: x, setLoginWithClaudeAi: pe, setConsoleProfileLogin: ce, consoleProfileLoginAllowed: Se, allowedProviders: V, firstPartyLoginAllowed: L, onAuthSuccess: k, allowContinueWithoutLogin: z} = v, X = st(), se;
  if (u[0] === S) se = zwe(), u[0] = se; else se = u[0];
  let a = se, A;
  if (u[1] !== z || u[2] !== V || u[3] !== Se || u[4] !== Ae || u[5] !== L || u[6] !== M || u[7] !== H || u[8] !== D || u[9] !== O || u[10] !== W || u[11] !== C || u[12] !== ke || u[13] !== X || u[14] !== j || u[15] !== N || u[16] !== o.backendName || u[17] !== o.message || u[18] !== o.ok || u[19] !== o.sessionAuth || u[20] !== o.state || u[21] !== o.toRetry || u[22] !== o.token || u[23] !== o.transient || u[24] !== o.url || u[25] !== o.verbatim || u[26] !== k || u[27] !== U || u[28] !== ce || u[29] !== fe || u[30] !== pe || u[31] !== x || u[32] !== ue || u[33] !== q || u[34] !== B || u[35] !== ye) {
    A = _n;
    Ht: {
      let le;
      if (u[37] !== V) le = he => (V === void 0 || he.providers.some(_e => V.includes(_e))) && (he.value !== "aws_refresh" || !!a), 
      u[37] = V, u[38] = le; else le = u[38];
      let xe = Pt.filter(le);
      switch (o.state) {
       case "idle":
        {
          const h = B ? B : "Claude Code can be used with your Claude subscription or billed based on API usage through your Console account.";
          let _;
          if (u[39] !== h) _ = e(n, {
            bold: !0,
            children: h
          }), u[39] = h, u[40] = _; else _ = u[40];
          let T;
          if (u[41] !== C) T = C && e(n, {
            color: "warning",
            children: C
          }), u[41] = C, u[42] = T; else T = u[42];
          const K = !L && xe.length === 0 && e(n, {
            color: "error",
            children: SZ("firstParty")?.message ?? "Your organization's managed settings (allowedProviders) admit no sign-in this screen can offer; ask your administrator."
          });
          let re;
          if (u[43] === S) re = e(n, {
            children: "Select login method:"
          }), u[43] = re; else re = u[43];
          let ie;
          if (u[44] !== L) ie = L ? [ {
            label: r(n, {
              children: [ "Claude account with subscription \xb7", " ", e(n, {
                dimColor: !0,
                children: "Pro, Max, Team, or Enterprise"
              }), !1 ]
            }),
            value: "claudeai"
          }, {
            label: r(n, {
              children: [ "Anthropic Console account \xb7", " ", e(n, {
                dimColor: !0,
                children: "API usage billing"
              }) ]
            }),
            value: "console"
          } ] : [], u[44] = L, u[45] = ie; else ie = u[45];
          const de = xe.length > 0 ? [ {
            label: r(n, {
              children: [ "3rd-party platform \xb7", " ", e(n, {
                dimColor: !0,
                children: xe.map(Do).join(", ")
              }) ]
            }),
            value: "platform"
          } ] : [];
          let ve;
          if (u[46] !== de || u[47] !== ie) ve = [ ...ie, ...de ], u[46] = de, u[47] = ie, 
          u[48] = ve; else ve = u[48];
          let Ne;
          if (u[49] !== Se || u[50] !== ce || u[51] !== pe || u[52] !== x) Ne = Le => {
            if (Le === "platform") i("tengu_oauth_platform_selected", {}), x({
              state: "platform_setup"
            }); else if (Le === "claudeai") i("tengu_oauth_claudeai_selected", {}), pe(!0), 
            ce(!1), x({
              state: "ready_to_start"
            }); else if (Se) i("tengu_oauth_console_selected", {}), x({
              state: "console_method"
            }); else i("tengu_oauth_console_selected", {}), pe(!1), ce(!1), x({
              state: "ready_to_start"
            });
          }, u[49] = Se, u[50] = ce, u[51] = pe, u[52] = x, u[53] = Ne; else Ne = u[53];
          let Me;
          if (u[54] !== ve || u[55] !== Ne) Me = e(s, {
            children: e(Xe, {
              options: ve,
              onChange: Ne
            })
          }), u[54] = ve, u[55] = Ne, u[56] = Me; else Me = u[56];
          let qe;
          if (u[57] !== Me || u[58] !== _ || u[59] !== T || u[60] !== K) qe = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [ _, T, K, re, Me ]
          }), u[57] = Me, u[58] = _, u[59] = T, u[60] = K, u[61] = qe; else qe = u[61];
          A = qe;
          break Ht;
        }

       case "gateway_setup":
        {
          let h;
          if (u[62] !== k || u[63] !== x) h = () => {
            k?.(), x({
              state: "gateway_done"
            });
          }, u[62] = k, u[63] = x, u[64] = h; else h = u[64];
          let _;
          if (u[65] !== x) _ = () => x({
            state: "idle"
          }), u[65] = x, u[66] = _; else _ = u[66];
          let T;
          if (u[67] !== M || u[68] !== D || u[69] !== O || u[70] !== W || u[71] !== h || u[72] !== _) T = e(nt, {
            initialUrl: M,
            namedBy: O,
            internalNetworks: D,
            screenLocked: W,
            onDone: h,
            onCancel: _
          }), u[67] = M, u[68] = D, u[69] = O, u[70] = W, u[71] = h, u[72] = _, u[73] = T; else T = u[73];
          A = T;
          break Ht;
        }

       case "gateway_done":
        {
          let h;
          if (u[74] === S) h = e(n, {
            color: "success",
            children: "Connected to Cloud gateway."
          }), u[74] = h; else h = u[74];
          let _;
          if (u[75] === S) _ = r(s, {
            flexDirection: "column",
            gap: 1,
            marginTop: 1,
            children: [ h, r(n, {
              dimColor: !0,
              children: [ "Press ", e(n, {
                bold: !0,
                children: "Enter"
              }), " to continue." ]
            }) ]
          }), u[75] = _; else _ = u[75];
          A = _;
          break Ht;
        }

       case "console_method":
        {
          let h, _;
          if (u[76] === S) h = e(n, {
            bold: !0,
            children: "Anthropic Console account"
          }), _ = e(n, {
            children: "How do you want to sign in?"
          }), u[76] = h, u[77] = _; else h = u[76], _ = u[77];
          let T;
          if (u[78] === S) T = {
            label: r(n, {
              children: [ "Sign in with your Console account", " ", e(n, {
                dimColor: !0,
                children: "(recommended)"
              }) ]
            }),
            value: "wif"
          }, u[78] = T; else T = u[78];
          let K;
          if (u[79] === S) K = e(n, {
            dimColor: !0,
            children: "(legacy)"
          }), u[79] = K; else K = u[79];
          let re;
          if (u[80] === S) re = [ T, {
            label: r(n, {
              children: [ "Create an API key ", K, " \xb7", " ", e(n, {
                dimColor: !0,
                children: "adds a key to your Console workspace"
              }) ]
            }),
            value: "api-key"
          }, {
            label: "Go back",
            value: "back"
          } ], u[80] = re; else re = u[80];
          let ie;
          if (u[81] !== x) ie = () => x({
            state: "idle"
          }), u[81] = x, u[82] = ie; else ie = u[82];
          let de;
          if (u[83] !== ce || u[84] !== pe || u[85] !== x) de = Ie => {
            if (Ie === "back") {
              x({
                state: "idle"
              });
              return;
            }
            if (pe(!1), Ie === "wif") i("tengu_oauth_console_token_selected", {}), ce(!0); else i("tengu_oauth_console_api_key_selected", {}), 
            ce(!1);
            x({
              state: "ready_to_start"
            });
          }, u[83] = ce, u[84] = pe, u[85] = x, u[86] = de; else de = u[86];
          let ve;
          if (u[87] !== de || u[88] !== ie) ve = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [ h, _, e(s, {
              children: e(Xe, {
                options: re,
                onCancel: ie,
                onChange: de
              })
            }) ]
          }), u[87] = de, u[88] = ie, u[89] = ve; else ve = u[89];
          A = ve;
          break Ht;
        }

       case "platform_setup":
        {
          let h;
          if (u[90] === S) h = e(n, {
            bold: !0,
            children: "Using 3rd-party platforms"
          }), u[90] = h; else h = u[90];
          let _, T;
          if (u[91] !== x) _ = Fe => {
            Ze: switch (Fe) {
             case "bedrock":
              {
                i("tengu_oauth_bedrock_wizard_launched", {}), x({
                  state: "bedrock_wizard"
                });
                break Ze;
              }

             case "aws_refresh":
              {
                i("tengu_oauth_aws_refresh_launched", {}), x({
                  state: "aws_refresh_running"
                });
                break Ze;
              }

             case "foundry":
              {
                i("tengu_oauth_platform_docs_opened", {
                  platform: b("foundry")
                }), js("https://code.claude.com/docs/en/microsoft-foundry"), x({
                  state: "idle"
                });
                break Ze;
              }

             case "vertex":
              {
                i("tengu_oauth_vertex_wizard_launched", {}), x({
                  state: "vertex_wizard"
                });
                break Ze;
              }

             default:
              {
                x({
                  state: "idle"
                });
              }
            }
          }, T = () => x({
            state: "idle"
          }), u[91] = x, u[92] = _, u[93] = T; else _ = u[92], T = u[93];
          A = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [ h, e(Xe, {
              options: [ ...xe.map(No), {
                label: "Go back",
                value: "back"
              } ],
              onChange: _,
              onCancel: T
            }), xe.some(Mo) && r(n, {
              dimColor: !0,
              children: [ "Foundry: ", e(zt, {
                url: "https://code.claude.com/docs/en/microsoft-foundry",
                children: "https://code.claude.com/docs/en/microsoft-foundry"
              }) ]
            }) ]
          });
          break Ht;
        }

       case "aws_refresh_running":
        {
          let h;
          if (u[94] !== x) h = e(ht, {
            onComplete: Je => x({
              state: "aws_refresh_done",
              ok: Je
            })
          }), u[94] = x, u[95] = h; else h = u[95];
          A = h;
          break Ht;
        }

       case "aws_refresh_done":
        {
          let h;
          if (u[96] !== o.ok) h = o.ok ? e(n, {
            color: "success",
            children: "AWS credentials refreshed."
          }) : e(n, {
            color: "error",
            children: "awsAuthRefresh failed. Check the command in your settings and try running it in a separate terminal."
          }), u[96] = o.ok, u[97] = h; else h = u[97];
          let _;
          if (u[98] === S) _ = r(n, {
            dimColor: !0,
            children: [ "Press ", e(n, {
              bold: !0,
              children: "Enter"
            }), " to continue." ]
          }), u[98] = _; else _ = u[98];
          let T;
          if (u[99] !== h) T = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [ h, _ ]
          }), u[99] = h, u[100] = T; else T = u[100];
          A = T;
          break Ht;
        }

       case "bedrock_wizard":
        {
          let h;
          if (u[101] !== x) h = e(Qyt, {
            onComplete: Qe => x({
              state: "bedrock_done",
              message: Qe
            }),
            onCancel: () => x({
              state: "platform_setup"
            }),
            exitOnCtrlCD: !0
          }), u[101] = x, u[102] = h; else h = u[102];
          A = h;
          break Ht;
        }

       case "bedrock_done":
       case "vertex_done":
        {
          let h;
          if (u[103] !== o.message) h = e(n, {
            color: "success",
            children: o.message
          }), u[103] = o.message, u[104] = h; else h = u[104];
          let _;
          if (u[105] === S) _ = r(n, {
            dimColor: !0,
            children: [ "Press ", e(n, {
              bold: !0,
              children: "Enter"
            }), " to restart Claude Code." ]
          }), u[105] = _; else _ = u[105];
          let T;
          if (u[106] !== h) T = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [ h, _ ]
          }), u[106] = h, u[107] = T; else T = u[107];
          A = T;
          break Ht;
        }

       case "vertex_wizard":
        {
          let h;
          if (u[108] !== x) h = e(Zyt, {
            onComplete: et => x({
              state: "vertex_done",
              message: et
            }),
            onCancel: () => x({
              state: "platform_setup"
            }),
            exitOnCtrlCD: !0
          }), u[108] = x, u[109] = h; else h = u[109];
          A = h;
          break Ht;
        }

       case "waiting_for_login":
        {
          let h;
          if (u[110] !== H) h = H && e(s, {
            children: e(n, {
              dimColor: !0,
              children: H
            })
          }), u[110] = H, u[111] = h; else h = u[111];
          let _;
          if (u[112] !== j) _ = j && e(s, {
            children: e(n, {
              dimColor: !0,
              children: `${Ye} (${j.cause}), so this sign-in will create an API key.`
            })
          }), u[112] = j, u[113] = _; else _ = u[113];
          let T;
          if (u[114] !== q) T = !q && r(s, {
            children: [ e(hi, {}), e(n, {
              children: "Opening browser to sign in\u2026"
            }) ]
          }), u[114] = q, u[115] = T; else T = u[115];
          let K;
          if (u[116] !== Ae || u[117] !== ke || u[118] !== X || u[119] !== o.url || u[120] !== U || u[121] !== fe || u[122] !== ue || u[123] !== q || u[124] !== ye) K = q && r(s, {
            children: [ e(n, {
              children: pt
            }), e(Er, {
              value: U,
              onChange: ue,
              onSubmit: wt => ke(wt, o.url),
              cursorOffset: Ae,
              onChangeCursorOffset: fe,
              columns: ye,
              mask: "*",
              focus: !0,
              showCursor: X
            }) ]
          }), u[116] = Ae, u[117] = ke, u[118] = X, u[119] = o.url, u[120] = U, u[121] = fe, 
          u[122] = ue, u[123] = q, u[124] = ye, u[125] = K; else K = u[125];
          let re;
          if (u[126] !== h || u[127] !== _ || u[128] !== T || u[129] !== K) re = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [ h, _, T, K ]
          }), u[126] = h, u[127] = _, u[128] = T, u[129] = K, u[130] = re; else re = u[130];
          A = re;
          break Ht;
        }

       case "creating_api_key":
        {
          let h;
          if (u[131] === S) h = e(s, {
            flexDirection: "column",
            gap: 1,
            children: r(s, {
              children: [ e(hi, {}), e(n, {
                children: "Creating API key for Claude Code\u2026"
              }) ]
            })
          }), u[131] = h; else h = u[131];
          A = h;
          break Ht;
        }

       case "about_to_retry":
        {
          let h;
          if (u[132] === S) h = e(s, {
            flexDirection: "column",
            gap: 1,
            children: e(n, {
              color: "permission",
              children: "Retrying\u2026"
            })
          }), u[132] = h; else h = u[132];
          A = h;
          break Ht;
        }

       case "success":
        {
          let h;
          if (u[133] !== N || u[134] !== o.token) h = N === "setup-token" && o.token ? null : r(Q, {
            children: [ An()?.emailAddress ? r(n, {
              dimColor: !0,
              children: [ "Logged in as", " ", e(n, {
                children: An()?.emailAddress
              }) ]
            }) : null, r(n, {
              color: "success",
              children: [ "Login successful. Press ", e(n, {
                bold: !0,
                children: "Enter"
              }), " to continue\u2026" ]
            }) ]
          }), u[133] = N, u[134] = o.token, u[135] = h; else h = u[135];
          let _;
          if (u[136] !== h) _ = e(s, {
            flexDirection: "column",
            children: h
          }), u[136] = h, u[137] = _; else _ = u[137];
          A = _;
          break Ht;
        }

       case "storage_failed":
        {
          let h;
          if (u[138] !== o.backendName) h = Bt(o.backendName), u[138] = o.backendName, u[139] = h; else h = u[139];
          let be = h;
          let _;
          if (u[140] !== be || u[141] !== o.sessionAuth || u[142] !== o.transient) _ = e(s, {
            flexDirection: "column",
            children: o.sessionAuth === "fresh" ? r(Q, {
              children: [ e(n, {
                color: "warning",
                children: o.transient ? `Logged in for now, but Claude Code couldn't confirm your new credentials were saved to ${be}.` : `Logged in for now, but your new credentials could not be saved to ${be}.`
              }), e(n, {
                color: "warning",
                children: o.transient ? "This login may expire mid-session and may not persist after you exit Claude Code." : "This login may expire mid-session and will not persist after you exit Claude Code."
              }) ]
            }) : o.sessionAuth === "previous" ? r(Q, {
              children: [ r(n, {
                color: "error",
                children: [ "Sign-in completed in the browser, but your new credentials could not be saved to ", be, " \u2014 a previous login's credentials are still in place and will be used instead." ]
              }), e(n, {
                dimColor: !0,
                children: "(Your new sign-in did not replace the existing credentials.)"
              }) ]
            }) : r(Q, {
              children: [ r(n, {
                color: "error",
                children: [ "Sign-in completed in the browser, but your credentials could not be saved to ", be, " \u2014 you are not logged in." ]
              }), e(n, {
                dimColor: !0,
                children: "(No previous login on this machine is usable right now either.)"
              }) ]
            })
          }), u[140] = be, u[141] = o.sessionAuth, u[142] = o.transient, u[143] = _; else _ = u[143];
          let T;
          if (u[144] === S) T = e(n, {
            dimColor: !0,
            children: "To avoid having to log in again each session:"
          }), u[144] = T; else T = u[144];
          let K;
          if (u[145] !== be) K = r(n, {
            dimColor: !0,
            children: [ "  ", "\u2022 fix access to ", be, ", then run /login again" ]
          }), u[145] = be, u[146] = K; else K = u[146];
          let re;
          if (u[147] === S) re = r(n, {
            dimColor: !0,
            children: [ "  ", "\u2022 or run claude setup-token and set CLAUDE_CODE_OAUTH_TOKEN" ]
          }), u[147] = re; else re = u[147];
          let ie;
          if (u[148] !== K) ie = r(s, {
            flexDirection: "column",
            children: [ T, K, re ]
          }), u[148] = K, u[149] = ie; else ie = u[149];
          let de;
          if (u[150] !== z || u[151] !== o.sessionAuth) de = o.sessionAuth === "fresh" ? r(n, {
            color: "permission",
            children: [ "Press ", e(n, {
              bold: !0,
              children: "Enter"
            }), " to continue\u2026" ]
          }) : r(n, {
            color: "permission",
            children: [ "Press ", e(n, {
              bold: !0,
              children: "Enter"
            }), " to retry.", " ", z ? e(n, {
              dimColor: !0,
              children: e(G, {
                chord: "escape",
                action: "continue without logging in",
                parens: !0
              })
            }) : null ]
          }), u[150] = z, u[151] = o.sessionAuth, u[152] = de; else de = u[152];
          let ve;
          if (u[153] !== de || u[154] !== _ || u[155] !== ie) ve = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [ _, ie, de ]
          }), u[153] = de, u[154] = _, u[155] = ie, u[156] = ve; else ve = u[156];
          A = ve;
          break Ht;
        }

       case "account_on_hold":
        {
          let h;
          if (u[157] !== o.message) h = e(n, {
            color: "warning",
            children: o.message
          }), u[157] = o.message, u[158] = h; else h = u[158];
          let _;
          if (u[159] !== N) _ = N !== "setup-token" && r(n, {
            dimColor: !0,
            children: [ "Press ", e(n, {
              bold: !0,
              children: "Enter"
            }), " to go back to login options." ]
          }), u[159] = N, u[160] = _; else _ = u[160];
          let T;
          if (u[161] !== h || u[162] !== _) T = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [ h, _ ]
          }), u[161] = h, u[162] = _, u[163] = T; else T = u[163];
          A = T;
          break Ht;
        }

       case "error":
        {
          let Ge, h, _, T;
          if (u[164] !== o.message || u[165] !== o.verbatim) {
            let ze = o.verbatim ? /\s(https:\/\/\S+)$/.exec(o.message) : null;
            let Be = ze?.[1];
            let Ee = Be && tee(Be);
            let $e = Be && Ee ? Be.slice(Ee.length) : "";
            let oe = Ee ? YUe(Ee) : void 0;
            Ge = s;
            h = "column";
            _ = 1;
            T = ze && Ee ? r(s, {
              flexDirection: "column",
              children: [ e(n, {
                color: "error",
                children: o.message.slice(0, ze.index)
              }), r(n, {
                color: "error",
                children: [ oe ? e(zt, {
                  url: oe,
                  assumeSupport: !0,
                  children: e(n, {
                    color: "error",
                    children: oe
                  })
                }) : Ee, $e ]
              }) ]
            }) : e(n, {
              color: "error",
              children: o.verbatim ? o.message : `OAuth error: ${o.message}`
            });
            u[164] = o.message, u[165] = o.verbatim, u[166] = Ge, u[167] = h, u[168] = _, u[169] = T;
          } else Ge = u[166], h = u[167], _ = u[168], T = u[169];
          let K;
          if (u[170] !== j) K = j && e(n, {
            dimColor: !0,
            children: `${Ye}: ${j.message}`
          }), u[170] = j, u[171] = K; else K = u[171];
          let re;
          if (u[172] !== z || u[173] !== o.toRetry) re = (o.toRetry || z) && e(s, {
            marginTop: 1,
            children: r(n, {
              color: "permission",
              children: [ o.toRetry && r(Q, {
                children: [ "Press ", e(n, {
                  bold: !0,
                  children: "Enter"
                }), " to retry.", " " ]
              }), z ? e(n, {
                dimColor: !0,
                children: e(G, {
                  chord: "escape",
                  action: "continue without logging in",
                  parens: !0
                })
              }) : null ]
            })
          }), u[172] = z, u[173] = o.toRetry, u[174] = re; else re = u[174];
          let ie;
          if (u[175] !== Ge || u[176] !== h || u[177] !== _ || u[178] !== T || u[179] !== K || u[180] !== re) ie = r(Ge, {
            flexDirection: h,
            gap: _,
            children: [ T, K, re ]
          }), u[175] = Ge, u[176] = h, u[177] = _, u[178] = T, u[179] = K, u[180] = re, u[181] = ie; else ie = u[181];
          A = ie;
          break Ht;
        }

       default:
        {
          A = null;
          break Ht;
        }
      }
    }
    u[1] = z, u[2] = V, u[3] = Se, u[4] = Ae, u[5] = L, u[6] = M, u[7] = H, u[8] = D, 
    u[9] = O, u[10] = W, u[11] = C, u[12] = ke, u[13] = X, u[14] = j, u[15] = N, u[16] = o.backendName, 
    u[17] = o.message, u[18] = o.ok, u[19] = o.sessionAuth, u[20] = o.state, u[21] = o.toRetry, 
    u[22] = o.token, u[23] = o.transient, u[24] = o.url, u[25] = o.verbatim, u[26] = k, 
    u[27] = U, u[28] = ce, u[29] = fe, u[30] = pe, u[31] = x, u[32] = ue, u[33] = q, 
    u[34] = B, u[35] = ye, u[36] = A;
  } else A = u[36];
  if (A !== _n) return A;
}

function Bt(v) {
  switch (v) {
   case "keychain":
    return "the macOS Keychain";

   case "keychain-with-plaintext-fallback":
    return "the macOS Keychain or the credentials file";

   case "windows-credman":
    return "Windows Credential Manager";

   case "windows-credman-with-plaintext-fallback":
    return "Windows Credential Manager or the credentials file";

   case "plaintext":
    return "the credentials file";

   default:
    return "secure storage";
  }
}

export { dke };
