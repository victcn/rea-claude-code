// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ry } from "./chunk-vxr6sv7z.js";

import { pm, ve, mx, ny, Bme, FX, WJe, YG } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { x } from "./chunk-b0z4bv3v.js";

import { UG, t } from "./chunk-kawq2919.js";

import { fS } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { tu } from "./chunk-4v78v8fd.js";

import { $we, srn, lpt, iU, wy, ap, lU, no, Fr } from "./chunk-xywp7esx.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { zie } from "./chunk-q6wab2jw.js";

import { Ji } from "./chunk-f0wpcwcb.js";

import { Ro, iDn, r1, Fce, rRe, d0 } from "./chunk-wgsx43va.js";

import { $l, Jt } from "./chunk-9tdwgnpn.js";

import { p5, vb } from "./chunk-8drhysk2.js";

import { vFe } from "./chunk-t70vnbgq.js";

import { ZFn } from "./chunk-chhsvfy5.js";

import { de } from "./chunk-5ydr99q3.js";

import { XV, tse } from "./chunk-htg8b98h.js";

import { Abe, c0, Ls, foe, $Xt, hgs } from "./chunk-sqb9meyh.js";

import { Uk, tF, f3, Rkt, WD, bde, Sde, z2, Wkt, GD, axn, lxn, mTt, n_e, Lde, r_e, fxn, mxn, jrt, nl, Flr, x3, Oss, s6t, b_e, iN, U4, bto, ef, W6t, z6t, ano, Cas, Ras, gqe, xas, sst, Xy, xe, $f, T_ } from "./chunk-84yp45y8.js";

import { LT, FRt, Mce, Sio, aY, o8, L9t, Hce } from "./chunk-81rtbneg.js";

import { Zk, Yo } from "./chunk-sn25q2cq.js";

import { xwt, Pwt } from "./chunk-jnw03fef.js";

import { DJ, yvn, pDe, LA, JC, k2e, fDe } from "./chunk-c0na4e14.js";

import { Ivt } from "./chunk-ce64fmea.js";

import { s4 } from "./chunk-wrna5qjd.js";

import { svn, ivn, avn, Yqr, U2t } from "./chunk-m7b2e1yq.js";

import { cvn } from "./chunk-p7tz7zfg.js";

import { Eoe } from "./chunk-sz89b5r8.js";

import { eks, ho } from "./chunk-9r9vcg3z.js";

import { FS } from "./chunk-dq67x9kz.js";

import { HR } from "./chunk-0f42zdcd.js";

import { et } from "./chunk-59na0977.js";

import { o, M, T, u, De, $e, A } from "./chunk-cvcg6n1z.js";

import { ye } from "./chunk-ne9evs39.js";

import { D } from "./chunk-hmqkrrtz.js";

function Jqo(e) {
  return vFe(e) || p5(e.source);
}

function XQn(e) {
  switch (e.type) {
   case "generic-error":
   case "manifest-validation-error":
   case "path-not-found":
    return e.plugin === void 0 ? e.path : void 0;

   default:
    return;
  }
}

var Te = {
  "path-not-found": "path not found",
  "manifest-validation-error": "manifest invalid",
  "dependency-unsatisfied": "unmet dependency",
  "dependency-version-unsatisfied": "unmet dependency"
};

function we(e) {
  return e.flatMap(n => {
    let r = Te[n.type] ?? "load error", s = XQn(n);
    if (s !== void 0) {
      let l = n.type === "generic-error" ? n.manifestName : void 0, a = sst(s, vb(n.source) ?? "");
      return [ {
        names: l ? [ l, a ] : [ a ],
        category: r
      } ];
    }
    return vFe(n) ? [ {
      names: [ n.plugin ],
      category: r
    } ] : [];
  });
}

function ce(e, n, r) {
  let s = we(n);
  if (s.length === 0) return;
  let l = e.indexOf(":"), a = l > 0 ? e.slice(0, l) : void 0, S = a === void 0 || r.has(a) ? void 0 : s.find(d => d.names.includes(a));
  if (S !== void 0) return `The plugin "${a}" did not load in this session (${S.category}): tell the user the plugin could not be loaded here, not that the skill is not installed.`;
  let v = D(s.map(d => d.category)).join(", ");
  return `${s.length === 1 ? `1 plugin did not load in this session (${v}); if this skill belongs to it` : `${s.length} plugins did not load in this session (${v}); if this skill belongs to one of them`}, tell the user its plugin could not be loaded here, not that the skill is not installed.`;
}

function fe({skill: e}, {commands: n, teammateAuthorOf: r}) {
  if (!e) return null;
  let s = e.trim(), l = s.startsWith("/") ? s.substring(1) : s, a = n?.find(h => h.name === l), S = a?.loadedFrom === "commands_DEPRECATED" ? `/${l}` : l, v = r?.(a?.type === "prompt" ? a.source : void 0, l) ?? null;
  return v ? `${S} \xb7 by ${v}` : S;
}

function Ae(e) {
  let n = new Map, r = s => Boolean(s.disableModelInvocation) || f3(s);
  for (let s of e) {
    let l = n.get(s.name);
    if (l === void 0 || r(l) && !r(s) && s.type === "prompt" && !(Fce(l) && !Fce(s))) n.set(s.name, s);
  }
  return [ ...n.values() ];
}

