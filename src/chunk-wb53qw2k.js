// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Kp, qp, he } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b, c } from "./chunk-hwdwjvh8.js";

import { l, Ms } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { Dmt, XIe } from "./chunk-q6wab2jw.js";

import { i } from "./chunk-hedpgw9m.js";

import { Fe } from "./chunk-0cdqg49t.js";

import { kt } from "./chunk-r2h53bm2.js";

import { Dt } from "./chunk-cqgvwwgb.js";

import { qa, mn, kn } from "./chunk-8drhysk2.js";

import { yie } from "./chunk-xywp7esx.js";

import { vPt, TPt, bN, ld } from "./chunk-2xhrgh8h.js";

import { Bf, EP, Edt, b1, Hc } from "./chunk-67jt18z1.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { yFe } from "./chunk-d7768anc.js";

import { W2, NW, aN, sCe, qd, Gl, Jv, sV, Nm, Fu, FQ, ni, cb, Lpr } from "./chunk-84yp45y8.js";

import { lY } from "./chunk-81rtbneg.js";

import { n7, M4e } from "./chunk-af7jrchc.js";

import { B1r } from "./chunk-0ajanf92.js";

import { gzo } from "./chunk-8sb0dzgz.js";

import { eir } from "./chunk-at5r213a.js";

import { qhe, S6r, w6r, v6r } from "./chunk-hc3mmvmx.js";

import { eBo } from "./chunk-adhghtbt.js";

import { NQe } from "./chunk-kvxc0w8v.js";

import { d2e } from "./chunk-z77zn188.js";

import { fne } from "./chunk-4xv14swd.js";

import { N, D } from "./chunk-hmqkrrtz.js";

import { stat as H, writeFile as G } from "fs/promises";

import { join as I } from "path";

var B = 6e5;

function ZUo(n) {
  let o = Ge();
  if (o.autoUpdateListener = n, o.pendingAutoUpdateNotification !== null) n(o.pendingAutoUpdateNotification.updated, o.pendingAutoUpdateNotification.blocked, o.pendingAutoUpdateNotification.reresolved, o.pendingAutoUpdateNotification.announce), 
  o.pendingAutoUpdateNotification = null;
  return () => {
    o.autoUpdateListener = null;
  };
}

async function F(n) {
  let o = await qd(n), u = aN(), a = new Set;
  for (let [s, r] of Object.entries(o)) {
    if (!Hc(r.source)) continue;
    if (W2(r.source) && !vPt()) continue;
    if (XIe(s, r, sCe(s, u))) a.add(s.toLowerCase());
  }
  if (!a.has(mn) && !Object.hasOwn(o, mn) && NW() && Hc({
    source: "pluginDirectory"
  })) {
    if (Object.keys((z() && n !== void 0 ? await Fu(n) : Nm()).plugins).some(r => r.endsWith(`@${mn}`))) a.add(mn);
  }
  return a;
}

async function T(n, o, u, a, s) {
  let r = !1, f = !1, C = null, h = null, _ = !1, k = !1, S = !1, y = !1;
  for (let {scope: m} of o) try {
    let e = await NQe(n, m, a ?? {}, s);
    switch (e.outcome) {
     case "updated":
      r = !0, t(`Plugin autoupdate: updated ${n} from ${e.oldVersion} to ${e.newVersion}`);
      break;

     case "skipped":
      {
        if (t(`Plugin autoupdate: ${n} ${e.message}`), e.skipReason === "entry_helper_deferred") h = {
          type: "autoupdate-deferred-entry-helper",
          source: n,
          plugin: kn(n).name,
          message: e.message
        }; else if (e.blockedBy && e.blockedBy.length > 0) {
          let g = e.blockedBy.map(P => kn(P).name), R = e.blockedBy.filter(P => u.has(P)).map(P => kn(P).name);
          h = {
            type: "autoupdate-blocked-by-pinner",
            source: n,
            plugin: kn(n).name,
            heldAt: e.oldVersion,
            blockedBy: g,
            disabledPinners: R
          };
        }
        break;
      }

     case "failed":
      if (_ = e.failureCode === "not_found" || e.failureCode === "not_cached", k ||= e.failureCode === "directory_identity_changed", 
      S ||= e.failureCode === "directory_listing_not_installable", y ||= e.failureCode === "directory_unavailable" || e.failureCode === "marketplace_policy_blocked" || e.failureCode === "directory_binding_unreadable", 
      e.failureCode === "command_source_skipped") C = n; else if (e.failureCode === "entry_helper_disabled_by_policy" || e.failureCode === "entry_helper_remote_policy_unconsented" || e.failureCode === "plugin_policy_blocked" || e.failureCode === "command_source_refused" && (EP() || !Edt())) h = {
        type: "autoupdate-disabled-by-policy",
        source: n,
        plugin: kn(n).name,
        message: e.message
      }; else if (e.failureCode === "entry_helper_not_inlined") h = {
        type: "generic-error",
        source: n,
        plugin: kn(n).name,
        error: e.message
      }, f = !0; else if (e.failureCode !== "command_source_inactive") f = !0;
      t(`Plugin autoupdate: failed to update ${n}: ${e.message}`, {
        level: "warn"
      });
      break;

     case "up_to_date":
      break;
    }
  } catch (e) {
    f = !0, t(`Plugin autoupdate: error updating ${n}: ${l(e)}`, {
      level: "warn"
    });
  }
  let p = f && !_ && !k && !S && !y && h === null && n.endsWith(`@${mn}`);
  if (p) h = {
    type: "generic-error",
    source: n,
    plugin: kn(n).name,
    error: 'The Anthropic Directory lists a different commit, but the background update failed, so this plugin is still on the old one. Choose "Update now" in /plugin \u2192 Installed to retry and see the error'
  };
  return {
    updated: r ? n : null,
    blocked: h,
    failed: f,
    directoryStuck: p,
    directoryIdentityChanged: k,
    commandSourceSkipped: C
  };
}

