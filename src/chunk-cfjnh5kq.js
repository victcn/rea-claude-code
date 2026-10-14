// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { j, l, jt } from "./chunk-b0z4bv3v.js";

import { J, We } from "./chunk-nvtwm272.js";

import { uae, a } from "./chunk-j016gcgm.js";

import { _, Ou, t } from "./chunk-kawq2919.js";

import { ne, vr } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { XK, RU, xU, C9e } from "./chunk-q6wab2jw.js";

import { aL } from "./chunk-w0q7jqcp.js";

import { aD } from "./chunk-4dwgr3et.js";

import { ar } from "./chunk-nnrb0acr.js";

import { wRo, D0s, Tfe, CRo, Die, Ove, SE, Wp, xm, aS, sI } from "./chunk-dd98x6x7.js";

import { Pm } from "./chunk-cjt10y7b.js";

import { _pt } from "./chunk-xywp7esx.js";

import { Xn } from "./chunk-x35dw27e.js";

import { oee } from "./chunk-46phtgr7.js";

import { CO } from "./chunk-3apvz0s4.js";

import { M6, Cke, dJ } from "./chunk-2a66xf4d.js";

import { Fge } from "./chunk-40h7c36f.js";

import { bf } from "./chunk-s82cb921.js";

import { vu } from "./chunk-v7qc2kz8.js";

import { fpe } from "./chunk-3zb1ef23.js";

import { s3e, n9 } from "./chunk-b47tzzqx.js";

import { Gce, p7, gY } from "./chunk-sqb9meyh.js";

import { zf, ptn } from "./chunk-xmqqa853.js";

import { BGo } from "./chunk-stazym0q.js";

import { M1r, H1r } from "./chunk-hqdddhew.js";

import { jO } from "./chunk-3tedvrs9.js";

import { uj } from "./chunk-az0s2zrf.js";

import { O } from "./chunk-1xnsr4dy.js";

import { N } from "./chunk-hmqkrrtz.js";

import { lstat as Ke } from "fs/promises";

import { join as Je } from "path";

import { randomUUID as ve } from "crypto";

var se = "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED", ke = 2500, ee = 3e3, Re = 1024, Ie = 200, X = /^cse_[A-Za-z0-9_]{1,124}$/, Ae = /^env_[A-Za-z0-9_-]{1,124}$/, ye = new Set([ ...Fge, ...Cke, ...De([ ...CRo, ...xU, "CLAUDE_BRIDGE_OAUTH_TOKEN" ]), ...RU.filter(e => e !== "ANTHROPIC_BASE_URL"), "CLAUDE_BRIDGE_BASE_URL", "CLAUDE_BRIDGE_SESSION_INGRESS_URL", "CLAUDE_REMOTE_TOOLS_BRIDGE_URL", "CLAUDE_BG_AUTH_SNAPSHOT_PATH", "CLAUDE_CODE_ACCOUNT_UUID", "CLAUDE_CODE_ORGANIZATION_UUID", "CLAUDE_CODE_USER_EMAIL", "CLAUDE_CODE_ENVIRONMENT_KIND", "CLAUDE_CODE_SESSION_KIND", "CLAUDE_BG_SESSION_PERMISSION_RULES", "CLAUDE_JOB_DIR" ].map(e => Die(e))), le = new Set([ ...C9e, "CLAUDE_CODE_HOST_CREDS_FILE" ]), Ce = new Set([ ...le, "ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID", "ANTHROPIC_PROFILE", "ANTHROPIC_CONFIG_DIR" ]), Oe = new Set([ ...XK.filter(e => e.startsWith("CLAUDE_CODE_USE_")), "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST" ]);

