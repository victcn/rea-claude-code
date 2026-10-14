// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At } from "./chunk-vps0k559.js";

import { K, B } from "./chunk-3pqddg8f.js";

import { x, l, W } from "./chunk-b0z4bv3v.js";

import { _, Y } from "./chunk-kawq2919.js";

import { I, ne } from "./chunk-5wbhf1bk.js";

import { zN } from "./chunk-3zb1ef23.js";

import { p } from "./chunk-jkzenvsk.js";

import { Wu, $dt, Fdt, Udt } from "./chunk-n8c3367k.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { h$, IC, CG, Tf, XS } from "./chunk-w4hwgefc.js";

import { Dl, gI } from "./chunk-4dwgr3et.js";

import { Xc } from "./chunk-pf1mhyjr.js";

import { fl } from "./chunk-548qpzj1.js";

import { mpe } from "./chunk-7s2yvvfn.js";

import { jO } from "./chunk-3tedvrs9.js";

import { o, v, u, $e } from "./chunk-cvcg6n1z.js";

import { wMr } from "./chunk-zscnwzv2.js";

import { Qo } from "./chunk-eha3vdmz.js";

var oe = [ "allow", "environment", "soft_deny" ], le = {
  allow: "CCR_AUTO_MODE_ALLOW",
  environment: "CCR_AUTO_MODE_ENVIRONMENT",
  soft_deny: "CCR_AUTO_MODE_SOFT_DENY"
};

function en(e) {
  return e.trim().length > 0 && !$dt(e) && !Fdt(e) && Udt(e) === null;
}

function nn(e) {
  if (!Array.isArray(e) || !e.every(c => c === null || typeof c === "string")) return null;
  let n = new Set(e);
  n.delete(Wu);
  let s = [ ...n ].filter(c => c !== null && en(c));
  return {
    entries: s,
    refused: n.size - s.length
  };
}

function Le(e) {
  let n = {}, s = {};
  for (let r of oe) {
    let t = e?.[r];
    if (t === void 0) continue;
    let i = nn(t);
    if (i === null) {
      s[r] = "unreadable";
      continue;
    }
    if (i.refused > 0) s[r] = i.refused;
    if (i.entries.length > 0) n[r] = i.entries;
  }
  let c = (s.soft_deny !== void 0 || s.environment !== void 0) && (n.allow !== void 0 || n.environment !== void 0);
  if (c) delete n.allow, delete n.environment;
  return {
    rules: n,
    refused: s,
    grantsWithheld: c
  };
}

function Ce(e) {
  let n = {};
  for (let s of oe) {
    let c = e[s];
    if (c !== void 0) n[s] = [ Wu, ...c ];
  }
  return Object.keys(n).length > 0 ? n : void 0;
}

var tn = {
  all: [],
  "no-allow": [ "allow" ],
  none: oe
}, xe = 2097152, Rcn = "CCR_AUTO_MODE_APPLY";

function m0r(e) {
  let n = e.environment_variables ?? {};
  return Object.hasOwn(n, Rcn) && n[Rcn] === "1";
}

function M$o(e) {
  if (!m0r(e)) return {
    allow: {
      state: "absent"
    },
    environment: {
      state: "absent"
    },
    soft_deny: {
      state: "absent"
    }
  };
  let n = e.environment_variables ?? {};
  return {
    allow: ye(n, le.allow),
    environment: ye(n, le.environment),
    soft_deny: ye(n, le.soft_deny)
  };
}

var JJe = "no-allow";

function H$o(e, n) {
  let s = {
    ...e
  }, c = [];
  for (let r of tn[n]) {
    let t = e[r], i = t.state === "decoded" && Array.isArray(t.value) && t.value.length === 0;
    if (t.state !== "absent" && !i) c.push(r);
    s[r] = {
      state: "absent"
    };
  }
  return {
    carried: s,
    withheld: c
  };
}

var rn = "nothing on this runner needs changing; if an admin of your organization wrote the entry, a line break, some emoji or a blank rule can cause this";

function D$o(e) {
  let n = {};
  for (let d of oe) {
    let a = e[d];
    if (a.state !== "absent") n[d] = a.state === "decoded" ? a.value : null;
  }
  let {rules: s, refused: c, grantsWithheld: r} = Le(n), t = [], i = {
    refused_entries: 0,
    unreadable_lists: 0
  };
  for (let d of oe) {
    let a = e[d], h = c[d];
    if (a.state === "absent" || h === void 0) continue;
    if (h === "unreadable") i.unreadable_lists++; else i.refused_entries += h;
    t.push(h === "unreadable" ? `ignoring the server's autoMode.${d} list for this session: its ${a.carrier} value ${a.state === "decoded" ? "is not an array of strings" : `is not valid JSON text, or is longer than ${xe} characters`} (a server-side fault: nothing on this runner needs changing)` : `ignoring ${h} of the entries in the server's autoMode.${d} list (${a.carrier}) for this session: null, blank, or containing a control character, an invisible character or markup reserved for the auto mode classifier's prompt; ${r && d !== "soft_deny" ? "any other entries in the list are not applied either (see below)" : "any other entries in the list still apply"} (${rn})`);
  }
  if (r) {
    let d = [ "allow", "environment" ].filter(a => e[a].state !== "absent").map(a => `autoMode.${a}`).join(" or ");
    t.push(`not applying any ${d} entries from the server for this session: part or all of its autoMode.environment or autoMode.soft_deny list was ignored (see above), and without it the ${d} entries could allow more than the server meant. Auto mode still works but may block more actions than usual (nothing on this runner needs changing)`);
  }
  return {
    autoMode: Ce(s),
    statusLines: t,
    grantsWithheld: r,
    refusedCounts: i
  };
}

function ye(e, n) {
  let s = Object.hasOwn(e, n) ? e[n] : void 0;
  if (s === void 0 || s === "") return {
    state: "absent"
  };
  if (typeof s !== "string" || s.length > xe) return {
    state: "undecodable",
    carrier: n
  };
  try {
    return {
      state: "decoded",
      carrier: n,
      value: Y(s)
    };
  } catch {
    return {
      state: "undecodable",
      carrier: n
    };
  }
}

class we extends Error {
  constructor() {
    super("IssueSessionToken: response holds a tools_host that this runner cannot read");
    this.name = "UnreadableToolsHostError";
  }
}

var on = p(() => u({
  tool_server_hosting: $e([ v(), o().regex(/^\d+$/).transform(Number) ]).pipe(v().int().min(1)),
  api_base_url: o().min(1),
  cwd: o().nullish().transform(e => e || void 0)
})), dWe = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.299",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-13T21:37:33Z",
  GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
  HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "default"
}.VERSION.replace(/^v/, "").split(/[-+]/)[0], sn = {
  all: "SERVER_AUTO_MODE_LISTS_ALL",
  "no-allow": "SERVER_AUTO_MODE_LISTS_NO_ALLOW",
  none: "SERVER_AUTO_MODE_LISTS_NONE"
}, an = /^[a-zA-Z0-9_-]+$/, zYn = 1e4, xcn = 15e3, Ie = 256, un = 65536;

function Me(e) {
  return typeof e === "string" && e.length <= Ie && an.test(e);
}

function _6(e, n) {
  if (!Me(e)) throw Error(`Invalid ${n}: contains unsafe characters or exceeds ${Ie} characters`);
  return e;
}

function Se(e) {
  return {
    "User-Agent": Qo(),
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": "2023-06-01",
    "x-self-hosted-runner-version": dWe
  };
}

function se(e) {
  return {
    "User-Agent": Qo(),
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": "2023-06-01",
    "x-self-hosted-runner-version": dWe
  };
}

function ie(e) {
  return {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": "2023-06-01"
  };
}

function Ne(e) {
  return pe(e, "type");
}

function pe(e, n) {
  if (e !== null && typeof e === "object" && "error" in e && e.error !== null && typeof e.error === "object") {
    let s = Reflect.get(e.error, n);
    return typeof s === "string" ? s : void 0;
  }
  return;
}

function dn(e) {
  let n = pe(e, "reason");
  return mpe(n) ? n : void 0;
}

function cn(e) {
  return pe(e, "resource");
}

var ln = "self_hosted_runners_disabled_by_org";

function F(e, n, s) {
  if (e >= 200 && e < 300) return;
  let c = zN(n), r = Ne(n), t = {
    errorType: mpe(r) ? r : void 0,
    errorReason: dn(n),
    serverMessage: c
  };
  switch (e) {
   case 401:
    throw Object.assign(Error(`${s}: Authentication failed (401)${c ? `: ${c}` : ""}. Check your credentials.`), {
      isAuthFailure: !0,
      httpStatus: e,
      ...t
    });

   case 403:
    {
      let i = cn(n) === ln;
      throw Object.assign(Error(`${s}: Access denied (403)${c ? `: ${c}` : ""}. ${i ? "The organization is not enabled for self-hosted environments." : "Token may be revoked."}`), {
        isAuthFailure: !0,
        ...i && {
          isSelfHostedDisabledByOrg: !0
        },
        httpStatus: e
      });
    }

   case 404:
    throw Object.assign(Error(c ?? `${s}: Not found (404). The resource may not exist.`), {
      isNotFound: !0,
      httpStatus: e,
      errorType: Ne(n),
      resourceType: pe(n, "resource_type")
    });

   case 409:
    if (t.errorType === "session_not_active") throw Object.assign(Error("Session not active (409): the session was archived or deleted."), {
      isEpochMismatch: !0,
      isSessionNotActive: !0,
      httpStatus: e,
      ...t
    });
    throw Object.assign(Error(`${s}: Epoch conflict (409)${c ? `: ${c}` : ""}. Another runner has taken over this session.`), {
      isEpochMismatch: !0,
      httpStatus: e,
      ...t
    });

   case 429:
    throw Object.assign(Error(`${s}: Rate limited (429). Polling too frequently.`), {
      httpStatus: e
    });

   default:
    throw Object.assign(Error(`${s}: Failed with status ${e}${c ? `: ${c}` : ""}`), {
      httpStatus: e,
      ...t
    });
  }
}

