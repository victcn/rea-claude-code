// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { E } from "./chunk-b0z4bv3v.js";

import { Ht } from "./chunk-nvtwm272.js";

import { cl, Li } from "./chunk-ddr690nj.js";

import { Xl } from "./chunk-r2h53bm2.js";

import { aD } from "./chunk-4dwgr3et.js";

import { xn, mX, As, vMr, Lee, ft } from "./chunk-zscnwzv2.js";

import { HC, g_, WNt, Lt } from "./chunk-9yajep3y.js";

import { Hd, VV } from "./chunk-rh1cb6gh.js";

import { Rsn, ll } from "./chunk-hmce8a0s.js";

import { Ta } from "./chunk-pqzqmnjf.js";

import { O } from "./chunk-1xnsr4dy.js";

import { constants as k } from "fs";

import { lstat as y, open as Q, opendir as ee, realpath as S } from "fs/promises";

import { dirname as U, isAbsolute as F, join as h, resolve as I, sep as te } from "path";

import { finished as ne } from "stream/promises";

var ie = 15e3, P = 512, re = 8, se = 1e6, W = 4096, z = 4096, oe = 8388608, ae = 74 + 4 * z, M = "submodule inspection deadline";

async function x8(e, t) {
  let n = t?.deadlineMs ?? ie;
  try {
    return await Ht(ue(e, n), n, M);
  } catch (i) {
    return {
      kind: "unverifiable",
      reason: i instanceof Error && i.message === M ? "timeout" : "unreadable"
    };
  }
}

function uSe(e) {
  if (e.kind === "unverifiable") return {
    kind: "unverifiable",
    reason: e.reason,
    path: e.path
  };
  let t = [ ...e.withTrackedChanges, ...e.withUntrackedFiles ];
  return t.length > 0 ? {
    kind: "changes",
    paths: t
  } : void 0;
}

function $oe(e) {
  if (e.kind === "changes") {
    let n = e.paths.slice(0, 3).map(A).filter(Boolean), i = e.paths.length - n.length;
    return `changes inside ${e.paths.length === 1 ? "submodule" : "submodules"} ${n.join(", ")}${i > 0 ? ` and ${i} more` : ""}`;
  }
  let t = e.path === void 0 ? void 0 : A(e.path) || void 0;
  switch (e.reason) {
   case "nested_repository":
    return `${t ?? "a directory"} is a separate git repository inside the worktree, not a submodule checkout`;

   case "gitdir_outside_modules":
    return `submodule ${t ?? "checkout"} points at a git directory outside this worktree's own, or its object alternates or config lead somewhere this worktree cannot vouch for`;

   case "unconfigured_gitlink":
    return `${t ?? "a directory"} is a nested repository recorded in the index but not a configured submodule`;

   case "nested_submodules":
    return `submodule ${t ?? "checkout"} holds submodules of its own, which can't be inspected`;

   case "too_many":
    return `it records more than ${P} submodules, too many to inspect`;

   case "unreadable":
    return t === void 0 ? "its submodules' state could not be read" : `the state of submodule ${t} could not be read`;

   case "timeout":
    return "inspecting its submodules took too long";
  }
}

var de = {
  head: 24,
  tail: 16
};

function A(e) {
  return Xl(e, de);
}

