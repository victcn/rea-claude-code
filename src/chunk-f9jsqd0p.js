// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { l } from "./chunk-b0z4bv3v.js";

import { t } from "./chunk-kawq2919.js";

import { Ne } from "./chunk-m8ez8fhk.js";

var Bb = {
  DELETE: 65536,
  READ_CONTROL: 131072,
  SYNCHRONIZE: 1048576,
  FILE_LIST_DIRECTORY: 1,
  FILE_READ_DATA: 1,
  FILE_WRITE_DATA: 2,
  FILE_APPEND_DATA: 4,
  FILE_READ_EA: 8,
  FILE_WRITE_EA: 16,
  FILE_TRAVERSE: 32,
  FILE_READ_ATTRIBUTES: 128,
  FILE_WRITE_ATTRIBUTES: 256
}, krr = Bb.READ_CONTROL | Bb.FILE_READ_DATA | Bb.FILE_READ_ATTRIBUTES | Bb.FILE_READ_EA | Bb.SYNCHRONIZE, rTn = Bb.READ_CONTROL | Bb.FILE_WRITE_DATA | Bb.FILE_WRITE_ATTRIBUTES | Bb.FILE_WRITE_EA | Bb.FILE_APPEND_DATA | Bb.SYNCHRONIZE, k = 7, VTe = {
  FILE_OPEN: 1,
  FILE_CREATE: 2
}, FD = {
  FILE_DIRECTORY_FILE: 1,
  FILE_WRITE_THROUGH: 2,
  FILE_SYNCHRONOUS_IO_NONALERT: 32,
  FILE_NON_DIRECTORY_FILE: 64,
  FILE_OPEN_REPARSE_POINT: 2097152
}, GI = {
  READONLY: 1,
  DIRECTORY: 16,
  NORMAL: 128,
  REPARSE_POINT: 1024
}, J = 64, j = 4096, _ = {
  FileBasicInformation: 4,
  FileRenameInformation: 10,
  FileLinkInformation: 11,
  FileNamesInformation: 12,
  FileDispositionInformation: 13,
  FileAllInformation: 18,
  FileAttributeTagInformation: 35,
  FileIdInformation: 59,
  FileDispositionInformationEx: 64,
  FileRenameInformationEx: 65
}, v = {
  FileFsVolumeInformation: 1,
  FileFsDeviceInformation: 4
}, q = 1, X = 2, z = 16, Z = 1, tt = 2, et = 64, Trr = 16, nt = 589988, rt = 589992, G = 2684354572, ot = 1, Q = 16384, S = 8, x = 12;

function Arr(o) {
  return (o & 536870912) !== 0;
}

