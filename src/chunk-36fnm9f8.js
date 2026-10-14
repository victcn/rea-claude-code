// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

import { h6 } from "./chunk-3pqddg8f.js";

import { J, We } from "./chunk-nvtwm272.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import { bI, t } from "./chunk-kawq2919.js";

import { ne, My } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { nr } from "./chunk-f1zpf9me.js";

import { e1 } from "./chunk-584kx1w1.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { _Dt } from "./chunk-xywp7esx.js";

import { Jr } from "./chunk-s2t7g8m9.js";

import { eu } from "./chunk-z655gvmz.js";

import { H8o, D8o, RTe, L8o, G6, Gvn } from "./chunk-56c5q77x.js";

import { a8o, l8o, g4r, h4r } from "./chunk-6hkfb588.js";

import { ES } from "./chunk-es6vysyb.js";

import { Wne } from "./chunk-69rr80fg.js";

import { GAn, XEt, sQ, YI, VXr, FA, vc } from "./chunk-btyj9pkf.js";

import { bVe } from "./chunk-vsygs6ss.js";

function R() {
  return ee().durable.rows;
}

async function N(e, n) {
  let r = ee().durable.slugOps, s = (r.get(e) ?? Promise.resolve()).then(n, n), u = s.then(() => {}, () => {});
  r.set(e, u);
  try {
    return await s;
  } finally {
    if (r.get(e) === u) r.delete(e);
  }
}

function Fyn() {
  return [ ...R().values() ];
}

function jke(e) {
  return R().get(e);
}

var ve = [ 3e4, 12e4, 6e5 ];

function DKo(e, n) {
  if (!a.CLAUDE_CODE_REMOTE || e === null) return;
  if (e.readFailed) {
    if (f("artifact_durable_subscribe", "registry_unread"), n.reread !== void 0) Se(n.reread, n);
    return;
  }
  oe(e, n);
}

async function Se(e, n, r = ve) {
  for (let o of r) {
    if (await J(o, void 0, {
      unref: !0
    }), ee().durable.registrySink !== null) return !0;
    let s;
    try {
      s = await e();
    } catch (u) {
      t(`[artifact] worker-state re-read threw: ${String(u)}`);
      continue;
    }
    if (s === null || s.readFailed) continue;
    try {
      oe(s, n);
    } catch (u) {
      return d(u), !1;
    }
    return g("artifact_durable_subscribe", {
      registry_reread: !0
    }), !0;
  }
  return f("artifact_durable_subscribe", "registry_reread_failed"), !1;
}

function oe(e, n) {
  let r = L8o(e.internal?.artifact_durable_watches), {durable: o} = ee();
  for (let s of r?.orphans ?? []) o.orphanTriggers.add(s);
  for (let s of r?.rows ?? []) {
    if (o.unwatchedSlugs.has(s.slug) && !o.rows.has(s.slug)) {
      G(s);
      continue;
    }
    if (o.slugOps.has(s.slug)) {
      o.pendingRestoredRows.set(s.slug, s), H(N(s.slug, async () => {
        o.pendingRestoredRows.delete(s.slug), G(s), RTe();
      }));
      continue;
    }
    G(s);
  }
  Gvn(r?.stopped ?? new Map, n);
  for (let s of new Set([ ...o.rows.keys(), ...o.pendingRestoredRows.keys(), ...o.slugOps.keys() ])) if (o.stopLatches.isStopped(s)) Ce(s);
  if (H8o(n.sink), r !== null) D8o();
  if (RTe(), r !== null && r.rows.length + r.stopped.size > 0) g("artifact_durable_subscribe", {
    restored_rows: r.rows.length,
    restored_stops: r.stopped.size
  }), t(`[artifact] restored ${r.rows.length} durable watch row(s) and ${r.stopped.size} stop(s) from prior worker epoch`);
}

function Ce(e) {
  let {durable: n} = ee(), r = () => {
    let o = n.rows.get(e);
    if (o === void 0 || !n.stopLatches.isStopped(e)) return;
    n.rows.delete(e), n.unwatchedSlugs.add(e);
    for (let s of [ o.triggerId, ...o.unreleased ?? [] ]) n.orphanTriggers.add(s);
    f("artifact_durable_subscribe", "restored_stop_retired_row");
  };
  if (n.slugOps.has(e)) {
    H(N(e, async () => {
      r(), RTe();
    }));
    return;
  }
  r();
}

