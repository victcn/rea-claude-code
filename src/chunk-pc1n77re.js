// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { he } from "./chunk-3pqddg8f.js";

import { x, j } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { nx } from "./chunk-9yajep3y.js";

import { d } from "./chunk-6ah1819r.js";

import { qo, rn } from "./chunk-yxennhe9.js";

import { p } from "./chunk-jkzenvsk.js";

import { Fa } from "./chunk-q6wab2jw.js";

import { YS, Dw } from "./chunk-w4hwgefc.js";

import { bqn } from "./chunk-nc0jxmkt.js";

import { jH, oA } from "./chunk-f1zpf9me.js";

import { Sf } from "./chunk-b47tzzqx.js";

import { $l, Jt } from "./chunk-9tdwgnpn.js";

import { YM, lO } from "./chunk-bkx9v5fh.js";

import { tF, $ye, Okt, vde, Mkt, Hkt, Dkt, Gye, Aos, Llr, Nlr, Vy, jde, Q2, aAt, oNe } from "./chunk-84yp45y8.js";

import { qpo } from "./chunk-r8a304y3.js";

import { ZM } from "./chunk-de9nc4rq.js";

import { rEn, x2, O9o, ztr, ib } from "./chunk-jtgrm34s.js";

import { c8o, eVt } from "./chunk-6b9pz37h.js";

import { NJ } from "./chunk-ah542ztc.js";

import { XE, C_ } from "./chunk-05wvva46.js";

import { _Pt, DJt, GYe, woe, Xys, __r, puo, vY, fuo, muo } from "./chunk-q8qtrpxv.js";

import { kl } from "./chunk-x1z20h6y.js";

import { o, v, M, T, u, De } from "./chunk-cvcg6n1z.js";

import { N } from "./chunk-hmqkrrtz.js";

import { lookup as le } from "dns/promises";

import { isIP as ce } from "net";

import K from "ws";

class dtt extends Error {
  constructor(e) {
    super(e);
    this.name = "MonitorWsPreconditionError";
  }
}

function Atr(e) {
  switch (e.protocol) {
   case "wss:":
   case "https:":
    e.protocol = "wss:";
    break;

   case "ws:":
   case "http:":
    e.protocol = "ws:";
    break;

   default:
    throw new dtt(`unsupported socket base scheme ${e.protocol}`);
  }
  return e.toString();
}

function F(e) {
  return e.replace(/^\[|\]$/g, "");
}

async function ue(e, n) {
  let s = new URL(e), r = F(s.hostname);
  if (ce(r)) {
    if (aAt(r)) throw new dtt(`${r} is in a private, link-local, or cloud-metadata range`);
    return {
      url: e,
      tls: n.tls
    };
  }
  let m;
  try {
    m = await le(r, {
      all: !0
    });
  } catch (C) {
    throw new dtt(`could not resolve ${r}: ${j(C).message}`);
  }
  if (m.length === 0) throw new dtt(`could not resolve ${r}`);
  for (let {address: C} of m) if (aAt(C)) throw new dtt(`${r} resolves to ${C}, which is in a private, link-local, or cloud-metadata range`);
  if (n.proxy) return {
    url: e,
    tls: n.tls
  };
  if (s.protocol === "wss:") return {
    url: e,
    tls: n.tls
  };
  let f = m.find(C => C.family === 4) ?? m[0], S = s.host;
  return s.hostname = f.family === 6 ? `[${f.address}]` : f.address, {
    url: s.toString(),
    headers: {
      Host: S
    },
    tls: n.tls
  };
}

var me = 3e4, Ovn = "handshake_timeout";

function de(e, n) {
  let s = Number.isInteger(e) && e >= 100 && e <= 599 ? e : 0;
  return `${n ? "cf_mitigated" : "upgrade_rejected"}_${s}`;
}

function CTe(e) {
  let n = /^(cf_mitigated|upgrade_rejected)_(\d{1,3})$/.exec(e ?? "");
  if (n === null) return null;
  return {
    status: Number(n[2]),
    cfMitigated: n[1] === "cf_mitigated"
  };
}

