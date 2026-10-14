// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ze } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { qpe, zPe, Bd, k } from "./chunk-xywp7esx.js";

import { bt, t } from "./chunk-kawq2919.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { dn } from "./chunk-nnrb0acr.js";

import { PU, lOr } from "./chunk-q6wab2jw.js";

import { kE } from "./chunk-jnzpsr0d.js";

import { fe, xm } from "./chunk-dd98x6x7.js";

import { Ni } from "./chunk-tzmg667a.js";

import { _oo } from "./chunk-84yp45y8.js";

import { na } from "./chunk-nfw0a30b.js";

import { Bg } from "./chunk-7w62r1zx.js";

function Vbt() {
  return k("tengu_harbor_kite_mode_emit", !0);
}

function O() {
  switch (I().decidedBy) {
   case "policySettings":
    return "managed-setting";

   case "repoSettings":
    return "repo-setting";

   case "invalidSetting":
    return "invalid-setting";

   case "flagSettings":
   case "userSettings":
   case void 0:
    return "explicit-setting";
  }
}

var p = {
  accept: 0,
  hold: 1,
  refuse: 2
}, Q = 100, P = new Set(kE);

function IWt(e) {
  if (e !== null) na().inbound.shuttingDown = !1, x(), na().inbound.modeAtUnwire = void 0; else {
    let n = na().inbound.getCurrentMode;
    if (n !== null) try {
      na().inbound.modeAtUnwire = n();
    } catch {
      na().inbound.modeAtUnwire = void 0;
    }
  }
  if (na().inbound.getCurrentMode = e, e !== null) wHe("mode-changed");
}

function OWt(e) {
  na().inbound.onPeerHeld = e;
}

function MGr(e) {
  na().inbound.sendPeerReceipt = e;
}

function Oqo(e, n) {
  na().inbound.sendPeerReceipt?.({
    mode: "prompt",
    agentId: Ze(),
    value: "",
    origin: e
  }, n);
}

function MWt(e) {
  let n = na().inbound;
  if (n.publishAvailability = e, n.unsubscribeAvailabilityRefresh?.(), n.unsubscribeAvailabilityRefresh = null, 
  e) Kbt(), n.unsubscribeAvailabilityRefresh = Bd(Kbt);
}

function Kbt() {
  na().inbound.publishAvailability?.(Xbt() === void 0);
}

function HGr(e) {
  na().inbound.recordCorrespondent = e;
}

var F = 750;

function x() {
  if (na().inbound.shutdownSettleHandle === null) na().inbound.shutdownSettleHandle = bt(HWt);
}

async function HWt() {
  let e = na().inbound;
  if (e.shutdownSettleHandle?.(), e.shutdownSettleHandle = null, e.shuttingDown = !0, 
  e.held.length === 0) return;
  let n = e.held.splice(0, e.held.length);
  t(`[cross-session-inbound] shutdown: settling ${n.length} still-held peer message(s) as expired`);
  let o = [];
  for (let s of n) o.push(e.sendPeerReceipt?.(s, "expired")), e.onPeerHoldDropped?.(s, "expired");
  await Promise.race([ Promise.allSettled(o), J(F, void 0, {
    unref: !0
  }) ]);
}

function DGr(e) {
  let {inbound: n} = na();
  return n.held.includes(e) ? n.announced.get(e) : void 0;
}

function DWt(e) {
  na().inbound.onPeerHoldDropped = e;
}

function LWt(e) {
  na().inbound.onPeerHoldReleased = e;
}

function WZe() {
  return I().value;
}

