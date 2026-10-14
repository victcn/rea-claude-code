// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ks } from "./chunk-kawq2919.js";

import { D } from "./chunk-hmqkrrtz.js";

function g(e) {
  return typeof e === "string" ? Ks(e, {
    maxCodeUnits: 512
  }) : void 0;
}

function f(e) {
  return Ks(e, {
    maxCodeUnits: 64
  });
}

var S = 32, R = 3e5;

function wUt(e, t) {
  let o = e.data?.timestamp;
  if (typeof o !== "string") return !1;
  let n = Date.parse(o);
  return !Number.isNaN(n) && t - n > R;
}

var b = [ "provision", "clone", "setup_script", "start_cc" ];

function QUo(e) {
  return b.includes(e);
}

var x = 6e4, _ = 5e3;

function y(e, t, o) {
  let n = e.data?.timestamp;
  if (typeof n !== "string") return !1;
  let p = Date.parse(n);
  return Number.isFinite(p) && Math.abs(t - p) <= x && p >= o - _;
}

function jEe(e) {
  return {
    steps: b.map(t => ({
      id: t,
      status: "pending"
    })),
    sessionMode: null,
    startedAt: e,
    hasStructuredSteps: !1,
    terminal: !1,
    dismissed: !1,
    sawLiveFrame: !1,
    hadLiveCycle: !1,
    queuedCount: 0
  };
}

function ayt(e) {
  let t = e.data?.extra;
  return {
    stepId: typeof t?.step_id === "string" ? f(t.step_id) : null,
    stepStatus: typeof t?.step_status === "string" ? t.step_status : null
  };
}

function Hpn(e, t, o, n, p) {
  let d = t.data?.extra, {stepId: c, stepStatus: a} = ayt(t), r = e.terminal && c !== null && a !== null ? {
    ...jEe(n),
    dismissed: e.hadLiveCycle,
    hadLiveCycle: e.hadLiveCycle
  } : e;
  if (c !== null && a !== null && !r.sawLiveFrame && y(t, n, p)) r = {
    ...r,
    sawLiveFrame: !0
  };
  if (typeof d?.session_mode === "string") {
    let s = d.session_mode;
    if ((s === "new" || s === "resume" || s === "resume-cached" || s === "setup-only") && r.sessionMode !== s) r = {
      ...r,
      sessionMode: s
    };
  }
  if (typeof d?.expected_steps === "string") {
    let s = D(d.expected_steps.split(",").map(i => f(i)).filter(i => i !== "")).slice(0, S);
    if (s.length > 0) {
      let i = new Map(r.steps.map(u => [ u.id, u ])), l = s.map(u => i.get(u) ?? {
        id: u,
        status: "pending"
      }), m = r.steps.filter(u => !s.includes(u.id) && u.status !== "pending");
      r = {
        ...r,
        steps: [ ...m, ...l ]
      };
    }
  }
  if (c !== null && a !== null) r = A(r, {
    stepId: c,
    stepStatus: a,
    extra: d,
    line: o,
    now: n
  }); else if (o !== "") {
    let s = r.steps.findIndex(i => i.status === "running");
    if (s !== -1 && r.steps[s].detail !== o) {
      let i = r.steps.slice();
      i[s] = {
        ...i[s],
        detail: o
      }, r = {
        ...r,
        steps: i
      };
    }
  }
  return r;
}

function A(e, {stepId: t, stepStatus: o, extra: n, line: p, now: d}) {
  let c = f(t), a = e.steps, r = a.findIndex(u => u.id === c);
  if (r === -1) {
    if (a.length >= S) return e;
    let u = g(n?.step_label) || p;
    a = [ ...a, {
      id: c,
      label: u,
      status: "pending"
    } ], r = a.length - 1;
  }
  let s = a[r], i = g(n?.step_detail), l = null;
  switch (o) {
   case "started":
    if (s.status === "pending") l = {
      ...s,
      status: "running",
      startedAt: d,
      detail: i
    }; else if (i !== void 0 && s.detail !== i) l = {
      ...s,
      detail: i
    };
    break;

   case "completed":
    if (s.status !== "completed") l = {
      ...s,
      status: "completed",
      completedAt: d,
      detail: void 0
    };
    break;

   case "failed":
    if (s.status !== "failed" || s.error !== p) l = {
      ...s,
      status: "failed",
      completedAt: d,
      error: p || void 0
    };
    break;

   case "skipped":
    if (s.status === "pending" || s.status === "running") l = {
      ...s,
      status: "skipped",
      detail: void 0
    };
    break;

   default:
    break;
  }
  if (l !== null) a = a === e.steps ? e.steps.slice() : a, a[r] = l;
  if (a === e.steps) return e;
  let m = {
    ...e,
    steps: a,
    hasStructuredSteps: !0
  };
  if (c === "start_cc" && o === "completed") m = TNr(m, d);
  return m;
}

function TNr(e, t) {
  if (e.terminal) return e;
  let o = e.steps.map(n => n.status === "pending" ? {
    ...n,
    status: "skipped"
  } : n.status === "running" ? {
    ...n,
    status: "completed",
    completedAt: t
  } : n);
  return {
    ...e,
    steps: o,
    terminal: !0,
    completedAt: t,
    hadLiveCycle: e.hadLiveCycle || e.sawLiveFrame
  };
}

function SMe(e, t) {
  let o = t === "resume" || t === "resume-cached", n = e.status === "completed";
  switch (e.id) {
   case "provision":
    if (o) return n ? "Resumed your cloud container" : "Resuming your cloud container";
    return n ? "Set up a cloud container" : "Setting up a cloud container";

   case "clone":
    if (o) return n ? "Refreshed repository" : "Refreshing repository";
    return n ? "Cloned repository" : "Cloning repository";

   case "setup_script":
    return n ? "Ran setup script" : "Running setup script";

   case "start_cc":
    return n ? "Started Claude Code" : "Starting Claude Code";

   default:
    return e.label || e.id;
  }
}

function vUt(e) {
  return e === "resume" || e === "resume-cached" ? "Resuming remote session" : "Setting up remote session";
}

function Dpn(e) {
  let o = e.sessionMode === "resume" || e.sessionMode === "resume-cached" ? "resumed" : "ready", n = (e.completedAt ?? e.startedAt) - e.startedAt;
  return `Remote session ${o} in ${M(n)}`;
}

function vQe(e, t) {
  if (e.startedAt === void 0) return "";
  if (e.status === "completed") return e.completedAt === void 0 ? "" : ` (${M(e.completedAt - e.startedAt)})`;
  let o = Math.max(0, t - e.startedAt);
  return e.status === "running" && o >= 5e3 ? ` (${Math.round(o / 1e3)}s)` : "";
}

function M(e) {
  if (e < 1e4) return `${(Math.max(e, 100) / 1e3).toFixed(1)}s`;
  let t = Math.round(e / 1e3);
  if (t < 60) return `${t}s`;
  return `${Math.floor(t / 60)}m ${t % 60}s`;
}

export { wUt, QUo, jEe, ayt, Hpn, TNr, SMe, vUt, Dpn, vQe };
