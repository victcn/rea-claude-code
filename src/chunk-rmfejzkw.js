// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { jt } from "./chunk-b0z4bv3v.js";

import { bfe } from "./chunk-46phtgr7.js";

import { _, Do, qln, t } from "./chunk-kawq2919.js";

import { hq } from "./chunk-5wbhf1bk.js";

import { Sme, LG, wl, Cf, NG, d } from "./chunk-6ah1819r.js";

import { mr } from "./chunk-0cdqg49t.js";

import { rEe, Qf } from "./chunk-60c97a4m.js";

import { psn } from "./chunk-e7rgnck3.js";

import { Sk, gIe, Mxr, SAo, tLt, wAo, ift, Ion, vAo, Oon, Mon, aft, lft, kAo, TAo, nLt, rLt, Hon } from "./chunk-f1zpf9me.js";

import { t9, on, Sf, sp } from "./chunk-b47tzzqx.js";

import { OPt } from "./chunk-rkfs82vw.js";

import { um, Qi, Qqn, fFs, mFs } from "./chunk-ws55c9wv.js";

var we = "allow_usage_transcript_scan", Le = "allow_skill_doctor_transcript_scan", xe = "allow_stats_transcript_scan", Ne = {
  policy: we,
  hipaaReason: "Not shown under your organization's policy: this breakdown is built by scanning the session transcripts saved on this machine."
}, Ie = {
  policy: Le,
  hipaaReason: "Not shown under your organization's policy: measured by scanning the session transcripts saved on this machine."
}, Pe = {
  policy: xe,
  hipaaReason: "Not shown under your organization's policy: these stats are built by scanning the session transcripts saved on this machine."
};

function H(e) {
  if (on(e.policy)) return {
    allowed: !0
  };
  if (sp(e.policy) === "org_denied" && bfe().includes("hipaa")) return {
    allowed: !1,
    reason: e.hipaaReason
  };
  let {featureLabel: n, verb: o} = t9(e.policy);
  return {
    allowed: !1,
    reason: Sf(e.policy, n, o) ?? `${n} ${o} unavailable right now.`
  };
}

function l2e() {
  return H(Ne);
}

function QGt() {
  return H(Ie);
}

function lwn() {
  return H(Pe);
}

import { readdir as j, stat as De } from "fs/promises";

import { extname as ne, join as v, sep as q } from "path";

function Z() {
  return {
    lastRequest: void 0,
    lastContext: 0,
    carriedTokens: 0,
    firstPromptBytes: 0,
    startTokens: 0,
    pendingToolResultBytes: 0,
    largeToolResultTokens: 0
  };
}

function K(e, n) {
  if (e.lastRequest === void 0) e.firstPromptBytes += n;
}

function G(e) {
  return e / 2.5 > 1e4;
}

function ee(e, n) {
  if (G(n)) e.pendingToolResultBytes += n;
}

function te(e, n) {
  let o = n.cached + n.cacheCreate + n.uncached;
  if (n.uuid === e.lastRequest) e.carriedTokens = Math.max(e.carriedTokens, o + n.output); else {
    if (e.lastRequest === void 0) e.startTokens = o - Math.round(e.firstPromptBytes / 2.5); else if (o < e.lastContext) e.largeToolResultTokens = Math.max(0, e.largeToolResultTokens - (e.lastContext - o)); else {
      let s = Math.min(o - e.carriedTokens, e.pendingToolResultBytes / 2.5);
      if (s > 1e4) e.largeToolResultTokens += s;
    }
    e.startTokens = Math.min(e.startTokens, o), e.lastRequest = n.uuid, e.lastContext = o, 
    e.carriedTokens = o + n.output, e.pendingToolResultBytes = 0;
  }
  n.largeToolResultTokens = e.largeToolResultTokens, n.alwaysOnTokens = !n.isSubagent && e.startTokens > 4e4 ? e.startTokens : 0;
}

