// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le, ys } from "./chunk-2v9tfgc3.js";

import { K, lt, B, q, ve, he } from "./chunk-3pqddg8f.js";

import { Awe, jp, $rn, Fc, $n, m0t, k } from "./chunk-xywp7esx.js";

import { xu, kd } from "./chunk-8yperama.js";

import { a } from "./chunk-j016gcgm.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { ja, qf } from "./chunk-s2t7g8m9.js";

import { Fa } from "./chunk-q6wab2jw.js";

import { fY, $it, dxt, vbe, oRe, cxt, yDn, uxt, kbe, Oao, Mao, Qgr, Ws } from "./chunk-7xj6dhxv.js";

import { _Xt } from "./chunk-bzekf4tc.js";

import { On } from "./chunk-3kd8r7rn.js";

import { we } from "./chunk-m8ez8fhk.js";

var p = we(ja(), 1), St = we(qf(), 1);

import { createHash as Mt } from "crypto";

var Rt = 61440;

function Ct() {
  return Math.min(a.CLAUDE_CODE_OTEL_CONTENT_MAX_LENGTH ?? Rt, a.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0, a.OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0, a.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0);
}

function cP(n) {
  let e = Ct();
  if (n.length <= e) return {
    content: n,
    truncated: !1
  };
  let s = `\n\n[TRUNCATED - Content exceeds ${e >= 1024 ? `${Math.floor(e / 1024)}KB` : `${e} character`} limit]`;
  if (s.length >= e) return {
    content: n.slice(0, e),
    truncated: !0
  };
  return {
    content: n.slice(0, e - s.length) + s,
    truncated: !0
  };
}

function M() {
  return a.OTEL_LOG_USER_PROMPTS;
}

class J {
  seenHashes=new Set;
  lastReportedMessage=new Map;
  emittedUserPromptForSessionId=void 0;
}

var Q = new lt(() => new J);

function nfs() {
  let n = Q.of(B());
  n.seenHashes.clear(), n.lastReportedMessage.clear();
}

function yR() {
  if (!(a.ENABLE_BETA_TRACING_DETAILED && Boolean(process.env.BETA_TRACING_ENDPOINT) && !he())) return !1;
  return ve() || k("tengu_trace_lantern", !1);
}

function V(n) {
  return Mt("sha256").update(n).digest("hex").slice(0, 12);
}

function Pt(n) {
  return `sp_${V(n)}`;
}

function Z(n) {
  let e = _(n.message.content);
  return `msg_${V(e)}`;
}

function j(n) {
  return /^<system-reminder>\n?([\s\S]*?)\n?<\/system-reminder>$/.exec(n.trim())?.[1]?.trim() || null;
}

function z(n, e) {
  let r = [], s = [];
  for (let o of n) {
    if (o.type === "api_system") {
      s.push(o.message.content);
      continue;
    }
    let i = o.message.content;
    if (typeof i === "string") {
      let u = j(i);
      if (u) s.push(u); else if (e) r.push(`[USER]\n${i}`);
    } else if (Array.isArray(i)) {
      for (let u of i) if (u.type === "text") {
        let c = j(u.text);
        if (c) s.push(c); else if (e) r.push(`[USER]\n${u.text}`);
      } else if (u.type === "tool_result") {
        if (typeof u.content === "string") {
          let c = j(u.content);
          if (c) s.push(c); else if (e) r.push(`[TOOL RESULT: ${u.tool_use_id}]\n${u.content}`);
        } else if (e) r.push(`[TOOL RESULT: ${u.tool_use_id}]\n${_(u.content)}`);
      }
    }
  }
  return {
    contextParts: r,
    systemReminders: s
  };
}

function kt(n, e) {
  let {systemReminders: r} = z(n, !1);
  return {
    contextParts: [ e ],
    systemReminders: r.map(() => e)
  };
}

function wt(n, e, r) {
  let s = yDn(n.map(o => o.message), r, e.map(o => o.message));
  return n.map((o, i) => s[i] === o.message ? o : {
    ...o,
    message: s[i]
  });
}

var Lt = () => oRe(B().host);

