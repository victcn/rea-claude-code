// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { he } from "./chunk-3pqddg8f.js";

import { J } from "./chunk-nvtwm272.js";

import { d } from "./chunk-6ah1819r.js";

import { a } from "./chunk-j016gcgm.js";

import { X } from "./chunk-1zg3hbfq.js";

import { Cse } from "./chunk-2mq6q9dt.js";

import { qo } from "./chunk-yxennhe9.js";

import { $t } from "./chunk-g6nh65r0.js";

import { ui } from "./chunk-xywp7esx.js";

import { oA } from "./chunk-f1zpf9me.js";

function gSe(e) {
  for (let n of [ e?.request_id, e?.suppressed_request_id ]) if (typeof n === "string" && n.length > 0) return n;
  return;
}

var p = 32;

function g(e) {
  let {display_tool_name: n, raw_command: t} = e;
  return {
    tool_name: e.tool_name,
    ...n === void 0 ? {} : {
      display_tool_name: n
    },
    action_description: qo(e.action_description, oA),
    ...t === void 0 ? {} : {
      raw_command: qo(t, oA)
    },
    tool_use_id: e.tool_use_id,
    request_id: e.request_id,
    ...e.suppressed_request_id === void 0 ? {} : {
      suppressed_request_id: e.suppressed_request_id
    },
    ...e.decision_reason_type === void 0 ? {} : {
      decision_reason_type: e.decision_reason_type
    },
    ...e.decision_reason_code === void 0 ? {} : {
      decision_reason_code: e.decision_reason_code
    }
  };
}

function Bfo(e, n) {
  return [ e, ...n.slice(0, p - 1).map(g) ];
}

function k$n(e) {
  switch (e?.cross_session_inbound) {
   case "unavailable":
    return {
      acceptsPeerMessages: !1
    };

   case "available":
    return {
      acceptsPeerMessages: !0
    };

   default:
    return;
  }
}

var _Sr = 6e4;

