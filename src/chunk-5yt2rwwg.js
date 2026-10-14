// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Xi, no, Fr } from "./chunk-xywp7esx.js";

import { ht, qt, je, Rt } from "./chunk-s2t7g8m9.js";

import { Ey } from "./chunk-j41af3ah.js";

import { ETr, mh, WRs } from "./chunk-4mw3z9gg.js";

import { $p, Ud, Tt, Jb, TO } from "./chunk-9tdwgnpn.js";

import { gt } from "./chunk-yebkpv3k.js";

import { qws } from "./chunk-eqbvs4ht.js";

import { _ir, Jne, ZI, eO, hxn, Ude, Yur, lno } from "./chunk-84yp45y8.js";

import { ZM } from "./chunk-de9nc4rq.js";

import { qte } from "./chunk-0tr91016.js";

import { NL } from "./chunk-s0van10s.js";

import { Dr } from "./chunk-10gv16xm.js";

import { et } from "./chunk-59na0977.js";

var hte = () => qte({
  promptSuggestionEnabled: !1
});

var c = new Set([ je, et, ht, qt, Fr, no, Xi, Rt ]), HFo = new Set([ Ey ]), mMe = _ir;

function nQe(e) {
  return `[serve-mode] Stripped client-supplied privilege field(s): ${e.join(", ")}`;
}

function E(e, i) {
  if (e.properties === void 0 || i.length === 0) return e;
  let s = {
    ...e.properties
  };
  for (let n of i) delete s[n];
  let t = Array.isArray(e.required) ? e.required.filter(n => !i.includes(n)) : e.required;
  return {
    ...e,
    properties: s,
    required: t
  };
}

function DFt(e, {skipSearchToolRestore: i = !1} = {}) {
  let s = NL(Ud(), {
    skipReplFilter: !0,
    skipSimpleModeFilter: e
  }).filter(o => !TO(o));
  if (!e) return s;
  let t = s.filter(o => c.has(o.name));
  if (i) return t;
  let n = Jne(), p = [ ZI, eO ].filter(o => n.has(o.name) && c.has(o.name) && !t.includes(o) && o.isEnabled());
  return [ ...t, ...p ];
}

async function DFo(e, i = {}, s) {
  let t = e === "http", n = Ud(), p = DFt(t, i), o = i.agentDefinitions ?? {
    activeAgents: [],
    allAgents: []
  }, a = t ? [] : await Ude(hxn(o.activeAgents, []), o.allowedAgentTypes, n), T = a.length > 0 ? `Available agent types:\n${a.map(r => Yur(r, !1)).join(`\n`)}` : "", l = () => Promise.all(p.map(async r => {
    let f = ZM(r.inputSchema), {remoteExecution: S, outputSchemaAcrossProcesses: _, ...u} = r, m = await r.prompt({
      getToolPermissionContext: async () => n,
      tools: p,
      agents: o.activeAgents,
      ...s !== void 0 && {
        model: s.model,
        leanPrompt: s.leanPrompt,
        bashFirstTrimmed: !1
      }
    });
    return {
      ...u,
      description: Tt(r, $p) ? qws(m) : Tt(r, gt) ? m.replace(lno, () => T) : m,
      inputSchema: E(f, [ ...t ? mMe : [], ...Jb(r).supported ? [ Dr ] : [] ]),
      outputSchema: void 0
    };
  }));
  if (!t) return l();
  let d = mh();
  if (d.backgroundTasksDisabled && d.unsandboxedCommandsDisabled) return l();
  for (let r of p) r.inputSchema;
  return WRs(X0r(), l);
}

function X0r(e = new ETr) {
  return e.disableBackgroundTasks(), e.disableUnsandboxedCommands(), e;
}

export { hte, HFo, mMe, nQe, DFt, DFo, X0r };
