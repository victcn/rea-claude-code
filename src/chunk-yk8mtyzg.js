// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q } from "./chunk-3pqddg8f.js";

import { Ve, Mr, l } from "./chunk-b0z4bv3v.js";

import { Ht, We } from "./chunk-nvtwm272.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Y, t } from "./chunk-kawq2919.js";

import { p } from "./chunk-jkzenvsk.js";

import { wn, Bi, tHs, QTo, x8e, BH } from "./chunk-s2t7g8m9.js";

import { rg, Yfe } from "./chunk-jnzpsr0d.js";

import { Bgt } from "./chunk-6ah1819r.js";

import { qpe, Vh, fie } from "./chunk-xywp7esx.js";

import { kt } from "./chunk-r2h53bm2.js";

import { ao } from "./chunk-w0q7jqcp.js";

import { Lc } from "./chunk-ejckqh3m.js";

import { Xt } from "./chunk-q6wab2jw.js";

import { o, v, T, u, U, A } from "./chunk-cvcg6n1z.js";

import { Af, YXe, jee, jU } from "./chunk-e96bxrcx.js";

var pTr = 32;

function Mse(e) {
  if (!Array.isArray(e)) return [];
  return e.filter(r => typeof r === "string" && r.length > 0 && r.length <= 64).slice(0, 32);
}

function hHt(e) {
  if (e === null || typeof e !== "object") return e;
  let r = e;
  if (de(r), "response" in r && r.response !== null && typeof r.response === "object") de(r.response);
  return e;
}

function de(e) {
  if ("requestId" in e && !("request_id" in e)) {
    let r = z(e);
    if (delete e.requestId, r !== void 0) e.request_id = r;
  }
}

function z(e) {
  if ("request_id" in e) return e.request_id;
  let r = "requestId" in e ? e.requestId : void 0;
  return typeof r === "string" && r.toLowerCase().startsWith("late-bind-") ? void 0 : r;
}

import { randomUUID as M } from "crypto";

var lTr = 8e3;

async function pe({verdict: e, deadlineMs: r, respond: n, inform: s}) {
  let d = b => {
    if (Array.isArray(b)) s(b.filter(x => typeof x === "string").map(Xt));
  }, h = e.then(b => b ?? {
    ok: !0
  }), I;
  try {
    I = await We(h, r);
  } catch (b) {
    return t(`set_model verdict rejected: ${l(b)}`, {
      level: "error"
    }), n({
      subtype: "error",
      error: "set_model failed"
    });
  }
  if (I === void 0) return h.then(b => d(b.ok ? [ ...Array.isArray(b.notices) ? b.notices : [], "The pending model switch was applied" ] : ue(b.error)), b => {
    t(`set_model verdict rejected after the deadline reply: ${l(b)}`, {
      level: "error"
    }), d([ "The pending model switch failed" ]);
  }), n({
    subtype: "error",
    error: "This model switch is still pending (an earlier model request or a PreModelSwitch hook has not finished); it will apply when that completes unless it is refused"
  });
  if (I.ok) {
    if (I.notices) d(I.notices);
    return n({
      subtype: "success"
    });
  }
  let k = I.code, y = QTo.find(b => b === k);
  return n({
    subtype: "error",
    error: ue(I.error).map(Xt).join(`\n`),
    ...y !== void 0 && {
      error_code: y
    }
  });
}

function ue(e) {
  return typeof e === "string" ? e.split(`\n`) : [ "" ];
}

function dTr(e) {
  if (e == null || e === "") return {
    valid: !0,
    toolUseId: void 0
  };
  if (typeof e === "string") return {
    valid: !0,
    toolUseId: e
  };
  return {
    valid: !1
  };
}

var cTr = "Background tasks are disabled in this session.", uTr = "background_tasks: tool_use_id must be a string";

function yHt(e) {
  return we().safeParse(e).success;
}

var we = p(() => u({
  max_thinking_tokens: v().refine(e => Number.isInteger(e)).nullable().optional(),
  thinking_display: U(x8e).nullable().optional()
})), fTr = `set_max_thinking_tokens: max_thinking_tokens must be an integer or null and thinking_display must be ${x8e.map(e => `"${e}"`).join(", ")}, or null`;

var ewo = "display_only";

function mTr(e) {
  return (e.type === "user" || e.type === "assistant" || e.type === "system") && e.historical === !0 && e.display_only === !0;
}

function gTr(e) {
  return e !== null && typeof e === "object" && "type" in e && typeof e.type === "string";
}

function xe(e) {
  return e !== null && typeof e === "object" && "type" in e && e.type === "control_response" && "response" in e && e.response != null;
}

function Ne(e) {
  return e !== null && typeof e === "object" && "type" in e && e.type === "control_request" && "request_id" in e && "request" in e && e.request != null;
}

function xRs(e) {
  ao().bridgeStateFramesGate = e;
}

function Hse(e) {
  if ((e.type === "user" || e.type === "assistant") && e.isVirtual) return !1;
  if (e.type === "attachment") {
    if (e.attachment.type === "hook_system_message") return !0;
    if (e.attachment.type === "tool_host_result_lines") return !0;
    return e.attachment.type === "queued_command" && e.attachment.commandMode === "prompt" && !e.attachment.isMeta && Vh(e.attachment.origin);
  }
  return e.type === "user" || e.type === "assistant" || e.type === "system" && (e.subtype === "local_command" || e.subtype === "model_consent_fallback" || e.subtype === "compact_boundary" && (ao().bridgeStateFramesGate?.() ?? !0));
}

function Ntn(e) {
  return e.type === "user" && !e.isCompactSummary && !tHs(e);
}

function hTr(e) {
  return e.type === "attachment" || e.type === "system" && e.subtype === "model_consent_fallback";
}

function Cjn(e) {
  return e.type === "conversation_reset" || e.type === "stream_event" || e.type === "system" && e.subtype === "status" || e.subtype === "task_started" || e.subtype === "task_progress" || e.subtype === "task_updated" || e.subtype === "task_notification" || e.subtype === "background_tasks_changed" || e.subtype === "thinking_tokens" || e.subtype === "code_change_published" || e.subtype === "vcs_state_changed" || e.subtype === "file_attachments_missing";
}