function tt(n, e) {
  if (!yR() || !M()) return;
  let {content: r, truncated: s} = cP(`[USER PROMPT]\n${vbe(() => oRe(B().host), void 0, e)}`);
  n.setAttributes({
    new_context: r,
    ...s && {
      new_context_truncated: !0,
      new_context_original_length: e.length
    }
  });
}

function et(n, e, r, s) {
  if (!yR()) return;
  let o = Q.of(B()), i = c => r !== void 0 && s === void 0 ? {
    withheld: "account_memory_text_not_identified"
  } : dxt(s ?? Lt, e?.querySource, c), u = c => {
    let d = i(g => cxt(c, g));
    return "withheld" in d ? $it(d.withheld) : d.value;
  };
  if (e?.systemPrompt) {
    let {systemPrompt: c} = e, d = Pt(c), g, f = () => g ??= i(h => cxt(c, h));
    if (n.setAttribute("system_prompt_hash", d), M()) {
      let h = f();
      n.setAttribute("system_prompt_preview", "withheld" in h ? $it(h.withheld) : h.value.slice(0, 500));
    }
    n.setAttribute("system_prompt_length", e.systemPrompt.length);
    let m = M() ? f() : void 0;
    if (m !== void 0 && "value" in m && !o.seenHashes.has(d)) {
      o.seenHashes.add(d);
      let {content: h, truncated: l} = cP(m.value);
      Ws("system_prompt", {
        system_prompt_hash: d,
        system_prompt: h,
        system_prompt_length: String(e.systemPrompt.length),
        ...l && {
          system_prompt_truncated: "true"
        }
      });
    }
  }
  if (e?.userSystemPrompt && M()) {
    let c = q();
    if (o.emittedUserPromptForSessionId !== c) {
      o.emittedUserPromptForSessionId = c;
      let {content: d, truncated: g} = cP(u(e.userSystemPrompt));
      n.setAttributes({
        user_system_prompt: d,
        ...g && {
          user_system_prompt_truncated: !0,
          user_system_prompt_original_length: e.userSystemPrompt.length
        }
      });
    }
  }
  if (e?.tools) try {
    let d = Y(e.tools).map(g => {
      let f = _(g), m = V(f);
      return {
        name: typeof g.name === "string" ? g.name : "unknown",
        hash: m,
        json: f
      };
    });
    n.setAttribute("tools", _(d.map(({name: g, hash: f}) => ({
      name: g,
      hash: f
    })))), n.setAttribute("tools_count", d.length);
    for (let {name: g, hash: f, json: m} of d) if (!o.seenHashes.has(`tool_${f}`)) {
      o.seenHashes.add(`tool_${f}`);
      let {content: h, truncated: l} = cP(m);
      Ws("tool", {
        tool_name: $n(g),
        tool_hash: f,
        tool: h,
        ...l && {
          tool_truncated: "true"
        }
      });
    }
  } catch {
    n.setAttribute("tools_parse_error", !0);
  }
  if (r && r.length > 0 && e?.querySource) {
    let c = e.querySource, d = o.lastReportedMessage.get(c), g = 0;
    if (d) {
      let l = r[d.index];
      if (l && Z(l) === d.hash) g = d.index + 1;
    }
    let f = r.slice(g).filter(l => l.type === "user" || l.type === "api_system");
    if (f.length > 0) {
      let l = M(), y = l ? i(R => z(wt(f, r, R), !0)) : {
        value: z(f, !1)
      }, {contextParts: E, systemReminders: U} = "withheld" in y ? kt(f, $it(y.withheld)) : y.value;
      if (n.setAttribute("new_context_message_count", f.length), U.length > 0) n.setAttribute("system_reminders_count", U.length);
      if (E.length > 0 && l) {
        let R = E.join(`\n\n---\n\n`), {content: H, truncated: W} = cP(R);
        n.setAttributes({
          new_context: H,
          ...W && {
            new_context_truncated: !0,
            new_context_original_length: R.length
          }
        });
      }
      if (U.length > 0 && l) {
        let R = U.join(`\n\n---\n\n`), {content: H, truncated: W} = cP(R);
        n.setAttributes({
          system_reminders: H,
          ...W && {
            system_reminders_truncated: !0,
            system_reminders_original_length: R.length
          }
        });
      }
    }
    let m = r.length - 1, h = r[m];
    if (h) o.lastReportedMessage.set(c, {
      index: m,
      hash: Z(h)
    });
  }
}

