// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { At } from "./chunk-vps0k559.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { l } from "./chunk-b0z4bv3v.js";

import { FTo, con } from "./chunk-s2t7g8m9.js";

import { zn } from "./chunk-3pqddg8f.js";

import { i } from "./chunk-hedpgw9m.js";

import { m, f, so } from "./chunk-3ykz5st8.js";

import { KS } from "./chunk-46phtgr7.js";

import { rje } from "./chunk-9yajep3y.js";

import { Sh, mu, sd } from "./chunk-w0q7jqcp.js";

import { t } from "./chunk-kawq2919.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import { X } from "./chunk-1zg3hbfq.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { Ckr, fpe, rSo, Ag, OR, zN, eut } from "./chunk-3zb1ef23.js";

import { bUe, mHt } from "./chunk-584ft4bq.js";

import { d2o } from "./chunk-ddk6c8cf.js";

import { Qo, Yg } from "./chunk-eha3vdmz.js";

class Ox extends Error {
  status;
  errorType;
  suppressible;
  constructor(e, n, p, h = !1) {
    super(e);
    this.name = "BridgeFatalError", this.status = n, this.errorType = p, this.suppressible = h;
  }
}

function I1r(e) {
  function n(r) {
    e.onDebug?.(r);
  }
  let p = 0, h = 100;
  async function u(r) {
    let o = {
      Authorization: `Bearer ${r}`,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-beta": FTo.header,
      "x-environment-runner-version": e.runnerVersion,
      "User-Agent": Qo()
    }, a = await (e.getTrustedDeviceToken?.());
    if (a) o["X-Trusted-Device-Token"] = a;
    return o;
  }
  function v() {
    let r = e.getAccessToken();
    if (!r) throw Error(bUe);
    return r;
  }
  async function w(r, o) {
    let a = v(), s = await r(a);
    if (s.status !== 401) return s;
    if (!e.onAuth401) return n(`[bridge:api] ${o}: 401 received, no refresh handler`), 
    s;
    if (n(`[bridge:api] ${o}: 401 received, attempting token refresh`), await e.onAuth401(a)) {
      n(`[bridge:api] ${o}: Token refreshed, retrying request`);
      let _ = v(), T = await r(_);
      if (T.status !== 401) return T;
      n(`[bridge:api] ${o}: Retry after refresh also got 401`);
    } else n(`[bridge:api] ${o}: Token refresh failed`);
    return s;
  }
  let E = {
    async registerBridgeEnvironment(r, o) {
      return so("bridge_environment_register", async () => {
        n(`[bridge:api] POST /v1/environments/bridge bridgeId=${r.bridgeId}`);
        let a, s = r.getToolHostAdvert?.() ?? {
          kind: "withdraw"
        };
        switch (s.kind) {
         case "advertise":
          a = {
            tool_host: "2",
            tool_host_cc_version: s.advert.cliVersion,
            tool_host_platform: s.advert.platform
          };
          break;

         case "withdraw":
          if (r.reuseEnvironmentId) a = {
            tool_host: "",
            tool_host_cc_version: "",
            tool_host_platform: "",
            tool_host_blocker: ""
          };
          break;

         case "unknown":
          break;
        }
        let g = {
          machine_name: r.machineName,
          ...r.machineId != null && {
            machine_id: r.machineId
          },
          directory: r.dir,
          branch: r.branch,
          git_repo_url: rje(r.gitRepoUrl),
          max_sessions: r.maxSessions,
          metadata: {
            worker_type: r.workerType,
            ...r.machineId != null && {
              machine_id: r.machineId
            },
            ...a
          },
          ...r.hostProfile && {
            host: r.hostProfile
          },
          ...r.reuseEnvironmentId && {
            environment_id: r.reuseEnvironmentId
          }
        }, _ = await w(async T => At.post(`${e.baseUrl}/v1/environments/bridge`, g, {
          headers: await u(T),
          timeout: 15e3,
          signal: o,
          validateStatus: y => y < 500
        }), "Registration");
        if (_.status === 409 && eut(_.data) === mHt) throw new Ox(zN(_.data) ?? "This folder is already served by another Claude Code on this device. Stop it first.", 409, mHt);
        return k(_.status, _.data, "Registration", _.headers), n(`[bridge:api] POST /v1/environments/bridge -> ${_.status} environment_id=${_.data.environment_id}`), 
        n(`[bridge:api] >>> ${Ckr({
          ...g,
          ...g.host && {
            host: {
              tools: g.host.tools.length,
              mcp: g.host.mcp_servers?.length ?? 0
            }
          }
        })}`), n(`[bridge:api] <<< ${Ckr(_.data)}`), _.data;
      }, x);
    },
    async pollForWork(r, o, a, s, g) {
      Sh(r, "environmentId");
      let _ = p;
      p = 0;
      let T = {};
      if (s !== void 0) T.reclaim_older_than_ms = s;
      if (g !== void 0) T.poll_interval_ms = g;
      let y = await At.get(`${e.baseUrl}/v1/environments/${r}/work/poll`, {
        headers: await u(o),
        params: Object.keys(T).length > 0 ? T : void 0,
        timeout: 1e4,
        signal: a,
        validateStatus: P => P < 500
      });
      if (k(y.status, y.data, "Poll", y.headers), !y.data) {
        if (p = _ + 1, p === 1 || p % h === 0) n(`[bridge:api] GET .../work/poll -> ${y.status} (no work, ${p} consecutive empty polls)`);
        return null;
      }
      let O = y.data.data?.mode;
      if (O != null) {
        let {id: P, data: M} = y.data;
        return n(`[bridge:api] GET .../work/poll -> ${y.status} workId=${fpe(P)} type=${rSo(M.type)} mode=${rSo(O)} sessionId=${fpe(M.id)}`), 
        y.data;
      }
      return n(`[bridge:api] GET .../work/poll -> ${y.status} workId=${y.data.id} type=${y.data.data?.type}${y.data.data?.id ? ` sessionId=${y.data.data.id}` : ""}`), 
      n(`[bridge:api] <<< ${Ckr(y.data)}`), y.data;
    },
    async acknowledgeWork(r, o, a, s = o) {
      Sh(r, "environmentId"), Sh(o, "workId"), n(`[bridge:api] POST .../work/${s}/ack`);
      let g = await At.post(`${e.baseUrl}/v1/environments/${r}/work/${o}/ack`, {}, {
        headers: await u(a),
        timeout: 1e4,
        validateStatus: _ => _ < 500
      });
      k(g.status, g.data, "Acknowledge", g.headers), n(`[bridge:api] POST .../work/${s}/ack -> ${g.status}`);
    },
    async stopWork(r, o, a, s, g = o) {
      Sh(r, "environmentId"), Sh(o, "workId"), n(`[bridge:api] POST .../work/${g}/stop force=${s}`);
      let _ = await At.post(`${e.baseUrl}/v1/environments/${r}/work/${o}/stop`, {
        force: s
      }, {
        headers: await u(a),
        timeout: 1e4,
        validateStatus: T => T < 500
      });
      k(_.status, _.data, "StopWork"), n(`[bridge:api] POST .../work/${g}/stop -> ${_.status}`);
    },
    async deregisterEnvironment(r) {
      Sh(r, "environmentId"), n(`[bridge:api] DELETE /v1/environments/bridge/${r}`);
      let o = await w(async a => At.delete(`${e.baseUrl}/v1/environments/bridge/${r}`, {
        headers: await u(a),
        timeout: 1e4,
        validateStatus: s => s < 500
      }), "Deregister");
      k(o.status, o.data, "Deregister"), n(`[bridge:api] DELETE /v1/environments/bridge/${r} -> ${o.status}`);
    },
    async markEnvironmentOffline(r, o) {
      Sh(r, "environmentId");
      let a = `/v1/environments/bridge/${r}/offline`;
      n(`[bridge:api] POST ${a}`);
      let s = await At.post(`${e.baseUrl}${a}`, void 0, {
        headers: await u(o),
        timeout: 5e3,
        validateStatus: g => g < 500
      });
      k(s.status, s.data, "MarkOffline"), n(`[bridge:api] POST ${a} -> ${s.status}`);
    },
    async archiveSession(r) {
      Sh(r, "sessionId");
      let o = e.useCcrV2SessionCrud?.() ? `/v1/code/sessions/${sd(r)}/archive` : `/v1/sessions/${mu(r)}/archive`;
      n(`[bridge:api] POST ${o}`);
      let a = await w(async s => At.post(`${e.baseUrl}${o}`, {}, {
        headers: await u(s),
        timeout: 1e4,
        validateStatus: g => g < 500
      }), "ArchiveSession");
      if (a.status === 409) {
        n(`[bridge:api] POST ${o} -> 409 (already archived)`);
        return;
      }
      k(a.status, a.data, "ArchiveSession"), n(`[bridge:api] POST ${o} -> ${a.status}`);
    },
    async reconnectSession(r, o, a) {
      return so("bridge_session_reconnect", async () => {
        Sh(r, "environmentId"), Sh(o, "sessionId"), n(`[bridge:api] POST /v1/environments/${r}/bridge/reconnect session_id=${o}`);
        let s = await w(async g => At.post(`${e.baseUrl}/v1/environments/${r}/bridge/reconnect`, {
          session_id: o
        }, {
          headers: await u(g),
          timeout: 1e4,
          signal: a,
          validateStatus: _ => _ < 500
        }), "ReconnectSession");
        k(s.status, s.data, "ReconnectSession"), n(`[bridge:api] POST .../bridge/reconnect -> ${s.status}`);
      }, x);
    },
    async heartbeatWork(r, o, a) {
      Sh(r, "environmentId"), Sh(o, "workId"), n(`[bridge:api] POST .../work/${o}/heartbeat`);
      let s = await At.post(`${e.baseUrl}/v1/environments/${r}/work/${o}/heartbeat`, {}, {
        headers: await u(a),
        timeout: 1e4,
        validateStatus: g => g < 500
      });
      return k(s.status, s.data, "Heartbeat"), n(`[bridge:api] POST .../work/${o}/heartbeat -> ${s.status} lease_extended=${s.data.lease_extended} state=${s.data.state}`), 
      s.data;
    }
  };
  function R(r) {
    return r instanceof Error && "status" in r && typeof r.status === "number" ? `http_${r.status}` : x(r);
  }
  E.refuseToolHost = async (r, o, a, s) => {
    let g = `[bridge:api] POST /v1/code/sessions/${fpe(r)}/tool_hosts/refuse workId=${fpe(o)} code=${a}`;
    try {
      if (Oe() !== "firstParty" || Ct() || !KS("allow_remote_control")) {
        n(`${g} not sent`);
        return;
      }
      await so("bridge_tool_host_refuse", async () => {
        Sh(r, "sessionId"), n(g);
        let _ = await At.post(`${e.baseUrl}/v1/code/sessions/${sd(r)}/tool_hosts/refuse`, {
          work_id: o,
          code: a
        }, {
          headers: {
            ...await u(v()),
            "anthropic-beta": con.header,
            "anthropic-client-feature": "ccr"
          },
          timeout: 5e3,
          signal: s,
          maxRedirects: 0,
          validateStatus: T => T < 500
        });
        k(_.status, _.data, "RefuseToolHost"), n(`${g} -> ${_.status}`);
      }, R);
    } catch (_) {
      n(`${g} failed (${R(_)}); not retried`);
    }
  };
  async function A(r) {
    let {"anthropic-beta": o, ...a} = await u(r);
    return {
      ...a,
      "anthropic-client-platform": Yg(),
      "anthropic-client-version": e.runnerVersion
    };
  }
  function S(r) {
    let o = r["retry-after"];
    return typeof o === "string" ? Ag(o) : void 0;
  }
  return E.sessionsWatch = {
    async mintResumeToken(r, o) {
      let {status: a, data: s, headers: g} = await At.get(`${e.baseUrl}/v1/code/sessions?limit=1`, {
        headers: await A(r),
        timeout: 1e4,
        signal: o,
        maxRedirects: 0,
        validateStatus: () => !0
      });
      n(`[bridge:api] GET /v1/code/sessions?limit=1 -> ${a}`);
      let _ = s !== null && typeof s === "object" && "resume_token" in s ? s.resume_token : void 0;
      return {
        status: a,
        retryAfterMs: S(g),
        ...typeof _ === "string" && {
          resumeToken: _
        }
      };
    },
    async open(r, o, a) {
      let {status: s, data: g, headers: _} = await At.get(`${e.baseUrl}/v1/code/sessions/watch?include_trigger_sessions=true&exclude_tags=-`, {
        headers: {
          ...await A(r),
          Accept: "text/event-stream",
          "Last-Event-ID": o
        },
        responseType: "stream",
        timeout: 0,
        signal: a,
        maxRedirects: 0,
        validateStatus: () => !0
      });
      n(`[bridge:api] GET /v1/code/sessions/watch -> ${s}`);
      let T = _["content-type"];
      if (s === 200 && typeof T === "string" && T.includes("text/event-stream")) return {
        status: s,
        body: g
      };
      return g.destroy(), {
        status: s,
        retryAfterMs: S(_)
      };
    }
  }, E;
}