var H = 1048576;

function pe(e) {
  if (Array.isArray(e)) return e.reduce((n, s) => n + s.length, 0);
  if (e instanceof ArrayBuffer) return e.byteLength;
  return e.length;
}

function $wt(e) {
  return {
    taskRegistry: e.taskRegistry,
    toolUseId: e.toolUseId,
    agentId: e.agentId,
    storageV5: e.storageV5,
    credentials: e.credentials
  };
}

function fe(e) {
  return n => {
    if (e.readyState === K.OPEN) try {
      e.send(n);
    } catch {}
  };
}

async function Q2t(e, n) {
  let s = $wt(n), {description: r, timeout_ms: m, persistent: f} = e, {url: S, protocols: C} = e.ws;
  bqn(S);
  let {toolUseId: W, taskRegistry: y} = s, k = NJ(s), i = e.reuseTaskId ?? XE("monitor_ws"), D = rEn({
    description: r,
    agentId: k,
    taskRef: {
      id: i
    },
    arm: e.quietLifecycle ? void 0 : "ws",
    killTask: () => {
      if (!ztr(i, l)) return !1;
      return ib(i, y, {
        quiet: !0
      }), !0;
    }
  }), I = Dw(S), _ = await ue(S, {
    proxy: I,
    tls: YS()
  }), z = Fa(e.headers ?? {}, (c, a) => a.toLowerCase() === "host"), l = new K(_.url, C, {
    proxy: I,
    headers: {
      ...z,
      ..._.headers
    },
    tls: _.tls,
    maxPayload: H
  }), E = Date.now(), O, R = () => ztr(i, l), A = Date.now();
  l.on("open", () => {
    let c = y.all()[i];
    if (c && c.status === "running" && R()) try {
      e.onLifecycle?.("open", void 0, Date.now() - E);
    } catch {}
    let a = e.keepalive;
    if (a && c && c.status === "running" && R()) {
      for (let h of a.openFrames) try {
        l.send(h);
      } catch {}
      A = Date.now();
      let g = {
        lastAt: A
      };
      O = setInterval((h, w, b, ie, B, q) => {
        let U = Date.now();
        if (b !== void 0 && U - A > b) {
          try {
            h.terminate();
          } catch {}
          return;
        }
        let J = B;
        try {
          J = ie?.() ?? B;
        } catch {}
        if (!(b !== void 0 && U - A > b - B * 2) && U - q.lastAt < J - B / 2) return;
        q.lastAt = U;
        for (let ae of typeof w === "function" ? w() : w) try {
          h.send(ae);
        } catch {}
      }, a.intervalMs, l, typeof a.frame === "string" ? [ a.frame ] : a.frame, a.deadlineMs, a.sendEveryMs, a.intervalMs, g), 
      O.unref?.();
    }
    if (e.onSender && c && c.status === "running" && R()) try {
      e.onSender(fe(l));
    } catch {}
  }), l.on("ping", () => {
    A = Date.now();
  }), l.on("message", (c, a) => {
    A = Date.now();
    let g = y.all()[i];
    if (!g || g.status !== "running" || !R()) return;
    let h = pe(c);
    if (h > H) {
      x2(r, `[Dropped ${h}-byte frame (exceeds ${H}); closing]`, i, {
        isHousekeeping: !0,
        agentId: k,
        turnAttribution: "none"
      }), ib(i, y, {
        quiet: !0
      });
      return;
    }
    if (a) {
      if (typeof e.transform === "function") return;
      D.onData(`[binary frame, ${h} bytes]\n`);
      return;
    }
    let w = c.toString("utf8");
    if (typeof e.transform === "function") {
      let b;
      try {
        b = e.transform(w);
      } catch {
        b = null;
      }
      if (b === null) return;
      w = b;
    }
    D.onData(w + `\n`);
  });
  let L;
  l.on("unexpected-response", (c, a) => {
    let g = a?.statusCode ?? 0;
    if (g === 101) return;
    let h = a?.headers ?? {}, w = h["cf-mitigated"] !== void 0;
    L = de(g, w), t(`[callWs] upgrade rejected: status=${g} cf-mitigated=${String(h["cf-mitigated"])} cf-ray=${String(h["cf-ray"])}`), 
    a?.resume?.();
    let b = y.all()[i];
    if (!e.quietLifecycle && b?.status === "running" && R()) x2(r, `[WebSocket upgrade rejected: HTTP ${g}]`, i, {
      isHousekeeping: !0,
      agentId: k,
      turnAttribution: "none"
    });
    try {
      l.terminate();
    } catch {}
  }), l.on("error", c => {
    clearInterval(O);
    try {
      e.onSenderClosed?.();
    } catch {}
    let a = y.all()[i];
    if (!a || a.status !== "running" || !R()) return;
    if (t(`[callWs] socket error: ${c.message}`), !e.quietLifecycle && L === void 0) x2(r, `[WebSocket error: ${c.message}]`, i, {
      isHousekeeping: !0,
      agentId: k,
      turnAttribution: "none"
    });
  }), l.on("close", (c, a) => {
    clearInterval(O), D.flushAndClose();
    try {
      e.onSenderClosed?.();
    } catch {}
    let g = y.all()[i];
    if (!g || g.status !== "running" || !R()) return;
    try {
      e.onLifecycle?.("close", L ?? String(c), Date.now() - E);
    } catch {}
    if (!e.quietLifecycle) {
      let h = a.length ? ` ${a.toString("utf8")}` : "";
      x2(r, `[WebSocket closed: ${c}${h}]`, i, {
        isHousekeeping: !0,
        agentId: k,
        turnAttribution: "none"
      });
    }
    ib(i, y, {
      quiet: !0,
      connectionLost: !0
    });
  });
  let re = f ? void 0 : setTimeout((c, a, g, h, w, b) => {
    if (c.isClosed()) return;
    if (!b.quiet) {
      if (c.flush(), c.isClosed()) return;
      x2(a, __r(b.timeoutMs, c.eventCount(), b.bounded), g, {
        isHousekeeping: !0,
        agentId: h
      });
    }
    ib(g, w, {
      quiet: !0
    });
  }, m, D, r, i, k, y, {
    timeoutMs: m,
    bounded: e.bounded === !0,
    quiet: e.quietLifecycle
  }), se = {
    ...C_(i, "monitor_ws", r, W),
    type: "monitor_ws",
    status: "running",
    url: S,
    timeoutId: re,
    agentId: k,
    ...e.ambient && {
      ambient: !0
    },
    ...e.autoReactArmed && {
      autoReactArmed: !0
    },
    ...e.autoReactSlug && {
      autoReactSlug: e.autoReactSlug
    },
    ...e.frameLive && {
      frameLive: {
        ...e.frameLive,
        armedAt: Date.now()
      }
    }
  };
  if (y.register(se), O9o(i, l), YM(k, `monitor:${i}`, y), e.ambient) {
    let c = setTimeout((a, g, h, w, b) => {
      if (a.readyState === 0 && ztr(g, a)) {
        try {
          w.onLifecycle?.("close", Ovn, Date.now() - b);
        } catch {}
        ib(g, h, {
          quiet: !0,
          connectionLost: !0
        });
      }
    }, e.handshakeDeadlineMs ?? me, l, i, y, e, E);
    c.unref?.(), l.once("open", () => clearTimeout(c)), l.once("close", () => clearTimeout(c));
  }
  return {
    data: {
      taskId: i,
      timeoutMs: f ? 0 : m,
      persistent: f
    }
  };
}

