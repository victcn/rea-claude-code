// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, he } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { x, l, E, Ms, $y, Gj, tm } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { mr, Fe } from "./chunk-0cdqg49t.js";

import { _, Y, se, t } from "./chunk-kawq2919.js";

import { Ee, zJe } from "./chunk-z52kmxx4.js";

import { ne, Mv, vr } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { Lj, d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { Ja, Om } from "./chunk-2msx6erf.js";

import { na } from "./chunk-nfw0a30b.js";

import { EC, ql } from "./chunk-sfvypv11.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { gn } from "./chunk-yxennhe9.js";

import { EKn } from "./chunk-q6wab2jw.js";

import { Vdt } from "./chunk-jc5888qn.js";

import { Ns } from "./chunk-g6nh65r0.js";

import { Sft, Kg, ro } from "./chunk-n3526wzr.js";

import { sz } from "./chunk-yrmy36g6.js";

import { _a, SIe, Cft } from "./chunk-3kb22va7.js";

import { olt } from "./chunk-3c5ceehb.js";

import { CY } from "./chunk-jd0jznz2.js";

import { Dn, qft } from "./chunk-q0e8j22k.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, M, oe, T, u, _t, Kr, ue, U, A } from "./chunk-cvcg6n1z.js";

import { um, Qi } from "./chunk-ws55c9wv.js";

import { N } from "./chunk-hmqkrrtz.js";

import { Zf, yt } from "./chunk-9zhz923g.js";

import { readdir as ce, readFile as ze, unlink as ye, writeFile as Q } from "fs/promises";

import { join as re } from "path";

function U_s(e) {
  if (na().taskList.leaderTeamName === e) return;
  na().taskList.leaderTeamName = e, j();
}

function B_s(e) {
  return na().taskList.updated.subscribe(e);
}

function j() {
  try {
    na().taskList.updated.emit();
  } catch {}
}

var tSe = p(() => U([ "pending", "in_progress", "completed" ])), Oe = p(() => u({
  id: o(),
  subject: o(),
  description: o(),
  activeForm: o().optional(),
  owner: o().optional(),
  status: tSe(),
  blocks: T(o()),
  blockedBy: T(o()),
  metadata: ue(o(), oe()).optional()
})), ppo = ".highwatermark", $e = 16, ut = new Set([ "ELOOP", "EISDIR", "ENXIO" ]);

function De(e) {
  return e.code === "AlreadyExists" || e.code === "Failed" && e.telemetryCode !== void 0 && ut.has(e.telemetryCode);
}

var me = {
  retries: {
    retries: 30,
    minTimeout: 5,
    maxTimeout: 100
  },
  onCompromised: e => d(e)
};

function Ne(e) {
  return re(SN(e), ppo);
}

async function G(e, n) {
  return await Be(e, n) ?? 0;
}

async function Be(e, n) {
  if (n) {
    let i = await n.read([ Fe.taskListHighWaterMark(yP(e)) ]);
    if (!i.ok) return null;
    let c = i.value.items[0];
    if (!c?.found) return 0;
    let k = parseInt(Buffer.from(c.value).toString("utf8").trim(), 10);
    return isNaN(k) ? null : k;
  }
  let r = Ne(e);
  try {
    let i = (await ze(r, "utf8")).trim(), c = parseInt(i, 10);
    return isNaN(c) ? null : c;
  } catch (i) {
    return E(i) === "ENOENT" ? 0 : null;
  }
}

async function X(e, n, r) {
  if (r) {
    let c = await r.write(Fe.taskListHighWaterMark(yP(e)), String(n), {
      publishDiscipline: "inPlace"
    });
    if (!c.ok) {
      let k = Gj(Zf(c.error));
      throw Object.assign(new x(`[Tasks] high-water mark write failed: ${c.error.code}`, "tasks high-water mark v5 write failed"), k === void 0 ? {} : {
        code: k
      });
    }
    return;
  }
  let i = Ne(e);
  await Q(i, String(n), {
    encoding: "utf8"
  });
}

async function lt(e, n, r) {
  try {
    if (n > await G(e, r)) await X(e, n, r);
  } catch (i) {
    t(`[Tasks] could not record skipped task id ${n}: ${l(i)}`);
  }
}

function hP() {
  if (a.CLAUDE_CODE_ENABLE_TASKS === !1) return !1;
  return !0;
}

async function j_s(e, n) {
  let r = SN(e), i;
  try {
    i = await Z(e, n);
    let c = [];
    if (n) {
      let s = await be(n, e);
      if (s === null) return !1;
      if (c = s.filter(h => !h.startsWith(".")), c.length > 0) {
        let h = await n.read(c.map(y => C(e, y)));
        if (!h.ok) return t(`[Tasks] Failed to read task list ${e} before a reset: ${h.error.code}`), 
        !1;
        if (h.value.items.length !== c.length) return !1;
        for (let [y, b] of h.value.items.entries()) {
          if (!b.found) continue;
          let w = pe(c[y], Buffer.from(b.value).toString("utf8"));
          if (w === null) continue;
          if (w.status !== "completed") return !1;
        }
      }
    } else if ((await aH(e)).some(h => h.status !== "completed")) return !1;
    let k = n ? Te(c) : await qe(e);
    if (k > 0) {
      let s = await G(e, n);
      if (k > s) await X(e, k, n);
    }
    if (n) for (let s of c) await n.delete(Fe.task(yP(e), s)); else {
      let s;
      try {
        s = await ce(r);
      } catch {
        s = [];
      }
      for (let h of s) if (h.endsWith(".json") && !h.startsWith(".")) {
        let y = re(r, h);
        try {
          await ye(y);
        } catch {}
      }
    }
    return j(), !0;
  } finally {
    await Om(i, "[Tasks] resetTaskList");
  }
}

function rE() {
  if (a.CLAUDE_CODE_TASK_LIST_ID) return a.CLAUDE_CODE_TASK_LIST_ID;
  let e = EC();
  if (e) return e.teamName;
  return ql() || na().taskList.leaderTeamName || q();
}

function yP(e) {
  return e.replace(/[^a-zA-Z0-9_-]/g, "-");
}

function SN(e) {
  return re(Ee(), "tasks", yP(e));
}

function F(e, n) {
  return re(SN(e), `${yP(n)}.json`);
}

function C(e, n) {
  return Fe.task(yP(e), yP(n));
}

async function be(e, n) {
  let r = {
    namespace: "task",
    listId: yP(n)
  }, i = [], c = await Qi(k => e.listEntries(r, {
    cursor: k,
    skipKeyStats: !0
  }), k => {
    for (let s of k) if (s.kind === "key" && s.key.namespace === "task" && "taskId" in s.key) i.push(s.key.taskId);
  });
  switch (c.status) {
   case "done":
    return i;

   case "error":
    return t(`[Tasks] Failed to list task list ${n}: ${c.error.code}`), null;

   case "capped":
    return t(`[Tasks] Listing task list ${n} exceeded ${um} pages; treating the listing as failed`), 
    null;
  }
}

async function Ce(e, n) {
  let r = {
    namespace: "task",
    listId: yP(n)
  }, i = [], c;
  try {
    c = await Qi(s => e.listEntries(r, {
      cursor: s,
      includeValue: !0
    }), s => {
      for (let h of s) {
        if (h.kind !== "key" || h.key.namespace !== "task" || !("taskId" in h.key)) continue;
        let y = h.key.taskId;
        if (h.value instanceof Uint8Array && y === yP(y)) i.push(pe(y, Buffer.from(h.value).toString("utf8"))); else i.push(FV(n, y, e));
      }
    });
  } finally {
    await Promise.allSettled(i);
  }
  switch (c.status) {
   case "done":
    break;

   case "error":
    return t(`[Tasks] Failed to list task list ${n}: ${c.error.code}`), null;

   case "capped":
    return t(`[Tasks] Listing task list ${n} exceeded ${um} pages; treating the listing as failed`), 
    null;
  }
  return (await Promise.all(i)).filter(s => s !== null).sort((s, h) => Number(s.id) - Number(h.id));
}

async function W_s(e, n) {
  if (z() && n !== void 0) return Ce(n, e);
  return aH(e);
}

async function iQt(e, n) {
  let r = SN(e);
  try {
    if (z() && n !== void 0) {
      await n.ensureScope({
        namespace: "task",
        listId: yP(e)
      });
      return;
    }
    await se().mkdir(r);
  } catch {}
}

function Te(e) {
  let n = 0;
  for (let r of e) {
    let i = parseInt(r, 10);
    if (!isNaN(i) && i > n) n = i;
  }
  return n;
}

async function qe(e, n) {
  if (n) {
    let k = await be(n, e);
    if (k === null) throw new x("[Tasks] Could not list the task list to determine its highest task id");
    return Te(k);
  }
  let r = SN(e), i;
  try {
    i = await ce(r);
  } catch {
    return 0;
  }
  let c = 0;
  for (let k of i) {
    if (!k.endsWith(".json")) continue;
    let s = parseInt(k.replace(".json", ""), 10);
    if (!isNaN(s) && s > c) c = s;
  }
  return c;
}

async function Y_r(e, n) {
  let [r, i] = await Promise.all([ qe(e, n), G(e, n) ]);
  return Math.max(r, i);
}

async function z_s(e, n, r) {
  let i;
  try {
    i = await Z(e, r);
    let c = await Y_r(e, r), k = String(c + 1);
    if (r) for (let s = 1; ;s++) {
      let h = {
        id: k,
        ...n
      }, y = await r.write(C(e, k), _(h, null, 2), {
        precondition: {
          type: "ifAbsent"
        }
      });
      if (y.ok) break;
      if (!De(y.error)) throw new x(`[Tasks] Failed to create task ${k}: ${y.error.code}`, "[Tasks] v5 task create write failed");
      let b = y.error.code === "Failed" ? y.error.telemetryCode : void 0;
      if (t(`[Tasks] createTask: task id ${k} is held by an entry the listing did not report (${b ?? y.error.code}); taking the next id`), 
      await lt(e, Number(k), r), s >= $e) throw new x(`[Tasks] Failed to create a task: could not claim a free task id after ${$e} attempts; last tried ${F(e, k)}, which exists and could not be claimed \u2014 the task listing may have failed, or the entry is not a task file`, "[Tasks] v5 task create gave up: no free task id");
      k = String(Number(k) + 1);
    } else {
      let s = {
        id: k,
        ...n
      }, h = F(e, k);
      await Q(h, _(s, null, 2), {
        encoding: "utf8"
      });
    }
    return j(), k;
  } finally {
    await Om(i, "[Tasks] createTask");
  }
}

function pe(e, n) {
  try {
    let r = Y(n), i = Oe().safeParse(r);
    if (!i.success) return t(`[Tasks] Task ${e} failed schema validation: ${i.error.message}`), 
    null;
    return i.data;
  } catch (r) {
    if (t(`[Tasks] Failed to read task ${e}: ${l(r)}`), !(r instanceof SyntaxError)) d(r);
    return null;
  }
}

async function je(e, n, r) {
  let i = await e.read([ C(n, r) ]);
  if (!i.ok) return t(`[Tasks] Failed to read task ${r}: ${i.error.code}`), null;
  let c = i.value.items[0];
  if (!c.found) return null;
  return pe(r, Buffer.from(c.value).toString("utf8"));
}

async function fpo(e, n, r, i, {wholeOrNothing: c = !1} = {}) {
  let k, s = 0, h = [], y = async () => {
    let b = 0;
    for (let w of h) {
      let S;
      try {
        if (i) {
          let R = await i.delete(C(e, w));
          S = R.ok ? void 0 : R.error.code;
        } else await ye(F(e, w));
      } catch (R) {
        let v = E(R);
        S = v === "ENOENT" ? void 0 : v ?? l(R);
      }
      if (S !== void 0) b++, t(`[Tasks] restoreTaskList: task ${w} not taken back: ${S}`);
    }
    return b;
  };
  try {
    if (k = await Z(e, i), await Y_r(e, i) > 0) return {
      restored: !1,
      written: s
    };
    for (let b of n) {
      if (i) {
        let w = await i.write(C(e, b.id), _(b, null, 2), {
          precondition: {
            type: "ifAbsent"
          }
        });
        if (w.ok) s++, h.push(b.id); else t(`[Tasks] restoreTaskList: task ${b.id} not written: ${w.error.code}`);
        continue;
      }
      try {
        await Q(F(e, b.id), _(b, null, 2), {
          encoding: "utf8",
          flag: "wx"
        }), s++, h.push(b.id);
      } catch (w) {
        t(`[Tasks] restoreTaskList: task ${b.id} not written: ${E(w) ?? "unknown"}`);
      }
    }
    if (c && s < n.length) {
      let b = await y();
      return {
        restored: !1,
        written: 0,
        refused: n.length - s,
        ...b > 0 && {
          left: b
        }
      };
    }
    await X(e, r, i);
  } catch (b) {
    if (c) await y();
    throw b;
  } finally {
    await Om(k, "[Tasks] restoreTaskList");
  }
  return j(), {
    restored: !0,
    written: s
  };
}

async function G_s(e, n, r) {
  let i;
  try {
    i = await Z(e, r);
    let c = !1;
    if (r) {
      let s = await r.write(C(e, n.id), _(n, null, 2), {
        precondition: {
          type: "ifAbsent"
        }
      });
      if (!s.ok && !De(s.error)) throw new x(`[Tasks] Failed to write task ${n.id}: ${s.error.code}`, "[Tasks] v5 task write under id failed");
      c = s.ok;
    } else try {
      await Q(F(e, n.id), _(n, null, 2), {
        encoding: "utf8",
        flag: "wx"
      }), c = !0;
    } catch (s) {
      if (E(s) !== "EEXIST") throw s;
    }
    let k = Number(n.id);
    if (Number.isSafeInteger(k) && k > await G(e, r)) await X(e, k, r);
    if (c) j();
    return c;
  } finally {
    await Om(i, "[Tasks] writeTaskUnderId");
  }
}

async function vNn(e, n, r) {
  let i;
  try {
    if (i = await Z(e, r), n <= await G(e, r)) return !1;
    return await X(e, n, r), !0;
  } finally {
    await Om(i, "[Tasks] raiseTaskIdMark");
  }
}

async function FV(e, n, r) {
  if (r) return je(r, e, n);
  let i = F(e, n);
  try {
    let c = await ze(i, "utf8"), k = Y(c), s = Oe().safeParse(k);
    if (!s.success) return t(`[Tasks] Task ${n} failed schema validation: ${s.error.message}`), 
    null;
    return s.data;
  } catch (c) {
    if (E(c) === "ENOENT") return null;
    if (t(`[Tasks] Failed to read task ${n}: ${l(c)}`, {
      level: "error"
    }), !(c instanceof SyntaxError) && !tm(c) && !$y(c)) d(c);
    return null;
  }
}

async function Ue(e, n, r, i) {
  if (i) return We(i, e, n, r);
  let c = await FV(e, n);
  if (!c) return null;
  let k = {
    ...c,
    ...r,
    id: n
  }, s = F(e, n);
  return await Q(s, _(k, null, 2), {
    encoding: "utf8"
  }), j(), k;
}

var dt = 5, ct = olt(50);

async function ke(e, n, r, i) {
  let c = C(n, r);
  for (let k = 1; ;k++) {
    let s = await e.update(c, y => {
      let b = y === void 0 ? null : pe(r, Buffer.from(y.value).toString("utf8")), w = i(b);
      return "write" in w ? {
        write: _(w.write, null, 2),
        result: w.result
      } : {
        skip: !0,
        result: w.result
      };
    });
    if (s.ok) {
      if (s.value.written) j();
      return s.value.result;
    }
    if (!(s.error.code === "Unavailable" && s.error.telemetryCode === "LockSuspect") || k >= dt) throw t(`[Tasks] update of task ${r} failed after ${k} attempt(s): ${s.error.code}${"telemetryCode" in s.error && s.error.telemetryCode ? ` (${s.error.telemetryCode})` : ""}`), 
    new x(`[Tasks] Failed to update task ${r}: ${s.error.code}`, "[Tasks] v5 task update write failed");
    await (s.error.retryAfterMs !== void 0 ? J(s.error.retryAfterMs) : ct(k));
  }
}

function Le(e, n, r) {
  return {
    ...e,
    ...n,
    id: r
  };
}

async function We(e, n, r, i) {
  return await ke(e, n, r, k => {
    if (!k) return {
      result: null
    };
    let s = Le(k, i, r);
    return {
      write: s,
      result: s
    };
  }) ?? null;
}

async function pue(e, n, r, i) {
  let c = F(e, n);
  if (i) {
    if (!await je(i, e, n)) return null;
    let h;
    try {
      return h = await Ke(e, n), await We(i, e, n, r);
    } finally {
      await Om(h, "[Tasks] updateTask");
    }
  }
  if (!await FV(e, n)) return null;
  let s;
  try {
    return s = await Ja(c, me), await Ue(e, n, r);
  } finally {
    await Om(s, "[Tasks] updateTask");
  }
}

async function MPt(e, n, r) {
  let i = F(e, n);
  try {
    let c = parseInt(n, 10);
    if (!isNaN(c)) {
      let s = await G(e, r);
      if (c > s) await X(e, c, r);
    }
    if (r) {
      let s = await r.delete(C(e, n));
      if (!s.ok) return t(`[Tasks] Failed to delete task ${n}: ${s.error.code}`), !1;
      if (!s.value.existed) return !1;
    } else try {
      await ye(i);
    } catch (s) {
      if (E(s) === "ENOENT") return !1;
      throw s;
    }
    let k = await aH(e, r);
    for (let s of k) {
      let h = s.blocks.filter(b => b !== n), y = s.blockedBy.filter(b => b !== n);
      if (h.length !== s.blocks.length || y.length !== s.blockedBy.length) await pue(e, s.id, {
        blocks: h,
        blockedBy: y
      }, r);
    }
    return j(), !0;
  } catch {
    return !1;
  }
}

async function aH(e, n) {
  if (n) return await Ce(n, e) ?? [];
  let r = SN(e), i;
  try {
    i = await ce(r);
  } catch {
    return [];
  }
  let c = i.filter(s => s.endsWith(".json")).map(s => s.replace(".json", ""));
  return (await Promise.all(c.map(s => FV(e, s)))).filter(s => s !== null).sort((s, h) => Number(s.id) - Number(h.id));
}

function mpo(e) {
  return /^[1-9]\d*$/.test(e);
}

async function gpo(e, n) {
  let r;
  if (n) r = await be(n, e); else try {
    r = (await ce(SN(e))).filter(h => h.endsWith(".json")).map(h => h.replace(".json", ""));
  } catch (h) {
    r = E(h) === "ENOENT" ? [] : null;
  }
  if (r === null) return null;
  let i = r.filter(mpo).sort((h, y) => Number(h) - Number(y)), c = await Promise.all(i.map(h => FV(e, h, n))), k = await Be(e, n);
  if (k === null) return null;
  let s = c.filter((h, y) => h?.id === i[y]);
  return {
    tasks: s.length === i.length ? s : null,
    highestId: Math.max(k, Te(r))
  };
}

function HPt(e, n) {
  let r = {
    ...e
  };
  for (let [i, c] of Object.entries(n)) if (c === null) delete r[i]; else r[i] = c;
  return r;
}

async function DPt(e, n, r, i) {
  let [c, k] = await Promise.all([ FV(e, n, i), FV(e, r, i) ]);
  if (!c || !k) return !1;
  if (!c.blocks.includes(r)) await pue(e, n, {
    blocks: [ ...c.blocks, r ]
  }, i);
  if (!k.blockedBy.includes(n)) await pue(e, r, {
    blockedBy: [ ...k.blockedBy, n ]
  }, i);
  return !0;
}

async function mt(e, n) {
  await iQt(e, n);
  let r = re(SN(e), ".lock");
  try {
    await se().mkdir(SN(e)), await Q(r, "", {
      flag: "wx"
    });
  } catch {}
  return r;
}

async function Z(e, n) {
  if (he()) return He(yP(e));
  let r = await mt(e, n);
  return Ja(r, me);
}

function Ke(e, n) {
  if (he()) return He(`${yP(e)}/${yP(n)}`);
  let r = F(e, n);
  return Ja(`${r}.v5-lock-anchor`, {
    lockfilePath: `${r}.lock`,
    realpath: !1,
    ...me
  });
}

function He(e) {
  return new Promise(n => {
    na().taskList.locks.run(e, () => new Promise(r => n(async () => r())));
  });
}

async function V_s(e, n, r, i = {}, c) {
  let k = F(e, n);
  if (!await FV(e, n, c)) return {
    success: !1,
    reason: "task_not_found"
  };
  if (i.checkAgentBusy) return pt(e, n, r, c);
  let h;
  try {
    if (h = c ? await Ke(e, n) : await Ja(k, me), c) {
      let v = await ke(c, e, n, P => Ie(P, n, r, void 0));
      if (v !== "needs_open_blockers") return v ?? {
        success: !1,
        reason: "task_not_found"
      };
      let D = await aH(e, c), ge = new Set(D.filter(P => P.status !== "completed").map(P => P.id)), H = await ke(c, e, n, P => Ie(P, n, r, ge));
      return H === void 0 || H === "needs_open_blockers" ? {
        success: !1,
        reason: "task_not_found"
      } : H;
    }
    let y = await FV(e, n, c);
    if (!y) return {
      success: !1,
      reason: "task_not_found"
    };
    if (y.owner && y.owner !== r) return {
      success: !1,
      reason: "already_claimed",
      task: y
    };
    if (y.status === "completed") return {
      success: !1,
      reason: "already_resolved",
      task: y
    };
    let b = await aH(e, c), w = new Set(b.filter(v => v.status !== "completed").map(v => v.id)), S = y.blockedBy.filter(v => w.has(v));
    if (S.length > 0) return {
      success: !1,
      reason: "blocked",
      task: y,
      blockedByTasks: S
    };
    return {
      success: !0,
      task: await Ue(e, n, {
        owner: r
      }, c)
    };
  } catch (y) {
    return t(`[Tasks] Failed to claim task ${n}: ${l(y)}`), d(y), {
      success: !1,
      reason: "task_not_found"
    };
  } finally {
    await Om(h, "[Tasks] claimTask");
  }
}

function Ie(e, n, r, i) {
  if (!e) return {
    result: {
      success: !1,
      reason: "task_not_found"
    }
  };
  if (e.owner && e.owner !== r) return {
    result: {
      success: !1,
      reason: "already_claimed",
      task: e
    }
  };
  if (e.status === "completed") return {
    result: {
      success: !1,
      reason: "already_resolved",
      task: e
    }
  };
  if (e.blockedBy.length > 0) {
    if (!i) return {
      result: "needs_open_blockers"
    };
    let k = e.blockedBy.filter(s => i.has(s));
    if (k.length > 0) return {
      result: {
        success: !1,
        reason: "blocked",
        task: e,
        blockedByTasks: k
      }
    };
  }
  let c = Le(e, {
    owner: r
  }, n);
  return {
    write: c,
    result: {
      success: !0,
      task: c
    }
  };
}

async function pt(e, n, r, i) {
  let c;
  try {
    c = await Z(e, i);
    let k = await aH(e, i), s = k.find(S => S.id === n);
    if (!s) return {
      success: !1,
      reason: "task_not_found"
    };
    if (s.owner && s.owner !== r) return {
      success: !1,
      reason: "already_claimed",
      task: s
    };
    if (s.status === "completed") return {
      success: !1,
      reason: "already_resolved",
      task: s
    };
    let h = new Set(k.filter(S => S.status !== "completed").map(S => S.id)), y = s.blockedBy.filter(S => h.has(S));
    if (y.length > 0) return {
      success: !1,
      reason: "blocked",
      task: s,
      blockedByTasks: y
    };
    let b = k.filter(S => S.status !== "completed" && S.owner === r && S.id !== n);
    if (b.length > 0) return {
      success: !1,
      reason: "agent_busy",
      task: s,
      busyWithTasks: b.map(S => S.id)
    };
    return {
      success: !0,
      task: await pue(e, n, {
        owner: r
      }, i)
    };
  } catch (k) {
    return t(`[Tasks] Failed to claim task ${n} with busy check: ${l(k)}`), d(k), {
      success: !1,
      reason: "task_not_found"
    };
  } finally {
    await Om(c, "[Tasks] claimTaskWithBusyCheck");
  }
}

async function Zat(e, n, r, i, c) {
  let s = (await aH(e, c)).filter(b => b.status !== "completed" && (b.owner === n || b.owner === r));
  for (let b of s) await pue(e, b.id, {
    owner: void 0,
    status: "pending"
  }, c);
  if (s.length > 0) t(`[Tasks] Unassigned ${s.length} task(s) from ${r}`);
  let y = `${r} ${i === "terminated" ? "was terminated" : "has shut down"}.`;
  if (s.length > 0) {
    let b = s.map(w => `#${w.id} "${w.subject}"`).join(", ");
    y += ` ${s.length} task(s) were unassigned: ${b}. Use TaskList to check availability and TaskUpdate with owner to reassign them to idle teammates.`;
  }
  return {
    unassignedTasks: s.map(b => ({
      id: b.id,
      subject: b.subject
    })),
    notificationMessage: y
  };
}

import { join as Me } from "path";

var ft = new Set([ "to", "summary", "message", "notify_when_idle" ]), _e = "antml:", fe = "</summary>", Qe = '<parameter name="message">', Ge = `<${_e}parameter name="message">`, gt = new RegExp(`<(?:${_e})?parameter\\b|</(?:${_e})?(?:parameter|invoke|function_calls|message)>`);

function X_r(e) {
  let n = Xe(e);
  return n !== void 0 && n.unrepaired === void 0 ? n.split : void 0;
}

function Xe(e) {
  if (!L(e)) return;
  let {message: n, summary: r} = e;
  if (typeof e.to !== "string" || n !== void 0 && n !== null || typeof r !== "string" || !Object.keys(e).every(c => ft.has(c))) return;
  let i = r.indexOf(fe);
  while (i !== -1) {
    let c = i + fe.length;
    while (c < r.length && /\s/.test(r.charAt(c))) c++;
    let k = r.startsWith(Ge, c) ? "namespaced" : r.startsWith(Qe, c) ? "bare" : void 0;
    if (k !== void 0) {
      let s = k === "namespaced" ? Ge : Qe, h = r.slice(c + s.length).trimEnd();
      if (h.trim().length === 0) return;
      return {
        split: {
          summary: r.slice(0, i).trim(),
          message: h,
          openerForm: k
        },
        unrepaired: gt.test(h) ? "markup" : kt(h) ? "json" : void 0
      };
    }
    i = r.indexOf(fe, i + fe.length);
  }
  return;
}

function ENn(e, {applySplit: n = !0} = {}) {
  if (!L(e)) return null;
  let {message: r, summary: i} = e, c = [], k = Xe(e), s = k?.unrepaired === void 0 ? k?.split : void 0;
  if (s !== void 0 && n) r = s.message, i = s.summary, c.push(`split_slipped_summary_${s.openerForm}`);
  if (typeof r === "string" && (typeof i !== "string" || i.trim().length === 0)) {
    let b = vr(r.trim()).trim();
    if (b.length > 0) i = b, c.push("derive_summary");
  }
  if (typeof i === "string" && i.length > qft) i = ne(i, qft - 1) + "\u2026", c.push("truncate_summary");
  let [h] = c, y = k?.unrepaired !== void 0 ? `split_slipped_summary_${k.split.openerForm}_unrepaired_${k.unrepaired}` : s !== void 0 && !n ? `split_slipped_summary_${s.openerForm}_detect_only` : h;
  if (y === void 0) return null;
  return {
    input: {
      ...e,
      ...r !== void 0 && {
        message: r
      },
      summary: i
    },
    shapeClass: y
  };
}

function kt(e) {
  let n = e.trim();
  if (!n.startsWith("{") && !n.startsWith("[")) return !1;
  try {
    let r = Y(n);
    return typeof r === "object" && r !== null;
  } catch {
    return !1;
  }
}

function O() {
  return na().mailbox.ledger;
}

function hpo(e, n) {
  let r = ro(e);
  return Object.values(n ?? {}).find(i => ro(i.name) === r);
}

function ht(e, n) {
  if (n.isPaneTeammate) return !1;
  if (!Object.values(n.roster ?? {}).some(s => s.tmuxPaneId === "leader")) return !1;
  let i = ro(e);
  if (i === _a || i === SIe || i === Cft) return !0;
  let k = hpo(e, n.roster);
  return k?.tmuxPaneId === "in-process" || k?.tmuxPaneId === "leader";
}

function nSe(e, n, r) {
  let i = O(), c = new Set, k = new Map;
  for (let s of e) if (s.msg_id !== void 0 && !c.has(s.msg_id) && i.wrote(n, s) && s.msg_id !== void 0) c.add(s.msg_id), 
  k.set(s, "verified"); else k.set(s, ht(s.from, r) ? "forged" : "unverifiable");
  return k;
}

var V = {
  retries: {
    retries: 10,
    minTimeout: 5,
    maxTimeout: 100
  },
  onCompromised: e => d(e)
}, Ze = p(() => _t({
  type: o().optional(),
  from: o(),
  text: o(),
  timestamp: o(),
  read: M().optional(),
  color: o().optional(),
  summary: o().optional(),
  from_plugin: o().optional()
}));

function Je(e, n) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return `entry is ${e === null ? "null" : Array.isArray(e) ? "an array" : typeof e}`;
  return n.map(r => {
    let i = r.path[0], c = typeof i === "string" ? i : String(i), k = e[c], s = k === void 0 ? c in e ? "undefined" : "missing" : k === null ? "null" : typeof k;
    return `${c}:${r.code}:${s}`;
  }).join(", ");
}

