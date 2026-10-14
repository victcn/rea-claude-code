// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { WX, Vt } from "./chunk-vxr6sv7z.js";

import { q, he } from "./chunk-3pqddg8f.js";

import { x, l, E, Gme } from "./chunk-b0z4bv3v.js";

import { Np } from "./chunk-7en5gt36.js";

import { f } from "./chunk-3ykz5st8.js";

import { wo, uo, se, Oje, wA, t } from "./chunk-kawq2919.js";

import { Vn, i_ } from "./chunk-xywp7esx.js";

import { UNt, z5, SXe, cS } from "./chunk-9yajep3y.js";

import { d } from "./chunk-6ah1819r.js";

import { Og } from "./chunk-r276nwd3.js";

import { io } from "./chunk-4v78v8fd.js";

import { jf, AP } from "./chunk-9tdwgnpn.js";

import { jO } from "./chunk-3tedvrs9.js";

import { O } from "./chunk-1xnsr4dy.js";

import { D } from "./chunk-hmqkrrtz.js";

function B(e) {
  if (!WX(e)) return !1;
  if (Vt(e)) return !0;
  return /^[A-Za-z0-9][A-Za-z0-9_]*$/.test(e) && jO(e) !== void 0;
}

function Z$n(e, n = {}) {
  return n.acceptCustomIds ? WX(e) : B(e);
}

function J$e(e, n, i = {}) {
  if (n) return {
    adoptedSessionId: null,
    effectiveFork: !0
  };
  if (e === void 0) return {
    adoptedSessionId: null,
    effectiveFork: !1
  };
  if (Z$n(e, i)) return {
    adoptedSessionId: e,
    effectiveFork: !1
  };
  return t(`resume: transcript session id (${typeof e}) rejected by the adoption gate; continuing as a fork under the fresh session id`), 
  f("session_resume", "unadoptable_session_id"), {
    adoptedSessionId: null,
    effectiveFork: !0
  };
}

import { randomBytes as gt } from "crypto";

import { constants as m, fstat as kt } from "fs";

import { lstat as N, mkdir as ut, open as X, readdir as mt, readlink as R, realpath as M, symlink as Z, unlink as W } from "fs/promises";

import { basename as z, dirname as y, isAbsolute as at, join as b, resolve as I, sep as F } from "path";

var A = m.O_NOFOLLOW ?? 0, yt = 8388608, kIt = 5368709120, NSr = "5GB", O8 = 67108864;

function w7t() {
  return jf();
}

function TIt() {
  let e = i_()?.adoptShellOutputRoot;
  if (e !== void 0) return b(e, q(), "tasks");
  let n = Vn();
  if (n.outputDir === void 0 || he()) n.outputDir = b(AP(), q(), "tasks");
  return n.outputDir;
}

function Umo(e) {
  return b(AP(), e, "tasks");
}

function Bmo() {
  return i_()?.adoptShellOutputRoot !== void 0 ? TIt() : (he() ? void 0 : Vn().outputDir) ?? b(AP(), q(), "tasks");
}

function Ot() {
  let e = Vn();
  if (e.outputDir === void 0) {
    if (i_() !== null) return b(AP(), q(), "tasks");
    e.outputDir = b(AP(), q(), "tasks");
  }
  return e.outputDir;
}

function v7t(e) {
  if (he()) throw Error("Task output is not written to disk in a diskless session");
  let n = Vn().outputPathBindings.get(e);
  if (n !== void 0) return n;
  let i = b(TIt(), `${e}.output`);
  return Vn().outputPathBindings.set(e, i), i;
}

function ju(e) {
  if (he()) throw Error("Task output has no file in a diskless session");
  let n = Vn().outputPathBindings.get(e);
  if (n !== void 0) return n;
  return b(Ot(), `${e}.output`);
}

function Y(e) {
  let n = Vn().pendingOutputOps;
  return n.add(e), e.finally(() => n.delete(e)).catch(() => {}), e;
}

var Tt = 16777216, U = `\n[output omitted: it could not be written to disk]\n`;

