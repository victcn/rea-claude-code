// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l, W, jt } from "./chunk-b0z4bv3v.js";

import { Y, t } from "./chunk-kawq2919.js";

import { kt, Xl } from "./chunk-r2h53bm2.js";

import { mn, br, qxs, wf, Aw, d9, rf, p5, vb, kn, B1, Hi, vm, Pl } from "./chunk-8drhysk2.js";

import { Tx } from "./chunk-2v9tfgc3.js";

import { So } from "./chunk-wptm3jf5.js";

import { ko, Din, N5, H9e, Fin, Z0, Bn, $Kn, Kfe } from "./chunk-q6wab2jw.js";

import { d } from "./chunk-6ah1819r.js";

import { $t } from "./chunk-g6nh65r0.js";

import { le } from "./chunk-cqgvwwgb.js";

import { Mo } from "./chunk-j90se18b.js";

import { Jie, yXe, pr, Lt } from "./chunk-9yajep3y.js";

import { Rb, As, it } from "./chunk-zscnwzv2.js";

import { hz, bZt } from "./chunk-67jt18z1.js";

import { vy } from "./chunk-s2t7g8m9.js";

import { OC } from "./chunk-0481pkch.js";

import { AY, Olt } from "./chunk-rh1cb6gh.js";

import { H4e } from "./chunk-81rtbneg.js";

import { pde, $B, nO, rF, iF, His, N6t, cw, ly, Gk, Nd, rP } from "./chunk-84yp45y8.js";

import { BS } from "./chunk-ac1gm9w7.js";

import { te } from "./chunk-48xcyvwy.js";

import { w } from "./chunk-9rj1xaxr.js";

import { qj } from "./chunk-g3vbtf8r.js";

import { ozt, e7n, t7n, szt, Lg, o7n } from "./chunk-4s406sh2.js";

import { e } from "./chunk-xx3xgkvz.js";

import { dwn } from "./chunk-atepbey9.js";

import { j2e, vnr, DVt, LVt, NVt } from "./chunk-abbgyr9n.js";

import { y, F } from "./chunk-cpyd3eya.js";

import { du } from "./chunk-e2kb3426.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import { D } from "./chunk-hmqkrrtz.js";

import { we } from "./chunk-m8ez8fhk.js";

var We = /^[\x21-\x7e]+$/, se = /^[A-Za-z0-9._-]{1,64}$/;

function zC(r) {
  return br === "" || Z(r, We) ? r : X(r);
}

function yyt(r) {
  if (Z(r, se)) return r;
  return $t(br === "" ? kt(r, 64) : X(r));
}

function ufn(r) {
  return Z(r, se) ? r : X(r);
}

function Z(r, n) {
  return n.test(r) && !N5(r) && !qxs(br, ae(r));
}

function X(r) {
  return Xl(kt(ae(r), 64)) || "\u201c\u201d";
}

function ae(r) {
  return Bn(r).replace($Kn, "").trimEnd();
}

import { join as ue } from "path";

async function GWe(r, n, i, a) {
  let s = Object.hasOwn(i, r) ? i[r]?.installLocation : void 0;
  if (s === void 0) return n;
  let f;
  try {
    f = cw();
  } catch {
    return n;
  }
  return BS(n, p => ze(p, r, s, i, f, a), {
    concurrency: 8
  });
}

async function ze(r, n, i, a, s, f) {
  let p = r.source;
  if (!H9e(p)) return r;
  try {
    let c = await hz(iF(r.name, n), i, p, a, s, f, ly(i) !== void 0 ? "system" : "workspace");
    if (c.kind !== "ok") return r;
    let m = ue(c.entryPath, ".claude-plugin");
    if (!await $B(m)) return r;
    let h = ue(m, "plugin.json"), P = await rF(h);
    if (P === void 0) return r;
    let b = pde(Y(Mo(P)), "plugin-json", {
      pluginName: r.name,
      manifestPath: h
    });
    if (!b.ok) return r;
    let x = b.manifest, g = {
      ...r
    };
    if (C(g.displayName) && x.displayName !== void 0) g.displayName = x.displayName;
    if (C(g.description) && x.description !== void 0) g.description = x.description;
    if (g.author === void 0 && x.author !== void 0) g.author = x.author;
    if (C(g.homepage) && x.homepage !== void 0) g.homepage = x.homepage;
    if (C(g.repository) && x.repository !== void 0) g.repository = x.repository;
    if (C(g.license) && x.license !== void 0) g.license = x.license;
    if (!g.keywords?.length && x.keywords !== void 0) g.keywords = x.keywords;
    return g;
  } catch (c) {
    return t(`Display metadata for ${iF(r.name, n)} not read from its plugin.json: ${l(c)}`), 
    r;
  }
}

