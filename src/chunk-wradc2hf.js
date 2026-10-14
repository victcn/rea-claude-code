// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { QDt, JOs, k, Ce, ce } from "./chunk-xywp7esx.js";

import { c } from "./chunk-hwdwjvh8.js";

import { Iv, a } from "./chunk-j016gcgm.js";

import { Y, t } from "./chunk-kawq2919.js";

import { i } from "./chunk-hedpgw9m.js";

import { g, f } from "./chunk-3ykz5st8.js";

import { p } from "./chunk-jkzenvsk.js";

import { Pm } from "./chunk-cjt10y7b.js";

import { Jr } from "./chunk-s2t7g8m9.js";

import { IC, Tf, xy } from "./chunk-w4hwgefc.js";

import { fh } from "./chunk-ewk363e4.js";

import { Ps } from "./chunk-ac1gm9w7.js";

import { o, v, u, A } from "./chunk-cvcg6n1z.js";

var w = "tengu_atomic_ocean", L = "tengu_gzip_request_bodies", D = "tengu_gentle_hammock", j = "tengu_golden_popcorn", M = 4096, U = 1024, N = 6048e5, H = 8192;

function Q(e) {
  if (e === "ccr_worker") return k(D, !1);
  return k(w, !1) || k(L, !1);
}

function KSs() {
  let e = a.CLAUDE_CODE_GZIP_REQUEST_BODY_LEVEL ?? k(j, 0);
  return Number.isInteger(e) && e >= 1 && e <= 9 ? e : void 0;
}

function F(e) {
  return e === "ccr_worker" ? a.CLAUDE_CODE_GZIP_CCR_REQUEST_BODIES : a.CLAUDE_CODE_GZIP_REQUEST_BODIES;
}

function Z(e) {
  return e === "ccr_worker" ? U : M;
}