function Ce(e) {
  if (!Ji().claim(`skill_reserved_namespace_rule_held_back_${e}`)) return;
  f("skill_reserved_namespace", e === "nonholder" ? "nonholder_allow_rule" : "prefix_at_namespace_boundary", {
    interactive: !ve(),
    host_prompt: mx() !== void 0
  });
}

async function oe(e) {
  let n = await ef(pm(), e.storageV5), r = e.mcpCommands(), s = eks(r.filter(S => S.type === "prompt" && S.loadedFrom === "mcp"), n), l = Abe(), a = z2(n, r);
  return bde(Ae([ ...a, ...l, ...s ]));
}

function le(e, n) {
  let r = e.filter(Sde);
  return n ? foe(r, YG()) : r;
}

function ge(e, n) {
  return e.type === "prompt" && e.source === "plugin" && e.name !== n && (e.aliases?.includes(n) ?? !1);
}

function ie(e, n, r) {
  let s = r.agentId === void 0, l = Ls(e, n);
  if (l !== void 0) {
    let S = ge(l, e) ? le(n, s) : [];
    if (S.includes(l)) {
      let v = S.filter(h => ge(h, e) || h.type === "prompt" && h.loadedFrom !== "syncedSkills" && h.name.endsWith(`:${e}`));
      if (v.length > 1) return {
        kind: "ambiguous",
        command: void 0,
        candidates: v
      };
    }
    return {
      kind: "exact",
      command: l
    };
  }
  if (bto(e) || n.some(S => Rkt(S, e))) return {
    kind: "none",
    command: void 0
  };
  let a = hgs(e, le(n, s));
  switch (a.kind) {
   case "unique":
    return {
      kind: "suggestion",
      command: void 0,
      suggestion: a.command
    };

   case "ambiguous":
    return {
      kind: "ambiguous",
      command: void 0,
      candidates: a.candidates
    };

   case "none":
    return {
      kind: "none",
      command: void 0
    };
  }
}

function he(e, n) {
  return e.type === "prompt" && (e.context === "fork" || e.getContext !== void 0 && n.spawnedByForkedSkill === !0) && n.spawnedBySkill === WD(e);
}

function Ee(e, n) {
  if (n.agentId !== void 0) return !1;
  let r = xas(e);
  for (let s = n.messages.length - 1; s >= n.turnStartIndex; s--) {
    let l = n.messages[s];
    if (l.type !== "user" || l.isMeta || l.isCompactSummary || !wy(l.origin) || l.verifiedSlackHumanTurn === !0 || l.handedOff === !0 || l.textNotTyped === !0) continue;
    let a = l.message.content;
    if (typeof a === "string") {
      if (a.includes(`<${fS}>`)) continue;
    } else if (a.some(S => S.type === "tool_result")) continue;
    if (r.test(T_(l) ?? "")) return !0;
  }
  return !1;
}

