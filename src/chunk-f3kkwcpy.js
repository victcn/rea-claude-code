// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ke } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { l } from "./chunk-b0z4bv3v.js";

import { Si } from "./chunk-xywp7esx.js";

import { t } from "./chunk-kawq2919.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { RY } from "./chunk-4v78v8fd.js";

import { $_ } from "./chunk-7en5gt36.js";

import { Ljr } from "./chunk-3cqetdd0.js";

import { Aa } from "./chunk-sre9xcbd.js";

import { mkdir as P, readFile as f, stat as p, unlink as v, utimes as D, writeFile as k } from "fs/promises";

import { join as A } from "path";

var g = ".consolidate-lock", y = 36e5;

function s(e) {
  return A(e, g);
}

function c(e) {
  let n = RY(e);
  return n === void 0 ? void 0 : Fe.memory(n, [ g ]);
}

function b(e, n) {
  let [a = "", r = ""] = e.split(`\n`), o = parseInt(a.trim(), 10), i = r.trim() === "" ? NaN : Number(r.trim());
  return {
    holderPid: Number.isFinite(o) ? o : void 0,
    lastConsolidatedAt: Number.isFinite(i) ? i : n
  };
}

function h(e, n) {
  return `${e ?? ""}\n${n}`;
}

async function bZe(e = Si(), n) {
  let a = z() && n !== void 0 ? c(e) : void 0;
  if (n && a) {
    let r = await n.readText([ a ]);
    if (!r.ok || !r.value.items[0].found) return 0;
    let {value: o, mtimeMs: i} = r.value.items[0];
    return b(o, i).lastConsolidatedAt;
  }
  try {
    return (await p(s(e))).mtimeMs;
  } catch {
    return 0;
  }
}

async function kVo(e) {
  return L(Si(), e);
}

async function L(e, n) {
  let a = z() && n !== void 0 ? c(e) : void 0;
  if (n && a) return S(n, a);
  let r = s(e), o, i;
  try {
    let [u, w] = await Promise.all([ p(r), f(r, "utf8") ]);
    o = u.mtimeMs;
    let m = parseInt(w.trim(), 10);
    i = Number.isFinite(m) ? m : void 0;
  } catch {}
  if (o !== void 0 && Date.now() - o < y) {
    if (i !== void 0 && Aa(i)) return t(`[autoDream] lock held by live PID ${i} (mtime ${Math.round((Date.now() - o) / 1e3)}s ago)`), 
    null;
  }
  await P(e, {
    recursive: !0
  }), await k(r, String(process.pid));
  let d;
  try {
    d = await f(r, "utf8");
  } catch {
    return null;
  }
  if (parseInt(d.trim(), 10) !== process.pid) return null;
  return o ?? 0;
}

async function Ebt(e, n) {
  return C(Si(), e, n);
}

async function C(e, n, a) {
  let r = z() && a !== void 0 ? c(e) : void 0;
  if (a && r) return x(a, r, n);
  let o = s(e);
  try {
    if (n === 0) {
      await v(o);
      return;
    }
    await k(o, "");
    let i = n / 1e3;
    await D(o, i, i);
  } catch (i) {
    t(`[autoDream] rollback failed: ${l(i)} \u2014 next trigger delayed to minHours`);
  }
}

async function S(e, n) {
  let a = await e.readText([ n ]), r = a.ok ? a.value.items[0] : void 0, o = r?.found ? r.version : void 0, i = r?.found ? b(r.value, r.mtimeMs) : void 0;
  if (i !== void 0 && Date.now() - i.lastConsolidatedAt < y) {
    if (i.holderPid !== void 0 && Aa(i.holderPid)) return t(`[autoDream] lock held by live PID ${i.holderPid} (acquired ${Math.round((Date.now() - i.lastConsolidatedAt) / 1e3)}s ago)`), 
    null;
  }
  let d = await e.updateText(n, u => (u?.version ?? void 0) === o ? {
    write: h(process.pid, Date.now()),
    result: !0
  } : {
    skip: !0,
    result: !1
  }, r?.found ? {
    publishDiscipline: "inPlace"
  } : void 0);
  if (!d.ok || d.value.result !== !0) return null;
  return i?.lastConsolidatedAt ?? 0;
}

async function x(e, n, a) {
  let r = a === 0 ? await e.delete(n) : await e.updateText(n, () => ({
    write: h(void 0, a)
  }), {
    publishDiscipline: "inPlace"
  });
  if (!r.ok) t(`[autoDream] rollback failed: ${r.error.code} \u2014 next trigger delayed to minHours`);
}

async function TVo(e, n) {
  let a = $_(ke());
  return (await Ljr(a, !0, void 0, n)).filter(o => o.mtime > e).map(o => o.sessionId);
}

export { bZe, kVo, Ebt, TVo };