import { isIP as ge } from "net";

var Y = "Shell command or script. Each stdout line is an event; exit ends the watch.", be = "command contains control characters that would be hidden in the approval dialog", X = () => o().refine(nx, be), ye = () => u({
  url: o().refine(nx, "url contains control characters that would be hidden in the approval dialog").refine(e => {
    try {
      let n = new URL(e);
      return (n.protocol === "ws:" || n.protocol === "wss:") && !n.username && !n.password && !/[\t\n\r]/.test(e) && /^[\x00-\x7F]*$/.test(e);
    } catch {
      return !1;
    }
  }, "url must be a valid ASCII ws:// or wss:// URL with no userinfo or whitespace"),
  protocols: T(o().regex(/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, "protocol must be an RFC 6455 token")).refine(e => new Set(e).size === e.length, "protocols must be unique").optional()
}).describe("WebSocket to open. Each text frame is an event; binary frames are reported as a placeholder line. Socket close ends the watch. Cannot be combined with command."), G = "Short human-readable description of what you are monitoring (shown in notifications).";

function Se() {
  return {
    description: o().describe(G),
    timeout_ms: v().min(1e3).optional().default(_Pt).describe(`Kill the monitor after this deadline. Default ${_Pt}ms, max ${DJt}ms. Ignored when persistent is true.`),
    persistent: M().optional().default(!1).describe("Run for the lifetime of the session (no timeout). Use for session-length watches like PR monitoring or log tails. Stop with TaskStop.")
  };
}

