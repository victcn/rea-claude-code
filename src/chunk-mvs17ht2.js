// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { To } from "./chunk-vxr6sv7z.js";

import { B } from "./chunk-3pqddg8f.js";

import { Ht } from "./chunk-nvtwm272.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { Eg } from "./chunk-7en5gt36.js";

import { Ml } from "./chunk-y3nc3daq.js";

import { a } from "./chunk-j016gcgm.js";

import { d } from "./chunk-6ah1819r.js";

import { lS } from "./chunk-q6wab2jw.js";

import { ya, i_, Cc, $O } from "./chunk-xywp7esx.js";

import { wn } from "./chunk-s2t7g8m9.js";

import { ee } from "./chunk-kq1bg4dg.js";

import { AP, $Zt, tBn } from "./chunk-9tdwgnpn.js";

import { zes, Mp, ep } from "./chunk-84yp45y8.js";

import { gf } from "./chunk-5sbf9djq.js";

import { Uu, Q3 } from "./chunk-bkx9v5fh.js";

import { cJ } from "./chunk-5bs45ssf.js";

import { ay } from "./chunk-jtgrm34s.js";

import { K8n, q8n, Y8n, Lq, Nmn, X8n, R7e, J8n, Fmn, MUr, HUr, A6, Z8n, e9n, jmn } from "./chunk-s4bevjrx.js";

import { FL } from "./chunk-0xsdje5v.js";

import { dVt, ptt, Kvn } from "./chunk-taqh33hd.js";

function x(r) {
  let {bySlug: n} = Kvn();
  if (n.size === 0) return r;
  return r.map(e => {
    let l = Math.min((n.get(e.slug) ?? 0) + (e.unattendedReplies ?? 0), ptt);
    return l > 0 ? {
      ...e,
      unattendedReplies: l
    } : e;
  });
}

var F = 2e3, R = "exit-handoff agent flush timeout";

function y() {
  let r = cJ.of(B().host).last;
  return [ ...i_()?.adoptShellOutputReadRoot ? [ i_().adoptShellOutputReadRoot ] : [], ...r ? [ $Zt(tBn(r.worktreePath)) ] : [] ];
}

function L(r) {
  let n = Cc() ? $O() : void 0;
  if (!n || a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
    if (n) {
      let o = ee().live;
      if (Fmn(n), o.bootingWiredArms.size > 0) f("artifact_live_subscribe", "booting_consent_uncarried");
      dVt(o.inFlightSubscribes);
    }
    return {
      shells: [],
      workflows: [],
      agents: [],
      unresumedAgents: [],
      unresumedWorkflows: [],
      frameLive: [],
      frameLiveTaskIds: [],
      jobDir: void 0,
      agentTranscriptPaths: {},
      workflowTranscriptDirs: {},
      projectTempDir: i_()?.adoptShellOutputRoot ?? AP(),
      mergeShellOutputReadRoots: y()
    };
  }
  let e = A6(r), l = Object.values(r), k = l.filter(o => jmn(o, e)), p = l.filter(o => e9n(o, e)), u = J8n(n), T = o => !ee().autoReact.userDisarmed && !ay(o.slug), A = Fmn(n), h = x(X8n([ {
    entries: Nmn(r),
    fallbackBasis: Date.now()
  }, {
    entries: A.filter(T),
    fallbackBasis: Date.now()
  }, {
    entries: HUr(n).filter(T),
    fallbackBasis: Date.now()
  } ])), w = new Set(h.map(o => o.slug)), b = ee().live;
  if ([ ...b.bootingWiredArms.keys() ].some(o => !w.has(o))) f("artifact_live_subscribe", "booting_consent_uncarried");
  return dVt(new Set([ ...w, ...b.inFlightSubscribes ])), {
    shells: l.filter(o => Z8n(o, e) && o.agentId === void 0),
    workflows: k,
    agents: p,
    unresumedAgents: u.agents,
    unresumedWorkflows: u.workflows,
    frameLive: h,
    frameLiveTaskIds: Object.values(r).filter(o => Lq(o) && o.frameLive !== void 0 && w.has(o.frameLive.slug)).map(o => o.id),
    jobDir: n,
    agentTranscriptPaths: Object.fromEntries(p.map(o => [ o.agentId, Eg(To(o.agentId)) ])),
    workflowTranscriptDirs: Object.fromEntries(k.map(o => [ o.workflowRunId, FL(o.workflowRunId) ])),
    projectTempDir: i_()?.adoptShellOutputRoot ?? AP(),
    mergeShellOutputReadRoots: y()
  };
}

