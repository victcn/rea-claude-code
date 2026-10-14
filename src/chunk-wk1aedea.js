// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Pp, kdn, Fn, kI, mc } from "./chunk-3pqddg8f.js";

import { j } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { Ld, ZLs, xC } from "./chunk-q6wab2jw.js";

import { d } from "./chunk-6ah1819r.js";

import { LBn, vks, ch, Zb, Cks, use } from "./chunk-4y2m4xpx.js";

import { R8e } from "./chunk-s2t7g8m9.js";

import { j1, ui, H3e, NP, Cg, BPs, Qe, Il, fpt, die, gpt, WDt, Ts } from "./chunk-xywp7esx.js";

import { Gct } from "./chunk-gmq0qwep.js";

import { mK } from "./chunk-zzhmvqjt.js";

import { SSe, mmo } from "./chunk-rshryz75.js";

import { Ves, w3, rO, Qw, bis, Keo, HIn, Dre, W3, G_e } from "./chunk-84yp45y8.js";

import { $h } from "./chunk-4v78v8fd.js";

import { vEs } from "./chunk-9tdwgnpn.js";

import { uC } from "./chunk-ewk363e4.js";

import { Uu, omr, rh, smr, Q3, WCt } from "./chunk-bkx9v5fh.js";

import { $Ts } from "./chunk-kq1bg4dg.js";

import { KSe } from "./chunk-bdevabaf.js";

import { q$e, Tue } from "./chunk-3xtsjx0y.js";

import { eH, dHn } from "./chunk-de9nc4rq.js";

import { iP } from "./chunk-z09tf6qf.js";

import { Q2e } from "./chunk-g8dhxbna.js";

import { D2, MM } from "./chunk-ce64fmea.js";

import { Ubn } from "./chunk-52ew012a.js";

import { ber } from "./chunk-yz8yf8mg.js";

import { qhn, Yhn } from "./chunk-ak6grb0c.js";

import { SZe } from "./chunk-bzyvpktr.js";

import { BEn } from "./chunk-wp79c0ph.js";

import { nkt, Vne } from "./chunk-rrj0x6b5.js";

import { ik } from "./chunk-2mq45myc.js";

import { o, u } from "./chunk-cvcg6n1z.js";

function yUr(e) {
  return e !== "requesting" && SSe();
}

function E() {
  return !W3() && !Dre();
}

function c1t(e) {
  if (e.type === "system" && "subtype" in e && e.subtype === "status" && "compact_error" in e && e.compact_error !== void 0 && !E()) return {
    ...e,
    compact_error: void 0
  };
  return e;
}

function T7e({status: e, permissionMode: i, compactResult: s, compactError: n}) {
  try {
    if (!yUr(e)) return;
    ui({
      type: "system",
      subtype: "status",
      status: e,
      ...i !== void 0 && {
        permissionMode: i
      },
      ...s !== void 0 && {
        compact_result: s
      },
      ...n !== void 0 && E() && {
        compact_error: n
      }
    });
  } catch (p) {
    d(p);
  }
}

function gWo(e) {
  try {
    if (!mc() || !mmo()) return;
    if (G_e(e.event)) return;
    ui({
      type: "stream_event",
      event: e.event,
      parent_tool_use_id: null,
      ...e.ttftMs !== void 0 && {
        ttft_ms: e.ttftMs
      }
    });
  } catch (i) {
    d(i);
  }
}

function h() {
  if (!Ts()) return;
  uC(), ber();
}

var x = u({
  status_category: o(),
  status_detail: o(),
  needs_action: o(),
  recent_action: o().optional(),
  description: o().optional(),
  reply: o().optional()
});

