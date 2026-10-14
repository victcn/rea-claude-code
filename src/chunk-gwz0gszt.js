// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ui, k } from "./chunk-xywp7esx.js";

import { Le } from "./chunk-2v9tfgc3.js";

import { a, tr } from "./chunk-j016gcgm.js";

import { Ma } from "./chunk-5wbhf1bk.js";

import { Y0 } from "./chunk-nnrb0acr.js";

function sRt() {
  return r() !== null;
}

function r() {
  if (a.CLAUDE_CODE_DISABLE_AGENT_VIEW) return "is disabled by CLAUDE_CODE_DISABLE_AGENT_VIEW";
  if (Y0()?.settings.disableAgentView === !0) return "is disabled by the 'disableAgentView' setting";
  return null;
}

function ev() {
  return !sRt();
}

var i = "tengu_fleetview_simple";

function nso() {
  return a.CLAUDE_CODE_FLEETVIEW_SIMPLE || k(i, !1);
}

async function iRt(e = {}) {
  if (Y0() === null) {
    let {getSettingsWithErrors: t} = await import("./chunk-tnx47z70.js");
    t();
  }
  if (e.kickGrowthBook !== !1) Ui().catch(() => {});
}

function N8t() {
  return tr.CLAUDE_CODE_FLEET_PAST_SESSIONS === !0 || k("tengu_fleet_past_sessions", !1);
}

function t4e() {
  return ev();
}

function e8() {
  return !1;
}

function n4e() {
  return k("tengu_amber_anchor", !1);
}

function rso() {
  return k("tengu_copper_lantern", !1);
}

function s() {
  return k("tengu_quiet_harbor", !1) ? "ask" : "transient";
}

function kmr() {
  let e = process.env.CLAUDE_CODE_DAEMON_COLD_START;
  if (e === "transient" || e === "ask") return e;
  let t = Y0()?.settings.daemonColdStart;
  if (t !== void 0) return t;
  return s();
}

function hm() {
  return n4e() ? "daemon" : "background service";
}

function wce() {
  return Ma(hm());
}

function sbe(e) {
  return t4e() ? ` \u2014 run 'claude daemon ${e}'` : "";
}

function r4e(e, t) {
  let o = t ?? r() ?? "is not available in this environment";
  process.stderr.write(`'${e}' ${o}.\n`), process.exit(1);
}

var zMn = "CLAUDE_CODE_AGENT_VIEW_RELAUNCH";

function Tmr() {
  return !1;
}

function oso() {
  return !!a.CLAUDE_AGENTS_SELECT;
}

function sso() {
  let e = Le(process.env[zMn]);
  return delete process.env[zMn], e;
}

export { sRt, ev, nso, iRt, N8t, t4e, e8, n4e, rso, kmr, hm, wce, sbe, r4e, zMn, Tmr, oso, sso };