var r = {
  SUCCESS: 0,
  BUFFER_OVERFLOW: 2147483653,
  NO_MORE_FILES: 2147483654,
  STOPPED_ON_SYMLINK: 2147483693,
  NOT_IMPLEMENTED: 3221225474,
  INVALID_INFO_CLASS: 3221225475,
  INFO_LENGTH_MISMATCH: 3221225476,
  INVALID_HANDLE: 3221225480,
  INVALID_PARAMETER: 3221225485,
  NO_SUCH_FILE: 3221225487,
  END_OF_FILE: 3221225489,
  INVALID_DEVICE_REQUEST: 3221225488,
  ACCESS_DENIED: 3221225506,
  OBJECT_NAME_INVALID: 3221225523,
  OBJECT_NAME_NOT_FOUND: 3221225524,
  OBJECT_NAME_COLLISION: 3221225525,
  OBJECT_PATH_NOT_FOUND: 3221225530,
  OBJECT_PATH_SYNTAX_BAD: 3221225531,
  SHARING_VIOLATION: 3221225539,
  FILE_LOCK_CONFLICT: 3221225556,
  DELETE_PENDING: 3221225558,
  DISK_FULL: 3221225599,
  MEDIA_WRITE_PROTECTED: 3221225634,
  FILE_IS_A_DIRECTORY: 3221225658,
  NOT_SUPPORTED: 3221225659,
  NOT_SAME_DEVICE: 3221225684,
  DIRECTORY_NOT_EMPTY: 3221225729,
  NOT_A_DIRECTORY: 3221225731,
  NAME_TOO_LONG: 3221225734,
  CANNOT_DELETE: 3221225761,
  FILE_DELETED: 3221225763,
  INVALID_LEVEL: 3221225800,
  USER_MAPPED_FILE: 3221226051,
  TOO_MANY_LINKS: 3221226085,
  REPARSE_POINT_ENCOUNTERED: 3221226763,
  BAD_NETWORK_PATH: 3221225662,
  BAD_NETWORK_NAME: 3221225676,
  PRIVILEGE_NOT_HELD: 3221225569,
  IO_REPARSE_TAG_NOT_HANDLED: 3221226105,
  NOT_A_REPARSE_POINT: 3221226101,
  IO_REPARSE_DATA_INVALID: 3221226104,
  NO_MEMORY: 3221225495,
  INSUFFICIENT_RESOURCES: 3221225626,
  DEVICE_NOT_READY: 3221225635,
  IO_TIMEOUT: 3221225653,
  TOO_MANY_OPENED_FILES: 3221225759,
  IO_DEVICE_ERROR: 3221225861
}, it = new Map([ [ r.NO_SUCH_FILE, "ENOENT" ], [ r.OBJECT_NAME_NOT_FOUND, "ENOENT" ], [ r.OBJECT_PATH_NOT_FOUND, "ENOENT" ], [ r.OBJECT_NAME_INVALID, "EINVAL" ], [ r.OBJECT_PATH_SYNTAX_BAD, "EINVAL" ], [ r.OBJECT_NAME_COLLISION, "EEXIST" ], [ r.ACCESS_DENIED, "EPERM" ], [ r.CANNOT_DELETE, "EPERM" ], [ r.DELETE_PENDING, "EPERM" ], [ r.SHARING_VIOLATION, "EBUSY" ], [ r.FILE_LOCK_CONFLICT, "EBUSY" ], [ r.USER_MAPPED_FILE, "EBUSY" ], [ r.FILE_DELETED, "ENOENT" ], [ r.TOO_MANY_LINKS, "EMLINK" ], [ r.INVALID_HANDLE, "EBADF" ], [ r.NOT_A_DIRECTORY, "ENOTDIR" ], [ r.FILE_IS_A_DIRECTORY, "EISDIR" ], [ r.DIRECTORY_NOT_EMPTY, "ENOTEMPTY" ], [ r.NOT_SAME_DEVICE, "EXDEV" ], [ r.STOPPED_ON_SYMLINK, "ELOOP" ], [ r.REPARSE_POINT_ENCOUNTERED, "ELOOP" ], [ r.IO_REPARSE_TAG_NOT_HANDLED, "ELOOP" ], [ r.NOT_A_REPARSE_POINT, "EINVAL" ], [ r.IO_REPARSE_DATA_INVALID, "EINVAL" ], [ r.BAD_NETWORK_PATH, "ENOENT" ], [ r.BAD_NETWORK_NAME, "ENOENT" ], [ r.PRIVILEGE_NOT_HELD, "EPERM" ], [ r.DISK_FULL, "ENOSPC" ], [ r.MEDIA_WRITE_PROTECTED, "EROFS" ], [ r.NAME_TOO_LONG, "ENAMETOOLONG" ], [ r.NOT_SUPPORTED, "ENOTSUP" ], [ r.NOT_IMPLEMENTED, "ENOTSUP" ], [ r.INVALID_DEVICE_REQUEST, "ENOTSUP" ], [ r.INVALID_INFO_CLASS, "ENOTSUP" ], [ r.INVALID_LEVEL, "ENOTSUP" ], [ r.INVALID_PARAMETER, "EINVAL" ], [ r.INFO_LENGTH_MISMATCH, "EINVAL" ], [ r.NO_MEMORY, "ENOMEM" ], [ r.INSUFFICIENT_RESOURCES, "ENOMEM" ], [ r.TOO_MANY_OPENED_FILES, "EMFILE" ], [ r.IO_DEVICE_ERROR, "EIO" ], [ r.DEVICE_NOT_READY, "EAGAIN" ], [ r.IO_TIMEOUT, "ETIMEDOUT" ] ]);

