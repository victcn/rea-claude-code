// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { _ } from "./chunk-kawq2919.js";

import { Mg } from "./chunk-j7qcpyv8.js";

import { createHash as c } from "crypto";

var h = 2048;

class i {
  #e=new Map;
  #n=new Set;
  record(e, n) {
    if (n.msg_id === void 0) return;
    let s = this.#e.get(e);
    if (s === void 0) s = new Map, this.#e.set(e, s);
    if (s.set(n.msg_id, t(n)), !this.#n.has(e)) f(s);
  }
  wrote(e, n) {
    return n.msg_id !== void 0 && this.#e.get(e)?.get(n.msg_id) === t(n);
  }
  retire(e, n) {
    let s = new Set(n);
    this.#s(e, r => !s.has(r));
  }
  retain(e, n) {
    this.#n.add(e), this.#s(e, s => n.has(s));
  }
  forget(e) {
    this.#e.delete(e);
  }
  #s(e, n) {
    let s = this.#e.get(e);
    if (s === void 0) return;
    for (let r of s.keys()) if (!n(r)) s.delete(r);
    if (s.size === 0) this.#e.delete(e);
  }
}

function f(e) {
  if (e.size <= h) return;
  let [n] = e.keys();
  if (n !== void 0) e.delete(n);
}

function t(e) {
  return c("sha256").update(_([ e.from, e.timestamp, e.text, e.summary ?? null, e.color ?? null, e.from_plugin ?? null ])).digest("hex");
}

class o {
  getCurrentMode=null;
  modeAtUnwire=void 0;
  onPeerHeld=null;
  onPeerHoldReleased=null;
  onPeerHoldDropped=null;
  sendPeerReceipt=null;
  recordCorrespondent=null;
  publishAvailability=null;
  unsubscribeAvailabilityRefresh=null;
  shutdownSettleHandle=null;
  shuttingDown=!1;
  held=[];
  announced=new WeakMap;
  reset() {
    this.held.length = 0, this.getCurrentMode = null, this.modeAtUnwire = void 0, this.onPeerHeld = null, 
    this.onPeerHoldReleased = null, this.onPeerHoldDropped = null, this.shutdownSettleHandle?.(), 
    this.shutdownSettleHandle = null, this.shuttingDown = !1, this.sendPeerReceipt = null, 
    this.recordCorrespondent = null, this.publishAvailability = null, this.unsubscribeAvailabilityRefresh?.(), 
    this.unsubscribeAvailabilityRefresh = null;
  }
}

class d {
  outstandingSends=[];
  awaitingTerminal=[];
  reset() {
    this.outstandingSends.length = 0, this.awaitingTerminal.length = 0;
  }
}

class l {
  pacer=null;
  reset() {
    this.pacer = null;
  }
}

class a {
  ownUdsHopToken=void 0;
  ownBridgePeerAddressResolver=void 0;
  messageDropped=Me();
  reset() {
    this.ownUdsHopToken = void 0, this.ownBridgePeerAddressResolver = void 0, this.messageDropped.clear();
  }
}

class u {
  pending=new Map;
  pendingSandbox=new Map;
  pendingPlanApproval=null;
  clear() {
    this.pending.clear(), this.pendingSandbox.clear(), this.pendingPlanApproval = null;
  }
}

class p {
  reportedDroppedEntries=new Set;
  pendingPrunes=new Map;
  ledger=new i;
}

class m {
  updated=Me();
  locks=Mg();
  leaderTeamName=void 0;
  reset() {
    if (this.leaderTeamName === void 0) return;
    this.leaderTeamName = void 0;
    try {
      this.updated.emit();
    } catch {}
  }
}

class g {
  inbound=new o;
  receipts=new d;
  outbound=new l;
  ingress=new a;
  swarmPermissions=new u;
  mailbox=new p;
  taskList=new m;
}

var y = new K(() => new g);

function na() {
  return y.of(B().host);
}

export { na };
