// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, he } from "./chunk-3pqddg8f.js";

import { b } from "./chunk-hwdwjvh8.js";

import { x, j } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { i } from "./chunk-hedpgw9m.js";

import { bt, Oy, _, Y, t } from "./chunk-kawq2919.js";

import { re } from "./chunk-6ah1819r.js";

import { X } from "./chunk-1zg3hbfq.js";

import { Ut, hh, e0s } from "./chunk-8yperama.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { dx } from "./chunk-5brm0azz.js";

import { tzn, ip, ZCr, An, Sv, Qz, k, Rr } from "./chunk-xywp7esx.js";

import { Av } from "./chunk-q6wab2jw.js";

import { Ji } from "./chunk-f0wpcwcb.js";

import { Wo } from "./chunk-9bzw65k3.js";

import { VHt, _3e, eWn, b3e } from "./chunk-ep1bh0vt.js";

import { La } from "./chunk-qk8kpwc4.js";

import { de } from "./chunk-5ydr99q3.js";

import { Rne, NDe } from "./chunk-7f3bx3dq.js";

import { l0, SV } from "./chunk-h6xggfqh.js";

import { wGt, sW, wet, WSt, gSn, hZn } from "./chunk-qrhdcgqd.js";

import { ehe } from "./chunk-fnre177t.js";

import { _Sn } from "./chunk-fped910e.js";

import { EQ, Xxn } from "./chunk-84yp45y8.js";

import { eY } from "./chunk-ghdkaeg7.js";

import { z4e } from "./chunk-thbe2a3e.js";

import { vv } from "./chunk-sjjx8nvs.js";

import { Ia, _Vn } from "./chunk-rkw37sbq.js";

import { L } from "./chunk-vh1p9t2h.js";

import { MXe } from "./chunk-p35rdtee.js";

import { oc, MG } from "./chunk-zx69jgxc.js";

import { O } from "./chunk-1xnsr4dy.js";

function Q(e, n, o) {
  var r = -1, a = e.length, s = n.length, c = {};
  while (++r < a) {
    var d = r < s ? n[r] : void 0;
    o(c, e[r], d);
  }
  return c;
}

var D = Q;

function ee(e, n) {
  return D(e || [], n || [], MXe);
}

var pbn = ee;

var te = /^create[_-]?(pull[_-]?request|merge[_-]?request)$|^(pull[_-]?request|merge[_-]?request)[_-]?create$/i;

function fbn(e) {
  if (!te.test(e)) return;
  i("tengu_git_operation", {
    operation: b("pr_create")
  }), z4e()?.add(1);
}

var ne = 0, R = 1;

class uet {
  ws;
  parseMessage;
  started=!1;
  opened;
  constructor(e, n) {
    this.ws = e;
    this.parseMessage = n;
    this.opened = new Promise((r, a) => {
      if (this.ws.readyState === R) r(); else {
        let s = this.ws, c = () => {
          s.removeEventListener("open", c), s.removeEventListener("error", d), r();
        }, d = p => {
          s.removeEventListener("open", c), s.removeEventListener("error", d), X("error", "mcp_websocket_connect_fail"), 
          a(j(p.error ?? p));
        };
        s.addEventListener("open", c), s.addEventListener("error", d);
      }
    }), this.opened.catch(() => {});
    let o = this.ws;
    o.addEventListener("message", this.onBunMessage), o.addEventListener("error", this.onBunError), 
    o.addEventListener("close", this.onBunClose);
  }
  onclose;
  onerror;
  onmessage;
  onBunMessage=e => {
    try {
      let n = typeof e.data === "string" ? e.data : String(e.data);
      if (Buffer.byteLength(n) > eY) {
        this.handleError(new x(`MCP server sent a WebSocket message over ${eY / 1024 / 1024} MiB. Claude Code did not read it and closed the connection.`, "mcp websocket message over the cap")), 
        this.close().catch(() => {});
        return;
      }
      let o = Y(n), r = this.parseMessage(o);
      this.onmessage?.(r);
    } catch (n) {
      this.handleError(n);
    }
  };
  onBunError=() => {
    this.handleError(Error("WebSocket error"));
  };
  onBunClose=() => {
    this.handleCloseCleanup();
  };
  handleError(e) {
    X("error", "mcp_websocket_message_fail"), this.onerror?.(j(e));
  }
  handleCloseCleanup() {
    this.onclose?.();
    let e = this.ws;
    e.removeEventListener("message", this.onBunMessage), e.removeEventListener("error", this.onBunError), 
    e.removeEventListener("close", this.onBunClose);
  }
  async start() {
    if (this.started) throw Error("Start can only be called once per transport.");
    if (await this.opened, this.ws.readyState !== R) throw X("error", "mcp_websocket_start_not_opened"), 
    Error("WebSocket is not open. Cannot start transport.");
    this.started = !0;
  }
  async close() {
    if (this.ws.readyState === R || this.ws.readyState === ne) this.ws.close();
    this.handleCloseCleanup();
  }
  async send(e) {
    if (this.ws.readyState !== R) throw X("error", "mcp_websocket_send_not_opened"), 
    Error("WebSocket is not open. Cannot send message.");
    let n = _(e);
    try {
      this.ws.send(n);
    } catch (o) {
      throw this.handleError(o), o;
    }
  }
}

