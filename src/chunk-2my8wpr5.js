// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { J } from "./chunk-nvtwm272.js";

import { Vje, Kje, bq, R$, nFt, rFt, yDr, _Dr, ILo, fht, bDr, aYn } from "./chunk-3pqddg8f.js";

import { l, E, W } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { LXe, aFs, xMr } from "./chunk-r276nwd3.js";

import { $sn } from "./chunk-s76zpwgw.js";

import { gu } from "./chunk-53fww9mk.js";

import { O } from "./chunk-1xnsr4dy.js";

import { mkdirSync as U, writeFileSync as N } from "fs";

import { unlink as R } from "fs/promises";

function H5() {
  return a.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review";
}

var y = "/home/claude/.claude/remote", IIe = `${y}/.oauth_token`, MVn = `${y}/.api_key`, Mie = `${y}/.session_ingress_token`, _Ro = [ IIe, MVn, Mie ], OIe = $sn;

function h(e, n, r, {skipInReviewOrigin: o = !1} = {}) {
  if (!a.CLAUDE_CODE_REMOTE) return;
  if (gu()) {
    t(`Skipping ${r} disk persistence in a tool server's daemon`);
    return;
  }
  if (o && H5()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  try {
    U(y, {
      recursive: !0,
      mode: 448
    }), N(e, n, {
      encoding: "utf8",
      mode: 384
    }), t(`Persisted ${r} to ${e} for subprocess access`);
  } catch (s) {
    t(`Failed to persist ${r} to disk (non-fatal): ${l(s)}`, {
      level: "error"
    });
  }
}

async function P0s() {
  if (!a.CLAUDE_CODE_REMOTE) return;
  for (let e of _Ro) try {
    await R(e), t(`Removed the credential file at ${e}`);
  } catch (n) {
    if (!W(n)) t(`Failed to remove the credential file at ${e} (non-fatal): ${E(n) ?? "unknown error"}`, {
      level: "error"
    });
  }
}

function F(e, n) {
  return PLt(e, n).token;
}

function PLt(e, n) {
  if (gu()) return {
    token: null,
    miss: "enoent"
  };
  try {
    let r = LXe(e, {
      maxBytes: OIe,
      regularFileOnly: !0
    }).trim();
    if (!r) return {
      token: null,
      miss: "empty"
    };
    return t(`Read ${n} from well-known file ${e}`), {
      token: r
    };
  } catch (r) {
    if (W(r)) return {
      token: null,
      miss: "enoent"
    };
    return t(`Failed to read ${n} from ${e}: ${l(r)}`, {
      level: "debug"
    }), {
      token: null,
      miss: E(r) === "EACCES" ? "eacces" : "other"
    };
  }
}

async function v(e, n, r, o, {skipInReviewOrigin: s = !1} = {}) {
  if (!a.CLAUDE_CODE_REMOTE) return;
  if (gu()) {
    t(`Skipping ${r} disk persistence in a tool server's daemon`);
    return;
  }
  if (s && H5()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  let p = await o.writeHandoffCredential(e, n);
  if (p.state === "written") {
    t(`Persisted ${r} to ${e} for subprocess access`);
    return;
  }
  t(`Failed to persist ${r} to disk (non-fatal): ${p.code ?? "unknown error"}`, {
    level: "error"
  });
}

async function w(e, n, r) {
  if (gu()) return null;
  let o = await r.readHandoffCredential(e, {
    symlinkAtPath: "follow"
  });
  switch (o.state) {
   case "present":
    {
      let s = o.contents.trim();
      if (!s) return null;
      return t(`Read ${n} from well-known file ${e}`), s;
    }

   case "absent":
    return null;

   case "read-failed":
    return t(`Failed to read ${n} from ${e}: ${o.code ?? "unknown error"}`, {
      level: "debug"
    }), null;
  }
}

function D({envVar: e, wellKnownPath: n, readPath: r = n, label: o, fileLabel: s = o, getCached: p, setCached: c, skipInReviewOrigin: _ = !1}) {
  let g = p();
  if (g !== void 0) return g;
  let A = process.env[e];
  if (!A) {
    let i = F(r, s);
    return c(i), i;
  }
  let f = parseInt(A, 10);
  if (Number.isNaN(f)) return t(`${e} must be a valid file descriptor number, got: ${A}`, {
    level: "error"
  }), c(null), null;
  if (xMr(f)) {
    let i = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function", u = i ? d1e(f, o) : F(r, s);
    if (i) delete process.env[e], fht(e);
    if (c(u), u && i) h(n, u, s, {
      skipInReviewOrigin: _
    });
    return u;
  }
  try {
    let i = `/proc/self/fd/${f}`, u = LXe(i, {
      maxBytes: OIe
    }).trim();
    if (!u) return t(`File descriptor contained empty ${o}`, {
      level: "error"
    }), c(null), null;
    return t(`Successfully read ${o} from file descriptor ${f}`), c(u), h(n, u, s, {
      skipInReviewOrigin: _
    }), u;
  } catch (i) {
    t(`Failed to read ${o} from file descriptor ${f}: ${l(i)}`, {
      level: "error"
    });
    let u = F(r, s);
    if (u) return c(u), u;
    let S = E(i);
    if ((S === "EACCES" || S === "EPERM") && !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function") {
      let d = d1e(f, o);
      if (delete process.env[e], fht(e), d) return c(d), h(n, d, s, {
        skipInReviewOrigin: _
      }), d;
    }
    return c(null), null;
  }
}

function d1e(e, n) {
  try {
    t(`Reading ${n} from inherited descriptor ${e} (until newline or end-of-stream)`);
    let r = aFs(e, {
      maxBytes: OIe
    }).trim();
    if (!r) return t(`File descriptor ${e} contained empty ${n}`, {
      level: "error"
    }), null;
    return t(`Successfully read ${n} directly from inherited descriptor ${e}`), r;
  } catch (r) {
    return t(`Failed to read ${n} directly from descriptor ${e}: ${l(r)}`, {
      level: "error"
    }), null;
  }
}

async function k({envVar: e, wellKnownPath: n, readPath: r = n, label: o, fileLabel: s = o, getCached: p, setCached: c, credentials: _, skipInReviewOrigin: g = !1}) {
  let A = p();
  if (A !== void 0) return A;
  let f = process.env[e];
  if (!f) {
    let d = await w(r, s, _);
    return C(p, c, d);
  }
  let i = parseInt(f, 10);
  if (Number.isNaN(i)) return t(`${e} must be a valid file descriptor number, got: ${f}`, {
    level: "error"
  }), c(null), null;
  let u = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function", S = () => {
    delete process.env[e], fht(e);
  };
  if (xMr(i)) {
    if (!u) {
      let m = await w(r, s, _);
      return C(p, c, m);
    }
    let d = d1e(i, o);
    if (S(), c(d), d) await v(n, d, s, _, {
      skipInReviewOrigin: g
    });
    return d;
  }
  try {
    let d = `/proc/self/fd/${i}`, m = LXe(d, {
      maxBytes: OIe
    }).trim();
    if (!m) return t(`File descriptor contained empty ${o}`, {
      level: "error"
    }), c(null), null;
    return t(`Successfully read ${o} from file descriptor ${i}`), c(m), await v(n, m, s, _, {
      skipInReviewOrigin: g
    }), m;
  } catch (d) {
    t(`Failed to read ${o} from file descriptor ${i}: ${l(d)}`, {
      level: "error"
    });
    let m = await w(r, s, _);
    if (m) return C(p, c, m);
    let P = E(d);
    if ((P === "EACCES" || P === "EPERM") && u) {
      let T = d1e(i, o);
      if (S(), T) return c(T), await v(n, T, s, _, {
        skipInReviewOrigin: g
      }), T;
    }
    return C(p, c, null);
  }
}

function C(e, n, r) {
  let o = e();
  if (o !== void 0) return o;
  return n(r), r;
}

function nmt() {
  return Boolean(process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH);
}

async function I0s({attempts: e = 10, delayMs: n = 100} = {}) {
  for (let r = 0; r < e && nmt(); r++) await J(n), HVn();
  return !nmt();
}

function HVn() {
  let e = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!e) return;
  let n;
  try {
    n = L(e);
  } catch (r) {
    if (I(r)) return t(`bg auth snapshot busy, will retry on the next read: ${l(r)}`, {
      level: "warn"
    }), E(r);
    if (!W(r)) t(`Failed to consume bg auth snapshot: ${l(r)}`, {
      level: "warn"
    });
  }
  if (delete process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH, n === void 0) return;
  try {
    R(e).catch(() => {});
    let r = JSON.parse(n);
    if (typeof r?.gatewayToken === "string" && r.gatewayToken) {
      aYn(r.gatewayToken), t("Consumed gateway token from bg auth snapshot");
      return;
    }
    if (typeof r?.accessToken !== "string" || !r.accessToken) {
      t("bg auth snapshot missing accessToken", {
        level: "warn"
      });
      return;
    }
    if (R$(r.accessToken), nFt(!0), Array.isArray(r.scopes) && r.scopes.length > 0) rFt(r.scopes);
    if (r.subscriptionType) process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE = r.subscriptionType;
    if (r.rateLimitTier) process.env.CLAUDE_CODE_RATE_LIMIT_TIER = r.rateLimitTier;
    t("Consumed bg auth snapshot from sockDir");
  } catch (r) {
    if (!W(r)) t(`Failed to consume bg auth snapshot: ${l(r)}`, {
      level: "warn"
    });
  }
}

