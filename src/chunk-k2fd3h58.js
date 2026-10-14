// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Rxr } from "./chunk-s2t7g8m9.js";

import { p } from "./chunk-jkzenvsk.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { zn } from "./chunk-3pqddg8f.js";

import { cn, Ks, gJe, Yln, F4n, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Qt, ad, xe } from "./chunk-84yp45y8.js";

import { i } from "./chunk-hedpgw9m.js";

import { f } from "./chunk-3ykz5st8.js";

import { Fa } from "./chunk-q6wab2jw.js";

import { z6e, ra, U_, cpe, qxe } from "./chunk-gmq0qwep.js";

import { Ji } from "./chunk-f0wpcwcb.js";

import { Sk, vp, Yt, Hn } from "./chunk-f1zpf9me.js";

import { gt } from "./chunk-yebkpv3k.js";

import { r7t } from "./chunk-5ad06083.js";

import { uN } from "./chunk-ghdkaeg7.js";

import { YW } from "./chunk-de9nc4rq.js";

import { ttr, Jqr, Qqr, ntr, ott, j3o, W3o, z3o } from "./chunk-c0na4e14.js";

import { _Me, Ipn } from "./chunk-ksn5eftd.js";

import { yNr } from "./chunk-y3s4ww4d.js";

import { iT } from "./chunk-10gv16xm.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import { Is } from "./chunk-p35rdtee.js";

import { N } from "./chunk-hmqkrrtz.js";

import { randomUUID as O } from "crypto";

function pUo(e) {
  return e.type !== "control_request" && e.type !== "control_response" && e.type !== "keep_alive" && e.type !== "control_cancel_request" && e.type !== "transcript_mirror" && !(e.type === "system" && (e.subtype === "task_summary" || e.subtype === "session_metadata"));
}

function P(e) {
  return {
    type: "assistant",
    message: e.error === "verification_required" ? Qqr(e.message) : e.message,
    uuid: e.uuid,
    requestId: void 0,
    timestamp: e.timestamp ?? (new Date).toISOString(),
    remoteSourced: !0,
    error: e.error,
    ...e.is_api_error_message && {
      isApiErrorMessage: !0
    },
    ...Jqr(e.api_error_status) && {
      apiErrorStatus: e.api_error_status
    },
    ...e.api_error !== void 0 && {
      apiError: e.api_error
    },
    ...e.api_error_params !== void 0 && {
      apiErrorParams: e.api_error_params
    },
    ...e.api_error_code !== void 0 && {
      apiErrorCode: e.api_error_code
    },
    ...!1
  };
}

function L(e) {
  return {
    type: "stream_event",
    event: e.event,
    ...e.ttft_ms !== void 0 && {
      ttftMs: e.ttft_ms
    }
  };
}

function h(e) {
  let n = e;
  if (typeof n === "string" && n !== "" && e !== void 0) return e;
  return t("[sdkMessageAdapter] frame uuid missing or not a string \u2014 minting one", {
    level: "error"
  }), O();
}

function R(e) {
  if (typeof e.content === "string") return !0;
  return t(`[sdkMessageAdapter] Dropping ${e.subtype} frame whose content is not a string`, {
    level: "error"
  }), !1;
}

function ULr(e) {
  if (!Array.isArray(e)) return [];
  return e.filter(n => typeof n === "string" && !n.startsWith("[ede_diagnostic]") && !n.startsWith("[session_crash]"));
}

function F(e) {
  if (e.subtype === "success") return {
    type: "system",
    subtype: "informational",
    content: "Session completed successfully",
    level: "info",
    uuid: h(e.uuid),
    timestamp: (new Date).toISOString()
  };
  let n = e.errors;
  if (!Array.isArray(n)) return t(`[sdkMessageAdapter] ${e.subtype} result without an errors[] array \u2014 nothing to show`), 
  null;
  let s = ULr(n);
  if (s.length === 0) return null;
  return {
    type: "system",
    subtype: "informational",
    content: cn(s.join(", ")),
    level: "warning",
    uuid: h(e.uuid),
    timestamp: (new Date).toISOString()
  };
}