async function ue(e, t) {
  let n = {
    repository: [],
    env: Hd(e),
    deadlineMs: t
  }, i = await gSr(e, n);
  if (typeof i === "string") return {
    kind: "unverifiable",
    reason: i
  };
  if (i.length === 0) return {
    kind: "verified",
    withTrackedChanges: [],
    withUntrackedFiles: []
  };
  let o = await Dfo(e, n);
  if (typeof o === "string") return {
    kind: "unverifiable",
    reason: o
  };
  let s = await HC(e);
  if (s === null) return {
    kind: "unverifiable",
    reason: "unreadable"
  };
  let r;
  try {
    r = h(await S(s), "modules");
  } catch {
    return {
      kind: "unverifiable",
      reason: "unreadable"
    };
  }
  let d = {
    lexical: h(s, "modules"),
    real: r
  }, c = new Set(o), a = Ta(re, g => c.has(g) ? fe(e, g, d, n) : ge(e, g)), l = await Promise.all(i.map(g => a(g))), u = [], f = [];
  for (let [g, p] of l.entries()) {
    let w = i[g];
    switch (p) {
     case "absent":
     case "clean":
      break;

     case "tracked":
      u.push(w);
      break;

     case "untracked":
      f.push(w);
      break;

     default:
      return {
        kind: "unverifiable",
        reason: p.unverifiable,
        path: w
      };
    }
  }
  return {
    kind: "verified",
    withTrackedChanges: u,
    withUntrackedFiles: f
  };
}

async function Dfo(e, t) {
  let n = await x(h(e, ".gitmodules"), se);
  switch (n.kind) {
   case "absent":
    return [];

   case "directory":
   case "other":
    return "unreadable";

   case "file":
    break;
  }
  let i = await X(n.text, "^submodule\\..*\\.path$", e, t);
  return i === "unreadable" ? i : H(i.map(o => o.value));
}

async function X(e, t, n, {repository: i, env: o, deadlineMs: s}) {
  let r = await ft(Lt(), [ ...i, ...xn, "config", "--file", "-", "--no-includes", "-z", "--get-regexp", t ], {
    cwd: n,
    env: o,
    input: e,
    timeout: s,
    preserveOutputOnError: !1
  }), d = r.exitCode === 1 && r.error === void 0 && !r.timedOut && !r.maxBufferExceeded;
  if (r.code !== 0 && !d) return "unreadable";
  let c = [];
  for (let a of r.stdout.split("\0")) {
    if (a === "") continue;
    let l = a.indexOf(`\n`);
    if (l === -1) return "unreadable";
    c.push({
      key: a.slice(0, l),
      value: a.slice(l + 1)
    });
  }
  return c;
}

async function gSr(e, t) {
  return Y(e, t, "160000");
}

async function iSs(e, t) {
  return Y(e, t, "120000");
}

async function Y(e, t, n) {
  let i = [ ...t.repository, ...xn, "ls-files", "-s", "-z" ], o = await ft(Lt(), i, {
    cwd: e,
    env: t.env,
    timeout: t.deadlineMs,
    maxBuffer: oe,
    preserveOutputOnError: !1,
    stdin: "ignore"
  });
  if (o.maxBufferExceeded) return ce(e, i, t, n);
  if (o.code !== 0) return "unreadable";
  let s = new D(n);
  return s.push(Buffer.from(o.stdout, "utf8")), s.end();
}

async function ce(e, t, {env: n, deadlineMs: i}, o) {
  let s = Lee(Lt(), t, n), r = new D(o);
  try {
    let d = aD(Lt(), s?.args ?? t, {
      cwd: e,
      env: s?.env ?? n,
      timeout: i,
      stdin: "ignore",
      stdout: "pipe",
      stderr: "ignore"
    });
    d.stdout?.on("data", f => {
      if (r.push(Buffer.isBuffer(f) ? f : Buffer.from(f, "utf8")) !== void 0) d.kill();
    });
    let c = d.stdout ? ne(d.stdout).catch(() => {}) : Promise.resolve(), a = await d, l = !a.timedOut && !a.isCanceled && a.signal === void 0 && a.exitCode === 0;
    if (!l) d.stdout?.destroy();
    await c;
    let u = r.end();
    if (typeof u === "string") return u;
    return l ? u : "unreadable";
  } catch {
    return "unreadable";
  }
}

