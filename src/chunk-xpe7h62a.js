// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { OOr, p } from "./chunk-jkzenvsk.js";

import { BZo, SJr, YVe, XVe } from "./chunk-y94p5sh8.js";

import { Vt } from "./chunk-vxr6sv7z.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { q, MDr } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { Ye, pd, Ve, l } from "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { _, Y, Ks, t } from "./chunk-kawq2919.js";

import { Tr, M$t } from "./chunk-a16yb89m.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { wn, uu, QGn, sHs, iHs, aAo, kon, lAo, dAo, cAo, Aon, hAo } from "./chunk-s2t7g8m9.js";

import { Eee } from "./chunk-jnzpsr0d.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { wPe, jP } from "./chunk-xywp7esx.js";

import { hHt, Ojn, $Rs, FRs, URs, Mjn } from "./chunk-yk8mtyzg.js";

import { X, vOe } from "./chunk-1zg3hbfq.js";

import { Mo } from "./chunk-j90se18b.js";

import { lS } from "./chunk-q6wab2jw.js";

import { q0 } from "./chunk-dd98x6x7.js";

import { dpe } from "./chunk-gmq0qwep.js";

import { Zon } from "./chunk-y3nc3daq.js";

import { yEs } from "./chunk-9tdwgnpn.js";

import { Yo } from "./chunk-sn25q2cq.js";

import { tso, Emr, QE } from "./chunk-ghdkaeg7.js";

import { coe } from "./chunk-sqb9meyh.js";

import { $bn } from "./chunk-1e6qkkz4.js";

import { SO, h1 } from "./chunk-4v78v8fd.js";

import { IY } from "./chunk-htg8b98h.js";

import { $Qr, uar, UQr, SAe, mre } from "./chunk-84yp45y8.js";

import { Llt, N$n } from "./chunk-5ad06083.js";

import { JPt, kY, H$e, qe } from "./chunk-r8a304y3.js";

import { Vcs, Rmr } from "./chunk-z09tf6qf.js";

import { ZJn, mGe, tQn, TKo, AKo } from "./chunk-7amj0qp0.js";

import { T2e, o4 } from "./chunk-0b5sepvg.js";

import { Zte, Ryn } from "./chunk-7bj17kjh.js";

import { zge } from "./chunk-jwgq615a.js";

import { s2t, i2t, DKr, a2t } from "./chunk-2f9yeyeg.js";

import { t7t } from "./chunk-f66gd31c.js";

import { Ys } from "./chunk-7fcp0cw9.js";

import { cr } from "./chunk-2kgjyw8x.js";

import { L } from "./chunk-vh1p9t2h.js";

import { sn } from "./chunk-642shbw5.js";

import { ex, iX, oe, u } from "./chunk-cvcg6n1z.js";

import { randomUUID as P } from "crypto";

var E = e => Aon().options.some(s => s === e.subtype);

var J = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

function gHe(e) {
  return typeof e === "string" && J.test(e) ? e : void 0;
}

var Q = [ "interrupt", "can_use_tool", "initialize", "set_permission_mode", "set_model", "set_max_thinking_tokens", "rename_session", "set_color", "mcp_status", "get_context_usage", "get_session_cost", "list_models", "get_usage", "get_memory_dialog", "get_skills_dialog", "get_chrome_dialog", "get_chrome_browsers", "select_chrome_browser", "get_sandbox_dialog", "get_status", "export_conversation", "get_binary_version", "mcp_call", "file_suggestions", "hook_callback", "mcp_message", "rewind_files", "cancel_async_message", "read_file", "list_directory", "get_workspace_diff", "get_plan", "seed_read_state", "mcp_set_servers", "register_repo_root", "reload_plugins", "reload_skills", "reload_output_styles", "mcp_reconnect", "mcp_toggle", "set_mcp_permission_mode_override", "set_chrome_browser_hints", "set_prompt_suggestions_paused", "set_cwd", "claim_session", "register_device_hooks", "upload_device_hook_template", "message_rated", "oauth_token_refresh", "host_auth_token_refresh", "stop_task", "background_tasks", "get_task_output", "apply_flag_settings", "get_settings", "get_hooks_listing", "update_settings", "elicitation", "request_user_dialog", "submit_feedback", "remote_tools_announce", "remote_tool_call", "remote_plumbing_call", "remote_tools_probe", "remote_tools_reannounce", "ui_attach", "ui_detach", "ui_render", "ui_press", "ui_client_module", "ui_client_press", "ui_message", "ui_client_fault", "remote_control_work_secret", "turn_handoff", "list_permission_rules", "mcp_read_resource", "ui_input", "ui_select", "ui_panes", "ui_pane_show", "ui_pane_focus", "ui_close", "ui_scroll", "ui_focus", "ui_prompt_edit", "ui_prompt_autocomplete", "ui_copy", "ui_prompt_read", "ui_prompt_fill", "ui_prompt_suggest", "ui_read_selection" ], G = new Set(Q);

function Ibt(e) {
  return typeof e === "string" && G.has(e) ? e : void 0;
}

function ile(e, s) {
  return {
    [`${e}_${s}`]: !0
  };
}

function VJn(e) {
  let s = Array.isArray(e?.updatedPermissions) ? e.updatedPermissions : [], n = e?.behavior === "deny" ? "deny" : e?.behavior !== "allow" ? "other" : s.length === 0 ? "allow_once" : "allow_with_updates", r = o => n === "allow_with_updates" && s.some(h => typeof h === "object" && h !== null && o(h));
  return {
    answer_kind: n,
    ...ile("answer_kind", n),
    ...r(o => (o.type === "addRules" || o.type === "replaceRules") && o.behavior === "allow") && {
      answer_updates_add_allow_rule: !0
    },
    ...r(o => o.type === "setMode") && {
      answer_updates_set_mode: !0
    },
    ...r(o => o.type === "addDirectories") && {
      answer_updates_add_directories: !0
    }
  };
}

function Obt(e) {
  return Math.round(performance.now() - e);
}

var V = 3e4, Z = 3e4, ee = 45e3, H = new Set([ "CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_CODE_OAUTH_TOKEN" ]), te = 3e5, se = 7e4, re = .01, ie = 262144, ae = 1e3, ue = p(() => Vcs(hAo())), de = 268435456;

function j(e) {
  return `Error: stream-json input carried over ${Math.round(e / 1024 / 1024)}M characters with no newline. Each stream-json message must be a single newline-terminated JSON line: either the producer is not newline-terminating its messages, or one message exceeded this budget.`;
}

var le = 64, ce = 1048576, I = '"control_response"', N = 512;

function K(e) {
  let s = coe().safeParse(e);
  if (!s.success) return null;
  return (typeof e === "object" && e !== null ? Object.keys(e).length : 0) > 0 && Object.keys(s.data).length === 0 ? null : s.data;
}

function x(e) {
  let s = Ks(ne(e, 4096), {
    maxCodeUnits: 512
  });
  return e.length > 512 ? `${s}\u2026 [${e.length} chars total]` : s;
}

function T(e) {
  return typeof e === "string" ? Ks(ne(e, 4096), {
    maxCodeUnits: 200
  }) : "a non-string error field";
}

function pe(e, s) {
  if (e === "delivered" || s === "accepted") return "delivered";
  if (e === "indeterminate" || s === "indeterminate") return "indeterminate";
  return s === "sending" ? "sending" : "queued";
}

function he(e) {
  return typeof e === "object" && e !== null && "subtype" in e ? e.subtype : void 0;
}

function fe(e) {
  switch (e) {
   case "delivered":
    return "delivered";

   case "queued":
    return "queued";

   case "sending":
    return "in_flight";

   case "indeterminate":
    return "indeterminate";
  }
}

