// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ve } from "./chunk-3pqddg8f.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { it, ft } from "./chunk-zscnwzv2.js";

import { cSe, u$n, Noe, z$e, R8, sIt } from "./chunk-1svny8da.js";

import { Ce, ce } from "./chunk-xywp7esx.js";

import { xMt } from "./chunk-f4pq99ck.js";

import { O } from "./chunk-1xnsr4dy.js";

import { homedir as o } from "os";

async function nCn() {
  if ((await it("which", [ "uv" ])).code === 0) return t("[it2Setup] Found uv (will use uv tool install)"), 
  "uvx";
  if ((await it("which", [ "pipx" ])).code === 0) return t("[it2Setup] Found pipx package manager"), 
  "pipx";
  if ((await it("which", [ "pip" ])).code === 0) return t("[it2Setup] Found pip package manager"), 
  "pip";
  if ((await it("which", [ "pip3" ])).code === 0) return t("[it2Setup] Found pip3 package manager"), 
  "pip";
  return t("[it2Setup] No Python package manager found"), null;
}

async function k() {
  return (await it("which", [ "it2" ])).code === 0;
}

async function rJr(e) {
  t(`[it2Setup] Installing it2 using ${e}`);
  let n;
  switch (e) {
   case "uvx":
    n = await ft("uv", [ "tool", "install", "it2" ], {
      cwd: o()
    });
    break;

   case "pipx":
    n = await ft("pipx", [ "install", "it2" ], {
      cwd: o()
    });
    break;

   case "pip":
    if (n = await ft("pip", [ "install", "--user", "it2" ], {
      cwd: o()
    }), n.code !== 0) n = await ft("pip3", [ "install", "--user", "it2" ], {
      cwd: o()
    });
    break;
  }
  if (n.code !== 0) {
    let a = n.stderr || "Unknown installation error";
    return t(`[it2Setup] Failed to install it2: ${a}`, {
      level: "error"
    }), m("swarm_iterm2_it2_install", `${e}_install_failed`), {
      success: !1,
      error: a,
      packageManager: e
    };
  }
  return t("[it2Setup] it2 installed successfully"), g("swarm_iterm2_it2_install"), 
  {
    success: !0,
    packageManager: e
  };
}

async function oJr() {
  if (t("[it2Setup] Verifying it2 setup..."), !await k()) return m("swarm_iterm2_it2_verify", "not_installed"), 
  {
    success: !1,
    error: "it2 CLI is not installed or not in PATH"
  };
  let n = await it("it2", [ "session", "list" ]);
  if (n.code !== 0) {
    let a = n.stderr.toLowerCase();
    if (a.includes("api") || a.includes("python") || a.includes("connection refused") || a.includes("not enabled")) return t("[it2Setup] Python API not enabled in iTerm2"), 
    f("swarm_iterm2_it2_verify", "python_api_not_enabled"), {
      success: !1,
      error: "Python API not enabled in iTerm2 preferences",
      needsPythonApiEnabled: !0
    };
    return m("swarm_iterm2_it2_verify", "communication_failed"), {
      success: !1,
      error: n.stderr || "Failed to communicate with iTerm2"
    };
  }
  return t("[it2Setup] it2 setup verified successfully"), g("swarm_iterm2_it2_verify"), 
  {
    success: !0
  };
}

function sJr() {
  return [ "Almost done! Enable the Python API in iTerm2:", "", "  iTerm2 \u2192 Settings \u2192 General \u2192 Magic \u2192 Enable Python API", "", "After enabling, you may need to restart iTerm2." ];
}

function iJr(e) {
  if (ce().iterm2It2SetupComplete !== !0) Ce(a => ({
    ...a,
    iterm2It2SetupComplete: !0
  }), e), t("[it2Setup] Marked it2 setup as complete");
}

function aJr(e, n) {
  if (ce().preferTmuxOverIterm2 !== e) Ce(s => ({
    ...s,
    preferTmuxOverIterm2: e
  }), n), t(`[it2Setup] Set preferTmuxOverIterm2 = ${e}`);
}

function d() {
  return ce().preferTmuxOverIterm2 === !0;
}

async function Vsr(e = cSe) {
  if (e.backendsRegistered) return;
  let {TmuxBackend: n} = await import("./chunk-14yzx1g1.js"), {ITermBackend: a} = await import("./chunk-vnzeszse.js");
  e.TmuxBackendClass = n, e.ITermBackendClass = a, e.backendsRegistered = !0;
}

function c(e) {
  if (e.tmuxBackend) return e.tmuxBackend;
  if (!e.TmuxBackendClass) throw Error("TmuxBackend not registered. Import TmuxBackend.ts before using the registry.");
  return e.tmuxBackend = new e.TmuxBackendClass, e.tmuxBackend;
}

function u(e) {
  if (e.itermBackend) return e.itermBackend;
  if (!e.ITermBackendClass) throw Error("ITermBackend not registered. Import ITermBackend.ts before using the registry.");
  return e.itermBackend = new e.ITermBackendClass, e.itermBackend;
}