function T(e) {
  return i => {
    let s = i.toolPermissionContext;
    if (typeof e.permission_mode === "string") {
      let p = xC(e.permission_mode);
      if (R8e(p), p === "bypassPermissions" && (ik() || !s.isBypassPermissionsModeAvailable)) t("[externalMetadataToAppState] Refusing restored mode 'bypassPermissions' (disabled by settings/policy or session not launched with --dangerously-skip-permissions); falling back to 'default'", {
        level: "warn"
      }), p = "default";
      try {
        if (s = {
          ...MM(s.mode, p, s),
          mode: p
        }, p === "auto") s = D2(s);
      } catch (g) {
        t(`[externalMetadataToAppState] transitionPermissionMode rejected restored mode '${p}': ${j(g).message}`);
      }
    }
    let n = x.safeParse(e.post_turn_summary);
    return {
      ...i,
      toolPermissionContext: s,
      ...typeof e.is_ultraplan_mode === "boolean" && {
        isUltraplanMode: e.is_ultraplan_mode
      },
      ...n.success && {
        postTurnSummary: n.data
      }
    };
  };
}

function F(e) {
  let i = e.session_allow_rules;
  if (!Array.isArray(i)) return n => n;
  if ($h()) return n => n;
  let s = vEs(i.filter(n => typeof n === "string" && !n.startsWith("mcp__")));
  if (s.length === 0) return n => n;
  return n => ({
    ...n,
    toolPermissionContext: {
      ...n.toolPermissionContext,
      alwaysAllowRules: {
        ...n.toolPermissionContext.alwaysAllowRules,
        session: s
      }
    }
  });
}

function hWo(e) {
  return i => T(e.external ?? {})(F(e.internal ?? {})(i));
}

