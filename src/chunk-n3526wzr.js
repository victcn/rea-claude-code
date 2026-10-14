// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Dv } from "./chunk-vxr6sv7z.js";

import { q, Ze } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { l, W } from "./chunk-b0z4bv3v.js";

import { Ly } from "./chunk-ddr690nj.js";

import { or } from "./chunk-w0q7jqcp.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { bT } from "./chunk-j016gcgm.js";

import { _, Do, t } from "./chunk-kawq2919.js";

import { Lj, cL, pq, Gln, Pje, n6 } from "./chunk-6ah1819r.js";

import { Ns, aG, oRo, Isn } from "./chunk-g6nh65r0.js";

import { ql } from "./chunk-sfvypv11.js";

import { p } from "./chunk-jkzenvsk.js";

import { rn } from "./chunk-yxennhe9.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { Xa, tI, bU, _a, SIe, Cft, gCo, Yh, V0, Cie, lPr, Eve } from "./chunk-3kb22va7.js";

import { Xf, Cve, d_, K0, eee, Ul } from "./chunk-znhtg8e4.js";

import { dA, zH } from "./chunk-1tdw23h1.js";

import { sn } from "./chunk-642shbw5.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import { um, Qi } from "./chunk-ws55c9wv.js";

import { O } from "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

import { yt } from "./chunk-9zhz923g.js";

import { basename as Ae } from "path";

var oe = [ pq, Lj, Gln ], Ce = [ ...Pje, "system-reminder" ], G;

function K() {
  return G ??= Isn([ {
    tags: oe
  } ]), G;
}

function bft(e) {
  return K().neutralize(e);
}

function ePr(e) {
  return K().openerOffsets(e);
}

var B;

function H() {
  return B ??= Isn([ {
    tags: n6.filter(e => e !== cL)
  }, {
    tags: [ cL ],
    tail: oRo
  }, {
    tags: [ "antml" ],
    tail: ({colon: e}) => `[${e}]`
  } ]), B;
}

function vie(e) {
  return H().neutralize(e);
}

function YHs(e) {
  return H().openerOffsets(e);
}

var ae = new RegExp(`[${aG.open}]`, "u");

function j(e) {
  return ae.test(e) || e.includes("\\u");
}