function nt(n, e) {
  if (!yR() || !M() || !e) return;
  let r = s => vbe(e.accountMemoryKeys, e.querySource, s);
  if (e.modelOutput !== void 0) {
    let {content: s, truncated: o} = cP(r(e.modelOutput));
    if (n["response.model_output"] = s, o) n["response.model_output_truncated"] = !0, 
    n["response.model_output_original_length"] = e.modelOutput.length;
  }
}

function rt(n, e, r, s = !1) {
  if (!yR() || !Fc()) return;
  let {content: o, truncated: i} = cP(`[TOOL INPUT: ${e}]\n${s ? fY(r) : r}`);
  n.setAttributes({
    tool_input: o,
    ...i && {
      tool_input_truncated: !0,
      tool_input_original_length: r.length
    }
  });
}

function st(n, e, r, s = !1) {
  if (!yR() || !m0t()) return;
  let {content: o, truncated: i} = cP(`[TOOL RESULT: ${e}]\n${s ? fY(r) : r}`);
  if (n.new_context = o, i) n.new_context_truncated = !0, n.new_context_original_length = r.length;
}

class ot {
  recorder=null;
}

var Ot = new K(() => new ot);

function b() {
  return Ot.of(B().host).recorder;
}

function rfs() {
  let n = a.CLAUDE_CODE_PERFETTO_TRACE;
  t(`[Perfetto] initializePerfettoTracing called, env value: ${n}`);
}

function $Ne() {
  return b() !== null;
}

function JHn(n, e, r) {
  let s = b();
  if (!s) return;
  s.registerAgent(n, e, r);
}

function FNe(n) {
  let e = b();
  if (!e) return;
  e.unregisterAgent(n);
}

function it(n) {
  let e = b();
  if (!e) return "";
  return e.startLLMRequestSpan(n);
}

function at(n, e) {
  let r = b();
  if (!r || !n) return;
  r.endLLMRequestSpan(n, e);
}

function ut(n, e) {
  let r = b();
  if (!r) return "";
  return r.startToolSpan(n, e);
}

function ct(n, e) {
  let r = b();
  if (!r || !n) return;
  r.endToolSpan(n, e);
}

function pt(n) {
  let e = b();
  if (!e) return "";
  return e.startUserInputSpan(n);
}

function dt(n, e) {
  let r = b();
  if (!r || !n) return;
  r.endUserInputSpan(n, e);
}

function ft(n, e, r) {
  let s = b();
  if (!s) return;
  s.emitInstant(n, e, r);
}

function gt(n) {
  let e = b();
  if (!e) return "";
  return e.startInteractionSpan(n);
}

function mt(n) {
  let e = b();
  if (!e || !n) return;
  e.endInteractionSpan(n);
}

var A = new WeakMap, I = p.createContextKey("cc.interaction_state"), P = p.createContextKey("cc.tool_state"), w = p.createContextKey("cc.blocked_state"), G = p.createContextKey("cc.execution_state"), _t = p.createContextKey("cc.subagent_state"), Tt = p.createContextKey("cc.turn_trace_contexts");

class bt {
  lastSequence=0;
}

var qt = new K(() => new bt);

function lao() {
  let n = process.env.CLAUDE_CODE_ENHANCED_TELEMETRY_BETA ?? process.env.ENABLE_ENHANCED_TELEMETRY_BETA;
  if (Le(n)) return !0;
  if (ys(n)) return !1;
  return !1;
}

function n1() {
  return lao() || yR();
}

function roe() {
  return !1;
}

function QHn(n, e) {
  return;
}

function rxt(n, e) {
  n.setStatus(F(e));
}

function yt(n, e) {
  if (!e) return;
  n.setAttribute("tool_use_id", e), n.setAttribute("gen_ai.tool.call.id", e);
}

