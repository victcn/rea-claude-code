// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

var a = /^00-([0-9a-f]{32})-([0-9a-f]{16})-[0-9a-f]{2}$/, c = "0".repeat(32), i = "0".repeat(16), u = 8;

function d(n) {
  if (typeof n !== "string") return !1;
  let t = a.exec(n);
  return t !== null && t[1] !== c && t[2] !== i;
}

function QYo(n, {isCrossSession: t}) {
  if (t || typeof n !== "object" || n === null) return;
  if (!("trace_context" in n) || !("uuid" in n)) return;
  let r = n.trace_context, o = Vt(n.uuid);
  if (!d(r) || !o) return;
  return {
    traceparent: r,
    eventUuid: o
  };
}

function ZYo(n) {
  let t = n.findLast(e => e.traceContext)?.traceContext;
  if (!t) return {
    parent: void 0,
    linked: []
  };
  let r = new Set([ t.traceparent ]), o = [];
  for (let {traceContext: e} of n) if (e && !r.has(e.traceparent)) r.add(e.traceparent), 
  o.push(e);
  return {
    parent: t,
    linked: o.slice(-u)
  };
}

var s = "anthropic/ccr-turn-event-uuid", T = "anthropic/ccr-turn-linked-event-uuids";

function Ibn(n) {
  let t = Vt(n?.parent?.eventUuid);
  if (!n || !t) return {};
  let r = n.linked.flatMap(o => {
    let e = Vt(o.eventUuid);
    return e ? [ e ] : [];
  });
  return {
    [s]: t,
    ...r.length > 0 && {
      [T]: r
    }
  };
}

export { QYo, ZYo, Ibn };