async function Me(e, n, r, s, l, a, S, v, h) {
  let d = Date.now(), y = ry(), w = iN().has(n), B = o8(e), I = e.source === "bundled", {sanitizedName: F, skillNameHash: k} = aY({
    rawName: n,
    canonicalName: e.name,
    isMcp: e.loadedFrom === "mcp",
    isBuiltIn: w,
    isBundled: I,
    isOfficial: B
  }), O = s.queryTracking?.depth ?? 0, U = O > 0 ? "nested-skill" : "claude-proactive", z = s.agentId;
  if (e.pluginInfo) GD(e.pluginInfo.repository, "skill", Wkt(e, e.pluginInfo.pluginManifest.name));
  i("tengu_skill_tool_invocation", {
    command_name: F,
    _PROTO_skill_name: n,
    ...k,
    execution_context: b("fork"),
    invocation_trigger: c(U),
    query_depth: O,
    ...s.queryTracking && {
      query_chain_id: ye(s.queryTracking.chainId)
    },
    ...Sio(S, S !== void 0 && U4().has(S)),
    ...z && {
      parent_agent_id: ye(z)
    },
    ...Mce(e.source, e.loadedFrom, e.kind, e.createdBy),
    ...Pwt(e.source, n),
    attribution_shown: xwt(s.session, e.source, n) !== null,
    skill_content_chars: e.contentLength,
    ...!1,
    ...e.pluginInfo && L9t(e),
    ...Hce(e)
  }), FRt(n, e, U);
  let L = {
    agentId: y,
    parentAgentId: s.agentId,
    depth: ap(s.agentContext) + 1,
    agentType: "subagent",
    isAsync: !1,
    isBackgroundAgent: s.agentContext.agentType === "main" ? !1 : s.agentContext.isBackgroundAgent,
    ...lU(s.agentContext)
  }, N = svn(e, s), P = N || s.spawnedByWorkflowRunId !== void 0, {modifiedGetAppState: _, contextLayers: C, recordInvocation: j, baseAgent: G, promptMessages: Y, skillContent: K, forkReadFileState: se, availableTools: Q, webFetchReadmissionAllowed: X, frozenCommandDenies: re} = await W6t(e, r || "", s, L, {
    replaceCommandRules: P,
    freezeCommandDenies: P,
    deferInvocationRecording: P
  }), ee = await U2t(e, pm(), {
    options: {
      tools: JC(G, X ? x3(G, Q, de(s), {
        activeAgents: s.options.agentDefinitions.activeAgents
      }) : Q, N, !1, !1, 0, c0(s).mode).resolvedTools,
      spawnedBySkill: WD(e)
    },
    storageV5: s.storageV5
  });
  if (ee) Y.push(ee);
  let J = e.getEffort?.(r || "", s) ?? e.getDefaultEffort?.(r || "", s)?.value ?? e.effort, q = J !== void 0 ? {
    ...G,
    effort: J
  } : G, V = [];
  if (t(`SkillTool executing forked skill ${n} with agent ${q.agentType}`), N) {
    let E = await ivn({
      agentId: y,
      agentDefinition: q,
      command: e,
      description: `/${Ro(e)} ${r ?? ""}`.trim(),
      prompt: K,
      promptMessages: Y,
      context: s,
      canUseTool: l,
      getAppState: _,
      permissionLayers: C.length > 0 ? [ ...s.permissionLayers ?? [], ...C ] : s.permissionLayers,
      readFileState: se,
      availableTools: Q,
      webFetchReadmissionAllowed: X,
      spawnedBySkill: WD(e),
      recordInvocationOnSuccess: j,
      frozenCommandDenies: re
    });
    if (E) return g("skill_invoke"), {
      data: {
        success: !0,
        commandName: n,
        status: "forked",
        background: !0,
        agentId: y,
        result: `Running in the background as @${E.name}`
      }
    };
    j();
  }
  let te = {
    ...L,
    subagentName: q.agentType,
    isBuiltIn: nl(q)
  }, ae = s.options.forwardSubagentText, H = (E, W) => {
    v?.({
      type: "progress",
      toolUseID: `skill_${a.message.id}`,
      data: {
        message: E,
        type: "skill_progress",
        prompt: W,
        agentId: y,
        agentType: q.agentType,
        description: e.description
      }
    });
  }, ne = avn({
    agentId: y,
    parentAgentId: z,
    spawnDepth: ap(te),
    skillName: Ro(e),
    prompt: K,
    selectedAgent: q,
    taskRegistry: s.taskRegistry,
    toolUseId: s.toolUseId,
    callerAbortController: s.abortController
  }), Z = "failed";
  try {
    let E = $f(Y).find(R => R.type === "user");
    if (E) H({
      ...E,
      isMeta: void 0
    }, K);
    let W = !1, Se = h?.mark("model");
    for await (let R of LA({
      agentDefinition: q,
      promptMessages: Y,
      turnPrompt: K,
      onModelRestricted: cvn(WD(e), v),
      toolUseContext: {
        ...s,
        getAppState: _,
        permissionLayers: C.length > 0 ? [ ...s.permissionLayers ?? [], ...C ] : s.permissionLayers
      },
      canUseTool: l,
      isAsync: !1,
      querySource: "agent:custom",
      spawnedBySkill: WD(e),
      spawnedByForkedSkill: !0,
      model: e.model,
      availableTools: Q,
      webFetchReadmissionAllowed: X,
      override: {
        agentId: y,
        agentContext: te,
        abortController: ne.abortController,
        shareFileHistory: !0,
        readFileState: se
      }
    })) {
      if (R.type === "api_metrics") {
        v?.(R);
        continue;
      }
      if (R.type === "set_in_progress_tool_use_ids" || R.type === "spinner_mode" || R.type === "query_model_change") continue;
      if (V.push(R), DJ(R)) {
        if (pDe(s, R)) v?.(yvn(R));
        continue;
      }
      if (R.type !== "assistant" && R.type !== "user") continue;
      if (!v) continue;
      if (R.type === "user" && R.isMeta && !W) continue;
      if (R.type === "assistant") W = !0;
      for (let me of $f([ R ])) {
        let pe = me.message.content[0];
        if (!ae && pe?.type !== "tool_use" && pe?.type !== "tool_result") continue;
        H(me, "");
      }
    }
    Se?.();
    let ue = k2e(Xy(V));
    if (!ue) {
      if (fDe(y, s), s.spawnedByWorkflowRunId !== void 0) j();
    }
    let _e = b_e(V) + z6t(V, "Skill execution completed");
    V.length = 0;
    let be = Date.now() - d;
    return t(`SkillTool forked skill ${n} completed in ${be}ms`), g("skill_invoke"), 
    Z = ue ? "failed" : "completed", {
      data: {
        success: !0,
        commandName: n,
        status: "forked",
        agentId: y,
        result: _e
      }
    };
  } finally {
    ne.remove(Z), WJe(y);
  }
}

var Pe = p(() => u({
  skill: o().describe("The name of a skill from the available-skills list. Do not guess names."),
  args: o().optional().describe("Optional arguments for the skill")
})), Re = p(() => {
  let e = u({
    success: M().describe("Whether the skill is valid"),
    commandName: o().describe("The name of the skill"),
    allowedTools: T(o()).optional().describe("Tools allowed by this skill"),
    model: o().optional().describe("Resolved model the skill turn runs on when a frontmatter model override took effect; omitted otherwise"),
    status: A("inline").optional().describe("Execution status"),
    readOnly: M().optional().describe("True when the skill instructions were loaded read-only (nothing was executed)")
  }), n = u({
    success: M().describe("Whether the skill completed successfully"),
    commandName: o().describe("The name of the skill"),
    status: A("forked").describe("Execution status"),
    agentId: o().describe("The ID of the sub-agent that executed the skill"),
    result: o().describe("The result from the forked skill execution"),
    background: M().optional().describe("True when the sub-agent was launched in the background: `result` describes the launch, and the skill outcome arrives later as a task notification.")
  });
  return $e([ e, n ]);
});

