// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ys } from "./chunk-2v9tfgc3.js";

import { Vt } from "./chunk-vxr6sv7z.js";

import { E, W } from "./chunk-b0z4bv3v.js";

import { _, t } from "./chunk-kawq2919.js";

import { gr } from "./chunk-z52kmxx4.js";

import { mt } from "./chunk-j90se18b.js";

import { Ct } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { Ur, ba } from "./chunk-cjt10y7b.js";

import { a } from "./chunk-j016gcgm.js";

import { uzn, Gnn, Vnn, nc, Pw, prn, QT, vt, iko, An, aU, NH, vGn, In } from "./chunk-xywp7esx.js";

import { MDn, Yit, RV, Wms, CXt, HDn } from "./chunk-sqb9meyh.js";

import { hu } from "./chunk-5brm0azz.js";

import { Lft } from "./chunk-qqd24q2y.js";

import { on } from "./chunk-b47tzzqx.js";

import { o, v, u, U, A } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

import { join as l } from "path";

var f = 2, Dnr = 36e5, Lnr = .1;

function h5r(e, r) {
  return Math.round(e * (1 + Lnr * (2 * r - 1)));
}

var y = p(() => u({
  version: A(f),
  fetchedAt: v(),
  staleAt: v(),
  etag: o().refine(RV).optional(),
  organizationUuid: o().refine(r => Vt(r)?.toLowerCase() === r).optional(),
  resolution: U(HDn).optional(),
  catalog: u({
    surface: U(MDn),
    config: Wms(),
    state: CXt().optional()
  }).nullable()
}).transform(r => {
  if (r.etag === void 0 || r.catalog === null || !Gnn(r.catalog)) return r;
  let {etag: n, ...i} = r;
  return i;
}));

function xDe(e) {
  switch (e.kind) {
   case "account":
    return "org";

   case "token":
   case "api_key":
   case "profile":
   case "federation":
    return "orgless";
  }
}

function jhe(e) {
  switch (e.kind) {
   case "account":
   case "token":
    return "oauth";

   case "api_key":
    return "api_key";

   case "profile":
    return "profile";

   case "federation":
    return "federation";
  }
}

function Nnr(e, r) {
  if (e === null || r === null) return !1;
  switch (e.kind) {
   case "account":
    return r.kind === "account" && e.orgUuid === r.orgUuid && e.accountScope === r.accountScope;

   case "token":
    return r.kind === "token" && e.tokenScope === r.tokenScope;

   case "api_key":
    return r.kind === "api_key" && e.keyScope === r.keyScope;

   case "profile":
    return r.kind === "profile" && e.profileScope === r.profileScope;

   case "federation":
    return r.kind === "federation" && e.federationScope === r.federationScope;
  }
}

function Ttt(e, r) {
  switch (e.kind) {
   case "account":
    return l(NH(), `${e.orgUuid}-${e.accountScope}-${r}.json`);

   case "token":
    return l(NH(), `tok-${e.tokenScope}-${r}.json`);

   case "api_key":
    return l(NH(), `key-${e.keyScope}-${r}.json`);

   case "profile":
    return l(NH(), `prof-${e.profileScope}-${r}.json`);

   case "federation":
    return l(NH(), `fed-${e.federationScope}-${r}.json`);
  }
}

function d() {
  return Ur().servedCatalogByKey;
}

function YVt(e, r) {
  switch (e.kind) {
   case "account":
    return `${e.orgUuid}:${e.accountScope}:${r}`;

   case "token":
    return `tok:${e.tokenScope}:${r}`;

   case "api_key":
    return `key:${e.keyScope}:${r}`;

   case "profile":
    return `prof:${e.profileScope}:${r}`;

   case "federation":
    return `fed:${e.federationScope}:${r}`;
  }
}

function EXo(e, r) {
  return d().get(YVt(e, r)) ?? void 0;
}

var s = Yit + 4096;

async function k(e) {
  let r;
  try {
    r = await aU().readRange(e, 0, s + 1);
  } catch (i) {
    if (!W(i)) t(`[servedCatalog] cache read failed: ${E(i) ?? "unknown"}`);
    return;
  }
  if (r.length > s) return t("[servedCatalog] cache file oversized"), "invalid";
  let n = y().safeParse(mt(r.toString("utf8"), !1));
  if (!n.success) return t("[servedCatalog] cache file invalid"), "invalid";
  return n.data;
}

async function $nr(e, r) {
  let n = YVt(e, r), i = d().get(n);
  if (i !== void 0) return i ?? void 0;
  let c = await k(Ttt(e, r));
  if (c === void 0) {
    d().set(n, null);
    return;
  }
  if (c === "invalid" || c.catalog !== null && c.catalog.surface !== r) {
    t(`[servedCatalog] cache file ${c === "invalid" ? "invalid" : "holds another surface"}, discarding`), 
    await y5r(e, r);
    return;
  }
  return await S(n, c), c;
}

async function y5r(e, r) {
  d().set(YVt(e, r), null);
  try {
    await aU().delete(Ttt(e, r));
  } catch (n) {
    if (!W(n)) t(`[servedCatalog] cache delete failed: ${E(n) ?? "unknown"}`);
  }
}

