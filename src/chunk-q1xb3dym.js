// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Xf, gh } from "./chunk-znhtg8e4.js";

import { p } from "./chunk-jkzenvsk.js";

import { Bg, GV, TY } from "./chunk-7w62r1zx.js";

import { o, v, M, oe, T, u, U, A } from "./chunk-cvcg6n1z.js";

var k = 4e3, lVt = 16, x = 64, V8o = p(() => u({
  action: A("yield_artifact_replies"),
  from: o().max(512),
  msg_id: o().min(1).max(128),
  session_id: o().max(512),
  slugs: T(o().max(128)).max(lVt),
  reason: U([ "resume", "claim" ]).catch("claim"),
  sent_at: v().finite(),
  claimed_at: v().finite().optional(),
  requester: u({
    cwd: oe().optional(),
    tmux: oe().optional()
  }).optional()
})), K8o = p(() => u({
  action: A("artifact_replies_yielded"),
  orig_msg_id: o().max(128),
  yielded: oe().optional(),
  not_held: oe().optional(),
  refused: oe().optional()
})), q8o = p(() => u({
  action: A("unyield_artifact_replies"),
  orig_msg_id: o().max(128),
  slugs: T(o().max(128)).max(lVt),
  stopped: M().optional()
})), Vvn = {
  setTimeout: (e, i) => {
    let n = setTimeout(e, i);
    return n.unref?.(), n;
  },
  clearTimeout: e => clearTimeout(e)
};

class b {
  outstanding=new Map;
  pendingClaims=new Map;
  holder=null;
  reverter=null;
  sendAnswer=null;
  ownAddress=null;
  delivered=new Map;
  reset() {
    for (let e of this.outstanding.values()) e.timers.clearTimeout(e.timer);
    this.outstanding.clear(), this.pendingClaims.clear(), this.holder = null, this.reverter = null, 
    this.sendAnswer = null, this.ownAddress = null, this.delivered.clear();
  }
}

var P = new K(() => new b);

function y() {
  return P.of(B().host);
}

function z(e, i) {
  while (e.size > x) {
    let n = e.keys().next().value;
    if (n === void 0) break;
    let r = e.get(n);
    e.delete(n), i?.(r, n);
  }
}

function Y8o(e, i, n) {
  let r = n.timers ?? Vvn, s = y();
  return new Promise(c => {
    let a = {
      asked: new Set(i),
      expectPid: n.expectPid,
      sentAt: n.sentAt,
      lost: new Map,
      resolve: c,
      onLate: n.onLate,
      timer: void 0,
      timers: r
    };
    a.timer = r.setTimeout(() => {
      if (s.outstanding.get(e) !== a || a.resolve === null) return;
      if (a.resolve = null, c({
        kind: "timeout",
        lost: [ ...a.lost.keys() ],
        lostTo: [ ...a.lost ]
      }), a.onLate === void 0) s.outstanding.delete(e);
    }, n.timeoutMs ?? k), s.outstanding.set(e, a), z(s.outstanding, l => {
      l.timers.clearTimeout(l.timer), l.resolve?.({
        kind: "timeout",
        lost: [ ...l.lost.keys() ],
        lostTo: [ ...l.lost ]
      }), l.resolve = null;
    });
  });
}

function X8o(e, i) {
  let n = `claim-${i}-${Math.random().toString(36).slice(2)}`, r = y(), s = {
    id: n,
    slugs: new Set(e),
    sentAt: i,
    lost: new Map,
    end: () => void r.pendingClaims.delete(n)
  };
  return r.pendingClaims.set(n, s), s;
}

function J8o(e) {
  let i = y(), n = i.outstanding.get(e);
  if (n === void 0) return [];
  return n.timers.clearTimeout(n.timer), i.outstanding.delete(e), [ ...n.lost ];
}

function Q8o(e) {
  return typeof e === "string" && y().outstanding.has(e);
}

function Z8o(e, i) {
  let n = y(), r = n.outstanding.get(e.orig_msg_id);
  if (r === void 0) return !1;
  if (r.expectPid !== void 0 && i !== void 0 && i !== r.expectPid) return f("artifact_live_subscribe", "yield_answer_pid_mismatch"), 
  !1;
  r.timers.clearTimeout(r.timer);
  let s = a => Array.isArray(a) ? a.filter(l => typeof l === "string" && r.asked.has(l)) : [], c = e.refused === !0 ? {
    kind: "refused"
  } : {
    kind: "yielded",
    yielded: s(e.yielded),
    notHeld: s(e.not_held)
  };
  if (r.resolve !== null) n.outstanding.delete(e.orig_msg_id), r.resolve({
    ...c,
    lost: [ ...r.lost.keys() ],
    lostTo: [ ...r.lost ]
  }); else {
    n.outstanding.delete(e.orig_msg_id), g("artifact_live_subscribe", {
      yield_answer_late: !0
    });
    try {
      r.onLate?.({
        ...c,
        lost: [ ...r.lost.keys() ],
        lostTo: [ ...r.lost ]
      });
    } catch (a) {
      d(a);
    }
  }
  return !0;
}

function z4r(e, i = null) {
  let n = y();
  n.holder = e, n.reverter = i;
}

function H(e, i, n, r) {
  let s = e.delivered.get(i);
  e.delivered.delete(i);
  let c = r?.pid ?? s?.pid;
  e.delivered.set(i, {
    slugs: new Set([ ...s?.slugs ?? [], ...n ]),
    pid: c,
    procStart: r?.procStart ?? s?.procStart
  });
  let a = (l, _) => {
    try {
      e.reverter?.(_, [ ...l.slugs ]);
    } catch (m) {
      d(m);
    }
  };
  while (e.delivered.size > x) {
    let l = [ ...e.delivered ].find(([_, m]) => _ !== i && c !== void 0 && m.pid === c);
    if (l === void 0) break;
    e.delivered.delete(l[0]), a(l[1], l[0]);
  }
  z(e.delivered, a);
}

