// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Kko, tA } from "./chunk-xywp7esx.js";

import { rn } from "./chunk-yxennhe9.js";

import { Kg, U9, GBe, rPr, ro, G8e, Eft, ZZ, FK, wve, cfe, bIe, tsn, uLt, cCo, oDs, K8e, rsn } from "./chunk-n3526wzr.js";

import { KR, ql } from "./chunk-sfvypv11.js";

import { Ni } from "./chunk-tzmg667a.js";

import { zQt, C8, bfo, Sfo } from "./chunk-7w62r1zx.js";

import { Uio } from "./chunk-hx17tmde.js";

import { vgr, Lio, Tit, DHn, LHn, j9t, NHn, $io, W9t, VRt, L4e, z9t, vV } from "./chunk-e1mwn7g6.js";

import { GFe } from "./chunk-efav7xct.js";

import { une } from "./chunk-1z68e1p4.js";

import { pb } from "./chunk-14xmsjdg.js";

import { Dn } from "./chunk-q0e8j22k.js";

import { basename as z } from "path";

function v() {
  return `not reachable with ${Dn}${GFe() ? ` or ${vV}` : ""} from this cloud session`;
}

var B = "Claude Desktop session", j = "(session list too long to fetch completely \u2014 sessions beyond the first pages are missing from this listing)";

async function RVr(e, t, i) {
  let s = Ni(), n = !1;
  if (s) await Tit({
    refresh: !0,
    credentials: i
  });
  let r = s ? DHn(e, i) : Promise.resolve({
    rows: [],
    failed: !1,
    identityKey: null
  }), u = Promise.resolve({
    peers: [],
    warnings: []
  }), f = !1, c = !1, [p, g, o, m] = await Promise.all([ s ? Sfo().catch(d => {
    if (d instanceof zQt) return f = !0, [];
    throw d;
  }) : Promise.resolve([]), r, L4e(e, i), u, s && !0 && U9() ? bfo().then(d => {
    c = d;
  }, () => {}) : Promise.resolve() ]), a = p.map(d => ({
    transport: "uds",
    address: `uds:${d.sock}`,
    session: d
  }));
  for (let d of o.sessions) {
    if (rsn(p, d.id) || une(d.id)) continue;
    a.push({
      transport: "cloud",
      address: void 0,
      session: d
    });
  }
  let h = $io(g.rows, p, o.sessions);
  if (!VRt(o.unavailable)) j9t(e, g, W9t(g.rows, o.sessions)); else NHn(e, g);
  for (let d of h) a.push({
    transport: "bridge",
    address: `bridge:${d.id}`,
    session: d
  });
  for (let d of m.peers) a.push({
    transport: "did",
    address: d.did,
    session: d
  });
  return {
    peers: a,
    didWarnings: m.warnings,
    didFocused: n,
    bridgeWalkFailed: g.failed || g.identityKey !== null && !LHn(g),
    cloudListFailed: VRt(o.unavailable),
    localListFailed: f,
    ownEndpointShadowed: c,
    messagingDisabled: !s,
    listTruncated: o.truncated === !0 || g.truncated === !0
  };
}

function V(e = !1) {
  let t = C8(), i = tsn(tA()?.name);
  if (!t || i === null) return null;
  return {
    name: i,
    token: `${i} [${K8e("session", cCo(t))}]`,
    socketToken: `${i} [${K8e("session", t)}]`,
    sock: t,
    callerIsSubagent: e,
    nameIsUserChosen: Uio() !== void 0
  };
}

function Y(e, t = [], i = !1) {
  if (!e) return null;
  let s = R(e, t, i), n = U9() && s === e.token ? " Session names and [ref]s listed here normally stay the same when a session restarts or is resumed; if one stops resolving, list again." : "";
  return e.callerIsSubagent ? `This process's main session is ${s} \u2014 the name OTHER sessions use to message it (it is not listed below; from inside this process, address the main conversation as "${Kg}").${n}` : `This session is ${s} \u2014 the name other sessions use to message it (it is not listed below; a message to it would be a message to yourself).${n}`;
}

function R(e, t, i) {
  return oDs(t, e.sock, i) ? e.socketToken : e.token;
}