function Hmn({newState: e, oldState: i}, s, n, p, g) {
  let f = i.toolPermissionContext.mode, c = e.toolPermissionContext.mode, y = e.proactivityLevel !== i.proactivityLevel;
  if (f !== c) {
    let r = Ld(f), a = Ld(c);
    if (r !== a) {
      let l = ZLs({
        rule: "first-entry",
        prevMode: f,
        newMode: c,
        prevUltraplan: i.isUltraplanMode,
        newUltraplan: e.isUltraplanMode
      }), m = l.is_ultraplan_mode;
      if (n?.notifyMetadataChanged(l), n?.isWorkerPermissionModeRecordEnabled) n.notifyInternalMetadataChanged({
        worker_permission_mode: a
      });
      if (q$e(c, m), !n) T7e({
        status: null,
        permissionMode: a
      });
    }
    n?.notifyPermissionModeChanged(c);
  } else if (y) n?.notifyProactivityLevelChanged();
  if (f !== c || y) {
    if (iP("--permission-mode", [ "--inherit-permission-mode" ], w3(c, e.proactivityLevel, rO(e.toolPermissionContext)), void 0, p), 
    y) iP("--proactivity", [], e.proactivityLevel, void 0, p);
  }
  if (e.toolPermissionContext !== i.toolPermissionContext) $Ts();
  if (e.toolPermissionContext.additionalWorkingDirectories !== i.toolPermissionContext.additionalWorkingDirectories && Ubn(e.toolPermissionContext)) import("./chunk-89c96hkc.js").then(r => r.mcpClientModule().notifyMcpRootsListChanged()).catch(r => {
    t(`Failed to notify MCP servers of roots change: ${j(r).message}`);
  });
  if (e.tasks !== i.tasks) {
    if (n) {
      let l = {}, m = C(e);
      if (!A(C(i), m)) l.running_background_tasks = m;
      if (SZe()) {
        let v = P(e);
        if (!A(P(i), v)) l.running_foreground_agents = v;
      }
      if (Object.keys(l).length > 0) n.notifyInternalMetadataChanged(l);
    }
    let r = _(i), a = _(e);
    if (r.length !== a.length || a.some((l, m) => l.task_id !== r[m]?.task_id || l.description !== r[m]?.description || l.parent_task_id !== r[m]?.parent_task_id || l.ambient !== r[m]?.ambient || l.awaited !== r[m]?.awaited)) ui({
      type: "system",
      subtype: "background_tasks_changed",
      tasks: a
    });
  }
  let L = i.toolPermissionContext.alwaysAllowRules.session, M = e.toolPermissionContext.alwaysAllowRules.session;
  if (L !== M) {
    let r = M?.filter(a => !a.startsWith("mcp__"));
    n?.notifyInternalMetadataChanged({
      session_allow_rules: r?.length ? r : null
    });
  }
  if (e.mainLoopModel !== i.mainLoopModel || e.mainLoopModelForSession !== i.mainLoopModelForSession || e.toolPermissionContext.mode !== i.toolPermissionContext.mode) {
    let r = bis(s);
    try {
      let a = Qw(i), l = Qw(e);
      if (a !== l) {
        if (Gct([ "seven_day_overage_included" ]), e.mainLoopModel !== i.mainLoopModel || e.mainLoopModelForSession !== i.mainLoopModelForSession) Ves(s.host, a, l);
        if (!Fn()) Keo(s, {
          fromModel: a,
          toModel: l,
          requestedModel: r.requestedModel,
          source: r.source
        });
        vks(l);
      }
    } catch (a) {
      d(j(a));
    }
  }
  if (e.mainLoopModel !== i.mainLoopModel) {
    let r = e.mainLoopModel, a = qhn(() => Pp(r)), l = Qe();
    try {
      Tue(l);
    } catch (m) {
      d(j(m));
    }
    Vne(l, e), Q2e(), HIn(s.precompute), Yhn(p, g, a), n?.notifyMetadataChanged({
      model: r ?? Il()
    }), iP("--model", [ "-m" ], r, void 0, p);
  }
  if (e.fotwClaim?.phase === "granted" && i.fotwClaim?.phase !== "granted") Q2e();
  if (!use(e.sessionEffort, i.sessionEffort) || e.settingsEffortTable !== i.settingsEffortTable) kdn({
    sessionEffort: e.sessionEffort,
    settingsEffortTable: e.settingsEffortTable
  });
  if (!use(e.sessionEffort, i.sessionEffort)) {
    LBn();
    let r = n?.ultracodeActivePatch(ch(e.ultracode, Qe()));
    n?.notifyMetadataChanged({
      effort_level: Cks(e.sessionEffort),
      ...r
    }), Vne(Qe(), e);
    let a = e.sessionEffort;
    if (a.kind !== "level") iP("--effort", [], null, void 0, p); else if (typeof a.value === "string" && Zb(a.value)) iP("--effort", [], a.value, void 0, p);
  }
  if (e.fastMode !== i.fastMode) D(e.fastMode === !0, p);
  if (e.mainLoopModelForSession !== i.mainLoopModelForSession) {
    let r = Qe();
    try {
      Tue(r);
    } catch (a) {
      d(j(a));
    }
    if (Vne(r, e), H3e() && (e.mainLoopModelForSession === null || e.mainLoopModelForSession === void 0) && i.mainLoopModelForSession !== null && i.mainLoopModelForSession !== void 0 && e.mainLoopModel === i.mainLoopModel) Pp(e.mainLoopModel), 
    n?.notifyMetadataChanged({
      model: e.mainLoopModel ?? Il()
    });
  }
  if (e.advisorModel !== i.advisorModel) iP("--advisor", [], e.advisorModel ?? null, void 0, p);
  if (n && e.frameUrls !== i.frameUrls && KSe()) {
    let r = eH(e.frameUrls).map(([, a]) => a);
    if (r.length > 0 || eH(i.frameUrls).length > 0) n.notifyMetadataChanged({
      artifacts: r.length === 0 ? null : r.map(dHn)
    });
  }
  if (n && !B(e.activeGoal, i.activeGoal)) {
    let r = e.activeGoal;
    if (n.notifyActiveGoalChanged(r), r) {
      let {tokens_at_start: a, ...l} = _Ur(r);
      n.notifyMetadataChanged({
        goal: {
          ...l,
          last_reason: l.last_reason ?? null,
          met: !1
        }
      });
    } else n.notifyMetadataChanged({
      goal: null
    });
  }
  if (n && (e.autoCompactWindow !== i.autoCompactWindow || e.mainLoopModel !== i.mainLoopModel || e.mainLoopModelForSession !== i.mainLoopModelForSession || e.settings !== i.settings)) n.notifyAutocompactInputsChanged();
  if (e.verbose !== i.verbose) mK("verbose", e.verbose, p);
  if (e.settings !== i.settings) {
    try {
      if (fpt(), die(), gpt(), WDt(), e.settings.env !== i.settings.env) h();
    } catch (r) {
      t(`Failed to apply settings change (clear auth caches / re-apply env): ${j(r).message}`, {
        level: "error"
      });
    }
    if (e.settings.outputStyle !== i.settings.outputStyle) kI("output_style");
  }
  if (e.ultracode !== i.ultracode || e.mainLoopModel !== i.mainLoopModel || e.mainLoopModelForSession !== i.mainLoopModelForSession || e.settings !== i.settings) {
    let r = ch(e.ultracode, Qe());
    n?.notifyUltracodeActive(r), nkt({
      ultracodeActive: r
    });
  }
}

