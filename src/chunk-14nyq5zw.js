// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { q } from "./chunk-3pqddg8f.js";

import { b, c, pe } from "./chunk-hwdwjvh8.js";

import { vh, Wi, Do, wA, t } from "./chunk-kawq2919.js";

import { I } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m } from "./chunk-3ykz5st8.js";

import { LZ } from "./chunk-xywp7esx.js";

import { sZ } from "./chunk-gmq0qwep.js";

import { Zne, trt, E0e, IT } from "./chunk-84yp45y8.js";

import { pJn, fJn, $jt, mJn, $ke, gJn, hJn, _Ze, uVo, pVo, fVo, yJn, rle, Ijr, _Jn, Vhn, wbt, Khn } from "./chunk-s0van10s.js";

import { ryt, UEe, t6n, hQe, r6n, mUt } from "./chunk-25gpymxv.js";

import { w6, bge } from "./chunk-21aa0fxn.js";

import { ye } from "./chunk-ne9evs39.js";

var J = 65536;

function K(e) {
  return Buffer.byteLength(Wi(Wi(e)).slice(1, -1));
}

function O(e) {
  let r = Wi(e).slice(1, -1);
  return Buffer.byteLength(Wi(r).slice(1, -1));
}

function j(e) {
  let r = t6n(e);
  if (r <= UEe) return {
    payload: e,
    trim: null
  };
  using h = vh`fitFeedbackPayloadToBudget(${r})`;
  let o = r - (UEe - J), s = e.transcript.map(n => K(n) + 1), p = s.reduce((n, k) => n + k, 0), w = e.rawTranscriptJsonl === void 0 ? 0 : O(e.rawTranscriptJsonl), D = o <= p ? p - o : Math.max(0, p - Math.max(0, o - w)), {start: T, keptBytes: _, oversized: f} = r6n(s, D), l = e.transcript.slice(T), M = f.size === 0 ? l : l.filter((n, k) => !f.has(T + k)), B = o - (p - _), u = e.rawTranscriptJsonl, F = u === void 0 ? "absent" : "untouched";
  if (B > 0 && u !== void 0) {
    let n = w - B;
    if (n <= 0) u = void 0, F = "omitted"; else {
      let k = u.split(`\n`), x = k.map(E => O(E + `\n`)), {start: A, oversized: z} = r6n(x, n), P = k.slice(A), L = (z.size === 0 ? P : P.filter((E, H) => !z.has(A + H))).join(`\n`);
      if (L === "") u = void 0, F = "omitted"; else u = L, F = "reduced";
    }
  }
  let d = {
    keptMessageCount: M.length,
    totalMessageCount: e.transcript.length,
    oversizedMessageCount: f.size,
    rawTail: F,
    rawTailKeptBytes: u === void 0 ? 0 : Buffer.byteLength(u)
  }, v = W(d);
  if (v === null) return {
    payload: e,
    trim: null
  };
  let {rawTranscriptJsonl: y, ...R} = e, S = {
    ...R,
    message_count: M.length,
    description: `${e.description}\n${v}`,
    transcript: M,
    ...u !== void 0 && {
      rawTranscriptJsonl: u
    }
  }, C = t6n(S);
  if (C > UEe) t(`fitFeedbackPayloadToBudget: still ${C} bytes after trim (budget ${UEe})`, {
    level: "error"
  });
  return {
    payload: S,
    trim: d
  };
}

function W(e) {
  let r = [];
  if (e.keptMessageCount < e.totalMessageCount) r.push(`kept ${e.keptMessageCount} of ${e.totalMessageCount} transcript messages (newest kept first)`);
  if (e.rawTail === "reduced") r.push(`kept ${Math.max(1, Math.round(e.rawTailKeptBytes / 1024))} KiB of the raw session log (newest kept first)`); else if (e.rawTail === "omitted") r.push("omitted the raw session log");
  if (r.length === 0) return null;
  return `transcript_truncated: ${r.join("; ")} (trimmed client-side to fit the upload size limit)`;
}

function V(e, r = "panel") {
  let h = _Ze(e.request_ids), o = hJn(e.area), s = uVo(e.failure_mode), p = pVo(e.task_category), w = yJn(e.effort), D = fVo(e.thinking_type), T = rle(e.thinking_budget), _ = rle(e.message_count), f = rle(e.assistant_turn_count), l = rle(e.subagent_count);
  return [ `[${e.type}] ${$jt(e.title)}`, "", mJn(e.details), "", "---", r === "card_send_as_is" ? "Drafted by Claude via the SendFeedback tool; approved by the user from the above-prompt card without full review." : "Drafted by Claude via the SendFeedback tool; reviewed and approved by the user before sending.", `trigger: ${e.trigger}`, ...o !== void 0 ? [ `area: ${o}` ] : [], ...s !== void 0 ? [ `failure_mode: ${s}` ] : [], ...p !== void 0 ? [ `task_category: ${p}` ] : [], `draft_id: ${e.draft_id}`, `drafted_at: ${e.created_at}`, `source_session_id: ${e.source_session_id}`, `model: ${gJn(e.model)}`, `cli_version: ${$ke(e.cli_version, pJn)}`, `os: ${$ke(e.os, fJn)}`, ...w !== void 0 ? [ `effort: ${w}` ] : [], ...D !== void 0 ? [ `thinking: ${D}${T !== void 0 ? ` (budget ${T})` : ""}` ] : [], ...f !== void 0 ? [ `turns: ${f} assistant${_ !== void 0 ? ` / ${_} messages` : ""}${l !== void 0 && l > 0 ? `, ${l} ${I(l, "subagent")}` : ""}` ] : [], ...h.length > 0 ? [ `request_ids: ${h.join(", ")}` ] : [] ].join(`\n`);
}

