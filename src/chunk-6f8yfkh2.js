// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { I } from "./chunk-5wbhf1bk.js";

import { u3e } from "./chunk-yk8mtyzg.js";

import { z_t, Sjt } from "./chunk-73wnf5r6.js";

import { rn } from "./chunk-yxennhe9.js";

function nGo({targetName: e}) {
  return `${e} could not check this again as it was about to remove it, so nothing was removed. Send the command again.`;
}

function rGo({targetName: e}) {
  return `${e} removed part of what this names and stopped, because the rest had changed. Send the command again for the rest.`;
}

function jgn({field: e, targetName: n}) {
  let t = `${e} is not available on ${n}.`;
  return e === "run_in_background" ? `${t} The calling session has no way to poll a background task there. Run it in the foreground, or in the session's own environment.` : t;
}

function oGo({toolName: e, targetName: n}) {
  return `${e} on ${n} is served for Claude Code remote tool execution and must be called through a cloud session's forwarder.`;
}

function sGo({toolName: e, targetName: n}) {
  return `${e} on ${n} speaks a different remote tool execution protocol version than the caller. Update Claude Code on both machines.`;
}

function a1r({stoppedBy: e, targetName: n}) {
  switch (e) {
   case "deadline":
    return `The call was stopped on ${n} at its deadline before the command started \u2014 nothing ran.`;

   case "shutdown":
    return `The call was stopped because Claude Code on ${n} is shutting down, before the command started \u2014 nothing ran.`;

   case "cancel":
    return `The call was cancelled on ${n} before the command started \u2014 nothing ran.`;
  }
}

function pXn({targetName: e, why: n}) {
  return `${n === "gone" ? `That permission request is no longer pending on ${e}` : `This approval answers a different request than the one pending on ${e}`}, so nothing ran. Run the tool again if it is still needed.`;
}

function iGo({requestedMs: e, appliedMs: n, targetName: t}) {
  let s = rn(e, {
    hideTrailingZeros: !0
  }), o = rn(n, {
    hideTrailingZeros: !0
  });
  if (s === o) s = `${e}ms`, o = `${n}ms`;
  return `The ${s} timeout this call asked for exceeds the ${o} ${t} allows a command \u2014 it was held to ${o}.`;
}

function aGo({targetName: e, violationRecorded: n}) {
  return `This command ran on ${e} inside Claude Code's sandbox, which is switched on there. The sandbox can block network connections and file writes outside the working directories.${n ? " The sandbox_violations lines in the output name what it blocked." : ""} If that is why the command failed, running it again unchanged will fail the same way \u2014 tell the user what was blocked instead of guessing at another cause.`;
}

function lGo({targetName: e, shellId: n, outputPath: t, limitMs: s}) {
  let o = rn(s, {
    hideTrailingZeros: !0
  });
  return `Command running in the background on ${e} with ID: ${n}. Output is being written there to: ${t}. This session is not notified when it finishes. Whether it is still running is told by ${e} itself: not by that file, which holds only what the command has printed (a program that buffers its output shows it there only when it flushes), and never by pgrep, ps, pkill or a network request from a later command, because where ${e} sandboxes commands each command sees only its own processes and its own network, so a command that is running looks absent from there. It is stopped after ${o} in the background, or earlier if ${e} stops serving this session.`;
}

function Wgn(e, n) {
  switch (e) {
   case "caller_stopped":
    return "by this session";

   case "stopped_by_person":
    return `by the person at ${n}`;

   case "time_limit":
    return "at its time limit";

   case "serving_ended":
    return `when ${n} quit serving`;

   case "serving_off":
    return "when serving shut off";

   case "serving_check_failed":
    return `when ${n} could not check whether it still serves this session`;

   case "call_stopped":
    return "when its call ended";
  }
}

function fXn(e, {targetName: n, max: t}) {
  switch (e) {
   case "full":
    return `${n} already has ${t} background ${I(t, "command")} running or waiting for approval for this session, the most it takes at a time. Nothing was started. Wait for one to finish, or run this one in the foreground.`;

   case "sandbox_down":
    return `${n} has Claude Code's sandbox switched on, but the sandbox is not running there, so it starts no command in the background. Nothing was started.`;

   case "unavailable":
    return `${n} cannot run a command in the background for this session right now. Nothing was left running. Run it in the foreground.`;
  }
}