async function bRo(e) {
  let n = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!n) return;
  let r = await e.readHandoffCredential(n, {
    symlinkAtPath: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse"
  });
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH !== n) return;
  switch (r.state) {
   case "absent":
    a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
    return;

   case "read-failed":
    if (r.code !== "EBUSY" && r.code !== "EPERM" && !(r.code === "EACCES" && O() === "windows")) a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
    t(`Failed to consume bg auth snapshot: ${r.code ?? "unknown error"}`, {
      level: "warn"
    });
    return;

   case "present":
    break;
  }
  a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH"), e.discardSpentCredentialFile(n).catch(() => {});
  try {
    let o = JSON.parse(r.contents);
    if (typeof o?.gatewayToken === "string" && o.gatewayToken) {
      aYn(o.gatewayToken), t("Consumed gateway token from bg auth snapshot");
      return;
    }
    if (typeof o?.accessToken !== "string" || !o.accessToken) {
      t("bg auth snapshot missing accessToken", {
        level: "warn"
      });
      return;
    }
    if (R$(o.accessToken), nFt(!0), Array.isArray(o.scopes) && o.scopes.length > 0) rFt(o.scopes);
    if (o.subscriptionType) a.set("CLAUDE_CODE_SUBSCRIPTION_TYPE", String(o.subscriptionType));
    if (o.rateLimitTier) a.set("CLAUDE_CODE_RATE_LIMIT_TIER", String(o.rateLimitTier));
    t("Consumed bg auth snapshot from sockDir");
  } catch (o) {
    t(`Failed to consume bg auth snapshot: ${l(o)}`, {
      level: "warn"
    });
  }
}

