// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ie } from "./chunk-3btm71fm.js";

import { lrs, Bar, $Yt, FYt, Ljs, Njs, $js, yrs } from "./chunk-84yp45y8.js";

import { sl } from "./chunk-smzxkp15.js";

function g(e, t) {
  let n = e.subagentType === t.agent.agentType ? t.agent : t.agents.find(o => o.agentType === e.subagentType);
  if (n !== void 0) return {
    agent: n
  };
  let p = t.agents.map(o => o.agentType), s = p.length > 0 ? `available: ${p.join(", ")}` : "none is available";
  return {
    deny: `a hook's subagentType '${e.subagentType}' names no agent this call can dispatch (${s})`
  };
}

var m = e => ({
  tool_use_id: e.tool_use_id,
  prompt: e.prompt,
  description: e.description,
  subagentType: e.agent.agentType,
  provider: lrs(e.agent),
  model: e.model,
  parentModel: e.parentModel,
  ...e.parentAgentId !== void 0 && {
    parentAgentId: e.parentAgentId
  },
  permissionMode: e.permissionMode,
  background: e.background,
  fork: e.fork,
  ...e.isTeammate === !0 && {
    isTeammate: !0
  },
  ...e.workflow !== void 0 && {
    workflow: e.workflow
  },
  ...e.resume !== void 0 && {
    resume: e.resume
  },
  name: e.name,
  cwd: e.cwd
});

var d = e => ({
  started: ({agentId: t, model: r, teammateId: n}) => e.done({
    model: r,
    agentId: t,
    ...n !== void 0 && {
      teammateId: n
    }
  }),
  [Symbol.dispose]: e[Symbol.dispose]
});

var Tqr = Object.freeze({
  started: () => {},
  [Symbol.dispose]: () => {}
});

async function D2t(e) {
  let {agent: t, agents: r, signal: n, origin: p} = e, s = m(e);
  if (!sl("agent.spawn")) return {
    spawn: s,
    agent: t,
    starting: Tqr
  };
  let o = FYt($js), i = await $Yt(o, yrs({
    signal: n,
    origin: p,
    core: {
      "agent.spawn": Bar(o)
    }
  }).agent.spawn(s));
  if (!i.arrived) return Ljs({
    result: i.answered,
    input: s,
    signal: n
  });
  let f = i.arrived;
  Njs({
    input: s,
    spawn: f
  });
  let a = g(f, {
    agent: t,
    agents: r
  });
  if (a.deny !== void 0) return o.failed(new Ie(a.deny)), a;
  return {
    spawn: f,
    agent: a.agent,
    starting: d(o)
  };
}

export { Tqr, D2t };
