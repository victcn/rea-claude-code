// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { lv } from "./chunk-zqby5cq4.js";

import { l, E } from "./chunk-b0z4bv3v.js";

import { zn, eo } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { t } from "./chunk-kawq2919.js";

import { gn } from "./chunk-yxennhe9.js";

import { mt } from "./chunk-j90se18b.js";

import { p } from "./chunk-jkzenvsk.js";

import { Yae } from "./chunk-0c2cwcw3.js";

import { Fze, D_t } from "./chunk-g0kp7vjb.js";

import { FI } from "./chunk-hb06s2n8.js";

import { o, T, u, $e } from "./chunk-cvcg6n1z.js";

import { O } from "./chunk-1xnsr4dy.js";

import { stat as C } from "fs/promises";

import { basename as w, dirname as h, normalize as y } from "path";

function x(r) {
  return $e([ r, T(r) ]).optional().transform(n => n === void 0 ? [] : Array.isArray(n) ? n : [ n ]);
}

var g = p(() => {
  let r = eo(Yae, n => x(n.schema()));
  return u({
    $schema: o().optional(),
    ...r
  });
});

function x6n() {
  return g().parse({});
}

async function BWe(r, n) {
  let i;
  if (z() && n !== void 0 && r === FI()) {
    let e = await D(n, r);
    if (!e.ok) return e.result;
    i = e.raw;
  } else try {
    let e = await C(r).catch(d => E(d) === "ENOENT" ? null : Promise.reject(d));
    if (e && (!e.isFile() || e.size > Fze)) return {
      ok: !1,
      error: `${r} is not a regular file (or exceeds 1MiB)`
    };
    i = await gn().read(r);
  } catch (e) {
    if (E(e) === "ENOENT") return {
      ok: !0,
      config: x6n(),
      unknownKeys: []
    };
    return {
      ok: !1,
      error: `failed to read ${r}: ${l(e)}`
    };
  }
  let s = mt(i, !1);
  if (s === null) return {
    ok: !1,
    error: `failed to parse ${r} as JSON`
  };
  let f = g().safeParse(s);
  if (!f.success) return {
    ok: !1,
    error: `config validation failed: ${f.error.message}`
  };
  let a = new Set(Object.keys(g().shape)), c = typeof s === "object" && s !== null ? Object.keys(s).filter(e => !a.has(e)) : [];
  return {
    ok: !0,
    config: f.data,
    unknownKeys: c
  };
}

async function D(r, n) {
  let i = await D_t(r);
  switch (i.kind) {
   case "text":
    return {
      ok: !0,
      raw: i.text
    };

   case "absent":
    return {
      ok: !1,
      result: {
        ok: !0,
        config: x6n(),
        unknownKeys: []
      }
    };

   case "refused":
    return {
      ok: !1,
      result: {
        ok: !1,
        error: `${n} is not a regular file (or exceeds 1MiB)`
      }
    };

   case "failed":
    return {
      ok: !1,
      result: {
        ok: !1,
        error: `failed to read ${n}: ${i.error.code}`
      }
    };

   case "threw":
    return {
      ok: !1,
      result: {
        ok: !1,
        error: `failed to read ${n}: ${l(i.error)}`
      }
    };
  }
}

function P6n(r, n) {
  let i = h(r), s = y(i), f = w(r), a = lv.watch(i, {
    persistent: !0,
    ignoreInitial: !0,
    depth: 0,
    usePolling: O() === "macos",
    interval: 100,
    ignored: c => {
      let e = y(c);
      return e !== s && w(e) !== f;
    },
    awaitWriteFinish: {
      stabilityThreshold: 300,
      pollInterval: 100
    },
    atomic: !0,
    ignorePermissionErrors: !0
  });
  return a.on("add", n), a.on("change", n), a.on("unlink", n), a.on("error", c => t(`[daemon-config] watcher error: ${l(c)}`, {
    level: "warn"
  })), () => void a.close().catch(() => {});
}

function LBo(r, n) {
  let i = {
    stop: [],
    start: [],
    restart: []
  };
  for (let s of Object.keys(Yae)) {
    let f = r[s] ?? [], a = n[s] ?? [], c = Math.max(f.length, a.length);
    for (let e = 0; e < c; e++) {
      let d = `${s}:${e}`, m = f[e], k = a[e];
      if (m !== void 0 && k === void 0) i.stop.push({
        id: d,
        kind: s,
        previousConfig: m
      }); else if (m === void 0 && k !== void 0) i.start.push({
        id: d,
        kind: s,
        config: k
      }); else if (!zn(m, k)) i.restart.push({
        id: d,
        kind: s,
        config: k,
        previousConfig: m
      });
    }
  }
  return i;
}

export { x6n, BWe, P6n, LBo };
