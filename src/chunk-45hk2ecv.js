// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { Y } from "./chunk-kawq2919.js";

import { o, oe, ue } from "./chunk-cvcg6n1z.js";

var Ejs = '<wake reason="external-event"';

function kjs(n) {
  return n.startsWith(Ejs);
}

var A = /^[a-z0-9-]{1,32}$/, S = /^[a-z0-9_.-]{1,64}$/, O = 2048, f = /([a-z][a-z-]*)="([^"\s]{0,256})"/g, w = new Set([ "reason", "current-time" ]), I = new Set([ "source", "kind", "from", "trust", "untrusted-keys" ]), W = p(() => ue(o(), oe()));

function u(n) {
  return n.trim() === "";
}

function MEt(n) {
  if (!kjs(n)) return null;
  let r = n.indexOf(">");
  if (r === -1 || r > O) return null;
  let s = n.slice(5, r);
  if (!u(s.replace(f, " "))) return null;
  for (let e of s.matchAll(f)) if (!w.has(e[1])) return null;
  let t = n.indexOf("<event ", r + 1);
  if (t === -1 || !u(n.slice(r + 1, t))) return null;
  let a = n.indexOf(">", t);
  if (a === -1 || a - t > O) return null;
  let d = n.indexOf("</event>", a + 1);
  if (d === -1) return null;
  let x = d + 8, E = n.indexOf("</wake>", x);
  if (E === -1 || !u(n.slice(x, E))) return null;
  if (!u(n.slice(E + 7))) return null;
  let i = new Map, T = n.slice(t + 6, a);
  if (!u(T.replace(f, " "))) return null;
  for (let e of T.matchAll(f)) {
    if (!I.has(e[1])) return null;
    let h = e[1];
    if (!i.has(h)) i.set(h, e[2]);
  }
  let g = i.get("source"), m = i.get("kind");
  if (g === void 0 || m === void 0 || !A.test(g) || !S.test(m)) return null;
  let l = n.slice(a + 1, d), k = l.indexOf("\x3c!--");
  if (k !== -1) {
    if (!u(l.slice(0, k))) return null;
    let e = l.indexOf("--\x3e", k + 4);
    if (e === -1) return null;
    l = l.slice(e + 3);
  }
  let _ = l.trim();
  if (!_.startsWith("{")) return null;
  let c;
  try {
    c = Y(_);
  } catch {
    return null;
  }
  if (typeof c !== "object" || c === null || Array.isArray(c)) return null;
  let b = W().safeParse(c);
  if (!b.success) return null;
  let v = i.get("from"), y = (i.get("untrusted-keys") ?? "").split(",").filter(e => e !== "");
  return {
    source: g,
    kind: m,
    ...v !== void 0 && {
      from: v
    },
    data: b.data,
    untrustedKeys: y
  };
}

function HEt(n) {
  return n.source === "session-inbox" && n.kind === "message.received";
}

function kAn(n) {
  return n?.kind === "task-notification" && n.subkind === "session-inbox";
}

function Ant(n) {
  return HEt(n) && n.from === "rc_owner" && n.data.sender_kind === "rc_owner";
}

function V9r(n, r) {
  if (!kAn(n)) return;
  let s = MEt(r), t = s !== null && Ant(s) ? s.data.file_id : void 0;
  return typeof t === "string" ? t : void 0;
}

export { Ejs, kjs, MEt, HEt, kAn, Ant, V9r };
