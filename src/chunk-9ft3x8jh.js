// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { K, B } from "./chunk-3pqddg8f.js";

import { l } from "./chunk-b0z4bv3v.js";

import { _, t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { _c } from "./chunk-vps0k559.js";

import { Qa } from "./chunk-nc0jxmkt.js";

import { bkr, Skr } from "./chunk-pwsd9z64.js";

import { bSo } from "./chunk-fmrcybq2.js";

import { randomUUID as d } from "crypto";

var c = "https://browser-intake-us5-datadoghq.com/api/v2/logs", p = 3e4, g = 25, u = 1e4, n = 100;

function m() {
  return a.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS || p;
}

async function f(e) {
  if (!bSo()) {
    t(`dd-error-tracking: compliance verdict now blocks reporting; dropping batch=${e.length}`, {
      level: "warn"
    });
    return;
  }
  let r = _(e), s = new URLSearchParams({
    ddsource: "browser",
    "dd-api-key": Skr,
    "dd-evp-origin": "browser",
    "dd-evp-origin-version": {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.299",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-13T21:37:33Z",
      GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
      HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION,
    "dd-request-id": d()
  });
  try {
    await Qa.post(`${c}?${s}`, r, {
      headers: {
        "Content-Type": "application/json"
      },
      timeout: u
    });
  } catch (o) {
    if (_c(o) && o.response) t(`dd-error-tracking: intake responded ${o.response.status} (batch=${e.length})`, {
      level: "warn"
    }); else t(`dd-error-tracking: intake failed: ${l(o)}`, {
      level: "warn"
    });
  }
}

class i {
  reportsEnqueued=0;
  capSentinelSent=!1;
  cachedUserBucket=void 0;
  sender=bkr({
    maxBatchSize: g,
    getFlushIntervalMs: m,
    post: f
  });
}

var E = new K(() => new i);

function utn() {
  return E.of(B().host);
}

function Ybo() {
  return utn().reportsEnqueued >= n;
}

function h(e) {
  return {
    ...e,
    message: `ErrorTrackingCapReached: per-process cap of ${n} hit, dropping further reports`,
    error: {
      kind: "ErrorTrackingCapReached",
      message: `per-process cap of ${n} hit`,
      stack: `ErrorTrackingCapReached\n    at enqueueErrorLog (src/services/errorTracking/client.ts)`,
      fingerprint: "cap-reached-sentinel",
      handling: "handled"
    },
    error_frames: void 0
  };
}

function Xbo(e) {
  let r = utn();
  if (r.reportsEnqueued >= n) return;
  if (r.reportsEnqueued++, r.reportsEnqueued === n && !r.capSentinelSent) r.capSentinelSent = !0, 
  t(`dd-error-tracking: per-process report cap reached (${n}); dropping further reports`, {
    level: "warn"
  }), r.sender.enqueue(h(e)); else r.sender.enqueue(e);
}

async function k6s() {
  await utn().sender.shutdown();
}

export { utn, Ybo, Xbo, k6s };