class eFn {
  #c;
  #n=null;
  #t=[];
  #d=0;
  #s=!1;
  #e=0;
  #o=0;
  #i=!1;
  #a=new Set;
  #l=!1;
  #r=null;
  #u=null;
  constructor(e, n) {
    this.#c = n ?? v7t(e);
  }
  append(e) {
    if (this.#s) return;
    if (this.#d += e.length, this.#d > kIt) this.#s = !0;
    let n = this.#s ? `\n[output truncated: exceeded ${NSr} disk cap]\n` : e;
    if (this.#t.push(n), this.#e += n.length, !this.#r) this.#r = new Promise(i => {
      this.#u = i;
    }), Y(this.#g());
  }
  flush() {
    return this.#r ?? Promise.resolve();
  }
  get failing() {
    return this.#i;
  }
  get lostOutput() {
    return this.#l;
  }
  get unwrittenChars() {
    return this.#e;
  }
  cancel() {
    this.#o += 1, this.#t.length = 0, this.#e = 0;
  }
  async #f() {
    while (!0) {
      try {
        if (!this.#n) this.#n = await CIt(this.#c);
        while (!0) {
          let e = this.#o;
          try {
            await this.#w();
          } catch (n) {
            if (this.#o === e) this.#l = !0, this.#t.unshift(U), this.#e += U.length;
            throw n;
          }
          if (this.#t.length === 0) break;
        }
      } finally {
        if (this.#n) {
          let e = this.#n;
          this.#n = null, await e.close();
        }
      }
      if (this.#t.length) continue;
      break;
    }
  }
  #w() {
    return this.#n.appendFile(this.#h());
  }
  #h() {
    let e = this.#t.splice(0, this.#t.length);
    this.#e = 0;
    let n = 0;
    for (let r of e) n += Buffer.byteLength(r, "utf8");
    let i = Buffer.allocUnsafe(n), s = 0;
    for (let r of e) s += i.write(r, s, "utf8");
    return i;
  }
  async #g() {
    try {
      await this.#f(), this.#p();
    } catch (e) {
      if (!this.#i) this.#i = !0, t(`Task output drain failed (will retry once): ${e}`, {
        level: "error"
      });
      if (this.#t.length > 0) try {
        await this.#f(), this.#p();
      } catch (n) {
        this.#k(n);
      }
    } finally {
      let e = this.#u;
      this.#r = null, this.#u = null, e();
    }
  }
  #p() {
    this.#i = !1, this.#a.clear();
  }
  #k(e) {
    let n = E(e), i = n !== void 0 && Gme.has(n) ? "exhaustion" : "unexpected", s = `${i}:${n ?? "no errno"}`;
    if (!this.#a.has(s)) switch (this.#a.add(s), i) {
     case "exhaustion":
      t(`Task output drain retry failed (${n}): ${e}`, {
        level: "error"
      });
      break;

     case "unexpected":
      d(e);
      break;
    }
    if (this.#e > Tt) t(`Task output still cannot be written (${n ?? "no errno"}); dropped ${this.#e} chars of unwritten output`, {
      level: "error"
    }), this.#l = !0, this.#t.length = 0, this.#t.push(U), this.#e = U.length;
  }
}

function Et(e) {
  let n = Vn().diskOutputs.get(e);
  if (!n) n = new eFn(e), Vn().diskOutputs.set(e, n);
  return n;
}

function Q$e(e, n) {
  Et(e).append(n);
}

function gf(e) {
  return Y((async () => {
    let n = Vn(), i = n.diskOutputs.get(e);
    if (i) {
      if (await i.flush(), i.failing && i.unwrittenChars > 0) t(`Task output writer evicted while failing; discarded ${i.unwrittenChars} chars of unwritten output`, {
        level: "error"
      });
      n.diskOutputs.delete(e);
    }
    E7t(e);
  })());
}

function E7t(e) {
  let n = Vn().outputPathBindings.get(e);
  if (n !== void 0 && i_() === null && n === b(TIt(), `${e}.output`)) Vn().outputPathBindings.delete(e);
}

