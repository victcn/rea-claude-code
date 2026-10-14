// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { zn, ke, qdn, he } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { x, l, E, W, jt, Gj } from "./chunk-b0z4bv3v.js";

import { jC, cl, I$, Sx, el, gFt, qc, Ecn, kT, cte, GX, xht, NYn, $Yn, FYn, zw, hFt, Ib, Hm, bL } from "./chunk-ddr690nj.js";

import { Rf, se, mae, t } from "./chunk-kawq2919.js";

import { Ee } from "./chunk-z52kmxx4.js";

import { Ma, I } from "./chunk-5wbhf1bk.js";

import { a } from "./chunk-j016gcgm.js";

import { mI } from "./chunk-30n0xq4e.js";

import { Gc, Cj } from "./chunk-r276nwd3.js";

import { p } from "./chunk-jkzenvsk.js";

import { aM, Fe } from "./chunk-0cdqg49t.js";

import { Min, hPo, yh, jve, Nin, $Ir, FIr, vPo, RKn, xKn, EPo, $in, UIr, M9e, Ef, Wfe, jie, Xh, lNt } from "./chunk-q6wab2jw.js";

import { kt, Us } from "./chunk-r2h53bm2.js";

import { rr, aq } from "./chunk-wptm3jf5.js";

import { AC } from "./chunk-46phtgr7.js";

import { MWn, kn, fr } from "./chunk-8drhysk2.js";

import { wFe, mho, ROt, Kwr } from "./chunk-t70vnbgq.js";

import { lme, K5 } from "./chunk-rgd61mm3.js";

import { fe, Hve, Ek } from "./chunk-dd98x6x7.js";

import { $a, Pg, Up } from "./chunk-xywp7esx.js";

import { u5 } from "./chunk-whs0esmw.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import { Lan } from "./chunk-02g14ha5.js";

import { en } from "./chunk-0qwx38yy.js";

import { O } from "./chunk-1xnsr4dy.js";

import { yt } from "./chunk-9zhz923g.js";

import { readdir as ue, rm as He, stat as ze } from "fs/promises";

import { delimiter as Ge, join as R } from "path";

import { isAbsolute as ve } from "path";

var _dt = ".claude-plugin-link", Pwr = p(() => u({
  target: o().min(1).max(4096).refine(e => ve(e), {
    message: "must be an absolute path"
  }).refine(e => !bL(e) && !el(e), {
    message: "must be a local path"
  }).refine(e => !I$(e), {
    message: "must be canonical"
  })
})), uZt = `\n[mode: link]`;

import { isAbsolute as ae, join as S, relative as le, sep as A } from "path";

import { isAbsolute as Te, join as re, relative as ne, sep as oe } from "path";

function T() {
  return re(Ee(), "skills");
}

function $e(e) {
  let r = ne(T(), e);
  return r !== "" && r !== ".." && !r.startsWith(`..${oe}`) && !Te(r);
}

function ie(e) {
  if (!$e(e)) return null;
  let r = ne(T(), e).split(oe);
  return aM(r) && re(T(), ...r) === e ? r : null;
}

function Iwr(e) {
  let r = ie(e);
  return r === null ? null : Fe.userConfigDir("skills", r);
}

function nvs(e) {
  let r = ie(e);
  return r === null ? null : {
    namespace: "userConfigDir",
    dir: "skills",
    relPath: r
  };
}

var _1 = ".orphaned_at", lm = ".in_use", bdt = ".gcs-sha", HF = ".links_materialized";

function K() {
  return S(Ee(), "plugins", "cache");
}

function B(e, r) {
  let n = K();
  if (r !== n) return null;
  let i = le(n, e);
  if (i === "" || i === ".." || i.startsWith(`..${A}`) || ae(i)) return null;
  let s = i.split(A);
  return S(n, ...s) === e ? s : null;
}

function H(e) {
  return e.endsWith(".zip");
}

function DY(e, r) {
  let n = B(e, r);
  if (n === null || n.length !== 3 || !aM(n) || H(n[2])) return null;
  let [i, s, d] = n;
  return {
    marketplace: i,
    plugin: s,
    version: d
  };
}

function rvs(e) {
  return e.namespace === "pluginCache" && e.marketplace !== void 0 && e.plugin !== void 0 && e.version !== void 0 && e.relPath === void 0;
}

function gOt(e, r) {
  let n = DY(e, r);
  return n === null ? null : {
    namespace: "pluginCache",
    ...n
  };
}

function ovs(e, r) {
  let n = [ e.marketplace, e.plugin, e.version ];
  if (r !== K() || !aM(n) || H(e.version)) return null;
  return S(r, ...n);
}

function Ke(e, r) {
  let n = B(e, r);
  if (n === null || n.length < 4 || !aM(n) || H(n[2])) return null;
  let [i, s, d, ...c] = n;
  return Fe.pluginCache(i, s, d, c);
}

function pZt(e, r) {
  return Ke(e, r) ?? Iwr(e);
}

function LSe(e, r) {
  return G(r) ? Fe.pluginRegistry(e) : null;
}

function Owr(e, r, n) {
  return G(n) && aM([ e ]) ? Fe.marketplaceCache(e, r) : null;
}

function G(e) {
  return e === S(Ee(), "plugins");
}

function Be(e, r) {
  if (!G(r)) return null;
  let n = S(r, "marketplaces"), i = le(n, e);
  if (i === "" || i === ".." || i.startsWith(`..${A}`) || ae(i)) return null;
  let s = i.split(A);
  return S(n, ...s) === e ? s : null;
}

function fZt(e, r) {
  let n = Be(e, r);
  if (n === null || n.length < 2 || !aM(n)) return null;
  return Fe.marketplaceTree(n[0], n.slice(1));
}

function svs(e) {
  return e === S(Ee(), "plugins", "asset-cache") ? {
    namespace: "pluginAssetCache"
  } : null;
}