function _R() {
  return _Xt();
}

function Ut() {
  let n = {}, e = q();
  if (L.test(e)) n["session.id"] = e;
  let r = a.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (r !== void 0 && L.test(r)) n["ccr.session.id"] = r;
  return n;
}

function Et() {
  return _R() ? Ut() : uxt();
}

var Bt = new Set([ "rpc.service", "mcp_tool" ]);

function N(n) {
  if (!_R()) return n;
  let e = /^a(?:[\w-]{1,63}-)?([0-9a-f]{16})$/.exec(n);
  if (e) return `a${e[1]}`;
  return /^(?:hook-agent-)?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(n) ? n : void 0;
}

var L = /^[A-Za-z0-9_.-]{1,64}$/, ht = {
  [kd]: /^[a-z][a-z0-9_]{0,39}$/,
  [xu]: /^[A-Za-z][A-Za-z0-9_]{0,39}$/,
  playwright: /^browser_[a-z_]{1,40}$/
};

function $t(n) {
  if (n.startsWith("mcp__")) {
    let [, e, ...r] = n.split("__"), s = e !== void 0 && Object.hasOwn(ht, e) ? ht[e] : void 0;
    return s !== void 0 && s.test(r.join("__")) && L.test(n) ? n : "mcp_other";
  }
  return !n.includes("__") && L.test(n) ? n : "other";
}

function Nt(n) {
  let e = Awe(n)?.replaceAll(":", ".");
  return e !== void 0 && L.test(e) ? e : void 0;
}

var Ft = /^[A-Za-z][A-Za-z0-9_]{0,47}$/;

function X(n, e) {
  let r = e?.replace(/[^A-Za-z0-9_]/g, "_");
  return {
    ...n !== void 0 && !_R() && {
      error: n
    },
    ...r !== void 0 && Ft.test(r) && {
      error_class: r
    }
  };
}

function dao(n) {
  return `${n.name} (${n.message.length} chars; text not recorded)`;
}

function F(n) {
  return {
    code: p.SpanStatusCode.ERROR,
    ...n && !_R() && {
      message: n
    }
  };
}

function T() {
  return p.trace.getTracer("com.anthropic.claude_code.tracing", "1.0.0");
}

function S() {
  return Qgr();
}

function O(n) {
  let e = S().getValue(n);
  return e && !e.ended ? e : void 0;
}

function v(n, e) {
  A.set(e.span, e);
  let r = p.trace.setSpan(e.priorContext, e.span).setValue(n, e);
  if (kbe.enterWith(r), n === I) Oao(r);
}

function x(n, e) {
  if (e.ended = !0, n === I && Mao()?.getValue(n) === e) Oao(void 0);
  if (S().getValue(n) === e) kbe.enterWith(e.priorContext);
}

function C(n, e = {}) {
  return {
    ...Et(),
    "span.type": n,
    ...e
  };
}

function Dt(n) {
  if (!n) return [];
  return n.linked.flatMap(({traceparent: e}) => {
    let r = vt(e);
    return r ? [ {
      context: r,
      attributes: {
        "link.type": "queued_send"
      }
    } ] : [];
  });
}

function At() {
  return S().getValue(Tt);
}

function ZHn() {
  return At()?.contexts;
}

function Lgr() {
  let n = At();
  if (n) n.contexts = void 0;
}

function It(n, e) {
  if (jp(e)) return;
  let r = e.agentId !== void 0 ? N(e.agentId) : void 0;
  if (r !== void 0) n.setAttribute("agent_id", r);
  let s = e.parentAgentId !== void 0 ? N(e.parentAgentId) : void 0;
  if (s !== void 0) n.setAttribute("parent_agent_id", s);
}