var Ve = 100, bt = 2048;

function Tt(e, n) {
  try {
    let r = _(n);
    return `${e}\0${r.length}:${r.slice(0, bt)}`;
  } catch {
    return `${e}\0(unserializable)`;
  }
}

function wt(e, n, r) {
  let i = na().mailbox.reportedDroppedEntries;
  if (i.size >= Ve) return !1;
  let c = Tt(e, n);
  if (i.has(c)) return !1;
  i.add(c);
  let k = `[TeammateMailbox] dropped schema-invalid inbox entry (${r})`;
  if (n === null || typeof n !== "object" || Array.isArray(n)) return d(new x(k, "TeammateMailbox: dropped inbox entry that is not an object")), 
  !0;
  let s = n.text;
  if (s === void 0) d(new x(k, "TeammateMailbox: dropped inbox entry with missing text")); else if (s === null) d(new x(k, "TeammateMailbox: dropped inbox entry with null text")); else if (typeof s !== "string") d(new x(k, "TeammateMailbox: dropped inbox entry with non-string text")); else d(new x(k, "TeammateMailbox: dropped inbox entry failing schema validation"));
  return !0;
}

function xt(e, n) {
  let r = na().mailbox.reportedDroppedEntries;
  if (r.size >= Ve) return;
  let i = `${e}\0(not-an-array)`;
  if (r.has(i)) return;
  r.add(i), d(new x(`[TeammateMailbox] inbox file top level is ${n === null ? "null" : typeof n}, expected an array`, "TeammateMailbox: inbox file is not an array"));
}