function tUn(e, r) {
  if (e === r) return r === K() ? {
    namespace: "pluginCache"
  } : null;
  let n = B(e, r);
  if (n === null || n.length > 2 || !aM(n)) return null;
  let [i, s] = n;
  return s === void 0 ? {
    namespace: "pluginCache",
    marketplace: i
  } : {
    namespace: "pluginCache",
    marketplace: i,
    plugin: s
  };
}

var hOt = new Set([ _dt, lm, _1 ]);

function k0(e) {
  return Sx(e).replace(/[. ]+$/, "");
}

function mZt(e, r) {
  let n = k0(e);
  if (r.has(n)) return !0;
  for (let i of r) if (mI(n, i)) return !0;
  return !1;
}

function Sdt(e) {
  return k0(e) === "node_modules";
}

var ce = "plugins", j = "cowork_plugins";

function V() {
  if (qdn()) return j;
  if (a.CLAUDE_CODE_USE_COWORK_PLUGINS) return j;
  return ce;
}

function nUn() {
  return V() === ce && !a.CLAUDE_CODE_PLUGIN_CACHE_DIR;
}

function Mwr() {
  return V() === j;
}

function xl() {
  let e = a.CLAUDE_CODE_PLUGIN_CACHE_DIR;
  if (e) return qc(e);
  return R(Ee(), V());
}

function hH() {
  let e = a.CLAUDE_CODE_PLUGIN_SEED_DIR;
  if (!e) return [];
  return e.split(Ge).filter(Boolean).map(qc);
}

function yOt(e) {
  return e.replace(/[^a-zA-Z0-9\-_]/g, "-");
}

function sse(e) {
  return yOt(e).toLowerCase();
}

function wdt(e) {
  let r = k0(e.normalize("NFKC"));
  return r.startsWith(jie) || yOt(r).toLowerCase().startsWith(jie);
}

function rUn(e) {
  return yOt(k0(e.normalize("NFKC"))).toLowerCase();
}

function rho(e) {
  return e.replace(/[^a-z0-9-]/gu, r => {
    let n = r.codePointAt(0) ?? 0;
    return n <= 255 ? `_${n.toString(16).padStart(2, "0")}` : `__${n.toString(16)}_`;
  });
}

function N(e) {
  if (Wfe(e)) {
    let r = e.slice(0, e.lastIndexOf("@"));
    return `${rho(r)}-${yh}`;
  }
  return yOt(e);
}

function oUn(e, r) {
  return N(e).toLowerCase() === N(r).toLowerCase();
}

function ivs(e, r) {
  return `installed_plugins.set-aside.${e.toISOString().slice(0, 10)}.${r}.json`;
}

function sUn(e) {
  return /^installed_plugins\.set-aside\.\d{4}-\d{2}-\d{2}\.[0-9a-f]{12}\.json$/.test(e);
}

function avs(e, r) {
  return `installed_plugins.unreadable.${e.toISOString().slice(0, 10)}.${r}.kept`;
}

function iUn(e) {
  return /^installed_plugins\.unreadable\.\d{4}-\d{2}-\d{2}\.[0-9a-f]{12}\.kept$/.test(e);
}

function ah(e) {
  return R(xl(), "data", N(e));
}

function _Fe(e) {
  let r = ah(e);
  if (he()) return r;
  return se().mkdirSync(r), r;
}

async function aUn(e, {throwIfUnreadable: r = !1} = {}) {
  let n = ah(e), i = 0, s = async d => {
    for (let c of await ue(d, {
      withFileTypes: !0
    })) {
      let f = R(d, c.name);
      if (c.isDirectory()) await s(f); else try {
        i += (await ze(f)).size;
      } catch {}
    }
  };
  try {
    await s(n);
  } catch (d) {
    if (r) {
      if (await Cj(n) === "gone") return null;
      throw d;
    }
    if (jt(d)) return null;
    throw d;
  }
  if (i === 0) return null;
  return {
    bytes: i,
    human: en(i)
  };
}

async function gZt(e) {
  let r = ah(e);
  try {
    return await He(r, {
      recursive: !0
    }), "removed";
  } catch (n) {
    if (W(n)) return "absent";
    return t(`Failed to delete plugin data dir ${r}: ${l(n)}`, {
      level: "warn"
    }), "failed";
  }
}

async function lvs(e) {
  let r = R(xl(), "data"), n = N(e).toLowerCase();
  try {
    return (await ue(r)).filter(i => i.toLowerCase() === n).map(i => R(r, i));
  } catch (i) {
    return W(i) || E(i) === "ENOTDIR" ? [] : void 0;
  }
}

async function lUn(e) {
  return await Cj(ah(e)) === "gone";
}

import { lstat as ot, realpath as L, stat as P } from "fs/promises";

import { basename as it, dirname as C, isAbsolute as ye, join as Se, resolve as M } from "path";

import { isAbsolute as We, relative as je, sep as Ve } from "path";

function yy(e, r, n) {
  let i = je(e, r);
  if (i === "") return n;
  return i !== ".." && !i.startsWith(`..${Ve}`) && !We(i);
}

import { stat as Ye } from "fs/promises";

import { isAbsolute as Ze, resolve as pe, sep as Je } from "path";

function qe(e) {
  if (Ze(e)) return Rf.workspace(e);
  return Rf.workspace(O() === "windows" ? pe(e) : se().cwd() + Je + e);
}

function de(e) {
  return Object.assign(new x(`ENOENT: no such file or directory, stat '${e}'`, "ENOENT: no such file or directory"), {
    code: "ENOENT",
    syscall: "stat",
    path: e
  });
}

function cZt(e) {
  return Object.assign(new x(`ENOENT: no such file or directory, open '${e}'`, "ENOENT: no such file or directory"), {
    code: "ENOENT",
    syscall: "open",
    path: e
  });
}

function ge(e) {
  return e.code === "Failed" && (Gj(e.telemetryCode) !== void 0 || /^ERR_/.test(e.telemetryCode ?? "")) && e.cause instanceof Error ? e.cause : void 0;
}

