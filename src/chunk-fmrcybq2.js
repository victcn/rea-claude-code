// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { he } from "./chunk-3pqddg8f.js";

import { NC } from "./chunk-y752zmas.js";

import { vy } from "./chunk-s2t7g8m9.js";

import { Oe, gi } from "./chunk-cjt10y7b.js";

import { $a, km, ip, MZ, k } from "./chunk-xywp7esx.js";

import { c_ } from "./chunk-hmce8a0s.js";

import { on, rTr, jS } from "./chunk-b47tzzqx.js";

import { we } from "./chunk-m8ez8fhk.js";

var r = we(vy(), 1);

var t = "tengu_orford_ness", n = "2.1.193";

function l() {
  try {
    return k(t, !1);
  } catch {
    return !1;
  }
}

function _So() {
  let e = jS();
  if (!on("allow_error_reporting")) {
    if (e === null) return "blocked_cache_miss";
    return e.restrictions.allow_error_reporting?.allowed === !1 ? "blocked_restriction" : "blocked_tainted";
  }
  let o = rTr();
  if (e !== null) return o ? "allowed_taints_clean" : "blocked_unsettled";
  if (ip() && !MZ(NC)) return "blocked_scopeless_oauth";
  if ($a().source === "ANTHROPIC_AUTH_TOKEN") return "blocked_auth_token_env";
  if (km()) return "blocked_api_key_helper";
  return o ? "allowed_untaintable" : "blocked_unsettled";
}

function bSo() {
  let e = _So();
  return e === "allowed_taints_clean" || e === "allowed_untaintable";
}

function mRs() {
  if (process.env.DISABLE_ERROR_REPORTING) return !1;
  if (he()) return !1;
  if (c_()) return !1;
  if (Oe() !== "firstParty" || !gi()) return !1;
  if (!r.gte(r.coerce({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION)?.version ?? {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.299",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-13T21:37:33Z",
    GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
    HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION, n)) return !1;
  if (!bSo()) return !1;
  return l();
}

export { _So, bSo, mRs };
