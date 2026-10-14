// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { GOs, Bd, Ui, In, k, Rr } from "./chunk-xywp7esx.js";

import { j } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { IE, FFs, Iy } from "./chunk-5brm0azz.js";

import { Jr, Ton } from "./chunk-s2t7g8m9.js";

import { Eo } from "./chunk-ncyzf9zz.js";

import { XVe, Qsr } from "./chunk-y94p5sh8.js";

import { ZSs } from "./chunk-wsxyczjg.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { PS } from "./chunk-mtek6k5r.js";

import { hw } from "./chunk-sqb9meyh.js";

import { qWr, EKo, YWr } from "./chunk-q5z6fgwg.js";

import { yV } from "./chunk-dbedbnkv.js";

import { sl } from "./chunk-smzxkp15.js";

function KJn() {
  return Iy() && !k("tengu_melodic_ember", !1);
}

function uKo(e, r) {
  if (!Iy()) return () => {};
  let o = e();
  return Bd(() => {
    let t = e(), n = o && !t;
    if (o = t, n) r();
  });
}

var M = "tengu_ccr_sdk_mcp_remote_manifests";

function qJn() {
  return Rr("tengu_sdk_mcp_manifests", !0);
}

var f = "sdk_mcp_tools_list_changed", T = "sdk_mcp_manifests";

function pKo(e) {
  if (!k("tengu_sdk_mcp_manifests", !0)) return [];
  return e?.isRemoteTransport() !== !0 || XVe(e.sessionWriters()) && S() ? [ f, T ] : [ f ];
}

function fKo(e) {
  return e.includes("sdkMcpServerManifests") ? m(e, 0) : void 0;
}

var c = [ "payload", "request", "sdkMcpServerManifests" ];

function m(e, r) {
  return ZSs(e, (o, t) => {
    if (o !== c[r]) return t;
    return r === c.length - 1 ? "{}" : m(t, r + 1) ?? t;
  });
}

function S() {
  return k(M, !1);
}

var s = 3e5, TZe = 3e5;

function g({origin: e, frameCreatedAt: r, sessionWriters: o, now: t = Date.now()}) {
  if (e !== "host_per_send") return "no_origin_marker";
  let n = Qsr({
    frameCreatedAt: r,
    sessionWriters: o,
    maxFrameAgeMs: s,
    maxStatementAgeMs: TZe,
    now: t
  });
  if (n !== void 0) return n;
  return;
}

async function mKo(e) {
  let r = g(e);
  if (r !== void 0) return r;
  if (S()) return;
  return await We(Ui().catch(() => null), 0) !== void 0 ? "flag_off" : "flag_unsettled";
}

var l = !1;

function F() {
  let e = Eo(), r = In(GOs, l);
  return e.servedOnFacts ??= r.value === !0 && r.source === "payload", e.servedOnFacts;
}

var x = "ui_", _ = "ui_detach", E = "remote_cowork", b = new Set([ E, "remote_mobile" ]), i = "vscode";

function Ayn(e) {
  let r = IE();
  return !e.redactsWhatItPersists && (!e.isRemoteTransport || Jr() && Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) && (b.has(r ?? "") || FFs.has(r ?? "") && F()));
}

function u() {
  return PS() && !KJn();
}

function Zte(e) {
  return u() && Ayn(e) && (!e.isRemoteTransport || XVe(e.sessionWriters));
}

function gKo(e, r) {
  return e.isRemoteTransport && !r && u() && Ayn(e);
}

function BWr() {
  return k("tengu_calm_osprey", !0);
}

function AZe(e) {
  return typeof e === "string" && e.startsWith(x);
}

function hKo(e) {
  try {
    let r = e();
    return r.isRemoteTransport && r.leavesBelowFloor;
  } catch (r) {
    return d(j(r)), !0;
  }
}

function Cyn(e, r) {
  return Qsr({
    frameCreatedAt: e.createdAt,
    sessionWriters: e.sessionWriters,
    maxFrameAgeMs: s,
    maxStatementAgeMs: TZe,
    now: r
  });
}

function Ryn(e, r, o = Date.now) {
  if (!AZe(e)) return !1;
  try {
    let t = r(), n = !t.isRemoteTransport || (t.isAtFloor || t.leavesBelowFloor && e === _) && Cyn(t, o()) === void 0, R = e === _ && t.isAnySurfaceAttached;
    return !(Ayn(t) && n && (R || u()));
  } catch (t) {
    return d(j(t)), !0;
  }
}

function yKo(e, r) {
  return e.isRemoteTransport && r && PS() && !XVe(e.sessionWriters);
}

function jWr() {
  try {
    return sl("prompt.submit", void 0, Ge().loadedModules.filter(e => !yV(e)));
  } catch (e) {
    return d(j(e)), !0;
  }
}

function WWr() {
  return jWr() || !A();
}

function A() {
  let e = Ge();
  return !e.hookRegistrationOwed && e.hookRegistrationInFlight === void 0 && e.hooksUnknownCause === void 0;
}

function YJn(e) {
  try {
    let r = e();
    if (!(Zte(r) && (!r.isRemoteTransport || IE() === E))) return [];
    return WWr() ? [ qWr, EKo ] : [ qWr ];
  } catch (r) {
    return d(r), [];
  }
}

function zWr(e, r) {
  return sl(hw, r === i ? {
    component: e,
    surface: r
  } : {
    component: e
  });
}

function _Ko(e) {
  return e === i ? Ge().hookRegistrationInFlight?.catch(() => {}) : void 0;
}

function XJn(e) {
  try {
    if (!Iy() || !Zte(e()) || !A()) return [];
    return [ YWr, ...Ton().options.filter(r => zWr(r, i)).map(r => `${YWr}:${r}`) ];
  } catch (r) {
    return d(j(r)), [];
  }
}

export { KJn, uKo, qJn, pKo, fKo, TZe, mKo, Ayn, Zte, gKo, BWr, AZe, hKo, Cyn, Ryn, yKo, jWr, WWr, YJn, zWr, _Ko, XJn };
