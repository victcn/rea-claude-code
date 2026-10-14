// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

import { K } from "./chunk-3pqddg8f.js";

import { c } from "./chunk-hwdwjvh8.js";

import { J, We } from "./chunk-nvtwm272.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, m, f } from "./chunk-3ykz5st8.js";

import { a } from "./chunk-j016gcgm.js";

import { X } from "./chunk-1zg3hbfq.js";

import { p } from "./chunk-jkzenvsk.js";

import { H5 } from "./chunk-2my8wpr5.js";

import { TFn } from "./chunk-4v78v8fd.js";

import { OGt, Oet } from "./chunk-pgbdqkd6.js";

import { o, v, M, _t } from "./chunk-cvcg6n1z.js";

import { createHash as q, randomUUID as C, timingSafeEqual as Z } from "crypto";

var Q = "workflow_launch_result", W = 4194304, D = "/.workflow/", q4s = "CLAUDE_CODE_WORKFLOW_LAUNCH_SHA256", ee = /^(?!\.+$)[A-Za-z0-9._-]{1,128}$/;

function T(e) {
  let t = d => ({
    ok: !1,
    error: d
  }), r = e.filestore_path;
  if (typeof r !== "string" || r.length === 0) return t("filestore_path is missing or not a non-empty string");
  if (!r.startsWith(D) || !ee.test(r.slice(D.length))) return t(`filestore_path must name one object directly under ${D}`);
  let n = e.artifact_sha256;
  if (typeof n !== "string" || !/^[0-9a-f]{64}$/.test(n)) return t("artifact_sha256 is missing or not 64 lowercase hex chars");
  let s = e.bundle_size_bytes;
  if (typeof s !== "number" || !Number.isSafeInteger(s) || s <= 0) return t("bundle_size_bytes is missing or not a positive integer");
  if (s > W) return t(`bundle_size_bytes exceeds ${W}`);
  let u = typeof e.workflow_name === "string" ? e.workflow_name.replace(/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g, "").slice(0, 200) : "", l = e.session_origin === void 0 ? void 0 : e.session_origin === "review" ? "review" : "other";
  return {
    ok: !0,
    pointer: {
      workflowName: u,
      filestorePath: r,
      artifactSha256: n,
      bundleSizeBytes: s,
      sessionOrigin: l
    }
  };
}

function te(e, t) {
  let r = q("sha256").update(e).digest(), n = Buffer.from(t, "hex");
  return n.length === r.length && Z(r, n);
}

var F = 1;

function re(e) {
  let t = l => ({
    ok: !1,
    error: l
  });
  if (e.length < 1) return t("bundle is empty");
  if (e[0] !== F) return t(`unsupported bundle format version ${e[0]} (expected ${F})`);
  let r = 1, n = (l, d) => {
    if (r + 8 > e.length) return {
      ok: !1,
      error: `bundle truncated in ${d} length frame`
    };
    let L = e.readBigUInt64BE(r);
    if (r += 8, L > BigInt(l)) return {
      ok: !1,
      error: `${d} frame exceeds ${l} bytes`
    };
    let h = Number(L);
    if (r + h > e.length) return {
      ok: !1,
      error: `bundle truncated in ${d} frame`
    };
    let w = e.subarray(r, r + h);
    return r += h, {
      ok: !0,
      buf: w
    };
  }, s = n(TFn, "script");
  if (!s.ok) return t(s.error);
  if (s.buf.length === 0) return t("script frame is empty");
  let u = n(W, "args_json");
  if (!u.ok) return t(u.error);
  if (r !== e.length) return t(`bundle has ${e.length - r} trailing bytes`);
  return {
    ok: !0,
    script: s.buf.toString("utf8"),
    argsJson: u.buf.toString("utf8")
  };
}

function Y4s(e = null) {
  return {
    ledger: new Map,
    firstLaunch: null,
    restoredRecord: e
  };
}

var z = 2, ne = p(() => _t({
  event_uuid: o().refine(e => Vt(e) !== null),
  dispatched_epoch: v().int().min(0).max(Number.MAX_SAFE_INTEGER),
  attempts: v().int().min(1).max(Number.MAX_SAFE_INTEGER),
  settled: M()
}));

function X4s(e) {
  let t = ne().safeParse(e);
  if (!t.success) return null;
  let r = T(t.data);
  if (!r.ok) return null;
  return {
    event_uuid: t.data.event_uuid,
    filestore_path: r.pointer.filestorePath,
    artifact_sha256: r.pointer.artifactSha256,
    bundle_size_bytes: r.pointer.bundleSizeBytes,
    workflow_name: r.pointer.workflowName,
    dispatched_epoch: t.data.dispatched_epoch,
    attempts: t.data.attempts,
    settled: t.data.settled
  };
}

class H {
  slots=new Map;
  stash(e, t) {
    this.slots.set(e, t);
  }
  take(e) {
    let t = this.slots.get(e);
    return this.slots.delete(e), t;
  }
}

