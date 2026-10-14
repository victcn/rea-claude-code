// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { PK, jZ } from "./chunk-xywp7esx.js";

import { z } from "./chunk-bmq0vae0.js";

import { x, j, l, W } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { _, Y, mq, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { so } from "./chunk-3ykz5st8.js";

import { gn } from "./chunk-yxennhe9.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { p } from "./chunk-jkzenvsk.js";

import { eD, _h } from "./chunk-jnzpsr0d.js";

import { e8 } from "./chunk-gwz0gszt.js";

import { b2 } from "./chunk-pderawq8.js";

import { dk } from "./chunk-tz958kay.js";

import { fHt, mHt } from "./chunk-584ft4bq.js";

import { CO } from "./chunk-3apvz0s4.js";

import { ojt, $Br, FBr, azo } from "./chunk-g0kp7vjb.js";

import { jGo } from "./chunk-stazym0q.js";

import { uj, NIe } from "./chunk-az0s2zrf.js";

import { o, v, M, u, U, Sa } from "./chunk-cvcg6n1z.js";

import { Is } from "./chunk-p35rdtee.js";

import { O } from "./chunk-1xnsr4dy.js";

import { randomUUID as me } from "crypto";

import { join as ue } from "path";

function ke(r) {
  return typeof r === "object" && r !== null && "type" in r && (r.type === "token_update" || r.type === "auth_401_result");
}

function ye(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "auth_401";
}

var we = 3e5, re = 24e4, ve = 3e5, ge = 3e4, Te = 864e5;

function ce() {
  return Fe.state("daemon-auth-cooldown");
}

function Ae() {
  return Fe.state("daemon-auth-status");
}

function szo(r, n, c, i, f, w = () => !1) {
  let h = () => ({
    usesLoginOffFirstParty: c()
  }), m, g = !1, k = null, y = new Set, S = null, P = null;
  function R() {
    return P ??= import("./chunk-8rkfm3cn.js");
  }
  function N(s) {
    let a = {
      type: "token_update",
      accessToken: s
    };
    for (let T of y) try {
      T.send(a);
    } catch {}
  }
  async function H() {
    let a = await (await R()).getClaudeAIOAuthTokensAsync(f);
    if (a?.accessToken && a.accessToken !== m?.accessToken) m = {
      accessToken: a.accessToken,
      scopes: a.scopes,
      subscriptionType: a.subscriptionType ?? null,
      rateLimitTier: a.rateLimitTier ?? null
    }, N(m.accessToken);
    B(a?.expiresAt ?? null);
  }
  let q, X = !1;
  function E(s) {
    if (q = s, S || r.aborted) return;
    if (k) clearTimeout(k), k = null;
    n("auth: no token found, will re-check keychain every 30s"), S = setInterval(function() {
      R().then(async T => {
        let A = T.isUsing3PServices() && !c() && !w();
        if (A !== X) X = A, n(A ? "auth: re-check skips the keychain (3P provider, no worker uses the token)" : "auth: re-check reads the keychain again");
        if (A) return;
        T.clearOAuthTokenCache();
        let e = await T.getClaudeAIOAuthTokensAsync(f), b;
        if (e?.accessToken && e.accessToken !== q && e.expiresAt && e.expiresAt > Date.now()) b = "auth: token found via keychain re-check"; else if (e?.refreshToken && await T.checkAndRefreshOAuthTokenIfNeeded({
          credentials: f,
          storageV5: i,
          ...h()
        })) b = "auth: token refreshed via keychain re-check retry";
        if (b) {
          if (await H(), m && S) clearInterval(S), S = null, n(b);
        }
      }).catch(T => n(`auth: keychain re-check error: ${T}`));
    }, ge), S.unref();
  }
  function B(s) {
    if (k) clearTimeout(k), k = null;
    if (!s || r.aborted) return;
    let a = Math.min(Math.max(s - Date.now() - re, 5e3), Te);
    n(`auth: scheduling proactive refresh in ${Math.round(a / 1e3)}s`), k = setTimeout(V, a), 
    k.unref();
  }
  async function V() {
    if (r.aborted) return;
    try {
      n("auth: proactive refresh starting");
      let s = await R(), a = m?.accessToken, T = await s.checkAndRefreshOAuthTokenIfNeeded({
        credentials: f,
        storageV5: i,
        ...h()
      });
      s.clearOAuthTokenCache();
      let A = await s.getClaudeAIOAuthTokensAsync(f), e = A?.expiresAt ?? null, b = e === null || e > Date.now() + we;
      if (A?.accessToken && (T || A.accessToken !== a || b) && (e === null || e > Date.now() + re)) {
        await H(), n(T ? "auth: proactive refresh succeeded" : "auth: token still valid (cross-process refresh or not yet due)");
        return;
      }
      if (A?.accessToken && e !== null && e > Date.now()) {
        n("auth: proactive refresh failed, retrying in ~60s (token still valid)"), B(Date.now() + 6e4 + re);
        return;
      }
      n("auth: proactive refresh failed, signalling re-auth required");
      let C = A?.accessToken ?? a;
      m = void 0, await Q(), E(C);
    } catch (s) {
      n(`auth: proactive refresh error: ${s}`), B(Date.now() + 6e4 + re);
    }
  }
  async function Z(s) {
    if (g) return n("auth: 401 ignored (3P provider active, no OAuth)"), !1;
    n("auth: handling 401");
    let a = await R();
    if (await a.handleOAuth401Error(s, f, i, h())) return a.clearOAuthTokenCache(), 
    await H(), n("auth: 401 recovery succeeded"), !0;
    n("auth: 401 recovery failed, signalling re-auth required"), m = void 0, await Q(), 
    a.clearOAuthTokenCache();
    let A = await a.getClaudeAIOAuthTokensAsync(f);
    if (A?.accessToken !== void 0 && A.accessToken !== s) return await H(), !0;
    return E(s), !1;
  }
  let D = null;
  function Q() {
    if (D) return D;
    return D = oe().finally(() => {
      D = null;
    }), D;
  }
  async function oe() {
    let s = await R();
    if (s.getAnthropicApiKey()) {
      n("auth: browser login skipped (API key auth available)");
      return;
    }
    if (s.isUsing3PServices() && !c()) {
      n("auth: browser login skipped (3P provider, no OAuth-consuming worker)");
      return;
    }
    let a = Ee(), T = ue(a, "daemon-auth-cooldown"), A = ue(a, "daemon-auth-status.json");
    try {
      let e;
      if (z() && i !== void 0) {
        let C = await i.read([ ce() ]);
        if (!C.ok) throw new x(`v5 cooldown read failed: ${C.error.code}${"telemetryCode" in C.error && C.error.telemetryCode ? ` (${C.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown read failed");
        let I = C.value.items[0];
        e = I.found ? Buffer.from(I.value).toString("utf8") : null;
      } else e = await gn().read(T);
      let b = e === null ? NaN : parseInt(e, 10);
      if (!Number.isNaN(b) && Date.now() - b < ve) {
        n("auth: browser login skipped (cooldown)");
        return;
      }
    } catch (e) {
      if (!W(e)) n(`auth: cooldown read error: ${e}`);
    }
    try {
      if (await gn().mkdir(a), z() && i !== void 0) {
        let e = await i.write(ce(), String(Date.now()), {
          publishDiscipline: "inPlace"
        });
        if (!e.ok) throw new x(`v5 cooldown write failed: ${e.error.code}${"telemetryCode" in e.error && e.error.telemetryCode ? ` (${e.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown write failed");
      } else await gn().write(T, String(Date.now()));
    } catch (e) {
      n(`auth: cooldown write error: ${e}`);
    }
    try {
      let {execFileNoThrow: e} = await import("./chunk-3t4dzk1v.js");
      e("notify-send", [ "Claude", "Your Claude assistant needs re-authentication" ]);
    } catch {}
    try {
      if (z() && i !== void 0) {
        let e = await i.write(Ae(), _({
          status: "auth_required",
          since: Date.now()
        }), {
          publishDiscipline: "inPlace"
        });
        if (!e.ok) throw new x(`v5 status write failed: ${e.error.code}${"telemetryCode" in e.error && e.error.telemetryCode ? ` (${e.error.telemetryCode})` : ""}`, "daemon-auth v5 status write failed");
      } else await gn().write(A, _({
        status: "auth_required",
        since: Date.now()
      }));
    } catch (e) {
      n(`auth: status write error: ${e}`);
    }
    n("auth: headless daemon cannot complete OAuth \u2014 run `claude auth login` to refresh");
  }
  function F(s) {
    if (!ye(s)) return;
    Z(s.failedToken).then(a => {
      for (let T of y) try {
        let A = {
          type: "auth_401_result",
          refreshed: a,
          requestId: s.requestId
        };
        T.send(A);
      } catch {}
    }).catch(a => {
      n(`auth: 401 handler error: ${a}`);
      for (let T of y) try {
        let A = {
          type: "auth_401_result",
          refreshed: !1,
          requestId: s.requestId
        };
        T.send(A);
      } catch {}
    });
  }
  function ee(s) {
    if (y.add(s), s.on("message", F), m) try {
      let a = {
        type: "token_update",
        accessToken: m.accessToken
      };
      s.send(a);
    } catch {}
  }
  function ne(s) {
    s.removeListener("message", F), y.delete(s);
  }
  let G = (async () => {
    if (r.aborted) return;
    try {
      let s = await R(), a = await s.getClaudeAIOAuthTokensAsync(f);
      if (!a?.accessToken && s.isUsing3PServices()) {
        g = !0, n("auth: 3P provider active, skipping OAuth refresh loop");
        return;
      }
      if (a?.accessToken) m = {
        accessToken: a.accessToken,
        scopes: a.scopes,
        subscriptionType: a.subscriptionType ?? null,
        rateLimitTier: a.rateLimitTier ?? null
      }, B(a.expiresAt ?? null);
      await s.checkAndRefreshOAuthTokenIfNeeded({
        credentials: f,
        storageV5: i,
        ...h()
      }), await H();
    } catch (s) {
      n(`auth: init error: ${s}`);
    }
  })();
  return G.then(() => {
    if (r.aborted || m || g) return;
    E();
  }), r.addEventListener("abort", () => {
    if (k) clearTimeout(k), k = null;
    if (S) clearInterval(S), S = null;
  }, {
    once: !0
  }), {
    ready: G,
    getAccessToken() {
      return m?.accessToken;
    },
    getAuthSnapshot() {
      return m;
    },
    attachWorker: ee,
    detachWorker: ne,
    dispose: te,
    [Symbol.dispose]: te
  };
  function te() {
    if (k) clearTimeout(k), k = null;
    if (S) clearInterval(S), S = null;
    for (let s of y) s.removeListener("message", F);
    y.clear();
  }
}

function de(r, n, c) {
  if (typeof process.send === "function") {
    let m = function(g) {
      let k = h.get(g);
      if (k) h.delete(g), k.resolve(!1);
    }, w = r;
    process.on("message", g => {
      if (!ke(g)) return;
      if (g.type === "token_update") w = g.accessToken;
    });
    let h = new Map;
    return process.on("message", g => {
      if (typeof g === "object" && g !== null && "type" in g && g.type === "auth_401_result") {
        let k = g, y = h.get(k.requestId);
        if (y) clearTimeout(y.timer), h.delete(k.requestId), y.resolve(k.refreshed);
      }
    }), process.channel?.unref(), {
      getAccessToken() {
        return w;
      },
      reportAuth401(g) {
        let k = me(), y = {
          type: "auth_401",
          failedToken: g,
          requestId: k
        };
        return new Promise(S => {
          let P = setTimeout(m, 3e4, k);
          P.unref(), h.set(k, {
            resolve: S,
            timer: P
          });
          try {
            process.send(y);
          } catch {
            clearTimeout(P), h.delete(k), S(!1);
          }
        });
      }
    };
  }
  let i = null;
  async function f() {
    return i ??= await import("./chunk-8rkfm3cn.js");
  }
  return f(), {
    getAccessToken() {
      return i?.getClaudeAIOAuthTokens()?.accessToken;
    },
    async reportAuth401(w) {
      return (await f()).handleOAuth401Error(w, n, c, {
        usesLoginOffFirstParty: !0
      });
    }
  };
}

function K(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "shutdown";
}

function le(r) {
  if (!K(r) || typeof r !== "object" || r === null || !("cause" in r)) return;
  return r.cause === "upgrade" || r.cause === "reload" || r.cause === "yield" ? r.cause : void 0;
}

var ie = p(() => u({
  dir: o(),
  name: o().optional(),
  spawnMode: U([ "same-dir", "worktree" ]).default("same-dir"),
  capacity: v().int().positive().default(32),
  permissionMode: Sa(_h, U(eD)).optional(),
  sandbox: M().default(!1),
  sessionTimeoutSeconds: v().int().positive().optional(),
  createSessionOnStart: M().default(!1)
}).strict()), be = 6e4, _e = 500, fe = async (r, n, c, i, f, w) => {
  let h = ie().parse(r), {initializeErrorLogSink: m} = await import("./chunk-py26txvx.js"), {initializeAnalyticsSink: g} = await import("./chunk-jphqj2yx.js");
  m(), g();
  let k = () => CO() ?? i.getAccessToken();
  if (!k()) c(fHt), process.exit(1);
  let [{initialize1PEventLogging: y}, {initializeGrowthBook: S, getFeatureValue_CACHED_MAY_BE_STALE: P, getUserAttributes: R}, {flushAnalyticsSinks: N}, {populateOAuthAccountInfoIfNeeded: H}] = await Promise.all([ import("./chunk-nry35a89.js"), import("./chunk-qt993hka.js"), import("./chunk-vs9zzmzs.js"), import("./chunk-9j8chrt1.js") ]);
  if (y(f), await H(w, f).catch(e => {
    t(`[daemon:remoteControl] oauthAccount backfill failed (${e instanceof Error ? e.name : typeof e})`);
  }), !R().organizationUUID) t("[daemon:remoteControl] no org identity; GrowthBook not initialized, gates serve cached/default values"); else S().catch(e => {
    t(`[daemon:remoteControl] GrowthBook init failed (${e instanceof Error ? e.name : typeof e}); feature gates keep serving the disk cache`, {
      level: "error"
    });
  });
  if (!e8()) {
    let e = await NBr();
    if (e !== void 0) c(e.reason), await N(), process.exit(e.retry ? 1 : uj);
  }
  let {runBridgeHeadless: q, BridgeHeadlessPermanentError: X} = await import("./chunk-3v7746mh.js"), E = null, B = !1, V = e => {
    if (typeof process.send !== "function") return;
    try {
      process.send(e);
    } catch {}
  }, Z = e => V({
    type: "rc_busy",
    busy: e
  }), D = () => {
    if (E !== null) clearInterval(E), E = null;
  }, Q = e => {
    let b = e > 0;
    if (b !== B) B = b, Z(b);
    if (b) {
      if (E === null) E = setInterval(C => C(!0), be, Z), E.unref?.();
    } else D();
  }, oe = P("tengu_daemon_upgrade_defer_busy", !0), F = null, ee = () => {}, ne = new Promise(e => {
    ee = e;
  }), G = e => {
    if (K(e)) F = le(e) ?? null, ee();
  };
  process.on("message", G);
  let te = async () => (await Promise.race([ ne, J(_e) ]), F), s, a, T;
  try {
    let e = await import("./chunk-ttebqhdm.js"), b = e.liveToolHostChecks(h.dir, w), C = e.liveToolHostSwitches({
      dir: h.dir,
      checks: b,
      isOfferingFolder: () => s?.getToolHostAdvert().kind === "advertise",
      hasAccessToken: () => Boolean(k())
    }), I, De = !1;
    s = await e.watchToolHostAdvert({
      dir: h.dir,
      log: c,
      checks: b,
      refuse: e.helperRefusal,
      onVerdict: se => {
        if (I !== void 0 && e.isSwitchedOffRemotely(se)) I.sweep("gate_off").catch(L => d(j(L)));
      }
    }), a = se => {
      try {
        I = e.buildToolHostWorkHandler({
          folder: h.dir,
          switches: C,
          ...se,
          onLiveCountChange: L => V({
            type: "rc_serving_tools",
            count: L
          })
        }, {
          unattendedGrant: void 0,
          withoutShellSecrets: !1
        });
      } catch (L) {
        d(j(L));
      }
      return I;
    };
    let ae;
    T = async () => {
      if (I !== void 0) ae ??= e.sweepToolHostForShutdown(I);
      await ae;
    }, n.addEventListener("abort", () => void T?.(), {
      once: !0
    });
  } catch (e) {
    d(j(e));
  }
  let A = !1;
  try {
    await q({
      dir: h.dir,
      name: h.name,
      spawnMode: h.spawnMode,
      capacity: h.capacity,
      permissionMode: h.permissionMode,
      sandbox: h.sandbox,
      createSessionOnStart: h.createSessionOnStart,
      getAccessToken: k,
      onAuth401: i.reportAuth401,
      log: c,
      storageV5: f,
      credentials: w,
      onBusyChange: Q,
      persistActiveSessionsOnShutdown: oe,
      awaitShutdownCause: te,
      getToolHostAdvert: s?.getToolHostAdvert,
      createToolHostHandler: a
    }, n);
  } catch (e) {
    if (!(e instanceof X)) throw e;
    c(e.message), A = !0;
  } finally {
    await (T?.()), D(), s?.stop(), process.off("message", G), await N();
  }
  if (A) process.exit(uj);
};

async function NBr() {
  let [{getBridgeBlockedCode: r}, {checkBridgeMinVersion: n}, {getUserAttributes: c}] = await Promise.all([ import("./chunk-d37r4kj2.js"), import("./chunk-e4szgxgr.js"), import("./chunk-qt993hka.js") ]);
  if (!c().organizationUUID) return {
    reason: pe("token_scope_limited"),
    retry: !1
  };
  let i = await r();
  if (i !== null) return {
    reason: pe(i),
    retry: i === "flags_unreachable" || i === "not_signed_in"
  };
  let f = n();
  return f === null ? void 0 : {
    reason: f,
    retry: !1
  };
}

function pe(r) {
  return `Remote Control cannot start (${r}). Run \`claude remote-control\` in a terminal to see why.`;
}

async function njt(r, n, c) {
  return so("daemon_rc_add", async () => {
    let i = "added";
    return await ojt(f => {
      let w = $Br(f.remoteControl), h = w.findIndex(m => m.dir === r.dir);
      if (h >= 0) {
        let m = Is(r, g => g !== void 0);
        w[h] = {
          ...w[h],
          ...m
        }, i = "updated";
      } else w.push(r), i = "added";
      f.remoteControl = w;
    }, n, c), i;
  });
}

async function rjt(r, n, c) {
  return so("daemon_rc_remove", async () => {
    await ojt(i => {
      let f = $Br(i.remoteControl), w = f.filter(h => h.dir !== r);
      if (w.length === f.length) return !1;
      if (w.length === 0) delete i.remoteControl; else i.remoteControl = w;
    }, n, c);
  });
}

var he = p(() => u({
  intervalSeconds: v().positive().default(30)
}).strict()), Yae = {
  heartbeat: {
    schema: he,
    run: Ce,
    needsOAuth: !1
  },
  scheduled: {
    schema: FBr,
    run: azo,
    needsOAuth: !0
  },
  remoteControl: {
    schema: ie,
    run: fe,
    needsOAuth: !0
  }
};

function Y7e(r) {
  return r === "heartbeat" || e8() || r === "remoteControl" && jGo();
}

async function Ce(r, n, c, i) {
  let {intervalSeconds: f} = he().parse(r);
  c(`heartbeat worker started (interval=${f}s)`);
  while (!n.aborted) if (await J(f * 1e3, n), !n.aborted) c("heartbeat");
}

function Re(r, n) {
  let c = () => n.abort();
  r.on("SIGTERM", c), r.on("SIGINT", c), r.on("message", i => {
    if (K(i)) n.abort();
  });
}

async function _qs(r, n) {
  if (!r || !(r in Yae)) process.stderr.write(`unknown worker kind: ${r}\n`), process.exit(2);
  if (!Y7e(r)) process.stderr.write(`worker kind '${r}' is not available.\n`), process.exit(uj);
  let c = Yae[r], i = [];
  for await (let y of process.stdin) i.push(y);
  let f;
  try {
    f = Y(Buffer.concat(i).toString("utf8"));
  } catch (y) {
    process.stderr.write(`invalid config JSON on stdin: ${l(y)}\n`), process.exit(2);
  }
  let w = c.schema().safeParse(f.config);
  if (!w.success) process.stderr.write(`config validation failed: ${w.error.message}\n`), 
  process.exit(2);
  let h = new AbortController;
  Re(process, h), xe(h);
  let m = b2(n), g = dk(m), k = de(f.initialAccessToken, g, m);
  if (z() && m !== void 0) {
    mq({
      storageV5: m
    }), PK(m);
    let [{composePolicyLimitsClient: y, primePolicyLimitsCache: S}, {primeFastPathCredentials: P}, {setGrowthBookCredentials: R, setGrowthBookStorageBackend: N}] = await Promise.all([ import("./chunk-egjan19g.js"), import("./chunk-fv97hf0r.js"), import("./chunk-qt993hka.js") ]);
    y({
      storageV5: m,
      credentials: g
    }), R(g), N(m), await P(g), await S(m), await jZ(m);
  }
  try {
    await c.run(w.data, h.signal, y => process.stdout.write(y + `\n`), k, m, g);
  } catch (y) {
    if (Ie(y) === 429) process.stdout.write(`rate limited (429): ${l(y)}\n`), process.exit(NIe);
    if (Pe(y)) process.stdout.write(`folder already served: ${l(y)}\n`), process.exit(NIe);
    throw y;
  }
}

function Pe(r) {
  let n = r;
  for (let c = 0; n != null && c < 8; c++) {
    if (n.errorType === mHt) return !0;
    n = n.cause;
  }
  return !1;
}

function Ie(r) {
  let n = r;
  for (let c = 0; n != null && c < 8; c++) {
    let i = n.status;
    if (typeof i === "number") return i;
    let f = n.response?.status;
    if (typeof f === "number") return f;
    n = n.cause;
  }
  return;
}

var Oe = 3e4;

function We(r) {
  try {
    return process.kill(r, 0), !0;
  } catch {
    return !1;
  }
}

function xe(r, n) {
  let c = {
    ppid: () => process.ppid,
    isAlive: We,
    log: h => process.stdout.write(h + `\n`),
    onGone: () => process.exit(0),
    intervalMs: Oe,
    exitGraceMs: 2e3,
    ...n
  }, i = c.ppid();
  if (i <= 1) return;
  let f = !1, w = setInterval(() => {
    if (f) return;
    if (!(!c.isAlive(i) || O() !== "windows" && c.ppid() !== i)) return;
    f = !0, clearInterval(w), c.log("parent supervisor gone \u2014 exiting"), r.abort(), 
    setTimeout(c.onGone, c.exitGraceMs).unref();
  }, c.intervalMs);
  return w.unref(), w;
}

export { szo, NBr, njt, rjt, Yae, Y7e, _qs };
