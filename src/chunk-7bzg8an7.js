// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Le } from "./chunk-2v9tfgc3.js";

import { ve, mc } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { a } from "./chunk-j016gcgm.js";

import { t } from "./chunk-kawq2919.js";

import { sHr } from "./chunk-5brm0azz.js";

import { Pi } from "./chunk-8yperama.js";

import { SA } from "./chunk-cqgvwwgb.js";

import { i_, Ft, zrn, Grn, k } from "./chunk-xywp7esx.js";

import { Y$e } from "./chunk-3xtsjx0y.js";

import { Ece, OCe } from "./chunk-tpybgmc6.js";

import { fjn } from "./chunk-b47tzzqx.js";

import { $d } from "./chunk-1pzzpwf7.js";

import { tY, XMn } from "./chunk-am6xk4a3.js";

import { oo } from "./chunk-vjmbaret.js";

var l = new Set([ "remote", "remote_cowork", "remote_desktop", "remote_mobile", "remote_projects" ]);

function $1s(e) {
  if (Ft()) return new Set([ "bg" ]);
  let r = new Set;
  if ((e ?? zrn()) || i_() !== null) r.add("watched");
  if (_Zn()) r.add("ccr");
  if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || mc()) r.add("bridge");
  let s = a.CLAUDE_CODE_ENTRYPOINT;
  if (s !== void 0 && sHr.has(s)) r.add("desktop");
  if (j1s()) r.add("cli");
  if (!ve() && $d()) r.add("repl");
  return r;
}

function _Zn() {
  if (SA("fanout")) return !0;
  if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return !0;
  if (a.CLAUDE_CODE_REMOTE) return l.has(a.CLAUDE_CODE_ENTRYPOINT ?? "") && !process.env.BUGHUNTER_FLEET_SIZE;
  return !1;
}

async function W4s(e) {
  return z() && e !== void 0 ? Grn(e) : void 0;
}

var u = {
  bg: [ "state" ],
  watched: [ "state" ],
  ccr: [ "summary" ],
  bridge: [ "summary" ],
  desktop: [ "summary" ],
  cli: [ "summary" ],
  repl: [ "headline" ]
};

function F1s(e) {
  let r = new Set, s = U1s();
  for (let n of e) {
    if (s.has(n)) continue;
    for (let o of u[n]) r.add(o);
  }
  if (e.has("bg")) r.delete("summary");
  if (k("tengu_classifier_summary_kill", !1)) r.delete("summary");
  return r;
}

function U1s() {
  return f(k("tengu_classifier_disabled_surfaces", ""));
}

function f(e) {
  let r = new Set;
  for (let s of e.split(",")) {
    let n = s.trim();
    if (!n) continue;
    if (n in u) r.add(n); else if (!tY().warnedUnknownDisabledSurface) tY().warnedUnknownDisabledSurface = !0, 
    t(`[classifier] tengu_classifier_disabled_surfaces: unknown surface '${n}' ignored`);
  }
  return r;
}

function B1s(e) {
  if (e.size === 0) return null;
  let r = e.has("state") ? "llm" : !e.has("summary") ? "heuristic" : process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY !== void 0 ? Le(process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY) ? "llm" : "heuristic" : d();
  return r === "llm" && k("tengu_cobalt_wren", !1) ? "heuristic" : r;
}

function d() {
  if (k("tengu_classifier_summary_llm_emit", !1)) return "llm";
  return "heuristic";
}

function j1s() {
  return !1;
}

function z4s(e) {
  return Ece() && OCe(e) && k("tengu_projects_thread_recap", !1);
}

var i = new Map([ [ "blocked", "blocked" ], [ "done", "completed" ], [ "working", "review_ready" ] ]);

function G4s(e, r) {
  if (e.recap) return {
    status_category: e.state === "failed" ? "failed" : i.get(e.state) ?? "review_ready",
    status_detail: e.recap.headline,
    needs_action: e.state === "blocked" ? e.recap.needs : "",
    recent_action: e.recap.needsYou,
    description: e.recap.happened,
    reply: e.recap.reply
  };
  return {
    status_category: i.get(e.state) ?? "review_ready",
    status_detail: e.detail,
    needs_action: e.state === "blocked" ? e.needs ?? "" : "",
    recent_action: e.output.result ?? "",
    ...r?.projectsRecap && {
      description: XMn(e.detail).text
    }
  };
}

function V4s(e, r) {
  let s = F1s($1s(!1));
  if (!s.has("summary") || B1s(s) === null) return;
  let n = oo(e.tool_name), o = !n?.toolName || n.serverName === Pi ? e.tool_name : fjn({
    serverName: n.serverName,
    toolName: n.toolName
  }), c = e.tool_name.startsWith("dialog:") ? {
    status_category: "blocked",
    status_detail: "Waiting on a user dialog",
    needs_action: e.action_description
  } : {
    status_category: "blocked",
    status_detail: `Waiting on permission: ${o}`,
    needs_action: `Approve or deny ${o}`
  };
  Y$e(r, c);
}

export { $1s, _Zn, W4s, F1s, U1s, B1s, j1s, z4s, G4s, V4s };
