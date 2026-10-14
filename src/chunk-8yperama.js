// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { XG } from "./chunk-vxr6sv7z.js";

import { Le, Me } from "./chunk-2v9tfgc3.js";

import { K, lt, B, ncn } from "./chunk-3pqddg8f.js";

import { Aje } from "./chunk-y752zmas.js";

import { _me } from "./chunk-x5881pc6.js";

import { or, lq } from "./chunk-w0q7jqcp.js";

import { gan, iOe } from "./chunk-7tfkg6bp.js";

import { Ia } from "./chunk-rkw37sbq.js";

import { fi } from "./chunk-ar8d6cs7.js";

import { Csn } from "./chunk-q0e8j22k.js";

import { sn } from "./chunk-642shbw5.js";

import { D } from "./chunk-hmqkrrtz.js";

class U {
  reconnect=null;
  toggle=null;
  isDisabled=null;
  dialBlockCause=null;
  policyColdStartWaiter=null;
  skippedDynamicServers=[];
  cliOwnedConfigs=new WeakSet;
  cliOwnedBearerProviders=new WeakMap;
  cliOwnedAsyncBearerProviders=new WeakMap;
  cliOwnedResponseObservers=new WeakMap;
  cliOwnedRequestHeaderProviders=new WeakMap;
  ccrInjectedConfigs=new WeakSet;
  clientAuthProviders=new WeakMap;
  clientFirstPartyBearers=new WeakMap;
  firstToolsListReports=new WeakMap;
  toolsListAhead=new WeakMap;
  stepUpReauthFlights=new Map;
  stepUpReauthExhausted=new Map;
  identityEpoch=0;
  identityBaseline=void 0;
  identitySeedAttempted=!1;
  identityChangedThisProcess=!1;
  identityTrippedHandler=null;
  identityTripUnowned=!1;
  headlessMcpTeardown=null;
  headlessConnectorMountInFlight=void 0;
  transientRetryPasses=new Map;
  awaitsNextTurnRedial=null;
  authCacheRead=null;
  authCacheWriteChain=Promise.resolve();
  discoverVerdictsRead=null;
  discoverVerdictsWriteChain=Promise.resolve();
  firstPartyDesignConsentAsks=new Map;
  claudeAiConfigsFetch=null;
  claudeAiConnectorIdIndex=void 0;
  claudeAiConnectorListStatus="pending";
  claudeAiConnectorListGeneration=0;
  claudeAiConnectorListFetchSeq=0;
  claudeAiConnectorListSettledSeq=0;
  claudeAiConfigsFetchTransientFailures=new WeakSet;
  pendingCrossOrgNotice=void 0;
  claudeAiConnectedThisSession=new Set;
  needsAuthNoticedThisSession=new Set;
  pendingScopeExpansionNotice=void 0;
  scopeExpansionDisclosed=!1;
  officialUrls=void 0;
  vscodeClient=null;
  stopVscodePolicyGatesRefresh=null;
  toolRefreshSequences=new WeakMap;
  droppedToolsSeqByConnection=new WeakMap;
  toolsListErrorByResult=new WeakMap;
  discoveryFetchErrors=new WeakMap;
  rawToolsByResult=new WeakMap;
  rawCommandsByResult=new WeakMap;
  rawResourcesByResult=new WeakMap;
  rawFetchedAtByResult=new WeakMap;
  persistedDiscoveryRounds=new WeakSet;
  listChangedRefetchHandlers=new WeakMap;
  burnedListingDiscoverPriors=new Set;
  skillsFunnelSeen=new Set;
  skillsFetcher=null;
  discoveryCacheStore=null;
  connectionCache=null;
  cachedFirstDialArmsRan=new WeakSet;
  supersededDials=new WeakSet;
  swrRefreshDialsInFlight=new WeakSet;
  reauthDecisionSinkForTest=void 0;
  holdStaleReauthEntryForTest=!1;
  oauthCallbackListeners=new Map;
  oauthCallbackSubmitters=new Map;
  activeOAuthFlows=new Map;
  authLost=Me();
  reauthReconnect=Me();
  cachedAdopt=Me();
  cachedDialFailed=Me();
}

var ue = new K(() => new U);

function Ut() {
  return ue.of(B().host);
}

function jDs(e) {
  return Ut().clientAuthProviders.has(fi(e.client));
}

