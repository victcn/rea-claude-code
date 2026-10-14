// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-vxr6sv7z.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-hwdwjvh8.js";

import { E, W, Zl } from "./chunk-b0z4bv3v.js";

import "./chunk-nvtwm272.js";

import { Ln, Li } from "./chunk-ddr690nj.js";

import "./chunk-z52kmxx4.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-0pmh7awy.js";

import { Jh, h_ } from "./chunk-60c97a4m.js";

import "./chunk-0cdqg49t.js";

import { xf, se } from "./chunk-kawq2919.js";

import "./chunk-a16yb89m.js";

import "./chunk-6ah1819r.js";

import "./chunk-zvghq5er.js";

import { NNt, Tqn } from "./chunk-9yajep3y.js";

import "./chunk-hedpgw9m.js";

import { IKt } from "./chunk-cbhw3jsa.js";

import { oTn } from "./chunk-m39qtrzk.js";

import "./chunk-2msx6erf.js";

import "./chunk-3gstvx8q.js";

import { jhs, Whs, zhs } from "./chunk-sqb9meyh.js";

import "./chunk-v6b4yr85.js";

import { Zs, TXe, Xve } from "./chunk-rgd61mm3.js";

import "./chunk-wmrc6pz1.js";

import "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

import { constants as v } from "fs";

import { basename as F, dirname as k, isAbsolute as G, join as w, parse as z, resolve as y, sep as H } from "path";

var S = 9e4, A = "writer-locks";

var _ = 8192, P = ".git", U = H === "\\" ? /[\\/]+/ : /\/+/;

async function Se(e, i, t = IKt()) {
  let r = {
    removed: 0,
    errors: 0,
    newestKeptMs: null
  };
  try {
    let s = await M(t, w(e, Tqn, "objects", "info", "alternates"), e, c => c.split(/\r?\n/, 1)[0] ?? "");
    if (s === "absent" || s === "leads_nowhere" || s === "malformed" || s !== "refused" && F(s) !== "objects") return r;
    if (s === "refused") return l(r), r;
    let n = k(s), o = await t.fs.lstat(n, {
      bigint: !0
    }), a = await t.fs.lstat(w(n, "HEAD")).catch(() => null);
    if (!a?.isFile() && !a?.isSymbolicLink()) return l(r), r;
    await I(t, {
      kind: "git_dir",
      dir: n,
      identity: o
    }, {
      cutoffMs: i,
      isLive: await N(t, e, k(n)),
      tally: r
    });
    for (let c of await Q(t, n, r)) await I(t, c, {
      cutoffMs: i,
      isLive: await N(t, e, c.dir),
      tally: r
    }).catch(() => l(r));
  } catch {
    l(r);
  }
  return r;
}

function g(e) {
  e.newestKeptMs = Date.now();
}

function b(e, i, t = H) {
  let [r, s] = [ e, i ].map(n => Ln((t === "\\" ? n.replaceAll("/", t) : n).replace(/^[a-z](?=:)/, o => o.toUpperCase())));
  return r === s;
}

function q(e, i) {
  let t = r => r.replace(/[A-Z]/g, s => s.toLowerCase());
  return b(e, i) || b(t(e), t(i));
}

function l(e) {
  e.errors++, g(e);
}

var C = e => e.replace(/(?<![\r\n])[\r\n]+$/, "");

async function M(e, i, t, r, s) {
  let n = await j(e, i, r);
  if (n === "absent" || n === "malformed" || n === "refused") return n;
  if (Li(n, t)) return "refused";
  let o = s === void 0 ? n : y(s, n);
  if (!G(o)) return "refused";
  let a = await h(e, o);
  return a === "plainly" ? o : a === "missing" && !/[\r\n]/.test(n) ? "leads_nowhere" : "refused";
}

async function h(e, i) {
  let {root: t} = z(i), r = t;
  for (let s of i.slice(t.length).split(U)) {
    if (s === "") continue;
    r = w(r, s);
    try {
      if ((await e.fs.lstat(r)).isSymbolicLink()) return "refused";
    } catch (n) {
      return Zl(n) ? "missing" : "refused";
    }
  }
  return "plainly";
}

async function j(e, i, t) {
  try {
    let r = await se().readFileFdGated(i, _);
    if (r === null) {
      let n = await e.fs.lstat(i);
      return n.isFile() && n.size <= _ ? "refused" : "malformed";
    }
    let s = t(r.content);
    return s === "" || s.includes("\0") ? "malformed" : s;
  } catch (r) {
    return W(r) ? "absent" : "refused";
  }
}

