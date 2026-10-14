// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { gn } from "./chunk-yxennhe9.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { Me } from "./chunk-2v9tfgc3.js";

import { eo } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b } from "./chunk-hwdwjvh8.js";

import { Ye, Ve, x, j, l, W } from "./chunk-b0z4bv3v.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { d } from "./chunk-6ah1819r.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { p } from "./chunk-jkzenvsk.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { TP, Iho, HZt, Mdt, bvr, Nho, QUn, ZUn, eBn, Ud } from "./chunk-9tdwgnpn.js";

import { rA, KP, gE } from "./chunk-xywp7esx.js";

import { Es } from "./chunk-q6wab2jw.js";

import { ar } from "./chunk-nnrb0acr.js";

import { imt } from "./chunk-dd98x6x7.js";

import { BS } from "./chunk-ac1gm9w7.js";

import { hpe } from "./chunk-b47tzzqx.js";

import { td, YD, lV } from "./chunk-84yp45y8.js";

import { qk } from "./chunk-bkx9v5fh.js";

import { c4 } from "./chunk-kmph7cxf.js";

import { iXn, fjt } from "./chunk-vc0e1zan.js";

import { mhe, eer, ter, KHe } from "./chunk-t21b4wjt.js";

import { khe, $2t } from "./chunk-ke05hm6b.js";

import { Qte } from "./chunk-vajkg63v.js";

import { fB } from "./chunk-fdtwr731.js";

import { j$ } from "./chunk-y5x27aqc.js";

import { Wx } from "./chunk-pses58nm.js";

import { Ys } from "./chunk-7fcp0cw9.js";

import { pc, fA, zs } from "./chunk-vjmbaret.js";

import { tq, eOo } from "./chunk-3rbd48rp.js";

import { o, u, U, A } from "./chunk-cvcg6n1z.js";

import { Is } from "./chunk-p35rdtee.js";

import { N } from "./chunk-hmqkrrtz.js";

import { hostname as gt } from "os";

import { dirname as ht, join as St } from "path";

var xe = 1e4, Ie = 3, He = 6e4;

class T extends Error {
  unavailable;
  name="PassthroughMcpUnavailableError";
  constructor(e, n, i) {
    super(n, i);
    this.unavailable = e;
  }
}

