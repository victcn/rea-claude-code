// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { ke, Qr, FC, Fme } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { x, l, W } from "./chunk-b0z4bv3v.js";

import { GX } from "./chunk-ddr690nj.js";

import { Y, se, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { Ma, I, ne, Ql, cD } from "./chunk-5wbhf1bk.js";

import { rr } from "./chunk-wptm3jf5.js";

import { qa, Gg, mn, gk, xWn, br, l9, wf, Aw, d9, c9, nDt, Ope, Ac, Cu, Mi, Fi, rf, PH, Cw, HWn, MR, Hvo, Tnn, rDt, Uut, Qxs, Lz, oDt, sDt, kn, B1, _Z, FUe, Ann, Hi, vm, fr, hv, Dvo, Pl, JT } from "./chunk-8drhysk2.js";

import { kt, Us, ze, Xl } from "./chunk-r2h53bm2.js";

import { H4e, pgr, $Rt, Xus } from "./chunk-81rtbneg.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { yie } from "./chunk-xywp7esx.js";

import { Oa } from "./chunk-j016gcgm.js";

import { Ct, d } from "./chunk-6ah1819r.js";

import { Py } from "./chunk-9yajep3y.js";

import { Os } from "./chunk-fvcjfcfm.js";

import { Gc } from "./chunk-r276nwd3.js";

import { Mo } from "./chunk-j90se18b.js";

import { ws, wE, RC, jo, p_ } from "./chunk-nnrb0acr.js";

import { Lmt, XIe, N5, yh, yPo, oNs, R1e, Ef, Bn, F9e, Es, f$ } from "./chunk-q6wab2jw.js";

import { bE, hn, Ty, fe, ca } from "./chunk-dd98x6x7.js";

import { vy } from "./chunk-s2t7g8m9.js";

import { FPr } from "./chunk-x35dw27e.js";

import { tp, wit, qCe } from "./chunk-sg5gpfs4.js";

import { vOt, hUn, _Un, vFe, EUn } from "./chunk-t70vnbgq.js";

import { xwr, ah, gZt, TR, _Ot, NSe, bFe, hz, s6e, Bf, j7, hZt, EP, L_, xN, yxe, iho, L8, b1, Hc } from "./chunk-67jt18z1.js";

import { Ge } from "./chunk-chhsvfy5.js";

import { Xm, mk, Mz, ynn } from "./chunk-9wtp3skp.js";

import { KJt, quo, URe, XYe, Yat, E$e, bN, ld, QJt, CPt, Aoe, y8, cNn, ZJt, uNn, eQt, Zuo, E7, pNn, k$e, xPt, WRe, qb } from "./chunk-2xhrgh8h.js";

import { _Ke, Akt, R0e, hts, Vir, sRn, tR, tYt, nYt, iRn, Kir, _ts, rYt, bts, $M, urt, hQr, yQr, x0e, rto, I6t, Iis, gIn, Hot, Ois, hIn, E_e, TAt, oto, Kcr, Mis, O6t, qcr, M6t, PQ, TLe, sto, ito, XAe, yIn, Ycr, Xcr, ato, AAt, Jcr, Qcr, cto, bIn, Dot, SIn, uto, wIn, Lis, Zcr, Lot, Not, L6t, CAt, N6t, $is, Fis, Uis, pto, fto, $6t, gd, oce, NW, MLe, HLe, qy, aN, sCe, cw, Cre, qd, Gl, ly, $Q, ZIn, Tno, Gas, t3t, GB, Gk, oV, sV, uR, tOn, Nd, nOn, QD, ppr, rOn, $W, V4, N3, o3t, Nm, Fu, fpr, Zas, rP, FQ, s3t, xre, gpr, hpr, DLe, ypr, wqe, nst, a3t, oOn, sOn, iOn, _pr, Mh, l3t, d3t, FW, iCe, vqe, P_e, LLe, ost, $3, lOn, dOn, u3t, rCt, Pno, Ino, CS, ni } from "./chunk-84yp45y8.js";

import { yFe } from "./chunk-d7768anc.js";

import { Mlo, tz } from "./chunk-sqb9meyh.js";

import { iio } from "./chunk-bv9f914r.js";

import { n7, x4e, P9t, x_, DT, Oce, Jre, I9t, O4e, M4e, NRt, _it } from "./chunk-af7jrchc.js";

import { d2e, Zq } from "./chunk-z77zn188.js";

import { gKr, owt } from "./chunk-4xv14swd.js";

import { du } from "./chunk-e2kb3426.js";

import { Dz, tDt, u5 } from "./chunk-whs0esmw.js";

import { D } from "./chunk-hmqkrrtz.js";

import { we } from "./chunk-m8ez8fhk.js";

var Nn = we(vy(), 1);

import { dirname as Rt, join as Fn, relative as vt, resolve as vn, sep as Gt } from "path";

async function k1o(e, n, i) {
  if (yie()) return "ineligible";
  if (!n?.source || !Hc(n.source)) return "ineligible";
  if (!XIe(e, n, sCe(e, aN()))) return "ineligible";
  try {
    return await sV(e, i, void 0, {
      skipIfRecent: !0,
      directoryTrigger: "install"
    }), Ge().marketplaces.delete(e), "refreshed";
  } catch (a) {
    return t(`Failed to refresh marketplace '${e}' on catalog miss; using cached data: ${l(a)}`, {
      level: "warn"
    }), "refresh-failed";
  }
}

function VWe(e) {
  if (e === "refreshed") g("plugin_install_refresh_first"); else if (e === "refresh-failed") m("plugin_install_refresh_first", "refresh_failed"); else f("plugin_install_refresh_first", "ineligible");
}

async function byt(e, n, i) {
  if (Ct()) return {
    outcome: "ineligible"
  };
  if (!n?.source || !Hc(n.source)) return {
    outcome: "ineligible"
  };
  if (n.installLocation && ly(n.installLocation)) return {
    outcome: "ineligible"
  };
  let a = n.source.source;
  if (a !== "github" && a !== "git" && a !== "url" && a !== "claudeai" && a !== "pluginDirectory") {
    if (Ef(n.source) || a === "settings") Ge().marketplaces.delete(e);
    return {
      outcome: "ineligible"
    };
  }
  try {
    return await sV(e, i, void 0, {
      skipIfRecent: !0,
      directoryTrigger: "install"
    }), Ge().marketplaces.delete(e), {
      outcome: "refreshed"
    };
  } catch (o) {
    return t(`Failed to refresh marketplace '${e}' before scoped install; using cached data: ${l(o)}`, {
      level: "warn"
    }), {
      outcome: "refresh-failed",
      errorMessage: cD(l(o))
    };
  }
}

async function It(e) {
  let n = await ci(e), i = await ui(e).catch(() => qn);
  return {
    installedVersion: Pt(n),
    availableVersion: Pt(i.availableVersion),
    loadsInPlaceFrom: i.loadsInPlaceFrom
  };
}

function St(e, n, i) {
  let a = qa("plugin update", e, n === "user" ? void 0 : `--scope ${n}`), o = i.availableVersion !== void 0 && i.installedVersion !== void 0 && i.availableVersion !== i.installedVersion, p = ze(i.installedVersion, _t), w = ze(i.availableVersion, _t), h = `${p} to ${w}`;
  if (i.loadsInPlaceFrom !== void 0) {
    let F = Us(i.loadsInPlaceFrom), P = o && a !== null ? `; \`${a}\` re-records its version, ${h}` : "";
    return ` \u2014 it loads in place from ${F}, so edits there take effect at the next session start or /reload-plugins${P}`;
  }
  if (!o) return "";
  let c = a !== null ? `run \`${a}\` to get it` : "update it from /plugin";
  return `${` \u2014 the marketplace now offers ${w}`} (installed: ${p}); ${c}`;
}

var _t = 64, qn = Object.freeze({});

async function ci({pluginId: e, scope: n, projectPath: i, storageV5: a}) {
  let p = z() && a !== void 0 ? await Fu(a) : Nm(), w = hv(Object.keys(p.plugins), e), h = (p.plugins[w ?? e] ?? []).filter(c => c.scope === n);
  return (tR(h, n, i) ?? h[0])?.version;
}

async function ui({pluginId: e, entry: n, marketplaceName: i, marketplaceInstallLocation: a, storageV5: o}) {
  if (typeof n.source !== "string") return {
    availableVersion: fi(n)
  };
  if (a === void 0) return qn;
  let p = await qd(o), h = ly(a) !== void 0 ? "system" : "workspace", r = await hz(e, a, n.source, p, cw(), o, h);
  if (r.kind !== "ok") return qn;
  let c = await PQ(e, n.source, await $3(r.entryPath, n.name, n.source, [], {
    noTelemetry: !0
  }).then(O => O.manifest, () => {}), r.entryPath, {
    kind: "catalog",
    version: n.version
  }, void 0, void 0, r.marketplaceDir), y = x0e(n.source, p[i]?.source);
  return {
    availableVersion: c !== "unknown" ? c : void 0,
    loadsInPlaceFrom: y ? r.entryPath : void 0
  };
}

function fi(e) {
  let {source: n} = e;
  if (!(typeof n !== "string" && n.source === "claudeai")) return;
  return e.version || n.version || void 0;
}

function Pt(e) {
  return e === void 0 ? void 0 : Bn(e);
}

function gi(e, n) {
  let i = {
    install: "installed",
    update: "updated",
    uninstall: "uninstalled"
  }[n];
  switch (e) {
   case Ac:
    return `This plugin is loaded via --plugin-dir for this session with no marketplace backing \u2014 it cannot be ${i}. Drop the --plugin-dir flag to stop loading it, or \`claude plugin disable\` to turn it off.`;

   case Mi:
    return `This plugin is synced from your claude.ai account with no marketplace backing \u2014 it cannot be ${i} here. Manage it on claude.ai, or \`claude plugin disable\` to turn it off on this machine.`;

   case Cu:
    return `This plugin is loaded from ${Os(Fn(Ee(), "skills"))}/ with no marketplace backing \u2014 it cannot be ${i}. Delete the directory to remove it; \`claude plugin disable\` to turn it off; edits there take effect after /reload-plugins.`;
  }
}

function nt(e, n, i) {
  if (rf(n)) return gi(n, i);
  if (n !== void 0 && yPo(n)) return oNs(n);
  if (Xm(e) && mk(kn(e).name) !== void 0) return "This is a built-in plugin \u2014 built-in plugins cannot be installed, updated or uninstalled. Use `claude plugin enable` / `claude plugin disable` to turn it on or off.";
  return;
}

function tt(e, n) {
  if (yPo(n)) return "marketplace_not_available";
  return Xm(e) ? "builtin" : "directory_loaded";
}

function Kt(e, n) {
  let {name: i} = _Z(e), a = qCe(wit(), i, n);
  return a.outcome === "locked" ? a.entry.name : void 0;
}

function pi(e) {
  switch (e) {
   case Ac:
    return "--plugin-dir";

   case Cu:
    return "skills-directory";

   case Mi:
    return "claude.ai-synced";
  }
}

var kte = [ "user", "project", "local" ], gn = {
  user: 0,
  project: 1,
  local: 2
}, eBt = [ "user", "project", "local", "managed" ];

function it(e) {
  if (!kte.includes(e)) throw Error(`Invalid scope "${e}". Must be one of: ${kte.join(", ")}`);
}

function KEe(e) {
  return kte.includes(e);
}

function qEe(e) {
  return e === "project" || e === "local" ? ke() : void 0;
}

function tBt(e) {
  let n = fe("projectSettings")?.enabledPlugins;
  if (!n) return !1;
  let i = hv(Object.keys(n), e);
  return i !== void 0 && n[i] === !0;
}

function T1o(e) {
  return Zn[e] === "sad";
}

var Zn = {
  ...Zuo,
  not_installed: "bad",
  not_installed_at_scope: "bad",
  install_records_unreadable: "bad",
  ambiguous_marketplace: "sad",
  not_found: "bad",
  not_cached: "bad",
  source_missing: "bad",
  directory_loaded: "sad",
  builtin: "sad",
  marketplace_dir_missing: "bad",
  marketplace_dir_unreadable: "bad",
  marketplace_location_refused: "bad",
  marketplace_entry_path_refused: "bad",
  marketplace_policy_blocked: "sad",
  plugin_policy_blocked: "sad",
  directory_unavailable: "bad",
  command_source_inactive: "sad",
  command_source_skipped: "sad",
  command_source_refused: "sad",
  entry_helper_declined: "sad",
  claudeai_identity_changed: "sad",
  directory_identity_changed: "sad",
  directory_binding_unreadable: "bad",
  directory_commit_mismatch: "bad",
  directory_listing_not_installable: "sad",
  npm_marketplace_disabled: "sad",
  marketplace_not_available: "sad",
  dependencies_not_installed: "bad",
  dependencies_not_screened: "bad"
};

function nBt(e) {
  let n = Nd(), i = hv(Object.keys(n.plugins), e);
  if (i) return i;
  for (let a of [ "local", "project", "user" ]) {
    let o = fe(JT(a))?.enabledPlugins;
    if (!o) continue;
    let p = hv(Object.keys(o), e);
    if (p) return p;
  }
  return e;
}

function Syt(e, n, i) {
  return oDt(e, hts(e, i), n.manifest.defaultEnabled, n.installationPreference);
}

function Ot(e, n) {
  return e.find(i => Object.hasOwn(fe(JT(i))?.enabledPlugins ?? {}, n));
}

function Un(e, n = [ "local", "project", "user" ]) {
  let i = e.includes("@"), a = e.toLowerCase();
  if (i) {
    let o = $W(Nd()), p = o === "unknown" ? void 0 : hv(o, e);
    if (p !== void 0) {
      let w = n.filter(h => !Ois(JT(h)));
      if (p === e || w.length === n.length && Ot(w, e) === void 0) {
        let h = Ot(w, p);
        if (h !== void 0 && n.slice(0, n.indexOf(h)).every(r => w.includes(r))) return {
          pluginId: p,
          scope: h
        };
      }
    }
  }
  for (let o of n) {
    let p = fe(JT(o))?.enabledPlugins;
    if (!p) continue;
    for (let w of Object.keys(p)) if ((i ? vm(w, e) : w.toLowerCase().startsWith(`${a}@`)) || mi(w, i ? e : Ann(e, Fi))) return {
      pluginId: tDt(p, w).deciding,
      scope: o
    };
  }
  return null;
}

function mi(e, n) {
  let i = Cw(e);
  return MR(i).length > 0 && i === Cw(n);
}

function A1o(e) {
  return Un(e) !== null;
}

function xt(e, n) {
  let {name: i, marketplace: a} = _Z(e);
  return n.find(o => {
    if (vm(o.name, e) || vm(o.name, i)) return !0;
    if (a && o.source) return vm(o.name, i) && o.source.toLowerCase().includes(`@${a.toLowerCase()}`);
    return !1;
  });
}

function hi(e, n, i) {
  let {name: a} = kn(e), o = Nd(), p = Object.keys(o.plugins), w = hv(p, e);
  if (w && o.plugins[w]?.length) return {
    pluginId: w,
    pluginName: a
  };
  let h = e.includes("@"), r = Dvo(p, a).filter(y => (!h || !kn(y).marketplace) && (o.plugins[y]?.length ?? 0) > 0), c = r.find(y => o.plugins[y]?.some(F => F.scope === n && F.projectPath === i)) ?? r.find(y => o.plugins[y]?.some(F => sRn(F, n, i))) ?? r[0];
  if (c) return {
    pluginId: c,
    pluginName: a
  };
  return null;
}

function i3n(e) {
  let n = Nd(), i = hv(Object.keys(n.plugins), e), a = i ? n.plugins[i] : void 0;
  if (!a || a.length === 0) return {
    scope: "user"
  };
  let o = ke(), p = a.find(r => r.scope === "local" && r.projectPath === o);
  if (p) return {
    scope: p.scope,
    projectPath: p.projectPath
  };
  let w = a.find(r => r.scope === "project" && r.projectPath === o);
  if (w) return {
    scope: w.scope,
    projectPath: w.projectPath
  };
  let h = a.find(r => r.scope === "user");
  if (h) return {
    scope: h.scope
  };
  for (let r of [ "local", "project" ]) {
    let c = tR(a, r, o);
    if (c) return {
      scope: c.scope,
      projectPath: c.projectPath
    };
  }
  return {
    scope: a[0].scope,
    projectPath: a[0].projectPath
  };
}

function zn(e) {
  switch (e.reason) {
   case "blocked-by-policy":
    return {
      message: `Plugin "${e.pluginName}" is blocked by your organization's policy and cannot be installed`,
      failureCode: "plugin_policy_blocked"
    };

   case "marketplace-blocked-by-policy":
    return {
      message: `Plugin "${e.pluginName}" is from marketplace "${e.marketplaceName}", which is blocked by your organization's policy`,
      failureCode: "marketplace_policy_blocked"
    };
  }
}

async function w$r(e, n, i) {
  if (!await wIn(e, n, i)) return !1;
  return !(await gKr(e, i)).some(o => o.type !== "dependency-unsatisfied" || o.reason !== "not-found");
}

function yi(e, n) {
  {
    let i = n === mn;
    return Object.entries(Nd().plugins).some(([a, o]) => {
      if (o.length === 0) return !1;
      let {name: p, marketplace: w} = kn(a);
      return p === e && w !== void 0 && w !== n && (i ? Pl(w) : w === mn);
    });
  }
  return !1;
}

function v$r() {
  return "--replace switches one copy of a plugin for another, so it needs the full id of the copy to switch to: name@marketplace. Nothing was installed.";
}

function E$r() {
  if (!NW()) return "directory-not-in-session";
  if (FC()) return "workspace-restricted";
  if (!p_.every(e => jo().includes(e))) return "setting-sources-narrowed";
  return;
}

function k$r(e, n) {
  {
    let i = n === "cli" ? ", so nothing was installed" : "";
    switch (e) {
     case "directory-not-in-session":
      return n === "cli" ? "--replace is not available in this session, so nothing was installed." : `Switching marketplaces needs the ${br}, which is not available in this session.`;

     case "workspace-restricted":
      return `Switching marketplaces is not available while this folder's project and local settings are not being read${i}. Try again from a session that reads them.`;

     case "setting-sources-narrowed":
      return `Switching marketplaces is not available while this session ignores any of your user, project or local settings files${i}. Try again from a session started without --setting-sources or --restricted.`;
    }
  }
  return "";
}

function Ht(e, n) {
  return `${N5(e) ? vOt(e) : hUn(e, R1e)}. ${_Un(e, {
    declaredInSettings: n.source.source === "settings"
  })}`;
}

async function bi(e, n) {
  if ((e.entry.dependencies?.length ?? 0) > 0) return "its catalog entry declares dependencies";
  let i = e.entry.source;
  if (typeof i !== "string") return "its source is not a folder in the marketplace";
  try {
    let {entryPath: a} = bFe(await hz(`${e.entry.name}@${e.marketplace}`, e.marketplaceInstallLocation, i, await qd(n), cw(), n));
    if (a === void 0) return "its folder in the marketplace could not be resolved";
    let {manifest: o} = await $3(a, e.entry.name, i, [ Fn(a, URe) ], {
      noTelemetry: !0
    }, n);
    return (o.dependencies?.length ?? 0) > 0 ? "its manifest declares dependencies" : void 0;
  } catch (a) {
    return `it could not be checked (${ze(l(a), 200)})`;
  }
}

async function Yt(e) {
  return z() && e !== void 0 ? await Fu(e) : Nm();
}

async function Jn(e, n) {
  return (await Yt(n)).plugins[e];
}

async function wi(e, n) {
  let i = await Yt(n);
  return QD(i) || (i.plugins[e]?.length ?? 0) > 0;
}

function Qn(e, n) {
  return xre((e ?? []).filter(i => i.scope === n));
}

async function DQe(e, n = "user", {shownSourceCommand: i, shownEntryHelper: a, announceRefreshResult: o, replaceInstalledCopy: p, replaceOnlyPluginIds: w, carrySettingsFrom: h, surface: r = "cli", npmRegistry: c, gitHubHttpsFallback: y, withoutRefresh: F} = {}, O) {
  it(n), e = PH(e);
  let {name: P, marketplace: k} = _Z(e), b = nt(e, k, "install");
  if (b !== void 0) return {
    success: !1,
    message: b,
    failureCode: tt(e, k)
  };
  let he = await N3(O);
  if (he !== void 0) return {
    success: !1,
    message: `Plugin "${ze(e)}" was not installed: ${V4(he)}`,
    failureCode: "install_records_unreadable"
  };
  if (p && !k) return {
    success: !1,
    message: v$r(),
    failureCode: "replace_needs_full_id"
  };
  let Z = p ? E$r() : void 0;
  if (Z !== void 0) return {
    success: !1,
    message: k$r(Z, "cli"),
    failureCode: "replace_unavailable"
  };
  let V, de, Ie, ee = !1, M, B, ae, te = !1, _e = !1, u, le = !1, ue = !1, T, De = "", X, N = "", j = "", U = !1, K = FUe(e);
  if (K === null && e.toLowerCase().endsWith(`@${yh}`)) return {
    success: !1,
    message: `"${e}" is not an npm package spec: expected <package>@npm, e.g. @scope/name@npm, name@npm or name@1.2.3@npm`,
    failureCode: "not_found"
  };
  if (K !== null && c !== void 0 && !Lmt(c)) return {
    success: !1,
    message: `--registry must be an http(s) URL (got "${c}")`,
    failureCode: "not_found"
  };
  if (K !== null) {
    if (!oOn()) return {
      success: !1,
      message: sOn,
      failureCode: "npm_marketplace_disabled"
    };
    V = _pr(K, c), de = yh, Ie = iOn;
  } else if (k) {
    let q = await qd(O), re = qy(q, k);
    if (re !== void 0 && $Q(k, re)) return m("plugin_marketplace_resolve", "marketplace_name_refused", {
      scoped: !0
    }), {
      success: !1,
      message: Ht(k, re),
      failureCode: "not_found"
    };
    U = Cre(q).some(pe => pe.name === k);
    let ie = re !== void 0 && Hc(re.source);
    te = re !== void 0 && !ie;
    let Me = p && re !== void 0 && ie && wf(re.source) ? await Gas(P, O) : void 0;
    if (Me !== void 0 && "notFreshEnoughFor" in Me) {
      if (ae = Me.detail, yi(P, k)) return m("plugin_marketplace_resolve", "refresh_failed", {
        scoped: !0
      }), {
        success: !1,
        message: `Plugin "${ze(P)}" was not switched. ${t3t(Me.detail)}`,
        failureCode: "replace_needs_fresh_listing"
      };
    }
    let S = Me !== void 0 && "entry" in Me ? Me : void 0, J = S !== void 0 ? {
      outcome: "refreshed"
    } : F ? {
      outcome: "ineligible"
    } : o ?? await byt(k, re, O);
    if (!F) VWe(J.outcome);
    if (J.outcome === "refreshed") ee = !0; else if (J.outcome === "refresh-failed") {
      if (_e = !0, M = `marketplace not refreshed (${J.errorMessage})`, re && wf(re.source)) u = J.errorMessage;
    }
    if (le = re !== void 0 && wf(re.source), ue = re === void 0 && k === mn && !NW(), 
    le && await uR() === "blocked") return m("plugin_marketplace_resolve", "marketplace_policy_blocked", {
      scoped: !0
    }), {
      success: !1,
      message: at(P),
      failureCode: "marketplace_policy_blocked"
    };
    let H = S !== void 0 ? S.entry === null ? null : S : u === void 0 ? await oV(e, O, "install") : await Gk(e, O, "install");
    if (S !== void 0 && S.entry !== null) B = S.reviewerMarked;
    if (H) V = H.entry, de = k, Ie = H.marketplaceInstallLocation;
  } else {
    let G, q = await d3n(P, O, J => {
      G = J;
    }), re = !q ? await uR() : void 0, ie = G?.message, Me = ie?.indexOf(": ") ?? -1, S = ie?.startsWith(`${br} `) && Me !== -1 ? ie.slice(Me + 2) : ie;
    if (q) {
      if (V = q.entry, de = q.marketplace, Ie = q.marketplaceInstallLocation, X = q.preferredOver, 
      S !== void 0 && q.marketplace !== mn && NW()) De = ` (The ${br} could not be checked: ${S}; installed from ${Xl(l9(q.marketplace), {
        head: 60,
        tail: 20
      }) || "another marketplace"}.)`;
    } else if (re === "blocked") N = `. (The ${br} is blocked by your organization. ${xN()})`; else if (re === "off") j = `. (The ${br} was not searched: it is turned off. Turn it back on: claude plugin marketplace add ${mn})`; else if (T = S, 
    T === void 0 && await ZIn(P, O)) N = `. (The ${br} lists it, but it is blocked by your organization's policy.)`;
  }
  if (!V || !de) {
    if ((!V || !de) && le && k && u === void 0) try {
      await GB(k, O, "install");
    } catch (G) {
      if (G instanceof Ope) u = G.message;
    }
    if ((!V || !de) && u) return m("plugin_marketplace_resolve", "refresh_failed_stale_lookup", {
      scoped: !0
    }), {
      success: !1,
      message: `Could not look up "${ze(P)}". ${u}`,
      failureCode: "directory_unavailable"
    };
    if ((!V || !de) && ue) return m("plugin_marketplace_resolve", "not_found", {
      scoped: !0
    }), {
      success: !1,
      message: `Plugin "${ze(P)}" not found: the ${br} isn't available in this session`,
      failureCode: "directory_not_in_session"
    };
    if ((!V || !de) && k === mn && await uR() === "off") return m("plugin_marketplace_resolve", "not_found", {
      scoped: !0
    }), {
      success: !1,
      message: `Could not look up "${ze(P)}": the ${br} is off. Turn it on: claude plugin marketplace add ${mn}`,
      failureCode: "directory_off"
    };
    if ((!V || !de) && le && await ZIn(P, O)) return m("plugin_marketplace_resolve", "marketplace_policy_blocked", {
      scoped: !0
    }), {
      success: !1,
      message: `Plugin "${ze(P)}" is blocked by your organization's policy and cannot be installed`,
      failureCode: "plugin_policy_blocked"
    };
    if ((!V || !de) && le) {
      let G = await Tno(P);
      if (G !== void 0) return m("plugin_marketplace_resolve", "not_installable", {
        scoped: !0
      }), {
        success: !1,
        message: G,
        failureCode: "not_found"
      };
    }
    if ((!V || !de) && U) return m("plugin_marketplace_resolve", "not_found", {
      scoped: !0
    }), {
      success: !1,
      message: `Plugin "${ze(P)}" not found: "${ze(k)}" is not a marketplace Claude Code uses (see the warning above)`,
      failureCode: "not_found"
    };
  }
  if (!V || !de) {
    let G = k ? `marketplace "${k}"` : "any configured marketplace", q = k ? qa("plugin marketplace update", k) : null, re = k !== void 0 && k !== mn && gk(k) ? !0 : !1, ie = k && !ee && !re ? `. Your local copy may be out of date${q ? ` \u2014 try \`${q}\`` : " \u2014 update it from /plugin > Marketplaces"}.` : "";
    m("plugin_marketplace_resolve", te ? "marketplace_policy_blocked" : _e ? "refresh_failed_stale_lookup" : "not_found", {
      scoped: k !== void 0
    });
    let Me = T ? `. (The ${br} could not be checked: ${T})` : "", S = "";
    if (le && k) {
      let J = P.toLowerCase().replace(/[^a-z0-9]+/g, "-"), H = (await GB(k, O, "install").catch(() => null))?.plugins.filter(pe => pe.displayName?.toLowerCase().replace(/[^a-z0-9]+/g, "-") === J).map(pe => pe.name).slice(0, 3);
      if (H !== void 0 && H.length > 0) S = `${ie === "" ? "." : ""} It may be listed as: ${H.map(pe => kt(pe, 80)).join(", ")}`;
    }
    return {
      success: !1,
      message: `Plugin "${P}" not found in ${G}${ie}${S}${Me}${N}${j}`,
      failureCode: te ? "marketplace_policy_blocked" : _e ? "not_found_stale_catalog" : T ? "directory_unavailable" : "not_found"
    };
  }
  let oe = V, C = `${oe.name}@${de}`;
  if (te) m("plugin_marketplace_resolve", "marketplace_policy_blocked", {
    scoped: !0
  }); else g("plugin_marketplace_resolve", {
    scoped: k !== void 0
  });
  if (K?.versionSpec === void 0 && await w$r(C, n, O)) {
    let G = C.endsWith(`@${mn}`) ? DLe((z() && O !== void 0 ? await Fu(O) : Nm()).plugins, C) : [], q = G.length > 0 ? G.flatMap(([, Oe]) => Oe) : void 0, re = q !== void 0 ? await M4e(G) : void 0;
    if (re !== void 0 && nst(C, q, re)) return {
      success: !1,
      message: `"${kt(oe.name, 120)}" is already installed, but plugin-directory-bindings.json in the plugins folder could not be used (unreadable, a symbolic link or not a file, over 1 MB, damaged, or written by a newer Claude Code), so its ${br} listing could not be checked against the repository it was installed from. Nothing was changed. Try again; if this repeats, check the file for those causes.`,
      failureCode: "directory_binding_unreadable"
    };
    if (q !== void 0 && re !== void 0 && wqe(C, q, oe.source, re)) {
      let Oe = ypr(Object.fromEntries(G), re, C, oe.source);
      return {
        success: !1,
        message: Oe !== void 0 ? ato(oe.name, Oe) : `"${ze(oe.name, 120)}" is already installed from a different repository than the one the ${br} now lists under that name. Uninstall it first, then install it again.`,
        failureCode: "directory_identity_changed"
      };
    }
    let ie = NW() ? await Lot(C, oe, await Gl(O), O) : [], Me = () => fto(C, oe, O).then(Oe => Oe.ok ? void 0 : Oe.refusal);
    if (p) {
      if ((await cto(w, ie, O)).length > 0) return {
        success: !1,
        message: Qcr(oe.name),
        failureCode: "installed_from_other_marketplace"
      };
      let [Oe] = ie;
      if (Oe !== void 0 && ae !== void 0) return x4e({
        fromPluginId: Oe.pluginId,
        toPluginId: C,
        surface: r,
        managedNames: tp(),
        result: {
          outcome: "bad",
          code: "replace_needs_fresh_listing"
        }
      }), {
        success: !1,
        message: `Plugin ${Jp(C)} is already installed (scope: ${n}), and nothing was switched. ${t3t(ae)}`,
        failureCode: "replace_needs_fresh_listing"
      };
      let Qe = Oe === void 0 ? void 0 : await Me();
      if (Qe !== void 0 && Oe !== void 0) {
        let Fe = Qe.reason === "plugin-directory-unavailable" ? {
          message: Zcr(Qe.pluginName, Qe.unavailableDependency),
          failureCode: "plugin_directory_unavailable"
        } : zn(Qe), bn = Fe.failureCode === "plugin_directory_unavailable" ? ": switching to this copy is allowed only where installing it is. " : ". ";
        return x4e({
          fromPluginId: Oe.pluginId,
          toPluginId: C,
          surface: r,
          managedNames: tp(),
          result: {
            outcome: "bad",
            code: Fe.failureCode
          }
        }), {
          success: !1,
          message: `Plugin ${Jp(C)} is already installed (scope: ${n}), and nothing was switched${bn}${Fe.message}`,
          failureCode: Fe.failureCode
        };
      }
      let Xe = bIn(C, ie, w, B);
      if (Xe?.reason === "more-installed-than-shown") return {
        success: !1,
        message: Jcr(oe.name),
        failureCode: "installed_from_other_marketplace"
      };
      if (Xe !== void 0) return x4e({
        fromPluginId: Xe.blocking.pluginId,
        toPluginId: C,
        surface: r,
        managedNames: tp(),
        result: {
          outcome: "bad",
          code: "installed_from_other_marketplace"
        }
      }), {
        success: !1,
        message: `Plugin ${Jp(C)} is already installed (scope: ${n}), and nothing was switched. ${Dot(C, oe.name, ie, r === "cli" ? "cli" : "ui", n, B)}`,
        failureCode: "installed_from_other_marketplace"
      };
      let [cn, ...sn] = ie;
      if (cn) {
        let Fe = await Lt(C, n, [ cn, ...sn ], {
          newCopyWasJustInstalled: !1,
          newCopyWasOn: Cn(C, void 0, Sn()).effective === !0,
          surface: r,
          carrySettingsFrom: h
        }, O), bn = n === "user" ? await L6t(C, oe, await Gl(O), O) : [], wn = CAt(C, oe.name, bn);
        if (Fe.ok) await hpr(C, n, qEe(n), O);
        let $n = qa("plugin enable", C), Tn = Fe.ok && !Fe.stayedDisabled && Cn(C, void 0, Sn()).effective === !1 ? `. ${Jp(C)} is disabled in your settings \u2014 enable it ${$n ? `with: ${$n}` : "in /plugin"}` : "";
        return Fe.ok ? {
          success: !0,
          message: `Plugin ${Jp(C)} was already installed (scope: ${n})${Fe.note}${Tn}${wn === "" ? "" : `. ${wn}`}`,
          pluginId: C,
          pluginName: oe.name,
          scope: n,
          switched: {
            from: Fe.from,
            replaced: Fe.replaced,
            stayedDisabled: Fe.stayedDisabled,
            keptOwnSettings: Fe.keptOwnSettings,
            settingsRemovedFrom: Fe.settingsRemovedFrom,
            ...Fe.settingsLeftInPlace && {
              settingsLeftInPlace: Fe.settingsLeftInPlace
            },
            savedDataRemovedFrom: Fe.savedDataRemovedFrom,
            ...Fe.keptDataDir && {
              keptDataDir: Fe.keptDataDir
            },
            ...Fe.oldCopyStillRecordedAt.length > 0 && {
              oldCopyStillRecordedAt: Fe.oldCopyStillRecordedAt
            },
            ...(Fe.saysMore || Tn !== "" || wn !== "") && {
              messageSaysMore: !0
            }
          }
        } : {
          success: !1,
          message: Fe.message,
          failureCode: "replace_failed"
        };
      }
    }
    let S = await hpr(C, n, qEe(n), O), J = await owt(C, O), H = ie.length > 0 && bIn(C, ie, void 0) === void 0 && await Me() === void 0 ? qa("plugin install", C, n === "user" ? "--replace" : `--replace --scope ${n}`) : null, pe = Oe => {
      let Qe = qb(Oe);
      return Qe !== mn && !(Qe !== void 0 && Pl(Qe));
    }, me = Oe => {
      let Qe = new Map;
      for (let Xe of Oe) {
        let cn = qb(Xe.pluginId);
        Qe.set(cn, [ ...Qe.get(cn) ?? [], Jp(Xe.pluginId) ]);
      }
      return new Intl.ListFormat("en", {
        type: "conjunction"
      }).format([ ...Qe ].map(([Xe, cn]) => `${(Xe !== void 0 ? Et(Xe) : "") || "another marketplace"} (${cn.join(", ")})`));
    }, He = qb(C), Se = He !== void 0 && pe(C), Re = Se ? [] : ie.filter(Oe => !pe(Oe.pluginId)), Ue = Se ? [] : ie.filter(Oe => pe(Oe.pluginId)), nn = ie.length > 0 ? me(ie) : "", tn = I(ie.length, "other", "others"), Be = await It({
      pluginId: C,
      entry: oe,
      marketplaceName: de,
      marketplaceInstallLocation: Ie,
      scope: n,
      projectPath: qEe(n),
      storageV5: O
    }), Je = `${St(C, n, Be)}${J?.suffix ?? ""}`, ye = /[.?]$/.test(Je) ? " " : ". ", Ke = nn !== "" ? Se ? `${ye}${Et(He ?? "") || "\u201c\u201d"} lists it at the same repository and folder as ${I(ie.length, "a plugin", "plugins")} installed here from ${nn}. If they are the same plugin, it loads ${ie.length === 1 ? "twice" : "more than once"}: to keep only one, uninstall the ${tn}` : `${Re.length === 0 ? "" : `${Je === "" ? " \u2014 also installed from " : `${ye}${Jp(C)} is also installed from `}${me(Re)}${H !== null ? `; to keep only this one: ${H}` : ""}`}${Ue.length === 0 ? "" : `${Re.length === 0 ? ye : ". "}${I(Ue.length, "A plugin", "Plugins")} installed here from ${me(Ue)} ${I(Ue.length, "is", "are")} listed there at the same repository and folder as this one. ${Re.length === 0 ? `If they are the same plugin, it loads ${ie.length === 1 ? "twice" : "more than once"}` : `If ${I(Ue.length, "that one is", "those are")} the same plugin too, it loads ${ie.length + 1} times`}: to keep only one, uninstall the ${tn}`}` : "";
    return {
      success: !0,
      message: `Plugin ${Ke === "" ? `"${C}"` : Jp(C)} is already installed (scope: ${n})${S ? " \u2014 marked as manually installed" : ""}${Je}${Ke}${Dt(p === !0 && ie.length === 0, `${Je}${Ke}`)}`,
      pluginId: C,
      pluginName: oe.name,
      scope: n,
      installedVersion: Be.installedVersion,
      availableVersion: Be.availableVersion
    };
  }
  let A;
  if (a !== void 0) A = a; else if (A = await vyt(C, oe, O), A !== null) throw new E7(`${l3n(A)}\nThis install runs that command; confirm it by running \`claude plugin install\` in a terminal (or with -y/--yes).`, "entry_helper_unconfirmed");
  let Q = await Jn(C, O), qe = Qn(Q, n), Pe = xre(Q ?? []) && Cn(C, void 0, Sn()).effective === !0, Ce = await $6t({
    pluginId: C,
    entry: oe,
    scope: n,
    marketplaceInstallLocation: Ie,
    trigger: "cli",
    explicit: !0,
    consentedEntryHelper: A,
    commandSourceConsent: i !== void 0 ? {
      kind: "shown",
      command: i,
      pluginId: C
    } : Di(C, oe.source, Q),
    replaceInstalledCopy: p,
    replaceOnlyPluginIds: w,
    switchTargetMarkedInItsOwnWalk: B,
    switchWalkNotFresh: ae,
    storageV5: O,
    gitHubHttpsFallback: y
  }).catch(async G => {
    let q = X !== void 0 && typeof X.entry.source === "string" && !Q?.length && !await wi(C, O) ? $is(G) : void 0;
    if (q !== void 0 && X !== void 0) return {
      fetchFailed: G,
      why: q,
      official: X
    };
    throw G;
  });
  if ("fetchFailed" in Ce) {
    {
      let {fetchFailed: G, why: q, official: re} = Ce, ie = `${re.entry.name}@${re.marketplace}`, Me = await bi(re, O);
      if (Me !== void 0) throw t(`Bare-name install of "${ze(P)}": the ${br}'s copy could not be fetched, and ${ze(ie)} was not installed in its place: ${Me}`), 
      G;
      let S, J;
      try {
        let Re = await ni(O);
        S = pto([ ...Re.enabled, ...Re.disabled ], new Set);
      } catch (Re) {
        d(Re), J = l(Re);
      }
      let H = S?.ranges.get(ie) ?? [], pe = H.length > 0 ? nYt(H) : void 0;
      if (J !== void 0 || pe !== void 0 && (!pe.ok || pe.range !== "*")) {
        let Re = D(S?.requirers.get(ie) ?? []);
        throw t(`Bare-name install of "${ze(P)}": the ${br}'s copy could not be fetched, and ${ze(ie)} was not installed in its place: ${J !== void 0 ? `could not read the installed plugins to check (${ze(J, 300)})` : `${ze(Re.join(", "))} ${Re.length === 1 ? "requires" : "require"} version ${ze(H.join(", "))} of it, which could be downloaded from the marketplace's git host`}`), 
        G;
      }
      t(`Bare-name install of "${ze(P)}": the ${br}'s copy could not be fetched (${ze(l(G), 300)}); installing ${ze(re.marketplace)}'s copy instead`);
      let me = Qn(await Jn(ie, O), n), He, Se = await DQe(ie, n, {
        surface: r,
        withoutRefresh: !0,
        gitHubHttpsFallback: y
      }, O).catch(Re => {
        He = Re, t(`Bare-name install of "${ze(P)}": ${ze(re.marketplace)}'s copy did not install either: ${ze(l(Re), 300)}`);
        return;
      });
      if (!Se?.success && !me && Qn(await Jn(ie, O), n)) throw new x(Uis(q, ie, re.marketplace, n, Se === void 0 ? l(He) : Se.message), "bare-name install: the official copy it fell back to was left installed after its install failed");
      if (!Se?.success || Se.pluginId !== ie || Se.aliasedId || Se.nothingWritten) {
        if (Se !== void 0) t(`Bare-name install of "${ze(P)}": ${ze(re.marketplace)}'s copy was not installed: ${ze(Se.message, 300)}`);
        throw G;
      }
      return f("plugin_marketplace_resolve", q === "git-missing" ? "directory_copy_git_missing" : "directory_copy_fetch_failed"), 
      {
        ...Se,
        message: `${Se.message}${Fis(q, re.marketplace)}`
      };
    }
    throw Ce.fetchFailed;
  }
  let R = Ce;
  if (!R.ok) switch (R.reason) {
   case "installed-from-other-marketplace":
   case "more-installed-than-shown":
   case "fewer-installed-than-shown":
   case "switch-needs-fresh-listing":
   case "directory-pin-unsatisfied":
   case "directory-binding-unreadable":
   case "directory-identity-changed":
    switch (R.reason) {
     case "switch-needs-fresh-listing":
      return x4e({
        fromPluginId: R.installedCopies[0].pluginId,
        toPluginId: C,
        surface: r,
        managedNames: tp(),
        result: {
          outcome: "bad",
          code: "replace_needs_fresh_listing"
        }
      }), {
        success: !1,
        message: `Plugin "${ze(R.pluginName)}" was not switched. ${t3t(R.detail)}`,
        failureCode: "replace_needs_fresh_listing"
      };

     case "installed-from-other-marketplace":
      if (p) x4e({
        fromPluginId: (R.installedCopies.find(G => !G.replaceable) ?? R.installedCopies[0]).pluginId,
        toPluginId: C,
        surface: r,
        managedNames: tp(),
        result: {
          outcome: "bad",
          code: "installed_from_other_marketplace"
        }
      }); else if (r === "cli") {
        let G = await Not(C, O), q = G?.installed.scopes.some(KEe) ? G : void 0;
        if (q) {
          let re = q.repositoryKey.indexOf("#"), ie = re < 0 ? q.repositoryKey : q.repositoryKey.slice(0, re), Me = re < 0 ? "" : q.repositoryKey.slice(re + 1), S = ie.startsWith(`${rr}/`) ? ie.slice(rr.length + 1) : ie, J = ze(R.pluginName, 120), H = q.installed.scopes.includes(n), pe = H ? "" : ` at ${q.installed.scopes.join(" and ")} scope`, me = H ? n : q.installed.scopes.find(KEe);
          if (me !== void 0 && (H || n === "user")) {
            let He = l9(kn(q.installed.pluginId).marketplace ?? ""), Se = kt(Me, 200).trim(), Re = Xl(kt(`${S}${Se === "" ? "" : ` \xb7 ${Se}`}`, 200)), Ue = Re === "" ? "" : ` (the same plugin: ${Re})`, nn = n === "user" ? "--replace" : `--replace --scope ${n}`, tn = qa("plugin install", C, nn), Be = l9(de), Je = bIn(C, [ q.installed ], void 0) === void 0, ye = !Je ? "" : tn === null ? ` To switch it to ${Be}, open it in /plugin \u2192 Installed and choose "Switch to ${Be}"` : ` To switch it to ${Be}: ${tn}`, Ke = !Je ? "" : ` To switch it to ${Be}, install ${Jp(C)} with ${nn}.`, Oe = H ? [ me ] : q.installed.scopes.filter(KEe), Qe;
            for (let sn of Oe) if (await Lis(q.installed.pluginId, sn, O)) {
              Qe = sn;
              break;
            }
            if (Qe === void 0) {
              let sn = qa("plugin install", q.installed.pluginId, me === "user" ? void 0 : `--scope ${me}`);
              return {
                success: !1,
                message: `"${J}" is installed from ${He}${pe}${Ue}, but its files are missing from the plugin cache. Nothing was changed. To restore them${sn === null ? ", install it again from /plugin" : `: ${sn}`}`,
                failureCode: "installed_from_other_marketplace",
                pluginId: q.installed.pluginId,
                aliasedId: !0
              };
            }
            if (!H) {
              let sn = qa("plugin enable", q.installed.pluginId, "--scope local"), Fe = Cn(q.installed.pluginId, void 0, Sn()), bn = Fe.effective === !0 ? "" : Fe.override !== void 0 ? ` The plugin is turned off by ${Fe.override.source === "policySettings" ? "your organization's managed settings" : "this session's --settings flag"}, and this command changed nothing.` : ` The plugin is turned off in this project, and this command did not turn it on. To turn it on${sn === null ? ", open it in /plugin" : ` for yourself in this project: ${sn}`}`;
              return {
                success: !0,
                message: `"${J}" is already installed from ${He}${pe}${Ue}. Nothing to install.${bn === "" ? ye : Ke}${bn}`,
                pluginId: q.installed.pluginId,
                pluginName: R.pluginName,
                scope: Qe,
                aliasedId: !0,
                nothingWritten: !0
              };
            }
            let Xe = await Rn(q.installed.pluginId, !0, me, void 0, O);
            if (!Xe.success && !Xe.alreadyInGoalState) return {
              success: !1,
              message: Xe.message,
              failureCode: Xe.failureCode,
              pluginId: q.installed.pluginId,
              aliasedId: !0
            };
            let cn = await hpr(q.installed.pluginId, me, qEe(me), O);
            return {
              success: !0,
              message: `"${J}" is already installed from ${He}${Ue}. ${Xe.success ? "It was disabled, so it is enabled again." : "Nothing to install."}${cn ? " It is now marked as manually installed." : ""}${ye}`,
              pluginId: q.installed.pluginId,
              pluginName: R.pluginName,
              scope: (Xe.success ? Xe.scope : void 0) ?? me,
              aliasedId: !0,
              ...Xe.success && {
                reenabled: !0
              }
            };
          }
        }
      }
      return {
        success: !1,
        message: Dot(C, R.pluginName, R.installedCopies, r === "cli" ? "cli" : "ui", n, B),
        failureCode: "installed_from_other_marketplace"
      };

     case "more-installed-than-shown":
      return {
        success: !1,
        message: Jcr(R.pluginName),
        failureCode: "installed_from_other_marketplace"
      };

     case "fewer-installed-than-shown":
      return {
        success: !1,
        message: Qcr(R.pluginName),
        failureCode: "installed_from_other_marketplace"
      };

     case "directory-pin-unsatisfied":
      return {
        success: !1,
        message: R.message,
        failureCode: "dependency_pinned_version_unsatisfied"
      };

     case "directory-binding-unreadable":
      return {
        success: !1,
        message: R.message,
        failureCode: "directory_binding_unreadable"
      };

     case "directory-identity-changed":
      return {
        success: !1,
        message: R.message,
        failureCode: "directory_identity_changed"
      };
    }
    return {
      success: !1,
      message: `Failed to install plugin "${C}"`,
      failureCode: "dependency_resolution_failed"
    };

   case "local-source-no-location":
    return {
      success: !1,
      message: `Cannot install local plugin "${R.pluginName}" without marketplace install location`,
      failureCode: "local_source_no_location"
    };

   case "plugin-folder-held":
    return {
      success: !1,
      message: AAt({
        ...R,
        refused: R.pluginId,
        askedFor: C,
        surface: r === "cli" ? "cli" : "ui"
      }),
      failureCode: "plugin_folder_held"
    };

   case "unrecordable-plugin-id":
    return {
      success: !1,
      message: tOn(R.pluginId, C, R.pluginId === C ? {
        pluginName: oe.name,
        marketplaceName: de
      } : void 0),
      failureCode: "invalid_plugin_id"
    };

   case "installed-list-held":
    return {
      success: !1,
      message: `Plugin "${ze(C)}" was not installed: ${V4(R.held)}`,
      failureCode: "install_records_unreadable"
    };

   case "settings-write-failed":
    return {
      success: !1,
      message: `Failed to update settings: ${R.message}`,
      failureCode: "settings_write_failed"
    };

   case "resolution-failed":
    return {
      success: !1,
      message: uto(R.resolution),
      failureCode: "dependency_resolution_failed"
    };

   case "blocked-by-policy":
    return {
      success: !1,
      ...zn(R)
    };

   case "dependency-blocked-by-policy":
    return {
      success: !1,
      message: `Plugin "${R.pluginName}" depends on "${R.blockedDependency}", which is blocked by your organization's policy`,
      failureCode: "dependency_policy_blocked"
    };

   case "marketplace-blocked-by-policy":
    return {
      success: !1,
      ...zn(R)
    };

   case "dependency-marketplace-blocked-by-policy":
    return {
      success: !1,
      message: `Plugin "${R.pluginName}" depends on "${R.blockedDependency}" from marketplace "${R.marketplaceName}", which is blocked by your organization's policy`,
      failureCode: "dependency_policy_blocked"
    };

   case "plugin-directory-unavailable":
    switch (R.reason) {
     case "plugin-directory-unavailable":
      return {
        success: !1,
        message: Zcr(R.pluginName, R.unavailableDependency),
        failureCode: "plugin_directory_unavailable"
      };
    }
    return {
      success: !1,
      message: `Failed to install plugin "${ze(C)}"`,
      failureCode: "dependency_resolution_failed"
    };

   case "range-conflict":
    {
      let G = R.dep === C ? "Plugin" : "Dependency";
      return {
        success: !1,
        failureCode: "dependency_version_conflict",
        message: iRn(G, R.dep, R.ranges, R.why, R.installed, R.suggestDependencyUpdate)
      };
    }

   case "no-matching-tag":
    {
      let G = R.dep === C ? "Plugin" : "Dependency";
      return {
        success: !1,
        message: Kir(G, R.dep, R.range),
        failureCode: "dependency_version_conflict"
      };
    }
  }
  let Ae = qa("plugin enable", C), Te = Ae ? ` \u2014 enable it with: ${Ae}` : " \u2014 enable it in /plugin", Ye = R.installedDisabled.includes(C) ? R.installedDisabledByDefault.includes(C) ? `. This plugin is disabled by default${Te}` : `. This plugin is disabled in your settings${Te}` : "", ln = !M ? "" : le ? `. Warning: ${ot()}` : `. Warning: ${M} \u2014 installed from the cached catalog, so the version may be stale`, pn = CAt(C, oe.name, R.copiesInOtherProjects), xe = "", dn;
  if (R.replacedCopies) {
    let G = await Lt(C, n, R.replacedCopies, {
      newCopyWasJustInstalled: !qe,
      newCopyWasOn: Pe,
      surface: r,
      carrySettingsFrom: h
    }, O);
    if (!G.ok) return {
      success: !1,
      message: G.message,
      failureCode: "replace_failed"
    };
    xe = G.note, dn = {
      from: G.from,
      replaced: G.replaced,
      stayedDisabled: G.stayedDisabled,
      keptOwnSettings: G.keptOwnSettings,
      settingsRemovedFrom: G.settingsRemovedFrom,
      ...G.settingsLeftInPlace && {
        settingsLeftInPlace: G.settingsLeftInPlace
      },
      savedDataRemovedFrom: G.savedDataRemovedFrom,
      ...G.keptDataDir && {
        keptDataDir: G.keptDataDir
      },
      ...G.oldCopyStillRecordedAt.length > 0 && {
        oldCopyStillRecordedAt: G.oldCopyStillRecordedAt
      },
      ...(G.saysMore || R.depNote !== "" || Ye !== "" || ln !== "" || pn !== "" || De !== "") && {
        messageSaysMore: !0
      }
    };
  }
  let en = `Successfully installed plugin: ${xe !== "" || pn !== "" ? Jp(C) : C} (scope: ${n})${R.depNote}${Ye}${ln}${xe}${pn === "" ? "" : `. ${pn}`}${De}`;
  return {
    success: !0,
    message: `${en}${Dt(p === !0 && R.replacedCopies === void 0, en)}`,
    pluginId: C,
    pluginName: oe.name,
    scope: n,
    ...dn && {
      switched: dn
    }
  };
}

function Dt(e, n) {
  return e ? `${/[.?]$/.test(n) ? " " : ". "}Nothing was switched: no installed copy of this plugin from another marketplace matched this listing` : "";
}

function Jp(e) {
  return Xl(kt(e, 200)) || "an id with no visible characters";
}

function rn(e) {
  return Xl(e) || "a folder with no visible characters in its name";
}

function st(e) {
  let n = Xl(e);
  return n === "" ? rn(e) : `the folder ${n}`;
}

function Et(e) {
  return e === mn ? l9(e) : Xl(kt(e, 64));
}

function Ft(e, n, i = new Set([ e ])) {
  {
    if (QD(n)) return {
      kind: "records-unreadable"
    };
    let a = ah(e).toLowerCase(), o = Object.keys(n.plugins).find(p => p !== e && !i.has(p) && ah(p).toLowerCase() === a);
    return o === void 0 ? {
      kind: "nobody"
    } : {
      kind: "plugin",
      pluginId: o
    };
  }
  return {
    kind: "records-unreadable"
  };
}

function T$r(e, n) {
  return `The data directory of ${Jp(e.pluginId)} was kept: ${e.reason === "another-plugin-uses-it" ? `${e.usedBy === void 0 ? "the list of installed plugins could not be read, so another installed plugin may use it" : `${Jp(e.usedBy)} is installed and uses it`}${e.copied ? `; its contents were also copied to ${Jp(n)}` : ""}` : e.reason === "target-had-own" ? `${Jp(n)} already had its own` : "it could not be copied"}`;
}

function Xn(e, n, i) {
  let a = fe(JT(e))?.enabledPlugins ?? {}, o = hv(Object.keys(a), n);
  if (o === void 0 || o === n) return a[n];
  return i !== "unknown" && E_e(a, n, i.filter(p => p !== n)).includes(o) ? a[o] : void 0;
}

function yn(e) {
  return ah(e).toLowerCase();
}

function $i({shownId: e, shownNewId: n, folders: i, because: a}) {
  {
    let o = new Intl.ListFormat("en", {
      type: "conjunction"
    }), p = (T, De) => o.format(T.length > 2 ? [ ...T.slice(0, 2), `${T.length - 2} ${De}` ] : T), [w] = i, h = i.length !== 1 || w === void 0, r = h ? `the folders ${p(i.map(rn), "more of this repository")}` : st(w), c = `. ${Ma(e)} is still recorded as installed at local scope from ${r}: ${h ? "those records were" : "that record was"} left, because `, y = `To remove ${h ? "them" : "it"}`, F = h ? "start Claude Code in each of those folders and uninstall it there" : "start Claude Code in that folder and uninstall it there", O = T => T.readsBack === "on" ? rn(T.file) : TAt({
      source: "otherFolder",
      file: T.file,
      readsBack: T.readsBack,
      ...T.notReadBecause !== void 0 && {
        notReadBecause: T.notReadBecause
      }
    }).replace(T.file, () => rn(T.file));
    if (a.kind === "own-local-line") return `${c}its line in local settings (.claude/settings.local.json) is still there although its uninstall was to remove it. ${y}, first take that line out of "enabledPlugins" in that file yourself, then ${F}`;
    if (a.kind === "legacy-local-file") {
      let {file: T} = a, De = T.readsBack === "on", X = De ? 'take it out of "enabledPlugins" in that file yourself' : T.readsBack === "unreadable" ? "fix that file so that it can be read as settings, and switch the plugin off in it if it is on there" : "switch it off in that file if it is on there";
      return `${c}${O(T)} ${De ? "still switches it on" : "may still switch it on"} (it is an older local settings file in the folder this session was started in). ${y}, first ${X}, then ${F}. Until then it ${De ? "can load" : "may still load"} beside ${n}`;
    }
    let P = a.ofTheLaunchFolder.length > 0, k = P && a.ofFolders.length > 0, b = k ? [ ...a.ofTheLaunchFolder, ...a.ofFolders ] : P ? a.ofTheLaunchFolder : a.ofFolders, he = b.every(T => T.readsBack === "on"), Z = b.every(T => T.readsBack !== "on"), V = b.some(T => T.readsBack === "unreadable"), de = T => T.readsBack === "not-read-here" ? T.notReadBecause ?? "not-trusted" : T.readsBack, [Ie] = b, ee = b.length > 1 && Ie !== void 0 && Z && b.every(T => de(T) === de(Ie)) ? de(Ie) : void 0, M = he ? "can load" : "may still load", B = b.length === 1 ? "that file" : "those files", ae = b.every(T => T.file.endsWith(Fn(".claude", "settings.json"))) ? ` (that uninstall does not edit ${B})` : "", te = ee === "unreadable" ? "they are there and could not be read" : ee === "network-path" ? "not read: they are on a network path or are links to one, or could not be checked" : "not read: this workspace is not yet trusted";
    if (k) {
      let T = j => ee !== void 0 || j.readsBack === "on" ? "" : `; ${O(j).slice(rn(j.file).length + 2, -1)}`, De = [ ...a.ofTheLaunchFolder.map(j => `${rn(j.file)} (in the folder this session was started in${T(j)})`), ...a.ofFolders.slice(0, 2).map(j => ee === void 0 ? O(j) : rn(j.file)), ...a.ofFolders.length > 2 ? [ `${a.ofFolders.length - 2} more` ] : [] ], X = he ? "still switch it on" : Z ? "may still switch it on" : "still switch it on, or may", N = he ? "switch it off in each of those files" : V ? "fix any of those files that cannot be read as settings, and switch it off in each where it is on" : "switch it off in each of those files where it is on";
      return `${c}settings files that this session does not read ${X}: ${o.format(De)}${ee === void 0 ? "" : ` (${te})`}. ${y}, first ${N}, then ${F}. Until then it ${M} beside ${n}`;
    }
    if (!P && h) {
      let T = he ? "still switch it on" : Z ? "may still switch it on" : "still switch it on, or may", De = ee === void 0 ? p(b.map(O), "more") : `${p(b.map(N => rn(N.file)), "more")} (${te})`;
      return `${c}settings files in those folders ${T}: ${De}. ${y}, for each folder first ${`switch it off in its settings file${V ? ", or fix the file if it cannot be read as settings" : Z ? " if it is on there" : ""}`}, then start Claude Code in that folder and uninstall it there${ae}. Until then it ${M} in those folders beside ${n}`;
    }
    let _e = o.format(ee === void 0 ? b.map(O) : b.map(T => rn(T.file))), u = ee === "unreadable" ? "are there and could not be read, and may still switch it on" : ee === "network-path" ? "were not read (they are on a network path or are links to one, or could not be checked) and may still switch it on" : ee === "not-trusted" ? "were not read (this workspace is not yet trusted) and may still switch it on" : he ? b.length === 1 ? "still switches it on" : "still switch it on" : Z ? "may still switch it on" : "still switch it on, or may", le = b.length === 1, ue = he ? le ? "switch it off in that file" : "switch it off in both files" : V ? le ? "fix that file so that it can be read as settings, and switch the plugin off in it if it is on there" : "fix the file that could not be read so that it can be read as settings, and switch the plugin off in both files where it is on" : le ? "switch it off in that file if it is on there" : "switch it off in those files where it is on";
    if (P) return `${c}in the folder this session was started in ${_e} ${u} (this session reads its settings from another folder, so nothing done from here edits ${B}). ${y}, first ${ue}, then ${F}. Until then it ${M} beside ${n}`;
    if (a.sharedCheckout && le && he) return `${c}${_e} ${u}. ${y}: if that is this repository's shared settings file, checked out in that folder too, first switch the plugin off in the repository's settings file and update the other checkouts; otherwise first switch it off in that file; then ${F}. Until then it ${M} in that folder beside ${n}`;
    return `${c}${_e} ${u}. ${y}, first ${ue}, then ${F}${ae}. Until then it ${M} in that folder beside ${n}`;
  }
  return "";
}

function Wt(e, n) {
  {
    let i = FPr();
    return {
      name: ze(kn(e).name, 120),
      store: i === "keychain" ? "your keychain (or in the credentials file in your Claude configuration folder)" : i === "credential-manager" ? "Windows Credential Manager (or in the credentials file in your Claude configuration folder)" : "the credentials file in your Claude configuration folder",
      uninstallCommand: Gg("plugin uninstall", e, {
        fallback: `uninstall "${ze(e, 200)}" from the command line`
      }),
      carriedClause: a => n === void 0 ? "" : ` (its settings and stored secrets were also carried over to ${n}; ${a} the old copies)`
    };
  }
  return {
    name: "",
    store: "",
    uninstallCommand: "",
    carriedClause: () => ""
  };
}

function ki({pluginId: e, entry: n, carriedTo: i, dataFolder: a}) {
  {
    let {name: o, store: p, uninstallCommand: w, carriedClause: h} = Wt(e, i), r = `. ${Ma(Jp(e))} has no install record left, but the clean-up after its last uninstall did not finish${h("what may be left are")}: `;
    if (n === "held") return `${r}its settings and stored secrets or its data folder may still be there, and "${o}" may still be tied to the repository it came from. To finish it, ${w}`;
    let c = a === "may-go" ? `${r}its settings may still be under "pluginConfigs" in your user settings file, its stored secrets in ${p}, and its data folder (${rn(ah(e))}) may still be there. No command removes them for this id yet; you can take that entry out and delete that folder yourself; the stored secrets stay` : a === "not-known" ? `${r}its settings may still be under "pluginConfigs" in your user settings file, its stored secrets in ${p}, and its data folder (${rn(ah(e))}) may still be there. No command removes them for this id yet; you can take that entry out yourself; leave the data folder until the install records can be read again, because another installed plugin may use it; the stored secrets stay` : `${r}its settings may still be under "pluginConfigs" in your user settings file, and its stored secrets in ${p}. No command removes them for this id yet; you can take that entry out yourself; the stored secrets stay`;
    return n === "none" ? `${c}. Nothing ties "${o}" to the repository it came from, so a plugin installed under that name later could read what is left` : n === "unreadable" ? `${c}. plugin-directory-bindings.json in the plugins folder could not be used, so "${o}" cannot be installed again until that file can be used` : c;
  }
  return "";
}

function _i({pluginId: e, folder: n, entry: i, carriedTo: a, dataFolder: o}) {
  {
    let {name: p, store: w, uninstallCommand: h, carriedClause: r} = Wt(e, a), c = `. After Claude Code tried to remove the record of ${Jp(e)} for ${st(n)}, the install records could not be read, so it is not known whether that record went or whether the plugin is still installed anywhere, and what the plugin saved was left in place${r("what is left are")}`;
    if (i === "held") return `${c}. If it is installed nowhere any more, ${h} to remove what it saved and free its name`;
    let y = o !== "in-use";
    return `${c}: its settings under "pluginConfigs" in your user settings file, ${y ? `its stored secrets in ${w}, and its data folder (${rn(ah(e))})` : `and its stored secrets in ${w}`}.${i === "unreadable" ? ` plugin-directory-bindings.json in the plugins folder could not be used, so "${p}" cannot be installed again until that file can be used.` : ""} If it is installed nowhere any more, no command removes them for this id yet; you can take that entry out yourself; ${y ? "leave the data folder until the install records can be read again, because another installed plugin may use it; " : ""}the stored secrets stay${i === "none" ? `. Nothing ties "${p}" to the repository it came from, so a plugin installed under that name later could read what is left` : ""}`;
  }
  return "";
}

async function Nt(e, n, {installedOthers: i, launchFolderToo: a, ownLocalFileToo: o}) {
  {
    let p = {
      kind: "by-files",
      ofTheLaunchFolder: [],
      ofFolders: new Map,
      launchProjectFileOn: void 0
    }, w = await Mis(e, i, a === void 0 ? n : [ ...n, a ], {
      theSessions: hn("localSettings"),
      byAFreshWalk: Fn(qt(), ".claude", "settings.local.json")
    });
    if (o && w.thisLaunchsLocalFile !== void 0) return {
      kind: "own-local-file",
      readsBack: w.thisLaunchsLocalFile,
      theSessionsOwn: !0
    };
    if (o && w.thisLaunchsLocalFileByAFreshWalk !== void 0) return {
      kind: "own-local-file",
      readsBack: w.thisLaunchsLocalFileByAFreshWalk,
      theSessionsOwn: !1
    };
    if (o && w.thisLaunchsLegacyLocalFile !== void 0) return {
      kind: "own-legacy-local-file",
      file: w.thisLaunchsLegacyLocalFile
    };
    let h = r => (w.byFolder.get(r) ?? []).filter(c => c.alsoThisLaunchs !== "localSettings" && c.alsoThisLaunchs !== "legacyLocalSettings");
    if (a !== void 0) p.ofTheLaunchFolder = h(a);
    for (let r of n) {
      let c = h(r);
      if (c.length > 0) p.ofFolders.set(r, c);
    }
    return p.launchProjectFileOn = w.thisLaunchsProjectFileOn, p;
  }
  return {
    kind: "by-files",
    ofTheLaunchFolder: [],
    ofFolders: new Map,
    launchProjectFileOn: void 0
  };
}

function Pi(e, n) {
  if (GX(e)) return !1;
  let i = Py(Rt(e)), a = Py(Rt(n));
  return i !== null && a !== null && i !== a && vt(i, e) === vt(a, n);
}

async function Ii(e) {
  {
    let n = await _it(e, Nd().plugins[e]);
    return n === "not-persisted" ? "plugin-directory-bindings.json in the plugins folder could not be used or written, so nothing would keep the name for the repository it was installed from: once the file can be written, switch again" : n === "cannot-hold" ? "its id is too long for plugin-directory-bindings.json to hold, so nothing would keep the name for the repository it was installed from" : void 0;
  }
  return;
}

function qt() {
  return Qr() ?? f$(ke(), bE);
}

function Tt(e) {
  {
    let n = ke(), i = e.projectPath;
    if (i !== void 0 && i !== n && GX(i)) return !1;
    if (!rP(e)) return !1;
    if (i === void 0 || i === n) return !0;
    let a = bE(n);
    return a !== null && bE(i) === a && f$(i, bE) === qt();
  }
  return !1;
}

async function Lt(e, n, i, {newCopyWasJustInstalled: a, newCopyWasOn: o, surface: p, carrySettingsFrom: w}, h) {
  {
    let r = Jp(e), c = i.find(s => s.pluginId === w) ?? i.find(s => Cn(s.pluginId, void 0, Sn()).effective !== !1) ?? i[0], y = Jp(c.pluginId), F = new Intl.ListFormat("en", {
      type: "conjunction"
    }), O = {
      head: 200,
      tail: 200
    }, P = F.format(i.map(s => Jp(s.pluginId))), k = i.length > 1, b = `${P} ${k ? "are" : "is"} still installed`, he = {
      fromPluginId: c.pluginId,
      toPluginId: e,
      surface: p,
      managedNames: tp()
    }, Z = Nd().plugins[e]?.find(s => s.scope === n && rP(s))?.gitCommitSha, V = c.gitCommitSha !== void 0 && Z !== void 0 && c.gitCommitSha !== Z, de = Cn(c.pluginId, void 0, Sn()), ee = de.effective === !1 && !o, M = async () => {
      let s = Un(e)?.scope, _ = de.decidingScope === "project" && n !== "project" ? "local" : de.decidingScope, v = _ !== void 0 && (s === void 0 || gn[_] >= gn[s]) ? _ : void 0, L = await LQe(e, v, h).catch(() => ({
        success: !1,
        message: ""
      }));
      return L.success || L.alreadyInGoalState === !0;
    }, {optionsCarried: B, secretsCarried: ae, oldDataDirDisposable: te, dataDirCopied: _e, targetHadOwn: u, dataDirKeptReason: le} = await iio(c.pluginId, e, P_e, h), ue = yn(e), T = yn(c.pluginId), De, X = !1, N = s => {
      if (!te || T === ue) return !1;
      let _ = Ft(c.pluginId, s, new Set(i.flatMap(v => v === c || (s.plugins[v.pluginId]?.length ?? 0) === 0 ? [ v.pluginId ] : [])));
      return De = _.kind === "nobody" ? void 0 : _, _.kind === "nobody";
    }, j;
    if (!B || !ae) {
      let s = [ ...B ? [] : [ "option values" ], ...ae ? [] : [ "stored secrets" ] ].join(" and ");
      j = {
        fromPluginId: c.pluginId,
        rollBack: a,
        rolledBack: `Could not switch: the ${s} of ${y} could not be copied to ${r}. ${Ma(b)} and ${r} was uninstalled again. Plugins that were installed with it as its dependencies, if any, stay installed`,
        bothInstalled: k ? `${Ma(r)} is installed, but the ${s} of ${y} could not be copied to it, so nothing was uninstalled. ${Ma(b)} beside it until you switch again or uninstall them` : `${Ma(r)} is installed, but the ${s} of ${y} could not be copied to it, so ${y} was not uninstalled. Both are installed until you switch again or uninstall ${y}`
      };
    }
    let U = [], K = s => s === "unknown" ? s : D([ ...s, ...U.flatMap(_ => _.record === void 0 ? [] : [ _.copy.pluginId ]) ]), oe = [], C = new Set, A = new Map, Q, qe, Pe = new Set, Ce = new Set, R = $W(Nd()), Ae = j !== void 0 ? [] : i.flatMap(s => [ "user", "local" ].map(_ => ({
      scope: _,
      id: s.pluginId,
      value: Xn(_, s.pluginId, R)
    }))), Te = (s, _) => {
      let v = (Nd().plugins[s.pluginId] ?? []).filter($e => $e.scope === _), L = v.find(rP), ce = qEe(_), ge = ce === void 0 ? L : v.find($e => $e.projectPath === ce && rP($e)), We = new Set([ ce ]), Le = _ !== "local" || ge === void 0 ? [] : v.filter($e => {
        if (We.has($e.projectPath)) return !1;
        return We.add($e.projectPath), Tt($e);
      });
      return {
        anyRecordHere: L,
        launchFolder: ce,
        record: ge,
        otherFolders: Le
      };
    }, Ye = [ c, ...i.filter(s => s !== c) ].flatMap(s => s.scopes.flatMap(_ => _ === "managed" ? [] : [ {
      copy: s,
      oldScope: _
    } ])), ln = (s, _) => `it was installed at ${s} scope from the folder ${_}: start Claude Code in that folder and switch there`;
    for (let {copy: s, oldScope: _} of j !== void 0 ? [] : Ye) {
      let {anyRecordHere: v, record: L} = Te(s, _);
      if (L === void 0 && v?.projectPath) {
        Q = {
          copy: s,
          scope: _,
          message: ln(_, v.projectPath)
        };
        break;
      }
    }
    let pn = new Map, xe = Qr(), dn = xe !== null && vn(xe) !== vn(ke()) ? ke() : void 0, In = (s, _) => DLe(s, _).flatMap(([v, L]) => v !== _ && L.length > 0 ? [ v ] : []);
    for (let s of j !== void 0 || Q !== void 0 ? [] : i) {
      let _ = Nd().plugins, v = s.scopes.includes("local") ? Te(s, "local").otherFolders : [], L = v.flatMap(ge => ge.projectPath ?? []), ce = L.length === 0 ? void 0 : await Nt(s.pluginId, L, {
        installedOthers: In(_, s.pluginId),
        launchFolderToo: dn,
        ownLocalFileToo: !1
      }).catch(ge => l(ge));
      if (typeof ce === "string") {
        Q = {
          copy: s,
          scope: "local",
          message: ce
        };
        break;
      }
      pn.set(s, {
        records: [ ..._[s.pluginId] ?? [] ],
        otherFolders: v,
        judged: ce
      });
    }
    for (let [s, {otherFolders: _}] of Q !== void 0 ? [] : pn) {
      let v = _.length > 0 && x_(s.pluginId) ? await Ii(s.pluginId).catch(L => l(L)) : void 0;
      if (v !== void 0) {
        Q = {
          copy: s,
          scope: "local",
          message: v
        };
        break;
      }
    }
    let en = new Map;
    for (let {copy: s, oldScope: _} of j !== void 0 || Q !== void 0 ? [] : Ye) {
      let {anyRecordHere: v, launchFolder: L, record: ce} = Te(s, _), ge = Ae.find($e => $e.id === s.pluginId && $e.scope === _)?.value, We = s === c && N(Nd());
      X ||= We;
      let Le = await Nae(s.pluginId, _, We, h, {
        settingsStillOn: "remove-anyway"
      }).catch($e => ({
        success: !1,
        message: l($e)
      }));
      if (Le.success) {
        if (U.push({
          copy: s,
          scope: _,
          record: ce,
          enabledValue: ge
        }), en.set(s, ce?.installPath), Le.directoryNameNote) oe.push([ s.pluginId, Le.directoryNameNote ]);
        if (Le.optionsRemoved) C.add(s);
        if (Le.savedKept !== void 0) Ce.add(s); else Ce.delete(s);
        if (Le.dataFolderUser !== void 0) A.set(s, Le.dataFolderUser);
        if ((Nd().plugins[s.pluginId]?.length ?? 0) === 0) Pe.add(s);
      } else {
        let $e = !Nd().plugins[s.pluginId]?.some(Ne => Ne.scope === _ && (ce === void 0 || L === void 0 ? rP(Ne) : Ne.projectPath === L)), je = Le.failureCode === "not_installed" || Le.failureCode === "not_installed_at_scope";
        if (je && (v === void 0 || $e)) continue;
        if (Q = {
          copy: s,
          scope: _,
          message: je && ce === void 0 && v?.projectPath ? ln(_, v.projectPath) : Le.message
        }, ce !== void 0 && $e) U.push({
          copy: s,
          scope: _,
          enabledValue: ge,
          record: ce
        }); else if (v !== void 0) qe = ge;
        break;
      }
    }
    if (Q !== void 0) {
      let s = Nd(), _ = K($W(s)), v = (s.plugins[c.pluginId]?.length ?? 0) === 0, L = [], ce = [], ge = async (be, on, _n) => {
        try {
          return (await ca(JT(be), Pn => ({
            enabledPlugins: {
              ...Pn?.enabledPlugins,
              [on]: _n
            }
          }), void 0, h)).error === null;
        } catch {
          return !1;
        }
      }, We = (be, on) => `the "enabledPlugins" line in ${be} settings that turned ${Jp(on)} off there (if you want it off, disable it in /plugin)`, Le = new Set, $e = Q.copy.pluginId, je = qe !== void 0 && Xn(Q.scope, $e, _) === void 0 ? qe : void 0;
      for (let be of Ae.filter(on => on.value === !1)) if (Xn(be.scope, be.id, _) !== !1 && !await ge(be.scope, be.id, !1)) Le.add(be.id), 
      ce.push(We(be.scope, be.id));
      for (let be of U) {
        let {record: on, enabledValue: _n} = be, Pn = on !== void 0 && await gpr(be.copy.pluginId, {
          ...on,
          version: on.version ?? "unknown",
          installedAt: on.installedAt ?? (new Date).toISOString()
        }, be.scope, on.projectPath, h).then(() => !0, () => !1), wt = _n === void 0 || _n === !1 || !Pn || !Le.has(be.copy.pluginId) && await ge(be.scope, be.copy.pluginId, _n);
        if (!Pn) L.push(`${Jp(be.copy.pluginId)} (${be.scope} scope)`); else if (!wt) ce.push(`the "enabledPlugins" line for ${Jp(be.copy.pluginId)} in ${be.scope} settings${Le.has(be.copy.pluginId) ? " (left out, because the line that turned it off could not be put back; if you want it on, enable it in /plugin)" : ""}`);
      }
      if (je !== void 0 && je !== !1 && !(!Le.has($e) && await ge(Q.scope, $e, je))) ce.push(`the "enabledPlugins" line for ${Jp($e)} in ${Q.scope} settings${Le.has($e) ? " (left out, because the line that turned it off could not be put back; if you want it on, enable it in /plugin)" : ""}`);
      if (Pe.has(c) || v && U.some(be => be.copy === c)) {
        let be = await iio(e, c.pluginId, P_e, h).catch(() => ({
          optionsCarried: !1,
          secretsCarried: !1,
          targetHadOwn: !1,
          dataDirCopied: !1
        }));
        if (!be.optionsCarried || !be.secretsCarried) L.push(`the option values and stored secrets of ${y} (they are under ${r})`); else if (u && !be.targetHadOwn) L.push(`the option values ${y} had (${r} already had its own, and ${y} now has those)`);
        if (_e && !be.dataDirCopied) {
          if (!await Gc(ah(c.pluginId))) L.push(`the data directory of ${y} (it is under ${r})`); else if (X) L.push(`the data directory of ${y} (what is left of it may be incomplete; the whole copy is under ${r})`);
        }
      }
      gd(h);
      let Ne = i.filter(be => be !== c && be !== Q.copy && Pe.has(be) && !Ce.has(be)), ve = [ ...L, ...ce ], Ze = F.format(Ne.map(be => Jp(be.pluginId))), un = `they were deleted when ${Ne.length === 1 ? "that plugin was" : "those plugins were"} uninstalled and have to be entered again`, fn = U.length === 0 && ve.length === 0 ? "" : ve.length > 0 ? ` Could not be put back: ${F.format(ve)}.${Ne.length > 0 ? ` The settings and stored secrets saved for ${Ze} did not come back either: ${un}.` : ""}` : ` What had been uninstalled was put back${Ne.length > 0 ? `, except the settings and stored secrets saved for ${Ze}: ${un}` : ""}.`, an = Q.message, jn = Xl(kt(an.length > 1e3 ? `${ne(an, 500)} \u2026 ${Ql(an, 500)}` : an, 1100), O), Dn = jn === "" ? "" : ` (${jn})`;
      j = {
        fromPluginId: Q.copy.pluginId,
        rollBack: L.length === 0 && a,
        rolledBack: `Could not switch: ${Jp(Q.copy.pluginId)} could not be uninstalled${Dn}.${fn} ${Ma(b)} and ${r} was uninstalled again. Plugins that were installed with it as its dependencies, if any, stay installed`,
        bothInstalled: k ? `${Ma(r)} is installed, but ${Jp(Q.copy.pluginId)} could not be uninstalled at ${Q.scope} scope${Dn}.${fn} Uninstall ${L.length > 0 ? "what is left of them" : P} to finish the switch` : `${Ma(r)} is installed, but ${y} could not be uninstalled at ${Q.scope} scope${Dn}.${fn} Both are installed until you uninstall ${y}`
      };
    }
    if (j !== void 0) {
      x4e({
        ...he,
        fromPluginId: j.fromPluginId,
        result: {
          outcome: "bad",
          code: "replace_failed"
        }
      });
      let s = async v => {
        if (!ee) return {
          ok: !1,
          message: v
        };
        let L = await M().catch(() => !1);
        return {
          ok: !1,
          message: `${v}. ${L ? `${Ma(r)} was turned off, as ${y} was` : `${Ma(y)} was disabled, but ${r} could not be disabled \u2014 disable it in /plugin`}`
        };
      };
      if (!j.rollBack) return s(j.bothInstalled);
      let _ = await Nae(e, n, !1, h, {
        settingsStillOn: "remove-anyway"
      }).catch(v => ({
        success: !1,
        message: l(v)
      }));
      if (_.success && _e) {
        let v = $W(await Fu(h));
        if (v !== "unknown" && !v.some(L => yn(L) === ue)) await Oa(ah(e)).catch(L => {
          t(`Switch to ${e}: could not remove the data directory that the switch had copied: ${l(L)}`, {
            level: "warn"
          });
        });
      }
      return _.success || _.failureCode === "not_installed" ? {
        ok: !1,
        message: j.rolledBack
      } : s(j.bothInstalled);
    }
    let G = ee && await M().catch(() => !1), q = [], re = [], ie = new Set;
    for (let s of Ce) ie.add(s.pluginId), re.push(`. The settings and stored secrets of ${Jp(s.pluginId)} were left in place because the list of installed plugins could not be read`);
    if (Ce.size > 0) re.push(`. To delete what was left in place, ${Jt(Ce.size === 1 ? "its" : "their")}`);
    let Me = async s => {
      let _ = yn(s.pluginId);
      if ([ ue, T ].includes(_)) return;
      let v = $W(await Fu(h)), L = v === "unknown" ? void 0 : v.find(ge => yn(ge) === _);
      if (v === "unknown" || L !== void 0) {
        if (L !== s.pluginId && await Gc(ah(s.pluginId))) re.push(`. The saved data of ${Jp(s.pluginId)} was left in place because ${L === void 0 ? "the list of installed plugins could not be read" : `${Jp(L)} is installed and uses it`}`);
        return;
      }
      if (await gZt(s.pluginId).catch(ge => (t(`Switch to ${e}: could not remove the data directory of ${s.pluginId}: ${l(ge)}`, {
        level: "warn"
      }), "failed")) === "removed") q.push(s.pluginId);
    }, S = async (s, _, v, L) => {
      let ce = $W(v), ge = yn(s.pluginId), We = s === c ? N(v) : x_(s.pluginId) && ![ ue, T ].includes(ge) && ce !== "unknown" && !ce.some(Ze => yn(Ze) === ge), {dataDirKept: Le, directoryBindingKept: $e} = await Qt({
        pluginId: s.pluginId,
        installPath: _,
        deleteDataDir: We,
        scope: s.scopes.filter(KEe).at(-1) ?? n,
        storageV5: h,
        registry: v,
        installedOthers: ce === "unknown" ? [] : In(v.plugins, s.pluginId)
      }), je = oe.findIndex(([Ze]) => Ze === s.pluginId);
      if ($e?.installsUnknown === !0 && J.has(s) && C.has(s)) {
        let Ze = A.get(s), un = i.some(fn => fn !== s && fn.pluginId === Ze && (Pe.has(fn) || Re.includes(fn)));
        if (un && je !== -1) oe.splice(je, 1);
        if ((je === -1 || un) && L) re.push(`. The saved data of ${Jp(s.pluginId)} was left in place because the list of installed plugins could not be read`);
        return {
          stillSwitchedOn: !1
        };
      }
      let Ne = An($e), ve = Ne === "" ? [] : [ [ s.pluginId, Ne ] ];
      if (je === -1) oe.push(...ve); else oe.splice(je, 1, ...ve);
      if ($e !== void 0 && !$e.optionsGone) ie.add(s.pluginId); else ie.delete(s.pluginId);
      if (s !== c && L && !Le && ($e === void 0 || $e.dataGone)) q.push(s.pluginId);
      return {
        stillSwitchedOn: $e?.stillOnIn !== void 0
      };
    }, J = new Set(Pe), H = [], pe = new Map, me = new Map, He = new Map, Se = new Map, Re = [], Ue = new Map, nn = new Map, tn = async s => {
      let _ = await Fu(h);
      return $W(_) === "unknown" ? s : _;
    }, Be = async (s, _, v) => {
      let L = await Gc(ah(s.pluginId)), ce = await S(s, _, v, L).catch(() => S(s, void 0, v, L)).catch(ge => (t(`Switch to ${e}: could not finish removing what ${s.pluginId} saved: ${l(ge)}`, {
        level: "warn"
      }), "rejected-twice"));
      if (ce === "rejected-twice") {
        Re.push(s), ie.add(s.pluginId);
        return;
      }
      if (Pe.add(s), Se.set(s, ce.stillSwitchedOn), s !== c && !x_(s.pluginId)) await Me(s);
    };
    for (let s of i) {
      let _ = pn.get(s), v = _?.judged, L = _?.records ?? [], ce = pe.get(s) ?? [], ge;
      if (v?.kind === "by-files" && v.ofTheLaunchFolder.length > 0) ge = "launch-folder-files", 
      me.set(s, v.ofTheLaunchFolder);
      let We = en.get(s), Le;
      for (let je of _?.otherFolders ?? []) {
        let Ne = je.projectPath;
        if (Ne === void 0) continue;
        let ve = (Ve, Kn = [], xn) => {
          let [$t] = Kn;
          ce.push({
            folder: Ne,
            because: Ve,
            files: Kn,
            sharedCheckout: xn !== void 0 && Kn.length === 1 && $t?.readsBack === "on" && Pi($t.file, xn)
          });
        }, Ze = v?.kind === "by-files" ? v.ofFolders.get(Ne) : void 0;
        if (Ze !== void 0 && v?.kind === "by-files") {
          ve("own-files", Ze, v.launchProjectFileOn);
          continue;
        }
        if (ge !== void 0) {
          ve(ge);
          continue;
        }
        if (Ue.has(s)) {
          ve("a-failed-read");
          continue;
        }
        let un = await Fu(h);
        if ($W(un) === "unknown") {
          ve("a-failed-read");
          continue;
        }
        Le = un;
        let fn = un.plugins[s.pluginId] ?? [];
        if (!fn.some(Ve => Ve.scope === "local" && Ve.projectPath === Ne)) continue;
        let an = await Nt(s.pluginId, [ Ne ], {
          installedOthers: In(un.plugins, s.pluginId),
          launchFolderToo: dn,
          ownLocalFileToo: !0
        }).catch(() => "threw");
        if (an === "threw") {
          ge = "a-failed-read", ve("a-failed-read");
          continue;
        }
        if (an.kind === "own-local-file") {
          ge = an.readsBack === "on" && an.theSessionsOwn ? "own-local-line" : "own-local-file-unsure", 
          ve(ge);
          continue;
        }
        if (an.kind === "own-legacy-local-file") {
          ge = "own-legacy-local-file", He.set(s, an.file), ve("own-legacy-local-file");
          continue;
        }
        let jn = an.ofTheLaunchFolder.length > 0;
        if (jn) ge = "launch-folder-files", me.set(s, an.ofTheLaunchFolder);
        let Dn = an.ofFolders.get(Ne);
        if (Dn !== void 0) {
          ve("own-files", Dn, an.launchProjectFileOn);
          continue;
        }
        if (jn) {
          ve("launch-folder-files");
          continue;
        }
        if (x_(s.pluginId) && !fn.filter(Ve => !(Ve.scope === "local" && Ve.projectPath === Ne)).some(NRt)) {
          let Ve = await _it(s.pluginId, [ ...fn, ...L ]).catch(() => "not-persisted");
          if (!(Ve === "held" || Ve === "no-key" && !L.some(xn => xn.directoryRepositoryKey))) {
            ve("hold-not-proven");
            continue;
          }
        }
        let be = await o3t(s.pluginId, "local", Ne, h, {
          installPath: je.installPath,
          lastUpdated: je.lastUpdated
        }).then(Ve => Ve !== !1, () => !1), on = async () => {
          let Ve = await Fu(h);
          return $W(Ve) === "unknown" ? "unknown" : Ve;
        }, _n = await on(), Pn = _n === "unknown" && be ? await on() : _n;
        if (Pn === "unknown") {
          if (be) Ue.set(s, {
            folder: Ne,
            installPath: je.installPath
          }); else ve("a-failed-read");
          continue;
        }
        if (Le = Pn, (Pn.plugins[s.pluginId] ?? []).some(Ve => Ve.scope === "local" && Ve.projectPath === Ne)) ve("not-removed"); else if (be) H.push({
          copy: s,
          folder: Ne
        }), We = je.installPath;
      }
      if (ce.length > 0) pe.set(s, ce);
      if (nn.set(s, We), Pe.has(s) || Ue.has(s)) continue;
      let $e = await tn(H.some(je => je.copy === s) ? Le : void 0);
      if ($e === void 0 || ($e.plugins[s.pluginId]?.length ?? 0) > 0) continue;
      await Be(s, We, $e);
    }
    let Je = await Fu(h), ye = $W(Je);
    for (let [s, {folder: _, installPath: v}] of [ ...Ue ]) {
      if (ye === "unknown") continue;
      if (Ue.delete(s), (Je.plugins[s.pluginId] ?? []).some(ce => ce.scope === "local" && ce.projectPath === _)) {
        pe.set(s, [ ...pe.get(s) ?? [], {
          folder: _,
          because: "not-removed",
          files: [],
          sharedCheckout: !1
        } ]);
        continue;
      }
      H.push({
        copy: s,
        folder: _
      }), nn.set(s, v);
    }
    if (ye !== "unknown") {
      for (let s of i) if ((Je.plugins[s.pluginId]?.length ?? 0) === 0 && !Pe.has(s) && !Re.includes(s)) {
        let _ = await tn(Je) ?? Je;
        if ((_.plugins[s.pluginId]?.length ?? 0) > 0) continue;
        await Be(s, nn.get(s), _);
      }
    }
    let Ke = i.map(s => {
      let _ = H.flatMap(({copy: L, folder: ce}) => L === s ? [ rn(ce) ] : []), v = _.length - 2;
      return _.length === 0 ? "" : `. Claude Code had also recorded ${Jp(s.pluginId)} as installed from ${F.format(v > 0 ? [ ..._.slice(0, 2), `${v} more ${I(v, "folder")} of this repository` ] : _)} (it does so when it is started there); ${_.length === 1 ? "that record was" : "those records were"} removed too`;
    }).join(""), Oe = s => D((Je.plugins[s.pluginId] ?? []).flatMap(_ => _.scope === "local" && _.projectPath !== void 0 && Tt(_) ? [ _.projectPath ] : [])), Qe = new Set([ "own-local-line", "own-legacy-local-file", "launch-folder-files", "own-files" ]), Xe = new Map, cn = new Set, sn = i.map(s => {
      let _ = Oe(s), v = (pe.get(s) ?? []).filter(({folder: ve, because: Ze}) => Qe.has(Ze) && (ye === "unknown" || _.includes(ve)));
      Xe.set(s, v.map(({folder: ve}) => ve));
      let L = (...ve) => v.flatMap(({folder: Ze, because: un}) => ve.includes(un) ? [ Ze ] : []), ce = He.get(s), ge = v.flatMap(({because: ve, files: Ze}) => ve === "own-files" ? Ze : []), We = v.filter(({because: ve}) => [ "launch-folder-files", "own-files" ].includes(ve)), Le = We.length === 0 ? [] : me.get(s) ?? [];
      if ([ ...Le, ...ge.slice(0, 2) ].some(ve => ve.alsoThisLaunchs === "projectSettings")) cn.add(s);
      let [je] = We, Ne = (ve, Ze) => ve.length === 0 ? "" : $i({
        shownId: Jp(s.pluginId),
        shownNewId: r,
        folders: ve,
        because: Ze
      });
      return [ Ne(L("own-local-line"), {
        kind: "own-local-line"
      }), ce === void 0 ? "" : Ne(L("own-legacy-local-file"), {
        kind: "legacy-local-file",
        file: ce
      }), Ne(L("launch-folder-files", "own-files"), {
        kind: "files",
        ofTheLaunchFolder: Le,
        ofFolders: ge,
        sharedCheckout: We.length === 1 && je?.sharedCheckout === !0
      }) ].join("");
    }).join(""), Fe = i.flatMap(s => {
      let _ = Xe.get(s) ?? [], v = (ye === "unknown" ? D((pe.get(s) ?? []).map(({folder: We}) => We)) : Oe(s)).filter(We => !_.includes(We)), [L] = v;
      if (L === void 0) return [];
      let ce = `. ${Ma(Jp(s.pluginId))} is still recorded as installed at local scope from`, ge = v.length - 2;
      return [ {
        scope: "local",
        said: v.length === 1 ? `${ce} ${st(L)}: to remove it, start Claude Code in that folder and uninstall it there` : `${ce} the folders ${F.format(ge > 0 ? [ ...v.slice(0, 2).map(rn), `${ge} more in which Claude Code was started` ] : v.map(rn))}: to remove it, start Claude Code in each of those folders and uninstall it there`
      } ];
    }), bn = Fe.map(s => s.said).join(""), wn = [], $n = new Map, Tn = !1;
    for (let s of i) {
      let _ = ye === "unknown" || ye.includes(s.pluginId), v = ye === "unknown" ? void 0 : ye.filter(L => L !== s.pluginId);
      for (let L of ws) {
        let ce = fe(L)?.enabledPlugins ?? {}, ge = hv(Object.keys(ce), s.pluginId), We = ge === void 0 ? void 0 : ce[ge];
        if (ge === void 0 || !$M(We)) continue;
        if (v !== void 0 && !E_e(ce, s.pluginId, v).includes(ge)) continue;
        if (!_ && L === "userSettings" && (await ca(L, $e => {
          let je = {
            ...$e?.enabledPlugins
          }, Ne = hv(Object.keys(je), s.pluginId);
          if (Ne === void 0 || v === void 0 || !E_e(je, s.pluginId, v).includes(Ne)) return null;
          return je[Ne] = void 0, {
            enabledPlugins: je
          };
        }, void 0, h).catch(() => ({
          error: Error("settings write failed")
        }))).error === null) Tn = !0; else {
          let $e = L === "policySettings" ? "managed settings: only your administrator can remove it" : L === "flagSettings" ? "the --settings flag" : L === "projectSettings" ? "project settings: .claude/settings.json" : L === "localSettings" ? "local settings: .claude/settings.local.json" : ye === "unknown" ? "user settings: kept, because the list of installed plugins could not be read" : _ ? "user settings: kept, because it is still recorded as installed from another folder; when you uninstall it there, also take this line out of your user settings file, or the next start can record it again" : "user settings: it could not be removed";
          if (ye === "unknown" && ge !== s.pluginId) $n.set(`${Jp(ge)} (${$e}; it may be another installed plugin's own line${L === "userSettings" ? "" : ": the list of installed plugins could not be read"})`, ge); else if (!(L === "projectSettings" && cn.has(s))) wn.push(`${Jp(s.pluginId)} (${$e})`);
        }
      }
    }
    if (Tn) gd(h);
    for (let s of i) {
      if (Re.includes(s) || Ue.has(s)) continue;
      if (J.has(s)) {
        if (s === c) continue;
        if (!x_(s.pluginId)) {
          await Me(s);
          continue;
        }
        if ([ ue, T ].includes(yn(s.pluginId))) continue;
      } else if (Se.get(s) !== !0) continue;
      if (!x_(s.pluginId)) continue;
      let _ = await Fu(h);
      if ((_.plugins[s.pluginId]?.length ?? 0) > 0) continue;
      let v = await Gc(ah(s.pluginId));
      await S(s, void 0, _, v).catch(L => {
        t(`Switch to ${e}: could not finish removing what ${s.pluginId} saved: ${l(L)}`, {
          level: "warn"
        }), ie.add(s.pluginId);
      });
    }
    let Ln = De === void 0 ? void 0 : await Fu(h), On = Ln === void 0 || !QD(Ln) && (Ln.plugins[c.pluginId]?.length ?? 0) > 0 ? void 0 : Ft(c.pluginId, Ln);
    if (On?.kind === "nobody" && _e && !x_(c.pluginId)) {
      if (await gZt(c.pluginId).catch(() => "failed") === "failed") t(`Switch to ${e}: could not remove the data directory of ${c.pluginId}`, {
        level: "warn"
      });
    }
    let rt = On === void 0 || On.kind === "nobody" ? void 0 : {
      usedBy: On.kind === "plugin" ? On.pluginId : void 0
    }, ii = !ee ? "" : G ? " (it stays disabled, as before)" : ` (it was disabled before, but ${r} could not be disabled \u2014 disable it in /plugin)`, lt = !c.scopes.some(s => s === n), si = lt || c.scopes.some(s => s !== n) ? ` (was ${c.scopes.join(" and ")} scope)` : "", Yn = te ? rt !== void 0 && await Gc(ah(c.pluginId)) ? {
      pluginId: c.pluginId,
      reason: "another-plugin-uses-it",
      usedBy: rt.usedBy,
      copied: _e
    } : void 0 : {
      pluginId: c.pluginId,
      reason: le === "target-had-own" ? "target-had-own" : "copy-failed"
    }, ai = Yn === void 0 ? "" : `. ${T$r(Yn, e)}`, Wn = {
      scopeChanged: lt,
      stayedDisabled: G,
      dataDirCarried: _e,
      pinChanged: V,
      replacedCount: i.length,
      isPrimary: !0
    };
    x4e({
      ...he,
      result: ee && !G ? {
        ...Wn,
        outcome: "sad",
        code: "disable_failed"
      } : !te ? {
        ...Wn,
        outcome: "sad",
        code: "data_dir_kept"
      } : {
        ...Wn,
        outcome: "ok"
      }
    });
    for (let s of i) {
      if (s === c) continue;
      x4e({
        ...he,
        fromPluginId: s.pluginId,
        result: {
          outcome: "ok",
          scopeChanged: !s.scopes.some(_ => _ === n),
          stayedDisabled: !1,
          dataDirCarried: !1,
          pinChanged: s.gitCommitSha !== void 0 && Z !== void 0 && s.gitCommitSha !== Z,
          replacedCount: i.length,
          isPrimary: !1
        }
      });
    }
    let Gn = i.filter(s => Pe.has(s) && (u || s !== c) && !ie.has(s.pluginId)).map(s => s.pluginId), dt = Gn.filter(s => q.includes(s)), ct = Gn.filter(s => !q.includes(s)), ut = q.filter(s => !Gn.includes(s)), ft = [ ...dt.length > 0 ? [ `the settings and saved data for ${F.format(dt.map(Jp))}` ] : [], ...ct.length > 0 ? [ `the settings saved for ${F.format(ct.map(Jp))}` ] : [], ...ut.length > 0 ? [ `the saved data of ${F.format(ut.map(Jp))}` ] : [] ], gt = ft.length === 0 ? "" : `, and ${F.format(ft)} were removed`, oi = u ? `${r} kept its own settings${gt}` : k ? `your plugin settings carried over from ${y}${gt}` : "your plugin settings carried over", pt = oe.map(([s, _]) => `. About ${Jp(s)}: ${_.replace(/\.$/, "")}`).join(""), mt = async s => {
      let _ = yn(s.pluginId), v = s === c ? !(te && T !== ue) || Ln !== void 0 && On?.kind !== "nobody" : [ ue, T ].includes(_);
      return {
        pluginId: s.pluginId,
        entry: x_(s.pluginId) ? await I9t(s.pluginId, !1).catch(() => "unreadable") : void 0,
        carriedTo: s === c && !u ? r : void 0,
        knownInUse: v,
        mayGo: !v && ye !== "unknown" && !ye.some(L => yn(L) === _)
      };
    }, ht = (await Promise.all(i.filter(s => Re.includes(s)).map(async s => {
      let {mayGo: _, knownInUse: v, ...L} = await mt(s);
      return ki({
        ...L,
        dataFolder: _ ? "may-go" : !v && ye === "unknown" ? "not-known" : "in-use"
      });
    }))).join(""), yt = (await Promise.all(i.flatMap(s => {
      let _ = Ue.get(s)?.folder;
      return _ === void 0 ? [] : [ mt(s).then(({mayGo: v, knownInUse: L, ...ce}) => _i({
        ...ce,
        folder: _,
        dataFolder: L ? "in-use" : "not-known"
      })) ];
    }))).join(""), ri = wn.length === 0 ? "" : `. Still listed under "enabledPlugins": ${F.format(wn)}. Until ${wn.length === 1 ? "that line is" : "those lines are"} removed, an old copy can load again beside ${r} or show as enabled but not installed`, [bt] = [ ...$n.values() ], li = bt === void 0 ? "" : `. Still listed under "enabledPlugins": ${F.format([ ...$n.keys() ])}. ${$n.size === 1 ? `If ${Jp(bt)} does not name a plugin you have installed, that line should be removed` : "Any of these that does not name a plugin you have installed should be removed"}: until then an old copy can load again beside ${r} or show as enabled but not installed`;
    return {
      ok: !0,
      note: `. Switched from ${P}; ${oi}${ii}${si}${Ke}${ai}${re.join("")}${pt}${ht}${yt}${ri}${li}${sn}${bn}`,
      stayedDisabled: G,
      keptOwnSettings: u,
      settingsRemovedFrom: Gn,
      ...Ce.size > 0 && {
        settingsLeftInPlace: [ ...Ce ].map(s => s.pluginId)
      },
      savedDataRemovedFrom: q,
      keptDataDir: Yn,
      from: c.pluginId,
      replaced: i.map(s => s.pluginId),
      oldCopyStillRecordedAt: D([ ...Fe.map(s => s.scope), ...sn === "" ? [] : [ "local" ] ]),
      saysMore: Ke !== "" || sn !== "" || ht !== "" || yt !== "" || bn !== "" || ee && !G || wn.length > 0 || $n.size > 0 || re.length > 0 || pt !== ""
    };
  }
  return {
    ok: !1,
    message: ""
  };
}

function at(e) {
  return `Plugin "${ze(e)}" is from the ${br}, which is blocked by your organization. ${xN()}`;
}

function ot() {
  return `couldn't reach the ${br}, so this may not be the latest`;
}

function zt({refreshWarning: e, directoryRefreshFailed: n}, i) {
  return e === void 0 ? i : n ? `${i} Warning: ${ot()}.` : `${i} Warning: ${e} \u2014 version shown may be stale.`;
}

function Hn(e, n) {
  return e.directoryNotChecked ? `${e.pluginName} was not checked for updates: the ${br} isn't available in this session (installed: ${n})` : zt(e, `${e.pluginName} is already at the latest version (${n}).`);
}

async function Nae(e, n = "user", i = !0, a, {settingsStillOn: o = "refuse"} = {}) {
  it(n), e = PH(e);
  let p = nt(e, _Z(e).marketplace, "uninstall");
  if (p !== void 0) return {
    success: !1,
    message: p,
    failureCode: tt(e, _Z(e).marketplace)
  };
  let w = await N3(a);
  if (w !== void 0) return {
    success: !1,
    message: `Plugin "${ze(e)}" was not uninstalled: ${V4(w)}`,
    failureCode: "install_records_unreadable"
  };
  let {enabled: h, disabled: r} = await CS(a), c = [ ...h, ...r ], y = xt(e, c), F = JT(n), O = fe(F), P, k, b = Nd(), he = Object.keys(b.plugins), Z = qEe(n);
  if (y) {
    let N = Object.keys(O?.enabledPlugins ?? {}), j = y.name.toLowerCase(), U = e.includes("@"), K = [ ...N.filter(A => A === e), ...N.filter(A => vm(A, e)), ...U ? [] : [ ...N.filter(A => A === y.name), ...N.filter(A => A.startsWith(`${y.name}@`)), ...N.filter(A => A.toLowerCase() === j), ...N.filter(A => A.toLowerCase().startsWith(`${j}@`)) ], U ? e : y.name ], oe = U && (b.plugins[e] ?? []).length > 0, C = A => b.plugins[hv(he, A) ?? A] ?? [];
    P = oe ? e : K.find(A => C(A).some(Q => Q.scope === n && Q.projectPath === Z)) ?? K.find(A => C(A).some(Q => sRn(Q, n, Z))) ?? K[0], 
    k = y.name;
  } else {
    let N = hi(e, n, Z);
    if (!N) {
      let j = await jt(e, n, i, a);
      if (j !== void 0) return j;
      return {
        success: !1,
        message: `Plugin "${e}" not found in installed plugins`,
        failureCode: "not_installed"
      };
    }
    P = N.pluginId, k = N.pluginName;
  }
  P = hv(he, P) ?? P;
  let V = b.plugins[P], de = tR(V, n, Z);
  if (!de) {
    let {scope: N} = i3n(P);
    if (N !== n && V && V.length > 0) {
      if (N === "project" && tBt(P)) {
        let j = qa("plugin disable", e, "--scope local");
        return {
          success: !1,
          message: `Plugin "${e}" is enabled at project scope (.claude/settings.json, shared with your team). To disable just for you${j ? `: ${j}` : ", use claude plugin disable with --scope local"}`,
          failureCode: "enabled_at_project_scope",
          installedScope: N
        };
      }
      return {
        success: !1,
        message: `Plugin "${e}" is installed in ${N} scope, not ${n}. Use --scope ${N} to uninstall.`,
        failureCode: "not_installed_at_scope",
        installedScope: N
      };
    }
    if ((V?.length ?? 0) === 0) {
      let j = await jt(e, n, i, a);
      if (j !== void 0) return j;
    }
    return {
      success: !1,
      message: `Plugin "${e}" is not installed in ${n} scope. Use --scope to specify the correct scope.`,
      failureCode: "not_installed_at_scope"
    };
  }
  let Ie = de.installPath, ee = Object.entries(b.plugins).flatMap(([N, j]) => N !== P && vm(N, P) && j.length > 0 ? [ N ] : []);
  if (ee = D([ ...ee, ...DLe(b.plugins, P).flatMap(([N, j]) => N !== P && j.length > 0 ? [ N ] : []) ]), 
  x_(P) && Hot(F)) return {
    success: !1,
    message: `"${ze(k)}" was not uninstalled: this workspace is not yet trusted, so its settings files are not read, and the change could not be checked afterwards. Nothing was changed. Trust the workspace, start Claude Code again, then uninstall it again.`,
    failureCode: "settings_write_failed",
    pluginId: P,
    scope: n
  };
  let M = (N, j, U) => ({
    success: !1,
    message: Bt(k, "network-path", N.notRead[0], j, F, N.why, U),
    failureCode: "settings_still_on",
    pluginId: P,
    scope: n
  });
  if (x_(P) && F !== "userSettings") {
    let N = await hIn(F, P, ee);
    if ("notRead" in N) return M(N, void 0, "nothing-was-changed");
  }
  let {error: B} = await ca(F, N => {
    if (E_e(N?.enabledPlugins ?? {}, P).length === 0) return null;
    let j = {
      ...N?.enabledPlugins
    }, U = hv(Object.keys(j), P) ?? P;
    if (U === P || !ee.some(K => vm(K, U))) j[U] = void 0;
    for (let K of E_e(j, P, ee)) j[K] = void 0;
    return {
      enabledPlugins: j
    };
  }, void 0, a);
  if (gd(a), x_(P)) {
    let N = await hIn(F, P, ee);
    if ("notRead" in N) return M(N, B, "change-may-be-made");
    let {readsBack: j, file: U} = N;
    if (j !== "off") {
      let K = ze(k), oe = U ?? "that settings file", C = B ? `, and the settings change failed (${B.message})` : "";
      return {
        success: !1,
        message: j !== "on" ? `"${K}" was not uninstalled: ${oe} is there and could not be read, so it may still switch "${K}" on${C}. It is still installed. Once that file can be read and saved, uninstall it again.` : B ? `"${K}" was not uninstalled: it is still switched on in ${oe}${C}. It is still installed. Once that file can be saved, uninstall it again.` : `"${K}" was not uninstalled: it is still switched on in ${oe}, although the settings change reported no error. It is still installed. Take it out of "enabledPlugins" in that file yourself, then uninstall it again.`,
        failureCode: "settings_write_failed",
        pluginId: P,
        scope: n
      };
    }
  }
  let ae = !1;
  ae = x_(P);
  let te;
  if (!ae && o === "refuse") {
    let N = await hIn(F, P, ee);
    if ("notRead" in N) return M(N, B);
    let {readsBack: j, file: U} = N;
    if (j === "unreadable" && U !== void 0 && U === Ty() && await Si(U)) te = `${U} (an older local settings file) is not JSON, so it was not checked: as it is, Claude Code ignores it and it switches nothing on. If you repair it, take "${ze(k)}" out of its "enabledPlugins" if it is there.`; else if (j === "on" || j === "unreadable" || j === "not-read-here" && B) return {
      success: !1,
      message: Bt(k, j, U, B, F),
      failureCode: "settings_still_on",
      pluginId: P,
      scope: n
    };
  }
  if (x_(P)) {
    let N = (z() && a !== void 0 ? await Fu(a) : Nm()).plugins[P] ?? [], j = tYt(N, n, Z);
    if (!N.filter(K => !j.includes(K)).some(NRt)) {
      if (await _it(P, [ ...N, ...V ?? [] ]) === "not-persisted") return {
        success: !1,
        message: `"${ze(k)}" was switched off at ${n} scope but not uninstalled, and nothing it saved was removed: plugin-directory-bindings.json in the plugins folder could not be used or written (unreadable, a symbolic link or not a file, over 1 MB, damaged, written by a newer Claude Code, or not writable), so nothing would keep the name for the repository it was installed from. Once the file can be written, uninstall it again.`,
        failureCode: "directory_binding_unreadable",
        pluginId: P,
        scope: n
      };
    } else await O4e(P, V);
  }
  await o3t(P, n, Z, a);
  let {dataDirKept: _e, directoryBindingKept: u, optionsRemoved: le, savedKept: ue} = await Qt({
    pluginId: P,
    installPath: Ie,
    deleteDataDir: i,
    scope: n,
    storageV5: a,
    registry: Nd(),
    installedOthers: ee
  }), T = rYt(P, c), De = hQr(T), X = ue === void 0 ? void 0 : Ci(k, i);
  return {
    success: !0,
    message: `Successfully uninstalled plugin: ${k} (scope: ${n})${De}${u === void 0 ? "" : `. ${An(u)}`}${X === void 0 ? "" : `. ${X}`}${te === void 0 ? "" : `${X === void 0 ? "." : ""} ${te}`}`,
    pluginId: P,
    pluginName: k,
    scope: n,
    ...ue !== void 0 && X !== void 0 && {
      savedKept: {
        reason: ue,
        note: X
      }
    },
    ...te !== void 0 && {
      olderLocalSettingsSkippedNote: te
    },
    dataDirKept: _e || u?.dataLeftInPlace === !0,
    ...u !== void 0 && {
      directoryNameNote: An(u)
    },
    ...le && {
      optionsRemoved: !0
    },
    ...u?.liveHolder !== void 0 && u.liveHolder !== P && {
      dataFolderUser: u.liveHolder
    },
    reverseDependents: T.length > 0 ? T : void 0
  };
}

function Bt(e, n, i, a, o, p, w) {
  let h = ze(e), r = i ?? "that settings file", c = a ? `, and the settings change failed (${a.message})` : "";
  if (n === "network-path" || n === "not-read-here") {
    let y = TAt({
      source: o,
      file: r,
      readsBack: "not-read-here",
      ...n === "network-path" && {
        notReadBecause: n
      }
    }), F = n === "not-read-here" ? "Once that file can be saved, uninstall it again." : p === "vet-network" || p === "suspect-link" || p === "crossing" ? `If that file, its ".claude" folder or a folder above them is a link to another machine, replace the link with a real file or folder, or start Claude Code from the folder's real location. Then uninstall it again.` : "Try uninstalling it again: if the path to that file changed during the check, that will work. If you see this again, the path cannot be checked, and trying again will not help.", O = w === "nothing-was-changed" ? " Nothing was changed." : w === "change-may-be-made" && !a ? ` "${h}" may already have been removed from the enabled plugins in this scope's settings.` : "";
    return `"${h}" was not uninstalled: ${y}, so it may still switch "${h}" on${c}.${O} It is still installed. ${F}`;
  }
  if (n === "unreadable") return `"${h}" was not uninstalled: ${r} is there and could not be read, so it may still switch "${h}" on${c}. It is still installed. Once that file can be read and saved, uninstall it again.`;
  return a ? `"${h}" was not uninstalled: it is still switched on in ${r}${c}. It is still installed. Once that file can be saved, uninstall it again.` : `"${h}" was not uninstalled: it is still switched on in ${r}, although the settings change reported no error. It is still installed. Take it out of "enabledPlugins" in that file yourself, then uninstall it again.`;
}

async function Si(e) {
  try {
    let n = await gIn(e);
    if (n.kind !== "bytes" || n.content.trim() === "") return !1;
    try {
      return Y(Mo(n.content)), !1;
    } catch {
      return !0;
    }
  } catch {
    return !1;
  }
}

function Jt(e) {
  return `take ${e} entries out of "pluginConfigs" in your user settings file and out of "pluginSecrets" in your credentials store yourself`;
}

function Ci(e, n) {
  let i = `"${ze(e)}"`;
  return `What ${i} saved was kept (its options, its secrets${n ? ", its usage record and its data folder" : " and its usage record"}): the list of installed plugins could not be read again, so ${i} may still be installed at another scope. If it is installed again, it will use what was kept without asking. To delete what was kept, uninstall ${i} again; if that says it is not installed, install it and then uninstall it; if it can no longer be installed, ${Jt("its")}.`;
}

async function Qt({pluginId: e, installPath: n, deleteDataDir: i, scope: a, storageV5: o, registry: p, installedOthers: w}) {
  let h = p.plugins[e], r = !h || h.length === 0, c = [], y = !1;
  {
    let k = kn(e);
    if (k.marketplace !== void 0 && (k.marketplace === mn || gk(k.marketplace))) {
      if (y = $W(p) === "unknown", y) t(`installed_plugins.json could not be read, so the version folder of ${e} was kept`);
      c = ppr(e, p).flatMap(b => p.plugins[b] ?? []);
    }
  }
  let F = !1;
  if (F = x_(e), !F && $W(p) === "unknown") return t(`installed_plugins.json could not be read again after an install record of ${e} was removed, so what it saved was kept`, {
    level: "warn"
  }), {
    dataDirKept: !0,
    directoryBindingKept: void 0,
    optionsRemoved: !1,
    savedKept: "install_records_unreadable"
  };
  if (r && n && !y && !c.some(k => {
    let b = _Ot(k.installPath);
    return b !== void 0 && b === _Ot(n);
  })) await oce(n, o);
  if (!r) await O4e(e, h);
  let O = !i || rOn(e, p), P = r ? await Xt(e, !O, x_(e) ? $W(z() && o !== void 0 ? await Fu(o) : Nm()) : [], o, a, w) : void 0;
  return {
    dataDirKept: O,
    directoryBindingKept: P,
    optionsRemoved: r && x_(e) && (P === void 0 || P.optionsGone)
  };
}

async function Xt(e, n, i, a, o, p = []) {
  let {plan: w, stillOn: h, optionsGone: r, dataGone: c, optionsNotGoneBecause: y, liveHolder: F, installsUnknown: O, entry: P} = await O6t(e, {
    deleteDataDir: n,
    installedIds: i,
    installedOthers: p,
    storageV5: a
  });
  if ($Rt([ e ], a), w.kind === "nothing" && w.reason === "still-switched-on") return {
    pluginId: e,
    optionsGone: !1,
    optionsNotGoneBecause: [],
    dataGone: !1,
    dataKeptOnRequest: !n,
    stillOnIn: Zt(h, o),
    stillOnUnsure: h.some(k => k.readsBack !== "on"),
    stillOnNotReadHere: h.some(k => k.readsBack === "not-read-here" && k.notReadBecause === void 0),
    ...h.some(k => k.notReadBecause === "network-path") && {
      stillOnNotReadForItsPath: h
    },
    stillOnProjectFile: o !== "project" && h.some(k => k.source === "projectSettings" && k.readsBack === "on"),
    dataLeftInPlace: !0,
    entry: P
  };
  if (P !== "none" || F !== void 0 || x_(e) && (!r || n && !c)) return {
    pluginId: e,
    optionsGone: r,
    optionsNotGoneBecause: y,
    dataGone: c,
    dataKeptOnRequest: !n,
    ...F !== void 0 && {
      liveHolder: F
    },
    ...O && {
      installsUnknown: O
    },
    dataLeftInPlace: F !== void 0 || O === !0,
    entry: P
  };
  return;
}

function Zt(e, n) {
  return e.map(i => i.readsBack !== "on" ? TAt(i) : i.source === "projectSettings" && n !== "project" ? `${i.file} (the project's shared settings)` : TAt(i));
}

async function jt(e, n, i, a) {
  {
    let {name: o, marketplace: p} = kn(e), w = ze(o, 120);
    if (p !== mn) return;
    let h = await Jre();
    if (Oce(h)) return;
    let r = `${o}@${p}`, y = DT(h.keys(), r)[0];
    if (y === void 0) return;
    let F = z() && a !== void 0 ? await Fu(a) : Nm();
    if (QD(F)) return;
    let O = DLe(F.plugins, r).find(([, Z]) => Z.length > 0)?.[0];
    if (O === r) return;
    if (O !== void 0) return {
      success: !1,
      message: `"${w}" is not installed. "${ze(O, 200)}" is, and it uses the same data folder, so nothing was removed. To free the name, ${Gg("plugin uninstall", O, {
        fallback: `uninstall "${ze(O, 200)}" from the command line`
      })}.`,
      failureCode: "directory_name_held",
      pluginId: r,
      scope: n
    };
    let P = Z => E_e(Z, y), k = [];
    try {
      for (let V of [ "userSettings", "localSettings", ...n === "project" ? [ "projectSettings" ] : [] ]) {
        let de = await hIn(V, y);
        if ("notRead" in de || de.readsBack !== "on") continue;
        let {error: Ie} = await ca(V, M => ({
          enabledPlugins: {
            ...M?.enabledPlugins,
            ...Object.fromEntries(P(M?.enabledPlugins).map(B => [ B, void 0 ]))
          }
        }), void 0, a), ee = hn(V) ?? `your ${RC(V)}`;
        if (Ie) return {
          success: !1,
          message: `"${w}" could not be removed from the enabled plugins in ${ee} (${Ie.message})${k.length > 0 ? `; it was removed from them in ${k.join(" and ")}` : ""}. Nothing it saved was removed, so "${w}" can still only be installed from the same repository. Once ${ee} can be saved, uninstall it again.`,
          failureCode: "settings_write_failed",
          pluginId: y,
          scope: n
        };
        k.push(ee);
      }
      let Z = await Kcr(y);
      if (Z.length > 0) {
        let V = Z.some(Ie => Ie.readsBack !== "on"), de = n !== "project" && Z.some(Ie => Ie.source === "projectSettings" && Ie.readsBack === "on") ? "To remove it there, uninstall it again with --scope project" : Z.some(Ie => Ie.readsBack === "not-read-here" && Ie.notReadBecause === void 0) ? "Once this workspace is trusted and Claude Code has been started again, uninstall it again" : oto(Z, "uninstall it again") ?? "Once it is switched off there, uninstall it again";
        return {
          success: !1,
          message: `"${w}" is still switched on${V ? ", or may be," : ""} in ${Zt(Z, n).join(" and ")}${k.length > 0 ? `; it was removed from the enabled plugins in ${k.join(" and ")}` : ""}. Nothing it saved was removed, so "${w}" can still only be installed from the same repository. ${de}.`,
          failureCode: "directory_name_held",
          pluginId: y,
          scope: n
        };
      }
    } finally {
      gd(a);
    }
    let b = z() && a !== void 0 ? await Fu(a) : Nm();
    if (QD(b) || DLe(b.plugins, r).some(([, Z]) => Z.length > 0)) return {
      success: !1,
      message: `"${w}" was not removed: an install record for it appeared while it was being switched off, or the install records could no longer be read. Nothing it saved was removed. Run the uninstall again.`,
      failureCode: "directory_name_held",
      pluginId: y,
      scope: n
    };
    let he = await Xt(y, i, $W(b), a, n);
    return {
      success: !0,
      message: `"${w}" was no longer installed.${k.length > 0 ? ` Removed it from the enabled plugins in ${k.join(" and ")}.` : ""} ${he === void 0 ? `Removed anything still saved under its name (${i ? "options, secrets, data" : "options, secrets"}).` : An(he)}`,
      pluginId: y,
      pluginName: o,
      scope: n,
      dataDirKept: !i || he?.dataLeftInPlace === !0,
      directoryNameNote: he && An(he)
    };
  }
  return;
}

function Ri(e, n) {
  {
    let i = [ ...e.includes("secrets_unreadable") && n === "keychain" ? [ "unlock your keychain, or allow its prompt, so that the saved secrets can be checked" ] : [], ...e.includes("secrets_unreadable") && n === "file" ? [ "make sure the credentials file in your Claude configuration folder can be read" ] : [], ...e.includes("settings_unreadable") ? [ "fix your user settings file, which is there and could not be read" ] : [], ...e.includes("settings_write_failed") ? [ "make sure your user settings file can be saved" ] : [], ...e.includes("secrets_write_failed") ? [ "make sure the credentials store can be written (if another Claude Code was using it, just try again)" ] : [] ], a = [ ...e.includes("secrets_unreadable") && n === "credential-manager" ? [ "run it from a Claude Code that can reach Windows Credential Manager (this one could not, so it cannot tell whether secrets are still saved there)" ] : [], ...i.length > 0 ? [ `first ${i.join(", and ")}` ] : [], ...e.includes("secrets_remain") ? [ "its secrets were still there after this delete" ] : [], ...e.includes("settings_remain") ? [ 'its options were still in your user settings file after this delete: take its entry out of "pluginConfigs" there yourself' ] : [] ];
    return a.length > 0 ? a.join("; ") : "first make sure your user settings file and the credentials store can be read and written";
  }
  return "";
}

function An(e) {
  {
    if (e === void 0) return "";
    let n = ze(kn(e.pluginId).name, 120), i = ah(e.pluginId), a = "Its saved options and secrets could not be deleted", o = e.entry === "held" ? `, and "${n}" can still only be installed from the same repository` : "", p = Gg("plugin uninstall", e.pluginId, {
      ...e.stillOnProjectFile && {
        extra: "--scope project"
      },
      tail: "again",
      fallback: `uninstall "${ze(e.pluginId, 200)}" again from the command line${e.stillOnProjectFile ? " with --scope project" : ""}`
    });
    if (e.stillOnIn !== void 0) {
      let c = e.stillOnProjectFile ? `To remove it there too, ${p}` : e.stillOnNotReadHere ? `Once this workspace is trusted and Claude Code has been started again, ${p}` : oto(e.stillOnNotReadForItsPath ?? [], p) ?? `Once it is switched off there, ${p}`;
      return `It is still switched on${e.stillOnUnsure ? ", or may be," : ""} in ${e.stillOnIn.join(" and ")}, so nothing it saved was removed${o}. ${c}.`;
    }
    if (e.installsUnknown) return `The list of installed plugins could not be read, so nothing it saved was removed${o}. Once the list can be read, ${p}.`;
    if (e.liveHolder === e.pluginId) return `An install record for "${n}" appeared while it was being uninstalled, so nothing it saved was removed.`;
    if (e.liveHolder !== void 0) {
      let c = ze(e.liveHolder, 200), y = Gg("plugin uninstall", e.liveHolder, {
        fallback: `uninstall "${c}" from the command line`
      }), F = x_(e.liveHolder) ? "" : `, then ${Gg("plugin uninstall", e.pluginId, {
        fallback: `uninstall "${ze(e.pluginId, 200)}" from the command line`
      })}`;
      return `${e.optionsGone ? "" : `${a}. `}Its data folder (${i}) was left in place because "${c}" is installed and uses it${e.entry === "held" ? `, so "${n}" can still only be installed from the same repository` : ""}. What is left is removed when "${c}" is uninstalled: ${y}${F}.`;
    }
    if (e.entry !== "held") return [ ...[ ...e.optionsGone ? [] : [ "Its saved options and secrets may not have been deleted." ], ...e.dataGone || e.dataKeptOnRequest ? [] : [ `Its data folder could not be deleted (${i}); you can delete it yourself.` ] ], e.entry === "unreadable" ? `plugin-directory-bindings.json in the plugins folder could not be used, so "${n}" cannot be installed again until that file can be used.` : `Nothing ties "${n}" to the repository it came from, so a plugin installed under that name later could read what is left.` ].join(" ");
    let w = `so "${n}" can still only be installed from the same repository`, h = Gg("plugin uninstall", e.pluginId, {
      fallback: `uninstall "${ze(e.pluginId, 200)}" from the command line`
    }), r = Ri(e.optionsNotGoneBecause, FPr());
    if (e.optionsGone) return e.dataKeptOnRequest ? `Its data folder was kept (${i}), ${w}. To free the name, ${h}, which deletes that folder.` : `Its data folder could not be deleted (${i}), ${w}. Once the folder can be deleted, ${h} to free the name.`;
    if (e.dataGone) return `${a}, ${w}. To delete them and free the name, ${h} (${r}).`;
    return e.dataKeptOnRequest ? `${a}, and its data folder was kept (${i}), ${w}. To delete both and free the name, ${h} (${r}).` : `Its saved options and secrets and its data folder (${i}) could not be deleted, ${w}. Once they can be deleted (${r}), ${h} to free the name.`;
  }
  return "";
}

async function Rn(e, n, i, a, o) {
  let p = n ? "enable" : "disable", w = Sn();
  e = PH(e);
  let {name: h, marketplace: r} = _Z(e);
  if (z() && o !== void 0) await nOn(o);
  if (r === void 0 && !Xm(e)) {
    let M = Ann(e, Fi), B = Un(e, [ "user" ])?.pluginId;
    if (tz(M) && B !== void 0 && !Xm(B)) return Rn(B, n, i, a, o);
    if (tz(M)) {
      let te = await CS(o);
      if (![ ...te.enabled, ...te.disabled ].some(u => vm(u.name, e) && !Xm(u.source))) return Rn(M, n, i, a, o);
      return {
        success: !1,
        message: `Plugin "${e}" names both a built-in and another loaded plugin. Use plugin@marketplace format.`,
        failureCode: "ambiguous_marketplace"
      };
    }
    let ae = Un(e)?.pluginId;
    if (ae !== void 0 && (rf(Hi(ae)) || tz(ae))) return Rn(ae, n, i, a, o);
  }
  if (Xm(e) || rf(r)) {
    let M = "user", B = Mlo(e) ?? e, ae = Bi(B, n);
    if (ae !== void 0) return At(B, n, ae, B);
    let te, _e, u = [], le = !1, ue = !1, T, De = !1, X = "";
    if (rf(r)) {
      let A = await CS(o), Q = xt(e, [ ...A.enabled, ...A.disabled ].filter(R => Hi(R.source) === r));
      if (Q) B = Q.source, te = Q.manifest.defaultEnabled === !1;
      if (ue = r === Mi && (Q !== void 0 ? Lz(Q.source, Q.installationPreference) : (await Vn(o)).some(R => R.required && fr(R.id) === fr(B))), 
      !n && ue) return {
        success: !1,
        message: a3n(B),
        failureCode: "required_by_organization"
      };
      if (!n && r === Ac && Q === void 0) {
        let R = `${h}@${Mi}`, Ae = (await Vn(o)).find(Te => Te.required && fr(Te.id) === fr(R));
        if (Ae !== void 0) return {
          success: !1,
          message: a3n(Ae.id),
          failureCode: "required_by_organization"
        };
      }
      if (!n && !a?.bypassDependentsBlock) {
        let R = et([ ...A.enabled, ...A.disabled ]).get(fr(B)) ?? [];
        if (R.length > 0) return {
          success: !1,
          message: Mt(_Z(B).name, R),
          failureCode: "required_by_organization",
          reverseDependents: R.map(Ae => Ae.name)
        };
      }
      let qe = A.warnings.some(R => R.type === "synced-plugin-shadowed" && fr(R.source) === fr(B)), Pe = n && !qe ? Kt(B, Q?.attributedMarketplaceName) : void 0;
      if (Pe !== void 0) return {
        success: !1,
        message: `Plugin "${B}" cannot be ${p}d here: "${Pe}" is locked by your organization's managed settings, so this ${pi(r)} copy is never loaded`,
        failureCode: "managed_name_locked"
      };
      if (le = Q !== void 0 && qCe(wit(), _Z(B).name, Q.attributedMarketplaceName).outcome === "admitted", 
      n && le && Q !== void 0) u = [ `${Q.name}@${Mi}`, `${Q.name}@${Ac}` ].flatMap(R => [ "local", "user" ].flatMap(Ae => {
        let Te = En(Ae, R, w);
        return Te?.value === !1 ? [ {
          scope: Ae,
          key: Te.key
        } ] : [];
      }));
      if (n && r === Mi) {
        let R = new Set(A.errors.filter(vFe).map(Te => Te.source)), Ae = Ino(h, [ ...A.enabled.filter(Te => !Te.isBuiltin), ...A.disabled.filter(Te => R.has(Te.source)).map(Te => ({
          ...Te,
          enabled: !0
        })), ...A.enabled.filter(Te => Te.isBuiltin) ]);
        if (Ae !== void 0) X = ` (a local copy, ${Bn(Ae.source)}, currently takes precedence over the synced one \u2014 disable it in /plugin to run this copy)`;
      }
      if (n && r === Ac && !le) {
        let {name: R} = B1(B), Ae = `${R}@${Mi}`, Te = kte.filter(Ye => En(Ye, B, w)?.value === !1 && En(Ye, Ae, w) === void 0);
        if (Te.length > 0) _e = {
          syncedId: Ae,
          scopes: Te
        };
      }
      let Ce = Cn(B, i, w);
      if (T = Ce.override, i) {
        if (B = Ce.atRequested?.key ?? Ce.found?.key ?? B, De = Ce.atRequested !== void 0, 
        Ce.atRequested === void 0 && Ce.found && gn[Ce.found.scope] > gn[i]) return {
          success: !1,
          message: `Plugin "${B}" is set at ${Ce.found.scope} scope (which overrides ${i}). Use --scope ${Ce.found.scope} or omit --scope to auto-detect.`,
          failureCode: "not_installed_at_scope",
          installedScope: Ce.found.scope
        };
        M = i;
      } else M = Ce.decidingScope ?? Ce.found?.scope ?? "user", B = En(M, B, w)?.key ?? B;
    }
    if (n && r === Cu) {
      if (!j7()) return {
        success: !1,
        message: hZt(Os(Fn(Ee(), "skills"))),
        failureCode: "local_plugin_dirs_blocked"
      };
    }
    if (n && Bf(B)) return {
      success: !1,
      message: `Plugin "${B}" is blocked by your organization's policy and cannot be enabled`,
      failureCode: "plugin_policy_blocked"
    };
    if (r === Mi && T && T.enabling !== n && !(ue && T.source === "flagSettings")) return At(B, n, T.source, T.key);
    let N = JT(M), j = n && rf(r) && N === "userSettings" && te === !1 && (r !== Mi || Qxs(B, ji(N, B)) !== !1) ? void 0 : n, U = "";
    if (r === Mi) {
      let A = ti(N, B, j), Q = Hvo(B, A.map(({record: Ce}) => Ce)), qe = Q?.enabled ?? te !== !0, Pe = Q === void 0 ? void 0 : A[Q.index]?.source;
      if (qe !== n && Pe !== void 0 && !(ue && Pe !== "policySettings")) {
        let Ce = wE(Pe), R = Pe === "localSettings" || Pe === "projectSettings" || Pe === "userSettings" ? sDt[Pe] : void 0, Ae = R !== void 0 ? ` (--scope ${R})` : "";
        if (!De) return {
          success: !1,
          message: `Plugin "${B}" would still be ${n ? "disabled" : "enabled"} after writing ${M} settings: ${Ce} settings govern it. Change it there${Ae}.`,
          failureCode: "governed_elsewhere",
          ...R !== void 0 && {
            governingScope: R
          }
        };
        U = ` (still ${n ? "disabled" : "enabled"} here: ${Ce} settings govern it${Ae})`;
      }
      if (!jo().includes(N)) U += ` (this session ignores ${wE(N)} settings: --setting-sources)`;
    }
    for (let {scope: A, key: Q} of u) {
      if (A === M && fr(Q) === fr(B)) continue;
      let {error: qe} = await Mn(JT(A), Q, !0, {}, o);
      if (qe) return {
        success: !1,
        message: `Failed to ${p} plugin: ${qe.message}`,
        failureCode: "settings_write_failed"
      };
    }
    if (!n && rf(r) && M === "project" && (wit()?.some(A => A.enabled && HWn(A).some(Q => fr(Q) === fr(_Z(B).name))) ?? !1)) {
      let {error: A} = await Mn("userSettings", B, !1, {}, o);
      if (A) return {
        success: !1,
        message: `Failed to ${p} plugin: ${A.message}`,
        failureCode: "settings_write_failed"
      };
    }
    if (_e) {
      let {syncedId: A, scopes: Q} = _e;
      for (let qe of Q) {
        if (qe === M) continue;
        let {error: Pe} = await Mn(JT(qe), A, !1, {}, o);
        if (Pe) return {
          success: !1,
          message: `Failed to ${p} plugin: ${Pe.message}`,
          failureCode: "settings_write_failed"
        };
      }
    }
    let {error: oe} = await Mn(N, B, j, _e?.scopes.includes(M) ? {
      [_e.syncedId]: !1
    } : {}, o);
    if (oe) return {
      success: !1,
      message: `Failed to ${p} plugin: ${oe.message}`,
      failureCode: "settings_write_failed"
    };
    gd(o);
    let {name: C} = B1(B);
    return {
      success: !0,
      message: `Successfully ${p}d plugin: ${C}${U}${X}`,
      pluginId: B,
      pluginName: C,
      scope: M
    };
  }
  if (i) it(i);
  let c, y, F = Un(e);
  if (i) if (y = i, F) c = F.pluginId; else if (e.includes("@")) c = e; else return {
    success: !1,
    message: `Plugin "${e}" not found in settings. Use plugin@marketplace format.`,
    failureCode: "ambiguous_marketplace"
  }; else if (F) c = F.pluginId, y = F.scope; else if (e.includes("@")) c = e, y = "user"; else return {
    success: !1,
    message: `Plugin "${e}" not found in any editable settings scope. Use plugin@marketplace format.`,
    failureCode: "ambiguous_marketplace"
  };
  if (n && Bf(c)) return {
    success: !1,
    message: `Plugin "${c}" is blocked by your organization's policy and cannot be enabled`,
    failureCode: "plugin_policy_blocked"
  };
  if (xWn(c)) {
    let M = kn(c).name ?? c;
    if (n && L_() !== null) return {
      success: !1,
      message: at(M),
      failureCode: "marketplace_policy_blocked"
    };
    if (n && await ZIn(M, o)) return {
      success: !1,
      message: `Plugin "${ze(c)}" is blocked by your organization's policy and cannot be enabled`,
      failureCode: "plugin_policy_blocked"
    };
    await O4e(c, Nd().plugins[c]);
  }
  let O = JT(y), P = u5(fe(O)?.enabledPlugins, c), k = i && F && gn[i] > gn[F.scope];
  if (i && P === void 0 && F && F.scope !== i && !k) return {
    success: !1,
    message: `Plugin "${e}" is installed at ${F.scope} scope, not ${i}. Use --scope ${F.scope} or omit --scope to auto-detect.`,
    failureCode: "not_installed_at_scope",
    installedScope: F.scope
  };
  let b = i && !k ? P === !0 : MR(Cw(c)).length > 0 ? ynn(Cw(c)) === !0 : Zq().has(c);
  if (n === b) return {
    success: !1,
    alreadyInGoalState: !0,
    failureCode: "already_in_goal_state",
    message: `Plugin "${e}" is already ${n ? "enabled" : "disabled"}${i ? ` at ${i} scope` : ""}`
  };
  let he;
  if (!n) {
    let {enabled: M, disabled: B} = await CS(o), ae = [ ...M, ...B ], te = Cw(c), _e = rYt(te, ae);
    if (_e.length > 0) he = _e;
    if (!a?.bypassDependentsBlock) {
      let ue = et(ae).get(fr(te)) ?? [];
      if (ue.length > 0) return {
        success: !1,
        message: Mt(kn(c).name, ue),
        failureCode: "required_by_organization",
        reverseDependents: ue.map(T => T.name)
      };
    }
    let u = KJt() ? ae : ae.filter(ue => Hi(ue.source) !== Mi), le = rYt(te, u);
    if (le.length > 0 && !a?.bypassDependentsBlock) {
      let {name: ue} = kn(c), T = bts(te, u), De = [ ...T, c ].map(N => qa("plugin disable", N)), X = De.every(N => N !== null) ? `, or disable everything together: ${De.join(" && ")}` : ", or disable them together in /plugin.";
      return {
        success: !1,
        message: `${ue} is still required by ${le.map(Bn).join(", ")}. Disable ${I(le.length, "that plugin", "those plugins")} first${X}`,
        failureCode: "required_by_dependents",
        reverseDependents: le,
        disableFirst: T
      };
    }
  }
  let Z = [];
  if (n) {
    let {enabled: M, disabled: B} = await CS(o), {closure: ae, missing: te} = yQr(c, [ ...M, ...B ]);
    if (te.length > 0) {
      let {name: U} = kn(c), K = te.map(C => qa("plugin install", C)), oe = K.every(C => C !== null) ? `: ${K.join(" && ")}` : " from /plugin.";
      return {
        success: !1,
        message: `${U} depends on ${te.join(", ")}, which ${I(te.length, "is", "are")} not installed. Install ${I(te.length, "it", "them")} first${oe}`,
        failureCode: "dependency_missing",
        dependencies: te
      };
    }
    let _e = new Set(M.map(U => U.source)), u = new Map([ ...M, ...B ].filter(U => rf(Hi(U.source))).map(U => [ U.source, U ])), le = R0e(), ue = ae.filter(U => rf(Hi(U)) && !_e.has(U) && !oDt(U, le, u.get(U)?.manifest.defaultEnabled, u.get(U)?.installationPreference));
    if (ue.length > 0) {
      let {name: U} = kn(c), K = ue.length, oe = ue.map(A => qa("plugin enable", A)), C = oe.every(A => A !== null) ? `: ${oe.join(" && ")}` : " in /plugin.";
      return {
        success: !1,
        message: `${U} depends on ${ue.join(", ")}, ${I(K, "a local copy that is", "local copies that are")} currently disabled. Enable ${I(K, "it", "them")} first${C}`,
        failureCode: "dependency_disabled",
        dependencies: ue
      };
    }
    let T = ae.filter(U => !rf(Hi(U))), De = T.filter(U => Bf(U));
    if (De.length > 0) {
      let {name: U} = kn(c);
      return {
        success: !1,
        message: `${U} depends on ${De.join(", ")}, which ${I(De.length, "is", "are")} blocked by your organization's plugin policy. Ask an admin to allow ${I(De.length, "it", "them")}.`,
        failureCode: "dependency_policy_blocked"
      };
    }
    let X = [ ...kte ].sort((U, K) => gn[K] - gn[U]), N = [];
    for (let U of T) for (let K of X) {
      if (gn[K] <= gn[y]) continue;
      let oe = fe(JT(K))?.enabledPlugins?.[U];
      if (oe === void 0) continue;
      if (oe === !1) N.push({
        dep: U,
        scope: K
      });
      break;
    }
    if (N.length > 0) {
      let {name: U} = kn(c), K = N.map(A => `${A.dep} (${A.scope} scope)`).join(", "), oe = D(N.map(A => A.scope)), C = oe.length === 1 ? `, or use --scope ${oe[0]} to write where the override lives` : "";
      return {
        success: !1,
        message: `${U} depends on ${K}, which ${I(N.length, "is", "are")} disabled there. Enable ${I(N.length, "it", "them")} at that scope${C}.`,
        failureCode: "dependency_disabled",
        dependencies: N.map(A => A.dep)
      };
    }
    let j = urt(O);
    Z = T.filter(U => !j.has(U));
  }
  let {error: V} = await Mn(O, c, n, Object.fromEntries(Z.map(M => [ M, !0 ])), o);
  if (V) return {
    success: !1,
    message: `Failed to ${p} plugin: ${V.message}`,
    failureCode: "settings_write_failed"
  };
  if (gd(o), n) pgr([ c, ...Z ], o), Xus([ c, ...Z ], o);
  let {name: de} = kn(c), Ie = hQr(he), ee = Z.length > 0 ? ` (also enabled ${Z.length} ${I(Z.length, "dependency", "dependencies")}: ${Z.map(M => kn(M).name).join(", ")})` : "";
  return {
    success: !0,
    message: `Successfully ${p}d plugin: ${de} (scope: ${y})${Ie}${ee}`,
    pluginId: c,
    pluginName: de,
    scope: y,
    reverseDependents: he
  };
}

async function wyt(e, n, i) {
  return Rn(e, !0, n, void 0, i);
}

async function LQe(e, n, i) {
  return Rn(e, !1, n, void 0, i);
}

async function C1o(e) {
  let n = Zq();
  await _Ke();
  let i = await Vn(e), a = D(i.map(u => u.id)), o = new Set(i.filter(u => u.required).map(u => fr(u.id))), p = o.size > 0 && quo() ? await CS(e).then(u => [ ...u.enabled, ...u.disabled ]) : [], w = new Set(p.filter(u => Hi(u.source) === Ac).map(u => fr(u.source))), h = u => {
    let le = PH(u), ue = Hi(le);
    if (ue === Ac) {
      if (w.has(fr(le))) return !1;
    } else if (ue !== Mi) return !1;
    let T = le.slice(0, le.lastIndexOf("@"));
    return o.has(fr(`${T}@${Mi}`));
  }, r = Akt(), y = (u => new Set(u.flatMap(({record: le}) => Object.keys(le ?? {}).map(fr))))(r), F = a.filter(u => !y.has(fr(u)) && !h(u)), O = u => new Set(u.flatMap(({record: le}) => Object.keys(le ?? {}))), P = O(r), k = O(r.filter(({source: u}) => Dz.includes(u))), b = Mz().enabled.map(u => u.source).filter(u => {
    let le = tz(u) ? k : P;
    return ![ u, ...MR(u) ].some(ue => le.has(ue));
  }), he = new Set(et(p).keys()), Z = u => he.has(fr(PH(u))), V = [ ...n.keys(), ...F, ...b ], de = D(V.filter(u => !h(u) && Z(u))), Ie = [ ...F, ...b ].filter(u => !Z(u)), ee = [ ...n.keys() ].filter(u => !h(u) && !Z(u)), M = o.size, B = de.length > 0 ? ` and ${de.length} ${I(de.length, "plugin")} ${I(M, "it depends", "they depend")} on` : "", ae = M > 0 ? ` (skipped ${M} required by your organization${B})` : "";
  if (ee.length === 0 && Ie.length === 0) return {
    success: !0,
    message: `No enabled plugins to disable${ae}`
  };
  let te = [], _e = [];
  for (let u of ee) {
    let le = await Rn(u, !1, void 0, {
      bypassDependentsBlock: !0
    }, e);
    if (le.success) te.push(u); else _e.push(Bn(`${u}: ${le.message}`));
  }
  for (let u of Ie) {
    let {error: le} = await ca("userSettings", ue => ({
      enabledPlugins: {
        ...ue?.enabledPlugins,
        [u]: !1
      }
    }), void 0, e);
    if (le) _e.push(Bn(`${u}: ${le.message}`)); else te.push(u);
  }
  if (Ie.length > 0) gd(e);
  if (_e.length > 0) return {
    success: !1,
    message: `Disabled ${te.length} ${I(te.length, "plugin")}${ae}, ${_e.length} failed:\n${_e.join(`\n`)}`,
    failureCode: "partial_failure"
  };
  return {
    success: !0,
    message: `Disabled ${te.length} ${I(te.length, "plugin")}${ae}`
  };
}

async function Vn(e) {
  return (await Promise.all(Fme().map(async i => {
    let a = await Pno(i, e);
    if (a === void 0) return [];
    let o = `${a}@${Mi}`, p = await EUn(vn(i));
    return [ {
      id: o,
      required: Lz(o, p.installationPreference) && Kt(o, p.marketplaceName) === void 0
    } ];
  }))).flat();
}

function et(e) {
  let n = new Map;
  if (!quo()) return n;
  for (let i of e) {
    if (!Lz(i.source, i.installationPreference)) continue;
    for (let a of yQr(i.source, e).closure) {
      let o = fr(a);
      n.set(o, [ ...n.get(o) ?? [], i ]);
    }
  }
  return n;
}

function Mt(e, n) {
  return `${e} is needed by ${n.map(i => Bn(i.name)).join(", ")}, which ${I(n.length, "is", "are")} required by your organization, so it can't be disabled here. Contact your admin to change it.`;
}

function a3n(e) {
  return `Plugin "${e}" is required by your organization and can't be disabled here. Contact your admin to change it.`;
}

async function NQe(e, n, i = {}, a) {
  let o;
  try {
    o = await vi(e, n, i, a);
  } catch (w) {
    let h = {
      is_directory: n7(e)
    };
    if (w instanceof ld) {
      let r = w instanceof E7 ? w.failureCode : "command_source_refused";
      if (Zn[r] === "sad") f("plugin_update_op", r, h); else m("plugin_update_op", r, h);
      return {
        outcome: "failed",
        message: w.message,
        scope: n,
        failureCode: r
      };
    }
    throw m("plugin_update_op", "exception", h), w;
  }
  let p = {
    is_directory: n7(o.pluginId ?? e),
    pin_changed: o.pinChanged === !0,
    no_clone_short_circuit: o.noCloneShortCircuit === !0,
    not_checked: o.notChecked === !0
  };
  switch (o.outcome) {
   case "failed":
    if (o.failureCode !== void 0 && Zn[o.failureCode] === "sad") f("plugin_update_op", o.failureCode, p); else m("plugin_update_op", o.failureCode ?? "op_failed", p);
    break;

   case "skipped":
    f("plugin_update_op", o.skipReason ?? "skipped", p);
    break;

   case "up_to_date":
   case "updated":
    if (o.refreshFailed) f("plugin_update_op", o.refreshRefusedByPolicy ? "marketplace_refresh_policy_refused" : "marketplace_refresh_failed", p); else g("plugin_update_op", {
      already_up_to_date: o.outcome === "up_to_date",
      version_unknown: o.newVersion === "unknown",
      ...p
    });
    break;
  }
  return o;
}

async function Vt(e, n, i, a) {
  if (e.outcome !== "up_to_date") return e;
  let {absolute: o, suspect: p} = TR(n.installPath), h = (p ? void 0 : await dOn(o).catch(() => {}))?.kind === "not-installed" ? await lOn(o) : void 0;
  if (h === void 0) return e;
  if (Ct()) return e;
  let r = n.projectPath ? `${n.scope} (${n.projectPath})` : n.scope, c, y = !1;
  try {
    await l3t(o, a), c = (await I6t(o, {
      inPlaceAt: h
    })).error;
  } catch (P) {
    y = !0, c = l(P);
  }
  let F;
  if (!y) await d3t(o, a).catch(P => {
    F = l(P);
  });
  if (!(!y && await lOn(o) === h && await Iis(o) && await dOn(o).then(P => P === void 0, () => !1))) return {
    pluginId: e.pluginId,
    newVersion: e.newVersion,
    oldVersion: e.oldVersion,
    scope: e.scope,
    outcome: "failed",
    message: `Could not install the packages that "${i}" lists for scope ${r}, so parts of it may not work. Updating it again retries the install.${c ? ` Cause: ${ze(c)}` : ""}`,
    failureCode: "dependencies_not_installed"
  };
  if (F !== void 0) return {
    pluginId: e.pluginId,
    newVersion: e.newVersion,
    oldVersion: e.oldVersion,
    scope: e.scope,
    outcome: "failed",
    message: `Installed the packages that "${i}" lists for scope ${r}, but could not finish checking them for links that lead outside the plugin. Cause: ${ze(F)}`,
    failureCode: "dependencies_not_screened"
  };
  return {
    ...e,
    outcome: "updated",
    message: `Installed the packages that "${i}" lists for scope ${r}. Restart to apply changes. ${e.message}`
  };
}

async function vi(e, n, {skipMarketplaceRefresh: i = !1, skipCommandSources: a = !1, announceCommandSource: o, explicit: p = !1, consentedEntryHelper: w, onEntryHelperDisclosure: h}, r) {
  let c = p;
  e = PH(e);
  let {name: y, marketplace: F} = _Z(e), O = nt(e, F, "update");
  if (O !== void 0) return {
    outcome: "failed",
    message: O,
    failureCode: tt(e, F)
  };
  let P = await N3(r);
  if (P !== void 0) return {
    outcome: "failed",
    message: `Plugin "${ze(e)}" was not updated: ${V4(P)}`,
    failureCode: "install_records_unreadable"
  };
  let k = F, b = k ? `${y}@${k}` : e, he = z() && r !== void 0 ? await Fu(r) : Nm(), Z = hv(Object.keys(he.plugins), b);
  if (Z === void 0 && k === void 0) {
    let S = Dvo(Object.keys(he.plugins), y).filter(J => (he.plugins[J]?.length ?? 0) > 0);
    if (S.length > 1) return {
      outcome: "failed",
      message: `Plugin "${kt(y, 200)}" is installed from more than one marketplace. Include the marketplace name to pick one: ${S.map(J => `\`claude plugin update ${kt(J, 200)}\``).join(" or ")}`,
      scope: n,
      failureCode: "ambiguous_marketplace"
    };
    if (S.length === 0) return {
      outcome: "failed",
      message: `Plugin "${kt(y, 200)}" is not installed`,
      scope: n,
      failureCode: "not_installed"
    };
    Z = S[0];
  }
  if (Z) b = Z, ({marketplace: k} = kn(b));
  let V = Z ? he.plugins[Z] : void 0, de = await O4e(b, V), Ie = void 0;
  if (Ie !== void 0 && !Ie.ok) return {
    outcome: "failed",
    message: Ie.message,
    pluginId: b,
    scope: n,
    failureCode: "not_found"
  };
  let ee, M = !1, B, ae = !1;
  if (Bf(b)) return {
    outcome: "failed",
    message: `Plugin "${kt(b, 200)}" is blocked by your organization's policy and was not updated`,
    pluginId: b,
    scope: n,
    failureCode: "plugin_policy_blocked"
  };
  if (k === yh) {
    if (!oOn()) return {
      outcome: "failed",
      message: sOn,
      pluginId: b,
      scope: n,
      failureCode: "npm_marketplace_disabled"
    };
    if (!V || V.length === 0) return {
      outcome: "failed",
      message: `Plugin "${y}" is not installed`,
      pluginId: b,
      scope: n,
      failureCode: "not_installed"
    };
    return Oi(b, y, n ?? Ut(V), V, r, p);
  }
  if (k) {
    let S = await qd(r), J = qy(S, k), H = J?.source;
    if (H && wf(H) && await uR() === "blocked") return {
      outcome: "failed",
      message: at(y),
      pluginId: b,
      scope: n,
      failureCode: "marketplace_policy_blocked"
    };
    let pe = !H && k === mn && NW();
    if (b1(pe ? {
      source: "pluginDirectory"
    } : H)) return {
      outcome: "failed",
      message: `Plugin "${y}" is from marketplace "${k}", which is blocked by your organization's policy`,
      pluginId: b,
      scope: n,
      failureCode: "marketplace_policy_blocked"
    };
    if (J !== void 0 && $Q(k, J)) return {
      outcome: "failed",
      message: Ht(k, J),
      pluginId: b,
      scope: n,
      failureCode: "not_found"
    };
    if (ae = !H && k === mn && !NW(), !i && (H && (H.source === "github" || H.source === "git" || H.source === "url" || H.source === "claudeai" || H.source === "pluginDirectory") || !H && k === mn && NW())) try {
      await sV(k, r, void 0, {
        skipIfRecent: !0
      });
    } catch (me) {
      if (M = me instanceof ld, ee = M ? "marketplace not refreshed \u2014 your organization's managed settings forbid its headersHelper (the version shown is from the cached catalog; ask your admin)" : `marketplace not refreshed (${cD(l(me))})`, 
      me instanceof Ope) B = cD(me.message);
      t(`Failed to refresh marketplace '${k}' before update; using cached data: ${l(me)}`, {
        level: "warn"
      });
    }
  }
  let te = {
    pluginName: y,
    refreshWarning: ee,
    directoryRefreshFailed: k === mn && !M,
    directoryNotChecked: ae
  }, _e = i || B !== void 0 ? await Gk(b, r) : await oV(b, r, "update");
  if (!_e && !i && k === mn) {
    if (B !== void 0) return {
      outcome: "failed",
      message: `Could not check "${ze(y)}" for updates. ${B}`,
      pluginId: b,
      scope: n,
      failureCode: "directory_unavailable"
    };
    if (await ZIn(y, r)) return {
      outcome: "failed",
      message: `Plugin "${ze(y)}" is blocked by your organization's policy and was not updated`,
      pluginId: b,
      scope: n,
      failureCode: "plugin_policy_blocked"
    };
    let S = await Tno(y);
    if (S !== void 0) return {
      outcome: "failed",
      message: `"${ze(y)}" was not updated: ${S}`,
      pluginId: b,
      scope: n,
      failureCode: "directory_listing_not_installable"
    };
  }
  if (!_e) return {
    outcome: "failed",
    message: i ? `Plugin "${y}" is not in the locally cached marketplace catalog; it was not re-resolved.` : `Plugin "${y}" not found`,
    pluginId: b,
    scope: n,
    failureCode: i ? "not_cached" : "not_found"
  };
  let {entry: u} = _e, {marketplaceInstallLocation: le} = _e;
  if (!V || V.length === 0) return {
    outcome: "failed",
    message: `Plugin "${y}" is not installed`,
    pluginId: b,
    scope: n,
    failureCode: "not_installed"
  };
  if (n === void 0) n = Ut(V);
  let ue = qEe(n), T = V.filter(S => S.scope === n), De = s3t(T);
  if (!De && T.length > 1) t(`updatePluginOp: ${T.length} ${n}-scope installs, none match CWD '${ue}'; updating '${T[0]?.projectPath}' only`, {
    level: "warn"
  });
  let X = De ?? T[0];
  if (!X) {
    let S = ue ? `${n} (${ue})` : n;
    return {
      outcome: "failed",
      message: `Plugin "${y}" is not installed at scope ${S}`,
      pluginId: b,
      scope: n,
      failureCode: "not_installed_at_scope"
    };
  }
  let N = X.projectPath, j;
  if (typeof u.source === "object" && u.source.source === "command") {
    let S = EP(), J = S || a, H = hv(await d2e(), b) !== void 0, pe = S || a && !H, me = n === "user" ? void 0 : `--scope ${n}`;
    j = J ? void 0 : await (o?.(b, u, X.sourceCommand));
    let He = o !== void 0 && !XYe() && X.sourceCommand === bN(u.source);
    if (J || j === void 0 && !He && !H) return {
      outcome: "failed",
      message: a && !pe ? `${kt(y, 200)} is installed by running a command, which the background marketplace update never runs; it is left to the per-session re-resolve (when that is enabled) or an explicit update \u2014 ${Gg("plugin update", b, {
        extra: me,
        fallback: "a per-plugin update reviews it"
      })}.` : S ? L8 : `${kt(y, 200)} is disabled, so the command that installs it was not run. Enable it first, then ${Gg("plugin update", b, {
        extra: me,
        fallback: "update it explicitly"
      })}.`,
      pluginId: b,
      scope: n,
      failureCode: a && !pe ? "command_source_skipped" : "command_source_inactive"
    };
  }
  let U = se(), K = X.version, {enabled: oe, disabled: C} = i ? await ni(r) : await CS(r), A = _ts(b, [ ...oe, ...C ]), Q = A.filter(S => S.constraint.version !== void 0), qe = A.map(S => S.constraint.version).filter(S => S !== void 0), Pe, Ce = "", R = await qd(r), Ae = R[k ?? ""]?.source, Te = S => p && !y8(u.source) && !x0e(u.source, Ae) ? Vt(S, X, y, r) : Promise.resolve(S);
  if (qe.length > 0) {
    let S = nYt(qe);
    if (!S.ok) return {
      outcome: "skipped",
      message: `Skipped \u2014 ${iRn("Plugin", b, qe, S.reason)}`,
      pluginId: b,
      scope: n,
      blockedBy: Q.map(pe => pe.plugin.source),
      oldVersion: K,
      skipReason: "pinner_blocked"
    };
    let J = R[k ?? ""]?.source, H = XAe(u.source) ?? (typeof u.source === "string" ? yIn(J) : null);
    if (H !== null && S.range !== "*" && !b.endsWith(`@${mn}`)) {
      let pe = await Xcr(H, u.name, S.range);
      if (pe === null) t(`updatePluginOp(${b}): no ${u.name}--v* tag satisfying ${S.range}; falling back to HEAD + post-fetch guard`); else if (pe.version === X.resolvedVersion && pe.sha === X.gitCommitSha) return Te({
        outcome: "up_to_date",
        message: zt(te, `${y} is already at the latest version satisfying ${qe.join(", ")} (${pe.version}, required by ${Q.map(me => me.plugin.name).join(", ")}).`),
        pluginId: b,
        newVersion: X.version,
        oldVersion: K,
        scope: n,
        refreshFailed: ee !== void 0 ? !0 : void 0,
        refreshRefusedByPolicy: M || void 0
      }); else if (Pe = pe, Ce = ` (highest tag satisfying ${qe.join(", ")} from ${Q.map(me => me.plugin.name).join(", ")})`, 
      typeof u.source === "string") {
        let me = Ycr(J, u.source);
        if (me !== null) u = {
          ...u,
          source: me
        };
      }
    }
  }
  let Ye, ln, pn, xe, dn, In = !1, en, G, q;
  {
    let S = u.source, J = typeof S === "object" && S.source === "claudeai", H = X.claudeaiPluginId;
    if (H !== void 0 && (!J || S.pluginId !== H) || H === void 0 && J) return {
      outcome: "failed",
      message: H === void 0 ? `${y} is listed by a claude.ai-hosted marketplace but its install record no longer says which claude.ai plugin it came from \u2014 not updated. Uninstall and install it again to re-pin it.` : `${y} was installed from a claude.ai-hosted marketplace, but "${k}" now lists ${J ? "a different claude.ai plugin" : "another source"} under that name \u2014 not updated. Uninstall and install it again to switch to what the marketplace lists now, or remove it.`,
      pluginId: b,
      scope: n,
      failureCode: "claudeai_identity_changed"
    };
  }
  let re = b.endsWith(`@${mn}`);
  if (re && nst(b, V, de)) return {
    outcome: "failed",
    message: `"${ze(y)}" was not updated: plugin-directory-bindings.json in the plugins folder could not be used (unreadable, a symbolic link or not a file, over 1 MB, damaged, or written by a newer Claude Code), so its ${br} listing could not be checked against the repository it was installed from. Nothing was changed. Try again; if this repeats, check the file for those causes.`,
    pluginId: b,
    scope: n,
    failureCode: "directory_binding_unreadable"
  };
  if (re && wqe(b, V, u.source, de)) return {
    outcome: "failed",
    message: `"${ze(y)}" was not updated: the ${br} now lists a different repository under that name. Uninstall it, then install the new listing if you want it.`,
    pluginId: b,
    scope: n,
    failureCode: "directory_identity_changed"
  };
  if (re && (Aw(u.source, void 0)?.length ?? 0) > P9t) return {
    outcome: "failed",
    message: `"${ze(y)}" was not updated: the repository address in its ${br} listing is too long. Nothing was changed. Only a change to the listing can fix this.`,
    pluginId: b,
    scope: n,
    failureCode: "directory_listing_not_installable"
  };
  let ie = a3t(b, V, de).length > 0, Me = M6t({
    pluginId: b,
    pluginName: y,
    source: u.source,
    boundByRecord: ie,
    action: "updated"
  });
  if (!Me.ok) return {
    outcome: "failed",
    message: Me.message,
    pluginId: b,
    scope: n,
    failureCode: "directory_listing_not_installable"
  };
  if (typeof u.source !== "string") {
    let S = u.source, J = Pe && (S.source === "github" || S.source === "url" || S.source === "git-subdir") ? {
      ...S,
      ref: Pe.ref,
      sha: Pe.sha
    } : S, H = R[k ?? ""]?.source, pe = qb(b), me = HLe(pe, u.name), He = S.source === "archive" ? k$e({
      entry: u,
      archiveUrl: S.url,
      marketplaceSource: H,
      trustedSettingsEntryAuth: me
    }) : void 0, Se = He !== void 0 && S.source === "archive" ? ZJt(He, S.url) : null, Re = Se === null ? null : yxe(H, k), Ue = Re !== null ? {
      outcome: "failed",
      message: eQt(u.name, Re),
      pluginId: b,
      scope: n,
      failureCode: Re === "remote_policy_unconsented" ? "entry_helper_remote_policy_unconsented" : "entry_helper_disabled_by_policy"
    } : null;
    if (c && Ue !== null) return Ue;
    let nn = c && h === void 0 ? uNn(w, Se) : null;
    if (nn !== null) return {
      outcome: "failed",
      message: pNn(nn, u.name, "update"),
      pluginId: b,
      scope: n,
      failureCode: cNn[nn]
    };
    if (!c && Se !== null) {
      let ye = u.version ?? (S.source === "archive" && S.sha256 !== void 0 ? qcr(S.sha256) : void 0);
      if (ye !== void 0 && ye === K) return {
        outcome: "up_to_date",
        message: Hn(te, K),
        pluginId: b,
        newVersion: K,
        oldVersion: K,
        scope: n,
        refreshFailed: ee !== void 0 ? !0 : void 0,
        refreshRefusedByPolicy: M || void 0
      };
      if (Ue !== null) return Ue;
      let Ke = qa("plugin update", b);
      return {
        outcome: "skipped",
        message: `Skipped \u2014 "${ze(u.name)}" fetches its archive through a headersHelper, which only runs when you update it yourself. Update it from /plugin` + (Ke ? ` (or \`${Ke}\`).` : "."),
        pluginId: b,
        scope: n,
        oldVersion: K,
        skipReason: "entry_helper_deferred"
      };
    }
    if (c && Se !== null) {
      if (h !== void 0) {
        let ye = await h(l3n(Se), Se, b);
        if (ye !== "accepted") return {
          outcome: "failed",
          message: "Aborted \u2014 the headersHelper command was not confirmed, so it was not run.",
          pluginId: b,
          scope: n,
          failureCode: ye === "declined" ? "entry_helper_declined" : "entry_helper_unconfirmed"
        };
      }
    }
    if (S.source === "claudeai" && Pe === void 0 && S.version !== "" && S.version === K) return Te({
      outcome: "up_to_date",
      message: Hn(te, K),
      pluginId: b,
      newVersion: K,
      oldVersion: K,
      scope: n,
      refreshFailed: ee !== void 0 ? !0 : void 0,
      refreshRefusedByPolicy: M || void 0
    });
    let tn = c9(b, u.source);
    if (tn !== void 0 && (ae || X.gitCommitSha === tn)) {
      let ye = Aw(u.source, void 0);
      if (!ae && X.gitCommitSha === tn && X.directoryRepositoryKey === void 0 && ye !== void 0) try {
        await Zas(b, n, N, ye, r);
      } catch (Ke) {
        t(`Could not record the repository of ${b}: ${l(Ke)}`, {
          level: "warn"
        });
      }
      return Te({
        outcome: "up_to_date",
        message: Hn(te, K),
        pluginId: b,
        newVersion: K,
        oldVersion: K,
        scope: n,
        refreshFailed: ee !== void 0 ? !0 : void 0,
        refreshRefusedByPolicy: M || void 0,
        ...ae ? {
          notChecked: !0
        } : {
          noCloneShortCircuit: !0
        }
      });
    }
    let Be = await ost(J, {
      manifest: {
        name: u.name
      },
      storageV5: r,
      isDirectoryPlugin: n7(b),
      directoryPin: c9(b, J) ?? null,
      archiveAuth: await xPt({
        pluginSource: J,
        pluginName: u.name,
        marketplaceName: k,
        marketplaceSource: H,
        trustedMarketplaceAuth: MLe(H, pe),
        trustedSettingsEntryAuth: me,
        entry: u,
        runEntryHelper: c
      }),
      entryDeclaresComponents: rCt(u),
      declaredComponentPaths: u3t(u),
      commandSourceConsent: j !== void 0 ? {
        kind: "shown",
        command: j,
        pluginId: b
      } : {
        kind: "recorded",
        command: XYe() ? void 0 : X.sourceCommand,
        pluginId: b
      }
    });
    if (Ye = Be.path, ln = Be.producerPath, pn = Be.contentSha256, In = !0, Pe?.sha !== void 0 || Be.gitCommitSha !== void 0 || ie || b.endsWith(`@${mn}`)) en = Pe?.sha ?? Be.gitCommitSha; else if (XAe(J) !== null) {
      let ye = await TLe(Be.path);
      en = ye.repo ? ye.sha ?? void 0 : null;
    } else en = null;
    dn = Be.manifest?.version;
    let Je = await PQ(b, u.source, Be.manifest, Be.path, {
      kind: "catalog",
      version: u.version
    }, Pe?.sha ?? Be.gitCommitSha, Be.contentSha256);
    xe = Pe && (Be.manifest?.version || u.version) ? nDt(Je, Pe.sha) : Je;
  } else {
    let S = ly(le) !== void 0 ? "system" : "workspace", J = await hz(b, le, u.source, R, cw(), r, S);
    if (J.kind === "location-error") throw J.error;
    if (J.kind !== "ok") {
      let Se = s6e(J, le, u.source);
      return {
        outcome: "failed",
        message: Se.message,
        pluginId: b,
        scope: n,
        failureCode: Se.code
      };
    }
    q = J.marketplaceDir, Ye = J.entryPath;
    let H = R[k ?? ""], pe = H !== void 0 && Ef(H.source);
    try {
      if (pe) await xwr(r, Ye, S); else await U.stat(Ye);
    } catch (Se) {
      if (W(Se)) return {
        outcome: "failed",
        message: `Plugin source not found at ${Us(Ye)}`,
        pluginId: b,
        scope: n,
        failureCode: "source_missing"
      };
      throw Se;
    }
    let me;
    try {
      me = (await $3(Ye, u.name, u.source)).manifest;
    } catch {}
    dn = me?.version;
    let He = await TLe(Ye, q);
    if (!He.repo && k === du) G = await ito(Ye);
    en = He.repo ? He.sha ?? void 0 : G !== void 0 ? sto(G) : null, xe = await PQ(b, u.source, me, Ye, {
      kind: "catalog",
      version: u.version
    }, void 0, void 0, q);
  }
  try {
    let S = M6t({
      pluginId: b,
      pluginName: y,
      source: u.source,
      boundByRecord: ie,
      fetched: {
        gitCommitSha: en ?? void 0
      },
      action: "updated"
    });
    if (!S.ok) return {
      outcome: "failed",
      message: S.message,
      pluginId: b,
      scope: n,
      failureCode: "directory_commit_mismatch"
    };
    if (Pe === void 0 && qe.length > 0) {
      let ye = Nn.valid(dn) ?? Nn.coerce(dn)?.version, Ke = A.filter(({constraint: Oe}) => Oe.version !== void 0 && ye !== void 0 && !Nn.satisfies(ye, Oe.version)).map(({plugin: Oe}) => Oe.source);
      if (Ke.length > 0) return {
        outcome: "skipped",
        message: `Skipped \u2014 ${Ke.join(", ")} requires ${y} at a version range that ${dn ?? xe} does not satisfy`,
        pluginId: b,
        scope: n,
        blockedBy: Ke,
        oldVersion: K,
        skipReason: "pinner_blocked"
      };
    }
    if (xe === "unknown" && K !== void 0 && K !== "unknown" && (G?.kind === "refused" || G?.kind === "too-large")) return {
      outcome: "skipped",
      message: G.kind === "refused" ? `Skipped \u2014 ${y} stays at ${K}. Its new version comes from the official marketplace's .gcs-sha file, and that name is now a link, a folder or another special file, so it was not read.` : `Skipped \u2014 ${y} stays at ${K}. Its new version comes from the official marketplace's .gcs-sha file, which is larger than 1 MB, so it was not read.`,
      pluginId: b,
      scope: n,
      oldVersion: K,
      skipReason: "snapshot_file_refused"
    };
    let J = FW(b, xe), H = xe === "unknown", pe = vqe(b, xe), me = S.reviewedCommit !== void 0 && X.gitCommitSha !== S.reviewedCommit, He = !H && !me && (X.version === xe || X.installPath === J || X.installPath === pe), Se = !1;
    if (He && typeof u.source === "object" && u.source.source === "command") {
      let ye = TR(X.installPath, {
        trustedRoots: NSe(b, R, cw())
      }), Ke = ye.absolute;
      Se = ye.suspect || !await (y8(u.source) ? QJt(Ke) : Ke.endsWith(".zip") ? Gc(Ke) : iCe(Ke, r)) || (y8(u.source) ? await Ni(Ke, ln ?? X.sourceProducerPath) : await QJt(Ke, {
        unclassifiableIsFarm: !0
      }));
    }
    if (He && !Se) {
      if (typeof u.source === "object" && u.source.source === "command" && (X.sourceCommand !== bN(u.source) || ln !== void 0 && X.sourceProducerPath !== ln)) await fpr(b, n, N, X.installPath, xe, X.gitCommitSha, X.resolvedVersion, {
        sourceCommand: bN(u.source),
        sourceProducerPath: ln ?? X.sourceProducerPath
      }, r), yFe();
      let ye = x0e(u.source, Ae);
      return Te({
        outcome: "up_to_date",
        message: Hn(te, xe),
        folderNote: ye ? `${y} is read from its folder, ${Us(Ye)}: nothing to update. Edits there take effect at the next session start or /reload-plugins.` : void 0,
        pluginId: b,
        newVersion: xe,
        oldVersion: K,
        scope: n,
        refreshFailed: ee !== void 0 ? !0 : void 0,
        refreshRefusedByPolicy: M || void 0
      });
    }
    J = await LLe(Ye, b, xe, u, q, {
      forceOverwrite: H || me,
      storageV5: r
    });
    let Re = X.installPath;
    if (await fpr(b, n, N, J, xe, en, Pe?.version, typeof u.source === "object" && u.source.source === "command" ? {
      sourceCommand: bN(u.source),
      sourceProducerPath: ln ?? X.sourceProducerPath
    } : void 0, r, typeof u.source === "object" && u.source.source === "claudeai" ? {
      claudeaiPluginId: u.source.pluginId,
      archiveSha256: pn
    } : void 0, re ? Aw(u.source, void 0) : void 0), ln !== void 0) yFe();
    if (Re && Re !== J) {
      let ye = z() && r !== void 0 ? await Fu(r) : Nm();
      if (!Object.values(ye.plugins).some(Oe => Oe.some(Qe => Qe.installPath === Re))) await oce(Re, r);
    }
    let Ue = N ? `${n} (${N})` : n, nn = c9(b, u.source), tn = nn === void 0 ? void 0 : en ?? nn, Be = SIn(xe), Je = tn ? `Plugin "${y}" updated to the listed commit ${tn.slice(0, 7)}${Be ? ` (version ${Be})` : ""} for scope ${Ue}. Restart to apply changes.` : H && (K ?? "unknown") === "unknown" ? `Plugin "${y}" refreshed from source for scope ${Ue}. Restart to apply changes.` : `Plugin "${y}" updated from ${K || "unknown"} to ${xe}${Ce} for scope ${Ue}. Restart to apply changes.`;
    return {
      outcome: "updated",
      message: ee === void 0 ? Je : te.directoryRefreshFailed ? `${Je} Warning: ${ot()}.` : `${Je} Warning: ${ee}.`,
      pluginId: b,
      newVersion: xe,
      oldVersion: K,
      ...en && {
        gitCommitSha: en
      },
      scope: n,
      refreshFailed: ee !== void 0 ? !0 : void 0,
      refreshRefusedByPolicy: M || void 0,
      pinChanged: typeof X.gitCommitSha === "string" && typeof en === "string" && X.gitCommitSha !== en
    };
  } finally {
    let S = FW(b, xe);
    if (In && Ye !== S && !vn(S).startsWith(vn(Ye) + Gt)) await U.rm(Ye, {
      recursive: !0,
      force: !0
    });
  }
}