var U = 4, pe = 4194304, Be = pe, fe = 6048e5, ve = 1e5, Ue = 15e4, Fe = 3, He = .5, Ke = 3e5, Ge = 4, qe = 8, We = `${q}subagents${q}${OPt}${q}`, p = new TextEncoder, me = p.encode('"type":"assistant"'), $e = p.encode('"usage":{'), Te = p.encode('"timestamp":"'), Ye = p.encode('"sessionId":"'), je = p.encode('"model":"'), Xe = p.encode('"requestId":"'), oe = p.encode('"id":"'), ze = p.encode("msg_"), _e = p.encode('"uuid":"'), Ve = p.encode('"input_tokens":'), Qe = p.encode('"output_tokens":'), Je = p.encode('"cache_creation_input_tokens":'), Ze = p.encode('"cache_read_input_tokens":'), et = p.encode('"isSidechain":true'), tt = p.encode('"isSidechain": true'), nt = p.encode('"effort":"max"'), ot = p.encode('"attribution'), st = p.encode('"attributionAgent":"'), rt = p.encode('"attributionSkill":"'), it = p.encode('"attributionPlugin":"'), ct = p.encode('"attributionMcpServer":"'), at = p.encode('"type":"user"'), W = p.encode('"isMeta":true'), ut = p.encode('"subtype":"scheduled_task_fire"'), lt = p.encode('"taskId":"'), Y = p.encode('"scheduledTaskId":"'), dt = p.encode('"scheduledFireId":"'), pt = p.encode('"type":"tool_result"'), ft = p.encode('"toolUseResult":'), mt = p.encode('"turnCompanion":true'), Tt = p.encode(`"text":"${Sk.slice(0, -1)}`), se = p.encode('"content":"['), _t = p.encode(" prior /loop wakeup"), St = p.encode('"isCompactSummary":true'), gt = p.encode('"type":"attachment"'), Rt = p.encode('"attachment":{"type":"file"'), Et = p.encode('"type":"queued_command"'), Ct = p.encode('"origin":{'), yt = p.encode('"origin":{"kind":"human"'), ht = p.encode('"promptSource":"'), Mt = p.encode('"type":"system"'), bt = p.encode('"subtype":"local_command"'), L = e => [ p.encode(`"content":"<${e}>`), p.encode(`"text":"<${e}>`) ], re = [ ...L("command-message"), ...L("command-name") ], Ot = L(NG), ie = [ ...L(wl), ...L(Cf) ], At = [ ...L(Sme), ...L(LG) ], w = (e, n, o) => n.some(s => S(e, s, 0, o) >= 0), kt = [ p.encode(`"content":${_(gIe).slice(0, -1)}`), p.encode(`"text":${_(gIe).slice(0, -1)}`) ], Se = (e, n = !1) => {
  let o = n ? _(e) : _(e).slice(0, -1);
  return [ p.encode(`"content":${o}`), p.encode(`"text":${o}`) ];
}, wt = [ ...SAo.map(e => `${e}${Mxr}`), tLt, wAo, ift, psn, Hon ].filter(e => e.length > 0).flatMap(e => Se(e)), Lt = [ Ion, vAo, Oon, Mon, aft, lft, TAo, kAo, nLt, rLt ].flatMap(e => Se(e, !0)), xt = p.encode('"cron":"'), Nt = p.encode('"prompt":"'), It = p.encode('"taskKind":"loop"'), Pt = p.encode('"content":"'), Dt = p.encode('"text":"'), I = 34, ge = 92, Bt = 123, ce = 125, vt = 91, Ut = 93, X = 48, Re = 57;

function S(e, n, o, s) {
  let r = e.subarray(o, s).indexOf(n);
  return r < 0 ? -1 : o + r;
}

function M(e, n, o, s) {
  let r = S(e, n, o, s);
  if (r < 0) return;
  let i = r + n.length, c = i;
  while (c < s && e[c] !== I) c++;
  return e.toString("utf8", i, c);
}