function Y(e, r) {
  return e === "workspace" ? qe(r) : Rf.system(pe(r));
}

async function xwr(e, r, n = "workspace") {
  if (!z() || e === void 0) return Ye(r);
  if (r === "") throw de(r);
  let i = await e.hostFiles.stat(Y(n, r), {
    follow: !0
  });
  if (!i.ok) throw ge(i.error) ?? Object.assign(new x(`Failed to probe the local marketplace path ${r}: ${yt(i.error)}`, "failed to probe a local marketplace path (v5 backend error)"), {
    cause: i.error
  });
  if (i.value.kind === "absent") throw de(r);
  let s = i.value.kind === "directory";
  return {
    isDirectory: () => s
  };
}

async function mOt(e, r, n) {
  if (n === "") return {
    absent: "ENOENT"
  };
  let i = await e.hostFiles.readText(Y(r, n));
  if (!i.ok) throw ge(i.error) ?? Object.assign(new x(`Failed to read the marketplace file ${n}: ${yt(i.error)}`, "failed to read a local marketplace file (v5 backend error)"), {
    cause: i.error
  });
  return i.value.found ? {
    text: i.value.value
  } : {
    absent: "ENOENT"
  };
}

async function nho(e, r, n = "workspace") {
  if (!z() || e === void 0) return Gc(r);
  if (r === "") return !1;
  let i = await e.hostFiles.stat(Y(n, r), {
    follow: !0
  });
  return i.ok && i.value.kind !== "absent";
}

import { normalize as Xe, parse as Qe, resolve as Z, sep as et } from "path";

var o6e = `is on a network drive, has "." or ".." in its path, or couldn't be checked`;

function TR(e, {trustedRoots: r = []} = {}) {
  let n = tt(e, r), {absolute: i, root: s, tail: d} = n;
  if (n.dotSegmentInTail) return {
    absolute: i,
    suspect: !0
  };
  if (s !== void 0) {
    let f = Z(ke(), s);
    return {
      absolute: i,
      suspect: hFt(f, d)
    };
  }
  let c = n.networkShapedUnvouched || GX(i);
  return {
    absolute: i,
    suspect: c
  };
}

function tt(e, r) {
  if (e.trim() === "") return {
    absolute: e,
    root: void 0,
    tail: e,
    dotSegmentInTail: !1,
    networkShapedUnvouched: !0
  };
  let n = Z(ke(), e), {root: i, tail: s} = nt(e, r);
  return {
    absolute: n,
    root: i,
    tail: s,
    dotSegmentInTail: I$(s),
    networkShapedUnvouched: i === void 0 && (zw(e) || zw(n))
  };
}

function rt(e) {
  return [ xl(), ...hH(), ...e ];
}

function nt(e, r) {
  let n = xht(e), i;
  for (let s of rt(r)) for (let d of [ s, Xe(s) ]) {
    let c = xht(d.replace(/[\\/]+$/, ""));
    if (c === "" || c === ".") continue;
    let f;
    if (n === c) f = ""; else if (n.startsWith(c + et) || n.startsWith(c + "/")) f = e.slice(e.length - (n.length - c.length));
    if (f !== void 0 && (i === void 0 || f.length < i.tail.length)) i = {
      root: s,
      tail: f
    };
  }
  return i ?? {
    root: void 0,
    tail: e
  };
}

function JV(e) {
  switch (O()) {
   case "windows":
    return Sx(xht(e));

   case "macos":
    return Sx(e);

   default:
    return e;
  }
}

function _Ot(e) {
  if (e.trim() === "") return;
  return JV(Ib(Z(ke(), e), {
    foldCase: !0
  }));
}

function oho(e) {
  if (O() !== "windows") return;
  let r = Qe(e).root, n = s => gFt(kT(s)), i = n(r);
  if (i === void 0) {
    let s = cte(r);
    if (s === null) return "undeterminable";
    i = n(s);
  }
  return i === void 0 ? void 0 : {
    walkRoot: r,
    ...i
  };
}

function Hwr(e) {
  let r = oho(e);
  if (r === void 0 || r === "undeterminable") return r;
  return {
    walkRoot: r.walkRoot,
    distroDir: r.rest.replace(/[\\/]+$/, "").replace(/[\\/]+/g, "/")
  };
}

function Dwr(e, r) {
  return FYn(e, {
    exactDots: !0
  }) ?? $Yn(e, {
    exactDots: !0
  }) ?? (r === void 0 ? void 0 : NYn(e, r.walkRoot, r.distroDir));
}

function dUn(e) {
  if (!ye(e)) return !1;
  return O() !== "windows" || /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(e);
}

function cUn(e, r) {
  if (!Ef(e)) return e;
  let n = r === void 0 ? qc(e.path) : Ecn(e.path, r), i = dUn(n) ? M(n) : n;
  return i === e.path ? e : {
    ...e,
    path: i
  };
}

function J(e, r) {
  let n = Lwr(e);
  if (n === void 0 || e === void 0 || !Ef(e)) return [];
  if (!(r !== void 0 && r.source === e.source && "path" in r && r.path === e.path) || !dUn(n) || cl(n)) return [];
  return [ n ];
}

function Lwr(e) {
  switch (e?.source) {
   case "directory":
    return e.path;

   case "file":
    return it(C(e.path)) === ".claude-plugin" ? C(C(e.path)) : void 0;

   default:
    return;
  }
}

async function dvs(e, {entrySource: r, marketplaceLocation: n, pluginPath: i}) {
  let s = Lwr(e);
  if (s === void 0 || typeof r !== "string" || !dUn(s) || M(n) !== M(s) || !yy(M(s), M(i), !0) || [ s, i ].some(f => jC(f) || cl(f))) return !1;
  let [d, c] = await Promise.all([ L(s).catch(() => {}), L(i).catch(() => {}) ]);
  return d !== void 0 && c !== void 0 && yy(d, c, !0);
}

function NSe(e, r, n) {
  let i = Pe(e, r, n);
  return i === void 0 ? [] : J(i.marketplaceSource, i.corroboratingSource);
}