function j(e) {
  let n = e.status;
  if (typeof n !== "string" || n === "") return null;
  return {
    type: "system",
    subtype: "informational",
    content: n === "compacting" ? "Compacting conversation\u2026" : `Status: ${cn(n)}`,
    level: "info",
    uuid: h(e.uuid),
    timestamp: (new Date).toISOString()
  };
}

function W(e) {
  let {tool_name: n, elapsed_time_seconds: s, tool_use_id: r} = e;
  if (typeof n !== "string" || typeof s !== "number" || !Number.isFinite(s) || typeof r !== "string") return t("[sdkMessageAdapter] Dropping tool_progress frame with a non-string tool_name/tool_use_id or non-finite elapsed_time_seconds", {
    level: "error"
  }), null;
  return {
    type: "system",
    subtype: "informational",
    content: `Tool ${cn(n)} running for ${s}s\u2026`,
    level: "info",
    uuid: h(e.uuid),
    timestamp: (new Date).toISOString(),
    toolUseID: e.tool_use_id
  };
}

function B(e) {
  let n = e.compact_metadata;
  if (typeof n !== "object" || n === null) return t("[sdkMessageAdapter] Dropping compact_boundary frame without compact_metadata", {
    level: "error"
  }), null;
  return {
    type: "system",
    subtype: "compact_boundary",
    content: "Conversation compacted",
    level: "info",
    uuid: h(e.uuid),
    timestamp: (new Date).toISOString(),
    compactMetadata: ntr(e.compact_metadata),
    remoteSourced: !0
  };
}

function tUt(e) {
  let n = typeof e.model === "string" ? e.model : void 0;
  if (e.model !== void 0 && n === void 0) t(`[sdkMessageAdapter] init frame model is ${e.model === null ? "null" : typeof e.model}, not a string \u2014 keeping the current model`, {
    level: "error"
  });
  let s = typeof e.cwd === "string" ? e.cwd : void 0;
  if (e.cwd !== void 0 && s === void 0) t("[sdkMessageAdapter] init frame cwd is not a string \u2014 not adopting", {
    level: "error"
  });
  let r;
  if (Array.isArray(e.slash_commands)) r = e.slash_commands.filter(l => typeof l === "string"); else if (e.slash_commands !== void 0) t("[sdkMessageAdapter] init frame slash_commands is not an array \u2014 keeping the local command list", {
    level: "error"
  });
  let a;
  if (Array.isArray(e.mcp_servers)) a = e.mcp_servers.flatMap(l => typeof l === "object" && l !== null && typeof l.name === "string" && (l.status === void 0 || typeof l.status === "string") ? [ l.status === void 0 ? {
    name: l.name
  } : {
    name: l.name,
    status: l.status
  } ] : []); else if (e.mcp_servers !== void 0) t("[sdkMessageAdapter] init frame mcp_servers is not an array \u2014 ignoring", {
    level: "error"
  });
  let y;
  if (Array.isArray(e.skills)) y = e.skills.filter(l => typeof l === "string"); else if (e.skills !== void 0) t("[sdkMessageAdapter] init frame skills is not an array \u2014 ignoring", {
    level: "error"
  });
  let g;
  if (Array.isArray(e.plugins)) g = e.plugins.flatMap(l => typeof l === "object" && l !== null && typeof l.name === "string" ? [ l.name ] : []); else if (e.plugins !== void 0) t("[sdkMessageAdapter] init frame plugins is not an array \u2014 ignoring", {
    level: "error"
  });
  let m;
  if (Array.isArray(e.tools)) m = e.tools.filter(l => typeof l === "string"); else if (e.tools !== void 0) t("[sdkMessageAdapter] init frame tools is not an array \u2014 ignoring", {
    level: "error"
  });
  return {
    model: n,
    cwd: s,
    slashCommands: r,
    skills: y,
    plugins: g,
    mcpServers: a,
    tools: m,
    workerEpoch: Ipn(e)
  };
}

