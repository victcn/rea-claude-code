// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le, ys } from "./chunk-2v9tfgc3.js";

import { ve } from "./chunk-3pqddg8f.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { mM } from "./chunk-5wbhf1bk.js";

import { dt } from "./chunk-dd98x6x7.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { Ft, k } from "./chunk-xywp7esx.js";

import { _Zn } from "./chunk-7bzg8an7.js";

import { fy } from "./chunk-4v78v8fd.js";

import { iO, KA, xe } from "./chunk-84yp45y8.js";

function Tet() {
  let e = process.env.CLAUDE_CODE_ENABLE_AWAY_SUMMARY;
  if (ys(e)) return !1;
  if (Le(e)) return !0;
  if (ve()) return !1;
  if (dt()?.awaySummaryEnabled === !1) return !1;
  return !0;
}

function y() {
  let e = a.CLAUDE_CODE_ENABLE_REMOTE_RECAP;
  if (e !== void 0) return e;
  return k("tengu_harbor_moth", !1);
}

function CGt(e, n) {
  if (!n.onMetadataChanged) return;
  if (Ft() || !_Zn() || !y()) return;
  if (e.startedForTurnEnd) return;
  e.startedForTurnEnd = !0, S(e, n);
}

function OVr(e) {
  e.reset();
}

async function S(e, n) {
  e.inFlight?.abort();
  let r = new AbortController;
  e.inFlight = r;
  let o = await RGt(r.signal);
  if (r.signal.aborted) return;
  if (o.kind !== "ok") {
    if (o.kind !== "no-turn") m("ccr_recap_generate", o.kind);
    return;
  }
  if (n.getState() === "running") {
    t("[awaySummary] ccr recap dropped: new turn already running");
    return;
  }
  if (n.notifyMetadataChanged({
    recap: o.text
  }), o.capped) f("ccr_recap_generate", "capped"); else g("ccr_recap_generate");
}

var h = "The user stepped away and is coming back. Recap in under 40 words, 1-2 plain sentences, no markdown. Lead with the overall goal and current task, then the one next action. Skip root-cause narrative, fix internals, secondary to-dos, and em-dash tangents.", p = 400;

async function RGt(e, n) {
  let r = iO();
  if (!r && n) {
    if (e.aborted) return {
      kind: "aborted"
    };
    try {
      r = await n();
    } catch (i) {
      return t(`[awaySummary] fallback params rebuild failed: ${i}`), {
        kind: "failed"
      };
    }
    if (e.aborted) return {
      kind: "aborted"
    };
  }
  if (!r) return t("[awaySummary] no CacheSafeParams saved, skipping"), {
    kind: "no-turn"
  };
  let o = new AbortController;
  e.addEventListener("abort", () => o.abort(), {
    once: !0
  });
  try {
    let {messages: i} = await KA({
      promptMessages: [ xe({
        content: h
      }) ],
      cacheSafeParams: r,
      overrides: {
        abortController: o
      },
      canUseTool: async () => ({
        behavior: "deny",
        message: "Away summary cannot use tools",
        decisionReason: {
          type: "other",
          reason: "away_summary"
        }
      }),
      querySource: "away_summary",
      forkLabel: "away_summary",
      maxTurns: 1,
      skipCacheWrite: !0,
      skipTranscript: !0
    });
    if (e.aborted) return {
      kind: "aborted"
    };
    let u = i.find(c => c.type === "assistant" && c.isApiErrorMessage);
    if (u) return {
      kind: "api-error",
      text: l([ u ], !0)
    };
    let s = l(i, !1), d = s.length > p;
    if (d) {
      let c = mM(s, p);
      t(`[awaySummary] recap capped from ${s.length} to ${c.length} chars`), s = c;
    }
    return s ? {
      kind: "ok",
      text: s,
      capped: d
    } : {
      kind: "failed"
    };
  } catch (i) {
    if (e.aborted) return {
      kind: "aborted"
    };
    return t(`[awaySummary] generation failed: ${i}`), {
      kind: "failed"
    };
  }
}

function l(e, n) {
  return fy(e.flatMap(r => r.type === "assistant" && (n || !r.isApiErrorMessage) ? r.message.content : []).filter(r => r.type === "text").map(r => "text" in r ? r.text : "").join("")).trim();
}

export { Tet, CGt, OVr, RGt };
