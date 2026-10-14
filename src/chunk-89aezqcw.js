// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Rne } from "./chunk-7f3bx3dq.js";

import { Htt, Dvt, eVe, VJ, bkn } from "./chunk-m0teq4gy.js";

import { q } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { Ye } from "./chunk-b0z4bv3v.js";

import { gc, J, Ht } from "./chunk-nvtwm272.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Y } from "./chunk-kawq2919.js";

import { nt } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { Tt } from "./chunk-9tdwgnpn.js";

import { gE } from "./chunk-xywp7esx.js";

import { Qs, pi } from "./chunk-s2t7g8m9.js";

import { J_, PU } from "./chunk-q6wab2jw.js";

import { de } from "./chunk-5ydr99q3.js";

import { Sb } from "./chunk-ma4gjakn.js";

import { ha, l0, SV } from "./chunk-h6xggfqh.js";

import { Znt, td, EQ, Xxn, e0 } from "./chunk-84yp45y8.js";

import { sW, wet, gZn, WSt, zSt, hSn, m5o } from "./chunk-qrhdcgqd.js";

import { NYo } from "./chunk-0m6edqcs.js";

import { $zt } from "./chunk-ygv0rxck.js";

import { UYo } from "./chunk-n161bfk3.js";

import { nVr, Fzt } from "./chunk-yaqhvtxd.js";

import { _Sn } from "./chunk-fped910e.js";

import { j$ } from "./chunk-y5x27aqc.js";

import { Ia } from "./chunk-rkw37sbq.js";

import { L } from "./chunk-vh1p9t2h.js";

function x(e) {
  let o;
  try {
    o = new URL(e);
  } catch {
    return;
  }
  if (o.host === "") return;
  return `${o.protocol}//${sW(o.host)}`;
}

function ee(e, o) {
  let t = x(e), i = x(o);
  return t === void 0 || i === void 0 || t !== i;
}

function F(e, o) {
  let t = ha().lastExecutedTabUrlByScope.get(e);
  if (t === void 0) return;
  return ee(t, o) ? {
    from: t,
    to: o
  } : void 0;
}

function B(e, o) {
  ha().lastExecutedTabUrlByScope.set(e, o);
}

var W = 200;

function N(e, o) {
  let t = ha().resolvedHostByToolUseId;
  if (t.size >= W) t.clear();
  t.set(e, o);
}

function oe(e, o) {
  let t = ha().resolvedUrlByToolUseId;
  if (t.size >= W) t.clear();
  t.set(e, o);
}

function Q() {
  let {key: e, fromHost: o} = nVr();
  if (o) return {
    sessionId: e
  };
  let t = q();
  return {
    sessionId: t
  };
}

function k4s(e, o) {
  ha().bridgeBinding = {
    context: e,
    socketClient: o
  };
}

function H(e, o) {
  let t = l0.slice(0, -2), i = `${l0}*`;
  for (let r of Object.values(e.alwaysAllowRules)) for (let s of r ?? []) {
    let l = s.replace(/\(\*?\)$/, "");
    if (l === o || l === t || l === i) return !0;
  }
  return !1;
}

var te = new Set([ "tabs_context_mcp", "tabs_create_mcp", "tabs_close_mcp", "resize_window", "shortcuts_list", "list_connected_browsers" ]), re = new Set([ "switch_browser", "select_browser" ]), ne = {
  tab_missing: "Couldn't determine which page this action targets. Pass the tabId from tabs_context_mcp and try again.",
  batch_multiple_tabs: "Claude in Chrome: a browser_batch must act on one tab. Pass the same tabId on every action.",
  batch_after_navigate: "Claude in Chrome: a browser_batch cannot act on a page after navigating to it. Issue the navigate on its own, then batch the actions on the loaded page.",
  batch_browser_switch: "Claude in Chrome: switch browsers in its own call, not inside a browser_batch.",
  batch_malformed_item: "Claude in Chrome: a browser_batch action must be {name, input} and cannot nest another browser_batch."
};

