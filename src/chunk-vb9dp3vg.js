// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { b } from "./chunk-hwdwjvh8.js";

import { l } from "./chunk-b0z4bv3v.js";

import { J, kx } from "./chunk-nvtwm272.js";

import { t } from "./chunk-kawq2919.js";

import { re } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { VP } from "./chunk-xywp7esx.js";

import { Ut } from "./chunk-8yperama.js";

import { Da, hrt, qE, rAt, k_, I3, bLe, Tpr, Ec, ist, dV, dst, Co, ks } from "./chunk-84yp45y8.js";

import { ops } from "./chunk-584kx1w1.js";

import { qn } from "./chunk-wgsx43va.js";

import { zre, Zqe, GQ, ocs, Kst, UMn, Zoo, scs } from "./chunk-ghdkaeg7.js";

import { kV } from "./chunk-yd16nhae.js";

import { ohe, Or, Nx, UE, met, tSn, nSn } from "./chunk-tba5gzq4.js";

import { xUt, IBo } from "./chunk-xxkq67jn.js";

import { Qte } from "./chunk-vajkg63v.js";

import { eTe, B$ } from "./chunk-wyhwh65a.js";

import { wge, SWo, Lmn, f_t, b1t } from "./chunk-j8fam76f.js";

import { N$ } from "./chunk-jr1trxch.js";

import { XYo } from "./chunk-sa8877nd.js";

import { ehe, the } from "./chunk-fnre177t.js";

import { E_, pwn } from "./chunk-990gpy2c.js";

import { CT } from "./chunk-k1mzsadm.js";

import { Sne } from "./chunk-kxf7ma3f.js";

import { po, pc } from "./chunk-vjmbaret.js";

function X() {
  return import.meta.require("./chunk-89c96hkc.js").mcpClientModule();
}

function DNr(n, e, o, S) {
  if (Object.hasOwn(e, n)) return e[n];
  if (o && !ist.has(o.scope)) return o;
  return S ? S(n) : o ?? null;
}

function EBo(n, e) {
  if (!n.clients.some(o => o.name === e)) return n;
  return {
    ...n,
    clients: n.clients.map(o => o.name === e ? {
      name: e,
      type: "disabled",
      config: o.config
    } : o),
    tools: I3(n.tools, e)
  };
}

function A6n(n, e) {
  let o = po(e);
  return {
    tools: n.tools.filter(S => pc(S, e, o)),
    commands: n.commands.filter(S => k_(S, e)),
    resources: n.resources[e],
    resourceTemplates: n.resourceTemplates[e]
  };
}

function HWe(n, e) {
  let o = e.type !== "failed" ? Ec(n, e.config) : void 0;
  if (o === "managed-policy") return N(n, e.config, o);
  if (Co(n) && !pwn(e)) return {
    name: n,
    type: "disabled",
    config: e.config
  };
  return o ? N(n, e.config, o) : void 0;
}

function N(n, e, o) {
  return {
    name: n,
    type: "failed",
    config: e,
    ...E_(o, n, e)
  };
}

function oe(n, e) {
  return e.asked || n === void 0 || Sne(e.client, n.config) === e.client ? e : CT(n.config, e);
}

function se(n, e, o) {
  let {incoming: S, result: w, outcome: A} = o;
  if (A === "refused") {
    let M = S.asked ? w.client : f_t(w.client, e.config);
    return M === w.client ? w : {
      ...w,
      client: M
    };
  }
  if (Sne(w.client, e.config) === w.client) return w;
  let C = oe(e, S);
  if (C.client.type === "disabled") return C;
  let v = HWe(n, C.client);
  return v ? {
    ...C,
    client: v,
    tools: [],
    commands: []
  } : C;
}

