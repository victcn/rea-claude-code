// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Me } from "./chunk-2v9tfgc3.js";

import { q, ke, Ir, he } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { i } from "./chunk-hedpgw9m.js";

import { se, t } from "./chunk-kawq2919.js";

import { kr, Dt, yl, le } from "./chunk-cqgvwwgb.js";

import { d } from "./chunk-6ah1819r.js";

import { ot } from "./chunk-fvcjfcfm.js";

import { pr, Lt } from "./chunk-9yajep3y.js";

import { ft } from "./chunk-zscnwzv2.js";

import { lS, cin, uin } from "./chunk-q6wab2jw.js";

import { dt } from "./chunk-dd98x6x7.js";

import { ce } from "./chunk-xywp7esx.js";

import { joe, L5e, Ylt } from "./chunk-4v78v8fd.js";

import { Ioe } from "./chunk-r8a304y3.js";

import { fes, qne, par, Qc, rno } from "./chunk-84yp45y8.js";

import { Ltt } from "./chunk-9b8r5zb0.js";

import { D } from "./chunk-hmqkrrtz.js";

import { we } from "./chunk-m8ez8fhk.js";

var S = we(joe(), 1);

import { statSync as G } from "fs";

import * as p from "path";

function L() {
  return {
    fileIndex: null,
    fileListRefreshPromise: null,
    cacheGeneration: 0,
    untrackedFetchPromise: null,
    cachedTrackedFiles: [],
    cachedConfigFiles: [],
    cachedTrackedDirs: [],
    ignorePatternsCache: null,
    ignorePatternsCacheKey: null,
    lastRefreshMs: 0,
    lastScanDurationMs: null,
    lastGitIndexMtime: null,
    loadedTrackedSignature: null,
    loadedMergedSignature: null,
    normalizedTrackedInputs: null,
    indexBuildComplete: Me(),
    indexBaseDir: null,
    indexLoadCount: 0
  };
}

var Khe = L();

function e6r(e) {
  e.fileIndex = null, e.fileListRefreshPromise = null, e.cacheGeneration++, e.untrackedFetchPromise = null, 
  e.cachedTrackedFiles = [], e.cachedConfigFiles = [], e.cachedTrackedDirs = [], e.ignorePatternsCache = null, 
  e.ignorePatternsCacheKey = null, e.lastRefreshMs = 0, e.lastScanDurationMs = null, 
  e.lastGitIndexMtime = null, e.loadedTrackedSignature = null, e.loadedMergedSignature = null, 
  e.normalizedTrackedInputs = null, e.indexBaseDir = null, e.indexLoadCount++;
}

function P(e, r, s, n) {
  let a = ++e.indexLoadCount, o = r.loadFromFileListAsync(s);
  return o.queryable.then(() => {
    if (e.indexLoadCount === a) e.indexBaseDir = n;
  }), o.done;
}

function v(e) {
  let r = e.length, s = Math.max(1, Math.floor(r / 500)), n = -2128831035;
  for (let a = 0; a < r; a += s) {
    let o = e[a];
    for (let g = 0; g < o.length; g++) n = (n ^ o.charCodeAt(g)) * 16777619 | 0;
    n = n * 16777619 | 0;
  }
  if (r > 0) {
    let a = e[r - 1];
    for (let o = 0; o < a.length; o++) n = (n ^ a.charCodeAt(o)) * 16777619 | 0;
  }
  return `${r}:${(n >>> 0).toString(16)}`;
}

function w(e, r) {
  return `${e}\0${v(r)}`;
}

function j() {
  let e = pr(le());
  if (!e) return null;
  try {
    return G(p.join(e, ".git", "index")).mtimeMs;
  } catch {
    return null;
  }
}

async function y(e, r, s) {
  if (s === r) return e;
  let n = Array(e.length), a = performance.now();
  for (let o = 0; o < e.length; o++) {
    let g = p.join(r, e[o]);
    if (n[o] = p.relative(s, g), (o & 255) === 255 && performance.now() - a > cin) await lS(), 
    a = performance.now();
  }
  return n;
}