function h(o, s) {
  let E = s >>> 0;
  return Object.assign(Error("Windows file-system call failed"), {
    code: it.get(E) ?? "EUNKNOWN",
    syscall: o,
    status: E
  });
}

function BDe(o) {
  return typeof o === "object" && o !== null && "status" in o && typeof o.status === "number" ? o.status : void 0;
}

function y(o) {
  let s = BDe(o);
  return s === r.NOT_IMPLEMENTED || s === r.INVALID_INFO_CLASS || s === r.INVALID_PARAMETER || s === r.NOT_SUPPORTED || s === r.INVALID_DEVICE_REQUEST || s === r.INVALID_LEVEL;
}

function Et(o, s) {
  let E = Buffer.from(o + "\0", "utf16le"), N = E.length - 2;
  if (N > 65532) throw Object.assign(Error("name too long for Windows (over 32,766 characters)"), {
    code: "ENAMETOOLONG"
  });
  let a = Buffer.alloc(16);
  return a.writeUInt16LE(N, 0), a.writeUInt16LE(N + 2, 2), a.writeBigUInt64LE(BigInt(s(E)), 8), 
  {
    struct: a,
    keep: [ E ]
  };
}

function W(o, s, E, N = !1) {
  let a = Et(s, E), f = Buffer.alloc(48);
  return f.writeUInt32LE(48, 0), f.writeBigUInt64LE(BigInt(o), 8), f.writeBigUInt64LE(BigInt(E(a.struct)), 16), 
  f.writeUInt32LE(J | (N ? j : 0), 24), {
    struct: f,
    keep: [ a.struct, ...a.keep ]
  };
}

function P(o, s, E) {
  let N = Buffer.from(E, "utf16le"), a = Buffer.alloc(Math.max(24, 20 + N.length));
  return a.writeUInt32LE(o, 0), a.writeBigUInt64LE(BigInt(s), 8), a.writeUInt32LE(N.length, 16), 
  N.copy(a, 20), a;
}

function PKt(o) {
  let s = o.startsWith("\\\\?\\UNC\\") ? "\\\\" + o.slice(8) : o.startsWith("\\\\?\\") ? o.slice(4) : o, E = !s.includes("/") && !/(^|\\)\.\.?(\\|$)/.test(s);
  if (E && /^[a-zA-Z]:\\/.test(s)) return "\\??\\" + s;
  if (E && /^\\\\[^\\?.][^\\]*\\[^\\]+/.test(s)) return "\\??\\UNC\\" + s.slice(2);
  throw Object.assign(Error("not an absolute Windows drive or network-share path"), {
    code: "EINVAL"
  });
}

function Crr(o) {
  let s = Buffer.from(PKt(o), "utf16le"), E = Buffer.from(K(PKt(o)), "utf16le"), N = x + s.length + E.length;
  if (S + N > Q) throw Object.assign(Error("symbolic link target too long for a reparse point"), {
    code: "ENAMETOOLONG"
  });
  let a = Buffer.alloc(S + N);
  return a.writeUInt32LE(G, 0), a.writeUInt16LE(N, 4), a.writeUInt16LE(0, 8), a.writeUInt16LE(s.length, 10), 
  a.writeUInt16LE(s.length, 12), a.writeUInt16LE(E.length, 14), a.writeUInt32LE(0, 16), 
  s.copy(a, S + x), E.copy(a, S + x + s.length), a;
}

function lt(o) {
  let s = () => Object.assign(Error("not a symbolic link reparse point"), {
    code: "EINVAL"
  }), E = S + x;
  if (o.length < E || o.readUInt32LE(0) !== G) throw s();
  let N = E + o.readUInt16LE(8), a = N + o.readUInt16LE(10);
  if (a > o.length || a > S + o.readUInt16LE(4)) throw s();
  let f = o.toString("utf16le", N, a);
  return (o.readUInt32LE(16) & ot) !== 0 ? f : K(f);
}