async function xVr(e, t) {
  let i = e.getAppState(), s = ql(i.teamContext);
  return {
    appState: i,
    teamFile: s ? await pb(s, e.storageV5) : null,
    callerTeammateId: e.teammateContext === void 0 ? void 0 : e.agentContext?.agentId === e.teammateContext.agentId ? e.teammateContext.agentId : null,
    self: V(t)
  };
}

function j4s(e, t, {didWarnings: i = [], didFocused: s = !1, bridgeWalkFailed: n = !1, cloudListFailed: r = !1, localListFailed: u = !1, ownEndpointShadowed: f = !1, messagingDisabled: c = !1, listTruncated: p = !1, callerCanSend: g = !0} = {}) {
  let o = e.flatMap(l => l.transport === "uds" ? [ l.session ] : []), m = e.flatMap(l => l.transport === "cloud" ? [ l.session ] : []), a = FK(t.appState, {
    teamFile: t.teamFile,
    sessions: o,
    cloud: m,
    bridge: n ? [] : e.flatMap(l => l.transport === "bridge" ? [ l.session ] : [])
  }), h = new Map(a.candidates.map(l => [ `${l.kind}\0${l.id}`, l ])), d = D(t.appState), _ = U(t.appState, t.teamFile, t.callerTeammateId), O = e.flatMap(l => l.transport === "bridge" ? [ l ] : []), de = e.flatMap(l => l.transport === "did" ? [ l.session ] : []), k = [];
  if (d.length > 0) k.push(te(d, h));
  if (_.length > 0) k.push(se(_, h));
  if (!s && (o.length > 0 || m.length > 0 || O.length > 0 || n || r || u || p)) k.push(ie(o, h, m, O, n, r, u, p));
  let E = k.map(l => l.text), y = {
    sections: k.filter(l => l.rows.length > 0).map(l => ({
      kind: l.kind,
      total: l.total,
      rows: l.rows.slice(0, Z).map(q => q.agent)
    })),
    notes: k.flatMap(l => l.notes)
  };
  if (c) y.notes.unshift({
    kind: "messaging_disabled",
    text: P
  });
  let b = c ? null : Y(t.self, o, f);
  if (c && E.length > 0) E.unshift(P);
  let M = !g && y.sections.length > 0;
  if (M && c) E.splice(1, 0, x);
  let K = M && !c ? `${x}\n\n` : "";
  if (E.length === 0) {
    if (c) return {
      listing: P,
      ...y
    };
    if (!b) return {
      listing: "No reachable agents.",
      ...y
    };
    if (!g) return {
      listing: !s && !n ? `${b}\n\nNo reachable agents \u2014 no other Claude session is running on this machine right now.` : `${b}\n\nNo other session appears in this listing right now.`,
      ...y
    };
    return {
      listing: !s && !n ? `${b}\n\nNo reachable agents \u2014 no other Claude session is running on this machine right now (peer messaging itself is available; a session appears here once it is started).` : `${b}\n\nNo other session appears in this listing right now (peer messaging itself is available).`,
      ...y
    };
  }
  return {
    listing: `${K}${b ? `${b}\n\n${E.join(`\n\n`)}` : E.join(`\n\n`)}`,
    ...y
  };
}

function D(e) {
  let t = new Map;
  for (let [n, r] of e.agentNameRegistry) t.set(r, n);
  let i = new Set(Object.values(e.teamContext?.teammates ?? {}).map(n => n.name)), s = [];
  for (let n of Object.values(e.tasks)) {
    if (n.type !== "local_agent" || n.agentType === "main-session") continue;
    let r = t.get(n.id);
    s.push({
      agentId: n.id,
      name: r !== void 0 && i.has(r) ? void 0 : r,
      agentType: n.agentType,
      status: n.status,
      startTime: n.startTime
    });
  }
  return s;
}

var x = `None of the agents below can be messaged with ${Dn} from here: it is not among the tools available to you.`, P = "Cross-session messaging is switched off in this session right now \u2014 no sessions were listed, and this session is not reachable by name until it is switched back on.", J = "(the session list on this machine could not be read just now \u2014 other local sessions may be missing from this listing; a later listing retries)";

