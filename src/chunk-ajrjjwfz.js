// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { x, E, W } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { mY } from "./chunk-sqb9meyh.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { _, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { iL, OG } from "./chunk-30n0xq4e.js";

import { gh, K0, Ul } from "./chunk-znhtg8e4.js";

import { mt } from "./chunk-j90se18b.js";

async function czt(e, r = {}) {
  try {
    process.kill(e, "SIGTERM");
  } catch (n) {
    if (E(n) === "EPERM") return "eperm";
    return "exited";
  }
  let o = Date.now() + (r.gracefulMs ?? 2e3);
  while (Date.now() < o) {
    try {
      process.kill(e, 0);
    } catch {
      return "exited";
    }
    await J(50);
  }
  return "timed-out";
}

import { lstat as l, readFile as f, rename as m, rm as p, unlink as d } from "fs/promises";

import { uptime as g } from "os";

import { join as w } from "path";

var b = "daemon.lock";

function xM() {
  return w(Ee(), b);
}

function xGe() {
  return Fe.state("daemon-lock");
}

function L(e) {
  return e === "EISDIR" || e === "ENXIO";
}

class k {
  logged=!1;
  markLogged() {
    if (this.logged) return !1;
    return this.logged = !0, !0;
  }
}

var h = new K(() => new k);

function D() {
  return h.of(B().host);
}

async function S() {
  let e = await l(xM()).catch(() => {});
  return e !== void 0 && e.isSymbolicLink();
}

async function y(e) {
  let r = xM(), o = await l(r).catch(() => {});
  if (o === void 0 || o.isFile()) return;
  let n = o.isDirectory() ? "directory" : o.isFIFO() ? "fifo" : o.isSocket() ? "socket" : o.isSymbolicLink() ? "symlink" : "other non-regular node";
  if (D().markLogged()) t(`[DaemonLock] ${n} at the lock path (${e}) \u2014 removing it as the legacy path does`, {
    level: "warn"
  });
  await p(r, {
    recursive: !0,
    force: !0
  }).catch(() => {});
}

var I = 65536;

async function u4o(e, r) {
  if (z() && r !== void 0) {
    let o = () => r.write(xGe(), _(e, null, 2), {
      precondition: {
        type: "ifAbsent"
      },
      mode: 438 & ~process.umask()
    }), n = await o();
    for (let i of [ 0, 1 ]) {
      if (n.ok) return !0;
      if (n.error.code === "AlreadyExists") return !1;
      let a = "telemetryCode" in n.error ? n.error.telemetryCode : void 0;
      if (n.error.code !== "Failed" || !mY(a)) break;
      if (a === "ELOOP") {
        if (await S()) return !1;
        break;
      }
      if (i === 1) break;
      await y(a), n = await o();
    }
    if (n.ok) return !0;
    throw new x(`[DaemonLock] Failed to acquire daemon lock: ${n.error.code}${"telemetryCode" in n.error && n.error.telemetryCode ? ` (${n.error.telemetryCode})` : ""}`, "[DaemonLock] v5 acquire write failed");
  }
  try {
    return await OG(xM(), _(e, null, 2)), !0;
  } catch (o) {
    if (E(o) === "EEXIST") return !1;
    throw o;
  }
}

async function p4o(e, r) {
  let o = await qq(r);
  if (!o || o.pid !== e.pid || o.startedAt !== e.startedAt) return;
  await a7n({
    ...o,
    bgDisabled: !0
  }, r);
}

async function qq(e) {
  let r;
  if (e) {
    let n = await e.read([ xGe() ]);
    if (!n.ok) {
      if (!(n.error.code === "Failed" && (n.error.telemetryCode === "ENXIO" || n.error.telemetryCode === "EFBIG" || n.error.telemetryCode === "ELOOP" || n.error.telemetryCode === "ENAMETOOLONG"))) throw new x(`[DaemonLock] Failed to read daemon lock: ${n.error.code}${"telemetryCode" in n.error && n.error.telemetryCode ? ` (${n.error.telemetryCode})` : ""}`, "[DaemonLock] v5 lock read failed");
      let c = await e.delete(xGe());
      if (!c.ok && c.error.code === "Failed") {
        let u = "telemetryCode" in c.error ? c.error.telemetryCode : void 0;
        if (L(u)) await y(u);
      }
      return null;
    }
    let i = n.value.items[0];
    if (!i.found) return null;
    if (i.totalBytes > I) return await e.delete(xGe()), null;
    r = Buffer.from(i.value).toString("utf8");
    let a = mt(r, !1);
    if (a && typeof a === "object") {
      let s = a;
      if (typeof s.pid === "number" && typeof s.version === "string") return a;
    }
    return null;
  }
  try {
    let n = await l(xM());
    if (!n.isFile() || n.size > 65536) return await p(xM(), {
      recursive: !0,
      force: !0
    }).catch(() => {}), null;
    r = await f(xM(), "utf8");
  } catch (n) {
    if (W(n)) return null;
    throw n;
  }
  let o = mt(r, !1);
  if (o && typeof o === "object") {
    let n = o;
    if (typeof n.pid === "number" && typeof n.version === "string") return o;
  }
  return null;
}

