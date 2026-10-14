// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, Gdn, Kdn } from "./chunk-3pqddg8f.js";

import { E } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { $mt } from "./chunk-q6wab2jw.js";

import { X } from "./chunk-1zg3hbfq.js";

import { $ln } from "./chunk-5brm0azz.js";

import { Ta } from "./chunk-pqzqmnjf.js";

import { Hpe } from "./chunk-0f42zdcd.js";

import { O } from "./chunk-1xnsr4dy.js";

var Ug = 1e6;

import { constants as m } from "fs";

function Bu() {
  return m.O_RDONLY | zRe();
}

function zRe() {
  if (O() === "windows") return 0;
  return m.O_NOFOLLOW | m.O_NONBLOCK;
}

var P_s = [ "aarch64-apple-darwin", "x86_64-apple-darwin", "aarch64-unknown-linux-musl", "x86_64-unknown-linux-musl" ];

function H(t, n) {
  let e = n === "arm64" ? "aarch64" : n === "x64" ? "x86_64" : void 0;
  if (e === void 0) return;
  switch (t) {
   case "macos":
    return `${e}-apple-darwin`;

   case "linux":
   case "wsl":
    return `${e}-unknown-linux-musl`;

   case "windows":
   case "unknown":
    return;
  }
}

var j_r = 268435456;

function W_r() {
  return H(O(), "x64");
}

function Xat(t, n) {
  if (t.endsWith(`-${n}`)) {
    let e = t.slice(0, -(n.length + 1));
    return $mt.test(e) ? e : void 0;
  }
  if (t.endsWith(`-${n}.exe`)) {
    let e = t.slice(0, -(n.length + 5));
    return $mt.test(e) ? `${e}.exe` : void 0;
  }
  return;
}

import { lstat as h, open as R, realpath as w } from "fs/promises";

import { join as c } from "path";

function z_r(t) {
  return t.length >= 2 && t[0] === 80 && t[1] === 75;
}

class u {
  texts=new Map;
  readingForCalls=new Map;
  lastReadForCalls=Promise.resolve(void 0);
}

class _ {
  syncPromise=null;
  firstSyncPromise=null;
  firstListDeferred=null;
  firstRoundSettled=!1;
  firstRoundEmitted=!1;
  resyncTimer=null;
  resyncRunRound=null;
  resyncArmed=null;
  stopAwaitingActivity=null;
  consecutiveFailedRounds=0;
  lostRowsRecheckMs=100;
  bucketGeneration=null;
  pendingDownloads=new Map;
  placeholders=new Map;
  listedSkills=new Map;
  listedOwnerships=new Map;
  listedSkillsAnswer="none_yet";
  listNeverStarted=!1;
  hostMountKinds=new Map;
  hostMountWorkOutstanding=null;
  hostMountWorkStartedAt=0;
  hostMountWorkIsCatalogs=!1;
  hostCatalog=new u;
  missingSkillResyncAt=-1 / 0;
  missingSkillResync=null;
  reset() {
    if (this.syncPromise = null, this.firstSyncPromise = null, this.firstListDeferred = null, 
    this.firstRoundEmitted = !1, this.firstRoundSettled = !1, Kdn(!1), Gdn(!1), this.resyncTimer) clearTimeout(this.resyncTimer), 
    this.resyncTimer = null;
    this.resyncRunRound = null, this.resyncArmed = null, this.stopAwaitingActivity?.(), 
    this.consecutiveFailedRounds = 0, this.lostRowsRecheckMs = 100, this.bucketGeneration = null, 
    this.listedSkills.clear(), this.listedOwnerships.clear(), this.listedSkillsAnswer = "none_yet", 
    this.listNeverStarted = !1, this.hostMountKinds.clear(), this.hostMountWorkOutstanding = null, 
    this.hostMountWorkStartedAt = 0, this.hostMountWorkIsCatalogs = !1, this.hostCatalog = new u, 
    this.pendingDownloads.clear(), this.placeholders.clear(), this.missingSkillResyncAt = -1 / 0, 
    this.missingSkillResync = null;
  }
}

var P = new K(() => new _);

function np() {
  return P.of(B().host);
}

var tQt = "/mnt/skills", f = {
  public: "anthropic",
  examples: "anthropic-example"
}, PPt = "public", M = 3e3, C = 33554432, N = 6e5, A = /^\d{4}-\d\d-\d\dT.*(?:Z|[+-]\d\d:\d\d)$/;

function rpo(t, n, e) {
  e.set(n.reason, (e.get(n.reason) ?? 0) + 1), X("info", "skills_sync_host_mount_miss", {
    kind: t,
    ...n
  });
}

function _Nn(t) {
  return Object.fromEntries(Array.from(t, ([n, e]) => [ `mount_miss_${n}`, e ]));
}

function v(t) {
  if (t.creator_type !== "anthropic" || t.id !== t.name || !Hpe(t.name)) return;
  if (t.source === f.public) return "public";
  return t.source === f.examples && t.is_public_provisioned === !0 ? "examples" : void 0;
}

function I_s(t) {
  let {hostMountKinds: n} = np();
  n.clear();
  for (let e of t) {
    let o = v(e);
    if (o !== void 0) n.set(e.id, o);
  }
}

function y() {
  return $ln() && zRe() !== 0;
}

function O_s(t) {
  let n = np().hostMountKinds.get(t.skillId);
  return n !== void 0 && y() && t.name === t.skillId && t.source === f[n] && t.requestedVersion === void 0 ? n : void 0;
}

