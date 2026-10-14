// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
var Th = {
  "ask_first.host_rule"({name: e, rules: t}) {
    return `A permission rule of this session (${t}) asks before it uses ${e}'s tools.`;
  },
  "ask_first.host_rule.cannot_ask"({name: e, rules: t}) {
    return `The rule ${t} asks before this session uses ${e}, and this context cannot ask.`;
  },
  "plan_mode.entered_while_asking"(e) {
    return `This session entered plan mode while the approval was pending; a state-changing ${e} call is not approved from plan mode.`;
  },
  "away.until"(e) {
    return e === void 0 ? "in this turn" : `until a later attached-machines note says ${e} is reachable again, or the user says it is back or asks you to try again`;
  },
  "away.ending"() {
    return "Check once more only when the user says it is back or asks you to try again.";
  },
  host_unresponsive({name: e, checks: t, intervalMs: n, whileRunning: s, stillConnected: o, returnNoted: a}) {
    if (o) return `${e} is still connected, but its reply to this command was not received (${t} checks about ${Math.round(n / 1e3)} s apart got no answer, though ${e} answered a liveness check). Its state is unknown \u2014 it may have completed, failed, or still be running; the reply may have been too large to deliver. Do not re-run non-idempotent commands on ${e} just to see the output. If the output may be large, try a narrower command (part of a file, a filter, or a smaller image); otherwise do the rest of the task without ${e}, and tell the user what you could not verify.`;
    let r = `${e} stopped answering ${s ? "while this command was running" : "after this command was sent to it"} (${t} checks about ${Math.round(n / 1e3)} s apart went unanswered). Its state is unknown \u2014 it may have completed, failed, ${s ? "or still be running" : "never started, or still be running"}.`;
    return a ? `${r} Do not call ${e} again ${Th["away.until"](e)}; then check what this command did before repeating it. Meanwhile do the rest of the task without ${e}, and tell the user what is blocked and what you could not verify.` : `${r} Do not retry non-idempotent commands on ${e} until ${e} reconnects, and do not call it again ${Th["away.until"]()}: do the rest of the task without ${e}, and tell the user what is blocked and what you could not verify. ${Th["away.ending"]()}`;
  },
  host_asleep({name: e, whileRunning: t, withdrawn: n, returnNoted: s}) {
    let o = n ? `This session has stopped waiting for it and withdrew its request: the command will be stopped when ${e} wakes, and may have partly run. Do not repeat it without checking.` : "The command was not cancelled: it is paused with the machine and will most likely continue when it wakes; what it had already done stays done. This session has stopped waiting for it. Do not repeat it, here or there.", a = `${e} went to sleep ${t ? "while this command was running" : "after this command was sent to it"} (it said so itself). ${o}`;
    return s ? `${a} Do not call ${e} again until a later attached-machines note says ${e} is reachable again, or the user says it is back or asks you to try again; then check what this command did before sending anything else to ${e}. Meanwhile do the rest of the task without ${e}, and tell the user what is paused.` : `${a} Do not call ${e} again in this turn: do the rest of the task without ${e}, and tell the user what is paused. Check once more only when the user says it is back or asks you to try again, and then check what this command did before sending anything else to ${e}.`;
  },
  "unverified_refusal.call_phase"({name: e, whileRunning: t}) {
    return `A reply that could not be verified says this session is no longer paired with ${e}. ${t ? "It was running there; whether it finished is unknown." : "The state of this command there is unknown \u2014 it may or may not have run."} Do not retry it on ${e} until ${e} re-announces, and do not call it again in this turn; continue with what you can do without it, and tell the user you could not confirm whether it ${t ? "finished" : "ran"}.`;
  },
  approval_no_longer_covers(e) {
    return `A permission rule changed while this was waiting; nothing ran on ${e}. Ask again to get a fresh approval.`;
  },
  "in_progress.checkin"(e) {
    return `Checking on ${e} \u2014 the call is still with it\u2026`;
  },
  "ask_seat.waiting"(e) {
    return `Waiting to send to ${e} \u2014 earlier calls there still need a permission answer\u2026`;
  },
  "ask_seat.sending"(e) {
    return `Sending to ${e}\u2026`;
  },
  "reconnect_hold.waiting"({name: e, holdMs: t}) {
    return `Waiting for ${e} to come back (up to ${Math.round(t / 1e3)} s)\u2026`;
  },
  "reconnect_hold.ended"(e) {
    return `Stopped waiting for ${e}.`;
  },
  "reconnect_hold.gave_up"({name: e, holdMs: t}) {
    return `This call already waited up to ${Math.round(t / 1e3)} s for ${e} to come back; if this session is later told that ${e} is back, use it again from then.`;
  },
  "card.standing_unavailable"({name: e, kind: t}) {
    return `Always allow isn\u2019t available for ${t === "command" ? "commands run" : "files"} on ${e} yet \u2014 this approves once.`;
  },
  no_answer({name: e, afterMs: t, waitAnnounced: n}) {
    let s = i(t), o = `No one approved or denied this within ${s}, so it was not run on ${e}. Nothing changed there, and this session has stopped waiting for an answer to this request.`, a = `Assume the user is away: a further call to ${e} that needs approval, whether this one again, another command or a file edit, would wait up to ${s} and close the same way. Finish only what needs no approval on ${e}, then stop and tell the user which calls were not run`;
    return n ? `${o} ${a} and that you will ask again when they say so.` : `${o} ${e} announced no wait of its own for approvals, so this session's ${s} applied. ${a}, that you will ask again when they say so, and that making sure Claude Code on ${e} is up to date (or the Claude desktop app, if that is what runs it there) may give them longer to answer.`;
  },
  "ask_ended.notice"({name: e, toolName: t, reason: n, afterMs: s}) {
    return `${t} on ${e} was not run: ${h(e, t, n, s)}.`;
  },
  withdrawn({name: e, reason: t}) {
    let n = `The request to run this on ${e} was withdrawn \u2014 ${d(e, t)}; nothing ran there.`;
    switch (t) {
     case "superseded":
     case "stale_answer":
      return `${n} Send it again once. If that request is withdrawn too, ask the user how to proceed rather than retrying.`;

     case "evicted":
      return `${n} Send it again only after some of the approvals already waiting on ${e} have been answered.`;

     case "replaced_by_retry":
      return `${n} Do not send it again: the newer copy is already asking.`;

     case "no_answer":
     case "host_withdrawn":
     case "tool_withdrawn":
     case "host_unbound":
     case "host_stopped":
     case "record_evicted":
     case "unrecognized":
      return `${n} Ask the user how to proceed rather than retrying.`;
    }
  }
};

