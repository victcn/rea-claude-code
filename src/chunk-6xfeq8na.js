// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Pi } from "./chunk-8yperama.js";

import { x } from "./chunk-b0z4bv3v.js";

import { ne } from "./chunk-5wbhf1bk.js";

import { PFe } from "./chunk-9tdwgnpn.js";

import { no, Fr } from "./chunk-xywp7esx.js";

import { ht, qt, je, Rt } from "./chunk-s2t7g8m9.js";

import { noe } from "./chunk-gewnffft.js";

import { lW } from "./chunk-dt761zrc.js";

import { P2e } from "./chunk-ah542ztc.js";

import { vF } from "./chunk-sqb9meyh.js";

import { Od } from "./chunk-gxwv3c1r.js";

import { et } from "./chunk-59na0977.js";

import { o, v, u } from "./chunk-cvcg6n1z.js";

var B6 = Pi, RJ = new Set([ je, Rt, et, qt, ht, no, Fr ]), P6o = "device_bash", uTe = new Set([ "sync_files" ]);

function I6o(t) {
  return t.filter(n => {
    if (n.mcpInfo?.serverName !== B6) return !0;
    let e = n.mcpInfo.toolName, r = noe(e);
    return !RJ.has(e) && e !== Od && (r === void 0 || !RJ.has(r));
  });
}

function O6o(t) {
  return t.filter(n => n.mcpInfo?.serverName !== B6 || !uTe.has(n.mcpInfo.toolName));
}

var O = 64, h = 15e3, S = 316224e5, A = 16384, M6o = /^[\w-]{1,64}$/;

function cwn(t) {
  return t.description?.capabilities?.includes("background_shells") === !0 && lW();
}

function HKr(t) {
  return RJ.has(t) || t === Od && lW();
}

class c2e {
  #t=new Map;
  started(t, n) {
    this.#t.set(t, this.#t.get(t) ?? n);
    let e = [ ...this.#t ].filter(([, r]) => r.hostName === n.hostName);
    if (e.length > O) this.#t.delete(e[0]?.[0] ?? t);
  }
  find(t, n) {
    let e = this.#t.get(t);
    return e && P2e(n, e.agentId) ? e : void 0;
  }
}

async function H6o(t, n, e, r) {
  let m = e.get(c2e).find(t, n);
  if (m === void 0) return;
  let {hostName: a, callId: c} = m, _ = e.get(vF).resolve(a), p = _.kind === "remote" ? await _.host.transport.call(je, {}, PFe(c), {
    signal: r,
    deadlineMs: h,
    toolUseId: c
  }).catch(() => {}) : void 0, i = p?.kind === "result" ? p.envelope : void 0, s = i?.outcome === "completed" ? u({
    background: u({
      state: o(),
      exit_code: v().optional(),
      ran_ms: v().nonnegative().max(S),
      ended_ms_ago: v().nonnegative().max(S).optional()
    })
  }).safeParse(i.output).data?.background : void 0;
  if (i?.outcome !== "completed" || s === void 0) throw new x(`${a} did not say what became of background command ${t}: it is not attached or did not answer in time, or it no longer reports on the command (it keeps the last 16 that ended, and its record goes with a restart of Claude Code there or with background commands being switched off there).`, "no status for a background command on an attached machine");
  let {content: d} = i, g = typeof d === "string" ? d : d.map(T => T.type === "text" ? T.text : "").join(""), f = `[from ${a}, about background command ${t}]\n${ne(g, A)}`, E = Date.now() - (s.ended_ms_ago ?? 0), l = {
    taskId: t,
    createdAt: new Date(E - s.ran_ms).toISOString(),
    lastUpdatedAt: new Date(E).toISOString()
  };
  return s.state === "exited" ? {
    ...l,
    status: "completed",
    statusMessage: `Exited on ${a}.`,
    result: {
      content: [ {
        type: "text",
        text: f
      } ],
      isError: s.exit_code !== 0
    }
  } : {
    ...l,
    status: s.state === "running" ? "working" : "cancelled",
    statusMessage: f
  };
}

export { B6, RJ, P6o, uTe, I6o, O6o, M6o, cwn, HKr, c2e, H6o };