function JFo(e) {
  let n = e.ops ?? je(), i = e.dialLatch ?? $2t(), c = Object.keys(e.configs), s = new Map, m = new Map, v = new WeakSet, C = Me(), y = Date.now(), g, P = !1, O = () => {}, k = new Promise(r => {
    O = r;
  }), R, te = Date.now(), w = () => g !== void 0;
  function F() {
    if (P) return;
    if (P = !0, R !== void 0) clearTimeout(R), R = void 0;
    let r = [ ...m.values() ], a = f => N(r, h => h === f);
    O({
      configured: c.length,
      connected: a("connected"),
      cached: a("cached"),
      failed: a("failed"),
      needsAuth: a("needs-auth"),
      disabled: a("disabled"),
      blocked: a("blocked"),
      excluded: a("excluded"),
      unreported: c.length - m.size,
      settleMs: Date.now() - y
    }), oe([ ...s ].filter(([, f]) => f.handle.type === "cached").map(([f]) => f));
  }
  async function oe(r) {
    let a = async S => {
      G();
      let M = s.get(S);
      if (M && !w()) await ie(S, M).catch(() => {}), G();
    }, f = S => n.dialConcurrency(e.configs[S]), h = r.filter(S => s.has(S));
    await Promise.all(qk(h, S => f(S).kind === "local").filter(S => S.length > 0).map(S => BS(S, a, {
      concurrency: f(S[0]).limit
    })));
  }
  function B() {
    try {
      C.emit();
    } catch (r) {
      d(r);
    }
  }
  function D(r, a) {
    let f = s.get(r);
    if (f) s.set(r, {
      ...f,
      ...a
    });
  }
  function be(r, a) {
    let f = s.get(r.name), h = le(r.name, a);
    if (s.set(r.name, {
      handle: r,
      tools: h,
      dialing: f?.dialing,
      listing: void 0,
      consecutiveDialFailures: 0,
      everConnected: f?.everConnected === !0 || r.type === "connected"
    }), r.type === "connected") {
      if (h.length === 0) D(r.name, {
        listing: V(r.name, r)
      });
      re(r.name, r);
    } else if (P) oe([ r.name ]);
    if (f !== void 0 || P) B();
  }
  function re(r, a) {
    let f = s.get(r);
    if (!f || w()) return;
    if (f.handle !== a) D(r, {
      handle: a,
      everConnected: !0
    }), D(r, {
      listing: V(r, a)
    }), B();
    if (!v.has(a) && a.capabilities?.tools?.listChanged) v.add(a), n.onToolListChanged(a, async () => {
      await V(r, a);
    });
  }
  function V(r, a) {
    let f = !1;
    return n.refreshTools(a, (h, S) => {
      if (s.get(r)?.handle === a && !w()) D(r, {
        tools: le(r, S),
        listing: void 0
      }), f = !0, B();
    }, e.storageV5).then(() => f, h => (t(`[deviceBridge] passthrough MCP tools refresh failed for ${r}: ${j(h).message}`), 
    !1));
  }
  function I(r, a) {
    let f = s.get(r);
    if (!f || w()) return;
    s.delete(r), n.dispose(r, f.handle.config), n.cleanup([ f.handle ]), t(`[deviceBridge] passthrough MCP server ${r} left the pool (${a})`), 
    B();
  }
  function G() {
    let r = Date.now();
    if (r - te >= He) te = r, n.refreshPolicy();
    for (let [a, f] of s) if (!n.allowedByPolicy(a, f.handle.config)) I(a, "denied by managed policy");
  }
  function ie(r, a) {
    if (a.dialing) return a.dialing;
    if (i.shouldSkip(r)) return Promise.reject(new T("server", "MCP server failed to connect recently; not retrying yet"));
    let f = n.ensureConnected(a.handle).then(h => {
      if (se(r, f), i.recordSuccess(r), w() || !s.has(r)) throw n.cleanup([ h ]), new T("server", "MCP server is no longer offered by this machine");
      return D(r, {
        consecutiveDialFailures: 0
      }), re(r, h), h;
    }, h => {
      if (se(r, f), K(h)) throw I(r, "needs authentication"), h;
      i.recordFailure(r);
      let S = s.get(r), M = (S?.consecutiveDialFailures ?? 0) + 1;
      if (D(r, {
        consecutiveDialFailures: M
      }), M >= Ie && S?.everConnected !== !0) I(r, "repeated dial failures"); else if (s.has(r)) n.dispose(r, a.handle.config);
      throw h;
    });
    return D(r, {
      dialing: f
    }), f;
  }
  function se(r, a) {
    if (s.get(r)?.dialing === a) D(r, {
      dialing: void 0
    });
  }
  async function Ae(r, {signal: a, deadline: f}) {
    let h = s.get(r)?.listing;
    while (h !== void 0) {
      let S = await khe(h, {
        signal: a,
        timeoutMs: Math.max(0, f - Date.now()),
        serverName: r,
        context: "device tool call"
      }).catch(E => {
        if (Ve(E)) throw E;
        throw new T("server", "MCP server connected too late for this call", {
          cause: E
        });
      }), M = s.get(r);
      if (S || M?.listing === void 0) return;
      if (M.listing !== h) {
        h = M.listing;
        continue;
      }
      if (M.handle.type === "connected") D(r, {
        listing: V(r, M.handle)
      });
      throw new T("server", "MCP server did not list its tools");
    }
  }
  async function Re(r, {signal: a, timeoutMs: f}) {
    let h = s.get(r);
    if (w() || !h) throw new T("server", "MCP server is not available on this machine");
    try {
      return await khe(ie(r, h), {
        signal: a,
        timeoutMs: f,
        serverName: r,
        context: "device tool call"
      });
    } catch (S) {
      if (Ve(S) || S instanceof T) throw S;
      if (K(S)) throw de(S);
      throw t(`[deviceBridge] passthrough MCP dial failed for ${r}: ${j(S).message}`), 
      new T("server", "MCP server could not be reached for this call", {
        cause: S
      });
    }
  }
  function ae(r, a) {
    G();
    let f = s.get(r);
    if (!f || w()) throw new T("server", "MCP server is not available on this machine");
    let h = f.tools.find(S => Le(S) === a);
    if (!h) throw new T("tool", "MCP tool is not offered by this machine");
    if (h.mcpInfo?.effectiveMaxPermission === "blocked") throw new T("tool", "MCP tool is blocked on this machine by the organization");
  }
  async function De(r, a, {signal: f, deadline: h}) {
    ae(r, a);
    let S = await Re(r, {
      signal: f,
      timeoutMs: Math.max(0, h - Date.now())
    });
    if (await Ae(r, {
      signal: f,
      deadline: h
    }), ae(r, a), s.get(r)?.handle !== S) throw new T("server", "MCP server was reconnected during this call; retry");
    if (h - Date.now() <= 0) throw new T("server", "MCP server connected too late for this call");
    return S;
  }
  async function Oe(r, a, f, {signal: h, deadline: S, imageLimits: M}) {
    let E = Ys(h, {
      timeoutMs: Math.max(0, S - Date.now()),
      refTimer: !0
    }), q = L => h.aborted ? new Ye(`MCP tool call on '${r}' aborted`) : E.signal.aborted ? new x(`MCP server "${r}" did not answer the call within its deadline`, "MCP passthrough call deadline") : L;
    try {
      let L = await n.callTool(a, f, {
        signal: E.signal,
        imageLimits: M
      }).catch(X => {
        throw q(X);
      });
      if (L.isError) throw "urlElicitationDeclined" in L ? new T("tool", "MCP tool needs a consent step in a browser on this machine, which a served call cannot show") : q(new x("MCP tool call on this machine ended without a result", "MCP passthrough call ended without a result"));
      return L;
    } finally {
      E.cleanup();
    }
  }
  function Ne(r, a) {
    if (!K(a)) return a;
    return I(r, "needs authentication"), de(a);
  }
  function ke({client: r, tools: a}) {
    if (w() || m.get(r.name) === "dropped") {
      n.cleanup([ r ]);
      return;
    }
    if (!Object.hasOwn(e.configs, r.name)) return;
    switch (r.type) {
     case "connected":
     case "cached":
      m.set(r.name, r.type), be(r, a);
      break;

     case "failed":
      m.set(r.name, r.type), I(r.name, "failed");
      break;

     case "needs-auth":
      m.set(r.name, r.type), I(r.name, "needs authentication");
      break;

     case "disabled":
      m.set(r.name, r.type), I(r.name, "disabled");
      break;

     case "pending":
      break;

     default:
    }
    if (m.size >= c.length) F();
  }
  n.policySettled().then(() => {
    if (w()) return;
    R = setTimeout(F, e.settleTimeoutMs ?? xe);
    let r = Is(e.configs, (a, f) => {
      if (m.get(f) === "dropped") return !1;
      if (n.needsLocalPrompts(a)) return m.set(f, "excluded"), !1;
      let h = n.allowedByPolicy(f, a);
      if (!h) m.set(f, "blocked");
      return h;
    });
    return n.discover(ke, r, e.storageV5);
  }).catch(r => {
    t(`[deviceBridge] passthrough MCP discovery failed: ${j(r).message}`);
  }).finally(() => {
    F(), ce(r => w() || m.get(r) === "dropped");
  });
  function ce(r = () => !0) {
    for (let a of c.filter(r)) n.dispose(a, e.configs[a]);
  }
  return {
    settled: k,
    servers() {
      return G(), c.flatMap(r => {
        let a = s.get(r);
        return a ? [ {
          name: r,
          scope: a.handle.config.scope,
          tools: a.tools,
          status: a.handle.type
        } ] : [];
      });
    },
    subscribe: C.subscribe,
    async callTool(r, a, {signal: f, timeout: h, imageLimits: S}) {
      let M = Date.now() + h, E = async q => {
        let L = await De(r, a.name, {
          signal: f,
          deadline: M
        });
        try {
          return await Oe(r, L, a, {
            signal: f,
            deadline: M,
            imageLimits: S
          });
        } catch (X) {
          if (q && X instanceof KP) return E(!1);
          throw Ne(r, X);
        }
      };
      return E(!0);
    },
    toolTimeoutMs: r => n.toolTimeoutMs(e.configs[r]),
    dropServer(r) {
      if (w() || !Object.hasOwn(e.configs, r)) return;
      if (m.set(r, "dropped"), s.has(r)) I(r, "dropped by the caller"); else n.dispose(r, e.configs[r]);
      if (m.size >= c.length) F();
    },
    stop() {
      return g ??= (async () => {
        if (R !== void 0) clearTimeout(R), R = void 0;
        C.clear();
        let r = [ ...s.values() ].map(a => a.handle);
        s.clear(), F(), ce(), await n.cleanup(r);
      })(), g;
    }
  };
}