function Oe(e) {
  return {
    storageV5: e.storageV5,
    mcpCommands: () => e.getAppState().mcp.commands
  };
}

async function Ue({input: {skill: e, args: n}, toolUseContext: r, canUseTool: s, parentMessage: l, onProgress: a, timing: S}) {
  if (r.agentId !== void 0 && tF(r.agentId)) throw m("subagent_launch", "skill_fork_spawner_stop_pending"), 
  Error("This agent has been stopped and its stop is still completing; it cannot launch skills.");
  let v = e.trim(), h = v.startsWith("/") ? v.substring(1) : v, d = r.options.activeSkill, y = d ?? r.options.spawnedBySkill;
  r.options.activeSkill = h;
  let w = Eoe(r), B = !1;
  try {
    let I = await oe(Oe(r)), F = ie(h, I, r);
    if (F.kind === "ambiguous") {
      let E = F.candidates.every(W => UG(W.name)) ? `: ${F.candidates.map(W => W.name).join(", ")}` : "";
      throw new x(`Skill ${h} now matches several skills${E} \u2014 invoke one by its full name.`, "Skill tool: bare name ambiguous at dispatch");
    }
    let k = F.command;
    if (k) r.options.activeSkill = WD(k);
    if (!w) {
      if (s6t(r.session, k?.name ?? h, r.storageV5, h), k?.type === "prompt" && k.pluginInfo) LT(k.pluginInfo.repository);
    }
    if (k?.type === "prompt" && iDn(k, n || "", r) === "fork" && !w) try {
      return await Me(k, h, n, r, s, l, y, a, S);
    } finally {
      r.options.activeSkill = d;
    }
    let O = `${r.agentId ?? ""}:${k?.name ?? h}`, U = FX().get(O), {processPromptSlashCommand: z} = await import("./chunk-g657agn1.js"), L = r.toolUseId ?? Le(l, ho), N = L !== void 0 && Flr(l.handedOffLive)?.has(L) === !0, P = await z(h, n || "", I, r, w, N);
    if (!P.shouldQuery) throw m("skill_invoke", "skill_invoke_process_failed"), Error("Command processing failed");
    let _ = w ? [] : P.allowedTools || [], C = w ? void 0 : $we(P.model), j = w ? void 0 : P.effort, G = iN().has(h), Y = k?.type === "prompt" && k.source === "bundled", K = k?.type === "prompt" && o8(k), {sanitizedName: se, skillNameHash: Q} = aY({
      rawName: h,
      canonicalName: k?.name ?? h,
      isMcp: k?.loadedFrom === "mcp",
      isBuiltIn: G,
      isBundled: Y,
      isOfficial: K
    }), X = r.queryTracking?.depth ?? 0, re = X > 0 ? "nested-skill" : "claude-proactive", ee = r.agentId, J = k?.type === "prompt" ? k.source : void 0, q = 0;
    for (let E of P.messages) q += lxn(E)?.length ?? 0;
    if (k?.type === "prompt" && k.pluginInfo && !w) GD(k.pluginInfo.repository, "skill", Wkt(k, k.pluginInfo.pluginManifest.name));
    i("tengu_skill_tool_invocation", {
      command_name: se,
      _PROTO_skill_name: h,
      ...Q,
      execution_context: w ? b("read-only") : b("inline"),
      invocation_trigger: c(re),
      query_depth: X,
      ...r.queryTracking && {
        query_chain_id: ye(r.queryTracking.chainId)
      },
      ...Sio(y, y !== void 0 && U4().has(y)),
      ...ee && {
        parent_agent_id: ye(ee)
      },
      ...Mce(J, k?.loadedFrom, k?.kind, k?.type === "prompt" ? k.createdBy : void 0),
      ...Pwt(J, h),
      attribution_shown: xwt(r.session, J, h) !== null,
      ...k?.type === "prompt" && {
        skill_content_chars: k.contentLength
      },
      skill_body_chars: q,
      ...!1,
      ...k?.type === "prompt" && k.pluginInfo && L9t(k),
      ...k?.type === "prompt" && Hce(k)
    }), FRt(h, k, re);
    let V = P.messages.filter(E => {
      if (E.type === "progress") return !1;
      if (E.type === "user" && "message" in E) {
        let W = E.message.content;
        if (typeof W === "string" && W.includes(`<${fS}>`)) return !1;
      }
      return !0;
    }), te = w ? V.map(lxn).find(E => E !== null) ?? void 0 : void 0, ae = ze(Be({
      messages: V,
      contextMessages: r.messages,
      commandName: h,
      args: n,
      priorContent: U?.content ?? te,
      renderedContent: FX().get(O)?.content ?? te
    }), L);
    t(`SkillTool returning ${ae.length} newMessages for skill ${h}`), g("skill_invoke");
    let H = [];
    if (_.length > 0) H.push({
      kind: "allowed_tools",
      allowedTools: _
    });
    let ne = r.getAppState(), Z = C && lpt({
      skillModel: C,
      mode: ne.toolPermissionContext.mode,
      fastMode: ne.fastMode ?? !1
    }) ? srn(C, r.options.mainLoopModel) : void 0;
    if (Z) H.push({
      kind: "model",
      mainLoopModel: Z
    });
    if (j !== void 0) H.push({
      kind: "effort",
      effort: j
    });
    return B = !0, {
      data: {
        success: !0,
        commandName: h,
        allowedTools: _.length > 0 ? _ : void 0,
        model: Z,
        ...w && {
          readOnly: !0
        }
      },
      newMessages: ae,
      ...H.length > 0 && {
        contextLayers: H
      }
    };
  } finally {
    if (w || !B) r.options.activeSkill = d;
  }
}