class D {
  prefix;
  paths=new Set;
  record="none";
  pending=[];
  pendingBytes=0;
  verdict=void 0;
  constructor(e) {
    this.prefix = `${e} `;
  }
  push(e) {
    let t = 0;
    while (this.verdict === void 0 && t < e.length) {
      let n = e.indexOf(0, t), i = n === -1 ? e.length : n;
      if (this.append(e.subarray(t, i)), n === -1) break;
      this.completeRecord(), t = n + 1;
    }
    return this.verdict;
  }
  end() {
    if (this.verdict !== void 0) return this.verdict;
    if (this.record !== "none") return "unreadable";
    return H([ ...this.paths ]);
  }
  append(e) {
    if (e.length === 0 || this.record === "other") return;
    if (this.pending.push(e), this.pendingBytes += e.length, this.record === "none") this.record = "undecided";
    if (this.record === "undecided" && this.pendingBytes >= this.prefix.length) {
      let t = this.pending.length === 1 ? e : Buffer.concat(this.pending);
      if (t.toString("latin1", 0, this.prefix.length) === this.prefix) this.record = "listed", 
      this.pending = [ t ]; else this.record = "other", this.pending = [];
    }
    if (this.record === "listed" && this.pendingBytes > ae) this.verdict = "unreadable";
  }
  completeRecord() {
    if (this.record === "listed" && this.verdict === void 0) {
      let e = Buffer.concat(this.pending).toString("utf8"), t = e.indexOf("\t");
      if (t === -1) this.verdict = "unreadable"; else if (this.paths.add(e.slice(t + 1)), 
      this.paths.size > P) this.verdict = "too_many";
    }
    this.record = "none", this.pending = [], this.pendingBytes = 0;
  }
}

function H(e) {
  let t = new Set;
  for (let n of e) {
    if (n.includes("\ufffd") || !le(n)) return "unreadable";
    if (t.add(n), t.size > P) return "too_many";
  }
  return [ ...t ];
}

function le(e) {
  if (e.length === 0 || e.length > z) return !1;
  return e.split("/").every(t => {
    let n = ll(t);
    return t.replace(/[. ]+$/, "") !== "" && n !== ".git" && n !== "git~1" && !Rsn.test(t) && [ ...t ].every(i => i !== "\\" && i !== ":" && i !== ";" && i > "\x1f" && i !== "\x7f");
  });
}

async function fe(e, t, n, i) {
  let {deadlineMs: o} = i, s = await V(e, t);
  if (s.kind !== "directory") return s.kind === "absent" ? "absent" : {
    unverifiable: "unreadable"
  };
  let r = s.path, d = await x(h(r, ".git"), W);
  switch (d.kind) {
   case "absent":
    return J(r);

   case "directory":
    return {
      unverifiable: "nested_repository"
    };

   case "other":
    return {
      unverifiable: "unreadable"
    };

   case "file":
    break;
  }
  let c = d.text.trim();
  if (!c.startsWith("gitdir:")) return {
    unverifiable: "unreadable"
  };
  let a = c.slice(7).trim();
  if (a === "" || Li(a, r)) return {
    unverifiable: "gitdir_outside_modules"
  };
  let l = I(r, a);
  if (!T(l, n.lexical) && !T(l, n.real)) return {
    unverifiable: "gitdir_outside_modules"
  };
  if (g_(a, r)) return {
    unverifiable: "gitdir_outside_modules"
  };
  let u;
  try {
    u = await S(l);
  } catch {
    return {
      unverifiable: "unreadable"
    };
  }
  if (!T(u, n.real)) return {
    unverifiable: "gitdir_outside_modules"
  };
  try {
    return await y(h(u, "commondir")), {
      unverifiable: "gitdir_outside_modules"
    };
  } catch (m) {
    if (E(m) !== "ENOENT") return {
      unverifiable: "unreadable"
    };
  }
  let f = h(u, "objects"), g = await Z(f, 0, new Set([ f ]));
  if (g !== void 0) return {
    unverifiable: g
  };
  let p = [ h(u, "config"), h(u, "config.worktree") ], w = new Set(p);
  for (let m of p) {
    let B = await j(m, e, i, 0, w);
    if (B !== void 0) return {
      unverifiable: B
    };
  }
  let N = vMr(U(r));
  if (N === null) return {
    unverifiable: "unreadable"
  };
  let G = {
    GIT_CEILING_DIRECTORIES: N,
    GIT_COMMON_DIR: u
  }, _ = {
    repository: [ `--git-dir=${u}`, `--work-tree=${r}` ],
    env: As(G),
    deadlineMs: o
  };
  if (await we(r, _)) return {
    unverifiable: "nested_submodules"
  };
  let R = await VV(r, {
    repository: _.repository,
    envPins: G
  });
  if (!R.ok) return {
    unverifiable: "unreadable"
  };
  let C = await ft(Lt(), [ ..._.repository, ...R.args, ...xn, "--no-optional-locks", ...mX ], {
    cwd: r,
    env: _.env,
    timeout: o,
    preserveOutputOnError: !1
  });
  if (C.code !== 0) return {
    unverifiable: "unreadable"
  };
  let L = C.stdout.split(`\n`).filter(m => m.length > 0);
  if (L.some(m => !m.startsWith("??"))) return "tracked";
  return L.length > 0 ? "untracked" : "clean";
}

