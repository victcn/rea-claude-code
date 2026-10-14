// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { x, l, E, W } from "./chunk-b0z4bv3v.js";

import { Li } from "./chunk-ddr690nj.js";

import { xf, t } from "./chunk-kawq2919.js";

import { pI, Jan, rL, Lt } from "./chunk-9yajep3y.js";

import { a } from "./chunk-j016gcgm.js";

import { Zs, TXe } from "./chunk-rgd61mm3.js";

import { xn, As, ft } from "./chunk-zscnwzv2.js";

import { rp, Zvr, Sd, G8, Ydt, tMt, IN, xyo, Pyo } from "./chunk-j31ahx42.js";

import { O } from "./chunk-1xnsr4dy.js";

import { Ue } from "./chunk-nvz3jsgg.js";

var le = String.raw`'([^']*)'(?:(=)(?:'([^']*)')?)?`, bt = new RegExp(String.raw`^(?:${le}(?:[ \t\r\n]+${le})*)?[ \t\r\n]*$`);

function Smr(e = process.env) {
  let n = [], i = e.GIT_CONFIG_COUNT;
  if (i !== void 0) {
    if (!/^\d{1,3}$/.test(i)) return {};
    for (let c = 0; c < Number(i); c++) {
      let u = e[`GIT_CONFIG_KEY_${c}`], d = e[`GIT_CONFIG_VALUE_${c}`];
      if (u === void 0 || d === void 0) return {};
      n.push([ u, d ]);
    }
  }
  let r = e.GIT_CONFIG_PARAMETERS;
  if (r !== void 0 && bt.test(r)) for (let [, c = "", u, d = ""] of r.matchAll(new RegExp(le, "g"))) {
    let w = u === void 0 ? c.indexOf("=") : -1;
    n.push(u !== void 0 || w === -1 ? [ c, d ] : [ c.slice(0, w), c.slice(w + 1) ]);
  }
  let o = {}, s = 0;
  for (let [c, u] of n) if (c.toLowerCase() === "safe.directory") o[`GIT_CONFIG_KEY_${s}`] = "safe.directory", 
  o[`GIT_CONFIG_VALUE_${s}`] = u, s++;
  if (s === 0) return {};
  return o.GIT_CONFIG_COUNT = String(s), o;
}

import { constants as K } from "fs";

import { lstat as Me, open as he, realpath as ne, stat as Pt } from "fs/promises";

import { basename as be, dirname as B, isAbsolute as Rt, join as G, normalize as re, parse as me, relative as xe, resolve as We, sep as Fe } from "path";

import { lstat as C, readdir as Oe, readlink as Ne, realpath as ue, stat as ce } from "fs/promises";

import { dirname as vt, isAbsolute as de, join as N, normalize as Q, relative as Et, resolve as ee, sep as Z } from "path";

var Re = 65536, $t = 4096, Tt = (e, n) => ft(Lt(), e, n);