function se(e, o) {
  let t = [];
  if (e === "browser_batch") {
    if (!Array.isArray(o.actions)) return {
      kind: "deny",
      code: "batch_malformed_item"
    };
    for (let s of o.actions) {
      if (!L(s) || typeof s.name !== "string" || s.name === "browser_batch") return {
        kind: "deny",
        code: "batch_malformed_item"
      };
      t.push({
        name: s.name,
        input: L(s.input) ? s.input : {}
      });
    }
  } else t.push({
    name: e,
    input: o
  });
  let i = new Set, r = !1;
  for (let s of t) {
    if (s.name === "navigate") {
      r = !0;
      continue;
    }
    if (re.has(s.name)) {
      if (t.length > 1) return {
        kind: "deny",
        code: "batch_browser_switch"
      };
      continue;
    }
    if (te.has(s.name)) continue;
    if (r) return {
      kind: "deny",
      code: "batch_after_navigate"
    };
    if (typeof s.input.tabId !== "number") return {
      kind: "deny",
      code: "tab_missing"
    };
    i.add(s.input.tabId);
  }
  if (i.size === 0) return {
    kind: "none"
  };
  if (i.size > 1) return {
    kind: "deny",
    code: "batch_multiple_tabs"
  };
  return {
    kind: "tab",
    tabId: [ ...i ][0]
  };
}

var X = 5e3, ie = 2500, ae = new Set([ "connect_timeout", "no_browser_selected_timeout", "browser_selected_late_timeout", "answer_timeout" ]);

async function D(e) {
  let o = gc.monotonicNow(), t = Promise.withResolvers(), i = new AbortController, r = O({
    onSentToSelectedBrowser: t.resolve
  }).then(u => (i.abort(), G(u, e))), s = {
    sent: !1
  }, l = t.promise.then(async () => {
    await J(ie, i.signal);
    let u = X - (gc.monotonicNow() - o), a = ha().bridgeBinding?.socketClient;
    if (i.signal.aborted || u <= 0 || a?.isConnected() !== !0 || a.hasActiveSelection?.() !== !0) return;
    s.sent = !0;
    let n = G(await O({
      capMs: u
    }), e);
    if (U(n)) return n;
    if (n.ok || !ae.has(n.failure)) s.callMs = n.callMs;
    return;
  }).catch(u => {
    d(u);
    return;
  }), _ = await Promise.race([ r.then(() => {}), l ]);
  if (_ === void 0) {
    let u = await r;
    if (s.sent && !u.ok && u.failure === "answer_timeout") return {
      ...u,
      failure: "answer_timeout_after_retry",
      retryCallMs: s.callMs
    };
    return u;
  }
  return r.then(u => {
    let a = {
      connect_ms: u.connectMs,
      call_ms: u.callMs,
      retry_call_ms: _.callMs
    }, n = U(u);
    if (n) {
      if (sW(n.host) !== sW(U(_)?.host ?? "")) f("chrome_permission_prompt", "tab_lookup_hosts_differed", a);
      return;
    }
    let b = u.ok ? "non_web_tab_url" : u.failure;
    if (b === "answer_timeout") {
      f("chrome_permission_prompt", "tab_lookup_rescued_after_answer_timeout", a);
      return;
    }
    f("chrome_permission_prompt", "tab_lookup_rescued_after_failure", {
      ...a,
      first_lookup_failure: c(b)
    });
  }).catch(d), _;
}

function j(e) {
  return {
    connect_ms: e.connectMs,
    call_ms: e.callMs,
    ...!e.ok && e.retryCallMs !== void 0 && {
      retry_call_ms: e.retryCallMs
    }
  };
}

function U(e) {
  return e.ok ? zSt(e.url) : void 0;
}