async function ANr(n, o = new Set, {skipCommandSources: u = !1} = {}, a) {
  let s = z() && a !== void 0 ? await Fu(a) : Nm(), r = Object.keys(s.plugins);
  if (r.length === 0) return {
    updated: [],
    blocked: [],
    updateFailedCount: 0,
    commandSourceSkipped: [],
    directory: {
      updated: 0,
      updateFailed: 0,
      stuck: 0,
      identityChanged: 0
    }
  };
  let {disabled: f} = await ni(a), C = new Set(f.map(m => m.source));
  if (n.has(mn)) await M4e(Object.entries(s.plugins));
  let h = await Promise.allSettled(r.map(async m => {
    let {marketplace: e} = kn(m);
    if (!e || !n.has(e.toLowerCase())) return null;
    if (o.has(m)) return null;
    let g = s.plugins[m];
    if (!g || g.length === 0) return null;
    let R = FQ(g);
    if (R.length === 0) return null;
    return T(m, R, C, u ? {
      skipCommandSources: !0
    } : void 0, a);
  })), _ = [], k = [], S = [], y = 0, p = {
    updated: 0,
    updateFailed: 0,
    stuck: 0,
    identityChanged: 0
  };
  for (let [m, e] of h.entries()) {
    if (e.status !== "fulfilled" || e.value === null) continue;
    let g = n7(r[m] ?? "");
    if (e.value.updated !== null) {
      if (_.push(e.value.updated), g) p.updated++;
    }
    if (e.value.blocked !== null) k.push(e.value.blocked);
    if (e.value.failed) {
      if (y++, g) p.updateFailed++;
    }
    if (e.value.directoryStuck) p.stuck++;
    if (e.value.directoryIdentityChanged) p.identityChanged++;
    if (e.value.commandSourceSkipped !== null) S.push(e.value.commandSourceSkipped);
  }
  return {
    updated: _,
    blocked: k,
    updateFailedCount: y,
    commandSourceSkipped: S,
    directory: p
  };
}