function I() {
  let e, n;
  for (let o of [ "policySettings", "flagSettings", "userSettings" ]) {
    if (!dn(o)) continue;
    let s = fe(o)?.crossSessionInbound;
    if (s !== void 0) {
      e = s, n = o;
      break;
    }
  }
  for (let o of [ "localSettings", "projectSettings" ]) {
    if (!dn(o)) continue;
    let s = fe(o)?.crossSessionInbound;
    if (s === void 0) continue;
    if (p[s] > p[e ?? "accept"]) e = s, n = "repoSettings"; else if (s !== "accept" && e !== void 0 && p[s] === p[e] && n !== "policySettings") n = "repoSettings";
  }
  if (p[e ?? "accept"] < p.hold && N()) e = "hold", n = "invalidSetting";
  return {
    value: e,
    decidedBy: n
  };
}

function N() {
  return xm().errors.some(e => e.path === lOr && e.severity === "warning" && !e.statusOnly);
}

function h(e) {
  switch (e) {
   case "accept":
    return {
      policy: "accept"
    };

   case "hold":
    return {
      policy: "hold",
      holdCause: O()
    };

   case "refuse":
    return {
      policy: "refuse",
      refuseCause: "opt-out"
    };
  }
}

function w() {
  return Ni() ? void 0 : {
    policy: "refuse",
    refuseCause: "kill-switch"
  };
}

function H() {
  let e = w();
  if (e) return e;
  let n = WZe();
  if (n !== void 0) return h(n);
  let o = v();
  if (o === null) return {
    policy: "hold",
    holdCause: "mode-unknown"
  };
  if (!P.has(o.mode)) return t(`[cross-session-inbound] unrecognized permission mode '${o.mode}' (fail-closed \u2192 hold)`), 
  {
    policy: "hold",
    holdCause: "mode-unknown"
  };
  return C(o) ? {
    policy: "hold",
    holdCause: "bypass-default"
  } : {
    policy: "accept"
  };
}

function S(e) {
  let n = w();
  if (n) return n;
  return E(e, !1);
}

function _(e) {
  return E(e, !0);
}

function E(e, n) {
  let o = WZe();
  if (o !== void 0) return h(o);
  if (e?.selfSent) return {
    policy: "accept"
  };
  let s = v();
  if (s === null || !P.has(s.mode)) {
    if (s !== null) t(`[cross-session-inbound] unrecognized permission mode '${s.mode}' (fail-closed \u2192 hold)`);
    return {
      policy: "hold",
      holdCause: "mode-unknown"
    };
  }
  let i = qbt(s), a = n || Vbt() ? e?.fromMode : void 0;
  if (a !== void 0) return a === i ? {
    policy: "accept"
  } : {
    policy: "hold",
    holdCause: "mode-mismatch"
  };
  return i === "bypass" ? {
    policy: "hold",
    holdCause: "no-mode-asserted"
  } : {
    policy: "accept"
  };
}

function C(e) {
  return e.mode === "bypassPermissions" || PU(e.mode, e.isBypassPermissionsModeAvailable);
}

function qbt(e) {
  return C(e) ? "bypass" : "prompting";
}

function bHe() {
  return H().policy;
}

function LGr(e) {
  return S(e).policy;
}

function v() {
  let e = na().inbound.getCurrentMode;
  if (e === null) return t("[cross-session-inbound] permission-mode getter not wired (fail-closed \u2192 hold)"), 
  null;
  try {
    return e();
  } catch (n) {
    return t(`[cross-session-inbound] mode getter threw (${l(n)}; fail-closed \u2192 hold)`), 
    null;
  }
}

function NGr() {
  if (WZe() !== void 0) return !1;
  let e = v();
  if (e === null || !P.has(e.mode)) return !1;
  return C(e);
}

function NWt(e) {
  return R(e, S(b(e)));
}

function b(e) {
  let n = e.origin;
  if (!n || n.kind !== "peer") return;
  return {
    fromMode: n.fromMode,
    selfSent: n.selfSent
  };
}