function G(e, o) {
  if (!e.ok) return e;
  let {tabs: t, connectMs: i, callMs: r} = e, s = t.findIndex(_ => _ == null || _.tabId === o), l = t[s];
  if (s === -1) return {
    ok: !1,
    failure: t.length === 0 ? "empty_tab_list" : "tab_not_listed",
    connectMs: i,
    callMs: r
  };
  if (l == null || typeof l.url !== "string") return {
    ok: !1,
    failure: "malformed_tab_list",
    connectMs: i,
    callMs: r
  };
  if (l.url === "") return {
    ok: !1,
    failure: "tab_url_empty",
    connectMs: i,
    callMs: r
  };
  return {
    ok: !0,
    url: l.url,
    connectMs: i,
    callMs: r
  };
}

async function O(e) {
  let o = gc.monotonicNow(), t = {}, i;
  try {
    let _ = ha().bridgeBinding;
    if (!_) return {
      ok: !1,
      failure: "binding_missing",
      connectMs: 0,
      callMs: 0
    };
    let {socketClient: u} = _;
    i = await Ht((async () => {
      if (!await u.ensureConnected()) return "not_connected";
      if (t.browserSelected = u.hasActiveSelection?.(), t.startedAt = gc.monotonicNow(), 
      t.browserSelected === !0) e?.onSentToSelectedBrowser?.();
      let a = await u.callTool("tabs_context_mcp", {
        createIfEmpty: !1,
        includePermissionState: !1
      }, {
        permissionMode: "ask",
        sessionScope: Q()
      });
      if (!a) return "empty_result";
      if (a.error) return `tool_error_${Htt("tabs_context_mcp", Dvt(a.error))}`;
      let n = a.result?.content, b = Array.isArray(n) && n[0] && typeof n[0] === "object" && "text" in n[0] && typeof n[0].text === "string" ? n[0].text : void 0;
      if (!b) return "no_text";
      let h;
      try {
        h = Y(b);
      } catch {
        return b.includes("createIfEmpty") ? "no_tab_group" : "not_json";
      }
      let w = h?.availableTabs;
      return Array.isArray(w) ? w : "no_tab_list";
    })().catch(a => {
      if (t.startedAt === void 0) return "connect_threw";
      if (a instanceof Error && (a.name === "SocketConnectionError" || a.name === "ToolCallLostError")) return "connection_lost";
      if (a instanceof eVe) return "no_extension";
      if (a instanceof VJ) return "extension_disconnected";
      return "call_threw";
    }), e?.capMs ?? X, "queryTabUrl bridge call").catch(() => {
      if (t.startedAt === void 0) return "connect_timeout";
      if (u.hasActiveSelection?.() === !1) return "no_browser_selected_timeout";
      return t.browserSelected === !1 ? "browser_selected_late_timeout" : "answer_timeout";
    });
  } catch {
    i = "other_threw";
  }
  let r = gc.monotonicNow(), s = Math.round((t.startedAt ?? r) - o), l = t.startedAt === void 0 ? 0 : Math.round(r - t.startedAt);
  return typeof i === "string" ? {
    ok: !1,
    failure: i,
    connectMs: s,
    callMs: l
  } : {
    ok: !0,
    tabs: i,
    connectMs: s,
    callMs: l
  };
}

NYo(async () => {
  let e = await O();
  return e.ok ? e.tabs : void 0;
});

var le = new Set([ "image/png", "image/jpeg", "image/gif", "image/webp" ]);

function z(e) {
  return {
    type: "text",
    text: `[Image from Claude in Chrome \u2014 ${e}; not inlined]`
  };
}

function ce(e) {
  if (!e) return !1;
  let o = nt(e, ";").trim().toLowerCase();
  return le.has(o === "image/jpg" ? "image/jpeg" : o);
}

async function ue(e, o) {
  let t = td(o), i = [];
  for (let r of e.content ?? []) if (r.type === "text") i.push({
    type: "text",
    text: r.text
  }); else if (r.type === "image") if (ce(r.mimeType)) try {
    let {block: s} = await Sb({
      data: String(r.data),
      mediaType: r.mimeType,
      limits: t
    });
    i.push(s);
  } catch {
    i.push(z("could not be decoded"));
  } else i.push(z(`unsupported type ${r.mimeType ?? "unknown"}`));
  return i;
}

