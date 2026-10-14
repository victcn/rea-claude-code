// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, B, ycn } from "./chunk-3pqddg8f.js";

import { bt } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { X } from "./chunk-1zg3hbfq.js";

var u = 3e4;

function y() {
  return {
    activityCallback: null,
    refcount: 0,
    mainLoopRefcount: 0,
    parkedOnUser: 0,
    parkGeneration: 0,
    activeReasons: new Map,
    oldestActivityStartedAt: null,
    heartbeatTimer: null,
    idleTimer: null,
    cleanupHandle: null
  };
}

var l = "cli", f = 1e3;

class d {
  activityKey=() => l;
  mainLoopActivityListener=null;
  nestedChainDropListener=null;
  workStarted=Me();
  statesByKey=new Map;
  evictedKeys=new Set;
  setActivityKey(e) {
    this.activityKey = e;
  }
  currentKey() {
    return this.activityKey();
  }
  stateCount() {
    return this.statesByKey.size;
  }
  currentStateOrCreate() {
    let e = this.activityKey();
    if (this.evictedKeys.has(e)) return null;
    let t = this.statesByKey.get(e);
    if (!t) t = y(), this.statesByKey.set(e, t);
    return t;
  }
  currentStateOrNull() {
    return this.statesByKey.get(this.activityKey()) ?? null;
  }
  reset() {
    for (let e of [ ...this.statesByKey.keys() ]) this.evictKey(e);
    this.evictedKeys.clear(), this.activityKey = () => l, this.mainLoopActivityListener = null, 
    this.nestedChainDropListener = null, this.workStarted.clear();
  }
  evictKey(e) {
    if (this.evictedKeys.add(e), this.evictedKeys.size > f) {
      let r = this.evictedKeys.values().next().value;
      if (r !== void 0) this.evictedKeys.delete(r);
    }
    let t = this.statesByKey.get(e);
    if (!t) return;
    if (t.heartbeatTimer !== null) clearInterval(t.heartbeatTimer);
    if (t.idleTimer !== null) clearTimeout(t.idleTimer);
    t.cleanupHandle?.(), this.statesByKey.delete(e);
  }
}

var p = new K(() => new d);

function n() {
  return p.of(B().host);
}

function v(e) {
  s(e), e.heartbeatTimer = setInterval(t => {
    if (c(t)) {
      X("debug", "session_keepalive_parked_on_user", {
        refcount: t.refcount,
        parked_on_user: t.parkedOnUser
      });
      return;
    }
    if (X("debug", "session_keepalive_heartbeat", {
      refcount: t.refcount
    }), a.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES) t.activityCallback?.();
  }, u, e);
}

function S(e) {
  if (s(e), e.activityCallback === null) return;
  e.idleTimer = setTimeout(t => {
    X("info", "session_idle_30s"), t.idleTimer = null;
  }, u, e);
}

function s(e) {
  if (e.idleTimer !== null) clearTimeout(e.idleTimer), e.idleTimer = null;
}

function lRs(e) {
  let t = n().currentStateOrCreate();
  if (!t) return;
  if (t.activityCallback = e, t.refcount > 0 && t.heartbeatTimer === null) v(t);
}

function dRs() {
  let e = n().currentStateOrNull();
  if (!e) return;
  if (e.activityCallback = null, e.heartbeatTimer !== null) clearInterval(e.heartbeatTimer), 
  e.heartbeatTimer = null;
  s(e);
}

function cRs() {
  let e = n().currentStateOrNull();
  if (e && a.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES) e.activityCallback?.();
}

function hSo(e) {
  n().mainLoopActivityListener = e;
}

function ySo(e) {
  n().nestedChainDropListener = e;
}

function uRs(e) {
  n().nestedChainDropListener?.(e);
}

function pRs(e) {
  return (n().currentStateOrNull()?.activeReasons.get(e) ?? 0) > 0;
}

function djn() {
  for (let e of n().statesByKey.values()) if (e.refcount > 0 && !c(e)) return !0;
  return !1;
}

function cjn(e) {
  return n().workStarted.subscribe(e);
}

function lwe() {
  return n().currentStateOrNull()?.mainLoopRefcount ?? 0;
}

function gpe() {
  return ycn() || lwe() > 0;
}

function PO(e, t) {
  let r = n(), i = r.currentStateOrCreate();
  if (!i) return;
  if (i.refcount++, t === void 0) i.mainLoopRefcount++, r.mainLoopActivityListener?.(i.mainLoopRefcount);
  if (i.activeReasons.set(e, (i.activeReasons.get(e) ?? 0) + 1), i.refcount === 1) {
    if (i.oldestActivityStartedAt = Date.now(), i.activityCallback !== null && i.heartbeatTimer === null) v(i);
  }
  if (i.refcount - i.parkedOnUser === 1) r.workStarted.emit();
  if (i.cleanupHandle === null) {
    let o = r.activityKey();
    i.cleanupHandle = bt(async () => {
      X("info", "session_activity_at_shutdown", {
        owner_key: o,
        refcount: i.refcount,
        active: Object.fromEntries(i.activeReasons),
        oldest_activity_ms: i.refcount > 0 && i.oldestActivityStartedAt !== null ? Date.now() - i.oldestActivityStartedAt : null
      });
    });
  }
}

function IO(e, t) {
  let r = n(), i = r.currentStateOrNull();
  if (!i) return;
  if (i.refcount > 0) i.refcount--;
  if (t === void 0) if (i.mainLoopRefcount > 0) i.mainLoopRefcount--, r.mainLoopActivityListener?.(i.mainLoopRefcount); else X("warn", "session_activity_main_loop_underflow", {
    reason: e
  });
  let o = (i.activeReasons.get(e) ?? 0) - 1;
  if (o > 0) i.activeReasons.set(e, o); else i.activeReasons.delete(e);
  if (i.refcount === 0) {
    if (i.parkedOnUser > 0) X("warn", "session_activity_parked_leaked", {
      parked_on_user: i.parkedOnUser
    }), i.parkedOnUser = 0, i.parkGeneration++;
    if (i.heartbeatTimer !== null) clearInterval(i.heartbeatTimer), i.heartbeatTimer = null, 
    S(i);
  }
}

function Cse() {
  if (a.CLAUDE_CODE_DISABLE_AWAITING_USER_IDLE) return () => {};
  let e = n(), t = e.currentStateOrNull();
  if (!t) return () => {};
  if (t.parkedOnUser >= t.refcount) return X("warn", "session_activity_parked_exceeds_refcount", {
    refcount: t.refcount,
    parked_on_user: t.parkedOnUser
  }), () => {};
  t.parkedOnUser++;
  let r = t.parkGeneration, i = !1;
  return () => {
    if (i) return;
    if (i = !0, t.parkGeneration === r && t.parkedOnUser > 0) {
      if (t.parkedOnUser--, t.refcount - t.parkedOnUser === 1) e.workStarted.emit();
    }
  };
}

function fRs() {
  let e = n().currentStateOrNull();
  return e !== null && c(e);
}

function c(e) {
  return !a.CLAUDE_CODE_DISABLE_AWAITING_USER_IDLE && e.parkedOnUser > 0 && e.refcount - e.parkedOnUser <= 0;
}

export { lRs, dRs, cRs, hSo, ySo, uRs, pRs, djn, cjn, lwe, gpe, PO, IO, Cse, fRs };