function je() {
  let e = import.meta.require("./chunk-89c96hkc.js").mcpClientModule();
  return {
    policySettled: () => Promise.all([ Wx(), imt() ]).then(() => {}),
    discover: (n, i, c) => e.getMcpToolsCommandsAndResources(n, i, c),
    ensureConnected: n => e.ensureConnectedClient(n),
    onToolListChanged: (n, i) => e.onMcpToolListChanged(n, i),
    refreshTools: Qte,
    callTool: (n, i, {signal: c, imageLimits: s}) => e.callMCPTool({
      client: n,
      tool: i.name,
      args: i.arguments ?? {},
      meta: i._meta,
      signal: c,
      imageLimits: s,
      hasResultSizeAnnotation: !0,
      storageV5: void 0,
      credentials: void 0
    }),
    cleanup: n => e.cleanupConnectedMcpClients(n),
    dispose: (n, i) => e.disposeServerConnectionDetached(n, i),
    refreshPolicy: ar,
    allowedByPolicy: lV,
    needsLocalPrompts: n => e.isFirstPartyDesignServerConfig(n),
    dialConcurrency: n => e.isLocalMcpServer(n) ? {
      kind: "local",
      limit: e.getMcpServerConnectionBatchSize()
    } : {
      kind: "remote",
      limit: e.getRemoteMcpServerConnectionBatchSize()
    },
    toolTimeoutMs: n => e.getMcpToolTimeoutMs(n)
  };
}