async function ge(e, t) {
  let n = await q(e, t);
  switch (n) {
   case "absent":
   case "untracked":
    return n;

   case "repository":
    return {
      unverifiable: "unconfigured_gitlink"
    };

   case "unreadable":
    return {
      unverifiable: "unreadable"
    };
  }
}

function T(e, t) {
  return e.startsWith(t + te);
}

var he = 5, be = 10, v = 16, pe = /^[A-Za-z]:(?![\\/])/, me = /^(?:\.\.\/+)*/;

function K(e, t) {
  return e.includes("\ufffd") || pe.test(e) || cl(F(e) ? e : e.replace(me, "")) || Li(e, t) || g_(e, t);
}

async function Z(e, t, n) {
  if (t > he || n.size > v) return "gitdir_outside_modules";
  try {
    if (!(await y(e)).isDirectory()) return "gitdir_outside_modules";
  } catch {
    return "unreadable";
  }
  let i = h(e, "info");
  try {
    if (!(await y(i)).isDirectory()) return "gitdir_outside_modules";
  } catch (r) {
    return b(E(r)) ? void 0 : "unreadable";
  }
  try {
    return await y(h(i, "http-alternates")), "gitdir_outside_modules";
  } catch (r) {
    if (!b(E(r))) return "unreadable";
  }
  let o = await x(h(i, "alternates"), W);
  switch (o.kind) {
   case "absent":
    return;

   case "directory":
   case "other":
    return "unreadable";

   case "file":
    break;
  }
  let s = 0;
  for (let r of o.text.split(`\n`)) {
    if (r === "" || r.startsWith("#")) continue;
    if (s++, s > v || r.startsWith('"') || K(r, e)) return "gitdir_outside_modules";
    let d;
    try {
      d = await S(I(e, r));
    } catch (a) {
      if (b(E(a))) continue;
      return "unreadable";
    }
    if (n.has(d)) continue;
    n.add(d);
    let c = await Z(d, t + 1, n);
    if (c !== void 0) return c;
  }
  return;
}

var ye = "^(include\\.path|includeif\\..*\\.path|core\\.excludesfile|core\\.attributesfile)$";

