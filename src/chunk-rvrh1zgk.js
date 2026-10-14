// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ee } from "./chunk-kq1bg4dg.js";

import { i } from "./chunk-hedpgw9m.js";

import { v9, Ss, k } from "./chunk-xywp7esx.js";

import { a, tr } from "./chunk-j016gcgm.js";

import { p } from "./chunk-jkzenvsk.js";

import { Qs } from "./chunk-s2t7g8m9.js";

import { Vg, nr, Yt, Ku, sA, wie, K_ } from "./chunk-f1zpf9me.js";

import { lT, I1, Wg } from "./chunk-ann91fyn.js";

import { cTs, O6e, uv, rpe } from "./chunk-bdevabaf.js";

import { wt, spe, x1, P1, HN, vd, ipe, x_o } from "./chunk-hk8p0fqv.js";

import { tde } from "./chunk-69rr80fg.js";

import { jb } from "./chunk-exeqjnzg.js";

import { Nne } from "./chunk-r492ssxm.js";

import { Pkn } from "./chunk-etkns590.js";

import { kg, dh, de } from "./chunk-5ydr99q3.js";

import { d4, cXo } from "./chunk-5egdactz.js";

import { REn } from "./chunk-d9ybkgnw.js";

import { o, M, u, $e, U, A } from "./chunk-cvcg6n1z.js";

import { yI } from "./chunk-hmqkrrtz.js";

function R(e, t) {
  return typeof e === "string" || typeof t === "string" ? e === t : yI(e, t);
}

var E = 64;

function I(e) {
  let t = e.url;
  return typeof t === "string" ? Yt(t) ?? void 0 : void 0;
}

async function anr(e, t) {
  let n = ee().typeCapabilityReads, r = n.get(e);
  if (r !== void 0 && (!t.toolUseId || r.toolUseId === t.toolUseId)) return r.capabilities;
  let s = Date.now(), d = await Nne(e, {
    signal: t.abortController.signal,
    credentials: t.credentials
  }), c = d.err === null ? d.detail : null, l = c === null || c.declaration === "malformed" ? null : c.capabilities, _ = l !== null && (c?.declaration === void 0 || Object.keys(c.declaration).length === l.length);
  if (HN(s)) return null;
  if (!n.has(e) && n.size >= E) {
    let m = n.keys().next().value;
    if (m !== void 0) n.delete(m);
  }
  return n.set(e, {
    toolUseId: t.toolUseId,
    capabilities: l,
    whole: _
  }), l;
}

function xYr(e) {
  return ee().typeCapabilityReads.get(e)?.whole === !0;
}

function evt(e) {
  return ee().typeCapabilityReads.get(e)?.capabilities?.includes("room") === !0;
}

function lnr(e, t) {
  if (Ss(t.agentContext)) return;
  if (l4(e, t)) t.setAppState(n => f(n, t, r => r.artifactWatchApproved ? r : {
    ...r,
    artifactWatchApproved: !0
  }));
}

var PYr = {
  get: {
    pages: !1,
    cursor: "",
    none: ""
  },
  list: {
    pages: !0,
    cursor: "page with a smaller `query.limit`",
    none: "a smaller read is the only way to see them"
  },
  query: {
    pages: !0,
    cursor: "page with a smaller `query.limit`",
    none: "narrow with a `query.where`"
  },
  replayed: {
    pages: !1,
    cursor: "",
    none: ""
  }
};

function IYr(e, t) {
  if (Ss(e.agentContext)) return;
  e.setAppState(n => f(n, e, r => r.artifactReadPageDataApproved && (!t || r.artifactReadPageDataHumanApproved) ? r : {
    ...r,
    artifactReadPageDataApproved: !0,
    ...t && {
      artifactReadPageDataHumanApproved: !0
    }
  }));
}

function l4(e, t) {
  return Reflect.get(e, Op) === !0 && kg(t) && !EEn(t);
}

