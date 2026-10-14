// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { K, B, q, Oc, cDr, Idn, ve, SLo, Lr, BJe } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { Qg, wx, l } from "./chunk-b0z4bv3v.js";

import { bt, t } from "./chunk-kawq2919.js";

import { ste } from "./chunk-z52kmxx4.js";

import { KFs, a } from "./chunk-j016gcgm.js";

import { un } from "./chunk-y752zmas.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import { hI } from "./chunk-5brm0azz.js";

import { mo } from "./chunk-fhf0t7vm.js";

import { VUe, zvo, urn, eGn, _pt, tko, w9, pBe, qrn, Yrn, k, Ts, PK, ce, Gpt, BO, Vpt, ATo } from "./chunk-xywp7esx.js";

import { m } from "./chunk-3ykz5st8.js";

import { vLs, Kin } from "./chunk-q6wab2jw.js";

import { Yqn } from "./chunk-fvcjfcfm.js";

import { X } from "./chunk-1zg3hbfq.js";

import { mi } from "./chunk-nnrb0acr.js";

import { fe } from "./chunk-dd98x6x7.js";

import { pLs, Ur, Oe } from "./chunk-cjt10y7b.js";

import { nme, lX, kOo, AG, CG, HNt, XS, rme } from "./chunk-w4hwgefc.js";

import { pRo } from "./chunk-x35dw27e.js";

import { ODs, NCo } from "./chunk-qqd24q2y.js";

import { Sse } from "./chunk-gmq0qwep.js";

import { d1e } from "./chunk-2my8wpr5.js";

import { mXe, Han } from "./chunk-0481pkch.js";

import { GH } from "./chunk-wwq0cyp6.js";

import { uxt, Gfs, Ebe } from "./chunk-7xj6dhxv.js";

import { Vns, ta, gas, Fro, Hs } from "./chunk-84yp45y8.js";

import { bR } from "./chunk-sqb9meyh.js";

import { vw, $l, Pho } from "./chunk-9tdwgnpn.js";

import { Fbo, Ubo } from "./chunk-9whfjfdx.js";

import { zks } from "./chunk-ac1gm9w7.js";

import { qEs } from "./chunk-4jjt8sdp.js";

import { by } from "./chunk-b47tzzqx.js";

import { rk, Pue } from "./chunk-4v78v8fd.js";

import { LS } from "./chunk-km6d4a9r.js";

import { _r } from "./chunk-35kwehd0.js";

import { e5, kse, uC } from "./chunk-ewk363e4.js";

import { Yus } from "./chunk-81rtbneg.js";

import { yR } from "./chunk-48711xn9.js";

import { sSo, aSo, dSo, vtn, mSo } from "./chunk-4dpx2qvt.js";

import { eHn } from "./chunk-wf74a67p.js";

import { KFo } from "./chunk-acrh5rna.js";

import { J5 } from "./chunk-ng6g8eep.js";

import { wwo } from "./chunk-0ej5ztdc.js";

import { b2 } from "./chunk-pderawq8.js";

import { pkr } from "./chunk-av5sj366.js";

import { u2t, gwt, XKr, ger, fTe } from "./chunk-1cvvd6ss.js";

import { KMt } from "./chunk-pnvebjz9.js";

import { dk } from "./chunk-tz958kay.js";

import { lGe } from "./chunk-vtw91yn5.js";

import { iet } from "./chunk-mg9rg8zk.js";

import { gfs, hfs } from "./chunk-thbe2a3e.js";

import { MOe } from "./chunk-fr91rt4p.js";

import { gu } from "./chunk-53fww9mk.js";

import { qFs, O } from "./chunk-1xnsr4dy.js";

function F(e, r) {
  return ta("telemetry.log", {
    origin: r?.hookOrigin,
    signal: r?.signal
  })(e);
}

var U = {
  send: (e, r) => F(e, {
    signal: r
  })
};

Ebe.setRoad(U);