function F(e, n, o, s, r) {
  let i = S(e, n, o, s);
  if (i < 0) return;
  let c = i + n.length, l = c, a = Math.min(s, c + r);
  while (l < a && e[l] !== I) {
    if (e[l] === ge) l++;
    l++;
  }
  let T = l >= a;
  if (l > a) l = a - 1;
  if (T) l = Ft(e, c, l);
  let u = e.toString("utf8", c, l);
  if (T) u = u.replace(/(^|[^\\])((?:\\\\)*)\\u[0-9a-fA-F]{0,3}$/, "$1$2");
  try {
    let g = Do(`"${u}"`);
    return typeof g === "string" ? g : void 0;
  } catch {
    return;
  }
}

function Ft(e, n, o) {
  let s = o;
  while (s > n && (e[s - 1] & 192) === 128) s--;
  if (s === n) return n;
  let r = e[s - 1], i = r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
  return o - (s - 1) < i ? s - 1 : o;
}

function Ht(e, n, o) {
  let s = n;
  while (!0) {
    if (s = S(e, oe, s, o), s < 0) return;
    let r = s + oe.length;
    if (S(e, ze, r, r + 4) === r) {
      let i = r;
      while (i < o && e[i] !== I) i++;
      return e.toString("utf8", r, i);
    }
    s = r;
  }
}

function P(e, n, o, s) {
  let r = S(e, n, o, s);
  if (r < 0) return 0;
  let i = r + n.length, c = 0;
  while (i < s && e[i] >= X && e[i] <= Re) c = c * 10 + (e[i] - X), i++;
  return c;
}

function Kt(e) {
  if (!e) return 3;
  let n = e.toLowerCase();
  if (n.includes("fable")) return 10;
  if (n.includes("opus")) return 5;
  if (n.includes("haiku")) return 1;
  return 3;
}

function Gt(e) {
  return (e.cached + e.uncached * 10 + e.cacheCreate * 12.5 + e.output * 50) * e.modelTier;
}

async function ZGt(e) {
  let n = Date.now() - fe, o = Date.now() - 864e5, s = ae(), r = ae();
  return await Ee(n, i => {
    if (le(r, i), i.ts >= o) le(s, i, o);
  }, e, i => {
    if (ue(r, i), i.ts >= o) ue(s, i);
  }), {
    day: de(s),
    week: de(r)
  };
}

async function Ee(e, n, o, s, r) {
  if (o) return qt(o, e, n, s, r);
  let i = Qf(), c;
  try {
    c = await j(i);
  } catch (u) {
    if (jt(u)) return;
    throw u;
  }
  let a = (await Promise.all(c.map(u => zt(v(i, u))))).flat(), T = Ce(n, s);
  for (let u = 0; u < a.length; u += U) {
    let g = a.slice(u, u + U), R = g.map(() => r && Oe(r()));
    (await Promise.all(g.map((C, x) => Vt(C, e, R[x])))).forEach((C, x) => {
      T(C), R[x]?.end(C);
    });
  }
}

function Ce(e, n) {
  let o = new Set, s = r => {
    if (!r) return !0;
    if (o.has(r)) return !1;
    return o.add(r), !0;
  };
  return r => {
    for (let i of r.records) if (s(i.uuid)) e(i);
    if (n) {
      for (let i of r.fires) if (s(i.uuid)) n(i);
    }
  };
}

async function qt(e, n, o, s, r) {
  let i = [], c = Qqn(), l = await Qi(R => e.listEntries({
    namespace: "transcript"
  }, {
    skipScopeStats: !0,
    ...R !== void 0 && {
      cursor: R
    }
  }), R => {
    for (let A of R) {
      let C = rEe(A, mr);
      if (C !== void 0) i.push(C);
    }
  }, {
    budget: c
  });
  V("project", l, c);
  let T = (await Promise.all(i.map(R => Wt(e, R, n, c)))).flat(), u = Ce(o, s);
  for (let R = 0; R < T.length; R += U) {
    let A = T.slice(R, R + U), C = A.map(() => r && Oe(r()));
    (await Promise.all(A.map((N, f) => $t(e, N, n, C[f])))).forEach((N, f) => {
      u(N), C[f]?.end(N);
    });
  }
  let g = mFs(c);
  if (g > 0) t(`foldRecentRecords: ${g} more v5 listings were cut short after the scan's ${um}-page budget ran out`);
}