async function XVt(e, r, n) {
  await S(YVt(e, r), n);
  try {
    let i = aU();
    await i.mkdir(NH()), await i.atomicWrite(Ttt(e, r), _(n), 384);
  } catch (i) {
    t(`[servedCatalog] cache write failed: ${E(i) ?? "unknown"}`);
  }
}

async function S(e, r) {
  if (O(e, r), r.catalog !== null) await vGn(uzn(r.catalog));
}

function O(e, r) {
  if (d().set(e, r), r.catalog !== null) Vnn(r.catalog);
}

function kXo({catalog: e, etag: r, organizationUuid: n, resolution: i, now: c = Date.now(), random: m = Math.random()}) {
  return {
    version: f,
    fetchedAt: c,
    staleAt: g(c, m),
    ...r !== void 0 && (e === null || !Gnn(e)) && {
      etag: r
    },
    ...n !== void 0 && {
      organizationUuid: n
    },
    ...i !== void 0 && {
      resolution: i
    },
    catalog: e
  };
}

function TXo(e, r = Date.now(), n = Math.random()) {
  return {
    ...e,
    fetchedAt: r,
    staleAt: g(r, n)
  };
}

function g(e, r) {
  return e + h5r(Dnr, r);
}

function Att(e, r = Date.now()) {
  let n = e.fetchedAt + Dnr * (1 + Lnr);
  return r < e.fetchedAt || r >= e.staleAt || e.staleAt > n;
}

var F = "tengu_delegated_quail", R = {
  mode: "off"
};

function bvt({skipEssentialTrafficGate: e = !1} = {}) {
  if (ys(a.CLAUDE_CODE_MODEL_CATALOG)) return "env_off";
  if (gr()) return "bare";
  if (!e && Ct()) return "essential_traffic";
  if (a.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (!ba()) return "not_first_party";
  let r = h();
  if (r.scope === null) return r.reason;
  if (!on("allow_model_catalog")) return "policy";
  return null;
}

function $Te() {
  if (bvt() !== null) return "off";
  return Ctt("served");
}

function Ctt(e) {
  let {value: r, source: n} = In(F, R);
  return T(r, n, e);
}

function T(e, r, n) {
  return w(e, n);
}

function w(e, r) {
  switch (I(e, r)) {
   case "shadow":
    return "shadow";

   case "primary":
    return "primary";

   default:
    return "off";
  }
}

function I(e, r) {
  if (e === null || typeof e !== "object") return;
  let n;
  if (r === "served") n = "served" in e ? e.served : void 0; else n = "published" in e ? e.published : void 0;
  if (typeof n === "string") return n;
  return "mode" in e ? e.mode : void 0;
}

function x() {
  let e = a.CLAUDE_CODE_ORGANIZATION_UUID ?? An()?.organizationUuid;
  return Vt(e)?.toLowerCase() ?? null;
}

var C = 12;

function h() {
  if (!vt()) return L();
  let e = QT(), r = e === "store" ? Vt(An()?.accountUuid) : Vt(a.CLAUDE_CODE_ACCOUNT_UUID), n = x();
  if (r !== null && n !== null) return {
    scope: {
      kind: "account",
      orgUuid: n,
      accountScope: at(r.toLowerCase()).slice(0, C)
    }
  };
  switch (e) {
   case "env":
   case "fd":
    {
      let i = iko();
      if (i === null) return {
        scope: null,
        reason: "no_account"
      };
      return {
        scope: {
          kind: "token",
          tokenScope: i.slice(0, C)
        }
      };
    }

   case "store":
   case "none":
    return {
      scope: null,
      reason: n === null ? "no_org" : "no_account"
    };
  }
}

function L() {
  if (!1) switch (e) {
   case "none":
   case "ANTHROPIC_API_KEY":
   case "/login managed key":
  }
  return {
    scope: null,
    reason: "not_claude_ai_auth"
  };
}

function q2e() {
  if (!ba()) return "third_party";
  if (vt()) switch (QT()) {
   case "env":
   case "fd":
    return "host_token";

   case "store":
   case "none":
    return "claudeai_login";
  }
  if (Pw()) return "auth_token_env";
  switch (prn().source) {
   case "ANTHROPIC_API_KEY":
    return "api_key_env";

   case "/login managed key":
    return "api_key_login";

   case "apiKeyHelper":
    return "api_key_helper";

   case "none":
    return D() ?? "none";
  }
}

function D() {
  if (!nc()) return null;
  return Lft() === "user_oauth" ? "profile_user_oauth" : "profile_federation";
}

function zJ() {
  return h().scope;
}

function X6() {
  if (a.CLAUDE_CODE_REMOTE) return "ccr";
  if (hu()) return "ccd";
  return "cc";
}

export { Dnr, Lnr, h5r, xDe, jhe, Nnr, Ttt, YVt, EXo, $nr, y5r, XVt, kXo, TXo, Att, bvt, $Te, Ctt, q2e, zJ, X6 };
