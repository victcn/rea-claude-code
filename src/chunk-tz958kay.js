// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { E } from "./chunk-b0z4bv3v.js";

import { z } from "./chunk-bmq0vae0.js";

import { _, se } from "./chunk-kawq2919.js";

import { hme } from "./chunk-30n0xq4e.js";

import { kv } from "./chunk-hazy64h6.js";

import { $sn } from "./chunk-s76zpwgw.js";

import { constants as s } from "fs";

import { lstat as b, mkdir as h, open as p } from "fs/promises";

import { basename as H, dirname as F, isAbsolute as L, join as D } from "path";

function f() {
  let e = kv();
  return {
    storeDir: e,
    storePath: D(e, ".credentials.json")
  };
}

var N = s.O_NONBLOCK, c = 1048576;

async function P(e) {
  try {
    return {
      kind: "open",
      fileHandle: await p(e, s.O_RDONLY | s.O_NOFOLLOW | N)
    };
  } catch (r) {
    let n = E(r);
    if (n === "ELOOP") return {
      kind: "refused-symlink"
    };
    return {
      kind: "error",
      code: n
    };
  }
}

async function B(e, r) {
  let n = s.O_WRONLY | s.O_CREAT | s.O_TRUNC;
  try {
    return {
      kind: "open",
      fileHandle: await p(e, n | s.O_NOFOLLOW, r)
    };
  } catch (t) {
    let a = E(t);
    if (a === "ELOOP") return {
      kind: "refused-symlink"
    };
    return {
      kind: "error",
      code: a
    };
  }
}

function S(e) {
  return e.length > 0 && !e.includes("\0") && L(e);
}

var v = new Set([ ".oauth_token", ".api_key", ".session_ingress_token" ]);

function m(e) {
  return e === "ENOENT" ? {
    state: "absent"
  } : {
    state: "read-failed",
    code: e
  };
}

function w(e) {
  return e === "ENOENT" ? "absent" : "read-failed";
}

function A(e, r) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return "absent";
  if ((e === "EACCES" || e === "EPERM") && r !== "win32") return "absent";
  return "read-failed";
}

async function R(e) {
  let {storePath: r} = f(), n = await P(r);
  switch (n.kind) {
   case "refused-symlink":
    return {
      state: "refused-symlink"
    };

   case "error":
    return e(n.code) === "absent" ? {
      state: "absent"
    } : {
      state: "read-failed",
      code: n.code
    };

   case "open":
    {
      let {fileHandle: t} = n, a, l, C;
      try {
        let o = await t.stat();
        if (!o.isFile()) {
          if (o.isDirectory()) return e("EISDIR") === "absent" ? {
            state: "absent"
          } : {
            state: "read-failed",
            code: "EISDIR"
          };
          return {
            state: "corrupt"
          };
        }
        if (o.size > c) return {
          state: "corrupt"
        };
        l = o.uid, C = o.mode;
        let i = Buffer.alloc(Math.min(o.size, c) + 1), d = 0;
        for (;;) {
          let {bytesRead: g} = await t.read(i, d, i.length - d, d);
          if (g === 0) break;
          if (d += g, d === i.length) {
            if (i.length > c) return {
              state: "corrupt"
            };
            let O = Buffer.alloc(c + 1);
            i.copy(O, 0, 0, d), i = O;
          }
        }
        a = i.toString("utf8", 0, d);
      } catch (o) {
        let i = E(o);
        return e(i) === "absent" ? {
          state: "absent"
        } : {
          state: "read-failed",
          code: i
        };
      } finally {
        await t.close().catch(() => {});
      }
      let u;
      try {
        u = JSON.parse(a);
      } catch {
        return {
          state: "corrupt"
        };
      }
      if (u === null) return {
        state: "absent"
      };
      return {
        state: "present",
        data: u,
        uid: l,
        mode: C
      };
    }
  }
}