function Ght(e) {
  if (!e) return;
  if (typeof e.condition !== "string" || !Number.isSafeInteger(e.iterations) || e.iterations < 0 || !Number.isSafeInteger(e.set_at) || e.set_at < 0 || !Number.isSafeInteger(e.tokens_at_start) || e.tokens_at_start < 0 || e.last_reason !== void 0 && typeof e.last_reason !== "string") return;
  return {
    condition: Ks(e.condition, {
      maxCodeUnits: 4e3
    }),
    iterations: e.iterations,
    setAt: e.set_at,
    tokensAtStart: e.tokens_at_start,
    ...e.last_reason !== void 0 && {
      lastReason: Ks(e.last_reason, {
        maxCodeUnits: 512
      })
    }
  };
}

var q = {
  env: !0,
  settings: !0,
  clientdata: !0,
  experiment: !0,
  "model-default": !0,
  "unknown-model": !0,
  auto: !0
}, G = new Set(Object.keys(q));

function BLr(e) {
  if (typeof e !== "object" || e === null || typeof e.enabled !== "boolean" || typeof e.enforced !== "boolean" || !Number.isSafeInteger(e.effective_window) || e.effective_window <= 0 || !Number.isSafeInteger(e.threshold) || e.threshold <= 0 || !G.has(e.source)) {
    if (Ji().claim("remote_autocompact_frame_drop")) t("[sdkMessageAdapter] Dropping malformed autocompact_state frame"), 
    f("remote_autocompact_sync", "invalid_frame");
    return;
  }
  return {
    enabled: e.enabled,
    effectiveWindow: e.effective_window,
    threshold: e.threshold,
    enforced: e.enforced,
    source: e.source
  };
}

function U5n(e, n, s) {
  let r = BLr(n);
  if (r === void 0) {
    e(y => y.remoteAutocompactState === void 0 ? y : {
      ...y,
      remoteAutocompactState: void 0
    });
    return;
  }
  let a = !1;
  if (e(y => {
    if (y.remoteAutocompactState !== void 0 && yNr(y.remoteAutocompactState, r)) return y;
    return a = !0, {
      ...y,
      remoteAutocompactState: r
    };
  }), !a) return;
  i("tengu_remote_autocompact_state_adopted", {
    via: s,
    enabled: r.enabled,
    enforced: r.enforced,
    source: c(r.source)
  });
}

var V = (e, n) => zn(Fa(e, s => s === void 0), Fa(n, s => s === void 0));

function B5n(e, n) {
  let s = [], r = U_(), a = !1, y = !1, g = S => {
    if (!e()) return;
    i("tengu_remote_rate_limits_dropped", {
      via: c(n),
      reason: b("account_switched"),
      frames: S
    });
  }, m = (S, k) => {
    if (!e()) return;
    let A = z3o(S);
    if (A === void 0) return;
    if ((k === "seed" || k === "history") && (W3o(A.info) || A.info.resetsAt === void 0 && A.info.overageResetsAt === void 0)) return;
    let M = ra(), v = {
      ...j3o(A.info, {
        unifiedRateLimitFallbackAvailable: M.unifiedRateLimitFallbackAvailable,
        upgradePaths: M.upgradePaths
      }),
      ...M.lowPriorityOffer !== void 0 && {
        lowPriorityOffer: M.lowPriorityOffer
      },
      ...M.lowPriorityRetryAfterSeconds !== void 0 && {
        lowPriorityRetryAfterSeconds: M.lowPriorityRetryAfterSeconds
      },
      ...M.lowPriorityMaxWaitSeconds !== void 0 && {
        lowPriorityMaxWaitSeconds: M.lowPriorityMaxWaitSeconds
      }
    };
    if (cpe() && V(v, M)) return;
    qxe(v), i("tengu_remote_rate_limits_adopted", {
      via: c(k),
      status: c(A.info.status),
      degradation: c(A.degradation),
      frames: S.length
    });
  }, l = (S, k) => {
    if (y) return;
    try {
      m(S, k);
    } catch (A) {
      d(A);
    }
  }, _ = (S = n) => {
    a = !1;
    let k = s;
    if (s = [], k.length === 0) return;
    if (r !== U_()) {
      g(k.length);
      return;
    }
    l(k, S);
  }, w = S => {
    let k = U_();
    if (s.length > 0 && k !== r) g(s.length), s = [];
    r = k, s.push(S);
  };
  return {
    adopt(S, k) {
      _(), l(S, k);
    },
    push(S) {
      if (y) return;
      if (w(S), !a) a = !0, queueMicrotask(() => {
        if (a) _();
      });
    },
    hold(S) {
      if (y) return;
      w(S);
    },
    settle(S) {
      if (!a) _(S);
    },
    hasHeld: () => s.length > 0 && !a,
    flush: () => _(),
    dispose() {
      y = !0, s = [];
    }
  };
}