function Z() {
  let e = GYe();
  return {
    description: o().describe(G),
    timeout_ms: v().min(1e3).max(DJt, `timeout_ms must be \u2264 ${DJt}`).optional().default(_Pt).describe(`Kill the monitor after this deadline. Default ${_Pt}ms. Deadlines above ${e}ms are capped to ${e}ms. You are notified at expiry and can re-arm.`)
  };
}

var ke = {
  message: `timeout_ms must be \u2264 ${DJt}`,
  path: [ "timeout_ms" ]
};

function we(e) {
  return e.persistent || e.timeout_ms <= DJt;
}

function Q(...e) {
  return N(e, Boolean) === 1;
}

function Me() {
  return $ye() ? Okt() : {};
}

var ee = "allowed_domains applies only to a command monitor";

function te(e) {
  return e.command !== void 0 || vde(e) === void 0;
}

function Te(e) {
  let n = Mkt(e);
  return n === void 0 ? e.command ?? "" : {
    command: e.command ?? "",
    ...n
  };
}

var oe = "exactly one of command or ws";

function ne() {
  return {
    command: X().optional().describe(Y),
    ...Me(),
    ws: ye().optional()
  };
}

var Ce = p(() => De({
  ...Se(),
  ...ne()
}).refine(e => Q(e.command, e.ws), oe).refine(te, ee).refine(we, ke)), Ie = p(() => u({
  ...Z(),
  ...ne()
}).refine(e => Q(e.command, e.ws), oe).refine(te, ee));

function _e() {
  return woe() ? Ie() : Ce();
}

var Re = p(() => u({
  ...Z(),
  command: X().describe(Y)
}));

function Ee() {
  if (!he()) return;
  let e = ZM(Re());
  return ve(e) ? e : void 0;
}

function ve(e) {
  return e.type === "object";
}

var xe = p(() => u({
  taskId: o().describe("ID of the background monitor task."),
  timeoutMs: v().describe("Timeout deadline in milliseconds (0 when persistent)."),
  persistent: M().optional().describe("No timeout \u2014 runs until TaskStop or session end.")
}));

function Ae(e) {
  let n = NJ(e);
  if (n !== void 0 && tF(n)) throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
}

function Oe(e, n) {
  return Nlr({
    ...e,
    command: e.command
  }, {
    ...n,
    permissionLayers: [ ...n.permissionLayers ?? [], {
      kind: "sandbox_auto_allow_suspended"
    } ]
  });
}