async function B(e, r, s) {
  if (r.length === 0) return;
  if (!e.fileIndex) return;
  let n = await _(r);
  if (e.normalizedTrackedInputs?.cwd !== s) return;
  let a = [ ...e.cachedTrackedFiles, ...e.cachedConfigFiles, ...e.cachedTrackedDirs, ...r, ...n ], o = w(s, a);
  if (o === e.loadedMergedSignature) {
    t("[FileIndex] skipped index rebuild \u2014 merged paths unchanged");
    return;
  }
  if (await P(e, e.fileIndex, a, s)) e.loadedMergedSignature = o, t(`[FileIndex] rebuilt index with ${e.cachedTrackedFiles.length} tracked + ${r.length} untracked files`);
}

async function b(e, r, s) {
  let n = `${r}:${s}`;
  if (e.ignorePatternsCacheKey === n) return e.ignorePatternsCache;
  let a = se(), o = [ ".ignore", ".rgignore" ], g = D([ r, s ]), m = S.default(), u = !1, c = g.flatMap(x => o.map(F => p.join(x, F))), f = await Promise.all(c.map(x => a.readFile(x, {
    encoding: "utf8"
  }).catch(() => null)));
  for (let [x, F] of f.entries()) {
    if (F === null) continue;
    m.add(L5e(Ylt(F), "file_suggestions_ignore")), u = !0, t(`[FileIndex] loaded ignore patterns from ${c[x]}`);
  }
  let h = u ? m : null;
  return e.ignorePatternsCache = h, e.ignorePatternsCacheKey = n, h;
}

async function T(e, r) {
  let s = [], n = performance.now();
  for (let a = 0; a < r.length; a++) {
    let o = r[a];
    if (!S.default.isPathValid(o) || !e.ignores(o)) s.push(o);
    if ((a & 255) === 255 && performance.now() - n > cin) await lS(), n = performance.now();
  }
  return s;
}

async function A(e, r, s, n) {
  let a = Date.now(), o = e.cacheGeneration;
  t("[FileIndex] getFilesUsingGit called");
  let g = pr(n);
  if (!g) return t("[FileIndex] not a git repo, returning null"), null;
  try {
    let m = Date.now(), u = await ft(Lt(), [ "-c", "core.quotepath=false", "ls-files", "--recurse-submodules" ], {
      timeout: 5e3,
      abortSignal: r,
      cwd: g
    });
    if (t(`[FileIndex] git ls-files (tracked) took ${Date.now() - m}ms`), u.code !== 0) return t(`[FileIndex] git ls-files failed (code=${u.code}, stderr=${u.stderr}), falling back to ripgrep`), 
    null;
    let c = e.normalizedTrackedInputs, f, h = null;
    if (c !== null && c.repoRoot === g && c.cwd === n && c.rawStdout === u.stdout && e.cachedTrackedFiles.length > 0) f = e.cachedTrackedFiles, 
    t("[FileIndex] skipped path normalization \u2014 raw git paths unchanged"); else {
      let F = u.stdout.trim().split(`\n`).filter(Boolean);
      f = await y(F, g, n);
      let I = await b(e, g, n);
      if (I) {
        let R = f.length;
        f = await T(I, f), t(`[FileIndex] applied ignore patterns: ${R} -> ${f.length} files`);
      }
      h = {
        repoRoot: g,
        cwd: n,
        rawStdout: u.stdout
      };
    }
    if (o !== e.cacheGeneration) return t("[FileIndex] discarding refresh results \u2014 cache was reset mid-refresh"), 
    f;
    if (h !== null) e.normalizedTrackedInputs = h;
    e.cachedTrackedFiles = f;
    let x = Date.now() - a;
    return t(`[FileIndex] git ls-files: ${f.length} tracked files in ${x}ms`), i("tengu_file_suggestions_git_ls_files", {
      file_count: f.length,
      tracked_count: f.length,
      untracked_count: 0,
      duration_ms: x
    }), X(e, g, n, s), f;
  } catch (m) {
    return t(`[FileIndex] git ls-files error: ${l(m)}`), null;
  }
}

async function _(e) {
  let r = new Set, s = performance.now();
  for (let n = 0; n < e.length; n++) if (E(e, n, n + 1, r), (n & 255) === 255 && performance.now() - s > cin) await lS(), 
  s = performance.now();
  return [ ...r ].map(n => n + p.sep);
}

