// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { pe } from "./chunk-hwdwjvh8.js";

import { E, ute, ci } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { jC } from "./chunk-ddr690nj.js";

import { a } from "./chunk-j016gcgm.js";

import { X } from "./chunk-1zg3hbfq.js";

import { Pv } from "./chunk-5brm0azz.js";

import { Z5e, e6e, uOt, E0, F7, hxe, U7, oZt, RN } from "./chunk-km6d4a9r.js";

import { p } from "./chunk-jkzenvsk.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { LGn, cMs, Gt } from "./chunk-xywp7esx.js";

import { Ak, Kan } from "./chunk-9yajep3y.js";

import { Uke, Bke, kZe } from "./chunk-8bwf6v17.js";

import { Ta } from "./chunk-pqzqmnjf.js";

import { o, T, u } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

import { Ue } from "./chunk-nvz3jsgg.js";

import { createWriteStream as _e } from "fs";

import { chmod as me, lstat as ge, mkdir as he, readdir as ye, realpath as W, rename as we, stat as U, unlink as A } from "fs/promises";

import { Readable as Y } from "stream";

import { pipeline as Ee } from "stream/promises";

import { posix as ke } from "path";

import { lstat as fe } from "fs/promises";

var G = 1048576;

async function q(e, t, n) {
  let r;
  try {
    let l = await fe(e);
    if (!l.isFile()) return {
      replaced: "not_a_file"
    };
    if (r = {
      bytes: l.size,
      ageSeconds: Math.max(0, Math.round((Date.now() - l.mtimeMs) / 1e3)),
      readOnly: (l.mode & 146) === 0
    }, l.size !== n) return {
      replaced: "different_contents",
      standing: r
    };
    if (n > G) return {
      replaced: "same_size_not_compared",
      standing: r
    };
    let [w, d] = await Promise.all([ j(e), j(t) ]);
    if (w === null || d === null) return {
      replaced: "unknown",
      standing: r
    };
    return {
      replaced: w.equals(d) ? "same_contents" : "different_contents",
      standing: r
    };
  } catch (l) {
    return E(l) === "ENOENT" ? {
      replaced: "nothing"
    } : {
      replaced: "unknown",
      standing: r
    };
  }
}

async function j(e) {
  let t = await Kan(e);
  try {
    let n = await t.stat();
    if (!n.isFile()) return null;
    let r = await Ak(t, G, n.size);
    return r.overLimit ? null : r.bytes;
  } finally {
    await t.close().catch(() => {});
  }
}

var {basename: re, dirname: M, isAbsolute: ne, join: D, normalize: Se, relative: oe, sep: ae} = ke, V = F7(), K = hxe(), Q = U7(), Fe = 67108864, se = 3e4, be = 16, C = 6e4, Re = 500, ie = "STAGE_PARENT_ESCAPE", L = new Set([ "ENAMETOOLONG", "ENOSPC", "EDQUOT", "EFBIG", "EISDIR", "ENOTDIR", "EINVAL", "ELOOP", "ENOTEMPTY", ie ]);

function H(e) {
  return e < 500 && e !== 408 && e !== 429;
}

function AKs(e) {
  return {
    ok: !0,
    ...e.noop !== void 0 && {
      noop: e.noop
    },
    ...e.replaced !== void 0 && {
      replaced: e.replaced
    }
  };
}

function B(e, t) {
  let n = oe(e, t);
  if (n === "" || n === "." || n.split(ae).includes("..") || ne(n)) return null;
  return n;
}