function Ut(e) {
  let n = FQ(e), i = n.length > 0 ? n : e;
  return [ "local", "project", "user" ].find(a => i.some(o => o.scope === a)) ?? "managed";
}

async function Oi(e, n, i, a, o, p) {
  if (!a || a.length === 0) return {
    outcome: "failed",
    message: `Plugin "${n}" is not installed`,
    pluginId: e,
    scope: i,
    failureCode: "not_installed"
  };
  let w = qEe(i), h = a.filter(ae => ae.scope === i), r = tR(h, i, w) ?? h[0];
  if (!r) {
    let ae = w ? `${i} (${w})` : i;
    return {
      outcome: "failed",
      message: `Plugin "${n}" is not installed at scope ${ae}`,
      pluginId: e,
      scope: i,
      failureCode: "not_installed_at_scope"
    };
  }
  if (r.scope === "managed") return {
    outcome: "failed",
    message: `Plugin "${n}" is installed by managed settings and is not updated here`,
    pluginId: e,
    scope: i,
    failureCode: "not_installed_at_scope"
  };
  let {scope: c, projectPath: y, version: F, npmVersionSpec: O} = r, P = ae => p ? Vt(ae, r, n, o) : Promise.resolve(ae), k = _pr({
    packageName: n,
    versionSpec: O
  }), b = Fn(Mh(), `${Yat("npm")}${E$e}`), he;
  try {
    await se().mkdir(b), he = (await rto(n, O, {
      workDir: b,
      registry: r.npmRegistry
    })).version;
  } finally {
    await Oa(b).catch(() => {});
  }
  let Z = O !== void 0 ? ` (tracking ${O})` : "";
  if (he === F || r.installPath === FW(e, he)) return P({
    outcome: "up_to_date",
    message: `${n} is already at the latest version${Z} (${he}).`,
    pluginId: e,
    newVersion: he,
    oldVersion: F,
    scope: i
  });
  let V = _pr({
    packageName: n,
    versionSpec: he
  }, r.npmRegistry).source, de = await ost(V, {
    manifest: {
      name: k.name
    },
    storageV5: o,
    isNpmMarketplaceLane: !0,
    directoryPin: c9(e, V) ?? null
  }), Ie = de.npmResolution, ee = Ie?.version ?? he, M = FW(e, ee);
  try {
    M = await LLe(de.path, e, ee, k, void 0, {
      storageV5: o
    }), await fpr(e, c, y, M, ee, null, void 0, void 0, o, void 0, void 0, {
      npmVersionSpec: O,
      npmResolved: Ie?.tarballUrl ?? r.npmResolved,
      npmIntegrity: Ie?.integrity,
      npmRegistry: r.npmRegistry
    });
    let ae = r.installPath;
    if (ae && ae !== M) {
      let te = z() && o !== void 0 ? await Fu(o) : Nm();
      if (!Object.values(te.plugins).some(u => u.some(le => le.installPath === ae))) await oce(ae, o);
    }
  } finally {
    if (de.path !== M && !vn(M).startsWith(vn(de.path) + Gt)) await Oa(de.path).catch(() => {});
  }
  let B = y ? `${i} (${y})` : i;
  return {
    outcome: "updated",
    message: `Plugin "${n}" updated from ${F || "unknown"} to ${ee}${Z} for scope ${B}. Restart to apply changes.`,
    pluginId: e,
    newVersion: ee,
    oldVersion: F,
    scope: i
  };
}

