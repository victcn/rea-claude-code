// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { E, W, ci } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { jC } from "./chunk-ddr690nj.js";

import { UU } from "./chunk-30n0xq4e.js";

import { a } from "./chunk-j016gcgm.js";

import { X } from "./chunk-1zg3hbfq.js";

import { p } from "./chunk-jkzenvsk.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { h7, HYe } from "./chunk-sqb9meyh.js";

import { ztt } from "./chunk-xtx5f5eb.js";

import { Gt } from "./chunk-xywp7esx.js";

import { o, u } from "./chunk-cvcg6n1z.js";

import { at } from "./chunk-0bq6eb61.js";

import { Mg } from "./chunk-j7qcpyv8.js";

import { constants as F } from "fs";

import { link as me, lstat as ae, mkdir as V, open as D, readdir as ke, realpath as I, rename as Se, unlink as Y, writeFile as we } from "fs/promises";

import { posix as Ee } from "path";

var vrr = 384;

var {basename: oe, dirname: C, isAbsolute: Q, join: x, normalize: Re, relative: L, sep: z} = Ee, AKt = "/mnt/user-data/working", lVe = "/working", nTn = `${lVe}/${h7} is reserved`, bW = 26214400, ce = 4096, be = 4, le = 3e4, ie = 5e3, Fe = 12e4, ve = 5, Te = 2e3, Oe = 3, Ne = 6e5, xe = ce;

class de {
  seenState=new Map;
  evictedEtag=new Map;
  lastSeenMtime=new Map;
  terminalRejects=new Map;
  inFlight=Mg();
  retryableTransportFailures=0;
  sessionTerminalRejects=0;
  syncer=null;
  lateStartRoot=null;
  startInFlight=null;
  recordSeen(e, t, r) {
    this.seenState.set(e, {
      etag: t,
      localHash: r
    }), this.evictedEtag.delete(e);
  }
  forgetSeen(e) {
    this.seenState.delete(e), this.evictedEtag.delete(e);
  }
  recordEvictedEtag(e, t) {
    if (t === void 0) return;
    if (this.evictedEtag.delete(e), this.evictedEtag.set(e, t), this.evictedEtag.size > xe) {
      let r = this.evictedEtag.keys().next().value;
      if (r !== void 0) this.evictedEtag.delete(r);
    }
  }
  evictDeleted(e) {
    this.recordEvictedEtag(e, this.seenState.get(e)?.etag), this.seenState.delete(e);
  }
  recordSettledMtime(e, t) {
    this.lastSeenMtime.set(e, t);
  }
  reopenMtimeGate(e) {
    this.lastSeenMtime.delete(e);
  }
  recordTerminalReject(e) {
    let t = this.terminalRejects.get(e) ?? {
      consecutive: 0,
      latchedUntilMs: 0,
      suppressed: 0
    };
    if (t.consecutive++, this.terminalRejects.set(e, t), t.consecutive >= Oe) t.latchedUntilMs = Date.now() + Ne, 
    m("ccr_synced_file_push", "push_parked_terminal", {
      consecutive_rejects: t.consecutive,
      suppressed_pushes: t.suppressed
    }), t.suppressed = 0, X("warn", "working_push_parked", {
      consecutive: t.consecutive
    });
  }
  resetTerminalRejectStreak(e) {
    let t = this.terminalRejects.get(e);
    if (t === void 0) return;
    if (t.suppressed === 0) {
      this.terminalRejects.delete(e);
      return;
    }
    t.consecutive = 0, t.latchedUntilMs = 0;
  }
  forgetTerminalReject(e) {
    this.terminalRejects.delete(e);
  }
  get transportFailureSeq() {
    return this.retryableTransportFailures;
  }
  get sessionTerminalRejectSeq() {
    return this.sessionTerminalRejects;
  }
  noteRetryableTransportFailure() {
    this.retryableTransportFailures++;
  }
  noteSessionTerminalReject() {
    this.sessionTerminalRejects++;
  }
  get activeSyncer() {
    return this.syncer;
  }
  syncerStarted(e) {
    this.syncer = e;
  }
  syncerStopped(e) {
    if (this.syncer === e) this.syncer = null;
  }
  armLateStart(e) {
    this.lateStartRoot = e;
  }
  async flush() {
    if (this.syncer === null) {
      if (this.lateStartRoot !== null && this.startInFlight === null) {
        let e = mjs(this.lateStartRoot);
        this.startInFlight = e, e.finally(() => {
          if (this.startInFlight === e) this.startInFlight = null;
        }).catch(() => {});
      }
      await (this.startInFlight?.catch(() => {}));
    }
    await (this.syncer?.flush());
  }
  reset() {
    this.seenState.clear(), this.lastSeenMtime.clear(), this.evictedEtag.clear(), this.terminalRejects.clear(), 
    this.lateStartRoot = null, this.startInFlight = null;
  }
}