class t7t {
  stateChanged=Me();
  pendingActionRepublished=Me();
  userDecisionPendingChanged=Me();
  userDecisionsPending=0;
  onStateChanged;
  getPendingActionDetails;
  heldRequiresAction;
  onWaitingOnUserChanged;
  onTurnStarting;
  onMetadataChanged;
  onInternalMetadataChanged;
  onPermissionModeChanged;
  onProactivityLevelChanged;
  onActiveGoalChanged;
  onAutocompactInputsChanged;
  onConversationReset;
  currentState="idle";
  hasPendingAction=!1;
  hasTaskSummary=!1;
  hasTerminalGoalSnapshot=!1;
  mainLoopRefcount=0;
  nestedBlockedChains=Object.create(null);
  nestedBlockedChainCount=0;
  droppedChainAgentIds=Object.create(null);
  nestedChainUnparks=Object.create(null);
  lastWaitingOnUser=!1;
  chainExcessLogged=!1;
  beginUserDecision() {
    if (this.userDecisionsPending += 1, this.userDecisionsPending === 1) u(this.userDecisionPendingChanged, !0);
  }
  get userDecisionPending() {
    return this.userDecisionsPending > 0;
  }
  endUserDecision() {
    if (this.userDecisionsPending === 0) return;
    if (this.userDecisionsPending -= 1, this.userDecisionsPending === 0) u(this.userDecisionPendingChanged, !1);
  }
  getState() {
    return this.currentState;
  }
  get waitingOnUser() {
    return this.currentState === "requires_action" && this.mainLoopRefcount - this.nestedBlockedChainCount <= 0;
  }
  setMainLoopRefcount(e) {
    this.mainLoopRefcount = e, this.emitIfWaitingChanged();
  }
  emitIfWaitingChanged() {
    this.checkChainInvariant();
    let e = this.waitingOnUser;
    if (e !== this.lastWaitingOnUser) this.lastWaitingOnUser = e, this.onWaitingOnUserChanged?.(e);
  }
  checkChainInvariant() {
    if (this.nestedBlockedChainCount - this.mainLoopRefcount > 0) {
      if (!this.chainExcessLogged) this.chainExcessLogged = !0, X("warn", "nested_chain_count_exceeds_refcount", {
        nested_blocked_chain_count: this.nestedBlockedChainCount,
        main_loop_refcount: this.mainLoopRefcount,
        session_state: this.currentState
      });
    } else this.chainExcessLogged = !1;
  }
  reteeWaitingOnUser() {
    this.onWaitingOnUserChanged?.(this.waitingOnUser);
  }
  notifyNestedPromptBlocking(e) {
    if (a.CLAUDE_CODE_DISABLE_NESTED_CHAIN_IDLE) return;
    if (this.droppedChainAgentIds[e]) return;
    let n = this.nestedBlockedChains[e] ?? 0;
    if (this.nestedBlockedChains[e] = n + 1, n === 0) {
      if (this.nestedBlockedChainCount++, this.nestedBlockedChainCount <= this.mainLoopRefcount) this.nestedChainUnparks[e] = Cse();
    }
    this.emitIfWaitingChanged();
  }
  notifyNestedPromptUnblocking(e) {
    let n = (this.nestedBlockedChains[e] ?? 0) - 1;
    if (n > 0) this.nestedBlockedChains[e] = n; else if (this.nestedBlockedChains[e] !== void 0) this.removeChain(e);
    this.emitIfWaitingChanged();
  }
  removeChain(e) {
    delete this.nestedBlockedChains[e], this.nestedBlockedChainCount--, this.nestedChainUnparks[e]?.(), 
    delete this.nestedChainUnparks[e];
  }
  dropNestedBlockedChain(e) {
    if (this.droppedChainAgentIds[e] = !0, this.nestedBlockedChains[e] !== void 0) this.removeChain(e), 
    this.emitIfWaitingChanged();
  }
  notifyTurnStarting(e, n) {
    this.onTurnStarting?.(e, n);
  }
  notifyStateChanged(e, n) {
    if (this.currentState = e, this.lastWaitingOnUser = this.waitingOnUser, this.onStateChanged?.(e, n), 
    u(this.stateChanged, e, n), e === "requires_action" && n) this.hasPendingAction = !0, 
    this.onMetadataChanged?.(this.pendingActionPatch(n)); else if (this.hasPendingAction) this.hasPendingAction = !1, 
    this.onMetadataChanged?.({
      pending_action: null,
      pending_actions: null
    });
    if (e === "running") this.wipeTurnScopedMetadata();
    if (e === "idle" && this.hasTaskSummary) this.hasTaskSummary = !1, this.notifyMetadataChanged({
      task_summary: null
    });
    if (a.CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS) ui({
      type: "system",
      subtype: "session_state_changed",
      state: e
    }); else if (a.CLAUDE_CODE_SDK_READS_SESSION_STATE) ui({
      type: "system",
      subtype: "session_state_changed",
      state: e,
      sdk_host_only: !0
    });
  }
  republishPendingAction(e) {
    this.hasPendingAction = !0, u(this.pendingActionRepublished, e), this.onMetadataChanged?.(this.pendingActionPatch(e));
  }
  pendingTurnEndSummary;
  holdTurnEndSummary(e, n) {
    let t = {
      promise: e,
      deadlineAt: n,
      settled: !1,
      superseded: !1
    }, i = () => {
      t.settled = !0;
    };
    return e.then(i, i), this.pendingTurnEndSummary = t, t;
  }
  turnEndSummaryOutstanding(e = performance.now()) {
    let n = this.pendingTurnEndSummary;
    return n !== void 0 && !n.settled && e < n.deadlineAt;
  }
  supersedeTurnEndSummary() {
    let e = this.pendingTurnEndSummary;
    if (e !== void 0 && !e.settled) e.superseded = !0;
  }
  waitForTurnEndSummary() {
    let e = this.pendingTurnEndSummary;
    if (e === void 0 || !this.turnEndSummaryOutstanding()) return;
    let n = new AbortController;
    return Promise.race([ e.promise.catch(() => {}), J(Math.max(0, Math.ceil(e.deadlineAt - performance.now()) + 1), n.signal) ]).finally(() => n.abort());
  }
  wipeTurnScopedMetadata() {
    if (this.supersedeTurnEndSummary(), this.onMetadataChanged?.({
      post_turn_summary: null,
      recap: null
    }), this.hasTerminalGoalSnapshot) this.hasTerminalGoalSnapshot = !1, this.onMetadataChanged?.({
      goal: null
    });
  }
  adoptRestoredPendingAction() {
    this.hasPendingAction = !0;
  }
  pendingActionPatch(e) {
    let t = (this.getPendingActionDetails?.(e.request_id) ?? []).filter(i => i !== e).reverse();
    return {
      pending_action: e,
      pending_actions: Bfo(e, t)
    };
  }
  notifyMetadataChanged(e, n) {
    if ("post_turn_summary" in e && n?.turnEndVerdict !== !0) this.supersedeTurnEndSummary();
    if (this.onMetadataChanged?.(e), "is_ultracode_active" in e && this.onMetadataChanged) this.ultracodeActiveSent = e.is_ultracode_active === !0, 
    this.ultracodeActiveWritten = !0;
    if ("goal" in e) this.hasTerminalGoalSnapshot = e.goal?.met === !0;
    if ("task_summary" in e) {
      if (e.task_summary != null) this.hasTaskSummary = !0;
      ui({
        type: "system",
        subtype: "task_summary",
        detail: e.task_summary ?? null
      });
    }
    if ("artifacts" in e) ui({
      type: "system",
      subtype: "session_metadata",
      metadata: {
        artifacts: e.artifacts
      }
    });
  }
  ultracodeActiveSent=!1;
  ultracodeActiveWritten=!1;
  ultracodeActivePatch(e) {
    return e === this.ultracodeActiveSent ? {} : {
      is_ultracode_active: e || null
    };
  }
  notifyUltracodeActive(e) {
    let n = this.ultracodeActivePatch(e);
    if ("is_ultracode_active" in n) this.notifyMetadataChanged(n);
  }
  settleUltracodeActive(e, n) {
    if (!this.ultracodeActiveWritten) this.ultracodeActiveSent = n?.readFailed === !0 ? void 0 : n?.external?.is_ultracode_active === !0;
    this.notifyUltracodeActive(e);
  }
  workerPermissionModeRecordEnabled=!1;
  get isWorkerPermissionModeRecordEnabled() {
    return this.workerPermissionModeRecordEnabled;
  }
  enableWorkerPermissionModeRecord() {
    this.workerPermissionModeRecordEnabled = !0;
  }
  notifyPermissionModeChanged(e) {
    this.onPermissionModeChanged?.(e);
  }
  notifyProactivityLevelChanged() {
    this.onProactivityLevelChanged?.();
  }
  notifyInternalMetadataChanged(e) {
    this.onInternalMetadataChanged?.(e);
  }
  notifyActiveGoalChanged(e) {
    this.onActiveGoalChanged?.(e);
  }
  notifyAutocompactInputsChanged() {
    this.onAutocompactInputsChanged?.();
  }
  notifyConversationReset() {
    this.onConversationReset?.();
  }
}