function be(e, {unattendedGrant: o, withoutShellSecrets: s}) {
  let p = wRo() ? D0s() : void 0;
  if (p === void 0) throw fe();
  let T = Die(p), k = Die(se), S = {
    ...e
  };
  for (let [E, w] of Object.entries(S)) {
    let f = Die(E);
    if (le.has(f) && ae(f, w, e)) throw ue();
    if (ye.has(f) || f === T || f === k || f.endsWith("_FILE_DESCRIPTOR")) delete S[E];
  }
  if (dJ(S), M6(S), S[p] = "1", s) {
    let E = new Set(uae(a));
    for (let w of Ove(S)) if (!(/^(?:CLAUDE|ANTHROPIC)_/.test(w) && E.has(w))) delete S[w];
    delete S.SSH_AGENT_PID, Object.assign(S, Tfe(S).respelled);
  }
  if (o !== void 0) S[se] = o;
  return S;
}

function Ne({workId: e, environmentId: o}, s) {
  let p = X.test(e) && Ae.test(o);
  if (!p) t("[tool-host] the request ids are not in a usable form; starting the helper without them");
  return _({
    type: "control_request",
    request_id: s,
    request: {
      subtype: "initialize",
      ...p && {
        attachServeRequest: {
          workId: e,
          environmentId: o
        }
      }
    }
  }) + `\n`;
}

function oe(e) {
  if (!wRo()) return fe();
  if (O() === "windows") return Error("tool host helper: not available on Windows");
  for (let [s, p] of Object.entries(e)) {
    let T = Die(s);
    if (ae(T, p, e)) return t(`[tool-host] no helper: ${T} says this process signs in or sends its traffic elsewhere`, {
      level: "error"
    }), ue();
  }
  let o = bf();
  if (o) return t(`[tool-host] ${o}`, {
    level: "error"
  }), Error("tool host helper: the process wrapper is not usable");
  return;
}

function de(e, {env: o, unattendedGrant: s, withoutShellSecrets: p, selfInvocation: T = () => vu({
  pinToCurrentBinary: !0
}), spawn: k = aD, after: S = Ue}) {
  let E = oe(o);
  if (E !== void 0) throw E;
  if (!X.test(e.sessionId)) throw Error("tool host helper: the session id is not usable");
  let w = T(), f = k(w.cmd, [ ...w.prefixArgs, "--attach-serve", e.sessionId, "--input-format", "stream-json", "--output-format", "stream-json" ], {
    cwd: e.folder,
    env: be(o, {
      unattendedGrant: s,
      withoutShellSecrets: p
    }),
    extendEnv: !1,
    stdio: [ "pipe", "pipe", "pipe" ],
    windowsHide: !0,
    toolCgroupClass: "agent"
  }), {promise: D, resolve: P} = Promise.withResolvers(), R = !1, C = Buffer.alloc(0);
  function H(h, b) {
    if (R) return;
    R = !0;
    let A = B(Ou(vr(C.toString("utf8"))));
    P({
      code: h,
      signal: b,
      stderrFirstLine: A === "" ? void 0 : ne(A, Ie)
    });
  }
  try {
    f.on("exit", H), f.on("error", h => {
      if (t(`[tool-host] helper process error: ${B(l(h))}`), !R) H(null, null), q(f, "SIGKILL");
    });
    for (let h of [ f.stdin, f.stdout, f.stderr ]) h?.on("error", () => {});
    if (f.stdout?.on("data", () => {}), f.stderr?.on("data", h => {
      let b = Re - C.length;
      if (b > 0) {
        let A = typeof h === "string" ? Buffer.from(h) : h;
        C = Buffer.concat([ C, A.subarray(0, b) ]);
      }
    }), f.pid === void 0 || f.stdin === null) H(null, null); else f.stdin.write(Ne(e, ve()));
  } catch (h) {
    throw q(f, "SIGKILL"), h;
  }
  let L;
  return {
    pid: f.pid,
    exited: D,
    stop(h) {
      if (R) return Promise.resolve();
      return L ??= new Promise(b => {
        t(`[tool-host] stopping helper (${h})`);
        try {
          f.stdin?.end();
        } catch {}
        q(f, "SIGTERM");
        let A = S(ke, () => q(f, "SIGKILL")), c = S(ee, b);
        D.then(() => {
          A(), c(), b();
        });
      }), L;
    }
  };
}