function J(e) {
  if (a.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (Tf() !== void 0 && !xy(e)) return "proxy";
  let n = IC();
  if (n?.cert !== void 0 || n?.key !== void 0) return "mtls";
  if (a.NODE_EXTRA_CA_CERTS) {
    let r = fh();
    if (!(Jr() || a.CLAUDE_CODE_ENTRYPOINT === "local-agent" && (r === void 0 || r.NODE_EXTRA_CA_CERTS !== void 0))) return "custom_ca";
  }
  return;
}

function hIt(e, n, r, s = "api") {
  if (!Pm(e)) return;
  let d = typeof n === "string" ? n.length : void 0, l = F(s);
  if (l === !1) return {
    gzip: !1,
    reason: "env_off",
    bodyChars: d
  };
  if (!Iv()) return {
    gzip: !1,
    reason: "not_bun_runtime",
    bodyChars: d
  };
  if (d === void 0) return {
    gzip: !1,
    reason: "non_string_body",
    bodyChars: d
  };
  if (d < Z(s)) return {
    gzip: !1,
    reason: "below_min_size",
    bodyChars: d
  };
  if (l === !0) return Ps().gzipRequestBody.rejectedThisProcess ? {
    gzip: !1,
    reason: "latched_off",
    bodyChars: d
  } : {
    gzip: !0,
    bodyChars: d
  };
  let y = J(e);
  if (y !== void 0) return {
    gzip: !1,
    reason: y,
    bodyChars: d
  };
  if (!Q(s)) return {
    gzip: !1,
    reason: "flag_off",
    bodyChars: d
  };
  if (oe(r)) return {
    gzip: !1,
    reason: "latched_off",
    bodyChars: d
  };
  return {
    gzip: !0,
    bodyChars: d
  };
}

var K = p(() => u({
  type: A("error"),
  error: u({
    type: o(),
    message: o()
  })
})), O = p(() => u({
  latchedAt: v().finite(),
  status: v()
})), W = p(() => u({
  error: o(),
  reason: o()
})), V = [ "The request body is not valid JSON", "Failed to parse request: could not parse request body as JSON" ], G = /^bad json: (?:invalid character |unexpected EOF$|unexpected end of JSON input$|EOF$)/;

function b(e) {
  return {
    status: e.status,
    header: n => e.headers.get(n) ?? void 0,
    bodyText: () => ee(e)
  };
}

function X(e) {
  return (e.header("request-id")?.startsWith("req_") ?? !1) || e.header("cf-ray") !== void 0;
}

async function ee(e) {
  let n = e.clone().body?.getReader();
  if (!n) return "";
  let r = new TextDecoder, s = "", d = H;
  try {
    while (d > 0) {
      let {done: l, value: y} = await n.read();
      if (l) break;
      let _ = y.subarray(0, d);
      d -= _.byteLength, s += r.decode(_, {
        stream: !0
      });
    }
  } catch {} finally {
    n.cancel().catch(() => {});
  }
  return s;
}

function te(e) {
  let n;
  try {
    n = Y(e);
  } catch {
    return G.test(e.trimEnd());
  }
  let r = K().safeParse(n);
  if (r.success) return V.some(d => r.data.error.message.startsWith(d));
  let s = W().safeParse(n);
  return s.success && s.data.reason === "bad_json" && G.test(s.data.error);
}

async function q(e) {
  if (e.status !== 400 && e.status !== 403 && e.status !== 415) return null;
  if (!X(e)) return "non_anthropic_rejection";
  if (e.status === 400 && te(await e.bodyText())) return "invalid_json_at_origin";
  return null;
}

async function amo(e) {
  if (e.ok) return null;
  return q(b(e));
}

async function ne(e) {
  if (await q(e) !== null) return "same_rejection";
  return e.header("request-id")?.startsWith("req_") ? "api_response" : "not_api_response";
}

function re() {
  let e;
  try {
    e = ce().gzipRequestBodiesLatchedOff;
  } catch {
    return "unavailable";
  }
  if (e === void 0) return;
  let n = O().safeParse(e);
  return n.success ? n.data : "malformed";
}

function E(e, n) {
  Ce(r => {
    let s = O().safeParse(r.gzipRequestBodiesLatchedOff);
    return (s.success ? s.data.latchedAt === e : r.gzipRequestBodiesLatchedOff !== void 0) ? {
      ...r,
      gzipRequestBodiesLatchedOff: void 0
    } : r;
  }, n);
}

function oe(e) {
  let n = Ps().gzipRequestBody;
  if (n.latchedOff) return !0;
  if (n.persistedLatchChecked) return !1;
  let r = re();
  if (r === "unavailable") return !1;
  if (n.persistedLatchChecked = !0, r === void 0) return !1;
  if (r === "malformed") return E(void 0, e), i("tengu_gzip_request_body_latch_cleared", {
    reason: c("malformed")
  }), !1;
  let s = Date.now() - r.latchedAt;
  if (s >= 0 && s < N) return n.latchedOff = !0, n.persistedLatchInEffect = !0, !0;
  return E(r.latchedAt, e), i("tengu_gzip_request_body_latch_cleared", {
    reason: s < 0 ? c("malformed") : c("expired"),
    latchedStatus: r.status,
    latchedAgeHours: Math.max(0, Math.round(s / 36e5))
  }), !1;
}

function h() {
  let e = Ps().gzipRequestBody;
  e.latchedOff = !0, e.rejectedThisProcess = !0, e.persistedLatchChecked = !0;
}

function S({persist: e, status: n, storageV5: r, rollout: s = "api"}) {
  h();
  let d = Ps().gzipRequestBody;
  if (e && !d.persistedLatchInEffect && F(s) !== !0) d.persistedLatchInEffect = !0, 
  Ce(l => ({
    ...l,
    gzipRequestBodiesLatchedOff: {
      latchedAt: Date.now(),
      status: n
    }
  }), r);
  return d.persistedLatchInEffect ? "persisted" : "process";
}

function x(e, n) {
  switch (e) {
   case "api":
    if (n === "fell_back") f("api_gzip_request_body", "fell_back"); else if (Ps().once("gzip_request_body_ok")) g("api_gzip_request_body");
    return;

   case "ccr_worker":
    if (n === "fell_back") f("ccr_worker_gzip_request_body", "fell_back"); else if (Ps().once("ccr_worker_gzip_request_body_ok")) g("ccr_worker_gzip_request_body");
    return;

   case "frame_publish":
    if (n === "fell_back") f("artifact_publish_gzip_request_body", "fell_back"); else if (Ps().once("artifact_publish_gzip_request_body_ok")) g("artifact_publish_gzip_request_body");
    return;
  }
}

function a7t(e = "api") {
  x(e, "sent");
}

function se(e, n) {
  if (e !== "ccr_worker") return;
  let r = Ps().gzipRequestBody.ccrWorkerSkipReasonsLogged;
  if (r.has(n.reason)) return;
  r.add(n.reason), i("tengu_gzip_request_body_skipped", {
    rollout: c(e),
    reason: c(n.reason),
    requestBodyChars: n.bodyChars
  });
}

function C({rejection: e, status: n, viaCloudflare: r, retryOutcome: s, retryStatus: d, latched: l, bodyChars: y, rollout: _ = "api"}) {
  x(_, "fell_back"), t(`[API REQUEST] gzip request body rejected (rollout=${_} status=${n} kind=${e}); re-sent uncompressed \u2192 ${s}${d !== void 0 ? ` status=${d}` : ""}; gzip latched off: ${l}`, {
    level: "warn"
  }), i("tengu_gzip_request_body_fallback", {
    rollout: c(_),
    rejection: c(e),
    status: n,
    viaCloudflare: r,
    retryOutcome: c(s),
    retryStatus: d,
    latched: c(l),
    requestBodyChars: y
  });
}

async function T({rejection: e, first: n, resend: r, facts: s, aborted: d, bodyChars: l, storageV5: y, rollout: _}) {
  let z = {
    rejection: e,
    status: n.status,
    viaCloudflare: n.header("cf-ray") !== void 0,
    bodyChars: l,
    rollout: _
  }, m;
  try {
    m = await r();
  } catch (P) {
    throw C({
      ...z,
      retryOutcome: d() ? "aborted" : "network_error",
      retryStatus: void 0,
      latched: S({
        persist: !1,
        status: n.status,
        storageV5: y,
        rollout: _
      })
    }), P;
  }
  let R = s(m), B = await ne(R), I = S({
    persist: _ !== "ccr_worker" && e === "non_anthropic_rejection" && B === "api_response",
    status: n.status,
    storageV5: y,
    rollout: _
  });
  return C({
    ...z,
    retryOutcome: B,
    retryStatus: R.status,
    latched: I
  }), m;
}

async function lmo({res: e, dispatch: n, finalInit: r, identityBody: s, clientRequestId: d, storageV5: l, rollout: y = "api"}) {
  let _ = await amo(e);
  if (_ === null) return e;
  h(), e.body?.cancel().catch(() => {});
  let {compress: z, ...m} = r, R = {
    ...m,
    body: s
  };
  if (d !== void 0) {
    let B = Ps().gzipRequestBody.telemetryByClientRequestId.get(d);
    dmo(d, {
      requestBodyEncoding: "identity",
      requestBodyChars: s.length,
      gzipFallbackStatus: e.status,
      ...B !== void 0 && "gzipBlocks" in B && {
        gzipBlocks: B.gzipBlocks
      }
    });
  }
  return T({
    rejection: _,
    first: b(e),
    resend: () => n(R),
    facts: b,
    aborted: () => r.signal?.aborted === !0,
    bodyChars: s.length,
    storageV5: l,
    rollout: y
  });
}

async function qSs({answer: e, facts: n, resendIdentity: r, aborted: s, bodyChars: d, storageV5: l, rollout: y}) {
  let _ = n(e), z = await q(_);
  if (z === null) return e;
  return h(), T({
    rejection: z,
    first: _,
    resend: r,
    facts: n,
    aborted: s,
    bodyChars: d,
    storageV5: l,
    rollout: y
  });
}

function Ult(e, n) {
  return async (r, s, d) => {
    let l = hIt(r, s.body, n, e);
    if (!l?.gzip) {
      if (l !== void 0) se(e, l);
      return d(s);
    }
    a7t(e);
    let y = {
      ...s,
      compress: "gzip",
      body: QDt(s.body)
    }, _ = await d(y);
    return lmo({
      res: _,
      dispatch: d,
      finalInit: y,
      identityBody: s.body,
      clientRequestId: void 0,
      storageV5: n,
      rollout: e
    });
  };
}

function dmo(e, n) {
  Ps().gzipRequestBody.telemetryByClientRequestId.set(e, n);
}

function l7t(e, n) {
  if (e === null) return;
  let r = Ps().gzipRequestBody.telemetryByClientRequestId, s = r.get(e);
  if (s?.requestBodyEncoding !== "gzip") return;
  r.set(e, {
    ...s,
    gzipBlocks: s.gzipBlocks?.outcome === "as_blocks" ? {
      ...s.gzipBlocks,
      outcome: "rejected"
    } : n
  });
}

function YSs(e, n) {
  Ps().gzipRequestBody.dispatchAtByClientRequestId.set(e, n);
}

function XSs(e) {
  if (e === void 0) return;
  let n = Ps().gzipRequestBody.dispatchAtByClientRequestId, r = n.get(e);
  return n.delete(e), r;
}

function yIt(e) {
  if (e === void 0) return;
  let n = Ps().gzipRequestBody.telemetryByClientRequestId, r = n.get(e);
  return n.delete(e), r;
}

function V$n(e) {
  if (e === void 0) return {};
  return {
    requestBodyEncoding: c(e.requestBodyEncoding),
    requestBodyChars: e.requestBodyChars,
    ...e.requestBodyEncoding === "gzip" && e.requestBodyGzipLevel !== void 0 && {
      requestBodyGzipLevel: e.requestBodyGzipLevel
    },
    ..."requestPrepareMs" in e && e.requestPrepareMs !== void 0 && {
      requestPrepareMs: e.requestPrepareMs
    },
    ..."gzipBlocks" in e && e.gzipBlocks !== void 0 && {
      requestBodyGzipBlocksMode: e.gzipBlocks.mode,
      requestBodyGzipBlocksOutcome: c(e.gzipBlocks.outcome),
      ...e.gzipBlocks.planned !== void 0 && {
        requestBodyGzipBlockCount: e.gzipBlocks.planned.blockCount,
        requestBodyGzipReusedBlockCount: e.gzipBlocks.planned.reusedBlockCount,
        requestBodyGzipReusedBytes: e.gzipBlocks.planned.reusedBytes,
        requestBodyGzipBlocksMs: e.gzipBlocks.planned.spentMs,
        ...e.gzipBlocks.planned.gzippedBytes !== void 0 && {
          requestBodyGzippedBytes: e.gzipBlocks.planned.gzippedBytes
        },
        requestBodyGzipStoredBytes: e.gzipBlocks.planned.storedBytes,
        requestBodyGzipEvictedBlockCount: e.gzipBlocks.planned.evictedForSpaceCount
      }
    },
    ..."gzipSkipReason" in e && {
      gzipSkipReason: c(e.gzipSkipReason)
    },
    ..."gzipFallbackStatus" in e && {
      gzipFallback: !0,
      gzipFallbackStatus: e.gzipFallbackStatus
    }
  };
}

JOs(hIt);

export { KSs, hIt, amo, a7t, lmo, qSs, Ult, dmo, l7t, YSs, XSs, yIt, V$n };