function U(e, t, i) {
  let s = e.teamContext;
  if (!s && !t) return [];
  let n = i === null ? void 0 : i ?? (s ? s.selfAgentId ?? (s.isLeader === !1 ? void 0 : s.leadAgentId) : KR()), r = new Map;
  for (let o of Object.values(e.tasks)) if (o.type === "in_process_teammate") r.set(o.identity.agentId, o.isIdle ? "idle" : o.status);
  let u = [], f = new Set(n !== void 0 ? [ n ] : []), c = new Set;
  for (let o of e.agentNameRegistry.keys()) c.add(ro(o));
  let p = ZZ(e), g = (o, m) => Eft({
    name: o,
    agentId: m
  }, p) || !G8e(o);
  for (let [o, m] of Object.entries(s?.teammates ?? {})) {
    if (f.has(o) || !g(m.name, o)) continue;
    f.add(o);
    let a = m.tmuxPaneId === "in-process" || m.tmuxPaneId === "leader";
    u.push({
      teammateId: o,
      name: m.name,
      agentType: m.agentType,
      status: a ? r.get(o) : void 0,
      backend: a ? "in-process" : "pane",
      since: m.spawnedAt,
      nameShadowed: !1
    });
  }
  for (let o of t?.members ?? []) {
    if (f.has(o.agentId) || !g(o.name, o.agentId)) continue;
    f.add(o.agentId), u.push({
      teammateId: o.agentId,
      name: o.name,
      agentType: o.agentType,
      status: void 0,
      backend: "roster",
      since: o.joinedAt,
      nameShadowed: Q(o.name, e, c)
    });
  }
  return u;
}

function Q(e, t, i) {
  let s = cfe(e) ?? e;
  if (!i.has(ro(s))) return !1;
  return t.agentNameRegistry.has(e) || s !== e ? "unreachable" : "bare-only";
}

function H(e, t) {
  if (typeof e.since !== "number" || !Number.isFinite(e.since) || e.since > t || t - e.since > ee) return;
  return `${e.backend === "roster" ? "joined" : "started"} ${T(t - e.since)} ago`;
}

function A(e, t, i = t.length) {
  return `${e} (${i}):\n${t.join(`\n`)}`;
}

var W = 100, F = 100, Z = 100, ee = 31536e7;

function ne(e, t, i) {
  let s = t.slice(0, W).map(i), n = t.length - s.length;
  if (n > 0) s.push(`  (\u2026 ${n} more not shown)`);
  return `${e} (${t.length}):\n${s.join(`\n`)}`;
}

function X(e, t, i) {
  let s = e.formerNames?.[0];
  if (s === void 0) return;
  let n = t - s.until;
  if (n < 0 || n >= Kko) return;
  let r = i(s.name);
  return r ? `says it was ${r} until ${T(t - s.until)} ago` : void 0;
}

function L(e, t) {
  let i = {
    ...e.shown
  }, s = [ e.printed ];
  for (let n of t) {
    if (typeof n === "string") {
      s.push(n);
      continue;
    }
    let r = n === void 0 ? void 0 : "type" in n ? n.type : n.status;
    if (n !== void 0 && r !== void 0) i["type" in n ? "type" : "status"] = r, s.push(n.text ?? r);
  }
  return {
    agent: i,
    line: `  ${s.join("  \xb7  ")}`
  };
}

function I(e, t, i) {
  if (e) return {
    shown: {
      name: e.name,
      ref: e.ref
    },
    printed: wve(e)
  };
  return t === null ? {
    shown: {},
    printed: i
  } : {
    shown: {
      name: t
    },
    printed: t
  };
}

function C(e, t, i, s = i.length) {
  let n = i.map(r => r.line);
  if (s > i.length) n.push(`  (\u2026 ${s - i.length} more not shown)`);
  return {
    kind: e,
    total: s,
    rows: i,
    notes: [],
    text: A(t, n, s)
  };
}

function te(e, t) {
  let i = Date.now();
  return C("subagents", "Subagents", e.map(s => {
    let n = s.name ? t.get(`subagent\0${s.agentId}`) : void 0;
    return L(n ? {
      shown: {
        name: n.name,
        ref: n.ref,
        id: s.agentId
      },
      printed: wve(n)
    } : {
      shown: {
        id: s.agentId
      },
      printed: s.agentId
    }, [ {
      type: s.agentType
    }, {
      status: s.status
    }, `started ${T(i - s.startTime)} ago` ]);
  }));
}