async function jmo(e, n, i = yt) {
  try {
    let s = await vSe(ju(e));
    if (!s) return {
      content: "",
      newOffset: n
    };
    let r;
    try {
      r = await Oje(s, n, i);
    } finally {
      await s.close();
    }
    if (!r) return {
      content: "",
      newOffset: n
    };
    return {
      content: r.content,
      newOffset: n + r.bytesRead
    };
  } catch (s) {
    let r = E(s);
    if (r === "ENOENT" || qlt(s)) return {
      content: "",
      newOffset: n
    };
    if (r && Gme.has(r)) t(`getTaskOutputDelta failed (${r}): ${s}`, {
      level: "error"
    }); else d(s);
    return {
      content: "",
      newOffset: n
    };
  }
}

async function AIt(e) {
  try {
    let n = await vSe(ju(e));
    if (!n) return 0;
    try {
      return (await n.stat()).size;
    } finally {
      await n.close();
    }
  } catch (n) {
    if (qlt(n)) throw n;
    let i = E(n);
    if (i === "ENOENT") return 0;
    if (i === "EACCES" || i === "EPERM") {
      let s = await N(ju(e)).catch(() => null);
      if (s !== null && s.isFile() && (s.mode & 256) === 0) return s.size;
      g(ju(e), `output no longer measurable (${i})`);
    }
    if (i && Gme.has(i)) t(`getTaskOutputSize failed (${i}): ${n}`, {
      level: "error"
    }); else d(n);
    return 0;
  }
}

async function b6s(e, n) {
  if (he()) return;
  let i = Vn(), s = D([ ...i.outputDir !== void 0 ? [ i.outputDir ] : [], ...[ ...i.outputPathBindings.values() ].map(o => y(o)) ]);
  if (s.length === 0) return;
  let r = e + F;
  for (let o of s) {
    let u;
    try {
      u = await mt(o);
    } catch (a) {
      let p = E(a);
      if (p !== "ENOENT") if (p && Gme.has(p)) t(`repointTaskOutputSymlinks readdir failed (${p}): ${a}`, {
        level: "error"
      }); else d(a);
      continue;
    }
    await vt(o, u, r, e, n);
  }
}

async function vt(e, n, i, s, r) {
  let o = Vn().linkedOutputs;
  for (let u of n) {
    if (!u.endsWith(".output")) continue;
    let a = b(e, u), p = o.get(a), c;
    try {
      c = O() === "windows" ? void 0 : await C(a, {
        replaceLeaf: !0
      });
      let w = c?.ioPath ?? a;
      if (p === void 0 && e === Vn().outputDir) p = await R(w).then(h => ct(a, w, h)).catch(() => {});
      if (p === void 0 || !p.startsWith(i)) continue;
      let k = r + p.slice(s.length), T = await Q(w);
      if (T === null) continue;
      if (T !== p) g(a, "output symlink was re-pointed");
      if (await (c?.recheckBeforeWrite()), await W(w), o.get(a) === p) await nt(a, k);
      try {
        await (c?.recheckBeforeWrite()), await Z(k, w).catch(async h => {
          if (E(h) !== "EEXIST") throw h;
          let S = await R(w).catch(() => {});
          if (S !== k && S !== o.get(a)) throw h;
        });
      } catch (h) {
        if (o.get(a) === k) o.delete(a);
        throw h;
      }
      if (await R(w).catch(() => {}) === k) o.set(a, k);
    } catch (w) {
      if (E(w) !== "ENOENT" && !qlt(w)) d(w);
    } finally {
      await (c?.close());
    }
  }
}

