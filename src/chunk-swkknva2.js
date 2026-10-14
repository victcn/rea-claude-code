// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c } from "./chunk-hwdwjvh8.js";

import { AI, Ye, pd, Ve, Je, j, l } from "./chunk-b0z4bv3v.js";

import { ry } from "./chunk-vxr6sv7z.js";

import { q, Ir, pm, wT, ny, he, ote, WJe, cFt } from "./chunk-3pqddg8f.js";

import { Ea } from "./chunk-nvtwm272.js";

import { ul } from "./chunk-ddr690nj.js";

import { a } from "./chunk-j016gcgm.js";

import { se, uJe, t } from "./chunk-kawq2919.js";

import { Cp, fS, b$t, wl, Cf, d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { EX, g, m, f } from "./chunk-3ykz5st8.js";

import { GZ, ave, Rc } from "./chunk-s2t7g8m9.js";

import { up, Xt, zie, bee } from "./chunk-q6wab2jw.js";

import { fu } from "./chunk-1z2heevg.js";

import { n4n, Dt } from "./chunk-cqgvwwgb.js";

import { Sh, mu } from "./chunk-w0q7jqcp.js";

import { $we, Vh, ap, lU, Ft, Fc, Di, k } from "./chunk-xywp7esx.js";

import { $t } from "./chunk-g6nh65r0.js";

import { OHs, MHs, gIe } from "./chunk-f1zpf9me.js";

import { JZ, aA } from "./chunk-y3nc3daq.js";

import { fo } from "./chunk-qk8kpwc4.js";

import { OS, go } from "./chunk-0jsy3sb7.js";

import { Ro, lc, iDn, Sbe, mO, TV } from "./chunk-wgsx43va.js";

import { y_s } from "./chunk-2xhrgh8h.js";

import { bd, oK } from "./chunk-h36n2zxz.js";

import { t9, on, Sf, sp } from "./chunk-b47tzzqx.js";

import { aC } from "./chunk-9m7tdcn4.js";

import { gWn, Nxs } from "./chunk-9wtp3skp.js";

import { I8, vIt, h7t } from "./chunk-j99efqre.js";

import { $5e, yws } from "./chunk-4v78v8fd.js";

import { nUn, yH } from "./chunk-67jt18z1.js";

import { t_ } from "./chunk-4y2m4xpx.js";

import { de, Bh, jh } from "./chunk-5ydr99q3.js";

import { c0, Ls, Pbe, Ibe, poe, FXt, rat, Z0n } from "./chunk-sqb9meyh.js";

import { Aes, BA, xye, f3, RT, Lye, WD, qir, Nye, frt, Wkt, GD, L0e, zar, URn, xKe, BRn, Kar, Fjs, Ujs, jjs, JRn, n_e, Hde, _Q, Dde, cxn, Txn, i5t, Zu, x3, s6t, b_e, Deo, iN, U4, B4, MAt, W6t, z6t, lF, rce, Qt, Xy, yce, xe, VW, Kk, z_e, $re, $f, cy, Wt, uy, Ko, PCt } from "./chunk-84yp45y8.js";

import { LT, FRt, Mce, aY, o8, L9t, Hce } from "./chunk-81rtbneg.js";

import { zat } from "./chunk-8a4rbyjg.js";

import { gXt, Ws } from "./chunk-7xj6dhxv.js";

import { Jd } from "./chunk-vfdna4pm.js";

import { Pwt } from "./chunk-jnw03fef.js";

import { uDe } from "./chunk-w1ezaa52.js";

import { Iwt, DJ, pDe, Mwt, LA, JC, k2e, fDe } from "./chunk-c0na4e14.js";

import { qer, Yer, Xer, The, dvn, T3o, A3o } from "./chunk-vw2ka14f.js";

import { wS, ETe, Cwt } from "./chunk-9vcfwzhf.js";

import { svn, ivn, avn, U2t } from "./chunk-m7b2e1yq.js";

import { lvn } from "./chunk-0e3j1f5w.js";

import { cvn } from "./chunk-p7tz7zfg.js";

import { itt } from "./chunk-00mmxsbd.js";

import { l1 } from "./chunk-8kpf40d1.js";

import { Eoe } from "./chunk-sz89b5r8.js";

import { E6e } from "./chunk-278xsh28.js";

import { ho } from "./chunk-9r9vcg3z.js";

import { Tz } from "./chunk-10gv16xm.js";

import { cK } from "./chunk-yxkwn8vg.js";

import { Gjn } from "./chunk-2x0yjg76.js";

import { $Ar, jUe, $z } from "./chunk-g5zagpgq.js";

import { T$t } from "./chunk-pnn4xyvt.js";

import { randomUUID as we } from "crypto";

function rt(e, n, o, u, r, y = !1, h = !1) {
  let C = 0;
  for (let w of up) {
    let R = o[w];
    if (!R) continue;
    for (let A of R) for (let G of A.hooks) {
      let D = G.once ? () => {
        t(`Removing one-shot hook for event ${w} in skill '${u}'`), e.remove(n, w, G);
      } : void 0;
      e.add(n, w, A.matcher || "", G, {
        onHookSuccess: D,
        skillRoot: r,
        personal: y,
        checkout: h
      }), C++;
    }
  }
  if (C > 0) t(`Registered ${C} hooks from skill '${u}'`);
}

function Qe({commandName: e, agentId: n, isNonInteractiveSession: o, setAppState: u, credentials: r}) {
  if (n !== void 0 || o) return;
  if (Ft()) return;
  A3o(e);
  let y = dvn(r);
  if (!Yer(e)) return;
  if (Xer(e)) {
    it(e, u, r);
    return;
  }
  y.then(h => {
    if (Xer(e)) {
      it(e, u, r);
      return;
    }
    if (!h) return;
    let C = qer();
    if (!C) return;
    u(w => ({
      ...w,
      fotwClaim: {
        phase: "needs_payment_setup",
        command: C,
        amountMinorUnits: h.amountMinorUnits,
        currency: h.currency
      }
    }));
  });
}

function it(e, n, o) {
  let u = qer(), r = The();
  if (!u || !r) return;
  n(y => ({
    ...y,
    fotwClaim: {
      phase: "pending",
      command: u,
      amountMinorUnits: r.amountMinorUnits,
      currency: r.currency
    }
  })), T3o(e, o).catch(() => ({
    outcome: "failed"
  })).then(y => {
    n(h => {
      let C = h.fotwClaim;
      if (!C || C.command !== u) return h;
      if (y.outcome === "granted") return {
        ...h,
        fotwClaim: {
          phase: "granted",
          command: C.command,
          amountMinorUnits: y.amountMinorUnits,
          currency: y.currency
        }
      };
      return {
        ...h,
        fotwClaim: {
          ...C,
          phase: "failed"
        }
      };
    });
  });
}

var at = "/plugin opens a panel in the terminal, so it can't run in the desktop app. Click + next to the prompt box, then Plugins: Add plugin installs from a marketplace you've added, and Manage plugins turns a plugin on or off or uninstalls it.", wt = "For a marketplace you haven't added, Add marketplace in the app takes a GitHub owner/repo or a Git URL. Or, in a terminal with Claude Code installed on the machine this session runs on, run `claude plugin marketplace add <source>` and then `claude plugin install <plugin>@<marketplace>`, using the marketplace name the first command prints. Then send /reload-plugins here.", Mt = "Your organization limits which marketplaces can be added. For a plugin that isn't in Add plugin, contact your admin.";

function lt(e) {
  if (e?.name !== "plugin" || !lvn() || !nUn()) return;
  try {
    let o = yH() === null;
    return `${at} ${o ? wt : Mt}`;
  } catch (o) {
    return t(`Marketplace policy could not be read: ${l(o)}`, {
      level: "error"
    }), at;
  }
}

var vt = {
  teleport: ({remoteSessionId: e}) => `/teleport pulls a cloud session into a terminal on your own machine, so it can't run from inside this session. To continue this session locally, run claude --teleport ${e} from a checkout of this repository. On claude.ai you can also choose Open in \u2192 Terminal from the session menu, which copies that command.`,
  session: ({remoteSessionId: e}) => `This session is already running as a cloud session: ${dt(e)}. To continue it in your terminal, run claude --teleport ${e} from a checkout of this repository.`,
  "remote-control": ({remoteSessionId: e}) => `Remote Control connects a terminal session to claude.ai, and this session is already running as a cloud session: ${dt(e)}.`,
  ...{}
};

function dt(e) {
  return Jd(e, a.SESSION_INGRESS_URL);
}

function Tt() {
  let e = a.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!e) return;
  try {
    return mu(Sh(e, "CLAUDE_CODE_REMOTE_SESSION_ID"));
  } catch {
    return;
  }
}

function je(e, n) {
  let o = Ls(e, n), u = Tt();
  if (!u) return lt(o);
  if (!o) return;
  let r = vt[o.name];
  return r ? r({
    remoteSessionId: u
  }) : void 0;
}

var Pt = "tengu_polished_quill_killswitch", At = 40;