function gfe(e, r) {
  let n = Ut();
  if (n.cliOwnedConfigs.add(e), r?.getBearerToken) n.cliOwnedBearerProviders.set(e, r.getBearerToken);
  if (r?.resolveBearerToken) n.cliOwnedAsyncBearerProviders.set(e, r.resolveBearerToken);
  if (r?.onResponse) n.cliOwnedResponseObservers.set(e, r.onResponse);
  if (r?.requestHeaders) n.cliOwnedRequestHeaderProviders.set(e, r.requestHeaders);
  return e;
}

function Ep(e) {
  return typeof e === "object" && e !== null && Ut().cliOwnedConfigs.has(e);
}

function o1e(e) {
  if (typeof e !== "object" || e === null) return !1;
  let r = Ut();
  return r.cliOwnedBearerProviders.has(e) || r.cliOwnedAsyncBearerProviders.has(e);
}

function pe(e) {
  if (typeof e !== "object" || e === null) return null;
  let r = Ut().cliOwnedBearerProviders.get(e);
  if (!r) return null;
  try {
    return r() || null;
  } catch {
    return null;
  }
}

async function nVn(e) {
  if (typeof e !== "object" || e === null) return null;
  let r = Ut().cliOwnedAsyncBearerProviders.get(e);
  if (!r) return pe(e);
  try {
    return await r() || null;
  } catch {
    return null;
  }
}

function rVn(e, r) {
  if (typeof e !== "object" || e === null) return {};
  let n = Ut().cliOwnedRequestHeaderProviders.get(e);
  if (!n) return {};
  try {
    return n(r);
  } catch {
    return {};
  }
}

function oVn(e, r) {
  if (typeof e !== "object" || e === null) return;
  let n = Ut().cliOwnedResponseObservers.get(e);
  if (!n) return;
  try {
    n({
      method: r.method,
      status: r.status,
      headers: r.headers,
      requestHeaders: r.requestHeaders,
      bearerFingerprint: r.bearerFingerprint
    });
  } catch {}
}

var Pi = "remote-devices";

var o9e = "claude_ai", Bft = "widgets", WDs = "visualize", M5 = "memory", wsn = `mcp__${M5}__memory_`, sVn = "a471caf9-e559-5ad8-836c-4e5972877185", vsn = "63d0e670-f310-5da6-b45c-86ffaf444223";

function jft(e, r) {
  return XG(r, XG(e, _e));
}

var _e = "00000000-0000-0000-0000-000000000000";

function hfe(e) {
  if (e.type !== "http") return;
  let r = "headers" in e ? e.headers : void 0;
  for (let [n, t] of Object.entries(r ?? {})) if (n.toLowerCase() === "x-mcp-server-id") return t.toLowerCase();
  return;
}

var Wft = new lt(() => ({}));

function zDs(e) {
  return hfe(e) === vsn;
}

var zft = "758bbc64-7e6c-5dab-a3a5-2a4c7ca423fc", iVn = "667a974b-0f6b-57fc-8973-52854120fcb3", vLt = new Set([ "Claude_Pages", "Claude_Docs" ]), VCo = "1a59c906-04da-521d-bda7-7f71b9f9e01c", aVn = "/v1/pages/mcp", lVn = "2cd180e1-ecb6-5156-82c8-41224ae6346e", GDs = "claude-artifacts", VDs = "/v1/code/mcp/ccr-artifacts", ELt = "/api/artifacts/mcp";

function dVn(e) {
  return hfe(e) === VCo;
}

var Esn = `mcp__${Pi}__device_bash`, CPr = "ide", KDs = `mcp__${CPr}__executeCode`, k = "office_bridge.listing";

function kIe(e) {
  let r = e._meta, n = typeof r === "object" && r !== null && k in r ? r[k] : void 0;
  return n === "stub" || n === "live" ? n : void 0;
}

var qDs = [ Esn, `mcp__${Pi}__device_list_dir`, `mcp__${Pi}__device_stage_files`, `mcp__${Pi}__device_commit_files` ], KCo = new Set([ CPr, Pi ]), fe = [ "claude_in_chrome", "claude_browser", "claude_preview", "claude_code_ios_simulator", "claude_code_android_emulator", "computer_use", "framebuffer", "plugins", "skills", "mcp_registry", "scheduled_tasks", "cowork", "session_info", "dispatch", "remote_devices", "ccd_directory" ], me = new Set([ "workspace", "terminal", "office", "visualize", "window_halo", "dev_debug", "ccd_session", Csn ]);

function y(e) {
  return e.replace(/[^a-zA-Z0-9_-]+/g, "_").toLowerCase().replace(/-/g, "_");
}

var N = [ "claude_browser" ];