function Ht(n, e) {
  let r = $Ne() ? gt(n) : void 0, s = S();
  if (!n1()) {
    if (r) {
      let E = p.trace.getActiveSpan() || T().startSpan("dummy");
      return v(I, {
        span: E,
        startTime: performance.now(),
        attributes: {
          "span.type": "interaction"
        },
        perfettoSpanId: r,
        priorContext: s
      }), E;
    }
    return p.trace.getActiveSpan() || T().startSpan("dummy");
  }
  let o = T(), u = a.OTEL_LOG_USER_PROMPTS && !_R() ? vbe(() => oRe(B().host), void 0, n) : "<REDACTED>", c = ++qt.of(B().host).lastSequence, d = C("interaction", {
    user_prompt: u,
    user_prompt_length: n.length,
    "interaction.sequence": c
  }), g = _R() ? e : void 0, f = g?.parent ? D.extract(s, {
    traceparent: g.parent.traceparent
  }, p.defaultTextMapGetter) : s, m = f === s && ve() && a.TRACEPARENT ? p.propagation.extract(s, {
    traceparent: a.TRACEPARENT,
    tracestate: a.TRACESTATE
  }) : s, h = f !== s ? f : m;
  d["parent.source"] = f !== s ? "event" : m !== s ? "env" : "none";
  let l = Dt(g);
  d.queued_sends = l.length;
  let y = o.startSpan("claude_code.interaction", {
    attributes: d,
    links: l
  }, h);
  if (!_R()) tt(y, n);
  return v(I, {
    span: y,
    startTime: performance.now(),
    attributes: d,
    perfettoSpanId: r,
    priorContext: s
  }), y;
}

function eDn(n, e, r) {
  let [s, o] = typeof e === "function" ? [ void 0, e ] : [ e, r ], i = {
    contexts: s
  };
  return kbe.with(S().setValue(Tt, i), () => {
    let u = S();
    Ht(n, s);
    let c = S();
    try {
      return kbe.with(c, o);
    } finally {
      if (S() === c) kbe.enterWith(u);
    }
  });
}

function _be() {
  let n = O(I);
  if (!n) return;
  if (n.perfettoSpanId) mt(n.perfettoSpanId);
  if (!n1()) {
    x(I, n);
    return;
  }
  let e = Math.max(0, Math.round(performance.now() - n.startTime));
  n.span.setAttributes({
    "interaction.duration_ms": e
  }), n.span.end(), x(I, n);
}

function Ngr(n, e, r, s, o, i, u) {
  let c = $Ne() ? it({
    model: n,
    querySource: i ?? r?.querySource,
    messageId: void 0
  }) : void 0, d = S();
  if (!n1()) {
    if (c) {
      let E = p.trace.getActiveSpan() || T().startSpan("dummy");
      return A.set(E, {
        span: E,
        startTime: performance.now(),
        attributes: {
          model: n
        },
        perfettoSpanId: c,
        priorContext: d
      }), E;
    }
    return p.trace.getActiveSpan() || T().startSpan("dummy");
  }
  let g = T(), f = S().getValue(P), m = _R() ? On(n) : n, h = C("llm_request", {
    model: m,
    "gen_ai.system": "anthropic",
    "gen_ai.request.model": m,
    "llm_request.context": f ? "tool" : O(I) ? "interaction" : "standalone",
    speed: o ? "fast" : "normal"
  }), l = g.startSpan("claude_code.llm_request", {
    attributes: h
  }, d);
  if (r?.querySource && !_R()) l.setAttribute("query_source", r.querySource);
  let y = Nt(i ?? r?.querySource);
  if (y !== void 0) l.setAttribute("query_source_safe", y);
  if (e && !jp(e)) {
    if (It(l, e), !_R()) l.setAttributes($rn(e));
  }
  if (!_R()) et(l, r, s, u);
  return A.set(l, {
    span: l,
    startTime: performance.now(),
    attributes: h,
    perfettoSpanId: c,
    priorContext: d
  }), l;
}

function $gr(n, {attempt: e, clientRequestId: r}) {
  let s = {
    attempt: e
  };
  if (r !== void 0) s.client_request_id = r;
  if (n && n1()) n.addEvent("gen_ai.request.attempt", s);
  ft("LLM Attempt", "api,attempt", s);
}

var D = new St.W3CTraceContextPropagator;

function vt(n) {
  let e = D.extract(p.ROOT_CONTEXT, {
    traceparent: n
  }, p.defaultTextMapGetter);
  return p.trace.getSpanContext(e);
}