function k(e, n, p, h) {
  if (e === 200 || e === 204) return;
  let u = zN(n), v = N(n);
  switch (e) {
   case 401:
    throw new Ox(`${p}: Authentication failed (401)${u ? `: ${u}` : ""}. ${bUe}`, 401, v);

   case 403:
    if (X_t(v)) throw new Ox("Remote Control session expired.", 403, v);
    throw new Ox(`${p}: Access denied (403)${u ? `: ${u}` : ""}. Check your organization permissions.`, 403, v, OR(n)?.includes("external_poll_sessions"));

   case 404:
    throw new Ox(u ?? `${p}: Not found (404). Remote Control may not be available for this organization.`, 404, v);

   case 410:
    throw new Ox(u ?? "Remote Control session expired.", 410, v ?? "environment_expired");

   case 429:
    {
      let w = Ag(typeof h?.["retry-after"] === "string" ? h["retry-after"] : void 0);
      throw Object.assign(Error(`${p}: Rate limited (429). Polling too frequently.`), w !== void 0 ? {
        status: e,
        retryAfterMs: w
      } : {
        status: e
      });
    }

   default:
    throw Object.assign(Error(`${p}: Failed with status ${e}${u ? `: ${u}` : ""}`), {
      status: e
    });
  }
}

function X_t(e) {
  if (!e) return !1;
  return e.includes("expired") || e.includes("lifetime");
}

