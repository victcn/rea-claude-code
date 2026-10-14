// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { YBr } from "./chunk-rffd6d4a.js";

import { yu } from "./chunk-b0z4bv3v.js";

import { Al } from "./chunk-x35dw27e.js";

import { dr, eg } from "./chunk-y3nc3daq.js";

import { KA, ad, xe, Po } from "./chunk-84yp45y8.js";

import { stt } from "./chunk-c0na4e14.js";

import { _b } from "./chunk-10gv16xm.js";

import { Af } from "./chunk-e96bxrcx.js";

var A = /^\/btw\b/gi, M = "_/btw can't run tools: any tool calls or tool output shown above were not executed and may not reflect your actual files or data. Ask in the main conversation to check._", _ = "(That answer wrote tool calls as text. Nothing was executed, so it is omitted here.)", b = "_(This answer was cut off before it finished. Ask again to retry.)_", E = "(That answer was cut off before it finished, so it is omitted here.)", k = "[No result yet \u2014 this call is still in progress in the main conversation (running, awaiting approval, or queued)]";

function C8n(o) {
  let n = [], i = o.matchAll(A);
  for (let s of i) if (s.index !== void 0) n.push({
    word: s[0],
    start: s.index,
    end: s.index + s[0].length
  });
  return n;
}

async function Xyt({question: o, cacheSafeParams: n, parentController: i, onRetry: s, threadHistory: l = !0, history: a, turnInProgress: e = !0}) {
  let g = i ? eg(i) : dr(), p = l ? n.toolUseContext.session.btwHistory : null, w = (a ?? p?.exchanges ?? []).flatMap(r => {
    let u = YBr(r.response) ? _ : r.response.endsWith(b) ? E : r.response;
    return [ xe({
      content: r.question
    }), ad({
      content: r.fallbackNotice ? `\u26a0 ${r.fallbackNotice}\n\n${u}` : u
    }) ];
  }), h = e ? x(n.forkContextMessages) : void 0;
  try {
    let r = await KA({
      promptMessages: [ ...h ? [ h ] : [], ...w, xe({
        content: [ {
          type: "text",
          text: `<system-reminder>This is a side question from the user. You must answer this question directly in a single response.\n\nIMPORTANT CONTEXT:\n- You are a separate, lightweight agent spawned to answer this one question\n- The main agent is NOT interrupted - it continues working independently in the background\n- You share the conversation context but are a completely separate instance\n- Do NOT reference being interrupted or what you were "previously doing" - that framing is incorrect\n\nCRITICAL CONSTRAINTS:\n- You have NO tools available - you cannot read files, run commands, search, or take any actions\n- Do NOT write tool calls or tool output as text (for example invoke or function_calls XML blocks) - nothing you write here is executed; if answering would need reading files, running commands, or searching, say that can't be checked from a side question and suggest asking in the main conversation\n- This is a one-off response - there will be no follow-up turns\n- You can ONLY provide information based on what you already know from the conversation context\n- NEVER say things like "Let me try...", "I'll now...", "Let me check...", or promise to take any action\n- If you don't know the answer, say so - do not offer to look it up or investigate\n\nSimply answer the question with the information you have.</system-reminder>\n\n`
        }, {
          type: "text",
          text: o
        } ]
      }) ],
      cacheSafeParams: n,
      canUseTool: async () => ({
        behavior: "deny",
        message: "Side questions cannot use tools",
        decisionReason: {
          type: "other",
          reason: "side_question"
        }
      }),
      querySource: "side_question",
      forkLabel: "side_question",
      maxTurns: 1,
      skipCacheWrite: !0,
      skipTranscript: !0,
      overrides: {
        abortController: g
      },
      onMessage: s ? c => {
        if (T(c)) s({
          retryAttempt: c.retryAttempt,
          maxRetries: c.maxRetries,
          retryInMs: c.retryInMs,
          status: c.error.status
        });
      } : void 0
    }), {live: u, notice: d} = stt(r.messages), {response: f, synthetic: m} = N(u), y = d && {
      originalModel: d.originalModel,
      fallbackModel: d.fallbackModel,
      content: d.content
    };
    if (p && f && !m) p.append(o, f, y?.content);
    return {
      response: f,
      synthetic: m,
      usage: r.totalUsage,
      ...y && !m && {
        refusalFallback: y
      }
    };
  } catch (r) {
    if (r instanceof yu || g.signal.aborted) return {
      response: null,
      synthetic: !1,
      usage: Af,
      aborted: !0
    };
    throw r;
  }
}

function x(o) {
  let n = o.filter(e => !_b(e)), i = n.findLast(e => e.type === "assistant");
  if (!i) return;
  let s = new Set, l = [];
  for (let e of n) if (e.type === "user" && Array.isArray(e.message.content)) {
    for (let t of e.message.content) if (t.type === "tool_result") s.add(t.tool_use_id);
  } else if (e.type === "assistant" && e.message.id === i.message.id) {
    for (let t of e.message.content) if (t.type === "tool_use") l.push(t.id);
  }
  let a = l.filter(e => !s.has(e));
  if (a.length === 0) return;
  return xe({
    content: a.map(e => ({
      type: "tool_result",
      tool_use_id: e,
      content: k
    })),
    isMeta: !0
  });
}

function N(o) {
  let n = o.flatMap(t => t.type === "assistant" && !t.isApiErrorMessage ? t.message.content : []), i = o.find(t => t.type === "assistant" && t.isApiErrorMessage === !0), s = Po(n, `\n\n`).trim();
  if (s) {
    let t = [ ...YBr(s) ? [ M ] : [], ...i ? [ b ] : [] ];
    return {
      response: [ s, ...t ].join(`\n\n`),
      synthetic: !1
    };
  }
  let l = n.find(t => t.type === "tool_use");
  if (l) return {
    response: `(The model tried to call ${"name" in l ? l.name : "a tool"} instead of answering directly. Try rephrasing or ask in the main conversation.)`,
    synthetic: !0
  };
  let a = i ? Po(i.message.content, `\n\n`).trim() : "";
  if (a) return {
    response: `(API error: ${a.startsWith(`${Al}: `) ? a.slice(Al.length + 2) : a})`,
    synthetic: !0
  };
  let e = o.find(T);
  if (e) return {
    response: `(API error: ${e.error.formatted})`,
    synthetic: !0
  };
  return {
    response: null,
    synthetic: !1
  };
}

function T(o) {
  return o.type === "system" && "subtype" in o && o.subtype === "api_error";
}

export { C8n, Xyt };
