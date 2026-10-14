// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Jfe } from "./chunk-7tfkg6bp.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { l, E, W } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { Ssn, Ut, Ep, o1e, WDs, M5, sVn, vsn, jft, zft, iVn, VCo, lVn, GDs, hh, ky, RPr, t0s, Rve } from "./chunk-8yperama.js";

import { bt, Wi, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { Ja } from "./chunk-2msx6erf.js";

import { a } from "./chunk-j016gcgm.js";

import { re } from "./chunk-6ah1819r.js";

import { Qpe, od, $H, F0, gMs } from "./chunk-xywp7esx.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Jr } from "./chunk-s2t7g8m9.js";

import { p } from "./chunk-jkzenvsk.js";

import { Av } from "./chunk-q6wab2jw.js";

import { li } from "./chunk-zvghq5er.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { mt } from "./chunk-j90se18b.js";

import { or, lq } from "./chunk-w0q7jqcp.js";

import { dd, Xn } from "./chunk-x35dw27e.js";

import { Y6e } from "./chunk-ewk363e4.js";

import { XHn } from "./chunk-qk8kpwc4.js";

import { Gts, Da, XI, Fkt, qts, TQr, AQr, rar, FM, CQr } from "./chunk-84yp45y8.js";

import { qn } from "./chunk-wgsx43va.js";

import { o, v, T, u, U, A } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

import { createHash as $e } from "crypto";

import { basename as yt, join as Y } from "path";

var sZn = [ zft, vsn, VCo, iVn, Ssn, sVn, lVn ];

var iZn = "x-mcp-server-origin", Ce = "x-ccr-owner-slack-user-id";

function rGt(e, r) {
  return Object.entries(e ?? {}).filter(([n]) => n.toLowerCase() === r).map(([, n]) => n);
}

function we(e) {
  if (e.kind !== "resolved" || !Da()) return;
  let r = FM(), n = r.lastResolvedAccountToken;
  if (r.lastResolvedAccountToken = e.token, n === void 0 || n === e.token) return;
  Ut().identityEpoch += 1, nGt(), tt();
}

function tt() {
  let e = Ut();
  if (!e.identityTrippedHandler) {
    e.identityTripUnowned = !0;
    return;
  }
  queueMicrotask(() => {
    let r = Ut().identityTrippedHandler;
    if (!r) {
      Ut().identityTripUnowned = !0;
      return;
    }
    try {
      r();
    } catch (n) {
      t(`MCP identity-change handler failed: ${l(n)}`, {
        level: "warn"
      });
    }
  });
}

function Xbn(e) {
  let r = Ut();
  return r.identityTrippedHandler = e, () => {
    if (r.identityTrippedHandler === e) r.identityTrippedHandler = null;
  };
}

function Jbn() {
  let e = Ut(), r = e.identityTripUnowned;
  return e.identityTripUnowned = !1, r;
}

function ue() {
  if (!Da()) return;
  we(AQr());
}

function ohe() {
  let e = AQr();
  return we(e), e;
}

function yVr() {
  let e = ohe();
  return e.kind === "unwired" || e.kind === "incomplete" ? void 0 : e.token;
}

function Or() {
  return ue(), Ut().identityEpoch;
}

function tGt() {
  let e = Ut();
  if (!Da()) return e.identityEpoch;
  return e.identityEpoch += 1, e.identityEpoch;
}

var rt = "baseline:rearmed";

function l5o() {
  if (!Da()) return;
  tGt(), FM().lastResolvedAccountToken = rt;
}

function Nx(e) {
  return ue(), e === Ut().identityEpoch;
}

function nGt() {
  let e = Ut();
  if (e.identityChangedThisProcess) return;
  e.identityChangedThisProcess = !0, f("mcp_discovery_cache", "identity_changed");
}

function De() {
  return ue(), Ut().identityChangedThisProcess;
}

import { createCipheriv as nt, createDecipheriv as it, createHash as ot, randomBytes as Re } from "crypto";

var be = 32, Z = 12, V = 16, z = "v2:", _e = Buffer.from("mcp-dc", "utf8"), st = /^[A-Za-z0-9+/]{43}=$/;

function Me(e) {
  if (typeof e !== "string" || !st.test(e)) return;
  let r = Buffer.from(e, "base64");
  return r.length === be ? r : void 0;
}

async function N() {
  let e = await Qpe();
  if (e === dd) return;
  let r = ke(e?.mcpDiscoveryCacheKey);
  if (r) return r;
  let n = Re(be).toString("base64"), i = !1;
  try {
    i = (await Xn().mutate(y => Me(y.mcpDiscoveryCacheKey) ? y : {
      ...y,
      mcpDiscoveryCacheKey: n
    })).success;
  } catch {
    i = !1;
  }
  if (!i) return;
  let s = await Qpe();
  if (s === dd) return;
  return ke(s?.mcpDiscoveryCacheKey);
}

function ke(e) {
  return Me(e);
}

function Ae(e, r, n) {
  if (!Number.isInteger(e) || e < 0 || e > 255) throw Error("discovery-cache seal: schema version must fit one byte");
  let i = [ r, n ].map(y => Buffer.from(y, "utf8")), s = Buffer.allocUnsafe(_e.length + 1 + i.reduce((y, d) => y + 4 + d.length, 0)), c = _e.copy(s, 0);
  c = s.writeUInt8(e, c);
  for (let y of i) c = s.writeUInt32BE(y.length, c), c += y.copy(s, c);
  return s;
}

function Pe(e, r) {
  let n = Re(Z), i = nt("aes-256-gcm", e.key, n, {
    authTagLength: V
  });
  i.setAAD(e.aad);
  let s = Buffer.concat([ i.update(r, "utf8"), i.final() ]), c = i.getAuthTag();
  return z + Q(e.cacheKey) + ":" + Buffer.concat([ n, s, c ]).toString("base64url");
}

function Q(e) {
  return ot("sha256").update(e, "utf8").digest().subarray(0, xe).toString("base64url");
}

var xe = 16, Te = Math.ceil(xe * 4 / 3), ct = new RegExp(`^[A-Za-z0-9_-]{${Te}}$`), dt = /^[A-Za-z0-9_-]*$/;

function Ie(e) {
  return Oe(e)?.digest;
}

function Oe(e) {
  if (!e.startsWith(z)) return;
  let r = z.length + Te;
  if (e.length <= r || e[r] !== ":") return;
  let n = e.slice(z.length, r), i = e.slice(r + 1);
  if (!ct.test(n) || !dt.test(i)) return;
  return {
    digest: n,
    body: i
  };
}

function fe(e, r) {
  if (!r.startsWith(z)) return {
    ok: !1,
    reason: "v1"
  };
  let n = Oe(r);
  if (!n) return {
    ok: !1,
    reason: "short"
  };
  if (n.digest !== Q(e.cacheKey)) return {
    ok: !1,
    reason: "header"
  };
  let i = Buffer.from(n.body, "base64url");
  if (i.length < Z + V) return {
    ok: !1,
    reason: "short"
  };
  let s = i.subarray(0, Z), c = i.subarray(i.length - V), y = i.subarray(Z, i.length - V);
  try {
    let d = it("aes-256-gcm", e.key, s, {
      authTagLength: V
    });
    return d.setAuthTag(c), d.setAAD(e.aad), {
      ok: !0,
      plaintext: Buffer.concat([ d.update(y), d.final() ]).toString("utf8")
    };
  } catch {
    return {
      ok: !1,
      reason: "tag"
    };
  }
}

var ut = 4096, ft = 1024, lt = new K(() => new Le);

function Ng() {
  return lt.of(B().host);
}

function RSt(e, r) {
  if (!e || !r) return;
  try {
    return btoa(`${e}:${r}`);
  } catch {
    return;
  }
}

function pt() {
  return qts() !== void 0;
}

class Le {
  seen=new Set;
  off=!1;
  incomplete=!1;
  overflowNotice=null;
  record(e) {
    if (this.recordingOff()) return;
    if (typeof e !== "string" || e === "") return;
    let r = ne(e, ft);
    if (this.seen.has(r)) return;
    if (this.seen.size >= ut) {
      this.incomplete = !0, this.overflowNotice ??= !0;
      return;
    }
    this.seen.add(r);
  }
  recordingOff() {
    if (!this.off && pt()) this.off = !0, this.seen.clear(), this.incomplete = !1, this.overflowNotice = null;
    return this.off;
  }
  takeOverflowNotice() {
    if (this.overflowNotice === !0) return this.overflowNotice = !1, !0;
    return !1;
  }
  snapshot() {
    return this.recordingOff(), {
      atoms: [ ...this.seen ],
      complete: !this.incomplete
    };
  }
}

function Qbn(e) {
  let r = FM();
  r.accountResolver = e, r.lastResolvedAccountToken = void 0;
}

function Zbn(e) {
  FM().eraResolver = e;
}

function ht() {
  return FM().eraResolver();
}

function eSn() {
  return FM().accountResolver !== void 0;
}

function UE(e) {
  switch (e.type) {
   case "stdio":
   case void 0:
   case "sdk":
   case "sse-ide":
   case "ws-ide":
    return !1;

   default:
    return !0;
  }
}

function met(e, r) {
  return !Nx(r) && UE(e);
}

function tSn(e, r) {
  return {
    name: e,
    type: "failed",
    config: r,
    error: XHn,
    errorCode: "IDENTITY_CHANGED"
  };
}

function nSn(e) {
  return e.some(r => UE(r.config));
}

function gt() {
  return ohe().token;
}

var pe = 1, vt = 900, St = 14400, Et = 604800, Ct = 1;

function Ke() {
  let e = a.MCP_DISCOVERY_CACHE_STRIKES;
  return e && e > 0 ? e : Ct;
}

var wt = 384, Ve = 448, ie = p(() => {
  let e = import.meta.require("./chunk-89c96hkc.js").mcpClientModule().discoveryWireSchemas();
  return u({
    v: A(pe),
    serverName: o(),
    cacheKey: o(),
    savedAt: v(),
    toolsSavedAt: v().optional(),
    consecutiveRefreshFailures: v().int().nonnegative(),
    serverInfo: e.implementation.optional(),
    negotiatedEra: U(rar).optional(),
    capabilities: e.serverCapabilities,
    tools: T(e.tool),
    commands: T(e.prompt),
    resources: T(e.resource),
    templates: T(e.resourceTemplate).optional()
  });
});

function Dt() {
  let e = a.MCP_DISCOVERY_CACHE_TTL_S;
  return Math.min((e && e > 0 ? e : vt) * 1e3, ze());
}

function ze() {
  let e = a.MCP_DISCOVERY_CACHE_MAX_STALE_S;
  return Math.min(e && e > 0 ? e : St, Et) * 1e3;
}

function HHe(e) {
  return We(e) === void 0;
}

function _t(e) {
  return oe.some(r => r.reason === e);
}

var oe = [ {
  prop: "discoveryCache",
  reason: "opt-out",
  excludes: e => e === !1,
  normalize: e => e === !1 ? !1 : void 0,
  valueDomain: [ void 0, !1 ]
}, {
  prop: "headersHelper",
  reason: "headers-helper",
  excludes: e => Boolean(e),
  normalize: e => e ? e : void 0,
  valueDomain: [ void 0 ]
} ];

function Ue(e) {
  let r = {
    ...e
  };
  for (let {prop: n, normalize: i} of oe) {
    if (!(n in r)) continue;
    let s = i(r[n]);
    if (s === void 0) delete r[n]; else r[n] = s;
  }
  return r;
}

function kt(e) {
  let r = e;
  if (typeof r.url === "string" && Jfe(r.url)) return !0;
  if (r.headers && typeof r.headers === "object") {
    for (let n of Object.values(r.headers)) if (typeof n === "string" && Jfe(n)) return !0;
  }
  return !1;
}

var Rt = [ "MCP_DISCOVERY_CACHE_TTL_S", "MCP_DISCOVERY_CACHE_MAX_STALE_S", "MCP_DISCOVERY_CACHE_STRIKES" ], Mt = [ WDs, M5, GDs ];

function Ge(e) {
  let r = process.env[e];
  return r !== void 0 && Y6e(e, r);
}

function Ye() {
  return Jr() && a.MCP_DISCOVERY_CACHE === !0 && !Ge("MCP_DISCOVERY_CACHE");
}

function je(e) {
  if (!Ye() || Rt.some(Ge) || e.type !== "http" || e.scope !== "dynamic" || e.agentSource !== void 0 || Av(e)) return !1;
  let r = t0s(e.url);
  if (r === null) return !1;
  let n = or(r.sessionSegment);
  if (!lq(r.sessionSegment) || !hh.ownCcrSessionIds.some(h => or(h) === n)) return !1;
  let i = rGt(e.headers, "x-mcp-server-id"), s = i[0];
  if (i.length !== 1 || s === void 0 || !RPr.test(s) || r.toolboxMcpServerId !== s || r.mcpServerId === s) return !1;
  let c = rGt(e.headers, iZn);
  if (c.length !== 1 || c[0] !== "directory" && c[0] !== "custom") return !1;
  if (rGt(e.headers, Ce).length > 0 || !r.upstreamUrl || /^ccr-owner-resolved:/i.test(r.upstreamUrl)) return !1;
  let y = [ r.mcpServerId, s ], d = [ `cse_${n}`, `session_${n}` ];
  return !(Rve(e.url) || y.some(h => sZn.includes(h)) || [ ...gMs(), ...Mt ].some(h => d.some(S => y.includes(jft(S, h)))));
}

function VGe(e) {
  return HHe(e) && !je(e);
}

function We(e) {
  let r = Fkt();
  if (r !== void 0) return r;
  if (De()) return "identity-changed";
  if (e.type !== "http" && e.type !== "sse") return "transport";
  if (Ep(e) || o1e(e)) return "cli-owned";
  if (kt(e)) return "env-placeholder";
  if (F0(e.url) && !$H(e)) return "ambient-credential";
  if (ky(e.url)) {
    if (!je(e)) return "ambient-credential";
  } else if (Ye()) return "ambient-credential";
  let n = e;
  for (let {prop: i, reason: s, excludes: c} of oe) if (c(n[i])) return s;
  return;
}

function O() {
  return Y(Ee(), "mcp-discovery-cache");
}

async function At(e, r) {
  if (!HHe(r)) return !1;
  return (await Xe(e, r)).kind !== "degenerate";
}

async function Xe(e, r) {
  if (r.type !== "http" && r.type !== "sse") return {
    kind: "none"
  };
  let n = await Qpe();
  if (n === dd) return {
    kind: "degenerate"
  };
  let i = n?.mcpOAuth?.[od(e, r)];
  if (!i) return {
    kind: "none"
  };
  let s = i.refreshToken;
  if (!s) return {
    kind: "degenerate"
  };
  return {
    kind: "resolved",
    hash: at(s).slice(0, 16)
  };
}

async function Pt(e, r) {
  if (r.type !== "http" && r.type !== "sse") return "grant:none";
  let n = await Xe(e, r);
  switch (n.kind) {
   case "none":
    return "grant:none";

   case "resolved":
    return `grant:${n.hash}`;

   case "degenerate":
    return;
  }
}

async function xt(e, r) {
  let n = ohe();
  if (n.kind === "unwired" || n.kind === "incomplete") return;
  let i = await Pt(e, r);
  if (i === void 0) return;
  let s = [ n.token ];
  if (r.type === "http" || r.type === "sse") s.push(i);
  return {
    fingerprint: $e("sha256").update(s.join("\0")).digest("hex"),
    grantToken: i
  };
}

function ye(e, r, n, i) {
  let s = [ e, r, `era:${n}`, {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION ?? "unknown", ...i ? [ "offer:io.modelcontextprotocol/ui" ] : [] ].join("\0");
  return `${$e("sha256").update(s).digest("hex").slice(0, 32)}.json`;
}

var Tt = /^[0-9a-f]{16}\0/;

function OD(e) {
  let r = `${e}-`, n = FM().filePathMemo;
  for (let i of n.keys()) {
    if (!i.startsWith(r)) continue;
    if (Tt.test(i.slice(r.length))) n.delete(i);
  }
}

function x(e, r) {
  return qn(e, Ue(r));
}

async function It(e, r) {
  return (await b(e, r))?.path;
}

async function oW(e, r) {
  if (!Da()) return;
  try {
    return (await b(e, r))?.legToken;
  } catch {
    return;
  }
}

async function b(e, r) {
  let n = x(e, r), i = ht(), s = CQr(), c = gt(), y = `${n}\0${c}\0era:${i}\0ui:${s}`, d = FM().filePathMemo, h = d.get(y);
  if (h) return h;
  let S = (async () => {
    let C = await xt(e, r);
    if (C === void 0) return;
    return {
      path: Y(O(), ye(n, C.fingerprint, i, s)),
      grantToken: C.grantToken,
      fingerprint: C.fingerprint,
      cacheKey: n,
      aad: Ae(pe, n, C.fingerprint),
      legToken: `${C.grantToken}\0era:${i}\0${c}`
    };
  })();
  d.set(y, S);
  let w = () => {
    if (d.get(y) === S) d.delete(y);
  };
  return S.then(C => {
    if (C === void 0) w();
  }, w), S;
}

function L() {
  return FM().storage;
}

function R() {
  return FM().storageV5;
}

function he(e) {
  return Fe.userConfigDir("mcp-discovery-cache", [ yt(e) ]);
}

var Ot = {
  namespace: "userConfigDir",
  dir: "mcp-discovery-cache"
}, F = 8388608;

function ge(e) {
  return Math.max(e.savedAt, e.toolsSavedAt ?? 0);
}

class j extends Error {
  entryPath;
  reason;
  constructor(e, r, n) {
    super(n);
    this.entryPath = e;
    this.reason = r;
    this.name = "RefusedDiscoveryEntryError";
  }
}

class me extends j {
  constructor(e) {
    super(e, "oversize", "discovery-cache: oversize entry");
    this.name = "OversizeDiscoveryEntryError";
  }
}

class ee extends j {
  constructor(e) {
    super(e, "symlink", "discovery-cache: symlinked entry refused");
    this.name = "SymlinkedDiscoveryEntryError";
  }
}

class te extends j {
  constructor(e) {
    super(e, "non-regular", "discovery-cache: non-regular entry refused");
    this.name = "NonRegularDiscoveryEntryError";
  }
}

function se(e) {
  return e instanceof j;
}

async function ce(e, r) {
  let n = FM().readGateForTest;
  if (n) await n;
  if (r) return Lt(r, e);
  try {
    if (li === 0) {
      let s = await L().lstat(e);
      if (s === void 0) return;
      if (s.isSymbolicLink) throw new ee(e);
      if (!s.isFile) throw new te(e);
    }
    let i;
    try {
      i = await L().readTail(e, F + 1, {
        noFollow: !0
      });
    } catch (s) {
      let c = E(s);
      if (c === "ELOOP") throw new ee(e);
      if (c === "ENXIO") throw new te(e);
      throw s;
    }
    if (i.length > F) throw new me(e);
    return i.toString("utf8");
  } catch (i) {
    if (W(i)) return;
    throw i;
  }
}

async function Lt(e, r) {
  let n = he(r), i = await e.read([ {
    key: n,
    offset: 0,
    length: F + 1
  } ], {
    symlinks: "refuse"
  });
  if (!i.ok) {
    let c = "cause" in i.error ? E(i.error.cause) : void 0;
    if (c === "ELOOP") throw new ee(r);
    if (c === "ENXIO") throw new te(r);
    throw Error("discovery-cache: read failed", {
      cause: i.error
    });
  }
  let s = i.value.items[0];
  if (!s.found) return;
  if (s.totalBytes > F) throw new me(r);
  return Buffer.from(s.value).toString("utf8");
}

async function Ft(e, r, n) {
  if (n) {
    let s = await n.write(he(e), r);
    if (!s.ok) throw Error("discovery-cache: write failed", {
      cause: s.error
    });
    return;
  }
  let i = L();
  await i.mkdir(O(), Ve), await i.atomicWrite(e, r, wt);
}

async function Bt(e) {
  if (!e) return L().list(O());
  let r = [], n;
  do {
    let i = await e.listEntries(Ot, {
      skipKeyStats: !0,
      skipScopeStats: !0,
      ...n !== void 0 && {
        cursor: n
      }
    });
    if (!i.ok) throw Error("discovery-cache: list failed", {
      cause: i.error
    });
    for (let s of i.value.items) if (s.kind === "key" && s.key.namespace === "userConfigDir") {
      let c = s.key.relPath[0];
      if (c !== void 0 && s.key.relPath.length === 1) r.push(c);
    }
    n = i.value.cursor;
  } while (n);
  return r;
}

async function G(e, r) {
  if (r) {
    let n = await r.delete(he(e));
    if (!n.ok) throw Error("discovery-cache: delete failed", {
      cause: n.error
    });
    return;
  }
  try {
    await L().delete(e);
  } catch (n) {
    if (!W(n)) throw n;
  }
}

async function rSn(e, r, n = Date.now()) {
  let i = We(r);
  if (i !== void 0 && !_t(i)) return {
    kind: "miss",
    reason: i === "transport" ? "transport" : "disabled"
  };
  if (i !== void 0) {
    H();
    let _ = Yt(e, r), M = jt(_), de = FM().admissionPurgedKeySets;
    if (!de.has(M)) de.add(M), Gt(e, r, _).then(et => {
      if (!et) de.delete(M);
    });
    return re(e, `discovery-cache: ${i} \u2014 purging this server's cache-key family, serving miss`), 
    {
      kind: "miss",
      reason: "disabled"
    };
  }
  let s;
  try {
    s = await b(e, r);
  } catch (_) {
    return re(e, `discovery-cache: fingerprint failed: ${_}`), {
      kind: "miss",
      reason: "no-fingerprint"
    };
  }
  if (s === void 0) return {
    kind: "miss",
    reason: "no-fingerprint"
  };
  let c = s.path, y = () => {
    P(c, e, void 0).catch(() => {});
  }, d = () => (y(), m("mcp_discovery_cache", "corrupt_entry"), {
    kind: "miss",
    reason: "corrupt"
  }), h;
  try {
    h = await ce(c, R());
  } catch (_) {
    if (se(_)) return re(e, `discovery-cache: ${_.reason} entry, deleting`), d();
    return re(e, `discovery-cache: read failed: ${_}`), {
      kind: "miss",
      reason: "absent"
    };
  }
  if (h === void 0) return {
    kind: "miss",
    reason: "absent"
  };
  let S = await Ne(h, s, e, () => P(c, e, void 0));
  if (S.miss) {
    if (S.miss === "unsealed") if (S.cause === "v1") f("mcp_discovery_cache", "unsealed_v1"); else m("mcp_discovery_cache", `unsealed_${S.cause}`);
    return {
      kind: "miss",
      reason: S.miss
    };
  }
  let w = ie().safeParse(mt(S.plaintext, !1));
  if (!w.success) return re(e, "discovery-cache: corrupt entry, deleting"), d();
  let C = w.data;
  if (C.cacheKey !== x(e, r)) return re(e, "discovery-cache: entry keyed for another server, deleting"), 
  d();
  if (C.consecutiveRefreshFailures >= Ke()) return y(), {
    kind: "miss",
    reason: "strike-threshold"
  };
  let k = ze();
  if (ge(C) - n > k) return y(), {
    kind: "miss",
    reason: "expired"
  };
  let D = Math.max(0, n - C.savedAt);
  if (D >= k) return y(), {
    kind: "miss",
    reason: "expired"
  };
  if (D < Dt() && !(C.capabilities.tools && C.tools.length === 0)) return {
    kind: "fresh",
    entry: C,
    ageMs: D
  };
  return {
    kind: "stale",
    entry: C,
    ageMs: D
  };
}

function X(e, r, n) {
  return FM().serializeWrite(e, n).catch(i => {
    re(r, `discovery-cache: write op failed: ${i}`);
  });
}

function q(e) {
  return FM().deleteGenerationByCacheKey.get(e) ?? 0;
}

function ae(e) {
  FM().deleteGenerationByCacheKey.set(e, q(e) + 1);
}

var qe = 8;

async function Ht(e, r) {
  if (r.type !== "http" && r.type !== "sse") return [];
  let n = await Qpe();
  if (n === dd) return dd;
  let i = od(e, r), s = n?.mcpOAuth?.[i], c = [];
  if (typeof s?.accessToken === "string") c.push(s.accessToken);
  if (typeof s?.refreshToken === "string") c.push(s.refreshToken);
  if (typeof s?.clientSecret === "string") c.push(s.clientSecret);
  let y = n?.mcpOAuthClientConfig?.[i]?.clientSecret;
  if (typeof y === "string") c.push(y);
  return c;
}

var le = /auth|token|key|secret|cookie|session|sig|pass|cred|bearer/i, $t = /^\s*[A-Za-z][A-Za-z0-9!#$%&'*+.^_`|~-]*\s+(?=\S)/;

function Ze(e, r, n) {
  if (typeof r !== "string" || !le.test(e)) return;
  if (n(r.trim()), n(r.replace($t, "").trim()), /^cookie$/i.test(e)) for (let i of r.split(";")) {
    let s = i.indexOf("=");
    n((s === -1 ? i : i.slice(s + 1)).trim());
  }
}

function she(e, r) {
  let n = Ng();
  if (n.recordingOff()) return;
  let i = new Map;
  for (let [s, c] of Object.entries(e ?? {})) i.set(s.toLowerCase(), c);
  for (let [s, c] of Object.entries(r)) {
    if (i.get(s.toLowerCase()) === c) continue;
    Ze(s, c, y => {
      if (y.length >= qe) n.record(y);
    });
  }
}

var Kt = 268435456;

function Be(e) {
  let r = [ e ], n = Wi(e).slice(1, -1);
  if (n !== e) r.push(n);
  try {
    let i = encodeURIComponent(e);
    if (i !== e) r.push(i);
  } catch {}
  return r;
}

function Vt(e, r, n = []) {
  let i = r, s = new Set, c = d => {
    if (d !== void 0 && d.length >= qe) s.add(d);
  };
  for (let [d, h] of Object.entries(i.headers ?? {})) Ze(d, h, c);
  try {
    let d = typeof i.url === "string" ? new URL(i.url) : void 0;
    for (let [h, S] of d?.searchParams.entries() ?? []) if (le.test(h)) for (let w of Be(S)) c(w);
    for (let h of d?.search.replace(/^\?/, "").split("&") ?? []) {
      let S = h.indexOf("=");
      if (S > 0 && le.test(h.slice(0, S))) c(h.slice(S + 1));
    }
    for (let h of d ? [ d.password, d.username ] : []) if (h) {
      c(h);
      try {
        c(decodeURIComponent(h));
      } catch {}
    }
  } catch {}
  for (let d of n) c(d);
  let y = Ng().snapshot();
  if (!y.complete) return "presented-log-incomplete";
  for (let d of y.atoms) c(d);
  if (s.size * e.length > Kt) return "scan-budget";
  for (let d of s) for (let h of Be(d)) if (e.includes(h)) return "material";
  return;
}

function ve(e, r) {
  return {
    key: e,
    cacheKey: r.cacheKey,
    aad: r.aad
  };
}

async function Ne(e, r, n, i) {
  let s = await N();
  if (s === void 0) return re(n, "Discovery cache: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process"), 
  TQr(), {
    miss: "key-unavailable"
  };
  let c = fe(ve(s, r), e);
  if (c.ok) return {
    plaintext: c.plaintext
  };
  re(n, `Discovery cache: entry did not open (${c.reason}) \u2014 discarded`);
  try {
    await i();
  } catch (y) {
    re(n, `discovery-cache: reap after failed open skipped ${y}`);
  }
  return {
    miss: "unsealed",
    cause: c.reason
  };
}

function I({verdict: e, code: r}) {
  if (e === "written") g("mcp_discovery_cache"); else if (e === "terminal") m("mcp_discovery_cache", r); else f("mcp_discovery_cache", r);
  return e;
}

async function Se(e) {
  let {path: r, serverName: n, config: i, cacheKey: s, entry: c, context: y, label: d} = e;
  if (Fkt() !== void 0) return re(n, `Discovery cache ${d} refused: the cache turned off since this round started`), 
  {
    verdict: "superseded",
    code: "disabled"
  };
  if (q(s) !== e.capturedDeleteGeneration) return re(n, `Discovery cache ${d} refused: entry deleted since this round started (tombstone)`), 
  {
    verdict: "superseded",
    code: "tombstone"
  };
  if (!Nx(y.identityEpoch)) return re(n, `Discovery cache ${d} refused: identity changed since this round was fetched (stale epoch)`), 
  {
    verdict: "superseded",
    code: "stale_epoch"
  };
  let h = await N();
  if (h === void 0) return TQr(), re(n, `Discovery cache ${d} refused: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process`), 
  {
    verdict: "superseded",
    code: "key_unavailable"
  };
  let S;
  try {
    S = await Ht(n, i);
  } catch {
    S = dd;
  }
  if (S === dd) return re(n, `Discovery cache ${d} refused: OAuth token store unreadable (cannot verify no secrets on disk)`), 
  {
    verdict: "transient",
    code: "transient"
  };
  let w;
  try {
    w = await b(n, i);
  } catch {
    return {
      verdict: "transient",
      code: "transient"
    };
  }
  if (w === void 0 || w.path !== r || w.legToken !== y.grantLeg) return re(n, `Discovery cache ${d} refused: grant or era changed since this round was fetched (stale leg)`), 
  {
    verdict: "superseded",
    code: "stale_grant"
  };
  let C = ie().safeParse(c);
  if (!C.success) return re(n, `Discovery cache ${d} refused: entry failed schema validation`), 
  {
    verdict: "terminal",
    code: "schema"
  };
  let k = Wi(C.data);
  if (Buffer.byteLength(k, "utf8") > F) return re(n, `Discovery cache ${d} refused: serialized entry exceeds DISCOVERY_ENTRY_MAX_BYTES`), 
  {
    verdict: "terminal",
    code: "oversize"
  };
  if (Fkt() !== void 0) return re(n, `Discovery cache ${d} refused: the cache turned off since this round started`), 
  {
    verdict: "superseded",
    code: "disabled"
  };
  let D = Vt(k, i, S);
  if (D !== void 0) {
    if (Ng().takeOverflowNotice()) re(n, "Discovery cache: presented-credential log is full \u2014 cache writes are refused for the rest of this process");
    if (D === "scan-budget") return re(n, `Discovery cache ${d} refused: secret-material scan exceeds its work budget (materials \xd7 entry size) \u2014 not scanned, not written`), 
    {
      verdict: "terminal",
      code: "scan_budget"
    };
    if (D === "presented-log-incomplete") return re(n, `Discovery cache ${d} refused: presented-credential log incomplete (cannot verify no secrets on disk)`), 
    {
      verdict: "terminal",
      code: "presented_log_incomplete"
    };
    return re(n, `Discovery cache ${d} refused: entry would carry presented secret material`), 
    {
      verdict: "terminal",
      code: "secret_material"
    };
  }
  let _ = Pe(ve(h, w), k);
  if (Buffer.byteLength(_, "utf8") > F) return re(n, `Discovery cache ${d} refused: sealed entry exceeds DISCOVERY_ENTRY_MAX_BYTES`), 
  {
    verdict: "terminal",
    code: "oversize"
  };
  try {
    await Ft(r, _, R());
  } catch (M) {
    return re(n, `Discovery cache ${d} refused: disk write failed (${l(M)})`), {
      verdict: "transient",
      code: "transient"
    };
  }
  return {
    verdict: "written",
    code: "written"
  };
}

async function P(e, r, n) {
  if (n !== void 0) ae(n);
  await X(e, r, () => G(e, R()));
}

async function zt(e, r) {
  await Promise.race([ e.then(() => {}, () => {}), J(r, void 0, {
    unref: !0
  }) ]);
}

async function $6(e, r = 1500) {
  H(), await zt(e, r);
}

function H() {
  if (!XI()) return;
  let e = FM();
  if (e.flushCleanup) return;
  e.flushCleanup = bt(() => e.drain(Gts));
}

async function oSn(e, r, n, i) {
  let s = i.now ?? Date.now(), c = x(e, r), y = q(c);
  if (!Nx(i.identityEpoch)) return "superseded";
  if (i.grantLeg === void 0) return "superseded";
  if (!HHe(r)) return "superseded";
  H();
  let d;
  try {
    d = await b(e, r);
  } catch {
    return I({
      verdict: "transient",
      code: "transient"
    });
  }
  if (d === void 0) return "superseded";
  if (d.legToken !== i.grantLeg) return re(e, "Discovery cache write refused: grant changed since this round was fetched (stale grant)"), 
  I({
    verdict: "superseded",
    code: "stale_grant"
  });
  let h = d.path, S = {
    v: pe,
    serverName: e,
    cacheKey: c,
    savedAt: s,
    consecutiveRefreshFailures: 0,
    ...n.serverInfo && {
      serverInfo: n.serverInfo
    },
    ...n.negotiatedEra !== void 0 && {
      negotiatedEra: n.negotiatedEra
    },
    capabilities: n.capabilities,
    tools: n.tools,
    commands: n.commands,
    resources: n.resources,
    templates: n.templates
  }, w = h, C;
  return await X(w, e, async () => {
    if (!await At(e, r)) return;
    let k;
    try {
      k = await ce(w, R());
    } catch (D) {
      if (!se(D)) {
        re(e, `Discovery cache write deferred: existing entry unreadable (${l(D)})`), C = {
          verdict: "transient",
          code: "transient"
        };
        return;
      }
      k = void 0;
    }
    if (k !== void 0) {
      let D = await N(), _ = D && d ? fe(ve(D, d), k) : void 0, M = _?.ok ? ie().safeParse(mt(_.plaintext, !1)) : void 0;
      if (M?.success && ge(M.data) > s) {
        C = {
          verdict: "superseded",
          code: "fresher_on_disk"
        };
        return;
      }
    }
    C = await Se({
      path: w,
      serverName: e,
      config: r,
      cacheKey: c,
      entry: S,
      context: i,
      capturedDeleteGeneration: y,
      label: "write"
    });
  }), C ? I(C) : "superseded";
}

async function Je(e, r) {
  let n = e.path, i;
  try {
    i = await ce(n, R());
  } catch (y) {
    if (se(y)) {
      await G(n, R());
      return;
    }
    throw y;
  }
  if (i === void 0) return;
  let s = await Ne(i, e, r, () => G(n, R()));
  if (s.miss) return;
  let c = ie().safeParse(mt(s.plaintext, !1));
  if (!c.success) {
    await G(n, R());
    return;
  }
  return c.data;
}

async function sSn(e, r, n, i) {
  if (!Nx(i.identityEpoch)) return;
  if (i.grantLeg === void 0) return;
  let s = x(e, r), c = q(s);
  if (H(), !HHe(r)) return;
  let y;
  try {
    y = await b(e, r);
  } catch {
    I({
      verdict: "transient",
      code: "transient"
    });
    return;
  }
  if (y === void 0) return;
  if (y.legToken !== i.grantLeg) {
    re(e, "Discovery cache tools merge refused: grant changed since this refresh was fetched (stale grant)"), 
    I({
      verdict: "superseded",
      code: "stale_grant"
    });
    return;
  }
  let d = y.path;
  await X(d, e, async () => {
    let h = await Je(y, e);
    if (!h) return;
    if (ge(h) > i.fetchedAt) {
      I({
        verdict: "superseded",
        code: "fresher_on_disk"
      });
      return;
    }
    let S = {
      ...h,
      tools: n,
      ...Number.isFinite(i.fetchedAt) && i.fetchedAt > h.savedAt && {
        toolsSavedAt: i.fetchedAt
      }
    };
    I(await Se({
      path: d,
      serverName: e,
      config: r,
      cacheKey: s,
      entry: S,
      context: i,
      capturedDeleteGeneration: c,
      label: "tools merge"
    }));
  });
}

async function oGt(e, r, n) {
  if (!Nx(n.identityEpoch)) return;
  if (n.grantLeg === void 0) return;
  let i = x(e, r), s = q(i);
  if (H(), !HHe(r)) return;
  let c;
  try {
    c = await b(e, r);
  } catch {
    return;
  }
  if (c === void 0) return;
  if (c.legToken !== n.grantLeg) {
    re(e, "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)");
    return;
  }
  let y = c.path;
  await X(y, e, async () => {
    let d = await Je(c, e);
    if (!d) return;
    if (!Nx(n.identityEpoch)) {
      re(e, "Discovery cache refresh-failure strike refused: identity changed since this refresh was fetched (stale epoch)");
      return;
    }
    let h;
    try {
      h = await b(e, r);
    } catch {
      return;
    }
    if (h === void 0 || h.path !== y || h.legToken !== n.grantLeg) {
      re(e, "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)");
      return;
    }
    let S = {
      ...d,
      consecutiveRefreshFailures: d.consecutiveRefreshFailures + 1
    };
    if (S.consecutiveRefreshFailures >= Ke()) {
      ae(i), await G(y, R());
      return;
    }
    await Se({
      path: y,
      serverName: e,
      config: r,
      cacheKey: i,
      entry: S,
      context: n,
      capturedDeleteGeneration: s,
      label: "refresh-failure strike"
    });
  });
}

function iSn(e, r) {
  (async () => {
    let n = Or();
    await oGt(e, r, {
      identityEpoch: n,
      grantLeg: await oW(e, r)
    });
  })().catch(n => t(`discovery-cache: strike after failed lazy dial of "${e}" did not land: ${l(n)}`));
}

async function Qe(e, r) {
  for (let s of r) ae(s);
  let n = new Set([ ...r ].map(Q)), i = await Bt(R());
  for (let s of i) {
    if (!s.endsWith(".json")) continue;
    let c = Y(O(), s);
    try {
      let y;
      try {
        y = await ce(c, R());
      } catch (h) {
        if (se(h)) {
          await P(c, e, void 0);
          continue;
        }
        throw h;
      }
      if (y === void 0) continue;
      let d = Ie(y);
      if (d === void 0) {
        await P(c, e, void 0);
        continue;
      }
      if (n.has(d)) await P(c, e, void 0);
    } catch (y) {
      re(e, `discovery-cache: purge scan skipped ${y}`);
    }
  }
}

async function He(e, r) {
  await Qe(e, new Set([ x(e, r) ]));
}

function Gt(e, r, n) {
  let i = O(), s = !1;
  return X(i, e, async () => {
    let c;
    try {
      c = (await b(e, r))?.fingerprint;
    } catch {
      c = void 0;
    }
    if (c === void 0) {
      await Qe(e, n), s = !0;
      return;
    }
    let y = [];
    for (let d of n) {
      let h = d;
      for (let S of rar) for (let w of [ !1, !0 ]) y.push(P(Y(i, ye(d, c, S, w)), e, h)), 
      h = void 0;
    }
    await Promise.all(y), s = !0;
  }).then(() => s);
}

function Yt(e, r) {
  let n = Ue(r), i = oe.map(({prop: y, normalize: d, valueDomain: h}) => {
    let S = new Set(h.map(C => d(C))), w = n[y];
    if (w !== void 0) S.add(w);
    return {
      prop: y,
      states: [ ...S ]
    };
  }), s = new Set, c = (y, d) => {
    if (y === i.length) {
      s.add(qn(e, d));
      return;
    }
    let {prop: h, states: S} = i[y];
    for (let w of S) {
      let C = {
        ...d
      };
      if (w === void 0) delete C[h]; else C[h] = w;
      c(y + 1, C);
    }
  };
  return c(0, {
    ...n
  }), s;
}

function jt(e) {
  return [ ...e ].sort().join(`\n`);
}

async function xSt(e, r) {
  if (r.type !== "http" && r.type !== "sse") return;
  if (!XI()) return;
  H(), ae(x(e, r));
  try {
    let n = await b(e, r);
    if (n === void 0) {
      await He(e, r);
      return;
    }
    let i = x(e, r), s = O(), c = new Set(rar.flatMap(d => [ !1, !0 ].map(h => Y(s, ye(i, n.fingerprint, d, h))))), y = [ P(n.path, e, i) ];
    for (let d of c) if (d !== n.path) y.push(P(d, e, void 0));
    await Promise.all(y), await He(e, r);
  } catch (n) {
    re(e, `discovery-cache: delete failed: ${n}`);
  }
}

async function aSn(e, r) {
  let n;
  try {
    n = await It(e, r);
  } catch {
    return async () => {};
  }
  if (n === void 0) return async () => {};
  try {
    return await L().mkdir(O(), Ve), await Ja(n, {
      realpath: !1,
      retries: 0,
      stale: 6e4,
      onCompromised: i => re(e, `discovery-cache: refresh lock compromised, skipping refresh: ${i}`)
    });
  } catch (i) {
    let s = i instanceof Error ? i.message : String(i);
    if (i?.code === "ELOCKED" || s.includes("already being held")) {
      re(e, "discovery-cache: refresh lock held elsewhere, skipping");
      return;
    }
    return re(e, `discovery-cache: lock error, proceeding: ${s}`), async () => {};
  }
}

export { Xbn, Jbn, ohe, yVr, Or, tGt, l5o, Nx, nGt, sZn, iZn, rGt, Ng, RSt, Qbn, Zbn, eSn, UE, met, tSn, nSn, HHe, VGe, OD, oW, rSn, she, $6, oSn, sSn, oGt, iSn, xSt, aSn };