function Se(e, n) {
  if (!Array.isArray(e)) return xt(n, e), {
    valid: [],
    droppedCount: 1
  };
  let r = [], i = 0;
  for (let c of e) {
    let k = Ze().safeParse(c);
    if (k.success) r.push(c); else {
      i++;
      let s = Je(c, k.error.issues);
      if (wt(n, c, s)) t(`[TeammateMailbox] dropping schema-invalid inbox entry (${s})`, {
        level: "warn"
      });
    }
  }
  return {
    valid: r,
    droppedCount: i
  };
}

async function u6s() {
  await Promise.all(Array.from(na().mailbox.pendingPrunes.values()));
}

function Mt(e, n, r) {
  let i = na().mailbox.pendingPrunes;
  if (i.has(e)) return;
  let c = jzs(e, n, r).finally(() => {
    i.delete(e);
  });
  i.set(e, c);
}

async function jzs(e, n, r) {
  if (z() && n !== void 0 && r !== void 0) {
    try {
      let k = await te(n, r, e, s => s.droppedCount === 0 ? {
        skip: !0,
        result: 0
      } : {
        messages: s.messages,
        result: s.droppedCount
      }, !1);
      if (k) t(`[TeammateMailbox] pruned ${k} schema-invalid entr${k === 1 ? "y" : "ies"} at ${e}`);
    } catch (k) {
      t(`[TeammateMailbox] invalid-entry prune skipped: ${k}`);
    }
    return;
  }
  let i = `${e}.lock`, c;
  try {
    c = await Ja(e, {
      lockfilePath: i,
      ...V
    });
    let k = await gn().read(e), {valid: s, droppedCount: h} = Se(Y(k), e);
    if (h === 0) {
      W(e, s, s);
      return;
    }
    await gn().atomicWrite(e, _(s, null, 2)), W(e, s, s), t(`[TeammateMailbox] pruned ${h} schema-invalid entr${h === 1 ? "y" : "ies"} at ${e}`);
  } catch (k) {
    t(`[TeammateMailbox] invalid-entry prune skipped: ${k}`);
  } finally {
    await Om(c, "[TeammateMailbox] pruneInvalidMailboxEntries");
  }
}

