// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Ve, l } from "./chunk-b0z4bv3v.js";

import { Ic, t } from "./chunk-kawq2919.js";

import { Yl, SG } from "./chunk-1z2heevg.js";

import { d } from "./chunk-6ah1819r.js";

import { IQt } from "./chunk-r8a304y3.js";

import { Yce, Jy, Xms, BDn, jDn } from "./chunk-sqb9meyh.js";

import { zge } from "./chunk-jwgq615a.js";

import { L } from "./chunk-vh1p9t2h.js";

var X = "<cloud-transcript-unavailable>";

function Tfn(e) {
  let o = e.length;
  while (o > 0 && e[o - 1] === "/") o -= 1;
  return o === 0 && e.startsWith("/") ? "/" : e.slice(0, o);
}

function Y(e) {
  return e !== "" && e !== "." && e !== ".." && !/[\p{Cc}\p{Cf}\u2028\u2029\\:]/u.test(e);
}

function q(e, o) {
  let n = Tfn(o.containerProjectDir), r = Tfn(o.deviceLaunchDir);
  if (!n.startsWith("/") || !r.startsWith("/") || n === "/") return null;
  if (!IQt(e, n)) return null;
  if (e === n || e === `${n}/`) return r;
  let c = e.slice(n.length + 1).split("/"), a = c.at(-1) === "" ? c.slice(0, -1) : c;
  return a.length > 0 && a.every(Y) ? `${r === "/" ? "" : r}/${a.join("/")}` : null;
}

var D = {
  Read: {
    input: "file_path",
    responseNested: [ [ "file", "filePath" ], [ "file", "outputDir" ] ]
  },
  Write: {
    input: "file_path",
    responseMembers: [ "filePath" ]
  },
  Edit: {
    input: "file_path",
    responseMembers: [ "filePath" ]
  },
  MultiEdit: {
    input: "file_path",
    responseMembers: [ "filePath" ]
  },
  NotebookEdit: {
    input: "notebook_path",
    responseMembers: [ "notebook_path" ]
  },
  Glob: {
    input: "path",
    responseArrays: [ "filenames" ]
  },
  Grep: {
    input: "path",
    responseArrays: [ "filenames" ]
  },
  LSP: {
    input: "filePath",
    responseMembers: [ "filePath" ]
  },
  Bash: {
    responseMembers: [ "rawOutputPath", "persistedOutputPath" ]
  },
  Agent: {
    input: "cwd",
    responseMembers: [ "worktreePath", "outputFile" ]
  },
  Workflow: {
    input: "scriptPath",
    responseMembers: [ "scriptPath", "transcriptDir" ]
  },
  EnterWorktree: {
    input: "path",
    responseMembers: [ "worktreePath" ]
  },
  ExitWorktree: {
    responseMembers: [ "worktreePath", "originalCwd" ]
  }
}, de = new Set(Object.values(D).flatMap(e => e.responseMembers ?? [])), pe = new Set(Object.values(D).flatMap(e => (e.responseNested ?? []).map(([o, n]) => `${o}/${n}`)));

function rBt(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}

function oBt(e) {
  return e.split("/").slice(1).map(o => o.replace(/~1/g, "/").replace(/~0/g, "~"));
}

function P1o(e) {
  let o = oBt(e), n = o[0] === "tool_calls" ? o.slice(2) : o;
  if (n[0] === "tool_input") return n.length >= 1;
  if (n[0] === "tool_response") return n.length === 2 && (n[1] === "filePath" || n[1] === "notebook_path" || n[1] === "file") || n.length === 3 && n[1] === "file" && n[2] === "filePath";
  return !1;
}

function I1o(e) {
  let o = oBt(e), n = o[0] === "tool_calls" ? o.slice(2) : o;
  return n[0] === "tool_response" && (n.length === 2 && de.has(n[1] ?? "") || n.length === 3 && pe.has(`${n[1]}/${n[2]}`));
}

function qWe(e) {
  return fe.test(e) || U.test(e);
}

function Afn(e, o) {
  return Q(e, o)?.input;
}

