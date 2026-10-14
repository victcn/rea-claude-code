// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ve, mx, ocn, x$, Sq, _L, Dy } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { _, t } from "./chunk-kawq2919.js";

import { p } from "./chunk-jkzenvsk.js";

import { Tt, Jt } from "./chunk-9tdwgnpn.js";

import { Et, iU } from "./chunk-xywp7esx.js";

import { Ld, xC } from "./chunk-q6wab2jw.js";

import { bU, j2n } from "./chunk-3kb22va7.js";

import { Ab, ql, jd, lsn } from "./chunk-sfvypv11.js";

import { gt, UF } from "./chunk-yebkpv3k.js";

import { es } from "./chunk-e937g4pd.js";

import { hy, Ggo, aE, n6e } from "./chunk-km6d4a9r.js";

import { na } from "./chunk-nfw0a30b.js";

import { bw, dQt, cQt } from "./chunk-pegykqwq.js";

import { ioe } from "./chunk-7xj6dhxv.js";

import { Pkt, grt, V2, Oh } from "./chunk-84yp45y8.js";

import { Hp } from "./chunk-bkx9v5fh.js";

import { Zk, Yo } from "./chunk-sn25q2cq.js";

import { q_r } from "./chunk-14xmsjdg.js";

import { ik } from "./chunk-2mq45myc.js";

import { Tu } from "./chunk-dq67x9kz.js";

import { o, M, T, u, De, U } from "./chunk-cvcg6n1z.js";

function O(r, e) {
  for (let n of Object.values(e.tasks)) if (Hp(n) && n.identity.agentName === r) return n.id;
  return;
}

function I(r, e, n) {
  e.update(r, a => ({
    ...a,
    awaitingPlanApproval: n !== null,
    pendingPlanApproval: n ? {
      requestId: n.requestId,
      answered: !1
    } : void 0
  }));
}

function o8o(r, e, n, a) {
  let s = n.get(r);
  if (!s || !Hp(s) || !s.awaitingPlanApproval) return null;
  switch (dQt(s.pendingPlanApproval, e)) {
   case "mismatch":
    return t(`[InProcessTeammate] Plan approval response ${_(e.requestId)} does not name the pending plan request ${_(s.pendingPlanApproval?.requestId)}; resolving the wait as a rejection`, {
      level: "warn"
    }), f("plan_approval", "request_binding_mismatch"), I(r, n, null), cQt(e);

   case "unbound":
    f("plan_approval", "verdict_unbound");
    break;

   case "bound":
    g("plan_approval");
    break;

   case "already_answered":
    return null;
  }
  if (!e.approved) return I(r, n, null), e;
  let P = z(e.permissionMode);
  return n.update(r, d => ({
    ...d,
    awaitingPlanApproval: !1,
    pendingPlanApproval: void 0,
    permissionMode: P
  })), q_r(s.identity.teamName, s.identity.agentName, P, a), e;
}

function z(r) {
  let e = Ld(xC(r ?? "default"));
  if (e === "bypassPermissions" && ik()) return "default";
  if (e === "auto" && !Oh()) return "default";
  return e;
}

class A extends Error {
  constructor(r) {
    super(r);
    this.name = "PlanPreconditionError";
  }
}

function Tvn(r) {
  if (!r || iU() !== "default") return "";
  return `\n\nIf this plan can be broken down into multiple independent tasks, consider spawning named teammates with the ${gt} tool (pass a \`name\`) to parallelize the work.`;
}

var N = `Use this tool when you are in plan mode and have finished writing your plan to the plan file and are ready for user approval.\n\n## How This Tool Works\n- You should have already written your plan to the plan file specified in the plan mode system message\n- This tool does NOT take the plan content as a parameter - it will read the plan from the file you wrote\n- This tool simply signals that you're done planning and ready for the user to review and approve\n- The user will see the contents of your plan file when they review it\n\n## When to Use This Tool\nIMPORTANT: Only use this tool when the task requires planning the implementation steps of a task that requires writing code. For research tasks where you're gathering information, searching files, reading files or in general trying to understand the codebase - do NOT use this tool.\n\n## Before Using This Tool\nEnsure your plan is complete and unambiguous:\n- If you have unresolved questions about requirements or approach, use ${Yo} first (in earlier phases)\n- Once your plan is finalized, use THIS tool to request approval\n\n**Important:** Do NOT use ${Yo} to ask "Is this plan okay?" or "Should I proceed?" - that's exactly what THIS tool does. ExitPlanMode inherently requests user approval of your plan.\n\n## Examples\n\n1. Initial task: "Search for and understand the implementation of vim mode in the codebase" - Do not use the exit plan mode tool because you are not planning the implementation steps of a task.\n2. Initial task: "Help me implement yank mode for vim" - Use the exit plan mode tool after you have finished planning the implementation steps of the task.\n3. Initial task: "Add a new feature to handle user authentication" - If unsure about auth method (OAuth, JWT, etc.), use ${Yo} first, then use exit plan mode tool after clarifying the approach.\n`;