async function Wt(e, n, o, s) {
  let r = [], i = [], c = await Qi(u => e.listEntries({
    namespace: "transcript",
    projectKey: n
  }, {
    skipScopeStats: !0,
    ...u !== void 0 && {
      cursor: u
    }
  }), u => {
    for (let g of u) if (g.kind === "key") he(r, g); else if (g.scope.namespace === "transcript" && g.scope.sessionId !== void 0 && mr(g.scope.sessionId)) i.push(g.scope.sessionId);
  }, {
    budget: s
  });
  V("session", c, s);
  let l = new Map;
  for (let u of r) if (u.key.namespace === "transcript" && u.key.agentId === void 0 && u.key.journal !== !0) l.set(u.key.sessionId, u.mtimeMs);
  let a = i.filter(u => (l.get(u) ?? 1 / 0) >= o), T = await Promise.all(a.map(u => ye(e, n, u, s)));
  return r.concat(T.flat());
}

async function ye(e, n, o, s, r) {
  let i = [], c = [], l = await Qi(T => e.listEntries({
    namespace: "transcript",
    projectKey: n,
    sessionId: o,
    ...r !== void 0 && {
      agentRelPath: r
    }
  }, {
    skipScopeStats: !0,
    ...T !== void 0 && {
      cursor: T
    }
  }), T => {
    for (let u of T) if (u.kind === "key") {
      if (u.key.namespace === "transcript" && (u.key.agentId !== void 0 || u.key.journal === !0)) he(i, u);
    } else if (u.scope.namespace === "transcript" && u.scope.agentRelPath !== void 0 && u.scope.agentRelPath.length > (r?.length ?? 0)) c.push(u.scope.agentRelPath);
  }, {
    budget: s
  });
  V("subagent", l, s);
  let a = await Promise.all(c.map(T => ye(e, n, o, s, T)));
  return i.concat(a.flat());
}

function V(e, n, o) {
  let s = fFs(n, o);
  if (n.status === "error") t(`foldRecentRecords: v5 ${e} listing failed: ${n.error.code}`); else if (s === "first-truncation") t(`foldRecentRecords: v5 ${e} listing cut short (the scan's ${um}-page budget is spent); keeping what was listed`);
}

function he(e, n) {
  if (n.kind === "key" && n.key.namespace === "transcript" && n.size !== void 0 && n.mtimeMs !== void 0) e.push({
    key: n.key,
    size: n.size,
    mtimeMs: n.mtimeMs
  });
}

async function $t(e, n, o, s) {
  let r = Me();
  if (n.mtimeMs >= o) await Yt(e, n, be(r, o, n.key.namespace === "transcript" && n.key.agentRelPath?.[0] === OPt, s));
  return r;
}

async function Yt(e, n, o) {
  let {key: s} = n, r = n.size <= pe, i = 0, c = [], l = 0;
  while (!0) {
    let a = await e.read([ r ? s : {
      key: s,
      offset: i,
      length: Be
    } ]);
    if (!a.ok) {
      t(`readRecordsFromStream: v5 read failed: ${a.error.code}`);
      return;
    }
    let T = a.value.items[0];
    if (!T.found) return;
    let u = Buffer.from(T.value.buffer, T.value.byteOffset, T.value.byteLength), g = 0;
    while (g < u.length) {
      let R = u.indexOf(10, g);
      if (R === -1) {
        c.push(Buffer.from(u.subarray(g))), l += u.length - g;
        break;
      }
      if (l === 0) o(u.subarray(g, R)); else o(Buffer.concat([ ...c, u.subarray(g, R) ], l + (R - g))), 
      c = [], l = 0;
      g = R + 1;
    }
    if (i += T.value.byteLength, r || T.value.byteLength === 0 || i >= T.totalBytes) break;
  }
  if (l > 0) o(c.length === 1 ? c[0] : Buffer.concat(c, l));
}

