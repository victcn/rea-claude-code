// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { pd, Ve, Je, j } from "./chunk-b0z4bv3v.js";

import { zn } from "./chunk-3pqddg8f.js";

import { i } from "./chunk-hedpgw9m.js";

import { g } from "./chunk-3ykz5st8.js";

import { jue, Ovr, _Es } from "./chunk-9tdwgnpn.js";

import { PGn, Sv, lMs, Jpe, k } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { cn, Ou, xX, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { si } from "./chunk-9yajep3y.js";

import { qo } from "./chunk-yxennhe9.js";

import { p } from "./chunk-jkzenvsk.js";

import { J_ } from "./chunk-q6wab2jw.js";

import { N1e, Xfe, Eee, pan, zIo, oXe, POr, sXe } from "./chunk-jnzpsr0d.js";

import { wn, uu, Qs, R8e, je, Rt } from "./chunk-s2t7g8m9.js";

import { Zon, VR } from "./chunk-y3nc3daq.js";

import { oA } from "./chunk-f1zpf9me.js";

import { ase, de } from "./chunk-5ydr99q3.js";

import { CW, oar, V2, hYt, Srt, Ede, nns, rns, kde, Ykt, NQr, car, SAe, war, kar, Cde, Rde, BYt, rR, PKe, l5t, ePn, nPn, M4, H4, lot, Zu, yre, cot, ITt, oPn, Wk, gZr, zl, xss, zPn, GM, Jot, rV } from "./chunk-84yp45y8.js";

import { o4 } from "./chunk-0b5sepvg.js";

import { SO, z5e, h1 } from "./chunk-4v78v8fd.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { WFn, dOt, IY, Fh } from "./chunk-htg8b98h.js";

import { mH } from "./chunk-tsqxvhwm.js";

import { Yo } from "./chunk-sn25q2cq.js";

import { INe } from "./chunk-5dw3c238.js";

import { EV } from "./chunk-yd16nhae.js";

import { Gbe } from "./chunk-xd492737.js";

import { $D } from "./chunk-ce64fmea.js";

import { rSt } from "./chunk-r3zgttmd.js";

import { hF } from "./chunk-4eevewzj.js";

import { yF } from "./chunk-dbedbnkv.js";

import { sl } from "./chunk-smzxkp15.js";

import { K$e } from "./chunk-587t3t4d.js";

import { FS } from "./chunk-dq67x9kz.js";

import { Au } from "./chunk-10gv16xm.js";

import { jc } from "./chunk-vjmbaret.js";

import { ex, o, M, oe, u, $e, ue, U, A } from "./chunk-cvcg6n1z.js";

import { randomUUID as He } from "crypto";

function tQn(r, e, m) {
  if (a.CLAUDE_CODE_DISABLE_PERMISSION_PROMPT_NOTIFY_HOOKS) return () => {};
  let n = setTimeout((l, s, f) => {
    try {
      GM(CW(), {
        message: `Claude needs your permission to use ${l}`,
        notificationType: "permission_prompt"
      }, {
        storageV5: s,
        credentials: f
      }).catch(() => {});
    } catch {}
  }, BYt, r, e, m);
  return n.unref(), () => clearTimeout(n);
}

var co = p(() => u({
  tool_name: o().describe("The name of the tool requesting permission"),
  input: ue(o(), oe()).describe("The input for the tool"),
  tool_use_id: o().optional().describe("The unique tool use request ID")
})), me = p(() => U([ "user_temporary", "user_permanent", "user_reject" ]).optional().catch(void 0)), ce = r => u({
  behavior: A("allow"),
  updatedInput: ue(o(), oe()).optional(),
  updatedPermissions: Srt(r, "SDK host"),
  toolUseID: o().optional(),
  decisionClassification: me()
}), pe = p(() => u({
  behavior: A("deny"),
  message: o(),
  interrupt: M().optional(),
  toolUseID: o().optional(),
  decisionClassification: me()
})), fGe = p(() => $e([ ce("refused"), pe() ])), Se = p(() => $e([ ce("cut"), pe() ]));

function mGe(r) {
  return r === "strict" ? Se() : fGe();
}

var eQn = `Expected {behavior: 'allow', updatedInput?: object} or {behavior: 'deny', message: string}. ${hYt}`;

function z(r, e, m, n, l) {
  if (n.forRemoteExecution === !0 || Sv(n)) return;
  let s = r && IY(r, e.suppressesAlwaysAllowRule?.(m) === !0 || l ? void 0 : dOt(e, m), de(n));
  if (s && e.suppressesAllPermissionUpdates?.(m) === !0) {
    let f = H4(s);
    return f.length > 0 ? f : void 0;
  }
  return s && (e.suppressesAlwaysAllowRule?.(m) === !0 || l) ? M4(s, e, de(n)) : s;
}

function aWt(r, e, m, n, l, s) {
  switch (r.kind) {
   case "launcher":
    {
      let f = z(e, m, n, l, s);
      if (f?.length) l.setSessionToolPermissionContext(h => SO(h, f)), setImmediate(() => {
        $D.emit();
      }), h1(f, l.storageV5).catch(d);
      return {
        applied: f ?? [],
        lostTightenings: 0
      };
    }

   case "strict":
    return car(r, e, {
      vetoed: () => !1,
      strip: f => z(f, m, n, l, s) ?? [],
      toolName: jc(m),
      input: n,
      setContext: l.setSessionToolPermissionContext
    });
  }
}

function hHe(r, e, m, n, l, s = m, f = !1) {
  let h = {
    type: "permissionPromptTool",
    permissionPromptToolName: m.name,
    toolResult: e
  };
  if (e.behavior === "allow") {
    let _ = e.updatedPermissions?.findLast(b => b.type === "setMode")?.mode;
    if (_ === "default" || _ === "acceptEdits") R8e(_);
    switch (r.kind) {
     case "launcher":
      {
        aWt(r, e.updatedPermissions, s, n, l, f);
        let b = e.updatedInput && Object.keys(e.updatedInput).length > 0 ? e.updatedInput : V2(s.name, n);
        return {
          ...e,
          updatedInput: b,
          decisionReason: h
        };
      }

     case "strict":
      {
        let b = nns(e.updatedInput, n, s), c = b === void 0 ? rns(r, e.updatedInput, n, s) : void 0, P = b ?? c?.input;
        if (P === void 0) return kde(s.name, e.toolUseID);
        if (P !== n && Fh(de(l), s, P, "deny") !== null) return c?.onRefused("deny_rule"), 
        kde(s.name, e.toolUseID);
        let {lostTightenings: S} = aWt(r, e.updatedPermissions, s, c?.input ?? n, l, f);
        if (S > 0) return Ykt(s.name, e.toolUseID);
        return {
          ...e,
          updatedInput: P,
          decisionReason: h
        };
      }
    }
  } else if (e.behavior === "deny" && e.interrupt) t(`SDK permission prompt deny+interrupt: tool=${m.name} message=${e.message}`), 
  VR(l.abortController).abort();
  return {
    ...e,
    decisionReason: h,
    decideLocation: "ask-path"
  };
}

var Ee = "tengu_cinder_swift";

function ZJn() {
  return k(Ee, "off") === "interrupt";
}

function Q(r, e) {
  try {
    return r.getToolUseSummary?.(e) ?? r.getActivityDescription?.(e) ?? "";
  } catch (m) {
    return t(`describeToolUseForPush failed: ${m}`, {
      level: "error"
    }), "";
  }
}

function le(r, e) {
  return fe(r, e)?.card;
}

function fe(r, e) {
  if (!r.requiresUserInteraction?.()) return;
  switch (r.name) {
   case Yo:
    {
      let m = Array.isArray(e?.questions) ? e.questions : [], n = m[0], l = n?.header || n?.question, s = m.length > 1 ? ` (+${m.length - 1} more)` : "";
      return {
        label: "Question",
        body: l ? l + s : "Tap to answer"
      };
    }

   case FS:
    return {
      label: "Plan",
      body: "Plan ready for review"
    };

   case K$e:
    return {
      label: o4(r.name),
      body: ""
    };

   case Gbe:
    {
      let m = typeof e?.reason === "string" ? qo(xX(Ou(e.reason)), 200).replace(/[\s.!?]+$/u, "") : "";
      return {
        label: "Claude in Chrome",
        body: m ? `Let Claude use your browser for ${m}? Open this task on your computer.` : "Let Claude use your browser? Open this task on your computer.",
        card: {
          title: "Set up Claude in Chrome on your computer",
          description: "Claude wants to use your browser through Claude in Chrome. To set it up, open this task in the Claude app on a computer; any answer here skips it."
        }
      };
    }

   default:
    return {
      label: o4(r.name),
      body: ""
    };
  }
}

function he(r, e, m, n, l) {
  let s = Eee(l?.decisionReason), f = {
    ...l?.decisionReason && {
      decision_reason_type: l.decisionReason.type
    },
    ...s && {
      decision_reason_code: s
    }
  }, h = l?.hostDisplay ? {
    label: l.hostDisplay.displayName,
    body: ""
  } : fe(r, e);
  if (h) return {
    tool_name: r.name,
    display_tool_name: h.label,
    action_description: h.body,
    raw_command: void 0,
    tool_use_id: m,
    request_id: "",
    ...n && {
      suppressed_request_id: n
    },
    input: e,
    ...f
  };
  let _ = (r.name === je || r.name === Rt) && typeof e.command === "string" ? xX(e.command) : void 0, b = _ !== void 0 ? typeof e.description === "string" && e.description && !EV(r) && !Au(e) ? xX(e.description) : qo(_, oA) : xX(Q(r, e)), c = l?.tapToOpenOnly === !0;
  return {
    tool_name: r.name,
    display_tool_name: o4(r.name),
    action_description: b,
    raw_command: _,
    tool_use_id: m,
    request_id: c ? "" : n,
    ...c && n && {
      suppressed_request_id: n
    },
    input: e,
    ...f
  };
}

import { isDeepStrictEqual as De } from "util";

import { isDeepStrictEqual as ye } from "util";

var Oe = 3;

function ge(r) {
  let {promise: e, resolve: m} = Promise.withResolvers(), {ask: n, tool: l, input: s, toolUseContext: f, toolUseID: h, isWaiting: _} = r;
  if (!k("tengu_drifting_dream", !1) || r.answers.kind !== "launcher" || r.forced || f.hookAskFloor === !0 || n.personOnly === !0 || f.forRemoteExecution === !0 || mH(jc(l)) || rSt(n, l, f)) return {
    allowed: e,
    stop: () => {}
  };
  let b = 0, c = S => {
    if (!_()) return;
    let y = de(f);
    if (Qs(J_(l, y), y.servedCall === !0)) return;
    let O = ++b, E = ase(f);
    Zu(l, s, {
      ...f,
      permissionRound: void 0
    }, r.assistantMessage, h).then(R => {
      if (!_() || O !== b) return;
      if (!ye(ase(f), E)) {
        if (S < Oe) c(S + 1);
        return;
      }
      if (R.behavior === "allow" && x(R.decisionReason)) P(), m(R);
    }).catch(R => {
      if (!Ve(R)) d(Je(j(R), "permissionRecheckSignal: hasPermissionsToUseTool failed for a waiting can_use_tool ask"));
    });
  }, P = $D.subscribe(() => c(0));
  if (!ye(ase(f), r.askedUnder)) c(0);
  return {
    allowed: e,
    stop: P
  };
}

function x(r) {
  switch (r?.type) {
   case "rule":
    return !0;

   case "mode":
    return r.mode === "default" || r.mode === "acceptEdits" || r.mode === "bypassPermissions";

   case "subcommandResults":
    {
      let e = [ ...r.reasons.values() ].filter(m => m.behavior !== "allow" || m.decisionReason?.type !== "other" || m.decisionReason.reason !== Xfe);
      return e.length > 0 && e.every(m => m.behavior === "allow" && x(m.decisionReason));
    }

   default:
    return !1;
  }
}

function Pe(r) {
  let e = r.ask.decisionReason;
  if (e === void 0 ? r.tool.mcpInfo === void 0 : e.type !== "rule") return;
  try {
    if (Ae(r)) return !1;
  } catch (m) {
    if (!Ve(m)) d(m);
    return !1;
  }
  return ve(r);
}

function TKo(r) {
  return r.subtype === "can_use_tool" ? {
    ...r,
    server_policy_ask_only: void 0
  } : r;
}

function Ae({tool: r, effectiveInput: e, ask: m, toolUseContext: n, forceDecision: l}) {
  let s = m.decisionReason;
  return r.mcpInfo === void 0 || !(s === void 0 || cot(s)) || !_e(m, [ "decisionReason" ]) || l !== void 0 || n.hookAskFloor === !0 || n.forRemoteExecution === !0 || mH(jc(r)) || rSt(m, r, n) || r.suppressesAlwaysAllowRule?.(e) === !0 || r.suppressesAllPermissionUpdates?.(e) === !0 || r.ignoresWholeToolAllowRule?.(e) === !0 || n.remoteCall !== void 0 || n.requireCanUseTool === !0 || jue(n.session, r.name) !== void 0 || r.askInputPreparer !== void 0 || Le(r, n) || ITt(s, r, e, n) || Ne(r, n);
}

async function ve(r) {
  try {
    let e = ase(r.toolUseContext);
    return await Ce(r) && De(ase(r.toolUseContext), e) && !Ae(r);
  } catch (e) {
    if (!Ve(e)) d(e);
    return !1;
  }
}

async function Ce({tool: r, effectiveInput: e, toolUseContext: m}) {
  let n = !1, l = await gZr({
    ...r,
    checkPermissions: async (s, f) => {
      let h = await r.checkPermissions(s, f);
      return n ||= h.behavior === "ask", h;
    }
  }, e, m);
  return !n && (l.behavior === "allow" ? x(l.decisionReason) : l.behavior === "ask" && _e(l, []));
}

var Ie = [ "behavior", "message", "suggestions" ];

function _e(r, e) {
  return Object.entries(r).every(([m, n]) => n === void 0 || Ie.includes(m) || e.includes(m));
}

function Ne(r, e) {
  return Ge().hooksRespawns.size > 0 || sl("tool.check", {
    ...INe(r),
    agentId: e.agentId
  }, yF("tool.check")) || Jot("PermissionRequest") !== "none" || hF("PermissionRequest") || rV("PermissionRequest", e.sessionHooksRegistry, rR(e, "PermissionRequest", e.session.id));
}

function Le(r, e) {
  let m = de(e);
  return Qs(J_(r, m), m.servedCall === !0);
}

function AKo(r, e) {
  let m = async (n, l, s, f, h, _) => {
    let b = ase(s), c;
    switch (r.kind) {
     case "launcher":
      c = _ ?? await Zu(n, l, s, f, h);
      break;

     case "strict":
      c = _ ?? await yre(n, l, s, f, h, r, void 0);
      break;
    }
    if (c.behavior === "allow") return c;
    if (c.behavior === "deny") {
      if (wn() && !s.abortController.signal.aborted) return uu();
      if (!N1e(c)) e.emitPermissionDenied(n.name, h, s.agentId, c);
      return c;
    }
    let P = Pe({
      tool: n,
      effectiveInput: c.updatedInput ?? l,
      ask: c,
      toolUseContext: s,
      forceDecision: _
    }), S = typeof P === "object" ? await P : P;
    if (s.abortController.signal.aborted) return {
      behavior: "deny",
      message: "Tool permission request aborted",
      toolUseID: h,
      decisionReason: sXe,
      decideLocation: "ask-path"
    };
    if (wn()) return uu();
    if (n.askInputPreparer !== void 0 && !X.has(c) && s.forRemoteExecution !== !0) {
      let v = await n.askInputPreparer(c.updatedInput ?? l, s, h);
      if (v !== void 0) return Me(m, r, v, c, n, l, s, f, h);
    }
    let y = c.updatedInput ?? l, O = c.suggestions;
    if (n.name === je && typeof y.command === "string" && O?.length && !O.some(v => v.destination !== "session")) O = [ ...l5t(y.command), ...O ];
    let E = new AbortController, R = s.abortController.signal, W = !1, Z = () => {
      if (!wn()) W = !0;
      E.abort(R.reason);
    };
    R.addEventListener("abort", Z, {
      once: !0
    });
    let C = He(), ee = lMs(s.agentContext), re, D, B = !1, ie;
    try {
      let L = (c.personOnly === !0 || X.has(c) ? Promise.resolve(void 0) : gGe(r, n, h, y, s, O, c, () => B || R.aborted)).then(w => ({
        source: "hook",
        outcome: w
      }));
      L.catch(() => {});
      let T = c.decisionReason, G = c.localDisplayOnly === !0 || c.personOnly === !0 && T?.type === "classifier";
      if (e.promptShown) {
        let w = he(n, y, h, C, {
          tapToOpenOnly: G,
          hostDisplay: c.hostDisplay,
          decisionReason: T
        });
        re = ee, e.promptShown(C, w, ee, Jpe(s.agentContext));
      }
      let q = zl(T), Re = n.name === je || n.name === Rt, be = ke.get(c) || (c.metadata && "command" in c.metadata ? c.metadata.command.description : void 0) || (Re && typeof y.command === "string" ? typeof y.description === "string" && y.description ? xX(y.description) : qo(xX(y.command), oA) : Q(n, y)) || void 0, K = le(n, y), Y = EV(n) || n.name === Rt && Au(y) ? void 0 : be ?? K?.description, ne = SAe(T) ?? (T?.type === "subcommandResults" && q ? zl(T, w => !w.classifierApprovable && !war(w))?.reason ?? (war(q) ? void 0 : q.reason) : void 0), N = c.hostDisplay, V = G ? si(cn(ne ?? "")) : "", se = N ? N.description : V && Y && c.localDisplayOnly !== !0 ? `${Y}\n${V}` : V || Y, Te = mH(jc(n)), te = tQn(o4(n.name), s.storageV5, s.credentials);
      if (N) g("permission_host_worded_ask");
      let H = e.request({
        subtype: "can_use_tool",
        tool_name: n.name,
        ...n.mcpInfo && {
          mcp_server: oar(n.mcpInfo)
        },
        ...K && {
          title: K.title
        },
        display_name: N?.displayName ?? o4(n.name),
        input: y,
        ...N && {
          title: N.title
        },
        ...se && {
          description: se
        },
        ...Te && {
          tool_kind: "browser"
        },
        permission_suggestions: O,
        blocked_path: c.blockedPath,
        decision_reason: ne,
        decision_reason_type: T?.type,
        decision_reason_code: Eee(T),
        decision_reason_rule_source: T?.type === "rule" ? T.rule.source : void 0,
        server_policy_ask_only: S,
        ...c.matchedAskRule && {
          matched_ask_rule: {
            source: c.matchedAskRule.source,
            tool_name: c.matchedAskRule.ruleValue.toolName,
            ...c.matchedAskRule.ruleValue.ruleContent !== void 0 && {
              rule_content: c.matchedAskRule.ruleValue.ruleContent
            }
          }
        },
        classifier_approvable: q ? !zl(T, w => !w.classifierApprovable) : void 0,
        ...(T?.type === "rule" || T?.type === "other" && T.reason === nPn) && n.mcpInfo?.effectiveMaxPermission === "ask" && {
          decision_reason_code: "org_ask_ceiling"
        },
        tool_use_id: h,
        agent_id: s.agentId,
        plugin: PGn(s) ?? (Sv(s) ? "" : void 0),
        suppress_always_allow_rule: c.suppressAlwaysAllowRule || n.suppressesAlwaysAllowRule?.(y) === !0 && !(O ?? []).some(w => (w.type === "addRules" || w.type === "replaceRules") && w.behavior === "allow" && w.rules.some(F => F.ruleContent !== void 0)) || void 0,
        default_to_no: c.defaultToNo || void 0,
        provenance_prompt_line: c.provenancePromptLine,
        requires_user_interaction: n.requiresUserInteraction?.() || G || N !== void 0 || void 0
      }, E.signal, C).then(w => ({
        source: "sdk",
        result: w
      }));
      if (H.catch(() => {}), H.then(() => {
        B = !0;
      }, () => {
        B = !0;
      }), e.isPending(C)) D = {
        logContext: {
          tool: n,
          input: y,
          messageId: f.message.id,
          toolUseID: h,
          permissionMode: de(s).mode,
          agentContext: s.agentContext,
          mcpClients: s.options.mcpClients,
          appliedAllowUpdates: w => {
            switch (r.kind) {
             case "launcher":
              return z(w, n, y, s, c.suppressAlwaysAllowRule === !0);

             case "strict":
              return;
            }
          }
        },
        shownAtMs: Date.now()
      }, xss(D.logContext, T?.type);
      H.then(te, te);
      let I = await Promise.race([ L, H ]);
      if (I.source === "hook") {
        if (I.outcome) {
          if (wn() && !W) await uu();
          if (E.abort(), D) zPn(D.logContext, {
            kind: "hook",
            behavior: I.outcome.decision.behavior === "allow" ? "allow" : "deny",
            permanent: I.outcome.permanent
          }, D.shownAtMs);
          if (I.outcome.interrupt) t(`Hook interrupt: tool=${n.name} hookMessage=${I.outcome.decision.message}`), 
          VR(s.abortController).abort();
          return I.outcome.decision;
        }
        let w = ge({
          answers: r,
          ask: c,
          forced: _ !== void 0,
          askedUnder: b,
          tool: n,
          input: l,
          toolUseContext: s,
          assistantMessage: f,
          toolUseID: h,
          isWaiting: () => e.isPending(C) && !R.aborted
        });
        ie = w.stop;
        let F = await Promise.race([ H.then(() => {}), w.allowed ]);
        if (F !== void 0 && e.isPending(C)) {
          if (wn() && !W) await uu();
          if (E.abort(), ePn(s, h), D) zPn(D.logContext, {
            kind: "recheck"
          }, D.shownAtMs);
          return F;
        }
      }
      let ae = I.source === "hook" ? (await H).result : I.result;
      if (D) zPn(D.logContext, {
        kind: "host_answer",
        answer: ae
      }, D.shownAtMs);
      let J = hHe(r, ae, n, y, s, n, c.suppressAlwaysAllowRule === !0);
      if (J.behavior === "allow" && e.answeredAtHostDialog(C) && s.forRemoteExecution !== !0 && Ovr()) _Es(s.session, h, {
        toolName: n.name,
        input: J.updatedInput ?? y
      });
      return J;
    } catch (v) {
      if (wn() && e.isPending(C)) await uu();
      if (e.interruptedAtStreamClose(C) && ZJn()) {
        try {
          i("tengu_auq_park_interrupted_at_stream_close", {
            stream_closed: v instanceof pd
          }), t(`Interrupting parked AskUserQuestion toolUseID=${h} at stream close (deny skipped; turn aborts as shutdown)`);
        } catch {}
        throw v;
      }
      let L = NQr(r, v, n.name), T = POr;
      if (v instanceof ex) t(`canUseTool returned a schema-invalid permission result for ${n.name}: ${v.message.slice(0, 2e3)}`, {
        level: "error"
      }), L = `The canUseTool callback returned an invalid permission result. ${eQn}`, 
      T = oXe; else if (v instanceof pd) T = zIo; else if (Ve(v) && R.aborted) {
        if (L = "Tool permission request aborted", T = sXe, D && !Zon(R)) zPn(D.logContext, {
          kind: "turn_aborted"
        }, D.shownAtMs);
      }
      return {
        behavior: "deny",
        message: L,
        toolUseID: h,
        decisionReason: T,
        decideLocation: "ask-path"
      };
    } finally {
      ie?.(), e.promptSettled(C, re), R.removeEventListener("abort", Z);
    }
  };
  return m;
}

var X = new WeakSet, ke = new WeakMap;

async function Me(r, e, m, n, l, s, f, h, _) {
  let b = f.abortController.signal, c = () => ({
    behavior: "deny",
    message: "Tool permission request aborted",
    toolUseID: _,
    decisionReason: sXe,
    decideLocation: "ask-path"
  });
  if (n.personOnly !== !0) {
    let E;
    try {
      E = await gGe(e, l, _, n.updatedInput ?? s, f, n.suggestions, n, () => b.aborted);
    } catch (R) {
      return b.aborted ? c() : {
        behavior: "deny",
        message: NQr(e, R, l.name),
        toolUseID: _,
        decisionReason: POr,
        decideLocation: "ask-path"
      };
    }
    if (E !== void 0) {
      if (wn() && !b.aborted) return uu();
      if (E.interrupt) VR(f.abortController).abort();
      return E.decision;
    }
  }
  let P = await m.prepare();
  if (b.aborted) {
    if (!("error" in P)) P.release();
    return c();
  }
  if ("error" in P) return {
    behavior: "deny",
    message: P.error,
    toolUseID: _,
    decisionReason: {
      type: "other",
      reason: "files not attached"
    },
    decideLocation: "ask-path"
  };
  let S = {
    ...kar(n, P.input),
    updatedInput: P.input
  };
  X.add(S), ke.set(S, P.description);
  let y;
  try {
    y = await r(l, s, f, h, _, S);
  } catch (E) {
    throw P.release(), E;
  }
  if (y.behavior !== "allow") return P.release(), y;
  let O = y.updatedInput !== void 0 && Object.keys(y.updatedInput).length > 0 ? y.updatedInput : P.input;
  if (!zn(O.files, P.input.files)) return P.release(), {
    behavior: "deny",
    message: `The approval for ${l.name} changed the files to attach, which cannot be applied. Call it again with the files you want attached.`,
    toolUseID: _,
    decisionReason: {
      type: "other",
      reason: "approval changed the files"
    },
    decideLocation: "ask-path"
  };
  return {
    ...y,
    updatedInput: O
  };
}

async function gGe(r, e, m, n, l, s, f, h) {
  if (l.forRemoteExecution === !0) return;
  let _ = de(l).mode, b = PKe(e.name, m, n, l, _, s, l.abortController.signal);
  for await (let c of b) if (c.permissionRequestResult && (c.permissionRequestResult.behavior === "allow" || c.permissionRequestResult.behavior === "deny")) {
    let P = c.permissionRequestResult;
    if (P.behavior === "allow") {
      let S = P.updatedInput;
      switch (r.kind) {
       case "launcher":
        break;

       case "strict":
        if (!Ede(S, n)) return {
          decision: kde(e.name, m),
          interrupt: !1,
          permanent: !1
        };
        S = void 0;
        break;
      }
      if (Cde(e, n, S, !0)) return {
        decision: Rde(e, "PermissionRequest"),
        interrupt: !1,
        permanent: !1
      };
      let y = S || n;
      if (S) {
        let R = lot(await Wk(e, y, {
          ...l,
          toolUseId: m,
          permissionRound: void 0
        }, {
          hookUpdatedInput: S
        }), e.name);
        if (R) return {
          decision: R.behavior === "ask" ? {
            behavior: "deny",
            message: R.message,
            decisionReason: R.decisionReason ?? pan,
            decideLocation: "ask-path"
          } : {
            ...R,
            decideLocation: "ask-path"
          },
          interrupt: !1,
          permanent: !1
        };
      }
      if (f.hostDisplay !== void 0 || oPn(e, S)) return;
      let {applied: O, lostTightenings: E} = h() ? {
        applied: [],
        lostTightenings: 0
      } : aWt(r, P.updatedPermissions && WFn(P.updatedPermissions, de(l)), e, n, l, f.suppressAlwaysAllowRule === !0);
      if (E > 0) return;
      return {
        decision: {
          behavior: "allow",
          updatedInput: y,
          userModified: !1,
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest"
          }
        },
        interrupt: !1,
        permanent: O.some(R => z5e(R.destination))
      };
    } else return {
      decision: {
        behavior: "deny",
        message: P.message || "Permission denied by PermissionRequest hook",
        decisionReason: {
          type: "hook",
          hookName: "PermissionRequest"
        },
        decideLocation: "ask-path"
      },
      interrupt: P.interrupt === !0,
      permanent: !1
    };
  }
  return;
}

export { ZJn, fGe, mGe, eQn, aWt, hHe, tQn, TKo, AKo, gGe };
