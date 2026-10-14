// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

import { eo, q, Oc } from "./chunk-3pqddg8f.js";

import { f } from "./chunk-3ykz5st8.js";

import { _ } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { nr } from "./chunk-f1zpf9me.js";

import { p } from "./chunk-jkzenvsk.js";

import { Cc, $O } from "./chunk-xywp7esx.js";

import { Fa } from "./chunk-q6wab2jw.js";

import { Rie, d_, eee } from "./chunk-znhtg8e4.js";

import { ufe } from "./chunk-1tdw23h1.js";

import { Yd, Lf, Ore, cce, y3t, hOn, Cqe, Jno, ep, wOn, uro, qA, Iro, Oro } from "./chunk-84yp45y8.js";

import { ku } from "./chunk-7en5gt36.js";

import { ee, eUe } from "./chunk-kq1bg4dg.js";

import { o, v, oe, T, u, ue, U, A } from "./chunk-cvcg6n1z.js";

import { D } from "./chunk-hmqkrrtz.js";

import { basename as J } from "path";

var ot = {
  published: "published",
  comment: "comment"
}, z = 64, W = 16, it = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, st = "", at = p(() => {
  let e = u({
    v: A(1),
    rows: ue(o(), oe())
  }), t = u({
    v: v().gt(1)
  }), n = u({
    stopped: ue(o(), oe())
  }), i = U(ot), r = o().refine(g => Vt(g) !== null), d = u({
    orphans: T(oe()).transform(g => g.slice(0, W).flatMap(m => {
      let c = r.safeParse(m);
      return c.success ? [ c.data ] : [];
    }))
  }), s = u({
    trigger_id: r,
    since: o().regex(it),
    events: T(o()).max(16).transform(g => D(g).flatMap(m => {
      let c = i.safeParse(m);
      return c.success ? [ c.data ] : [];
    })).refine(g => g.length > 0),
    unreleased: T(oe()).catch([]).transform(g => g.slice(0, W).flatMap(m => {
      let c = r.safeParse(m);
      return c.success ? [ c.data ] : [];
    }))
  }), l = u({
    at_ms: v().refine(Number.isFinite)
  });
  return {
    rowsEnvelope: e,
    newerEnvelope: t,
    stopsEnvelope: n,
    orphansEnvelope: d,
    row: s,
    stop: l
  };
});

function H8o(e) {
  ee().durable.registrySink = e;
}

function D8o() {
  ee().durable.registryPublished = st;
}

function RTe() {
  if (!a.CLAUDE_CODE_REMOTE) return;
  let e = ee(), {durable: t} = e;
  if (t.registrySink === null) return;
  let n = {}, i = [], r = new Set;
  for (let c of t.pendingRestoredRows.values()) {
    let h = t.rows.get(c.slug);
    if (h === void 0 && !t.unwatchedSlugs.has(c.slug)) {
      i.push(c);
      continue;
    }
    for (let S of [ c.triggerId, ...c.unreleased ?? [] ]) if (S !== h?.triggerId) r.add(S);
  }
  for (let c of [ ...t.rows.values(), ...i ].slice(0, z)) n[c.slug] = {
    trigger_id: c.triggerId,
    since: c.since,
    events: [ ...c.events ],
    ...c.unreleased !== void 0 && c.unreleased.length > 0 && {
      unreleased: [ ...c.unreleased ]
    }
  };
  let d = {}, s = [ ...e.commentMonitorIntent.bySlug.entries() ].filter(([, c]) => c.state === "stopped").sort(([, c], [, h]) => h.writtenAtMs - c.writtenAtMs).slice(0, z);
  for (let [c, h] of s) d[c] = {
    at_ms: h.writtenAtMs
  };
  let l = D([ ...t.orphanTriggers, ...r ]).slice(0, W), g = t.rows.size + i.length === 0 && s.length === 0 && l.length === 0 ? null : {
    v: 1,
    rows: n,
    stopped: d,
    ...l.length > 0 && {
      orphans: l
    }
  }, m = _(g);
  if (m === t.registryPublished) return;
  t.registryPublished = m, t.registrySink({
    artifact_durable_watches: g
  });
}

