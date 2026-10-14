// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l, E, W } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { IKt, OKt } from "./chunk-cbhw3jsa.js";

import { Ta } from "./chunk-pqzqmnjf.js";

import { TC } from "./chunk-v6b4yr85.js";

import { Zs } from "./chunk-rgd61mm3.js";

import { Ne } from "./chunk-m8ez8fhk.js";

import { close as $e, constants as L, fchmod as on, fchown as an, fstat as sn, fsync as ln, open as cn, writeFile as dn } from "fs";

import { lstat as un, mkdtemp as je, rm as Ve, symlink as fn } from "fs/promises";

import { tmpdir as ze } from "os";

import { getSystemErrorName as ge, promisify as Q } from "util";

class J6r extends Error {
  code;
  constructor(e) {
    super("the new file could not be given its owner", {
      cause: e
    });
    this.code = E(e);
  }
}

var gjs = [ "unsupported_platform", "no_procfs", "no_ffi", "nofollow_any_unenforced", "remote_volume", "unstable_identity", "bring_up_failed" ];

function LYs(e) {
  return gjs.includes(e);
}

function mn(e) {
  switch (e) {
   case "WORKING_PARENT_NOT_DIRECTORY":
    return Error("a destination ancestor is a symlink or not a directory");

   case "WORKING_NAME_NOT_PLAIN":
    return Error("not a plain file name here");

   case "WORKING_FILE_HELD":
    return Error("another program holds the file");

   case "WORKING_LIST_UNSUPPORTED":
    return Error("this backend cannot list a held directory, or cannot stop at the bound that was set");

   case "WORKING_LIST_TOO_LONG":
    return Error("the directory holds more names than may be listed");

   case "WORKING_DIRECTORY_MOVED":
    return Error("the operation succeeded, but a directory that it used may have been moved meanwhile: what it made or moved may lie outside the tree, or have come from outside it");

   case "WORKING_DIRECTORY_MOVED_UNDONE":
    return Error("a directory may have been moved, so the operation made nothing, or what it made was removed again");

   case "WORKING_LINK_UNSUPPORTED":
    return Error("this backend cannot make or read a symbolic link in a held directory");
  }
}

function yn() {
  let e = Error("tree anchor root is not a canonical path");
  return e.code = "WORKING_ROOT_NOT_CANONICAL", e;
}

function q(e) {
  let r = mn(e);
  return r.code = e, r;
}

var Je = Symbol("createsInHeldDirectoryCheckedByPath"), Ee = 536870912, hn = 2097152, gn = 128;

var wn = 4096, j = L.O_RDONLY | L.O_DIRECTORY | L.O_NOFOLLOW | Zs, le = L.O_WRONLY | L.O_CREAT | L.O_EXCL | Zs, Dn = 511, bn = 1e7, pn = 512, Pn = 3, _n = 16, We = Error("removeTree stopped after a failure");

function ue(e, r) {
  let a = e.split("/");
  if (e.includes("\0") || a.some(m => m === "" || m === "." || m === ".." || r !== "/" && m.includes(r))) throw Error("anchored path must be relative, of plain segments");
  return a;
}

function he(e, r) {
  let a = ue(e, r);
  return {
    dirs: a.slice(0, -1),
    leaf: a.at(-1) ?? ""
  };
}

function Ue(e) {
  if ((e & L.O_CREAT) !== 0) throw Error("anchored open never creates");
  return e;
}

function X(e) {
  let r = E(e);
  return r === "ENOTDIR" || r === "ELOOP" ? q("WORKING_PARENT_NOT_DIRECTORY") : e;
}

var ae = {
  found: "same"
};

function Ie(e, r) {
  return e.ino !== 0n && e.dev === r.dev && e.ino === r.ino;
}

async function On(e, r, a, m, b) {
  let n = null;
  try {
    for (let [h, p] of m.entries()) {
      let D = n ?? e.getHeldDir(a), s = await (h < m.length - 1 && e.openDirToPass !== void 0 ? e.openDirToPass(D, p, b) : e.openDir(D, p, b));
      if (n !== null) await e.closeDir(n);
      n = s;
    }
  } catch {
    if (n !== null) await e.closeDir(n);
    return null;
  } finally {
    await a.close();
  }
  return n === null ? null : e.holdOpenedDir(n, r.path.join(a.realPath, ...m));
}

