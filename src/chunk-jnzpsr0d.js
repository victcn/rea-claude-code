// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { xHr, PHr, ddn, Zgt, qU } from "./chunk-3pqddg8f.js";

function A(e, o, s, n) {
  var r = e.length, i = s + (n ? 1 : -1);
  while (n ? i-- : ++i < r) if (o(e[i], i, e)) return i;
  return -1;
}

var y = A;

function h(e) {
  return e !== e;
}

var R = h;

function b(e, o, s) {
  var n = s - 1, r = e.length;
  while (++n < r) if (e[n] === o) return n;
  return -1;
}

var f = b;

function g(e, o, s) {
  return o === o ? f(e, o, s) : y(e, R, s);
}

var k = g;

function E(e, o) {
  var s = e == null ? 0 : e.length;
  return !!s && k(e, o, 0) > -1;
}

var _ = E;

function D(e, o, s) {
  var n = -1, r = e == null ? 0 : e.length;
  while (++n < r) if (s(o, e[n])) return !0;
  return !1;
}

var O = D;

function x() {}

var eXe = x;

var C = 1 / 0, I = !(Zgt && 1 / ddn(new Zgt([ , -0 ]))[1] == C) ? eXe : function(e) {
  return new Zgt(e);
}, S = I;

var N = 200;

function M(e, o, s) {
  var n = -1, r = _, i = e.length, u = !0, l = [], t = l;
  if (s) u = !1, r = O; else if (i >= N) {
    var p = o ? null : S(e);
    if (p) return ddn(p);
    u = !1, r = PHr, t = new xHr;
  } else t = o ? [] : l;
  e: while (++n < i) {
    var a = e[n], c = o ? o(a) : a;
    if (a = s || a !== 0 ? a : 0, u && c === c) {
      var m = t.length;
      while (m--) if (t[m] === c) continue e;
      if (o) t.push(c);
      l.push(a);
    } else if (!r(t, c, s)) {
      if (t !== l) t.push(c);
      l.push(a);
    }
  }
  return l;
}

var hNt = M;

function T(e, o) {
  return e && e.length ? hNt(e, qU(o, 2)) : [];
}

var vi = T;

var eD = [ "acceptEdits", "auto", "bypassPermissions", "default", "dontAsk", "plan" ], P = [ ...eD ], kE = P, _G = "manual";

function _h(e) {
  return e === "manual" ? "default" : e;
}

function rg(e) {
  let o = _h(e);
  return P.find(s => s === o);
}

var Yfe = `Cannot set permission mode: must be one of ${eD.join(", ")}`, yNt = 32, ran = /^[A-Za-z0-9_-]{1,64}$/, oan = {
  dangerousRemoval: {
    bypassImmune: !0,
    classifierRouted: !0,
    autoModeDeny: !0,
    hostPersonOnly: !1,
    localProjectionOnly: !1,
    servedUnplaceable: !1
  },
  backgroundOperator: {
    bypassImmune: !1,
    classifierRouted: !0,
    autoModeDeny: !1,
    hostPersonOnly: !1,
    localProjectionOnly: !1,
    servedUnplaceable: !1
  },
  suspiciousWindowsPath: {
    bypassImmune: !1,
    classifierRouted: !0,
    autoModeDeny: !1,
    hostPersonOnly: !1,
    localProjectionOnly: !1,
    servedUnplaceable: !1
  },
  isolatePeerMachines: {
    bypassImmune: !0,
    classifierRouted: !1,
    autoModeDeny: !1,
    hostPersonOnly: !1,
    localProjectionOnly: !1,
    servedUnplaceable: !1
  },
  restrictedMode: {
    bypassImmune: !0,
    classifierRouted: !1,
    autoModeDeny: !1,
    hostPersonOnly: !1,
    localProjectionOnly: !1,
    servedUnplaceable: !1
  },
  outsideReadsBlocked: {
    bypassImmune: !0,
    classifierRouted: !1,
    autoModeDeny: !1,
    hostPersonOnly: !1,
    localProjectionOnly: !1,
    servedUnplaceable: !1
  },
  claudeSettingsFile: {
    bypassImmune: !1,
    classifierRouted: !1,
    autoModeDeny: !1,
    hostPersonOnly: !0,
    localProjectionOnly: !1,
    servedUnplaceable: !1
  },
  internalHardDeny: {
    bypassImmune: !1,
    classifierRouted: !1,
    autoModeDeny: !1,
    hostPersonOnly: !1,
    localProjectionOnly: !1,
    servedUnplaceable: !0
  },
  unfinishedCheck: {
    bypassImmune: !0,
    classifierRouted: !1,
    autoModeDeny: !1,
    hostPersonOnly: !0,
    localProjectionOnly: !1,
    servedUnplaceable: !1
  },
  ...{},
  ...{}
};

