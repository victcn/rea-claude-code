// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l, E } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { k$, Do, t } from "./chunk-kawq2919.js";

import { uD } from "./chunk-5wbhf1bk.js";

import { yA, gn } from "./chunk-yxennhe9.js";

import { W5 } from "./chunk-r2h53bm2.js";

import { Xf, YBe, gh, d_, Ul } from "./chunk-znhtg8e4.js";

import { p } from "./chunk-jkzenvsk.js";

import { ufe, dA } from "./chunk-1tdw23h1.js";

import { i1 } from "./chunk-sqb9meyh.js";

import { Aa } from "./chunk-sre9xcbd.js";

import { o, v, Gp, u, A } from "./chunk-cvcg6n1z.js";

import { O } from "./chunk-1xnsr4dy.js";

import { N } from "./chunk-hmqkrrtz.js";

import { join as y } from "path";

var r1r = /^[A-Za-z0-9]{1,64}$/, R = /^background-[A-Za-z0-9]{1,64}\.jsonl$/, S = 80, _ = 64, B = 8192, L = 256, w = 32, z = 250, C = p(() => u({
  v: A(1),
  id: o().regex(r1r),
  owner: Gp().positive().max(2147483647),
  owner_start: o().min(1).max(64).optional(),
  pid: Gp().positive().max(2147483647).optional(),
  pid_start: o().min(1).max(64).optional(),
  pids_in: o().min(1).max(1024).optional(),
  started_at: v().nonnegative(),
  command: o().max(4 * S),
  caller: o().max(4 * _),
  folder: o().min(1).max(4096)
}));

async function o1r(e) {
  if (!r1r.test(e.id)) return;
  try {
    let n = {
      v: 1,
      id: e.id,
      owner: process.pid,
      owner_start: await d_(),
      pid: e.pid,
      pid_start: e.pid === void 0 ? void 0 : await Ul(e.pid, {
        skipCache: !0
      }),
      pids_in: await P(),
      started_at: Date.now(),
      command: d(e.command, S),
      caller: d(e.caller, _),
      folder: e.folder
    };
    await gn().mkdir(i1(), 448), await gn().writeExclusive(m(e.id), k$(n), 384), await Jzo();
  } catch (n) {
    t(`[remote-tools] background command record not written: ${l(n)}`, {
      level: "warn"
    });
  }
}

async function dXn(e) {
  await f(c(e)), await f(m(e));
}

function cXn(e) {
  return f(c(e));
}

async function Jzo() {
  let e = [];
  try {
    let n = await gn().list(i1());
    for (let i of n.filter(r => R.test(r)).slice(0, L)) {
      let r = await n1s(i.slice(11, -6));
      if (r !== void 0 && r !== "ended") e.push(r);
    }
  } catch (n) {
    t(`served background records: ${l(n)}`);
  }
  return e.sort((n, i) => n.folder.localeCompare(i.folder) || n.caller.localeCompare(i.caller) || n.started_at - i.started_at || n.id.localeCompare(i.id));
}

async function n1s(e) {
  if (!r1r.test(e)) return;
  try {
    let n = await gn().readTail(m(e), B, {
      noFollow: !0
    }), i = C().safeParse(Do(n.toString("utf8").trim()));
    if (!i.success || i.data.id !== e) return;
    let r = i.data, a = r.owner === process.pid && r.owner_start !== void 0 && r.owner_start === await d_() || await k(r.owner, r.owner_start);
    if (a || await k(r.pid, r.pid_start)) return {
      ...r,
      ownerGone: !a
    };
    if (await D(r)) return await dXn(e), "ended";
  } catch {}
  return;
}

async function wqs(e) {
  return N(await Jzo(), n => !n.ownerGone && e.includes(n.folder));
}

async function vqs(e, n = 1e4) {
  let i = gn();
  try {
    await i.writeExclusive(c(e), `{}\n`, 384);
  } catch (a) {
    if (E(a) !== "EEXIST") return "not_asked";
  }
  let r = Date.now() + n;
  while (Date.now() < r) if (await J(z), await i.lstat(m(e)).catch(() => null) === void 0) return await cXn(e), 
  "stopped";
  return await f(c(e)) ? "unanswered" : "pending";
}

function Eqs(e, {now: n, stopHint: i}) {
  if (e.length === 0) return [];
  let r = [ "background commands started by cloud sessions:" ], a;
  for (let s of e.slice(0, w)) {
    let g = `  in ${d(s.folder, 200)}, cloud session ${d(s.caller, _ + 1)}:`;
    if (g !== a) a = g, r.push(g);
    let b = s.pid === void 0 ? "pid unknown" : `pid ${s.pid}`, x = yA(Math.max(0, n - s.started_at));
    r.push(`    ${s.id}  ${b}  running ${x}  ${d(s.command, S + 1)}${s.ownerGone ? "  (its serving process is gone: nothing here will stop it)" : ""}`);
  }
  if (e.length > w) r.push(`  and ${e.length - w} more`);
  if (i) r.push("  stop one: claude daemon remote-control stop-shell <id>");
  return r;
}

function m(e) {
  return y(i1(), `background-${e}.jsonl`);
}

function c(e) {
  return y(i1(), `background-${e}.stop.jsonl`);
}

async function k(e, n) {
  return e !== void 0 && Aa(e) && (n === void 0 || await gh(e, n) !== !1);
}

async function D(e) {
  if (e.pids_in === void 0 || e.pids_in !== await P() || !await YBe() || !await h(e.owner, e.owner_start)) return !1;
  let {pid: n} = e;
  if (n === void 0 || !await h(n, e.pid_start)) return !1;
  if (!Xf(n) || O() === "windows") return !0;
  try {
    return process.kill(-n, 0), !1;
  } catch (i) {
    return E(i) === "ESRCH";
  }
}

async function h(e, n) {
  return Xf(e) || n !== void 0 && await gh(e, n) === !1;
}

async function P() {
  try {
    return `${await dA()} ${ufe()}`;
  } catch {
    return;
  }
}

async function f(e) {
  try {
    return await gn().delete(e), !0;
  } catch {
    return !1;
  }
}

function d(e, n) {
  return W5(uD(e), n);
}

export { r1r, o1r, dXn, cXn, Jzo, n1s, wqs, vqs, Eqs };
