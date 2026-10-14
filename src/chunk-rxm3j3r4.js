// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ve } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { D4 } from "./chunk-84yp45y8.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { tde, vXr } from "./chunk-69rr80fg.js";

import { gDe } from "./chunk-6hkfb588.js";

import { d4 } from "./chunk-5egdactz.js";

var u = 32;

function p4r(n) {
  if (n.publishContext !== "subagent" || n.context.agentId === void 0 || n.context.teammateContext !== void 0) return null;
  let {publishContext: e} = tde({
    agentId: void 0,
    isNonInteractiveSession: ve()
  });
  return d4(e) ? e : null;
}

function utr(n, e) {
  let t = ee().live.pendingSubagentArms, s = t.get(n) ?? [], i = s.findIndex(o => o.slug === e.slug);
  if (i === -1) s.push(e); else s[i] = e;
  t.delete(n), t.set(n, s);
  let r = 0;
  for (let o of t.values()) r += o.length;
  while (r > u) {
    let [o, a] = t.entries().next().value;
    if (a.shift(), a.length === 0) t.delete(o);
    r--, f("artifact_live_subscribe", "subagent_arm_evicted");
  }
}

function l(n) {
  let e = ee().live.pendingSubagentArms, t = e.get(n) ?? [];
  return e.delete(n), t;
}

var d = 256;

function m(n) {
  let e = ee().live.finishedSubagentAdopters;
  e.delete(n), e.add(n);
  while (e.size > d) e.delete(e.values().next().value);
}

function yYs(n) {
  let {agentId: e, context: t} = n;
  m(e);
  let s = l(e);
  if (s.length === 0) return;
  let {publishContext: i} = tde({
    agentId: t.agentId,
    agentType: t.agentContext?.agentType,
    isNonInteractiveSession: t.options.isNonInteractiveSession
  });
  if (i === "subagent" && t.agentId !== void 0) {
    let o = D4(t.agentId, t.taskRegistry) === t.agentId || !ee().live.finishedSubagentAdopters.has(t.agentId);
    for (let a of s) if (o) utr(t.agentId, a); else f("artifact_live_subscribe", "subagent_arm_orphaned");
    return;
  }
  if (!d4(i)) return;
  let r = {
    ...t,
    abortController: new AbortController
  };
  for (let o of s) gDe({
    ...o,
    publishContext: i,
    getKnownVer: vXr(t.getArtifactReadObservation, o.slug),
    context: r,
    adoptedPublish: !0,
    announceArmlessEnd: !0
  }).catch(() => {});
  g("artifact_live_subscribe", {
    subagent_publish_adopted: !0,
    count: s.length,
    publish_context: c(i)
  });
}

export { p4r, utr, yYs };
