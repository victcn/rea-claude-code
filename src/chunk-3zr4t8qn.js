// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { gHt, aTr, JSo, QSo, c3e } from "./chunk-584ft4bq.js";

import { c, pe } from "./chunk-hwdwjvh8.js";

import { l } from "./chunk-b0z4bv3v.js";

import { Vt } from "./chunk-vxr6sv7z.js";

import { yq } from "./chunk-3pqddg8f.js";

import { nb, J, kx } from "./chunk-nvtwm272.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { DO, Bd, txr, k, Ce, ce } from "./chunk-xywp7esx.js";

import { mD } from "./chunk-z52kmxx4.js";

import { zee, bt, xX, t } from "./chunk-kawq2919.js";

import { I } from "./chunk-5wbhf1bk.js";

import { wl, Ct, d } from "./chunk-6ah1819r.js";

import { ao, sd, or } from "./chunk-w0q7jqcp.js";

import { X } from "./chunk-1zg3hbfq.js";

import { qo } from "./chunk-yxennhe9.js";

import { p } from "./chunk-jkzenvsk.js";

import { wn, ZTo, n2n, je, Rt } from "./chunk-s2t7g8m9.js";

import { Xf, Ev, d_ } from "./chunk-znhtg8e4.js";

import { Yf } from "./chunk-e7rgnck3.js";

import { cve, Vg } from "./chunk-f1zpf9me.js";

import { YZ } from "./chunk-9nqgkt3n.js";

import { Ult } from "./chunk-wradc2hf.js";

import { gt, _p } from "./chunk-yebkpv3k.js";

import { Yo } from "./chunk-sn25q2cq.js";

import { wIt, TSr, gmo, zlt, wSe, ASr, wmo, lz } from "./chunk-rshryz75.js";

import { Hse, Ntn, hTr, Rjn, PRs, ORs, xjn, rwo, o9, Ojn, Mjn } from "./chunk-yk8mtyzg.js";

import { pC } from "./chunk-3zb1ef23.js";

import { ySs, Gfo, _Ss, ESs, kSs, n7t, I$n, N$n, s7t, $lt, jT } from "./chunk-5ad06083.js";

import { okt, fJr, dCn, _Jr, bJr } from "./chunk-j8ez936s.js";

import { l3, p0e } from "./chunk-ytzgaeb3.js";

import { Rmo, Mmo, Hmo, Dmo, Lmo, Nmo, $mo } from "./chunk-3xtsjx0y.js";

import { hCn } from "./chunk-b154cm67.js";

import { pCn, YVe } from "./chunk-y94p5sh8.js";

import { x6e, nTs } from "./chunk-m82zqjc8.js";

import { Spe, r9, nS, Ose, VN, pHt, pwe } from "./chunk-gzzx34vb.js";

import { Qct, tHt, Tse, WN, Zct, rjn, kkr, htn, Tkr } from "./chunk-hwdhdabr.js";

import { npe, qFe } from "./chunk-3apvz0s4.js";

import { l0e, $nt } from "./chunk-zmbx1k67.js";

import { FZo } from "./chunk-rrj0x6b5.js";

import { Fnt } from "./chunk-fjvzrncs.js";

import { ade } from "./chunk-8x5j4k2w.js";

import { Bfo } from "./chunk-f66gd31c.js";

import { P8 } from "./chunk-qbhknj4t.js";

import { wP } from "./chunk-yae7t0cr.js";

import { FS } from "./chunk-dq67x9kz.js";

import { Au } from "./chunk-10gv16xm.js";

import { pUe, Akr } from "./chunk-wzvs3p45.js";

import { Kpt } from "./chunk-3tedvrs9.js";

import { Aa } from "./chunk-sre9xcbd.js";

import { zs } from "./chunk-vjmbaret.js";

import { sn } from "./chunk-642shbw5.js";

import { o, v, M, u, _t, U } from "./chunk-cvcg6n1z.js";

import { Is } from "./chunk-p35rdtee.js";

import { ye } from "./chunk-ne9evs39.js";

import { N } from "./chunk-hmqkrrtz.js";

async function Yi({heldEpoch: n, send: h, maySendAgain: R}) {
  let T = n, F;
  for (let x = 0; ;x++) {
    let V = [], W = await h(T, K => {
      V.push(K);
    });
    if (V.length === 0) return {
      ending: x === 0 ? "not_refused" : "followed_up",
      answer: W,
      followUps: x,
      sessionEpoch: F
    };
    let w = V.at(-1);
    if (F = w ?? F, !R()) return {
      ending: "withheld",
      answer: null,
      followUps: x,
      sessionEpoch: F
    };
    if (w === void 0 || x === 2) return {
      ending: "unfenced_fallback",
      answer: await h(void 0, () => {}),
      followUps: x,
      sessionEpoch: F,
      fallbackReason: w === void 0 ? "no_session_epoch" : "follow_up_cap"
    };
    T = w;
  }
}

var Fa = 50;

async function Ji(n, h) {
  let R = h.now ?? Date.now, T = h.sleep ?? ((ne, _e) => J(ne, _e)), F = h.pollMs ?? Fa, x = Number.isFinite(h.budgetMs) ? h.budgetMs : 0, V = 0, W = 0, w = () => {
    try {
      return R() - V;
    } catch {
      return 0;
    }
  }, K = [], Z = "live", oe = "connect", Le = ne => {
    try {
      h.log?.(ne);
    } catch {}
  }, Te = () => {
    if (h.signal?.aborted) return "aborted";
    if (n.isSessionOver()) return "session_changed";
    if (n.hasFailedForGood()) return "bridge_failed";
    return R() >= W ? "budget_passed" : void 0;
  }, et = ne => {
    oe = ne, K.push(ne);
  }, ge = async ne => {
    for (;;) {
      let _e = Te();
      if (_e === "aborted" || _e === "session_changed" || _e === "bridge_failed") return _e;
      if (ne()) return;
      if (_e !== void 0) return _e;
      await T(Math.min(F, W - R()), h.signal);
    }
  }, te = async ne => {
    let _e = "pending", G, Be = ne.then(() => {
      _e = "settled";
    }, Fe => {
      _e = "threw", G = Fe;
    });
    await Promise.race([ Be, Promise.resolve() ]);
    for (;;) {
      let Fe = (() => _e)();
      if (Fe === "threw") throw G;
      if (Fe === "settled") return;
      let it = Te();
      if (it !== void 0) return it;
      await Promise.race([ Be, T(Math.min(F, W - R()), h.signal) ]);
    }
  }, tt = ne => {
    let _e = ne.ok ? "uploads handed over, queues empty" : `${ne.reason} on ${ne.waitingOn}`;
    return Le(`[handoff-wait] end: ${_e} after ${ne.elapsedMs} ms; session kind ${ne.sessionKind}; awaited ${K.join(", ") || "nothing"}`), 
    ne;
  }, fe = (ne, _e) => {
    if (ne === "budget_passed") try {
      h.onBudgetPassed?.(_e);
    } catch {}
    return tt({
      ok: !1,
      reason: ne,
      sessionKind: Z,
      waitingOn: _e,
      elapsedMs: w()
    });
  }, ot = () => T(Math.max(0, Math.min(F, W - R())), h.signal), $e = async () => {
    if (Z = n.sessionKind(), Z !== "deferred") return;
    let ne = Te();
    if (ne !== void 0) return ne;
    return et("release"), te(n.release());
  };
  try {
    V = R(), W = V + x, Z = n.sessionKind(), Le(`[handoff-wait] start: session kind ${Z}, budget ${x} ms`);
    let ne = n.transport(), _e = n.droppedBatches(ne), G = await $e();
    if (G !== void 0) return fe(G, "release");
    let Be = n.transcriptCopy;
    for (;;) {
      if (G = Te(), G !== void 0) return fe(G, "connect");
      let Fe = n.transport(), it = Fe === ne ? _e : 0, st = () => {
        let Ke = n.droppedBatches(Fe) - it;
        if (Ke > 0) Le(`[handoff-wait] batches dropped during the wait: ${Ke}`);
        return Ke > 0;
      };
      if (et("connect"), G = await ge(n.isConnected), G !== void 0) return fe(G, "connect");
      if (G = await $e(), G !== void 0) return fe(G, "release");
      if (Be !== void 0) {
        if (et("transcript_copy_install"), G = await ge(Be.isInstalledOnCurrentTransport), 
        G !== void 0) return fe(G, "transcript_copy_install");
        et("transcript_copy_catch_up");
        let Ke = Be.catchUp();
        if (Be.wakeCatchUp(), G = await te(Ke), G !== void 0) return fe(G, "transcript_copy_catch_up");
        if (Be.catchUp() !== Ke) {
          if (st()) return fe("rows_dropped", "transcript_copy_catch_up");
          await ot();
          continue;
        }
      }
      oe = "first_history_flush";
      let at = n.firstHistoryFlush();
      if (at !== void 0) {
        if (K.push("first_history_flush"), G = await te(at), G !== void 0) return fe(G, "first_history_flush");
      }
      if (oe = "held_writes", n.holdsWrites()) {
        if (K.push("held_writes"), G = await ge(() => !n.holdsWrites()), G !== void 0) return fe(G, "held_writes");
      }
      et("upload_lanes");
      let Mt = !1;
      if (G = await te(n.drainLanes(Math.max(0, W - R())).then(Ke => {
        Mt = Ke === !1;
      })), G !== void 0 || Mt) return fe(G ?? "budget_passed", "upload_lanes");
      if (st()) return fe("rows_dropped", "upload_lanes");
      if (n.transport() !== Fe || !n.isConnected() || n.holdsWrites()) {
        await ot();
        continue;
      }
      break;
    }
    if (h.signal?.aborted) return fe("aborted", "upload_lanes");
    if (n.isSessionOver()) return fe("session_changed", "upload_lanes");
    if (n.hasFailedForGood()) return fe("bridge_failed", "upload_lanes");
    return tt({
      ok: !0,
      reason: "handed_over",
      sessionKind: Z,
      elapsedMs: w()
    });
  } catch (ne) {
    Le(`[handoff-wait] ${oe} threw: ${l(ne)}`);
    try {
      h.onFault?.(oe);
    } catch {}
    return fe("fault", oe);
  }
}

async function DZo() {
  return;
}

function sCn(n) {}

function iCn(n, h) {}

var zt = "[account memory withheld from Remote Control; shown in the terminal session]", mo = "[tool result withheld from Remote Control; shown in the terminal session]", vn = "[message content withheld from Remote Control; shown in the terminal session]", Ha = "[command output withheld from Remote Control: it may repeat the conversation summary, which can include account memory; shown in the terminal session]", xa = "This session is being continued from a previous conversation that ran out of context. The summary of that conversation is not included here: it was withheld from Remote Control because it may include account memory, and can be read only in the terminal session where it was written. If you need details from the earlier conversation, ask the user.", Pr = 32768, La = new Set([ "assistant", "user", "stream_event", "attachment", "system", "control_request" ]), Xi = new Set([ "cowork_memory_context", "account_memory_recall" ]), $a = "anthropic/memory.", Qi = "account_memory_saved", Wa = "account_memory", go = [ "type", "subtype", "uuid", "parentUuid", "logicalParentUuid", "timestamp", "sessionId", "cwd", "version", "gitBranch", "isSidechain", "agentId", "userType", "entrypoint", "teamName", "agentName", "promptId", "requestId", "isMeta", "isVirtual", "isCompactSummary", "repeatsCompactSummary", "isVisibleInTranscriptOnly", "sourceToolAssistantUUID" ], Zi = [ "role", "id", "type", "model", "stop_reason", "usage" ], qa = {
  string: [ "type", "toolUseID", "processId", "hookName", "hookEvent", "toolName", "permissionMode", "host", "decision", "disposition", "traceparent" ],
  number: [ "exitCode", "durationMs", "timeoutMs" ],
  boolean: [ "timedOut", "unverified", "heldForServedCall", "accountMemoryBatch" ]
}, Ga = [ "content", "message", "stdout", "stderr", "lines" ], es = [ "wireToolInputs", "wire_tool_inputs", "wireIngestContext", "wire_ingest_context" ], bn = new Set([ "tool_use", "server_tool_use", "mcp_tool_use" ]), vo = new Set([ "tool_result", "mcp_tool_result" ]), Va = new Set([ "PostToolBatch", "Elicitation", "ElicitationResult" ]), Ka = new Set([ "PreToolUse", "PostToolUse", "PostToolUseFailure", "PostToolBatch", "PermissionRequest", "PermissionDenied", "Elicitation", "ElicitationResult" ]), za = "PostCompact", Ya = new Set([ "text", "thinking", "redacted_thinking" ]);

function Me(n) {
  return typeof n === "object" && n !== null;
}

class ht {
  max;
  ids=new Set;
  constructor(n) {
    this.max = n;
  }
  has(n) {
    return this.ids.has(n);
  }
  add(n) {
    if (this.ids.has(n)) return;
    if (this.ids.add(n), this.ids.size > this.max) {
      let h = this.ids.values().next().value;
      if (h !== void 0) this.ids.delete(h);
    }
  }
  delete(n) {
    return this.ids.delete(n);
  }
}

function bo(n) {
  for (let h of l0e) {
    let R = n[h];
    if (!Me(R)) continue;
    let T = Me(R._meta) ? R._meta : R;
    if (Object.keys(T).some(F => F.startsWith($a))) return !0;
  }
  return !1;
}

function Ja(n) {
  if (typeof n.name !== "string") return;
  if (n.type !== "mcp_tool_use") return n.name;
  return typeof n.server_name === "string" ? zs(n.server_name, n.name) : void 0;
}

function Eo(n, h) {
  if (n.subtype === "can_use_tool") return typeof n.tool_name !== "string" || P8(n.tool_name, h, "live");
  if (n.subtype === "request_user_dialog") return typeof n.dialog_kind !== "string" || n.dialog_kind.includes(Wa);
  return !1;
}

function yo(n) {
  return n.isCompactSummary === !0 || n.is_compact_summary === !0;
}

function ts(n) {
  return n.repeatsCompactSummary === !0 || n.type === "user" && Me(n.message) && s7t(n.message.content);
}

function Ro(n) {
  let h = n.content;
  return Array.isArray(h) ? h.filter(Me) : void 0;
}

function Xa(n) {
  return Me(n.message) ? Ro(n.message) : void 0;
}

function Qa(n, h) {
  return h.some(R => n[R] !== void 0);
}

function Or(n, h) {
  let R = {};
  for (let T of h) if (n[T] !== void 0) R[T] = n[T];
  return R;
}

