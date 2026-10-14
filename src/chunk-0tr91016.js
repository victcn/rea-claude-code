// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Hkn, Dkn, Lkn, mKt, gKt, hKt, yKt, Nkn, $kn, Fkn, Ukn, Bkn, jkn, Ftt } from "./chunk-knracj0e.js";

import { dt } from "./chunk-dd98x6x7.js";

import { b5 } from "./chunk-xywp7esx.js";

import { Ud } from "./chunk-9tdwgnpn.js";

import { yxt, aat } from "./chunk-sqb9meyh.js";

import { RCn } from "./chunk-84yp45y8.js";

import { Qgn } from "./chunk-aatq7kx5.js";

import { Tet } from "./chunk-q0dvnnc2.js";

function qte(t = {}) {
  let e = import.meta.require("./chunk-8vq0nsa4.js"), s = e.isTeammate() && e.isPlanModeRequired() ? "plan" : "default";
  return {
    sessionNoticesPoll: {
      pendingDeliveryUuids: []
    },
    settings: dt(),
    tasks: {},
    transcripts: {},
    runningSubagents: 0,
    agentNameRegistry: new Map,
    sendMessagePins: {},
    agentTypesInvokedThisSession: new Set,
    verbose: !1,
    showMessageTimestamps: !1,
    mainLoopModel: null,
    mainLoopModelForSession: null,
    isBriefOnly: !1,
    slackTagConnected: !1,
    briefTranscript: !1,
    replBridgeEnabled: !1,
    replBridgeExplicit: !1,
    replBridgeOutboundOnly: !1,
    replBridgeSessionActive: !1,
    replBridgeSkipNextArchive: !1,
    replBridgeSessionGroupingId: void 0,
    toolPermissionContext: {
      ...Ud(),
      mode: s
    },
    attentionBudget: RCn,
    proactivityLevel: yxt,
    agent: void 0,
    agentDefinitions: {
      activeAgents: [],
      allAgents: []
    },
    fileHistory: {
      snapshots: [],
      trackedFiles: new Set,
      snapshotSequence: 0
    },
    attribution: aat(),
    mcp: {
      clientsInitialized: !1,
      clients: [],
      tools: [],
      commands: [],
      resources: {},
      resourceTemplates: {},
      suppressedClaudeAiConnectors: [],
      pluginReconnectKey: 0
    },
    plugins: {
      enabled: [],
      disabled: [],
      commands: [],
      errors: [],
      warnings: [],
      installationStatus: {
        marketplaces: [],
        plugins: []
      },
      needsRefresh: !1
    },
    todos: {},
    queuedRemoteNotifications: {
      pending: [],
      drainedIds: [],
      nudge: null,
      readsThisTurn: [],
      readsDroppedThisTurn: 0,
      unfinishedReads: [],
      nudgeHeldUntil: {
        request: 0,
        cut: 0
      }
    },
    prResolvedThisSession: !1,
    frameUrls: {},
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
    ultrareviewOverageConfirmed: !1,
    thinkingEnabled: b5(),
    promptSuggestionEnabled: t.promptSuggestionEnabled ?? Qgn(),
    awaySummaryEnabled: Tet(),
    displayedMessageContent: {},
    inbox: {
      messages: []
    },
    pendingMemoryUpdates: [],
    pendingWorkerRequest: null,
    pendingSandboxRequest: null,
    promptSuggestion: {
      status: "empty"
    },
    taskSummary: null,
    initialMessage: null,
    sessionEffort: {
      kind: "inherit"
    },
    settingsEffortTable: {
      default: void 0,
      legacyUserEffort: void 0,
      byModel: {}
    },
    ultracode: void 0,
    cacheMissAckedAtOutputTokens: -1,
    fastMode: !1,
    storedImagePaths: new Map,
    imageDescriptions: new Map,
    classifierApprovals: {
      approvals: new Map,
      checking: new Set
    },
    teammateColors: {
      assignments: new Map,
      index: 0
    },
    webBrowser: import.meta.require("./chunk-9mffdpjw.js").getDefaultWebBrowserState()
  };
}

export { qte };
