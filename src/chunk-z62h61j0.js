// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { zn, ke, Qr } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { x, l, E } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { _, Y, se, t } from "./chunk-kawq2919.js";

import { gk, br, Ppe, wf, Pl } from "./chunk-8drhysk2.js";

import { fO, lY } from "./chunk-81rtbneg.js";

import { d } from "./chunk-6ah1819r.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { Gc } from "./chunk-r276nwd3.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { yh, Ef, jie } from "./chunk-q6wab2jw.js";

import { oI } from "./chunk-dd98x6x7.js";

import { tp } from "./chunk-sg5gpfs4.js";

import { LSe, xl, wdt } from "./chunk-67jt18z1.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { qy, aN, e3t, zas, qd, Gl, Rre, kno, YAt, Jv, GB, Yas, Nd, iV, QAt } from "./chunk-84yp45y8.js";

import { Nae } from "./chunk-kvxc0w8v.js";

import { yt } from "./chunk-9zhz923g.js";

import { readFile as N } from "fs/promises";

import { join as j } from "path";

var L = "flagged-plugins.json", U = 1728e5;

function F() {
  return j(xl(), L);
}

function D(e) {
  let r = Y(e);
  if (typeof r !== "object" || r === null || !("plugins" in r) || typeof r.plugins !== "object" || r.plugins === null) return {};
  let s = r.plugins, g = {};
  for (let [o, n] of Object.entries(s)) if (n && typeof n === "object" && "flaggedAt" in n && typeof n.flaggedAt === "string") {
    let u = {
      flaggedAt: n.flaggedAt
    };
    if ("seenAt" in n && typeof n.seenAt === "string") u.seenAt = n.seenAt;
    g[o] = u;
  }
  return g;
}

var A = new Set([ "ENOSPC", "EROFS", "EACCES", "ENOENT", "ENOTDIR" ]), B = new Set([ ...A, "EEXIST", "EISDIR", "AbsentParent", "UnexpectedAbsent" ]);

function M(e) {
  return z() && e !== void 0 && LSe("flagged", xl()) !== null ? e : void 0;
}

async function R(e) {
  let r = F(), s = M(e);
  if (s) {
    let g = await s.read([ Fe.pluginRegistry("flagged") ]), o = g.ok ? g.value.items[0] : void 0;
    if (!o?.found) return {};
    let n = o.value;
    try {
      return D(Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString("utf-8"));
    } catch {
      return {};
    }
  }
  try {
    let g = await N(r, {
      encoding: "utf-8"
    });
    return D(g);
  } catch {
    return {};
  }
}

async function h(e, r) {
  let s = F(), g = M(r);
  if (g) {
    let o = await g.write(Fe.pluginRegistry("flagged"), _({
      plugins: e
    }, null, 2));
    if (o.ok) {
      Ge().flaggedPlugins = e;
      return;
    }
    let n = "telemetryCode" in o.error ? o.error.telemetryCode : void 0;
    if (n !== void 0 && B.has(n)) t(`Failed to persist flagged plugins: ${yt(o.error)}`, {
      level: "error"
    }); else d(new x(`Failed to persist flagged plugins: ${o.error.code}${n === void 0 ? "" : ` ${n}`}`, "flagged plugins v5 write failed"));
    return;
  }
  try {
    await se().mkdir(xl());
    let o = _({
      plugins: e
    }, null, 2);
    await Tn(s, o, 384), Ge().flaggedPlugins = e;
  } catch (o) {
    let n = E(o);
    if (n !== void 0 && A.has(n)) t(`Failed to persist flagged plugins: ${o}`, {
      level: "error"
    }); else d(o);
  }
}

async function T(e) {
  let r = await R(e), s = Date.now(), g = !1;
  for (let [o, n] of Object.entries(r)) if (n.seenAt && s - new Date(n.seenAt).getTime() >= U) delete r[o], 
  g = !0;
  if (Ge().flaggedPlugins = r, g) await h(r, e);
}

function syt() {
  return Ge().flaggedPlugins ?? {};
}