function p1(e, n) {
  let r = n || ql() || "default", i = yP(r), c = yP(e), k = Me(zJe(), i, "inboxes"), s = Me(k, `${c}.json`);
  return t(`[TeammateMailbox] getInboxPath: agent=${e}, team=${r}, fullPath=${s}`), 
  s;
}

async function Et(e) {
  let n = e || ql() || "default", r = yP(n), i = Me(zJe(), r, "inboxes");
  await gn().mkdir(i), t(`[TeammateMailbox] Ensured inbox directory: ${i}`);
}

function ee(e, n) {
  let r = yP(n || ql() || "default"), i = yP(e);
  return mr(r) && mr(i) ? Fe.mailbox(r, i) : void 0;
}

function St(e, n, r) {
  let i;
  try {
    i = Y(e);
  } catch {
    return {
      messages: [],
      droppedCount: 0,
      corrupt: !0
    };
  }
  let {valid: c, droppedCount: k} = Se(i, n);
  if (r) {
    for (let s of c) if (s.type === void 0) s.type = "message";
  }
  return {
    messages: c,
    droppedCount: k,
    corrupt: !1
  };
}

async function te(e, n, r, i, c = !0) {
  let k, s = await e.updateText(n, h => {
    let y = h === void 0 ? {
      messages: [],
      droppedCount: 0
    } : St(h.value, r, c), b = i({
      messages: y.messages,
      droppedCount: y.droppedCount,
      found: h !== void 0
    });
    return k = {
      read: y.messages,
      remaining: "skip" in b ? y.messages : b.messages
    }, "skip" in b ? {
      skip: !0,
      result: b.result
    } : {
      write: _(b.messages, null, 2),
      result: b.result
    };
  }, {
    mode: 438 & ~process.umask()
  });
  if (!s.ok) throw t(`[TeammateMailbox] inbox update failed: ${yt(s.error)}`, {
    level: "error"
  }), Error("teammate inbox storage update failed");
  if (k !== void 0) W(r, k.read, k.remaining);
  return s.value.result;
}

function W(e, n, r) {
  let i = new Set(r), c = new Set;
  for (let s of n) if (!i.has(s) && s.msg_id !== void 0) c.add(s.msg_id);
  let k = new Set;
  for (let s of r) if (s.msg_id !== void 0 && !c.has(s.msg_id)) k.add(s.msg_id);
  O().retain(e, k);
}

async function n5e(e, n, r, i) {
  let c = p1(e, n);
  t(`[TeammateMailbox] readMailbox: path=${c}`);
  let k = z() && r !== void 0 ? ee(e, n) : void 0;
  try {
    let s;
    if (z() && r !== void 0 && k !== void 0) {
      let b = await r.readText([ k ]);
      if (!b.ok) throw t(`[TeammateMailbox] readMailbox: inbox read failed: ${yt(b.error)}`), 
      Error("teammate inbox storage read failed");
      if (!b.value.items[0].found) return t("[TeammateMailbox] readMailbox: file does not exist"), 
      [];
      s = b.value.items[0].value;
    } else s = await gn().read(c);
    let {valid: h, droppedCount: y} = Se(Y(s), c);
    if (y > 0) Mt(c, r, k);
    for (let b of h) if (b.type === void 0) b.type = "message";
    return t(`[TeammateMailbox] readMailbox: read ${h.length} message(s)` + (y > 0 ? `, dropped ${y} invalid` : "")), 
    h;
  } catch (s) {
    if (E(s) === "ENOENT") return t("[TeammateMailbox] readMailbox: file does not exist"), 
    [];
    if (s instanceof SyntaxError) return t(`[TeammateMailbox] readMailbox: unparseable inbox, treating as empty: ${s}`), 
    [];
    if (i?.throwOnUnknownReadError) throw s;
    return t(`Failed to read inbox for ${e}: ${s}`), d(s), [];
  }
}