function Rrr(e, r, a, m, b, n, h = [], p) {
  let {sep: D} = r.path, s = void 0, u = void 0, N = void 0, g = !1, O = null, k = () => O ??= a.close(), B = new WeakMap, H = async (i, o, c = !1) => {
    let w = o === "" ? [] : ue(o, D), _ = await n.hold(i), v = _ === null || w.length === 0 ? _ : await On(n, r, _, w, c);
    if (v === null) return null;
    let T = null, Y = () => T ??= v.close(), M = {
      realPath: v.realPath,
      get closed() {
        return T !== null;
      },
      stat: async () => {
        if (T !== null) throw Error("held directory is closed");
        return v.stat();
      },
      close: Y,
      [Symbol.asyncDispose]: Y
    };
    return B.set(M, v), M;
  }, C = i => {
    let o = B.get(i);
    if (o === void 0) throw Error("held directory belongs to another anchor");
    if (i.closed) throw Error("held directory is closed");
    return o;
  }, I = i => i === m ? Promise.resolve() : n.closeDir(i), y = async (i, o, c, w) => {
    try {
      return await n.openDir(i, o);
    } catch (_) {
      if (c === null || !W(_)) throw X(_);
      if (await n.mkdir(i, o, c).then(() => !0, T => {
        if (E(T) !== "EEXIST") throw T;
        return !1;
      })) await J("mkdir", {
        to: {
          dir: i,
          dirs: w
        }
      }, () => n.rmdir(i, o));
      return n.openDir(i, o).catch(T => {
        throw X(T);
      });
    }
  }, f = () => {
    if (O !== null) throw Error("tree anchor is closed");
  }, P = async (i, o) => {
    if (n.list === void 0) throw q("WORKING_LIST_UNSUPPORTED");
    let c = await n.list(i, o);
    if (o !== void 0 && !(c.length <= o)) throw q("WORKING_LIST_TOO_LONG");
    return En(c, D);
  }, R = async (i, o) => {
    f();
    let c = m;
    try {
      for (let [w, _] of i.entries()) {
        f();
        let v = await y(c, _, o, i.slice(0, w));
        await I(c), c = v;
      }
      return c;
    } catch (w) {
      throw await I(c), w;
    }
  }, A = async (i, o) => {
    let {dirs: c, leaf: w} = he(i, D), _ = await R(c, null);
    try {
      return f(), await o(_, w, c);
    } finally {
      await I(_);
    }
  }, Z = async (i, o, c) => {
    let w = he(o, D);
    return he(i, D).dirs.join("/") === w.dirs.join("/") ? A(i, (_, v, T) => c({
      dir: _,
      leaf: v,
      dirs: T
    }, {
      dir: _,
      leaf: w.leaf,
      dirs: T
    })) : A(i, (_, v, T) => A(o, (Y, M, ne) => c({
      dir: _,
      leaf: v,
      dirs: T
    }, {
      dir: Y,
      leaf: M,
      dirs: ne
    })));
  }, ee = i => W(i) ? {
    found: "missing"
  } : E(i) === "WORKING_PARENT_NOT_DIRECTORY" ? {
    found: "replaced"
  } : {
    found: "check_failed",
    checkError: i
  }, fe = async (i, o) => {
    let c = await R(i, null).then(w => ({
      now: w
    }), ee);
    if (!("now" in c)) return c;
    try {
      return await o(c.now);
    } catch (w) {
      return ee(w);
    } finally {
      await I(c.now).catch(() => {});
    }
  }, De = i => n.holdOpenedDir(i, "").stat(), ke = (i, o) => i.dev !== o.dev ? {
    found: "replaced",
    differs: "device"
  } : i.ino !== o.ino ? {
    found: "replaced",
    differs: "inode"
  } : ae, Re = async ({dir: i, dirs: o}) => o.length === 0 ? ae : fe(o, async c => ke(await De(i), await De(c))), ve = async ({dir: i, dirs: o}) => ae, nn = async ({to: i, from: o}) => null, be = (i, o, c) => {
    try {
      (void 0)?.({
        operation: i,
        ...o,
        outcome: c ? "undone" : "not_undone"
      });
    } catch (w) {
      d(w);
    }
    return q(c ? "WORKING_DIRECTORY_MOVED_UNDONE" : "WORKING_DIRECTORY_MOVED");
  }, qn = async i => {}, J = async (i, o, c) => {
    let w = await nn(o);
    if (w === null) return;
    throw be(i, w, c !== void 0 && await c(w.side).then(() => !0, () => !1));
  }, Be = async ({dir: i, leaf: o}, c) => {
    if (!Ie(await n.lstat(i, o), await c())) throw Error("another file has the name");
    await n.unlink(i, o);
  }, Ae = (i, o, c, w, _) => A(i, async (v, T, Y) => {
    let M = null, ne = !1, me = async re => {};
    await n.create(v, T, [ ...h, ...Y ], o, c, w, _, me).catch(async re => {
      throw M === null ? re : be("create", M, ne && await n.lstat(v, T).then(() => !1, W));
    });
  }), Se = i => async (o, c) => {
    await n.link(o.dir, o.leaf, c.dir, c.leaf), await J("link", {
      to: c,
      from: o
    }, async w => {
      let _ = Be(c, () => n.lstat(o.dir, o.leaf));
      if (await _.catch(() => {}), i && w !== "destination") await n.unlink(o.dir, o.leaf);
      await _;
    });
  }, Ce = (i, o, c) => A(c, async (w, _, v) => {
    await n.linkIn(C(i), z(o), w, _), await J("link", {
      to: {
        dir: w,
        dirs: v
      }
    }, () => Be({
      dir: w,
      leaf: _,
      dirs: v
    }, () => n.statIn(C(i), z(o))));
  }), Te = i => async (o, c) => {
    await i(o.dir, o.leaf, c.dir, c.leaf), await J("rename", {
      to: c,
      from: o
    });
  };
  return {
    backend: e,
    realRoot: b,
    createsInHeldDirectory: n.createsInHeldDirectory !== !1,
    heldCreateRefusal: n.heldCreateRefusal ?? null,
    mkdirp: async (i, o = Dn) => I(await R(ue(i, D), o)),
    create: (i, o, c) => Ae(i, o, c, !1),
    createSynced: (i, o, c, w) => Ae(i, o, c, !0, w),
    createAndOpen: (i, o) => A(i, (c, w, _) => n.createAndOpen(c, w, [ ...h, ..._ ], o)),
    link: (i, o) => Z(i, o, Se(!1)),
    rename: (i, o) => Z(i, o, Te(n.rename)),
    placeCreated: (i, o) => Z(i, o, n.renameNoReplace === void 0 ? Se(!0) : Te(n.renameNoReplace)),
    symlink: (i, o) => A(o, (c, w) => n.symlink(i, c, w)),
    readlink: i => A(i, n.readlink),
    unlink: i => A(i, n.unlink),
    rmdir: i => A(i, n.rmdir),
    list: async (i, o) => {
      let c = i === "" ? [] : ue(i, D), w = await R(c, null);
      try {
        return f(), await P(w, o);
      } finally {
        await I(w);
      }
    },
    removeTree: (i, {keep: o, onDeleted: c} = {}) => A(i, async (w, _, v) => {
      if (o !== void 0) z(o);
      let T = o === void 0 ? null : Buffer.from(o), Y = S => T !== null && (typeof S === "string" ? S === o : S.equals(T)), {bytes: M} = n, ne = (S, x) => typeof x === "string" ? n.unlink(S, x) : M.unlink(S, x), me = (S, x) => typeof x === "string" ? n.rmdir(S, x) : M.rmdir(S, x), re = (S, x) => typeof x === "string" ? n.openDir(S, x) : M.openDir(S, x), ye = async S => M === void 0 ? P(S) : In(await M.list(S), D), te = async (S, x) => {
        try {
          await ne(S, x);
        } catch (V) {
          let oe = E(V);
          if (oe === "ENOENT") return "gone";
          if (oe === "EISDIR" || oe === "EPERM") return "directory";
          throw V;
        }
        return c?.(), "gone";
      }, ce = bn, ie = async (S, x, V, oe, He = !1) => {
        for (let Fe = 0; ;Fe++) {
          f();
          let Pe = (await ye(V)).filter(F => !(He && Y(F)));
          if (ce -= Pe.length, ce < 0) throw Object.assign(Error("directory too large to remove: too many entries"), {
            code: "E2BIG"
          });
          if (oe.length >= pn) throw Object.assign(Error("directory too deep to remove"), {
            code: "ENAMETOOLONG"
          });
          let Le = !1, rn = Ta(_n, async F => {
            if (Le) throw We;
            f();
            try {
              return await te(V, F);
            } catch (G) {
              throw Le = !0, G;
            }
          }), xe = await Promise.allSettled(Pe.map(F => rn(F))), _e = xe.filter(F => F.status === "rejected");
          if (_e.length > 0) throw (_e.find(F => F.reason !== We) ?? _e[0]).reason;
          let tn = Pe.filter((F, G) => {
            let Me = xe[G];
            return Me?.status === "fulfilled" && Me.value === "directory";
          });
          for (let F of tn) {
            let G = await re(V, F).catch(() => null);
            if (G === null) {
              if (await te(V, F) === "directory") await me(V, F), c?.();
              continue;
            }
            try {
              await ie(V, F, G, [ ...oe, F ]);
            } finally {
              await n.closeDir(G);
            }
          }
          if (He && T !== null) return;
          try {
            await me(S, x), c?.();
            return;
          } catch (F) {
            let G = E(F);
            if (G === "ENOENT") return;
            if (G !== "ENOTEMPTY" || Fe >= Pn) throw F;
          }
        }
      }, pe = await n.openDir(w, _).catch(async S => {
        if (W(S)) return null;
        if (T !== null) throw X(S);
        if (await te(w, _) === "gone") return null;
        throw X(S);
      });
      if (pe === null) return;
      try {
        await ie(w, _, pe, [ ...v, _ ], !0);
      } finally {
        await n.closeDir(pe);
      }
    }),
    lstat: async i => {
      if (i !== "") return A(i, n.lstat);
      return f(), a.stat();
    },
    open: async (i, o) => {
      let c = Ue(o);
      if (n.openBeneath !== void 0) {
        let {dirs: w, leaf: _} = he(i, D);
        return f(), n.openBeneath([ ...h, ...w ], _, c);
      }
      return A(i, (w, _, v) => n.open(w, _, [ ...h, ...v ], c));
    },
    anchorBeneath: async i => {
      let o = ue(i, D), c = n.holdOpenedDir(await R(o, null), r.path.join(b, ...o));
      return Rrr(e, r, c, n.getHeldDir(c), c.realPath, n.forAnchorBeneath ?? n, [ ...h, ...o ], p);
    },
    holdOutside: H,
    moveOut: (i, o, c) => A(i, async (w, _, v) => {
      await n.renameOut(w, _, C(o), z(c)), await J("rename", {
        from: {
          dir: w,
          dirs: v
        }
      });
    }),
    moveIn: (i, o, c) => A(c, async (w, _, v) => {
      await n.renameIn(C(i), z(o), w, _), await J("rename", {
        to: {
          dir: w,
          dirs: v
        }
      });
    }),
    linkIn: Ce,
    placeCreatedIn: (i, o, c) => n.renameInNoReplace === void 0 ? Ce(i, o, c) : A(c, async (w, _, v) => {
      await n.renameInNoReplace(C(i), z(o), w, _), await J("rename", {
        to: {
          dir: w,
          dirs: v
        }
      });
    }),
    statIn: async (i, o) => n.statIn(C(i), z(o)),
    openIn: async (i, o, c) => n.openIn(C(i), z(o), Ue(c)),
    unlinkIn: async (i, o) => n.unlinkIn(C(i), z(o)),
    close: k,
    [Symbol.asyncDispose]: k
  };
}

