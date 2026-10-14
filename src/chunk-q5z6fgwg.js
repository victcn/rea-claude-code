// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q, Of, rcn } from "./chunk-3pqddg8f.js";

import { p } from "./chunk-jkzenvsk.js";

import { BM } from "./chunk-84yp45y8.js";

import { cn, lg } from "./chunk-kawq2919.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { Bl } from "./chunk-cqgvwwgb.js";

import { ut } from "./chunk-yxennhe9.js";

import { Ld, Kfe } from "./chunk-q6wab2jw.js";

import { vi } from "./chunk-jnzpsr0d.js";

import { er } from "./chunk-dd98x6x7.js";

import { Qe, Ke, qzn, Vu, Si, Tl } from "./chunk-xywp7esx.js";

import { c_ } from "./chunk-hmce8a0s.js";

import { uz, mb, rk, nT } from "./chunk-4v78v8fd.js";

import { on } from "./chunk-b47tzzqx.js";

import { IEs } from "./chunk-4jjt8sdp.js";

import { gt, _p } from "./chunk-yebkpv3k.js";

import { Kao } from "./chunk-sqb9meyh.js";

import { _r, YCs } from "./chunk-35kwehd0.js";

import { zf } from "./chunk-xmqqa853.js";

import { RZe } from "./chunk-p8ytwtyx.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import { O } from "./chunk-1xnsr4dy.js";

import { randomUUID as g } from "crypto";

var c = 6, l = 32, f = p(() => u({
  text: o().optional()
}));

function _(e) {
  let r = f().safeParse(e);
  if (!r.success || r.data.text === void 0) return null;
  let i = m(r.data.text);
  return i.length > 0 ? i : null;
}

function GWr(e, r, i) {
  let s = IEs("footer_indicator_", Ke(r), r);
  for (let n of [ e, s ]) if (n !== void 0) {
    let t = m(n);
    if (t.length > 0) return t;
  }
  return _(i);
}

function JJn() {
  let e = GWr(a.CLAUDE_CODE_FOOTER_INDICATOR, Qe(), Tl()?.footer_indicator);
  return e === null ? void 0 : {
    text: e
  };
}

function m(e) {
  let r = lg(cn(e)).replace(/[\x00-\x1f\x7f-\x9f]/g, "").trim();
  return ut(ne(r, l), c);
}

function sWt(e) {
  return e === gt ? _p : e;
}

var VWr = "interrupt_receipt_v1", KWr = "msg_lifecycle_v1", y = "request_marker_lists_v1", I = "interrupt_cancel_queued_v1", S = "interrupt_send_now_v1", bKo = "task_list_restore_v1", SKo = "task_list_restored_v1";

var wKo = "mcp_read_resource_v1", vKo = "mcp_tool_ui_meta_v1", qWr = "ui_surface_v1", EKo = "prompts_screened_v1", YWr = "ui_hooked_v1", kKo = [ VWr, I, S, KWr, y ];

function QJn(e) {
  let r = Kfe(e.manifest.version);
  return {
    name: e.name,
    path: e.path,
    source: e.source,
    ...r && {
      version: r
    }
  };
}

function iWt() {
  let e = er(), r;
  if (Vu()) {
    if (r = {
      auto: Si()
    }, uz()) r.team = mb();
  }
  let i;
  i = import.meta.require("./chunk-p13xqv7k.js").getUdsMessagingSocketPath();
  let s = q();
  return {
    cwd: Bl() ?? "",
    sessionId: s,
    apiKeySource: qzn(),
    betas: Of(),
    outputStyle: e?.outputStyle ?? BM,
    analyticsDisabled: c_(),
    productFeedbackDisabled: !on("allow_product_feedback"),
    memoryPaths: r,
    scratchpadPath: rk() ? nT(s) ?? void 0 : void 0,
    messagingSocketPath: i,
    workerEpoch: zf() ? a.CLAUDE_CODE_WORKER_EPOCH : void 0,
    powerShellPath: O() === "windows" ? Kao() : void 0,
    footerIndicator: JJn()
  };
}

