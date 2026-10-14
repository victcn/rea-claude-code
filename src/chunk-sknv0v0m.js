// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, Ime, ke, he } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { jt } from "./chunk-b0z4bv3v.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { gn } from "./chunk-yxennhe9.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { p } from "./chunk-jkzenvsk.js";

import { Jh, jXe } from "./chunk-60c97a4m.js";

import { yz } from "./chunk-7en5gt36.js";

import { Aio } from "./chunk-3cd32ngx.js";

import { pbe, JW } from "./chunk-4q01dwtz.js";

import { Zn, me, yn, St, Dd } from "./chunk-dexzwy8h.js";

import { um, Qi } from "./chunk-ws55c9wv.js";

import { dirname as M, join as f } from "path";

var KVr = [ "input_unservable" ], w = /^k[0-9a-z]{8}$/, u = 256, k = /^(?:[^\p{Cc}\p{Cf}]|[\u200c\u200d])+$/u, OSn = /^[A-Za-z0-9_-]{1,128}$/, h = p(() => St({
  taskId: me().regex(w),
  serverName: me().min(1).max(u).regex(k),
  toolName: me().min(1).max(u).regex(k),
  mcpTaskId: me().min(1).regex(k),
  pollIntervalMs: yn().optional(),
  spawnedAt: yn(),
  toolUseId: me().regex(Aio).optional(),
  protocol: me().min(1).max(u).regex(/^[\x20-\x7e]+$/).optional(),
  ttlExpiresAt: yn().optional(),
  transportFingerprint: me().max(8192).optional(),
  workerWakeId: me().regex(OSn).optional(),
  cancelReason: Dd(KVr).optional().catch(void 0)
}).passthrough().superRefine((e, a) => {
  if (e.protocol === "sep2663" && (e.mcpTaskId.length > pbe || !JW.test(e.mcpTaskId))) a.addIssue({
    code: Zn.custom,
    path: [ "mcpTaskId" ],
    message: "sep2663 task id exceeds the wire bound"
  });
}));

function AZn(e) {
  return h().safeParse(e);
}

function _le() {
  return Ime() ?? jXe() ?? Jh(ke());
}

function T(e = q(), a = _le()) {
  return f(a, e, "mcp-tasks");
}

function S(e, a = q(), n) {
  return f(T(a, n), `mcp-task-${e}.meta.json`);
}

function g(e = _le()) {
  return yz(e);
}

function y(e, a, n = q()) {
  return Fe.sidecar(e, n, [ "mcp-tasks", `mcp-task-${a}.meta.json` ]);
}

async function MSn(e, a, n) {
  let o = z() && n !== void 0 ? g() : void 0, c = q(), s = S(e, c);
  if (n && o !== void 0) {
    if (!he()) await gn().mkdir(M(s));
    let r = await n.write(y(o, e, c), _(a), {
      publishDiscipline: "inPlace"
    });
    if (!r.ok) throw t(`writeMcpTaskMetadata: ${r.error.code}`), Error("mcp task metadata write failed");
    return;
  }
  if (he()) return;
  await gn().mkdir(M(s)), await gn().write(s, _(a));
}

async function ble(e, a, n, o) {
  let c = z() && a !== void 0 ? g(o) : void 0;
  if (a && c !== void 0) {
    let r = await a.delete(y(c, e, n));
    if (!r.ok) throw t(`deleteMcpTaskMetadata: ${r.error.code}`), Error("mcp task metadata delete failed");
    return;
  }
  if (he()) return;
  let s = S(e, n, o);
  try {
    await gn().delete(s);
  } catch (r) {
    if (jt(r)) return;
    throw r;
  }
}

async function HSn(e) {
  let a = z() && e !== void 0 ? g() : void 0;
  if (e && a !== void 0) return x(e, a);
  if (he()) return [];
  let n = T(), o;
  try {
    o = await gn().list(n);
  } catch (s) {
    if (jt(s)) return [];
    throw s;
  }
  let c = [];
  for (let s of o) {
    if (!s.endsWith(".meta.json")) continue;
    try {
      let r = await gn().read(f(n, s)), i = AZn(Y(r));
      if (!i.success) {
        t(`listMcpTaskMetadata: skipping ${s}: ${String(i.error)}`);
        continue;
      }
      c.push(i.data);
    } catch (r) {
      t(`listMcpTaskMetadata: skipping ${s}: ${String(r)}`);
    }
  }
  return c;
}

async function x(e, a) {
  let n = {
    namespace: "sidecar",
    projectKey: a,
    sessionId: q(),
    relPath: [ "mcp-tasks" ]
  }, o = [], c = await Qi(r => e.listEntries(n, {
    cursor: r,
    skipKeyStats: !0,
    skipScopeStats: !0
  }), r => {
    for (let i of r) {
      if (i.kind !== "key" || i.key.namespace !== "sidecar") continue;
      if ((i.key.relPath.at(-1) ?? "").endsWith(".meta.json")) o.push(i.key);
    }
  });
  switch (c.status) {
   case "done":
    break;

   case "error":
    throw t(`listMcpTaskMetadata: ${c.error.code}`), Error("mcp task metadata list failed");

   case "capped":
    throw t(`listMcpTaskMetadata: list exceeded ${um} pages`), Error("mcp task metadata list exceeded the page cap");
  }
  let s = [];
  for (let r of o) {
    let i = r.relPath.at(-1) ?? "", m = await e.read([ r ]);
    if (!m.ok) {
      t(`listMcpTaskMetadata: skipping ${i}: ${m.error.code}`);
      continue;
    }
    let l = m.value.items[0];
    if (!l.found) continue;
    try {
      let d = AZn(Y(Buffer.from(l.value).toString("utf8")));
      if (!d.success) {
        t(`listMcpTaskMetadata: skipping ${i}: ${String(d.error)}`);
        continue;
      }
      s.push(d.data);
    } catch (d) {
      t(`listMcpTaskMetadata: skipping ${i}: ${String(d)}`);
    }
  }
  return s;
}

export { KVr, OSn, AZn, _le, MSn, ble, HSn };