async function r5e(e, n, r) {
  let i = await n5e(e, n, r), c = i.filter(k => !k.read);
  return t(`[TeammateMailbox] readUnreadMessages: ${c.length} unread of ${i.length} total`), 
  c;
}

async function bw(e, n, r, i) {
  let c = Ze().safeParse(n);
  if (!c.success) {
    let b = Je(n, c.error.issues);
    t(`[TeammateMailbox] writeToMailbox: refusing schema-invalid message for ${e} (${b})`, {
      level: "warn"
    }), d(typeof n.text !== "string" ? new x(`[TeammateMailbox] refused mailbox write (${b})`, "TeammateMailbox: refused mailbox write with non-string text") : new x(`[TeammateMailbox] refused mailbox write (${b})`, "TeammateMailbox: refused mailbox write failing schema validation"));
    return;
  }
  let k = z() && i !== void 0 ? ee(e, r) : void 0;
  if (z() && i !== void 0 && k !== void 0) {
    let b = {
      ...n,
      ...CY(),
      type: "message",
      read: !1
    }, w = p1(e, r);
    try {
      return await te(i, k, w, S => (O().record(w, b), {
        messages: [ ...S.messages, b ],
        result: !0
      })), t(`[TeammateMailbox] Wrote message to ${e}'s inbox from ${n.from}`), b.msg_id;
    } catch (S) {
      t(`Failed to write to inbox for ${e}: ${S}`, {
        level: "error"
      }), d(S);
      return;
    }
  }
  try {
    await Et(r);
  } catch (b) {
    t(`[TeammateMailbox] writeToMailbox: failed to ensure inbox dir: ${b}`, {
      level: "error"
    });
    return;
  }
  let s = p1(e, r), h = `${s}.lock`;
  t(`[TeammateMailbox] writeToMailbox: recipient=${e}, from=${n.from}, path=${s}`);
  try {
    await gn().writeExclusive(s, "[]"), t("[TeammateMailbox] writeToMailbox: created new inbox file");
  } catch (b) {
    if (E(b) !== "EEXIST") {
      if (t(`[TeammateMailbox] writeToMailbox: failed to create inbox file: ${b}`, {
        level: "error"
      }), !Ms(b)) d(b);
      return;
    }
  }
  let y;
  try {
    y = await Ja(s, {
      lockfilePath: h,
      ...V
    });
    let b = await n5e(e, r), w = {
      ...n,
      ...CY(),
      type: "message",
      read: !1
    };
    b.push(w), O().record(s, w);
    try {
      await gn().atomicWrite(s, _(b, null, 2));
    } catch (S) {
      throw O().retire(s, w.msg_id === void 0 ? [] : [ w.msg_id ]), S;
    }
    return t(`[TeammateMailbox] Wrote message to ${e}'s inbox from ${n.from}`), w.msg_id;
  } catch (b) {
    if (t(`Failed to write to inbox for ${e}: ${b}`, {
      level: "error"
    }), !Ms(b)) d(b);
    return;
  } finally {
    await Om(y, `[TeammateMailbox] writeToMailbox(${e})`);
  }
}

function Rt(e, n) {
  let r = e.findIndex(c => !c.read && c.from === n.from && c.timestamp === n.timestamp && c.text === n.text);
  return {
    messages: (r === -1 ? e : e.toSpliced(r, 1)).filter(c => !c.read),
    found: r !== -1
  };
}

async function J_r(e, n, r, i) {
  let c = p1(e, n);
  t(`[TeammateMailbox] markSingleMessageAsRead called: agentName=${e}, teamName=${n}, target=${r.from}@${r.timestamp}, path=${c}`);
  let k = z() && i !== void 0 ? ee(e, n) : void 0;
  if (z() && i !== void 0 && k !== void 0) {
    try {
      let y = await te(i, k, c, b => {
        if (!b.found) return {
          skip: !0,
          result: "absent"
        };
        let w = Rt(b.messages, r);
        return {
          messages: w.messages,
          result: w.found
        };
      });
      t(y === "absent" ? `[TeammateMailbox] markSingleMessageAsRead: file does not exist at ${c}` : `[TeammateMailbox] markSingleMessageAsRead: dropped target (${y ? "found" : "not found"}) at ${c}`);
    } catch (y) {
      t(`[TeammateMailbox] markSingleMessageAsRead FAILED for ${e}: ${y}`), d(y);
    }
    return;
  }
  let s = `${c}.lock`, h;
  try {
    h = await Ja(c, {
      lockfilePath: s,
      ...V
    });
    let y = await n5e(e, n), b = [ ...y ], w = y.findIndex(R => !R.read && R.from === r.from && R.timestamp === r.timestamp && R.text === r.text);
    if (w !== -1) y.splice(w, 1);
    let S = y.filter(R => !R.read);
    await gn().atomicWrite(c, _(S, null, 2)), W(c, b, S), t(`[TeammateMailbox] markSingleMessageAsRead: dropped target (${w === -1 ? "not found" : "found"}); ${S.length} remain at ${c}`);
  } catch (y) {
    if (E(y) === "ENOENT") {
      O().forget(c), t(`[TeammateMailbox] markSingleMessageAsRead: file does not exist at ${c}`);
      return;
    }
    t(`[TeammateMailbox] markSingleMessageAsRead FAILED for ${e}: ${y}`), d(y);
  } finally {
    await Om(h, "[TeammateMailbox] markSingleMessageAsRead");
  }
}

var GRe = 5;

function wN(e) {
  return `${e.from}|${e.timestamp}|${e.text}`;
}

async function VRe(e, n, r, i) {
  let c = p1(e, n);
  t(`[TeammateMailbox] markMessagesAsRead called: agentName=${e}, teamName=${n}, path=${c}`);
  let k = z() && i !== void 0 ? ee(e, n) : void 0;
  if (z() && i !== void 0 && k !== void 0) {
    let y = r === void 0 ? null : new Set(r.map(wN));
    try {
      let b = await te(i, k, c, w => {
        if (!w.found || w.messages.length === 0) return {
          skip: !0,
          result: null
        };
        let S = w.messages.filter(R => !R.read && y !== null && !y.has(wN(R)));
        return {
          messages: S,
          result: {
            pruned: w.messages.length - S.length,
            remain: S.length
          }
        };
      });
      return t(b ? `[TeammateMailbox] markMessagesAsRead: pruned ${b.pruned} delivered message(s), ${b.remain} remain at ${c}` : "[TeammateMailbox] markMessagesAsRead: no messages to mark"), 
      !0;
    } catch (b) {
      return t(`[TeammateMailbox] markMessagesAsRead FAILED for ${e}: ${b}`), d(b), !1;
    }
  }
  let s = `${c}.lock`, h;
  try {
    t("[TeammateMailbox] markMessagesAsRead: acquiring lock..."), h = await Ja(c, {
      lockfilePath: s,
      ...V
    }), t("[TeammateMailbox] markMessagesAsRead: lock acquired");
    let y = await n5e(e, n, void 0, {
      throwOnUnknownReadError: !0
    });
    if (t(`[TeammateMailbox] markMessagesAsRead: read ${y.length} messages after lock`), 
    y.length === 0) return W(c, y, y), t("[TeammateMailbox] markMessagesAsRead: no messages to mark"), 
    !0;
    let b = N(y, R => !R.read);
    t(`[TeammateMailbox] markMessagesAsRead: ${b} unread of ${y.length} total`);
    let w = r === void 0 ? null : new Set(r.map(wN)), S = y.filter(R => !R.read && w !== null && !w.has(wN(R)));
    return await gn().atomicWrite(c, _(S, null, 2)), W(c, y, S), t(`[TeammateMailbox] markMessagesAsRead: pruned ${y.length - S.length} delivered message(s), ${S.length} remain at ${c}`), 
    !0;
  } catch (y) {
    if (E(y) === "ENOENT") return O().forget(c), t(`[TeammateMailbox] markMessagesAsRead: file does not exist at ${c}`), 
    !0;
    return t(`[TeammateMailbox] markMessagesAsRead FAILED for ${e}: ${y}`), d(y), !1;
  } finally {
    await Om(h, "[TeammateMailbox] markMessagesAsRead");
  }
}

async function kNn(e, n, r) {
  let i = p1(e, n), c = z() && r !== void 0 ? ee(e, n) : void 0;
  if (z() && r !== void 0 && c !== void 0) {
    try {
      if (await te(r, c, i, y => y.found ? {
        messages: [],
        result: !0
      } : {
        skip: !0,
        result: !1
      })) t(`[TeammateMailbox] Cleared inbox for ${e}`);
    } catch (h) {
      t(`Failed to clear inbox for ${e}: ${h}`), d(h);
    }
    return;
  }
  let k = `${i}.lock`, s;
  try {
    s = await Ja(i, {
      lockfilePath: k,
      ...V
    }), await gn().atomicWrite(i, "[]"), O().forget(i), t(`[TeammateMailbox] Cleared inbox for ${e}`);
  } catch (h) {
    if (E(h) === "ENOENT") {
      O().forget(i);
      return;
    }
    t(`Failed to clear inbox for ${e}: ${h}`), d(h);
  } finally {
    await Om(s, "[TeammateMailbox] clearMailbox");
  }
}

