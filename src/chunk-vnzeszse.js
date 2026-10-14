// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-hwdwjvh8.js";

import "./chunk-b0z4bv3v.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-nvtwm272.js";

import "./chunk-ddr690nj.js";

import "./chunk-hedpgw9m.js";

import { m } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-145qexpp.js";

import { a } from "./chunk-j016gcgm.js";

import "./chunk-y752zmas.js";

import "./chunk-6ah1819r.js";

import "./chunk-t6pdm7af.js";

import "./chunk-4dwgr3et.js";

import "./chunk-cqgvwwgb.js";

import { it } from "./chunk-zscnwzv2.js";

import "./chunk-0pmh7awy.js";

import { R8, wfo, sIt } from "./chunk-1svny8da.js";

import { u1, Jat } from "./chunk-14xmsjdg.js";

import "./chunk-p35rdtee.js";

import { sae } from "./chunk-j7qcpyv8.js";

import "./chunk-1xnsr4dy.js";

function c(e) {
  return it(wfo(), e);
}

function p(e) {
  let s = e.match(/Created new pane:\s*(.+)/);
  if (s && s[1]) return s[1].trim();
  return "";
}

function I() {
  let e = a.ITERM_SESSION_ID;
  if (!e) return null;
  let s = e.indexOf(":");
  if (s === -1) return null;
  return e.slice(s + 1);
}

class g {
  type="iterm2";
  displayName="iTerm2";
  teammateSessionIds=[];
  firstPaneUsed=!1;
  paneCreationLock=sae();
  async isAvailable() {
    let e = R8();
    if (t(`[ITermBackend] isAvailable check: inITerm2=${e}`), !e) return t("[ITermBackend] isAvailable: false (not in iTerm2)"), 
    !1;
    let s = await sIt();
    return t(`[ITermBackend] isAvailable: ${s} (it2 CLI ${s ? "found" : "not found"})`), 
    s;
  }
  async isRunningInside() {
    let e = R8();
    return t(`[ITermBackend] isRunningInside: ${e}`), e;
  }
  async createTeammatePaneInSwarmView(e, s) {
    t(`[ITermBackend] createTeammatePaneInSwarmView called for ${e} with color ${s}`);
    let o = await this.paneCreationLock.acquire();
    try {
      while (!0) {
        let n = !this.firstPaneUsed;
        t(`[ITermBackend] Creating pane: isFirstTeammate=${n}, existingPanes=${this.teammateSessionIds.length}`);
        let r, i;
        if (n) {
          let l = I();
          if (l) r = [ "session", "split", "-v", "-s", l ], t(`[ITermBackend] First split from leader session: ${l}`); else r = [ "session", "split", "-v" ], 
          t("[ITermBackend] First split from active session (no leader ID)");
        } else if (i = this.teammateSessionIds.at(-1), i) r = [ "session", "split", "-s", i ], 
        t(`[ITermBackend] Subsequent split from teammate session: ${i}`); else r = [ "session", "split" ], 
        t("[ITermBackend] Subsequent split from active session (no teammate ID)");
        let d = await c(r);
        if (d.code !== 0) {
          if (i) {
            let l = await c([ "session", "list" ]);
            if (l.code === 0 && !l.stdout.includes(i)) {
              t(`[ITermBackend] Split failed targeting dead session ${i}, pruning and retrying: ${d.stderr}`);
              let f = this.teammateSessionIds.indexOf(i);
              if (f !== -1) this.teammateSessionIds.splice(f, 1);
              if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
              continue;
            }
          }
          throw new u1(`Failed to create iTerm2 split pane: ${d.stderr}`);
        }
        let u = p(d.stdout);
        if (!u) throw Error(`Failed to parse session ID from split output: ${d.stdout}`);
        if (t(`[ITermBackend] Created teammate pane for ${e}: ${u}`), n) this.firstPaneUsed = !0;
        return this.teammateSessionIds.push(u), {
          paneId: u,
          isFirstTeammate: n
        };
      }
    } finally {
      o();
    }
  }
  async sendCommandToPane(e, s, o) {
    try {
      Jat(s);
    } catch (i) {
      throw m("swarm_pane_spawn", "swarm_pane_command_control_chars"), i;
    }
    let n = e ? [ "-s", e ] : [];
    await c([ "session", "send", ...n, "\x15" ]);
    let r = await c([ "session", "run", ...n, s ]);
    if (r.code !== 0) throw new u1(`Failed to send command to iTerm2 pane ${e}: ${r.stderr}`);
  }
  async setPaneBorderColor(e, s, o) {}
  async setPaneTitle(e, s, o, n) {}
  async enablePaneBorderStatus(e, s) {}
  async killPane(e, s) {
    let o = await c([ "session", "close", "-f", "-s", e ]), n = this.teammateSessionIds.indexOf(e);
    if (n !== -1) this.teammateSessionIds.splice(n, 1);
    if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
    return o.code === 0;
  }
}

export { g as ITermBackend };