function Ksr(n) {
  let h = n.placeAccountMemoryTool, R = new ht(Pr), T = new ht(Pr), F = new ht(Pr), x = new ht(Pr), V = new ht(Pr), W = !1, w = new Map, K = Symbol("drop");
  function Z(a, D) {
    let P = Ja(a), Y = P === void 0 || P8(P, h, "live"), q = !Y && P !== void 0 && P8(P, h, "history");
    if (typeof a.id === "string") {
      if (Y) R.add(a.id); else if (q) T.add(a.id);
    }
    return Y || D === "history" && q;
  }
  function oe(a, D) {
    return R.has(a) || D === "history" && T.has(a);
  }
  function Le(a, D) {
    if (!Me(a)) return;
    if (a.type === "progress") {
      if (Me(a.data)) Le(a.data.message, D);
      return;
    }
    et(a), Te(a);
    for (let P of Xa(a) ?? []) {
      if (!bn.has(P.type) || typeof P.id !== "string") continue;
      if (F.add(P.id), Z(P, D)) W = !0;
    }
  }
  function Te(a) {
    if (a.type === "attachment" && Me(a.attachment) && Xi.has(a.attachment.type) && a.attachment.content !== null || bo(a)) W = !0;
  }
  function et(a) {
    if (typeof a.uuid !== "string") return;
    if (yo(a)) x.add(a.uuid); else if (ts(a)) V.add(a.uuid);
  }
  function ge(a, D) {
    let P;
    try {
      P = D.type;
    } catch {
      P = void 0;
    }
    try {
      n.onDropped?.(a, typeof P === "string" && La.has(P) ? P : "other");
    } catch {}
  }
  function te(a, D) {
    return ge(a, D), K;
  }
  function tt() {
    try {
      return n.mode() === "drop" ? "drop" : "redact";
    } catch {
      return "redact";
    }
  }
  function fe(a) {
    return typeof a === "string" ? a : zt;
  }
  function ot(a, D) {
    return {
      type: a.type,
      id: fe(a.id),
      name: fe(a.name),
      ...a.server_name !== void 0 && {
        server_name: fe(a.server_name)
      },
      input: D ? {} : n7t(a.input, 0, zt, !0)
    };
  }
  function $e(a, D) {
    return {
      type: a.type,
      tool_use_id: fe(a.tool_use_id),
      content: D,
      ...a.is_error === !0 && {
        is_error: !0
      }
    };
  }
  function ne(a, D, P) {
    let Y = bo(a), q = Me(a.message) ? a.message : void 0, se = q === void 0 ? void 0 : Ro(q);
    if (q === void 0 || se === void 0) {
      if (Y) return W = !0, D === "transcript" ? Be(a, []) : te("memory_row", a);
      let ue = [ ...es, ...l0e ];
      if (!Qa(a, ue)) return a;
      let We = {
        ...a
      };
      for (let rt of ue) delete We[rt];
      return We;
    }
    let be = !1, Ne = !1, At = !1, Pt = !1, xr = new Set, An = se.map(ue => {
      if (bn.has(ue.type)) {
        if (typeof ue.id === "string") F.add(ue.id);
        if (!Z(ue, P)) {
          if (typeof ue.id === "string") xr.add(ue.id);
          return ue;
        }
        return W = !0, be = !0, ot(ue, !1);
      }
      if (vo.has(ue.type)) {
        let We = ue.tool_use_id, rt = zt;
        if (typeof We === "string" && oe(We, P)) ; else if (typeof We === "string" && F.has(We)) return At = !0, 
        ue; else if (typeof We === "string" && Y) ; else rt = mo;
        if (rt === zt) W = !0;
        return Ne = !0, $e(ue, rt);
      }
      return ue;
    });
    if (Y && !Ne) {
      if (!At) return W = !0, D === "transcript" ? Be(a, se) : te("memory_row", a);
      Pt = !0;
    }
    if (!be && !Ne && !Pt) return a;
    if (tt() === "drop") return D === "transcript" ? Be(a, se) : te("kill_switch", a);
    let mt = {
      ...a,
      message: {
        ...q,
        content: An
      }
    };
    for (let ue of $nt) delete mt[ue];
    if (Ne || Pt) for (let ue of l0e) delete mt[ue];
    if (be) for (let ue of es) {
      let We = mt[ue];
      if (!Me(We)) continue;
      let rt = Is(We, (Io, Pn) => xr.has(Pn));
      if (Object.keys(rt).length > 0) mt[ue] = rt; else delete mt[ue];
    }
    return mt;
  }
  function _e(a, D, P) {
    let Y = yo(a) || typeof a.uuid === "string" && x.has(a.uuid);
    if (et(a), !G()) return ne(a, D, P);
    let q = Me(a.message) ? a.message : void 0;
    if (tt() === "drop") return D === "transcript" ? Be(a, q === void 0 ? [] : Ro(q) ?? []) : te("kill_switch", a);
    let se = Y ? xa : `<${wl}>${Ha}</${wl}>`, be = {
      ...a,
      message: {
        ...q === void 0 ? {
          role: "user"
        } : Or(q, Zi),
        content: q !== void 0 && typeof q.content === "string" ? se : [ {
          type: "text",
          text: se
        } ]
      }
    };
    delete be.modelOnlyText;
    for (let Ne of [ ...l0e, ...$nt ]) if (Ne !== "summarizeMetadata") delete be[Ne];
    return be;
  }
  function G() {
    if (W) return !0;
    try {
      return n.accountMemoryInPlay?.() !== !1;
    } catch {
      return !0;
    }
  }
  function Be(a, D) {
    let P = Or(a, go);
    if (a.type === "system") return P;
    if (Me(a.attachment)) return P.attachment = {
      type: a.attachment.type,
      version: null,
      content: null
    }, P;
    let Y = D.map(q => bn.has(q.type) ? ot(q, !0) : vo.has(q.type) ? $e(q, typeof q.tool_use_id === "string" && oe(q.tool_use_id, "history") ? zt : mo) : {
      type: "text",
      text: vn
    });
    return P.message = {
      role: a.type === "assistant" ? "assistant" : "user",
      ...Or(Me(a.message) ? a.message : {}, Zi),
      content: Y.length > 0 ? Y : [ {
        type: "text",
        text: vn
      } ]
    }, P;
  }
  function Fe(a, D) {
    if (a.type === "async_hook_response") {
      if (typeof a.toolName === "string") return P8(a.toolName, h, D);
      if (typeof a.hookEvent !== "string") return !0;
      return a.hookEvent === za ? G() : Ka.has(a.hookEvent);
    }
    return Va.has(a.hookEvent) && a.accountMemoryBatch !== !1 || typeof a.toolUseID === "string" && oe(a.toolUseID, D);
  }
  function it(a, D) {
    return typeof a.toolName === "string" && P8(a.toolName, h, D) || typeof a.toolUseID === "string" && oe(a.toolUseID, D);
  }
  function st(a, D) {
    let P = Or(a, go), Y = {};
    for (let [q, se] of Object.entries(qa)) for (let be of se) if (typeof D[be] === q) Y[be] = D[be];
    for (let q of Ga) if (D[q] !== void 0) Y[q] = Array.isArray(D[q]) ? [] : "";
    if (D.type === "hook_system_message") Y.content = vn;
    if (D.blockingError !== void 0) Y.blockingError = {
      blockingError: "",
      command: ""
    };
    if (D.response !== void 0) Y.response = {};
    if (D.toolInput !== void 0) Y.toolInput = {};
    return P.attachment = Y, P;
  }
  function at(a) {
    let D = w.get(a);
    if (D === void 0) D = new Map, w.set(a, D);
    return D;
  }
  function Mt(a, D, P, Y, q, se) {
    let be = P.tool_use_id, Ne = zt;
    if (typeof be === "string" && oe(be, se)) ; else if (bo(a)) ; else if (typeof be === "string" && F.has(be)) {
      if (q !== void 0) at(Y).delete(q);
      return a;
    } else Ne = mo;
    if (q !== void 0) at(Y).set(q, !0);
    if (Ne === zt) W = !0;
    if (tt() === "drop") return te("kill_switch", a);
    let At = {
      ...a,
      event: {
        ...D,
        content_block: $e(P, Ne)
      }
    };
    for (let Pt of [ ...l0e, ...$nt ]) delete At[Pt];
    return At;
  }
  function Ke(a, D) {
    let P = a.event;
    if (!Me(P)) return a;
    let Y = typeof a.parent_tool_use_id === "string" ? a.parent_tool_use_id : "";
    if (P.type === "message_start" || P.type === "message_stop") return w.delete(Y), 
    a;
    let q = typeof P.index === "number" ? P.index : void 0;
    if (P.type === "content_block_start") {
      let se = Me(P.content_block) ? P.content_block : {};
      if (vo.has(se.type)) return Mt(a, P, se, Y, q, D);
      let be = bn.has(se.type), Ne = be && Z(se, D);
      if (be && typeof se.id === "string") F.add(se.id);
      if (Ne) W = !0;
      if (q !== void 0) if (be || Ya.has(se.type)) at(Y).set(q, Ne); else at(Y).delete(q);
      if (!Ne) return a;
      if (tt() === "drop") return te("kill_switch", a);
      return {
        ...a,
        event: {
          ...P,
          content_block: ot(se, !1)
        }
      };
    }
    if (P.type === "content_block_stop" && q !== void 0) return w.get(Y)?.delete(q), 
    a;
    if (P.type === "content_block_delta") {
      let se = q === void 0 ? void 0 : w.get(Y)?.get(q);
      if (se === !0) return te("memory_row", a);
      if (se === void 0) return te("untracked_delta", a);
    }
    return a;
  }
  function Nr(a, D, P) {
    if (!Me(a)) return;
    switch (a.type) {
     case "stream_event":
      return Ke(a, P);

     case "attachment":
      if (!Me(a.attachment)) return a;
      if (Xi.has(a.attachment.type)) {
        if (a.attachment.content === null) return a;
        return W = !0, D === "transcript" ? Be(a, []) : te("memory_row", a);
      }
      if (Fe(a.attachment, P)) {
        if (it(a.attachment, P)) W = !0;
        return D === "transcript" ? st(a, a.attachment) : te("memory_row", a);
      }
      return a;

     case "system":
      if (a.subtype !== Qi && a.persist !== !1 && ![ a.tool_use_id, a.toolUseID ].some(Y => typeof Y === "string" && oe(Y, P))) return a;
      if (a.subtype === Qi || a.persist !== !1) W = !0;
      return D === "transcript" ? Be(a, []) : te("memory_row", a);

     case "control_request":
      if (Me(a.request) && Eo(a.request, h)) {
        if (typeof a.request.tool_name === "string" || typeof a.request.dialog_kind === "string") W = !0;
        return te("memory_row", a);
      }
      return a;

     default:
      return yo(a) || ts(a) || typeof a.uuid === "string" && (x.has(a.uuid) || V.has(a.uuid)) ? _e(a, D, P) : ne(a, D, P);
    }
  }
  function Ur(a, D) {
    if (D === "transcript") try {
      let P = Or(a, go);
      return P.message = {
        role: P.type === "assistant" ? "assistant" : "user",
        content: [ {
          type: "text",
          text: vn
        } ]
      }, ge("unreadable", a), P;
    } catch {}
    return te("unreadable", a);
  }
  function Mn(a, D, P) {
    try {
      return Nr(a, D, P) ?? a;
    } catch {
      return Me(a) ? Ur(a, D) : K;
    }
  }
  function Fr(a, D = "events", P = "history") {
    return a.flatMap(Y => {
      let q = Mn(Y, D, P);
      return q === K ? [] : [ q ];
    });
  }
  function Hr(a, D = "history") {
    for (let P of a) try {
      Le(P, D);
    } catch {}
  }
  return {
    note: Hr,
    redact: Fr,
    withoutMemoryCallAttachments(a, D = "history") {
      return Hr(a, D), a.filter(P => {
        if (!Me(P)) return !0;
        try {
          if (P.type !== "attachment" || !Me(P.attachment) || !Fe(P.attachment, D)) return !0;
          if (it(P.attachment, D)) W = !0;
          return ge("memory_row", P), !1;
        } catch {
          return ge("unreadable", P), !1;
        }
      });
    },
    wrapInternalEventWriter(a, D = "history") {
      return (P, Y, q) => {
        let [se] = Fr([ Y ], "transcript", D);
        return se === void 0 ? Promise.resolve() : a(P, se, q);
      };
    }
  };
}

var Za = new Set([ "auto_default", "auto_settings", "explicit", "sdk" ]);

function So(n) {
  return typeof n === "string" && Za.has(n);
}

var ns = 200, ed = 50, td = 500, To = {
  scope: "off",
  backfillMessages: ns,
  eagerResult: !1
}, rd = p(() => u({
  scope: U([ "off", "auto_default", "auto", "auto_and_sdk", "all" ]).catch("off"),
  backfill_messages: v().int().transform(n => Math.min(td, Math.max(ed, n))).catch(ns),
  eager_result: M().catch(!1)
}));

function nd(n) {
  let h = rd().safeParse(n);
  if (!h.success) return To;
  return {
    scope: h.data.scope,
    backfillMessages: h.data.backfill_messages,
    eagerResult: h.data.eager_result
  };
}

function os() {
  return nd(k("tengu_noble_snowflake", null));
}

function Ir(n, h) {
  if (h === void 0) return !1;
  switch (n) {
   case "off":
    return !1;

   case "auto_default":
    return h === "auto_default";

   case "auto":
    return h === "auto_default" || h === "auto_settings";

   case "auto_and_sdk":
    return h === "auto_default" || h === "auto_settings" || h === "sdk";

   case "all":
    return !0;
  }
}

function wo(n) {
  return n.type === "assistant" && Array.isArray(n.message.content) && n.message.content.some(h => h.type === "tool_use" && (h.name === Yf || h.name === wP));
}

function yn(n) {
  return fJr(n) || n.type === "system" && "subtype" in n && (n.subtype === "post_turn_summary" || n.subtype === "task_started" || n.subtype === "task_updated" || n.subtype === "task_notification");
}

class Rn {
  _active=!1;
  _pending=[];
  _evictedCount=0;
  get active() {
    return this._active;
  }
  get pendingCount() {
    return this._pending.length;
  }
  get pending() {
    return this._pending;
  }
  get evictedCount() {
    return this._evictedCount;
  }
  start() {
    this._active = !0;
  }
  end() {
    return this._active = !1, this._evictedCount = 0, this._pending.splice(0);
  }
  enqueue(...n) {
    if (!this._active) return !1;
    return this._pending.push(...n), !0;
  }
  evictOldest(n, h) {
    let R = N(this._pending, n) - h;
    if (R <= 0) return;
    this._evictedCount += R, this._pending = this._pending.filter(T => !n(T) || R-- <= 0);
  }
  drop() {
    this._active = !1, this._evictedCount = 0;
    let n = this._pending.length;
    return this._pending.length = 0, n;
  }
  deactivate() {
    this._active = !1;
  }
}

var is = 3, ss = 36e5, as = 24 * is, od = 24 * ss, id = 6e5, ds = 3e4, Co = 3e5, us = 5e3, ad = 14, dd = "could not reach the Remote Control server for about 30 minutes", ls = "the connection to the Remote Control server kept dropping after each reconnect", cs = `the connection to the Remote Control server dropped more than ${as} times in 24 hours`, fs = {
  attempts: ad,
  exhaustedDetail: dd
};

function _s() {
  let n = [], h = Number.NEGATIVE_INFINITY;
  return {
    charge(R, T) {
      if (n = n.filter(x => R - x < od), T && n.length >= as) return "daily_exhausted";
      if (N(n, x => R - x < ss && (!T || x >= h)) >= is) return "hourly_exhausted";
      return n.push(R), "charged";
    },
    noteHealthyBeat(R) {
      let T = n.at(-1);
      if (T !== void 0 && R - T >= id) h = R;
    }
  };
}

var ud = p(() => _t({
  pid: v().int(),
  procStart: o().optional().catch(void 0),
  createdAt: v(),
  titleSha: o().optional(),
  usedAt: v().optional()
}));

function jr(n) {
  if (typeof n !== "object" || n === null || Array.isArray(n)) return [];
  return Object.entries(n).flatMap(([h, R]) => {
    let T = ud().safeParse(R);
    if (!T.success) return [];
    let {procStart: F, ...x} = T.data;
    return [ [ h, F === void 0 ? x : {
      ...x,
      procStart: F
    } ] ];
  });
}

var ld = 3e5, cd = 2592e6, ps = 20, fd = 15e3, _d = /^(session|cse)_[A-Za-z0-9_-]+$/;

async function ms() {
  if (Ct()) return !1;
  let {getFeatureValue_CACHED_MAY_BE_STALE: n} = await import("./chunk-qt993hka.js");
  return n("tengu_bridge_placeholder_sweep", !0);
}

function ko(n) {
  let h = ao();
  return h.placeholderWriteChain = h.placeholderWriteChain.then(n, n), h.placeholderWriteChain;
}

function gs(n, h, R) {
  return ko(async () => {
    if (!await ms()) return;
    let T = await d_(), F = {
      pid: process.pid,
      procStart: T,
      createdAt: Date.now(),
      ...h !== void 0 && {
        titleSha: sn(h)
      }
    };
    await Ce(x => {
      let V = jr(x.replBridgePlaceholders), W = V.filter(([Z]) => !Dr(Z, n)), w = h === void 0 ? V.find(([Z]) => Dr(Z, n))?.[1] : void 0;
      W.push([ n, {
        ...F,
        ...w?.titleSha !== void 0 && {
          titleSha: w.titleSha
        },
        ...w?.usedAt !== void 0 && {
          usedAt: w.usedAt
        }
      } ]), W.sort((Z, oe) => oe[1].createdAt - Z[1].createdAt);
      let K = W.slice(ps);
      if (K.length > 0) t(`[bridge:placeholder] evicting ${K.length} record(s) past cap: ${K.map(([Z]) => Z).join(", ")}`);
      return {
        ...x,
        replBridgePlaceholders: Object.fromEntries(W.slice(0, ps))
      };
    }, R);
  });
}

async function LZo() {
  try {
    let n = jr(ce().replBridgePlaceholders).map(([, T]) => T), h = 1, R = new Set;
    for (let T of n) {
      if (T.pid === process.pid || R.has(T.pid)) continue;
      if (T.procStart !== void 0 ? Aa(T.pid) && await Ev(T.pid, T.procStart) : Aa(T.pid)) R.add(T.pid), 
      h++;
    }
    return h;
  } catch {
    return 0;
  }
}

function Br(n, h) {
  return ko(async () => {
    await Ce(R => {
      let T = Object.keys(R.replBridgePlaceholders ?? {}).filter(x => Dr(x, n));
      if (T.length === 0) return R;
      let F = {
        ...R.replBridgePlaceholders
      };
      for (let x of T) delete F[x];
      return {
        ...R,
        replBridgePlaceholders: F
      };
    }, h);
  });
}

function vs(n, h) {
  return ko(async () => {
    await Ce(R => {
      let T = jr(R.replBridgePlaceholders).filter(([x, V]) => Dr(x, n) && V.usedAt === void 0);
      if (T.length === 0) return R;
      let F = {
        ...R.replBridgePlaceholders
      };
      for (let [x, V] of T) F[x] = {
        ...V,
        usedAt: Date.now()
      };
      return {
        ...R,
        replBridgePlaceholders: F
      };
    }, h);
  }).catch(R => {
    t(`[bridge:placeholder] use stamp failed: ${l(R)}`, {
      level: "error"
    });
  });
}

function Dr(n, h) {
  return or(n) === or(h);
}

async function pd(n) {
  if (Xf(n.pid)) return !0;
  return Aa(n.pid) && !await Ev(n.pid, n.procStart);
}

function Sn(n) {
  if (n === "invalid" || n === "skipped_superseded" || n === "skipped_owner_changed") return !0;
  return typeof n === "number" && n < 500 && n !== 401 && n !== 408 && n !== 429;
}

function hs(n) {
  if (!n) return;
  let h = ade(n.replace(/\.\d+/, ""));
  if (Number.isNaN(h)) return;
  let R = /\.(\d+)/.exec(n)?.[1] ?? "";
  return `${h}.${R.replace(/0+$/, "")}`;
}

async function hd(n, h, R) {
  if (!await pd(h)) return "keep";
  if (h.usedAt !== void 0) return En("used_marker");
  let {session: T, notFound: F} = await $lt(n, {
    baseUrl: R.baseUrl,
    getAccessToken: R.getAccessToken
  });
  if (F) return "remove";
  if (!T) return "keep";
  if (h.titleSha !== void 0) {
    if (typeof T.title !== "string") return t(`[bridge:placeholder] session GET carried no title for ${n}; keeping`), 
    "keep";
    if (sn(T.title) !== h.titleSha) return En("retitled");
  }
  let x = T.connection_status;
  if (x !== void 0 && x !== "disconnected") return x === "connected" ? "keep_connected" : "keep_unreadable";
  let V = hs(T.created_at), W = hs(T.updated_at);
  if (V === void 0 || W === void 0) return "keep_unreadable";
  if (W !== V) return En("updated_at"), x === void 0 ? "remove_active_no_connection_state" : "remove_active_disconnected";
  let w = jr(ce().replBridgePlaceholders).find(([Z]) => Dr(Z, n))?.[1];
  if (w === void 0) return "remove";
  if (w.pid !== h.pid || w.procStart !== h.procStart || w.createdAt !== h.createdAt) return "keep";
  if (w.usedAt !== void 0) return En("used_marker");
  let K = await R.archive(n);
  if (!Sn(K)) return m("bridge_placeholder_sweep", typeof K === "number" ? `http_${K}` : K), 
  "keep";
  return g("bridge_placeholder_sweep"), t(`[bridge:placeholder] archived orphaned placeholder ${n} (status=${K})`), 
  "remove";
}

function bs(n) {
  let h = ao();
  if (h.placeholderSweepStarted) return Promise.resolve();
  return h.placeholderSweepStarted = !0, (async () => {
    if (await J(n.startDelayMs ?? fd), !await ms()) return;
    let R = ce().replBridgePlaceholders;
    if (!R) return;
    let T = n.skipSessionId ? or(n.skipSessionId) : void 0, F = jr(R), x = new Set(F.map(([w]) => w)), V = Object.keys(R).filter(w => !x.has(w)), W = {
      keep_connected: 0,
      keep_unreadable: 0,
      remove_active_disconnected: 0,
      remove_active_no_connection_state: 0
    };
    for (let [w, K] of F) {
      let Z = Date.now() - K.createdAt;
      if (Math.abs(Z) < ld || or(w) === T) continue;
      if (!_d.test(w)) {
        V.push(w);
        continue;
      }
      let oe = await hd(w, K, n);
      if (oe !== "remove" && oe !== "keep") W[oe]++, t(`[bridge:placeholder] ${w}: ${oe}`);
      if (!(oe === "keep" || oe === "keep_connected" || oe === "keep_unreadable") || Z > cd) V.push(w);
    }
    if (Object.values(W).some(w => w > 0)) f("bridge_placeholder_sweep", "not_archived_on_server_state", W);
    if (V.length > 0) await Ce(w => {
      if (!w.replBridgePlaceholders) return w;
      let K = {
        ...w.replBridgePlaceholders
      };
      for (let Z of V) delete K[Z];
      return {
        ...w,
        replBridgePlaceholders: K
      };
    }, n.storageV5);
  })().catch(R => {
    t(`[bridge:placeholder] sweep failed: ${l(R)}`, {
      level: "error"
    });
  });
}