var YZe = Jt({
  name: ho,
  searchHint: "invoke a slash-command skill",
  isEnabled() {
    return !ny();
  },
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  get inputSchema() {
    return Pe();
  },
  get outputSchema() {
    return Re();
  },
  description: async ({skill: e}) => `Execute skill: ${e}`,
  prompt: async () => Oss(),
  toAutoClassifierInput: ({skill: e}) => e ?? "",
  create(e) {
    let n = e;
    return {
      async validateInput({skill: r}) {
        let s = r.trim();
        if (!s) return m("skill_invoke", "skill_invoke_empty_name"), {
          result: !1,
          message: `Invalid skill format: ${r}`,
          errorCode: 1
        };
        let l = s.startsWith("/");
        if (l) i("tengu_skill_tool_slash_prefix", {});
        let a = l ? s.substring(1) : s, S, v = !1, h = await oe(n), d = ie(a, h, n), y = d.command, w = HR(a);
        if (Lde(n.session) && (!y || jrt(y)) && (y !== void 0 || mxn(w))) {
          let I = await r_e(w);
          if (!I.ok) S = I.reason, v = I.withheld === !0; else h = await oe(n), d = ie(a, h, n), 
          y = d.command;
        }
        if (y?.type === "prompt" && y.loadDefinition !== void 0) await y.loadDefinition(), 
        h = await oe(n), d = ie(a, h, n), y = d.command;
        if (S !== void 0 && (!y || jrt(y))) return m("skill_invoke", v ? "skill_invoke_withheld" : "skill_invoke_not_materialized"), 
        {
          result: !1,
          message: v ? `${fxn(a)} Proceed without it.` : `Skill ${a} could not be downloaded (${S}). Proceed without it.`,
          errorCode: 10
        };
        if (y && n_e(y)) return m("skill_invoke", d0(y) ? "skill_invoke_host_catalog_withheld" : "skill_invoke_sync_vetoed"), 
        {
          result: !1,
          message: `Unknown skill: ${a}`,
          errorCode: 13
        };
        if (!y) {
          let I = Yqr(h, a, n.spawnedBySkill);
          if (I.length > 0) {
            let _ = d.kind === "ambiguous" ? d.candidates.filter(C => !Rkt(C, a) && UG(C.name)) : [];
            if (d.kind === "ambiguous") i("tengu_skill_tool_suffix_match", {
              candidate_count: d.candidates.length
            });
            return m("skill_invoke", "skill_invoke_not_found"), {
              result: !1,
              message: _.length > 0 ? `Unknown skill: ${a}. Several skills match that name: ${[ ..._, ...I ].map(C => C.name).join(", ")} \u2014 invoke one by its full name; the directory-scoped variants apply to the files under their directory.` : `Unknown skill: ${a}. Directory-scoped variants exist: ${I.map(C => C.name).join(", ")} \u2014 invoke the variant whose directory contains the files you are working on.`,
              errorCode: 2
            };
          }
          if (d.kind === "suggestion") {
            if (i("tengu_skill_tool_suffix_match", {
              candidate_count: 1
            }), UG(d.suggestion.name)) return m("skill_invoke", "skill_invoke_not_found"), {
              result: !1,
              message: `Unknown skill: ${a}. Did you mean ${d.suggestion.name}? Invoke it by that full name.`,
              errorCode: 2
            };
          }
          if (d.kind === "ambiguous") {
            i("tengu_skill_tool_suffix_match", {
              candidate_count: d.candidates.length
            });
            let _ = d.candidates.filter(j => !Rkt(j, a)), C = _.length === 1 ? _[0] : void 0;
            if (_.length > 0 && _.every(j => UG(j.name))) return m("skill_invoke", "skill_invoke_not_found"), 
            {
              result: !1,
              message: C !== void 0 ? `Unknown skill: ${a}. Did you mean ${C.name}? Invoke it by that full name.` : `Unknown skill: ${a}. Several skills match that name: ${_.map(j => j.name).join(", ")} \u2014 invoke one by its full name.`,
              errorCode: 2
            };
          }
          let F = zie(a, h.map(_ => ({
            name: Ro(_),
            aliases: _.aliases
          })), {
            maxEditDistance: 2
          }), k = n.agentId === void 0, O = F === void 0 && w !== a ? le(h, k).find(_ => _.name === w && $Xt(_)) : void 0, U = O !== void 0 && UG(w) && !r1(w) && !he(O, n) && gqe(O, {
            commandName: w,
            userTypedThisTurn: !1,
            isMainSession: k,
            permissionContext: n.permissions()
          }) === null;
          if (U) i("tengu_skill_tool_unprefixed_match", {});
          let z = F ?? (U ? w : void 0);
          m("skill_invoke", "skill_invoke_not_found");
          let L = await (ZFn()?.catch(() => {})), N = L && ce(a, L.errors, new Set(L.enabled.map(_ => _.name))), P = z ? `Unknown skill: ${a}. Did you mean ${z}?` : `Unknown skill: ${a}`;
          return {
            result: !1,
            message: N ? `${P}${z ? "" : "."} ${N}` : P,
            errorCode: 2
          };
        }
        if (he(y, n)) return m("skill_invoke", "skill_invoke_fork_recursion"), i("tengu_skill_tool_fork_recursion_blocked", {}), 
        {
          result: !1,
          message: `Skill ${a} is already executing in this forked context \u2014 you are the subagent running it. Execute the instructions in the skill body directly instead of re-invoking the ${ho} tool.`,
          errorCode: 9
        };
        let B = gqe(y, {
          commandName: a,
          userTypedThisTurn: !Eoe(n) && Ee(a, {
            agentId: n.agentId,
            messages: n.messages(),
            turnStartIndex: n.turnStartIndex
          }),
          isMainSession: n.agentId === void 0,
          permissionContext: void 0
        });
        if (B !== null) {
          switch (B.reason) {
           case "disable_model_invocation":
            {
              let {sanitizedName: I, skillNameHash: F} = aY({
                rawName: a,
                canonicalName: y.name,
                isMcp: y.loadedFrom === "mcp",
                isBuiltIn: iN().has(a),
                isBundled: y.type === "prompt" && y.source === "bundled",
                isOfficial: y.type === "prompt" && o8(y)
              });
              m("skill_invoke", "skill_invoke_model_disabled", {
                command_name: I,
                ...F
              });
              break;
            }

           case "not_loaded":
            m("skill_invoke", "skill_invoke_not_materialized");
            break;

           case "not_allowlisted":
            m("skill_invoke", "skill_invoke_not_allowlisted");
            break;

           case "override_disabled":
            m("skill_invoke", B.killSwitchOnly ? "skill_invoke_bundled_skills_disabled" : "skill_invoke_override_disabled");
            break;

           case "not_prompt_type":
            m("skill_invoke", "skill_invoke_not_prompt_type");
            break;

           case "mcp_prompt":
            break;

           case "deny_rule":
            break;
          }
          return {
            result: !1,
            message: B.message,
            errorCode: B.errorCode
          };
        }
        return {
          result: !0
        };
      },
      async checkPermissions({skill: r, args: s}) {
        let l = r.trim(), a = l.startsWith("/") ? l.substring(1) : l, S = n.permissions(), v = await oe(n), h = ie(a, v, n), d = h.command, y = h.kind === "ambiguous" ? h.candidates : [ d ], w = tse(S, YZe, "deny");
        for (let [N, P] of w.entries()) if (y.some(_ => ano(N, a, _))) return {
          behavior: "deny",
          message: "Skill execution blocked by permission rules",
          decisionReason: {
            type: "rule",
            rule: P
          }
        };
        let B = tse(S, YZe, "allow"), I;
        for (let [N, P] of B.entries()) {
          let _ = Cas(N, a, d);
          if (_ === "allow") return {
            behavior: "allow",
            updatedInput: {
              skill: r,
              args: s
            },
            decisionReason: {
              type: "rule",
              rule: P
            }
          };
          if (_ === "held-back-nonholder") I = {
            rule: N,
            kind: "nonholder"
          }; else if (_ === "held-back-boundary") I ??= {
            rule: N,
            kind: "boundary"
          };
        }
        if (d?.type === "prompt" && (Fe(d) || Eoe(n))) return {
          behavior: "allow",
          updatedInput: {
            skill: r,
            args: s
          },
          decisionReason: void 0
        };
        let F = d?.type === "prompt" && d.source === "plugin" ? d.pluginInfo?.pluginManifest.name : void 0, k = rRe() && r1(a) && !(d !== void 0 && Fce(d)), O = I === void 0 ? void 0 : k ? "nonholder" : I.kind;
        if (O !== void 0 && S.mode !== "bypassPermissions" && XV(S, YZe) === null) Ce(O);
        let U = I === void 0 || O === void 0 ? void 0 : Ras(I.rule, d?.name ?? a, O === "nonholder" ? {
          kind: "nonholder",
          pluginName: F
        } : {
          kind: "boundary"
        }), z = U === void 0 ? void 0 : {
          type: "other",
          reason: U
        };
        if (k) return {
          behavior: "ask",
          message: `Execute skill: ${a}${U ? ` \u2014 ${U}` : ""}`,
          decisionReason: z,
          suppressAlwaysAllowRule: !0,
          updatedInput: {
            skill: r,
            args: s
          },
          metadata: d ? {
            command: d
          } : void 0
        };
        let L = [ {
          type: "addRules",
          rules: [ {
            toolName: ho,
            ruleContent: a
          } ],
          behavior: "allow",
          destination: "localSettings"
        }, {
          type: "addRules",
          rules: [ {
            toolName: ho,
            ruleContent: `${a}:*`
          } ],
          behavior: "allow",
          destination: "localSettings"
        } ];
        return {
          behavior: "ask",
          message: `Execute skill: ${a}${U ? ` \u2014 ${U}` : ""}`,
          decisionReason: z,
          suggestions: L,
          updatedInput: {
            skill: r,
            args: s
          },
          metadata: d ? {
            command: d
          } : void 0
        };
      },
      call(r, s) {
        if (!s.runEngine) return Promise.reject(Error("Skill: invoking needs the executor (call.runEngine)"));
        return s.runEngine(Ue, {
          input: r,
          parentMessage: s.parentMessage,
          onProgress: s.onProgress,
          timing: s.timing
        });
      }
    };
  },
  mapToolResultToToolResultBlockParam(e, n) {
    if ("status" in e && e.status === "forked") return {
      type: "tool_result",
      tool_use_id: n,
      content: e.background ? `Skill "${e.commandName}" launched (forked execution, running in the background).\n\n${e.result}` : `Skill "${e.commandName}" completed (forked execution).\n\nResult:\n${e.result}`
    };
    if ("readOnly" in e && e.readOnly) return {
      type: "tool_result",
      tool_use_id: n,
      content: `Loaded skill instructions (read-only): ${e.commandName}. Nothing was executed; delegate execution to a worker.`
    };
    return {
      type: "tool_result",
      tool_use_id: n,
      content: `Launching skill: ${e.commandName}`
    };
  },
  renderToolUseMessage: fe
}), Ne = new Set([ "type", "progressMessage", "contentLength", "contentHash", "getLoadedSkillMd", "skillFile", "argNames", "model", "effort", "source", "pluginInfo", "serverAttribution", "disableNonInteractive", "skillRoot", "skillDir", "context", "agent", "background", "getPromptForCommand", "getEffort", "getDefaultEffort", "onUserTypedArgs", "getContext", "formatForegroundForkResult", "declaredFields", "pluginSource", "metadata", "createdBy", "fallback", "unqualifiedName", "denyMatchNames", "bareNameReserved", "reservedLabels", "fromHostCatalog", "shedAliases", "name", "description", "menuDescription", "hasUserSpecifiedDescription", "isEnabled", "isHidden", "aliases", "subcommands", "subcommandsBareOnly", "isMcp", "mcpInfo", "argumentHint", "whenToUse", "paths", "version", "disableModelInvocation", "disableBridgeInvocation", "userInvocable", "loadedFrom", "immediate", "userFacingName", "getArgumentCompletions" ]);