function D(e) {
  let n;
  if (e.priority === "later") {
    let {priority: o, ...s} = e;
    n = _oo(s, {
      receipt: "caller"
    });
  } else n = _oo(e, {
    receipt: "caller"
  });
  if (!n.admitted) return na().inbound.sendPeerReceipt?.(e, "dropped", {
    dropReason: n.reason,
    droppedMsgIds: []
  }), !1;
  return na().inbound.recordCorrespondent?.(e), !0;
}

function R(e, n) {
  let o = na().inbound;
  switch (Kbt(), n.policy) {
   case "accept":
    return A("policy-accepts"), g("peer_inbound_gate"), "accept";

   case "refuse":
    return SHe(n.refuseCause === "kill-switch" ? m(e) : `crossSessionInbound=refuse: ${m(e)}`, n.refuseCause), 
    o.sendPeerReceipt?.(e, "refused"), "refused";

   case "hold":
    {
      let {holdCause: s} = n;
      if (o.shuttingDown) return t(`[cross-session-inbound] shutdown: not parking a late peer message \u2014 settled as expired: ${m(e)}`), 
      o.sendPeerReceipt?.(e, "expired"), f("peer_inbound_gate", "shutdown_expired"), "refused";
      if (o.held.length >= Q) {
        let i = o.held.shift();
        if (i) t(`[cross-session-inbound] hold buffer full \u2014 evicted oldest as expired: ${m(i)}`), 
        o.sendPeerReceipt?.(i, "expired"), o.onPeerHoldDropped?.(i, "expired");
      }
      if (o.held.push(e), x(), t(`[cross-session-inbound] held inbound peer message (${o.held.length} held, cause=${s}): ${m(e)}`), 
      f("peer_inbound_gate", "held"), o.onPeerHeld) o.onPeerHeld(e, o.held.length, s), 
      o.announced.set(e, s);
      return o.sendPeerReceipt?.(e, "held"), "held";
    }
  }
}

function $Wt(e) {
  if (!e) return "ungated";
  if (e.kind === "peer") return "hostInjected" in e && e.hostInjected === !0 ? "host-injected" : "peer";
  if (e.kind === "task-notification" && "subkind" in e && e.subkind === "peer-send-message") return "coordinator";
  return "ungated";
}

function FWt({ingressOrigin: e, inboundOrigin: n, envelopePeer: o = !1}) {
  return o || $Wt(e) !== "ungated" && !B(e) || n === qpe;
}

function B(e) {
  return !!e && e.kind === "peer" && !("hostInjected" in e && e.hostInjected === !0) && "inbound_origin" in e && e.inbound_origin === zPe;
}

function UWt(e, n) {
  switch ($Wt(e)) {
   case "peer":
    return NWt(n);

   case "host-injected":
    return $Gr(n);

   case "coordinator":
    return G(n);

   case "ungated":
    return "accept";
  }
}

function Ybt(e) {
  switch ($Wt(e)) {
   case "peer":
    return Xbt();

   case "coordinator":
   case "host-injected":
    return WZe() === "refuse" ? "opt-out" : void 0;

   case "ungated":
    return;
  }
}

function Xbt() {
  let e = H();
  if (e.policy !== "refuse") return;
  return e.refuseCause;
}

function j() {
  let e = WZe();
  return e !== void 0 ? h(e) : {
    policy: "accept"
  };
}

function G(e) {
  let n = WZe();
  if (n === void 0) return "accept";
  return R(e, h(n));
}

function $Gr(e) {
  return R(e, _(b(e)));
}

function SHe(e, n) {
  if (Kbt(), n === "kill-switch") {
    t(`[cross-session-inbound] refused inbound peer message \u2014 cross-session messaging disabled (kill switch) (${e})`), 
    f("peer_inbound_gate", "kill_switch");
    return;
  }
  t(`[cross-session-inbound] refused inbound peer message (${e})`), f("peer_inbound_gate", "refused");
}

function wHe(e) {
  return Kbt(), A(e);
}