function En(n) {
  return i("tengu_bridge_placeholder_used_session", {
    signal: c(n)
  }), "remove";
}

var ys = {
  init_retry_max_attempts: 3,
  init_retry_base_delay_ms: 500,
  init_retry_jitter_fraction: .25,
  init_retry_max_delay_ms: 4e3,
  http_timeout_ms: 1e4,
  uuid_dedup_buffer_size: 2e3,
  heartbeat_interval_ms: 2e4,
  heartbeat_jitter_fraction: .1,
  token_refresh_buffer_ms: 3e5,
  teardown_archive_timeout_ms: 1500,
  connect_timeout_ms: 15e3,
  oauth_retry_max_attempts: 3,
  oauth_retry_base_delay_ms: 2e3,
  min_version: "0.0.0"
}, md = p(() => u({
  init_retry_max_attempts: v().int().min(1).max(10).default(3),
  init_retry_base_delay_ms: v().int().min(100).default(500),
  init_retry_jitter_fraction: v().min(0).max(1).default(.25),
  init_retry_max_delay_ms: v().int().min(500).default(4e3),
  http_timeout_ms: v().int().min(2e3).default(1e4),
  uuid_dedup_buffer_size: v().int().min(100).max(5e4).default(2e3),
  heartbeat_interval_ms: v().int().min(5e3).max(3e4).default(2e4),
  heartbeat_jitter_fraction: v().min(0).max(.5).default(.1),
  token_refresh_buffer_ms: v().int().min(3e4).max(18e5).default(3e5),
  teardown_archive_timeout_ms: v().int().min(500).max(2e3).default(1500),
  connect_timeout_ms: v().int().min(5e3).max(6e4).default(15e3),
  oauth_retry_max_attempts: v().int().min(0).max(6).default(3),
  oauth_retry_base_delay_ms: v().int().min(100).max(1e4).default(2e3),
  min_version: o().refine(n => {
    try {
      return DO(n, "0.0.0"), !0;
    } catch {
      return !1;
    }
  }).default("0.0.0")
}));

async function Mo() {
  let n = await txr("tengu_bridge_repl_v2_config", ys), h = md().safeParse(n);
  return h.success ? h.data : ys;
}