function L8o(e) {
  if (e === void 0 || e === null) return null;
  let t = at(), n = 0, i = [], r = t.rowsEnvelope.safeParse(e);
  if (r.success) for (let [m, c] of B(r.data.rows)) {
    let h = t.row.safeParse(c);
    if (!nr.test(m) || !h.success) {
      n++;
      continue;
    }
    i.push({
      slug: m,
      triggerId: h.data.trigger_id,
      since: h.data.since,
      events: h.data.events,
      ...h.data.unreleased.length > 0 && {
        unreleased: h.data.unreleased
      }
    });
  }
  let d = new Map, s = t.stopsEnvelope.safeParse(e);
  if (s.success) for (let [m, c] of B(s.data.stopped)) {
    if (!nr.test(m)) {
      n++;
      continue;
    }
    let h = t.stop.safeParse(c);
    if (d.set(m, h.success ? h.data.at_ms : Date.now()), !h.success) n++;
  }
  if (!r.success || !s.success) f("artifact_durable_subscribe", s.success && t.newerEnvelope.safeParse(e).success ? "registry_newer_version" : "registry_invalid"); else if (n > 0) f("artifact_durable_subscribe", "registry_entry_invalid");
  let l = t.orphansEnvelope.safeParse(e), g = l.success ? l.data.orphans : [];
  return {
    rows: i,
    stopped: d,
    orphans: g
  };
}

function B(e) {
  return Object.keys(e).slice(0, z).map(n => [ n, e[n] ]);
}

function Ile(e) {
  let {live: t} = ee(), n = t.supervisors.get(e);
  return n !== void 0 && !n.stopped && n.autoReactWiring !== void 0 || t.inFlightWiredIntent.has(e);
}

var C = "\0unwritten", H = 256, K = 32, F = 64, dt = p(() => {
  let e = v().refine(Number.isFinite), t = u({
    state: U([ "armed", "stopped" ]),
    writtenAtMs: e,
    title: o().min(1).max(H).optional(),
    holder: o().optional().transform(i => i === void 0 ? void 0 : "bg"),
    holderPid: v().int().positive().optional().catch(void 0),
    holderProcStart: o().min(1).max(64).optional().catch(void 0),
    holderProcStartFt: o().min(1).max(64).optional().catch(void 0),
    holderJob: o().regex(/^[0-9a-f]{8}$/).optional().catch(void 0),
    holderPidSpace: o().min(1).max(160).optional().catch(void 0)
  }), n = u({
    type: A("artifact-comment-monitor"),
    v: A(1),
    sessionId: o(),
    artifacts: ue(o(), oe()),
    crossLineMerged: A(!0).optional().catch(void 0),
    tailTorn: A(!0).optional().catch(void 0)
  });
  return {
    record: t,
    envelope: n
  };
});

function Y(e) {
  if (e.holderPid === void 0 || e.holderJob === void 0 || e.holderPidSpace === void 0 || e.holderProcStart === void 0 && e.holderProcStartFt === void 0) return {};
  return {
    holderPid: e.holderPid,
    holderJob: e.holderJob,
    ...e.holderProcStart !== void 0 && {
      holderProcStart: e.holderProcStart
    },
    ...e.holderProcStartFt !== void 0 && {
      holderProcStartFt: e.holderProcStartFt
    },
    holderPidSpace: e.holderPidSpace
  };
}

function Z() {
  let e = Rie.token;
  if (e === void 0) return d_(), {};
  let t = $O();
  if (t === void 0 || !/^[0-9a-f]{8}$/.test(J(t))) return {};
  let {procStart: n, procStartFt: i} = eee(e);
  return Y({
    holderPid: process.pid,
    holderJob: J(t),
    holderProcStart: n,
    holderProcStartFt: i,
    holderPidSpace: ufe().slice(0, 160)
  });
}

function j4r() {
  return d_();
}

