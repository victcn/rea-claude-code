// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ze, ke } from "./chunk-3pqddg8f.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { $G } from "./chunk-6ah1819r.js";

import { t } from "./chunk-kawq2919.js";

import { jRr } from "./chunk-xywp7esx.js";

import { UK } from "./chunk-3kb22va7.js";

import { rl } from "./chunk-84yp45y8.js";

import { $t } from "./chunk-g6nh65r0.js";

import { lA } from "./chunk-n3526wzr.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { Ni } from "./chunk-tzmg667a.js";

import { Bg, GV, TY, wue, oIt, GQt, C8 } from "./chunk-7w62r1zx.js";

import { lVt, Vvn, Y8o, J8o, z4r } from "./chunk-q1xb3dym.js";

import { Phe, Ole, Yvn, iy, zy, Z4r, l9o, d9o, c9o, p9o, f9o, K$, xTe, R2, Gwt } from "./chunk-jtgrm34s.js";

import { Fvn, U4r, Ple } from "./chunk-4et2k1s1.js";

import { ctt } from "./chunk-56c5q77x.js";

import { bDe } from "./chunk-taqh33hd.js";

import { Ri } from "./chunk-4b2xazcw.js";

import { CY } from "./chunk-jd0jznz2.js";

import { Aa } from "./chunk-sre9xcbd.js";

import { O } from "./chunk-1xnsr4dy.js";

var z = 1e3, Q = 200, w = {
  armable: new Set,
  yielded: new Set,
  undo: () => {}
};

async function Z() {
  let n = (await GQt()).find(r => r.pid === process.pid);
  return n === void 0 ? void 0 : {
    sessionId: n.sessionId,
    tmux: n.tmux
  };
}

async function iYs(e) {
  let n = await te(e).finally(() => e.claim?.end());
  if (n.kind === "took_over") g("artifact_live_subscribe", {
    took_over: !0,
    holders: e.holders.length,
    armable_count: n.armable.size,
    yielded_count: n.yielded.size
  }); else f("artifact_live_subscribe", `takeover_${n.kind}`, {
    holders: e.holders.length
  });
  return n;
}