function G(e) {
  let {durable: n} = ee(), r = n.rows.get(e.slug);
  if (r !== void 0 || n.unwatchedSlugs.has(e.slug) || n.stopLatches.isStopped(e.slug)) {
    for (let o of [ e.triggerId, ...e.unreleased ?? [] ]) if (o !== r?.triggerId) n.orphanTriggers.add(o);
    return;
  }
  n.rows.set(e.slug, {
    ...e,
    restored: !0
  });
}

function se(e) {
  let n = bVe(e);
  if (!n) return null;
  let r = h6();
  if (!r) return null;
  return {
    found: n,
    dial: r
  };
}

function LKo(e) {
  return se(e) !== null;
}

async function ie(e, n, r) {
  let o = se(e);
  if (!o) return null;
  try {
    return await o.dial(o.found, r?.detachedFromUser ? {
      timeoutMs: 15e3
    } : {
      signal: n
    });
  } catch {
    return null;
  }
}

function x(e, n) {
  let r = new RegExp(`^${n}:\\s*(\\S+)`, "m").exec(e);
  return r && r[1] ? r[1] : null;
}

function De(e) {
  let n = x(e, "url"), r = x(e, "trigger_id"), o = x(e, "sealed_secret");
  if (!n || !r || !o) return null;
  return {
    url: n,
    triggerId: r,
    sealedSecret: o
  };
}

function Me(e) {
  return x(e, "trigger_id");
}

var Ee = "/integrations/v1/code/webhook-triggers/", ke = "/fire", Ae = [ "published", "comment" ], Z = [ "published" ];

function NKo() {
  return a.CLAUDE_CODE_REMOTE ? null : "not_remote";
}

function azr() {
  let e = ee().durable, n = e.subscribeForbidden;
  if (n) if (!n.relayActive && YI(GAn)) j(); else return {
    reason: "subscribe_forbidden",
    serverMessage: n.serverMessage
  };
  let r = e.subscribeUnrelayed;
  return r ? {
    reason: "relay_unavailable",
    ...r
  } : null;
}

function j() {
  let e = ee().durable;
  if (e.subscribeForbidden === null) return;
  e.subscribeForbidden = null, g4r("subscribe_forbidden");
}

function le() {
  let e = ee().durable;
  if (e.subscribeUnrelayed === null) return;
  e.subscribeUnrelayed = null, g4r("relay_unavailable");
}

var ue = "watch_url";

function Pe(e, n) {
  let r = !1;
  for (let o of e) {
    if (o.mcpInfo?.serverName !== n) continue;
    if (o.mcpInfo.toolName === ue) return !0;
    r = !0;
  }
  return r ? !1 : null;
}

function lzr() {
  return Jr() && sQ() && !YI(GAn) && !_Dt();
}

function dzr(e) {
  if (!a.CLAUDE_CODE_REMOTE) return null;
  let {watchUrlWithheld: n, watchUrlGranted: r} = ee().durable;
  if (n) return n;
  if (r) return null;
  let o = bVe(e.clients);
  return o?.type === "connected" && Pe(e.tools, o.name) === !1 ? "tool_not_offered" : null;
}

function Te(e, n) {
  if (Vt(n) === null) return !1;
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return r.protocol === "https:" && r.username === "" && r.password === "" && r.search === "" && r.hash === "" && r.pathname === Ee + n + ke;
}

function Ie(e) {
  return e.includes("trigger limit reached") || e.includes("maximum number of webhook triggers");
}

function Fe(e) {
  return e.includes("a session with an originator account");
}

function xe(e) {
  if (e.includes("tool is not available to this session")) return "tool_not_offered";
  if (e.includes("bound to a desktop device")) return "session_device_bound";
  if (e.includes("tool is not enabled for this organization") || e.includes("Session webhooks are not enabled for this organization")) return "org_not_enabled";
  return null;
}

var Le = [ [ "cannot be found or is no longer active", "session_not_found" ], [ "not available in this deployment", "unavailable_in_deployment" ] ];

function Ue(e) {
  for (let [n, r] of Le) if (e.includes(n)) return r;
  return null;
}

