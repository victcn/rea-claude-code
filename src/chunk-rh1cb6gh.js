// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { W } from "./chunk-b0z4bv3v.js";

import { j4n } from "./chunk-kawq2919.js";

import { Xl } from "./chunk-r2h53bm2.js";

import { Li, cte, sWe } from "./chunk-ddr690nj.js";

import { xn, Uqn, As, Bqn, ft } from "./chunk-zscnwzv2.js";

import { Jie, zOo, g$s, mgt, NU, Sj, g_, tje, WNt, nje, Lt } from "./chunk-9yajep3y.js";

import { rp } from "./chunk-j31ahx42.js";

import { dMt } from "./chunk-jxw064gd.js";

import { O } from "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

import { lstatSync as y, realpathSync as x, statSync as G } from "fs";

import { devNull as Y } from "os";

import { basename as S, dirname as E, join as d, resolve as R } from "path";

var U = 4096;

function P(n) {
  let e, r = n.includes("\0") || n.split(/\r?\n/).map(t => t.replace(/^[ \t]+/, "")).some(t => !/^[#;]/.test(t) && /[\r\t]|(?:^|[^\\])(?:\\\\)*\\$/.test(t));
  return dMt(n, {
    entry: (t, o, i) => {
      if (t?.name === "core" && !t.quoted && o === "worktree") e = i, r ||= i === void 0 || i === "" || i.length > U || /^(?:~|%\(|:\()/.test(i);
    },
    malformed: () => {
      r = !0;
    }
  }, {
    maxLines: 1 / 0
  }), r ? null : e;
}

var pSe = d(Y, "not-a-git-repository"), J = new Set([ "true", "yes", "on" ]);

function I(n) {
  let e = n.trim().toLowerCase(), r = /^[+-]?(\d+)[kmg]?$/.exec(e);
  return J.has(e) || r !== null && Number(r[1]) !== 0;
}

var T = /(^|\])[^\S\n\r\u2028\u2029]*worktree\s*=/im;

function fSe(n) {
  let e = d(n, ".git"), r;
  try {
    r = y(e);
  } catch (s) {
    let l = W(s) && v(n) ? N(n) : null;
    return l === null ? null : {
      gitDir: l,
      workTree: null,
      commonDir: l
    };
  }
  let t = N(n);
  if (t === null) return null;
  if (r.isDirectory()) {
    let s = d(t, ".git");
    return F(s) ? {
      gitDir: s,
      workTree: t,
      commonDir: s
    } : null;
  }
  let o;
  if (r.isSymbolicLink()) o = mgt(e); else if (r.isFile()) {
    let s = nje(e, tje)?.trim();
    o = s !== void 0 && s.startsWith("gitdir:") ? s.slice(7).trim() : null;
  } else return null;
  if (o === null || o === "" || Li(o, n) || g_(o, n)) return null;
  let i = cte(R(n, o));
  return i === null ? null : q(i, t);
}

function aSs(n) {
  let e = d(n, ".git"), r;
  try {
    r = y(e);
  } catch {
    return !1;
  }
  let t = null;
  if (r.isSymbolicLink()) t = mgt(e); else if (r.isFile()) {
    let i = nje(e, tje)?.trim();
    t = i !== void 0 && i.startsWith("gitdir:") ? i.slice(7).trim() : null;
  }
  if (t === null || t === "" || Li(t, n) || g_(t, n)) return !1;
  let o = cte(R(n, t));
  return o !== null && v(o);
}

var V = new Set([ "ENOENT", "ENOTDIR", "ELOOP" ]);

function N(n) {
  let {real: e, code: r} = sWe(n);
  if (e !== void 0) return e;
  return r !== void 0 && V.has(r) ? null : R(n);
}

function q(n, e) {
  let r = X(n, e);
  if (r !== null) {
    let o = E(E(n));
    return S(E(n)) === "worktrees" && _(r, e) && H(n, o, e) ? {
      gitDir: n,
      workTree: e,
      commonDir: o
    } : null;
  }
  let t = j(n);
  return t !== null && _(t, e) && F(n) ? {
    gitDir: n,
    workTree: e,
    commonDir: n
  } : null;
}

function AY(n) {
  return fSe(n) ?? {
    gitDir: pSe,
    workTree: n,
    commonDir: pSe
  };
}

function Hd(n, e) {
  return As(e, {
    repository: AY(n)
  });
}

function lSs(n, e) {
  return Bqn(e, {
    repository: AY(n)
  });
}

function dSs(n, e) {
  let {gitDir: r, workTree: t, commonDir: o} = AY(e), i = new Set(Uqn), s = {};
  for (let l of Object.keys(n)) if (i.has(l.toUpperCase())) s[l] = void 0;
  return {
    ...n,
    ...s,
    GIT_DIR: r,
    ...t !== null ? {
      GIT_WORK_TREE: t
    } : {
      GIT_IMPLICIT_WORK_TREE: "0"
    },
    GIT_COMMON_DIR: o
  };
}

function v(n) {
  try {
    if (!y(d(n, "HEAD")).isFile() || !y(d(n, "refs")).isDirectory() || !h(n, "commondir")) return !1;
  } catch {
    return !1;
  }
  let e = A(n);
  if (e === null || e.read.some(t => T.test(t)) || e.unread !== void 0 && (T.test(e.unread) || zOo(e.unread, "core", null, "bare").some(t => !I(t)))) return !1;
  let r = e.read.flatMap(t => zOo(t, "core", null, "bare")).at(-1);
  return r !== void 0 && I(r);
}

function A(n) {
  let e = w(n, "config");
  if (e === void 0) return null;
  if (h(n, "config.worktree")) return {
    read: [ e ],
    unread: void 0
  };
  let r = w(n, "config.worktree");
  if (r === void 0) return null;
  let t = g$s(e, "extensions", null, "worktreeConfig").at(-1);
  return t !== void 0 && I(t) ? {
    read: [ e, r ],
    unread: void 0
  } : {
    read: [ e ],
    unread: r
  };
}

function w(n, e) {
  let r = d(n, e), t = Sj(r, n) ? void 0 : nje(r, WNt);
  return t !== void 0 && Jie(t) ? void 0 : t;
}

function F(n) {
  return h(n, "commondir");
}

function h(n, e) {
  try {
    return y(d(n, e)), !1;
  } catch (r) {
    return W(r);
  }
}

function H(n, e, r) {
  let t = d(n, "commondir");
  if (NU(t, n)) return !1;
  let o = nje(t, tje)?.trim();
  if (o === void 0 || o === "" || Li(o, r) || g_(o, n, r)) return !1;
  return _(R(n, o), e);
}

function _(n, e) {
  try {
    let r = G(n, {
      bigint: !0
    }), t = G(e, {
      bigint: !0
    });
    if (!r.isDirectory() || r.dev !== t.dev) return !1;
    if (r.ino !== 0n && t.ino !== 0n) return r.ino === t.ino;
    return b(x.native(n)) === b(x.native(e));
  } catch {
    return !1;
  }
}

function b(n) {
  switch (O()) {
   case "macos":
    return rp(n.normalize("NFC"));

   case "windows":
    return rp(n);

   default:
    return n;
  }
}

function X(n, e) {
  let r = d(n, "gitdir");
  if (NU(r, n)) return null;
  let t = nje(r, tje)?.trim();
  if (t === void 0 || Li(t, e) || g_(t, n, e)) return null;
  let o = R(n, t);
  return S(o) === ".git" ? E(o) : null;
}

function j(n) {
  let e = A(n), r = e === null || e.unread !== void 0 && T.test(e.unread) ? [ null ] : e.read.map(i => P(i)), [t, ...o] = D(r.filter(i => i !== void 0)).map(i => i === null || Li(i, n) || g_(i, n) ? null : R(n, i));
  return typeof t === "string" && o.every(i => i !== null && _(t, i)) ? t : null;
}

var z = /^filter\.(.*)\.(?:clean|smudge|process|required)$/is;

function hSr(n) {
  return n.normalize("NFKD").replace(/\p{M}+/gu, "").toLowerCase();
}

function Lfo(n) {
  return D(Array.from(n).flatMap(e => {
    let r = z.exec(e)?.[1];
    return r === void 0 ? [] : [ r ];
  }));
}

function Nfo(n) {
  return n.flatMap(e => [ [ `filter.${e}.clean`, "" ], [ `filter.${e}.smudge`, "" ], [ `filter.${e}.process`, "" ], [ `filter.${e}.required`, "false" ] ]);
}

var L = 1048576, M = 5e3, Z = Object.fromEntries([ "GIT_TRACE", "GIT_TRACE_SETUP", "GIT_TRACE_PACKET", "GIT_TRACE_PACKFILE", "GIT_TRACE_PERFORMANCE", "GIT_TRACE_SHALLOW", "GIT_TRACE_CURL", "GIT_TRACE_REFS", "GIT_TRACE_FSMONITOR", "GIT_TRACE2", "GIT_TRACE2_EVENT", "GIT_TRACE2_PERF" ].map(n => [ n, "0" ])), $fo = "if that setting is yours, move it to your global git config; if you don't recognize it, remove it from the repository's config, since a tool or checkout you don't trust may have written it";

function e7t(n) {
  switch (n.reason) {
   case "config_unreadable":
    return "git's configuration for the repository could not be read in full";

   case "conditional_include":
    return "the repository's own git config has a conditional include (includeIf), so what a spawn there would load cannot be determined";

   case "unsafe_key":
    return `the repository's own git config sets ${n.lfsKey === void 0 ? n.key : `${n.key}, an entry git-lfs reads as ${n.lfsKey}`}, which names a program git-lfs would run for any LFS path, on checkout and on status alike (${$fo})`;
  }
}

var Q = /^includeif\..*\.path$/s, K = /lfs.customtransfer..+?.path|^lfs\.(?:.*\.)?standalonetransferagent$|^lfs\.extension\./su, nn = {
  head: 60,
  tail: 40
};

function ySr(n) {
  return Xl(j4n(n), nn);
}

async function VV(n, e = {}) {
  let r = await v$n(n, e);
  if (!r.ok) return r;
  let t = Lfo(r.entries.map(([o]) => o));
  if (t.some(o => o.includes("=") || o.includes(`\n`))) return {
    ok: !1,
    reason: "filter_name_unrepresentable"
  };
  return {
    ok: !0,
    args: Nfo(t).flatMap(([o, i]) => [ "-c", `${o}=${i}` ])
  };
}

function en(n, e) {
  return ft(Lt(), n, {
    ...e,
    stdin: "ignore"
  });
}

async function v$n(n, {repository: e = [], pin: r, envPins: t = {}, base: o, run: i = en} = {}) {
  let s = {
    args: e,
    envPins: t,
    base: o,
    pin: e.length > 0 ? void 0 : r ?? AY(n),
    run: i
  }, l = await B(n, "--local", s);
  if (l === null) return {
    ok: !1,
    reason: "config_unreadable"
  };
  let a = await B(n, "--worktree", s);
  if (a === null) return {
    ok: !1,
    reason: "config_unreadable"
  };
  let g = [ ...l, ...a ];
  for (let c of g) {
    let [u] = c;
    if (Q.test(hSr(u))) return {
      ok: !1,
      reason: "conditional_include"
    };
    for (let f of D([ u, ...tn(c) ])) if (K.test(f) || K.test(hSr(f))) return {
      ok: !1,
      reason: "unsafe_key",
      key: ySr(u),
      ...f === u ? {} : {
        lfsKey: ySr(f)
      }
    };
  }
  return {
    ok: !0,
    entries: g
  };
}

async function Olt(n, e, {envPins: r, base: t, repository: o, buildInvocation: i = (s, {dir: l, env: a}) => ({
  file: Lt(),
  args: [ ...s ],
  cwd: l,
  env: a
})}) {
  let s = i([ ...xn, "config", "--includes", "--null", "--show-scope", "--get-regexp", e ], {
    dir: n,
    env: As(r, {
      base: t,
      repository: o
    })
  }), l = await ft(s.file, s.args, {
    cwd: s.cwd,
    env: s.env,
    extendEnv: !1,
    timeout: M,
    preserveOutputOnError: !1,
    stdin: "ignore"
  });
  if (l.code !== 0) return (l.exitCode === 1 || l.exitCode === 129) && !l.timedOut && !l.maxBufferExceeded ? [] : null;
  let a = l.stdout.split("\0"), g = [];
  for (let c = 0; c + 1 < a.length; c += 2) {
    let u = a[c], f = a[c + 1] ?? "", m = f.indexOf(`\n`);
    if ((u === "system" || u === "global" || u === "command") && m !== -1) g.push([ f.slice(0, m), f.slice(m + 1) ]);
  }
  return g;
}

async function B(n, e, {args: r, envPins: t, base: o, pin: i, run: s}) {
  let {code: l, stdout: a, stderr: g, maxBufferExceeded: c} = await s([ ...r, ...xn, "config", e, "--includes", "-z", "--list" ], {
    cwd: n,
    env: As({
      ...t,
      LC_ALL: "C",
      ...Z
    }, {
      repository: i,
      base: o
    }),
    ...o !== void 0 && {
      extendEnv: !1
    },
    timeout: M,
    maxBuffer: L
  });
  if (c === !0 || Buffer.byteLength(a) >= L) return null;
  let u = g.replace(/\n+$/, ""), f = u.search(/^fatal: /m), m = f === -1 ? u : u.slice(f);
  if (l === 128 && /^fatal: unable to read config file '[^\n]*config(?:\.worktree)?': No such file or directory$/.test(m)) return [];
  if (e === "--worktree" && l === 128 && /^fatal: --worktree cannot be used with multiple working trees unless the config\nextension worktreeConfig is enabled\. Please read "CONFIGURATION FILE"\nsection in "git help worktree" for details$/.test(m)) return [];
  if (e === "--worktree" && l === 129 && /unknown option `worktree'/.test(g)) return [];
  if (l !== 0) return null;
  let k = a.split("\0").filter(p => p !== "").map(p => {
    let C = p.indexOf(`\n`);
    return C === -1 ? [ p, null ] : [ p.slice(0, C), p.slice(C + 1) ];
  });
  return k.some(([p]) => p.includes("\ufffd")) ? null : k;
}

function tn([n, e]) {
  return (e === null ? n : `${n}=${e}`).split(`\n`).flatMap(r => {
    let t = r.indexOf("=");
    return t === -1 ? [] : [ r.slice(0, t).trim() ];
  });
}

export { pSe, fSe, aSs, AY, Hd, lSs, dSs, hSr, Lfo, Nfo, $fo, e7t, ySr, VV, v$n, Olt };