function mt(e) {
  if (!e) return !1;
  return !k(Pt, !1);
}

function ut({commandName: e, suggestion: n, availableCommandNames: o, availableCommandCount: u}) {
  return {
    type: "unknown_command_fallback",
    commandName: uJe(e) && !ave(e) ? e : void 0,
    suggestion: n !== void 0 && uJe(n) ? n : void 0,
    availableCommandNames: o.filter(r => uJe(r)).slice(0, At),
    availableCommandCount: u
  };
}

var It = new Set([ "clear", "resume", "help", "exit", "feedback" ]);

function Zet(e, n) {
  if (!n) return !1;
  return !(e && e.type !== "prompt" && It.has(e.name));
}

async function ct(e, n, o) {
  let u = [], r = !1, y = e.agentId ? void 0 : e.getAppState().activeGoal;
  try {
    let h = o.executeStopHooks(de(e).mode, e.abortController.signal, void 0, !1, e.agentId, e, [ ...e.messages, ...n ], void 0, "fork_dispatch"), C = [];
    for await (let w of h) {
      if (w.timedOut && y && w.hook?.prompt === y.condition) f("goal_met", "evaluator_timeout");
      if (w.message?.type === "attachment") {
        let R = w.message.attachment;
        if ("hookEvent" in R && R.hookEvent === "Stop") {
          if (R.type === "hook_non_blocking_error") C.push(R.stderr || `Exit code ${R.exitCode}`); else if (R.type === "hook_error_during_execution") C.push(R.content); else if (R.type === "hook_system_message") u.push(w.message);
        }
      }
      if (w.blockingError) u.push(xe({
        content: o.getStopHookMessage(w.blockingError),
        isMeta: !0
      })), r = !0;
      if (w.additionalContexts && w.additionalContexts.length > 0) u.push(Qt({
        type: "hook_additional_context",
        content: w.additionalContexts,
        hookName: "Stop",
        toolUseID: `hook-${we()}`,
        hookEvent: "Stop"
      })), r = !0;
    }
    if (C.length > 0) u.push(Wt(`Stop hook error: ${C.join("; ")}`, "warning"));
  } catch (h) {
    t(`Forked command Stop hooks failed: ${String(h)}`, {
      level: "error"
    });
  }
  if (!r) try {
    let h = o.executeStopHooks(de(e).mode, e.abortController.signal, void 0, !1, e.agentId, e, [], void 0, "turn_end_reactions");
    for await (let C of h) ;
  } catch (h) {
    t(`Forked command turn-end reactions failed: ${String(h)}`, {
      level: "error"
    });
  }
  return {
    messages: u,
    requestQuery: r
  };
}

async function Et(e, n, o, u, r, y, h, C = [], w, R, A, G, D) {
  let H = ry(), {sanitizedName: N, skillNameHash: K} = aY({
    rawName: e.name,
    canonicalName: e.name,
    isMcp: e.loadedFrom === "mcp",
    isBuiltIn: iN().has(e.name),
    isBundled: e.source === "bundled",
    isOfficial: o8(e)
  });
  i("tengu_slash_command_forked", {
    command_name: N,
    ...K,
    _PROTO_skill_name: e.name,
    invocation_trigger: b("user-slash"),
    ...Mce(e.source, e.loadedFrom, e.kind, e.createdBy),
    ...Pwt(e.source, e.name),
    ...Hce(e)
  });
  let Y = svn(e, o, w), ce = Y ? {
    agentId: H,
    parentAgentId: o.agentId,
    depth: ap(o.agentContext) + 1,
    agentType: "subagent",
    isAsync: !1,
    isBackgroundAgent: o.agentContext && "isBackgroundAgent" in o.agentContext ? o.agentContext.isBackgroundAgent : void 0,
    ...lU(o.agentContext)
  } : void 0, {skillContent: ee, modifiedGetAppState: s, contextLayers: fe, recordInvocation: F, baseAgent: B, promptMessages: T, forkReadFileState: O, availableTools: U, webFetchReadmissionAllowed: _, frozenCommandDenies: P} = await W6t(e, n, o, ce, {
    forkAgentId: H,
    extractAttachments: w ? void 0 : rce,
    replaceCommandRules: !0,
    replaceDenyRules: !w,
    deferInvocationRecording: Y
  }), S = fe.length > 0 ? [ ...o.permissionLayers ?? [], ...fe ] : o.permissionLayers;
  if (r.length > 0 || u.length > 0) T.push(xe({
    content: [ ...r, ...u ],
    isMeta: !0
  }));
  if (D && D.length > 0) T.push(Qt({
    type: "inlined_image_paths",
    paths: D
  }));
  let E = await U2t(e, Ir(), {
    options: {
      tools: JC(B, _ ? x3(B, U, de(o), {
        activeAgents: o.options.agentDefinitions.activeAgents
      }) : U, Y, !1, !1, 0, c0(o).mode).resolvedTools,
      spawnedBySkill: WD(e)
    },
    storageV5: o.storageV5
  });
  if (E) T.push(E);
  T.push(...C);
  let p = e.getEffort?.(n, o) ?? e.getDefaultEffort?.(n, o)?.value ?? e.effort, v = p !== void 0 ? {
    ...B,
    effort: p
  } : B, I = xe({
    content: VW({
      inputString: `/${Ro(e)} ${n}`.trim(),
      precedingInputBlocks: r.length > 0 ? [ ...r, ...u ] : u
    }),
    uuid: R,
    origin: G
  });
  if (await (o.makeFileHistorySnapshot?.(I.uuid)), t(`Executing forked slash command /${e.name} with agent ${v.agentType}`), 
  Y) {
    A?.markTurnActive(w ? void 0 : `/${Ro(e)} ${n}`.trim());
    let oe;
    try {
      oe = await ivn({
        agentId: H,
        agentDefinition: v,
        command: e,
        description: `/${Ro(e)} ${n}`.trim(),
        prompt: ee,
        promptMessages: T,
        context: o,
        canUseTool: y,
        getAppState: s,
        permissionLayers: S,
        readFileState: O,
        availableTools: U,
        webFetchReadmissionAllowed: _,
        spawnedBySkill: WD(e),
        recordInvocationOnSuccess: F,
        frozenCommandDenies: P
      });
    } catch (L) {
      if (await (A?.settleTurnEnd(null)), Ve(L)) return {
        messages: [ I, Kk({
          toolUse: !1
        }) ],
        shouldQuery: !1,
        command: e,
        aborted: !0,
        forkDispatched: !0
      };
      return {
        messages: [ I, xe({
          content: `<local-command-stderr>${$t(w2e(L, e.name, o.session))}</local-command-stderr>`
        }) ],
        shouldQuery: !1,
        command: e,
        threw: !0,
        forkDispatched: !0
      };
    }
    if (oe) return await (A?.settleTurnEnd(null)), {
      messages: [ I, uy(`<local-command-stdout>Running in the background as @${BA(Xt(oe.name))}</local-command-stdout>\n` + Aes({
        agentId: oe.agentId,
        skillName: e.name,
        description: `/${Ro(e)} ${n}`.trim()
      })) ],
      shouldQuery: !1,
      command: e,
      forkDispatched: !0
    };
    F();
  }
  let Q = [], te = [], z = `forked-command-${e.name}`, X = 0, V = oe => (X++, {
    type: "progress",
    data: {
      message: oe,
      type: "agent_progress",
      prompt: ee,
      agentId: H,
      agentType: v.agentType,
      isBuiltIn: v.source === "built-in",
      description: e.description
    },
    parentToolUseID: z,
    toolUseID: `${z}-${X}`,
    timestamp: (new Date).toISOString(),
    uuid: we()
  }), ne = () => {
    o.emitToolProgress?.({
      kind: "agent_progress",
      toolUseId: z,
      progressMessages: [ ...te ]
    });
  }, pe = OS.of(o.session).active !== void 0, ke = !1;
  A?.markTurnActive(w ? void 0 : `/${Ro(e)} ${n}`.trim());
  let ie = avn({
    agentId: H,
    parentAgentId: o.agentId,
    spawnDepth: ap(o.agentContext) + 1,
    skillName: Ro(e),
    prompt: ee,
    selectedAgent: v,
    taskRegistry: o.taskRegistry,
    callerAbortController: o.abortController
  }), re = "failed";
  try {
    if (ne(), pe) {
      let L = $f(T).find(Se => Se.type === "user");
      if (L) Mwt(o, V({
        ...L,
        isMeta: void 0
      }), !1);
    }
    for await (let L of LA({
      agentDefinition: v,
      promptMessages: T,
      turnPrompt: ee,
      onModelRestricted: cvn(WD(e), o.onQueryEvent),
      toolUseContext: {
        ...o,
        getAppState: s,
        permissionLayers: S
      },
      canUseTool: y,
      isAsync: !1,
      querySource: "agent:custom",
      spawnedBySkill: WD(e),
      spawnedByForkedSkill: !0,
      model: e.model,
      availableTools: U,
      webFetchReadmissionAllowed: _,
      override: {
        shareFileHistory: !0,
        agentId: H,
        abortController: ie.abortController,
        readFileState: O
      }
    })) {
      if (L.type === "api_metrics" || L.type === "set_in_progress_tool_use_ids" || L.type === "spinner_mode" || L.type === "query_model_change") continue;
      if (Q.push(L), DJ(L)) {
        if (pe && pDe(o, L)) Mwt(o, L, !1);
        continue;
      }
      let Se = $f([ L ]);
      if (L.type === "assistant") {
        let J = JRn(L);
        if (J > 0) o.onQueryEvent?.({
          type: "response_length",
          op: "add",
          delta: J
        });
        let ge = Se[0];
        if (ge && ge.type === "assistant") {
          let _e = V(L);
          if (te.push(_e), ne(), ke = !0, pe) Mwt(o, _e, !0);
        }
      }
      if (L.type === "user") {
        let J = Se[0];
        if (J && J.type === "user") {
          let ge = V(J);
          if (te.push(ge), ne(), pe && !(J.isMeta && !ke)) {
            Mwt(o, ge, !0);
            for (let _e of Se.slice(1)) if (_e.type === "user") Mwt(o, V(_e), !0);
          }
        }
      }
    }
    let oe = k2e(Xy(Q));
    if (!oe) fDe(H, o);
    re = oe ? "failed" : "completed";
  } catch (oe) {
    if (Ve(oe)) return await (A?.settleTurnEnd(null)), {
      messages: [ I, Kk({
        toolUse: !1
      }) ],
      shouldQuery: !1,
      command: e,
      aborted: !0,
      forkDispatched: !0
    };
    await (A?.settleTurnEnd(null));
    let L = await ct(o, Q, h);
    return {
      messages: [ I, xe({
        content: `<local-command-stderr>${$t(w2e(oe, e.name, o.session))}</local-command-stderr>`
      }), ...L.messages ],
      shouldQuery: L.requestQuery,
      command: e,
      threw: !0,
      forkDispatched: !0
    };
  } finally {
    ie.remove(re), WJe(H), o.emitToolProgress?.({
      kind: "clear",
      toolUseId: z
    });
  }
  let Ce = z6t(Q, "Command completed");
  try {
    Ce = e.formatForegroundForkResult?.(Ce) ?? Ce;
  } catch (oe) {
    d(Je(j(oe), "fork result formatter threw"));
  }
  let Me = b_e(Q) + Ce;
  t(`Forked slash command /${e.name} completed with agent ${H}`), await (A?.settleTurnEnd(Q));
  let Ee = await ct(o, Q, h);
  return {
    messages: [ I, uy(`<local-command-stdout>${BA(Me)}</local-command-stdout>`), ...Ee.messages ],
    shouldQuery: Ee.requestQuery,
    command: e,
    resultText: Me,
    forkDispatched: !0
  };
}

