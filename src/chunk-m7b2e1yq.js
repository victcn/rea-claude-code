// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { To } from "./chunk-vxr6sv7z.js";

import { Ze, ve } from "./chunk-3pqddg8f.js";

import { Ye } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { UG, t } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { ya, FR, ap, a8e, lU } from "./chunk-xywp7esx.js";

import { kC } from "./chunk-sfvypv11.js";

import { NCn, Rkt, WD, Sde, NB, nl, cLe, D4, bot, bre, qZr, sO, ef, xe, nd, iNe } from "./chunk-84yp45y8.js";

import { dr, yIe, wi } from "./chunk-y3nc3daq.js";

import { Tt } from "./chunk-9tdwgnpn.js";

import { de, Tc } from "./chunk-5ydr99q3.js";

import { gf } from "./chunk-5sbf9djq.js";

import { Dst, YM } from "./chunk-bkx9v5fh.js";

import { oE } from "./chunk-cbnt62tv.js";

import { glt } from "./chunk-parjx3zq.js";

import { LA, LJ } from "./chunk-c0na4e14.js";

import { D3o } from "./chunk-nr71exww.js";

import { kTe } from "./chunk-p7tz7zfg.js";

import { qs } from "./chunk-05wvva46.js";

import { ho } from "./chunk-9r9vcg3z.js";

import { uZ } from "./chunk-ejckqh3m.js";

function Yqr(o, r, n) {
  return o.filter(s => s.type === "prompt" && Rkt(s, r) && Sde(s) && UG(s.name) && !(s.context === "fork" && n !== void 0 && WD(s) === n));
}

async function U2t(o, r, n) {
  if (o.type !== "prompt" || o.unqualifiedName != null) return null;
  if (iNe().length === 0) return null;
  if (!n.options.tools.some(a => Tt(a, ho))) return null;
  let s = Yqr(await ef(r, n.storageV5), o.name, n.options.spawnedBySkill);
  if (s.length === 0) return null;
  let l = s.map(a => {
    let e = a.name.slice(0, a.name.length - o.name.length - 1);
    return `- \`${a.name}\` \u2014 for files under ${e}/`;
  });
  return i("tengu_skill_scoped_variant_note", {
    variant_count: s.length
  }), xe({
    content: nd([ `Directory-scoped variants of the "${o.name}" skill exist in this repo:`, ...l, `The bare name always resolves to this unscoped skill; the variants are reachable only by their exact qualified names. If the files you are working on are under a variant's directory, invoke that variant now with the ${ho} tool and follow it instead \u2014 it carries that subtree's own instructions. If your changes span more than one variant's directory, run each matching variant.` ].join(`\n`)),
    isMeta: !0
  });
}

function svn(o, r, n) {
  if (n || r.spawnedByWorkflowRunId !== void 0 || uZ() || ve()) return !1;
  return o.background ?? !0;
}

