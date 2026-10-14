// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ze } from "./chunk-3pqddg8f.js";

import { tcr, Wt } from "./chunk-84yp45y8.js";

import { I } from "./chunk-5wbhf1bk.js";

import { Aie } from "./chunk-3kb22va7.js";

import { xJn } from "./chunk-1j4tzzzk.js";

import { D } from "./chunk-hmqkrrtz.js";

var S = 500, h = 200;

function bNr({clock: e, transcript: s, queue: t, wakesIdleSession: r = () => !0, hidesFoldedNotices: o = !1}) {
  {
    let n = m(), l = () => {
      let i = n;
      n = m();
      for (let a of [ "held", "denied", "expired", "delivered", "refused" ]) {
        let d = i[a];
        if (d.length === 0) continue;
        let u = d.length;
        s.apply({
          type: "append",
          messages: [ Wt(`Cross-session ${u === 1 ? "message" : `messages (${u})`} ${x(a)}${f(d)}. ${k(a)}`, "warning") ]
        }), t.enqueue({
          mode: "prompt",
          agentId: Ze(),
          value: P(a, u, g(d)),
          ...y(r(), o),
          skipSlashCommands: !0,
          isMeta: !0
        });
      }
      if (i.dropped.length > 0) {
        let a = i.dropped.flatMap(c => c.sends), d = a.length, u = O(i.dropped.map(c => c.dropReason));
        s.apply({
          type: "append",
          messages: [ Wt(`Cross-session ${d === 1 ? "message was" : `messages (${d}) were`} dropped at the recipient session's inbox${f(a)} and not delivered${u ? ` \u2014 ${u}` : ""}. Claude was told not to resend right away.`, "warning") ]
        }), t.enqueue({
          mode: "prompt",
          agentId: Ze(),
          value: T(d, g(a), u),
          ...y(r(), o),
          skipSlashCommands: !0,
          isMeta: !0
        });
      }
    }, p = null, b = () => {
      p?.(), p = e.setTimeout(() => {
        p = null, l();
      }, S);
    };
    return xJn(i => {
      if (i.status === "dropped") {
        if (n.dropped.length < h) n.dropped.push(i);
      } else if (n[i.status].length < h) n[i.status].push(i.sent);
      b();
    }), () => {
      xJn(null), p?.(), p = null;
    };
  }
  return () => {};
}

function m() {
  return {
    held: [],
    denied: [],
    expired: [],
    delivered: [],
    refused: [],
    dropped: []
  };
}

function v(e) {
  return Aie(e.to) ? e.to : "";
}

function f(e) {
  let s = new Map;
  for (let n of e) if (!s.get(n.to)?.handle) s.set(n.to, n);
  let t = [ ...s.values() ], r = tcr(t, n => n.handle ?? ""), o = w(t.map(n => {
    let l = v(n);
    if (!n.handle) return l;
    return r[n.handle] === 1 || l === "" ? `@${n.handle}` : `@${n.handle} at ${l}`;
  }));
  return o === "" ? "" : ` (${o})`;
}

function g(e) {
  let s = w(e.map(v));
  return ` (${s === "" ? "" : `${s}; `}msg_id: ${C(e.map(t => t.msgId), 5)})`;
}

function w(e) {
  let s = D(e.filter(t => t !== ""));
  return s.length === 0 ? "" : `${I(s.length, "recipient")}: ${C(s, 3)}`;
}

function C(e, s) {
  return `${e.slice(0, s).join(", ")}${e.length > s ? ", \u2026" : ""}`;
}

function x(e) {
  switch (e) {
   case "held":
    return "held by the receiving session";

   case "denied":
    return "denied";

   case "expired":
    return "expired without approval";

   case "delivered":
    return "released after approval";

   case "refused":
    return "refused";
  }
}

function k(e) {
  switch (e) {
   case "held":
    return "Claude in that session hasn't seen it. The usual cause is that the two sessions are in different permission modes: a terminal session then asks for approval there, but the desktop app and non-interactive sessions can't ask, so there the message expires undelivered unless the modes come to match. A session can also be set to hold every message.";

   case "denied":
    return "The recipient's user declined it; it was not delivered.";

   case "expired":
    return "It was never approved, so it wasn't delivered and nothing is waiting in that session. Claude was told.";

   case "delivered":
    return "It was approved and released to that session (final delivery is up to their queue).";

   case "refused":
    return "That session is not accepting cross-session messages (the feature is off there, or a setting or policy there refuses them); it was not delivered.";
  }
}

function P(e, s, t) {
  let r = s === 1 ? "Your message to another session" : `${s} of your messages to another session`, o = s === 1 ? "was" : "were", n = s === 1 ? "it" : "them";
  switch (e) {
   case "held":
    return `[Cross-session delivery notice] ${r} ${o} held by that session${t}. NOT delivered: its Claude has not seen ${n}. Do not report ${n} as delivered, do not wait for a reply, and do not resend while held. The usual cause is that the two sessions run in different permission modes: a terminal session then asks its user to approve, but a Claude Desktop or non-interactive session cannot ask, so there the hold expires undelivered unless the modes come to match. A session can also be set to hold every message. Another notice follows on release, denial or expiry. Tell your user what is held and why, or choose another approach.`;

   case "denied":
    return `[Cross-session delivery notice] ${r} ${o} denied by the recipient user${t}. Not delivered to that session's Claude. Do not wait for a reply; continue, or choose another approach.`;

   case "expired":
    return `[Cross-session delivery notice] ${r} ${o} not approved before expiry${t}. Not delivered to that session's Claude, and nothing is waiting there. Do not wait for a reply, and do not resend unprompted: while the two sessions' permission modes differ a resend is only held again. Tell your user what was not delivered and why; send ${n} again, edited if that helps, when they ask.`;

   case "delivered":
    return `[Cross-session delivery notice] ${r} ${o} approved and released to that session${t}.`;

   case "refused":
    return `[Cross-session delivery notice] ${r} ${o} refused${t}: that session is not accepting cross-session messages (the feature is off there, or a setting or policy there refuses them). Not delivered to that session's Claude. Do not wait for a reply and do not resend; tell the user, or choose another approach.`;
  }
}

function O(e) {
  return D(e.map(t => {
    switch (t) {
     case "rate-limited":
      return "you sent faster than that session accepts";

     case "duplicate":
      return "it repeated your previous message";

     case "hop-loop":
     case "hop-runaway":
      return "a relay loop between sessions was cut";

     case "queue-full":
      return "its queue of undelivered peer messages was full";

     case void 0:
      return "";
    }
  })).filter(t => t !== "").join("; ");
}

function T(e, s, t) {
  return `[Cross-session delivery notice] Do not resend now: ${e === 1 ? "one of your messages to another session was" : `${e} of your messages to another session were`} dropped at that session's inbox${s} and NOT delivered${t ? ` (${t})` : ""}. Treat them as unsent. If the content still matters, fold it into ONE later message after you have finished other work; never retry in a loop.`;
}

function y(e, s) {
  return e ? {
    priority: s ? "next" : "later"
  } : {
    passive: !0,
    priority: "next"
  };
}

export { bNr };
