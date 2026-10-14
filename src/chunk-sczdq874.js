// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import { lt, q } from "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import { c } from "./chunk-hwdwjvh8.js";

import { ci } from "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import { _, t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import "./chunk-30n0xq4e.js";

import "./chunk-zvghq5er.js";

import "./chunk-yxennhe9.js";

import "./chunk-0cdqg49t.js";

import { p } from "./chunk-jkzenvsk.js";

import "./chunk-0pmh7awy.js";

import "./chunk-60c97a4m.js";

import "./chunk-7en5gt36.js";

import { OSn, AZn, _le, MSn } from "./chunk-sknv0v0m.js";

import "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import "./chunk-145qexpp.js";

import "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-t6pdm7af.js";

import "./chunk-1zg3hbfq.js";

import "./chunk-x5881pc6.js";

import "./chunk-8yperama.js";

import "./chunk-5brm0azz.js";

import "./chunk-cqgvwwgb.js";

import "./chunk-fvcjfcfm.js";

import "./chunk-r276nwd3.js";

import "./chunk-2my8wpr5.js";

import "./chunk-vps0k559.js";

import { jz, Gt } from "./chunk-xywp7esx.js";

import "./chunk-07cck4g7.js";

import "./chunk-s2t7g8m9.js";

import "./chunk-q6wab2jw.js";

import "./chunk-2msx6erf.js";

import "./chunk-jnzpsr0d.js";

import "./chunk-pvmwc6wy.js";

import "./chunk-7tfkg6bp.js";

import "./chunk-r2h53bm2.js";

import "./chunk-1z2heevg.js";

import "./chunk-wptm3jf5.js";

import "./chunk-j90se18b.js";

import "./chunk-9yajep3y.js";

import "./chunk-w0q7jqcp.js";

import "./chunk-4dwgr3et.js";

import "./chunk-zscnwzv2.js";

import "./chunk-rgd61mm3.js";

import "./chunk-nnrb0acr.js";

import "./chunk-9btqc05b.js";

import "./chunk-dd98x6x7.js";

import "./chunk-fhf0t7vm.js";

import "./chunk-cjt10y7b.js";

import "./chunk-bsddf56y.js";

import "./chunk-w4hwgefc.js";

import "./chunk-e2610wvk.js";

import "./chunk-x35dw27e.js";

import "./chunk-hazy64h6.js";

import "./chunk-h147n5a3.js";

import "./chunk-mw643xee.js";

import "./chunk-qqd24q2y.js";

import "./chunk-znhtg8e4.js";

import "./chunk-1tdw23h1.js";

import "./chunk-3kb22va7.js";

import "./chunk-7afk7vdn.js";

import { kVn, AC } from "./chunk-46phtgr7.js";

import "./chunk-ncyzf9zz.js";

import "./chunk-80mtmc8z.js";

import "./chunk-e7rgnck3.js";

import "./chunk-f1zpf9me.js";

import "./chunk-g6nh65r0.js";

import "./chunk-j41af3ah.js";

import "./chunk-n3526wzr.js";

import "./chunk-sfvypv11.js";

import "./chunk-wwq0cyp6.js";

import "./chunk-9nqgkt3n.js";

import "./chunk-hmce8a0s.js";

import "./chunk-nc0jxmkt.js";

import "./chunk-f0wpcwcb.js";

import "./chunk-y3nc3daq.js";

import "./chunk-0481pkch.js";

import { $9t } from "./chunk-23mzddh9.js";

import "./chunk-4q01dwtz.js";

import "./chunk-3tedvrs9.js";

import "./chunk-85f3d2e1.js";

import { zO } from "./chunk-rzvcmswq.js";

import "./chunk-g4dysb0v.js";

import "./chunk-v6b4yr85.js";

import "./chunk-sjjx8nvs.js";

import "./chunk-3kd8r7rn.js";

import "./chunk-8v8fjzek.js";

import "./chunk-vjmbaret.js";

import "./chunk-642shbw5.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import "./chunk-02g14ha5.js";

import "./chunk-p35rdtee.js";

import "./chunk-dgqa0xqf.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-zx69jgxc.js";

import "./chunk-shz68fkm.js";

import "./chunk-53fww9mk.js";

import "./chunk-ne9evs39.js";

import "./chunk-1xnsr4dy.js";

var z = 1e4, W = "/worker/wakes", H = 1984, I = "allow_mcp_task_worker_wake", b = {
  auth: "session-jwt",
  host: "ccr-session",
  headers: {
    "anthropic-version": "2023-06-01"
  },
  timeout: z,
  validateStatus: () => !0
}, K = p(() => u({
  wake_id: o().regex(OSn),
  fire_at: zO({
    offset: !0
  }),
  expires_at: zO({
    offset: !0
  })
})), B = p(() => u({
  error: u({
    type: o().optional(),
    reason: o().optional(),
    resource_type: o().optional()
  })
}));