function jvn(e, t) {
  let n = dt(), i = n.envelope.safeParse(e);
  if (!i.success) return f("artifact_live_subscribe", "comment_monitor_intent_invalid"), 
  null;
  if (i.data.sessionId !== q()) return f("artifact_live_subscribe", "comment_monitor_intent_foreign"), 
  null;
  if (i.data.crossLineMerged === !0) t?.onLossy?.();
  let r = i.data.tailTorn === !0;
  if (r) t?.onLossy?.();
  let d = new Map, s = 0, l = 0, g = 0;
  for (let [m, c] of Object.entries(i.data.artifacts)) {
    if (l++ >= 2 * F) {
      t?.onLossy?.();
      break;
    }
    let h = n.record.safeParse(c);
    if (!nr.test(m)) {
      s++, t?.onLossy?.();
      continue;
    }
    if (!h.success) {
      if (s++, t?.onLossy?.(), typeof c === "object" && c !== null && c.state === "stopped") d.set(m, {
        state: "stopped",
        writtenAtMs: Date.now()
      });
      continue;
    }
    if (r && h.data.state === "armed" && h.data.holder === void 0) {
      d.set(m, {
        state: "stopped",
        writtenAtMs: Date.now(),
        ...h.data.title !== void 0 && {
          title: h.data.title
        }
      }), t?.onTornStop?.(m);
      continue;
    }
    if (h.data.state === "armed" && g++ >= F) {
      t?.onLossy?.();
      continue;
    }
    let {state: S, writtenAtMs: w, title: y, holder: b} = h.data;
    d.set(m, {
      state: S,
      writtenAtMs: w,
      ...y !== void 0 && {
        title: y
      },
      ...b !== void 0 && {
        holder: b,
        ...r ? {} : Y(h.data)
      }
    });
  }
  if (s > 0) f("artifact_live_subscribe", "comment_monitor_intent_record_invalid");
  return d;
}

function iVt(e) {
  let t = k(e.storageV5), n = new Map([ ...t.pendingRestore ?? [], ...t.bySlug ]);
  t.pendingRestore = null;
  let {excludeSlug: i} = e;
  if (i !== void 0) n.delete(i);
  return M(), n;
}

function Wvn() {
  return ee().commentMonitorIntent.tornStops;
}

function W4r() {
  return ee().commentMonitorIntent.storageV5;
}

function G6(e) {
  k(e?.storageV5);
}

function N8o(e, t) {
  if (e === void 0 && !eUe()) return;
  let n = ee().commentMonitorIntent;
  n.earlySeed = e, n.adoptPendingFor = q(), k(t?.storageV5);
}

function zvn(e, t) {
  let n = k(t?.storageV5);
  if (ee().durable.stopLatches.isStopped(e)) return;
  let i = t?.title, r = i !== void 0 && i.length >= 1 && i.length <= H, d = n.bySlug.get(e)?.title;
  n.forgottenAt.delete(e);
  let s = Date.now(), l = Cc() ? {
    holder: "bg",
    ...Z()
  } : void 0;
  if (n.bySlug.set(e, {
    state: "armed",
    writtenAtMs: s,
    ...r ? {
      title: i
    } : d !== void 0 && {
      title: d
    },
    ...l
  }), tt(n, e), M(), l !== void 0 && l.holderPid === void 0) ct(e, s);
}

function ct(e, t) {
  d_().then(() => {
    if (!eUe() || !Cc()) return;
    let n = ee().commentMonitorIntent, i = n.bySlug.get(e);
    if (n.sid !== q() || i?.state !== "armed" || i.holder !== "bg" || i.holderPid !== void 0 || i.writtenAtMs !== t) return;
    let r = Z();
    if (r.holderPid === void 0) return;
    n.bySlug.set(e, {
      ...i,
      ...r
    }), M();
  }).catch(() => {});
}

function ctt(e, t) {
  let n = k(t?.storageV5), i = n.bySlug.get(e);
  n.bySlug.set(e, {
    state: "stopped",
    writtenAtMs: Date.now(),
    ...i?.title !== void 0 && {
      title: i.title
    }
  }), M({
    durableNow: !0
  });
  for (let [r, d] of n.parked) {
    let s = d.line[e];
    if (s?.state === "armed") d.line[e] = {
      state: "stopped",
      writtenAtMs: Date.now(),
      ...s.title !== void 0 && {
        title: s.title
      }
    }, R(r, d.path, d.line, {
      durableNow: !0
    });
  }
}

function $8o(e, t) {
  return k(t?.storageV5).bySlug.get(e)?.state;
}