var Pe = new K(() => new de);

function O() {
  return Pe.of(B().host);
}

function M(e, t, r) {
  O().recordSeen(e, t, r);
}

function Z(e) {
  return O().seenState.get(e);
}

function ee(e, t) {
  return O().inFlight.run(e, t);
}

function Err(e, t) {
  if (!Q(e)) throw Error("syncDir must be absolute");
  if (t.includes("\0")) throw Error("path contains null bytes");
  if (!Q(t)) throw Error("path must be absolute");
  let r = L(e, Re(t));
  if (r === "" || r === "." || G(r)) throw Error("path must be under the working sync dir");
  return r;
}

function G(e) {
  return Q(e) || e.split(z).includes("..");
}

function Ule(e) {
  for (let t of e.split(z)) if (t.startsWith(".") || t.endsWith("~") || t.endsWith(".swp") || t.endsWith(".tmp")) return !0;
  return !1;
}

var B6r = "synced_file_lane_denied", Me = p(() => u({
  error: u({
    reason: o().optional(),
    resource: o().optional()
  })
})), Ie = p(() => u({
  error: u({
    type: o().optional(),
    resource_type: o().optional()
  })
}));

function Le(e, t) {
  if (e === "timeout" || e === "network") return !0;
  if (e === "auth" || e === "other") return !1;
  if (t === void 0) return !0;
  return t === 408 || t === 429 || t >= 500;
}

function ue(e, t) {
  let r = O(), {kind: l, status: s} = ci(t), d = Le(l, s);
  if (d) r.noteRetryableTransportFailure(); else if (l === "auth") r.noteSessionTerminalReject();
  let h = s === 400 || s === 403 ? je(t) : void 0, c = s === 400 ? h?.reason : void 0, _ = s === 403 ? h?.resource : void 0;
  return {
    kind: "error",
    message: `${e} failed: ${l}${s ? ` ${s}` : ""}`,
    retryable: d,
    errorKind: l,
    status: s,
    ...c !== void 0 && {
      laneReason: c
    },
    ..._ !== void 0 && {
      refusedResource: _
    }
  };
}

function je(e) {
  let t = e?.response?.data;
  return Me().safeParse(t).data?.error;
}

function Ae(e) {
  if (e.errorKind === "gated") return `put_gated_${(e.gateReason ?? "unknown").replaceAll("-", "_")}`;
  return e.status !== void 0 ? `put_rejected_${e.status}` : `put_rejected_${e.errorKind}`;
}

async function Yvt(e, t, r) {
  let l = O();
  try {
    let s = await Gt.put("/worker/synced_file", {
      path: `${lVe}/${e}`,
      content: t.toString("base64"),
      ...r && {
        if_match_sha256: r
      },
      worker_epoch: a.CLAUDE_CODE_WORKER_EPOCH ?? 0
    }, {
      auth: "session-jwt",
      host: "ccr-session",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: le,
      validateStatus: d => d >= 200 && d < 300 || d === 409,
      maxBodyLength: Math.ceil(bW * 4 / 3) + 1024
    });
    if (!s.ok) return l.noteSessionTerminalReject(), {
      kind: "error",
      message: `put gated: ${s.reason}`,
      retryable: !1,
      errorKind: "gated",
      status: void 0,
      gateReason: s.reason
    };
    if (s.status === 409) return {
      kind: "conflict"
    };
    return {
      kind: "ok",
      content_sha256: s.data.content_sha256
    };
  } catch (s) {
    return ue("put", s);
  }
}

