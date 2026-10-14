// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { g, m } from "./chunk-3ykz5st8.js";

import { _, Y, t } from "./chunk-kawq2919.js";

import { d } from "./chunk-6ah1819r.js";

import { KR, Ab, ql, qR } from "./chunk-sfvypv11.js";

import { bw, bpo, Spo, wpo, vpo } from "./chunk-pegykqwq.js";

import { _a } from "./chunk-3kb22va7.js";

import { pb } from "./chunk-14xmsjdg.js";

import { createHash as b } from "crypto";

var S = 32;

function b8(e, r) {
  return b("sha256").update(e).update("\0").update(_(f(r))).digest("hex");
}

function f(e, r = 0) {
  if (r > S) return e;
  if (Array.isArray(e)) return e.map(n => f(n, r + 1));
  if (typeof e === "object" && e !== null) return Object.fromEntries(Object.entries(e).sort(([n], [o]) => n < o ? -1 : n > o ? 1 : 0).map(([n, o]) => [ n, f(o, r + 1) ]));
  return e;
}

function IPt(e, r) {
  let n = Y(_(r));
  return b8(e, n);
}

function k() {
  return `perm-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

function bNn(e) {
  let r = e.teamName || ql(), n = e.workerId || KR(), o = e.workerName || Ab(), i = e.workerColor || qR();
  if (!r) throw Error("Team name is required for permission requests");
  if (!n) throw Error("Worker ID is required for permission requests");
  if (!o) throw Error("Worker name is required for permission requests");
  return {
    id: k(),
    workerId: n,
    workerName: o,
    workerColor: i,
    teamName: r,
    toolName: e.toolName,
    toolUseId: e.toolUseId,
    description: e.description,
    input: e.input,
    permissionSuggestions: e.permissionSuggestions || [],
    createdAt: Date.now()
  };
}

function y(e) {
  if (!(e || ql())) return !1;
  let n = KR();
  return !n || n === "team-lead";
}

function C$e() {
  let e = ql(), r = KR();
  return !!e && !!r && !y();
}

async function x(e, r) {
  let n = e || ql();
  if (!n) return null;
  if (!await pb(n, r)) return t(`[PermissionSync] Team file not found for team: ${n}`), 
  null;
  return _a;
}

async function c(e, r, n, o, i) {
  if (await bw(e, r, n, i) === void 0) return t(`[PermissionSync] FAILED to deliver ${o}`, {
    level: "error"
  }), !1;
  return t(`[PermissionSync] Sent ${o}`), !0;
}

async function SNn(e, r) {
  let n = await x(e.teamName, r);
  if (!n) return t("[PermissionSync] Cannot send permission request: leader name not found"), 
  !1;
  try {
    let o = bpo({
      request_id: e.id,
      agent_id: e.workerName,
      tool_name: e.toolName,
      tool_use_id: e.toolUseId,
      description: e.description,
      input: e.input,
      permission_suggestions: e.permissionSuggestions
    });
    return await c(n, {
      from: e.workerName,
      text: _(o),
      timestamp: (new Date).toISOString(),
      color: e.workerColor
    }, e.teamName, `permission request ${_(e.id)} to leader ${_(n)} via mailbox`, r);
  } catch (o) {
    return t(`[PermissionSync] Failed to send permission request via mailbox: ${o}`), 
    d(o), !1;
  }
}

async function apo(e, r, n, o, i, a) {
  let p = o || ql();
  if (!p) return t("[PermissionSync] Cannot send permission response: team name not found"), 
  !1;
  try {
    let s = Spo({
      request_id: n,
      subtype: r.decision === "approved" ? "success" : "error",
      error: r.feedback,
      updated_input: r.updatedInput,
      permission_updates: r.permissionUpdates,
      tool_use_id: a,
      approved_request: r.approvedRequest
    });
    return await c(e, {
      from: _a,
      text: _(s),
      timestamp: (new Date).toISOString()
    }, p, `permission response for ${_(n)} to worker ${_(e)} via mailbox`, i);
  } catch (s) {
    return t(`[PermissionSync] Failed to send permission response via mailbox: ${s}`), 
    d(s), !1;
  }
}

function N_s() {
  return `sandbox-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

async function $_s(e, r, n, o) {
  let i = n || ql();
  if (!i) return t("[PermissionSync] Cannot send sandbox permission request: team name not found"), 
  m("swarm_sandbox_permission_request", "no_team_name"), !1;
  let a = await x(i, o);
  if (!a) return t("[PermissionSync] Cannot send sandbox permission request: leader name not found"), 
  m("swarm_sandbox_permission_request", "no_leader"), !1;
  let p = KR(), s = Ab(), l = qR();
  if (!p || !s) return t("[PermissionSync] Cannot send sandbox permission request: worker ID or name not found"), 
  m("swarm_sandbox_permission_request", "no_worker_identity"), !1;
  try {
    let u = wpo({
      requestId: r,
      workerId: p,
      workerName: s,
      workerColor: l,
      host: e
    }), w = await c(a, {
      from: s,
      text: _(u),
      timestamp: (new Date).toISOString(),
      color: l
    }, i, `sandbox permission request ${_(r)} for host ${_(e)} to leader ${_(a)} via mailbox`, o);
    if (w) g("swarm_sandbox_permission_request"); else m("swarm_sandbox_permission_request", "mailbox_write_failed");
    return w;
  } catch (u) {
    return t(`[PermissionSync] Failed to send sandbox permission request via mailbox: ${u}`), 
    d(u), m("swarm_sandbox_permission_request", "mailbox_write_failed"), !1;
  }
}

async function G_r(e, r, n, o, i, a) {
  let p = i || ql();
  if (!p) return t("[PermissionSync] Cannot send sandbox permission response: team name not found"), 
  !1;
  try {
    let s = vpo({
      requestId: r,
      host: n,
      allow: o
    });
    return await c(e, {
      from: _a,
      text: _(s),
      timestamp: (new Date).toISOString()
    }, p, `sandbox permission response for ${_(r)} (host: ${_(n)}, allow: ${_(o)}) to worker ${_(e)} via mailbox`, a);
  } catch (s) {
    return t(`[PermissionSync] Failed to send sandbox permission response via mailbox: ${s}`), 
    d(s), !1;
  }
}

export { b8, IPt, bNn, C$e, SNn, apo, N_s, $_s, G_r };
