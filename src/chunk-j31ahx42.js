// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { E, W } from "./chunk-b0z4bv3v.js";

import { I$ } from "./chunk-ddr690nj.js";

import { t } from "./chunk-kawq2919.js";

import { O } from "./chunk-1xnsr4dy.js";

import { lstat as p, readdir as C, readlink as y, realpath as w, rmdir as N, unlink as P } from "fs/promises";

import { basename as x, dirname as m, isAbsolute as F, join as k, normalize as g, sep as T } from "path";

function rp(n) {
  return n.toLowerCase().replace(/\u0131/g, "i").replace(/\u017F/g, "s");
}

function Qvr(n) {
  let e = "";
  for (let o of n) e += o.toLowerCase();
  return rp(e).replace(/\u03C2/g, "\u03c3");
}

function Zvr(n) {
  let e = O();
  return e === "windows" || e === "macos" ? rp(n) : n;
}

function fks(n, e) {
  let o = null, s = 0, r = [];
  for (let a of n.split("\0\0")) {
    let u = a.split("\0"), c = u.find(v => v.startsWith("worktree "));
    if (c === void 0) continue;
    let f = c.slice(9);
    if (!tMt(f)) return null;
    let h = g(f);
    if (r.push(G8(h)), u.includes(`branch refs/heads/${e}`)) s++, o ??= h;
  }
  if (o === null || s !== 1) return null;
  let l = G8(o), i = 0;
  for (let a of r) if (a === l) i++;
  return i === 1 ? o : null;
}

function eEr(n) {
  return O() === "windows" ? n.replaceAll("\\", "/") : n;
}

function Sd(n) {
  let e = n.replace(O() === "windows" ? /[\\/]+$/ : /\/+$/, "");
  return e === "" ? n : e;
}

function G8(n) {
  let e = Sd(n);
  return Zvr(O() === "macos" ? e.normalize("NFC") : e);
}

function Ydt(n, e) {
  let o = d(n);
  return e.some(s => d(g(s)) === o);
}

function men(n, e) {
  let o = G8(n);
  return e.find(s => G8(g(s)) === o) ?? null;
}

function d(n) {
  let e = Sd(n);
  return O() === "macos" ? e.normalize("NFC") : e;
}

var z = /\p{Cc}/u;

function tMt(n) {
  if (z.test(n) || !F(n) || I$(n)) return !1;
  return O() !== "windows" || /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(n);
}

function Ryo(n) {
  let e = new Set;
  for (let o of n.split("\0\0")) {
    let s = o.split("\0").find(a => a.startsWith("worktree "));
    if (s === void 0) continue;
    let r = s.slice(9);
    if (!tMt(r)) return !1;
    let l = g(r), i = Sd(O() === "macos" ? l.normalize("NFC") : l);
    if (e.has(i)) return !1;
    e.add(i);
  }
  return !0;
}

function tEr(n, e) {
  if (!Ryo(n)) return null;
  let o = (r, l) => O() === "macos" ? r.normalize("NFC") === l.normalize("NFC") : r === l, s = null;
  for (let r of n.split("\0\0")) {
    let l = r.split("\0").find(a => a.startsWith("worktree "));
    if (l === void 0) continue;
    let i = g(l.slice(9));
    if (s === null && e.some(a => o(Sd(i), Sd(g(a))))) s = i;
  }
  return s;
}

async function IN(n, e) {
  return (await xyo(n, e)).verdict;
}

async function xyo(n, e) {
  let o = [];
  for (let l = Sd(n); m(l) !== l && l !== e; l = m(l)) o.push(l);
  if (o.length === 0) return {
    verdict: "unknown"
  };
  let s = O() === "windows", r = null;
  for (let l of o.reverse()) {
    let i = Sd(l), a = await y(i).then(() => "link", u => {
      let c = E(u);
      return c === "EINVAL" ? "clear" : c === "ENOENT" || c === "ENOTDIR" ? "missing" : "unknown";
    });
    if (a === "clear") {
      if (s) {
        let u = await p(i).catch(() => null);
        if (u === null || !u.isDirectory()) return {
          verdict: "unknown",
          at: i
        };
        let c = r ?? await w(m(i)).catch(() => null), f = await w(i).catch(() => null);
        if (c === null || f === null || Qvr(Sd(f)) !== Qvr(k(Sd(c), x(i)))) return {
          verdict: "unknown",
          at: i
        };
        r = f;
      }
      continue;
    }
    if (a === "missing" && !await Pyo(i)) return {
      verdict: "unknown",
      at: i
    };
    return {
      verdict: a,
      at: i
    };
  }
  return {
    verdict: "clear"
  };
}

async function Pyo(n) {
  if (O() !== "windows") return !0;
  return p(`${n}.lnk`).then(() => !1, e => W(e));
}

async function PBn(n, e) {
  return await IN(n, e) === "clear";
}

async function gen(n, e, o) {
  if (!await PBn(n, o)) return !1;
  let s = await w(n).catch(() => null);
  if (s === null || d(s) !== d(e)) return !1;
  let r = await p(Sd(n)).catch(() => null);
  if (r === null || !r.isDirectory()) return !1;
  return FFe(n);
}

async function FFe(n) {
  if (O() !== "windows") return !0;
  let e = await w(m(n)).catch(() => null);
  return !await b(n, e == null ? null : rp(k(e, x(n))));
}

async function b(n, e) {
  try {
    return await P(n), t(`[worktree] unlinked reparse point before removal: ${n}`), 
    !1;
  } catch {}
  try {
    return await N(n), t(`[worktree] removed reparse point or empty directory before removal: ${n}`), 
    !1;
  } catch (r) {
    if (W(r)) return !1;
    if (E(r) !== "ENOTEMPTY") {
      let i = await y(n).then(() => "link", a => E(a) === "EINVAL" || W(a) ? "not-link" : "unknown") !== "not-link" || e == null ? null : await w(n).then(a => rp(a)).catch(() => null);
      if (i == null || i !== e && !i.startsWith(e + T)) return t(`[worktree] refusing to enumerate unremovable entry before removal: ${n}`, {
        level: "warn"
      }), !0;
    }
  }
  let o = await C(n, {
    withFileTypes: !0
  }).catch(r => W(r) ? [] : null);
  if (o == null) return t(`[worktree] could not enumerate ${n} before removal; not certifying`, {
    level: "warn"
  }), !0;
  let s = !1;
  for (let r of o) if (r.isSymbolicLink() || r.isDirectory()) s = await b(k(n, r.name), e) || s;
  return s;
}

export { rp, Qvr, Zvr, fks, eEr, Sd, G8, Ydt, men, tMt, Ryo, tEr, IN, xyo, Pyo, PBn, gen, FFe };