function En(e, r) {
  return e.filter(a => Xe(a, r));
}

function In(e, r) {
  return e.filter(a => Xe(a.toString("latin1"), r));
}

function Xe(e, r) {
  return e !== "" && e !== "." && e !== ".." && !e.includes("/") && !e.includes(r) && !e.includes("\0");
}

function z(e) {
  if (e === "" || e === "." || e === ".." || e.includes("/") || e.includes("\\") || e.includes("\0")) throw Error("a held-directory leaf must be one plain name");
  return e;
}

async function qe(e, r) {
  let {fs: a} = e, m = await a.realpath(r).catch(() => null);
  if (m === null) return null;
  let b = await a.open(m, j).catch(() => null);
  if (b === null) return null;
  try {
    let [n, h] = await Promise.all([ b.stat({
      bigint: !0
    }), a.lstat(m, {
      bigint: !0
    }) ]);
    if (!n.isDirectory() || !h.isDirectory() || n.ino === 0n || n.dev !== h.dev || n.ino !== h.ino) return await b.close().catch(() => {}), 
    null;
  } catch {
    return await b.close().catch(() => {}), null;
  }
  return {
    realPath: m,
    dir: b,
    stat: () => b.stat({
      bigint: !0
    }),
    close: () => b.close()
  };
}