function Fe(e) {
  for (let n of Object.keys(e)) {
    if (Ne.has(n)) continue;
    let r = e[n];
    if (r === void 0 || r === null) continue;
    if (Array.isArray(r) && r.length === 0) continue;
    if (typeof r === "object" && !Array.isArray(r) && Object.keys(r).length === 0) continue;
    return !1;
  }
  return !0;
}

function Be({messages: e, contextMessages: n, commandName: r, args: s, priorContent: l, renderedContent: a}) {
  if (!l || !a) return e;
  if (e.some(d => d.type === "user" && d.promptShellHandOff !== void 0)) return e;
  let S = mTt(n, l);
  if (!S) return e;
  if (l !== a) {
    let d = l.endsWith(axn) ? `(Re-invocation of /${r} \u2014 the previously loaded copy was truncated by compaction; the full instructions follow.)` : `(Re-invocation of /${r} \u2014 the skill instructions were previously loaded; the arguments or dynamic output below are new.)`;
    return [ xe({
      content: d,
      isMeta: !0
    }), ...e ];
  }
  let v = !1, h = e.map(d => {
    if (lxn(d) !== a) return d;
    return v = !0, xe({
      content: S === "attachment" ? `Skill /${r} was loaded earlier (see the invoked-skills reminder above); this is a NEW invocation \u2014 follow those instructions now, including any setup steps.${s ? ` Arguments: ${s}` : ""}` : `Skill /${r} is already loaded above; instructions unchanged.${s ? ` Arguments: ${s}` : ""}`,
      isMeta: !0
    });
  });
  if (v) t(`SkillTool eliding byte-identical re-invocation of skill ${r}`);
  return h;
}

