// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { CDo } from "./chunk-3pqddg8f.js";

import { J } from "./chunk-nvtwm272.js";

import { i } from "./chunk-hedpgw9m.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { d, re } from "./chunk-6ah1819r.js";

import { WR } from "./chunk-s2t7g8m9.js";

import { Av, vs, Cmt } from "./chunk-q6wab2jw.js";

import { vi } from "./chunk-jnzpsr0d.js";

import { mo } from "./chunk-fhf0t7vm.js";

import { Ut } from "./chunk-8yperama.js";

import { Da, Bkt, I0e, hRn, _Rn, qE, nAt, rqe, i6t, k_, Vde, oAt, aV, f3t, oCt, cF, Ec, Vk, Co } from "./chunk-84yp45y8.js";

import { Dce } from "./chunk-584kx1w1.js";

import { _r, aUe } from "./chunk-35kwehd0.js";

import { Or, Nx, met } from "./chunk-tba5gzq4.js";

import { N$ } from "./chunk-jr1trxch.js";

import { Mx } from "./chunk-zn95zmtg.js";

import { E_, pwn } from "./chunk-990gpy2c.js";

import { g3o } from "./chunk-zxrtm1b2.js";

import { g$e } from "./chunk-1tsh11bz.js";

import { po, pc } from "./chunk-vjmbaret.js";

function b() {
  return import.meta.require("./chunk-89c96hkc.js").mcpClientModule();
}

function D(n) {
  let r = performance.now();
  try {
    let e = b();
    if (aUe("mcp_client_module_load_ms") === void 0) _r("mcp_client_module_load_ms", performance.now() - r, r);
    return e;
  } catch (e) {
    d(e), t(`[MCP] ${n} connect error: ${e}`);
    return;
  }
}

var RBo = 1e3, RUt = [ 500, 1500, 4e3 ], I = RUt.reduce((n, r) => n + r, 0);

function xBo(n) {
  let {regularMcpConfigs: r, claudeaiConfigPromise: e, state: p, storageV5: c, credentials: s, knownListings: l, dialInConnect: o, onDialStart: u, dialFirst: f, leaveAlwaysLoadWaitTo: m} = n, M = Or(), C = a.MCP_CONNECTION_NONBLOCKING !== !1;
  CDo(C);
  let y = C;
  async function R() {
    mo("before_mcp_connect_user"), mo("before_mcp_connect_connector");
    let P = NNr({
      configs: r,
      label: "regular",
      nonBlocking: C,
      dialInConnect: o,
      onDialStart: u,
      dialFirst: f,
      state: p,
      storageV5: c,
      credentials: s,
      knownListings: l,
      leaveAlwaysLoadWaitTo: m
    }).then(() => mo("after_mcp_connect_user")), h = B(C, () => e.then(g => x({
      claudeaiConfigs: g,
      regularMcpConfigs: r,
      state: p,
      deferConnect: y,
      storageV5: c,
      epoch: M
    })).then(g => g === "superseded" ? [] : g), "claude.ai connectors").then(() => mo("after_mcp_connect_connector"));
    await Promise.all([ P, h ]);
  }
  return {
    connect: R
  };
}

function PBo(n) {
  return a.CLAUDE_CODE_MCP_ALWAYS_LOAD_JOIN_BEFORE_INPUT === !0 && Boolean(n) && !WR();
}

function NNr(n) {
  let {configs: r, label: e, nonBlocking: p, state: c, storageV5: s, credentials: l, knownListings: o, dialInConnect: u, onDialStart: f, dialFirst: m, leaveAlwaysLoadWaitTo: M} = n, C = (g, S) => g.alwaysLoad === !0 || o !== void 0 && Object.hasOwn(o, S), y = M === void 0 ? {} : Mx(r, (g, S) => g.alwaysLoad === !0 && g.scope === "dynamic" && !Av(g) && !(o !== void 0 && Object.hasOwn(o, S))), R = Mx(r, (g, S) => C(g, S) && !Object.hasOwn(y, S)), P = Mx(r, (g, S) => !C(g, S)), h = Object.keys(R).length > 0;
  if (Object.keys(y).length > 0) {
    let g = O(y, `${e}-required`, c, !1, s, l, o, f, m);
    M?.(() => B(!1, () => g, "--mcp-config alwaysLoad servers"));
  }
  return Promise.all([ ...h ? [ B(!1, () => O(R, `${e}-required`, c, !1, s, l, o, f, m), "--mcp-config alwaysLoad servers") ] : [], B(p, () => O(P, e, c, p && !u, s, l, o, f, m), "--mcp-config servers") ]).then(() => {});
}