function hMe(e, n) {
  if (!_Me(e)) return {
    type: "ignored"
  };
  switch (e.type) {
   case "control_request":
   case "control_response":
   case "control_cancel_request":
    return {
      type: "ignored"
    };

   case "assistant":
    return {
      type: "message",
      message: P(e)
    };

   case "user":
    {
      let r = e.message?.content;
      if (Array.isArray(r) && r.some(g => g.type === "tool_result")) {
        let g = ttr(e.tool_result_meta, r);
        return {
          type: "message",
          message: {
            ...xe({
              content: r,
              toolUseResult: r7t(e.tool_use_result, e.message),
              uuid: e.uuid,
              timestamp: e.timestamp
            }),
            remoteSourced: !0,
            ...!1,
            ...g !== void 0 && {
              remoteToolDenialKind: g
            }
          }
        };
      }
      if (e.parent_tool_use_id) return {
        type: "ignored"
      };
      if (e.isSynthetic && !uN(e.origin)) return {
        type: "ignored"
      };
      let y = r === Sk || Array.isArray(r) && r.some(g => g.type === "text" && (g.text === Sk || g.text === vp));
      if (n?.convertUserTextMessages || y) {
        if (typeof r === "string" || Array.isArray(r)) return {
          type: "message",
          message: xe({
            content: r,
            toolUseResult: e.tool_use_result,
            uuid: e.uuid,
            timestamp: e.timestamp
          })
        };
      }
      return {
        type: "ignored"
      };
    }

   case "stream_event":
    return {
      type: "stream_event",
      event: L(e)
    };

   case "result":
    {
      if (e.subtype === "success") return {
        type: "ignored"
      };
      let r = F(e);
      return r ? {
        type: "message",
        message: r
      } : {
        type: "ignored"
      };
    }

   case "system":
    if (e.subtype === "init") return {
      type: "ignored"
    };
    if (e.subtype === "status") {
      if (e.status === "requesting") return {
        type: "stream_event",
        event: {
          type: "stream_request_start"
        }
      };
      let r = j(e);
      return r ? {
        type: "message",
        message: r
      } : {
        type: "ignored"
      };
    }
    if (e.subtype === "compact_boundary") {
      let r = B(e);
      return r ? {
        type: "message",
        message: r
      } : {
        type: "ignored"
      };
    }
    if (e.subtype === "model_refusal_fallback") return {
      type: "message",
      message: {
        type: "system",
        subtype: "model_refusal_fallback",
        content: e.direction === "retry" && e.scope !== "local" && typeof e.original_model === "string" && typeof e.fallback_model === "string" ? z6e(e.original_model, e.fallback_model, e.api_refusal_category ?? null) : Ks(typeof e.content === "string" ? e.content : "", {
          drop: F4n,
          maxCodeUnits: Yln
        }),
        level: "warning",
        trigger: e.trigger,
        direction: e.direction,
        ...e.scope !== void 0 && {
          scope: e.scope
        },
        originalModel: e.original_model,
        fallbackModel: e.fallback_model,
        requestId: e.request_id,
        apiRefusalCategory: e.api_refusal_category ?? null,
        apiRefusalExplanation: e.api_refusal_explanation ?? null,
        ...e.retracted_message_uuids !== void 0 && {
          retractedMessageUuids: e.retracted_message_uuids
        },
        ...e.refused_user_message_uuid !== void 0 && {
          refusedUserMessageUuid: e.refused_user_message_uuid
        },
        isMeta: !1,
        uuid: h(e.uuid),
        timestamp: (new Date).toISOString()
      }
    };
    if (e.subtype === "model_fallback") {
      if (!R(e)) return {
        type: "ignored"
      };
      return {
        type: "message",
        message: {
          type: "system",
          subtype: "model_fallback",
          content: cn(e.content),
          level: "warning",
          trigger: e.trigger,
          originalModel: e.original_model,
          fallbackModel: e.fallback_model,
          isMeta: !1,
          uuid: h(e.uuid),
          timestamp: (new Date).toISOString()
        }
      };
    }
    if (e.subtype === "model_consent_fallback") {
      if (!R(e)) return {
        type: "ignored"
      };
      return {
        type: "message",
        message: ott({
          ...e,
          content: cn(e.content),
          uuid: h(e.uuid)
        })
      };
    }
    if (e.subtype === "informational") {
      if (!R(e)) return {
        type: "ignored"
      };
      return {
        type: "message",
        message: {
          type: "system",
          subtype: "informational",
          content: cn(e.content),
          level: e.level,
          isMeta: !1,
          uuid: h(e.uuid),
          timestamp: (new Date).toISOString(),
          ...e.tool_use_id && {
            toolUseID: e.tool_use_id
          },
          ...e.prevent_continuation && {
            preventContinuation: e.prevent_continuation
          }
        }
      };
    }
    if (e.subtype === "tool_host_result") {
      let r = Array.isArray(e.lines) ? e.lines.filter(m => typeof m === "string").slice(0, 32).map(m => Ks(m, {
        maxCodeUnits: 2100
      })).filter(m => m.trim() !== "") : [], a = typeof e.label === "string" ? Ks(e.label, {
        maxCodeUnits: 320
      }) : void 0, y = e.unverified === !0 && a !== void 0 && a.trim() !== "";
      if (typeof e.tool_use_id !== "string" || r.length === 0 && !y) return {
        type: "ignored"
      };
      let g = h(e.uuid);
      return {
        type: "message",
        message: Qt({
          type: "tool_host_result_lines",
          toolUseID: e.tool_use_id,
          host: iT(typeof e.host?.name === "string" ? e.host.name : ""),
          lines: r,
          ...a !== void 0 && {
            label: a
          },
          ...y && {
            unverified: !0
          }
        }, {
          now: () => (new Date).toISOString(),
          uuid: () => g
        })
      };
    }
    if (e.subtype === "permission_denied") return {
      type: "ignored"
    };
    if (e.subtype === "local_command_output") {
      if (!R(e)) return {
        type: "ignored"
      };
      let r = h(e.uuid);
      return {
        type: "message",
        message: ad({
          content: cn(e.content),
          uuid: () => r
        })
      };
    }
    return t(`[sdkMessageAdapter] Ignoring system message subtype: ${e.subtype}`), {
      type: "ignored"
    };

   case "tool_progress":
    if (e.heartbeat === !0 || e.subagent_retry !== void 0 || e.tool_name === gt) return t("[sdkMessageAdapter] Ignoring heartbeat/subagent-retry tool_progress frame"), 
    {
      type: "ignored"
    };
    let s = W(e);
    return s ? {
      type: "message",
      message: s
    } : {
      type: "ignored"
    };

   case "auth_status":
    return t("[sdkMessageAdapter] Ignoring auth_status message"), {
      type: "ignored"
    };

   case "tool_use_summary":
    return t("[sdkMessageAdapter] Ignoring tool_use_summary message"), {
      type: "ignored"
    };

   case "rate_limit_event":
    return t("[sdkMessageAdapter] Ignoring rate_limit_event message"), {
      type: "ignored"
    };

   case "active_goal":
    return {
      type: "ignored"
    };

   case "autocompact_state":
    return {
      type: "ignored"
    };

   case "env_manager_log":
    {
      let r = typeof e.data?.content === "string" ? e.data.content : null;
      if (r === null) return t("[sdkMessageAdapter] env_manager_log without data.content \u2014 orchestrator wire change?", {
        level: "warn"
      }), {
        type: "env_log",
        message: ""
      };
      let a = r.split(/\r\n?|\n/), y = "";
      for (let g = a.length - 1; g >= 0; g--) if (y = Ks(a[g], {
        maxCodeUnits: 512
      }), y !== "") break;
      return {
        type: "env_log",
        message: y
      };
    }

   case "conversation_reset":
    {
      let r = e.new_conversation_id;
      if (typeof r !== "string" || r === "") return t("[sdkMessageAdapter] Dropping conversation_reset frame without a string new_conversation_id", {
        level: "error"
      }), {
        type: "ignored"
      };
      return {
        type: "conversation_reset",
        newConversationId: r
      };
    }

   default:
    return t(`[sdkMessageAdapter] Unknown message type: ${e.type}`), {
      type: "ignored"
    };
  }
}

