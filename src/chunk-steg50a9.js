// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import { g } from "./chunk-3ykz5st8.js";

import { t } from "./chunk-kawq2919.js";

import { FNe } from "./chunk-48711xn9.js";

import { ya } from "./chunk-xywp7esx.js";

import { rQt } from "./chunk-14xmsjdg.js";

import { gf } from "./chunk-5sbf9djq.js";

import { Hp, XCt } from "./chunk-bkx9v5fh.js";

import { qs } from "./chunk-05wvva46.js";

var ZWt = {
  name: "InProcessTeammateTask",
  type: "in_process_teammate",
  async kill(a, s, i, r, m) {
    let {memberRemoval: u, osTeardown: o} = w_n(a, s, i, m);
    await Promise.all([ u, o ]);
  }
}, k = 1e4;

function w_n(a, s, i, r) {
  let m = !1, u = null, o = null, f, d, n;
  s.update(a, e => {
    if (e.status !== "running") return e;
    return u = e.identity.teamName, o = e.identity.agentId, f = e.toolUseId, d = e.description, 
    n = e.paneTeardown, e.abortController?.abort(), m = !0, e.onIdleCallbacks?.forEach(p => p()), 
    {
      ...e,
      status: "killed",
      notified: !0,
      endTime: Date.now(),
      onIdleCallbacks: [],
      pendingUserMessages: [],
      abortController: void 0,
      currentWorkAbortController: void 0,
      paneTeardown: void 0,
      evictAfter: void 0
    };
  });
  let c = n ? Ht(n(), k, `pane teardown did not settle within ${k}ms`).then(e => {
    if (!e) t(`[killInProcessTeammate] pane teardown for ${a} reported failure \u2014 the backend could not find/kill the pane; its separate \`claude --agent-id\` process may still be running`, {
      level: "warn"
    });
    return e;
  }, e => (t(`[killInProcessTeammate] pane teardown for ${a} did not complete cleanly: ${l(e)}. Not blocking the stop result on it; the backend kill continues in the background and the separate \`claude --agent-id\` process may still be running`, {
    level: "warn"
  }), !1)) : Promise.resolve(void 0);
  if (m && o) i(e => {
    if (!e.teamContext?.teammates?.[o]) return e;
    let {[o]: p, ...y} = e.teamContext.teammates;
    return {
      ...e,
      teamContext: {
        ...e.teamContext,
        teammates: y
      }
    };
  });
  let T = Promise.resolve();
  if (u && o) T = rQt(u, o, {
    onlyIfJoinedBefore: Date.now()
  }, r);
  if (m) gf(a), ya(a, "stopped", {
    toolUseId: f,
    summary: d
  }), setTimeout((e, p) => e.evictTerminal(p), XCt, s, a);
  if (o) FNe(o);
  return g("swarm_in_process_kill"), {
    killed: m,
    memberRemoval: T,
    osTeardown: c
  };
}

function qke(a, s) {
  let i;
  for (let r of Object.values(s)) if (Hp(r) && r.identity.agentId === a) {
    if (r.status === "running") return r;
    if (!i) i = r;
  }
  return i;
}

function S_n(a, s) {
  let i = qke(a, s);
  if (i) return {
    status: "found",
    task: i
  };
  let r = Object.values(s).filter(Hp).filter(n => n.identity.resumableAgentId === a), m = r.find(n => n.status === "running") ?? r[0];
  if (m) return {
    status: "found",
    task: m
  };
  let u = new Map;
  for (let n of Object.values(s)) {
    if (!Hp(n) || n.identity.agentName !== a) continue;
    let c = u.get(n.identity.agentId);
    if (!c || c.status !== "running" && n.status === "running") u.set(n.identity.agentId, n);
  }
  let o = [ ...u.values() ], f = o.filter(n => n.status === "running"), d = f.length > 0 ? f : o;
  if (d.length === 1) return {
    status: "found",
    task: d[0]
  };
  if (d.length > 1) return {
    status: "ambiguous",
    candidates: d.map(n => n.identity.agentId),
    anyLive: d.some(n => !qs(n.status))
  };
  return {
    status: "not_found"
  };
}

function Qqo(a) {
  return XZe(a).filter(s => s.status === "running").map(s => s.identity.agentId);
}

function XZe(a) {
  return Object.values(a).filter(Hp);
}

export { qke, S_n, Qqo, XZe, ZWt, w_n };
