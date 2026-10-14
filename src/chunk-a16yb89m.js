// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { OEe } from "./chunk-2v9tfgc3.js";

import { J, Ht } from "./chunk-nvtwm272.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { lstatSync as S, readFileSync as b, rmSync as P, unlinkSync as _, writeFileSync as h } from "fs";

import { join as c } from "path";

var p = "exit-cause", sdn = "session_in_use", y = "exit-detail", k = 200;

function w_(e, t) {
  let n = t ?? process.env.CLAUDE_JOB_DIR;
  if (!n) return;
  try {
    h(c(n, p), e);
  } catch {}
}

function Z8s(e, t, n) {
  let r = n ?? process.env.CLAUDE_JOB_DIR, o = t.trim();
  if (!r || !o) return;
  try {
    h(c(r, y), `${e}\n${o.slice(0, k)}`);
  } catch {}
}

function pDo(e) {
  return E(c(e, p));
}

function fDo(e, t) {
  let n = E(c(e, y));
  if (!n) return;
  let r = n.indexOf(`\n`);
  return r !== -1 && n.slice(0, r) === t ? n.slice(r + 1) : void 0;
}

function E(e) {
  try {
    let t = S(e);
    if (!t.isFile() || t.size > 65536) {
      try {
        P(e, {
          recursive: !0,
          force: !0
        });
      } catch {}
      return;
    }
    let n = b(e, "utf8");
    return _(e), n;
  } catch {
    return;
  }
}

var v = new Set([ "EPIPE", "EIO", "ENXIO", "EBADF" ]), w = new Set([ "EISDIR", "ENOTCONN", "ECONNRESET" ]);

function O$t(e) {
  let t = e !== null && typeof e === "object" && "code" in e && typeof e.code === "string" ? e.code : void 0;
  return t !== void 0 && (w.has(t) || v.has(t));
}

function Cme(e, t) {
  e.on("error", n => {
    if (n.code !== void 0 && v.has(n.code)) {
      try {
        e.destroy?.();
      } catch {}
      t?.(n.code);
    }
  });
}

function mDo(e) {
  Cme(process.stdin, t => e("stdin", t)), Cme(process.stdout, t => e("stdout", t)), 
  process.stdout.on("error", () => {
    i.markErrored();
  }), Cme(process.stderr), process.stderr.on("error", () => {
    g.giveUpOnUnflushed();
  });
}

function C(e, t, n) {
  if (e.destroyed || e.writableEnded) return "dropped";
  return e.write(t, n) === !1 ? "backed-up" : "accepted";
}

class a {
  everWritten=!1;
  drainPromise=void 0;
  bytesQueued=0;
  bytesFlushed=0;
  notifyFlushProgress=void 0;
  notifyExternallyClocked=void 0;
  externallyClockedPromise=void 0;
  externallyClocked=!1;
  errored=!1;
  flushConfirmedPromise=void 0;
  flushCloseListener=void 0;
  markEverWritten() {
    this.everWritten = !0;
  }
  recordQueued(e) {
    this.bytesQueued += e;
  }
  recordFlushed(e) {
    this.bytesFlushed += e, this.notifyFlushProgress?.();
  }
  markErrored() {
    this.errored = !0, this.notifyFlushProgress?.();
  }
  outstandingBytes() {
    return process.stdout.destroyed || this.errored ? 0 : this.bytesQueued - this.bytesFlushed;
  }
  endStdoutOnce() {
    if (this.drainPromise === void 0) {
      let e = process.stdout;
      if (e.isTTY || e.destroyed || e.writableEnded || !this.everWritten) return;
      this.drainPromise = new Promise(t => e.end(t));
    }
    return this.drainPromise;
  }
  fullyFlushed() {
    if (this.flushConfirmedPromise === void 0) this.flushConfirmedPromise = new Promise(e => {
      let t = () => {
        if (this.outstandingBytes() <= 0) this.notifyFlushProgress = void 0, e();
      };
      this.notifyFlushProgress = t, this.flushCloseListener = t, process.stdout.once("close", t), 
      t();
    });
    return this.flushConfirmedPromise;
  }
  isExternallyClocked() {
    return this.externallyClocked;
  }
  ensureExternallyClockedPromise() {
    return this.externallyClockedPromise ??= new Promise(e => {
      this.notifyExternallyClocked = e;
    });
  }
  markExternallyClocked() {
    this.externallyClocked = !0, this.ensureExternallyClockedPromise(), this.notifyExternallyClocked?.(), 
    this.notifyExternallyClocked = void 0;
  }
  reset() {
    if (this.flushCloseListener !== void 0) process.stdout.removeListener("close", this.flushCloseListener);
    Object.assign(this, new a);
  }
}