function B(e) {
  return e.replace(/(?:cse|session|env)_[A-Za-z0-9_-]{16,}|[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}/g, "<id>");
}

function ae(e, o, s) {
  if (!o) return !1;
  if (Oe.has(e)) return Le(o);
  return Ce.has(e) || e === "ANTHROPIC_BASE_URL" && !Pe(o, s) || e.startsWith("CLAUDE_LOCAL_OAUTH_") && !ce(o);
}

function fe() {
  return Error("tool host helper: this build cannot hold a helper to the stored login");
}

function ue() {
  return Error("tool host helper: this process signs in or sends its traffic elsewhere");
}

function De(e) {
  return e.flatMap(o => [ o, `INPUT_${o}` ]);
}

function Pe(e, o) {
  if (Pm(e)) return !0;
  return Le(o.USE_LOCAL_OAUTH) && ce(e);
}

function ce(e) {
  try {
    return [ "localhost", "127.0.0.1", "[::1]" ].includes(new URL(e).hostname);
  } catch {
    return !1;
  }
}

function Ue(e, o) {
  let s = setTimeout(o, e);
  return s.unref(), () => clearTimeout(s);
}

function q(e, o) {
  try {
    e.kill(o);
  } catch (s) {
    t(`[tool-host] ${o} not delivered: ${B(l(s))}`);
  }
}

var Ve = 4, pe = 3e4, te = 6e5, _e = 3, ge = 10, Me = 3, xe = 2500, Fe = 5e3, Be = 3e4, Ge = 64, $e = 128;

