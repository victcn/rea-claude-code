// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { K, CJe, B, ZS } from "./chunk-3pqddg8f.js";

import { x, l, E, W, r2, jt, $y } from "./chunk-b0z4bv3v.js";

import { m } from "./chunk-3ykz5st8.js";

import { Bl, le } from "./chunk-cqgvwwgb.js";

import { vh, wo, uo, se, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { DC, Zqn, qMo, ls, kln, hje, UU, SFs } from "./chunk-30n0xq4e.js";

import { a } from "./chunk-j016gcgm.js";

import { yT } from "./chunk-fvcjfcfm.js";

import { GMo } from "./chunk-dgqa0xqf.js";

import { Mg } from "./chunk-j7qcpyv8.js";

import { O } from "./chunk-1xnsr4dy.js";

import { randomBytes as J } from "crypto";

import { closeSync as k, fchmodSync as ae, constants as w, fstatSync as D, writeFileSync as G, fsyncSync as X, ftruncateSync as ce, openSync as _, readSync as de } from "fs";

import { lstat as Q, open as A, readlink as fe, realpath as q, stat as ee } from "fs/promises";

import { homedir as te } from "os";

import { basename as M, dirname as b, extname as Y, isAbsolute as H, join as N, normalize as ue, parse as me, relative as z, resolve as j, sep as P } from "path";

class ne {
  identities=new Map;
  record(e, n, r, s) {
    let u = Z(e), i = this.identities.get(u);
    if (i) try {
      k(i.fd);
    } catch {}
    this.identities.set(u, {
      dev: n,
      ino: r,
      fd: s
    });
  }
  identity(e) {
    return this.identities.get(Z(e));
  }
  reset() {
    for (let {fd: e} of this.identities.values()) try {
      k(e);
    } catch {}
    this.identities.clear();
  }
}

var pe = new K(() => new ne);

function V() {
  return pe.of(B().host);
}

function Z(e) {
  return j(e);
}

function iFs(e, n, r, s) {
  V().record(e, n, r, s);
}

function t$t(e) {
  if (!e) return;
  let n = V().identity(e);
  if (!n) return;
  let r;
  try {
    r = _(e, w.O_RDONLY | w.O_DIRECTORY | w.O_NOFOLLOW);
  } catch (s) {
    let u = E(s);
    if (u === "ENOENT" || u === "ENOTDIR" || u === "ELOOP" || u === "EACCES") Agt(`Staging dir ${e} was established for a sandboxed command but is now unopenable (${u}) \u2014 refusing atomic write`);
    throw s;
  }
  try {
    let s = D(r);
    if (s.dev !== n.dev || s.ino !== n.ino) Agt(`Staging dir ${e} identity changed (expected ${n.dev}/${n.ino}, found ${s.dev}/${s.ino}) \u2014 refusing atomic write`);
  } finally {
    k(r);
  }
}

function CMr(e, n, r, s) {
  let u = `${n}${r}`;
  if (!e) return u;
  let i = V().identity(e);
  if (s && b(n) !== b(e)) return t$t(e), u;
  let o = w.O_RDONLY | w.O_DIRECTORY | w.O_NOFOLLOW;
  try {
    k(_(b(e), o));
  } catch (y) {
    let h = E(y);
    if (h === "ELOOP" || h === "ENOTDIR") {
      if (i) Agt(`Staging dir parent ${b(e)} is ${h} but a sandboxed command established ${e} \u2014 refusing sibling fallback`);
      if (s) return u;
      throw new Og(`Refusing to stage atomic write under non-directory parent: ${b(e)}`);
    }
    if (!W(y)) throw y;
    if (i) Agt(`Staging dir parent ${b(e)} is absent but a sandboxed command established ${e} \u2014 refusing sibling fallback`);
    return u;
  }
  let f;
  try {
    f = _(e, o);
  } catch (y) {
    let h = E(y);
    if (h === "ENOENT" || h === "ENOTDIR" || h === "ELOOP") {
      if (i) Agt(`Staging dir ${e} is ${h} but a sandboxed command established it \u2014 refusing sibling fallback`);
      return u;
    }
    throw y;
  }
  try {
    if (i) {
      let y = D(f);
      if (y.dev !== i.dev || y.ino !== i.ino) Agt(`Staging dir ${e} identity changed (expected ${i.dev}/${i.ino}, found ${y.dev}/${y.ino}) \u2014 refusing atomic write`);
    }
  } finally {
    k(f);
  }
  return N(e, `${M(n)}${r}`);
}

class Og extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkWriteRefusedError";
  }
}