function Iae(e) {
  if (e !== null && typeof e === "object") {
    let n = e;
    if (typeof n.httpStatus === "number") return n.httpStatus;
    if (typeof n.response?.status === "number") return n.response.status;
  }
  return;
}

function L$o(e) {
  let n = e !== null && typeof e === "object" ? e : {};
  return {
    errorType: "errorType" in n && typeof n.errorType === "string" ? n.errorType : void 0,
    errorReason: "errorReason" in n && typeof n.errorReason === "string" ? n.errorReason : void 0,
    serverMessage: "serverMessage" in n && typeof n.serverMessage === "string" ? n.serverMessage : void 0
  };
}

function MEe(e) {
  if (e !== null && typeof e === "object") {
    let s = e;
    if (s.name === "AbortError" || s.code === "ERR_CANCELED") return !1;
  }
  if (e instanceof we) return !1;
  let n = Iae(e);
  return n === void 0 || n === 429 || n >= 500;
}

var GYn = [ "transport", "timeout", "5xx", "429", "4xx" ];

function Pht(e) {
  if (e !== null && typeof e === "object") {
    let s = e.code;
    if (s === "ECONNABORTED" || s === "ETIMEDOUT") return "timeout";
  }
  let n = Iae(e);
  if (n === void 0) return "transport";
  if (n >= 500) return "5xx";
  if (n === 429) return "429";
  return "4xx";
}

function Pcn() {
  return {
    transport: 0,
    timeout: 0,
    "5xx": 0,
    429: 0,
    "4xx": 0
  };
}