async function vyt(e, n, i) {
  let a = n ?? (await Gk(e, i))?.entry;
  if (!a || typeof a.source !== "object" || a.source.source !== "archive") return null;
  if (Bf(e)) return null;
  let o = await Gl(i), p = qb(e);
  if (p !== void 0 && b1(qy(o, p)?.source)) return null;
  let w = WRe(e, o), h;
  try {
    h = k$e({
      entry: a,
      archiveUrl: a.source.url,
      marketplaceSource: w,
      trustedSettingsEntryAuth: HLe(p, a.name)
    });
  } catch (r) {
    if (r instanceof E7) return null;
    throw r;
  }
  if (iho(w, p)) return null;
  return ZJt(h, a.source.url);
}

function l3n(e) {
  let n = F9e(e);
  return `Fetching this plugin's archive sends helper-minted headers to ${n.destination}; ` + (n.hiddenCharactersWarning ? `WARNING: ${n.hiddenCharactersWarning} ` : "") + `the local command it runs (headersHelper) is: ${n.command}`;
}

function Di(e, n, i) {
  let a = Aoe(n);
  if (!a || !i || i.length === 0 || XYe()) return;
  let o = bN(a);
  return {
    kind: "recorded",
    command: i.find(w => w.sourceCommand === o)?.sourceCommand ?? i.find(w => w.sourceCommand !== void 0)?.sourceCommand,
    pluginId: e
  };
}