function O1r(e) {
  return e.suppressible;
}

function x(e) {
  if (e instanceof Ox) return e.status === 401 ? "auth_failed" : "http_error";
  if (e instanceof Error) {
    if (e.message === bUe) return "no_token";
    if ("status" in e && typeof e.status === "number") return "http_error";
  }
  return "request_failed";
}

function N(e) {
  if (e && typeof e === "object") {
    if ("error" in e && e.error && typeof e.error === "object" && "type" in e.error && typeof e.error.type === "string") return e.error.type;
  }
  return;
}

var ahn = 3, e2o = 20, B = 6e4, D = 36e5, H = 9e5, j = 864e5, U = .25, V = 36e5;

function wXn(e, n = Date.now(), p = Math.random) {
  if (typeof e !== "number" || !Number.isFinite(e) || e * 1e3 < V) return;
  let h = e * 1e3, v = Math.min(Math.max(h / 10, H), j) * (1 + U * p());
  return n + h - v;
}

var t2o = 3e5, n2o = 36e5, r2o = 3, lhn = 5;

async function vXn({api: e, config: n, environmentId: p, activeSessions: h, attempt: u, trigger: v, signal: w}) {
  if (v === "tool_host_advert_changed") t(`[bridge:poll] What this environment advertises changed; re-registering environment ${p} (attempt ${u})`); else if (v === "proactive") t(`[bridge:poll] Environment secret expires soon; re-registering environment ${p} to renew it (attempt ${u})`, {
    level: "info"
  }); else t(`[bridge:poll] Poll returned ${v === "poll_401" ? 401 : 404}; re-registering environment ${p} (attempt ${u}/${ahn})`, {
    level: "warn"
  });
  let E, R;
  try {
    let {hostProfile: r, ...o} = n, a = await d2o(r);
    n.hostProfile = a;
    let s = n.getToolHostAdvert?.();
    R = s, E = await e.registerBridgeEnvironment({
      ...o,
      ...a && {
        hostProfile: a
      },
      ...s && {
        getToolHostAdvert: () => s
      },
      reuseEnvironmentId: p
    }, w);
  } catch (r) {
    let o = r instanceof Error && r.message === bUe ? 401 : I(r), a = o !== void 0;
    if (t(`[bridge:poll] Re-registration of ${p} ${a ? "rejected" : "failed transiently"}: ${l(r)}`, {
      level: a ? "error" : "warn"
    }), !a && R !== void 0 && R.kind !== "unknown" && !C(R, n.registeredToolHostAdvert)) n.registeredToolHostAdvert = "unconfirmed";
    if (w.aborted) return {
      outcome: "transient"
    };
    if (i("tengu_bridge_env_reregister", {
      attempt: u,
      outcome: a ? b("register_rejected") : b("register_transient"),
      trigger: c(v)
    }), o !== void 0) {
      if (v === "tool_host_advert_changed") f("bridge_env_reregister", "advert_register_rejected"); else if (v === "proactive") f("bridge_env_reregister", "proactive_register_rejected"); else m("bridge_env_reregister", "register_rejected");
      return {
        outcome: "fatal",
        reason: "register_rejected",
        status: o,
        message: l(r)
      };
    }
    return {
      outcome: "transient",
      retryAfterMs: M1r(r)
    };
  }
  if (E.environment_id !== p) {
    if (t(`[bridge:poll] Re-registration returned ${E.environment_id}, not ${p}; not adopting it`, {
      level: "warn"
    }), i("tengu_bridge_env_reregister", {
      attempt: u,
      outcome: b("replaced"),
      trigger: c(v)
    }), v === "tool_host_advert_changed") f("bridge_env_reregister", "advert_replaced"); else if (v === "proactive") f("bridge_env_reregister", "proactive_replaced"); else m("bridge_env_reregister", "replaced");
    return await e.deregisterEnvironment(E.environment_id).catch(r => t(`[bridge:poll] Failed to delete replacement environment ${E.environment_id}: ${l(r)}`, {
      level: "warn"
    })), {
      outcome: "fatal",
      reason: "replaced"
    };
  }
  EXn(n, R, !0);
  let A = [ ...h.keys() ];
  if (i("tengu_bridge_env_reregister", {
    attempt: u,
    outcome: b("reregistered"),
    active_sessions: A.length,
    trigger: c(v)
  }), X("info", "bridge_env_reregistered", {
    attempt: u,
    active_sessions: A.length,
    trigger: v
  }), v === "proactive") return t(`[bridge:poll] Environment ${p} re-registered in place; secret renewed`, {
    level: "info"
  }), {
    outcome: "reregistered",
    environmentSecret: E.environment_secret,
    ...E.environment_secret_expires_in !== void 0 && {
      environmentSecretExpiresIn: E.environment_secret_expires_in
    },
    pendingRequeues: []
  };
  t(`[bridge:poll] Environment ${p} re-registered in place; re-queuing ${A.length} session(s)`, {
    level: "info"
  });
  let S = [];
  for (let r of A) {
    if (w.aborted) break;
    if (!h.has(r)) continue;
    if (await dhn(e, p, r, w) !== "done") S.push(r);
  }
  return {
    outcome: "reregistered",
    environmentSecret: E.environment_secret,
    ...E.environment_secret_expires_in !== void 0 && {
      environmentSecretExpiresIn: E.environment_secret_expires_in
    },
    pendingRequeues: S
  };
}