async function N(e, i, t) {
  let r = k(k(i)), s = w(Jh(await h_(t, void 0), r), NNt), n = await Promise.all(D([ i, s ]).map(o => J(e, o)));
  return o => n.some(a => a(o));
}

async function J(e, i) {
  let t = w(i, A), r;
  try {
    r = await e.fs.readdir(t);
  } catch (n) {
    return W(n) ? () => !1 : () => !0;
  }
  let s = new Set;
  for (let n of r) {
    let o = n.endsWith(".writer") ? await e.fs.lstat(w(t, n)).catch(() => null) : null;
    if (o !== null && Date.now() - o.mtimeMs < S) s.add(n.slice(0, -7));
  }
  return n => s.has(n);
}

async function Q(e, i, t) {
  let r = w(i, "worktrees"), s = await e.fs.lstat(r).catch(a => W(a) ? "absent" : null);
  if (s === "absent") {
    if (!(await e.fs.lstat(i).catch(() => null))?.isDirectory()) l(t);
    return [];
  }
  let n = s?.isDirectory() && await h(e, r) === "plainly" ? await e.fs.readdir(r).catch(() => null) : null;
  if (n === null) return l(t), [];
  let o = [];
  for (let a of n) {
    let c = w(r, a), m = await e.fs.lstat(c).catch(() => null);
    if (m === null || m.isSymbolicLink()) {
      l(t);
      continue;
    }
    if (!m.isDirectory()) continue;
    let f = await M(e, w(c, "gitdir"), c, p => p.trimEnd(), c);
    if (f === "leads_nowhere") continue;
    if (f === "absent" || f === "refused" || f === "malformed" || F(f) !== P) {
      l(t);
      continue;
    }
    let d = k(f), u = await j(e, f, C);
    if (u === "absent" || u === "refused") {
      l(t);
      continue;
    }
    if (u === "malformed" || !u.startsWith("gitdir: ")) {
      g(t);
      continue;
    }
    let T = u.slice(8);
    if (Li(T, d)) {
      g(t);
      continue;
    }
    let O = await h(e, y(d, T));
    if (O === "refused") {
      l(t);
      continue;
    }
    if (O === "missing") {
      g(t);
      continue;
    }
    if (b(y(d, T), c)) o.push({
      kind: "linked_worktree",
      dir: d,
      gitFileLine: u
    }); else {
      let [p, R] = await Promise.all([ y(d, T), c ].map(B => e.fs.lstat(B, {
        bigint: !0
      }).catch(() => null)));
      if (p?.ino && p.dev === R?.dev && p.ino === R.ino) l(t); else g(t);
    }
  }
  return o;
}

async function X(e, i) {
  switch (i.kind) {
   case "git_dir":
    {
      let t = await e.lstat("");
      return t.dev === i.identity.dev && t.ino === i.identity.ino;
    }

   case "linked_worktree":
    return V(e, i.gitFileLine);
  }
}

var Z = {
  git_dir: {
    trashName: jhs,
    ignoreFile: void 0
  },
  linked_worktree: {
    trashName: Whs,
    ignoreFile: zhs
  }
};

async function V(e, i) {
  let t = await e.open(P, v.O_RDONLY | v.O_NONBLOCK).catch(() => null);
  if (t === null) return !1;
  try {
    let [r, s] = await Promise.all([ t.stat({
      bigint: !0
    }), e.lstat(P) ]);
    if (r.dev !== s.dev || r.ino !== s.ino) return !1;
    let n = Buffer.alloc(_ + 1), {bytesRead: o} = await t.read(n, 0, n.length, 0);
    return o <= _ && C(n.toString("utf8", 0, o)) === i;
  } catch {
    return !1;
  } finally {
    await t.close().catch(() => {});
  }
}

function ee(e, i, t) {
  let {root: r, dir: s, base: n} = e.path.parse(e.path.normalize(t));
  return i.holdOutside(r, [ ...s.slice(r.length).split(e.path.sep), n ].filter(o => o !== "").join("/"), !0);
}

