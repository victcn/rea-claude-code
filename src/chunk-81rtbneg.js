// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b, c, pe, vl, v_, Cn } from "./chunk-hwdwjvh8.js";

import { vq, ME } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { VPe, Fc, Di, k, Ce, ce, ton } from "./chunk-xywp7esx.js";

import { Pr } from "./chunk-z52kmxx4.js";

import { a } from "./chunk-j016gcgm.js";

import { bt, bI, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { Hin, eX } from "./chunk-q6wab2jw.js";

import { Sfs, ov } from "./chunk-crtp56sh.js";

import { mn, Jxs, Fi, rf, MR, Hi, ec, Pl, But, P3e } from "./chunk-8drhysk2.js";

import { tp } from "./chunk-sg5gpfs4.js";

import { SUn, Wwr, EFe, zwr, Nue } from "./chunk-t70vnbgq.js";

import { Ws } from "./chunk-7xj6dhxv.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import { D } from "./chunk-hmqkrrtz.js";

import { sep as me } from "path";

var Y = new Set([ "plugin command source printed a network path", "plugin command source path resolves to a network path", "plugin command source printed a path through a suspect link", "plugin command source entry traverses a suspect link", "plugin command source link escapes producer directory", "plugin command source relink entry not canonical", "plugin command source relink entry unreadable", "plugin command source relink target resolves to a network path", "plugin command source relink target traverses a suspect link", "plugin command source link marker not a small regular file", "plugin command source printed cwd or an ancestor", "plugin command source printed a relative path", "plugin command source printed nothing", "plugin command source printed multiple lines", "plugin command source exceeded the stdout cap", "plugin command source directory has no plugin content", "plugin command source directory has too many files", "plugin command source directory too large", "plugin command source link mode unsupported on windows", "plugin command source disabled by managed policy", "plugin command source command changed since consent", "plugin command source never consented for an installed plugin", "plugin command source changed between display and run", "plugin command source without consent", "plugin command source declined at the prompt" ]), D9t = "plugin update refused during cli update: ";

class W {
  nameRegistration;
  catalogEntryNames;
  reviewerMarkedEntryNames;
  isAccessAllowed;
  lastFailedWalk;
  staleCatalogFetchedAt;
  catalogLoadInFlight;
  bindingsWriteTail=Promise.resolve();
  marketplaceChoice;
  blockedLogged=new Set;
}

var ke = new K(() => new W);

function tE() {
  return ke.of(B().host);
}

function Gus(e) {
  tE().nameRegistration = e === void 0 ? "none" : e === "pluginDirectory" ? "built-in" : "other";
}

function PHn(e) {
  if (e !== mn) return !1;
  let {nameRegistration: n} = tE();
  return n === "built-in" || n === "none";
}

function x() {
  let e = tE();
  return e.nameRegistration === "built-in" && e.isAccessAllowed?.() === !0;
}

function H4e(e) {
  return tE().reviewerMarkedEntryNames?.has(e) === !0;
}

function J(e) {
  return x() && tE().catalogEntryNames?.has(e) === !0;
}

var yio = [ "agent", "subagentStatusLine" ];

function q(e) {
  return yio.includes(e);
}

function X(e, n) {
  return n ? `${e}@${n.toLowerCase()}` : e;
}

class Z {
  #e=new Map;
  #n=0;
  generation() {
    return this.#n;
  }
  register(e, n, r, s) {
    if (s !== void 0 && s !== this.#n) return;
    this.#e.set(X(e, n), r);
  }
  get(e, n) {
    if (n === void 0) return;
    return this.#e.get(X(e, n));
  }
  clear() {
    this.#e.clear(), this.#n++;
  }
}

var Ee = new K(() => new Z);

function I() {
  return Ee.of(B().host);
}

function Vus() {
  return I().generation();
}

function Kus(e, n, r, s) {
  I().register(e, n, r, s);
}

function v(e, n) {
  return I().get(e, n);
}

function qus() {
  I().clear();
}

var Q = /^skill_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;

function R(e) {
  return Q.test(e);
}

var C = "skill_id";

function M9t(e, n) {
  let r = {};
  if (typeof e === "string" && R(e)) r.skillId = e;
  if (typeof n === "string" && Nue(n)) r.pluginId = n;
  return r.skillId === void 0 && r.pluginId === void 0 ? void 0 : r;
}

var Ie = p(() => u({
  [C]: o().regex(Q).optional().catch(void 0),
  [EFe]: o().regex(zwr).optional().catch(void 0)
})), Ue = 262144, be = () => {};

function H9t() {
  let e = a.CLAUDE_CODE_SKILL_ATTRIBUTION;
  if (e === void 0) return be;
  let n = Wwr("CLAUDE_CODE_SKILL_ATTRIBUTION", e, Ue, Ae);
  return r => n.get(SUn(r));
}

function Ae(e) {
  let n = Ie().safeParse(e);
  if (!n.success) {
    t("Ignoring a CLAUDE_CODE_SKILL_ATTRIBUTION entry: not a JSON object");
    return;
  }
  let r = M9t(n.data[C], n.data[EFe]);
  if (typeof e === "object" && e !== null) {
    for (let [s, g] of [ [ C, r?.skillId ], [ EFe, r?.pluginId ] ]) if (s in e && g === void 0) t(`Ignoring a CLAUDE_CODE_SKILL_ATTRIBUTION entry field: invalid ${s}`);
  }
  return r;
}

class ee {
  pendingUsage=new Map;
  flushTimer=null;
  exitFlushesInFlight=[];
  flushStorageV5=void 0;
}

var ne = new K(() => new ee);

class te {
  flushers=null;
  exitFlushRegistered=!1;
}

var P = new te;

var Te = 6e4;

function ie(e) {
  P.flushers = e;
  let n = y();
  if (n.pendingUsage.size > 0) re(n, e);
}

function y() {
  return ne.of(B().host);
}

function LT(e) {
  let n = Date.now(), r = y(), s = r.pendingUsage.get(e);
  if (s) s.count++, s.lastUsedAt = n; else r.pendingUsage.set(e, {
    count: 1,
    lastUsedAt: n
  });
  if (P.flushers) re(r, P.flushers);
}

function re(e, n) {
  if (!P.exitFlushRegistered) P.exitFlushRegistered = !0, process.on("exit", n.flushAtExit);
  if (!e.flushTimer) e.flushTimer = setTimeout(n.flush, Te), e.flushTimer.unref?.();
}

function oe(e) {
  y().exitFlushesInFlight.push(e);
}

function se(e) {
  let n = y().exitFlushesInFlight, r = n.indexOf(e);
  if (r !== -1) n.splice(r, 1);
}

function le() {
  let e = y(), n = e.exitFlushesInFlight.flat();
  return e.exitFlushesInFlight = [], n.length > 0 ? n : null;
}

function ae(e) {
  y().flushStorageV5 = e;
}

function ue() {
  return y().flushStorageV5;
}

function U() {
  let e = y();
  if (e.flushTimer) clearTimeout(e.flushTimer), e.flushTimer = null;
  if (e.pendingUsage.size === 0) return null;
  let n = [ ...e.pendingUsage.entries() ];
  return e.pendingUsage.clear(), n;
}

function _io(e) {
  return y().pendingUsage.has(e);
}

function de(e) {
  let {pendingUsage: n} = y();
  for (let r of n.keys()) if (e.has(r.toLowerCase())) n.delete(r);
}

function xe() {
  let e = U();
  if (!e) return;
  Ce(F(e), ue());
}

async function ge(e) {
  let n = U();
  if (!n) return;
  oe(n), await Ce(F(n), e), se(n);
}

function Yus(e) {
  if (z() && e !== void 0) ae(e), bt(() => ge(e)), bI(() => ge(e));
}

function ve() {
  let e = [ ...le() ?? [], ...U() ?? [] ];
  if (e.length === 0) return;
  ton(F(e));
}

ie({
  flush: xe,
  flushAtExit: ve
});

function F(e) {
  return n => {
    let r = {
      ...n.pluginUsage
    };
    for (let [s, g] of e) {
      let f = r[s];
      r[s] = {
        usageCount: (f?.usageCount ?? 0) + g.count,
        lastUsedAt: g.lastUsedAt,
        lastUsedNumStartups: n.numStartups
      };
    }
    return {
      ...n,
      pluginUsage: r
    };
  };
}

function pgr(e, n) {
  let r = Date.now();
  Ce(s => {
    let g = e.filter(m => !s.pluginUsage?.[m]);
    if (g.length === 0) return s;
    let f = {
      ...s.pluginUsage
    };
    for (let m of g) f[m] = {
      usageCount: 0,
      lastUsedAt: r,
      lastUsedNumStartups: s.numStartups
    };
    return {
      ...s,
      pluginUsage: f
    };
  }, n);
}

function $Rt(e, n) {
  let r = new Set(e.map(s => s.toLowerCase()));
  de(r), Ce(s => {
    let f = Object.keys(s.pluginUsage ?? {}).filter(_ => r.has(_.toLowerCase()));
    if (f.length === 0) return s;
    let m = {
      ...s.pluginUsage
    };
    for (let _ of f) delete m[_];
    return {
      ...s,
      pluginUsage: m
    };
  }, n);
}

function IHn(e) {
  let n = ce().pluginUsage;
  return [ e, ...MR(e) ].map(r => n?.[r]).find(r => r !== void 0);
}

function Xus(e, n) {
  let r = Date.now();
  Ce(s => {
    let g = e.filter(m => s.pluginUsage?.[m]);
    if (g.length === 0) return s;
    let f = {
      ...s.pluginUsage
    };
    for (let m of g) {
      let _ = f[m];
      if (!_) continue;
      f[m] = {
        ..._,
        lastUsedAt: r,
        lastUsedNumStartups: s.numStartups
      };
    }
    return {
      ...s,
      pluginUsage: f
    };
  }, n);
}

function fe(e, n) {
  let r = ce().pluginUsageLspGraceAppliedIds;
  if (e.every(g => r?.includes(g))) return;
  let s = Date.now();
  Ce(g => {
    let f = new Set(g.pluginUsageLspGraceAppliedIds), m = e.filter(S => !f.has(S));
    if (m.length === 0) return g;
    let _ = {
      ...g.pluginUsage
    };
    for (let S of m) {
      let h = _[S];
      if (!h || h.usageCount > 0) continue;
      _[S] = {
        ...h,
        lastUsedAt: s,
        lastUsedNumStartups: g.numStartups
      };
    }
    return {
      ...g,
      pluginUsage: _,
      pluginUsageLspGraceAppliedIds: [ ...f, ...m ]
    };
  }, n);
}

function OHn(e, n, r) {
  return {
    sessionsSinceLastUse: Math.max(0, n - e.lastUsedNumStartups),
    daysSinceLastUse: Math.max(0, Math.floor((r - e.lastUsedAt) / 864e5))
  };
}

function pO(e, n) {
  let r = v(e, n) ?? n, s = r ? `${e}@${r.toLowerCase()}` : e;
  return Cn(VPe(s));
}

function Qre(e) {
  let {name: n, marketplace: r} = ec(e);
  return But(r) || ye(n, r) ? Cn(e) : b("third-party");
}

function _e(e) {
  return e === mn && k("tengu_wise_kite", !1);
}

function ye(e, n) {
  return _e(n) && J(e);
}

function Jus(e, n) {
  return e.length > 0 ? v_(e.map(r => n(r) ? Qre(r) : b("third-party")).sort()) : void 0;
}

function KCe(e) {
  if (_e(e) && x()) return b(mn);
  return But(e) ? Cn(e.toLowerCase()) : b("third-party");
}

function r7(e, n, r) {
  if (n === Fi) return "default-bundle";
  if (Pl(n)) return "official";
  if (n !== void 0 && Hin.has(n.toLowerCase())) return "community";
  if (r?.has(e)) return "org";
  return "user-local";
}

function o7(e) {
  return e === "official" || e === "default-bundle";
}

function Re(e) {
  return o7(e) || e === "community";
}

function FRt(e, n, r) {
  let s = n?.type === "prompt" ? n.source : void 0, g = n?.type === "prompt" ? n.pluginInfo : void 0, f = g ? ec(g.repository).marketplace : void 0, _ = s === "builtin" || s === "bundled" || s === "plugin" && Pl(f) || Fc();
  Ws("skill_activated", {
    "skill.name": _ ? e : "custom_skill",
    invocation_trigger: r,
    ...s && {
      "skill.source": s
    },
    ...n?.kind && {
      "skill.kind": n.kind
    },
    ..._ && g && {
      "plugin.name": g.pluginManifest.name
    },
    ..._ && f && {
      "marketplace.name": f
    }
  });
}

function Mce(e, n, r, s) {
  return {
    ...e && {
      skill_source: c(e)
    },
    ...n && {
      skill_loaded_from: c(n)
    },
    ...r && {
      skill_kind: c(r)
    },
    ...s && {
      skill_created_by: c(s)
    }
  };
}

function bio(e) {
  return {
    skill_name_hash: Cn(VPe(e))
  };
}

function Sio(e, n) {
  if (!e) return {};
  return {
    parent_skill_name_hash: Cn(VPe(e)),
    parent_command_name: wio(e, n)
  };
}

function wio(e, n) {
  return Cn(n ? e : "custom");
}

function aY({rawName: e, canonicalName: n, isMcp: r, isBuiltIn: s, isBundled: g, isOfficial: f}) {
  let m = r ? "mcp" : s || g || f ? e : "custom";
  return {
    sanitizedName: Cn(m),
    skillNameHash: m === "custom" ? bio(n) : {}
  };
}

function o8(e) {
  if (e.source !== "plugin" || !e.pluginInfo?.repository) return !1;
  return Pl(ec(e.pluginInfo.repository).marketplace);
}

function L9t(e) {
  let n = e.pluginInfo;
  if (!n || !o8(e)) return {
    plugin_name: b(ov),
    plugin_repository: b(ov)
  };
  return {
    plugin_name: Cn(n.pluginManifest.name),
    plugin_repository: Cn(n.repository)
  };
}

function vio(e, n, r) {
  if (e.isBuiltin) return "default-enable";
  if (n?.has(e.name)) return "org-policy";
  if (e.installationPreference === "required" || e.installationPreference === "auto_install") return "admin-install";
  if (r.some(s => e.path.startsWith(s.endsWith(me) ? s : s + me))) return "seed-mount";
  return "user-install";
}

function N9t(e, n, r = null) {
  let s = r7(e, n, r), g = Re(s) || P3e(e, n) || ye(e, n), f = n === Fi ? Jxs(e) : void 0;
  return {
    plugin_id_hash: pO(e, n),
    plugin_scope: PHn(n) ? c("directory") : c(s),
    plugin_name_redacted: g ? Cn(e) : b(ov),
    marketplace_name_redacted: g && n ? Cn(n) : b(ov),
    is_official_plugin: o7(s),
    ...f !== void 0 && {
      plugin_name_previous: Cn(f),
      plugin_id_hash_previous: pO(f, n)
    }
  };
}

function _V(e, n, r = null) {
  let s = v(e, n) ?? n;
  return {
    _PROTO_plugin_name: e,
    ...s && {
      _PROTO_marketplace_name: s
    },
    ...N9t(e, n, r)
  };
}

function L(e) {
  if (e === void 0 || !Nue(e)) return;
  return Cn(e);
}

function Fe(e) {
  if (e === void 0 || !R(e)) return;
  return Cn(e);
}

var Ne = /^[0-9a-f]{40}$/;

function Le(e, n) {
  if (e === void 0 || !But(n)) return;
  let r = e.toLowerCase();
  return Ne.test(r) ? Cn(r) : void 0;
}

function URt(e, n) {
  let r = Le(n, ec(e).marketplace);
  return r !== void 0 ? {
    plugin_version_sha: r
  } : {};
}

function Zre(e) {
  return e.pluginSource !== void 0 ? fO(e.pluginSource, tp()) : {};
}

function fgr(e, n, r) {
  i("tengu_plugin_folder_shadowed", {
    component: c(r),
    ..._V(e, n)
  });
}

function mgr(e, n, r) {
  i("tengu_plugin_renamed", {
    outcome: c(r.kind),
    chain_depth: r.kind === "unresolved" ? void 0 : r.chainDepth,
    reason: r.kind === "unresolved" ? c(r.reason) : void 0,
    ..._V(e, n)
  });
}

function bit(e, n, r) {
  let s = new Map;
  for (let {name: g, source: f} of n) {
    let m = s.get(g);
    if (m === void 0) s.set(g, [ f ]); else m.push(f);
  }
  for (let [g, f] of s) {
    let m = D(f);
    if (m.length < 2) continue;
    i("tengu_plugin_name_collision", {
      item_type: c(e),
      _PROTO_skill_name: g,
      item_name_hash: pO(g),
      source_count: m.length,
      sources: vl(m),
      ...r.resolves && {
        winner_source: pe(f.at(-1))
      }
    });
  }
}

function fO(e, n = null) {
  let {name: r, marketplace: s} = ec(e);
  return _V(r, s, n);
}

function De(e, n = tp()) {
  let {marketplace: r} = ec(e.repository), s = L(e.serverPluginId);
  return {
    ..._V(e.pluginManifest.name, r, n),
    ...s !== void 0 && {
      server_plugin_id: s
    }
  };
}

function Hce(e, n) {
  let r = Fe(e.serverAttribution?.skillId), s = L(e.serverAttribution?.pluginId);
  return {
    ...e.pluginInfo && De(e.pluginInfo, n),
    ...r !== void 0 && {
      skill_id: r
    },
    ...s !== void 0 && {
      server_plugin_id: s
    }
  };
}

function Qus(e, n) {
  for (let r of e) try {
    let {marketplace: s} = ec(r.repository);
    if (o7(r7(r.name, s, n))) Sfs(r.name, s);
  } catch (s) {
    d(s);
  }
}

function Se(e) {
  let n = Hi(e);
  return n === void 0 || rf(n);
}

function Me(e) {
  return e.isBuiltin === !0 || Se(e.repository);
}

function Eio(e) {
  return e.type === "prompt" && e.loadedFrom === "plugin" && e.pluginInfo !== void 0 && !Se(e.pluginInfo.repository);
}

function Zus(e) {
  let n = new Map;
  for (let r of e) {
    if (!Eio(r)) continue;
    let s = n.get(r.pluginInfo.repository);
    if (s) s.push(r.name); else n.set(r.pluginInfo.repository, [ r.name ]);
  }
  return n;
}

function we(e, n) {
  if (e === null) return {};
  let r = e.get(n) ?? [];
  return {
    skill_name_hash_count: r.length,
    ...r.length > 0 && {
      skill_name_hashes: Cn(r.map(s => VPe(s)).sort().join(","))
    }
  };
}

function eps(e, n, r, s, g) {
  let f = Fc(), m = ce().numStartups, _ = Date.now(), S = [], h = e.filter(l => l.lspServers && Object.keys(l.lspServers).length > 0).map(l => l.repository);
  if (h.length > 0) fe(h, g);
  for (let l of e) {
    let {marketplace: E} = ec(l.repository), A = IHn(l.repository);
    if (!A) S.push(l.repository);
    let {sessionsSinceLastUse: he, daysSinceLastUse: Pe} = A ? OHn(A, m, _) : {
      sessionsSinceLastUse: 0,
      daysSinceLastUse: 0
    }, M = r7(l.name, E, n), w = vio(l, n, r), O = (l.skillsPath ? 1 : 0) + (l.skillsPaths?.length ?? 0), G = (l.commandsPath ? 1 : 0) + (l.commandsPaths?.length ?? 0), H = (l.agentsPath ? 1 : 0) + (l.agentsPaths?.length ?? 0), V = L(l.serverPluginId), j = l.hooksConfig !== void 0 || l.modulePath !== void 0, T = o7(M) || f;
    Ws("plugin_loaded", {
      "plugin.name": T ? l.name : ov,
      ...E && {
        "marketplace.name": T ? E : ov
      },
      ...T && l.manifest.version && {
        "plugin.version": l.manifest.version
      },
      "plugin.scope": M,
      enabled_via: w,
      plugin_id_hash: pO(l.name, E),
      has_hooks: j,
      has_mcp: !l.skipMcpDiscovery && l.mcpServers !== void 0,
      host_owned_mcp: l.skipMcpDiscovery === !0,
      skill_path_count: O,
      command_path_count: G,
      agent_path_count: H,
      safe_mode: String(Pr())
    }), i("tengu_plugin_enabled_for_session", {
      ..._V(l.name, E, n),
      ...V !== void 0 && {
        server_plugin_id: V
      },
      enabled_via: c(w),
      ...l.installationPreference !== void 0 && {
        installation_preference: c(l.installationPreference)
      },
      skill_path_count: O,
      command_path_count: G,
      agent_path_count: H,
      ...we(Me(l) ? null : s, l.repository),
      has_mcp: !l.skipMcpDiscovery && l.mcpServers !== void 0,
      host_owned_mcp: l.skipMcpDiscovery === !0,
      has_lsp: l.lspServers !== void 0,
      has_hooks: j,
      has_settings: l.settings !== void 0,
      sessions_since_last_use: he,
      days_since_last_use: Pe,
      safe_mode: Pr(),
      ...l.settings && {
        settings_keys: vl(Object.keys(l.settings).filter(q))
      },
      ...l.manifest.version && {
        version: Di(l.manifest.version)
      },
      ...URt(l.repository, l.gitCommitSha)
    });
  }
  if (S.length > 0) pgr(S, g);
}

var Oe = [ "network", "not-found", "permission", "policy", "validation", "in-use", "unknown" ], Be = new Set(Oe);

function Ge(e) {
  return typeof e === "string" && Be.has(e);
}

function lY(e) {
  if (typeof e === "object" && e !== null && "pluginCommandErrorCategory" in e && Ge(e.pluginCommandErrorCategory)) return e.pluginCommandErrorCategory;
  let n = String(e?.message ?? e), r = vq(e);
  if (typeof r === "string" && (Y.has(r) || r.startsWith(D9t))) return "policy";
  if (/ENOTFOUND|ECONNREFUSED|EAI_AGAIN|ETIMEDOUT|ECONNRESET|network|Could not resolve|Connection refused|timed out/i.test(n)) return "network";
  if (/\b404\b|not found|does not exist|no such plugin/i.test(n)) return "not-found";
  if (/\b40[13]\b|EACCES|EPERM|permission denied|unauthorized/i.test(n)) return "permission";
  if (/blocked by your organization'?s policy|required by your organization/i.test(n)) return "policy";
  if (/(?:the command|it|nothing) was not run|nothing was run|command that installs it was not run|is ignored inside a Claude Code session|Command-sourced plugins are disabled|not supported on Windows yet/i.test(n)) return "policy";
  if (/invalid|malformed|schema|validation|parse error/i.test(n)) return "validation";
  return "unknown";
}

function kio(e) {
  let n = e.toLowerCase();
  return eX.has(n) ? Cn(n) : b(ov);
}

function tps(e, n, r) {
  for (let s of e) {
    let {name: g, marketplace: f} = ec(s.source), m = "plugin" in s && s.plugin ? s.plugin : g;
    i("tengu_plugin_load_failed", {
      error_category: c(s.type),
      cache_only: r?.cacheOnly ?? !1,
      ..."component" in s && {
        component: c(s.component)
      },
      ..."errno" in s && {
        errno: ME(s.errno)
      },
      ...{
        is_directory: PHn(f),
        removed_from_directory: "removedFromDirectory" in s && s.removedFromDirectory === !0
      },
      ..._V(m, f, n),
      ...s.type === "marketplace-load-failed" && s.untrustedReservedName === !0 && {
        plugin_name_redacted: b(ov),
        marketplace_name_redacted: kio(s.marketplace),
        plugin_scope: c("user-local"),
        is_official_plugin: !1
      }
    });
  }
}

export { M9t, H9t, D9t, tE, Gus, PHn, H4e, yio, Vus, Kus, qus, LT, _io, Yus, pgr, $Rt, IHn, Xus, OHn, pO, Qre, Jus, KCe, r7, o7, FRt, Mce, bio, Sio, wio, aY, o8, L9t, vio, N9t, _V, URt, Zre, fgr, mgr, bit, fO, Hce, Qus, Eio, Zus, eps, lY, kio, tps };