async function _(e, n, i = 0) {
  if (he()) throw Error("Task output is not written to disk in a diskless session");
  if (O() === "windows") return await ut(y(e), {
    recursive: !0
  }), X(e, n.windowsFlags);
  let s = await C(e, {
    replaceLeaf: !0
  });
  try {
    let r = await tt(s.ioPath);
    if (r?.isSymbolicLink()) {
      let a = await J(e, s.ioPath);
      if (a === null) {
        if (n.relooked) g(e, "output leaf changed during open");
        return await s.close(), _(e, {
          ...n,
          relooked: !0
        }, i);
      }
      if (n.exclusive || i > 0 || !L(a)) g(e, "output link is not appendable");
      return await _(a, {
        exclusive: n.exclusive,
        windowsFlags: n.windowsFlags
      }, i + 1);
    }
    if (r !== null && (!r.isFile() || r.nlink !== 1 && i === 0)) g(e, "existing output is not a plain file");
    await s.recheckBeforeWrite();
    let o = n.exclusive || r === null, u;
    try {
      u = await z5(s.ioPath, m.O_WRONLY | m.O_APPEND | (o ? m.O_CREAT | m.O_EXCL : 0) | A | (m.O_NONBLOCK ?? 0), O());
    } catch (a) {
      if (!n.exclusive && E(a) === "EEXIST" && !n.retried) return await s.close(), _(e, {
        ...n,
        retried: !0
      }, i);
      throw a;
    }
    if (i > 0 && r === null) {
      let a = await u.stat();
      K.set(e, {
        dev: a.dev,
        ino: a.ino
      });
    }
    try {
      await et(u, r, e, {
        registeredIdentity: i > 0 ? dt(e) : void 0
      });
    } catch (a) {
      throw await u.close().catch(() => {}), a;
    }
    return u;
  } catch (r) {
    throw j(r, e);
  } finally {
    await s.close();
  }
}

async function vSe(e, n = 0, i = !1) {
  if (O() === "windows") {
    let r = await tt(e);
    if (r === null) return null;
    if (r.isSymbolicLink()) {
      let u = await J(e, e);
      if (u === null) {
        if (i) g(e, "output leaf changed during open");
        return vSe(e, n, !0);
      }
      return lt(u, n, e);
    }
    if (!r.isFile()) g(e, "not a regular file");
    let o = await X(e, "r");
    return await et(o, r, e, {
      anyLinkCount: !0
    }), o;
  }
  let s;
  try {
    s = await C(e, {
      replaceLeaf: !0,
      create: !1
    });
  } catch (r) {
    if (E(r) === "ENOENT") return null;
    throw r;
  }
  try {
    let r = await tt(s.ioPath);
    if (r === null) return null;
    if (r.isSymbolicLink()) {
      let u = await J(e, s.ioPath);
      if (u === null) {
        if (i) g(e, "output leaf changed during open");
        return await s.close(), vSe(e, n, !0);
      }
      return await lt(u, n, e);
    }
    if (n === 0 && r.isFile() && r.nlink === 0) return null;
    if (!r.isFile() || r.nlink !== 1 && n === 0) g(e, "not a regular nlink-1 file");
    await s.recheckBeforeWrite();
    let o = await z5(s.ioPath, m.O_RDONLY | A | (m.O_NONBLOCK ?? 0), O());
    try {
      if (await et(o, r, e, {
        registeredIdentity: n > 0 ? dt(e) : void 0,
        unlinkedIsGone: n === 0
      }) === "gone") return null;
    } catch (u) {
      throw await o.close().catch(() => {}), u;
    }
    return o;
  } catch (r) {
    if (E(r) === "ENOENT") return null;
    throw j(r, e);
  } finally {
    await s.close();
  }
}

async function ct(e, n, i) {
  let s = at(i) && I(i).startsWith(I(Np()) + F);
  if (!at(i) || !L(i) && !s) return g(e, "output is an unregistered symlink of a shape this session does not create");
  let r = await N(n);
  if (!r.isSymbolicLink() || r.ctimeMs >= Vn().linksInheritedBeforeFor(y(e))) return g(e, "output is an unregistered symlink made during this session");
  return await nt(e, i), i;
}

async function J(e, n) {
  let i = Vn().linkedOutputs.get(e);
  if (i === void 0) {
    if (!k7t(e)) return g(e, "output is an unregistered symlink outside any tasks directory");
    let r = await Q(n);
    if (r === null) return null;
    i = await ct(e, n, r);
  }
  let s = await Q(n);
  if (s === null) return null;
  if (s !== i) return g(e, "output symlink was re-pointed");
  return i;
}

async function Q(e) {
  try {
    return await R(e);
  } catch (n) {
    if (E(n) === "EINVAL") return null;
    throw n;
  }
}