async function o2o({api: e, config: n, environmentId: p, activeSessions: h, pacing: u, signal: v}) {
  let w;
  try {
    let R = n.getToolHostAdvert?.();
    if (R === void 0 || R.kind === "unknown") return;
    if (C(R, n.registeredToolHostAdvert)) {
      u.failures = 0;
      return;
    }
    let A = u.notBefore - Date.now();
    if (A > 0 && A <= D) return;
    w = await vXn({
      api: e,
      config: n,
      environmentId: p,
      activeSessions: h,
      attempt: u.failures + 1,
      trigger: "tool_host_advert_changed",
      signal: v
    });
  } catch (R) {
    if (!v.aborted) d(R);
  }
  let E = w?.outcome === "reregistered" ? w : void 0;
  return u.failures = E ? 0 : u.failures + 1, u.notBefore = Date.now() + Math.min(B * 2 ** u.failures, D), 
  E;
}

function EXn(e, n, p) {
  if (n === void 0 || n.kind === "unknown" && p) return;
  let h = e.registeredToolHostAdvert, u = n.kind === "advertise" ? {
    kind: "advertise",
    advert: n.advert
  } : {
    kind: "withdraw"
  };
  if (e.registeredToolHostAdvert = u, !C(u, h ?? {
    kind: "withdraw"
  })) i("tengu_bridge_tool_host_advert", {
    advertised: u.kind === "advertise"
  });
}

