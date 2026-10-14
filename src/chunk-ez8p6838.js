// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { z } from "./chunk-bmq0vae0.js";

import { _, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { I, uD } from "./chunk-5wbhf1bk.js";

import { gn } from "./chunk-yxennhe9.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { W5 } from "./chunk-r2h53bm2.js";

import { Ev, xie } from "./chunk-znhtg8e4.js";

import { mt } from "./chunk-j90se18b.js";

import { o, Gp, u } from "./chunk-cvcg6n1z.js";

import { join as d } from "path";

function lzt() {
  return d(Ee(), "daemon.status.json");
}

function dzt() {
  return Fe.state("daemon-status");
}

async function ZGr(s, n) {
  let r = {
    supervisorPid: process.pid,
    supervisorProcStart: xie(),
    writtenAt: Date.now(),
    workers: s
  };
  if (z() && n !== void 0) try {
    let e = await n.write(dzt(), _(r, null, 2), {
      mode: 438 & ~process.umask()
    });
    if (!e.ok) t(`writeDaemonStatus: ${e.error.code}`);
    return e.ok;
  } catch (e) {
    return t(`writeDaemonStatus: ${l(e)}`), !1;
  }
  try {
    return await gn().atomicWrite(lzt(), _(r, null, 2)), !0;
  } catch (e) {
    return t(`writeDaemonStatus: ${l(e)}`), !1;
  }
}

async function e2r(s) {
  if (z() && s !== void 0) {
    try {
      let n = await s.delete(dzt());
      if (!n.ok) t(`removeDaemonStatus: ${n.error.code}`);
    } catch (n) {
      t(`removeDaemonStatus: ${l(n)}`);
    }
    return;
  }
  try {
    await gn().delete(lzt());
  } catch {}
}

async function s7n(s) {
  let n;
  if (z() && s !== void 0) {
    let i;
    try {
      i = await s.readText([ dzt() ]);
    } catch {
      return null;
    }
    if (!i.ok) return null;
    let c = i.value.items[0];
    if (!c.found) return null;
    n = c.value;
  } else try {
    n = await gn().read(lzt());
  } catch {
    return null;
  }
  let r = mt(n, !1);
  if (!r || typeof r !== "object") return null;
  let e = r;
  if (typeof e.supervisorPid !== "number" || typeof e.workers !== "object" || e.workers === null) return null;
  try {
    process.kill(e.supervisorPid, 0);
  } catch {
    return null;
  }
  let a = typeof e.supervisorProcStart === "string" ? e.supervisorProcStart : void 0;
  if (!await Ev(e.supervisorPid, a)) return null;
  return r;
}

var m = 4096, p = 200, i7n = 64, f = 32;

function S(s) {
  let n = [], r = u({
    servedFolder: u({
      dir: o().min(1).max(m),
      sessions: Gp().positive().max(i7n)
    })
  });
  for (let e of Object.values(s?.workers ?? {})) {
    let a = r.safeParse(e);
    if (a.success) n.push(a.data.servedFolder);
  }
  return n;
}

async function t2r(s, n) {
  try {
    let r = await s7n(n);
    return r?.supervisorPid === s ? S(r) : [];
  } catch (r) {
    t(`readServedFolders: ${l(r)}`);
  }
  return [];
}

function n2r(s) {
  let r = s.slice(0, f).map(({dir: a, sessions: i}) => `serving tools: ${i} ${I(i, "cloud session")} in ${W5(uD(a), p)}`), e = s.length - r.length;
  return e > 0 ? r.concat(`serving tools: and ${e} more ${I(e, "folder")}`) : r;
}

export { lzt, dzt, ZGr, e2r, s7n, i7n, t2r, n2r };