function Xt(e, n) {
  if (!n.attributionSkill) return;
  e.set(n.attributionSkill, (e.get(n.attributionSkill) ?? 0) + n.cached + n.cacheCreate + n.uncached + n.output);
}

async function _6o(e) {
  let n = Date.now() - fe, o = new Map;
  return await Ee(n, s => Xt(o, s), e), o;
}

async function zt(e) {
  let n;
  try {
    n = await j(e, {
      withFileTypes: !0
    });
  } catch (i) {
    if (jt(i)) return [];
    throw i;
  }
  let o = [], s = [];
  for (let i of n) if (i.isFile() && ne(i.name) === ".jsonl") o.push(v(e, i.name)); else if (i.isDirectory()) s.push(i.name);
  let r = await Promise.all(s.map(async i => {
    let c = v(e, i, "subagents");
    try {
      return (await j(c, {
        recursive: !0
      })).filter(a => ne(a) === ".jsonl").map(a => v(c, a));
    } catch (l) {
      if (jt(l)) return [];
      throw l;
    }
  }));
  for (let i of r) for (let c of i) o.push(c);
  return o;
}

async function Vt(e, n, o) {
  let s = Me();
  return await Qt(e, n, be(s, n, e.includes(We), o)), s;
}

async function Qt(e, n, o) {
  let s;
  try {
    s = await De(e);
  } catch (r) {
    if (jt(r)) return;
    throw r;
  }
  if (!s.isFile() || s.mtimeMs < n) return;
  try {
    for await (let r of qln(e)) o(r);
  } catch (r) {
    if (jt(r)) return;
    throw r;
  }
}

function Me() {
  return {
    records: [],
    fires: []
  };
}

function be(e, n, o, s) {
  let r = Zt(e, n, o);
  if (!s) return r;
  return i => {
    r(i), s.line(i, e);
  };
}

function Oe(e) {
  let n = !0, o = s => {
    if (!n) return;
    try {
      s();
    } catch (r) {
      n = !1, d(r);
    }
  };
  return {
    line: (s, r) => o(() => e.line(s, r)),
    end: s => o(() => e.end(s))
  };
}

var Jt = /<command-name>([^<]{1,200})<\/command-name>/, Q = 200, z = 6 * Q;