function P() {
  {
    if (!gu()) return;
    let e = GH.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR;
    if (GH.unset("CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR"), e === void 0) return;
    let r = p => t(`[agent-proxy] ${p}`, {
      level: "warn"
    });
    if (MOe(r), !/^[1-9][0-9]{0,5}$/.test(e) || Number(e) < 3) {
      r("CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR is not a descriptor number of 3 or more; no relay token was read"), 
      m("agent_proxy_init", "agent_proxy_init_token_fd_malformed");
      return;
    }
    if (typeof process.send === "function") {
      r("this process has an IPC channel, which no launcher of a tool daemon opens; no relay token was read"), 
      m("agent_proxy_init", "agent_proxy_init_token_fd_ipc");
      return;
    }
    let s = d1e(Number(e), "agent proxy relay's token");
    if (s === null) {
      r("the relay's token was announced but not read (the line above says why); if its descriptor was empty, something else may have read it first"), 
      m("agent_proxy_init", "agent_proxy_init_token_fd_unread");
      return;
    }
    return s;
  }
  return;
}

function b() {
  let e = Ur().providerCache;
  if (e.preconnectFired) return;
  if (e.preconnectFired = !0, Oe() !== "firstParty" || w9() === "gateway" || pBe()) return;
  if (Ct()) return;
  if (a.HTTPS_PROXY || a.https_proxy || a.HTTP_PROXY || a.http_proxy || a.ANTHROPIC_UNIX_SOCKET || a.CLAUDE_CODE_CLIENT_CERT || a.CLAUDE_CODE_CLIENT_KEY) return;
  let r = a.ANTHROPIC_BASE_URL || un().BASE_API_URL;
  Sse(`${r.replace(/\/+$/, "")}/api/hello`, {
    method: "HEAD",
    signal: AbortSignal.timeout(1e4)
  }).catch(() => {});
}

function H(e) {
  return e.length > 0 && e.every(r => r === "prometheus");
}

async function A(e, r) {
  let {initializeTelemetry: s} = await import("./chunk-qkhf00v1.js"), {meter: p, metricsExporterKinds: i} = await s(e, r);
  if (p) gfs(p, (g, S) => {
    let n = p?.createCounter(g, S);
    return {
      add(u, y = {}) {
        let _ = {
          ...uxt(),
          ...y
        };
        n?.add(u, _);
      }
    };
  }, {
    omitUnits: H(i)
  }), await Gfs(), hfs()?.add(1, {
    start_type: SLo()
  });
}

class R {
  promise=void 0;
  telemetryInitialized=!1;
  telemetryInit=void 0;
}

var N = new K(() => new R);

function C() {
  return N.of(B().host);
}

