// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { c } from "./chunk-hwdwjvh8.js";

import { x, j, l, E, W } from "./chunk-b0z4bv3v.js";

import { I$, zw } from "./chunk-ddr690nj.js";

import { _, Y, se, pL, VU, ST, If, Qln, t } from "./chunk-kawq2919.js";

import { kt, Xl } from "./chunk-r2h53bm2.js";

import { he } from "./chunk-3pqddg8f.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { iq } from "./chunk-wptm3jf5.js";

import { li } from "./chunk-zvghq5er.js";

import { Tn } from "./chunk-30n0xq4e.js";

import { Zs } from "./chunk-rgd61mm3.js";

import { p } from "./chunk-jkzenvsk.js";

import { mn, ec } from "./chunk-8drhysk2.js";

import { xl, oUn, L_ } from "./chunk-67jt18z1.js";

import { tE, PHn, N9t, fO } from "./chunk-81rtbneg.js";

import { IS } from "./chunk-hyv5czza.js";

import { o, u, ue, A } from "./chunk-cvcg6n1z.js";

var L = "https, http, ssh (also written git+ssh or ssh+git), user@host:path, or a local file:// address with no host. git:// isn't supported because it isn't encrypted.", Z = /^(?!-)[A-Za-z0-9._-]+@(?:(?!-)[A-Za-z0-9._-]+|\[[0-9A-Fa-f:.]+\]):(?!\/\/)/, X = /^(?:(?!-)[A-Za-z0-9._-]+|\[[0-9A-Fa-f:.]+\])$/, J = /^(?!-)[A-Za-z0-9._-]+$/;

function k(e) {
  if (e === ST) return e;
  return Xl(kt(e, 200)) || "\u201c\u201d";
}

