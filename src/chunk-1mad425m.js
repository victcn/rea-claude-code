// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { xle, W6 } from "./chunk-qjb8dzm4.js";

import { Rle } from "./chunk-g9n1m2vk.js";

import { _ye } from "./chunk-69rr80fg.js";

import { ry } from "./chunk-vxr6sv7z.js";

import { B, wT, rte } from "./chunk-3pqddg8f.js";

import { Je, j, l } from "./chunk-b0z4bv3v.js";

import { bt, _, t } from "./chunk-kawq2919.js";

import { le } from "./chunk-cqgvwwgb.js";

import { d } from "./chunk-6ah1819r.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Cet, Ret, pne } from "./chunk-0n13shpa.js";

import { Qe, VRr, f0t, Krn } from "./chunk-xywp7esx.js";

import { dr, eg, Ml } from "./chunk-y3nc3daq.js";

import { mh } from "./chunk-4mw3z9gg.js";

import { ZL, tRn, o_e, OAe, $de, WA, Zu, yp, Aeo, uAt, iqe, pAt, ad, A_, koo, rds } from "./chunk-84yp45y8.js";

import { Toe } from "./chunk-2xhrgh8h.js";

import { D0 } from "./chunk-b47tzzqx.js";

import { oT, DS } from "./chunk-f4r8hspx.js";

import { pn, F_ } from "./chunk-9tdwgnpn.js";

import { ju } from "./chunk-5sbf9djq.js";

import { Z4 } from "./chunk-bkx9v5fh.js";

import { Rhn } from "./chunk-p909e8k0.js";

import { Pet } from "./chunk-r9m1v43y.js";

import { AD } from "./chunk-rffd6d4a.js";

import { Vw, Gq } from "./chunk-s0van10s.js";

import { dk } from "./chunk-tz958kay.js";

import { hte, HFo, mMe, nQe, DFt, DFo, X0r } from "./chunk-5yt2rwwg.js";

import { eZe } from "./chunk-v4wf0zpz.js";

import { Pjt } from "./chunk-09wwpwma.js";

import { LD } from "./chunk-ckm7hazr.js";

import { Ntt } from "./chunk-crwctjfx.js";

var Ee = 3e4;

function Q(S, I, b = Ee) {
  if (S === void 0) return {
    report: void 0,
    [Symbol.dispose]() {}
  };
  let U = 0, R = 0, O = (n, q) => (R = n > R ? n : R + .001, I({
    method: "notifications/progress",
    params: {
      progressToken: S,
      progress: R,
      message: q
    }
  })), E = setInterval(() => {
    U += 1;
    let n = U * b / 1e3;
    O(n, `Running for ${n}s`).catch(q => {
      t(`MCP server: progress heartbeat not sent: ${l(q)}`);
    });
  }, b);
  return E.unref?.(), {
    report: n => O(0, n),
    [Symbol.dispose]() {
      clearInterval(E);
    }
  };
}

function Pe(S) {
  return "closeSSEStream" in S;
}

var Kcn = "callerGone";

async function tKs(S, I, b, U, R, O) {
  yp(S);
  let E = t5n(I, b, B(), "stdio", U, R, O), n = new Pjt;
  await E.connect(n), bt(() => E.close());
}

class fe extends LD {
  #e;
  constructor(S) {
    super();
    this.#e = S;
  }
  get(S) {
    return this.#e.get(S);
  }
}

