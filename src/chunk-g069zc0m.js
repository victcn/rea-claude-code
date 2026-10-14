// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { $We } from "./chunk-vdnjpwkk.js";

import { mL, HX, HJe, Lr, iMe } from "./chunk-3pqddg8f.js";

import { j, l } from "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import { d } from "./chunk-6ah1819r.js";

import { vht } from "./chunk-z52kmxx4.js";

import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { Ikn } from "./chunk-etkns590.js";

import { tJ } from "./chunk-ayrb4nwr.js";

import { Xut, XIs, q3e, TK, s_, An, Xz, Ft, C5 } from "./chunk-xywp7esx.js";

import { lS } from "./chunk-q6wab2jw.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { wn } from "./chunk-s2t7g8m9.js";

import { YTs } from "./chunk-gmq0qwep.js";

import { N9 } from "./chunk-mw643xee.js";

import { SUe } from "./chunk-584ft4bq.js";

import { Htn, XSo, Ajn, Dtn } from "./chunk-gzzx34vb.js";

import { FTs } from "./chunk-kq1bg4dg.js";

import { uC } from "./chunk-ewk363e4.js";

import { iXr } from "./chunk-ysmrtrar.js";

import { c_o } from "./chunk-bdevabaf.js";

import { w } from "./chunk-9rj1xaxr.js";

import { Va, Qn, Xy, Wt } from "./chunk-84yp45y8.js";

import { Woe, H7, qmo, ego, tgo } from "./chunk-4v78v8fd.js";

import { de, USe } from "./chunk-5ydr99q3.js";

import { Gpo } from "./chunk-r8a304y3.js";

import { rH } from "./chunk-wgsx43va.js";

import { rHt, Etn } from "./chunk-4dpx2qvt.js";

import { Tce, YQ, Ace, Zst } from "./chunk-z09tf6qf.js";

import { GKr, G6o, p2t, JHe, hwn } from "./chunk-1cvvd6ss.js";

import { pl } from "./chunk-1pxjahnn.js";

import { n, MA } from "./chunk-3vw306fv.js";

import { rt } from "./chunk-ytac37d4.js";

import { Nn } from "./chunk-jb3h1y0s.js";

import { Zo } from "./chunk-a5nr78wg.js";

import { L7e } from "./chunk-apnet8r0.js";

import { be } from "./chunk-gqmex880.js";

import { dke } from "./chunk-g731243z.js";

import { p_t, Dmn } from "./chunk-9bhe3db4.js";

import { Pyt } from "./chunk-gxw9hr0a.js";

import { bu } from "./chunk-tvm7tze9.js";

import { mBt } from "./chunk-3sm171p4.js";

import { X2o } from "./chunk-4p8p4fwc.js";

import { aW, TJ } from "./chunk-ph08gw4j.js";

import { Ifn } from "./chunk-5r9be2xz.js";

import { Bv, PI } from "./chunk-wwjrcnvz.js";

import { pt } from "./chunk-qb0pgsyj.js";

import { e, r } from "./chunk-xx3xgkvz.js";

import { mB } from "./chunk-kb4jemvz.js";

import { R, y, F } from "./chunk-cpyd3eya.js";

import { S } from "./chunk-m8ez8fhk.js";

F();

function Se() {
  return q3e() !== void 0;
}

function FBs() {
  qmo(Woe());
}