async function j(e, t, n, i, o) {
  if (i > be || o.size > v) return "gitdir_outside_modules";
  let s = await x(e, WNt);
  switch (s.kind) {
   case "absent":
    return;

   case "directory":
   case "other":
    return "unreadable";

   case "file":
    break;
  }
  if (!/include|excludesfile|attributesfile/i.test(s.text)) return;
  let r = await X(s.text, ye, t, n);
  if (r === "unreadable") return "unreadable";
  if (r.length > v) return "gitdir_outside_modules";
  let d = U(e);
  for (let {key: c, value: a} of r) {
    let l = c.startsWith("include");
    if (a === "" || a.startsWith("~") || a.startsWith("%(prefix)/") || !l && !F(a) || K(a, d)) return "gitdir_outside_modules";
    if (!l) continue;
    let u = I(d, a), f;
    try {
      f = await S(u);
    } catch (p) {
      if (b(E(p))) continue;
      return "unreadable";
    }
    if (f !== u) return "gitdir_outside_modules";
    if (o.has(f)) continue;
    o.add(f);
    let g = await j(f, t, n, i + 1, o);
    if (g !== void 0) return g;
  }
  return;
}

async function we(e, t) {
  let n = await gSr(e, t);
  if (typeof n === "string") return !0;
  return (await Promise.all(n.map(o => q(e, o)))).some(o => o !== "absent");
}

async function q(e, t) {
  let n = await V(e, t);
  if (n.kind !== "directory") return n.kind;
  try {
    return await y(h(n.path, ".git")), "repository";
  } catch (o) {
    if (!b(E(o))) return "unreadable";
  }
  let i = await J(n.path);
  return i === "absent" || i === "untracked" ? i : "unreadable";
}

async function J(e) {
  let t;
  try {
    t = await ee(e);
  } catch (n) {
    return b(E(n)) ? "absent" : {
      unverifiable: "unreadable"
    };
  }
  try {
    return await t.read() === null ? "absent" : "untracked";
  } catch {
    return {
      unverifiable: "unreadable"
    };
  } finally {
    try {
      await t.close();
    } catch {}
  }
}

async function V(e, t) {
  let n = e;
  for (let i of t.split("/")) {
    n = h(n, i);
    try {
      if (!(await y(n)).isDirectory()) return {
        kind: "absent"
      };
    } catch (o) {
      return b(E(o)) ? {
        kind: "absent"
      } : {
        kind: "unreadable"
      };
    }
  }
  return {
    kind: "directory",
    path: n
  };
}

function b(e) {
  return e === "ENOENT" || e === "ENOTDIR";
}

async function x(e, t) {
  let n = O() === "windows", i;
  if (n) try {
    let s = await y(e, {
      bigint: !0
    });
    if (s.isDirectory()) return {
      kind: "directory"
    };
    if (!s.isFile()) return {
      kind: "other"
    };
    i = {
      dev: s.dev,
      ino: s.ino
    };
  } catch (s) {
    return b(E(s)) ? {
      kind: "absent"
    } : {
      kind: "other"
    };
  }
  let o;
  try {
    o = await Q(e, n ? k.O_RDONLY : k.O_RDONLY | k.O_NOFOLLOW | k.O_NONBLOCK);
  } catch (s) {
    let r = E(s);
    if (b(r)) return {
      kind: "absent"
    };
    return r === "EISDIR" ? {
      kind: "directory"
    } : {
      kind: "other"
    };
  }
  try {
    let s = await o.stat({
      bigint: !0
    });
    if (i !== void 0 && (s.dev !== i.dev || s.ino !== i.ino)) return {
      kind: "other"
    };
    if (s.isDirectory()) return {
      kind: "directory"
    };
    if (!s.isFile() || s.size > BigInt(t)) return {
      kind: "other"
    };
    let r = Number(s.size), {buffer: d, bytesRead: c} = await o.read(Buffer.alloc(r + 1), 0, r + 1, 0);
    if (c > r) return {
      kind: "other"
    };
    return {
      kind: "file",
      text: d.toString("utf8", 0, c)
    };
  } catch {
    return {
      kind: "other"
    };
  } finally {
    await o.close();
  }
}

export { x8, uSe, $oe, Dfo, gSr, iSs };
