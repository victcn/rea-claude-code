// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import "./chunk-hwdwjvh8.js";

import { E } from "./chunk-b0z4bv3v.js";

import "./chunk-2v9tfgc3.js";

import "./chunk-vxr6sv7z.js";

import "./chunk-3pqddg8f.js";

import "./chunk-bmq0vae0.js";

import "./chunk-nvtwm272.js";

import { nw } from "./chunk-ddr690nj.js";

import { t } from "./chunk-kawq2919.js";

import "./chunk-z52kmxx4.js";

import "./chunk-a16yb89m.js";

import "./chunk-5wbhf1bk.js";

import "./chunk-6ah1819r.js";

import { sL } from "./chunk-30n0xq4e.js";

import { OKt } from "./chunk-cbhw3jsa.js";

import { Bb, krr, rTn, VTe, FD, GI, Trr, Arr, BDe, PKt, Crr } from "./chunk-f9jsqd0p.js";

import { Opo, gQt } from "./chunk-7g0zqzby.js";

import "./chunk-1xnsr4dy.js";

import { constants as D } from "fs";

var U = Bb.FILE_LIST_DIRECTORY | Bb.FILE_TRAVERSE | Bb.FILE_READ_ATTRIBUTES | Bb.SYNCHRONIZE, ne = Bb.FILE_TRAVERSE | Bb.FILE_READ_ATTRIBUTES | Bb.SYNCHRONIZE, g = FD.FILE_DIRECTORY_FILE | FD.FILE_OPEN_REPARSE_POINT | FD.FILE_SYNCHRONOUS_IO_NONALERT, y = FD.FILE_OPEN_REPARSE_POINT | FD.FILE_SYNCHRONOUS_IO_NONALERT, ie = 4096, se = 4194304, oe = new Set([ 2147483693, 3221226763 ]);

function Z(i) {
  return (i & se) !== 0 || (i & ie) !== 0 && (i & GI.REPARSE_POINT) !== 0;
}

var ae = /[. ]+$/, P = Bb.FILE_READ_ATTRIBUTES | Bb.SYNCHRONIZE, w = 1048576, X = 262144, ce = D.O_WRONLY | D.O_RDWR | D.O_APPEND | D.O_TRUNC, le = (D.O_NOFOLLOW ?? 0) | (D.O_NONBLOCK ?? 0), J = 116444736000000000n;

function Ee(i) {
  switch (i) {
   case "EBADF":
    return Error("the file is closed");

   case "EEXIST":
    return Error("the name is taken");

   case "WORKING_NAME_NOT_PLAIN":
    return Error("not a plain file name here");

   case "WORKING_FILE_HELD":
    return Error("another program holds the file");

   case "ELOOP":
    return Error("a link stands at the name");

   case "EISDIR":
    return Error("a directory stands at the name");

   case "ENOTDIR":
    return Error("a link stands where a directory should be");

   case "WORKING_ROOT_NOT_CANONICAL":
    return Error("tree anchor root is not a canonical path");

   case "WORKING_FILE_NOT_SERVED":
    return Error("this file is stored through a Windows storage feature (cloud sync, deduplication) and could not be reopened to read its real contents; it is skipped this round");

   case "WORKING_FILE_OFFLINE":
    return Error("this file is online-only (its data is not on this machine); it is not downloaded, so it is skipped this round");
  }
}

function O(i) {
  let e = Ee(i);
  return e.code = i, e;
}