function OYr(e) {
  if (e.toolUseId === void 0) return;
  let t = ee(), {consentCheckScopes: n} = t;
  if (n.delete(e.toolUseId), n.size >= x) {
    let r = n.keys().next().value;
    if (r !== void 0) n.delete(r), t.consentCheckScopesEvicted = !0;
  }
  n.set(e.toolUseId, O6e());
}

var x = 256;

function EEn(e) {
  if (e.toolUseId === void 0) return !1;
  let t = ee(), n = t.consentCheckScopes.get(e.toolUseId);
  return n === void 0 ? t.consentCheckScopesEvicted : n !== O6e();
}

function wVt(e) {
  return kg(e) && !Qs(de(e).mode);
}

function wDe(e, t) {
  return (e[eh] ?? !1) && de(t).mode === "plan" || D(e);
}

function D(e) {
  return Reflect.get(e, jI) === !0;
}

function f(e, t, n) {
  if (EEn(t)) return e;
  let {accountEpoch: r} = ee();
  if ((e.artifactConsentEpoch ?? 0) === r) return n(e);
  return n({
    ...e,
    ...Object.fromEntries(cTs.map(s => [ s, Pkn[s] ])),
    artifactConsentEpoch: r
  });
}

function MYr(e, t, n, r) {
  return f(e, t, s => ({
    ...s,
    artifactPlanPublishConsentPaths: {
      ...s.artifactPlanPublishConsentPaths,
      [n]: {
        slug: r
      }
    }
  }));
}

function C(e, t, n, r, s = () => !0) {
  return f(e, t, d => {
    if (n.every(l => N(d[l]?.[r], s(d[l]?.[r])))) return d;
    let c = {
      ...d
    };
    for (let l of n) c[l] = {
      ...c[l],
      [r]: s(d[l]?.[r])
    };
    return {
      ...d,
      ...c
    };
  });
}

function N(e, t) {
  return e === void 0 || e === !0 || e === "script" || t === !0 || t === "script" ? e === t : R(e, t);
}

function y(e, t) {
  return t ? [ `${e}ConsentSlugs`, `${e}HumanConsentSlugs` ] : [ `${e}ConsentSlugs` ];
}

function HYr(e, t, n) {
  if (Ss(t.agentContext)) return;
  if (!l4(e, t) || vd(wt(n))) return;
  t.setAppState(r => C(r, t, y("artifactDbRead", wDe(e, t)), n));
}

function dnr(e, t) {
  if (Ss(t.agentContext)) return;
  if (!l4(e, t)) return;
  let n = wDe(e, t);
  t.setAppState(r => f(r, t, s => s.artifactDbWriteApproved && (!n || s.artifactDbWriteHumanApproved) ? s : {
    ...s,
    artifactDbWriteApproved: !0,
    ...n && {
      artifactDbWriteHumanApproved: !0
    }
  }));
}

function SB(e) {
  return e?.cowritten === !0 || e?.artifactKind === lT;
}

function V6(e) {
  return e?.typeLocked === !0 || e?.typeLock != null;
}

function Y$(e, t = vd(e)) {
  return t && V6(e) && e?.artifactKind !== lT;
}

function tvt(e, t = vd(e)) {
  let n = x1(e);
  return Y$(e, t) && n !== void 0 && jb(n) === "first_party_type";
}

function DYr(e) {
  return e !== void 0 && e.typeLock != null && tvt(e) && !ipe(e) && e.capabilitiesUnknown !== !0 && e.capsReadNotFound !== !0 && spe(e) && I1(e.capabilities);
}

function L2e() {
  let e = ee();
  if (e.inheritedTypeGrantLatch === null) e.inheritedTypeGrantLatch = tr.CLAUDE_CODE_ARTIFACT_INHERITED_TYPE_GRANT ?? k("tengu_swirling_squid", !1) === !0, 
  i("tengu_artifact_inherited_type_grant", {
    on: e.inheritedTypeGrantLatch
  });
  return e.inheritedTypeGrantLatch;
}

