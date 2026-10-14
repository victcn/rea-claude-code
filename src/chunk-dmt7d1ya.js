// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { re } from "./chunk-6ah1819r.js";

import { vs, Cmt } from "./chunk-q6wab2jw.js";

import { Da, qE, k_, Uss, f3t, Ec, Co } from "./chunk-84yp45y8.js";

import { qn } from "./chunk-wgsx43va.js";

import { qk } from "./chunk-bkx9v5fh.js";

import { UE } from "./chunk-tba5gzq4.js";

import { bWo, wge, Lmn, f_t, b1t } from "./chunk-j8fam76f.js";

import { N$ } from "./chunk-jr1trxch.js";

import { E_ } from "./chunk-990gpy2c.js";

import { Sne, z6 } from "./chunk-kxf7ma3f.js";

import { wne } from "./chunk-bgxtjrm8.js";

import { BSe } from "./chunk-1dj3skht.js";

import { fi } from "./chunk-ar8d6cs7.js";

import { po, pc } from "./chunk-vjmbaret.js";

function f() {
  return import.meta.require("./chunk-89c96hkc.js").mcpClientModule();
}

function v(n) {
  fi(n.client).onclose = void 0, f().clearServerCache(n.name, n.config).catch(() => {});
}

function x(n, t, i) {
  return {
    tools: N$(n.tools, e => e.name?.startsWith(i)),
    commands: N$(n.commands, e => k_(e, t)),
    resources: qE(n.resources, t),
    resourceTemplates: qE(n.resourceTemplates, t)
  };
}

