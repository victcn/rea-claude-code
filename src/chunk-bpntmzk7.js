// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { E, W } from "./chunk-b0z4bv3v.js";

import { _, t } from "./chunk-kawq2919.js";

import { p } from "./chunk-jkzenvsk.js";

import { mt } from "./chunk-j90se18b.js";

import { Ur } from "./chunk-cjt10y7b.js";

import { uzn, pzn, Vnn, TDt, aU, NH, vGn } from "./chunk-xywp7esx.js";

import { on } from "./chunk-b47tzzqx.js";

import { MDn, RV, Xit } from "./chunk-sqb9meyh.js";

import { jhe, bvt, Ctt, zJ } from "./chunk-4bxgvwk3.js";

import { zEn, MXo, FTe, Rtt, HXo, Y2e } from "./chunk-38c4jbk6.js";

import { o, v, oe, u, U, A } from "./chunk-cvcg6n1z.js";

function iJn() {
  let e = bvt();
  if (e === "essential_traffic" && MXo()) {
    let a = bvt({
      skipEssentialTrafficGate: !0
    });
    return c(a);
  }
  return c(e);
}

function aJn(e) {
  return e.source === "fallback" && e.credential !== void 0 && f(e.credential);
}

function P(e) {
  return e !== null && f(jhe(e));
}

function f(e) {
  switch (e) {
   case "oauth":
    return !1;

   case "api_key":
   case "profile":
   case "federation":
    return !0;
  }
}

function c(e) {
  switch (e) {
   case "env_off":
   case "bare":
   case "essential_traffic":
   case "unix_socket":
   case "policy":
    return e;

   case "not_first_party":
    return "no_3p_reader";

   case "not_claude_ai_auth":
   case "api_key_helper":
    return on("allow_model_catalog") ? null : "policy";

   case "no_org":
   case "no_account":
    return "served_applies";

   case null:
    if (P(zJ())) return TDt()?.source === "served" ? "served_applies" : null;
    return "served_applies";
  }
}

function Djt() {
  return iJn() === null;
}

function Pjr() {
  if (!Djt()) return "off";
  return Ctt("published");
}

import { join as x } from "path";

var h = 2, C = 36e5, m = .1, R = [ "hosted", "custom_url", "file" ], D = p(() => u({
  version: A(h),
  fetchedAt: v(),
  staleAt: v(),
  etag: o().refine(RV).optional(),
  source: U(R),
  documentBytes: o(),
  sidecar: oe(),
  rootId: o(),
  document: Y2e()
}));

function Nhn(e) {
  return x(NH(), `published-${e}.json`);
}

function i() {
  return Ur().publishedCatalogByKey;
}

var g = FTe * 3 + Rtt + 4096;

async function oJn(e) {
  let a = i().get(e);
  if (a !== void 0) return a ?? void 0;
  let r = Nhn(e), n;
  try {
    n = await aU().readRange(r, 0, g + 1);
  } catch (l) {
    if (!W(l)) t(`[publishedCatalog] cache read failed: ${E(l) ?? "unknown"}`);
    i().set(e, null);
    return;
  }
  let s = n.length > g ? void 0 : D().safeParse(mt(n.toString("utf8"), !1));
  if (!s?.success) {
    t(`[publishedCatalog] cache file ${s === void 0 ? "oversized" : "invalid"}, discarding`), 
    await Ajr(e);
    return;
  }
  return await sJn(e, s.data, {
    verified: !1
  }), s.data;
}

async function Ajr(e) {
  i().set(e, null);
  try {
    await aU().delete(Nhn(e));
  } catch {}
}

function iVo(e) {
  i().set(e, null);
}

async function Cjr(e, a) {
  await sJn(e, a, {
    verified: !0
  });
  try {
    let r = aU();
    await r.mkdir(NH()), await r.atomicWrite(Nhn(e), _(a), 384);
  } catch (r) {
    t(`[publishedCatalog] cache write failed: ${E(r) ?? "unknown"}`);
  }
}

async function sJn(e, a, {verified: r}) {
  if (i().set(e, a), r && a.rootId !== zEn) for (let n of S(a.document)) pzn(n);
  await Rjr(a.document);
}

async function Rjr(e) {
  let a = S(e);
  for (let r of a) Vnn(r);
  await vGn(new Set(a.flatMap(r => [ ...uzn(r) ])));
}

function S(e) {
  return MDn.flatMap(a => {
    let r = e.surfaces[a], n = r === void 0 ? null : Xit(r, a);
    return n === null ? [] : [ n ];
  });
}

function aVo({document: e, documentBytes: a, sidecar: r, etag: n, source: s, rootId: l, now: d = Date.now(), random: y = Math.random()}) {
  return {
    version: h,
    fetchedAt: d,
    staleAt: b(d, y),
    ...n !== void 0 && {
      etag: n
    },
    source: s,
    documentBytes: Buffer.from(a).toString("base64"),
    sidecar: r,
    rootId: l,
    document: e
  };
}

function lVo(e, a = Date.now(), r = Math.random()) {
  return {
    ...e,
    fetchedAt: a,
    staleAt: b(a, r)
  };
}

function b(e, a) {
  let r = 1 + m * (2 * a - 1);
  return e + Math.round(C * r);
}

function xjr(e, a = Date.now()) {
  let r = HXo(e.expires_at);
  return r !== void 0 && a >= r;
}

function oGe(e, a = Date.now()) {
  let r = e.fetchedAt + C * (1 + m);
  return a < e.fetchedAt || a >= e.staleAt || e.staleAt > r || xjr(e.document, a);
}

export { Nhn, oJn, Ajr, iVo, Cjr, sJn, Rjr, aVo, lVo, xjr, oGe, iJn, aJn, Djt, Pjr };