function K9(e) {
  return (process.env[e]?.trim() ?? "") !== "" || ILo(e);
}

function rI() {
  return HVn(), D({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: IIe,
    label: "OAuth token",
    getCached: bq,
    setCached: R$,
    skipInReviewOrigin: !0
  });
}

async function KPr(e) {
  return await bRo(e), SRo(e);
}

async function SRo(e) {
  return k({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: IIe,
    label: "OAuth token",
    getCached: bq,
    setCached: R$,
    credentials: e,
    skipInReviewOrigin: !0
  });
}

function rmt() {
  let e = bDr();
  if (e !== void 0) return e;
  HVn();
  let n = bDr();
  if (n !== void 0) return n;
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) return null;
  let r = a.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, o = r ? parseInt(r, 10) : Number.NaN, s = Number.isNaN(o) || a.CLAUDE_CODE_REMOTE || typeof process.send === "function" || !xMr(o) ? null : d1e(o, "gateway token");
  return aYn(s), delete process.env.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, s;
}

function Hie() {
  return D({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: MVn,
    label: "API key",
    getCached: yDr,
    setCached: _Dr
  });
}

async function O0s(e) {
  return k({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: MVn,
    label: "API key",
    getCached: yDr,
    setCached: _Dr,
    credentials: e
  });
}

function I(e) {
  let n = E(e);
  return n === "EBUSY" || n === "EPERM" || n === "EACCES" && O() === "windows";
}

function L(e) {
  let n = () => LXe(e, {
    maxBytes: OIe,
    symlinkAtPath: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse",
    regularFileOnly: !0
  });
  try {
    return n();
  } catch (r) {
    if (I(r)) return n();
    throw r;
  }
}

function b() {
  return D({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: Mie,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Mie,
    label: "token",
    fileLabel: "session ingress token",
    getCached: Vje,
    setCached: Kje,
    skipInReviewOrigin: !0
  });
}

async function M0s(e) {
  if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) return;
  await k({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: Mie,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Mie,
    label: "token",
    fileLabel: "session ingress token",
    getCached: Vje,
    setCached: Kje,
    credentials: e,
    skipInReviewOrigin: !0
  });
}

function zd() {
  let e = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (e) return e;
  return b();
}

function omt() {
  return zd() !== null;
}

function kU() {
  let e = zd();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let n = {
      Cookie: `sessionKey=${e}`
    }, r = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (r) n["X-Organization-Uuid"] = r;
    return n;
  }
  return Ive(e);
}

function Ive(e) {
  return e ? {
    Authorization: `Bearer ${e}`
  } : {};
}

function DVn(e) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e;
}

export { H5, IIe, MVn, Mie, _Ro, OIe, P0s, PLt, d1e, nmt, I0s, HVn, bRo, K9, rI, KPr, SRo, rmt, Hie, O0s, M0s, zd, omt, kU, Ive, DVn };