function x2e(e, t) {
  let n = k(t?.storageV5), i = !1, r = new Set(typeof e === "string" ? [ e ] : e), d = Date.now();
  for (let s of r) {
    if (i = n.bySlug.delete(s) || i, n.forgottenAt.delete(s), n.forgottenAt.size >= ft) {
      let l = n.forgottenAt.keys().next().value;
      if (l !== void 0) n.forgottenAt.delete(l);
    }
    n.forgottenAt.set(s, d);
  }
  if (i) M({
    durableNow: !0
  });
  for (let [s, l] of n.parked) {
    let g = !1;
    for (let m of r) if (l.traveling?.has(m) && l.line[m]?.state === "armed") delete l.line[m], 
    l.traveling.delete(m), g = !0;
    if (g) {
      if (R(s, l.path, l.line, {
        durableNow: !0
      }), !Object.values(l.line).some(m => m.state === "armed")) n.parked.delete(s);
    }
  }
}

function Gvn(e, t) {
  let n = k(t?.storageV5), {stopLatches: i} = ee().durable;
  for (let [r, d] of e) {
    if (i.wasClearedByRewatch(r)) continue;
    let s = n.bySlug.get(r);
    if (s === void 0 || s.state === "armed" || s.writtenAtMs <= d) n.bySlug.set(r, {
      state: "stopped",
      writtenAtMs: d,
      ...s?.title !== void 0 && {
        title: s.title
      }
    });
    i.reaffirmStop(r);
  }
  M();
}

function F8o(e) {
  let t = k(e?.storageV5), {yieldedSlugs: n} = ee().wakes, i = Date.now(), r = !1;
  for (let [d, s] of t.bySlug) if (s.state === "armed" && !n.has(d)) t.bySlug.set(d, {
    state: "stopped",
    writtenAtMs: i,
    ...s.title !== void 0 && {
      title: s.title
    }
  }), r = !0;
  if (r) M({
    durableNow: !0
  });
  for (let [d, s] of t.parked) {
    let l = !1;
    for (let [g, m] of Object.entries(s.line)) if (m.state === "armed") s.line[g] = {
      state: "stopped",
      writtenAtMs: i,
      ...m.title !== void 0 && {
        title: m.title
      }
    }, l = !0;
    if (l) R(d, s.path, s.line, {
      durableNow: !0
    });
  }
}

function lt(e) {
  switch (e) {
   case "clear":
   case "resume":
   case "fork":
   case "remote_attach":
    return !0;

   case "cd":
   case "spare_claim":
   case "hydrate":
   case "startup_custom_id":
    return !1;
  }
}

function ut() {
  let e = ee().commentMonitorIntent, t = e.sid;
  if (t === null || t === q()) {
    e.leftWith = null;
    return;
  }
  let n = new Set;
  for (let [i, r] of e.bySlug) if (r.state === "armed" && Ile(i)) n.add(i);
  e.leftWith = {
    sid: t,
    traveling: n,
    unwritten: !e.onFile && !Cqe(t) && e.adoptPendingFor !== t,
    inWindow: e.adoptPendingFor === t
  };
}

function P() {
  let e = ee().commentMonitorIntent;
  if (!Cqe(q())) return;
  for (let [t, n] of e.parked) {
    if (n.traveling === void 0 || t === q()) continue;
    let i = !1;
    for (let r of n.traveling) if (n.line[r]?.state === "armed") delete n.line[r], i = !0;
    if (n.traveling = void 0, i) R(t, n.path, n.line);
    if (!Object.values(n.line).some(r => r.state === "armed")) e.parked.delete(t);
  }
}

function O(e, t) {
  if (Cqe(t)) {
    if (e.adoptPendingFor === t) e.adoptPendingFor = null;
    return !1;
  }
  return e.adoptPendingFor === t || Yd() !== null;
}

function X(e, t, n, i, r) {
  if (t === null) return;
  let d = ee().commentMonitorIntent, s = {
    path: t,
    line: Q(e, n)
  };
  d.pendingLines.set(e, s), hOn(N), d.writeChain = d.writeChain.then(async () => {
    if (await ep().catch(() => {}), d.pendingLines.get(e) !== s) return;
    if (d.exitStamped) return;
    if (d.pendingLines.delete(e), !i && Ore() === r) return;
    if (e === d.sid) {
      d.lastWritten = C, M();
      return;
    }
    R(e, t, n);
  }), d.writeChain = d.writeChain.catch(() => {});
}