function xyn() {
  let e = iWt();
  return {
    cwd: rcn()?.directory?.path ?? "",
    sessionId: e.sessionId,
    apiKeySource: e.apiKeySource,
    betas: void 0,
    outputStyle: e.outputStyle,
    analyticsDisabled: e.analyticsDisabled,
    productFeedbackDisabled: e.productFeedbackDisabled,
    memoryPaths: void 0,
    scratchpadPath: void 0,
    messagingSocketPath: void 0,
    workerEpoch: e.workerEpoch,
    powerShellPath: void 0,
    footerIndicator: void 0
  };
}

function CZe(e) {
  let r = new Set(e.mcpClients.map(t => t.name)), i = e.mcpServerErrors.filter(t => !r.has(t.name)), s = e.commands.filter(t => t.userInvocable !== !1 && t.terminalOriented === !0).map(t => t.name), n = {
    type: "system",
    subtype: "init",
    cwd: e.cwd,
    session_id: e.sessionId,
    tools: e.tools.map(t => sWt(t.name)),
    mcp_servers: e.mcpClients.map(t => ({
      name: t.name,
      status: RZe(t.type),
      ...t.source !== void 0 && {
        source: t.source
      }
    })),
    model: e.model,
    permissionMode: Ld(e.permissionMode),
    slash_commands: e.commands.filter(t => t.userInvocable !== !1).map(t => t.name),
    ...s.length > 0 && {
      terminal_slash_commands: s
    },
    apiKeySource: e.apiKeySource,
    betas: e.betas,
    claude_code_version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION,
    output_style: e.outputStyle,
    agents: e.agents.map(t => t.agentType),
    skills: vi(e.skills, "name").filter(t => t.userInvocable !== !1).map(t => t.name),
    plugins: e.plugins.map(QJn),
    ...e.pluginErrors.length > 0 && {
      plugin_errors: e.pluginErrors.map(t => ({
        ...t
      }))
    },
    ...e.pluginWarnings.length > 0 && {
      plugin_warnings: e.pluginWarnings.map(t => ({
        ...t
      }))
    },
    ...e.capabilities && {
      capabilities: [ ...e.capabilities ]
    },
    ...i.length > 0 && {
      mcp_server_errors: i.map(t => ({
        ...t
      }))
    },
    analytics_disabled: e.analyticsDisabled,
    product_feedback_disabled: e.productFeedbackDisabled,
    uuid: g()
  };
  if (e.memoryPaths) n.memory_paths = {
    ...e.memoryPaths
  };
  if (e.scratchpadPath !== void 0) n.scratchpad_path = e.scratchpadPath;
  if (e.workerEpoch !== void 0 && e.workerEpoch >= 1) n.worker_epoch = e.workerEpoch;
  if (e.messagingSocketPath !== void 0) n.messaging_socket_path = e.messagingSocketPath;
  if (n.fast_mode_state = e.fastModeState, n.fast_mode_disabled_reason = e.fastModeDisabledReason, 
  e.footerIndicator) n.footer_indicator = {
    ...e.footerIndicator
  };
  if (e.effort !== void 0) n.effort = e.effort;
  if (e.perTurnEffortActive !== void 0) n.per_turn_effort_active = e.perTurnEffortActive;
  if (e.viewMode !== void 0) n.view_mode = e.viewMode;
  if (e.powerShellPath !== void 0) n.powershell_path = e.powerShellPath;
  return n;
}

function Pyn(e, r) {
  _r("init_emit_ms", performance.now() - r, r);
  let i = YCs();
  if (i) e.startup_timing = i;
}

export { GWr, JJn, sWt, VWr, KWr, bKo, SKo, wKo, vKo, qWr, EKo, YWr, kKo, QJn, iWt, xyn, CZe, Pyn };