function W(e, s) {
  if (e instanceof pd) return "stream_closed";
  if (e instanceof ex) return "parse_failed";
  return s.aborted ? "timeout" : "aborted";
}

class Wge {
  input;
  replayUserMessages;
  maxLineChars;
  isRemoteTransport() {
    return !1;
  }
  uiSurfaceFrameOf(e, s) {
    let n = this.redactsWhatItPersists();
    return this.isRemoteTransport() ? {
      isRemoteTransport: !0,
      redactsWhatItPersists: n,
      isAnySurfaceAttached: s,
      createdAt: void 0,
      sessionWriters: void 0,
      isAtFloor: !1,
      leavesBelowFloor: !1
    } : {
      isRemoteTransport: !1,
      redactsWhatItPersists: n,
      isAnySurfaceAttached: s
    };
  }
  surfaceRequestJudgedAt(e) {
    let s = this.surfaceRequestsJudgedAt.get(e) ?? Date.now();
    return this.surfaceRequestsJudgedAt.set(e, s), s;
  }
  surfaceRequestsJudgedAt=new WeakMap;
  redactsWhatItPersists() {
    return QGn({
      hostedWorker: this.isHostedWorker,
      transportPersists: this.persistsOutboundFrames
    });
  }
  uiSurfaceChannel() {
    return {
      redactsWhatItPersists: this.redactsWhatItPersists(),
      isRemoteTransport: this.isRemoteTransport(),
      sessionWriters: this.sessionWriters()
    };
  }
  sessionWriters() {
    return;
  }
  surfaceClientAttached(e, s) {
    return !0;
  }
  controlRequestEnded(e) {}
  answersSurfaceRefusal(e) {
    return !0;
  }
  surfaceSenderStands(e) {
    return !0;
  }
  setSurfaceRoster(e) {}
  setSubscribersReportedListener(e) {}
  taskHoldSince() {
    return;
  }
  structuredInput;
  pendingRequests=new Map;
  requestPending=Me();
  sdkHostHookGeneration=0;
  retiredHostHookAnswer;
  deviceRequests=new Map;
  publishedPendingActionDetails=new Map;
  backgroundPromptIds=new Set;
  flipBackLeftToUnpublishedAsk=!1;
  streamCloseInterruptRequestIds=new Set;
  hostDialogAttestations=new Map;
  timedOutUserDialogs=new Map;
  unansweredSettleHandlers=new Map;
  restoredWorkerState=Promise.resolve(null);
  rereadWorkerState() {
    return Promise.resolve(null);
  }
  readProjectsBinding() {
    return Promise.resolve({
      read: !0,
      assertion: void 0
    });
  }
  workerEpoch() {
    return 0;
  }
  hydratePrefetch=Promise.resolve(null);
  inputClosed=!1;
  hasUnconsumedInput=!1;
  answerLinesWritten=0;
  answerLinesRead=0;
  receivedAnswersRead;
  tracksRequestDelivery=!1;
  unexpectedResponseCallback;
  unclaimedResponseObserver;
  resolvedToolUseIds=new Set;
  prependedLines=[];
  locallyPrependedMessages=new WeakSet;
  personsOwnPrepends=new WeakSet;
  prependWaker=null;
  stallTimer;
  stallFired=!1;
  sdkSchemaStretchSampled;
  sdkSchemaKept=new Map;
  sdkSchemaResultWritten=!1;
  sdkSchemaCheckTimer;
  createdAt=Date.now();
  onControlRequestSent;
  onControlRequestResolved;
  onStreamClosedWithParkedQuestion;
  onUserDialogParked;
  hostAnswersElicitations=!0;
  onCommandLifecycle;
  resultDelivery;
  commandLifecycleForwarderInstalled=!1;
  hostOwnsStdinOrigin=!0;
  persistsOutboundFrames=!1;
  get isHostedWorker() {
    return !1;
  }
  readOwnClientEvent(e) {
    return Promise.resolve({
      kind: "unavailable",
      why: "no_session_channel"
    });
  }
  sessionState;
  outbound=new QE;
  heldUntilInit=[];
  constructor(e, s, n, r = de) {
    this.input = e;
    this.replayUserMessages = s;
    this.maxLineChars = r;
    this.input = e, this.sessionState = n ?? new t7t, this.sessionState.getPendingActionDetails = o => {
      let h = [];
      for (let [m, y] of this.publishedPendingActionDetails) if (this.pendingRequests.has(m) || m === o) h.push(y);
      return h;
    }, this.sessionState.stateChanged.subscribe(o => {
      if (o !== "requires_action") this.flipBackLeftToUnpublishedAsk = !1;
      if (o === "idle") this.endSdkSchemaStretch();
    }), this.structuredInput = this.read();
  }
  trackResolvedToolUseId(e) {
    if (e.request.subtype === "can_use_tool") this.resolvedToolUseIds.add(e.request.tool_use_id);
    if (YVe(e)) Mjn(e.request_id);
  }
  flushInternalEvents() {
    return Promise.resolve();
  }
  watchInternalEventPosts() {
    return;
  }
  refusedInternalEvents(e) {
    return [];
  }
  sessionServiceNow() {
    return;
  }
  readStreamFrameAt() {
    return;
  }
  newestSessionStreamCreatedAt() {
    return;
  }
  withdrawQueuedRequest(e) {
    return !1;
  }
  flushDeliveryAcks() {
    return Promise.resolve();
  }
  flushDeliveryAcksConfirmed() {
    return Promise.resolve(!0);
  }
  flushClientEvents() {
    return Promise.resolve(!0);
  }
  flushInternalEventsConfirmed() {
    return Promise.resolve(!0);
  }
  flushSessionState() {
    return Promise.resolve(!0);
  }
  get internalEventsPending() {
    return 0;
  }
  repliesLeftForNextProcess=0;
  prependUserMessage(e, s = "process") {
    this.prependedLines.push({
      line: _({
        type: "user",
        session_id: "",
        message: {
          role: "user",
          content: e
        },
        parent_tool_use_id: null
      }),
      hostLocal: !0,
      personsOwn: s === "person"
    }), this.prependWaker?.();
  }
  readAgain(e) {
    this.prependedLines.push({
      line: _(e),
      hostLocal: !1,
      personsOwn: !1
    }), this.prependWaker?.();
  }
  noteInputWritten(e) {
    let s = e.indexOf(I);
    while (s !== -1) {
      let n = e.indexOf(`\n`, s);
      if (n === -1) return;
      this.answerLinesWritten++, s = e.indexOf(I, n);
    }
  }
  whenReceivedAnswersRead() {
    if (this.answerLinesWritten <= this.answerLinesRead) return;
    return this.receivedAnswersRead ??= Promise.withResolvers(), this.receivedAnswersRead.promise;
  }
  noteAnswerLinesRead(e) {
    if (this.answerLinesRead = e, this.answerLinesWritten <= e) this.receivedAnswersRead?.resolve(), 
    this.receivedAnswersRead = void 0;
  }
  isLocallyPrependedMessage(e) {
    return this.locallyPrependedMessages.has(e);
  }
  isPersonsOwnPrepend(e) {
    return this.personsOwnPrepends.has(e);
  }
  takeUserFrameReceivedWallMs(e) {
    return;
  }
  userFrameStartedAtMs(e) {
    return;
  }
  userFrameReceivedAtMs(e) {
    return;
  }
  async* read() {
    let e = "", s = [], n = 0, r = !1, o = 0, h = 0, m = !1;
    function y(w) {
      if (o++, h += w.length, m) return;
      m = !0, lS().then(() => {
        o = 0, h = 0, m = !1;
      });
    }
    let S = async function*() {
      for (;;) {
        if (o >= le || h >= ce) await lS(), o = 0, h = 0;
        let w = !1;
        while (this.prependedLines.length > 0) {
          let {line: M, hostLocal: B, personsOwn: z} = this.prependedLines.shift();
          w = !0, y(M);
          let U = await this.processLine(M);
          if (U) {
            if (B) this.locallyPrependedMessages.add(U);
            if (z) this.personsOwnPrepends.add(U);
            X("info", "cli_stdin_message_parsed", F(U)), yield U;
          }
        }
        if (w) continue;
        let D = e.indexOf(`\n`);
        if (D === -1) break;
        let C = e.slice(0, D);
        e = e.slice(D + 1), y(C);
        let O = await this.processLine(C);
        if (O) X("info", "cli_stdin_message_parsed", F(O)), this.hasUnconsumedInput = e.trim().length > 0, 
        yield O;
        if (this.answerLinesRead < this.answerLinesWritten && C.includes(I)) this.noteAnswerLinesRead(this.answerLinesRead + 1);
      }
      this.hasUnconsumedInput = e.trim().length > 0;
    }.bind(this), R = this.input[Symbol.asyncIterator](), v = null, k = !1;
    try {
      for (;;) {
        if (r || this.prependedLines.length > 0) {
          if (s.length > 0) e += s.join(""), s = [];
          if (yield* S(), n = e.length, n > this.maxLineChars) X("warn", "cli_stream_json_line_budget", {
            at: "tail"
          }), await this.exitOnFatalInput(j(this.maxLineChars));
          r = !1;
        }
        v ??= R.next();
        let w = await Promise.race([ v.then(() => !1), new Promise(O => {
          this.prependWaker = () => O(!0);
        }) ]);
        if (this.prependWaker = null, w) continue;
        let D = await v;
        if (v = null, D.done) {
          k = !0;
          break;
        }
        n += D.value.length;
        let C = D.value.includes(`\n`);
        if (!C && n > this.maxLineChars) X("warn", "cli_stream_json_line_budget", {
          at: "block"
        }), await this.exitOnFatalInput(j(this.maxLineChars));
        if (s.push(D.value), C) r = !0; else if (!this.hasUnconsumedInput && /\S/.test(D.value)) this.hasUnconsumedInput = !0;
      }
    } finally {
      if (this.prependWaker = null, this.noteAnswerLinesRead(Number.POSITIVE_INFINITY), 
      !k) await (R.return?.());
    }
    if (s.length > 0) e += s.join(""), s = [];
    if (e) {
      let w = await this.processLine(e);
      if (w) yield w;
    }
    this.inputClosed = !0;
    let A = wn();
    if (!A && ZJn()) {
      for (let [w, D] of this.pendingRequests.entries()) if (!D.forwarded && D.request.request.subtype === "can_use_tool" && D.request.request.tool_name === Yo) this.streamCloseInterruptRequestIds.add(w);
      if (this.streamCloseInterruptRequestIds.size > 0) this.onStreamClosedWithParkedQuestion?.();
    }
    for (let w of this.pendingRequests.values()) {
      if (A && this.asksOurHuman(w)) continue;
      w.reject(new pd(tso));
    }
  }
  hasPendingRequests() {
    return this.pendingRequests.size > 0;
  }
  onRequestPending(e) {
    return this.requestPending.subscribe(e);
  }
  getPendingPermissionRequests() {
    return Array.from(this.pendingRequests.values()).map(e => e.request).filter(e => e.request.subtype === "can_use_tool");
  }
  getPendingUserDialogRequests() {
    return Array.from(this.pendingRequests.values()).map(e => e.request).filter(e => e.request.subtype === "request_user_dialog");
  }
  hasPendingPrompt() {
    for (let {request: e} of this.pendingRequests.values()) if (YVe(e)) return !0;
    return !1;
  }
  hasStandingPrompt() {
    if (this.sessionState.getState() !== "requires_action") return !1;
    if (this.flipBackLeftToUnpublishedAsk) return this.hasPendingPrompt();
    for (let e of this.publishedPendingActionDetails.keys()) if (this.pendingRequests.has(e)) return !0;
    return !1;
  }
  hasTurnPrompt() {
    for (let e of this.publishedPendingActionDetails.keys()) if (!this.backgroundPromptIds.has(e)) return !0;
    return !1;
  }
  listTurnPrompts() {
    return [ ...this.publishedPendingActionDetails.keys() ].filter(e => !this.backgroundPromptIds.has(e));
  }
  retireSdkHostHookCallbacks(e) {
    this.sdkHostHookGeneration++, this.retiredHostHookAnswer = e;
    let s = 0;
    for (let [n, r] of Array.from(this.pendingRequests)) {
      let o = r.request.request;
      if (o.subtype !== "hook_callback") continue;
      let h = e(o.input), m = r.schema ? r.schema.parse(h) : h;
      this.pendingRequests.delete(n), this.enqueueCancelRequest(n), r.resolve(m), s++;
    }
    return s;
  }
  republishSurvivingPendingAction() {
    let e;
    for (let [s, n] of this.publishedPendingActionDetails) if (this.pendingRequests.has(s)) e = n;
    if (!e) {
      this.flipBackLeftToUnpublishedAsk = this.sessionState.getState() === "requires_action";
      return;
    }
    this.sessionState.republishPendingAction(e), i("tengu_pending_action_republished", {
      survivor_kind: c(e.tool_name === Llt ? "elicitation" : e.tool_name.startsWith("dialog:") ? "dialog" : "permission"),
      pending_permission_requests: this.getPendingPermissionRequests().length,
      pending_dialog_requests: this.getPendingUserDialogRequests().length
    });
  }
  cancelPendingUserDialogs(e, s) {
    let n = 0;
    for (let {request: r} of Array.from(this.pendingRequests.values())) {
      if (r.request.subtype !== "request_user_dialog" || r.request.dialog_kind !== e) continue;
      if (!this.cancelDialogByMachine(r.request_id, "moved_on")) continue;
      i("tengu_request_user_dialog_implicit_cancel", {
        dialog_kind: sn(e),
        reason: c(s)
      }), n += 1;
    }
    return n;
  }
  cancelDialogByMachine(e, s) {
    if (!this.pendingRequests.has(e) || wn()) return !1;
    let n = this.injectControlResponse({
      type: "control_response",
      response: {
        subtype: "success",
        request_id: e,
        response: {
          behavior: "cancelled"
        }
      }
    });
    if (n) this.unansweredSettleHandlers.get(e)?.(s);
    return n;
  }
  setUnexpectedResponseCallback(e) {
    this.unexpectedResponseCallback = e;
  }
  setUnclaimedResponseObserver(e) {
    this.unclaimedResponseObserver = e;
  }
  setMainLoopLiveness(e) {
    this.mainLoopLiveness = e;
  }
  mainLoopLiveness;
  ignoresErrorShapedDialogResponse(e, s) {
    if (s.subtype !== "error" || e.request.request.subtype !== "request_user_dialog" || e.forwarded) return !1;
    return i("tengu_request_user_dialog_response_ignored", {
      shape: c("error"),
      dialog_kind: sn(e.request.request.dialog_kind)
    }), t(`Ignoring error-shaped control_response for parked request_user_dialog request_id=${s.request_id} \u2014 not a human choice; dialog stays parked (error: ${T(s.error)})`), 
    !0;
  }
  ignoresErrorShapedUiHostResponse(e, s) {
    let {subtype: n} = e.request.request;
    if (s.subtype !== "error" || !E(e.request.request)) return !1;
    return t(`Ignoring error-shaped control_response for ${n} request_id=${s.request_id} - not the named client's answer; still waiting (error: ${T(s.error)})`), 
    !0;
  }
  asksOurHuman(e) {
    return !e.forwarded && YVe(e.request);
  }
  get pendingHumanRequestCount() {
    let e = 0;
    for (let s of this.pendingRequests.values()) if (this.asksOurHuman(s)) e++;
    return e;
  }
  ignoresResponseAtShutdown(e, s) {
    if (!this.asksOurHuman(e) || !wn()) return !1;
    return t(`Leaving control_response for request_id=${s.request_id} to the next process \u2014 this one is shutting down and settles no question`), 
    this.repliesLeftForNextProcess++, !0;
  }
  ignoresUnsettlingDeviceResponse(e, s) {
    let n = this.deviceRequests.get(s.request_id);
    if (!n) return !1;
    let r = e.request.request.subtype;
    if (s.subtype === "error") return n.errorRepliesIgnored += 1, t(`Ignoring error-shaped control_response for device ${r} request_id=${s.request_id} \u2014 not the device's answer; still waiting (error: ${T(s.error)})`), 
    !0;
    if (!n.accepts(s.response)) return n.malformedRepliesIgnored += 1, t(`Ignoring malformed control_response for device ${r} request_id=${s.request_id} \u2014 not an answer to it; still waiting`), 
    !0;
    return !1;
  }
  hasCanUseToolNameMismatch(e, s) {
    let n = e.request.request;
    if (n.subtype !== "can_use_tool" || s.subtype !== "success") return !1;
    return T2e(s.response?.toolName, n.tool_name, s.request_id);
  }
  injectControlResponse(e) {
    let s = this.blankedPromptDenyTarget(e.response) ?? e.response?.request_id;
    if (!s) return !1;
    let n = this.pendingRequests.get(s);
    if (!n) return i("tengu_inject_control_response_unknown_id", {
      pending_control_requests: this.pendingRequests.size
    }), !1;
    if (this.ignoresErrorShapedDialogResponse(n, e.response)) return !1;
    if (this.ignoresErrorShapedUiHostResponse(n, e.response)) return !1;
    if (this.ignoresResponseAtShutdown(n, e.response)) return !1;
    if (this.ignoresUnsettlingDeviceResponse(n, e.response)) return !1;
    if (this.hasCanUseToolNameMismatch(n, e.response)) return !1;
    if (this.trackResolvedToolUseId(n.request), this.pendingRequests.delete(s), s !== e.response?.request_id) this.onControlRequestResolved?.(s);
    if (this.outbound.ended) this.write({
      type: "control_cancel_request",
      request_id: s
    }).catch(r => {
      t(`control_cancel_request for request_id=${s} not written: ${l(r)}`, {
        level: "error"
      });
    }); else this.enqueueCancelRequest(s);
    if (e.response.subtype === "error") n.reject(Error(e.response.error)); else {
      let r = e.response.response;
      if (n.schema) try {
        n.resolve(n.schema.parse(r));
      } catch (o) {
        n.reject(o);
      } else n.resolve({});
    }
    return !0;
  }
  setOnControlRequestSent(e) {
    this.onControlRequestSent = e;
  }
  setOnControlRequestResolved(e) {
    this.onControlRequestResolved = e;
  }
  setOnStreamClosedWithParkedQuestion(e) {
    this.onStreamClosedWithParkedQuestion = e;
  }
  async processLine(e) {
    if (!e.trim()) return;
    e = Mo(e);
    try {
      let s = hHt(Y(e));
      if (s.type === "keep_alive") return;
      if (s.type === "update_environment_variables") {
        if (!this.acceptsInboundEnvUpdates()) {
          let h = s.variables, m = typeof h === "object" && h !== null ? Object.keys(h) : [], y = m.filter(v => H.has(v)), S = m.length - y.length, R = S > 0 ? y.concat(`${S} other`) : y;
          t(`[structuredIO] refused update_environment_variables: this worker does not take environment updates from its inbound stream (keys: ${R.join(", ") || "none"})`, {
            level: "warn"
          }), this.retireDroppedFrame("uuid" in s ? s.uuid : void 0);
          return;
        }
        let n = s.variables;
        if (typeof n !== "object" || n === null || Array.isArray(n) || Object.values(n).some(h => typeof h !== "string")) {
          if (t("[structuredIO] dropped update_environment_variables: variables must be an object of string values"), 
          typeof s.request_id === "string" && s.request_id) this.writeActivityLine(_({
            type: "control_response",
            response: {
              subtype: "error",
              request_id: s.request_id,
              error: "update_environment_variables: variables must be an object of string values"
            }
          }) + `\n`);
          return;
        }
        let r = [], o = [];
        for (let [h, m] of Object.entries(s.variables)) {
          if (!H.has(h)) {
            o.push(h);
            continue;
          }
          process.env[h] = m, r.push(h);
        }
        if (o.length > 0) t(`[structuredIO] refused update_environment_variables for non-allowlisted keys: ${o.join(", ")}`);
        if (r.includes("CLAUDE_CODE_OAUTH_TOKEN")) jP(); else wPe();
        if (t(`[structuredIO] applied update_environment_variables: ${r.join(", ")}`), typeof s.request_id === "string" && s.request_id) this.writeActivityLine(_({
          type: "control_response",
          response: {
            subtype: "success",
            request_id: s.request_id
          }
        }) + `\n`);
        return;
      }
      if (s.type === "control_response") {
        let n = "uuid" in s && typeof s.uuid === "string" ? s.uuid : void 0, r = s.response;
        if (typeof r !== "object" || r === null || Array.isArray(r)) {
          if (n) this.onCommandLifecycle?.(n, "completed");
          t("[structuredIO] dropped control_response with malformed response payload");
          return;
        }
        let o = this.blankedPromptDenyTarget(s.response) ?? s.response.request_id, h = this.pendingRequests.get(o);
        if (!h) {
          let y = this.settleUnknownResponse(s, n);
          if (y !== void 0) await y;
          return;
        }
        if (wn() && this.asksOurHuman(h)) {
          t(`Leaving control_response for request_id=${o} to the next process \u2014 this one is shutting down and settles no question`), 
          this.repliesLeftForNextProcess++;
          return;
        }
        if (n) this.onCommandLifecycle?.(n, "completed");
        if (this.ignoresErrorShapedDialogResponse(h, s.response)) return;
        if (this.ignoresErrorShapedUiHostResponse(h, s.response)) return;
        if (this.ignoresUnsettlingDeviceResponse(h, s.response)) return;
        if (this.hasCanUseToolNameMismatch(h, s.response)) return;
        if (this.trackResolvedToolUseId(h.request), this.pendingRequests.delete(o), this.hostOwnsStdinOrigin && !h.forwarded && this.hostDialogAttestations.has(o) && h.request.request.subtype === "can_use_tool" && s.response.subtype === "success" && yEs(s.response.response)) this.hostDialogAttestations.set(o, !0);
        if (h.request.request.subtype === "can_use_tool" && this.onControlRequestResolved) this.onControlRequestResolved(o);
        if (o !== s.response.request_id) this.enqueueCancelRequest(o);
        if (YVe(h.request) && !(h.forwarded && s.response.subtype === "error")) this.recordUserDrivenInbound(s), 
        this.recordAnsweredPrompt(s, h.request.request.subtype);
        if (s.response.subtype === "error") {
          h.reject(Error(s.response.error));
          return;
        }
        let m = s.response.response;
        if (h.schema) try {
          h.resolve(h.schema.parse(m));
        } catch (y) {
          h.reject(y);
        } else h.resolve({});
        if (this.replayUserMessages) return s;
        return;
      }
      if (s.type !== "workflow_launch" && s.type !== "user" && !(s.type === "control_request" && Ryn(he(s.request), () => this.uiSurfaceFrameOf(s, !1), () => this.surfaceRequestJudgedAt(s))) && SJr(s, {
        hostOwnsOrigin: this.hostOwnsStdinOrigin
      })) this.recordUserDrivenInbound(s);
      if (s.type !== "user" && s.type !== "bash_command" && s.type !== "control_request" && s.type !== "control_cancel_request" && s.type !== "assistant" && s.type !== "system" && s.type !== "queued_notification" && s.type !== "session_notice" && s.type !== "workflow_launch") {
        let n = s.type;
        t(`Ignoring unknown message type: ${typeof n === "string" ? x(n) : `(a value of JSON type ${typeof n})`}`, {
          level: "warn"
        }), this.retireDroppedFrame(typeof s === "object" && s !== null && "uuid" in s ? s.uuid : void 0);
        return;
      }
      if (s.type === "workflow_launch") return s;
      if (s.type === "control_request") {
        if (this.isRemoteTransport()) {
          let n = s.request, r = typeof n !== "object" || n === null || Array.isArray(n);
          if (r || !("subtype" in n) || typeof n.subtype !== "string") {
            i("tengu_sdk_malformed_input", {
              message_type: b("control_request"),
              reason: c(r ? "missing_request" : "subtype_not_string"),
              transport: b("remote"),
              outcome: b("dropped"),
              has_event_uuid: "uuid" in s && Vt(s.uuid) !== null
            }), t("Dropping control_request: missing request object or non-string subtype", {
              level: "warn"
            }), this.retireDroppedFrame("uuid" in s ? s.uuid : void 0);
            return;
          }
        } else if (!s.request) return this.exitOnFatalInput("Error: Missing request on control_request");
        return s;
      }
      if (s.type === "control_cancel_request") return typeof s.request_id === "string" ? s : void 0;
      if (s.type === "assistant" || s.type === "system") return s;
      if (s.type === "bash_command") return s;
      if (s.type === "queued_notification") return s;
      if (s.type === "session_notice") return s;
      if (s.message?.role !== "user") {
        if (!this.isRemoteTransport()) return this.exitOnFatalInput(`Error: Expected message role 'user', got '${x(String(s.message?.role))}'`);
        let n = Re(s.message), r = n === void 0 ? "dropped" : !n.plain ? "unwrap_refused" : a.CLAUDE_CODE_DISABLE_NESTED_USER_REPAIR ? "repair_disabled" : "repaired", o = ye(s.message), h = Vt(s.uuid) !== null;
        if (i("tengu_sdk_malformed_input", {
          message_type: b("user"),
          reason: b("invalid_message_role"),
          transport: b("remote"),
          outcome: c(r),
          wire_shape: c(o),
          has_event_uuid: h
        }), X("warn", "cli_malformed_user_message", {
          outcome: r,
          wire_shape: o,
          has_event_uuid: h
        }), n === void 0 || r !== "repaired") {
          t(`Dropping malformed user message (${r}, ${o}, event uuid ${h ? "present" : "absent"}): expected message role 'user'`, {
            level: "warn"
          }), this.retireDroppedFrame(s.uuid);
          return;
        }
        let m = s;
        m.message = n.inner, t("Repaired a nested user message (one level)");
      }
      if (SJr(s, {
        hostOwnsOrigin: this.hostOwnsStdinOrigin
      })) this.recordUserDrivenInbound(s);
      return s;
    } catch (s) {
      return this.exitOnFatalInput(ve(e, s));
    }
  }
  blankedPromptDenyTarget(e) {
    if (e?.subtype !== "success" || e.response?.behavior !== "deny") return;
    let s = e.response.toolUseID;
    if (typeof s !== "string" || s === "" || e.request_id !== s || this.pendingRequests.has(s)) return;
    for (let [n, r] of this.publishedPendingActionDetails) if (r.request_id === "" && r.suppressed_request_id === n && r.tool_use_id === s && this.pendingRequests.get(n)?.request.request.subtype === "can_use_tool") return t(`[structuredIO] deny keyed on toolUseID=${s} settles its blanked prompt request_id=${n}`), 
    n;
    return;
  }
  settleUnknownResponse(e, s) {
    if (wn()) {
      t(`Leaving control_response for request_id=${e.response.request_id} to the next process \u2014 this one is shutting down and settles no question`);
      return;
    }
    if (s) this.onCommandLifecycle?.(s, "completed");
    let n = this.timedOutUserDialogs.get(e.response.request_id);
    if (n) {
      this.timedOutUserDialogs.delete(e.response.request_id);
      let h = e.response.subtype === "success" ? e.response.response?.behavior : void 0, m = e.response.subtype;
      i("tengu_request_user_dialog_late_answer", {
        dialog_kind: sn(n.dialogKind),
        lateness_ms: Date.now() - n.timedOutAt,
        response_subtype: c(m === "success" || m === "error" ? m : "other"),
        behavior: c(h === "completed" || h === "cancelled" ? h : h === void 0 ? "absent" : "other")
      }), t(`Ignoring late request_user_dialog answer for request_id=${e.response.request_id}: the park deadline already settled this dialog as cancelled ${Date.now() - n.timedOutAt}ms ago`);
      return;
    }
    let r = e.response.subtype === "success" ? e.response.response : void 0, o = r?.toolUseID;
    if (typeof o === "string" && this.resolvedToolUseIds.has(o)) {
      t(`Ignoring duplicate control_response for already-resolved toolUseID=${o} request_id=${e.response.request_id}`);
      return;
    }
    if (this.unexpectedResponseCallback === void 0) {
      try {
        this.unclaimedResponseObserver?.({
          answerKind: e.response.subtype === "success" ? VJn(r) : {},
          toolUseId: typeof o === "string" ? o : void 0
        });
      } catch (h) {
        d(h);
      }
      return;
    }
    return this.unexpectedResponseCallback(e);
  }
  resetStallWatchdog() {
    this.stallFired = !1;
  }
  recordUserDrivenInbound(e) {
    BZo();
  }
  recordAnsweredPrompt(e, s) {}
  retireDroppedFrame(e) {
    let s = Vt(e);
    if (s) this.onCommandLifecycle?.(s, "completed");
  }
  trackWrite(e) {
    if (this.stallTimer) clearTimeout(this.stallTimer);
    if (e.type !== "result" && !this.stallFired) this.stallTimer = setTimeout(n => {
      if (this.sessionState.getState() !== "running") return;
      this.stallFired = !0, i("tengu_sdk_stall", {
        session_age_ms: Date.now() - this.createdAt,
        session_state: c(this.sessionState.getState()),
        last_message_type: c(n),
        pending_control_requests: this.pendingRequests.size
      });
    }, te, e.type), this.stallTimer.unref();
    let s = e.type === "result" && this.resultDelivery ? this.resultDelivery.stamp(e) : e;
    if (s.type !== "system") this.sampleForSdkSchemaCheck(s);
    if (s.type === "result") this.sdkSchemaResultWritten = !0, this.armSdkSchemaCheck();
    return s;
  }
  sampleForSdkSchemaCheck(e) {
    if (this.sdkSchemaStretchSampled ??= Math.random() < re, !this.sdkSchemaStretchSampled) return;
    let s = this.sdkSchemaKept.get(e.type) ?? {
      frames: 0,
      json: void 0
    };
    if (s.frames += 1, this.sdkSchemaKept.set(e.type, s), Math.random() >= 1 / s.frames) return;
    try {
      let n = _(e);
      if (n.length <= ie) s.json = n;
    } catch {}
  }
  sdkSchemaFramesKept() {
    for (let e of this.sdkSchemaKept.values()) if (e.json !== void 0) return !0;
    return !1;
  }
  endSdkSchemaStretch() {
    if (this.sdkSchemaFramesKept()) {
      this.armSdkSchemaCheck();
      return;
    }
    this.sdkSchemaStretchSampled = void 0, this.sdkSchemaKept.clear();
  }
  armSdkSchemaCheck() {
    if (!this.sdkSchemaFramesKept() || !this.sdkSchemaResultWritten) return;
    clearTimeout(this.sdkSchemaCheckTimer), this.sdkSchemaCheckTimer = setTimeout(() => {
      if (this.sessionState.getState() !== "idle" || this.inputClosed || wn()) return;
      let e = [ ...this.sdkSchemaKept.entries() ];
      this.sdkSchemaKept.clear(), this.sdkSchemaStretchSampled = void 0;
      let s = OOr.builtCount();
      try {
        let n = hAo();
        for (let [r, {json: o}] of e) {
          if (o === void 0) continue;
          let h = Y(o), m = n.safeParse(h);
          if (!m.success) i("tengu_sdk_schema_violation", {
            message_type: c(r),
            error_path: Rmr(m.error.issues[0]?.path, ue)
          });
        }
      } catch (n) {
        t(`Could not check the sampled frames against the SDK output schema; they are dropped: ${l(n)}`);
      } finally {
        OOr.releaseBuiltSince(s);
      }
    }, ae), this.sdkSchemaCheckTimer.unref();
  }
  writeActivityLine(e) {
    Tr(e);
  }
  acceptsInboundEnvUpdates() {
    return !0;
  }
  exitOnFatalInput(e) {
    return me(e);
  }
  async write(e) {
    let s = this.heldDueBefore(e);
    if (s.length > 0) await this.writeHeld(s);
    let n = this.trackWrite(e);
    Tr(zge(n) + `\n`);
    let r = this.heldDueAfter(n);
    if (r.length > 0) await this.writeHeld(r);
  }
  writeAfterInit(e) {
    this.heldUntilInit.push(e);
  }
  heldDueBefore(e) {
    return e.type === "result" ? this.heldUntilInit.splice(0) : [];
  }
  heldDueAfter(e) {
    return e.type === "system" && e.subtype === "init" ? this.heldUntilInit.splice(0) : [];
  }
  async writeHeld(e) {
    for (let s of e) try {
      await this.write(s);
    } catch (n) {
      t(`held frame write failed: ${n}`, {
        level: "warn"
      });
    }
  }
  passControlRequestToHost(e, {requestId: s, schema: n, signal: r}) {
    if (this.pendingRequests.has(s)) return Promise.reject(new Ye("a control request with this request_id is already pending"));
    return this.sendRequest(e, n, r, {
      requestId: s,
      forwarded: !0
    });
  }
  async sendRequest(e, s, n, {requestId: r = P(), forwarded: o = !1, deviceHook: h = !1} = {}) {
    let m = {
      type: "control_request",
      request_id: r,
      request: e
    }, y = {
      ...m,
      request: TKo(e)
    }, S = !o && YVe(m);
    if (S && wn() && !n?.aborted) return uu();
    if (e.subtype === "elicitation" && !o) FRs(r); else if (E(e) && !o) URs(r); else if (!o && !h) Ojn(r, {
      automated: !S
    }); else if (h) $Rs(r);
    if (this.inputClosed) throw new pd(Emr);
    if (n?.aborted) throw new Ye("Request aborted");
    if (this.outbound.enqueue(o ? y : m), e.subtype === "can_use_tool" && this.onControlRequestSent) this.onControlRequestSent(y);
    if (S) this.sessionState.beginUserDecision();
    let R = () => {
      if (S && wn()) return;
      if (m.request.subtype === "can_use_tool" && n !== void 0 && Zon(n)) this.answerOwnWithdrawnAsk(r, m.request.tool_use_id);
      this.enqueueCancelRequest(r);
      let k = this.pendingRequests.get(r);
      if (k) {
        if (this.trackResolvedToolUseId(k.request), k.request.request.subtype === "can_use_tool" && this.onControlRequestResolved) this.onControlRequestResolved(r);
        this.pendingRequests.delete(r), k.reject(new Ye);
      }
    };
    if (n) n.addEventListener("abort", R, {
      once: !0
    });
    let v;
    try {
      return await new Promise((k, A) => {
        v = {
          request: y,
          resolve: w => {
            k(w);
          },
          reject: A,
          schema: s,
          ...o && {
            forwarded: o
          }
        }, this.pendingRequests.set(r, v), this.requestPending.emit();
      });
    } finally {
      if (n) n.removeEventListener("abort", R);
      if (this.pendingRequests.get(r) === v) this.pendingRequests.delete(r);
      if (S) this.sessionState.endUserDecision();
    }
  }
  emitPermissionDenied(e, s, n, r) {
    let o = r.decisionReason;
    this.outbound.enqueue({
      type: "system",
      subtype: "permission_denied",
      tool_name: e,
      tool_use_id: s,
      agent_id: n,
      decision_reason_type: o?.type,
      decision_reason_code: Eee(o),
      decision_reason: SAe(o),
      message: r.message,
      uuid: P(),
      session_id: q()
    });
  }
  createCanUseTool(e, s) {
    return AKo(e, this.permissionPromptHost(e.kind, s));
  }
  permissionPromptHost(e, s) {
    return {
      request: (n, r, o) => (this.hostDialogAttestations.set(o, !1), this.sendRequest(n, mGe(e), r, {
        requestId: o
      })),
      isPending: n => this.pendingRequests.has(n),
      interruptedAtStreamClose: n => this.streamCloseInterruptRequestIds.has(n),
      answeredAtHostDialog: n => {
        let r = this.hostDialogAttestations.get(n) === !0;
        if (r) this.hostDialogAttestations.set(n, !1);
        return r;
      },
      emitPermissionDenied: (n, r, o, h) => this.emitPermissionDenied(n, r, o, h),
      promptShown: s && ((n, r, o, h) => {
        if (this.publishedPendingActionDetails.set(n, r), h !== void 0) this.backgroundPromptIds.add(n);
        if (o !== void 0) this.sessionState.notifyNestedPromptBlocking(o);
        s(r);
      }),
      promptSettled: (n, r) => this.settlePermissionPrompt(n, r)
    };
  }
  settlePermissionPrompt(e, s) {
    if (s !== void 0) this.sessionState.notifyNestedPromptUnblocking(s);
    this.hostDialogAttestations.delete(e), this.settlePublishedPrompt(e, !0);
  }
  settlePublishedPrompt(e, s) {
    if (this.publishedPendingActionDetails.delete(e), this.backgroundPromptIds.delete(e), 
    !this.hasPendingPrompt()) {
      this.flipBackFromRequiresAction();
      return;
    }
    if (s) this.sessionState.reteeWaitingOnUser();
    this.republishSurvivingPendingAction();
  }
  flipBackFromRequiresAction() {
    if (wn()) return;
    let e = this.sessionState.heldRequiresAction?.();
    if (e) {
      this.flipBackLeftToUnpublishedAsk = !1, this.sessionState.notifyStateChanged("requires_action", e);
      return;
    }
    this.sessionState.notifyStateChanged(this.mainLoopLiveness?.() === !1 ? "idle" : "running");
  }
  createHookCallback(e, s) {
    let n = this.sdkHostHookGeneration;
    return {
      type: "callback",
      timeout: s,
      callback: async (r, o, h) => {
        if (n !== this.sdkHostHookGeneration && this.retiredHostHookAnswer) return this.retiredHostHookAnswer(r);
        try {
          let m = await this.sendRequest({
            subtype: "hook_callback",
            callback_id: e,
            input: r,
            tool_use_id: o || void 0
          }, coe(), h);
          return MDr(), m;
        } catch (m) {
          if (Ve(m)) throw m;
          return MDr(), console.error(`Error in hook callback ${e}:`, m), {};
        }
      }
    };
  }
  async sendUiHostRequest(e, s, n) {
    if (!Zte(this.uiSurfaceChannel())) return;
    let r = this.isRemoteTransport(), o = P();
    if (r) this.trackDeviceRequest(o, "host_ask", () => !0);
    let h = AbortSignal.timeout(n), m = await this.sendRequest(e, s, h, {
      requestId: o
    }).then(y => ({
      answer: y,
      failure: void 0
    }), y => ({
      answer: void 0,
      failure: W(y, h)
    })).finally(() => this.deviceRequests.delete(o));
    if (r && m.failure === void 0) g("plugin_function_hooks_host_ask"); else if (r && m.failure !== void 0) f("plugin_function_hooks_host_ask", m.failure);
    return m.answer;
  }
  takesUiHostAsks() {
    return !this.isRemoteTransport() || XVe(this.sessionWriters());
  }
  async sendUiHostAsk(e, s, n) {
    if (!Zte(this.uiSurfaceChannel())) return {
      answer: void 0,
      cause: "not_asked"
    };
    let r = AbortSignal.timeout(n);
    try {
      return {
        answer: await this.sendRequest(e, s, r),
        cause: void 0
      };
    } catch (o) {
      return {
        answer: void 0,
        cause: W(o, r)
      };
    }
  }
  sendDeviceHookCallback(e) {
    let s = P(), n = this.trackDeviceRequest(s, "hook", m => K(m) !== null), r = new AbortController, o = e.signal ? AbortSignal.any([ e.signal, r.signal ]) : r.signal, h = this.sendRequest({
      subtype: "hook_callback",
      callback_id: e.callbackId,
      input: e.input,
      tool_use_id: e.toolUseID || void 0,
      issued_at: Math.trunc(e.issuedAt),
      deadline_ms: Math.max(1, Math.ceil(e.deadlineMs))
    }, oe(), o, {
      requestId: s,
      deviceHook: !0
    }).then(m => {
      let y = K(m);
      return y === null ? {
        malformed: !0
      } : {
        answer: y
      };
    }, m => {
      if (Ve(m)) throw m;
      return t(`Device hook_callback request_id=${s} settled with a non-answer; treating as no opinion`, {
        level: "warn"
      }), {
        malformed: !0
      };
    }).finally(() => {
      this.deviceRequests.delete(s);
    });
    return {
      requestId: s,
      reply: h,
      cancel: () => r.abort(),
      errorRepliesIgnored: () => n.errorRepliesIgnored,
      malformedRepliesIgnored: () => n.malformedRepliesIgnored
    };
  }
  trackDeviceRequest(e, s, n, r, o) {
    if (this.deviceRequests.size >= N) t(`Device request bookkeeping past its expected ceiling (${N} live requests); keeping all of them`, {
      level: "warn"
    });
    let h = {
      kind: s,
      errorRepliesIgnored: 0,
      malformedRepliesIgnored: 0,
      delivery: "queued",
      instanceId: r,
      accepts: n,
      onUpload: o
    };
    return this.deviceRequests.set(e, h), h;
  }
  waitsOnHostAsk() {
    for (let e of this.deviceRequests.values()) if (e.kind === "host_ask") return !0;
    return !1;
  }
  liveDeviceRequestKind(e) {
    return this.deviceRequests.get(e)?.kind;
  }
  abandonServedCalls(e, s) {
    let n = 0;
    for (let [r, o] of this.deviceRequests) {
      if (o.kind !== "served_call" || o.instanceId !== e) continue;
      let h = this.pendingRequests.get(r);
      if (!h) continue;
      this.enqueueCancelRequest(r), this.pendingRequests.delete(r), h.reject(new s2t(s)), 
      n++;
    }
    return n;
  }
  withdrawStandingServedCall(e) {
    if (this.pendingRequests.has(e)) return !1;
    return this.enqueueCancelRequest(e), !0;
  }
  noteRequestsUpload(e, s) {
    let n = 0;
    for (let r of e) {
      let o = this.deviceRequests.get(r);
      if (o === void 0) continue;
      let h = pe(o.delivery, s);
      if (h !== o.delivery) o.delivery = h, n++;
      try {
        o.onUpload?.(s);
      } catch (m) {
        t(`A served call's upload listener threw (${s}); the delivery ledger is unaffected: ${l(m)}`, {
          level: "warn"
        });
      }
    }
    return n;
  }
  rejectUndeliveredRequests(e, s) {
    let n = 0;
    for (let r of e) {
      let o = this.deviceRequests.get(r);
      if (o?.kind !== "served_call") continue;
      let h = this.pendingRequests.get(r);
      if (!h) continue;
      this.pendingRequests.delete(r), h.reject(this.tracksRequestDelivery && o.delivery === "queued" ? new a2t(s) : new i2t(s)), 
      n++;
    }
    return n;
  }
  sendServedCallRequest(e) {
    let s = P();
    if (this.inputClosed) {
      let m = Promise.reject(new pd(Emr));
      return m.catch(() => {}), {
        requestId: s,
        sent: !1,
        delivery: () => "queued",
        withdraw: () => !1,
        reply: m,
        cancel: () => {},
        errorRepliesIgnored: () => 0
      };
    }
    let n = this.trackDeviceRequest(s, "served_call", e.accepts, e.request.instance_id, e.onUpload), r = new AbortController, o = e.signal ? AbortSignal.any([ e.signal, r.signal ]) : r.signal, h = this.sendRequest(e.request, oe(), o, {
      requestId: s,
      deviceHook: !0
    }).finally(() => {
      this.deviceRequests.delete(s);
    });
    return {
      requestId: s,
      sent: !0,
      delivery: () => this.tracksRequestDelivery ? fe(n.delivery) : "untracked",
      withdraw: () => this.withdrawUnsentServedCall(s),
      reply: h,
      cancel: () => {
        if (this.pendingRequests.has(s)) {
          r.abort();
          return;
        }
        this.enqueueCancelRequest(s);
      },
      errorRepliesIgnored: () => n.errorRepliesIgnored
    };
  }
  askToAnnounce(e, s) {
    this.sendRequest(e, oe(), s, {
      deviceHook: !0
    }).catch(() => {});
  }
  withdrawUnsentServedCall(e) {
    let s = this.deviceRequests.get(e), n = this.pendingRequests.get(e);
    if (!this.tracksRequestDelivery || n === void 0 || s?.kind !== "served_call" || s.delivery !== "queued") return !1;
    if (!this.withdrawQueuedRequest(e)) return !1;
    return this.pendingRequests.delete(e), n.reject(new DKr), !0;
  }
  async handleElicitation(e, s, n, r, o, h, m, y, S = !1) {
    if (!this.hostAnswersElicitations) return {
      action: "cancel"
    };
    if (wn()) {
      if (r?.aborted) return {
        action: "cancel"
      };
      return uu();
    }
    if (this.inputClosed || r?.aborted) return {
      action: "cancel"
    };
    let R = P(), v = {
      tool_name: Llt,
      display_tool_name: "Claude needs your input",
      action_description: "Answer the MCP server's question to continue",
      tool_use_id: "",
      request_id: R
    };
    if (this.publishedPendingActionDetails.set(R, v), S) this.backgroundPromptIds.add(R);
    this.sessionState.notifyStateChanged("requires_action", v), this.onUserDialogParked?.(v);
    let k = n?.properties;
    try {
      return await this.sendRequest({
        subtype: "elicitation",
        mcp_server_name: e,
        message: s,
        mode: o,
        url: h,
        elicitation_id: m,
        requested_schema: n,
        property_order: o !== "url" && L(k) ? Object.keys(k) : void 0,
        title: y?.title,
        display_name: y?.displayName,
        description: y?.description
      }, aAo(), r, {
        requestId: R
      });
    } catch {
      return {
        action: "cancel"
      };
    } finally {
      this.settlePublishedPrompt(R, !r?.aborted);
    }
  }
  async requestUserDialog(e, s, n) {
    if (wn()) {
      if (n?.signal?.aborted) return {
        behavior: "cancelled"
      };
      return uu();
    }
    let r = P(), o = N$n(e, s, r, n?.toolUseId);
    if (this.publishedPendingActionDetails.set(r, o), this.sessionState.notifyStateChanged("requires_action", o), 
    this.onUserDialogParked?.(o), i("tengu_request_user_dialog_requires_action", {
      dialog_kind: sn(e)
    }), n?.onSettledUnanswered) this.unansweredSettleHandlers.set(r, n.onSettledUnanswered);
    let h = dpe(), m;
    if (h > 0) m = setTimeout((y, S, R) => {
      if (this.timedOutUserDialogs.set(y, {
        dialogKind: S,
        timedOutAt: Date.now()
      }), !this.cancelDialogByMachine(y, "deadline")) {
        this.timedOutUserDialogs.delete(y);
        return;
      }
      i("tengu_request_user_dialog_timeout", {
        dialog_kind: sn(S),
        timeout_ms: R
      });
    }, h, r, e, h), m.unref();
    try {
      return await this.sendRequest({
        subtype: "request_user_dialog",
        dialog_kind: e,
        payload: s,
        tool_use_id: n?.toolUseId
      }, kon(), n?.signal, {
        requestId: r
      });
    } catch {
      return {
        behavior: "cancelled"
      };
    } finally {
      if (m !== void 0) clearTimeout(m);
      this.unansweredSettleHandlers.delete(r), this.settlePublishedPrompt(r, !this.timedOutUserDialogs.has(r));
    }
  }
  createSandboxAskCallback(e, s, n, r) {
    let o = new Map, h = async m => {
      if (kY(m)) return t(`[StructuredIO] Refusing a sandbox network ask for a host srt would re-spell: ${_(m)}`, {
        level: "warn"
      }), !1;
      try {
        let y = {
          type: "addRules",
          rules: [ {
            toolName: cr,
            ruleContent: `domain:${H$e(m)}`
          } ],
          behavior: "allow",
          destination: JPt() ?? "session"
        }, S = tQn(o4(mre), n, r), R;
        try {
          R = await this.sendRequest({
            subtype: "can_use_tool",
            tool_name: mre,
            display_name: o4(mre),
            input: {
              host: m
            },
            permission_suggestions: [ y ],
            tool_use_id: P(),
            description: `Allow network connection to ${m}?`
          }, mGe(e.kind));
        } finally {
          if (S(), this.flipBackLeftToUnpublishedAsk && !this.hasPendingPrompt()) this.flipBackFromRequiresAction();
        }
        if (R.behavior !== "allow") return !1;
        let v = R.updatedPermissions;
        switch (e.kind) {
         case "launcher":
          if (v && v.length > 0) {
            let k = IY(v, void 0);
            s?.(A => (k = IY(v, void 0, A), SO(A, k))), await h1(k, n);
          }
          break;

         case "strict":
          if ((s ? UQr(e, $Qr(v, e.limits), mre, s, uar(v, e.limits.ruleLength)) : uar(v, e.limits.ruleLength).length) > 0) return t("refused a sandbox network answer: a deny or ask rule that the answer added, or may have added, is not among the session's rules", {
            level: "warn"
          }), !1;
          break;
        }
        return qe.addSessionAllowedHost(m), !0;
      } catch {
        return !1;
      }
    };
    return m => {
      let y = m.host, S = o.get(y);
      if (S) return S;
      let R = h(y).finally(() => {
        o.delete(y);
      });
      return o.set(y, R), R;
    };
  }
  async sendMcpMessage(e, s, n = se) {
    let o = $bn(s) ? void 0 : Ys(void 0, {
      timeoutMs: n,
      refTimer: !0
    });
    try {
      return (await this.sendRequest({
        subtype: "mcp_message",
        server_name: e,
        message: s
      }, u({
        mcp_response: iX().optional()
      }), o?.signal)).mcp_response;
    } finally {
      o?.cleanup();
    }
  }
  async requestOAuthTokenRefresh() {
    let e = Date.now(), s;
    try {
      s = await this.sendRequest({
        subtype: "oauth_token_refresh"
      }, dAo(), AbortSignal.timeout(V));
    } catch (r) {
      throw i("tengu_sdk_oauth_refresh_unfulfilled", {
        outcome: c(r instanceof pd ? "stream_closed" : Ve(r) ? "timeout" : r instanceof ex ? "invalid_response" : "error"),
        reason: c("none"),
        duration_ms: Date.now() - e
      }), r;
    }
    if (typeof s.accessToken === "string" && s.accessToken) return iHs(), s.accessToken;
    let n = s.reason;
    if (n !== void 0) sHs(n);
    return i("tengu_sdk_oauth_refresh_unfulfilled", {
      outcome: c(n !== void 0 ? "declined" : "null"),
      reason: c(n ?? "none"),
      duration_ms: Date.now() - e
    }), null;
  }
  async requestRemoteControlWorkSecret(e) {
    try {
      return (await this.sendRequest({
        subtype: "remote_control_work_secret",
        session_id: e
      }, lAo(), AbortSignal.timeout(ee))).work_secret || null;
    } catch (s) {
      return t(`[bridge:work-secret] host work-secret request failed (${s instanceof Error ? s.name : "unknown"})`, {
        level: "warn"
      }), null;
    }
  }
  async requestHostAuthTokenRefresh(e = Z) {
    return this.sendRequest({
      subtype: "host_auth_token_refresh"
    }, cAo(), AbortSignal.timeout(e));
  }
  enqueueCancelRequest(e) {
    this.outbound.enqueue({
      type: "control_cancel_request",
      request_id: e
    });
  }
  answerOwnWithdrawnAsk(e, s) {}
}