var ft = 1024;

function Q(e, t) {
  let n = ee().commentMonitorIntent, i = n.parked.get(e);
  if (i?.unwritten === !0) {
    let {traveling: r} = i;
    return r === void 0 ? t : Fa(t, (d, s) => d.state === "armed" && r.has(s));
  }
  if (i?.leftInWindow === !0) return V(n, {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: e,
    artifacts: t
  }).artifacts;
  return t;
}

function R(e, t, n, i) {
  if (t === null) return;
  let r = ee().commentMonitorIntent, {storageV5: d} = r, s = Q(e, {
    ...n
  }), l = {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: e,
    artifacts: s
  };
  r.owedLines.delete(e);
  let g = {
    path: t,
    line: s
  };
  if (r.pendingLines.set(e, g), hOn(N), i?.durableNow === !0) wOn(l, t, I(l));
  r.writeChain = r.writeChain.then(async () => {
    if (await ep().catch(() => {}), r.exitStamped) return;
    if (e === r.sid) {
      if (r.pendingLines.get(e) === g) r.pendingLines.delete(e);
      r.lastWritten = C, M();
      return;
    }
    if (await qA(t, l, d, {
      onlyIfExists: !0,
      tornTailEntry: I(l)
    }), r.pendingLines.get(e) === g) r.pendingLines.delete(e);
  }).catch(() => {
    if (r.pendingLines.get(e) !== g) {
      f("artifact_live_subscribe", "comment_monitor_intent_write_failed");
      return;
    }
    if (r.pendingLines.delete(e), r.owedLines.size >= 2 * K) {
      let m = r.owedLines.keys().next().value;
      if (m !== void 0) r.owedLines.delete(m);
    }
    r.owedLines.set(e, {
      path: t,
      line: s
    }), f("artifact_live_subscribe", "comment_monitor_intent_write_failed");
  });
}

function U8o(e, t) {
  tt(k(t?.storageV5), e);
}

function tt(e, t) {
  let n = !1;
  for (let [i, r] of e.parked) {
    if (i === q() || r.line[t]?.state !== "armed") continue;
    (r.traveling ??= new Set).add(t), n = !0;
  }
  if (n) P();
}

function G(e) {
  if (e.owedLines.size === 0) return;
  let t = [ ...e.owedLines.entries() ];
  e.owedLines.clear();
  let n = !1;
  for (let [i, {path: r, line: d}] of t) {
    if (i === e.sid) {
      e.lastWritten = C, n = !0;
      continue;
    }
    if (e.pendingLines.has(i)) continue;
    let s = e.parked.get(i);
    R(i, s?.path ?? r, s?.line ?? d);
  }
  if (n) M();
}

