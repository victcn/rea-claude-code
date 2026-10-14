// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { To } from "./chunk-vxr6sv7z.js";

import { Ze, ke, pm, ve, Gje, he, ote, FX } from "./chunk-3pqddg8f.js";

import { c, pe } from "./chunk-hwdwjvh8.js";

import { Ye, Ve, l, E, jt, Ex, SL } from "./chunk-b0z4bv3v.js";

import { Ly, el, gS, Cs } from "./chunk-ddr690nj.js";

import { SI, Pf, __, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { ec } from "./chunk-8drhysk2.js";

import { hG } from "./chunk-q6wab2jw.js";

import { p } from "./chunk-jkzenvsk.js";

import { fu } from "./chunk-1z2heevg.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Pln, dq, le } from "./chunk-cqgvwwgb.js";

import { Vn, XDt, OOs, gGn, HOs, FR, ap, lU, rc, Vko, _Ms } from "./chunk-xywp7esx.js";

import { QP, uve } from "./chunk-f1zpf9me.js";

import { Sve, eI } from "./chunk-n3526wzr.js";

import { kC } from "./chunk-sfvypv11.js";

import { Gat } from "./chunk-2xhrgh8h.js";

import { d0 } from "./chunk-wgsx43va.js";

import { $5e } from "./chunk-4v78v8fd.js";

import { Sm, Tt, Jt } from "./chunk-9tdwgnpn.js";

import { cv, gt, _p } from "./chunk-yebkpv3k.js";

import { Zb } from "./chunk-4y2m4xpx.js";

import { bBn, de, Tc } from "./chunk-5ydr99q3.js";

import { ju } from "./chunk-5sbf9djq.js";

import { c0, rat } from "./chunk-sqb9meyh.js";

import { pKe, Pye, tF, WD, z2, Ade, EAe, q2, Qx, NB, $ar, Gar, zRn, Xw, cre, xW, n_e, Hde, _Q, Dde, PW, gTt, ure, nl, s_e, X0e, Yrt, UB, NAe, wQ, BKe, jKe, ess, HTt, dPn, jB, D4, jZr, m_e, Sot, k3, H5t, D5t, jTt, uss, zk, tP, bre, vot, uLe, sR, Z2, Vss, sO, Pot, qss, ef, dce, oP, Hpr, tro, yOn, L_e, mce, xe, kCt, Dqe, cy, Bre, V_e, OT } from "./chunk-84yp45y8.js";

import { Zw, sP, Mn, _mr, QCt, YA, YM } from "./chunk-bkx9v5fh.js";

import { il, Od } from "./chunk-gxwv3c1r.js";

import { Lh } from "./chunk-8a4rbyjg.js";

import { exe } from "./chunk-parjx3zq.js";

import { uN } from "./chunk-ghdkaeg7.js";

import { AHn } from "./chunk-vfdna4pm.js";

import { Eu } from "./chunk-rkfs82vw.js";

import { lue } from "./chunk-h2y8dwq2.js";

import { yoe, jYe } from "./chunk-f680m8m6.js";

import { tf } from "./chunk-e5t6ke25.js";

import { y$e } from "./chunk-1qs7jgw6.js";

import { XQ } from "./chunk-z09tf6qf.js";

import { Tvt, skn } from "./chunk-n0q538yk.js";

import { tvn, Eqr, kqr, nvn, w3o } from "./chunk-96zrzf23.js";

import { wTe } from "./chunk-pr0enes7.js";

import { LA, JC, LJ } from "./chunk-c0na4e14.js";

import { Q6, oVe } from "./chunk-2vj92bww.js";

import { Tqr, D2t } from "./chunk-8tn4z893.js";

import { evn } from "./chunk-qne6w0br.js";

import { vTe } from "./chunk-dmawv090.js";

import { yne } from "./chunk-ajb8xn5x.js";

import { L3o, N3o } from "./chunk-nr71exww.js";

import { kTe } from "./chunk-p7tz7zfg.js";

import { vJo, TJo } from "./chunk-vcw4eg7d.js";

import { qs } from "./chunk-05wvva46.js";

import { nv } from "./chunk-ssj64kfy.js";

import { bV } from "./chunk-3cd32ngx.js";

import { kl } from "./chunk-x1z20h6y.js";

import { put, uZ } from "./chunk-ejckqh3m.js";

import { Dn } from "./chunk-q0e8j22k.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, De } from "./chunk-cvcg6n1z.js";

import { D } from "./chunk-hmqkrrtz.js";

import { promises as Ke } from "fs";

var Se = "ObserverReport";

var Bt = "Send a report to your report target \u2014 the agent you observe, or the coordinating agent that spawned the worker you observe. The target is resolved from your observer pairing \u2014 there is no recipient to name. Use this only when you have something genuinely useful: a mistake about to compound, a missed constraint, prior art the observed agent should see. The expected steady state is silence \u2014 if nothing warrants action, end your turn without calling this.", Lt = "Send a report to your report target \u2014 the agent you observe, or the coordinating agent that spawned the worker you observe. The target is resolved from your observer pairing \u2014 there is no recipient to name. Use this only when you have something genuinely useful: a mistake about to compound, a missed constraint, prior art the observed agent should see. The expected steady state is silence \u2014 if nothing warrants action, end your turn without calling this.";

var kn = p(() => De({
  report: o().min(1).describe("The report to deliver to your report target. Be concise and specific.")
})), $t = Jt({
  name: Se,
  backgrounding: "never",
  maxResultSizeChars: 1e3,
  async description() {
    return Bt;
  },
  async prompt() {
    return Lt;
  },
  get inputSchema() {
    return kn();
  },
  isReadOnly() {
    return !1;
  },
  isEnabled() {
    return !0;
  },
  create(e) {
    return {
      async checkPermissions(k) {
        return {
          behavior: "allow",
          updatedInput: k
        };
      },
      async call(k) {
        let w = e.agentId;
        if (w === void 0) return {
          data: {
            success: !1,
            message: "ObserverReport is only available to an observer agent; the main session does not have an observed pairing."
          }
        };
        let b = vJo(e.session, w);
        if (!b) return {
          data: {
            success: !1,
            message: "Your observer pairing is not armed (stopped, retired, or never installed). The report was not delivered."
          }
        };
        let {reportTargetTaskId: _, reportTargetName: v, viaWorkerName: r} = b;
        if (_ !== void 0) {
          let I = e.taskRegistry.get(_);
          if (!(Mn(I) && (I.status === "running" || I.status === "completed" && [ ...YA(I) ].some(oe => oe !== jB)))) return {
            data: {
              success: !1,
              message: `The report target (${v}) is not running. The report was not delivered.`
            }
          };
        }
        let R = `observer:${b.observerAgentType}`, x = b.observedTaskId === void 0 ? `"${r}"` : `"${r}" [${b.observedTaskId}]`, re = Sve(R, r === void 0 ? k.report : `(observing worker ${x})\n${k.report}`), J = {
          kind: "observer",
          from: R,
          senderTaskId: w
        };
        if (b.reportOrigins.add(J), _ === void 0) OT({
          mode: "prompt",
          agentId: Ze(),
          value: re,
          priority: "next",
          origin: J,
          skipSlashCommands: !0,
          isMeta: !0,
          skipAttachments: !0
        }); else H5t(_, re, e.taskRegistry, {
          origin: J,
          isMeta: !0
        });
        return {
          data: {
            success: !0,
            message: `Report queued for ${_ === void 0 ? "the main conversation" : v}.`
          }
        };
      }
    };
  },
  mapToolResultToToolResultBlockParam(e, k) {
    return {
      type: "tool_result",
      tool_use_id: k,
      content: e.message,
      is_error: !e.success
    };
  },
  renderToolUseMessage(e) {
    return `report: ${e.report}`;
  }
});

var yn = [ Dn, cv, Se, gt, Eu, il, kl, tf, Sm ];

function Fer(e) {
  return [ ...e.filter(k => yn.every(w => !Tt(k, w))), $t ];
}

function Sqr(e) {
  return (e.name === gt || e.name === _p) && typeof e.input === "object" && e.input !== null && "subagent_type" in e.input && zRn(e.input.subagent_type);
}

function It(e, k) {
  let w = new Set;
  for (let b of e) if (b.type === "assistant") {
    let _ = b.message.content;
    if (!Array.isArray(_)) continue;
    for (let v of _) if (v.type === "tool_use" && Sqr(v)) w.add(v.id);
  } else if (b.type === "user" && w.size > 0) {
    let _ = b.toolUseResult, v = b.message.content;
    if (typeof _ !== "object" || _ === null || !("agentId" in _) || _.agentId !== k || !Array.isArray(v)) continue;
    if (v.some(r => r.type === "tool_result" && w.has(r.tool_use_id))) return !0;
  }
  return !1;
}

async function Uer(e, {origin: k, ...w}) {
  let b = Vss(e)?.hookOrigin, _ = await D2t({
    ...w,
    agents: [],
    resume: Object.freeze({
      agentId: e
    }),
    origin: b === void 0 ? k : [ ...b, ...k ?? [] ]
  });
  if (_.starting !== Tqr && Gar(w.signal, w.background)) throw _.starting?.[Symbol.dispose](), 
  new Ye;
  return _;
}

function Ber(e) {
  return `a plugin declined the resume: ${e}`;
}

function Ht(e, k) {
  let w = e.filter(L), b = new Map(w.flatMap(R => R.uuid === void 0 ? [] : [ [ R.uuid, R.parentUuid ] ])), _ = new Set(k), v = R => b.has(R) || _.has(R), r = new Set(w.flatMap(bn));
  return k.length > 0 && Wt(b.get(k[0])) && [ ...r ].every(v) && w.every(R => Wt(R.parentUuid) || v(R.parentUuid) || r.has(R.uuid));
}

function Wt(e) {
  return e === void 0 || e === null;
}

function bn({compactMetadata: e}) {
  let k = L(e) ? e.preservedMessages : void 0;
  return L(k) && Array.isArray(k.uuids) ? k.uuids : [];
}

function V$(e) {
  return typeof e === "object" && e !== null && "deniedByPlugin" in e && typeof e.deniedByPlugin === "string";
}

var Qe = "resumedInline", An = "Background agents cannot be started in this session right now. Send the message again if you still need this agent: it should then run while you wait, and its report will be that call's result.", qt = "This agent cannot be resumed in the background in this session. Start a new agent instead.", Sn = /[<>\p{Cc}]|(?![\u200c\u200d])\p{Cf}/u;

function jer(e) {
  return e instanceof Error && Qe in e && e[Qe] === !0;
}

class $u extends Error {
  transcriptMissing;
  constructor(e, k) {
    super(e);
    this.name = "ResumeAgentStateError", this.transcriptMissing = k?.transcriptMissing === !0;
  }
}

var ze = "git_worktree_create";

class zL extends $u {
  constructor(e) {
    super(e);
    this.name = "AgentResumeTransientError";
  }
}

class r4 extends $u {
  constructor(e) {
    super(e);
    this.name = "AgentResumePermanentlyRefusedError";
  }
}

class fW extends $u {
  constructor(e) {
    super(e);
    this.name = "AgentStoppedByUserError";
  }
}

class OJ extends $u {
  constructor(e) {
    super(e);
    this.name = "AgentResumeInProgressError";
  }
}

class vhe extends $u {
  constructor(e) {
    super(e);
    this.name = "AgentStillStoppingError";
  }
}

function MJ(e) {
  return Ue(e, "notification");
}

function wqr(e) {
  return Ue(e, "inline");
}

function Gt(e, k = __) {
  return typeof e === "string" && e !== "" && !Ly(e) && !Cs(e) && !el(e) && !gS(e) && !Sn.test(e) && Pf(k, e, {
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified"
  }) === void 0 ? e : void 0;
}

function Wer(e) {
  return Ue(e, "reply");
}

async function Ue(e, k) {
  let {agentId: w} = e, {resumesInFlight: b} = Vn();
  if (b.has(w)) throw new OJ(`Agent ${w} is already running or being resumed`);
  b.add(w);
  let _ = !0, v = () => {
    if (_) _ = !1, b.delete(w);
  };
  try {
    return await Tn(e, k, v);
  } finally {
    v();
  }
}

async function Tn({agentId: e, prompt: k, promptOrigin: w, promptIsMeta: b, continueInterruptedTurn: _, resultsOnly: v, toolUseContext: r, liveTranscript: R, canUseTool: x, invokingRequestId: re, parentPromptId: J, userInitiated: I, suppressOwnerNotification: Je, workerPermissionMode: oe, onDeliveryCommitted: Vt, isWebFetchLaunch: Kt}, X, zt) {
  let Qt = Date.now(), On = !1, Te = r.getAppState(), Oe = de(r), {taskRegistry: y} = r, Z = Oe.mode, ie = r.agentId;
  if (ie !== void 0 && tF(ie)) throw new vhe("This agent has been stopped and its stop is still completing; it cannot resume other agents.");
  if (tF(e) || !Zw(e) && qs(y.get(e)?.status ?? "running")) throw new vhe(`Agent ${e} is still stopping \u2014 its previous run was stopped but has not exited. Re-run ${Od} on it or wait for it to exit before resuming.`);
  let N = y.get(e), ae = 0;
  if (Mn(N)) {
    let n = !1;
    if (y.update(e, u => {
      if (u.status === "running" || u.resuming) return u;
      return n = !0, ae = u.userStopCount ?? 0, {
        ...u,
        resuming: !0
      };
    }), !n) throw new OJ(`Agent ${e} is already running or being resumed`);
  }
  let Xe = () => {
    y.update(e, n => n.resuming ? {
      ...n,
      resuming: !1
    } : n);
  }, h = () => {
    Xe(), k3(e, y), QCt(e, y);
  }, Re = () => (m("subagent_launch", "subagent_resume_transcript_over_bound"), h(), 
  new r4(`Agent ${e}'s earlier transcript is too large to load, or has a row with a malformed timestamp. Sending the message again will not help. Start a new agent if the work is still needed.`));
  if (yOn(e)) throw Re();
  let et = oP(To(e), r.storageV5), tt = () => mce(To(e), r.storageV5, {
    signal: r.abortController.signal
  }), Y = HTt(), nt = he() && !Mn(N) && Y === void 0, [Yt, s] = await Promise.all([ he() ? et.then(n => n === null || nt ? null : tt()) : tt(), et ]).catch(n => {
    if (Ve(n)) throw h(), n;
    if (yOn(e)) throw Re();
    if (n instanceof L_e && n.outcome === "body_encoded") throw m("subagent_launch", "subagent_resume_transcript_body_encoded"), 
    h(), new zL(`Agent ${e}'s earlier transcript arrived in an encoding that was not asked for, so it was not read. Send the message again, or start a new agent if that fails too.`);
    if (m("subagent_launch", "subagent_resume_setup_read_failed"), h(), n instanceof $u) throw n;
    throw n instanceof L_e || XQ(E(n) ?? SL(n)) ? new zL(l(n)) : new $u(l(n));
  });
  if (r.abortController.signal.aborted) throw h(), new Ye;
  i("tengu_subagent_resume_sidecar_read", {
    metadata_found: s !== null,
    prompt_origin_kind: pe(w?.kind),
    has_task_record: Mn(N),
    continue_interrupted_turn: _ === !0,
    resumer_is_subagent: ie !== void 0,
    storage_v5: r.storageV5 !== void 0
  });
  let st = X === "notification" && Y !== void 0;
  if (s === null && he()) throw m("subagent_launch", "subagent_resume_sidecar_missing_diskless"), 
  h(), new r4(`This session has no saved settings for agent ${e}: it never ran here, or they did not survive a restart of the server that runs the session. Start a new agent if the work is still needed.`);
  let ue = kqr(s?.cwd), rt = he() && ((s?.worktreePath ?? void 0) !== void 0 || (s?.inheritedWorktreePath ?? void 0) !== void 0 || s?.spawnedWithWorktree === !0) ? Eqr : void 0;
  if (ue !== void 0 || rt !== void 0) throw m("subagent_launch", ue !== void 0 ? "subagent_resume_cwd_refused" : "subagent_resume_worktree_refused"), 
  h(), new r4(ue !== void 0 ? `Cannot resume this agent in the directory its record names: ${ue}. Start a new agent instead.` : `Cannot resume this agent, which was started in a worktree: ${rt}. Start a new agent instead.`);
  let ot = bV(s?.toolUseId), Pe = UB(s?.description), Me = typeof s?.worktreeBranch === "string" && evn(s.worktreeBranch) ? s.worktreeBranch : void 0, G = typeof s?.name === "string" && Yrt.test(s.name) && !eI(s.name) ? s.name : void 0;
  if (s?.stoppedByUser && w?.kind !== "observer-activity") {
    if (!I) throw h(), new fW(`Agent ${e} was stopped by the user and won't be resumed. Treat its work as cancelled; only launch a new agent if the user explicitly asks.`);
  }
  if (nt) throw m("subagent_launch", "subagent_resume_no_rule_diskless"), h(), new r4(`Background agents are switched off in this session, and it no longer tracks agent ${e}, so the agent cannot be resumed. Start a new agent if the work is still needed.`);
  let P = await L3o(To(e), r.storageV5), Ne = "transientRead" in P && P.transientRead ? zL : $u;
  if (P.status === "malformed") throw m("subagent_launch", "forked_skill_resume_scoping_invalid"), 
  h(), new Ne(`Agent ${e} has a malformed forked-skill scoping record; refusing to resume it without the skill's permission scoping.`);
  if (P.status === "diskless") throw m("subagent_launch", "forked_skill_resume_scoping_diskless"), 
  h(), new $u(`Agent ${e} cannot be checked for a forked-skill scoping record: this diskless session has no storage backend or key for it. Refusing to resume it.`);
  if ((P.status === "absent" || P.status === "absent-but-marked") && Mn(N) && N.forkedSkillName !== void 0) throw m("subagent_launch", "forked_skill_resume_scoping_missing"), 
  h(), new Ne(`Agent ${e} ran as a forked skill but its scoping record is missing; refusing to resume it without the skill's permission scoping.`);
  if (P.status === "absent-but-marked") throw m("subagent_launch", "forked_skill_resume_scoping_missing_cold"), 
  h(), new Ne(`Agent ${e} carries a forked-skill provenance marker but its scoping record is missing; refusing to resume it without the skill's permission scoping.`);
  if (P.status === "valid" && Mn(N)) {
    if (N.forkedSkillName !== P.scoping.skillName) throw m("subagent_launch", "forked_skill_resume_scoping_mismatch"), 
    h(), new $u(`Agent ${e} has a forked-skill scoping record that does not match its task record; refusing to resume it.`);
  } else if (P.status === "valid") {
    if (await N3o(To(e), r.storageV5) !== P.scoping.skillName) throw m("subagent_launch", "forked_skill_resume_cold_witness_mismatch"), 
    h(), new $u(`Agent ${e} has a forked-skill scoping record with no matching provenance-marker witness; refusing to resume it on a cold path without a corroborated fork identity.`);
  }
  if (P.status !== "valid") ;
  let O = P.status === "valid" ? P.scoping : void 0, ce = [], me = [], Ee;
  if (O) {
    let n = await ef(pm(), r.storageV5).catch(() => []), u = r.getAppState().mcp.commands.filter(S => S.type === "prompt" && S.loadedFrom === "mcp"), a = [ ...z2(n, r.getAppState().mcp.commands), ...u ].find(S => S.name === O.skillName && S.type === "prompt");
    if (a?.type === "prompt" && a.isKeptUnread === !0) throw a.loadDefinition?.().catch(() => {}), 
    m("subagent_launch", "forked_skill_resume_skill_unread"), h(), new zL(`Agent ${e} ran as forked skill ${O.skillName}, whose file has not been read since a reload kept it; refusing to resume it before it is. Try again shortly.`);
    if (a?.type !== "prompt" || a.context !== "fork" && a.getContext === void 0) throw m("subagent_launch", "forked_skill_resume_skill_unresolved"), 
    h(), new $u(`Agent ${e} ran as forked skill ${O.skillName}, which no longer resolves to a fork-capable skill; refusing to resume it without its permission scoping.`);
    let Q = await Hde(a).catch(S => {
      throw h(), S instanceof $u ? S : new $u(l(S));
    });
    if (n_e(a)) {
      let S = d0(a);
      throw m("subagent_launch", S ? "forked_skill_resume_host_catalog_withheld" : "forked_skill_resume_sync_vetoed"), 
      h(), new $u(S ? `Agent ${e} ran as forked skill ${O.skillName}, which your organization's Skills setting currently turns off; refusing to resume it.` : `Agent ${e} ran as forked skill ${O.skillName}, an account-synced skill that is currently disabled (skills sync turned off or denied by policy); refusing to resume it.`);
    }
    if (Dde(Q)) throw _Q(a, Q), m("subagent_launch", "forked_skill_resume_synced_plugin_refused", {
      reason: c(Q)
    }), h(), new $u(`Agent ${e} ran as forked skill ${O.skillName}; refusing to resume it: ${Gat(Q)}.`);
    ce = fu(await $5e(a).catch(S => {
      throw m("subagent_launch", "forked_skill_resume_allowed_tools_failed"), h(), S instanceof $u ? S : new $u(l(S));
    })), me = fu(a.disallowedTools ?? []), Ee = WD(a);
  }
  let Ut = O ? O.frozenCommandDenies ?? r.getAppState().toolPermissionContext.alwaysDenyRules.command ?? [] : void 0, it = O ? [ ...ce.length === 0 ? [] : [ {
    kind: "allowed_tools",
    allowedTools: ce
  } ], ...me.length === 0 ? [] : [ {
    kind: "disallowed_tools",
    disallowedTools: me
  } ] ] : [], at = Vss(e), dt = at !== void 0 ? {
    ...r,
    ...at
  } : s?.pluginSteered === !0 ? {
    ...r,
    pluginSteered: !0
  } : r, fe = O ? {
    ...dt,
    getAppState: bBn(r.getAppState, ce, me, {
      replaceCommandRules: !0,
      frozenCommandDenies: Ut
    }),
    permissionLayers: it.length > 0 ? [ ...r.permissionLayers ?? [], ...it ] : r.permissionLayers
  } : dt, M = y.get(e), ee = Mn(M) ? M.result : void 0, xt = ee?.modelsUsed ?? (ee?.resolvedModel ? [ ee.resolvedModel ] : void 0), te = (Mn(M) ? M.spawnDepth : s?.spawnDepth) ?? ap(r.agentContext) + 1, Xt = Mn(M) ? M.startTime : Qt, W = Yt;
  if (!W) {
    let n = y.getTranscript(e)?.messages;
    if (n && n.length > 0) t(`[resumeAgentBackground ${e}] disk transcript missing; using ${n.length} in-memory messages mirrored during the run`), 
    W = {
      messages: n,
      contentReplacements: []
    };
  }
  if (!W) throw m("subagent_launch", "subagent_resume_transcript_missing"), h(), new $u(`No transcript found for agent ID: ${e}`, {
    transcriptMissing: !0
  });
  if (he() && !Mn(N) && !st) {
    let {signal: n} = r.abortController, u = await Hpr(e, n).catch(a => {
      if (!n.aborted) d(a);
      return null;
    }) ?? null;
    if (n.aborted) throw h(), new Ye;
    if (yOn(e)) throw Re();
    if (u === null || u.length === 0 && !tro(e)) throw m("subagent_launch", u === null ? "subagent_resume_transcript_read_failed" : "subagent_resume_transcript_stored_empty"), 
    h(), new zL(`Agent ${e}'s stored transcript could not be read, or is empty. Send the message again, or start a new agent if that fails too.`);
    if (!Ht(u, W.messages.map(a => a.uuid))) throw m("subagent_launch", "subagent_resume_transcript_gap"), 
    h(), new r4(`Part of agent ${e}'s transcript is missing, so it cannot go on from where it stopped. Start a new agent if the work is still needed.`);
  }
  X0e(W.messages);
  let Zt = _ ? [ ...Tvt(W.messages) ] : W.messages.map(n => vn(n, e)), H = Bre(Dqe(kCt(NAe(wQ(Zt), {
    site: "agent_resume"
  }))));
  if (_ && H.length > 0 && !skn(H)) return y.update(e, n => ({
    ...n,
    resuming: !1,
    notified: !0,
    evictAfter: Date.now() + sP
  })), g("subagent_launch"), {
    agentId: e,
    description: Pe ?? "(resumed)",
    outputFile: he() ? void 0 : ju(e),
    alreadyCompleted: !0
  };
  let en = AHn(r.contentReplacementState, H, W.contentReplacements), tn = !s && (Mn(M) && (M.agentType === gTt.agentType || M.webFetchSavedFiles !== void 0) || Kt === !0 || It(r.messages, e)), Fe = s?.agentType ?? (tn ? gTt.agentType : void 0), C = s?.isFork === !0 ? void 0 : Fe ? r.options.agentDefinitions.activeAgents.find(n => n.agentType === Fe) : void 0, T = s?.isFork === !0 || !C && s?.isFork === void 0 && s?.agentType === xW.agentType, ut = Fe === gTt.agentType && s?.isBuiltIn !== !1;
  if (he() && (!C || s?.isBuiltIn !== void 0 && s.isBuiltIn !== nl(C)) && s?.isFork !== !0 && !ut && !st) throw m("subagent_launch", "subagent_resume_type_unmatched_diskless"), 
  h(), new zL(`The agent type that agent ${e} ran as is not on this session's list right now, or its name now belongs to a different type. Try once more; if that fails too, start a new agent.`);
  let lt = ut ? C && nl(C) ? C : gTt : s?.isBuiltIn === !1 ? C && !nl(C) ? C : PW : C ?? (T ? xW : PW), B = await ure(lt).catch(n => {
    if (h(), Ve(n)) throw n;
    throw m("subagent_launch", "subagent_resume_plugin_load_threw"), new zL(l(n));
  });
  if (B === void 0) throw m("subagent_launch", "subagent_resume_plugin_load_failed"), 
  h(), new $u(`Agent type '${lt.agentType}' could not be loaded from its plugin, so the agent was not resumed.`);
  if (BKe(B, Oe)) throw m("subagent_launch", "subagent_resume_tools_denied"), h(), 
  new $u(jKe(B.agentType));
  if ((await $ar([ B ])).length !== 1) throw m("subagent_launch", "subagent_resume_not_offered"), 
  h(), new $u(`Agent type '${B.agentType}' is not offered in this session.`);
  let ne = Y !== void 0 && X === "reply" && r.toolUseId !== void 0 && !put() && !Xw(B) && s?.requestShape !== "foreground" ? dPn(Y, {
    toolUseId: r.toolUseId,
    callerAgentId: r.agentId,
    signal: r.abortController.signal,
    resumedAgentId: e
  }) : void 0, q = X === "inline" || X === "reply" && (uZ() && ne === void 0 || Xw(B));
  if (!q && Y !== void 0 && ne === void 0) throw m("subagent_launch", "subagent_resume_background_rule"), 
  h(), new r4(qt);
  let V = Pe ?? "(resumed)", Ce = w?.kind === "observer-activity" ? void 0 : await Uer(e, {
    tool_use_id: r.toolUseId ?? "",
    parentModel: Tc(r),
    parentAgentId: ie,
    signal: r.abortController.signal,
    origin: r.hookOrigin,
    agent: B,
    prompt: _ ? "" : k,
    description: V,
    model: !T && !s?.isObserver && typeof s?.model === "string" ? s.model : void 0,
    permissionMode: Z,
    background: !q,
    fork: T,
    name: G,
    cwd: s?.cwd && !SI(s.cwd) ? s.cwd : void 0
  }).catch(n => {
    if (h(), !Ve(n)) m("subagent_launch", "subagent_resume_spawn_chain_failed");
    throw n;
  });
  using nn = Ce?.starting;
  if (Ce?.deny !== void 0) return m("subagent_launch", "subagent_resume_denied_by_hook"), 
  Xe(), {
    agentId: e,
    description: V,
    deniedByPlugin: Ber(Ce.deny)
  };
  let ge = (n, u) => {
    let a = rc(), Q = s?.cwd && !SI(s.cwd) ? s.cwd : le(), S = Qx(Q), pn = a !== null && S.length > 0 && (() => {
      let gn = [ a.worktreePath, ...Qx(a.originalCwd), ...a.liveLaunchAnchor ? [ a.liveLaunchAnchor, ...Qx(a.liveLaunchAnchor) ] : [], wTe, ...Qx(wTe) ];
      return S.every(hn => gn.some(wn => q2(hn, wn) === "same"));
    })(), Ct = u?.telemetryCode ?? "git_worktree_resume_worktree_gone", fn = s?.worktreePath ?? `agent ${e}`;
    if (pn) {
      f(ze, Ct), t(`Resumed worktree ${fn} ${n}; falling back to ${Q} under the session worktree's fences`, {
        level: "error"
      });
      return;
    }
    if (u?.terminalOnUncovered === !1) throw h(), new zL(`Cannot resume this agent right now: its worktree ${n}, and the fallback directory is not covered by the session's isolation fences. Re-run from a session whose fences cover the agent's directory.`);
    throw m(ze, Ct), h(), new r4(`This agent cannot be resumed: its worktree ${n}, and the fallback directory is not covered by the session's isolation fences.`);
  }, sn = Gt(s?.worktreePath), rn = Gt(s?.inheritedWorktreePath), we = sn ?? rn, se = we ? await Ke.stat(we).then(n => n.isDirectory() ? we : ge("exists but is not a directory"), n => {
    let u = E(n);
    if (u === "ENOENT" || u === "ENOTDIR") return ge("no longer exists");
    throw h(), new zL(`Cannot resume this agent: its worktree could not be examined (${String(u ?? "unknown error")}). Re-run once the directory is accessible.`);
  }) : void 0;
  if (we === void 0 && !_Ms(e) && (s !== null && s.spawnedWithWorktree === !0 && s.worktreeCleanlyRemoved !== !0 && !(s.inheritedWorktreePath !== void 0 && s.parentAgentId !== void 0 && (await oP(To(s.parentAgentId), r.storageV5).catch(oVe("resumeAgentBackground (parent)")))?.worktreeCleanlyRemoved === !0) || Vko(e))) ge("is not recorded for this isolated agent", {
    telemetryCode: "git_worktree_resume_binding_missing",
    terminalOnUncovered: Vko(e)
  });
  let K = se;
  if (se) {
    let n = ke(), u = await Ke.realpath(n).catch(() => n), a = await EAe(se, Qx(n), D([ u, wTe, ...Qx(wTe) ]), {
      requireWitnessForSelfOwningPins: !0,
      declineSelfOwningPinUnderLiveRoot: !0
    });
    if (!a.ok) {
      if (h(), a.reason !== "unverifiable" && a.reason !== "pin-is-own-launch-tree") throw m(ze, "git_worktree_create_root_rejected"), 
      t(`[worktree] refusing to resume parked agent into ${se} (${a.reason}): ${a.message}`, {
        level: "error"
      }), new r4(`This agent cannot be resumed: its worktree was refused (${a.reason}). ${a.message}`);
      throw t(`[worktree] could not verify parked agent worktree ${se} this attempt; the resume will retry: ${a.message}`), 
      new zL(`Cannot resume this agent right now: its worktree could not be verified (${a.reason}). Re-run once git can answer.`);
    }
  }
  if (K) {
    let n = new Date;
    try {
      await Ke.utimes(K, n, n);
    } catch (u) {
      let a = E(u);
      if (a === "ENOENT" || a === "ENOTDIR") K = ge("vanished between verification and the resume"); else throw h(), 
      new zL(`Cannot resume this agent: its worktree could not be touched (${String(a ?? "unknown error")}). Re-run once the directory is accessible.`);
    }
  }
  let ct = s?.cwd && !SI(s.cwd) ? s.cwd : K, Be = r.session.withProject({
    cwd: ct ?? (r.session.project === null ? void 0 : le())
  });
  if (Be.project === null && dq()) throw m("subagent_launch", "subagent_resume_no_directory_in_cwd_scope"), 
  h(), new r4("This agent cannot be resumed from here in this session. Do the rest of the task without it.");
  let on = s?.effort !== void 0 && Zb(s.effort) ? s.effort : void 0, mt = s?.isObserver || T ? void 0 : on, pt = O?.effort ?? mt, A = pt !== void 0 ? {
    ...B,
    effort: pt
  } : B, ye;
  if (T) {
    if (r.renderedSystemPrompt) ye = r.renderedSystemPrompt; else try {
      let n = Te.agent ? Te.agentDefinitions.activeAgents.find(a => a.agentType === Te.agent) : void 0, u = await sR(r.options.tools, r.options.mainLoopModel);
      ye = Z2({
        mainThreadAgentDefinition: n,
        toolUseContext: r,
        customSystemPrompt: r.options.customSystemPrompt,
        defaultSystemPrompt: u,
        appendSystemPrompt: r.options.appendSystemPrompt,
        skillsPersistencePrompt: Ade(r.options.tools)
      });
    } catch (n) {
      throw m("subagent_launch", "subagent_resume_fork_prompt_reconstruct_failed"), h(), 
      n instanceof $u ? n : new $u(l(n));
    }
    if (!ye) throw m("subagent_launch", "subagent_resume_fork_prompt_missing"), h(), 
    new $u("Cannot resume fork agent: unable to reconstruct parent system prompt");
  }
  let ft = Tc(r), _e = NB(Pye(A, ft), ft, s?.isObserver ? void 0 : T ? "inherit" : s?.model, Z), Le = pKe(H, fe.options)?.systemPrompt, U = s?.isObserver || O !== void 0 ? void 0 : nvn({
    agentDefinition: A,
    isFork: T,
    model: _e,
    effortState: fe.getAppState(),
    inheritedLayers: fe.permissionLayers,
    recordedBudgetText: T ? w3o(H) : Le
  });
  A = U?.agentDefinition ?? A;
  let ht = U === void 0 && Le ? vot(void 0, Le) : void 0;
  if (w?.kind === "observer-activity" && s?.isObserver !== !0) throw m("subagent_launch", "observer_resume_sidecar_unconfirmed"), 
  h(), new $u(`Observer sidecar for ${e} missing or did not confirm isObserver; refusing delivery`);
  let wt = s?.isObserver ? hG(oe, Z) ?? Z : void 0, kt = {
    ...Oe,
    mode: wt ?? oe ?? s?.spawnMode ?? A.permissionMode ?? Z
  }, yt = r.options.tools.filter(Lh);
  if (!T && !s?.isObserver) await jYe(() => r.getAppState().mcp);
  let _t = vTe(r), an = r.getAppState(), {assembleToolPool: bt} = r.options.toolCatalog, dn = T ? yoe(r.options.tools) : bt(kt, yoe(an.mcp.tools.concat(yt)), {
    skipReplFilter: !0,
    machineMcpTools: _t
  }), $e = s?.isObserver ? Fer(JC(A, bt(kt, yoe(yt), {
    skipReplFilter: !0,
    machineMcpTools: _t
  }), !0, !1, !1, te, c0(r).mode).resolvedTools) : dn, un = w?.kind === "peer" && !nv(T || s?.isObserver ? $e : JC(A, $e, !0, !1, !1, te).resolvedTools), be = w ? xe({
    content: V_e(k, w, {
      sendMessageToolAbsent: un
    }),
    origin: w,
    isMeta: !0
  }) : xe({
    content: b ? V_e(k, void 0, {
      isMeta: !0
    }) : k,
    ...b && {
      isMeta: !0
    }
  }), Ie = Mn(M) ? M.webFetchSavedFiles : void 0, At = Xw(A) ? Ie ? {
    dirs: [ ...Ie.dirs ],
    paths: [ ...Ie.paths ]
  } : lue() : void 0, St = {
    agentId: e,
    deliveringLoop: r.agentId
  }, We = s?.isObserver === !0 && (w?.kind === "observer-activity" || Mn(M) && M.isObserver === !0);
  if (s?.isObserver === !0 && !We && XDt()) m("agent_intent_forward", "unconfirmed_observer");
  if (!_) gGn(e, be, "user");
  let je;
  if (!_ && !We) try {
    je = R?.();
  } catch (n) {
    d(n), f("agent_intent_forward", "live_check_failed");
  }
  let He = _ || We ? void 0 : HOs(St, je ?? r.messages, je === void 0 ? "snapshot" : "live"), vt = He?.copies ?? [], qe = Vn().canUseToolNarrowings.get(e), Ot = T ? {
    systemPrompt: ye,
    parentSystemPrompt: !0
  } : s?.isObserver ? {
    agentToolScope: A
  } : void 0, Rt = {
    agentDefinition: A,
    promptMessages: _ ? H : [ ...H, ...vt, be ],
    turnPrompt: _ ? void 0 : cy(be.message.content) ?? void 0,
    toolUseContext: fe,
    canUseTool: qe ? qe(x) : x,
    handbackOptIn: !(T || s?.isObserver),
    handbackTool: tvn,
    isAsync: !0,
    requestShape: !s?.isObserver && (s?.requestShape === "foreground" || s?.requestShape === "background") ? s.requestShape : void 0,
    requestNonInteractive: !s?.isObserver && typeof s?.requestNonInteractive === "boolean" ? s.requestNonInteractive || ve() : void 0,
    preserveToolUseResults: !ve(),
    persistedToolResultFiles: At,
    querySource: yne(A.agentType, nl(A)),
    spawnedBySkill: Ee,
    ...O !== void 0 && {
      spawnedByForkedSkill: !0
    },
    model: s?.isObserver ? void 0 : T ? "inherit" : s?.model,
    effort: mt,
    onModelRestricted: s?.isObserver ? void 0 : kTe(Ee ?? A.agentType, r.appendSystemMessage),
    override: qe ? {
      ...Ot,
      requireCanUseTool: !0
    } : Ot,
    availableTools: $e,
    forkContextMessages: void 0,
    recordedUuids: new Set(H.map(n => n.uuid)),
    compactTranscriptUnavailable: T,
    ...(T || s?.isObserver) && {
      useExactTools: !0
    },
    totalTokensReminderBudget: U ? U.totalTokensBudget : ht,
    isTotalTokensReminderBudgetOnTopOfStart: U ? U.isBudgetOnTopOfStart : ht !== void 0 && (T ? uLe() !== "none" : uLe() === "all"),
    worktreePath: K,
    worktreeBranch: Me,
    cwd: s?.cwd,
    spawnMode: wt ?? s?.spawnMode,
    description: Pe,
    name: G,
    toolUseId: ot,
    contentReplacementState: en
  }, z = y.get(e);
  if (Mn(z) && z.stoppedByUser && (!I || (z.userStopCount ?? 0) !== ae)) throw h(), 
  new fW(`Agent ${e} was stopped by the user and won't be resumed. Treat its work as cancelled; only launch a new agent if the user explicitly asks.`);
  let Pt = ne?.confirm(r.abortController.signal);
  if (Pt !== void 0) {
    if (h(), Pt.kind === "aborted") throw new Ye;
    throw m("subagent_launch", "subagent_resume_background_closed"), new $u(An);
  }
  for (let n of vt) D5t(e, n, y);
  if (!b && !_) D5t(e, uN(w) ? be : xe({
    content: k,
    origin: w
  }), y);
  Vt?.();
  let F = bre({
    outputFileReadable: sO(r.options.tools),
    agentId: e,
    ownerAgentId: Ze(),
    parentAgentId: s?.parentAgentId,
    parentAbortController: q ? r.abortController : void 0,
    awaitedByCaller: q,
    spawnDepth: te,
    description: V,
    prompt: k,
    model: _e,
    selectedAgent: A,
    taskRegistry: y,
    toolUseId: r.toolUseId ?? bV(z?.toolUseId) ?? ot,
    cwd: ct,
    forkedSkillName: O?.skillName,
    ...w?.kind === "observer-activity" && {
      isObserver: !0
    },
    sessionScratch: r.session.sessionScratch
  });
  if (ne !== void 0 && !ne.handOver({
    agentId: F.agentId,
    abortController: F.abortController
  })) throw zk(F.agentId, y, "system", void 0, {
    lifecycleNotStarted: !0
  }), tP(F.agentId, y), m("subagent_launch", "subagent_resume_background_not_taken"), 
  new r4(qt);
  zt(), nn?.started({
    agentId: e,
    model: _e
  });
  let j = w?.kind === "observer-activity" ? void 0 : D4(r.agentId, y), ln = !Mn(z) || z.notified && z.quietlyParked !== !0, Mt = !1;
  if (j !== void 0) {
    let n = new Set, u = j;
    while (u !== void 0 && !n.has(u)) {
      n.add(u);
      let a = y.get(u);
      if (u = Mn(a) ? a.ownerAgentId : void 0, u === e) {
        Mt = !0;
        break;
      }
    }
  }
  if (j !== void 0 && j !== e && ln && !Mt) {
    let n, u = !ve();
    if (y.update(e, a => {
      if (a.ownerAgentId !== j) n = a.ownerAgentId; else if (!u || a.handbackRecipient === j) return a;
      return {
        ...a,
        ownerAgentId: j,
        ...u && {
          handbackRecipient: j
        }
      };
    }), u) YM(j, `agent:${e}`, y);
    if (n !== void 0) uss(e, n, y);
  }
  let Ae = y.get(e), Nt = Mn(Ae) && jZr(r.agentId, Ae.ownerAgentId, y), Ge = Nt ? nv(r.options.tools) : Mn(Ae) ? Ae.ownerCanContinueAgents : void 0;
  if (Nt) y.update(e, n => n.ownerCanContinueAgents === Ge ? n : {
    ...n,
    ownerCanContinueAgents: Ge
  });
  let Et = I && (s?.stoppedByUser === !0 || Mn(N) && N.stoppedByUser === !0);
  if (Et || I && Mn(N) && N.status === "killed") {
    let n = y.get(e);
    r.messageQueue.enqueuePendingNotification(ess({
      agentId: e,
      description: V,
      to: jTt({
        ownerAgentId: Mn(n) ? n.ownerAgentId : void 0,
        keepaliveReason: `agent:${e}`,
        delivering: !0,
        taskRegistry: y
      })
    }));
  }
  if (Et) try {
    if (_mr(y.get(e)) === ae) {
      if (await dce(To(e), {
        stoppedByUser: !1
      }, r.storageV5), _mr(y.get(e)) !== ae) await dce(To(e), {
        stoppedByUser: !0
      }, r.storageV5);
    }
  } catch (n) {
    if (jt(n) || Ex(SL(n))) t(`failed to clear stop marker for ${e}: ${Q6(n)}`, {
      level: "warn"
    }); else d(n);
  }
  if (Je) tP(F.agentId, y);
  if (await TJo({
    observedTaskId: e,
    observedDefinition: A,
    observedName: G ?? A.agentType,
    observedMeta: s ? {
      observerTaskId: s.observerTaskId,
      armingPermissionMode: s.armingPermissionMode
    } : null,
    toolUseContext: r,
    canUseTool: x
  }), k3(e, y), G !== void 0 && r.getAppState().agentNameRegistry.get(G) === void 0) r.agentLifecycle.registerName(G, To(e));
  let cn = {
    prompt: k,
    resolvedAgentModel: _e,
    modelsUsed: xt,
    isBuiltInAgent: nl(A),
    startTime: Xt,
    agentType: A.agentType,
    isAsync: !0,
    agentDepth: te,
    callerCanContinueAgents: Ge,
    source: A.source,
    pluginId: s_e(A) ? ec(A.plugin) : void 0,
    persistedToolResultFiles: At,
    spawnedSubagent: Mn(M) ? M.spawnedSubagent : void 0,
    priorForeignArtifactContent: ee !== void 0 && qss(ee) || Pot(W.messages)
  }, Ft = {
    agentId: e,
    parentAgentId: r.agentId,
    depth: te,
    ...Vn().spawnedByMainThread.has(e) && {
      spawnedByMainThread: !0
    },
    parentSessionId: kC(),
    agentType: "subagent",
    subagentName: A.agentType,
    displayName: G,
    isAsync: !0,
    isBuiltIn: nl(A),
    invokingRequestId: re,
    invocationKind: "resume",
    invocationEmitted: !1,
    parentPromptId: J,
    isBackgroundAgent: !0,
    ...lU(r.agentContext)
  }, mn = w?.kind === "observer-activity" ? () => {} : y.takeConcurrencySlot(), Dt = FR(Ft, () => Pln(Be.project, () => LJ({
    taskId: F.agentId,
    abortController: F.abortController,
    makeStream: (n, u, a) => LA({
      ...Rt,
      session: Be,
      override: {
        ...Rt.override,
        agentId: To(F.agentId),
        agentContext: Ft,
        abortController: F.abortController
      },
      onCacheSafeParams: n,
      onQueryProgress: u,
      onStreamTokenEstimate: a,
      ...Y !== void 0 && q && {
        canShowPermissionPrompts: !1
      }
    }),
    metadata: cn,
    description: V,
    toolUseContext: r,
    taskRegistry: y,
    agentIdForCleanup: e,
    enableSummarization: Gje() || (y$e() || T || cre()) && !ve(),
    getWorktreeResult: async () => K ? {
      worktreePath: K,
      ...Me !== void 0 && {
        worktreeBranch: Me
      }
    } : {},
    shouldNotifyOwner: q ? () => !1 : void 0,
    reviewInlineHandoff: X === "reply" && q,
    onTerminalSuccess: O ? () => {
      let n = O.skillName, u = `:${n}`;
      if (FX().has(u)) return;
      ote(n, n, "", null);
      let a = rat(n);
      if (a) r.applyAttributionOp({
        kind: "recordVerification",
        method: a
      });
    } : void 0,
    onRunSettled: mn
  })));
  if (He !== void 0) OOs(St, He);
  if (g("subagent_launch"), q) try {
    await Dt;
    let n = y.get(e), u = Mn(n) ? n.result : void 0;
    return {
      agentId: e,
      description: V,
      outputFile: F.outputFile,
      inlineHandback: {
        content: u?.content ?? [],
        harnessNoteCount: u?.harnessNoteCount,
        harnessTailCount: u?.harnessTailCount,
        harnessSectionHash: u?.harnessSectionHash
      }
    };
  } catch (n) {
    if (n instanceof Error) Object.defineProperty(n, Qe, {
      value: !0
    });
    throw n;
  } finally {
    if (!m_e(e, y) && !Sot(e, y)) exe(e);
    y.update(e, n => ({
      ...n,
      notified: !0,
      evictAfter: Date.now() + sP
    }));
  }
  return {
    agentId: e,
    description: V,
    outputFile: F.outputFile
  };
}

function vn(e, k) {
  if (e.type !== "user" || !("agentId" in e && e.agentId === k) || !uve(e) || !Array.isArray(e.message.content)) return e;
  return {
    ...e,
    toolUseResult: QP,
    toolDenialKind: void 0,
    message: {
      ...e.message,
      content: e.message.content.map(w => w.type === "tool_result" ? {
        ...w,
        content: QP
      } : w)
    }
  };
}

export { Fer, Sqr, Uer, Ber, V$, jer, $u, zL, r4, fW, OJ, vhe, MJ, wqr, Wer };