function Le(e) {
  return e.mcpInfo?.toolName ?? e.name;
}

function K(e) {
  return e instanceof rA || e !== null && typeof e === "object" && "mcpErrorSource" in e && e.mcpErrorSource === "user_auth";
}

function de(e) {
  return new T("server", "MCP server needs authentication on this machine", {
    cause: e
  });
}

function le(e, n) {
  return n.filter(i => i.mcpInfo !== void 0 && pc(i, e));
}

var me = Iho, J = HZt;

class H extends x {
  verdict;
  constructor(e, n, i) {
    super(n, i, e.code);
    this.verdict = e;
    this.name = "PassthroughCallError";
  }
}

function QFo(e, n) {
  return e?.onToolVerdict?.({
    kind: "refused",
    code: "not_served"
  }, n.message), {
    result: !1,
    message: n.message,
    errorCode: 1
  };
}

function ZFo(e, n, i) {
  let c = new H({
    kind: "refused",
    code: "not_served"
  }, n, i);
  throw e?.onToolVerdict?.(c.verdict, c.message), c;
}

function eUo(e, n, i, c) {
  let s = new Set(c.values()), m = J.filter(v => !s.has(v));
  return async (v, C) => {
    if (C.remoteCall === void 0) throw new H({
      kind: "refused",
      code: "invalid_request"
    }, ue, ue);
    let y = e.toolTimeoutMs(n), {onToolVerdict: g} = C.remoteCall, P = await e.callTool(n, {
      name: i,
      arguments: Es(v, m)
    }, {
      signal: C.abortController.signal,
      timeout: y,
      imageLimits: {
        ...td(C.options.mainLoopModel),
        allowWebp: !1
      }
    }).catch(O => {
      let k = $e(O, n);
      if (k instanceof H) g?.(k.verdict, k.message);
      throw k;
    });
    return {
      data: P.content,
      ...(P._meta || P.structuredContent) && {
        mcpMeta: {
          ...P._meta && {
            _meta: j$(P._meta)
          },
          ...P.structuredContent && {
            structuredContent: P.structuredContent
          }
        }
      }
    };
  };
}