async function rCn(e = cSe) {
  if (await Vsr(e), e.cachedDetectionResult) return t(`[BackendRegistry] Using cached backend: ${e.cachedDetectionResult.backend.type}`), 
  e.cachedDetectionResult;
  if (t("[BackendRegistry] Starting backend detection..."), xMt() === "iterm2") {
    if (!R8(e)) throw m("swarm_backend_detect", "iterm2_explicit_not_in_iterm2"), Error('teammateMode is set to "iterm2" but this session is not running inside iTerm2. Launch Claude from iTerm2, or change teammateMode in settings.');
    if (!await sIt(e)) throw m("swarm_backend_detect", "iterm2_explicit_no_it2"), Error('teammateMode is set to "iterm2" but the it2 CLI is not reachable. Install it with `pip install it2` and enable the Python API in iTerm2 (Preferences > General > Magic > Enable Python API).');
    t("[BackendRegistry] Selected: iterm2 (explicit teammateMode)");
    let i = u(e);
    return e.cachedDetectionResult = {
      backend: i,
      isNative: !0,
      needsIt2Setup: !1
    }, g("swarm_backend_detect"), e.cachedDetectionResult;
  }
  let n = await Noe(), a = R8(e);
  if (t(`[BackendRegistry] Environment: insideTmux=${n}, inITerm2=${a}`), n) {
    t("[BackendRegistry] Selected: tmux (running inside tmux session)");
    let i = c(e);
    return e.cachedDetectionResult = {
      backend: i,
      isNative: !0,
      needsIt2Setup: !1
    }, g("swarm_backend_detect"), e.cachedDetectionResult;
  }
  if (a) {
    let i = d();
    if (i) t("[BackendRegistry] User prefers tmux over iTerm2, skipping iTerm2 detection"); else {
      let r = await sIt(e);
      if (t(`[BackendRegistry] iTerm2 detected, it2 CLI available: ${r}`), r) {
        t("[BackendRegistry] Selected: iterm2 (native iTerm2 with it2 CLI)");
        let p = u(e);
        return e.cachedDetectionResult = {
          backend: p,
          isNative: !0,
          needsIt2Setup: !1
        }, g("swarm_backend_detect"), e.cachedDetectionResult;
      }
    }
    let l = await z$e();
    if (t(`[BackendRegistry] it2 not available, tmux available: ${l}`), l) {
      t("[BackendRegistry] Selected: tmux (fallback in iTerm2, it2 setup recommended)");
      let r = c(e);
      return e.cachedDetectionResult = {
        backend: r,
        isNative: !1,
        needsIt2Setup: !i
      }, f("swarm_backend_detect", i ? "fallback_to_tmux" : "needs_it2_setup"), e.cachedDetectionResult;
    }
    throw t("[BackendRegistry] ERROR: iTerm2 detected but no it2 CLI and no tmux"), 
    m("swarm_backend_detect", "iterm2_no_it2_no_tmux"), Error("iTerm2 detected but it2 CLI not installed. Install it2 with: pip install it2");
  }
  let s = await z$e();
  if (t(`[BackendRegistry] Not in tmux or iTerm2, tmux available: ${s}`), s) {
    t("[BackendRegistry] Selected: tmux (external session mode)");
    let i = c(e);
    return e.cachedDetectionResult = {
      backend: i,
      isNative: !1,
      needsIt2Setup: !1
    }, g("swarm_backend_detect"), e.cachedDetectionResult;
  }
  throw t("[BackendRegistry] ERROR: No pane backend available"), m("swarm_backend_detect", "no_backend_available"), 
  Error(x());
}

function x() {
  switch (O()) {
   case "macos":
    return `To use agent swarms, install tmux:\n  brew install tmux\nThen start a tmux session with: tmux new-session -s claude`;

   case "linux":
   case "wsl":
    return `To use agent swarms, install tmux:\n  sudo apt install tmux    # Ubuntu/Debian\n  sudo dnf install tmux    # Fedora/RHEL\nThen start a tmux session with: tmux new-session -s claude`;

   case "windows":
    return `To use agent swarms, you need tmux which requires WSL (Windows Subsystem for Linux).\nInstall WSL first, then inside WSL run:\n  sudo apt install tmux\nThen start a tmux session with: tmux new-session -s claude`;

   default:
    return `To use agent swarms, install tmux using your system's package manager.\nThen start a tmux session with: tmux new-session -s claude`;
  }
}

function _4t(e, n = cSe) {
  switch (e) {
   case "tmux":
    return c(n);

   case "iterm2":
    return u(n);
  }
}

function lJr(e = cSe) {
  return e.cachedDetectionResult;
}

function dJr(e = cSe) {
  t("[BackendRegistry] Marking in-process fallback as active"), e.inProcessFallbackActive = !0;
}

function w() {
  return xMt();
}

function b4t(e = cSe) {
  if (ve()) return t("[BackendRegistry] isInProcessEnabled: true (non-interactive session)"), 
  !0;
  let n = w(), a;
  if (n === "in-process") a = !0; else if (n === "tmux" || n === "iterm2") a = !1; else {
    if (e.inProcessFallbackActive) return t("[BackendRegistry] isInProcessEnabled: true (fallback after pane backend unavailable)"), 
    !0;
    let s = u$n(), i = R8(e);
    a = !s && !i;
  }
  return t(`[BackendRegistry] isInProcessEnabled: ${a} (mode=${n}, insideTmux=${u$n()}, inITerm2=${R8(e)})`), 
  a;
}

function S4t(e = cSe) {
  e.cachedDetectionResult = null, e.backendsRegistered = !1, e.inProcessFallbackActive = !1;
}

export { nCn, rJr, oJr, sJr, iJr, aJr, Vsr, rCn, _4t, lJr, dJr, b4t, S4t };