function E({shells: r, workflows: n, agents: e, unresumedAgents: l, unresumedWorkflows: k, frameLive: p, jobDir: u, agentTranscriptPaths: T, workflowTranscriptDirs: A, projectTempDir: h, mergeShellOutputReadRoots: w}, b) {
  for (let c of n) c.abortController?.abort(Ml("background"));
  for (let c of e) c.abortController?.abort(Ml("background"));
  let o = (async () => {
    let c = [];
    if (e.length > 0) {
      try {
        await Ht((async () => {
          await lS(), await ep();
        })(), F, R);
      } catch (s) {
        let v = s instanceof Error && s.message === R;
        f("task_local_agent_exit_handoff", v ? "flush_timeout" : "flush_failed"), t(`exit handoff: agent transcript flush failed: ${s}`, {
          level: "warn"
        });
      }
      c = await Promise.all(e.map(s => q8n(s, {
        derivedTranscriptPath: T[s.agentId]
      })));
    }
    c.push(...l);
    let _ = (await Promise.all(r.map(s => K8n(s, {
      rerootOutputsTo: h
    })))).filter(s => s !== null), S = [ ...await Promise.all(n.map(s => Y8n(s, {
      derivedTranscriptDir: A[s.workflowRunId]
    }))), ...k ];
    if (_.length === 0 && S.length === 0 && c.length === 0 && p.length === 0 || !u) return;
    try {
      if (await R7e(u, {
        writtenAtMs: Date.now(),
        origin: "exit",
        shells: _,
        cron: [],
        workflows: S,
        agents: c,
        ...p.length > 0 && {
          frameLive: p
        }
      }, {
        mergeShellOutputRoot: [ h, ...w ?? [] ]
      }, b), i("tengu_adopt_exit_handoff", {
        adopted_shells: _.length,
        adopted_workflows: S.length,
        adopted_agents: c.length,
        adopted_frame_live: p.length
      }), _.length > 0) g("task_local_shell_exit_handoff");
      if (S.length > 0) g("task_local_workflow_exit_handoff");
      if (c.length > 0) g("task_local_agent_exit_handoff");
      t(`exit handoff: ${_.length} background shell(s), ${S.length} workflow(s), ${c.length} agent(s), and ${p.length} comment-monitoring consent record(s) handed to the next wake of this session`);
    } catch (s) {
      for (let v of r) try {
        v.shellCommand?.kill();
      } catch {}
      if (r.length > 0) m("task_local_shell_exit_handoff", "write_failed");
      if (n.length > 0) m("task_local_workflow_exit_handoff", "write_failed");
      if (c.length > 0) m("task_local_agent_exit_handoff", "write_failed");
      if (p.length > 0 && u !== void 0) MUr(u, p), m("artifact_live_subscribe", "consent_exit_write_failed");
      t(`exit handoff: adopt.json write failed: ${s}`, {
        level: "warn"
      });
    }
  })();
  return zes(o), o;
}

function m1t(r, n) {
  let e = L(r), l = e.shells.length > 0 || e.workflows.length > 0 || e.agents.length > 0 || e.unresumedAgents.length > 0 || e.unresumedWorkflows.length > 0 || e.frameLive.length > 0 ? E(e, n) : void 0, k = new Set([ ...e.shells, ...e.workflows, ...e.agents ].map(p => p.id));
  return V8n(r, k), l;
}

function V8n(r, n = new Set) {
  for (let e of Object.values(r)) {
    if (e.status !== "running" || n.has(e.id)) continue;
    try {
      if (Mp(e)) e.shellCommand?.kill(), e.shellCommand?.cleanup(); else if (wn()) {
        gf(e.id);
        continue;
      } else if ("abortController" in e) e.abortController?.abort();
      if (!Uu(e)) ya(e.id, "stopped", {
        toolUseId: e.toolUseId,
        summary: e.description,
        ambient: Q3(e)
      });
      gf(e.id);
    } catch (l) {
      d(l);
    }
  }
}

export { m1t, V8n };