async function A({task: e, delaySeconds: r, onTimer: s = !1}) {
  let a = R("schedule", s) ?? D("schedule", s);
  if (a !== void 0) return a;
  let n = {
    taskId: e.taskId,
    serverName: e.serverName,
    toolName: e.toolName,
    mcpTaskId: e.mcpTaskId,
    pollIntervalMs: e.pollIntervalMs,
    spawnedAt: e.spawnedAt,
    toolUseId: e.toolUseId,
    protocol: "sep2663",
    ttlExpiresAt: e.ttlExpiresAt,
    transportFingerprint: e.transportFingerprint
  };
  if (N(n) === void 0 || Buffer.byteLength(_(n)) > H) return i("schedule", "not_sent", "unusable_payload", s);
  let l = await M("schedule", () => Gt.post(W, {
    delay_seconds: O(r),
    payload: n
  }, b), s);
  return x("schedule", l, s);
}

async function E({workerWakeId: e, delaySeconds: r, onTimer: s = !1}) {
  let a = R("retime", s) ?? D("retime", s);
  if (a !== void 0) return a;
  if (!OSn.test(e)) return i("retime", "rejected", "malformed_id", s);
  let n = await M("retime", () => Gt.post(W, {
    wake_id: e,
    delay_seconds: O(r)
  }, b), s);
  return x("retime", n, s);
}

async function P({workerWakeId: e, onTimer: r = !1}) {
  if (!OSn.test(e)) return i("cancel", "rejected", "malformed_id", r);
  let s = await M("cancel", () => Gt.delete(`${W}/${e}`, void 0, b), r);
  if (s.kind === "failed") return s;
  if (!L(s.status)) return F("cancel", s.status, r);
  if (typeof s.data !== "object" || s.data === null) return i("cancel", "rejected", "malformed_answer", r);
  if (!r) g("mcp_task_worker_wake", {
    call: c("cancel")
  });
  return {
    kind: "cancelled"
  };
}

function N(e) {
  let r = AZn(e);
  return r.success && r.data.protocol === "sep2663" ? r.data : void 0;
}

function x(e, r, s) {
  if (r.kind === "failed") return r;
  if (L(r.status)) {
    let n = K().safeParse(r.data);
    if (!n.success) return i(e, "rejected", "malformed_answer", s);
    if (!s) g("mcp_task_worker_wake", {
      call: c(e)
    });
    return {
      kind: "scheduled",
      workerWakeId: n.data.wake_id,
      fireAtMs: Date.parse(n.data.fire_at),
      expiresAtMs: Date.parse(n.data.expires_at)
    };
  }
  let a = V(e, r.status, r.data);
  if (a === void 0) return F(e, r.status, s);
  if (a === "wake_off") return i(e, "wake_off", void 0, s);
  return v(s, a, e), t(`mcpTaskWorkerWake ${e}: refused (${a})`), {
    kind: "refused",
    reason: a
  };
}

function V(e, r, s) {
  let a = B().safeParse(s), n = a.success ? a.data.error : void 0;
  switch (r === 400 ? n?.reason : void 0) {
   case "wake_unsupported_host":
    return "unsupported_host";

   case "wake_unsupported_session":
    return "unsupported_session";

   case "wake_delay_out_of_range":
    return "delay_out_of_range";

   case "wake_expired":
    return "expired";

   case "wake_cancelled":
    return "cancelled";

   case "wake_off":
    return "wake_off";

   default:
    break;
  }
  return e === "retime" && r === 404 && n?.type === "not_found_error" && n.resource_type === "worker_wake" ? "not_found" : void 0;
}

async function M(e, r, s) {
  let a = R(e, s);
  if (a !== void 0) return a;
  let n;
  try {
    n = await r();
  } catch (l) {
    let {kind: y} = ci(l);
    switch (y) {
     case "auth":
      return i(e, "unauthorized", void 0, s);

     case "timeout":
      return i(e, "timeout", void 0, s);

     case "network":
      return i(e, "network", void 0, s);

     case "http":
      return i(e, "network", "other", s);

     case "other":
      return i(e, "rejected", "threw", s);
    }
  }
  if (!n.ok) return i(e, "not_sent", n.reason, s);
  return {
    kind: "answered",
    status: n.status,
    data: n.data
  };
}

function L(e) {
  return e >= 200 && e < 300;
}

function F(e, r, s) {
  if (r === 404 || r === 405 || r === 501) return i(e, "not_deployed", `http_${r}`, s);
  if (r === 401 || r === 403) return i(e, "unauthorized", `http_${r}`, s);
  if (r === 429) return i(e, "rate_limited", void 0, s);
  if (r === 409) return i(e, "conflict", void 0, s);
  return i(e, r >= 500 ? "server_error" : "rejected", `http_${r}`, s);
}