function k(e) {
  let t = ee().commentMonitorIntent;
  if (e !== void 0) t.storageV5 = e;
  let n = q(), i = !1, r = !1;
  if (t.sid !== n) {
    let s = t.leftWith !== null && t.leftWith.sid === t.sid ? t.leftWith : null, l = S => s !== null ? s.traveling.has(S) : Ile(S);
    t.leftWith = null;
    let g = E(t), m = new Set, c = 0;
    for (let [S, w] of t.bySlug) {
      if (w.state !== "armed") continue;
      if (l(S)) m.add(S); else t.bySlug.delete(S), c++;
    }
    let {stopLatches: h} = ee().durable;
    for (let [S, w] of Object.entries(t.parked.get(n)?.line ?? {})) {
      let y = t.forgottenAt.get(S);
      if (w.state === "armed" && y !== void 0 && w.writtenAtMs <= y && !Ile(S)) {
        r = !0;
        continue;
      }
      let b = x(t.bySlug.get(S), w);
      if (b.state === "armed" && h.isStopped(S)) b = {
        state: "stopped",
        writtenAtMs: Date.now(),
        ...b.title !== void 0 && {
          title: b.title
        }
      };
      if (t.bySlug.set(S, b), b.state === "stopped") h.confirmStop(S);
    }
    t.parked.delete(n);
    for (let S of [ t.owedLines.get(n), t.pendingLines.get(n) ]) for (let [w, y] of Object.entries(S?.line ?? {})) {
      if (y.state !== "stopped") continue;
      let b = x(t.bySlug.get(w), y);
      if (t.bySlug.set(w, b), b.state === "stopped") h.confirmStop(w);
    }
    if (t.sid !== null && (c > 0 || m.size > 0)) {
      t.parked.set(t.sid, {
        path: t.transcriptPath,
        line: g,
        ...m.size > 0 && {
          traveling: m
        },
        ...s?.unwritten === !0 && {
          unwritten: !0
        },
        ...s?.inWindow === !0 && {
          leftInWindow: !0
        }
      });
      while (t.parked.size > K) {
        let [S, w] = t.parked.entries().next().value;
        t.parked.delete(S);
        let y = Date.now();
        R(S, w.path, Object.fromEntries(Object.entries(w.line).flatMap(([b, L]) => L.state !== "armed" ? [ [ b, L ] ] : w.traveling?.has(b) ? [] : [ [ b, {
          state: "stopped",
          writtenAtMs: y,
          ...L.title !== void 0 && {
            title: L.title
          }
        } ] ])));
      }
    }
    if (t.sid !== null && t.wroteCurrentLine) X(t.sid, t.transcriptPath, g, t.lastWritten === C, t.failureSeqAtWrite); else if (t.sid !== null && s?.inWindow === !0 && nt(t, g)) X(t.sid, t.transcriptPath, g, !0, t.failureSeqAtWrite);
    if (P(), i = [ ...t.bySlug.values() ].some(S => S.state === "armed"), t.sid = n, 
    t.adoptPendingFor !== n) t.adoptPendingFor = null;
    t.lastWritten = r ? C : null, t.wroteCurrentLine = !1, t.pendingRestore = null, 
    t.transcriptPath = null, t.tornStops.clear(), t.onFile = !1;
  }
  if (!t.onFile && Cqe(n)) t.onFile = !0;
  if (t.transcriptPath = O(t, n) ? ku() : Lf(n), t.unsubscribeMaterialized === void 0) t.unsubscribeMaterialized = Jno(() => {
    if (t.sid !== null && Cqe(t.sid)) t.onFile = !0;
    P();
  });
  if (t.unsubscribeSwitch === void 0) t.unregisterExitDrain = y3t(() => (G(t), t.writeChain)), 
  hOn(N), t.unsubscribeSwitch = Oc((s, l) => {
    if (l === "cd" && t.sid === s) t.transcriptPath = Lf(s);
    if (lt(l)) ut();
    if (l === "clear") queueMicrotask(M);
  });
  let d = t.earlySeed ?? Oro();
  if (t.earlySeed = void 0, d !== void 0) {
    let s = !1, l = jvn(d, {
      onLossy: () => {
        s = !0;
      },
      onTornStop: g => {
        t.tornStops.add(g);
      }
    });
    if (l !== null) {
      if (d.tailTorn === !0) uro(t.transcriptPath ?? void 0);
      let {stopLatches: g} = ee().durable, m = new Map;
      for (let [c, h] of l) {
        let S = t.forgottenAt.get(c);
        if (h.state === "armed" && S !== void 0 && h.writtenAtMs <= S && !Ile(c)) {
          s = !0;
          continue;
        }
        let w = t.bySlug.get(c);
        if (t.tornStops.has(c) && w?.state === "armed" && Ile(c)) {
          t.tornStops.delete(c), m.set(c, w), s = !0;
          continue;
        }
        let y = x(w, h);
        if (t.bySlug.set(c, y), m.set(c, y), y.state === "stopped") g.confirmStop(c);
      }
      if (t.pendingRestore = m, !s && t.lastWritten === null) t.lastWritten = j(Object.fromEntries(l)), 
      t.failureSeqAtWrite = Ore(); else if (s && t.lastWritten === null) t.lastWritten = C;
      RTe();
    }
  }
  if (G(t), i || r) M();
  return t;
}

function x(e, t) {
  if (e === void 0) return t;
  if (t.state === "stopped" && e.state !== "stopped" && t.writtenAtMs >= e.writtenAtMs) return t;
  if (t.state === "armed" && e.state === "armed" && t.writtenAtMs > e.writtenAtMs) return t;
  return e;
}

