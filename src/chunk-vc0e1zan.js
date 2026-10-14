// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { pm, Qr } from "./chunk-3pqddg8f.js";

import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { Ve, x, j, l, E, tb, W, jt } from "./chunk-b0z4bv3v.js";

import { lo, _M, gD, qc, ZG, zw, w$o, bL } from "./chunk-ddr690nj.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { bt, xf, RX, Nj, ei, qgt, uo, se, pL, t } from "./chunk-kawq2919.js";

import { I$t, Nt } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { TP, vO, ru, EO, Zd, Ud, F_, Jb } from "./chunk-9tdwgnpn.js";

import { no, $n, In, k } from "./chunk-xywp7esx.js";

import { lp, ht, qt, je, Rt } from "./chunk-s2t7g8m9.js";

import { X0, Es } from "./chunk-q6wab2jw.js";

import { vi, yj } from "./chunk-jnzpsr0d.js";

import { jn, bn } from "./chunk-1z2heevg.js";

import { sg, le } from "./chunk-cqgvwwgb.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { _Oe } from "./chunk-rgd61mm3.js";

import { jo } from "./chunk-nnrb0acr.js";

import { Y_, tin } from "./chunk-dd98x6x7.js";

import { xc } from "./chunk-qqd24q2y.js";

import { eg } from "./chunk-y3nc3daq.js";

import { de } from "./chunk-5ydr99q3.js";

import { joe, $h, OF, cz, uxe, rFe, j5e, idt, SO, io, rwr, K5e, q5e, Iue, RSe, xY, ih, nu, Yi, lFe, uFe } from "./chunk-4v78v8fd.js";

import { oT, DS } from "./chunk-f4r8hspx.js";

import { Tdt, kP, eK, Js, DF, Bue, bH, Exe, F8 } from "./chunk-77jtkrp2.js";

import { Zoe, KFn, zo, rd } from "./chunk-htg8b98h.js";

import { kns, LYt, Grt, W7r, l_e, Tlr, DAe, vQ, sot, TTt, $lr, RTt, Glr, iLe, Zu, UM, cot, rPn, ITt, BB, Wk, E3, zl, edr, sPn, VAe, qde, oqe, tIn, LIn } from "./chunk-84yp45y8.js";

import { mN, zNe, Nao, nhr, rhr, ZW, Fit, sRe, Vit, kDn, f7, pRe, WDn, pYe, PXt, Zms, cco, OYe, kco, Ki } from "./chunk-sqb9meyh.js";

import { Vl, am, Plt } from "./chunk-a6ee2sc5.js";

import { qe, cu, Qk, vR } from "./chunk-r8a304y3.js";

import { ju, Q$e, gf, D5e } from "./chunk-5sbf9djq.js";

import { Znr, xvt } from "./chunk-ce64fmea.js";

import { z2e } from "./chunk-kmph7cxf.js";

import { V_t, K_t } from "./chunk-07mr2m0v.js";

import { o1r, dXn, cXn } from "./chunk-4bekgrdt.js";

import { jTe, NA } from "./chunk-ns5zh457.js";

import { bJ, n5o } from "./chunk-52ew012a.js";

import { Ble, ZJo, eQo } from "./chunk-ppcb7f41.js";

import { kke, gjt, hjt, yjt, uXn, s1r, i1r, aJ, Qzo, _jt } from "./chunk-8jp8ebft.js";

import { DI } from "./chunk-cdky8pkh.js";

import { nGo, rGo, jgn, Wgn, fXn, zgn, cGo, uGo, pGo, Kte } from "./chunk-6f8yfkh2.js";

import { md } from "./chunk-35bwwb5f.js";

import { LD } from "./chunk-ckm7hazr.js";

import { Ys } from "./chunk-7fcp0cw9.js";

import { Dr } from "./chunk-10gv16xm.js";

import { Fl } from "./chunk-dc6j1jb5.js";

import { et } from "./chunk-59na0977.js";

import { Kn } from "./chunk-gmn1ce75.js";

import { ye } from "./chunk-ne9evs39.js";

import { O } from "./chunk-1xnsr4dy.js";

import { N, D } from "./chunk-hmqkrrtz.js";

import { we } from "./chunk-m8ez8fhk.js";

var pjt = new Set([ je, Rt, et, qt, ht ]);

var Eke = {
  approvalAttested: !1,
  modeDecidedByHost: !1
};

function Ngn(e, n) {
  if (!n) return e;
  return {
    ...e,
    sandbox: e.sandbox === "required" || n.sandbox === "required" ? "required" : "tool_default",
    background: e.background === "forbidden" || n.background === "forbidden" ? "forbidden" : "tool_default",
    pinCwd: e.pinCwd || n.pinCwd === !0,
    scrubCredentialEnv: e.scrubCredentialEnv || n.scrubCredentialEnv === !0,
    maxTimeoutMs: ar(e.maxTimeoutMs, n.maxTimeoutMs)
  };
}

function ar(e, n) {
  if (n === void 0 || n <= 0) return e;
  return e === void 0 ? n : Math.min(e, n);
}

import { isDeepStrictEqual as Ti } from "util";

function Te() {
  try {
    let {value: e, source: n} = In("tengu_ticklish_pnueli", !1);
    return e === !0 && n !== "override";
  } catch (e) {
    return d(Error("tengu_ticklish_pnueli could not be read", {
      cause: e
    })), !1;
  }
}

function Bn() {
  try {
    return k("tengu_violin_neck", !1) === !0;
  } catch {
    return !1;
  }
}

function rXn() {
  try {
    return k("tengu_violin_nut", !1) === !0;
  } catch {
    return !1;
  }
}

import { randomUUID as mr } from "crypto";

function Izo(e, n) {
  let o = "not_started";
  return {
    starts() {
      if (o === "not_started") o = "started", e.enter(n);
    },
    runsOn() {
      if (o === "started") e.enter(n);
    },
    waits() {
      if (o === "started") e.park(n);
    },
    ended() {
      o = "ended", e.end(n);
    }
  };
}

function en(e) {
  let n = new Set, o = 0;
  return {
    enter(r) {
      n.add(r), o += 1;
    },
    park(r) {
      n.delete(r);
    },
    end(r) {
      n.delete(r);
    },
    aloneWith(r) {
      return n.size === (n.has(r) ? 1 : 0) && e() === 0;
    },
    get starts() {
      return o;
    }
  };
}

var ZBr = 4, dr = 16, lr = 8192, cr = 1e3;

class nn {
  #e=new Map;
  #t=0;
  #o=0;
  #r=0;
  #n=new Map;
  get running() {
    return this.#e.size;
  }
  get runningOrBeingStopped() {
    return this.#e.size + this.#o;
  }
  stopAll(e) {
    this.#r++;
    for (let n of [ ...this.#e.values() ]) n(e);
  }
  holds(e) {
    return this.#e.has(e);
  }
  stop(e) {
    let n = this.#e.get(e);
    return n?.("caller_stopped"), n !== void 0;
  }
  async statusOf(e) {
    let n = this.#n.get(e);
    if (n === void 0) return;
    let o = await D5e(n.started.shellId, lr).then(r => r.content, () => {});
    return {
      command: {
        ...n
      },
      outputTail: o
    };
  }
  starterFor(e) {
    let n = this.#r, o = !1, r, s = () => {
      if (o) o = !1, this.#t--;
    }, u = () => e.lifetime.aborted || n !== this.#r || !e.enabled() ? "unavailable" : qe.getSandboxUnavailableReason() !== void 0 || qe.passesCheapSandboxGates() && !qe.isSandboxingEnabled() ? "sandbox_down" : void 0, p = () => {
      let y = u() ?? (!o && this.#e.size + this.#t >= e.max ? "full" : void 0);
      if (y === void 0) return;
      return f("remote_tool_serve_background", y), fXn(y, e);
    };
    return {
      started: () => r,
      settle: y => {
        if (s(), y && r !== void 0) this.#e.get(r.shellId)?.("call_stopped");
      },
      starter: {
        reserve: () => {
          let y = p();
          if (y === void 0 && !o) o = !0, this.#t++;
          return y;
        },
        adopt: (y, h, _) => {
          let w = o ? u() : "unavailable";
          s();
          try {
            if (w !== void 0) throw new x(fXn("unavailable", e), "served background command could not be owned");
            return r = this.#s(y, h, _, e), g("remote_tool_serve_background"), r.shellId;
          } catch (A) {
            throw m("remote_tool_serve_background", "not_owned"), y.kill(), y.cleanup(), A;
          }
        }
      }
    };
  }
  #s(e, n, o, r) {
    let s = e.taskOutput.taskId, u = ju(s);
    if (!e.background(s)) throw new x(fXn("unavailable", r), "served background command had already ended");
    let p = cco(n), y = {
      shellId: s,
      outputPath: u,
      limitMs: p
    }, h = {
      started: y,
      startedAt: Date.now()
    };
    this.#n.set(r.callId, h);
    let _ = !1, w = (P, Y) => {
      if (_) return;
      if (_ = !0, clearTimeout(I), clearInterval(B), r.lifetime.removeEventListener("abort", A), 
      this.#e.delete(s), h.ended = {
        how: P,
        exitCode: Y,
        at: Date.now()
      }, this.#n.delete(r.callId), P !== "call_stopped") {
        this.#n.set(r.callId, h);
        let K = [ ...this.#n ].filter(([, V]) => V.ended);
        for (let [V] of K.slice(0, -dr)) this.#n.delete(V);
      }
      try {
        r.onEvent(s, P);
      } catch (K) {
        d(j(K));
      }
      let te;
      try {
        if (P !== "exited") this.#o += 1, te = e.kill(), te.then(() => {
          this.#o -= 1;
        }, () => {});
        e.cleanup(), Q$e(s, P === "exited" ? `\n[exited with code ${Y}]\n` : `\n[stopped ${Wgn(P, r.targetName)}]\n`), 
        gf(s);
      } catch (K) {
        d(j(K));
      }
      L = L.then(() => te).then(() => dXn(s)).catch(K => d(j(K))).finally(v);
    }, A = () => w("serving_ended"), I = setTimeout(w, p, "time_limit").unref(), L = o1r({
      id: s,
      pid: e.pid,
      command: o,
      caller: r.caller,
      folder: r.folder
    }), B = setInterval(ur, cr, s, w).unref();
    r.lifetime.addEventListener("abort", A, {
      once: !0
    });
    let v = bt(() => (A(), L));
    return this.#e.set(s, w), e.result.then(async P => {
      await e.taskOutput.flush(), w("exited", P.code);
    }).catch(P => d(j(P))), r.onEvent(s, "started"), y;
  }
}

function ur(e, n) {
  cXn(e).then(o => {
    if (o) n("stopped_by_person");
  });
}

function Ozo() {
  let e = new Map;
  return {
    add(n, o) {
      if (!e.has(n)) e.set(n, o);
    },
    lines: () => [ ...e.values() ]
  };
}

function LL(e, n, o, r, s = {}) {
  let u = Zd(r);
  return {
    envelope: {
      v: ru,
      outcome: "refused",
      ...n.envelope && {
        call_id: n.envelope.call_id
      },
      target: e,
      code: o,
      ...s.reason !== void 0 && {
        reason: s.reason
      },
      ...s.limit !== void 0 && {
        limit: s.limit
      },
      message: u,
      ...s.notes !== void 0 && s.notes.length > 0 && {
        notes: s.notes
      }
    },
    content: [ {
      type: "text",
      text: u
    } ]
  };
}

function tn({target: e, callId: n, reason: o, message: r}) {
  let s = Zd(r);
  return {
    envelope: {
      v: ru,
      outcome: "refused",
      call_id: n,
      target: e,
      code: "withdrawn",
      reason: o,
      message: s
    },
    content: [ {
      type: "text",
      text: s
    } ]
  };
}

function O6(e, n, o, r, s = {}) {
  let u = Zd(r);
  return {
    envelope: {
      v: ru,
      outcome: "failed",
      ...n.envelope && {
        call_id: n.envelope.call_id
      },
      target: e,
      code: o,
      message: u,
      ...s.partial,
      ...s.notes !== void 0 && s.notes.length > 0 && {
        notes: s.notes
      }
    },
    content: [ {
      type: "text",
      text: u
    } ]
  };
}

function Vze(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}

function djt(e) {
  if (e?.envelope.outcome === "completed") {
    let {disposition: n} = e.envelope;
    return n === "ask_expired" || n === "denied_by_session" ? {
      state: "failed",
      code: n
    } : {
      state: "completed",
      isError: e.envelope.is_error
    };
  }
  if (e?.envelope.outcome === "needs_approval") return {
    state: "asked",
    askId: e.envelope.ask_id
  };
  return {
    state: "failed",
    ...(e?.envelope.outcome === "failed" || e?.envelope.outcome === "refused") && {
      code: e.envelope.code
    },
    ...e?.ranNothing === !0 && {
      ranNothing: !0
    },
    ...e?.envelope.outcome === "refused" && e.envelope.reason !== void 0 && e.envelope.reason !== "unrecognized" && {
      endedAs: e.envelope.reason
    }
  };
}

function fr(e, n) {
  if (n.state === "failed" && n.code === pYe) {
    let r = new Date(n.servedAt).toISOString().slice(11, 19);
    return `This call reached ${e} only after the session had been told (at ${r} UTC) that it never arrived here \u2014 it was not run.`;
  }
  return n.state === "failed" && n.code !== void 0 && (WDn.has(n.code) || n.code === "stale" || n.ranNothing === !0) ? `This request was already answered on ${e}: nothing was run for it (${Hn(n)}).` : `This call was already delivered to ${e} (${Hn(n)}) \u2014 it was not run again.`;
}

function Hn(e) {
  let n = new Date(e.servedAt).toISOString().slice(11, 19);
  switch (e.state) {
   case "received":
    return `it was received at ${n} UTC and is still being admitted`;

   case "running":
    return `it has been running since ${n} UTC`;

   case "asked":
    return `it has been waiting for the session's approval since ${n} UTC`;

   case "completed":
    return `it ${e.isError ? "completed with an error" : "completed"} at ${n} UTC`;

   case "failed":
    switch (e.code) {
     case "timed_out":
     case "cancelled":
      return e.ranNothing === !0 ? `it ended as ${e.code} at ${n} UTC` : `it ended as ${e.code} at ${n} UTC; if it had started, it may have partially run`;

     case f7:
      return `at ${n} UTC it joined the same command already under way here from an earlier request, since forgotten`;

     case pRe:
      return `its permission question was handed to a newer request for the same command at ${n} UTC`;

     case PXt:
      return `it was started here at ${n} UTC and Claude Code on this machine restarted before its outcome was recorded: it may have partially run`;

     default:
      return `it ended as ${e.code ?? "failed"} at ${n} UTC`;
    }
  }
}

function cjt(e, n) {
  let {envelope: o} = e;
  if (o.call_id === n) return e;
  if (o.outcome !== "needs_approval" || o.elicitation === void 0) return {
    ...e,
    envelope: {
      ...o,
      call_id: n
    }
  };
  let r = o.elicitation._meta[EO];
  return {
    ...e,
    envelope: {
      ...o,
      call_id: n,
      elicitation: {
        ...o.elicitation,
        _meta: {
          [EO]: {
            ...r,
            call_id: n
          }
        }
      }
    }
  };
}

function Mzo(e, n) {
  let {envelope: o} = e;
  switch (o.outcome) {
   case "completed":
   case "refused":
   case "failed":
    return {
      ...e,
      envelope: {
        ...o,
        replayed: !0,
        served_at: n
      }
    };

   default:
    return e;
  }
}

function Hzo({target: e, callId: n, state: o, sinceMs: r, hostEpoch: s, outputTail: u}) {
  let p = Math.max(0, Math.round(r / 1e3)), y = o === "running" ? `This call is still running on ${e.name} (received ${p} s ago); its outcome is not known yet.` : o === "admitting" ? `This call was received on ${e.name} ${p} s ago and is still being admitted; nothing has started yet.` : `This call is waiting on ${e.name} for the session's approval (received ${p} s ago); nothing has run yet.`;
  return {
    envelope: {
      v: ru,
      outcome: "in_progress",
      call_id: n,
      target: e,
      state: o,
      since_ms: Math.max(0, Math.floor(r)),
      host_epoch: s,
      ...u !== void 0 && {
        output_tail: u
      }
    },
    content: [ {
      type: "text",
      text: y
    } ]
  };
}

function Dzo({target: e, callId: n, hostEpoch: o}) {
  let r = o === void 0 ? `${e.name} has no record of this call (it may never have arrived, or its record here was dropped); nothing is running for it here now.` : `${e.name} has no record of this call: it never arrived here, or this machine's Claude Code has restarted since; nothing is running for it here.`;
  return {
    envelope: {
      v: ru,
      outcome: "refused",
      call_id: n,
      target: e,
      code: "unknown_call",
      message: r,
      ...o !== void 0 && {
        host_epoch: o
      }
    },
    content: [ {
      type: "text",
      text: r
    } ]
  };
}