function iXt(n, e) {
  if (!n) return;
  let r = A.get(n);
  if (!r || r.ended) return;
  r.ended = !0;
  let s = Math.max(0, Math.round(performance.now() - r.startTime));
  if (e?.error !== void 0) e = {
    ...e,
    error: vbe(e.accountMemoryKeys ?? (() => oRe(B().host)), e.querySource, e.error)
  };
  if (r.perfettoSpanId) at(r.perfettoSpanId, {
    ttftMs: e?.ttftMs,
    ttltMs: s,
    promptTokens: e?.inputTokens,
    outputTokens: e?.outputTokens,
    cacheReadTokens: e?.cacheReadTokens,
    cacheCreationTokens: e?.cacheCreationTokens,
    success: e?.success,
    error: e?.error,
    requestSetupMs: e?.requestSetupMs,
    attemptStartTimes: e?.attemptStartTimes,
    requestId: e?.requestId,
    clientRequestId: e?.clientRequestId
  });
  if (!n1()) return;
  let o = {
    duration_ms: s
  };
  if (e) {
    if (e.inputTokens !== void 0) o.input_tokens = e.inputTokens;
    if (e.outputTokens !== void 0) o.output_tokens = e.outputTokens;
    if (e.cacheReadTokens !== void 0) o.cache_read_tokens = e.cacheReadTokens;
    if (e.cacheCreationTokens !== void 0) o.cache_creation_tokens = e.cacheCreationTokens;
    if (e.success !== void 0) o.success = e.success;
    if (e.statusCode !== void 0) o.status_code = e.statusCode;
    if (Object.assign(o, X(e.error, e.errorClass)), e.attempt !== void 0) o.attempt = e.attempt;
    if (e.hasToolCall !== void 0) o["response.has_tool_call"] = e.hasToolCall;
    if (e.requestId !== void 0) o.request_id = e.requestId, o["gen_ai.response.id"] = e.requestId;
    if (e.clientRequestId !== void 0) o.client_request_id = e.clientRequestId;
    if (e.ttftMs !== void 0) o.ttft_ms = e.ttftMs;
    if (e.firstContentMs !== void 0) o.first_content_ms = e.firstContentMs;
    if (e.effort !== void 0) o.effort = e.effort;
    if (!_R()) nt(o, e);
  }
  if (r.span.setAttributes(o), e?.stopReason !== void 0) r.span.setAttribute("stop_reason", e.stopReason), 
  r.span.setAttribute("gen_ai.response.finish_reasons", [ e.stopReason ]);
  if (e?.success === !1) r.span.setStatus(F(e.error));
  if (e?.traceresponse) {
    let i = vt(e.traceresponse);
    if (i) r.span.addLink({
      context: i,
      attributes: {
        "link.type": "parent_of"
      }
    });
  }
  r.span.end();
}

function ofs(n, e, r, s, o, i = !1) {
  let u = $Ne() ? ut(n, r) : void 0, c = S();
  if (!n1()) {
    if (u) {
      let h = p.trace.getActiveSpan() || T().startSpan("dummy");
      return v(P, {
        span: h,
        startTime: performance.now(),
        attributes: {
          "span.type": "tool",
          tool_name: n
        },
        perfettoSpanId: u,
        priorContext: c
      }), h;
    }
    return p.trace.getActiveSpan() || T().startSpan("dummy");
  }
  let d = T(), g = $t(n), f = C("tool", {
    tool_name: _R() ? g : n,
    tool_name_safe: g,
    ...r
  }), m = d.startSpan("claude_code.tool", {
    attributes: f
  }, c);
  if (e && !jp(e)) {
    if (It(m, e), !_R()) m.setAttributes($rn(e));
  }
  if (yt(m, o), s && !_R()) rt(m, n, s, i);
  return v(P, {
    span: m,
    startTime: performance.now(),
    attributes: f,
    perfettoSpanId: u,
    priorContext: c
  }), m;
}