function se(e, t) {
  let i = Date.now(), s = e.slice(0, W).map(n => {
    let r = n.nameShadowed !== !1 ? void 0 : t.get(`teammate\0${n.teammateId}`), u = bIe(n.status) ?? void 0;
    return L(I(r, bIe(n.name), "(unnamed)"), [ {
      type: bIe(n.agentType) ?? void 0
    }, {
      status: u
    }, u !== void 0 || n.backend === "in-process" ? void 0 : n.backend, H(n, i), n.nameShadowed === "unreachable" ? "not messageable by name while a subagent in this session is registered under that name (the name reaches the subagent)" : n.nameShadowed === "bare-only" ? "message it by this exact name as printed \u2014 no [ref]: a subagent here is registered under a variant spelling of it" : void 0 ]);
  });
  return C("teammates", "Teammates", s, e.length);
}

function ie(e, t, i, s, n, r, u, f) {
  let c = Date.now(), p = [ ...e.map(a => {
    let h = t.get(`session\0${a.sock}`), d = a.tmux !== void 0 && /^[^\s/\\\p{Cc}\p{Cf}]{1,64}$/u.test(a.tmux) && !uLt(a.tmux) ? a.tmux : void 0, _ = X(a, c, bIe);
    return L(I(h, bIe(a.name || z(a.cwd)), "(untitled)"), [ _, {
      type: a.kind
    }, {
      status: a.status
    }, a.hostSessionId === void 0 ? void 0 : B, d === void 0 ? void 0 : `tmux ${d}`, `started ${T(c - a.startedAt)} ago` ]);
  }), ...i.map(a => {
    let h = t.get(`cloud-session\0${a.id}`), d = a.offline ? "offline" : a.workerStatus;
    return L(I(h, bIe(a.title), "(untitled)"), [ a.remoteControl ? {
      type: "remote_control",
      text: vgr
    } : {
      type: "cloud",
      text: "cloud session"
    }, {
      status: d,
      text: N(d, d)
    }, a.lastActive === void 0 ? void 0 : `active ${T(c - a.lastActive)} ago`, a.unreachableFromHere ? v() : void 0, a.acceptsPeerMessages === !1 ? z9t : void 0 ]);
  }), ...s.slice(0, F).map(({session: a}) => {
    let h = t.get(`bridge-session\0${a.id}`);
    return L(I(h, bIe(a.title), "(untitled)"), [ {
      type: GBe(a) ? "cloud" : "remote_control",
      text: Lio(a)
    }, {
      status: rPr(a) ? "offline" : a.status,
      text: G(a, a.status)
    }, a.acceptsPeerMessages === !1 ? z9t : void 0 ]);
  }) ], g = C("sessions", "Peer sessions", p, p.length + Math.max(0, s.length - F)), o = [];
  if (n) o.push({
    kind: "account_list_failed",
    text: s.length > 0 ? "(account session list incomplete just now \u2014 those rows carry no [ref] and are not messageable by name until a later listing completes)" : "(the Remote Control session list for your account did not complete just now \u2014 Remote Control sessions on other machines may be missing from this listing; a later listing retries)"
  });
  if (r) o.push({
    kind: "cloud_list_failed",
    text: "(cloud session list could not be fetched just now \u2014 cloud sessions are missing from this listing; a later listing retries)"
  });
  if (u) o.push({
    kind: "local_list_failed",
    text: J
  });
  if (f) o.push({
    kind: "list_truncated",
    text: j
  });
  if (o.length === 0) return g;
  let m = o.map(a => a.text).join(`\n  `);
  return {
    ...g,
    notes: o,
    text: p.length > 0 ? `${g.text}\n  ${m}` : m
  };
}

