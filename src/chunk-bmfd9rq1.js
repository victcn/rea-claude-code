// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { xw, PPe } from "./chunk-xywp7esx.js";

import { fe } from "./chunk-dd98x6x7.js";

import { vy } from "./chunk-s2t7g8m9.js";

import { we } from "./chunk-m8ez8fhk.js";

var o = we(vy(), 1);

var u = new Set([ "update", "install", "doctor" ]);

function l({currentVersion: e, requiredMinimumVersion: r, requiredMaximumVersion: n, topLevelCommand: a}) {
  if (!r && !n) return null;
  if (a !== void 0 && u.has(a)) return null;
  if (!o.parse(e)) return null;
  if (r) {
    let i = o.parse(r)?.version;
    if (!i) t(`requiredMinimumVersion '${r}' is not a valid semver version \u2014 ignoring`, {
      level: "error"
    }); else if (!xw(e, i)) return `Claude Code ${e} is older than the minimum version required by your organization (${r}).\nUpdate Claude Code using your organization's approved method, then try again. If automatic updates are available, \`claude update\` may also work.`;
  }
  if (n) {
    let i = o.parse(n)?.version;
    if (!i) t(`requiredMaximumVersion '${n}' is not a valid semver version \u2014 ignoring`, {
      level: "error"
    }); else if (!PPe(e, i)) return `Claude Code ${e} is newer than the maximum version allowed by your organization (${n}).\nYour organization requires version ${n} or older. Install an approved version using your organization's approved method. \`claude install <version>\` may also work.`;
  }
  return null;
}

function RCs(e) {
  try {
    let r = e.parent ? e : null;
    while (r?.parent?.parent) r = r.parent;
    let n = fe("policySettings");
    return l({
      currentVersion: {
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
      requiredMinimumVersion: n?.requiredMinimumVersion,
      requiredMaximumVersion: n?.requiredMaximumVersion,
      topLevelCommand: r?.name()
    });
  } catch (r) {
    return d(r), null;
  }
}

function xCs() {
  try {
    let e = fe("policySettings");
    return l({
      currentVersion: {
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
      requiredMinimumVersion: e?.requiredMinimumVersion,
      requiredMaximumVersion: e?.requiredMaximumVersion,
      topLevelCommand: void 0
    });
  } catch (e) {
    return d(e), null;
  }
}

export { RCs, xCs };