async function Wst(e, {dotGitLink: n = "refuse", run: i = Tt} = {}) {
  let r = (p, v) => (t(`Could not vet the worktree registrations of ${e}: ${v}`, {
    level: "warn"
  }), {
    skipped: p,
    why: v
  }), o = O() === "windows", s = async p => {
    let v = await Ne(p).then(() => "link", b => E(b) === "EINVAL" ? "clear" : W(b) ? "missing" : "unknown");
    if (v !== "missing") return v;
    return await Pyo(p) ? "missing" : "unknown";
  }, c = N(e, ".git"), u = await IN(c, e), d, w;
  if (u === "clear") {
    let [p, v] = await Promise.all([ C(c).catch(() => null), ce(e).then(b => b, b => W(b) ? null : void 0) ]);
    if (v === null) return r("gone", "the repository root is gone");
    if (v === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (p === null) return r("unvettable", ".git vanished");
    if (!p.isDirectory()) return r("pointer", ".git is not a real directory (a pointer file)");
    d = c, w = [ p.uid, v.uid ];
  } else if (u === "missing") {
    let [p, v, b] = await Promise.all([ C(N(e, "HEAD")).catch(() => null), C(N(e, "objects")).catch(() => null), ce(e).then(k => k, k => W(k) ? null : void 0) ]);
    if (b === null) return r("gone", "the repository root is gone");
    if (b === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (p === null || !p.isFile() || v === null || !v.isDirectory()) return r("not-a-repository", "no .git, and the root is not a bare git directory");
    d = e, w = [ b.uid ];
  } else if (u === "link" && n === "vet") {
    let p = await ge(c, e);
    if ("refused" in p) return r("unvettable", `.git is a link whose text ${p.refused}`);
    let v = p.text, b = Sd(ee(e, v)), k = Sd(Q(e));
    if (await IN(b, b.startsWith(k + Z) ? k : void 0) !== "clear") return r("unvettable", ".git is a link whose target is missing, goes through another link, or cannot be probed");
    let [I, L, z, U] = await Promise.all([ C(b).catch(() => null), C(N(b, "HEAD")).catch(() => null), C(N(b, "objects")).catch(() => null), ce(e).then(D => D, D => W(D) ? null : void 0) ]);
    if (U === null) return r("gone", "the repository root is gone");
    if (U === void 0) return r("unvettable", "the repository root cannot be stat'd");
    if (I === null || !I.isDirectory() || L === null || !L.isFile() || z === null || !z.isDirectory()) return r("unvettable", ".git is a link to something other than a git directory");
    d = b, w = [ I.uid, U.uid ];
  } else return r("unvettable", ".git is a link, a mount point, or cannot be probed");
  if (await s(N(d, "commondir")) !== "missing") return r("unvettable", `${d}/commondir exists, which git never writes into a main git dir`);
  let g = o || !w.every(St) ? await It(e, d, i) : null;
  if (g !== null) return r("unvettable", g);
  let h = N(d, "worktrees"), y = await IN(h, e), T = new Map, m = new Map;
  if (y === "missing") return {
    gitDir: d,
    vetted: T,
    refused: m
  };
  let f = y === "clear" ? await Oe(h, {
    encoding: "buffer"
  }).catch(() => null) : null;
  if (f === null) return r("unvettable", `${h} is a link or cannot be read`);
  for (let p of f) {
    let v = Ge(p);
    if (v === null) {
      let S = N(h, `<${p.toString("hex")}>`), I = "has a name this check and git would read differently";
      m.set(S, "has a name this check and git would read differently"), t(`Refused worktree admin entry ${S}: has a name this check and git would read differently`, {
        level: "warn"
      });
      continue;
    }
    let b = N(h, v), k = await _t(b, e, s, o);
    if (k === "missing") continue;
    if (k === null) continue;
    if (typeof k === "object") T.set(b, k.worktree); else m.set(b, k), t(`Refused worktree admin entry ${b}: ${k}`, {
      level: "warn"
    });
  }
  return {
    gitDir: d,
    vetted: T,
    refused: m
  };
}

async function te(e) {
  for (let n of [ "objects", "config", "packed-refs", "hooks", "worktrees" ]) if (await e(n).catch(() => "unchecked") !== null) return !0;
  return !1;
}

async function _t(e, n, i, r) {
  let o = await IN(e, n);
  if (o === "missing") return "missing";
  if (o !== "clear") return "is a link, a mount point, or cannot be probed";
  let s = await C(e).then(m => m, m => W(m) ? null : void 0);
  if (s === void 0) return "cannot be probed";
  if (s === null) return "missing";
  if (s.isSymbolicLink()) return "became a link";
  if (!s.isDirectory()) return r ? "is not a directory" : null;
  let c = await At(e, i, r ? 1 / 0 : 1);
  if (c !== null) return c;
  if (await te(m => C(N(e, m)).catch(f => {
    if (W(f)) return null;
    throw f;
  }))) return "holds a git directory's own files (objects, config, packed-refs, hooks or worktrees), or could not be checked for them";
  let u = N(e, "gitdir"), d = await C(u).then(m => m, m => W(m) ? null : void 0);
  if (d === void 0) return "gitdir cannot be probed";
  if (d === null) return await i(u) === "missing" ? {
    worktree: null
  } : "gitdir is absent to lstat but not to the probe (a shortcut beside it, or a race)";
  if (!d.isFile()) return "gitdir is not a regular file";
  if (d.size > Re) return "gitdir is larger than any git writes";
  let w = await pI(u, Re, {
    noFollow: !0
  }).catch(() => null);
  if (w === null) return "gitdir cannot be read";
  let g = w.replace(/[\r\n]+$/, "");
  if (g === "") return {
    worktree: null
  };
  let h = fe(g, n, r);
  if (h !== null) return h;
  let y, T;
  if (de(g)) {
    let m = Q(g), f = Sd(Q(n));
    y = [ m ];
    let p = (k, S) => r && S === 0 ? k.toLowerCase() : k, v = m.split(Z), b = f.split(Z);
    T = v.length > b.length && b.every((k, S) => p(k, S) === p(v[S] ?? "", S)) ? v.slice(0, b.length).join(Z) : void 0;
  } else {
    let m = await ue(n).catch(() => null);
    if (m === null) return "the repository root does not resolve";
    T = m;
    let f = Sd(Q(n)), p = e.startsWith(f + Z) ? N(m, Et(n, e)) : e;
    y = [ ee(p, g), ee(m, g) ];
  }
  for (let m of y) {
    if (Li(m, T ?? n)) return "gitdir names another host";
    let f = await IN(vt(m), T);
    if (f === "link" || f === "unknown") return "gitdir walks through a link, or a component cannot be probed";
    if (f === "clear") {
      let p = await i(m);
      if (p === "link" || p === "unknown") return "gitdir names a link, or one that cannot be probed";
    }
  }
  return {
    worktree: y[0] ?? null
  };
}

async function It(e, n, i) {
  let r = {};
  for (let d of [ "GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM" ]) {
    let w = process.env[d];
    if (w !== void 0) r[d] = w;
  }
  let o = await i([ ...xn, "-C", e, "rev-parse", "--git-dir" ], {
    cwd: e,
    env: As({
      ...r,
      ...Smr()
    }),
    timeout: 1e4
  }).catch(d => (t(`Could not run git to check the ownership of ${n}: ${l(d)}`, {
    level: "error"
  }), null));
  if (o === null) return `git could not be run to check the ownership of ${n}`;
  if (o.code !== 0) return `git's ownership check for ${n} failed (exit ${o.code}); if another user owns it, it needs a safe.directory entry`;
  let s = o.stdout.trim();
  if (s === "") return `git gave no answer when checking the ownership of ${n}`;
  let [c, u] = await Promise.all([ ue(ee(e, s)).catch(() => null), ue(n).catch(() => null) ]);
  return c !== null && u !== null && Sd(c) === Sd(u) ? null : `git's ownership check did not name ${n}`;
}

function St(e) {
  let n = process.geteuid?.();
  if (n === void 0 || e === n) return !0;
  if (n !== 0) return !1;
  let i = a.SUDO_UID;
  return e === 0 || i !== void 0 && e === i;
}

function fe(e, n, i) {
  if (e.includes("\ufffd") || /\p{Cc}/u.test(e) || /^[A-Za-z]:(?![\\/])/.test(e)) return "gitdir holds bytes git would read differently";
  let r = i ? /[\\/]+/ : /\/+/;
  if (i && e.split(r).some(o => o !== "." && o !== ".." && /[. ]$/.test(o))) return "gitdir holds a component ending in a dot or space";
  if (!de(e)) {
    let o = e.split(r), s = o.findIndex(u => u !== "..");
    return (s < 0 ? [] : o.slice(s)).some(u => u === "" || u === "." || u === "..") ? "gitdir is a relative value git would not write" : null;
  }
  if (e.split(r).some(o => o === "." || o === "..")) return "gitdir holds a dot segment git would not write";
  if (!tMt(e)) return "gitdir is rooted without a drive or a host";
  if (Li(e, n)) return "gitdir names another host";
  return r.test(e.slice(-1)) ? "gitdir ends in a separator git would not write" : null;
}

async function ge(e, n) {
  let i = await Ne(e, {
    encoding: "buffer"
  }).then(s => {
    let c = s.toString("utf-8");
    return c.includes("\0") || !Buffer.from(c, "utf-8").equals(s) ? null : c;
  }, () => null);
  if (i === null) return {
    refused: "cannot be read"
  };
  if (/[\p{Cc}\uFFFD]/u.test(i)) return {
    refused: "holds a control character or U+FFFD"
  };
  if (Li(i, n)) return {
    refused: "names another host"
  };
  let r = O() === "windows", o = r ? /[\\/]+/ : /\/+/;
  if (i === "" || o.test(i.slice(-1)) || i.split(o).some(s => s === "." || s === "..") || de(i) && !tMt(i) || r && /^[A-Za-z]:(?![\\/])/.test(i)) return {
    refused: "is empty, ends in a separator, holds a dot segment, or is rooted or drive-relative in a way git would read differently"
  };
  return {
    text: i
  };
}

function Ge(e) {
  let n = e.toString("utf8");
  return !n.includes("\ufffd") && !/\p{Cc}/u.test(n) && !(O() === "windows" && /[. ]$/.test(n)) && Buffer.from(n, "utf8").equals(e) ? n : null;
}

async function At(e, n, i) {
  let r = O() === "windows", o = $t, s = async (c, u) => {
    let d = await Oe(c, {
      encoding: "buffer"
    }).catch(() => null);
    if (d === null) return `${c} cannot be read`;
    for (let w of d) {
      if (--o < 0) return "holds more files than any entry git writes";
      let g = Ge(w);
      if (g === null) return `${c} holds a name that is not valid UTF-8`;
      if (r && g.toLowerCase().endsWith(".lnk")) return `${N(c, g)} is named as a shortcut, which git never writes here`;
      let h = N(c, g), y = await C(h).catch(() => null);
      if (y === null) return `${h} cannot be probed`;
      let T = r && y.isDirectory() ? await IN(h, c) : await n(h);
      if (T === "link" || T === "unknown") return `${h} is a link or cannot be probed`;
      if (y.isDirectory() && u > 1) {
        let m = await s(h, u - 1);
        if (m !== null) return m;
      }
    }
    return null;
  };
  return s(e, i);
}

var He = 65536, je = 65536, pe = Ue({
  afterMatch: null,
  beforeMutation: null
}, e => {
  e.afterMatch = null, e.beforeMutation = null;
});

async function P8t(e) {
  let n = await Wst(e, {
    dotGitLink: "vet"
  });
  if ("skipped" in n) return null;
  let i = await gNe(e, n.gitDir);
  if ("refused" in i) return t(`Could not vet the worktree registrations of ${e}: ${i.refused}`, {
    level: "warn"
  }), null;
  return i.gitDir;
}

async function gNe(e, n) {
  let i = q(e), r = q(n);
  if (r === i) return await Me(G(i, ".git")).then(() => !0, c => !W(c)) ? {
    refused: `the repository's .git is a link to its own root, ${i}, which cannot be used as a git directory safely`
  } : Ce(i, "");
  if (r === q(G(e, ".git"))) return Ce(i, ".git");
  let o = await Ot(r, i);
  return o === "elsewhere" ? {
    gitDir: r
  } : {
    refused: o === "inside" ? `the repository's .git is a link to ${r}, inside its own working tree, which cannot be opened safely` : `the repository's .git is a link to ${r}, which could not be checked against the working tree`
  };
}

async function Ce(e, n) {
  let i = await ne(e).catch(() => null);
  return i === null ? {
    refused: `${e} could not be resolved`
  } : {
    gitDir: G(i, n)
  };
}

function q(e) {
  let n = re(e);
  return me(n).root === n ? n : Sd(n);
}

async function Ot(e, n) {
  if (ve(G8(e), G8(n))) return "inside";
  let i = await Pt(n, {
    bigint: !0
  }).catch(() => null);
  if (i === null) return "unknown";
  for (let r = e; ;r = B(r)) {
    let o = await Me(r, {
      bigint: !0
    }).catch(() => null);
    if (o === null) return "unknown";
    if (o.dev === i.dev && o.ino === i.ino) return "inside";
    if (B(r) === r) return "elsewhere";
  }
}

async function Ke(e) {
  let n = q(e), i = await ne(n).catch(() => null);
  return {
    root: n,
    tops: [ n, i ].filter(r => r !== null)
  };
}

async function Nt(e, n) {
  let i = new Set, r = [], {root: o, tops: s} = await Ke(n);
  for (let c of e) {
    let u = Sd(re(c));
    if (i.add(G(u, ".git")), Li(u, o)) continue;
    let d = B(u), w = await Gt(d, Ve(d, s));
    if ("refused" in w) {
      r.push(`${u}: ${w.refused}`);
      continue;
    }
    i.add(G(w.resolved, be(u), ".git"));
  }
  return {
    gitdirs: i,
    unresolved: r,
    tops: s
  };
}

var Le = 16;

async function Gt(e, n) {
  let i = e, r = n;
  for (let o = 0; o <= Le; o++) {
    let s = i === r ? {
      verdict: "clear",
      at: void 0
    } : await xyo(i, r);
    if (s.verdict === "clear" || s.verdict === "missing") {
      if (r === void 0) return {
        resolved: i
      };
      let d = await ne(r).catch(() => null);
      return d === null ? {
        refused: `${r} could not be resolved`
      } : {
        resolved: G(d, xe(r, i))
      };
    }
    if (s.verdict !== "link" || s.at === void 0) return {
      refused: `a component of ${i} cannot be probed`
    };
    let c = await ge(s.at, B(s.at));
    if ("refused" in c) return {
      refused: `the text of the link ${s.at} ${c.refused}`
    };
    let u = We(B(s.at), c.text);
    if (i = G(u, xe(s.at, i)), r !== void 0 && !ve(u, r)) r = void 0;
  }
  return {
    refused: `more than ${Le} links lead to ${e}`
  };
}

function ve(e, n) {
  return e === n || e.startsWith(n.endsWith(Fe) ? n : n + Fe);
}

function Ye(e, n) {
  let i = e.replace(/[\r\n]+$/, "");
  if (i === "" || fe(i, n, O() === "windows") !== null || Li(i, n)) return null;
  let r = re(Rt(i) ? i : We(n, i));
  return be(r) === ".git" && tMt(r) ? r : null;
}

function Ve(e, n) {
  let i;
  for (let r of n) for (let o = r; ;o = B(o)) {
    if (ve(e, o)) {
      if (i === void 0 || o.length > i.length) i = o;
      break;
    }
    if (B(o) === o) break;
  }
  return i;
}

async function ze(e, n, i) {
  let r = i?.tops ?? (await Ke(n.repoSpelled)).tops;
  return await IN(e, Ve(B(e), r)) === "missing";
}

function Xe(e) {
  return e !== "" && e !== "." && e !== ".." && !/[\\/\p{Cc}\uFFFD]/u.test(e);
}

function Ze(e) {
  let n = new Set;
  for (let i of e) {
    let r = be(Sd(re(i)));
    for (let o of [ xt(r), r ]) {
      if (o === "") continue;
      n.add(o);
      for (let s = 1; s <= 99; s++) n.add(`${o}${s}`);
    }
  }
  return [ ...n ];
}

function xt(e) {
  let n = "";
  for (let i = 0; i < e.length; i++) {
    let r = e[i], o = r.charCodeAt(0);
    if (r === "." && (i === 0 || e[i - 1] === ".")) n += i === 0 ? "-" : ""; else if (r === "{" && e[i - 1] === "@") n += "-"; else if (o < 32 || o === 127 || " :?[\\^~*".includes(r)) n += "-"; else n += r;
  }
  while (n.endsWith(".lock")) n = n.slice(0, -5);
  return n;
}

async function Ft() {
  let [e, n] = await Promise.all([ import("./chunk-aed8th7n.js"), import("./chunk-yrpe90gk.js") ]);
  return {
    ...e,
    host: n.createDeviceTreeHost()
  };
}

async function qe(e, n) {
  let i = await Ft().catch(u => ({
    failed: l(u)
  }));
  if ("failed" in i) return {
    unavailable: `its module did not load: ${i.failed}`,
    modules: null
  };
  let r = await ne(q(n)).catch(() => null), o = r !== null && me(r).root !== r && e === G(r, ".git"), s = o ? r : e, c = await (o || me(e).root === e ? i.openTreeAnchor(i.host, {
    gitRoot: s,
    realRoot: s
  }) : i.openTreeAnchorAtName(i.host, e)).catch(u => ({
    unavailable: l(u)
  }));
  if ("unavailable" in c) return {
    unavailable: c.unavailable,
    modules: i
  };
  if (!o) return c;
  try {
    let u = await c.anchorBeneath(".git"), d = await u.lstat("").catch(() => null);
    if (d === null || d.ino === 0n) return await u.close().catch(() => {}), {
      refused: d === null ? `${e}: its file id could not be read once it was opened` : `${e} is on a volume that reports no file ids`
    };
    return u;
  } catch (u) {
    return {
      refused: `could not open ${e} from ${s} without following a link: ${l(u)}`
    };
  } finally {
    await c.close().catch(() => {});
  }
}

async function Je(e, n, i) {
  let r = await e.open(n, K.O_RDONLY | K.O_NONBLOCK).catch(o => E(o) ?? "EIO");
  if (typeof r === "string") {
    if (r !== "ENOENT") return {
      unread: ye(r)
    };
    let o = await e.lstat(n).then(() => "present", s => E(s) ?? "EIO");
    return o === "ENOENT" ? "absent" : {
      unread: o === "present" ? "could not be opened where the held folder has it" : ye(o)
    };
  }
  try {
    let o = await r.stat({
      bigint: !0
    });
    if (e.backend === "darwin_at") {
      let c = await e.lstat(n);
      if (o.dev !== c.dev || o.ino !== c.ino) return {
        unread: "was replaced as it was opened"
      };
    }
    if (!o.isFile()) return {
      unread: "is not a regular file"
    };
    let s = await ke(r, i);
    return s === null ? {
      unread: "is larger than git writes"
    } : {
      text: s
    };
  } catch {
    return {
      unread: "could not be read"
    };
  } finally {
    await r.close().catch(() => {});
  }
}

async function ke(e, n) {
  let i = Buffer.alloc(n + 1), r = 0;
  for (;;) {
    let {bytesRead: o} = await e.read(i, r, i.length - r, r);
    if (o === 0) break;
    if (r += o, r > n) return null;
  }
  return i.subarray(0, r).toString("utf-8");
}

function Ee(e) {
  return typeof e.worktreePath === "string" ? [ e.worktreePath ] : e.worktreePath;
}

async function $e(e) {
  return "worktreePath" in e ? Nt(Ee(e), e.repoSpelled) : null;
}

function F(e, n) {
  e.unchecked++, e.kinds.add(n);
}

function ye(e) {
  return e === "ELOOP" ? "is a link" : e === "EISDIR" ? "is not a regular file" : "could not be opened";
}

function Qe(e) {
  return e.replace(/[\r\n]+$/, "") === "";
}

function Te(e, n, i) {
  let r = G(e, "worktrees"), {unchecked: o, kinds: s} = i, c = [ ...n === null || n.unresolved.length === 0 ? [] : [ `a folder on the way to the worktree could not be resolved safely (${n.unresolved.join("; ")}), so a registration recorded under its resolved path could not be matched` ], ...i.guessed ? [ `${r} cannot be listed here without following links, so only the names git would have given this worktree were checked, and a registration under another name may remain` ] : [], ...o === 0 ? [] : [ i.guessed ? `some of the names tried in ${r} could not be checked (${[ ...s ].join(", ")}), so one of them may still register this worktree` : `${o === 1 ? "one entry" : `${o} entries`} in ${r} could not be checked (${[ ...s ].join(", ")}), so ${o === 1 ? "it" : "one of them"} may still register this worktree` ] ];
  return c.length === 0 ? {
    outcome: "none"
  } : {
    unmatched: c.join("; ")
  };
}

function et(e, n) {
  return n === null || Ydt(De(e), [ ...n.gitdirs ].map(De));
}

function De(e) {
  return O() === "windows" ? e.replace(/^[a-z](?=:)/, n => n.toUpperCase()) : e;
}

async function tt(e, n, i, r) {
  let o = {
    guessed: !1,
    unchecked: 0,
    kinds: new Set
  }, s = "entryId" in i ? [ i.entryId ] : await e.list("worktrees").catch(c => {
    if (W(c)) return [];
    if (E(c) === "WORKING_LIST_UNSUPPORTED") return o.guessed = !0, Ze(Ee(i));
    throw c;
  });
  for (let c of s) {
    if (!Xe(c)) {
      if (!o.guessed) F(o, "an entry name this check cannot read exactly");
      continue;
    }
    let u = `worktrees/${c}`, d = await e.lstat(u).catch(y => W(y) ? null : void 0);
    if (d === void 0) {
      F(o, "an entry that could not be inspected");
      continue;
    }
    if (d === null || !d.isDirectory()) {
      if (d?.isSymbolicLink()) F(o, "an entry that is a link"); else if (d !== null && O() === "windows") F(o, "an entry that is not a folder");
      continue;
    }
    let w = await Je(e, `${u}/gitdir`, He);
    if (w === "absent") continue;
    if ("unread" in w) {
      F(o, `a gitdir file that ${w.unread}`);
      continue;
    }
    let g = Ye(w.text, G(n, "worktrees", c));
    if (g === null && !Qe(w.text)) F(o, "a gitdir file whose path could not be checked safely");
    if (g === null || !et(g, r)) continue;
    let h = await e.lstat(`${u}/locked`).then(() => !0, y => !W(y));
    return {
      entryId: c,
      locked: h,
      recordedGitdir: g,
      rel: u,
      identity: {
        dev: d.dev,
        ino: d.ino
      }
    };
  }
  return o;
}

async function _e(e, n) {
  return Ct(e, n).catch(i => ({
    unavailable: l(i)
  }));
}

async function Ct(e, n) {
  let i = await qe(e, n.repoSpelled);
  if ("refused" in i) return {
    unavailable: i.refused
  };
  if ("unavailable" in i) return {
    unavailable: i.unavailable
  };
  try {
    let r = await $e(n), o = await tt(i, e, n, r);
    if ("unchecked" in o) {
      let s = Te(e, r, o);
      return "unmatched" in s ? {
        unavailable: s.unmatched
      } : null;
    }
    return {
      entryId: o.entryId,
      locked: o.locked,
      recordedGitdir: o.recordedGitdir
    };
  } finally {
    await i.close().catch(() => {});
  }
}

async function zQ(e, n, i) {
  return Dt(e, n, i).catch(r => A(e, l(r)));
}

async function Dt(e, n, i) {
  let r = await qe(e, n.repoSpelled);
  if ("refused" in r) return A(e, r.refused);
  if ("unavailable" in r) {
    let {modules: o} = r;
    return r.unavailable === "no_ffi" && o !== null && o.host.platform() === "macos" ? Vt(e, n, i, await o.darwinNoFollowAnyEnforced(o.host)) : A(e, `this build cannot open files here without following links (${r.unavailable})`);
  }
  try {
    let o = await $e(n), s = await tt(r, e, n, o);
    if ("unchecked" in s) {
      let d = Te(e, o, s);
      return "unmatched" in d ? A(e, d.unmatched) : d;
    }
    if (!await ze(s.recordedGitdir, n, o)) return A(e, `could not confirm the worktree is gone: ${s.recordedGitdir} exists, or a link or unreadable folder is on the way to it`);
    await (pe.afterMatch?.(s.entryId));
    let c = async () => {
      let d = await r.lstat(s.rel).catch(() => null);
      return d !== null && ie(d, s.identity);
    };
    if (!await c()) return A(e, `worktrees/${s.entryId} changed since it was read, or this volume cannot show it is the same folder`);
    if (await Be(r, s.rel)) return A(e, `${nt(s.entryId)}, so nothing in it was removed`);
    if (s.locked) {
      if (!await Yt(r, s.rel, i.locked)) return A(e, `worktrees/${s.entryId} is locked`);
    }
    if (await (pe.beforeMutation?.(s.entryId)), await r.unlink(`${s.rel}/gitdir`), !await c()) return {
      outcome: "dropped",
      entryId: s.entryId,
      adminRemoved: !1
    };
    if (await Be(r, s.rel)) return t(`Dropped the registration worktrees/${s.entryId} in ${e} (git no longer lists it) but left its folder, which now has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them. git's next \`git worktree prune\` or \`git gc\` deletes that folder whole; move out anything you need first.`, {
      level: "warn"
    }), {
      outcome: "dropped",
      entryId: s.entryId,
      adminRemoved: !1
    };
    let u = await Wt(r, s.rel, s.identity);
    return await r.rmdir("worktrees").catch(() => {}), {
      outcome: "dropped",
      entryId: s.entryId,
      adminRemoved: u
    };
  } catch (o) {
    return A(e, l(o));
  } finally {
    await r.close().catch(() => {});
  }
}

async function Jqe(e, n, i = {
  locked: "keep"
}) {
  let r = await P8t(e);
  return r === null ? A(e, 'the repository could not be vetted (see the "Could not vet the worktree registrations" line above)') : zQ(r, {
    worktreePath: n,
    repoSpelled: e
  }, i);
}

function A(e, n) {
  return t(`Left a git worktree registration in ${e} in place: ${n}`, {
    level: "warn"
  }), {
    outcome: "kept",
    reason: n
  };
}

var Bt = [ "logs/HEAD", "HEAD", "ORIG_HEAD", "FETCH_HEAD", "AUTO_MERGE", "MERGE_HEAD", "MERGE_MSG", "MERGE_RR", "MERGE_AUTOSTASH", "MERGE_MODE", "SQUASH_MSG", "COMMIT_EDITMSG", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD", "BISECT_LOG", "BISECT_START", "BISECT_TERMS", "BISECT_NAMES", "BISECT_EXPECTED_REV", "BISECT_ANCESTORS_OK", "BISECT_RUN", "BISECT_FIRST_PARENT", "BISECT_HEAD", "index", "index.lock", "commondir", "locked", "config.worktree", "info/sparse-checkout", "CLAUDE_BASE" ], Mt = [ "refs/bisect", "refs/worktree", "refs/rewritten", "refs", "logs", "info" ];

function Be(e, n) {
  return te(i => e.lstat(`${n}/${i}`).catch(r => {
    if (W(r)) return null;
    throw r;
  }));
}

function nt(e) {
  return `worktrees/${e} has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them`;
}

async function Wt(e, n, i) {
  return await Ie(e, n, i), e.rmdir(n).then(() => !0, r => (t(`Dropped the registration ${n} but left its folder: ${l(r)}`, {
    level: "warn"
  }), !1));
}

function ie(e, n) {
  return e.isDirectory() && e.dev !== 0n && !xf(e.ino) && e.dev === n.dev && e.ino === n.ino;
}

async function Ie(e, n, i) {
  for (let r of Bt) await e.unlink(`${n}/${r}`).catch(() => {});
  await Kt(e, n, i);
  for (let r of Mt) await e.rmdir(`${n}/${r}`).catch(() => {});
}

var Ht = /^(?:tables\.list(?:\.lock)?|0x[0-9a-f]{12,16}-0x[0-9a-f]{12,16}-[0-9a-f]{8}\.(?:(?:ref|log)(?:\.lock)?|temp\.[A-Za-z0-9]{6}))$/, jt = 1024, Ut = "refs/heads", we = "reftable";

async function Kt(e, n, i) {
  let r = await Promise.resolve().then(() => e.anchorBeneath(n)).catch(() => null);
  if (r === null) return;
  try {
    let o = await r.lstat("").catch(() => null);
    if (o === null || !ie(o, i)) return;
    let s = await r.anchorBeneath(we).catch(() => null);
    if (s === null) return;
    try {
      let [c, u] = await Promise.all([ s.lstat("").catch(() => null), e.lstat(we).catch(() => null) ]);
      if (c === null || u === null || !c.isDirectory() || !u.isDirectory() || c.dev === u.dev && c.ino === u.ino) return;
      let d = await s.list("", jt).catch(w => E(w) === "WORKING_LIST_UNSUPPORTED" ? s.list("").catch(() => null) : null);
      if (d === null) return;
      for (let w of d) if (Ht.test(w)) await s.unlink(w).catch(() => {});
    } finally {
      await s.close().catch(() => {});
    }
    await r.unlink(Ut).catch(() => {}), await r.rmdir(we).catch(() => {});
  } finally {
    await r.close().catch(() => {});
  }
}

async function Yt(e, n, i) {
  if (i === "drop") return !0;
  if (i === "keep") return !1;
  let r = await Je(e, `${n}/locked`, je);
  if (r === "absent" || "unread" in r || !i.unlockIf(r.text.replace(/[\r\n]+$/, ""))) return !1;
  return await e.unlink(`${n}/locked`), !0;
}

async function Vt(e, n, i, r) {
  if (!r) return A(e, "this macOS version does not enforce O_NOFOLLOW_ANY, so links cannot be refused");
  let o = await $e(n), s = "entryId" in n ? [ n.entryId ] : Ze(Ee(n)), c = {
    guessed: !("entryId" in n),
    unchecked: 0,
    kinds: new Set
  }, u = K.O_NONBLOCK | TXe | Zs;
  for (let w of s) {
    if (!Xe(w)) {
      if (!c.guessed) F(c, "an entry name this check cannot read exactly");
      continue;
    }
    let g = G(e, "worktrees", w), h = await he(G(g, "gitdir"), K.O_RDWR | u).catch(y => E(y) ?? "EIO");
    if (typeof h === "string") {
      if (h !== "ENOENT" && h !== "ENOTDIR") F(c, h === "ELOOP" ? "a gitdir file that is a link, or a link on the way to it" : `a gitdir file that ${ye(h)}`);
      continue;
    }
    try {
      let y = await h.stat();
      if (!y.isFile() || y.nlink !== 1) {
        F(c, !y.isFile() ? "a gitdir file that is not a regular file" : y.nlink > 1 ? "a gitdir file with more than one name" : "a gitdir file that was removed after it was opened");
        continue;
      }
      let T = await ke(h, He), m = T === null ? null : Ye(T, g);
      if (T === null) F(c, "a gitdir file that is larger than git writes"); else if (m === null && !Qe(T)) F(c, "a gitdir file whose path could not be checked safely");
      if (m === null || !et(m, o)) continue;
      let f = await he(G(g, "locked"), K.O_RDONLY | u).catch(p => W(p) ? null : void 0);
      if (f !== null) {
        let p = await (f?.stat().catch(() => null)), v = f !== void 0 && p?.isFile() === !0 ? await ke(f, je).catch(() => null) : null;
        if (await (f?.close().catch(() => {})), v === null || i.locked === "keep" || i.locked !== "drop" && !i.locked.unlockIf(v.replace(/[\r\n]+$/, ""))) return A(e, `worktrees/${w} is locked`);
      }
      if (!await ze(m, n, o)) return A(e, `could not confirm the worktree is gone: ${m} exists, or a link or unreadable folder is on the way to it`);
      if (await te(async p => {
        let v = await he(G(g, p), K.O_RDONLY | u).catch(b => {
          if (W(b)) return null;
          throw b;
        });
        if (v === null) return null;
        try {
          return await v.stat();
        } finally {
          await v.close().catch(() => {});
        }
      })) return A(e, `${nt(w)}, so nothing in it was changed`);
      return await (pe.beforeMutation?.(w)), await h.truncate(0), {
        outcome: "dropped",
        entryId: w,
        adminRemoved: !1
      };
    } catch (y) {
      return A(e, l(y));
    } finally {
      await h.close().catch(() => {});
    }
  }
  let d = Te(e, o, c);
  return "unmatched" in d ? A(e, d.unmatched) : d;
}

import { randomBytes as zt } from "crypto";

import { constants as Y } from "fs";

import { access as Xt, lstat as j, readlink as Zt, realpath as M, rm as qt } from "fs/promises";

import { basename as ct, dirname as V, isAbsolute as Se, join as R, normalize as H, parse as J, resolve as Jt, sep as P } from "path";

var Qt = 65536, en = 3, rt = null;

function tn() {
  return rt ??= Promise.all([ import("./chunk-aed8th7n.js"), import("./chunk-yrpe90gk.js") ]).then(([e, n]) => ({
    tree: e,
    host: n.createDeviceTreeHost()
  })).catch(e => {
    throw rt = null, e;
  });
}

function nn() {
  return O() === "windows" ? Y.O_RDONLY : Y.O_RDONLY | Y.O_NONBLOCK;
}

async function zst(e, n, {forceTwice: i = !1, git: r, trustedRoot: o, resolveAboveParent: s = !1, deregisterIfStopped: c = !1, pointerFirst: u = !1} = {}) {
  let d = await ht(o === void 0 ? [ e ] : [ e, o ], n, {
    parentLinkToRoot: s
  });
  if (d === null) return {
    outcome: "refused",
    reason: `${n} has no parent directory`
  };
  if ("refused" in d) return {
    outcome: "refused",
    reason: d.refused
  };
  let {base: w, rel: g, underRoot: h} = d, y = r ?? await un(e);
  if ("why" in y) return {
    outcome: "refused",
    reason: `the repository's git directory failed its safety checks (${y.why})`
  };
  let T = y.dir, m = await ae(w, h ? "root" : s ? "not_a_link" : "canonical");
  if (!("held" in m)) return m.outcome === "unanchored" ? m : {
    outcome: "refused",
    reason: m.reason
  };
  let {held: f, realBase: p} = m;
  try {
    let v = await f.lstat(g).then(_ => _.isDirectory(), () => !1);
    if (v && await f.list(g).then(() => !1, _ => Ae(_))) return {
      outcome: "unanchored",
      reason: "no_descriptor_listing"
    };
    let b = h || s ? [ n, R(p, ...g.split("/")) ] : [ n ], k = await _e(T, {
      worktreePath: b,
      repoSpelled: y.root
    });
    if (v && k !== null && !("unavailable" in k)) {
      let _ = await wn(f, g, [ n, R(p, ...g.split("/")) ], e, T);
      if (_ !== null && _ !== k.entryId) {
        let X = await _e(T, {
          entryId: _,
          worktreePath: b,
          repoSpelled: y.root
        });
        if (X !== null && !("unavailable" in X)) k = X;
      }
    }
    if (k !== null && "unavailable" in k) return {
      outcome: "refused",
      reason: `git's records of worktrees in ${T} could not be checked safely (${k.unavailable})`
    };
    if (k === null) return {
      outcome: "not_registered"
    };
    if (!h && !dt(k.recordedGitdir, [ n, R(p, ...g.split("/")) ].map(_ => R(H(_), ".git")))) return {
      outcome: "refused",
      reason: `the folder holding ${n} resolved to a different place while it was being checked (a link may have been swapped in)`
    };
    if (k.locked && !i) return {
      outcome: "locked"
    };
    let S = i ? "drop" : "keep", I = await f.lstat(g).then(_ => _, _ => ({
      error: _
    }));
    if ("error" in I && W(I.error) && await f.lstat(on(g)).then(_ => _.isDirectory(), () => !1)) return at(n, await zQ(T, {
      entryId: k.entryId,
      repoSpelled: y.root
    }, {
      locked: S
    }), T, k.entryId);
    if ("error" in I || !I.isDirectory()) return {
      outcome: "refused",
      reason: "error" in I && W(I.error) ? `the directory holding ${n} is missing` : `${n} is not a directory reachable without a link (${"error" in I ? E(I.error) ?? "unknown error" : "not a directory"})`
    };
    let L = await pt(f, `${g}/.git`);
    if ("error" in L) return {
      outcome: "refused",
      reason: `the .git file in ${n} could not be read (${L.error})`
    };
    if (L.value === null || !await mt(L.value, [ n, R(p, ...g.split("/")) ], e, T, k.entryId)) return {
      outcome: "not_pointing_back"
    };
    let z = c ? await ut(T, k.entryId) : null, U = typeof z === "object" ? z : null, D = {
      deleted: !1
    };
    try {
      await pn(f, g, L.bytes, D, {
        pointerFirst: u
      });
    } catch (_) {
      if (!D.deleted && Ae(_)) return {
        outcome: "unanchored",
        reason: "no_descriptor_listing"
      };
      let X = fn(_);
      t(`Worktree checkout ${n} not fully deleted: ${l(_)}`, {
        level: "warn"
      });
      let yt = U !== null && D.deleted && await dn(T, k.entryId, U, S);
      return {
        outcome: "delete_failed",
        reason: X,
        started: D.deleted,
        deregistered: yt
      };
    }
    return at(n, await zQ(T, {
      entryId: k.entryId,
      repoSpelled: y.root
    }, {
      locked: S
    }), T, k.entryId);
  } finally {
    await f.close().catch(() => {});
  }
}

async function rn(e, n, {rootIsCanonical: i = !1} = {}) {
  let r = n === void 0 ? wt(e) : await ht([ n ], e);
  if (r === null) throw new x(`${e} has no parent directory`, "the path to delete has no parent directory");
  if ("refused" in r) throw new x(r.refused, "the path to delete reaches its root by a spelling that cannot be checked safely");
  let o = await ae(r.base, n === void 0 || !r.underRoot ? "not_a_link" : i ? "canonical" : "root");
  if (!("held" in o)) {
    if (o.outcome === "unanchored") return {
      unanchored: o.reason
    };
    if (o.absent === !0) return "absent";
    throw new x(`could not open the directory above ${e}: ${o.reason}`, "the directory above the path to delete could not be opened");
  }
  try {
    return await kt(o.held, r.rel) ? "deleted" : "absent";
  } catch (s) {
    if (Ae(s)) return {
      unanchored: "no_descriptor_listing"
    };
    throw s;
  } finally {
    await o.held.close().catch(() => {});
  }
}

async function Kds(e, n, i = {}) {
  if (typeof await rn(e, n, i) === "object") await qt(e, {
    recursive: !0,
    force: !0
  });
}

function PCe(e) {
  switch (e.outcome) {
   case "removed":
    return "removed";

   case "not_registered":
    return "git has no usable record of a worktree at this path; nothing was deleted";

   case "locked":
    return "the worktree is locked (by `git worktree lock`); nothing was deleted. `git worktree unlock <path>` unlocks it";

   case "not_pointing_back":
    return "the worktree's .git file is missing or does not point to git's record of it; nothing was deleted";

   case "refused":
    return `${e.reason}; nothing was deleted`;

   case "delete_failed":
    if (e.reason === it) return `${it}; try removing it again once nothing is writing to it`;
    if (e.reason === "WORKING_NAME_NOT_PLAIN") return "it holds a file name that Windows cannot delete this way; some of its other files may already be deleted";
    if (e.reason === "ENOTEMPTY") return "a folder in it could not be emptied: it may be unreadable, or something may still be writing to it; check its permissions and try removing it again";
    if (e.reason === "WORKING_FILE_HELD") return "a program has one of its files open; try removing it again once that program closes it";
    return e.reason === "EBUSY" ? "some of its files could not be deleted: EBUSY; a program may have them open, so try removing it again" : `some of its files could not be deleted: ${e.reason}`;

   case "registration_kept":
    return `its files were deleted, but git still lists it (${e.reason})`;

   case "unanchored":
    return e.reason === "no_descriptor_listing" ? "this machine cannot list a folder it holds open, so it cannot delete it without following links" : `this machine cannot open folders without following links (${e.reason})`;
  }
}

var it = "files kept appearing in the worktree while it was being deleted";

function Ae(e) {
  return E(e) === "WORKING_LIST_UNSUPPORTED";
}

function on(e) {
  return e.includes("/") ? e.slice(0, e.lastIndexOf("/")) : "";
}

async function ae(e, n, {holdBase: i = !1} = {}) {
  let r = (f, p = !1) => ({
    outcome: "refused",
    reason: f,
    absent: p
  }), s = await (async () => {
    if (n === "root") return M(e);
    let f = R(await M(V(e)), ct(e));
    return n === "not_a_link" && O() !== "windows" && await ln(f) ? M(f) : f;
  })().catch(f => W(f) ? void 0 : E(f) === "ELOOP" ? "link" : null);
  if (s === "link") return r(`${e} is a link, or its spelling differs from the one on disk`);
  if (s === void 0 || s === null) return r(`${e} does not exist or cannot be read`, s === void 0);
  if (n === "canonical" && !oe(s, e)) return r(`${e} is reached through a link, or its spelling differs from the one on disk (it resolves to ${s})`);
  let c = J(s).root, u = O() === "windows" || i ? s : await sn(s);
  if (u === null) return r(`a directory above ${e} cannot be read`);
  let d = await tn().catch(f => ({
    failed: l(f)
  }));
  if ("failed" in d) return r(`${e} could not be opened safely (${d.failed})`);
  let {tree: w, host: g} = d, h = await w.openTreeAnchor(g, {
    gitRoot: u,
    realRoot: u
  }).catch(f => ({
    failed: l(f),
    code: E(f)
  }));
  if ("failed" in h) {
    let f = u === s;
    return f && h.code === "ENOENT" ? r(`${e} does not exist`, !0) : f && (h.code === "ELOOP" || h.code === "ENOTDIR") ? r(`${e} is a link, or changed while it was being opened`) : f && h.code === "WORKING_ROOT_NOT_CANONICAL" ? r(`${e} is reached through a link, or its spelling differs from the one on disk`) : r(`${e} could not be opened safely (${h.failed})`);
  }
  if ("unavailable" in h) {
    let f = w.getUnavailableReason(await w.checkAnchoring(c, {
      host: g
    })), p = f === "no_ffi" || f === "remote_volume" && (n !== "not_a_link" || await an(e, c));
    return f !== null && (O() !== "windows" || p) ? {
      outcome: "unanchored",
      reason: f
    } : r(`${e} could not be opened safely (${h.unavailable})`);
  }
  let y = u === s ? "" : s.slice(Sd(u).length).split(P).filter(Boolean).join("/"), T = cn(h, y), m = await T.lstat("").then(f => f, f => ({
    error: f
  }));
  if ("error" in m || !m.isDirectory()) return await h.close().catch(() => {}), "error" in m && W(m.error) ? r(`${e} does not exist`, !0) : r(`${e} is a link, or changed while it was being opened`);
  return {
    held: T,
    realBase: s
  };
}

async function sn(e) {
  let n = J(e).root, i = e.slice(n.length).split(P).filter(Boolean), r = n, o = n, s = !1;
  for (let c of i) {
    let u = await Pe(o, Y.R_OK), d = await Pe(o, Y.W_OK);
    if (u === null || d === null) return null;
    if (!u) {
      let w = await j(o).then(g => g.uid, () => null);
      if (w === null || w === process.getuid?.() || d || s) return null;
      r = R(o, c);
    }
    s ||= d, o = R(o, c);
  }
  return r;
}

async function an(e, n) {
  let i = await M(J(e).root).catch(() => null);
  return i !== null && rp(Sd(J(i).root)) === rp(Sd(n));
}

async function Pe(e, n) {
  return Xt(e, n).then(() => !0, i => [ "EACCES", "EPERM", "EROFS" ].includes(E(i) ?? "") ? !1 : null);
}

async function ln(e) {
  let n = await j(e).catch(() => null);
  if (n === null || !n.isSymbolicLink()) return !1;
  for (let i = V(e); ;i = V(i)) {
    if (await j(i).then(o => o.uid, () => null) !== 0 || await Pe(i, Y.W_OK) !== !1) return !1;
    if (V(i) === i) return !0;
  }
}

function cn(e, n) {
  let i = r => n === "" ? r : r === "" ? n : `${n}/${r}`;
  return {
    lstat: r => e.lstat(i(r)),
    list: (r, o) => e.list(i(r), o),
    unlink: r => e.unlink(i(r)),
    rmdir: r => e.rmdir(i(r)),
    rename: (r, o) => e.rename(i(r), i(o)),
    removeTree: (r, o) => e.removeTree(i(r), o),
    open: (r, o) => e.open(i(r), o),
    create: (r, o, s) => e.create(i(r), o, s),
    close: () => e.close(),
    anchorBeneath: r => e.anchorBeneath(i(r))
  };
}

async function un(e) {
  let n = e, i = await Wst(e, {
    dotGitLink: "vet"
  });
  if ("skipped" in i && i.skipped === "pointer") {
    let o = rL(e);
    if (o !== null && o !== e) n = o, i = await Wst(o, {
      dotGitLink: "vet"
    }); else {
      let s = await Jan(e);
      if (s === null) return {
        why: "its .git file names no usable git directory"
      };
      if ("refused" in await gNe(e, s)) return {
        why: `its .git file names ${s}, which is inside the working tree, or could not be checked against it`
      };
      let [c, u] = await Promise.all([ s, e ].map(w => M(w).catch(() => null)));
      if (c == null || u == null) return {
        why: c == null ? `its .git file names ${s}, which does not exist or cannot be resolved` : "the repository root cannot be resolved"
      };
      if (gt(Zvr(c), Zvr(u))) return {
        why: `its .git file names ${s}, which resolves into the working tree`
      };
      return await j(R(c, "commondir")).then(() => !1, w => W(w)) ? {
        dir: c,
        root: e
      } : {
        why: "its .git file names another worktree"
      };
    }
  }
  if ("skipped" in i) return {
    why: i.why
  };
  let r = await gNe(n, i.gitDir);
  return "refused" in r ? {
    why: r.refused
  } : {
    dir: r.gitDir,
    root: n
  };
}

async function ot(e, n, i) {
  return e.lstat(n).then(r => ie(r, i), () => !1);
}

async function st(e, n) {
  for (let i of [ "objects", "config", "packed-refs", "hooks", "worktrees" ]) if (await e.lstat(`${n}/${i}`).then(() => !0, o => !W(o))) return !0;
  return !1;
}

async function dn(e, n, i, r) {
  let o = await ae(e, "canonical", {
    holdBase: !0
  });
  if (!("held" in o)) return t(`Kept the registration ${n} in ${e}: ${o.reason}`, {
    level: "warn"
  }), !1;
  try {
    let s = `worktrees/${n}`;
    if (!await ot(o.held, s, i)) throw Error("its folder changed after it was checked, or this volume cannot show it is the same folder");
    if (r === "keep" && await o.held.lstat(`worktrees/${n}/locked`).then(() => !0, d => !W(d))) throw Error("it was locked while the checkout was being deleted");
    let c = new x(`${s} has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them, so nothing in it was removed`, "the registration entry has a git directory's own files in it, or could not be checked for them");
    if (await st(o.held, s)) throw c;
    if (await o.held.unlink(`${s}/gitdir`).catch(d => {
      if (!W(d)) throw d;
    }), await st(o.held, s)) return t(`Dropped the registration ${s} in ${e} (git no longer lists it) but left its folder, which now has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them. git's next \`git worktree prune\` or \`git gc\` deletes that folder whole; move out anything you need first.`, {
      level: "warn"
    }), !1;
    if (await Ie(o.held, s, i), await o.held.rmdir(s).then(() => !0, d => W(d))) return !0;
    if (!await ot(o.held, s, i)) return t(`Dropped the registration ${s} in ${e} (git no longer lists it) but left its folder: it changed while it was being emptied`, {
      level: "warn"
    }), !1;
    let u = `${s}.claude-dropped-${zt(4).toString("hex")}`;
    return await o.held.rename(s, u).then(() => (t(`Dropped the registration ${s} in ${e}; its folder held files Claude Code does not delete (such as a submodule's git directory), so it was moved to ${u}; git worktree prune removes it`, {
      level: "warn"
    }), !0), d => (t(`Dropped the registration ${s} in ${e} (git no longer lists it) but could not move its folder aside (${l(d)}); git worktree prune removes it`, {
      level: "warn"
    }), !1));
  } catch (s) {
    return t(`Kept the registration ${n} in ${e}: ${l(s)}`, {
      level: "warn"
    }), !1;
  } finally {
    await o.held.close().catch(() => {});
  }
}

async function at(e, n, i, r) {
  let o = R(i, "worktrees", r);
  if (n.outcome === "dropped" || n.outcome === "none" && await ut(i, r) === "absent") return {
    outcome: "removed"
  };
  let s = n.outcome === "kept" ? n.reason : `git's record of it at ${o} could not be read`;
  return t(`Worktree ${e} is gone but git still lists it: ${s}`, {
    level: "warn"
  }), {
    outcome: "registration_kept",
    reason: s
  };
}

async function ut(e, n) {
  let i = await ae(e, "canonical", {
    holdBase: !0
  });
  if (!("held" in i)) return null;
  try {
    return await i.held.lstat(`worktrees/${n}`).then(r => ({
      dev: r.dev,
      ino: r.ino
    }), r => W(r) ? "absent" : null);
  } finally {
    await i.held.close().catch(() => {});
  }
}

function fn(e) {
  return E(e) === "ENOTEMPTY" && !("syscall" in Object(e)) ? l(e) : E(e) ?? "an unknown error";
}

function oe(e, n) {
  return se(e) === se(n);
}

function dt(e, n) {
  return Ydt(se(e), n.map(se));
}

function se(e) {
  return O() === "windows" ? e.replace(/^[a-z](?=:)/, n => n.toUpperCase()) : e;
}

function lt(e, n) {
  return e.length > n.length + 1 && oe(e.slice(0, n.length + 1), n + P);
}

function gt(e, n) {
  return e === n || e.startsWith(n.endsWith(P) ? n : n + P);
}

async function gn(e, n) {
  let [i, r, o] = await Promise.all([ j(e, {
    bigint: !0
  }).catch(() => null), j(n, {
    bigint: !0
  }).catch(() => null), j(V(n), {
    bigint: !0
  }).catch(() => null) ]);
  return i !== null && r !== null && o !== null && i.dev !== 0n && !xf(i.ino) && i.dev === r.dev && i.ino === r.ino && !(o.dev === r.dev && o.ino === r.ino);
}

async function ht(e, n, {parentLinkToRoot: i = !1} = {}) {
  let r = Sd(H(n)), o = (g, h) => g.slice(h.length + 1).split(P).join("/"), s = [], c = [];
  for (let g of e) {
    let h = await M(g).catch(() => null);
    if (s.push(g, ...h === null ? [] : [ h ]), h !== null) c.push(Sd(h));
  }
  let u = s.map(g => Sd(H(g)));
  for (let g of u) if (lt(r, g)) {
    let h = r.slice(0, g.length);
    return {
      base: h.endsWith(":") ? h + P : h,
      rel: o(r, g),
      underRoot: !0
    };
  }
  let d = g => rp(g.normalize("NFC")), w = u.find(g => lt(d(r), d(g)));
  if (w !== void 0) {
    let g = r.split(P), h = w.split(P).length;
    if (O() !== "windows" && await gn(g.slice(0, h).join(P), w)) return {
      base: w,
      rel: g.slice(h).join("/"),
      underRoot: !0
    };
    return {
      refused: `${n} spells the repository folder ${w} in another letter case or Unicode form (use the path as git records it)`
    };
  }
  if (c.length > 0) {
    let g = r.split(P), h = null;
    for (let f = 1; f < g.length - 1; f++) {
      let p = g.slice(0, f).join(P), v = p === "" || p.endsWith(":") ? p + P : p, b = await M(v).catch(() => null);
      h = b;
      let k = b === null ? null : Sd(b), S = k === null ? void 0 : c.find(I => oe(k, I));
      if (S !== void 0) return {
        base: S,
        rel: g.slice(f).join("/"),
        underRoot: !0
      };
      if (k !== null && c.some(I => gt(k, I))) return {
        refused: `${n} is reached through a link into the repository at ${v}`
      };
    }
    let y = h === null ? null : R(h, g.at(-2)), T = y === null || !i ? null : await hn(y), m = [ y, T ].flatMap(f => f === null ? [] : [ f ]).map(f => c.find(p => oe(f, p))).find(f => f !== void 0);
    if (m !== void 0) return {
      base: m,
      rel: g.at(-1),
      underRoot: !0
    };
  }
  return wt(r);
}

async function hn(e) {
  let n = await Zt(e).catch(() => null);
  if (n === null) return null;
  let i = O() === "windows" && /^\\\\\?\\[A-Za-z]:\\/.test(n);
  if (i && n.includes("/")) return null;
  let r = i ? n.slice(4) : n, o = r.split(P === "\\" ? /[\\/]/ : /\//);
  if ((Se(r) ? o : o.slice(Math.max(0, o.findIndex(c => c !== "..")))).some(c => c === "." || c === "..")) return null;
  return Sd(H(Se(r) ? r : R(V(e), r)));
}

function wt(e) {
  let n = Sd(H(e)), i = J(n).root, r = n.lastIndexOf(P);
  if (n === i || r === n.length - 1 || r < 0) return null;
  return {
    base: r < i.length ? i : n.slice(0, r),
    rel: n.slice(r + 1),
    underRoot: !1
  };
}

async function mt(e, n, i, r, o) {
  let s = Se(e) ? [ H(e) ] : n.map(d => H(Jt(d, e))), c = await M(i).catch(() => null), u = [ r, R(i, ".git") ].concat(c === null ? [] : [ R(c, ".git") ]).map(d => R(d, "worktrees", o));
  return s.some(d => dt(d, u));
}

async function wn(e, n, i, r, o) {
  let s = await pt(e, `${n}/.git`);
  if ("error" in s || s.value === null) return null;
  let c = ct(H(s.value));
  return await mt(s.value, i, r, o, c) ? c : null;
}

async function mn(e, n) {
  let i = Buffer.alloc(n + 1), r = 0;
  for (;;) {
    let {bytesRead: o} = await e.read(i, r, i.length - r, r);
    if (o === 0) return i.subarray(0, r);
    if (r += o, r > n) return null;
  }
}

async function pt(e, n) {
  let i = {
    value: null,
    bytes: Buffer.alloc(0)
  }, r;
  try {
    r = await e.open(n, nn());
  } catch (o) {
    let s = E(o);
    return s === "ENOENT" || s === "ELOOP" || s === "EISDIR" ? i : {
      error: s ?? l(o)
    };
  }
  try {
    if (!(await r.stat()).isFile()) return i;
    let o = await mn(r, Qt);
    if (o === null) return i;
    let s = /^gitdir: ([^\r\n]+)[\r\n]*$/.exec(o.toString("utf8"));
    return {
      value: s ? s[1] : null,
      bytes: o
    };
  } catch (o) {
    return {
      error: E(o) ?? l(o)
    };
  } finally {
    await r.close().catch(() => {});
  }
}

async function kt(e, n, i = {
  deleted: !1
}) {
  try {
    return await e.unlink(n), i.deleted = !0, !0;
  } catch (r) {
    let o = E(r);
    if (o === "ENOENT") return !1;
    if (o !== "EISDIR" && o !== "EPERM" && o !== "EACCES") throw r;
    let s = await e.lstat(n).catch(() => null);
    if (s === null || !s.isDirectory()) throw r;
    return await e.removeTree(n, {
      onDeleted: () => {
        i.deleted = !0;
      }
    }), !0;
  }
}

async function pn(e, n, i, r = {
  deleted: !1
}, {pointerFirst: o = !1} = {}) {
  if (o) await e.unlink(`${n}/.git`), r.deleted = !0;
  for (let s = 0; ;s++) {
    let c = (await e.list(n)).filter(u => u !== ".git");
    if (c.length === 0) break;
    if (s === en) {
      let u = Error("files kept appearing in the worktree while it was being deleted");
      throw u.code = "ENOTEMPTY", u;
    }
    if (c.some(u => u.includes("\ufffd"))) {
      await e.removeTree(n, {
        keep: ".git",
        onDeleted: () => {
          r.deleted = !0;
        }
      });
      continue;
    }
    for (let u of c) await kt(e, `${n}/${u}`, r);
  }
  if (!o) await e.unlink(`${n}/.git`), r.deleted = !0;
  try {
    await e.removeTree(n);
  } catch (s) {
    if (!o) await e.create(`${n}/.git`, i, 420).catch(() => {});
    throw s;
  }
}

export { Smr, Wst, P8t, gNe, zQ, Jqe, zst, Kds, PCe };