async function GTe(e) {
  let t = O();
  try {
    let r = await Gt.get(`/worker/synced_file?path=${encodeURIComponent(`${lVe}/${e}`)}`, {
      auth: "session-jwt",
      host: "ccr-session",
      headers: {
        "anthropic-version": "2023-06-01"
      },
      timeout: le,
      maxContentLength: Math.ceil(bW * 4 / 3) + 1024,
      validateStatus: l => l >= 200 && l < 300 || l === 404
    });
    if (!r.ok) return t.noteSessionTerminalReject(), {
      kind: "error",
      message: `get gated: ${r.reason}`,
      retryable: !1,
      errorKind: "gated",
      status: void 0,
      gateReason: r.reason
    };
    if (r.status === 404) {
      let l = Ie().safeParse(r.data);
      return {
        kind: "not_found",
        ...l.success && {
          body: l.data.error
        }
      };
    }
    return {
      kind: "ok",
      buf: Buffer.from(r.data.content, "base64"),
      content_sha256: r.data.content_sha256
    };
  } catch (r) {
    return ue("get", r);
  }
}

async function te(e, t, r) {
  fe(e, t);
  let l = await I(e), s = await I(C(t)), d = L(l, s);
  if (G(d)) {
    let c = Error("dest parent escaped working sync dir");
    throw c.code = "WORKING_PARENT_ESCAPE", c;
  }
  let h = d === "" ? oe(t) : x(d, oe(t));
  if (Ule(h)) {
    let c = Error("dest resolves into an ignored path");
    throw c.code = "WORKING_DEST_IGNORED", c;
  }
  if (r?.(h)) {
    let c = Error("dest resolves onto a path the caller refuses");
    throw c.code = "WORKING_DEST_REFUSED", c;
  }
  try {
    if ((await ae(t)).isSymbolicLink()) {
      let _ = Error("dest is a symlink");
      throw _.code = "WORKING_DEST_SYMLINK", _;
    }
  } catch (c) {
    if (!W(c)) throw c;
  }
}

function fe(e, t) {
  if (jC(e) || jC(C(t))) {
    let r = Error("a folder on the way to dest has a backslash in its name");
    throw r.code = "WORKING_PATH_MISREAD", r;
  }
}

async function Xvt(e, t, r, l = "replace", s) {
  fe(e, t), await V(e).catch(_ => {
    if (E(_) !== "EEXIST") throw _;
  });
  let d = await I(e), h = C(t);
  for (;;) try {
    let _ = await I(h), y = L(d, _);
    if (G(y)) {
      let k = Error("dest ancestor escaped working sync dir");
      throw k.code = "WORKING_PARENT_ESCAPE", k;
    }
    if (Ule(y)) {
      let k = Error("dest ancestor resolves into an ignored path");
      throw k.code = "WORKING_DEST_IGNORED", k;
    }
    if (s?.(x(y, L(h, t))) === !0) {
      let k = Error("dest resolves onto a path the caller refuses");
      throw k.code = "WORKING_DEST_REFUSED", k;
    }
    break;
  } catch (_) {
    if (!W(_)) throw _;
    let y = C(h);
    if (y === h) break;
    h = y;
  }
  await V(C(t), {
    recursive: !0
  }), await te(e, t, s);
  let c = `${t}.${process.hrtime.bigint().toString(36)}.tmp`;
  try {
    await UU(c);
  } catch (_) {
    throw se(_), _;
  }
  try {
    await we(c, r, {
      mode: vrr,
      flag: "wx"
    });
  } catch (_) {
    throw se(_), await Y(c).catch(() => {}), _;
  }
  try {
    if (l === "create_only") await me(c, t), await Y(c); else await Se(c, t);
  } catch (_) {
    throw await Y(c).catch(() => {}), _;
  }
}