function C(r) {
  return Kfe(r) === void 0;
}

F();

function ot(Be) {
  return {
    label: Be,
    value: Be
  };
}

function Z6n(r, n, i, a) {
  let s = {};
  for (let f of r) {
    let p = i[f], c = O(ko(n, f) ?? "");
    if (c === "") {
      if (p?.sensitive === !0 && ko(a ?? {}, f) !== void 0) continue;
      if (p?.type === "number") continue;
      if (p?.required !== !0 && ko(a ?? {}, f) === void 0) continue;
    }
    if (p?.type === "number") {
      let m = Number(c);
      s[f] = Number.isNaN(m) ? c : m;
    } else if (p?.type === "boolean") {
      let m = j2e(c);
      if (m !== void 0) s[f] = m;
    } else s[f] = c;
  }
  return s;
}

function qUt(r) {
  let m = w(22), {title: n, subtitle: i, configSchema: a, initialValues: s, onSave: f, onCancel: p} = r, c = Object.keys(a), h;
  if (m[0] !== a || m[1] !== s) h = () => e3n(a, s), m[0] = a, m[1] = s, m[2] = h; else h = m[2];
  let [P, b] = y(h), x;
  if (m[3] !== a || m[4] !== s) x = g => {
    let k = a[g];
    let S = pfn(k);
    if (S !== void 0) {
      return {
        type: "select",
        key: g,
        label: k?.title || g,
        options: S.map(ot),
        hint: () => k?.description
      };
    }
    let A = k?.sensitive === !0;
    let v = A && ko(s ?? {}, g) !== void 0;
    return {
      type: "text",
      key: g,
      label: k?.title || g,
      required: k?.required === !0 && !v,
      mask: A ? "*" : void 0,
      placeholder: v ? "(unchanged)" : void 0,
      validate: k?.type === "number" ? R => O(R) === "" || NVt.numberOfInput(O(R), k) !== void 0 ? null : NVt.numberInputHint(k) : void 0,
      hint: () => k?.description
    };
  }, m[3] = a, m[4] = s, m[5] = x; else x = m[5];
  let T = c.map(x);
  if (c.length === 0) {
    return null;
  }
  let z;
  if (m[6] !== b) z = (ur, cr) => b(fr => ({
    ...fr,
    [ur]: cr
  })), m[6] = b, m[7] = z; else z = m[7];
  let q;
  if (m[8] !== a || m[9] !== c || m[10] !== s || m[11] !== f || m[12] !== P) q = () => f(Z6n(c, P, a, s)), 
  m[8] = a, m[9] = c, m[10] = s, m[11] = f, m[12] = P, m[13] = q; else q = m[13];
  let Ke;
  if (m[14] !== T || m[15] !== p || m[16] !== i || m[17] !== z || m[18] !== q || m[19] !== n || m[20] !== P) Ke = e(qj, {
    title: n,
    subtitle: i,
    fields: T,
    values: P,
    onChange: z,
    onSubmit: q,
    onCancel: p,
    submitLabel: "Save configuration"
  }), m[14] = T, m[15] = p, m[16] = i, m[17] = z, m[18] = q, m[19] = n, m[20] = P, 
  m[21] = Ke; else Ke = m[21];
  return Ke;
}

function e3n(r, n) {
  let i = {};
  for (let a of Object.keys(r)) {
    let s = r[a], f = s?.sensitive === !0 ? void 0 : ko(n ?? {}, a), p = pfn(s);
    if (s?.type === "boolean") {
      i[a] = String(vnr(ko(n ?? {}, a) ?? s.default));
      continue;
    }
    i[a] = p === void 0 ? f === void 0 ? "" : String(f) : [ f, s?.default ].find(c => typeof c === "string" && p.includes(c)) ?? p[0] ?? "";
  }
  return i;
}

