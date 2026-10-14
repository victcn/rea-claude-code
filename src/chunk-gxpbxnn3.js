// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { En } from "./chunk-kawq2919.js";

import { Ii } from "./chunk-5wbhf1bk.js";

import { me, yn, Vo, Wd, lr, St, Rm, cp, Dd } from "./chunk-dexzwy8h.js";

import { QKn } from "./chunk-gmn1ce75.js";

import { ie } from "./chunk-yxennhe9.js";

import { N } from "./chunk-hmqkrrtz.js";

var R = [ "manifest_invalid", "disabled_by_default", "identity_unverified", "archive_not_probed", "will_not_load" ];

function V$o(e) {
  let t = 0, n = 0;
  for (let s of e) {
    if (s.with_only) continue;
    if (n += s.weight, s.passed) t += s.weight;
  }
  return n > 0 ? t / n : 0;
}

function A0r(e) {
  if (e.length === 0) return {
    score: 0,
    passRate: 0
  };
  let t = e.reduce((s, a) => s + a.score, 0) / e.length, n = N(e, s => s.score >= 1) / e.length;
  return {
    score: t,
    passRate: n
  };
}

function K$o(e) {
  let t = [], n = e.cases.map(r => ({
    ...r,
    name: En(r.name)
  })), s = Math.max(4, ...n.map(r => ie(r.name))), a = e.cases.some(r => r.runs_without !== void 0);
  if (a) t.push(o("CASE", s) + "  " + o("WITH", 6) + o("W/OUT", 6) + o("\u0394", 7) + o("RUNS", 5) + o("COST", 8) + "NOTES"); else t.push(o("CASE", s) + "  " + o("SCORE", 6) + o("PASS%", 6) + o("RUNS", 5) + o("COST", 8) + "NOTES");
  for (let r of n) {
    let c = r.runs.length + (r.runs_without?.length ?? 0), g = r.runs.reduce((i, u) => i + u.cost_usd, 0) + (r.runs_without?.reduce((i, u) => i + u.cost_usd, 0) ?? 0), p = S(r);
    if (a) {
      let {score_without: i, delta: u} = r;
      t.push(o(r.name, s) + "  " + o(r.score.toFixed(2), 6) + o(i !== void 0 ? i.toFixed(2) : "\u2014", 6) + o(u !== void 0 ? _(u) : "\u2014", 7) + o(String(c), 5) + o(`$${g.toFixed(2)}`, 8) + (p ?? ""));
    } else t.push(o(r.name, s) + "  " + o(r.score.toFixed(2), 6) + o(`${Math.round(r.pass_rate * 100)}%`, 6) + o(String(r.runs.length), 5) + o(`$${g.toFixed(2)}`, 8) + (p ?? ""));
  }
  t.push("");
  let l = e.partial ? ` \xb7 \u26a0 partial (${x[e.partial_reason ?? "interrupted"]})` : "";
  if (a) {
    let r = e.cases.filter(c => c.delta !== void 0);
    if (r.length > 0) {
      let c = r.reduce((g, p) => g + (p.delta ?? 0), 0) / r.length;
      return t.push(`${e.cases.length} case(s) \xb7 mean \u0394 ${_(c)} \xb7 ${e.duration_seconds}s \xb7 $${e.cost_usd.toFixed(2)}${l}`), 
      t.join(`\n`);
    }
  }
  return t.push(`${e.cases.length} case(s) \xb7 ${e.duration_seconds}s \xb7 $${e.cost_usd.toFixed(2)}${l}`), 
  t.join(`\n`);
}

function _(e) {
  return `${e > 0 ? "+" : ""}${e.toFixed(2)}`;
}

function S(e) {
  let t = null;
  for (let n of e.runs) {
    for (let s of n.graders) if (!s.passed && (!t || s.weight > t.weight)) t = s;
    if (n.error) return En(n.error);
  }
  if (t !== null) {
    let n = t.name, s = e.advisories?.find(l => l.grader === n), a = e.runs.some(l => l.graders.some(r => r.name === n && r.passed));
    if (s !== void 0 && !a) return En(s.text);
  }
  return t ? En(`${t.name}: ${t.explanation}`) : null;
}

function o(e, t) {
  let n = ie(e);
  return n > t ? `${e} ` : e + Ii(" ", t - n);
}