function j5n(e) {
  return e.type === "result";
}

var z = 64, H = 128;

function I(e) {
  return typeof e === "string" && e.length > 0 && e.length <= H;
}

function X(e) {
  let n = "user_message_uuids" in e ? e.user_message_uuids : null, s = Array.isArray(n) ? n.filter(I).slice(0, z) : [];
  if (s.length > 0) return s;
  let r = "user_message_uuid" in e ? e.user_message_uuid : void 0;
  return I(r) ? [ r ] : void 0;
}

function fUo(e, n, s) {
  let r = X(e);
  return s.taskWake || (r === void 0 ? s.sent : r.some(a => n.has(a)));
}

function Vht(e) {
  let n = Rxr(), s = new Map(Object.entries(n.shape)), r = typeof e === "object" && e !== null && !Array.isArray(e) ? Is(e, (y, g) => g === "status" || (s.get(g)?.safeParse(y).success ?? !1)) : e, a = n.safeParse(r);
  if (a.success) return a.data;
  if (Ji().claim("remote_rate_limit_frame_drop")) i("tengu_remote_rate_limits_dropped", {
    reason: b("invalid_frame"),
    frames: 1
  });
  return;
}

function W5n() {
  return {
    retracted: new Set,
    inProgressToolUses: new Map,
    evictedToolUses: new Set,
    nestedUuidAliases: new Map
  };
}