async function aCn() {
  let n = await Mo();
  if (n.min_version && DO({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION, n.min_version)) return `Your version of Claude Code (${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION}) is too old for Remote Control.\nVersion ${n.min_version} or higher is required. Run \`claude update\` to update.`;
  return null;
}

function Ao(n, h, R) {
  switch (n) {
   case void 0:
    return "no close code received";

   case 4090:
    switch (h) {
     case "superseded_by_worker":
      return "another connection took over this session (usually another device or Claude Code session) \u2014 this device is standing down (code 4090)";

     case "session_not_active":
      return "this session was ended or archived from another device or app (code 4090)";

     case "session_not_found":
      return "the server no longer reports this session \u2014 it may have been deleted from another device or app (code 4090)";

     case "epoch_stale":
      return "the session worker registration went stale \u2014 no active worker holds it (code 4090)";

     default:
      return "this connection is no longer the active worker for the session (code 4090)";
    }

   case 4091:
    return "transport init failed (code 4091)";

   case 4092:
    return "connection dropped \u2014 no close reason from server (code 4092)";

   case 4093:
    return "presence heartbeats to the server kept failing (code 4093)";

   case 4094:
    return "worker credential expired or rejected (code 4094)";

   case 401:
    return "auth token expired (code 401)";

   case 403:
    {
      if (!pUe(R?.rejectSource)) return "server rejected connection (code 403)";
      let T = Akr(R.rejectSource);
      if (R.streak === void 0) return T;
      let F = Math.max(1, Math.round(R.streak.streakMs / 6e4));
      return `${T}, and kept refusing for ${F} ${I(F, "minute")}`;
    }

   case 404:
    return "session not found on server (code 404)";

   case 1002:
    return "server rejected the connection handshake (code 1002)";

   case 4001:
    return "session expired or not found on server (code 4001)";

   case 4003:
    return "server rejected credentials (code 4003)";

   default:
    return `code ${n}`;
  }
}

var gd = 5e3;

var Rs = 300, vd = 200, Ds = 300, bd = 600, yd = zee - Ds - bd, Es = 2e3, Rd = 3e3, Po = 100, Ed = 5e3, Ss = 200, Ts = 2e4, Sd = 8, Td = 1048576, wd = 3e4, Cd = "tengu_encapsulated_dusk";

function uJr() {
  return k(Cd, !1) ? "drop" : "redact";
}

async function NZo(n) {
  let {baseUrl: h, orgUUID: R, title: T, reattachOrFail: F, reattachOrigin: x, reviveInitiated: V, neverArchive: W, onAuthProven: w, noHistoryBackfill: K, onReattachGoneBounce: Z, neutralFallbackTitle: oe, onReattachPointerDead: Le, ownerPin: Te, onOwnerChanged: et, getAccessToken: ge, onAuth401: te, classifyFailedOAuthRefresh: tt, onReadFreshOAuthToken: fe, onClassifyMissingOAuthToken: ot, onProactiveRefresh: $e, toSDKMessages: ne, initialHistoryCap: _e, initialMessages: G, conversationForPairing: Be, placeAccountMemoryTool: Fe, accountMemoryInPlay: it, onInboundMessage: st, onQueuedNotification: at, onUserMessage: Mt, onSessionEstablished: Ke, onBeforePushTriggeringState: Nr, onPermissionResponse: Ur, onInterrupt: Mn, onStopTask: Fr, onBackgroundTasks: Hr, onCancelAsyncMessage: a, getInitializeState: D, getCommands: P, isTurnLive: Y, onDialogKindsDeclared: q, onClientInitialize: se, onSetModel: be, onSetMaxThinkingTokens: Ne, onSetPermissionMode: At, onApplyFlagSettings: Pt, onRenameSession: xr, onSetColor: An, onFileSuggestions: mt, onReadFile: ue, onGetWorkspaceDiff: We, onSideQuestion: rt, onGetContextUsage: Io, answerSharedControlRequest: Pn, onMcpAuthenticate: js, onMcpOauthCallbackUrl: Bs, onMcpReconnect: Ns, onForkConversation: Us, onStateChange: Ue, onBridgeInjectedMcp: jd, onProjectsBindingHint: Fs, outboundOnly: Ot, tags: Hs, sessionGroupingId: Do, requestedSessionGroupingId: cr, gitRepoUrl: dt = null, branch: jo = "", defaultBranch: Bo = null, nameSourceForCreate: xs, onTransportPersistenceReady: fr, onTransportPersistenceTeardown: Ls, onTransportRebuilt: $s, remoteControlOrigin: _r, getBackfillMessages: Ws, reattachSessionId: ut, reattachSequenceNum: qs, credentialsStore: Lr, workSecretCredentials: ze, storageV5: qe} = n, Ye = Ksr({
    mode: uJr,
    placeAccountMemoryTool: Fe,
    accountMemoryInPlay: it,
    onDropped: (e, r) => {
      if (t(`[remote-bridge] Kept one '${r}' row's content out of the upload for account memory (reason: ${e})`), 
      e === "unreadable") m("bridge_account_memory_redaction", `unredactable_${r}_row`);
    }
  });
  Ye.note(Be?.() ?? G ?? []);
  let On = (e, r = "history") => Ye.redact(ne(Ye.withoutMemoryCallAttachments(e, r)), "events", r), It = ze !== void 0 ? !0 : W, In = T, Re = !!ut, z = await Mo(), No = !1, $r = e => {
    if (!ze) Te?.noteAcceptedToken(e);
  }, Uo = "work-secret-lane", Fo = () => ze ? Uo : ge(), Dn = ze ? () => {
    let e = No ? "refresh" : "initial";
    return ze.register(e, {
      stillWanted: () => !O && Oe === void 0,
      reuseHeldAboveS: Math.ceil(z.token_refresh_buffer_ms / 1e3) + 60
    }).then(r => {
      if (r !== null && !Tse(r)) No = !0;
      return r;
    });
  } : Ad, Wr = ge();
  if (!Wr) return t("[remote-bridge] No OAuth token"), m("bridge_connect", "bridge_connect_no_token"), 
  null;
  let pr = () => ge() ?? Wr, Ho = () => Te?.ownerToken() ?? ge() ?? Wr, jn = new Set, {getOriginalCwd: Bn} = await import("./chunk-84b4c0ck.js"), {getMainLoopModel: Gs} = await import("./chunk-2zz3mtmc.js"), qr = cr ?? Do, Gr = Do, xo = !1;
  async function Lo() {
    let e = dt ? void 0 : await (xs?.()), r = e ? {
      repositoryUrl: e
    } : void 0;
    xo = r !== void 0;
    let s = {}, b = async () => {
      if (dt) {
        let {buildGitSessionContext: E} = await import("./chunk-qc75vav9.js"), {reportGitSessionContext: j} = await import("./chunk-mdpx9qwa.js"), {report: H} = await E(dt, jo, Bo ?? void 0);
        j(H);
      }
    }, y = E => Oo((j, H) => tHt(h, j, In, z.http_timeout_ms, Hs, dt ? {
      gitRepoUrl: dt,
      branch: jo,
      defaultBranch: Bo ?? void 0
    } : r, Bn(), Gs(), E, s, H).then(A => {
      if (typeof A === "string") Te?.noteAcceptedToken(j);
      return A;
    }), "createCodeSession", z, {
      getAccessToken: pr,
      onAuth401: te,
      recoveryAttemptedTokens: jn
    }), _ = await y(qr);
    if (Qct(_) && _.reason === "grouping_rejected" && cr === void 0 && qr !== void 0) {
      let E = await y(void 0);
      if (typeof E === "string") {
        if (Gr = void 0, await b(), r) sCn("connect");
        return X("info", "bridge_repl_v2_grouping_dropped", {
          status: _.status
        }), t("[bridge:core] persisted Project no longer available; recreated session outside it"), 
        t(`[remote-bridge] Created session ${E}`), X("info", "bridge_repl_v2_session_created"), 
        E;
      }
      if (r && !WN(E)) iCn("connect", E);
      return _;
    }
    if (typeof _ === "string") {
      if (Gr = qr, await b(), r) sCn("connect");
      t(`[remote-bridge] Created session ${_}`), X("info", "bridge_repl_v2_session_created");
    }
    return _;
  }
  function Vs(e) {
    if (e?.reason === "grouping_rejected" && qr !== void 0) {
      let r = e.detail ? `: ${e.detail}` : "";
      return cr !== void 0 ? `Couldn't create a session in the requested Project (server ${e.status}${r}). The Project may not exist or may not be available to you.` : `Couldn't recreate the session in its previous Project (server ${e.status}${r}) \u2014 the Project may have been deleted or is no longer available.`;
    }
    if (e?.reason === "request_rejected") return `Session creation failed (server ${e.status}) \u2014 see debug log`;
    if (e?.reason === "malformed_response") return gHt;
    return "Session creation failed \u2014 see debug log";
  }
  function $o(e) {
    if (e !== null && e.terminal === !1) {
      Ue?.("failed", Nn, "auth"), pC("v2_session_create_oauth_rejected", void 0, !0), 
      m("bridge_connect", "bridge_connect_create_oauth_rejected");
      return;
    }
    if (xo) iCn("connect", Qct(e) ? e : null);
    Ue?.("failed", Vs(Qct(e) ? e : null)), pC("v2_session_create_failed", void 0, !0), 
    m("bridge_connect", "bridge_connect_session_create_failed");
  }
  let Ks = "JWT refresh failed: no OAuth token \u2014 run /login", Nn = "Claude.ai login was rejected \u2014 run /login, then /remote-control", Ys = "Claude.ai login expired \u2014 run /login, then /remote-control", Js = "Claude.ai login expired \u2014 run /login to restore Remote Control", Xs = "Signed out of Claude \u2014 run /login, then /remote-control", Un = !1, Vr = !1;
  if (ut && jT(ut)) {
    if (F) return t(`[remote-bridge] Reattach-or-fail: ${ut} is teleported; failing terminally instead of minting fresh`), 
    X("info", "bridge_repl_v2_revive_reattach_teleported"), Le?.(), Ue?.("failed", c3e, "terminal"), 
    pC("v2_revive_reattach_teleported", void 0, !0), m("bridge_connect", "bridge_connect_reattach_teleported"), 
    null;
    t(`[remote-bridge] Reattach suppressed for teleported session ${ut} \u2014 minting fresh`), 
    Un = !0, Re = !1;
  }
  let C;
  if (ze) {
    if (!ut || Un) return t("[remote-bridge] Work-secret attach has no session to reattach; failing", {
      level: "error"
    }), Ue?.("failed", "Remote Control could not attach: the host supplied a session credential but no session to attach to", "terminal"), 
    pC("v2_work_secret_no_session", void 0, !0), m("bridge_connect", "bridge_connect_work_secret_no_session"), 
    null;
    C = ut, t(`[remote-bridge] Attaching to session ${C} with the host's work secret`), 
    X("info", "bridge_repl_v2_work_secret_attach");
  } else if (ut && !Un) {
    C = ut, t(`[remote-bridge] Reattaching to session ${C}`), X("info", "bridge_repl_v2_session_reattached");
    let e = await Oo((r, s) => Id(C, h, r, R, z.http_timeout_ms, s, Lr), "unarchiveSession", z, {
      getAccessToken: pr,
      onAuth401: te,
      recoveryAttemptedTokens: jn
    });
    if (e?.outcome === "elevated_auth") {
      t(`[remote-bridge] Reattach ${C}: unarchive elevated-auth (${e.reason}) \u2014 surfacing the failure, pointer preserved`), 
      X("info", "bridge_repl_v2_reattach_elevated_auth");
      let r = e.reason === "untrusted_device" && !r9(), {outcome: s, ...b} = e, y = r ? {
        terminal: !0,
        reason: "request_rejected",
        status: 403
      } : {
        terminal: !0,
        ...b
      };
      return Ue?.("failed", cAe(y), kt(y)), pC("v2_reattach_elevated_auth", void 0, !0), 
      m("bridge_connect", "bridge_connect_reattach_elevated_auth"), null;
    }
    if (e?.outcome === "gone" && F) return t(`[remote-bridge] Reattach-or-fail: ${C} gone (unarchive ${e.status}); failing terminally instead of minting fresh`), 
    X("info", "bridge_repl_v2_revive_reattach_gone"), Z(), Le?.(), Ue?.("failed", c3e, "terminal"), 
    pC("v2_revive_reattach_gone", void 0, !0, {
      reattach_origin: pe(x),
      revive_initiated: V === !0
    }), m("bridge_connect", "bridge_connect_reattach_gone"), null;
    if (e?.outcome === "gone") {
      t(`[remote-bridge] Reattach ${C} gone (unarchive ${e.status}); minting fresh session`), 
      Vr = !0, Z(), In = oe ?? `${qFe()}-${YZ()}`, X("info", "bridge_repl_v2_reattach_fallback", {
        via: "unarchive",
        status: e.status
      }), i("tengu_bridge_repl_env_expired_fresh_session", {
        v2: !0,
        via: c("unarchive"),
        status: typeof e.status === "number" ? e.status : c(e.status),
        reattach_origin: pe(x),
        revive_initiated: V === !0
      });
      let r = await Lo();
      if (typeof r !== "string") return $o(r), null;
      C = r, Re = !1;
    }
  } else {
    if (F) return t("[remote-bridge] Reattach-or-fail: no reattach pointer for this init; failing terminally instead of minting fresh"), 
    X("info", "bridge_repl_v2_revive_fresh_refused"), Z(), Ue?.("failed", c3e, "terminal"), 
    pC("v2_revive_fresh_refused", void 0, !0), m("bridge_connect", "bridge_connect_revive_fresh_refused"), 
    null;
    let e = await Lo();
    if (typeof e !== "string") return $o(e), null;
    C = e;
  }
  if (Re && cr !== void 0 && cr !== Gr) t("[bridge:core] --project ignored: reattached to existing session (Project is fixed at create)");
  if (It && Re) Br(C, qe); else if (!Ot) gs(C, Re ? void 0 : In, qe);
  bs({
    baseUrl: h,
    getAccessToken: pr,
    skipSessionId: C,
    archive: e => Yt(e, h, pr(), R, z.http_timeout_ms, void 0, qe),
    storageV5: qe
  });
  let Qs = Co + 6e4, lt;
  function Fn() {
    lt = void 0;
  }
  function Hn(e) {
    if (!Tse(e) || !kn(e)) {
      if (e !== null && !Tse(e) && !WN(e)) Fn();
      return e;
    }
    if (!TSr()) return e;
    let r = Date.now();
    if (lt === void 0 || r - lt.lastAtMs > Qs) lt = {
      startedAtMs: r,
      lastAtMs: r,
      refusals: 0
    };
    lt.lastAtMs = r, lt.refusals++;
    let s = r - lt.startedAtMs;
    if (lt.refusals > 1 && s >= _Jr) return t(`[remote-bridge] /bridge refused by ${e.source} ${lt.refusals}\xd7 over ${Math.round(s / 1e3)}s with nothing reaching Anthropic since \u2014 treating as a verdict`), 
    e;
    return t(`[remote-bridge] /bridge 403 not written by Anthropic's origin (${e.source}) \u2014 treating as unreachable`), 
    X("warn", "bridge_repl_v2_bridge_403_nonorigin", {
      source: e.source
    }), null;
  }
  function Kr(e, r) {
    if (O || Oe !== void 0 || ie !== r) return Promise.resolve(null);
    let s = () => Ln(C, e).then(b => {
      if (ie !== r) return b;
      let y = Hn(b);
      if (y !== null && !Tse(y) && !WN(y)) $r(e), oo();
      return y;
    });
    if (!xt()) return s();
    return ir("owner_changed_recovery").then(b => b || O || Oe !== void 0 || ie !== r ? null : s());
  }
  let Wo = Wr, de = await Oo((e, r) => (Wo = e, Dn(C, h, e, z.http_timeout_ms, r, Lr)), "fetchRemoteCredentials", z, {
    getAccessToken: pr,
    onAuth401: te,
    recoveryAttemptedTokens: jn
  });
  if (Re && de === null) t(`[remote-bridge] Reattach ${C}: /bridge failed after unarchive; surfacing retry prompt`), 
  X("info", "v2_remote_creds_reattach_transient");
  if (!de || Tse(de) || WN(de)) {
    let e = de === null ? Re ? "Couldn't reconnect to your Remote Control session. Retry, or start a fresh session without --resume." : "Remote credentials fetch failed \u2014 see debug log" : WN(de) ? Ys : cAe(de), r = de === null ? V ? "auth" : "terminal" : WN(de) ? "auth" : kt(de), s = de === null ? Re ? "v2_remote_creds_reattach_transient" : "v2_remote_creds_failed" : WN(de) ? "v2_remote_creds_oauth_rejected" : kn(de) ? `v2_remote_creds_request_rejected_${de.source}` : `v2_remote_creds_${de.reason}`;
    if (t(`[remote-bridge] Creds failed; onStateChange ${Ue ? "set" : "UNSET"}, msg="${e}"`), 
    Ue?.("failed", e, r), pC(s, void 0, !0), m("bridge_connect", "bridge_connect_creds_failed"), 
    !Re) Ps(C, () => Yt(C, h, Ho(), R, z.http_timeout_ms, void 0, qe));
    return null;
  }
  t(`[remote-bridge] Fetched bridge credentials (expires_in=${de.expires_in}s)`), 
  $r(Wo), Ke?.(C);
  let xn = de.worker_epoch;
  function Go(e) {
    xn = Math.max(xn, e);
  }
  function Ln(e, r) {
    if (ze || !gmo()) return Dn(e, h, r, z.http_timeout_ms, void 0, Lr);
    let s = xn, b = ie;
    return Yi({
      heldEpoch: s,
      send: (y, _) => Dn(e, h, r, z.http_timeout_ms, void 0, Lr, y === void 0 ? void 0 : {
        expectedEpoch: y,
        onRefused: _
      }),
      maySendAgain: () => {
        if (jT(C)) return !1;
        return !O && !ee && Oe === void 0 && ie === b;
      }
    }).then(y => {
      let _ = y.answer;
      try {
        let E = _ !== null && !Tse(_) && !WN(_) ? _.worker_epoch : void 0;
        if (E !== void 0 && !O && ie === b) Go(E);
        if (y.ending !== "not_refused" && Ht()) {
          let j = E !== void 0;
          i("tengu_bridge_repl_attach_conflict", {
            outcome: c(y.ending === "followed_up" ? j ? "resolved" : "unresolved" : y.ending),
            accepted: j,
            stated_epoch: s,
            session_epoch: y.sessionEpoch,
            follow_ups: y.followUps,
            fallback_reason: pe(y.ending === "unfenced_fallback" ? y.fallbackReason : void 0)
          });
        }
      } catch (E) {
        d(E), X("error", "bridge_repl_v2_attach_fence_failed");
      }
      return _;
    });
  }
  let Vo = p0e(de.api_base_url, C);
  t(`[remote-bridge] v2 session URL: ${Vo}`);
  function Zs() {
    return k("tengu_bridge_selfheal_heartbeats", !0);
  }
  function $n() {
    return k("tengu_bridge_recovery_patience", !0);
  }
  function Ko() {
    return k("tengu_dazzling_garden", !0);
  }
  function zo() {
    return k("tengu_ccr_stream_event_flush_ms", okt);
  }
  function Jo() {
    return k("tengu_ccr_stream_first_flush_ms", 0);
  }
  function Xo() {
    return k("tengu_ccr_stream_flush_on_first_delta", !1);
  }
  function Qo() {
    return k("tengu_ccr_no_subscriber_flush_ms", 0);
  }
  function Dt() {
    return Ot ? 0 : k("tengu_ccr_no_subscriber_hold_ms", 0);
  }
  function Jt() {
    return Dt() > 0 || S.mayHoldUploads?.() === !0;
  }
  function ea() {
    return k("tengu_ccr_sse_keepalive_max_interval_s", 0);
  }
  function Zo() {
    return Ot ? !1 : k("tengu_ccr_drop_unwatched_stream_events", !1);
  }
  function Xt() {
    return Ot ? To : os();
  }
  function ta() {
    return k("tengu_ccr_idle_heartbeat", !1);
  }
  function ra() {
    return k("tengu_ccr_reconnect_beat", !1);
  }
  function na() {
    return k("tengu_ccr_reactivation_beat", !1);
  }
  function oa() {
    return k("tengu_ccr_skip_redundant_heartbeat", !1);
  }
  let hr = dCn(), ia = Ult("ccr_worker", qe);
  function ei() {
    return {
      heartbeatIntervalMs: z.heartbeat_interval_ms,
      heartbeatJitterFraction: z.heartbeat_jitter_fraction,
      onRequestAuthOk: ga,
      causeTypedCloseCodes: !0,
      selfHealHeartbeats: Zs(),
      advertiseHeartbeatProbeSupport: ta(),
      beatOnStaleReconnect: ra(),
      idleTracker: hr,
      beatOnReactivation: na(),
      skipRedundantHeartbeats: oa(),
      uploadTrim: () => k("tengu_ccr_upload_trim", {}),
      uploadHoldMarker: () => k("tengu_ccr_upload_hold_marker", !1),
      eventHoldEnabled: () => k("tengu_ccr_event_hold_enabled", !0),
      processExiting: wn,
      streamEventFlushIntervalMs: zo(),
      streamEventFirstFlushMs: Jo(),
      streamEventFlushOnFirstDelta: Xo(),
      sseConnectTimeoutMs: () => l3().sse_connect_timeout_ms,
      gzipRequestBodyFetch: ia,
      noSubscriberStreamEventFlushIntervalMs: Qo(),
      noSubscriberUploadHoldMs: Dt(),
      dropUnwatchedStreamEvents: Zo(),
      sseKeepaliveMaxIntervalSeconds: ea,
      outboundOnly: Ot,
      nonOrigin403Retry: TSr(),
      inboundReadReceipts: zlt,
      onNonOriginRejectionRecovered: va,
      retainUndeliveredOnClose: !0,
      internalEventUploader: {
        maxConsecutiveFailures: Sd,
        maxBatchBytes: Td,
        requestTimeoutMs: wd
      }
    };
  }
  let S;
  try {
    S = await bJr({
      ...ei(),
      sessionUrl: Vo,
      ingressToken: de.worker_jwt,
      sessionId: C,
      epoch: de.worker_epoch,
      initialSequenceNum: Re ? qs : void 0,
      getAuthToken: () => de.worker_jwt
    });
  } catch (e) {
    if (t(`[remote-bridge] v2 transport setup failed: ${l(e)}`, {
      level: "error"
    }), Ue?.("failed", `Transport setup failed: ${l(e)}`), pC("v2_transport_setup_failed", void 0, !0), 
    m("bridge_connect", "bridge_connect_transport_failed"), !Re) Ps(C, () => Yt(C, h, Ho(), R, z.http_timeout_ms, void 0, qe));
    return null;
  }
  t(`[remote-bridge] v2 transport created (epoch=${de.worker_epoch})`), Ue?.("ready");
  let {worker_jwt: Wn, worker_epoch: ti, api_base_url: ri} = de, Nd = null, Ud = new Set, sa = new Set, aa = !1, Fd = !1, zr = 0;
  function Hd() {
    zr++, aa = !1, sa = new Set;
  }
  let da = null;
  function xd(e, r = !1) {}
  function Ld() {
    da = null;
  }
  function ua() {
    return !1;
  }
  function $d(e, r, s = !1) {
    return {
      added: [],
      removed: []
    };
  }
  function la(e, r = !1) {}
  let ca = e => {
    if (Object.keys(e).length === 0) return Fs?.(), {
      ok: !0,
      added: [],
      removed: [],
      errors: {},
      unknownServerCount: 0
    };
    return {
      ok: !1,
      error: "Server-injected MCP servers are disabled for this Remote Control session"
    };
  }, jt = 0, Bt = !1;
  function fa() {
    if (O) return;
    let e = Date.now();
    if (e - jt < gd) {
      Bt = !0;
      return;
    }
    jt = e, Bt = !1, St.refreshNow(C);
  }
  function ni() {
    if (O || !Bt) return;
    Bt = !1, jt = Date.now(), St.refreshNow(C);
  }
  function Yr() {
    try {
      _a("withdrawn");
    } catch (e) {
      d(e), m("bridge_webagent_mcp_inject", "relinquish_threw");
    }
  }
  function _a(e) {}
  let Qt = new o9(z.uuid_dedup_buffer_size), Jr = new Set;
  if (G) for (let e of G) Jr.add(e.uuid), Qt.add(e.uuid);
  let pa = new o9(z.uuid_dedup_buffer_size), oi = new Map, qn = new o9(z.uuid_dedup_buffer_size), Ae = new Rn, he = new Rn, Gn = 0, Nt = !1, vt = !1, Zt = new Map, ha = 64, mr = Re, Vn, gr, Pe = !Re && !K && !Vr && Ir(Xt().scope, _r) ? "deferred" : "live", Xr = _r, Qr = new o9(z.uuid_dedup_buffer_size), yt, vr = {}, O = !1, Zr, De = !1, ii = 0, ie = 0;
  function si() {
    return ii++, ie = ii, De = !0, er = Date.now(), br = !1, ie;
  }
  function ai(e) {
    if (ie !== e) return !1;
    return ie = 0, De = !1, er = 0, di(), !0;
  }
  let en = !1;
  function di() {
    if (!en || O || ee) {
      en = !1;
      return;
    }
    if (en = !1, ct !== void 0 || !S.isConnectedStatus()) return;
    if (Ae.active || he.active) Wt();
    fo();
  }
  function ui() {
    ie = 0, De = !1, er = 0, di();
  }
  let er = 0, br = !1, li = z.init_retry_max_attempts * z.http_timeout_ms + (z.init_retry_max_attempts - 1) * z.init_retry_max_delay_ms, ma = z.oauth_retry_base_delay_ms * (2 ** z.oauth_retry_max_attempts - 1) + z.oauth_retry_max_attempts * li, ci = 2 * (15e3 + li + ma), tr = 0, fi = 3, tn = 0, _i = _s();
  function ga() {
    tn = 0, _i.noteHealthyBeat(Date.now()), Fn(), w?.();
  }
  let rn = !1, ct;
  function rr() {
    clearTimeout(ct), ct = void 0;
  }
  let Ut = !1;
  function nn(e) {
    Ut = !1, Ue?.("reconnecting", e);
  }
  function yr() {
    Ut = !1, Ue?.("connected");
  }
  function me(e, r = "terminal") {
    Ut = !0, rr(), Xe = void 0, on(), co?.end(), Ue?.("failed", e, r);
  }
  function pi() {
    let e = Jt();
    return Promise.all([ S.flush({
      retryNow: e
    }), e && S.flushInternalEvents?.({
      retryNow: e
    }) ]).then(() => {});
  }
  function Rr(e = Rs) {
    let r = J(e), s = Promise.race([ pi().then(() => !0), r.then(() => !1) ]), b = Promise.race([ S.flushDeliveryAcks?.({
      retryNow: !0
    }), r ]);
    return Promise.all([ s, b ]).then(([y]) => y);
  }
  async function hi(e, r = Date.now()) {
    let s = S.getUploadBacklog?.(), b = await Rr(yd), y = {
      hold_preflush_ms: Date.now() - r,
      hold_preflush_landed: b,
      hold_preflush_inflight_age_ms: s?.oldestInFlightMs,
      hold_preflush_lane_in_backoff: s?.backingOff
    };
    if (!b) f("ccr_no_subscriber_hold", e);
    return y;
  }
  function mi() {
    let e = S.getUploadBacklog?.();
    return {
      unsent_client_events_at_close: e?.unsentClientEvents,
      unsent_internal_events_at_close: e?.unsentInternalEvents
    };
  }
  function on() {
    let e = Ae.end(), r = he.end().map(s => s.frame);
    Nt = !1, gi(e.length + r.length, r, S.discardUndeliveredEvents?.() ?? []);
  }
  function gi(e, r, s) {
    if (e === 0 && s.length === 0) return;
    X("warn", "bridge_repl_v2_client_events_lost", {
      queued: e,
      undelivered: s.length
    }), f("bridge_repl", "client_events_lost_at_dead_end", {
      queued: e,
      undelivered: s.length
    });
    let b = [ ...s.map(E => E.payload.subtype), ...r.map(E => E.type === "system" && "subtype" in E ? E.subtype : void 0) ], y = b.includes("task_notification"), _ = b.includes("background_tasks_changed");
    if (y || _) f("ccr_task_status_publish", "status_events_lost_at_dead_end", {
      has_terminal_bookend: y,
      has_level: _
    });
  }
  let ve, Oe, Ft = !1, nr, Et, Xe, Ee = !1, ee = !1, Er;
  function Ht() {
    return !0;
  }
  function ft(e, r, s = !0) {
    if (s) nr = void 0, Et = void 0;
    if (!Ft || !Ht()) return !1;
    if (r === void 0) f("bridge_presence", e); else f("bridge_presence", e, r);
    return !0;
  }
  function we(e, r) {
    if (nr = void 0, Et = void 0, Ee = !0, !Ht()) return !1;
    if (!Ft) return m("bridge_connect", "bridge_connect_died_before_presence"), !1;
    if (r === void 0) m("bridge_presence", e); else m("bridge_presence", e, r);
    return !0;
  }
  let an = !1;
  function va(e) {
    if (O || ee || Ee) return;
    if (t(`[remote-bridge] SSE stream live again after ${e.attempts} non-origin 403(s) over ${Math.round(e.streakMs / 1e3)}s (source=${e.source})`), 
    ft(Md[e.source], {
      attempts: e.attempts,
      streak_s: Math.round(e.streakMs / 1e3),
      first_in_episode: an ? 0 : 1
    }, !1)) an = !0;
  }
  function Kn(e) {
    if (!pUe(e?.rejectSource)) {
      we(ws(e));
      return;
    }
    if (we(ws(e), {
      ...e.streak !== void 0 && {
        attempts: e.streak.attempts,
        streak_s: Math.round(e.streak.streakMs / 1e3)
      },
      first_in_episode: an ? 0 : 1
    })) an = !0;
  }
  function vi(e) {
    if (jT(C)) return;
    let r = ve === void 0 ? void 0 : Cs(ve.code, ve.cause);
    if (Oe !== void 0 || ve === void 0 || r === void 0 || br && ks(r)) return;
    if (Oe = r, t(`[remote-bridge] ${e} latched a stashed supersession close (${ve.code}/${ve.cause ?? "uncaused"}) \u2014 archive suppressed`), 
    !Ee) {
      if (ve.code === 403) Kn(ve.detail); else if (ve.code === 404) we("transport_closed_404"); else ft("transport_closed_4090"), 
      Ee = !0;
      Xe = void 0;
    }
  }
  function zn(e) {
    if (!Ht()) return;
    switch (e.leg) {
     case "ok":
      g("bridge_token_refresh");
      return;

     case "sad":
      f("bridge_token_refresh", e.code);
      return;

     case "bad":
      m("bridge_token_refresh", e.code);
      return;
    }
  }
  function bi(e) {
    if (!ASr()) return;
    let r = ZTo();
    if (r === void 0 || r.generation <= e) return Ri();
    return yi(r.reason);
  }
  function yi(e) {
    switch (e) {
     case "signed_out":
      return "host_signed_out";

     case "identity_changed":
      return "host_account_changed";

     case "transient":
     case "refresh_failed":
      return;
    }
  }
  function Ri() {
    if (Et === void 0) return;
    if (Et.generation === n2n()) return Et.code;
    let e = ZTo();
    return e === void 0 ? void 0 : yi(e.reason);
  }
  function Ei(e) {
    return e === "host_signed_out" ? JSo : QSo;
  }
  function Si(e) {
    return e === "host_signed_out" ? "auth" : "terminal";
  }
  function Yn() {
    return Te !== void 0 && !O && !ee && wSe();
  }
  function xt() {
    return Yn() && Te !== void 0 && Te.identityLooksChanged();
  }
  async function Ti(e, r) {
    if (ee) return "changed";
    if (!Yn() || Te === void 0) return "unchanged";
    let s = await Te.confirmChanged(r);
    if (s === "changed") return await ba(e), "changed";
    return ee ? "changed" : s;
  }
  async function ir(e) {
    return await Ti(e) === "changed";
  }
  async function Sr(e, r) {
    if (xt() && await ir(e)) return !0;
    return O || ie !== r;
  }
  async function ba(e) {
    if (O || ee || Te === void 0) return;
    if (ee = !0, Er?.(), Er = void 0, St.cancelAll(), ui(), et?.(), rn = !1, vi("owner_changed"), 
    ve = void 0, clearTimeout(ar), rr(), un?.(), un = void 0, Mi(), Ai(), Gfo(to), jT(C)) {
      t(`[remote-bridge] Signed-in account changed under teleported session ${C} (${e}) \u2014 latched only`), 
      on(), hn(), Yr(), S.close();
      return;
    }
    let r = Ee || Oe !== void 0;
    if (t(`[remote-bridge] Signed-in account changed under ${C} (${e}${r ? ", episode already dead" : ""}) \u2014 stopping`), 
    X("info", "bridge_repl_v2_owner_changed"), !r) ft(e), Ee = !0, me(aTr, "terminal"), 
    S.write(rwo(C, "account_changed")), await Rr(Jt() ? z.teardown_archive_timeout_ms : Rs).catch(() => {}); else if (!Ut) me(aTr, "terminal"); else on();
    if (hn(), Yr(), !O) S.close();
    if (Oe !== void 0) return;
    let s;
    if (It) s = "skipped_host_owned", t(`[remote-bridge] Owner-changed settle left host-owned session ${C} unarchived`); else {
      let b = await Yt(C, h, Te.ownerToken(), R, z.teardown_archive_timeout_ms, void 0, qe);
      s = Ms(b, Oe), t(`[remote-bridge] Owner-changed settle archived ${C} with the owner's credential (archive=${b})`);
    }
    if (Ht()) i("tengu_bridge_owner_changed", {
      site: c(e),
      archive_status: c(s),
      episode_already_dead: r
    });
  }
  function wi() {
    if (Oe !== void 0) return Oe;
    if (ee) return "owner_changed";
    return;
  }
  function Jn() {
    if (Te !== void 0 && wSe() && Te.identityLooksChanged()) return {
      token: Te.ownerToken(),
      source: "pinned_owner"
    };
    return {
      token: ge(),
      source: "current"
    };
  }
  let dn = Re, Ie = new Map, Wd = void 0, Lt = new Set, Xn = new ht(256), Ci = new ht(z.uuid_dedup_buffer_size);
  function Qn(e, r) {
    if (Lt.delete(e), Ie.delete(e) && r) Mjn(e);
  }
  function Zn() {
    let e, r = !1;
    for (let [s, b] of Ie) {
      if (Lt.has(s)) continue;
      r = !0, e = b.details ?? e;
    }
    if (r) He("requires_action", e); else He("running");
  }
  let eo, He = (e, r) => {
    if (Nr && !ee && (e === "requires_action" || e === "idle")) Nr();
    if (S.reportState(e, r), e === "requires_action" && r) {
      dn = !0;
      let s = [ ...Ie.values() ].flatMap(b => b.details ? [ b.details ] : []).reverse();
      S.reportMetadata({
        pending_action: r,
        pending_actions: Bfo(r, s.filter(b => b !== r))
      });
    } else if (dn) dn = !1, S.reportMetadata({
      pending_action: null,
      pending_actions: null
    });
    if (e === "running" && eo !== "running") {
      if (S.reportMetadata({
        post_turn_summary: null,
        recap: null
      }), Hmo(), Pe === "deferred") delete vr.post_turn_summary, delete vr.recap;
    }
    eo = e;
  };
  function ya() {
    return Lt.clear(), [ ...Ie.values() ].map(e => e.request);
  }
  let un, ki, ln;
  if (dt) (async () => {
    let {isNestedGitLabProject: e, parseGitRemote: r, parseGitHubRepository: s} = await import("./chunk-156b7t87.js"), {addWatchedRepo: b, removeWatchedRepo: y, getCachedBranchForRepo: _, onRepoBranchChange: E, getRemoteUrlForDir: j} = await import("./chunk-m0sdta96.js"), H = await import("./chunk-s65cb56h.js"), A = r(dt);
    if (A && e(A)) return;
    let L = A ? `${A.owner}/${A.name}` : s(dt);
    if (!L) return;
    let ae = A ? `${A.host}/${A.owner}/${A.name}` : `github.com/${L}`, B = Bn();
    if (await b(B), O || ee) {
      y(B);
      return;
    }
    let Q, Se = Re, le = Re, Je = 0, Ze = !1, pt = !1, Ar = async () => {
      if (Ze) {
        pt = !0;
        return;
      }
      Ze = !0;
      try {
        do {
          pt = !1;
          let xe = Je;
          if (O || ee) return;
          let nt = Bn();
          if (nt !== B) {
            if (y(B), B = nt, await b(nt), O || ee) {
              y(nt);
              return;
            }
          }
          let ke = await _(nt);
          if (xe !== Je) {
            pt = !0;
            continue;
          }
          if (O || Qe("branch_metadata")) return;
          if (ke === void 0) {
            if (Q !== null) if (Q = null, Se) Se = !1, S.reportMetadata({
              current_branches: {
                [L]: null
              },
              worktree_state: {
                [L]: null
              }
            }); else S.reportMetadata({
              current_branches: {
                [L]: null
              }
            });
            continue;
          }
          if (k("tengu_ccr_handoff_metadata", !1)) {
            let [Ua, mn] = await Promise.all([ H.collectWorktreeState(nt, ke), H.withCollectTimeout(j(nt)).catch(() => null) ]);
            if (xe !== Je) {
              pt = !0;
              continue;
            }
            if (O || Qe("branch_metadata")) return;
            let gn = mn ? r(mn) : null, Vi = mn ? s(mn) : null, Ki = (gn ? `${gn.host}/${gn.owner}/${gn.name}` : Vi ? `github.com/${Vi}` : null) === ae, ho = Ki ? ke : null, Ve = Ki ? Ua : null, zi = Ve ? JSON.stringify([ ho, Ve.head_sha, Ve.unpushed_count, Ve.is_dirty, Ve.mid_operation, Ve.upstream_exists, Ve.has_submodules, Ve.submodules_unverified, Ve.has_lfs ]) : JSON.stringify([ ho ]);
            if (zi === Q) continue;
            if (Q = zi, t(`[remote-bridge] worktree_state \u2192 ${L}: ${JSON.stringify(Ve)}`), 
            Se = Ve !== null, Ve !== null) le = !0;
            S.reportMetadata({
              current_branches: {
                [L]: ho
              },
              worktree_state: {
                [L]: Ve
              }
            });
            continue;
          }
          if (Se) {
            Se = !1, Q = ke, S.reportMetadata({
              current_branches: {
                [L]: ke
              },
              worktree_state: {
                [L]: null
              }
            });
            continue;
          }
          if (ke === Q) continue;
          Q = ke, S.reportMetadata({
            current_branches: {
              [L]: ke
            }
          });
        } while (pt);
      } catch (xe) {
        t(`[remote-bridge] current_branches emit failed: ${l(xe)}`);
      } finally {
        Ze = !1;
      }
    };
    ki = () => {
      if (Q = void 0, Se = le, Je++, Ze) pt = !0;
    }, ln = () => void Ar();
    let Kt = E(ln);
    un = () => {
      Kt(), y(B);
    }, Ar();
  })().catch(e => t(`[remote-bridge] current_branches setup failed: ${l(e)}`));
  let Mi = yq(() => hr.noteActivity()), Ai = Bd(() => {
    S.setStreamEventFlushIntervalMs?.(zo()), S.setStreamEventFirstFlushMs?.(Jo()), S.setStreamEventFlushOnFirstDelta?.(Xo()), 
    S.setNoSubscriberStreamEventFlushIntervalMs?.(Qo()), S.setNoSubscriberUploadHoldMs?.(Dt()), 
    S.setDropUnwatchedStreamEvents?.(Zo()), Ia();
  }), to = {};
  ySs({
    owner: to,
    sessionId: C,
    report: (e, r) => S.reportDelivery(e, r)
  });
  let sr = new Map, Pi = !Mt, Oi = !1, cn = "initial", ro = 0, ar;
  function Ii(e) {
    if (O) return;
    if (i("tengu_bridge_repl_connect_timeout", {
      v2: !0,
      elapsed_ms: z.connect_timeout_ms,
      cause: c(e)
    }), m("bridge_connect", "bridge_connect_timeout"), Ee) ; else if (Object.values(Ge).some(r => r.cause === e)) Xe = "recovery_connect_timeout"; else if (e === "proactive_refresh") Xe = "refresh_connect_timeout";
  }
  async function Ra(e) {
    if (!te) return "rejected";
    try {
      if (await te(e)) return "recovered";
    } catch (r) {
      t(`[remote-bridge] Proactive forced OAuth refresh threw: ${l(r)}`, {
        level: "error"
      });
    }
    if (!Ko() || !tt) return "rejected";
    return tt();
  }
  let Ea = 3, no, fn = 0;
  function oo() {
    no = void 0, fn = 0;
  }
  function Di(e) {
    return e !== void 0 && e === no && Ko();
  }
  let St = Kpt({
    refreshBufferMs: z.token_refresh_buffer_ms,
    onExhausted: e => {
      if (!O && !Ee) zn({
        leg: "bad",
        code: "chain_exhausted_no_oauth"
      });
      if (De || O) return;
      if (Ut) {
        t(`[remote-bridge] Token refresh chain exhausted for ${e} \u2014 terminal state already showing, not repainting`);
        return;
      }
      t(`[remote-bridge] Token refresh chain exhausted for ${e} \u2014 surfacing auth failure`, {
        level: "error"
      }), Ue?.("failed", "OAuth token unavailable \u2014 run /login to restore Remote Control", "auth");
    },
    getAccessToken: async () => {
      if (ee) return;
      if (xt()) {
        let s = Ee;
        if (await ir("owner_changed_refresh")) {
          if (ee && !s) zn({
            leg: "sad",
            code: "owner_changed"
          });
          return;
        }
      }
      if (ze) return Uo;
      let e = ge(), r = Di(e);
      try {
        if (r) await (fe?.()); else await ($e?.());
      } catch (s) {
        t(`[remote-bridge] scheduler token refresh failed: ${l(s)}`, {
          level: "error"
        });
      }
      return ge() ?? e;
    },
    onRefresh: (e, r) => {
      (async () => {
        if (Oe !== void 0 || ee) {
          t(`[remote-bridge] Proactive refresh skipped: session ${ee ? "stopped for an owner change" : "superseded"}`);
          return;
        }
        if (De || O) {
          if (t("[remote-bridge] Recovery already in flight, skipping proactive refresh"), 
          De && jt !== 0) Bt = !0;
          return;
        }
        if (jT(e)) {
          t(`[remote-bridge] Proactive refresh suppressed for teleported session ${e}`);
          return;
        }
        let s = si(), b = Ee, y = !1, _, E, j, H, A = !1;
        function L(B, Q, Se = "refresh_credentials_rejected", le) {
          if (O) return;
          if (Xe !== void 0 && ve === void 0) we(Xe), Xe = void 0; else if (!b) nr = Se, Et = le === void 0 ? void 0 : {
            code: le,
            generation: n2n()
          };
          _ = B, E = "refresh_credentials_rejected", j = Q;
        }
        async function ae() {
          if (!await Sr("owner_changed_refresh", s)) return !1;
          if (ee) H = {
            leg: "sad",
            code: "owner_changed"
          };
          return !0;
        }
        try {
          if (await ae()) return;
          let B = Di(r);
          if (!B) oo();
          let Q = Date.now(), Se = zr, le = await lr(() => {
            if (B) return Promise.resolve({
              terminal: !1,
              reason: "oauth_rejected"
            });
            if (O || Oe !== void 0 || ie !== s) return Promise.resolve(null);
            return Ln(e, r).then(Ze => O || ie !== s ? Ze : Hn(Ze));
          }, "fetchRemoteCredentials (proactive)", z);
          if (O || ie !== s) return;
          if (WN(le)) {
            if (t(B ? "[remote-bridge] Proactive cycle: bearer already rejected by /bridge \u2014 retrying the forced OAuth refresh without re-registering" : "[remote-bridge] Proactive /bridge re-mint rejected (oauth_rejected) \u2014 attempting forced OAuth refresh"), 
            !B) X("error", "bridge_repl_v2_proactive_oauth_rejected");
            if (await ae()) return;
            let Ze = n2n(), pt = await Ra(r), Ar = ge() ?? r;
            if (await ae()) return;
            if (pt === "unreachable") {
              if (t("[remote-bridge] Proactive forced OAuth refresh got no verdict (token endpoint unreachable); keeping transport, a later cycle retries the refresh"), 
              !B) H = {
                leg: "sad",
                code: "refresh_deferred_transient"
              };
              no = r;
              let ke = fn < Ea;
              if (jT(e)) ke = !1;
              if (ke) fn++, St.scheduleFromExpiresIn(e, 0);
              X("info", "bridge_repl_v2_proactive_refresh_unreachable", {
                early_retry: fn,
                rearmed: ke
              });
              return;
            }
            let Kt = pt === "recovered";
            if (Kt) oo();
            let xe = Kt ? await lr(() => {
              if (O || Oe !== void 0 || ie !== s) return Promise.resolve(null);
              return Ln(e, Ar).then(ke => O || ie !== s ? ke : Hn(ke));
            }, "fetchRemoteCredentials (proactive post-refresh)", z) : null;
            if (O || ie !== s) return;
            if (Kt && xe === null) {
              if (t("[remote-bridge] Proactive post-refresh re-mint failed (transient); fallback refresh will retry"), 
              Oe === void 0) H = {
                leg: "sad",
                code: "post_refresh_remint_null"
              };
              return;
            }
            if (Tse(xe)) {
              H = {
                leg: "bad",
                code: `post_refresh_credentials_${kt(xe)}`
              }, L(cAe(xe), kt(xe), Tn("refresh", xe));
              return;
            }
            if (xe === null || WN(xe)) {
              let ke = Kt ? void 0 : bi(Ze);
              if (ke !== void 0) {
                H = {
                  leg: "sad",
                  code: ke
                }, X("info", "bridge_repl_v2_proactive_host_declined"), L(Ei(ke), Si(ke), "refresh_credentials_rejected", ke);
                return;
              }
              H = {
                leg: "bad",
                code: Kt ? "oauth_rejected_after_refresh" : te ? "oauth_rejected_refresh_failed" : "oauth_rejected_no_refresh_path"
              }, L(Js, "auth");
              return;
            }
            $r(Ar);
            let nt = await io(xe, "proactive_refresh", 0, Q, Se);
            if (nt === "suppressed_teleported") A = !0;
            if (nt === "rebuilt") y = !0, H = {
              leg: "sad",
              code: "oauth_rejected_recovered"
            }, t("[remote-bridge] Transport rebuilt (proactive refresh after forced OAuth refresh)");
            return;
          }
          if (!le) {
            if (t("[remote-bridge] Proactive /bridge re-mint failed (transient); fallback refresh will retry"), 
            X("warn", "bridge_repl_v2_proactive_remint_null"), Oe === void 0) H = {
              leg: "sad",
              code: "remint_null"
            };
            return;
          }
          if (Tse(le)) {
            H = {
              leg: "bad",
              code: `credentials_${kt(le)}`
            }, L(cAe(le), kt(le), Tn("refresh", le));
            return;
          }
          $r(r);
          let Je = await io(le, "proactive_refresh", 0, Q, Se);
          if (Je === "suppressed_teleported") A = !0;
          if (Je === "rebuilt") y = !0, H = {
            leg: "ok"
          }, t("[remote-bridge] Transport rebuilt (proactive refresh)");
        } catch (B) {
          if (t(`[remote-bridge] Proactive refresh rebuild failed: ${l(B)}`, {
            level: "error"
          }), X("error", "bridge_repl_v2_proactive_refresh_failed"), !O && !ee) _ = `Refresh failed: ${l(B)}`, 
          E = "refresh_rebuild_failed", j = "terminal", H = {
            leg: "bad",
            code: "rebuild_threw"
          };
        } finally {
          let B = A;
          if (jT(e)) B = !0;
          if (H !== void 0 && !b && !O && !(B && H.leg === "bad")) zn(H);
          if (!ai(s)) return;
          ni();
          let Q = ve;
          if (ve = void 0, B) {
            if (Q !== void 0 && !O) me("Session teleported to cloud");
          } else if (Q !== void 0 && !y && !O && !Ee) {
            let Se = _n(Q.code, Q.cause, Q.detail, !0);
            if (_ !== void 0 && !Se && !O && !De) me(_, j);
          } else if (Q !== void 0 && y && !O) {
            if (Ni(Q.code) && !b) ft(Ge[Q.code].recoveredCode);
          } else if (_ !== void 0 && !O) {
            if (me(_, j), E !== void 0 && E !== "refresh_credentials_rejected" && !b) we(E);
          }
        }
      })();
    },
    label: "remote"
  });
  if (St.scheduleFromExpiresIn(C, de.expires_in), Er = Te?.subscribe(() => {
    ir("owner_changed");
  }), xt()) ir("owner_changed");
  let $t;
  function ji() {
    S.setOnConnect(b => {
      if (ee) return;
      if (clearTimeout(ar), tr = 0, Xe = void 0, Ee = !1, nr = void 0, Et = void 0, Ut = !1, 
      Fn(), Oe = void 0, Ie.size > 0) {
        let y = [ ...Ie.values() ].findLast(_ => _.details !== void 0);
        He("requires_action", y?.details), Lt.clear();
      } else if (eo === "running" && Tt(() => !0)) He("running");
      if (t("[remote-bridge] v2 transport connected"), X("info", "bridge_repl_v2_transport_connected"), 
      kSs(), Ma(b), Pe === "deferred") {
        if (qt === void 0 && !xi) pn(Xr, () => {
          xi = !0;
        });
      } else {
        if (dr) pn(null, () => {
          dr = !1;
        });
        fo();
      }
      if (i("tengu_bridge_repl_ws_connected", {
        v2: !0,
        cause: c(cn),
        ...ro > 0 && {
          remint_attempts: ro
        }
      }), !Ft && Ht()) Ft = !0, g("bridge_presence");
      if (Pe === "deferred") {
        if (!mr && Ie.size === 0) {
          let y = G?.filter(_ => Hse(_)).findLast(_ => !hTr(_));
          if (Tt(() => y !== void 0 && Ntn(y) && !Cn(y))) He("running");
        }
        mr = !0;
      }
      if (!mr && G && G.length > 0 && !Vr) {
        mr = !0;
        let y = S, _ = ka(G), E = Promise.withResolvers();
        _.catch(j => t(`[remote-bridge] flushHistory failed: ${j}`)).finally(() => {
          if (E.resolve(), S !== y || O || ee || De) return;
          Wt(), yr();
        }), Vn = Promise.all([ _, E.promise ]), Vn.catch(() => {});
      } else if (wr) yr(); else if ((Ae.active || he.active) && !De) rr(), Wt(), yr(); else if (!Ae.active) yr();
      Pa(), gr = S;
    }), S.setOnData(b => {
      if (ee) return;
      if ($t !== void 0) {
        $t.push(b);
        return;
      }
      if (!xt()) {
        s(b);
        return;
      }
      $t = [ b ], r();
    });
    let e = S;
    S.setOnClose((b, y, _) => {
      if (gr === e) gr = void 0;
      return _n(b, y, _);
    });
    function r() {
      ir("owner_changed").then(b => {
        let y = $t;
        if (y === void 0) return;
        if (b || O) {
          $t = void 0;
          return;
        }
        let _ = y.length;
        while (y.length > 0) {
          if (ee || O) {
            $t = void 0;
            return;
          }
          if (_ === 0 && xt()) {
            r();
            return;
          }
          _ = Math.max(0, _ - 1);
          let E = y.shift();
          if (E !== void 0) s(E);
        }
        $t = void 0;
      });
    }
    function s(b) {
      PRs(b, Qt, pa, y => {
        if (hCn(y, "bridge")) hr.noteActivity(), wt("client_prompt");
        let _ = st !== void 0 && y.type === "user" && zlt() ? Vt(y.uuid) : null;
        if (_ === null) return st?.(y);
        return _Ss(_, () => st?.(y));
      }, Ur ? y => {
        if (Ur(y)) {
          let _ = y.response.subtype === "success" && !!y.response.response;
          if (_) hr.noteActivity(), wt("client_input");
          if (Qn(y.response.request_id, _), !vt) Zn();
        }
      } : void 0, y => {
        if (pCn(y)) hr.noteActivity(), wt("client_input");
        ORs(y, {
          transport: S,
          sessionId: C,
          onInterrupt: Mn,
          onStopTask: Fr,
          onBackgroundTasks: Hr,
          onCancelAsyncMessage: a,
          reportsInboundReadReceipts: () => st !== void 0 && zlt(),
          getInitializeState: D,
          claudeCodeVersion: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.299",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-13T21:37:33Z",
            GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
            HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
          }.VERSION,
          getCommands: P,
          getPendingPrompts: ya,
          onDialogKindsDeclared: q,
          onClientInitialize: Oa,
          onSetModel: be,
          onSetMaxThinkingTokens: Ne,
          onSetPermissionMode: At,
          onApplyFlagSettings: Pt,
          onRenameSession: xr,
          onSetColor: An,
          onFileSuggestions: mt,
          onReadFile: ue,
          onGetWorkspaceDiff: We,
          onSideQuestion: rt,
          onGetContextUsage: Io,
          answerSharedControlRequest: Pn,
          onMcpAuthenticate: js,
          onMcpOauthCallbackUrl: Bs,
          onMcpReconnect: Ns,
          onMcpSetServers: ca,
          onForkConversation: Us,
          hasPendingPrompts: () => Ie.size > 0,
          outboundOnly: Ot,
          writeFrame: _ => {
            if (Qe(_.type)) return;
            Tr(_, _.type);
          },
          cancellableRequests: oi
        });
      }, y => oi.get(y)?.abort(), at);
    }
  }
  function _n(e, r, s, b = !1) {
    let y = !1;
    if (clearTimeout(ar), O || ee) return gi(0, [], S.discardUndeliveredEvents?.() ?? []), 
    !1;
    if (!b) t(`[remote-bridge] v2 transport closed (code=${e}${s ? ` source=${s.rejectSource}` : ""})`), 
    i("tengu_bridge_repl_ws_closed", {
      code: e,
      v2: !0,
      close_cause: pe(r),
      recovery_in_flight: De,
      ...s !== void 0 && {
        reject_source: c(s.rejectSource)
      }
    });
    if (De) {
      let A = er ? Date.now() - er : 0;
      if (A <= ci) return ve = {
        code: e ?? 4092,
        cause: r,
        detail: s
      }, !1;
      t(`[remote-bridge] authRecoveryInFlight held ${Math.round(A / 1e3)}s (> ceiling ${Math.round(ci / 1e3)}s) \u2014 treating as leaked, handling close directly`, {
        level: "error"
      }), X("error", "bridge_repl_v2_recovery_flag_leaked"), ui(), ve = void 0, y = !0;
    }
    if (Ni(e)) {
      if (tr >= fi) {
        if (t(`[remote-bridge] ${e} recovery exhausted after ${tr} attempts`, {
          level: "error"
        }), me(`Transport recovery exhausted (code ${e})`), !Ee) we("recovery_exhausted", {
          close_code: e
        });
        return !1;
      }
      if (e === 4094 && !b) {
        if (tn >= fi) {
          if (t(`[remote-bridge] worker-credential recovery exhausted after ${tn} attempts with no successful heartbeat between them`, {
            level: "error"
          }), me("Transport recovery exhausted (worker credential failures)", "auth"), !Ee) we("cred_recovery_exhausted");
          return !1;
        }
        tn++;
      }
      if (e === 4093 && !b) {
        let A = _i.charge(Date.now(), $n());
        switch (A) {
         case "hourly_exhausted":
         case "daily_exhausted":
          {
            let L = A === "hourly_exhausted" ? 1 : 24;
            if (t(`[remote-bridge] heartbeat recovery budget exhausted (${L}h window)`, {
              level: "error"
            }), me(A === "hourly_exhausted" ? ls : cs), !Ee) we("heartbeat_budget_exhausted", {
              window_h: L
            });
            return !1;
          }

         case "charged":
          break;
        }
      }
      return tr++, wa(e), !1;
    }
    let _ = (b || y) && br, E = Cs(e, r);
    if (E !== void 0 && !(_ && ks(E))) Oe = E;
    let j = _ && r === "superseded_by_worker" ? void 0 : r, H = e === 4090 && (j === "superseded_by_worker" || j === "session_not_active" || j === "session_not_found");
    if (me(H ? Ao(e, j) : `Transport closed: ${Ao(e, j, s)}`, H ? "ended_elsewhere" : "terminal"), 
    Ee) return H;
    if (e === 4090) if (b && br) we("transport_closed_4090"); else ft("transport_closed_4090"), 
    Ee = !0; else if (e === 403) Kn(s); else we(e === 404 ? "transport_closed_404" : "transport_closed_other");
    return H;
  }
  async function io(e, r, s, b, y) {
    if (Go(e.worker_epoch), jT(C)) return t(`[remote-bridge] Rebuild suppressed for teleported session ${C}`), 
    "suppressed_teleported";
    cn = r, ro = s, Oe = void 0, br = !0, dn = !1, ki?.(), hn(), Ae.start(), he.start();
    try {
      let _ = S, E = _.getLastSequenceNum();
      if (gr = void 0, _.close({
        goodbye: !1,
        retainUndelivered: !0
      }), S = await bJr({
        ...ei(),
        sessionUrl: p0e(e.api_base_url, C),
        ingressToken: e.worker_jwt,
        sessionId: C,
        epoch: e.worker_epoch,
        initialSequenceNum: E,
        getAuthToken: () => e.worker_jwt
      }), O) return S.close(), "rebuilt";
      if (ee) return S.close(), "suppressed_owner_changed";
      ji(), S.connect(), Ca(_), ln?.(), Rmo(), Mmo(), Lmo(), $mo(), Dmo(), FZo(), Nmo(), 
      $s?.(), ar = setTimeout(Ii, z.connect_timeout_ms, cn), St.scheduleFromExpiresIn(C, e.expires_in), 
      Wn = e.worker_jwt, ti = e.worker_epoch, ri = e.api_base_url;
      let j = jt !== 0 && (Bt || b < jt);
      jt = 0;
      let H = y < zr;
      Bt = j || H;
      try {
        la(e, H);
      } catch (A) {
        d(A), m("bridge_webagent_mcp_inject", "refresh_threw");
      }
      Wt();
    } finally {
      Ae.deactivate(), he.deactivate();
    }
    return "rebuilt";
  }
  async function Bi(e, r, s) {
    let b = !s && ot !== void 0 && Ht() && wmo(), y = b ? await ot(e) : void 0;
    if (b && (O || ie !== r)) return;
    if (y === "signed_out") {
      if (t(`[remote-bridge] Signed out on this machine under ${C} (${e}) \u2014 stopping`), 
      X("info", "bridge_repl_v2_signed_out"), ft("signed_out"), !Ft) f("bridge_connect", "signed_out");
      Ee = !0, me(Xs, "auth");
      return;
    }
    if (me(Ks, "auth"), !s) we("recovery_no_oauth_token");
  }
  async function Sa(e, r, s, b) {
    let y = Date.now();
    X("info", "bridge_repl_v2_remint_loop_entered"), rn = !0;
    let _ = 0;
    try {
      let E = !1, j = 0;
      for (let H = 1; !O; H++) {
        if (ie !== r) return {
          creds: null,
          attempts: _
        };
        let A = Math.round((Date.now() - y) / 6e4);
        nn(`${ze ? "Remote Control credentials unavailable" : "Remote Control server unreachable"} \u2014 retrying (attempt ${H}${A > 0 ? `, ${A}m elapsed` : ""})`);
        let L = Math.min(ds * 2 ** (H - 1), Co);
        if (await J(Math.max(Math.random() * L, us)), O) break;
        if (ie !== r) return {
          creds: null,
          attempts: _
        };
        if (er = Date.now(), jT(C)) return me("Session teleported to cloud"), X("info", "bridge_repl_v2_remint_loop_teleported"), 
        {
          creds: null,
          attempts: _
        };
        let ae = Fo();
        if (!ae) return X("info", "bridge_repl_v2_remint_loop_no_oauth"), await Bi("remint_loop", r, s), 
        {
          creds: null,
          attempts: _
        };
        let B = await Kr(ae, r);
        if (_ = H, O) break;
        if (ie !== r) return {
          creds: null,
          attempts: _
        };
        if (B === null) {
          if (j++, b === void 0 || j < b.attempts) continue;
          if (t(`[remote-bridge] Re-mint loop exhausted (code ${e}): ${j} unreachable attempts, ${Math.round((Date.now() - y) / 1e3)}s`, {
            level: "error"
          }), X("info", "bridge_repl_v2_remint_loop_exhausted", {
            attempts: _,
            elapsed_ms: Date.now() - y,
            queued_writes_dropped: Ae.pendingCount + he.pendingCount + he.evictedCount
          }), me(b.exhaustedDetail), !s) we("recovery_exhausted", {
            close_code: e,
            remint_attempts: _
          });
          return {
            creds: null,
            attempts: _
          };
        }
        if (WN(B)) {
          if (te && !E) {
            if (await Sr("owner_changed_recovery", r)) return {
              creds: null,
              attempts: _
            };
            E = !0;
            let Q = !1;
            try {
              Q = await te(ae);
            } catch (Se) {
              t(`[remote-bridge] Re-mint loop OAuth refresh threw: ${l(Se)}`, {
                level: "error"
              });
            }
            if (O) break;
            if (ie !== r) return {
              creds: null,
              attempts: _
            };
            if (Q) {
              t("[remote-bridge] Re-mint rejected after outage \u2014 OAuth refresh succeeded; retrying with the refreshed credential");
              continue;
            }
          }
          if (me(Nn, "auth"), !s) we("recovery_credentials_rejected");
          return X("info", "bridge_repl_v2_remint_loop_rejected"), {
            creds: null,
            attempts: _
          };
        }
        if (Tse(B)) {
          if (me(cAe(B), kt(B)), !s) we(Tn("recovery", B));
          return X("info", "bridge_repl_v2_remint_loop_denied"), {
            creds: null,
            attempts: _
          };
        }
        return t(`[remote-bridge] Re-mint loop succeeded (code ${e}, attempt ${H}, ${Math.round((Date.now() - y) / 1e3)}s)`), 
        X("info", "bridge_repl_v2_remint_loop_recovered", {
          attempts: H,
          elapsed_ms: Date.now() - y
        }), {
          creds: B,
          attempts: _
        };
      }
      return {
        creds: null,
        attempts: _
      };
    } finally {
      if (ie === r) rn = !1;
    }
  }
  let Ge = {
    401: {
      reconnectingDetail: "JWT expired \u2014 refreshing",
      cause: "auth_401_recovery",
      failureDiagnostic: "bridge_repl_v2_jwt_refresh_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_auth_401",
      needsOAuthRefresh: !0
    },
    4091: {
      reconnectingDetail: "CCR init failed \u2014 retrying",
      cause: "init_4091_recovery",
      failureDiagnostic: "bridge_repl_v2_4091_recovery_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_init_4091",
      needsOAuthRefresh: !1
    },
    4093: {
      reconnectingDetail: "presence heartbeats failing \u2014 reconnecting",
      cause: "heartbeat_4093_recovery",
      failureDiagnostic: "bridge_repl_v2_4093_recovery_failed",
      fetchFailure: "retry",
      remintCap: fs,
      recoveredCode: "recovered_heartbeat_4093",
      needsOAuthRefresh: !1
    },
    4094: {
      reconnectingDetail: "worker credential expired \u2014 re-minting",
      cause: "cred_4094_recovery",
      failureDiagnostic: "bridge_repl_v2_4094_recovery_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_cred_4094",
      needsOAuthRefresh: !0
    }
  };
  function Ni(e) {
    if (e === 4094) return wIt();
    return e === 401 || e === 4091 || e === 4093;
  }
  let Ui = 3e4, Ta = 5e3;
  function Fi(e, r) {
    if (Ge[e].fetchFailure === "terminal") {
      me(r);
      return;
    }
    Ae.start(), he.start(), nn("presence recovery failed \u2014 retrying"), t(`[remote-bridge] ${e} recovery fetch failed \u2014 retrying in ${Ui}ms`), 
    rr();
    let s = S;
    function b() {
      if (ct = void 0, O) return;
      if (tr === 0) {
        if (Ae.active || he.active) {
          if (De) {
            ct = setTimeout(b, Ta);
            return;
          }
          Wt(), yr();
        }
        return;
      }
      if (S !== s) return;
      _n(e, void 0, void 0, !0);
    }
    ct = setTimeout(b, Ui);
  }
  async function wa(e) {
    let r = Ee;
    if (jT(C)) {
      me("Session teleported to cloud");
      return;
    }
    if (De) return;
    let s = si();
    Ae.start(), he.start(), nn(Ge[e].reconnectingDetail), t(`[remote-bridge] ${e} on transport \u2014 attempting credential refresh + rebuild`);
    try {
      if (await Sr("owner_changed_recovery", s)) return;
      let b = ge(), y = !0, _ = n2n();
      if (!ze && Ge[e].needsOAuthRefresh && te) try {
        y = await te(b ?? "");
      } catch (B) {
        y = !1, t(`[remote-bridge] ${e} recovery OAuth refresh threw: ${l(B)}`, {
          level: "error"
        });
      } else if (!ze && $e) try {
        await $e();
      } catch (B) {
        t(`[remote-bridge] pre-recovery token refresh failed: ${l(B)}`, {
          level: "error"
        });
      }
      if (ie !== s) return;
      let E = Fo() ?? b;
      if (!E || O) {
        if (!O) await Bi("recovery", s, r);
        return;
      }
      if (jT(C)) {
        me("Session teleported to cloud");
        return;
      }
      let j = Date.now(), H = zr, A = await lr(() => Kr(E, s), "fetchRemoteCredentials (recovery)", z);
      if (ie !== s) return;
      if ((!A || WN(A)) && !O && Ge[e].needsOAuthRefresh && te && !y) {
        let B = !1;
        for (let Q = 1; Q <= z.oauth_retry_max_attempts && !O; Q++) {
          if (nn(`OAuth refresh failed \u2014 waiting for a fresh login (${Q}/${z.oauth_retry_max_attempts})`), 
          await J(nb({
            attempt: Q,
            baseMs: z.oauth_retry_base_delay_ms,
            jitter: {
              kind: "symmetric",
              ratio: z.init_retry_jitter_fraction
            }
          })), await Sr("owner_changed_recovery", s)) return;
          let Se;
          try {
            Se = fe ? await fe() : await te(b ?? "") ? ge() : void 0;
          } catch (Je) {
            t(`[remote-bridge] Adopt-loop token read threw (attempt ${Q}): ${l(Je)}`, {
              level: "error"
            });
          }
          if (O || ie !== s) return;
          let le = Se !== void 0 && Se !== (b ?? "") ? Se : void 0;
          if (!le) continue;
          if (B = !0, jT(C)) {
            me("Session teleported to cloud");
            return;
          }
          A = await lr(() => Kr(le, s), "fetchRemoteCredentials (recovery re-poll)", z);
          break;
        }
        if (ie !== s) return;
        if (WN(A) && !B) {
          if (!O) {
            let Q = bi(_);
            if (Q !== void 0) {
              if (X("info", "bridge_repl_v2_recovery_host_declined"), me(Ei(Q), Si(Q)), !r) if (Ft) ft(Q), 
              Ee = !0; else we("recovery_reauth_required");
              return;
            }
            if (me("OAuth token refresh failed \u2014 run /login to re-authenticate", "auth"), 
            !r) we("recovery_reauth_required");
          }
          return;
        }
      }
      if (O) return;
      if (!A && Ge[e].fetchFailure === "retry" && !$n()) {
        Fi(e, `could not fetch fresh session credentials after code ${e}`);
        return;
      }
      if (WN(A) && !Ge[e].needsOAuthRefresh && te) {
        if (await Sr("owner_changed_recovery", s)) return;
        let B = !1;
        try {
          B = await te(b ?? "");
        } catch (Q) {
          t(`[remote-bridge] ${e} late OAuth refresh threw: ${l(Q)}`, {
            level: "error"
          });
        }
        if (O || ie !== s) return;
        if (B) {
          if (A = await lr(() => Kr(ge() ?? b ?? "", s), `fetchRemoteCredentials (${e} late refresh)`, z), 
          O || ie !== s) return;
        }
      }
      if (WN(A)) {
        if (me(Nn, "auth"), !r) we("recovery_credentials_rejected");
        return;
      }
      let L = 0;
      if (!A) {
        let B = await Sa(e, s, r, $n() ? Ge[e].remintCap : void 0);
        if (A = B.creds, L = B.attempts, !A || O || ie !== s) return;
      }
      if (Tse(A)) {
        if (!O) {
          if (me(cAe(A), kt(A)), !r) we(Tn("recovery", A));
        }
        return;
      }
      if (ie !== s) return;
      let ae = await io(A, Ge[e].cause, L, j, H);
      if (ae === "suppressed_teleported") {
        me("Session teleported to cloud");
        return;
      }
      if (ae === "suppressed_owner_changed") return;
      if (t(`[remote-bridge] Transport rebuilt after ${e}`), !O) {
        if (!r) ft(Ge[e].recoveredCode, L > 0 ? {
          remint_attempts: L
        } : void 0);
      }
    } catch (b) {
      if (t(`[remote-bridge] ${e} recovery failed: ${l(b)}`, {
        level: "error"
      }), X("error", Ge[e].failureDiagnostic), !O && !ee) {
        if (Fi(e, `Transport recovery failed (${e}): ${l(b)}`), Ge[e].fetchFailure === "terminal" && !r) we("recovery_failed");
      }
    } finally {
      if (ai(s)) {
        if (ni(), ct !== void 0 && ve !== void 0) {
          rr();
          let b = ve;
          ve = void 0, _n(b.code, b.cause, b.detail, !0);
        } else ve = void 0;
        if (ct === void 0 && !De) Ae.drop(), he.drop(), Nt = !1;
      }
    }
  }
  if (ji(), !Re && G && G.length > 0) Ae.start(), he.start();
  S.connect(), ar = setTimeout(Ii, z.connect_timeout_ms, cn);
  function Tt(e) {
    return Y ? Y(e) : e();
  }
  function Hi(e) {
    return On(e, "live").map(r => {
      if (r.type !== "assistant" || r.parent_tool_use_id !== null || r.uuid === void 0) return {
        ...r,
        session_id: C
      };
      let s = Zt.get(r.uuid);
      if (s === void 0) return {
        ...r,
        session_id: C
      };
      return Zt.delete(r.uuid), {
        ...r,
        session_id: C,
        user_message_uuid: s,
        user_message_uuids: [ s ]
      };
    });
  }
  function Wt() {
    let e = Pe === "deferred", r = e ? Ae.end().filter(A => wo(A.message)) : Ae.end(), s = e ? he.end().filter(A => !yn(A.frame)) : he.end(), b = Nt;
    if (Nt = !1, r.length === 0 && s.length === 0) {
      if (e && Tt(() => b) && Ie.size === 0) He("running");
      return;
    }
    let y = [], _ = [], E = () => {
      if (_.length > 0) y.push(...Hi(_)), _ = [];
    }, j = 0, H = 0;
    while (j < r.length || H < s.length) {
      let A = r[j], L = s[H];
      if (A && (!L || A.seq < L.seq)) Qt.add(A.message.uuid), Qr.add(A.message.uuid), 
      uo = !0, _.push(A.message), j++; else if (L) {
        E();
        let ae = L.frame;
        if ("uuid" in ae && typeof ae.uuid === "string") qn.add(ae.uuid);
        y.push(Object.assign({}, ae, {
          session_id: C
        })), H++;
      }
    }
    if (E(), Tt(() => b) && Ie.size === 0) He("running");
    t(`[remote-bridge] Drained ${r.length} queued message(s) and ${s.length} SDK event(s) / control frame(s) after flush`), 
    S.writeBatch(y);
  }
  function Ca(e) {
    let r = e.takeUndeliveredEvents?.() ?? [];
    if (r.length === 0) return;
    t(`[remote-bridge] Carrying ${r.length} undelivered client event(s) over to the rebuilt transport`), 
    X("info", "bridge_repl_v2_events_carried_over", {
      count: r.length
    }), i("tengu_bridge_repl_events_carried_over", {
      count: r.length
    }), S.adoptUndeliveredEvents?.(r);
  }
  function Tr(e, r) {
    let s = e.type !== "result" && wr && !De, [b] = Ye.redact([ e ], "events", "live");
    if (b === void 0) return;
    if (!s && he.enqueue({
      seq: Gn++,
      frame: b
    })) {
      t(`[remote-bridge] Queued ${r} during flush`);
      return;
    }
    S.write(b), t(`[remote-bridge] Sent ${r}`);
  }
  async function ka(e) {
    Ye.note(e);
    let r = e.filter(Hse), s = qsr(r, _e);
    if (s.length < r.length) t(`[remote-bridge] Capped initial flush: ${r.length} -> ${s.length} (cap=${_e})`);
    let b = On(s).map(_ => ({
      ..._,
      session_id: C,
      historical: !0
    }));
    if (b.length === 0) return;
    let y = r.findLast(_ => !hTr(_));
    if (Tt(() => y !== void 0 && Ntn(y) && !Cn(y)) && Ie.size === 0) He("running");
    t(`[remote-bridge] Flushing ${b.length} history events`), await S.writeBatch(b);
  }
  let so = !1, wr = !1, uo = !1, xi = !1, dr = !1;
  function pn(e, r) {
    let s = S, b = s.droppedWorkerStatePatchCount?.() ?? 0;
    s.reportInternalMetadata?.({
      transcript_upload_deferred: e
    }), s.flushWorkerState?.().then(y => {
      if (y && (s.droppedWorkerStatePatchCount?.() ?? 0) === b) r();
    });
  }
  let Cr;
  function Ma(e) {
    if (so) return;
    if (so = !0, Pe === "deferred") {
      S.reportMetadata({
        transcript_mirror: "deferred"
      }), Li();
      return;
    }
    if (!Re || _r === void 0 && !K) return;
    let r = e === void 0 || e.readFailed === !0, s = r ? void 0 : e.internal?.transcript_upload_deferred;
    if (So(s) && (K || _r === void 0)) {
      if (!ee) S.reportMetadata({
        transcript_mirror: "live"
      });
      dr = !0, pn(null, () => {
        dr = !1;
      });
    } else if (So(s)) {
      if (Xr = s, Pe = "deferred", Li(), uo) qt = "rows_already_live"; else if (!Ir(Xt().scope, Xr)) qt = "flag_off";
    } else if ((r || s !== void 0 && s !== null) && Ir(Xt().scope, _r)) Pe = "deferred", 
    qt = "marker_unreadable";
  }
  let qt;
  function Pa() {
    if (qt === void 0) return;
    let e = qt;
    qt = void 0, wt(e);
  }
  function Li() {
    Cr = Date.now(), t("[remote-bridge] Transcript upload deferred until a client opens this session"), 
    X("info", "bridge_repl_transcript_deferred", {
      reattach: Re
    }), i("tengu_bridge_transcript_deferral", {
      phase: c("deferred"),
      reattach: Re,
      hold_ms: Dt()
    });
  }
  let $i = !1;
  function Oa() {
    if (Pe !== "deferred" || $i) {
      se?.();
      return;
    }
    $i = !0;
    let e = Da();
    queueMicrotask(() => {
      wt("client_open", e);
      try {
        se?.();
      } catch (r) {
        t(`[remote-bridge] onClientInitialize failed after transcript release: ${l(r)}`);
      }
    });
  }
  function Ia() {
    if (Pe === "deferred" && !Ir(Xt().scope, Xr)) wt("flag_off");
  }
  function wt(e, r = Promise.resolve()) {
    if (yt) return yt;
    if (O || Pe !== "deferred") return Promise.resolve();
    if (!ee) S.reportMetadata({
      ...vr,
      transcript_mirror: "live"
    });
    vr = {}, Pe = "live", mr = !0;
    let s = Ie.size > 0;
    t(`[remote-bridge] Releasing deferred transcript (${e})`), wr = !0, Ae.start(), 
    he.start(), kr = fr ? lo() : Promise.resolve();
    let b = S;
    return yt = r.then(() => ja(e, s)).catch(y => t(`[remote-bridge] Transcript back-fill failed: ${l(y)}`, {
      level: "error"
    })).finally(() => {
      if (wr = !1, S !== b || O || ee || !so) return;
      if (De) {
        en = !0;
        return;
      }
      Wt(), fo();
    }), yt;
  }
  let Gt, kr = Promise.resolve(), Wi = [];
  function lo() {
    return new Promise(e => {
      Wi.push(e);
    });
  }
  let Mr = !1, co;
  function qi() {
    return Promise.resolve().then(() => co?.runNow()).catch(d);
  }
  function hn() {
    if (Gt !== void 0) Mr = !0, kr = lo();
    Ls?.();
  }
  function fo() {
    if (!fr || Gt === S) return;
    let e = S.getInternalEventWriter?.(), r = e && Ye.wrapInternalEventWriter(e), s = e && Ye.wrapInternalEventWriter(e, "live"), b = r && s && ((_, E, j) => (typeof E.uuid === "string" && Ci.has(E.uuid) ? s : r)(_, E, j)), y = S.getInternalEventReaders?.();
    if (r && y) {
      let _ = !Re && Gt === void 0, E = S;
      Gt = E, Mr = !0, kr = lo(), co = fr(r, y, C, _, j => {
        if (j && Gt === E) {
          Mr = !1;
          for (let H of Wi.splice(0)) H();
        }
      }, Ye.note, b);
    }
  }
  function Da() {
    let e = S;
    if (!e.setSubscribersReportedListener) return Promise.resolve();
    let r = new Promise(s => {
      e.setSubscribersReportedListener?.(b => {
        if (b) s();
      });
    });
    return Promise.race([ r, J(Rd, void 0, {
      unref: !0
    }) ]).finally(() => e.setSubscribersReportedListener?.(void 0));
  }
  async function ja(e, r) {
    if (O) return;
    let s = Qe("transcript backfill") ? void 0 : Ws?.(C);
    Ye.note(s ?? []);
    let b = new Set(Ae.pending.map(B => B.message.uuid)), y = (s ?? []).filter(B => Hse(B) && !Qr.has(B.uuid) && !b.has(B.uuid)), _ = qsr(y, Xt().backfillMessages);
    t(`[remote-bridge] Back-filling ${_.length} of ${y.length} eligible message(s)${s === void 0 ? " (history withheld by host)" : ""}`), 
    X("info", "bridge_repl_transcript_released", {
      reason: e,
      backfilled: _.length,
      eligible: y.length,
      withheld: s === void 0
    }), i("tengu_bridge_transcript_deferral", {
      phase: c("released"),
      reason: c(e),
      backfilled: _.length,
      eligible: y.length,
      history_withheld: s === void 0,
      deferred_ms: Cr === void 0 ? void 0 : Date.now() - Cr,
      hold_ms: Dt()
    });
    let E = On(_).map(B => ({
      ...B,
      session_id: C,
      historical: !0
    }));
    for (let B of y) Qt.add(B.uuid), Jr.add(B.uuid);
    for (let B of _) Qr.add(B.uuid);
    let j = y.findLast(B => !hTr(B)), H = r || Ie.size > 0 || Tt(() => j !== void 0 && Ntn(j) && !Cn(j));
    if (e !== "client_prompt" && !H && E.length > 0) E.push(Object.assign(xjn(C), {
      historical: !0
    }));
    let A = S.droppedDurableBatchCount?.() ?? 0, L = S;
    for (let B = 0; B < E.length; B += Po) {
      if (O || ee) return;
      if (S !== L) {
        await S.writeBatch(E.slice(B));
        break;
      }
      if (await S.writeBatch(E.slice(B, B + Po)), B + Po < E.length) await Promise.race([ S.flush(), J(Ed, void 0, {
        unref: !0
      }) ]);
    }
    let ae = S;
    ae.flush().then(() => {
      if ((ae.droppedDurableBatchCount?.() ?? 0) > A) X("warn", "bridge_repl_transcript_backfill_dropped"), 
      i("tengu_bridge_transcript_deferral", {
        phase: c("backfill_dropped"),
        reason: c(e),
        hold_ms: Dt()
      });
      if (O || ee) return;
      dr = !0, pn(null, () => {
        dr = !1;
      });
    });
  }
  let _o = It === !0, ur;
  function Ba(e) {
    if (e?.skipArchive) _o = !0;
    if (e?.reason) ur = e.reason;
    if (Zr) return Zr;
    return O = !0, Zr = Na(), Zr;
  }
  async function Na() {
    if (vi("teardown"), Pe === "deferred") i("tengu_bridge_transcript_deferral", {
      phase: c("exited_unopened"),
      deferred_ms: Cr === void 0 ? void 0 : Date.now() - Cr,
      hold_ms: Dt()
    });
    let e = Xe ?? nr;
    if (e !== void 0) {
      if (!jT(C)) {
        let le = Xe === void 0 ? Ri() : void 0;
        if (le !== void 0 && Ft && ASr()) ft(le); else we(e);
      }
      Xe = void 0, nr = void 0, Et = void 0;
    } else if (!Ee && ve?.code === 403 && !jT(C)) Kn(ve.detail); else if (!Ee && (tr > 0 && (ct !== void 0 || De) || ve !== void 0 && ve.code !== 4090) && !jT(C)) we("recovery_abandoned_at_teardown");
    if (un?.(), Mi(), Ai(), Gfo(to), Er?.(), Er = void 0, hn(), Yr(), St.cancelAll(), 
    clearTimeout(ar), rr(), on(), S.writeBatch(ur !== void 0 ? [ rwo(C, ur), xjn(C) ] : [ xjn(C) ]), 
    He("idle"), _o || rn && ur !== "remote_control_disabled") {
      let le = It ? "skipped_host_owned" : _o ? "skipped_teleport" : "skipped_remint_loop", Je;
      if (Jt()) Je = await hi("skip_archive_flush_timeout"); else if (ur !== void 0) await Rr();
      let Ze = mi();
      S.close(), i("tengu_bridge_repl_teardown", {
        v2: !0,
        archive_status: c(le),
        archive_ok: !1,
        ...Je,
        ...Ze
      }), await S.flushGoodbye(), t(`[remote-bridge] Teardown complete (skipArchive): session=${C}`), 
      X("info", "bridge_repl_v2_teardown"), Gi();
      return;
    }
    let r = z.teardown_archive_timeout_ms, s = Date.now(), b = wi(), y, _ = s, E = r;
    if (Jt() && b === void 0) {
      let le = s + zee - Ds;
      y = await hi("exit_flush_timeout", s), _ = s + y.hold_preflush_ms, E = Math.max(1, Math.min(r, le - _));
    }
    let j = _ + E, H = b === void 0 ? Jn() : void 0, A = H?.token, L = await Yt(C, h, A, R, E, b, qe), ae = j - Date.now();
    if (L === 401 && H?.source === "current" && te && ae >= vd) try {
      await Promise.race([ te(A ?? ""), J(ae) ]), H = Jn(), A = H.token, L = await Yt(C, h, A, R, Math.max(1, j - Date.now()), b, qe);
    } catch (le) {
      t(`[remote-bridge] Teardown 401 retry threw: ${l(le)}`, {
        level: "error"
      });
    }
    let B = Date.now() - _;
    if (ur !== void 0 && y === void 0) await Rr();
    let Q = mi();
    S.close();
    let Se = Ms(L, Oe);
    i("tengu_bridge_repl_teardown", {
      v2: !0,
      archive_status: c(Se),
      archive_credential: pe(H?.source),
      archive_ok: typeof L === "number" && L < 400,
      archive_http_status: typeof L === "number" ? L : L === "untrusted_device" ? 403 : void 0,
      archive_timeout: L === "timeout",
      archive_no_token: L === "no_token",
      ...y,
      archive_budget_ms: E,
      archive_ms: B,
      ...Q
    }), await S.flushGoodbye(), t(`[remote-bridge] Torn down (archive=${L})`), X("info", "bridge_repl_v2_teardown"), 
    Gi();
  }
  i("tengu_bridge_repl_started", {
    has_initial_messages: !!(G && G.length > 0),
    v2: !0,
    ccr_session_id: ye(sd(C)),
    expires_in_s: de.expires_in,
    inProtectedNamespace: mD(),
    ...Fnt()
  }), g("bridge_connect");
  function Qe(e) {
    if (!ee) return !1;
    return t(`[remote-bridge] Dropping ${e} after owner change`), !0;
  }
  let po = {
    bridgeSessionId: C,
    titleWriter: n.titleWriter,
    noHistoryBackfill: K || Vr,
    getJoinedProjectThread: void 0,
    requestInjectedMcpReassert: fa,
    canAdoptInjectedMcp: ua,
    detachForHandoff: () => {
      St.cancelAll(), Yr();
    },
    sessionGroupingId: Gr,
    outboundOnly: Ot ?? !1,
    environmentId: "",
    sessionIngressUrl: de.api_base_url,
    gitRepoUrl: dt,
    ...ze && {
      getWorkerBearerToken: () => O ? null : Wn,
      getWorkerEpoch: () => ti
    },
    getLastSequenceNum: () => S.getLastSequenceNum(),
    settleUploadsBeforeHandoff: () => {
      if (yt !== void 0 || Pe === "deferred" || Mr) {
        let e = async () => {
          let r = Date.now() + Ts, s = async (b, y, _) => {
            let E = !1;
            if (await Promise.race([ b.finally(() => {
              E = !0;
            }), J(Math.max(0, _ - Date.now()), void 0, {
              unref: !0
            }) ]), !E) X("warn", "bridge_repl_handoff_wait_expired", {
              what: y
            });
          };
          if (await s(Gt === S ? qi() : kr, "transcript_copy_catch_up", r - Es), Mr) X("warn", "bridge_repl_handoff_transcript_copy_behind");
          await s(Promise.all([ S.flush({
            retryNow: !0
          }), S.flushInternalEvents?.({
            retryNow: !0
          }) ]), "upload_lanes", r);
        };
        return (yt ?? wt("handoff")).then(e).then(() => {}, () => {});
      }
      return Jt() ? Rr(Es).then(() => {}, () => {}) : Promise.resolve();
    },
    awaitUploadsForHandoff: e => Ji({
      sessionKind: () => {
        if (yt !== void 0 || Pe === "deferred") return "deferred";
        if (Jt()) return "held";
        return fr ? "live" : "no_transcript_copy";
      },
      release: () => yt ?? (Pe === "deferred" ? wt("handoff") : Promise.resolve()),
      isSessionOver: () => O || ee,
      hasFailedForGood: () => Ut,
      transport: () => S,
      droppedBatches: r => (r.droppedDurableBatchCount?.() ?? 0) + (r.getInternalEventBacklog?.().droppedBatches ?? 0),
      isConnected: () => gr === S && S.isConnectedStatus(),
      transcriptCopy: fr && {
        isInstalledOnCurrentTransport: () => Gt === S,
        catchUp: () => kr,
        wakeCatchUp: () => void qi()
      },
      firstHistoryFlush: () => Vn,
      holdsWrites: () => Ae.active || he.active || Ae.pendingCount + he.pendingCount > 0,
      drainLanes: () => Promise.all([ S.flush({
        retryNow: !0
      }), S.flushInternalEvents?.({
        retryNow: !0
      }) ]).then(() => {})
    }, {
      budgetMs: e?.budgetMs ?? Ts,
      signal: e?.signal,
      log: r => t(r),
      onBudgetPassed: r => X("warn", "bridge_repl_handoff_upload_wait_expired", {
        what: r
      }),
      onFault: r => X("warn", "bridge_repl_handoff_upload_wait_fault", {
        what: r
      })
    }),
    flush: () => (Wt(), pi()),
    writeMessages(e) {
      if (Qe("writeMessages")) return;
      Ye.note(e, "live");
      for (let _ of e) if (!Jr.has(_.uuid)) Ci.add(_.uuid);
      let r = e.filter(_ => Hse(_) && !Jr.has(_.uuid) && !Qt.has(_.uuid));
      if (r.length === 0) return;
      if (!Pi) for (let _ of r) {
        let E = Rjn(_);
        if (E !== void 0 && Mt?.(E, C)) {
          Pi = !0;
          break;
        }
      }
      let s = r.some(vt ? Dd : Ntn);
      if (s) vt = !1;
      if (!Oi && s) Oi = !0, vs(C, qe);
      let b = r;
      if (Pe === "deferred") {
        if (b = r.filter(wo), b.length === 0) {
          if (Ae.active) Nt ||= s; else if (Tt(() => s) && Ie.size === 0) He("running");
          return;
        }
      }
      if (Ae.enqueue(...b.map(_ => ({
        seq: Gn++,
        message: _
      })))) {
        if (s) Nt = !0;
        t(`[remote-bridge] Queued ${b.length} message(s) during flush`);
        return;
      }
      for (let _ of b) Qr.add(_.uuid), Qt.add(_.uuid);
      uo = !0;
      let y = Hi(b);
      if (Tt(() => s) && Ie.size === 0) He("running");
      t(`[remote-bridge] Sending ${b.length} message(s)`), S.writeBatch(y);
    },
    reportMetadata(e) {
      if (Qe("reportMetadata")) return;
      if (Pe === "deferred") {
        let {post_turn_summary: r, task_summary: s, recap: b, ...y} = e, _ = {
          post_turn_summary: r,
          task_summary: s,
          recap: b
        };
        for (let j of Object.keys(_)) if (j in e) vr[j] = _[j];
        let E = y;
        if ("post_turn_summary" in e) E.post_turn_summary = typeof r === "object" && r !== null && "status_category" in r ? {
          status_category: r.status_category
        } : null;
        if (Object.keys(E).length === 0) return;
        S.reportMetadata(E);
        return;
      }
      S.reportMetadata(e);
    },
    refreshGitBranch() {
      ln?.();
    },
    writeSdkMessages(e) {
      if (Qe("writeSdkMessages")) return;
      Ye.note(e);
      let r = e.filter(_ => !_.uuid || !qn.has(_.uuid)), s = Pe === "deferred" ? r.filter(_ => !yn(_)) : r, b = Ye.redact(s);
      if (b.length === 0) return;
      if (he.active) {
        let _ = b.filter(j => j.type !== "stream_event"), E = b.length - _.length;
        if (E > 0) t(`[remote-bridge] Dropped ${E} stream_event frame(s) during flush`);
        if (_.length > 0) {
          he.enqueue(..._.map(j => ({
            seq: Gn++,
            frame: j
          }))), t(`[remote-bridge] Queued ${_.length} SDK event(s) during flush`);
          try {
            if (_.some(Os)) {
              let j = he.evictedCount > 0;
              if (he.evictOldest(H => Os(H.frame), Ss), !j && he.evictedCount > 0) t(`[remote-bridge] Over ${Ss} subagent frames queued during flush; dropping the oldest until it drains`);
            }
          } catch (j) {
            t(`[remote-bridge] Subagent frame cap failed: ${l(j)}`, {
              level: "error"
            });
          }
        }
        return;
      }
      for (let _ of b) if (_.uuid) qn.add(_.uuid);
      let y = b.map(_ => ({
        ..._,
        session_id: C
      }));
      S.writeBatch(y);
    },
    sendControlRequest(e) {
      Ojn(e.request_id, {
        automated: !YVe(e)
      });
      let r = e.request;
      if (Eo(r, Fe)) return Xn.add(e.request_id), t(`[remote-bridge] Keeping an account memory prompt at the terminal (not sent to Remote Control): ${e.request_id}`), 
      !1;
      if (r.subtype === "can_use_tool" || r.subtype === "request_user_dialog") Ie.delete(e.request_id), 
      Ie.set(e.request_id, {
        request: e
      }), Lt.delete(e.request_id);
      if (r.subtype === "request_user_dialog" && (he.active && !wr || De)) return Lt.add(e.request_id), 
      t(`[remote-bridge] Not forwarding request_user_dialog while writes are gated / transport recovering (local-only): ${e.request_id}`), 
      !1;
      if (Qe("control_request")) return !1;
      let s = {
        ...e,
        session_id: C
      };
      if (r.subtype === "can_use_tool") {
        let b;
        if (k("tengu_bridge_requires_action_details", !1)) {
          let y = r.tool_name === je || r.tool_name === Rt, _;
          if (r.tool_name === Yo) {
            let A = Array.isArray(r.input?.questions) ? r.input.questions : [], L = A[0], ae = L?.header || L?.question;
            _ = {
              label: "Question",
              body: ae ? ae + (A.length > 1 ? ` (+${A.length - 1} more)` : "") : "Tap to answer"
            };
          } else if (r.tool_name === FS) _ = {
            label: "Plan",
            body: "Plan ready for review"
          };
          if (!_ && r.requires_user_interaction) _ = {
            label: r.display_name ?? r.tool_name,
            body: ""
          };
          let E = y && typeof r.input?.command === "string" ? xX(r.input.command) : void 0, j = y && (r.description === void 0 || Au(r.input)), H = y && typeof r.input?.description === "string" ? r.input.description : void 0;
          b = {
            tool_name: r.tool_name,
            display_tool_name: _?.label ?? r.display_name ?? r.tool_name,
            action_description: _?.body ?? xX(!j && (r.description || H) || E && qo(E, 120) || ""),
            raw_command: _ ? void 0 : E,
            tool_use_id: r.tool_use_id,
            request_id: _ ? "" : e.request_id,
            ..._ && e.request_id && {
              suppressed_request_id: e.request_id
            },
            input: r.input
          };
        }
        if (b) Ie.set(e.request_id, {
          request: e,
          details: b
        });
        vt = !1, He("requires_action", b);
      } else if (r.subtype === "request_user_dialog") {
        let b;
        if (k("tengu_bridge_requires_action_details", !1)) b = N$n(r.dialog_kind, r.payload, e.request_id, r.tool_use_id);
        if (b) Ie.set(e.request_id, {
          request: e,
          details: b
        });
        vt = !1, He("requires_action", b);
      }
      return Tr(s, `control_request request_id=${e.request_id}`), !0;
    },
    sendControlResponse(e, r) {
      if (Xn.has(e.response.request_id)) return;
      if (!r?.skipStateReport) Qn(e.response.request_id, !0);
      if (Qe("control_response")) return;
      let s = {
        ...e,
        session_id: C
      };
      if (!r?.skipStateReport && !vt) Zn();
      Tr(s, "control_response");
    },
    sendControlCancelRequest(e) {
      if (Xn.delete(e)) return;
      if (Lt.delete(e)) {
        Ie.delete(e), t(`[remote-bridge] Local-only retract of a declined dialog forward request_id=${e}`);
        return;
      }
      if (Qn(e, !0), Qe("control_cancel_request")) return;
      let r = {
        type: "control_cancel_request",
        request_id: e,
        session_id: C
      };
      if (!vt) Zn();
      Tr(r, `control_cancel_request request_id=${e}`);
    },
    sendResult(e) {
      if (Nt = !1, vt = !0, Qe("result")) return;
      if (ESs(), He("idle"), Pe === "deferred" && !Xt().eagerResult) {
        t("[remote-bridge] Withheld result (transcript deferred)");
        return;
      }
      let r = xjn(C, Pe === "deferred" && e?.outcome !== void 0 ? {
        ...e,
        outcome: {
          ...e.outcome,
          result: void 0
        }
      } : e);
      Tr(r, `result ${r.subtype} is_error=${r.is_error} num_turns=${r.num_turns}${r.user_message_uuid ? ` user_message_uuid=${r.user_message_uuid}` : ""}`);
    },
    stampReply({assistantUuid: e, userMessageUuid: r}) {
      if (Zt.set(e, r), Zt.size > ha) {
        let s = Zt.keys().next().value;
        if (s !== void 0) Zt.delete(s);
      }
    },
    async subscribePR(e, r, s) {
      if (ee) return {
        ok: !1,
        reason: "owner_changed"
      };
      let b = `${e}#${r}`, y = sr.get(b);
      if (s) sr.set(b, {
        agentId: s,
        repo: e,
        prNumber: r
      });
      let _ = await x6e("subscribe", {
        sessionId: C,
        repo: e,
        prNumber: r,
        baseUrl: h,
        getAccessToken: ge,
        getTrustedDeviceToken: nS
      });
      if (!_.ok && s) if (y) sr.set(b, y); else sr.delete(b);
      return _;
    },
    async unsubscribePR(e, r) {
      if (ee) return {
        ok: !1,
        reason: "owner_changed"
      };
      let s = await x6e("unsubscribe", {
        sessionId: C,
        repo: e,
        prNumber: r,
        baseUrl: h,
        getAccessToken: ge,
        getTrustedDeviceToken: nS
      });
      if (s.ok) sr.delete(`${e}#${r}`);
      return s;
    },
    async recordCreatedPR(e, r) {
      if (O) return {
        ok: !1,
        skipped: "no_bridge"
      };
      if (ee) return {
        ok: !1,
        skipped: "owner_changed"
      };
      return nTs({
        sessionUrl: p0e(ri, C),
        workerToken: Wn,
        ...e,
        timeoutMs: r
      });
    },
    async fetchInboxMessage(e) {
      let r = s => (m("bridge_inbox_fetch", s), {
        ok: !1,
        reason: s
      });
      if (O) return r("no_bridge");
      if (ee) return r("owner_changed");
      {
        let s = async j => {
          if (O) return "no_bridge";
          if (ee) return "owner_changed";
          if (j?.fresh ? Yn() : xt()) {
            let H = await Ti("owner_changed_inbox", j);
            if (H === "changed") return "owner_changed";
            if (H === "inconclusive") return O ? "no_bridge" : "owner_unverified";
          }
          return O ? "no_bridge" : void 0;
        }, b = await s();
        if (b) return r(b);
        if ($e) try {
          await $e();
        } catch (j) {
          t(`[remote-bridge] inbox fetch: token refresh failed: ${l(j)}`, {
            level: "error"
          });
        }
        let y = ge(), _ = await nS();
        if ($e) {
          let j = await s({
            fresh: !0
          });
          if (j) return r(j);
        }
        let {fetchSessionInboxMessage: E} = import.meta.require("./chunk-peh5zwh7.js");
        return E({
          sessionId: C,
          fileId: e,
          baseUrl: h,
          getAccessToken: () => y,
          getTrustedDeviceToken: () => Promise.resolve(_)
        });
      }
      return r("feature_disabled");
    },
    getPRWebhookTargets() {
      return [ ...sr.values() ];
    },
    teardown: Ba,
    neverArchive: It,
    async archive() {
      if (It) return;
      let e = wi();
      await Yt(C, h, e === void 0 ? Jn().token : void 0, R, z.teardown_archive_timeout_ms, e, qe);
    },
    [Symbol.asyncDispose]() {
      return po.teardown({
        reason: "host_exit"
      });
    }
  };
  if (It && !Re) Br(C, qe);
  let Gi = bt(po);
  return po;
}