function Icn(e) {
  function n(r) {
    e.onDebug?.(r);
  }
  let s = 0, c = 30;
  return {
    async registerRunner(r = {}) {
      let {clientLabel: t, lockToAccountId: i, useAnthropicGitProxy: d, serverAutoModeLists: a} = r;
      n("[runner:api] POST /v1/code/runners/self-hosted/runners/register");
      let h = {
        runner_version: dWe,
        use_anthropic_git_proxy: d ?? !1,
        server_auto_mode_lists: sn[a ?? JJe]
      };
      if (t) h.client_label = t;
      if (i) h.lock_to_account_id = i;
      let E = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/runners/register`, h, {
        headers: Se(e.poolSecret),
        timeout: 15e3,
        validateStatus: y => y < 500
      });
      return F(E.status, E.data, "RegisterRunner"), _6(E.data.runner_id, "runner_id"), 
      n(`[runner:api] RegisterRunner -> ${E.status} runner_id=${E.data.runner_id}`), E.data;
    },
    async pollSpawnHints(r, t) {
      let i = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/spawn-hints/poll`, r, {
        headers: Se(e.poolSecret),
        timeout: 3e4,
        signal: t,
        validateStatus: y => y < 500
      });
      F(i.status, i.data, "PollSpawnHints");
      let d = typeof i.headers?.date === "string" ? i.headers.date : null, a = y => ({
        ...y,
        session_uuid: y.session_uuid ?? "",
        attempt: y.attempt ?? 0,
        work_order_jwt: y.work_order_jwt ?? "",
        sources: y.sources ?? []
      }), h = i.data.slots, E = {
        hints: (i.data.hints ?? []).map(a),
        warm_hints: (i.data.warm_hints ?? []).map(a),
        pending_count: i.data.pending_count ?? 0,
        backing_off_count: i.data.backing_off_count ?? 0,
        circuit_broken_count: i.data.circuit_broken_count ?? 0,
        pool_pending_session_count: i.data.pool_pending_session_count ?? 0,
        pool_active_session_count: i.data.pool_active_session_count ?? 0,
        ...typeof h === "number" && Number.isInteger(h) && h >= 1 && {
          slots: h
        },
        server_date: d
      };
      return n(`[runner:api] PollSpawnHints -> ${i.status} hints=${E.hints.length} warm=${E.warm_hints.length} pending=${E.pending_count} backing_off=${E.backing_off_count} circuit_broken=${E.circuit_broken_count} slots=${E.slots ?? "-"}`), 
      E;
    },
    async nackSpawnHint(r, t) {
      n(`[runner:api] POST /v1/code/runners/self-hosted/spawn-hints/nack session=${r.session_uuid} attempt=${r.attempt} retryable=${r.retryable}${r.failure_kind ? ` cause=${r.failure_kind}` : ""}`);
      let i = r.error.length > 512 ? r.error.slice(0, 512) : r.error, d = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/spawn-hints/nack`, {
        ...r,
        error: i
      }, {
        headers: Se(e.poolSecret),
        timeout: xcn,
        signal: t,
        validateStatus: a => a < 500
      });
      F(d.status, d.data, "NackSpawnHint"), n(`[runner:api] NackSpawnHint -> ${d.status}`);
    },
    async pollWork(r, t, i, d, a, h) {
      _6(t, "runnerId");
      let E = s;
      s = 0;
      let y = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/runners/${t}/poll`, {
        available_capacity: i,
        ...a !== void 0 && {
          wake_source: a
        },
        ...h !== void 0 && {
          warmup_complete: h
        }
      }, {
        headers: se(r),
        timeout: zYn,
        signal: d,
        validateStatus: L => L < 500
      });
      F(y.status, y.data, "PollWork");
      let T = y.data;
      if (typeof T !== "object" || T === null || Array.isArray(T)) throw Error("PollWork: response body is not a JSON object (an intercepting proxy may have answered) \u2014 rejecting the malformed poll response");
      let P = y.data.assignment_ids;
      if (P !== void 0 && P !== null && !Array.isArray(P)) throw Error("PollWork: response assignment_ids is not an array \u2014 rejecting the malformed poll response");
      if (Array.isArray(P) && !P.every(Me)) throw Error("PollWork: response assignment_ids contains a malformed session id \u2014 rejecting the malformed poll response");
      let k = y.data.assignment_ids ?? [];
      if (k.length === 0) {
        if (s = E + 1, s === 1 || s % c === 0) n(`[runner:api] PollWork -> ${y.status} (no work, ${s} consecutive empty polls)`);
      } else n(`[runner:api] PollWork -> ${y.status} assignments=${k.length}`);
      let b = y.data.lease_expires_at, w = y.data.suggested_poll_interval;
      return {
        assignment_ids: k,
        lease_expires_at: typeof b === "string" ? b : void 0,
        session_assignments: Array.isArray(y.data.session_assignments) ? y.data.session_assignments : [],
        suggested_poll_interval: typeof w === "string" ? w : void 0
      };
    },
    async issueSessionToken(r, t, i) {
      _6(t, "sessionId");
      let d = `/v1/code/runners/self-hosted/sessions/${encodeURIComponent(t)}/token`;
      n(`[runner:api] POST ${d}`);
      let a = await At.post(`${e.baseUrl}${d}`, {}, {
        headers: se(r),
        timeout: 15e3,
        signal: i,
        validateStatus: T => T < 500
      });
      if (F(a.status, a.data, "IssueSessionToken"), !a.data.session_token) throw Error("IssueSessionToken: response missing session_token");
      n(`[runner:api] IssueSessionToken -> ${a.status}`);
      let {session_token: h, tools_host: E} = a.data;
      if (E === void 0 || E === null) return {
        session_token: h
      };
      let y = on().safeParse(E);
      if (!y.success) throw new we;
      return {
        session_token: h,
        tools_host: y.data
      };
    },
    async reportSessionFailure(r, t, i, d, a) {
      _6(t, "sessionId"), n(`[runner:api] POST /v1/code/runners/self-hosted/sessions/${t}/report-failure reason=${i}${d ? ` kind=${d}` : ""}${a ? ` cause=${a}` : ""}`);
      let h = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/sessions/${t}/report-failure`, {
        reason: i,
        ...d && {
          setup_failure_kind: d
        },
        ...a && {
          failure_kind: a
        }
      }, {
        headers: se(r),
        timeout: 15e3,
        validateStatus: E => E < 500
      });
      return F(h.status, h.data, "ReportSessionFailure"), n(`[runner:api] ReportSessionFailure -> ${h.status} excluded_count=${h.data.excluded_count} stuck=${h.data.stuck}`), 
      h.data;
    },
    async releaseSession(r, t) {
      _6(t, "sessionId"), n(`[runner:api] POST /v1/code/runners/self-hosted/sessions/${t}/release`);
      let i = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/sessions/${t}/release`, {}, {
        headers: se(r),
        timeout: 15e3,
        validateStatus: a => a < 500
      });
      F(i.status, i.data, "ReleaseSession");
      let d = i.data.released ?? !0;
      return n(`[runner:api] ReleaseSession -> ${i.status} released=${d}`), {
        released: d
      };
    },
    async deregisterRunner(r, t = {}) {
      n(`[runner:api] POST /v1/code/runners/self-hosted/deregister reason=${t.reason ?? ""}` + (t.drain_hold ? ` drain_hold=${t.drain_hold.outcome} held_ms=${t.drain_hold.held_ms} busy_at_release=${t.drain_hold.busy_session_ids_at_release.length}` : ""));
      let i = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/deregister`, {
        ...t.reason && {
          reason: t.reason
        },
        ...t.drain_hold && {
          drain_hold: t.drain_hold
        }
      }, {
        headers: se(r),
        timeout: 1e4,
        validateStatus: d => d < 500
      });
      F(i.status, i.data, "DeregisterRunner"), n(`[runner:api] DeregisterRunner -> ${i.status}`);
    },
    async refreshToken(r) {
      n("[runner:api] POST /v1/code/auth/refresh");
      let t = await At.post(`${e.baseUrl}/v1/code/auth/refresh`, {}, {
        headers: se(r),
        timeout: 15e3,
        validateStatus: i => i < 500
      });
      if (F(t.status, t.data, "RefreshToken"), !t.data.token) throw Error("RefreshToken: response missing token");
      return n(`[runner:api] RefreshToken -> ${t.status}`), t.data;
    },
    async getSessionRemoteConfig(r, t, i, d) {
      _6(r, "sessionId"), n(`[runner:api] GET /v1/code/sessions/${r}/remote`);
      let a = await At.get(`${e.baseUrl}/v1/code/sessions/${r}/remote`, {
        headers: {
          ...d?.headers,
          ...ie(t),
          "User-Agent": Qo()
        },
        timeout: d?.timeoutMs ?? 15e3,
        signal: i,
        validateStatus: E => E < 500,
        ...d?.beforeParsing && {
          maxContentLength: d.beforeParsing.mostBytes,
          responseType: "text",
          transformResponse: (E, y, T) => {
            if (T !== void 0 && T >= 200 && T < 300) d.beforeParsing?.admit(E); else if (E.length > un) return E;
            try {
              return Y(E);
            } catch {
              return E;
            }
          }
        }
      });
      F(a.status, a.data, "GetSessionRemoteConfig");
      let h = a.data;
      return {
        ...h,
        sources: h.sources ?? [],
        push_targets: h.push_targets ?? [],
        claude_code_args: h.claude_code_args ?? {},
        environment_variables: h.environment_variables ?? {}
      };
    },
    async registerWorker(r, t, i, d) {
      _6(t, "sessionId"), n(`[runner:api] POST ${r}/v1/code/sessions/${t}/worker/register`);
      let a = await At.post(`${r}/v1/code/sessions/${t}/worker/register`, {
        session_id: t
      }, {
        headers: ie(i),
        timeout: 3e4,
        signal: d,
        validateStatus: E => E < 500
      });
      F(a.status, a.data, "RegisterWorker");
      let h = parseInt(String(a.data.worker_epoch), 10);
      if (isNaN(h)) throw Error(`RegisterWorker: invalid worker_epoch in response: ${a.data.worker_epoch}`);
      return n(`[runner:api] RegisterWorker -> ${a.status} worker_epoch=${h}`), h;
    },
    async postWorkerEvents(r, t, i, d, a, h) {
      _6(t, "sessionId"), n(`[runner:api] POST ${r}/v1/code/sessions/${t}/worker/events (${a.length} ${I(a.length, "event")})`);
      let E = await At.post(`${r}/v1/code/sessions/${t}/worker/events`, {
        worker_epoch: d,
        events: a.map(y => ({
          payload: y
        }))
      }, {
        headers: ie(i),
        timeout: 15e3,
        signal: h,
        validateStatus: y => y < 500
      });
      F(E.status, E.data, "PostWorkerEvents"), n(`[runner:api] PostWorkerEvents -> ${E.status}`);
    },
    async updateSessionWorkerState(r, t, i, d, a, h) {
      _6(t, "sessionId"), n(`[runner:api] PUT ${r}/v1/code/sessions/${t}/worker`);
      let E = await At.put(`${r}/v1/code/sessions/${t}/worker`, {
        worker_epoch: d,
        ...typeof a === "string" && {
          worker_status: a
        },
        ...typeof a === "object" && {
          connection_status: a.connectionStatus
        }
      }, {
        headers: ie(i),
        timeout: 15e3,
        signal: h,
        validateStatus: y => y < 500
      });
      F(E.status, E.data, "UpdateSessionWorkerState"), n(`[runner:api] UpdateSessionWorkerState -> ${E.status}`);
    },
    async heartbeat(r, t, i, d, a) {
      _6(t, "sessionId");
      let h = await At.post(`${r}/v1/code/sessions/${t}/worker/heartbeat`, {
        worker_epoch: d
      }, {
        headers: ie(i),
        timeout: 1e4,
        signal: a,
        validateStatus: E => E < 500
      });
      F(h.status, h.data, "Heartbeat");
    },
    async forwardDiagnostics(r, t, i, d, a) {
      if (_6(t, "sessionId"), a.length === 0) return;
      n(`[runner:api] POST ${r}/v1/code/sessions/${t}/worker/diagnostics (${a.length} lines)`);
      let h = await At.post(`${r}/v1/code/sessions/${t}/worker/diagnostics`, {
        worker_epoch: d,
        lines: a
      }, {
        headers: ie(i),
        timeout: 3e4,
        validateStatus: E => E < 500
      });
      F(h.status, h.data, "ForwardDiagnostics"), n(`[runner:api] ForwardDiagnostics -> ${h.status}`);
    }
  };
}

import { createServer as pn } from "http";

var HEe = "unknown", g0r = /^[A-Za-z0-9_.-]{1,64}$/;

function QJe(e) {
  if (!e || e === "unknown" || !g0r.test(e) || e.startsWith("-") || /^\.{1,2}$/.test(e)) return;
  return e;
}

function CFt(e) {
  return Array.from(e.slice(0, 128)).map(n => /[A-Za-z0-9_.-]/.test(n) ? n : `\\u{${n.codePointAt(0).toString(16)}}`).join("");
}

var ue = [ 1, 2.5, 5, 10, 20, 40, 80, 160, 320, 640, 1280 ];

function N$o() {
  return {
    buckets: ue.map(() => 0),
    count: 0,
    sum: 0
  };
}

function $$o(e, n) {
  e.sum += n, e.count += 1;
  for (let s = 0; s < ue.length; s++) if (n <= ue[s]) e.buckets[s]++;
}

function pte(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function He(e) {
  return e.replace(/[^a-zA-Z0-9_]/g, "_").replace(/^[0-9]/, "_$&");
}

var De = "claude_code_self_hosted_runner";

function fn(e, n = Date.now()) {
  let s = e.lastPollAt > 0 ? (n - e.lastPollAt) / 1e3 : 0, c = `runner_id="${pte(e.runnerId)}",version="${pte(e.version)}",client_label="${pte(e.clientLabel)}"`, r = De, t = "";
  t += `# HELP ${r}_info Self-hosted runner identity (info-style gauge; value is always 1).\n`, 
  t += `# TYPE ${r}_info gauge\n`, t += `${r}_info{${c}} 1\n`, t += `# HELP ${r}_capacity Max concurrent sessions this runner accepts (--capacity).\n`, 
  t += `# TYPE ${r}_capacity gauge\n`, t += `${r}_capacity ${e.capacity}\n`, t += `# HELP ${r}_active_sessions Sessions currently being handled by this runner.\n`, 
  t += `# TYPE ${r}_active_sessions gauge\n`, t += `${r}_active_sessions ${e.activeSessions}\n`;
  for (let [d, a] of [ [ "sessions_started_total", e.sessionsStarted ], [ "sessions_completed_total", e.sessionsCompleted ], [ "sessions_failed_total", e.sessionsFailed ], [ "sessions_interrupted_total", e.sessionsInterrupted ] ]) {
    t += `# HELP ${r}_${d} ${d === "sessions_started_total" ? "Session child processes spawned over the runner's lifetime. One increment per child spawn; a session that is re-spawned (runner restart, re-assignment) counts again. NOT comparable to the orchestrator's spawn_hooks_total (which counts orchestrator spawn-runner hook runs, including warm hints)." : d === "sessions_completed_total" ? "Session child processes that ended cleanly over the runner's lifetime: child exited 0, the server closed the session (archive/delete), or the runner released the slot as a clean handoff (idle release, startup timeout, retire / max-session-age release, server deassign). Drain/SIGTERM and the max-lifetime hard-cap kill are NOT counted (those increment sessions_interrupted_total instead)." : d === "sessions_failed_total" ? "Session child processes that exited with a non-zero code over the runner's lifetime (crash, OOM, spawn error). Does NOT include idle-release or a server deassign the poll loop observed first (those count as completed); a deassign the child notices first via its epoch-409 exit still lands here." : "Session child processes that were terminated for a non-session-outcome reason over its lifetime (drain/SIGTERM, max-lifetime hard-cap kill, released=false backstop, or an external signal). Watchdog and external-signal kills are additionally reported to the server as session failures. Closes the accounting: started - (completed + failed + interrupted) equals the number of session children currently running."}\n`, 
    t += `# TYPE ${r}_${d} counter\n`;
    for (let [E, y] of a) t += `${r}_${d}{client_platform="${pte(E)}"} ${y}\n`;
  }
  if (t += `# HELP ${r}_locked_account Present (value 1) once the runner is locked to an account; absent while fungible.\n`, 
  t += `# TYPE ${r}_locked_account gauge\n`, e.lockedAccountEmail !== null) t += `${r}_locked_account{email="${pte(e.lockedAccountEmail)}"} 1\n`;
  t += `# HELP ${r}_last_poll_age_seconds Seconds since the last successful pollWork return.\n`, 
  t += `# TYPE ${r}_last_poll_age_seconds gauge\n`, t += `${r}_last_poll_age_seconds ${s}\n`, 
  t += `# HELP ${r}_poll_errors_total PollWork request failures by error kind (transport=no HTTP response; timeout=client deadline; 5xx/429/4xx by status). All five series present from process start so rate() works and absent() means process-down.\n`, 
  t += `# TYPE ${r}_poll_errors_total counter\n`;
  for (let d of GYn) t += `${r}_poll_errors_total{error_kind="${d}"} ${e.pollErrors[d]}\n`;
  t += `# HELP ${r}_initializing_sessions Sessions currently in the init phase (handleSession entry to child system/init).\n`, 
  t += `# TYPE ${r}_initializing_sessions gauge\n`, t += `${r}_initializing_sessions ${e.initializingSessions}\n`, 
  t += `# HELP ${r}_session_init_errors_total Sessions that exited as failed before the child reached init (checkout hook / git prep / token issue / pre-init child crash).\n`, 
  t += `# TYPE ${r}_session_init_errors_total counter\n`, t += `${r}_session_init_errors_total ${e.sessionInitErrors}\n`, 
  t += `# HELP ${r}_session_init_duration_seconds Wall-clock seconds from session assignment to child init (successful inits only).\n`, 
  t += `# TYPE ${r}_session_init_duration_seconds histogram\n`;
  let i = e.sessionInitDurations;
  for (let d = 0; d < ue.length; d++) t += `${r}_session_init_duration_seconds_bucket{le="${ue[d]}"} ${i.buckets[d]}\n`;
  t += `${r}_session_init_duration_seconds_bucket{le="+Inf"} ${i.count}\n`, t += `${r}_session_init_duration_seconds_sum ${i.sum}\n`, 
  t += `${r}_session_init_duration_seconds_count ${i.count}\n`, t += `# HELP ${r}_session_start_hook_errors_total SessionStart hooks that reported an error outcome (nonzero exit, validation/spawn failure, or HTTP/MCP error; one per failing hook execution).\n`, 
  t += `# TYPE ${r}_session_start_hook_errors_total counter\n`, t += `${r}_session_start_hook_errors_total ${e.sessionStartHookErrors}\n`, 
  t += `# HELP ${r}_session_idle_seconds Seconds since the session went idle (turn-end or awaiting-action); 0 while a turn is running, background work is pending, or the session is initializing. One series per active session; disappears at session end.\n`, 
  t += `# TYPE ${r}_session_idle_seconds gauge\n`;
  for (let [d, a] of e.sessionIdle) {
    let h = a === null ? 0 : ((n - a) / 1e3).toFixed(3), E = e.sessionClientPlatform.get(d) ?? HEe;
    t += `${r}_session_idle_seconds{session_id="${pte(d)}",client_platform="${pte(E)}"} ${h}\n`;
  }
  for (let [d, a] of e.childMetrics ?? []) {
    let h = a.help.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
    t += `# HELP ${d} ${h}\n`, t += `# TYPE ${d} ${a.type}\n`;
    for (let [E, y] of a.points) t += `${d}${E} ${y}\n`;
  }
  return t;
}