function z5n(e, n, s) {
  let r = s.filter(a => a !== n);
  if (r.length > 0) e.nestedUuidAliases.set(n, r);
}

function kWe(e) {
  if (typeof e !== "object" || e === null) return null;
  let n = e, s = typeof n.uuid === "string" ? n.uuid : null;
  if (n.type === "system" && n.subtype === "model_refusal_fallback") {
    let r = T(n.retracted_message_uuids, s);
    return r ? {
      uuids: r,
      source: "retraction_banner"
    } : null;
  }
  if (n.type === "assistant") {
    let r = T(n.supersedes, s);
    return r ? {
      uuids: r,
      source: "supersedes"
    } : null;
  }
  return null;
}

function T(e, n) {
  if (!Array.isArray(e)) return null;
  let s = e.filter(r => typeof r === "string" && r !== n);
  return s.length > 0 ? s : null;
}

function Y(e, n) {
  if (n.size === 0) return e;
  let s = e.filter(r => !n.has(r.uuid));
  return s.length === e.length ? e : s;
}

function G5n(e, n, s) {
  for (let r of s) e.inProgressToolUses.set(r, n);
}

function Aun(e, n) {
  for (let s of n) e.inProgressToolUses.delete(s);
}

function Cun(e) {
  let {index: n, signal: s, surface: r, setMessages: a, setInProgressToolUseIDs: y} = e, g = N(s.uuids, l => !n.retracted.has(l));
  for (let l of s.uuids) {
    n.retracted.add(l);
    for (let _ of n.nestedUuidAliases.get(l) ?? []) n.retracted.add(_);
  }
  let m = [ ...n.inProgressToolUses ].filter(([, l]) => n.retracted.has(l)).map(([l]) => l);
  Aun(n, m);
  for (let l of m) n.evictedToolUses.add(l);
  if (m.length > 0 && y) y({
    action: "remove",
    ids: m
  });
  a(l => Y(l, n.retracted)), i("tengu_refusal_retraction_evicted", {
    surface: c(r),
    source: c(s.source),
    uuid_count: s.uuids.length,
    newly_retracted_count: g,
    tool_use_cleared_count: m.length
  });
}

