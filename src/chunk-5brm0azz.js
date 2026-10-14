// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { K, B, ve, Pb, _x, Zje } from "./chunk-3pqddg8f.js";

import { a } from "./chunk-j016gcgm.js";

var LOe = "CLAUDE_CODE_HOST_SKILL_CATALOG";

var rHr = {
  cli: !0,
  mcp: !0,
  "sdk-cli": !0,
  "sdk-ts": !0,
  "sdk-py": !0,
  bench: !0,
  "claude-vscode": !0,
  "claude-code-github-action": !0,
  "local-agent": !0,
  local_agent: !0,
  "claude-desktop": !0,
  remote: !0,
  remote_baku: !0,
  remote_cowork: !0,
  remote_trigger: !0,
  remote_cowork_trigger: !0,
  remote_desktop: !0,
  remote_mobile: !0,
  remote_projects: !0,
  claude_in_slack: !0,
  "claude-in-slack": !0,
  "claude-in-teams": !0,
  "claude-desktop-3p": !0,
  "claude-security": !0,
  "ssh-remote": !0,
  "claude-coworker": !0,
  "claude-coworker-terminal": !0
}, oHr = new Set([ "remote", "remote_baku", "remote_cowork", "remote_trigger", "remote_cowork_trigger", "remote_desktop", "remote_mobile", "remote_projects", "claude_in_slack", "claude-in-slack", "claude-in-teams" ]);

function MFs() {
  let e = a.CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID;
  return e ? {
    accountUuid: e,
    organizationUuid: a.CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID || void 0
  } : void 0;
}

var dHo = new Set(Object.keys(rHr));

function p(e) {
  return dHo.has(e);
}

function kp() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e && p(e) ? e : void 0;
}

function HFs() {
  switch (kp()) {
   case "claude-desktop":
   case "claude-desktop-3p":
   case "remote_desktop":
    return "Claude Desktop";

   case "remote_mobile":
    return "Mobile";

   case "local-agent":
   case "remote_cowork":
    return "Cowork";

   case "claude_in_slack":
   case "claude-in-slack":
    return "Claude Tag in Slack";

   case "claude-in-teams":
    return "Claude Tag in Teams";

   case "claude-code-github-action":
    return "GitHub Actions";

   default:
    return;
  }
}

var r = new Set([ "claude-desktop", "claude-desktop-3p", "local-agent" ]);

function hu() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && r.has(e);
}

function c4n() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e === "claude-desktop" || e === "local-agent" ? a.CLAUDE_CODE_DESKTOP_APP_VERSION : void 0;
}

var _ = new Set([ "claude-desktop-3p", "local-agent" ]);

function wje() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && _.has(e);
}

function Lln(e) {
  return r.has(e === "local_agent" ? "local-agent" : e);
}

function DFs(e) {
  return e !== void 0 && (r.has(e) || e === "claude-vscode" || e.startsWith("sdk-"));
}

var sHr = new Set([ "claude-desktop", "claude-desktop-3p" ]);

function JXe() {
  let e = IE();
  return e !== void 0 && sHr.has(e) && !n().childSession;
}

function Ij() {
  return JXe() && !dL();
}

function LFs() {
  return !1;
}

function S() {
  let e = IE();
  return e !== void 0 && r.has(e);
}

function NOe() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e === "remote_trigger" || e === "remote_cowork_trigger";
}

function hI() {
  {
    let e = a.CLAUDE_CODE_ENTRYPOINT;
    return a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && a.CLAUDE_CODE_USE_GATEWAY && (e !== void 0 && sHr.has(e) || d());
  }
  return !1;
}

function iHr() {
  return hI() && d();
}

function d() {
  return a.CLAUDE_CODE_HOST_GATEWAY_LINEAGE && !!a.CLAUDE_CODE_HOST_CREDS_FILE;
}

var u4n = "claude-desktop-3p";

function y_() {
  return a.CLAUDE_CODE_ENTRYPOINT === "remote_cowork";
}

function Oj() {
  return _x() && Zje() === "remote_cowork";
}

var s = new Set([ "remote_cowork", "remote_cowork_trigger" ]);

function Z5() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && s.has(e);
}

function $Oe() {
  let e = IE();
  return e !== void 0 && s.has(e);
}

function vje() {
  let e = _x() ? Zje() : void 0;
  return e !== void 0 && s.has(e);
}

function Mj() {
  return $Oe() || vje();
}

function p4n() {
  return cHo() || vje();
}

