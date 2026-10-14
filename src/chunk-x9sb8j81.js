// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ry } from "./chunk-vxr6sv7z.js";

import { q } from "./chunk-3pqddg8f.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { R$t, t } from "./chunk-kawq2919.js";

import { dr } from "./chunk-y3nc3daq.js";

import { bU } from "./chunk-3kb22va7.js";

import { mDs } from "./chunk-sfvypv11.js";

import { Tt } from "./chunk-9tdwgnpn.js";

import { de } from "./chunk-5ydr99q3.js";

import { Hp, Mn } from "./chunk-bkx9v5fh.js";

import { hP } from "./chunk-pegykqwq.js";

import { $Ne, JHn } from "./chunk-48711xn9.js";

import { Xk } from "./chunk-xd492737.js";

import { XE, C_ } from "./chunk-05wvva46.js";

var S = 50;

function GQn(o) {
  let s = R$t(o, S), e = ne(s, S);
  return e.length < s.length ? `${e}...` : e;
}

function b(o, s) {
  if (s) return "plan";
  if (o === "plan" || o === "dontAsk") return "default";
  return o;
}

async function UGr(o, s) {
  let {name: e, teamName: d, prompt: I, color: k, planModeRequired: l, model: w} = o, {taskRegistry: A} = s, r = bU(e, d), c = XE("in_process_teammate"), f = o.resumableAgentId ?? ry(e);
  t(`[spawnInProcessTeammate] Spawning ${r} (taskId: ${c})`);
  try {
    let n = dr(), a = q(), P = {
      agentId: r,
      agentName: e,
      teamName: d,
      color: k,
      planModeRequired: l,
      parentSessionId: a,
      resumableAgentId: f
    }, C = mDs({
      agentId: r,
      agentName: e,
      teamName: d,
      color: k,
      planModeRequired: l,
      parentSessionId: a,
      hasTaskListTools: hP() && s.rootToolSurface.tools.some(p => Tt(p, Xk)),
      abortController: n
    });
    if ($Ne()) JHn(r, e, a);
    let M = o.description || GQn(I), _ = {
      ...C_(c, "in_process_teammate", M, s.toolUseId),
      type: "in_process_teammate",
      status: "running",
      identity: P,
      spawnedWith: o.spawnedWith,
      prompt: o.shownPrompt ?? I,
      model: w,
      abortController: n,
      awaitingPlanApproval: !1,
      permissionMode: o.permissionMode ?? b(de(s).mode, l),
      isIdle: !1,
      lastReportedToolCount: 0,
      lastReportedTokenCount: 0,
      pendingUserMessages: []
    };
    A.register(_);
    let y = s.getAppState(), i = y.agentNameRegistry.get(e);
    if (i !== f) {
      let p = i !== void 0 ? y.tasks[i] : void 0, T = i !== void 0 && (p?.status === "running" || Mn(p) || Object.values(y.tasks).some(u => Hp(u) && u.status === "running" && u.identity.resumableAgentId === i)) ? s.agentLifecycle.allocateName(e) : e;
      if (T !== e) t(`[spawnInProcessTeammate] name "${e}" already routes to live ${i}; registry entry uses "${T}" instead`);
      s.agentLifecycle.registerName(T, f);
    }
    return t(`[spawnInProcessTeammate] Registered ${r} in AppState`), g("swarm_in_process_spawn"), 
    {
      ok: !0,
      agentId: r,
      identity: P,
      taskId: c,
      abortController: n,
      teammateContext: C
    };
  } catch (n) {
    let a = n instanceof Error ? n.message : "Unknown error during spawn";
    return t(`[spawnInProcessTeammate] Failed to spawn ${r}: ${a}`), m("swarm_in_process_spawn", "spawn_failed"), 
    {
      ok: !1,
      agentId: r,
      error: a
    };
  }
}

export { GQn, UGr };