function sho(e, r, n) {
  let {absolute: i, suspect: s} = TR(e, {
    trustedRoots: J(r, n)
  });
  return s ? void 0 : i;
}

function st(e) {
  return `Marketplace directory refused: its recorded location ${Us(e)} ${o6e}. ${Ma(wFe["network-location"])}.`;
}

var uUn = /^\.(?:[\\/]+|$)/;

function pUn(e) {
  let r = e.replace(uUn, "");
  return r !== "" && (ye(r) || I$(r) || zw(r) || jC(r));
}

function at(e, r) {
  let n = r.replace(uUn, "");
  if (n === "") return e;
  if (pUn(r) || hFt(e, n)) return;
  return Se(e, n);
}

function lt(e) {
  return `Plugin source path refused: ${kt(e, 300)} does not stay inside its marketplace directory. Check that the marketplace entry has a plain relative path.`;
}

async function Nwr(e, r, {marketplaceSource: n, corroboratingSource: i, storageV5: s, localMarketplaceSpace: d = "workspace"}) {
  let c = sho(e, n, i);
  if (c === void 0) return {
    kind: "location-refused"
  };
  let f, m;
  try {
    f = (n !== void 0 && Ef(n) ? await xwr(s, c, d) : await P(c)).isDirectory();
  } catch (y) {
    m = y;
  }
  let g = ft(c, n, f);
  if (g === void 0) return {
    kind: "entry-refused",
    marketplaceDir: C(c)
  };
  let h = at(g, r);
  if (f === void 0) {
    let y = E(m);
    return y === "ENOENT" || y === "ENOTDIR" ? {
      kind: "location-missing",
      error: m,
      marketplaceDir: g,
      entryPath: h
    } : {
      kind: "location-error",
      error: m,
      marketplaceDir: g,
      entryPath: h,
      entryRefusedLexically: pUn(r)
    };
  }
  if (h === void 0) return {
    kind: "entry-refused",
    marketplaceDir: g
  };
  let b = await me(g), te = !1;
  if (!b) {
    for (let y of J(n, i)) if (Hm(y, g) && !await me(y)) {
      te = !0;
      break;
    }
  }
  if (!te) {
    if (b) {
      if (!await ut(g, r)) return {
        kind: "entry-refused",
        marketplaceDir: g,
        cause: "plain-directory-walk"
      };
    } else if (!Hm(g, h) || !await ct(g, h)) return {
      kind: "entry-refused",
      marketplaceDir: g
    };
  }
  return {
    kind: "ok",
    marketplaceDir: g,
    entryPath: h
  };
}

async function me(e) {
  if (O() === "windows") return !1;
  if (jC(e)) return !0;
  let r;
  try {
    r = await P(e, {
      bigint: !0
    });
  } catch {
    return !1;
  }
  if (!r.isDirectory()) return !1;
  if (r.ino === 0n) return !0;
  let n;
  try {
    n = await L(e);
  } catch {
    return !0;
  }
  try {
    let i = await P(n, {
      bigint: !0
    });
    return i.ino === 0n || i.dev !== r.dev || i.ino !== r.ino;
  } catch {
    return !0;
  }
}

async function ut(e, r) {
  if (pUn(r)) return !1;
  let n = r.replace(uUn, ""), i = e;
  for (let s of n.split("/").filter(Boolean)) {
    i = Se(i, s);
    let d;
    try {
      d = await ot(i);
    } catch (c) {
      let f = E(c);
      if (f === "ENOENT" || f === "ENOTDIR") return !0;
      return t(`Marketplace entry ${Us(i)} refused: lstat failed (${E(c) ?? kt(l(c), 160)}) while walking a tree realpath cannot judge`), 
      !1;
    }
    if (!d.isDirectory()) return t(`Marketplace entry ${Us(i)} refused: ${d.isSymbolicLink() ? "a symlink" : "not a directory"} under a marketplace directory realpath cannot judge; only plain directories are allowed there`), 
    !1;
  }
  return !0;
}

async function ct(e, r) {
  if (O() === "windows") return !0;
  let n = m => (t(`Marketplace entry ${Us(r)} refused: ${m} (its declared spelling does not provably open inside ${Us(e)})`), 
  !1), i = m => E(m) ?? kt(l(m), 160), s;
  try {
    s = await L(r);
  } catch (m) {
    let g = E(m);
    if (g !== "ENOENT" && g !== "ENOTDIR") return n(`realpath failed (${i(m)})`);
    try {
      await P(r);
    } catch (h) {
      let b = E(h);
      return b === "ENOENT" || b === "ENOTDIR" ? !0 : n(`stat failed (${i(h)})`);
    }
    return n("it exists but realpath cannot resolve it as spelled");
  }
  let d;
  try {
    d = await Promise.all([ P(r, {
      bigint: !0
    }), P(s, {
      bigint: !0
    }) ]);
  } catch (m) {
    return n(`stat failed (${i(m)})`);
  }
  let [c, f] = d;
  if (c.ino === 0n || f.ino === 0n) return n("the filesystem reports no inode number");
  if (c.dev !== f.dev || c.ino !== f.ino) return n(`its spelling opens a different file from the one realpath names (${Us(s)})`);
  if (!Hm(e, s)) return n(`it opens ${Us(s)}, outside the marketplace directory`);
  return !0;
}

function U(e) {
  return e === "location-refused" ? `its marketplace's recorded location ${o6e}` : "its marketplace entry path does not stay inside the marketplace directory (an absolute, climbing, network-shaped, backslash-containing or link-traversing entry, an entry of a fetched marketplace that resolves or opens outside its tree \u2014 or a relative entry in a url-catalog marketplace, which has no local directory)";
}

