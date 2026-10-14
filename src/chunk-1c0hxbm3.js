// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ya, Gh, FR, ap } from "./chunk-xywp7esx.js";

import { To } from "./chunk-vxr6sv7z.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { Xee, ve } from "./chunk-3pqddg8f.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { J } from "./chunk-nvtwm272.js";

import { _, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { QO } from "./chunk-q6wab2jw.js";

import { jn } from "./chunk-1z2heevg.js";

import { bi } from "./chunk-gmq0qwep.js";

import { dr } from "./chunk-y3nc3daq.js";

import { _a } from "./chunk-3kb22va7.js";

import { ZP } from "./chunk-f1zpf9me.js";

import { fDs } from "./chunk-sfvypv11.js";

import { hHn } from "./chunk-ev4h7zsr.js";

import { odt, h1 } from "./chunk-4v78v8fd.js";

import { Jc, P4, rm, Zye, b3, dre, M4, H4, yre, oO, bPn, SPn, wPn, _ot, vPn, sR, yLe, qde, oqe, eCe, HQ, lF, hur, OLe, RS, GW, Nre, W3t, Ds, xe } from "./chunk-84yp45y8.js";

import { qoe } from "./chunk-f4r8hspx.js";

import { de } from "./chunk-5ydr99q3.js";

import { IY } from "./chunk-htg8b98h.js";

import { gf } from "./chunk-5sbf9djq.js";

import { FT } from "./chunk-gxwv3c1r.js";

import { nmr, Vqe, Hds, sP, jst, C8t } from "./chunk-bkx9v5fh.js";

import { FNe } from "./chunk-48711xn9.js";

import { rQt } from "./chunk-14xmsjdg.js";

import { pue, aH, V_s, hpo, nSe, p1, n5e, bw, J_r, GRe, wN, VRe, aQt, x$e, MS, RNn, LPt, tlt, $Pt, nlt, uQt, pQt, g0, fQt, jPt } from "./chunk-pegykqwq.js";

import { nE, Xk, SY } from "./chunk-xd492737.js";

import { THn } from "./chunk-vfdna4pm.js";

import { BWt, YWt, XWt, zqo, qZe, __n } from "./chunk-y0829s0j.js";

import { o8o } from "./chunk-wrna5qjd.js";

import { itr, LA } from "./chunk-c0na4e14.js";

import { KGr } from "./chunk-5m26qy0e.js";

import { JQn } from "./chunk-wef9e81e.js";

import { kkn, uKt, pKt } from "./chunk-p9jyhqhb.js";

import { IPt, bNn, SNn } from "./chunk-hsqp728s.js";

import { Dn } from "./chunk-q0e8j22k.js";

import { N, D } from "./chunk-hmqkrrtz.js";

var Ve = 500, Ie = 500;

function He(n, e, s, v, a) {
  return async (R, p, S, y, q, H) => {
    let A = H ?? await yre(R, p, S, y, q, P4, void 0, v);
    if (A.behavior !== "ask") return A;
    if (A.hostDisplay !== void 0) return m("permission_host_worded_ask", "teammate_lane"), 
    qde(R.name, "a teammate's permission request", {
      hostWorded: !0,
      remedy: "Ask the team lead to run this tool call itself. When the team lead runs it, the permission prompt shows the full disclosure."
    });
    let L = A.updatedInput ?? p;
    if (e.signal.aborted) return {
      behavior: "ask",
      message: GW
    };
    let C = de(S), x = () => R.description(L, {
      isNonInteractiveSession: S.options.isNonInteractiveSession,
      toolPermissionContext: C,
      tools: S.options.tools
    });
    if (S.requestDialog !== void 0) {
      let o = __n.of(S.session).permissionContextSetter, P = YWt(R, p, S, y, q, v, F => {
        o?.(F, {
          preserveMode: !0
        });
      }), T = await BWt({
        ctx: P,
        updatedInput: A.updatedInput,
        suggestions: A.suggestions,
        permissionMode: C.mode,
        askSuppressesAlwaysAllowRule: A.suppressAlwaysAllowRule === !0,
        askIsPersonOnly: A.personOnly === !0
      });
      if (T) return T;
      if (e.signal.aborted) return {
        behavior: "ask",
        message: GW
      };
      let I = await x();
      if (e.signal.aborted) return {
        behavior: "ask",
        message: GW
      };
      let l = Date.now();
      try {
        return await new Promise((F, V) => {
          XWt({
            ctx: P,
            description: I,
            result: A,
            awaitAutomatedChecksBeforeDialog: !0
          }, F).catch(V);
        });
      } finally {
        s(Date.now() - l);
      }
    }
    if (oqe(A) || A.forcedByCaller === !0) return qde(R.name, "the teammate mailbox (a static-description wire)", {
      hostWorded: A.hostDisplay !== void 0
    });
    let E = await x();
    if (e.signal.aborted) return {
      behavior: "ask",
      message: GW
    };
    return new Promise(o => {
      let u = bNn({
        toolName: R.name,
        toolUseId: q,
        input: L,
        description: E,
        permissionSuggestions: A.suggestions,
        workerId: n.agentId,
        workerName: n.agentName,
        workerColor: n.color,
        teamName: n.teamName
      });
      kkn({
        requestId: u.id,
        toolUseId: q,
        toolName: u.toolName,
        inputDigest: IPt(u.toolName, L),
        onAllow(l, F, V, G) {
          I();
          let z = IY(F, void 0, de(S)), ee = R.suppressesAllPermissionUpdates?.(L) === !0 ? H4(z) : R.suppressesAlwaysAllowRule?.(L) === !0 || A.suppressAlwaysAllowRule === !0 ? M4(z, R, de(S)) : z;
          h1(ee, S.storageV5).catch(d);
          let ne = l && Object.keys(l).length > 0 ? l : L;
          o({
            behavior: "allow",
            updatedInput: ne,
            userModified: !1,
            ...G && G.length > 0 && {
              contentBlocks: G
            }
          });
        },
        onReject(l, F) {
          I();
          let V = l ? `${Nre}${l}` : GW;
          o({
            behavior: "ask",
            message: V,
            contentBlocks: F
          });
        },
        onRefuse(l) {
          I(), o({
            behavior: "ask",
            message: l
          });
        },
        onUnboundVerdict() {}
      }), SNn(u, S.storageV5).then(l => {
        if (!l) I(), o({
          behavior: "ask",
          message: "The permission request could not be delivered to the team lead (mailbox write failed). Retry the tool call."
        });
      });
      let P = setInterval(async (l, F, V, G, z, ee, ne) => {
        if (l.signal.aborted) {
          F(), V({
            behavior: "ask",
            message: GW
          });
          return;
        }
        let ae = await n5e(G.agentName, G.teamName, ee), fe = nSe(ae.filter(K => K && !K.read), p1(G.agentName, G.teamName), {
          roster: ne(),
          isPaneTeammate: !1
        });
        for (let K of ae) if (K && !K.read && fe.get(K) !== "forged") {
          let B = $Pt(K.text);
          if (B && B.request_id === z.id) {
            if (await J_r(G.agentName, G.teamName, K, ee), K.from !== _a) {
              t(`[InProcessRunner] Ignoring permission response from non-team-lead: ${K.from}`, {
                level: "warn"
              });
              continue;
            }
            if (B.subtype === "success") pKt({
              requestId: B.request_id,
              toolUseId: B.tool_use_id,
              approvedRequest: B.approved_request,
              decision: "approved",
              updatedInput: B.response?.updated_input,
              permissionUpdates: B.response?.permission_updates
            }); else pKt({
              requestId: B.request_id,
              toolUseId: B.tool_use_id,
              approvedRequest: B.approved_request,
              decision: "rejected",
              feedback: B.error
            });
            return;
          }
        }
      }, Ve, e, I, o, n, u, S.storageV5, a), T = () => {
        I(), o({
          behavior: "ask",
          message: GW
        });
      };
      e.signal.addEventListener("abort", T, {
        once: !0
      });
      function I() {
        clearInterval(P), uKt(u.id), e.signal.removeEventListener("abort", T);
      }
    });
  };
}

function j(n, e, s) {
  s.update(n, v => v.type === "in_process_teammate" ? e(v) : v);
}

async function Ye(n, e, s, v, a) {
  return bw(_a, {
    from: n,
    text: e,
    timestamp: (new Date).toISOString(),
    color: s
  }, v, a);
}

async function Re(n, e, s, v, a) {
  let R = LPt(n, v), p;
  try {
    p = await Ye(n, _(R), e, s, a);
  } finally {
    tlt(R, v?.result, p);
  }
  return p !== void 0;
}

function Je(n) {
  let e = new Set(n.filter(s => s.status !== "completed").map(s => s.id));
  return n.find(s => {
    if (s.status !== "pending") return !1;
    if (s.owner) return !1;
    return s.blockedBy.every(v => !e.has(v));
  });
}

function ze(n) {
  let e = `Complete all open tasks. Start with task #${n.id}: \n\n ${n.subject}`;
  if (n.description) e += `\n\n${n.description}`;
  return e;
}

async function Le(n, e, s, v) {
  if (!s) return;
  try {
    let a = await aH(n, v), R = Je(a);
    if (!R) return;
    let p = await V_s(n, R.id, e, void 0, v);
    if (!p.success) {
      t(`[inProcessRunner] Failed to claim task #${R.id}: ${p.reason}`);
      return;
    }
    return await pue(n, R.id, {
      status: "in_progress"
    }, v), t(`[inProcessRunner] Claimed task #${R.id}: ${R.subject}`), ze(R);
  } catch (a) {
    t(`[inProcessRunner] Error checking task list: ${a}`);
    return;
  }
}

async function Se(n, e, s, v, a, R) {
  let p;
  try {
    p = await n5e(n.agentName, n.teamName, v, {
      throwOnUnknownReadError: !0
    }), a.readFailures = 0;
  } catch (o) {
    return a.readFailures++, t(`[inProcessRunner] ${n.agentName} could not read mailbox (${a.readFailures} consecutive): ${o}`, {
      level: "warn"
    }), null;
  }
  let S = nSe(p.filter(o => o && !o.read), p1(n.agentName, n.teamName), {
    roster: R,
    isPaneTeammate: !1
  }), y = o => S.get(o) === "forged", q = new Set(p.filter(o => o && !o.read).map(wN));
  for (let o of a.consumedUnmarked) if (!q.has(o)) a.consumedUnmarked.delete(o);
  let H = async o => {
    let u = await OLe(o, {
      provenanceOf: T => S.get(T) ?? "unverifiable",
      agentId: n.resumableAgentId ?? n.agentId
    }), P = new Set(u.map(wN));
    for (let T of o) {
      let I = wN(T);
      if (!P.has(I)) a.consumedUnmarked.add(I);
    }
    return u;
  }, A = -1, L = null;
  for (let o = 0; o < p.length; o++) {
    let u = p[o];
    if (u && !u.read && !y(u)) {
      let P = nlt(u.text), I = (S.get(u) === "verified" || u.from === _a || hpo(u.from, R) !== void 0) && P?.from === u.from ? P : null;
      if (I) {
        A = o, L = I;
        break;
      }
    }
  }
  if (A !== -1) {
    if (a.count > 0) {
      let P = p.filter((T, I) => !T.read && I !== A && (y(T) || !g0(T.text)) && !a.deliveredUnmarked.has(wN(T)) && !a.consumedUnmarked.has(wN(T)));
      if (P.length > 0) {
        for (let l of P) a.deliveredUnmarked.add(wN(l));
        let T = await VRe(n.agentName, n.teamName, P, v);
        if (T) a.count = 0, a.reported = !1, a.deliveredUnmarked.clear(); else if (!a.reported) a.reported = !0, 
        f("swarm_inbox_poll", "worker_mark_read_failed_streak");
        t(`[inProcessRunner] ${n.agentName} delivering ${P.length} held message(s) ahead of a shutdown_request${T ? "" : " (mark still not landed)"}`, {
          level: T ? "debug" : "warn"
        });
        let I = await H(P);
        if (I.length > 0) return {
          type: "new_messages",
          messages: I
        };
      }
    }
    let o = p[A], u = N(p.slice(0, A), P => !P.read);
    return t(`[inProcessRunner] ${n.agentName} received shutdown request from ${L?.from} (prioritized over ${u} unread messages)`), 
    await J_r(n.agentName, n.teamName, o, v), {
      type: "shutdown_request",
      request: L,
      originalMessage: o.text,
      entryFrom: o.from
    };
  }
  let C = [], x = [];
  for (let o of p) {
    if (!o || o.read) continue;
    if (!y(o) && g0(o.text)) C.push(o); else if (!a.consumedUnmarked.has(wN(o))) x.push(o);
  }
  let E = null;
  if (C.length > 0) {
    for (let u of C) {
      let P = uQt(u.text);
      if (P && u.from === _a) {
        let T = o8o(e, P, s, v);
        if (T) t(`[inProcessRunner] ${n.agentName} applied lead plan_approval_response: approved=${T.approved}`), 
        E = fQt(T); else t(`[inProcessRunner] ${n.agentName} ignoring stale plan_approval_response (not awaiting approval)`);
        continue;
      }
      if (pQt(u.text)) {
        t(`[inProcessRunner] ${n.agentName} dropping mode_set_request message: permission mode changes are never accepted from the inbox`, {
          level: "warn"
        });
        continue;
      }
      t(`[inProcessRunner] ${n.agentName} dropping protocol frame from ${u.from}: ${u.text.substring(0, 80)}`, {
        level: "warn"
      });
    }
    if (!await VRe(n.agentName, n.teamName, C, v)) t(`[inProcessRunner] ${n.agentName} could not mark ${C.length} protocol frame(s) read; retrying next poll`, {
      level: "warn"
    });
  }
  if (E) return {
    type: "new_message",
    message: E,
    from: _a
  };
  if (x.length > 0) {
    if (await VRe(n.agentName, n.teamName, x, v)) a.count = 0, a.reported = !1, a.deliveredUnmarked.clear(); else {
      let P = ++a.count;
      if (P < GRe) return t(`[inProcessRunner] ${n.agentName} could not mark ${x.length} message(s) read (${P}/${GRe}); delivery retried next poll`, {
        level: "warn"
      }), null;
      if (t(`[inProcessRunner] ${n.agentName} could not mark ${x.length} message(s) read for ${P} poll(s); delivering the batch unmarked`, {
        level: "warn"
      }), !a.reported) a.reported = !0, f("swarm_inbox_poll", "worker_mark_read_failed_streak");
      for (let T of x) a.deliveredUnmarked.add(wN(T));
    }
    t(`[inProcessRunner] ${n.agentName} draining ${x.length} message(s) from ${D(x.map(P => P.from)).join(", ")}`);
    let u = await H(x);
    if (u.length === 0) return null;
    return {
      type: "new_messages",
      messages: u
    };
  }
  if (a.count > 0) a.count = 0, a.reported = !1, a.deliveredUnmarked.clear();
  return null;
}

async function Xe(n, e, s, v, a, R, p, S, y, q = !1, H) {
  t(`[inProcessRunner] ${n.agentName} starting poll loop (abort=${e.signal.aborted})`);
  let A = Date.now(), L = !1, C = 0;
  while (!e.signal.aborted) {
    if (C > 0) await J(Ie);
    C++;
    let x = v(), E = x.tasks[s];
    if (E && E.type === "in_process_teammate" && E.pendingUserMessages.length > 0) {
      let T = E.pendingUserMessages[0];
      return j(s, I => ({
        ...I,
        pendingUserMessages: I.pendingUserMessages.slice(1)
      }), a), t(`[inProcessRunner] ${n.agentName} found pending user message (poll #${C})`), 
      {
        type: "new_message",
        message: T.text,
        origin: T.origin,
        from: "user"
      };
    }
    let o = n.resumableAgentId !== void 0 && yLe(n.resumableAgentId, a), u = q || E?.type === "in_process_teammate" && E.awaitingPlanApproval || x.viewingAgentTaskId === s || C8t(x.tasks, s) || o;
    if (u) A = Date.now();
    if (q && E?.type === "in_process_teammate" && E.evictAfter !== void 0) j(s, T => ({
      ...T,
      evictAfter: void 0
    }), a);
    if (E?.type === "in_process_teammate" && E.evictAfter !== void 0 && (o && E.evictAfter <= Date.now() + Ie || L && !o)) j(s, T => ({
      ...T,
      evictAfter: Date.now() + sP
    }), a);
    if (L = o, e.signal.aborted) return t(`[inProcessRunner] ${n.agentName} aborted while waiting (poll #${C})`), 
    {
      type: "aborted"
    };
    if (p) {
      if (oO()) {
        if (!u && Date.now() - A >= jst) return t(`[inProcessRunner] ${n.agentName} idle timeout after ${jst}ms (poll #${C})`), 
        {
          type: "idle_timeout"
        };
      }
      continue;
    }
    t(`[inProcessRunner] ${n.agentName} poll #${C}: checking mailbox`);
    try {
      let T = await Se(n, s, a, H, y, v().teamContext?.teammates);
      if (T) return T;
      if (y.count > 0 && y.readFailures < GRe) {
        A = Date.now();
        let I = v().tasks[s];
        if (I?.type === "in_process_teammate" && I.evictAfter !== void 0) j(s, l => ({
          ...l,
          evictAfter: Date.now() + sP
        }), a);
        continue;
      }
    } catch (T) {
      t(`[inProcessRunner] ${n.agentName} poll error: ${T}`);
    }
    let P = await Le(R, n.agentName, S, H);
    if (P) return {
      type: "new_message",
      message: P,
      from: "task-list"
    };
    if (oO()) {
      if (!u && Date.now() - A >= jst) return t(`[inProcessRunner] ${n.agentName} idle timeout after ${jst}ms (poll #${C})`), 
      {
        type: "idle_timeout"
      };
    }
  }
  return t(`[inProcessRunner] ${n.agentName} exiting poll loop (abort=${e.signal.aborted}, polls=${C})`), 
  {
    type: "aborted"
  };
}

async function Qe(n) {
  let {identity: e, taskId: s, prompt: v, description: a, spawnedAgentType: R, agentDefinition: p, teammateContext: S, toolUseContext: y, abortController: q, model: H, systemPrompt: A, systemPromptMode: L, allowedTools: C, allowPermissionPrompts: x, invokingRequestId: E, standalone: o = !1, resumeMessages: u, resumeReplacementState: P, initialFrom: T} = n, {setAppState: I, taskRegistry: l} = y, F = hHn(s), V = {
    count: 0,
    reported: !1,
    deliveredUnmarked: new Set,
    consumedUnmarked: new Set,
    readFailures: 0
  };
  t(`[inProcessRunner] Starting agent loop for ${e.agentId}`);
  let G = {
    agentId: e.agentId,
    parentAgentId: y.agentId,
    depth: ap(y.agentContext),
    parentSessionId: e.parentSessionId,
    agentName: e.agentName,
    teamName: e.teamName,
    agentColor: e.color,
    planModeRequired: e.planModeRequired,
    isTeamLead: !1,
    agentType: "teammate",
    invokingRequestId: E,
    invocationKind: "spawn",
    invocationEmitted: !1,
    isBackgroundAgent: !0
  }, {tools: z, mainLoopModel: ee} = y.rootToolSurface, ne;
  if (L === "replace" && A) ne = A; else {
    let Q = [ ...(await sR(z, ee, {
      teammate: !0
    })).filter(Y => Y !== QO), KGr ];
    if (p) {
      let Y = p.getSystemPrompt({
        toolUseContext: y,
        primedAgentMemory: await odt(p, y.storageV5)
      });
      if (Y) Q.push(`\n# Custom Agent Instructions\n${Y}`);
      if (p.memory) i("tengu_agent_memory_loaded", {
        ...!1,
        scope: c(p.memory),
        source: b("in-process-teammate")
      });
    }
    if (L === "append" && A) Q.push(A);
    ne = Q.join(`\n`);
  }
  let ae = S.hasTaskListTools, fe = [ Dn, ...ae ? [ nE, SY, FT, Xk ] : [] ], K = p?.disallowedTools?.filter(h => !fe.includes(jn(h).toolName)), B = {
    agentType: e.agentName,
    whenToUse: `In-process teammate: ${e.agentName}`,
    getSystemPrompt: () => ne,
    tools: p?.tools ? D([ ...p.tools, ...fe ]) : [ "*" ],
    ...K?.length && {
      disallowedTools: K
    },
    source: "projectSettings",
    permissionMode: "default",
    ...p?.model && {
      model: p.model
    },
    ...p?.effort !== void 0 && {
      effort: p.effort
    },
    ...p?.omitClaudeMd && {
      omitClaudeMd: !0
    },
    ...p?.autoCompactWindow !== void 0 && {
      autoCompactWindow: p.autoCompactWindow
    }
  }, W = u ? [ ...u ] : [], ke = new Set(u?.map(h => h.uuid)), Be = {
    taskKind: "in_process_teammate",
    teamName: e.teamName,
    color: e.color,
    planModeRequired: e.planModeRequired,
    ...p && {
      customAgentType: p.agentType
    },
    ...R !== void 0 && {
      spawnedAgentType: R
    },
    ...H && {
      model: H
    }
  }, Ne = aQt({
    from: T ?? _a,
    text: v,
    summary: a
  }), X = Ne, ue = void 0, Te = !1, ie = !1, Ce = (u?.length ?? 0) > 0, Ee = !1, ye = u ? qZe(u).result : void 0, Pe = !1, $e = async h => {
    switch (ie = !1, h.type) {
     case "shutdown_request":
      t(`[inProcessRunner] ${e.agentId} received shutdown request - passing to model`), 
      X = aQt({
        from: typeof h.entryFrom === "string" && h.entryFrom !== "" ? h.entryFrom : MS,
        text: jPt(RNn(h.originalMessage, h.entryFrom) ?? h.originalMessage, h.entryFrom)
      }), ue = void 0, JQn(s, xe({
        content: X
      }), l);
      break;

     case "new_message":
      if (t(`[inProcessRunner] ${e.agentId} received new message from ${h.from}`), h.from === "user") X = h.message, 
      ue = h.origin; else X = aQt({
        from: h.from,
        text: h.message,
        color: h.color,
        summary: h.summary
      }), ue = void 0, JQn(s, xe({
        content: X
      }), l);
      break;

     case "new_messages":
      t(`[inProcessRunner] ${e.agentId} received ${h.messages.length} drained message(s)`), 
      X = x$e(h.messages, {
        recipientIsLead: !1
      }), ue = void 0, JQn(s, xe({
        content: X
      }), l);
      break;

     case "aborted":
      t(`[inProcessRunner] ${e.agentId} aborted while waiting`), Te = !0;
      break;

     case "idle_timeout":
      if (t(`[inProcessRunner] ${e.agentId} idle timeout \u2014 exiting loop`), !o) y.agentLifecycle.setTeammate(e.agentId, void 0), 
      await rQt(e.teamName, e.agentId, {
        onlyIfJoinedBefore: Date.now()
      }, y.storageV5);
      Te = !0;
      break;
    }
  };
  if (!o) await Le(e.parentSessionId, e.agentName, ae, y.storageV5);
  try {
    l.updateTranscript(s, M => {
      let Z = M.messages;
      if (u) for (let be of u.slice(-nmr)) Z = Vqe(Z, be);
      return {
        ...M,
        messages: Vqe(Z, xe({
          content: Ne
        }))
      };
    });
    let h = y.contentReplacementState ? P ?? THn() : void 0, Q = Xee(), Y = Me();
    while (!q.signal.aborted && !Te) {
      t(`[inProcessRunner] ${e.agentId} processing prompt: ${X.substring(0, 50)}...`);
      let M = dr();
      M.signal.addEventListener("abort", () => {
        Pe = !0;
      }), j(s, r => ({
        ...r,
        currentWorkAbortController: M,
        retryWake: Y
      }), l);
      let Z = xe({
        content: X,
        origin: ue
      }), be = [ Z ], ce = W, Ue = rm(W, Gh(ee));
      if (Ue > b3(Jc(ee), itr(y.options.autoCompactWindow, B.autoCompactWindow))) {
        t(`[inProcessRunner] ${e.agentId} compacting history (${Ue} tokens)`);
        let r = {
          ...y,
          abortController: q,
          agentId: To(e.agentId),
          readFileState: qoe(y.readFileState, {
            stripSeededFromContext: !0
          }),
          memorySelector: dre(),
          onCompactEvent: void 0,
          onRetryStatus: F.setRetryStatus,
          compactTranscriptUnavailable: !0
        };
        try {
          let w = await hur(W, r, {
            systemPrompt: bi([]),
            userContext: {},
            systemContext: {},
            toolUseContext: r,
            forkContextMessages: W,
            advisorModel: r.getAppState().advisorModel
          }, !0, {
            isAutoCompact: !0
          });
          if (ce = lF(w), h) h = THn();
          W.length = 0, W.push(...ce), ke.clear(), l.updateTranscript(s, k => ({
            ...k,
            messages: [ ...ce, Z ]
          }));
        } catch (w) {
          if (w instanceof Error && w.message.startsWith(HQ)) t(`[inProcessRunner] ${e.agentId} compaction blocked by PreCompact hook; continuing uncompacted`), 
          Ee = !0; else if (q.signal.aborted || w instanceof Error && w.message === ZP) {
            t(`[inProcessRunner] ${e.agentId} aborted during compaction`), Te = !0;
            break;
          } else throw w;
        }
      }
      let Fe = ce.length > 0 ? [ ...ce ] : void 0;
      W.push(Z), ye = void 0, Pe = M.signal.aborted;
      let pe = bPn(), we = l.get(s);
      if (we !== void 0 && "progress" in we && we.progress !== void 0) pe.latestInputTokens = we.progress.tokenCount;
      let je = vPn(z), ge = [], Ae = y.getAppState().tasks[s], De = Ae && Ae.type === "in_process_teammate" ? Ae.permissionMode : "default", Ge = {
        ...B,
        permissionMode: De
      }, Oe = !1, se = null;
      if (await fDs(S, async () => FR(G, async () => {
        j(s, r => ({
          ...r,
          status: "running",
          isIdle: !1,
          idleNotificationOwedToLead: void 0,
          evictAfter: void 0,
          evictAfterHeldBySibling: void 0
        }), l), l.updateTranscript(s, r => ({
          ...r,
          turnStartTime: Date.now()
        })), F.setMode("responding");
        for await (let r of LA({
          agentDefinition: Ge,
          promptMessages: be,
          turnPrompt: X,
          toolUseContext: y,
          canUseTool: He(e, M, w => {
            j(s, k => ({
              ...k,
              totalPausedMs: (k.totalPausedMs ?? 0) + w
            }), l);
          }, Zye(I), () => y.getAppState().teamContext?.teammates),
          isAsync: !0,
          canShowPermissionPrompts: x ?? !0,
          forkContextMessages: Fe,
          querySource: "agent:custom",
          override: {
            abortController: M,
            agentContext: G,
            onRetryStatus: F.setRetryStatus,
            subscribeRetryWake: Y.subscribe,
            ...e.resumableAgentId && {
              agentId: e.resumableAgentId
            }
          },
          ...e.resumableAgentId && {
            recordedUuids: ke,
            name: e.agentName,
            description: a,
            extraMetadata: {
              ...Be,
              permissionMode: De
            }
          },
          onStreamTokenEstimate: w => {
            wPn(pe, w);
            let k = _ot(pe);
            j(s, O => O.progress?.tokenCount === k.tokenCount ? O : {
              ...O,
              progress: k
            }, l);
          },
          model: H,
          preserveToolUseResults: !0,
          availableTools: z,
          allowedTools: C,
          contentReplacementState: h,
          stickyBetas: Q,
          isTeammate: !0,
          teammateContext: S
        })) {
          if (q.signal.aborted) {
            t(`[inProcessRunner] ${e.agentId} lifecycle aborted`);
            break;
          }
          if (M.signal.aborted) {
            if (t(`[inProcessRunner] ${e.agentId} current work aborted (Escape pressed)`), r.type === "assistant" || r.type === "user" || r.type === "attachment" && RS(r)) ge.push(r), 
            W.push(r), se = eCe(W, r, se);
            Oe = !0;
            break;
          }
          if (r.type === "spinner_mode") {
            F.setMode(r.mode);
            continue;
          }
          if (r.type === "api_metrics") continue;
          if (r.type === "query_model_change") continue;
          if (r.type === "set_in_progress_tool_use_ids") {
            if (r.op.action !== "remove") continue;
            let k = r.op.ids;
            l.updateTranscript(s, O => {
              let te = new Set(O.inProgressToolUseIDs), oe = !1;
              for (let _e of k) if (te.delete(_e)) oe = !0;
              return oe ? {
                ...O,
                inProgressToolUseIDs: te
              } : O;
            });
            continue;
          }
          if (r.type === "system" && r.subtype === "api_error") continue;
          ge.push(r), W.push(r), se = eCe(W, r, se), SPn(pe, r, je, z);
          let w = _ot(pe);
          j(s, k => ({
            ...k,
            progress: w
          }), l), l.updateTranscript(s, k => {
            let O = k.inProgressToolUseIDs;
            if (r.type === "assistant") {
              for (let te of r.message.content) if (te.type === "tool_use") O = new Set([ ...O, te.id ]);
            } else if (r.type === "user") {
              let te = r.message.content;
              if (Array.isArray(te)) {
                for (let oe of te) if (typeof oe === "object" && "type" in oe && oe.type === "tool_result") {
                  let _e = new Set(O);
                  _e.delete(oe.tool_use_id), O = _e;
                }
              }
            }
            return {
              ...k,
              messages: Hds(k.messages, r),
              inProgressToolUseIDs: O
            };
          });
        }
        return {
          success: !0,
          messages: ge
        };
      })).finally(() => {
        if (se) W.push(...se.preserved), se = null;
      }), j(s, r => ({
        ...r,
        currentWorkAbortController: void 0
      }), l), q.signal.aborted) break;
      let le = Oe || M.signal.aborted;
      if (le) {
        Pe = !0, t(`[inProcessRunner] ${e.agentId} work interrupted, returning to idle`);
        let r = Ds({
          content: ZP
        });
        l.updateTranscript(s, w => ({
          ...w,
          messages: Vqe(w.messages, r)
        }));
      }
      Ce ||= ge.some(r => r.type === "assistant" && !r.isApiErrorMessage || r.type === "user" && !r.isMeta);
      let re = !le ? W3t(ge) : void 0;
      if (ie = re?.isTransient === !0 && !o && Ce, !o && !le) {
        let r = null;
        try {
          r = await Se(e, s, l, y.storageV5, V, y.getAppState().teamContext?.teammates);
          while (r === null && V.count > 0 && V.readFailures < GRe && !q.signal.aborted) await J(Ie), 
          r = await Se(e, s, l, y.storageV5, V, y.getAppState().teamContext?.teammates);
        } catch (w) {
          t(`[inProcessRunner] ${e.agentName} turn-end mailbox check failed: ${w}`);
        }
        if (r) {
          try {
            let {result: w, summary: k} = qZe(W, {
              emitTelemetry: !0
            });
            if (w !== void 0 || re !== void 0) {
              if (await Re(e.agentName, e.color, e.teamName, {
                idleReason: re !== void 0 ? "failed" : void 0,
                summary: k,
                failureReason: re?.reason,
                result: w,
                senderReachable: !0
              }, y.storageV5) && w !== void 0) ye = w;
            }
          } catch (w) {
            t(`[inProcessRunner] ${e.agentName} turn-end result delivery failed: ${w}`);
          }
          await $e(r);
          continue;
        }
      }
      if (re?.isTransient) i("tengu_teammate_transient_turn_failure", {
        error_kind: c(re.errorKind ?? "unknown"),
        hold_evict: ie
      });
      let qe = y.getAppState().tasks[s], We = !(qe?.type === "in_process_teammate" && qe.isIdle) && !o;
      j(s, r => (r.onIdleCallbacks?.forEach(w => w()), {
        ...r,
        isIdle: !0,
        idleNotificationOwedToLead: We && ve() || r.idleNotificationOwedToLead,
        evictAfter: ie ? void 0 : Date.now() + sP,
        onIdleCallbacks: []
      }), l);
      let he = re?.reason;
      if (We) {
        let r = qZe(W, {
          emitTelemetry: !le
        }), w = le ? void 0 : r.result, k = await Re(e.agentName, e.color, e.teamName, {
          idleReason: le ? "interrupted" : he !== void 0 ? "failed" : "available",
          summary: r.summary,
          failureReason: he,
          result: w,
          senderReachable: he === void 0 || ie
        }, y.storageV5);
        if (w !== void 0 && k) ye = w;
        if (!k) j(s, O => O.idleNotificationOwedToLead ? {
          ...O,
          idleNotificationOwedToLead: void 0
        } : O, l);
      } else t(`[inProcessRunner] Skipping duplicate idle notification for ${e.agentName}`);
      t(`[inProcessRunner] ${e.agentId} finished prompt, waiting for next`);
      let Ke = await Xe(e, q, s, y.getAppState, l, e.parentSessionId, o, ae, V, ie, y.storageV5);
      await $e(Ke);
    }
    let me = !1, U;
    if (j(s, M => {
      if (M.status !== "running") return me = !0, M;
      return U = M.toolUseId, M.onIdleCallbacks?.forEach(Z => Z()), {
        ...M,
        status: "completed",
        notified: !0,
        endTime: Date.now(),
        pendingUserMessages: [],
        abortController: void 0,
        currentWorkAbortController: void 0,
        retryWake: void 0,
        onIdleCallbacks: []
      };
    }, l), !me) l.updateTranscript(s, M => ({
      ...M,
      messages: M.messages.length ? [ M.messages.at(-1) ] : [],
      inProgressToolUseIDs: new Set
    }));
    if (gf(s), l.evictTerminal(s), !me) ya(s, "completed", {
      toolUseId: U,
      summary: e.agentId
    });
    if (FNe(e.agentId), Ee) f("swarm_in_process_run", "compact_blocked_by_hook"); else g("swarm_in_process_run");
    return {
      success: !0,
      messages: W
    };
  } catch (h) {
    let Q = h instanceof Error ? h.message : "Unknown error";
    t(`[inProcessRunner] Agent ${e.agentId} failed: ${Q}`);
    let Y = !1, me;
    if (j(s, U => {
      if (U.status !== "running") return Y = !0, U;
      return me = U.toolUseId, U.onIdleCallbacks?.forEach(M => M()), {
        ...U,
        status: "failed",
        notified: !0,
        error: Q,
        isIdle: !0,
        endTime: Date.now(),
        onIdleCallbacks: [],
        pendingUserMessages: [],
        abortController: void 0,
        currentWorkAbortController: void 0,
        retryWake: void 0
      };
    }, l), !Y) l.updateTranscript(s, U => ({
      ...U,
      messages: U.messages.length ? [ U.messages.at(-1) ] : [],
      inProgressToolUseIDs: new Set
    }));
    if (gf(s), l.evictTerminal(s), !Y) ya(s, "failed", {
      toolUseId: me,
      summary: e.agentId
    });
    if (!o) {
      let U;
      try {
        U = Pe ? void 0 : zqo(W);
      } catch (M) {
        t(`[inProcessRunner] ${e.agentName} failed to extract partial result: ${M}`);
      }
      if (U !== void 0 && U === ye) U = void 0;
      await Re(e.agentName, e.color, e.teamName, {
        idleReason: "failed",
        completedStatus: "failed",
        failureReason: Q,
        result: U
      }, y.storageV5);
    }
    return FNe(e.agentId), m("swarm_in_process_run", "agent_loop_failed"), {
      success: !1,
      error: Q,
      messages: W
    };
  }
}

function BGr(n) {
  let e = n.identity.agentId;
  Qe(n).catch(s => {
    t(`[inProcessRunner] Unhandled error in ${e}: ${s}`);
  });
}

export { BGr };
