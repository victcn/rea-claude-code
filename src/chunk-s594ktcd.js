// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vje, Kje } from "./chunk-3pqddg8f.js";

import { J } from "./chunk-nvtwm272.js";

import { t } from "./chunk-kawq2919.js";

import { a } from "./chunk-j016gcgm.js";

import { H5, IIe, MVn, Mie, PLt } from "./chunk-2my8wpr5.js";

import { X } from "./chunk-1zg3hbfq.js";

var UWr = [ 250, 500, 500, 750, 1e3 ];

function g() {
  return a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Mie;
}

function C(r) {
  return a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_SESSION_ACCESS_TOKEN && !a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR && r.some(e => e === "--sdk-url" || e.startsWith("--sdk-url=")) && !H5();
}

var I = 250, w = 50;

function d() {
  return PLt(IIe, "OAuth token").token !== null || PLt(MVn, "API key").token !== null;
}

async function dKo(r, {delaysMs: e = UWr, siblingGraceMs: o = I, siblingStepMs: f = w} = {}) {
  if (!C(r)) return;
  let i = performance.now(), S = e.reduce((s, k) => s + k, 0), E = g(), {token: l, miss: _} = PLt(E, "session ingress token"), n = 0;
  while (!l && n < e.length) {
    let s = e[n];
    t(`[spare-claim] session ingress token file not readable yet (${_}), re-checking in ${s}ms (${n + 1}/${e.length})`, {
      level: "warn"
    }), await J(s), n++, ({token: l, miss: _} = PLt(E, "session ingress token"));
  }
  if (!l) {
    X("error", "cli_worker_lifecycle_claim_token_wait", {
      attempts: n,
      recovered: !1,
      last_miss: _ ?? "other",
      waited_ms: Math.round(performance.now() - i)
    });
    return;
  }
  let u = n > 0 ? Math.max(S - (performance.now() - i), o) : o, p = performance.now(), c = 0, m = d();
  while (!m && performance.now() - p < u) await J(f), c++, m = d();
  if (n > 0 || c > 0) X("info", "cli_worker_lifecycle_claim_token_wait", {
    attempts: n,
    recovered: !0,
    sibling_attempts: c,
    sibling_present: m,
    waited_ms: Math.round(performance.now() - i)
  });
}

function cKo() {
  let r = !!a.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
  if (Vje() !== null) return {
    recovered: !1,
    diag: {
      fd_env_set: r
    }
  };
  let {token: e, miss: o} = PLt(g(), "session ingress token");
  if (!e) return {
    recovered: !1,
    diag: {
      fd_env_set: r,
      last_miss: o ?? "other"
    }
  };
  return Kje(e), t("Session ingress token re-read from well-known file"), {
    recovered: !0,
    diag: {
      fd_env_set: r
    }
  };
}

export { UWr, dKo, cKo };