function aQt(e) {
  let n = sz(e.color) ? ` color="${e.color}"` : "", r = Roe(e.summary), i = r ? ` summary="${Ns(r)}"` : "", c = wg(e.from, sv) || MS, k = e.provenance === "forged" ? ' verified="false"' : "", s = Sft(e.text);
  if (s !== e.text) for (let h = 0; h < 4; h++) {
    let y = Sft(S8(s, e.from));
    if (y === s) break;
    s = y;
  }
  return `<${Lj} teammate_id="${Ns(c)}"${n}${i}${k}>\n${s}\n</${Lj}>`;
}

function x$e(e, n) {
  let i = Vzs(e).map(c => aQt(n.recipientIsLead || c.provenance === "forged" ? c : {
    ...c,
    text: jPt(c.text, c.from)
  })).join(`\n\n`);
  return n.recipientIsLead ? Vdt(i, {
    midTurn: !1
  }) : i;
}

var fue = p(() => u({
  type: A("idle_notification"),
  from: o(),
  timestamp: o(),
  idleReason: U([ "available", "interrupted", "failed" ]).optional(),
  summary: o().optional(),
  completedTaskId: o().optional(),
  completedStatus: U([ "resolved", "blocked", "failed" ]).optional(),
  failureReason: o().optional(),
  result: o().optional()
})), ypo = 200, K_s = 200;

function Roe(e) {
  let n = e ? vr(e).trim() : "";
  return xoe(n, K_s);
}

function lQt(e) {
  let n = e ? vr(e).trim() : "";
  return EN(ne(n, ypo));
}

var TNn = 4e4;

function oz(e, n) {
  if (!e) return "";
  let r = EN(e), i = ne(r, n);
  if (i.length >= r.length) return r;
  return `${EN(i)}\n[truncated for display]`;
}

var UV = 4e3, q_s = 16e3;

function Wzs(e, n = !0) {
  let r = e ? it(e) : "";
  if (!r) return "";
  let i = ne(r, UV);
  if (i.length >= r.length) return i;
  let c = EN(i);
  return n ? `${c}\n[result truncated \u2014 ask the agent for the rest via ${Dn}]` : `${c}\n[result truncated]`;
}

var et = 200, vN = K_s * 2 + 16, sv = 256, ie = 256, Re = 4, elt = UV + et + vN + ypo + 3 * sv + 1024;

function ae(e, n) {
  if (typeof e === "string") return xoe(e, ie);
  if (e === null || typeof e !== "object") return e;
  if (n <= 0) return null;
  if (Array.isArray(e)) return e.map(i => ae(i, n - 1));
  let r = [];
  for (let [i, c] of Object.entries(e)) r.push([ xoe(i, ie), ae(c, n - 1) ]);
  return Object.fromEntries(r);
}

function ANn(e, n) {
  let r = EN(e);
  if (ne(r, UV + et).length >= r.length) return r;
  let c = EN(ne(r, UV));
  return n ? `${c}\n[result truncated \u2014 ask the agent for the rest via ${Dn}]` : `${c}\n[result truncated]`;
}

var tt = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/, _po = "[invalid timestamp]", CNn = "[invalid id]", o5e = "[display sanitized; the agent reads the raw frame]", MS = "[unknown sender]", Pt = /^perm-[0-9]{1,20}-[0-9a-z]{1,12}$/, vt = /^(?:shutdown|plan_approval)-[0-9]{1,20}@[^@\n]{1,300}(?:@[^@\n]{1,300})?$/u, At = 320;

function $t(e) {
  return !e.includes(`\n`) && !e.includes("\r") && EN(e) === e && [ ...e ].length <= At && (Pt.test(e) || vt.test(e)) ? e : CNn;
}

var It = /^(%[0-9]{1,10}|[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12})$/;

function zt(e) {
  return It.test(e) ? e : CNn;
}

var Ft = {
  tmux: !0,
  iterm2: !0,
  "in-process": !0
};

function Ot(e) {
  return Object.hasOwn(Ft, e) ? e : CNn;
}

function nt(e, n, r) {
  let i = typeof n.result === "string" && n.result ? ANn(n.result, n.idleReason !== "failed") : n.result, c = typeof n.summary === "string" && n.summary ? xoe(n.summary, vN) : n.summary, k = typeof n.failureReason === "string" && n.failureReason ? lQt(n.failureReason) : n.failureReason, s = typeof n.from === "string" && n.from ? wg(n.from, sv) : n.from, h = typeof r === "string" ? wg(r, sv) || MS : void 0, y = h !== void 0 && typeof s === "string" && s !== h ? h : s, b = typeof n.timestamp === "string" && tt.test(n.timestamp) ? n.timestamp : _po, w = typeof n.completedTaskId === "string" && n.completedTaskId ? wg(n.completedTaskId, sv) : n.completedTaskId, S = Y(e), R = S !== null && typeof S === "object" && !Array.isArray(S) ? S : {
    ...n
  }, v = new Set(Object.keys(fue().shape)), D = [];
  for (let [I, B] of Object.entries(R)) {
    if (v.has(I)) {
      D.push([ I, B ]);
      continue;
    }
    let le = xoe(I, ie);
    if (v.has(le)) continue;
    D.push([ le, ae(B, Re) ]);
  }
  let ge = Object.fromEntries(D), H = {
    result: i,
    summary: c,
    failureReason: k,
    from: y,
    timestamp: b,
    completedTaskId: w
  }, P = {
    ...n,
    ...H
  }, K = _({
    ...ge,
    ...H
  });
  if (K.length > elt) K = _(P);
  let Pe = !1;
  while (K.length > elt) {
    let I, B = 0;
    for (let ve of [ "result", "summary", "failureReason" ]) {
      let de = P[ve];
      if (typeof de === "string" && de) {
        let Ae = _(de).length;
        if (Ae > B) I = {
          key: ve,
          value: de
        }, B = Ae;
      }
    }
    if (!I) break;
    let le = [ ...I.value ].length;
    Pe ||= I.key === "result", P = {
      ...P,
      [I.key]: EN(ne(I.value, Math.floor(le / 2)))
    }, K = _(P);
  }
  if (Pe && P.result) {
    let I = {
      ...P,
      result: `${P.result}\n[result truncated]`
    }, B = _(I);
    if (B.length <= elt) P = I, K = B;
  }
  return K === e ? {
    text: e,
    idle: n
  } : {
    text: K,
    idle: P
  };
}

function rt(e, n) {
  let r = EN(e), i = ne(r, n);
  if (i.length >= r.length) return r;
  return `${EN(i)}\n[truncated]`;
}

var Dt = 1024, Nt = 2048, zzs = new Map([ [ "plan_approval_request", {
  from: {
    kind: "envelope-pinned-id"
  },
  timestamp: {
    kind: "timestamp"
  },
  planFilePath: {
    kind: "id"
  },
  planContent: {
    kind: "body",
    bound: TNn
  },
  requestId: {
    kind: "request-id"
  }
} ], [ "plan_approval_response", {
  requestId: {
    kind: "request-id"
  },
  approved: {
    kind: "generic"
  },
  feedback: {
    kind: "body",
    bound: UV
  },
  timestamp: {
    kind: "timestamp"
  },
  permissionMode: {
    kind: "generic"
  }
} ], [ "shutdown_request", {
  requestId: {
    kind: "request-id"
  },
  from: {
    kind: "envelope-pinned-id"
  },
  reason: {
    kind: "body",
    bound: vN
  },
  timestamp: {
    kind: "timestamp"
  }
} ], [ "shutdown_approved", {
  requestId: {
    kind: "request-id"
  },
  from: {
    kind: "envelope-pinned-id"
  },
  timestamp: {
    kind: "timestamp"
  },
  paneId: {
    kind: "pane-id"
  },
  backendType: {
    kind: "backend-type"
  }
} ], [ "shutdown_rejected", {
  requestId: {
    kind: "request-id"
  },
  from: {
    kind: "envelope-pinned-id"
  },
  reason: {
    kind: "body",
    bound: vN
  },
  timestamp: {
    kind: "timestamp"
  }
} ], [ "task_assignment", {
  taskId: {
    kind: "id"
  },
  subject: {
    kind: "line"
  },
  description: {
    kind: "body",
    bound: UV
  },
  assignedBy: {
    kind: "envelope-pinned-id"
  },
  timestamp: {
    kind: "timestamp"
  }
} ], [ "task_completed", {
  from: {
    kind: "envelope-pinned-id"
  },
  taskId: {
    kind: "id"
  },
  taskSubject: {
    kind: "line"
  },
  timestamp: {
    kind: "timestamp"
  }
} ], [ "teammate_terminated", {
  message: {
    kind: "body",
    bound: UV
  }
} ], [ "idle_notification", {
  from: {
    kind: "envelope-pinned-id"
  },
  timestamp: {
    kind: "timestamp"
  },
  idleReason: {
    kind: "generic"
  },
  summary: {
    kind: "line"
  },
  completedTaskId: {
    kind: "id"
  },
  completedStatus: {
    kind: "generic"
  },
  failureReason: {
    kind: "body",
    bound: ypo
  },
  result: {
    kind: "body",
    bound: UV
  }
} ] ]);