var q = p(() => u({
  tool: U([ "Bash" ]).describe("The tool this prompt applies to"),
  prompt: o().describe('Semantic description of the action, e.g. "run tests", "install dependencies"')
})), R = p(() => De({
  allowedPrompts: T(q()).optional().describe("Deprecated: no longer used.")
}).passthrough()), Me = p(() => R().extend({
  plan: o().optional().describe("The plan content (injected by normalizeToolInput from disk)"),
  planFilePath: o().optional().describe("The plan file path (injected by normalizeToolInput)")
})), j = p(() => u({
  plan: o().nullable().describe("The plan that was presented to the user"),
  isAgent: M(),
  filePath: o().optional().describe("The file path where the plan was saved"),
  hasTaskTool: M().optional().describe("Whether the Agent tool is available in the current context"),
  planWasEdited: M().optional().describe("True when the user edited the plan (CCR web UI or Ctrl+G); determines whether the plan is echoed back in tool_result"),
  awaitingLeaderApproval: M().optional().describe("When true, the teammate has sent a plan approval request to the team leader"),
  requestId: o().optional().describe("Unique identifier for the plan approval request")
})), s4 = Jt({
  name: Tu,
  searchHint: "present plan for approval and start coding (plan mode only)",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return "Prompts the user to exit plan mode and start coding";
  },
  async prompt() {
    return N;
  },
  get inputSchema() {
    return R();
  },
  get outputSchema() {
    return j();
  },
  userFacingName() {
    return "";
  },
  shouldDefer: !0,
  isEnabled() {
    if (Dy().length > 0 && ve()) return !1;
    if (ve() && !Pkt(mx())) return !1;
    return !0;
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !1;
  },
  requiresUserInteraction() {
    if (jd()) return !1;
    return !0;
  },
  renderToolUseMessage() {
    return null;
  },
  create(r) {
    return {
      async validateInput(e) {
        let n = r;
        if (n.agentContext.agentType === "subagent" && n.agentContext.isBuiltIn === !0 && n.agentContext.subagentName === UF && (jd() || n.permissions().mode === "plan")) return {
          result: !1,
          message: "A fork cannot exit plan mode; that belongs to the session that forked it. Finish your part and report back.",
          errorCode: 2
        };
        if (jd()) return {
          result: !0
        };
        let s = n.permissions().mode;
        if (s !== "plan") return i("tengu_exit_plan_mode_called_outside_plan", {
          model: Et(n.mainLoopModel()),
          mode: c(s),
          hasExitedPlanModeInSession: ocn()
        }), {
          result: !1,
          message: `You are not in plan mode. To enter plan mode, call the ${Zk} tool first. If your plan was already approved, continue with implementation.`,
          errorCode: 1
        };
        return {
          result: !0
        };
      },
      async checkPermissions(e) {
        if (jd()) return {
          behavior: "allow",
          updatedInput: V2(Tu, e)
        };
        return {
          behavior: "ask",
          message: "Exit plan mode?",
          updatedInput: e
        };
      },
      async call(e, {onProgress: n}) {
        let a = r, s = null, m = null;
        [s, m] = await Promise.all([ import("./chunk-dbyyfp95.js"), import("./chunk-yn7kcbe7.js") ]);
        let P = !!a.agentId, d = aE(a.agentId), b = "plan" in e && typeof e.plan === "string" ? e.plan : void 0;
        hy(d);
        let w = b ?? await n6e(a.agentId, a.storageV5);
        if (b !== void 0 && d) await Ggo(d, b, a.storageV5), grt(a.storageV5);
        if (jd() && lsn()) {
          if (!w) throw new A(`No plan file found at ${d}. Please write your plan to this file before calling ExitPlanMode.`);
          let l = Ab() || "unknown", y = ql(), v = j2n("plan_approval", bU(l, y || "default")), k = {
            type: "plan_approval_request",
            from: l,
            timestamp: (new Date).toISOString(),
            planFilePath: d,
            planContent: w,
            requestId: v
          };
          if (await bw("team-lead", {
            from: l,
            text: _(k),
            timestamp: (new Date).toISOString()
          }, y, a.storageV5) === void 0) throw new A("Failed to write the plan approval request to the lead's inbox \u2014 plan not submitted; try again");
          let E = O(l, {
            tasks: a.tasks() ?? {}
          });
          if (E) I(E, a.taskRegistry, {
            requestId: v
          }); else na().swarmPermissions.pendingPlanApproval = {
            requestId: v,
            answered: !1
          };
          return {
            data: {
              plan: w,
              isAgent: !0,
              filePath: d,
              awaitingLeaderApproval: !0,
              requestId: v
            }
          };
        }
        let x = null;
        {
          let l = a.permissions().prePlanMode ?? "default";
          if (l === "auto" && !(m?.isAutoModeGateEnabled() ?? !1)) {
            let y = m?.getAutoModeUnavailableReason() ?? "circuit-breaker";
            x = m?.getAutoModeUnavailableNotification(y) ?? "auto mode unavailable", t(`[auto-mode gate @ ExitPlanModeV2Tool] prePlanMode=${l} but gate is off (reason=${y}) \u2014 falling back to default on plan exit`, {
              level: "warn"
            });
          }
        }
        if (x) n?.({
          type: "notification",
          notification: {
            key: "auto-mode-gate-plan-exit-fallback",
            text: `plan exit \u2192 default \xb7 ${x}`,
            priority: "immediate",
            color: "warning",
            timeoutMs: 1e4
          }
        });
        let S = a.permissions();
        if (S.mode === "plan") {
          x$(!0), Sq(!0);
          let l = S.prePlanMode ?? "default";
          {
            if (l === "auto" && !(m?.isAutoModeGateEnabled() ?? !1)) l = "default";
            let k = l === "auto", h = s?.isAutoModeActive() ?? !1;
            if (s?.setAutoModeActive(k), h && !k) _L(!0);
          }
          ioe({
            from: "plan",
            to: l,
            trigger: "exit_plan_mode"
          });
          let y = l === "auto", v = S.strippedDangerousRules;
          a.setToolPermissionContext(k => {
            let h = k;
            if (y) h = m?.stripDangerousPermissionsForAutoMode(h) ?? h; else if (v) h = m?.restoreDangerousPermissions(h) ?? h;
            return {
              ...h,
              mode: l,
              prePlanMode: void 0
            };
          });
        }
        let C = es() && a.tools.some(l => Tt(l, gt));
        return {
          data: {
            plan: w,
            isAgent: P,
            filePath: d,
            hasTaskTool: C || void 0,
            planWasEdited: b !== void 0 || void 0
          }
        };
      }
    };
  },
  mapToolResultToToolResultBlockParam({isAgent: r, plan: e, filePath: n, hasTaskTool: a, planWasEdited: s, awaitingLeaderApproval: m, requestId: P}, d) {
    if (m) return {
      type: "tool_result",
      content: `Your plan has been submitted to the team lead for approval.\n\nPlan file: ${n}\n\n**What happens next:**\n1. Wait for the team lead to review your plan\n2. You will receive a message in your inbox with approval/rejection\n3. If approved, you can proceed with implementation\n4. If rejected, refine your plan based on the feedback\n\n**Important:** Do NOT proceed until you receive approval. Check your inbox for response.\n\nRequest ID: ${P}`,
      tool_use_id: d
    };
    if (r) return {
      type: "tool_result",
      content: 'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"',
      tool_use_id: d
    };
    if (!e || e.trim() === "") return {
      type: "tool_result",
      content: "User has approved exiting plan mode. You can now proceed.",
      tool_use_id: d
    };
    let b = Tvn(Boolean(a));
    return {
      type: "tool_result",
      content: `User has approved your plan. You can now start coding. Start with updating your todo list if applicable\n\nYour plan has been saved to: ${n}\nYou can refer back to it if needed during implementation.${b}\n\n## ${s ? "Approved Plan (edited by user)" : "Approved Plan"}:\n${e}`,
      tool_use_id: d
    };
  }
});

export { o8o, Tvn, s4 };
