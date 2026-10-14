// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { E, zr, ME } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Zs } from "./chunk-rgd61mm3.js";

import { O } from "./chunk-1xnsr4dy.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { Ne } from "./chunk-m8ez8fhk.js";

import { closeSync as N, constants as y, fstatSync as q, openSync as R, writeSync as A } from "fs";

var F = 4194304, Q = 25, L = Buffer.from("\x1b[0m"), s = new WeakMap, v = Ue(new Set, e => e.clear());

function D() {
  if (!process.stdout.isTTY) return {
    reason: "not_a_tty"
  };
  let e;
  switch (O()) {
   case "linux":
   case "wsl":
    e = "/proc/self/fd/1";
    break;

   case "macos":
    {
      let r = I();
      if (r === void 0) return {
        reason: "ttyname_unavailable"
      };
      e = r;
      break;
    }

   default:
    return {
      reason: "unsupported_platform"
    };
  }
  let n;
  try {
    n = R(e, y.O_WRONLY | y.O_NONBLOCK | y.O_NOCTTY | Zs);
  } catch (r) {
    return {
      reason: "open_failed",
      errno: E(r)
    };
  }
  let o = {
    reason: "not_same_tty"
  };
  try {
    let r = q(n), u = q(1);
    if (r.rdev === u.rdev && r.ino === u.ino) return {
      fd: n
    };
  } catch (r) {
    o = {
      reason: "fstat_failed",
      errno: E(r)
    };
  }
  try {
    N(n);
  } catch {}
  return o;
}

function B(e, n, o) {
  if (i("tengu_nonblocking_stdout", {
    result: c(e),
    reason: n === void 0 ? void 0 : c(n),
    errno: o
  }), e === "installed") g("terminal_nonblocking_stdout"); else if (n !== "not_a_tty" && n !== "unsupported_platform") f("terminal_nonblocking_stdout", n ?? "write_failed", o === void 0 ? void 0 : {
    errno: o
  });
}

function I() {
  try {
    let e = Ne("bun:ffi"), n = e.dlopen("/usr/lib/libSystem.B.dylib", {
      ttyname_r: {
        args: [ "i32", "ptr", "u64" ],
        returns: "i32"
      }
    });
    try {
      let o = new Uint8Array(256);
      if (n.symbols.ttyname_r(1, o, o.length) !== 0) return;
      return (new TextDecoder).decode(o.subarray(0, o.indexOf(0)));
    } finally {
      n.close();
    }
  } catch {
    return;
  }
}

function K5o(e, n = D) {
  let o = s.get(process.stdout);
  if (o?.installedWrite !== void 0) return o.onEpisodeEnd = e, w(o);
  let r = n();
  if (r.fd === void 0) {
    if (t(`nonBlockingStdout: not installed (${r.reason}${r.errno ? `, ${r.errno}` : ""})`), 
    !v.has(r.reason)) v.add(r.reason), B("skipped", r.reason, ME(r.errno));
    return null;
  }
  let u = {
    fd: r.fd,
    originalWrite: process.stdout.write,
    installedWrite: void 0,
    queue: [],
    queuedBytes: 0,
    dropping: !1,
    timer: void 0,
    retryMs: 0,
    episode: {
      startedMs: 0,
      peakQueuedBytes: 0,
      droppedBytes: 0
    },
    onEpisodeEnd: e,
    onExit: () => a(u)
  }, h = (l, p, M) => {
    let b = typeof p === "string" ? p : void 0, _ = typeof p === "function" ? p : M;
    if (u.installedWrite === void 0) return u.originalWrite.call(process.stdout, l, b, _);
    return U(u, typeof l === "string" ? Buffer.from(l, b) : Buffer.from(l)), _?.(), 
    !0;
  };
  return u.installedWrite = h, process.stdout.write = h, s.set(process.stdout, u), 
  process.on("exit", u.onExit), t("nonBlockingStdout: active"), B("installed"), w(u);
}