async function W(e = {}) {
  let r = P(), s = KFo() ?? r, p = Date.now();
  X("info", "init_started"), mo("init_function_start");
  let i = e.storageV5EnvPin;
  if (i?.backend !== void 0 && !ste(i.configHome)) t(`CLAUDE_CONFIG_DIR no longer names ${i.configHome}, where the v5 storage backend was built at start-up; init() loads its config without it`, {
    level: "warn"
  }), i = {
    ...i,
    backend: void 0
  };
  i ??= wwo();
  try {
    let c = Date.now();
    if (z() && i?.backend !== void 0) await pkr(i.backend), await Promise.all([ Gpt(i.backend), Fbo(i.backend, mi()) ]); else await Gpt();
    if (X("info", "init_configs_enabled", {
      duration_ms: Date.now() - c
    }), mo("init_configs_enabled"), z() && i?.backend !== void 0) pRo(ce().cachedGrowthBookFeatures?.tengu_windows_credman === !0);
    if (z() && i?.backend !== void 0) await Kin(i.backend), mo("init_remote_settings_primed");
    let g = dk(i?.backend);
    if (z() && g !== void 0) await KMt(g), mo("init_fd_credentials_primed"), await tko(g), 
    mo("init_stored_login_primed");
    BJe(VUe);
    let S = Date.now();
    if (kse(), await NCo(), iet(), await Promise.all([ nme(), lX(), qFs(), KFs() ]), 
    await eHn(), hI()) lGe();
    if (await urn(i?.backend !== void 0 && ste(i.configHome) ? g : void 0), Lr()) e5();
    X("info", "init_safe_env_vars_applied", {
      duration_ms: Date.now() - S
    }), mo("init_safe_env_vars_applied");
    let n = b2(i);
    vLs();
    let u = dk(n);
    if (z() && n !== void 0) await pkr(n);
    if (await Ubo(n, mi()), z() && n !== void 0) await ODs(n);
    if (dSo({
      storageV5: n,
      credentials: u
    }), qrn(u), Yrn(n), z() && u !== void 0) {
      if (await KMt(u), _pt()) await eGn(u);
    }
    await aSo(n), PK(n), Yus(n), Fro({
      storageV5: n,
      credentials: u
    }), mo("init_after_graceful_shutdown"), Promise.all([ import("./chunk-nry35a89.js"), import("./chunk-qt993hka.js") ]).then(([o, f]) => {
      o.initialize1PEventLogging(n), f.onGrowthBookRefresh(() => {
        o.reinitialize1PEventLoggingIfConfigChanged();
      });
    }), mo("init_after_1p_event_logging"), pLs(o => k(o, !1));
    let y = e.preparesSession !== !1 || k("tengu_quizzical_giraffe", !1) !== !0;
    if (zvo(u, n, y).catch(d), mo("init_after_oauth_populate"), LS(n), import("./chunk-dw0pzfpv.js").then(o => o.primeUnattendedServingConsent()).catch(() => {}), 
    Han({
      trustProbe: Ts
    }), mXe(), ger()) gwt();
    if (by()) vtn();
    if (mo("init_after_remote_settings_check"), ATo(n), Vpt(n), z() && n !== void 0) BO(n);
    let T = Date.now();
    t("[init] configureGlobalMTLS starting"), kOo(), X("info", "init_mtls_configured", {
      duration_ms: Date.now() - T
    }), t("[init] configureGlobalMTLS complete");
    let _ = AG();
    if (_ && !CG(_.value)) {
      let o = HNt(_.source, _.value);
      throw await J5({
        sessionId: q(),
        message: o,
        reason: "proxy_invalid"
      }), new Qg(o);
    }
    let D = Date.now();
    if (t("[init] configureGlobalAgents starting"), XS(), X("info", "init_proxy_configured", {
      duration_ms: Date.now() - D
    }), t("[init] configureGlobalAgents complete"), mo("init_network_configured"), sSo(u2t), 
    e.prefetchManagedConfig === !0 && y && u2t()) try {
      XKr(u), mSo();
    } catch {
      d(Error("a managed-config prefetch threw in init(); start-up went on without it"));
    }
    if (b(), e.startupGrowthBookKick?.(), e.startClientDataUrlFetch?.(), Le(process.env.CLAUDE_CODE_REMOTE)) {
      let o = performance.now();
      try {
        let {initAgentProxy: f, getAgentProxyEnv: L, getGhStandinDir: I} = await import("./chunk-65w5k8mq.js"), {registerAgentProxyEnvFn: x, registerGhStandinDirFn: M} = await import("./chunk-j3jb3z20.js");
        x(L), M(I), await f({
          toolContainerToken: s
        });
      } catch (f) {
        t(`[init] agent proxy init failed: ${f instanceof Error ? f.message : String(f)}; continuing without proxy`, {
          level: "warn"
        });
      }
      _r("agent_proxy_init_ms", performance.now() - o, o);
    }
    if (Yqn(), O() === "windows" && !$l()) {
      if (!vw()) {
        let f = `Claude Code on Windows requires a shell tool. Git Bash was not found and the PowerShell tool is disabled (CLAUDE_CODE_USE_POWERSHELL_TOOL=0).\n  - Install Git for Windows: https://git-scm.com/downloads/win, or\n  - Remove CLAUDE_CODE_USE_POWERSHELL_TOOL from your environment or settings.`;
        console.error(f), await J5({
          sessionId: q(),
          message: f,
          reason: "shell_tool_missing"
        }), process.exit(1);
      }
      if (await bR() === null) console.error(Pho), await J5({
        sessionId: q(),
        message: Pho,
        reason: "shell_tool_missing"
      }), process.exit(1);
    }
    if (bt(Vns), bt(async () => {
      let {cleanupSessionTeams: o} = await import("./chunk-g42b3xr4.js");
      await o(n);
    }), rk()) {
      let o = Date.now();
      try {
        let f = await Pue();
        X("info", f === null ? "init_scratchpad_unavailable" : "init_scratchpad_created", {
          duration_ms: Date.now() - o
        });
      } catch (f) {
        t(`init: ensureScratchpadDir failed: ${f}`, {
          level: "error"
        });
      }
    }
    return Oc(() => {
      if (rk()) Pue().catch(o => t(`onSessionSwitch: ensureScratchpadDir failed: ${o}`, {
        level: "error"
      }));
    }), zks(), qEs(), gas(), X("info", "init_completed", {
      duration_ms: Date.now() - p
    }), mo("init_function_end"), n;
  } catch (c) {
    if (c instanceof Qg) {
      process.stderr.write(`${c.message}\n`), Hs(1);
      return;
    }
    if (c instanceof wx) {
      if (!ve() && e.showInvalidConfigDialog) {
        await e.showInvalidConfigDialog({
          error: c
        });
        return;
      }
      process.stderr.write(`Configuration error in ${c.filePath}: ${c.message}\n`), Hs(1);
      return;
    } else throw c;
  }
}