var fe = /(?:^|_)(?:path|paths|file|files|filename|filenames|dir|directory|directories|cwd|filepath|filepaths|abspath|realpath|fullpath|relpath|dirname|basename|pathname|folder|folders|dirs|workdir|outdir|rootdir|basedir|tmpdir|subdir|srcdir|destdir|builddir|datadir|homedir)$|(?:Path|Paths|File|Files|Filename|Filenames|Dir|Dirs|Directory|Directories|Folder|Folders|Cwd)$/, U = /(?:^|_)(?:uri|uris|url|urls)$|(?:Uri|Uris|Url|Urls|URI|URIs|URL|URLs)$/, z = /^(?:https?|s3|gs|ftps?|mailto|data):[^\p{Cc}\p{Cf}\p{Z}\s]*$/iu, me = 4, N = 256;

function S(e, o, n, r, c, a = 0, m = !1, s = !1) {
  if (a > me || a > 0 && c.members <= 0) {
    if (typeof e === "object" && e !== null) v(r, o);
    return e;
  }
  if (Array.isArray(e)) {
    let i = !1, p = e.map((f, g) => {
      let k = `${o}/${g}`;
      if (k in r.paths || r.listed.has(k)) return f;
      let _ = m && !(P(f) && Object.keys(f).some(qWe)), y = m && typeof f === "string" ? s && z.test(f) ? f : E(f, k, n, r) : S(f, k, n, r, c, a + 1, _, _ && s);
      return i ||= y !== f, y;
    });
    return i ? p : e;
  }
  if (!P(e)) return e;
  let h = e, u = !1;
  for (let [i, p] of Object.entries(e)) {
    let f = `${o}/${rBt(i)}`;
    if (a > 0) {
      if (c.members -= 1, c.members < 0) {
        v(r, o);
        break;
      }
    }
    let g = p, k = !1;
    if ((m || qWe(i)) && !(f in r.paths) && !r.listed.has(f)) {
      let _ = s || U.test(i);
      if (typeof p === "string") k = !0, g = _ && z.test(p) ? p : E(p, f, n, r); else if (Array.isArray(p)) k = !0, 
      g = S(p, f, n, r, c, a + 1, !0, _);
    }
    if (!k && g === p && typeof p === "object" && p !== null) {
      let y = (m || qWe(i)) && !(P(p) && Object.keys(p).some(qWe));
      g = S(p, f, n, r, c, a + 1, y, y && (s || U.test(i)));
    }
    if (g !== p) {
      if (!u) h = {
        ...e
      }, u = !0;
      h[i] = g;
    }
  }
  return h;
}

function V(e, o, n, r, c, a) {
  if (a && typeof e === "string") return E(e, o, n, r);
  return S(e, o, n, r, c, 0, a && Array.isArray(e));
}