function V5n(e, n, s, r) {
  if (r !== null && e.retracted.has(r)) return 0;
  let a = N(n, y => e.evictedToolUses.has(y));
  if (a > 0) i("tengu_refusal_retraction_orphan_tool_result", {
    surface: c(s),
    count: a
  });
  return a;
}

function mUo(e) {
  let {index: n, events: s, surface: r, setMessages: a, setInProgressToolUseIDs: y} = e, g = 0, m = 0, l = 0;
  for (let _ of s) {
    if (_.source !== "worker") {
      if (kWe(_.payload)) if (_.source === void 0) l++; else m++;
      continue;
    }
    let w = kWe(_.payload);
    if (w) g++, Cun({
      index: n,
      signal: w,
      surface: r,
      setMessages: a,
      setInProgressToolUseIDs: y
    });
  }
  if (m > 0) i("tengu_refusal_retraction_unauthenticated_signal", {
    surface: c(r),
    reason: b("source_mismatch"),
    count: m
  });
  if (l > 0) i("tengu_refusal_retraction_unauthenticated_signal", {
    surface: c(r),
    reason: b("source_missing"),
    count: l
  });
  return g;
}

function nUt(e, n, s) {
  if (!e.retracted.has(n)) return !1;
  return i("tengu_refusal_retraction_late_drop", {
    surface: c(s)
  }), !0;
}

function jLr(e, n) {
  if (n.type !== "system") return !1;
  switch (n.subtype) {
   case "background_tasks_changed":
    if (Array.isArray(n.tasks)) {
      e.clear();
      for (let s of n.tasks) if (typeof s?.task_id === "string") e.set(s.task_id, U(s.task_id, s, s.subagent_type));
    }
    return !0;

   case "task_started":
    if (typeof n.task_id === "string" && n.is_backgrounded !== !1) e.set(n.task_id, U(n.task_id, n, e.get(n.task_id)?.subagentType));
    return !0;

   case "task_notification":
    if (typeof n.task_id === "string") e.delete(n.task_id);
    return !0;

   case "task_progress":
   case "task_updated":
    return !0;

   default:
    return !1;
  }
}

var Q = 256;

function J(e, n) {
  if (n.type !== "system") return;
  switch (n.subtype) {
   case "background_tasks_changed":
    if (Array.isArray(n.tasks)) {
      for (let s of n.tasks) if (s?.awaited !== !0) D(e, s?.task_id, s?.ambient);
    }
    return;

   case "task_started":
    if (n.is_backgrounded !== !1 && n.awaited !== !0) D(e, n.task_id, n.ambient);
    return;

   case "task_updated":
    if (n.patch?.is_backgrounded === !0) D(e, n.task_id);
    return;

   default:
    return;
  }
}

