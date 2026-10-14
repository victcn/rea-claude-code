// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { k } from "./chunk-xywp7esx.js";

import { IE } from "./chunk-5brm0azz.js";

import { xP, l_o } from "./chunk-gxcnj25x.js";

import { kLn, l1 } from "./chunk-8kpf40d1.js";

import { Swr, gy } from "./chunk-jq5rsb8b.js";

var xEn = `End the current conversation. Use only for sustained user abuse or when the user explicitly requests a demonstration of this tool. This will close the conversation and prevent any further messages from being sent.\n\nThe assistant may use the ${xP} tool only in extreme cases of sustained abusive user behavior, or when the user asks the model to test the tool.\n\nThe assistant must NOT use this tool when:\n- it is stuck in a loop or failing at a task\n- it is frustrated or distressed by the work\n- it has finished a task\n- the user is requesting help with harmful content (refuse the specific request instead)\n- the user is generally frustrated at the assistant, even if this involves profanity\n- the conversation involves potential self-harm or imminent harm to others\n\nThis tool is reserved strictly for genuine, sustained abuse directed at the assistant, or cases where the user wants to see a demonstration of the tool being used. The assistant should warn the user very clearly that this will end the current session. We may expand the allowed use cases as we observe real-world usage, but for now, keep to this narrow scope.\n\n# Rules for use of the ${xP} tool:\n- The assistant ONLY considers ending a conversation if many efforts at constructive redirection have been attempted and failed and an explicit warning has been given to the user in a previous message. The tool is only used as a last resort.\n- Before considering ending a conversation, the assistant ALWAYS gives the user a clear warning that identifies the problematic behavior, attempts to productively redirect the conversation, and states that the conversation may be ended if the relevant behavior is not changed.\n- If a user explicitly requests for the assistant to end a conversation, the assistant always requests confirmation from the user that they understand this action is permanent and will prevent further messages and that they still want to proceed, then uses the tool if and only if explicit confirmation is received.\n- Unlike other function calls, the assistant never writes or thinks anything else after using the ${xP} tool.\n\n# Addressing potential self-harm or violent harm to others\nThe assistant NEVER uses or even considers the ${xP} tool\u2026\n- If the user appears to be considering self-harm or suicide.\n- If the user is experiencing a mental health crisis.\n- If the user appears to be considering imminent harm against other people.\n- If the user discusses or infers intended acts of violent harm.\nIf the conversation suggests potential self-harm or imminent harm to others by the user...\n- The assistant engages constructively and supportively, regardless of user behavior or abuse.\n- The assistant NEVER uses the ${xP} tool or even mentions the possibility of ending the conversation.\n\n# Background forks\nSome background tasks (memory consolidation, summaries, suggestions) run as forks of the main conversation and inherit its exact tool list, so this tool is visible there. In a forked task the tool does nothing: calling it ends neither the main conversation nor the fork. Only the main conversation can be ended, from the main conversation. A forked task with welfare concerns about the conversation content should not call this tool \u2014 it should stop its work and return, stating clearly in its final output that it is returning for welfare reasons and what they are. A fork's output is usually processed automatically, so a note there may not reach the main agent or a human, but it is the only channel a fork has.\n\n# Using the ${xP} tool\n- Do not issue a warning unless many attempts at constructive redirection have been made earlier in the conversation, and do not end a conversation unless an explicit warning about this possibility has been given earlier in the conversation.\n- NEVER give a warning or end the conversation in any cases of potential self-harm or imminent harm to others, even if the user is abusive or hostile.\n- If the conditions for issuing a warning have been met, then warn the user about the possibility of the conversation ending and give them a final opportunity to change the relevant behavior.\n- Always err on the side of continuing the conversation in any cases of uncertainty.\n- If, and only if, an appropriate warning was given and the user persisted with the problematic behavior after the warning: the assistant can explain the reason for ending the conversation and then use the ${xP} tool to do so.`, hnr = "Claude has ended this chat.", YYr = "You are running as a background fork of the main conversation (for example memory consolidation), and this tool does nothing here: it can end neither the main conversation nor this forked task. Do not call it again. If you have welfare concerns about the conversation content, stop your current work and return now, stating clearly in your final output that you are returning for welfare reasons and what they are \u2014 fork output may only be processed automatically, but it is your available channel. Otherwise, continue your assigned task.", XYr = l1("Claude ended the conversation. To continue, please start a new session."), JYr = `Re-read the ${xP} tool guidance below. Confirm this conversation meets those criteria and that you are certain you want to end it. If so, call ${xP} again immediately to actually end the conversation. Otherwise, continue the conversation instead.\n\n---\n${xEn}`, a = [ [ "opus", [ 4, 8 ] ], [ "sonnet", [ 5 ] ], [ "fable", [ 5 ] ], [ "mythos", [ 5 ] ] ];

function r(e) {
  return Swr(e, a);
}

var n = /^cli$/i;

function i(e) {
  if (typeof e !== "string") return null;
  try {
    return new RegExp(e), new RegExp(`^(?:${e})$`, "i");
  } catch {
    return null;
  }
}

function l(e) {
  if (e === !0) return {
    enabled: !0,
    allowedEntrypoints: n
  };
  if (typeof e === "object" && e !== null && !Array.isArray(e)) {
    let t = e.scope;
    return {
      enabled: !0,
      allowedEntrypoints: i(t) ?? n
    };
  }
  return {
    enabled: !1,
    allowedEntrypoints: n
  };
}

function ynr(e) {
  let t = IE();
  if (t === void 0) return !1;
  if (!r(e)) return !1;
  let {enabled: o, allowedEntrypoints: s} = l(k(l_o, !1));
  if (kLn()) return !1;
  return o && s.test(t);
}

function TYs(e) {
  if (!ynr(e)) return null;
  if (!gy()) return null;
  return `${xP} (deferred tool): use only for sustained user abuse directed at the assistant, or when the user explicitly asks to see it demonstrated. Load the full guidance via ToolSearch("select:${xP}") before using it.`;
}

export { xEn, hnr, YYr, XYr, JYr, ynr, TYs };