function nge(n, e, o) {
  let {getAppState: S, setAppState: w, getDynamicMcpState: A, setDynamicMcpState: C} = n, v = () => {
    if (o.client.type === "connected") X().detachAndCloseConnection(o.client).catch(() => {});
  }, M = S().mcp.clients.find(p => p.name === e), a = A().clients.find(p => p.name === e);
  if (!M && !a) return v(), "dropped";
  let R = qn(e, o.client.config), P = p => p !== void 0 && qn(e, p.config) !== R;
  if (P(M) || P(a)) return t(`[MCP] ${e}: dropping a settlement whose slot config changed mid-flight`), 
  v(), "dropped";
  if (met(o.client.config, o.attemptEpoch)) return t(`[MCP] ${e}: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)`), 
  v(), "superseded";
  let T = oe(M ?? a, o), d = T, _ = "applied";
  if (T.client.type !== "disabled") {
    let p = HWe(e, T.client);
    if (p) {
      if (v(), p.type === "failed") X().dropDiscoveryEntry(e, T.client.config).catch(() => {});
      d = {
        client: p,
        tools: [],
        commands: [],
        resources: [],
        attemptEpoch: o.attemptEpoch
      }, _ = "refused";
    }
  }
  if (w(p => {
    let E = wge(p, e, d, {
      appendIfAbsent: d.client.config.type !== "sdk"
    }), U = !!d.resources && d.resources.length > 0, L = !!d.resourceTemplates && d.resourceTemplates.length > 0;
    return U && L ? E : {
      ...E,
      mcp: {
        ...E.mcp,
        resources: U ? E.mcp.resources : qE(E.mcp.resources, e),
        resourceTemplates: L ? E.mcp.resourceTemplates : qE(E.mcp.resourceTemplates, e)
      }
    };
  }), !a) return _;
  let c = po(e), h = A(), H = M === void 0 ? d : se(e, a, {
    incoming: o,
    result: d,
    outcome: _
  });
  return C({
    ...h,
    clients: h.clients.map(p => p.name === e ? H.client : p),
    tools: [ ...h.tools.filter(p => !pc(p, e, c)), ...H.tools ]
  }), _;
}

function Vpn(n) {
  if (!Da()) return;
  let {getAppState: e, setAppState: o, getDynamicMcpState: S, setDynamicMcpState: w, storageV5: A, credentials: C, force: v = !1, spareUnchangedFrom: M} = n;
  eTe(A);
  let a = X(), R = Ut();
  if (!a.mcpIdentityChangedSinceLastCheck() && !v) return R.headlessConnectorMountInFlight;
  let P = !v || !hrt(ohe()), T = S(), d = [ ...e().mcp.clients, ...T.clients ], _ = new Set, c = new Set, h = new Set, H = new Set;
  if (M) {
    for (let s of d) H.add(s.name);
    for (let s of d) if (!M.has(s) || s.type === "pending") H.delete(s.name);
  }
  for (let s of d) {
    if (!UE(s.config) || H.has(s.name)) {
      h.add(qn(s.name, s.config));
      continue;
    }
    if (a.disposeServerConnectionDetached(s.name, s.config), s.config.scope === "claudeai") {
      c.add(s.name);
      continue;
    }
    if (s.type !== "disabled") _.add(s.name);
  }
  a.evictAllMcpMemosOnIdentityChange(h, nSn(d)), kV().clear();
  let p = Object.create(null), E = new Set, U = n.getHostOwnedConfigs?.() ?? T.configs;
  for (let s of d) {
    if (!_.has(s.name) || !P) continue;
    let y = p[s.name] ?? DNr(s.name, U, s.config, dV);
    if (!y) {
      E.add(s.name);
      continue;
    }
    let k = p[s.name] ??= y;
    if (k !== s.config && qn(s.name, k) !== qn(s.name, s.config)) t(`[MCP] ${s.name}: appState and dynamic-store rows disagree on config at the identity boundary \u2014 converging both under the ${Object.hasOwn(U, s.name) ? "host's" : "appState row's"} config and re-dialing it`, {
      level: "warn"
    });
  }
  let L = new Map, z = dst() && P, j = Object.create(null);
  for (let [s, y] of Object.entries(p)) {
    if (z && Tpr(y)) {
      j[s] = y, delete p[s];
      continue;
    }
    let k = Ec(s, y);
    if (k) L.set(s, N(s, y, k)), delete p[s];
  }
  let W = [ ..._, ...c ];
  if (W.length > 0) {
    let s = W.map(r => [ r, po(r) ]), y = r => s.some(([x, I]) => pc(r, x, I)), k = r => c.has(r.name) ? [] : _.has(r.name) ? [ !P || E.has(r.name) ? tSn(r.name, r.config) : L.get(r.name) ?? {
      name: r.name,
      type: "pending",
      config: p[r.name] ?? j[r.name] ?? r.config
    } ] : [ r ];
    o(r => ({
      ...r,
      mcp: {
        ...r.mcp,
        clients: r.mcp.clients.flatMap(k),
        tools: N$(r.mcp.tools, y),
        commands: N$(r.mcp.commands, x => W.some(I => k_(x, I))),
        resources: qE(r.mcp.resources, W),
        resourceTemplates: qE(r.mcp.resourceTemplates, W)
      }
    })), w({
      ...T,
      clients: T.clients.flatMap(k),
      tools: T.tools.filter(r => !y(r))
    });
  }
  let u, D;
  if (z) {
    let y = IBo({
      getClients: () => e().mcp.clients,
      getSuppressedPluginServers: () => e().mcp.suppressedPluginMcpServers ?? [],
      applyMcpUpdate: r => {
        let x = new Set;
        if (o(B => {
          let Z = r(B.mcp), ee = new Set(Z.clients.map(Y => Y.name));
          return x = new Set(B.mcp.clients.filter(Y => !ee.has(Y.name)).map(Y => Y.name)), 
          {
            ...B,
            mcp: Z
          };
        }), x.size === 0) return;
        let I = S();
        if (!I.clients.some(B => x.has(B.name))) return;
        let F = [ ...x ].map(B => [ B, po(B) ]);
        w({
          ...I,
          clients: I.clients.filter(B => !x.has(B.name)),
          tools: I.tools.filter(B => !F.some(([Z, ee]) => pc(B, Z, ee)))
        });
      }
    }, A, C);
    y.settled.catch(() => {}), D = y.mounted.catch(() => "mounted");
    let k = y.mounted.then(() => {}, r => t(`MCP connector refetch after account switch failed: ${l(r)}`, {
      level: "warn"
    })).finally(() => {
      if (R.headlessConnectorMountInFlight === k) R.headlessConnectorMountInFlight = void 0;
    });
    R.headlessConnectorMountInFlight = u = k;
  }
  if (_.size === 0 || !P) return u;
  let K = s => {
    nge(n, s.client.name, s);
  }, Q = {
    getClients: () => [ ...e().mcp.clients, ...S().clients ],
    getSuppressedPluginServers: () => e().mcp.suppressedPluginMcpServers ?? [],
    applyMcpUpdate: s => o(y => ({
      ...y,
      mcp: s(y.mcp)
    }))
  }, q = s => {
    a.getMcpToolsCommandsAndResources(K, s, A, C).catch(y => t(`MCP re-dial after account switch failed: ${l(y)}`, {
      level: "warn"
    })).finally(() => {
      xUt(s, Q, A, K).catch(y => t(`MCP re-dial retry after account switch failed: ${l(y)}`, {
        level: "warn"
      }));
    });
  };
  if (q(p), Object.keys(j).length === 0 || !D) return u;
  let V = Or(), O = D.then(s => {
    if (s === "superseded" || !Nx(V)) return;
    let y = Object.create(null);
    for (let [k, r] of Object.entries(j)) {
      let x = Ec(k, r);
      if (x) K({
        client: N(k, r, x),
        tools: [],
        commands: [],
        attemptEpoch: V
      }); else y[k] = r;
    }
    if (Object.keys(y).length > 0) q(y);
  }).catch(s => t(`MCP re-dial of held claude.ai proxy entries after account switch failed: ${l(s)}`, {
    level: "warn"
  })), G = Promise.all([ u, O ]).then(() => {}).finally(() => {
    if (R.headlessConnectorMountInFlight === G) R.headlessConnectorMountInFlight = void 0;
  });
  return R.headlessConnectorMountInFlight = G, G;
}

