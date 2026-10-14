// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { xg } from "./chunk-xywp7esx.js";

import { I } from "./chunk-5wbhf1bk.js";

import { ie, xr, Ej } from "./chunk-yxennhe9.js";

import { X9 } from "./chunk-nnrb0acr.js";

import { Xh } from "./chunk-q6wab2jw.js";

import { QGt, _6o } from "./chunk-rmfejzkw.js";

import { de } from "./chunk-5ydr99q3.js";

import { P0e, WD, bde, prt, Mss, ncr, rcr } from "./chunk-84yp45y8.js";

import { a2e } from "./chunk-9x12h85r.js";

import { vn } from "./chunk-3rbd48rp.js";

import { D } from "./chunk-hmqkrrtz.js";

function CJ(n, s) {
  return n + " ".repeat(Math.max(0, s - ie(n)));
}

function G$(n, s) {
  return " ".repeat(Math.max(0, s - ie(n))) + n;
}

function JGt(n) {
  let s = n.map(o => ({
    context: o.listingTokens === null ? "-" : Ej(o.listingTokens),
    week: o.weekTokens === null ? "-" : xr(o.weekTokens),
    lastUsed: o.daysSinceUse === null ? "never" : o.daysSinceUse === 0 ? "today" : `${o.daysSinceUse} ${I(o.daysSinceUse, "day")}`
  }));
  return {
    cells: s,
    widths: {
      name: Math.max(5, ...n.map(o => ie(o.name))),
      source: Math.max(6, ...n.map(o => ie(o.source))),
      context: Math.max(7, ...s.map(o => ie(o.context))),
      week: Math.max(9, ...s.map(o => ie(o.week))),
      uses: Math.max(4, ...n.map(o => ie(String(o.usageCount))))
    }
  };
}

class GHe extends Error {
  featureErrorCode;
  constructor(n, s) {
    super("skill-doctor stage failed", {
      cause: s
    });
    this.featureErrorCode = n;
  }
}

function Bet(n) {
  return {
    commands: n.options.commands,
    mcpCommands: n.getMcp().commands,
    mcpClients: n.getMcp().clients,
    agentId: n.agentId,
    mainLoopModel: n.options.mainLoopModel,
    permissionMode: de(n).mode,
    storageV5: n.storageV5
  };
}

async function awn(n) {
  let s = a2e();
  s.catch(() => {});
  let o = QGt(), c = o.allowed ? _6o(n.storageV5).catch(e => {
    throw new GHe("scan_failed", e);
  }) : Promise.resolve(new Map);
  c.catch(() => {});
  let {included: k} = await rcr(n.mcpCommands, n.agentId, n.storageV5).catch(e => {
    throw new GHe("skill_set_failed", e);
  }), S = xg({
    permissionMode: n.permissionMode,
    mainLoopModel: n.mainLoopModel
  }), y = ncr(k, S, n.mainLoopModel), p = await c, r = [], l = bde([ ...n.commands ]), w = new Set(l.map(e => e.name)), M = new Set(n.commands.filter(e => prt(e) && !w.has(e.name)).map(e => e.name)), m = new Map;
  for (let e of l) {
    let t = e.type === "prompt" && e.loadedFrom !== "syncedSkills" ? e.name.lastIndexOf(":") : -1;
    if (t > 0) {
      let i = e.name.slice(t + 1);
      m.set(i, (m.get(i) ?? 0) + 1);
    }
  }
  for (let e of l) {
    if (e.type !== "prompt") continue;
    if (e.source === "bundled" || e.source === "builtin" || e.source === "policySettings") continue;
    if (e.source === "mcp" && e.loadedFrom !== "mcp") continue;
    let t = e.name.lastIndexOf(":"), i = t > 0 ? e.name.slice(t + 1) : void 0, u = i !== void 0 && e.loadedFrom !== "syncedSkills" && M.has(i) && m.get(i) === 1 ? i : void 0, f = Mss(e.name, u ?? P0e(e));
    r.push({
      name: e.pluginInfo ? Xh(e.name) : e.name,
      source: e.pluginInfo ? Xh(e.pluginInfo.pluginManifest.name) : e.loadedFrom === "syncedSkills" ? X9 : e.source,
      owner: e.source === "plugin" ? "plugin" : e.source === "mcp" ? "mcp" : e.loadedFrom === "syncedSkills" ? "synced" : "settings",
      pluginKey: e.pluginInfo?.pluginManifest.name,
      usageCount: f?.usageCount ?? 0,
      daysSinceUse: f?.daysSinceUse ?? null,
      listingTokens: y.get(e.name) ?? null,
      weekTokens: p.get(WD(e)) ?? (u ? p.get(u) : void 0) ?? null
    });
  }
  r.sort((e, t) => (t.daysSinceUse ?? 1 / 0) - (e.daysSinceUse ?? 1 / 0));
  let a = r.filter(e => e.usageCount === 0 && e.listingTokens !== null), h = a.filter(e => e.owner === "settings"), b = a.filter(e => e.owner === "synced"), x = new Set(r.filter(e => e.usageCount > 0 && e.pluginKey !== void 0).map(e => e.pluginKey)), C = a.filter(e => e.owner === "plugin" && (e.pluginKey === void 0 || !x.has(e.pluginKey))), d = e => {
    let t = e.name.indexOf(":");
    return t > 0 ? e.name.slice(0, t) : void 0;
  }, L = new Set(r.filter(e => e.owner === "mcp" && e.usageCount > 0).map(d).filter(e => e !== void 0)), g = a.filter(e => {
    if (e.owner !== "mcp") return !1;
    let t = d(e);
    return t === void 0 || !L.has(t);
  }), T = D(g.map(d).filter(e => e !== void 0)).map(e => Xh(n.mcpClients.find(t => vn(t.name) === e)?.name ?? e));
  return {
    rows: r,
    unusedOwned: h,
    unusedFromPlugins: C,
    unusedFromMcp: g,
    unusedSynced: b,
    unusedMcpServers: T,
    disusedPlugins: await s,
    weekTokensNote: o.allowed ? null : o.reason
  };
}

export { CJ, G$, JGt, GHe, Bet, awn };