function gn(e, n) {
  let s = e.childMetrics ??= new Map, c = n;
  for (let r of c.resourceMetrics ?? []) {
    let t = Ue(r.resource?.attributes, "session.id"), i = Ue(r.resource?.attributes, "client.platform");
    for (let d of r.scopeMetrics ?? []) for (let a of d.metrics ?? []) {
      if (typeof a.name !== "string" || a.name === "") continue;
      let h = He(a.name), E, y, T;
      if (a.sum) E = a.sum.isMonotonic ? "counter" : "gauge", y = a.sum.isMonotonic && !h.endsWith("_total") ? `${h}_total` : h, 
      T = a.sum.dataPoints; else if (a.gauge) E = "gauge", y = h, T = a.gauge.dataPoints; else continue;
      if (y.startsWith(De)) continue;
      let P = s.get(y) ?? {
        help: a.description ?? "",
        type: E,
        points: new Map
      };
      for (let k of T ?? []) {
        let b = [], w = new Set;
        if (t !== void 0) b.push([ "session_id", t ]), w.add("session_id");
        if (i !== void 0) b.push([ "client_platform", i ]), w.add("client_platform");
        for (let G of k.attributes ?? []) {
          if (typeof G.key !== "string") continue;
          let X = Ge(G.value);
          if (X === void 0) continue;
          let J = He(G.key);
          if (J === "" || w.has(J)) continue;
          w.add(J), b.push([ J, X ]);
        }
        let L = b.length > 0 ? `{${b.map(([G, X]) => `${G}="${pte(X)}"`).join(",")}}` : "", H = typeof k.asDouble === "number" ? k.asDouble : k.asInt !== void 0 ? Number(k.asInt) : void 0;
        if (H === void 0 || !Number.isFinite(H)) continue;
        P.points.set(L, H);
      }
      s.set(y, P);
    }
  }
}

function F$o(e, n) {
  let s = e.childMetrics;
  if (s === void 0) return;
  let c = `session_id="${pte(n)}"`;
  for (let [r, t] of s) {
    for (let i of t.points.keys()) if (i.includes(c)) t.points.delete(i);
    if (t.points.size === 0) s.delete(r);
  }
}

function Ue(e, n) {
  for (let s of e ?? []) if (s.key === n) return Ge(s.value);
  return;
}

function Ge(e) {
  if (e === void 0) return;
  if (typeof e.stringValue === "string") return e.stringValue;
  if (e.intValue !== void 0) return String(e.intValue);
  if (typeof e.doubleValue === "number") return String(e.doubleValue);
  if (typeof e.boolValue === "boolean") return String(e.boolValue);
  return;
}

function U$o(e, n, s, c, r) {
  let t = pn((d, a) => {
    if (d.method === "POST" && d.url === "/v1/metrics") {
      if (!hn(d)) {
        a.writeHead(403).end();
        return;
      }
      let P = [], k = 0, b = !1;
      d.on("data", w => {
        if (k += w.length, k > 1048576) {
          b = !0, a.writeHead(413).end(), d.destroy();
          return;
        }
        P.push(w);
      }), d.on("end", () => {
        if (b) return;
        try {
          gn(n, Y(Buffer.concat(P).toString("utf8"))), a.writeHead(200).end();
        } catch (w) {
          s(`[runner:warn] /v1/metrics rejected malformed body: ${l(w)}`), a.writeHead(400).end();
        }
      });
      return;
    }
    let h = void 0;
    if (d.method === "GET" && d.url === "/metrics") {
      let P = fn(n);
      a.writeHead(200, {
        "Content-Type": "text/plain; version=0.0.4; charset=utf-8",
        "Content-Length": Buffer.byteLength(P)
      }), a.end(P);
      return;
    }
    if (d.method !== "GET" || d.url !== "/healthz") {
      a.writeHead(404, {
        "Content-Type": "text/plain"
      }), a.end(`not found\n`);
      return;
    }
    let E = Date.now(), y = n.lastPollAt > 0 ? E - n.lastPollAt : null, T = _({
      status: "ok",
      runner_id: n.runnerId,
      active_sessions: n.activeSessions,
      last_poll_at: n.lastPollAt > 0 ? new Date(n.lastPollAt).toISOString() : null,
      last_poll_age_ms: y
    });
    if (a.writeHead(200, {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(T)
    }), a.end(T), n.claimVisibility !== void 0) {
      for (let P of n.claimVisibility.values()) if (P.visibleMs === void 0) P.visibleMs = Math.max(0, E - P.pickedUpAt);
    }
  });
  t.unref();
  let i = !1;
  return t.on("error", d => {
    if (!t.listening) n.listeningOn = void 0;
    if (!i) i = !0, f("self_hosted_healthz_listen", "listen_failed");
    s(`[runner:warn] /healthz listener failed on port ${e}: ${d.message} \u2014 continuing without health endpoint`);
  }), t.listen(e, () => {
    if (n.listeningOn = t.address()?.port ?? e, !i) i = !0, g("self_hosted_healthz_listen");
    s(`[runner:health] /healthz and /metrics listening on :${e}`);
  }), t;
}

function hn(e) {
  let n = e.socket.remoteAddress;
  return n === "127.0.0.1" || n === "::1" || n === "::ffff:127.0.0.1";
}

import { randomBytes as mn, timingSafeEqual as _n } from "crypto";

import { open as En } from "fs/promises";

import { resolve as yn } from "path";

import { createServer as Sn, connect as wn } from "net";

import { connect as vn } from "tls";

var ke = [ "https_proxy", "HTTPS_PROXY", "http_proxy", "HTTP_PROXY" ], Ocn = "SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_COMMAND", Mcn = "SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_FILE", Pn = "claude-self-hosted-runner";

class Q extends Error {
  constructor(e) {
    super(e);
    this.name = "ProxyAuthorizationMintError";
  }
}

var bn = 3e4, Te = 16384, Tn = 3e4, kn = 3e4, ve = 6e4, Rn = 2e3, ze = 8, An = 8192, Pe = 16384, On = 256, Ln = 65536, me = /[\x00-\x08\x0a-\x1f\x7f-\x9f]/, $n = 4096, Cn = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+:/;

function Z(e, n = 200) {
  return ne(e.replace(/[\p{Cc}\p{Cs}]/gu, ""), n);
}

function xn(e) {
  if (e === void 0 || e === "") return;
  if (Buffer.byteLength(e, "latin1") > $n) return;
  return me.test(e) ? void 0 : e;
}

function Fe(e) {
  let n = e.trim();
  if (!n) throw new Q("proxy authorization source returned an empty value");
  if (Buffer.byteLength(n) > Te) throw new Q(`proxy authorization value exceeds ${Te} bytes`);
  if (me.test(n)) throw new Q("proxy authorization value must be a single header line (control characters such as CR/LF are not allowed)");
  return n;
}