function Qe(e) {
  return {
    stat: () => e.stat({
      bigint: !0
    }),
    close: () => e.close()
  };
}

async function kn(e, r, a, m, b, n, h) {
  let p = (D, s) => e.chown(D, s).catch(u => {
    throw new J6r(u);
  });
  try {
    if (await e.writeFile(r), n !== void 0 && n.to.gid !== n.from.gid) await p(n.from.uid, n.to.gid);
    if (await e.chmod(a), n !== void 0 && n.to.uid !== n.from.uid) await p(n.to.uid, n.to.gid);
    if (m) await e.sync();
    await h();
  } catch (D) {
    throw await b().catch(() => {}), await e.close().catch(() => {}), D;
  }
  try {
    await e.close();
  } catch (D) {
    throw await b().catch(() => {}), D;
  }
}

var Ze = (e, r) => r === void 0 ? e : e & 448;

async function aQo(e, r, a, m, b, n = !1, h, p = () => Promise.resolve()) {
  let {made: D, lookError: s} = await e.stat({
    bigint: !0
  }).then(g => ({
    made: g,
    lookError: void 0
  }), g => ({
    made: null,
    lookError: g
  })), u = async () => {
    let g = await m();
    if (D !== null && D.ino !== 0n && g !== null && g.dev === D.dev && g.ino === D.ino) await b();
  };
  if (h !== void 0 && D === null) throw await e.close().catch(() => {}), new J6r(s);
  let N = D && {
    uid: Number(D.uid),
    gid: Number(D.gid)
  };
  return kn(e, r, a, n, u, h === void 0 || N === null ? void 0 : {
    from: N,
    to: {
      ...N,
      ...h
    }
  }, () => p(D));
}

async function Ke(e, r, a) {
  let [m, b] = await Promise.all([ e.fs.lstat(a, {
    bigint: !0
  }), r.stat({
    bigint: !0
  }) ]);
  return m.dev === b.dev && m.ino === b.ino && b.ino !== 0n;
}

async function Nn(e, r) {
  try {
    let [a, m] = await Promise.all([ e.fs.lstat(`/proc/self/fd/${r.fd}/.`, {
      bigint: !0
    }), r.stat({
      bigint: !0
    }) ]);
    return a.dev === m.dev && a.ino === m.ino && m.ino !== 0n;
  } catch (a) {
    let m = E(a);
    if (m === "ENOENT" || m === "EACCES" || m === "EPERM") return !1;
    throw a;
  }
}

function Rn(e, r, {realRoot: a, directoryCheck: m}, b) {
  let {fs: n} = e, h = (s, u) => `/proc/self/fd/${s.fd}/${u}`, p = (s, u) => Buffer.concat([ Buffer.from(`/proc/self/fd/${s.fd}/`), u ]), D = {
    openDir: (s, u) => n.open(h(s, u), j),
    mkdir: async (s, u, N) => {
      await n.mkdir(h(s, u), {
        mode: N
      });
    },
    closeDir: s => s.close(),
    ...{},
    create: async (s, u, N, g, O, k, B, H) => {
      if (await aQo(await n.open(h(s, u), le | L.O_NOFOLLOW, Ze(O, B)), g, O, () => n.lstat(h(s, u), {
        bigint: !0
      }).catch(() => null), () => n.unlink(h(s, u)), k, B, H), k) await s.sync().catch(() => {});
    },
    createAndOpen: (s, u, N, g) => n.open(h(s, u), le | L.O_NOFOLLOW, g),
    link: (s, u, N, g) => n.link(h(s, u), h(N, g)),
    rename: (s, u, N, g) => n.rename(h(s, u), h(N, g)),
    symlink: (s, u, N) => n.symlink(s, h(u, N)),
    readlink: (s, u) => n.readlink(h(s, u)),
    unlink: (s, u) => n.unlink(h(s, u)),
    rmdir: (s, u) => n.rmdir(h(s, u)),
    list: async (s, u) => {
      if (u === void 0) return n.readdir(`/proc/self/fd/${s.fd}`);
      throw q("WORKING_LIST_UNSUPPORTED");
    },
    bytes: {
      list: s => n.readdir(`/proc/self/fd/${s.fd}`, {
        encoding: "buffer"
      }),
      openDir: (s, u) => n.open(p(s, u), j),
      unlink: (s, u) => n.unlink(p(s, u)),
      rmdir: (s, u) => n.rmdir(p(s, u))
    },
    lstat: (s, u) => n.lstat(h(s, u), {
      bigint: !0
    }),
    open: (s, u, N, g) => n.open(h(s, u), g | L.O_NOFOLLOW | Zs),
    hold: s => qe(e, s),
    getHeldDir: s => s.dir,
    holdOpenedDir: (s, u) => ({
      realPath: u,
      dir: s,
      stat: () => s.stat({
        bigint: !0
      }),
      close: () => s.close()
    }),
    renameOut: (s, u, N, g) => n.rename(h(s, u), h(N.dir, g)),
    renameIn: (s, u, N, g) => n.rename(h(s.dir, u), h(N, g)),
    linkIn: (s, u, N, g) => n.link(h(s.dir, u), h(N, g)),
    statIn: (s, u) => n.lstat(h(s.dir, u), {
      bigint: !0
    }),
    openIn: (s, u, N) => n.open(h(s.dir, u), N | L.O_NOFOLLOW | Zs),
    unlinkIn: (s, u) => n.unlink(h(s.dir, u))
  };
  return Rrr("linux_procfd", e, Qe(r), r, a, D, [], m);
}