function se(e) {
  if (E(e) !== "EEXIST") return;
  let t = Error("sibling tempfile name already taken", {
    cause: e
  });
  throw t.code = "WORKING_TMP_TAKEN", t;
}

async function MYs(e, t, r) {
  let l;
  try {
    l = Err(r, e.mount_path);
  } catch (d) {
    return m("ccr_synced_file_stage", "bad_mount_path"), {
      ok: !1,
      error: d instanceof Error ? d.message : String(d)
    };
  }
  if (HYe(l)) return ztt.emit(l, "stored"), {
    ok: !0,
    noop: "dir_sync_lane_row"
  };
  if (Ule(l)) return m("ccr_synced_file_stage", "ignored_path"), {
    ok: !1,
    error: "mount_path is an ignored path"
  };
  let s = x(r, l);
  return ee(l, async () => {
    let d, h;
    try {
      try {
        await te(r, s);
      } catch (n) {
        if (!W(n)) return m("ccr_synced_file_stage", E(n) === "WORKING_PATH_MISREAD" ? "backslash_in_path" : "containment_failed"), 
        {
          ok: !1,
          error: `mount_path failed containment: ${E(n) ?? "unknown"}`
        };
      }
      let c = null;
      try {
        let n = await D(s, F.O_RDONLY | F.O_NOFOLLOW | F.O_NONBLOCK);
        try {
          let i = await n.stat();
          if (i.isFile()) {
            if (i.size > bW) return m("ccr_synced_file_stage", "too_large"), {
              ok: !1,
              error: "local file too large to reconcile"
            };
            c = await n.readFile();
          }
        } finally {
          await n.close();
        }
      } catch (n) {
        let i = E(n);
        if (i !== "ENOENT" && i !== "ELOOP" && i !== "EMLINK") throw n;
      }
      let _ = c ? at(c) : void 0, y = Z(s);
      if (_ && y && y.localHash === _ && e.content_sha256 !== void 0 && y.etag === e.content_sha256) return g("ccr_synced_file_stage"), 
      {
        ok: !0,
        noop: "already_present"
      };
      let k = e.expected_local_sha256 || void 0, v = y && y.localHash === _ && (k === void 0 || y.etag === k);
      if (c && !v) {
        let n = await Yvt(l, c, k);
        if (n.kind === "error") return m("ccr_synced_file_stage", "push_failed"), {
          ok: !1,
          error: n.message
        };
        let i = await GTe(l);
        if (i.kind !== "ok") return m("ccr_synced_file_stage", "reget_failed"), {
          ok: !1,
          error: i.kind === "error" ? i.message : "get not_found after put"
        };
        d = i.buf, h = i.content_sha256, X("info", "working_stage_reconciled", {
          conflict: n.kind === "conflict"
        });
      } else {
        let n = await t(e.filestore_path);
        if (!n.ok) return m("ccr_synced_file_stage", "fetch_failed"), {
          ok: !1,
          error: n.error
        };
        if (n.buf.length > bW) return m("ccr_synced_file_stage", "too_large"), {
          ok: !1,
          error: "staged content too large"
        };
        d = n.buf, h = e.content_sha256;
      }
      let S = null;
      try {
        let n = await D(s, F.O_RDONLY | F.O_NOFOLLOW | F.O_NONBLOCK);
        try {
          let i = await n.stat();
          if (i.isFile()) {
            if (i.size > bW) return m("ccr_synced_file_stage", "too_large"), {
              ok: !1,
              error: "local file too large to reconcile"
            };
            S = await n.readFile();
          }
        } finally {
          await n.close();
        }
      } catch (n) {
        let i = E(n);
        if (i !== "ENOENT" && i !== "ELOOP" && i !== "EMLINK") throw n;
      }
      if (S && at(S) !== _) {
        let n = await Yvt(l, S, h);
        if (n.kind === "error") return m("ccr_synced_file_stage", "push_failed"), {
          ok: !1,
          error: n.message
        };
        let i = await GTe(l);
        if (i.kind !== "ok") return m("ccr_synced_file_stage", "reget_failed"), {
          ok: !1,
          error: i.kind === "error" ? i.message : "get not_found after put"
        };
        d = i.buf, h = i.content_sha256, X("info", "working_stage_reconciled", {
          conflict: n.kind === "conflict",
          mid_window: !0
        });
      }
    } catch (c) {
      return m("ccr_synced_file_stage", "reconcile_threw"), {
        ok: !1,
        error: `reconcile failed: ${E(c) ?? "unknown"}`
      };
    }
    try {
      await Xvt(r, s, d);
    } catch (c) {
      return m("ccr_synced_file_stage", "write_failed"), {
        ok: !1,
        error: `write failed: ${E(c) ?? "unknown"}`
      };
    }
    return M(s, h, at(d)), g("ccr_synced_file_stage"), X("info", "working_stage_ok", {
      bytes: d.length
    }), {
      ok: !0
    };
  });
}

