// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { m } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { CFs } from "./chunk-4dwgr3et.js";

import { it } from "./chunk-zscnwzv2.js";

import { Noe, aSr, lSr, z$e } from "./chunk-1svny8da.js";

import { u1, Jat } from "./chunk-14xmsjdg.js";

import { Eie, osn, kie, q8e, ssn } from "./chunk-3kb22va7.js";

import { sae } from "./chunk-j7qcpyv8.js";

import { N } from "./chunk-hmqkrrtz.js";

function h(e) {
  let n = `Failed to create teammate pane: ${e}`, a = e.toLowerCase();
  return a.includes("no space") || a.includes("too small") ? `${n} \u2014 no room for another tmux split. Spawn fewer concurrent teammates, enlarge your terminal if running inside tmux, or switch to in-process teammates via /config.` : n;
}

function T(e) {
  return {
    red: "red",
    blue: "blue",
    green: "green",
    yellow: "yellow",
    purple: "magenta",
    orange: "colour208",
    pink: "colour205",
    cyan: "cyan"
  }[e];
}

function d(e) {
  let n = lSr(), a = n ? [ "-S", n, ...e ] : e;
  return it(kie, a);
}

function l(e, n) {
  return it(kie, [ "-L", ssn(), ...e ], n);
}

async function Gsr(e, n, a, r) {
  await it(kie, [ ...e, "set-option", "-p", "-t", n, "remain-on-exit", "failed" ], r);
  let s = await it(kie, [ ...e, "respawn-pane", "-k", "-t", n, "--", CFs("agent", a) ], r);
  if (s.code !== 0) throw new u1(`Failed to send command to pane ${n}: ${s.stderr}`);
}

