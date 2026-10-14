// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { MV } from "./chunk-nmecgx1t.js";

import { l, W } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { xn, As, aje, Aj, it, ft } from "./chunk-zscnwzv2.js";

import { Ak, Van, Lt } from "./chunk-9yajep3y.js";

import { gs } from "./chunk-qqd24q2y.js";

import { _8t, Q_e, pNe, lmr, w8t, AMn, v8t, VCt, k8t, umr, pmr, RCe } from "./chunk-bkx9v5fh.js";

import { pz, Yi } from "./chunk-4v78v8fd.js";

import { Qk } from "./chunk-r8a304y3.js";

import { d6n, ypn } from "./chunk-25gpymxv.js";

import { QBt } from "./chunk-mrrs7m2f.js";

import { H4o } from "./chunk-wfsscsnw.js";

import { u0, p0 } from "./chunk-sqb9meyh.js";

import { O } from "./chunk-1xnsr4dy.js";

import { createHash as tt } from "crypto";

import { constants as nt } from "fs";

import { open as rt, realpath as N } from "fs/promises";

import { basename as Ee, dirname as ye, join as M } from "path";

import { constants as F } from "fs";

import { lstat as ue, mkdir as K, mkdtemp as Ae, open as le, opendir as X, rm as Oe, writeFile as Ie } from "fs/promises";

import { tmpdir as Fe } from "os";

import { join as m } from "path";