class Vqn extends Og {
  constructor(e, n) {
    super(qMo(e, n));
    this.name = "HardLinkWriteRefusedError";
  }
}

function re(e) {
  return {
    flags: w.O_WRONLY | w.O_CREAT | e,
    flagsIfMissing: void 0
  };
}

class yX extends Error {
  constructor(e) {
    super(e);
    this.name = "SymlinkReadRefusedError";
  }
}

async function Tgt(e, n) {
  let r = z(e, n);
  if (r === "" || r.startsWith("..") || H(r)) throw new x(`assertDirChainReal: dir must be strictly inside base (rel: ${r})`, "assertDirChainReal: dir must be strictly inside base");
  let s = e;
  for (let u of r.split(P)) {
    s = N(s, u);
    try {
      await (await A(s, w.O_RDONLY | w.O_DIRECTORY | w.O_NOFOLLOW)).close();
    } catch (i) {
      let o = E(i);
      if (o === "ELOOP" || o === "ENOTDIR") throw new Og(`Refusing to write under symlinked or non-directory path: ${s}`);
      if (o === "ENOENT") return;
      throw i;
    }
  }
}

class RMr extends Error {
  constructor(e) {
    super(e);
    this.name = "StagingDirTamperedError";
  }
}

function Agt(e) {
  throw m("sandbox_exec", "atomic_write_staging_dir_tampered"), new RMr(e);
}

function _X(e, n, r = "write") {
  let s = e.session.writePermissionStash.consume(e.toolUseId, n, r);
  if (s === CJe) throw new (r === "read" ? yX : Og)(`Refusing to ${r === "read" ? "read" : "write"} ${n}: its permission check expired before it ran (too many concurrent file operations). Retry.`);
  if (s !== void 0) return s;
  if (e.toolUseId) t(`takeApprovedPathsForWrite: no check-time stash for toolUseId=${e.toolUseId}; using fresh resolution`);
  return uo(n);
}

function HXe(e, n) {
  return _X(e, n, "read");
}

async function Gc(e) {
  try {
    return await ee(e), !0;
  } catch {
    return !1;
  }
}

async function Cj(e) {
  return Q(e).then(() => "present", n => W(n) || E(n) === "ENOTDIR" ? "gone" : "unreadable");
}

var DXe = 262144;

function LXe(e, {maxBytes: n, symlinkAtPath: r = "follow", regularFileOnly: s = r === "refuse"}) {
  using u = vh`fs.readBoundedSync(${e}, max ${n} bytes)`;
  let i = "r";
  if (r === "refuse") i = w.O_RDONLY | w.O_NOFOLLOW | w.O_NONBLOCK; else if (s) i = w.O_RDONLY | w.O_NONBLOCK;
  let o = _(e, i);
  try {
    if (s) {
      if (!D(o).isFile()) throw Object.assign(Error("EINVAL: not a regular file"), {
        code: "EINVAL"
      });
    }
    return ie(o, e, n);
  } finally {
    k(o);
  }
}

function aFs(e, {maxBytes: n}) {
  using r = vh`fs.readInheritedFdSync(fd ${e}, max ${n} bytes)`;
  let s = D(e);
  if (!s.isSocket() && !s.isFIFO()) throw new x(`refusing to read fd ${e}: not a pipe or socket`, "readInheritedFdSync: descriptor is not a pipe or socket");
  return he(e, n);
}

function xMr(e) {
  try {
    return D(e).isSocket();
  } catch {
    return !1;
  }
}

function he(e, n) {
  try {
    return ie(e, `fd ${e}`, n, {
      untilNewline: !0
    });
  } finally {
    k(e);
  }
}