var vn = /^\S+ ..x. \S+ \S+ \S+ +(\/.*\/(?:libc\.so\.6|libc-2\.\d+\.so|ld-musl-\w+\.so\.1))$/;

function hjs(e) {
  let [r, ...a] = new Set(e.split(`\n`).flatMap(m => vn.exec(m)?.[1] ?? []));
  return r === void 0 || a.length > 0 ? null : r;
}

async function NYs(e) {
  if (e.linuxDirectoryStream === void 0) {
    let a = "";
    try {
      await using m = await e.fs.open("/proc/self/maps", L.O_RDONLY | Zs);
      a = await m.readFile({
        encoding: "utf8"
      });
    } catch (m) {
      if (!W(m)) throw m;
    }
    e.linuxDirectoryStream ??= Bn(a);
  }
  let r = e.linuxDirectoryStream;
  try {
    return await r;
  } catch (a) {
    if (e.linuxDirectoryStream === r) e.linuxDirectoryStream = void 0;
    return t(`anchor: libc directory streams unavailable, so a bounded listing is refused (${l(a)})`, {
      level: "warn"
    }), null;
  }
}

async function Bn(e) {
  let r = hjs(e);
  if (r === null) throw Error("not exactly one glibc or musl is mapped as code in this process");
  let a = await import("bun:ffi"), {symbols: m} = a.dlopen(r, {
    fdopendir: {
      args: [ "i32" ],
      returns: "ptr"
    },
    readdir: {
      args: [ "ptr" ],
      returns: "ptr"
    },
    closedir: {
      args: [ "ptr" ],
      returns: "i32"
    },
    __errno_location: {
      args: [],
      returns: "ptr"
    }
  }), b = m.__errno_location(), n = b === null ? null : new Int32Array(a.toArrayBuffer(b, 0, 4));
  return t("anchor: libc directory streams loaded through bun:ffi"), {
    fdopendir: m.fdopendir,
    readdir: m.readdir,
    closedir: m.closedir,
    readName: h => {
      let p = Buffer.from(a.toArrayBuffer(h, 19, a.read.u16(h, 16) - 19));
      return p.toString("utf8", 0, p.indexOf(0));
    },
    clearErrno: () => {
      n?.fill(0);
    },
    readErrno: () => n?.[0] ?? -1
  };
}

function Ye(e, r) {
  return Object.assign(Error("libc call failed"), {
    errno: r,
    code: r <= 0 ? "EUNKNOWN" : ge(-r),
    syscall: e
  });
}

async function $Ys(e, r, a) {
  e.clearErrno();
  let m = e.fdopendir(r);
  if (m === null) {
    let b = e.readErrno();
    throw await se(r), Ye("fdopendir", b);
  }
  try {
    let b = [];
    while (b.length <= a) {
      e.clearErrno();
      let n = e.readdir(m);
      if (n === null) {
        let p = e.readErrno();
        if (p !== 0) throw Ye("readdir", p);
        return b;
      }
      let h = e.readName(n);
      if (h !== "." && h !== "..") b.push(h);
    }
    return b;
  } finally {
    e.closedir(m);
  }
}

var An = 0o170000n, Sn = 0o010000n, Cn = 0o020000n, Tn = 0o040000n, Hn = 0o060000n, Fn = 0o100000n, Ln = 0o120000n, xn = 0o140000n;

function FYs(e) {
  let r = BigInt(e.readUInt16LE(4)), a = D => () => (r & An) === D, m = D => {
    let s = e.readBigInt64LE(D) * 1000000000n + e.readBigInt64LE(D + 8);
    return {
      ns: s,
      ms: s / 1000000n,
      date: new Date(Number(s / 1000000n))
    };
  }, b = m(32), n = m(48), h = m(64), p = m(80);
  return {
    dev: BigInt(e.readInt32LE(0)),
    mode: r,
    nlink: BigInt(e.readUInt16LE(6)),
    ino: e.readBigUInt64LE(8),
    uid: BigInt(e.readUInt32LE(16)),
    gid: BigInt(e.readUInt32LE(20)),
    rdev: BigInt(e.readInt32LE(24)),
    size: e.readBigInt64LE(96),
    blocks: e.readBigInt64LE(104),
    blksize: BigInt(e.readInt32LE(112)),
    atimeNs: b.ns,
    mtimeNs: n.ns,
    ctimeNs: h.ns,
    birthtimeNs: p.ns,
    atimeMs: b.ms,
    mtimeMs: n.ms,
    ctimeMs: h.ms,
    birthtimeMs: p.ms,
    atime: b.date,
    mtime: n.date,
    ctime: h.date,
    birthtime: p.date,
    isFile: a(Fn),
    isDirectory: a(Tn),
    isSymbolicLink: a(Ln),
    isFIFO: a(Sn),
    isSocket: a(xn),
    isBlockDevice: a(Hn),
    isCharacterDevice: a(Cn)
  };
}

var Mn = [ "dev", "ino", "mode", "nlink", "uid", "gid", "rdev", "size", "blocks", "blksize", "mtimeNs", "ctimeNs", "birthtimeNs", "mtimeMs", "ctimeMs", "birthtimeMs" ];