var ue = "MCP passthrough tools run only for a remote tool call; the call did not run";

function $e(e, n) {
  if (Ve(e) || e instanceof H) return e;
  if (e instanceof gE) return new gE(`MCP server "${n}" on this machine returned an error for the call (it reached the server and may have had effects): ${e.message}`, "MCP passthrough tool returned an error", e.mcpMeta);
  if (Ue(e)) return new H({
    kind: "refused",
    code: "not_served"
  }, `MCP server "${n}" on this machine needs a consent step in a browser there before this tool can run; the call did not run`, "MCP passthrough call needs URL consent on this machine");
  if (e instanceof T) return new H({
    kind: "refused",
    code: "not_served"
  }, `MCP server "${n}" on this machine: ${e.message}; the call did not run`, e.message);
  return t(`[deviceBridge] passthrough MCP call on ${n} failed: ${j(e).message}`), 
  new H({
    kind: "failed",
    code: "tool_error"
  }, `MCP server "${n}" on this machine gave no usable result for the call (timeout, lost connection, or a protocol-level error); it may have run and had effects`, "MCP tool call failed on this machine");
}

var Be = -32042;

function Ue(e) {
  return e !== null && typeof e === "object" && "code" in e && e.code === Be;
}

var Ge = Nho;

var We = QUn - 262144, ze = bvr, qe = 65536, Xe = 256, Ke = 512, Je = {
  enterprise: 0,
  managed: 1,
  local: 2,
  user: 3,
  dynamic: 4,
  project: 5,
  claudeai: 6,
  agent: 7
}, he = new Set([ "enterprise", "managed" ]);

async function tUo(e, n) {
  let i = Se(e), c = await Promise.all(i.map(y => Promise.all(y.tools.map(g => nt(y.name, g, n.target))))), s = Qe(i, c, n.configured), {tools: m, dropped: v, byServer: C} = i.reduce((y, g, P) => {
    let O = Pe(g.scope) ? {
      reason: "enterprise_scope"
    } : s.server(g);
    return (c[P] ?? []).reduce((k, R) => Ze(k, R, O, s, n), y);
  }, {
    announced: new Set,
    bytes: 0,
    tools: [],
    dropped: [],
    byServer: new Map
  });
  return {
    tools: m,
    dropped: v,
    byServer: C
  };
}