function h(e, t, n, s) {
  switch (n) {
   case "no_answer":
    return `nobody answered the approval within ${i(s)}`;

   case "host_withdrawn":
    return `${e} disconnected`;

   case "superseded":
    return `Claude Code on ${e} restarted`;

   case "evicted":
    return `${e} had too many approvals waiting`;

   case "tool_withdrawn":
    return `${e} stopped offering ${t}`;

   case "host_unbound":
    return `${e} is no longer available to this session`;

   case "host_stopped":
    return `Claude Code on ${e} quit`;

   case "stale_answer":
    return `the answer reached ${e} too late`;

   case "record_evicted":
    return `${e} no longer had a record of the approval`;

   case "replaced_by_retry":
    return "a newer copy of the request replaced this one";

   case "unrecognized":
    return `${e} ended the approval`;
  }
}

function i(e) {
  let t = Math.round(e / 1e3);
  return t >= 60 && t % 60 === 0 ? `${t / 60} min` : `${t} s`;
}

function d(e, t) {
  switch (t) {
   case "no_answer":
    return "no one answered it in time";

   case "host_withdrawn":
    return `Claude Code on ${e} left the session`;

   case "superseded":
    return `a newer Claude Code on ${e} took over from the one that asked`;

   case "evicted":
    return `too many requests were already waiting on ${e}`;

   case "tool_withdrawn":
    return `${e} stopped serving this tool`;

   case "host_unbound":
    return `${e} is no longer bound to this session`;

   case "host_stopped":
    return `Claude Code on ${e} was shutting down`;

   case "stale_answer":
    return `an answer was given but reached ${e} too late to count`;

   case "record_evicted":
    return `${e} no longer had a record of it`;

   case "replaced_by_retry":
    return "a newer copy of this request now carries the question";

   case "unrecognized":
    return `${e} let it go for a reason this build does not know`;
  }
}

export { Th };
