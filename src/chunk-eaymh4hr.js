// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, qp } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { bt, t } from "./chunk-kawq2919.js";

import { Ce, ce, ton } from "./chunk-xywp7esx.js";

import { gDo } from "./chunk-a16yb89m.js";

import { d } from "./chunk-6ah1819r.js";

import { a } from "./chunk-j016gcgm.js";

import { mo } from "./chunk-fhf0t7vm.js";

import { Xf } from "./chunk-znhtg8e4.js";

import { gV, F8t, $d, pN, QMn } from "./chunk-1pzzpwf7.js";

import { ks } from "./chunk-84yp45y8.js";

import { O } from "./chunk-1xnsr4dy.js";

import { hostname as w } from "os";

var D = 2, R = 1e4, P = 6e5, x = 2592e6;

function C() {
  try {
    return w();
  } catch {
    return "unknown";
  }
}

function T(e) {
  return {
    now: e,
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
    host: C(),
    platform: O(),
    ownPid: process.pid,
    isGone: Xf
  };
}

function _(e, n) {
  let o = n.stickyStrikes ?? D, s = {
    ...e.fullscreenBootPending
  }, l = e.fullscreenAutoDisabled, u = e.fullscreenBootStrikes?.version === n.version ? e.fullscreenBootStrikes.count : 0;
  if (l && l.version !== n.version) l = void 0;
  let r = 0, f = !1, y = Number.POSITIVE_INFINITY;
  for (let [m, p] of Object.entries(s)) {
    let k = Number(m);
    if (!Number.isInteger(k) || k < 1 || typeof p !== "object" || !p) {
      delete s[m];
      continue;
    }
    let g = Math.max(0, n.now - p.startedAt);
    if (p.host !== n.host || p.platform !== n.platform) {
      if (g > x) delete s[m];
      continue;
    }
    if (p.died !== void 0 || k === n.ownPid || n.isGone(k)) {
      if (delete s[m], p.version === n.version) r += 1, y = Math.min(y, g);
    } else if (g > P) delete s[m]; else f = !0;
  }
  let h = {
    kind: "none"
  };
  if (l) h = {
    kind: "disabled"
  }; else if (r > 0) {
    u += r;
    let m = Number.isFinite(y) ? y : 0;
    if (u >= o) l = {
      version: n.version,
      at: n.now,
      strikes: u
    }, h = {
      kind: "tripped",
      strikes: u,
      newStrikes: r,
      pendingAgeMs: m
    }, u = 0; else h = {
      kind: "strike",
      strikes: u,
      newStrikes: r,
      pendingAgeMs: m
    };
  } else if (f) h = {
    kind: "pending_alive"
  };
  return {
    next: {
      fullscreenBootPending: Object.keys(s).length > 0 ? s : void 0,
      fullscreenBootStrikes: u > 0 ? {
        count: u,
        version: n.version
      } : void 0,
      fullscreenAutoDisabled: l
    },
    decision: h
  };
}

function F(e, n) {
  let o = s => Object.keys(s.fullscreenBootPending ?? {}).sort().join(",");
  return o(e) !== o(n) || (e.fullscreenBootStrikes?.count ?? 0) !== (n.fullscreenBootStrikes?.count ?? 0) || e.fullscreenBootStrikes?.version !== n.fullscreenBootStrikes?.version || e.fullscreenAutoDisabled?.version !== n.fullscreenAutoDisabled?.version || e.fullscreenAutoDisabled?.at !== n.fullscreenAutoDisabled?.at;
}

