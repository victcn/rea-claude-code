// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { vs } from "./chunk-q6wab2jw.js";

import { zn } from "./chunk-3pqddg8f.js";

import { k_ } from "./chunk-84yp45y8.js";

import { qn } from "./chunk-wgsx43va.js";

import { z6 } from "./chunk-kxf7ma3f.js";

import { po, pc } from "./chunk-vjmbaret.js";

function bWo(e, t) {
  let n = e.clients.findIndex(o => o.name === t);
  if (n === -1) return e;
  let i = e.clients[n];
  if (!i || !vs(i) && i.type !== "needs-auth") return e;
  let s = [ ...e.clients ];
  return s[n] = i.type === "needs-auth" ? {
    ...i
  } : {
    name: t,
    type: "needs-auth",
    config: i.config
  }, {
    ...e,
    clients: s
  };
}

function wge(e, t, n, i) {
  let s = e.mcp.clients.some(l => l.name === t);
  if (!s && i?.appendIfAbsent === !1) return e;
  let o = po(t);
  return {
    ...e,
    mcp: {
      ...e.mcp,
      clients: s ? e.mcp.clients.map(l => l.name === t ? n.client : l) : [ ...e.mcp.clients, n.client ],
      tools: [ ...e.mcp.tools.filter(l => !pc(l, t, o)), ...n.tools ],
      commands: [ ...e.mcp.commands.filter(l => !k_(l, t)), ...n.commands ],
      resources: n.resources ? {
        ...e.mcp.resources,
        [t]: n.resources
      } : e.mcp.resources,
      resourceTemplates: n.resourceTemplates ? {
        ...e.mcp.resourceTemplates,
        [t]: n.resourceTemplates
      } : e.mcp.resourceTemplates
    }
  };
}

function SWo(e, t, n) {
  if (!e.clients.some(s => s.name === t && s.type === "connected")) return e;
  let i = po(t);
  return {
    ...e,
    tools: [ ...e.tools.filter(s => !pc(s, t, i)), ...n ]
  };
}

function Lmn(e, t, n) {
  if (!e.mcp.clients.some(s => s.name === t && s.type === "connected")) return e;
  let i = po(t);
  return {
    ...e,
    mcp: {
      ...e.mcp,
      tools: [ ...e.mcp.tools.filter(s => !pc(s, t, i)), ...n ]
    }
  };
}

function wWo(e, t, n) {
  let i = new Set(e.clients), s = new Map(t.clients.map(c => [ c.name, c ])), o = n;
  for (let c of n.clients) {
    if (!i.has(c)) continue;
    let p = s.get(c.name), a = po(c.name), m = r => pc(r, c.name, a);
    if (p === void 0) {
      o = {
        ...o,
        clients: o.clients.filter(r => r !== c),
        tools: o.tools.filter(r => !m(r))
      };
      continue;
    }
    if (p !== c) o = {
      ...o,
      clients: o.clients.map(r => r === c ? p : r)
    };
    let S = t.tools.filter(m), d = o.tools.filter(m);
    if (S.length === d.length && S.every((r, T) => r === d[T])) continue;
    o = {
      ...o,
      tools: [ ...o.tools.filter(r => !m(r)), ...S ]
    };
  }
  let l = new Set(e.clients.map(c => c.name)), u = new Set(n.clients.map(c => c.name)), f = t.clients.filter(c => !l.has(c.name) && !u.has(c.name));
  if (f.length > 0) {
    let c = f.map(p => [ p.name, po(p.name) ]);
    o = {
      ...o,
      clients: [ ...o.clients, ...f ],
      tools: [ ...o.tools, ...t.tools.filter(p => c.some(([a, m]) => pc(p, a, m))) ]
    };
  }
  return o;
}

function f_t(e, t) {
  return zn(e.config, t) ? e : {
    ...e,
    config: t
  };
}

function b1t(e, t, n) {
  if (e === void 0) return t;
  return qn(e.name, e.config) !== qn(e.name, n) ? void 0 : z6({
    name: e.name,
    config: e.config
  }, t);
}

export { bWo, wge, SWo, Lmn, wWo, f_t, b1t };