function cvs(e) {
  switch (e.kind) {
   case "ok":
   case "location-missing":
    return e.entryPath === void 0 ? {
      entryPath: void 0,
      reason: U("entry-refused")
    } : {
      entryPath: e.entryPath
    };

   case "location-error":
    return e.entryPath !== void 0 ? {
      entryPath: e.entryPath
    } : e.entryRefusedLexically ? {
      entryPath: void 0,
      reason: U("entry-refused")
    } : {
      entryPath: void 0,
      reason: `its marketplace directory could not be examined (${E(e.error) ?? "unknown error"})`
    };

   case "location-refused":
   case "entry-refused":
    return {
      entryPath: void 0,
      reason: U(e.kind)
    };
  }
}

function bFe(e) {
  switch (e.kind) {
   case "ok":
    return {
      entryPath: e.entryPath
    };

   case "location-missing":
    return {
      entryPath: void 0,
      reason: "its marketplace directory does not exist"
    };

   case "location-error":
    return {
      entryPath: void 0,
      reason: `its marketplace directory could not be examined (${E(e.error) ?? "unknown error"})`
    };

   case "location-refused":
   case "entry-refused":
    return {
      entryPath: void 0,
      reason: U(e.kind)
    };
  }
}

async function hz(e, r, n, i, s, d, c) {
  return Nwr(r, n, {
    ...Pe(e, i, s) ?? {
      marketplaceSource: void 0,
      corroboratingSource: void 0
    },
    storageV5: d,
    localMarketplaceSpace: c
  });
}

function Pe(e, r, n) {
  let {marketplace: i} = kn(e);
  if (!i) return;
  let s = Object.hasOwn(n, i) ? n[i]?.source : void 0;
  return {
    marketplaceSource: (r !== void 0 && Object.hasOwn(r, i) ? r[i]?.source : void 0) ?? s,
    corroboratingSource: s
  };
}

var dt = /[\\/]marketplace\.json$/i;

function ft(e, r, n) {
  if (n === !0) return e;
  if (r?.source === "url" || r === void 0 && /\.json$/i.test(e)) return n === !1 ? void 0 : e;
  return n === !1 || dt.test(e) ? C(e) : e;
}

function s6e(e, r, n) {
  switch (e.kind) {
   case "location-refused":
    return {
      code: "marketplace_location_refused",
      message: st(r)
    };

   case "location-missing":
    return {
      code: "marketplace_dir_missing",
      message: `Marketplace directory not found at path: ${Us(r)}`
    };

   case "location-error":
    return {
      code: "marketplace_dir_unreadable",
      message: `Marketplace directory could not be read at path: ${Us(r)} (${E(e.error) ?? "unknown error"})`
    };

   case "entry-refused":
    return {
      code: "marketplace_entry_path_refused",
      message: lt(n) + (e.cause === "plain-directory-walk" ? pt : "")
    };
  }
}

var pt = " The marketplace directory's own path cannot be resolved reliably on this platform (for example, a backslash in one of its components), so only plain directories are accepted as entries there (no links); move the marketplace (or the plugins directory) to a plain path to lift that.";

function w(e) {
  return e !== void 0 && ROt(e) ? e : null;
}

function gt() {
  return w(a.CLAUDE_CODE_ORGANIZATION_UUID ?? Up()?.organizationUuid);
}

function we() {
  return w(Up()?.organizationUuid);
}

async function gH(e) {
  let r = gt();
  if (r === null) return null;
  switch (await Pg(e)) {
   case "store":
    return fOt();

   case "none":
    if ($a().source === "claude.ai") return null;
    return Kwr(r, w(a.CLAUDE_CODE_ACCOUNT_UUID) ?? void 0);

   case "env":
   case "fd":
    return Kwr(r, w(a.CLAUDE_CODE_ACCOUNT_UUID) ?? void 0);
  }
}

function fOt() {
  let e = Up(), r = w(a.CLAUDE_CODE_ORGANIZATION_UUID ?? e?.organizationUuid), n = w(e?.accountUuid);
  return r === null || n === null ? null : Kwr(r, n);
}

function tvs() {
  return $a().source === "claude.ai" ? fOt() : null;
}

function dZt() {
  let e = Up();
  return `${a.CLAUDE_CODE_ORGANIZATION_UUID ?? e?.organizationUuid ?? ""}_${e?.accountUuid ?? a.CLAUDE_CODE_ACCOUNT_UUID ?? ""}`;
}

var be = {
  source: "pluginDirectory"
};

function Bf(e) {
  let r = fe("policySettings")?.enabledPlugins;
  return [ e, MWn(e) ?? e ].some(n => u5(r, n) === !1);
}

function yH() {
  let e = fe("policySettings");
  if (!e?.strictKnownMarketplaces) return null;
  return e.strictKnownMarketplaces;
}

function j7() {
  if (_()?.some(r => r.source === "skills-dir")) return !1;
  let e = yH();
  return e === null || e.some(r => r.source === "skills-dir");
}

function hZt(e) {
  return `Plugins from ${e}/ are blocked by your organization's managed settings (strictKnownMarketplaces or blockedMarketplaces). Ask your administrator to add {"source":"skills-dir"} to strictKnownMarketplaces, or remove it from blockedMarketplaces.`;
}

function W7() {
  return fe("policySettings")?.disableSideloadFlags === !0;
}

function EP() {
  let e = fe("policySettings");
  if (e?.disableCommandPluginSources !== void 0) return e.disableCommandPluginSources === !0;
  return e?.allowManagedHooksOnly === !0;
}

function fUn() {
  {
    let e = fe("policySettings")?.disablePluginDirectory;
    return e !== void 0 && e !== !1;
  }
  return !1;
}

function L_() {
  {
    if (fUn()) return "managed_setting";
    if (wOt(be)) return "blocklist";
    if (!Hc(be)) return "allowlist";
    let e = AC("allow_plugin_directory_search");
    return e === "org_denied" || e === "latched" ? "policy_limit" : null;
  }
  return null;
}

function xN() {
  let e = L_();
  return e === null ? "" : mho(e);
}