function e1r(e, n, o) {
  if (o.state === "failed" && o.code === "withdrawn" && o.endedAs !== void 0) return tn({
    target: e,
    callId: n,
    reason: o.endedAs,
    message: o.endedMessage ?? Kte({
      targetName: e.name,
      reason: o.endedAs
    })
  });
  let s = [ {
    type: "text",
    text: fr(e.name, o)
  } ];
  return {
    envelope: {
      v: ru,
      outcome: "completed",
      call_id: n,
      target: e,
      is_error: !0,
      content: s,
      disposition: "duplicate_call"
    },
    content: s
  };
}

var on = "remote_call_ask_ended";

function $gn(e) {
  return {
    behavior: "deny",
    message: e,
    decisionReason: {
      type: "other",
      reason: on
    },
    decideLocation: "ask-path"
  };
}

function pr() {
  let e = new Map;
  return {
    register: o => void e.set(o.askId, o),
    take: o => {
      let r = e.get(o);
      return e.delete(o), r;
    },
    list: () => [ ...e.values() ],
    peek: o => e.get(o),
    findByCallId: o => [ ...e.values() ].findLast(r => r.callId === o),
    get size() {
      return e.size;
    }
  };
}

function rn(e, n, o, r) {
  let s = e.pendingAsks.take(n);
  if (s === void 0) return;
  if (s.callId !== void 0) o(s.callId, s);
  return s.windDown(), s.answer(r), s;
}

function Lzo(e, n, o) {
  rn(e, n, r => e.calls.remember(r, {
    state: "failed",
    code: "denied_by_session"
  }), o);
}

function Nzo(e, n, o, r) {
  return rn(e, n, s => e.calls.settle(s, o, djt(o)), r) !== void 0;
}

function Mge(e, n, o) {
  let r = rn(e, n, (s, u) => e.calls.settle(s, o.retain ?? tn({
    target: u.asked.envelope.target,
    callId: s,
    reason: o.reason,
    message: o.message
  }), {
    state: "failed",
    code: "withdrawn",
    endedAs: o.reason,
    endedMessage: Zd(o.message)
  }), $gn(o.message));
  if (r !== void 0) {
    if (r.raisedOver !== "relay" && o.countedByItsLeg !== !0) switch (o.reason) {
     case "host_unbound":
     case "host_stopped":
      f("remote_tool_serve", o.reason);
      break;

     case "evicted":
      f("remote_tool_serve", "ask_superseded");
      break;

     case "tool_withdrawn":
     case "stale_answer":
     case "replaced_by_retry":
      break;
    }
    md(r.callId, "ask ended", {
      ask_id: n,
      reason: o.reason
    }), e.onAskEnded?.({
      callerSessionId: e.callerSessionId,
      callId: r.callId,
      askId: n,
      reason: o.reason
    });
  }
}

var gr = 16;

function $zo(e, n) {
  if (n === void 0) return;
  let o = n.caller.conversation_id;
  if (o !== void 0 && !e.conversationIds.includes(o)) {
    if (e.conversationIds.length > 0) {
      if (e.cwd !== void 0) e.directoryReset = {
        from: e.cwd,
        at: Date.now()
      };
      e.cwd = void 0, e.readFileState.clear(), e.made.clear(), md(n.call_id, "caller conversation cleared: launch directory and read state reset");
    }
    Un(e.conversationIds, o);
  }
  let r = n.caller.compaction_id;
  if (r !== void 0 && !e.compactionIds.includes(r)) e.readFileState.clear(), Un(e.compactionIds, r), 
  md(n.call_id, "caller conversation compacted: read state reset");
}

function Un(e, n) {
  if (e.push(n), e.length > gr) e.shift();
}

function hr(e, n = {}) {
  let o = new nn;
  return {
    callerSessionId: e,
    readFileState: DS(oT),
    toolState: new LD,
    calls: Zms(n.callRecordBounds),
    pendingAsks: pr(),
    backgroundShells: o,
    made: new Map,
    activity: n.activity ?? en(() => o.runningOrBeingStopped),
    sessionPermissionUpdates: [],
    offeredStandingUpdates: [],
    cwd: void 0,
    directoryReset: void 0,
    conversationIds: [],
    compactionIds: [],
    createdAt: Date.now(),
    onAskEnded: n.onAskEnded
  };
}

var t1r = 20;

function Fzo(e = {}) {
  let n = e.limit ?? t1r, o = new Map, r = e.epoch ?? mr(), s = en(() => [ ...o.values() ].reduce((p, y) => p + y.backgroundShells.runningOrBeingStopped, 0)), u = p => {
    let y = hr(p, {
      callRecordBounds: e.callRecordBounds,
      onAskEnded: e.onAskEnded,
      activity: s
    });
    for (let h of e.priorCallsFor?.(p) ?? []) y.calls.seed(h);
    return o.set(p, y), y;
  };
  return {
    epoch: r,
    limit: n,
    peek: p => o.get(p),
    forCaller: p => o.get(p) ?? (o.size < n ? u(p) : void 0),
    heldAsk: (p, y) => {
      let h = o.get(p)?.pendingAsks.findByCallId(y);
      return h === void 0 ? void 0 : {
        toolName: h.toolName,
        evaluatedInput: h.evaluatedInput,
        startCwd: h.startCwd
      };
    },
    get size() {
      return o.size;
    }
  };
}

import { homedir as ft, hostname as Nr } from "os";

import { basename as mt, dirname as it, join as cn } from "path";

function zn() {
  try {
    let {value: e, source: n} = In("tengu_violin_eye", !1);
    return e === !0 && n !== "override";
  } catch (e) {
    return d(Error("tengu_violin_eye could not be read", {
      cause: e
    })), !1;
  }
}

var yr = 32, qn = e => e.replace(/\/\*\*$/, ""), Zn = e => N(e.split("/"), Boolean), _r = lo(e => {
  let n = e.map(qn);
  return n.every(o => o.startsWith("//") && !o.includes("**")) ? Math.max(0, ...n.map(Zn)) + 1 : void 0;
}, e => e.join("\0"));

function vr() {
  return Math.max(0, ...[ ...vO().physicalTwinsByPattern.values() ].flatMap(e => [ ...e ].map(n => Zn(qn(n))))) + 1;
}

var Sr = lo(e => new RegExp(`^/*[^/]+(?:/+[^/]+){${e - 1}}`));

function Vn(e, n) {
  return Sr(n).exec(e)?.[0] ?? e;
}

function Gn(e) {
  if (!kke() || O() === "windows") return e;
  let n = ot(e);
  if (Vn(n, yr) === n) return e;
  let o = _r(Fit());
  return o === void 0 ? e : Vn(n, Math.max(o, vr()));
}

function sn(e) {
  let n = Gn(e);
  if (sRe(n)) return !0;
  let o = Gn(e);
  return o !== n && sRe(o);
}

function Yn(e, n, o) {
  try {
    if ([ et, ht, qt ].some(u => zo(n, {
      name: u
    }) !== null || rd(n, {
      name: u
    }) !== null)) return "rule_or_settings";
    let r = ei(e);
    if (r.unresolved) return "unreadable";
    if ([ r.landing, ...r.spellings ].some(zw)) return "unreadable";
    if (!ih(r.landing, n, [ r.landing ], [ o ])) return "rule_or_settings";
    try {
      let u = se().statSync(r.landing);
      if (u.isDirectory()) return "folder";
      if (!u.isFile()) return "not_a_file";
      if (u.nlink !== 1) return "second_name";
    } catch (u) {
      if (!W(u)) return "unreadable";
    }
    if (r.spellings.some(u => [ "read", "edit" ].some(p => [ "deny", "ask" ].some(y => Yi(u, n, p, y) !== null)))) return "rule_or_settings";
    let s = Qk(e, n, "write", r);
    return !s.allowed && s.decisionReason !== void 0 ? "rule_or_settings" : void 0;
  } catch (r) {
    return d(Error("a served MCP relative name could not be checked", {
      cause: r
    })), "unreadable";
  }
}

var dn = we(joe(), 1);

import { homedir as nt } from "os";

import { join as kr } from "path";

function an() {
  if (O() !== "wsl") return [];
  return [ {
    literal: "/mnt",
    profilesGlob: "/?/Users/*",
    startsAt: []
  }, ...idt("/").flatMap(wr) ];
}

function wr({mountPoint: e, within: n}) {
  let [, o] = /^users\/[^/]+((?:\/[^/]+)*)$/i.exec(n) ?? [];
  if (o !== void 0) return [ {
    literal: e,
    profilesGlob: "",
    startsAt: o.split("/").filter(Boolean)
  } ];
  if (/^users$/i.test(n)) return [ {
    literal: e,
    profilesGlob: "/*",
    startsAt: []
  } ];
  if (n !== "") return [];
  return /\/[^/]$/.test(e) ? [ {
    literal: e.slice(0, -2),
    profilesGlob: "/?/Users/*",
    startsAt: []
  } ] : [ {
    literal: e,
    profilesGlob: "/Users/*",
    startsAt: []
  } ];
}

function oXn(e) {
  return an().some(({literal: n, profilesGlob: o, startsAt: r}) => r.length > 0 && e === n || e.startsWith(`${n}${o}/`));
}

function ln() {
  return [ ...Mr(), ...an().flatMap(({literal: e, profilesGlob: n, startsAt: o}) => Tr.flatMap(r => br(r, o)).map(r => ({
    literal: e,
    tail: `${n}${r}`
  }))) ];
}

function br(e, n) {
  let o = e.split("/"), r = n.join("/");
  if (n.length > 0 && !dn.default.isPathValid(r)) return [ "", "/**" ];
  if (n.length > 0 && !dn.default().add(`/${o.slice(0, n.length).join("/")}`).ignores(r)) return [];
  return n.length >= o.length ? [ "", "/**" ] : [ `/${o.slice(n.length).join("/")}` ];
}

var tt = [ ".ssh", ".aws", ".config/gcloud", ".azure", ".kube", ".gnupg", ".config/gh", ".config/glab-cli" ], rt = [ ".docker/config.json", ".netrc", ".git-credentials", ".config/git/credentials", ".npmrc", ".pypirc", ".cargo/credentials", ".cargo/credentials.toml", ".gem/credentials", ".pgpass", ".my.cnf", ".mylogin.cnf", ".terraform.d/credentials.tfrc.json", ".boto", ".s3cfg" ], Ar = [ "AppData/Roaming/gcloud", "AppData/Roaming/GitHub CLI", "AppData/Roaming/gnupg", "AppData/Local/glab-cli" ], Cr = [ "_netrc", "AppData/Roaming/postgresql/pgpass.conf", "AppData/Roaming/MySQL/.mylogin.cnf", "AppData/Roaming/terraform.d/credentials.tfrc.json", "AppData/Roaming/s3cmd.ini" ], Rr = [ ".claude" ], st = [ ".claude*.json" ], Er = st.flatMap(e => [ ...nhr(e).flatMap(n => [ n, `${n}.*` ]), ...rhr(e) ]), Pr = [ "AppData/Local/Microsoft/Credentials", "AppData/Local/Microsoft/Vault", "AppData/Roaming/Microsoft/Credentials", "AppData/Roaming/Microsoft/Vault", "AppData/Roaming/Microsoft/Protect" ];

function Or(e) {
  let n = e.replace(/^\.+/, "").replaceAll(" ", "").replace(/[+,;=[\]]/g, "_"), [, o = n, r = ""] = /^(.*)\.([^.]*)$/.exec(n) ?? [], s = o.replaceAll(".", "");
  if (`${s}${r && "."}${r}` === e && s.length <= 8 && r.length <= 3 && !e.includes("*")) return [];
  return [ s.slice(0, 6), `${s.slice(0, 2)}????` ].map(u => `${u}~?${r && "."}${r.slice(0, 3)}`.toUpperCase());
}

var Xn = [ ...tt, ...Ar, ...Rr, ...Pr ], Qn = [ ...rt, ...Cr, ...st ].flatMap(e => [ e, `${e}.*` ]), Tr = [ ...Xn.flatMap(e => [ e, `${e}/**` ]), ...Qn, ...Er, ...[ ...Xn, ...Qn ].flatMap(e => e.split("/").flatMap((n, o, r) => Or(n).map(s => [ ...r.slice(0, o), s ].join("/")))) ], Mr = lo(() => vi([ ...Jn(tt).flatMap(e => [ {
  literal: e,
  tail: ""
}, {
  literal: e,
  tail: "/**"
} ]), ...Jn(rt).flatMap(e => [ {
  literal: e,
  tail: ""
}, {
  literal: e,
  tail: ".*"
} ]) ], ({literal: e, tail: n}) => `${e}\0${n}`), () => nt());

function Jn(e) {
  return ZW(e.map(n => kr(nt(), n)));
}

var Hge = "hostCredential";

function pt() {
  let e = kke() ? [ ...zNe(), ...ln() ] : zNe();
  return [ ...vt(e), ...gt(e) ];
}

function gt(e) {
  return j5e().flatMap(({mountPoint: n, readOnly: o}) => Fit(yt(n, e)).flatMap(r => [ {
    toolName: et,
    ruleContent: r
  }, ...o ? [] : [ {
    toolName: ht,
    ruleContent: r
  } ] ]));
}

function yt(e, n) {
  return n.map(o => ({
    ...o,
    literal: `${e}${o.literal}`
  }));
}

function _t() {
  return [ ...vt(Nao()), ...gt(Nao()) ];
}

function vt(e) {
  let n = O(), o = n === "linux" || n === "wsl";
  return [ ...Fit(e).flatMap(r => [ {
    toolName: et,
    ruleContent: r
  }, {
    toolName: ht,
    ruleContent: r
  } ]), ...o ? [ {
    toolName: et,
    ruleContent: "//proc/**/environ"
  } ] : [], ...n === "windows" ? [ je, Rt ].flatMap(r => Ir.map(s => ({
    toolName: r,
    ruleContent: s
  }))) : be().flatMap(r => [ r, `/usr/bin/${r}` ]).map(Ot) ];
}

function be() {
  switch (O()) {
   case "macos":
    return [ "security" ];

   case "linux":
   case "wsl":
    return [ "secret-tool" ];

   case "windows":
    return Ie.flatMap(e => [ e, `${e}.exe` ]);

   default:
    return [];
  }
}

var Ie = [ "cmdkey", "vaultcmd" ], St = [ "PSCredentialManager", "BetterCredentials" ], wt = [ ...Ie, "CredRead", "CredReadDomainCredentials", "CredWrite", "CredWriteDomainCredentials", "CredDelete", "CredEnumerate", "CredFindBestCredential", "CredBackupCredentials", "CredRestoreCredentials", "vaultcli", "Get-StoredCredential", "New-StoredCredential", "Remove-StoredCredential", "Get-CredManCredential", "New-CredManCredential", "Remove-CredManCredential", ...St, "Find-Credential", "Test-Credential", "Set-Credential", "Remove-Credential", "Get-Secret", "Get-SecretInfo", "Set-Secret", "Set-SecretInfo", "Remove-Secret", "Get-SecretVault", "Register-SecretVault", "Unregister-SecretVault", "Unlock-SecretVault", "Test-SecretVault", "Set-SecretVaultDefault" ], Ir = Ie.map(e => `*${e}*`);

function xr(e) {
  if (Ie.includes(e)) return `${e}(?:\\.exe)?`;
  if (/^Cred/.test(e)) return `${e}[AW]?`;
  if (e === "vaultcli") return "vaultcli(?:\\.dll)?";
  if (St.includes(e)) return `${e}(?:\\.ps[dm]1|(?:\\.[A-Za-z0-9_]+)+)?`;
  let n = e.indexOf("-");
  return /(?:StoredCredential|CredManCredential)$/.test(e) ? `${e.slice(0, n)}-(?:[^\\s'"\`;&|(){}\\[\\],-]*|[^\\s'"\`;&|(){}\\[\\],]{0,64})${e.slice(n + 1)}` : e;
}

