// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { m } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { Ct } from "./chunk-6ah1819r.js";

import { ao } from "./chunk-w0q7jqcp.js";

import { oa } from "./chunk-xywp7esx.js";

import { fh } from "./chunk-ewk363e4.js";

import { dE, R0 } from "./chunk-3apvz0s4.js";

import { x6e, s_o } from "./chunk-m82zqjc8.js";

import { PF, wSe } from "./chunk-rshryz75.js";

import { cJr } from "./chunk-fa4dpg2m.js";

import { nS } from "./chunk-gzzx34vb.js";

import { X9r } from "./chunk-s16te283.js";

var w = [ "CLAUDE_BRIDGE_BASE_URL", "USE_LOCAL_OAUTH", "USE_STAGING_OAUTH", "CLAUDE_LOCAL_OAUTH_API_BASE", "CLAUDE_CODE_CUSTOM_OAUTH_URL" ];

function v() {
  let e = fh();
  if (e !== void 0 && w.some(r => process.env[r] !== e[r])) return;
  try {
    return R0();
  } catch {
    return;
  }
}

function p(e, r = "bridge_inbox_fetch") {
  return m(r, e), {
    ok: !1,
    reason: e
  };
}

async function g(e) {
  let r = ao().supervisedBridgeSession;
  if (r === null) return {
    stop: "no_bridge"
  };
  if (Ct()) return {
    stop: "traffic_disabled"
  };
  if (!PF()) return {
    stop: "no_token"
  };
  let d = v();
  if (d === void 0) return {
    stop: "base_url_override"
  };
  let {credentials: o, storageV5: n} = e, i = await dE(o);
  if (i === void 0) return {
    stop: "no_token"
  };
  let s = await f(r, e, i);
  if (s) return {
    stop: s
  };
  try {
    await oa({
      credentials: o,
      storageV5: n
    });
  } catch (_) {
    t(`[bridge] supervised send: token refresh failed: ${l(_)}`, {
      level: "error"
    });
  }
  let a = await dE(o);
  if (a === void 0) return {
    stop: "no_token"
  };
  let u = await nS(), c = await f(r, e, a, {
    fresh: !0
  });
  if (c) return {
    stop: c
  };
  return {
    send: {
      sessionId: r.bridgeSessionId,
      baseUrl: d,
      accessToken: a,
      deviceToken: u
    }
  };
}

function n5s() {
  return ao().supervisedBridgeSession !== null;
}

async function r5s(e, r, d, o) {
  let n = await g(o);
  if ("stop" in n) return p(n.stop, s_o(e));
  let {sessionId: i, baseUrl: s, accessToken: a, deviceToken: u} = n.send;
  return x6e(e, {
    sessionId: i,
    repo: r,
    prNumber: d,
    baseUrl: s,
    getAccessToken: () => a,
    getTrustedDeviceToken: () => Promise.resolve(u)
  });
}

function S(e, {credentials: r, storageV5: d}, o) {
  if (e.inboxOwner !== void 0) return e.inboxOwner;
  let n = {
    mint: X9r({
      getAccessToken: () => o,
      storageV5: d,
      credentials: r,
      presetOwner: e.owner
    }),
    changed: !1
  };
  e.inboxOwner = n;
  let i = s => {
    if (!s && e.inboxOwner === n) e.inboxOwner = void 0;
  };
  return n.mint.then(s => i(s.pin !== void 0 || s.reason === "not_owner"), () => i(!1)), 
  n;
}

async function f(e, r, d, o) {
  if (!wSe()) return;
  if (e.owner === void 0) return "owner_unverified";
  let n = S(e, r, d);
  if (n.changed) return "owner_changed";
  let i;
  try {
    i = await n.mint;
  } catch (s) {
    return t(`[bridge] inbox fetch: owner pin could not be minted: ${l(s)}`, {
      level: "error"
    }), "owner_unverified";
  }
  if (i.pin === void 0) switch (i.reason) {
   case "no_token":
    return "no_token";

   case "no_identity":
   case "unresolved":
    return "owner_unverified";

   case "not_owner":
    return n.changed = !0, "owner_changed";

   case "not_store_login":
    return "owner_unverified";

   case "disabled":
    return;
  }
  if (o?.fresh || i.pin.identityLooksChanged()) {
    let s = await i.pin.confirmChanged(o);
    if (s === "changed" || n.changed) return n.changed = !0, "owner_changed";
    if (s === "inconclusive") return "owner_unverified";
  }
  if (o?.fresh && !i.pin.ownerVerified()) return "owner_unverified";
  return n.changed ? "owner_changed" : void 0;
}

async function K9r(e, r) {
  let d = await g(r);
  if ("stop" in d) return p(d.stop);
  let {sessionId: o, baseUrl: n, accessToken: i, deviceToken: s} = d.send;
  return cJr({
    sessionId: o,
    fileId: e,
    baseUrl: n,
    getAccessToken: () => i,
    getTrustedDeviceToken: () => Promise.resolve(s)
  });
}

export { n5s, r5s, K9r };