function UYs(e, r) {
  return Mn.filter(a => e[a] !== r[a]);
}

function BYs(e, r) {
  return;
}

var we = Q(sn), se = Q($e), Ge = Q(cn), en = Q(ln), Wn = Q(on), Un = Q(an), Kn = Q(dn);

function Yn(e) {
  return {
    stat: r => we(e, r),
    writeFile: r => Kn(e, r),
    chown: (r, a) => Un(e, r, a),
    chmod: r => Wn(e, r),
    sync: () => en(e),
    close: () => se(e)
  };
}

var de, Gn = Buffer.from("."), $n = Buffer.from("..");

function U(e) {
  return Buffer.concat([ typeof e === "string" ? Buffer.from(e) : e, Buffer.from([ 0 ]) ]);
}

function yjs() {
  if (de !== void 0) return de;
  try {
    let e = Ne("bun:ffi"), r = e.dlopen("/usr/lib/libSystem.B.dylib", {
      openat: {
        args: [ "i32", "ptr", "i32" ],
        returns: "i32"
      },
      mkdirat: {
        args: [ "i32", "ptr", "u32" ],
        returns: "i32"
      },
      renameat: {
        args: [ "i32", "ptr", "i32", "ptr" ],
        returns: "i32"
      },
      linkat: {
        args: [ "i32", "ptr", "i32", "ptr", "i32" ],
        returns: "i32"
      },
      unlinkat: {
        args: [ "i32", "ptr", "i32" ],
        returns: "i32"
      },
      __error: {
        args: [],
        returns: "ptr"
      }
    }), a = !0, m = "fdopendir$INODE64", b = "readdir$INODE64", n = null;
    try {
      n = e.dlopen("/usr/lib/libSystem.B.dylib", {
        ["fdopendir$INODE64"]: {
          args: [ "i32" ],
          returns: "ptr"
        },
        ["readdir$INODE64"]: {
          args: [ "ptr" ],
          returns: "ptr"
        },
        closedir: {
          args: [ "ptr" ],
          returns: "i32"
        }
      }).symbols;
    } catch (g) {
      t(`anchor: fdopendir, readdir or closedir could not be loaded, so held directories cannot be listed (${l(g)})`, {
        level: "warn"
      });
    }
    let h = null;
    try {
      h = e.dlopen("/usr/lib/libSystem.B.dylib", {
        symlinkat: {
          args: [ "ptr", "i32", "ptr" ],
          returns: "i32"
        },
        readlinkat: {
          args: [ "i32", "ptr", "ptr", "u64" ],
          returns: "i32"
        }
      }).symbols;
    } catch (g) {
      t(`anchor: symlinkat or readlinkat could not be loaded, so no symbolic link can be made or read in a held directory (${l(g)})`, {
        level: "warn"
      });
    }
    let p = h, D = TC(() => {
      try {
        return;
      } catch (g) {
        t(`anchor: openat could not be loaded to create, so files are created by full path (${l(g)})`, {
          level: "warn"
        });
        return;
      }
    }), s = r.symbols, u = (g, O) => {
      if (O >= 0) return O;
      let k = s.__error(), B = k === null ? 0 : e.read.i32(k, 0), H = Error("libSystem call failed");
      throw H.errno = B, H.code = B === 0 ? "EUNKNOWN" : ge(-B), H.syscall = g, H;
    }, N = n === null ? null : (g, O) => {
      let k = n, B = u("openat", s.openat(g, U("."), j)), H = k.fdopendir$INODE64(B);
      if (H === null) {
        let C = s.__error(), I = C === null ? 0 : e.read.i32(C, 0);
        throw $e(B, () => {}), Object.assign(Error("libSystem call failed"), {
          errno: I,
          code: I === 0 ? "EUNKNOWN" : ge(-I),
          syscall: "fdopendir"
        });
      }
      try {
        let C = [];
        for (;;) {
          let I = s.__error();
          if (I !== null) new Int32Array(e.toArrayBuffer(I, 0, 4))[0] = 0;
          let y = k.readdir$INODE64(H);
          if (y === null) {
            let R = I === null ? -1 : e.read.i32(I, 0);
            if (R !== 0) throw Object.assign(Error("libSystem call failed"), {
              errno: R,
              code: R === -1 ? "EUNKNOWN" : ge(-R),
              syscall: "readdir"
            });
            return C;
          }
          let f = e.read.u16(y, 18), P = Buffer.from(new Uint8Array(e.toArrayBuffer(y, 21, f)));
          if (!P.equals(Gn) && !P.equals($n)) C.push(P);
          if (O !== void 0 && !(C.length <= O)) return C;
        }
      } finally {
        k.closedir(H);
      }
    };
    de = {
      openat: (g, O, k) => u("openat", s.openat(g, U(O), k)),
      getBeneath: D,
      mkdirat: (g, O, k) => {
        u("mkdirat", s.mkdirat(g, U(O), k));
      },
      renameat: (g, O, k, B) => {
        u("renameat", s.renameat(g, U(O), k, U(B)));
      },
      linkat: (g, O, k, B) => {
        u("linkat", s.linkat(g, U(O), k, U(B), 0));
      },
      ...p !== null && {
        symlinkat: (g, O, k) => {
          u("symlinkat", p.symlinkat(U(g), O, U(k)));
        },
        readlinkat: (g, O) => {
          let k = Buffer.alloc(wn), B = u("readlinkat", p.readlinkat(g, U(O), k, k.length));
          if (B >= k.length) throw Object.assign(Error("symbolic link target too long"), {
            code: "ENAMETOOLONG",
            syscall: "readlinkat"
          });
          return k.toString("utf8", 0, B);
        }
      },
      unlinkat: (g, O) => {
        u("unlinkat", s.unlinkat(g, U(O), 0));
      },
      rmdirat: (g, O) => {
        u("unlinkat", s.unlinkat(g, U(O), gn));
      },
      ...n !== null && {
        listDirectory: (g, O) => N(g, O).map(k => k.toString("utf8")),
        listDirectoryBytes: g => N(g)
      }
    }, t("anchor: libSystem *at loaded through bun:ffi");
  } catch (e) {
    t(`anchor: bun:ffi unavailable (${l(e)})`, {
      level: "warn"
    }), de = null;
  }
  return de;
}

