// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { K, B, qp } from "./chunk-3pqddg8f.js";

import { Ig, In, k, ce } from "./chunk-xywp7esx.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { it } from "./chunk-zscnwzv2.js";

import { Pj } from "./chunk-0pmh7awy.js";

import { kp } from "./chunk-5brm0azz.js";

import { dt } from "./chunk-dd98x6x7.js";

import { Am } from "./chunk-mw643xee.js";

import { O } from "./chunk-1xnsr4dy.js";

import { spawnSync as h } from "child_process";

function C() {
  return {
    loggedTmuxCcDisable: !1,
    loggedWinSshDisable: !1,
    checkedTmuxMouseHint: !1,
    checkedTmuxFocusHint: !1,
    tmuxControlModeProbed: void 0,
    tmuxMouseOptionProbe: void 0,
    tmuxFocusOptionProbe: void 0,
    gbGateCached: void 0,
    gbGateSource: void 0,
    downsellGateCached: void 0,
    freshInstallCached: void 0,
    crashAutoOff: !1
  };
}

var gV = C();

function f() {
  if (!a.TMUX) return !1;
  if (a.TERM_PROGRAM !== "iTerm.app") return !1;
  let e = a.TERM ?? "";
  return !e.startsWith("screen") && !e.startsWith("tmux");
}

function g(e) {
  if (e.tmuxControlModeProbed = f(), e.tmuxControlModeProbed) return;
  if (!a.TMUX) return;
  if (a.TERM_PROGRAM) return;
  let n = Pj("tmux");
  if (n === null) return;
  let r;
  try {
    r = h(n, [ "display-message", "-p", "#{client_control_mode}" ], {
      encoding: "utf8",
      timeout: 2e3,
      cwd: void 0,
      env: process.env,
      windowsHide: !0
    });
  } catch {
    return;
  }
  if (r.status !== 0) return;
  e.tmuxControlModeProbed = r.stdout.trim() === "1";
}

function kce(e = gV) {
  if (e.tmuxControlModeProbed === void 0) g(e);
  return e.tmuxControlModeProbed ?? !1;
}

function u() {
  if (O() !== "windows") return !1;
  return Boolean(a.SSH_CONNECTION || a.SSH_CLIENT || a.SSH_TTY);
}

class c {
  latched=!1;
  mode=void 0;
  persisted=!1;
  upsellImpression=void 0;
  latchFromEnv() {
    if (this.latched) return;
    this.latched = !0, this.mode = a.CLAUDE_CODE_TUI_TRIAL === "fullscreen" ? "fullscreen" : void 0, 
    a.unset("CLAUDE_CODE_TUI_TRIAL");
  }
}

var x = new K(() => new c);

function JMn() {
  return x.of(B().host);
}

function Fcs() {
  JMn().latchFromEnv();
}

function aRt() {
  let e = JMn();
  return e.latchFromEnv(), e.mode;
}

function F8t() {
  return ce().fullscreenAutoDisabled?.version === {
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
}

function s() {
  return a.CLAUDE_CODE_NO_FLICKER === !1 || a.CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN;
}

var lRt = 3;

function d() {
  try {
    if (Ig()) return !1;
    let e = ce();
    return e.firstStartVersion !== void 0 && (e.fullscreenUpsellSeenCount ?? 0) < lRt;
  } catch {
    return;
  }
}

function S(e) {
  if (e.freshInstallCached !== void 0) return e.freshInstallCached;
  let n = d();
  if (n !== void 0) e.freshInstallCached = n;
  return n ?? !1;
}

function $d(e = gV) {
  if (kp() === "local-agent") return !1;
  if (a.CLAUDE_CODE_SESSION_KIND === "bg") return !0;
  if (Am()) return !1;
  if (s()) return !1;
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff) return !1;
  if (kce(e)) {
    if (!e.loggedTmuxCcDisable) e.loggedTmuxCcDisable = !0, t("fullscreen disabled: tmux -CC (iTerm2 integration mode) detected \xb7 set CLAUDE_CODE_NO_FLICKER=1 to override");
    return !1;
  }
  if (u()) {
    if (!e.loggedWinSshDisable) e.loggedWinSshDisable = !0, t("fullscreen disabled: Windows over SSH (ConPTY re-rendering) detected \xb7 set CLAUDE_CODE_NO_FLICKER=1 to override");
    return !1;
  }
  switch (dt().tui ?? aRt()) {
   case "fullscreen":
    return !0;

   case "default":
    return !1;
  }
  if (S(e)) return !0;
  if (p(e)) return !0;
  if (e.gbGateCached === void 0) {
    let n = In("tengu_pewter_brook", !1);
    e.gbGateCached = n.value, e.gbGateSource = n.source;
  }
  return e.gbGateCached;
}

function p(e = gV) {
  return e.downsellGateCached ??= k("tengu_amber_creek", !1), e.downsellGateCached;
}

