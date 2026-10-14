// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { l, W } from "./chunk-b0z4bv3v.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { gn } from "./chunk-yxennhe9.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { bs } from "./chunk-zzhmvqjt.js";

import { _fs } from "./chunk-thbe2a3e.js";

import { yt } from "./chunk-9zhz923g.js";

import { join as A } from "path";

var y = "active-time.json";

var w = 31536e6, m = 10;

function d() {
  return {
    version: 1,
    windows: []
  };
}

function f() {
  return A(Ee(), y);
}

function g() {
  return Fe.state("active-time-ledger");
}

async function M(e) {
  let i;
  if (z() && e !== void 0) {
    let r = await e.readText([ g() ]);
    if (!r.ok) throw t(`Failed to read active-time ledger: ${yt(r.error)}`), Error("active-time ledger read failed");
    let n = r.value.items[0];
    if (!n.found) return d();
    i = n.value;
  } else try {
    i = await gn().read(f());
  } catch (r) {
    if (W(r)) return d();
    throw t(`Failed to read active-time ledger: ${l(r)}`), r;
  }
  try {
    let r = Y(i);
    if (r.version !== 1 || !Array.isArray(r.windows)) return d();
    return {
      version: 1,
      windows: r.windows.filter(s => typeof s?.start === "number" && typeof s?.end === "number" && typeof s?.userSeconds === "number" && s.end >= s.start)
    };
  } catch {
    return d();
  }
}

class p {
  pendingSeconds=0;
  activeStretch=null;
  cachedBreakThresholdMs=m * 6e4;
  flushTimer=null;
  cleanupHandle=null;
  flushInFlight=null;
  #t=void 0;
  noteUserActivity(e, i) {
    if (e <= 0) return;
    if (this.activeStretch === null || i - this.activeStretch.lastActivityMs >= this.cachedBreakThresholdMs) this.activeStretch = {
      windowStartMs: i - e * 1e3,
      lastActivityMs: i
    }; else this.activeStretch.lastActivityMs = i;
    this.pendingSeconds += e, this.ensureFlushTimer();
  }
  getCurrentContinuousUse(e) {
    if (this.activeStretch === null) return null;
    if (e - this.activeStretch.lastActivityMs >= this.cachedBreakThresholdMs) return null;
    return {
      startMs: this.activeStretch.windowStartMs,
      durationMs: Math.max(0, e - this.activeStretch.windowStartMs)
    };
  }
  armStorage(e) {
    this.#t ??= e;
  }
  flush(e, i) {
    if (this.flushInFlight) return this.flushInFlight;
    return this.flushInFlight = this.doFlush(e, i).finally(() => {
      this.flushInFlight = null;
    }), this.flushInFlight;
  }
  async doFlush(e, i) {
    let r = bs("breakReminder", {
      enabled: !1
    }).value;
    if (this.cachedBreakThresholdMs = (r.breakThresholdMinutes ?? m) * 6e4, this.pendingSeconds <= 0) return;
    let n = this.pendingSeconds;
    try {
      let s = await M(i), o = s.windows.at(-1);
      if (o && e - o.end < this.cachedBreakThresholdMs) {
        if (o.end = Math.max(o.end, e), o.userSeconds = Math.min(o.userSeconds + n, (o.end - o.start) / 1e3), 
        this.activeStretch) this.activeStretch.windowStartMs = o.start;
      } else {
        let a = this.activeStretch?.windowStartMs ?? e - n * 1e3, u = o ? Math.max(a, o.end) : a, v = Math.max(u, e);
        if (s.windows.push({
          start: u,
          end: v,
          userSeconds: Math.min(n, (v - u) / 1e3)
        }), this.activeStretch) this.activeStretch.windowStartMs = u;
      }
      let S = e - w;
      if (s.windows = s.windows.filter(a => a.end >= S), z() && i !== void 0) {
        let a = await i.write(g(), _(s), {
          mode: 384
        });
        if (!a.ok) {
          t(`Failed to flush active-time ledger: ${yt(a.error)}`);
          return;
        }
      } else {
        let a = Ee();
        await gn().mkdir(a), await gn().atomicWrite(f(), _(s), 384);
      }
      this.pendingSeconds -= n;
    } catch (s) {
      t(`Failed to flush active-time ledger: ${l(s)}`);
    }
  }
  ensureFlushTimer() {
    if (this.flushTimer) return;
  }
  reset() {
    if (this.pendingSeconds = 0, this.activeStretch = null, this.cachedBreakThresholdMs = m * 6e4, 
    this.flushTimer) clearInterval(this.flushTimer), this.flushTimer = null;
    this.cleanupHandle?.(), this.cleanupHandle = null, this.flushInFlight = null, this.#t = void 0;
  }
}

var j = new K(() => new p);

class c {
  activeOperations=new Set;
  lastUserActivityTime=0;
  lastCLIRecordedTime;
  isCLIActive=!1;
  USER_ACTIVITY_TIMEOUT_MS=5e3;
  getNow;
  getActiveTimeCounter;
  constructor(e) {
    this.getNow = e?.getNow ?? (() => Date.now()), this.getActiveTimeCounter = e?.getActiveTimeCounter ?? _fs, 
    this.lastCLIRecordedTime = this.getNow();
  }
  static getInstance() {
    let e = h();
    return e.current ??= new c, e.current;
  }
  static resetInstance() {
    h().current = null;
  }
  static createInstance(e) {
    let i = new c(e);
    return h().current = i, i;
  }
  recordUserActivity() {
    if (!this.isCLIActive && this.lastUserActivityTime !== 0) {
      let i = (this.getNow() - this.lastUserActivityTime) / 1e3;
      if (i > 0) {
        let r = this.USER_ACTIVITY_TIMEOUT_MS / 1e3;
        if (i < r) {
          let n = this.getActiveTimeCounter();
          if (n) n.add(i, {
            type: "user"
          });
        }
      }
    }
    this.lastUserActivityTime = this.getNow();
  }
  startCLIActivity(e) {
    if (this.activeOperations.has(e)) this.endCLIActivity(e);
    let i = this.activeOperations.size === 0;
    if (this.activeOperations.add(e), i) this.isCLIActive = !0, this.lastCLIRecordedTime = this.getNow();
  }
  endCLIActivity(e) {
    if (this.activeOperations.delete(e), this.activeOperations.size === 0) {
      let i = this.getNow(), r = (i - this.lastCLIRecordedTime) / 1e3;
      if (r > 0) {
        let n = this.getActiveTimeCounter();
        if (n) n.add(r, {
          type: "cli"
        });
      }
      this.lastCLIRecordedTime = i, this.isCLIActive = !1;
    }
  }
  async trackOperation(e, i) {
    this.startCLIActivity(e);
    try {
      return await i();
    } finally {
      this.endCLIActivity(e);
    }
  }
  getLastUserActivityTime() {
    return this.lastUserActivityTime;
  }
  getActivityStates() {
    return {
      isUserActive: (this.getNow() - this.lastUserActivityTime) / 1e3 < this.USER_ACTIVITY_TIMEOUT_MS / 1e3,
      isCLIActive: this.isCLIActive,
      activeOperationCount: this.activeOperations.size
    };
  }
}

class T {
  current=null;
}

var I = new K(() => new T);

function h() {
  return I.of(B().host);
}

var a2 = {
  recordUserActivity: () => c.getInstance().recordUserActivity(),
  startCLIActivity: e => c.getInstance().startCLIActivity(e),
  endCLIActivity: e => c.getInstance().endCLIActivity(e)
};

export { a2 };