function Rjn(e) {
  if (!fie(e)) return;
  let r = e.message.content, n;
  if (typeof r === "string") n = r; else for (let d of r) if (d.type === "text") {
    n = d.text;
    break;
  }
  if (!n) return;
  return Bgt(n) || void 0;
}

function PRs(e, r, n, s, d, h, I, k) {
  try {
    let y = hHt(Y(e));
    if (xe(y)) {
      t("[bridge:repl] Ingress message type=control_response"), d?.(y);
      return;
    }
    if (Ne(y)) {
      t(`[bridge:repl] Inbound control_request subtype=${y.request.subtype}`), h?.(y);
      return;
    }
    if (gTr(y) && y.type === "control_cancel_request" && "request_id" in y && typeof y.request_id === "string") {
      t(`[bridge:repl] Inbound control_cancel_request request_id=${y.request_id}`), I?.(y.request_id);
      return;
    }
    if (Xe(y)) {
      let x = Qe(y.notification);
      if (x === void 0) {
        if (k) t("[bridge:repl] Ingress message type=queued_notification"), k({
          type: "queued_notification",
          notification: y.notification
        }); else t("[bridge:repl] Ignoring queued_notification: host has no notification buffer");
        return;
      }
      t("[bridge:repl] Ingress queued_notification from another session: delivering as its user frame"), 
      y = x;
    }
    if (!gTr(y)) return;
    let b = "uuid" in y && typeof y.uuid === "string" ? y.uuid : void 0;
    if (b && r.has(b)) {
      t(`[bridge:repl] Ignoring echo: type=${y.type} uuid=${b}`);
      return;
    }
    if (b && n.has(b)) {
      t(`[bridge:repl] Ignoring re-delivered inbound: type=${y.type} uuid=${b}`);
      return;
    }
    if (t(`[bridge:repl] Ingress message type=${y.type}${b ? ` uuid=${b}` : ""}`), y.type === "user") {
      if ("isReplay" in y && y.isReplay === !0) {
        t(`[bridge:repl] Ignoring replay echo: uuid=${b ?? "none"}`);
        return;
      }
      if ("parent_tool_use_id" in y && y.parent_tool_use_id != null) {
        t(`[bridge:repl] Ignoring parented user frame at ingress (echo/replay of a subagent frame): uuid=${b}`);
        return;
      }
      if (mTr(y)) {
        t(`[bridge:repl] Ignoring fork display frame at ingress: uuid=${b ?? "none"}`);
        return;
      }
      if (b) n.add(b);
      i("tengu_bridge_message_received", {
        is_repl: !0
      }), g("bridge_message_receive"), s?.(y);
    } else t(`[bridge:repl] Ignoring non-user inbound message: type=${y.type}`);
  } catch (y) {
    t(`[bridge:repl] Failed to parse ingress message: ${l(y)}`), m("bridge_message_receive", "bridge_message_receive_parse_failed");
  }
}

var Pe = new Set([ "effortLevel", "ultracode" ]), Me = 5, Oe = 40, Ue = "This session is outbound-only. Enable Remote Control locally to allow inbound control.", $e = 8e3, H = "get_workspace_diff timed out: the workspace diff is still being computed; retry shortly", two = 66e4, _Ht = "side_question timed out: the host did not answer in time", Fe = "(No answer available for this side question. Try again, or ask in the main conversation.)";

function nwo(e) {
  return e.response !== null && e.synthetic !== !1 ? {
    ...e,
    response: Fe,
    synthetic: !0
  } : e;
}

var Le = p(() => u({
  question: o(),
  history: T(u({
    question: o(),
    response: o(),
    fallback_notice: o().optional()
  })).optional()
})), Ke = "This session is shutting down.", Be = new Set([ "initialize", "file_suggestions", "read_file", "get_workspace_diff", "get_context_usage", "get_usage", "mcp_status" ]);

function _e(e, r) {
  if (r instanceof Mr) return Xt(l(r));
  if (Ve(r)) return Xt(l(r));
  return t(`${e} failed: ${l(r)}`, {
    level: "error"
  }), `${e} failed`;
}

function IRs(e) {
  if (e.type === "connected") return;
  if (e.type === "failed") {
    if (e.error) t(`mcp_reconnect failed: ${e.error}`, {
      level: "error"
    });
    throw new Mr("Connection failed");
  }
  throw new Mr(`Server status: ${e.type}`);
}

function P(e, r, n, s) {
  Q(e, r, n, s.then(d => ({
    subtype: "success",
    response: d ?? {}
  })));
}