function ze(e, n) {
  if (!n) return e;
  return e.map(r => {
    if (r.type === "user") return {
      ...r,
      sourceToolUseID: n
    };
    return r;
  });
}

function Le(e, n) {
  let r = e.message.content.find(s => s.type === "tool_use" && s.name === n);
  return r && r.type === "tool_use" ? r.id : void 0;
}

function je() {
  return iU() === "default" ? " (use the Agent tool instead)" : "";
}

function We() {
  return `## What Happens in Plan Mode\n\nIn plan mode, you'll:\n1. Thoroughly explore the codebase using ${Uk() && $l() ? `\`find\`/${no}, \`grep\`/${Fr}, and ${et}` : `${no}, ${Fr}, and ${et}`}\n2. Understand existing patterns and architecture\n3. Design an implementation approach\n4. Present your plan to the user for approval\n5. Use ${Yo} if you need to clarify approaches\n6. Exit plan mode with ${FS} when ready to implement\n\n`;
}

function qe() {
  let e = je();
  return `Use this tool proactively when you're about to start a non-trivial implementation task. Getting user sign-off on your approach before writing code prevents wasted effort and ensures alignment. This tool transitions you into plan mode where you can explore the codebase and design an implementation approach for user approval.\n\n## When to Use This Tool\n\n**Prefer using EnterPlanMode** for implementation tasks unless they're simple. Use it when ANY of these conditions apply:\n\n1. **New Feature Implementation**: Adding meaningful new functionality\n   - Example: "Add a logout button" - where should it go? What should happen on click?\n   - Example: "Add form validation" - what rules? What error messages?\n\n2. **Multiple Valid Approaches**: The task can be solved in several different ways\n   - Example: "Add caching to the API" - could use Redis, in-memory, file-based, etc.\n   - Example: "Improve performance" - many optimization strategies possible\n\n3. **Code Modifications**: Changes that affect existing behavior or structure\n   - Example: "Update the login flow" - what exactly should change?\n   - Example: "Refactor this component" - what's the target architecture?\n\n4. **Architectural Decisions**: The task requires choosing between patterns or technologies\n   - Example: "Add real-time updates" - WebSockets vs SSE vs polling\n   - Example: "Implement state management" - Redux vs Context vs custom solution\n\n5. **Multi-File Changes**: The task will likely touch more than 2-3 files\n   - Example: "Refactor the authentication system"\n   - Example: "Add a new API endpoint with tests"\n\n6. **Unclear Requirements**: You need to explore before understanding the full scope\n   - Example: "Make the app faster" - need to profile and identify bottlenecks\n   - Example: "Fix the bug in checkout" - need to investigate root cause\n\n7. **User Preferences Matter**: The implementation could reasonably go multiple ways\n   - If you would use ${Yo} to clarify the approach, use EnterPlanMode instead\n   - Plan mode lets you explore first, then present options with context\n\n## When NOT to Use This Tool\n\nOnly skip EnterPlanMode for simple tasks:\n- Single-line or few-line fixes (typos, obvious bugs, small tweaks)\n- Adding a single function with clear requirements\n- Tasks where the user has given very specific, detailed instructions\n- Pure research/exploration tasks${e}\n\n${We()}## Examples\n\n### GOOD - Use EnterPlanMode:\nUser: "Add user authentication to the app"\n- Requires architectural decisions (session vs JWT, where to store tokens, middleware structure)\n\nUser: "Optimize the database queries"\n- Multiple approaches possible, need to profile first, significant impact\n\nUser: "Implement dark mode"\n- Architectural decision on theme system, affects many components\n\nUser: "Add a delete button to the user profile"\n- Seems simple but involves: where to place it, confirmation dialog, API call, error handling, state updates\n\nUser: "Update the error handling in the API"\n- Affects multiple files, user should approve the approach\n\n### BAD - Don't use EnterPlanMode:\nUser: "Fix the typo in the README"\n- Straightforward, no planning needed\n\nUser: "Add a console.log to debug this function"\n- Simple, obvious implementation\n\nUser: "What files handle routing?"\n- Research task, not implementation planning\n\n## Important Notes\n\n- This tool REQUIRES user approval - they must consent to entering plan mode\n- If unsure whether to use it, err on the side of planning - it's better to get alignment upfront than to redo work\n- Users appreciate being consulted before significant changes are made to their codebase\n`;
}