var q = 160, Ne = /^[('\[]?[A-Za-z_]+(?:[-'][A-Za-z_]+)?[\])'.,;:!?]*$/, $e = 40, He = /^[(']?\d{1,5}[)'.,;:!?%]*$/, de = /^[-\u2013\u2014.,;:!?()]{1,3}$/, Be = /(?!\u0020)\p{Zs}|[\p{M}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]/gu, ce = /\r\n|[\n\v\f\r\u0085\u2028\u2029]/, k = "[redacted]", L = "[url]", ze = 2048;

function fe(e) {
  return e.length <= $e && Ne.test(e);
}

function Q(e) {
  return e === void 0 || e !== L && e !== k && fe(e);
}

function Ge(e, n, r) {
  return fe(e) || de.test(e) || He.test(e) && Q(n) && Q(r);
}

var re = /(?:^|[^A-Za-z_])(url|trigger_id)[ \t]*:|sealed_secret/i;

function te(e) {
  if (re.test(e)) return;
  let n = ne(e, ze), r = n.split(ce).map(i => My(i.replaceAll("\t", " ")).replace(Be, ""));
  if (r.some(i => re.test(i))) return;
  let o = r.findIndex(i => i.trim() !== "");
  if (o === -1) return;
  let s = r[o] ?? "", u = o === r.length - 1 && n.length < e.length, b = s.replace(/["`]/g, "'").replace(/[a-z][a-z0-9+.-]*:\/\/\S+/gi, ` ${L} `).split(/\s+/).filter(i => i !== "");
  if (u && b.length > 0) b[b.length - 1] = k;
  let h = b.map((i, c) => i === L || Ge(i, b[c - 1], b[c + 1]) ? i : k).filter((i, c, y) => i !== k || y[c - 1] !== k);
  if (!h.some(i => i !== k && i !== L && !de.test(i))) return;
  let p = h.join(" ");
  return p.length > q ? `${ne(p, q - 3)}...` : p;
}

function je(e) {
  let n = "content" in e ? e.content : void 0;
  if (!Array.isArray(n)) return "";
  let r = [];
  for (let o of n) if (typeof o === "object" && o !== null && "type" in o && o.type === "text" && "text" in o && typeof o.text === "string") r.push(o.text);
  return r.join(`\n`);
}

async function be(e, n, r) {
  try {
    let o = await e1(e, {
      name: n,
      arguments: r
    }, {
      timeout: 15e3
    });
    return {
      isError: "isError" in o && o.isError === !0,
      text: je(o)
    };
  } catch {
    return null;
  }
}

async function D(e, n) {
  let r = await be(e, "unwatch_url", {
    trigger_id: n
  });
  return r !== null && !r.isError;
}

async function ge(e) {
  let {durable: n} = ee(), r = [ ...n.orphanTriggers ];
  if (r.length === 0) return;
  let o = await Promise.all(r.map(u => D(e, u))), s = 0;
  if (r.forEach((u, b) => {
    if (o[b]) n.orphanTriggers.delete(u); else s++;
  }), s > 0) f("artifact_durable_subscribe", "orphan_trigger_release_failed");
  RTe();
}

async function pe(e, n, r, o) {
  try {
    let s = await vc.postRelayBound(e, n, {
      headers: eu(),
      timeout: 15e3,
      refreshOAuth: !0,
      credentials: o,
      ...r && {
        signal: r
      }
    });
    return {
      res: s,
      relayed: s.route === "relay"
    };
  } catch (s) {
    return {
      res: void 0,
      relayed: FA(s)
    };
  }
}

function me(e) {
  return e.relayed ? {
    relayed: !0
  } : {};
}

function U(e) {
  return e.relayed ? [ {
    relay: !0
  } ] : [];
}

async function aQn(e) {
  let {slug: n, context: r, detachedFromUser: o} = e;
  a8o(n);
  let s;
  try {
    let u = Ke(n, r, o);
    return H(u), s = await u, Ye(s), s;
  } finally {
    let u = l8o(n, s);
    try {
      e.onSettled?.(u);
    } catch (b) {
      d(b);
    }
  }
}

function H(e) {
  let {pendingOps: n} = ee().durable;
  n.add(e);
  let r = () => void n.delete(e);
  e.then(r, r), bI(Ve);
}

async function Ve() {
  await We(Promise.allSettled([ ...ee().durable.pendingOps ]), 1e4);
}

async function Ke(e, n, r) {
  return N(e, async () => {
    let o = R().get(e);
    if (o?.restored && !r) {
      let s = await ae(e, n, !1, o);
      if (s.outcome === "subscribed") return s;
      let u = s.outcome === "already_watching" ? s.outcome : s.outcome === "failed" && s.kept ? "outcome_unknown" : s.reason;
      return f("artifact_durable_subscribe", `refresh_${u}`), t(`[artifact] restored durable watch not refreshed: reason=${u}`), 
      _e(R().get(e) ?? o);
    }
    return ae(e, n, r);
  });
}

function Ye(e) {
  switch (e.outcome) {
   case "subscribed":
    if (e.downgraded) {
      f("artifact_durable_subscribe", "comment_events_unsupported", ...U(e));
      break;
    }
    g("artifact_durable_subscribe", ...U(e));
    break;

   case "already_watching":
    g("artifact_durable_subscribe", {
      already_watching: !0,
      ...e.restored && {
        restored: !0
      }
    });
    break;

   case "skipped":
    f("artifact_durable_subscribe", e.reason);
    break;

   case "failed":
    {
      let n = Xe(e), [r] = U(e), o = {
        ...e.status !== void 0 && {
          status: e.status
        },
        ...e.gatewayDeclined !== void 0 && {
          gateway_declined: e.gatewayDeclined
        },
        ...r
      }, s = Object.keys(o).length > 0 ? [ o ] : [];
      if (n !== void 0) f("artifact_durable_subscribe", n, ...s); else m("artifact_durable_subscribe", e.reason, s[0]);
      let u = e.status !== void 0 ? ` status=${e.status}` : "", b = e.serverMessage !== void 0 ? ` server="${e.serverMessage}"` : "";
      t(`[artifact] durable watch failed: reason=${e.reason}${u}${b}`, {
        level: n !== void 0 ? "debug" : "warn"
      });
      break;
    }
  }
}

function Xe(e) {
  switch (e.reason) {
   case "aborted":
    return "aborted";

   case "no_originator":
    return e.latched ? "no_originator_latched" : void 0;

   case "subscribe_forbidden":
    return e.latched ? "subscribe_forbidden_latched" : "subscribe_forbidden";

   case "relay_unavailable":
    return e.latched ? "relay_unavailable_latched" : "relay_unavailable";

   default:
    return;
  }
}

function _e(e) {
  return {
    outcome: "already_watching",
    triggerId: e.triggerId,
    since: e.since,
    events: e.events,
    ...e.restored && {
      restored: !0
    }
  };
}

async function ae(e, n, r, o) {
  if (!nr.test(e)) return {
    outcome: "failed",
    reason: "invalid_slug"
  };
  let s = R().get(e);
  if (s && s !== o) return _e(s);
  if (G6({
    storageV5: n.storageV5
  }), ee().durable.stopLatches.isStopped(e)) return {
    outcome: "skipped",
    reason: "stop_latched"
  };
  if (Ct() || Oe() !== "firstParty") return {
    outcome: "failed",
    reason: "client_policy"
  };
  if (lzr()) return {
    outcome: "skipped",
    reason: "relay_not_served"
  };
  if (r && ee().durable.originatorRefused) return {
    outcome: "failed",
    reason: "no_originator",
    latched: !0
  };
  let u = azr();
  if (r && u) return u.reason === "subscribe_forbidden" ? {
    outcome: "failed",
    reason: "subscribe_forbidden",
    latched: !0,
    serverMessage: u.serverMessage
  } : {
    outcome: "failed",
    reason: "relay_unavailable",
    latched: !0,
    status: u.status,
    relayed: !0,
    fromGateway: !0
  };
  let b = r ? dzr(n.getMcp()) : null;
  if (b) return {
    outcome: "skipped",
    reason: b
  };
  let h = await ie(n.getMcp().clients, n.abortController.signal, r ? {
    detachedFromUser: r
  } : void 0);
  if (!h) {
    if (!r && n.abortController.signal.aborted) return {
      outcome: "failed",
      reason: "aborted"
    };
    return {
      outcome: "skipped",
      reason: "no_wake_minter"
    };
  }
  await ge(h);
  let p = await be(h, ue, {});
  if (!p || p.isError) {
    let _ = p ? te(p.text) : void 0, v = _ !== void 0 ? {
      serverMessage: _
    } : {};
    if (p && Ie(p.text)) return {
      outcome: "failed",
      reason: "trigger_limit",
      ...v
    };
    if (p && Fe(p.text)) {
      let F = ee().durable, W = F.originatorRefused;
      return F.originatorRefused = !0, W ? {
        outcome: "failed",
        reason: "no_originator",
        latched: !0,
        ...v
      } : {
        outcome: "failed",
        reason: "no_originator",
        ...v
      };
    }
    let E = p ? xe(p.text) : null;
    if (E) return ee().durable.watchUrlWithheld = E, {
      outcome: "skipped",
      reason: E
    };
    return {
      outcome: "failed",
      reason: (p ? Ue(p.text) : null) ?? "mint_failed",
      ...v
    };
  }
  let i = ee().durable;
  i.originatorRefused = !1, i.watchUrlWithheld = null, i.watchUrlGranted = !0;
  let c = De(p.text);
  if (!c) {
    let _ = Me(p.text);
    if (_) await D(h, _);
    return {
      outcome: "failed",
      reason: "mint_failed"
    };
  }
  if (!Te(c.url, c.triggerId)) return await D(h, c.triggerId), {
    outcome: "failed",
    reason: "mint_failed"
  };
  if (!r && n.abortController.signal.aborted) return {
    outcome: "failed",
    reason: await D(h, c.triggerId) ? "aborted" : "watch_trigger_release_failed"
  };
  let y, w = !1, S = {}, A = !1, P = !1, C, T = !1, I = ES() ? Ae : Z, V = !1, K = `/api/frame/subscribe/${e}`, B = sQ() ? XEt("POST", K) : null, he = YI(B), ye = B !== null && VXr(B), Y = () => pe(K, {
    url: c.url,
    sealed_secret: c.sealedSecret,
    events: I
  }, r ? void 0 : n.abortController.signal, n.credentials), M = await Y();
  if (M.res?.ok && M.res.fromFrame && M.res.status === 400 && I.includes("comment")) I = Z, 
  V = !0, M = await Y();
  let O = me(M), {res: l} = M;
  if (!l) T = !r && n.abortController.signal.aborted; else if (l.ok) {
    if (y = l.status, w = l.status >= 200 && l.status < 300, !w) {
      let _ = typeof l.data === "string" ? l.data.trim() : void 0, v = l.response?.headers?.["content-type"], E = _ !== void 0 && _ !== "" && !ce.test(_) && !/[<>]/.test(_) && typeof v === "string" && v.toLowerCase().startsWith("text/plain"), z = Wne(l.data), F = l.fromFrame && (z !== null || E), W = F ? te(z?.error ?? _ ?? "") : void 0;
      S = {
        ...!l.fromFrame && {
          fromGateway: !0
        },
        ...l.gatewayDeclined !== void 0 && {
          gatewayDeclined: l.gatewayDeclined
        },
        ...W !== void 0 && {
          serverMessage: W
        }
      };
      let Re = l.route === "relay" || !(ye || l.gatewayDeclined === 0);
      if (l.status === 403 && E && W !== void 0 && Re && o === void 0) A = !0, P = i.subscribeForbidden !== null, 
      i.subscribeForbidden = {
        serverMessage: W,
        relayActive: he
      }; else if (F && l.status >= 400 && l.status < 500 && l.status !== 401 && l.status !== 403) j();
    } else if (l.fromFrame) j();
    if (l.fromFrame) le();
  } else if (l.reason === "relay-unavailable" || l.reason === "relay-not-served") {
    if (l.status !== 0) {
      if (C = "relay_unavailable", y = l.status, S = {
        fromGateway: !0
      }, o === void 0) P = i.subscribeUnrelayed !== null, i.subscribeUnrelayed = {
        status: y
      };
    }
  } else C = l.reason === "no-auth" ? "no_auth" : "client_policy";
  if (!w) {
    let _ = !l || l.ok && (!l.fromFrame || l.status >= 500);
    if (o !== void 0 && _) return R().set(e, {
      ...o,
      unreleased: [ ...o.unreleased ?? [], c.triggerId ]
    }), RTe(), t(`[artifact] refresh subscribe outcome unknown; keeping trigger ${c.triggerId} beside ${o.triggerId}`), 
    {
      outcome: "failed",
      reason: T ? "aborted" : "subscribe_failed",
      status: y,
      kept: !0,
      ...O,
      ...S
    };
    let v = await D(h, c.triggerId);
    if (T) return {
      outcome: "failed",
      reason: v ? "aborted" : "watch_trigger_release_failed",
      ...O
    };
    return {
      outcome: "failed",
      reason: C ?? (A ? "subscribe_forbidden" : "subscribe_failed"),
      status: y,
      ...O,
      ...S,
      ...P && {
        latched: !0
      }
    };
  }
  let X = (new Date).toISOString();
  R().set(e, {
    slug: e,
    triggerId: c.triggerId,
    since: X,
    events: I
  }), RTe();
  let we = o ? [ o.triggerId, ...o.unreleased ?? [] ].filter(_ => _ !== c.triggerId) : [];
  if ((await Promise.all(we.map(_ => D(h, _)))).includes(!1)) f("artifact_durable_subscribe", "superseded_trigger_release_failed");
  return {
    outcome: "subscribed",
    triggerId: c.triggerId,
    since: X,
    events: I,
    ...V && {
      downgraded: !0
    },
    ...O
  };
}

async function Uyn(e) {
  let {slug: n, context: r} = e;
  if (h4r(n), !R().has(n) && !a.CLAUDE_CODE_REMOTE) return {
    wasWatching: !1,
    teardown: "unsent"
  };
  if (!nr.test(n)) return {
    wasWatching: !1,
    teardown: "unsent"
  };
  let o = N(n, () => Ze(n, r));
  return H(o), o;
}

async function Ze(e, n) {
  let r = R().get(e);
  ee().durable.unwatchedSlugs.add(e);
  let o = !1, s = "dispatched", u = !1, b, h = !1, p = await pe(`/api/frame/unsubscribe/${e}`, {}, n.abortController.signal, n.credentials), i = U(me(p)), {res: c} = p;
  if (!c) u = n.abortController.signal.aborted; else if (c.ok) {
    if (o = c.status >= 200 && c.status < 300, c.fromFrame) le();
  } else if (s = "refused", c.reason === "relay-unavailable" || c.reason === "relay-not-served") if (c.status !== 0) b = c.status; else h = !0;
  let y = !0;
  if (r || ee().durable.orphanTriggers.size > 0) {
    let w = await ie(n.getMcp().clients, n.abortController.signal, {
      detachedFromUser: !0
    });
    if (r) {
      let S = [ r.triggerId, ...r.unreleased ?? [] ], A = w === null ? S.map(() => !1) : await Promise.all(S.map(C => D(w, C)));
      y = !A.includes(!1);
      let {durable: P} = ee();
      S.forEach((C, T) => {
        if (!A[T]) P.orphanTriggers.add(C);
      }), R().delete(e), RTe();
    }
    if (w !== null) await ge(w);
  }
  if (o && y) g("artifact_durable_subscribe", {
    unwatch: !0,
    ...i[0]
  }); else if (u && y) f("artifact_durable_subscribe", "unwatch_aborted", ...i); else if (b !== void 0 && y) f("artifact_durable_subscribe", "unwatch_relay_unavailable", {
    status: b,
    ...i[0]
  }); else {
    let w = c?.ok && !o ? {
      status: c.status,
      ...i[0]
    } : b !== void 0 ? {
      status: b,
      ...i[0],
      trigger_release_failed: !0
    } : i[0];
    m("artifact_durable_subscribe", o ? "unwatch_trigger_release_failed" : b !== void 0 ? "unwatch_relay_unavailable" : s === "refused" && !h ? "unwatch_client_policy" : "unwatch_failed", ...w ? [ w ] : []);
  }
  return {
    wasWatching: r !== void 0,
    teardown: s
  };
}

export { Fyn, jke, DKo, LKo, NKo, azr, lzr, dzr, aQn, Uyn };