function D(e, n, s) {
  if (typeof n !== "string" || s === !0 || e.has(n)) return;
  if (e.size >= Q) {
    let r = e.values().next().value;
    if (r !== void 0) e.delete(r);
  }
  e.add(n);
}

function Z(e, n) {
  return n.type === "system" && n.subtype === "task_notification" && typeof n.task_id === "string" && e.delete(n.task_id);
}

function Run(e, n) {
  return J(e.awaitingFinish, n), {
    backgroundTaskEnded: Z(e.awaitingFinish, n),
    isTaskLifecycleFrame: jLr(e.running, n)
  };
}

function U(e, n, s) {
  let r = a => typeof a === "string" ? Ks(a, {
    maxCodeUnits: gJe
  }) : void 0;
  return {
    id: e,
    taskType: r(n.task_type),
    subagentType: r(s),
    description: r(n.description) ?? "",
    ambient: n.ambient === !0
  };
}

function K5n(e, n) {
  return e.length === n.length && e.every((s, r) => s.id === n[r]?.id && s.taskType === n[r]?.taskType && s.subagentType === n[r]?.subagentType && s.description === n[r]?.description && s.ambient === n[r]?.ambient);
}

var ee = 100, te = 256;

function xun(e) {
  if (e.type !== "system" || e.subtype !== "session_metadata") return;
  let {metadata: n} = e;
  if (typeof n !== "object" || n === null) return;
  let s = "artifacts" in n ? n.artifacts : void 0;
  return s === null || Array.isArray(s) ? s : void 0;
}

function WLr(e, n) {
  let s = oe(n ?? []), r = Object.entries(e.frameUrls).filter(([, _]) => _.fromCloudSession !== !0);
  if (s.length === 0 && r.length === Object.keys(e.frameUrls).length) return e;
  let a = new Set(r.map(([_]) => _)), y = Object.fromEntries([ ...r, ...s.filter(([_]) => !a.has(_)) ]), g = Object.entries(e.frameUrls), m = Object.entries(y);
  return g.length === m.length && g.every(([_, w], S) => {
    let [k, A] = m[S], M = Object.entries(w), v = Object.entries(A);
    return _ === k && M.length === v.length && M.every(([E, x]) => v.some(([K, C]) => K === E && C === x));
  }) ? e : {
    ...e,
    frameUrls: y
  };
}

var re = p(() => u({
  url: o(),
  title: o().optional().catch(void 0),
  updated_at: o().optional().catch(void 0)
}));

function oe(e) {
  let n = new Map;
  for (let s of e) {
    let r = re().safeParse(s);
    if (!r.success) continue;
    let {url: a, title: y, updated_at: g} = r.data, m = Yt(a);
    if (m === null) continue;
    let l = g !== void 0 ? Date.parse(g) : NaN, _ = {
      url: Hn(m),
      updatedAt: Number.isFinite(l) ? l : 0,
      ...y !== void 0 && y !== "" && {
        title: ne(y, te)
      },
      fromCloudSession: !0
    }, w = n.get(m.slug);
    if (w === void 0 || _.updatedAt >= w.updatedAt) n.set(m.slug, _);
  }
  return [ ...n ].sort(([, s], [, r]) => s.updatedAt - r.updatedAt).slice(-ee).map(([s, r]) => [ `${YW}${s}`, r ]);
}

function Pun(e, n) {
  if (n.skills === void 0 && n.plugins === void 0) return e;
  let s = n.tools ?? e?.tools, r = n.slashCommands ?? e?.commands;
  return {
    skills: n.skills ?? [],
    plugins: n.plugins ?? [],
    ...s !== void 0 && {
      tools: s
    },
    ...r !== void 0 && {
      commands: r
    }
  };
}

export { pUo, ULr, tUt, Ght, BLr, U5n, B5n, hMe, j5n, fUo, Vht, W5n, z5n, kWe, G5n, Aun, Cun, V5n, mUo, nUt, jLr, Run, K5n, xun, WLr, Pun };
