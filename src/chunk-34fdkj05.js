// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, Xg, ve } from "./chunk-3pqddg8f.js";

import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { Ts } from "./chunk-xywp7esx.js";

import { Cxe } from "./chunk-h36n2zxz.js";

import { randomUUID as u } from "crypto";

function mBn(t, e) {
  return {
    type: "goal_status",
    met: t,
    sentinel: !0,
    condition: e
  };
}

function JZt(t) {
  if (!t) return null;
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (n?.type !== "attachment" || n.attachment.type !== "goal_status") continue;
    if (n.attachment.met || n.attachment.failed) return null;
    let o = n.attachment.condition;
    return typeof o === "string" && o.length > 0 ? o : null;
  }
  return null;
}

function q7(t, e) {
  i("tengu_goal_cleared", {
    reason: c(e),
    iterations: t.iterations,
    durationMs: Date.now() - t.setAt,
    origin: pe(t.origin)
  });
}

var XOt = 4e3, d = new Set([ "clear", "stop", "off", "reset", "none", "cancel" ]);

function Bdt(t) {
  return d.has(t.toLowerCase());
}

function oyo(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (n?.type !== "attachment" || n.attachment.type !== "goal_status") continue;
    let o = n.attachment;
    if (!o.met || o.sentinel) continue;
    return {
      condition: o.condition,
      iterations: o.iterations,
      durationMs: o.durationMs,
      tokens: o.tokens
    };
  }
  return null;
}

var gBn = t => `A session-scoped Stop hook is now active with condition: "${t}". Briefly acknowledge the goal, then immediately start (or continue) working toward it \u2014 treat the condition itself as your directive and do not pause to ask the user what to do. The hook will block stopping until the condition holds. It auto-clears once the condition is met \u2014 do not tell the user to run \`/goal clear\` after success; that's only for clearing a goal early.`;

function LFe(t, e) {
  let n = [];
  for (let o of t.get(e, "Stop").get("Stop") ?? []) {
    if (o.matcher !== "" || o.skillRoot !== void 0) continue;
    for (let s of o.hooks) if (s.type === "prompt") n.push(s);
  }
  return n;
}

var m = "/goal is only available in trusted workspaces. Restart, accept the trust dialog, and try again.", S = "/goal can't run while hooks are restricted (disableAllHooks or allowManagedHooksOnly is set in settings or by policy).";

function QZt() {
  if (Cxe()) return {
    message: S,
    code: "hooks_gate"
  };
  if (!ve() && !Ts()) return {
    message: m,
    code: "trust_gate"
  };
  return null;
}

function YEs(t, e, n) {
  t(o => ({
    ...o,
    queuedGoalOrigin: {
      condition: e,
      origin: n
    }
  }));
}

function h(t, e) {
  let n = e.getAppState().queuedGoalOrigin;
  if (n === void 0 || n.condition !== t) return "user";
  return e.setAppState(o => ({
    ...o,
    queuedGoalOrigin: void 0
  })), n.origin;
}

function jdt(t, e, n) {
  let o = n ?? h(t, e), s = QZt();
  if (s !== null) return f("goal_set", s.code, {
    origin: c(o)
  }), s.message;
  let r = q(), l = e.getAppState().activeGoal;
  if (l !== void 0) q7(l, "superseded");
  for (let a of LFe(e.sessionHooksRegistry, r)) e.sessionHooksRegistry.remove(r, "Stop", a);
  e.sessionHooksRegistry.add(r, "Stop", "", {
    type: "prompt",
    prompt: t
  });
  let p = {
    condition: t,
    iterations: 0,
    setAt: Date.now(),
    origin: o,
    tokensAtStart: Xg()
  };
  return e.setAppState(a => ({
    ...a,
    activeGoal: p
  })), e.applyMessageOp({
    type: "append",
    messages: [ Bvr(!1, t) ]
  }), i("tengu_stop_hook_added", {
    promptLength: t.length,
    via: b("goal"),
    origin: c(o)
  }), g("goal_set"), null;
}

function Wdt(t) {
  let e = q(), n = LFe(t.sessionHooksRegistry, e);
  if (n.length === 0) return null;
  let o = n[0].prompt;
  for (let r of n) t.sessionHooksRegistry.remove(e, "Stop", r);
  let s = t.getAppState().activeGoal;
  if (s !== void 0) q7(s, "user_clear");
  return t.setAppState(r => r.activeGoal === void 0 ? r : {
    ...r,
    activeGoal: void 0
  }), t.applyMessageOp({
    type: "append",
    messages: [ Bvr(!0, o) ]
  }), i("tengu_stop_hook_removed", {
    via: b("goal")
  }), o;
}

function Bvr(t, e) {
  return {
    type: "attachment",
    uuid: u(),
    timestamp: (new Date).toISOString(),
    attachment: mBn(t, e)
  };
}

export { mBn, JZt, q7, XOt, Bdt, oyo, gBn, LFe, QZt, YEs, jdt, Wdt, Bvr };