async function Ei(e, n, i, a) {
  let o = n[e.marketplace]?.source;
  if (!o || wf(o)) return;
  if (!Pl(e.marketplace)) return;
  let p = (z() && i !== void 0 ? await Fu(i) : Nm()).plugins;
  if (p[`${e.entry.name}@${e.marketplace}`]?.length) return;
  let w = Aw(e.entry.source, d9(o));
  if (w === void 0) return;
  for (let [h, r] of Object.entries(n)) {
    if (!wf(r.source) || !Hc(r.source)) continue;
    if (N6t(e.marketplace, e.entry) && !p[`${e.entry.name}@${h}`]?.length) continue;
    try {
      let c = (await GB(h, i, "install")).plugins.find(y => y.name === e.entry.name);
      if (c && H4e(c.name) && Aw(c.source, void 0) === w) return {
        entry: c,
        marketplace: h,
        marketplaceInstallLocation: r.installLocation
      };
    } catch (c) {
      if (c instanceof Ope) a?.(c);
      t(`Bare-name search for "${e.entry.name}": the ${br} could not be read, keeping ${e.marketplace}'s listing: ${l(c)}`);
    }
  }
  return;
}

async function d3n(e, n, i) {
  let a = await qd(n), o;
  for (let [p, w] of Object.entries(a)) {
    if (!Hc(w.source)) continue;
    try {
      let r = (await GB(p, n, "install")).plugins.find(c => c.name === e);
      if (r) {
        let c = {
          entry: r,
          marketplace: p,
          marketplaceInstallLocation: w.installLocation
        };
        {
          let y = await Ei(c, a, n, i);
          return y ? {
            ...y,
            preferredOver: c
          } : c;
        }
        return c;
      }
    } catch (h) {
      if (h instanceof ld) {
        o ??= h;
        continue;
      }
      if (h instanceof Ope) i?.(h);
      t(`Failed to load marketplace "${p}" while searching for plugin "${e}": ${l(h)}`, {
        level: "error"
      });
    }
  }
  if (o !== void 0) throw o;
  return;
}