function ie(e, n, r, {untilNewline: s = !1} = {}) {
  let u = [], i = 0, o = Buffer.alloc(8192);
  while (!0) {
    let f = de(e, o, 0, o.length, null);
    if (f === 0) return Buffer.concat(u).toString("utf8");
    if (i += f, i > r) throw new x(`refusing to read ${n}: content exceeds ${r} byte limit`, "readBoundedSync: content exceeds byte limit");
    let y = s ? o.subarray(0, f).indexOf(10) : -1;
    if (u.push(Buffer.from(o.subarray(0, y === -1 ? f : y + 1))), y !== -1) return Buffer.concat(u).toString("utf8");
  }
}

function lFs(e) {
  let n = se();
  return Math.floor(n.statSync(e).mtimeMs);
}

async function xE(e) {
  let n = await se().stat(e);
  return Math.floor(n.mtimeMs);
}

function LMo() {
  return Le(a.CLAUDE_CODE_PERFORCE_MODE);
}

var NXe = "File is read-only \u2014 it has not been opened for edit in Perforce. Run `p4 edit <file>` to check it out, then retry. Do not chmod the file writable; that bypasses Perforce tracking.";

function $Xe(e) {
  return LMo() && (e & 128) === 0;
}

var ge = Mg();

function Y5(e, n) {
  return ge.run(e, n);
}

function tEe(e, n) {
  if (n !== "CRLF") return e;
  return e.replaceAll(`\r\n`, `\n`).split(`\n`).join(`\r\n`);
}

async function kOe(e, n, r, s) {
  let u = tEe(n, s);
  await bA(e, u, {
    encoding: r
  });
  let i = Buffer.byteLength(u, r), o = await se().stat(e);
  if (o.size !== i) throw new x(`Write verification failed: ${e} is ${o.size} bytes on disk, expected ${i}. The filesystem may have silently truncated the write (network drive / cloud sync).`, "writeTextContent: on-disk size mismatch after write");
  return Math.floor(o.mtimeMs);
}

function dFs(e) {
  try {
    let n = se(), {resolvedPath: r} = wo(n, e);
    return GMo(r);
  } catch (n) {
    if (jt(n) || r2(n) || $y(n)) t(`detectFileEncoding failed for expected reason: ${E(n)}`, {
      level: "debug"
    }); else d(n);
    return "utf8";
  }
}

function _$(e) {
  if (!e.includes("\t")) return e;
  return e.replace(/^\t+/gm, n => "  ".repeat(n.length));
}

function we(e) {
  let n = e ? yT(e) ?? void 0 : void 0, r = n ? Bl() : null, s = n && r !== null ? z(r, n) : void 0;
  return {
    absolutePath: n,
    relativePath: s
  };
}

var PMr = "Path hidden (unsupported characters)";

function as(e) {
  if (e.includes("\0")) return PMr;
  let {relativePath: n} = we(e);
  if (n && !n.startsWith("..")) return n;
  if (ZS()) return e;
  let r = te();
  if (e.startsWith(r + P)) return "~" + e.slice(r.length);
  return e;
}