async function Ke(e, t) {
  let r = O();
  if (HYe(t)) return f("ccr_synced_file_push", "lane_path_reserved"), !0;
  let l = r.terminalRejects.get(t);
  if (l !== void 0 && l.latchedUntilMs !== 0) {
    if (Date.now() < l.latchedUntilMs) return l.suppressed++, !0;
    l.latchedUntilMs = 0;
  }
  let s = x(e, t);
  if (jC(s)) return f("ccr_synced_file_push", "backslash_in_path"), !0;
  let d;
  try {
    d = await I(s);
  } catch (i) {
    if (W(i)) return !0;
    throw i;
  }
  let h;
  try {
    h = await I(e);
  } catch {
    return !1;
  }
  let c = L(h, d);
  if (c !== t && (c === "" || G(c))) return f("ccr_synced_file_push", "symlink_escape"), 
  !0;
  let _;
  try {
    let i = await D(s, F.O_RDONLY | F.O_NOFOLLOW | F.O_NONBLOCK);
    try {
      let T = await i.stat();
      if (!T.isFile()) return !0;
      if (T.size > bW) return f("ccr_synced_file_push", "too_large"), !0;
      _ = await i.readFile();
    } finally {
      await i.close();
    }
  } catch (i) {
    let T = E(i);
    if (T === "ELOOP" || T === "EMLINK") return f("ccr_synced_file_push", "symlink_escape"), 
    !0;
    return m("ccr_synced_file_push", "read_failed"), !1;
  }
  let y = at(_), k = Z(s);
  if (y === k?.localHash) return !0;
  let v = k === void 0 ? r.evictedEtag.get(s) : void 0;
  if (k === void 0 && v === void 0) {
    let i = await GTe(t);
    if (i.kind === "error") {
      if (m("ccr_synced_file_push", "seed_get_failed"), !i.retryable) r.recordTerminalReject(t);
      return !i.retryable;
    }
    if (i.kind === "ok") {
      r.resetTerminalRejectStreak(t);
      let T = at(i.buf);
      if (T === y) return M(s, i.content_sha256, y), !0;
      try {
        await Xvt(e, s, i.buf);
      } catch {
        return m("ccr_synced_file_push", "write_failed"), !1;
      }
      return M(s, i.content_sha256, T), f("ccr_synced_file_push", "cold_renderer_wins"), 
      !0;
    }
  }
  let S = await Yvt(t, _, k?.etag ?? v);
  if (S.kind === "ok") return r.resetTerminalRejectStreak(t), M(s, S.content_sha256, y), 
  g("ccr_synced_file_push"), !0;
  if (S.kind === "error") {
    if (S.retryable) r.resetTerminalRejectStreak(t), m("ccr_synced_file_push", "put_failed"); else m("ccr_synced_file_push", Ae(S)), 
    r.recordTerminalReject(t);
    return X("warn", "working_push_failed", {
      reason: S.message,
      retryable: S.retryable
    }), !S.retryable;
  }
  r.resetTerminalRejectStreak(t);
  let n = await GTe(t);
  if (n.kind === "error") {
    if (m("ccr_synced_file_push", "reget_failed"), !n.retryable) r.recordTerminalReject(t);
    return !n.retryable;
  }
  if (n.kind === "not_found") return r.forgetSeen(s), m("ccr_synced_file_push", "reget_failed"), 
  !1;
  try {
    await Xvt(e, s, n.buf);
  } catch {
    return m("ccr_synced_file_push", "write_failed"), !1;
  }
  return M(s, n.content_sha256, at(n.buf)), f("ccr_synced_file_push", "conflict_overwritten"), 
  !0;
}