function Qe(e, n, i) {
  let c = Se([ ...e, ...i.filter(g => !e.some(P => P.name === g.name)) ]), s = new Set(c.filter(g => he.has(g.scope)).map(g => g.name)), m = [ ...s ].map(g => `${tq(fA(g))}_`), v = (g, P) => !s.has(g) && m.some(O => `${P}_`.startsWith(O)), C = fe(c.map(g => [ tq(fA(g.name)), {
    server: g.name,
    admin: s.has(g.name)
  } ])), y = fe(n.flat().map(g => [ tq(g.name), {
    server: g.server,
    admin: s.has(g.server),
    rawName: g.rawName
  } ]));
  return {
    server: g => eOo(g.name) || v(g.name, tq(fA(g.name))) ? {
      reason: "collision"
    } : pe(C.get(tq(fA(g.name))) ?? [], g.name, P => P.server === g.name),
    tool: g => ter(g.name) ? {
      reason: "service_reserved"
    } : !KHe(g.name) || eOo(g.name) || v(g.server, tq(g.name)) ? {
      reason: "collision"
    } : pe(y.get(tq(g.name)) ?? [], g.server, P => P.server === g.server && P.rawName === g.rawName)
  };
}

function pe(e, n, i) {
  let c = e.find(s => s.admin) ?? (e.length === 1 ? e[0] : void 0);
  if (c === void 0) return {
    reason: "alias_collision",
    contenders: e.map(s => s.server).filter(s => s !== n)
  };
  return i(c) ? void 0 : {
    reason: "collision"
  };
}

function fe(e) {
  return e.reduce((n, [i, c]) => {
    let s = n.get(i) ?? [];
    if (!s.some(m => m.server === c.server)) n.set(i, [ ...s, c ]);
    return n;
  }, new Map);
}

function Ze(e, n, i, c, {isDenied: s, serve: m}) {
  let v = i ?? c.tool(n) ?? (n.tool.mcpInfo?.effectiveMaxPermission === "blocked" ? {
    reason: "permission_ceiling"
  } : s(n.tool) ? {
    reason: "deny_rule"
  } : et(n, e));
  if ("reason" in v) return e.dropped.push({
    server: n.server,
    tool: n.rawName,
    ...v
  }), e;
  e.announced.add(n.name), e.bytes += v.bytes, e.tools.push(m({
    ...n,
    definition: v.definition,
    wireArguments: v.wireArguments
  }));
  let C = e.byServer.get(n.server);
  if (C === void 0) C = [], e.byServer.set(n.server, C);
  return C.push(v.definition), e;
}

function et({name: e, definition: n, wireArguments: i}, {announced: c, bytes: s}) {
  if (i === "reserved_argument") return {
    reason: "reserved_argument"
  };
  if (e.length > Ge) return {
    reason: "name_length"
  };
  if (c.has(e)) return {
    reason: "collision"
  };
  if (n === void 0) return {
    reason: "definition_error"
  };
  let m = Buffer.byteLength(_(n));
  if (m > qe) return {
    reason: "definition_size"
  };
  if (!Mdt(n.inputSchema, eBn)) return {
    reason: "schema_depth"
  };
  if (s + m > We) return {
    reason: "announce_budget"
  };
  if (c.size >= ze) return {
    reason: "announce_count"
  };
  return {
    definition: n,
    bytes: m,
    wireArguments: i
  };
}

function Se(e) {
  return e.map((n, i) => ({
    server: n,
    index: i,
    rank: tt(n.scope)
  })).sort((n, i) => n.rank - i.rank || n.index - i.index).map(n => n.server);
}

function tt(e) {
  return Je[e] ?? Number.MAX_SAFE_INTEGER;
}

async function nt(e, n, i) {
  let c = n.mcpInfo?.toolName ?? n.name, s = ot(e, c), m = st(n.inputJSONSchema), v = m === "reserved_argument" ? fjt() : m;
  try {
    return {
      server: e,
      rawName: c,
      name: s,
      tool: n,
      definition: await ct(s, n, i, v),
      wireArguments: m
    };
  } catch (C) {
    return t(`[deviceBridge] passthrough cannot describe '${s}': ${j(C).message}`, {
      level: "error"
    }), {
      server: e,
      rawName: c,
      name: s,
      tool: n,
      definition: void 0,
      wireArguments: m
    };
  }
}

