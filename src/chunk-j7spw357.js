// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

import { q, EDo, ke, Ir, x0o, HJe, ve, Zee, $Je, tFt, FJe, jX, nWe, mc } from "./chunk-3pqddg8f.js";

import { Ve, Je, j } from "./chunk-b0z4bv3v.js";

import { g } from "./chunk-3ykz5st8.js";

import { ui, rc } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Ut } from "./chunk-8yperama.js";

import { aat } from "./chunk-sqb9meyh.js";

import { VCn, Mp, hQ, X2, mot, Yv, yp, cLe, zb, CPn, N5t, MQ, jAt, rCe, Yd, U3, cV, B3, bro, wro, ga, vro, Gpr, $m, $_e, R3t, pCe, uF, WW, F_e, Pro, H3t, t0, X4, xS } from "./chunk-84yp45y8.js";

import { ku } from "./chunk-7en5gt36.js";

import { B8 } from "./chunk-9tdwgnpn.js";

import { zgo } from "./chunk-km6d4a9r.js";

import { gf } from "./chunk-5sbf9djq.js";

import { Hp, Kqe, Mn } from "./chunk-bkx9v5fh.js";

import { T$e } from "./chunk-2xhrgh8h.js";

import { jxe, Tct, tUe, Act, Cct } from "./chunk-kq1bg4dg.js";

import { Len } from "./chunk-hk8p0fqv.js";

import { I5e } from "./chunk-j99efqre.js";

import { SSe } from "./chunk-rshryz75.js";

import { Dce } from "./chunk-584kx1w1.js";

import { Pso } from "./chunk-z09tf6qf.js";

import { xne } from "./chunk-6dp99n13.js";

import { Okn, Mkn } from "./chunk-etkns590.js";

import { u4 } from "./chunk-2hverc19.js";

import { Vhe } from "./chunk-d7rzkmcs.js";

import { Dtt } from "./chunk-akzj9ws1.js";

import { r6r } from "./chunk-9ckkqdj1.js";

import { Z5r } from "./chunk-zd9ffsbf.js";

import { qJ } from "./chunk-8wd8tfa4.js";

import { Tkn } from "./chunk-crwctjfx.js";

import { Rkn } from "./chunk-vcw4eg7d.js";

import { qs } from "./chunk-05wvva46.js";

import { q7 } from "./chunk-34fdkj05.js";

import { N } from "./chunk-hmqkrrtz.js";

import { randomUUID as se } from "crypto";

var re = null;