function PVr(e, t, {bridgeWalkFailed: i = !1, cloudListFailed: s = !1, localListFailed: n = !1, ownEndpointShadowed: r = !1, messagingDisabled: u = !1, listTruncated: f = !1, omitDirectories: c = !1} = {}) {
  let p = D(t.appState), g = U(t.appState, t.teamFile, t.callerTeammateId), o = [];
  if (p.length > 0) o.push(oe(p));
  if (g.length > 0) o.push(ae(g));
  if (e.length > 0) o.push(re(e, c));
  if (s) o.push("(cloud session list could not be fetched just now \u2014 cloud sessions are missing from this listing; try /list-agents again shortly)");
  if (n) o.push("(the session list on this machine could not be read just now \u2014 other local sessions may be missing from this listing; try /list-agents again shortly)");
  if (i) o.push("(the Remote Control session list for your account did not complete just now \u2014 Remote Control sessions on other machines may be missing from this listing; try /list-agents again shortly)");
  if (f) o.push(j);
  let m = e.flatMap(h => h.transport === "uds" ? [ h.session ] : []), a = u || !t.self || c && !t.self.nameIsUserChosen ? null : t.self.callerIsSubagent ? `This process's main session: ${R(t.self, m, r)} (the name OTHER sessions use for it; from inside this process, address it as "${Kg}")` : `This session: ${R(t.self, m, r)} (the name other sessions use to message it)`;
  if (c && o.length > 0) o.push("(session names and directories not chosen by a human are withheld on this connection \u2014 /rename a session on its own machine to give it an addressable name here)");
  if (u && o.length > 0) o.unshift(P);
  if (o.length === 0) {
    if (u) return P;
    return a ? `${a}\n\nNo subagents, teammates or other Claude sessions \u2014 no other session is running on this machine right now; peer messaging itself is available.` : "No subagents, teammates or other Claude sessions.";
  }
  return a ? `${a}\n\n${o.join(`\n\n`)}` : o.join(`\n\n`);
}

function oe(e) {
  let t = Date.now();
  return A("Subagents", e.map(i => {
    let s = i.name ? `${i.name}  \xb7  ${i.agentType}` : i.agentType;
    return `  [${i.status}]  \xb7  ${s}  \xb7  started ${T(t - i.startTime)} ago`;
  }));
}

function ae(e) {
  let t = Date.now();
  return ne("Teammates", e, i => {
    let s = bIe(i.name) ?? "(unnamed)", n = bIe(i.agentType), r = n ? `${s}  \xb7  ${n}` : s, u = H(i, t), f = i.nameShadowed === "unreachable" ? "  \xb7  name held by a subagent here" : i.nameShadowed === "bare-only" ? "  \xb7  exact name only (a subagent holds a variant)" : "";
    return `  [${bIe(i.status) ?? i.backend}]  \xb7  ${r}${u ? `  \xb7  ${u}` : ""}${f}`;
  });
}

function N(e, t) {
  return e === "requires_action" ? "waiting on a human" : t;
}

function G(e, t) {
  if (GBe(e)) return N(e.status, t);
  return rPr(e) ? "offline" : t;
}

function S(e) {
  if (!e) return;
  let t = cfe(e);
  return t === null || t === "untitled session" ? void 0 : t;
}

function re(e, t = !1) {
  let i = Date.now();
  return A("Other Claude sessions", e.map(s => {
    switch (s.transport) {
     case "uds":
      {
        let n = s.session, r = t && n.nameSource !== "user" ? void 0 : S(n.name), u = t ? void 0 : S(n.cwd) ?? "(unknown directory)", f = t ? void 0 : X(n, i, S), c = [ r, f, u ].filter(Boolean).join("  \xb7  ") || "(unnamed session)", p = n.hostSessionId === void 0 ? "" : `  \xb7  ${B}`;
        return `  [${S(n.status) ?? "unknown"}]  \xb7  ${c}${p}  \xb7  started ${T(i - n.startedAt)} ago`;
      }

     case "cloud":
      {
        let n = s.session;
        return `  [${n.offline ? "offline" : N(n.workerStatus, n.workerStatus ?? "unknown")}]  \xb7  ${S(n.title) ?? "(untitled)"}  \xb7  ${n.remoteControl ? vgr : "cloud"}${n.unreachableFromHere ? `  \xb7  ${v()}` : ""}${n.acceptsPeerMessages === !1 ? `  \xb7  ${z9t}` : ""}`;
      }

     case "bridge":
      {
        let n = s.session;
        return `  [${G(n, S(n.status) ?? "unknown")}]  \xb7  ${S(n.title) ?? "(untitled)"}  \xb7  ${Lio(n)}${n.acceptsPeerMessages === !1 ? `  \xb7  ${z9t}` : ""}`;
      }

     case "did":
      return "";
    }
  }));
}

function T(e) {
  return rn(Math.max(0, e), {
    mostSignificantOnly: !0
  });
}

export { RVr, xVr, j4s, PVr };