async function Le(e, n, s, r, m) {
  let {description: f, timeout_ms: S, persistent: C} = n, {abortController: W, toolUseId: y, taskRegistry: k} = r, i = NJ(r), P = {}, D = rEn({
    description: f,
    agentId: i,
    taskRef: P,
    arm: "bash",
    killTask: () => {
      if (!P.id) return !1;
      return Q2(P.id, k), !0;
    }
  }), I = await jde(e, W.signal, "bash", {
    session: r.session,
    owningAgentId: i,
    preventCwdChanges: !0,
    shouldUseSandbox: Vy({
      command: e
    }),
    sandboxAttributionId: y,
    sandboxNetworkLists: Dkt(y, e),
    attributionMessageId: m?.message.id,
    onStdout: D.onData,
    agentWorktree: r.agentWorktree,
    isolationRoot: Gye(r),
    sessionEnvVars: r.sessionEnvVars,
    storageV5: r.storageV5
  });
  if (I.status === "completed") {
    let l = await I.result;
    if (l.preSpawnError) {
      let E = new x(l.preSpawnError, "Monitor: pre-spawn error (cwd/argv redacted)");
      throw l.preSpawnErrorCode === "e2big" ? jH(E, {
        kind: "spawn_arg_limit"
      }) : E;
    }
  }
  if (I.status === "killed") {
    if (await I.result, I.cleanup(), i !== void 0 && tF(i)) throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
    throw Error("This call was interrupted before the monitor started; nothing is running.");
  }
  let _ = await oNe({
    command: e,
    description: f,
    shellCommand: I,
    toolUseId: y,
    agentId: i,
    kind: "monitor"
  }, {
    abortController: W,
    taskRegistry: k
  });
  P.id = _.taskId, YM(i, `monitor:${_.taskId}`, k);
  let z = C ? void 0 : setTimeout((l, E, O, R, A, L) => {
    if (l.isClosed()) return;
    if (l.flush(), l.isClosed()) return;
    x2(E, __r(L.timeoutMs, l.eventCount(), L.bounded), O, {
      isHousekeeping: !0,
      agentId: R
    }), Q2(O, A);
  }, S, D, f, _.taskId, i, k, {
    timeoutMs: S,
    bounded: s
  });
  return I.result.then(async () => {
    if (z) clearTimeout(z);
    try {
      await D.reportExit(_);
    } catch (l) {
      d(l);
    } finally {
      lO(i, `monitor:${_.taskId}`, k);
    }
  }), {
    data: {
      taskId: _.taskId,
      timeoutMs: C ? 0 : S,
      persistent: C
    }
  };
}

function Z2t(e) {
  let n = Sf("allow_web_fetch", "Arbitrary-URL egress", "is");
  if (n !== null) return {
    kind: "compliance",
    host: "",
    detail: n
  };
  let s = new URL(e), r = F(s.hostname);
  if (ge(r) && aAt(r)) return {
    kind: "ssrf",
    host: r,
    detail: "the address is in a private, link-local, or cloud-metadata range"
  };
  let m = s.port !== "" ? Number(s.port) : s.protocol === "wss:" ? 443 : 80, f = qpo(r, m);
  if (!f.allowed) return {
    kind: "sandbox-policy",
    host: r,
    detail: f.reason
  };
  return null;
}

function Pe(e) {
  let n = Z2t(e.url);
  if (n !== null) return {
    behavior: "deny",
    message: n.kind === "compliance" ? `Monitor cannot open a WebSocket. ${n.detail}` : `Monitor cannot open a WebSocket to ${n.host}: ${n.detail}.`,
    decisionReason: {
      type: "other",
      reason: n.kind === "compliance" ? "organization policy disables model-chosen URL egress" : n.kind === "ssrf" ? "SSRF-blocked address range" : n.detail
    }
  };
  let s = e.protocols !== void 0 && e.protocols.length > 0 ? ` (subprotocols: ${eVt(e.protocols)})` : "";
  return {
    behavior: "ask",
    message: `Monitor will open a WebSocket to ${e.url}${s}`,
    suggestions: []
  };
}