async function a7n(e, r) {
  if (r) {
    let i = await r.write(xGe(), _(e, null, 2), {
      mode: 438 & ~process.umask()
    });
    if (!i.ok) {
      let s = "telemetryCode" in i.error ? i.error.telemetryCode : void 0;
      if (s === "LockContended" || s === "LockSuspect") {
        let c = await qq(r);
        if (c?.pid !== e.pid || c?.startedAt !== e.startedAt) return !1;
        i = await r.write(xGe(), _(e, null, 2), {
          mode: 438 & ~process.umask()
        });
      }
      if (!i.ok) throw new x(`[DaemonLock] Failed to replace daemon lock: ${i.error.code}${"telemetryCode" in i.error && i.error.telemetryCode ? ` (${i.error.telemetryCode})` : ""}`, "[DaemonLock] v5 replace write failed");
    }
    let a = await qq(r);
    return a?.pid === e.pid && a?.startedAt === e.startedAt;
  }
  let o = await iL(xM(), _(e, null, 2));
  try {
    await m(o, xM());
  } catch (i) {
    let a = E(i);
    if (a === "EEXIST" || a === "EPERM") {
      await d(xM()).catch(() => {});
      try {
        await m(o, xM());
      } catch (s) {
        await d(o).catch(() => {});
        let c = E(s);
        if (c === "EEXIST" || c === "EPERM") return !1;
        throw s;
      }
    } else throw await d(o).catch(() => {}), i;
  }
  let n = await qq(r);
  return n?.pid === e.pid && n?.startedAt === e.startedAt;
}

async function f4o(e) {
  if (e) {
    let r = await e.delete(xGe());
    if (!r.ok) throw new x(`[DaemonLock] Failed to remove daemon lock: ${r.error.code}${"telemetryCode" in r.error && r.error.telemetryCode ? ` (${r.error.telemetryCode})` : ""}`, "[DaemonLock] v5 lock delete failed");
    return;
  }
  try {
    await d(xM());
  } catch (r) {
    if (!W(r)) throw r;
  }
}

async function E_n(e) {
  let r;
  try {
    r = await f(`/proc/${e}/cmdline`, "utf8");
  } catch {
    return !0;
  }
  let o = r.split("\0");
  return o[0] === "claude daemon" || o.slice(1, 4).includes("daemon");
}

var JZe = 2, l7n = 250;

async function uzt(e, r, o) {
  if (r === void 0) return !0;
  for (let n = 0; n < o; n++) {
    if (n > 0) await J(l7n);
    let i = await Ul(e, {
      skipCache: n > 0
    });
    if (i !== void 0) return i === r;
  }
  return !1;
}

var C = 12e4;

function v(e, r = Date.now(), o = g()) {
  return e.startedAt < r - o * 1e3 - C;
}

async function k_n(e) {
  let r = K0(e);
  if (r !== void 0) {
    let o = await gh(e.pid, r);
    if (o === !0) return null;
    if (o === !1) return "pid_recycled";
  }
  return v(e) ? "predates_boot" : null;
}

function oSt(e) {
  return K0(e) !== void 0;
}

function m4o() {
  return `Stop it with \`claude daemon stop --any\` (a graceful, socket-based stop); if nothing is running at that pid, delete ${xM()}`;
}

async function Kw(e = 1, r) {
  let o = await qq(r);
  if (!o) return null;
  try {
    process.kill(o.pid, 0);
  } catch {
    return null;
  }
  if (!await E_n(o.pid)) return null;
  if (!await uzt(o.pid, K0(o), e)) return null;
  return o;
}

async function pzt(e) {
  let r = await Kw(1, e).catch(() => null);
  if (!r) return {
    kind: "none"
  };
  switch (r.origin) {
   case "service":
    return {
      kind: "service",
      lock: r
    };

   case "foreground":
    return {
      kind: "foreground",
      lock: r
    };

   case "transient":
   case void 0:
    {
      if (!oSt(r)) return {
        kind: "not-stopped",
        pid: r.pid,
        outcome: "unverified"
      };
      let o = await czt(r.pid);
      return o === "exited" ? {
        kind: "stopped",
        pid: r.pid
      } : {
        kind: "not-stopped",
        pid: r.pid,
        outcome: o
      };
    }

   default:
    return r.origin, {
      kind: "unknown-origin",
      lock: r
    };
  }
}

function THe(e) {
  switch (e.outcome) {
   case "eperm":
    return `the daemon holding the lock (pid ${e.pid}) is owned by another user and cannot be signalled from this session`;

   case "unverified":
    return `pid ${e.pid} is holding the daemon lock but could not be verified as the daemon, so it was not signalled`;

   case "timed-out":
    return `the daemon holding the lock (pid ${e.pid}) was asked to stop but has not exited yet`;
  }
}

function T_n(e) {
  return `a background daemon with an unrecognized origin (pid ${e}) holds the daemon lock \u2014 it may have been started by a newer Claude Code, so it was left untouched`;
}

async function g4o(e, r) {
  let o = await Kw(1, r).catch(() => null);
  return !!o && o.version !== e;
}

export { czt, xM, xGe, u4o, p4o, qq, a7n, f4o, E_n, JZe, l7n, uzt, k_n, oSt, m4o, Kw, pzt, THe, T_n, g4o };
