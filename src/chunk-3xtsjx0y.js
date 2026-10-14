// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { mc } from "./chunk-3pqddg8f.js";

import { ao, mu, or, lq } from "./chunk-w0q7jqcp.js";

import { _, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Ld } from "./chunk-q6wab2jw.js";

import { l_, wIe } from "./chunk-3kb22va7.js";

import { u0t, UGn } from "./chunk-xywp7esx.js";

import { Pjn, Ijn } from "./chunk-yk8mtyzg.js";

function a(e, r) {
  let n = ao().dropSenderWriterByHandle;
  if (e !== null && e !== r) {
    let o = n.get(e);
    if (o) Ijn(o);
  }
  if (r !== null && r !== e && !r.outboundOnly) {
    let o = n.get(r);
    if (!o) o = s => {
      r.writeSdkMessages([ s ]);
    }, n.set(r, o);
    Pjn(o);
  }
}

function y7t(e, r) {
  let n = ao(), o = p(e), s = n.sdkHostedHandle;
  n.sdkHostedHandle = o, UGn(o ? mu(o.bridgeSessionId) : null, r).catch(() => {}), 
  n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, n.lastReportedEffort = void 0, 
  n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, n.lastKnownUltracodeActive = void 0, 
  n.lastReportedModel = void 0, n.lastKnownModel = void 0, n.contextUsageMirror = void 0, 
  n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, n.artifactsEgressSuppressed = void 0, 
  n.lastReportedCrossSessionInbound = void 0, n.lastKnownCrossSessionInbound = void 0, 
  n.lastKnownPostTurnSummary = void 0, a(s, o);
}

function Sw() {
  return ao().sdkHostedHandle;
}

function J$n(e, r) {
  let n = ao(), o = p(e), s = n.replHandle;
  n.replHandle = o, n.lastReportedPermissionMode = void 0, n.lastKnownPermissionMode = void 0, 
  n.lastReportedEffort = void 0, n.lastKnownEffort = void 0, n.lastReportedUltracodeActive = void 0, 
  n.lastKnownUltracodeActive = void 0, n.lastReportedModel = void 0, n.lastKnownModel = void 0, 
  n.contextUsageMirror = void 0, n.lastReportedArtifacts = void 0, n.lastKnownArtifacts = void 0, 
  n.artifactsEgressSuppressed = void 0, n.lastReportedCrossSessionInbound = void 0, 
  n.lastKnownCrossSessionInbound = void 0, n.lastKnownPostTurnSummary = void 0, a(s, o);
  let i = o ? mu(o.bridgeSessionId) : void 0;
  if (i !== void 0) process.env.CLAUDE_CODE_BRIDGE_SESSION_ID = i; else delete process.env.CLAUDE_CODE_BRIDGE_SESSION_ID;
  UGn(i ?? null, r).catch(() => {});
}

function yd() {
  return ao().replHandle;
}

function DSr(e, r) {
  let n = ao();
  if (n.retiredHandles.add(e), n.replHandle === e) J$n(null, r);
  if (n.sdkHostedHandle === e) y7t(null, r);
}

function q$e(e, r) {
  let n = ao(), o = n.replHandle ?? n.sdkHostedHandle;
  if (!o || o.outboundOnly) return;
  if (n.lastKnownPermissionMode = e, e === "bypassPermissions") return;
  let s = Ld(e);
  if (n.lastReportedPermissionMode === s) return;
  n.lastReportedPermissionMode = s, o.reportMetadata({
    permission_mode: s,
    ...r !== void 0 && {
      is_ultraplan_mode: r
    }
  });
}

function Rmo() {
  let e = ao();
  if (e.lastReportedPermissionMode = void 0, e.lastKnownPermissionMode !== void 0) q$e(e.lastKnownPermissionMode);
}

function xmo() {
  return ao().lastKnownPermissionMode;
}

function Pmo(e, r, n) {
  let o = lq(e);
  if (!o) t("[bridge] supervised session id refused (not a safe bridge id) \u2014 this child has no Remote Control identity for the peer surface", {
    level: "warn"
  });
  ao().supervisedBridgeSession = o ? {
    bridgeSessionId: e,
    owner: n,
    storageV5: r,
    selfTitle: void 0
  } : null, UGn(o ? mu(e) : null, r).catch(() => {});
}

function _7t() {
  return ao().supervisedBridgeSession?.bridgeSessionId;
}

function Imo(e) {
  let r = ao().supervisedBridgeSession;
  if (r === null || yd() !== null || Sw() !== null) return;
  if (r.selfTitle = u(e), r.selfTitle !== void 0) u0t(r.selfTitle, r.storageV5).catch(d);
}

function u(e) {
  return typeof e === "string" && l_(e) !== "" ? e : void 0;
}

function l(e) {
  let r = Zzs(), n = ao(), o = n.peerIdentityKey;
  if (o !== null && o.host === e && o.credential === r) return o;
  let s = {
    host: e,
    credential: r
  };
  return n.peerIdentityKey = s, s;
}

function Zzs() {
  let {sameOwnerAccount: e} = import.meta.require("./chunk-8rkfm3cn.js"), r = m(), n = ao(), o = n.walkCredentialKey;
  if (o !== null && e(o.owner, r)) return o;
  let s = {
    owner: r
  };
  return n.walkCredentialKey = s, s;
}