function C(e, i) {
  if (e.delivered.size < x) return !1;
  if (i === void 0) return !0;
  for (let n of e.delivered.values()) if (n.pid === i) return !1;
  return !0;
}

function e9o(e) {
  return Y(y(), e);
}

function Y(e, i) {
  let n = [];
  for (let [r, s] of [ ...e.delivered ]) if (s.pid !== void 0 && Xf(s.pid)) n.push(...h(e, r, [ ...s.slugs ], i));
  return D(e), n;
}

function t9o(e) {
  let i = y();
  for (let [n, r] of [ ...i.delivered ]) if (r.slugs.delete(e) && r.slugs.size === 0) i.delivered.delete(n);
}

async function D(e) {
  for (let [i, n] of [ ...e.delivered ]) {
    if (n.pid === void 0 || n.procStart === void 0) continue;
    let r;
    try {
      r = await gh(n.pid, n.procStart);
    } catch {
      r = void 0;
    }
    if (r === !1 && e.delivered.get(i) === n) g("artifact_comments_autoreact", {
      yield_taker_reused: !0
    }), h(e, i, [ ...n.slugs ]);
  }
}

function h(e, i, n, r) {
  let s = e.delivered.get(i);
  if (s === void 0) return [];
  let c = [ ...n ].filter(a => s.slugs.delete(a));
  if (s.slugs.size === 0) e.delivered.delete(i);
  if (c.length === 0) return [];
  try {
    return e.reverter?.(i, c, r) ?? [];
  } catch (a) {
    return d(a), [];
  }
}

function G4r(e, i = null) {
  let n = y();
  n.sendAnswer = e, n.ownAddress = i;
}

function E(e, i) {
  let n = i.claimed_at ?? i.sent_at, r = !1, s = [ ...e.pendingClaims.values() ];
  for (let [c, a] of e.outstanding) if (a.resolve !== null) s.push({
    id: c,
    slugs: a.asked,
    sentAt: a.sentAt,
    lost: a.lost
  });
  for (let c of s) {
    if (!i.slugs.some(l => c.slugs.has(l))) continue;
    if (n > c.sentAt || n === c.sentAt && i.from > (e.ownAddress ?? "")) {
      for (let l of i.slugs) if (c.slugs.has(l)) c.lost.set(l, i.from);
    } else r = !0;
  }
  return r ? "refuse" : "proceed";
}

function V4r(e, i, n, r, s) {
  let c = n?.pid, a = n?.writeToken, l = y(), _ = l.sendAnswer;
  if (_ === null) return;
  let m;
  if (s?.refuse === !0) m = "refused"; else if (r - e.sent_at > k - 500 || e.sent_at > r + 1e3 || e.claimed_at !== void 0 && e.claimed_at > e.sent_at + 1e3) f("artifact_comments_autoreact", "yield_request_stale"), 
  m = "refused"; else if (E(l, e) === "refuse") m = "refused"; else if (l.holder === null) m = {
    yielded: [],
    notHeld: [ ...e.slugs ]
  }; else try {
    if (Y(l, {
      transferring: new Set(e.slugs)
    }), C(l, n?.pid)) f("artifact_comments_autoreact", "yield_table_full"), m = "refused"; else m = l.holder({
      msgId: e.msg_id,
      slugs: e.slugs,
      reason: e.reason,
      requester: {
        cwd: e.requester?.cwd,
        tmux: e.requester?.tmux
      }
    });
  } catch (R) {
    d(R), f("artifact_comments_autoreact", "yield_handler_threw"), m = "refused";
  }
  let S = m === "refused" ? {
    orig_msg_id: e.msg_id,
    yielded: [],
    not_held: [],
    refused: !0
  } : {
    orig_msg_id: e.msg_id,
    yielded: m.yielded.slice(0, lVt),
    not_held: m.notHeld.slice(0, lVt)
  }, w = m !== "refused" && m.yielded.length > 0 ? m : null;
  if (w !== null) H(l, e.msg_id, w.yielded, n);
  _(i, S, c, a).then(() => w?.onDelivered?.(), R => {
    if (t(`[reply-yield] answer to ${Bg(i)} failed: ${GV(String(R))}`), w === null) return;
    if (!TY(R)) {
      f("artifact_comments_autoreact", "yield_answer_send_ambiguous"), _(i, S, c, a).catch(() => {}), 
      w.onDelivered?.();
      return;
    }
    f("artifact_comments_autoreact", "yield_answer_undelivered"), h(l, e.msg_id, w.yielded);
  });
}

function n9o(e, i) {
  let n = y(), r = n.delivered.get(e.orig_msg_id);
  if (r === void 0) return !1;
  if (r.pid !== void 0 && i !== void 0 && i !== r.pid) return f("artifact_comments_autoreact", "unyield_pid_mismatch"), 
  !1;
  let s = h(n, e.orig_msg_id, e.slugs, {
    ...e.stopped === !0 && {
      stopped: new Set(e.slugs)
    }
  });
  return s.push(...Y(n)), g("artifact_comments_autoreact", {
    yield_handed_back: s.length
  }), !0;
}

export { lVt, V8o, K8o, q8o, Vvn, Y8o, X8o, J8o, Q8o, Z8o, z4r, e9o, t9o, G4r, V4r, n9o };