async function* J5r({session: o, setMessages: m, readFileState: D, sessionEnvVars: L, toolState: H, memorySelector: B, getAppState: r, setAppState: h, sessionHooksRegistry: F, dialogStore: x, isolationLatch: u, taskRegistry: R, clearedSessionTitle: p, storageV5: s, credentials: k, deferSessionStartHooks: b, releaseDeferredSessionStartHooks: G, resetTrigger: E, resetUserMessageUuid: K}) {
  Rkn(o), xS(X4), Act(), tUe(), jxe();
  let Y = rCe();
  await jAt(o, "clear", {
    sessionHooks: F,
    getAppState: r,
    signal: AbortSignal.timeout(Y),
    storageV5: s,
    credentials: k
  }), VCn("conversation_clear");
  let l = new Set, A = [];
  if (r) for (let e of Object.values(r().tasks)) {
    if (T(e)) continue;
    if (Mn(e)) l.add(e.agentId), A.push(e); else if (Hp(e)) l.add(e.identity.agentId);
  }
  G?.(), B8("clear"), u4(o, void 0), m(e => {
    if (N5t() === "padded-countdown") CPn.of(o).rollOverContext("main", hQ(e));
    return [];
  });
  let W = r ? Object.values(r().tasks).some(e => !T(e) && Kqe.has(e.type) && (e.status === "running" || Mn(e) && zb(e))) : !1;
  Z5r(o, l, h, H, s, W);
  let M = ke();
  try {
    yp(M);
  } catch {
    t(`/clear: originalCwd "${M}" no longer exists; falling back`);
    let e = Ir();
    if (e !== M) try {
      yp(e);
    } catch {}
  }
  if (D.clear(), Vhe.of(o.host).reset(), Yv.of(o).discardAll(), xS(e => e.mode === "task-notification" && typeof e.value === "string" && mot(e.value) !== null), 
  L?.clear(), X2(B), u && l.size === 0) u.current = null;
  if (r) Mkn(r);
  let c = $m(q()), I = $_e(), f = !p && c !== void 0, z = f && Gpr(ga(q())), S, O;
  if (Tct(), h) {
    if (x?.dismissKind(xne.kind), Len(new Set), h(e => {
      let i = {};
      for (let [v, n] of Object.entries(e.tasks)) {
        if (!T(n)) {
          i[v] = n;
          continue;
        }
        try {
          if (n.status === "running") {
            if (Mp(n)) n.shellCommand?.kill(), n.shellCommand?.cleanup();
            if ("abortController" in n) n.abortController?.abort();
          }
        } catch (oe) {
          d(oe);
        }
        gf(v);
      }
      return S = N(Object.values(i), v => !ie.has(v.type)), O = e.activeGoal, {
        ...Okn(e),
        tasks: i,
        runningSubagents: S === 0 ? 0 : e.runningSubagents,
        ...{
          endedByModel: !1
        },
        attribution: aat(),
        cacheBreakerPhrase: void 0,
        sendMessagePins: {},
        agentNameRegistry: Tkn(e.agentNameRegistry, i),
        frameUrls: {},
        standaloneAgentContext: f && e.standaloneAgentContext?.name ? {
          name: e.standaloneAgentContext.name
        } : void 0,
        fileHistory: {
          snapshots: [],
          trackedFiles: new Set,
          snapshotSequence: 0
        }
      };
    }), O !== void 0) q7(O, "session_clear");
    qJ({});
  }
  if (R && S === 0) R.resetWebSearchBudget();
  if (r) {
    for (let e of r().mcp.clients) if (e.name === "ide" && e.type === "connected") {
      Dce(e, void 0);
      let {clearServerCache: i} = import.meta.require("./chunk-89c96hkc.js").mcpClientModule();
      await i(e.name, e.config).catch(() => {});
    }
  }
  zgo();
  let Q = q(), X = p ? Yd() ?? ku() : void 0, J = B3(), _ = S === 0 && l.size === 0 ? void 0 : jX(), Z = [ ...H3t() ], V = !1, ee = !1;
  if (R3t(), J) bro();
  if (V) Zee(!0), tFt(!0);
  if (ee) $Je(!0), FJe(!0);
  if (_ !== void 0) nWe(_);
  let y = se();
  if (ve() || mc() && SSe()) {
    let e = E === "clear" ? Vt(K) : null;
    u4(o, y), ui({
      type: "conversation_reset",
      new_conversation_id: y,
      uuid: y,
      ...E !== void 0 && {
        trigger: E
      },
      ...e !== null && {
        user_message_uuid: e
      },
      timestamp: (new Date).toISOString()
    }), g("bridge_conversation_reset");
  }
  Dtt.of(o.host).conversationReset(), yield {
    type: "conversation_reset",
    newConversationId: y
  }, x0o(s), HJe();
  let w = ga(q()), ne = z || f && Gpr(w);
  if (EDo({
    setCurrentAsParent: !0
  }), f && c !== void 0) uF(c);
  let ae = Promise.resolve(!0);
  if (I5e(), Cct(), r6r.of(o).reset(), Ut().needsAuthNoticedThisSession.clear(), T$e(o), 
  a.CLAUDE_CODE_SESSION_ID) process.env.CLAUDE_CODE_SESSION_ID = q();
  await U3();
  for (let e of re?.pauseStampsCarriedAcrossClear(r?.().mcp.clients, Z) ?? []) Pro({
    ...e,
    afterUuid: null
  }, s);
  if (wro(), vro(w), await Pso(q(), ku(), s), p) await cV(Q, p, X, "user", s); else if (c) {
    if (await cV(q(), c, void 0, "user", s), I) await pCe(q(), I, void 0, "user", s);
  }
  for (let e of A) if (e.status === "running") cLe(e.agentId);
  let {isCoordinatorMode: te} = import.meta.require("./chunk-wc7h1bgn.js");
  WW(te() ? "coordinator" : "normal");
  let P = rc();
  if (P) t0(P, s);
  if (u?.current) F_e(u.current, s);
  if (b) {
    b(e => MQ(o, "clear", {
      signal: e,
      storageV5: s,
      credentials: k
    }).catch(i => {
      if (Ve(i)) t(`SessionStart hooks after /clear aborted: ${j(i).message}`); else d(Je(j(i), "SessionStart hooks after /clear threw"));
      return [];
    }));
    return;
  }
  let U = await MQ(o, "clear", {
    storageV5: s,
    credentials: k
  });
  if (U.length > 0) m(() => U);
}

function T(o) {
  return "isBackgrounded" in o && o.isBackgrounded === !1;
}

var ie = new Set([ "local_bash", "monitor_mcp", "monitor_ws", "mcp_task" ]);

function Q5r(o) {
  return Object.values(o).some(m => !T(m) && Kqe.has(m.type) && !qs(m.status));
}

export { J5r, Q5r };
