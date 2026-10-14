// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { K, YUs, B, q, zje, F0o, ve, Lr, hx, he, lMe } from "./chunk-3pqddg8f.js";

import { l, zr, yD, ci } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { lo } from "./chunk-ddr690nj.js";

import { p } from "./chunk-jkzenvsk.js";

import { fzn, af, An, _C, wRr, _k, $rn, BO } from "./chunk-xywp7esx.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { dl } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { ja, qf } from "./chunk-s2t7g8m9.js";

import { kp } from "./chunk-5brm0azz.js";

import { Dt } from "./chunk-cqgvwwgb.js";

import { dMr, fX } from "./chunk-9yajep3y.js";

import { zd } from "./chunk-2my8wpr5.js";

import { $t } from "./chunk-g6nh65r0.js";

import { Q4e } from "./chunk-bzekf4tc.js";

import { A$n, P8 } from "./chunk-qbhknj4t.js";

import { G0, qGn } from "./chunk-3tedvrs9.js";

import { me, lr, St } from "./chunk-dexzwy8h.js";

import { fOe, a$s, uI } from "./chunk-02g14ha5.js";

import { Is } from "./chunk-p35rdtee.js";

import { D } from "./chunk-hmqkrrtz.js";

import { we } from "./chunk-m8ez8fhk.js";

var C = we(ja(), 1), ye = we(qf(), 1);

var Re = p(() => St({
  sub: me().optional().catch(void 0),
  email: me().optional().catch(void 0),
  groups: lr(me()).optional().catch(void 0)
}).passthrough());

function z(e) {
  let n = e.indexOf("."), o = e.indexOf(".", n + 1);
  if (n < 0 || o < 0) return null;
  try {
    let r = Re().safeParse(Y(Buffer.from(e.slice(n + 1, o), "base64url").toString("utf8")));
    return r.success ? r.data : null;
  } catch {
    return null;
  }
}

function _Dn(e) {
  return hx(e) ? z(e.jwt)?.sub || void 0 : void 0;
}

var P = Object.freeze({}), Se = new K(() => ({
  jwt: void 0,
  attrs: P
}));

function Jgr() {
  let e = Lr(), n = hx(e) ? e.jwt : void 0, o = Se.of(B().host);
  if (n === o.jwt) return o.attrs;
  if (o.jwt = n, !n) return o.attrs = P;
  let r = z(n);
  if (!r) return o.attrs = P;
  let s = {
    "identity.source": "gateway-oidc"
  };
  if (r.sub) s["user.id"] = r.sub;
  if (r.email) s["user.email"] = r.email;
  if (r.groups && r.groups.length > 0) s["user.groups"] = r.groups.join(",");
  return o.attrs = Object.freeze(s);
}