function Nn(e) {
  let {source: n} = e, s = e.commandTimeoutMs ?? bn, c;
  try {
    c = new URL(e.upstreamProxyUrl).hostname;
  } catch {
    c = void 0;
  }
  let r, t = async d => {
    if (n.kind === "file") {
      if (r) throw new Q("proxy authorization file could not be read: an earlier read has not returned yet (stalled mount?); not issuing another");
      let E, y = !1, T = (async () => {
        let k = await En(n.path, "r");
        try {
          let b = Buffer.alloc(Te + 1), {bytesRead: w} = await k.read(b, 0, b.length, 0);
          return b.subarray(0, w).toString("utf8");
        } finally {
          await k.close();
        }
      })(), P = () => {
        if (y = !0, r === T) r = void 0;
      };
      T.then(P, P);
      try {
        E = await fl(T, s, "read");
      } catch (k) {
        if (!y) r = T;
        throw new Q(`proxy authorization file could not be read: ${Xc(l(k))}`);
      }
      return Fe(E);
    }
    let a = {
      ...typeof e.commandEnv === "function" ? e.commandEnv() : e.commandEnv ?? process.env,
      CLAUDE_CODE_PROXY_URL: e.upstreamProxyUrl,
      ...c && {
        CLAUDE_CODE_PROXY_HOST: c
      },
      ...d && {
        CLAUDE_CODE_PROXY_AUTHENTICATE: d
      }
    }, h = await gI(n.command, {
      timeout: s,
      reject: !1,
      stdin: "ignore",
      useToolMemoryCgroup: !1,
      extendEnv: !1,
      env: a
    });
    if (h.failed) {
      let E = h.timedOut ? `timed out after ${s}ms` : `exited ${h.exitCode ?? h.signal ?? "abnormally"}`, y = h.stderr?.trim();
      throw new Q(`proxy authorization command ${E}${y ? `: ${ne(Xc(y), 500)}` : ""}`);
    }
    return Fe(h.stdout ?? "");
  }, i = new Map;
  return {
    source: n.kind,
    mint(d) {
      let a = d === void 0 ? "plain" : `remint:${d.challenge ?? ""}`, h = i.get(a);
      if (!h) h = t(d?.challenge).finally(() => {
        i.delete(a);
      }), i.set(a, h);
      return h;
    }
  };
}

function fe(e, n) {
  let s = n.toLowerCase();
  for (let c of e) {
    let r = c.indexOf(":");
    if (r > 0 && c.slice(0, r).trim().toLowerCase() === s) return c.slice(r + 1).trim();
  }
  return;
}

function Be(e, n) {
  let s = new Set(n.map(c => c.toLowerCase()));
  return e.filter(c => {
    let r = c.indexOf(":");
    return r > 0 && s.has(c.slice(0, r).trim().toLowerCase());
  });
}

function de(e, n) {
  let s = new Set(n.map(c => c.toLowerCase()));
  return e.filter(c => {
    let r = c.indexOf(":");
    return !(r > 0 && s.has(c.slice(0, r).trim().toLowerCase()));
  });
}

var In = 16;

function be(e, n) {
  let s = Buffer.from(n, "utf8").toString("latin1"), c = [ s ], r = s.search(/[ \t]/);
  if (r > 0) {
    let t = s.slice(r).trim();
    if (t.length >= In) c.push(t);
  }
  return [ e.startLine, ...e.headerLines ].some(t => c.some(i => t.includes(i)));
}

var ge = [ "proxy-authenticate", "proxy-authentication-info" ];

function Mn(e, n, s, c, r) {
  let t = s, i = !1, d = a => {
    if (n.destroyed || !n.writable) return;
    if (a.length > t && !i) i = !0, r();
    if (t === 0 || a.length === 0) return;
    let h = a.length <= t ? a : a.subarray(0, t);
    if (t -= h.length, !n.write(h) && t > 0) e.pause(), n.once("drain", () => e.resume());
  };
  return d(c), e.on("data", d), e.resume(), () => {
    e.removeListener("data", d);
  };
}

function he(e, n, s, c = Buffer.alloc(0)) {
  return new Promise((r, t) => {
    let i = c, d = !1, a = (P, k) => {}, h = setTimeout(P => P(Error("timed out waiting for the request/response head")), s, P => a(P)), E = P => {
      i = Buffer.concat([ i, P ]);
      let k = i.indexOf(`\r\n\r\n`);
      if (k === -1) {
        if (i.length > n) a(Error("request/response head exceeded the size limit"));
        return;
      }
      if (k > n) {
        a(Error("request/response head exceeded the size limit"));
        return;
      }
      let b = i.subarray(0, k).toString("latin1"), [w = "", ...L] = b.split(`\r\n`);
      a(null, {
        startLine: w,
        headerLines: L,
        rest: i.subarray(k + 4)
      });
    }, y = () => a(Error("connection closed before the head was complete")), T = P => a(P);
    if (a = (P, k) => {
      if (d = !0, clearTimeout(h), e.removeListener("data", E), e.removeListener("close", y), 
      e.removeListener("error", T), e.pause(), P) t(P); else r(k);
    }, e.on("data", E), e.once("close", y), e.once("error", T), i.length > 0) E(Buffer.alloc(0));
    if (!d) e.resume();
  });
}

function M(e, n) {
  if (e.destroyed) return;
  if (e.resume(), e.writable) e.end(n);
  setTimeout(s => s.destroy(), Rn, e).unref();
}

function ee(e) {
  return Buffer.from(e, "latin1");
}

function Hn() {
  return `HTTP/1.1 407 Proxy Authentication Required\r\nProxy-Authenticate: Basic realm="${Pn}"\r\nContent-Length: 0\r\nConnection: close\r\n\r\n`;
}

function V(e, n, s) {
  return `HTTP/1.1 ${e} ${n}\r\nContent-Type: text/plain\r\nContent-Length: ${Buffer.byteLength(s)}\r\nConnection: close\r\n\r\n` + s;
}

class ce extends Error {
  constructor() {
    super("client closed before the upstream connection was ready");
    this.name = "ClientGoneError";
  }
}

function Un(e, n) {
  let s = !1, c = n.length > 0 ? [ n ] : [], r = n.length, t = d => {
    if (c.push(d), r += d.length, r > Ln) e.pause();
  }, i = () => {
    s = !0;
  };
  return e.on("data", t), e.once("end", i), e.once("close", i), e.resume(), {
    gone: () => s || e.destroyed,
    release: () => {
      e.removeListener("data", t);
      let d = c.length === 1 ? c[0] : Buffer.concat(c);
      return c = [], r = 0, d;
    }
  };
}