async function x(n) {
  let o = {
    attemptedCount: 0,
    commandSourced: new Set,
    updated: [],
    blocked: [],
    failedCount: 0
  }, u = EP(), a = !TPt();
  if (u || a) t(u ? "Plugin autoupdate: command-source refresh disabled by managed settings (still excluding command-sourced plugins from the regular pass)" : "Plugin autoupdate: command-source refresh disabled by tengu_plugin_command_source_refresh (still excluding command-sourced plugins from the regular pass)");
  try {
    let s = z() && n !== void 0 ? await Fu(n) : Nm(), r = new Map;
    for (let [_, k] of Object.entries(s.plugins)) {
      let S = FQ(k ?? []), {name: y, marketplace: p} = kn(_);
      if (S.length === 0 || !y || !p) continue;
      let m = r.get(p) ?? [];
      m.push({
        pluginId: _,
        name: y,
        installations: S
      }), r.set(p, m);
    }
    let f, C = new Set, h = r.size > 0 ? await Gl(n) : {};
    for (let [_, k] of r) {
      let S = h[_];
      if (b1(S?.source)) {
        for (let {pluginId: p, installations: m} of k) if (m.some(e => e.sourceCommand !== void 0)) o.commandSourced.add(p);
        continue;
      }
      let y = await Jv(_, n);
      if (!y) continue;
      for (let {pluginId: p, name: m, installations: e} of k) {
        let g = y.plugins.find(w => w.name === m);
        if (!g || typeof g.source === "string" || g.source.source !== "command") continue;
        if (o.commandSourced.add(p), u || a) continue;
        if (!f) f = new Set(await d2e()), C = new Set((await ni(n)).disabled.map(w => w.source));
        if (!f.has(p) || Bf(p)) {
          t(`Plugin autoupdate: not re-resolving ${p} (disabled or blocked by policy)`);
          continue;
        }
        let R = bN(g.source), P = e.filter(w => w.sourceCommand !== R);
        if (P.length > 0) {
          let w = P.every(v => v.sourceCommand === void 0), M = D(P.map(v => v.scope)).map(v => qa("plugin update", p, `--scope ${v}`)).filter(v => v !== null).map(v => `\`${v}\``);
          t(`Plugin autoupdate: not re-resolving ${p}: marketplace command differs from the accepted one`, {
            level: "warn"
          }), o.blocked.push({
            type: "generic-error",
            source: p,
            plugin: m,
            error: (w ? `${kt(m, 200)}'s marketplace entry now installs it by running a command` : `${kt(m, 200)}'s marketplace entry changed the command it runs`) + ` (\`${kt(g.source.command, Dmt)}${g.source.mode === "link" ? " [mode: link]" : ""}\`). It was not re-run in the background; ${M.length > 0 ? `run ${M.join(" and ")}` : "an explicit per-scope plugin update is needed"} to review and accept it.`
          });
        }
        let U = e.filter(w => w.sourceCommand === R);
        if (U.length === 0) continue;
        o.attemptedCount++, t(`Plugin autoupdate: re-resolving command-sourced plugin ${p}`);
        let E = await T(p, U, C, {
          skipMarketplaceRefresh: !0
        }, n);
        if (E.updated !== null) o.updated.push(E.updated);
        if (E.blocked !== null) o.blocked.push(E.blocked);
        if (E.failed) o.failedCount++;
      }
    }
  } catch (s) {
    t(`Plugin autoupdate: command-source refresh failed: ${l(s)}`, {
      level: "warn"
    });
  }
  return o;
}

function S6n(n, o, u = [], {announce: a = !0} = {}) {
  if (n.length === 0 && o.length === 0) return;
  let s = Ge();
  if (s.autoUpdateListener) s.autoUpdateListener(n, o, u, a); else {
    let r = s.pendingAutoUpdateNotification;
    s.pendingAutoUpdateNotification = {
      updated: D([ ...r?.updated ?? [], ...n ]),
      blocked: [ ...r?.blocked ?? [], ...o ],
      reresolved: D([ ...r?.reresolved ?? [], ...u ]),
      announce: (r?.announce ?? !1) || a
    };
  }
}

function j() {
  return {
    attemptedCount: 0,
    commandSourced: new Set,
    updated: [],
    blocked: [],
    failedCount: 0
  };
}

function CNr(n) {
  let o = Ge();
  return o.commandSourceReresolve ??= (async () => {
    if (Dt()) return j();
    let u = await x(n);
    if (u.attemptedCount > 0) yFe();
    try {
      S6n(u.updated, u.blocked, u.updated);
    } catch (a) {
      d(a);
    }
    return u;
  })(), o.commandSourceReresolve;
}