function vdt(e) {
  let r = (_() ?? []).filter(q), n = (yH() ?? []).filter(q);
  if (r.length === 0 && n.length === 0) return !1;
  if (e === void 0) return !0;
  let i = {
    source: "git",
    url: e
  }, s = Oe(i);
  if (Nin(e) || aq(e) || D(e) || s === null || s === "") return !0;
  if (r.some(c => !Ae(c.hostPattern) || Q(i, c, {
    blocklistDirection: !0
  }))) return !0;
  let d = /^https:\/\//i.test(e);
  return n.length > 0 && !(d && s !== "" && n.some(c => Ie(s, c.hostPattern)));
}

function Edt() {
  return Ek() !== "remote" || lNt();
}

var mUn = "it is declared by remotely managed settings that this session could not verify with the server, or that have not been approved on this machine yet \u2014 make sure Claude Code can reach your managed-settings server, and approve the managed-settings dialog once in an interactive session (or ask your admin)";

function yxe(e, r) {
  if (!EP()) return null;
  if (e === void 0) return "lockdown";
  if (!Edt()) return "remote_policy_unconsented";
  let n = fe("policySettings")?.extraKnownMarketplaces ?? {};
  if (e.source === "settings" && r !== void 0) return (Object.hasOwn(n, r) ? n[r] : void 0)?.source.source !== "settings" ? "lockdown" : null;
  return Object.values(n).some(i => F(e, i.source)) ? null : "lockdown";
}

function iho(e, r) {
  return yxe(e, r) !== null;
}

function yZt(e, r = []) {
  let n = r.length > 0 ? `: ${r.map(i => Xh(i)).join(", ")}` : "";
  return `${e} ${I(e, "marketplace")} not updated (managed policy) \u2014 ask your admin${n}`;
}

var L8 = "Command-sourced plugins are disabled by your organization's managed settings (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and its command was not run.", $wr = "disabled by your organization's managed settings (disableSideloadFlags)";

function SFe(e) {
  return `${e.join(", ")} ${e.length === 1 ? "is" : "are"} ${$wr}. Plugins, custom agents, and MCP servers can only be loaded from sources your administrator has approved. Ask your administrator to remove disableSideloadFlags from managed settings, or use an approved marketplace / settings file instead.`;
}

function _() {
  let e = fe("policySettings");
  if (!e?.blockedMarketplaces) return null;
  return e.blockedMarketplaces;
}

function _xe() {
  let e = _();
  return yH() !== null || e !== null && e.some(r => r.source !== "skills-dir" && r.source !== "pluginDirectory");
}

function b1(e) {
  return e === void 0 ? _xe() : !Hc(e);
}

function Fwr() {
  return fe("policySettings")?.pluginTrustMessage;
}

function _Zt() {
  return fe("policySettings")?.pluginSuggestionMarketplaces ?? [];
}

function bZt(e, r) {
  let n = Hve(), i = n?.extraKnownMarketplaces?.[e]?.source;
  if (i && F(r, i)) return !0;
  return n?.strictKnownMarketplaces?.some(s => ee(r, s)) ?? !1;
}

function aho(e, r) {
  let n = fr(e);
  return Object.keys(r?.extraKnownMarketplaces ?? {}).some(i => fr(i) === n);
}

function bOt(e, r, n) {
  if (e.source === "claudeai") {
    let f = we();
    return f !== null && e.organizationUuid.toLowerCase() === f.toLowerCase() && (e.scope === "org" || e.scope === "default");
  }
  let i = n ? n.policySettings : Hve(), s = n?.declaredUnder, d = i?.extraKnownMarketplaces, c = M9e(e);
  if (c === null) return !1;
  if (c.source === "npm" && (c.registry === void 0 || !jve(c.package))) return !1;
  if (c.source === "settings" && c.plugins.some(f => {
    if (typeof f.source !== "object") return !0;
    switch (f.source.source) {
     case "npm":
      return f.source.registry === void 0 || !jve(f.source.package);

     case "url":
     case "github":
     case "git-subdir":
     case "archive":
      return !1;

     default:
      return !0;
    }
  })) return !1;
  if (d !== void 0 && Object.entries(d).some(([f, m]) => {
    if (s !== void 0 && fr(f) !== fr(s)) return !1;
    let g = cUn(m.source, r), h = M9e(g);
    return h !== null && F(c, h) && xe(c, h);
  })) return !0;
  if (s !== void 0) return !1;
  return i?.strictKnownMarketplaces?.some(f => {
    if (f.source === "hostPattern" || f.source === "pathPattern" || f.source === "pluginDirectory") return !1;
    if (c.source === "github" && f.source === "github" && (f.path || void 0) !== (c.path || void 0)) return !1;
    let m = cUn(f, r), g = M9e(m);
    return g !== null && ee(c, g) && xe(c, g);
  }) ?? !1;
}

function xe(e, r) {
  if (e.source !== "npm") return !0;
  if (r.source !== "npm" || e.registry === void 0 || r.registry === void 0) return !1;
  let n = Re(e.registry), i = Re(r.registry);
  return n !== null && n === i;
}

function Re(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return null;
  }
  if (r.hostname = lme(r.hostname), !r.pathname.endsWith("/")) r.pathname = `${r.pathname}/`;
  return r.toString();
}

function lho(e) {
  let r = Hve()?.strictKnownMarketplaces;
  if (!r) return !1;
  let n;
  try {
    n = new URL(e.tarballUrl);
  } catch {
    return !1;
  }
  let i = Le(n);
  if (i === null) return !1;
  return r.some(s => s.source === "npm" && s.registry !== void 0 && Ue(s, e.packageName, n, i, "allow"));
}

function SZt(e) {
  if (e.source !== "github" && e.source !== "git") return !1;
  if (e.source === "git") {
    if (e.url.includes("://")) {
      let r;
      try {
        r = new URL(e.url).protocol;
      } catch {
        r = null;
      }
      if (r === null || !ht.has(r)) return !1;
    } else if (Lan(e.url) === null) return !1;
  }
  return hPo(e) && (e.ref || void 0) === void 0 && (e.path || void 0) === void 0;
}