async function QEe(o, i, s) {
  if (o.onChangeAPIKey(), !i) return {
    bridgeDisconnected: !1,
    accountSwitched: !1,
    relaunching: !1
  };
  let u = Lr(), c = u !== null && u !== s.previousGatewayAuth;
  if (Oe() === "gateway") {
    let p = s.onConsentNeeded, T = {
      release: null
    }, E = p ? G6o(() => (T.release ??= GKr(), p())) : null;
    try {
      let v;
      try {
        v = await hwn(Pyt, o.storageV5, o.credentials);
      } finally {
        E?.();
      }
      let P = Lr(), _ = oe(P);
      if (c && !v.fetchSucceeded && v.failure?.errorKind === "gateway_cert_mismatch") return await ne(o, P, UBs(_, v.failure.gatewayPinMismatch));
      if (!v.fetchSucceeded || mBt()) {
        let k = v.fetchSucceeded ? void 0 : v.failure;
        return await ae(o, BBs(_, k, c), D => jBs(_, k, D, c)), I;
      }
      if (wn()) return I;
      Ifn("gateway"), uC(), Gpo();
    } finally {
      if (!wn()) T.release?.();
    }
  } else JHe(Pyt, o.storageV5, o.credentials);
  HJe();
  let g = Etn().catch(() => {});
  g.then(() => {
    if (c_o()) iXr({
      credentials: o.credentials,
      storageV5: o.storageV5,
      timeoutMs: 5e3
    });
  }).catch(() => {}), Xz(), C5(), Ht(g, rHt, "post-login policy limits refresh").catch(() => {}).then(() => X2o()).then(() => {}).catch(p => d(p));
  let {setAppState: f} = s, h = $We.of(o.session), C = () => h.credentialsPersisted(), M = s.previousAccount, A = An(), b = s_(M, A), {replBridgeEnabled: O, replBridgeOutboundOnly: N} = o.getAppState(), m = M?.accountUuid !== void 0 && !b, G = m && O && !N;
  if (m) f(p => {
    if (!(p.replBridgeEnabled || p.replBridgeError !== void 0)) return p;
    return t("[bridge:repl] Account changed via /login \u2014 disconnecting Remote Control session"), 
    {
      ...p,
      replBridgeEnabled: !1,
      replBridgeExplicit: !1,
      replBridgeOutboundOnly: !1,
      replBridgeError: void 0,
      replBridgeErrorKind: void 0,
      notifications: L7e(p.notifications, mB)
    };
  });
  if (H7(), ego(), FTs(A), s.setAppState(Ikn), m) if (tgo(), s.setAppState(p => ({
    ...p,
    replBridgeSessionGroupingId: void 0,
    replBridgeInitialName: void 0,
    ultrareviewOverageConfirmed: !1
  })), YTs(), o.dialogStore) o.dialogStore.dismissKind(tJ.kind); else d(Error("runPostLoginHooks: no dialog store to dismiss a pending Remote Control callout on account switch"));
  if (b && await Htn()) t("[trusted-device] Same account+org re-login with existing token, skipping re-enrollment"), 
  await Ajn(), C(); else {
    XSo();
    let p = Dtn({
      credentials: o.credentials
    }).then(C, C);
    if (s.awaitEnrollment) await p;
  }
  let {host: L} = o.session, B = o.getAppState();
  return Dmn(L), Xut(), p_t(L, de(o), f, B.fastMode), FBs(), h.loginCompleted(), {
    bridgeDisconnected: G,
    accountSwitched: m,
    relaunching: !1
  };
}

var te = 16;

function Y(o) {
  return `${o.slice(0, te)}\u2026`;
}

function oe(o) {
  try {
    return o ? new URL(o.url).hostname : "gateway";
  } catch {
    return o?.url ?? "gateway";
  }
}

var I = {
  bridgeDisconnected: !1,
  accountSwitched: !1,
  relaunching: !0
};

async function ne(o, i, s) {
  for (let g = iMe(); g; g = iMe()) await g.catch(() => {});
  let u = Lr();
  if (await XIs(u && i && u.url === i.url ? u : i, o.credentials), await p2t(o.storageV5), 
  wn()) return {
    ...I,
    gatewayLoginError: s
  };
  let c = !Va();
  if (c) await aW(o.messages, o.storageV5);
  return await Qn(0, "other", {
    finalMessage: `${s}\nThis session is ending so that nothing from that gateway stays half-applied. Start claude again${c ? " to continue (your conversation can be resumed)" : ""} and sign in once that is fixed.`
  }), {
    ...I,
    gatewayLoginError: s
  };
}

function UBs(o, i) {
  let s = i?.presentedFingerprint && i.pinnedFingerprint ? `TLS certificate ${Y(i.presentedFingerprint)} instead of the one you trusted (${Y(i.pinnedFingerprint)})` : "a different TLS certificate from the one you trusted";
  return `Cloud gateway sign-in was not completed: on the first request after sign-in, ${o} presented ${s}. No gateway credentials were kept. Usually this means the gateway runs several nodes behind one address that serve different certificates (they must all serve the same one), or something on the network path is intercepting TLS.`;
}