function K(o) {
  if (/^\\\?\?\\UNC\\/i.test(o)) return "\\\\" + o.slice(8);
  return /^\\\?\?\\[A-Za-z]:/.test(o) ? o.slice(4) : o;
}

var L;

function DYs() {
  if (L !== void 0) return L;
  return L = null, L;
}

function at() {
  let o = Ne("bun:ffi"), E = o.dlopen("ntdll.dll", {
    NtCreateFile: {
      args: [ "ptr", "u32", "ptr", "ptr", "ptr", "u32", "u32", "u32", "u32", "ptr", "u32" ],
      returns: "i32"
    },
    NtClose: {
      args: [ "u64" ],
      returns: "i32"
    },
    NtWriteFile: {
      args: [ "u64", "ptr", "ptr", "ptr", "ptr", "ptr", "u32", "ptr", "ptr" ],
      returns: "i32"
    },
    NtReadFile: {
      args: [ "u64", "ptr", "ptr", "ptr", "ptr", "ptr", "u32", "ptr", "ptr" ],
      returns: "i32"
    },
    NtQueryInformationFile: {
      args: [ "u64", "ptr", "ptr", "u32", "u32" ],
      returns: "i32"
    },
    NtSetInformationFile: {
      args: [ "u64", "ptr", "ptr", "u32", "u32" ],
      returns: "i32"
    },
    NtQueryVolumeInformationFile: {
      args: [ "u64", "ptr", "ptr", "u32", "u32" ],
      returns: "i32"
    },
    NtQueryDirectoryFile: {
      args: [ "u64", "ptr", "ptr", "ptr", "ptr", "ptr", "u32", "u32", "u8", "ptr", "u8" ],
      returns: "i32"
    },
    NtFsControlFile: {
      args: [ "u64", "ptr", "ptr", "ptr", "ptr", "u32", "ptr", "u32", "ptr", "u32" ],
      returns: "i32"
    }
  }).symbols, N = n => o.ptr(n), a = 0, f = (n, e) => {
    if (e >>> 0 !== r.SUCCESS) throw h(n, e);
  }, M = (n, e) => {
    if (e >>> 0 !== r.BUFFER_OVERFLOW) f(n, e);
  }, O = () => Buffer.alloc(16), H = (n, e) => {
    t(`anchor (win32): ${n} failed (status 0x${((BDe(e) ?? 0) >>> 0).toString(16)}); trying the older class`);
  }, g = n => n !== "" && n !== "." && n !== ".." && !/[\\/:]/.test(n), C = () => Object.assign(Error("directory-relative names must be a plain file name: not '.', '..', and no separator or ':'"), {
    code: "EINVAL"
  }), T = (n, e, i, I) => {
    let u = O();
    f(n, E.NtSetInformationFile(e, u, i, i.length, I));
  }, b = (n, e, i, I) => {
    let u = O(), c = Buffer.alloc(i);
    return M(n, E.NtQueryInformationFile(e, u, c, i, I)), c;
  }, w = n => {
    let e = Buffer.alloc(4);
    e.writeUInt8(1, 0), T("NtSetInformationFile(FileDispositionInformation)", n, e, _.FileDispositionInformation);
  };
  return {
    open: (n, e, {access: i, disposition: I, options: u, attributes: c = 0, share: F = k, dontReparse: m = !1}) => {
      if (n !== 0 && !g(e)) throw C();
      let d = Buffer.alloc(8), D = W(n, e, N, m), p = O(), B = E.NtCreateFile(d, i | Bb.SYNCHRONIZE, D.struct, p, null, c, F, I, u | FD.FILE_SYNCHRONOUS_IO_NONALERT, null, 0);
      D.keep;
      let A = Number(d.readBigUInt64LE(0));
      if (B >>> 0 !== r.SUCCESS) {
        if (A !== 0) E.NtClose(A);
        throw h("NtCreateFile", B);
      }
      return a++, A;
    },
    close: n => {
      f("NtClose", E.NtClose(n)), a = Math.max(0, a - 1);
    },
    write: (n, e, i) => {
      if (e.length === 0) return;
      let I = O(), u = Buffer.alloc(8);
      if (u.writeBigInt64LE(i, 0), f("NtWriteFile", E.NtWriteFile(n, null, null, null, I, e, e.length, u, null)), 
      I.readBigUInt64LE(8) !== BigInt(e.length)) throw Object.assign(Error("NtWriteFile wrote fewer bytes than requested"), {
        code: "EIO",
        syscall: "NtWriteFile"
      });
    },
    read: (n, e, i) => {
      let I = O(), u = Buffer.alloc(8);
      u.writeBigInt64LE(i, 0);
      let c = E.NtReadFile(n, null, null, null, I, e, e.length, u, null);
      if (c >>> 0 === r.END_OF_FILE) return 0;
      return f("NtReadFile", c), Number(I.readBigUInt64LE(8));
    },
    queryInformation: n => {
      let e = b("NtQueryInformationFile(FileAllInformation)", n, 624, _.FileAllInformation);
      return {
        creationTime: e.readBigInt64LE(0),
        lastAccessTime: e.readBigInt64LE(8),
        lastWriteTime: e.readBigInt64LE(16),
        changeTime: e.readBigInt64LE(24),
        attributes: e.readUInt32LE(32),
        allocationSize: e.readBigInt64LE(40),
        size: e.readBigInt64LE(48),
        numberOfLinks: e.readUInt32LE(56),
        deletePending: e.readUInt8(60) !== 0,
        directory: e.readUInt8(61) !== 0,
        indexNumber: e.readBigUInt64LE(64)
      };
    },
    queryAttributes: n => b("NtQueryInformationFile(FileBasicInformation)", n, 40, _.FileBasicInformation).readUInt32LE(32),
    queryAttributeTag: n => {
      let e = b("NtQueryInformationFile(FileAttributeTagInformation)", n, 8, _.FileAttributeTagInformation);
      return {
        attributes: e.readUInt32LE(0),
        reparseTag: e.readUInt32LE(4)
      };
    },
    queryId: n => {
      try {
        let e = b("NtQueryInformationFile(FileIdInformation)", n, 24, _.FileIdInformation);
        return {
          volumeSerialNumber: e.readBigUInt64LE(0),
          fileId: e.readBigUInt64LE(8) | e.readBigUInt64LE(16) << 64n
        };
      } catch (e) {
        if (y(e)) return null;
        throw e;
      }
    },
    queryVolume: n => {
      let e = Buffer.alloc(530), i = O();
      return M("NtQueryVolumeInformationFile(FileFsVolumeInformation)", E.NtQueryVolumeInformationFile(n, i, e, e.length, v.FileFsVolumeInformation)), 
      {
        serialNumber: e.readUInt32LE(8)
      };
    },
    queryDevice: n => {
      let e = Buffer.alloc(8), i = O();
      return f("NtQueryVolumeInformationFile(FileFsDeviceInformation)", E.NtQueryVolumeInformationFile(n, i, e, e.length, v.FileFsDeviceInformation)), 
      {
        characteristics: e.readUInt32LE(4)
      };
    },
    deleteByHandle: n => {
      let e = Buffer.alloc(4);
      e.writeUInt32LE(q | X | z, 0);
      try {
        T("NtSetInformationFile(FileDispositionInformationEx)", n, e, _.FileDispositionInformationEx);
        return;
      } catch (i) {
        if (!y(i) && BDe(i) !== r.CANNOT_DELETE) throw i;
        H("FileDispositionInformationEx", i);
      }
      try {
        w(n);
      } catch (i) {
        if (BDe(i) !== r.CANNOT_DELETE) throw i;
        let I = b("NtQueryInformationFile(FileBasicInformation)", n, 40, _.FileBasicInformation).readUInt32LE(32);
        if ((I & GI.READONLY) === 0) throw i;
        let u = Buffer.alloc(40);
        u.writeUInt32LE((I & ~GI.READONLY) === 0 ? GI.NORMAL : I & ~GI.READONLY, 32), T("NtSetInformationFile(FileBasicInformation)", n, u, _.FileBasicInformation);
        try {
          w(n);
        } catch (c) {
          u.writeUInt32LE(I, 32);
          try {
            T("NtSetInformationFile(FileBasicInformation)", n, u, _.FileBasicInformation);
          } catch {}
          throw c;
        }
      }
    },
    renameByHandle: (n, e, i, I) => {
      if (!g(i)) throw C();
      let u = (I ? Z : 0) | tt | et;
      try {
        T("NtSetInformationFile(FileRenameInformationEx)", n, P(u, e, i), _.FileRenameInformationEx);
        return;
      } catch (c) {
        if (!y(c)) throw c;
        H("FileRenameInformationEx", c);
      }
      T("NtSetInformationFile(FileRenameInformation)", n, P(I ? 1 : 0, e, i), _.FileRenameInformation);
    },
    linkByHandle: (n, e, i) => {
      if (!g(i)) throw C();
      T("NtSetInformationFile(FileLinkInformation)", n, P(0, e, i), _.FileLinkInformation);
    },
    setAttributes: (n, e) => {
      let i = Buffer.alloc(40);
      i.writeUInt32LE(e, 32), T("NtSetInformationFile(FileBasicInformation)", n, i, _.FileBasicInformation);
    },
    setTimes: (n, e, i) => {
      let I = Buffer.alloc(40);
      I.writeBigInt64LE(e, 8), I.writeBigInt64LE(i, 16), I.writeBigInt64LE(-1n, 24), T("NtSetInformationFile(FileBasicInformation)", n, I, _.FileBasicInformation);
    },
    setSymlink: (n, e) => {
      let i = Crr(e);
      f("NtFsControlFile(FSCTL_SET_REPARSE_POINT)", E.NtFsControlFile(n, null, null, null, O(), nt, i, i.length, null, 0));
    },
    readSymlink: n => {
      let e = O(), i = Buffer.alloc(Q);
      return f("NtFsControlFile(FSCTL_GET_REPARSE_POINT)", E.NtFsControlFile(n, null, null, null, e, rt, null, 0, i, i.length)), 
      lt(i.subarray(0, Number(e.readBigUInt64LE(8))));
    },
    listDirectory: (n, e) => {
      let i = Buffer.alloc(8), I = W(n, "", N), u = E.NtCreateFile(i, Bb.FILE_LIST_DIRECTORY | Bb.SYNCHRONIZE, I.struct, O(), null, 0, k, VTe.FILE_OPEN, FD.FILE_DIRECTORY_FILE | FD.FILE_OPEN_REPARSE_POINT | FD.FILE_SYNCHRONOUS_IO_NONALERT, null, 0);
      I.keep;
      let c = Number(i.readBigUInt64LE(0));
      if (u >>> 0 !== r.SUCCESS) {
        if (c !== 0) E.NtClose(c);
        throw h("NtCreateFile", u);
      }
      a++;
      try {
        let F = [], m = Buffer.alloc(65536);
        for (let d = 1; ;d = 0) {
          let D = O(), p = E.NtQueryDirectoryFile(c, null, null, null, D, m, m.length, _.FileNamesInformation, 0, null, d);
          if (p >>> 0 === r.NO_MORE_FILES || d === 1 && p >>> 0 === r.NO_SUCH_FILE) return F;
          f("NtQueryDirectoryFile", p);
          let B = Number(D.readBigUInt64LE(8)), A = () => Object.assign(Error("malformed directory listing"), {
            code: "EIO",
            syscall: "NtQueryDirectoryFile"
          });
          for (let R = 0; ;) {
            if (R + 12 > B) throw A();
            let V = m.readUInt32LE(R), Y = R + 12 + m.readUInt32LE(R + 8);
            if (Y > B) throw A();
            let U = m.toString("utf16le", R + 12, Y);
            if (U !== "." && U !== "..") F.push(U);
            if (e !== void 0 && !(F.length <= e)) return F;
            if (V === 0) break;
            R += V;
          }
        }
      } finally {
        E.NtClose(c), a = Math.max(0, a - 1);
      }
    },
    openHandleCount: () => a
  };
}

export { Bb, krr, rTn, VTe, FD, GI, Trr, Arr, BDe, PKt, Crr, DYs };