function fjs() {
  return O().flush();
}

async function HYs() {
  let e = O();
  await fjs();
  for (;;) {
    if (e.inFlight.size === 0 && (e.activeSyncer?.pendingCount() ?? 0) === 0) return;
    await e.inFlight.settle(), await new Promise(t => setImmediate(t));
  }
}

async function mjs(e) {
  let t = O();
  t.armLateStart(null);
  for (let R = 1; ;R++) try {
    await V(e);
    break;
  } catch (j) {
    let N = E(j);
    if (N === "EEXIST") break;
    if (N === "ENOENT") {
      if (R < ve) {
        await J(Te);
        continue;
      }
      return X("info", "working_sync_parent_absent", {}), t.armLateStart(e), null;
    }
    return f("ccr_synced_file_push", "sync_start_failed"), X("warn", "working_sync_start_failed", {
      code: N ?? "unknown"
    }), null;
  }
  let r = 0, l = [], s = () => r < be ? (r++, Promise.resolve()) : new Promise(R => l.push(R)), d = () => {
    let R = l.shift();
    if (R) R(); else r--;
  }, h = new Set, c = !1, _ = !1, y = 0, k = 0, v = async () => {
    let R = [], j = [ "" ], N = new Set, _e = [ ...t.seenState.keys() ], {transportFailureSeq: pe, sessionTerminalRejectSeq: ge} = t, he = 0, re = !1, ne = !1;
    e: while (j.length && !c) {
      let A = j.shift(), b;
      try {
        b = await ke(x(e, A), {
          withFileTypes: !0
        });
      } catch (P) {
        X("warn", "working_scan_readdir_failed", {
          code: E(P) ?? "unknown"
        }), ne = !0;
        continue;
      }
      for (let P of b) {
        if (++he > ce) {
          if (re = !0, !_) f("ccr_synced_file_push", "scan_cap_reached"), _ = !0;
          break e;
        }
        let w = A ? x(A, P.name) : P.name;
        if (N.add(w), Ule(w) || HYe(w)) continue;
        if (P.isDirectory()) {
          j.push(w);
          continue;
        }
        if (!P.isFile()) continue;
        let H;
        try {
          H = (await ae(x(e, w))).mtimeMs;
        } catch {
          continue;
        }
        let q = t.terminalRejects.get(w);
        if (q !== void 0 && q.latchedUntilMs !== 0 && Date.now() >= q.latchedUntilMs) t.reopenMtimeGate(w);
        if (H === t.lastSeenMtime.get(w)) continue;
        if (h.has(w) || t.inFlight.has(w)) continue;
        h.add(w), R.push((async () => {
          await s();
          try {
            if (await ee(w, () => Ke(e, w))) t.recordSettledMtime(w, H);
          } finally {
            h.delete(w), d();
          }
        })().catch(ye => X("warn", "working_push_threw", {
          code: E(ye) ?? "unknown"
        })));
      }
    }
    if (!re && !ne && !c) {
      for (let b of t.lastSeenMtime.keys()) if (!N.has(b)) t.reopenMtimeGate(b);
      for (let b of t.terminalRejects.keys()) if (!N.has(b)) t.forgetTerminalReject(b);
      let A = e.endsWith(z) ? e : e + z;
      for (let b of _e) if (b.startsWith(A) && !N.has(L(e, b))) t.evictDeleted(b);
    }
    if (await Promise.allSettled(R), t.transportFailureSeq > pe || t.sessionTerminalRejectSeq > ge) y = y === 0 ? 2 * ie : Math.min(y * 2, Fe), 
    k = Date.now() + y; else if (h.size === 0) y = 0, k = 0;
  }, S = 0, n = async () => {
    S++;
    try {
      await v();
    } finally {
      S--;
    }
  }, i = n(), T = setInterval(() => {
    if (S > 0 || Date.now() < k) return;
    n().catch(R => X("warn", "working_push_threw", {
      code: E(R) ?? "unknown"
    }));
  }, ie);
  T.unref?.(), X("info", "working_sync_started", {});
  let U = {
    initialReconcile: i,
    flush: n,
    pendingCount: () => h.size,
    pollBackoffUntilForTest: () => k,
    stop() {
      c = !0, clearInterval(T), t.syncerStopped(U);
    }
  };
  return t.syncerStarted(U), U;
}

