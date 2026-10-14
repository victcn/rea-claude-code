// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { MOs } from "./chunk-xywp7esx.js";

import { Ld } from "./chunk-q6wab2jw.js";

import { hp, w3 } from "./chunk-84yp45y8.js";

import { Hp } from "./chunk-bkx9v5fh.js";

function jbt(e, n, t) {
  return () => {
    if (t?.aborted === !0) return;
    let r = n();
    return e.getCommandQueueSnapshot().some(s) || e.someSubmissionInFlight(i => o(i, r)) || (t === void 0 ? e.getInFlightDrainBatchStanding() !== "appended" && e.someInFlightDrainCommand(i => o(i, r)) : e.getInFlightDrainBatchStanding() === "passed-over" && e.someInFlightDrainCommand(s)) ? void 0 : r;
  };
}

function o(e, n) {
  return s(e) && (e.uuid === void 0 || n.findLast(t => t.uuid === e.uuid) === void 0);
}

function s(e) {
  if (!hp(e)) return !1;
  switch (e.mode) {
   case "task-notification":
    return !1;

   case "poll-event":
    {
      let n = e.pollEvent?.provenance?.authority;
      return n !== void 0 && n !== "peer-agent" && n !== "world-event";
    }

   case "prompt":
   case "bash":
    return MOs(e);

   case "orphaned-permission":
    return !0;
  }
  return !0;
}

function e_n({recipientName: e, leaderMode: n, leaderAutoPickedByLevel: t, proactivityLevel: r, tasks: i}) {
  let d = m(e, i) ? n : w3(n, r, t), a = Ld(d);
  return a === "plan" ? "default" : a;
}

function m(e, n) {
  return Object.values(n).some(t => Hp(t) && t.status === "running" && t.identity.agentName === e && t.paneTeardown === void 0 && t.identity.resumableAgentId !== void 0);
}

export { jbt, e_n };