var Ae = {
  OTEL_METRICS_INCLUDE_SESSION_ID: !0,
  OTEL_METRICS_INCLUDE_VERSION: !1,
  OTEL_METRICS_INCLUDE_ACCOUNT_UUID: !0,
  OTEL_METRICS_INCLUDE_ENTRYPOINT: !1,
  OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES: !0,
  OTEL_METRICS_INCLUDE_REPOSITORY: !1
}, M = "vcs.repository.url.full", N = "vcs.repository.name", L = "vcs.owner.name", k = "vcs.provider.name", Ce = "vcs.ref.head.revision", xe = "vcs.ref.head.name", Me = "vcs.ref.head.type", be = [ M, L, N, k ], Oe = "gitea.com", Ie = /^ssh:\/\/[^/?#]*:7999(?=[/?#]|$)/i;

function R(e) {
  let n = Ae[e], o = process.env[e];
  if (o === void 0) return n;
  return Le(o);
}

function G(e) {
  for (let n = 0; n < e.length; n++) {
    let o = e.charCodeAt(n);
    if (o < 33 || o === 44 || o === 59 || o === 92 || o > 126) return !1;
  }
  return !0;
}

var V = 255, W = lo(e => {
  if (!e) return {};
  let n = {};
  try {
    for (let o of e.split(",")) {
      let [r, s, ...i] = o.split("=");
      if (r === void 0 || s === void 0 || i.length > 0) continue;
      let c = r.trim(), f = s.trim().split(/^"|"$/).join("");
      if (c.length === 0 || c.length > V || !G(c)) throw Error("invalid resource attribute key");
      if (f.length > V || !G(f)) throw Error("invalid resource attribute value");
      n[c] = decodeURIComponent(f);
    }
  } catch {
    return {};
  }
  return n;
});

function uxt() {
  let e = BO(), n = q(), o = Jgr(), r = Object.keys(o).length > 0, s = {}, i = W(a.OTEL_RESOURCE_ATTRIBUTES);
  if (R("OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES")) for (let [u, g] of Object.entries(i)) {
    if (r && (u.startsWith("user.") || u.startsWith("identity."))) continue;
    s[u] = g;
  }
  if (s["user.id"] = e, R("OTEL_METRICS_INCLUDE_SESSION_ID")) {
    if (s["session.id"] = n, a.CLAUDE_CODE_REMOTE_SESSION_ID) s["ccr.session.id"] = a.CLAUDE_CODE_REMOTE_SESSION_ID;
  }
  if (R("OTEL_METRICS_INCLUDE_VERSION")) s["app.version"] = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION;
  if (R("OTEL_METRICS_INCLUDE_ENTRYPOINT")) {
    let u = kp();
    if (u) s["app.entrypoint"] = u;
  }
  if (R("OTEL_METRICS_INCLUDE_REPOSITORY")) {
    let u = i[M] === void 0 ? X().attributes : void 0;
    for (let g of be) {
      let m = i[g] ?? u?.[g];
      if (m) s[g] = m;
    }
  }
  let c = _C() ?? An() ?? ke();
  if (c) {
    let u = c.organizationUuid, g = !he() ? c.emailAddress : Q4e() ? a.CLAUDE_CODE_USER_EMAIL : void 0, m = c.accountUuid;
    if (u) s["organization.id"] = u;
    if (g) s["user.email"] = g;
    if (m && R("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) {
      s["user.account_uuid"] = m;
      let E = a.CLAUDE_CODE_ACCOUNT_TAGGED_ID || qGn("user", m);
      if (E) s["user.account_id"] = E;
    }
  }
  Object.assign(s, o);
  let f = he() ? wRr : _k.terminal;
  if (f) s["terminal.type"] = f;
  return s;
}

var De = new K(() => ({
  settled: void 0,
  attributes: void 0
}));

function X() {
  let e = De.of(B().host);
  if (e.settled === void 0 && !Dt()) e.settled = dMr().then(n => {
    e.attributes = n ? Pe(n) : void 0;
  }).catch(d);
  return e;
}

function Pe(e) {
  let n = e.search(/[?#]/);
  if (n >= 0 && e.includes("@", n)) return;
  let o = fX((n >= 0 ? e.slice(0, n) : e).replace(/\/+$/, ""));
  if (!o) return;
  let [r = "", ...s] = o.split("/"), i = fOe(r), c = s.filter(w => w.length > 0), f = c.at(-1);
  if (!i || !f || i.includes("@") || i.includes(":") && !/^\[[0-9a-f:.]+\]$/i.test(i) || c.some(w => w.includes("@"))) return;
  let u = uI(i), g = u === "other" ? i : a$s[u], m = u !== "other" ? u : g === Oe ? "gitea" : void 0, E = c.length - 3, y = m === void 0 && E >= 0 && c[E] === "scm", T = y ? [ ...c.slice(0, E), ...c.slice(E + 1) ] : c, h = T.slice(0, -1), x = h.at(-1);
  if (m === void 0 && x !== void 0 && (y || Ie.test(e.trim()))) {
    let w = [ ...h.slice(0, -1), "projects", x, "repos", f ];
    return {
      [M]: `https://${g}/${w.join("/")}`,
      [L]: x,
      [N]: f,
      [k]: "bitbucket"
    };
  }
  return {
    [M]: `https://${g}/${T.join("/")}`,
    ...h.length > 0 && {
      [L]: h.join("/")
    },
    [N]: f,
    ...m !== void 0 && {
      [k]: m
    }
  };
}

function zfs({commitId: e, branch: n}) {
  return {
    [Ce]: e,
    ...n !== void 0 && {
      [xe]: n,
      [Me]: "branch"
    }
  };
}

async function Gfs() {
  if (R("OTEL_METRICS_INCLUDE_REPOSITORY") && W(a.OTEL_RESOURCE_ATTRIBUTES)[M] === void 0) await X().settled;
}

var Ne = new K(() => ({
  token: void 0,
  identity: null
}));

function ke() {
  if (!a.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  let e = zd();
  if (!e) return null;
  let n = Ne.of(B().host);
  if (e === n.token) return n.identity;
  n.token = e;
  let o = G0(e.replace(/^sk-ant-[a-z0-9]+-/, ""));
  if (typeof o !== "object" || o === null) return n.identity = null;
  let r = o, s = c => typeof c === "string" && c.length > 0 ? c : void 0, i = r.act ?? {};
  return n.identity = {
    organizationUuid: s(r.organization_uuid),
    accountUuid: s(r.account_uuid),
    emailAddress: s(r.account_email) ?? s(i.email)
  };
}

var S = we(ja(), 1);

var J = e => [ "string", "number", "boolean" ].includes(typeof e) || Array.isArray(e) && e.every(n => typeof n === "string");

function Q({event: e, attributes: n, loggedAt: o, eventContext: r}) {
  let s = S.trace.getSpanContext(r ?? S.context.active()), i = s !== void 0 && S.isSpanContextValid(s);
  return {
    to: "collector",
    event: e,
    attributes: Is(n, J),
    loggedAt: o.toISOString(),
    ...i && {
      span: {
        traceId: s.traceId,
        spanId: s.spanId,
        traceFlags: s.traceFlags
      }
    }
  };
}

function Z(e, {entry: n, signal: o}) {
  let r = () => t(`[3P telemetry] Event record dropped (${n.event}): still on the collector road when a flush stopped waiting`), s = i => t(`[3P telemetry] Event record lost (${n.event}): its raise failed: ${l(i)}`, {
    level: "warn"
  });
  return o.aborted ? r() : e.send(n, o).then(() => {}, i => o.aborted ? r() : s(i));
}

function ee() {
  let e = af(), n = Promise.withResolvers(), o = null, r = new AbortController, s = 0;
  async function i() {
    while (o !== null) await o;
  }
  function c() {
    if (o === null) return;
    t("[3P telemetry] A flush stopped waiting for the collector road; records still on it are dropped"), 
    r.abort(), r = new AbortController, o = null;
  }
  return {
    setRoad: f => {
      if (e.set(f), f === null) n = Promise.withResolvers(); else s = 0, n.resolve(f);
    },
    getRoad: e.get,
    route: f => {
      let u = e.get() === null;
      if (u && s >= YUs) return t("[3P telemetry] Event record dropped: no road installed and too many already waiting for one", {
        level: "warn"
      }), Promise.resolve();
      s += u ? 1 : 0;
      let g = {
        entry: f(),
        signal: r.signal
      }, m = (o ?? Promise.resolve()).then(() => e.get() ?? n.promise).then(E => Z(E, g)).catch(E => t(`[3P telemetry] Event record dropped: ${l(E)}`, {
        level: "warn"
      }));
      return o = m, m.then(() => {
        if (o === m) o = null;
      }), m;
    },
    settled: i,
    settledWithin: f => We(i(), f).then(c)
  };
}

var Ebe = ee();

import { createHash as Be } from "crypto";

var Ue = 8388608, U = 24;

class te {
  shown=new Set;
  toolTexts=new Set;
  shownChars=0;
  toolTextChars=0;
  dropped=!1;
  genuine=!1;
  version=0;
}

var A = new K(() => new te);

function Ffs(e) {
  let n = A.of(e);
  n.dropped = !0, n.version++;
}

function Ufs(e) {
  A.of(e).genuine = !0;
}

function qgr(e, n) {
  let o = A.of(e);
  if (n.trim() === "" || !oe(o.shown, n)) return;
  o.shownChars = ne(o, o.shown, o.shownChars + n.length), o.version++;
}

function Ygr(e, n) {
  let o = A.of(e);
  if (n.trim() === "" || !oe(o.toolTexts, n)) return;
  o.toolTextChars = ne(o, o.toolTexts, o.toolTextChars + n.length), o.version++;
}

function Bfs(e) {
  if (e === void 0) return !0;
  let n = A.of(e);
  return n.shown.size > 0 || n.toolTexts.size > 0 || n.genuine || n.dropped;
}

function Xgr(e) {
  return A.of(e);
}

function ne(e, n, o) {
  let r = o;
  while (r > Ue && n.size > 0) {
    let s = n.values().next().value;
    n.delete(s), r -= s.length, e.dropped = !0;
  }
  return r;
}

function oe(e, n) {
  let o = e.delete(n);
  return e.add(n), !o;
}

var re = Object.freeze({
  blocks: Object.freeze([]),
  lines: Object.freeze([]),
  unsearchable: !1,
  toolNames: new Set
}), I = "[account memory text not recorded]";

function fY(e) {
  return `<${e.length} chars; not recorded>`;
}

function $it(e) {
  return `<not recorded: ${e}>`;
}

function je(e) {
  return e === "extract_memories" || e === "local_memory_import" || e === "auto_dream";
}

function dxt(e, n, o) {
  if (je(n)) return {
    withheld: "memory_operation"
  };
  try {
    let r = e();
    if (r.unsearchable) return {
      withheld: "account_memory_text_not_identified"
    };
    return {
      value: o(r)
    };
  } catch {
    return {
      withheld: "account_memory_redaction_failed"
    };
  }
}

function vbe(e, n, o) {
  let r = e === void 0 ? {
    withheld: "account_memory_text_not_identified"
  } : dxt(e, n, s => cxt(o, s));
  return "withheld" in r ? $it(r.withheld) : r.value;
}

var Fe = /^(?:[-*+>]|\d+[.)]|#{1,6})\s+/;

function Iao({rendered: e, verbatim: n, toolNames: o = re.toolNames, unsearchable: r = !1}) {
  let s = y => y.trim() !== "", i = D(e.map(y => y.trim()).filter(s)), c = D(n.map(y => y.trim()).filter(s));
  if (i.length === 0 && c.length === 0 && o.size === 0 && !r) return re;
  let f = (y, T) => T.length - y.length, u = y => (_(y) ?? `"${y}"`).slice(1, -1), g = y => D(y.flatMap(T => {
    let h = $t(T);
    return [ T, h, u(T), u(h), $t(u(T)), $t(h), u(u(T)) ];
  })).sort(f), m = g([ ...i, ...c.filter(y => y.length >= U) ]), E = g([ ...i, ...c ].flatMap(y => y.split(`\n`)).flatMap(y => {
    let T = y.trim(), h = T.replace(Fe, "");
    return [ T, h ].filter(x => x.length >= U);
  }));
  return {
    blocks: m,
    lines: E,
    unsearchable: r,
    toolNames: o
  };
}

function oRe(e) {
  let n = Xgr(e), o = se.get(e);
  if (o !== void 0 && o.version === n.version) return o.keys;
  let r = Iao({
    rendered: [],
    verbatim: [ ...n.shown, ...n.toolTexts ],
    unsearchable: n.dropped
  });
  return se.set(e, {
    version: n.version,
    keys: r
  }), r;
}

var se = new WeakMap;

function cxt(e, n) {
  if (n.blocks.length === 0 && n.lines.length === 0) return e;
  let {blocks: o, lines: r} = ze(n);
  return ue(ue(e, o), r);
}

var He = 131072, Ke = 8, b = new Map, ie = new WeakMap;

function ze(e) {
  let n = ie.get(e);
  if (n !== void 0) return n;
  let o = Be("sha256").update(_([ e.blocks, e.lines ])).digest("hex"), r = b.get(o);
  if (r === void 0) {
    if (r = {
      blocks: ce(e.blocks),
      lines: ce(e.lines)
    }, b.size >= Ke) b.delete(b.keys().next().value);
    b.set(o, r);
  }
  return ie.set(e, r), r;
}

function ce(e) {
  let n = e.filter(i => i !== "" && !I.includes(i)).toSorted((i, c) => c.length - i.length).map(dl), o = [], r = [], s = 0;
  for (let i of n) {
    if (r.length > 0 && s + i.length > He) o.push(new RegExp(r.join("|"), "g")), r = [], 
    s = 0;
    r.push(i), s += i.length + 1;
  }
  if (r.length > 0) o.push(new RegExp(r.join("|"), "g"));
  return o;
}

function ue(e, n) {
  let o = e;
  for (let r of n) o = o.replace(r, I);
  if (o === e) return e;
  for (let r = 0; n.some(s => o.search(s) !== -1); r++) {
    if (r >= 16) throw Error("account-memory text still matched a search key after 16 replacement rounds");
    for (let s of n) o = o.replace(s, I);
  }
  return o;
}

function v(e) {
  return e;
}

function yDn(e, n, o = e) {
  let r = new Set;
  for (let s of o) {
    if (s.role !== "assistant" || typeof s.content === "string") continue;
    for (let i of s.content) {
      let c = v(i).id;
      if (ae(i, n) && typeof c === "string") r.add(c);
    }
  }
  return e.map(s => {
    let i = j(s.content, n, r);
    return i === s.content ? s : {
      ...s,
      content: i
    };
  });
}

function jfs(e, n) {
  return de(e, n, new Set);
}

function Wfs(e, n) {
  return j(e, n, new Set);
}

function j(e, n, o) {
  if (typeof e === "string") return cxt(e, n);
  let r = de(e, n, o);
  return r.every((s, i) => s === e[i]) ? e : r;
}

function de(e, n, o) {
  return e.map(r => {
    let {text: s, thinking: i, input: c, tool_use_id: f, content: u} = v(r);
    if (r.type === "text" && typeof s === "string" || r.type === "thinking" && typeof i === "string") {
      let m = O(r, n, 0);
      return m === r ? r : m;
    }
    if (r.type === "tool_use" || r.type === "server_tool_use") {
      if (ae(r, n)) return {
        ...r,
        input: {
          not_recorded: fY(le(c))
        }
      };
      let m = O(c, n, 0);
      return m === c ? r : {
        ...r,
        input: m
      };
    }
    if (r.type === "tool_result" && u !== void 0 && u !== null) {
      if (typeof f === "string" && o.has(f)) return {
        ...r,
        content: fY(typeof u === "string" ? u : le(u))
      };
      if (typeof u === "string" || Array.isArray(u)) {
        let m = j(u, n, o);
        return m === u ? r : {
          ...r,
          content: m
        };
      }
    }
    if (Ge.has(r.type) || Ve(r)) return r;
    let g = O(r, n, 0);
    return g === r ? r : g;
  });
}

var Ge = new Set([ "image", "redacted_thinking", "container_upload" ]);

function Ve(e) {
  let {source: n} = v(e);
  return e.type === "document" && typeof n === "object" && n !== null && n.type === "base64";
}

function ae(e, n) {
  let {name: o} = v(e);
  return (e.type === "tool_use" || e.type === "server_tool_use") && typeof o === "string" && P8(o, A$n(n.toolNames), "history");
}

var Ye = 6;

function O(e, n, o) {
  if (typeof e === "string") return cxt(e, n);
  if (typeof e !== "object" || e === null) return e;
  if (o >= Ye) return I;
  if (Array.isArray(e)) {
    let i = e.map(c => O(c, n, o + 1));
    return i.every((c, f) => c === e[f]) ? e : i;
  }
  let r = !1, s = Object.entries(e).map(([i, c]) => {
    let f = cxt(i, n), u = O(c, n, o + 1);
    return r ||= u !== c || f !== i, [ f, u ];
  });
  return r ? Object.fromEntries(s) : e;
}

function le(e) {
  try {
    return _(e) ?? "";
  } catch {
    return "";
  }
}

var F = we(ja(), 1);

import { AsyncLocalStorage as $e } from "async_hooks";

class fe {
  als=new $e;
  active() {
    return this.als.getStore() ?? F.ROOT_CONTEXT;
  }
  with(e, n, o, ...r) {
    let s = o == null ? n : n.bind(o);
    return this.als.run(e, s, ...r);
  }
  enterWith(e) {
    this.als.enterWith(e);
  }
  bind(e, n) {
    if (typeof n === "function") {
      let o = (...r) => this.with(e, () => n(...r));
      return Object.defineProperty(o, "length", {
        configurable: !0,
        enumerable: !1,
        writable: !1,
        value: n.length
      }), o;
    }
    return n;
  }
  enable() {
    return this;
  }
  disable() {
    return this.als.disable(), this;
  }
}

var kbe = new fe;

class pe {
  current=void 0;
}

var ge = new K(() => new pe);

function Oao(e) {
  ge.of(B().host).current = e;
}

function Mao() {
  return ge.of(B().host).current;
}

function Qgr() {
  let e = kbe.active();
  if (e !== F.ROOT_CONTEXT) return e;
  return Mao() ?? e;
}

class _e {
  nextSequence=0;
  warnedNoEventLogger=!1;
}

var Ee = new K(() => new _e);

function Te() {
  return a.OTEL_LOG_USER_PROMPTS;
}

function Xe(e) {
  return Te() ? e : "<REDACTED>";
}

function gXt(e) {
  let n = Te() ? vbe(() => oRe(B().host), void 0, e) : Xe(e);
  return {
    prompt: n,
    prompt_text: n
  };
}

function Vfs() {
  return a.OTEL_LOG_ASSISTANT_RESPONSES ?? a.OTEL_LOG_USER_PROMPTS;
}

var Je = new ye.W3CTraceContextPropagator;

function qe() {
  let e = Qgr(), n = C.trace.getSpanContext(e);
  if (n && C.isSpanContextValid(n)) return e;
  if (ve() && a.TRACEPARENT) return Je.extract(e, {
    traceparent: a.TRACEPARENT,
    tracestate: a.TRACESTATE
  }, C.defaultTextMapGetter);
  return;
}

async function Ws(e, n = {}, o) {
  let r = Ee.of(B().host), s = {
    ...uxt(),
    "event.name": e,
    "event.timestamp": (new Date).toISOString(),
    "event.sequence": r.nextSequence++
  }, i = lMe();
  if (i) s["prompt.id"] = i;
  let c = a.CLAUDE_CODE_WORKSPACE_HOST_PATHS;
  if (c) s["workspace.host_paths"] = c.split("|");
  Object.assign(s, $rn(o));
  for (let [g, m] of Object.entries(he() ? fzn(n) : n)) {
    let E = g === "error" && he() && !/^[a-z0-9_]+$/.test(String(m));
    if (m !== void 0 && !E) s[g] = m;
  }
  let f = new Date, u = qe();
  await Ebe.route(() => Q({
    event: e,
    attributes: s,
    loggedAt: f,
    eventContext: u
  }));
}

function Kfs(e, n, o, r) {
  return {
    timestamp: o,
    observedTimestamp: o,
    body: `claude_code.${e}`,
    attributes: n,
    ...r && {
      context: r
    }
  };
}

function qfs(e, n) {
  let o = zje();
  if (o) {
    o.emit(e);
    return;
  }
  let r = Ee.of(B().host);
  if (!F0o(e) && !r.warnedNoEventLogger) r.warnedNoEventLogger = !0, t(`[3P telemetry] Event dropped (no event logger initialized): ${n}`, {
    level: Le(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) ? "warn" : "debug"
  });
}

function ioe(e) {
  if (e.from === e.to) return;
  Ws("permission_mode_changed", {
    from_mode: e.from,
    to_mode: e.to,
    ...e.trigger && {
      trigger: e.trigger
    }
  });
}

function WNe(e) {
  Ws("compaction", {
    trigger: e.trigger,
    success: String(e.success),
    duration_ms: String(Math.round(e.durationMs)),
    ...e.preTokens !== void 0 && {
      pre_tokens: String(e.preTokens)
    },
    ...e.postTokens !== void 0 && {
      post_tokens: String(e.postTokens)
    },
    ...e.error && {
      error: e.error
    },
    ...e.precomputeReuse && {
      precompute_reuse: e.precomputeReuse
    }
  });
}

function Hao(e) {
  Ws("retention_sweep", {
    result: e.result,
    period_days: String(e.periodDays),
    used_default: String(e.usedDefault),
    ...e.skipReason && {
      skip_reason: e.skipReason
    },
    ...e.transcriptsDeleted !== void 0 && {
      transcripts_deleted: String(e.transcriptsDeleted)
    },
    ...e.transcriptsExemptedDesktop !== void 0 && {
      transcripts_exempted_desktop: String(e.transcriptsExemptedDesktop)
    },
    ...e.sessionFilesDeleted !== void 0 && {
      session_files_deleted: String(e.sessionFilesDeleted)
    },
    ...e.artifactsDeleted !== void 0 && {
      artifacts_deleted: String(e.artifactsDeleted)
    },
    ...e.filesRetainedFresh !== void 0 && {
      files_retained_fresh: String(e.filesRetainedFresh)
    },
    ...e.filesPastCutoff !== void 0 && {
      files_past_cutoff: String(e.filesPastCutoff)
    },
    ...e.errorCount !== void 0 && {
      error_count: String(e.errorCount)
    },
    ...e.historyEntriesPruned !== void 0 && {
      history_entries_pruned: String(e.historyEntriesPruned)
    }
  });
}

var H = !1;

function Yfs(e) {
  if (H) return;
  H = !0;
  try {
    let n = e.name !== "Error" ? e.name : e.constructor?.name || "Error";
    Ws("internal_error", {
      error_name: yD(n) ?? "Error",
      error_code: zr(e)
    });
  } finally {
    H = !1;
  }
}

function c7(e) {
  Ws("at_mention", {
    mention_type: e.mentionType,
    success: String(e.success)
  });
}

function aoe(e) {
  let n = e.error !== void 0 ? ci(e.error) : null;
  Ws("auth", {
    action: e.action,
    success: String(e.success),
    auth_method: e.authMethod,
    ...n && {
      error_category: n.kind,
      ...n.status !== void 0 && {
        status_code: String(n.status)
      }
    }
  });
}

export { Ffs, Ufs, qgr, Ygr, Bfs, Xgr, fY, $it, dxt, vbe, Iao, oRe, cxt, yDn, jfs, Wfs, _Dn, Jgr, uxt, zfs, Gfs, Ebe, kbe, Oao, Mao, Qgr, gXt, Vfs, Ws, Kfs, qfs, ioe, WNe, Hao, Yfs, c7, aoe };