var Rt = {
  "remote-control": "allow_remote_control",
  ultraplan: "allow_remote_sessions",
  "claude-in-chrome": "allow_claude_browser_extension"
};

function Ut(e, n, {interactive: o}) {
  let u = B4(), r = jUe(), y = I8(), h = r ? h7t() : y, C = r ? Nxs() : gWn(), w = [ n, u, h, C ], R, A;
  for (let K of w) {
    let Y = Ls(e, K);
    if (!Y) continue;
    let ce = K === u || K === h, ee = Y.policyGate?.policy ?? (ce ? Rt[Y.name] : void 0);
    if (r && $z(Y.name) && (K === h ? Ls(e, y) === void 0 : K === C) && (ee === void 0 || on(ee))) ee = $Ar;
    if (ee) {
      R = Y, A = ee;
      break;
    }
  }
  if (!R || !A) return;
  if (!Lye(R)) return;
  if (on(A)) {
    if (o && !ny() && lc(R) && Ls(e, n) === void 0) return {
      command: R,
      policy: A,
      reason: MHs(R.name),
      kind: "stale_list"
    };
    return;
  }
  let G = sp(A);
  if (!o) {
    if (je(e, B4()) !== void 0) return;
    if (G !== "org_denied" && Nye(w.flatMap(K => K.filter(Y => Pbe(e, [ Y ])))).length === 0) return;
  }
  let {featureLabel: D, verb: H} = t9(A), N = G === "cache_miss" ? OHs(D) : Sf(A, D, H);
  if (N === null || G === null) return;
  return {
    command: R,
    policy: A,
    reason: N,
    kind: G
  };
}

function F2t(e) {
  return /^[a-zA-Z0-9_][a-zA-Z0-9:_-]*$/.test(e);
}

function w2e(e, n, o) {
  let u = fo(n, 200), r = Xt(n);
  if (Ve(e)) {
    if (go(o)) return t(`${r} aborted: ${String(e)}`), "Interrupted";
    return BA(e instanceof Error ? e.message || "Interrupted" : "Interrupted");
  }
  if (e instanceof AI) return BA(e.message);
  if (go(o)) return t(`${r} threw: ${String(e)}`, {
    level: "error"
  }), `${u} failed (detail withheld on this connection)`;
  return BA(String(e));
}

