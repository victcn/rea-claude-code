// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { c } from "./chunk-hwdwjvh8.js";

import { i } from "./chunk-hedpgw9m.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { _ } from "./chunk-kawq2919.js";

import { nx } from "./chunk-9yajep3y.js";

import { HIe, Lie } from "./chunk-dd98x6x7.js";

import { H5 } from "./chunk-2my8wpr5.js";

import { iE, TFn, AFn } from "./chunk-4v78v8fd.js";

import { zBn, fEr, VBn } from "./chunk-8es5wy4r.js";

import { fh } from "./chunk-ewk363e4.js";

import { Zu } from "./chunk-84yp45y8.js";

import { Sle, GSn, VSn, NGt } from "./chunk-s50vs0mx.js";

import { WSn } from "./chunk-te7wqw4s.js";

import { SS } from "./chunk-zkmvjknk.js";

import { FL } from "./chunk-0xsdje5v.js";

import { XE } from "./chunk-05wvva46.js";

import { randomUUID as y } from "crypto";

var l = 1e5, A = 4e3;

function L(e) {
  let t = e.replace(/[\r\n\v\f\x1c\x1d\x1e\u0085\u2028\u2029]+/g, " ").replaceAll("remote-workflow:", "remote-workflow;");
  if (t.length > A) t = `${ne(t, A)}\u2026[truncated]`;
  return t;
}

function OGt(e, t) {
  return `remote-workflow: error[${e}]: ${L(t)}`;
}

function d(e) {
  let t = _(e);
  return t === void 0 ? void 0 : t.replaceAll("\x85", "\\u0085").replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029");
}

function R() {
  let e = fh();
  if (e === void 0) return fEr();
  return Object.keys(e).some(t => t.toUpperCase() === "CLAUDE_CODE_DISABLE_WORKFLOWS" && Le(e[t]));
}

function x() {
  return HIe().some(e => e.disableWorkflows === !0 || Object.entries(e.env ?? {}).some(([t, f]) => t.toUpperCase() === "CLAUDE_CODE_DISABLE_WORKFLOWS" && Le(f)));
}

var I = "Code review did not run: workflows are turned off in this machine's managed settings (`disableWorkflows`, or `CLAUDE_CODE_DISABLE_WORKFLOWS` in its `env` block). Ask this machine's administrator to allow it.", M = "Code review did not run: this machine's managed settings could not be read, so whether its administrator turned workflows off is not known. Ask this machine's administrator to fix them.";

function C() {
  if (x()) return I;
  return Lie() ? M : null;
}

function Oet(e) {
  if (R()) return "dynamic workflows are disabled for this session (the environment variable `CLAUDE_CODE_DISABLE_WORKFLOWS` was set when Claude Code started).";
  let t = e?.serverAuthoredCarrier === !0;
  if (t && e?.eventSessionOrigin === "review") return C();
  if (zBn()) return fEr() ? "dynamic workflows are disabled for this session (the environment variable `CLAUDE_CODE_DISABLE_WORKFLOWS`, set after Claude Code started, for example by a settings `env` block)." : "dynamic workflows are disabled for this session (the `disableWorkflows` setting).";
  if (t && e?.eventSessionOrigin === void 0 && H5()) return C();
  if (!VBn()) return "dynamic workflows are disabled for this session (org policy `allow_workflows`).";
  return null;
}

async function jSn({script: e, args: t, telemetrySource: f, serverAuthoredCarrier: w = !1, eventSessionOrigin: v, context: p}) {
  let s = (a, r) => ({
    ok: !1,
    layer: a,
    line: OGt(a, r)
  }), S = Oet({
    serverAuthoredCarrier: w,
    eventSessionOrigin: v
  });
  if (S) return s("policy-gate", S);
  let k = w ? TFn : iE;
  if (e.length > k) return s("script-too-large", `workflow script exceeds ${k} bytes.`);
  if (!nx(e)) return s("control-chars", "workflow script contains disallowed control characters.");
  let n = SS(e, {
    maxBytes: k
  });
  if ("error" in n) return s("meta-parse", `invalid workflow script: ${n.error}`);
  if (WSn(n.scriptBody)) return s("nondeterminism", "workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.");
  let g = Sle(n.scriptBody);
  if (!g.ok) return s("compile", `workflow script compile failed: ${g.error}`);
  let m = `wf_${y().slice(0, 12)}`, D = XE("local_workflow"), W = AFn(n.meta.name, m, e, p.storageV5), b = GSn(n.meta.name, void 0, !1), O = VSn(n.meta.description, void 0, !1);
  i("tengu_workflow_launched", {
    invocation_mode: c(f),
    workflow_source: c(f),
    phase_count: n.meta.phases?.length ?? 0,
    launched_from_subagent: !1,
    has_args: t != null,
    is_resume: !1,
    script_size_chars: e.length
  });
  let o = await new Promise(a => {
    NGt({
      taskId: D,
      workflowRunId: m,
      script: e,
      scriptPath: W,
      args: t,
      meta: n.meta,
      vmScript: g.vmScript,
      toolUseContext: p,
      canUseTool: p.canUseTool ?? Zu,
      toolUseId: void 0,
      transcriptDir: FL(m),
      telemetry: {
        source: f,
        name: b,
        description: O,
        scriptIsVerbatimBuiltIn: !1
      },
      isResume: !1,
      onSettled: a,
      suppressCompletionNotification: !0,
      withholdScriptFromSdkEvents: w
    });
  });
  switch (o.status) {
   case "completed":
    {
      let a = {
        status: "completed",
        workflowName: n.meta.name,
        runId: m,
        agentCount: o.agentCount,
        durationMs: o.durationMs,
        failures: o.failures,
        result: o.result
      }, r = d(a);
      if (r === void 0 || r.length > l) {
        let E = r === void 0 ? "not serializable" : `${r.length} chars exceeds ${l}`, u = o.failures.slice(0, 20).map(h => h.length > 500 ? `${ne(h, 500)}\u2026[truncated]` : h);
        if (o.failures.length > u.length) u.push(`\u2026and ${o.failures.length - u.length} more failures omitted`);
        if (r = d({
          ...a,
          failures: u
        }), r === void 0 || r.length > l) r = d({
          ...a,
          failures: [ `<${o.failures.length} failures omitted: diagnostics never outrank the result payload>` ]
        });
        if (r === void 0 || r.length > l) r = d({
          ...a,
          failures: u,
          result: `<result omitted: ${E}>`
        });
        if (r === void 0 || r.length > l) r = d({
          status: "completed",
          workflowName: ne(String(n.meta.name), 200),
          runId: m,
          agentCount: o.agentCount,
          durationMs: o.durationMs,
          failures: [ `<${o.failures.length} failures omitted: fallback exceeded ${l}>` ],
          result: `<result omitted: ${E}>`
        }) ?? '{"status":"completed"}';
      }
      return {
        ok: !0,
        line: `remote-workflow: ${r}`,
        workflowName: n.meta.name
      };
    }

   case "failed":
    return s("workflow-failed", `workflow failed after ${o.durationMs}ms (${o.agentCount} agents): ${o.error}`);

   case "killed":
    return s("killed", "workflow was aborted before completion.");

   case "adopted":
   case "unknown":
    return s("unexpected-state", `workflow ended in unexpected state '${o.status}'.`);
  }
}

export { OGt, Oet, jSn };