function xFt(e, t, n, s, a, l) {
  let r = e.reduce((c, {report: g}) => c + g.runs.reduce((p, i) => p + i.cost_usd, 0) + (g.runs_without?.reduce((p, i) => p + i.cost_usd, 0) ?? 0), 0);
  return {
    schema_version: "1.0",
    claude_version: s,
    started_at: t.toISOString(),
    duration_seconds: Math.round((Date.now() - t.getTime()) / 1e3),
    cost_usd: r,
    partial: n !== void 0,
    partial_reason: n,
    concurrency: l,
    plugins: a,
    cases: e.map(c => c.report)
  };
}

var x = {
  interrupted: "interrupted",
  cost_ceiling: "cost ceiling hit",
  auth_failed: "stopped: authentication failed"
};

var y = 1;

function f() {
  return St({
    score: yn(),
    passed: Vo(),
    turns: yn(),
    costUsd: yn(),
    judgeCostUsd: yn(),
    durationSeconds: yn().optional(),
    startedAt: me().optional(),
    error: me().nullable(),
    tracePath: me(),
    skippedPaidGraders: Vo(),
    aborted: St({
      server: me(),
      tool: me(),
      reason: me()
    }).optional(),
    mocks: St({
      servers: lr(St({
        server: me(),
        kind: Dd([ "shadow", "standalone" ]),
        withheld: cp(!0).optional(),
        replayPinned: yn().optional(),
        tools: lr(St({
          tool: me(),
          responder: Dd([ "fixed", "agent" ])
        }))
      })),
      warnings: lr(me()),
      calls: St({
        total: yn(),
        errors: yn(),
        unmocked: lr(St({
          tool: me(),
          count: yn()
        })),
        costUsd: yn().optional(),
        replay: St({
          hits: yn(),
          misses: yn()
        }).optional()
      })
    }).optional(),
    graders: lr(St({
      name: me(),
      passed: Vo(),
      weight: yn(),
      explanation: me(),
      withOnly: Vo(),
      scored: Vo().optional(),
      judgeVotes: lr(Vo()).optional(),
      evidence: me().optional()
    }))
  });
}

function E() {
  return St({
    name: me(),
    dir: me(),
    source: me(),
    promptMarkdown: me(),
    model: me().optional(),
    runsPerCase: yn(),
    timeoutSeconds: yn(),
    maxTurns: yn(),
    graders: lr(St({
      name: me(),
      type: me(),
      weight: yn(),
      graderMarkdown: me().optional(),
      config: Rm(me(), Wd())
    })),
    arms: St({
      with: lr(f()),
      without: lr(f()).optional()
    }),
    advisories: lr(me()).optional(),
    aggregates: St({
      score: yn(),
      passRate: yn(),
      scoreWithout: yn().optional(),
      passRateWithout: yn().optional(),
      delta: yn().optional()
    })
  });
}

function q$o() {
  return C(Dd(R).optional());
}

function C(e) {
  return St({
    schemaVersion: cp(y),
    claudeVersion: me(),
    startedAt: me(),
    durationSeconds: yn(),
    costUsd: yn(),
    partial: Vo(),
    partialReason: Dd([ "cost_ceiling", "interrupted", "auth_failed" ]).optional(),
    suite: St({
      root: me(),
      ablation: Dd([ "none", "with-without" ]),
      modelOverride: me().optional(),
      judgeModel: me().optional(),
      caseFilter: me().optional(),
      tagFilters: lr(me()).optional(),
      threshold: yn(),
      concurrency: yn().int().positive().optional(),
      pluginId: me().optional(),
      plugins: lr(St({
        name: me(),
        version: me().optional(),
        path: me(),
        problem: e
      }))
    }),
    cases: lr(E()),
    aggregates: St({
      casesTotal: yn(),
      casesPassed: yn(),
      overallScore: yn(),
      overallPassRate: yn(),
      meanDelta: yn().optional()
    })
  });
}