function N2e(e, t, n, r = !1) {
  if (Ss(t.agentContext)) return;
  let s = wt(n), d = Reflect.get(e, OM), c = S => typeof d === "object" && d !== null && Reflect.get(d, S) === !0, l = c("classifier") || de(t).mode === "auto" && !c("userOnly");
  if (!P(e, t) || c("once") || l || vd(s) && !SB(s) && !V6(s)) return;
  let _ = F(e, t) || r && MTe(t), m = r && !Nle(t);
  t.setAppState(S => C(S, t, [ ...y("artifactAssetRead", _), ...m ? [ "artifactOutsideOrgConsentSlugs" ] : [] ], n));
}

function LYr(e, t) {
  if (t.length === 0 || Ss(e.agentContext)) return;
  e.setAppState(n => t.reduce((r, s) => C(r, e, [ "artifactOutsideOrgConsentSlugs" ], s), n));
}

function NYr(e, t, n) {
  if (Ss(t.agentContext)) return;
  if (!P(e, t) || Nle(t) || de(t).mode === "auto" && !uv(I(e)) && !rpe(n) || vd(wt(n))) return;
  t.setAppState(r => C(r, t, [ "artifactReadConsentSlugs" ], n));
}

function nvt(e, t, n, r) {
  if (Ss(t.agentContext)) return;
  if (!l4(e, t) || de(t).mode === "auto") return;
  x_o(n, r), t.setAppState(s => C(s, t, y("artifactAssetUpload", wDe(e, t)), n));
}

function kEn(e, t) {
  return Reflect.get(e, UJ) === "auto" && !MTe(t);
}

function $2e(e, t) {
  return e === "auto" && !ee().roomStoppedByUser.has(t);
}

function T(e) {
  let t = e.queryTracking;
  return t === void 0 ? void 0 : `${t.chainId}:${t.depth}`;
}

function $Yr(e, t, n) {
  let {roomArmAsked: r} = ee();
  if (n === void 0) r.delete(t); else r.set(t, {
    ...n,
    at: T(e)
  });
}

function FYr(e, t) {
  for (let [n, r] of ee().roomArmAsked) {
    if (n === t) continue;
    if (e.keys.includes(r.key) || e.slug !== void 0 && r.slug === e.slug) return !0;
  }
  return !1;
}

function UYr(e) {
  if (e !== void 0) ee().roomArmAsked.delete(e);
}

var TEn = "path:*";

function cnr(e) {
  let t = ee(), n = T(e);
  for (let [r, s] of t.roomArmAsked) {
    if (r === e.toolUseId) continue;
    let d = w(e.messages, r);
    if (d === void 0 && s.at !== void 0 && s.at === n) continue;
    t.roomArmAsked.delete(r);
    let c = d?.toolDenialKind;
    if (d === void 0 || c === "user-rejected" || c === "permission-rule") {
      if (t.roomArmRefusedByUser.add(s.key), t.roomArmRefusedByUser.add(TEn), s.slug !== void 0) t.roomStoppedByUser.add(s.slug);
    }
  }
}

function w(e, t) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r?.type === "user" && Array.isArray(r.message.content) && r.message.content.some(s => s.type === "tool_result" && s.tool_use_id === t)) return r;
  }
  return;
}

function unr(e, t, n) {
  if (Ss(t.agentContext)) return;
  let r = Reflect.get(e, UJ);
  if (r !== !0 && r !== "auto" || dh(t)) return;
  let s = kEn(e, t) ? "classifier" : !0;
  if (s === "classifier" && !$2e(de(t).mode, n)) return;
  t.setAppState(d => f(d, t, c => c.artifactRoomJoinConsentSlugs?.[n] === s || c.artifactRoomJoinConsentSlugs?.[n] === !0 ? c : {
    ...c,
    artifactRoomJoinConsentSlugs: {
      ...c.artifactRoomJoinConsentSlugs,
      [n]: s
    }
  }));
}