var M = 20;

class H {
  connections=new Map;
  toolLists=new oc({
    max: M
  });
  resourceLists=new oc({
    max: M
  });
  resourceTemplateLists=new oc({
    max: M
  });
  commandLists=new oc({
    max: M
  });
  reauthInFlight=new Map;
  settledCachedDialFailures=new Map;
  refusedCachedRows=new Set;
  liveClients=new Set;
  forgetListings() {
    this.toolLists.clear(), this.resourceLists.clear(), this.resourceTemplateLists.clear(), 
    this.commandLists.clear();
  }
}

function Ao() {
  let e = Ut();
  if (e.connectionCache === null) e.connectionCache = new H, MG(e.connectionCache.connections), 
  MG(e.connectionCache.settledCachedDialFailures), MG(e.connectionCache.refusedCachedRows);
  return e.connectionCache;
}

function mbn(e, n, o) {
  function r(...s) {
    return F(o(), n(...s), () => e(...s));
  }
  let a = {
    get: s => o().get(s),
    set(s, c) {
      return o().set(s, c), a;
    },
    has: s => o().has(s),
    delete: s => o().delete(s),
    clear: () => o().clear()
  };
  return Object.assign(r, {
    cache: a
  });
}

function Zke(e, n, o) {
  function r(...s) {
    return F(o(), n(...s), () => e(...s));
  }
  return Object.assign(r, {
    cache: {
      get: s => o().peek(s),
      set: (s, c) => void o().set(s, c),
      has: s => o().has(s),
      delete: s => o().delete(s),
      clear: () => o().clear(),
      size: () => o().size
    }
  });
}

function F(e, n, o) {
  let r = e.get(n);
  if (r !== void 0) return r;
  let a = o();
  return e.set(n, a), a;
}

var oe = 100, se = 400, ie = 100, U = 300, ae = 600;

function gbn() {
  if (Oy()) throw Error("Claude Code is shutting down; not starting this MCP server process");
}

function wSt(e) {
  let n = bt(() => le(e));
  return e.once("exit", () => n()), n;
}

function A(e) {
  return e.exitCode !== null || e.signalCode !== null;
}

async function le(e) {
  let n = e.pid;
  if (n === void 0 || A(e)) return;
  if (O() === "windows") {
    t(`[MCP] stdio server process ${n} has no established connection at exit; closing its stdin`), 
    await Vzt(e);
    return;
  }
  let o = new Promise(a => {
    e.once("exit", () => a());
  }), r = [ [ "SIGINT", oe ], [ "SIGTERM", se ], [ "SIGKILL", ie ] ];
  for (let [a, s] of r) {
    if (A(e)) return;
    t(`[MCP] stdio server process ${n} has no established connection at exit; sending ${a}`);
    try {
      e.kill(a);
    } catch {
      return;
    }
    await We(o, s);
  }
}

async function Vzt(e) {
  let n = e.pid;
  if (n === void 0 || A(e)) return;
  let o = new Promise(r => {
    e.once("exit", () => r());
  });
  if (e.stdin?.end(), await We(o, U), A(e)) return;
  t(`[MCP] stdio server process ${n} is still running ${U}ms after stdin closed; terminating its process tree`), 
  vv(n), await We(o, ae);
}

function ce() {
  return dx() && Rr("tengu_eventual_noodle", !1) === !0;
}

function G(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "text";
}

async function hbn(e, n) {
  if (!ce()) return;
  let o = await n([ ...e.filter(r => !G(r)), ...e.filter(G) ]);
  if (o.content.every(r => r.type === "text" && r.text.trim() === "")) {
    if (o.content.length > 0) f("mcp_content_over_structured", "blank_text");
    return;
  }
  return g("mcp_content_over_structured"), o;
}