var P = [ "ablation", "aborted", "advisories", "aggregates", "arms", "calls", "caseFilter", "cases", "casesPassed", "casesTotal", "claudeVersion", "concurrency", "config", "costUsd", "count", "delta", "dir", "durationSeconds", "error", "errors", "evidence", "explanation", "graderMarkdown", "graders", "hits", "judgeCostUsd", "judgeModel", "judgeVotes", "kind", "maxTurns", "meanDelta", "misses", "mocks", "model", "modelOverride", "name", "overallPassRate", "overallScore", "partial", "partialReason", "passRate", "passRateWithout", "passed", "path", "pluginId", "plugins", "problem", "promptMarkdown", "reason", "replay", "replayPinned", "responder", "root", "runsPerCase", "schemaVersion", "score", "scoreWithout", "scored", "server", "servers", "skippedPaidGraders", "source", "startedAt", "suite", "tagFilters", "threshold", "timeoutSeconds", "tool", "tools", "total", "tracePath", "turns", "type", "unmocked", "version", "warnings", "weight", "with", "withOnly", "withheld", "without" ], j = [ "config" ], W = QKn(P), K = new Set(j);

function v(e) {
  return {
    score: e.score,
    passed: e.score >= 1,
    turns: e.turns,
    costUsd: e.cost_usd,
    judgeCostUsd: e.judge_cost_usd,
    durationSeconds: e.duration_seconds,
    startedAt: e.started_at,
    error: e.error,
    tracePath: e.trace_path,
    skippedPaidGraders: e.skipped_paid_graders ?? !1,
    ...e.aborted && {
      aborted: e.aborted
    },
    ...e.mocks && {
      mocks: e.mocks
    },
    graders: e.graders.map(t => ({
      name: t.name,
      passed: t.passed,
      weight: t.weight,
      explanation: t.explanation,
      withOnly: t.with_only ?? !1,
      scored: t.scored ?? !(t.with_only ?? !1),
      judgeVotes: t.judge_votes,
      evidence: t.evidence
    }))
  };
}

function A(e, t) {
  return {
    name: t.name,
    dir: t.dir,
    source: t.source,
    promptMarkdown: e.execution.prompt ?? "",
    model: e.execution.model,
    runsPerCase: e.runs,
    timeoutSeconds: e.execution.timeout_seconds,
    maxTurns: e.execution.max_turns,
    graders: e.graders.map(n => {
      let {name: s, type: a, weight: l, ...r} = n;
      return {
        name: s,
        type: a,
        weight: l,
        graderMarkdown: n.type === "llm" || n.type === "baseline" ? n.criteria : void 0,
        config: r
      };
    }),
    arms: {
      with: t.runs.map(v),
      without: t.runs_without?.map(v)
    },
    ...t.advisories && {
      advisories: t.advisories.map(n => n.text)
    },
    aggregates: {
      score: t.score,
      passRate: t.pass_rate,
      scoreWithout: t.score_without,
      passRateWithout: t.pass_rate_without,
      delta: t.delta
    }
  };
}

function Y$o(e) {
  let {aggregate: t, resolvedCases: n, root: s, ablation: a, pluginId: l, modelOverride: r, judgeModel: c, caseFilter: g, tagFilters: p, threshold: i} = e, u = n.map(({case_: d, report: m}) => A(d, m)), b = u.map(d => d.aggregates.delta).filter(d => d !== void 0);
  return {
    schemaVersion: y,
    claudeVersion: t.claude_version,
    startedAt: t.started_at,
    durationSeconds: t.duration_seconds,
    costUsd: t.cost_usd,
    partial: t.partial,
    partialReason: t.partial_reason,
    suite: {
      root: s,
      ablation: a,
      pluginId: l,
      modelOverride: r,
      judgeModel: c,
      caseFilter: g,
      tagFilters: p,
      threshold: i,
      concurrency: t.concurrency,
      plugins: t.plugins.map(({name: d, version: m, path: w, problem: h}) => ({
        name: d,
        ...m !== void 0 && {
          version: m
        },
        path: w,
        ...h !== void 0 && {
          problem: h
        }
      }))
    },
    cases: u,
    aggregates: {
      casesTotal: u.length,
      casesPassed: N(u, d => d.aggregates.score >= i),
      overallScore: Oht(u.map(d => d.aggregates.score)),
      overallPassRate: Oht(u.map(d => d.aggregates.passRate)),
      meanDelta: b.length > 0 ? Oht(b) : void 0
    }
  };
}

function Oht(e) {
  return e.length === 0 ? 0 : e.reduce((t, n) => t + n, 0) / e.length;
}

export { V$o, A0r, K$o, xFt, q$o, Y$o, Oht };
