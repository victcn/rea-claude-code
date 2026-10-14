// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { PU } from "./chunk-q6wab2jw.js";

import { wd, UBn, Rks } from "./chunk-4y2m4xpx.js";

import { Qs } from "./chunk-s2t7g8m9.js";

import { Jz } from "./chunk-xywp7esx.js";

import { dr } from "./chunk-y3nc3daq.js";

import { ik } from "./chunk-2mq45myc.js";

import { ho, wz } from "./chunk-9r9vcg3z.js";

import { D } from "./chunk-hmqkrrtz.js";

function d(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      command: D([ ...e.alwaysAllowRules.command || [], ...o ])
    }
  };
}

function u(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      command: D([ ...e.alwaysDenyRules.command || [], ...o ])
    }
  };
}

function bBn(e, o, n, r) {
  if (!r?.replaceCommandRules && !r?.replaceDenyRules && r?.frozenCommandDenies === void 0 && o.length === 0 && n.length === 0) return e;
  return () => {
    let s = e(), t = s.toolPermissionContext.pollEventDeliveryGuard === !0 ? s.toolPermissionContext : r?.replaceCommandRules ? {
      ...s.toolPermissionContext,
      alwaysAllowRules: {
        ...s.toolPermissionContext.alwaysAllowRules,
        command: o
      }
    } : d(s.toolPermissionContext, o), i = r?.replaceDenyRules ? {
      ...t,
      alwaysDenyRules: {
        ...t.alwaysDenyRules,
        command: n
      }
    } : r?.frozenCommandDenies !== void 0 ? {
      ...t,
      alwaysDenyRules: {
        ...t.alwaysDenyRules,
        command: D([ ...r.frozenCommandDenies, ...t.alwaysDenyRules.command ?? [], ...n ])
      }
    } : u(t, n);
    return {
      ...s,
      toolPermissionContext: i
    };
  };
}

class f {
  mode;
  autoClassifierActive;
  constructor(e, o) {
    this.mode = e, this.autoClassifierActive = o;
  }
  toJSON() {
    return;
  }
}

function ZEs(e) {
  return new f(e, Qs(e));
}

function cyo(e) {
  return e instanceof f && !e.autoClassifierActive;
}

function g(e) {
  if (!cyo(e)) return;
  let o = e.mode;
  switch (o) {
   case "default":
   case "acceptEdits":
   case "dontAsk":
   case "bubble":
    return o;

   case "plan":
   case "bypassPermissions":
    return "default";

   case "auto":
    return;

   default:
    {
      let n = o;
      return;
    }
  }
}

var x = {
  allowed_tools: "strip",
  avoid_prompts: "strip",
  permission_mode: "strip",
  working_directory: "strip",
  disallowed_tools: "keep",
  bash_command_clamp: "keep",
  sandbox_auto_allow_suspended: "keep",
  effort: "keep",
  model: "keep",
  max_thinking_tokens: "keep",
  flag_settings: "keep"
};

function P(e) {
  if (!e) return e;
  return e.filter(o => x[o.kind] === "keep");
}

function ten(e) {
  return {
    ...e,
    abortController: dr(),
    toolUseId: void 0,
    permissionPhase: void 0,
    autoModeClassified: void 0,
    ...!1,
    permissionLayers: P(e.permissionLayers)
  };
}

function uyo(e) {
  return e.getAppState?.().mcp?.suppressedClaudeAiConnectors ?? [];
}

function kg(e) {
  let o = de(e);
  return o.mode !== "bypassPermissions" && !PU(o.mode, o.isBypassPermissionsModeAvailable);
}

function Qb(e) {
  if (de(e).mode !== "plan") return !1;
  return dh(e);
}

function Gdt(e) {
  return e.getAppState();
}

function dh(e) {
  return !kg(e) || de(e).shouldAvoidPermissionPrompts === !0;
}

function C(e) {
  return e === ho || e.startsWith(`${ho}(`) || e.startsWith(wz);
}

function b(e) {
  let o = C, n = !1, r = {}, s = {};
  for (let [t, i] of Object.entries(e.strippedDangerousRules ?? {})) if (i !== void 0) s[t] = [ ...i ];
  for (let [t, i] of Object.entries(e.alwaysAllowRules)) {
    if (i === void 0) continue;
    let a = i.filter(l => !o(l));
    if (a.length !== i.length) {
      n = !0;
      for (let l of i) if (o(l)) {
        let c = s[t] ??= [];
        if (!c.includes(l)) c.push(l);
      }
    }
    r[t] = a;
  }
  if (!n) return e;
  return {
    ...e,
    alwaysAllowRules: r,
    strippedDangerousRules: s
  };
}

function pyo(e) {
  let o = e.strippedDangerousRules;
  if (o === void 0) return e;
  let n = !1, r = {};
  for (let [s, t] of Object.entries(e.alwaysAllowRules)) if (t !== void 0) r[s] = t;
  for (let [s, t] of Object.entries(o)) {
    if (t === void 0) continue;
    for (let i of t) {
      if (!C(i)) continue;
      let a = [ ...r[s] ?? [] ];
      if (!a.includes(i)) a.push(i), r[s] = a, n = !0;
    }
  }
  if (!n) return e;
  return {
    ...e,
    alwaysAllowRules: r
  };
}

function ase(e) {
  return e.getAppState().toolPermissionContext;
}