function re(o, i) {
  switch (o.errorKind) {
   case "timeout":
    return "the request timed out";

   case "network_error":
    return "couldn't connect to the gateway";

   case "http_401":
   case "api_key_not_sent":
    return i ? "the gateway did not accept the new credential" : "the gateway did not accept this session's credential";

   case "http_403":
    return "the gateway refused them for this account: Claude Code may not be enabled for your organization; contact your administrator";

   case "no_auth_available":
    return "no credential was on hand for the request";

   case "profile_credential_error":
    return "the profile credential could not authenticate the request (details with --debug)";

   case "http_4xx":
   case "http_5xx":
    return o.httpStatus === void 0 ? "the gateway answered with an unexpected status" : `the gateway answered HTTP ${o.httpStatus}`;

   case "parse_error":
    return "the gateway's response was not valid managed settings";

   case "ruled_empty":
    return "no setting in the gateway's response could be applied as written";

   case "gateway_cert_mismatch":
    return "the gateway's TLS certificate did not match the one you trusted";

   case "gateway_public_address":
    return "the gateway's name resolved to a public address, so the request was not sent";

   case "gateway_pin_refused":
    return "the credentials file that keeps the gateway's TLS pin is a symlink, which is not followed";

   case "gateway_pin_unreadable":
    return "the credentials file that keeps the gateway's TLS pin could not be read (try again)";

   case "unknown_error":
    return "something unexpected went wrong (details with --debug)";
  }
}

function J(o, i, s) {
  if (i) {
    let u = re(i, s);
    return s ? `Signed in to Cloud gateway ${o}, but couldn't load your organization's managed settings (${u})` : `Couldn't reload your organization's managed settings from Cloud gateway ${o} (${u})`;
  }
  return s ? `Signed in to Cloud gateway ${o}` : `Your organization's managed settings on Cloud gateway ${o} changed`;
}

function BBs(o, i, s, u = !Va()) {
  let c = u ? "\u2026" : " (this conversation is not saved, so it starts fresh)\u2026", g = J(o, i, s);
  return i ? `${g}. Restarting Claude Code to retry${c}` : `${g}. Restarting Claude Code to apply ${s ? "your organization's managed settings" : "them"}${c}`;
}

function jBs(o, i, s, u, c = !Va()) {
  return `${J(o, i, u)}. ${i ? "Claude Code has to restart to retry" : `Claude Code has to restart to apply ${u ? "your organization's managed settings" : "them"}`}, and ${s}, so this session is ending instead. Your sign-in is saved: start claude again the same way${c ? " (add --continue to return to this conversation)" : ""}.`;
}

async function ae(o, i, s) {
  if (wn()) return;
  let u = h => Qn(0, "other", {
    finalMessage: s(h)
  });
  if (await aW(rH(o), o.storageV5), wn()) return;
  if (Ft()) return u("a background session cannot restart itself (sign in from a session started directly with `claude`)");
  let c = de(o), g = YQ(c, mL());
  if (g.length > 0) return u(`this session has restrictions a restart can't carry over (${g.join("; ")})`);
  let f = {
    proactivityLevel: o.getProactivityLevel(),
    toolPermissionContext: c
  };
  try {
    await TJ({
      freshIfNoTranscript: !0,
      extraArgs: [ ...Tce(c, USe(o)), ...Ace(c, HX()) ],
      proactivity: f,
      env: {
        ...N9(),
        ...Zst(c.additionalWorkingDirectories)
      },
      preSpawn: () => process.stdout.write(`\n${i}\n`)
    }, o.storageV5);
  } catch (h) {
    return d(j(h)), u(`it could not restart itself (${l(h)})`);
  }
}

function xyt(o, i, s, {envTokenWasSet: u = !1, envWarningOnce: c} = {}) {
  if (s.gatewayLoginError !== void 0 || s.relaunching) return [ s.gatewayLoginError ];
  let g = i ? WBs(o, s) : void 0, f = VBs({
    envTokenWasSet: u,
    gatewayActive: Oe() === "gateway",
    willAutoQuery: g?.shouldQuery === !0
  });
  if (f === "out-of-band" && c && !c.delivered) c.delivered = !0, o.applyMessageOp({
    type: "append",
    messages: [ Wt(V1o, "notice") ]
  });
  return [ KBs(i, {
    bridgeDisconnected: s.bridgeDisconnected,
    includeEnvTokenWarning: f === "inline"
  }), g ];
}

function WBs(o, i) {
  if (i.accountSwitched || i.relaunching) return;
  let s = Xy(o.messages);
  if (s?.isApiErrorMessage && s.error === "authentication_failed") return {
    display: "system",
    shouldQuery: !0
  };
  return;
}

var Z = "but if that variable is set in your shell profile or a Claude Code settings file, new `claude` sessions will keep using the old token until you remove it there.";

function zBs() {
  return "Signed in. Review your organization's managed settings to continue.";
}

function GBs() {
  return a.CLAUDE_CODE_OAUTH_TOKEN ? `Warning: CLAUDE_CODE_OAUTH_TOKEN is set in your environment. This session will switch to your new credentials after logging in, ${Z}` : void 0;
}

var V1o = `Note: CLAUDE_CODE_OAUTH_TOKEN was set in your environment when /login started. This session will use your new credentials, ${Z}`;