function pfn(r) {
  if (r?.type === "boolean") return nt;
  return r?.type === "string" && r.multiple !== !0 ? r.options : void 0;
}

var nt = [ "true", "false" ];

function O(r) {
  return (r.split(/\r\n|\r|\n/, 1)[0] ?? "").trim();
}

function YUt(r, n) {
  return r.map(i => {
    let a = n[i.marketplaceName]?.source;
    return a && wf(a) ? {
      ...i,
      fromPluginDirectory: !0
    } : i;
  });
}

var E = r => r.fromPluginDirectory === !0;

function st(r, n) {
  let i = f => r[f] ?? n.find(p => p.entry[f] !== void 0)?.entry[f], a = [ "displayName", "description", "author", "homepage", "category", "tags", "keywords", "relevance" ], s = {};
  for (let f of a) {
    let p = i(f);
    if (p !== void 0) Object.assign(s, {
      [f]: p
    });
  }
  return s;
}

function _1o(r, n) {
  let i = c => Aw(c.entry.source, d9(n[c.marketplaceName]?.source)), a = c => E(c) && H4e(c.entry.name), s = new Set;
  for (let c of r) if (a(c)) {
    let m = i(c);
    if (m !== void 0) s.add(m);
  }
  if (s.size === 0) return r;
  let f = new Map;
  for (let c of r) {
    if (E(c) || !Pl(c.marketplaceName)) continue;
    if (N6t(c.marketplaceName, c.entry)) continue;
    let m = i(c);
    if (m !== void 0 && s.has(m)) f.set(m, [ ...f.get(m) ?? [], c ]);
  }
  let p = [];
  for (let c of r) {
    let m = i(c), h = m === void 0 ? void 0 : f.get(m);
    if (!E(c)) {
      if (!h?.includes(c)) p.push(c);
      continue;
    }
    if (h === void 0 || !a(c)) {
      p.push(c);
      continue;
    }
    p.push({
      ...c,
      entry: {
        ...c.entry,
        ...st(c.entry, h)
      },
      isInstalled: c.isInstalled || h.some(P => P.isInstalled),
      alsoListedIn: D(h.map(P => P.marketplaceName)),
      installCountIds: h.map(P => P.pluginId)
    });
  }
  return p;
}

async function ffn(r, n) {
  let i = new Set, a = Nd().plugins;
  for (let [s, f] of Object.entries(a)) {
    if (kn(s).marketplace !== mn || !f.some(rP)) continue;
    let p = await Gk(s, n), c = p && Aw(p.entry.source, d9(r[mn]?.source));
    if (c) i.add(c);
  }
  return i;
}

function mfn(r, n, i = new Set) {
  let a = c => Aw(c.entry.source, d9(n[c.marketplaceName]?.source)), s = new Set(i), f = new Set, p = new Set;
  for (let c of r) {
    let m = c.isInstalled ? a(c) : void 0;
    if (m === void 0) continue;
    if (E(c)) s.add(m), f.add(m); else if (Pl(c.marketplaceName)) p.add(m);
  }
  if (s.size === 0 && p.size === 0) return r;
  return r.filter(c => {
    if (c.isInstalled) return !0;
    let m = a(c);
    if (m === void 0) return !0;
    if (E(c)) return !p.has(m) && !f.has(m);
    return !Pl(c.marketplaceName) || !s.has(m);
  });
}

function t3n(r, n) {
  if (!n) return;
  let i = n.get(r.pluginId);
  for (let a of r.installCountIds ?? []) {
    let s = n.get(a);
    if (s !== void 0 && (i === void 0 || s > i)) i = s;
  }
  return i;
}

function _$r(r, n) {
  let i = new Map(r.map((a, s) => [ a, s ]));
  r.sort((a, s) => {
    let f = t3n(a, n) ?? 0, p = t3n(s, n) ?? 0;
    if (f !== p) return p - f;
    let c = E(a), m = E(s);
    if (c !== m) return c ? -1 : 1;
    return c ? (i.get(a) ?? 0) - (i.get(s) ?? 0) : a.entry.name.localeCompare(s.entry.name);
  });
}

function gfn(r) {
  return E(r) ? br : ufn(r.marketplaceName);
}

