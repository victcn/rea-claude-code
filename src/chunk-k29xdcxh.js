// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { J } from "./chunk-nvtwm272.js";

import { md } from "./chunk-35bwwb5f.js";

import { b8 } from "./chunk-hsqp728s.js";

import { Uh } from "./chunk-9tdwgnpn.js";

var a = 256;

class o {
  callId;
  toolName;
  hostName;
  dispatchEpoch;
  issuedAt;
  claimedMode;
  card;
  #e;
  #i;
  #u;
  #a;
  #l=!1;
  #d;
  #h;
  #m;
  #t;
  #s;
  #r="none";
  #p;
  #k;
  #f=0;
  #y=0;
  #w=0;
  #g;
  #A=!1;
  #b=new Map;
  #o;
  #n;
  constructor(e) {
    this.callId = e.callId, this.toolName = e.toolName, this.hostName = e.hostName, 
    this.dispatchEpoch = e.dispatchEpoch, this.#k = e.onAskEnded, this.#n = e.now, this.issuedAt = e.now();
  }
  get phase() {
    if (this.#o !== void 0) return "settled";
    if (this.#t !== void 0) return "asking";
    return this.#d === void 0 ? "pending" : "sent";
  }
  get instanceId() {
    return this.#e;
  }
  get sentUnderEpoch() {
    return this.#i ?? this.dispatchEpoch;
  }
  get carryingRequestId() {
    return this.#u;
  }
  get inheritedRequestId() {
    return this.#a?.requestId;
  }
  get inheritedWithdrawn() {
    return this.#l;
  }
  inherit(e, n) {
    this.#a = {
      requestId: e,
      withdraw: n
    };
  }
  withdrawInherited() {
    if (this.#a === void 0 || this.#l) return !1;
    return this.#l = !0, md(this.callId, "inherited standing request withdrawn", {
      host_inst: this.#e
    }), this.#a.withdraw(), !0;
  }
  get ask() {
    return this.#t;
  }
  get askEnded() {
    return this.#s;
  }
  get askOutstanding() {
    return this.#r === "raised" || this.#r === "asking";
  }
  get elapsedMs() {
    return (this.#o?.at ?? this.#n()) - this.issuedAt;
  }
  get queuedMs() {
    return this.#y;
  }
  get askSeatWaitMs() {
    return this.#w;
  }
  get reconnectHoldMs() {
    return this.#g;
  }
  get sentWithoutAskSeat() {
    return this.#A;
  }
  noteSentWithoutAskSeat() {
    this.#A = !0;
  }
  get askingMs() {
    return this.#t === void 0 ? this.#f : this.#f + (this.#n() - this.#t.since);
  }
  get settled() {
    return this.#o;
  }
  get wireName() {
    return this.#d?.wireName;
  }
  get fingerprint() {
    if (this.#h === void 0 && this.#d !== void 0) this.#h = b8(this.#d.wireName, this.#d.input);
    return this.#h;
  }
  get askedAboutKey() {
    if (this.#d === void 0) return;
    return Uh.includes(this.toolName) ? b8(this.#d.wireName, {
      command: this.#d.input.command
    }) : this.fingerprint;
  }
  sent(e) {
    this.#d = e, this.#h = void 0;
  }
  questionRaised() {
    this.#r = "raised";
  }
  answeredWithoutPrompt() {
    this.#r = this.#s === void 0 ? "answered" : "none";
  }
  get approvedBy() {
    return this.#p;
  }
  recordApprovedBy(e) {
    this.#p = e;
  }
  recordAddressee(e, n, t) {
    if (this.#e !== void 0 && this.#e !== e) this.#s = void 0;
    this.#e = e, this.#i ??= n, this.#u = t ?? this.#u;
  }
  beginQueuedWait() {
    let e = this.#n(), n = !1;
    return () => {
      if (n) return;
      n = !0, this.#y += this.#n() - e;
    };
  }
  beginAskSeatWait() {
    let e = this.#n(), n = !1;
    return () => {
      if (n) return;
      n = !0, this.#w += this.#n() - e;
    };
  }
  beginReconnectHold() {
    let e = this.#n();
    return this.#g = 0, () => {
      this.#g = this.#n() - e;
    };
  }
  legTransit(e) {
    return this.#b.get(e);
  }
  recordLegTransit(e, n) {
    this.#b.set(e, n);
  }
  get held() {
    return this.#m;
  }
  hold(e) {
    this.#m = e;
  }
  async whileAsking(e, n, t) {
    if (this.#c(), this.#r = "asking", this.#t = {
      ...e,
      since: this.#n()
    }, this.#s !== void 0) e.end?.(this.#s);
    let d = new AbortController, i, s = () => {
      if (t === void 0 || d.signal.aborted) return;
      i?.abort();
      let r = new AbortController;
      i = r, J(t.afterMs, r.signal).then(() => {
        if (!r.signal.aborted && !d.signal.aborted) md(this.callId, "ask lapsed unanswered", {
          ask_id: e.askId,
          after_ms: t.afterMs
        }), this.endAsk(t.reason);
      });
    };
    s();
    try {
      return await n({
        hold: () => i?.abort(),
        resume: s
      });
    } finally {
      d.abort(), i?.abort(), this.#r = this.#s === void 0 ? "answered" : "none", this.#c();
    }
  }
  endAsk(e) {
    if (this.#s !== void 0) return;
    this.#s = e, md(this.callId, "ask ended without an answer", {
      reason: e,
      ask_id: this.#t?.askId,
      host_inst: this.#e,
      showing: this.#t?.end !== void 0
    }), this.#t?.end?.(e), this.#k?.(e);
  }
  #c() {
    if (this.#t === void 0) return;
    this.#f += this.#n() - this.#t.since, this.#t = void 0;
  }
  markSettled(e) {
    if (this.#o !== void 0) return;
    return this.#c(), this.#o = {
      outcome: e.kind === "completed" ? {
        kind: "completed",
        disposition: e.disposition
      } : {
        kind: "error",
        code: e.code
      },
      at: this.#n()
    }, this.#o;
  }
}

class PQe {
  now=Date.now;
  #e=new Map;
  #i=[];
  begin(e) {
    let n = new o({
      ...e,
      now: this.now
    });
    return this.#e.set(e.callId, n), n;
  }
  settle(e, n) {
    let t = e.markSettled(n);
    if (t === void 0) return;
    if (this.#e.get(e.callId) === e) this.#e.delete(e.callId);
    this.remember({
      callId: e.callId,
      toolName: e.toolName,
      hostName: e.hostName,
      fingerprint: e.fingerprint,
      asked: e.card !== void 0,
      askedAboutKey: e.askedAboutKey,
      ...t
    });
  }
  get(e) {
    return this.#e.get(e);
  }
  addressedTo(e) {
    let n = [];
    for (let t of this.#e.values()) if (t.instanceId === e) n.push(t);
    return n;
  }
  recentByFingerprint(e, n) {
    let t = [], d = this.now();
    for (let i = this.#i.length - 1; i >= 0; i -= 1) {
      let s = this.#i[i];
      if (d - s.at > n) break;
      if (s.fingerprint === e) t.push(s);
    }
    return t;
  }
  askedAboutBefore(e) {
    let n = e.askedAboutKey;
    return n !== void 0 && this.#i.some(t => t.asked && t.askedAboutKey === n && t.callId !== e.callId);
  }
  remember(e) {
    let n = {
      ...e,
      at: Math.min(e.at, this.now())
    }, t = this.#i.findLastIndex(d => d.at <= n.at);
    if (this.#i.splice(t + 1, 0, n), this.#i.length > a) this.#i.shift();
  }
}

export { PQe };
