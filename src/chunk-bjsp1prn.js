// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, Ir, Qr, FC, iLo, cg, EEe, g6 } from "./chunk-3pqddg8f.js";

import { jt } from "./chunk-b0z4bv3v.js";

import { _, se, t } from "./chunk-kawq2919.js";

import { ite } from "./chunk-z52kmxx4.js";

import { d } from "./chunk-6ah1819r.js";

import { FU } from "./chunk-30n0xq4e.js";

import { Tgt, bA } from "./chunk-r276nwd3.js";

import { xie } from "./chunk-znhtg8e4.js";

import { mt } from "./chunk-j90se18b.js";

import { randomUUID as I } from "crypto";

import { readFileSync as D } from "fs";

import { mkdir as P } from "fs/promises";

import { join as b } from "path";

var T = [ {
  min: 0,
  max: 59
}, {
  min: 0,
  max: 23
}, {
  min: 1,
  max: 31
}, {
  min: 1,
  max: 12
}, {
  min: 0,
  max: 6
} ];

function x(e, s) {
  let {min: n, max: r} = s, i = new Set;
  for (let a of e.split(",")) {
    let o = a.match(/^\*(?:\/(\d+))?$/);
    if (o) {
      let l = o[1] ? parseInt(o[1], 10) : 1;
      if (l < 1) return null;
      for (let g = n; g <= r; g += l) i.add(g);
      continue;
    }
    let m = a.match(/^(\d+)-(\d+)(?:\/(\d+))?$/);
    if (m) {
      let l = parseInt(m[1], 10), g = parseInt(m[2], 10), u = m[3] ? parseInt(m[3], 10) : 1, h = n === 0 && r === 6, c = h ? 7 : r;
      if (l > g || u < 1 || l < n || g > c) return null;
      for (let f = l; f <= g; f += u) i.add(h && f === 7 ? 0 : f);
      continue;
    }
    if (a.match(/^\d+$/)) {
      let l = parseInt(a, 10);
      if (n === 0 && r === 6 && l === 7) l = 0;
      if (l < n || l > r) return null;
      i.add(l);
      continue;
    }
    return null;
  }
  if (i.size === 0) return null;
  return Array.from(i).sort((a, o) => a - o);
}

function HV(e) {
  let s = e.trim().split(/\s+/);
  if (s.length !== 5) return null;
  let n = [];
  for (let r = 0; r < 5; r++) {
    let i = x(s[r], T[r]);
    if (!i) return null;
    n.push(i);
  }
  return {
    minute: n[0],
    hour: n[1],
    dayOfMonth: n[2],
    month: n[3],
    dayOfWeek: n[4]
  };
}

function k(e) {
  let s = new Date(e.getTime());
  return s.setMinutes(s.getMinutes()), s.getTime() !== e.getTime();
}

function yPt(e, s, {oneShot: n = !1} = {}) {
  let r = new Set(e.minute), i = new Set(e.hour), a = new Set(e.dayOfMonth), o = new Set(e.month), m = new Set(e.dayOfWeek), p = e.dayOfMonth.length === 31, l = e.dayOfWeek.length === 7, g = c => p && l ? !0 : p ? m.has(c.getDay()) : l ? a.has(c.getDate()) : a.has(c.getDate()) || m.has(c.getDay()), u = new Date(Math.floor(s.getTime() / 6e4) * 6e4 + 6e4);
  if (Number.isNaN(u.getTime())) return null;
  let h = 527040;
  for (let c = 0; c < h; c++) {
    if (k(u)) {
      if (n && o.has(u.getMonth() + 1) && g(u) && i.has(u.getHours()) && r.has(u.getMinutes())) return u;
      u.setTime(u.getTime() + 6e4);
      continue;
    }
    let f = u.getMonth() + 1;
    if (!o.has(f)) {
      u.setMonth(u.getMonth() + 1, 1), u.setHours(0, 0, 0, 0);
      continue;
    }
    if (!g(u)) {
      u.setDate(u.getDate() + 1), u.setHours(0, 0, 0, 0);
      continue;
    }
    if (!i.has(u.getHours()) || !r.has(u.getMinutes())) {
      if (n) u.setTime(u.getTime() + 6e4); else if (!i.has(u.getHours())) u.setHours(u.getHours() + 1, 0, 0, 0); else u.setMinutes(u.getMinutes() + 1);
      continue;
    }
    return u;
  }
  return null;
}

var S = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

function F(e, s) {
  return new Date(2e3, 0, 1, s, e).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });
}

function w(e, s) {
  let n = new Date;
  return n.setUTCHours(s, e, 0, 0), n.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short"
  });
}