function ke() {
  return qe();
}

var Ve = p(() => De({})), He = p(() => u({
  message: o().describe("Confirmation that plan mode was entered")
})), b_n = Jt({
  name: Zk,
  searchHint: "switch to plan mode to design an approach before coding",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return "Requests permission to enter plan mode for complex tasks requiring exploration and design";
  },
  async prompt() {
    return ke();
  },
  get inputSchema() {
    return Ve();
  },
  get outputSchema() {
    return He();
  },
  userFacingName() {
    return "";
  },
  shouldDefer: !0,
  isEnabled() {
    return s4.isEnabled();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  renderToolUseMessage() {
    return null;
  },
  create(e) {
    return {
      async validateInput(n) {
        if (e.agentId) return {
          result: !1,
          message: "Only the main session can enter plan mode.",
          errorCode: 1
        };
        return {
          result: !0
        };
      },
      async call(n) {
        if (e.agentId) throw Error("EnterPlanMode tool cannot be used in agent contexts");
        return Bme(e.permissions().mode, "plan"), e.setToolPermissionContext(r => tu(Ivt(r), {
          type: "setMode",
          mode: "plan",
          destination: "session"
        })), {
          data: {
            message: "Entered plan mode. You should now focus on exploring the codebase and designing an implementation approach."
          }
        };
      }
    };
  },
  mapToolResultToToolResultBlockParam({message: e}, n) {
    return {
      type: "tool_result",
      content: `${e}\n\nIn plan mode, you should:\n1. Thoroughly explore the codebase to understand existing patterns\n2. Identify similar features and architectural approaches\n3. Consider multiple approaches and their trade-offs\n4. Use ${Yo} if you need to clarify the approach\n5. Design a concrete implementation strategy\n6. When ready, use ${FS} to present your plan for approval\n\nRemember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`,
      tool_use_id: n
    };
  }
});

export { b_n, Jqo, XQn, YZe };
