// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { x, E } from "./chunk-b0z4bv3v.js";

import { nb } from "./chunk-nvtwm272.js";

import { he } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { Nw, fI, fje } from "./chunk-60c97a4m.js";

import { hA } from "./chunk-9yajep3y.js";

import { p } from "./chunk-jkzenvsk.js";

import { Dp, Zv } from "./chunk-fwpqj1qs.js";

import { bV } from "./chunk-3cd32ngx.js";

import { pi } from "./chunk-s2t7g8m9.js";

import { L } from "./chunk-vh1p9t2h.js";

import { o, M, u, _t, A } from "./chunk-cvcg6n1z.js";

import { zXe } from "./chunk-wmrc6pz1.js";

var rRt = 6e5;

function Z3(e) {
  if (e?.kind !== "task-notification") return e;
  let n = bV(e.runId);
  return {
    kind: "task-notification",
    ...e.subkind !== void 0 && {
      subkind: e.subkind
    },
    ...e.fireReason !== void 0 && {
      fireReason: e.fireReason
    },
    ...e.producer !== void 0 && {
      producer: e.producer
    },
    ...n !== void 0 && {
      runId: n
    }
  };
}

function qW(e, n, r) {
  let t = Z3(e) ?? (n === "task-notification" ? {
    kind: "task-notification"
  } : void 0), i = bV(r);
  return i !== void 0 && t?.kind === "task-notification" && t.runId === void 0 ? {
    ...t,
    runId: i
  } : t;
}

function Sce(e) {
  return e?.kind === "task-notification" && e.producer === "session-task";
}

function rbe(e) {
  return e?.kind === "task-notification" && Object.keys(e).every(n => n === "kind" || n === "producer" || n === "runId");
}

function h(e, n) {
  let r = e.type === "attachment" ? e.attachment : void 0;
  if (typeof r !== "object" || r === null || !("type" in r) || r.type !== "queued_command") return;
  let t = Reflect.get(r, n);
  return typeof t === "string" && t ? t : void 0;
}

function H8t(e) {
  return h(e, "source_uuid");
}

function obe(e) {
  let {submitUuid: n} = e, r = H8t(e) ?? (e.type === "system" && typeof n === "string" ? n : void 0);
  return r ? [ e.uuid, r ] : [ e.uuid ];
}

function BMn(e) {
  return e.type === "user" ? D8t(e.droppedPromptUuids) : [];
}

function D8t(e) {
  return Array.isArray(e) ? e.filter(n => typeof n === "string" && n !== "") : [];
}

function eso(e, n) {
  let r = e.findIndex(t => t.uuid === n);
  return r !== -1 ? r : e.findIndex(t => H8t(t) === n);
}

function uN(e, n) {
  return O(e, {
    udsInboxEnabled: typeof n === "boolean" ? n : !0
  });
}

function O(e, {udsInboxEnabled: n}) {
  if (e?.kind === "channel") return !0;
  if (e?.kind === "observer") return !0;
  if (e?.kind === "observer-activity") return !0;
  if (e?.kind === "slack-ping") return !0;
  if (e?.kind === "peer") {
    if (e.senderTaskId !== void 0) return !0;
    if (n) return !0;
  }
  return !1;
}

import { constants as _ } from "fs";

import { open as T, readdir as fe, rm as le, stat as pe } from "fs/promises";

async function ics(e, n, r) {
  if (z() && r !== void 0) return R(r, n);
  let t;
  try {
    t = await T(e, _.O_WRONLY | _.O_APPEND);
  } catch (i) {
    let s = E(i);
    if (s === "ENOENT" || s === "ENOTDIR") return !1;
    throw i;
  }
  try {
    let {size: i} = await t.stat();
    if (i === 0) return !1;
    let s = void 0, d = Buffer.from(n, "utf8"), a = 0;
    while (a < d.length) {
      let {bytesWritten: c} = await t.write(d, a, d.length - a, s);
      if (c <= 0) throw new x(`tryAppend: short write to ${e} stalled with ${d.length - a} bytes remaining`, "tryAppend: zero-progress short write");
      if (a += c, s !== void 0) s += c;
    }
    return !0;
  } finally {
    await t.close();
  }
}