function ybn() {
  return k("tengu_serene_teapot", !0) !== !1;
}

function ue() {
  return k("tengu_mcp_claudeai_eligibility_gate", !1);
}

function _bn(e) {
  return e.type === "claudeai-proxy" && e.eligible === !1 && ue();
}

var z = 1e3, pe = 3e4, me = {
  now: () => performance.now(),
  arm: (e, n) => {
    let o = setTimeout(e, n).unref();
    return () => clearTimeout(o);
  }
};

function FGe(e, n, o = me) {
  let r = !0, a, s = Number.NEGATIVE_INFINITY, c = z, d = () => {
    c = z, r = !0;
  }, p = () => {
    let h = a;
    if (a = void 0, h === void 0) {
      d();
      return;
    }
    (async () => n(h.cause))().catch(y => {
      re(e.name, `list_changed refetch failed: ${Wo(y, e.config)}`);
    }).finally(() => {
      if (s = o.now(), h.settle(), a === void 0) {
        d();
        return;
      }
      C(), c = Math.min(c * 2, pe);
    });
  }, u = () => {
    if (ehe(e)) {
      a?.settle(), a = void 0, d();
      return;
    }
    p();
  }, C = () => {
    r = !1;
    let h = s + c - o.now();
    if (h > 0) o.arm(u, h); else p();
  };
  return h => {
    let y = a;
    if (y === void 0) {
      let T = () => {}, l = new Promise(v => T = v);
      if (y = a = {
        cause: h,
        settled: l,
        settle: T
      }, r) C();
    } else y.cause = h;
    return y.settled;
  };
}

var fe = new K(() => new Map);

function ge() {
  return fe.of(B().host);
}

function bbn(e, n, o) {
  let r = ge().get(e);
  if (r === void 0 || !r.toolNames.has(n)) return {
    mayOverlap: !1,
    call: o
  };
  return {
    mayOverlap: !0,
    call: (a, s, ...c) => r.slots.run(s.abortController.signal, () => o(a, s, ...c))
  };
}

var vSt = {
  getValidator(e) {
    if (Ji().claim("mcp_output_schema_unchecked")) t("An MCP server listed a tool with an outputSchema in a session that compiles no schemas; that tool's results are not checked against it", {
      level: "warn"
    });
    return n => ({
      valid: !0,
      data: n,
      errorMessage: void 0
    });
  }
};

function V(e) {
  return e.scope === "dynamic" && !Av(e) && hh.bridgeCarrier === void 0 && "url" in e && typeof e.url === "string" && e0s(e.url);
}

function Sbn(e, n) {
  return V(e) ? n : b3e(n);
}

function wbn(e, n) {
  if (n === void 0 || !Object.hasOwn(n, VHt) || !V(e)) return n;
  return {
    ...n,
    [_3e]: eWn
  };
}

var W = "the user can reconnect it in their claude.ai connector settings", UGe = {
  notConnected(e) {
    return tzn() ? `MCP server "${e}" needs to be connected in claude.ai` : `MCP server "${e}" needs to be connected in claude.ai (run /mcp to connect it)`;
  },
  signInAgain(e) {
    return dx() ? `MCP server "${e}" needs you to sign in again (${W})` : `MCP server "${e}" needs you to sign in again (run /mcp to re-authenticate)`;
  },
  stepUp(e, n) {
    let o = La(n ?? "", void 0, "none"), r = `MCP server "${e}" needs additional permissions (scope: "${o}")`;
    return dx() ? `${r} \u2014 ${W}` : `${r} \u2014 run /mcp to re-authenticate`;
  }
};

class I {
  byMessageId=new Map;
}

function vbn(e, n) {
  if (!n) return {};
  let o = e.get(I).byMessageId.get(n);
  return {
    ["anthropic/memory.response_id"]: n,
    ...o !== void 0 && {
      ["anthropic/memory.chain"]: o
    }
  };
}

function Ebn(e, n, o) {
  if (!n || !o || !("anthropic/memory.chain" in o)) return;
  let r = o["anthropic/memory.chain"], a = e.get(I).byMessageId;
  if (a.delete(n), typeof r !== "string" || r.length > 16384) return;
  a.set(n, r);
  for (let s of a.keys()) {
    if (a.size <= 8) break;
    a.delete(s);
  }
}

