// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { Hc } from "./chunk-67jt18z1.js";

import { mn, kn, JT } from "./chunk-8drhysk2.js";

import { jRe, k$e, WRe, qb } from "./chunk-2xhrgh8h.js";

import { vFe } from "./chunk-t70vnbgq.js";

import { urt, tre, vts, $6t, HLe, qy, Gl, Jv, Vas, tst, ni } from "./chunk-84yp45y8.js";

import { D } from "./chunk-hmqkrrtz.js";

async function u6o(a, r) {
  return a.some(n => n.endsWith(`@${mn}`)) ? Vas(r) : "not_needed";
}

var M = [ "user", "project", "local" ];

async function fne(a, r) {
  let n = new Map;
  for (let e of a) {
    if (e.type !== "dependency-unsatisfied" || e.reason !== "not-found") continue;
    let c = n.get(e.dependency);
    if (!c) c = new Set, n.set(e.dependency, c);
    c.add(e.source);
  }
  if (n.size === 0) return {
    installed: [],
    stillUnresolved: [],
    marketplaceMissing: []
  };
  let i = await Gl(r), f = M.map(e => [ e, urt(JT(e)) ]), g = [], s = [], p = [];
  for (let [e, c] of n) {
    let u = kn(e).marketplace, k = u ? qy(i, u) : void 0;
    if (!u || !k) {
      s.push(e), p.push(e);
      continue;
    }
    if (!Hc(k.source)) {
      t(`resolveMissingDependencies: skipping "${e}" \u2014 marketplace "${u}" is blocked by enterprise policy`), 
      s.push(e);
      continue;
    }
    let y = !1;
    for (let o of c) {
      let d = kn(o).marketplace;
      if (d === u) {
        y = !0;
        break;
      }
      if (!d) continue;
      if ((await Jv(d, r))?.allowCrossMarketplaceDependenciesOn?.includes(u)) {
        y = !0;
        break;
      }
    }
    if (!y) {
      t(`resolveMissingDependencies: skipping "${e}" \u2014 cross-marketplace dependency not in any declaring marketplace's allowlist`), 
      s.push(e);
      continue;
    }
    try {
      let o = await tst(e, r, "install");
      if (!o) {
        s.push(e);
        continue;
      }
      let d = o.entry.source;
      if (typeof d === "object" && d.source === "archive" && jRe(k$e({
        entry: o.entry,
        archiveUrl: d.url,
        marketplaceSource: WRe(e, i),
        trustedSettingsEntryAuth: HLe(qb(e), o.entry.name)
      }).entry)) {
        t(`resolveMissingDependencies: skipping "${e}" \u2014 it fetches its archive through an entry headersHelper, which only an explicit install from /plugin may run`), 
        s.push(e);
        continue;
      }
      let m = v(c, f), h = await $6t({
        pluginId: e,
        entry: o.entry,
        scope: m ?? "user",
        marketplaceInstallLocation: o.marketplaceInstallLocation,
        trigger: "dependency-resolution",
        explicit: !1,
        auto: m !== void 0,
        requiredByEnabledDependent: !0,
        storageV5: r
      });
      if (h.ok) {
        for (let S of h.closure) if (!g.includes(S)) g.push(S);
      } else t(`resolveMissingDependencies: install of "${e}" did not complete (${h.reason})`, {
        level: "warn"
      }), s.push(e);
    } catch (o) {
      t(`resolveMissingDependencies: install of "${e}" threw: ${l(o)}`, {
        level: "warn"
      }), s.push(e);
    }
  }
  return {
    installed: g,
    stillUnresolved: s,
    marketplaceMissing: p
  };
}

async function gKr(a, r) {
  let {errors: n} = await ni(r);
  return n.filter(vFe).filter(i => i.source === a);
}

async function owt(a, r) {
  let n = await gKr(a, r);
  if (n.length === 0) return null;
  let {installed: i, marketplaceMissing: f} = await fne(n, r), g = new Set(i), s = D(n.map(p => p.dependency)).filter(p => !g.has(p));
  return {
    suffix: `${tre(i)}${vts(s, f)}`,
    changed: i.length > 0
  };
}

function v(a, r) {
  for (let [n, i] of r) for (let f of a) if (i.has(f)) return n;
  return;
}

export { u6o, fne, gKr, owt };