async function O(e, r) {
  let s = Ge();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await R(r);
  let g = {
    ...s.flaggedPlugins,
    [e]: {
      flaggedAt: (new Date).toISOString()
    }
  };
  await h(g, r), t(`Flagged plugin: ${e}`);
}

async function GUo(e, r) {
  let s = Ge();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await R(r);
  let g = (new Date).toISOString(), o = !1, n = {
    ...s.flaggedPlugins
  };
  for (let u of e) {
    let f = n[u];
    if (f && !f.seenAt) n[u] = {
      ...f,
      seenAt: g
    }, o = !0;
  }
  if (o) await h(n, r);
}

async function VUo(e, r) {
  let s = Ge();
  if (s.flaggedPlugins === null) s.flaggedPlugins = await R(r);
  if (!(e in s.flaggedPlugins)) return;
  let {[e]: g, ...o} = s.flaggedPlugins;
  s.flaggedPlugins = o, await h(o, r);
}

function G(e, r, s) {
  let g = new Set(r.plugins.map(u => u.name)), o = `@${s}`, n = [];
  for (let u of Object.keys(e.plugins)) {
    if (!u.endsWith(o)) continue;
    let f = u.slice(0, -o.length), P = r.renames && QAt(f, r.renames, g)?.kind === "renamed";
    if (!g.has(f) && !P) n.push(u);
  }
  return n;
}

async function bpn(e) {
  await T(e);
  let r = z() && e !== void 0 ? await iV(e) : Nd(), s = syt(), g = await Gl(e), o = [];
  for (let [n, u] of Object.entries(g)) try {
    if (n.toLowerCase() === yh) continue;
    if (wf(u.source) && !Object.keys(r.plugins).some(m => m.endsWith(`@${n}`))) continue;
    let f = wf(u.source) ? await Jv(n, e, {
      registryEntry: u
    }) : await GB(n, e);
    if (f === null) {
      if (Object.keys(r.plugins).some(m => m.endsWith(`@${n}`))) i("tengu_plugin_delisted_enforcement", {
        outcome: b("scan-skipped-no-catalog"),
        is_official_marketplace: !1
      });
      continue;
    }
    if (!f.forceRemoveDeletedPlugins) continue;
    let P = G(r, f, n);
    for (let m of P) {
      if (m in s) continue;
      let S = r.plugins[m] ?? [];
      if (!S.some(p => p.scope === "user" || p.scope === "project" || p.scope === "local")) continue;
      for (let p of S) {
        let {scope: k} = p;
        if (k !== "user" && k !== "project" && k !== "local") continue;
        try {
          let y = await Nae(m, k, !0, e, {
            settingsStillOn: "remove-anyway"
          });
          i("tengu_plugin_delisted_enforcement", {
            outcome: y.success ? b("uninstalled") : b("uninstall-failed"),
            scope: c(k),
            ...!y.success && {
              error_kind: c(lY(y.message))
            },
            ...fO(m, tp())
          });
        } catch (y) {
          t(`Failed to auto-uninstall delisted plugin ${m} from ${k}: ${l(y)}`, {
            level: "error"
          }), i("tengu_plugin_delisted_enforcement", {
            outcome: b("uninstall-failed"),
            scope: c(k),
            error_kind: c(lY(y)),
            ...fO(m, tp())
          });
        }
      }
      await O(m, e), o.push(m);
    }
  } catch (f) {
    t(`Failed to check for delisted plugins in "${n}": ${l(f)}`, {
      level: "warn"
    }), i("tengu_plugin_delisted_enforcement", {
      outcome: b("scan-failed"),
      error_kind: c(lY(f)),
      _PROTO_marketplace_name: n,
      is_official_marketplace: Pl(n)
    });
  }
  return o;
}

import { isAbsolute as K, resolve as W } from "path";

function _Nr(e, r, s) {
  let g = [], o = [], n = [];
  for (let [u, f] of Object.entries(e)) {
    let P = qy(r, u), m = C(f.source, s?.projectRoot);
    if (!P) g.push(u); else if (f.sourceIsFallback) n.push(u); else if (!zn(m, P.source)) o.push({
      name: u,
      declaredSource: m,
      materializedSource: P.source
    }); else n.push(u);
  }
  return {
    missing: g,
    sourceChanged: o,
    upToDate: n
  };
}