async function Dn(e) {
  let n = new URL(e.upstreamProxyUrl), s = n.protocol === "https:";
  if (n.protocol !== "http:" && !s) throw Error("the upstream proxy URL must be http:// or https://");
  let c = n.hostname.replace(/^\[(.*)\]$/, "$1"), r = n.port ? Number(n.port) : s ? 443 : 80;
  if (n.username || n.password) e.onStatus("[runner:egress-proxy] note: the upstream proxy URL carries user:password credentials; they are replaced by the minted Proxy-Authorization value on every request to the upstream proxy");
  let t = mn(24).toString("base64url"), i = Buffer.from("Basic " + Buffer.from(`runner:${t}`).toString("base64")), d = m => {
    let S = fe(m, "proxy-authorization");
    if (S === void 0) return !1;
    let R = Buffer.from(S);
    return R.length === i.length && _n(R, i);
  }, a = m => e.onDebug?.(`[runner:egress-proxy] ${m}`), h = m => e.onStatus(`[runner:egress-proxy] ${m}`), E = new Set, y = m => {
    E.add(m), m.on("error", S => a(`socket: ${l(S)}`)), m.once("close", () => E.delete(m));
  }, T = () => new Promise((m, S) => {
    let R = s ? vn({
      host: c,
      port: r,
      servername: Gn(c) ? void 0 : c,
      ...e.upstreamTls
    }) : wn({
      host: c,
      port: r
    });
    y(R);
    let N = s ? "secureConnect" : "connect", U = O => {}, A = setTimeout(O => O(Error("timed out connecting to the upstream proxy")), kn, O => U(O)), C = () => U(null), D = O => U(O), z = () => U(Error("upstream proxy closed the connection during connect"));
    U = O => {
      if (clearTimeout(A), R.removeListener(N, C), R.removeListener("error", D), R.removeListener("close", z), 
      O) R.destroy(), S(O); else m(R);
    }, R.once(N, C), R.once("error", D), R.once("close", z);
  }), P = (m, S) => {
    m.pipe(S), S.pipe(m);
    let R = () => {
      m.destroy(), S.destroy();
    };
    m.on("error", R), S.on("error", R), m.on("close", () => M(S, "")), S.on("close", () => M(m, "")), 
    m.resume(), S.resume();
  }, k = async (m, S, R, N) => {
    let U = await e.minter.mint(R);
    if (N()) throw new ce;
    let A = await T();
    if (N()) throw A.destroy(), new ce;
    try {
      A.write(Buffer.concat([ ee(`CONNECT ${m} HTTP/1.1\r\nHost: ${m}\r\n`), Buffer.from(`Proxy-Authorization: ${U}\r\n`), ee(S.map(D => D + `\r\n`).join("") + `\r\n`) ]));
      let C = await he(A, Pe, ve);
      if (N()) throw new ce;
      return {
        up: A,
        head: C,
        value: U
      };
    } catch (C) {
      throw A.destroy(), C;
    }
  }, b = m => {
    let S = m.startLine.match(/^HTTP\/1\.[01]\s+(\d{3})(?=\s|$)/);
    return S ? Number(S[1]) : 0;
  }, w = (m, S, R) => {
    if (S instanceof ce || m.destroyed) {
      m.destroy();
      return;
    }
    let N = S instanceof Q ? S.message : `upstream proxy connection failed: ${Xc(l(S))}`;
    h(`${N} (${Z(R)} answered 502)`), M(m, V(502, "Bad Gateway", S instanceof Q ? `proxy authorization could not be obtained (see the runner log)\n` : `upstream proxy connection failed (see the runner log)\n`));
  }, L = (m, S, R, N) => {
    S.destroy(), h(`upstream proxy rejected the minted Proxy-Authorization for ${Z(R)} (${Z(N)}); answering the client 502`), 
    M(m, V(502, "Bad Gateway", `upstream proxy rejected the runner-minted Proxy-Authorization (407); see the runner log\n`));
  }, H = (m, S, R, N) => {
    S.destroy(), h(`upstream response to ${Z(R)} (status ${N}) reflected the minted Proxy-Authorization in its head; withheld, answering the client 502`), 
    M(m, V(502, "Bad Gateway", `upstream proxy response withheld: its head reflected the runner-minted Proxy-Authorization (see the runner log)\n`));
  }, G = async (m, S, R, N) => {
    let U = Be(R.headerLines, [ "user-agent" ]), A = () => N.gone();
    try {
      let C = await k(S, U, void 0, A), D = b(C.head);
      if (D === 407) {
        let j = xn(fe(C.head.headerLines, "proxy-authenticate"));
        C.up.destroy(), a(`upstream answered 407 for CONNECT ${S}; re-minting once`), C = await k(S, U, {
          challenge: j
        }, A), D = b(C.head);
      }
      let {up: z, head: O, value: q} = C;
      if (D !== 200 && be(O, q)) {
        H(m, z, `CONNECT ${S}`, D);
        return;
      }
      if (D === 407) {
        L(m, z, `CONNECT ${S}`, O.startLine);
        return;
      }
      if (D < 100) {
        z.destroy(), h(`upstream proxy sent an unparseable reply to CONNECT ${Z(S)}; answering the client 502`), 
        M(m, V(502, "Bad Gateway", `unparseable reply from upstream proxy\n`));
        return;
      }
      if (D === 200) {
        if (a(`tunnel established: CONNECT ${S}`), m.write(`HTTP/1.1 200 Connection Established\r\n\r\n`), 
        O.rest.length > 0) m.write(O.rest);
        let j = N.release();
        if (j.length > 0) z.write(j);
        P(m, z);
        return;
      }
      z.destroy(), h(`upstream proxy refused CONNECT ${Z(S)}: ${Z(O.startLine)}`);
      let Ee = de(O.headerLines, [ "connection", "proxy-connection", "keep-alive", "transfer-encoding", "content-length", ...ge ]);
      M(m, ee(O.startLine + `\r\n` + Ee.map(j => j + `\r\n`).join("") + `Content-Length: 0\r\nConnection: close\r\n\r\n`));
    } catch (C) {
      w(m, C, `CONNECT ${S}`);
    }
  }, X = async (m, S, R) => {
    let N = de(S.headerLines, [ "proxy-authorization", "proxy-connection", "connection", "keep-alive", "upgrade", "te", "trailer", "max-forwards" ]), U = Number(fe(S.headerLines, "content-length") ?? "0"), A, C = () => {}, D = () => {
      C(), A?.destroy(), m.destroy();
    };
    try {
      {
        let z = await e.minter.mint();
        if (R.gone()) {
          D();
          return;
        }
        if (A = await T(), R.gone()) {
          D();
          return;
        }
        if (A.write(Buffer.concat([ ee(S.startLine + `\r\n` + N.map(te => te + `\r\n`).join("")), Buffer.from(`Proxy-Authorization: ${z}\r\n`), ee(`Connection: close\r\n\r\n`) ])), 
        U > 0) C = Mn(m, A, U, R.release(), () => a("client sent bytes past its declared Content-Length on a plain HTTP request; not forwarded"));
        let O = await he(A, Pe, ve), q = b(O), Ee = 0;
        while (q >= 100 && q < 200 && q !== 101) {
          if (R.gone()) {
            D();
            return;
          }
          if (be(O, z)) {
            C(), H(m, A, "a plain HTTP request", q);
            return;
          }
          if (++Ee > ze) {
            A.destroy(), C(), h(`upstream sent more than ${ze} interim responses to a plain HTTP request; answering the client 502`), 
            M(m, V(502, "Bad Gateway", `too many interim responses from upstream\n`));
            return;
          }
          m.write(ee(O.startLine + `\r\n` + de(O.headerLines, ge).map(te => te + `\r\n`).join("") + `\r\n`)), 
          O = await he(A, Pe, ve, O.rest), q = b(O);
        }
        if (R.gone()) {
          D();
          return;
        }
        if (be(O, z)) {
          C(), H(m, A, "a plain HTTP request", q);
          return;
        }
        if (q === 407) {
          C(), A.destroy(), h(`upstream answered 407 to a plain HTTP request (${Z(O.startLine)}); it may have come from the destination site rather than the proxy, and re-mint is only attempted for CONNECT tunnels; answering the client 502`), 
          M(m, V(502, "Bad Gateway", `upstream answered 407 (Proxy Authentication Required) to a plain HTTP request; it may have come from the destination site rather than the proxy; see the runner log\n`));
          return;
        }
        if (q < 100) {
          A.destroy(), C(), h("upstream proxy sent an unparseable reply to a plain HTTP request; answering the client 502"), 
          M(m, V(502, "Bad Gateway", `unparseable reply from upstream proxy\n`));
          return;
        }
        if (q >= 400) {
          A.destroy(), C(), h(`upstream answered ${Z(O.startLine)} to a plain HTTP request; error body withheld from the client`), 
          M(m, ee(O.startLine + `\r\n` + de(O.headerLines, [ "connection", "proxy-connection", "keep-alive", "transfer-encoding", "content-length", ...ge ]).map(te => te + `\r\n`).join("") + `Content-Length: 0\r\nConnection: close\r\n\r\n`));
          return;
        }
        if (m.write(ee(O.startLine + `\r\n` + de(O.headerLines, [ "connection", "proxy-connection", "keep-alive", ...ge ]).map(te => te + `\r\n`).join("") + `Connection: close\r\n\r\n`)), 
        O.rest.length > 0) m.write(O.rest);
        let j = A;
        j.pipe(m), j.on("error", () => m.destroy()), m.on("error", () => j.destroy()), j.on("close", () => M(m, "")), 
        m.on("close", () => j.destroy()), j.resume(), m.resume();
      }
    } catch (z) {
      C(), A?.destroy(), w(m, z, "plain HTTP request");
    }
  }, J = 0, Qe = e.maxPendingClients ?? On, re = Sn({
    pauseOnConnect: !0
  }, m => {
    if (y(m), m.on("error", () => m.destroy()), J >= Qe) {
      a("too many connections still sending a request head; refusing one"), m.destroy();
      return;
    }
    J++, (async () => {
      let S;
      try {
        S = await he(m, An, Tn);
      } catch (A) {
        if (a(`client: ${l(A)}`), !m.destroyed && m.writable && m.bytesRead > 0) M(m, V(400, "Bad Request", `malformed proxy request\n`)); else m.destroy();
        return;
      } finally {
        J--;
      }
      if (me.test(S.startLine) || S.headerLines.some(A => me.test(A) || !Cn.test(A))) {
        M(m, V(400, "Bad Request", `malformed header line\n`));
        return;
      }
      let R = S.startLine.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i), N = !R && /^[A-Z]+\s+http:\/\/\S+\s+HTTP\/1\.[01]$/i.test(S.startLine);
      if (!R && !N) {
        M(m, V(400, "Bad Request", `this is a forward proxy: expected CONNECT host:port or an absolute-form http:// request\n`));
        return;
      }
      if (!d(S.headerLines)) {
        a(`client ${R ? "CONNECT" : "request"} without valid loopback credentials \u2192 407 challenge`), 
        M(m, Hn());
        return;
      }
      if (N && /^TRACE\s/i.test(S.startLine)) {
        M(m, V(405, "Method Not Allowed", `TRACE is not forwarded by this proxy\n`));
        return;
      }
      if (N) {
        let A = Be(S.headerLines, [ "content-length" ]);
        if (fe(S.headerLines, "transfer-encoding") !== void 0) {
          M(m, V(501, "Not Implemented", `request bodies with Transfer-Encoding are not forwarded by this proxy; send a Content-Length\n`));
          return;
        }
        if (A.length > 1 || A.length === 1 && !/^content-length:[ \t]*\d{1,15}[ \t]*$/i.test(A[0])) {
          M(m, V(400, "Bad Request", `a forwarded request may carry at most one numeric Content-Length\n`));
          return;
        }
      }
      let U = Un(m, S.rest);
      if (R) await G(m, R[1], S, U); else await X(m, S, U);
    })().catch(S => {
      h(`internal error handling a proxied connection: ${Xc(l(S))}`), m.destroy();
    });
  });
  await new Promise((m, S) => {
    re.once("error", S), re.listen({
      host: "127.0.0.1",
      port: 0
    }, () => {
      re.removeListener("error", S), m();
    });
  }), re.on("error", m => h(`listener error: ${l(m)}`));
  let Oe = re.address().port;
  return {
    url: `http://runner:${t}@127.0.0.1:${Oe}`,
    port: Oe,
    openConnections: () => E.size,
    close: () => new Promise(m => {
      for (let S of E) S.destroy();
      re.close(() => m());
    })
  };
}

function Gn(e) {
  return /^[\d.]+$/.test(e) || e.includes(":");
}

class Ye {
  active;
  handle;
}

var zn = new K(() => new Ye);

function Re() {
  return zn.of(B().host);
}

function Fn(e, n) {
  let s = ke.map(t => [ t, n[t] ]), c = {}, r = [];
  for (let [t, i] of s) {
    if (i !== void 0) c[t] = i;
    if (i) n[t] = e, r.push(t);
  }
  return {
    url: e,
    rewritten: r,
    original: c
  };
}

function Bn(e = process.env) {
  let n = Re().active;
  if (!n) return {
    ...e
  };
  let s = {
    ...e
  };
  for (let c of ke) if (c in n.original) s[c] = n.original[c];
  return s;
}

function B$o(e = process.env) {
  let n = Re().active;
  if (!n) return {};
  let s = {
    [Ocn]: void 0,
    [Mcn]: void 0,
    NO_PROXY: e.NO_PROXY,
    no_proxy: e.no_proxy,
    CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER: void 0,
    ALL_PROXY: void 0,
    all_proxy: void 0
  };
  for (let c of ke) s[c] = n.rewritten.includes(c) ? n.url : void 0;
  return s;
}