function hfn(r) {
  let n = r.alsoListedIn ?? [];
  if (n.length === 0) return;
  let i = new Map(b$r(r).map(a => [ a.marketplace, a.name ]));
  return `Also listed in ${n.map(a => {
    let s = i.get(a);
    return s === void 0 ? a : `${a} as ${s}`;
  }).join(", ")}`;
}

function b$r(r) {
  {
    let n = [];
    for (let i of r.installCountIds ?? []) {
      let {name: a, marketplace: s} = kn(i);
      if (s !== void 0 && a !== r.entry.name) n.push({
        marketplace: s,
        name: a
      });
    }
    return n;
  }
  return [];
}

function b1o(r) {
  let n = i => i === du ? "official" : i;
  return [ E(r) ? br : r.marketplaceName, ...(r.alsoListedIn ?? []).map(n) ].join(" + ");
}

function ye(r) {
  return /^[A-Za-z0-9._/@:~-]{1,120}$/.test(r) ? r : Xl(kt(r, 120));
}

function yfn(r) {
  let n = r.entry.source;
  if (typeof n !== "object" || n === null) return;
  let i;
  if (n.source === "github") i = n.repo; else if (n.source === "url" || n.source === "git-subdir") i = n.url;
  if (i === void 0) return;
  let a = i;
  try {
    let f = new URL(i);
    a = So(f.hostname) ? f.pathname.replace(/^\/+/, "") : `${f.host}${f.pathname}`;
  } catch {}
  if (a = ye(a.replace(/\.git$/, "").replace(/\/+$/, "")), a === "") return;
  let s = n.source === "git-subdir" ? ye(n.path) : "";
  return s === "" ? a : `${a} (${s})`;
}

function S1o(r) {
  let n = new Map, i;
  for (let s of r) {
    if (E(s)) i = s.marketplaceName;
    for (let f of [ s.marketplaceName, ...s.alsoListedIn ?? [] ]) n.set(f, (n.get(f) ?? 0) + 1);
  }
  let a = [ ...n ].map(([s, f]) => ({
    marketplace: s,
    label: s === i ? br : ufn(s),
    count: f
  })).sort((s, f) => {
    if (s.marketplace === i) return -1;
    if (f.marketplace === i) return 1;
    return f.count - s.count || s.label.localeCompare(f.label);
  });
  return [ {
    marketplace: null,
    label: "All",
    count: r.length
  }, ...a ];
}

var n3n = 4;

function w1o(r, n) {
  let i = r.slice(0, n3n), a = r.find(s => s.marketplace === n);
  if (a && !i.includes(a)) i[i.length - 1] = a;
  return i;
}

function v1o(r, n, i) {
  return [ r.marketplaceName, ...r.alsoListedIn ?? [] ].some(a => {
    if (!n.has(a)) return !1;
    if (a === du) return !0;
    let s = i[a]?.source;
    return s !== void 0 && bZt(a, s);
  });
}

function E1o(r, n) {
  return n === null || r.marketplaceName === n || (r.alsoListedIn?.includes(n) ?? !1);
}

function re(r, n, i) {
  if (_fn(r)) return !1;
  if (r.source === n) return !0;
  return "plugin" in r && r.plugin === i && vb(r.source) === vb(n);
}

function _fn(r) {
  return "orphan" in r && r.orphan === !0;
}

function r3n(r, n) {
  return re(r, n.source, n.name);
}

function o3n(r, n) {
  return re(r, n.source, n.name);
}

function at(r, n, i) {
  if (p5(r.source)) return !1;
  if (r.source === n) return !0;
  let a = Hi(r.source);
  return "plugin" in r && r.plugin === i && (a === void 0 || a === Hi(n));
}

function VEe(r, n, i) {
  return rf(Hi(n)) ? re(r, n, i) : at(r, n, i) && !_fn(r);
}

function S$r(r, n) {
  let i = n.filter(m => VEe(r, m.source, m.name)), a = i.length === 1 ? i[0] : i.find(m => vm(m.source, r.source));
  if (a) return {
    name: a.name,
    marketplace: Hi(a.source)
  };
  let [s] = i;
  if (s !== void 0) return {
    name: s.name,
    marketplace: void 0
  };
  let {name: f, marketplace: p} = B1(r.source);
  if (p !== void 0) return {
    name: f,
    marketplace: p
  };
  let c = vb(r.source);
  return {
    name: c !== void 0 && "plugin" in r && r.plugin ? r.plugin : f,
    marketplace: c
  };
}