var de = /^\s*(?:\{\s*["}]|\[\s*(?:["{[\]\d-]|true\b|false\b|null\b))/, ue = new Map([ [ '"', '"' ], [ "\\", "\\" ], [ "/", "/" ], [ "b", "\b" ], [ "f", "\f" ], [ "n", `\n` ], [ "r", "\r" ], [ "t", "\t" ] ]);

function U(e, n) {
  let r = n, i = 1;
  while (i % 2 === 1) {
    if (r = e.indexOf('"', r + 1), r === -1) return -1;
    i = 0;
    while (e.charCodeAt(r - i - 1) === 92) i++;
  }
  return r;
}

function ce(e) {
  let n = [], r = e.indexOf('"');
  while (r !== -1) {
    let i = U(e, r);
    if (i === -1) {
      n.push([ r + 1, e.length ]);
      break;
    }
    n.push([ r + 1, i ]), r = e.indexOf('"', i + 1);
  }
  return n;
}

function fe(e) {
  if (de.test(e)) return !0;
  let n = e.search(/\S/), r = e[n] === '"' ? U(e, n) : -1;
  return r !== -1 && e.slice(r + 1).trim() === "";
}

function le(e, n, r) {
  let i = "", d = [], a = [];
  for (let c = n; c < r; ) {
    let g = e[c], k = 1;
    if (g === "\\" && c + 1 < r) {
      let S = ue.get(e[c + 1]), m = e.slice(c + 2, c + 6);
      if (S !== void 0) g = S, k = 2; else if (e[c + 1] === "u" && c + 6 <= r && /^[0-9a-fA-F]{4}$/.test(m)) g = String.fromCharCode(parseInt(m, 16)), 
      k = 6;
    }
    i += g, d.push(c), a.push(c + k), c += k;
  }
  return {
    value: i,
    starts: d,
    ends: a
  };
}

function me(e) {
  let n = new Map;
  for (let d of ePr(e)) n.set(d, {
    end: d + 1,
    keepsOpener: e[d] === "<"
  });
  for (let [d, a] of ce(e)) {
    if (!j(e.slice(d, a))) continue;
    let {value: c, starts: g, ends: k} = le(e, d, a);
    for (let S of ePr(c)) n.set(g[S], {
      end: k[S],
      keepsOpener: c[S] === "<"
    });
  }
  let r = "", i = 0;
  for (let d of [ ...n.keys() ].sort((a, c) => a - c)) {
    let {end: a, keepsOpener: c} = n.get(d);
    r += e.slice(i, c ? a : d) + (c ? "\\\\" : "<\\\\"), i = a;
  }
  return r + e.slice(i);
}

function Sft(e) {
  if (!j(e)) return e;
  return fe(e) ? me(e) : bft(e);
}

var Kg = "main";

function Sve(e, n) {
  return `<${Gln} from="${Ns(e)}">\n${wft(n)}\n</${Gln}>`;
}

function wft(e) {
  return Sft(e);
}

import { createHash as ge, randomBytes as X } from "crypto";

import { mkdir as pe, readdir as Y, unlink as v } from "fs/promises";

import { basename as Se, join as A, resolve as ke } from "path";

async function tPr(e, n) {
  let r = [], i;
  try {
    i = await Qi(d => e.listEntries({
      namespace: "session"
    }, {
      cursor: d,
      skipKeyStats: !0
    }), d => {
      for (let a of d) if (a.kind === "key" && a.key.namespace === "session") r.push(a.key.file);
    });
  } catch (d) {
    n.onIssue?.(`failed: ${l(d)}`);
    return;
  }
  switch (i.status) {
   case "done":
    return r;

   case "error":
    n.onIssue?.(`failed: ${yt(i.error)}`);
    return;

   case "capped":
    return n.onIssue?.(`truncated at ${um} pages; ${r.length} names seen`, "warn"), 
    n.partialOnCap ? r : void 0;
  }
}

var J = "auth", L2n = /^(\d+)\.[0-9a-f]{64}\.key$/, he = /^(\d+)\.[0-9a-f]{64}\.key\.tmp\.[0-9a-f]+$/, C = 16, be = /^[0-9a-f]{32}$/, x = 4096, Q = p(() => u({
  peerToken: o().regex(be),
  procStart: o().optional(),
  procStartFt: o().optional(),
  pidDomain: o().optional()
}));

function N2n() {
  return O() === "windows";
}

function XHs() {
  return {
    peerToken: X(C).toString("hex"),
    childToken: X(C).toString("hex")
  };
}

var $2n = 25;

function NK() {
  return A(Ee(), "sessions");
}

function lA(e) {
  let n = Eve(e);
  if (n !== void 0) return `\\\\.\\pipe\\${lPr(n)}`;
  if (Ly(e)) return;
  return ke(e);
}

function Z(e) {
  let n = lA(e);
  return n === void 0 ? void 0 : ge("sha256").update(n).digest("hex");
}

function V(e, n) {
  let r = Z(n);
  if (r === void 0) throw Error("refusing to derive a messaging key name for a non-canonical socket path");
  return `${e}.${r}.key`;
}

async function JHs(e, n, r, {sweepPermitted: i}) {
  if (z() && r !== void 0) return ye(r, e, n);
  let d = NK();
  await pe(d, {
    recursive: !0,
    mode: 448
  }), await we(d, i);
  let a = A(d, V(process.pid, e));
  try {
    await v(a);
  } catch {}
  return await Tn(a, _({
    peerToken: n,
    ...eee(await d_()),
    pidDomain: await dA()
  }), 384), a;
}

async function ye(e, n, r) {
  let i = V(process.pid, n), d = await e.ensureScope({
    namespace: "session"
  });
  if (!d.ok) throw t(`[uds-auth] sessions scope unavailable: ${yt(d.error)}`), Error("messaging key folder could not be made through storage");
  try {
    await e.delete(Fe.session(i));
  } catch {}
  let a = await e.write(Fe.session(i), _({
    peerToken: r,
    ...eee(await d_()),
    pidDomain: await dA()
  }), {
    publishDiscipline: "atomic",
    mode: 384,
    exactMode: 384
  });
  if (!a.ok) throw t(`[uds-auth] key publish failed: ${yt(a.error)}`), Error("messaging key could not be published through storage");
  return A(NK(), i);
}

async function F2n(e) {
  try {
    let n = await Xa(e, x);
    if (n === null) return;
    let r = Q().safeParse(Do(n));
    return r.success ? r.data.pidDomain : void 0;
  } catch {
    return;
  }
}

async function we(e, n) {
  if (!n) return;
  let r;
  try {
    r = await Y(e);
  } catch {
    return;
  }
  let i = await dA();
  await Promise.all(r.map(async d => {
    let a = he.exec(d);
    if (!a || !Xf(parseInt(a[1], 10))) return;
    let c = await F2n(A(e, d));
    if (c !== void 0 && c !== i) return;
    try {
      await v(A(e, d));
    } catch {}
  }));
}

async function QHs(e, n) {
  if (z() && n !== void 0) {
    try {
      await n.delete(Fe.session(Se(e)));
    } catch {}
    return;
  }
  try {
    await v(e);
  } catch {}
}

async function ZHs(e, n, r) {
  let i = NK(), d;
  if (z() && n !== void 0) {
    let m = await tPr(n, {
      partialOnCap: !1
    });
    if (m === void 0) return {
      kind: "unusable"
    };
    d = m;
  } else try {
    d = await Y(i);
  } catch (m) {
    return W(m) ? {
      kind: "no-key"
    } : {
      kind: "unusable"
    };
  }
  let a = Z(e);
  if (a === void 0) return {
    kind: "no-key"
  };
  let c = `.${a}.key`, g = d.filter(m => m.endsWith(c)).map(m => {
    let h = L2n.exec(m);
    return h ? {
      file: m,
      pid: parseInt(h[1], 10)
    } : void 0;
  }).filter(m => m !== void 0);
  if (g.length === 0) return {
    kind: "no-key"
  };
  let k = async m => {
    let h = z() && n !== void 0 ? await Ie(n, m) : await Xa(A(i, m), x);
    if (h === null) return;
    try {
      let y = Q().safeParse(Do(h));
      return y.success ? y.data : void 0;
    } catch {
      return;
    }
  };
  if (g.length === 1) {
    let m = g[0];
    if (r?.requireLiveOwner && Xf(m.pid)) return {
      kind: "dead-owner"
    };
    let h = await k(m.file);
    if (h === void 0) return {
      kind: "unusable"
    };
    if (r?.requireLiveOwner) {
      let y = K0(h);
      if (y !== void 0) {
        let E = await Ul(m.pid, {
          skipCache: !0
        });
        if (E !== void 0 && !Cve(y, E)) return {
          kind: "dead-owner"
        };
      }
    }
    return {
      kind: "token",
      token: h.peerToken
    };
  }
  let S;
  for (let {file: m, pid: h} of g) {
    let y = await k(m);
    if (y === void 0) continue;
    let E = 0;
    if (!Xf(h)) {
      let w = K0(y), T = w === void 0 ? void 0 : await Ul(h, {
        skipCache: !0
      });
      if (w === void 0 || T === void 0) E = 1; else E = Cve(w, T) ? 2 : 0;
    }
    if (S === void 0 || E > S.rank) S = {
      rank: E,
      peerToken: y.peerToken
    };
  }
  if (S === void 0) return {
    kind: "unusable"
  };
  if (r?.requireLiveOwner && S.rank === 0) return {
    kind: "dead-owner"
  };
  return {
    kind: "token",
    token: S.peerToken
  };
}

async function Ie(e, n) {
  try {
    let r = await e.readText([ {
      key: Fe.session(n),
      offset: 0,
      length: x + 1
    } ]);
    if (!r.ok) return null;
    let i = r.value.items[0];
    if (!i.found || i.totalBytes > x) return null;
    return i.value;
  } catch {
    return null;
  }
}

function lCo(e) {
  return _({
    type: J,
    token: e
  }) + `\n`;
}

var eDs = lCo("0".repeat(C * 2)).length;

function tDs(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === J;
}

function nDs(e, n) {
  if (n === void 0) return;
  if (zH(e, n.peerToken)) return "peer";
  if (zH(e, n.childToken)) return "child";
  return;
}

function U9() {
  let {getFeatureValue_SESSION_PINNED: e} = import.meta.require("./chunk-qt993hka.js");
  try {
    return e("tengu_session_stable_address", !1);
  } catch {
    return !1;
  }
}

var ee = "sid:";

function cLt(e) {
  return `${ee}${e}`;
}

function vft(e) {
  return e.startsWith(ee);
}

function z8e(e) {
  return !vft(e.sock);
}

function nPr(e) {
  let n = typeof e === "string" ? e.trim() : "", r = cfe(n);
  return !n || !r || r === "untitled session" && n.toLowerCase() !== "untitled session";
}

function GBe(e) {
  return e.environmentKind !== void 0 && e.environmentKind !== "bridge";
}

function rPr(e) {
  return !GBe(e) && e.connected === !1;
}

function ro(e) {
  return e.normalize("NFKC").replace(/[\p{Cc}\p{Cf}\p{Cs}]/gu, n => /\s/.test(n) ? n : "").trim().toLowerCase().replace(/\s+/g, "-");
}

function rDs(e) {
  return Dv(ro(e)) !== null;
}

function G8e(e) {
  return typeof e !== "string" || eI(e);
}

function Eft(e, n) {
  return e.name === _a && n !== void 0 && e.agentId === n;
}

function ZZ(e) {
  let n = e.teamContext;
  if (n?.leadAgentId && n.isLeader !== !1) return n.leadAgentId;
  let r = ql(n);
  return r ? bU(_a, r) : void 0;
}

function V8e(e, n) {
  return e.members.filter(r => Eft(r, n) || !G8e(r.name));
}

function eI(e) {
  let n = ro(e);
  return n === Kg || n === _a || n === SIe || n === Cft || Dv(n) !== null;
}

var N = 6, dCo = 12, _Ie = `[0-9a-f]{${N},${dCo}}`, Te = new RegExp(`^(.*\\S)\\s*\\[(${_Ie})\\]$`);

function $K(e) {
  let n = Te.exec(e.trim());
  return n ? {
    name: n[1],
    ref: n[2]
  } : null;
}

function FK(e, n) {
  let r = [];
  r.push({
    name: Kg,
    id: Ze(),
    kind: "main",
    where: "in-process",
    lastActive: void 0,
    sock: void 0
  });
  let i = new Set;
  for (let [s, f] of Object.entries(e.teamContext?.teammates ?? {})) i.add(s), r.push({
    name: f.name,
    id: s,
    kind: "teammate",
    where: "in-process",
    lastActive: void 0,
    sock: void 0
  });
  for (let [s, f] of e.agentNameRegistry) {
    let b = e.tasks[f], I = b?.type === "local_agent" ? b : void 0;
    r.push({
      name: s,
      id: f,
      kind: "subagent",
      where: "in-process",
      lastActive: I?.startTime,
      sock: void 0
    });
  }
  for (let s of n.teamFile?.members ?? []) {
    if (i.has(s.agentId)) continue;
    i.add(s.agentId), r.push({
      name: s.name,
      id: s.agentId,
      kind: "teammate",
      where: "this-machine",
      lastActive: void 0,
      sock: void 0
    });
  }
  let d = U9(), a = n.sessions.filter(z8e), c = d ? re(a) : void 0, g = d ? se(q(), a, c) : void 0;
  for (let s of a) {
    let f = c?.get(s)?.claims;
    r.push({
      name: s.name || Ae(s.cwd),
      id: s.sock,
      kind: "session",
      where: "this-machine",
      lastActive: s.statusUpdatedAt,
      sock: s.sock,
      ...f !== void 0 && f.size > 0 && {
        claimedSessionIds: [ ...f ].sort()
      },
      ...d && s.sessionId !== void 0 && !g.has(s.sessionId) && {
        stableId: cLt(s.sessionId)
      },
      ...d && s.nameSource === "derived" && {
        derivedName: !0
      },
      ...s.hostSessionId !== void 0 && {
        hostSessionId: s.hostSessionId
      }
    });
  }
  let k = new Map;
  for (let s of n.sessions) if (s.bridgeSessionId !== void 0) {
    let f = or(s.bridgeSessionId);
    k.set(f, [ ...k.get(f) ?? [], s.sock ]);
  }
  let S = [];
  for (let s of n.cloud ?? []) {
    if (rsn(n.sessions, s.id)) {
      S.push({
        rawName: s.title || "untitled",
        socks: k.get(or(s.id)) ?? []
      });
      continue;
    }
    r.push({
      name: s.title || "untitled",
      id: s.id,
      kind: "cloud-session",
      ...nPr(s.title) && {
        derivedName: !0
      },
      ...s.acceptsPeerMessages === !0 && {
        reportsInbound: !0
      },
      where: s.remoteControl ? "remote" : "cloud",
      lastActive: s.lastActive,
      sock: void 0,
      ...s.offline && {
        offline: !0
      }
    });
  }
  let m = new Set((n.cloud ?? []).map(s => or(s.id))), h = pLt(n.sessions);
  for (let s of n.bridge ?? []) {
    let f = or(s.id);
    if (m.has(f)) continue;
    if (h.has(f)) {
      S.push({
        rawName: s.title || "untitled",
        socks: k.get(f) ?? []
      });
      continue;
    }
    let b = Date.parse(s.updated_at);
    r.push({
      name: s.title || "untitled",
      id: s.id,
      kind: "bridge-session",
      ...nPr(s.title) && {
        derivedName: !0
      },
      ...s.acceptsPeerMessages === !0 && {
        reportsInbound: !0
      },
      ...s.inboundReportUnavailable && {
        inboundReportUnavailable: !0
      },
      where: GBe(s) ? "cloud" : "remote",
      lastActive: Number.isNaN(b) ? void 0 : b,
      sock: void 0,
      ...rPr(s) && {
        offline: !0
      }
    });
  }
  let y = ZZ(e), E = r.flatMap(s => {
    let f = cfe(s.name);
    if (f === null || !F(f)) return [];
    let b = s.kind === "main" || s.kind === "teammate" && Eft({
      name: s.name,
      agentId: s.id
    }, y), I = (s.kind === "session" || s.kind === "cloud-session" || s.kind === "bridge-session") && ro(f) === Kg;
    return b || I || !G8e(f) ? [ {
      ...s,
      name: f
    } ] : [];
  }), w = new Set, T = xe(E.filter(s => {
    if (s.kind !== "session") return !0;
    let f = `${ro(s.name)}\0${lA(s.id) ?? s.id}`;
    if (w.has(f)) return !1;
    return w.add(f), !0;
  })), M = new Map;
  for (let s of T) {
    let f = ro(s.name), b = M.get(f);
    if (b) b.push(s); else M.set(f, [ s ]);
  }
  let P = new Map;
  for (let {rawName: s, socks: f} of S) {
    let b = cfe(s);
    if (b === null || !F(b)) continue;
    let I = ro(b), L = P.get(I) ?? new Set;
    for (let ie of f) L.add(ie);
    P.set(I, L);
  }
  return {
    candidates: T,
    byName: M,
    remoteNamesClaimedLocally: P
  };
}

function kft(e, n, r) {
  let i = e.get(n);
  if (!i || i.length === 0) return;
  let d = r === void 0 ? [] : i.filter(g => g.name === r), c = (d.length > 0 ? d : i)[0];
  if (c.where === "in-process") return {
    kind: "one",
    candidate: c
  };
  return {
    kind: "ambiguous"
  };
}

function wve(e) {
  return `${e.name} [${e.ref}]`;
}

function oPr(e) {
  return e === "remote" ? `${sPr(e)} (Remote Control)` : sPr(e);
}

function sPr(e) {
  switch (e) {
   case "in-process":
    return "in this session";

   case "cloud":
    return "in the cloud";

   case "remote":
    return "on another machine";

   case "this-machine":
    return "on this machine";
  }
}

function esn(e, n) {
  let r = e.kind === "main" ? "main conversation" : e.kind === "session" || e.kind === "cloud-session" || e.kind === "bridge-session" ? "Claude session" : e.kind, i = oPr(e.where), d = e.lastActive === void 0 ? "" : `, ${e.kind === "subagent" ? "started" : "active"} ${rn(Math.max(0, n - e.lastActive), {
    mostSignificantOnly: !0
  })} ago`;
  return `${wve(e)} \u2014 ${r}, ${i}${d}`;
}

var _e = tI;

function cfe(e) {
  if (typeof e !== "string") return null;
  return [ ...e.replace(/[\p{Cc}\p{Cf}\p{Cs}]/gu, r => /\s/.test(r) ? r : "").replace(/\s+/g, " ").trim() ].slice(0, _e).join("").trim() || "untitled session";
}

function U2n(e, n) {
  return e.find(r => r.name === n) ?? e.find(r => cfe(r.name) === n);
}

function bIe(e) {
  let n = cfe(e);
  return n !== null && !uLt(n) && V0(n) ? n : null;
}

function tsn(e) {
  let n = cfe(e);
  return n !== null && F(n) && !eI(n) ? n : null;
}

function F(e) {
  return !uLt(e) && V0(e) && !e.includes("@") && e !== "*";
}

function uLt(e) {
  let n = ro(e);
  return Yh(e).scheme !== "other" || Yh(n).scheme !== "other" || gCo(e) || gCo(n);
}

function xe(e) {
  let n = e.map(a => R(a.kind, nsn(a))), r = Re().map(a => R("session", a)), i = D([ ...n, ...r ]).sort(), d = new Map;
  for (let a = 0; a < i.length; a++) {
    let c = i[a], g = Math.max(a > 0 ? ne(c, i[a - 1]) : 0, a + 1 < i.length ? ne(c, i[a + 1]) : 0);
    d.set(c, Math.min(c.length, Math.max(N, g + 1)));
  }
  return e.map((a, c) => {
    let g = n[c];
    return {
      ...a,
      ref: g.slice(0, d.get(g))
    };
  });
}

function ne(e, n) {
  let r = 0;
  while (r < e.length && r < n.length && e[r] === n[r]) r++;
  return r;
}

function R(e, n) {
  return String(sn(`${e}:${n}`));
}

function nsn(e) {
  return e.stableId ?? e.id;
}

function Re() {
  let e = bT.CLAUDE_CODE_MESSAGING_SOCKET;
  return e === void 0 ? [] : te(e);
}

function cCo(e) {
  return U9() ? cLt(q()) : e;
}

function te(e) {
  let n = cCo(e);
  return n === e ? [ e ] : [ n, e ];
}

function uCo(e, n) {
  return te(n).some(r => Ne(e, "session", r));
}

function re(e) {
  let n = [];
  for (let i of e) {
    let d = n.filter(c => c.records.some(g => Cie(g.sock, i.sock))), a = {
      records: [],
      claims: new Set
    };
    for (let c of d) {
      a.records.push(...c.records);
      for (let g of c.claims) a.claims.add(g);
    }
    if (a.records.push(i), i.sessionId !== void 0) a.claims.add(i.sessionId);
    n = n.filter(c => !d.includes(c)), n.push(a);
  }
  let r = new Map;
  for (let i of n) for (let d of i.records) r.set(d, i);
  return r;
}

function se(e, n, r) {
  let i = new Set([ e ]), d = new Set;
  for (let a of n) {
    if (a.sessionId === void 0) continue;
    if (i.has(a.sessionId)) d.add(a.sessionId);
    i.add(a.sessionId);
  }
  for (let a of new Set(r.values())) if (a.records.length > 1) for (let c of a.claims) d.add(c);
  return d;
}

function oDs(e, n, r) {
  if (r) return !0;
  let i = q(), d = e.filter(z8e);
  if (n !== void 0) d.push({
    sock: n,
    sessionId: i
  });
  let a = re(d);
  return se("", d, a).has(i);
}

function K8e(e, n) {
  return R(e, n).slice(0, N);
}

function Ne(e, n, r) {
  return e.length >= N && R(n, r).startsWith(e);
}

function pLt(e) {
  return new Set(e.flatMap(n => n.bridgeSessionId ? [ or(n.bridgeSessionId) ] : []));
}

function rsn(e, n) {
  let r = or(n);
  return e.some(i => i.bridgeSessionId !== void 0 && or(i.bridgeSessionId) === r);
}

export { bft, ePr, vie, YHs, Sft, Kg, Sve, wft, tPr, L2n, N2n, XHs, $2n, NK, lA, JHs, F2n, QHs, ZHs, lCo, eDs, tDs, nDs, U9, cLt, vft, z8e, nPr, GBe, rPr, ro, rDs, G8e, Eft, ZZ, V8e, eI, dCo, _Ie, $K, FK, kft, wve, oPr, sPr, esn, cfe, U2n, bIe, tsn, uLt, nsn, cCo, uCo, oDs, K8e, pLt, rsn };