function i(e, r, s, a) {
  let n = s === void 0 ? r : `${r}_${s}`, l = U(r);
  if (l || r === "not_sent" || r === "not_deployed") {
    if (!(l && a)) v(a, n, e);
  } else if (a) m("mcp_task_worker_wake_timer", n, {
    call: c(e)
  }); else m("mcp_task_worker_wake", n, {
    call: c(e)
  });
  return t(`mcpTaskWorkerWake ${e}: failed (${n})`), {
    kind: "failed",
    reason: r,
    retryable: l
  };
}

function U(e) {
  switch (e) {
   case "rate_limited":
   case "conflict":
   case "wake_off":
   case "policy_pending":
   case "server_error":
   case "timeout":
   case "network":
    return !0;

   case "not_sent":
   case "not_deployed":
   case "unauthorized":
   case "rejected":
    return !1;
  }
}

function O(e) {
  return Math.max(1, Math.ceil(e));
}

function R(e, r) {
  return jz() ? void 0 : i(e, "not_sent", "no_session", r);
}

function D(e, r) {
  let s;
  try {
    if (kVn(I)) return;
    s = AC(I);
  } catch (a) {
    return d(a), i(e, "policy_pending", "threw", r);
  }
  if (s === "org_denied" || s === "latched" || s === "unregistered") return v(r, `policy_denied_${s}`, e), 
  t(`mcpTaskWorkerWake ${e}: withheld by the organization's policy (${s})`), {
    kind: "refused",
    reason: "policy_denied"
  };
  return i(e, "policy_pending", s ?? "no_deny_kind", r);
}

function v(e, r, s) {
  if (e) f("mcp_task_worker_wake_timer", r, {
    call: c(s)
  }); else f("mcp_task_worker_wake", r, {
    call: c(s)
  });
}

var h = 9e5, S = h / 3, Y = 6e4, G = 3, Q = h / S;

function w(e) {
  return e.wake?.moving === !0 && e.state === "driving";
}

