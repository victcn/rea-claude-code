// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, qp } from "./chunk-3pqddg8f.js";

import { a } from "./chunk-j016gcgm.js";

import { UFs } from "./chunk-5brm0azz.js";

import { Pj } from "./chunk-0pmh7awy.js";

import { gs } from "./chunk-qqd24q2y.js";

import { AsyncLocalStorage as p } from "async_hooks";

var u = new p;

function EC() {
  return u.getStore();
}

function fDs(e, t) {
  return u.run(e, t);
}

function O5() {
  return u.getStore() !== void 0;
}

function mDs(e) {
  return {
    ...e,
    isInProcess: !0
  };
}

import { spawnSync as x } from "child_process";

function kC() {
  let e = EC();
  if (e) return e.parentSessionId;
  let t = n();
  return t.dynamicTeamContext?.parentSessionId ?? t.cliParentSessionId;
}

class g {
  cliParentSessionId=void 0;
  dynamicTeamContext=null;
  ambientMarkerProbe=f(C);
  isChildSessionMarkerAmbientInTmux=() => this.ambientMarkerProbe() === "ambient";
  setCliParentSessionId(e) {
    this.cliParentSessionId = e;
  }
  setDynamicTeamContext(e) {
    this.dynamicTeamContext = e;
  }
  setAmbientMarkerProbe(e) {
    this.ambientMarkerProbe = f(e);
  }
}

var q2s = new K(() => new g);

function n() {
  return q2s.of(B().host);
}

function T8s(e) {
  n().setCliParentSessionId(e);
}

function A8s(e) {
  n().setDynamicTeamContext(e);
}

function C8s() {
  n().setDynamicTeamContext(null);
}

function aj() {
  return n().dynamicTeamContext;
}

function KR() {
  let e = EC();
  if (e) return e.agentId;
  return n().dynamicTeamContext?.agentId;
}

function Ab() {
  let e = EC();
  if (e) return e.agentName;
  return n().dynamicTeamContext?.agentName;
}

function ql(e) {
  let t = EC();
  if (t) return t.teamName;
  let {dynamicTeamContext: r} = n();
  if (r?.teamName) return r.teamName;
  return e?.teamName;
}

function jd() {
  if (EC()) return !0;
  let {dynamicTeamContext: t} = n();
  return !!(t?.agentId && t?.teamName);
}

function SU(e) {
  return e !== void 0 || jd() || a.CLAUDE_CODE_CHILD_SESSION;
}

function X8e() {
  if (a.CLAUDE_CODE_FORCE_SESSION_PERSISTENCE) return !1;
  if (!(a.CLAUDE_CODE_CHILD_SESSION && qp() && !jd())) return !1;
  return !n().isChildSessionMarkerAmbientInTmux();
}

function _Co() {
  if (!a.CLAUDE_CODE_CHILD_SESSION) return !1;
  if (process.stdin.isTTY || process.stdout.isTTY) return !1;
  if (!UFs()) return !1;
  return n().ambientMarkerProbe() === "absent";
}

function J8e() {
  if (a.CLAUDE_CODE_CHILD_SESSION) return !0;
  if (!a.CLAUDECODE) return !1;
  return a.CLAUDE_CODE_SKIP_PROMPT_HISTORY || !process.stdin.isTTY && !process.stdout.isTTY;
}

function R8s(e) {
  n().setAmbientMarkerProbe(e === null ? C : () => {
    let t = e();
    return t === !0 ? "ambient" : t === !1 ? "absent" : t;
  });
}

function f(e) {
  let t = null;
  return () => {
    if (t === null) try {
      t = e();
    } catch {
      t = "unknown";
    }
    return t;
  };
}

function C() {
  if (!a.TMUX) return "absent";
  let e = Pj("tmux");
  if (e === null) return "unknown";
  let t;
  try {
    t = x(e, [ "show-environment", "-g" ], {
      encoding: "utf8",
      timeout: 250,
      stdio: [ "ignore", "pipe", "ignore" ],
      cwd: void 0,
      env: gs(),
      windowsHide: !0
    });
  } catch {
    return "unknown";
  }
  if (t.status !== 0) return "unknown";
  return Y2s(t.stdout) ? "ambient" : "absent";
}

function Y2s(e) {
  return e.split(`\n`).some(t => t.startsWith("CLAUDE_CODE_CHILD_SESSION="));
}

function qR() {
  let e = EC();
  if (e) return e.color;
  return n().dynamicTeamContext?.color;
}

function lsn() {
  let e = EC();
  if (e) return e.planModeRequired;
  let {dynamicTeamContext: t} = n();
  if (t !== null) return t.planModeRequired;
  return a.CLAUDE_CODE_PLAN_MODE_REQUIRED;
}

function KBe(e) {
  if (!e) return !1;
  let {leadAgentId: t, teammates: r} = e;
  return Object.keys(r).some(s => s !== t);
}

function i$(e) {
  if (!e?.leadAgentId) return !1;
  let t = KR(), r = e.leadAgentId;
  if (t === r) return !0;
  if (!t) return !0;
  return !1;
}

function xft(e) {
  for (let t of Object.values(e.tasks)) if (t.type === "in_process_teammate" && t.status === "running") return !0;
  return !1;
}

function dsn(e) {
  for (let t of Object.values(e.tasks)) if (t.type === "in_process_teammate" && t.status === "running" && !t.isIdle) return !0;
  return !1;
}

function bCo(e, t) {
  let r = [];
  for (let [s, o] of Object.entries(t.tasks)) if (o.type === "in_process_teammate" && o.status === "running" && !o.isIdle) r.push(s);
  if (r.length === 0) return Promise.resolve();
  return new Promise(s => {
    let o = r.length, d = () => {
      if (o--, o === 0) s();
    };
    e(l => {
      let m = {
        ...l.tasks
      };
      for (let c of r) {
        let i = m[c];
        if (i && i.type === "in_process_teammate") if (i.isIdle) d(); else m[c] = {
          ...i,
          onIdleCallbacks: [ ...i.onIdleCallbacks ?? [], d ]
        };
      }
      return {
        ...l,
        tasks: m
      };
    });
  });
}

export { EC, fDs, O5, mDs, kC, q2s, T8s, A8s, C8s, aj, KR, Ab, ql, jd, SU, X8e, _Co, J8e, R8s, Y2s, qR, lsn, KBe, i$, xft, dsn, bCo };