async function lr(n, h, R) {
  let T = R.init_retry_max_attempts;
  for (let F = 1; F <= T; F++) {
    let x = await n();
    if (x !== null) return x;
    if (F < T) {
      let V = Math.min(nb({
        attempt: F,
        baseMs: R.init_retry_base_delay_ms,
        jitter: {
          kind: "symmetric",
          ratio: R.init_retry_jitter_fraction
        }
      }), R.init_retry_max_delay_ms);
      t(`[remote-bridge] ${h} failed (attempt ${F}/${T}), retrying in ${Math.round(V)}ms`), 
      await J(V);
    }
  }
  return null;
}

async function Oo(n, h, R, T) {
  let F = !1, x = !1, V = await lr(async () => {
    if (F) x = !0;
    let W = T.getAccessToken(), w = !1, K = await n(W, () => {
      w = !0;
    }), Z = WN(K);
    if ((K === null || Z) && w && T.onAuth401 && !F && !T.recoveryAttemptedTokens.has(W)) {
      T.recoveryAttemptedTokens.add(W);
      let oe = !1;
      try {
        oe = await T.onAuth401(W);
      } catch (Le) {
        t(`[remote-bridge] ${h} 401 \u2014 OAuth refresh threw: ${l(Le)}`, {
          level: "error"
        });
      }
      if (F = oe, t(`[remote-bridge] ${h} 401 \u2014 OAuth ${oe ? "refreshed; retrying with the fresh token" : "refresh unavailable"}`), 
      X("info", "bridge_repl_v2_init_401_refresh", {
        refreshed: oe
      }), F && Z) return null;
    }
    return K;
  }, h, R);
  if (V === null && F && !x) return t(`[remote-bridge] ${h} refreshed on the final attempt; one extra try with the fresh token`), 
  n(T.getAccessToken(), () => {});
  return V;
}