class j {
  #e=new Map;
  #o=new Set;
  #a=!1;
  #t;
  #r;
  hasConcluded(e) {
    return this.#o.has(e);
  }
  taskBackgrounded(e) {
    try {
      this.#c(e);
    } catch (r) {
      d(r);
    }
  }
  #c({taskRegistry: e, record: r, storageV5: s}) {
    if (this.#a || this.#e.has(r.taskId) || !jz()) return;
    if (Ct()) {
      this.#a = !0;
      return;
    }
    let a = e.get(r.taskId);
    if (a?.type !== "mcp_task" || a.notified || a.status !== "running") return;
    let n = {
      record: r,
      taskRegistry: e,
      storageV5: s,
      wake: void 0,
      busy: !1,
      scheduleRetriesLeft: 0,
      retimeSoon: !1,
      state: "driving"
    };
    this.#e.set(r.taskId, n), e.update(r.taskId, l => ({
      ...l,
      onWorkerWakeOutcome: y => this.taskLeftDrive(r.taskId, y)
    })), this.#i(n, !1);
  }
  taskLeftDrive(e, r) {
    try {
      this.#u(e, r);
    } catch (s) {
      d(s);
    }
  }
  #u(e, r) {
    if (r.kind !== "parked") this.#o.add(e);
    let s = this.#e.get(e);
    if (s === void 0 || s.state !== "driving" && s.state !== "left_to_fire") return;
    switch (r.kind) {
     case "told":
     case "stopped":
      s.state = "cancelling";
      break;

     case "parked":
      s.state = r.code === "ttl_expired" ? "cancelling" : "left_to_fire";
      break;
    }
    if (s.scheduleRetriesLeft = 0, !w(s)) s.retimeSoon = !1;
    if (!s.busy) this.#s(s);
  }
  async tick() {
    let e = [];
    for (let r of this.#e.values()) {
      if (r.busy) continue;
      if (r.state === "cancelling") e.push(this.#s(r, !0)); else if (!$9t()) continue; else if (r.wake !== void 0 && w(r)) e.push(this.#d(r, r.wake, !0)); else if (r.wake === void 0 && r.scheduleRetriesLeft > 0) r.scheduleRetriesLeft -= 1, 
      e.push(this.#i(r, !0));
    }
    await Promise.all(e);
  }
  async #i(e, r) {
    await this.#n(e, async () => {
      let s = !r, a = await A({
        task: e.record,
        delaySeconds: h / 1e3,
        onTimer: r
      });
      switch (a.kind) {
       case "scheduled":
        e.wake = {
          id: a.workerWakeId,
          fireAtMs: a.fireAtMs,
          expiresAtMs: a.expiresAtMs,
          moving: !0,
          notRetryableRounds: 0
        }, e.scheduleRetriesLeft = 0, this.#l(e, a.workerWakeId);
        break;

       case "refused":
        this.#a ||= a.reason === "unsupported_host" || a.reason === "unsupported_session" || a.reason === "delay_out_of_range", 
        e.scheduleRetriesLeft = 0;
        break;

       case "failed":
        if (e.state !== "driving") e.scheduleRetriesLeft = 0; else if (a.reason === "policy_pending") e.scheduleRetriesLeft = 1; else if (a.reason !== "rate_limited") e.scheduleRetriesLeft = 0; else if (s) e.scheduleRetriesLeft = G;
        break;
      }
    }), await this.#s(e);
  }
  async #d(e, r, s) {
    await this.#n(e, async () => {
      let a = {
        kind: "refused",
        reason: "expired"
      }, n = Date.now() + h > r.expiresAtMs ? a : await E({
        workerWakeId: r.id,
        delaySeconds: h / 1e3,
        onTimer: !0
      });
      if (e.retimeSoon = !1, e.wake !== r || !r.moving) return;
      switch (n.kind) {
       case "scheduled":
        r.fireAtMs = n.fireAtMs, r.expiresAtMs = n.expiresAtMs, r.notRetryableRounds = 0;
        break;

       case "refused":
        if (n.reason === "expired") {
          if (r.moving = !1, e.state === "driving") e.state = "cancelling";
        } else if (n.reason === "policy_denied") r.moving = !1, e.state = "cancelling"; else if (n.reason === "cancelled" || n.reason === "not_found") e.wake = void 0; else if (r.moving = !1, 
        e.state === "driving") e.state = "left_to_fire";
        break;

       case "failed":
        if (n.retryable) {
          e.retimeSoon = s;
          break;
        }
        if (s && n.reason !== "not_sent") r.notRetryableRounds += 1;
        if (n.reason === "not_sent" || r.notRetryableRounds >= Q) {
          if (r.moving = !1, e.state === "driving") e.state = "left_to_fire";
        }
        break;
      }
    }), await this.#s(e);
  }
  async #s(e, r = !1) {
    if (e.busy) return;
    let s = e.wake;
    if (e.state === "cancelling" && s !== void 0) await this.#n(e, async () => {
      let l = await P({
        workerWakeId: s.id,
        onTimer: r
      });
      if (l.kind === "cancelled" || l.reason === "not_deployed" || Date.now() >= s.fireAtMs + S) e.wake = void 0;
    });
    let a = e.record.taskId;
    if (e.wake === void 0 && (e.scheduleRetriesLeft === 0 || e.state !== "driving") && this.#e.get(a) === e) this.#e.delete(a);
    this.#f();
  }
  async #n(e, r) {
    e.busy = !0;
    try {
      await r();
    } catch (s) {
      d(s);
    } finally {
      e.busy = !1;
    }
  }
  #l(e, r) {
    let {record: s, taskRegistry: a, storageV5: n} = e, l = a.get(s.taskId);
    if (l?.type !== "mcp_task" || l.notified || l.status !== "running") return;
    let y = () => {
      let k = a.get(s.taskId);
      return k?.type === "mcp_task" && k.sidecarSessionId === q() && k.sidecarProjectDir === _le();
    }, T = l.sidecarWrite, C = y() ? (async () => {
      if (await T, !y()) return;
      await MSn(s.taskId, {
        ...s,
        protocol: "sep2663",
        workerWakeId: r
      }, n);
    })().catch(k => {
      t(`MCP task ${s.taskId}: could not save its worker wake id to the task's record (${String(k)}); a restarted worker will not be able to cancel that wake`), 
      f("mcp_task_worker_wake", "wake_id_not_saved");
    }) : T;
    a.update(s.taskId, k => ({
      ...k,
      workerWakeId: r,
      sidecarWrite: C
    }));
  }
  #f() {
    let e = !1, r = !1;
    for (let s of this.#e.values()) e ||= s.state === "cancelling" || w(s) || s.scheduleRetriesLeft > 0, 
    r ||= s.retimeSoon;
    if (e && this.#t === void 0) this.#t = setInterval(() => void this.tick(), S), this.#t.unref(); else if (!e && this.#t !== void 0) clearInterval(this.#t), 
    this.#t = void 0;
    if (r && this.#r === void 0) this.#r = setTimeout(() => {
      this.#r = void 0, this.#k();
    }, Y), this.#r.unref();
  }
  async #k() {
    let e = [];
    for (let r of this.#e.values()) if (r.retimeSoon && !r.busy && r.wake !== void 0 && w(r) && $9t()) e.push(this.#d(r, r.wake, !1));
    await Promise.all(e);
  }
}

var We = new lt(() => new j);

export { We as mcpTaskWorkerWakeKeepers };
