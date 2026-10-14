// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { Ye, pd, j, l, E } from "./chunk-b0z4bv3v.js";

import { We, Ea } from "./chunk-nvtwm272.js";

import { i } from "./chunk-hedpgw9m.js";

import { cx, t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { e1, Eit } from "./chunk-584kx1w1.js";

import { jft, kIe, hh, ky, Rve } from "./chunk-8yperama.js";

import { T9, k, x9, P9 } from "./chunk-xywp7esx.js";

import { ru, jUn, WUn, $Ot, xFe, EO, Tvs, Avs, Idt, GUn, YUn, Rvs, Lho, xvs, Pvs, JUn, Hvs, Lvs, bz, $Y, sT, $S } from "./chunk-9tdwgnpn.js";

import { AV, ez, gN } from "./chunk-sqb9meyh.js";

import { mhe, t2t, KHe } from "./chunk-t21b4wjt.js";

import { La } from "./chunk-qk8kpwc4.js";

import { Vv } from "./chunk-gw9jge7m.js";

import { md, o2t } from "./chunk-35bwwb5f.js";

import { B6, RJ, uTe } from "./chunk-6xfeq8na.js";

import { s2t, i2t, a2t } from "./chunk-2f9yeyeg.js";

import { mDe } from "./chunk-ttwd9vh2.js";

import { qn } from "./chunk-wgsx43va.js";

import { lse } from "./chunk-10gv16xm.js";

import { zs } from "./chunk-vjmbaret.js";

import { vn } from "./chunk-3rbd48rp.js";

import { N } from "./chunk-hmqkrrtz.js";

function te() {
  try {
    return k("tengu_violin_scroll", !1);
  } catch {
    return !1;
  }
}

function H() {
  return import.meta.require("./chunk-89c96hkc.js").mcpClientModule();
}

class X {
  #e=new WeakMap;
  reinitialize(e) {
    let n = this.#e.get(e);
    if (n) return n;
    let r = H().clearServerCache(e.name, e.config).catch(() => {});
    return this.#e.set(e, r), r;
  }
}

var Ce = -32e3;

async function U(e, n, r) {
  let o = await re(e, n, r);
  if (o.kind !== "session_expired") return oe(e, o);
  await n.recovery.reinitialize(o.connection);
  let u = await re(e, n, r);
  return u.kind === "session_expired" ? {
    kind: "expired_twice"
  } : oe(e, u);
}

async function oe(e, n) {
  if (n.kind === "connect_failed") await H().evictStaleFailedConnectMemoForServe(e.name, e.config).catch(() => {});
  return n;
}

async function re(e, {deadlineAt: n, signal: r, idempotent: o = !1}, u) {
  let s = H(), m;
  try {
    m = await s.ensureConnectedClient(e, {
      signal: r,
      timeoutMs: Math.max(1, n - Date.now()),
      context: "remote tool execution"
    });
  } catch (f) {
    return {
      kind: "connect_failed",
      error: f
    };
  }
  let p = n - Date.now();
  if (p <= 0) return {
    kind: "connect_failed",
    error: Error("deadline reached before the request could be sent")
  };
  try {
    return {
      kind: "ok",
      value: await u(m, p)
    };
  } catch (f) {
    return f instanceof Error && (s.isMcpSessionExpiredError(f) || o && Re(f, m)) ? {
      kind: "session_expired",
      connection: m
    } : {
      kind: "failed",
      error: f
    };
  }
}

function Re(e, n) {
  return ("code" in e && e.code === Ce && e.message.includes("Connection closed") || E(e) === "CONNECTION_CLOSED") && (n.config.type === "http" || n.config.type === "claudeai-proxy");
}

var Ee = {
  maxRequestBytes: 4128768,
  defaultDeadlineMs: 58e3
}, Ae = -32001, Me = "office_bridge.kind", Pe = "office_bridge.bound_miss", De = new Set([ "not_connected", "send_failed", "contested", "unsupported_on_bound" ]), Oe = new Set([ "disconnected", "cancelled" ]), Le = new Set([ "timeout" ]), Ie = /not connected|not reachable|offline/i, He = /disconnected before responding|connection may be closing/i, xe = /did not respond within/i, Be = 200;

function ae(e, n) {
  return {
    kind: "bridge",
    limits: Ee,
    call: (r, o, u, s) => qe(e, n, r, o, u, s),
    callPlumbing: (r, o, u) => Ne(e, n, r, o, u)
  };
}

async function Ne(e, n, r, o, u) {
  if (!uTe.has(r)) throw Error("callPlumbing: not a bridge plumbing tool");
  let s = Date.now(), m = $Y(u.deadlineMs), p = await U(e, {
    deadlineAt: s + m,
    recovery: n,
    signal: u.signal,
    idempotent: u.idempotent
  }, (f, _) => e1(f, {
    name: r,
    arguments: {
      ...o
    }
  }, {
    signal: u.signal,
    timeout: _
  }));
  if (p.kind === "ok") {
    let f = bz(p.value), _ = ue(f.content), g = f.isError && f.envelope.status === "absent" ? de(p.value, _, m) : void 0;
    if (g !== void 0) return ie(g);
    return {
      kind: "result",
      structuredContent: p.value.structuredContent,
      text: _,
      isError: f.isError
    };
  }
  if (u.signal.aborted) return {
    kind: "cancelled"
  };
  switch (p.kind) {
   case "connect_failed":
    return {
      kind: "unreachable",
      detail: La(l(p.error))
    };

   case "expired_twice":
    return {
      kind: "unreachable",
      detail: "the device bridge rejected the session again right after re-initializing it; nothing ran"
    };

   case "failed":
    return ie(le(p.error, m, void 0));
  }
}

function ie(e) {
  switch (e.kind) {
   case "timed_out":
   case "unreachable":
   case "dropped":
   case "transport_error":
   case "cancelled":
    return e;

   default:
    return {
      kind: "transport_error",
      detail: `unexpected: ${e.kind}`
    };
  }
}

async function qe(e, n, r, o, u, s) {
  let m = Date.now(), p = $Y(s.deadlineMs), f = Rvs(u), _ = await U(e, {
    deadlineAt: m + p,
    recovery: n,
    signal: s.signal
  }, (g, w) => e1(g, {
    name: r,
    arguments: {
      ...o,
      [xFe]: u
    },
    _meta: {
      [Avs]: s.toolUseId,
      ...f !== void 0 && {
        [Tvs]: f
      }
    }
  }, {
    signal: s.signal,
    timeout: w
  }));
  if (_.kind === "ok") {
    let g = Fe(_.value, Date.now() - m, p);
    return g.kind === "result" ? {
      ...g,
      metaCopy: f === void 0 ? "omitted" : "attached"
    } : g;
  }
  if (s.signal.aborted) return {
    kind: "cancelled"
  };
  switch (_.kind) {
   case "connect_failed":
    return {
      kind: "unreachable",
      detail: La(l(_.error))
    };

   case "expired_twice":
    return {
      kind: "unreachable",
      detail: "the device bridge rejected the session again right after re-initializing it; nothing ran"
    };

   case "failed":
    return le(_.error, p, s.toolUseId);
  }
}

function Fe(e, n, r) {
  let o = bz(e);
  switch (o.envelope.status) {
   case "malformed":
    return {
      kind: "transport_error",
      detail: "malformed result envelope",
      unreadableResult: !0
    };

   case "present":
    return {
      kind: "result",
      content: o.content,
      isError: o.isError,
      envelope: o.envelope.envelope,
      elapsedMs: n,
      responseBytes: sT(e),
      ...{}
    };

   case "absent":
    {
      let u = o.isError ? de(e, ue(o.content), r) : void 0;
      if (u) return u;
      return {
        kind: "result",
        content: o.content,
        isError: o.isError,
        envelope: void 0,
        elapsedMs: n,
        responseBytes: sT(e)
      };
    }
  }
}

function de(e, n, r) {
  let o = Ue(e);
  if (o !== void 0 && Le.has(o)) return {
    kind: "timed_out",
    capMs: r
  };
  if (o !== void 0 && Oe.has(o)) return {
    kind: "dropped",
    detail: `bridge: ${o}`
  };
  if (o !== void 0 && De.has(o)) return {
    kind: "unreachable",
    detail: `bridge: ${o}`,
    ...o === "not_connected" && {
      machineNotAnswering: !0
    }
  };
  if (o === "malformed_result") return {
    kind: "transport_error",
    detail: "bridge: malformed result",
    unreadableResult: !0
  };
  if (n.length > Be) return;
  if (xe.test(n)) return {
    kind: "timed_out",
    capMs: r
  };
  if (He.test(n)) return {
    kind: "dropped",
    detail: "bridge: disconnected"
  };
  if (Ie.test(n)) return {
    kind: "unreachable",
    detail: "bridge: not connected",
    machineNotAnswering: !0
  };
  return;
}

function Ue(e) {
  let n = e !== null && typeof e === "object" && "_meta" in e ? e._meta : void 0;
  if (n === null || typeof n !== "object") return;
  let r = n, o = r[Me];
  if (typeof o === "string") return o;
  return r[Pe] !== void 0 ? "not_connected" : void 0;
}

function le(e, n, r) {
  if (se(e) === Ae || E(e) === "REQUEST_TIMEOUT") return {
    kind: "timed_out",
    capMs: n
  };
  let o = La(l(e));
  if (se(e) === x9 && $e(e, r)) return {
    kind: "approval_unverified"
  };
  if (P9(e) !== "downstream_unreachable") return {
    kind: "transport_error",
    detail: o
  };
  return je.has(E(e) ?? "") ? {
    kind: "unreachable",
    detail: o
  } : {
    kind: "dropped",
    detail: o
  };
}

var je = new Set([ "ECONNREFUSED", "ConnectionRefused", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN", "FailedToOpenSocket" ]);

function $e(e, n) {
  let r = e !== null && typeof e === "object" && "data" in e ? e.data : void 0;
  if (typeof r !== "object" || r === null) return !1;
  let o = r;
  return typeof o.args_sha256 === "string" && typeof o.tool_name === "string" && typeof o.tool_use_id === "string" && n !== void 0 && o.tool_use_id === n;
}

function se(e) {
  return e !== null && typeof e === "object" && "code" in e && typeof e.code === "number" ? e.code : void 0;
}

function ue(e) {
  return typeof e === "string" ? e : e.flatMap(n => n.type === "text" ? [ n.text ] : []).join(`\n`);
}

var Ve = "attached-machine";

function ce(e, n, r) {
  let o = n.map(h => ({
    ...h,
    name: cx(h.name)
  })), u = o.filter(h => RJ.has(h.name)).map(h => ({
    toolName: h.name,
    meta: Ge(h),
    raw: h._meta?.[EO]
  })), s = o.filter(h => !RJ.has(h.name) && KHe(h.name) && h._meta?.[mhe] !== void 0), m = s.flatMap(h => {
    let O = Ke(h);
    return O === void 0 ? [] : [ {
      bridgeName: h.name,
      marker: O
    } ];
  }), p = new Set(m.map(h => h.bridgeName)), f = new Set(s.filter(h => !p.has(h.name)).map(h => h.name)), _ = f.size, g = N(u, h => h.meta === void 0), w = new Set(u.map(h => h.toolName)), v = new Set(o.filter(h => uTe.has(h.name)).map(h => h.name)), C = new Map(m.map(({bridgeName: h, marker: O}) => [ h, {
    localName: O.tool
  } ])), S = new Set([ ...u.flatMap(h => h.meta ? [ h.meta.target.name ] : []), ...m.map(({marker: h}) => h.target.name) ]), R = o.reduce((h, O) => {
    let T = vn(O.name);
    return h.set(T, (h.get(T) ?? 0) + 1), h;
  }, new Map), M = s.some(h => (R.get(vn(h.name)) ?? 0) > 1), y = S.size > 1 ? "two_names" : w.size < u.length || M ? "duplicate_tool" : void 0;
  if (u.length === 0 && m.length === 0 && _ === 0) return {
    hosts: [],
    invalid: y,
    unreadable: 0,
    unreadableMarkers: _
  };
  let B = u.find(h => h.meta)?.meta, q = B?.target ?? m[0]?.marker.target, P = B === void 0 ? u.map(h => h.raw) : [], F = P.map(xvs).find(h => h !== void 0), G = P.map(Pvs).find(h => h !== void 0);
  return {
    hosts: [ {
      kind: "remote",
      source: "bridge",
      name: q?.name ?? Ve,
      status: y === void 0 ? "online" : "offline",
      enforcement: "self",
      description: q,
      servedTools: w,
      passthroughTools: C,
      rejectedPassthroughTools: f,
      plumbingTools: v,
      protocol: F !== void 0 ? {
        kind: "incompatible",
        announced: F
      } : YUn(B?.protocol_versions ?? G ?? (u.length === 0 ? [ ru ] : void 0)),
      transport: ae(e, r)
    } ],
    invalid: y,
    unreadable: g,
    unreadableMarkers: _
  };
}

function Ke(e) {
  let n = t2t(cx(e._meta?.[mhe]));
  return n !== void 0 && n.tool === zs(...ze(e.name)) && lse(n.target.name) ? n : void 0;
}

function ze(e) {
  let n = e.indexOf("__");
  return n < 0 ? [ "", e ] : [ e.slice(0, n), e.slice(n + 2) ];
}

function Ge(e) {
  let n = JUn(cx(e._meta?.[EO]));
  return n !== void 0 && n.tool === e.name && lse(n.target.name) ? n : void 0;
}

async function fe(e, n, r, o, u) {
  if (!uTe.has(r)) throw Error("callPlumbing: not a plumbing tool");
  if (u.signal.aborted) return {
    kind: "cancelled"
  };
  let s = $Y(u.deadlineMs), m = {
    subtype: "remote_plumbing_call",
    ...Lvs({
      instanceId: n.instanceId,
      host: n.host,
      name: r,
      args: o,
      issuedAt: Date.now(),
      deadlineMs: s
    })
  }, p;
  try {
    p = e.sendServedCallRequest({
      request: m,
      accepts: Xe,
      signal: u.signal
    });
  } catch (g) {
    return {
      kind: "transport_error",
      detail: `send failed: ${l(g)}`
    };
  }
  if (!p.sent) return p.reply.catch(() => {}), {
    kind: "unreachable",
    detail: "the session stream is closed; nothing was sent"
  };
  let f = !1, _ = setTimeout(() => {
    f = !0, p.cancel();
  }, s);
  try {
    let g = await p.reply;
    return Je(g) ?? {
      kind: "transport_error",
      detail: "the answer was not a tool result"
    };
  } catch (g) {
    if (f) return {
      kind: "timed_out",
      capMs: s
    };
    if (u.signal.aborted) return {
      kind: "cancelled"
    };
    if (g instanceof pd) return {
      kind: "dropped",
      detail: "the session stream closed after the request left"
    };
    return {
      kind: "transport_error",
      detail: l(g)
    };
  } finally {
    clearTimeout(_);
  }
}

function me(e) {
  let n = typeof e === "object" && e !== null && "result" in e ? e.result : void 0;
  if (typeof n !== "object" || n === null) return;
  return Array.isArray(n.content) ? n : void 0;
}

function Xe(e) {
  try {
    if (GUn(e)) return !1;
    return me(e) !== void 0;
  } catch {
    return !1;
  }
}

function Je(e) {
  let n = me(e);
  if (n === void 0) return;
  let {content: r, structuredContent: o, isError: u} = n;
  return {
    kind: "result",
    structuredContent: o,
    text: r.flatMap(s => typeof s === "object" && s !== null && s.type === "text" && typeof s.text === "string" ? [ s.text ] : []).join(`\n`),
    isError: u === !0
  };
}

var JZn = {
  maxRequestBytes: 4128768,
  defaultDeadlineMs: 58e3
}, ge = 6e4, jet = 1e4;

function eYs(e) {
  let n = {
    stale: !1,
    quietMisses: []
  }, r = e.limits ?? JZn;
  return {
    kind: "session",
    limits: r,
    call: (o, u, s, m) => Qe(e, n, r, o, u, s, m),
    markUnresponsive: () => {
      n.stale = !0;
    },
    checkLive: async ({signal: o, hold: u}) => {
      let s = e.host(), m = s?.live(), p = e.now ?? Date.now;
      if (s === void 0 || m === void 0 || o.aborted || !(m.status === "offline" || n.stale || p() - m.lastHeardAt > ge)) return;
      if (he(s, p())) return V(s);
      let f = await _e(e, n, s, o);
      if (f === "missed" && u !== void 0 && s.live()?.status === "online" && !n.stale) {
        if (u.notify("waiting"), f = await sn(e, n, s, o, u.ms), f === "there") u.notify("back");
      }
      if (f !== "missed") return;
      return s.markAway("probe_missed"), V(s);
    },
    saidAsleep: () => e.host()?.live()?.asleepSince !== void 0,
    probeLive: async ({signal: o}) => {
      let u = e.host();
      if (u === void 0 || u.live() === void 0 || o.aborted) return;
      let s = (e.now ?? Date.now)(), m = await K(e, u, o), p = (u.live()?.lastHeardAt ?? -1 / 0) > s;
      if (m === "answered" || p) return n.stale = !1, !0;
      if (m !== "missed") return;
      return u.markAway("probe_missed"), !1;
    },
    isAway: () => e.host()?.live()?.status === "offline",
    silence: {
      quietForMs: () => {
        let o = e.host()?.live();
        return o === void 0 || o.status === "offline" || o.asleepSince !== void 0 ? void 0 : (e.now ?? Date.now)() - o.lastHeardAt;
      },
      probe: o => dn(e, n, o),
      missed: () => we(e, n),
      ownStreamFrameAt: () => e.sender.readStreamFrameAt?.(),
      giveUp: () => {
        e.host()?.markAway("probe_missed");
      }
    },
    isRechecked: () => e.rechecked?.() === !0,
    ...e.sender.withdrawStandingServedCall !== void 0 && {
      withdrawStanding: o => {
        e.sender.withdrawStandingServedCall?.(o);
      }
    },
    callPlumbing: async (o, u, s) => {
      let m = e.host();
      if (m === void 0) return {
        kind: "unreachable",
        detail: "the machine is no longer announced on this session"
      };
      let p = await fe(e.sender, {
        instanceId: m.instanceId,
        host: m.hostName
      }, o, u, s);
      if (p.kind === "result") m.heard((e.now ?? Date.now)());
      return p;
    }
  };
}

function V(e) {
  return e.live()?.asleepSince !== void 0 ? {
    kind: "unreachable",
    detail: "it said it was going to sleep",
    machineNotAnswering: !0,
    saidAsleep: !0
  } : {
    kind: "unreachable",
    detail: "the machine did not answer a liveness check on this session; nothing was sent",
    machineNotAnswering: !0
  };
}

function he(e, n) {
  let r = e.live()?.asleepSince;
  return r !== void 0 && n >= r && n - r < jUn;
}

async function Qe(e, n, r, o, u, s, m) {
  let p = e.now ?? Date.now;
  if (m.signal.aborted) return {
    kind: "cancelled"
  };
  let f = e.host(), _ = f?.live();
  if (f === void 0 || _ === void 0) return {
    kind: "unreachable",
    detail: "the machine is not announcing on this session",
    machineNotAnswering: !0
  };
  let g = "op" in s && s.op === "outcome_of";
  if (!g && (_.status === "offline" || n.stale || p() - _.lastHeardAt > ge)) {
    if (he(f, p())) return V(f);
    let T = p(), A = await K(e, f, m.signal);
    if (A === "cancelled") return {
      kind: "cancelled"
    };
    if (A === "unsent") return {
      kind: "unreachable",
      detail: "this session's event stream is not accepting requests; nothing was sent"
    };
    if (A === "stalled" || A === "taken_back") return {
      kind: "stalled",
      capMs: e.probeDeadlineMs ?? jet,
      request: "probe",
      takenBack: A === "taken_back"
    };
    if (A === "stream_lost") return {
      kind: "unreachable",
      detail: "this session could not complete the liveness check for a reason on its own side (its event stream closed, the service refused the write that carried it, or that write had not completed in time); the machine was not reached and nothing was sent"
    };
    let x = A === "missed" && (f.live()?.lastHeardAt ?? -1 / 0) > T;
    if (A !== "answered" && !x) {
      if (A === "missed") f.markAway("probe_missed");
      let D = e.host(), ne = D?.live();
      if (D === void 0 || D.instanceId === f.instanceId || ne === void 0 || ne.status === "offline") return A === "gone" ? {
        kind: "unreachable",
        detail: "the machine withdrew from this session while it was being asked whether it is still there; nothing was sent",
        machineNotAnswering: !0
      } : V(f);
      f = D;
    }
    n.stale = !1;
  }
  let w = $Y(m.deadlineMs), v = p(), C = f.epoch(), S = C === void 0 ? {} : {
    sentUnderEpoch: C
  }, R = "op" in s ? s.op : s.approval ? 2 : 1, M = o2t(R), y = {
    posts: 0
  }, B = T => {
    switch (T) {
     case "sending":
      y.posts += 1, y.startedAt ??= p(), md(s.call_id, "post started", {
        leg: R,
        queue_ms: y.startedAt - v,
        attempt: y.posts
      }, M);
      return;

     case "accepted":
      if (y.acceptedAt === void 0) {
        y.acceptedAt = p();
        try {
          m.onAccepted?.();
        } catch (A) {
          t(`[remote-tools] a leg's acceptance was not reported: ${l(A)}`);
        }
      }
      md(s.call_id, "post accepted", {
        leg: R,
        post_ms: y.startedAt === void 0 ? void 0 : y.acceptedAt - y.startedAt,
        attempt: y.posts
      }, M);
      return;

     case "not_accepted":
     case "indeterminate":
      md(s.call_id, "post not accepted", {
        leg: R,
        phase: T,
        attempt: y.posts
      }, M);
    }
  }, q, P;
  try {
    P = e.sender.sendServedCallRequest({
      onUpload: B,
      request: {
        subtype: "remote_tool_call",
        ...Hvs({
          instanceId: f.instanceId,
          host: f.hostName,
          name: o,
          input: u,
          envelope: s,
          toolUseId: m.toolUseId,
          issuedAt: v,
          deadlineMs: w
        })
      },
      accepts: T => {
        if (!tn(T, s.call_id)) return !1;
        if (g && GUn(T)) return q = T, !1;
        return !0;
      },
      signal: m.signal
    });
  } catch (T) {
    return {
      kind: "transport_error",
      detail: `send failed: ${l(T)}`
    };
  }
  if (!P.sent) return {
    kind: "unreachable",
    detail: "this session's event stream is closed; nothing was sent"
  };
  md(s.call_id, "sent", {
    leg: R,
    host_inst: f.instanceId,
    host_epoch: C,
    deadline_ms: w
  }), m.onSent?.({
    instanceId: f.instanceId,
    epoch: C,
    requestId: P.requestId
  });
  let F = !g && !("approval" in s && s.approval?.decision === "deny"), {settled: G, late: h} = await be(P, w, m.signal, {
    holdAtDeadline: m.onHeldAtDeadline !== void 0,
    withdrawable: F
  }), O = T => {
    let A = Ze(T, {
      state: n,
      limits: r,
      entry: f,
      sent: P,
      toolName: o,
      callId: s.call_id,
      capMs: w,
      held: h !== void 0,
      sentUnderEpoch: S,
      elapsedMs: () => p() - v,
      heardNow: () => p(),
      heldBelowFloorAnswer: () => q
    });
    if (A.kind === "result") try {
      let x = p(), D = {
        ...y.startedAt !== void 0 && {
          queueMs: y.startedAt - v
        },
        ...y.startedAt !== void 0 && y.acceptedAt !== void 0 && {
          postMs: y.acceptedAt - y.startedAt
        },
        ...y.acceptedAt !== void 0 && {
          replyWaitMs: x - y.acceptedAt
        },
        totalMs: x - v,
        posts: y.posts
      };
      md(s.call_id, "answered", {
        leg: R,
        total_ms: D.totalMs,
        queue_ms: D.queueMs,
        post_ms: D.postMs,
        reply_wait_ms: D.replyWaitMs,
        posts: D.posts
      }, M), m.onTransit?.(D);
    } catch (x) {
      t(`[remote-tools] a leg's transit was not reported: ${l(x)}`);
    }
    return A;
  };
  if (h !== void 0) m.onHeldAtDeadline?.({
    late: h.then(O),
    withdraw: () => P.cancel(),
    takeBack: () => F && P.withdraw(),
    accepted: () => {
      let T = P.delivery();
      return T === "delivered" || T === "untracked";
    }
  });
  return O(G);
}

function Ze(e, {state: n, limits: r, entry: o, sent: u, toolName: s, callId: m, capMs: p, held: f, sentUnderEpoch: _, elapsedMs: g, heardNow: w, heldBelowFloorAnswer: v}) {
  let C = () => {
    let S = v();
    if (S === void 0) return;
    md(m, "query deadline; taking the below-floor answer held for it", {
      deadline_ms: p,
      host_inst: o.instanceId
    });
    let R = J(S, g());
    return R.kind === "dropped" ? {
      ...R,
      ..._
    } : R;
  };
  switch (e.kind) {
   case "answered":
    {
      let S = J(e.payload, g());
      if (nn(S)) n.stale = !1, o.heard(w());
      return S.kind === "dropped" ? {
        ...S,
        ..._
      } : S;
    }

   case "deadline":
    {
      let S = C();
      if (S !== void 0) return S;
      if (f) return md(m, "no answer by the deadline; request left standing, checking on it", {
        deadline_ms: p,
        host_inst: o.instanceId
      }), {
        kind: "timed_out",
        capMs: p,
        ..._
      };
      if (md(m, "no answer by the deadline; request withdrawn", {
        deadline_ms: p,
        host_inst: o.instanceId,
        error_replies_ignored: u.errorRepliesIgnored()
      }), p >= r.defaultDeadlineMs) n.stale = !0;
      return {
        kind: "timed_out",
        capMs: p,
        ..._
      };
    }

   case "stalled":
    return md(m, e.takenBack ? "still queued here at the deadline; taken back before any write carried it" : "still queued here at the deadline; cancelled behind it", {
      deadline_ms: p,
      host_inst: o.instanceId
    }), {
      kind: "stalled",
      capMs: p,
      request: "call",
      takenBack: e.takenBack
    };

   case "unconfirmed":
    {
      let S = C();
      if (S !== void 0) return S;
      return md(m, "deadline reached with the write carrying the request unresolved; withdrawn, delivery unknown", {
        deadline_ms: p,
        host_inst: o.instanceId,
        delivery: e.delivery
      }), {
        kind: "dropped",
        why: "write_unresolved",
        detail: "the write carrying the request to the session service had not completed, or ended without an answer, by its deadline; whether the machine received it is unknown",
        ..._
      };
    }

   case "cancelled":
    return {
      kind: "cancelled"
    };

   case "dropped":
    return {
      kind: "dropped",
      detail: "this session's event stream closed after the call was sent",
      ..._
    };

   case "undelivered":
    return {
      kind: "unreachable",
      detail: `the session service refused the request${e.status !== void 0 ? ` (HTTP ${e.status})` : ""}; nothing was delivered`
    };

   case "delivery_unknown":
    return {
      kind: "dropped",
      detail: `an upload of the request ended without an answer and a later attempt was refused${e.status !== void 0 ? ` (HTTP ${e.status})` : ""}; whether the machine received it is unknown`,
      ..._
    };

   case "gone":
    return {
      kind: "host_gone",
      why: e.why,
      unsent: e.unsent
    };

   case "failed":
    return {
      kind: "transport_error",
      detail: e.detail
    };
  }
}

async function be(e, n, r, {holdAtDeadline: o, withdrawable: u}) {
  let s = e.reply.then(f => ({
    kind: "answered",
    payload: f
  }), f => {
    if (r.aborted) return {
      kind: "cancelled"
    };
    if (f instanceof a2t) return {
      kind: "undelivered",
      status: f.status
    };
    if (f instanceof i2t) return {
      kind: "delivery_unknown",
      status: f.status
    };
    if (f instanceof pd) return {
      kind: "dropped"
    };
    if (f instanceof s2t) return {
      kind: "gone",
      why: f.why,
      unsent: e.delivery() === "queued"
    };
    return {
      kind: "failed",
      detail: l(f)
    };
  }), m = await We(s, n);
  if (m !== void 0) return {
    settled: m,
    late: void 0
  };
  let p = e.delivery();
  if (p === "queued") {
    if (u && e.withdraw()) return {
      settled: {
        kind: "stalled",
        takenBack: !0
      },
      late: void 0
    };
    return e.cancel(), {
      settled: {
        kind: "stalled",
        takenBack: !1
      },
      late: void 0
    };
  }
  if (o) return {
    settled: {
      kind: "deadline"
    },
    late: s
  };
  return e.cancel(), {
    settled: p === "in_flight" || p === "indeterminate" ? {
      kind: "unconfirmed",
      delivery: p
    } : {
      kind: "deadline"
    },
    late: void 0
  };
}

function en(e) {
  return e.kind === "approval_unverified" || e.kind === "result" && e.envelope?.outcome === "refused";
}

function nn(e) {
  return !en(e) && e.kind !== "dropped";
}

function tn(e, n) {
  try {
    return on(e, n);
  } catch (r) {
    return t(`[remote-tools] an unreadable reply was not taken as an answer: ${l(r)}`), 
    !1;
  }
}

function on(e, n) {
  let r = L(e) ? e.result : void 0, o = bz(r);
  switch (o.envelope.status) {
   case "present":
    return o.envelope.envelope.call_id === n;

   case "malformed":
    return rn(r) === n;

   case "absent":
    return !1;
  }
}

function rn(e) {
  if (!L(e)) return;
  return [ e.structuredContent, e._meta ].filter(L).map(r => r[EO]).find(L)?.call_id;
}

function J(e, n) {
  if (GUn(e)) {
    let {[Idt]: s, ...m} = e, p = J(m, n), f = p.kind === "result" && p.envelope?.outcome === "refused" ? p.envelope : void 0;
    return {
      kind: "dropped",
      why: "unverified_refusal",
      detail: "a sender this session could not verify reported the call refused; the machine itself is asked what became of it",
      ...p.kind === "result" && f !== void 0 && {
        reported: {
          kind: "result",
          content: "",
          isError: p.isError,
          envelope: {
            v: f.v,
            outcome: f.outcome,
            target: {
              name: "",
              working_dir: ""
            },
            code: f.code,
            ...f.reason !== void 0 && {
              reason: f.reason
            },
            ...f.limit !== void 0 && {
              limit: f.limit
            },
            message: ""
          },
          elapsedMs: p.elapsedMs,
          responseBytes: p.responseBytes
        }
      }
    };
  }
  let r = L(e) ? e.result : void 0, o = bz(r);
  if (o.envelope.status === "malformed") return {
    kind: "transport_error",
    detail: "malformed result envelope",
    unreadableResult: !0
  };
  if (o.envelope.status === "absent") return {
    kind: "transport_error",
    detail: "answer without an envelope"
  };
  let u = o.envelope.envelope;
  if (u.outcome === "refused" && u.code === "no_approval") return {
    kind: "approval_unverified"
  };
  return {
    kind: "result",
    content: o.content,
    isError: o.isError,
    envelope: u,
    elapsedMs: n,
    responseBytes: sT(r),
    ...{}
  };
}

async function _e(e, n, r, o) {
  let u = (e.now ?? Date.now)(), s = await K(e, r, o), m = (r.live()?.lastHeardAt ?? -1 / 0) > u, p = e.host(), f = p?.instanceId !== r.instanceId;
  if (s === "answered" || s === "missed" && (m || f)) n.stale = !1;
  if (s === "answered" || s === "missed" && m || s !== "cancelled" && f && p !== void 0) return "there";
  return s === "missed" && !f ? "missed" : "unknown";
}

async function sn(e, n, r, o, u) {
  if (n.hold === void 0) {
    let m = new AbortController, p = an(e, n, r, m.signal, u);
    n.hold = {
      ended: p.finally(() => {
        n.hold = void 0;
      }),
      stop: m,
      waiting: 0
    };
  }
  let s = n.hold;
  s.waiting += 1;
  try {
    return await Ea(s.ended, o, () => new Ye);
  } catch {
    return "unknown";
  } finally {
    if (s.waiting -= 1, s.waiting === 0) s.stop.abort();
  }
}

async function an(e, n, r, o, u) {
  let s = e.probeDeadlineMs ?? jet;
  for (let m = u; m > 0; m -= s) {
    let p = await _e(e, n, r, o);
    if (p !== "missed") return p;
  }
  return "missed";
}

function we(e, n) {
  let r = n.quietMisses[0], o = e.host()?.live();
  if (r !== void 0 && (o === void 0 || ye(o, r.writtenAt))) n.quietMisses = [];
  return n.quietMisses;
}

function ye(e, n) {
  return e.lastHeardAt > n || e.lastStillHereAt !== void 0 && e.lastStillHereAt > n;
}

function dn(e, n, r) {
  if (n.quietProbe !== void 0) return n.quietProbe;
  let o = e.host(), u = o?.live();
  if (o === void 0 || u === void 0 || u.asleepSince !== void 0) return Promise.resolve(void 0);
  let s = (e.now ?? Date.now)(), m = r ?? e.probeDeadlineMs ?? jet, p = K(e, o, (new AbortController).signal, {
    putWithinMs: WUn,
    deadlineMs: m
  }).then(f => {
    let _ = o.live();
    if (f === "answered" || f === "missed" && _ !== void 0 && ye(_, s)) {
      if (f === "answered" || (_?.lastHeardAt ?? -1 / 0) > s) n.stale = !1;
      return n.quietMisses = [], !0;
    }
    if (f !== "missed" || _ === void 0 || _.asleepSince !== void 0) return;
    return n.quietMisses = [ ...we(e, n), {
      writtenAt: s,
      waitedMs: m
    } ], !1;
  }).catch(f => {
    t(`[remote-tools] a liveness probe for a waiting call failed: ${l(f)}`);
    return;
  }).finally(() => {
    n.quietProbe = void 0;
  });
  return n.quietProbe = p, p;
}

async function K(e, n, r, o) {
  let u = e.now ?? Date.now, s = o?.deadlineMs ?? e.probeDeadlineMs ?? jet, m = u(), p, f;
  try {
    f = e.sender.sendServedCallRequest({
      request: {
        subtype: "remote_tools_probe",
        instance_id: n.instanceId,
        issued_at: m,
        deadline_ms: s
      },
      accepts: ln,
      signal: r,
      ...o !== void 0 && {
        onUpload: g => {
          if (g === "accepted") p ??= u();
        }
      }
    });
  } catch (g) {
    return t(`[remote-tools] liveness probe to ${n.hostName} could not be sent: ${l(g)}`), 
    "unsent";
  }
  if (!f.sent) return "unsent";
  let {settled: _} = await be(f, s, r, {
    holdAtDeadline: !1,
    withdrawable: !0
  });
  if (_.kind === "answered") {
    let g = L(_.payload) ? _.payload.result : void 0;
    return n.heard(u(), L(g) ? Lho(g.epoch) : void 0), "answered";
  }
  switch (_.kind) {
   case "cancelled":
    return "cancelled";

   case "undelivered":
   case "failed":
    return "unsent";

   case "stalled":
    return _.takenBack ? "taken_back" : "stalled";

   case "gone":
    return "gone";

   case "deadline":
    return o !== void 0 && (p === void 0 || m + s - p < (e.probeDeadlineMs ?? jet) - o.putWithinMs) ? "stream_lost" : "missed";

   case "dropped":
   case "delivery_unknown":
   case "unconfirmed":
    return "stream_lost";
  }
}

function ln(e) {
  let n = L(e) ? e.result : void 0;
  return L(n) && Lho(n.epoch) !== void 0;
}

function L(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}

function Wet(e) {
  return {
    toolState: e.toolState,
    agentContext: e.agentContext,
    mcpClients: () => $S(e)
  };
}

var un = 8e3, cn = 5e3, fn = 3e4, mn = 2e3, W = 5e3, Y = 6e4;

class I {
  recovery=new X;
  connection=void 0;
  listingMemo=void 0;
  synced=!1;
  lastListingFailed=!1;
  lastForcedRelistAt=void 0;
  reportedUnmatched=!1;
  provisional=void 0;
  setAside=0;
  offer="unread";
  lastListedAt=void 0;
  unconnectedSince=void 0;
  failedAt=void 0;
  inFlight=void 0;
}

function b6o(e) {
  let n = e.toolState.get(I), r = Date.now(), o = n.provisional !== void 0 && (n.provisional.stub || r - n.provisional.since < Y) ? W : pn;
  if (n.lastForcedRelistAt !== void 0 && r - n.lastForcedRelistAt < o || n.lastListedAt !== void 0 && r - n.lastListedAt < W) return !1;
  n.lastForcedRelistAt = r;
  let u = n.connection;
  if (u !== void 0) H().fetchToolsForClient.cache.delete(qn(u.name, u.config));
  return n.synced = !1, n.listingMemo = void 0, !0;
}

var pn = 3e4;

async function zet(e, n, r) {
  QZn(e, n, r), await gn(e, n, r), QZn(e, n, r);
}

function QZn(e, n, r) {
  let o = n.sourceHosts("session");
  n.replaceRemoteHosts("session", e.toolState.get(Vv).hostsForTable());
  let u = n.sourceHosts("session");
  if (z(o) === z(u)) return;
  i("tengu_remote_tool_targets", {
    event: e.toolState.get(Vv).entries().length === 0 ? b("withdrawn") : c(Te(o, u)),
    source: b("session"),
    trigger: c(r),
    target_count: u.length,
    served_tool_count: u.reduce((s, m) => s + m.servedTools.size, 0),
    passthrough_tool_count: u.reduce((s, m) => s + (m.passthroughTools?.size ?? 0), 0),
    target_kind: pe(u[0]?.description?.kind),
    target_platform: pe($Ot(u[0]?.description?.platform)),
    incompatible_count: N(u, s => s.protocol.kind === "incompatible")
  });
}

async function gn(e, n, r) {
  if (!await AV()) return;
  let o = e.toolState.get(I);
  return o.inFlight ??= hn(e, o, n, r).catch(u => {
    d(j(u));
  }).finally(() => {
    o.inFlight = void 0;
  }), o.inFlight;
}

function S6o(e) {
  let n = e.toolState.get(I), r = ZZn(e);
  if (n.synced && !n.lastListingFailed && r !== void 0 && r !== "set_aside") return "unlisted";
  if (n.synced && !n.lastListingFailed) return "listed";
  return Q(e) ? "unlisted" : "absent";
}

function w6o(e) {
  return e.toolState.get(I).connection !== void 0;
}

function v6o(e, n) {
  return e.toolState.get(I).lastListingFailed && !n.hosts().some(o => o.kind === "remote" && (o.source === "bridge" || o.source === "session"));
}

async function hn(e, n, r, o) {
  let u = e.mcpClients(), s = Cn(u);
  if (s === void 0) {
    if (T9(e.agentContext)) return;
    if (kn(u, n, o), n.failedAt = void 0, n.lastListingFailed = !1, Q(e)) n.unconnectedSince ??= Date.now(); else n.provisional = void 0, 
    n.unconnectedSince = void 0;
    if (n.connection !== void 0) n.connection = void 0, n.listingMemo = void 0, n.setAside = 0, 
    Se(r, [], {
      invalid: void 0,
      unreadable: 0,
      unreadableMarkers: 0,
      trigger: o
    });
    return;
  }
  let m = H().fetchToolsForClient.cache.get(qn(s.name, s.config)), p = e.toolState.get(Vv).entries().some(M => M.status === "online"), f = o !== "resolve" && n.provisional?.stub === !0 && !gN();
  if (n.synced && s === n.connection && m === n.listingMemo && (p || f || !Sn(n.provisional))) return;
  if (n.failedAt?.connection === s && Date.now() - n.failedAt.time < fn) return;
  let _ = Date.now(), g = await U(s, {
    deadlineAt: _ + un,
    recovery: n.recovery,
    idempotent: !0
  }, (M, y) => bn(M, Math.min(y, cn)));
  if (g.kind !== "ok") {
    n.lastListingFailed = !0, n.failedAt = Date.now() - _ >= mn ? {
      connection: s,
      time: Date.now()
    } : void 0, t(`[remote-tools] device-bridge tools/list failed (${g.kind}); keeping last known machines${"error" in g ? `: ${l(g.error)}` : ""}`, {
      level: "warn"
    }), i("tengu_remote_tool_targets", {
      event: b("list_failed"),
      trigger: c(o),
      reason: "error" in g && wn(g.error) ? b("timeout") : c(g.kind)
    });
    return;
  }
  if (g.value.truncated) t("[remote-tools] device-bridge tools/list is paginated; only the first page is read for machine discovery", {
    level: "warn"
  });
  let w = ce(s, g.value.tools, n.recovery), v = gN() ? w : {
    ...w,
    hosts: [],
    invalid: void 0
  }, C = w.hosts.length - v.hosts.length;
  if (n.offer = C > 0 ? "offered" : "none", C !== n.setAside) {
    if (n.setAside = C, C > 0) i("tengu_remote_tool_targets", {
      event: b("listing_set_aside"),
      trigger: c(o),
      host_count: C,
      tool_count: g.value.tools.length,
      stub: g.value.stub,
      invalid: pe(w.invalid)
    }), t("[remote-tools] device-bridge listing offered a machine; not adopted: machines are taken from the session channel alone", {
      level: "warn"
    });
  }
  let S = v.hosts.length === 0;
  if (S && (n.provisional === void 0 || n.provisional.stub !== g.value.stub)) i("tengu_remote_tool_targets", {
    event: b("listed_empty"),
    trigger: c(o),
    tool_count: g.value.tools.length,
    truncated: g.value.truncated,
    has_served_name: g.value.tools.some(M => RJ.has(M.name)),
    marker_count: N(g.value.tools, M => M._meta?.[mhe] !== void 0),
    stub: g.value.stub
  }), t(`[remote-tools] device-bridge listing adopted no machine (${g.value.tools.length} tools${g.value.stub ? p ? ", stub listing \u2014 the bound machine serves over the session channel instead" : ", stub listing \u2014 the bound machine has not announced yet" : ""})`);
  if (v.invalid !== void 0) t(`[remote-tools] device-bridge listing rejected (${v.invalid}): one connection must announce exactly one machine \u2014 its first announced name stays attached but unreachable`, {
    level: "warn"
  });
  Se(r, v.hosts, {
    invalid: v.invalid,
    unreadable: v.unreadable,
    unreadableMarkers: v.unreadableMarkers,
    trigger: o
  });
  let R = !S && n.provisional !== void 0 && m !== void 0 && m === n.listingMemo;
  if (R) H().fetchToolsForClient.cache.delete(qn(s.name, s.config));
  n.connection = s, n.listingMemo = R ? void 0 : m, n.synced = !0, n.lastListedAt = Date.now(), 
  n.unconnectedSince = void 0, n.provisional = S ? {
    at: Date.now(),
    since: n.provisional?.since ?? Date.now(),
    stub: g.value.stub
  } : void 0, n.reportedUnmatched = !1, n.failedAt = void 0, n.lastListingFailed = !1, 
  t(`[remote-tools] device bridge matched: ${s.name} (${g.value.tools.length} tools over ${g.value.pages} page(s))`);
}

async function bn(e, n) {
  let r = await Eit(e, {
    timeout: n
  });
  return {
    tools: r.tools.filter(_n),
    pages: 1,
    truncated: Boolean(r.nextCursor),
    stub: kIe(r) === "stub"
  };
}

function _n(e) {
  return typeof e === "object" && e !== null && typeof e.name === "string";
}

function wn(e) {
  let n = l(e).toLowerCase();
  return n.includes("timed out") || n.includes("timeout");
}

function Q(e) {
  return e.mcpClients().some(n => Z(n) && n.type !== "disabled" && n.type !== "needs-auth");
}

function ZZn(e) {
  let n = yn(e), r = n !== "connecting" && e.toolState.get(I).setAside > 0 ? "set_aside" : n;
  if (n === void 0 || gN()) return r;
  let o = e.toolState.get(Vv);
  if (o.hasAnnouncedThisLife()) return o.entries().length === 0 ? "serves_nothing" : r;
  return (a.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 ? "not_reannounced" : r;
}

function E6o(e) {
  if (gN()) return "none";
  let {offer: n} = e.toolState.get(I);
  if (n !== "unread") return n;
  let r = e.mcpClients().filter(o => o.name === B6);
  return r.length > 0 && !r.some(o => Z(o) || ee(o)) ? "none" : "unread";
}

var ve = 15e3;

function k6o(e) {
  return e ? Math.max(ve, JZn.defaultDeadlineMs) : ve;
}

function xKr(e) {
  let n = e.toolState.get(Vv);
  return (a.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 && !gN() && !(n.hasAnnouncedThisLife() && n.entries().length === 0) && e.toolState.get(mDe).canAsk() && ez() && te();
}

function T6o(e, n, r) {
  return n.has(r) && !e.toolState.get(Vv).withdrawnThisLife(r) && xKr(e);
}

async function A6o(e, n, {deadlineMs: r = JZn.defaultDeadlineMs, sliceMs: o = W, routableOtherwise: u, forMachine: s} = {}) {
  let m = e.toolState.get(Vv);
  if (s === void 0 && m.entries().length > 0) return {
    kind: "announced"
  };
  let p = m.announceWaitExpired();
  if (p !== void 0) return {
    kind: "gave_up_earlier",
    waitedMs: p
  };
  if (s !== void 0 && e.toolState.get(mDe).askOnce({
    workerEpoch: a.CLAUDE_CODE_WORKER_EPOCH ?? 1,
    deadlineMs: r
  })) t("[remote-tools] asked the attached client to announce to this replacement worker");
  let f = Date.now();
  for (;;) {
    if (n.aborted) return {
      kind: "aborted"
    };
    if (s === void 0 ? m.hasAnnouncedThisLife() : m.withdrawnThisLife(s)) return {
      kind: "announced"
    };
    let g = r - (Date.now() - f);
    if (g <= 0) break;
    let w = await PKr(m, n, Math.min(o, g));
    if (w === "announced" && (s === void 0 || u === void 0)) return {
      kind: "announced"
    };
    if (w === "aborted") return {
      kind: "aborted"
    };
    if (u !== void 0 && await u()) return w === "announced" ? {
      kind: "announced"
    } : {
      kind: "routable"
    };
  }
  let _ = Date.now() - f;
  return m.markAnnounceWaitExpired(_), {
    kind: "gave_up",
    waitedMs: _
  };
}

function PKr(e, n, r) {
  return new Promise(o => {
    let u = f => {
      clearTimeout(p), m(), n.removeEventListener("abort", s), o(f);
    }, s = () => u("aborted"), m = e.onNextAnnounce(() => u("announced")), p = setTimeout(f => f("slice"), r, u);
    if (n.addEventListener("abort", s, {
      once: !0
    }), n.aborted) u("aborted");
  });
}

function yn(e) {
  let n = e.toolState.get(I);
  if (n.connection === void 0) return Q(e) && n.unconnectedSince !== void 0 && Date.now() - n.unconnectedSince < Y ? "connecting" : void 0;
  if (!n.provisional) return;
  if (Date.now() - n.provisional.since < Y) return "connecting";
  return n.provisional.stub ? "not_connected" : void 0;
}

function Sn(e) {
  if (e === void 0) return !1;
  let n = Date.now();
  if (!e.stub && n - e.since >= Y) return !1;
  return n - e.at >= W;
}

function kn(e, n, r) {
  let o = e.filter(s => s.name === B6);
  if (o.length === 0 || n.reportedUnmatched) return;
  let u = o.map(Tn);
  if (u.every(s => s === "connecting")) return;
  n.reportedUnmatched = !0, t(`[remote-tools] a '${B6}' MCP entry exists but was not adopted as the device bridge: ${o.map((s, m) => `${u[m]} (type=${s.type}, scope=${s.config.scope})`).join("; ")}`, {
    level: "warn"
  }), i("tengu_remote_tool_targets", {
    event: b("no_bridge_connection"),
    trigger: c(r),
    servers_seen: o.length,
    reason: c(u[0] ?? "none"),
    ingress_base_unset: hh.atStartup === void 0
  });
}

function Tn(e) {
  if (ee(e)) return "scoped_entry";
  if (!("url" in e.config) || typeof e.config.url !== "string") return "no_url";
  if (!ky(e.config.url)) return "not_ccr_proxy_url";
  if (!Rve(e.config.url)) return "not_devices_upstream";
  if (!ke(e.config.url)) return "routing_shape";
  switch (e.type) {
   case "connected":
    return "none";

   case "disabled":
    return "disabled";

   case "needs-auth":
    return "needs_auth";

   default:
    return "connecting";
  }
}

function Cn(e) {
  return e.find(n => n.type === "connected" && Z(n));
}

function Z(e) {
  return e.name === B6 && !ee(e) && "url" in e.config && typeof e.config.url === "string" && Rve(e.config.url) && ke(e.config.url);
}

function ee(e) {
  let {scope: n, pluginSource: r, agentSource: o} = e.config;
  return n === "project" || n === "local" || n === "agent" || r !== void 0 || o !== void 0;
}

function ke(e) {
  try {
    let n = new URL(e), r = n.searchParams.getAll("toolbox_mcp_server_id"), o = /\/v2\/ccr-sessions\/([^/]+)\/mcp$/.exec(n.pathname)?.[1], u = r[0];
    return n.searchParams.getAll("mcp_url").length === 1 && (r.length === 0 || r.length === 1 && (u === B6 || o !== void 0 && u === Rn(o)));
  } catch {
    return !1;
  }
}

function Rn(e) {
  return jft(e, B6);
}

function Se(e, n, {invalid: r, unreadable: o, unreadableMarkers: u, trigger: s}) {
  let m = e.sourceHosts("bridge"), {dropped: p} = e.replaceRemoteHosts("bridge", n);
  if (p.length > 0) t(`[remote-tools] the bridge announced ${p.length} machine(s) under a name this session cannot adopt; not adopted: ${p.join(", ")}`, {
    level: "warn"
  });
  let f = e.sourceHosts("bridge"), _ = z(m) !== z(f);
  if (r !== void 0) i("tengu_remote_tool_targets", {
    event: b("listing_invalid"),
    reason: c(r),
    trigger: c(s)
  });
  let g = _ ? Te(m, f) : void 0;
  if (g !== void 0) i("tengu_remote_tool_targets", {
    event: c(g),
    trigger: c(s),
    target_count: f.length,
    served_tool_count: f.reduce((w, v) => w + v.servedTools.size, 0),
    passthrough_tool_count: f.reduce((w, v) => w + (v.passthroughTools?.size ?? 0), 0),
    target_kind: pe(f[0]?.description?.kind),
    target_platform: pe($Ot(f[0]?.description?.platform)),
    incompatible_count: N(f, w => w.protocol.kind === "incompatible"),
    protocol_version: f[0]?.protocol.kind === "compatible" ? f[0].protocol.version : void 0
  });
  if (o > 0 || u > 0) i("tengu_remote_tool_targets", {
    event: b("unreadable"),
    trigger: c(s),
    unreadable_count: o,
    unreadable_marker_count: u
  });
}

function z(e) {
  return e.map(n => `${n.name}\0${n.status}\0${n.servedTools.size}\0${n.passthroughTools?.size ?? 0}`).sort().join(`\n`);
}

function Te(e, n) {
  let r = e.some(u => u.status === "online"), o = n.some(u => u.status === "online");
  if (e.length === 0) return n.length === 0 ? "changed" : "discovered";
  if (r && !o) return "went_offline";
  if (!r && o) return "came_online";
  return "changed";
}

export { JZn, jet, eYs, Wet, b6o, zet, QZn, S6o, w6o, v6o, ZZn, E6o, k6o, xKr, T6o, A6o, PKr };