async function lt(e, n, i) {
  if (L(e)) {
    if (n > 0) return g(i, "output links chain");
    return vSe(e, n + 1);
  }
  let s, r;
  try {
    let o = await M(e);
    if (L(o)) return g(i, "output link leads back into the tasks tree");
    r = await N(o), s = await z5(o, m.O_RDONLY | A | (m.O_NONBLOCK ?? 0), O());
  } catch (o) {
    if (qlt(o)) throw o;
    if (E(o) === "ENOENT") return null;
    throw j(o, i);
  }
  try {
    let o = await s.stat();
    if (!o.isFile() || o.ino !== r.ino || o.dev !== r.dev) g(i, "link target is not a regular file");
  } catch (o) {
    throw await s.close().catch(() => {}), o;
  }
  return s;
}

function L(e) {
  let n = jf();
  return e === n || e.startsWith(n.endsWith(F) ? n : n + F);
}

async function tt(e) {
  try {
    return await N(e);
  } catch (n) {
    if (E(n) === "ENOENT") return null;
    throw n;
  }
}

var K = new Map;

function dt(e) {
  let n = K.get(e);
  if (n === void 0) return g(e, "link target identity was never recorded");
  return n;
}

async function nt(e, n) {
  if (L(n)) await ft(n);
  Vn().linkedOutputs.set(e, n);
}

async function ft(e) {
  let n = await C(e, {
    replaceLeaf: !0,
    create: !1
  });
  try {
    let i = await z5(n.ioPath, m.O_RDONLY | A | (m.O_NONBLOCK ?? 0), O()).catch(s => {
      throw j(s, e);
    });
    try {
      let s = await i.stat();
      if (!s.isFile() || s.nlink !== 1) g(e, "link target is not a regular single-link file");
      K.set(e, {
        dev: s.dev,
        ino: s.ino
      });
    } finally {
      await i.close();
    }
  } finally {
    await n.close();
  }
}

async function et(e, n, i, s) {
  try {
    let r = await e.stat(), o = s?.registeredIdentity;
    if (s?.unlinkedIsGone && o === void 0 && !s.anyLinkCount && n !== null && r.isFile() && r.nlink === 0 && r.ino === n.ino && r.dev === n.dev) return await e.close().catch(() => {}), 
    "gone";
    if (!r.isFile() || (o !== void 0 ? r.ino !== o.ino || r.dev !== o.dev : !s?.anyLinkCount && r.nlink !== 1) || n !== null && (r.ino !== n.ino || r.dev !== n.dev)) g(i, "output file identity changed");
    return "same";
  } catch (r) {
    throw await e.close().catch(() => {}), r;
  }
}

function j(e, n) {
  let i = E(e);
  if (i === "ELOOP" || i === "EISDIR" || i === "ENOTDIR" || i === "ENXIO" || i === "EOPNOTSUPP" || i === "ENOTSUP") try {
    g(n, `open refused a swapped leaf (${i})`);
  } catch (s) {
    return s;
  }
  return e;
}

function bt(e) {
  let n = it(), i = I(e);
  if (i.startsWith(n + F)) return i;
  let s = se(), r = y(y(y(y(i)))), {resolvedPath: o} = wo(s, r);
  return io(o) === io(n) ? b(n, i.slice(r.length + 1)) : i;
}

function it() {
  return y(y(y(I(TIt()))));
}

function k7t(e) {
  let n = it(), i = se(), s = new Set([ n, wo(i, n).resolvedPath ].map(r => io(r)));
  return uo(e).some(r => {
    let o = y(I(r));
    return io(z(o)) === "tasks" && pt(z(y(o))) && s.has(io(y(y(y(o)))));
  });
}

function G() {
  let e = [ "????????-????-????-????-????????????", "session_*", "cse_*" ], n = q();
  if (!B(n) && /^[A-Za-z0-9._-]+$/.test(n)) e.push(n);
  return e;
}

function pt(e) {
  return B(e) || e === q();
}

