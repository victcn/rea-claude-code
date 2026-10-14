// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l, E } from "./chunk-b0z4bv3v.js";

import { We } from "./chunk-nvtwm272.js";

import { Rd, a } from "./chunk-j016gcgm.js";

import { Ct } from "./chunk-6ah1819r.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { ax } from "./chunk-4dwgr3et.js";

import { spawn as h } from "child_process";

import { isAbsolute as v } from "path";

import { createInterface as T } from "readline";

var _ = "/root/.local/bin/vitals-emitter-guest", w = "vitals-emitter-guest", o = 5e3, p = 1e3, d = 3e4;

async function iun(e) {
  let {log: r} = e;
  try {
    if (a.CLAUDE_CODE_DISABLE_VITALS_EMITTER || Ct()) return r("[vitals] kill switch or essential-traffic-only set; guest vitals disabled"), 
    null;
    let t = await y(e);
    if (!t) return null;
    let i = new c(t.binary, t.viaFallback, e);
    return await i.launch(), i.disabled ? null : i;
  } catch (t) {
    return r(`[vitals] not started: ${l(t)}`), null;
  }
}

async function y({binaryResolution: e, log: r}) {
  let t = a.VITALS_EMITTER_BIN;
  if (t && !v(t)) return r(`[vitals] VITALS_EMITTER_BIN must be an absolute path (got ${t}); guest vitals disabled`), 
  null;
  switch (e) {
   case "pinned":
    if (!t) return r("[vitals] VITALS_EMITTER_BIN not set; guest vitals disabled (this launcher does not search PATH)"), 
    null;
    return {
      binary: t,
      viaFallback: !1
    };

   case "search":
    {
      let i = t || await Rd(w);
      return i ? {
        binary: i,
        viaFallback: !1
      } : {
        binary: _,
        viaFallback: !0
      };
    }
  }
}

class c {
  binary;
  binaryViaFallback;
  options;
  child=null;
  spawnedAt=0;
  respawnTimer=null;
  nextBackoffMs=p;
  stopping=!1;
  disabled=!1;
  reportedOk=!1;
  reportedUnexpectedExit=!1;
  constructor(e, r, t) {
    this.binary = e;
    this.binaryViaFallback = r;
    this.options = t;
  }
  async stop() {
    if (this.stopping = !0, this.respawnTimer) clearTimeout(this.respawnTimer), this.respawnTimer = null;
    let e = this.child;
    if (!e) return;
    let r = new Promise(i => {
      e.once("exit", () => i()), e.once("error", () => i());
    });
    e.kill("SIGTERM");
    let t = setTimeout(i => i.kill("SIGKILL"), o, e);
    t.unref(), await We(r, 2 * o), clearTimeout(t);
  }
  async launch() {
    let {sessionId: e, apiBaseUrl: r, tokenFilePath: t, log: i} = this.options, s;
    try {
      s = h(this.binary, [ "--session-id", e, "--api-url", r, "--token-file", t ], {
        cwd: void 0,
        env: b(),
        stdio: [ "pipe", "ignore", "pipe" ],
        windowsHide: !0
      });
    } catch (n) {
      i(`[vitals] spawn threw: ${l(n)}; guest vitals disabled for this session`), this.disabled = !0;
      return;
    }
    if (ax(s.pid), this.child = s, this.spawnedAt = Date.now(), s.stdin?.on("error", () => {}), 
    s.on("error", n => this.onChildGone(s, n)), s.on("exit", (n, u) => this.onChildGone(s, null, `exited (code=${n} signal=${u})`)), 
    s.on("spawn", () => {
      if (i(`[vitals] spawned ${this.binary} pid=${s.pid}`), !this.reportedOk) this.reportedOk = !0, 
      g("ccr_vitals_emitter");
    }), s.stderr) T({
      input: s.stderr
    }).on("line", n => i(`[vitals] ${n}`));
    await new Promise(n => {
      s.once("spawn", () => n()), s.once("error", () => n());
    });
  }
  onChildGone(e, r, t = `spawn error: ${r?.message}`) {
    if (this.child !== e) return;
    this.child = null, e.stdin?.destroy();
    let {log: i} = this.options;
    if (this.stopping) {
      i(`[vitals] emitter stopped (${t})`);
      return;
    }
    if (r) {
      let s = E(r);
      if (s === "EAGAIN" || s === "ENOMEM") {
        i(`[vitals] transient spawn failure (${s}); respawning`), this.scheduleRespawn();
        return;
      }
      if (this.disabled = !0, s === "ENOENT" || s === "EACCES" && this.binaryViaFallback) i(`[vitals] ${this.binary} not found; guest vitals disabled for this session`); else i(`[vitals] ${t}; guest vitals disabled for this session`), 
      m("ccr_vitals_emitter", "spawn_failed");
      return;
    }
    if (i(`[vitals] emitter ${t}`), !this.reportedUnexpectedExit) this.reportedUnexpectedExit = !0, 
    f("ccr_vitals_emitter", "exited_unexpectedly");
    if (Date.now() - this.spawnedAt > d) this.nextBackoffMs = p;
    this.scheduleRespawn();
  }
  scheduleRespawn() {
    let e = this.nextBackoffMs;
    this.nextBackoffMs = Math.min(e * 2, d), this.options.log(`[vitals] respawning in ${e}ms`), 
    this.respawnTimer = setTimeout(() => {
      this.respawnTimer = null, this.launch();
    }, e), this.respawnTimer.unref();
  }
}

function b() {
  let e = {
    USER_TYPE: "external",
    NODE_ENV: "production",
    VITALS_CLI_VERSION: {
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
  }, r = {
    PATH: a.PATH,
    HOME: a.HOME,
    TMPDIR: a.TMPDIR,
    HTTPS_PROXY: a.HTTPS_PROXY,
    https_proxy: a.https_proxy,
    HTTP_PROXY: a.HTTP_PROXY,
    http_proxy: a.http_proxy,
    NO_PROXY: a.NO_PROXY,
    no_proxy: a.no_proxy,
    SSL_CERT_FILE: a.SSL_CERT_FILE
  };
  for (let [t, i] of Object.entries(r)) if (i !== void 0) e[t] = i;
  return e;
}

export { iun };