function Y(e) {
  let r = [];
  using h = vh`parseDraftTranscriptMessages(${e.length})`;
  for (let o of e.split(`\n`)) {
    if (!o) continue;
    let s;
    try {
      s = Do(o);
    } catch {
      continue;
    }
    if (typeof s !== "object" || s === null) continue;
    if (s.type !== "user" && s.type !== "assistant") continue;
    if (typeof s.uuid !== "string" || typeof s.timestamp !== "string" || s.isSidechain === !0 || !s.message) continue;
    r.push(s.type === "user" ? {
      type: "user",
      uuid: s.uuid,
      timestamp: s.timestamp,
      message: s.message,
      ...s.isMeta === !0 && {
        isMeta: !0
      },
      ...s.toolUseResult !== void 0 && {
        toolUseResult: s.toolUseResult
      },
      ...s.isCompactSummary === !0 && {
        isCompactSummary: !0
      },
      ...s.repeatsCompactSummary === !0 && {
        repeatsCompactSummary: !0
      }
    } : {
      type: "assistant",
      uuid: s.uuid,
      timestamp: s.timestamp,
      message: s.message,
      requestId: s.requestId
    });
  }
  return r;
}

var N = "Feedback payload too large. Try again without the transcript, or shorten the details.";

async function h7e({draft: e, includeTranscript: r, currentSessionMessages: h, surface: o = "cli", via: s = "panel", signal: p, storageV5: w, credentials: D, host: T}) {
  let _ = e.source_session_id === q(), f = [], l;
  if (r && e.transcript_ref) {
    let y = await Ijr(e);
    if (_) {
      if (f = IT(w6(h, {
        host: T
      })), y !== null) try {
        let {content: R, bytesRead: S, bytesTotal: C} = await wA(y, ryt), n = R;
        if (S < C) n = n.slice(n.indexOf(`\n`) + 1);
        if (Zne(n)) t("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers"); else l = bge(E0e(n), {
          host: T
        }).jsonl;
      } catch {}
    } else if (y !== null) try {
      let {content: R, bytesRead: S, bytesTotal: C} = await wA(y, ryt), n = R;
      if (S < C) n = n.slice(n.indexOf(`\n`) + 1);
      if (!_Jn(n, e)) t("draft transcript withheld from feedback submit: identity_not_corroborated"); else {
        let k = Y(n);
        if (trt(k)) t("draft transcript withheld from feedback submit: contains_3p_transcript_markers"); else f = w6(k, {
          host: void 0
        });
        if (Zne(n)) t("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers"); else l = bge(E0e(n), {
          host: void 0
        }).jsonl;
      }
    } catch {}
  }
  let M = _Ze(e.request_ids).at(-1) ?? null, B = {
    latestAssistantMessageId: M,
    latestAssistantAPIMessageId: null,
    lastInterruptedAssistantAPIMessageId: null,
    message_count: f.length,
    datetime: (new Date).toISOString(),
    description: V(e, s),
    surface: o,
    platform: a.platform,
    gitRepo: !1,
    commitSha: null,
    version: e.cli_version,
    transcript: f,
    ...l && {
      rawTranscriptJsonl: l
    }
  }, {payload: u, trim: F} = j(B), d = await mUt(u, p, void 0, D);
  if (d.success) {
    try {
      await Vhn(e.draft_id, w);
    } catch (y) {
      t(`feedbackDrafts: post-submit draft delete failed: ${y instanceof Error ? y.name : "unknown"}`, {
        level: "error"
      }), i("tengu_feedback_draft_delete_failed", {
        phase: b("post_submit")
      });
    }
    if (_) Khn();
    if (s !== "card_send_as_is") wbt(e.draft_id);
    return i("tengu_feedback_draft_submitted", {
      type: c(e.type),
      trigger: c(e.trigger),
      failure_mode: pe(e.failure_mode),
      task_category: pe(e.task_category),
      transcript_included: u.transcript.length > 0 || u.rawTranscriptJsonl ? b("true") : b("false"),
      transcript_trimmed: F !== null ? b("true") : b("false"),
      transcript_requested: r ? b("true") : b("false"),
      transcript_available: e.transcriptAvailable ? b("true") : b("false"),
      from_this_session: _ ? b("true") : b("false"),
      feedback_id: ye(d.feedbackId),
      last_request_id: ye(M)
    }), g("feedback_draft_submit"), {
      success: !0,
      feedbackId: d.feedbackId
    };
  }
  if (m("feedback_draft_submit", d.failureReason ?? "network_error", {
    from_this_session: _ ? b("true") : b("false")
  }), d.isZdrOrg) return {
    success: !1,
    error: "Feedback collection is not available for organizations with custom data retention policies."
  };
  if (d.failureReason === "auth_error") return {
    success: !1,
    error: !LZ().error && hQe() || "Couldn't send feedback: not signed in. Run /login, then retry."
  };
  if (d.payloadTooLarge) return {
    success: !1,
    error: N,
    payloadTooLarge: !0
  };
  if (d.failureReason === "policy_blocked") return {
    success: !1,
    error: sZ() ?? "Feedback is disabled by your organization's policy."
  };
  return {
    success: !1,
    error: `Couldn't send feedback${d.statusCode ? ` (server returned ${d.statusCode})` : d.failureReason === "timeout" ? " (request timed out)" : " (couldn't reach the service)"}. The draft is still queued. Try again later.`
  };
}

async function ZBt(e, r, h) {
  let o = await Vhn(e.draft_id, h);
  if (wbt(e.draft_id), !o) return;
  if (e.source_session_id === q()) Khn();
  i("tengu_feedback_draft_discarded", {
    type: c(e.type),
    trigger: c(e.trigger),
    discarded_via: c(r)
  });
}

export { h7e, ZBt };