function V(e, n) {
  return {
    get session() {
      return e.session;
    },
    get storageV5() {
      return e.storageV5;
    },
    get credentials() {
      return e.credentials;
    },
    get agentId() {
      return e.agentId;
    },
    get agentWorktree() {
      return e.agentWorktree;
    },
    get taskRegistry() {
      return e.taskRegistry;
    },
    get sessionEnvVars() {
      return e.sessionEnvVars;
    },
    get shellPermission() {
      return {
        ...e.shellPermission,
        abortController: {
          signal: n.signal
        },
        toolUseId: n.toolUseId
      };
    },
    get mcpState() {
      return e.mcpState;
    },
    get getMcp() {
      return e.mcpState;
    },
    get toolUseId() {
      return n.toolUseId;
    },
    get abortController() {
      return {
        signal: n.signal
      };
    }
  };
}

var $e = {
  name: kl,
  enablesCodeExecution: !0,
  maxResultSizeChars: 1e4,
  shouldDefer: !0,
  userFacingName() {
    return "Monitor";
  },
  getToolUseSummary(e) {
    if (!e?.description) return null;
    return qo(e.description, oA);
  },
  getActivityDescription(e) {
    return e?.description ? `Monitoring: ${e.description}` : "Monitoring";
  },
  isEnabled() {
    return vY() && $l();
  },
  isConcurrencySafe() {
    return !0;
  },
  renderToolUseMessage(e) {
    if (!e.description) return null;
    return e.description;
  },
  get outputSchema() {
    return xe();
  },
  mapToolResultToToolResultBlockParam(e, n) {
    let s = e.persistent ? "persistent \u2014 runs until TaskStop or session end" : woe() ? `expires in ${rn(e.timeoutMs, {
      hideTrailingZeros: !0
    })} unless the source ends first; you get one notice at expiry \u2014 re-arm if you still need the watch` : `timeout ${e.timeoutMs}ms`;
    return {
      tool_use_id: n,
      type: "tool_result",
      content: `Monitor started (task ${e.taskId}, ${s}). You will be notified on each event. Keep working \u2014 do not poll or sleep. Events may arrive while you are waiting for the user \u2014 an event is not their reply.`
    };
  }
}, Ne = Jt({
  ...$e,
  backgrounding: "never",
  searchHint: "watch, monitor, or keep an eye on a process/log/command or WebSocket \u2014 stream each stdout line as a live notification",
  async description() {
    return fuo() + (he() ? "" : muo) + puo();
  },
  async prompt() {
    return fuo() + (he() ? "" : muo) + puo();
  },
  get inputSchema() {
    return _e();
  },
  get inputJSONSchema() {
    return Ee();
  },
  toAutoClassifierInput(e) {
    return e.ws ? `websocket ${e.ws.url}${c8o(e.ws)}` : Te(e);
  },
  sandboxNetworkLists(e) {
    return vde(e);
  },
  create(e) {
    return {
      permissionCheckFailureDecision(n, s) {
        let r = V(e, s);
        return Llr(kl, r.shellPermission);
      },
      async validateInput(n) {
        if (n.command !== void 0) {
          let s = Hkt(n, Vy({
            command: n.command
          }));
          if (s !== void 0) return s;
        }
        return {
          result: !0
        };
      },
      async checkPermissions(n, s) {
        let r = V(e, s);
        if (n.ws) {
          let m = Aos("Monitor websocket", r.shellPermission);
          if (m !== void 0) return m;
          return Pe(n.ws);
        }
        return Oe(n, r.shellPermission);
      },
      async call(n, s) {
        let r = V(e, s), {parentMessage: m} = s;
        Ae(r);
        let f = woe(), S = Xys(n, f);
        if (n.ws) return Q2t({
          ...n,
          ...S,
          bounded: f,
          ws: n.ws
        }, $wt(r));
        return Le(n.command, {
          ...n,
          ...S
        }, f, r, m);
      }
    };
  }
}), bYs = Ne;

export { dtt, Atr, Ovn, CTe, $wt, Q2t, Z2t, bYs };