function M(e) {
  switch ($Wt(e.origin)) {
   case "coordinator":
    return j();

   case "host-injected":
    return _(b(e));

   case "peer":
   case "ungated":
    return S(b(e));
  }
}

function A(e) {
  let n = na().inbound, o = n.held;
  if (o.length === 0) return 0;
  let s = [], i = [], a = [], d = 0, y = 0;
  for (let r of o) {
    let u = M(r);
    if (u.policy === "accept") i.push(r); else if (u.policy === "refuse") {
      if (d += 1, u.refuseCause === "kill-switch") y += 1;
      n.sendPeerReceipt?.(r, "refused"), n.onPeerHoldDropped?.(r, "refused");
    } else if (s.push(r), n.announced.get(r) !== u.holdCause) a.push([ r, u.holdCause ]);
  }
  o.length = 0, o.push(...s);
  for (let [r, u] of a) n.announced.set(r, u), n.onPeerHeld?.(r, o.length, u);
  if (d > 0) t(y === d ? `[cross-session-inbound] gate off \u2014 dropped ${d} parked peer message(s) (cross-session messaging disabled)` : `[cross-session-inbound] dropped ${d} held peer message(s) \u2014 policy is now refuse`);
  if (i.length === 0) return 0;
  let c = [];
  for (let r of i) if (D(r)) c.push(r), g("peer_inbound_gate"); else n.onPeerHoldDropped?.(r, "dropped");
  if (t(`[cross-session-inbound] released ${i.length} held peer message(s) (${e}) \u2014 ${c.length} admitted by the ingress guard; ${o.length} still held`), 
  c.length > 0) n.onPeerHoldReleased?.(c, e);
  for (let r of c) n.sendPeerReceipt?.(r, "delivered");
  return i.length;
}

function Jbt(e, n) {
  let o = na().inbound, s = o.held.indexOf(e);
  if (s === -1) return "gone";
  let [i] = o.held.splice(s, 1);
  if (!i) return "gone";
  if (n === "approve") {
    let d = M(i);
    if (d.policy === "refuse") {
      let c = d.refuseCause === "kill-switch";
      return t(`[cross-session-inbound] held peer message approved but policy is now refuse (${c ? "kill switch" : "opt-out"}) \u2014 dropped`), 
      o.sendPeerReceipt?.(i, "refused"), o.onPeerHoldDropped?.(i, "refused"), "dropped";
    }
    if (!D(i)) return t("[cross-session-inbound] held peer message approved but DROPPED by the ingress guard on release"), 
    o.onPeerHoldDropped?.(i, "dropped"), "dropped-by-guard";
    return t("[cross-session-inbound] held peer message APPROVED \u2014 released to queue"), 
    g("peer_inbound_gate"), o.onPeerHoldReleased?.([ i ], "approved"), o.sendPeerReceipt?.(i, "delivered"), 
    "delivered";
  }
  t(`[cross-session-inbound] held peer message ${n === "deny" ? "DENIED" : "EXPIRED/CANCELLED"} \u2014 dropped with denial receipt`);
  let a = n === "deny" ? "denied" : "expired";
  return o.sendPeerReceipt?.(i, a), "dropped";
}

function Mqo() {
  return na().inbound.held;
}

function Qbt() {
  return na().inbound.held.length;
}

function FGr() {
  return na().inbound.shuttingDown;
}

function m(e) {
  let n = e.origin?.kind === "peer" && typeof e.origin.from === "string" ? e.origin.from : "unknown", o = typeof e.value === "string" ? e.value : "[blocks]";
  return `from=${Bg(n)} "${Bg(o, 60)}"`;
}

export { Vbt, IWt, OWt, MGr, Oqo, MWt, Kbt, HGr, HWt, DGr, DWt, LWt, WZe, qbt, bHe, LGr, NGr, NWt, $Wt, FWt, UWt, Ybt, Xbt, $Gr, SHe, wHe, Jbt, Mqo, Qbt, FGr };
