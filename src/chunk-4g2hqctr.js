// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { G4n } from "./chunk-5wbhf1bk.js";

import { q, Oc, Ir, JU, fYn, tNo, cg, g6 } from "./chunk-3pqddg8f.js";

import { Je, vq, j, E } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { bt, _, se, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { fI, mje, BXe, Jh } from "./chunk-60c97a4m.js";

import { XBe, Ev, Rie, xie } from "./chunk-znhtg8e4.js";

import { mt } from "./chunk-j90se18b.js";

import { nC, PRe, DLn, OJt, cuo, y_r, LLn, Ybe, Gys, wY, HJt, Iat, Vys } from "./chunk-bjsp1prn.js";

import { HC, oq } from "./chunk-9yajep3y.js";

import { Ji } from "./chunk-f0wpcwcb.js";

import { p } from "./chunk-jkzenvsk.js";

import { Aa } from "./chunk-sre9xcbd.js";

import { sn } from "./chunk-642shbw5.js";

import { o, v, u } from "./chunk-cvcg6n1z.js";

import { ye, m$t } from "./chunk-ne9evs39.js";

import { join as Me } from "path";

import { mkdir as je, readFile as Re, unlink as ve, writeFile as ae } from "fs/promises";

import { dirname as Ae, join as Fe } from "path";

import { appendFile as Le, mkdir as $e, readFile as Be } from "fs/promises";

import { join as Te } from "path";

var Oe = [ "**/.claude/scheduled_tasks.lock", "**/.claude/scheduled_tasks.json", "**/.claude/routines/.state/", "**/.claude/worktrees/", "**/.claude/checkpoints/", "**/.claude/mailbox/", "**/.claude/agent-registry.json", "**/.claude/agent-memory-local", "**/.claude/first-run", "**/.claude/assistant-daemon-state.json" ], we = "# claude-code-runtime";

async function Ce(s) {
  if (!Ji().claim(`claude_runtime_exclude_ensured:${s}`)) return;
  try {
    let n = await HC(s);
    if (!n) return;
    let a = await oq(n) ?? n, y = Te(a, "info", "exclude"), S = "";
    try {
      if (S = await Be(y, "utf-8"), S.includes(we)) return;
    } catch (I) {
      if (E(I) !== "ENOENT") throw I;
      await $e(Te(a, "info")).catch(W => {
        if (E(W) !== "EEXIST") throw W;
      });
    }
    let l = S && !S.endsWith(`\n`) ? `\n` : "", h = [ we, ...Oe, "" ].join(`\n`);
    await Le(y, l + h);
  } catch (n) {
    t(`ensureClaudeRuntimeFilesExcluded: ${n}`);
  }
}

var De = Fe(".claude", "scheduled_tasks.lock"), Ne = p(() => u({
  sessionId: o(),
  pid: v(),
  procStart: o().optional(),
  acquiredAt: v()
}));

function G(s) {
  return Fe(s ?? Ir(), De);
}

async function _e(s) {
  let n;
  try {
    n = await Re(G(s), "utf8");
  } catch {
    return;
  }
  let a = Ne().safeParse(mt(n, !1));
  return a.success ? a.data : void 0;
}

async function Ie(s, n) {
  let a = G(n), y = _(s);
  try {
    return await ae(a, y, {
      flag: "wx"
    }), !0;
  } catch (S) {
    let l = E(S);
    if (l === "EEXIST") return !1;
    if (l === "ENOENT") {
      await je(Ae(a), {
        recursive: !0
      });
      try {
        return await ae(a, y, {
          flag: "wx"
        }), !0;
      } catch (h) {
        if (E(h) === "EEXIST") return !1;
        throw h;
      }
    }
    throw S;
  }
}

function ie(s, n) {
  s.unregisterCleanup?.(), s.unregisterCleanup = bt(async () => {
    await z(s, n);
  });
}

async function de(s, n) {
  let a = n?.dir;
  if (DLn(a)) return !1;
  await Ce(a ?? Ir());
  let y = n?.lockIdentity ?? q(), S = {
    sessionId: y,
    pid: process.pid,
    procStart: xie(),
    acquiredAt: Date.now()
  };
  if (await Ie(S, a)) return s.lastBlockedBy = void 0, ie(s, n), t(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`), 
  !0;
  let l = await _e(a);
  if (l?.sessionId === y) {
    if (l.pid !== process.pid) await ae(G(a), _(S)), ie(s, n);
    return !0;
  }
  if (l && Aa(l.pid) && await Ev(l.pid, l.procStart)) {
    if (s.lastBlockedBy !== l.sessionId) s.lastBlockedBy = l.sessionId, t(`[ScheduledTasks] scheduler lock held by session ${l.sessionId} (PID ${l.pid})`);
    return !1;
  }
  if (l) t(`[ScheduledTasks] recovering stale scheduler lock from PID ${l.pid}`);
  if (await ve(G(a)).catch(() => {}), await Ie(S, a)) return s.lastBlockedBy = void 0, 
  ie(s, n), !0;
  return !1;
}

async function z(s, n) {
  s.reset();
  let a = n?.dir;
  try {
    a ??= Ir();
  } catch {
    return;
  }
  let y = n?.lockIdentity ?? q(), S = await _e(a);
  if (!S || S.sessionId !== y) return;
  try {
    await ve(G(a)), t("[ScheduledTasks] released scheduler lock");
  } catch {}
}

class ce {
  unregisterCleanup=void 0;
  lastBlockedBy=void 0;
  reset() {
    this.unregisterCleanup?.(), this.unregisterCleanup = void 0, this.lastBlockedBy = void 0;
  }
}

var be = import.meta.require("./chunk-wwmxzq84.js"), ze = 1e3, We = 300, qe = 5e3;

function He(s, n, a) {
  if (a === 0) return !1;
  return Boolean(s.recurring && !s.permanent && n - s.createdAt >= a);
}

async function Ke(s, n, a) {
  let y = Jh(a), S = se(), l = new Set, h = new Set;
  for (let {createdBySessionId: I} of s) if (I !== void 0 && I !== n) h.add(I);
  if (await Promise.all(Array.from(h, async I => {
    if (fI(I) === null) return;
    if (await S.lstat(Me(y, `${I}.jsonl`)).then(H => H.isFile(), H => {
      let B = E(H);
      if (B !== "ENOENT" && B !== "ENOTDIR") t(`[ScheduledTasks] could not look for a transcript of task creator ${I} (${B}); treating it as not found`);
      return !1;
    })) l.add(I);
  })), l.size < h.size) t(`[ScheduledTasks] found no transcript in ${y} for ${h.size - l.size} other session(s) named in scheduled_tasks.json (a file copied from another checkout looks like this); this session will not run their tasks`);
  return l;
}

function ONr(s) {
  let {onFire: n, isLoading: a, assistantMode: y = !1, onFireTask: S, onMissed: l, dir: h, lockIdentity: I, getJitterConfig: W, isKilled: H, filter: B, getExtraTasks: V, leaseFileTasks: Q = () => !0} = s, D = h || I ? {
    dir: h,
    lockIdentity: I
  } : void 0, N = new ce, X = h !== void 0 ? I : q(), Y = new Set, Z = null, ee = [], re = [], F = new Map, le = new Set, J = new Set, A = null, K = null, O = null, M = null, L = !1, x = !1, ue = new Set, fe = "", te = new Map;
  function Pe(r, k) {
    if (!Aa(r)) return te.delete(r), !0;
    if (k === void 0) return !1;
    let w = Date.now(), T = te.get(r);
    if (!T || w - T.at >= 6e4) T = {
      at: w,
      token: XBe(r)
    }, te.set(r, T);
    return T.token !== void 0 && T.token !== k;
  }
  function he(r) {
    return mje(r, BXe());
  }
  function xe(r) {
    if (r.createdInProject !== void 0) return he(r.createdInProject) === fe;
    return r.createdBySessionId !== void 0 && ue.has(r.createdBySessionId);
  }
  function ke(r) {
    if (r.createdBySessionId === void 0) return x;
    if (r.createdBySessionId === X) return !0;
    if (Y.has(r.createdBySessionId) && r.createdByPid === process.pid && (r.createdByProcStart === void 0 ? r.createdAt >= performance.timeOrigin : r.createdByProcStart === Rie.token)) return !0;
    return x && xe(r) && (r.createdByPid === void 0 || Pe(r.createdByPid, r.createdByProcStart));
  }
  async function me(r) {
    let k = cuo(h) ? [] : await OJt(h), w = V ? await V().catch(c => {
      if (Ji().claim("cron_extra_tasks_load_bad")) m("routine_register_trigger", "extra_tasks_load_failed");
      return t(`[ScheduledTasks] getExtraTasks failed: ${c}`), [];
    }) : [], T = h ?? Ir(), b = await Ke(k.filter(c => c.createdInProject === void 0), X, T);
    if (L) return;
    if (ee = k, re = w, ue = b, fe = he(T), !r) return;
    let e = !1;
    for (let c of k) if (X !== void 0 && c.createdBySessionId === X && c.createdByPid !== process.pid) c.createdByPid = process.pid, 
    c.createdByProcStart = xie(), e = !0;
    if (e) await LLn(k, h).catch(c => t(`[ScheduledTasks] failed to refresh task pids: ${c}`));
    let R = Date.now(), C = Vys(k, R).filter(c => !c.recurring && !le.has(c.id) && (!B || B(c)) && ke(c));
    if (C.length > 0) {
      for (let c of C) le.add(c.id), F.set(c.id, 1 / 0);
      i("tengu_scheduled_task_missed", {
        count: C.length,
        taskIds: m$t(C.map(c => c.id))
      });
      try {
        if (l) l(C); else n(Ue(C));
      } catch (c) {
        t(`[ScheduledTasks] could not surface ${C.length} missed one-shot task(s); they stay in scheduled_tasks.json for a later session`, {
          level: "error"
        }), d(Ee(c, "handler for missed scheduled tasks threw (message not reported: it may contain user text)"));
        return;
      }
      Ybe(C.map(c => c.id), h).catch(c => t(`[ScheduledTasks] failed to remove missed tasks: ${c}`)), 
      t(`[ScheduledTasks] surfaced ${C.length} missed one-shot task(s)`);
    }
  }
  function ne() {
    if (H?.()) return;
    if (x && !Q()) x = !1, z(N, D);
    if (a() && !y) return;
    let r = Date.now(), k = new Set, w = [], T = W?.() ?? wY;
    function b(e, R) {
      if (B && !B(e)) return;
      if (k.add(e.id), J.has(e.id)) return;
      let C = F.get(e.id);
      if (C === void 0) {
        let P = Iat(e, T);
        if (P === null) m("cron_task_fire", "next_fire_unresolvable", {
          recurring: e.recurring ?? !1
        });
        C = P ?? 1 / 0, F.set(e.id, C), t(`[ScheduledTasks] scheduled ${e.id} for ${C === 1 / 0 ? "never" : new Date(C).toISOString()}`);
      }
      if (r < C) return;
      t(`[ScheduledTasks] firing ${e.id}${e.recurring ? " (recurring)" : ""}`);
      let c = e.id.startsWith("routine:") ? sn(e.id) : ye(e.id);
      i("tengu_scheduled_task_fire", {
        recurring: e.recurring ?? !1,
        taskId: c,
        autonomousLoopDefault: be.isLoopDefaultSentinel(e.prompt)
      });
      let ge = {
        recurring: e.recurring ?? !1,
        permanent: e.permanent ?? !1
      };
      try {
        if (S) S(e); else n(e.prompt);
        g("cron_task_fire", ge);
      } catch (P) {
        let U = !R && !e.recurring;
        if (U) F.set(e.id, 1 / 0);
        if (t(U ? `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); the task stays in scheduled_tasks.json for a later session` : `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); this run is dropped and will not be retried`, {
          level: "error"
        }), m("cron_task_fire", "handler_threw", ge), d(Ee(P, "scheduled task fire handler threw (message not reported: it may contain user text)")), 
        U) return;
      }
      let Se = He(e, r, T.recurringMaxAgeMs);
      if (Se) {
        let P = Math.floor((r - e.createdAt) / 1e3 / 60 / 60);
        t(`[ScheduledTasks] recurring task ${e.id} aged out (${P}h since creation), deleting after final fire`), 
        i("tengu_scheduled_task_expired", {
          taskId: c,
          ageHours: P
        });
      }
      if (e.recurring && !Se) {
        let P = HJt(e.cron, r, e.id, T);
        if (P === null) f("cron_task_fire", "reschedule_unresolvable");
        let U = P ?? 1 / 0;
        if (F.set(e.id, U), !R) w.push(e.id);
      } else if (R) g6([ e.id ]), F.delete(e.id); else J.add(e.id), F.set(e.id, 1 / 0), 
      Ybe([ e.id ], h).catch(P => t(`[ScheduledTasks] failed to remove task ${e.id}: ${P}`)).finally(() => J.delete(e.id));
    }
    for (let e of ee) if (ke(e)) b(e, !1);
    if (w.length > 0) {
      for (let e of w) J.add(e);
      Gys(w, r, h).catch(e => t(`[ScheduledTasks] failed to persist lastFiredAt: ${e}`)).finally(() => {
        for (let e of w) J.delete(e);
      });
    }
    if (h === void 0) for (let e of cg().slice()) {
      b(e, !0);
      let R = F.get(e.id);
      e.nextFireAt = R === 1 / 0 ? void 0 : R;
    }
    for (let e of re) b(e, !0);
    if (k.size === 0) {
      F.clear();
      return;
    }
    for (let e of F.keys()) if (!k.has(e)) F.delete(e);
  }
  async function oe() {
    if (L) return;
    A?.(), A = null;
    let {default: r} = await import("./chunk-9n4g46ye.js");
    if (L) return;
    if (x = Q() ? await de(N, D).catch(() => !1) : !1, L) {
      if (x) x = !1, z(N, D);
      return;
    }
    if (!x) O = setInterval(() => {
      if (!Q()) return;
      de(N, D).then(w => {
        if (L) {
          if (w) z(N, D);
          return;
        }
        if (w) {
          if (x = !0, O) clearInterval(O), O = null;
        }
      }).catch(w => t(String(w), {
        level: "error"
      }));
    }, qe), O.unref?.();
    me(!0).then(ne);
    let k = PRe(h);
    M = pe(() => r.watch(k, {
      persistent: !1,
      ignoreInitial: !0,
      awaitWriteFinish: {
        stabilityThreshold: We
      },
      ignorePermissionErrors: !0
    })), K = setInterval(ne, ze), K.unref?.();
  }
  function pe(r) {
    let k = r();
    k.on("error", T => t(`[ScheduledTasks] watcher error: ${T}`, {
      level: "warn"
    }));
    let w = () => {
      if (L || M !== k) return;
      M = pe(r), M.once("ready", () => void me(!1)), k.close().catch(T => t(`[ScheduledTasks] watcher close failed: ${T}`, {
        level: "warn"
      }));
    };
    return k.on("add", w), k.on("change", w), k.on("unlink", () => {
      if (!L) {
        ee = [];
        let T = new Set(re.map(b => b.id));
        if (h === void 0) for (let b of cg()) T.add(b.id);
        for (let b of F.keys()) if (!T.has(b)) F.delete(b);
      }
    }), k;
  }
  return {
    start() {
      if (L = !1, A?.(), A = null, h !== void 0) {
        t(`[ScheduledTasks] scheduler start() \u2014 dir=${h}, hasTasks=${y_r(h)}`), oe();
        return;
      }
      if (t(`[ScheduledTasks] scheduler start() \u2014 enabled=${fYn()}, hasTasks=${y_r()}`), 
      Y.add(q()), Z ??= Oc(r => {
        Y.add(r);
      }), !fYn() && (y || V !== void 0 || y_r())) JU(!0);
      if (fYn()) {
        oe();
        return;
      }
      A = tNo(() => void oe());
    },
    stop() {
      if (L = !0, A?.(), A = null, Z?.(), Z = null, K) clearInterval(K), K = null;
      if (O) clearInterval(O), O = null;
      if (M?.close(), M = null, x) x = !1, z(N, D);
    },
    getNextFireTime() {
      let r = 1 / 0;
      for (let k of F.values()) if (k < r) r = k;
      return r === 1 / 0 ? null : r;
    },
    checkNow() {
      ne();
    }
  };
}

function Ue(s) {
  let n = s.length > 1, a = `The following one-shot scheduled task${n ? "s were" : " was"} missed while Claude was not running. ${n ? "They have" : "It has"} already been removed from .claude/scheduled_tasks.json.\n\nDo NOT execute ${n ? "these prompts" : "this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${n ? "each one" : "it"} now. Only execute if the user confirms.`, y = s.map(S => `${`[${nC(S.cron)}, created ${new Date(S.createdAt).toLocaleString()}]`}\n${G4n(S.prompt)}`);
  return `${a}\n\n${y.join(`\n\n`)}`;
}

function Ee(s, n) {
  let a = () => Je(Error("scheduled task handler threw (message not reported: it may contain user text)", {
    cause: s
  }), n);
  try {
    let y = Je(j(s), n);
    return vq(y) === n ? y : a();
  } catch {
    return a();
  }
}

export { ONr };
