// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, cg } from "./chunk-3pqddg8f.js";

import { I } from "./chunk-5wbhf1bk.js";

import { qo, rn } from "./chunk-yxennhe9.js";

import { _le } from "./chunk-sknv0v0m.js";

import { a } from "./chunk-j016gcgm.js";

import { rmr, ACe, rh, CCe, bce, zCt, R8t } from "./chunk-bkx9v5fh.js";

import { Mp } from "./chunk-84yp45y8.js";

import { HV, yPt, nC } from "./chunk-bjsp1prn.js";

import { Yst } from "./chunk-z09tf6qf.js";

import { Mle, gtt } from "./chunk-jtgrm34s.js";

import { zVr } from "./chunk-d2yv8htt.js";

import { utt, bDe, o9o } from "./chunk-taqh33hd.js";

import { N, D } from "./chunk-hmqkrrtz.js";

function dTe() {
  return !a.CLAUDE_DISABLE_ADOPT;
}

var u = 50;

function l(e) {
  let o = [];
  for (let n of cg()) {
    if (e && !e(n)) continue;
    o.push({
      label: "scheduled task",
      detail: `${g(n)} \xb7 ${qo(n.prompt, u, !0)}`
    });
  }
  return o;
}

function g(e) {
  if (e.recurring) return nC(e.cron);
  let o = HV(e.cron), n = o && yPt(o, new Date(e.createdAt), {
    oneShot: !0
  });
  if (!n) return nC(e.cron);
  let t = Math.max(0, n.getTime() - Date.now());
  return `Runs once in ${rn(t, {
    mostSignificantOnly: !0
  })}`;
}

function U5o(e, {includeDream: o = !1} = {}) {
  let n = [];
  for (let t of Object.values(e)) {
    if (!rh(t) || t.type === "remote_agent") continue;
    if (!o && t.type === "dream") continue;
    if (t.type === "monitor_ws" && t.ambient) continue;
    if (bce(t)) continue;
    if (zCt(t)) continue;
    n.push({
      label: ACe(t.type),
      detail: qo(t.description, u, !0)
    });
  }
  return n.push(...l()), n;
}

var k = {
  agent: "subagent",
  workflow: "workflow",
  shell: "shell",
  monitor: "monitor",
  mcp: "MCP task"
};

function B5o() {
  let e = Yst(), {items: o, kinds: n} = e, t = [];
  for (let r of o) {
    if (r.kind === "todo" || r.doneAt !== void 0) continue;
    t.push({
      label: k[r.kind],
      detail: qo(r.label, u, !0)
    });
  }
  if (n.includes("auto_mode_scan")) t.push({
    label: rmr.auto_mode_scan,
    detail: "environment scan for /auto-mode-setup"
  });
  if (n.includes("local_memory_import")) t.push({
    label: rmr.local_memory_import,
    detail: "still reading local memory notes; running the command again later continues it"
  });
  return t.push(...l()), t;
}

function h(e) {
  return e.type === "monitor_ws" && e.ambient === !0 && !Mle(e);
}

function m(e) {
  return Object.values(e).filter(rh).filter(o => o.type !== "remote_agent" && o.type !== "dream").filter(o => !h(o));
}

function b(e) {
  if (e.status !== "running" && e.status !== "pending") return !1;
  if (CCe(e)) return !1;
  if (e.type === "in_process_teammate" && e.evictAfter === 0 && e.currentWorkAbortController === void 0 && bce(e)) return !1;
  if (e.type === "remote_agent" || e.type === "dream") return !1;
  if (e.type === "mcp_task" && e.abortController === void 0) {
    if (e.protocol === "sep2663") {
      if (e.parked === !0) return !1;
      return e.sidecarSessionId !== q() || e.sidecarProjectDir !== _le();
    }
    return !1;
  }
  if (e.type === "monitor_ws" && e.ambient === !0) return !1;
  return !0;
}

function S(e) {
  return Mle(e) && e.frameLive !== void 0;
}

function WVr() {
  return dTe() && !a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF;
}

function T(e) {
  return Mle(e) && gtt(e);
}

function j5o(e) {
  return Object.values(e).some(T) || o9o() || bDe().size > 0;
}

function WHe(e) {
  return Object.values(e).some(b);
}

function $L(e, {sessionCrons: o = !0} = {}) {
  let n = m(e), t = o ? cg().length : 0, r = D(n.map(p)), i = new Set(n.flatMap(c => S(c) ? [ c.frameLive.slug ] : [])), s = !dTe() ? 0 : N(D([ ...utt(), ...bDe() ]), c => !i.has(c));
  if (s > 0 && !r.includes("artifact_watch")) r.push("artifact_watch");
  let d = WVr() ? i.size + s : 0;
  if (t > 0) r.push("session_cron");
  let f = N(Object.values(e), R8t);
  return {
    count: n.length + t + s,
    restartableCount: f,
    kinds: r,
    drainableMonitors: d,
    carriedMonitors: i.size + s
  };
}

function p(e) {
  if (e.type === "monitor_ws" && e.ambient) return "artifact_watch";
  return Mp(e) && e.kind === "monitor" ? "monitor" : e.type;
}

function t2e(e, o) {
  let n = m(e), t = l(o?.cronFilter), r = n.length + t.length, i = D(n.map(p));
  if (t.length > 0) i.push("session_cron");
  let s = [ zVr(n), t.length ? `${t.length} ${I(t.length, "loop")}` : "" ];
  return {
    count: r,
    kinds: i,
    summary: s.filter(Boolean).join(", ")
  };
}

function W5o() {
  let {tasks: e} = Yst();
  if (e === 0) return;
  return `Detached \u2014 ${e} ${I(e, "task")} still running. Run \`claude agents\` to see your background sessions.`;
}

export { dTe, U5o, B5o, WVr, j5o, WHe, $L, t2e, W5o };