function B5(e) {
  return d(e).some(o => oan[o]?.bypassImmune === !0);
}

function san(e) {
  return d(e).some(o => oan[o]?.servedUnplaceable === !0);
}

function d(e) {
  return [ ...e.circuitBreaker !== void 0 ? [ e.circuitBreaker ] : [], ...e.also ?? [] ];
}

function DU(e) {
  return e.circuitBreaker !== void 0 && oan[e.circuitBreaker]?.classifierRouted === !0;
}

function zve(e) {
  return e.circuitBreaker !== void 0 && oan[e.circuitBreaker]?.autoModeDeny === !0;
}

function yj(e) {
  return d(e).some(o => oan[o]?.hostPersonOnly === !0);
}

function FIo(e) {
  return d(e).some(o => oan[o]?.localProjectionOnly === !0);
}

function UIo(e) {
  return e.decideLocation === "pre-ask";
}

function tXe(e, o) {
  return e.behavior !== "allow" && e !== o && !N1e(e);
}

function N1e(e) {
  return e.behavior === "deny" && e.invalidInput === !0;
}

var Jmt = [ "rule", "mode", "subcommandResults", "permissionPromptTool", "hook", "asyncAgent", "sandboxOverride", "workingDir", "safetyCheck", "classifier", "other" ];

var nXe = "Auto-allowed with sandbox (autoAllowBashIfSandboxed enabled)", Xfe = "Read-only command is allowed", ian = "Command is read-only and safe to execute", aan = "All pipeline commands are individually allowed, some only by the read-only allowlist", lan = "Auto mode held this command for the server-side classifier to review", eqn = "Auto mode reviews this action before it runs in the cloud environment", BIo = "Path is outside allowed working directories", dan = "--restricted: path outside the working directory", rM = "Reads outside the working directories are blocked (permissions.blockReadsOutsideWorkingDirectories). Add the directory with /add-dir, or remove that setting.", tqn = "permission check needs a working directory; the session has none", _Nt = new Map([ [ "python", new Set([ "-c" ]) ], [ "node", new Set([ "-e", "--eval", "-p", "--print" ]) ], [ "nodejs", new Set([ "-e", "--eval", "-p", "--print" ]) ], [ "bun", new Set([ "-e", "--eval", "-p", "--print" ]) ], [ "perl", new Set([ "-e", "-E" ]) ], [ "ruby", new Set([ "-e" ]) ], [ "php", new Set([ "-r" ]) ], [ "bash", new Set([ "-c" ]) ], [ "sh", new Set([ "-c" ]) ], [ "zsh", new Set([ "-c" ]) ], [ "dash", new Set([ "-c" ]) ], [ "ksh", new Set([ "-c" ]) ], [ "lua", new Set([ "-e" ]) ], [ "luajit", new Set([ "-e" ]) ], [ "tsx", new Set([ "-e", "--eval", "-p", "--print" ]) ], [ "deno", new Set([ "eval" ]) ], [ "Rscript", new Set([ "-e" ]) ], [ "julia", new Set([ "-e", "-E" ]) ], [ "osascript", new Set([ "-e" ]) ] ]);

function g$(e) {
  return e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked";
}

