// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Rne } from "./chunk-7f3bx3dq.js";

import { bXe } from "./chunk-9yajep3y.js";

import { SV } from "./chunk-h6xggfqh.js";

import { EQ } from "./chunk-84yp45y8.js";

import { L } from "./chunk-vh1p9t2h.js";

import { INt, ONt } from "./chunk-w4hwgefc.js";

function f(r) {
  return r.replace(/^www\./i, "");
}

function wGt(r) {
  if (r.startsWith("[")) {
    let n = r.indexOf("]");
    return n === -1 ? r : r.slice(0, n + 1);
  }
  let e = r.lastIndexOf(":");
  return e === -1 ? r : r.slice(0, e);
}

function sW(r) {
  let e = INt(r).replace(/\.+(?=$|:)/, "").toLowerCase(), n = wGt(e), o = e.slice(n.length), t = (ONt(n) || n).replace(/\.+$/, "");
  return f(t + o);
}

var d = new RegExp(`^${SV}\\(([^)]+)\\)$`);

function wet(r) {
  let e = new Set, n = [], o = new Set, t = new Map;
  return u(r.alwaysDenyRules, o, t), u(r.alwaysAllowRules, e, t, n, o), {
    allowed: e,
    denied: o,
    allowedRaw: n,
    sourceOf: t
  };
}

function gZn(r, e) {
  return r.has(e) || r.has(wGt(e));
}

function WSt(r, e) {
  let n = sW(e);
  if (!gZn(r.denied, n)) return;
  return {
    behavior: "deny",
    message: `Claude in Chrome is denied on ${e}.`,
    decisionReason: {
      type: "rule",
      rule: {
        source: r.sourceOf.get(n) ?? r.sourceOf.get(wGt(n)) ?? "session",
        ruleBehavior: "deny",
        ruleValue: {
          toolName: SV,
          ruleContent: e
        }
      }
    }
  };
}

function u(r, e, n, o, t) {
  for (let [a, l] of Object.entries(r)) for (let c of l ?? []) {
    let s = d.exec(c);
    if (s?.[1]) {
      let i = sW(s[1]);
      if (t && gZn(t, i)) continue;
      if (!e.has(i)) e.add(i), n.set(i, a), o?.push(s[1]);
    }
  }
}

function gSn(r) {
  return [ "back", "forward" ].includes(r.trim().toLowerCase());
}

var p = /^(?:https?|wss?|ftp|file)\.*(?=[\\?#]|$)/i;

function zSt(r) {
  let e = r.replace(/[\t\n\r]/g, "").replace(/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, ""), n;
  try {
    if (n = new URL(e), n.protocol !== "http:" && n.protocol !== "https:") {
      if (!/^(localhost|[a-z0-9-]+\.[a-z0-9.-]+):\d+(?=$|[/?#])/i.test(e)) return;
      n = void 0;
    }
  } catch {}
  if (!n) {
    if (/^[^/\\?#]*:(?=$|[/\\?#])/.test(e)) return;
    try {
      n = new URL(`https://${e}`);
    } catch {
      return;
    }
    if (p.test(bXe(e))) return;
  }
  if (!n.host || n.username || n.password) return;
  return {
    host: n.host,
    url: n.href
  };
}

function hSn(r) {
  let e = new URL(r.url);
  return e.protocol === "http:" && e.port === "" ? `${e.host}:80` : e.host;
}

function hZn(r) {
  let e = zSt(r);
  return e && {
    ...e,
    host: hSn(e)
  };
}

function m5o(r) {
  if (!Array.isArray(r.actions)) return;
  for (let e of r.actions) {
    if (!L(e) || typeof e.name !== "string") continue;
    let n = L(e.input) ? e.input : {};
    if (Rne.has(e.name) && EQ(e.name, n)) continue;
    if (e.name === "navigate" && typeof n.url === "string" && (n.url.trim().toLowerCase() === "back" || n.url.trim().toLowerCase() === "forward")) continue;
    if (e.name === "navigate" && typeof n.url === "string" || typeof n.tabId === "number") return {
      toolName: e.name,
      input: n
    };
  }
  return;
}

export { wGt, sW, wet, gZn, WSt, gSn, zSt, hSn, hZn, m5o };