async function M_s(t, n) {
  if (!y()) return null;
  let e = {
    deadline: performance.now() + M,
    spentMs: 0,
    waitedMs: 0
  }, o = await g(e, () => x(t)), i = Ta(1, (s, r, a) => g(e, () => I(s, r, a)));
  return {
    async readZip(s, r) {
      let a = "reason" in o ? o : o.get(s) ?? d, l = "reason" in a ? a : await i(c(tQt, s, `${r.name}.skill`), r.updatedAt, a.device);
      if ("zip" in l) return l.zip;
      rpo(s, l, n);
      return;
    },
    spentMs: () => Math.round(e.spentMs),
    waitedMs: () => Math.round(e.waitedMs)
  };
}

async function g(t, n) {
  let e = np();
  while (e.hostMountWorkOutstanding !== null && e.hostMountWorkIsCatalogs) {
    let r = e.hostMountWorkOutstanding, a = performance.now(), l = Math.min(t.deadline, e.hostMountWorkStartedAt + M) - a;
    if (l > 0) await We(r.catch(() => {}), l), t.waitedMs += performance.now() - a;
    if (e.hostMountWorkOutstanding === r) break;
  }
  let o = performance.now();
  if (e.hostMountWorkOutstanding !== null) return {
    reason: "earlier_work_outstanding"
  };
  if (o >= t.deadline) return {
    reason: "budget_spent"
  };
  let i = k(e, n, o, !1), s = await We(i, t.deadline - o);
  return t.spentMs += performance.now() - o, s ?? {
    reason: "timed_out"
  };
}

async function opo(t) {
  let n = np();
  while (n.hostMountWorkOutstanding !== null) {
    let e = n.hostMountWorkOutstanding;
    if (await e.catch(() => {}), n.hostMountWorkOutstanding === e) n.hostMountWorkOutstanding = null;
  }
  return k(n, t, performance.now(), !0);
}

function H_s() {
  let t = np();
  return t.hostMountWorkOutstanding !== null && performance.now() - t.hostMountWorkStartedAt >= M;
}

function k(t, n, e, o) {
  let i = n();
  t.hostMountWorkOutstanding = i, t.hostMountWorkStartedAt = e, t.hostMountWorkIsCatalogs = o;
  let s = () => {
    if (t.hostMountWorkOutstanding === i) t.hostMountWorkOutstanding = null;
  };
  return i.then(s, s), i;
}

var d = {
  reason: "not_a_mount"
};

async function x(t) {
  let n = await h(tQt).catch(p), e = "reason" in n || n.isDirectory() ? n : d, o = new Map;
  for (let i of t) {
    if ("reason" in e) {
      o.set(i, e);
      continue;
    }
    let s = await h(c(tQt, i)).catch(p);
    o.set(i, "reason" in s ? s : s.isDirectory() && s.dev !== e.dev ? {
      device: s.dev
    } : d);
  }
  return o;
}

function p(t) {
  let n = E(t);
  return n === "ENOENT" ? {
    reason: "no_mount"
  } : {
    reason: "probe_failed",
    code: n ?? "unknown"
  };
}

function I(t, n, e) {
  return T(t, e, C, async (o, i) => {
    let s = n !== null && A.test(n) ? Date.parse(n) : Number.NaN;
    if (Number.isNaN(s)) return {
      reason: "row_date_unreadable"
    };
    if (i.mtimeMs <= s + N) return {
      reason: "not_newer_than_row"
    };
    let r = await o.readFile();
    return z_r(r) ? {
      zip: r
    } : {
      reason: "not_zip"
    };
  });
}

async function spo(t) {
  return (await x(new Set([ t ]))).get(t) ?? d;
}

async function D_s() {
  let t = await spo(PPt), n = "reason" in t ? t : await w(c(tQt, PPt)).then(e => ({
    device: t.device,
    root: e
  }), p);
  if ("reason" in n) X("warn", "skill_host_catalog_not_read", n);
  return n;
}

async function L_s(t, n, e) {
  let o = c(t, n, "SKILL.md"), i = await S(o) ?? await ipo(o, e, Ug);
  return "reason" in i ? i : await S(o) ?? {
    text: i.text,
    filePath: o
  };
}

async function S(t) {
  try {
    return await w(t) === t ? void 0 : {
      reason: "file_is_link"
    };
  } catch (n) {
    return b(n);
  }
}

function ipo(t, n, e) {
  return T(t, n, e, async o => ({
    text: await o.readFile({
      encoding: "utf-8"
    })
  }));
}

async function T(t, n, e, o) {
  let i;
  try {
    i = await R(t, Bu());
    let s = await i.stat();
    if (s.dev !== n) return {
      reason: "file_on_other_device"
    };
    if (!s.isFile()) return {
      reason: "not_a_file"
    };
    if (s.size > e) return {
      reason: "too_large"
    };
    return await o(i, s);
  } catch (s) {
    return b(s);
  } finally {
    await (i?.close().catch(() => {}));
  }
}

function b(t) {
  let n = E(t);
  switch (n) {
   case "ENOENT":
    return {
      reason: "file_absent"
    };

   case "ELOOP":
    return {
      reason: "file_is_link"
    };

   default:
    return {
      reason: "read_failed",
      code: n ?? "unknown"
    };
  }
}

export { Ug, Bu, zRe, P_s, j_r, W_r, Xat, z_r, np, tQt, PPt, rpo, _Nn, I_s, O_s, M_s, opo, H_s, spo, D_s, L_s, ipo };
