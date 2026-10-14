// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { p } from "./chunk-jkzenvsk.js";

import { J } from "./chunk-nvtwm272.js";

import { k2 } from "./chunk-9bzw65k3.js";

import { vit } from "./chunk-23mzddh9.js";

import { pbe, JW } from "./chunk-4q01dwtz.js";

import { o, v, M, oe, _t, Kr, ue, U, A } from "./chunk-cvcg6n1z.js";

var yZn = "Mcp-Name", b = 250, V = 3e4, F = 2e3, S = 5, P = 16, f = p(() => _t({
  taskId: o().min(1).max(pbe).regex(JW),
  status: U([ "working", "input_required", "completed", "failed", "cancelled" ]),
  statusMessage: o().nullish().transform(e => e ?? void 0).optional(),
  createdAt: o().nullish().transform(e => e ?? void 0).optional(),
  lastUpdatedAt: o().nullish().transform(e => e ?? void 0).optional(),
  ttlMs: v().nullish().transform(e => e ?? void 0).optional(),
  pollIntervalMs: v().nullish().transform(e => e ?? void 0).optional()
})), U4s = p(() => f().extend({
  resultType: A("task")
})), S5o = "com.anthropic/agent-task", X = 2e4, H = 64, Q = p(() => _t({
  sessionId: o().max(pbe).regex(JW).nullish().transform(e => e ?? void 0).optional(),
  modelImmediateResponse: o().max(X).nullish().transform(e => e ?? void 0).optional(),
  taskId: o().max(pbe).regex(JW).nullish().transform(e => e ?? void 0).optional(),
  merged: M().nullish().transform(e => e ?? void 0).optional(),
  kind: o().max(H).regex(JW).nullish().transform(e => e ?? void 0).optional()
}));

function B4s(e) {
  let s = N1s(e);
  if (s === void 0) return;
  let r = {
    ...s.sessionId !== void 0 && {
      sessionId: s.sessionId
    },
    ...s.taskId !== void 0 && {
      taskId: s.taskId
    },
    ...s.kind !== void 0 && {
      kind: s.kind
    },
    ...s.merged !== void 0 && {
      merged: s.merged
    }
  };
  return Object.keys(r).length > 0 ? {
    [S5o]: r
  } : void 0;
}

function N1s(e) {
  if (typeof e !== "object" || e === null) return;
  let s = e[S5o];
  if (s === void 0) return;
  let r = Q().safeParse(s);
  return r.success ? r.data : void 0;
}

var W = p(() => _t({
  method: o().min(1).max(pbe).regex(JW),
  params: ue(o(), oe()).nullish().transform(e => e ?? void 0).optional()
})), B = p(() => Kr("status", [ f().extend({
  status: A("working")
}), f().extend({
  status: A("input_required"),
  inputRequests: ue(o().min(1).max(512), W()).nullish().transform(e => e ?? {})
}), f().extend({
  status: A("completed"),
  result: ue(o(), oe()).nullish().transform(e => e ?? {})
}), f().extend({
  status: A("failed"),
  error: _t({
    code: v().nullish().transform(e => e ?? void 0).optional(),
    message: o().nullish().transform(e => e ?? void 0).optional(),
    data: oe().optional()
  }).nullish().transform(e => e ?? {})
}), f().extend({
  status: A("cancelled")
}) ]));

class w5o extends Error {
  constructor(e) {
    super(e);
    this.name = "TaskInputUnservableError";
  }
}

function GSt(e) {
  return Math.min(V, Math.max(b, e ?? F));
}