function O(n, r, e, p = !1, c, s, l, o, u) {
  let f = Object.keys(n);
  if (f.length === 0) return [];
  e.applyMcpUpdate(h => ({
    ...h,
    clients: [ ...h.clients, ...Object.entries(n).map(([g, S]) => ({
      name: g,
      type: "pending",
      config: S
    })) ]
  }));
  let m = new Map, M = f.map(h => new Promise(g => m.set(h, g))), C = Promise.withResolvers(), y = new Set, R = h => {
    for (let g of Object.keys(h)) y.add(g);
    xUt(h, e, c, void 0, C.promise).catch(g => t(`[MCP] ${r} retry error: ${g}`)).finally(() => {
      for (let g of Object.keys(h)) y.delete(g);
    });
  }, P = () => {
    let h = D(r);
    if (!h) {
      for (let S of m.values()) S();
      return;
    }
    if (o !== void 0 && f.some(S => !Object.hasOwn(l ?? {}, S))) o();
    let g = u === void 0 ? n : {
      ...Mx(n, (S, w) => u(w)),
      ...n
    };
    h.getMcpToolsCommandsAndResources(S => {
      C6n(e, S), g3o();
      let {name: w} = S.client;
      if (m.get(w)?.(), !y.has(w)) {
        let k = Mx(n, (v, _) => _ === w);
        if (Kpn(k, e).length > 0) R(k);
      }
    }, g, c, s, l, !0).catch(S => t(`[MCP] ${r} connect error: ${S}`)).finally(() => {
      for (let S of m.values()) S();
      C.resolve(performance.now()), R(Mx(n, (S, w) => !y.has(w)));
    });
  };
  if (p) setImmediate(P); else P();
  return M;
}

function C6n(n, r) {
  let {client: e, tools: p, commands: c, attemptEpoch: s} = r, l, o = "applied", u = met(e.config, s);
  return n.applyMcpUpdate(f => {
    o = "applied", l = void 0;
    let m = f.clients.find(C => C.name === e.name);
    if (!m || !b().areMcpConfigsEqual(m.config, e.config)) {
      if (e.type === "connected") re(e.name, m ? "applyConnectionResult: disposing orphaned connect (slot config changed mid-flight)" : "applyConnectionResult: disposing orphaned connect (slot removed mid-flight)"), 
      l = () => T(e);
      return o = "dropped", f;
    }
    if (u) {
      if (re(e.name, "applyConnectionResult: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)"), 
      e.type === "connected") l = () => {
        b().detachAndCloseConnection(e).catch(() => {});
      };
      return o = "superseded", f;
    }
    let M = Da() && e.type !== "failed" && e.type !== "disabled" ? Ec(e.name, e.config) : null;
    if (Da() && M !== "managed-policy" && !pwn(e) && Co(e.name) && e.type !== "disabled") {
      let C = e.type === "connected" && m.type === "connected" && m.client === e.client;
      if (e.type === "connected" && !C) re(e.name, "applyConnectionResult: disposing connect that settled after a disable"), 
      l = () => T(e);
      if (o = "refused", m.type === "disabled" || m.type === "connected" && vs(e)) return f;
      return E(f, {
        name: e.name,
        type: "disabled",
        config: m.config
      });
    }
    if (M) {
      if (e.type === "connected") re(e.name, `applyConnectionResult: disposing connect that settled after a ${M} deny`);
      return l = () => {
        if (e.type === "connected") T(e);
        b().dropDiscoveryEntry(e.name, e.config).catch(() => {});
      }, o = "refused", E(f, {
        name: e.name,
        type: "failed",
        config: m.config,
        ...E_(M, e.name, e.config)
      });
    }
    if (!Cmt(m, e)) return o = "dropped", f;
    return {
      ...f,
      clients: f.clients.map(C => C.name === e.name ? e : C),
      tools: vi([ ...f.tools, ...p ], "name"),
      commands: vi([ ...f.commands, ...c ], "name")
    };
  }), l?.(), o;
}

function Kpn(n, r, e = !0) {
  let p = r.getClients();
  return Object.entries(n).filter(([c, s]) => {
    let l = p.find(o => o.name === c);
    return l !== void 0 && (nAt(l) || e && rqe(l)) && b().areMcpConfigsEqual(l.config, s);
  });
}

function $Nr(n) {
  let r = e => {
    let p = Ut().transientRetryPasses;
    for (let c of n) {
      let s = (p.get(c) ?? 0) + e;
      if (s > 0) p.set(c, s); else p.delete(c);
    }
  };
  return r(1), {
    [Symbol.dispose]: () => r(-1)
  };
}