function sfs() {
  let n = $Ne() ? pt("tool_permission") : void 0, e = S();
  if (!n1()) {
    if (n) {
      let i = p.trace.getActiveSpan() || T().startSpan("dummy");
      return v(w, {
        span: i,
        startTime: performance.now(),
        attributes: {
          "span.type": "tool.blocked_on_user"
        },
        perfettoSpanId: n,
        priorContext: e
      }), i;
    }
    return p.trace.getActiveSpan() || T().startSpan("dummy");
  }
  let r = T(), s = C("tool.blocked_on_user"), o = r.startSpan("claude_code.tool.blocked_on_user", {
    attributes: s
  }, e);
  return v(w, {
    span: o,
    startTime: performance.now(),
    attributes: s,
    perfettoSpanId: n,
    priorContext: e
  }), o;
}

function ifs(n, e) {
  let r = O(w);
  if (!r) return;
  if (r.perfettoSpanId) dt(r.perfettoSpanId, {
    decision: n,
    source: e
  });
  if (!n1()) {
    x(w, r);
    return;
  }
  let o = {
    duration_ms: Math.max(0, Math.round(performance.now() - r.startTime))
  };
  if (n) o.decision = n;
  if (e) o.source = e;
  r.span.setAttributes(o), r.span.end(), x(w, r);
}

function afs(n) {
  let e = S();
  if (!n1()) return p.trace.getActiveSpan() || T().startSpan("dummy");
  let r = T(), s = C("tool.execution"), o = r.startSpan("claude_code.tool.execution", {
    attributes: s
  }, e);
  return yt(o, n), v(G, {
    span: o,
    startTime: performance.now(),
    attributes: s,
    priorContext: e
  }), o;
}

function cao(n) {
  if (!n1()) return;
  let e = O(G);
  if (!e) return;
  let s = {
    duration_ms: Math.max(0, Math.round(performance.now() - e.startTime))
  };
  if (n) {
    if (n.success !== void 0) s.success = n.success;
    Object.assign(s, X(n.error, n.errorClass));
  }
  if (e.span.setAttributes(s), n?.success === !1) e.span.setStatus(F(n.error));
  e.span.end(), x(G, e);
}

function Iit(n, e, r, s = !1) {
  let o = n ? A.get(n) : O(P);
  if (!o || o.ended) return;
  if (o.perfettoSpanId) ct(o.perfettoSpanId, {
    success: !0,
    resultTokens: r
  });
  if (!n1()) {
    x(P, o);
    return;
  }
  let u = {
    duration_ms: Math.max(0, Math.round(performance.now() - o.startTime))
  };
  if (e && !0 && !_R()) {
    let c = o.attributes.tool_name || "unknown";
    st(u, c, e, s);
  }
  if (r !== void 0) u.result_tokens = r;
  o.span.setAttributes(u), o.span.end(), x(P, o);
}

function uao(n) {
  return n1() && m0t() && !_R() && n.isRecording();
}

function lfs(n) {
  if (typeof n === "string") return n;
  if (!Array.isArray(n)) return "";
  return n.map(e => e?.type === "text" ? String(e.text) : `[${String(e?.type ?? "unknown")}]`).join(`\n`);
}

function pao(n, e, r) {
  if (!uao(n)) return;
  let s = A.get(n);
  if (!s || s.ended) return;
  let o = {};
  for (let [i, u] of Object.entries(r)) if (typeof u === "string") {
    let {content: c, truncated: d} = cP(u);
    if (o[i] = c, d) o[`${i}_truncated`] = !0, o[`${i}_original_length`] = u.length;
  } else o[i] = u;
  s.span.addEvent(e, o);
}

function fao(n) {
  if (!n1()) return;
  let e = n.spanContext();
  if (!e.traceId || e.traceId === "00000000000000000000000000000000") return;
  let r = p.trace.setSpan(p.context.active(), n), s = {};
  return D.inject(r, s, p.defaultTextMapSetter), s.traceparent;
}

function nRe() {
  if (!n1()) return;
  let n = p.trace.getSpan(S());
  if (!n) return;
  return fao(n);
}

