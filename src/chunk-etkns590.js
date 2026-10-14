// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { OJo } from "./chunk-fw01syjs.js";

import { i6r } from "./chunk-7h2ztj4d.js";

import { Hkn, Dkn, Lkn, mKt, gKt, hKt, yKt, Nkn, $kn, Fkn, Ukn, Bkn, jkn, Ftt } from "./chunk-knracj0e.js";

var o = Object.freeze({}), i = Object.freeze({}), Pkn = {
  bagelActive: void 0,
  bagelUrl: void 0,
  bagelPanelVisible: void 0,
  computerUseMcpState: void 0,
  denialTracking: void 0,
  activeGoal: void 0,
  remoteAutocompactState: void 0,
  queuedGoalOrigin: void 0,
  frameOpenFailedPath: null,
  frameOpenFailedSeen: !1,
  artifactWatchApproved: !1,
  artifactDbWriteApproved: !1,
  artifactDbWriteHumanApproved: !1,
  artifactDbReadConsentSlugs: Dkn,
  artifactDbReadHumanConsentSlugs: Lkn,
  artifactReadConsentSlugs: mKt,
  artifactConsentEpoch: 0,
  artifactAssetUploadConsentSlugs: Nkn,
  artifactAssetUploadHumanConsentSlugs: $kn,
  artifactAssetReadConsentSlugs: gKt,
  artifactAssetReadHumanConsentSlugs: hKt,
  artifactOutsideOrgConsentSlugs: yKt,
  artifactHandlersReadConsentSlugs: Fkn,
  artifactHandlersReadHumanConsentSlugs: Ukn,
  artifactHandlersWriteConsentSlugs: Bkn,
  artifactHandlersWriteHumanConsentSlugs: jkn,
  artifactRoomJoinConsentSlugs: Ftt,
  artifactReadPageDataApproved: !1,
  artifactReadPageDataHumanApproved: !1,
  artifactPlanPublishConsentPaths: Hkn,
  prResolvedThisSession: !1,
  ultrareviewOverageConfirmed: !1,
  artifactReadVersions: o,
  artifactReadObservers: i
}, s = {
  artifactReadConsentSlugs: mKt,
  artifactAssetReadConsentSlugs: gKt,
  artifactAssetReadHumanConsentSlugs: hKt,
  artifactOutsideOrgConsentSlugs: yKt
}, _ = Object.keys(s);

function Ikn(e) {
  return _.every(t => e[t] === s[t]) ? e : {
    ...e,
    ...s
  };
}

var T = Object.keys(Pkn);

function Okn(e) {
  let t = e.webBrowser, r = t.view === void 0 && t.logs.length === 0 && t.unreadErrors === 0 && t.unreadWarnings === 0, n = OJo(e.workshopTelemetry), S = Object.keys(e.artifactReadVersions ?? {}).length === 0 && Object.keys(e.artifactReadObservers ?? {}).length === 0;
  if (r && n === e.workshopTelemetry && S && T.every(a => a === "artifactReadVersions" || a === "artifactReadObservers" || e[a] === Pkn[a])) return e;
  return {
    ...e,
    ...Pkn,
    ...n !== e.workshopTelemetry && {
      workshopTelemetry: n
    },
    webBrowser: r ? t : {
      ...i6r(),
      cleanupRegistered: t.cleanupRegistered
    }
  };
}

function Mkn(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun) return Bun.WebView.closeAll(), 
  !0;
  return !1;
}

export { Pkn, Ikn, Okn, Mkn };