function Pv() {
  return a.CLAUDE_CODE_SESSION_ORIGIN === "claude_ai_chat";
}

function dx() {
  return Pv() && Mj();
}

function HG() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && u.has(e);
}

var u = new Set([ "claude_in_slack", "claude-in-slack" ]);

function NFs() {
  let e = IE();
  return e !== void 0 && u.has(e);
}

function QXe() {
  return a.CLAUDE_CODE_ENTRYPOINT === "claude-in-teams";
}

function f4n() {
  return HG() || QXe();
}

function FOe() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && oHr.has(e);
}

function Nln() {
  return c(a.CLAUDE_CODE_ENTRYPOINT);
}

function c(e) {
  return e?.startsWith("remote") === !0;
}

var C = new Set([ "remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_trigger" ]);

function $Fs() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return Boolean(a.CLAUDE_CODE_REMOTE) && e !== void 0 && C.has(e);
}

var f = new Set([ "claude_in_slack", "claude-in-slack", "claude-in-teams", "remote_trigger", "remote_cowork_trigger", "remote_cowork", "remote_baku" ]);

function m4n() {
  if (Le(a.CLAUDE_CODE_HIDE_SETTINGS_HINT)) return !1;
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e === void 0 || !f.has(e);
}

function Hj() {
  let e = a.CLAUDE_CODE_ENTRYPOINT;
  return e === "sdk-ts" || e === "sdk-py" || e === "sdk-cli";
}

class E {
  entrypoint=void 0;
  interactive=!1;
  spawnedByAttendedSession=void 0;
  childSession=!1;
  hasRemoteSessionOrContainerId=!1;
  claudecode=!1;
  coworkFrameArtifacts=!1;
  hostScheduledRun=!1;
  desktopSkillSwitches=!1;
  hostUnattendedGrant=void 0;
  chromeTabGroupKey=void 0;
  hostAssignedGroup=void 0;
  hostSkillCatalog=void 0;
  remoteControlOwnerDeclared=!1;
  setEntrypoint(e) {
    this.entrypoint = e;
  }
  setInteractive(e) {
    this.interactive = e;
  }
  setSpawnedByAttendedSession(e) {
    this.spawnedByAttendedSession = e;
  }
  setChildSession(e) {
    this.childSession = e;
  }
  setHasRemoteSessionOrContainerId(e) {
    this.hasRemoteSessionOrContainerId = e;
  }
  setClaudecode(e) {
    this.claudecode = e;
  }
  setCoworkFrameArtifacts(e) {
    this.coworkFrameArtifacts = e;
  }
  setHostScheduledRun(e) {
    this.hostScheduledRun = e;
  }
  setDesktopSkillSwitches(e) {
    this.desktopSkillSwitches = e;
  }
  setHostUnattendedGrant(e) {
    this.hostUnattendedGrant = e;
  }
  setChromeTabGroupKey(e) {
    this.chromeTabGroupKey = e;
  }
  setHostSkillCatalog(e) {
    this.hostSkillCatalog = e;
  }
  setRemoteControlOwnerDeclared(e) {
    this.remoteControlOwnerDeclared = e;
  }
  setHostAssignedGroup(e) {
    this.hostAssignedGroup = e;
  }
}

var O = new K(() => new E);

function n() {
  return O.of(B().host);
}

function IE() {
  return n().entrypoint;
}

var l = new Set([ "claude-vscode", "claude-desktop", "claude-desktop-3p", "local-agent", "local_agent", "remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_cowork", "ssh-remote", "claude-in-slack", "claude_in_slack", "claude-in-teams", "claude-coworker", "claude-coworker-terminal" ]), FFs = new Set([ ...l ].filter(c));

function DG() {
  let e = a.CLAUDE_CODE_SESSION_KIND;
  if (e === "bg" || e === "daemon" || e === "daemon-worker" || Pb() !== void 0) return !1;
  let t = n();
  if (t.interactive) return !0;
  return !t.childSession && t.entrypoint !== void 0 && l.has(t.entrypoint);
}

function UFs() {
  return n().spawnedByAttendedSession === !0;
}

function aae() {
  return n().childSession;
}

function Tp() {
  return S() && !n().childSession;
}

function cHo() {
  let e = n();
  return Fln() || e.entrypoint !== void 0 && s.has(e.entrypoint) && !e.childSession;
}

function $ln() {
  let e = n();
  return $Oe() && e.hasRemoteSessionOrContainerId && !e.childSession && a.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
}