function RNn(e, n) {
  if (!st.test(e)) return null;
  let r;
  try {
    r = Y(e);
  } catch {
    return null;
  }
  if (!L(r)) return null;
  let i = r, c = i.type, k = typeof c === "string" ? zzs.get(c) : void 0;
  if (!k) return null;
  let s = new Set(Object.keys(k)), h = [], y = 0;
  for (let [w, S] of Object.entries(i)) {
    if (w === "type") {
      h.push([ w, c ]);
      continue;
    }
    if (s.has(w)) {
      h.push([ w, Bt(k[w], S, n) ]);
      continue;
    }
    let R = xoe(w, ie);
    if (R === "type" || s.has(R)) continue;
    let v = ae(S, Re), D = _(v).length + R.length;
    if (y + D > Nt) continue;
    y += D, h.push([ R, v ]);
  }
  let b = _(Object.fromEntries(h));
  return b === e ? null : b;
}

function Bt(e, n, r) {
  if (e.kind === "generic") {
    let i = typeof n === "string" ? xoe(n, ie) : ae(n, Re);
    if (i !== null && typeof i === "object" && _(i).length > Dt) return null;
    return i;
  }
  if (typeof n !== "string") switch (e.kind) {
   case "envelope-pinned-id":
    return (typeof r === "string" ? wg(r, sv) || MS : void 0) ?? CNn;

   case "id":
   case "request-id":
   case "pane-id":
   case "backend-type":
    return CNn;

   case "timestamp":
    return _po;

   case "line":
   case "body":
    return "";
  }
  switch (e.kind) {
   case "id":
    return wg(n, sv);

   case "request-id":
    return $t(n);

   case "pane-id":
    return zt(n);

   case "backend-type":
    return Ot(n);

   case "envelope-pinned-id":
    {
      let i = wg(n, sv), c = typeof r === "string" ? wg(r, sv) || MS : void 0;
      return c !== void 0 && i !== c ? c : i;
    }

   case "timestamp":
    return tt.test(n) ? n : _po;

   case "line":
    return wg(n, vN);

   case "body":
    return rt(n, e.bound);
  }
}

function Gzs(e, n) {
  let r = Date.parse(e.timestamp);
  return Number.isNaN(r) ? Number.NEGATIVE_INFINITY : Math.min(r, n);
}

function Vzs(e) {
  if (we.has(e)) return e;
  let n = e.slice(), r = [], i = Date.now();
  for (let s = 0; s < n.length; s++) {
    let h = NPt(n[s].text);
    if (!h) {
      let w = RNn(n[s].text, n[s].from);
      if (w !== null) n[s] = {
        ...n[s],
        text: w
      };
      continue;
    }
    let y = nt(n[s].text, h, n[s].from);
    if (y.text !== n[s].text) n[s] = {
      ...n[s],
      text: y.text
    };
    let b = y.idle;
    if (typeof b.result === "string" && b.result) r.push({
      index: s,
      recency: Gzs(b, i),
      idle: b
    });
  }
  r.sort((s, h) => h.recency - s.recency || h.index - s.index);
  let c = q_s, k = 0;
  for (let {index: s, idle: h} of r) {
    let y = n[s];
    if (y.text.length <= c) {
      c -= y.text.length;
      continue;
    }
    let b = h.idleReason === "failed" ? "" : `; ask the agent for it via ${Dn}`, w = {
      type: "idle_notification",
      from: h.from,
      timestamp: h.timestamp,
      idleReason: h.idleReason,
      summary: h.summary,
      completedTaskId: h.completedTaskId,
      completedStatus: h.completedStatus,
      failureReason: h.failureReason
    }, S = _({
      ...w,
      result: `[result truncated \u2014 this drain's results exceeded ${q_s} characters${b}]`
    });
    if (S.length > c) S = _({
      ...w,
      result: "[result truncated]"
    });
    if (S.length >= y.text.length) {
      c = Math.max(0, c - y.text.length);
      continue;
    }
    if (c = Math.max(0, c - S.length), S !== y.text) k++, n[s] = {
      ...y,
      text: S
    };
  }
  if (k > 0 && !Ye.has(e)) Ye.add(e), f("swarm_idle_result_delivery", "budget_truncated");
  if (n.every((s, h) => s === e[h])) return we.add(e), e;
  return we.add(n), n;
}

var Ye = new WeakSet, we = new WeakSet;

function LPt(e, n) {
  let r = Wzs(n?.result, n?.senderReachable ?? n?.idleReason !== "failed") || void 0;
  return {
    type: "idle_notification",
    from: e,
    timestamp: (new Date).toISOString(),
    idleReason: n?.idleReason,
    summary: n?.summary ? EN(n.summary) : void 0,
    completedTaskId: n?.completedTaskId,
    completedStatus: n?.completedStatus,
    failureReason: lQt(n?.failureReason ? EN(n.failureReason) : void 0) || void 0,
    result: r
  };
}

function tlt(e, n, r) {
  if (e.result === void 0) return;
  if (r === void 0) m("swarm_idle_result_delivery", "mailbox_write_failed"); else if (n !== void 0 && e.result === it(n)) g("swarm_idle_result_delivery"); else f("swarm_idle_result_delivery", "per_frame_truncated");
}