async function ivn({agentId: o, agentDefinition: r, command: n, description: s, prompt: l, promptMessages: a, context: e, canUseTool: c, getAppState: k, permissionLayers: m, readFileState: b, availableTools: C, webFetchReadmissionAllowed: y, spawnedBySkill: u, recordInvocationOnSuccess: A, frozenCommandDenies: T}) {
  let {taskRegistry: d} = e, L = Date.now(), w = s.length > 50 ? ne(s, 49) + "\u2026" : s, S = ap(e.agentContext) + 1, v = NB(r.model, Tc(e), n.model, de(e).mode), _ = () => {
    if (e.abortController.signal.aborted) {
      if (wi(e.abortController.signal.reason) !== "interrupt") throw new Ye;
    }
    for (let p of Object.values(d.all())) if (p.type === "local_agent" && !qs(p.status) && p.forkedSkillName === n.name) return f("subagent_launch", "forked_skill_live_duplicate"), 
    !0;
    return !1;
  };
  if (_()) return null;
  let U = oE();
  if (S > U) return f("subagent_launch", "forked_skill_depth_cap"), null;
  let F = {
    skillName: n.name,
    attributionName: u,
    ...r.effort !== void 0 && {
      effort: r.effort
    },
    ...T !== void 0 && T.length > 0 && {
      frozenCommandDenies: [ ...T ]
    }
  };
  if (!NCn().safeParse(F).success) return f("subagent_launch", "forked_skill_scoping_unpersistable"), 
  null;
  try {
    await D3o(To(o), F, e.storageV5);
  } catch (p) {
    return D(p), f("subagent_launch", "forked_skill_scoping_write_failed"), null;
  }
  if (_()) return null;
  let I = D4(e.agentId, d) ?? Ze(), M = bot(e, I), R = bre({
    outputFileReadable: sO(e.options.tools),
    ownerCanContinueAgents: M,
    agentId: o,
    ownerAgentId: I,
    parentAgentId: e.agentId,
    spawnDepth: S,
    description: w,
    prompt: l,
    model: v,
    selectedAgent: r,
    taskRegistry: d,
    toolUseId: e.toolUseId,
    forkedSkillName: n.name,
    sessionScratch: e.session.sessionScratch
  }), B = R.abortController, h = e.agentLifecycle.allocateName(n.name);
  e.agentLifecycle.registerName(h, To(o)), YM(D4(e.agentId, d), `agent:${o}`, d);
  let N = {
    agentId: o,
    parentAgentId: e.agentId,
    depth: S,
    ...a8e(e) && {
      spawnedByMainThread: !0
    },
    parentSessionId: kC(),
    agentType: "subagent",
    subagentName: r.agentType,
    isBuiltIn: nl(r),
    displayName: h,
    isAsync: !0,
    isBackgroundAgent: !0,
    invocationKind: "spawn",
    invocationEmitted: !1,
    ...lU(e.agentContext)
  }, j = {
    prompt: l,
    resolvedAgentModel: v,
    isBuiltInAgent: nl(r),
    startTime: L,
    agentType: r.agentType,
    isAsync: !0,
    agentDepth: S,
    callerCanContinueAgents: M,
    source: r.source
  };
  return FR(N, () => LJ({
    taskId: R.agentId,
    abortController: B,
    makeStream: (p, O, P) => LA({
      agentDefinition: r,
      promptMessages: a,
      turnPrompt: l,
      toolUseContext: {
        ...e,
        getAppState: k,
        permissionLayers: m
      },
      canUseTool: c,
      isAsync: !0,
      querySource: "agent:custom",
      spawnedBySkill: u,
      spawnedByForkedSkill: !0,
      model: n.model,
      onModelRestricted: kTe(u, e.appendSystemMessage),
      availableTools: C,
      webFetchReadmissionAllowed: y,
      override: {
        agentId: To(o),
        agentContext: N,
        abortController: B,
        readFileState: b
      },
      onCacheSafeParams: p,
      onQueryProgress: O,
      onStreamTokenEstimate: P,
      description: w,
      name: h
    }),
    metadata: j,
    description: w,
    toolUseContext: e,
    taskRegistry: d,
    agentIdForCleanup: o,
    enableSummarization: !0,
    getWorktreeResult: async () => ({}),
    onTerminalSuccess: A
  })), g("subagent_launch"), {
    agentId: o,
    name: h
  };
}

function D(o) {
  t(`Failed to write forked-skill scoping sidecar: ${o}`);
}

function avn({agentId: o, parentAgentId: r, spawnDepth: n, skillName: s, prompt: l, selectedAgent: a, taskRegistry: e, toolUseId: c, callerAbortController: k}) {
  if (!glt()) return {
    abortController: k,
    remove() {}
  };
  let m = dr(), b = yIe(k, m), C = Dst(o, m);
  cLe(o);
  let y = `/${s}`, u = qZr({
    agentId: o,
    ownerAgentId: D4(r, e) ?? Ze(),
    parentAgentId: r,
    spawnDepth: n,
    description: y,
    prompt: l,
    selectedAgent: a,
    toolUseId: c,
    abortController: m,
    forkWorker: !0
  });
  return e.register(u), {
    abortController: m,
    remove(A) {
      b(), C(), e.remove(o), gf(o), ya(o, m.signal.aborted ? "stopped" : A, {
        toolUseId: c,
        summary: y,
        outputFile: u.outputFile,
        skipTranscript: !0,
        ambient: !0
      });
    }
  };
}

export { svn, ivn, avn, Yqr, U2t };