var he = we(vy(), 1);

import { readFile as lt, stat as ut } from "fs/promises";

import { dirname as V, join as U, relative as j, resolve as ct } from "path";

async function XUt(r, n = {}) {
  let i = [], a = await ft(r);
  if (!a.ok) return {
    ok: !1,
    error: a.error,
    warnings: i
  };
  let {pluginRoot: s, manifestPath: f, manifest: p} = a, c = typeof p.name === "string" && p.name.length > 0 ? await pt(s, p.name) : void 0, m = await szt(f, c !== void 0 && Din(c.marketplaceName) ? {
    kind: "anthropic"
  } : {
    kind: "alone"
  }), h = [ m ];
  if (m.success) h.push(...await o7n(s));
  for (let v of h) for (let R of v.warnings) i.push(`${j(le(), v.filePath)}: ${R.message}`);
  let P = h.find(v => !v.success);
  if (P) {
    let v = P.errors.map(R => `  ${R.path}: ${R.message}`).join(`\n`);
    return {
      ok: !1,
      error: `Plugin validation failed for ${P.filePath}:\n${v}`,
      warnings: i
    };
  }
  let b = p.name;
  if (typeof b !== "string" || b.length === 0) return {
    ok: !1,
    error: `plugin.json at ${f} has no "name" field`,
    warnings: i
  };
  let x = typeof p.version === "string" && p.version.length > 0 ? p.version : void 0, g, k;
  if (x !== void 0) g = x, k = "plugin.json"; else if (c?.entry.version) g = c.entry.version, 
  k = "marketplace entry"; else return {
    ok: !1,
    error: `No version to tag. Set "version" in ${j(le(), f)}` + (c ? ` or in the marketplace entry at ${j(le(), c.path)} plugins[${c.entryIndex}].` : ".") + " Tags are only used for dependency version constraints, which require an explicit semver \u2014 the git-SHA fallback does not need a tag.",
    warnings: i
  };
  if (c?.entry.version && x !== void 0 && c.entry.version !== x) return {
    ok: !1,
    error: `Version mismatch: plugin.json says "${x}" but ${j(le(), c.path)} plugins[${c.entryIndex}].version says "${c.entry.version}". plugin.json wins at install time, so update the marketplace entry to "${x}" (or remove it) before tagging.`,
    warnings: i
  };
  if (he.valid(g) === null) return {
    ok: !1,
    error: `Version "${g}" is not valid semver. Dependency resolution (resolveVersionRange) ignores tags whose suffix doesn't parse as semver, so this tag would never be selected.`,
    warnings: i
  };
  let S = His(b, g);
  if (!Tx(S)) return {
    ok: !1,
    error: `Computed tag name "${S}" is not a valid git ref. Check the plugin name for characters git rejects (spaces, ~, ^, :, ?, *, [, \\, or sequences like .., @{, //).`,
    warnings: i
  };
  let A = pr(s);
  if (A === null) return {
    ok: !1,
    error: `${s} is not inside a git repository. Dependency tags are resolved via git ls-remote, so the plugin must live in a git repo.`,
    warnings: i
  };
  if (!n.force) {
    let v = await dt(A, c ? [ s, c.path ] : [ s ]);
    if (v.length > 0) {
      let R = v.slice(0, 5).join(`\n  `), T = v.length > 5 ? `\n  \u2026and ${v.length - 5} more` : "";
      return {
        ok: !1,
        error: `Uncommitted changes affecting this release \u2014 commit them first so the tag points at the version you intend to release (or use --force):\n  ${R}${T}`,
        warnings: i
      };
    }
  }
  if (!n.force) {
    if (await mt(A, S)) return {
      ok: !1,
      error: `Tag "${S}" already exists locally. Bump the version in ${k}, or re-run with --force to move the tag.`,
      warnings: i
    };
  }
  return {
    ok: !0,
    warnings: i,
    plan: {
      pluginName: b,
      version: g,
      versionFrom: k,
      tag: S,
      pluginRoot: s,
      gitRoot: A,
      marketplace: c ? {
        path: c.path,
        entryIndex: c.entryIndex,
        entryVersion: c.entry.version
      } : void 0,
      validation: h
    }
  };
}

