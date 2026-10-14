// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { To, ry } from "./chunk-vxr6sv7z.js";

import { Ze } from "./chunk-3pqddg8f.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { Vn, FR, ap, a8e, Jz, lU } from "./chunk-xywp7esx.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { kC } from "./chunk-sfvypv11.js";

import { Ade, NB, xW, dxn, bot, bre, sR, Z2, sO, xe } from "./chunk-84yp45y8.js";

import { de } from "./chunk-5ydr99q3.js";

import { LA, LJ } from "./chunk-c0na4e14.js";

import { yne } from "./chunk-ajb8xn5x.js";

import { kTe } from "./chunk-p7tz7zfg.js";

import { Na } from "./chunk-sz89b5r8.js";

async function L2t(t, e, a, o = {}) {
  let {extraMessages: l, forkOrigin: A, narrowCanUseTool: s} = o;
  if (e.getAppState().endedByModel) return m("subagent_launch", "subagent_fork_ended_by_model"), 
  null;
  if (Na()) return m("subagent_launch", "subagent_fork_coordinator_mode"), null;
  let i = e.renderedSystemPrompt;
  if (!i) {
    if (i = await U(e), !i) return m("subagent_launch", "subagent_fork_prompt_missing"), 
    null;
  }
  let r = e.agentLifecycle.allocateName(_(o.nameHint ?? t)), u = (typeof o.description === "function" ? o.description(r) : o.description ?? t).replace(/\s+/g, " ").trim(), d = u.length > 50 ? ne(u, 49) + "\u2026" : u, n = ry(r), {taskRegistry: p} = e, w = Date.now(), f = ap(e.agentContext) + 1, y = NB(xW.model, e.options.mainLoopModel, "inherit", de(e).mode), C = Ze(), S = bot(e, C), c = bre({
    outputFileReadable: sO(e.options.tools),
    ownerCanContinueAgents: S,
    agentId: n,
    ownerAgentId: C,
    spawnDepth: f,
    description: d,
    prompt: t,
    model: y,
    selectedAgent: xW,
    taskRegistry: p,
    toolUseId: e.toolUseId,
    sessionScratch: e.session.sessionScratch
  }), T = c.abortController;
  if (e.agentLifecycle.registerName(r, To(n)), s) Vn().canUseToolNarrowings.set(n, s);
  Vn().agentSpawned.emit({
    agentId: n,
    agentType: xW.agentType,
    parentAgentId: e.agentId,
    taskRegistry: p
  });
  let P = {
    prompt: t,
    resolvedAgentModel: y,
    isBuiltInAgent: !0,
    startTime: w,
    agentType: xW.agentType,
    isAsync: !0,
    agentDepth: f,
    callerCanContinueAgents: S,
    source: xW.source
  }, k = {
    agentId: n,
    parentAgentId: e.agentId,
    depth: f,
    ...a8e(e) && {
      spawnedByMainThread: !0
    },
    parentSessionId: kC(),
    agentType: "subagent",
    subagentName: xW.agentType,
    displayName: r,
    isAsync: !0,
    isBackgroundAgent: !0,
    isBuiltIn: !0,
    ...Jz(e.agentContext) && {
      forkOfMainConversation: !0
    },
    invocationKind: "spawn",
    invocationEmitted: !1,
    ...lU(e.agentContext)
  }, b = p.takeConcurrencySlot();
  return FR(k, () => LJ({
    taskId: c.agentId,
    abortController: T,
    makeStream: (I, M, h) => LA({
      onQueryProgress: M,
      onStreamTokenEstimate: h,
      onModelRestricted: kTe(xW.agentType, e.appendSystemMessage),
      agentDefinition: xW,
      turnPrompt: t,
      promptMessages: [ ...l ?? [], xe({
        content: [ {
          type: "text",
          text: dxn(t)
        } ]
      }) ],
      toolUseContext: e,
      canUseTool: s ? s(a) : a,
      isAsync: !0,
      querySource: yne(xW.agentType, !0),
      forkOrigin: A,
      spawnedBySkill: e.options.spawnedBySkill ?? e.options.activeSkill,
      spawnedByForkedSkill: e.options.spawnedByForkedSkill,
      model: "inherit",
      override: {
        systemPrompt: i,
        parentSystemPrompt: !0,
        agentId: To(c.agentId),
        agentContext: k,
        abortController: T,
        requireCanUseTool: s ? !0 : void 0
      },
      availableTools: e.options.tools,
      forkContextMessages: e.messages,
      useExactTools: !0,
      onCacheSafeParams: I,
      description: d,
      name: r
    }),
    metadata: P,
    description: d,
    toolUseContext: e,
    taskRegistry: p,
    agentIdForCleanup: n,
    enableSummarization: !0,
    getWorktreeResult: async () => ({}),
    onRunSettled: b
  })), g("subagent_launch"), {
    agentId: n,
    name: r
  };
}

async function U(t) {
  let e = t.getAppState(), a = e.agent ? e.agentDefinitions.activeAgents.find(l => l.agentType === e.agent) : void 0, o = await sR(t.options.tools, t.options.mainLoopModel);
  return Z2({
    mainThreadAgentDefinition: a,
    toolUseContext: t,
    customSystemPrompt: t.options.customSystemPrompt,
    defaultSystemPrompt: o,
    appendSystemPrompt: t.options.appendSystemPrompt,
    skillsPersistencePrompt: Ade(t.options.tools)
  });
}

function _(t) {
  return t.trim().split(/\s+/).slice(0, 3).join("-").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "fork";
}

export { L2t };