async function _pn(e) {
  let r = aN();
  if (Object.keys(r).length === 0) return {
    installed: [],
    updated: [],
    failed: [],
    upToDate: [],
    skipped: []
  };
  let s = e?.storageV5, g;
  try {
    g = await qd(s);
  } catch (a) {
    t(`reconciler: failed to load known_marketplaces.json, treating as empty: ${l(a)}`, {
      level: "error"
    }), g = {};
  }
  let o = _Nr(r, g, {
    projectRoot: ke()
  }), n = [ ...o.missing.map(a => ({
    name: a,
    source: C(r[a].source),
    action: "install"
  })), ...o.sourceChanged.map(({name: a, declaredSource: p}) => ({
    name: a,
    source: p,
    action: "update"
  })) ], u = [], f = [], P = [];
  for (let a of n) {
    if (zas(a.name)) {
      t(`[reconcile] '${a.name}' is the built-in ${br}'s name: a settings entry under it adds no marketplace. Only an autoUpdate from ${e3t} counts, and only while the Directory is turned on.`), 
      u.push(a.name);
      continue;
    }
    let p = YAt(a.name);
    if (gk(a.name) || p !== void 0) {
      let y = `${p === void 0 ? Ppe(a.name) : kno(a.name, p)} This marketplace was not added. Remove it from extraKnownMarketplaces in settings.`;
      t(`[reconcile] '${a.name}' ${y}`, {
        level: "warn"
      }), P.push({
        name: a.name,
        error: y
      }), e?.onProgress?.({
        type: "failed",
        name: a.name,
        error: y
      });
      continue;
    }
    if (e?.skip?.(a.name, a.source)) {
      u.push(a.name);
      continue;
    }
    if (wdt(a.name)) {
      let k = `not materialized: names starting with "${jie}" are reserved for marketplaces hosted on claude.ai \u2014 rename the declaration`;
      t(`[reconcile] '${a.name}' ${k}`, {
        level: "warn"
      }), P.push({
        name: a.name,
        error: k
      }), e?.onProgress?.({
        type: "failed",
        name: a.name,
        error: k
      });
      continue;
    }
    if (a.action === "update" && Ef(a.source) && !await Gc(a.source.path)) {
      t(`[reconcile] '${a.name}' declared path does not exist; keeping materialized entry`), 
      u.push(a.name);
      continue;
    }
    f.push(a);
  }
  let m = [], S = [];
  if (f.length > 0) {
    t(`[reconcile] ${f.length} marketplace(s): ${f.map(a => `${a.name}(${a.action})`).join(", ")}`);
    for (let a = 0; a < f.length; a++) {
      let {name: p, source: k, action: y} = f[a];
      e?.onProgress?.({
        type: "installing",
        name: p,
        action: y,
        index: a + 1,
        total: f.length
      });
      try {
        let I = await Rre(k, void 0, s, p);
        if (y === "install") m.push(p); else S.push(p);
        e?.onProgress?.({
          type: "installed",
          name: p,
          alreadyMaterialized: I.alreadyMaterialized
        });
      } catch (I) {
        let w = l(I);
        P.push({
          name: p,
          error: w
        }), e?.onProgress?.({
          type: "failed",
          name: p,
          error: w
        }), t(`[reconcile] failed to ${y} marketplace '${p}': ${w}`, {
          level: "error"
        });
      }
    }
  }
  return await Yas(s), {
    installed: m,
    updated: S,
    failed: P,
    upToDate: o.upToDate,
    skipped: u
  };
}

function C(e, r) {
  if ((e.source === "directory" || e.source === "file") && !K(e.path)) {
    let s = Qr(), g = s ?? r ?? ke(), o = s === null ? oI(g) : null;
    return {
      ...e,
      path: W(o ?? g, e.path)
    };
  }
  return e;
}

export { syt, GUo, VUo, _Nr, _pn, bpn };