function jfo(e, n, t) {
  let i = [];
  if (e.length > 0) {
    let r = e.map(o => `- ${$t(o.description || "(no description)")} (task ${$t(o.task_id)})`);
    i.push(`The following background tasks were running and are now stopped:\n${r.join(`\n`)}\n${t ? `${t} Re-create anything else` : "Re-create them"} if still needed.`);
  }
  if (n.length > 0) {
    let r = n.map(s => he() ? void 0 : s.output_file), o = n.map((s, _) => {
      let l = r[_], h = l ? `output: ${$t(l)}` : "no output file";
      return `- ${$t(s.description || "(no description)")} (task ${$t(s.task_id)}), status ${$t(s.status)}, ${h}`;
    }), c = r.some(Boolean) ? "Read the output file to get the result (it is gone if the restart replaced the container); they cannot be stopped or messaged." : "No output file was recorded for them, and they cannot be stopped or messaged; re-create them if still needed.";
    i.push(`These background tasks finished before the restart, but their results were not delivered to you:\n${o.join(`\n`)}\n${c}`);
  }
  return `<system-reminder>\nThe container was restarted. ${i.join(`\n`)}\n</system-reminder>`;
}

function u(e, ...n) {
  try {
    e.emit(...n);
  } catch (t) {
    d(t);
  }
}

export { gSe, Bfo, k$n, _Sr, t7t, jfo };