function Zt(e, n, o) {
  let s = 0, r = [], i = [], c = 0, l = Z(), a = !0, T, u = () => {
    s++, i = [], c = 0, a = !1;
  }, g = () => {
    s++, i = [], c = 0, a = !0, C = void 0, T = void 0;
  }, R = () => {
    if (!T) return;
    if (c = Math.max(0, c - 1), T.run) e.fires.pop(), i.pop();
    if (T.fire && T.fire.taskId === void 0) r.unshift(T.fire);
    T = void 0;
  }, A = () => {
    if (T?.isCommandRecord) R(), g();
  }, C, x = (f, m) => {
    let E = M(f, dt, 0, m);
    if (E !== void 0) {
      let y = r.findIndex(h => h.uuid === E);
      return y < 0 ? void 0 : r.splice(y, 1)[0];
    }
    let b = M(f, Y, 0, m);
    if (b !== void 0) {
      let y = r.findLastIndex(k => k.taskId === b);
      if (y < 0) return;
      let h = r[y];
      return r = r.filter(k => k.taskId !== b), h;
    }
    if (!(S(f, Ct, 0, m) < 0 && (S(f, W, 0, m) >= 0 || w(f, re, m)))) {
      r = r.filter(y => y.taskId !== void 0);
      return;
    }
    if (r[0]?.taskId === void 0) return r.shift();
    return;
  }, N = (f, m) => S(f, W, 0, m) >= 0 && (wt.some(E => S(f, E, 0, m) >= 0) || Lt.some(E => S(f, E, 0, m) >= 0));
  return f => {
    let m = f.length;
    if (S(f, me, 0, m) >= 0) {
      let E = rn(f, 0, m, o);
      if (a = !0, T = void 0, E) te(l, E);
      if (E && E.ts >= n) {
        if (c > 1 && i.length > 0) {
          let b = 1 / c;
          E.loopShares = i.map(O => ({
            ...O,
            share: b
          }));
        } else if (i[0]) E.loop = i[0].loop, E.loopFireTs = i[0].fireTs;
        e.records.push(E);
      }
      return;
    }
    if (S(f, at, 0, m) >= 0) {
      let E = S(f, pt, 0, m);
      if (E < 0) K(l, m); else if (G(m - E)) {
        let J = S(f, ft, E, m);
        ee(l, (J < 0 ? m : J) - E);
      }
      if (E >= 0 || S(f, mt, 0, m) >= 0 || S(f, St, 0, m) >= 0 || w(f, At, m) || en(f, m) || N(f, m)) return;
      if (S(f, Tt, 0, m) >= 0) {
        g();
        return;
      }
      let b = S(f, W, 0, m) >= 0;
      if (b && w(f, kt, m)) {
        if (R(), c === 0) g();
        return;
      }
      if (w(f, ie, m)) {
        A();
        return;
      }
      let O = w(f, re, m);
      if (w(f, Ot, m) || b && !O && S(f, ht, 0, m) < 0 && S(f, Y, 0, m) < 0) return;
      let y = S(f, yt, 0, m) >= 0 || !b && !O && S(f, Y, 0, m) < 0, h = x(f, m);
      if (h?.openBatch === s && !a && c > 0) g();
      if (a || y) u();
      if (c++, T = {
        fire: h,
        run: !1,
        isCommandRecord: O
      }, !h) {
        C = void 0;
        return;
      }
      let k = h.loop ?? sn(f, m);
      if (!k) return;
      if (!k.isDynamic) C = void 0;
      if (h.ts < n) return;
      e.fires.push({
        ts: h.ts,
        uuid: h.uuid,
        loop: k
      }), i.push({
        loop: k,
        fireTs: h.ts
      }), T.run = !0;
      return;
    }
    if (l.lastRequest === void 0 && S(f, Rt, 0, m) >= 0) {
      K(l, m);
      return;
    }
    if (S(f, Mt, 0, m) >= 0 && S(f, bt, 0, m) >= 0 && w(f, ie, m)) {
      A();
      return;
    }
    if (S(f, gt, 0, m) >= 0 && S(f, Et, 0, m) >= 0) {
      g();
      return;
    }
    if (S(f, ut, 0, m) >= 0) {
      let E = M(f, Te, 0, m), b = E ? Date.parse(E) : NaN;
      if (Number.isNaN(b)) return;
      let O = F(f, Nt, 0, m, z), y = O ? hq(O, Q) : void 0, h = S(f, It, 0, m) >= 0;
      if (y && h) C ??= y, y = C;
      r.push({
        ts: b,
        openBatch: c > 0 && !a ? s : void 0,
        uuid: M(f, _e, 0, m) ?? "",
        taskId: M(f, lt, 0, m),
        loop: y ? {
          prompt: y,
          cron: nn(F(f, xt, 0, m, tn)),
          isDynamic: h
        } : null
      });
    }
  };
}

function en(e, n) {
  let o = S(e, se, 0, n);
  if (o < 0) return !1;
  let s = o + se.length, r = s;
  while (s < n && e[s] >= X && e[s] <= Re) s++;
  return s > r && S(e, _t, s, n) === s;
}

var Ae = 64, tn = 6 * Ae;

function nn(e) {
  return e === void 0 ? void 0 : hq(e, Ae);
}

function sn(e, n) {
  let o = F(e, Pt, 0, n, z) ?? F(e, Dt, 0, n, z);
  if (!o) return null;
  let s = o.match(Jt)?.[1], r = hq(s ?? o, Q);
  return r ? {
    prompt: r,
    cron: void 0,
    isDynamic: !1
  } : null;
}