function Q(e, r, n, s) {
  s.catch(d => ({
    subtype: "error",
    error: _e(e.request.subtype, d)
  })).then(d => {
    let I = {
      ...d.subtype === "error" ? jU(e.request_id, d.error, "error_code" in d ? d.error_code : void 0) : jee(e.request_id, d.response ?? {}),
      session_id: n
    };
    r(I), t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${d.subtype}`);
  });
}

function ce(e, r) {
  if (r && r.ok === !1) return {
    type: "control_response",
    response: {
      subtype: "error",
      request_id: e,
      error: Xt(r.error)
    }
  };
  return {
    type: "control_response",
    response: {
      subtype: "success",
      request_id: e
    }
  };
}

function ORs(e, r) {
  let {transport: n, sessionId: s, outboundOnly: d, getInitializeState: h, claudeCodeVersion: I, getCommands: k, reportsInboundReadReceipts: y, getPendingPrompts: b, onInterrupt: x, onStopTask: K, onBackgroundTasks: B, onCancelAsyncMessage: N, onDialogKindsDeclared: L, onClientInitialize: R, onSetModel: W, onSetMaxThinkingTokens: ve, onSetPermissionMode: De, onApplyFlagSettings: Z, onRenameSession: Ie, onSetColor: Re, onFileSuggestions: J, onReadFile: ee, onGetWorkspaceDiff: te, onGetContextUsage: re, onMcpAuthenticate: oe, onMcpOauthCallbackUrl: ne, onMcpReconnect: Ae, onMcpSetServers: se, onForkConversation: ie, hasPendingPrompts: qe, onSideQuestion: ae, cancellableRequests: G} = r;
  if (!n) {
    t("[bridge:repl] Cannot respond to control_request: transport not configured");
    return;
  }
  let C = r.writeFrame ?? (a => {
    n.write(a);
  }), _;
  if (wn() && !Be.has(e.request.subtype)) {
    t(`[bridge] refusing ${e.request.subtype}: this process is exiting`), _ = {
      type: "control_response",
      response: {
        subtype: "error",
        request_id: e.request_id,
        error: Ke
      }
    };
    let a = {
      ..._,
      session_id: s
    };
    n.write(a);
    return;
  }
  if (d && e.request.subtype !== "initialize") {
    _ = {
      type: "control_response",
      response: {
        subtype: "error",
        request_id: e.request_id,
        error: Ue
      }
    };
    let a = {
      ..._,
      session_id: s
    };
    n.write(a), t(`[bridge:repl] Rejected ${e.request.subtype} (outbound-only) request_id=${e.request_id}`);
    return;
  }
  let O = r.answerSharedControlRequest?.(e.request);
  if (O instanceof Promise) {
    Q(e, C, s, O);
    return;
  }
  if (O !== void 0) {
    let c = {
      ...O.subtype === "error" ? {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: O.error
        }
      } : {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          ...O.response !== void 0 && {
            response: O.response
          }
        }
      },
      session_id: s
    };
    n.write(c), t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${O.subtype}`);
    return;
  }
  switch (e.request.subtype) {
   case "initialize":
    {
      try {
        let D = Mse(e.request.supportedDialogKinds);
        if (D.length > 0) L?.(D);
      } catch (D) {
        t(`[bridge:repl] dialog-kind capture failed; acking initialize anyway: ${l(D)}`);
      }
      let a = [];
      if (!d) try {
        a = k?.() ?? [];
      } catch (D) {
        m("bridge_initialize_commands", "get_commands_threw"), t(`[bridge:repl] getCommands failed; acking initialize with commands: []: ${l(D)}`);
      }
      let c = b?.() ?? [], S = c.filter(D => D.request.subtype === "can_use_tool"), E = c.filter(D => D.request.subtype === "request_user_dialog");
      _ = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          response: {
            commands: a,
            agents: [],
            output_style: "normal",
            available_output_styles: [ "normal" ],
            models: [],
            account: {},
            pid: process.pid,
            ...I !== void 0 && {
              claude_code_version: I
            },
            ...!d && y?.() === !0 && {
              inbound_read_receipts: !0
            },
            ...h?.()
          },
          pending_permission_requests: S,
          pending_user_dialog_requests: E
        }
      };
      try {
        R?.();
      } catch (D) {
        t(`[bridge:repl] onClientInitialize failed; acking initialize anyway: ${l(D)}`);
      }
      break;
    }

   case "set_model":
    {
      let a = e.request.model;
      if (a != null && typeof a !== "string") {
        m("model_switch", "invalid_model_type"), _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "set_model: model must be a string"
          }
        };
        break;
      }
      let c = e.request.only_if_model_is_current;
      if (c !== void 0 && c !== !1) {
        m("model_switch", "only_if_model_is_current_unserved"), _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "set_model: Remote Control does not implement only_if_model_is_current. The request changed nothing."
          }
        };
        break;
      }
      let S = W?.(e.request.model ?? void 0);
      if (S && "then" in S) {
        pe({
          verdict: S,
          deadlineMs: r.setModelVerdictDeadlineMs ?? lTr,
          respond: E => {
            let Te = {
              ...{
                type: "control_response",
                response: {
                  ...E,
                  request_id: e.request_id
                }
              },
              session_id: s
            };
            C(Te), t(`[bridge:repl] Sent control_response for set_model request_id=${e.request_id} result=${E.subtype}`);
          },
          inform: E => {
            for (let D of E) C({
              type: "system",
              subtype: "informational",
              content: D,
              level: "notice",
              uuid: M(),
              session_id: s
            });
          }
        });
        return;
      }
      if (S && !S.ok) _ = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: Xt(S.error)
        }
      }; else _ = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id
        }
      };
      break;
    }

   case "set_max_thinking_tokens":
    {
      if (!yHt(e.request)) {
        _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: fTr
          }
        };
        break;
      }
      let a = ve?.(e.request.max_thinking_tokens, e.request.thinking_display);
      if (a && "then" in a) {
        let c = e.request_id, S = e.request.subtype;
        a.then(E => ce(c, E), E => ({
          type: "control_response",
          response: {
            subtype: "error",
            request_id: c,
            error: _e(S, E)
          }
        })).then(E => {
          let D = {
            ...E,
            session_id: s
          };
          C(D), t(`[bridge:repl] Sent control_response for set_max_thinking_tokens request_id=${c} result=${E.response.subtype}`);
        });
        return;
      }
      _ = ce(e.request_id, a);
      break;
    }

   case "set_permission_mode":
    {
      let a = rg(e.request.mode), c = a === void 0 ? {
        ok: !1,
        error: Yfe
      } : De?.(a) ?? {
        ok: !1,
        error: "set_permission_mode is not supported in this context (onSetPermissionMode callback not registered)"
      };
      if (c.ok) _ = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id
        }
      }; else _ = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: Xt(c.error)
        }
      };
      break;
    }

   case "rename_session":
    {
      if (typeof e.request.title !== "string") {
        _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "rename_session: title must be a string"
          }
        };
        break;
      }
      let c = Ie?.(e.request.title) ?? {
        ok: !1,
        error: "rename_session is not supported in this context (onRenameSession callback not registered)"
      };
      if (c.ok) _ = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id
        }
      }; else _ = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: Xt(c.error)
        }
      };
      break;
    }

   case "set_color":
    {
      let a = Re?.(e.request.color) ?? {
        ok: !1,
        error: "set_color is not supported in this context (onSetColor callback not registered)"
      };
      if (a.ok) _ = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id
        }
      }; else _ = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: Xt(a.error)
        }
      };
      break;
    }

   case "file_suggestions":
    {
      if (!J) {
        _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "file_suggestions is not supported in this context (onFileSuggestions callback not registered)"
          }
        };
        break;
      }
      P(e, C, s, J(e.request.query).then(a => ({
        suggestions: a
      })));
      return;
    }

   case "read_file":
    {
      if (!ee) {
        _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "read_file is not supported in this context (onReadFile callback not registered)"
          }
        };
        break;
      }
      P(e, C, s, ee(e.request.path, e.request.max_bytes, e.request.encoding, e.request.anchor).then((a => c => ({
        ...c,
        absPath: a
      }))(e.request.path)));
      return;
    }

   case "get_workspace_diff":
    {
      if (!te) {
        _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "get_workspace_diff is not supported in this context (onGetWorkspaceDiff callback not registered)"
          }
        };
        break;
      }
      let a = new AbortController;
      Q(e, C, s, Ht(te(a.signal), $e, H).then(c => ({
        subtype: "success",
        response: c
      }), c => {
        if (a.abort(), l(c) === H) return {
          subtype: "error",
          error: H,
          error_code: "workspace_diff_pending"
        };
        throw c;
      }));
      return;
    }

   case "get_context_usage":
    {
      if (!re) {
        _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "get_context_usage is not supported in this context (onGetContextUsage callback not registered)"
          }
        };
        break;
      }
      P(e, C, s, re({
        detail: e.request.detail
      }).then(a => ({
        ...a,
        memoryFiles: []
      })));
      return;
    }

   case "get_usage":
    _ = {
      type: "control_response",
      response: {
        subtype: "error",
        request_id: e.request_id,
        error: "get_usage is not supported in this context"
      }
    };
    break;

   case "mcp_status":
    _ = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: e.request_id,
        response: {
          mcpServers: []
        }
      }
    };
    break;

   case "mcp_authenticate":
   case "mcp_oauth_callback_url":
   case "mcp_reconnect":
    {
      let a = e.request, {subtype: c, serverName: S} = a, E = a.subtype === "mcp_authenticate" ? oe && (D => oe(D, a.redirectUri)) : a.subtype === "mcp_oauth_callback_url" ? ne && (D => ne(D, a.callbackUrl)) : Ae;
      if (!E) {
        _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: `${c} is not supported in this context (callback not registered)`
          }
        };
        break;
      }
      P(e, C, s, E(S));
      return;
    }

   case "interrupt":
    x?.(), _ = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: e.request_id
      }
    };
    break;

   case "apply_flag_settings":
    {
      let a = je(e.request.settings), c;
      if (!a.ok) c = a; else if (!Z) m("bridge_flag_settings", "not_registered"), c = {
        ok: !1,
        error: "apply_flag_settings is not supported in this context (onApplyFlagSettings callback not registered)"
      }; else c = Z(a.settings);
      if (c.ok) g("bridge_flag_settings"), _ = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id
        }
      }; else _ = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: c.error
        }
      };
      break;
    }

   case "mcp_set_servers":
    {
      let a = e.request.servers, c = "hint" in e.request ? e.request.hint : void 0, S;
      if (a === void 0 && typeof c === "string") t("[bridge:repl] mcp_set_servers carried an advisory hint and no servers; acknowledged, nothing to apply"), 
      S = {
        ok: !0,
        added: [],
        removed: [],
        errors: {},
        unknownServerCount: 0
      }; else if (!ge(a)) S = {
        ok: !1,
        error: "mcp_set_servers: servers must be an object"
      }; else if (!se) S = {
        ok: !1,
        error: "mcp_set_servers is not supported in this context (onMcpSetServers callback not registered)"
      }; else try {
        S = se(a);
      } catch (E) {
        t(`[bridge:repl] mcp_set_servers handler threw: ${l(E)}`, {
          level: "error"
        }), S = {
          ok: !1,
          error: "mcp_set_servers failed to apply"
        };
      }
      _ = S.ok ? {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          response: {
            added: S.added,
            removed: S.removed,
            errors: Ye(S.errors, S.unknownServerCount)
          }
        }
      } : {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: e.request_id,
          error: Xt(S.error)
        }
      };
      break;
    }

   case "stop_task":
    {
      let a = e.request.task_id;
      if (typeof a !== "string") {
        m("task_stop_user", "invalid_task_id"), _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "stop_task: task_id must be a string"
          }
        };
        break;
      }
      let c = a;
      if (!K) {
        m("task_stop_user", "not_supported"), _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "stop_task is not supported in this context (callback not registered)"
          }
        };
        break;
      }
      P(e, C, s, K(c));
      return;
    }

   case "background_tasks":
    {
      let a = dTr(e.request.tool_use_id);
      if (!a.valid) {
        m("task_local_shell_background_all", "invalid_tool_use_id"), _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: uTr
          }
        };
        break;
      }
      let {toolUseId: c} = a;
      if (!B) {
        m("task_local_shell_background_all", "not_supported"), _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "background_tasks is not supported in this context (callback not registered)"
          }
        };
        break;
      }
      if (Lc()) {
        m("task_local_shell_background_all", "disabled"), _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: cTr
          }
        };
        break;
      }
      P(e, C, s, Promise.resolve().then(() => B(c)).then(S => c === void 0 ? {} : {
        backgrounded: S
      }));
      return;
    }

   case "cancel_async_message":
    {
      let a = e.request.message_uuid;
      if (typeof a !== "string") {
        m("bridge_cancel_queued_message", "invalid_message_uuid"), _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "cancel_async_message: message_uuid must be a string"
          }
        };
        break;
      }
      if (!N) {
        m("bridge_cancel_queued_message", "not_supported"), _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "cancel_async_message is not supported in this context (callback not registered)"
          }
        };
        break;
      }
      P(e, C, s, Promise.resolve().then(() => N(a)).then(c => {
        if (c) g("bridge_cancel_queued_message"); else f("bridge_cancel_queued_message", "not_queued");
        return {
          cancelled: c
        };
      }, c => {
        throw m("bridge_cancel_queued_message", "failed"), c;
      }));
      return;
    }

   case "side_question":
    {
      let a = Le().safeParse(e.request);
      if (!a.success) {
        m("bridge_side_question", "invalid_request"), _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "side_question: question must be a string and history an array of {question, response} strings"
          }
        };
        break;
      }
      if (!ae) {
        m("bridge_side_question", "not_registered"), _ = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: e.request_id,
            error: "side_question is not supported in this context (onSideQuestion callback not registered)"
          }
        };
        break;
      }
      if (G?.has(e.request_id)) {
        t(`[bridge:repl] side_question request_id=${e.request_id} already in flight \u2014 ignoring duplicate delivery`);
        return;
      }
      let c = new AbortController;
      G?.set(e.request_id, c);
      let S = Promise.resolve().then(() => ae(a.data, {
        signal: c.signal,
        onProgress: E => {
          C({
            type: "system",
            subtype: "control_request_progress",
            request_id: e.request_id,
            ...E,
            uuid: M(),
            session_id: s
          });
        }
      }));
      P(e, C, s, Ht(S, r.sideQuestionDeadlineMs ?? two, _Ht).then(E => {
        if (E.response === null) f("bridge_side_question", "no_response"); else if (E.synthetic !== !1) f("bridge_side_question", "synthetic"); else g("bridge_side_question");
        return nwo(E);
      }, E => {
        if (l(E) === _Ht) throw c.abort(), m("bridge_side_question", "deadline"), new Mr(_Ht);
        if (Ve(E)) f("bridge_side_question", "cancelled"); else m("bridge_side_question", "failed");
        throw E;
      }).finally(() => {
        if (G?.get(e.request_id) === c) G.delete(e.request_id);
      }));
      return;
    }

   case "fork_conversation":
    {
      if (ie) {
        P(e, C, s, ie(e.request, {
          promptPending: qe?.() ?? !1,
          requestId: e.request_id
        }));
        return;
      }
      let a = {
        forked: !1,
        error: "unsupported",
        reason: "requires_remote_control_server"
      };
      _ = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: e.request_id,
          response: a
        }
      };
      break;
    }

   default:
    _ = {
      type: "control_response",
      response: {
        subtype: "error",
        request_id: e.request_id,
        error: `REPL bridge does not handle control_request subtype: ${Xt(String(e.request.subtype))}`
      }
    };
  }
  let Ce = {
    ..._,
    session_id: s
  };
  n.write(Ce), t(`[bridge:repl] Sent control_response for ${e.request.subtype} request_id=${e.request_id} result=${_.response.subtype}`);
}