var y = {
  readCredentials() {
    return R(w);
  },
  readCredentialsStrict() {
    return R(e => A(e, "linux"));
  },
  async writeCredentials(e) {
    let {storeDir: r, storePath: n} = f();
    try {
      await se().mkdir(r), await hme(n, _(e), {
        mode: 384,
        exactMode: 384
      });
    } catch (t) {
      return {
        state: "write-failed",
        code: E(t)
      };
    }
    return {
      state: "written"
    };
  },
  async deleteCredentials() {
    let {storePath: e} = f();
    return k(e);
  },
  async discardSpentCredentialFile(e) {
    return k(e);
  },
  async readHandoffCredential(e, {symlinkAtPath: r}) {
    if (!S(e)) return {
      state: "read-failed",
      code: "EINVAL"
    };
    let n;
    if (r === "follow") try {
      n = await p(e, s.O_RDONLY | N);
    } catch (t) {
      return m(E(t));
    } else {
      let t = await P(e);
      switch (t.kind) {
       case "refused-symlink":
        return {
          state: "read-failed",
          code: "ELOOP"
        };

       case "error":
        return m(t.code);

       case "open":
        n = t.fileHandle;
      }
    }
    try {
      if (!(await n.stat()).isFile()) return {
        state: "read-failed",
        code: "EINVAL"
      };
      let t = Buffer.alloc($sn + 1), a = 0;
      for (;;) {
        let {bytesRead: l} = await n.read(t, a, t.length - a, a);
        if (l === 0) break;
        if (a += l, a > $sn) return {
          state: "read-failed",
          code: "EFBIG"
        };
      }
      return {
        state: "present",
        contents: t.toString("utf8", 0, a)
      };
    } catch (t) {
      return m(E(t));
    } finally {
      await n.close().catch(() => {});
    }
  },
  async writeHandoffCredential(e, r) {
    if (!S(e)) return {
      state: "write-failed",
      code: "EINVAL"
    };
    if (!v.has(H(e))) return {
      state: "write-failed",
      code: "EINVAL"
    };
    try {
      await h(F(e), {
        recursive: !0,
        mode: 448
      });
    } catch (t) {
      return {
        state: "write-failed",
        code: E(t)
      };
    }
    let n = await B(e, 384);
    switch (n.kind) {
     case "refused-symlink":
      return {
        state: "write-failed",
        code: "ELOOP"
      };

     case "error":
      return {
        state: "write-failed",
        code: n.code
      };

     case "open":
      try {
        return await n.fileHandle.writeFile(r, {
          encoding: "utf8"
        }), {
          state: "written"
        };
      } catch (t) {
        return {
          state: "write-failed",
          code: E(t)
        };
      } finally {
        await n.fileHandle.close().catch(() => {});
      }
    }
  },
  async probeCredentials() {
    let {storePath: e} = f(), r;
    try {
      r = await b(e, {
        bigint: !0
      });
    } catch (n) {
      let t = E(n);
      return w(t) === "absent" ? {
        state: "absent"
      } : {
        state: "read-failed",
        code: t
      };
    }
    if (r.isSymbolicLink()) return {
      state: "read-failed",
      code: "ELOOP"
    };
    return {
      state: "present",
      version: `${r.dev}:${r.ino}:${r.size}:${r.mtimeNs}`
    };
  }
};

async function k(e) {
  try {
    return await se().unlink(e), {
      state: "deleted"
    };
  } catch (r) {
    let n = E(r);
    if (n === "ENOENT") return {
      state: "deleted"
    };
    return {
      state: "delete-failed",
      code: n
    };
  }
}

var I = Symbol("secureStorage.CredentialsStoreHandle");

function dk(e, r = y) {
  return z() && e !== void 0 ? T(r) : void 0;
}

function Kct(e) {
  return {
    storageV5: e,
    credentials: dk(e)
  };
}

function T(e = y) {
  return {
    ...e,
    [I]: "CredentialsStoreHandle"
  };
}

export { dk, Kct };