function VBs(o) {
  if (!o.envTokenWasSet || o.gatewayActive) return "none";
  return o.willAutoQuery ? "out-of-band" : "inline";
}

function KBs(o, i) {
  if (!o) return "Login interrupted";
  let s = i.bridgeDisconnected ? `Login successful. ${SUe}` : "Login successful";
  return i.includeEnvTokenWarning ? `${s}\n\n${V1o}` : s;
}

async function VKs(o, i) {
  if (Oe() === "firstParty" && TK()) return o(`Bare mode doesn't use the sign-in from /login. It reads ANTHROPIC_API_KEY or an apiKeyHelper from --settings: set or change one and restart, or ${vht()} to sign in.`, {
    display: "system"
  }), null;
  let s = GBs(), u = s !== void 0, c = An(), g = c && {
    accountUuid: c.accountUuid,
    organizationUuid: c.organizationUuid
  }, f = Lr(), h = {
    delivered: !1
  };
  return e(lge, {
    startingMessage: s,
    onDone: async (C, M, A) => {
      let b = !1, O = await QEe(i, C, {
        setAppState: A,
        previousAccount: g,
        previousGatewayAuth: f,
        onConsentNeeded: () => (b = !0, o(zBs(), {
          display: "system"
        }), lS())
      }), N = xyt(i, C, O, {
        envTokenWasSet: u,
        envWarningOnce: h
      });
      if (b) {
        let [m] = N;
        if (m) i.applyMessageOp({
          type: "append",
          messages: [ Wt(m, "notice") ]
        });
        return;
      }
      o(...N);
    }
  });
}

function lge(o) {
  let f = w(29), i = bu(), s = Nn(), u = pl(), [c, g] = y(!1), h;
  if (f[0] === S) h = () => g(!0), f[0] = h; else h = f[0];
  let C = h, M = R(!1), [A, b] = y(!1), O;
  if (f[1] !== i || f[2] !== o || f[3] !== s) O = N => {
    if (M.current) {
      return;
    }
    M.current = !0, b(!0), o.onDone(N, i, s);
  }, f[1] = i, f[2] = o, f[3] = s, f[4] = O; else O = f[4];
  let m = O, G;
  if (f[5] !== c || f[6] !== m) G = () => m(c), f[5] = c, f[6] = m, f[7] = G; else G = f[7];
  let L = G, B;
  if (f[8] === S) B = {
    context: "Settings"
  }, f[8] = B; else B = f[8];
  rt("confirm:no", L, B);
  let [p] = y(Se), {exit: T} = MA(), [E, v] = y(!1), P;
  if (f[9] !== T || f[10] !== m || f[11] !== E) P = () => {
    if (E && !M.current) {
      m(!1);
      return;
    }
    T();
  }, f[9] = T, f[10] = m, f[11] = E, f[12] = P; else P = f[12];
  let _ = Zo(P);
  const k = (c || p) && !_.pending;
  let D;
  if (f[13] !== A || f[14] !== _.keyName || f[15] !== _.pending || f[16] !== E) D = _.pending ? r(n, {
    children: [ "Press ", _.keyName, " again to", " ", E && !A ? "cancel" : "exit" ]
  }) : e(pt, {
    action: "confirm:no",
    context: "Settings",
    fallback: "Esc",
    description: "cancel"
  }), f[13] = A, f[14] = _.keyName, f[15] = _.pending, f[16] = E, f[17] = D; else D = f[17];
  let x;
  if (f[18] !== m) x = () => m(!0), f[18] = m, f[19] = x; else x = f[19];
  const W = u ? PI : Bv;
  let U;
  if (f[20] !== o.startingMessage || f[21] !== x || f[22] !== W) U = e(dke, {
    onDone: x,
    onAuthSuccess: C,
    onFreshPickerChange: v,
    startingMessage: o.startingMessage,
    urlOutdent: W
  }), f[20] = o.startingMessage, f[21] = x, f[22] = W, f[23] = U; else U = f[23];
  let ee;
  if (f[24] !== L || f[25] !== k || f[26] !== D || f[27] !== U) ee = e(be, {
    title: "Login",
    onCancel: L,
    color: "permission",
    isCancelActive: !1,
    hideInputGuide: k,
    inputGuide: D,
    children: U
  }), f[24] = L, f[25] = k, f[26] = D, f[27] = U, f[28] = ee; else ee = f[28];
  return ee;
}

export { FBs, QEe, UBs, BBs, jBs, xyt, WBs, zBs, GBs, V1o, VBs, KBs, VKs, lge };
