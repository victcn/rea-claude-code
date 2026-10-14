// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { he } from "./chunk-3pqddg8f.js";

import { ju } from "./chunk-5sbf9djq.js";

import { randomBytes as i } from "crypto";

function qs(e) {
  return e === "completed" || e === "failed" || e === "killed";
}

var Uoo = new Set([ "local_agent", "remote_agent", "in_process_teammate", "local_workflow" ]);

function pF(e) {
  return Object.values(e).some(Ost);
}

function yMn(e) {
  return Object.values(e).some(t => Ost(t) && t.status !== "paused" && !(t.type === "in_process_teammate" && t.identity?.resumableAgentId === void 0) && !(t.type === "remote_agent" && (t.ultraplanPhase === "needs_input" || t.ultraplanPhase === "plan_ready" || t.isUltraplan && t.restoredOnResume)));
}

function Ost(e) {
  return Uoo.has(e.type) && !qs(e.status) && !(e.type === "in_process_teammate" && e.isIdle) && !(e.type === "remote_agent" && e.isLongRunning);
}

function Boo(e) {
  return Object.values(e).some(qfr);
}

function qfr(e) {
  return e.type === "local_bash" && !qs(e.status);
}

var r = {
  local_bash: "b",
  local_agent: "a",
  remote_agent: "r",
  in_process_teammate: "t",
  local_workflow: "w",
  monitor_mcp: "m",
  monitor_ws: "s",
  mcp_task: "k",
  dream: "d",
  auto_mode_scan: "e",
  local_memory_import: "n"
}, n = "0123456789abcdefghijklmnopqrstuvwxyz";

function Mst(e, t) {
  let s = r[e];
  return s !== void 0 && t.length === 9 && t.startsWith(s) && t.slice(s.length).split("").every(a => n.includes(a));
}

function XE(e) {
  let t = r[e] ?? "x", s = i(8), a = t;
  for (let o = 0; o < 8; o++) a += n[s[o] % n.length];
  return a;
}

function C_(e, t, s, a) {
  return {
    id: e,
    type: t,
    status: "pending",
    description: s,
    toolUseId: a,
    startTime: Date.now(),
    ...!he() && {
      outputFile: ju(e)
    },
    outputOffset: 0,
    notified: !1
  };
}

export { qs, Uoo, pF, yMn, Ost, Boo, qfr, Mst, XE, C_ };