async function xUt(n, r, e, p = s => C6n(r, s), c) {
  let s = () => Kpn(n, r);
  if (s().length === 0) return;
  using l = $Nr(Object.keys(n));
  let o = Or(), {signal: u} = r, f = performance.now(), m = 0;
  for (let [C, y] of RUt.entries()) {
    let R = C === RUt.length - 1;
    if (await J(y, u), c !== void 0 && R) {
      let v = await c + I + m;
      await J(Math.max(0, v - performance.now()), u);
    }
    if (u?.aborted) return;
    if (Or() !== o) {
      t("[MCP] Retry: identity changed during backoff, stopping (these rows belong to the previous account)");
      return;
    }
    let P = Kpn(n, r, R);
    if (P.length === 0) {
      if (s().length > 0) continue;
      t("[MCP] Retry: all remote servers recovered, stopping");
      return;
    }
    t(`[MCP] Retry attempt ${C + 1}: ${P.length} transiently-failed remote server(s)`);
    let h = [];
    for (let v of P) {
      if (!await b().discardMemoizedConnectResult(...v)) continue;
      let [_, L] = v, j = Ec(_, L);
      if (j) {
        p({
          client: {
            name: _,
            type: "failed",
            config: L,
            ...E_(j, _, L)
          },
          tools: [],
          commands: [],
          attemptEpoch: o
        });
        continue;
      }
      h.push(v);
    }
    if (h.length === 0 || u?.aborted) continue;
    let g = 0, S = 0, w = performance.now(), k = Math.round(w - f);
    if (await b().getMcpToolsCommandsAndResources(v => {
      if (!u?.aborted) {
        if (p(v), v.client.type === "connected") g++; else if (i6t(v.client)) S++;
      } else if (v.client.type === "connected") b().detachAndCloseConnection(v.client).catch(() => {});
    }, Object.fromEntries(h), e), m += performance.now() - w, !u?.aborted) i("tengu_mcp_connect_retry_attempt", {
      attempt: C + 1,
      delayMs: y,
      sincePassStartMs: k,
      retryable: P.length,
      dialed: h.length,
      recovered: g,
      stillRetryable: S
    });
    if (s().length === 0) {
      t("[MCP] Retry: all remote servers recovered, stopping");
      return;
    }
  }
  let M = s();
  if (M.length > 0) t(`[MCP] Retry: ${M.length} remote server(s) still failed after all retries: ${M.map(([C]) => C).join(", ")}`);
}

async function B(n, r, e) {
  if (n) {
    Promise.resolve(r()).catch(() => {}), t(`[MCP] ${e} running fully async (nonblocking)`);
    return;
  }
  let p = r(), c = Date.now(), s = g$e(), l;
  if (Array.isArray(p)) l = p; else {
    let m, M = await Promise.race([ p.catch(C => (d(C), "failed")), new Promise(C => {
      m = setTimeout(y => y("deadline"), s, C);
    }) ]);
    if (clearTimeout(m), M === "deadline") {
      t(`[MCP] ${e} config fetch not ready after ${s}ms \u2014 proceeding; background connection continues`);
      return;
    }
    if (M === "failed") {
      t(`[MCP] ${e} batch failed to start \u2014 proceeding without waiting on it`);
      return;
    }
    l = M;
  }
  let o = Math.max(0, s - (Date.now() - c));
  if (l.length === 0) return;
  let u = D(e);
  if (!u) return;
  let f = await u.awaitEachWithDeadline(l, o);
  if (f > 0) t(`[MCP] ${e}: ${f}/${l.length} not ready after ${s}ms \u2014 proceeding; background connection continues`);
}

function IBo(n, r, e) {
  hRn(), _Rn();
  let p = Or(), c = (async () => {
    let s = await I0e(e);
    if (!Nx(p)) return A("list fetch");
    let {allowed: l, blocked: o} = cF(s);
    if (Bkt(), o.length > 0) t(`[MCP] claude.ai connectors blocked by enterprise policy after account switch: ${o.join(", ")}`);
    let u = await N(n, r), f = Object.fromEntries([ ...Object.entries(u), ...n.getClients().filter(m => m.config.scope !== "claudeai").map(m => [ m.name, m.config ]) ]);
    return x({
      claudeaiConfigs: l,
      regularMcpConfigs: f,
      state: n,
      deferConnect: !1,
      storageV5: r,
      epoch: p,
      restorablePlugins: u
    });
  })();
  return {
    mounted: c.then(s => s === "superseded" ? s : "mounted"),
    settled: c.then(s => s === "superseded" ? [] : Promise.all(s)).then(() => {})
  };
}

function A(n) {
  return t(`[MCP] claude.ai connector list superseded by an account switch (${n}) \u2014 not mounting`), 
  "superseded";
}