function ge(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}

var Ge = "(servers not adopted)";

function Ye(e, r) {
  if (r <= 0) return e;
  return {
    ...e,
    [Ge]: `${r} server(s) not adopted: a Remote Control bridge only honors the injected Project servers`
  };
}

function je(e) {
  if (!ge(e)) return m("bridge_flag_settings", "invalid_shape"), {
    ok: !1,
    error: "apply_flag_settings: settings must be an object"
  };
  let r = Object.keys(e).filter(s => !Pe.has(s));
  if (r.length > 0) {
    m("bridge_flag_settings", "unsupported_key");
    let s = r.slice(0, Me).map(h => kt(h, Oe)), d = r.length > s.length ? ` (+${r.length - s.length} more)` : "";
    return {
      ok: !1,
      error: `apply_flag_settings: ${s.join(", ")}${d} cannot be changed over Remote Control (only effortLevel and ultracode can)`
    };
  }
  let n = {};
  if ("effortLevel" in e) {
    let s = e.effortLevel;
    if (s !== null && typeof s !== "string") return m("bridge_flag_settings", "invalid_type"), 
    {
      ok: !1,
      error: "apply_flag_settings: effortLevel must be a string or null"
    };
    n.effortLevel = s;
  }
  if ("ultracode" in e) {
    let s = e.ultracode;
    if (typeof s !== "boolean") return m("bridge_flag_settings", "invalid_type"), {
      ok: !1,
      error: "apply_flag_settings: ultracode must be a boolean"
    };
    n.ultracode = s;
  }
  if (!("effortLevel" in n) && !("ultracode" in n)) return m("bridge_flag_settings", "nothing_to_apply"), 
  {
    ok: !1,
    error: "apply_flag_settings: nothing to apply \u2014 only effortLevel and ultracode can be changed over Remote Control"
  };
  return {
    ok: !0,
    settings: n
  };
}