function BGe(e) {
  return async (n, o) => {
    let r = await e(n, o);
    if (![ 301, 302, 303, 307, 308 ].includes(r.status) || !r.headers.has("Location")) return r;
    let a = new Headers(r.headers);
    return a.delete("Location"), new Response(r.body, {
      status: r.status,
      statusText: r.statusText,
      headers: a
    });
  };
}

function kbn() {
  let e = An();
  if (!e) return;
  return {
    accountUuid: e.accountUuid,
    organizationUuid: e.organizationUuid,
    credentialInstalled: ip() || ZCr()
  };
}

function Tbn(e, n, o) {
  let r = () => import("./chunk-nm1xncw0.js"), a = (p, u) => ({
    listed: n,
    input: p,
    toolPermissionContext: de(u),
    callTool: o(u),
    signal: u.abortController.signal,
    session: u.session
  }), s = e.validateInput;
  e.validateInput = async (p, u) => (await r()).validateToolFileInputs(n, s, p, u);
  let c = e.call;
  e.call = async (p, u, ...C) => {
    let {argsWithFileInputs: h} = await r(), y = await h({
      ...a(p ?? {}, u),
      toolUseId: u.toolUseId
    });
    return c(y, u, ...C);
  };
  let d = e.askInputPreparer;
  e.askInputPreparer = async (p, u, C) => (await r()).fileInputAskPreparer({
    ...a(p, u),
    toolUseId: C
  }) ?? d?.(p, u, C);
}

var Ce = new Set(NDe.map(e => e.name));

function Abn(e) {
  let n = `${l0}${e}`;
  return {
    coerceInput: r => {
      let a = Xxn(r);
      return a === r ? null : {
        input: a,
        shapeClass: "chrome_host_only_args_removed"
      };
    },
    checkPermissions: async (r, a) => {
      _Sn(a.options?.messageClientPlatform);
      let s = [], c = !1, d = !0;
      if (e === "file_upload" && he()) return q();
      if (e === "navigate") {
        if (typeof r.url !== "string") return w("navigate url is not a string");
        s.push(r.url);
      } else if (e === "browser_batch") {
        if (r.actions !== void 0 && !Array.isArray(r.actions)) return w("batch actions is not an array");
        for (let l of Array.isArray(r.actions) ? r.actions : []) {
          if (!L(l) || typeof l.name !== "string") return w("unreadable batch item");
          if (l.name === "browser_batch") return w("nested batch");
          if (!Ce.has(l.name)) return w("unrecognized batch item name");
          if (l.name === "file_upload" && he()) return q();
          if (l.name === "navigate") {
            if (!L(l.input) || typeof l.input.url !== "string") return w("batch navigate url is not a string");
            if (s.push(l.input.url), c = !0, gSn(l.input.url)) d = !1;
          } else if (!Rne.has(l.name) || l.input !== void 0 && !L(l.input) || !EQ(l.name, L(l.input) ? l.input : {})) d = !1;
        }
      }
      let p = e === "browser_batch" && c && d, u = s.filter(l => !gSn(l)), C, h = new Map;
      if (u.length > 0) {
        let l = de(a), v = wet(l);
        for (let E of u) {
          let S = hZn(E);
          if (!S) return m("chrome_permission_prompt", "non_web_url"), {
            behavior: "deny",
            message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
            decisionReason: {
              type: "safetyCheck",
              reason: "Claude in Chrome: non-web or unparseable URL",
              classifierApprovable: !1
            }
          };
          let N = WSt(v, S.host);
          if (N) return f("chrome_permission_prompt", "domain_rule_denied"), N;
          let P = sW(S.host);
          if (!v.allowed.has(P) && !h.has(P)) h.set(P, S.host);
          C ??= S;
        }
        if (C !== void 0 && h.size === 0 && (e === "navigate" || p)) {
          let E = sW(C.host), S = v.sourceOf.get(E) ?? v.sourceOf.get(wGt(E)) ?? "session";
          if (l.chromeClassifierFloorEnabled !== !0) return {
            behavior: "allow",
            updatedInput: r,
            decisionReason: {
              type: "rule",
              rule: {
                source: S,
                ruleBehavior: "allow",
                ruleValue: {
                  toolName: SV,
                  ruleContent: C.host
                }
              }
            }
          };
          return {
            behavior: "ask",
            message: "Claude in Chrome requires permission.",
            updatedInput: r,
            decisionReason: {
              type: "other",
              reason: `Claude in Chrome action on ${C.host}`
            },
            metadata: {
              command: {
                name: n,
                chrome: {
                  ...C,
                  domainAllowed: !0
                }
              }
            }
          };
        }
      }
      if (Rne.has(e) && EQ(e, r)) return {
        behavior: "allow",
        updatedInput: r
      };
      let y = !he();
      return {
        behavior: "passthrough",
        message: "Claude in Chrome requires permission.",
        suggestions: h.size === 1 && (e === "navigate" || p) && y ? [ {
          type: "addRules",
          rules: [ ...h.values() ].map(l => ({
            toolName: SV,
            ruleContent: l
          })),
          behavior: "allow",
          destination: "session"
        } ] : void 0
      };
    },
    suppressesAlwaysAllowRule: () => !0,
    ignoresWholeToolAllowRule: () => !0,
    excludedFromAutoModeAllowlist: () => !0,
    excludedFromModeBypassAllow: () => !0
  };
}