async function x(n) {
  if (!Nx(n.epoch)) return A("list fetch");
  let r = await U(n);
  if (!Nx(n.epoch)) return A("dedup");
  return [ ...F(n.restorablePlugins ?? {}, r.suppressedPlugins, n.state, n.storageV5), ...z(r, n.state, n.deferConnect, n.storageV5) ];
}

async function N(n, r) {
  let e = n.getSuppressedPluginServers();
  if (e.length === 0) return {};
  let {servers: p} = await Vk({}, {
    storageV5: r
  }), c = {}, s = new Set;
  for (let l of e) {
    let o = p[l];
    if (o && o.pluginSource !== void 0) c[l] = o; else s.add(l);
  }
  if (s.size > 0) t(`[MCP] Dropping ${s.size} suppressed plugin server(s) whose plugin is no longer installed/enabled: ${[ ...s ].join(", ")}`), 
  n.applyMcpUpdate(l => ({
    ...l,
    suppressedPluginMcpServers: (l.suppressedPluginMcpServers ?? []).filter(o => !s.has(o))
  }));
  return c;
}

function F(n, r, e, p) {
  let c = new Set(e.getClients().map(u => u.name)), s = new Set, l = {};
  for (let [u, f] of Object.entries(n)) {
    if (r.has(u)) continue;
    if (s.add(u), !c.has(u)) l[u] = f;
  }
  if (s.size === 0) return [];
  e.applyMcpUpdate(u => ({
    ...u,
    suppressedPluginMcpServers: (u.suppressedPluginMcpServers ?? []).filter(f => !s.has(f))
  }));
  let o = Object.keys(l);
  if (o.length > 0) t(`[MCP] Restoring ${o.length} plugin server(s) no longer duplicated by claude.ai connectors after account switch: ${o.join(", ")}`);
  return O(l, "plugin-restore", e, !1, p);
}

async function U(n) {
  let {claudeaiConfigs: r, regularMcpConfigs: e, state: p} = n, c = new Set;
  if (Object.keys(r).length > 0) {
    let l = new Set;
    for (let o of Object.values(r)) {
      let u = aV(o);
      if (u) l.add(u);
    }
    for (let [o, u] of Object.entries(e)) {
      if (!o.startsWith("plugin:")) continue;
      let f = aV(u);
      if (f && l.has(f)) c.add(o);
    }
    if (c.size > 0) {
      t(`[MCP] Lazy dedup: suppressing ${c.size} plugin server(s) that duplicate claude.ai connectors: ${[ ...c ].join(", ")}`);
      for (let o of p.getClients()) {
        if (!c.has(o.name) || !(vs(o) || o.type === "pending")) continue;
        if (o.type === "connected") Dce(o, void 0), b().clearServerCache(o.name, o.config).catch(() => {}); else b().disposeServerConnectionDetached(o.name, o.config);
      }
      p.applyMcpUpdate(o => {
        let {clients: u, tools: f, commands: m, resources: M} = o;
        u = u.filter(y => !c.has(y.name)), f = f.filter(y => !y.mcpInfo || !c.has(y.mcpInfo.serverName));
        for (let y of c) m = Vde(m, y), M = oAt(M, y);
        let C = [ ...(o.suppressedPluginMcpServers ?? []).filter(y => !c.has(y)), ...c ];
        return {
          ...o,
          clients: u,
          tools: f,
          commands: m,
          resources: M,
          suppressedPluginMcpServers: C
        };
      });
    }
  }
  let s = Mx(e, (l, o) => !o.startsWith("plugin:"));
  return {
    ...await oCt(r, s),
    suppressedPlugins: c
  };
}

function z({servers: n, suppressed: r}, e, p, c) {
  return e.applyMcpUpdate(s => f3t(s.suppressedClaudeAiConnectors ?? [], r) ? s : {
    ...s,
    suppressedClaudeAiConnectors: r
  }), O(n, "claudeai", e, p, c);
}

function E(n, r) {
  let e = po(r.name);
  return {
    ...n,
    clients: n.clients.map(p => p.name === r.name ? r : p),
    tools: N$(n.tools, p => pc(p, r.name, e)),
    commands: N$(n.commands, p => k_(p, r.name)),
    resources: qE(n.resources, r.name),
    resourceTemplates: qE(n.resourceTemplates, r.name)
  };
}

function T(n) {
  if (Da()) Dce(n, void 0);
  n.cleanup().catch(() => {}), b().clearServerCache(n.name, n.config).catch(() => {});
}

export { RBo, RUt, xBo, PBo, NNr, C6n, Kpn, $Nr, xUt, IBo };