function LNr(n, e, o, S) {
  let w = o?.type === "connected" && o.client === n.client, A = o !== void 0 && o.type !== "disabled" && qn(n.name, o.config) === qn(n.name, e);
  return !w && (!S || !A);
}

var ie = 5, ae = 1e3;

function kBo(n) {
  let {getAppState: e, getDynamicMcpState: o, now: S = Date.now} = n, w = new WeakSet, A = new WeakMap, C = new WeakMap, v = (M, a, R) => {
    let P = a > 1 ? Kst(a - 1) - R : 0, T = [ ...e().mcp.clients, ...o().clients ].some(d => d.type === "connected" && d.client === M.client);
    if (P <= 0 || !T || n.isControlReconnectInFlight(M.name)) return 0;
    try {
      n.onHeldOff?.(a, P);
    } catch (d) {
      t(`MCP reconnect hold-off observer failed for ${M.name}: ${l(d)}`, {
        level: "warn"
      });
    }
    return re(M.name, `${M.config.type} transport closed again soon after it connected: reconnecting in ${P}ms`), 
    P;
  };
  return M => {
    for (let a of M) {
      if (a.type === "connected") C.set(a.client, a);
      if (a.type !== "connected" || w.has(a.client) || !le(a.config)) continue;
      w.add(a.client);
      let R = S(), P = T => {
        if (ks() || n.isRunEnding()) return;
        a.cleanup().catch(() => {});
        let d = Math.max(0, S() - R), _ = d < ocs ? (A.get(a.client) ?? 0) + 1 : 0;
        (async () => {
          let c = v(a, _, d), h = n.sleep ?? ce;
          if (c > 0) await h(c);
          let H = () => C.get(a.client) ?? a;
          for (let p = 0; c > 0 && p < ie && await X().hasUnsettledDial(H().name, H().config); p++) await h(ae);
          await de(n, H(), T, _, c > 0, (p, E) => A.set(p.client, E));
        })().catch(c => t(`MCP reconnect after close failed for ${a.name}: ${l(c)}`, {
          level: "warn"
        }));
      };
      if (ops(a, () => P(!1)), ehe(a)) setImmediate(P, !0);
    }
  };
}