function rn(e, n, o, s) {
  if (S(e, me, n, o) < 0) return;
  if (S(e, $e, n, o) < 0) return;
  let r = M(e, Te, n, o), i = M(e, Ye, n, o);
  if (!r || !i) return;
  let c = Date.parse(r);
  if (Number.isNaN(c)) return;
  let l = P(e, Ve, n, o), a = P(e, Qe, n, o), T = P(e, Je, n, o), u = P(e, Ze, n, o);
  if (l + a + T + u === 0) return;
  let g = S(e, ot, n, o) >= 0, R = M(e, je, n, o);
  return {
    ts: c,
    sessionId: i,
    cached: u,
    cacheCreate: T,
    uncached: l,
    output: a,
    isSubagent: S(e, et, n, o) >= 0 || S(e, tt, n, o) >= 0,
    isMaxEffort: cn(e.subarray(n, o), nt),
    isWorkflow: s,
    alwaysOnTokens: 0,
    largeToolResultTokens: 0,
    modelTier: Kt(R),
    model: R,
    uuid: M(e, Xe, n, o) ?? Ht(e, n, o) ?? M(e, _e, n, o) ?? "",
    ...g && {
      attributionAgent: M(e, st, n, o),
      attributionSkill: M(e, rt, n, o),
      attributionPlugin: M(e, it, n, o),
      attributionMcpServer: M(e, ct, n, o)
    }
  };
}

function cn(e, n) {
  let o = e.lastIndexOf(ce);
  for (let s = e.lastIndexOf(n); s >= 0; s = s === 0 ? -1 : e.lastIndexOf(n, s - 1)) {
    let r = 1, i = !1, c = s + n.length;
    for (;c < e.length && r > 0; c++) {
      let l = e[c];
      if (i) {
        if (l === ge) c++; else if (l === I) i = !1;
      } else if (l === I) i = !0; else if (l === Bt || l === vt) r++; else if (l === ce || l === Ut) r--;
    }
    if (r === 0 && c - 1 === o) return !0;
  }
  return !1;
}

function ae() {
  return {
    totalCost: 0,
    requestCount: 0,
    cacheMissCost: 0,
    cacheMissCount: 0,
    longCtxCost: 0,
    longCtxCount: 0,
    maxEffortCost: 0,
    maxEffortCount: 0,
    workflowCost: 0,
    workflowCount: 0,
    alwaysOnCost: 0,
    alwaysOnCount: 0,
    largeToolResultCost: 0,
    largeToolResultCount: 0,
    sessions: new Map,
    buckets: new Map,
    byAgent: new Map,
    bySkill: new Map,
    byPlugin: new Map,
    byMcpServer: new Map,
    loops: new Map
  };
}

function ke(e, n) {
  let o = e.loops.get(n.prompt);
  if (!o) o = {
    prompt: n.prompt,
    cron: n.cron,
    isDynamic: n.isDynamic,
    runs: 0,
    tokens: 0,
    lastRunMs: 0
  }, e.loops.set(n.prompt, o);
  return o;
}

function ue(e, n) {
  let o = ke(e, n.loop);
  if (o.runs++, n.ts >= o.lastRunMs) o.lastRunMs = n.ts, o.cron = n.loop.cron ?? o.cron, 
  o.isDynamic = n.loop.isDynamic;
}

function D(e, n, o) {
  if (n) e.set(n, (e.get(n) ?? 0) + o);
}