function f(i, e = !1) {
  if (i === "" || i === "." || i === ".." || /[\\/:*?"<>|\x00-\x1f]/.test(i) || ae.test(i) || nw(i) || Opo(i) || !e && gQt(i)) throw O("WORKING_NAME_NOT_PLAIN");
  return i;
}

function v(i) {
  return (i - J) * 100n;
}

function H(i) {
  return BigInt(Math.round(i * 1e6)) * 10n + J;
}

function de(i, e, l, h) {
  let _ = (e.attributes & GI.REPARSE_POINT) !== 0 && Arr(e.reparseTag), I = !_ && (e.attributes & GI.DIRECTORY) !== 0, m = _ ? 0o120000n : I ? 0o040000n : 0o100000n, L = (e.attributes & GI.READONLY) !== 0 ? 0o444n : 0o666n, R = b => b / 1000000n, S = b => new Date(Number(b / 1000000n));
  return {
    dev: i,
    ino: e.ino,
    mode: m | L,
    nlink: e.nlink,
    uid: 0n,
    gid: 0n,
    rdev: 0n,
    size: I ? 0n : e.size,
    blksize: 4096n,
    blocks: h / 512n,
    atimeMs: R(l.atimeNs),
    mtimeMs: R(e.mtimeNs),
    ctimeMs: R(e.ctimeNs),
    birthtimeMs: R(l.birthtimeNs),
    atimeNs: l.atimeNs,
    mtimeNs: e.mtimeNs,
    ctimeNs: e.ctimeNs,
    birthtimeNs: l.birthtimeNs,
    atime: S(l.atimeNs),
    mtime: S(e.mtimeNs),
    ctime: S(e.ctimeNs),
    birthtime: S(l.birthtimeNs),
    isFile: () => !_ && !I,
    isDirectory: () => I,
    isSymbolicLink: () => _,
    isBlockDevice: () => !1,
    isCharacterDevice: () => !1,
    isFIFO: () => !1,
    isSocket: () => !1
  };
}

function Ne(i) {
  let e = l => Number(l);
  return {
    dev: e(i.dev),
    ino: e(i.ino),
    mode: e(i.mode),
    nlink: e(i.nlink),
    uid: 0,
    gid: 0,
    rdev: 0,
    size: e(i.size),
    blksize: e(i.blksize),
    blocks: e(i.blocks),
    atimeMs: e(i.atimeNs) / 1e6,
    mtimeMs: e(i.mtimeNs) / 1e6,
    ctimeMs: e(i.ctimeNs) / 1e6,
    birthtimeMs: e(i.birthtimeNs) / 1e6,
    atime: i.atime,
    mtime: i.mtime,
    ctime: i.ctime,
    birthtime: i.birthtime,
    isFile: () => i.isFile(),
    isDirectory: () => i.isDirectory(),
    isSymbolicLink: () => i.isSymbolicLink(),
    isBlockDevice: () => !1,
    isCharacterDevice: () => !1,
    isFIFO: () => !1,
    isSocket: () => !1
  };
}

function A(i, e) {
  let l = i.queryInformation(e), h = (l.attributes & GI.REPARSE_POINT) !== 0 ? i.queryAttributeTag(e).reparseTag : 0, _ = i.queryId(e), I = i.queryVolume(e), m = {
    dev32: BigInt(I.serialNumber),
    dev64: _?.volumeSerialNumber ?? null,
    ino: l.indexNumber,
    size: l.size,
    nlink: BigInt(l.numberOfLinks),
    mtimeNs: v(l.lastWriteTime),
    ctimeNs: v(l.changeTime),
    attributes: l.attributes,
    reparseTag: h
  }, L = {
    atimeNs: v(l.lastAccessTime),
    birthtimeNs: v(l.creationTime)
  };
  return {
    ...m,
    stats: R => de(R === "serial64" && m.dev64 !== null ? m.dev64 : m.dev32, m, L, l.allocationSize)
  };
}

function p(i) {
  return (i.attributes & GI.REPARSE_POINT) !== 0 && Arr(i.reparseTag);
}

function C(i, e) {
  let l = i.queryAttributes(e);
  return (l & GI.REPARSE_POINT) !== 0 ? i.queryAttributeTag(e) : {
    attributes: l,
    reparseTag: 0
  };
}

function ue(i, e) {
  let l = _ => _ !== null && e.ino !== 0n && e.dev === _ && e.ino === i.ino, h = l(i.dev32) ? "serial32" : l(i.dev64) ? "serial64" : null;
  return t(`anchor (win32): identity bridge ${h ?? "none"} \u2014 bun dev=${e.dev} ino=${e.ino}; nt serial32=${i.dev32} serial64=${i.dev64 ?? "n/a"} index=${i.ino}`), 
  h;
}

function j(i) {
  return /^\\\\\?\\UNC\\/i.test(i) || i.startsWith("\\\\") && !i.startsWith("\\\\?\\") && !i.startsWith("\\\\.\\");
}

async function Se(i, e, l) {
  let {fs: h} = i, {realRoot: _} = l;
  if (j(_)) return t("anchor (win32): the root is on a network share: no anchored backend here"), 
  {
    unanchored: "remote_volume"
  };
  let I = 0, m;
  try {
    if (I = e.open(0, PKt(_), {
      access: U,
      disposition: VTe.FILE_OPEN,
      options: g
    }), (e.queryDevice(I).characteristics & Trr) !== 0) return e.close(I), t("anchor (win32): the root is on a remote volume: no anchored backend here"), 
    {
      unanchored: "remote_volume"
    };
    let n = A(e, I);
    if (p(n)) throw O("ELOOP");
    if (await OKt(i, l) !== _) throw O("WORKING_ROOT_NOT_CANONICAL");
    let r = ue(n, await h.lstat(_, {
      bigint: !0
    }));
    if (r === null) return e.close(I), {
      unanchored: "unstable_identity"
    };
    m = r;
  } catch (n) {
    if (I !== 0) e.close(I);
    let r = E(n);
    if (r === "ENOENT" || r === "ENOTDIR" || r === "ELOOP" || r === "EPERM" || r === "WORKING_ROOT_NOT_CANONICAL" || r === "EBUSY" || r === "EMFILE" || r === "ENFILE" || r === "ENOMEM" || r === "EAGAIN" || r === "ETIMEDOUT" || r === "EIO") throw n;
    return t(`anchor (win32): bring-up failed (${r ?? "no code"}, status 0x${(BDe(n) ?? 0).toString(16)}): no anchored backend here`, {
      level: "warn"
    }), {
      unanchored: "bring_up_failed"
    };
  }
  let L = (n, r, s, o, a = !1) => e.open(n, f(r, a), {
    access: s,
    disposition: VTe.FILE_OPEN,
    options: o
  }), R = async (n, r, s, o, a) => {
    let N = L(n, r, s, o);
    try {
      return await a(N);
    } finally {
      e.close(N);
    }
  }, S = (n, r) => R(n, r, P, y, s => A(e, s).stats(m)), b = async (n, r, s) => {
    if ((s & ~le & ce) !== 0) throw Error("anchored open never writes on this backend");
    let o = G(n, r, y, !1);
    try {
      let a = C(e, o);
      if (p(a)) throw O("ELOOP");
      if ((a.attributes & GI.DIRECTORY) !== 0) throw O("EISDIR");
      if (Z(a.attributes)) throw O("WORKING_FILE_OFFLINE");
      if ((a.attributes & GI.REPARSE_POINT) === 0) return Y(o);
    } catch (a) {
      throw e.close(o), a;
    }
    return Y(Q(n, r, o));
  }, G = (n, r, s, o) => {
    let a = N => e.open(n, f(r), {
      access: N,
      disposition: VTe.FILE_OPEN,
      options: s,
      dontReparse: o
    });
    try {
      return a(krr | Bb.FILE_WRITE_ATTRIBUTES);
    } catch (N) {
      let u = E(N);
      if (u !== "EPERM" && u !== "EROFS") throw N;
      return a(krr);
    }
  }, Q = (n, r, s) => {
    try {
      let o;
      try {
        o = G(n, r, FD.FILE_SYNCHRONOUS_IO_NONALERT, !0);
      } catch (a) {
        if (oe.has(BDe(a) ?? 0)) throw t(`anchor (win32): a filter-served file's second open met a link refusal (status 0x${(BDe(a) ?? 0).toString(16)}); reported as a link`), 
        a;
        throw t(`anchor (win32): a filter-served file could not be reopened for its bytes (${E(a) ?? "no code"}, status 0x${(BDe(a) ?? 0).toString(16)}); unreadable this round`), 
        O("WORKING_FILE_NOT_SERVED");
      }
      try {
        let a = e.queryInformation(o);
        if (Z(a.attributes)) throw O("WORKING_FILE_OFFLINE");
        if (a.indexNumber !== e.queryInformation(s).indexNumber || e.queryVolume(o).serialNumber !== e.queryVolume(s).serialNumber) throw t("anchor (win32): a filter-served file reopened as another file; unreadable this round"), 
        O("WORKING_FILE_NOT_SERVED");
        return o;
      } catch (a) {
        throw e.close(o), a;
      }
    } finally {
      e.close(s);
    }
  }, Y = n => {
    let r = !1, s = () => {
      if (r) throw O("EBADF");
      return n;
    }, o = () => A(e, s()).stats(m);
    async function a(c) {
      return c?.bigint === !0 ? o() : Ne(o());
    }
    let N = (c, d) => e.read(s(), c, BigInt(d));
    async function* u() {
      for (let c = 0; ;) {
        let d = Buffer.allocUnsafe(X), T = N(d, c);
        if (T === 0) return;
        c += T, yield d.subarray(0, T), await new Promise(W => setImmediate(W));
      }
    }
    return {
      stat: a,
      read: async (c, d, T, W) => {
        let te = N(c.subarray(d, d + Math.min(T, X)), W);
        return await new Promise(re => setImmediate(re)), {
          bytesRead: te
        };
      },
      readFile: async () => {
        let c = [];
        for await (let d of u()) c.push(d);
        return Buffer.concat(c);
      },
      createReadStream: () => u(),
      chmod: async c => {
        let d = e.queryAttributes(s()), T = (c & 128) === 0 ? d | GI.READONLY : d & ~GI.READONLY;
        if (T !== d) e.setAttributes(s(), T === 0 ? GI.NORMAL : T);
      },
      utimes: async (c, d) => e.setTimes(s(), H(c), H(d)),
      close: async () => {
        if (!r) r = !0, e.close(n);
      }
    };
  }, M = async n => {
    try {
      await n();
    } catch (r) {
      throw E(r) === "EBUSY" ? Object.assign(O("WORKING_FILE_HELD"), {
        cause: r
      }) : r;
    }
  }, k = n => M(async () => {
    await sL(n);
  }), F = (n, r, s, o, a) => (a ? M : k)(() => R(n, r, Bb.DELETE | P, y, N => e.renameByHandle(N, s, f(o), a))), x = (n, r, s, o) => k(() => R(n, r, Bb.FILE_WRITE_ATTRIBUTES | Bb.SYNCHRONIZE, y, a => e.linkByHandle(a, s, f(o)))), K = Bb.DELETE | Bb.FILE_WRITE_ATTRIBUTES | P, q = (n, r) => k(() => R(n, r, K, y, s => {
    let o = C(e, s);
    if ((o.attributes & GI.DIRECTORY) !== 0 && !p(o)) throw O("EISDIR");
    e.deleteByHandle(s);
  })), V = (n, r, s, o = !1) => {
    let a = L(n, r, s, g, o);
    try {
      if (p(C(e, a))) throw O("ENOTDIR");
      return a;
    } catch (N) {
      throw e.close(a), N;
    }
  }, z = {
    openDir: async (n, r, s) => V(n, r, U, s),
    openDirToPass: async (n, r, s) => V(n, r, ne, s),
    mkdir: async (n, r) => {
      e.close(e.open(n, f(r), {
        access: P,
        disposition: VTe.FILE_CREATE,
        options: g,
        attributes: GI.NORMAL
      }));
    },
    closeDir: async n => e.close(n),
    create: async (n, r, s, o, a, N) => {
      let u = e.open(n, f(r), {
        access: rTn | Bb.FILE_READ_ATTRIBUTES | Bb.DELETE,
        disposition: VTe.FILE_CREATE,
        options: FD.FILE_NON_DIRECTORY_FILE | FD.FILE_OPEN_REPARSE_POINT | FD.FILE_SYNCHRONOUS_IO_NONALERT | (N ? FD.FILE_WRITE_THROUGH : 0),
        attributes: (a & 128) === 0 ? GI.READONLY : GI.NORMAL
      });
      try {
        for (let c = 0; c < o.length; c += w) if (e.write(u, o.subarray(c, c + w), BigInt(c)), 
        c + w < o.length) await new Promise(d => setImmediate(d));
      } catch (c) {
        try {
          e.deleteByHandle(u);
        } catch {}
        throw e.close(u), c;
      }
      e.close(u);
    },
    createAndOpen: async (n, r, s, o) => {
      let a = e.open(n, f(r), {
        access: rTn | Bb.FILE_READ_ATTRIBUTES,
        disposition: VTe.FILE_CREATE,
        options: FD.FILE_NON_DIRECTORY_FILE | FD.FILE_OPEN_REPARSE_POINT | FD.FILE_SYNCHRONOUS_IO_NONALERT | FD.FILE_WRITE_THROUGH,
        attributes: (o & 128) === 0 ? GI.READONLY : GI.NORMAL
      }), N = !1, u = () => {
        if (N) throw O("EBADF");
        return a;
      };
      return {
        stat: async () => A(e, u()).stats(m),
        writeFile: async c => {
          for (let d = 0; d < c.length; d += w) e.write(u(), c.subarray(d, d + w), BigInt(d)), 
          await new Promise(T => setImmediate(T));
        },
        utimes: async (c, d) => e.setTimes(u(), H(c), H(d)),
        sync: async () => {},
        close: async () => {
          if (!N) N = !0, e.close(a);
        }
      };
    },
    link: x,
    rename: (n, r, s, o) => F(n, r, s, o, !0),
    renameNoReplace: (n, r, s, o) => F(n, r, s, o, !1),
    symlink: async (n, r, s) => {
      Crr(n);
      let o;
      try {
        o = e.open(r, f(s), {
          access: rTn | Bb.FILE_READ_ATTRIBUTES | Bb.DELETE,
          disposition: VTe.FILE_CREATE,
          options: FD.FILE_NON_DIRECTORY_FILE | FD.FILE_OPEN_REPARSE_POINT | FD.FILE_SYNCHRONOUS_IO_NONALERT,
          attributes: GI.NORMAL
        });
      } catch (a) {
        throw E(a) === "EISDIR" ? O("EEXIST") : a;
      }
      try {
        e.setSymlink(o, n);
      } catch (a) {
        try {
          e.deleteByHandle(o);
        } catch {}
        throw e.close(o), a;
      }
      e.close(o);
    },
    readlink: (n, r) => R(n, r, P, y, s => e.readSymlink(s)),
    unlink: q,
    rmdir: (n, r) => R(n, r, K, g, s => {
      if (p(C(e, s))) throw O("ENOTDIR");
      e.deleteByHandle(s);
    }),
    list: async (n, r) => e.listDirectory(n, r),
    lstat: S,
    open: (n, r, s, o) => b(n, r, o),
    hold: async n => {
      let r = await h.realpath(n).catch(() => null), s = r !== null && /^[a-zA-Z]:$/.test(r) ? `${r}\\` : r;
      if (s === null || j(s)) return null;
      let o;
      try {
        o = e.open(0, PKt(s), {
          access: U,
          disposition: VTe.FILE_OPEN,
          options: g
        });
      } catch {
        return null;
      }
      try {
        if ((e.queryDevice(o).characteristics & Trr) !== 0) return e.close(o), null;
        let [a, N] = await Promise.all([ A(e, o), h.lstat(s, {
          bigint: !0
        }) ]), u = a.stats(m);
        if (p(a) || !u.isDirectory() || !N.isDirectory() || u.ino === 0n || u.dev !== N.dev || u.ino !== N.ino) return e.close(o), 
        null;
      } catch {
        return e.close(o), null;
      }
      return z.holdOpenedDir(o, s);
    },
    getHeldDir: n => n.dir,
    holdOpenedDir: (n, r) => {
      let s = !1;
      return {
        realPath: r,
        dir: n,
        stat: async () => A(e, n).stats(m),
        close: async () => {
          if (!s) s = !0, e.close(n);
        }
      };
    },
    renameOut: (n, r, s, o) => F(n, r, s.dir, o, !0),
    renameIn: (n, r, s, o) => F(n.dir, r, s, o, !0),
    linkIn: (n, r, s, o) => x(n.dir, r, s, o),
    renameInNoReplace: (n, r, s, o) => F(n.dir, r, s, o, !1),
    statIn: (n, r) => S(n.dir, r),
    openIn: (n, r, s) => b(n.dir, r, s),
    unlinkIn: (n, r) => q(n.dir, r)
  }, B = !1, ee = {
    stat: async () => {
      if (B) throw O("EBADF");
      return A(e, I).stats(m);
    },
    close: async () => {
      if (!B) B = !0, e.close(I);
    }
  };
  return t("anchor (win32): held-handle backend up"), {
    root: ee,
    held: I,
    ops: z
  };
}

export { Se as openWin32Backend };