var ht = new Set([ "https:", "ssh:", "git+https:", "git+ssh:" ]);

function F(e, r) {
  if (e.source !== r.source) return !1;
  switch (e.source) {
   case "url":
    return Lue(e.url) === Lue(r.url);

   case "github":
    return e.repo.toLowerCase() === r.repo.toLowerCase() && (e.ref || void 0) === (r.ref || void 0) && (e.path || void 0) === (r.path || void 0);

   case "git":
    {
      let n = r.url;
      return (D(e.url) || D(n) ? e.url === n : UIr(e.url) === UIr(n)) && (e.ref || void 0) === (r.ref || void 0) && (e.path || void 0) === (r.path || void 0);
    }

   case "npm":
    return e.package === r.package;

   case "file":
    return e.path === r.path;

   case "directory":
    return e.path === r.path;

   case "settings":
    return e.name === r.name && zn(e.plugins, r.plugins);

   case "pluginDirectory":
    return !0;

   default:
    return !1;
  }
}

function SOt(e) {
  let r = St(e);
  return r === null ? null : lme(r);
}

function St(e) {
  let r = _e(e);
  return r !== null && X(r) ? null : r;
}

function X(e) {
  return e.startsWith("[") && e.endsWith("]") && Min(e.slice(1, -1));
}

function D(e) {
  return K5(e);
}

function _e(e) {
  switch (e.source) {
   case "github":
    return rr;

   case "git":
    {
      if (Nin(e.url)) return null;
      return mae(e.url)?.host ?? null;
    }

   case "url":
    try {
      return new URL(e.url).hostname;
    } catch {
      return null;
    }

   case "claudeai":
    return "claude.ai";

   default:
    return null;
  }
}

function Oe(e) {
  if (e.source === "git" && !e.url.includes("://")) {
    let r = Lan(e.url);
    return r ? lme(r.host) : null;
  }
  return SOt(e);
}

function Q(e, r, n) {
  let i = n?.blocklistDirection ? SOt(e) : Oe(e);
  if (!i) return !1;
  let s = n?.blocklistDirection && i === $Ir ? [ i, rr ] : [ i ];
  try {
    let d = new RegExp(r.hostPattern);
    return s.some(c => d.test(c));
  } catch {
    return t(`Invalid hostPattern regex in policy settings: ${r.hostPattern}`, {
      level: "error"
    }), !1;
  }
}

function Ae(e) {
  try {
    return new RegExp(e), !0;
  } catch {
    return t(`Invalid hostPattern regex in policy settings: ${e}`, {
      level: "error"
    }), !1;
  }
}

function Ie(e, r) {
  if (!Ae(r)) return !1;
  try {
    return new RegExp(`^(?:${r})$`).test(e);
  } catch {
    return !1;
  }
}

function Ne(e, r) {
  if (e.source !== "file" && e.source !== "directory") return !1;
  try {
    return new RegExp(r.pathPattern).test(e.path);
  } catch {
    return t(`Invalid pathPattern regex in policy settings strictKnownMarketplaces: ${r.pathPattern}`, {
      level: "error"
    }), !1;
  }
}

function dho() {
  let e = yH();
  if (!e) return [];
  return e.filter(q).map(r => r.hostPattern);
}

function q(e) {
  return e.source === "hostPattern";
}

function Me(e) {
  let r = FIr(e);
  if (r !== null && r.includes("*")) return t(`Invalid owner-wildcard url in policy settings blockedMarketplaces: ${e} (wildcards are only supported in github-form entries, as "<owner>/*"); entry does not match github.com sources`, {
    level: "error"
  }), null;
  return r;
}

function Lue(e) {
  try {
    let r = new URL(e);
    return r.hostname = lme(r.hostname), r.toString();
  } catch {
    return e;
  }
}

function Pt(e, r) {
  let n = e.split("/");
  if (n.length !== 2) return !1;
  let [i, s] = n;
  if (i === void 0 || s === void 0 || !RKn(i) || !RKn(s)) return !1;
  return i === r;
}

function v(e, r) {
  let n = EPo(r), i = xKn(e);
  if (i === null) {
    if (e.includes("*")) t(`Invalid owner-wildcard repo in policy settings blockedMarketplaces: ${e} (only "<owner>/*" is supported); entry only matches a literally identical repo string`, {
      level: "error"
    });
    return n === e || r === e;
  }
  let s = n.split("/");
  if (s.length !== 2) return !1;
  let [d, c] = s;
  if (d === void 0 || c === void 0 || !RKn(d) || !vPo.test(c)) return !1;
  return d.toLowerCase() === i.toLowerCase();
}

function Ce(e) {
  if (e.startsWith("/") || e.startsWith("\\") || /^[A-Za-z]:/.test(e)) return !1;
  return !e.split(/[\\/]/).some(r => r === "..");
}

function k(e, r) {
  if (!e) return !0;
  return e === (r || void 0);
}

function wt(e, r) {
  if (e.source === r.source) switch (e.source) {
   case "github":
    {
      let n = r;
      if (!v(n.repo, e.repo)) return !1;
      return k(n.ref, e.ref) && k(n.path, e.path);
    }

   case "git":
    {
      let n = r, i = Me(n.url), s = i === null ? null : FIr(e.url);
      if (!(i !== null && s !== null ? v(i, s) : $in(e.url) === $in(n.url))) return !1;
      return k(n.ref, e.ref) && k(n.path, e.path);
    }

   case "url":
    return Lue(e.url) === Lue(r.url);

   case "npm":
    return e.package === r.package;

   case "file":
    return e.path === r.path;

   case "directory":
    return e.path === r.path;

   case "settings":
    return e.name === r.name;

   case "pluginDirectory":
    return !0;

   default:
    return !1;
  }
  if (e.source === "git" && r.source === "github") {
    let n = FIr(e.url);
    if (n !== null && v(r.repo, n)) return k(r.ref, e.ref) && k(r.path, e.path);
  }
  if (e.source === "github" && r.source === "git") {
    let n = Me(r.url);
    if (n !== null && v(n, e.repo)) return k(r.ref, e.ref) && k(r.path, e.path);
  }
  if (e.source === "git" && r.source === "url") {
    if (!e.url.includes("://")) return !1;
    let n = {
      stripDotGit: !0
    };
    return $in(e.url, n) === $in(r.url, n);
  }
  return !1;
}