function Yn(e, n = process.env) {
  if (e.command !== void 0 && e.command.trim() === "" || e.file !== void 0 && e.file.trim() === "") throw Error("--proxy-authorization-command / --proxy-authorization-file must not be empty");
  let s = (e.command ?? n[Ocn])?.trim(), c = (e.file ?? n[Mcn])?.trim(), r = c ? yn(c) : c, t = s !== void 0 && s !== "", i = r !== void 0 && r !== "";
  if (t && i) throw Error("set only one of --proxy-authorization-command (SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_COMMAND) and --proxy-authorization-file (SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_FILE)");
  if (t) return {
    kind: "command",
    command: s
  };
  if (i) return {
    kind: "file",
    path: r
  };
  return;
}

function j$o(e, n = process.env) {
  let s = Yn(e, n);
  if (!s) return;
  let c = Tf(n), r = c ? CG(c) : void 0;
  if (!c || !r) throw Error("--proxy-authorization-command / --proxy-authorization-file require HTTPS_PROXY (or HTTP_PROXY) to be set to the upstream proxy URL that the Proxy-Authorization value is for (ALL_PROXY alone is not consulted)");
  if (r.protocol !== "http:" && r.protocol !== "https:") throw Error("--proxy-authorization-command / --proxy-authorization-file support http:// and https:// upstream proxies only (check the scheme of HTTPS_PROXY / HTTP_PROXY)");
  return {
    source: s,
    upstreamProxyUrl: c
  };
}

async function W$o(e, n) {
  let s = Re(), c = IC(), r = h$(), t = Nn({
    source: e.source,
    upstreamProxyUrl: e.upstreamProxyUrl,
    commandEnv: () => ({
      ...Bn(),
      SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
      SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0
    })
  }), i = await Dn({
    upstreamProxyUrl: e.upstreamProxyUrl,
    minter: t,
    upstreamTls: {
      ...c && {
        cert: c.cert,
        key: c.key,
        passphrase: c.passphrase
      },
      ...r && {
        ca: r
      }
    },
    onStatus: n.onStatus,
    onDebug: n.onDebug
  }), d = Fn(i.url, process.env);
  if (s.active = d, new Set(d.rewritten.map(h => d.original[h])).size > 1) n.onStatus(`[runner:egress-proxy] note: ${d.rewritten.join("/")} named different proxies; all of them now go through the listener to ${Xc(e.upstreamProxyUrl)} (the one this runner resolves for its own traffic)`);
  if (XS(), process.env.CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER) n.onStatus("[runner:egress-proxy] note: CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER is set on the runner; it is cleared for sessions while --proxy-authorization-* is active (the runner now mints Proxy-Authorization for all proxied traffic, and a session-side proxyAuthHelper header would be refused by the loopback listener)");
  return n.onStatus(`[runner:egress-proxy] enabled: minting Proxy-Authorization from the configured ${e.source.kind} for every CONNECT to the upstream proxy ${Xc(e.upstreamProxyUrl)}; this runner and its sessions now use the loopback listener 127.0.0.1:${i.port} (rewrote ${d.rewritten.join(", ")})`), 
  s.handle = {
    ...i,
    close: async () => {
      await i.close(), s.active = void 0, s.handle = void 0;
    }
  }, s.handle;
}

function z$o(e, n = process.env) {
  let s = e.find(c => c === "--proxy-authorization-command" || c === "--proxy-authorization-file") ?? [ Ocn, Mcn ].find(c => n[c]?.trim());
  if (s !== void 0) throw new x(`${s} is not yet supported with the orchestrator subcommand (only worker runners mint Proxy-Authorization for their egress proxy today). Unset it for the orchestrator process; the runners it spawns can still use it.`, "proxy-authorization knob given to the orchestrator subcommand");
}

import { spawn as Ve } from "child_process";

import { constants as jn } from "fs";

import { access as Vn, stat as Ae } from "fs/promises";

import { join as We } from "path";

var _e = 5e3;

function ae() {
  return {
    ...process.env,
    SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
    SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
    SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_COMMAND: void 0,
    SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_FILE: void 0
  };
}

function RFt(e, n = "linux") {
  if (n !== "win32") return;
  switch (e) {
   case "--hooks-dir":
    throw Error("--hooks-dir is not supported on Windows: lifecycle hooks currently require a Linux or macOS host, because they are POSIX executables that the runner spawns directly (no shell, no .cmd/.ps1/.exe resolution). Run the runner on a Linux or macOS host to use hooks, or drop --hooks-dir / SELF_HOSTED_RUNNER_HOOKS_DIR to use the built-in checkout and command behavior. See docs/self-hosted-runners-guide.md \xa7 Lifecycle hooks.");

   case "orchestrator mode":
    throw Error("orchestrator mode is not supported on Windows: it is driven by the spawn-runner lifecycle hook, and lifecycle hooks currently require a Linux or macOS host because they are POSIX executables spawned directly (no shell, no .cmd/.ps1/.exe resolution). Run the orchestrator on a Linux or macOS host; the runners it provisions are unaffected. See docs/self-hosted-runners-guide.md \xa7 Lifecycle hooks.");
  }
}

async function Iht(e, n) {
  if (!e) return null;
  let s = We(e, n);
  try {
    if (!(await fl(Ae(s), _e, `stat ${s}`)).isFile()) return null;
    return await fl(Vn(s, jn.X_OK), _e, `access ${s}`), s;
  } catch {
    return null;
  }
}

var VYn = [ [ "core.fsmonitor", "" ], [ "core.askPass", "" ], [ "log.showSignature", "false" ], [ "tag.forceSignAnnotated", "false" ], [ "init.templateDir", "" ], [ "gpg.ssh.defaultKeyCommand", "" ], [ "push.gpgSign", "false" ], [ "protocol.ext.allow", "never" ], [ "protocol.fd.allow", "never" ], [ "protocol.git.allow", "never" ], [ "protocol.file.allow", "user" ], [ "merge.verifySignatures", "false" ], [ "core.alternateRefsCommand", wMr ], [ "core.attributesFile", "/dev/null" ] ], iBs = {
  GIT_PROXY_COMMAND: "",
  GIT_ALLOW_PROTOCOL: "https:http:ssh",
  GIT_EDITOR: ":",
  GIT_SEQUENCE_EDITOR: ":",
  GIT_SSH_COMMAND: "ssh"
};

function G$o(e = ae()) {
  let n;
  for (let [s, c] of Object.entries(iBs)) {
    if (e[s] !== void 0) continue;
    n ??= {
      ...e
    }, n[s] = s === "GIT_SSH_COMMAND" && e.GIT_SSH !== void 0 ? `'${e.GIT_SSH.replace(/'/g, "'\\''")}'` : c;
  }
  if (aBs(e) === "handedOn") n ??= {
    ...e
  }, n.GIT_ASKPASS = e.SSH_ASKPASS;
  return n ?? e;
}

function aBs(e = ae()) {
  if (e.GIT_ASKPASS !== void 0 || dBs("core.askPass", e)) return "own";
  return e.SSH_ASKPASS ? "handedOn" : "none";
}

var Wn = 256;

function lBs(e = ae()) {
  let n = /^\s*\+?(\d+)$/.exec(e.GIT_CONFIG_COUNT ?? ""), s = n ? parseInt(n[1], 10) : 0;
  if (!Number.isSafeInteger(s) || s === 0) return {
    count: 0,
    announced: 0
  };
  if (s > Wn) return {
    count: 0,
    discarded: "too-many",
    announced: s
  };
  if (e[`GIT_CONFIG_KEY_${s - 1}`] === void 0) return {
    count: 0,
    discarded: "sparse",
    announced: s
  };
  return {
    count: s,
    announced: s
  };
}

function Ke(e) {
  return lBs(e).count;
}

function dBs(e, n = ae()) {
  let s = Ke(n), c = e.toLowerCase();
  for (let r = 0; r < s; r++) if ((n[`GIT_CONFIG_KEY_${r}`] ?? "").toLowerCase() === c) return !0;
  return !1;
}

function KYn(e, n) {
  let s = [ [ "gpg.program", e.gpg ], [ "gpg.openpgp.program", e.gpg ], [ "gpg.x509.program", e.gpgsm ] ];
  if (n) s.push([ "gpg.ssh.program", e.sshKeygen ]);
  return s;
}

function Xe(e, n, s) {
  if (!n?.length) return e;
  let c = Ke(e), r = {
    ...e
  }, t = n.length;
  for (let i = 0; i < c; i++) delete r[`GIT_CONFIG_KEY_${i}`], delete r[`GIT_CONFIG_VALUE_${i}`];
  for (let i = 0; i < c; i++) {
    let d = e[`GIT_CONFIG_KEY_${i}`], a = e[`GIT_CONFIG_VALUE_${i}`];
    if (d !== void 0) r[`GIT_CONFIG_KEY_${t + i}`] = d;
    if (a !== void 0) r[`GIT_CONFIG_VALUE_${t + i}`] = a;
  }
  if (n.forEach(([i, d], a) => {
    r[`GIT_CONFIG_KEY_${a}`] = i, r[`GIT_CONFIG_VALUE_${a}`] = d;
  }), r.GIT_CONFIG_COUNT = String(t + c), s?.legacyParams) {
    let i = h => `'${h.replace(/'/g, "'\\''")}'`, d = n.map(([h, E]) => i(`${h}=${E}`)), a = [];
    for (let h = 0; h < c; h++) {
      let E = e[`GIT_CONFIG_KEY_${h}`];
      if (E !== void 0) a.push(i(`${E}=${e[`GIT_CONFIG_VALUE_${h}`] ?? ""}`));
    }
    r.GIT_CONFIG_PARAMETERS = [ ...d, ...a, ...e.GIT_CONFIG_PARAMETERS ? [ e.GIT_CONFIG_PARAMETERS ] : [] ].join(" ");
  }
  return r;
}