function le(e, t = !1) {
  if (e.includes("\0")) throw Error("mount_path contains null bytes");
  if (!ne(e)) throw Error("mount_path must be absolute");
  if (e.split(ae).includes("..")) throw Error('mount_path must not contain ".." segments');
  let n = Se(e), r = B(e6e, n);
  if (r !== null && Pv() && RN(t ? "vouched" : a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND)) {
    let d = Uke(r);
    if (d !== void 0) throw new I(d);
    return {
      dest: D(Q, r),
      root: Q,
      readOnly: !1,
      neverReplace: !0
    };
  }
  if (re(n).startsWith(E0)) throw Error("mount_path names a reserved temporary-file name");
  let l = B(Z5e, n);
  if (l !== null) return {
    dest: D(V, l),
    root: V,
    readOnly: !0,
    neverReplace: !1
  };
  let w = B(uOt, n);
  if (w !== null) {
    if (!RN(t ? "vouched" : a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND)) {
      let d = Error("staging under /outputs/ is only supported on managed remote sessions");
      throw d.code = "STAGE_OUTPUTS_UNSUPPORTED_RUNNER", d;
    }
    return {
      dest: D(K, w),
      root: K,
      readOnly: !1,
      neverReplace: !1
    };
  }
  throw Error("mount_path must be under /uploads/ or /outputs/");
}

class I extends Error {
  refusal;
  constructor(e) {
    super("mount_path names a file that may not be written to the home directory");
    this.refusal = e;
  }
}