async function Ni(e, n) {
  return n === void 0 || await CPt(e, n);
}

function En(e, n, i) {
  return Ti(fe(JT(e))?.enabledPlugins, n, i);
}

function Sn() {
  let e = new Map;
  return n => {
    let i = e.get(n);
    if (i === void 0) i = Tnn(n), e.set(n, i);
    return i;
  };
}

function Ti(e, n, i) {
  if (!e) return;
  let a = rDt(n) ? i(e).byFold.get(fr(n))?.key : hv(Object.keys(e), n);
  return a === void 0 ? void 0 : {
    key: a,
    value: e[a]
  };
}

function Cn(e, n, i) {
  let a;
  for (let h of Li) {
    let r = En(h, e, i);
    if (r !== void 0) {
      a = {
        scope: h,
        ...r
      };
      break;
    }
  }
  let o = Vir(e), p = Uut(e, o.map(({record: h}) => h === void 0 ? void 0 : i(h))), w = p === void 0 ? void 0 : o[p.index]?.source;
  return {
    found: a,
    atRequested: n === void 0 ? void 0 : En(n, e, i),
    override: p !== void 0 && (w === "policySettings" || w === "flagSettings") ? {
      source: w,
      enabling: p.enabled,
      key: p.key
    } : void 0,
    decidingScope: w === "localSettings" || w === "projectSettings" || w === "userSettings" ? sDt[w] : void 0,
    effective: p?.enabled
  };
}