async function te(e) {
  if (!Ni()) return {
    ...w,
    kind: "messaging_off"
  };
  let n = C8();
  if (n === void 0 || e.holders.length === 0) return {
    ...w,
    kind: "no_inbox"
  };
  let r = lA(n), a = e.transport?.ownRecord ?? Z, s = await a().catch(() => {});
  if (s?.sessionId !== e.conversationId) {
    let o = e.transport?.timers ?? Vvn;
    await new Promise(d => void o.setTimeout(d, Q)), s = await a().catch(() => {});
  }
  if (s?.sessionId !== e.conversationId) return {
    ...w,
    kind: "registry_stale"
  };
  let l = s.tmux;
  if (e.holdersIncomplete === !0 && !e.alreadyReplying) return {
    ...w,
    kind: "holder_unreachable"
  };
  let p = e.slugs.filter(o => !(e.claim?.lost.has(o) ?? !1)).slice(0, lVt);
  if (p.length === 0) return {
    ...w,
    kind: "nothing_freed"
  };
  let h = [];
  for (let o of e.holders) {
    if (o.sock === void 0 || o.sock === "" || !(o.peerFeatures?.includes(jRr) ?? !1) || lA(o.sock) === r || Fvn(o.kind)) {
      if (e.alreadyReplying) continue;
      return {
        ...w,
        kind: "holder_unreachable"
      };
    }
    h.push({
      sock: o.sock,
      pid: o.pid
    });
  }
  if (h.length === 0) return {
    ...w,
    kind: "holder_unreachable"
  };
  let c = e.transport?.send ?? oIt, u = e.transport?.sendControl ?? wue, I = e.transport?.timers ?? Vvn, T = e.transport?.now ?? Date.now, G = UK(n), Y = o => O() !== "windows" ? {
    expectPeerPid: o
  } : {}, v = [], D = new Set, {wakes: b, autoReact: X, durable: V} = ee(), W = o => {
    for (let d of o.yielded) {
      let i = b.takenFrom.get(d) ?? [];
      if (!i.some(y => y.msgId === o.msgId)) b.takenFrom.set(d, [ ...i, {
        sock: o.sock,
        pid: o.pid,
        msgId: o.msgId
      } ]);
      if (e.alreadyReplying && (X.userDisarmed || V.stopLatches.isStopped(d) || iy(d) && !zy(d))) v3o(d, u);
    }
  }, U = e.claim?.sentAt ?? T(), A = (o, d, i) => {
    let y = i?.precautionary !== void 0 ? [ ...i.precautionary ] : [ ...o.yielded ].filter(m => d === void 0 || d.has(m));
    if (y.length === 0) return;
    for (let m of y) o.yielded.delete(m);
    g("artifact_live_subscribe", {
      [i?.precautionary !== void 0 ? "takeover_unyield_precautionary" : "takeover_handed_back"]: y.length
    });
    let _ = {
      action: "unyield_artifact_replies",
      orig_msg_id: o.msgId,
      slugs: y,
      ...i?.stopped === !0 && {
        stopped: !0
      }
    };
    u(o.sock, _, Y(o.pid)).catch(m => {
      if (t(`[reply-yield] unyield to ${Bg(o.sock)} failed: ${GV(String(m))}`), TY(m) && !Aa(o.pid)) {
        f("artifact_live_subscribe", "unyield_holder_gone");
        return;
      }
      let k = () => void u(o.sock, _, Y(o.pid)).catch(() => {
        f("artifact_live_subscribe", "unyield_send_failed");
      });
      if (TY(m)) I.setTimeout(k, z); else k();
    });
  }, N = [];
  for (let o of h) {
    let d = CY(), i = {
      sock: o.sock,
      pid: o.pid,
      msgId: d.msg_id,
      yielded: new Set
    };
    v.push(i);
    let y = Y8o(d.msg_id, p, {
      sentAt: U,
      expectPid: o.pid,
      ...e.transport?.timeoutMs !== void 0 && {
        timeoutMs: e.transport.timeoutMs
      },
      ...e.transport?.timers !== void 0 && {
        timers: e.transport.timers
      },
      onLate: _ => {
        if (_.kind !== "yielded") return;
        for (let k of _.yielded) i.yielded.add(k);
        let m = new Map([ ...e.claim?.lost ?? [], ..._.lostTo ]);
        A(i, new Set([ ...i.yielded ].filter(k => m.has(k) ? q(k, i, m, e.alreadyReplying === !0) : !e.alreadyReplying && !D.has(k)))), 
        W(i);
      }
    });
    N.push((async () => {
      try {
        await c(o.sock, {
          action: "yield_artifact_replies",
          from: G,
          session_id: e.conversationId,
          slugs: p,
          reason: e.reason,
          sent_at: T(),
          claimed_at: U,
          requester: {
            cwd: ke(),
            ...l !== void 0 && {
              tmux: l
            }
          }
        }, d, Y(o.pid));
      } catch (_) {
        if (TY(_)) {
          let m = J8o(d.msg_id), k = m.map(([J]) => J);
          return Aa(o.pid) ? {
            kind: "unreachable",
            lost: k,
            lostTo: m
          } : {
            kind: "gone",
            lost: k,
            lostTo: m
          };
        }
      }
      return y;
    })());
  }
  let B = await Promise.all(N), P = new Map, x = new Map, L = new Map, S = new Map(e.claim?.lost ?? []), C = !0, K = !1, F = 0;
  B.forEach((o, d) => {
    for (let [i, y] of o.lostTo) S.set(i, y);
    if (o.kind === "gone") return;
    if (F++, o.kind === "unreachable") {
      C = !1;
      return;
    }
    if (o.kind === "yielded") {
      for (let i of o.yielded) v[d].yielded.add(i), P.set(i, (P.get(i) ?? 0) + 1);
      for (let i of o.notHeld) x.set(i, (x.get(i) ?? 0) + 1);
      for (let i of new Set([ ...o.yielded, ...o.notHeld ])) L.set(i, (L.get(i) ?? 0) + 1);
    } else if (C = !1, o.kind === "refused") K = !0;
  });
  let R = new Set, M = new Set;
  if (C && !K) for (let o of p) {
    if (S.has(o) || (L.get(o) ?? 0) !== F) continue;
    if ((P.get(o) ?? 0) > 0) R.add(o), M.add(o); else if ((x.get(o) ?? 0) === F) R.add(o);
  }
  for (let o of R) D.add(o);
  if (e.alreadyReplying) {
    for (let o of v) for (let d of o.yielded) if (!S.has(d)) M.add(d);
  }
  for (let o of v) {
    let d = new Set([ ...o.yielded ].filter(i => S.has(i) ? q(i, o, S, e.alreadyReplying === !0) : !e.alreadyReplying && !R.has(i)));
    if (d.size > 0) A(o, d);
  }
  if (!e.alreadyReplying) B.forEach((o, d) => {
    if (o.kind === "timeout") A(v[d], void 0, {
      precautionary: p
    });
  });
  for (let o of v) W(o);
  return {
    armable: R,
    yielded: M,
    kind: R.size > 0 ? "took_over" : "nothing_freed",
    undo: o => {
      for (let i of v) A(i, o);
      let d = new Set(v.map(i => i.msgId));
      for (let i of o ?? p) {
        let y = (b.takenFrom.get(i) ?? []).filter(_ => !d.has(_.msgId));
        if (y.length > 0) b.takenFrom.set(i, y); else b.takenFrom.delete(i);
      }
    }
  };
}

