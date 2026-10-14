// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { x, l, W } from "./chunk-b0z4bv3v.js";

import { z } from "./chunk-bmq0vae0.js";

import { _, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { gn } from "./chunk-yxennhe9.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { so } from "./chunk-3ykz5st8.js";

import { _G } from "./chunk-jnzpsr0d.js";

import { Ev, xie } from "./chunk-znhtg8e4.js";

import { Mo, mt } from "./chunk-j90se18b.js";

import { HV, wY, HJt } from "./chunk-bjsp1prn.js";

import { p } from "./chunk-jkzenvsk.js";

import { bf } from "./chunk-s82cb921.js";

import { vu } from "./chunk-v7qc2kz8.js";

import { pie } from "./chunk-xywp7esx.js";

import { FI } from "./chunk-hb06s2n8.js";

import { o, v, M, T, u, U } from "./chunk-cvcg6n1z.js";

import { readFile as ee, stat as te } from "fs/promises";

import { dirname as re } from "path";

var Fze = 1048576;

async function D_t(s) {
  let r;
  try {
    r = await Z(s);
  } catch (n) {
    return {
      kind: "threw",
      error: n
    };
  }
  if (!r.ok) {
    let n = "telemetryCode" in r.error ? r.error.telemetryCode : void 0;
    if (n === "ENXIO" || n === "EISDIR" || n === "EFBIG") return {
      kind: "refused"
    };
    return {
      kind: "failed",
      error: r.error
    };
  }
  let e = r.value.items[0];
  if (!e.found) return {
    kind: "absent"
  };
  if (e.totalBytes > Fze) return {
    kind: "refused"
  };
  return {
    kind: "text",
    text: Buffer.from(e.value).toString("utf8")
  };
}

function Z(s) {
  return s.read([ {
    key: Fe.state("daemon-config"),
    offset: 0,
    length: Fze + 1
  } ]);
}

async function D(s, r) {
  let e = s ?? FI(), n;
  if (z() && r !== void 0 && e === FI()) n = await oe(r, e); else try {
    let c = await te(e);
    if (!c.isFile() || c.size > Fze) throw Error(`${e} is not a regular file (or exceeds 1MiB); refusing read-modify-write`);
    n = await ee(e, "utf8");
  } catch (c) {
    if (!W(c)) throw c;
  }
  if (n === void 0 || n.trim() === "") return {};
  let a;
  try {
    a = JSON.parse(Mo(n));
  } catch {
    throw Error(`daemon.json is malformed: ${e}`);
  }
  if (a && typeof a === "object" && !Array.isArray(a)) return a;
  return {};
}

async function oe(s, r) {
  let e = await D_t(s);
  switch (e.kind) {
   case "text":
    return e.text;

   case "absent":
    return;

   case "refused":
    {
      let n = `${r} is not a regular file (or exceeds 1MiB); refusing read-modify-write`;
      throw Error(n);
    }

   case "failed":
    throw Object.assign(new x(`daemon.json read failed: ${e.error.code}`, "daemon.json v5 read failed"), {
      cause: "cause" in e.error ? e.error.cause : e.error
    });

   case "threw":
    throw e.error;
  }
}

async function ojt(s, r, e) {
  let n = r ?? FI(), a = await D(n, e);
  if (await s(a) === !1) return;
  if (z() && e !== void 0 && n === FI()) {
    let m = await e.write(Fe.state("daemon-config"), _(a, null, 2) + `\n`, {
      publishDiscipline: "atomic",
      mode: 438 & ~process.umask()
    });
    if (!m.ok) throw Object.assign(new x(`daemon.json write failed: ${m.error.code}`, "daemon.json v5 write failed"), {
      cause: "cause" in m.error ? m.error.cause : m.error
    });
    return;
  }
  await gn().mkdir(re(n)), await Tn(n, _(a, null, 2) + `\n`);
}

function $Br(s) {
  if (Array.isArray(s)) return s.filter(r => !!r && typeof r.dir === "string");
  if (s && typeof s.dir === "string") return [ s ];
  return [];
}

import { readFile as ne } from "fs/promises";

import { join as se } from "path";

var ie = 1e3, O = 10080, X7e = [ "dontAsk", "auto", "default", "acceptEdits", "plan", "bypassPermissions" ], j = p(() => u({
  id: o().min(1),
  cron: o().refine(s => HV(s) !== null, {
    message: "invalid 5-field cron expression"
  }),
  prompt: o().min(1),
  directory: o().min(1),
  enabled: M().default(!0),
  permissionMode: U([ ...X7e, _G ]).transform(s => s === _G ? "default" : s).default("dontAsk"),
  model: o().optional(),
  runTimeoutMinutes: v().positive().max(O).default(30),
  maxQueued: v().int().positive().default(1)
}).strict()), FBr = p(() => u({
  tasks: T(j()).default([]).refine(s => new Set(s.map(r => r.id)).size === s.length, {
    message: "task ids must be unique"
  }),
  maxConcurrent: v().int().positive().default(1)
}).strict());

function B() {
  return se(Ee(), "daemon.scheduled.status.json");
}

function N() {
  return Fe.state("scheduled-status");
}

async function ae(s, r) {
  let e = {
    workerPid: process.pid,
    workerProcStart: xie(),
    writtenAt: Date.now(),
    tasks: s
  };
  if (z() && r) {
    try {
      let n = await r.write(N(), _(e), {
        mode: 438 & ~process.umask()
      });
      if (!n.ok) t(`writeScheduledStatus: ${n.error.code}`);
    } catch (n) {
      t(`writeScheduledStatus: ${l(n)}`);
    }
    return;
  }
  try {
    await Tn(B(), _(e));
  } catch {}
}

async function izo(s) {
  let r;
  if (z() && s !== void 0) {
    let a;
    try {
      a = await s.readText([ N() ]);
    } catch {
      return null;
    }
    if (!a.ok) return null;
    let c = a.value.items[0];
    if (!c.found) return null;
    r = c.value;
  } else try {
    r = await ne(B(), "utf8");
  } catch {
    return null;
  }
  let e = mt(r, !1);
  if (!e || typeof e !== "object") return null;
  let n = e;
  if (typeof n.workerPid !== "number" || typeof n.tasks !== "object" || n.tasks === null) return null;
  try {
    process.kill(n.workerPid, 0);
  } catch {
    return null;
  }
  if (!await Ev(n.workerPid, n.workerProcStart)) return null;
  return e;
}

var azo = async (s, r, e, n, a) => {
  let {tasks: c, maxConcurrent: m} = FBr().parse(s), {initializeErrorLogSink: y} = await import("./chunk-py26txvx.js"), {initializeAnalyticsSink: q} = await import("./chunk-jphqj2yx.js");
  if (y(), q(), !n.getAccessToken()) e("scheduled worker: not authed \u2014 run `claude auth login`"), 
  process.exit(1);
  let {awaitPolicyLimitsColdStart: Q, stopPolicyLimits: H} = await import("./chunk-egjan19g.js");
  if (r.aborted) return;
  if (r.addEventListener("abort", () => H(), {
    once: !0
  }), await Q(), r.aborted) return;
  let {query: J} = await import("./chunk-ybp35zh6.js");
  if (e(`scheduled worker started tasks=${c.length} maxConcurrent=${m}`), c.length === 0) {
    let d = setInterval(() => {}, 6e4);
    await new Promise(i => {
      if (r.aborted) {
        i();
        return;
      }
      r.addEventListener("abort", () => i(), {
        once: !0
      });
    }), clearInterval(d);
    return;
  }
  let b = [], A = new Set, S = null;
  function K(d) {
    let i = b.reduce((f, k) => k.task.id === d.id ? f + 1 : f, 0);
    if (i >= d.maxQueued) {
      e(`task=${d.id} dropped (queue full: ${i}/${d.maxQueued})`);
      return;
    }
    b.push({
      task: d
    }), S?.(), S = null;
  }
  let C = new Map, F = new Set, G = Date.now();
  function R() {
    let d = {};
    for (let i of c) {
      let f = C.get(i.id);
      d[i.id] = {
        running: F.has(i.id),
        ...f !== void 0 && {
          lastFiredAt: f
        }
      };
    }
    ae(d, a);
  }
  R();
  function V(d) {
    let i = C.get(d.id) ?? G;
    return HJt(d.cron, i, d.id, wY);
  }
  let X = setInterval((d, i, f, k) => {
    let P = Date.now();
    for (let h of d) {
      if (!h.enabled) continue;
      let w = i(h);
      if (w === null) continue;
      if (w <= P) f.set(h.id, P), k(h);
    }
  }, ie, c, V, C, K);
  r.addEventListener("abort", () => {
    clearInterval(X);
    for (let d of A) d.abort();
    S?.(), S = null;
  });
  let E = new Set;
  async function Y(d) {
    let {task: i} = d, f = bf();
    if (f) {
      e(`task=${i.id} refused: ${f}`);
      return;
    }
    let k = new AbortController;
    A.add(k), F.add(i.id), R();
    let P = setTimeout(w => w.abort(), Math.min(i.runTimeoutMinutes, O) * 6e4, k);
    e(`task=${i.id} start cron='${i.cron}' dir='${i.directory}'`);
    let h = vu({
      pinToCurrentBinary: !0
    });
    try {
      let w = J({
        prompt: i.prompt,
        options: {
          cwd: i.directory,
          permissionMode: i.permissionMode,
          ...i.permissionMode === "bypassPermissions" && {
            allowDangerouslySkipPermissions: !0
          },
          ...i.model && {
            model: i.model
          },
          systemPrompt: {
            type: "preset",
            preset: "claude_code"
          },
          settingSources: [ "user", "project", "local" ],
          pathToClaudeCodeExecutable: h.cmd,
          executableArgs: h.prefixArgs,
          abortController: k,
          stderr: g => e(`[${i.id}] ${g.trimEnd()}`),
          workload: pie
        }
      });
      for await (let g of w) if (g.type === "result") e(`task=${i.id} result subtype=${g.subtype} duration=${g.duration_ms}ms cost=$${g.total_cost_usd.toFixed(4)}`);
    } catch (w) {
      e(`task=${i.id} threw: ${w}`);
    } finally {
      clearTimeout(P), A.delete(k), F.delete(i.id), R();
    }
  }
  while (!r.aborted) {
    while (E.size < m && b.length > 0 && !r.aborted) {
      let d = b.shift(), i = Y(d).finally(() => {
        E.delete(i), S?.(), S = null;
      });
      E.add(i);
    }
    if (r.aborted) break;
    if (b.length === 0 || E.size >= m) await new Promise(d => {
      S = d;
    });
  }
  await Promise.allSettled(Array.from(E));
};

function I(s) {
  let r = s.scheduled, e = {};
  if (Array.isArray(r) && r.length > 0 && typeof r[0] === "object") e = r[0] ?? {}; else if (r && typeof r === "object" && !Array.isArray(r)) e = r;
  let n = Array.isArray(e.tasks) ? e.tasks : [];
  return {
    ...e,
    tasks: n
  };
}

function L(s, r) {
  let e = s.scheduled;
  if (Array.isArray(e)) {
    let n = e.slice();
    n[0] = r, s.scheduled = n;
  } else s.scheduled = r;
}

async function J7e(s, r, e) {
  return so("daemon_scheduled_add", async () => {
    j().parse(s), await ojt(n => {
      let a = I(n), c = a.tasks.filter(m => !(m && typeof m === "object" && m.id === s.id));
      c.push(s), L(n, {
        ...a,
        tasks: c
      });
    }, r, e);
  });
}

async function Q7e(s, r, e) {
  return so("daemon_scheduled_remove", async () => {
    let n = !1;
    return await ojt(a => {
      if (!("scheduled" in a)) return !1;
      let c = I(a), m = c.tasks.filter(y => !(y && typeof y === "object" && y.id === s));
      if (m.length === c.tasks.length) return !1;
      if (m.length === 0) {
        let y = a.scheduled;
        if (Array.isArray(y) && y.length > 1) a.scheduled = y.slice(1); else delete a.scheduled;
      } else L(a, {
        ...c,
        tasks: m
      });
      n = !0;
    }, r, e), n;
  });
}

async function L_t(s, r) {
  let e = await D(s, r);
  if (!("scheduled" in e)) return [];
  let n = I(e), a = [];
  for (let c of n.tasks) {
    let m = j().safeParse(c);
    if (m.success) a.push(m.data);
  }
  return a;
}

export { Fze, D_t, ojt, $Br, X7e, FBr, izo, azo, J7e, Q7e, L_t };