function Wmo(e) {
  let n = it(), i = se(), s = D([ n, wo(i, n).resolvedPath ]), r = new Set, o = (a, p) => {
    let c = a.endsWith(F) ? a : a + F;
    return io(p).startsWith(io(c)) ? p.slice(c.length) : null;
  }, u = a => a.replaceAll("\\", "/");
  for (let a of uo(e)) {
    let p = I(a);
    for (let c of s) {
      let w = z(c);
      if (io(p) === io(c)) {
        for (let h of G()) r.add(`!/*/${h}/tasks/**`), r.add(`!**/${w}/*/${h}/tasks/**`);
        continue;
      }
      let k = o(p, c);
      if (k !== null) {
        for (let h of G()) r.add(`!/${u(k)}/*/${h}/tasks/**`), r.add(`!**/${w}/*/${h}/tasks/**`);
        continue;
      }
      let T = o(c, p);
      if (T !== null) {
        let h = T.split(F);
        if (h.length === 1) for (let S of G()) r.add(`!/${S}/tasks/**`), r.add(`!**/${w}/${u(T)}/${S}/tasks/**`); else if (!pt(h[1] ?? "")) ; else if (h.length === 2) r.add("!/tasks/**"), 
        r.add(`!**/${w}/${u(T)}/tasks/**`); else if (io(h[2] ?? "") === "tasks") r.add("!**");
      }
    }
  }
  return [ ...r ];
}

async function tFn(e) {
  e = bt(e);
  let n = await vSe(e);
  if (n === null) throw await N(e), new x(`task output ${e} is no longer available (the file it pointed to was removed)`, "task output link target removed");
  let i = O();
  return {
    ioPath: (i === "linux" || i === "wsl") && await R(`/proc/self/fd/${n.fd}`).then(() => !0, () => !1) ? UNt(n.fd) : i === "macos" ? `/dev/fd/${n.fd}` : e,
    canonicalPath: e,
    handle: n,
    close: () => n.close()
  };
}

var $Sr = 8192;

async function M5e(e) {
  return H5e(ju(e), $Sr);
}

async function H5e(e, n) {
  let i = await vSe(e);
  if (i === null) return {
    content: "",
    bytesRead: 0,
    bytesTotal: 0
  };
  try {
    return await wA(i, n);
  } finally {
    await i.close();
  }
}

async function T7t(e) {
  let n = Vn().linkedOutputs.get(e);
  if (Vn().linkedOutputs.delete(e), n !== void 0) K.delete(n);
  if (O() === "windows") {
    await W(e);
    return;
  }
  let i;
  try {
    i = await C(e, {
      replaceLeaf: !0,
      create: !1
    });
  } catch (s) {
    if (E(s) === "ENOENT") return;
    throw s;
  }
  try {
    await i.recheckBeforeWrite(), await W(i.ioPath);
  } finally {
    await i.close();
  }
}

var St = new Uint8Array([ 10 ]);

async function zmo(e) {
  let n = `${e}.${gt(6).toString("hex")}.probe`;
  try {
    let i;
    try {
      i = await _(n, {
        exclusive: !0,
        windowsFlags: "wx"
      });
    } catch {
      return null;
    }
    try {
      await i.write(St);
    } finally {
      await i.close();
    }
    return null;
  } catch (i) {
    return E(i) ?? null;
  } finally {
    await T7t(n).catch(i => {
      t(`probeTaskOutputWrite: could not delete ${n}: ${l(i)}`);
    });
  }
}

async function Gmo(e, n) {
  let i = await _(e, {
    exclusive: !1,
    windowsFlags: "w"
  });
  try {
    await i.truncate(0), await i.writeFile(n);
  } finally {
    await i.close();
  }
}