function q() {
  return {
    behavior: "deny",
    message: _Vn,
    decisionReason: {
      type: "safetyCheck",
      reason: "Claude in Chrome: file_upload in a session with no disk",
      classifierApprovable: !1
    }
  };
}

function w(e) {
  return m("chrome_permission_prompt", "unjudgeable_chrome_input"), {
    behavior: "deny",
    message: "Can't run this Claude in Chrome action: its input couldn't be safely checked.",
    decisionReason: {
      type: "safetyCheck",
      reason: `Claude in Chrome: ${e}`,
      classifierApprovable: !1
    }
  };
}

var Cbn = "claudecode/chromeSite", ye = 253, J = /^[a-z0-9._-]+$/, _e = /^\[[0-9a-f:.]+\]$/;

function Rbn(e, n) {
  if (e.name !== Ia || !Qz(e.config) || !L(n) || n.chrome_site === void 0 && n.chrome_site_port === void 0) return;
  let {chrome_site: o, chrome_site_port: r} = n;
  if (typeof o !== "string" || o.length > ye || !(J.test(o) || _e.test(o)) || Z(`https://${o}`) !== o || r !== void 0 && !Se(r)) return {
    kind: "unreadable"
  };
  return {
    kind: "named",
    site: r === void 0 ? o : `${o}:${r}`,
    offersGrant: r === void 0 && J.test(o) && n.chrome_offers_site_grant === "true"
  };
}

function xbn(e, n) {
  let o = wet(n);
  if (e.kind !== "unreadable") {
    let r = WSt(o, e.site);
    return r && {
      ...r,
      decideLocation: "pre-ask"
    };
  }
  if (o.denied.size === 0) return;
  return {
    behavior: "deny",
    message: "Claude in Chrome could not tell which site this call would act on, so it could not check the sites that are denied.",
    decisionReason: {
      type: "safetyCheck",
      reason: "Claude in Chrome: unreadable site",
      classifierApprovable: !1
    },
    decideLocation: "pre-ask"
  };
}

function Pbn(e, n, o, r) {
  if (e.kind !== "named") return;
  let {site: a} = e, s = ve(n, o).some(d => Z(d) !== a), c = !s && e.offersGrant && !Sv(r) && r.forRemoteExecution !== !0;
  return {
    behavior: "ask",
    message: "Claude in Chrome requires permission.",
    decisionReason: {
      type: "other",
      reason: s ? `Claude in Chrome action on ${a}, which may also leave that site` : `Claude in Chrome action on ${a}`
    },
    ...c ? {
      suggestions: [ {
        type: "addRules",
        rules: [ {
          toolName: SV,
          ruleContent: a
        } ],
        behavior: "allow",
        destination: "session"
      } ]
    } : {
      suppressAlwaysAllowRule: !0
    }
  };
}

function Se(e) {
  return typeof e === "string" && /^[0-9]{1,5}$/.test(e) && String(Number(e)) === e && Number(e) <= 65535;
}

function Z(e) {
  if (typeof e !== "string" || gSn(e)) return;
  let n = hZn(e);
  return n && sW(n.host);
}

function ve(e, n) {
  if (e === "navigate") return [ n.url ];
  if (e !== "browser_batch" || !Array.isArray(n.actions)) return [];
  return n.actions.flatMap(o => L(o) && o.name === "navigate" ? [ L(o.input) ? o.input.url : void 0 ] : []);
}

export { pbn, fbn, uet, Ao, mbn, Zke, gbn, wSt, Vzt, hbn, ybn, _bn, FGe, bbn, vSt, Sbn, wbn, UGe, vbn, Ebn, BGe, kbn, Tbn, Abn, Cbn, Rbn, xbn, Pbn };