function t5n(S, I, b, U, R, O = "raw", E = {
  kind: "absent"
}) {
  let n = E.kind === "parsed" ? E.context : void 0, q = dk(R), T = U === "http";
  Krn(b.host, f0t);
  let W = mh();
  if (W.disableBackgroundAgentLaunch(), W.disableRemoteAgentIsolation(), W.disableBackgroundDeadline(), 
  T) X0r(mh()); else W.disableBackgroundCompletionNotice();
  if (rds(koo()), ZL(), wT()) Rhn(R).catch(d);
  if (Toe(), rte()) tRn().catch(d);
  let Se = DS(oT, void 0, T), ge = new LD, ee = {
    activeAgents: [],
    allAgents: []
  }, ne = T ? Promise.resolve() : WA(le(), R).then(e => {
    ee = $de(e, e.allAgents.filter(a => {
      if (o_e(a)) return !0;
      return OAe(a, "subagent", "definition"), !1;
    }));
  }).catch(e => {
    d(e);
  }), h = new Rle({
    name: "claude/tengu",
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION
  }, {
    capabilities: {
      tools: {
        listChanged: !0
      }
    }
  }), ie = dr(), M = () => DFt(T);
  if (T) {
    let {toolOutputServerCapabilities: e} = import.meta.require("./chunk-tmjap2v1.js"), a = e(M, n);
    if (a !== void 0) h.registerCapabilities(a);
    if (n !== void 0) {
      let {holdsSafetyAsksCapability: c} = import.meta.require("./chunk-1gcm5fzd.js");
      h.registerCapabilities(c());
      let {rendersUnderSessionRulesCapability: A} = import.meta.require("./chunk-qn104g9s.js");
      h.registerCapabilities(A());
    }
    let {interfaceVersionCapability: r} = import.meta.require("./chunk-5qp8yy8z.js");
    h.registerCapabilities(r());
  }
  let D = null, Te = () => {
    if (D === null) return;
    let e = M().map(r => r.name).join(`\n`);
    if (e === D) return;
    let a = D;
    D = e, h.sendToolListChanged().catch(r => {
      if (D === e) D = a;
      t(`mcp serve: tools/list_changed not sent: ${l(r)}`);
    });
  }, ae = !1, Ce = D0(() => {
    queueMicrotask(() => {
      if (ae) return;
      try {
        Te();
      } catch (e) {
        t(`mcp serve: tool re-list on policy verdict failed: ${l(e)}`, {
          level: "error"
        });
      }
    });
  });
  h.onclose = () => {
    ae = !0, Ce(), ie.abort(Ml("shutdown"));
  }, h.setRequestHandler(xle, async () => {
    await ne;
    let e = await DFo(U, {
      agentDefinitions: ee
    });
    return D = e.map(a => a.name).join(`\n`), {
      tools: e
    };
  });
  let ve = {
    session: b,
    run: e => e(),
    bind: e => e,
    [Symbol.dispose]: () => {}
  };
  function G(e, a, r) {
    let c = eg(ie), A = () => c.abort(Ml("remote-cancel"));
    if (e.aborted) A(); else e.addEventListener("abort", A, {
      once: !0
    });
    let Y = new fe(ge), te, P = () => te ??= {
      ...hte(),
      ...E.kind === "parsed" && {
        toolPermissionContext: E.context
      }
    };
    return {
      toolUseContext: {
        abortController: c,
        messageQueue: A_(),
        session: r,
        agentContext: {
          agentType: "main",
          agentId: ry()
        },
        options: {
          commands: [],
          tools: a,
          toolCatalog: Gq,
          mainLoopModel: Qe(),
          thinkingConfig: {
            type: "disabled",
            mechanical: !0
          },
          mcpClients: [],
          mcpResources: {},
          isNonInteractiveSession: !0,
          runQuery: AD,
          debug: S,
          verbose: I,
          agentDefinitions: ee
        },
        getAppState: P,
        setAppState: () => {},
        markPrResolvedThisSession: () => {},
        isUltrareviewOverageConfirmed: () => !1,
        markUltrareviewOverageConfirmed: () => {},
        getAdvisorSetting: () => P().advisorModel,
        getMcp: () => P().mcp,
        getProactivityLevel: () => P().proactivityLevel,
        getWebBrowser: () => P().webBrowser,
        setToolPermissionContext: () => {},
        setSessionToolPermissionContext: () => {},
        taskRegistry: Z4,
        queuedNotificationsRegistry: Pet,
        sessionHooksRegistry: eZe,
        setWebBrowserSlice: () => {},
        setArtifactReadVersion: () => {},
        getArtifactReadObservation: _ye(P),
        artifactRegistries: Cet(),
        setArtifactContractTarget: () => {},
        getArtifactContractTarget: () => ({
          targetSlug: void 0,
          pins: {}
        }),
        enqueuePendingMemoryUpdate: () => {},
        agentLifecycle: Ntt,
        teammateColors: Ret,
        rootToolSurface: {
          tools: a,
          mainLoopModel: Qe()
        },
        messages: [],
        turnStartIndex: 0,
        readFileState: Se,
        dedupUnchangedReads: !1,
        toolState: Y,
        toolDecisions: new Map,
        permissionRelays: pne,
        getFileHistoryState: () => {},
        applyFileHistoryOp: () => {},
        applyAttributionOp: () => {},
        storageV5: R,
        credentials: q
      },
      toolState: Y
    };
  }
  return h.setRequestHandler(W6, async ({params: {name: e, arguments: a, _meta: r}}, {signal: c, sendNotification: A, authInfo: Y, requestId: te}) => {
    let {transport: P} = h, z = T && P !== void 0 && Krn(b.host, r?.[VRr]), ce = () => {
      if (P !== void 0 && Pe(P)) P.closeSSEStream(te);
    };
    if (c.aborted) ce(); else c.addEventListener("abort", ce, {
      once: !0
    });
    if (await ne, T) {
      let {refuseCallerInterface: s} = import.meta.require("./chunk-5qp8yy8z.js"), {bringsToolHostPermissionRequest: v} = import.meta.require("./chunk-tmjap2v1.js"), i = v(r) ? void 0 : s(e, r);
      if (i !== void 0) return i;
    }
    if (E.kind === "unreadable") {
      let s = `${e} was not run: this server could not read its launch settings (CLAUDE_CODE_MCP_SERVE_SETTINGS), so it runs nothing.`;
      return t(`MCP server: ${s}`, {
        level: "error"
      }), {
        isError: !0,
        content: [ {
          type: "text",
          text: s
        } ]
      };
    }
    if (T) {
      let {bringsToolHostPermissionRequest: s, refusedResult: v} = import.meta.require("./chunk-tmjap2v1.js");
      if (s(r)) {
        let {handleToolHostPermissionRequest: i} = await import("./chunk-raexj74x.js");
        return await i({
          name: e,
          args: a,
          meta: r,
          servedTools: M,
          launchPermissionContext: n,
          newCall: () => {
            let y = G(c, M(), b);
            return {
              toolUseContext: y.toolUseContext,
              release: () => X(y.toolState)
            };
          },
          startHeartbeat: () => Q(r?.progressToken, A),
          callerLogsSharedEvents: z
        }) ?? v({
          code: "unsupported_protocol",
          message: `${e} was not run: this server gave no answer to the permission request sent with it. Retrying won't help.`
        });
      }
    }
    let de = a?.deny_rules;
    using C = n === void 0 && !(Array.isArray(de) && de.length > 0) ? ve : (await import("./chunk-7hrgdzez.js")).ownCallDirectory(b, c);
    if (T) {
      let {countedUnlessRepeated: s, SERVED_FILE_CALLS: v} = await import("./chunk-t9c2rdz0.js"), i = v.get(e);
      if (i) {
        using k = Q(r?.progressToken, A);
        let y, u = Y?.extra?.[Kcn];
        try {
          let {summary: J, output: F} = await s(e, C.bind(() => i(a, c, {
            toolUseContext: () => (y ??= G(c, M(), C.session)).toolUseContext,
            session: C.session,
            launchPermissionContext: n,
            ...z && {
              callerLogsSharedEvents: !0
            },
            reportProgress: k.report,
            callerGone: u instanceof AbortSignal ? u : void 0,
            checkAsServedTool: async (H, o, w) => {
              let N = pn(M(), H);
              if (!N?.isEnabled()) return {
                rejection: `${e} was not run: this server does not serve ${H}.`
              };
              let V = F_(N, o);
              if (!V.success) return {
                rejection: `${e} was not run: its input is not valid for ${H}: ${V.error.message}`
              };
              let {toolUseContext: ue} = y ??= G(c, M(), C.session), se = await (N.validateInput?.(V.data, ue));
              if (se && !se.result) return {
                rejection: `${e} was not run: ${H} refused its input: ${se.message}`
              };
              let me = w.length === 0 ? n : (await import("./chunk-va982rrw.js")).withDenyRulesOfOneCall(n, w);
              if (w.length > 0 && me === void 0) return {
                rejection: `${e} was not run: one of the deny rules sent with it could not be read. Retrying won't help.`
              };
              let {checkPlainCall: Re} = await import("./chunk-tmjap2v1.js");
              return Re(N, V.data, ue, me, r);
            }
          }))), {encodeServedOutput: L} = await import("./chunk-tgfrrap7.js");
          return C.run(() => L(J, F));
        } catch (J) {
          return {
            isError: !0,
            content: [ {
              type: "text",
              text: l(J)
            } ]
          };
        } finally {
          if (y) X(y.toolState);
        }
      }
    }
    let Z = M(), K = T && HFo.has(e), oe = K && z;
    if (T && !K) {
      let {answerToolOutputRequest: s} = await import("./chunk-tmjap2v1.js"), v = await C.run(() => s({
        name: e,
        args: a,
        meta: r,
        tools: Z,
        launchPermissionContext: n,
        newCall: () => {
          let i = G(c, Z, C.session);
          return {
            toolUseContext: i.toolUseContext,
            release: () => X(i.toolState)
          };
        },
        startHeartbeat: () => Q(r?.progressToken, A)
      }));
      if (v !== void 0) return v;
    }
    let p = K ? pn(Vw(), e) : pn(Z, e);
    if (!p) throw Error(`Tool ${e} not found`);
    let pe = K ? Y?.extra?.[Kcn] : void 0, {toolUseContext: re, toolState: ye} = G(pe instanceof AbortSignal ? AbortSignal.any([ c, pe ]) : c, Z, C.session);
    try {
      if (!p.isEnabled()) {
        let o = `Tool ${e} is not enabled`;
        return t(`MCP server: ${o}`, {
          level: "error"
        }), {
          isError: !0,
          content: [ {
            type: "text",
            text: o
          } ]
        };
      }
      let s = {
        ...a ?? {}
      }, v = [];
      if (T) {
        for (let o of mMe) if (o in s) delete s[o], v.push(o);
      }
      let i = F_(p, s);
      if (!i.success) {
        let o = `Tool ${e} arguments failed schema validation: ${i.error.message}`;
        return t(`MCP server: ${o}`, {
          level: "error"
        }), {
          isError: !0,
          content: [ {
            type: "text",
            text: o
          } ]
        };
      }
      let k = await C.run(() => p.validateInput?.(i.data, re));
      if (k && !k.result) {
        let o = `Tool ${e} input is invalid: ${k.message}`;
        return t(`MCP server: ${o}`, {
          level: "error"
        }), {
          isError: !0,
          content: [ {
            type: "text",
            text: o
          } ]
        };
      }
      let y = !1;
      if (T && O === "rendered") {
        let {asksForEditResult: o} = await import("./chunk-tnsajas1.js");
        y = o(p.name, r);
      }
      let u = await C.run(async () => (await import("./chunk-tmjap2v1.js")).checkPlainCall(p, i.data, re, n, r));
      if ("rejection" in u) return t(`MCP server: ${u.rejection}`, {
        level: "error"
      }), {
        isError: !0,
        content: [ {
          type: "text",
          text: u.rejection
        } ],
        ...u.meta !== void 0 && {
          _meta: u.meta
        }
      };
      using J = Q(r?.progressToken, A);
      let F = await C.run(() => p.call(i.data, {
        ...u.toolUseContext,
        permissionPhase: u.toolUseContext.permissionPhase ?? {}
      }, Zu, ad({
        content: []
      }), void 0, O === "raw" ? {
        gitDiffRead: !0
      } : y ? {
        smallResultAsked: !0
      } : void 0)), L, H = !1;
      if (K) {
        let {encodeUnlistedToolResult: o} = await import("./chunk-tgfrrap7.js");
        L = C.run(() => o(p, F));
      } else if (O === "rendered") {
        let {renderToolResultForMCP: o, withinAnswerLimit: w} = await import("./chunk-pqft2akf.js"), {answer: N, tooLarge: V} = w(p, await C.run(() => o(p, F, re)));
        L = y ? await (await import("./chunk-tnsajas1.js")).withEditResult(N, F) : N, H = V;
      }
      if (L === void 0) {
        let o = F.data, w = typeof o === "object" && o !== null && "backgroundTaskId" in o && typeof o.backgroundTaskId === "string" ? {
          ...o,
          backgroundOutputPath: ju(o.backgroundTaskId)
        } : o;
        L = {
          content: [ {
            type: "text",
            text: _(w)
          } ]
        };
      }
      if (v.length > 0) {
        let o = nQe(v), w = L.content.at(-1);
        if (w?.type === "text") w.text += `\n${o}`; else L.content.push({
          type: "text",
          text: o
        });
      }
      if (!oe) if (H) f(uAt(p.name), "result_too_large"); else g(uAt(p.name));
      return L;
    } catch (s) {
      let i = (s instanceof Error ? Aeo(s) : [ String(s) ]).filter(Boolean).join(`\n`).trim() || "Error";
      if (iqe(s)) t(`MCP server tool call '${e}' aborted`); else {
        let {code: k, isSad: y} = pAt(s);
        if (y) {
          if (t(`MCP server tool call '${e}' failed: ${i}`, {
            level: "error"
          }), !oe) f(uAt(p.name), k);
        } else {
          let u = j(s);
          if (d("telemetryMessage" in u ? u : Je(u, `mcp server tool '${p.name}' threw`)), 
          !oe) m(uAt(p.name), k);
        }
      }
      return {
        isError: !0,
        content: [ {
          type: "text",
          text: i
        } ]
      };
    } finally {
      X(ye);
    }
  }), h;
}

function X(S) {}

export { Kcn, tKs, t5n };