async function mYs(e, n, o, u, r, y, h, C, w, R, A, G, D, H, N, K, Y, ce, ee, s, fe, F) {
  using B = Fjs(y ?? r.deferredSlashUuid);
  using T = Ujs(y);
  function O(M = [], W = e, le = !1) {
    let ye = we(), me = xye(n) ? void 0 : ye;
    if (me !== void 0) cFt(me);
    let Pe = t_(r.options.mainLoopModel, jh(r), Bh(r.permissionLayers));
    i("tengu_input_prompt", {
      ...w && {
        prompt_source: c(w)
      },
      ...Pe && {
        effort_level: c(Pe)
      },
      turn_origin: c(yce(N)),
      ...i5t({
        wakeupSource: s,
        hostInitiator: fe
      }),
      ...zat()
    });
    let Re = y || we();
    Ws("user_prompt", {
      prompt_length: String(W.length),
      ...gXt(W),
      ...me && {
        "prompt.id": me
      },
      "message.uuid": Re
    });
    let ue = xe({
      content: VW({
        inputString: W,
        precedingInputBlocks: n
      }),
      uuid: Re,
      permissionMode: ee,
      isMeta: ce || void 0,
      promptSource: w,
      promptId: me,
      origin: N
    }), Ue = Cwt(ue.message.content);
    if (N) PCt(ue, N);
    return {
      messages: [ ue, ...u, ...M.map(Fe => Qt(Fe)) ],
      shouldQuery: !0,
      ...W === e && {
        promptRow: {
          message: ue,
          unframed: Ue
        }
      },
      ...le && {
        extractPromptAttachments: !0
      }
    };
  }
  let U = wS(e);
  if (!U) {
    if (i("tengu_input_slash_missing", {}), r.options.isNonInteractiveSession) return O();
    m("cmd_dispatch", "cmd_parse_failed");
    let M = "Commands are in the form `/command [args]`";
    return {
      messages: [ z_e(), ...u, xe({
        content: VW({
          inputString: M,
          precedingInputBlocks: n
        })
      }) ],
      shouldQuery: !1,
      resultText: M
    };
  }
  let {commandName: _, args: P} = U, {isMcp: S} = U, E;
  if (G !== void 0) {
    let M = wS(G);
    E = M && M.commandName === U.commandName ? M.args : void 0;
  }
  let p = Ls(_, r.options.commands);
  if (p && !lc(p)) p = void 0;
  if (!p && !S && P.trim()) {
    let M = P.trimStart(), W = M.search(/\s/), le = W === -1 ? M : M.slice(0, W), ye = `${_}:${le}`, me = Ls(ye, r.options.commands);
    if (me) p = me, _ = ye, P = W === -1 ? "" : M.slice(W + 1).trimStart();
  }
  if (!p && !S && !ny()) {
    let M = await jjs(_, B.origin === void 0, r.abortController.signal);
    if (!M && r.abortController.signal.aborted) {
      let W = Ls(_, r.options.commands) ?? Ls(_, B4());
      return Kar({
        signal: r.abortController.signal,
        typed: [ ...u, xe({
          content: VW({
            inputString: W ? Ie(W, P) : $re(Xt(_), GZ(P)),
            precedingInputBlocks: n
          }),
          uuid: y,
          origin: N
        }) ],
        marker: Kk({
          toolUse: !1
        }),
        isQueuedByPlugin: B.origin !== void 0
      });
    }
    if (M) p = M, r = {
      ...r,
      options: {
        ...r.options,
        commands: [ ...r.options.commands, M ]
      }
    };
  }
  let v, I;
  if (p && !RT(p)) {
    let M = ETe(p, P);
    if (M) {
      let W = Ls(M.targetName, r.options.commands);
      if (W && lc(W)) I = `${_} ${M.consumedToken}`, p = W, _ = M.targetName, P = M.remainingArgs; else if (p.name === cK) {
        let le = Z0n();
        if (le) v = Wt(`${le} Running a local review instead.`, "warning");
      }
    }
  }
  let Q = p ? await Hde(p) : void 0;
  if (p && n_e(p)) p = void 0;
  if (p && vIt(p)) p = void 0;
  if (p && Dde(Q)) _Q(p, Q), p = void 0;
  let te = iN().has(_);
  if (Zet(p, r.getAppState().endedByModel)) {
    let M = l1("Claude ended this conversation. Start a new session (or /clear) to continue.");
    return Ae(B.origin !== void 0, {
      messages: [ Wt(M, "warning") ],
      shouldQuery: !1,
      resultText: M
    });
  }
  let z = p?.type === "prompt" && p.source === "bundled", X = p?.type === "prompt" && o8(p), V = S || p?.type === "prompt" && p.source === "mcp";
  if (!p) {
    if (!F2t(_)) return O();
    let M = `/${_}`, W = !1;
    if (!he() && !ul(M)) try {
      await se().stat(M), W = !0;
    } catch {}
    if (!W) {
      let le = Ut(_, r.options.commands, {
        interactive: !r.options.isNonInteractiveSession
      });
      if (le) {
        let {command: Z, policy: Le, reason: ve, kind: Te} = le;
        if (i("tengu_input_slash_invalid", {
          input_length: _.length,
          had_suggestion: !1,
          policy_denied: Te !== "stale_list"
        }), m("cmd_dispatch", Te === "stale_list" ? "cmd_stale_list" : `cmd_policy_${Te}`), 
        Te !== "stale_list") aC(Le, "slash_command");
        let st = BA(Xt(_)), Oe = !P ? "" : Ibe(Z, P) ? "***" : BA(GZ(P));
        if (r.options.isNonInteractiveSession) return Ae(B.origin !== void 0, {
          messages: [ ...u, uy(`/${st}${Oe ? ` ${Oe}` : ""}`, {
            submitUuid: y
          }), uy(`<local-command-stdout>${ve}</local-command-stdout>`) ],
          shouldQuery: !1,
          resultText: ve
        });
        return Ae(B.origin !== void 0, {
          messages: [ ...u, Wt(ve, "warning"), ...Oe && Oe !== "***" ? [ Wt(`Args from /${st}: ${Oe}`, "warning") ] : [] ],
          shouldQuery: !1,
          resultText: ve
        });
      }
      if (r.options.isNonInteractiveSession && iN().has(_)) {
        let Z = B4(), Le = je(_, Z) ?? `/${BA(Xt(_))} isn't available in this environment.`;
        i("tengu_input_slash_invalid", {
          input_length: _.length,
          had_suggestion: !1
        }), m("cmd_dispatch", "cmd_unavailable_headless");
        let ve = Ls(_, Z), Te = !P ? "" : ve !== void 0 && Ibe(ve, P) ? "***" : BA(GZ(P));
        return Ae(B.origin !== void 0, {
          messages: [ ...u, uy(`/${BA(Xt(_))}${Te ? ` ${Te}` : ""}`, {
            submitUuid: y
          }), uy(`<local-command-stdout>${Le}</local-command-stdout>`, {
            commandOutcome: {
              kind: "unavailable_headless"
            }
          }) ],
          shouldQuery: !1,
          resultText: Le
        });
      }
      let ye = await cxn(r.options.commands), me = r.options.commands.filter(Z => !Z.isHidden && !RT(Z) && lc(Z) && !(mO(Z) && wT()) && !TV(Z) && !ye.has(Z)), Pe = B.origin === void 0 && mt(r.options.isNonInteractiveSession), Re = Pe ? me.filter(Z => Z.type === "prompt" && !Z.disableModelInvocation) : me, ue = zie(_, Re.map(Z => ({
        name: Ro(Z),
        aliases: Z.aliases
      })), {
        maxEditDistance: 2
      });
      if (i("tengu_input_slash_invalid", {
        input_length: _.length,
        had_suggestion: Boolean(ue),
        suggestion_distance: ue ? bee(_, ue, 2) : void 0,
        fallback_to_model: Pe
      }), Pe) return f("cmd_dispatch", "cmd_unknown_model_fallback"), O([ ut({
        commandName: _,
        suggestion: ue,
        availableCommandNames: Re.map(Z => Ro(Z)),
        availableCommandCount: me.length
      }) ], ave(e) ? GZ(e) : e, !0);
      m("cmd_dispatch", "cmd_unknown");
      let Ue = fo(_, 200), Fe = ue ? fo(ue, 200) : void 0, Ne = ue ? `Unknown command: /${Ue}. Did you mean /${Fe}?` : `Unknown command: /${Ue}`;
      if (r.options.isNonInteractiveSession) return Ae(B.origin !== void 0, {
        messages: [ ...u, uy(`/${Ue}${P ? ` ${BA(GZ(P))}` : ""}`, {
          submitUuid: y
        }), uy(`<local-command-stdout>${Ne}</local-command-stdout>`, {
          commandOutcome: {
            kind: "unknown",
            ...Fe !== void 0 && {
              suggestion: Fe
            }
          }
        }) ],
        shouldQuery: !1,
        resultText: Ne
      });
      return Ae(B.origin !== void 0, {
        messages: [ ...u, Wt(Ne, "warning"), ...P ? [ Wt(`Args from unknown skill: ${GZ(P)}`, "warning") ] : [] ],
        shouldQuery: !1,
        resultText: Ne
      });
    }
    return O();
  }
  let ne = V || p.loadedFrom === "mcp" ? "mcp" : te || p.type === "prompt" && (p.source === "bundled" || p.source === "builtin") ? "builtin" : "custom", pe = Ibe(p, P) ? `/${_} ***` : e, ke = r.deferSlashToEngine?.(p) ?? !1;
  if (!ke) {
    let M = we();
    cFt(M), Ws("user_prompt", {
      prompt_length: String(pe.length),
      ...gXt(pe),
      "prompt.id": M,
      command_name: ne === "builtin" || Fc() ? _ : ne,
      command_source: ne
    });
  }
  let ie = p, re = Ro(ie), Ce = P, Me = new Map, Ee = async M => {
    Ce = M;
    let W = await Lt(_, M, r, n, o, h, C, y, R, A, E, I, D, w, H, N, K, Y, F && (async () => {
      let ye = Me.get(M) ?? F({
        name: re,
        args: P,
        argsRanWith: M
      });
      return Me.set(M, ye), We(await ye);
    })), le = await Me.get(M);
    return le === void 0 ? W : {
      ...W,
      lineCheck: le
    };
  };
  if (ke) B.handOn(r.abortController.signal);
  let ae = ke ? {
    kind: "engine",
    ran: await Ee(P)
  } : await Gjn(BRn({
    input: {
      command: re,
      args: P,
      origin: URn({
        submissionOrigin: N,
        dispatchedOverBridge: r.dispatchedOverBridge,
        promptSource: w
      }),
      presentation: xKe(r.presentation)
    },
    engine: {
      run: Ee,
      textOf: M => M.resultText,
      contextOf: M => M.metaTexts,
      retell: Nt
    },
    queued: B,
    ahead: T,
    signal: r.abortController.signal
  }), r.abortController.signal), oe = ae === void 0 ? await Promise.all(Me.values()) : [], L = oe.some(We) ? void 0 : oe.at(-1), Se = M => xe({
    content: VW({
      inputString: Ie(ie, M),
      precedingInputBlocks: n
    }),
    uuid: y,
    origin: N
  });
  if (L !== void 0) return {
    messages: [ Se(L.ran.argsRanWith) ],
    shouldQuery: !0,
    ranCommand: L.ran,
    lineCheck: L
  };
  if (ae === void 0) return Kar({
    signal: r.abortController.signal,
    typed: [ ...u, Se(P) ],
    marker: Kk({
      toolUse: !1
    }),
    isQueuedByPlugin: B.origin !== void 0
  });
  let {messages: J, shouldQuery: ge, allowedTools: _e, disallowedTools: Xe, model: He, effort: kt, command: x, resultText: Ze, nextInput: et, submitNextInput: tt, engineDeferredSlash: De, forkDispatched: Ct, settledInPlace: St, lineCheck: $e} = ae.kind === "engine" ? ae.ran : Ot(ae.text, ae.context, {
    plugin: ae.plugin,
    command: ie,
    commandName: _,
    args: P,
    precedingInputBlocks: n,
    uuid: y,
    submissionOrigin: N,
    isNonInteractiveSession: r.options.isNonInteractiveSession === !0
  });
  if (x.type === "prompt" && x.pluginInfo) GD(x.pluginInfo.repository, "command", Wkt(x, x.pluginInfo.pluginManifest.name));
  let {sanitizedName: Be, skillNameHash: _t} = aY({
    rawName: _,
    canonicalName: x.name,
    isMcp: V || x.loadedFrom === "mcp",
    isBuiltIn: te,
    isBundled: z,
    isOfficial: X
  });
  function ot() {
    let M = {
      input: Be,
      ..._t
    };
    if (x.type === "prompt" && x.pluginInfo) {
      Object.assign(M, L9t(x));
      let W = x.pluginInfo.pluginManifest.version;
      if (W && o8(x)) M.plugin_version = Di(W);
    }
    if (x.type === "prompt") Object.assign(M, Hce(x));
    i("tengu_input_command", {
      ...M,
      invocation_trigger: b("user-slash"),
      ...i5t({
        wakeupSource: s,
        hostInitiator: fe
      }),
      ...Mce(x.type === "prompt" ? x.source : void 0, x.loadedFrom, x.kind, x.type === "prompt" ? x.createdBy : void 0),
      ...Pwt(x.type === "prompt" ? x.source : void 0, _),
      ...x.type === "prompt" && {
        command_content_chars: x.contentLength
      },
      ...x.type === "prompt" && {
        _PROTO_skill_name: x.name
      },
      ...!1
    });
  }
  if (J.length === 0) {
    if (St) g("cmd_dispatch");
    return ot(), {
      messages: [],
      shouldQuery: !1,
      model: He,
      resultText: Ze,
      nextInput: et,
      submitNextInput: tt,
      localCommand: Be,
      ...ae.exitCode !== void 0 && {
        commandExitCode: ae.exitCode
      }
    };
  }
  if (J.length === 2 && J[1].type === "user" && typeof J[1].message.content === "string" && J[1].message.content.startsWith("Unknown command:")) {
    if (!(e.startsWith("/var") || e.startsWith("/tmp") || e.startsWith("/private"))) i("tengu_input_slash_invalid", {
      input_length: _.length,
      had_suggestion: !1
    }), m("cmd_dispatch", "cmd_unknown");
    return {
      messages: [ z_e(), ...J ],
      shouldQuery: ge,
      allowedTools: _e,
      disallowedTools: Xe,
      model: He,
      ranCommand: {
        name: re,
        args: P,
        argsRanWith: Ce
      }
    };
  }
  if (!De) g("cmd_dispatch"), ot();
  let bt = J.length > 0 && J[0] && Ko(J[0]), nt = ge || J.every(M => Tz(M) || M.type === "system" && M.subtype === "informational" || M.type === "user" && M.isMeta) || bt || De ? J : [ z_e(), ...J ];
  return {
    messages: v && ge && ($e === void 0 || We($e)) ? [ ...nt, v ] : nt,
    shouldQuery: ge,
    allowedTools: _e,
    disallowedTools: Xe,
    model: He,
    effort: kt,
    resultText: Ze,
    nextInput: et,
    submitNextInput: tt,
    engineDeferredSlash: De,
    forkDispatched: Ct,
    ...!De && {
      localCommand: Be
    },
    ...ae.exitCode !== void 0 && {
      commandExitCode: ae.exitCode
    },
    ranCommand: $e?.ran ?? {
      name: re,
      args: P,
      argsRanWith: Ce
    },
    ...$e !== void 0 && {
      lineCheck: $e
    }
  };
}