function ksn(e, r = N) {
  let n = y(e);
  return r.find(t => y(t) === n) ?? null;
}

function Gft(e) {
  return e.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function Vft(e, r) {
  let n = Gft(e);
  return n.length > 0 && n === Gft(r);
}

function YDs(e, r = N) {
  if (KCo.has(e)) return !0;
  if (ksn(e, r) !== null) return !1;
  let n = y(e);
  return me.has(n) || fe.some(t => n.startsWith(t));
}

import { posix as f } from "path";

var S = e => JSON.stringify(e);

var ge = new Set([ "api.anthropic.com", "api-staging.anthropic.com", ...Aje.map(e => new URL(e).hostname) ]);

function LDs(e) {
  let r = wLt();
  if (!e) {
    if (r.status === "absent") return null;
    return r.status === "rejected" ? {
      code: r.code,
      reason: r.reason
    } : {
      code: "view_mismatch",
      reason: "the eager argv scan sees a --sdk-url value commander did not bind"
    };
  }
  if (r.status === "rejected") return {
    code: r.code,
    reason: r.reason
  };
  if (r.status === "absent" || r.url !== e) return {
    code: "view_mismatch",
    reason: "the --sdk-url value commander bound disagrees with the eager argv scan"
  };
  return null;
}

function Fft(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return {
      code: "unparseable",
      reason: `could not parse ${S(e)} as a URL`
    };
  }
  if (ge.has(r.hostname)) {
    if (r.protocol !== "wss:" && r.protocol !== "https:") return {
      code: "bad_scheme",
      reason: `scheme ${S(r.protocol)} is not permitted for host ${S(r.hostname)}; only wss:// and https:// are accepted`
    };
    return null;
  }
  return {
    code: "not_allowlisted",
    reason: `host ${S(r.hostname)} is not an approved Anthropic endpoint`
  };
}

function wLt() {
  let e = ncn();
  if (e !== void 0) return {
    status: "ok",
    url: e
  };
  let r = _me("--sdk-url"), n = r.filter(Boolean).at(-1);
  if (!n) return {
    status: "absent"
  };
  if (new Set(r).size > 1) return {
    status: "rejected",
    code: "conflicting",
    reason: "conflicting --sdk-url occurrences"
  };
  let t = Fft(n);
  if (t) return {
    status: "rejected",
    ...t
  };
  return {
    status: "ok",
    url: n
  };
}

function EIe(e) {
  if (e.protocol === "wss:") e.protocol = "https:"; else if (e.protocol === "ws:") e.protocol = "http:";
  return e;
}

var h = "/v2/ccr-sessions/-/meta/mcp", xu = "claude-code-remote", jCo = [ "list_triggers", "create_trigger", "update_trigger", "delete_trigger", "fire_trigger", "send_later" ], WCo = "send_message", NDs = [ "add_repo", "check_repo_access", "list_repos" ], $Ds = "Claude Code Remote", Ssn = "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a";

function Uft(e, r) {
  return {
    type: "http",
    url: e,
    headers: {
      ["X-MCP-Server-ID"]: "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a",
      "X-Session-UUID": r,
      "anthropic-version": "2023-06-01"
    },
    alwaysLoad: !0
  };
}

var kd = "hearthbot", W9 = `mcp__${kd}__reply`, kPr = `mcp__${kd}__fetch_messages`, TPr = `mcp__${kd}__fetch_thread`, APr = `mcp__${kd}__fetch_project_timeline`, r1e = new Set([ kPr, TPr, APr ]);

var zCo = /^[A-Za-z0-9_-]{1,160}$/;

function GCo(e) {
  return `/v2/ccr-sessions/${e}/hearthbot/mcp`;
}

function FDs(e, r) {
  return {
    type: "http",
    url: e,
    headers: {
      "X-Session-UUID": r,
      "anthropic-version": "2023-06-01"
    },
    alwaysLoad: !0
  };
}

var UDs = new Set([ "reply", "update_status", "no_reply_needed", "switch_model", "fetch_thread", "fetch_project_timeline", "fetch_messages", "search_channels", "set_thread_label", "set_thread_resolved", "list_thread_sessions", "list_thread_connectors", "list_project_members", "list_project_artifacts", "list_project_prs", "list_project_files", "read_project_file", "react", "unreact", "update_message", "get_channel_session_id", "get_project_session_id", "read_memory", "update_memory", "report_issue", "set_time_zone", "pin_artifact", "unpin_artifact", "suggest_connectors", "post_widget", "cookie_sign_in_request" ]), BDs = new Set([ "update_memory", "update_message", "set_thread_resolved", "switch_model", "pin_artifact", "unpin_artifact", "report_issue", "set_time_zone", "cookie_sign_in_request", "post_widget", "suggest_connectors" ]);