function de(e) {
  let o = e.getAppState().toolPermissionContext, n = o !== void 0 && o.pollEventDeliveryGuard === !0;
  if (n) o = b(o);
  let r = e.permissionLayers;
  if (!r) return y(e, o);
  let s = r.findLast(t => t.kind === "working_directory");
  for (let t of r) switch (t.kind) {
   case "allowed_tools":
    if (!n) o = d(o, [ ...t.allowedTools ]);
    break;

   case "disallowed_tools":
    o = u(o, [ ...t.disallowedTools ]);
    break;

   case "bash_command_clamp":
    o = {
      ...o,
      bashCommandClamps: [ ...o.bashCommandClamps ?? [], t.rules ]
    };
    break;

   case "avoid_prompts":
    if (!o.shouldAvoidPermissionPrompts) o = {
      ...o,
      shouldAvoidPermissionPrompts: !0
    };
    break;

   case "sandbox_auto_allow_suspended":
    if (!o.sandboxAutoAllowSuspended) o = {
      ...o,
      sandboxAutoAllowSuspended: !0
    };
    break;

   case "permission_mode":
    {
      if (t.mode === "bypassPermissions" && (ik() || !o.isBypassPermissionsModeAvailable)) break;
      o = {
        ...o,
        mode: t.mode
      };
      break;
    }

   case "working_directory":
    if (t === s && !o.additionalWorkingDirectories.has(t.directory)) o = {
      ...o,
      additionalWorkingDirectories: new Map([ ...o.additionalWorkingDirectories, [ t.directory, {
        path: t.directory,
        source: "session"
      } ] ])
    };
    break;

   case "effort":
   case "model":
   case "max_thinking_tokens":
   case "flag_settings":
    break;
  }
  return y(e, o);
}

function y(e, o) {
  return k(e, S(e, h(e, o)));
}

function h(e, o) {
  if (o === void 0 || o.mode !== "auto" || e.forPromptShellCommand === !0 || e.forRemoteExecution === !0) return o;
  let n = g(e.permissionModeAtRequest);
  return n === void 0 ? o : m(n, o);
}

function A(e) {
  if (e.modeBeforeRewrite === void 0) return e;
  let {modeBeforeRewrite: o, ...n} = e;
  return n;
}

function fyo(e) {
  let o = A(e);
  if (o.sandboxAutoAllowSuspended === void 0) return o;
  let {sandboxAutoAllowSuspended: n, ...r} = o;
  return r;
}

function k(e, o) {
  if (e.forPromptShellCommand !== !0 || o === void 0) return o;
  return o.mode === "auto" ? m("default", o) : o;
}

function m(e, o) {
  return {
    ...o,
    mode: e,
    modeBeforeRewrite: o.modeBeforeRewrite ?? o.mode
  };
}

function S(e, o) {
  if (e.forRemoteExecution !== !0 || o === void 0) return o;
  let {blockReadsOutsideWorkingDirectories: n, ...r} = o;
  return o.mode === "acceptEdits" || o.mode === "bypassPermissions" ? m("default", r) : r;
}

function Bh(e) {
  let o;
  if (!e) return o;
  for (let n of e) if (n.kind === "effort") o = n.effort;
  return o;
}

function jh(e) {
  return Bh(e.permissionLayers) ?? wd(e.getAppState(), p(e), {
    withHold: Gvr(e)
  });
}

function nen(e, o) {
  return UBn(o, Tc(e)) ? {
    effortValue: jh(e),
    turnEffort: Bh(e.permissionLayers)
  } : {
    effortValue: Rks(e.getAppState(), o),
    turnEffort: void 0
  };
}

function Gvr(e) {
  return e.agentContext === void 0 || Jz(e.agentContext);
}

function ren(e) {
  return jh(e) === void 0 ? wd(e.getAppState(), p(e), {
    withHold: !1
  }) : void 0;
}

function p(e) {
  let o = e.options?.mainLoopModel;
  for (let n of e.permissionLayers ?? []) if (n.kind === "model") o = n.mainLoopModel;
  return o;
}

function USe(e) {
  return e.getAppState().sessionEffort;
}

function Tc(e) {
  return p(e) ?? e.options.mainLoopModel;
}

function k6e(e) {
  let o = e.options.thinkingConfig;
  for (let n of e.permissionLayers ?? []) if (n.kind === "max_thinking_tokens") o = R(n.maxThinkingTokens);
  return o;
}

function R(e) {
  return e === 0 ? {
    type: "disabled"
  } : {
    type: "enabled",
    budgetTokens: e
  };
}

function oen(e) {
  return e.getAppState().ultracode === !0;
}

function Rxe(e, o) {
  if (o.length === 0) return e;
  let n = e.permissionLayers ? [ ...e.permissionLayers, ...o ] : [ ...o ], r;
  for (let i = o.length - 1; i >= 0; i--) {
    let a = o[i];
    if (a.kind === "model") {
      r = a.mainLoopModel;
      break;
    }
  }
  let s;
  for (let i = o.length - 1; i >= 0; i--) {
    let a = o[i];
    if (a.kind === "max_thinking_tokens") {
      s = R(a.maxThinkingTokens);
      break;
    }
  }
  return {
    ...e,
    permissionLayers: n,
    ...(r !== void 0 || s !== void 0) && {
      options: {
        ...e.options,
        ...r !== void 0 && {
          mainLoopModel: r
        },
        ...s !== void 0 && {
          thinkingConfig: s
        }
      }
    }
  };
}

export { bBn, ZEs, cyo, ten, uyo, kg, Qb, Gdt, dh, pyo, ase, de, fyo, Bh, jh, nen, Gvr, ren, USe, Tc, k6e, oen, Rxe };