function We(e) {
  return e.outcome?.proceeds !== void 0;
}

function Ot(e, n, {plugin: o, command: u, commandName: r, args: y, precedingInputBlocks: h, uuid: C, submissionOrigin: w, isNonInteractiveSession: R}) {
  let A = EX(U4().has(r) ? r : "custom");
  g(A, uDe(u.name));
  let G = R || h.length > 0 || !Vh(w), D = n ?? [];
  if (e === void 0 && D.length === 0 && !G) return {
    messages: [],
    shouldQuery: !1,
    command: u
  };
  return {
    messages: [ G ? xe({
      content: VW({
        inputString: be(u, y),
        precedingInputBlocks: h
      }),
      uuid: C,
      origin: w
    }) : uy(be(u, y)), ...e === void 0 ? [] : [ uy(`<local-command-stdout>${BA(e)}</local-command-stdout>`, {
      commandRun: poe(u, y, o)
    }) ], ...D.map(N => xe({
      content: N,
      isMeta: !0
    })) ],
    shouldQuery: !1,
    command: u,
    resultText: e,
    ...D.length > 0 && {
      metaTexts: D
    }
  };
}

function Nt(e, {text: n, plugin: o, context: u}) {
  if (e.shouldQuery || e.nextInput !== void 0 || e.settledInPlace) return;
  let r = e.messages;
  if (n !== void 0) {
    let y = e.resultText === void 0 ? -1 : r.findIndex(w => Tz(w) && (w.content.startsWith(`<${wl}>`) || w.content.startsWith(`<${Cf}>`)));
    if (y === -1) return;
    let h = r[y], C = h !== void 0 && Tz(h) && h.content.startsWith(`<${Cf}>`) ? Cf : wl;
    r = r.with(y, uy(`<${C}>${BA(n)}</${C}>`, h !== void 0 && Tz(h) ? {
      commandRun: h.commandRun !== void 0 && o !== void 0 ? {
        ...h.commandRun,
        plugin: o
      } : h.commandRun,
      commandOutcome: h.commandOutcome
    } : void 0));
  }
  if (u !== void 0) {
    if (!(e.metaTexts !== void 0 || r.some(C => Tz(C) && (C.content.startsWith(`<${wl}>`) || C.content.startsWith(`<${Cf}>`))))) return;
    let h = new Map;
    for (let C of e.metaTexts ?? []) h.set(C, (h.get(C) ?? 0) + 1);
    r = [ ...r.filter(C => {
      let w = C.type === "user" && C.isMeta && typeof C.message.content === "string" ? C.message.content : void 0, R = w === void 0 ? 0 : h.get(w) ?? 0;
      if (w === void 0 || R === 0) return !0;
      return h.set(w, R - 1), !1;
    }), ...u.map(C => xe({
      content: C,
      isMeta: !0
    })) ];
  }
  return {
    ...e,
    messages: r,
    resultText: n ?? e.resultText,
    ...(u ?? e.metaTexts) !== void 0 && {
      metaTexts: u ?? e.metaTexts
    }
  };
}

function Ge(e, n, o) {
  let u = `/${Ro(e)} opens an interactive panel and isn't available in this environment. Run it from the Claude Code terminal instead.`;
  return {
    messages: [ uy(Ie(e, n), {
      submitUuid: o
    }), uy(`<local-command-stdout>${u}</local-command-stdout>`, {
      commandOutcome: {
        kind: "unavailable_headless"
      }
    }) ],
    shouldQuery: !1,
    command: e,
    resultText: u
  };
}