function m() {
  let {sessionsApiBearerFingerprint: e} = import.meta.require("./chunk-80xde28b.js"), {getStoredOauthAccountInfo: r} = import.meta.require("./chunk-8rkfm3cn.js"), {env: n} = import.meta.require("./chunk-pxhbtwb7.js"), o = e();
  return {
    accountUuid: o ? `bearer:${o}` : void 0,
    organizationUuid: n.CLAUDE_CODE_ORGANIZATION_UUID || r()?.organizationUuid
  };
}

async function Omo({refresh: e, credentials: r}) {
  let {isCrossSessionMessagingEnabled: n} = import.meta.require("./chunk-123parsw.js");
  if (!n()) return;
  if (!(yd() !== null || Sw() !== null || ao().supervisedBridgeSession !== null)) {
    let {hasCloudPeerAccess: g} = import.meta.require("./chunk-83kj2342.js");
    if (!g()) return;
  }
  let {primeSessionsApiBearer: s} = import.meta.require("./chunk-80xde28b.js"), i = s({
    refresh: e,
    credentials: r
  }).catch(() => {});
  if (e) {
    await i;
    return;
  }
  let {withDeadline: c} = import.meta.require("./chunk-11vsrj4g.js");
  await c(i, S);
}

var S = 750;

function Vlt() {
  let e = yd() ?? Sw();
  if (e) return {
    key: l(e),
    bridgeSessionId: e.bridgeSessionId,
    selfTitle: e.selfTitle,
    live: mc()
  };
  let r = ao().supervisedBridgeSession;
  return r ? {
    key: l(r),
    bridgeSessionId: r.bridgeSessionId,
    selfTitle: r.selfTitle,
    live: !0
  } : null;
}

function EIt(e) {
  let r = ao(), n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  r.lastKnownCrossSessionInbound = e;
  let o = e ? "available" : "unavailable";
  if (r.lastReportedCrossSessionInbound === o) return;
  r.lastReportedCrossSessionInbound = o, n.reportMetadata({
    cross_session_inbound: o
  });
}

function Mmo() {
  let e = ao();
  if (e.lastReportedCrossSessionInbound = void 0, e.lastKnownCrossSessionInbound !== void 0) EIt(e.lastKnownCrossSessionInbound);
}

function f(e) {
  let r = ao(), n = r.replHandle ?? r.sdkHostedHandle, o = r.remoteEgressSuppressed;
  if (!n || n.outboundOnly || n.noHistoryBackfill || o === null || o()) return;
  r.lastKnownPostTurnSummary = e, n.reportMetadata({
    post_turn_summary: e
  });
}

function Y$e(e, r, n) {
  let o = {
    post_turn_summary: r
  };
  if (n) e?.notifyMetadataChanged(o, n); else e?.notifyMetadataChanged(o);
  if (e?.onMetadataChanged) return;
  try {
    f(r);
  } catch (s) {
    d(s);
  }
}

function Hmo() {
  ao().lastKnownPostTurnSummary = null;
}

function Dmo() {
  let e = ao().lastKnownPostTurnSummary;
  if (e) f(e);
}

function Tue(e) {
  let r = ao(), n = r.replHandle ?? r.sdkHostedHandle;
  if (!n || n.outboundOnly) return;
  if (r.lastKnownModel = e, r.lastReportedModel === e) return;
  r.lastReportedModel = e, n.reportMetadata({
    model: e
  });
}

function Lmo() {
  let e = ao();
  if (e.lastReportedModel = void 0, e.lastKnownModel !== void 0) Tue(e.lastKnownModel);
}

function Nmo() {
  ao().contextUsageMirror?.resend();
}

function LSr(e, r) {
  let n = ao(), o = n.replHandle ?? n.sdkHostedHandle, s = _(e);
  if (!o || o.outboundOnly || o.noHistoryBackfill || r() || n.lastReportedArtifacts === s || e.length === 0 && n.lastKnownArtifacts === void 0) return;
  n.lastKnownArtifacts = e, n.lastReportedArtifacts = s, n.artifactsEgressSuppressed = r, 
  o.reportMetadata({
    artifacts: e.length === 0 ? null : e
  });
}

function $mo() {
  let e = ao();
  if (e.lastReportedArtifacts = void 0, e.lastKnownArtifacts && e.artifactsEgressSuppressed) LSr(e.lastKnownArtifacts, e.artifactsEgressSuppressed);
}

function Q$n() {
  let e = Vlt();
  return e ? mu(e.bridgeSessionId) : void 0;
}

function b7t() {
  let e = Q$n();
  return e ? wIe(e) : void 0;
}

function S7t() {
  let e = yd();
  return e && !e.outboundOnly ? mu(e.bridgeSessionId) : void 0;
}

function Fmo() {
  return Vlt()?.selfTitle;
}

function X$e(e, r) {
  let n = yd() ?? Sw();
  if (n && or(n.bridgeSessionId) === or(e)) n.selfTitle = u(r);
}

function p(e) {
  return e !== null && ao().retiredHandles.has(e) ? null : e;
}

export { y7t, Sw, J$n, yd, DSr, q$e, Rmo, xmo, Pmo, _7t, Imo, Zzs, Omo, Vlt, EIt, Mmo, Y$e, Hmo, Dmo, Tue, Lmo, Nmo, LSr, $mo, Q$n, b7t, S7t, Fmo, X$e };