function nC(e, s) {
  let n = s?.utc ?? !1, r = e.trim().split(/\s+/);
  if (r.length !== 5) return e;
  let [i, a, o, m, p] = r;
  if (a === "*" && o === "*" && m === "*" && p === "*") {
    if (i === "*") return "Every minute";
    let c = i.match(/^\*\/(\d+)$/);
    if (c) {
      let f = parseInt(c[1], 10);
      return f === 1 ? "Every minute" : `Every ${f} minutes`;
    }
  }
  if (i.match(/^\d+$/) && a === "*" && o === "*" && m === "*" && p === "*") {
    let c = parseInt(i, 10);
    if (c === 0) return "Every hour";
    return `Every hour at :${c.toString().padStart(2, "0")}`;
  }
  let l = a.match(/^\*\/(\d+)$/);
  if (i.match(/^\d+$/) && l && o === "*" && m === "*" && p === "*") {
    let c = parseInt(l[1], 10), f = parseInt(i, 10), y = f === 0 ? "" : ` at :${f.toString().padStart(2, "0")}`;
    return c === 1 ? `Every hour${y}` : `Every ${c} hours${y}`;
  }
  if (!i.match(/^\d+$/) || !a.match(/^\d+$/)) return e;
  let g = parseInt(i, 10), u = parseInt(a, 10), h = n ? w : F;
  if (o === "*" && m === "*" && p === "*") return `Every day at ${h(g, u)}`;
  if (o === "*" && m === "*" && p.match(/^\d$/)) {
    let c = parseInt(p, 10) % 7, f;
    if (n) {
      let y = new Date, M = (c - y.getUTCDay() + 7) % 7;
      y.setUTCDate(y.getUTCDate() + M), y.setUTCHours(u, g, 0, 0), f = S[y.getDay()];
    } else f = S[c];
    if (f) return `Every ${f} at ${h(g, u)}`;
  }
  if (o === "*" && m === "*" && p === "1-5") return `Weekdays at ${h(g, u)}`;
  return e;
}

function b$e(e) {
  let s = e.trim();
  if (s === "") return {
    error: "required"
  };
  let n = s.match(/^(\d+)\s*([smhd])$/i);
  if (n) {
    let r = parseInt(n[1], 10), i = n[2].toLowerCase();
    if (r < 1) return {
      error: "interval must be at least 1"
    };
    let a;
    switch (i) {
     case "s":
      return {
        error: "minimum interval is 1 minute"
      };

     case "m":
      if (r > 59) return {
        error: "minute interval must be 1\u201359 (use hours instead)"
      };
      a = r === 1 ? "* * * * *" : `*/${r} * * * *`;
      break;

     case "h":
      if (r > 23) return {
        error: "hour interval must be 1\u201323 (use days instead)"
      };
      a = r === 1 ? "0 * * * *" : `0 */${r} * * *`;
      break;

     case "d":
      if (r === 1) {
        a = "0 0 * * *";
        break;
      }
      if (r > 28) return {
        error: "day interval must be 1\u201328 (use a cron expression)"
      };
      a = `0 0 */${r} * *`;
      break;

     default:
      return {
        error: "unknown interval unit"
      };
    }
    return {
      cron: a,
      human: nC(a)
    };
  }
  if (HV(s) !== null) return {
    cron: s,
    human: nC(s)
  };
  return {
    error: "use an interval (5m, 2h, 1d) or 5-field cron (*/5 * * * *)"
  };
}

var HLn = 3e5, A = /^\*\/\d+ \* \* \* \*$/, v = b(".claude", "scheduled_tasks.json");

function PRe(e) {
  return b(e ?? Ir(), v);
}

function DLn(e) {
  return e === void 0 && Qr() !== null;
}

async function OJt(e) {
  if (DLn(e)) return [];
  let s = se(), n;
  try {
    n = await s.readFile(PRe(e), {
      encoding: "utf-8"
    });
  } catch (o) {
    if (jt(o)) return [];
    return d(o), [];
  }
  let r = mt(n, !1);
  if (!r || typeof r !== "object") return [];
  let i = r;
  if (!Array.isArray(i.tasks)) return [];
  let a = [];
  for (let o of i.tasks) {
    if (!o || typeof o.id !== "string" || typeof o.cron !== "string" || typeof o.prompt !== "string" || typeof o.createdAt !== "number") {
      t(`[ScheduledTasks] skipping malformed task: ${_(o)}`);
      continue;
    }
    if (!HV(o.cron)) {
      t(`[ScheduledTasks] skipping task ${o.id} with invalid cron '${o.cron}'`);
      continue;
    }
    a.push({
      id: o.id,
      cron: o.cron,
      prompt: o.prompt,
      createdAt: o.createdAt,
      ...typeof o.lastFiredAt === "number" && {
        lastFiredAt: o.lastFiredAt
      },
      ...o.recurring && {
        recurring: !0
      },
      ...o.permanent && {
        permanent: !0
      },
      ...typeof o.createdBySessionId === "string" && {
        createdBySessionId: o.createdBySessionId
      },
      ...typeof o.createdByPid === "number" && {
        createdByPid: o.createdByPid
      },
      ...typeof o.createdByProcStart === "string" && {
        createdByProcStart: o.createdByProcStart
      },
      ...typeof o.createdInProject === "string" && {
        createdInProject: o.createdInProject
      }
    });
  }
  return a;
}