function kd(n) {
  if (n.reason === "untrusted_device") return n.refusal?.kind !== "signature_wanted" && !Spe();
  return n.reason === "session_stale_relogin";
}

function kt(n) {
  return kd(n) ? "auth" : "terminal";
}

function kn(n) {
  return n.reason === "request_rejected" && n.status === 403 && pUe(n.source);
}

function Tn(n, h) {
  return kn(h) ? `${n}_credentials_rejected_nonorigin` : `${n}_credentials_rejected`;
}

var Md = {
  nonorigin_cf: "recovered_403_nonorigin_cf",
  nonorigin_other: "recovered_403_nonorigin_other"
};

function ws(n) {
  switch (n?.rejectSource) {
   case "nonorigin_cf":
    return "transport_closed_403_nonorigin_cf";

   case "nonorigin_other":
    return "transport_closed_403_nonorigin_other";

   case "origin":
   case void 0:
    return "transport_closed_403";
  }
}

function cAe(n) {
  switch (n.reason) {
   case "untrusted_device":
    return pwe(n.refusal);

   case "session_stale_relogin":
    return "session expired for trusted-device check \u2014 run /login to re-authenticate";

   case "invalid_session_id":
    return "session id contains unsupported characters \u2014 check the --session-id value";

   case "request_rejected":
    if (kn(n)) return `${Akr(n.source)} \u2014 run /remote-control to retry`;
    return `Remote Control server rejected the request (HTTP ${n.status}) \u2014 run /remote-control to retry`;

   case "malformed_response":
    return gHt;
  }
}