function x(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (Object.prototype.toString.call(e) === "[object DOMException]") return !1;
  if (e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError" || e.message.startsWith("SSE error: ") || e.message.startsWith("Streamable HTTP error: "))) return !1;
  return "code" in e && typeof e.code === "number" && "message" in e && typeof e.message === "string";
}

function q(e) {
  if (j(e)) return !1;
  return e === -32603 || e === -32700 || e >= -32099 && e <= -32e3;
}

function j(e) {
  return e === -32021 || e === -32003;
}

function vSn(e) {
  return e === -32601 || j(e);
}

var vGt = Symbol("TASK_DRIVE_QUIET_STOP");

async function CVr({task: e, request: s, signal: r, onStatus: K, resolveInputRequest: N, log: d, errorText: m = k2, answeredKeys: D, outstandingInputKeys: G}) {
  let {taskId: n} = e, y = {
    [yZn]: n
  }, E = D ?? new Set, z = new Set, w = new Map, k = G ?? {
    served: new Set,
    capLogged: !1
  }, I = GSt(e.pollIntervalMs), g, T = 0, l = 0, u = () => {
    if (r.reason === vGt) return;
    s("tasks/cancel", {
      taskId: n
    }, {
      headers: y,
      signal: AbortSignal.timeout(vit)
    }).then(() => d?.(`task ${n}: cancel sent`), i => d?.(`task ${n}: cancel failed: ${m(i)}`));
  }, C = !0;
  for (;;) {
    if (C) C = !1; else {
      let a = g ?? I;
      g = void 0, await J(a, r);
    }
    if (r.aborted) return u(), {
      status: "error",
      error: {
        kind: "cancelled",
        message: "Task cancelled"
      }
    };
    let i;
    try {
      let a = await s("tasks/get", {
        taskId: n
      }, {
        headers: y,
        signal: r
      }), c = B().safeParse(a);
      if (!c.success) return u(), {
        status: "error",
        error: {
          kind: "malformed",
          message: `Malformed tasks/get response for task ${n}: ${c.error.message}`
        }
      };
      i = c.data, T = 0;
    } catch (a) {
      if (r.aborted) return u(), {
        status: "error",
        error: {
          kind: "cancelled",
          message: "Task cancelled"
        }
      };
      if (x(a) && !q(a.code)) return {
        status: "error",
        error: {
          kind: "poll_failed",
          message: `tasks/get failed for task ${n}: ${a.message}`,
          code: a.code,
          data: a.data
        }
      };
      if (T += 1, d?.(`task ${n}: poll failure ${T}/${S}: ${m(a)}`), T >= S) return {
        status: "error",
        error: {
          kind: "poll_failed",
          message: `Lost contact with task ${n} after ${T} failed polls: ${m(a)}`
        }
      };
      continue;
    }
    if (K?.(i), I = GSt(i.pollIntervalMs ?? I), i.status !== "input_required") l = 0;
    switch (i.status) {
     case "working":
      continue;

     case "completed":
      return {
        status: "completed",
        result: i.result
      };

     case "failed":
      return {
        status: "error",
        error: {
          kind: "failed",
          message: i.error.message ?? i.statusMessage ?? "Task failed",
          code: i.error.code,
          data: i.error.data
        }
      };

     case "cancelled":
      return {
        status: "error",
        error: {
          kind: "cancelled",
          message: i.statusMessage ?? "Task was cancelled by the server"
        }
      };

     case "input_required":
      {
        let a = Object.entries(i.inputRequests).filter(([t]) => !E.has(t));
        if (a.length === 0) continue;
        let c = a.filter(([t]) => !z.has(t));
        if (c.length === 0) return u(), {
          status: "error",
          error: {
            kind: "unsupported_input",
            message: `Task ${n}: the server rejected the submitted answer to ${a.map(([t]) => t).join(", ")} and still requires input`
          }
        };
        let O = c.filter(([t]) => {
          if (k.served.has(t)) return !0;
          if (k.served.size >= P) {
            if (!k.capLogged) d?.(`task ${n}: reached ${P} distinct input-request keys; ignoring new keys`), 
            k.capLogged = !0;
            return !1;
          }
          return k.served.add(t), !0;
        });
        if (O.length === 0) continue;
        let h = {};
        for (let [t, R] of O) {
          if (r.aborted) break;
          let _;
          if (w.has(t)) _ = w.get(t); else {
            try {
              _ = await N(t, R);
            } catch (L) {
              if (L instanceof w5o) return u(), {
                status: "error",
                error: {
                  kind: "input_unservable",
                  message: "the task asked the user a question that this session cannot show yet, so Claude Code asked the server to cancel it"
                }
              };
              throw L;
            }
            if (_ === void 0) return u(), {
              status: "error",
              error: {
                kind: "unsupported_input",
                message: `Task ${n} asked for ${R.method}, which this client cannot serve`
              }
            };
            w.set(t, _);
          }
          h[t] = _;
        }
        if (r.aborted) return u(), {
          status: "error",
          error: {
            kind: "cancelled",
            message: "Task cancelled"
          }
        };
        try {
          await s("tasks/update", {
            taskId: n,
            inputResponses: h
          }, {
            headers: y,
            signal: r
          }), l = 0;
          for (let t of Object.keys(h)) E.add(t);
          d?.(`task ${n}: answered ${Object.keys(h).join(", ")}`);
        } catch (t) {
          if (r.aborted) return u(), {
            status: "error",
            error: {
              kind: "cancelled",
              message: "Task cancelled"
            }
          };
          if (x(t) && vSn(t.code)) return {
            status: "error",
            error: {
              kind: "poll_failed",
              message: `tasks/update failed for task ${n}: ${t.message}`,
              code: t.code,
              data: t.data
            }
          };
          if (x(t) && !q(t.code)) {
            for (let R of Object.keys(h)) z.add(R);
            d?.(`task ${n}: tasks/update JSON-RPC error ${t.code} (${t instanceof Error ? t.message : String(t)}); re-polling for real state`), 
            g = b;
            continue;
          }
          if (l += 1, d?.(`task ${n}: tasks/update failure ${l}/${S}: ${m(t)}`), l >= S) return {
            status: "error",
            error: {
              kind: "poll_failed",
              message: `Lost contact with task ${n} after ${l} failed tasks/update attempts: ${m(t)}`,
              phase: "update"
            }
          };
          g = b;
          continue;
        }
        g = b;
        continue;
      }
    }
  }
}

export { yZn, U4s, S5o, B4s, N1s, w5o, GSt, vSn, vGt, CVr };