async function Lt(e, n, o, u, r, y, h, C, w, R, A, G, D, H, N, K, Y, ce, ee) {
  let s = FXt(e, o.options.commands), fe = T$t(n);
  if (fe.some(T => T.kind === "block")) n = fe.map(T => T.kind === "text" ? T.text : T.body).join(`\n\n`).trim();
  let F = EX(U4().has(e) ? e : "custom"), B = uDe(s.name);
  if (!lc(s)) {
    m(F, "cmd_policy_disabled");
    let T = `/${BA(Xt(e))} isn't available in this session.`;
    if (o.options.isNonInteractiveSession) return {
      messages: [ uy(Ie(s, n), {
        submitUuid: C
      }), uy(`<local-command-stdout>${T}</local-command-stdout>`) ],
      shouldQuery: !1,
      command: s,
      resultText: T
    };
    return {
      messages: [ Wt(T, "warning") ],
      shouldQuery: !1,
      command: s,
      resultText: T
    };
  }
  if (RT(s)) {
    if (m(F, "cmd_skill_override_off"), o.options.isNonInteractiveSession) {
      let U = `Skill "${fo(s.name, 200)}" is disabled via skillOverrides. Remove the override from your settings to run it.`;
      return {
        messages: [ uy(Ie(s, n), {
          submitUuid: C
        }), uy(`<local-command-stdout>${U}</local-command-stdout>`) ],
        shouldQuery: !1,
        command: s,
        resultText: U
      };
    }
    let T = `Skill "${fo(s.name, 200)}" is disabled via skillOverrides. Re-enable it in /skills or remove the override from your settings to run it.`, O = !n ? "" : Ibe(s, n) ? "***" : BA(GZ(n));
    return {
      messages: [ Wt(T, "warning"), ...n ? [ Wt(`Args from disabled skill: ${O}`, "warning") ] : [] ],
      shouldQuery: !1,
      command: s,
      resultText: T
    };
  }
  if (s.type === "prompt" && s.userInvocable !== !1) s6t(o.session, s.name, o.storageV5);
  if (s.type === "prompt" && s.pluginInfo) LT(s.pluginInfo.repository);
  if (!o.deferSlashToEngine?.(s)) Qe({
    commandName: s.name,
    agentId: o.agentId,
    isNonInteractiveSession: Boolean(o.options.isNonInteractiveSession),
    setAppState: o.setAppState,
    credentials: o.credentials
  });
  if (s.userInvocable === !1) return m(F, "cmd_not_user_invocable"), {
    messages: [ xe({
      content: VW({
        inputString: `/${Xt(e)}`,
        precedingInputBlocks: u
      }),
      uuid: C
    }), xe({
      content: `This skill can only be invoked by Claude, not directly by users. Ask Claude to use the "${Xt(e)}" skill for you.`
    }) ],
    shouldQuery: !1,
    command: s
  };
  if (s.type === "local-jsx" && o.options.isNonInteractiveSession) return m(F, "cmd_local_jsx_headless"), 
  Ge(s, n, C);
  try {
    switch (s.type) {
     case "local-jsx":
      return new Promise(T => {
        let O = !1, U = (S, E) => {
          if (O) return;
          if (O = !0, g(F, B), E?.display === "skip") {
            T({
              messages: [],
              shouldQuery: !1,
              command: s,
              nextInput: E?.nextInput,
              submitNextInput: E?.submitNextInput
            });
            return;
          }
          let p = (E?.metaMessages ?? []).map(I => xe({
            content: I,
            isMeta: !0
          })), v = o.presentation === "fullscreen" && typeof S === "string" && S.endsWith(" dismissed");
          T({
            messages: E?.display === "system" ? v ? p : [ uy(be(s, n)), uy(`<local-command-stdout>${BA(String(S))}</local-command-stdout>`, {
              commandRun: poe(s, n)
            }), ...p ] : [ xe({
              content: VW({
                inputString: be(s, n),
                precedingInputBlocks: u
              }),
              uuid: C
            }), S ? xe({
              content: `<local-command-stdout>${S}</local-command-stdout>`
            }) : xe({
              content: `<local-command-stdout>${Rc}</local-command-stdout>`
            }), ...p ],
            shouldQuery: E?.shouldQuery ?? !1,
            command: s,
            nextInput: E?.nextInput,
            submitNextInput: E?.submitNextInput,
            ...p.length > 0 && {
              metaTexts: E?.metaMessages
            }
          });
        }, _ = s.load ?? o.options.resolveCommandDialog?.(s);
        if (!_) {
          m(F, "cmd_local_jsx_no_dialog_resolution"), T(Ge(s, n));
          return;
        }
        let P = Sbe(s, n, o.presentation ?? "inline");
        _().then(S => S.call(U, {
          ...o,
          canUseTool: h,
          dispatchedAsImmediate: P,
          submissionOrigin: K,
          promptSource: H
        }, n, G ?? e)).then(S => {
          if (S == null) return;
          if (O) return;
          let E = o.localJsx;
          if (!E) {
            m(F, "cmd_local_jsx_no_panel_host"), O = !0, T(Ge(s, n));
            return;
          }
          E.show(S, {
            commandName: Ro(s),
            immediate: P,
            hidesPrompt: !0,
            retireAtTurnBoundary: !0
          }).closed.then(v => {
            if (v === "dismissed" && !O) O = !0, m(F, "cmd_local_jsx_dismissed"), T({
              messages: [],
              shouldQuery: !1,
              command: s
            });
          });
        }).catch(S => {
          let E = Ve(S);
          if (E) t(`local-jsx command aborted: ${S instanceof Error ? S.message : String(S)}`); else d(Je(j(S), "local-jsx slash command threw"));
          if (m(F, E ? "cmd_local_jsx_aborted" : "cmd_local_jsx_threw"), O) return;
          if (O = !0, E) {
            T({
              messages: [],
              shouldQuery: !1,
              command: s
            });
            return;
          }
          T({
            messages: [ xe({
              content: VW({
                inputString: be(s, n),
                precedingInputBlocks: u
              }),
              uuid: C
            }), uy(`<local-command-stderr>${$t(BA(w2e(S, s.name, o.session)))}</local-command-stderr>`, {
              commandRun: poe(s, n),
              commandOutcome: {
                kind: "failed"
              }
            }) ],
            shouldQuery: !1,
            command: s
          });
        });
      });

     case "local":
      {
        if (o.deferSlashToEngine?.(s)) {
          let U = `/${Ro(s)} ${n}`.trim(), _ = xe({
            content: VW({
              inputString: U,
              precedingInputBlocks: u
            }),
            uuid: C
          });
          return {
            messages: [ _ ],
            shouldQuery: !1,
            command: s,
            engineDeferredSlash: {
              text: U,
              messageUuid: _.uuid,
              origin: K
            }
          };
        }
        let T = xe({
          content: VW({
            inputString: be(s, n),
            precedingInputBlocks: u
          }),
          uuid: C
        }), O = Dt() && qir(s).workspace;
        if (O) o.applyMessageOp({
          type: "append",
          messages: [ T ]
        });
        try {
          let U = z_e(), P = (await s.load()).call(n, {
            ...o,
            submissionOrigin: K,
            promptSource: H,
            commandMessageUuid: T.uuid
          }, G ?? e), S = O ? await Ea(P, o.abortController.signal, () => new Ye) : await P;
          if (S.type === "text" && S.level === "error") m(F, "cmd_returned_error"); else g(F, B);
          if (S.type === "skip") return {
            messages: [],
            shouldQuery: !1,
            command: s
          };
          if (S.type === "compact") {
            let v = [ U, T, ...S.displayText ? [ xe({
              content: `<local-command-stdout>${BA(S.displayText)}</local-command-stdout>`,
              ...S.displayRepeatsSummary === !0 && {
                repeatsCompactSummary: !0
              },
              timestamp: new Date(Date.now() + 100).toISOString()
            }) ] : [] ], I = {
              ...S.compactionResult,
              messagesToKeep: [ ...S.compactionResult.messagesToKeep, ...v ]
            }, Q = lF(I);
            return MAt(Q), {
              messages: Q,
              shouldQuery: !1,
              command: s
            };
          }
          if (S.type === "query") return {
            messages: [ T, uy(`<local-command-stdout>${BA(S.value)}</local-command-stdout>`, {
              commandRun: poe(s, n)
            }), ...(S.metaMessages ?? []).map(v => xe({
              content: v,
              isMeta: !0
            })), xe({
              content: S.prompt,
              isMeta: !0
            }) ],
            shouldQuery: !0,
            command: s,
            resultText: S.value,
            ...S.metaMessages !== void 0 && {
              metaTexts: S.metaMessages
            }
          };
          let E = S.level === "error" ? "local-command-stderr" : "local-command-stdout", p = uy(`<${E}>${BA(S.value)}</${E}>`, {
            contextUsage: S.contextUsage,
            usageReport: S.usageReport,
            commandRun: poe(s, n),
            commandOutcome: S.outcome ?? (S.level === "error" ? {
              kind: "failed"
            } : void 0)
          });
          if (O) return ht(o, T, {
            messages: [ p ],
            shouldQuery: !1,
            command: s,
            resultText: S.value
          });
          return {
            messages: [ T, p, ...(S.metaMessages ?? []).map(v => xe({
              content: v,
              isMeta: !0
            })) ],
            shouldQuery: !1,
            command: s,
            resultText: S.value,
            ...S.metaMessages !== void 0 && {
              metaTexts: S.metaMessages
            }
          };
        } catch (U) {
          if (Ve(U)) t(`local command aborted: ${U instanceof Error ? U.message : String(U)}`); else d(Je(j(U), "local slash command threw"));
          let _ = Ve(U);
          if (_ && o.abortController.signal.aborted) f(F, "cmd_local_aborted"); else m(F, _ ? "cmd_local_aborted" : "cmd_local_threw");
          let P = _ ? "local-command-stdout" : "local-command-stderr", S = O ? n4n : "Interrupted", E = _ ? go(o.session) ? S : U instanceof Error ? U.message || S : S : w2e(U, s.name, o.session), p = uy(`<${P}>${$t(BA(E))}</${P}>`, _ ? void 0 : {
            commandRun: poe(s, n),
            commandOutcome: {
              kind: "failed"
            }
          });
          if (O) return ht(o, T, {
            messages: [ p ],
            shouldQuery: !1,
            command: s
          });
          return {
            messages: [ T, p ],
            shouldQuery: !1,
            command: s
          };
        }
      }

     case "prompt":
      {
        let {stacked: T, trailingArgs: O, capped: U} = s.context === "fork" || s.getContext !== void 0 || s.argsMayContainSlashCommands ? {
          stacked: [],
          trailingArgs: n,
          capped: !1
        } : Ht(n, A, o.options.commands, w ? R ?? (() => !0) : void 0), _ = O, P;
        if (T.length > 0) i("tengu_stacked_slash_commands", {
          stacked_count: T.length
        });
        try {
          let S = iDn(s, _, o) === "fork" && !Eoe(o);
          if (!S && await (ee?.()) === !1) return m(F, o.abortController.signal.aborted ? "cmd_prompt_aborted" : "cmd_prompt_submit_hook_blocked"), 
          {
            messages: [ xe({
              content: VW({
                inputString: Ie(s, n),
                precedingInputBlocks: u
              }),
              uuid: C,
              origin: K
            }) ],
            shouldQuery: !0,
            command: s
          };
          if (!(s.isMcp && s.loadedFrom !== "mcp")) FRt(s.name, s, "user-slash");
          let E = await gt(s, _, o);
          if ("blocked" in E) return m(F, "cmd_hook_blocked"), E.blocked;
          if (!o.options.isNonInteractiveSession && !w) {
            if (s.onUserTypedArgs?.(_, o), s.getEffort?.(_, o) === void 0) {
              let v = s.getDefaultEffort?.(_, o)?.notice;
              if (v) P = Wt(v, "notice");
            }
          }
          if (S) {
            let v = `/${e} ${n}`.trim(), I = cy([ ...u, {
              type: "text",
              text: v
            } ]) ?? v;
            if (!N) throw Error("Forked dispatch requires forkDispatchHookExecutors");
            let Q = [], te = [];
            for await (let X of N.executeUserPromptSubmitHooks(I, de(o).mode, o, Txn({
              promptSource: H ?? "typed"
            }))) {
              if (X.message?.type === "progress") continue;
              if (X.message?.type === "attachment") {
                let V = X.message.attachment;
                if ("hookEvent" in V && V.hookEvent === "UserPromptSubmit") {
                  if (V.type === "hook_non_blocking_error") te.push(V.stderr || `Exit code ${V.exitCode}`); else if (V.type === "hook_error_during_execution") te.push(V.content);
                }
              }
              if (X.blockingError) {
                m(F, "cmd_prompt_submit_hook_blocked");
                let V = N.getUserPromptSubmitHookBlockingMessage(X.blockingError), ne = X.suppressOriginalPrompt ? V : `${V}\n\nOriginal prompt: ${I}`;
                return {
                  messages: [ Wt(ne, "warning", void 0, !0) ],
                  shouldQuery: !1,
                  resultText: ne,
                  command: s,
                  forkDispatched: !0
                };
              }
              if (X.preventContinuation) {
                let V = X.stopReason ? `Operation stopped by hook: ${X.stopReason}` : "Operation stopped by hook";
                return m(F, "cmd_prompt_submit_hook_stopped"), {
                  messages: [ xe({
                    content: V
                  }), Wt(V, "warning", void 0, !0) ],
                  shouldQuery: !1,
                  resultText: V,
                  command: s,
                  forkDispatched: !0
                };
              }
              if (X.additionalContexts && X.additionalContexts.length > 0) Q.push(Qt({
                type: "hook_additional_context",
                content: X.additionalContexts,
                hookName: "UserPromptSubmit",
                toolUseID: `hook-${we()}`,
                hookEvent: "UserPromptSubmit"
              }));
            }
            let z = await Et(s, _, o, u, r, h ?? Zu, N, [ ...E.hookMessages, ...Q ], w, C, D, K, Y);
            if (te.length > 0) z.messages.push(Wt(`UserPromptSubmit hook error: ${te.join("; ")}`, "warning"));
            if (z.aborted) m(F, "cmd_prompt_aborted"); else if (z.threw) m(F, "cmd_prompt_threw"); else if (g(F, B), 
            P) z.messages.splice(1, 0, P);
            return z;
          }
          let p = await qe(s, _, o, u, r, C, E.hookMessages, w, K, ce, !1, !1, H);
          if (T.length > 0 && A !== void 0) {
            let v = p.messages[0];
            if (v?.type === "user" && !v.isMeta) v.stackedOriginalInput = `/${s.name} ${A}`;
          }
          for (let v of T) try {
            let I = await gt(v, O, o);
            if ("blocked" in I) {
              p.messages.push(Wt(`Stacked skill /${Xt(v.name)} blocked by UserPromptExpansion hook`, "warning"));
              continue;
            }
            if (!o.options.isNonInteractiveSession && !w) {
              if (v.onUserTypedArgs?.(O, o), v.getEffort?.(O, o) === void 0) {
                let z = v.getDefaultEffort?.(O, o)?.notice;
                if (z) p.messages.push(Wt(z, "notice"));
              }
            }
            if (Qe({
              commandName: v.name,
              agentId: o.agentId,
              isNonInteractiveSession: Boolean(o.options.isNonInteractiveSession),
              setAppState: o.setAppState,
              credentials: o.credentials
            }), s6t(o.session, v.name, o.storageV5), v.pluginInfo) LT(v.pluginInfo.repository), 
            GD(v.pluginInfo.repository, "command", Wkt(v, v.pluginInfo.pluginManifest.name));
            if (!(v.isMcp && v.loadedFrom !== "mcp")) FRt(v.name, v, "user-slash");
            let Q = await qe(v, O, o, [], [], void 0, I.hookMessages, w, K, void 0, !1, !1, H), te = Q.messages[0];
            if (te?.type === "user" && !te.isMeta) te.stackedExpansion = !0;
            p.messages.push(...Q.messages), p.allowedTools = [ ...p.allowedTools ?? [], ...Q.allowedTools ?? [] ], 
            p.disallowedTools = [ ...p.disallowedTools ?? [], ...Q.disallowedTools ?? [] ], 
            p.model = Q.model ?? p.model, p.effort = Q.effort ?? p.effort;
          } catch (I) {
            if (Ve(I)) throw I;
            d(Je(j(I), "stacked slash command expansion threw")), p.messages.push(Wt(`Stacked skill /${Xt(v.name)} failed to load: ${w2e(I, v.name, o.session)}`, "warning"));
          }
          if (U) p.messages.push(Wt(`Stacked command limit (${yt}) reached \u2014 remaining input passed as arguments`, "warning"));
          if (P) p.messages.push(P);
          return g(F, B), p;
        } catch (S) {
          if (Ve(S)) {
            m(F, "cmd_prompt_aborted");
            let E = [ xe({
              content: VW({
                inputString: be(s, n),
                precedingInputBlocks: u
              }),
              uuid: C
            }) ];
            if (!JZ(o.abortController.signal.reason)) E.push(Kk({
              toolUse: !1,
              interruptedByShutdown: aA(o.abortController.signal)
            }));
            return {
              messages: E,
              shouldQuery: !1,
              command: s
            };
          }
          return m(F, "cmd_prompt_threw"), {
            messages: [ xe({
              content: VW({
                inputString: be(s, n),
                precedingInputBlocks: u
              }),
              uuid: C
            }), xe({
              content: `<local-command-stderr>${$t(w2e(S, s.name, o.session))}</local-command-stderr>`
            }) ],
            shouldQuery: !1,
            command: s
          };
        }
      }
    }
  } catch (T) {
    if (T instanceof AI) return m(F, "cmd_malformed"), {
      messages: [ xe({
        content: VW({
          inputString: T.message,
          precedingInputBlocks: u
        })
      }) ],
      shouldQuery: !1,
      command: s
    };
    throw T;
  }
}