function xjn(e, r) {
  let n = r?.outcome, s = n !== void 0 && BH(n.terminal_reason), d = {
    type: "result",
    ...!s && r?.userMessageUuid && {
      user_message_uuid: r.userMessageUuid
    },
    duration_ms: 0,
    duration_api_ms: 0,
    total_cost_usd: 0,
    usage: {
      ...Af
    },
    modelUsage: {},
    permission_denials: [],
    session_id: e,
    uuid: M()
  };
  if (n === void 0 || s) return {
    ...d,
    subtype: "success",
    is_error: !1,
    num_turns: 0,
    result: "",
    stop_reason: null
  };
  let h = {
    is_error: n.is_error,
    num_turns: n.num_turns,
    stop_reason: n.stop_reason,
    ...n.terminal_reason !== void 0 && {
      terminal_reason: n.terminal_reason
    }
  };
  if (n.subtype === "success") return {
    ...d,
    ...h,
    subtype: "success",
    result: n.is_error && n.structured_output === void 0 ? n.result ?? "" : "",
    ...n.api_error_status != null && {
      api_error_status: n.api_error_status
    },
    ...n.api_error_code !== void 0 && {
      api_error_code: n.api_error_code
    },
    ...n.api_error_origin !== void 0 && {
      api_error_origin: n.api_error_origin
    },
    ...n.api_error !== void 0 && {
      api_error: n.api_error
    }
  };
  return {
    ...d,
    ...h,
    subtype: n.subtype,
    errors: []
  };
}

function rwo(e, r) {
  return {
    type: "system",
    subtype: "worker_shutting_down",
    reason: r,
    session_id: e,
    uuid: M()
  };
}

var ze = "PushNotification";