function Se(e) {
  let o = e.now ?? Date.now, s = new Map, p = new Set, T = new Map, k = 0, S = new Set, E = new Map, w = new Map, f = [], {NEGATIVE_INFINITY: D, NEGATIVE_INFINITY: P} = Number;
  async function R(n, r) {
    if (r.signal.aborted) return "unsettled";
    let i = me(n, r);
    if (i === void 0) return t("[tool-host] item or environment id unusable; item left"), 
    "unsettled";
    if (s.has(i) || [ ...S ].some(F => F.workId === i)) return H(r, i), "handled";
    if (p.has(i)) return "unsettled";
    let u = typeof n.data === "object" && n.data !== null && "id" in n.data ? n.data.id : void 0, y = typeof u === "string" && X.test(u) ? jO(u) : void 0;
    if (typeof u !== "string" || y === void 0 || y === jO(i)) return t("[tool-host] session id unusable; item stopped"), 
    G(s, i, !0), H(r, i), "handled";
    let z = C(u);
    if (z !== void 0) return L(r, i, u, z);
    if (o() < k) return "unsettled";
    p.add(i);
    try {
      await e.api.acknowledgeWork(r.environmentId, i, r.environmentSecret, fpe(i));
    } catch (F) {
      if (h(F, i) !== "give_up") return "unsettled";
      let Q = ie(F);
      return L(r, i, u, "start_failed", Q === 404 || Q === 409 || Q === 410);
    } finally {
      p.delete(i);
    }
    T.delete(i);
    let I = r.signal.aborted ? "start_failed" : C(u);
    if (I !== void 0) return L(r, i, u, I);
    G(s, i, !0);
    let Z = o(), K;
    try {
      K = e.spawnHelper({
        sessionId: u,
        workId: i,
        environmentId: r.environmentId,
        folder: e.folder
      });
    } catch (F) {
      return t(`[tool-host] helper not started: ${B(l(F))}`, {
        level: "error"
      }), U(u), L(r, i, u, "start_failed");
    }
    let W = E.get(u);
    if (W !== void 0) W.stoppedHere = !0, V("supersede", async () => {
      await W.handle.stop("superseded"), A(W);
    });
    let x = {
      sessionId: u,
      workId: i,
      startedAt: Z,
      handle: K,
      stoppedHere: !1,
      startedTimer: void 0
    };
    return x.startedTimer = setTimeout(M, pe, x), x.startedTimer.unref?.(), S.add(x), 
    E.set(u, x), v(), V("exit", async () => b(x, await K.exited)), H(r, i), V("status line", () => e.logger.logStatus(`Serving tools to a cloud session in ${e.folder}`)), 
    c({
      kind: "started"
    }), "handled";
  }
  function C(n) {
    if (!re(e.switches.gateOn)) return "gate_off";
    if (!re(e.switches.servingOn) || o() - P < te) return "serving_off";
    if (!re(e.switches.folderServed)) return "not_served";
    let r = o() - te, i = w.get(n) ?? [];
    if (N(i, y => y > r) >= _e || N(f, y => y > r) >= ge) return "at_capacity";
    let u = E.has(n) ? 1 : 0;
    return S.size - u >= Ve ? "at_capacity" : void 0;
  }
  function H(n, r) {
    V("stop", () => e.api.stopWork(n.environmentId, r, n.environmentSecret, !0, fpe(r)));
  }
  function L(n, r, i, u, y = !1) {
    if (G(s, r, !0), !y) Y(i, r, u), c({
      kind: "refused",
      code: u
    });
    return H(n, r), m("bridge_tool_host_work", y ? "withdrawn" : u), "handled";
  }
  function h(n, r) {
    let i = ie(n);
    if (t(`[tool-host] acknowledge failed (${i ?? "no response"})`), i === 429) k = o() + Math.min(M1r(n) ?? Fe, Be);
    let u = (T.get(r) ?? 0) + 1;
    if (H1r(n) || u >= Me) return T.delete(r), "give_up";
    return G(T, r, u), "retry";
  }
  function b(n, r) {
    let i = o() - n.startedAt, u = !n.stoppedHere && r.code !== 0, y = u && r.code === uj, z = y && o() - D < te;
    if (y) D = o();
    let I = !u ? void 0 : z ? "serving_off" : i < pe ? "start_failed" : "helper_exited";
    if (I === "start_failed") U(n.sessionId);
    if (I === "serving_off") P = o();
    if (I === "start_failed" || I === "serving_off") M(n, I);
    if (A(n), I !== void 0) Y(n.sessionId, n.workId, I);
    c({
      kind: "ended",
      code: I,
      stoppedHere: n.stoppedHere
    });
    let Z = r.signal ?? `exit code ${r.code ?? "none"}`, K = I === void 0 ? "" : `, reported as ${I}`, W = u && r.stderrFirstLine !== void 0 ? `: ${r.stderrFirstLine}` : "";
    e.logger.logVerbose(`Tool helper for a cloud session ended (pid ${n.handle.pid ?? "none"}, ${Z}, after ${Math.round(i / 1e3)}s${K}${W})`);
  }
  function A(n) {
    M(n);
    let r = S.delete(n);
    if (E.get(n.sessionId) === n) E.delete(n.sessionId);
    if (r) v();
  }
  function c(n) {
    V("event", () => e.onEvent?.(n));
  }
  function v() {
    V("live count report", () => e.onLiveCountChange(S.size));
  }
  function M(n, r) {
    if (n.startedTimer === void 0) return;
    if (clearTimeout(n.startedTimer), n.startedTimer = void 0, r === void 0) g("bridge_tool_host_work"); else m("bridge_tool_host_work", r);
  }
  function U(n) {
    let r = o();
    f = f.concat(r).slice(-ge);
    let i = w.get(n) ?? [];
    w.delete(n), G(w, n, i.concat(r).slice(-_e));
  }
  function Y(n, r, i) {
    V("report", () => e.api.refuseToolHost?.(n, r, i, AbortSignal.timeout(xe)));
  }
  return {
    async handle(n, r) {
      try {
        return await R(n, r);
      } catch (i) {
        m("bridge_tool_host_work", "handler_threw"), t(`[tool-host] handling a request failed unexpectedly (${Te(i)})`, {
          level: "error"
        });
        try {
          let u = me(n, r);
          if (u !== void 0) return G(s, u, !0), H(r, u), "handled";
        } catch {}
        return "unsettled";
      }
    },
    async sweep(n) {
      let r = n === "shutdown" ? "helper_exited" : "gate_off";
      await Promise.allSettled([ ...S ].map(async i => {
        if (!i.stoppedHere) Y(i.sessionId, i.workId, r);
        i.stoppedHere = !0, await i.handle.stop(n), A(i);
      }));
    },
    liveCount: () => S.size
  };
}