async function JUt(r, n) {
  let i = As(), a = await Olt(r.gitRoot, gt, {
    envPins: {},
    base: i,
    repository: AY(r.gitRoot)
  });
  if (a === null) t(`[plugin tag] could not read the user's git signing configuration; ${r.tag} is created unsigned`, {
    level: "warn"
  });
  let s = [ "-C", r.gitRoot, ...[ ...yt, ...a ?? [] ].flatMap(([m, h]) => [ "-c", `${m}=${h}` ]), "tag" ];
  if (n.force) s.push("-f");
  s.push("-a", "-m", _yt(r, n.message), "--", r.tag, "HEAD");
  let f = await it(Lt(), s, {
    env: i,
    useCwd: !0
  });
  if (f.code !== 0) return {
    ok: !1,
    error: `git tag failed (exit ${f.code}): ${f.stderr.trim() || f.stdout.trim()}`
  };
  if (!n.push) return {
    ok: !0,
    pushed: !1
  };
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(n.remote)) return {
    ok: !1,
    error: `Tag created locally but not pushed: "${n.remote}" is not a valid remote name.`
  };
  let p = [ "-C", r.gitRoot, "push" ];
  if (n.force) p.push("--force");
  p.push(n.remote, `refs/tags/${r.tag}`);
  let c = await it("git", p, {
    allowRepoGitHooks: !0,
    allowGitTerminalPrompt: n.allowGitTerminalPrompt,
    useCwd: !0
  });
  if (c.code !== 0) return {
    ok: !1,
    error: `Tag created locally but push failed (exit ${c.code}): ${c.stderr.trim() || c.stdout.trim()}`
  };
  return {
    ok: !0,
    pushed: !0
  };
}

function _yt(r, n) {
  return n === void 0 ? `${r.pluginName} ${r.version}` : n.replaceAll("%s", r.version);
}

async function ft(r) {
  let n = ct(r), i;
  try {
    i = await ut(n);
  } catch (s) {
    return {
      ok: !1,
      error: W(s) ? `Path not found: ${n}` : `Cannot stat ${n}: ${l(s)}`
    };
  }
  let a = i.isFile() ? [ [ V(V(n)), n ] ] : [ [ n, U(n, ".claude-plugin", "plugin.json") ], [ V(n), U(n, "plugin.json") ] ];
  for (let [s, f] of a) {
    let p;
    try {
      p = await lt(f, {
        encoding: "utf-8"
      });
    } catch (m) {
      if (W(m)) continue;
      return {
        ok: !1,
        error: `Cannot read ${f}: ${l(m)}`
      };
    }
    let c;
    try {
      c = Y(Mo(p));
    } catch (m) {
      return {
        ok: !1,
        error: `Invalid JSON in ${f}: ${l(m)}`
      };
    }
    return {
      ok: !0,
      pluginRoot: s,
      manifestPath: f,
      manifest: typeof c === "object" && c !== null ? c : {}
    };
  }
  return {
    ok: !1,
    error: `No plugin manifest found. Expected ${U(n, ".claude-plugin", "plugin.json")}.`
  };
}

async function pt(r, n) {
  let i = pr(r) ?? void 0, a = r;
  for (;;) {
    let s = U(a, ".claude-plugin", "marketplace.json"), f = await t7n(s);
    if (f) {
      for (let [c, m] of f.plugins.entries()) if (e7n(m, a, {
        root: r,
        name: n
      })) return {
        path: s,
        marketplaceName: f.name,
        entryIndex: c,
        entry: m
      };
    }
    if (a === i) return;
    let p = V(a);
    if (p === a) return;
    a = p;
  }
}

async function dt(r, n) {
  let i = n.map(s => j(r, s) || "."), a = await it(Lt(), [ "-C", r, "--no-optional-locks", "status", "--porcelain", Rb, "--", ...i ], {
    env: As(),
    useCwd: !0
  });
  if (a.code !== 0) return [];
  return a.stdout.split(`\n`).map(s => s.slice(3).trim()).filter(s => s.length > 0);
}

async function mt(r, n) {
  let i = await it(Lt(), [ "-C", r, "tag", "-l", "--", n ], {
    env: As(),
    useCwd: !0
  });
  return i.code === 0 && i.stdout.trim() === n;
}