async function C(e, n) {
  let i = y(e), s = z(e), r = v.get(i);
  if (r !== void 0) {
    let c = await r.catch(() => null);
    if (c !== null) {
      let k = await Promise.all([ c.handleStat(), N(i) ]).then(([T, h]) => T.nlink > 0 && h.isDirectory() && h.ino === T.ino && h.dev === T.dev, () => !1) ? c.viewFor(s) : null;
      if (k !== null) return k;
      if (v.get(i) === r) v.delete(i);
      await c.release();
    } else if (v.get(i) === r) v.delete(i);
  }
  let o = v.get(i);
  if (o !== void 0 && o !== r) return C(e, n);
  let u = (async () => {
    let c;
    try {
      c = await cS(e, [ e ], {
        createParents: n?.create ?? !0,
        ...n?.replaceLeaf && {
          leaf: "replace"
        }
      });
    } catch (P) {
      if (P instanceof Og) {
        if (!await Pt()) {
          if (n?.create ?? !0) await ut(y(e), {
            recursive: !0,
            mode: 448
          });
          return {
            ioPath: e,
            canonicalPath: e,
            readExisting: () => Promise.resolve(null),
            recheckBeforeWrite: () => {},
            close: async () => {}
          };
        }
        t(`task output: pin of ${y(e)} refused: ${l(P)}`, {
          level: "warn"
        }), g(e, "tasks dir moved or linked", `restart Claude Code with CLAUDE_CODE_TMPDIR set to a fresh directory; or, if ${AP().replace(/[\\/]+$/, "")} is a stray directory or a symbolic link that should not be there, remove that entry itself (not what it points to) and restart`);
      }
      throw P;
    }
    let w = /^\/proc\/self\/fd\/(\d+)\//.exec(c.ioPath);
    if (w === null) return c;
    let k = c.ioPath.slice(0, c.ioPath.length - s.length - 1), T = Number(w[1]), h = 0, S = !1, rt = !1, st = async () => {
      if (S && h === 0 && !rt) rt = !0, await c.close();
    };
    return {
      handleStat: () => Ft(T),
      release: () => (S = !0, st()),
      viewFor: P => {
        if (S) return null;
        h++;
        let ot = !1;
        return {
          ioPath: `${k}/${P}`,
          canonicalPath: b(i, P),
          readExisting: ht => SXe(`${k}/${P}`, b(i, P), O(), ht),
          recheckBeforeWrite: () => {},
          close: async () => {
            if (!ot) ot = !0, h--, await st();
          }
        };
      }
    };
  })(), a = u.then(c => "viewFor" in c ? c : Promise.reject(Error("not held")));
  a.catch(() => {}), v.set(i, a);
  let p;
  try {
    p = await u;
  } catch (c) {
    if (v.get(i) === a) v.delete(i);
    throw c;
  }
  if (!("viewFor" in p)) {
    if (v.get(i) === a) v.delete(i);
    return p;
  }
  if (v.size > Nt) {
    for (let [c, w] of v) if (c !== i) {
      v.delete(c), w.then(k => k.release(), () => {});
      break;
    }
  }
  return p.viewFor(s) ?? Promise.reject(Error("unreachable: fresh hold retired"));
}

var V;

async function Pt() {
  let e = jf();
  if (V?.root === e) return V.ok;
  let n = await M(e).then(() => !0, i => E(i) !== "EPERM");
  if (n) V = {
    root: e,
    ok: Promise.resolve(!0)
  };
  return n;
}

var v = new Map;

function Ft(e) {
  return new Promise((n, i) => kt(e, (s, r) => s ? i(s) : n(r)));
}

var Nt = 8;

function CIt(e, n = "a") {
  return _(e, {
    exclusive: !1,
    windowsFlags: n
  });
}

function Klt(e) {
  return Y((async () => {
    let n = v7t(e);
    return await (await _(n, {
      exclusive: !0,
      windowsFlags: "wx"
    })).close(), n;
  })());
}

var wt = Symbol("taskOutputSwapRefused");

function qlt(e) {
  return e instanceof Error && wt in e;
}

function g(e, n, i) {
  let s = `task output swap refused (${n}): ${e}` + (i === void 0 ? "" : `. To recover: ${i}.`), r = Object.assign(new x(s, `task output swap refused (${n})`), {
    [wt]: !0
  });
  t(s, {
    level: "error"
  });
  let o = `${n}\0${e}`;
  if (!H.has(o)) {
    if (H.size >= $t) H.clear();
    H.add(o), d(r);
  }
  throw r;
}

var H = new Set, $t = 256;

async function nFn(e, n) {
  let i;
  try {
    i = await N(e);
  } catch (u) {
    let a = E(u);
    if (a === "ELOOP" || a === "ENOTDIR") g(e, `lstat refused a swapped path (${a})`);
    throw u;
  }
  if (!i.isFile() || i.nlink !== 1) g(e, "not a regular nlink-1 file");
  let s = !1, r = i.size > n, o;
  try {
    o = await X(e, s ? r ? "r+" : "r" : (r ? m.O_RDWR : m.O_RDONLY) | A | (m.O_NONBLOCK ?? 0));
  } catch (u) {
    let a = E(u);
    if (a === "ELOOP" || a === "EISDIR" || a === "ENOTDIR" || a === "ENXIO" || a === "EOPNOTSUPP" || a === "ENOTSUP") g(e, `open refused a swapped path (${a})`);
    throw u;
  }
  try {
    let u = await o.stat();
    if (!u.isFile() || u.dev !== i.dev || u.ino !== i.ino || u.nlink !== 1) g(e, "file changed between lstat and open");
    if (r && u.size > n) await o.truncate(n);
    return {
      handle: o,
      size: u.size
    };
  } catch (u) {
    throw await o.close(), u;
  }
}