function hW(e) {
  let t = "thread_id" in e && typeof e.thread_id === "string" ? e.thread_id : void 0, n = "text" in e && typeof e.text === "string" ? e.text : void 0, r = "cursor" in e && typeof e.cursor === "string" ? e.cursor : void 0;
  return {
    threadId: t,
    replyText: n,
    cursor: r
  };
}

function BYr(e, t) {
  let n = t !== void 0 && nr.test(t) ? t : "(invalid)", r = "viewers of this artifact (share status could not be confirmed)";
  if (e !== null) {
    let s = wt(e.slug);
    if (s !== void 0 && s.probeFailed !== !0) r = s.mode === "owner" ? "viewers of this artifact (not currently shared)" : `${P1(s)} (the artifact is shared)`;
  }
  return {
    tid: n,
    audience: r
  };
}

function kne(e) {
  let t = n => {
    let r = e[n];
    return typeof r === "string" ? r : void 0;
  };
  return {
    assetId: t("asset_id"),
    outDir: t("out_dir"),
    after: t("after")
  };
}

function vVt(e, t = 1024) {
  return sA(Ku(Wg(e, {
    max: t
  })) ?? "").replace(K_, " ").replace(wie, " ");
}

function Lhe(e, t = 1024) {
  return `"${vVt(e, t).replace(/\\$/, "\\ ")}"`;
}

function jYr(e, t) {
  let n = e.trimEnd().replace(/\.$/, "");
  if (n === "") {
    let r = t.replace(/^[\s;,\u2014-]+/, "");
    return r.charAt(0).toUpperCase() + r.slice(1);
  }
  return `${n}${t}`;
}

function Nhe(e) {
  if (e.behavior !== "ask") return -1;
  let t = e.decisionReason;
  switch (t?.type) {
   case "rule":
    return 4;

   case "safetyCheck":
    return t.classifierApprovable ? 1 : 3;

   case "mode":
    return 2;

   default:
    return 0;
  }
}

var Op = "__artifactConsentAskCanReachUser", rvt = "__artifactWatchWouldArmReplies", eh = "__artifactPlanConsentAsk", jI = "__artifactUserOnlyConsentAsk", AEn = "__artifactVerifyTargetPinned";

function Stt(e) {
  return typeof e.url === "string" ? Yt(e.url) : ee().verify.lastPublish ?? null;
}

var K6 = "__artifactPublishTarget", F2e = "__artifactRoutineUnaskedFirstPublish", EVt = "__artifactPublishSourcePin", h = p(() => u({
  path: o(),
  kind: U([ "file", "absent", "network" ]),
  redirected: M(),
  sha256: o().optional(),
  root: u({
    spelling: o(),
    base: o(),
    redirected: M().optional()
  }).optional(),
  copies: o().optional(),
  minted: o().optional(),
  type: $e([ o(), A(!1) ]),
  shim: M().optional()
}));

function pnr(e) {
  let t = Reflect.get(e, EVt);
  if (t === void 0) return;
  let n = h().safeParse(t);
  return n.success ? n.data : null;
}

var v = p(() => h().omit({
  type: !0
}));

function fnr(e) {
  let t = Reflect.get(e, EVt);
  if (t === void 0) return "source_pin_missing";
  return typeof t === "object" && t !== null && Reflect.get(t, "type") === void 0 && v().safeParse(t).success ? "source_pin_stale_build" : "source_pin_unreadable";
}

var UJ = "__artifactRoomJoinDisclosed", vDe = "__artifactTypeCreatePin", EDe = "__artifactAssetUploadPin", U2e = "__artifactRoomSendTarget", OM = "__artifactAssetTargetPin", kVt = "__artifactReadTargetPin", ovt = "__artifactDeletePin", svt = "__artifactDeleteTarget", jE = "__artifactDisplayTarget", O = "__artifactEndpointBodyFile", g = "__artifactConsentPin", mnr = "__artifactSyncTargetPin";