var Lr = new RegExp(`(?:^|[^A-Za-z0-9_])(?:${wt.map(e => `(${xr(e)})`).join("|")})\\.*(?![A-Za-z0-9_.-])`, "i"), Fr = /(?:^|[^A-Za-z0-9_])(?:(?:import|install|save|update|find|get)-module|ipmo|gmo|inmo|fimo|upmo|using[ \t]+(?:module|assembly)|#requires[ \t]+-(?:modules?|assembly)|(?:install|save|update|find)-psresource|(?:is|sv|ud|fd)res|(?:install|save|find)-package|get-command|gcm|add-type|loadfrom|loadfile|loadwithpartialname|unsafeloadfrom|loadfromassemblypath|loadfromstream|loadfromassemblyname|createinstancefrom|assemblyloadcontext)(?![A-Za-z0-9_-])|(?:assembly|activator|appdomain)\s*\]|reflection\s*\.\s*assembly|currentdomain|(?:^|[^A-Za-z0-9_])using[ \t]*(?:<#|`[\r\n])/i, Wr = /(?:^|[^A-Za-z0-9_])(?:(CredentialManager)|SecretManagement)(?![A-Za-z0-9_])/i, Br = /(?:^|[^$])(?:(Stored)|CredMan)Credential(?![A-Za-z0-9_])/i, $r = /(?:^|[^A-Za-z0-9_])PasswordVault(?![A-Za-z0-9_.])/i, Hr = /\[(?=\s*[\w.]*PasswordVault)|\[\s*(?:System\.)?Type\s*\]|New-Object|Credentials\.|(?:^|[^A-Za-z0-9_])-as(?:\s+[^\s;|&)-]|[^\sA-Za-z0-9_;|&)-])/i, Ur = /(?:^|[^A-Za-z0-9_])runas(?:\.exe)?(?![A-Za-z0-9_])/i, jr = /\/savecred(?![A-Za-z0-9_])/i, zr = /(?:^|[^A-Za-z0-9_-])(?:iex|invoke-expression)(?![A-Za-z0-9_-])|scriptblock\s*\]|invokescript|newscriptblock|addscript|expandstring/i, Vr = /(?:^|[^\w.-])(?:powershell|pwsh(?:-preview)?|cmd)(?:\.exe)?(?![\w-])/i;

function Gr(e) {
  return Vr.test(e) && /[($@{%!|]/.test(e);
}

var Kr = new RegExp(jTe.source.replace(/\\[tnr]| /g, "").replace(/\+$/, ""), "g"), qr = /[\u2013-\u2015]/g;

function kt(e) {
  return e.replace(Kr, " ").replace(qr, "-").replace(/[\u2018-\u201b]/g, "'").replace(/[\u201c-\u201e]/g, '"');
}

function At(e) {
  let n = kt(e), o = Lr.exec(n);
  if (o !== null) return wt[o.slice(1).findIndex(s => s !== void 0)];
  let r = zr.test(n) || Gr(n);
  if (Fr.test(n) || r) {
    let s = Wr.exec(n);
    if (s !== null) return s[1] !== void 0 ? "CredentialManager" : "SecretManagement";
    let u = Br.exec(n);
    if (u !== null) return u[1] !== void 0 ? "Get-StoredCredential" : "Get-CredManCredential";
  }
  if ($r.test(n) && (Hr.test(n) || r)) return "PasswordVault";
  if (Ur.test(n) && jr.test(n)) return "runas";
  return;
}

function Ct(e, n = "either") {
  let o = Et(e), r = Zr(e), s = n !== "powershell" || [ e, o, r ].some(u => {
    let p = Me(kt(u));
    return at.test(p) || at.test(Me(p.normalize("NFKC")));
  });
  return D([ e, o, r, ...s ? [ mn(o), mn(r) ] : [] ].flatMap(u => {
    let p = u.normalize("NFKC");
    return [ u, Me(u), p, Me(p) ];
  }));
}

var at = new RegExp(`(?:^|[\\s\\\\/'":&()|;,{}=-])(?:${[ ...bH ].filter(e => ![ "cmd", "powershell", "pwsh" ].includes(e)).join("|")})(?:\\.exe)?(?=[\\s'"|);}&,({]|$)|alias\\.[\\w-]+[ \\t]*(?:=[ \\t]*)?['"]?!`, "i");

function mn(e) {
  return e.replace(/\\\r?\n/g, "").replaceAll("\\", "");
}

function Me(e) {
  return e.replace(/\u0131/g, "i").replace(/\u017f/g, "s");
}

function Et(e) {
  return Pt(e, "");
}

function Zr(e) {
  return Pt(e, " ");
}

function Pt(e, n) {
  return Xr(NA(e.replace(/\^\r?\n/g, ""))).replace(/\$(?=["'])/g, "").replace(Jr, n);
}

var Yr = {
  n: `\n`,
  t: "\t",
  r: "\r",
  e: "\x1b"
};

function Xr(e) {
  return e.replace(/\$'((?:[^'\\]|\\.)*)'/g, (n, o) => `'${o.replace(/\\(?:x([0-9A-Fa-f]{1,2})|u([0-9A-Fa-f]{1,4})|U([0-9A-Fa-f]{1,8})|([0-7]{1,3})|(.))/g, (r, s, u, p, y, h) => {
    let _ = s !== void 0 ? parseInt(s, 16) : u !== void 0 ? parseInt(u, 16) : p !== void 0 ? parseInt(p, 16) : y !== void 0 ? parseInt(y, 8) : void 0;
    if (_ === void 0) return Yr[h ?? ""] ?? h ?? "";
    return _ <= 1114111 ? String.fromCodePoint(_) : "";
  })}'`);
}

var Jr = /["'`^\u2018-\u201e]/g;

function Ot(e) {
  return {
    toolName: je,
    ruleContent: `${e}:*`
  };
}

var es = 4;

async function Tt(e, n) {
  let {command: o} = n;
  if (typeof o !== "string") return;
  if (O() === "windows") {
    if (e.name !== je && e.name !== Rt) return;
    let s;
    for (let u of Ct(o, e.name === je ? "bash" : "powershell")) s ??= At(u);
    if (s !== void 0) return {
      source: Hge,
      ruleBehavior: "deny",
      ruleValue: {
        toolName: e.name,
        ruleContent: `*${s}*`
      }
    };
    return;
  }
  let [r] = be();
  return r !== void 0 && e.name === je && await xt(o, es) ? {
    source: Hge,
    ruleBehavior: "deny",
    ruleValue: Ot(r)
  } : void 0;
}

var ns = 8, ts = 512, os = 131072, rs = /^(?:\/|~(?:\/|$)|\.{1,2}(?:\/|$)|\$\{?HOME\}?(?:\/|$)|file:)/i, ss = /(^|[/\\])\.\.?([/\\]|$)/, un = /[/\\~*?[\]{}<>|;&`\x00-\x1f\x7f-\x9f\p{Cf}]|^\.|%(?=[0-9a-f]{2}|u[0-9a-f]{4})|\$(?=[\p{L}_{('"])|[@!+](?=\()|\+(?=[.~])|^[a-z][a-z0-9+.-]*:(?=\S)/iu, is = /^["'(<[{]+/, as = `"')>]}`, ds = ".,;:!?";

function ls(e) {
  return I$t(e.replace(is, ""), as);
}

function cs(e) {
  return /^[-+][a-zA-Z]+$/.test(e) && e.includes("c");
}

function us(e) {
  return e.slice(0, e.lastIndexOf("/") + 1);
}

var dt = /[,:=]+/, Mt = /[*?[\]{}()@+!\\]/, fs = /[\x00-\x1f\x7f-\x9f\p{Cf}\s"'`%#|<>;&,:=]/u, Ne = /[\t\n\v\f\r\x85\u2028\u2029]+/g, ms = /[\n\v\f\r\x85\u2028\u2029;&|]+/, ps = /^\$(?=['"])|['"\\]/g, gs = /^file:\/\/(?:localhost)?(?=\/)/i, hs = /^(https?):\/\/((?:[a-z0-9-]{1,63}\.)+[a-z][a-z0-9-]{0,62})(?::([1-9]\d{0,4}))?(\/(?:[\w-]+(?:\.[\w-]+)*(?:\/[\w-]+(?:\.[\w-]+)*)*\/?)?(?:\?[\w\-.=&]*)?(?:#[\w\-.]*)?)?$/i, lt = /^[A-Za-z_][\w-]*(?:\/[A-Za-z0-9_][\w-]*(?:\.[\w-]+)*)+$/, fn = /^(?![/~$]|[A-Za-z][A-Za-z0-9+.-]*:)\S*[/\\]\S*$/, ys = 512, _s = 16, vs = 16, Ss = /(?:^|\/)proc\/\d+(?:\/|$)/, ct = /^(?:(?:System\/)?Volumes\/)?Data(?:\/|$)/i, ws = /^(?:System\/)?Volumes\/Data(?:\/|$)/i, ks = /\/(?:System(?:\/Volumes)?|Volumes)$/i, bs = /\.(?:lan|home|corp|private|intranet|test|onion|arpa)$|(?:^|\.)(?:ts\.net|fritz\.box|xip\.io|rbndr\.us|1u\.ms|rebind\.it)$/, As = /(?:^|\.)\d+(?:\.|$)|(?:^|[.-])(?:0x|[0-9a-f]{8}(?:[.-]|$))|(?:^|[^0-9])\d+(?:[.-]\d+){2}/, Cs = 2048;

function pn(e, n, o) {
  if (e.isMcp !== !0) return;
  let r = O(), s = r === "macos", u = r === "linux" || r === "wsl", p = be(), y = zn(), h = Te(), _ = S => s ? io(S.normalize("NFC")) : r === "windows" ? cu(S).replaceAll("\\", "/") : S, w = ZW(D([ ...mN(), ...zNe().filter(({tail: S}) => S === "/**").map(({literal: S}) => S), ...a.CLAUDE_CODE_HOST_CREDS_FILE ? [ it(a.CLAUDE_CODE_HOST_CREDS_FILE) ] : [] ]).map(S => S.replace(/[\\/]+$/, ""))).map(_), A = S => ({
    kind: "deny",
    rule: {
      source: Hge,
      ruleBehavior: "deny",
      ruleValue: {
        toolName: et,
        ruleContent: S
      }
    }
  }), I = zNe().filter(({tail: S}) => S.startsWith("/")).map(({literal: S, tail: R}) => ({
    dir: _(S.replace(/[\\/]+$/, "")),
    segments: R.split("/").slice(1).map(T => new RegExp(`^${T.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*+/g, "[^/]*").replace(/\?/g, "[^/]")}$`, s ? "i" : ""))
  })), L = S => {
    let R = !1, T = uo(S), C = j5e(), H = new Map(C.flatMap(({mountPoint: z}) => T.filter(X => X === z || X.startsWith(`${z}/`)).map(X => [ X.slice(z.length) || "/", X ]))), M = D([ ...T, ...s ? [ ZG(S) ] : [], ...H.keys() ]);
    for (let z of M) {
      let X = _(z);
      if (sn(z) || (s || r === "windows") && sn(X) || u && /^\/proc\/.+\/environ$/.test(z) || w.some(ae => X === ae || X.startsWith(`${ae}/`))) return {
        under: H.get(z) ?? z
      };
      let oe = X.replace(/\/+$/, "");
      if (oe === "" || w.some(ae => ae.startsWith(`${oe}/`)) || C.some(({mountPoint: ae}) => ae.startsWith(`${oe}/`)) || I.some(({dir: ae, segments: fe}) => ae.startsWith(`${oe}/`) || oe === ae || oe.startsWith(`${ae}/`) && oe.slice(ae.length + 1).split("/").every((Se, he) => he < fe.length && fe[he].test(Se))) || u && /^\/proc(?:\/|$)/.test(oe) || s && /^\/(?:system(?:\/volumes(?:\/data)?)?|volumes)$/.test(oe) || /^\/dev(?:\/fd(?:\/|$)|$)/.test(oe)) R = !0;
    }
    return R ? "above" : "clear";
  }, B = r === "windows" ? D([ ...w, ...I.map(({dir: S}) => S) ].flatMap(S => /^([a-z]):\//.exec(S)?.slice(1) ?? [])) : [], v = S => {
    let R = ut(S);
    if (R !== void 0) {
      let C = /^[\\/](?![\\/])/.test(R) && !/^\/[a-z]\//i.test(R) ? [ R, ...B.map(M => `${M.toUpperCase()}:${R.replace(/\//g, "\\")}`) ] : [ R ], H;
      for (let M of C) {
        let z = L(M);
        if (z === "above") H = "ask"; else if (z !== "clear") return {
          deny: z.under
        };
      }
      return H;
    }
    let T = S.search(Mt);
    if (T > 0) {
      let C = us(S.slice(0, T)), H = C === "" ? void 0 : ut(C);
      if (H !== void 0) {
        let M = L(H);
        if (M !== "clear" && M !== "above") return {
          deny: `${M.under} (${S.slice(0, 128)})`
        };
      }
    }
    return "ask";
  }, P = S => {
    let R = S;
    for (let T = 0; T < 3; T++) {
      let C = ls(R), H = I$t(C, ds);
      if (H === "") return C || R;
      if (H === R) break;
      R = H;
    }
    return R;
  }, Y = S => {
    let R = P(S);
    return [ R, ...R.split(dt), ...S.split(dt) ].some(T => T !== "" && T !== S && un.test(P(T)));
  }, te, K = () => te ??= [ ...w.map(S => ({
    dir: S,
    segments: []
  })), ...I, {
    dir: "/dev/fd",
    segments: []
  }, ...u ? [ {
    dir: "/proc",
    segments: [ /^(?:self|thread-self)$/ ]
  } ] : [], ...zNe().filter(({tail: S}) => !S.startsWith("/")).map(({literal: S, tail: R}) => R === "" ? {
    dir: _(S),
    segments: []
  } : {
    dir: _(it(S)),
    segments: [ new RegExp(`^${mt(S).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\.[^/]*$`, s ? "i" : "") ]
  }) ], V, U = new Map, q = S => {
    let R = Qr() ?? pm();
    return D([ ...R === null ? [] : [ R ], ...bJ(), ...n5o(), ...S.additionalWorkingDirectories.keys(), _Oe() ]);
  }, ce = (S, R) => {
    let T = q(R), C = S.split("/"), H = [ S ];
    if (s) for (let M = 0; M < C.length; M++) {
      let z = C.slice(M).join("/");
      if (M > 0 && !ws.test(z)) continue;
      while (ct.test(z)) z = z.replace(ct, ""), H.push(z);
    }
    if ([ ...H.map(M => `/${M}`), ...C.map((M, z) => `/${C.slice(z).join("/")}`), ...T.map(M => cn(M, S)) ].some(M => zw(M) || gD(M, s ? "darwin" : "linux"))) return "unreadable";
    if (s && ks.test(S) || H.some(M => L(`/${M}`) !== "clear" || L(cn(ft(), M)) !== "clear" || Rs(_(M), K()) || Ps(_(M), K()) || u && Ss.test(M))) return "guarded_place";
    for (let M of T) {
      let z = cn(M, S), X = L(z) === "clear" ? Yn(z, R, M) : "guarded_place";
      if (X !== void 0) return X;
    }
    return;
  }, ue = S => {
    if (!fn.test(S)) return;
    try {
      if (S.length > ys || !lt.test(S) || Nt(S, "/") + 1 > vs) return "not_plain_name";
      let R = U.get(S);
      if (R !== void 0) return R;
      let T = S.slice(0, S.indexOf("/")).toLowerCase();
      if (Ble(T) || eQo(T, Nr())) return "host_like";
      if (r !== "macos" && r !== "linux") return "platform";
      if (o === void 0) return "unreadable";
      if (U.size >= _s) return "too_many";
      let C = ce(S, o) ?? "relative_path";
      return U.set(S, C), C;
    } catch (R) {
      return d(Error("a served MCP relative name could not be judged", {
        cause: R
      })), "unreadable";
    }
  }, ge = (S, R) => {
    if (V = void 0, S === "") return;
    if (!/\s/.test(S)) {
      let T = un.test(S) ? v(S) : Y(S) ? "ask" : void 0;
      if (T !== "ask") return T;
      if (y && Os(S)) {
        let H = URL.parse(S)?.pathname;
        return H === "/" || H !== void 0 && v(H) === void 0 && v(`~${H}`) === void 0 ? "web_address" : "ask";
      }
      let C = !h ? void 0 : S === R ? ue(S) : fn.test(S) ? "not_plain_name" : void 0;
      if (C === "relative_path") return "relative_path";
      return V = C, "ask";
    }
    if (rs.test(S)) return "ask";
    for (let T of S.split(/\s+/)) {
      let C = P(T);
      if (un.test(C) ? v(C) !== void 0 : Y(T)) return V = !h ? void 0 : lt.test(T) ? "in_sentence" : fn.test(T) ? "not_plain_name" : void 0, 
      "ask";
    }
    return;
  }, F, G = !1, Q = !1, Z = 0, re = 0;
  for (let S of Dt(n, ns)) {
    if (S === It || ++Z > ts) return A("(nested input this machine could not inspect)");
    let R = S.normalize("NFKC");
    for (let T of D([ S, R ].flatMap(C => [ C.replace(Ne, " ").trim(), C.replace(Ne, "").trim() ]))) {
      let C = ge(T, S);
      if (C === "ask") {
        if (F === void 0) F = {
          kind: "ask",
          spelling: T.slice(0, 256),
          ...V !== void 0 && {
            why: V
          }
        };
      } else if (C === "relative_path") Q = !0; else if (C === "web_address") G = !0; else if (C !== void 0) return A(C.deny);
    }
    if (r === "windows" && F === void 0 && ((re += Math.max(S.length, R.length)) > os || D([ S, R ].flatMap(T => [ T.replace(Ne, " "), T.replace(Ne, "") ])).some(T => Ct(T).some(C => At(C) !== void 0)))) F = {
      kind: "ask",
      spelling: R.slice(0, 256)
    };
    if (p.length > 0 && F === void 0) for (let T of R.split(ms)) {
      let C = T.trim().split(/\s+/).filter(Boolean).map(M => P(M).replace(ps, "")), H = C.length < 2 ? C : Lt(C);
      if (H === void 0 || H.length >= 2 && p.includes(H[0])) {
        F = {
          kind: "ask",
          spelling: T.trim().slice(0, 256)
        };
        break;
      }
    }
  }
  return F ?? (Q ? {
    kind: "relative_path"
  } : G ? {
    kind: "web_address"
  } : void 0);
}

function Rs(e, n) {
  let o = e.split("/");
  return n.some(({dir: r, segments: s}) => {
    let u = r.split("/").filter(Boolean), p = u.length + s.length, y = (_, w) => _ < u.length ? u[_] === w : s[_ - u.length].test(w), h = _ => _ < u.length || !y(_, "");
    for (let _ = 0; _ < p; _++) {
      let w = o.slice(0, p - _);
      if (w.some((A, I) => h(_ + I)) && w.every((A, I) => y(_ + I, A))) return !0;
    }
    return !1;
  });
}

function Ps(e, n) {
  let o = e.split("/");
  return n.some(({dir: r, segments: s}) => {
    let u = r.split("/").filter(Boolean), p = u.findLastIndex(w => w.startsWith(".")) + 1, y = u.length + s.length, h = (w, A) => w < u.length ? u[w] === A : s[w - u.length].test(A), _ = w => w < u.length || !h(w, "");
    for (let w = 1; w < o.length; w++) for (let A = 0; A < y; A++) {
      let I = o.slice(w, w + y - A), L = A + I.length < p;
      if ((A >= p || L) && N([ ...I.keys() ], B => _(A + B)) >= (p === 0 || L ? 1 : 2) && I.every((B, v) => h(A + v, B))) return !0;
    }
    return !1;
  });
}

function ut(e) {
  let n = e;
  if (/^file:/i.test(n)) {
    let o = gs.exec(n);
    if (o === null) return;
    n = n.slice(o[0].length);
  }
  if (n = n.replace(/^\$\{?HOME\}?(?=\/|$)/, "~"), n === "~") n = "~/";
  if (O() === "windows") {
    if (n = (n[0] ?? "") + n.slice(1).replace(/[\\/]{2,}/g, "/"), n = n.replace(/^([A-Za-z]):[\\/]/, (o, r) => `/${r.toLowerCase()}/`).replace(/^\/(?:proc\/cygdrive|cygdrive|mnt)\/(?=[a-z](?:\/|$))/i, "/").replace(/^\/([A-Za-z])$/, "/$1/").replace(/^\/([A-Z])\//, (o, r) => `/${r.toLowerCase()}/`), 
    /^\/[a-z]\//.test(n)) n = n.replaceAll("\\", "/");
    if (/^[\\/]{2}/.test(n) || /^\/(?:mnt|cygdrive)\/?$/i.test(n) || /^\/proc(?:\/|$)/i.test(n)) return;
  }
  if (n = O() === "windows" && /^\/[a-z]\/+$/i.test(n) ? n.replace(/\/+$/, "/") : n.replace(/(?<=[^/])\/+$/, ""), 
  !/^(?:\/|~\/)/.test(n) || fs.test(n) || Mt.test(n) || n.includes("$") || n.includes("~", 1) || ss.test(n.slice(1))) return;
  return ot(n, ft());
}

function Os(e) {
  let n = e.length > Cs ? null : hs.exec(e);
  if (n === null) return !1;
  let o = n[1].toLowerCase(), r = n[2].toLowerCase(), s = n[4] ?? "/";
  if (ZJo(r) || Ble(r) || bs.test(r) || As.test(r) || /[?#&=]\./.test(s)) return !1;
  let u = n[3] === void 0 || n[3] === (o === "https" ? "443" : "80") ? "" : `:${n[3]}`, p = URL.parse(e);
  return p !== null && p.href === `${o}://${r}${u}${s}` && p.hostname === r;
}

var It = Symbol("depth-exhausted");

function* Dt(e, n) {
  if (typeof e === "string") {
    yield e;
    return;
  }
  if (e === null || typeof e !== "object") return;
  let o = Array.isArray(e) ? e.map(r => [ "", r ]) : Object.entries(e);
  if (n <= 0) {
    if (o.length > 0) yield It;
    return;
  }
  for (let [r, s] of o) {
    if (r !== "") yield r;
    yield* Dt(s, n - 1);
  }
}

async function xt(e, n) {
  let o = await gjt(e);
  if (o.kind !== "simple") return !1;
  for (let r of o.commands) {
    let s = Lt(r.argv);
    if (s === void 0) return !0;
    let [u = "", ...p] = s;
    if (be().includes(u)) return !0;
    let y = u.replace(/\.exe$/, "");
    if (!bH.has(y)) continue;
    if (!Bue.has(y)) {
      if (p.some(h => {
        let _ = mn(Et(h)), w = O() === "macos" ? _.toUpperCase().toLowerCase() : _;
        return be().some(A => w.includes(A));
      })) return !0;
      continue;
    }
    if (!p.some(cs)) continue;
    if (n <= 1) return !0;
    for (let h of p) if (await xt(h, n - 1)) return !0;
  }
  return !1;
}

function Lt(e) {
  let n = O(), o = n === "macos" || n === "windows", r = [ ...e ];
  for (let s = 0; s < 32; s++) {
    let u = mt(r[0] ?? "");
    r[0] = o ? u.toUpperCase().toLowerCase() : u;
    let p = r[0] === "env" ? Ts(r) : void 0;
    if (p !== void 0) {
      r = p;
      continue;
    }
    let y = sot(r), h = y.length !== r.length || y[0] !== r[0];
    if (h && !/^[-+\d]/.test(y[0] ?? "")) {
      r = y;
      continue;
    }
    if (!Exe.has(r[0]) || r[0] === "command" && r.some(Tdt)) return h ? y : r;
    let _ = r.findIndex((w, A) => A > 0 && !/^(?:[-+]|\d+(?:\.\d+)?[smhd]?$|[A-Za-z_]\w*=)/.test(w));
    if (_ < 1) return r;
    r = r.slice(_);
  }
  return;
}

function Ts(e) {
  for (let n = 1; n < e.length; n++) {
    let o = e[n], r = o.startsWith("--split-string=") ? o.slice(15) : /^-[^-]*S/.test(o) ? o.slice(o.indexOf("S") + 1) : void 0, s = o === "--split-string" || r === "", u = s ? e[n + 1] ?? "" : r;
    if (u !== void 0) return [ ...u.trim().split(/\s+/).filter(Boolean), ...e.slice(n + (s ? 2 : 1)) ];
    if ([ "-u", "-C", "--unset", "--chdir" ].includes(o)) n++; else if (o === "--" || !/^(?:-|[A-Za-z_]\w*=)/.test(o)) return;
  }
  return;
}

function gn(e) {
  if (e?.type === "rule") return e.rule.source === Hge ? e.rule : void 0;
  if (e?.type === "subcommandResults") for (let n of e.reasons.values()) {
    let o = gn(n.decisionReason);
    if (o !== void 0) return o;
  }
  return;
}

function Uzo(e, n, o, r) {
  if (e.getPath === void 0) return;
  let s = F_(e, n);
  if (!s.success) return;
  let u = sg(r, () => e.getPath?.(s.data));
  if (typeof u !== "string" || u === "") return;
  let p = e.isReadOnly(s.data) ? [ "read", "edit" ] : [ "edit", "read" ], y = uo(ot(u, r)), h = O() === "macos" ? y.flatMap(_ => [ _, io(_) ]) : y;
  for (let _ of h) for (let w of p) {
    let A = Yi(_, o, w, "deny");
    if (A?.source === Hge) return A;
  }
  return;
}

function B_t(e) {
  let n = e.ruleValue.ruleContent ?? "";
  return n.startsWith("//") ? n.slice(1) : n;
}

function sXn(e) {
  let n = B_t(e);
  return Fit(j5e().map(({mountPoint: o}) => ({
    literal: o,
    tail: ""
  }))).some(o => n.startsWith(`${o.slice(1)}/`));
}

function Fgn(e) {
  if (e.ruleValue.toolName === je || e.ruleValue.toolName === Rt) return "keychain";
  let n = e.ruleValue.ruleContent ?? "", o = ln();
  if (Fit([ ...o, ...j5e().flatMap(({mountPoint: r}) => yt(r, o)) ]).includes(n)) return "personal_credential";
  if (/\/daemon\/dispatch\/\*\*$/.test(n)) return "exec_ingest";
  if (/\/Library\/Keychains\/\*\*$/.test(n)) return "keychain_files";
  if (/\/Microsoft\/(?:Credentials|Vault|Protect)\/\*\*$/.test(n)) return "credential_store_files";
  return e.ruleValue.toolName === ht ? "write" : "read";
}

import { createHash as js } from "crypto";

import { constants as Qt } from "fs";

import { basename as Jt, dirname as zs, join as Vs, relative as Gs, sep as yn } from "path";

var Ms = "tengu_tranquil_nebula";

function ujt() {
  return Fl(Ms, {
    safe: !1
  });
}

import { createHash as zt } from "crypto";

import { open as Ns } from "fs/promises";

import { dirname as Ft, join as Is, resolve as Ds, sep as Wt } from "path";

var xs = 512, Bt = 1048576, Ls = 16, Fs = 16, Ws = 64, Bs = new Set([ "command", "description", "timeout", "run_in_background", "dangerouslyDisableSandbox" ]);

function Vt(e, n, o) {
  let r = Gt(o);
  return r === void 0 ? void 0 : De(e, n, o, r);
}

function Gt(e) {
  let n = ei(e);
  return n.unresolved ? void 0 : n.landing;
}

function De(e, n, o, r) {
  if (e === "" || e.startsWith("~") || e.endsWith("/") || e.endsWith(Wt) || Js(e) || [ ...e ].some(p => p < " " || p === "\x7f")) return;
  let s = vR(e, n, {
    ...Ud(),
    additionalWorkingDirectories: new Map([ [ o, {
      path: o,
      source: "session"
    } ] ])
  }, "write");
  if (s.allowed || s.isInWorkingDir !== !0 || s.decisionReason !== void 0) return;
  let u = ei(Ds(n, e));
  if (u.unresolved || u.leafIsSymlink || uFe(u) !== null || !u.landing.startsWith(r + Wt) || !nu(u.landing, o)) return;
  return u.landing;
}

async function hn(e, n) {
  let o = e.command;
  if (typeof o !== "string" || e.run_in_background === !0 || e.dangerouslyDisableSandbox === !0 || Object.keys(e).some(p => e[p] !== void 0 && !Bs.has(p))) return;
  let r = await DF(o);
  if (r.kind !== "simple" || r.commands.length !== 1 || r.bareAssignmentNames.length > 0) return;
  let s = r.commands[0], u = s?.argv[0];
  return s !== void 0 && u !== void 0 && n.includes(u) && s.argvSourceLiteral === !0 && !s.hasUnquotedGlob && s.envVars.length === 0 && s.redirects.length === 0 && !s.argv.some(Js) && o === s.argv.join(" ") ? s : void 0;
}

async function Bzo(e) {
  if (!e.activity.aloneWith(e.callId)) return;
  let {starts: n} = e.activity, o = Gt(e.launchDir), r = o === void 0 ? void 0 : await $s(e.tool, e.input, e.cwd, e.launchDir, o);
  if (o === void 0 || r === void 0) return;
  let s = r.by === "shell" ? r.paths : [ r.path ], u = [];
  for (let _ of Hs(s, e.launchDir, o)) if (await Ae(_) === "absent") u.push(_);
  let p = r.by === "shell" ? void 0 : r.path, y = p === void 0 ? void 0 : e.record.get(p), h = p !== void 0 && y !== void 0 && await Kt(y, p) ? p : void 0;
  return u.length === 0 && h === void 0 ? void 0 : {
    nomination: r,
    absent: u,
    rewritten: h,
    starts: n
  };
}

async function jzo(e) {
  let {look: n, record: o} = e;
  if (!$t(e)) return;
  let {nomination: r} = n, s = new Map;
  for (let h of n.absent.toSorted((_, w) => w.length - _.length)) {
    let _ = await Ae(h);
    if (_ === "absent" || _ === "unseen") continue;
    let w = _.isDirectory() ? await Us(h, _, s) : await Ut(h, _, r.by === "write" && h === r.path ? r.sha256 : "empty");
    if (w !== void 0) s.set(h, w);
  }
  let {rewritten: u} = n, p = u === void 0 ? void 0 : o.get(u), y;
  if (u !== void 0 && r.by === "write") {
    let h = await Ae(u), _ = h === "absent" || h === "unseen" ? void 0 : await Ut(u, h, r.sha256);
    if (_ !== void 0) s.set(u, _); else if (p === void 0 || !await Kt(p, u)) y = u;
  }
  if (!$t(e)) return;
  if (y !== void 0) o.delete(y);
  for (let [h, _] of s) o.delete(h), o.set(h, _);
  for (let h of o.keys()) {
    if (o.size <= xs) break;
    o.delete(h);
  }
}

async function Kt(e, n) {
  let o = await Ae(n);
  if (o === "absent" || o === "unseen" || o.dev !== e.dev || o.ino !== e.ino || o.birthtimeNs !== e.birthtimeNs) return !1;
  if (e.kind === "dir") return o.isDirectory() && await Zt(n) && await Yt(n, o);
  return o.isFile() && o.nlink === 1n && o.size === e.size && o.mtimeNs === e.mtimeNs && o.ctimeNs === e.ctimeNs && await Xt(n, o) === e.sha256;
}

function $t(e) {
  return e.activity.starts === e.look.starts && e.activity.aloneWith(e.callId);
}

async function $s(e, n, o, r, s) {
  if (e.name === je) {
    let p = await hn(n, [ "mkdir", "touch" ]), y = p?.argv[0];
    if (p === void 0 || y !== "mkdir" && y !== "touch") return;
    let h = vQ[y](p.argv.slice(1));
    if (h.length === 0 || h.length > Ls) return;
    let _ = h.flatMap(w => De(w, o, r, s) ?? []);
    return _.length === 0 ? void 0 : {
      by: "shell",
      paths: _
    };
  }
  if (e.name !== qt) return;
  let u = typeof n.file_path === "string" ? De(n.file_path, o, r, s) : void 0;
  if (u === void 0) return;
  return typeof n.content === "string" ? {
    by: "write",
    path: u,
    sha256: zt("sha256").update(n.content, "utf8").digest("hex")
  } : void 0;
}

function Hs(e, n, o) {
  let r = new Set(e);
  for (let s of e) {
    let u = Ft(s);
    for (let p = 1; p < Fs; p++) {
      if (r.has(u) || De(u, n, n, o) !== u) break;
      r.add(u), u = Ft(u);
    }
  }
  return [ ...r ];
}

async function Ae(e) {
  try {
    return await se().lstatBigint(e);
  } catch (n) {
    return W(n) ? "absent" : "unseen";
  }
}

async function Zt(e) {
  try {
    return await se().openDirNoFollow(e), !0;
  } catch {
    return !1;
  }
}

async function Yt(e, n) {
  let o = await Ae(e);
  return o !== "absent" && o !== "unseen" && o.dev === n.dev && o.ino === n.ino && o.birthtimeNs === n.birthtimeNs;
}

async function Xt(e, n) {
  if (n.size > BigInt(Bt)) return;
  try {
    let o = await Ns(e, RX());
    try {
      let r = await o.stat({
        bigint: !0
      });
      if (!Ht(r, n)) return;
      let s = await pL(o, Bt + 1, "file"), u = await o.stat({
        bigint: !0
      });
      return Ht(u, n) && BigInt(s.length) === u.size ? zt("sha256").update(s).digest("hex") : void 0;
    } finally {
      await o.close();
    }
  } catch {
    return;
  }
}

function Ht(e, n) {
  return e.isFile() && e.dev === n.dev && e.ino === n.ino && e.ctimeNs === n.ctimeNs;
}

async function Ut(e, n, o) {
  if (!n.isFile() || n.nlink !== 1n || o === "empty" && n.size !== 0n) return;
  let r = await Xt(e, n);
  return r === void 0 || o !== "empty" && o !== r ? void 0 : {
    kind: "file",
    dev: n.dev,
    ino: n.ino,
    birthtimeNs: n.birthtimeNs,
    size: n.size,
    mtimeNs: n.mtimeNs,
    ctimeNs: n.ctimeNs,
    sha256: r
  };
}

async function Us(e, n, o) {
  if (n.birthtimeNs <= 0n || !await Zt(e)) return;
  try {
    let r = await se().readdir(e);
    return r.length <= Ws && r.every(s => o.has(Is(e, s.name))) && await Yt(e, n) ? {
      kind: "dir",
      dev: n.dev,
      ino: n.ino,
      birthtimeNs: n.birthtimeNs
    } : void 0;
  } catch {
    return;
  }
}

var Ks = 16, qs = 256, Zs = 4194304, Xs = new Set([ "--recursive", "--force", "--dir", "--verbose" ]), oo = ":";

function Wzo(e) {
  let n = (p, y) => i("tengu_remote_tool_serve", {
    op: b("own_made_delete"),
    call_id: ye(e.rowCallId),
    outcome: c(p),
    why: pe(y)
  }), o = async (p, y) => {
    if (e.sandboxRequired) return {
      proven: !1,
      why: "sandbox_required"
    };
    if (iLe()) return {
      proven: !1,
      why: "owner_rules"
    };
    if (!e.activity.aloneWith(e.callId)) return {
      proven: !1,
      why: "busy"
    };
    try {
      if (xc() || qe.isSandboxingEnabled()) return {
        proven: !1,
        why: "sandbox_on"
      };
      let h = await Qs({
        ...e,
        tool: p,
        input: y
      });
      if (!h.proven) return h;
      let _ = e.masks();
      if (!_.vouched) return {
        proven: !1,
        why: "masks_unread"
      };
      let w = _.paths.map(A => {
        let I = am(A);
        if (!Vl(A)) return B => nu(B, I);
        let L = new RegExp(Plt(I), "i");
        return B => nu(B, I) || L.test(B);
      });
      return [ ...h.files, ...h.folders ].some(A => w.some(I => I(A))) ? {
        proven: !1,
        why: "masked"
      } : h;
    } catch (h) {
      return eo(h), {
        proven: !1,
        why: "threw"
      };
    }
  }, r = new Set, s = p => {
    if (p.proven) for (let y of [ ...p.files, ...p.folders ]) r.add(y);
    return p;
  }, u = () => {
    for (let p of r) e.record.delete(p);
  };
  return {
    isOn: ujt,
    async prove(p, y) {
      if (!ujt()) return !1;
      let h = s(await o(p, y));
      return n(h.proven ? "released" : "unproven", h.proven ? void 0 : h.why), h.proven;
    },
    async remove(p, y) {
      if (!ujt()) return "none";
      let h = s(await o(p, y));
      if (!h.proven) return u(), n("kept", h.why), "none";
      let {removed: _, why: w} = await ni({
        ...e,
        ...h
      }).catch(A => (eo(A), {
        removed: 1,
        why: "threw"
      }));
      if (u(), w === void 0) return n("removed"), "all";
      return n(_ === 0 ? "kept" : "part_removed", w), _ === 0 ? "none" : "some";
    }
  };
}

async function Qs(e) {
  if (O() === "windows") return {
    proven: !1,
    why: "platform"
  };
  if (e.tool.name !== je) return {
    proven: !1,
    why: "not_shell"
  };
  let n = await hn(e.input, [ "rm" ]);
  if (n === void 0) return {
    proven: !1,
    why: "shape"
  };
  let o = n.argv.slice(1), r = o.findIndex(v => !v.startsWith("-")), s = r === -1 ? o : o.slice(0, r), u = r === -1 ? [] : o.slice(r);
  if (u.some(v => v.startsWith("-")) || !s.every(v => /^-[rRfdv]+$/.test(v) || Xs.has(v))) return {
    proven: !1,
    why: "flag"
  };
  let p = vQ.rm(o);
  if (u.length === 0 || p.length !== u.length || p.some((v, P) => v !== u[P])) return {
    proven: !1,
    why: "shape"
  };
  if (u.length > Ks) return {
    proven: !1,
    why: "too_many"
  };
  let y = s.some(v => v === "--recursive" || /^-[a-zA-Z]*[rR]/.test(v)), h = y || s.some(v => v === "--dir" || /^-[a-zA-Z]*d/.test(v)), _ = [];
  for (let v of u) {
    let P = v.slice(v.lastIndexOf("/") + 1), Y = P === "." || P === ".." ? void 0 : Vt(v, e.cwd, e.launchDir);
    if (Y === void 0) return {
      proven: !1,
      why: "operand"
    };
    if (e.record.get(Y) === void 0) return {
      proven: !1,
      why: "no_record"
    };
    _.push(Y);
  }
  let w = await ro(e.launchDir);
  if (w === void 0) return {
    proven: !1,
    why: "no_held_folder"
  };
  await using A = w.anchor;
  let I = new Set, L = new Set, B = 0n;
  for (let v = _.pop(); v !== void 0; v = _.pop()) {
    if (I.has(v) || L.has(v)) continue;
    if (I.size + L.size >= qs) return {
      proven: !1,
      why: "too_many"
    };
    let P = e.record.get(v);
    if (P === void 0) return {
      proven: !1,
      why: "unrecorded_entry"
    };
    if (P.kind === "file") {
      if (B += P.size, B > BigInt(Zs)) return {
        proven: !1,
        why: "too_large"
      };
      if (!await _n(w, v, P, "kept")) return e.record.delete(v), {
        proven: !1,
        why: "changed"
      };
      I.add(v);
      continue;
    }
    let Y = await so(w, v, P);
    if (Y === void 0) return e.record.delete(v), {
      proven: !1,
      why: "changed"
    };
    if (!h || !y && Y.length > 0) return {
      proven: !1,
      why: "flag"
    };
    L.add(v), _.push(...Y);
  }
  return {
    proven: !0,
    files: [ ...I ],
    folders: [ ...L ].toSorted((v, P) => P.length - v.length)
  };
}

async function ni(e) {
  let n = await ro(e.launchDir);
  if (n === void 0) return {
    removed: 0,
    why: "no_held_folder"
  };
  await using o = n.anchor;
  let r = new Set([ ...e.files, ...e.folders ]), s = [];
  for (let p of r) {
    let y = e.record.get(p);
    if (y === void 0) return {
      removed: 0,
      why: "no_record"
    };
    s.push({
      path: p,
      entry: y
    });
  }
  for (let {path: p, entry: y} of s) if ((y.kind === "file" ? await _n(n, p, y, "kept") : (await so(n, p, y))?.every(_ => r.has(_))) !== !0) return {
    removed: 0,
    why: "changed"
  };
  let u = 0;
  for (let {path: p, entry: y} of s) {
    if (!(y.kind === "file" ? await _n(n, p, y, "removed") : await oi(n, p, y))) return {
      removed: u,
      why: "changed"
    };
    u += 1;
  }
  return {
    removed: u
  };
}

async function ro(e) {
  let n = ei(e);
  if (n.unresolved) return;
  try {
    let [{openTreeAnchor: o}, {createDeviceTreeHost: r}] = await Promise.all([ import("./chunk-aed8th7n.js"), import("./chunk-yrpe90gk.js") ]), s = await o(r(), {
      gitRoot: e,
      realRoot: n.landing
    });
    if ("unavailable" in s) {
      t(`served own-made delete: no held folder (${s.unavailable})`);
      return;
    }
    return {
      anchor: s,
      root: n.landing
    };
  } catch (o) {
    Ce(o);
    return;
  }
}

function Sn(e, n) {
  let o = Gs(e.root, n);
  return o === ".." || o.startsWith(`..${yn}`) || o.startsWith(yn) ? void 0 : o.split(yn).join("/");
}

async function _n(e, n, o, r) {
  let s = Sn(e, zs(n));
  if (s === void 0) return !1;
  let {anchor: u} = e;
  try {
    let p = await u.holdOutside(e.root, s);
    if (p === null) return !1;
    await using y = p;
    if (!si(await p.stat(), await u.lstat(s)) || !await ti(u, p, Jt(n), o)) return !1;
    if (r === "removed") await u.unlinkIn(p, Jt(n));
    return !0;
  } catch (p) {
    return Ce(p), !1;
  }
}

async function ti(e, n, o, r) {
  let s = await e.openIn(n, o, Qt.O_RDONLY | Qt.O_NONBLOCK);
  try {
    if (!to(await s.stat({
      bigint: !0
    }), r)) return !1;
    let u = await ri(s, Number(r.size));
    if (u === void 0 || js("sha256").update(u).digest("hex") !== r.sha256) return !1;
  } finally {
    await s.close();
  }
  return to(await e.statIn(n, o), r);
}

async function so(e, n, o) {
  let r = Sn(e, n);
  if (r === void 0 || r === "") return;
  try {
    if (!vn(await e.anchor.lstat(r), o)) return;
    let s = await e.anchor.list(r);
    return vn(await e.anchor.lstat(r), o) ? s.map(u => Vs(n, u)) : void 0;
  } catch (s) {
    Ce(s);
    return;
  }
}

async function oi(e, n, o) {
  let r = Sn(e, n);
  if (r === void 0 || r === "") return !1;
  try {
    if (!vn(await e.anchor.lstat(r), o)) return !1;
    return await e.anchor.rmdir(r), !0;
  } catch (s) {
    return Ce(s), !1;
  }
}

function eo(e) {
  if (jt(e)) {
    Ce(e);
    return;
  }
  d(e);
}

function Ce(e) {
  t(`served own-made delete: ${l(e)}`, {
    level: "warn"
  });
}

async function ri(e, n) {
  let o = Buffer.alloc(n + 1), r = 0;
  while (r < o.length) {
    let {bytesRead: s} = await e.read(o, r, o.length - r, r);
    if (s === 0) break;
    r += s;
  }
  return r === n ? o.subarray(0, n) : void 0;
}

function si(e, n) {
  return e.dev === n.dev && e.ino === n.ino && e.isDirectory() && n.isDirectory();
}

function to(e, n) {
  return e.isFile() && e.nlink === 1n && e.dev === n.dev && e.ino === n.ino && e.birthtimeNs === n.birthtimeNs && e.size === n.size && e.mtimeNs === n.mtimeNs && e.ctimeNs === n.ctimeNs;
}

function vn(e, n) {
  return e.isDirectory() && e.dev === n.dev && e.ino === n.ino && e.birthtimeNs === n.birthtimeNs;
}

var ii = "tengu_reactive_zephyr";

function ao() {
  return Fl(ii, {
    safe: !1
  });
}

var wn = {
  may: !0
};

function ee(e) {
  return {
    may: !1,
    why: e
  };
}

function kn(e) {
  return e.decisionReason?.type === "hook" && e.decisionReason.heldForServedCall === !0 ? "hook_held" : "hook_forced_ask";
}

function An(e, n) {
  if (e.behavior !== "ask") return "other";
  return n ? kn(e) : "unresolved_shell_write";
}

function xe(e, n) {
  try {
    return n();
  } catch (o) {
    return d(Error("a served call's telemetry value could not be worked out", {
      cause: o
    })), e;
  }
}

function Cn(e) {
  return xe("other", () => {
    if (e !== "own_record") return e === "conveyed" ? "conveyed_stance" : "other";
    return xvt() ? "auto_refused" : "consent";
  });
}

var ai = {
  dangerousRemoval: "safety_check_dangerous_removal",
  backgroundOperator: "safety_check_background_operator",
  suspiciousWindowsPath: "safety_check_suspicious_windows_path",
  outsideReadsBlocked: "safety_check_outside_reads_blocked",
  restrictedMode: "safety_check_restricted_mode"
};

function co(e) {
  if (e.classifierApprovable) return "settings_file";
  let n = e.circuitBreaker;
  return (n === void 0 ? void 0 : ai[n]) ?? "safety_check_other";
}

function fo(e) {
  return xe("other", () => {
    if (!e.first.may) return e.first.why;
    if (e.vetoed) return e.ownCheck === "block" ? "own_check_block" : "own_check_silence";
    if (!e.afterCheck.may) return e.afterCheck.why;
    return pjt.has(e.tool.name) || e.tool.isMcp === !0 ? "none" : "tool_not_answerable";
  });
}

var di = [ "irreversible_local_destruction", "code_from_external" ], mo = 2e4, li = 5e3, yo = 2e3, po = "This computer's own safety check did not clear this, so a person needs to approve it.", ci = {
  irreversible_local_destruction: "This can delete files or discard changes for good, so a person needs to approve it.",
  code_from_external: "This may run code from outside this computer, so a person needs to approve it."
}, ui = "This computer's own safety check did not answer, so a person needs to approve it.";

function _o(e) {
  switch (e.verdict) {
   case "no_verdict":
    return ui;

   case "block":
    return e.kind === void 0 ? po : ci[e.kind];

   case "allow":
    return po;
  }
}

function vo(e, n) {
  let o = e.trimEnd();
  if (o === "") return n;
  return `${/[.!?\u2026]$/.test(o) ? o : `${o}.`} ${n}`;
}

function Le(e) {
  if (e === void 0) return mo;
  return Math.min(mo, e - Date.now() - li);
}

async function Rn(e) {
  let n = Date.now(), o = await go(e, e.capMs), {judged: r, blockCategory: s, failure: u} = o, p = 1;
  if (e.again !== void 0 && o.mayPass) try {
    let _ = Le(e.again.legDeadlineAt);
    if (_ >= yo) {
      p = 2;
      let w = await go(e, _);
      r = w.judged, s = w.blockCategory, u = w.failure;
    }
  } catch (_) {
    if (!e.stopSignal.aborted && !Ve(_)) d(_);
  }
  let y = Date.now() - n;
  if (i("tengu_remote_tool_serve", {
    op: b("second_check"),
    call_id: ye(e.callId),
    mode: b("enforce"),
    verdict: c(r.verdict),
    why: pe(r.verdict === "no_verdict" ? r.why : void 0),
    block_kind: xe(void 0, () => r.verdict === "block" ? Grt(s) : void 0),
    error_kind: u?.errorKind === void 0 ? void 0 : tb(u.errorKind),
    http_status: u?.httpStatus,
    duration_ms: y,
    tool: $n(e.tool.name),
    attempts: e.again === void 0 ? void 0 : p,
    overlapped_hold: e.again?.besideHold
  }), r.verdict !== "block") return {
    ...r,
    ms: y
  };
  let h = ao() ? di.find(_ => _ === s) : void 0;
  return {
    verdict: "block",
    ...h !== void 0 && {
      kind: h
    },
    ms: y
  };
}

async function go(e, n) {
  let o, r = !1, s, u;
  if (n < yo) o = {
    verdict: "no_verdict",
    why: "no_budget"
  }; else {
    let p = Ys(e.stopSignal, {
      timeoutMs: n,
      refTimer: !0
    });
    try {
      let y = DAe(e.tool.name, e.input);
      if (W7r(y, [ e.tool ]) === "") o = {
        verdict: "no_verdict",
        why: "not_run"
      }; else {
        let h = await l_e([], y, [ e.tool ], {
          ...e.permissionContext,
          alwaysDenyRules: fi(e.permissionContext)
        }, p.signal, {
          isSubagentLoop: !1,
          recordPresumed: !1,
          onlyBuiltInContext: !0
        }), _ = ho(p.signal, e.stopSignal), w = h.unavailable === !0 && h.transcriptTooLong !== !0 && h.refusedBySafeguard !== !0 && h.failureMode === void 0;
        if (_ !== void 0) o = {
          verdict: "no_verdict",
          why: _
        }, r = _ === "timeout" && w; else if (h.classifierRan === !1) o = {
          verdict: "no_verdict",
          why: "not_run"
        }; else if (h.unavailable === !0 || h.transcriptTooLong === !0 || h.refusedBySafeguard === !0 || h.failureMode !== void 0) o = {
          verdict: "no_verdict",
          why: "unavailable"
        }, u = {
          errorKind: h.errorKind,
          httpStatus: h.httpStatus
        }, r = w && h.retryAfterMs === void 0 && Tlr(h.errorKind) && h.errorKind?.endsWith("_no_retry") !== !0; else o = {
          verdict: h.shouldBlock === !1 ? "allow" : "block"
        }, s = h.category;
      }
    } catch (y) {
      let h = ho(p.signal, e.stopSignal);
      if (h === void 0) d(y);
      o = {
        verdict: "no_verdict",
        why: h ?? "threw"
      }, r = h === "timeout";
    } finally {
      p.cleanup();
    }
  }
  return {
    judged: o,
    mayPass: r,
    blockCategory: s,
    failure: u
  };
}

function fi(e) {
  let n = new Set(e.alwaysDenyRules[Hge]);
  return {
    [Hge]: _t().map(bn).filter(o => n.has(o))
  };
}

function ho(e, n) {
  if (n.aborted) return "stopped";
  return e.aborted ? "timeout" : void 0;
}

var mi = new Set([ "Automount -hosts path detected (defense-in-depth check)", "Automount browse surface detected (defense-in-depth check)", "Kernel-resolved path prefix (/.vol etc.) detected (defense-in-depth check)", "UNC path detected (defense-in-depth check)", "UNC glob pattern detected (defense-in-depth check)", "Automount -hosts glob pattern detected (defense-in-depth check)", "Automount browse surface glob pattern detected (defense-in-depth check)", "Kernel-resolved path prefix (/.vol etc.) glob pattern detected (defense-in-depth check)" ]);

function So(e) {
  return e.behavior === "ask" && e.decisionReason?.type === "safetyCheck" && mi.has(e.decisionReason.reason);
}

function wo(e, n, o) {
  if (typeof e.getPath !== "function") return !1;
  let r = e.getPath(n), s = uo(r);
  if (lFe(e, n, o, s) === null) return !1;
  let u = o.trustedNetworkDirectories, p = [ r, ...s, ...e.name === no && typeof n.pattern === "string" ? [ n.pattern ] : [] ];
  return p.some(y => RSe(y, u) || Iue(y, u)) || !p.some(y => xY(y, u));
}

function Fe(e) {
  return e === "auto" || e === "plan";
}

function zzo(e) {
  if (e.callerKind !== "ccr_container") return;
  if (e.attested === !0) return "attested";
  return e.attested === !1 && Fe(e.sessionMode) && e.askedInMode === e.sessionMode && e.classifierEligible && !e.autoModeRefusedHere && (e.sessionMode !== "plan" || e.planClaimBackedHere) && (pjt.has(e.toolName) || e.isServedMcpTool) ? "auto_arm" : void 0;
}

var ko = "tengu_violin_purfling";

function bo() {
  return Fl(ko, {
    safe: !0
  });
}

function We() {
  return Fl(ko, {
    safe: !0
  });
}

var pi = "tengu_refactored_gadget";

function Ao() {
  return Fl(pi, {
    safe: !1
  });
}

function Co() {
  try {
    return k("tengu_violin_arching", !1) === !0;
  } catch {
    return !1;
  }
}

var gi = "tengu_violin_ebony";

function Ro() {
  return Fl(gi, {
    safe: !1
  });
}

function En() {
  try {
    return k("tengu_violin_tailgut", !1) === !0;
  } catch {
    return !1;
  }
}

function Eo() {
  return Fl("tengu_violin_camber", {
    safe: !1
  });
}

var hi = 16, yi = /^[A-Za-z_][A-Za-z0-9_]*$/, Oo = /^[A-Za-z0-9_./:@%+,-]+$/, _i = /^[A-Za-z0-9_./:@%+,=-]+$/, Si = new Set([ "", " ", "\t", `\n`, '"', "/", ".", "-", ",", ";", "&", "|", ">", "<" ]), wi = new Set([ ">", ">>", "<", ">&", "<&", "&>", "&>>", ">|" ]), ki = new Set([ "ifs", "path", "home", "pwd", "oldpwd", "cdpath", "env", "prompt_command", "ps1", "ps2", "ps3", "ps4", "random", "srandom", "seconds", "lineno", "uid", "euid", "gid", "egid", "ppid", "shellopts", "hostname", "hosttype", "ostype", "machtype", "groups", "dirstack", "pipestatus", "reply", "optind", "optarg", "opterr", "shlvl", "username", "logname", "user", "shell", "term", "tmpdir", "lang", "columns", "lines", "epochseconds", "epochrealtime", "timeformat", "timefmt", "globignore", "nullcmd", "readnullcmd", "errno", "tty", "argc", "argv", "argv0", "cputype", "vendor", "posixly_correct", "tmout", "fcedit", "fignore", "execignore", "inputrc", "wordchars", "stty", "match", "mbegin", "mend", "_", "status", "psvar", "fpath", "manpath", "mailpath", "module_path", "watch", "signals", "histchars", "options", "commands", "functions", "aliases", "galiases", "saliases", "parameters", "modules", "history", "historywords", "nameddirs", "userdirs", "builtins", "reswords", "widgets", "keymaps", "terminfo", "termcap", "langinfo", "errnos", "sysparams", "mapfile", "usergroups", "patchars", "epochtime", "rprompt", "rps1", "keyboard_hack", "mailcheck", "null", "bashpid", "baud", "dirstacksize", "keytimeout", "listmax", "logcheck", "period", "reporttime", "reportmemory", "savehist", "funcnest", "ttyidle", "try_block_error", "try_block_interrupt", "mail", "sprompt" ]), bi = [ "bash", "zsh", "ld_", "dyld_", "lc_", "comp", "hist", "prompt", "dis_", "func", "job", "zle" ], Ai = new Set([ "read", "mapfile", "readarray", "getopts", "printf", "declare", "typeset", "local", "export", "readonly", "unset", "let", "eval", "source", ".", "set", "shopt", "setopt", "unsetopt", "emulate", "exec", "trap", "alias", "unalias", "shift", "wait", "coproc", "builtin", "command", "noglob", "nocorrect", "-", "integer", "float", "vared", "zparseopts", "zstyle", "zformat", "zstat", "strftime", "print", "sched", "zmodload", "autoload", "pcre_match", "pcre_compile", "pcre_study", "zselect", "zgetattr", "zsetattr", "zsystem", "ztie", "zuntie", "zcurses", "enable", "disable", "hash", "unhash", "rehash", "bind", "bindkey", "compgen", "complete", "compopt", "fc", "history", "r", "ulimit", "limit", "unlimit", "unsetenv", "setenv", "getln", "pushln", "zregexparse", "sysread", "syswrite", "sysopen", "sysseek", "zsocket", "ztcp", "zpty", "zftp", "zle", "zcompile", "functions", "unfunction", "private", "nameref", "stat", "time", "function", "select", "if", "then", "else", "elif", "fi", "case", "esac", "for", "while", "until", "do", "done", "in", "repeat", "foreach", "end", "always", "nocasematch", "exit", "return" ]);

async function To(e) {
  try {
    if (!/^[\t\n\x20-\x7e]*$/.test(e)) return;
    let n = await eK(e);
    if (n === null || n === kP) return;
    let o = Po(n, e, !1);
    if (o === void 0 || o.replacements.length === 0) return;
    let r = "", s = 0;
    for (let y of o.replacements) {
      if (y.start < s) return;
      r += e.slice(s, y.start) + y.value, s = y.end;
    }
    r += e.slice(s);
    let u = await eK(r);
    if (u === null || u === kP) return;
    let p = Po(u, r, !0);
    return p !== void 0 && p.skeleton === o.skeleton ? r : void 0;
  } catch (n) {
    if (!Ve(n)) d(n);
    return;
  }
}

function Po(e, n, o) {
  if (e.type !== "program") return;
  let r = new Map, s = new Set, u = [], p = "";
  for (let [y, h] of e.children.entries()) {
    if (h.type === ";" || h.type === "&") {
      p += h.type;
      continue;
    }
    if (h.type !== "variable_assignment") {
      let v = Pn(h, n, r, u);
      if (v === void 0) return;
      p += v;
      continue;
    }
    let [_, w, A] = h.children;
    if (h.children.length !== 3 || _ === void 0 || w === void 0 || A === void 0 || _.type !== "variable_name" || w.type !== "=" || !yi.test(_.text) || s.has(_.text) || s.size >= hi || e.children[y + 1]?.type === "&") return;
    let I = _.text.toLowerCase();
    if (F8(_.text) || ki.has(I) || bi.some(v => I.startsWith(v))) return;
    let L = A.children[1], B = A.type === "word" || A.type === "number" ? A.text : A.type === "raw_string" && A.text.length > 2 && A.text.startsWith("'") && A.text.endsWith("'") ? A.text.slice(1, -1) : A.type === "string" && A.children.length === 3 && L !== void 0 && L.type === "string_content" && A.text === `"${L.text}"` ? L.text : void 0;
    if (B === void 0 || !Oo.test(B)) return;
    if (s.add(_.text), !o) r.set(_.text, B);
    p += "assignment";
  }
  return {
    skeleton: p,
    replacements: u
  };
}

function Pn(e, n, o, r) {
  if (e.type === "list" || e.type === "pipeline") {
    let p = `${e.type}(`;
    for (let [y, h] of e.children.entries()) {
      let _ = e.type === "list" ? [ "&&", "||" ] : [ "|", "|&" ], w = y % 2 === 0 ? Pn(h, n, o, r) : _.includes(h.type) ? h.type : void 0;
      if (w === void 0) return;
      p += w;
    }
    return e.children.length % 2 === 1 ? `${p})` : void 0;
  }
  if (e.type !== "command" && e.type !== "redirected_statement") return;
  let s = `${e.type}(`, u = e.type === "redirected_statement";
  for (let [p, y] of e.children.entries()) if (y.type === "file_redirect") {
    let h = y.children.at(-1), _ = y.children.at(-2), w = y.children.length === 3 ? y.children[0] : void 0;
    if (p === 0 || h === void 0 || _ === void 0 || y.children.length > 3 || !wi.has(_.type) || y.children.length === 3 && (w?.type !== "file_descriptor" || !/^[0-9]+$/.test(w.text)) || !Re(h, n, o, r)) return;
    s += `redirect(${w?.text ?? ""}${_.type})`;
  } else if (e.type === "redirected_statement") {
    let h = p === 0 ? Pn(y, n, o, r) : void 0;
    if (h === void 0) return;
    s += h;
  } else if (y.type === "command_name") {
    let h = y.children[0];
    if (u || h === void 0 || y.children.length !== 1) return;
    u = !0;
    let _ = r.length;
    if (!(h.type === "word" || h.type === "number" ? Oo.test(h.text) && (h.text.includes("/") || !Ai.has(h.text)) : Re(h, n, o, r) && r.length > _)) return;
    s += "head";
  } else {
    if (!u || !Re(y, n, o, r)) return;
    s += " word";
  }
  return u ? `${s})` : void 0;
}

function Re(e, n, o, r) {
  switch (e.type) {
   case "word":
   case "number":
   case "raw_string":
    return !0;

   case "simple_expansion":
   case "expansion":
    {
      let s = e.type === "expansion", [u, p, y] = e.children, h = p?.type === "variable_name" ? o.get(p.text) : void 0;
      if (h === void 0 || e.children.length !== (s ? 3 : 2) || u?.type !== (s ? "${" : "$") || s && y?.type !== "}" || !s && !Si.has(n[e.endIndex] ?? "")) return !1;
      return r.push({
        start: e.startIndex,
        end: e.endIndex,
        value: h
      }), !0;
    }

   case "string":
    return e.children.every(s => s.type === '"' || s.type === "string_content" || (s.type === "simple_expansion" || s.type === "expansion") && Re(s, n, o, r));

   case "concatenation":
    return e.children.every(s => s.type === "word" || s.type === "number" ? _i.test(s.text) : s.type !== "concatenation" && Re(s, n, o, r));

   default:
    return !1;
  }
}

function On() {
  try {
    return k("tengu_violin_hair", !1) === !0;
  } catch {
    return !1;
  }
}

function Mo() {
  try {
    return k("tengu_violin_ferrule", !1) === !0;
  } catch {
    return !1;
  }
}

import { basename as Ci, isAbsolute as No, join as Ri, parse as Ei, resolve as Io } from "path";

var Pi = 2e3, Oi = 112, Be = Symbol("cut short");

async function Tn(e, n, o, r, s = !1) {
  let u = n.command;
  if (typeof u !== "string") return {
    file: "error",
    fileOrFolder: "error"
  };
  let p = {
    file: "none",
    fileOrFolder: "none"
  }, y = Ys(r, {
    timeoutMs: Pi,
    refTimer: !0
  });
  try {
    let h = O() === "windows";
    if (p = {
      file: aJ(n, "file") && !(s && e === je && await i1r(u)) ? "named" : "none",
      fileOrFolder: aJ(n, "file_or_folder") ? "named" : "none"
    }, p.file !== "none" && p.fileOrFolder !== "none") return p;
    if (y.signal.aborted) return me(p, "unresolved");
    let _ = new Promise(F => {
      y.signal.addEventListener("abort", () => F(Be), {
        once: !0
      });
    });
    if (e !== je) return p;
    let w = await Qzo(u, o);
    if (w === "unparsed") return p;
    let {files: A, dirs: I} = q5e(), L = s1r(), B = [ ...A, ...I.flatMap(F => K5e.map(G => Ri(F, G))), ...L.paths ], v = D([ ...I, ...mN() ]), P = new Set([ ...B, ...v ].map(F => io(F))), Y = new Set(L.globalConfigNames.map(F => io(F))), te = await Promise.race([ Promise.all(D([ ...B, ...v ]).map(F => Do(F, "followed"))), _ ]);
    if (te === Be) return me(p, "unresolved");
    let K = new Set(te.filter(F => F !== void 0)), V = h ? /[\\/]/ : "/", U = w.flatMap(({word: F, directories: G, mayBeElsewhere: Q}) => {
      if (F === "") return [];
      let Z = qc(F), re = Js(F) || Z.startsWith("~") || bL(F), S = Ei(Z).root, R = Z.slice(S.length).split(V)[0] ?? "", C = (re ? [] : No(Z) ? [ o ] : G).map(M => ({
        requested: Io(M, Z),
        firstPartThere: Io(M, S, R)
      })), H = C.filter(({requested: M, firstPartThere: z}) => !$e(M) && !$e(z));
      return [ {
        word: F,
        local: H,
        byName: re || H.length < C.length || Q && !No(Z)
      } ];
    }), q = await Promise.race([ Promise.all(D(U.flatMap(({local: F}) => F.map(({firstPartThere: G}) => G))).map(F => se().lstat(F).then(() => [ F, !0 ], G => {
      let Q = E(G);
      return [ F, Q !== "ENOENT" && Q !== "ENOTDIR" && Q !== "ENAMETOOLONG" ];
    }))), _ ]);
    if (q === Be) return me(p, "unresolved");
    let ce = new Map(q), ue = new Set, ge = 0;
    for (let {word: F, local: G, byName: Q} of U) {
      if (Q) {
        if (p = {
          file: p.file === "none" && aJ({
            command: F
          }, "file") ? "named" : p.file,
          fileOrFolder: p.fileOrFolder === "none" && aJ({
            command: F
          }, "file_or_folder") ? "named" : p.fileOrFolder
        }, p.file !== "none" && p.fileOrFolder !== "none") return p;
      }
      for (let {requested: Z, firstPartThere: re} of G) {
        if (ue.has(Z)) continue;
        ue.add(Z);
        let S = [ Z ], R;
        if (ce.get(re) !== !1) {
          if (ge++, ge > Oi) return me(p, "too_many_pieces");
          let C = await qgt(Z, y.signal);
          if (C.unresolved || $e(C.landing)) return me(p, "unresolved");
          R = C.landing, S = D([ ...C.spellings, C.landing ]);
        }
        if (S.some(C => R !== void 0 && _jt(C, o) || P.has(io(C)) || Y.has(io(Ci(C))))) return me(p, "on_disk");
        let T = R === void 0 ? void 0 : await Promise.race([ Do(R, "as_landed"), _ ]);
        if (T === Be) return me(p, "unresolved");
        if (T !== void 0 && K.has(T)) return me(p, "on_disk");
      }
    }
    return p;
  } catch (h) {
    let _ = E(h);
    if (_ === void 0) d(Error("a served shell line's settings identity check threw; the line counts as naming one", {
      cause: h
    })); else t(`A served shell line's settings identity check could not read a path (${_}); the line counts as naming a settings file`, {
      level: "error"
    });
    return me(p, "error");
  } finally {
    y.cleanup();
  }
}

function me(e, n) {
  return {
    file: e.file === "none" ? n : e.file,
    fileOrFolder: e.fileOrFolder === "none" ? n : e.fileOrFolder
  };
}

function $e(e) {
  return w$o(e) || _M(e);
}

async function Do(e, n) {
  if ($e(e)) return;
  try {
    let o = se();
    if (n === "followed") {
      let {identity: s} = await Nj(o, e, {
        fileIdentity: !0
      });
      return s === void 0 || xf(s.ino) ? void 0 : `${s.dev}:${s.ino}`;
    }
    let r = await o.lstatBigint(e);
    return xf(r.ino) ? void 0 : `${r.dev}:${r.ino}`;
  } catch (o) {
    let r = E(o);
    if (n === "followed" || r === "ENOENT" || r === "ENOTDIR" || r === "ENAMETOOLONG") return;
    throw o;
  }
}

var Mi = 16, Ugn = "remote_call_session_answer", Ni = "remote_call_destructive_ask", Mn = "remote_call_classifier_ask", Pe = "remote_call_served_mcp_ask", Ii = "remote_call_host_settings_shell_write", Di = "remote_call_host_settings_edit", xo = "remote_call_unresolved_shell_write_ask", xi = "remote_call_settings_file_named_ask", iXn = !1;

function Vo(e) {
  return e.isMcp === !0 || !Jb(e).supported;
}

function Li(e) {
  return `This command is flagged as destructive. ${e} asks before running destructive commands sent from a cloud session.`;
}

var Go = "remote_call_stopped", Fi = {
  behavior: "deny",
  message: "The call could not be confirmed after the answer, so it did not run.",
  decisionReason: {
    type: "other",
    reason: "remote_call_relative_path_not_confirmed"
  },
  decideLocation: "ask-path"
}, Ee = {
  behavior: "deny",
  message: "The remote session's call was stopped before it was answered; it did not run.",
  decisionReason: {
    type: "other",
    reason: Go
  },
  decideLocation: "ask-path"
}, Dn = "remote_call_not_run_here", Wi = new Set([ "default", "plan", "dontAsk", "acceptEdits" ]);

function n1r(e) {
  if (e.stance.mode !== "session") return {
    mode: e.stance.mode,
    capped: !1,
    autoRefusedHere: !1
  };
  let n = e.call ?? Eke, o = e.sessionMode ?? "default", r = e.sessionMode === "auto" || e.sessionMode === "bypassPermissions";
  if (Ue(e.stance, e.sessionMode, n)) return {
    mode: "acceptEdits",
    capped: o === "bypassPermissions",
    autoRefusedHere: !1
  };
  return {
    mode: (e.stance.unattended === "own_record" || e.stance.unattended === "conveyed" && n.modeDecidedByHost === !0) && Wi.has(o) ? o : "default",
    capped: o === "bypassPermissions",
    autoRefusedHere: r
  };
}

function Ko(e) {
  if (e.stance.mode !== "session") return "fixed_stance";
  if (e.sessionMode === void 0) return "mode_absent";
  if (e.sessionMode === e.evaluatedMode) return "as_claimed";
  if (e.sessionMode === "auto" || e.sessionMode === "bypassPermissions") return e.evaluatedMode === "acceptEdits" ? "auto_fast_path" : "auto_refused_here";
  return "mode_unknown";
}

function Gzo(e) {
  let n = Ko(e), o = e.sessionMode ?? "absent";
  return n === "auto_fast_path" ? {
    session: o,
    evaluated: "auto",
    step: "accept_edits_fast_path"
  } : {
    session: o,
    evaluated: e.evaluatedMode,
    why: n
  };
}

function Bi(e, n = "none") {
  switch (e) {
   case "fixed_stance":
   case "as_claimed":
   case "auto_fast_path":
    return;

   case "auto_refused_here":
    return n === "none" ? `This computer is not accepting auto mode from cloud sessions right now, so it checked this in ${X0("default").toLowerCase()} mode.` : Ki[`auto_off.reason.${n}`];

   case "mode_absent":
   case "mode_unknown":
    return `This computer could not tell which mode the session is in, so it checked this in ${X0("default").toLowerCase()} mode.`;
  }
}

var $i = "remote_call_auto_mode_allowlist";

function Ue(e, n, o) {
  if (n !== "auto" && n !== "bypassPermissions") return !1;
  switch (e.unattended) {
   case "own_record":
    return !V_t();

   case "conveyed":
    return o.modeDecidedByHost === !0;

   default:
    {
      let r = e.unattended;
      return !1;
    }
  }
}

function xn(e) {
  switch (e) {
   case "own_record":
    return !V_t();

   case "conveyed":
    return !1;

   default:
    {
      let n = e;
      return !1;
    }
  }
}

function j_t(e, n = "own_record") {
  return e === "plan" && qo(n) === void 0;
}

function qo(e) {
  if (!xn(e)) return "answers_refused";
  return tin() && !OYe("plan_asks_a_person") ? void 0 : "plan_setting";
}

function Zo(e) {
  return !1;
}

var Lo = new Set([ "projectSettings", "localSettings", "session" ]);

function Bgn(e) {
  let n = e.call ?? Eke, {mode: o} = n1r({
    stance: e.stance,
    sessionMode: e.sessionMode,
    call: n
  }), r = Ue(e.stance, e.sessionMode, n) || j_t(e.sessionMode, e.stance.unattended), s = $h(), u = edr(), p = u.launchedInAutoMode || lp(), y = e.userSettings?.held === !0 && Y_(), h = e.stance.honorLocalRules ? [ ...kco(cz(), e.userSettings, s).filter(v => !y || v.source !== "projectSettings" || v.ruleBehavior !== "allow"), ...s ? [] : u.allowRules.map(v => ({
    source: "cliArg",
    ruleBehavior: "allow",
    ruleValue: jn(v)
  })), ...sPn(u) ] : [ ...kco(jo().filter(v => !Lo.has(v) && !(v === "userSettings" && Y_())).flatMap(v => uxe(v)), Y_() ? void 0 : e.userSettings, !1), ...sPn(u) ].filter(v => !Lo.has(v.source) && v.ruleBehavior === "deny"), _ = new Set(Znr(h).map(v => bn(v.ruleValue))), w = h.filter(v => !Wo(v.ruleBehavior, v.ruleValue, r || v.source === "cliArg" && p) && !(v.ruleBehavior === "allow" && _.has(bn(v.ruleValue)))), A = E3(Ud(), w, {
    announce: !1
  }), I = e.stance.honorLocalRules, L = {
    ...A,
    alwaysDenyRules: ji(A.alwaysDenyRules, e.stance.honorLocalRules && u.toolsNarrowingDenyRules.length > 0 ? {
      toolsNarrowing: [ ...u.toolsNarrowingDenyRules ]
    } : {}),
    additionalWorkingDirectories: new Map([ ...e.stance.honorLocalRules ? [ ...u.additionalWorkingDirectories ].flatMap(([, v]) => {
      let P = {
        ...v,
        path: kDn(v.path)
      };
      if (Vit(v.path) || !Hi(P)) return [];
      return [ [ P.path, P ] ];
    }) : [], [ e.launchDir, {
      path: e.launchDir,
      source: "session"
    } ] ]),
    mode: o,
    isBypassPermissionsModeAvailable: o === "bypassPermissions",
    shouldAvoidPermissionPrompts: !1,
    servedCall: !0,
    ...e.stance.honorLocalRules && (rFe() || OYe("read_block")) && {
      blockReadsOutsideWorkingDirectories: !0
    },
    ...(!I || kke() || !kns()) && {
      sandboxAutoAllowSuspended: !0
    }
  };
  if (e.stance.honorLocalRules) {
    let v = u.allowRules.length;
    Ui({
      cliarg_allows: v,
      cliarg_allows_kept: (L.alwaysAllowRules.cliArg ?? []).length,
      startup_dirs: u.additionalWorkingDirectories.size,
      startup_dirs_kept: L.additionalWorkingDirectories.size - 1
    });
  }
  let B = (e.sessionUpdates ?? []).filter(v => v.type === "addRules" && !(s && v.behavior === "allow") && !v.rules.some(P => Wo(v.behavior, P, r)) && !(v.behavior === "allow" && Znr(v.rules.map(P => ({
    source: "session",
    ruleBehavior: "allow",
    ruleValue: P
  }))).length > 0));
  return B.length > 0 ? {
    ...SO(L, B),
    mode: o
  } : L;
}

function Hi(e) {
  return !Vit(e.path);
}

var Fo = new Set;

function Ui(e) {
  if (e.cliarg_allows === e.cliarg_allows_kept && e.startup_dirs === e.startup_dirs_kept) return;
  let n = Object.entries(e).map(([o, r]) => `${o}=${r}`).join(" ");
  if (Fo.has(n)) return;
  Fo.add(n), t(`[remote-tools] served-context screens dropped rules ${n}`);
}

function ji(e, n) {
  return {
    ...e,
    ...n,
    [Hge]: pt().map(bn)
  };
}

function Wo(e, n, o) {
  return e === "allow" && o && (Zoe(n.toolName, n.ruleContent) || KFn(n.toolName));
}

function Bo(e) {
  try {
    return VAe(e);
  } catch {
    return b("UnknownError");
  }
}

function Vzo(e) {
  return async (n, o, r, s, u, p) => {
    let y = 0, h = !1, _, w, A = Object.create(n, {
      checkPermissions: {
        value: async (...ie) => {
          y += 1;
          try {
            let J = await n.checkPermissions(...ie);
            return y -= 1, J;
          } catch (J) {
            throw _ = Bo(J), J;
          }
        }
      },
      inputSchema: {
        get: () => Object.create(n.inputSchema, {
          parse: {
            value: (...ie) => {
              h = !0;
              try {
                let J = n.inputSchema.parse(...ie);
                return h = !1, J;
              } catch (J) {
                throw w = Bo(J), J;
              }
            }
          }
        })
      }
    }), I = p?.behavior === "ask" ? await Wk(A, o, r) : null, L = p?.decisionReason?.type === "hook" && p.decisionReason.hookName === LYt, B = p === void 0 || p.behavior === "allow" ? await Zu(A, o, r, s, u) : I?.behavior === "deny" && !L ? I : p;
    if (y > 0 || h) return e.onOutcome({
      kind: "denied_by_rule",
      raisedToAsk: !1,
      rulesCheckCrashed: {
        inputParseThrew: h,
        crashClass: (h ? w : _) ?? b("UnknownError")
      }
    }), {
      behavior: "deny",
      message: pGo({
        targetName: e.targetName,
        toolName: n.name
      }),
      decisionReason: {
        type: "other",
        reason: BB
      }
    };
    let v = ie => {
      if (e.permissionContextNow === void 0 || !Te()) return;
      if (ie === "asked") return de(r);
      try {
        return e.permissionContextNow();
      } catch (J) {
        d(Error("the rules a served MCP relative name is judged again under could not be read", {
          cause: J
        }));
        return;
      }
    }, P = pn(n, o, v("asked")), Y = P?.kind === "ask", te = P?.kind === "web_address", K = P?.kind === "relative_path", V = B.behavior === "deny" ? gn(B.decisionReason) : await Tt(n, o) ?? (P?.kind === "deny" ? P.rule : void 0), U = B;
    if (V !== void 0) {
      let ie = Fgn(V), J = zgn({
        targetName: e.targetName,
        kind: ie,
        subject: ie === "keychain" && typeof o.command === "string" ? o.command : B_t(V)
      });
      U = B.behavior === "deny" ? {
        ...B,
        message: J
      } : {
        behavior: "deny",
        decisionReason: {
          type: "rule",
          rule: V
        },
        message: J
      };
    }
    let q = "updatedInput" in U && U.updatedInput !== void 0 ? U.updatedInput : o, ce = U.behavior !== "deny" && DI(n) && bo() ? await hjt(n, q, U, le()) : "none", ue = q.command, F = Eo() && ce === "uncertain" && n.name === je && typeof ue === "string" ? await To(ue) : void 0, G = F === void 0 ? void 0 : {
      ...q,
      command: F
    }, Q = G === void 0 ? ce : await hjt(n, G, U, le()), Z = Q === "uncertain", re = Co(), S = Ro(), R = U.behavior !== "deny" && We(), T = re && R && DI(n) && (await uXn(n, q, r) || G !== void 0 && await uXn(n, G, r)), C = re && Z && En(), H = T || C ? await Tn(n.name, q, le(), e.stopSignal, S) : void 0, M = H !== void 0 && G !== void 0 ? await Tn(n.name, G, le(), e.stopSignal, S) : void 0, z = H === void 0 || M === void 0 ? H : {
      file: H.file !== "none" ? H.file : M.file,
      fileOrFolder: H.fileOrFolder !== "none" ? H.fileOrFolder : M.fileOrFolder
    }, X = re ? T && z?.file !== "none" : R && (await yjt(n, q, r, S) || G !== void 0 && await yjt(n, G, r, S)), oe = Ao() ? X && (aJ(q, "own_file") || G !== void 0 && aJ(G, "own_file")) : X || Z && (re ? !C || z?.fileOrFolder !== "none" : !En() || aJ(q, "file_or_folder") || G !== void 0 && aJ(G, "file_or_folder")), ae = X ? z?.file ?? "error" : C ? z?.fileOrFolder ?? "error" : "none";
    if (Q !== "none" || X) i("tengu_served_shell_settings_hold", {
      verdict: c(Q),
      tool: c(n.name === je ? "bash" : "powershell"),
      person_only: oe,
      ...re && {
        cause: c(ae)
      }
    });
    if (Q === "settings") U = {
      behavior: "deny",
      message: cGo({
        targetName: e.targetName
      }),
      decisionReason: {
        type: "other",
        reason: Ii
      }
    }; else if (U.behavior !== "deny" && !DI(n) && We() && typeof n.getPath === "function" && !n.isReadOnly(q, r) && rwr(uo(n.getPath(q))) === "certain") i("tengu_served_settings_edit_refused", {
      tool: c(n.name === ht ? "edit" : n.name === qt ? "write" : "other"),
      engine: c(U.behavior)
    }), U = {
      behavior: "deny",
      message: uGo({
        targetName: e.targetName
      }),
      decisionReason: {
        type: "other",
        reason: Di
      }
    };
    if (r.remoteCall === void 0) d(Error("served permission step ran with no call record: a PreToolUse hook's refusal or question cannot be held"));
    let fe = r.remoteCall?.strictestHookAnswer;
    if (fe?.behavior === "deny") return t(`[remote-tools call=${u}] refused by a PreToolUse hook here; ${U.behavior} after it set aside tool=${n.name}`), 
    fe;
    if (fe !== void 0 && U.behavior === "allow") t(`[remote-tools call=${u}] asked about by a PreToolUse hook here; allow after it raised back to that question tool=${n.name}`), 
    U = {
      ...fe,
      updatedInput: U.updatedInput
    };
    let Se = e.stance.askOnDestructive && n.name === je && typeof o.command === "string" && o.command !== "" && LIn(o.command), he = Vo(n) && (iXn || Y), ze = Ue(e.stance, e.sessionMode, e.call ?? Eke), tr = e.sessionModel !== void 0 && ze && U.behavior === "allow" && U.decisionReason?.type === "mode" && U.decisionReason.mode === "acceptEdits" && RTt(n.name) && $lr(e.sessionModel), or = (ze || j_t(e.sessionMode, e.stance.unattended)) && Zo(n.name), ke = (Se || he || te || K || tr || or || Z || X) && U.behavior === "allow", rr = Se || he || te || K || X || Z && n.name === je || fe !== void 0, sr = U.behavior === "allow" && U.decisionReason?.type === "classifier", _e = ke || sr ? zi(U, e.targetName, he ? Y ? "served_mcp_path" : "served_mcp" : Se ? "destructive" : X && !Z ? "settings_file_named" : oe ? "unresolved_shell_write" : Z ? "unreadable_shell_line" : K ? "served_mcp_relative_path" : te ? "served_mcp_web_address" : "classifier") : U, Ge = p !== void 0 && U === p || fe !== void 0, ne = Y && _e.behavior === "ask" && !Ge && _e.decisionReason?.type !== "hook" && !(_e.decisionReason?.type === "other" && _e.decisionReason.reason === Pe) ? {
      ..._e,
      decisionReason: {
        type: "other",
        reason: Pe
      }
    } : _e, Ln = ne.behavior === "ask" && (So(U) || wo(n, q, de(r))), Fn = ne.behavior === "ask" && ITt(ne.decisionReason, n, q, r);
    if (!e.stopSignal.aborted && ze && !te && !K && ne.behavior === "ask" && !oqe(ne) && Xo(ne, n, Ge || r.hookAskFloor === !0, de(r), oe, Ln, Fn, e.stance.unattended).may && TTt(n, o)) {
      let ie = {
        behavior: "allow",
        updatedInput: "updatedInput" in ne && ne.updatedInput !== void 0 ? ne.updatedInput : o,
        decisionReason: {
          type: "other",
          reason: $i
        }
      }, J = $o(e, n, ie, o), Je = J !== void 0 && (await J, e.stopSignal.aborted) ? Ee : Uo(e);
      if (Je !== void 0) return e.onOutcome({
        kind: Nn(Je, ie),
        raisedToAsk: ke
      }), Je;
      return e.onOutcome({
        kind: Nn(ie, ie),
        raisedToAsk: ke,
        allowBasis: "auto_allowlist"
      }), ie;
    }
    let Ke = {}, Ze = await Vi(ne, e, o, r, {
      raisedToAsk: ke,
      tool: n,
      forcedByHook: Ge,
      callId: u,
      unresolvedShellWrite: oe,
      networkPath: Ln,
      serverAskUnderPlanFloor: Fn,
      raisedWhateverAllows: rr,
      mcpPathWhy: P?.kind === "ask" ? P.why : K ? "relieved" : void 0,
      released: Ke
    }), Oe = K && Ze.behavior === "allow" && pn(n, Ze.updatedInput ?? o, v("answered"))?.kind !== "relative_path" ? Fi : Ze, Wn = $o(e, n, Oe, o);
    if (Wn !== void 0) await Wn;
    let Ye = Oe.behavior === "allow" && e.stopSignal.aborted;
    if (Ye) i("tengu_remote_tool_allow_after_stop", {
      road: c(ne.behavior === "allow" ? "decided_here" : "ask_path"),
      is_mcp: n.mcpInfo !== void 0
    });
    let ir = Oe.behavior === "allow" && !Ye ? Uo(e) : void 0, Xe = Ye ? Ee : ir ?? Oe, Qe = Xe.behavior === "allow" && Ke.input !== void 0 ? await qi(e, n, Ke.input, Xe) : Xe;
    return e.onOutcome({
      kind: Nn(Qe, ne),
      raisedToAsk: ke,
      ...V !== void 0 && {
        throughSecondRootMount: sXn(V)
      },
      ...B === I && {
        deniedUnderForcedAsk: !0
      },
      ...ne.behavior === "allow" && Qe.behavior === "allow" && {
        allowBasis: ne.decisionReason?.type ?? "unspecified"
      },
      ...ne.behavior === "deny" && {
        denySource: nr(ne.decisionReason),
        hostCredentialRefusal: V && Fgn(V),
        underWindowsProfileGlob: V && oXn(B_t(V))
      }
    }), Qe;
  };
}

function Kzo(e) {
  try {
    if (!On() || e.stance.onAsk !== "session" || !DI(e.tool) || !Zo(e.tool.name) || !xn(e.stance.unattended) || !(Ue(e.stance, e.sessionMode, e.call ?? Eke) || j_t(e.sessionMode, e.stance.unattended)) || !Fe(e.sessionMode)) return;
    let n = Yo(e.tool, e.forwardedInput), o = eg(e.callStop);
    return {
      input: n,
      check: Rn({
        tool: e.tool,
        input: n,
        permissionContext: e.permissionContext,
        stopSignal: o.signal,
        callId: e.callId,
        capMs: Le(e.legDeadlineAt),
        again: {
          legDeadlineAt: e.legDeadlineAt,
          besideHold: !0
        }
      }).catch(r => (ve(r, o.signal), {
        verdict: "no_verdict",
        why: "threw",
        ms: 0
      })),
      giveUp: () => o.abort()
    };
  } catch (n) {
    ve(n, e.callStop.signal);
    return;
  }
}

function ve(e, n) {
  if (!n.aborted && !Ve(e)) d(e);
}

function Yo(e, n) {
  let o = F_(e, n);
  if (!o.success) return n;
  let r = {
    ...o.data
  };
  return e.backfillObservableInput?.(r), r;
}

function He(e, n) {
  let o = s => Object.keys(s).filter(u => s[u] !== void 0), r = o(e);
  return r.length === o(n).length && r.every(s => n[s] !== void 0 && Ti(e[s], n[s]));
}

function zi(e, n, o = "destructive") {
  if (e.behavior !== "allow") return e;
  let r = {
    destructive: Li(n),
    classifier: `${n} would not decide this one on its own \u2014 it needs approval in this session.`,
    unresolved_shell_write: Ki["ask.settings_person_only"],
    unreadable_shell_line: `${n} could not work out everything this command writes, so it cannot rule out a change to its own Claude Code settings files. The command needs approval in this session.`,
    settings_file_named: Ki["ask.settings_person_only"],
    served_mcp: `${n} asks before one of its own MCP tools runs for a cloud session.`,
    served_mcp_path: `${n} asks before one of its own MCP tools runs with a path it cannot vouch for from here (a relative path, a pattern, a variable, an encoded or quoted spelling, or a directory above its Claude credentials) \u2014 check it does not reach this machine's Claude credentials before approving.`,
    served_mcp_web_address: `This call gives one of ${n}'s own MCP tools a web address, so it is checked before it runs.`,
    served_mcp_relative_path: `This call gives one of ${n}'s own MCP tools a name with a slash in it, so it is checked before it runs.`
  }, s = {
    destructive: Ni,
    classifier: Mn,
    unresolved_shell_write: xo,
    unreadable_shell_line: xo,
    settings_file_named: xi,
    served_mcp: Pe,
    served_mcp_path: Pe,
    served_mcp_web_address: Mn,
    served_mcp_relative_path: Mn
  };
  return {
    behavior: "ask",
    message: r[o],
    updatedInput: e.updatedInput,
    decisionReason: {
      type: "other",
      reason: s[o]
    }
  };
}

async function Vi(e, n, o, r, s) {
  if (e.behavior !== "ask") return e;
  let u = "updatedInput" in e && e.updatedInput !== void 0 ? e.updatedInput : o, p = Yo(s.tool, n.forwardedInput), y = !He(u, p), h = r.remoteCall?.hookRewrites, _ = !y ? "none" : h !== void 0 && h.every(V => V.byOwnHook && Kn(V.handed) && He(V.handed, p)) && h.some(V => He(V.proposed, u)) ? "own_hooks_alone" : "unvouched";
  if (y) t(`[remote-tools call=${s.callId}] ask input rewritten by a hook here; prior answer${_ === "unvouched" ? " and classifier" : ""} set aside tool=${s.tool.name}`);
  if (n.stance.onAsk === "allow") return {
    behavior: "allow",
    updatedInput: u,
    decisionReason: e.decisionReason
  };
  if (n.stopSignal.aborted) return Ee;
  if (e.behavior === "ask" && oqe(e)) return qde(s.tool.name, "a cloud session", {
    hostWorded: e.hostDisplay !== void 0
  });
  let w = Ho(e, r, s, _, n.sessionMode, n.stance.unattended), A = w.may, I = A ? n.ownCheckAhead?.() : void 0, L = A ? await (I !== void 0 && He(I.input, u) ? I.check : Rn({
    tool: s.tool,
    input: u,
    permissionContext: de(r),
    stopSignal: n.stopSignal,
    callId: r.remoteCall?.origin.callId ?? s.callId,
    capMs: Le(n.legDeadlineAt),
    ...On() && {
      again: {
        legDeadlineAt: n.legDeadlineAt,
        besideHold: !1
      }
    }
  })) : void 0, B = A && L?.verdict === "block" && n.ownMadeDelete?.isOn() === !0 && await Gi(n, s.tool, u), v = A && L?.verdict !== "allow" && !B;
  if (n.stopSignal.aborted) return Ee;
  let P = A ? Ho(e, r, s, _, n.sessionMode, n.stance.unattended) : wn, Y = P.may, te = new Promise((V, U) => {
    try {
      let q = A && Y && !v, ce = s.forcedByHook || r.hookAskFloor === !0, ue = !s.raisedToAsk && !v && !B && !s.unresolvedShellWrite && !er(e, s.tool) && !y && !s.networkPath && Zi(e, s.tool, ce, u), ge = !y && !s.raisedWhateverAllows && Xi(e), F = !q && !s.raisedToAsk && !y && Jo(e, s.tool, ce, u) && Qo(e, s.tool, ce, de(r), s.unresolvedShellWrite, s.networkPath, s.serverAskUnderPlanFloor).may ? Bi(Ko({
        stance: n.stance,
        sessionMode: n.sessionMode,
        evaluatedMode: de(r).mode
      }), n.stance.unattended === "own_record" && rXn() ? K_t() : "none") : void 0, G = e.decisionReason?.type === "hook" ? `PreToolUse hook on ${n.targetName}: ${e.message}` : s.unresolvedShellWrite && e.decisionReason?.type === "other" && e.decisionReason.bashMissKind === "no-rule-match" && e.message === e.decisionReason.reason ? Ki["ask.settings_person_only"] : e.message, Q = !q && e.decisionReason?.type !== "sandboxOverride" && DI(s.tool) && Glr(s.tool, u) ? `${Ki["ask.outside_sandbox"]} ` : "", Z = s.unresolvedShellWrite && e.decisionReason?.type !== "hook" && G !== Ki["ask.settings_person_only"] ? `${Ki["ask.settings_person_only"]} ` : "", re = v && L !== void 0 && e.decisionReason?.type !== "hook" ? `${_o(L)} ` : "";
      n.onAsk({
        message: Q + Z + re + (F === void 0 ? G : vo(G, F)),
        input: u,
        decisionReason: e.decisionReason?.type,
        heldHook: e.decisionReason?.type === "hook" && e.decisionReason.heldForServedCall === !0,
        raisedToAsk: s.raisedToAsk,
        classifierEligible: q,
        askClass: fo({
          first: w,
          vetoed: v,
          ownCheck: L?.verdict,
          afterCheck: P,
          tool: s.tool
        }),
        mcpPathWhy: s.mcpPathWhy,
        priorAnswerOk: ue,
        standingRowOffered: ge,
        suggestions: ge ? Qi(e) : [],
        answer: V
      });
    } catch (q) {
      U(q);
    }
  }), K = await Ji(te.catch(() => {}), n.stopSignal);
  if (K === void 0 || n.stopSignal.aborted) return Ee;
  if (B && K.behavior === "allow") s.released.input = u;
  return K;
}

async function Gi(e, n, o) {
  try {
    return await (e.ownMadeDelete?.prove(n, o)) === !0;
  } catch (r) {
    return ve(r, e.stopSignal), !1;
  }
}

async function qi(e, n, o, r) {
  let s = await (e.ownMadeDelete?.remove(n, o).catch(u => (ve(u, e.stopSignal), "some"))) ?? "none";
  return s === "all" ? {
    ...r,
    updatedInput: {
      ...o,
      command: oo
    }
  } : {
    behavior: "deny",
    message: s === "none" ? nGo({
      targetName: e.targetName
    }) : rGo({
      targetName: e.targetName
    }),
    decisionReason: {
      type: "other",
      reason: Dn
    },
    decideLocation: "ask-path"
  };
}

function $o(e, n, o, r) {
  if (o.behavior !== "allow" || e.onAllowLanded === void 0 || e.stopSignal.aborted) return;
  try {
    return e.onAllowLanded(n, o.updatedInput ?? r)?.catch(s => ve(s, e.stopSignal));
  } catch (s) {
    ve(s, e.stopSignal);
    return;
  }
}

function Ho(e, n, o, r, s, u) {
  if (r !== "none" && !(r === "own_hooks_alone" && Bn())) return ee(r === "own_hooks_alone" ? "rewrite_own_hooks" : "rewrite_unvouched");
  if (!Fe(s)) return ee("not_auto");
  let p = s === "plan" ? qo(u) : void 0;
  if (p !== void 0) return ee(p === "plan_setting" ? "plan_unbacked" : Cn(u));
  return Xo(e, o.tool, o.forcedByHook || n.hookAskFloor === !0, de(n), o.unresolvedShellWrite, o.networkPath, o.serverAskUnderPlanFloor, u);
}

function Xo(e, n, o, r, s, u, p, y) {
  if (e.behavior !== "ask" || o || s) return ee(An(e, o));
  if (!xn(y)) return ee(Cn(y));
  if (y === "own_record" && z2e() && !DI(n) && !TTt(n)) return ee("consent");
  return Qo(e, n, o, r, s, u, p);
}

function Qo(e, n, o, r, s, u, p) {
  if (e.behavior !== "ask" || o || s) return ee(An(e, o));
  if (n.requiresUserInteraction?.() === !0) return ee("requires_user_interaction");
  if (n.mcpInfo?.effectiveMaxPermission === "ask") return ee("org_ceiling");
  if (er(e, n)) return ee("mcp_path");
  if (e.decisionReason?.type === "hook") return ee(kn(e));
  if (p || e.decisionReason?.type === "mode" && e.decisionReason.mode === "plan") return ee("plan_floor");
  if (rPn(e.decisionReason, r)) return ee("sandbox_override_read_block");
  let y = UM(e), h = cot(e.decisionReason) || e.matchedAskRule?.source === "mcpServerPolicy";
  if (y && !h) return ee("ask_rule");
  let _ = zl(e.decisionReason, w => !w.classifierApprovable && !(w.circuitBreaker === "backgroundOperator" && (w.also ?? []).length === 0 && Mo()) || yj(w) && We());
  if (_ !== void 0) return ee(co(_));
  return u ? ee("network_path") : wn;
}

function Zi(e, n, o, r = {}) {
  return Jo(e, n, o, r) && zl(e.decisionReason, () => !0) === void 0;
}

function Jo(e, n, o, r) {
  if (e.behavior !== "ask" || o) return !1;
  if (r.dangerouslyDisableSandbox === !0) return !1;
  if (n.requiresUserInteraction?.() === !0) return !1;
  if (e.decisionReason?.type === "hook") return !1;
  return e.decisionReason?.type !== "sandboxOverride";
}

function er(e, n) {
  return iXn && Vo(n) || e.decisionReason?.type === "other" && e.decisionReason.reason === Pe;
}

function Xi(e) {
  return OF() && e.behavior === "ask" && e.suggestions !== void 0 && e.suggestions.some(n => n.type === "addRules") && e.suppressAlwaysAllowRule !== !0 && zl(e.decisionReason, n => !n.classifierApprovable) === void 0;
}

function Qi(e) {
  if (e.behavior !== "ask" || e.suggestions === void 0) return [];
  return e.suggestions.flatMap(n => n.type === "addRules" ? n.rules.map(o => bn(o)) : []).slice(0, Mi);
}

function Ji(e, n) {
  return new Promise(o => {
    if (n.aborted) {
      o(void 0);
      return;
    }
    let r = () => o(void 0);
    n.addEventListener("abort", r, {
      once: !0
    }), e.then(o).finally(() => n.removeEventListener("abort", r));
  });
}

function nr(e) {
  if (e?.type === "rule") return e.rule.source;
  if (e?.type === "subcommandResults") for (let [, n] of e.reasons) {
    let o = n.behavior === "deny" ? nr(n.decisionReason) : void 0;
    if (o !== void 0) return o;
  }
  return;
}

function Uo(e) {
  let n = e.refusalAsAllowLands?.();
  return n === void 0 ? void 0 : {
    behavior: "deny",
    message: n,
    decisionReason: {
      type: "other",
      reason: Dn
    },
    decideLocation: "ask-path"
  };
}

function Nn(e, n) {
  let o = e.behavior === "deny" && e.decisionReason.type === "other" ? e.decisionReason.reason : void 0;
  if (o === Go || o === Dn) return "stopped";
  if (n.behavior !== "ask") return e.behavior === "allow" ? "allowed" : "denied_by_rule";
  if (e.behavior === "allow") return "approved_by_session";
  if (o !== void 0 && tIn(o)) return "ask_refused_no_surface";
  return o === on ? "stopped" : "denied_by_session";
}

var ea = "nested remote execution is not supported: a served call cannot name another machine.", aXn = "_simulatedSedEdit", na = new Map;

function fjt() {
  return na;
}

function lXn(e, n) {
  if (n.size === 0) return e;
  let o = new Set(n.values());
  return Object.fromEntries(Object.entries(e).filter(([r]) => !o.has(r)).map(([r, s]) => [ n.get(r) ?? r, s ]));
}

function qzo(e, n) {
  if (n.size === 0) return e;
  let o = new Map([ ...n ].map(([r, s]) => [ s, r ]));
  return TP(e, (r, s) => o.get(s) ?? s);
}

function Yzo(e, n) {
  if (e === void 0) return;
  let o = e[Dr] === n ? Es(e, [ Dr ]) : e;
  return Object.keys(o).length === 0 ? void 0 : o;
}

function mjt(e, n, o) {
  if (Dr in e) return ea;
  let r = n.find(s => Boolean(e[s]));
  return r === void 0 ? void 0 : jgn({
    field: r,
    targetName: o
  });
}

function W_t(e, n) {
  return Es(e, [ aXn, ...n ]);
}

function Xzo(e, n) {
  return Object.fromEntries(Object.keys(n).filter(o => Object.hasOwn(e, o)).map(o => [ o, n[o] ]));
}

export { Eke, Ngn, Izo, ZBr, Ozo, LL, O6, Vze, djt, cjt, Mzo, Hzo, Dzo, e1r, $gn, Lzo, Nzo, Mge, $zo, t1r, Fzo, rXn, oXn, Hge, Uzo, B_t, sXn, Fgn, ujt, Bzo, jzo, Wzo, pjt, zzo, Ugn, iXn, n1r, Gzo, j_t, Bgn, Vzo, Kzo, aXn, fjt, lXn, qzo, Yzo, mjt, W_t, Xzo };