var gt = "^(tag\\.(gpgsign|forcesignannotated)|user\\.signingkey|gpg\\.(format|program)|gpg\\.(openpgp|x509|ssh)\\.program|gpg\\.ssh\\.defaultkeycommand)$", yt = [ [ "tag.gpgSign", "false" ], [ "tag.forceSignAnnotated", "false" ], [ "gpg.format", "openpgp" ], [ "gpg.program", "gpg" ], [ "gpg.x509.program", "gpgsm" ], [ "gpg.ssh.program", "ssh-keygen" ], [ "gpg.ssh.defaultKeyCommand", "" ] ];

var M = "<owner>/<repo>";

var xe = [ "Validate the folder that holds its marketplace.json", `to have ${M} filled in,`, "and the name its marketplace lists it under." ].join(" ");

import { join as vt } from "path";

function Pe({name: r, listing: n}) {
  let i = n !== void 0 && n.entry === void 0;
  return [ `This README has no line that installs "${r}"`, "from a marketplace.", ...i ? [ vt(n.root, ".claude-plugin", "marketplace.json"), "has no entry for it. Add one." ] : [], `${i ? "Then add" : "Add"} the install line,`, "which works in one step on Claude Code 2.1.275 or later." ].join(" ");
}

var ke = 128;

function L(r, n, i) {
  let a = r.get(n) ?? i(n);
  return r.set(n, a), a;
}

var ve = [ `In it, replace ${M}`, "with the repository that holds the marketplace." ].join(" ");

var H = 1024;

import { join as Ee } from "path";

var be = r => Jie(r) ? "" : yXe(r, "remote", "origin", "pushurl") || yXe(r, "remote", "origin", "url") || "";

function Ie({host: r, owner: n, name: i}) {
  let a = So(r), s = r.includes(":");
  return a ? `${n}/${i}` : s ? void 0 : `https://${r}/${n}/${i}.git`;
}

async function Re(r) {
  let n = Ee(r, ".git"), a = await $B(n) ? await rF(Ee(n, "config")).catch(() => {}) : void 0, s = be(a ?? ""), p = /^(https|ssh):\/\//i.test(s) || !s.includes("://") ? OC(s) : null;
  return p === null ? void 0 : Ie(p);
}

function G(r) {
  let n = r.split("").map(i => !"`'\"()<>[]*.,;:!?".includes(i));
  return r.slice(n.findIndex(Boolean), n.findLastIndex(Boolean) + 1);
}

var ne = (r, n) => r.byName.has(n) || r.bySource.has(G(n));

import { readdir as Ut } from "fs/promises";

import { join as je } from "path";

var Se = r => r.some((n, i) => n.startsWith("--marketplace=") ? /^--marketplace=[^<>]+$/.test(n) : n === "--marketplace" && /^[^-<>][^<>]*$/.test(r[i + 1] ?? ""));

var Ae = r => r.split(/\s+/).map(G).filter(n => n !== "");

var Ne = Object.freeze([ "--marketplace", "--scope", "-s", "--config", "--accept-command", "--registry" ]);

var Me = r => r.find((n, i) => !n.startsWith("-") && !Ne.includes(r[i - 1] ?? "")) ?? "";

function Ce(r) {
  let n = r.find(s => s.lastIndexOf("@") > 0) ?? "", i = n.indexOf("@");
  return i > 0 && n.length > i + 1 && !/[<>]/.test(n) ? n.slice(0, i) : "";
}

function Oe(r) {
  let n = r.split(`\n`).flatMap(i => i.split(/plugin[ \t]+(?:install|i)[ \t]+/).slice(1)).map(Ae);
  return {
    bySource: new Set(n.filter(Se).map(Me)),
    byName: new Set(n.map(Ce))
  };
}

async function oe(r) {
  let n = (await Ut(r, {
    withFileTypes: !0
  }).catch(() => [])).filter(f => f.isFile()).map(f => f.name).filter(f => /^readme(\.[a-z0-9.-]+)?$/i.test(f)), i = n.find(f => f.toLowerCase() === "readme.md") ?? n.toSorted()[0], a = i === void 0 ? void 0 : await rF(je(r, i)).catch(() => {});
  return i !== void 0 && a !== void 0 ? {
    file: je(r, i),
    installs: Oe(a)
  } : void 0;
}