function qe(e, n, s) {
  let c = n?.commandScopeEntries ?? [], r = s && c.some(([t]) => t.includes("=")) ? [] : c;
  return [ ...e ?? [], ...r ];
}

class ZJe extends x {
  exitCode;
  constructor(e, n, s) {
    super(e, s);
    this.name = "CheckoutHookFailedError", this.exitCode = n;
  }
}

async function h0r(e) {
  let s = {
    ...ae(),
    ...e.gitEnvironment?.envOverrides,
    ...!1,
    CLAUDE_RUNNER_SESSION_ID: e.sessionId.replace(/^cse_/, "session_"),
    CLAUDE_RUNNER_SESSION_UUID: jO(e.sessionId),
    CLAUDE_RUNNER_REPO_URL: e.repoUrl,
    CLAUDE_RUNNER_REPO_REF: e.repoRef ?? "",
    CLAUDE_RUNNER_CHECKOUT_PATH: e.checkoutPath,
    CLAUDE_RUNNER_API_BASE_URL: e.apiBaseUrl,
    CLAUDE_RUNNER_GIT_MOUNT_URL: e.gitMountUrl,
    CLAUDE_RUNNER_CLIENT_PLATFORM: QJe(e.clientPlatform),
    CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.sessionAccessToken
  };
  e.onStatus(`[runner:hook] checkout ${Xc(e.repoUrl)} -> ${e.checkoutPath} (via ${e.hookPath})`);
  let c = [], r = d => {
    try {
      e.onStderrLine?.(d);
    } catch {}
  }, t = !1;
  await new Promise((d, a) => {
    let h = Ve(e.hookPath, [], {
      cwd: e.cwd,
      env: Xe(e.gitConfigPins?.length ? G$o(s) : s, qe(e.gitConfigPins, e.gitEnvironment, e.gitConfigLegacyParams), {
        legacyParams: e.gitConfigLegacyParams
      }),
      stdio: [ "ignore", "pipe", "pipe" ],
      windowsHide: !0,
      ...Dl("hooks")
    }), E, y = () => {
      t = !0, e.onDebug(`[runner:hook:checkout] abort received, sending SIGTERM to pid=${h.pid}`), 
      h.kill("SIGTERM"), E = setTimeout((b, w) => {
        w(`[runner:hook:checkout] still running after SIGTERM, sending SIGKILL to pid=${b.pid}`), 
        b.kill("SIGKILL");
      }, 5e3, h, e.onDebug);
    };
    if (e.signal?.aborted) y(); else e.signal?.addEventListener("abort", y, {
      once: !0
    });
    let T = "", P = "", k = (b, w) => {
      let L = b.split(`\n`), H = L.pop() ?? "";
      for (let G of L) {
        let X = Xc(G);
        if (e.onDebug(`[runner:hook:checkout] ${X}`), w) c.push(X + `\n`), r(X);
      }
      if (w) {
        let G = c.reduce((X, J) => X + J.length, 0);
        while (G > 4096 && c.length > 1) G -= c.shift().length;
      }
      return H;
    };
    h.stdout.on("data", b => {
      T += b.toString(), T = k(T, !1);
    }), h.stderr.on("data", b => {
      P += b.toString(), P = k(P, !0);
    }), h.on("error", b => {
      if (E) clearTimeout(E);
      e.signal?.removeEventListener("abort", y), a(b);
    }), h.on("close", b => {
      if (E) clearTimeout(E);
      if (e.signal?.removeEventListener("abort", y), T) e.onDebug(`[runner:hook:checkout] ${Xc(T)}`);
      if (P) {
        let w = Xc(P);
        e.onDebug(`[runner:hook:checkout] ${w}`), c.push(w), r(w);
      }
      if (t) a(Error("checkout hook aborted")); else if (b === 0) d(); else {
        let L = `checkout hook failed (exit ${b}): ${c.join("").slice(-4096)}`;
        a(b === null ? new x(L, "checkout hook killed by signal") : new ZJe(L, b, `exited with status ${b}`));
      }
    });
  });
  let i;
  try {
    i = await fl(Ae(e.checkoutPath), _e, `stat ${e.checkoutPath}`);
  } catch (d) {
    if (W(d)) throw new ZJe(`checkout hook exited 0 but ${e.checkoutPath} does not exist`, 0, "exited 0 but did not create the checkout directory");
    throw d;
  }
  if (!i.isDirectory()) throw new ZJe(`checkout hook exited 0 but ${e.checkoutPath} is not a directory`, 0, "exited 0 but the checkout path is not a directory");
  if (process.env.CLAUDE_RUNNER_SKIP_GIT_VERIFY !== "1") try {
    await fl(Ae(We(e.checkoutPath, ".git")), _e, `stat ${e.checkoutPath}/.git`);
  } catch (d) {
    if (W(d)) throw new ZJe(`checkout hook succeeded but ${e.checkoutPath}/.git is missing (for non-git SCMs, set CLAUDE_RUNNER_SKIP_GIT_VERIFY=1 in the runner's environment)`, 0, "exited 0 but left no .git in the checkout directory");
    throw d;
  }
}

var je = 2e3;

class Je {
  inFlight=0;
  increment() {
    this.inFlight++;
  }
  decrement() {
    this.inFlight--;
  }
}

var Kn = new K(() => new Je);

function Ze() {
  return Kn.of(B().host);
}

function qYn() {
  return Ze().inFlight;
}

async function y0r(e) {
  let n = {
    ...ae(),
    ...e.gitEnvironment?.envOverrides,
    CLAUDE_RUNNER_SESSION_ID: e.sessionId.replace(/^cse_/, "session_"),
    CLAUDE_RUNNER_SESSION_UUID: jO(e.sessionId),
    CLAUDE_RUNNER_EXIT_REASON: e.exitReason,
    CLAUDE_RUNNER_DEBUG_LOG_PATH: e.debugLogPath,
    CLAUDE_RUNNER_WORKSPACE_PATHS: e.workspacePaths.join(":"),
    CLAUDE_RUNNER_API_BASE_URL: e.apiBaseUrl,
    CLAUDE_RUNNER_CLIENT_PLATFORM: QJe(e.clientPlatform),
    CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.sessionAccessToken
  };
  e.onStatus(`[runner:hook] post-session hook starting (session exit: ${e.exitReason}, budget ${e.timeoutMs}ms, via ${e.hookPath})`);
  let s = Date.now(), c = () => {}, r = new Promise(w => {
    c = w;
  }), t = Ve(e.hookPath, [], {
    cwd: e.cwd,
    env: Xe(e.gitConfigPins?.length ? G$o(n) : n, qe(e.gitConfigPins, e.gitEnvironment, e.gitConfigLegacyParams), {
      legacyParams: e.gitConfigLegacyParams
    }),
    stdio: [ "ignore", "pipe", "pipe" ],
    windowsHide: !0,
    ...Dl("hooks"),
    detached: !0
  }), i = Ze();
  i.increment();
  let d = !1, a = !1, h = [], E = () => {
    if (d) return;
    d = !0, i.decrement();
    for (let w of h) clearTimeout(w);
    c();
  }, y = w => {
    let L = t.pid;
    if (L === void 0) {
      t.kill(w);
      return;
    }
    if (L <= 1) return;
    try {
      process.kill(-L, w);
    } catch {
      t.kill(w);
    }
  }, T = e.timeoutMs > 0 ? e.timeoutMs : 1;
  h.push(setTimeout((w, L, H, G) => {
    if (L.exitCode !== null || L.signalCode !== null) return;
    a = !0, w(`[runner:hook:post-session] timed out after ${H}ms, sending SIGTERM to the hook's process group (pgid=${L.pid})`), 
    G("SIGTERM");
  }, T, e.onDebug, t, T, y), setTimeout((w, L, H) => {
    if (!a) return;
    w(`[runner:hook:post-session] still running after SIGTERM, sending SIGKILL to the hook's process group (pgid=${L.pid})`), 
    H("SIGKILL");
  }, Math.min(T + je, 2147483647), e.onDebug, t, y), setTimeout((w, L, H) => {
    w(`[runner:hook:post-session] resolved without 'close' (${Date.now() - H}ms, grandchild likely holding stdio pipes; ignored)`), 
    L();
  }, Math.min(T + je + 1e3, 2147483647), e.onStatus, E, s));
  let P = "", k = "", b = w => {
    let L = w.split(`\n`), H = L.pop() ?? "";
    for (let G of L) e.onDebug(`[runner:hook:post-session] ${Xc(G)}`);
    return H;
  };
  return t.stdout.on("data", w => {
    P += w.toString(), P = b(P);
  }), t.stderr.on("data", w => {
    k += w.toString(), k = b(k);
  }), t.on("error", w => {
    e.onStatus(`[runner:hook:post-session] spawn error (ignored): ${Xc(w instanceof Error ? w.message : String(w))}`), 
    E();
  }), t.on("close", w => {
    if (P) e.onDebug(`[runner:hook:post-session] ${Xc(P)}`);
    if (k) e.onDebug(`[runner:hook:post-session] ${Xc(k)}`);
    let L = Date.now() - s;
    if (a) e.onStatus(`[runner:hook:post-session] killed after timeout (${L}ms, ignored)`); else if (w !== 0) e.onStatus(`[runner:hook:post-session] exited ${w ?? "via signal"} (${L}ms, ignored)`); else e.onStatus(`[runner:hook:post-session] done (exit 0, ${L}ms)`);
    E();
  }), r;
}

export { Rcn, m0r, M$o, JJe, H$o, D$o, dWe, zYn, xcn, _6, Iae, L$o, MEe, GYn, Pht, Pcn, Icn, HEe, g0r, QJe, CFt, N$o, $$o, pte, F$o, U$o, Ocn, Mcn, B$o, j$o, W$o, z$o, RFt, Iht, VYn, iBs, G$o, aBs, lBs, dBs, KYn, ZJe, h0r, qYn, y0r };