function ot(e, n) {
  return zs(e, n).slice(5);
}

function ge(e) {
  return `${e}_arg`;
}

var rt = new Set([ "$schema", "$comment", "type", "title", "description", "properties", "required", "additionalProperties", "unevaluatedProperties", "$defs", "definitions", "default", "examples", "minProperties", "maxProperties" ]), it = new Set([ "$ref", "$dynamicRef", "$recursiveRef", "$anchor", "$dynamicAnchor", "$recursiveAnchor", "$id" ]);

function st(e) {
  let n = e?.properties, i = e?.required, c = new Set([ ...typeof n === "object" && n !== null ? Object.keys(n) : [], ...Array.isArray(i) ? i.filter(y => typeof y === "string") : [] ]), s = J, m = me;
  if (m.some(y => c.has(ge(y)))) return "reserved_argument";
  let v = s.filter(y => c.has(y));
  if (v.length === 0) return fjt();
  if (v.some(y => !m.includes(y)) || e === void 0 || !ye(e.type) || Object.keys(e).some(y => !rt.has(y)) || at(e) || v.some(y => typeof n === "object" && n !== null && Object.hasOwn(n, y) && !Ce(Reflect.get(n, y)))) return "reserved_argument";
  let C = new Map(v.map(y => [ ge(y), y ]));
  return [ ...C.keys() ].some(y => s.includes(y)) ? "reserved_argument" : C;
}

function at(e) {
  let n = (i, c) => {
    if (c > eBn) return !0;
    if (Array.isArray(i)) return i.some(s => n(s, c + 1));
    if (typeof i !== "object" || i === null) return !1;
    return Object.entries(i).some(([s, m]) => it.has(s) || n(m, c + 1));
  };
  return n(e, 0);
}

async function ct(e, n, i, c) {
  let s = await n.description({}, {
    isNonInteractiveSession: !1,
    toolPermissionContext: Ud(),
    tools: []
  }), m = pt(n), v = YD();
  return {
    name: e,
    description: s.length <= Math.min(v, ZUn) ? s : Q(s, Math.min(v, ZUn - ve.length)),
    inputSchema: dt(n, c),
    ...m && {
      annotations: m
    },
    _meta: ft(n, i)
  };
}

var ve = "\u2026 [truncated]";

function Q(e, n) {
  return e.length > n ? ne(e, n) + ve : e;
}

function dt(e, n) {
  let i = e.inputJSONSchema;
  if (i === void 0 || !ye(i.type)) return {
    type: "object",
    properties: {}
  };
  let c = typeof i.properties === "object" && i.properties !== null && !Array.isArray(i.properties) ? mt(i.properties) : {};
  return lt({
    ...i,
    type: "object",
    properties: c
  }, n);
}

function lt(e, n) {
  if (n.size === 0) return e;
  let i = new Map([ ...n ].map(([m, v]) => [ v, m ])), c = eo(TP(e.properties, (m, v) => i.get(v) ?? v), (m, v) => {
    let C = n.get(v);
    return C === void 0 ? m : {
      ...m,
      description: ut(C, m)
    };
  }), s = Array.isArray(e.required) ? e.required.map(m => i.get(m) ?? m) : void 0;
  return {
    ...e,
    properties: c,
    ...s && {
      required: s
    }
  };
}

function ut(e, n) {
  let i = Reflect.get(n, "description"), c = `(The tool's own "${e}" parameter, passed under this name.)`;
  return typeof i === "string" && i !== "" ? `${i} ${c}` : c;
}

function ye(e) {
  return e === void 0 || e === "object" || Array.isArray(e) && e.includes("object");
}

function mt(e) {
  return Object.fromEntries(Object.entries(e).flatMap(([n, i]) => Ce(i) ? [ [ n, i === !0 ? {} : i ] ] : []));
}

function Ce(e) {
  return e === !0 || typeof e === "object" && e !== null && !Array.isArray(e);
}