async function R({backend: e, key: n}, r) {
  let t = await e.append(n, [ {
    data: r
  } ], {
    precondition: {
      type: "ifExists",
      nonEmpty: !0
    }
  });
  if (!t.ok) {
    if (t.error.code === "NotFound") return !1;
    throw Error("Session append: transcript not writable via storage", {
      cause: t.error
    });
  }
  return !0;
}

import { constants as y } from "fs";

import { open as P } from "fs/promises";

import { dirname as k, join as N } from "path";

var g = '"type":"continued-in"', v = p(() => _t({
  type: A("continued-in"),
  continuedInSessionId: o()
})), C = p(() => _t({
  type: A("assistant"),
  isApiErrorMessage: M().optional(),
  message: _t({
    stop_reason: o().nullish()
  }).optional()
}));

function qst(e, {canFork: n} = {
  canFork: !0
}) {
  if (e.provable) return `Your most recent conversation is running in the background (session ${e.sessionId}). Use \`claude agents\` to find and attach to it, or \`claude --resume\` to pick another session.`;
  let r = n ? ", or add --fork-session to branch off a copy" : "";
  return `Your most recent conversation moved to a background session (${e.sessionId}) registered from another machine or container, so this one can't tell whether it is still running. Use \`claude --resume\` to pick a session${r}.`;
}

function acs(e, n) {
  return {
    type: "continued-in",
    timestamp: (new Date).toISOString(),
    sessionId: e,
    continuedInSessionId: n
  };
}

function jMn(e) {
  if (!e.includes(g)) return;
  let n = e.length;
  while (n > 0) {
    let r = e.lastIndexOf(`\n`, n - 1), t = e.slice(r + 1, n);
    n = r;
    let i = t.includes(g), s = t.includes('"type":"user"') || t.includes('"type":"assistant"');
    if (i || s) try {
      let d = JSON.parse(t);
      if (i) {
        let a = v().safeParse(d);
        if (a.success) return fI(a.data.continuedInSessionId) ?? void 0;
      }
      if (s && I(d)) return;
    } catch {}
    if (r < 0) break;
  }
  return;
}

function I(e) {
  let n = C().safeParse(e);
  if (n.success) return n.data.isApiErrorMessage !== !0 && typeof n.data.message?.stop_reason === "string";
  return L(e) && zXe(e, {
    commandFallback: ""
  }) !== void 0;
}

async function lcs(e, n, r) {
  let t = N(k(e), `${n}.jsonl`), i = await fje(t, Zv(Dp(t, r)));
  return i !== null && await L8t(t, i.head, i.tail, i.size, r);
}

var f = '"parentUuid":', D = 16777216, w = 1048576;

async function L8t(e, n, r, t, i) {
  if (n.includes(f) || r.includes(f)) return !0;
  if (t <= Nw) return !1;
  if (Dp(e, i) !== void 0) return !0;
  try {
    let d = await P(e, y.O_RDONLY | y.O_NOFOLLOW | y.O_NONBLOCK);
    try {
      if (!(await d.stat()).isFile()) return !1;
      let a = Buffer.allocUnsafe(w + f.length), c = 0, m = 0;
      while (m < D) {
        let {bytesRead: S} = await d.read(a, c, w, m);
        if (S === 0) return !1;
        let l = c + S;
        if (a.subarray(0, l).includes(f)) return !0;
        c = Math.min(f.length, l), a.copyWithin(0, l - c, l), m += S;
      }
      return !0;
    } finally {
      await d.close();
    }
  } catch {
    return !1;
  }
}

import { readFile as U } from "fs/promises";

import { dirname as j, join as F } from "path";

var B = p(() => u({
  customTitle: o()
}));

function WMn(e, n) {
  return F(j(e), n, "custom-title.json");
}