class A7e {
  #e;
  constructor(n) {
    this.#e = n;
  }
  static over(n) {
    return new A7e(BSe(n.getState, n.setState, "mcp"));
  }
  get() {
    return this.#e.get();
  }
  markNeedsAuth(n) {
    this.#e.set(t => bWo(t, n));
  }
  async clearNeedsAuth(n) {
    let t = this.get().clients.find(e => e.name === n);
    if (t?.type !== "needs-auth") return;
    let i = await f().peekSettledConnection(n, t.config);
    if (i?.type !== "connected") return;
    this.#e.set(e => ({
      ...e,
      clients: e.clients.map(s => s === t ? Sne(i, t.config) : s)
    }));
  }
  adoptServer(n, t, i) {
    let e = "adopted";
    return this.#e.set(s => {
      if (i?.asked === !0) return wge({
        mcp: s
      }, n, t).mcp;
      let r = s.clients.find(c => c.name === n);
      if (e = H(r, t) ?? "adopted", r === void 0) return s;
      if (e !== "adopted") return w(s, r, e);
      return wge({
        mcp: s
      }, n, G(r, t), {
        appendIfAbsent: !1
      }).mcp;
    }), e;
  }
  markReconnectDiscarded(n, t) {
    this.#e.set(i => {
      let e = i.clients.find(s => s.name === n);
      if (e === void 0 || qn(n, e.config) !== qn(n, t)) return i;
      if (Co(n)) return w(i, e, "disabled");
      if (Ec(n, e.config) !== null) return w(i, e, "policy-blocked");
      if (e.type !== "connected") return i;
      return {
        ...i,
        clients: i.clients.map(s => s === e ? {
          name: n,
          type: "failed",
          config: e.config,
          error: "Its connection was closed while signing in again"
        } : s),
        ...I(i, n)
      };
    });
  }
  swapServerTools(n, t, i) {
    let e = !1;
    return this.#e.set(s => {
      let r = b1t(s.clients.find(l => l.name === n), t, i);
      if (r === void 0) return re(n, "A re-queried tool list was not applied: another server holds the name"), 
      s;
      let c = Lmn({
        mcp: s
      }, n, r);
      return e = c.mcp !== s, c.mcp;
    }), e;
  }
  setSuppressedClaudeAiConnectors(n) {
    this.#e.set(t => f3t(t.suppressedClaudeAiConnectors ?? [], n) ? t : {
      ...t,
      suppressedClaudeAiConnectors: n
    });
  }
  setReservedNameRefusals(n) {
    this.#e.set(t => {
      let i = t.reservedNameRefusals ?? [];
      return i.length === n.length && i.every((s, r) => s.scope === n[r]?.scope && s.name === n[r]?.name) ? t : {
        ...t,
        reservedNameRefusals: n
      };
    });
  }
  addPendingServers(n) {
    this.#e.set(t => {
      let i = O(t, n);
      if (i.length === 0) return t;
      return {
        ...t,
        clients: [ ...t.clients, ...i ]
      };
    });
  }
  reconcileConfiguredServers(n, t, i) {
    this.#e.set(e => {
      let {stale: s, ...r} = Uss(e, n, t);
      i(s);
      let c = O(r, n);
      if (c.length === 0 && s.length === 0) {
        if (e.clientsInitialized) return e;
        return {
          ...e,
          clientsInitialized: !0
        };
      }
      return {
        ...e,
        ...r,
        clientsInitialized: !0,
        clients: [ ...r.clients, ...c ]
      };
    });
  }
  applyIdentityBoundary(n, t) {
    let i = [ ...n, ...t ];
    if (i.length === 0) return;
    this.#e.set(e => {
      let s = i.map(c => [ c, po(c) ]), r = c => s.some(([l, u]) => pc(c, l, u));
      return {
        ...e,
        clients: e.clients.flatMap(c => t.has(c.name) ? [] : n.has(c.name) ? [ {
          name: c.name,
          type: "pending",
          config: c.config
        } ] : [ c ]),
        tools: N$(e.tools, r),
        commands: N$(e.commands, c => i.some(l => k_(c, l))),
        resources: qE(e.resources, i),
        resourceTemplates: qE(e.resourceTemplates, i)
      };
    });
  }
  applyQueuedUpdates(n, t) {
    this.#e.set(i => {
      let e = i;
      for (let s of n) {
        if (s.epoch !== t.currentEpoch && UE(s.config)) {
          if (s.type === "connected") f().detachAndCloseConnection(s);
          continue;
        }
        let r = e.clients.find(d => d.name === s.name), c = K(r, s), l = c === "stands" && r !== void 0 ? L(r, s) : s, {tools: u, commands: S, resources: m, resourceTemplates: A, replaceOnly: g, epoch: J, asked: V, superseded: U, ...Q} = l, o = Q, h = o.type === "disabled" || o.type === "failed", b = h ? u ?? [] : u, T = h ? S ?? [] : S, C = h ? m ?? [] : m, y = h ? A ?? [] : A, M = po(o.name), p = e.clients.findIndex(d => d.name === o.name), a = p !== -1 ? e.clients[p] : void 0, j = o.type === "connected" && a?.type === "connected" && a.client === o.client, R = vs(o) && Ec(o.name, o.config) === "managed-policy";
        if (o.type !== "disabled" && !j && Co(o.name) && !(R && a?.type !== "disabled")) {
          if (R) t.onDoorDenied(o.name);
          if (o.type === "connected") v(o);
          if (t.onOrphanedDisable(o.name), a && a.type !== "disabled" && (a.type !== "connected" || !vs(o))) e = {
            ...e,
            clients: e.clients.map(d => d.name === o.name ? {
              name: o.name,
              type: "disabled",
              config: c === "elsewhere" ? d.config : o.config
            } : d),
            ...x(e, o.name, M)
          };
          continue;
        }
        if (c === "elsewhere" && a !== void 0) {
          if (o.type !== "disabled") {
            if (o.type === "connected") v(o);
            re(o.name, `A late ${o.type} result was dropped: another server holds the name`);
            continue;
          }
          if (a.type === "connected") v(a);
          o = {
            name: o.name,
            type: "disabled",
            config: a.config
          };
        }
        let k = vs(o) ? Ec(o.name, o.config) : null;
        if (k) {
          t.onDoorDenied(o.name);
          let d = o.config;
          if (o.type === "connected") fi(o.client).onclose = void 0; else if (a?.type === "connected") fi(a.client).onclose = void 0, 
          d = a.config;
          if (f().clearServerCache(o.name, d).catch(() => {}), p === -1) continue;
          e = {
            ...e,
            clients: e.clients.map(P => P.name === o.name ? {
              name: o.name,
              type: "failed",
              config: o.config,
              ...E_(k, o.name, o.config)
            } : P),
            ...x(e, o.name, M)
          };
          continue;
        }
        if (g && p !== -1 && (e.clients[p]?.type === "needs-auth" || e.clients[p]?.type === "disabled")) {
          if (o.type === "connected") fi(o.client).onclose = void 0, f().clearServerCache(o.name, o.config).catch(() => {});
          continue;
        }
        if (p === -1 && (g || c === "nowhere" && !U)) {
          if (o.type === "connected") fi(o.client).onclose = void 0, f().clearServerCache(o.name, o.config).catch(() => {});
          if (!g) t.onOrphanedDisable(o.name), re(o.name, `A late ${o.type} result was dropped: no row holds the name`);
          continue;
        }
        if (g && Da() && p !== -1 && qn(o.name, e.clients[p].config) !== qn(o.name, o.config)) {
          if (o.type === "connected") f().detachAndCloseConnection(o);
          continue;
        }
        if (p !== -1 && !Cmt(e.clients[p], o)) {
          if (c === "asked") e = _(e, o);
          continue;
        }
        let B = p === -1 ? [ ...e.clients, o ] : e.clients.map(d => d.name === o.name ? o : d), E = b === void 0 ? e.tools : [ ...N$(e.tools, d => d.name?.startsWith(M)), ...b ], F = T === void 0 ? e.commands : [ ...N$(e.commands, d => k_(d, o.name)), ...T ], z = C === void 0 ? e.resources : C.length > 0 ? {
          ...e.resources,
          [o.name]: C
        } : qE(e.resources, o.name), W = y === void 0 ? e.resourceTemplates : y.length > 0 ? {
          ...e.resourceTemplates,
          [o.name]: y
        } : qE(e.resourceTemplates, o.name);
        e = {
          ...e,
          clients: B,
          tools: E,
          commands: F,
          resources: z,
          resourceTemplates: W
        };
      }
      return e;
    });
  }
}