function cuo(e) {
  return FC() || iLo(e ?? Ir());
}

function y_r(e) {
  if (DLn(e)) return !1;
  if (cuo(e)) return !1;
  let s;
  try {
    s = D(PRe(e), "utf-8");
  } catch {
    return !1;
  }
  let n = mt(s, !1);
  if (!n || typeof n !== "object") return !1;
  let r = n.tasks;
  return Array.isArray(r) && r.length > 0;
}

async function LLn(e, s) {
  if (DLn(s)) throw Error("Durable scheduled tasks are unavailable in a session started with --project-config-root");
  let n = s ?? Ir(), r = !ite(b(n, ".claude"));
  if (r) await Tgt(n, b(n, ".claude"));
  await P(b(n, ".claude"), {
    recursive: !0
  });
  let i = {
    tasks: e.map(({durable: a, ...o}) => o)
  };
  await bA(PRe(n), _(i, null, 2) + `\n`, {
    encoding: "utf-8",
    allowSymlink: !r,
    checkParentDir: r,
    stagingDir: b(n, ".claude", FU)
  });
}

async function Pat(e, s, n, r, i, a = Date.now()) {
  let o = I().slice(0, 8), m = {
    id: o,
    cron: e,
    prompt: s,
    createdAt: a,
    ...n && {
      recurring: !0
    }
  };
  if (!r) return EEe({
    ...m,
    ...i && {
      agentId: i
    }
  }), o;
  let p = await OJt();
  return p.push({
    ...m,
    createdBySessionId: q(),
    createdByPid: process.pid,
    createdByProcStart: xie(),
    createdInProject: Ir()
  }), await LLn(p), o;
}

async function Ybe(e, s) {
  if (e.length === 0) return;
  if (s === void 0 && g6(e) === e.length) return;
  let n = new Set(e), r = await OJt(s), i = r.filter(a => !n.has(a.id));
  if (i.length === r.length) return;
  await LLn(i, s);
}

async function Gys(e, s, n) {
  if (e.length === 0) return;
  let r = new Set(e), i = await OJt(n), a = !1;
  for (let o of i) if (r.has(o.id)) o.lastFiredAt = s, a = !0;
  if (!a) return;
  await LLn(i, n);
}

async function Soe(e) {
  let s = await OJt(e);
  if (e !== void 0) return s;
  let n = cg().map(r => ({
    ...r,
    durable: !1
  }));
  return [ ...s, ...n ];
}

function MJt(e, s, n) {
  let r = HV(e);
  if (!r) return null;
  let i = yPt(r, new Date(s), n);
  return i ? i.getTime() : null;
}

var wY = {
  recurringFrac: .5,
  recurringCapMs: 18e5,
  oneShotMaxMs: 9e4,
  oneShotFloorMs: 0,
  oneShotMinuteMod: 30,
  recurringMaxAgeMs: 6048e5,
  cacheLeadMs: 15e3
};

function C(e) {
  let s = parseInt(e.slice(0, 8), 16) / 4294967296;
  return Number.isFinite(s) ? s : 0;
}

function HJt(e, s, n, r = wY) {
  let i = MJt(e, s);
  if (i === null) return null;
  let a = MJt(e, i);
  if (a === null) return i;
  let o = a - i;
  if (A.test(e) && r.cacheLeadMs > 0 && r.cacheLeadMs < o && o >= HLn && o - r.cacheLeadMs < HLn) return s + o - r.cacheLeadMs;
  let m = Math.min(C(n) * r.recurringFrac * o, r.recurringCapMs);
  return i + m;
}

function uuo(e, s, n, r = wY) {
  let i = MJt(e, s, {
    oneShot: !0
  });
  if (i === null) return null;
  if (new Date(i).getMinutes() % r.oneShotMinuteMod !== 0) return i;
  let a = r.oneShotFloorMs + C(n) * (r.oneShotMaxMs - r.oneShotFloorMs);
  return Math.max(i - a, s);
}

function Iat(e, s) {
  return e.recurring ? HJt(e.cron, e.lastFiredAt ?? e.createdAt, e.id, s) : uuo(e.cron, e.createdAt, e.id, s);
}

function Oat(e) {
  return new Date(Math.round(e / 6e4) * 6e4);
}

function Vys(e, s) {
  return e.filter(n => {
    let r = MJt(n.cron, n.createdAt, {
      oneShot: !n.recurring
    });
    return r !== null && r < s;
  });
}

export { HV, yPt, nC, b$e, HLn, PRe, DLn, OJt, cuo, y_r, LLn, Pat, Ybe, Gys, Soe, MJt, wY, HJt, uuo, Iat, Oat, Vys };