function me(e, o) {
  let s = e.id;
  return typeof s === "string" && s.length <= $e && aL(s) && aL(o.environmentId) ? s : void 0;
}

function V(e, o) {
  (async () => {
    try {
      await o();
    } catch (s) {
      t(`[tool-host] ${e} failed (${Te(s)})`);
    }
  })();
}

function Te(e) {
  let o = ie(e);
  if (o !== void 0) return `status ${o}`;
  return e instanceof Error ? e.name : "unknown";
}

function re(e) {
  try {
    return e();
  } catch (o) {
    return t(`[tool-host] a switch could not be read, taken as off: ${B(l(o))}`, {
      level: "error"
    }), !1;
  }
}

function G(e, o, s) {
  e.set(o, s);
  for (let p of e.keys()) {
    if (e.size <= Ge) break;
    e.delete(p);
  }
}

function ie(e) {
  return typeof e === "object" && e !== null && "status" in e && typeof e.status === "number" ? e.status : void 0;
}

function Ee() {
  if (ar(), xm().settings.disableRemoteControl === !0 || sI("disableRemoteControl").some(e => e === !0) || Wp().some(e => e.disableRemoteControl === !0)) return !0;
  return [ ...aS(), ...SE("flagSettings"), ...SE("userSettings") ].some(e => {
    if (e.path === "") return !0;
    if (e.statusOnly) return !1;
    return e.severity !== "warning" || e.path === "disableRemoteControl";
  });
}

async function je(e) {
  let o = e.gate();
  if (o === !1) return {
    kind: "withdraw",
    blocker: "gate_off"
  };
  let s = e.localDeviceFlag();
  if (s === !1) return {
    kind: "withdraw",
    blocker: "flag_off"
  };
  let p = e.platform();
  if (p !== "macos" && p !== "linux") return {
    kind: "withdraw",
    blocker: "platform"
  };
  let T = await e.offReason();
  if (T !== void 0 && T !== "unknown") return {
    kind: "withdraw",
    blocker: T
  };
  if (!await e.signsInFromStoredLogin()) return {
    kind: "withdraw",
    blocker: "not_stored_login"
  };
  if (!await e.isGitCheckoutRoot()) return {
    kind: "withdraw",
    blocker: "not_git_checkout"
  };
  if (o === "unknown" || s === "unknown") return {
    kind: "unknown",
    waitingOn: "feature_flags"
  };
  if (T === "unknown") return {
    kind: "unknown",
    waitingOn: "policy"
  };
  return {
    kind: "advertise",
    advert: {
      cliVersion: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      platform: p === "macos" ? "darwin" : "linux"
    }
  };
}

function gXn(e, o, s = BGo) {
  return {
    gate: s,
    localDeviceFlag: () => ptn() ? !1 : zf() || "unknown",
    platform: O,
    offReason: async () => {
      let p = gY(e);
      if (p !== void 0) return p;
      let {servedToolsUnavailableReason: T} = await import("./chunk-apdt5qne.js"), k = T();
      return k === "policy_org" && !n9() ? "unknown" : k;
    },
    signsInFromStoredLogin: () => ze(o),
    isGitCheckoutRoot: () => qe(e)
  };
}

async function ze(e) {
  if (CO() !== void 0 || !_pt()) return !1;
  let o = await Xn().readAsync(e);
  return Boolean(o?.claudeAiOauth?.refreshToken);
}

async function qe(e) {
  try {
    let o = await Ke(Je(e, ".git"));
    return o.isDirectory() || o.isFile();
  } catch (o) {
    if (!jt(o)) d(j(o));
    return !1;
  }
}