var ye = /^(\.[\p{L}\p{N}_+~#-]{1,32})?$/u;

async function TOe(e) {
  let n = se();
  try {
    let r = b(e), s = M(e, Y(e)), o = (await n.readdir(r)).filter(f => ye.test(Y(f.name).normalize("NFC")) && M(f.name, Y(f.name)) === s && N(r, f.name) !== e)[0];
    if (o) return o.name;
    return;
  } catch (r) {
    if (!W(r)) t(`findSimilarFile failed for ${e}: ${r}`, {
      level: "error"
    });
    return;
  }
}

var Rj = "Note: your current working directory is";

async function tae(e) {
  let n = le(), r = b(n), s = e;
  try {
    let L = await q(b(e));
    s = N(L, M(e));
  } catch {}
  let u = r === P ? P : r + P, o = O() === "windows" ? L => L.toLowerCase() : L => L, f = o(s);
  if (!f.startsWith(o(u)) || f.startsWith(o(n + P)) || f === o(n)) return;
  let y = z(r, s), h = N(n, y);
  try {
    return await ee(h), h;
  } catch {
    return;
  }
}

function FXe({content: e, startLine: n, tabAwareSeparator: r = !1}) {
  if (!e) return "";
  let s = r && (e.startsWith("\t") || e.includes(`\n\t`)) ? ":" : "\t", u = [], i = n, o = 0, f = e.indexOf(`\n`);
  while (f !== -1) u.push(IMr(e.slice(o, f), i++, s)), o = f + 1, f = e.indexOf(`\n`, o);
  return u.push(IMr(e.slice(o), i, s)), u.join(`\n`);
}

function IMr(e, n, r) {
  let s = e.endsWith("\r") ? e.slice(0, -1) : e;
  return `${n}${r}${s}`;
}

function Kqn(e) {
  return e.match(/^\s*\d+[\u2192\t:](.*)$/)?.[1] ?? e;
}

function U(e, n) {
  if (e instanceof Error && !(e instanceof Og) && e !== n) try {
    if (e.cause === void 0) e.message += ` (atomic write failed first: ${l(n)})`, Object.defineProperty(e, "cause", {
      value: n,
      writable: !0,
      configurable: !0,
      enumerable: !1
    });
  } catch {}
  throw e;
}

function oe(e) {
  return e === void 0 ? void 0 : e & 511 | 128;
}

function NMo(e, n, r = {
  encoding: "utf-8"
}) {
  let s = se(), u = r.allowSymlink ? 0 : w.O_NOFOLLOW, i = e, o, f = !1;
  if (r.allowSymlink) try {
    let c = s.readlinkSync(e);
    i = H(c) ? c : j(wo(s, b(e)).resolvedPath, c), t(`Writing through symlink: ${e} -> ${i}`);
  } catch {} else {
    if (r.checkParentDir) try {
      k(_(b(e), w.O_RDONLY | w.O_DIRECTORY | w.O_NOFOLLOW));
    } catch (c) {
      let S = E(c);
      if (S === "ELOOP" || S === "ENOTDIR") throw new Og(`Refusing to write into symlinked directory: ${b(e)}`);
    }
    try {
      let c = s.lstatSync(e);
      if (c.isSymbolicLink()) throw new Og(`Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`);
      o = c.mode, f = !0;
    } catch (c) {
      if (!W(c)) throw c;
    }
  }
  let y = `.tmp.${process.pid}.${J(6).toString("hex")}`, h = CMr(r.stagingDir, i, y, r.allowSymlink ?? !1), L = !1;
  if (r.allowSymlink && !f) try {
    o = s.statSync(i).mode, f = !0;
  } catch (c) {
    if (!W(c)) throw c;
  }
  if (f && o !== void 0) t(`Preserving file permissions: ${o.toString(8)}`); else if (r.mode !== void 0) o = r.mode, 
  t(`Setting permissions for new file: ${o.toString(8)}`);
  try {
    t(`Writing to temp file: ${h}`);
    let c = _(h, w.O_WRONLY | w.O_CREAT | w.O_EXCL | u, f ? oe(o) : r.mode), S = !1, v;
    try {
      if (b(h) !== b(i)) t$t(r.stagingDir);
      if (G(c, n, {
        encoding: r.encoding
      }), f && o !== void 0) try {
        ae(c, o), t("Applied original permissions to temp file");
      } catch (g) {
        if (!hje(g)) throw g;
        t(`fchmod unsupported on this filesystem: ${g}`);
      }
      try {
        X(c);
      } catch (g) {
        if (!hje(g)) throw g;
        t(`fsync unsupported on this filesystem: ${g}`);
      }
      L = !0;
    } catch (g) {
      S = !0, v = g;
    }
    try {
      k(c);
    } catch (g) {
      if (!S) throw g;
      t(`closeSync also failed after temp write error: ${g}`, {
        level: "error"
      });
    }
    if (S) throw v;
    if (t(`Temp file written successfully, size: ${n.length} bytes`), b(h) !== b(i)) t$t(r.stagingDir);
    t(`Renaming ${h} to ${i}`), kln(h, i, (g, R) => s.renameSync(g, R)), t(`File ${i} written atomically`);
  } catch (c) {
    t(`Failed to write file atomically: ${c}`, {
      level: "error"
    });
    let S = E(c);
    if (L && S !== void 0 && DC.has(S) || !L && f && S === "EACCES") {
      let {flags: R, flagsIfMissing: T} = re(u), C = !f && r.mode !== void 0 ? r.mode : void 0, F;
      try {
        try {
          F = _(i, R, C);
        } catch (p) {
          if (T === void 0 || !W(p)) throw p;
          SFs(i), F = _(i, T, C);
        }
      } catch (p) {
        try {
          s.unlinkSync(h);
        } catch (I) {
          t(`Failed to clean up temp file: ${I}`);
        }
        if (E(p) === "ELOOP") throw new Og(`Refusing to write through symlink: ${i} (O_NOFOLLOW)`);
        throw c;
      }
      try {
        let p = D(F);
        if (p.nlink > 1 && (r.refuseHardLinkedInPlace ?? Zqn())) throw new Vqn(i, p.nlink);
        if (p.isFile()) ce(F, 0);
      } catch (p) {
        try {
          k(F);
        } catch {}
        try {
          s.unlinkSync(h);
        } catch (I) {
          t(`Failed to clean up temp file: ${I}`);
        }
        U(p, c);
      }
      try {
        G(F, n, {
          encoding: r.encoding
        });
        try {
          X(F);
        } catch (p) {
          if (!hje(p)) throw p;
          t(`fsync unsupported on this filesystem: ${p}`);
        }
        k(F);
        try {
          s.unlinkSync(h);
        } catch (p) {
          t(`Failed to clean up temp file: ${p}`);
        }
        t(`File ${i} written via in-place fallback`);
        return;
      } catch (p) {
        try {
          k(F);
        } catch {}
        try {
          s.unlinkSync(i);
        } catch {}
        if (L) throw new x(`Write to ${i} failed (${E(p) ?? p}) after the target was truncated. The new content was preserved at ${h}.`, "writeFileSyncAndFlush: in-place fallback write failed; content preserved at temp path");
        U(p, c);
      }
    }
    try {
      s.unlinkSync(h);
    } catch (R) {
      t(`Failed to clean up temp file: ${R}`);
    }
    throw c;
  }
}

async function bA(e, n, r = {
  encoding: "utf-8"
}) {
  let s = se(), u = r.allowSymlink ? 0 : w.O_NOFOLLOW, i = e, o, f = !1;
  if (r.allowSymlink) try {
    let c = await fe(e);
    i = H(c) ? c : j(await q(b(e)), c), t(`Writing through symlink: ${e} -> ${i}`);
  } catch {} else {
    if (r.checkParentDir) try {
      await (await A(b(e), w.O_RDONLY | w.O_DIRECTORY | w.O_NOFOLLOW)).close();
    } catch (c) {
      let S = E(c);
      if (S === "ELOOP" || S === "ENOTDIR") throw new Og(`Refusing to write into symlinked directory: ${b(e)}`);
    }
    try {
      let c = await Q(e);
      if (c.isSymbolicLink()) throw new Og(`Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`);
      o = c.mode, f = !0;
    } catch (c) {
      if (!W(c)) throw c;
    }
  }
  let y = `.tmp.${process.pid}.${J(6).toString("hex")}`, h = CMr(r.stagingDir, i, y, r.allowSymlink ?? !1), L = !1;
  if (r.allowSymlink && !f) try {
    o = (await s.stat(i)).mode, f = !0;
  } catch (c) {
    if (!W(c)) throw c;
  }
  if (f && o !== void 0) t(`Preserving file permissions: ${o.toString(8)}`); else if (r.mode !== void 0) o = r.mode, 
  t(`Setting permissions for new file: ${o.toString(8)}`);
  try {
    t(`Writing to temp file: ${h}`);
    let c = await A(h, w.O_WRONLY | w.O_CREAT | w.O_EXCL | u, f ? oe(o) : r.mode), S = !1, v;
    try {
      if (b(h) !== b(i)) t$t(r.stagingDir);
      if (await c.writeFile(n, {
        encoding: r.encoding
      }), f && o !== void 0) try {
        await c.chmod(o), t("Applied original permissions to temp file");
      } catch (g) {
        if (!hje(g)) throw g;
        t(`fchmod unsupported on this filesystem: ${g}`);
      }
      try {
        await c.sync();
      } catch (g) {
        if (!hje(g)) throw g;
        t(`fsync unsupported on this filesystem: ${g}`);
      }
      L = !0;
    } catch (g) {
      S = !0, v = g;
    }
    try {
      await c.close();
    } catch (g) {
      if (!S) throw g;
      t(`close also failed after temp write error: ${g}`, {
        level: "error"
      });
    }
    if (S) throw v;
    if (t(`Temp file written successfully, size: ${n.length} bytes`), b(h) !== b(i)) t$t(r.stagingDir);
    t(`Renaming ${h} to ${i}`), await ls(h, i, (g, R) => s.rename(g, R)), t(`File ${i} written atomically`);
  } catch (c) {
    t(`Failed to write file atomically: ${c}`, {
      level: "error"
    });
    let S = E(c);
    if (L && S !== void 0 && DC.has(S) || !L && f && S === "EACCES") {
      let {flags: R, flagsIfMissing: T} = re(u), C = !f && r.mode !== void 0 ? r.mode : void 0, F;
      try {
        try {
          F = await A(i, R, C);
        } catch (p) {
          if (T === void 0 || !W(p)) throw p;
          await UU(i), F = await A(i, T, C);
        }
      } catch (p) {
        try {
          await s.unlink(h);
        } catch (I) {
          t(`Failed to clean up temp file: ${I}`);
        }
        if (E(p) === "ELOOP") throw new Og(`Refusing to write through symlink: ${i} (O_NOFOLLOW)`);
        throw c;
      }
      try {
        let p = await F.stat();
        if (p.nlink > 1 && (r.refuseHardLinkedInPlace ?? Zqn())) throw new Vqn(i, p.nlink);
        if (p.isFile()) await F.truncate(0);
      } catch (p) {
        await F.close().catch(() => {});
        try {
          await s.unlink(h);
        } catch (I) {
          t(`Failed to clean up temp file: ${I}`);
        }
        U(p, c);
      }
      try {
        await F.writeFile(n, {
          encoding: r.encoding
        });
        try {
          await F.sync();
        } catch (p) {
          if (!hje(p)) throw p;
          t(`fsync unsupported on this filesystem: ${p}`);
        }
        await F.close();
        try {
          await s.unlink(h);
        } catch (p) {
          t(`Failed to clean up temp file: ${p}`);
        }
        t(`File ${i} written via in-place fallback`);
        return;
      } catch (p) {
        try {
          await F.close();
        } catch {}
        try {
          await s.unlink(i);
        } catch {}
        if (L) throw new x(`Write to ${i} failed (${E(p) ?? p}) after the target was truncated. The new content was preserved at ${h}.`, "writeFileAndFlush: in-place fallback write failed; content preserved at temp path");
        U(p, c);
      }
    }
    try {
      await s.unlink(h);
    } catch (R) {
      t(`Failed to clean up temp file: ${R}`);
    }
    throw c;
  }
}

var Oe = new Set([ "Public", "Default", "Default User", "All Users" ]);

async function cFs() {
  let e = O(), n = te(), r = se();
  if (e === "macos") return N(n, "Desktop");
  if (e === "windows") {
    let u = a.USERPROFILE ? a.USERPROFILE.replaceAll("\\", "/") : null;
    if (u) {
      let o = `/mnt/c${u.replace(/^[A-Z]:/, "")}/Desktop`;
      if (await Gc(o)) return o;
    }
    try {
      let o = await r.readdir("/mnt/c/Users");
      for (let f of o) {
        if (Oe.has(f.name)) continue;
        let y = N("/mnt/c/Users", f.name, "Desktop");
        if (await Gc(y)) return y;
      }
    } catch (i) {
      t(`Failed to enumerate /mnt/c/Users for Windows desktop path: ${i}`, {
        level: "error"
      });
    }
  }
  let s = N(n, "Desktop");
  if (await Gc(s)) return s;
  return n;
}

async function qqn(e, n = DXe) {
  try {
    return (await se().stat(e)).size <= n;
  } catch {
    return !1;
  }
}

function pp(e) {
  let n = O() === "windows", r = ue(e), s = n ? /[\\/]+$/ : /\/+$/, u = r.length > me(r).root.length ? r.replace(s, "") : r;
  return n ? u.replaceAll("/", "\\").toLowerCase() : u;
}

function oL(e, n) {
  return pp(e) === pp(n);
}

export { iFs, t$t, CMr, Og, Vqn, yX, Tgt, RMr, Agt, _X, HXe, Gc, Cj, DXe, LXe, aFs, xMr, lFs, xE, LMo, NXe, $Xe, Y5, tEe, kOe, dFs, _$, PMr, as, TOe, Rj, tae, FXe, IMr, Kqn, NMo, bA, cFs, qqn, pp, oL };
