// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lt, B } from "./chunk-3pqddg8f.js";

import { t } from "./chunk-kawq2919.js";

import { X } from "./chunk-1zg3hbfq.js";

import { f } from "./chunk-3ykz5st8.js";

class E3o {
  state={
    status: "inactive"
  };
  fallbackSadEmitted=new Set;
  toolsBaseline={
    captured: !1
  };
  relayThinkingStripOwed=!1;
  lastDispatchRelayed=!1;
  lastDispatchFallback=void 0;
  openBootVerdict=void 0;
  bootSettled=!1;
  handoffMarkerStep=void 0;
  enableStubsCalled=new Map;
  forkDirectLines=new Set;
  relayRefusedGzip=!1;
}

var Z1s = new lt(() => new E3o);

function n() {
  return Z1s.of(B());
}

function BI() {
  return n().state;
}

function Pqr(e) {
  let r = n();
  if (r.state.status !== "inactive") return;
  r.state = e, r.relayThinkingStripOwed = !1;
}

function cDe(e, r, o) {
  let a = n();
  if (a.state.status === "reverted") return;
  if (a.state.status === "active") {
    if (e === "device_tool_requested" || e === "device_tool_request_repeated") X("info", "cli_teleport_relay_ended", {
      reason: e
    }); else if (e !== "direct_served") f("upgrade_teleport_cache", e), l(e);
    if (e !== "direct_served") s(r, e);
    a.relayThinkingStripOwed = !0;
  }
  a.state = {
    status: "reverted",
    reason: e,
    detail: o
  };
}

function Iqr(e, r) {
  let o = n().enableStubsCalled;
  if (!o.has(e)) return o.set(e, r), "not_repeat";
  return !!r && r === o.get(e) ? "not_repeat" : "repeat";
}

var i = new WeakMap;

function Oqr(e, r) {
  i.set(e, r);
}

function lYs(e) {
  let r = n();
  if (r.relayThinkingStripOwed) return e.mainLoop ? "strip_and_mark" : "strip";
  if (r.state.status !== "active") return "keep";
  return e.fetch !== void 0 && i.has(e.fetch) ? "keep" : "strip";
}

function dYs(e) {
  return n().state.status === "active" && e !== void 0 && i.get(e) === "main";
}

function Mqr(e) {
  n().openBootVerdict = e;
}

function rvn() {
  return n().openBootVerdict !== void 0;
}

function Ker() {
  n().bootSettled = !0;
}

function cYs() {
  return !n().bootSettled || BI().status === "active" || rvn();
}

function ovn() {
  let e = n(), r = e.openBootVerdict;
  return e.openBootVerdict = void 0, r;
}

function S2e(e) {
  n().handoffMarkerStep = e;
}

function Hqr() {
  let e = n(), r = e.handoffMarkerStep;
  return e.handoffMarkerStep = void 0, r;
}

function N2t() {
  let e = ovn();
  if (e === void 0) return;
  f("upgrade_teleport_cache", e), X("warn", "cli_teleport_arm_verdict", {
    outcome: "refused",
    error_code: e
  }), t(`prompt-cache relay stays off: boot had no marker (${e}) and no hand-off armed it`);
}

function Dqr() {
  n().relayThinkingStripOwed = !0;
}

function Lqr() {
  return n().relayThinkingStripOwed;
}

function Nqr() {
  return !n().relayRefusedGzip;
}

function $qr() {
  let e = n();
  if (e.relayRefusedGzip) return;
  e.relayRefusedGzip = !0, X("warn", "cli_teleport_relay_gzip_refused");
}

function Fqr(e) {
  let r = n();
  r.lastDispatchRelayed = e, r.lastDispatchFallback = void 0;
}

function Uqr(e, r) {
  n().lastDispatchFallback = {
    cause: e,
    httpStatus: r
  };
}

function uYs() {
  return n().lastDispatchFallback;
}

function pYs() {
  let e = n();
  return e.relayThinkingStripOwed && !e.lastDispatchRelayed;
}

function fYs(e) {
  let r = n();
  if (!r.relayThinkingStripOwed) return;
  r.relayThinkingStripOwed = !1, X("info", "cli_teleport_relay_thinking_settled", {
    outcome: e
  });
}

function Bqr(e) {
  let r = n();
  if (r.fallbackSadEmitted.has(e)) return;
  r.fallbackSadEmitted.add(e), f("upgrade_teleport_cache", e), l(e);
}

function jqr(e, r) {
  if (n().state.status !== "active") return;
  l("direct_served", e), s(r, `direct_served_${e}`), cDe("direct_served", r, e);
}

function Wqr(e, r) {
  let o = n();
  if (o.state.status !== "active") return;
  let a = e.at(-1);
  if (a !== void 0) o.forkDirectLines.add(a);
  f("upgrade_relay_fork_direct", r);
}

function zqr(e) {
  let r = n().forkDirectLines;
  return r.size > 0 && e.some(o => r.has(o));
}

function s(e, r) {
  f("upgrade_relay_end", `${e}_${r}`);
}

function l(e, r) {
  X("warn", "cli_teleport_relay_fallback", {
    reason: e,
    ...r !== void 0 && {
      cause: r
    }
  });
}

function Gqr(e) {
  let r = d(e);
  if (r === void 0) return BI().status === "active";
  return cDe("context_reduced", "main", r), !1;
}

function Vqr(e) {
  return BI().status === "active" && d(e) === void 0;
}

function d(e) {
  let r = BI();
  if (r.status !== "active") return;
  let o = r.preAnchorLineUuids;
  if (e.length < o.length) return `live view has ${e.length} lines before its tail; the arm snapshot guarded ${o.length}`;
  for (let a = 0; a < o.length; a++) if (e[a] !== o[a]) return `pre-anchor line ${a} changed since arm`;
  return;
}

function Kqr(e, r) {
  let o = n();
  if (o.state.status !== "active") return !1;
  let a = o.toolsBaseline;
  if (!a.captured) return o.toolsBaseline = {
    captured: !0,
    model: e,
    fingerprint: r
  }, !0;
  if (e !== a.model) return !1;
  if (a.fingerprint === r) return !0;
  return cDe("tools_changed", "main", a.fingerprint === null ? "session gained a toolset after a toolless first relay-attempted dispatch" : r === null ? "session lost its toolset after a tooled first relay-attempted dispatch" : "outgoing toolset diverged from the first relay-attempted dispatch baseline"), 
  !1;
}

function qqr(e, r) {
  let o = n();
  if (o.state.status !== "active") return "not_comparable";
  let a = o.toolsBaseline;
  if (!a.captured) return "intact";
  if (e !== a.model) return "not_comparable";
  return a.fingerprint === r ? "intact" : "changed";
}

export { E3o, Z1s, BI, Pqr, cDe, Iqr, Oqr, lYs, dYs, Mqr, rvn, Ker, cYs, ovn, S2e, Hqr, N2t, Dqr, Lqr, Nqr, $qr, Fqr, Uqr, uYs, pYs, fYs, Bqr, jqr, Wqr, zqr, Gqr, Vqr, Kqr, qqr };