function ce(n) {
  return J(n, void 0, {
    unref: !0
  });
}

function le(n) {
  return n.type !== void 0 && n.type !== "stdio" && n.type !== "sdk";
}

async function de(n, e, o, S, w, A) {
  let {getAppState: C, getDynamicMcpState: v, storageV5: M, credentials: a, isControlReconnectInFlight: R, isRunEnding: P, onReconnected: T, sleep: d = ce, random: _ = Math.random} = n, {name: c, config: h} = e, H = Or(), p = () => ks() || P() || Or() !== H && UE(h), E = () => C().mcp.clients.find(u => u.name === c) ?? v().clients.find(u => u.name === c), U = e, L = () => E() === U, z = u => {
    nge(n, c, u);
  }, j = X(), W = GQ + UMn;
  for (let u = 1; u <= W; u++) {
    let D = u - GQ;
    if (u > 1) await d(D > 0 ? kx({
      baseMs: Zoo,
      capMs: scs,
      floorMs: Zoo / 2,
      attempt: D - 1,
      random: _
    }) : Kst(u - 1));
    if (p() || !L()) return;
    let K = Or();
    if (D > 0) {
      let F = {
        name: c,
        type: "pending",
        config: h
      };
      if (HWe(c, F)) {
        z({
          client: F,
          tools: [],
          commands: [],
          attemptEpoch: K
        });
        return;
      }
      if (await j.hasUnsettledDial(c, h)) {
        if (u < W) {
          re(c, `Background reconnect attempt ${D}/${UMn} skipped: another reconnect to this server is in progress; will try again at the next attempt`);
          continue;
        }
        if (!p() && L() && !R(c)) re(c, `Reconnect gave up after ${u} attempts: another reconnect to this server is still in progress; leaving it to finish`), 
        m("mcp_slow_reconnect", "gave_up", {
          attempts: u,
          found_closed: o
        });
        return;
      }
      if (p() || !L()) return;
    } else {
      let F = {
        name: c,
        type: "pending",
        config: h,
        reconnectAttempt: u,
        maxReconnectAttempts: GQ
      };
      z({
        client: F,
        ...A6n(C().mcp, c),
        attemptEpoch: K
      }), U = F;
    }
    if (!L() || R(c)) return;
    re(c, u === 1 ? `${h.type} transport ${o ? "had already closed when wired" : "closed"} \u2014 reconnecting (attempt 1/${GQ})` : D > 0 ? `Background reconnect attempt ${D}/${UMn}` : `Reconnect attempt ${u}/${GQ}`);
    let Q = w && u === 1 ? await j.peekSettledConnection(c, h) : void 0, q = Q?.type === "connected" && !ehe(Q) ? Sne(Q, h) : void 0, V = {
      ...q !== void 0 ? {
        client: q,
        ...A6n(C().mcp, c)
      } : await j.reconnectMcpServerImpl(c, h, M, a, {
        keepConnectionInUse: !0
      }).catch(F => ({
        client: {
          name: c,
          type: "failed",
          config: h,
          error: l(F)
        },
        tools: [],
        commands: []
      })),
      attemptEpoch: K
    }, O = V.client.type === "connected" ? V.client : void 0, G = O !== void 0 && the(await j.peekSettledConnection(c, h), O), s = () => {
      if (O && LNr(O, h, E(), G && !P())) j.detachAndCloseConnection(O).catch(() => {});
    };
    if (p() || !L() || R(c)) {
      s();
      return;
    }
    let y = V.keptConnectionInUse === !0 && O?.toolsListError !== void 0 && HWe(c, O) === void 0;
    if (O && G && !y) {
      if (A(O, S + u - 1), z(V), E() === O) {
        if (O === q) Qte(O, (F, B) => {
          ne(n, F, B, O.config);
        }, M).catch(F => t(`MCP tools refresh over a kept connection failed for ${c}: ${l(F)}`, {
          level: "warn"
        }));
        re(c, `Reconnected (attempt ${u})`), g(D > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", {
          attempts: u,
          found_closed: o,
          young_closes: S
        }), T(O);
      }
      return;
    }
    s();
    let k = O && {
      name: c,
      type: "failed",
      config: h,
      error: y ? "Its tools could not be listed" : "Connection closed again while reconnecting"
    }, r = k ?? V.client, x = k ? {
      ...k,
      errorCode: "ConnectionClosed"
    } : r, I = rAt(x);
    if (u === GQ || D > 0 && (!I || u === W)) {
      if (re(c, D <= 0 && I ? `Still failing after ${u} attempts` : `Reconnect gave up after ${u} attempts: ${r.type}`), 
      z({
        client: r,
        tools: r.type === "needs-auth" ? B$(c, h) : [],
        commands: [],
        attemptEpoch: K
      }), E() !== r) return;
      if (r.type === "needs-auth") {
        f(D > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", "needs_auth", {
          attempts: u,
          found_closed: o,
          young_closes: S
        });
        return;
      }
      if (D > 0) {
        m("mcp_slow_reconnect", I ? "gave_up" : "not_retryable", {
          attempts: u,
          found_closed: o
        });
        return;
      }
      if (m("mcp_auto_reconnect", "exhausted", {
        attempts: u,
        found_closed: o,
        young_closes: S,
        goes_slow: I
      }), !I) return;
      U = r, re(c, `Reconnect attempts spent; retrying in the background, up to ${UMn} more times`);
      continue;
    }
    re(c, D > 0 ? `Background reconnect attempt ${D} did not connect (${r.type})` : `Reconnect attempt ${u} did not connect (${r.type}); next in ${Kst(u)}ms`);
  }
}