function _js(e) {
  return e.noFollowAnyEnforced ??= jn(e);
}

async function jn(e) {
  let {fs: r, path: a} = e, m = null;
  try {
    m = await r.realpath(await je(a.join(ze(), "claude-nfa-"))), await r.mkdir(a.join(m, "d")), 
    await fn(a.join(m, "d"), a.join(m, "l"));
    let b = le | Ee;
    try {
      await (await r.open(a.join(m, "d", "control"), b, 384)).close();
    } catch (n) {
      if (E(n) === "EINVAL") return !1;
      throw n;
    }
    try {
      return await (await r.open(a.join(m, "l", "probe"), b, 384)).close(), !1;
    } catch (n) {
      if (E(n) === "ELOOP") return !0;
      throw n;
    }
  } catch (b) {
    return t(`anchor: O_NOFOLLOW_ANY probe not run (${E(b) ?? "not an errno"})`), !0;
  } finally {
    if (m !== null) await Ve(m, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}

async function Vn(e, r) {
  let a = r.getBeneath?.();
  if (a === void 0) return "not_bound";
  return await bjs(e, a) ?? ((m, b, n) => a.create(m, [ b ], n & 511));
}

function bjs(e, r) {
  return e.heldCreateProbed ??= zn(r).then(a => {
    if (a === "probe_not_run" || a === "probe_create_failed") e.heldCreateProbed = void 0;
    return a;
  });
}

async function zn(e) {
  let r = (n, h) => t(`anchor: the probe of the create in a held directory ${n}, so this ${h} creates by full path`), a = null, m = [], b = n => (m.push(n), 
  we(n, {
    bigint: !0
  }));
  try {
    a = await je(`${ze()}/claude-held-`);
    let n = await Ge(a, j);
    m.push(n);
    let h = await b(await Ge(`${a}/by-path`, le, 384)), p;
    try {
      p = await b(e.create(n, [ "held" ], 384));
    } catch (s) {
      return r(`failed (${E(s) ?? "not an errno"})`, "anchor"), "probe_create_failed";
    }
    if (p.mode !== h.mode) return r(`made a file of mode ${p.mode.toString(8)} where node made one of ${h.mode.toString(8)}`, "host"), 
    "probe_wrong_mode";
    let D = await un(`${a}/held`, {
      bigint: !0
    }).catch(s => {
      if (W(s)) return null;
      throw s;
    });
    if (D === null || !Ie(p, D)) return r("made a file that is not seen at its name", "host"), 
    "probe_wrong_place";
    return null;
  } catch (n) {
    return r(`could not be staged (${E(n) ?? "not an errno"})`, "anchor"), "probe_not_run";
  } finally {
    if (await Promise.all(m.map(n => se(n).catch(() => {}))), a !== null) await Ve(a, {
      recursive: !0,
      force: !0
    }).catch(() => {});
  }
}

var Oe = L.O_RDONLY | hn | L.O_NONBLOCK;

function Jn(e, r, a, {realRoot: m, directoryCheck: b}, n, h, p) {
  let {fs: D, path: s} = e, u = (I, y, f, P) => D.open(s.join(m, ...I, y), f & ~L.O_NOFOLLOW | Ee | Zs, P), N = async (I, y) => {
    let f = r.fstatat?.(I, y);
    return f !== void 0 && f.dev >= 0n && f.ino < 2n ** 63n ? f : g(I, y, Oe);
  }, g = async (I, y, f) => {
    let P = r.openat(I, y, f | Zs);
    try {
      return await we(P, {
        bigint: !0
      });
    } finally {
      await se(P);
    }
  }, O = async (I, y, f) => {
    try {
      let [P, R] = await Promise.all([ I.stat({
        bigint: !0
      }), y() ]);
      if (P.dev !== R.dev || P.ino !== R.ino) throw f?.(), Object.assign(Error("not the file the held directory names"), {
        code: "ELOOP"
      });
      return I;
    } catch (P) {
      throw await I.close().catch(() => {}), P;
    }
  }, k = async (I, y, f, P, R) => {
    try {
      return I === null ? await u(P, f, le, R) : Yn(I(y, f, R));
    } catch (A) {
      throw X(A);
    }
  }, {listDirectory: B, listDirectoryBytes: H} = r, C = I => ({
    ...H !== void 0 && {
      bytes: {
        list: async y => H(y),
        openDir: async (y, f) => r.openat(y, f, j),
        unlink: async (y, f) => r.unlinkat(y, f),
        rmdir: async (y, f) => r.rmdirat(y, f)
      }
    },
    openDir: async (y, f) => r.openat(y, f, j),
    mkdir: async (y, f, P) => r.mkdirat(y, f, P),
    closeDir: y => se(y),
    createsInHeldDirectory: I !== null,
    ...I !== null && {
      statDirectoryByPath: async y => {
        let f = await u(y, "", j | L.O_NONBLOCK).catch(P => {
          throw X(P);
        });
        try {
          return await f.stat({
            bigint: !0
          });
        } finally {
          await f.close();
        }
      }
    },
    create: async (y, f, P, R, A, Z, ee, fe) => {
      if (await aQo(await k(I, y, f, P, Ze(A, ee)), R, A, () => g(y, f, Oe).catch(() => null), () => r.unlinkat(y, f), Z, ee, fe), 
      Z) await en(y).catch(() => {});
    },
    createAndOpen: (y, f, P, R) => u(P, f, le, R).catch(A => {
      throw X(A);
    }),
    link: async (y, f, P, R) => r.linkat(y, f, P, R),
    rename: async (y, f, P, R) => r.renameat(y, f, P, R),
    symlink: async (y, f, P) => {
      if (r.symlinkat === void 0) throw q("WORKING_LINK_UNSUPPORTED");
      r.symlinkat(y, f, P);
    },
    readlink: async (y, f) => {
      if (r.readlinkat === void 0) throw q("WORKING_LINK_UNSUPPORTED");
      return r.readlinkat(y, f);
    },
    unlink: async (y, f) => r.unlinkat(y, f),
    rmdir: async (y, f) => r.rmdirat(y, f),
    ...B !== void 0 && {
      list: async (y, f) => B(y, f)
    },
    lstat: N,
    open: async (y, f, P, R) => O(await u(P, f, R), () => N(y, f), () => p?.([ ...P, f ].join("/"))),
    ...p === null && {
      openBeneath: (y, f, P) => u(y, f, P)
    },
    hold: y => qe(e, y),
    getHeldDir: y => y.dir.fd,
    holdOpenedDir: (y, f) => ({
      realPath: f,
      dir: {
        fd: y
      },
      stat: () => we(y, {
        bigint: !0
      }),
      close: () => se(y)
    }),
    renameOut: async (y, f, P, R) => r.renameat(y, f, P.dir.fd, R),
    renameIn: async (y, f, P, R) => r.renameat(y.dir.fd, f, P, R),
    linkIn: async (y, f, P, R) => r.linkat(y.dir.fd, f, P, R),
    statIn: (y, f) => N(y.dir.fd, f),
    openIn: async (y, f, P) => O(await D.open(s.join(y.realPath, f), P & ~L.O_NOFOLLOW | Ee | Zs), () => g(y.dir.fd, f, Oe)),
    unlinkIn: async (y, f) => r.unlinkat(y.dir.fd, f)
  });
  return Rrr("darwin_at", e, Qe(a), a.fd, m, {
    ...C(typeof n === "function" ? n : null),
    ...typeof n === "string" && {
      heldCreateRefusal: n
    },
    ...!h && {
      forAnchorBeneath: C(null)
    }
  }, [], b);
}

function jYs(e, r, {createsInHeldDirectoryCheckedByPath: a = !1} = {}) {
  return oTn(e, {
    gitRoot: r,
    realRoot: r,
    isRootNameExchangeable: !0,
    ...a && {
      [Je]: !0
    }
  });
}

async function oTn(e, r) {
  let {[Je]: a, ...m} = r, b = void 0, n = !1, h = {
    ...m,
    directoryCheck: void 0
  };
  switch (e.platform()) {
   case "windows":
    {
      let {loadNt: p} = await import("./chunk-pg2er1g4.js"), D = p();
      if (D === null) return {
        unavailable: "no_ffi"
      };
      let {openWin32Backend: s} = await import("./chunk-mdyzp1t6.js"), u = await s(e, D, h);
      return "unanchored" in u ? {
        unavailable: u.unanchored
      } : Rrr("win32_handle", e, u.root, u.held, h.realRoot, u.ops);
    }

   case "linux":
   case "wsl":
    {
      let p = await e.fs.open(h.realRoot, j);
      try {
        if (!await Ke(e, p, h.realRoot)) return await p.close(), {
          unavailable: "unstable_identity"
        };
        if (await Nn(e, p)) {
          let D = (void 0)?.createsInHeldDirectory === !0 || !1;
          return Rn(e, p, h, D);
        }
        return await p.close(), {
          unavailable: "no_procfs"
        };
      } catch (D) {
        throw await p.close().catch(() => {}), D;
      }
    }

   case "macos":
    {
      let p = e.darwinAt ?? yjs();
      if (p === null) return {
        unavailable: "no_ffi"
      };
      if (!await _js(e)) return {
        unavailable: "nofollow_any_unenforced"
      };
      let D = await e.fs.open(h.realRoot, j);
      try {
        if (await OKt(e, h) !== h.realRoot) throw yn();
        if (!await Ke(e, D, h.realRoot)) return await D.close(), {
          unavailable: "unstable_identity"
        };
        return Jn(e, p, D, h, (void 0)?.createsInHeldDirectory === !0 ? await Vn(e, p) : null, !1, null);
      } catch (s) {
        throw await D.close().catch(() => {}), s;
      }
    }

   case "unknown":
    return {
      unavailable: "unsupported_platform"
    };
  }
}

function WYs(e) {
  return e.kind === "unavailable" ? e.reason : null;
}

async function zYs(e, {host: r = IKt(), now: a = () => performance.now()} = {}) {
  let m = a();
  return {
    ...await Xn(r, e).catch(n => ({
      kind: "threw"
    })),
    elapsedMs: Math.round(a() - m)
  };
}

async function Xn(e, r) {
  let a = await oTn(e, {
    gitRoot: r,
    realRoot: await e.fs.realpath(r)
  });
  if ("unavailable" in a) return {
    kind: "unavailable",
    reason: a.unavailable
  };
  return await a.close().catch(() => {}), {
    kind: "available"
  };
}

export { J6r, gjs, LYs, Rrr, aQo, hjs, NYs, $Ys, FYs, UYs, BYs, yjs, _js, bjs, jYs, oTn, WYs, zYs };
