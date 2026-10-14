// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Sy, DO, $pe, h5, sa, u8e, ZPe, Ig, In, U0 } from "./chunk-xywp7esx.js";

import { Ve, wx, l } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { t } from "./chunk-kawq2919.js";

import { k$t, d } from "./chunk-6ah1819r.js";

import { p } from "./chunk-jkzenvsk.js";

import { nMt } from "./chunk-4y2m4xpx.js";

import { RSr, Emo, xSr, PSr, ISr } from "./chunk-rshryz75.js";

import { W$n, WSs, zSs, Flt } from "./chunk-nv1kpyw2.js";

import { o, u } from "./chunk-cvcg6n1z.js";

var R = [ zSs, W$n ];

function uZe(e) {
  if (e === null) return {
    tagsRead: !1,
    rcChild: !1,
    projectThreadChild: !1,
    attended: !1
  };
  let r = !1;
  r = e.includes("hearth-rc-child");
  let i = e.includes(WSs);
  return {
    tagsRead: !0,
    rcChild: i,
    projectThreadChild: r,
    attended: e.some(s => R.includes(s)) && !i && !e.includes(Flt)
  };
}

function ohn(e) {
  if (RSr() || xSr()) return !0;
  return ISr() || e === "spawn" && PSr();
}

function shn(e) {
  let r = e.roles.rcChild && !e.modePinned && RSr(), i = r && Emo() && nMt(e.settings()), s = e.roles.attended, n = !1, a = !1;
  s = s || e.roles.projectThreadChild, n = e.roles.projectThreadChild && PSr(), a = e.roles.projectThreadChild && ISr();
  let C = s && xSr();
  return {
    autoDefault: r,
    autoOverSettings: i,
    artifact: C,
    machineSettings: n,
    autoCompact: a
  };
}

var c = "2.1.270", g = p(() => u({
  minVersion: o().refine(e => e === "" || h5(e)).optional()
}));

function f() {
  let {value: e, source: r} = In("tengu_bridge_min_version", {
    minVersion: c
  });
  if (r === "disabled") return null;
  if (r === "fallback" && !sa()) return {
    minVersion: c,
    unknown: "unanswered"
  };
  let i = g().safeParse(e);
  if (!i.success) return {
    minVersion: c,
    unknown: "malformed"
  };
  let s = i.data.minVersion;
  return {
    minVersion: s && Sy(s, c) ? s : c,
    unknown: null
  };
}

function kqs(e = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.299",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-13T21:37:33Z",
  GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
  HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "default"
}.VERSION) {
  let r = f();
  if (r === null) return null;
  if (DO($pe(e), r.minVersion)) return `Your version of Claude Code (${e}) is too old for Remote Control.\nVersion ${r.minVersion} or higher is required. Run \`claude update\` to update.`;
  return null;
}

function $ge(e = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.299",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-13T21:37:33Z",
  GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
  HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "default"
}.VERSION) {
  let r = f();
  if (r === null) return k$t() === "no-telemetry" ? {
    reason: "floor_unreachable",
    message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require cannot be received while feature-flag evaluation is off (DISABLE_TELEMETRY or DO_NOT_TRACK is set).`
  } : null;
  switch (r.unknown) {
   case "unanswered":
    return {
      reason: "floor_unanswered",
      message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require has not been received from the server.`
    };

   case "malformed":
    return {
      reason: "floor_malformed",
      message: `This computer's Claude Code (${e}) cannot take a session started remotely on it: the version such sessions require could not be read.`
    };

   case null:
    if (DO($pe(e), r.minVersion)) return {
      reason: "below_floor",
      message: `This computer's Claude Code (${e}) is below the version a session started remotely on it requires (${r.minVersion}). Run \`claude update\` to update.`
    };
    return null;
  }
}

var _ = 1e4, m = 500;

async function P1r(e, r, i, s = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.299",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-10-13T21:37:33Z",
  GIT_SHA: "c416f56ec7eca27e49747c35af51d5c92c856ba1",
  HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "default"
}.VERSION) {
  try {
    if (!Ig() || !ZPe()) return e;
    i.inFlight ??= U0().catch(n => t(`[bridge:floor] Flag refresh failed: ${l(n)}`, {
      level: "error"
    })).finally(() => {
      i.inFlight = void 0;
    });
    for (let n = 0; n < _ && !r.aborted; n += m) {
      await J(m, r);
      let a = f();
      if (r.aborted || a === null) break;
      if (a.unknown !== "unanswered") return $ge(s);
      if (i.inFlight === void 0 && !u8e()) break;
    }
  } catch (n) {
    if (Ve(n) || n instanceof wx) t(`[bridge:floor] Hold ended without an answer: ${l(n)}`, {
      level: "error"
    }); else d(n);
  }
  return e;
}

function Y_t(e, r) {
  if (e === null) return r.reason !== "floor_unreachable";
  return uZe(e).projectThreadChild;
}

export { uZe, ohn, shn, kqs, $ge, P1r, Y_t };