function RLr(e) {
  return C().promise ??= W(e);
}

function gMe(e) {
  let r = C();
  if (ger()) {
    if (ve() && yR()) E(r, e).catch(s => {
      try {
        t(`[3P telemetry] Eager telemetry init failed (beta tracing): ${l(s)}`, {
          level: "error"
        });
      } catch {}
    });
    t("[3P telemetry] Waiting for remote managed settings fetch before telemetry init"), 
    fTe().then(async () => {
      t("[3P telemetry] Remote managed settings fetch settled, initializing telemetry"), 
      uC();
      let {captureAdmin3PSteeringSnapshot: s} = await import("./chunk-t33ppyd8.js");
      s();
      let [p, i] = await Promise.all([ nme(), lX() ]);
      if (p || i.changed) rme(), XS();
      await E(r, e);
    }).catch(s => {
      if (Idn() && !r.telemetryInitialized) cDr(zFt() || dun() ? "init_failed" : "not_configured");
      try {
        t(`[3P telemetry] Telemetry init failed (remote settings path): ${l(s)}`, {
          level: "error"
        });
      } catch {}
    });
  } else E(r, e).catch(s => {
    try {
      t(`[3P telemetry] Telemetry init failed: ${l(s)}`, {
        level: "error"
      });
    } catch {}
  });
}

async function E(e, r, s) {
  if (e.telemetryInitialized) return e.telemetryInit;
  return e.telemetryInitialized = !0, e.telemetryInit = (async () => {
    let p = "not_configured";
    try {
      await A(r, s);
    } catch (i) {
      if (e.telemetryInitialized = !1, e.telemetryInit = void 0, zFt()) p = "init_failed";
      throw i;
    } finally {
      cDr(p);
    }
  })(), e.telemetryInit;
}

function xLr() {
  return E(C(), void 0);
}

function w(e) {
  return (e || "").trim().split(",").filter(Boolean).map(r => r.trim()).some(r => r !== "none");
}

function zFt() {
  return Le(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) && w(a.OTEL_LOGS_EXPORTER);
}

function dun() {
  try {
    let e = fe("policySettings")?.env;
    if (!e) return !1;
    return (Le(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) || Le(e.CLAUDE_CODE_ENABLE_TELEMETRY)) && (w(a.OTEL_LOGS_EXPORTER) || w(e.OTEL_LOGS_EXPORTER));
  } catch {
    return !1;
  }
}

export { RLr, gMe, xLr, zFt, dun };