var Xe = 3e3, Ye = 12e4, Ze = {
  feature_flags: "flags_unloaded",
  policy: "policy_unloaded",
  failed_read: "error"
}, he = 1e4, He = 6e4;

async function _1r({dir: e, credentials: o, log: s, checks: p = gXn(e, o), signals: T = [ p7, oee, s3e ], refuse: k, onVerdict: S}) {
  let E = {
    kind: "unknown",
    waitingOn: "feature_flags"
  }, w = "gate_off", f = !1, D, P = Number.NEGATIVE_INFINITY, R, C = performance.now(), H;
  function L(c) {
    if (c.kind !== "unknown") return C = void 0, clearTimeout(H), H = void 0, c;
    C ??= performance.now();
    let v = Ye - (performance.now() - C);
    if (v <= 0) return {
      kind: "withdraw",
      blocker: Ze[c.waitingOn]
    };
    if (H === void 0) H = setTimeout(() => {
      H = void 0, h();
    }, v), H.unref?.();
    return c;
  }
  async function h() {
    try {
      let c;
      try {
        c = await je(p);
        let U = c.kind === "advertise" ? k?.() : void 0;
        if (U !== void 0) c = {
          kind: "withdraw",
          blocker: U
        };
      } catch (U) {
        d(j(U)), c = {
          kind: "unknown",
          waitingOn: "failed_read"
        };
      }
      if (f) return;
      let v = L(c);
      if (E = v, S?.(v), v.kind === "unknown") return;
      let M = v.kind === "advertise" ? "advertised" : v.blocker;
      if (M !== w) w = M, s(`cloud sessions may use this folder: ${v.kind === "advertise" ? "yes" : `no (${v.blocker})`}`);
    } catch (c) {
      d(j(c));
    }
  }
  function b() {
    if (D !== void 0) {
      D();
      return;
    }
    if (f || R !== void 0) return;
    if (E.kind === "unknown") {
      h();
      return;
    }
    let c = Date.now() - P, v = c >= 0 && c < He ? Math.max(he, He - c) : he;
    R = setTimeout(() => {
      R = void 0, P = Date.now(), h();
    }, v), R.unref?.();
  }
  await h();
  let A = T.map(c => c(b));
  if (E.kind === "unknown" && E.waitingOn === "feature_flags") {
    let c = new AbortController;
    D = () => {
      h().then(() => {
        if (E.kind !== "unknown") c.abort();
      });
    }, await J(Xe, c.signal), D = void 0;
  }
  return {
    getToolHostAdvert: () => E.kind === "advertise" ? E : {
      kind: E.kind
    },
    stop: () => {
      f = !0;
      for (let c of A) c();
      clearTimeout(R), R = void 0, clearTimeout(H), H = void 0;
    }
  };
}

function hXn(e) {
  return e.kind === "withdraw" && (e.blocker === "gate_off" || e.blocker === "flag_off" || e.blocker === "muted");
}

function b1r({dir: e, checks: o, isOfferingFolder: s, hasAccessToken: p}) {
  function T() {
    return gY(e, {
      ignoringMute: !0
    });
  }
  return {
    gateOn: () => o.gate() === !0 && o.localDeviceFlag() === !0 && !Gce(),
    servingOn: () => {
      if (!p() || !s() || yXn() !== void 0) return !1;
      let k = T();
      if (k !== void 0 && k !== "launched_from_home") return !1;
      return !Ee();
    },
    folderServed: () => T() !== "launched_from_home"
  };
}

function yXn(e = we()) {
  let o = oe(e);
  if (o === void 0) return;
  return o.message.includes("signs in or sends its traffic elsewhere") ? "other_sign_in" : "no_helper";
}

function S1r(e, o) {
  return Se({
    ...e,
    spawnHelper: s => de(s, {
      env: we(),
      ...o
    })
  });
}

async function w1r(e) {
  try {
    await We(e.sweep("shutdown"), ee);
  } catch (o) {
    d(j(o));
  }
}

function we() {
  return process.env;
}

export { gXn, _1r, hXn, b1r, yXn, S1r, w1r };