function Z(e) {
  let o = e.trim();
  return o !== e || /^~[^/]*(?:$|\/)/.test(o) || /^[$%`!=]/.test(o);
}

function K(e) {
  return Object.hasOwn(D, e);
}

function Q(e, o) {
  let n = Yl(e);
  if (K(n)) return D[n];
  let r = SG(n, o).map(Yl).find(K);
  return r === void 0 ? void 0 : D[r];
}

function v(e, o) {
  if (!e.listed.has(o)) e.listed.add(o), e.untranslated.push(o);
}

var P = L;

function E(e, o, n, r) {
  if (typeof e !== "string") return e;
  if (Z(e)) return v(r, o), e;
  if (!e.startsWith("/")) {
    let a = (e.endsWith("/") ? e.slice(0, -1) : e).split("/").filter(m => m !== ".");
    if (e !== "" && a.length > 0 && !a.every(Y)) v(r, o);
    return e;
  }
  let c = q(e, n);
  if (c === null) return v(r, o), e;
  return r.paths[o] = e, c;
}

function C(e, o, n, r, c) {
  if (!P(e) || !(o in e)) return e;
  let a = E(e[o], n, r, c);
  return a === e[o] ? e : {
    ...e,
    [o]: a
  };
}

function he(e, o, n, r, c) {
  if (!P(e) || !Array.isArray(e[o])) return e;
  let a = !1, m = e[o].map((s, h) => {
    let u = E(s, `${n}/${h}`, r, c);
    return a ||= u !== s, u;
  });
  return a ? {
    ...e,
    [o]: m
  } : e;
}

function x(e, o, n, r, c) {
  let a = Q(e.tool_name, c);
  if (a === void 0 || !P(e.tool_input)) {
    let u = {
      members: N
    }, i = V(e.tool_input, `${o}/tool_input`, n, r, u, !0);
    return "tool_response" in e ? {
      ...e,
      tool_input: i,
      tool_response: V(e.tool_response, `${o}/tool_response`, n, r, u, !1)
    } : {
      ...e,
      tool_input: i
    };
  }
  let m = a.input === void 0 ? e.tool_input : C(e.tool_input, a.input, `${o}/tool_input/${a.input}`, n, r);
  if (!("tool_response" in e)) return {
    ...e,
    tool_input: S(m, `${o}/tool_input`, n, r, {
      members: N
    })
  };
  let s = e.tool_response;
  for (let u of a.responseMembers ?? []) s = C(s, u, `${o}/tool_response/${u}`, n, r);
  for (let [u, i] of a.responseNested ?? []) if (P(s) && P(s[u])) s = {
    ...s,
    [u]: C(s[u], i, `${o}/tool_response/${u}/${i}`, n, r)
  };
  for (let u of a.responseArrays ?? []) s = he(s, u, `${o}/tool_response/${u}`, n, r);
  let h = {
    members: N
  };
  return {
    ...e,
    tool_input: S(m, `${o}/tool_input`, n, r, h),
    tool_response: S(s, `${o}/tool_response`, n, r, h)
  };
}

function O1o(e, o, n, r) {
  let c = {
    paths: {},
    untranslated: [],
    listed: new Set
  }, a = Z(e.cwd) ? null : q(e.cwd, o);
  if (a === null) v(c, "/cwd");
  let m = a ?? Tfn(o.deviceLaunchDir), s = {
    ...e,
    cwd: m,
    transcript_path: X
  };
  if ("agent_transcript_path" in s) s = {
    ...s,
    agent_transcript_path: X
  };
  switch (s.hook_event_name) {
   case "PreToolUse":
   case "PostToolUse":
   case "PostToolUseFailure":
   case "PermissionDenied":
    s = x(s, "", o, c, r);
    break;

   case "PermissionRequest":
    if (s = x(s, "", o, c, r), s.permission_suggestions !== void 0) v(c, "/permission_suggestions");
    break;

   case "PostToolBatch":
    s = {
      ...s,
      tool_calls: s.tool_calls.map((u, i) => x(u, `/tool_calls/${i}`, o, c, r))
    };
    break;

   default:
    break;
  }
  let h = {
    id: n.cloudSessionId,
    container_cwd: o.containerCwd,
    container_project_dir: o.containerProjectDir,
    device_launch_dir: o.deviceLaunchDir,
    original: {
      cwd: e.cwd,
      transcript_path: e.transcript_path,
      ..."agent_transcript_path" in e && {
        agent_transcript_path: e.agent_transcript_path
      },
      paths: c.paths
    }
  };
  return {
    input: {
      ...s,
      cloud_session: h
    },
    untranslated: c.untranslated
  };
}

import { readlink as ke, realpath as be } from "fs/promises";

import { posix as w } from "path";

var ee = 3, ge = 64, re = [ "PreToolUse", "PostToolUse", "PostToolUseFailure", "UserPromptSubmit" ], te = [ ...re, "PostToolBatch", "UserPromptExpansion", "Stop" ];

function ie() {
  let e = !1, o = null, n = 0, r = !1, c = 0, a = new Set;
  return {
    skipped({event: m, agentId: s, machine: h, inTurn: u}, i) {
      if (!e) e = !0, r = !1, c = 0;
      let p = s ?? "main", f = u && o !== i && s === void 0 && te.includes(m), g = u && (r || n < ee) && !a.has(p) && (s === void 0 || c < ge) && oe(m, "Hooks that run on the user's own machine are paused because it did not answer in time. Tool calls proceed without them. If the user asks whether their hooks ran, say they were paused.");
      if (f) o = i;
      if (g) a.add(p), c += s === void 0 ? 0 : 1, n += r ? 0 : 1, r = !0;
      return {
        ...f && {
          systemMessage: `Paused hooks from "${h}" because it did not answer in time. Tool calls continue without them.`
        },
        ...g && {
          hookSpecificOutput: g
        }
      };
    },
    answered({event: m, agentId: s, machine: h, inTurn: u}, i) {
      if (e = !1, !u || Jy(i)) return i;
      let p = s ?? "main", f = o !== null && s === void 0 && te.includes(m), g = a.has(p) && oe(m, `Hooks from a machine the user attached are running.${n >= ee ? " Later changes are not announced." : ""}`);
      if (!f && !g) return i;
      if (f) o = null;
      if (g) a.delete(p);
      let k = i.hookSpecificOutput, _ = k !== void 0 && "additionalContext" in k ? k.additionalContext : void 0;
      return {
        ...i,
        ...f && {
          systemMessage: ne(i.systemMessage, `Resumed hooks from "${h}".`)
        },
        ...g && {
          hookSpecificOutput: {
            ...g,
            ...k,
            additionalContext: ne(_, g.additionalContext)
          }
        }
      };
    }
  };
}

function oe(e, o) {
  let n = re.find(r => r === e);
  return n && {
    hookEventName: n,
    additionalContext: o
  };
}

function ne(e, o) {
  return e === void 0 ? o : `${e}\n${o}`;
}

var _e = 1044480, c3n = {
  PreToolUse: 15,
  PostToolUse: 15,
  PostToolUseFailure: 15,
  PostToolBatch: 15,
  PermissionDenied: 15,
  SubagentStart: 15,
  UserPromptSubmit: 30,
  UserPromptExpansion: 30,
  Stop: 120,
  StopFailure: 120,
  SubagentStop: 120
}, we = 5e3, ye = 30;

function ae(e) {
  return (e.timeoutS ?? c3n[e.event]) * 1e3 + we;
}

function Pe(e) {
  return Math.ceil(ae(e) / 1e3) + ye;
}

function zKs(e) {
  let o = e.install ?? BDn, n = e.remove ?? jDn, r = e.absence ?? ie(), c = new Set, a = () => e.registry.current()?.displayName ?? "the attached machine", m = (u, i, p) => c.has(u) ? p : (c.add(u), 
  {
    ...p,
    systemMessage: i
  }), s = (u, i, p = {}) => e.telemetry.forwarded({
    event: u.event,
    outcome: i,
    fieldsDropped: p.fieldsDropped ?? !1,
    blocked: p.blocked ?? !1,
    rttMs: p.rttMs ?? 0,
    errorRepliesIgnored: p.errorRepliesIgnored ?? 0,
    malformedRepliesIgnored: p.malformedRepliesIgnored ?? 0
  }), h = (u, i, p = e.registry.generation()) => async (f, g, k, _, y) => {
    let j = () => {
      let b = e.registry.current();
      return b !== null && b.instanceId === u && e.now() < b.leaseExpiresAt && b.entries.some(A => A.id === i.id);
    };
    if (!j()) return s(i, "owner_gone"), {};
    if (e.registry.isAway(u)) return s(i, "away_skipped"), se({}, () => r.skipped({
      event: i.event,
      agentId: f.agent_id,
      machine: a(),
      inTurn: y !== void 0
    }, u));
    let T = null, B = 0, W = !1;
    try {
      let b = Ic(f);
      W = !await Re(b, e.toolAliases(), {
        realpath: e.realpath ?? Se,
        readlink: e.readlink ?? ve
      }), B = Buffer.byteLength(zge(b), "utf8"), T = b;
    } catch {}
    let H = B > _e;
    if (T === null || H) return t(`Device hook ${i.id}: input ${H ? "exceeds what the device accepts" : "is not plain serialisable data"}; not forwarded`, {
      level: "warn"
    }), s(i, H ? "input_too_large" : "input_unclonable"), i.event === "PreToolUse" ? {
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason: `[hook on ${e.registry.current()?.displayName ?? "your machine"}]: not run \u2014 the tool call ${H ? "is too large to forward to the attached machine; retry with a smaller input" : "could not be forwarded to the attached machine; retry with plain input"}`
      }
    } : {};
    if (W) return s(i, "input_unresolvable"), i.event === "PreToolUse" ? {
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason: `[hook on ${e.registry.current()?.displayName ?? "your machine"}]: not run \u2014 the path this tool call names could not be resolved for the attached machine; retry with a plain path`
      }
    } : {};
    if (Xms(T, e.toolAliases())) return s(i, "after_edit_held"), {};
    let J;
    try {
      let b = e.now(), A = a(), M = ae(i), R = e.sender.sendDeviceHookCallback({
        callbackId: i.id,
        input: T,
        toolUseID: g,
        issuedAt: b,
        deadlineMs: M,
        ...k !== void 0 && {
          signal: k
        }
      }), le = new Promise(ue => {
        J = e.setTimer(() => ue("deadline"), M);
      }), F = await Promise.race([ R.reply, le ]), O = {
        rttMs: e.now() - b,
        errorRepliesIgnored: R.errorRepliesIgnored(),
        malformedRepliesIgnored: R.malformedRepliesIgnored()
      };
      if (F === "deadline") {
        if (e.registry.recordMiss(u, p), R.reply.catch(() => {}), R.cancel(), s(i, "deadline", O), 
        p !== e.registry.generation()) return {};
        return m(`deadline:${i.event}`, `A ${i.event} hook on ${A} did not answer within ${Math.round(M / 1e3)}s; continuing without it. If it keeps missing, hooks from that machine pause until it registers again.`, {});
      }
      if ("malformed" in F) return s(i, "malformed", O), {};
      if (!j()) return s(i, "owner_gone", O), {};
      e.registry.recordHit(u);
      let {answer: I, report: G} = Yce(F.answer, i.event);
      if (s(i, "answered", {
        ...O,
        fieldsDropped: G.dropped.length > 0 || G.truncated.length > 0,
        blocked: Jy(I)
      }), e.registry.isAway(u)) return I;
      let ce = {
        event: i.event,
        agentId: T.agent_id,
        machine: A,
        inTurn: y !== void 0
      };
      return se(I, () => r.answered(ce, I));
    } catch (b) {
      if (Ve(b)) throw s(i, "aborted"), b;
      return t(`Device hook ${i.id}: forwarding failed internally: ${l(b)}`, {
        level: "error"
      }), s(i, "internal_error"), {};
    } finally {
      J?.clear();
    }
  };
  return {
    forwardToDevice: h,
    installForOwner(u) {
      c.clear();
      let i = e.registry.generation(), p = {};
      for (let f of u.entries) {
        let g = p[f.event] ?? [];
        g.push({
          ...f.matcher !== void 0 && {
            matcher: f.matcher
          },
          hooks: [ {
            type: "callback",
            timeout: Pe(f),
            callback: h(u.instanceId, f, i)
          } ]
        }), p[f.event] = g;
      }
      o(u.instanceId, p, "forwarded");
    },
    removeForOwner(u) {
      n(u, "forwarded");
    }
  };
}

function se(e, o) {
  try {
    return o();
  } catch (n) {
    return d(Error("Device hooks: the away notice failed internally", {
      cause: n
    })), e;
  }
}

function GKs(e, o) {
  let n = setTimeout(e, o);
  return n.unref(), {
    clear: () => clearTimeout(n)
  };
}

var Se = e => be(e), ve = e => ke(e), Te = 40;

async function Re(e, o, n) {
  let r = "tool_calls" in e && Array.isArray(e.tool_calls) ? e.tool_calls : [ e ], c = !0;
  for (let a of r) {
    let m = De(a, o);
    if (m !== null && !await Ee(m, n)) c = !1;
  }
  return c;
}

function De(e, o) {
  if (typeof e !== "object" || e === null || !("tool_name" in e) || typeof e.tool_name !== "string") return null;
  let n = "tool_input" in e ? e.tool_input : void 0;
  if (typeof n !== "object" || n === null) return null;
  let r = Afn(e.tool_name, o);
  if (r === void 0) return null;
  let c = n, a = c[r];
  return typeof a === "string" && w.isAbsolute(a) ? {
    fields: c,
    member: r,
    value: a
  } : null;
}

async function Ee({fields: e, member: o, value: n}, r) {
  let c = w.normalize(n), a = [];
  for (let m = 0; m <= Te; m++) try {
    let s = await r.realpath(c), h = a.length === 0 ? s : w.join(s, ...a);
    if (h !== n) e[o] = h;
    return !0;
  } catch {
    let s = await r.readlink(c).catch(() => null);
    if (s !== null) {
      let u = w.dirname(c), i = await r.realpath(u).catch(() => u);
      c = w.normalize(w.join(w.resolve(i, s), ...a)), a = [];
      continue;
    }
    let h = w.dirname(c);
    if (h === c) return !0;
    a.unshift(w.basename(c)), c = h;
  }
  return !1;
}

export { Tfn, rBt, oBt, P1o, I1o, qWe, Afn, O1o, c3n, zKs, GKs };