async function Ad(n, h, R, T, F, x, V) {
  let W = await nS(), w = await kkr(n, h, R, T, W, F, V), K = Tse(w) && w.reason === "untrusted_device" ? w.refusal : void 0;
  if (K !== void 0 && Zct(K)) w = await pHt(W, Z => kkr(n, h, R, T, Z, F, V), x) ?? w; else if (K !== void 0) Ose("[remote-bridge]", K), 
  VN();
  if (!w) return null;
  if (WN(w)) return w;
  if (Tse(w)) {
    if (w.reason === "untrusted_device" && !r9()) return {
      terminal: !0,
      reason: "request_rejected",
      status: 403
    };
    return w;
  }
  return npe() ? {
    ...w,
    api_base_url: h
  } : w;
}

function Cs(n, h) {
  if (n === 403 || n === 404) return "superseded_unknown";
  if (n !== 4090) return;
  switch (h) {
   case "superseded_by_worker":
    return "superseded";

   case "session_not_active":
    return "session_archived";

   case "epoch_conflict":
   case void 0:
    return "superseded_unknown";

   case "epoch_stale":
   case "session_not_found":
   case "token_expired":
   case "auth_exhausted":
    return;
  }
}

function ks(n) {
  return n !== "session_archived";
}

function Ms(n, h) {
  return n === "skipped_superseded" ? h === "session_archived" ? "skipped_archived" : "skipped_superseded" : n === "skipped_owner_changed" ? "skipped_owner_changed" : n === "no_token" ? "skipped_no_token" : n === "invalid" ? "invalid_id" : n === "untrusted_device" ? "server_403_untrusted" : n === "timeout" || n === "error" ? "network_error" : n >= 500 ? "server_5xx" : n >= 400 ? "server_4xx" : "ok";
}