function I_n() {
  let e = ce();
  return e.fullscreenAutoDisabled?.version === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION || e.fullscreenBootStrikes?.version === {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION && e.fullscreenBootStrikes.count > 0;
}

var M = `Claude Code's fullscreen renderer didn't finish starting last time on this machine, so this launch is using the classic renderer. It will try fullscreen again next launch; /tui default keeps the classic renderer.\n`, I = `Claude Code's fullscreen renderer has repeatedly failed to start on this machine, so it has been turned off here. Run /tui fullscreen to try it again (this also resets after an update).\n`;

function L4o(e) {
  let n = e?.state ?? gV, o = pN(n);
  if (o === "env_on" || o === "bg_forced_on" || a.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) return {
    kind: "none"
  };
  let s = T(e?.now ?? Date.now()), l = ce(), {next: u, decision: r} = _(l, s);
  if (F(l, u)) Ce(f => {
    let y = _(f, s).next;
    return F(f, y) ? {
      ...f,
      ...y
    } : f;
  }, e?.storageV5);
  if (r.kind === "strike" || r.kind === "tripped" || r.kind === "disabled") {
    n.crashAutoOff = !0;
    let f = QMn(o) === "fullscreen";
    if (r.kind !== "disabled") {
      if (i("tengu_fullscreen_crash_auto_off", {
        sticky: r.kind === "tripped",
        strikes: r.strikes,
        new_strikes: r.newStrikes,
        pending_age_ms: r.pendingAgeMs,
        would_be_entry_path: c(o),
        overrides_fullscreen: f
      }), f) process.stderr.write(r.kind === "tripped" ? I : M);
    }
    t(`fullscreen disabled: a previous fullscreen launch on this machine died before it was healthy (${r.kind}) \xb7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override`);
  } else if (r.kind !== "none") t(`fullscreen boot canary: ${r.kind}`);
  return r;
}

function E7n(e) {
  return Ce(n => n.fullscreenAutoDisabled === void 0 && n.fullscreenBootStrikes === void 0 ? n : {
    ...n,
    fullscreenAutoDisabled: void 0,
    fullscreenBootStrikes: void 0
  }, e);
}

var S = new Set([ "settings_on", "upsell_trial_on", "ant_default", "fresh_install_on", "downsell_on", "gb_on" ]);

class E {
  canary={
    status: "idle"
  };
  recordMaybeOnDisk=void 0;
  exitHook=void 0;
  retire() {
    if (this.canary.status === "armed") {
      if (this.canary.cleanup(), this.canary.timer !== void 0) clearTimeout(this.canary.timer);
    }
    if (this.canary = {
      status: "idle"
    }, this.recordMaybeOnDisk = void 0, this.exitHook !== void 0) process.off("exit", this.exitHook), 
    this.exitHook = void 0;
  }
}

var N = new K(() => new E);

function b() {
  return N.of(B().host);
}

function A(e, n, o) {
  let s = e.fullscreenBootPending?.[String(n)] !== void 0;
  if (!s && !(o && e.fullscreenBootStrikes)) return e;
  let l = e.fullscreenBootPending;
  if (s && l) {
    let {[String(n)]: u, ...r} = l;
    l = Object.keys(r).length > 0 ? r : void 0;
  }
  return {
    ...e,
    fullscreenBootPending: l,
    fullscreenBootStrikes: o ? void 0 : e.fullscreenBootStrikes
  };
}

function H(e) {
  if (e.exitHook !== void 0) return;
  e.exitHook = () => {
    if (e.recordMaybeOnDisk !== void 0 && ks()) {
      let n = e.recordMaybeOnDisk;
      ton(o => A(o, n, !1));
    }
  }, process.on("exit", e.exitHook);
}

async function N4o(e) {
  let n = e?.state ?? gV, o = b();
  if (o.canary.status !== "idle") return o.canary.status === "armed";
  if (!qp() || a.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) return !1;
  if (!n.crashAutoOff && F8t() && S.has(pN(n))) n.crashAutoOff = !0, t("fullscreen disabled: turned off on this machine after repeated failed starts (recorded sticky auto-disable, honoured at REPL mount) \xb7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override");
  if (!$d(n)) return !1;
  if (!S.has(pN(n))) return !1;
  let s = process.pid, l = {
    startedAt: Date.now(),
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
    host: C(),
    platform: O()
  }, u = bt(() => v(o, o.canary.status === "armed" && o.canary.firstFrameAt !== void 0 && (process.exitCode === void 0 || process.exitCode === 0) && !gDo() ? "healthy" : "withdrawn"));
  H(o), o.canary = {
    status: "armed",
    pid: s,
    cleanup: u,
    onHealthy: e?.onHealthy,
    healthyAfterMs: e?.healthyAfterMs ?? R,
    firstFrameAt: void 0,
    timer: void 0,
    storageV5: e?.storageV5
  }, o.recordMaybeOnDisk = s, mo("fullscreen_canary_arm_start");
  try {
    await Ce(r => ({
      ...r,
      fullscreenBootPending: {
        ...r.fullscreenBootPending,
        [String(s)]: l
      }
    }), e?.storageV5);
  } catch (r) {
    d(r);
  } finally {
    mo("fullscreen_canary_armed");
  }
  return o.canary.status === "armed";
}

function $4o(e = Date.now()) {
  let n = b();
  if (n.canary.status !== "armed" || n.canary.firstFrameAt !== void 0) return;
  n.canary.firstFrameAt = e, n.canary.timer = setTimeout(o => {
    v(o, "healthy").catch(d);
  }, n.canary.healthyAfterMs, n), n.canary.timer.unref?.();
}

async function v(e, n) {
  if (e.canary.status !== "armed") return;
  let {pid: o, cleanup: s, timer: l, onHealthy: u, storageV5: r} = e.canary;
  if (e.canary = {
    status: "settled"
  }, s(), l !== void 0) clearTimeout(l);
  if (await Ce(f => A(f, o, n === "healthy"), r), e.recordMaybeOnDisk === o) e.recordMaybeOnDisk = void 0;
  if (t(`fullscreen boot canary: ${n}`), n === "healthy" && u) try {
    await u();
  } catch (f) {
    d(f);
  }
}

async function O_n() {
  let e = b();
  if (e.canary.status !== "armed") return !1;
  let {pid: n, cleanup: o, timer: s, storageV5: l} = e.canary;
  if (e.canary = {
    status: "settled"
  }, o(), s !== void 0) clearTimeout(s);
  if (e.recordMaybeOnDisk === n) e.recordMaybeOnDisk = void 0;
  let u = !1;
  return await Ce(r => {
    let f = r.fullscreenBootPending?.[String(n)];
    if (f === void 0 || f.died !== void 0) return r;
    return u = !0, {
      ...r,
      fullscreenBootPending: {
        ...r.fullscreenBootPending,
        [String(n)]: {
          ...f,
          died: "render_error"
        }
      }
    };
  }, l), t("fullscreen boot canary: failure recorded"), u;
}

export { I_n, L4o, E7n, N4o, $4o, O_n };