async function x(e, i, t = i.realRoot) {
  let r = v.O_DIRECTORY | Zs, s = r | Xve | v.O_NOFOLLOW, n = await (i.backend === "win32_handle" ? ee(e, i, t) : i.backend === "darwin_at" ? e.fs.open(t, r | TXe) : t.split("/").filter(o => o !== "").reduce(async (o, a) => {
    let c = await o;
    return e.fs.open(`/proc/self/fd/${c.fd}/${a}`, s).finally(() => c.close().catch(() => {}));
  }, e.fs.open("/", s))).catch(() => null);
  if (n === null) return !1;
  try {
    let [o, a] = await Promise.all([ "fd" in n ? n.stat({
      bigint: !0
    }) : n.stat(), i.lstat("") ]);
    return !xf(a.ino) && o.dev === a.dev && o.ino === a.ino;
  } catch {
    return !1;
  } finally {
    await n.close().catch(() => {});
  }
}

async function I(e, i, {cutoffMs: t, isLive: r, tally: s}) {
  let n = i.dir, {trashName: o, ignoreFile: a} = Z[i.kind];
  try {
    if (!(await e.fs.lstat(e.path.join(n, o))).isDirectory()) {
      l(s);
      return;
    }
  } catch (u) {
    if (!W(u) || await h(e, n) !== "plainly") l(s);
    return;
  }
  let c = await e.fs.realpath(n).catch(() => null);
  if (c === null || !q(c, n)) {
    l(s);
    return;
  }
  let m = e.path.join(c, o), f = await oTn(e, {
    gitRoot: n,
    realRoot: c
  }).catch(() => null);
  if (f === null || "unavailable" in f) {
    l(s);
    return;
  }
  let d = f;
  try {
    if (!await x(e, d) || !b(c, n) && !await x(e, d, n) || !await X(d, i) || !(await d.lstat(o)).isDirectory()) {
      l(s);
      return;
    }
    await te(e, d, o, m, {
      cutoffMs: t,
      isLive: r,
      tally: s
    }), await ne(e, d, o, m, s, a);
  } catch (u) {
    if (!W(u)) l(s);
  } finally {
    await d.close().catch(() => {});
  }
}

async function te(e, i, t, r, {cutoffMs: s, isLive: n, tally: o}) {
  let a = await e.fs.readdir(r);
  for (let c of a) {
    let m = `${t}/${c}`;
    try {
      if (!(await i.lstat(m)).isDirectory()) continue;
      if (n(c.replace(/\.staging$/, ""))) {
        g(o);
        continue;
      }
      let f = await K(e, e.path.join(r, c));
      if (f < s) await Y(i, e, m, s), o.removed++; else o.newestKeptMs = Math.max(o.newestKeptMs ?? -1 / 0, f);
    } catch (f) {
      if (f instanceof L) g(o); else if (!W(f)) l(o);
    }
  }
}

async function ne(e, i, t, r, s, n) {
  let o = await e.fs.readdir(r).catch(() => [ "?" ]);
  try {
    if (n !== void 0 && o.length === 1 && o[0] === n) {
      if ((await i.lstat(`${t}/${n}`)).isFile()) await i.unlink(`${t}/${n}`), await i.rmdir(t).catch(async a => {
        if (E(a) !== "ENOTEMPTY") throw a;
        await i.create(`${t}/${n}`, Buffer.from(`*\n`), 384);
      });
    } else if (o.length === 0) await i.rmdir(t);
  } catch (a) {
    if (!W(a) && E(a) !== "ENOTEMPTY") s.errors++;
  }
}

async function K(e, i) {
  let t = (await e.fs.lstat(i)).mtimeMs, r = await e.fs.readdir(i);
  for (let s of r) {
    let n = e.path.join(i, s);
    try {
      let o = await e.fs.lstat(n);
      if (t = Math.max(t, o.mtimeMs), o.isDirectory()) t = Math.max(t, await K(e, n));
    } catch (o) {
      if (!W(o)) throw o;
    }
  }
  return t;
}

class L extends Error {}

async function Y(e, i, t, r) {
  if (!(Number((await e.lstat(t)).mtimeMs) < r)) throw new L;
  let s = await i.fs.readdir(i.path.join(e.realRoot, ...t.split("/"))).catch(() => []), n = [];
  for (let o of s) {
    let a = `${t}/${o}`;
    try {
      if ((await e.lstat(a)).isDirectory()) await Y(e, i, a, r); else await e.unlink(a);
    } catch (c) {
      if (c instanceof L || E(c) === "ENOTEMPTY") throw c;
      if (!W(c)) n.push(c);
    }
  }
  if (n.length > 0) throw n[0];
  await e.rmdir(t);
}

export { Se as sweepCheckoutSessionTrash };