async function Le({root: r, name: n, listing: i}, a) {
  let s = await L(a.readmes, r, oe), f = i?.entry !== void 0 && !ozt(i.root, r), p = f && i.marketplace.plugins.length === 1, c = s !== void 0 && !ne(s.installs, n), h = f && (p || c) ? await L(a.readmes, i.root, oe) : void 0;
  return [ s, h ].some(b => b !== void 0 && ne(b.installs, n)) ? void 0 : s ?? (p ? h : void 0);
}

async function $e(r, n) {
  let {name: i, listing: a} = r, f = i.length <= ke && Z0(i) ? await Le(r, n) : void 0;
  if (f === void 0) return [];
  let p = a === void 0, c = p ? void 0 : await L(n.sources, a.root, Re), h = p ? [ xe ] : c !== void 0 ? [] : [ ve ];
  return [ {
    file: Lg(f.file, H),
    message: Lg([ Pe(r), ...h ].join(" "), H),
    installLine: Lg(dwn({
      plugin: i,
      marketplaceSource: c ?? M
    }), H)
  } ];
}

function QUt(r) {
  return r.length === 0 ? [] : [ `${te.info} Advice (does not change the verdict):`, "", ...r.flatMap(i => [ `  ${te.pointer} ${i.file}: ${i.message}`, `      ${i.installLine}` ]), "" ];
}

var De = (r, n) => r.reduce(async (i, a) => [ ...await i, ...await $e(a, n) ], Promise.resolve([]));

import { basename as Jt, dirname as Ue, resolve as Qt } from "path";

import { join as Fe } from "path";

async function K(r, n) {
  let i = Fe(r, ".claude-plugin");
  return await $B(i) ? await rF(Fe(i, n)) ?? "" : "";
}

async function B(r) {
  try {
    let n = u({
      name: o()
    }).safeParse(Y(Mo(await K(r, "plugin.json"))));
    return n.success ? n.data.name : void 0;
  } catch {
    return;
  }
}

import { resolve as ie } from "path";

var Te = 64;

async function _e(r) {
  try {
    let n = Fin().safeParse(Y(Mo(await K(r, "marketplace.json"))));
    return n.success ? n.data : void 0;
  } catch {
    return;
  }
}

async function Ve(r) {
  let n = await _e(r), i = await Promise.all((n?.plugins ?? []).filter(p => typeof p.source === "string").slice(0, Te).map(async p => {
    let {source: c} = p;
    return n !== void 0 && typeof c === "string" && !c.split(/[\\/]/).includes("..") && await nO(r, ie(r, c)) === "ok" ? [ {
      root: ie(r, c),
      name: p.name,
      listing: {
        root: r,
        marketplace: n,
        entry: p
      }
    } ] : [];
  })), a = await B(r) ?? "", s = n?.plugins.find(p => e7n(p, r, {
    root: r,
    name: a
  }));
  return n !== void 0 && !i.flat().some(p => p.root === ie(r)) ? [ ...i.flat(), {
    root: r,
    name: s?.name ?? a,
    listing: {
      root: r,
      marketplace: n,
      entry: s
    }
  } ] : i.flat();
}

async function He(r, n, i) {
  let a = Ue(n?.filePath ?? ""), s = Ue(a), f = Jt(a) === ".claude-plugin" && [ n, ...i ].every(h => h?.errors.length === 0), p = f && n?.fileType === "plugin", m = f && n?.fileType === "marketplace" && ozt(Qt(r), s) ? await Ve(s) : [];
  return p ? [ {
    root: s,
    name: await B(s) ?? "",
    listing: void 0
  } ] : m;
}

function Ge(r) {
  return jt(r) ? t(`No install advice: ${l(r)}`) : d(r), [];
}

var ZUt = (r, n, i) => He(r, n, i).then(a => De(a, {
  readmes: new Map,
  sources: new Map
})).catch(Ge);

export { zC, yyt, ufn, GWe, Z6n, qUt, e3n, pfn, YUt, _1o, ffn, mfn, t3n, _$r, gfn, hfn, b$r, b1o, yfn, S1o, n3n, w1o, v1o, E1o, _fn, r3n, o3n, VEe, S$r, XUt, JUt, _yt, QUt, ZUt };