async function me(e) {
  console.error(e);
  let s = Date.now() + 2e3;
  await Ht(q0(), 2e3, "write queue drain timeout (exit)").catch(() => {}), await Ht(vOe(), Math.max(0, s - Date.now()), "diagnostic log flush timeout (exit)").catch(() => {}), 
  await M$t(Math.max(0, s - Date.now()), {
    scaleBudgetToQueue: !1
  }), process.exit(1);
}

var _e = new Set([ "type", "message", "uuid", "session_id", "parent_tool_use_id", "timestamp" ]);

function ge([e, s]) {
  return _e.has(e) || e === "isSynthetic" && s === !1 || e === "shouldQuery" && s === !0;
}

function ye(e) {
  if (e === void 0 || e === null) return "no_message";
  if (typeof e !== "object" || Array.isArray(e)) return "non_object_message";
  if (!("role" in e)) return "no_role";
  let s = e.role;
  if (s === void 0) return "no_role";
  if (s === null) return "role_null";
  if (Array.isArray(s)) return "role_array";
  switch (typeof s) {
   case "object":
    return "role_object";

   case "string":
    return "role_string";

   default:
    return "role_other";
  }
}

function Re(e) {
  if (typeof e !== "object" || e === null || !("message" in e)) return;
  let s = e.message;
  if (typeof s !== "object" || s === null || !("role" in s) || s.role !== "user" || !("content" in s) || typeof s.content !== "string" && !Array.isArray(s.content)) return;
  return {
    inner: s,
    plain: (!("type" in e) || e.type === "user") && Object.entries(e).every(ge)
  };
}

function ve(e, s) {
  return `Error parsing streaming input line (type=${/"type"\s*:\s*"([\w-]{1,40})"/.exec(e)?.[1] ?? "unknown"}, ${e.length} chars): ${s instanceof Error ? s.name : typeof s}`;
}

function F(e) {
  return () => ({
    type: e.type,
    ...e.type === "user" && {
      uuid: gHe(e.uuid)
    },
    ...e.type === "control_request" && {
      subtype: Ibt(e.request.subtype)
    }
  });
}

export { gHe, Ibt, ile, VJn, Obt, Wge };