class Rjs {
  type="tmux";
  displayName="tmux";
  cachedLeaderWindowTarget=null;
  firstPaneUsedForExternal=!1;
  paneCreationLock=sae();
  async isAvailable() {
    return z$e();
  }
  async isRunningInside() {
    return Noe();
  }
  async createTeammatePaneInSwarmView(e, n) {
    let a = await this.paneCreationLock.acquire();
    try {
      if (await this.isRunningInside()) return await this.createTeammatePaneWithLeader(e, n);
      return await this.createTeammatePaneExternal(e, n);
    } finally {
      a();
    }
  }
  async sendCommandToPane(e, n, a = !1) {
    try {
      Jat(n);
    } catch (o) {
      throw m("swarm_pane_spawn", "swarm_pane_command_control_chars"), o;
    }
    let r = lSr(), s = a ? [ "-L", ssn() ] : r ? [ "-S", r ] : [];
    await Gsr(s, e, n);
  }
  async setPaneBorderColor(e, n, a = !1) {
    let r = T(n), s = a ? l : d;
    await s([ "set-option", "-p", "-t", e, "window-style", `bg=default,fg=${r}` ]), 
    await s([ "set-option", "-p", "-t", e, "pane-border-style", `fg=${r}` ]), await s([ "set-option", "-p", "-t", e, "pane-active-border-style", `fg=${r}` ]);
  }
  async setPaneTitle(e, n, a, r = !1) {
    let s = T(a), o = r ? l : d;
    await o([ "select-pane", "-t", e, "-T", n ]), await o([ "set-option", "-p", "-t", e, "pane-border-format", `#[fg=${s},bold] #{pane_title} #[default]` ]);
  }
  async enablePaneBorderStatus(e, n = !1) {
    let a = e || await this.getCurrentWindowTarget();
    if (!a) return;
    await (n ? l : d)([ "set-option", "-w", "-t", a, "pane-border-status", "top" ]);
  }
  async killPane(e, n = !1) {
    return (await (n ? l : d)([ "kill-pane", "-t", e ])).code === 0;
  }
  async getCurrentPaneId() {
    let e = aSr();
    if (e) return e;
    let n = await d([ "display-message", "-p", "#{pane_id}" ]);
    if (n.code !== 0) return t(`[TmuxBackend] Failed to get current pane ID (exit ${n.code}): ${n.stderr}`), 
    null;
    return n.stdout.trim();
  }
  async getCurrentWindowTarget() {
    if (this.cachedLeaderWindowTarget) return this.cachedLeaderWindowTarget;
    let e = aSr(), n = [ "display-message" ];
    if (e) n.push("-t", e);
    n.push("-p", "#{window_id}");
    let a = await d(n);
    if (a.code !== 0) return t(`[TmuxBackend] Failed to get current window target (exit ${a.code}): ${a.stderr}`), 
    null;
    return this.cachedLeaderWindowTarget = a.stdout.trim(), this.cachedLeaderWindowTarget;
  }
  async getCurrentWindowPaneCount(e, n = !1) {
    let a = e || await this.getCurrentWindowTarget();
    if (!a) return null;
    let r = [ "list-panes", "-t", a, "-F", "#{pane_id}" ], s = n ? await l(r) : await d(r);
    if (s.code !== 0) {
      if (t(`[TmuxBackend] Failed to get pane count for ${a} (exit ${s.code}): ${s.stderr}`, {
        level: "error"
      }), a === this.cachedLeaderWindowTarget) this.cachedLeaderWindowTarget = null;
      return null;
    }
    return N(s.stdout.trim().split(`\n`), Boolean);
  }
  async hasSessionInSwarm(e) {
    return (await l([ "has-session", "-t", e ])).code === 0;
  }
  async createExternalSwarmSession() {
    if (!await this.hasSessionInSwarm(Eie)) {
      let o = await l([ "new-session", "-d", "-s", Eie, "-n", osn, "-P", "-F", "#{pane_id}", "--", q8e ], {
        useCwd: !0,
        toolCgroupClass: "agent"
      });
      if (o.code !== 0) throw new u1(`Failed to create swarm session: ${o.stderr || "Unknown error"}`);
      let i = o.stdout.trim(), u = `${Eie}:${osn}`;
      return t(`[TmuxBackend] Created external swarm session with window ${u}, pane ${i}`), 
      this.firstPaneUsedForExternal = !1, {
        windowTarget: u,
        paneId: i
      };
    }
    let a = (await l([ "list-windows", "-t", Eie, "-F", "#{window_name}" ])).stdout.trim().split(`\n`).filter(Boolean), r = `${Eie}:${osn}`;
    if (a.includes(osn)) {
      let i = (await l([ "list-panes", "-t", r, "-F", "#{pane_id}" ])).stdout.trim().split(`\n`).filter(Boolean);
      return {
        windowTarget: r,
        paneId: i[0] || ""
      };
    }
    let s = await l([ "new-window", "-t", Eie, "-n", osn, "-P", "-F", "#{pane_id}", "--", q8e ]);
    if (s.code !== 0) throw new u1(`Failed to create swarm-view window: ${s.stderr || "Unknown error"}`);
    return this.firstPaneUsedForExternal = !1, {
      windowTarget: r,
      paneId: s.stdout.trim()
    };
  }
  async createTeammatePaneWithLeader(e, n) {
    let a = await this.getCurrentPaneId(), r = await this.getCurrentWindowTarget();
    if (!a || !r) throw new u1("Could not determine current tmux pane/window");
    let s = await this.getCurrentWindowPaneCount(r);
    if (s === null) throw new u1("Could not determine pane count for current window");
    let o = s === 1, i;
    if (o) i = await d([ "split-window", "-d", "-t", a, "-h", "-l", "70%", "-P", "-F", "#{pane_id}", "--", q8e ]); else {
      let c = (await d([ "list-panes", "-t", r, "-F", "#{pane_id}" ])).stdout.trim().split(`\n`).filter(Boolean).slice(1), g = c.length, P = g % 2 === 1, w = Math.floor((g - 1) / 2), x = c[w] || c.at(-1);
      i = await d([ "split-window", "-d", "-t", x, P ? "-v" : "-h", "-P", "-F", "#{pane_id}", "--", q8e ]);
    }
    if (i.code !== 0) throw new u1(h(i.stderr));
    let u = i.stdout.trim();
    return t(`[TmuxBackend] Created teammate pane for ${e}: ${u}`), await this.setPaneBorderColor(u, n), 
    await this.setPaneTitle(u, e, n), await this.rebalancePanesWithLeader(r), {
      paneId: u,
      isFirstTeammate: o
    };
  }
  async createTeammatePaneExternal(e, n) {
    let {windowTarget: a, paneId: r} = await this.createExternalSwarmSession(), s = await this.getCurrentWindowPaneCount(a, !0);
    if (s === null) throw new u1("Could not determine pane count for swarm window");
    let o = !this.firstPaneUsedForExternal && s === 1, i;
    if (o) i = r, this.firstPaneUsedForExternal = !0, t(`[TmuxBackend] Using initial pane for first teammate ${e}: ${i}`), 
    await this.enablePaneBorderStatus(a, !0); else {
      let p = (await l([ "list-panes", "-t", a, "-F", "#{pane_id}" ])).stdout.trim().split(`\n`).filter(Boolean), f = p.length, c = f % 2 === 1, g = Math.floor((f - 1) / 2), P = p[g] || p.at(-1), w = await l([ "split-window", "-d", "-t", P, c ? "-v" : "-h", "-P", "-F", "#{pane_id}", "--", q8e ]);
      if (w.code !== 0) throw new u1(h(w.stderr));
      i = w.stdout.trim(), t(`[TmuxBackend] Created teammate pane for ${e}: ${i}`);
    }
    return await this.setPaneBorderColor(i, n, !0), await this.setPaneTitle(i, e, n, !0), 
    await this.rebalancePanesTiled(a), {
      paneId: i,
      isFirstTeammate: o
    };
  }
  async rebalancePanesWithLeader(e) {
    let a = (await d([ "list-panes", "-t", e, "-F", "#{pane_id}" ])).stdout.trim().split(`\n`).filter(Boolean);
    if (a.length <= 2) return;
    await d([ "select-layout", "-t", e, "main-vertical" ]);
    let r = a[0];
    await d([ "resize-pane", "-t", r, "-x", "30%" ]), t(`[TmuxBackend] Rebalanced ${a.length - 1} teammate panes with leader`);
  }
  async rebalancePanesTiled(e) {
    let a = (await l([ "list-panes", "-t", e, "-F", "#{pane_id}" ])).stdout.trim().split(`\n`).filter(Boolean);
    if (a.length <= 1) return;
    await l([ "select-layout", "-t", e, "tiled" ]), t(`[TmuxBackend] Rebalanced ${a.length} teammate panes with tiled layout`);
  }
}

export { Gsr, Rjs };