function w(e) {
  return {
    flush: () => a(e),
    restore: () => k(e),
    isActive: () => e.installedWrite !== void 0,
    queuedBytes: () => e.queuedBytes
  };
}

function q5o({envOverride: e, isAnt: n, remoteFlag: o}) {
  return e ?? (n || o());
}

function FSn() {
  return s.get(process.stdout)?.installedWrite !== void 0;
}

function USn() {
  let e = s.get(process.stdout);
  if (e?.installedWrite !== void 0) k(e);
}

function BSn() {
  let e = s.get(process.stdout);
  if (e?.installedWrite !== void 0) a(e);
}

function x(e, n) {
  try {
    return A(e, n);
  } catch (o) {
    if (E(o) === "EAGAIN") return 0;
    throw o;
  }
}

function U(e, n) {
  if (n.length === 0) return;
  if (e.queue.length === 0) {
    let o;
    try {
      o = x(e.fd, n);
    } catch (r) {
      S(e, r), process.stdout.write(n);
      return;
    }
    if (o === n.length) return;
    e.episode = {
      startedMs: performance.now(),
      peakQueuedBytes: 0,
      droppedBytes: 0
    }, m(e, n.subarray(o)), W(e, o > 0);
    return;
  }
  if (e.dropping) {
    e.episode.droppedBytes += n.length;
    return;
  }
  if (e.queuedBytes + n.length > F) {
    e.episode.droppedBytes += e.queuedBytes + n.length, e.queue = [], e.queuedBytes = 0, 
    e.dropping = !0, t(`nonBlockingStdout: terminal stopped reading; dropped ${e.episode.droppedBytes} queued bytes, will repaint when it resumes`, {
      level: "warn"
    }), m(e, L);
    return;
  }
  m(e, n);
}

function m(e, n) {
  if (e.queue.push(n), e.queuedBytes += n.length, e.queuedBytes > e.episode.peakQueuedBytes) e.episode.peakQueuedBytes = e.queuedBytes;
}

function W(e, n) {
  e.retryMs = n ? 0 : Math.min(Math.max(1, e.retryMs * 2), Q), e.timer = setTimeout(Y, e.retryMs, e), 
  e.timer.unref();
}

function Y(e) {
  e.timer = void 0;
  let n = !1;
  try {
    while (e.queue.length > 0) {
      if (n && e.queue.length > 1) e.queue = [ Buffer.concat(e.queue, e.queuedBytes) ];
      let o = e.queue[0], r = x(e.fd, o);
      if (r === 0) {
        W(e, n);
        return;
      }
      if (n = !0, e.queuedBytes -= r, r < o.length) e.queue[0] = o.subarray(r); else e.queue.shift();
    }
  } catch (o) {
    S(e, o);
    return;
  }
  T(e, "drain");
}

function T(e, n) {
  e.dropping = !1, e.retryMs = 0;
  try {
    e.onEpisodeEnd({
      durationMs: Math.round(performance.now() - e.episode.startedMs),
      peakQueuedBytes: e.episode.peakQueuedBytes,
      droppedBytes: e.episode.droppedBytes,
      endedBy: n
    });
  } catch (o) {
    d(o);
  }
}

function a(e) {
  if (e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  if (e.queue.length === 0) return;
  let n = e.queue;
  e.queue = [], e.queuedBytes = 0;
  try {
    for (let o of n) e.originalWrite.call(process.stdout, o);
  } catch (o) {
    S(e, o);
    return;
  }
  T(e, "flush");
}

function S(e, n) {
  t(`nonBlockingStdout: uninstalling (${n})`), e.queue = [], e.queuedBytes = 0, k(e), 
  B("abandoned", void 0, zr(n));
}

function k(e) {
  if (e.installedWrite === void 0) return;
  if (process.stdout.write === e.installedWrite) process.stdout.write = e.originalWrite;
  e.installedWrite = void 0, s.delete(process.stdout), process.off("exit", e.onExit);
  try {
    N(e.fd);
  } catch {}
  a(e);
}

export { K5o, q5o, FSn, USn, BSn };