function Fln() {
  let e = n();
  return (e.entrypoint === "local-agent" || e.entrypoint === "local_agent") && !e.childSession;
}

var D = new Set([ "remote", "remote_projects", "remote_desktop", "remote_mobile", "ssh-remote" ]);

function BFs() {
  let e = n();
  return e.entrypoint !== void 0 && D.has(e.entrypoint) && !e.childSession && !e.claudecode;
}

function Iy() {
  let e = n();
  return e.entrypoint === "claude-vscode" && !e.childSession && !e.claudecode;
}

function uq(e = ve()) {
  let t = Tp() && !n().claudecode;
  return e && !t && !Iy();
}

function dL() {
  return n().claudecode;
}

function uHo() {
  return n().coworkFrameArtifacts;
}

function UOe() {
  return n().hostScheduledRun;
}

function jFs() {
  return n().desktopSkillSwitches;
}

function WFs() {
  return n().hostUnattendedGrant;
}

function pHo() {
  return n().chromeTabGroupKey;
}

function g$t() {
  return n().hostSkillCatalog;
}

function zFs(e) {
  T(e);
  let t = n();
  t.setInteractive(!e), t.setSpawnedByAttendedSession(a.CLAUDE_CODE_SESSION_ATTENDED), 
  t.setEntrypoint(a.CLAUDE_CODE_ENTRYPOINT), t.setChildSession(Boolean(a.CLAUDE_CODE_CHILD_SESSION)), 
  t.setHasRemoteSessionOrContainerId(Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID || a.CLAUDE_CODE_CONTAINER_ID)), 
  t.setClaudecode(Boolean(a.CLAUDECODE)), t.setCoworkFrameArtifacts(a.CLAUDE_CODE_COWORK_FRAME_ARTIFACTS), 
  t.setHostScheduledRun(a.CLAUDE_CODE_HOST_SCHEDULED_RUN), t.setDesktopSkillSwitches(a.CLAUDE_CODE_DESKTOP_SKILL_SWITCHES), 
  t.setHostUnattendedGrant(a.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED), a.unset("CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED"), 
  t.setChromeTabGroupKey(a.CLAUDE_CODE_REMOTE_SESSION_ID ? a.CLAUDE_CHROME_TAB_GROUP_KEY : void 0);
  let o = $ln() && Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID);
  if (t.setHostSkillCatalog(o ? a.CLAUDE_CODE_HOST_SKILL_CATALOG : void 0), a.unset("CLAUDE_CHROME_TAB_GROUP_KEY"), 
  o) a.unset(LOe);
}

function T(e) {
  if (a.CLAUDE_CODE_ENTRYPOINT) {
    if (a.CLAUDE_CODE_ENTRYPOINT === "local_agent") a.set("CLAUDE_CODE_ENTRYPOINT", "local-agent");
    if (a.CLAUDE_CODE_ENTRYPOINT === "cli" && e) a.set("CLAUDE_CODE_ENTRYPOINT", "sdk-cli");
    return;
  }
  let t = process.argv.slice(2), o = t.indexOf("mcp");
  if (o !== -1 && t[o + 1] === "serve") {
    a.set("CLAUDE_CODE_ENTRYPOINT", "mcp");
    return;
  }
  if (Le(a.CLAUDE_CODE_ACTION)) {
    a.set("CLAUDE_CODE_ENTRYPOINT", "claude-code-github-action");
    return;
  }
  a.set("CLAUDE_CODE_ENTRYPOINT", e ? "sdk-cli" : "cli");
}

function fHo(e) {
  let t = e.indexOf("--");
  return t === -1 ? e : e.slice(0, t);
}

function g4n(e) {
  let t = fHo(e);
  if (t.includes("-r") || t.includes("--resume") || t.includes("--from-pr") || t.some(o => o.startsWith("--resume=") || o.startsWith("--from-pr="))) return "resume";
  if (t.includes("-c") || t.includes("--continue")) return "continue";
  return "fresh";
}

export { LOe, rHr, oHr, MFs, dHo, kp, HFs, hu, c4n, wje, Lln, DFs, sHr, JXe, Ij, LFs, NOe, hI, iHr, u4n, y_, Oj, Z5, $Oe, vje, Mj, p4n, Pv, dx, HG, NFs, QXe, f4n, FOe, Nln, $Fs, m4n, Hj, IE, FFs, DG, UFs, aae, Tp, cHo, $ln, Fln, BFs, Iy, uq, dL, uHo, UOe, jFs, WFs, pHo, g$t, zFs, fHo, g4n };