function dGo({toolName: e, targetName: n}) {
  return `${e} is not served on ${n}.`;
}

function zgn({targetName: e, kind: n, subject: t}) {
  switch (n) {
   case "read":
    return `${e} does not let a cloud session read the credential that authorizes this connection (${t}). Nothing was read.`;

   case "write":
    return `${e} does not let a cloud session change the credential file that authorizes this connection (${t}). Nothing was written.`;

   case "keychain":
    return `${e} does not let a cloud session query its credential store (\`${t}\`). Nothing was run.`;

   case "keychain_files":
    return `${e} does not let a cloud session open this Mac's keychain files (${t}). Nothing was read or written.`;

   case "credential_store_files":
    return `${e} does not let a cloud session open this computer's Credential Manager files (${t}). Nothing was read or written.`;

   case "exec_ingest":
    return `${e} does not let a cloud session write to ${t}, which its background daemon would execute. Nothing was written.`;

   case "personal_credential":
    return `${e} does not let a cloud session read or change its SSH keys, cloud-provider credentials or saved developer-tool logins (${t}). Nothing was read or written.`;
  }
}

function cGo({targetName: e}) {
  return `${e} does not let a cloud session change its Claude Code settings files, or the folder that holds them. Nothing was run. Tell the user: those settings can only be changed on ${e} itself.`;
}

function uGo({targetName: e}) {
  return `${e} does not let a cloud session change its Claude Code settings files. Nothing was changed. Tell the user: those settings can only be changed on ${e} itself.`;
}

function pGo({targetName: e, toolName: n}) {
  return `${e} could not finish checking its permission rules for this ${n} call, so the call was not run and nobody was asked. Sending the same call again is unlikely to help. Tell the user: this is an error on ${e}, not a refusal by one of its rules.`;
}

function fGo({targetName: e, limit: n}) {
  return `${e} already keeps state for ${n} cloud ${I(n, "session")}, the most it holds at once \u2014 this session was not added and nothing ran. Tell the user: restarting Claude Code on ${e} frees those seats. Do not retry in a loop.`;
}

function mGo({targetName: e}) {
  return `Claude Code on ${e} has only just started and had not finished loading the hooks and settings it checks every call against before this call's time ran out \u2014 nothing ran. Send the call again in a moment. If it is refused this way again, tell the user that Claude Code on ${e} is not finishing its start-up.`;
}

function gGo({targetName: e}) {
  return `${e} changed how it allows this session's calls while this one was being checked \u2014 nothing ran. Send the call again.`;
}

function l1r({targetName: e}) {
  return `${e} is set to run this session's calls only inside a sandbox, and the sandbox is not available \u2014 nothing ran. Sending the call again will not change that. Tell the user that the sandbox on ${e} is not available, and that its owner can check Claude Code there.`;
}

function hGo({targetName: e}) {
  return `${e} could not read all of its settings when this call arrived, so it could not tell whether this session's calls may run there or only inside a sandbox \u2014 nothing ran. The call can be sent again in a moment. If it is refused this way again, tell the user that Claude Code on ${e} cannot read its settings, and that its owner can check the settings files there and whether the organization's settings have loaded.`;
}

function yGo({targetName: e, leg: n, endedAsk: t, ageMs: s}) {
  let o = n === "call" ? "This call" : "This answer to a permission request", a = t ? "the request it answered was withdrawn and nothing ran. Send the call again if it is still wanted." : n === "call" ? "nothing ran. Send it again if it is still wanted." : "nothing ran for it.";
  return s === void 0 ? `${o} reached ${e} over a connection that could not be dated against the service's clock, so whether it is still current is unknown \u2014 ${a}` : `${o} reached ${e} ${rn(s)} after it was sent (the machine was asleep, offline, or reconnecting), after this session had stopped waiting for it \u2014 ${a}`;
}

