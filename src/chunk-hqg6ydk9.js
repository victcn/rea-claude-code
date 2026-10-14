// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Di, k, ce } from "./chunk-xywp7esx.js";

import { Le, Me } from "./chunk-2v9tfgc3.js";

import { K, B, Wje } from "./chunk-3pqddg8f.js";

import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { x, l, E, zr, ME, qJe, YJe, W } from "./chunk-b0z4bv3v.js";

import { J, We } from "./chunk-nvtwm272.js";

import { qu, a } from "./chunk-j016gcgm.js";

import { _, Y, Do, cn, t } from "./chunk-kawq2919.js";

import { ne, Ql, gae, Br } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { le } from "./chunk-cqgvwwgb.js";

import { ax } from "./chunk-4dwgr3et.js";

import { it } from "./chunk-zscnwzv2.js";

import { ie, uS, eae, Rk, xXe, Pc, AMo, CMo, ut } from "./chunk-yxennhe9.js";

import { pje, nae } from "./chunk-60c97a4m.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { XK, RU, xU, bin, WLt, J9, yo, VLt } from "./chunk-q6wab2jw.js";

import { ge } from "./chunk-07cck4g7.js";

import { wn, vy } from "./chunk-s2t7g8m9.js";

import { Xn } from "./chunk-x35dw27e.js";

import { K0 } from "./chunk-znhtg8e4.js";

import { zH } from "./chunk-1tdw23h1.js";

import { Xa } from "./chunk-3kb22va7.js";

import { t4e, n4e, kmr, hm } from "./chunk-gwz0gszt.js";

import { qT, njn, nf, bf, O0, Kbo, qbo, J6e, D1 } from "./chunk-s82cb921.js";

import { vu, ONe, D4e, uY, WRt } from "./chunk-v7qc2kz8.js";

import { ZQe, xBt, t7e } from "./chunk-z9mzwwd6.js";

import { bR, Um } from "./chunk-sqb9meyh.js";

import { czt, xM, qq, JZe, uzt, k_n, oSt, Kw, THe } from "./chunk-ajrjjwfz.js";

import { sbr, tk, Z_s, yQt, Hpo, jV } from "./chunk-7j9be257.js";

import { n9t, r9t } from "./chunk-dvddkg0s.js";

import { Xd, W8t, Xst, Gre, Qst, fRt, i4e, z8t, a4e, l4e, Sso, rHn, wso, _Ne, c4e, oHn, KQ, to, Rl, ol, Yr, xso } from "./chunk-z09tf6qf.js";

import { fg } from "./chunk-wrjghg6d.js";

import { chn, M6, i2o, dJ, Z_t } from "./chunk-2a66xf4d.js";

import { dRt } from "./chunk-wf74a67p.js";

import { q6e, Y6e } from "./chunk-ewk363e4.js";

import { pB, TD } from "./chunk-ttxqfpv1.js";

import { aB } from "./chunk-ebd8npjf.js";

import { l_t, wD } from "./chunk-ms73fmgm.js";

import { Qbs, Slt } from "./chunk-7w62r1zx.js";

import { te } from "./chunk-48xcyvwy.js";

import { f2 } from "./chunk-ssq4yy0z.js";

import { sb } from "./chunk-knws81s6.js";

import { Gn } from "./chunk-bf1mjdzd.js";

import { P4t, I4t } from "./chunk-q4g003ck.js";

import { YB, Zv } from "./chunk-fwpqj1qs.js";

import { n5 } from "./chunk-av9t4vjk.js";

import { pa } from "./chunk-g7z9901y.js";

import { KMo } from "./chunk-wmrc6pz1.js";

import { O } from "./chunk-1xnsr4dy.js";

import { pEe } from "./chunk-pnn4xyvt.js";

import { Zf } from "./chunk-9zhz923g.js";

import { we } from "./chunk-m8ez8fhk.js";

var je = we(vy(), 1);

import { lstat as Ln, readFile as $n, realpath as Bn, rm as tt } from "fs/promises";

import { dirname as rt } from "path";

import { setTimeout as Ve } from "timers/promises";

import { access as fr, mkdir as pr, readFile as mr, stat as ct, unlink as gr, writeFile as hr } from "fs/promises";

import { homedir as kt } from "os";

import { join as Oe } from "path";

var Ee = "com.anthropic.claude-daemon", ke = {
  useCwd: !1,
  useToolMemoryCgroup: !1
};

async function ize() {
  let r = a.XDG_RUNTIME_DIR || `/run/user/${process.getuid()}`;
  try {
    return (await ct(Oe(r, "systemd"))).isDirectory();
  } catch {
    return !1;
  }
}

function sFr() {
  if (!qu()) return process.argv[1];
  return Oe(n5(), "claude");
}

function ze(r) {
  return r.replace(/[\r\n]/g, " ").replaceAll("%", "%%");
}

function dt(r) {
  let e = ze(r);
  return e.includes(" ") ? `"${e}"` : e;
}

function Ye() {
  let r = a.XDG_CONFIG_HOME || Oe(kt(), ".config");
  return Oe(r, "systemd", "user", `${Ee}.service`);
}

async function Ct() {
  return ct(Ye()).then(() => !0, () => !1);
}

async function TBt(r) {
  let {jsonPath: e, logPath: n} = r, s = await J6e();
  if (s) return {
    ok: !1,
    error: `${s} \u2014 refusing to install a service that would run unwrapped`,
    serviceId: Ee,
    servicePath: ""
  };
  let h = [ ...nf(), sFr() ], w = a.PATH || "/usr/local/bin:/usr/bin:/bin";
  {
    let p = Ye(), S = `${Ee}.service`;
    try {
      let T = a.XDG_CONFIG_HOME || Oe(kt(), ".config");
      await pr(Oe(T, "systemd", "user"), {
        recursive: !0
      }), await hr(p, `[Unit]\nDescription=Claude Daemon\nAfter=network-online.target\nStartLimitIntervalSec=60\nStartLimitBurst=10\n\n[Service]\nType=simple\nEnvironment="PATH=${ze(w)}"\nExecStart=${h.map(dt).join(" ")} daemon --json-path ${dt(e)} --log-file ${dt(n)} --origin service\nRestart=always\nRestartSec=1\nStandardOutput=append:${ze(n)}\nStandardError=append:${ze(n)}\n\n[Install]\nWantedBy=default.target\n`, "utf8");
    } catch (T) {
      return {
        ok: !1,
        error: l(T),
        serviceId: Ee,
        servicePath: p
      };
    }
    await it("systemctl", [ "--user", "daemon-reload" ], ke);
    let {code: y, stderr: C, error: v} = await it("systemctl", [ "--user", "enable", "--now", S ], ke);
    if (y !== 0) return {
      ok: !1,
      error: C || v || "systemctl enable failed",
      serviceId: Ee,
      servicePath: p
    };
    return await it("systemctl", [ "--user", "restart", S ], ke), {
      ok: !0,
      serviceId: Ee,
      servicePath: p
    };
  }
  return {
    ok: !1,
    error: `service install not available on ${"linux"} \u2014 the daemon runs on demand instead`,
    serviceId: Ee,
    servicePath: ""
  };
}

async function Dyt() {
  {
    let r = Ye(), e = `${Ee}.service`;
    await it("systemctl", [ "--user", "disable", "--now", e ], ke);
    try {
      await gr(r);
    } catch (n) {
      if (!W(n)) return {
        ok: !1,
        error: l(n)
      };
    }
    return await it("systemctl", [ "--user", "daemon-reload" ], ke), {
      ok: !0
    };
  }
  return {
    ok: !1,
    error: "service uninstall not available on linux"
  };
}

async function L3n() {
  return ft("start");
}

async function ABt() {
  return ft("stop");
}

async function rjo() {
  return ft("restart");
}

async function ft(r) {
  if (!1) switch (r) {
   case "start":
   case "stop":
   case "restart":
  }
  {
    let {code: e, stderr: n, error: s} = await it("systemctl", [ "--user", r, `${Ee}.service` ], ke);
    if (e !== 0) return {
      ok: !1,
      error: n || s || `systemctl ${r} failed`
    };
    return {
      ok: !0
    };
  }
  return {
    ok: !1,
    error: `service ${r} not available on ${"linux"} \u2014 the daemon runs on demand instead`
  };
}

async function _r() {
  let r = Ye();
  if (!r) return null;
  let e;
  try {
    let n = await ct(r);
    if (!n.isFile() || n.size > 1048576) return null;
    e = await mr(r, "utf8");
  } catch {
    return null;
  }
  return [ ...e.match(/^ExecStart=(.*)$/m)?.[1]?.matchAll(/"([^"]+)"|(\S+)/g) ?? [] ].map(n => n[1] ?? n[2]);
}

function Pt(r) {
  return r.replaceAll("%%", "%");
}

async function N3n() {
  let r = {
    execPathStale: !1,
    launcherPrefixDead: !1
  }, e = await _r();
  if (!e) return r;
  let n = e.lastIndexOf("daemon"), s = n > 0 ? e[n - 1] : void 0;
  if (!s) return r;
  try {
    await fr(Pt(s));
  } catch {
    r.execPathStale = !0;
  }
  let h = e.slice(0, n - 1).map(Pt);
  for (let w of qbo(h)) if (!await Kbo(w)) {
    r.launcherPrefixDead = !0;
    break;
  }
  return r;
}

async function JX() {
  {
    let {code: r, stderr: e, error: n} = await it("systemctl", [ "--user", "status", `${Ee}.service` ], ke);
    if (n || e.includes("Failed to connect to bus")) return !1;
    return r === 0 || r === 3;
  }
  return !1;
}

class Tt {
  daemonConfirmedUp=!1;
  ensureInFlight=null;
  lastTransientSpawnAt=null;
  prefixAxis="idle";
  prefixContractViolationLogged=!1;
  tmuxRgbApplied=!1;
  ownedBeacons=new Map;
  reset() {
    this.daemonConfirmedUp = !1, this.ensureInFlight = null, this.lastTransientSpawnAt = null, 
    this.prefixAxis = "idle", this.prefixContractViolationLogged = !1, this.tmuxRgbApplied = !1, 
    this.ownedBeacons.clear();
  }
}

var wr = new K(() => new Tt);

function RL() {
  return wr.of(B().host);
}

import { setTimeout as jr } from "timers/promises";

import { spawn as mt } from "child_process";

import { constants as Er } from "fs";

import { access as Sr, mkdtemp as br, open as yr, readdir as vr, realpath as Ar, stat as Xe } from "fs/promises";

import { homedir as xr, tmpdir as Pr } from "os";

import { dirname as kr, join as qe } from "path";

var Cr = 1e4, pt = 250, Ze = 12e4, Tr = 1e3, Rr = 6e5, Dr = 1e4, It = /^(.+)\/Caskroom\/[^/]+\/[^/]+\/claude$/, Je = "/node_modules/@anthropic-ai/", Or = 6e4;

async function Nt(r) {
  try {
    let e = await Xe(r);
    if (!e.isFile() || e.size >= P4t) return "present";
    return Date.now() - Math.max(e.mtimeMs, e.ctimeMs) < Or ? "fresh_stub" : "stale_stub";
  } catch (e) {
    return E(e) === "ENOENT" ? "missing" : "present";
  }
}

var Ir = new Set([ "ENOENT", "EACCES", "ENOEXEC", "EFTYPE", "ETXTBSY", "EBUSY", "EUNKNOWN", "EPERM" ]);