function dfs(n) {
  if (!n || !n1()) return;
  let e = S(), r = D.extract(e, {
    traceparent: n
  }, p.defaultTextMapGetter);
  return r === e ? void 0 : r;
}

function cfs(n, e) {
  return n === void 0 ? e() : kbe.with(n, e);
}

function tDn(n, e) {
  if (!roe()) return;
  return T().startSpan(n, {
    attributes: {
      ...Et(),
      "span.type": e.spanType,
      ..._R() ? Fa(e.attrs ?? {}, (r, s) => Bt.has(s)) : e.attrs,
      ...!_R() && e.contentAttrs
    }
  }, S());
}

async function nDn(n, e, r) {
  let s = tDn(n, e);
  if (!s) return r(void 0);
  let o = p.trace.setSpan(S(), s);
  return kbe.with(o, async () => {
    try {
      return await r(s);
    } catch (i) {
      if (!e.isExpectedError?.(i)) {
        let u = i instanceof Error && e.withholdErrorText?.(i) ? dao(i) : void 0;
        if (i instanceof Error && !_R()) s.recordException(u === void 0 ? i : {
          name: i.name,
          message: u
        });
        rxt(s, u ?? (i instanceof Error ? i.message : String(i)));
      }
      throw i;
    } finally {
      s.end();
    }
  });
}

function ufs(n) {
  if (!roe()) return;
  let e = S(), r = N(n.agentId), s = n.parentAgentId !== void 0 ? N(n.parentAgentId) : void 0, o = C("subagent.spawn", {
    ...r !== void 0 && {
      agent_id: r
    },
    agent_type: _R() && !n.isBuiltIn ? "custom" : n.agentType,
    ...s !== void 0 && {
      parent_agent_id: s
    }
  }), i = T().startSpan("claude_code.subagent.spawn", {
    attributes: o
  }, e);
  return v(_t, {
    span: i,
    startTime: performance.now(),
    attributes: o,
    priorContext: e
  }), i;
}

function pfs(n, e) {
  if (!n) return;
  let r = A.get(n);
  if (!r || r.ended) return;
  if (e?.success !== void 0) n.setAttribute("success", e.success);
  if (e?.error) n.setAttributes(X(e.error, e.errorClass)), rxt(n, e.error);
  n.end(), x(_t, r);
}

function xt() {
  return yR() || roe();
}

function ffs(n, e, r, s) {
  if (!xt()) return p.trace.getActiveSpan() || T().startSpan("dummy");
  let o = T(), i = S(), {content: u} = cP(s), c = C("hook", {
    hook_event: n,
    hook_name: _R() ? n : e,
    num_hooks: r,
    ...Fc() && !_R() && {
      hook_definitions: u
    }
  }), d = o.startSpan("claude_code.hook", {
    attributes: c
  }, i);
  return A.set(d, {
    span: d,
    startTime: performance.now(),
    attributes: c,
    priorContext: i
  }), d;
}

function mfs(n, e) {
  if (!xt()) return;
  let r = A.get(n);
  if (!r || r.ended) return;
  r.ended = !0;
  let o = {
    duration_ms: Math.max(0, Math.round(performance.now() - r.startTime))
  };
  if (e) {
    if (e.numSuccess !== void 0) o.num_success = e.numSuccess;
    if (e.numBlocking !== void 0) o.num_blocking = e.numBlocking;
    if (e.numNonBlockingError !== void 0) o.num_non_blocking_error = e.numNonBlockingError;
    if (e.numCancelled !== void 0) o.num_cancelled = e.numCancelled;
  }
  if (r.span.setAttributes(o), e && (e.numNonBlockingError ?? 0) > 0) r.span.setStatus(F(`${e.numNonBlockingError} hook(s) failed`));
  r.span.end();
}

export { cP, nfs, yR, rfs, $Ne, JHn, FNe, lao, n1, roe, QHn, rxt, _R, dao, ZHn, Lgr, eDn, _be, Ngr, $gr, iXt, ofs, sfs, ifs, afs, cao, Iit, uao, lfs, pao, fao, nRe, dfs, cfs, tDn, nDn, ufs, pfs, ffs, mfs };