async function D5e(e, n) {
  let i;
  try {
    i = await nFn(ju(e), kIt);
  } catch (o) {
    if (E(o) === "ENOENT") return {
      content: "",
      omittedBytes: 0
    };
    throw o;
  }
  let {handle: s} = i, r = Math.min(i.size, kIt);
  try {
    let o = Math.max(0, r - n), u = Buffer.allocUnsafe(r - o), a = 0;
    while (a < u.length) {
      let {bytesRead: c} = await s.read(u, a, u.length - a, o + a);
      if (c === 0) break;
      a += c;
    }
    let p = 0;
    while (o > 0 && p < a && (u[p] & 192) === 128) p++;
    return {
      content: u.toString("utf8", p, a),
      omittedBytes: o + p
    };
  } finally {
    await s.close();
  }
}

async function A7t(e, n, i) {
  let {handle: r, size: o} = await nFn(e, i);
  try {
    let u = await X(n, m.O_WRONLY | m.O_CREAT | m.O_TRUNC | A);
    try {
      let a = Buffer.alloc(1048576), p = 0;
      while (p < i) {
        let c = Math.min(a.length, i - p), {bytesRead: w} = await r.read(a, 0, c, p);
        if (w === 0) break;
        let k = 0;
        while (k < w) {
          let {bytesWritten: T} = await u.write(a, k, w - k, p + k);
          k += T;
        }
        p += w;
      }
    } finally {
      await u.close();
    }
    return o;
  } finally {
    await r.close();
  }
}

async function Rt(e, n, i = e) {
  if (e === n) return !0;
  try {
    if (!(await N(i)).isFile()) return !1;
    return await M(i) === await M(n);
  } catch {
    return !1;
  }
}

function C7t(e, n, i) {
  return Y((async () => {
    try {
      let s = v7t(e), r = await C(s, {
        replaceLeaf: !0
      });
      try {
        if (await Rt(s, n, r.ioPath)) {
          let u = await R(r.ioPath).catch(() => n);
          return await nt(s, L(u) ? u : n), i?.("noop"), s;
        }
        if (L(n)) await ft(n);
        let o = Vn().linkedOutputs;
        await r.recheckBeforeWrite(), await W(r.ioPath).catch(u => {
          if (E(u) !== "ENOENT") throw u;
        }), o.set(s, n);
        try {
          try {
            await r.recheckBeforeWrite(), await Z(n, r.ioPath);
          } catch (u) {
            if (E(u) !== "EEXIST") throw u;
            await r.recheckBeforeWrite(), await W(r.ioPath).catch(a => {
              if (E(a) !== "ENOENT") throw a;
            }), await r.recheckBeforeWrite(), await Z(n, r.ioPath);
          }
        } catch (u) {
          if (o.get(s) === n) o.delete(s);
          throw u;
        }
        if (await R(r.ioPath).catch(() => {}) === n) o.set(s, n);
      } finally {
        await r.close();
      }
      return i?.("symlink"), s;
    } catch (s) {
      let r = E(s);
      if (r && Gme.has(r) || r === "EROFS") t(`initTaskOutputAsSymlink failed (${r}): ${s}`, {
        level: "error"
      }); else if (!qlt(s)) d(s);
      return Klt(e);
    }
  })());
}

export { Z$n, J$e, kIt, NSr, O8, w7t, TIt, Umo, Bmo, v7t, ju, eFn, Q$e, gf, E7t, jmo, AIt, b6s, vSe, k7t, Wmo, tFn, $Sr, M5e, H5e, T7t, zmo, Gmo, CIt, Klt, qlt, nFn, D5e, A7t, C7t };