function cgr(e) {
  if (/[\u0000-\u001f\u007f]/.test(e)) throw new x(`Invalid git URL: ${k(If(e))} \u2014 control characters are not allowed`, "git URL contains control characters");
  if (e.includes("%00")) throw new x(`Invalid git URL: ${k(If(e))} \u2014 "%00" in a git address means different things to different versions of git, so it is not allowed. Remove it.`, "git URL contains %00");
  if (VU(e)) throw new x(`Invalid git URL: ${k(If(e))} \u2014 git can read a square bracket (also written %5B or %5D) as marking a server name or where a local path starts, so it could connect to a different server or open a different folder than this address names. In a server address, brackets may only surround an IPv6 address, as in git@[2001:db8::1]:repo.git. Remove them, or rename the folder whose name has them.`, "git URL has a square bracket that git could read as the host");
  if (Z.test(e)) {
    if (!e.includes("://")) return e;
    throw new x(`Invalid git URL: an address written as user@host:path can't contain "://", because git then reads the text before "://" as a protocol name, as in https://. Remove the "://".`, "scp-like git URL contains ://");
  }
  let r;
  try {
    r = new URL(e);
  } catch {
    throw new x(`Invalid git URL: ${k(If(e))} (it could not be read as a URL). Supported: ${L}`, "Invalid git URL");
  }
  if (![ "https:", "http:", "ssh:", "file:", "git+ssh:", "ssh+git:" ].includes(r.protocol)) {
    let n = If(e), a = e.slice(0, e.indexOf(":") + 1).toLowerCase();
    throw new x(n === e ? `Invalid git URL protocol: ${Xl(kt(r.protocol, 40))}. Supported: ${L}` : a !== "" && n.toLowerCase().startsWith(a) ? `Invalid git URL: ${k(n)}. Supported: ${L}` : `Invalid git URL. Supported: ${L}`, "Invalid git URL protocol");
  }
  if ((r.protocol === "https:" || r.protocol === "http:") && iq(e)) throw new x(`Invalid git URL: ${k(If(e))} \u2014 a backslash before the first "/" can make git connect to a different server than this address names. Remove it, or write it as %5C if it is part of a user name.`, "git URL has a backslash in its authority");
  if ([ "ssh:", "git+ssh:", "ssh+git:" ].includes(r.protocol)) {
    let n = /^[a-z][a-z0-9+.-]*:\/\/([^/]*)/i.exec(e)?.[1] ?? "", a = n.lastIndexOf("@"), s = a === -1 ? void 0 : n.slice(0, a), d = a === -1 ? n : n.slice(a + 1), h = /^(.*?)(?::([0-9]{1,5}))?$/.exec(d)?.[1] ?? d;
    if (/[?#]/.test(e) || !X.test(h) || s !== void 0 && !J.test(s)) {
      let b = /^[\u0000-\u0020]*[a-z][a-z0-9+.-]*:(?:\/\/)?([^/?#]*)/i.exec(e), w = b?.[1] ?? "", v = (b?.[0].length ?? 0) - w.length, S = w.slice(0, Math.max(0, w.lastIndexOf("@"))), O = S.search(Qln), G = O !== -1 ? e.slice(0, v) + `${S.slice(0, O)}:***` + e.slice(v + S.length) : e, C = b?.[0].includes("//") === !0, K = C && w !== "" && !/:(?!\d+$)|%3a/i.test(w), H = e.includes("@") && !w.includes("@") && !K || w.includes("@") && e.includes("@", v + w.length), q = /%40/i.test(e) || If(e) === ST ? ST : H || !C ? If(e) : G.replace(/[?#][\s\S]*$/, V => `${V[0]}***`);
      throw new x(`Invalid ssh git URL: the host must be a hostname or bracketed IPv6 literal (optionally :port), the user a plain name, and the URL may not carry ? or # (${k(q)})`, "ssh git URL host or user has disallowed characters");
    }
  }
  if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(e)) throw new x(`Invalid git URL: ${k(If(e))} \u2014 a scheme URL must be spelled scheme://\u2026`, "git URL scheme without //");
  if (r.protocol === "file:" && (I$(Q(e)) || r.host !== "" || /^file:\/\/[^/\\]/i.test(e) || /^file:[\\/]*[\\]/i.test(e) || zw(ee(r)))) throw new x(`Refusing git URL ${k(If(e))}: a file: URL must name a local path (no host, no network-shaped path).${/^file:\/\/[a-z]:/i.test(e) ? " A drive letter such as C: counts as a local path only on Windows." : ""}`, "file git URL names a host or network path");
  return e;
}

function Q(e) {
  try {
    return decodeURIComponent(e.replace(/^file:\/\//i, ""));
  } catch {
    return "/../malformed-percent-encoding";
  }
}

function ee(e) {
  try {
    return decodeURIComponent(e.pathname);
  } catch {
    return "//malformed-percent-encoding/";
  }
}

function R4e(e) {
  try {
    return cgr(e), null;
  } catch (r) {
    return j(r);
  }
}

function yit(e) {
  return R4e(e) === null;
}

function n7(e) {
  return PHn(ec(e).marketplace);
}

function R9t({pluginId: e, surface: r, replaced: n}) {
  return {
    ...r !== void 0 && {
      surface: c(r)
    },
    replaced: n,
    is_directory: n7(e)
  };
}

function Wus(e) {
  switch (i("tengu_plugin_directory_catalog_load", {
    outcome: c(e.outcome),
    trigger: c(e.trigger),
    pages: e.pages,
    listing_count: e.listingCount,
    installable_count: e.tally.installable,
    skipped_unparseable: e.tally.unparseable,
    skipped_other_surface: e.tally.skipped.other_surface,
    skipped_no_pin: e.tally.skipped.no_pin,
    skipped_bad_url: e.tally.skipped.bad_url,
    skipped_bad_path: e.tally.skipped.bad_path,
    name_clashes: e.tally.nameClashes,
    ...e.namesRepaired !== void 0 && {
      names_repaired: e.namesRepaired
    },
    duration_ms: e.durationMs,
    ...e.cacheAgeMin !== void 0 && {
      cache_age_min: e.cacheAgeMin
    },
    ...e.outcome === "stale_failed" && {
      incomplete_walk: e.incompleteWalk
    },
    ...e.outcome === "refused" && {
      refusal: c(e.refusal)
    }
  }), e.outcome) {
   case "fresh_cache":
   case "walked":
    g("plugin_directory_catalog");
    return;

   case "walked_names_only":
   case "walked_not_written":
   case "stale_failed":
   case "stale_empty":
   case "stale_duplicate_id":
   case "backoff":
    f("plugin_directory_catalog", e.outcome);
    return;

   case "incomplete":
   case "duplicate_id":
   case "backoff_cold":
    m("plugin_directory_catalog", e.outcome);
    return;

   case "refused":
    switch (e.refusal) {
     case "not-served":
     case "failed":
      m("plugin_directory_catalog", e.refusal);
      return;

     case "policy":
      if (!e.blockedByOrganization) f("plugin_directory_catalog", "policy_not_loaded");
      return;
    }
  }
}

function zus({directoryRows: e, totalRows: r, foldedRows: n, loadMs: a, entry: s, directoryState: d, knownMarketplaceCount: y}) {
  i("tengu_plugin_discover_shown", {
    directory_rows: e,
    total_rows: r,
    folded_rows: n,
    load_ms: a,
    entry: c(s),
    directory_state: c(d),
    known_marketplace_count: y
  });
}

function x4e({fromPluginId: e, toPluginId: r, surface: n, managedNames: a, result: s}) {
  {
    let d = {
      surface: c(n),
      from_is_directory: n7(e),
      to_is_directory: n7(r)
    };
    if (s.outcome === "bad") {
      m("plugin_directory_switch", s.code, d);
      return;
    }
    if (s.isPrimary) if (s.outcome === "sad") f("plugin_directory_switch", s.code, d); else g("plugin_directory_switch", d);
    let y = ec(e), h = N9t(y.name, y.marketplace, a);
    i("tengu_plugin_marketplace_switched", {
      ...d,
      scope_changed: s.scopeChanged,
      stayed_disabled: s.stayedDisabled,
      data_dir_carried: s.dataDirCarried,
      pin_changed: s.pinChanged,
      replaced_count: s.replacedCount,
      is_primary: s.isPrimary,
      from_plugin_id_hash: h.plugin_id_hash,
      from_plugin_scope: h.plugin_scope,
      from_plugin_name_redacted: h.plugin_name_redacted,
      from_marketplace_name_redacted: h.marketplace_name_redacted,
      ...fO(r, a)
    });
  }
}

function VCe({enabled: e, surface: r, failure: n}) {
  {
    let a = {
      enabled: e,
      surface: c(r)
    };
    if (n !== void 0) {
      m("plugin_directory_toggle", n, a);
      return;
    }
    g("plugin_directory_toggle", a), i("tengu_plugin_directory_toggled", a);
  }
}

function P4e(e) {
  {
    let r = tE();
    if (r.blockedLogged.has(e)) return;
    r.blockedLogged.add(e), i("tengu_plugin_directory_blocked", {
      by: c(e)
    });
  }
}

function x9t({reason: e, sourceKind: r, surface: n}) {
  i("tengu_marketplace_add_failed", {
    reason: c(e),
    source_kind: c(r === "github" || r === "git" || r === "url" ? r : r === "file" || r === "directory" ? "local" : "other"),
    surface: c(n)
  });
}

import { join as F } from "path";

import { constants as te } from "fs";

import { lstat as ie, open as re } from "fs/promises";

async function I4e(e, r, n) {
  if (he()) return {
    state: "absent"
  };
  let a = n === "plugin catalog cache" ? "Plugin catalog cache" : `Plugin directory ${n}`;
  try {
    if (li === 0 && (await ie(e)).isSymbolicLink()) return t(`${a} is a symbolic link; ignoring it`, {
      level: "warn"
    }), {
      state: "unusable",
      readFailed: !1
    };
    await using s = await re(e, te.O_RDONLY | li | Zs);
    if (!(await s.stat()).isFile()) return t(`${a} is not a file; ignoring it`, {
      level: "warn"
    }), {
      state: "unusable",
      readFailed: !1
    };
    let d = await pL(s, r + 1, "file");
    if (d.length > r) return t(`${a} is too large; ignoring it`, {
      level: "warn"
    }), {
      state: "unusable",
      readFailed: !1
    };
    return {
      state: "read",
      json: Y(d.toString("utf-8"))
    };
  } catch (s) {
    if (W(s)) return {
      state: "absent"
    };
    let d = E(s);
    if (d === "ELOOP" || d === "EMLINK") return t(`${a} is a symbolic link; ignoring it`, {
      level: "warn"
    }), {
      state: "unusable",
      readFailed: !1
    };
    return t(`${a} could not be read: ${l(s)}`), {
      state: "unusable",
      readFailed: !(s instanceof SyntaxError)
    };
  }
}

var T = "plugin-directory-bindings.json", N = 1, M = 1048576, P9t = 4096, oe = p(() => u({
  schemaVersion: A(N),
  bindings: ue(o(), u({
    repositoryKey: o().min(1).max(P9t)
  }).optional().catch(void 0))
}));

function x_(e) {
  let r = e.split("@");
  return r.length === 2 && r[1] === mn;
}

function DT(e, r) {
  if (!x_(r)) return [];
  let n = [ ...e ].filter(a => x_(a) && oUn(a, r));
  return [ ...n.filter(a => a === r), ...n.filter(a => a !== r) ];
}

var U = new WeakSet;

function Oce(e) {
  return U.has(e);
}

async function Jre() {
  let e = await z();
  if (e.readFailed) U.add(e.bindings);
  return e.bindings;
}

async function RHn(e, r, n) {
  if (!x_(e)) return;
  if (r !== void 0 && !B()) return;
  await I(a => {
    if (r === void 0) for (let s of DT(a.keys(), e)) a.delete(s); else if (!(n?.keepExisting === !0 && DT(a.keys(), e).length > 0)) a.set(e, r);
  });
}

async function I9t(e, r) {
  if (!x_(e)) return "none";
  if (!r) {
    let n = await I(() => {});
    if (Oce(n)) return "unreadable";
    return DT(n.keys(), e).length > 0 ? "held" : "none";
  }
  return await RHn(e, void 0), "none";
}

async function O4e(e, r) {
  return M4e([ [ e, r ?? [] ] ]);
}

async function M4e(e) {
  {
    let r = !1, n = new Map;
    for (let [a, s] of e) {
      if (!x_(a)) continue;
      r = !0;
      let d = s.find(y => y.directoryRepositoryKey !== void 0)?.directoryRepositoryKey;
      if (d !== void 0) n.set(a, d);
    }
    if (!r) return new Map;
    if (n.size === 0 || !B()) return Jre();
    return I(a => {
      for (let [s, d] of n) if (DT(a.keys(), s).length === 0) a.set(s, d);
    });
  }
  return new Map;
}

function NRt(e) {
  return Boolean(e.directoryRepositoryKey);
}

async function _it(e, r) {
  {
    if (!x_(e)) return "not-directory";
    let n = (r ?? []).find(y => y.directoryRepositoryKey)?.directoryRepositoryKey, a = y => y.has(e) || DT(y.keys(), e).some(h => y.get(h) === n);
    await I(y => {
      if (n !== void 0 && !a(y)) y.set(e, n);
    });
    let s = await I(() => {}), d = !Oce(s);
    if (d && (n === void 0 ? DT(s.keys(), e).length > 0 : a(s))) return "held";
    if (n === void 0) return "no-key";
    return d && e.length > 1024 ? "cannot-hold" : "not-persisted";
  }
  return "not-directory";
}

async function ugr(e, r, n) {
  if (!x_(e)) return !0;
  if (!n.some(NRt)) return await _it(e, r) !== "not-persisted";
  return await O4e(e, r), !0;
}

function B() {
  return IS() && L_() === null;
}

async function z() {
  let e = new Map;
  {
    let r = await I4e(F(xl(), T), M, "bindings file"), n = r.state === "read" ? oe().safeParse(r.json) : void 0;
    if (n?.success) {
      for (let [a, s] of Object.entries(n.data.bindings)) if (s !== void 0 && a.length <= 1024) e.set(a, s.repositoryKey);
    }
    return {
      bindings: e,
      readFailed: r.state === "unusable" || r.state === "read" && n?.success !== !0
    };
  }
  return {
    bindings: e,
    readFailed: !1
  };
}

async function I(e) {
  let r = new Map;
  {
    let n = tE(), a = n.bindingsWriteTail, {promise: s, resolve: d} = Promise.withResolvers();
    n.bindingsWriteTail = s, await a;
    try {
      let y = await z();
      if (y.readFailed) U.add(r);
      for (let [R, b] of y.bindings) r.set(R, b);
      e(r);
      for (let [R, b] of [ ...r ]) if (R.length > 1024 || b === "") r.delete(R);
      let h = r.size !== y.bindings.size || [ ...r ].some(([R, b]) => y.bindings.get(R) !== b);
      if (h && y.readFailed) t("Plugin directory bindings file could not be used; leaving it as it is", {
        level: "warn"
      }); else if (h && he()) t("Plugin directory bindings file not written: this session saves nothing to disk"); else if (h) {
        let R = _({
          schemaVersion: N,
          bindings: Object.fromEntries([ ...r ].map(([b, w]) => [ b, {
            repositoryKey: w
          } ]))
        });
        if (Buffer.byteLength(R) > M) t("Plugin directory bindings file would grow past 1 MB, the most that is read back; leaving it as it is", {
          level: "warn"
        }); else await se().mkdir(xl()), await Tn(F(xl(), T), R, 384);
      }
    } catch (y) {
      t(`Failed to update plugin directory bindings file: ${l(y)}`, {
        level: "warn"
      });
    } finally {
      d();
    }
  }
  return r;
}

export { cgr, R4e, yit, n7, R9t, Wus, zus, x4e, VCe, P4e, x9t, I4e, P9t, x_, DT, Oce, Jre, RHn, I9t, O4e, M4e, NRt, _it, ugr };