function E(e) {
  return Object.fromEntries([ ...e.bySlug.entries() ].sort(([, t], [, n]) => Number(n.state === "stopped") - Number(t.state === "stopped") || n.writtenAtMs - t.writtenAtMs).slice(0, F));
}

function et() {
  let {commentMonitorIntent: e, wakes: t} = ee();
  if (!e.wroteCurrentLine || e.sid !== q() || [ ...e.bySlug.keys() ].some(n => t.yieldedSlugs.has(n))) return;
  return {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: q(),
    artifacts: E(e)
  };
}

function N() {
  let e = ee().commentMonitorIntent, t = q(), n, i = () => nt(e, E(e)), r = !e.exitStamped && e.sid === t;
  if (r && Cqe(t)) {
    if (e.wroteCurrentLine || i() || e.owedLines.has(t) || e.pendingLines.has(t)) P(), 
    e.wroteCurrentLine = !0, cce(et);
  } else if (r && O(e, t) && e.transcriptPath !== null && i()) {
    let s = V(e, {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: t,
      artifacts: E(e)
    });
    n = {
      path: e.transcriptPath,
      entry: s,
      tornTailEntry: I(s)
    };
    for (let l of [ e.owedLines, e.pendingLines ]) if (l.get(t)?.path === n.path) l.delete(t);
  }
  e.exitStamped = !0;
  let d = [ ...e.owedLines, ...e.pendingLines ].map(([s, {path: l, line: g}]) => {
    let m = {
      type: "artifact-comment-monitor",
      v: 1,
      sessionId: s,
      artifacts: g
    };
    return {
      path: l,
      entry: m,
      tornTailEntry: I(m)
    };
  });
  return n === void 0 ? d : [ ...d, n ];
}

function I(e) {
  let t = Date.now();
  return {
    ...e,
    artifacts: eo(e.artifacts, n => n.state === "armed" && n.holder === void 0 ? {
      state: "stopped",
      writtenAtMs: t,
      ...n.title !== void 0 && {
        title: n.title
      }
    } : n)
  };
}

function V(e, t) {
  let n = q(), i = new Set;
  for (let [r, d] of e.parked) {
    if (r === n || r === t.sessionId || d.unwritten) continue;
    for (let s of d.traveling ?? []) if (d.line[s]?.state === "armed") i.add(s);
  }
  if (i.size === 0) return t;
  return {
    ...t,
    artifacts: Fa(t.artifacts, (r, d) => r.state === "armed" && i.has(d))
  };
}

function nt(e, t) {
  return e.lastWritten !== j(t) && !(e.lastWritten === null && Object.keys(t).length === 0);
}

function j(e) {
  return _(Object.entries(e).map(([t, n]) => [ t, n.state, n.writtenAtMs, n.title ?? null, n.holder ?? null, n.holderPid ?? null, n.holderProcStart ?? n.holderProcStartFt ?? null, n.holderJob ?? null, n.holderPidSpace ?? null ]).sort());
}

function M(e) {
  let t = k();
  P(), RTe();
  let n = E(t), i = j(n);
  if (i === t.lastWritten && Ore() === t.failureSeqAtWrite) return;
  if (t.failureSeqAtWrite = Ore(), t.lastWritten === null && t.bySlug.size === 0) {
    t.lastWritten = i;
    return;
  }
  let r = {
    type: "artifact-comment-monitor",
    v: 1,
    sessionId: q(),
    artifacts: n
  };
  if (O(t, q())) {
    if (t.lastWritten = C, e?.durableNow === !0 && t.transcriptPath !== null) {
      let d = V(t, r);
      wOn(d, t.transcriptPath, I(d));
    }
    return;
  }
  if (t.lastWritten = i, t.wroteCurrentLine = !0, cce(et), e?.durableNow === !0) wOn(r);
  Iro(r, t.storageV5).catch(() => {
    if (t.lastWritten === i) t.lastWritten = C;
    f("artifact_live_subscribe", "comment_monitor_intent_write_failed");
  });
}

export { H8o, D8o, RTe, L8o, Ile, j4r, jvn, iVt, Wvn, W4r, G6, N8o, zvn, ctt, $8o, x2e, Gvn, F8o, U8o };