async function dhn(e, n, p, h) {
  try {
    return await e.reconnectSession(n, p, h), "done";
  } catch (u) {
    let v = H1r(u);
    if (t(`[bridge:poll] reconnectSession(${p}) after re-registration ${v ? "rejected" : "failed transiently"}: ${l(u)}`, {
      level: "warn"
    }), v) return "done";
    return h.aborted ? "aborted" : "retry";
  }
}

function C(e, n) {
  if (n === void 0 || n === "unconfirmed") return !1;
  return e.kind === "advertise" && n.kind === "advertise" ? zn(e.advert, n.advert) : e.kind === n.kind;
}

function M1r(e) {
  return e && typeof e === "object" && "retryAfterMs" in e && typeof e.retryAfterMs === "number" ? e.retryAfterMs : void 0;
}

function H1r(e) {
  return I(e) !== void 0;
}

function I(e) {
  if (e instanceof Ox) return e.status;
  if (e && typeof e === "object" && "status" in e && typeof e.status === "number" && e.status >= 400 && e.status < 500 && e.status !== 408 && e.status !== 429) return e.status;
  return;
}

export { Ox, I1r, X_t, O1r, ahn, e2o, wXn, t2o, n2o, r2o, lhn, vXn, o2o, EXn, dhn, M1r, H1r };