function E(e, r, s, n) {
  for (let a = r; a < s; a++) {
    let o = p.dirname(e[a]);
    while (o !== "." && !n.has(o)) {
      let g = p.dirname(o);
      if (g === o) break;
      n.add(o), o = g;
    }
  }
}

async function N(e, r) {
  return (await Promise.all(fes.map(n => qne(n, e, r)))).flatMap(n => n.map(a => a.filePath));
}

async function z(e, r, s, n) {
  t(`[FileIndex] getProjectFiles called, respectGitignore=${s}`);
  let a = await A(e, r, s, n);
  if (a !== null) return t(`[FileIndex] using git ls-files result (${a.length} files)`), 
  a;
  t("[FileIndex] git ls-files returned null, falling back to ripgrep"), e.normalizedTrackedInputs = null;
  let o = Date.now(), g = null, m;
  {
    let f = [ "--files", "--follow", "--hidden", "--glob", "!.git/", "--glob", "!.svn/", "--glob", "!.hg/", "--glob", "!.bzr/", "--glob", "!.jj/", "--glob", "!.sl/" ];
    if (!s) f.push("--no-ignore-vcs");
    m = await Ioe(f, n, r, {
      searchOtherAppsData: !0
    });
  }
  let u = m.map(f => p.relative(n, f)), c = Date.now() - o;
  return t(`[FileIndex] ripgrep: ${u.length} files in ${c}ms`), i("tengu_file_suggestions_ripgrep", {
    file_count: u.length,
    duration_ms: c
  }), u;
}

async function O(e, r) {
  let s = AbortSignal.timeout(1e4), n = e.fileIndex ??= new uin;
  try {
    let a = dt(), o = ce(), g = a.respectGitignore ?? o.respectGitignore ?? !0, m = le(), [u, c] = await Promise.all([ z(e, s, g, m), N(m, r) ]);
    e.cachedConfigFiles = c;
    let f = [ ...u, ...c ], h = await _(f);
    e.cachedTrackedDirs = h;
    let x = [ ...h, ...f ], F = w(m, x);
    if (F !== e.loadedTrackedSignature) {
      if (await P(e, n, x, m)) e.loadedTrackedSignature = F, e.loadedMergedSignature = null;
    } else t("[FileIndex] skipped index rebuild \u2014 tracked paths unchanged");
  } catch (a) {
    t(`[FileIndex] getPathsForSuggestions failed: ${l(a)}`, {
      level: "error"
    });
  }
  return n;
}

function K(e, r) {
  let s = Math.min(e.length, r.length), n = 0;
  while (n < s && e[n] === r[n]) n++;
  return e.substring(0, n);
}

function t6r(e) {
  if (e.length === 0) return "";
  let r = e.map(n => n.displayText), s = r[0];
  for (let n = 1; n < r.length; n++) {
    let a = r[n];
    if (s = K(s, a), s === "") return "";
  }
  return s;
}

function C(e, r) {
  return {
    id: `file-${e}`,
    displayText: e,
    metadata: r !== void 0 ? {
      score: r
    } : void 0
  };
}

function k(e) {
  let r = e.slice(0, Ltt);
  return r.map((s, n) => C(s, n / Math.max(r.length, 1)));
}

var U = 5e3, W = 1e3;

function wkn(e, r) {
  if (e.fileListRefreshPromise || he()) return;
  let s = j();
  if (e.fileIndex) {
    if (s === null && e.lastRefreshMs > 0 && e.lastScanDurationMs !== null && e.lastScanDurationMs > W) return;
    if (!(s !== null && s !== e.lastGitIndexMtime) && Date.now() - e.lastRefreshMs < U) return;
  }
  let n = e.cacheGeneration, a = Date.now();
  e.fileIndex ??= new uin, e.fileListRefreshPromise = O(e, r).then(o => {
    if (n !== e.cacheGeneration) return o;
    e.fileListRefreshPromise = null, e.indexBuildComplete.emit(), e.lastGitIndexMtime = s;
    let g = Date.now();
    return e.lastRefreshMs = g, e.lastScanDurationMs = g - a, t(`[FileIndex] cache refresh completed in ${e.lastScanDurationMs}ms`), 
    o;
  }).catch(o => {
    if (t(`[FileIndex] Cache refresh failed: ${l(o)}`), d(o), n === e.cacheGeneration) e.fileListRefreshPromise = null;
    return e.fileIndex ??= new uin;
  });
}

