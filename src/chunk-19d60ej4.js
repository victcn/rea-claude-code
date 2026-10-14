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

import { mt } from "./chunk-j90se18b.js";

import { p } from "./chunk-jkzenvsk.js";

import { Ur } from "./chunk-cjt10y7b.js";

import { aU, NH } from "./chunk-xywp7esx.js";

import { o, v, u, ue, A } from "./chunk-cvcg6n1z.js";

import { join as b } from "path";

var R6r = "published-floor.json", l = 1, h = 32, a = 65536, F = p(() => u({
  version: A(l),
  sources: ue(o().min(1).max(64), u({
    version: v().int().nonnegative(),
    issuedAt: o().max(64),
    recordedAt: v().int().nonnegative()
  }))
}));

function c() {
  return b(NH(), R6r);
}

function s() {
  return Ur().publishedCatalogFloorMarks;
}

async function qkn(e) {
  return await f(), s().get(e)?.version ?? 0;
}

async function Gvt(e, r, i = Date.now()) {
  await f();
  let n = s().get(e);
  if (n !== void 0 && n.version >= r.version) return;
  s().set(e, {
    version: r.version,
    issuedAt: (r.issued_at ?? "").slice(0, 64),
    recordedAt: i
  }), await C();
}

function f() {
  let e = Ur();
  return e.publishedCatalogFloorRead ??= g().then(m), e.publishedCatalogFloorRead;
}

function m(e) {
  if (e === void 0) return;
  for (let [r, i] of e) {
    let n = s().get(r);
    if (n === void 0 || i.version > n.version) s().set(r, i);
  }
}

async function g() {
  let e;
  try {
    e = await aU().readRange(c(), 0, a + 1);
  } catch (i) {
    if (!W(i)) t(`[publishedCatalog] floor file read failed: ${E(i) ?? "unknown"}; no persisted version marks this session`);
    return;
  }
  let r = e.length > a ? void 0 : F().safeParse(mt(e.toString("utf8"), !1));
  if (!r?.success) {
    t(`[publishedCatalog] floor file ${r === void 0 ? "oversized" : "invalid"}; no persisted version marks this session`);
    return;
  }
  return new Map(Object.entries(r.data.sources));
}

function C() {
  let e = Ur(), r = (e.publishedCatalogFloorWrite ?? Promise.resolve()).then(d, d);
  return e.publishedCatalogFloorWrite = r, r;
}

async function d() {
  try {
    m(await g());
    let e = [ ...s().entries() ].sort(([, i], [, n]) => n.recordedAt - i.recordedAt).slice(0, h), r = aU();
    await r.mkdir(NH()), await r.atomicWrite(c(), _({
      version: l,
      sources: Object.fromEntries(e)
    }), 384);
  } catch (e) {
    t(`[publishedCatalog] floor file write failed: ${E(e) ?? "unknown"}`);
  }
}

export { R6r, qkn, Gvt };