function q(e, n, r, a) {
  let s = r.get(e);
  return s !== void 0 && s === UK(n.sock) || !a && !K$(e);
}

function v3o(e, n = wue) {
  j(e, !0, n);
}

function Q1s(e, n = wue) {
  j(e, !1, n);
}

function j(e, n, r) {
  let {wakes: a} = ee(), s = a.takenFrom.get(e);
  if (s === void 0 || K$(e)) return;
  a.takenFrom.delete(e);
  for (let l of s) {
    let p = {
      action: "unyield_artifact_replies",
      orig_msg_id: l.msgId,
      slugs: [ e ],
      ...n && {
        stopped: !0
      }
    }, h = O() !== "windows" ? {
      expectPeerPid: l.pid
    } : {};
    r(l.sock, p, h).catch(c => {
      if (t(`[reply-yield] release to ${Bg(l.sock)} failed: ${GV(String(c))}`), TY(c) && !Aa(l.pid)) return;
      let u = () => void r(l.sock, p, h).catch(() => {
        f("artifact_live_subscribe", "takeover_release_failed");
      });
      if (TY(c)) Vvn.setTimeout(u, z); else u();
    });
  }
  g("artifact_live_subscribe", {
    [n ? "takeover_stop_notified" : "takeover_released"]: s.length
  });
}

function H(e) {
  let n = e.slice(0, 2), r = e.length - n.length;
  return `${n.join(", ")}${r > 0 ? ` and ${r} more` : ""}`;
}

function Aqr(e, n, r, a) {
  let s = U4r({
    kind: "interactive",
    ...typeof r.cwd === "string" && {
      cwd: r.cwd
    },
    ...typeof r.tmux === "string" && {
      tmux: r.tmux
    }
  }, a), l = n === "resume" ? `the session that just resumed this conversation in ${s}` : `another session of this conversation (${s}), which just published or resumed them there`;
  return `Automatic replies to comments on ${H(e)} moved to ${l}; this session keeps watching for new versions only. To take them back here, publish the Artifact again or ask Claude to resume its replies.`;
}

function Cqr(e) {
  return `Automatic replies to comments on ${H(e)} are back in this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).`;
}

function Rqr(e) {
  return `Automatic replies to comments on ${H(e)} were stopped in the other session of this conversation, so they stay off here too. To turn them back on, publish the Artifact again or ask Claude to resume its replies.`;
}