var xe = 65536, ae = 1e6, Ge = 33554432, Me = 65536, Ne = 65536, Be = 1e6, Le = 67108864, Ce = 256, He = 2e4, We = 4096, $e = [ [ "core.commitGraph", "false" ], [ "core.multiPackIndex", "false" ] ], de = {
  disposition: "skip"
}, fe = new Map([ [ "config", {
  disposition: "copy",
  kind: "file",
  maxBytes: ae
} ], [ "config.worktree", {
  disposition: "copy",
  kind: "file",
  maxBytes: ae
} ], [ "HEAD", {
  disposition: "copy",
  kind: "file",
  maxBytes: xe
} ], [ "packed-refs", {
  disposition: "copy",
  kind: "file",
  maxBytes: Ge
} ], [ "shallow", {
  disposition: "copy",
  kind: "file",
  maxBytes: Ne
} ], [ "refs", {
  disposition: "copy",
  kind: "dir",
  maxFileBytes: Me,
  entries: "all"
} ], [ "info", {
  disposition: "copy",
  kind: "dir",
  maxFileBytes: Be,
  entries: new Set([ "exclude", "attributes", "sparse-checkout", "grafts" ])
} ], [ "objects", {
  disposition: "in-place",
  kind: "dir"
} ], [ "index", {
  disposition: "in-place",
  kind: "file"
} ], [ "commondir", {
  disposition: "refuse"
} ], [ "gitdir", {
  disposition: "refuse"
} ], [ "reftable", {
  disposition: "refuse"
} ], ...[ "hooks", "logs", "branches", "remotes", "FETCH_HEAD", "ORIG_HEAD", "MERGE_HEAD", "AUTO_MERGE", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD", "MERGE_AUTOSTASH", "COMMIT_EDITMSG", "MERGE_MSG", "MERGE_MODE", "MERGE_RR", "SQUASH_MSG", "TAG_EDITMSG", "rebase-merge", "rebase-apply", "sequencer", "rr-cache", "worktrees", "modules", "lfs", "gc.log", "gc.pid", "description", "gitk.cache" ].map(e => [ e, de ]) ]), ze = /^(?:BISECT_[A-Z_]+|fsmonitor--daemon.*|.+\.lock)$/;

function Ue(e) {
  return fe.get(e) ?? (ze.test(e) ? de : void 0);
}

var je = [ /^(?:commit|tag|pull|push|rebase|init|advice|color|column|help|status|fetch|user|branch)\..+$/, /^core\.(?:repositoryformatversion|filemode|bare|logallrefupdates|ignorecase|precomposeunicode|symlinks|autocrlf|eol|safecrlf|longpaths|sparsecheckout|sparsecheckoutcone|quotepath|abbrev|checkstat|trustctime|untrackedcache)$/, /^remote\..+\.(?:url|pushurl|fetch|promisor|partialclonefilter|tagopt|prune|mirror|gh-resolved)$/, /^submodule\.active$/, /^submodule\..+\.(?:active|branch|url)$/, /^http\.(?:.+\.)?extraheader$/, /^maintenance\..+$/, /^(?:extensions\.(?:objectformat|partialclone|worktreeconfig)|lfs\.repositoryformatversion)$/ ], Ke = new Set([ "checkout", "rebase", "merge", "none" ]);

async function pe(e) {
  let n = v8t(e);
  if (n === null || n.workTree === null) return null;
  let {gitDir: r, workTree: s} = n, i;
  try {
    let o = await Ye(r);
    if (typeof o === "string") return x(o);
    let c = await Je(m(r, "objects"));
    if (c !== void 0) return x(c);
    i = await Ae(m(Fe(), "ccdiff-"));
    let a = i, u = await qe(r, a, o) ?? await Ve(a, o.has("config.worktree"));
    if (u !== void 0) return await j(a), x(u);
    return {
      spawn: Xe(a, r, s),
      dispose: () => j(a)
    };
  } catch (o) {
    if (i !== void 0) await j(i);
    return x(`unexpected error (${l(o)})`);
  }
}

async function j(e) {
  await Oe(e, {
    recursive: !0,
    force: !0
  }).catch(() => {});
}

function x(e) {
  return t(`workspace diff: discovered repository refused (${e})`, {
    level: "warn"
  }), null;
}

function me() {
  return [ ...aje(), ...$e ];
}

function Xe(e, n, r) {
  return {
    env: {
      ...As(Q_e, {
        base: gs(),
        repository: {
          gitDir: e,
          workTree: r,
          commonDir: e
        }
      }),
      ..._8t,
      ...Aj(void 0, me()),
      GIT_OBJECT_DIRECTORY: m(n, "objects"),
      GIT_INDEX_FILE: m(n, "index")
    },
    extendEnv: !1
  };
}

async function Ye(e) {
  let n = new Set, r = 0;
  for await (let s of await X(e)) {
    if (++r > Ce) return "oversized .git";
    let i = Ue(s.name);
    if (i === void 0) return "unknown .git entry";
    switch (i.disposition) {
     case "skip":
      continue;

     case "refuse":
      return `.git/${s.name}`;

     case "copy":
     case "in-place":
      if (s.name === "index") {
        let o = await ue(m(e, s.name));
        if (!o.isFile() || o.nlink > 1) return "symlinked, hardlinked or unexpected .git/index";
      } else if (await Y(e, s) !== i.kind) return `symlinked or unexpected .git/${s.name}`;
      n.add(s.name);
    }
  }
  if (!n.has("config") || !n.has("HEAD")) return "no .git/config or .git/HEAD";
  return n;
}

async function Je(e) {
  for (let n of [ e, m(e, "pack"), m(e, "info") ]) if (!await Qe(n)) return "symlinked or oversized .git/objects entry";
  if (await et(m(e, "info", "alternates"))) return ".git/objects/info/alternates";
  return;
}

async function qe(e, n, r) {
  await K(m(n, "refs"), {
    recursive: !0
  });
  let s = {
    entries: 0,
    bytes: 0
  };
  for (let [i, o] of fe) {
    if (o.disposition !== "copy" || !r.has(i)) continue;
    let c = m(e, i), a = m(n, i);
    if (o.kind === "file") {
      if (await we(c, a, o.maxBytes, s) !== "copied") return `unreadable, linked or oversized .git/${i}`;
      continue;
    }
    if (await K(a, {
      recursive: !0
    }), !await ge(c, a, o.maxFileBytes, s, o.entries)) return `unreadable, linked or oversized entry under .git/${i}`;
  }
  return;
}

async function Ve(e, n) {
  let r = new Set(me().map(([i]) => i.toLowerCase())), s = n ? [ "config", "config.worktree" ] : [ "config" ];
  for (let i of s) {
    let o = await it(Lt(), [ "config", "--file", m(e, i), "--no-includes", "-z", "--list" ], {
      timeout: pNe,
      maxBuffer: 4e6,
      env: {
        ...As(Q_e, {
          base: gs()
        }),
        ..._8t
      },
      extendEnv: !1,
      stdin: "ignore"
    });
    if (o.code !== 0) return `config ${i} unlistable`;
    for (let c of o.stdout.split("\0")) {
      if (c === "") continue;
      let a = c.indexOf(`\n`), u = a === -1 ? c : c.slice(0, a), d = a === -1 ? "" : c.slice(a + 1);
      if (d.includes(`\n`)) return `multi-line value for ${ce(u)}`;
      if (!Ze(u, d, r)) return `config entry ${ce(u)}`;
    }
  }
  return;
}

function Ze(e, n, r) {
  if (e === "extensions.refstorage") return n === "files";
  if (/^submodule\..+\.update$/.test(e)) return Ke.has(n);
  return r.has(e) || je.some(s => s.test(e));
}

function ce(e) {
  let n = e.split(".");
  return n.length <= 2 ? e : `${n[0]}.<...>.${n.at(-1)}`;
}

async function ge(e, n, r, s, i) {
  let o;
  try {
    o = await X(e);
  } catch (c) {
    return W(c);
  }
  for await (let c of o) {
    if (++s.entries > He) return !1;
    if (i !== "all" && !i.has(c.name)) continue;
    let a = m(e, c.name), u = m(n, c.name), d = await Y(e, c);
    if (d === "dir" && i === "all") {
      if (await K(u, {
        recursive: !0
      }), !await ge(a, u, r, s, "all")) return !1;
    } else if (d === "file") {
      if (await we(a, u, r, s) !== "copied") return !1;
    } else return !1;
  }
  return !0;
}

async function Y(e, n) {
  if (n.isSymbolicLink()) return "reject";
  if (n.isDirectory()) return "dir";
  if (n.isFile()) return "file";
  try {
    let r = await ue(m(e, n.name));
    return r.isSymbolicLink() ? "reject" : r.isDirectory() ? "dir" : r.isFile() ? "file" : "reject";
  } catch {
    return "reject";
  }
}

async function Qe(e) {
  let n;
  try {
    n = await X(e);
  } catch (s) {
    return W(s);
  }
  let r = 0;
  for await (let s of n) if (++r > We || await Y(e, s) === "reject") return !1;
  return !0;
}

function he() {
  return O() === "windows" ? F.O_RDONLY : F.O_RDONLY | F.O_NONBLOCK | F.O_NOFOLLOW;
}

async function we(e, n, r, s) {
  let i;
  try {
    i = await le(e, he());
  } catch (o) {
    return W(o) ? "absent" : "refused";
  }
  try {
    let o = await i.stat();
    if (!o.isFile() || o.nlink > 1 || o.size > r) return "refused";
    if (s.bytes += o.size, s.bytes > Le) return "refused";
    let c = Buffer.alloc(o.size), a = 0;
    while (a < o.size) {
      let {bytesRead: u} = await i.read(c, a, o.size - a, a);
      if (u === 0) break;
      a += u;
    }
    if (a !== o.size) return "refused";
    return await Ie(n, c), "copied";
  } catch {
    return "refused";
  } finally {
    await i.close().catch(() => {});
  }
}

async function et(e) {
  let n;
  try {
    n = await le(e, he());
  } catch (r) {
    return !W(r);
  }
  try {
    let r = await n.stat();
    return !r.isFile() || r.size > 0;
  } finally {
    await n.close().catch(() => {});
  }
}

async function st(e) {
  let n = ye(e), r = [ Ee(e) ];
  for (let s = 0; s < 64; s++) {
    try {
      let o = await N(n);
      return M(o, ...r);
    } catch (o) {
      if (o?.code !== "ENOENT") return;
    }
    let i = ye(n);
    if (i === n) return;
    r.unshift(Ee(n)), n = i;
  }
  return;
}

var ot = 2e6, at = new Set([ "100644", "100755", "100664" ]), J = 1e7, ct = 1e4, ut = {
  perFileMs: 5e3,
  totalMs: 1e4
}, lt = d6n | (nt.O_NOFOLLOW ?? 0);

function ke(e) {
  if (e.length === 0 || e.startsWith('"')) return !1;
  if (/[\u0000-\u001f\u007f\uFFFD]/.test(e)) return !1;
  if (e.startsWith("-") || e.startsWith(":") || e.includes(" => ") || e.includes("\\") || !umr(e)) return !1;
  return e.split("/").every(n => n !== "" && pz(n) !== ".");
}

function G(e) {
  if (!pmr.test(e)) return e;
  let n = e.length > 1 && e.startsWith('"') && e.endsWith('"') && !e.includes('" => ');
  return H4o(n ? RCe(e.slice(1, -1)) : e);
}

var Re = /^[0-9a-f]{40,64}$/;

function D(e) {
  return [ "--literal-pathspecs", ...xn, ...e ];
}

function P(e, n) {
  return {
    ...n,
    cwd: e,
    timeout: pNe,
    preserveOutputOnError: !1
  };
}

async function dt(e, n, r, s) {
  let {stdout: i, code: o} = await ft(Lt(), D([ "ls-tree", "-r", "-l", "-z", "--full-tree", n, "--", ...r ]), {
    ...P(e, s),
    maxBuffer: 1e7
  });
  if (o !== 0) return null;
  let c = new Map;
  for (let a of i.split("\0")) {
    if (!a) continue;
    let u = a.match(/^(\d{6}) (\S+) ([0-9a-f]{40,64}) +(\d+|-)\t(.+)$/s);
    if (!u) continue;
    let [, d = "", h, g = "", k, b] = u;
    if (b === void 0) continue;
    c.set(b, {
      mode: d,
      oid: g,
      size: h === "blob" && k !== "-" ? Number(k) : -1
    });
  }
  return c;
}

async function pt(e, n, r) {
  let {stdout: s, code: i} = await ft(Lt(), D([ "ls-files", "--stage", "-v", "-z", "--", ...n ]), {
    ...P(e, r),
    maxBuffer: 1e7
  });
  if (i !== 0) return null;
  let o = new Map;
  for (let c of s.split("\0")) {
    let a = c.match(/^(\S) (\d{6}) ([0-9a-f]{40,64}) (\d)\t(.+)$/s);
    if (!a) continue;
    let [, u = "", , d = "", h, g = ""] = a;
    o.set(g, {
      entryIsNewSide: h === "0" && (u === "S" || /[a-z]/.test(u)),
      oid: d
    });
  }
  return o;
}

function Se(e, n) {
  let r = Buffer.from(e, "utf-8");
  return tt(n.length === 64 ? "sha256" : "sha1").update(`blob ${r.length}\0`).update(r).digest("hex");
}

function mt(e, n) {
  if (Se(e, n) === n) return e;
  if (!e.includes(`\r\n`)) return null;
  let r = e.replaceAll(`\r\n`, `\n`);
  return Se(r, n) === n ? r : null;
}

async function gt(e, n, r) {
  if (!Re.test(n)) return null;
  let {stdout: s, code: i} = await ft(Lt(), D([ "cat-file", "blob", n ]), {
    ...P(e, r),
    maxBuffer: J + 65536,
    stripFinalNewline: !1
  });
  return i === 0 ? s : null;
}

async function ht(e, n, r) {
  let s;
  try {
    s = await rt(e, lt);
  } catch (i) {
    return i?.code === "ENOENT" ? {
      kind: "missing"
    } : {
      kind: "restricted"
    };
  }
  try {
    let i = await s.stat({
      bigint: !0
    });
    if (!i.isFile()) return {
      kind: "not-regular-file"
    };
    if (i.nlink !== 1n || i.dev === 0n || i.ino === 0n) return {
      kind: "restricted"
    };
    let o;
    try {
      o = await N(e);
    } catch {
      return {
        kind: "restricted"
      };
    }
    let c = await Van(s, i, o);
    if (c === void 0) return {
      kind: "restricted"
    };
    if (o = c, !Qk(o, r, "read").allowed || Yi(o, r, "read", "ask") !== null) return {
      kind: "restricted"
    };
    if (p0(o, r.trustedNetworkDirectories) !== void 0) return {
      kind: "restricted"
    };
    if (!await ypn(o, r)) return {
      kind: "restricted"
    };
    if (o !== n) return {
      kind: "off-path"
    };
    let a = await Ak(s, J, i.size);
    if (a.overLimit) return {
      kind: "too-large"
    };
    return {
      kind: "ok",
      content: a.bytes.toString("utf-8")
    };
  } catch {
    return {
      kind: "restricted"
    };
  } finally {
    await s.close().catch(() => {});
  }
}

async function _e(e, n) {
  let r;
  try {
    r = await N(e);
  } catch (s) {
    r = s?.code === "ENOENT" ? await st(e) : void 0;
  }
  return r !== void 0 && p0(r, n.trustedNetworkDirectories) === void 0 && await ypn(r, n);
}

async function wt(e, n, r) {
  let {stdout: s, code: i} = await ft(Lt(), D([ "check-attr", "-z", "-a", "--", ...n ]), {
    ...P(e, r),
    maxBuffer: 1e7
  });
  if (i !== 0) return null;
  let o = new Map(n.map(a => [ a, {
    text: "unspecified",
    eol: "unspecified",
    converted: !1
  } ])), c = s.split("\0");
  for (let a = 0; a + 2 < c.length; a += 3) {
    let u = c[a], d = c[a + 1], h = c[a + 2];
    if (u === void 0 || d === void 0 || h === void 0) continue;
    let g = o.get(u);
    if (!g) continue;
    if (d === "text") g.text = h; else if (d === "eol") g.eol = h; else if (d === "filter" || d === "working-tree-encoding") g.converted = !0;
  }
  return o;
}

async function Et(e, n) {
  let {stdout: r, exitCode: s} = await ft(Lt(), D([ "config", "--get", "core.autocrlf" ]), P(e, n));
  if (s !== 0) return !1;
  let i = r.trim().toLowerCase();
  return i === "true" ? "true" : i === "input" ? "input" : !1;
}

function yt(e) {
  return e.slice(0, 8e3).includes("\0");
}

function kt(e, n, r, s) {
  if (!n || n.converted) return "unsupported";
  if (n.text === "unset") return e;
  let i;
  if (n.text === "set") i = !1; else if (n.text === "auto") i = !0; else if (n.text === "unspecified") if (r === "true" || r === "input") i = !0; else if (n.eol === "crlf" || n.eol === "lf") i = !0; else return e; else return e;
  if (!e.includes(`\r\n`)) return e;
  if (i && (yt(e) || s.includes(`\r\n`))) return e;
  return e.replaceAll(`\r\n`, `\n`);
}

function St(e, n, r) {
  let s = MV("a", "b", e, n, "", "", {
    context: 3,
    maxEditLength: ct,
    timeout: r
  });
  if (!s) return null;
  return s.hunks.map(i => ({
    oldStart: i.oldStart,
    oldLines: i.oldLines,
    newStart: i.newStart,
    newLines: i.newLines,
    lines: i.lines.filter(o => !o.startsWith("\\"))
  })).filter(i => i.lines.length > 0);
}

function _t(e) {
  let n = w8t, r = [];
  for (let s of e) {
    if (n <= 0) break;
    let i = s.lines.slice(0, n);
    n -= i.length, r.push({
      ...s,
      lines: i
    });
  }
  return r;
}

async function INr(e, n, r = ut) {
  let s = await QBt();
  if (s === null) return {
    diff: null
  };
  let i = s.nested ? s.root : null, o = i === null ? null : await pe(i);
  if (i !== null && o === null) return {
    diff: null
  };
  try {
    return await Rt(e, n, r, s.root, i, o?.spawn);
  } finally {
    await (o?.dispose());
  }
}

async function Rt(e, n, r, s, i, o) {
  let c = i ?? void 0, a = o ?? {}, u = await AMn(e, void 0, "branch-point", c, o);
  if (u === null) return {
    diff: null
  };
  let d = i ?? await k8t();
  if (d === null || d !== s) return {
    diff: null
  };
  let h = VCt(u), g = f => ({
    diff: {
      stats: u.stats,
      perFileStats: Array.from(u.perFileStats, ([p, E]) => ({
        path: G(p),
        ...E
      })),
      hunks: f.hunks.map(p => ({
        ...p,
        path: G(p.path)
      })),
      skippedLarge: f.skippedLarge.map(G),
      restricted: f.restricted.map(G),
      source: u.source
    }
  }), k = [];
  for (let [f, p] of u.perFileStats) {
    let E = p.newPath ?? f, v = p.previousPath ?? E;
    if (p.status === void 0 || p.isUntracked || p.isBinary || !ke(v) || !ke(E)) continue;
    k.push({
      key: f,
      oldPath: v,
      newPath: E,
      removed: p.status === "removed"
    });
  }
  if (k.length === 0) return g({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let b = h === "--cached";
  if (!b && h !== "HEAD" && !Re.test(h)) return g({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let q = k.map(f => f.newPath), [V, Z] = await Promise.all([ b ? new Map : dt(d, h, k.map(f => f.oldPath), a), pt(d, q, a) ]);
  if (V === null || Z === null) return g({
    hunks: [],
    skippedLarge: [],
    restricted: []
  });
  let Q;
  try {
    Q = await N(d);
  } catch {
    return g({
      hunks: [],
      skippedLarge: [],
      restricted: []
    });
  }
  let be = await wt(d, q, a), Te = await Et(d, a), R = [], _ = [], ee = [], te = ot, B = r.totalMs;
  for (let {key: f, oldPath: p, newPath: E, removed: v} of k) {
    await new Promise(w => setImmediate(w));
    let ne = M(d, E), L = M(d, p), A = [];
    for (let w of new Set([ ne, L ])) {
      let I = u0(w, w, n.trustedNetworkDirectories);
      if (!I.ok) {
        A = null;
        break;
      }
      A.push(...I.pathsToCheck);
    }
    if (A === null) {
      _.push(f);
      continue;
    }
    if (!A.every(w => Qk(w, n, "read").allowed && Yi(w, n, "read", "ask") === null)) {
      _.push(f);
      continue;
    }
    let y = V.get(p);
    if (y && !at.has(y.mode)) continue;
    if (y && (y.size < 0 || y.size > J)) {
      R.push(f);
      continue;
    }
    let C = null, T = Z.get(E);
    if (T === void 0 && !y) {
      _.push(f);
      continue;
    }
    let S = v || T === void 0 ? {
      kind: "missing"
    } : await ht(ne, M(Q, E), n);
    if (S.kind === "restricted") {
      _.push(f);
      continue;
    }
    if (S.kind === "not-regular-file" || S.kind === "off-path") continue;
    if (S.kind === "too-large") {
      R.push(f);
      continue;
    }
    let ie = T?.entryIsNewSide && S.kind === "ok" ? mt(S.content, T.oid) : null;
    if (T?.entryIsNewSide && ie === null) continue;
    if (S.kind === "missing") {
      if (!y) continue;
      if (!await _e(L, n)) {
        _.push(f);
        continue;
      }
    } else if (C = S.content, y && p !== E && !await _e(L, n)) {
      _.push(f);
      continue;
    }
    if (B <= 0) {
      R.push(f);
      continue;
    }
    let re = y ? await gt(d, y.oid, a) : "";
    if (re === null) continue;
    let se = re, H;
    if (C === null) H = ""; else {
      let w = kt(C, be?.get(E), Te, se);
      if (w === "unsupported") continue;
      H = ie ?? w;
    }
    let De = Date.now(), oe = St(se, H, Math.min(r.perFileMs, B));
    if (B -= Date.now() - De, oe === null) {
      R.push(f);
      continue;
    }
    let z = _t(oe);
    if (z.length === 0) continue;
    let U = z.reduce((w, I) => w + I.lines.reduce((Pe, ve) => Pe + ve.length + 1, 0), 0);
    if (U > lmr || U > te) {
      R.push(f);
      continue;
    }
    te -= U, ee.push({
      path: f,
      hunks: z
    });
  }
  return g({
    hunks: ee,
    skippedLarge: R,
    restricted: _
  });
}

export { INr };
