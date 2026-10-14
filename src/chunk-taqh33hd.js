// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Mu, hL, Q0o, Z0o } from "./chunk-3pqddg8f.js";

import { I } from "./chunk-5wbhf1bk.js";

import { Ft } from "./chunk-xywp7esx.js";

import { Gen, ee, v1n } from "./chunk-kq1bg4dg.js";

import { i4, iy, ay, zy } from "./chunk-jtgrm34s.js";

import { Kv } from "./chunk-84yp45y8.js";

function xhe() {
  if (!Ft()) return !0;
  return Mu() !== null && Q0o();
}

function r9o(e) {
  let t = hL(e), n = Z0o(e);
  return () => {
    t(), n();
  };
}

function utt() {
  if (ee().autoReact.enabledMemo !== !0) return new Set;
  return new Set(Array.from(u(), e => e.slug));
}

function bDe() {
  let {autoReact: e, durable: t, live: n, wakes: r} = ee(), i = new Set;
  if (e.enabledMemo === !1 || e.userDisarmed) return i;
  for (let [o, s] of n.bootingWiredArms) {
    if (s.scanGeneration !== r.scanGeneration || n.retiredInFlightArms.has(o) || t.stopLatches.isStopped(o)) continue;
    if (!iy(o) || s.freshPublish && zy(o) && s.stopGeneration === i4(o)) i.add(o);
  }
  return i;
}

function* u() {
  for (let e of ee().live.supervisors.values()) if (!e.stopped && e.autoReactWiring !== void 0 && !ay(e.slug)) yield e;
}

function Y4r(e) {
  let {live: t} = ee();
  for (let n of u()) if (e?.reconnecting !== !0 || n.timer !== void 0 || t.inFlightSubscribes.has(n.slug)) return !0;
  return !1;
}

function o9o() {
  return ee().autoReact.enabledMemo === !0 && Y4r({
    reconnecting: !0
  });
}

function dVt(e) {
  let t = ee().live;
  for (let n of e) {
    let r = t.supervisors.get(n);
    if (r !== void 0) Gen(r), t.supervisors.delete(n);
    t.heardVersions.delete(n), v1n(n), ee().liveDocWatch.headSinks.get(n)?.sourceEnded();
  }
  c(e);
}

function c(e) {
  let t = ee().live;
  for (let n of e) if (t.inFlightSubscribes.has(n) && !t.supervisors.has(n)) t.retiredInFlightArms.add(n), 
  t.bootingWiredArms.delete(n), t.inFlightWiredIntent.delete(n);
}

var ptt = 1e4;

function a() {
  return ee().autoReact.unattendedReplies;
}

function X4r(e) {
  let t = a();
  t.set(e, Math.min((t.get(e) ?? 0) + 1, ptt));
}

function J4r(e, t) {
  if (t > 0) {
    let n = a();
    n.set(e, Math.min((n.get(e) ?? 0) + t, ptt));
  }
}

function s9o(e) {
  let t = a(), n = t.get(e) ?? 0;
  return t.delete(e), n;
}

function Kvn() {
  let e = ee().autoReact, t = e.unattendedReplies;
  e.unattendedReplies = new Map;
  let n = 0;
  for (let r of t.values()) n += r;
  return {
    total: n,
    bySlug: t
  };
}

function qvn(e, {where: t, stop: n}) {
  return Kv(`Claude auto-replied to ${e} ${I(e, "comment")}${t} while you were away.${n}`, "notice");
}

export { xhe, r9o, utt, bDe, Y4r, o9o, dVt, ptt, X4r, J4r, s9o, Kvn, qvn };