function o4e(e = gV) {
  if (Am()) return !1;
  if (s()) return !1;
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return !0;
  if (e.crashAutoOff || F8t()) return !1;
  if (u()) return !1;
  if (kce(e)) return !1;
  switch (dt().tui) {
   case "fullscreen":
    return !0;

   case "default":
    return !1;
  }
  return !0;
}

function pN(e = gV) {
  if (a.CLAUDE_CODE_SESSION_KIND === "bg") return "bg_forced_on";
  if (Am()) return "sr_auto_off";
  if (s()) return "env_off";
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return "env_on";
  if (e.crashAutoOff) return "crash_auto_off";
  if (kce(e)) return "tmux_cc_auto_off";
  if (u()) return "win_ssh_auto_off";
  let n = dt().tui;
  switch (n ?? aRt()) {
   case "fullscreen":
    return n === "fullscreen" ? "settings_on" : "upsell_trial_on";

   case "default":
    return "settings_off";
  }
  if (e.freshInstallCached ?? d()) return "fresh_install_on";
  if (e.downsellGateCached ?? k("tengu_amber_creek", !1)) return "downsell_on";
  return e.gbGateCached ?? k("tengu_pewter_brook", !1) ? "gb_on" : "gb_off";
}

function QMn(e) {
  switch (e) {
   case "env_on":
   case "bg_forced_on":
   case "settings_on":
   case "upsell_trial_on":
   case "ant_default":
   case "fresh_install_on":
   case "downsell_on":
   case "gb_on":
    return "fullscreen";

   case "env_off":
   case "sr_auto_off":
   case "crash_auto_off":
   case "tmux_cc_auto_off":
   case "win_ssh_auto_off":
   case "settings_off":
   case "gb_off":
    return "default";
  }
}

function ZMn(e) {
  return e === "env_off" || e === "sr_auto_off" || e === "tmux_cc_auto_off" || e === "win_ssh_auto_off";
}

function Ucs(e = gV) {
  return Ig() && e.gbGateSource === "fallback";
}

function Bcs() {
  if (a.CLAUDE_CODE_NO_FLICKER === !0) return "on";
  if (a.CLAUDE_CODE_NO_FLICKER === !1) return "off";
  return;
}

function XB() {
  if (a.CLAUDE_CODE_DISABLE_MOUSE !== void 0) return a.CLAUDE_CODE_DISABLE_MOUSE ? "off" : "full";
  if (a.CLAUDE_CODE_DISABLE_MOUSE_CLICKS !== void 0) return a.CLAUDE_CODE_DISABLE_MOUSE_CLICKS ? "scroll" : "full";
  return "full";
}

class _ {
  observed=!1;
  changed=Me();
  subscribe=this.changed.subscribe;
  get hasObserved() {
    return this.observed;
  }
  note() {
    if (this.observed) return;
    this.observed = !0, this.changed.emit();
  }
}

var i = new K(() => new _);

function mso() {
  i.of(B().host).note();
}

function U8t() {
  return i.of(B().host).hasObserved;
}

function B8t(e) {
  return i.of(B().host).subscribe(e);
}

function cO(e = gV) {
  return qp() && $d(e);
}

async function jcs(e = gV) {
  if (!a.TMUX) return null;
  if (!cO(e) || kce(e)) return null;
  if (e.checkedTmuxMouseHint) return null;
  e.checkedTmuxMouseHint = !0;
  let n = await o(e, "mouse");
  if (n === null || n === "on") return null;
  return "tmux detected \xb7 scroll with PgUp/PgDn \xb7 or add 'set -g mouse on' to ~/.tmux.conf for wheel scroll";
}

var T = {
  mouse: {
    cacheKey: "tmuxMouseOptionProbe",
    args: [ "show", "-Av", "mouse" ]
  },
  "focus-events": {
    cacheKey: "tmuxFocusOptionProbe",
    args: [ "show", "-gv", "focus-events" ]
  }
};

function o(e, n) {
  let {cacheKey: r, args: m} = T[n];
  return e[r] ??= it("tmux", [ ...m ], {
    useCwd: !1,
    timeout: 2e3
  }).then(({stdout: b, code: E}) => E === 0 ? b.trim() : null), e[r];
}

function Wcs(e = gV) {
  if (!a.TMUX || f()) return;
  o(e, "mouse"), o(e, "focus-events");
}

async function zcs(e = gV) {
  if (!a.TMUX) return null;
  if (kce(e)) return null;
  if (e.checkedTmuxFocusHint) return null;
  e.checkedTmuxFocusHint = !0;
  let n = await o(e, "focus-events");
  if (n === null || n === "on") return null;
  return "tmux focus-events off \xb7 add 'set -g focus-events on' to ~/.tmux.conf and reattach for focus tracking";
}

export { gV, kce, JMn, Fcs, aRt, F8t, lRt, $d, o4e, pN, QMn, ZMn, Ucs, Bcs, XB, mso, U8t, B8t, cO, jcs, Wcs, zcs };