function me(e) {
  if (!Array.isArray(e.actions)) return !1;
  return e.actions.some(o => {
    if (!L(o) || typeof o.name !== "string") return !0;
    return o.name === "browser_batch" || Rne.has(o.name) && !EQ(o.name, L(o.input) ? o.input : {});
  });
}

function Z(e) {
  if (!Array.isArray(e.actions)) return [];
  let o = [];
  for (let t of e.actions) {
    if (!L(t)) continue;
    let i = L(t.input) ? t.input : {};
    if (t.name === "browser_batch") {
      let l = Z(i);
      if (l === "unvettable") return l;
      o.push(...l);
      continue;
    }
    if (t.name !== "navigate" || typeof i.url !== "string") continue;
    let r = i.url.trim().toLowerCase();
    if (r === "back" || r === "forward") continue;
    let s = zSt(i.url);
    if (!s) return "unvettable";
    o.push(s.host, hSn(s));
  }
  return o;
}

function V(e, o) {
  return {
    source: o,
    ruleBehavior: "allow",
    ruleValue: {
      toolName: SV,
      ruleContent: e
    }
  };
}

function K(e, o, t) {
  let i = $zt(e, o);
  return t ? `Allow Claude in Chrome to ${i} on ${t}?` : `Allow Claude in Chrome to ${i}?`;
}

function fe(e, o) {
  return async t => {
    let i;
    try {
      i = new URL(t.url);
    } catch {}
    let r = !!i?.host && e.has(sW(i.host)) && !gZn(o, sW(hSn({
      url: i.href
    })));
    if (!r) m("chrome_permission_prompt", "stale_host_mismatch");
    return r;
  };
}

async function pe(e, o, t, i, r, s) {
  let l = ha().bridgeBinding;
  if (!l) throw m("chrome_permission_prompt", "binding_missing"), Error("Claude in Chrome bridge is not initialized in this session.");
  if (t.aborted) throw new Ye("Claude in Chrome tool call aborted");
  let _, u = new Promise((w, y) => {
    _ = () => y(new Ye("Claude in Chrome tool call aborted")), t.addEventListener("abort", _, {
      once: !0
    });
  }), a, n = s?.mark("external");
  try {
    a = await Promise.race([ bkn(l.context, l.socketClient, e, Xxn(o ?? {}), r), u ]);
  } finally {
    if (n?.(), _) t.removeEventListener("abort", _);
  }
  if (a.isError) {
    let w = (a.content ?? []).flatMap(R => R.type === "text" ? [ R.text ] : []).join(`\n`) || `${e} failed`, y = a._meta, C = y?.toolCallFailureCause, k = y?.isBridgeTimeout === !0 ? "bridge_timeout" : y?.isFrontLoadBoundExceeded === !0 ? "front_load_bound_exceeded" : C === "connection_lost_mid_call" || C === "connection_lost_before_call" ? C : void 0, T = L(y) ? j$(y) : void 0;
    throw Object.assign(new gE(w, "Claude in Chrome tool returned error", T ? {
      _meta: T
    } : void 0, `chrome_${k ?? Htt(e, w)}`), {
      mcpErrorSource: "other"
    });
  }
  let b = await ue(a, i), h = j$(a._meta);
  return {
    data: b,
    ...h && {
      mcpMeta: {
        _meta: h
      }
    }
  };
}