function le(e, n, o = -1 / 0) {
  let s = Gt(n);
  if (e.totalCost += s, e.requestCount++, n.attributionAgent) D(e.byAgent, n.attributionSkill ?? n.attributionAgent, s); else D(e.bySkill, n.attributionSkill, s);
  if (D(e.byPlugin, n.attributionPlugin, s), D(e.byMcpServer, n.attributionMcpServer, s), 
  n.loop || n.loopShares) {
    let T = n.cached + n.cacheCreate + n.uncached + n.output;
    for (let {loop: u, fireTs: g, share: R} of n.loopShares ?? [ {
      loop: n.loop,
      fireTs: n.loopFireTs ?? n.ts,
      share: 1
    } ]) if (g >= o) ke(e, u).tokens += T * R;
  }
  let r = n.cached + n.cacheCreate + n.uncached;
  if (n.uncached > ve) e.cacheMissCost += s, e.cacheMissCount++;
  if (r > Ue) e.longCtxCost += s, e.longCtxCount++;
  if (n.isMaxEffort) e.maxEffortCost += s, e.maxEffortCount++;
  if (n.isWorkflow) e.workflowCost += s, e.workflowCount++;
  let i = s - n.output * 50 * n.modelTier;
  if (n.alwaysOnTokens > 0) e.alwaysOnCost += i * Math.min(1, n.alwaysOnTokens / r), 
  e.alwaysOnCount++;
  if (n.largeToolResultTokens > 0) e.largeToolResultCost += i * Math.min(1, n.largeToolResultTokens / r), 
  e.largeToolResultCount++;
  let c = e.sessions.get(n.sessionId);
  if (!c) c = {
    cost: 0,
    requests: 0,
    subCost: 0,
    subCount: 0,
    hours: new Set
  }, e.sessions.set(n.sessionId, c);
  if (c.cost += s, c.requests++, n.isSubagent) c.subCost += s, c.subCount++;
  c.hours.add(Math.floor(n.ts / 36e5));
  let l = Math.floor(n.ts / Ke), a = e.buckets.get(l);
  if (!a) a = {
    sids: new Set,
    cost: 0,
    count: 0
  }, e.buckets.set(l, a);
  a.sids.add(n.sessionId), a.cost += s, a.count++;
}

function de(e) {
  let n = 0, o = 0;
  for (let a of e.buckets.values()) if (a.sids.size >= Ge) n += a.cost, o += a.count;
  let s = 0, r = 0, i = 0, c = 0;
  for (let a of e.sessions.values()) {
    if (a.subCount >= Fe || a.cost > 0 && a.subCost / a.cost > He) s += a.cost, r++;
    if (a.hours.size >= qe) i += a.cost, c++;
  }
  let l = [ {
    key: "cache_miss",
    cost: e.cacheMissCost,
    count: e.cacheMissCount
  }, {
    key: "long_context",
    cost: e.longCtxCost,
    count: e.longCtxCount
  }, {
    key: "subagent_heavy",
    cost: s,
    count: r
  }, {
    key: "high_parallel",
    cost: n,
    count: o
  }, {
    key: "cron",
    cost: i,
    count: c
  }, {
    key: "max_effort",
    cost: e.maxEffortCost,
    count: e.maxEffortCount
  }, {
    key: "workflow",
    cost: e.workflowCost,
    count: e.workflowCount
  }, {
    key: "always_on_context",
    cost: e.alwaysOnCost,
    count: e.alwaysOnCount
  }, {
    key: "large_tool_results",
    cost: e.largeToolResultCost,
    count: e.largeToolResultCount
  } ];
  return l.sort((a, T) => T.cost - a.cost), {
    totalCost: e.totalCost,
    requestCount: e.requestCount,
    sessionCount: e.sessions.size,
    behaviors: l,
    agents: B(e.byAgent, e.totalCost),
    skills: B(e.bySkill, e.totalCost),
    plugins: B(e.byPlugin, e.totalCost),
    mcpServers: B(e.byMcpServer, e.totalCost),
    loops: [ ...e.loops.values() ].map(a => ({
      ...a,
      tokens: Math.round(a.tokens)
    })).sort((a, T) => T.tokens - a.tokens)
  };
}

function B(e, n) {
  if (e.size === 0 || n === 0) return [];
  return [ ...e.entries() ].sort((o, s) => s[1] - o[1]).map(([o, s]) => ({
    name: o,
    pct: Math.round(s / n * 100)
  })).filter(o => o.pct > 0);
}

export { l2e, QGt, lwn, ZGt, _6o };