var p = [ "/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/", "/v2/ccr-sessions/", "/v1/code/" ], XDs = "spent";

class Q {
  captured=z();
  capturedOwn=G();
  carrier=Y();
  ownSessionIds=Z();
  get atStartup() {
    return this.captured;
  }
  get isSessionIngressUrlSet() {
    return this.capturedOwn;
  }
  get ownCcrSessionIds() {
    return this.ownSessionIds;
  }
  get bridgeCarrier() {
    return this.carrier;
  }
  get isBridgeCarrierChild() {
    return this.carrier === "child";
  }
  reset() {
    this.captured = z(), this.capturedOwn = G(), this.carrier = Y(), this.ownSessionIds = Z();
  }
}

var hh = new Q;

function qCo() {
  return hh.bridgeCarrier ? [ "CLAUDE_CODE_SESSION_ACCESS_TOKEN", "SESSION_INGRESS_URL", "CLAUDE_CODE_BRIDGE_PROMPT_SHA256" ] : [];
}

function ky(e) {
  let r = hh.atStartup;
  if (!r) return !1;
  let n, t;
  try {
    n = new URL(e), t = new URL(r);
  } catch {
    return !1;
  }
  if ((n.protocol === "wss:" ? `https://${n.host}` : n.protocol === "ws:" ? `http://${n.host}` : n.origin) !== t.origin) return !1;
  return p.some(o => n.pathname.includes(o));
}

function cVn(e, r) {
  if (!("url" in r) || typeof r.url !== "string") return !1;
  if (!ky(r.url)) return !1;
  switch (hh.bridgeCarrier) {
   case void 0:
    return !0;

   case "child":
    return r.scope === "dynamic" && e === xu;

   case "descendant":
    return !1;
  }
}

function Se(e, r) {
  let n = u(e, r);
  if (!n) return !1;
  if (n.pathname === h) return n.search === "";
  let t = n.searchParams.getAll("toolbox_mcp_server_id");
  return p.some(s => n.pathname.includes(s)) && t.length === 1 && t[0] === Ssn;
}

function JDs(e) {
  let r = C();
  if (r === null) return !1;
  let n = u(e, r);
  if (!n) return !1;
  let t = s9e.exec(n.pathname)?.[1];
  if (t === void 0) return !1;
  if (!hh.ownCcrSessionIds.some(l => or(l) === or(t))) return !1;
  let s = [ ...n.searchParams.keys() ], o = n.searchParams.getAll("toolbox_mcp_server_id"), i = n.searchParams.get("mcp_server_id"), a = n.searchParams.get("mcp_url");
  return new Set(s).size === s.length && s.every(l => A.includes(l)) && o.length === 1 && o[0] === zft && (i === null || ee().has(i)) && (a === null || u(a, r) !== null);
}

function QDs(e) {
  if (!ky(e)) return !1;
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  let n = [ ...r.searchParams.getAll("mcp_server_id"), ...r.searchParams.getAll("toolbox_mcp_server_id") ];
  if (n.length === 0) return !1;
  let t;
  try {
    t = decodeURIComponent(r.pathname);
  } catch {
    return !0;
  }
  let s = f.normalize(t), o;
  for (let d of [ s9e, P, ie, ae ]) if (o = d.exec(r.pathname)?.[1] ?? d.exec(s)?.[1], 
  o !== void 0) break;
  if (o === void 0 && [ "/v2/ccr-sessions/", "/v1/code/sessions/", "/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/" ].some(d => r.pathname.includes(d) || t.includes(d) || s.includes(d))) return !0;
  if (o === ce && hh.ownCcrSessionIds.length === 0) return !0;
  let a = ee(), l = o === void 0 ? [] : re(or(o));
  return n.some(d => a.has(d) || l.includes(d) || d.toLowerCase() === Ia);
}

function ee() {
  let e = new Set([ zft ]);
  for (let r of hh.ownCcrSessionIds) for (let n of re(or(r))) e.add(n);
  return e;
}

function re(e) {
  return [ `cse_${e}`, `session_${e}` ].map(r => jft(r, Ia));
}

var he = /^\/v2\/ccr-sessions\/[A-Za-z0-9_-]+\/memory\/mcp$/;