function eVr(e) {
  let o = `${l0}${e}`;
  return {
    checkPermissions: async (r, s) => {
      _Sn(s.options?.messageClientPlatform);
      let l = s.toolUseId, _ = Rne.has(e);
      if (_ && EQ(e, r)) {
        let p = de(s);
        if (p?.chromeHostToolAsksEnabled !== !1 && p?.mcpAskForTools?.[Ia]?.includes(e) === !0 && p.shouldAvoidPermissionPrompts !== !0 && p.mode !== "dontAsk") return {
          behavior: "ask",
          message: "Claude in Chrome requires permission.",
          suppressAlwaysAllowRule: !0,
          decisionReason: {
            type: "other",
            reason: "Claude in Chrome action"
          },
          metadata: {
            command: {
              name: o,
              description: K(e, r, void 0)
            }
          }
        };
        return {
          behavior: "allow",
          updatedInput: r
        };
      }
      let u = _ && !EQ(e, r) || e === "browser_batch" && me(r);
      if (e === "navigate" && typeof r.url === "string" && (r.url.trim().toLowerCase() === "back" || r.url.trim().toLowerCase() === "forward")) return {
        behavior: "allow",
        updatedInput: r
      };
      let a = e === "browser_batch" ? m5o(r) : {
        input: r,
        toolName: e
      }, n;
      if (a && a.toolName === "navigate" && typeof a.input.url === "string") {
        if (n = zSt(a.input.url), !n) return m("chrome_permission_prompt", "non_web_url"), 
        {
          behavior: "deny",
          message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
          decisionReason: {
            type: "safetyCheck",
            reason: "Claude in Chrome: non-web or unparseable URL",
            classifierApprovable: !1
          }
        };
      } else if (a && typeof a.input.tabId === "number") {
        let p = await D(a.input.tabId);
        if (!p.ok) return m("chrome_permission_prompt", `tab_url_unresolved_${p.failure}`, j(p)), 
        {
          behavior: "deny",
          message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
          decisionReason: {
            type: "safetyCheck",
            reason: "Claude in Chrome: tab URL unresolved",
            classifierApprovable: !1
          }
        };
        if (n = zSt(p.url), !n) return m("chrome_permission_prompt", "non_web_tab_url"), 
        {
          behavior: "deny",
          message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
          decisionReason: {
            type: "safetyCheck",
            reason: "Claude in Chrome: non-web or unparseable tab URL",
            classifierApprovable: !1
          }
        };
      }
      let b = de(s), h = J_(s.options?.tools?.find(p => Tt(p, o)), b), w = h === "bypassPermissions" || PU(h, b.isBypassPermissionsModeAvailable), y = b.chromeNavigationClassifierEnabled === !0 && !w && (b.chromeClassifierFloorEnabled === !0 || Qs(h)), C, k, T = () => {
        if (!l) return;
        if (k === void 0) ha().resolvedUrlByToolUseId.delete(l); else oe(l, k);
        if (C === void 0) Znt(l);
      };
      if (y) {
        let p = se(e, r);
        if (p.kind === "deny") return m("chrome_permission_prompt", p.code), T(), {
          behavior: "deny",
          message: ne[p.code],
          decisionReason: {
            type: "safetyCheck",
            reason: `Claude in Chrome: ${p.code}`,
            classifierApprovable: !1
          }
        };
        if (p.kind === "tab") {
          let S = n && a?.toolName !== "navigate" && a?.input.tabId === p.tabId ? {
            ok: !0,
            url: n.url,
            connectMs: 0,
            callMs: 0
          } : await D(p.tabId), P = S.ok ? zSt(S.url) : void 0;
          if (P === void 0) return m("chrome_permission_prompt", `tab_url_unresolved_${S.ok ? "non_web_tab_url" : S.failure}`, j(S)), 
          T(), {
            behavior: "deny",
            message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
            decisionReason: {
              type: "safetyCheck",
              reason: "Claude in Chrome: tab URL unresolved",
              classifierApprovable: !1
            }
          };
          if (C = F(Fzt(), P.url), !(u && b.mode === "plan")) k = P.url;
        }
      }
      T();
      let R = e === "browser_batch" ? Z(r) : [];
      if (R === "unvettable") return m("chrome_permission_prompt", "non_web_url"), {
        behavior: "deny",
        message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
        decisionReason: {
          type: "safetyCheck",
          reason: "Claude in Chrome: non-web or unparseable URL",
          classifierApprovable: !1
        }
      };
      let A = wet(b), E = [ ...n ? [ n.host, hSn(n) ] : [], ...R ].map(p => WSt(A, p)).find(p => p !== void 0);
      if (E) return f("chrome_permission_prompt", "domain_rule_denied"), E;
      let v = !1, M;
      if (n) {
        let p = sW(n.host), S = A.sourceOf.get(p) ?? "session";
        if (v = A.allowed.has(p), M = v ? V(n.host, S) : void 0, v && C === void 0 && b.chromeClassifierFloorEnabled !== !0 && !u) {
          if (l) N(l, n);
          return {
            behavior: "allow",
            updatedInput: r,
            decisionReason: {
              type: "rule",
              rule: V(n.host, S)
            }
          };
        }
        if (l && (v || b.chromeClassifierFloorEnabled === !0 || !H(b, o))) N(l, n);
      }
      let I = ha().bridgeBinding;
      if (l && I && !w && !(b.chromeClassifierFloorEnabled !== !0 && H(b, o)) && await UYo(s.abortController.signal)) return {
        behavior: "deny",
        message: I.context.onToolCallDisconnected(),
        decisionReason: {
          type: "other",
          reason: "Claude in Chrome: no browser connected"
        }
      };
      if (u && b.mode === "plan") return {
        behavior: "passthrough",
        message: "Claude in Chrome requires permission.",
        suggestions: [ {
          type: "addRules",
          rules: [ {
            toolName: o,
            ruleContent: void 0
          } ],
          behavior: "allow",
          destination: "session"
        } ]
      };
      return {
        behavior: "ask",
        message: "Claude in Chrome requires permission.",
        suggestions: n ? v ? void 0 : [ {
          type: "addRules",
          rules: [ {
            toolName: SV,
            ruleContent: n.host
          } ],
          behavior: "allow",
          destination: "session"
        } ] : [ {
          type: "addRules",
          rules: [ {
            toolName: o,
            ruleContent: void 0
          } ],
          behavior: "allow",
          destination: "session"
        } ],
        decisionReason: C ? {
          type: "safetyCheck",
          reason: "Claude in Chrome: cross-site navigation pending",
          classifierApprovable: !0
        } : {
          type: "other",
          reason: n ? `Claude in Chrome action on ${n.host}` : "Claude in Chrome action"
        },
        metadata: {
          command: {
            name: o,
            description: K(e, r, n?.host),
            chrome: n ? {
              ...n,
              domainAllowed: v,
              navigation: C,
              ...M && {
                grantRule: M,
                classifierUnavailable: b.chromeClassifierFloorEnabled === !0 && b.canAutoClassifierRun === !1
              }
            } : void 0
          }
        }
      };
    },
    call: async (r, s, l, _, u, a) => {
      let n = s.toolUseId, b = n ? ha().resolvedHostByToolUseId.get(n) : void 0, h = b?.host, w = n ? ha().resolvedUrlByToolUseId.get(n) : void 0;
      if (n) ha().resolvedHostByToolUseId.delete(n), ha().resolvedUrlByToolUseId.delete(n);
      let y = de(s), C = wet(y), k = C.allowed, T = [ ...C.allowedRaw ];
      if (h && !k.has(sW(h))) k.add(sW(h)), T.push(h);
      let R = s.options?.tools?.find(p => Tt(p, o)), A = J_(R, y), E = A === "bypassPermissions" || A === "auto" && s.autoModeClassified === !0 && h !== void 0 && C.denied.size === 0 && b?.keepHostPin !== !0, v = Q(), M = E ? {
        permissionMode: "skip_all_permission_checks",
        sessionScope: v
      } : h ? {
        permissionMode: "follow_a_plan",
        allowedDomains: T,
        onPermissionRequest: fe(k, C.denied),
        sessionScope: v
      } : T.length > 0 ? {
        permissionMode: "follow_a_plan",
        allowedDomains: T,
        sessionScope: v
      } : {
        permissionMode: "ask",
        sessionScope: v
      }, I = await pe(e, r, s.abortController.signal, s.options.mainLoopModel, M, a?.timing);
      if (w !== void 0) B(Fzt(), w);
      if (h) g("chrome_permission_prompt");
      return I;
    },
    ignoresWholeToolAllowRule: r => Rne.has(e) && EQ(e, r)
  };
}

export { k4s, eVr };