function aZe({targetName: e, status: n, subtype: t}) {
  let s = `${u3e({
    status: n,
    payloadType: "control_request",
    subtype: t
  })} Nothing was done for it on ${e}. Sending it again will not change that: tell the user instead of retrying.`;
  return n === "UNSPECIFIED" && t === "remote_tool_call" ? `${s} Retrying, reconnecting ${e} or changing a setting on it is unlikely to fix this, and a new session is unlikely to help: ${e} got no confirmation it could read from Anthropic's service that this session is the sender. Tell the user that, ask them to report it to Anthropic, and continue without ${e}.` : s;
}

function _Go({targetName: e, state: n}) {
  switch (n) {
   case "declined":
    return `This session's attached repositories were not marked trusted, so its calls to ${e} are not accepted \u2014 nothing was done for this one. Sending it again will not change that: ask the person to answer the trust question, and tell them what stays blocked until they do.`;

   case "nothing_to_mark":
   case "not_marked":
    return `This session has repositories or files attached that its owner has not said they trust, so its calls to ${e} are not accepted. Nothing was done for this one. Sending the same call again will not change that. Call ${Sjt} once. If it refuses with a trust question, put the question to the person: their yes clears this. If it lists folders, call ${z_t} for the folder this session was using: the person's Allow clears this. If you have neither tool, if neither asks the person anything, or if ${e} still refuses after their answer, tell them plainly what stays blocked, and that a new session with no repository and none of their files can run a quick command.`;
  }
}

function bGo({targetName: e, askAgeMs: n, windowMs: t, dated: s}) {
  let o = Math.round(t / 36e5), a = Math.floor(n / 864e5), i = a >= 2 ? `${a} days` : "more than a day", r = s ? `${i} after the request was raised \u2014 longer than an answer` : `over a channel that carries no delivery time, ${i} after the request was raised \u2014 longer than such an answer`;
  return `This approval reached ${e} ${r} is honoured for (${o} ${I(o, "hour")}) \u2014 so the request was withdrawn and nothing ran. Send the call again if it is still wanted.`;
}

function SGo({targetName: e, limit: n}) {
  return `${e} already has ${n} approval ${I(n, "request")} from this session waiting, the most it holds at once, so it did not ask about this call and this call was not run. Send it again once some of them have been answered.`;
}

function Kte({targetName: e, reason: n}) {
  switch (n) {
   case "evicted":
    return `An older pending approval on ${e} was withdrawn because too many were waiting \u2014 it did not run.`;

   case "tool_withdrawn":
    return `The tool is no longer offered on ${e} \u2014 nothing ran.`;

   case "host_unbound":
    return `${e} stopped serving this session while the permission request was open \u2014 nothing ran.`;

   case "host_stopped":
    return `Claude Code on ${e} stopped while the permission request was open \u2014 nothing ran.`;

   case "stale_answer":
    return `The answer to this permission request reached ${e} after the session had stopped waiting for it \u2014 the request was withdrawn and nothing ran.`;

   case "replaced_by_retry":
    return `A newer copy of this call now carries the permission request on ${e}; this one was withdrawn and nothing ran under it.`;

   case "record_evicted":
    return `${e} no longer holds a record of this permission request \u2014 nothing ran under it.`;

   case "no_answer":
    return `Nobody answered the permission request for this call on ${e} in the time the session waits \u2014 it was withdrawn and nothing ran.`;

   case "host_withdrawn":
    return `Claude Code on ${e} left the session while the permission request was open \u2014 nothing ran.`;

   case "superseded":
    return `A newer Claude Code on ${e} took over while the permission request was open \u2014 nothing ran.`;

   case "unrecognized":
    return `The permission request on ${e} ended for a reason this version of Claude Code does not recognise \u2014 nothing is known to have run.`;
  }
}

export { nGo, rGo, jgn, oGo, sGo, a1r, pXn, iGo, aGo, lGo, Wgn, fXn, dGo, zgn, cGo, uGo, pGo, fGo, mGo, gGo, l1r, hGo, yGo, aZe, _Go, bGo, SGo, Kte };