function CKs(e) {
  let t;
  try {
    t = le(e);
  } catch (n) {
    if (E(n) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER") throw Error("add_directory mount_path must be under /uploads/");
    if (!(n instanceof I)) throw n;
  }
  if (!t?.readOnly) throw Error("add_directory mount_path must be under /uploads/ and not under /uploads/.home/");
  return t.dest;
}

function Te(e, t) {
  if (!oZt(e, t)) throw ue("dest parent escaped stage root");
}

function Oe(e, t) {
  if (jC(e) || jC(M(t))) throw ue("a folder on the way to dest has a backslash in its name");
}

function ue(e) {
  let t = Error(e);
  return t.code = ie, t;
}

function uun(e) {
  return `${E0}${at(re(e)).slice(0, 16)}.`;
}

async function iQe(e, t) {
  let n = Date.now() - 2 * C, r;
  try {
    r = await ye(e);
  } catch {
    return;
  }
  await Promise.all(r.filter(l => l.startsWith(t)).map(async l => {
    let w = D(e, l);
    try {
      if ((await U(w)).mtimeMs < n) await A(w);
    } catch {}
  }));
}

function Pe(e, t) {
  return e !== null && e.isFile() && (e.mtimeMs >= t || e.ctimeMs >= t);
}

function Z(e) {
  return typeof e === "object" && e !== null && e.code === "EROFS";
}

function x(e, t) {
  let {kind: n, status: r} = ci(t);
  return {
    kind: n,
    status: r,
    message: `${e} failed: ${n}${r ? ` ${r}` : ""}`,
    ...n === "http" && r !== void 0 && H(r) && {
      permanent: !0
    }
  };
}

async function RKs(e, t, n = "off") {
  if (t === void 0 && !a.CLAUDE_CODE_REMOTE_SESSION_ID) return {
    ok: !1,
    error: "CLAUDE_CODE_REMOTE_SESSION_ID unset",
    permanent: !0
  };
  if (t !== void 0 && e.filestore_path) return {
    ok: !1,
    error: "synced documents are not staged here"
  };
  if (e.filestore_path) {
    if (a.CLAUDE_CODE_ENVIRONMENT_KIND !== void 0) return m("ccr_synced_file_stage", "unsupported_runner_kind"), 
    i("tengu_stage_file_completed", {
      ok: !1,
      synced_unsupported_runner_kind: !0,
      duration_ms: 0
    }), {
      ok: !1,
      error: "synced-file staging not supported on this runner kind"
    };
    let {stageSyncedFile: y, SYNCED_FILE_ROOT: h} = await import("./chunk-aqk6444e.js");
    return y({
      mount_path: e.mount_path,
      filestore_path: e.filestore_path,
      content_sha256: e.content_sha256,
      expected_local_sha256: e.expected_local_sha256
    }, hBs, h);
  }
  let r;
  try {
    r = le(e.mount_path, t !== void 0);
  } catch (d) {
    if (E(d) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER") m("ccr_stage_file_outputs", "unsupported_runner_kind"), 
    i("tengu_stage_file_completed", {
      ok: !1,
      outputs_unsupported_runner_kind: !0,
      duration_ms: 0
    });
    if (d instanceof I) return P("refused_name", {
      refusal: d.refusal
    }), {
      ok: !0,
      noop: "refused_name"
    };
    return {
      ok: !1,
      error: d instanceof Error ? d.message : String(d),
      permanent: !0
    };
  }
  if (r.neverReplace && n === "off") return P("home_files_off", {}), {
    ok: !0,
    noop: "home_files_off"
  };
  if (r.neverReplace && e.resync !== void 0) return P("resent_announcement", {}), 
  {
    ok: !0,
    noop: "resent_announcement"
  };
  if (r.neverReplace && e.force !== !1) return P("unchecked_announcement", {}), {
    ok: !0,
    noop: "unchecked_announcement"
  };
  if (r.neverReplace && n === "not_loaded") return P("flag_not_loaded", {}), {
    ok: !1,
    error: "the flag for home files has not loaded"
  };
  let l = r.readOnly ? {} : {
    outputPath: r.dest
  };
  if (!e.force && !r.neverReplace) try {
    if ((await U(r.dest)).isFile()) return X("debug", "stage_file_noop_already_present", {}), 
    i("tengu_stage_file_completed", {
      ok: !0,
      noop_already_present: !0,
      duration_ms: 0
    }), {
      ok: !0,
      noop: "already_present",
      ...l
    };
  } catch {}
  let w = Date.now();
  return Ae(e.mount_path, r, w, t);
}

var ee = Ue(new Map, e => e.clear());

function Ae(e, t, n, r) {
  let l = ee.get(t.root);
  if (l === void 0) l = Ta(be, De), ee.set(t.root, l);
  return l(e, t, n, r);
}

function De(...e) {
  return e[1].neverReplace ? Ne(...e) : Me(...e);
}

async function Me(e, {dest: t, root: n, readOnly: r}, l, w) {
  let d = performance.now(), y = Math.max(0, Date.now() - l), h = () => Math.round(performance.now() - d), b = uun(t), c = D(M(t), `${b}${Date.now()}.${Math.random().toString(36).slice(2)}`);
  try {
    Oe(n, t), await he(M(t), {
      recursive: !0
    });
    let S = await W(n), O = await W(M(t));
    Te(S, O), await ge(t).catch(z => {
      if (E(z) === "ENAMETOOLONG") throw z;
    }), await iQe(M(t), b);
  } catch (S) {
    let O = typeof S === "object" && S !== null && "code" in S ? String(S.code) : "unknown";
    if (r && Z(S) && !a.CLAUDE_STAGE_FILE_ROOT) return i("tengu_stage_file_completed", {
      ok: !0,
      noop: !0,
      duration_ms: h(),
      queued_ms: y,
      bytes: 0
    }), X("debug", "stage_file_noop_readonly_mount", {
      duration_ms: h()
    }), {
      ok: !0,
      noop: "readonly_mount"
    };
    if (i("tengu_stage_file_completed", {
      ok: !1,
      duration_ms: h(),
      queued_ms: y
    }), X("warn", "stage_file_mkdir_failed", {
      code: O,
      duration_ms: h(),
      queued_ms: y
    }), !r) m("ccr_stage_file_outputs", "mkdir_failed");
    return {
      ok: !1,
      error: `mkdir failed: ${O}`,
      ...L.has(O) && {
        permanent: !0
      }
    };
  }
  let k = await v(e, c, w);
  if (!k.ok) {
    if (await A(c).catch(() => {}), r && k.errno === "EROFS" && !a.CLAUDE_STAGE_FILE_ROOT) return i("tengu_stage_file_completed", {
      ok: !0,
      noop: !0,
      duration_ms: h(),
      queued_ms: y,
      bytes: 0
    }), X("debug", "stage_file_noop_readonly_mount", {
      duration_ms: h()
    }), {
      ok: !0,
      noop: "readonly_mount"
    };
    if (i("tengu_stage_file_completed", {
      ok: !1,
      gated: k.gated,
      duration_ms: h(),
      queued_ms: y
    }), !r) m("ccr_stage_file_outputs", "fetch_failed");
    return {
      ok: !1,
      error: k.error,
      ...(k.permanent === !0 || k.gated === !0 || k.errno !== void 0 && L.has(k.errno)) && {
        permanent: !0
      }
    };
  }
  let s = k.bytes, _ = h(), {replaced: F, standing: R} = r ? await q(t, c, s) : {};
  try {
    if (!r) {
      let S = await U(t).catch(() => null);
      if (Pe(S, l)) return await A(c).catch(() => {}), i("tengu_stage_file_completed", {
        ok: !0,
        noop: !0,
        duration_ms: h(),
        queued_ms: y,
        bytes: 0,
        outputs_root: !0
      }), X("info", "stage_file_noop_newer_local", {
        duration_ms: h()
      }), g("ccr_stage_file_outputs"), {
        ok: !0,
        noop: "newer_local"
      };
    }
    await me(c, r ? 292 : 420), await we(c, t);
  } catch (S) {
    if (await A(c).catch(() => {}), r && Z(S) && !a.CLAUDE_STAGE_FILE_ROOT) return i("tengu_stage_file_completed", {
      ok: !0,
      noop: !0,
      fetch_ms: _,
      duration_ms: h(),
      queued_ms: y,
      bytes: 0
    }), X("debug", "stage_file_noop_readonly_mount", {
      duration_ms: h()
    }), {
      ok: !0,
      noop: "readonly_mount"
    };
    let O = typeof S === "object" && S !== null && "code" in S ? String(S.code) : "unknown";
    if (i("tengu_stage_file_completed", {
      ok: !1,
      fetch_ms: _,
      duration_ms: h(),
      queued_ms: y,
      bytes: s
    }), X("warn", "stage_file_write_failed", {
      code: O,
      duration_ms: h(),
      queued_ms: y
    }), !r) m("ccr_stage_file_outputs", "write_failed");
    return {
      ok: !1,
      error: `write failed: ${O}`,
      ...L.has(O) && {
        permanent: !0
      }
    };
  }
  if (i("tengu_stage_file_completed", {
    ok: !0,
    fetch_ms: _,
    duration_ms: h(),
    queued_ms: y,
    bytes: s,
    outputs_root: !r,
    replaced: pe(F)
  }), !r) g("ccr_stage_file_outputs");
  return X(F === "different_contents" ? "warn" : "info", "stage_file_ok", {
    bytes: s,
    fetch_ms: _,
    duration_ms: h(),
    queued_ms: y,
    root: r ? "uploads" : "outputs",
    ...F !== void 0 && {
      replaced: F
    },
    ...R !== void 0 && {
      replaced_bytes: R.bytes,
      replaced_mtime_age_s: R.ageSeconds,
      replaced_read_only: R.readOnly
    }
  }), {
    ok: !0,
    ...F !== void 0 && {
      replaced: F
    },
    ...r ? {} : {
      outputPath: t
    }
  };
}

function P(e, t) {
  let n = e === "flag_not_loaded" || e === "probe_failed" || e === "fetch_failed" || e === "place_failed";
  if (X(n ? "warn" : "info", "stage_file_home", {
    outcome: e,
    ...t
  }), i("tengu_stage_file_completed", {
    ok: !n,
    noop: !n && e !== "placed",
    home_root: !0,
    bytes: t.bytes ?? 0,
    duration_ms: t.duration_ms ?? 0,
    queued_ms: t.queued_ms ?? 0
  }), n) m("ccr_stage_file_home", e); else if (e === "placed" || e === "already_present") g("ccr_stage_file_home"); else f("ccr_stage_file_home", e);
}

function te(e, t, n) {
  switch (e.outcome) {
   case "placed":
    return P(e.outcome, n), {
      ok: !0,
      outputPath: t
    };

   case "already_present":
   case "path_occupied":
    return P(e.outcome, n), {
      ok: !0,
      noop: e.outcome
    };

   case "refused_name":
    return P(e.outcome, {
      refusal: e.refusal,
      ...n
    }), {
      ok: !0,
      noop: e.outcome
    };
  }
}

async function Ne(e, {dest: t, root: n}, r, l) {
  let w = performance.now(), d = Math.max(0, Date.now() - r), y = () => ({
    duration_ms: Math.round(performance.now() - w),
    queued_ms: d
  }), h = oe(n, t), b = D(n, `${uun(t)}${Date.now()}.${Math.random().toString(36).slice(2)}`);
  try {
    let c = await Bke(n, h);
    if (await iQe(n, E0), c !== void 0) return te(c, t, y());
  } catch (c) {
    let k = E(c) ?? "unknown";
    return P("probe_failed", {
      code: k,
      ...y()
    }), {
      ok: !1,
      error: `mkdir failed: ${k}`
    };
  }
  try {
    let c = await v(e, b, l);
    if (!c.ok && !c.gated && l === void 0) await A(b).catch(() => {}), await J(Re), 
    c = await v(e, b, l);
    if (!c.ok) return P("fetch_failed", {
      code: c.errno,
      ...y()
    }), {
      ok: !1,
      error: c.error
    };
    return te(await kZe(b, n, h), t, {
      bytes: c.bytes,
      ...y()
    });
  } catch (c) {
    let k = E(c) ?? "unknown";
    return P("place_failed", {
      code: k,
      ...y()
    }), {
      ok: !1,
      error: `write failed: ${k}`
    };
  } finally {
    await A(b).catch(() => {});
  }
}

var Ce = "read failed: credential expired";

function xe(e) {
  let t = !1;
  return async () => {
    if (t) return {
      ok: !1,
      error: Ce
    };
    return t = !0, de(e);
  };
}

function de(e) {
  let {filestore_jwt: t, filesystem_id: n} = e;
  if (!t || !n) return {
    ok: !1,
    error: "list returned incomplete credential",
    permanent: !0
  };
  let r = LGn(e.filestore_url);
  if (e.filestore_url && !r) X("warn", "stage_file_filestore_url_rejected", {
    reason: cMs(e.filestore_url)
  });
  return {
    ok: !0,
    cred: {
      filestoreJwt: t,
      filesystemId: n,
      filestoreUrl: r
    }
  };
}

async function ce(e) {
  let t = await Ie(e);
  return t.ok ? de(t.data) : t;
}

async function Ie(e) {
  let t = performance.now(), n = () => Math.round(performance.now() - t);
  try {
    let r = await Gt.get("/worker/files", {
      auth: "session-jwt",
      host: "ccr-session",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: se,
      signal: e
    });
    if (!r.ok) return X("warn", "stage_file_list_gated", {
      reason: r.reason,
      duration_ms: n()
    }), {
      ok: !1,
      error: `list gated: ${r.reason}`,
      gated: !0,
      permanent: !0
    };
    if (r.status < 200 || r.status >= 300) return X("warn", "stage_file_list_failed", {
      kind: "http",
      status: r.status,
      duration_ms: n()
    }), {
      ok: !1,
      error: `list failed: http ${r.status}`,
      status: r.status,
      ...H(r.status) && {
        permanent: !0
      }
    };
    let {filestore_jwt: l, filesystem_id: w, filestore_url: d} = r.data;
    return {
      ok: !0,
      data: {
        filestore_jwt: l,
        filesystem_id: w,
        filestore_url: d
      }
    };
  } catch (r) {
    let {kind: l, status: w, message: d, permanent: y} = x("list", r);
    return X("warn", "stage_file_list_failed", {
      kind: l,
      status: w,
      duration_ms: n()
    }), {
      ok: !1,
      error: d,
      status: w,
      permanent: y
    };
  }
}

async function v(e, t, n) {
  let r = performance.now(), l = () => Math.round(performance.now() - r), w = n === void 0 ? ce : xe(n), d = await w();
  if (!d.ok) return d;
  let y = d.cred;
  for (let h = 0; h <= 1; h++) {
    let b = new AbortController, c, k = () => {
      if (c) c.refresh(); else c = setTimeout(s => s.abort(Error("readFile stall: no bytes for 60s")), C, b);
    };
    k();
    try {
      let s = await Gt.post("/v1/filestore/fs/readFile", {
        filesystem_id: y.filesystemId,
        path: e
      }, {
        auth: "none",
        host: "api",
        baseUrl: y.filestoreUrl,
        headers: {
          Authorization: `Bearer ${y.filestoreJwt}`
        },
        responseType: "stream",
        timeout: 0,
        signal: b.signal,
        validateStatus: () => !0
      });
      if (!s.ok) return clearTimeout(c), X("warn", "stage_file_read_gated", {
        reason: s.reason,
        duration_ms: l()
      }), {
        ok: !1,
        error: `read gated: ${s.reason}`,
        gated: !0
      };
      if (s.status === 401 && h === 0) {
        if (clearTimeout(c), s.data instanceof Y) s.data.destroy();
        if (X("info", "stage_file_read_remint_jwt", {
          duration_ms: l()
        }), d = await w(), !d.ok) return d;
        y = d.cred;
        continue;
      }
      if (s.status < 200 || s.status >= 300) {
        if (clearTimeout(c), s.data instanceof Y) s.data.destroy();
        return X("warn", "stage_file_read_failed", {
          kind: "http",
          status: s.status,
          duration_ms: l()
        }), {
          ok: !1,
          error: `read failed: http ${s.status}`,
          ...H(s.status) && {
            permanent: !0
          }
        };
      }
      let _ = Number(s.response?.headers["content-length"] ?? -1);
      s.data.on("data", k), await Ee(s.data, _e(t, {
        flags: "wx"
      })), clearTimeout(c);
      let F = await U(t);
      if (_ >= 0 && F.size !== _) return X("warn", "stage_file_read_truncated", {
        expected: _,
        got: F.size,
        duration_ms: l()
      }), {
        ok: !1,
        error: `read truncated: got ${F.size} of ${_} bytes`
      };
      return {
        ok: !0,
        bytes: F.size
      };
    } catch (s) {
      clearTimeout(c);
      let _ = typeof s === "object" && s !== null && "code" in s ? String(s.code) : void 0;
      if (_ && !("isAxiosError" in s)) return X("warn", "stage_file_write_failed", {
        code: _,
        duration_ms: l()
      }), {
        ok: !1,
        error: `write failed: ${_}`,
        errno: _
      };
      if (b.signal.aborted) return X("warn", "stage_file_read_stalled", {
        stall_ms: C,
        duration_ms: l()
      }), {
        ok: !1,
        error: `read stalled: no bytes for ${C}ms`
      };
      let {kind: F, status: R, message: S, permanent: O} = x("read", s);
      return X("warn", "stage_file_read_failed", {
        kind: F,
        status: R,
        duration_ms: l()
      }), {
        ok: !1,
        error: S,
        permanent: O
      };
    }
  }
  throw Error("unreachable: fetchFilestoreToFile retry loop fell through");
}

var Le = 1048576;

async function Be(e) {
  let t = await ce(e);
  if (!t.ok) return t;
  let {filestoreJwt: n, filesystemId: r, filestoreUrl: l} = t.cred, w = {
    auth: "none",
    host: "api",
    baseUrl: l,
    headers: {
      Authorization: `Bearer ${n}`
    },
    timeout: se
  };
  async function d(h, {maxBytes: b, signal: c} = {}) {
    let k = performance.now(), s = () => Math.round(performance.now() - k);
    try {
      let _ = await Gt.post("/v1/filestore/fs/readFile", {
        filesystem_id: r,
        path: h
      }, {
        ...w,
        responseType: "arraybuffer",
        maxContentLength: b ?? Fe,
        signal: c
      });
      if (!_.ok) return X("warn", "stage_file_read_gated", {
        reason: _.reason,
        duration_ms: s()
      }), {
        ok: !1,
        error: `read gated: ${_.reason}`,
        gated: !0
      };
      if (_.status < 200 || _.status >= 300) return X("warn", "stage_file_read_failed", {
        kind: "http",
        status: _.status,
        duration_ms: s()
      }), {
        ok: !1,
        error: `read failed: http ${_.status}`,
        status: _.status,
        ..._.status === 404 && {
          notFound: !0
        }
      };
      return {
        ok: !0,
        buf: Buffer.from(_.data)
      };
    } catch (_) {
      let {kind: F, status: R, message: S} = x("read", _);
      return X("warn", "stage_file_read_failed", {
        kind: F,
        status: R,
        duration_ms: s()
      }), {
        ok: !1,
        error: S,
        status: R,
        ...R === 404 && {
          notFound: !0
        },
        ...ute(_) && {
          tooLarge: !0
        }
      };
    }
  }
  async function y(h, {limit: b, signal: c}) {
    let k = performance.now();
    try {
      let s = await Gt.post("/v1/filestore/fs/listDirectory", {
        filesystem_id: r,
        path: h,
        limit: b
      }, {
        ...w,
        maxContentLength: Le,
        signal: c
      });
      if (!s.ok) return N("gated", void 0, k), {
        ok: !1,
        error: `directory listing gated: ${s.reason}`,
        gated: !0
      };
      if (s.status < 200 || s.status >= 300) return N("http", s.status, k), {
        ok: !1,
        error: `directory listing failed: http ${s.status}`,
        status: s.status,
        ...s.status === 404 && {
          notFound: !0
        }
      };
      let _ = ve().safeParse(s.data);
      if (!_.success) return N("shape", s.status, k), {
        ok: !1,
        error: "directory listing failed: unexpected answer",
        status: s.status
      };
      let F = _.data.entries ?? [], R = F.slice(0, b);
      return {
        ok: !0,
        files: R.flatMap(S => S.file?.path ?? []),
        directories: R.flatMap(S => S.directory?.path ?? []),
        more: F.length > b || (_.data.cursor ?? "") !== ""
      };
    } catch (s) {
      let {kind: _, status: F, message: R} = x("directory listing", s);
      return N(_, F, k), {
        ok: !1,
        error: R,
        status: F,
        ...F === 404 && {
          notFound: !0
        }
      };
    }
  }
  return {
    ok: !0,
    reader: {
      readBytes: d,
      listDirectory: y
    }
  };
}

function N(e, t, n) {
  X(t === 404 ? "info" : "warn", "stage_file_directory_failed", {
    kind: e,
    status: t,
    duration_ms: Math.round(performance.now() - n)
  });
}

var ve = p(() => u({
  entries: T(u({
    file: u({
      path: o()
    }).optional(),
    directory: u({
      path: o()
    }).optional()
  })).optional(),
  cursor: o().optional()
}));

async function hBs(e, t = {}) {
  let n = await Be(t.signal);
  return n.ok ? n.reader.readBytes(e, t) : n;
}

export { AKs, CKs, uun, iQe, RKs, hBs };
