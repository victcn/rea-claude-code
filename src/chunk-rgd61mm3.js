// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B, he } from "./chunk-3pqddg8f.js";

import { x, E } from "./chunk-b0z4bv3v.js";

import { Un, va, za, Cs, hD } from "./chunk-ddr690nj.js";

import { Pf, wo, mEe, se, VOe, mae, C$t, t } from "./chunk-kawq2919.js";

import { iq, rr, LC, So } from "./chunk-wptm3jf5.js";

import { a } from "./chunk-j016gcgm.js";

import { X } from "./chunk-1zg3hbfq.js";

import { IOe, FMr, Fee } from "./chunk-dgqa0xqf.js";

import { Ue } from "./chunk-nvz3jsgg.js";

function lme(e) {
  let n = LC(e);
  return So(n) ? rr : n;
}

function iln(e) {
  let n = C$t(e);
  return n.includes("\\") || /%[0-9A-Fa-f]{2}/.test(n) || n.split(/[/?#]/).some(r => r === "." || r === "..");
}

function wMo(e) {
  let n = e.trimStart(), r = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(n);
  if (r === null || /^https?$/i.test(r[1] ?? "")) return VOe(n);
  return VOe(r[0] + C$t(n.slice(r[0].length)));
}

function K5(e) {
  if (e.includes("%00") || e.includes("\0")) return !0;
  if (iq(e)) return !0;
  let n = [ mae(e)?.host, mae(e, {
    asRewritten: !0
  })?.host ];
  if (e.includes("://")) n.push(VOe(e.trimStart())?.hostname || void 0, wMo(e)?.hostname || void 0);
  let r = n.map(o => o === void 0 ? null : lme(o));
  return r.some(o => o !== r[0]);
}

var Zs = 524288, TXe = 0, Xve = 2097152;

import { closeSync as y, constants as m, fstatSync as O, lstatSync as h, openSync as L, readlinkSync as F, readSync as z, statSync as Z } from "fs";

import { open as J } from "fs/promises";

import { dirname as b, resolve as q } from "path";

var ygt = 536870912, f = Ue({
  noFollowAny: "untried",
  localVolumes: void 0
}, e => {
  e.noFollowAny = "untried", e.localVolumes = void 0;
}), Q = [ "/", "/System/Volumes/Data" ];

function v() {
  if (f.localVolumes !== void 0) return f.localVolumes;
  let e = !0, n = Q.flatMap(o => {
    try {
      return [ Z(o).dev ];
    } catch (i) {
      if (E(i) !== "ENOENT") e = !1;
      return [];
    }
  }), r = new Set(n);
  if (e) f.localVolumes = r;
  return r;
}

function I(e) {
  if (ee() === "rejected") return "unsupported";
  let n;
  try {
    n = S(b(e));
  } catch (r) {
    let o = E(r);
    if (o === "ELOOP") return "link";
    if (o === "EINVAL") return "elsewhere";
    if (o === "EACCES" || o === "EPERM") return P(b(e));
    throw r;
  }
  try {
    return v().has(O(n).dev) ? "local" : "elsewhere";
  } finally {
    y(n);
  }
}

function P(e) {
  let n = v(), r = b(e);
  if (r === e) return "elsewhere";
  let o;
  try {
    o = S(r);
  } catch (i) {
    let s = E(i);
    if (s === "ELOOP") return "link";
    if (s === "EACCES" || s === "EPERM") {
      let c = P(r);
      return c === "local" && !n.has(k(e)) ? "elsewhere" : c;
    }
    if (s === "EINVAL") return "elsewhere";
    throw i;
  }
  try {
    let i = O(o).dev;
    return n.has(i) && n.has(k(e)) ? "local" : "elsewhere";
  } finally {
    y(o);
  }
}

function k(e) {
  try {
    return h(e).dev;
  } catch {
    return Number.NaN;
  }
}

function S(e) {
  return L(e, m.O_RDONLY | m.O_DIRECTORY | m.O_NONBLOCK | ygt | Zs);
}

async function Iqn() {
  if (f.noFollowAny === "untried") try {
    await (await J("/", m.O_RDONLY | m.O_DIRECTORY | m.O_NONBLOCK | ygt | Zs)).close(), 
    f.noFollowAny = "works";
  } catch (e) {
    f.noFollowAny = E(e) === "EINVAL" ? "rejected" : "works";
  }
  return f.noFollowAny === "rejected";
}

function ee() {
  if (f.noFollowAny === "untried") try {
    y(S("/")), f.noFollowAny = "works";
  } catch (e) {
    f.noFollowAny = E(e) === "EINVAL" ? "rejected" : "works";
  }
  return f.noFollowAny === "rejected" ? "rejected" : "works";
}

function _gt(e, n) {
  return n === "windows" && Un(e) && !za(e) || va(e);
}

function AXe(e) {
  return hD(e) || va(e);
}

function _(e) {
  let n = se();
  return !Cs(e) && !va(e) && Pf(n, e, {
    unreadableAncestry: "unverified",
    surfaceNetworkRaw: !0,
    launchAncestry: mEe(n)
  }) === void 0;
}

function ne() {
  return "linux";
}

var re = 65536;

function aln(e, n, r, o, i) {
  let s = ne(), c = Zs | (s === "windows" ? m.O_RDONLY : m.O_RDONLY | m.O_NONBLOCK | m.O_NOCTTY), d = !n && _gt(e, s) ? ie(e, c, s, r) : ce(e, n, o, c, s, r);
  if (d === null) return null;
  try {
    if (i === void 0) IOe(O(d), e, r); else {
      let u = O(d, {
        bigint: !0
      });
      if (u.ino !== i.ino || u.ctimeNs !== i.ctimeNs || s !== "windows" && u.dev !== i.dev) return p(e, "the file was replaced or changed after its path was checked");
      IOe({
        isDirectory: () => u.isDirectory(),
        isFile: () => u.isFile(),
        size: Number(u.size)
      }, e, r);
    }
    return Fee(te(d, e, r));
  } finally {
    y(d);
  }
}

function te(e, n, r) {
  let o = [], i = 0;
  while (i <= r) {
    let s = Buffer.allocUnsafe(Math.min(re, r + 1 - i)), c = z(e, s, 0, s.length, i);
    if (c === 0) break;
    o.push(s.subarray(0, c)), i += c;
  }
  return FMr(i, n, r), Buffer.concat(o, i);
}

function H(e, n, r) {
  if (r === "macos" && f.noFollowAny !== "rejected") return {
    fd: L(e, n | ygt),
    everyComponent: !0
  };
  return {
    fd: L(e, r === "windows" ? n : n | m.O_NOFOLLOW),
    everyComponent: !1
  };
}

var N = Symbol("no procfs"), oe = Symbol("descriptor path unreadable");

function U(e, n) {
  if (n !== "linux") return N;
  try {
    return F(`/proc/self/fd/${e}`);
  } catch {
    try {
      h("/proc/self/fd");
    } catch {
      return N;
    }
    return oe;
  }
}

function ie(e, n, r, o) {
  if (r === "macos" && I(e) === "link") return p(e, "a link stands above the spelled name");
  let i = h(e);
  if (i.isSymbolicLink()) return M(e), p(e, "a link stands at the spelled name");
  IOe(i, e, o);
  let s;
  try {
    s = H(e, n, r).fd;
  } catch (d) {
    if (E(d) !== "ELOOP") throw d;
    return p(e, "a link stands on the spelled route");
  }
  let c = U(s, r);
  return c === N || c === e ? s : w(s, e, `the descriptor is on ${String(c)}`);
}

function ce(e, n, r, o, i, s) {
  if (!n && !_(e)) return p(e, "its route could not be examined");
  let c = !1;
  if (i === "macos") {
    let l = I(e);
    if (l === "link") return A(e, n);
    c = l === "local" && !r;
  }
  if (!c) {
    let l = h(e);
    if (!l.isSymbolicLink()) IOe(l, e, s); else if (i === "windows") return A(e, n);
  }
  let d;
  try {
    d = H(e, o, i);
  } catch (l) {
    if (E(l) !== "ELOOP") throw l;
    return A(e, n);
  }
  let {fd: u, everyComponent: W} = d;
  try {
    if (W) return u;
    let l = U(u, i);
    if (l !== N) return l === e ? u : w(u, e, `the descriptor is on ${String(l)}`);
    let R = wo(se(), e);
    return !R.isSymlink && R.resolvedPath === e && (R.isCanonical || !n && _(e)) ? u : w(u, e, "the route no longer resolves to it");
  } catch (l) {
    throw w(u, e, "the binding check threw"), l;
  }
}

function A(e, n) {
  if (!n && _(e)) M(e);
  return p(e, "a link appeared on the route");
}

function M(e) {
  if (!h(e).isSymbolicLink()) return;
  let n = q(b(e), F(e));
  if (!_(n)) return;
  try {
    h(n);
  } catch (r) {
    let o = E(r);
    if ((o === "ENOENT" || o === "ENOTDIR") && typeof r === "object" && r !== null) Object.defineProperty(r, V, {
      value: !0
    });
    throw r;
  }
}

var V = Symbol("boundRead.linkToNothing");

function O$s(e) {
  return typeof e === "object" && e !== null && V in e;
}

function w(e, n, r) {
  return y(e), p(n, r);
}

function p(e, n) {
  return t(`boundRead: not reading ${e}: ${n}`, {
    level: "warn"
  }), null;
}

import { createHash as ue, randomUUID as de } from "crypto";

import { closeSync as ae, constants as T, fchmodSync as le, fstatSync as fe, lstatSync as me, mkdirSync as g, openSync as pe } from "fs";

import { tmpdir as C } from "os";

import { join as D } from "path";

function Jf() {
  let e = a.CLAUDE_CODE_TMPDIR;
  if (e) return e;
  return C();
}

var gMr = 44, Oqn = "claude-pdf-", Mqn = "claude-preview-";

function yOe(e) {
  let n = process.getuid?.();
  if (n === void 0) return;
  let r = e.replace(/[\/]+$/, "") || e, o = "Set CLAUDE_CODE_TMPDIR to a directory you control, or ask an administrator to remove it.", i;
  try {
    i = pe(r, T.O_RDONLY | T.O_DIRECTORY | T.O_NOFOLLOW);
  } catch (s) {
    let c = E(s);
    if (c === "ELOOP" || c === "ENOTDIR") throw Error(`Temp directory ${e} is not a directory (may be an attacker-planted symlink). Refusing to use it. ${o}`);
    if (c === "EACCES") {
      let d;
      try {
        let u = me(r);
        if (u.uid !== n) d = u.uid;
      } catch {}
      if (d !== void 0) throw new x(`Temp directory ${e} is owned by uid ${d}, expected ${n}. Refusing to use it \u2014 another user may have pre-created it. ${o}`, "temp dir owned by another uid (EACCES at open); refusing to use it");
      throw new x(`Temp directory ${e} is not readable (its mode may have been altered, or a path component denies search). Refusing to use it \u2014 restore its permissions (chmod 0700) or remove it. ${o}`, "temp dir unreadable (owner-read or path search bit missing); refusing to use it");
    }
    throw s;
  }
  try {
    let s = fe(i);
    if (s.uid !== n) {
      if (n === 0 && a.CLAUDE_CODE_CONTAINER_ID) {
        X("warn", "tempdir_owner_mismatch", {
          observed_uid: s.uid
        });
        return;
      }
      throw Error(`Temp directory ${e} is owned by uid ${s.uid}, expected ${n}. Refusing to use it \u2014 another user may have pre-created it. ${o}`);
    }
    if ((s.mode & 511) !== 448) le(i, 448);
  } finally {
    ae(i);
  }
}

class j {
  ensured=void 0;
  childProcessTmpDirMemo=void 0;
  markEnsured(e) {
    this.ensured = e;
  }
  setChildProcessTmpDirMemo(e) {
    this.childProcessTmpDirMemo = e;
  }
}

var Y = new K(() => new j);

function Hqn() {
  return `claude-${process.getuid?.() ?? 0}`;
}

function ud() {
  return G(Y.of(B().host));
}

function G(e) {
  if (he()) throw Error("The temp directory is unavailable in a diskless session: nothing is created, verified or written under the shared per-uid temp root");
  let n = D(Jf(), Hqn());
  if (n !== e.ensured) {
    if (typeof process.getuid === "function") g(n, {
      recursive: !0,
      mode: 448
    }), yOe(n); else try {
      g(n, {
        recursive: !0,
        mode: 448
      });
    } catch {}
    e.markEnsured(n);
  }
  return n;
}

function _Oe() {
  let e = ud();
  g(e, {
    recursive: !0,
    mode: 448
  }), yOe(e);
  let n = D(e, "plugin-tool-staging");
  return g(n, {
    recursive: !0,
    mode: 448
  }), yOe(n), n;
}

function bOe() {
  let e = Y.of(B().host), n = G(e);
  if (Buffer.byteLength(n) <= gMr) return n;
  let r = C(), o = e.childProcessTmpDirMemo;
  if (o?.forDir === n) return o.result;
  let i = D(r, Hqn()), s = i;
  try {
    g(i, {
      recursive: !0,
      mode: 448
    }), yOe(i);
  } catch {
    s = n;
  }
  return e.setChildProcessTmpDirMemo({
    forDir: n,
    result: s
  }), s;
}

function M$s() {
  let e = Jf();
  if (Buffer.byteLength(e) <= gMr) return e;
  return C();
}

function SOe(e = "claude-prompt", n = ".md", r) {
  let o = r?.contentHash ? ue("sha256").update(r.contentHash).digest("hex").slice(0, 16) : de();
  return D(ud(), `${e}-${o}${n}`);
}

export { lme, iln, wMo, K5, Zs, TXe, Xve, ygt, Iqn, _gt, AXe, aln, O$s, Jf, gMr, Oqn, Mqn, yOe, Hqn, ud, _Oe, bOe, M$s, SOe };