async function j6r(e) {
  if (HYe(e)) return {
    kind: "error",
    message: nTn,
    retryable: !1,
    errorKind: "other",
    status: void 0
  };
  return GTe(e);
}

async function W6r(e, t, r, l) {
  let s = O();
  if (HYe(t)) return {
    ok: !1,
    reason: "put_failed",
    error: nTn,
    retryable: !1
  };
  if (r.length > bW) return {
    ok: !1,
    reason: "too_large",
    error: "content too large"
  };
  if (l !== void 0 && l.length === 0) return {
    ok: !1,
    reason: "put_failed",
    error: "empty if_match",
    retryable: !1
  };
  return ee(t, async () => {
    let d = await Yvt(t, r, l);
    if (d.kind === "conflict") {
      if (l !== void 0) return {
        ok: !1,
        reason: "conflict",
        error: "lane row changed since if_match",
        retryable: !1
      };
      return {
        ok: !1,
        reason: "put_failed",
        error: "put rejected (409 without if_match)",
        retryable: !0
      };
    }
    if (d.kind === "error") return {
      ok: !1,
      reason: "put_failed",
      error: d.message,
      retryable: d.retryable
    };
    if (!Ule(t)) {
      let h = x(e, t), c = Z(h), _ = !1;
      try {
        await te(e, h);
        let y = await D(h, F.O_RDONLY | F.O_NOFOLLOW | F.O_NONBLOCK);
        try {
          let k = await y.stat();
          if (k.isFile() && k.size <= bW && c !== void 0) {
            let v = Number(k.size), S = Buffer.allocUnsafe(v + 1), n = 0;
            for (;;) {
              let {bytesRead: i} = await y.read(S, n, v + 1 - n, n);
              if (i === 0) break;
              if (n += i, n > v) break;
            }
            _ = n <= v && c.localHash === at(S.subarray(0, n));
          }
        } finally {
          await y.close();
        }
      } catch (y) {
        _ = W(y);
      }
      if (!_) return s.recordEvictedEtag(h, d.content_sha256), X("info", "worker_lane_mirror_skipped"), 
      {
        ok: !0,
        etag: d.content_sha256
      };
      try {
        await Xvt(e, h, r);
      } catch (y) {
        return s.recordEvictedEtag(h, d.content_sha256), X("warn", "worker_lane_mirror_skipped", {
          code: E(y) ?? "unknown"
        }), {
          ok: !0,
          etag: d.content_sha256
        };
      }
      M(h, d.content_sha256, at(r));
    }
    return {
      ok: !0,
      etag: d.content_sha256
    };
  });
}

export { vrr, AKt, lVe, nTn, bW, Err, Ule, B6r, Yvt, GTe, Xvt, MYs, fjs, HYs, mjs, j6r, W6r };
