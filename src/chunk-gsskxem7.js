// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { gt, _p } from "./chunk-yebkpv3k.js";

import { Dv } from "./chunk-vxr6sv7z.js";

import { p } from "./chunk-jkzenvsk.js";

import { zn } from "./chunk-3pqddg8f.js";

import { ql } from "./chunk-sfvypv11.js";

import { pb } from "./chunk-14xmsjdg.js";

import { af } from "./chunk-xywp7esx.js";

import { ro, eI, _Ie, $K, FK, kft, K8e } from "./chunk-n3526wzr.js";

import { tI } from "./chunk-3kb22va7.js";

import { L4e } from "./chunk-e1mwn7g6.js";

import { Xir, vQr, Yrt } from "./chunk-84yp45y8.js";

import { Dn } from "./chunk-q0e8j22k.js";

import { o, u, U, A } from "./chunk-cvcg6n1z.js";

var dGr = Object.freeze({
  delivered: () => {},
  refused: () => {},
  [Symbol.dispose]: () => {}
});

function b() {
  let e = af();
  return {
    setSessionSendRunner: e.set,
    runSessionSend: t => {
      let r = e.get();
      return r ? r(t) : Promise.resolve({
        send: t.raised,
        delivering: dGr
      });
    }
  };
}

var c = b();

var v1s = c.runSessionSend;

var E1s = "Delivered by a plugin hook; nothing else was sent.";

var k1s = c.setSessionSendRunner;

async function vqo({session: e, to: t, message: r, resolved: d, appState: n, agentLifecycle: s, storageV5: i, credentials: m}) {
  if (typeof r !== "string") return {
    kind: "proceed",
    pin: void 0
  };
  let a = h(d);
  if (a === null) return {
    kind: "proceed",
    pin: void 0
  };
  let l = ro(a.name), f = Object.hasOwn(n.sendMessagePins, l) ? n.sendMessagePins[l] : void 0;
  if (f !== void 0 && f.id === a.id) return {
    kind: "proceed",
    pin: f
  };
  if (f !== void 0) {
    let y = $K(t) !== null;
    if (!y && t === a.name && t !== f.name) return {
      kind: "proceed",
      pin: void 0
    };
    if (!y) {
      let x = ql(n.teamContext), [R, P, _] = await Promise.all([ x ? pb(x, i) : null, Xir(), L4e(e, m) ]), E = FK(n, {
        teamFile: R,
        sessions: P,
        cloud: _.sessions,
        bridge: vQr(e)
      }), g = kft(E.byName, l);
      return {
        kind: "rebound",
        name: a.name,
        previous: f,
        next: g?.kind === "one" && g.candidate.id === a.id ? g.candidate : void 0
      };
    }
  }
  let S = {
    id: a.id,
    name: a.name,
    ref: K8e(a.kind, a.id)
  };
  return s.setSendMessagePin(l, S), {
    kind: "proceed",
    pin: S
  };
}

function h(e) {
  switch (e.kind) {
   case "main":
   case "not-found":
   case "ambiguous":
   case "agent-stopped-by-user":
   case "mailbox":
   case "local-session":
   case "cloud-session":
    return null;

   case "agent-live":
   case "agent-stopped":
   case "agent-evicted":
    return {
      kind: "subagent",
      id: e.agentId,
      name: e.agentName
    };
  }
}

var C = p(() => u({
  success: A(!0),
  pin: u({
    name: o().min(1).max(tI),
    id: o().max(1024).refine(e => Dv(e) !== null),
    ref: o().regex(new RegExp(`^${_Ie}$`))
  })
}));

function lGr(e) {
  let t = new Map, r = new Set;
  for (let d of e) if (d.type === "assistant") {
    let n = d.message.content;
    if (!Array.isArray(n)) continue;
    for (let s of n) if (s.type === "tool_use" && s.name === Dn) r.add(s.id);
  } else if (d.type === "user") {
    let n = d.message.content;
    if (!Array.isArray(n)) continue;
    if (n.find(m => m.type === "tool_result" && !m.is_error && r.has(m.tool_use_id)) === void 0) continue;
    let i = C().safeParse(d.toolUseResult);
    if (!i.success) continue;
    t.set(ro(i.data.pin.name), {
      id: i.data.pin.id,
      name: i.data.pin.name,
      ref: i.data.pin.ref
    });
  }
  return Object.fromEntries(t);
}

function Eqo(e, t) {
  let r = lGr(e);
  return zn(r, t) ? null : r;
}

var L = p(() => u({
  name: o().regex(Yrt).refine(e => !eI(e))
})), D = p(() => u({
  status: U([ "async_launched", "completed" ]),
  agentId: o()
}));

function t_n(e, t) {
  let r = new Map, d = new Map;
  for (let n of e) if (n.type === "assistant" && Array.isArray(n.message.content)) {
    for (let s of n.message.content) if (s.type === "tool_use" && (s.name === gt || s.name === _p)) {
      let i = L().safeParse(s.input);
      if (i.success && !t.has(i.data.name)) r.set(s.id, i.data.name);
    }
  } else if (n.type === "user" && Array.isArray(n.message.content)) {
    let [s, ...i] = n.message.content.filter(f => f.type === "tool_result"), m = s !== void 0 && i.length === 0 && !s.is_error ? r.get(s.tool_use_id) : void 0;
    if (m === void 0) continue;
    let a = D().safeParse(n.toolUseResult), l = a.success ? Dv(a.data.agentId) : null;
    if (l !== null) d.set(m, l);
  }
  return d.size > 0 ? new Map([ ...t, ...d ]) : null;
}

export { vqo, lGr, Eqo, t_n, dGr, v1s, E1s, k1s };