function wOt(e) {
  let r = _();
  if (r === null) return !1;
  return r.some(n => {
    if (n.source === "hostPattern") return Q(e, n, {
      blocklistDirection: !0
    });
    if (n.source === "pathPattern") return Ne(e, n);
    return wt(e, n);
  });
}

function Hc(e) {
  if (e.source === "git" && (Nin(e.url) || D(e.url)) && _xe()) return !1;
  let r = _e(e);
  if (r !== null && X(r) && _xe()) return !1;
  if (e.source === "pluginDirectory" && fUn()) return !1;
  if (wOt(e)) return !1;
  let n = yH();
  if (n === null) return !0;
  return n.some(i => ee(e, i));
}

function gUn(e) {
  let r = _(), n = yH();
  if (r === null && n === null) return null;
  let i;
  try {
    i = new URL(e.tarballUrl);
  } catch {
    i = null;
  }
  let s = Xh(e.packageName);
  if (i === null) return `${s} cannot be used: the registry answered with a download URL that could not be parsed, and your organization restricts plugin sources`;
  let d = lme(i.hostname), c = i.port ? `${d}:${i.port}` : d, f = Le(i);
  if (f === null) return `${s} cannot be used: the registry answered with a download URL whose path climbs or cannot be decoded, and your organization restricts plugin sources`;
  if (X(i.hostname) && _xe()) return `${s} cannot be used: it downloads from ${c}, an IPv6 spelling of an IPv4 address, which your organization's plugin source rules cannot check. Ask whoever runs the registry to serve it from a hostname or an IPv4 address.`;
  let m = g => h => {
    switch (h.source) {
     case "npm":
      return Ue(h, e.packageName, i, f, g);

     case "hostPattern":
      try {
        return g === "block" ? new RegExp(h.hostPattern).test(d) : Ie(d, h.hostPattern) && i.protocol === "https:";
      } catch {
        return t(`Invalid hostPattern regex in policy settings: ${h.hostPattern}`, {
          level: "error"
        }), g === "block";
      }

     default:
      return !1;
    }
  };
  if (r?.some(m("block"))) return `${s} cannot be used: it resolves to ${c}, which your organization's managed settings block (blockedMarketplaces)`;
  if (n !== null && !n.some(m("allow"))) return `${s} cannot be used: it resolves to ${c}, which is not among the plugin sources your organization allows (strictKnownMarketplaces). Ask your administrator to add an npm or hostPattern entry for it.`;
  return null;
}

function Ue(e, r, n, i, s) {
  return bt(e.package, r) && (e.registry === void 0 || (xt(n, i, e.registry) ?? s === "block"));
}

function bt(e, r) {
  if (e.endsWith("/*") && e.startsWith("@")) return r.startsWith(e.slice(0, -1));
  return e === r;
}

function Le(e) {
  let r;
  try {
    r = decodeURIComponent(e.pathname);
  } catch {
    return null;
  }
  if (r.includes("\\") || /(^|\/)\.\.?(\/|$)/.test(r)) return null;
  return r;
}

function xt(e, r, n) {
  let i;
  try {
    i = new URL(n);
  } catch {
    return null;
  }
  if (e.protocol !== i.protocol || lme(e.hostname) !== lme(i.hostname) || (e.port || De(e.protocol)) !== (i.port || De(i.protocol))) return !1;
  let s;
  try {
    s = decodeURIComponent(i.pathname);
  } catch {
    return null;
  }
  if (!s.endsWith("/")) s = `${s}/`;
  return r.startsWith(s);
}

function De(e) {
  return e === "https:" ? "443" : e === "http:" ? "80" : "";
}

function ee(e, r) {
  if (e.source === "git" && (aq(e.url) || D(e.url))) return !1;
  if (r.source === "hostPattern") {
    if ((e.source === "github" || e.source === "git") && e.path && !Ce(e.path)) return !1;
    if (e.source === "claudeai" && e.scope !== "org" && e.scope !== "default") return !1;
    return Q(e, r);
  }
  if (r.source === "pathPattern") return Ne(e, r);
  if (e.source === "github" && r.source === "github") {
    let n = xKn(r.repo);
    if (n === null && r.repo.includes("*")) t(`Invalid owner-wildcard repo in policy settings strictKnownMarketplaces: ${r.repo} (only "<owner>/*" is supported); entry only matches a literally identical repo string`, {
      level: "error"
    });
    if (n !== null) return Pt(e.repo, n) && (r.ref || void 0) === (e.ref || void 0) && (r.path ? r.path === (e.path || void 0) : !e.path || Ce(e.path));
  }
  if (r.source === "skills-dir") return !1;
  return F(e, r);
}

export { gH, fOt, tvs, dZt, yy, cZt, xwr, mOt, nho, _dt, Pwr, uZt, Iwr, nvs, _1, lm, bdt, HF, DY, rvs, gOt, ovs, pZt, LSe, Owr, fZt, svs, tUn, hOt, k0, mZt, Sdt, nUn, Mwr, xl, hH, yOt, sse, wdt, rUn, rho, oUn, ivs, sUn, avs, iUn, ah, _Fe, aUn, gZt, lvs, lUn, o6e, TR, JV, _Ot, oho, Hwr, Dwr, dUn, cUn, Lwr, dvs, NSe, sho, uUn, pUn, Nwr, cvs, bFe, hz, s6e, Bf, yH, j7, hZt, W7, EP, fUn, L_, xN, vdt, Edt, mUn, yxe, iho, yZt, L8, $wr, SFe, _xe, b1, Fwr, _Zt, bZt, aho, bOt, lho, SZt, SOt, dho, Lue, wOt, Hc, gUn };