function O(n, t) {
  let i = new Set(n.clients.map(e => e.name));
  return Object.entries(t).filter(([e]) => !i.has(e)).map(([e, s]) => ({
    name: e,
    type: Co(e) ? "disabled" : "pending",
    config: s
  }));
}

function D(n, t) {
  return n.mcpInfo?.serverName === void 0 ? k_(n, t) : n.mcpInfo.serverName === t;
}

function I(n, t) {
  let i = po(t);
  return {
    tools: N$(n.tools, e => pc(e, t, i)),
    commands: N$(n.commands, e => D(e, t)),
    resources: qE(n.resources, t),
    resourceTemplates: qE(n.resourceTemplates, t)
  };
}

function K(n, t) {
  if (t.asked === !0) return "asked";
  if (n === void 0) return "nowhere";
  return qn(t.name, n.config) === qn(t.name, t.config) ? "stands" : "elsewhere";
}

function L(n, t) {
  let i = {
    name: t.name,
    config: n.config
  };
  return {
    ...f_t(t, n.config),
    ...t.tools !== void 0 && {
      tools: z6(i, t.tools)
    },
    ...t.commands !== void 0 && {
      commands: wne(i, t.commands)
    }
  };
}

function _(n, t) {
  let i = n.clients.find(m => m.name === t.name);
  if (i === void 0 || qn(t.name, i.config) !== qn(t.name, t.config)) return n;
  let e = f_t(i, t.config);
  if (e === i) return n;
  let s = {
    name: t.name,
    config: t.config
  }, r = po(t.name), [c, l] = qk(n.tools, m => pc(m, t.name, r)), [u, S] = qk(n.commands, m => D(m, t.name));
  return {
    ...n,
    clients: n.clients.map(m => m === i ? e : m),
    tools: [ ...l, ...z6(s, c) ],
    commands: [ ...S, ...wne(s, u) ]
  };
}

function H(n, t) {
  let {name: i} = t.client;
  if (n === void 0) return "no-row";
  if (qn(i, n.config) !== qn(i, t.client.config)) return "another-server";
  if (Co(i)) return "disabled";
  if (Ec(i, n.config) !== null) return "policy-blocked";
  return;
}

function w(n, t, i) {
  if (i !== "disabled" && i !== "policy-blocked") return n;
  let {name: e, config: s} = t, r = i === "policy-blocked" ? Ec(e, s) : null;
  if (r === null && t.type === "disabled") return n;
  let c = r === null ? {
    name: e,
    type: "disabled",
    config: s
  } : {
    name: e,
    type: "failed",
    config: s,
    ...E_(r, e, s)
  };
  return {
    ...n,
    clients: n.clients.map(l => l === t ? c : l),
    ...I(n, e)
  };
}

function G(n, t) {
  let i = {
    name: n.name,
    config: n.config
  };
  return {
    ...t,
    client: f_t(t.client, n.config),
    tools: z6(i, t.tools),
    commands: wne(i, t.commands)
  };
}

export { A7e };