function MRs(e, r) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: M(),
      container: null,
      model: Bi,
      role: "assistant",
      stop_details: null,
      stop_reason: "tool_use",
      stop_sequence: null,
      type: "message",
      usage: {
        ...Af
      },
      content: [ {
        type: "tool_use",
        id: M(),
        name: ze,
        input: {
          message: e,
          status: "proactive"
        }
      } ],
      context_management: null
    },
    parent_tool_use_id: null,
    is_meta: !0,
    session_id: r,
    uuid: M()
  };
}

function yTr(e, r) {
  return {
    type: "assistant",
    message: {
      diagnostics: null,
      id: M(),
      container: null,
      model: Bi,
      role: "assistant",
      stop_details: null,
      stop_reason: "stop_sequence",
      stop_sequence: "",
      type: "message",
      usage: {
        ...Af
      },
      content: [ {
        type: "text",
        text: e,
        citations: null
      } ],
      context_management: null
    },
    parent_tool_use_id: null,
    session_id: r,
    uuid: M(),
    timestamp: (new Date).toISOString()
  };
}

class o9 {
  capacity;
  ring;
  set=new Set;
  writeIdx=0;
  constructor(e) {
    this.capacity = e, this.ring = Array(e);
  }
  add(e) {
    if (this.set.has(e)) return;
    let r = this.ring[this.writeIdx];
    if (r !== void 0) this.set.delete(r);
    this.ring[this.writeIdx] = e, this.set.add(e), this.writeIdx = (this.writeIdx + 1) % this.capacity;
  }
  has(e) {
    return this.set.has(e);
  }
  clear() {
    this.set.clear(), this.ring.fill(void 0), this.writeIdx = 0;
  }
}

var He = p(() => u({
  notification_id: o().min(1),
  origin: A(qpe),
  content: o()
}));

function Qe(e) {
  let r = He().safeParse(e);
  if (!r.success) return;
  return {
    type: "user",
    uuid: r.data.notification_id,
    message: {
      role: "user",
      content: r.data.content
    },
    parent_tool_use_id: null,
    isSynthetic: !0,
    inbound_origin: qpe
  };
}

function Xe(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "queued_notification";
}

var Ze = [ "UNSPECIFIED", "ABSENT", "VERIFIED", "VERIFIED_BY_GATE", "INVALID", "UNCHECKED", "VERIFIED_KEYLESS_DEVICE", "SERVICE_VOUCHED", "SERVER_AUTHORED", "SERVER_REPLAYED", "TRANSITIVELY_VOUCHED" ], fe = "DEVICE_ATTESTATION_STATUS_", Je = [ "UNSPECIFIED", "ABSENT", "VERIFIED", "VERIFIED_BY_GATE", "INVALID", "UNCHECKED" ];

function fwe(e) {
  if (e === void 0 || e === null) return "UNSPECIFIED";
  if (typeof e === "number") return Je[e] ?? "UNSPECIFIED";
  if (typeof e !== "string") return "UNSPECIFIED";
  if (e === "server_authored") return "SERVER_AUTHORED";
  if (e === "server_replayed") return "SERVER_REPLAYED";
  if (e === "transitively_vouched") return "TRANSITIVELY_VOUCHED";
  let r = e.startsWith(fe) ? e.slice(fe.length) : e;
  return Ze.find(n => n === r) ?? "UNSPECIFIED";
}

var V = [ "VERIFIED", "VERIFIED_KEYLESS_DEVICE", "VERIFIED_BY_GATE" ];

function HRs(e, r) {
  return V.indexOf(e) <= V.indexOf(r) ? e : r;
}

function _Tr(e, r) {
  if (e === "SERVICE_VOUCHED") return !0;
  let n = V.findIndex(s => s === e);
  return n !== -1 && n <= V.indexOf(r);
}

var bTr = {
  enforce: !1,
  acceptLevel: "VERIFIED",
  acceptStatuses: new Set
}, et = [ "UNSPECIFIED", "ABSENT", "INVALID", "UNCHECKED" ], tt = p(() => u({
  accept_level: U(V).default("VERIFIED"),
  accept_statuses: T(U(et)).default([])
}));

function STr(e) {
  let r = ao().attestation, n = tt().safeParse(e);
  if (!n.success && !r.malformedConfigReported) {
    r.malformedConfigReported = !0;
    try {
      t(`[bridge:attestation] malformed enforce config \u2014 failing closed to accept_level=VERIFIED with no accept_statuses: ${n.error.message}`, {
        level: "error"
      }), f("bridge_event_attestation", "malformed_config");
    } catch (s) {
      t(`[bridge:attestation] malformed-config report threw: ${l(s)}`, {
        level: "error"
      });
    }
  }
  return {
    enforce: !0,
    acceptLevel: n.success ? n.data.accept_level : "VERIFIED",
    acceptStatuses: new Set(n.success ? n.data.accept_statuses : [])
  };
}

function DRs(e) {
  try {
    let r = ao().attestation.reportedCloudWorkerCodes;
    if (r.has(e)) return;
    r.add(e), t(`${w(!0)} the attestation policy header could not be read whole (${e})`, {
      level: "error"
    }), f("ccr_worker_attestation_policy", e);
  } catch (r) {
    t(`${w(!0)} policy-fault report threw: ${l(r)}`, {
      level: "error"
    });
  }
}

function cut(e) {
  ao().attestation.filterPolicy = e;
}

function $tn(e) {
  ao().attestation.dropNotifier = e;
}

function LRs(e) {
  let r = ao().attestation;
  if (r.dropNotifier === e) r.dropNotifier = void 0;
}

function Pjn(e) {
  ao().attestation.senderDropWriter = e;
}

function Ijn(e) {
  let r = ao().attestation;
  if (r.senderDropWriter === e) r.senderDropWriter = void 0;
}

var bHt = "[remote-io] warning: ";