function O(n) {
  return (async () => {
    let o = await CNr(n), u = Date.now(), a = {
      marketplaces_refreshed: 0,
      marketplace_refresh_failed: 0,
      marketplace_refresh_policy_skipped: 0,
      plugins_updated: 0,
      plugin_update_failed: 0,
      plugins_blocked_by_pin: 0,
      plugins_helper_deferred: 0,
      plugins_policy_blocked: 0,
      command_plugins_refreshed: o.attemptedCount,
      command_plugin_refresh_failed: o.failedCount
    }, s = {};
    s = {
      directory_updated: 0,
      directory_update_failed: 0,
      directory_update_stuck: 0,
      directory_identity_changed: 0
    };
    let r = () => {
      if (o.attemptedCount > 0 || o.failedCount > 0) i("tengu_plugin_autoupdate_pass", {
        outcome: b("skipped"),
        ...a,
        ...s,
        duration_ms: Date.now() - u
      });
    };
    if (yie()) {
      t("Plugin autoupdate: skipped (auto-updater disabled)"), r();
      return;
    }
    try {
      let f = await F(n);
      if (f.size === 0) {
        r();
        return;
      }
      let C = Math.floor(Math.random() * B);
      await J(C, void 0, {
        unref: !0
      }), u = Date.now();
      let h = await Promise.allSettled(Array.from(f).map(async e => {
        try {
          return await sV(e, n, void 0, {
            isBackground: !0
          }), "refreshed";
        } catch (g) {
          if (g instanceof ld) return t(`Plugin autoupdate: marketplace ${e} not refreshed (managed policy): ${l(g)}`), 
          "policy";
          return t(`Plugin autoupdate: failed to refresh marketplace ${e}: ${l(g)}`, {
            level: "warn"
          }), "failed";
        }
      }));
      a.marketplace_refresh_failed = N(h, e => e.status === "fulfilled" && e.value === "failed"), 
      a.marketplace_refresh_policy_skipped = N(h, e => e.status === "fulfilled" && e.value === "policy"), 
      a.marketplaces_refreshed = f.size - a.marketplace_refresh_failed - a.marketplace_refresh_policy_skipped, 
      t("Plugin autoupdate: checking installed plugins");
      let {updated: _, blocked: k, updateFailedCount: S, directory: y} = await ANr(f, o.commandSourced, {
        skipCommandSources: !0
      }, n);
      if (a.plugins_updated = _.length, a.plugin_update_failed = S, s = {
        directory_updated: y.updated,
        directory_update_failed: y.updateFailed,
        directory_update_stuck: y.stuck,
        directory_identity_changed: y.identityChanged
      }, a.plugins_blocked_by_pin = N(k, e => e.type === "autoupdate-blocked-by-pinner"), 
      a.plugins_helper_deferred = N(k, e => e.type === "autoupdate-deferred-entry-helper"), 
      a.plugins_policy_blocked = N(k, e => e.type === "autoupdate-disabled-by-policy"), 
      _.length > 0) cb("autoupdate dep-resolution");
      let {errors: p} = await ni(n), m = await fne(p.filter(e => {
        if (e.type !== "dependency-unsatisfied") return !1;
        let g = kn(e.source).marketplace;
        return g !== void 0 && f.has(g.toLowerCase());
      }), n);
      if (m.installed.length > 0) t(`Plugin autoupdate: resolved ${m.installed.length} missing plugin dependencies: ${m.installed.join(", ")}`), 
      _.push(...m.installed);
      S6n(_, k), i("tengu_plugin_autoupdate_pass", {
        outcome: a.marketplace_refresh_failed > 0 || a.plugin_update_failed > 0 ? b("partial") : b("ok"),
        ...a,
        ...s,
        duration_ms: Date.now() - u
      });
    } catch (f) {
      t(`Plugin autoupdate: failed: ${l(f)}`, {
        level: "error"
      }), i("tengu_plugin_autoupdate_pass", {
        outcome: b("failed"),
        error_kind: c(lY(f)),
        ...a,
        ...s,
        duration_ms: Date.now() - u
      });
    }
  })();
}

var L = 864e5, RNr = 6e5, CBs = 5e3, RBs = 36e5;

async function xBs(n) {
  if (z() && n !== void 0) {
    let o = await n.statMeta(Fe.state("last-cleanup"));
    return o.ok && Date.now() - o.value.mtimeMs < L;
  }
  try {
    let o = await H(I(Ee(), ".last-cleanup"));
    return Date.now() - o.mtimeMs < L;
  } catch {
    return !1;
  }
}

async function xNr(n, o) {
  if (he()) return;
  if (!n.backgroundHousekeeping.claim()) return;
  if (B1r(n), gzo(n), O(o), qp()) eBo(o), Lpr(o), setInterval(Lpr, RBs, o).unref();
  let u = "sentinel-unchecked";
  async function a() {
    if (qp() && Kp() > Date.now() - 6e4) {
      setTimeout(s, RNr).unref();
      return;
    }
    if (u !== "done") {
      if (u === "sentinel-unchecked") {
        if (u = "sweep-due", await xBs(o)) {
          setTimeout(s, RNr).unref();
          return;
        }
      }
      if (u = "done", await v6r(o), z() && o !== void 0) {
        await w6r(Ee(), n.backgroundHousekeeping), await S6r(o);
        let r = await o.write(Fe.state("last-cleanup"), (new Date).toISOString(), {
          publishDiscipline: "inPlace"
        });
        if (!r.ok) t(`.last-cleanup write failed: ${r.error.code}`, {
          level: "error"
        });
      } else await G(I(Ee(), ".last-cleanup"), (new Date).toISOString()).catch(r => Ms(r) ? t(`.last-cleanup write failed: ${r.code} ${r.message}`, {
        level: "error"
      }) : d(r));
    }
    if (qp() && Kp() > Date.now() - 6e4) {
      setTimeout(s, RNr).unref();
      return;
    }
    await eir();
  }
  function s() {
    return a().catch(r => qhe(r) ? t(`background housekeeping failed: ${r.message}`, {
      level: "error"
    }) : d(r));
  }
  setTimeout(s, CBs).unref();
}

export { ZUo, ANr, S6n, CNr, RNr, CBs, RBs, xBs, xNr };