function uVn(e, r) {
  if (e !== M5 || r.scope !== "dynamic" || Ep(r) || !("url" in r) || typeof r.url !== "string" || !ky(r.url)) return !1;
  let n;
  try {
    n = new URL(r.url);
  } catch {
    return !1;
  }
  if (n.username !== "" || n.password !== "" || n.hash !== "") return !1;
  if (he.test(n.pathname)) return n.search === "";
  let t = n.searchParams.getAll("toolbox_mcp_server_id");
  return s9e.test(n.pathname) && t.length === 1 && t[0] === sVn;
}

function ZDs(e) {
  if (!("url" in e) || typeof e.url !== "string" || Ep(e)) return !1;
  let r = "headers" in e ? e.headers : void 0, n = Object.entries(typeof r === "object" && r !== null ? r : {}), t = n.flatMap(([s, o]) => _(s) === "xmcpserverid" && typeof o === "string" && o.trim() !== "" ? [ o.trim() ] : []);
  if ("headersHelper" in e && e.headersHelper) return ky(e.url);
  return Re(e.url, t, n.flat().filter(s => typeof s === "string"));
}

function Ee(e) {
  return [ sVn, ...e.flatMap(r => {
    let n = or(r);
    return [ `cse_${n}`, `session_${n}` ].map(t => jft(t, M5));
  }) ].map(_);
}

function M(e, r, {orItsName: n = !0} = {}) {
  if (n && R(e).some(s => s.replace(Oe, "") === M5)) return !0;
  let t = e;
  for (let s = 0; s <= 3; s++) {
    if (ne(t, r)) return !0;
    let o = se(t);
    if (s === 3 && o !== t) return !0;
    t = o;
  }
  return !1;
}

function ne(e, r) {
  let n = [ e, e.replace(/%[0-9a-f]{2}/gi, "") ].map(_);
  return r.some(t => n.some(s => s.includes(t)));
}