async function dcs(e, n, r) {
  let t = await W(WMn(e, n), r);
  if (t === void 0) return;
  let i;
  try {
    i = JSON.parse(t);
  } catch {
    return;
  }
  let s = B().safeParse(i);
  if (!s.success) return;
  return pi(s.data.customTitle) || void 0;
}

async function W(e, n) {
  if (z() && n !== void 0) try {
    let r = hA(e);
    if (r !== void 0) {
      let t = await n.readText([ r ]);
      if (!t.ok) return;
      let i = t.value.items[0];
      return i.found ? i.value : void 0;
    }
  } catch {
    return;
  }
  if (he()) return;
  try {
    return await U(e, "utf8");
  } catch {
    return;
  }
}

var tbe = "2025-11-25", ICe = "2026-07-28", zre = "reopen_refetch", Zqe = "before_handler", NMn = 4096, ecs = 16384, nRt = "The tool call was interrupted before a result was received. It may or may not have completed on the server \u2014 verify before assuming it succeeded, and retry if needed.", tcs = 1e3, vmr = "The outcome is unknown: the call may have finished, may still be running, or may never have started. Check what it did before you repeat it.";

function $Mn(e, n) {
  return `MCP server "${e}" never answered tool "${n}". ${vmr}`;
}

var ncs = "mcp_answer_stream_ended", rcs = "mcp_call_not_sent_again", FMn = "mcp_call_unanswered", eY = 16777216, GQ = 5, G = 1e3, K = 3e4, ocs = 1e4;

function Kst(e) {
  return nb({
    attempt: e,
    baseMs: G,
    capMs: K
  });
}

var UMn = 8, Zoo = 3e4, scs = 3e5, M8t = "inode/directory";

function nbe(e) {
  return e.replace(/[^\x20-\x7e]/g, "").slice(0, 32);
}

var e4e = "Tool permission request failed", tso = "Tool permission stream closed before response received", Emr = "Stream closed", We = [ `${e4e}: AbortError: ${tso}`, `${e4e}: AbortError: ${Emr}`, e4e ];

class QE {
  returned;
  queue=[];
  readResolve;
  readReject;
  isDone=!1;
  hasError;
  started=!1;
  constructor(e) {
    this.returned = e;
  }
  get ended() {
    return this.isDone;
  }
  [Symbol.asyncIterator]() {
    if (this.started) throw Error("Stream can only be iterated once");
    return this.started = !0, this;
  }
  next() {
    if (this.queue.length > 0) return Promise.resolve({
      done: !1,
      value: this.queue.shift()
    });
    if (this.isDone) return Promise.resolve({
      done: !0,
      value: void 0
    });
    if (this.hasError) return Promise.reject(this.hasError);
    return new Promise((e, n) => {
      this.readResolve = e, this.readReject = n;
    });
  }
  enqueue(e) {
    if (this.readResolve) {
      let n = this.readResolve;
      this.readResolve = void 0, this.readReject = void 0, n({
        done: !1,
        value: e
      });
    } else this.queue.push(e);
  }
  done() {
    if (this.isDone = !0, this.readResolve) {
      let e = this.readResolve;
      this.readResolve = void 0, this.readReject = void 0, e({
        done: !0,
        value: void 0
      });
    }
  }
  error(e) {
    if (this.hasError = e, this.readReject) {
      let n = this.readReject;
      this.readResolve = void 0, this.readReject = void 0, n(e);
    }
  }
  return() {
    if (this.isDone = !0, this.returned) this.returned();
    return Promise.resolve({
      done: !0,
      value: void 0
    });
  }
}

export { tbe, ICe, zre, Zqe, NMn, ecs, nRt, tcs, vmr, $Mn, ncs, rcs, FMn, eY, GQ, ocs, Kst, UMn, Zoo, scs, M8t, nbe, Z3, qW, Sce, rbe, rRt, H8t, obe, BMn, D8t, eso, ics, qst, acs, jMn, lcs, L8t, WMn, dcs, e4e, tso, Emr, QE, uN };
