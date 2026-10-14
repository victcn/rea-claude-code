// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Fa } from "./chunk-q6wab2jw.js";

import { _ } from "./chunk-kawq2919.js";

import { Nve } from "./chunk-dd98x6x7.js";

import { Cse } from "./chunk-2mq6q9dt.js";

import { nve } from "./chunk-xywp7esx.js";

import { randomUUID as k } from "crypto";

var c = Symbol("isolationDispatchGate.mintedReentry");

async function ezt({tool: e, input: n, ask: o, permissionPhase: s, alreadyApproved: i, recipientLabel: r, resolution: p, askUnconditionally: l = !1, parse: m}) {
  if (!((l || Nve()) && !i)) return {
    proceed: !0,
    input: n,
    asked: !1
  };
  let u = {
    ...s,
    ...p !== void 0 && {
      dispatchResolution: {
        input: n,
        note: p
      }
    }
  };
  Object.defineProperty(u, c, {
    value: !0,
    configurable: !0
  });
  let h = k(), f = Cse(), t;
  try {
    t = await o(n, {
      toolUseId: h,
      reentry: u
    });
  } finally {
    f(), Reflect.deleteProperty(u, c);
  }
  if (t.behavior !== "allow") return {
    proceed: !1,
    asked: !0,
    reason: "denied",
    message: t.behavior === "deny" && t.message ? t.message : l ? `Sending to ${r} needs your approval \u2014 nothing was sent.` : `isolatePeerMachines is enabled: sending to ${r} needs your approval \u2014 nothing was sent.`,
    ...t.behavior === "deny" && t.decisionReason && {
      decisionReason: t.decisionReason
    }
  };
  if (t.updatedInput === void 0 || nve(t.updatedInput)) return {
    proceed: !0,
    input: n,
    asked: !0,
    ...t.decisionReason && {
      decisionReason: t.decisionReason
    }
  };
  let d = P(m, t.updatedInput);
  if (!d.success) return {
    proceed: !1,
    asked: !0,
    reason: "bad_shape",
    message: `The permission handler narrowed the input to a shape ${e.name} does not accept \u2014 nothing was sent.`
  };
  if (d.data.to !== n.to) return {
    proceed: !1,
    asked: !0,
    reason: "recipient_changed",
    message: `The permission handler changed the recipient (from ${r}) after this send was resolved \u2014 nothing was sent. Send again to the recipient you intend.`
  };
  if (d.data.message !== void 0 && typeof d.data.message !== "string") return {
    proceed: !1,
    asked: !0,
    reason: "non_text_message",
    message: "The permission handler rewrote the message into a structured (non-text) form, which cannot be sent to another session \u2014 nothing was sent."
  };
  return {
    proceed: !0,
    input: d.data,
    asked: !0,
    ...t.decisionReason && {
      decisionReason: t.decisionReason
    }
  };
}

function tzt(e, n, o, s) {
  let i = e.permissionPhase?.pipeline;
  if (i === void 0) return !1;
  let r = i.result.behavior === "ask" ? i.result : i.answered;
  if (r === void 0 || r.behavior !== "ask" || !s(r)) return !1;
  return a(o(i.input), o(n));
}

function Zqo(e, n, o) {
  let s = e.permissionPhase?.checked;
  if (s === void 0) return;
  return a(o(s.input), o(n)) ? s.result : void 0;
}

function v_n(e, n, o) {
  let s = e.permissionPhase?.checked;
  if (s === void 0 || !("note" in s)) return;
  return a(o(s.input), o(n)) ? s.note : void 0;
}

function e4o(e, n, o, s) {
  if (e === void 0) return;
  let i = s(n), r = {
    ...e
  };
  if (e.checked !== void 0 && a(s(e.checked.input), i)) r.checked = {
    ...e.checked,
    input: o
  };
  if (e.pipeline !== void 0 && a(s(e.pipeline.input), i)) r.pipeline = {
    ...e.pipeline,
    input: o
  };
  return r;
}

function t4o(e, n, o) {
  let s = e.permissionPhase?.dispatchResolution;
  if (s === void 0) return;
  return a(o(s.input), o(n)) ? s.note : void 0;
}

function Xge(e) {
  let n = e.permissionPhase;
  return n !== void 0 && Object.hasOwn(n, c);
}

function nzt(e) {
  return e.behavior === "ask" && e.decisionReason?.type === "safetyCheck" && e.decisionReason.circuitBreaker === "isolatePeerMachines";
}

function a(e, n) {
  return _(e) === _(n);
}

function P(e, n) {
  let o = e(n);
  if (o.success || o.error === void 0) return o;
  let s = new Set;
  for (let i of o.error.issues) {
    if (i.code !== "unrecognized_keys" || i.path.length > 0) return o;
    for (let r of i.keys) s.add(r);
  }
  if (s.size === 0 || typeof n !== "object" || n === null) return o;
  return e(Fa(n, (i, r) => s.has(r)));
}

export { ezt, tzt, Zqo, v_n, e4o, t4o, Xge, nzt };