async function $3n(r, e, {withoutOAuthTokenEnv: n = !1} = {}) {
  let s = bf();
  if (s) return m("agent_launcher", "invalid_config"), {
    err: new x(s, "CLAUDE_CODE_PROCESS_WRAPPER is misconfigured")
  };
  if (!await O0()) return m("agent_launcher", "launcher_not_runnable"), {
    err: new x(`${qT}: launcher \`${nf()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable")
  };
  let h = nf(), {cmd: w, prefixArgs: p, target: S} = vu(), y = [ w, ...p, ...r ], C = Vr({
    dropShellOAuthToken: n || await Fr(e)
  });
  if (O() === "windows") {
    if (njn().platformIgnored) f("agent_launcher", "platform_unsupported");
    let L = await Ot(y, C);
    if (L.ok) return {
      err: null
    };
    t(`daemon: WMI spawn failed (${L.reason}); falling back to direct spawn \u2014 daemon will not survive SSH/terminal close`, {
      level: "warn"
    }), i("tengu_bg_daemon_wmi_fallback", {
      timeout: L.reason === "timeout",
      enoent: L.reason === "enoent",
      no_powershell: L.reason === "no-powershell",
      rc: L.rc
    });
  }
  let v = O() === "macos" ? await Lr() : [], T = await br(qe(Pr(), "cc-daemon-")).catch(() => null), D = T ? qe(T, "stderr.log") : void 0, H = D ? await yr(D, "w").catch(() => null) : null;
  try {
    if (h.length > 0) return {
      ...await Nr(r, C, v, H),
      stderrPath: D
    };
    let L = await Ae(await Ce(v, y), C, H?.fd), {err: U} = L, G = E(U), oe = !1, Z;
    if (G !== void 0 && Ir.has(G) && $e(S)) {
      let I = await Qe(S);
      if (oe = !I.recovered && I.installInProgressAtEnd, Z = I.waitedMs, I.recovered) {
        if (O() === "windows") L = (await Ot(y, C)).ok ? {
          err: null
        } : await Ae(y, C, H?.fd); else L = await Ae(await Ce(v, y), C, H?.fd);
        G = E(L.err);
      }
      if (i("tengu_bg_daemon_spawn_reinstall_wait", {
        waited_ms: I.waitedMs,
        recovered: I.recovered,
        respawn_ok: I.recovered && L.err === null,
        extended: I.extended,
        install_in_progress: I.installInProgressAtEnd,
        errno: zr(U) ?? b("unknown"),
        ...I.recovered && L.err !== null && {
          respawn_errno: zr(L.err) ?? b("unknown")
        }
      }), I.recovered && L.err === null) return t(`daemon: ${S} was being reinstalled (exec ${E(U)}); started it after ${I.waitedMs}ms`), 
      {
        ...L,
        stderrPath: D,
        recoveredAfterReinstallWait: !0,
        reinstallWaitedMs: Z
      };
      t(I.recovered ? `daemon: ${S} came back after ${I.waitedMs}ms of an npm reinstall but starting it failed again (exec ${E(L.err)})` : `daemon: ${S} not runnable after waiting ${I.waitedMs}ms for an npm reinstall (exec ${E(U)}; install ${I.installInProgressAtEnd ? "still in progress" : I.extended ? "ended" : "not seen"})`);
    }
    let V = {
      gaveUpOnNpmInstallInProgress: oe,
      reinstallWaitedMs: Z
    };
    if (G !== "ENOENT" && G !== "EACCES") return {
      ...L,
      stderrPath: D,
      ...V
    };
    let Q = new Set([ S ]), se = vu({
      pinToCurrentBinary: !0
    });
    if (!Q.has(se.target)) {
      Q.add(se.target), i("tengu_bg_daemon_spawn_execpath_fallback", {
        errno_enoent: G === "ENOENT",
        errno_eacces: G === "EACCES"
      });
      let I = await Ae(await Ce(v, [ se.cmd, ...se.prefixArgs, ...r ]), C, H?.fd);
      if (E(I.err) !== "ENOENT") return {
        ...I,
        stderrPath: D,
        ...V
      };
    }
    let {link: u, waitedMs: o} = await Mt(se.target);
    if (o > 0) V.reinstallWaitedMs = (Z ?? 0) + o;
    if (u !== null && !Q.has(u)) {
      Q.add(u), i("tengu_bg_daemon_spawn_homebrew_fallback", {
        errno_enoent: G === "ENOENT",
        errno_eacces: G === "EACCES",
        waited_ms: o
      });
      let I = await Ae(await Ce(v, [ u, ...r ]), C, H?.fd);
      if (I.err === null) return {
        ...I,
        stderrPath: D,
        ...V,
        recoveredAfterReinstallWait: o > 0
      };
    }
    let A = D4e();
    if (!Q.has(A)) {
      Q.add(A), i("tengu_bg_daemon_spawn_launcher_fallback", {
        errno_enoent: G === "ENOENT",
        errno_eacces: G === "EACCES"
      });
      let I = await Ae(await Ce(v, [ A, ...r ]), C, H?.fd);
      if (E(I.err) !== "ENOENT") return {
        ...I,
        stderrPath: D,
        ...V
      };
    }
    let P = await WRt();
    if (i("tengu_bg_daemon_spawn_versions_fallback", {
      found: P !== null
    }), P !== null && !Q.has(P)) return {
      ...await Ae(await Ce(v, [ P, ...r ]), C, H?.fd),
      stderrPath: D,
      ...V
    };
    return {
      err: U,
      stderrPath: D,
      ...V
    };
  } finally {
    await (H?.close().catch(() => {}));
  }
}

async function Nr(r, e, n, s) {
  let h = async D => {
    let H = uY(D);
    return Ae(await Ce(n, [ H.cmd, ...H.prefixArgs, ...r ]), e, s?.fd);
  }, w = ONe();
  if (await _e(w.cmd, {
    rejectNpmStub: !0
  })) return h(w);
  let p = !1, S;
  if ($e(w.cmd)) {
    let D = await Qe(w.cmd);
    if (S = D.waitedMs, i("tengu_bg_daemon_spawn_reinstall_wait", {
      waited_ms: D.waitedMs,
      recovered: D.recovered,
      respawn_ok: D.recovered,
      extended: D.extended,
      install_in_progress: D.installInProgressAtEnd,
      probe: !0
    }), D.recovered) return {
      ...await h(w),
      recoveredAfterReinstallWait: !0,
      reinstallWaitedMs: S
    };
    p = D.installInProgressAtEnd;
  }
  let y = ONe({
    pinToCurrentBinary: !0
  });
  if (y.cmd !== w.cmd && await _e(y.cmd)) return i("tengu_bg_daemon_spawn_execpath_fallback", {
    errno_enoent: !1,
    errno_eacces: !1,
    probe: !0
  }), {
    ...await h(y),
    reinstallWaitedMs: S
  };
  let {link: C, waitedMs: v} = await Mt(y.cmd);
  if (v > 0) S = (S ?? 0) + v;
  if (C !== null && await _e(C)) return i("tengu_bg_daemon_spawn_homebrew_fallback", {
    errno_enoent: !1,
    errno_eacces: !1,
    probe: !0,
    waited_ms: v
  }), {
    ...await h({
      cmd: C,
      prefixArgs: [],
      target: C
    }),
    recoveredAfterReinstallWait: v > 0,
    reinstallWaitedMs: S
  };
  let T = await WRt();
  if (i("tengu_bg_daemon_spawn_versions_fallback", {
    found: T !== null,
    probe: !0
  }), T !== null && T !== y.cmd && await _e(T)) return {
    ...await h({
      cmd: T,
      prefixArgs: [],
      target: T
    }),
    reinstallWaitedMs: S
  };
  return m("agent_launcher", "no_runnable_target"), {
    err: new x(`no runnable Claude Code binary was found to run through the configured launcher \u2014 last tried: ${T ?? y.cmd}`, "no runnable claude binary for the configured launcher"),
    gaveUpOnNpmInstallInProgress: p,
    reinstallWaitedMs: S
  };
}

async function _e(r, e = {}) {
  try {
    let n = await Xe(r);
    if (!n.isFile()) return !1;
    if (e.rejectNpmStub && n.size < P4t) return !1;
    return await Sr(r, Er.X_OK), !0;
  } catch {
    return !1;
  }
}

function $e(r) {
  return r.replace(/\\/g, "/").includes(Je);
}

async function Mr(r) {
  let e = It.exec(r)?.[1];
  if (e === void 0) return null;
  let n = qe(e, "bin", "claude"), s = await Ar(n).catch(() => null);
  return s !== null && s !== r && s.startsWith(`${e}/Caskroom/`) ? n : null;
}

async function Mt(r) {
  for (let e = 0; ;e += pt) {
    let n = It.test(r) && await Xe(`${kr(r)}.upgrading`).then(() => !0, () => !1), s = await Mr(r);
    if ((n || e > 0) && s !== null && !await _e(s)) s = null;
    if (s !== null || !n || e >= Dr) {
      if (s === null && e > 0) i("tengu_bg_daemon_spawn_homebrew_wait_gave_up", {
        waited_ms: e
      });
      return {
        link: s,
        waitedMs: e
      };
    }
    await J(pt);
  }
}

async function Rt(r) {
  let e = r.replace(/\\/g, "/").indexOf(Je);
  if (e === -1) return !1;
  let n = r.slice(0, e + Je.length - 1), s = r.slice(e + Je.length).split(/[\\/]/)[0];
  if (!s) return !1;
  let h = `.${s}-`, w;
  try {
    w = await vr(n, {
      withFileTypes: !0
    });
  } catch {
    return !1;
  }
  for (let p of w) {
    if (!p.isDirectory() || !p.name.startsWith(h)) continue;
    try {
      let S = await Xe(qe(n, p.name));
      if (Date.now() - Math.max(S.ctimeMs, S.mtimeMs) < Rr) return !0;
    } catch {}
  }
  return !1;
}

async function Qe(r) {
  let e = Date.now(), n = e + Cr;
  while (Date.now() < n) if (await J(pt), await _e(r, {
    rejectNpmStub: !0
  })) return {
    recovered: !0,
    waitedMs: Date.now() - e,
    extended: !1,
    installInProgressAtEnd: !1
  };
  let s = await Rt(r);
  if (!s) return {
    recovered: !1,
    waitedMs: Date.now() - e,
    extended: !1,
    installInProgressAtEnd: !1
  };
  let h = e + Ze;
  while (Date.now() < h) {
    if (await J(Tr), await _e(r, {
      rejectNpmStub: !0
    })) return {
      recovered: !0,
      waitedMs: Date.now() - e,
      extended: !0,
      installInProgressAtEnd: s
    };
    if (!s) break;
    s = await Rt(r);
  }
  return {
    recovered: !1,
    waitedMs: Date.now() - e,
    extended: !0,
    installInProgressAtEnd: s
  };
}

async function Ae(r, e, n) {
  let s;
  try {
    s = xr();
  } catch {
    s = void 0;
  }
  let h = await Dt(r, e, n, s);
  if (s !== void 0 && h.err) return Dt(r, e, n, void 0);
  return h;
}

async function Dt(r, e, n, s) {
  let h = null, w;
  try {
    let p = mt(r[0], r.slice(1), {
      detached: !0,
      stdio: [ "ignore", "ignore", n ?? "ignore" ],
      windowsHide: !0,
      env: e,
      ...s !== void 0 && {
        cwd: s
      }
    });
    ax(p.pid), p.once("error", S => {
      h = S;
    }), w = {
      pid: p.pid,
      exited: new Promise(S => {
        p.once("exit", (y, C) => S({
          code: y,
          signal: C
        }));
      })
    }, p.unref();
  } catch (p) {
    h = p;
  }
  return await new Promise(p => setImmediate(p)), h ? {
    err: h
  } : {
    err: null,
    child: w
  };
}

async function Lr() {
  let r = process.getuid?.();
  if (r === void 0) return [];
  let e = await new Promise(n => {
    let s = !1, h, w = S => {
      if (s) return;
      s = !0, clearTimeout(p), n(S);
    }, p = setTimeout(() => {
      h.kill(), w(!1);
    }, 5e3);
    p.unref();
    try {
      h = mt("/bin/launchctl", [ "asuser", String(r), "/usr/bin/true" ], {
        stdio: "ignore",
        windowsHide: !0
      });
    } catch {
      w(!1);
      return;
    }
    h.once("error", () => w(!1)), h.once("exit", S => w(S === 0));
  });
  return i("tengu_bg_daemon_macos_aqua_wrap", {
    has_gui: e
  }), e ? [ "/bin/launchctl", "asuser", String(r) ] : [];
}

async function Ce(r, e) {
  if (r.length === 0) return e;
  let n = e[0];
  if (!await _e(n, {
    rejectNpmStub: $e(n)
  })) return e;
  return [ ...r, ...e ];
}

async function Ot(r, e) {
  let n;
  try {
    n = $r(Wr(r));
  } catch (w) {
    return {
      ok: !1,
      reason: l(w)
    };
  }
  let s = await bR();
  if (!s) return {
    ok: !1,
    reason: "no-powershell"
  };
  let h = Buffer.from(n, "utf16le").toString("base64");
  return new Promise(w => {
    let p = !1, S, y = T => {
      if (p) return;
      p = !0, clearTimeout(v), w(T);
    }, C = T => y({
      ok: !1,
      reason: E(T) === "ENOENT" ? "enoent" : l(T)
    }), v = setTimeout(() => {
      S.kill(), y({
        ok: !1,
        reason: "timeout"
      });
    }, 5e3);
    v.unref();
    try {
      S = mt(s, [ "-NoProfile", "-NonInteractive", "-EncodedCommand", h ], {
        stdio: "ignore",
        windowsHide: !0,
        env: e
      });
    } catch (T) {
      C(T);
      return;
    }
    S.once("error", C), S.once("exit", T => {
      if (T === 0) y({
        ok: !0
      }); else y({
        ok: !1,
        reason: `Win32_Process.Create rc=${T}`,
        rc: T ?? void 0
      });
    });
  });
}

function $r(r) {
  return [ '$ErrorActionPreference = "Stop"', '$e = [string[]](Get-ChildItem Env: | ForEach-Object { "$($_.Name)=$($_.Value)" })', "$s = New-CimInstance -ClassName Win32_ProcessStartup -ClientOnly -Property @{ EnvironmentVariables = $e; ShowWindow = [uint16]0; CreateFlags = [uint32]8 }", `$r = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{ CommandLine = ${Ur(r)}; CurrentDirectory = $env:USERPROFILE; ProcessStartupInformation = $s }`, "exit $r.ReturnValue" ].join(`\n`);
}

function Wr(r) {
  return r.map(Hr).join(" ");
}

function Hr(r) {
  if (r.length > 0 && !/[\s"]/.test(r)) return r;
  let e = '"', n = 0;
  while (n < r.length) {
    let s = 0;
    while (r[n] === "\\") s++, n++;
    if (n === r.length) e += "\\".repeat(s * 2); else if (r[n] === '"') e += "\\".repeat(s * 2 + 1) + '"', 
    n++; else e += "\\".repeat(s) + r[n], n++;
  }
  return e + '"';
}

function Ur(r) {
  if (/[\u2018\u2019\u201A\u201B]/.test(r)) throw Error("unsupported Unicode single-quote in command line");
  return `'${r.replaceAll("'", "''")}'`;
}

async function Fr(r) {
  if (O() === "macos" || !process.env.CLAUDE_CODE_OAUTH_TOKEN) return !1;
  return !!(await Xn().readAsync(r))?.claudeAiOauth?.refreshToken;
}

function Vr(r) {
  let e = q6e();
  e.INVOCATION_ID = "";
  let n = process.env[qT];
  if (n) e[qT] = n; else delete e[qT];
  let s = new Set([ "CLAUDE_CODE_OAUTH_TOKEN", J9(e), Wje() ? J9({
    CLAUDE_CODE_HOST_AUTH_ENV_VAR: dRt()
  }) : void 0 ].flatMap(p => p === void 0 ? [] : [ p.toUpperCase() ]));
  for (let p of Object.keys(e)) {
    if (!s.has(p.toUpperCase())) continue;
    let S = process.env[p];
    if (S === void 0) delete e[p]; else if (!Y6e(p, S)) e[p] = S;
  }
  delete e.CLAUDECODE, delete e.CLAUDE_CODE_SESSION_ID, delete e.CLAUDE_CODE_CHILD_SESSION, 
  delete e.CLAUDE_CODE_SESSION_ATTENDED, delete e.CLAUDE_CODE_CHROME_MCP_ORG_DENIED, 
  delete e.CLAUDE_CODE_EVAL_INTERVIEW_SESSION, delete e.CLAUDE_CODE_BRIDGE_SESSION_ID, 
  delete e.CLAUDE_CODE_HOST_WORKTREE, delete e.CLAUDE_CODE_HOST_WORKTREE_FENCE, i2o(e);
  for (let p of Object.keys(e)) if (p.toUpperCase() === "CLAUDE_CODE_PLUGIN_DIRS") delete e[p];
  dJ(e), Z_t(e), delete e.CLAUDE_BG_SESSION_PERMISSION_RULES, delete e.CLAUDE_BG_MEMORY_TOGGLED_OFF, 
  delete e.CLAUDE_BG_AUTO_MEMORY_OFF, M6(e);
  let h = new Set([ "CLAUDE_BG_AUTH_SNAPSHOT_PATH", ...bin ].map(p => p.toUpperCase()));
  for (let p of Object.keys(e)) if (h.has(p.toUpperCase())) delete e[p];
  let w = J9(e);
  if (Le(e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
    for (let p of [ ...xU, ...RU, ...XK ]) delete e[p];
    if (WLt(e), delete e.ANTHROPIC_CUSTOM_HEADERS, w) delete e[w];
    delete e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST, delete e.CLAUDE_CODE_HOST_AUTH_ENV_VAR, 
    delete e.CLAUDE_CODE_HOST_GATEWAY_LINEAGE;
  }
  if (r.dropShellOAuthToken) {
    for (let p of Object.keys(e)) if (p.toUpperCase() === "CLAUDE_CODE_OAUTH_TOKEN") delete e[p];
  }
  return e;
}

var gt = 12e4, Lt = 5e3, $t = 5e3;

function ht(r) {
  let e = {
    ...r,
    childExit: null,
    childExitAt: null,
    stderr: null,
    budgetExtended: !1,
    nextLivenessProbeAt: r.spawnIssuedAt + Lt,
    siblingHolderSeen: !1
  };
  return r.child?.exited.then(n => {
    e.childExit = n, e.childExitAt = Date.now();
  }), e;
}

async function Bt(r, e) {
  let n = r.childExit;
  if (!n || r.siblingHolderSeen) return !1;
  if (n.code === 0 && n.signal === null) return !1;
  if (!$e(e)) return !1;
  switch (await Nt(e)) {
   case "missing":
   case "fresh_stub":
    return !0;

   case "stale_stub":
    return !1;

   case "present":
    return (await et(r)).includes(I4t);
  }
}

function Wt(r) {
  if (r.trim().length === 0) return;
  if (r.includes(I4t)) return b("npm_stub");
  if (/current working directory was deleted|uv_cwd|getcwd/i.test(r)) return b("cwd_deleted");
  if (/launchctl|Could not switch to audit session|posix_spawn/.test(r)) return b("launchctl");
  if (/Cannot find module|MODULE_NOT_FOUND|Module not found/.test(r)) return b("module_not_found");
  if (/dyld|Segmentation fault|Illegal instruction|Abort trap|Killed: 9|panic|bun has crashed|^error: /im.test(r)) return b("runtime");
  if (/^\s*(claude|Claude Code|daemon|bg manager)\b/im.test(r)) return b("claude_error");
  return b("other");
}

async function et(r, e = !1) {
  if (r.stderr === null || e) r.stderr = r.stderrPath ? (await Xa(r.stderrPath, 1048576) ?? "").slice(0, 2e3) : "";
  return r.stderr;
}

async function _t(r) {
  let e = r.childExit;
  if (!e || r.siblingHolderSeen) return !1;
  if (!r.budgetExtended) {
    if ((await et(r)).trim().length === 0) return !1;
    if (r.wrapperConfigured && e.code === 0 && e.signal === null) return !1;
  }
  let n = await Ht(r, JZe);
  if (n !== !1) return r.siblingHolderSeen = n === !0, !1;
  return !0;
}

async function Be(r, e, n) {
  let s = e;
  while (!0) {
    if (await _t(r)) return !1;
    if (Date.now() >= s) return !1;
    if ((await fg({
      proto: Xd,
      op: "ping"
    })).ok) return !0;
    if (n && Date.now() >= r.nextLivenessProbeAt) {
      r.nextLivenessProbeAt = Date.now() + Lt;
      let p = await Ht(r, 1);
      if (!r.budgetExtended && p === !0) r.budgetExtended = !0, s = Math.max(s, r.spawnIssuedAt + gt); else if (r.budgetExtended && p === !1 && Date.now() >= e) return !1;
    }
    await jr(100);
  }
}

async function Ht(r, e) {
  let n;
  try {
    n = await Kw(e, r.storageV5);
  } catch {
    return null;
  }
  return n !== null && !n.bgDisabled && n.startedAt >= r.spawnIssuedAt - $t;
}

async function Ut(r) {
  let e;
  try {
    e = await qq(r.storageV5);
  } catch {
    return {
      lock_at_deadline: b("unreadable")
    };
  }
  if (!e) return {
    lock_at_deadline: b("absent")
  };
  let n = {
    holder_age_ms: Math.max(0, Date.now() - e.startedAt),
    holder_version_skew: e.version !== {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION
  };
  if (r.child?.pid !== void 0 && e.pid === r.child.pid || e.startedAt >= r.spawnIssuedAt - $t) return {
    lock_at_deadline: b("self_child"),
    ...n
  };
  try {
    process.kill(e.pid, 0);
  } catch (w) {
    if (E(w) !== "EPERM") return {
      lock_at_deadline: b("other_dead"),
      ...n
    };
    return {
      lock_at_deadline: await k_n(e) ? b("other_eperm_stale") : b("other_eperm"),
      ...n
    };
  }
  return {
    lock_at_deadline: await uzt(e.pid, K0(e), 1).catch(() => !1) ? b("other_alive") : b("other_dead"),
    ...n
  };
}

import { randomBytes as An } from "crypto";

import { unlink as qt } from "fs/promises";

import { createServer as xn } from "net";

import { StringDecoder as Pn } from "string_decoder";

function xMe(r, e) {
  let n = r.trimStart();
  return sb(n) !== "prompt" || n.startsWith("/") || e?.tempo === "blocked" && (e.block?.questions.length ?? 0) > 0;
}

function QQe(r) {
  return r.queuedPrompt !== void 0 && xMe(r.queuedPrompt, null) ? void 0 : r.queuedPrompt;
}

function iFr(r, e) {
  return r === e || r.endsWith(`\n\n${e}`);
}

async function Cte(r, e, n, s, h) {
  if (xMe(n, null)) return !1;
  let w = h ? QQe(e) : void 0;
  return Rl(r, {
    ...e,
    queuedPrompt: !w ? n : iFr(w, n) ? w : `${w}\n\n${n}`,
    updatedAt: (new Date).toISOString()
  }, s).then(() => !0, p => (ol(p), !1));
}

var Ft = /\x1b\[(?:<\d+;\d+;\d+[Mm]|M[\s\S]{3}|I|O|\??\d+;\d+(?:;\d+)*R|[?>]\d+(?:;\d+)*c|\?\d+(?:;\d+)*\$y|\?997;[12]n|\?\d+u)|\x1bP[^\x1b]*\x1b\\|\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g;

function Vt(r) {
  if (!r.includes("\x1b")) return !1;
  return r.replace(Ft, "").length === 0;
}

var Gr = "\x1b[<", Kr = /^(\d+);\d+;\d+[Mm]/, Jr = 96;

function jt(r) {
  return r.split(Gr).slice(1).some(e => {
    let n = Kr.exec(e)?.[1];
    return n !== void 0 && (Number(n) & Jr) === 0;
  });
}

var qr = 64, Xr = /^\x1b(?:$|\[(?:[<?>]?\d*(?:;\d*)*\$?|M[\s\S]{0,2})$|P(?:$|[>01][^\x1b]*\x1b?$)|\](?:$|\d[^\x07\x1b]*\x1b?$))/;

function njo() {
  let r = "";
  return e => {
    let n = r + e;
    if (r = "", !n.includes("\x1b")) return !1;
    let s = n.replace(Ft, "");
    if (s.length === 0) return !0;
    if (s.length <= qr && Xr.test(s)) return r = s, !0;
    return !1;
  };
}

import { closeSync as Zr, lstatSync as Qr, openSync as en, readSync as tn } from "fs";

var Gt = 262144, rn = 32768, nn = 200, on = 4096, an = 50;

function sn(r) {
  let e = 0, n = 0, s = 0;
  for (let h of r.split(`\n`)) {
    let w = 0;
    while (w < h.length && (h[w] === ">" || h[w] === " ")) {
      if (h[w] === ">") s++;
      w++;
    }
    if (/^ {0,3}(?:=+|-+)\s*$/.test(h)) n++;
    for (let p = w; p < h.length; p++) {
      let S = h[p];
      if (S === "[") e++; else if (S === "]" && e > 0) e--;
    }
  }
  return e > 256 || n > 64 || s > 512;
}

var ln = "\x1b[2m", Yt = "\x1b[0m", dn = 2, un = "dark", Kt = te.pointer, fn = "  Session is starting \u2014 showing its transcript until it appears. Ctrl+Z to detach";

function pn(r) {
  if (!/[\x00-\x09\x0b-\x1f\x7f-\x9f]/.test(r)) return r;
  return cn(r).replace(/\t/g, "  ").replace(gae, "").replace(/[\v\f\r]/g, "");
}

var Jt = new RegExp(`(${xXe(";")})`), mn = new RegExp(`^${xXe(";")}$`), gn = new RegExp(Jt.source, "g");

function hn(r) {
  if (!r.includes("\x1b")) return r;
  let e = "", n = 0;
  while (n < r.length) {
    let s = r.indexOf("\x1b", n);
    if (s < 0) {
      e += r.slice(n);
      break;
    }
    e += r.slice(n, s);
    let h = r[s + 1];
    if (h === "[") {
      let w = s + 2;
      while (w < r.length) {
        let p = r.charCodeAt(w);
        if (p >= 64 && p <= 126) {
          let S = r.slice(s, w + 1);
          if (mn.test(S)) e += S;
          w++;
          break;
        }
        if (p < 32 || p > 63) break;
        w++;
      }
      n = w;
    } else if (h === "]" || h === "P" || h === "X" || h === "^" || h === "_") {
      let w = s + 2, p = r.length;
      while (w < r.length) {
        if (h === "]" && r.charCodeAt(w) === 7) {
          p = w + 1;
          break;
        }
        if (r.charCodeAt(w) === 27 && r[w + 1] === "\\") {
          p = w + 2;
          break;
        }
        w++;
      }
      n = p;
    } else if (h === void 0) n = r.length; else n = s + 2;
  }
  return e;
}

var _n = 128;

function En(r) {
  let e = r.filter(n => n !== "").join(";");
  return e === "" || e.length > _n ? "" : `\x1b[${e}m`;
}

function Sn(r, e) {
  if (ie(r) <= e) return [ r ];
  let n = [], s = "", h = 0, w = AMo();
  for (let p of r.split(Jt)) {
    if (p === "") continue;
    if (p.charCodeAt(0) === 27) {
      CMo(p, w), s += p;
      continue;
    }
    for (let {segment: S} of pa().segment(p)) {
      let y = S.length === 1 && S.charCodeAt(0) < 127 ? 1 : ie(S);
      if (h > 0 && h + y > e) n.push(w.some(C => C !== "") ? s + Yt : s), s = En(w), h = 0;
      s += S, h += y;
    }
  }
  return n.push(s), n;
}

function wt(r, e) {
  return Pc(r, e, {
    hard: !1,
    trim: !1
  }).split(`\n`).flatMap(n => Sn(n, e));
}

function bn(r) {
  let e;
  try {
    e = Do(r);
  } catch {
    return [];
  }
  if (typeof e !== "object" || e === null) return [];
  let n = e;
  if (n.type !== "user" && n.type !== "assistant" || n.isSidechain === !0 || n.isMeta === !0) return [];
  let s = n.message?.content;
  if (typeof s === "string") {
    if (n.type === "user") return zt(s);
    let S = s.trim();
    return S === "" ? [] : [ {
      role: "assistant",
      text: S
    } ];
  }
  if (!Array.isArray(s)) return [];
  if (n.type === "user") {
    let S = [];
    for (let y of s) {
      let C = y;
      if (C?.type === "text" && typeof C.text === "string") S.push(C.text);
    }
    return zt(S.join(`\n`));
  }
  let h = [], w = [], p = () => {
    let S = w.join(`\n`).trim();
    if (w = [], S !== "") h.push({
      role: "assistant",
      text: S
    });
  };
  for (let S of s) {
    let y = S;
    if (y?.type === "text" && typeof y.text === "string") w.push(y.text); else if (y?.type === "tool_use" && typeof y.name === "string") {
      p();
      let C = "";
      if (typeof y.input === "object" && y.input !== null) {
        for (let v of Object.values(y.input)) if (typeof v === "string" && v !== "") {
          C = v;
          break;
        }
      }
      h.push({
        role: "tool",
        text: `${y.name}(${C})`
      });
    } else if (y?.type === "thinking" && typeof y.thinking === "string" && y.thinking.trim() !== "") p(), 
    h.push({
      role: "thinking",
      text: y.thinking
    });
  }
  return p(), h;
}

function zt(r) {
  let e = pEe(r).trim();
  if (e === "") return [];
  let n = /^<bash-input>([\s\S]*?)<\/bash-input>/.exec(e);
  if (n) e = `! ${n[1].trim()}`; else if (KMo.test(e)) return [];
  return [ {
    role: "user",
    text: e
  } ];
}

function yn(r, e) {
  return l_t(), hn(Um.lexer(r).map(n => wD(n, e, {
    listDepth: 0,
    orderedListNumber: null,
    parent: null,
    highlight: aB(),
    linkCap: !1,
    windowed: !1
  })).join("")).trim();
}

function vn(r, e, n, s) {
  let h = Math.max(1, e), w = s?.colorLevel ?? dn, p = s?.theme ?? un, S = N => w > 0 && N !== "" ? ln + N + Yt : N, y = N => Math.max(1, Math.ceil(ie(N) / h)), C = "\u2500".repeat(h), v = [ "", C, Kt, C, fn ], T = v.reduce((N, z) => N + y(z), 0), D = n - T;
  if (D < 1) return null;
  let H = Math.min(Math.ceil((D + 1) / 2), nn), L = r.split(`\n`), U = [], G = rn;
  e: for (let N = L.length - 1; N >= 0; N--) {
    let z = bn(L[N]);
    for (let q = z.length - 1; q >= 0; q--) {
      if (U.length >= H) break e;
      let ee = z[q];
      if (ee.text.length > G) {
        if (U.length === 0) {
          let re = Ql(ee.text, G), de = re.indexOf(`\n`);
          if (de >= 0) re = re.slice(de + 1);
          if (re.trim() !== "") U.unshift({
            role: ee.role,
            text: re
          });
        }
        break e;
      }
      G -= ee.text.length, U.unshift(ee);
    }
  }
  if (U.length === 0) return null;
  let oe = [], Z = h >= 4 ? 2 : 0, V = Math.max(1, h - Z), Q = ge.level;
  ge.level = w;
  let se = performance.now();
  try {
    for (let N of U) {
      if (oe.length > 0) oe.push({
        text: "",
        dim: !1
      });
      let z = pn(N.text);
      switch (N.role) {
       case "tool":
        {
          let q = ut(`${yo} ${z.replace(/\n/g, " ")}`, h);
          oe.push({
            text: q,
            dim: !0
          });
          break;
        }

       case "thinking":
        {
          let q = z.replace(/\s+/g, " ").trim();
          for (let [ee, re] of wt(q, V).entries()) {
            let de = Z === 0 || re === "" ? "" : ee === 0 ? `${VLt} ` : "  ";
            oe.push({
              text: de + ge.italic(re),
              dim: !0
            });
          }
          break;
        }

       case "assistant":
        {
          let q = z;
          if (z.length <= on && performance.now() - se < an && !sn(z)) try {
            q = yn(z, p);
          } catch {
            q = z;
          }
          let ee = Gn("text", p)(yo);
          for (let [re, de] of wt(q, V).entries()) {
            let ue = Z === 0 || de === "" ? "" : re === 0 ? `${ee} ` : "  ";
            oe.push({
              text: ue + de,
              dim: !1
            });
          }
          break;
        }

       case "user":
        {
          let q = Gn("inactive", p)(`${Kt} `), ee = Gn("text", p), re = Gn("userMessageBackground", p, "background");
          for (let [de, ue] of wt(z, V).entries()) {
            let ae = Z === 0 ? "" : de === 0 ? q : "  ";
            oe.push({
              text: re(ae + ee(ue)),
              dim: !1
            });
          }
          break;
        }

       default:
        N.role;
      }
    }
  } finally {
    ge.level = Q;
  }
  let u = 0, o = [];
  for (let N = oe.length - 1; N >= 0; N--) {
    let z = oe[N], q = y(z.text);
    if (u + q > D) break;
    u += q, o.unshift(z.dim ? S(z.text) : z.text);
  }
  if (o.length === 0) return null;
  let A = n - u - T, P = [];
  for (let N = 0; N < A; N++) P.push("");
  P.push(...o);
  for (let N of v) P.push(S(N));
  let I = P.join(`\r\n`);
  if (I.length > 65536 + n * h * 32) I = I.replace(gn, "");
  return TD + I;
}

function Et(r, e, n, s) {
  let h;
  try {
    let w = Qr(r);
    if (!w.isFile() || w.size === 0) return null;
    let p = w.size;
    h = en(r, "r");
    let S = Math.max(0, p - Gt), y = Buffer.alloc(Math.min(p, Gt)), C = tn(h, y, 0, y.length, S), v = y.subarray(0, C).toString("utf8");
    if (S > 0) {
      let T = v.indexOf(`\n`);
      if (T < 0) return null;
      v = v.slice(T + 1);
    }
    return vn(v, e, n, s);
  } catch {
    return null;
  } finally {
    if (h !== void 0) try {
      Zr(h);
    } catch {}
  }
}

var Ue = 1048576, kn = 5e3, Cn = 12e3, St = 1e3, Xt = 500, Tn = 6e3, Rn = 3e4;

function Dn() {
  let r = k("tengu_bg_attach_stall_ms", kn);
  if (r === 0) return 0;
  let e = nf().length > 0 ? Cn : 2e3;
  return Math.max(e, r);
}

function On(r, e, n, s, h, w) {
  let p = r.dispatch;
  if (r.getPhase().kind !== "running" || e.destroyed || s()) return;
  h.add(p.short);
  let S = Yr(to(p.short), w).catch(() => null);
  r.kill("SIGTERM"), (async () => {
    let y = Date.now() + Tn;
    while (Date.now() < y && !r.record.outcome) await J(100);
    if (!h.has(p.short)) return;
    let C = await Yr(to(p.short), w).catch(() => null), v = C?.resumeSessionId ?? p.sessionId, T = C?.cwd ?? p.cwd, D = Zv(YB(w)), H = await nae(v, T, C?.linkScanPath, void 0, D), L = H.hasMessages;
    if (!L) await pje(H.path, D);
    if (!h.has(p.short)) return;
    let U = C?.respawnFlags ?? p.respawnFlags, G = (await S)?.tempo === "active";
    await n({
      ...p,
      cwd: T,
      source: "respawn",
      reattachEnv: void 0,
      attachStallRespawns: (p.attachStallRespawns ?? 0) + 1,
      launch: L ? {
        mode: "resume",
        sessionId: v,
        transcriptPath: H.path,
        fork: !1,
        flagArgs: G ? n9t(U) : r9t(U)
      } : v !== p.sessionId ? {
        mode: "prompt",
        args: [ "--session-id", v, ...U ]
      } : p.launch
    });
  })().catch(y => d(y)).finally(() => h.delete(p.short));
}

var bt = 1e4, In = 2500;

async function ojo(r, e, n, s = () => 0, h = () => !0, w = () => !1, p = new Promise(() => {}), S) {
  let y = jV();
  await yQt();
  let C = await Z_s();
  await qt(y).catch(() => {});
  let v = new Set, T = new Set, D = new Map, H = new Map, L = Me(), oe = {
    handles: r,
    onDispatch: e,
    onNudge: n,
    onShutdown: s,
    ready: h,
    whenReady: p,
    onYield: w,
    addLease: (u, o) => {
      if (H.has(u)) return;
      H.set(u, o);
      let A = Mn(o?.label);
      i("tengu_daemon_lease", {
        op: b("open"),
        label: A
      }), u.once("close", () => {
        H.delete(u), i("tengu_daemon_lease", {
          op: b("close"),
          label: A
        }), L.emit({
          op: "close",
          client: o
        });
      }), L.emit({
        op: "open",
        client: o
      });
    },
    listLeases: () => {
      let u = [];
      for (let o of H.values()) if (o) u.push(o);
      return u;
    },
    stallRespawnPending: T,
    settledDispatches: D,
    controlKey: C,
    storageV5: S,
    legacyOpProbe: new tr
  }, Z = !1, V = xn(u => {
    if (Z) {
      u.destroy();
      return;
    }
    u.on("error", () => u.destroy()), u.setTimeout(3e4, () => u.destroy()), v.add(u), 
    u.once("close", () => v.delete(u));
    let o = Qbs(u);
    if (o) {
      i("tengu_daemon_peer_uid_reject", {}), u.once("data", () => R(u, {
        ok: !1,
        code: "EPEERUID",
        error: o
      }));
      return;
    }
    let A = Buffer.alloc(0), P = I => {
      A = Buffer.concat([ A, I ]);
      let N = A.indexOf(10);
      if (N < 0) {
        if (A.length > Ue) u.off("data", P), R(u, {
          ok: !1,
          code: "ETOOLARGE",
          error: `request exceeds ${Ue >> 20}MB \u2014 shorten the prompt or send in parts`
        });
        return;
      }
      u.off("data", P), u.setTimeout(0);
      let z = A.subarray(0, N).toString("utf8"), q = A.subarray(N + 1);
      Nn(oe, u, z, q).catch(ee => {
        R(u, {
          ok: !1,
          error: l(ee),
          code: "EUNKNOWN"
        });
      });
    };
    u.on("data", P);
  }), Q = !1;
  V.on("error", u => {
    if (Q) {
      t(`bg control server bind: ${tk(l(u))}`, {
        level: "warn"
      });
      return;
    }
    d(u);
  });
  let se = Date.now() + bt;
  for (;;) try {
    await new Promise((u, o) => {
      let A = P => {
        Q = !1, o(P);
      };
      Q = !0, V.once("error", A), V.listen(y, () => {
        Q = !1, V.removeListener("error", A), u();
      });
    });
    break;
  } catch (u) {
    if (E(u) !== "EADDRINUSE" || Date.now() >= se) throw u;
    V.removeAllListeners("listening"), await J(100);
  }
  return {
    close: u => new Promise(o => {
      for (let A of v) A.destroy();
      if (u?.skipUnlink) return Z = !0, V.unref(), void o();
      V.close(() => {
        if (!u?.skipUnlink) qt(y).catch(() => {});
        o();
      });
    }),
    leaseCount: () => H.size,
    onLeaseChange: L,
    announceExit: u => {
      for (let [o, A] of H) if (A?.label === c4e) o.write(_({
        op: "lease",
        closing: u
      }) + `\n`);
    },
    noteSettledDispatch: (u, o, A) => {
      D.set(u, {
        nonce: o,
        refusal: A
      }), setTimeout((P, I, N) => {
        if (P.get(I)?.nonce === N) P.delete(I);
      }, Rn, D, u, o).unref();
    }
  };
}

function R(r, e) {
  if (r.destroyed) return;
  r.end(_(e) + `\n`);
}

function He(r, e) {
  if (r.destroyed) return;
  if (r.writableLength > Ue) {
    r.destroy();
    return;
  }
  r.write(_(e) + `\n`);
}

function Ie(r) {
  return !r.record.outcome && !r.isRetiring && !r.isKilling;
}

function Zt(r, e) {
  return r !== void 0 && e === void 0 ? We(r, 25) : J(25);
}

async function Qt(r, e, n, s, h, w, p, S) {
  let y = Date.now() + Math.min(p, 3e4), C = !1, v = !1, T, D, H = S?.then(L => {
    D = L;
  }, L => {
    d(L), D = "dropped";
  });
  while (Date.now() < y) {
    if (n.destroyed) return;
    let L = D === "dup-live" || D === "dropped" || D === "refused" || D === "closed", U = r.get(h), G = w !== void 0 && U?.record.nonce !== w ? e.get(h) : void 0;
    if (G !== void 0 && G.nonce === w) {
      if (G.refusal !== void 0) return R(n, {
        ok: !1,
        error: G.refusal,
        code: "ECWDGONE"
      });
      return R(n, {
        ok: !0,
        op: s,
        short: h,
        pid: 0,
        messagingSock: "",
        via: "cold"
      });
    }
    if (U) {
      if (w && U.record.nonce !== w) {
        if (v = !0, T = Ie(U) ? U : void 0, L) break;
        if (!T && !C) C = !0, y += Math.min(p, 3e4);
        await Zt(H, D);
        continue;
      }
      return R(n, {
        ok: !0,
        op: s,
        short: h,
        pid: U.record.pid,
        messagingSock: U.record.messagingSock ?? "",
        via: U.via
      });
    }
    if (T = void 0, L) break;
    await Zt(H, D);
  }
  if (v) {
    if (T && r.get(h) === T && Ie(T)) return R(n, {
      ok: !0,
      op: s,
      short: h,
      pid: T.record.pid,
      messagingSock: T.record.messagingSock ?? "",
      via: T.via
    });
    return R(n, {
      ok: !1,
      error: "a previous dispatch with this id is still being cleaned up \u2014 retry in a moment",
      code: "ESTALE"
    });
  }
  return R(n, {
    ok: !1,
    error: `${hm()} didn't acknowledge in time \u2014 retry`,
    code: "ETIMEOUT"
  });
}

class tr {
  fired=new Set;
  markFired(r) {
    if (this.fired.has(r)) return !1;
    return this.fired.add(r), !0;
  }
}

function er(r, e) {
  if (!r.markFired(e)) return;
  i("tengu_dead_probe_bg_legacy_op", {
    op: c(e)
  });
}

async function Nn(r, e, n, s) {
  let {handles: h, onDispatch: w, onNudge: p, onShutdown: S, ready: y, whenReady: C, onYield: v, addLease: T, listLeases: D, stallRespawnPending: H, settledDispatches: L, controlKey: U, storageV5: G, legacyOpProbe: oe} = r, Z;
  try {
    Z = Y(n);
  } catch {
    return R(e, {
      ok: !1,
      error: "bad json",
      code: "EUNKNOWN"
    });
  }
  if (Z === null || typeof Z !== "object") return R(e, {
    ok: !1,
    error: "bad json",
    code: "EUNKNOWN"
  });
  let V = Z.op;
  if (V === "ping") return R(e, {
    ok: !0,
    op: "ping",
    version: {
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
    proto: Xd,
    carriedPromptsFormat: chn
  });
  if (V === "nudge") {
    let o = await p();
    return R(e, {
      ok: !0,
      op: "nudge",
      restarting: o.restarting,
      upgradePending: o.upgradePending,
      version: {
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
      processWrapper: D1()
    });
  }
  if (V === "yield") return R(e, {
    ok: !0,
    op: "yield",
    yielding: v()
  });
  if (V === "lease") {
    let o = _Ne().safeParse(Z.client).data;
    T(e, o ? {
      ...o,
      pid: Slt(e) ?? o.pid
    } : null), e.write(_({
      ok: !0,
      op: "lease"
    }) + `\n`);
    return;
  }
  if (V === "leases") return R(e, {
    ok: !0,
    op: "leases",
    clients: D()
  });
  if (V === "shutdown") {
    let o = Z.reapWorkers !== !1, A = S(o);
    return R(e, {
      ok: !0,
      op: "shutdown",
      reaped: A
    });
  }
  if (!y() && V === "attach") {
    if (await Promise.race([ C, J(In, void 0, {
      unref: !0
    }) ]), e.destroyed) return;
  }
  if (!y()) return R(e, {
    ok: !1,
    error: `${hm()} starting (adoption in progress)`,
    code: "ESTARTING"
  });
  let Q = Z.proto;
  if (typeof Q !== "number" || !Number.isInteger(Q) || Q < W8t || Q > Xd) return i("tengu_bg_proto_mismatch", {
    client_proto: typeof Q === "number" ? Q : -1,
    server_proto: Xd
  }), R(e, {
    ok: !1,
    error: `proto mismatch (server=${Xd}, client=${Q}) \u2014 ${hm()} and CLI versions differ; restart claude`,
    code: "EPROTO",
    serverProto: Xd,
    serverVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION
  });
  let se = wso().safeParse(Z);
  if (!se.success) return R(e, {
    ok: !1,
    error: `malformed request: ${se.error.issues[0]?.message ?? "invalid"}`,
    code: "EUNKNOWN"
  });
  let u = se.data;
  switch (u.op) {
   case "ping":
   case "nudge":
   case "yield":
   case "lease":
   case "leases":
   case "shutdown":
    return;

   case "list":
    return R(e, {
      ok: !0,
      op: "list",
      jobs: Array.from(h.values()).map(o => o.isKilling || o.isRetiring ? {
        ...o.record,
        dying: !0
      } : o.record)
    });

   case "has":
    {
      let o = h.get(u.short), A = H.has(u.short);
      return R(e, {
        ok: !0,
        op: "has",
        alive: o !== void 0 && Ie(o) || A,
        present: o !== void 0 || A,
        ready: o !== void 0 && !o.isBooting
      });
    }

   case "await-ack":
    return Qt(h, L, e, "await-ack", u.short, u.nonce, u.timeoutMs);

   case "dispatch":
    if (!zH(u.auth, U)) return R(e, {
      ok: !1,
      error: "dispatch rejected: this client didn't present the daemon control key",
      code: "EAUTH"
    });
    if (await J(0), e.readableEnded || e.destroyed) {
      i("tengu_bg_dispatch_stale_drop", {});
      return;
    }
    return Qt(h, L, e, "dispatch", u.d.short, u.d.nonce, u.timeoutMs, w(u.d));

   case "reply":
    {
      if (!zH(u.auth, U)) return R(e, {
        ok: !1,
        error: u.auth === void 0 ? "reply rejected: this window didn't present the daemon control key \u2014 it is likely running a Claude Code older than the daemon (left open across an update?); restart this window and retry, or stop driving the control socket directly" : "reply rejected: the presented daemon control key doesn't match \u2014 retry, and restart the Claude Code daemon if this persists",
        code: "EAUTH"
      });
      let o = h.get(u.short);
      if (H.has(u.short) && (!o || !Ie(o))) return R(e, {
        ok: !1,
        error: `worker ${i4e} \u2014 restarting it; retry reply`,
        code: "ERESPAWNING"
      });
      if (!o || o.isRetiring || o.isKilling || o.record.outcome) return R(e, {
        ok: !1,
        error: "job not found \u2014 it may have already exited",
        code: "ENOJOB"
      });
      if (o.isUpgrading) return R(e, {
        ok: !1,
        error: `job is restarting on the ${fRt}; retry reply`,
        code: "ERESPAWNING"
      });
      if (u.nextTurn === !0 && o.record.cliVersion !== {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.299",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-13T21:37:33Z",
        GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
        HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION) return R(e, {
        ok: !1,
        error: "it runs a different Claude Code build",
        code: "ESKEW"
      });
      if (!await o.reply(u.text, {
        nextTurn: u.nextTurn === !0
      })) {
        if ((o.isBooting || o.isSpawnPending && o.isReplyQueueOnly) && !o.isUnverified && !o.record.legacy) {
          let A = "ERESPAWNING";
          if (!o.isBooting && u.nextTurn !== !0) {
            let P = to(u.short);
            if ((xMe(u.text, null) || await xso(P, G).then(N => N === "absent" ? o.dispatch.source === "spare" : N !== null && xMe(u.text, N)).catch(() => !1)) && !o.isBooting) A = "ENOREPLY";
          }
          return R(e, {
            ok: !1,
            error: "the session is still starting",
            code: A
          });
        }
        return R(e, {
          ok: !1,
          error: "job isn't accepting replies \u2014 it may be in a non-interactive state",
          code: "ENOREPLY"
        });
      }
      return R(e, {
        ok: !0,
        op: "reply"
      });
    }

   case "kill":
    {
      if (H.delete(u.short), u.evict) KQ(A => {
        delete A.workers[u.short];
      }, G).catch(A => d(A));
      let o = h.get(u.short);
      if (!o) return R(e, {
        ok: !1,
        error: "job not found \u2014 it may have already exited",
        code: "ENOJOB"
      });
      if (o.dispatch.launch.mode === "exec" && o.record.outcome) return h.delete(u.short), 
      R(e, {
        ok: !0,
        op: "kill"
      });
      return o.kill(u.signal ?? "SIGTERM", u.handoff ? "handoff" : "killed"), R(e, {
        ok: !0,
        op: "kill"
      });
    }

   case "respawn-stale":
    {
      er(oe, "respawn_stale");
      let o = h.get(u.short);
      if (!o) return R(e, {
        ok: !1,
        error: "job not found \u2014 it may have already exited",
        code: "ENOJOB"
      });
      let A = await o.respawnIfIdleStale();
      return R(e, {
        ok: !0,
        op: "respawn-stale",
        ...A
      });
    }

   case "resize":
    {
      let o = h.get(u.short);
      if (!o) return R(e, {
        ok: !1,
        error: "job not found \u2014 it may have already exited",
        code: "ENOJOB"
      });
      if (u.attachId) {
        let A = o.attachers.get(u.attachId);
        if (!A) return R(e, {
          ok: !0,
          op: "resize"
        });
        if (A.cols = u.cols, A.rows = u.rows, A.repaint) return A.repaint(), R(e, {
          ok: !0,
          op: "resize"
        });
      }
      return o.resize(u.cols, u.rows), R(e, {
        ok: !0,
        op: "resize"
      });
    }

   case "attach":
    {
      if (u.auth === void 0) t("[bg-attach] legacy client (no control key) \u2014 allowed via peerUid", {
        level: "warn"
      }); else if (!zH(u.auth, U)) return R(e, {
        ok: !1,
        error: "attach rejected: the presented daemon control key doesn't match \u2014 retry, and restart the Claude Code daemon if this persists",
        code: "EAUTH"
      });
      let o = h.get(u.short);
      if (H.has(u.short) && (!o || !Ie(o))) return R(e, {
        ok: !1,
        error: `worker ${i4e} \u2014 restarting it; retry attach`,
        code: "ERESPAWNING"
      });
      if (!o || o.isKilling || o.record.outcome && o.dispatch.launch.mode !== "exec") return R(e, {
        ok: !1,
        error: "job not found \u2014 it may have already exited",
        code: "ENOJOB"
      });
      if (o.isUnverified) return R(e, {
        ok: !1,
        error: "worker is live but supervisor could not verify its identity \u2014 try restarting the supervisor to re-adopt",
        code: "EUNVERIFIED"
      });
      if (o.isRetiring) return R(e, {
        ok: !1,
        error: "job is retiring; retry attach",
        code: "ERESPAWNING"
      });
      if (o.record.legacy) {
        let M = o.dispatch, j = await Yr(to(M.short), G).catch(() => null), me = j?.resumeSessionId ?? M.sessionId, he = j?.cwd ?? M.cwd, ve = Zv(YB(G)), De = await nae(me, he, j?.linkScanPath, void 0, ve), Ne = De.hasMessages;
        if (!Ne) await pje(De.path, ve);
        if (h.get(u.short) !== o || e.destroyed) return R(e, {
          ok: !1,
          error: "supervisor restarting",
          code: "ERESPAWNING"
        });
        if (!o.isKilling) i("tengu_bg_attach_legacy_autorespawn", {}), o.kill("SIGTERM"), 
        w({
          ...M,
          cwd: he,
          source: "respawn",
          reattachEnv: void 0,
          launch: Ne ? {
            mode: "resume",
            sessionId: me,
            transcriptPath: De.path,
            fork: !1,
            flagArgs: j?.tempo === "active" ? n9t(j?.respawnFlags ?? M.respawnFlags) : r9t(j?.respawnFlags ?? M.respawnFlags)
          } : me !== M.sessionId ? {
            mode: "prompt",
            args: [ "--session-id", me, ...j?.respawnFlags ?? M.respawnFlags ]
          } : M.launch
        }).catch(Ke => d(Ke));
        return R(e, {
          ok: !1,
          error: `${z8t} job respawning with worker-owned PTY; retry attach`,
          code: "ERESPAWNING"
        });
      }
      if (o.isUpgrading) return R(e, {
        ok: !1,
        error: `job is restarting on the ${fRt}; retry attach`,
        code: "ERESPAWNING"
      });
      if (await o.failIfHostExited("attach")) return R(e, {
        ok: !1,
        error: o.dispatch.launch.mode === "exec" ? l4e : a4e,
        code: "EHOSTDEAD"
      });
      if (e.destroyed) return;
      if (H.has(u.short) && (h.get(u.short) !== o || !Ie(o))) return R(e, {
        ok: !1,
        error: `worker ${i4e} \u2014 restarting it; retry attach`,
        code: "ERESPAWNING"
      });
      if (h.get(u.short) !== o || o.isKilling || o.record.outcome && o.dispatch.launch.mode !== "exec") return R(e, {
        ok: !1,
        error: "job not found \u2014 it may have already exited",
        code: "ENOJOB"
      });
      let A = o.liveTranscriptPath !== void 0 ? o.liveTranscriptPath : o.dispatch.launch.mode === "resume" ? o.dispatch.launch.transcriptPath : void 0, P = u.holdingFrame !== !0 && o.isBooting && A != null ? Et(A, u.cols, u.rows, {
        colorLevel: u.caps?.colorLevel,
        theme: u.caps?.systemTheme
      }) : null;
      T(e, null);
      let N = o.marksCapable ? An(16).toString("hex") : void 0;
      if (e.write(_({
        ok: !0,
        op: "attach",
        imarkNonce: N,
        decModes: o.decModeSnapshot(),
        via: o.via,
        booting: o.bootingForAttachMetrics,
        tempo: o.record.tempo,
        state: o.record.state,
        cached: P !== null,
        stale: Boolean(o.record.cliVersion && o.record.cliVersion !== {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.299",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-13T21:37:33Z",
          GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
          HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION),
        workerCliVersion: o.record.cliVersion
      }) + `\n`), i("tengu_bg_attach", {
        tempo: c(o.record.tempo),
        state: f2(o.record.state),
        via: c(o.via),
        attachers: o.attachers.size,
        stale: Boolean(o.record.cliVersion && o.record.cliVersion !== {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.299",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-13T21:37:33Z",
          GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
          HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION)
      }), P !== null) e.write(Rk + uS + P);
      let z = uS + eae, q = 6, ee = [], re = 0, de = "", ue = () => {}, ae, xe = 0, Se = !1, Te = Dn(), Pe = Te === 0 ? 0 : Math.max(1, Math.ceil((Te - Xt) / St)), Re = M => Xst(Rk + uS + `\n  \x1b[2m${M}\x1b[0m\n`), be, F = !1, X = () => {
        if (!F) return;
        if (F = !1, typeof o.replayInteractiveMarksTo === "function") o.replayInteractiveMarksTo(u.attachId ?? e);
      }, fe = M => {
        if (ee === null) return;
        be?.();
        let j = ee;
        if (ee = null, clearTimeout(at), M && !e.destroyed) for (let me of j) e.write(me);
        if (F = !0, M && j.length > 0) X();
      }, at = setTimeout(() => {
        let M = ee !== null && re === 0, j = M && (u.holdingFrame === !0 || P !== null);
        if (!j) fe(!0);
        if (M && !e.destroyed) {
          if (!j) {
            let he = o.record.state, ve = he === "starting" || he === "resuming" || he === "adopted" || he === "crashed" ? "Session is starting \u2014 it will appear once ready. Ctrl+Z to detach" : "Waiting for session to redraw\u2026 Ctrl+Z to detach";
            e.write(Re(ve));
          }
          let me = Date.now();
          ae = setInterval(() => {
            let he = Date.now(), ve = he - me;
            if (me = he, ve > St * 3) xe = 0;
            if (xe++, Pe > 0 && xe >= Pe && !o.isKilling && !o.isRetiring && !o.isBooting && o.dispatch.launch.mode !== "exec") {
              clearInterval(ae), ae = void 0, ue();
              let Ne = o.dispatch.attachStallRespawns ?? 0, Ke = {
                state: f2(o.record.state),
                via: c(o.via),
                attempt: Ne
              };
              if (Ne >= 2) {
                if (i("tengu_bg_attach_stall_gave_up", Ke), e.write(Re("Session keeps stalling at startup.") + Gre(rHn("ESTALLED", u.caps?.sessionTabs, `Session ${u.short} keeps stalling at startup \u2014 check ${to(u.short)} for logs.`))), 
                !o.isKilling) o.kill("SIGKILL", "failed", "session keeps stalling at startup");
                return;
              }
              if (i("tengu_bg_attach_stall_respawn", Ke), e.write(Re("Session not responding \u2014 restarting it\u2026")), 
              On(o, e, w, () => Se, H, G), !e.destroyed) e.write(Gre(rHn(Qst, u.caps?.sessionTabs, `worker ${i4e}, restarting`)));
              return;
            }
            let De = o.attachers.get(ye);
            ue(), ue = o.resizeForRepaint(De?.cols ?? u.cols, De?.rows ?? u.rows);
          }, St), ae.unref();
        }
      }, Xt), vt = () => {
        if (ae) clearInterval(ae), ae = void 0;
      }, st = o.onStream.subscribe(M => {
        if (e.destroyed) return;
        if (Se = !0, ee !== null) {
          let j = de + M;
          if (j.includes(Rk) || j.includes(z)) {
            vt();
            let me = M.includes(Rk) || M.includes(z) ? M : j;
            if (ue(), fe(!1), e.writableLength <= Ue) e.write(o.decModeSnapshot().map(pB).join("") + me), 
            X(); else e.destroy();
            return;
          }
          if (ee.push(M), re += M.length, de = j.slice(-q), re > 65536) fe(!0);
          return;
        }
        if (vt(), e.writableLength > Ue) {
          e.destroy();
          return;
        }
        e.write(M), X();
      }), lt = o.onRepaintDone.subscribe(() => {
        ue(), fe(!0);
      });
      if (O() === "windows") for (let M of o.attachers.values()) M.kick();
      let ye = u.attachId ?? e;
      if (o.attachers.set(ye, {
        cols: u.cols,
        rows: u.rows,
        caps: u.caps,
        imarkNonce: N,
        deliver: M => {
          if (!e.destroyed) e.write(M);
        },
        kick: () => {
          if (i("tengu_bg_attach_kick", {}), ae) clearInterval(ae), ae = void 0;
          if (clearTimeout(at), ue(), st(), lt(), e.removeAllListeners("data"), !e.destroyed) e.write(Gre(rHn("EKICKED", u.caps?.sessionTabs, Sso))), 
          e.end();
          o.attachers.delete(ye);
        }
      }), P !== null && A != null) {
        let M = o.attachers.get(ye);
        if (M) M.repaint = () => {
          if (e.destroyed) return;
          o.resize(M.cols, M.rows);
          let j = Et(A, M.cols, M.rows, {
            colorLevel: u.caps?.colorLevel,
            theme: u.caps?.systemTheme
          });
          e.write(Rk + uS + (j ?? ""));
        }, be = () => {
          M.repaint = void 0, be = void 0;
        };
      }
      o.noteActivity(), o.seedFocus(!0), o.sendAttacherCaps(u.caps ?? null);
      let Ge;
      if (o.dispatch.launch.mode === "exec") {
        let M = Xst(Rk + uS);
        e.write(M);
        for (let j of o.ringSnapshot()) e.write(j);
        if (fe(!1), Ge = () => {
          let j = o.attachers.get(ye);
          if (e.destroyed || !j) return;
          let me = o.record.outcome === "done" ? "done" : o.record.outcome === "killed" ? "stopped" : "failed", he = Xst(`\r\n\x1b[2m\u2014 ${me} \xb7 Ctrl+Z to return \u2014\x1b[0m\r\n`);
          e.write(he), j.repaint = () => {
            if (e.destroyed) return;
            e.write(M);
            for (let ve of o.ringSnapshot()) e.write(ve);
            e.write(he);
          };
        }, o.record.outcome) {
          Ge(), e.once("close", () => {
            clearTimeout(at), st(), lt(), o.attachers.delete(ye);
          });
          return;
        }
      }
      ue = o.resizeForRepaint(u.cols, u.rows);
      let cr = o.onSettle.subscribe(() => {
        if (Ge && o.record.outcome !== "killed") return Ge();
        e.end();
      }), At = new Pn("utf8"), ur = u.caps?.sessionTabs !== void 0, xt = M => {
        let j = At.write(M);
        if (j.length > 0 && (!Vt(j) || ur && jt(j))) o.lastInputAttacher = ye;
        o.write(j);
      };
      if (s.length) xt(s);
      e.on("data", xt), e.once("close", () => {
        if (ae) clearInterval(ae);
        if (ue(), fe(!1), st(), cr(), lt(), !o.attachers.delete(ye)) return;
        let M = At.end();
        if (M) o.write(M);
        if (o.attachers.size > 0) {
          let j = [ ...o.attachers.values() ].at(-1);
          o.resizeForRepaint(j.cols, j.rows), o.sendAttacherCaps(j.caps ? {
            ...j.caps,
            systemTheme: void 0
          } : null);
        } else o.seedFocus(!1), o.sendAttacherCaps(null);
      });
      return;
    }

   case "ensure-spare":
    return er(oe, "ensure_spare"), R(e, {
      ok: !0,
      op: "ensure-spare"
    });

   case "permission-response":
    if (!zH(u.auth, U)) return R(e, {
      ok: !1,
      error: "permission-response rejected: this client didn't present the daemon control key",
      code: "EAUTH"
    });
    return R(e, {
      ok: !0,
      op: "permission-response"
    });

   case "subscribe":
    {
      let o = h.get(u.short);
      if (!o) return R(e, {
        ok: !1,
        error: "job not found \u2014 it may have already exited",
        code: "ENOJOB"
      });
      if (T(e, null), He(e, {
        type: "snapshot",
        record: o.record,
        streamTail: o.tail(u.tail ?? 200)
      }), o.record.outcome) {
        He(e, {
          type: "settled",
          outcome: o.record.outcome
        }), e.end();
        return;
      }
      let A = [ o.onStream.subscribe(P => He(e, {
        type: "stream",
        line: P
      })), o.onState.subscribe(P => He(e, {
        type: "state",
        patch: P
      })), o.onSettle.subscribe(P => {
        He(e, {
          type: "settled",
          outcome: P
        }), e.end();
      }) ];
      e.on("close", () => {
        for (let P of A) P();
      });
      return;
    }

   default:
    return R(e, {
      ok: !1,
      error: `unknown op: ${u.op}`,
      code: "EUNKNOWN"
    });
  }
}

function Mn(r) {
  if (r === void 0) return;
  return pe(oHn.find(e => e === r)) ?? b("other");
}

var s2 = 45e3;

async function Lyt(r) {
  let e = Date.now() + r;
  while (Date.now() < e) {
    if ((await fg({
      proto: Xd,
      op: "ping"
    })).ok) return !0;
    await Ve(100);
  }
  return !1;
}

async function F3n(r, e) {
  let n = Date.now() + r, s = 0;
  while (!0) {
    let h = n - Date.now();
    if (h <= 0) return null;
    if (await Lyt(Math.min(h, 1e3))) {
      let w = Date.now();
      if (w >= s) {
        s = w + 1e3;
        let p = await Kw(1, e).catch(() => null);
        if (p?.origin === "service") return p;
        if (p?.origin === "foreground") return null;
      }
      await Ve(100);
    }
  }
}

async function Wn(r, e) {
  let n = Date.now(), s = !1, h, w = "restarting", p;
  while (Date.now() < n + (s ? 3e4 : 1e4)) {
    let S = await fg({
      proto: Xd,
      op: "nudge"
    });
    if (S.ok && S.op === "nudge") {
      if (s = !0, h = S.version, !S.restarting) {
        if (await Un(S.version, r, S.processWrapper, S.upgradePending === !0, e)) return "retired";
        let y = bf();
        if (y && !S.processWrapper) return {
          refuse: y
        };
        if (!S.processWrapper && D1() !== "" && !await O0()) return {
          refuse: yt()
        };
        sr(S.processWrapper);
        let C = S.version !== {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.299",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-13T21:37:33Z",
          GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
          HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION;
        if (Date.now() - n > 200 || C) i("tengu_bg_skew_nudge", {
          converged: !0,
          duration_ms: Date.now() - n,
          daemon_version: Di(S.version),
          skewed: C
        });
        return "up";
      }
      w = "restarting", await Ve(100);
      continue;
    }
    if (!S.ok && S.code === "ETIMEOUT") {
      s = !0, w = "etimeout", await Ve(100);
      continue;
    }
    if (!S.ok && S.code === "ENOCONN") {
      if (!s) {
        let y = await Kw(1, e).catch(() => null);
        if (y?.bgDisabled) return "down";
        if (y) s = !0;
      }
      if (p = ME(S.errno), !s) return "down";
      w = "enoconn", await Ve(100);
      continue;
    }
    {
      let y = bf();
      if (y) return {
        refuse: y
      };
      if (D1() !== "" && !await O0()) return {
        refuse: yt()
      };
    }
    return "up";
  }
  return i("tengu_bg_skew_nudge", {
    converged: !1,
    restarting: w === "restarting",
    etimeout: w === "etimeout",
    enoconn: w === "enoconn",
    daemon_version: Di(h),
    ...p && {
      connect_errno: p
    }
  }), "down";
}

async function Rq(r = {}, e) {
  if (O() !== "windows" && sbr()) return m("daemon_ensure_running", "uid_collapse"), 
  {
    ok: !1,
    reason: Hpo,
    causeCode: "uid_collapse"
  };
  return or(r, e, !1);
}

async function or(r, e, n) {
  let s = Date.now(), h = await Wn(r.forceTransient ?? !1, e);
  if (h === "up") return nt(n), {
    ok: !0
  };
  if (typeof h === "object") {
    if (r.spawnIntent) return m("daemon_ensure_running", "daemon_ensure_client_wrapper_refused"), 
    m("agent_launcher", "raw_daemon_client_misconfigured"), {
      ok: !1,
      reason: h.refuse,
      causeCode: "wrapper"
    };
    return nt(n), {
      ok: !0
    };
  }
  let w = Date.now(), p = w - s > 4e4, S = r.standsDownAtExit && h !== "retired", y = await ar(), C = y ? await N3n() : {
    execPathStale: !1,
    launcherPrefixDead: !1
  }, v = y && (C.execPathStale || C.launcherPrefixDead);
  if (v) i("tengu_bg_daemon_service_stale_exec", {
    launcher_dead: C.launcherPrefixDead
  }), t(C.execPathStale ? "daemon service exec path is stale (binary deleted) \u2014 falling back to transient spawn. Run 'claude daemon install' to repair." : "daemon service unit starts through a launcher that was deleted or is no longer executable \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.", {
    level: "warn"
  });
  let T = !1;
  if (y && !v) {
    if (T = !0, S && wn()) return rr(!0, s);
    r.onStarting?.();
    let F = await nr(e);
    if (F) return m("daemon_ensure_running", F.code), {
      ok: !1,
      reason: F.reason,
      causeCode: F.causeCode
    };
    let X = await L3n(), fe = await Lyt(5e3);
    if (i("tengu_bg_daemon_install", {
      outcome_ok: fe,
      via_service: !0,
      fresh_install: !1,
      clock_jump: p,
      duration_ms: Date.now() - s,
      platform_darwin: O() === "macos",
      platform_linux: O() === "linux",
      platform_windows: O() === "windows"
    }), fe) return nt(n), {
      ok: !0
    };
    i("tengu_bg_daemon_service_poll_fallthrough", {
      sr_ok: X.ok
    }), t(`daemon service ${qJe} 5s${X.ok ? "" : ` (${X.error})`} \u2014 falling back to transient spawn. Run 'claude daemon install' to repair.`, {
      level: "warn"
    });
  }
  if (!y && !r.forceTransient && kmr() === "ask" && await lr() && !ce().daemonInstallPromptDismissed) return i("tengu_bg_daemon_cold_start_ask", {}), 
  {
    ok: !1,
    askInstall: !0,
    causeCode: "ask",
    reason: "No background daemon is running. Run 'claude daemon install' to set it up as a persistent service."
  };
  if (!T) {
    let F = bf();
    if (!await O0() && await Kw(1, e).catch(() => null)) return m("daemon_ensure_running", "daemon_ensure_client_wrapper_refused"), 
    m("agent_launcher", "zombie_kill_client_misconfigured"), {
      ok: !1,
      reason: F ?? yt(),
      causeCode: "wrapper"
    };
    if (S && wn()) return rr(!1, s);
    r.onStarting?.();
    let X = await nr(e);
    if (X) return m("daemon_ensure_running", X.code), {
      ok: !1,
      reason: X.reason,
      causeCode: X.causeCode
    };
  }
  let D = RL(), H = D.lastTransientSpawnAt === null ? null : Date.now() - D.lastTransientSpawnAt;
  D.lastTransientSpawnAt = Date.now();
  let L = _({
    label: Vn(),
    cwd: le(),
    ...r.spawnedBy,
    pid: process.pid
  }), U = Date.now(), G = [ "daemon", "run", "--origin", "transient", "--spawned-by", L ], oe = () => $3n(G, void 0, {
    withoutOAuthTokenEnv: r.withoutOAuthTokenEnv
  }), Z = await oe(), {err: V, child: Q, recoveredAfterReinstallWait: se, gaveUpOnNpmInstallInProgress: u, reinstallWaitedMs: o = 0} = Z, A = Z.stderrPath;
  if (V) {
    if (A) tt(rt(A), {
      recursive: !0,
      force: !0
    }).catch(() => {});
    return i("tengu_bg_daemon_spawn_failed", {
      errno_enoent: E(V) === "ENOENT",
      errno_eacces: E(V) === "EACCES",
      errno: zr(V) ?? b("unknown"),
      launcher_configured: nf().length > 0 || bf() !== null
    }), m("daemon_ensure_running", "daemon_ensure_spawn_failed"), {
      ok: !1,
      reason: u ? `Claude Code is being updated by npm on this machine (still not runnable after ${Math.round(Ze / 6e4)} min, ${zr(V) ?? "spawn failed"}) \u2014 try again when the update finishes` : `spawn ${hm()}: ${l(V)}`,
      causeCode: zr(V) ?? "spawn"
    };
  }
  let P = ht({
    spawnIssuedAt: U + o,
    child: Q,
    stderrPath: A,
    wrapperConfigured: nf().length > 0,
    storageV5: e
  }), I = await Be(P, Date.now() + 3e4, !1), N = Date.now() - w - o > 6e4;
  if (!I && N) I = await Be(P, Date.now() + 5e3, !1);
  if (!I && !N) I = await Be(P, Math.max(Date.now() + (s2 - 3e4), P.spawnIssuedAt + s2), !0);
  let z = !1, q = 0, ee = !1;
  if (!I && !N && await Bt(P, ot())) {
    let F = await Qe(ot());
    if (q += F.waitedMs, i("tengu_bg_daemon_spawn_reinstall_wait", {
      waited_ms: F.waitedMs,
      recovered: F.recovered,
      extended: F.extended,
      install_in_progress: F.installInProgressAtEnd,
      after_child_exit: !0
    }), ee = !F.recovered && F.installInProgressAtEnd, F.recovered) {
      let X = await oe();
      if (X.err === null) {
        if (z = !0, q = 0, A) tt(rt(A), {
          recursive: !0,
          force: !0
        }).catch(() => {});
        A = X.stderrPath, P = ht({
          spawnIssuedAt: Date.now(),
          child: X.child,
          stderrPath: A,
          wrapperConfigured: nf().length > 0,
          storageV5: e
        }), t(`daemon: ${ot()} was being reinstalled when the first daemon was spawned (it exited at once); restarted it after ${F.waitedMs}ms`), 
        I = await Be(P, P.spawnIssuedAt + s2, !0);
      } else if (t(`daemon: respawn after the npm reinstall window failed: ${l(X.err)}`, {
        level: "warn"
      }), i("tengu_bg_daemon_spawn_failed", {
        errno: zr(X.err) ?? b("unknown"),
        launcher_configured: nf().length > 0 || bf() !== null,
        after_reinstall_wait: !0
      }), X.stderrPath) tt(rt(X.stderrPath), {
        recursive: !0,
        force: !0
      }).catch(() => {});
    }
  }
  let re = P.budgetExtended ? gt : s2, de = !I && !N && Date.now() - P.spawnIssuedAt - q > re + 6e4, ue = !I && (N || de) && !n && !await _t(P), ae = !1, xe, Se, Te;
  if (!I) {
    let F = await et(P, !0);
    if (Te = Wt(F), F.length > 0) {
      ae = !0, t(`daemon: transient spawn stderr:\n${F}`, {
        level: "error"
      }), xe = [ ...F.matchAll(/\bE[A-Z]{2,14}\b/g) ].find(fe => !"/\\".includes(F[fe.index - 1] ?? "."))?.[0];
      let X = F.split(/\r?\n/).map(fe => Br(cn(fe))).find(fe => fe.length > 0);
      Se = X && X.length > 200 ? `${ne(X, 200)}\u2026` : X;
    }
  }
  if (A) tt(rt(A), {
    recursive: !0,
    force: !0
  }).catch(() => {});
  if (i("tengu_bg_daemon_install", {
    outcome_ok: I,
    via_service: !1,
    fresh_install: !1,
    clock_jump: N || p || de,
    duration_ms: Date.now() - s,
    platform_darwin: O() === "macos",
    platform_linux: O() === "linux",
    platform_windows: O() === "windows",
    had_stderr: ae,
    child_exited: P.childExit !== null,
    ...P.childExit?.code !== void 0 && P.childExit.code !== null && {
      exit_code: P.childExit.code
    },
    ...P.childExit?.signal && {
      exit_signal: pe(P.childExit.signal)
    },
    ...P.childExitAt !== null && {
      child_exit_ms: Math.max(0, P.childExitAt - P.spawnIssuedAt)
    },
    ...Te && {
      stderr_class: Te
    },
    reinstall_respawn: z,
    budget_extended: P.budgetExtended,
    ...ue && {
      clock_jump_retry: b("scheduled")
    },
    ...n && {
      clock_jump_retry: b("retry")
    },
    ...H !== null && {
      spawn_gap_ms: H
    },
    ...r.spawnedBy !== void 0 && {
      spawned_by: pe(oHn.find(F => F === r.spawnedBy?.label)) ?? b("other")
    },
    ...xe && {
      stderr_errno: ME(xe)
    },
    ...!I && await Ut(P)
  }), I) {
    if (jn(), se || z) f("daemon_ensure_running", "daemon_ensure_spawn_waited_reinstall"); else nt(n);
    if (nf().length > 0) {
      let F = await fg({
        proto: Xd,
        op: "nudge"
      }).catch(() => null);
      sr(F?.ok && F.op === "nudge" ? F.processWrapper : void 0);
    }
    return {
      ok: !0
    };
  }
  if (ue) return t("daemon: the clock jumped during the cold start (machine slept?) and the daemon is still unreachable \u2014 retrying the whole start once", {
    level: "warn"
  }), or({
    ...r,
    onStarting: void 0,
    standsDownAtExit: !1
  }, e, !0);
  m("daemon_ensure_running", "daemon_ensure_transient_unreachable");
  let Pe = ee ? ` \u2014 Claude Code is being updated by npm on this machine (still not runnable after ${Math.round(Ze / 6e4)} min); try again when the update finishes` : "", Re = nf()[0];
  if (Re) return i("tengu_bg_daemon_spawn_failed", {
    launcher_configured: !0,
    failed_stage: b("unknown")
  }), m("agent_launcher", "daemon_never_reachable"), {
    ok: !1,
    causeCode: "timeout",
    reason: `launcher \`${Re}\` ran but Claude Code never started${Se ? ` \u2014 ${Se}` : ` (nothing on stderr within ${re / 1e3}s)`}${Pe}`
  };
  let be = P.siblingHolderSeen ? null : P.childExit;
  if (be) {
    let F = be.signal ? `signal ${be.signal}` : `exit code ${be.code ?? "?"}`;
    return {
      ok: !1,
      causeCode: "exited",
      reason: Se ? `${hm()} ${YJe} (${F}): ${Se}${Pe}` : `${hm()} ${YJe} (${F}, nothing on stderr) and no other ${hm()} answered within ${Math.round(Math.min(Date.now() - P.spawnIssuedAt - q, re) / 1e3)}s${Pe}`
    };
  }
  return {
    ok: !1,
    causeCode: "timeout",
    reason: `${hm()} ${qJe} ${re / 1e3}s${Pe}`
  };
}

function rr(r, e) {
  return t("daemon: not started, because this process is exiting"), i("tengu_bg_daemon_stood_down_at_exit", {
    via_service: r,
    duration_ms: Date.now() - e
  }), f("daemon_ensure_running", "daemon_ensure_stood_down_at_exit"), {
    ok: !1,
    stoodDown: !0,
    viaService: r,
    causeCode: "exiting",
    reason: "this process is exiting"
  };
}

function nt(r) {
  if (r) {
    f("daemon_ensure_running", "daemon_ensure_clock_jump_retried");
    return;
  }
  g("daemon_ensure_running");
}

function ot() {
  return vu().target;
}

function Hn(r) {
  if (r.daemonOrigin !== "transient") return !1;
  if (r.daemonVersion === r.clientVersion) return !1;
  if (r.daemonTarget === r.clientTarget) return !1;
  let e = t7e(r.daemonVersion), n = t7e(r.clientVersion);
  if (e !== null && n !== null) {
    if (ZQe(r.daemonVersion) !== ZQe(r.clientVersion)) return !1;
    return n > e;
  }
  if (xBt(r.daemonVersion) || xBt(r.clientVersion)) return !1;
  return je.valid(r.clientVersion) !== null && je.valid(r.daemonVersion) !== null && je.gt(r.clientVersion, r.daemonVersion);
}

async function Un(r, e, n, s, h) {
  if (bf() !== null) return !1;
  if (!k("tengu_bg_binary_takeover", !0)) return !1;
  let w = r !== {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION, p = w && !s, S = Fn(n, w);
  if (!p && !S) return !1;
  if (!await O0()) return !1;
  if (await ar()) return !1;
  if (!e && kmr() === "ask" && await lr() && !ce().daemonInstallPromptDismissed) return !1;
  let y = await Bn(ot()).catch(() => null);
  if (!y) return !1;
  let C = ONe().cmd;
  if (!await _e(C)) {
    let U = ONe({
      pinToCurrentBinary: !0
    }).cmd;
    if (U === C || !await _e(U)) return !1;
  }
  let v = await Kw(1, h).catch(() => null);
  if (!v) return !1;
  if (!oSt(v)) return t(`bg: skipping stale-daemon retire \u2014 lock pid ${v.pid} has no procStart identity`), 
  !1;
  let T = Hn({
    daemonVersion: v.version,
    daemonOrigin: v.origin,
    daemonTarget: v.launchTarget,
    clientVersion: {
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
    clientTarget: y
  }), D = p && T, H = S && v.origin === "transient" && !v.processWrapper && (v.version === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION || s && T);
  if (!D && !H) return !1;
  let L = await czt(v.pid);
  if (L === "timed-out") {
    try {
      process.kill(v.pid, "SIGKILL");
    } catch {}
    L = await czt(v.pid);
  }
  if (L !== "exited") return !1;
  if (H) RL().prefixAxis = "took-over";
  return t(D ? `bg: ${hm()} pid ${v.pid} runs ${v.version}; this binary (${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION}) is a newer build \u2014 retired the stale ${hm()} so new sessions use the current binary` : `bg: ${hm()} pid ${v.pid} predates CLAUDE_CODE_PROCESS_WRAPPER and spawns sessions unwrapped \u2014 retired it so the replacement runs through the configured launcher`, {
    level: "warn"
  }), i("tengu_bg_daemon_binary_takeover", {
    daemon_age_ms: Date.now() - v.startedAt,
    via_prefix: H,
    via_version: D,
    daemon_version: Di(v.version)
  }), !0;
}

function Fn(r, e) {
  if (D1() === "" || r) return !1;
  let s = RL();
  if (s.prefixAxis === "took-over") {
    if (e) return !1;
    if (!s.prefixContractViolationLogged) s.prefixContractViolationLogged = !0, t(`bg: a raw ${hm()} is running again after this session's launcher-driven restart. Two causes look identical from here: a claude session started BEFORE CLAUDE_CODE_PROCESS_WRAPPER was deployed cold-started it (restart those sessions), or the launcher does not pass that variable through in the environment it hands to \`exec\` (launcher contract #3). Sessions dispatched to it run unwrapped either way; \`claude daemon status\` shows the launcher it records.`, {
      level: "warn"
    }), i("tengu_bg_launcher_replacement_raw", {});
    return !1;
  }
  if (e) return !0;
  if (s.prefixAxis === "attempted") return !1;
  return s.prefixAxis = "attempted", !0;
}

async function nr(r) {
  let e = await Kw(1, r).catch(() => null);
  if (!e) return null;
  if (e.bgDisabled) return i("tengu_bg_daemon_bg_disabled_skip", {
    origin_service: e.origin === "service"
  }), {
    reason: "the background service on this machine is running without background sessions \u2014 its control socket failed to start. " + "Check the cause with 'claude daemon status' (daemon.log), then restart the service (launchctl/systemctl, or reboot).",
    code: "daemon_ensure_bg_disabled",
    causeCode: "bg_disabled"
  };
  if (Date.now() - e.startedAt <= bt + 5e3) return null;
  let n = await fg({
    proto: Xd,
    op: "ping"
  }, {
    timeoutMs: 1e3
  }), s = {
    started_ago_ms: Date.now() - e.startedAt,
    origin_transient: e.origin === "transient",
    origin_service: e.origin === "service",
    version_skew: e.version !== {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION
  };
  if (n.ok || n.code === "ETIMEOUT") return i("tengu_bg_daemon_zombie_false_positive", {
    ...s,
    recheck_etimeout: !n.ok
  }), null;
  if (!oSt(e)) return t(`bg: supervisor lock pid ${e.pid} alive but identity unverifiable (no procStart) \u2014 not signalled`, {
    level: "warn"
  }), {
    reason: `${THe({
      pid: e.pid,
      outcome: "unverified"
    })}. If no daemon is running, delete ${xM()}; if pid ${e.pid} is a live process you own, stop it yourself first.`,
    code: "daemon_ensure_zombie_unverified",
    causeCode: "zombie"
  };
  let h = !1;
  try {
    h = await Ln(jV()).then(() => !0, () => !1);
  } catch {}
  if (t(`bg: supervisor pid ${e.pid} alive but control socket unreachable \u2014 signalling restart`, {
    level: "warn"
  }), await czt(e.pid) === "eperm") return {
    reason: `${hm()} socket missing; could not restart supervisor (EPERM)`,
    code: "daemon_ensure_zombie_kill_failed",
    causeCode: "zombie"
  };
  return i("tengu_bg_daemon_zombie_restart", {
    pid: e.pid,
    ...s,
    sock_exists: h
  }), null;
}

async function ar() {
  if (ir() || !await ize()) return !1;
  return JX().catch(() => !1);
}

function ir() {
  return Boolean(process.env.CLAUDE_CONFIG_DIR);
}

async function sjo() {
  return !ir() && Ct();
}

function Vn() {
  let r = process.argv.slice(2);
  if (r[0] === "agents") return "claude agents";
  if (r.includes("--bg")) return "claude --bg";
  return "claude";
}

async function jn() {
  let r = O();
  if (r !== "linux" && r !== "wsl") return;
  let e = await $n("/etc/systemd/logind.conf", "utf8").catch(() => "");
  if (!/^\s*KillUserProcesses\s*=\s*yes\b/im.test(e)) return;
  t("logind KillUserProcesses=yes \u2014 SSH disconnect will kill the transient daemon and its background jobs. Run `loginctl enable-linger $USER` or `claude daemon install` to keep it alive across logout.", {
    level: "warn"
  });
}

function yt() {
  return `${qT}: launcher \`${nf()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`;
}

function sr(r) {
  let e = D1();
  if (e === "" || !r) return;
  if (r === e) g("agent_launcher"); else f("agent_launcher", "served_by_skewed_wrapper");
}

async function lr() {
  return n4e() && await ize() && !process.env.CLAUDE_CONFIG_DIR && t4e();
}

function U3n(r) {
  return Fe.daemon([ "host-managed", r ]);
}

function CBt(r) {
  return (Le(r?.CLAUDE_CODE_USE_GATEWAY) ? `gateway\n` : "") + (Le(r?.CLAUDE_CODE_HOST_GATEWAY_LINEAGE) ? `lineage\n` : "");
}

function ijo(r) {
  let e = new Set(r.split(/\r?\n/));
  return {
    gateway: e.has("gateway"),
    lineage: e.has("lineage")
  };
}

var Kn = {
  namespace: "daemon",
  relPath: [ "host-managed" ]
};

async function Ffn(r) {
  let e = await r.ensureScope(Kn);
  if (!e.ok) throw dr(Error("host tombstone folder not made", {
    cause: e.error
  }), e.error);
}

async function Ufn(r, e, n) {
  let s = await r.write(U3n(e), n, {
    publishDiscipline: "inPlace"
  });
  if (!s.ok) throw dr(Error("host tombstone write failed", {
    cause: s.error
  }), s.error);
}

async function RBt(r, e) {
  await r.delete(U3n(e)).catch(() => {});
}

function dr(r, e) {
  let n = Zf(e);
  return Object.assign(r, n !== void 0 ? {
    code: n
  } : {});
}

export { RL, njo, ize, sFr, TBt, Dyt, L3n, ABt, rjo, N3n, JX, $3n, xMe, QQe, iFr, Cte, ojo, s2, Lyt, F3n, Rq, sjo, U3n, CBt, ijo, Ffn, Ufn, RBt };