var Li = [ ...kte ].sort((e, n) => gn[n] - gn[e]);

function At(e, n, i, a) {
  let o = vm(a, e) ? "" : ` via its legacy "${Bn(a)}" entry`, p = o ? ` (remove that entry, or add "${e}": true beside it)` : "";
  if (i === "policySettings") return {
    success: !1,
    message: n ? `Plugin "${e}" is blocked by your organization's policy${o} and cannot be enabled here \u2014 ask an admin${p}` : `Plugin "${e}" is turned on by your organization's managed settings and cannot be disabled here`,
    failureCode: n ? "plugin_policy_blocked" : "managed_settings_override"
  };
  return {
    success: !1,
    message: n ? `Plugin "${e}" is turned off by this session's --settings flag${o}, which overrides your settings files. Change it in --settings to enable it${p}.` : `Plugin "${e}" is turned on by this session's --settings flag, which overrides your settings files. Remove it from --settings to disable it.`,
    failureCode: "settings_flag_override"
  };
}

function Bi(e, n) {
  if (!tz(e)) return;
  let i = new Set(jo());
  for (let a of [ "policySettings", "flagSettings" ]) {
    if (!i.has(a)) continue;
    let o = u5(fe(a)?.enabledPlugins, e);
    if (o === void 0) continue;
    return o === !0 === n ? void 0 : a;
  }
  return;
}