function wTr({status: e, payloadType: r, subtype: n, isCloud: s}) {
  let d = s ? "The app that sent it doesn't sign its activity. Use an app that does." : "The app that sent it doesn't sign its activity. Use the terminal or an app that does.";
  return {
    what: r === "control_response" ? "permission response" : r === "control_request" ? `remote command (${n})` : "message",
    hint: s && e === "ABSENT" ? "If you sent it, try again or sign in again." : s && e === "VERIFIED_BY_GATE" ? "If you sent it, signing in again may fix this." : e === "ABSENT" || e === "INVALID" ? "Re-pair the sending device in Trusted Devices." : e === "VERIFIED_BY_GATE" || e === "VERIFIED_KEYLESS_DEVICE" ? d : e === "TRANSITIVELY_VOUCHED" ? "It came from an automated cloud session, not from a person." : void 0
  };
}

function SHt(e) {
  let r = e.isCloud ? "This session" : "Remote Control";
  if (e.windowCapped) return `${r} is rejecting a burst of unsigned remote activity; further warnings for this burst are suppressed.`;
  let {what: n, hint: s} = wTr(e);
  return `${r} ignored a ${n} that arrived without a valid device signature (attestation: ${e.status}).${s ? ` ${s}` : ""}`;
}

function u3e(e) {
  let {what: r, hint: n} = wTr(e);
  return `This ${r} arrived without a valid device signature (attestation: ${e.status}) and was ignored.${n ? ` ${n}` : ""}`;
}

function rt(e) {
  if (e.payloadType === "control_request") return;
  return yTr(e.windowCapped ? SHt(e) : u3e(e), q());
}

var ot = new Set([ "set_model", "set_permission_mode", "interrupt", "stop_task", "background_tasks", "cancel_async_message", "set_max_thinking_tokens", "rename_session", "set_color", "mcp_authenticate", "mcp_oauth_callback_url", "mcp_reconnect", "apply_flag_settings", "side_question", "reload_plugins" ]);

function wUe(e) {
  let r = z(e);
  return typeof r === "string" ? r : void 0;
}

function Se(e) {
  let r = Ee(e);
  if (r === void 0 || !ot.has(r)) return;
  return {
    subtype: r,
    requestId: e.payload ? wUe(e.payload) : void 0
  };
}

function Ee(e) {
  let r = e.payload?.request, n = typeof r === "object" && r !== null && "subtype" in r ? r.subtype : void 0;
  return typeof n === "string" ? n : void 0;
}

var nt = new Set([ "interrupt", "end_session" ]), st = 2e3, j = 200, ke = 128, it = 256;

function F(e, r, n) {
  if (e.delete(n), e.add(n), e.size > r) for (let s of e) {
    e.delete(s);
    break;
  }
}

function Ftn(e) {
  let r = ao().attestation;
  return e.length > ke || r.knownInboundRequestIds.has(e) || r.knownOutboundRequestIds.has(e) || r.elicitationOutboundRequestIds.has(e) || r.hostAskOutboundRequestIds.has(e);
}

function NRs(e) {
  let r = ao().attestation;
  return r.knownOutboundRequestIds.has(e) || r.elicitationOutboundRequestIds.has(e);
}

function Ojn(e, {automated: r}) {
  let n = ao().attestation;
  if (F(n.knownOutboundRequestIds, j, e), r) F(n.automatedOutboundRequestIds, j, e);
}

var at = 512;

function $Rs(e) {
  F(ao().attestation.deviceOutboundRequestIds, at, e);
}

function FRs(e) {
  F(ao().attestation.elicitationOutboundRequestIds, j, e);
}

function URs(e) {
  F(ao().attestation.hostAskOutboundRequestIds, j, e);
}

function dt(e) {
  let r = e.payload?.response;
  if (typeof r !== "object" || r === null) return !1;
  let n = wUe(r), s = ao().attestation;
  return n !== void 0 && (s.automatedOutboundRequestIds.has(n) || s.deviceOutboundRequestIds.has(n) || s.hostAskOutboundRequestIds.has(n));
}

var ut = 200;

function Mjn(e) {
  F(ao().attestation.resolvedPromptRequestIds, ut, e);
}

function pt(e) {
  let r = e.payload?.response;
  if (typeof r !== "object" || r === null) return !1;
  let n = wUe(r);
  return n !== void 0 && ao().attestation.resolvedPromptRequestIds.has(n);
}

var lt = 6e4, ye = 10;

function me(e, r) {
  let n = ao().attestation;
  if (n.dropNotifier === void 0 && n.senderDropWriter === void 0) return;
  if (n.recentDropEventIds.has(r)) return;
  F(n.recentDropEventIds, it, r);
  let s = e.payloadType === "control_request" ? n.commandDropNoticeWindow : n.messageDropNoticeWindow, d = Date.now();
  if (d - s.start >= lt) s.start = d, s.count = 0;
  if (s.count++, s.count <= ye) be(e); else if (s.count === ye + 1) be({
    status: e.status,
    payloadType: e.payloadType,
    ...e.subtype !== void 0 && {
      subtype: e.subtype
    },
    windowCapped: !0,
    ...e.isCloud && {
      isCloud: !0
    }
  });
}

function be(e) {
  let r = ao().attestation;
  if (r.dropNotifier !== void 0) try {
    r.dropNotifier(e);
  } catch (n) {
    t(`${w(e.isCloud === !0)} drop notifier threw: ${l(n)}`, {
      level: "error"
    });
  }
  if (r.senderDropWriter !== void 0) try {
    let n = rt(e);
    if (n) r.senderDropWriter(n);
  } catch (n) {
    t(`${w(e.isCloud === !0)} drop sender writer threw: ${l(n)}`, {
      level: "error"
    });
  }
}

function vTr(e) {
  let n = (typeof e.payload?.type === "string" ? e.payload.type : e.event_type) === "control_request" && e.payload ? wUe(e.payload) : void 0;
  if (n !== void 0 && n.length <= ke) F(ao().attestation.knownInboundRequestIds, st, n);
}