function pt(e) {
  let n = e.mcpInfo?.title, i = {
    ...n !== void 0 && {
      title: Q(n, Xe)
    },
    ...e.readOnlyHint !== void 0 && {
      readOnlyHint: e.readOnlyHint
    },
    ...e.isDestructive?.({}) === !0 && {
      destructiveHint: !0
    },
    ...e.isOpenWorld?.({}) === !0 && {
      openWorldHint: !0
    }
  };
  return Object.keys(i).length > 0 ? i : void 0;
}

function ft(e, n) {
  let {inventory: i, ...c} = n, s = {
    v: eer,
    tool: e.name,
    target: c
  };
  return {
    [mhe]: s,
    ...e.searchHint !== void 0 && {
      [fB.searchHint]: Q(e.searchHint, Ke)
    },
    ...e.alwaysLoad === !0 && {
      [fB.alwaysLoad]: !0
    },
    ...e.persistenceThresholdCeiling !== void 0 && {
      [fB.maxResultSizeChars]: e.maxResultSizeChars
    },
    ...e.requiresUserInteraction?.() === !0 && {
      [fB.requiresUserInteraction]: !0
    }
  };
}

var nUo = b("mcp_passthrough");

function Pe(e) {
  return he.has(e);
}

var Z = !1;

function rUo(e) {
  return !Pe(e) && (Z || e !== "project");
}

var Te = 1;

function _e() {
  return [ iXn ? "each-call-asked" : "local-rules-decide", Z ? "project-servers" : "no-project-servers" ].join("+");
}

var vt = p(() => u({
  version: A(Te),
  choice: U([ "accepted", "declined" ]),
  terms: o(),
  decidedAt: o(),
  hostname: o()
})), we = "device-mcp-consent";

function fun() {
  return `delete ${Os(ee())} to be asked again`;
}

function ee() {
  return St(Ee(), "state", `${we}.json`);
}

async function GFt(e) {
  let n;
  try {
    n = await e.readText();
  } catch (i) {
    return t(`device-mcp consent: store unreadable (${l(i)})`, {
      level: "warn"
    }), "unreadable";
  }
  if (n === void 0) return "unset";
  try {
    let i = vt().safeParse(Y(n));
    return i.success && c4(i.data.hostname) === c4(e.hostname()) && (i.data.choice === "declined" || i.data.terms === _e()) ? i.data.choice : "unset";
  } catch {
    return "unset";
  }
}

async function oUo(e) {
  let n = await GFt(e);
  return n === "unreadable" ? "unset" : n;
}

async function mun(e, n) {
  try {
    return await n.writeText(_({
      version: Te,
      choice: e,
      terms: _e(),
      decidedAt: n.now().toISOString(),
      hostname: c4(n.hostname())
    }, null, 2) + `\n`), !0;
  } catch (i) {
    return t(`device-mcp consent: answer not saved (${l(i)})`, {
      level: "warn"
    }), !1;
  }
}

function Qme(e) {
  let n = z() && e !== void 0 ? e : void 0, i = Fe.state(we);
  return {
    readText: async () => {
      if (n) {
        let c = await n.readText([ i ]);
        if (!c.ok) throw Error("device-mcp consent read failed");
        let s = c.value.items[0];
        return s.found ? s.value : void 0;
      }
      try {
        return await gn().read(ee());
      } catch (c) {
        if (W(c)) return;
        throw c;
      }
    },
    writeText: async c => {
      if (n) {
        if (!(await n.write(i, c, {
          mode: 384
        })).ok) throw Error("device-mcp consent write failed");
        return;
      }
      let s = ee();
      await gn().mkdir(ht(s), 448), await gn().atomicWrite(s, c, 384);
    },
    now: () => new Date,
    hostname: gt
  };
}

function Tq(e) {
  return hpe(e);
}

export { JFo, QFo, ZFo, eUo, tUo, nUo, rUo, fun, GFt, oUo, mun, Qme, Tq };