var Ct = /[\u0000-\u0008\u000B-\u001F\u007F-\u009F\u2028\u2029]|(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Cf}\p{Default_Ignorable_Code_Point}]/u, qt = new RegExp(Ct.source, "gu"), xe = /[\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/gu, jt = 8, Ut = 7, Lt = 16, Wt = 4;

function Kt(e) {
  let n = (e.match(xe) ?? []).length, r = [ ...e ].length - n, i = Math.max(Lt, Math.ceil(r / Wt));
  return e.split(`\n`).map(c => {
    let k = (c.match(xe) ?? []).length, s = Math.max(jt, Math.ceil(([ ...c ].length - k) / Ut)), h = 0;
    return c.replace(xe, y => h++ < s && i-- > 0 ? y : "");
  }).join(`\n`);
}

function EN(e) {
  return Kt(Mv(e).replace(qt, ""));
}

function xoe(e, n) {
  let r = EN(e), i = ne(r, n);
  return i.length >= r.length ? i : EN(i);
}

function wg(e, n) {
  return xoe(e, n).replace(/\s+/g, " ").trim();
}

var st = /^\s*\{/;

function S8(e, n) {
  let r = st.test(e) ? NPt(e) : null;
  if (r) return nt(e, r, n).text;
  return RNn(e, n) ?? e;
}

function it(e) {
  return EN(e.trim());
}

function NPt(e) {
  try {
    let n = fue().safeParse(Y(e));
    return n.success ? n.data : null;
  } catch {}
  return null;
}

var Y_s = p(() => u({
  tool_use_id: o(),
  tool_name: o(),
  input_digest: o()
})), Kzs = p(() => Kr("subtype", [ u({
  type: A("permission_response"),
  request_id: o().min(1),
  subtype: A("success"),
  tool_use_id: o().optional(),
  approved_request: Y_s().optional(),
  response: u({
    updated_input: ue(o(), oe()).optional(),
    permission_updates: T(oe()).optional()
  }).optional()
}), u({
  type: A("permission_response"),
  request_id: o().min(1),
  subtype: A("error"),
  tool_use_id: o().optional(),
  approved_request: Y_s().optional(),
  error: o()
}) ]));

function bpo(e) {
  return {
    type: "permission_request",
    request_id: e.request_id,
    agent_id: e.agent_id,
    tool_name: e.tool_name,
    tool_use_id: e.tool_use_id,
    description: e.description,
    input: e.input,
    permission_suggestions: e.permission_suggestions || []
  };
}

function Spo(e) {
  if (e.subtype === "error") return {
    type: "permission_response",
    request_id: e.request_id,
    subtype: "error",
    tool_use_id: e.tool_use_id,
    approved_request: e.approved_request,
    error: e.error || "Permission denied"
  };
  return {
    type: "permission_response",
    request_id: e.request_id,
    subtype: "success",
    tool_use_id: e.tool_use_id,
    approved_request: e.approved_request,
    response: {
      updated_input: e.updated_input,
      permission_updates: e.permission_updates
    }
  };
}

function Q_r(e) {
  try {
    let n = Y(e);
    if (n && n.type === "permission_request") return n;
  } catch {}
  return null;
}

function $Pt(e) {
  let n;
  try {
    n = Y(e);
  } catch {
    return null;
  }
  if (n === null || typeof n !== "object" || !("type" in n) || n.type !== "permission_response") return null;
  let r = Kzs().safeParse(n);
  if (r.success) return r.data;
  return t(`[TeammateMailbox] Dropping malformed permission_response frame: ${r.error.issues.map(i => `${i.path.join(".")}: ${i.message}`).join("; ")}`, {
    level: "warn"
  }), null;
}

function wpo(e) {
  return {
    type: "sandbox_permission_request",
    requestId: e.requestId,
    workerId: e.workerId,
    workerName: e.workerName,
    workerColor: e.workerColor,
    hostPattern: {
      host: e.host
    },
    createdAt: Date.now()
  };
}

function vpo(e) {
  return {
    type: "sandbox_permission_response",
    requestId: e.requestId,
    host: e.host,
    allow: e.allow,
    timestamp: (new Date).toISOString()
  };
}

function Z_r(e) {
  try {
    let n = Y(e);
    if (n && n.type === "sandbox_permission_request") return n;
  } catch {}
  return null;
}

function ebr(e) {
  try {
    let n = Y(e);
    if (n && n.type === "sandbox_permission_response") return n;
  } catch {}
  return null;
}

var tbr = p(() => u({
  type: A("plan_approval_request"),
  from: o(),
  timestamp: o(),
  planFilePath: o(),
  planContent: o(),
  requestId: o()
})), nbr = p(() => u({
  type: A("plan_approval_response"),
  requestId: o(),
  approved: M(),
  feedback: o().optional(),
  timestamp: o(),
  permissionMode: EKn().optional()
})), rbr = p(() => u({
  type: A("shutdown_request"),
  requestId: o(),
  from: o(),
  reason: o().optional(),
  timestamp: o()
})), FPt = p(() => u({
  type: A("shutdown_approved"),
  requestId: o(),
  from: o(),
  timestamp: o(),
  paneId: o().optional(),
  backendType: o().optional()
})), Epo = p(() => u({
  type: A("shutdown_rejected"),
  requestId: o(),
  from: o(),
  reason: o(),
  timestamp: o()
}));

function kpo(e) {
  return {
    type: "shutdown_request",
    requestId: e.requestId,
    from: e.from,
    reason: e.reason,
    timestamp: (new Date).toISOString()
  };
}

function Tpo(e) {
  return {
    type: "shutdown_approved",
    requestId: e.requestId,
    from: e.from,
    timestamp: (new Date).toISOString(),
    paneId: e.paneId,
    backendType: e.backendType
  };
}

function Apo(e) {
  return {
    type: "shutdown_rejected",
    requestId: e.requestId,
    from: e.from,
    reason: e.reason,
    timestamp: (new Date).toISOString()
  };
}

function nlt(e) {
  try {
    let n = rbr().safeParse(Y(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}

function xNn(e) {
  try {
    let n = tbr().safeParse(Y(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}

function KRe(e) {
  try {
    let n = FPt().safeParse(Y(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}

var qzs = !0;

function dQt(e, n) {
  if (!e) return qzs ? "unbound" : "mismatch";
  if (e.answered) return "already_answered";
  return e.requestId === n.requestId ? "bound" : "mismatch";
}

function cQt(e) {
  return {
    type: "plan_approval_response",
    requestId: e.requestId,
    approved: !1,
    feedback: "The team lead's verdict was for a different request, not this plan. Call ExitPlanMode again to resubmit it for approval.",
    timestamp: e.timestamp
  };
}

function uQt(e) {
  try {
    let n = nbr().safeParse(Y(e));
    if (n.success) return n.data;
  } catch {}
  return null;
}

var Ht = p(() => u({
  type: A("task_assignment"),
  taskId: o(),
  subject: o(),
  description: o(),
  assignedBy: o(),
  timestamp: o()
}));

function Cpo(e) {
  return _P(Ht(), e);
}

var UPt = p(() => u({
  type: A("task_completed"),
  from: o().optional(),
  taskId: o(),
  taskSubject: o().optional(),
  timestamp: o().optional()
})), obr = p(() => u({
  type: A("teammate_terminated"),
  message: o()
}));

function _P(e, n) {
  try {
    let r = e.strict().safeParse(Y(n));
    if (r.success) return r.data;
  } catch {}
  return null;
}

function BPt(e) {
  return e.filter(n => {
    let r = n;
    if (!L(r)) return !1;
    if (r.provenance === "forged") return !0;
    if (r.summary !== void 0 && typeof r.summary !== "string") return !0;
    if (Roe(r.summary)) return !0;
    if (typeof r.text !== "string") return !0;
    return !_P(FPt(), r.text);
  });
}

function Rpo(e) {
  try {
    let n = Y(e);
    return !!n && n.type === "team_permission_update";
  } catch {
    return !1;
  }
}

function pQt(e) {
  try {
    let n = Y(e);
    return !!n && n.type === "mode_set_request";
  } catch {
    return !1;
  }
}

var xpo = "Teammate prompt must not be a mailbox protocol frame (permission/mode/plan/shutdown JSON) \u2014 pass plain-text instructions";

function g0(e) {
  try {
    let n = Y(e);
    if (!n || typeof n !== "object" || !("type" in n)) return !1;
    let r = n.type;
    return r === "permission_request" || r === "permission_response" || r === "sandbox_permission_request" || r === "sandbox_permission_response" || r === "shutdown_request" || r === "shutdown_response" || r === "shutdown_approved" || r === "team_permission_update" || r === "mode_set_request" || r === "plan_approval_request" || r === "plan_approval_response";
  } catch {
    return !1;
  }
}

function fQt(e) {
  let n = e.feedback ? rt(e.feedback, UV) : "";
  if (e.approved) return n ? `[Plan Approved] ${n}` : "[Plan Approved] You can now proceed with implementation";
  return `[Plan Rejected] ${n || "Please revise your plan"}`;
}

var Qt = /^shutdown-[0-9]{1,20}@[\w.-]{1,64}$/, Gt = "<requestId of the shutdown request>";

function Yzs(e) {
  let n = Qt.test(e), r = _({
    to: _a,
    message: {
      type: "shutdown_response",
      request_id: n ? e : Gt,
      approve: !0
    }
  });
  return `To approve it, call ${Dn} with exactly this input, where "message" is a JSON object rather than a string${n ? "" : " and request_id is the request's requestId value, copied verbatim"}: ${r}. Approving ends your process; a plain-text acknowledgment does not shut you down. To decline, for example because you're mid-task, send the same input with "approve": false and a "reason".`;
}

function jPt(e, n) {
  if (n !== _a || !e.includes('"shutdown_request"')) return e;
  let r = nlt(e);
  return r ? `${e}\n\nThis is a shutdown request. ${Yzs(r.requestId)}` : e;
}

function Ppo(e) {
  return !g0(e) || KRe(e) !== null || nlt(e) !== null || xNn(e) !== null;
}

async function mQt(e, n, r, i) {
  let c = p1(e, r), k = z() && i !== void 0 ? ee(e, r) : void 0;
  if (z() && i !== void 0 && k !== void 0) try {
    return await te(i, k, c, y => !y.found || y.messages.length === 0 ? {
      skip: !0,
      result: void 0
    } : {
      messages: y.messages.filter(b => !b.read && !n(b)),
      result: void 0
    }), !0;
  } catch (y) {
    return d(y), !1;
  }
  let s = `${c}.lock`, h;
  try {
    h = await Ja(c, {
      lockfilePath: s,
      ...V
    });
    let y = await n5e(e, r, void 0, {
      throwOnUnknownReadError: !0
    });
    if (y.length === 0) return W(c, y, y), !0;
    let b = y.filter(w => !w.read && !n(w));
    return await gn().atomicWrite(c, _(b, null, 2)), W(c, y, b), !0;
  } catch (y) {
    if (E(y) === "ENOENT") return O().forget(c), !0;
    return d(y), !1;
  } finally {
    await Om(h, "[TeammateMailbox] markMessagesAsReadByPredicate");
  }
}

function PNn(e) {
  return e.type === "user" && e.isMeta !== !0 && e.turnCompanion !== !0 && (typeof e.message.content === "string" || !e.message.content.some(n => n.type === "tool_result"));
}

function Ipo(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (!r) continue;
    if (PNn(r)) break;
    if (r.type !== "assistant") continue;
    for (let i of r.message.content) if (i.type === "tool_use" && i.name === Dn && typeof i.input === "object" && i.input !== null && "to" in i.input && typeof i.input.to === "string" && i.input.to !== "*" && i.input.to !== _a && i.input.to !== Kg) {
      let c = "message" in i.input ? i.input.message : void 0, k = "summary" in i.input && typeof i.input.summary === "string" ? i.input.summary : void 0, s = X_r(i.input);
      if (s !== void 0) return `[to ${Roe(i.input.to)}] ${Roe(s.summary.length > 0 ? s.summary : s.message.trim())}`;
      if (typeof c === "string") return `[to ${Roe(i.input.to)}] ${Roe(k !== void 0 ? k : ne(c, 80))}`;
    }
  }
  return;
}

export { U_s, B_s, tSe, ppo, hP, j_s, rE, yP, SN, W_s, iQt, Y_r, z_s, fpo, G_s, vNn, FV, pue, MPt, aH, mpo, gpo, HPt, DPt, V_s, Zat, X_r, ENn, hpo, nSe, u6s, jzs, p1, n5e, r5e, bw, J_r, GRe, wN, VRe, kNn, aQt, x$e, fue, ypo, K_s, Roe, lQt, TNn, oz, UV, q_s, Wzs, vN, sv, elt, ANn, _po, CNn, o5e, MS, zzs, RNn, Gzs, Vzs, LPt, tlt, EN, xoe, wg, S8, NPt, Y_s, Kzs, bpo, Spo, Q_r, $Pt, wpo, vpo, Z_r, ebr, tbr, nbr, rbr, FPt, Epo, kpo, Tpo, Apo, nlt, xNn, KRe, qzs, dQt, cQt, uQt, Cpo, UPt, obr, _P, BPt, Rpo, pQt, xpo, g0, fQt, Yzs, jPt, Ppo, mQt, PNn, Ipo };