async function H(e) {
  let r = se();
  try {
    return (await r.readdir(e)).map(n => {
      let a = p.join(e, n.name), o = p.relative(e, a);
      return n.isDirectory() ? o + p.sep : o;
    });
  } catch (s) {
    return t(`[FileSuggestions] readdir failed for cwd: ${l(s)}`, {
      level: "error"
    }), [];
  }
}

async function cKt(e, r, s = !1, n) {
  let {items: a} = await pjs(e, r, s, n);
  return a;
}

async function pjs(e, r, s, n, a = !0) {
  if (he()) return {
    items: [],
    baseDir: void 0
  };
  if (Dt()) {
    if (!r && !s) return {
      items: [],
      baseDir: void 0
    };
    return {
      items: await V(r),
      baseDir: void 0
    };
  }
  let o = le();
  if (!r && !s) return {
    items: [],
    baseDir: o
  };
  if ((a ? par(dt().fileSuggestion) : void 0)?.type === "command") {
    let u = {
      id: q(),
      project: {
        originalCwd: ke(),
        projectRoot: Ir()
      }
    }, c = {
      ...Qc(u, o),
      query: r
    }, f = await rno(u, c);
    return {
      items: k(f),
      baseDir: o
    };
  }
  if (r === "" || r === "." || r === "./") {
    let u = await H(o);
    return wkn(e, n), {
      items: k(u),
      baseDir: o
    };
  }
  let m = Date.now();
  try {
    let u = e.fileListRefreshPromise !== null;
    wkn(e, n);
    let c = r, f = "." + p.sep;
    if (r.startsWith(f)) c = r.substring(2);
    if (c.startsWith("~")) c = ot(c);
    let h = e.fileIndex ? e.fileIndex.search(c, Ltt).map(I => C(I.path, I.score)) : [], x = e.indexBaseDir ?? o, F = Date.now() - m;
    return t(`[FileIndex] generateFileSuggestions: ${h.length} results in ${F}ms (${u ? "partial" : "full"} index)`), 
    i("tengu_file_suggestions_query", {
      duration_ms: F,
      cache_hit: !u,
      result_count: h.length,
      query_length: r.length
    }), {
      items: h,
      baseDir: x
    };
  } catch (u) {
    return d(u), {
      items: [],
      baseDir: o
    };
  }
}

async function V(e) {
  let r = kr();
  if (!r || !yl()) return [];
  try {
    return (await r.sendControlRequest({
      subtype: "file_suggestions",
      query: e
    })).suggestions.map(n => C(n.path, n.score));
  } catch (s) {
    return t(`[FileIndex] remote file_suggestions RPC failed: ${l(s)}`), [];
  }
}

function vkn({suggestion: e, input: r, partialPath: s, startPos: n, onInputChange: a, setCursorOffset: o}) {
  let g = typeof e === "string" ? e : e.displayText, m = r.substring(0, n) + g + r.substring(n + s.length);
  a(m);
  let u = n + g.length;
  return o(u), m;
}

function X(e, r, s, n) {
  if (e.untrackedFetchPromise) return;
  let a = n ? [ "-c", "core.quotepath=false", "ls-files", "--others", "--exclude-standard" ] : [ "-c", "core.quotepath=false", "ls-files", "--others" ], o = e.cacheGeneration;
  e.untrackedFetchPromise = ft(Lt(), a, {
    timeout: 1e4,
    cwd: r
  }).then(async g => {
    if (o !== e.cacheGeneration) return;
    if (g.code !== 0) return;
    let m = g.stdout.trim().split(`\n`).filter(Boolean), u = await y(m, r, s), c = await b(e, r, s);
    if (c && u.length > 0) {
      let f = u.length;
      u = await T(c, u), t(`[FileIndex] applied ignore patterns to untracked: ${f} -> ${u.length} files`);
    }
    return t(`[FileIndex] background untracked fetch: ${u.length} files`), B(e, u, s);
  }).catch(g => {
    t(`[FileIndex] background untracked fetch failed: ${g}`);
  }).finally(() => {
    e.untrackedFetchPromise = null;
  });
}

export { Khe, e6r, t6r, wkn, cKt, pjs, vkn };