function ei(e, n) {
  let i = Object.keys(e ?? {});
  if (!rDt(n)) return i.filter(o => o === n);
  let a = fr(n);
  return i.filter(o => fr(o) === a);
}

function Mn(e, n, i, a, o) {
  return ca(e, p => {
    let w = Object.fromEntries(Object.entries({
      ...a,
      [n]: i
    }).flatMap(([h, r]) => {
      let c = tDt(p?.enabledPlugins, h);
      return [ ...c.replaced.map(y => [ y, void 0 ]), [ c.written, r ] ];
    }));
    return {
      enabledPlugins: {
        ...p?.enabledPlugins,
        ...Object.fromEntries(Object.keys(w).flatMap(h => ei(p?.enabledPlugins, h).filter(r => r !== h).map(r => [ r, void 0 ]))),
        ...w
      }
    };
  }, void 0, o);
}

function ji(e, n) {
  return ti(e, n, void 0).map(({record: i}) => i);
}

function ti(e, n, i) {
  return Ui.map(a => {
    let o = fe(a)?.enabledPlugins;
    if (a !== e) return {
      source: a,
      record: o
    };
    let p = Es(o ?? {}, ei(o, n));
    return {
      source: a,
      record: i === void 0 ? p : {
        ...p,
        [n]: i
      }
    };
  });
}

var Ui = [ ...ws ].reverse();

export { k1o, VWe, byt, kte, eBt, KEe, qEe, tBt, T1o, nBt, Syt, A1o, i3n, w$r, v$r, E$r, k$r, DQe, Jp, T$r, Nae, wyt, LQe, C1o, a3n, NQe, vyt, l3n, d3n };