function be(e, n) {
  let o = poe(e, n);
  return $re(o.command, o.args);
}

function Ie(e, n) {
  return $re(Xt(Ro(e)), Ibe(e, n) ? "***" : GZ(n));
}

function Ae(e, n) {
  return e ? {
    messages: [],
    shouldQuery: !1
  } : n;
}

var yt = 5;

function Ht(e, n, o, u) {
  if (n === void 0 && u === void 0) return {
    stacked: [],
    trailingArgs: e,
    capped: !1
  };
  let r = [], y = e, h = n, C = !1;
  for (let w = 0; ;w++) {
    let R = y.trimStart();
    if (!R.startsWith("/")) break;
    if (w >= yt) {
      C = !0;
      break;
    }
    let A = wS(R);
    if (!A) break;
    let G = h;
    if (h !== void 0) {
      let H = h.trimStart(), N = H.startsWith("/") ? wS(H) : void 0;
      if (!N || N.commandName !== A.commandName) break;
      G = N.args;
    }
    let D = Ls(A.commandName, o);
    if (!D || D.type !== "prompt" || D.context === "fork" || D.getContext !== void 0 || D.argsMayContainSlashCommands || D.userInvocable === !1 || !lc(D) || RT(D)) break;
    if (y = A.args, h = G, u?.(D)) continue;
    r.push(D);
  }
  return {
    stacked: r,
    trailingArgs: y,
    capped: C
  };
}

function k3o(e, n = "loading") {
  return [ `<${fS}>${e}</${fS}>`, `<${Cp}>${e}</${Cp}>`, `<${b$t}>true</${b$t}>` ].join(`\n`);
}

function gYs(e, n) {
  return e === k3o(n);
}

function pt(e, n) {
  return [ `<${fS}>${e}</${fS}>`, `<${Cp}>/${e}</${Cp}>`, n ? `<command-args>${n}</command-args>` : null ].filter(Boolean).join(`\n`);
}

function ft(e, n) {
  if (e.userInvocable !== !1) return pt(e.name, n);
  if (e.loadedFrom === "skills" || e.loadedFrom === "syncedSkills" || e.loadedFrom === "plugin" || e.loadedFrom === "mcp" || e.loadedFrom === "memoryStore" || e.loadedFrom === "attachedFolder") return k3o(e.name, e.progressMessage);
  return pt(e.name, n);
}

