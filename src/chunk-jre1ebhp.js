// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ke, Xg, fD, Dy } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { gr } from "./chunk-z52kmxx4.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Sr } from "./chunk-3x03pnz9.js";

import { A0s } from "./chunk-hazy64h6.js";

import { Ac, vb } from "./chunk-8drhysk2.js";

import { bxe } from "./chunk-t70vnbgq.js";

import { irt, CKe, MRn, xar, JQr, F0e, HRn, brs, Nde, q0e, WA, FB, RZr, F4, gd, Xas, CS, I_e, p3t, Lno } from "./chunk-84yp45y8.js";

import { qe } from "./chunk-r8a304y3.js";

import { h$e } from "./chunk-1qs7jgw6.js";

import { Ele, jZn } from "./chunk-1sgp7yb5.js";

import { nse, rse, gy } from "./chunk-jq5rsb8b.js";

import { N } from "./chunk-hmqkrrtz.js";

function x(n, e) {
  if (e.pluginSource !== void 0 && vb(e.pluginSource) === Ac) return !0;
  let u = Ele(n, Dy());
  if (u === void 0) return !1;
  return u.kind === "server" || jZn(e.pluginSource, u);
}

function vle() {
  return gr() ? x : void 0;
}

var R = n => Object.entries(n ?? {}).filter(([, e]) => e.pluginSource !== void 0).map(([e]) => e);

async function UZn(n, e) {
  return 0;
}

async function UL(n, e, u, y = {}) {
  let m = y.applyStagedInstalls ?? !0, f = fD(), {changesLanded: h, holdsSet: k} = f;
  using p = {
    [Symbol.dispose]: () => {
      f.endHoldSetBefore(k);
    }
  };
  if (t("refreshActivePlugins: clearing all plugin caches"), m) A0s(), Xas();
  if (gd(e, u), m) brs();
  let s = await CS(e, u);
  await RZr(e), qe.refreshConfig();
  let [a, w, r] = await Promise.all([ Nde(e), q0e(e), WA(ke(), e) ]), {enabled: g, disabled: P, errors: C, warnings: I} = s, S = [], A = [], [O, D] = await Promise.all([ Promise.all(g.map(async o => {
    let c = await irt(o, S, e, {
      warnings: A
    });
    return c ? Object.keys(c).length : 0;
  })), Promise.all(g.map(async o => {
    if (o.lspServers) return Object.keys(o.lspServers).length;
    let c = await CKe(o, S, e);
    if (c) o.lspServers = c;
    return c ? Object.keys(c).length : 0;
  })) ]), j = O.reduce((o, c) => o + c, 0), L = D.reduce((o, c) => o + c, 0);
  await UZn(g, S);
  let E = [ ...I, ...A, ...MRn(g) ], b = [ ...C, ...S ];
  n.applyRefresh({
    enabled: g,
    disabled: P,
    commands: a,
    errors: b,
    warnings: E,
    agentDefinitions: r
  }), HRn(e, u);
  let _ = !1;
  try {
    await F4(e, u);
  } catch (o) {
    _ = !0, d(o), t(`refreshActivePlugins: loadPluginHooks failed: ${l(o)}`);
  }
  if (!_) await p3t(g, e).catch(d), f.reloaded(h);
  let F = g.reduce((o, c) => {
    if (!c.hooksConfig) return o;
    return o + Object.values(c.hooksConfig).reduce((M, v) => M + (v?.reduce((B, T) => B + T.hooks.length, 0) ?? 0), 0);
  }, 0);
  return FB.emit(), t(`refreshActivePlugins: ${g.length} enabled, ${a.length} commands, ${w.length} skills, ${r.allAgents.length} agents, ${F} hooks, ${j} MCP, ${L} LSP`), 
  {
    enabled_count: N(g, o => o.isBuiltin !== !0),
    disabled_count: N(P, o => o.isBuiltin !== !0),
    command_count: a.length,
    skill_count: w.length,
    agent_count: r.allAgents.length,
    hook_count: F,
    mcp_count: j,
    lsp_count: L,
    error_count: b.length + (_ ? 1 : 0),
    errors: b,
    warnings: E,
    agentDefinitions: r,
    pluginCommands: a
  };
}

async function U6(n) {
  let e = new Set(n.mcpClients.filter(r => r.config.pluginSource !== void 0).map(r => r.name)), u, y = () => u ??= I_e(n.storageV5), m = await Lno(n.dynamicMcpConfig ?? {}, n.storageV5, y, vle());
  for (let r of R(n.dynamicMcpConfig)) m.add(r);
  let f = [ ...m ].filter(r => !e.has(r)).sort(), h = [ ...e ].filter(r => !m.has(r)).sort(), k = f.length > 0 || h.length > 0, p = gy() && rse(n.model) && !nse(n.model), s = Xg() > 0, a = null;
  if (h$e() && !p && s && !Sr("lspServers")) {
    let r = JQr() ? {
      hasServers: !1,
      loaderFailed: !1,
      loaderFailedApplyHealable: !1,
      derivationFailed: !1
    } : await G(y, n.storageV5, n.credentials);
    if (!F0e()) {
      if (r.hasServers) a = "adds"; else if (r.loaderFailedApplyHealable) a = "may-add";
    } else if (!r.hasServers && !r.derivationFailed) {
      if (r.loaderFailedApplyHealable) a = "may-remove"; else if (!r.loaderFailed) a = "removes";
    }
  }
  return {
    mcpServersAdded: f,
    mcpServersRemoved: h,
    toolSearchEnabled: p,
    lspToolChange: a,
    wouldInvalidateCache: (k || a !== null) && !p && s
  };
}

async function G(n, e, u) {
  let {enabled: y, errors: m} = await n(), f = !1, h = m.some(bxe), k = m.some(s => bxe(s) && !(s.type === "plugin-not-installed" && s.registryReadFailed !== !0) && !(s.type === "marketplace-not-found" && s.registryReadFailed !== !0) && s.type !== "dependency-version-unsatisfied" && !(s.type === "dependency-unsatisfied" && s.reason !== "not-found")), p = !1;
  for (let s of y) {
    let a = [];
    try {
      let w = await xar(s, a, e, u);
      if (w !== void 0 && Object.keys(w).length > 0) f = !0;
    } catch {
      p = !0;
    }
    if (a.length > 0) p = !0;
  }
  return {
    hasServers: f,
    loaderFailed: h,
    loaderFailedApplyHealable: k,
    derivationFailed: p
  };
}

function VGt(n, e) {
  i("tengu_reload_plugins_cache_impact", {
    mcp_changed: n.mcpServersAdded.length > 0 || n.mcpServersRemoved.length > 0,
    lsp_changed: n.lspToolChange !== null,
    tool_search_on: n.toolSearchEnabled,
    warned: e.warned,
    forced: e.forced
  });
}

export { vle, UZn, UL, U6, VGt };