async function Yt(n, h, R, T, F, x, V) {
  if (jT(n)) return t(`[remote-bridge] Archive suppressed for teleported session ${n}`), 
  Br(n, V), 200;
  if (x === "owner_changed") return t(`[remote-bridge] Archive suppressed for owner-changed session ${n}`), 
  X("info", "bridge_repl_archive_suppressed_owner_changed"), "skipped_owner_changed";
  if (x !== void 0) return t(`[remote-bridge] Archive suppressed for ${x} session ${n}`), 
  X("info", x === "superseded" ? "bridge_repl_archive_suppressed_superseded" : x === "session_archived" ? "bridge_repl_archive_suppressed_archived" : "bridge_repl_archive_suppressed_superseded_unknown"), 
  "skipped_superseded";
  if (!R) return "no_token";
  let W = await nS().catch(() => {}), w = await htn(h, R, n, F, {
    useV2: lz(),
    orgUUID: T,
    trustedDeviceToken: W
  });
  if (Sn(w)) Br(n, V);
  return w;
}

var As = 8, Pd = 5e3, Od = 2e3;

async function Ps(n, h) {
  for (let R = 0; R < As; R++) {
    if (R > 0) await J(kx({
      baseMs: Pd,
      floorMs: Od,
      attempt: R - 1
    }), void 0, {
      unref: !0
    });
    let T = await h();
    if (Sn(T) || T === "untrusted_device") return;
    t(`[remote-bridge] Archive of abandoned session ${n} not confirmed (attempt ${R + 1}/${As}, status=${T})`);
  }
}

async function Id(n, h, R, T, F, x, V) {
  if (!R) return {
    outcome: "ok"
  };
  let W = await nS().catch(() => {}), w = await Tkr(h, R, n, F, {
    useV2: lz(),
    orgUUID: T,
    trustedDeviceToken: W
  });
  if (w === "invalid") return X("info", "bridge_repl_v2_unarchive_invalid_id"), {
    outcome: "gone",
    status: "invalid"
  };
  if (w === "untrusted_device" || w === "untrusted_device_no_enroll" || w === "session_stale_relogin") {
    if (w === "untrusted_device") {
      let Z = await pHt(W, oe => Tkr(h, R, n, F, {
        useV2: lz(),
        orgUUID: T,
        trustedDeviceToken: oe
      }), V);
      if (typeof Z === "number" && (Z < 300 || Z === 409)) return X("info", "bridge_repl_v2_unarchive_ok"), 
      {
        outcome: "ok"
      };
      if (Z === "untrusted_device_no_enroll") return X("info", "bridge_repl_v2_unarchive_elevated_auth"), 
      {
        outcome: "elevated_auth",
        reason: "untrusted_device",
        refusal: rjn
      };
    }
    if (X("info", "bridge_repl_v2_unarchive_elevated_auth"), w === "untrusted_device_no_enroll") return Ose("[remote-bridge]", rjn), 
    VN(), {
      outcome: "elevated_auth",
      reason: "untrusted_device",
      refusal: rjn
    };
    return {
      outcome: "elevated_auth",
      reason: w
    };
  }
  if (typeof w !== "number") return X("info", "bridge_repl_v2_unarchive_failed"), 
  null;
  let K = w < 300 || w === 409;
  if (X("info", K ? "bridge_repl_v2_unarchive_ok" : "bridge_repl_v2_unarchive_failed"), 
  K) return {
    outcome: "ok"
  };
  if (w === 400 || w === 403 || w === 404) return {
    outcome: "gone",
    status: w
  };
  if (w === 401) x?.();
  return null;
}

function qsr(n, h) {
  if (h <= 0 || n.length <= h) return n;
  let R = n.length - h;
  for (let {fromIdx: T, toIdx: F} of I$n(n)) if (R > T && R <= F) {
    R = T;
    break;
  }
  return n.slice(R);
}

function Dd(n) {
  if (n.type !== "user" || !Ntn(n) || Cn(n)) return !1;
  let h = n.message.content;
  return typeof h === "string" || !h.some(R => R.type === "tool_result");
}

function Os(n) {
  if (n.type !== "assistant" && n.type !== "user" || n.parent_tool_use_id == null || !yn(n)) return !1;
  return n.type === "user" || !n.message.content.some(h => h.type === "tool_use" && (h.name === gt || h.name === _p));
}

function Cn(n) {
  if (n.type !== "user" || !Vg(n)) return !1;
  let h = n.message.content;
  return typeof h === "string" ? cve.includes(h) : h.every(R => R.type !== "text" || cve.includes(R.text));
}

export { DZo, sCn, iCn, Ksr, LZo, aCn, uJr, NZo, cAe, qsr };