async function gt(e, n, o) {
  let u = [], r = n ? `/${e.name} ${n}` : `/${e.name}`;
  try {
    for await (let y of Deo(e.source === "mcp" ? "mcp_prompt" : "slash_command", e.name, n, e.source, r, de(o).mode, o)) {
      if (y.message?.type === "progress") continue;
      if (y.blockingError) {
        let h = `UserPromptExpansion operation blocked by hook:\n${y.blockingError.blockingError}`, C = y.suppressOriginalPrompt ? h : `${h}\n\nOriginal prompt: ${r}`;
        return {
          blocked: {
            messages: [ Wt(C, "warning", void 0, !0) ],
            shouldQuery: !1,
            resultText: C,
            command: e
          }
        };
      }
      if (y.preventContinuation) {
        let h = y.stopReason ? `${gIe}: ${y.stopReason}` : gIe;
        return {
          blocked: {
            messages: [ xe({
              content: h,
              isMeta: !0
            }), Wt(h, "warning", void 0, !0) ],
            shouldQuery: !1,
            resultText: h,
            command: e
          }
        };
      }
      if (y.additionalContexts?.length) u.push(Qt({
        type: "hook_additional_context",
        content: y.additionalContexts,
        hookName: "UserPromptExpansion",
        toolUseID: `hook-${we()}`,
        hookEvent: "UserPromptExpansion"
      }));
      if (y.message && !(y.message.type === "attachment" && y.message.attachment.type === "hook_success" && y.message.attachment.content === "")) u.push(y.message);
    }
  } catch (y) {
    if (!(y instanceof pd)) throw y;
    t("UserPromptExpansion hooks cancelled (control stream closed)");
  }
  return {
    hookMessages: u
  };
}

async function hYs(e, n, o, u, r = !1, y = !1) {
  let h = Ls(e, o);
  if (!h) throw new AI(`Unknown command: ${Xt(e)}`);
  if (h.type !== "prompt") throw Error(`Unexpected ${h.type} command. Expected 'prompt' command. Use /${e} directly in the main conversation.`);
  return qe(h, n, u, [], [], void 0, [], void 0, void 0, void 0, r, y);
}

async function qe(e, n, o, u = [], r = [], y, h = [], C, w, R, A = !1, G = !1, D) {
  let H = await Hde(e);
  if (n_e(e) || vIt(e)) throw new AI(`Unknown command: ${Xt(e.name)}`);
  if (Dde(H)) throw _Q(e, H), new AI(`Unknown command: ${Xt(e.name)}`);
  if (Eoe(o) && !A) {
    let I = ft(e, n), Q = e.isMcp && e.loadedFrom !== "mcp", te = f3(e);
    if (e.disableModelInvocation || Q || te) {
      let ne = [ Q ? `"/${Xt(e.name)}" is an MCP prompt and cannot run in coordinator mode: the coordinator does not load prompt content, and workers cannot invoke MCP prompts via the ${ho} tool.` : `Skill "/${Xt(e.name)}" is user-invocable only (${e.disableModelInvocation ? "disable-model-invocation" : "disabled for model invocation in settings"}) and cannot run in coordinator mode: the coordinator does not load skill content, and workers cannot invoke it via the ${ho} tool.` ];
      if (e.description) ne.push(`Description: ${e.description}`);
      let pe = Object.entries(e.subcommands ?? {}).filter(([, ie]) => {
        let re = Ls(ie, o.options.commands);
        return re !== void 0 && lc(re) && !re.disableModelInvocation && !f3(re) && !(re.isMcp && re.loadedFrom !== "mcp");
      }).map(([ie]) => ie);
      if (pe.length > 0) ne.push(`Note: the subcommands ${pe.map(ie => `"/${Xt(e.name)} ${Xt(ie)}"`).join(", ")} route to their own dedicated commands and DO still work when the user types them directly in the terminal (remote-control clients gate some commands separately).`);
      ne.push(`\nDo not instruct workers to invoke this via the ${ho} tool \u2014 it will be refused. Tell the user that ${pe.length > 0 ? `/${Xt(e.name)} itself (beyond the subcommands above) is` : `the /${Xt(e.name)} command is`} unavailable in coordinator mode. If \u2014 and only if \u2014 the underlying task is achievable with the tools workers actually hold, you may brief a worker to do that work directly; do not promise this otherwise.`);
      let ke = [ {
        type: "text",
        text: ne.join(`\n`)
      } ];
      return {
        messages: [ xe({
          content: I,
          uuid: y,
          origin: w
        }), ...ze([ xe({
          content: Ke(r, u, ke),
          isMeta: !0
        }), ...h ]) ],
        shouldQuery: !0,
        disallowedTools: fu(e.disallowedTools ?? []),
        command: e
      };
    }
    let z = [ `Skill "/${Xt(e.name)}" is available for workers.` ];
    if (e.description) z.push(`Description: ${e.description}`);
    if (e.whenToUse) z.push(`When to use: ${e.whenToUse}`);
    let X = await $5e(e);
    if (X.length > 0) z.push(`This skill grants workers additional tool permissions: ${X.map(Xt).join(", ")}`);
    z.push(`\nInstruct a worker to use this skill by including "Use the /${Xt(e.name)} skill" in your Agent prompt. The worker has access to the Skill tool and will receive the skill's content and permissions when it invokes it.`);
    let V = [ {
      type: "text",
      text: z.join(`\n`)
    } ];
    return {
      messages: [ xe({
        content: I,
        uuid: y,
        origin: w
      }), ...ze([ xe({
        content: Ke(r, u, V),
        isMeta: !0
      }), ...h ]) ],
      shouldQuery: !0,
      disallowedTools: fu(e.disallowedTools ?? []),
      command: e
    };
  }
  let N = [], K = {
    ...o,
    submissionOrigin: w,
    promptSource: D,
    promptShellHandOff: N,
    ...(C || A) && {
      options: {
        ...o.options,
        ...C && {
          modelScheduledOrigin: !0
        },
        ...A && {
          isSkillPreload: !0,
          readOnlySkillLoad: !0
        }
      }
    }
  }, Y = await zar(e.name, await e.getPromptForCommand(n, K), e), ce = A ? [] : await $5e(e), ee = !A && (e.hooks !== void 0 || ce.length > 0) ? await Hde(e) : void 0, s = (!bd("hooks") || oK(e.source)) && !A;
  if (ee !== void 0) {
    let I = {
      hooks: e.hooks !== void 0 && s,
      grant: ce.length > 0
    };
    if (I.hooks || I.grant) y_s(Xt(e.name), ee, I);
  } else if (e.hooks && s) {
    let I = q();
    rt(o.sessionHooksRegistry, I, e.hooks, e.name, e.type === "prompt" ? e.skillRoot : void 0, yws(e), itt(e.source));
  }
  let fe = e.source ? `${e.source}:${e.name}` : e.name, F = Y.filter(I => I.type === "text").map(I => I.text).join(`\n\n`);
  frt(F, "skill", o.credentials, o.storageV5, o.appendSystemMessage);
  let B = rat(e.name);
  if (!(A && B !== null)) ote(e.name, fe, F, o.agentId ?? null);
  if (B && !A) o.applyAttributionOp({
    kind: "recordVerification",
    method: B
  });
  o.options.activeSkill = WD(e);
  let O = ft(e, n), U = ee !== void 0 ? [] : fu(ce), _ = fu(e.disallowedTools ?? []);
  if (_.length > 0) Iwt(o.setToolPermissionContext, _, "union");
  let P = Ke(r, u, Y), E = E6e(e) || A || C || G ? [] : await L0e(rce(Y.filter(I => I.type === "text").map(I => I.text).join(" "), o, R ?? null, [], {
    now: () => (new Date).toISOString(),
    uuid: () => we()
  }, o.messages, "repl_main_thread", {
    planSlugSeed: n
  })), p = await U2t(e, pm(), o);
  return {
    messages: [ xe({
      content: O,
      uuid: y,
      origin: w
    }), ...ze([ xe({
      content: P,
      isMeta: !0,
      ...N.length > 0 && {
        promptShellHandOff: {
          agentId: o.agentId ?? null,
          commands: N
        }
      }
    }), ...p ? [ p ] : [], ...E, ...h ]), Qt({
      type: "command_permissions",
      allowedTools: U,
      model: $we(e.model)
    }) ],
    shouldQuery: !0,
    allowedTools: U,
    disallowedTools: _,
    model: $we(e.model),
    effort: e.getEffort?.(n, o) ?? e.getDefaultEffort?.(n, o)?.value ?? e.effort,
    command: e
  };
}

function Ke(e, n, o) {
  return e.length > 0 || n.length > 0 ? [ ...e, ...n, ...o ] : o;
}

function ht(e, n, o) {
  return e.applyMessageOp({
    type: "insert-after-uuid",
    uuid: n.uuid,
    messages: o.messages
  }), {
    ...o,
    messages: [],
    settledInPlace: !0
  };
}

function ze(e) {
  return e.map(n => n.type === "user" ? {
    ...n,
    turnCompanion: !0
  } : n);
}

export { Zet, F2t, w2e, mYs, k3o, gYs, hYs };