var oe = "Automatic replies to comments on the Artifact(s) this session was answering moved to another session of this same conversation on this machine, at its request; this session keeps its version watch only. Nothing to do \u2014 do not stop or re-arm a watch on your own; a publish the user asks for here takes them back.", ne = "The automatic comment replies this session had handed to another session of this conversation were stopped by the user there; they stay stopped here too. Nothing to do unless the user asks to resume them or to publish again.", ie = "The automatic comment replies are back with this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).";

function aYs(e, n) {
  let r = e === "yielded" ? `Comment replies on ${n} Artifact(s) moved to another session of this conversation` : e === "reverted" ? `Comment replies on ${n} Artifact(s) are back with this session` : `Comment replies on ${n} Artifact(s) were stopped in the other session`, a = e === "yielded" ? oe : e === "reverted" ? ie : ne;
  rl({
    value: Ri({
      taskType: $G,
      summary: $t(r),
      body: `\n<event>${$t(a)}</event>`
    }),
    mode: "task-notification",
    passive: !0,
    priority: "next",
    origin: {
      kind: "task-notification",
      source: $G
    },
    agentId: Ze()
  });
}

function xqr(e) {
  return z4r(n => {
    let r = se(n.slugs, n.msgId), a = r.newlyYielded;
    if (a.length > 0) g("artifact_comments_autoreact", {
      yielded_to_other_session: a.length
    });
    return {
      yielded: r.yielded,
      notHeld: r.notHeld,
      ...a.length > 0 && {
        onDelivered: () => {
          let s = a.filter(l => K$(l));
          for (let l of s) l9o(l);
          if (s.length > 0) e.yielded(s, n.reason, n.requester);
        }
      }
    };
  }, (n, r, a) => {
    for (let u of r) if (a?.stopped?.has(u) ?? !1) p9o(u, n);
    let s = new Set(r.filter(u => f9o(u))), l = new Set(r.filter(u => d9o(u))), p = re(n, r), h = p.filter(u => l.has(u) && !iy(u) && E(u) && !(a?.transferring?.has(u) ?? !1));
    if (h.length > 0) e.reverted(h);
    let c = p.filter(u => l.has(u) && s.has(u));
    if (c.length > 0) e.stoppedElsewhere(c);
    return p;
  }), () => z4r(null);
}

function se(e, n) {
  let {live: r, autoReact: a, durable: s} = ee(), l = [], p = [], h = [];
  for (let c of e) {
    if (K$(c)) {
      Z4r(c, n), l.push(c);
      continue;
    }
    let u = E(c), I = zy(c) && !xTe(c), T = a.enabledMemo !== !1 && !a.userDisarmed && !s.stopLatches.isStopped(c) && (!iy(c) || I);
    if (!u || !T) {
      p.push(c);
      continue;
    }
    Z4r(c, n), Ole(c), Yvn(c), R2(r, c), l.push(c), h.push(c);
  }
  return {
    yielded: l,
    notHeld: p,
    newlyYielded: h
  };
}

function E(e) {
  let {live: n} = ee(), r = n.supervisors.get(e);
  return r !== void 0 && !r.stopped && r.autoReactWiring !== void 0 || n.inFlightWiredIntent.has(e) || bDe().has(e);
}

function re(e, n) {
  let {live: r} = ee(), a = [];
  for (let s of n) {
    if (!c9o(s, e)) continue;
    if (R2(r, s), iy(s) && !zy(s)) ctt(s), v3o(s);
    a.push(s);
    let l = r.supervisors.get(s);
    if (!iy(s) && !E(s)) Q1s(s);
    let p = Phe(s).lastWakeArgs;
    if (!iy(s) && E(s) && l?.taskId !== void 0 && Gwt(l.taskId) && p !== null) Ple({
      ...p,
      seed: !1,
      confirm: void 0,
      confirmBase: void 0,
      confirmAfter: void 0,
      reentry: void 0,
      idlePass: void 0,
      suppressSummonStatus: void 0
    });
  }
  if (a.length > 0) g("artifact_comments_autoreact", {
    yield_reverted: a.length
  });
  return a;
}

export { iYs, v3o, Q1s, Aqr, Cqr, Rqr, aYs, xqr };