function I(e, i) {
  if (e.type !== "local_bash" && e.type !== "monitor_mcp" && e.type !== "monitor_ws") return !1;
  let s = e.agentId !== void 0 ? i[e.agentId] : void 0;
  return s !== void 0 && Uu(s);
}

function b(e) {
  return {
    agent_type: e.agentType,
    ...e.selectedAgent && {
      is_built_in: e.selectedAgent.source === "built-in"
    },
    forked_skill: e.forkedSkillName !== void 0,
    main_thread_spawned: e.spawnDepth === 1 && e.parentAgentId === void 0,
    default_launch: e.cwd === void 0 && e.launchedWithDefaults === !0
  };
}

function C(e) {
  return Object.values(e.tasks).filter(i => rh(i) && !Uu(i) && (i.type === "local_bash" || i.type === "monitor_mcp" || i.type === "monitor_ws" || i.type === "local_agent" || i.type === "local_workflow")).map(i => ({
    task_id: i.id,
    task_type: i.type,
    description: i.description,
    ...(i.type === "local_bash" || i.type === "monitor_mcp" || i.type === "monitor_ws") && i.agentId !== void 0 && {
      owner_agent_id: i.agentId
    },
    ...i.type === "local_bash" && i.kind !== void 0 && {
      shell_kind: i.kind
    },
    ...i.type === "monitor_ws" && i.ambient && {
      ambient: !0
    },
    ...i.type === "local_agent" && b(i),
    ...I(i, e.tasks) && {
      observer_owned: !0
    }
  }));
}

function A(e, i) {
  return e.length === i.length && i.every((s, n) => s.task_id === e[n]?.task_id);
}

function P(e) {
  return Object.values(e.tasks).flatMap(i => i.type === "local_agent" && i.status === "running" && i.isBackgrounded === !1 && i.directCall === !0 && i.toolUseId !== void 0 && i.spawnDepth === 1 && i.parentAgentId === void 0 ? [ {
    task_id: i.id,
    task_type: i.type,
    description: i.description,
    tool_use_id: i.toolUseId,
    ...b(i)
  } ] : []);
}

var R = [ "condition", "setAt", "iterations", "tokensAtStart", "lastReason" ];

function _Ur(e) {
  return {
    condition: e.condition,
    iterations: e.iterations,
    set_at: e.setAt,
    tokens_at_start: e.tokensAtStart,
    ...e.lastReason !== void 0 && {
      last_reason: e.lastReason
    }
  };
}

function B(e, i) {
  if (e === i) return !0;
  if (e === void 0 || i === void 0) return !1;
  return R.every(s => e[s] === i[s]);
}

function _(e) {
  return Object.values(e.tasks).filter(i => rh(i) && !Uu(i)).map(i => ({
    task_id: i.id,
    run_id: j1(i.id),
    task_type: i.type,
    subagent_type: WCt(i),
    description: i.description,
    parent_task_id: omr(i, e.tasks),
    ...Q3(i) && {
      ambient: !0
    },
    ...smr(i) && {
      awaited: !0
    }
  }));
}

function D(e, i) {
  if (!e && (!Cg(Qe()) || NP(Qe()) !== null || BPs())) return;
  BEn(e, i);
}

function u1t(e) {
  ui({
    type: "system",
    subtype: "background_tasks_changed",
    tasks: _(e)
  });
}

function yWo(e, i, s) {
  e.settleUltracodeActive(ch(i, Qe()), s);
}

export { yUr, c1t, T7e, gWo, hWo, Hmn, _Ur, u1t, yWo };
