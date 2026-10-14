// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { B } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { so } from "./chunk-3ykz5st8.js";

import { _, Y } from "./chunk-kawq2919.js";

import { Tn, iD } from "./chunk-30n0xq4e.js";

import { p } from "./chunk-jkzenvsk.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { Amr, Cmr, QM } from "./chunk-z09tf6qf.js";

import { Xa } from "./chunk-3kb22va7.js";

import { o, v, T, u } from "./chunk-cvcg6n1z.js";

import { createHash as D } from "crypto";

import { mkdir as S, readdir as h, rm as w, unlink as k } from "fs/promises";

import { join as d } from "path";

var l = 864e5, m = 8388608;

function c(t) {
  return D("sha256").update(t).digest("hex").slice(0, 8);
}

function n(t) {
  return d(QM(), `.draft-${c(t)}`);
}

function f(t) {
  return _({
    ...t,
    ts: Date.now()
  });
}

async function bKt(t, r, e) {
  await yrr(t, r, e);
}

async function yrr(t, r, e) {
  if (z() && e) return (await e.write(Fe.jobDraft(c(t)), f(r), {
    publishDiscipline: "atomic",
    mode: 438 & ~process.umask()
  }).catch(() => {}))?.ok === !0;
  try {
    return await S(QM(), {
      recursive: !0
    }), await Tn(n(t), f(r)), !0;
  } catch {
    return !1;
  }
}

function E6r(t, r) {
  try {
    iD(n(t), f(r));
  } catch {}
}

async function k6r(t, r) {
  if (r) {
    await r.delete(Fe.jobDraft(c(t))).catch(() => {});
    return;
  }
  await k(n(t)).catch(() => {});
}

var g = p(() => u({
  q: o(),
  collapsed: T(o()).optional(),
  ts: v()
}));

async function BJo(t, r) {
  let e = r ? await P(r, t) : await Xa(n(t), m);
  if (e === null) return;
  let a;
  try {
    a = g().safeParse(Y(e));
  } catch {
    return;
  }
  if (!a.success) return;
  let {q: i, collapsed: s, ts: y} = a.data;
  if (Date.now() - y > l) return;
  return {
    q: i,
    collapsed: s ?? []
  };
}

async function P(t, r) {
  return Cmr(t, Fe.jobDraft(c(r)), {
    cap: m,
    screens: x(),
    screenKey: n(r)
  });
}

function x() {
  return Amr.of(B().host).drafts;
}

async function Kkn() {
  return so("job_sweep_drafts", async () => {
    let t;
    try {
      t = await h(QM());
    } catch {
      return;
    }
    let r = Date.now();
    await Promise.all(t.filter(e => e.startsWith(".draft-")).map(async e => {
      let a = d(QM(), e), i = await Xa(a, m);
      if (i !== null) try {
        let s = g().safeParse(Y(i));
        if (s.success && r - s.data.ts <= l) return;
      } catch {}
      await w(a, {
        recursive: !0,
        force: !0
      }).catch(() => {});
    }));
  });
}

export { bKt, yrr, E6r, k6r, BJo, Kkn };