var RZn = new K(() => new H), oe = 5e3;

async function B(e) {
  return await We(Promise.resolve().then(() => e.flushRecord()).catch(() => !1), e.recordFlushBoundMs ?? oe) === !0;
}

var se = [ 1e3, 3e3 ], ie = 1e4;

function I(e, t, r) {
  let n = {
    type: "system",
    subtype: Q,
    artifact_line: t,
    uuid: C(),
    session_id: e.getSessionId()
  };
  if (r.launchUuid !== void 0) n.launch_uuid = r.launchUuid;
  if (r.artifactSha256 !== void 0) n.artifact_sha256 = r.artifactSha256;
  e.postEvent(n);
}

function Y(e, t, r, n) {
  I(e, OGt(t, r), n), X("warn", "workflow_launch_failed", {
    layer: t
  }), i("tengu_workflow_launch_event", {
    ok: !1,
    layer: c(t)
  });
}

function O(e, t, r, n) {
  Y(e, t, r, n), m("workflow_event_launch", t);
}

function b(e, t, r, n, s) {
  O(e, r, n, s), e.state.ledger.set(t, {
    eventUuid: t,
    outcome: "failed-final"
  }), e.ackProcessed(t);
}

async function x(e, t, r, n, s) {
  let u = t.event_uuid;
  e.state.ledger.set(u, {
    eventUuid: u,
    outcome: "failed-final"
  }), e.persistRecord({
    ...t,
    settled: !0
  }), await B(e), O(e, r, n, s), e.ackProcessed(u);
}

async function j(e, t, r, n, s) {
  let {ledger: u} = e.state, l = t.eventUuid, d = (s?.attempts ?? 0) + 1, L = _ => ({
    event_uuid: l,
    filestore_path: r.filestorePath,
    artifact_sha256: r.artifactSha256,
    bundle_size_bytes: r.bundleSizeBytes,
    workflow_name: r.workflowName,
    dispatched_epoch: e.getWorkerEpoch() ?? 0,
    attempts: d,
    settled: _
  }), h = () => {
    if (e.state.firstLaunch === t) e.state.firstLaunch = null;
  }, w = async (_, N) => {
    if (h(), s) {
      await x(e, s, _, N, n);
      return;
    }
    b(e, l, _, N, n);
  }, S = Date.now(), R = e.fetchRetryWindowMs ?? ie, k = await e.fetchBundle(r.filestorePath), U = 1;
  for (let _ of e.fetchRetryDelaysMs ?? se) {
    if (k.ok || k.gated || Date.now() - S + _ >= R) break;
    U++, X("warn", "workflow_launch_bundle_fetch_retry", {
      attempt: U
    }), await J(_), k = await e.fetchBundle(r.filestorePath);
  }
  if (!k.ok) {
    if (k.gated) {
      await w("bundle-fetch", `bundle fetch gated: ${k.error}`);
      return;
    }
    if (u.delete(l), h(), s) {
      X("warn", "workflow_launch_rescue_fetch_failed", {}), f("workflow_event_launch", "rescue_fetch_transient");
      return;
    }
    Y(e, "bundle-fetch", `bundle fetch failed: ${k.error}`, n), f("workflow_event_launch", "bundle_fetch_transient");
    return;
  }
  let y = k.buf;
  if (y.byteLength > W || y.byteLength !== r.bundleSizeBytes) {
    await w("payload-digest-mismatch", `staged bundle is ${y.byteLength} bytes, event pinned ${r.bundleSizeBytes}`);
    return;
  }
  if (!te(y, r.artifactSha256)) {
    await w("payload-digest-mismatch", "staged bundle sha256 does not match the artifact_sha256 the event pinned");
    return;
  }
  let E = re(y);
  if (!E.ok) {
    await w("launch-payload", E.error);
    return;
  }
  let P;
  if (E.argsJson !== "") try {
    P = JSON.parse(E.argsJson);
  } catch (_) {
    await w("args-parse", `args_json is not valid JSON: ${_ instanceof Error ? _.message : String(_)}`);
    return;
  }
  e.state.firstLaunch = t, e.persistRecord(L(!1));
  let V = await B(e);
  if (s && !V) {
    u.delete(l), h(), X("warn", "workflow_launch_rescue_uncounted", {}), f("workflow_event_launch", "rescue_record_unconfirmed");
    return;
  }
  let A = C();
  RZn.of(e.host).stash(A, {
    script: E.script,
    args: P,
    eventSessionOrigin: r.sessionOrigin,
    postResultLine: _ => I(e, _, n),
    onRunSettled: async _ => {
      if (t.outcome = _ ? "executed" : "run-failed", e.persistRecord(L(!0)), !await B(e)) e.persistRecord(L(!0));
    }
  }), e.prependUserMessage(`/workflow-launch-exec ${A}`), e.ackProcessed(l), i("tengu_workflow_launch_event", {
    ok: !0,
    attempt: d
  }), g("workflow_event_launch"), X("info", "workflow_launch_dispatched", {
    attempt: d
  });
}