var i = new a;

function Tr(e) {
  i.markEverWritten();
  let t = Buffer.byteLength(e);
  if (C(process.stdout, e, () => {
    i.recordFlushed(t);
  }) !== "dropped") i.recordQueued(t);
}

async function M$t(e = 2e3, {scaleBudgetToQueue: t = !0} = {}) {
  let n = i.endStdoutOnce();
  if (n === void 0) return;
  let r = Promise.all([ n, i.fullyFlushed() ]);
  await Ht(t ? Promise.race([ r, D(e) ]) : r, t ? RHr(e) : e, "stdout drain timeout (exit)").catch(() => {});
}

function Yee() {
  i.markExternallyClocked();
}

function gDo() {
  return i.isExternallyClocked();
}

function D(e) {
  return i.ensureExternallyClockedPromise().then(() => J(e));
}

var T = 262144, A = 3e4;

function CHr() {
  return i.outstandingBytes();
}

function RHr(e = 2e3) {
  return Math.min(A, Math.max(e, Math.ceil(CHr() * 1e3 / T)));
}

var m = 1048576, O = 1e4, I = OEe(e => e());

class f {
  unflushed={
    length: 0,
    since: 0
  };
  droppedCount=0;
  write(e, t) {
    let n = this.unflushed;
    if (t && n.length >= m && (this.droppedCount > 0 || Date.now() - n.since >= O)) {
      this.droppedCount++;
      return;
    }
    let r = "writing", o = () => {
      let d = r === "unflushed";
      if (r = "flushed", d) n.length -= e.length, this.reportDropped();
    };
    if (I(() => C(process.stderr, e, o)) === "backed-up" && r === "writing") {
      if (r = "unflushed", n.length === 0) n.since = Date.now();
      n.length += e.length;
    }
  }
  giveUpOnUnflushed() {
    this.unflushed = {
      length: 0,
      since: 0
    }, this.reportDropped();
  }
  reset() {
    Object.assign(this, new f);
  }
  reportDropped() {
    if (this.droppedCount > 0 && this.unflushed.length < m) {
      let e = this.droppedCount;
      this.droppedCount = 0, this.write(`[stderr messages dropped before this line: ${e}. Whatever reads this stderr had not caught up for over 10 s and 1 MiB of output.]\n`, !1);
    }
  }
}

var g = Ue(new f, e => e.reset());

function Fj(e, {mayDrop: t = !1} = {}) {
  g.write(e, t);
}

function bJe(e) {
  console.error(e), w_("exit_with_error"), process.exit(1);
}

function idn(e, t) {
  let n = e;
  if (n.readableEnded || n.destroyed) return Promise.resolve(!1);
  return new Promise(r => {
    let o = u => {
      clearTimeout(l), e.off("end", s), e.off("close", s), e.off("data", d), r(u);
    }, s = () => o(!1), d = () => {
      if (clearTimeout(l), n.readableEnded || n.destroyed) o(!1);
    }, l = setTimeout(o, t, !0);
    e.once("end", s), e.once("close", s), e.once("data", d);
  });
}

async function* adn(e) {
  if (e.readableEnded || e.destroyed) return;
  let t = Symbol("stream-closed"), n = !1, r = null, o = () => {
    n = !0, r?.();
  };
  e.once("close", o);
  let s = e[Symbol.asyncIterator]();
  try {
    while (!n) {
      let d = s.next();
      d.catch(() => {});
      let l = new Promise(x => {
        r = () => x(t);
      }), u = await Promise.race([ d, l ]);
      if (r = null, u === t || u.done) return;
      yield String(u.value);
    }
  } finally {
    e.off("close", o), s.return?.().catch(() => {});
  }
}

export { sdn, w_, Z8s, pDo, fDo, O$t, Cme, mDo, Tr, M$t, Yee, gDo, CHr, RHr, Fj, bJe, idn, adn };