function vS(e, t) {
  return {
    [g]: t === null ? null : {
      action: e,
      slug: t.slug
    }
  };
}

var b = [ K6, EDe, U2e, OM, kVt, ovt, g, mnr ];

function q6(e, t) {
  return b.some(n => n !== t && Reflect.get(e, n) !== void 0);
}

function wtt(e) {
  return b.some(t => Reflect.get(e, t) !== void 0);
}

function BJ(e, t, n) {
  let r = Reflect.get(e, g);
  return typeof r === "object" && r !== null && Reflect.get(r, "action") === t && Reflect.get(r, "slug") === n;
}

function I2(e, t, n) {
  return q6(e, g) || Reflect.get(e, g) !== void 0 && !BJ(e, t, n);
}

var TVt = "__artifactDbReadTargetPin", AVt = "__artifactDbWriteSourcePin", G = "__artifactHandlersPin", L = "__artifactLiveDocStandIn", ivt = "__artifactAsk", j = [ Op, L, eh, jI, rvt, ...b, UJ, vDe, AEn, EVt, TVt, AVt, G, svt, jE, O, REn, ivt, F2e ];

function WYr(e) {
  return typeof e === "object" && e !== null && j.some(t => Reflect.get(e, t) !== void 0);
}

function jJ(e, t, n, r, s = !1) {
  if (t.toolUseId !== void 0) ee().shareStatus.noticeReadSights[e].note(t.toolUseId, n, r && (s || kg(t)));
}

function Lle(e, t, n, r) {
  return t.toolUseId === void 0 ? r : ee().shareStatus.noticeReadSights[e].take(t.toolUseId, n) === !0;
}

function zYr(e, t) {
  if (Ss(t.agentContext)) return !1;
  return (e[eh] ?? !1) && de(t).mode === "plan" && kg(t);
}

function yW(e) {
  return tde({
    agentId: e.agentId,
    agentType: e.agentContext?.agentType,
    isNonInteractiveSession: e.options.isNonInteractiveSession
  });
}

function vtt(e) {
  return Boolean(a.CLAUDE_CODE_REMOTE) || d4(yW(e).publishContext);
}

function MTe(e) {
  if (e.toolUseId === void 0) return !1;
  let t = e.toolDecisions?.get(e.toolUseId)?.source;
  return t === "user_temporary" || t === "user_permanent";
}

function Nle(e) {
  if (e.toolUseId === void 0) return !1;
  let t = e.toolDecisions?.get(e.toolUseId);
  return t !== void 0 && t.decision !== "reject" && t.source !== "user_temporary" && t.source !== "user_permanent";
}

function P(e, t) {
  return l4(e, t) && !dh(t);
}

function F(e, t) {
  return wDe(e, t) && !Nle(t);
}

function CEn(e) {
  return vtt(e) && !Ss(e.agentContext) ? cXo : void 0;
}

function gnr(e) {
  return v9(e) && !Vg(e);
}

export { anr, xYr, evt, lnr, PYr, IYr, l4, OYr, EEn, wVt, wDe, MYr, HYr, dnr, SB, V6, Y$, tvt, DYr, L2e, N2e, LYr, NYr, nvt, kEn, $2e, $Yr, FYr, UYr, TEn, cnr, unr, hW, BYr, kne, vVt, Lhe, jYr, Nhe, Op, rvt, eh, jI, AEn, Stt, K6, F2e, EVt, pnr, fnr, UJ, vDe, EDe, U2e, OM, kVt, ovt, svt, jE, mnr, vS, q6, wtt, BJ, I2, TVt, AVt, ivt, WYr, jJ, Lle, zYr, yW, vtt, MTe, Nle, CEn, gnr };