var H = /[\\\p{Cc}]/u, te = /[%?#\\\s\p{Cc}]/u, j = /^(?:https?|wss?):\/\/(?:[^/?#\\]*@)?[^/?#\\@:]+(?::[^/?#\\@]*)?(?=[/?#\\]|$)/i;

function _(e) {
  return e.toLowerCase().replace(/[^0-9a-z]/g, "");
}

function Re(e, r = [], n = r) {
  if (!ky(e)) return !1;
  if (e.length > 32768) return !0;
  let t;
  try {
    t = new URL(e);
  } catch {
    return !1;
  }
  if ([ e, ...r ].some(c => c.includes("${"))) return !0;
  if (Pe(t.pathname)) return !0;
  let s = [ ...[ ...t.searchParams ].flat(), ...[ t.hash, t.username, t.password ].filter(c => c !== ""), ...n ];
  if (s.length > 64 || t.pathname.length + s.join("").length > 8192) return !0;
  let o = D(s.flatMap(R));
  if (o.some(c => v(c, Ce)) || F(t, [ "mcp_url" ]).some(c => ye(c, t.hostname))) return !0;
  let i = F(t, [ "mcp_server_id", "toolbox_mcp_server_id" ]), a = [ t.pathname, f.normalize(t.pathname) ], l = E(ie, a) ?? E(ae, a), d = E(s9e, a) ?? E(P, a) ?? l, {ownCcrSessionIds: T} = hh, b = D([ ...a, ...o ].flatMap(c => O.flatMap(g => {
    let I = c.indexOf(g), L = I === -1 ? void 0 : /^[A-Za-z0-9_-]+(?=[/?#&;]|$)/.exec(c.slice(I + g.length))?.[0];
    return L === void 0 ? [] : [ L ];
  })));
  if (b.length > 8) return !0;
  let m = Ee(D([ ...T, ...d === void 0 ? [] : [ d ], ...b ]));
  if ([ ...o, ...R(t.pathname + t.search + t.hash) ].some(c => ne(c, m))) return !0;
  if ([ ...r, ...l === void 0 ? [] : [ l ] ].some(c => M(c, m)) || t.pathname.split("/").some(c => M(c, m, {
    orItsName: !1
  }))) return !0;
  let x = d === ce && T.length === 0;
  if (r.length > 0 && x) return !0;
  if (i.length === 0) return !1;
  if (d === void 0 ? O.some(c => a.some(g => g.includes(c))) : x) return !0;
  return i.some(c => M(c, m));
}

function F(e, r) {
  let n = r.map(_);
  return [ ...e.searchParams ].filter(([t]) => R(t).some(s => n.includes(_(s)))).map(([, t]) => t);
}

function E(e, r) {
  for (let n of r) {
    let t = e.exec(n)?.[1];
    if (t !== void 0) return t;
  }
  return;
}

var O = [ "/v2/ccr-sessions/", "/v1/code/sessions/", "/v2/session_ingress/shttp/mcp/", "/v2/session_ingress/mcp/ws/" ], Ce = [ ...O, "/v1/code/local/", "/v1/code/mcp/" ];

function ye(e, r) {
  return !Ae(e, r) && (te.test(e) || v(e, p));
}

function R(e) {
  let r = [ e ], n = [ e ];
  for (let t = 1; t <= 3; t++) n = D(n.flatMap(s => [ V(s), V(s.replace(we, (o, i, a) => o.length === 3 ? o : `\t%${i}${a}\t`)) ])), 
  r.push(...n);
  return D(r);
}

var Oe = /[\s\p{Cc}\ufffd+]/gu, we = /%[\s\p{Cc}\ufffd+]*([0-9a-f])[\s\p{Cc}\ufffd+]*([0-9a-f])/giu;

function V(e) {
  return e.replace(/(?:%[0-9a-f]{2})+/gi, r => (new TextDecoder).decode(Uint8Array.from(r.slice(1).split("%"), n => parseInt(n, 16))));
}

function v(e, r) {
  let n = W(e);
  return r.some(t => {
    let s = W(t).filter(o => o !== "");
    return [ [ ...s, "memory", "mcp" ], [ ...s, "mcp", "memory" ], ...s.includes("mcp") ? [ [ ...s, "memory" ] ] : [] ].some(o => ve(n, o));
  });
}

function W(e) {
  return e.toLowerCase().split(/[^a-z0-9_\-\s\p{Cc}\ufffd+]+/u).flatMap(r => [ ...r.split(/[\s\p{Cc}\ufffd+]+/u), "" ]);
}

function ve(e, r) {
  let n = 0;
  for (let t = 0; t < e.length && n < r.length; t++) {
    let s = r[n] ?? "", o = 0;
    for (let i = t; ;i++) {
      let a = e[i] ?? "";
      if (a === "" || !s.startsWith(a, o)) break;
      if (o += a.length, o === s.length) {
        n++, t = i;
        break;
      }
    }
  }
  return n === r.length;
}

function Pe(e) {
  if (te.test(e) || v(e, p)) return !0;
  let r = e.toLowerCase();
  return [ r, f.normalize(r) ].some(n => p.some(t => {
    let s = n.indexOf(t);
    return s !== -1 && Te(n.slice(s));
  }));
}

function Ae(e, r) {
  let n = j.exec(e)?.[0];
  if (n === void 0 || H.test(e) || !URL.canParse(e) || q(e, r)) return !1;
  for (let t = 0; t <= 3; t++) {
    let s = se(n);
    if (s === n) return !0;
    if (H.test(s) || !j.test(s) || s.toLowerCase().includes(w(r)) || URL.canParse(s) && q(s, r)) return !1;
    n = s;
  }
  return !1;
}

function q(e, r) {
  return [ w(r), "" ].includes(w(new URL(e).hostname));
}

function w(e) {
  let r = e.length;
  while (e[r - 1] === ".") r--;
  return e.slice(0, r);
}

function Te(e) {
  return [ e, f.normalize(e) ].some(r => {
    let n = r.split("/").filter(s => s !== ""), t = n.indexOf("memory");
    return t !== -1 && n.includes("mcp", t + 1) || n.some((s, o) => s === "mcp" && n[o + 1] === "memory");
  });
}

function se(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.replace(/%[0-7][0-9a-f]/gi, r => String.fromCharCode(Number.parseInt(r.slice(1), 16)));
  }
}

var s9e = /^\/v2\/ccr-sessions\/([A-Za-z0-9_-]+)\/mcp$/, P = /^\/v1\/code\/sessions\/([A-Za-z0-9_-]+)\/mcp$/;

function oe(e) {
  return `/internal/v2/ccr-sessions/${e}/toolport/`;
}

var be = new RegExp(`^${oe("[A-Za-z0-9_-]+")}mcp$`);

function YCo(e) {
  return ky(e) && be.test(new URL(e).pathname);
}

var xe = new RegExp(`^${oe("[^/]+")}`);

function i9e(e) {
  if (!ky(e)) return !1;
  let r;
  try {
    r = f.normalize(decodeURIComponent(new URL(e).pathname));
  } catch {
    return !0;
  }
  return xe.test(r);
}

var ie = /^\/v2\/session_ingress\/shttp\/mcp\/([A-Za-z0-9_-]+)$/, ae = /^\/v2\/session_ingress\/mcp\/ws\/([A-Za-z0-9_-]+)$/, ce = "-";

function pVn(e, r, n) {
  let t = u(e, r);
  if (!t) return null;
  let s = s9e.exec(t.pathname), o = Ie(t, r);
  if (!s || s[1] !== n || !o) return null;
  return `${r}/v2/ccr-sessions/${n}/mcp?${o}`;
}

var A = [ "mcp_url", "mcp_server_id", "toolbox_mcp_server_id" ], RPr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

function Ie(e, r) {
  let n = [ ...e.searchParams.keys() ];
  if (new Set(n).size !== n.length || n.some(i => !A.includes(i)) || e.searchParams.get("toolbox_mcp_server_id") !== Ssn) return null;
  let t = new URLSearchParams, s = e.searchParams.get("mcp_url");
  if (s !== null) {
    let i = u(s, r);
    if (!i || i.pathname !== h || i.search !== "") return null;
    t.set("mcp_url", `${r}${h}`);
  }
  let o = e.searchParams.get("mcp_server_id");
  if (o !== null) {
    if (!RPr.test(o)) return null;
    t.set("mcp_server_id", o);
  }
  return t.set("toolbox_mcp_server_id", Ssn), t.toString();
}

function u(e, r) {
  let n;
  try {
    n = new URL(e);
  } catch {
    return null;
  }
  return n.origin === r && n.username === "" && n.password === "" && n.hash === "" ? n : null;
}

function C() {
  let e = hh.atStartup;
  if (!e) return null;
  try {
    return new URL(e).origin;
  } catch {
    return null;
  }
}

function e0s(e) {
  let r = C(), n = r === null ? null : u(e, r);
  if (!n) return !1;
  let t = (s9e.exec(n.pathname) ?? P.exec(n.pathname))?.[1];
  return t !== void 0 && hh.ownCcrSessionIds.some(s => or(s) === or(t));
}

function fVn(e) {
  let r = C();
  return r !== null && Se(e, r);
}

function t0s(e) {
  let r = C(), n = r === null ? null : u(e, r), t = n ? s9e.exec(n.pathname)?.[1] : void 0;
  if (!n || t === void 0) return null;
  let s = [ ...n.searchParams.keys() ], o = n.searchParams.get("mcp_server_id"), i = n.searchParams.get("toolbox_mcp_server_id");
  if (new Set(s).size !== s.length || s.some(a => !A.includes(a)) || o === null || !RPr.test(o) || i === null) return null;
  return {
    sessionSegment: t,
    mcpServerId: o,
    toolboxMcpServerId: i,
    upstreamUrl: n.searchParams.get("mcp_url") ?? void 0
  };
}

function Kft(e) {
  return e !== void 0 && Fft(e) === null ? new URL(e).origin : null;
}

var Ue = "/v1/code/mcp/hearthbot", De = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/hearthbot\/mcp$/;

function mVn(e) {
  if (!ky(e)) return !1;
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return r.username === "" && r.password === "" && r.hash === "" && r.search === "" && (r.pathname === Ue || De.test(r.pathname));
}

var de = new Set([ "bridge.claudeusercontent.com", "bridge-staging.claudeusercontent.com" ]), ke = "/devices/mcp";

function xPr(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return r.protocol === "wss:" && r.username === "" && r.password === "" && de.has(r.hostname);
}

function TIe(e) {
  if ("url" in e && typeof e.url === "string" && ky(e.url)) return !0;
  return Ep(e);
}

function le(e) {
  if (!ky(e) || !URL.canParse(e)) return;
  return new URL(e).searchParams.get("mcp_url") || void 0;
}

var Ne = new Set([ "http:", "https:", "ws:", "wss:" ]);

function XCo(e) {
  let r = le(e);
  if (r === void 0 || !URL.canParse(r)) return;
  let n = new URL(r);
  return Ne.has(n.protocol) ? n.hostname.toLowerCase() : void 0;
}

function Rve(e) {
  let r = le(e);
  if (!r) return !1;
  try {
    let n = new URL(r);
    return de.has(n.hostname) && n.pathname === ke;
  } catch {
    return !1;
  }
}

function xve(e) {
  if (!("url" in e) || typeof e.url !== "string") return;
  try {
    let r = new URL(e.url);
    return r.search = "", r.username = "", r.password = "", r.hash = "", r.toString().replace(/\/$/, "");
  } catch {
    return;
  }
}

function a$(e) {
  return e ? sn(e) : void 0;
}

function n0s(e) {
  if (!URL.canParse(e)) return;
  let r = new URL(e);
  if (r.origin === "null") return;
  return r.pathname !== "/" || r.search !== "" || r.hash !== "" ? `${r.origin}/\u2026` : r.origin;
}

function z() {
  return process.env.SESSION_INGRESS_URL ?? process.env.ANTHROPIC_BASE_URL;
}

function G() {
  return process.env.SESSION_INGRESS_URL !== void 0;
}

function Y() {
  let e = process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
  if (e === "1" || !e) return e ? "child" : void 0;
  if (process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && Le(process.env.CLAUDE_CODE_REMOTE)) {
    delete process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
    return;
  }
  return "descendant";
}

function Z() {
  return [ process.env.CLAUDE_CODE_REMOTE_SESSION_ID, process.env.CLAUDE_CODE_SESSION_ID ].filter(e => e !== void 0 && lq(e));
}

function s1e(e) {
  return "url" in e ? e.url : null;
}

function a9e(e) {
  if (e.type !== void 0 && e.type !== "stdio") return null;
  let r = e;
  return [ r.command, ...r.args ?? [] ];
}

function JCo(e) {
  if (!p.some(r => e.includes(r))) return e;
  try {
    return new URL(e).searchParams.get("mcp_url") || e;
  } catch {
    return e;
  }
}

function Iie(e) {
  return e.type ?? ("command" in e ? "stdio" : "unknown");
}

function gVn(e) {
  let {authoredUnexpanded: r, expanded: n, cliOwned: t} = e, s = e.detail ?? "endpoint";
  if (r) {
    let i = s1e(r);
    if (i) {
      if (s === "endpoint") return iOe(i);
      if (He(i)) return J(i);
      return X(i) ?? J(i);
    }
    let a = a9e(r);
    if (a) return s === "endpoint" ? iOe(a.join(" ")) : void 0;
    return s === "endpoint" ? Iie(r) : void 0;
  }
  let o = s1e(n);
  if (o) {
    let i = t && ky(o) ? JCo(o) : o, a = X(i);
    if (a !== void 0) return a;
  }
  return s === "endpoint" ? Iie(n) : void 0;
}

function X(e) {
  try {
    let r = new URL(e).origin;
    return r === "null" ? void 0 : r;
  } catch {
    return;
  }
}

function Tsn(e, r = e) {
  let n = i => {
    let a = e.length;
    for (let l of [ "/", "?", "#", "\\" ]) {
      let d = r.indexOf(l, i);
      if (d !== -1 && d < a) a = d;
    }
    return a;
  }, t = r.indexOf("://"), s = t !== -1 && t < n(0) && /^[A-Za-z][A-Za-z0-9+.-]*$/.test(r.slice(0, t)) ? t + 3 : 0, o = n(s);
  return {
    scheme: e.slice(0, s),
    authority: e.slice(s, o),
    rest: e.slice(o)
  };
}

function He(e) {
  return Tsn(e, gan(e)).authority.includes("${");
}

function J(e) {
  let r = gan(e), {scheme: n, authority: t} = Tsn(r), s = n.length, o = s + t.length;
  if (r.includes("@", o)) return iOe(e.slice(0, s)) + "[unparseable-authority]";
  let i = t.lastIndexOf("@"), a = e.slice(i === -1 ? s : s + i + 1, o);
  if (a === "") return;
  return iOe(e.slice(0, s) + a);
}

export { LDs, Fft, wLt, EIe, xu, jCo, WCo, NDs, $Ds, Ssn, Uft, kd, W9, kPr, TPr, APr, r1e, zCo, GCo, FDs, UDs, BDs, Ut, jDs, gfe, Ep, o1e, nVn, rVn, oVn, Pi, o9e, Bft, WDs, M5, wsn, sVn, vsn, jft, hfe, Wft, zDs, zft, iVn, vLt, VCo, aVn, lVn, GDs, VDs, ELt, dVn, Esn, CPr, KDs, kIe, qDs, KCo, ksn, Gft, Vft, YDs, XDs, hh, qCo, ky, cVn, JDs, QDs, uVn, ZDs, s9e, YCo, i9e, pVn, RPr, e0s, fVn, t0s, Kft, mVn, xPr, TIe, XCo, Rve, xve, a$, n0s, s1e, a9e, JCo, Iie, gVn, Tsn };
