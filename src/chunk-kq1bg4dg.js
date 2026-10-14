// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt, B } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { t } from "./chunk-kawq2919.js";

import { oc } from "./chunk-zx69jgxc.js";

import { randomUUID as S } from "crypto";

class u {
  #e=new Map;
  #n=new Set;
  note(e, r, n) {
    if (this.#n.has(e)) return;
    let s = this.#e.get(e);
    if (s !== void 0) {
      if (s.has(r)) return;
      if (s.size >= 4) {
        this.#t(e);
        return;
      }
      s.set(r, n);
      return;
    }
    if (this.#e.size >= 256) {
      let d = 128;
      for (let i of this.#e.keys()) if (this.#t(i), --d === 0) break;
    }
    this.#e.set(e, new Map([ [ r, n ] ]));
  }
  #t(e) {
    this.#e.delete(e), this.#n.add(e);
  }
  take(e, r) {
    let n = this.#e.get(e);
    return this.#e.delete(e), n?.get(r);
  }
}

class p {
  #e;
  #n;
  #t;
  #r=!1;
  constructor(e, r, n) {
    this.#e = e, this.#n = r, this.#t = n;
  }
  settle(e) {
    if (this.#r) return;
    if (this.#r = !0, this.#e.get(this.#n) !== this.#t) return;
    if (this.#t.pending--, e.wasWatching || e.teardown !== "unsent") this.#t.confirmed = !0;
    if (this.#t.pending === 0 && !this.#t.confirmed) this.#e.delete(this.#n);
  }
}

class c {
  #e=new Map;
  #n=1;
  #t=new Set;
  #r=new u;
  isStopped(e) {
    return this.#e.has(e);
  }
  stoppedSlugs() {
    return this.#e.keys();
  }
  latchGeneration(e) {
    return this.#e.get(e)?.generation;
  }
  recordStop(e) {
    this.#t.delete(e);
    let r = this.#e.get(e);
    if (r === void 0) r = {
      pending: 0,
      confirmed: !1,
      generation: this.#n++
    }, this.#e.set(e, r); else r.generation = this.#n++;
    return r.pending++, new p(this.#e, e, r);
  }
  reaffirmStop(e) {
    this.#t.delete(e);
    let r = this.#e.get(e);
    if (r === void 0) this.confirmStop(e); else r.confirmed = !0;
  }
  confirmStop(e) {
    this.#t.delete(e);
    let r = this.#e.get(e);
    if (r === void 0) this.#e.set(e, {
      pending: 0,
      confirmed: !0,
      generation: this.#n++
    }); else r.confirmed = !0, r.generation = this.#n++;
  }
  noteRelatchAsk(e, r) {
    this.#r.note(e, r, this.latchGeneration(r));
  }
  takeRelatchAsk(e, r) {
    return this.#r.take(e, r);
  }
  clearByApprovedRewatch(e, r) {
    let n = this.#e.get(e);
    if (n === void 0 || n.generation !== r) return;
    this.#e.delete(e), this.#t.add(e);
  }
  noteApprovedWatch(e) {
    if (!this.#e.has(e)) this.#t.add(e);
  }
  wasClearedByRewatch(e) {
    return this.#t.has(e) && !this.#e.has(e);
  }
}

var b = {
  baseMs: 1e3,
  capMs: 3e4,
  minUptimeMs: 6e4,
  maxConsecutiveFailures: 10,
  spreadMinMs: 1e3,
  spreadMaxMs: 2e4,
  seedDeferMaxMs: 18e4,
  idleTtlMs: 126e5,
  handshakeDeadlineMs: 15e4,
  stallThresholdMs: 1e4,
  stallMinMs: 3e4,
  stallMaxMs: 6e4,
  longStallMinMs: 12e4,
  longStallMaxMs: 24e4,
  maxStallMs: 18e5,
  stallOutJitterMs: 9e5
}, v = 3e4, M = 100, g = {
  baseMs: 1e3,
  capMs: 3e4,
  minUptimeMs: 6e4,
  stallThresholdMs: 1e4,
  stallMinMs: 6e4,
  stallMaxMs: 6e5,
  maxConsecutiveRefusals: 10,
  handshakeDeadlineMs: 3e4
}, y = {
  ...g,
  presenceMs: 15e3
}, w = {
  ...g,
  keepaliveMs: 25e3
};

function BF(e, r) {
  return `${e ?? "main"}\n${r}`;
}

function m(e) {
  let r = [ ...e.codeliveredFollowups.values() ];
  e.codeliveredFollowups.clear();
  for (let {revoke: n} of r) n("reset");
  e.coordinatorEditors.clear(), e.editorSettleWatch?.(), e.editorSettleWatch = null;
}

function zen(e, r, n) {
  let s = a().current;
  if (s === void 0) return;
  for (let [d, i] of s.codeliveredFollowups) if (i.slug === e && i.agentId !== n?.exceptAgentId) s.codeliveredFollowups.delete(d), 
  i.revoke(r);
}

var R = 64, dT = 25, QSe = 3 * dT;

function A() {
  return {
    live: {
      handoffGeneration: 0,
      inFlightSubscribes: new Set,
      inFlightWiredIntent: new Set,
      retiredInFlightArms: new Set,
      armSettleWaiters: new Map,
      bootingWiredArms: new Map,
      pendingInFlightWiring: new Map,
      supervisors: new Map,
      heardVersions: new Map,
      heardAheadOfClockReported: !1,
      commentCensus: new Map,
      pendingRegistrations: 0,
      rewatchTiming: {
        ...b
      },
      mostRecentPublishSlug: void 0,
      pendingSubagentArms: new Map,
      finishedSubagentAdopters: new Set,
      activitySenders: new Map,
      agentActivitySinks: new Map,
      activityRefreshTimer: void 0,
      activityOnsetTimer: void 0,
      activityClearTimer: void 0,
      activityRefreshMs: v,
      activityEdgeDebounceMs: M,
      activityUnsubscribe: void 0,
      disposed: !1,
      activityOkReported: !1,
      summonDeclared: new Map,
      summonArmOkReported: !1,
      armOutcomes: new Map,
      mcpWriteSlugs: new Map,
      announcedArmFailures: new Set,
      nonEditorSlugs: new Set,
      repliesConsent: {
        outstanding: new Map,
        declined: new Map,
        approved: new Set
      },
      inFlightGenerations: new Map,
      lastArtifactToolCallAt: 0,
      endAll: void 0
    },
    liveDocWatch: {
      ownSeqs: new Map,
      rebases: new Map,
      pendingOwnEdits: new Map,
      watches: new Map,
      stopCounts: new Map,
      retiredWatches: new Map,
      arming: new Map,
      notLiveDoc: new Set,
      noticeBudgets: new Map,
      journalUnavailable: new Set,
      journalNegotiations: new Set,
      headSinks: new Map,
      stopAll: void 0,
      stop: void 0
    },
    liveEditOps: {
      lastOwnAck: new Map,
      unansweredKeys: new Map
    },
    liveReplicas: {
      replicas: new Map,
      unanswered: new Map,
      unavailable: new Map,
      tooOld: new Set,
      cloudUnserved: new Map,
      opening: new Map,
      binding: new Map,
      transport: void 0,
      engine: void 0,
      renderLevel: void 0,
      headMoved: void 0,
      workingCopyPath: void 0,
      settleFileChange: void 0,
      liveFileEnded: void 0,
      pushHeldSaves: void 0,
      heldSavesExitCleanup: void 0
    },
    autoReact: {
      artifacts: new Map,
      optIn: null,
      responderDispatchOptIn: null,
      userDisarmed: !1,
      enabledMemo: null,
      unattendedReplies: new Map,
      postSeq: 0,
      probeSeq: 0,
      coalesceMsOverride: null,
      maxAutoTurnsOverride: null,
      confirmDwellMsOverride: null,
      readRetryDelaysMsOverride: null,
      fastAckFlagRefresh: null,
      fastAckFlagRefreshDeadlineMsOverride: null,
      fastAckSelectDeadlineMsOverride: null,
      pendingLedger: null,
      ledgerLastWritten: null,
      ledgerLastWriteAt: null,
      ledgerLastWriteSid: null,
      ledgerLastWriteAccount: void 0,
      ledgerFailureSeqAtWrite: null,
      ledgerDeferredSince: null,
      ledgerLastAppend: null,
      ledgerOwnerSid: null,
      ledgerRetiredSids: new Set,
      ledgerExitCleanup: void 0,
      ledgerExitReStamp: void 0,
      ledgerTimer: void 0,
      ledgerStorageV5: void 0,
      ledgerMaxAgeMsOverride: null,
      ledgerDebounceMsOverride: null,
      composeDeadlineMsOverride: null
    },
    summonSeeds: {
      claims: new Set,
      readClaims: new Set,
      graceMsOverride: null,
      open: new Map,
      settled: new Set
    },
    wakes: {
      wakes: new Map,
      stoppedSlugs: new Set,
      sweptSlugs: new Set,
      orphanedSweptSlugs: new Set,
      yieldedSlugs: new Map,
      takenFrom: new Map,
      latchChangedAt: new Map,
      liftedAtScanGeneration: new Map,
      humanTurnAtScanGeneration: null,
      pendingResumeDisclosure: new Set,
      scanGeneration: 0,
      slugEpochs: new Map,
      stopGenerations: new Map,
      resumeSights: new u
    },
    autoEditAttribution: {
      staged: new Map,
      chainPublishIds: new Set,
      chainPublishSlots: new Map
    },
    summonAnswers: new Map,
    pipelineReplyOrigins: new Map,
    summonStatus: {
      sidBySlug: new Map,
      seqBySid: new Map,
      routeAbsentSince: null,
      handOffs: new Map
    },
    noticeCoalesce: new Map,
    shareStatus: {
      bySlug: new Map,
      probeBoots: new Map,
      filePathToSlug: new Map,
      pendingNoticeSlugs: new Map,
      otherComments: new Map,
      otherCommentSeq: 0,
      noticeReadSights: {
        comments: new u,
        read_db: new u,
        read: new u,
        read_page_data: new u,
        verify: new u,
        webfetch: new u
      },
      shareProbesInFlight: new Map,
      capsReadsInFlight: new Map
    },
    noticeTap: void 0,
    templateLanes: {
      prototypeArmed: !1,
      boundSlugs: new Map,
      heli: {
        armed: null,
        boards: new Map
      }
    },
    postedReplyIds: new Set,
    cleanReplyIds: new Set,
    frameRelay: {
      declinedUntil: new Map,
      tunnelDeclinedUntil: new Map,
      hopFailedUntil: new Map,
      servedUntil: new Map,
      vouched: new Set,
      directRefusedUntil: new Map,
      mcpAdvert: void 0,
      mcpAdvertAsked: void 0,
      mcpNarrower: new Set,
      botContextNoted: !1
    },
    contentHostEgressDenied: new Set,
    contentHostEgressProbed: new Map,
    contentHostEgressUnanswered: new Set,
    contentHostEgressInFlight: new Map,
    sessionHintsRefusedAt: void 0,
    sandboxEgress: new Map,
    roster: void 0,
    rosterHeard: void 0,
    rosterWait: void 0,
    rosterWaitOver: !1,
    assetsOnRoster: !1,
    accountEpoch: 0,
    conversationEpoch: 0,
    ownPrincipalTokens: new Map,
    ownPrincipalTokenAccount: null,
    ownPrincipalTokenEpoch: 0,
    profileNames: new Map,
    profileIdsServed: new Map,
    profileIdsForgets: new Map,
    authoringProgress: {
      slotsByBlockIndex: new Map,
      failureReported: !1
    },
    mintedStoredPageProbes: new WeakSet,
    strandedMints: new Map,
    reservedMints: new Set,
    mintedRoundTripPublishSignals: new WeakSet,
    durable: {
      rows: new Map,
      registrySink: null,
      registryPublished: "null",
      unwatchedSlugs: new Set,
      orphanTriggers: new Set,
      pendingRestoredRows: new Map,
      slugOps: new Map,
      stopLatches: new c,
      liveDocArmDeclined: new Set,
      liveDocRegrantSights: new u,
      firstWatchAskSights: new u,
      pendingOps: new Set,
      originatorRefused: !1,
      subscribeForbidden: null,
      subscribeUnrelayed: null,
      watchUrlWithheld: null,
      watchUrlGranted: !1,
      armsInFlight: new Map,
      armOutcomes: new Map,
      announcedArmFailures: new Set
    },
    room: {
      conns: new Map,
      nonces: new Map,
      endedOwners: new Map,
      timing: {
        ...y
      }
    },
    presence: {
      conns: new Map,
      declined: new Set,
      timing: {
        ...w
      }
    },
    commentMonitorIntent: {
      sid: null,
      bySlug: new Map,
      pendingRestore: null,
      lastWritten: null,
      wroteCurrentLine: !1,
      failureSeqAtWrite: 0,
      storageV5: void 0,
      unsubscribeSwitch: void 0,
      unregisterExitDrain: void 0,
      transcriptPath: null,
      parked: new Map,
      writeChain: Promise.resolve(),
      owedLines: new Map,
      pendingLines: new Map,
      exitStamped: !1,
      tornStops: new Set,
      forgottenAt: new Map,
      leftWith: null,
      unsubscribeMaterialized: void 0,
      earlySeed: void 0,
      onFile: !1,
      adoptPendingFor: null
    },
    interactionSchemas: void 0,
    approvedRootBases: new Map,
    commentTargets: new Map,
    refusedPublishBodies: new Map,
    approvedSourcePins: new Map,
    verifiedAttachments: new Map,
    approvedCopySources: new Map,
    gatedThumbnailHrefs: new Map,
    approvalStashEvicted: !1,
    publishObservationNonce: S(),
    consumedPublishApprovals: new Set,
    crashedPublishChecks: new Set,
    readDeliveries: new Map,
    pendingHandoverReads: new Map,
    frozenReadPageDataSchemaNames: void 0,
    frozenWatchRail: void 0,
    frozenArtifactTypes: void 0,
    frozenAssets: void 0,
    frozenCopyFrom: void 0,
    frozenPublishEdits: void 0,
    frozenHotUpdate: void 0,
    frozenPathPin: void 0,
    frozenPathPinAck: void 0,
    pathPinSeq: 0,
    pathPins: new Map,
    frozenDbStrReplace: void 0,
    frozenArtifactPins: void 0,
    frozenMultiFile: void 0,
    createdFromType: new Map,
    deferredSurface: new Map,
    remoteControlSkippedSlugs: new Set,
    typeInstanceFiles: new Map,
    typeCatalogVouch: new Map,
    typeDescriptions: new Map,
    attestedTypeArtifacts: new Map,
    typeCapabilityReads: new Map,
    verify: {
      lastPublish: void 0,
      reads: new Map
    },
    ownPublishedSlugs: new Map,
    ownCreatedSlugs: new Map,
    roomJoinArming: new Set,
    roomStoppedByUser: new Set,
    roomArmAsked: new Map,
    roomArmRefusedByUser: new Set,
    coordinatorEditors: new Map,
    editorSettleWatch: null,
    codeliveredFollowups: new Map,
    prReviewComposeLatch: null,
    whiteboardVariantLatch: null,
    liveEditGateLatch: null,
    livePathsGateLatch: null,
    toolsetLatch: null,
    resultNotes: {
      kindSaid: !1,
      watchCodesSaid: new Set,
      previewedPaths: new Set,
      previewHintedPaths: new Set
    },
    inheritedTypeGrantLatch: null,
    routineRunTainted: !1,
    routineTypeInstances: new Map,
    routineRelayNotCarried: null,
    routineRepublishedPaths: new Set,
    laneNoticeSlugs: new Map,
    commentReads: new Map,
    commentReadAtBySlug: new Map,
    commentRepublishedPaths: new Set,
    askClassConsent: new Set,
    askClassPersonConsent: new Set,
    askClassOutsideOrgConsent: new Set,
    askNamedOtherOrg: new Map,
    askClassRequestShown: new Map,
    askConnectorsShown: new Map,
    askClassPending: new Map,
    notedUnreadRefusals: new Map,
    askCards: new Map,
    askClassCards: new Map,
    askCardFacts: new Map,
    dbWriteOpSights: new u,
    askClassTaken: new Map,
    askClassPersonAsked: new Map,
    askClassNoClassifier: new Map,
    askClassTakenByPerson: new Map,
    askTelemetry: new Map,
    consentCheckScopes: new Map,
    consentCheckScopesEvicted: !1,
    designGuardFired: !1,
    quickstartGuidanceToolUseId: void 0,
    quickstartRan: new Map,
    designSystemTypeSlug: void 0,
    artifactDisabledSessionEvaluated: !1,
    artifactWithheldReasonsLogged: [],
    artifactWithheldRecoveryLogged: !1,
    artifactRegisteredSeen: !1,
    artifactWithheldListedLogged: !1,
    artifactPolicyFetchAnswer: null,
    heldStartupTelemetry: null,
    anchorSnippets: new Map,
    marked: {
      plain: void 0,
      inertHtml: void 0,
      prReviewSubset: void 0
    },
    bundleEmbedVerdicts: {
      hljs: void 0
    },
    blockStripVerdicts: {
      hljs: void 0,
      mermaid: void 0
    },
    prReviewTemplate: {
      chrome: null,
      parts: null
    },
    workshopBlessedHashes: void 0,
    rejectBreaker: new oc({
      max: R
    })
  };
}

function Gen(e) {
  if (e.stopped = !0, e.abort.abort(), e.timer !== void 0) clearTimeout(e.timer), 
  e.timer = void 0;
  delete e.lease, delete e.renewable, delete e.wake;
}

class f {
  current=void 0;
}

var C = new lt(() => new f);

function a() {
  return C.of(B());
}

function ee() {
  let e = a();
  return e.current ??= A(), e.current;
}

function MTs(e, r) {
  let n = a().current?.autoReact.artifacts.get(e)?.threads.get(r);
  if (n !== void 0) n.lastAutoReplyAt = Date.now();
}

function jxe() {
  let e = a().current;
  if (e === void 0) return;
  for (let r of e.liveDocWatch.noticeBudgets.values()) r.disclosed = !1;
}

function Tct() {
  let e = a().current;
  if (e === void 0) return;
  e.refusedPublishBodies.clear(), B_o();
}

function B_o() {
  let e = a().current;
  if (e === void 0) return;
  for (let r of e.pendingHandoverReads.values()) r.linesReturned.clear(), r.linesPrepared.clear(), 
  r.completedBy.clear(), r.confirmsResendFor.clear();
  e.readDeliveries.clear();
}

function HTs(e) {
  let r = a().current;
  if (r === void 0) return;
  let n = r.refusedPublishBodies, s = BF(void 0, "");
  for (let [d, i] of n) {
    if (!d.startsWith(s)) continue;
    if (!e.has(i.batch)) n.delete(d); else if (i.observedFrom !== void 0 && i.observedFrom !== "" && !e.has(i.observedFrom)) delete i.observedFrom;
  }
}

function Ven() {
  return a().current?.room;
}

function DTs() {
  return a().current?.presence;
}

function v1n(e) {
  let r = a().current?.presence;
  r?.disposeSlug?.(r, e);
}

function LTs(e) {
  let r = a().current?.presence;
  r?.retireSlug?.(r, e);
}

function NTs(e) {
  return a().current?.presence.declined.has(e) === !0;
}

function eUe() {
  return a().current !== void 0;
}

function $Ts() {
  let e = Ven();
  e?.consentChanged?.(e);
}

function FTs(e) {
  let r = Ven();
  r?.accountChanged?.(r, e);
}

function tUe() {
  let e = Ven();
  e?.dispose?.(e);
}

function P(e) {
  k(e);
  for (let r of e.docs.values()) T(r);
}

function k(e) {
  e.journalPos = void 0, e.journalPosOrd = void 0;
}

function T(e) {
  e.journalFence = void 0, e.journalGen += 1;
}

function D(e) {
  let r = e.journal;
  e.journal = void 0, e.journalCap = void 0, P(e);
  for (let n of e.docs.values()) {
    if (n.batchTimer !== void 0) clearTimeout(n.batchTimer), n.batchTimer = void 0;
    n.batch = void 0, n.batchPos = void 0, n.batchHeardAt = void 0, n.settling = void 0;
  }
  r?.stop({
    killTask: !1
  });
}

function j_o(e) {
  e.ownPrincipalTokens.clear(), e.ownPrincipalTokenAccount = null, e.ownPrincipalTokenEpoch++;
}

function UTs(e = "signed_out", r) {
  let n = a().current;
  if (n === void 0) return;
  if (j_o(n), n.profileNames.clear(), n.profileIdsServed.clear(), e !== "same_account") {
    n.frameRelay.mcpAdvert = {
      tools: new Set,
      until: 0
    }, n.frameRelay.mcpNarrower.clear(), n.roster = void 0, n.rosterHeard = void 0, 
    n.rosterWait = void 0, n.rosterWaitOver = !1, n.assetsOnRoster = !1, n.accountEpoch++, 
    n.askClassOutsideOrgConsent.clear(), n.askNamedOtherOrg.clear(), n.postedReplyIds.clear(), 
    n.commentTargets.clear(), n.summonStatus.handOffs.clear(), n.verify.lastPublish = void 0, 
    n.verify.reads.clear(), n.ownPublishedSlugs.clear(), n.ownCreatedSlugs.clear(), 
    n.routineTypeInstances.clear(), n.strandedMints.clear(), n.reservedMints.clear(), 
    n.live.heardVersions.clear(), n.roomJoinArming.clear(), m(n);
    for (let i of n.live.supervisors.values()) delete i.lease, delete i.renewable;
    n.live.nonEditorSlugs.clear(), n.laneNoticeSlugs.clear(), n.commentReads.clear(), 
    n.lastOthersCommentReadAt = Date.now(), n.cleanReplyIds.clear();
    for (let i of n.shareStatus.otherComments.values()) i.judged.clear(), i.judgedSends.clear();
    n.live.pendingSubagentArms.clear(), n.live.finishedSubagentAdopters.clear(), n.live.repliesConsent.outstanding.clear(), 
    n.live.repliesConsent.declined.clear(), n.live.repliesConsent.approved.clear();
    for (let i of n.autoReact.artifacts.values()) {
      i.heldReplyDeclined = !1, i.heldReplyChain = null;
      for (let o of i.threads.values()) o.ownReplyIds.clear(), o.ownReplyIdsIncomplete = !1;
    }
    n.liveDocWatch.journalUnavailable.clear();
    for (let i of n.liveDocWatch.journalNegotiations) i.abort();
    n.liveDocWatch.journalNegotiations.clear();
    for (let i of n.liveDocWatch.arming.values()) for (let o of i.reviving) D(o);
    n.liveDocWatch.stopAll?.(e), n.live.endAll?.(e);
    for (let i of n.liveReplicas.replicas.values()) i.watcher?.close(), clearTimeout(i.pushHold?.due);
    n.liveReplicas.replicas.clear(), n.liveReplicas.unavailable.clear(), n.liveReplicas.tooOld.clear(), 
    n.liveReplicas.cloudUnserved.clear(), n.liveReplicas.opening.clear(), n.liveReplicas.unanswered.clear(), 
    n.createdFromType.clear(), n.deferredSurface.clear(), n.remoteControlSkippedSlugs.clear(), 
    n.typeInstanceFiles.clear(), n.pathPins.clear(), n.typeCatalogVouch.clear(), n.typeDescriptions.clear(), 
    n.attestedTypeArtifacts.clear(), n.typeCapabilityReads.clear(), n.quickstartRan.clear(), 
    n.anchorSnippets.clear(), n.shareStatus.accountBoundaryAt = Date.now(), n.shareStatus.probeBoots.clear();
    for (let [i, o] of n.shareStatus.bySlug) if (o.probeErrorCode !== void 0 || o.role !== void 0 || o.outsideOrgReader !== void 0 || o.external !== void 0 || o.endpointConnectors !== void 0 || o.connectorsIssuedAt !== void 0 || o.lastConnectorsReadToolUseId !== void 0) {
      let {probeErrorCode: x, probeGone: O, role: E, outsideOrgReader: W, external: L, endpointConnectors: F, connectorsIssuedAt: I, lastConnectorsReadToolUseId: _, ...h} = o;
      n.shareStatus.bySlug.set(i, h);
    }
  }
  let {room: s, presence: d} = n;
  s.accountChanged?.(s, r), d.accountChanged?.(d, r);
}

async function BTs(e) {
  if (e === "same_account") return;
  let r = a().current;
  if (r === void 0 || r.liveReplicas.replicas.size === 0) return;
  let n = [], s = r.liveReplicas.pushHeldSaves;
  if (s !== void 0) n.push(s().then(() => t("[liveReplica] held saves pushed before logout"), d => t(`[liveReplica] held saves not pushed before logout: ${l(d)}`)));
  for (let [d, i] of r.liveReplicas.replicas) n.push(i.replica.sendFinalReport().then(o => t(`[liveReplica] final divergence report before logout ${d}: ${o ? "tried" : "nothing due"}`), o => t(`[liveReplica] final divergence report before logout ${d} failed: ${l(o)}`)));
  await Promise.race([ Promise.all(n), J(2e3) ]);
}

function Act() {
  let e = a().current;
  if (e?.liveDocWatch.stopAll?.("clear"), e !== void 0) for (let [r, n] of e.liveReplicas.replicas) n.replica.sendFinalReport().then(s => t(`[liveReplica] final divergence report at conversation retire ${r}: ${s ? "tried" : "nothing due"}`), s => t(`[liveReplica] final divergence report at conversation retire ${r} failed: ${l(s)}`));
}

function Cct(e) {
  let r = a().current;
  if (r === void 0) return;
  if (e?.continuesConversation !== !0) r.conversationEpoch++, r.ownPublishedSlugs.clear(), 
  r.ownCreatedSlugs.clear(), r.routineTypeInstances.clear(), r.strandedMints.clear(), 
  r.reservedMints.clear(), r.live.heardVersions.clear(), r.roomJoinArming.clear(), 
  r.roomStoppedByUser.clear(), r.roomArmAsked.clear(), r.roomArmRefusedByUser.clear(), 
  m(r), r.live.nonEditorSlugs.clear(), r.live.pendingSubagentArms.clear(), r.live.finishedSubagentAdopters.clear(), 
  r.live.repliesConsent.outstanding.clear(), r.live.repliesConsent.declined.clear(), 
  r.live.repliesConsent.approved.clear(), r.deferredSurface.clear(), r.remoteControlSkippedSlugs.clear();
  if (r.createdFromType.clear(), r.verify.lastPublish = void 0, r.verify.reads.clear(), 
  e?.continuesConversation !== !0) r.pathPins.clear(), r.resultNotes.kindSaid = !1, 
  r.resultNotes.watchCodesSaid.clear(), r.resultNotes.previewedPaths.clear(), r.resultNotes.previewHintedPaths.clear();
}

export { BF, zen, dT, QSe, Gen, ee, MTs, jxe, Tct, B_o, HTs, Ven, DTs, v1n, LTs, NTs, eUe, $Ts, FTs, tUe, j_o, UTs, BTs, Act, Cct };