function G(e, t) {
  let r = {
    eventUuid: t.event_uuid,
    outcome: "failed-final"
  };
  e.state.ledger.set(t.event_uuid, r), e.state.firstLaunch ??= r, e.persistRecord({
    ...t,
    settled: !0
  }), e.ackProcessed(t.event_uuid), X("warn", "workflow_launch_attempts_spent", {
    attempts: t.attempts
  }), f("workflow_event_launch", "attempts_spent");
}

async function J4s(e, t) {
  let r = typeof e.uuid === "string" ? e.uuid : void 0;
  if (!r) {
    O(t, "launch-payload", "event has no uuid", {});
    return;
  }
  let {ledger: n} = t.state, s = n.get(r);
  if (s) {
    if (s.outcome !== "pending") t.ackProcessed(r);
    return;
  }
  if (!t.isRemoteTransport() || !a.CLAUDE_CODE_REMOTE || !a.CLAUDE_CODE_REMOTE_SESSION_ID) {
    O(t, "not-remote-session", "workflow_launch received outside a remote (CCR) session", {
      launchUuid: r
    });
    return;
  }
  let u = T(e);
  if (!u.ok) {
    b(t, r, "launch-payload", u.error, {
      launchUuid: r
    });
    return;
  }
  let l = u.pointer, d = {
    launchUuid: r,
    artifactSha256: l.artifactSha256
  }, L = t.state.restoredRecord, h = L && L.event_uuid === r ? L : null;
  if (h) {
    if (h.settled) {
      let k = {
        eventUuid: r,
        outcome: "executed"
      };
      n.set(r, k), t.state.firstLaunch ??= k, t.ackProcessed(r), X("info", "workflow_launch_redelivery_settled", {});
      return;
    }
    if (h.attempts >= z) {
      G(t, h);
      return;
    }
  }
  let w = Oet({
    serverAuthoredCarrier: !0,
    eventSessionOrigin: l.sessionOrigin
  });
  if (w) {
    if (h) {
      await x(t, h, "policy-gate", w, d);
      return;
    }
    b(t, r, "policy-gate", w, d);
    return;
  }
  let {firstLaunch: S} = t.state;
  if (S && S.eventUuid !== r) {
    b(t, r, "launch-protocol", "a second distinct workflow_launch event arrived in this session; at most one launch per session is permitted", d);
    return;
  }
  let R = {
    eventUuid: r,
    outcome: "pending"
  };
  n.set(r, R), t.state.firstLaunch = R, await j(t, R, l, d, h);
}

async function Q4s(e) {
  let t = e.state.restoredRecord;
  if (!t) return;
  if (!e.isRemoteTransport() || !a.CLAUDE_CODE_REMOTE || !a.CLAUDE_CODE_REMOTE_SESSION_ID) return;
  if (t.settled) {
    X("info", "workflow_launch_resume_skipped", {
      reason: "settled"
    });
    return;
  }
  let r = e.getWorkerEpoch();
  if (r === void 0 || t.dispatched_epoch >= r) {
    X("info", "workflow_launch_resume_skipped", {
      reason: "not_a_later_epoch"
    });
    return;
  }
  let n = e.getDispatchedDigest();
  if (n === void 0 || !/^[0-9a-f]{64}$/.test(n) || n !== t.artifact_sha256) {
    X("info", "workflow_launch_resume_skipped", {
      reason: n === void 0 ? "no_server_digest" : "digest_differs"
    });
    return;
  }
  let {ledger: s} = e.state;
  if (s.has(t.event_uuid) || e.state.firstLaunch) return;
  if (t.attempts >= z) {
    G(e, t);
    return;
  }
  let u = {
    launchUuid: t.event_uuid,
    artifactSha256: t.artifact_sha256
  }, l = Oet({
    serverAuthoredCarrier: !0
  });
  if (l) {
    if (!e.isAccountLaunchedReview() && H5() && Oet({
      serverAuthoredCarrier: !0,
      eventSessionOrigin: "review"
    }) === null) {
      X("info", "workflow_launch_resume_skipped", {
        reason: "needs_event_origin"
      });
      return;
    }
    await x(e, t, "policy-gate", l, u);
    return;
  }
  let d = {
    eventUuid: t.event_uuid,
    outcome: "pending"
  };
  s.set(t.event_uuid, d), e.state.firstLaunch = d, X("info", "workflow_launch_resuming", {
    attempt: t.attempts + 1
  }), await j(e, d, {
    workflowName: t.workflow_name,
    filestorePath: t.filestore_path,
    artifactSha256: t.artifact_sha256,
    bundleSizeBytes: t.bundle_size_bytes
  }, u, t);
}

export { q4s, Y4s, X4s, RZn, J4s, Q4s };