var te = new WeakMap;

function TBo(n) {
  return te.get(n);
}

function ne(n, e, o, S) {
  let {setAppState: w, getDynamicMcpState: A, setDynamicMcpState: C} = n, v = !1, M = !1, a;
  w(d => {
    let _ = d.mcp.clients.find(H => H.name === e), c = b1t(_, o, S);
    if (c === void 0) return M = !0, d;
    let h = Lmn(d, e, c);
    return v = h !== d, a = v && _ !== void 0 ? {
      row: _,
      tools: c
    } : void 0, h;
  });
  let R = A(), P = R.clients.find(d => d.name === e), T = b1t(P, o, S);
  if (T === void 0) M = !0; else {
    let d = SWo(R, e, T);
    if (d !== R) C(d), v = !0;
  }
  if (a !== void 0) if (P?.type === "pending") te.set(a.row, a.tools); else te.delete(a.row);
  if (M) re(e, "A re-queried tool list was not applied: another server holds the name");
  return v;
}

function ABo(n) {
  return (e, o, S) => ne(n, e, o, S);
}

function CBo(n) {
  let {getAppState: e, getDynamicMcpState: o} = n.stores, S = new WeakSet, w = new WeakMap;
  return A => {
    for (let C of A) {
      if (C.type === "connected") w.set(C.client, C);
      if (C.type !== "connected" || S.has(C.client)) continue;
      if (S.add(C.client), !C.capabilities?.tools?.listChanged) continue;
      let v = C.name;
      X().onMcpToolListChanged(C, async M => {
        re(v, M === zre ? "Synthesized tools refetch after listen-stream reopen (no notification received)" : M === Zqe ? "Refreshing tools for a tools/list_changed notification received before this handler was registered" : "Received tools/list_changed notification, refreshing tools");
        let a = e().mcp.clients.find(c => c.name === v) ?? o().clients.find(c => c.name === v), R = w.get(C.client) ?? C, P = a !== void 0 && qn(v, a.config) === qn(v, R.config) ? Sne(R, a.config) : R;
        w.set(C.client, P);
        let T = await Qte(P, (c, h) => {
          ne(n.stores, c, h, P.config);
        }, n.storageV5);
        if (T.status === "kept-previous") {
          re(v, "tools/list failed after list_changed \u2014 keeping previous tool set");
          return;
        }
        let d = T.newTools.length, _ = c => i("tengu_mcp_list_changed", {
          mcpServerKeyHash: VP(v),
          type: b("tools"),
          cause: bLe(M),
          previousCount: c,
          newCount: d,
          ...XYo(C)
        });
        if (T.previousToolsPromise) T.previousToolsPromise.then(c => _(c.length), () => _()); else _();
      });
    }
  };
}

export { DNr, EBo, A6n, HWe, nge, Vpn, LNr, kBo, TBo, ABo, CBo };