function X(e, r, n) {
  if (r !== "control_request") return;
  if (vTr(e), Se(e) !== void 0) g(n ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation");
}

var ct = new Set([ "bash_command", "update_environment_variables", "assistant", "system" ]);

function _t(e, r, n, s) {
  try {
    let d = ao().attestation, h = s ? d.reportedCloudWorkerCodes : d.reportedStrayDropCodes, I = n === "control_request" ? "control_request_other" : ct.has(n) ? n : "other_payload_type", k = `${r.toLowerCase()}_${I}`;
    if (h.has(k)) return;
    h.add(k), t(`${w(s)} DROPPING unverified ${n} event_id=${e.event_id} status=${r} (stray payload class ${k}; counted once per process)`, {
      level: "warn"
    }), m(s ? "ccr_worker_stray_event_attestation" : "bridge_stray_event_attestation", k);
  } catch (d) {
    t(`${w(s)} stray-drop report threw: ${l(d)}`, {
      level: "error"
    });
  }
}

function w(e) {
  return e ? "[ccr-worker:attestation]" : "[bridge:attestation]";
}

function uut(e, r, {isCloudWorker: n, vouchWithheld: s = !1}) {
  let d = !n && (e === "SERVER_AUTHORED" || e === "SERVER_REPLAYED") ? "UNSPECIFIED" : e, h = !n && d === "TRANSITIVELY_VOUCHED" && _Tr("VERIFIED_KEYLESS_DEVICE", r.acceptLevel) && !s;
  return {
    status: d,
    meetsLevel: h || _Tr(d, r.acceptLevel),
    configException: r.acceptStatuses.has(d) || d === "TRANSITIVELY_VOUCHED" && r.acceptStatuses.has("UNSPECIFIED")
  };
}

function he(e, r, n) {
  let s = typeof e.payload?.type === "string" ? e.payload.type : e.event_type, d = s === "user" || s === "control_response", h = fwe(e.device_attestation_status), I = h === "TRANSITIVELY_VOUCHED" && s === "user" && !(typeof e.payload.inbound_origin === "string" && e.payload.inbound_origin !== ""), {status: k, meetsLevel: y, configException: b} = uut(h, r, {
    isCloudWorker: n,
    vouchWithheld: I
  }), x = `${k.toLowerCase()}_${s}${I ? "_unstamped" : ""}`, K = e.payload?.request, B = n && k === "SERVICE_VOUCHED" && s === "control_request" && (!nt.has(Ee(e) ?? "") || typeof K === "object" && K !== null && YXe(K));
  if (y && !B) {
    if (d) g(n ? "ccr_worker_event_attestation" : "bridge_event_attestation");
    return X(e, s, n), !1;
  }
  if (!r.enforce) {
    if (X(e, s, n), k === "UNSPECIFIED") return !1;
    if (d) t(`${w(n)} accepting unverified ${s} event_id=${e.event_id} status=${k}`, {
      level: "info"
    }), f(n ? "ccr_worker_event_attestation" : "bridge_event_attestation", x);
    return !1;
  }
  let N = b, L = !1;
  if (d) {
    let R = x;
    if (t(`${w(n)} ${N ? "accepting (config exception)" : "DROPPING"} unverified ${s} event_id=${e.event_id} status=${k}`, {
      level: N ? "info" : "warn"
    }), N) f(n ? "ccr_worker_event_attestation" : "bridge_event_attestation", R); else if (s === "control_response" && dt(e)) L = !0, 
    t(`${w(n)} dropped ${s} event_id=${e.event_id} status=${k} answers an automated outbound request; notice suppressed`, {
      level: "info"
    }), m(n ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${R}_automated_reply`); else if (s === "control_response" && pt(e)) L = !0, 
    t(`${w(n)} dropped ${s} event_id=${e.event_id} status=${k} is a duplicate answer to an already-resolved prompt; notice suppressed`, {
      level: "info"
    }), m(n ? "ccr_worker_event_attestation" : "bridge_event_attestation", `${R}_resolved_duplicate`); else L = !0, 
    m(n ? "ccr_worker_event_attestation" : "bridge_event_attestation", R), me({
      status: k,
      payloadType: s,
      ...n && {
        isCloud: !0
      }
    }, e.event_id);
  } else if (s === "control_request" && !N) {
    let R = Se(e);
    if (R) {
      L = !0;
      let W = R.requestId !== void 0 && Ftn(R.requestId) ? void 0 : R.requestId;
      t(`${w(n)} DROPPING unverified control_request subtype=${R.subtype} event_id=${e.event_id} status=${k}${W === void 0 && R.requestId !== void 0 ? " (forged-id refusal suppressed, or the id is too long)" : ""}`, {
        level: "warn"
      }), m(n ? "ccr_worker_control_request_attestation" : "bridge_control_request_attestation", `${k.toLowerCase()}_${R.subtype}`), 
      me({
        status: k,
        payloadType: s,
        subtype: R.subtype,
        requestId: W,
        ...n && {
          isCloud: !0
        }
      }, e.event_id);
    }
  }
  if (!N && !L) _t(e, k, s, n);
  if (N) X(e, s, n);
  return !N;
}

function Hjn(e) {
  return he(e, ao().attestation.filterPolicy?.() ?? bTr, !1);
}

function BRs(e, r) {
  if (e.source !== "client") {
    try {
      let n = ao().attestation.reportedCloudWorkerCodes;
      if (!n.has("source_not_client")) n.add("source_not_client"), t(`${w(!0)} ${r.enforce ? "DROPPING" : "would drop"} event_id=${e.event_id}: not marked client-written (counted once per process)`, {
        level: "warn"
      }), m("ccr_worker_stray_event_attestation", "source_not_client");
    } catch (n) {
      t(`${w(!0)} source-drop report threw: ${l(n)}`, {
        level: "error"
      });
    }
    if (!r.enforce) vTr(e);
    return r.enforce;
  }
  return he(e, r, !0);
}

export { hHt, lTr, dTr, cTr, uTr, pTr, Mse, yHt, fTr, ewo, mTr, gTr, xRs, Hse, Ntn, hTr, Cjn, Rjn, PRs, two, _Ht, nwo, IRs, ORs, xjn, rwo, MRs, yTr, o9, fwe, HRs, _Tr, bTr, STr, DRs, cut, $tn, LRs, Pjn, Ijn, bHt, wTr, SHt, u3e, wUe, Ftn, NRs, Ojn, $Rs, FRs, URs, Mjn, vTr, uut, Hjn, BRs };