function m_(e) {
  let o = `${e} names a path that is computed at run time, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)`;
  return {
    behavior: "ask",
    message: o,
    decisionReason: {
      type: "safetyCheck",
      reason: o,
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked"
    }
  };
}

function bG(e) {
  let o = `${e}; under the read block (permissions.blockReadsOutsideWorkingDirectories) a command the shell parser cannot analyze asks the person`;
  return {
    behavior: "ask",
    message: o,
    decisionReason: {
      type: "safetyCheck",
      reason: o,
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked"
    },
    suggestions: []
  };
}

function can() {
  return {
    behavior: "ask",
    message: "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)",
    decisionReason: {
      type: "safetyCheck",
      reason: "This sed script is not on the allowlist and can read or write any file, which cannot be checked against the read block (permissions.blockReadsOutsideWorkingDirectories)",
      classifierApprovable: !1,
      circuitBreaker: "outsideReadsBlocked"
    }
  };
}

var bNt = "bashCommandClamp: no clamp rule matches this command", uan = "bashCommandClamp fail-closed: permission check crashed", $1e = "Classifier unavailable", nqn = "Auto mode unavailable \u2014 stopped after repeated responses with no safety verdict", rqn = "Auto mode could not evaluate this action and is blocking it for safety", Qmt = "Auto mode classifier transcript exceeded context window \u2014 falling back to manual approval (try /compact to reduce conversation size)", TOr = "Auto mode classifier transcript exceeded context window; will try to compact the conversation before the next request", Zmt = "Memory is paused for this session; only the user can turn it back on.", oqn = "memory access blocked by /pause-memory", sqn = [ "classifier_transcript_too_long", "outside_reads_blocked", "memory_paused" ];

function Eee(e) {
  switch (e?.type) {
   case "classifier":
    return e.noVerdict === !0 && (e.reason === Qmt || e.reason === TOr) ? "classifier_transcript_too_long" : void 0;

   case "other":
   case "safetyCheck":
    switch (e.reason) {
     case Qmt:
      return "classifier_transcript_too_long";

     case rM:
      return "outside_reads_blocked";

     case Zmt:
     case oqn:
      return "memory_paused";

     default:
      return;
    }

   case "subcommandResults":
    {
      let o;
      for (let s of e.reasons.values()) {
        let n = Eee(s.decisionReason);
        if (n === "outside_reads_blocked") return n;
        o ??= n;
      }
      return o;
    }

   default:
    return;
  }
}

var AOr = "ask rule on hook-rewritten input", pan = {
  type: "asyncAgent",
  reason: AOr
}, COr = {
  type: "asyncAgent",
  reason: "tool requires user interaction; no prompt available in headless mode"
}, ROr = "no approval surface in this session; permission request denied automatically", jIo = {
  type: "asyncAgent",
  reason: ROr
}, WIo = {
  type: "other",
  reason: "MCP tool requires user interaction; not supported via --permission-prompt-tool"
}, rXe = "tool permission stream closed before response received", F1e = "canUseTool returned a schema-invalid permission result", sOe = "tool permission request failed", fan = "tool permission request aborted", zIo = {
  type: "other",
  reason: rXe
}, oXe = {
  type: "other",
  reason: F1e
}, xOr = "permission prompt tool no longer connected", GIo = {
  type: "other",
  reason: xOr
}, POr = {
  type: "other",
  reason: sOe
}, sXe = {
  type: "other",
  reason: fan
};

export { eXe, hNt, vi, eD, kE, _G, _h, rg, Yfe, yNt, ran, oan, B5, san, DU, zve, yj, FIo, UIo, tXe, N1e, Jmt, nXe, Xfe, ian, aan, lan, eqn, BIo, dan, rM, tqn, _Nt, g$, m_, bG, can, bNt, uan, $1e, nqn, rqn, Qmt, TOr, Zmt, oqn, sqn, Eee, AOr, pan, COr, ROr, jIo, WIo, rXe, F1e, sOe, fan, zIo, oXe, xOr, GIo, POr, sXe };
