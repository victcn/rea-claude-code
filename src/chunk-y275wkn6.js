// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Qe, xg, b5, Ol } from "./chunk-xywp7esx.js";

import { bi } from "./chunk-gmq0qwep.js";

import { dr } from "./chunk-y3nc3daq.js";

import { K2, jA, sR, Tss } from "./chunk-84yp45y8.js";

import { iRe } from "./chunk-sqb9meyh.js";

import { NRe } from "./chunk-8a4rbyjg.js";

import { Fg } from "./chunk-bkx9v5fh.js";

import { xet } from "./chunk-r9m1v43y.js";

import { e2e, pne } from "./chunk-0n13shpa.js";

import { Aet } from "./chunk-zspfb8mj.js";

import { BSe } from "./chunk-1dj3skht.js";

async function SZn({session: s, tools: f, mainLoopModel: n, customSystemPrompt: a, excludeDynamicSections: m, cacheBreakerPhrase: g, analysisOnly: r, storageV5: p, credentials: c}) {
  let [l, d, e, o] = await Promise.all([ a !== void 0 ? Promise.resolve([]) : sR(f, n, {
    excludeDynamicSections: m,
    analysisOnly: r
  }), jA(s, p, c), a !== void 0 ? Promise.resolve({}) : K2(s, g), m && a === void 0 ? Tss(n, {
    analysisOnly: r
  }) : Promise.resolve({}) ]);
  if (m) return {
    defaultSystemPrompt: l,
    userContext: {
      ...e,
      ...d,
      ...o
    },
    systemContext: {}
  };
  return {
    defaultSystemPrompt: l,
    userContext: d,
    systemContext: e
  };
}

async function NVr({session: s, messageQueue: f, tools: n, toolCatalog: a, commands: m, mcpClients: g, messages: r, turnInProgress: p, readFileState: c, toolState: l, sessionHooks: d, getAppState: e, setAppState: o, customSystemPrompt: t, appendSystemPrompt: u, excludeDynamicSections: x, thinkingConfig: M, agents: P, storageV5: C, credentials: S, runQuery: T}) {
  let i = e(), y = xg({
    permissionMode: i.toolPermissionContext.mode,
    mainLoopModel: Qe()
  }), {defaultSystemPrompt: v, userContext: j, systemContext: b} = await SZn({
    session: s,
    tools: n,
    mainLoopModel: y,
    customSystemPrompt: t,
    excludeDynamicSections: x,
    cacheBreakerPhrase: i.cacheBreakerPhrase,
    analysisOnly: !0,
    storageV5: C,
    credentials: S
  }), R = bi([ ...typeof t === "string" ? iRe(t) : Array.isArray(t) ? t : v, ...u ? [ NRe(u) ] : [] ]), k = r.at(-1), h = p && k?.type === "assistant" && k.message.stop_reason === null ? r.slice(0, -1) : r, B = {
    messageQueue: f,
    session: s,
    storageV5: C,
    credentials: S,
    agentContext: Ol(),
    options: {
      commands: m,
      debug: !1,
      mainLoopModel: y,
      tools: n,
      toolCatalog: a,
      verbose: !1,
      thinkingConfig: M ?? (b5() !== !1 ? {
        type: "adaptive"
      } : {
        type: "disabled"
      }),
      mcpClients: g,
      mcpResources: {},
      isNonInteractiveSession: !0,
      runQuery: T,
      agentDefinitions: {
        activeAgents: P,
        allAgents: []
      },
      customSystemPrompt: t,
      ...t !== void 0 && {
        omitGitStatus: !0
      },
      appendSystemPrompt: u,
      autoCompactWindow: i.autoCompactWindow,
      fastMode: i.fastMode,
      cacheBreakerPhrase: i.cacheBreakerPhrase
    },
    abortController: dr(),
    readFileState: c,
    toolState: l,
    toolDecisions: new Map,
    permissionRelays: pne,
    getAppState: e,
    setAppState: o,
    ...Aet(e, o),
    queuedNotificationsRegistry: xet(e, o, s),
    taskRegistry: Fg(e, o),
    sessionHooksRegistry: d,
    teammateColors: e2e(BSe(e, o, "teammateColors")),
    rootToolSurface: {
      tools: n,
      mainLoopModel: y
    },
    messages: h,
    turnStartIndex: 0,
    getFileHistoryState: () => {},
    applyFileHistoryOp: () => {},
    applyAttributionOp: () => {}
  };
  return {
    systemPrompt: R,
    userContext: j,
    systemContext: b,
    toolUseContext: B,
    forkContextMessages: h,
    advisorModel: i.advisorModel
  };
}

export { SZn, NVr };
