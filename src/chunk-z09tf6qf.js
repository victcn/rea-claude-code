// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.299
import { Vt } from "./chunk-vxr6sv7z.js";

import { K, eo, B, q, ic, Uj, VG, lLo, Mf, wae, cg, oFt, tcn } from "./chunk-3pqddg8f.js";

import { z } from "./chunk-bmq0vae0.js";

import { b, c, pe, vl, Cn } from "./chunk-hwdwjvh8.js";

import { x, Je, j, l, E, zr, ug, Gme, W } from "./chunk-b0z4bv3v.js";

import { J } from "./chunk-nvtwm272.js";

import { Cs, WC } from "./chunk-ddr690nj.js";

import { _, Y, Ou, Jgt, ds, t } from "./chunk-kawq2919.js";

import { ne, BG } from "./chunk-5wbhf1bk.js";

import { d } from "./chunk-6ah1819r.js";

import { tY } from "./chunk-am6xk4a3.js";

import { mr, Fe } from "./chunk-0cdqg49t.js";

import { i } from "./chunk-hedpgw9m.js";

import { ls, iL, OG, Tn } from "./chunk-30n0xq4e.js";

import { a } from "./chunk-j016gcgm.js";

import { BV, XRe } from "./chunk-7j9be257.js";

import { nus, rus, Nmr, LCe, QQ } from "./chunk-dvddkg0s.js";

import { p } from "./chunk-jkzenvsk.js";

import { V0 } from "./chunk-3kb22va7.js";

import { kve, Ev } from "./chunk-znhtg8e4.js";

import { P$e } from "./chunk-yrmy36g6.js";

import { POe } from "./chunk-60c97a4m.js";

import { Ife } from "./chunk-nnrb0acr.js";

import { $w } from "./chunk-x5881pc6.js";

import { e9t } from "./chunk-84awyg1r.js";

import { wZ, It, zko, $Rr, i_ } from "./chunk-xywp7esx.js";

import { Ja } from "./chunk-2msx6erf.js";

import { fu } from "./chunk-1z2heevg.js";

import { Oe } from "./chunk-cjt10y7b.js";

import { pi } from "./chunk-s2t7g8m9.js";

import { rct } from "./chunk-4y2m4xpx.js";

import { hut, zse } from "./chunk-akt0hp0c.js";

import { Aa } from "./chunk-sre9xcbd.js";

import { Hfe } from "./chunk-3kd8r7rn.js";

import { cXe, o, v, M, oe, T, u, _t, $e, Kr, ue, U, A } from "./chunk-cvcg6n1z.js";

import { Mg } from "./chunk-j7qcpyv8.js";

import { O } from "./chunk-1xnsr4dy.js";

import { Zf, yt } from "./chunk-9zhz923g.js";

var pt = new Set([ "EBUSY", "EMFILE", "ENFILE", "EAGAIN", "EINTR" ]);

function XQ(e) {
  if (e === void 0) return !1;
  return pt.has(e) || e === "EPERM" && O() === "windows";
}

function Mmr(e) {
  return e.code === "Unavailable" || "telemetryCode" in e && XQ(e.telemetryCode);
}

var mt = "To reattach to a cloud session, pass its id: `claude --cloud <session-id>` (find IDs at claude.ai/code).";

function Zcs() {
  return !1;
}

function Lso(e) {
  let n = "Error: ", r = "--cloud", s = `\n${mt}`;
  if (e.hasPool || e.hasEnvironmentQuery) {
    let f = g4e(e.isChosenByNoMonorepo === !0);
    n = f.prefix, r = f.flag, s = "";
  }
  if (e.print && !e.hasPool && !e.isCloudAttach && !e.headlessCloudPrint) {
    if (e.loneWordValue !== void 0) return `Error: --cloud ${wRt(e.loneWordValue)} is not a cloud session ID or URL.\nWith --print, --cloud sends the prompt to an existing cloud session: pass its ID (session_... or cse_...) or its claude.ai/code URL. To start a new cloud session from a description instead, drop --print.`;
    return `Error: ${r} cannot be combined with --print.\nStarting a new cloud session with ${r} is interactive only: drop --print, or drop ${r} to run locally. To message an existing cloud session instead, pass its ID: \`claude -p "message" --cloud <session-id>\` (find IDs at claude.ai/code).`;
  }
  if (e.nonInteractive && !e.hasPool && !e.isCloudAttach && !e.headlessCloud && !e.headlessCloudPrint) {
    if (e.loneWordValue !== void 0) return `Error: --cloud ${wRt(e.loneWordValue)} is not a cloud session ID or URL.\nWithout an interactive terminal, --cloud can only send the prompt to an existing cloud session: pass its ID (session_... or cse_...) or its claude.ai/code URL. To start a new cloud session, run from a TTY.`;
    return `Error: ${r} requires an interactive terminal.\nNon-interactive invocations (piped stdout, --init-only, --sdk-url) run locally and would silently ignore ${r}. Drop ${r}, or run from a TTY.`;
  }
  if (e.continue) return `${n}${r} cannot be combined with --continue.${s}`;
  if (e.hasConnect || e.hasSSH || e.hasAssistant || e.hasTeleport) {
    let f = e.hasConnect ? "a cc:// connect URL" : e.hasSSH ? "`claude ssh`" : e.hasAssistant ? "`claude assistant`" : "--teleport";
    return `${n}${r} cannot be combined with ${f} \u2014 both select a remote backend; pick one.`;
  }
  if (e.resume || e.fromPr) {
    let f = e.resume ? "--resume" : "--from-pr";
    return `${n}${r} cannot be combined with ${f}.${s}`;
  }
  return null;
}

function eus(e) {
  return !e.print && !e.initOnly && e.nonInteractive && !e.hasSdkUrl && e.inputFormat === "stream-json" && e.outputFormat === "stream-json";
}

function tus(e) {
  return e.print && !e.initOnly && !e.hasSdkUrl && e.outputFormat !== "stream-json";
}

function Nso(e) {
  if (e.some(n => n === "--environment" || n.startsWith("--environment=") || n === "--pool" || n.startsWith("--pool="))) return "--bg and --environment are different backends. Use `claude -p '<task>' --environment <id>` directly to start a session on the environment.";
  return "--bg and --cloud are different backends. Use `claude --cloud '<task>'` directly to start a cloud session.";
}

function g4e(e) {
  return {
    prefix: "Error: ",
    flag: "--environment"
  };
}

function $so(e) {
  if (e.some(n => n === "--environment" || n.startsWith("--environment=") || n === "--pool" || n.startsWith("--pool="))) return !0;
  return e.some(n => n === "--cloud" || n.startsWith("--cloud=") || n === "--remote" || n.startsWith("--remote="));
}

function iit(e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (s === "--") {
      for (let f = r; f < e.length; f++) n.push(e[f]);
      break;
    }
    if (s.startsWith("--environment=") || s.startsWith("--pool=")) continue;
    if (s === "--environment" || s === "--pool") {
      if (e[r + 1] !== void 0 && !e[r + 1].startsWith("-")) r++;
      continue;
    }
    n.push(s);
  }
  return n;
}

var gt = 100;

function wRt(e) {
  let n = ne(e, gt);
  return Jgt(_(n.length < e.length ? `${n}\u2026` : n));
}

import { lstat as re, mkdir as Pe, readdir as Gt, readFile as ge, rm as ce, stat as Cr } from "fs/promises";

import { basename as X, dirname as Ht, isAbsolute as it, join as H, relative as Kt } from "path";

function De(e) {
  if (e === void 0 || !e.kinds.includes("session_cron")) return !1;
  let n = e.wake;
  if (n === void 0) return !0;
  return n.fires >= 1 && n.keepalive !== !0;
}

function s4e(e) {
  if (!e || e.length === 0) return "";
  return e.map(n => {
    let r = `${n.id ?? n.label}:${n.doneAt ?? "-"}:${n.failed ? "x" : ""}`;
    return n.kind === "todo" ? `${r}:${n.startedAt ?? "-"}` : r;
  }).join("|");
}

function cRt() {
  let {tasks: e, queued: n, kinds: r, drainableMonitors: s, wake: f} = Yst();
  return {
    tasks: e,
    queued: n,
    kinds: r,
    ...s !== void 0 && {
      drainableMonitors: s
    },
    ...f !== void 0 && {
      wake: f
    }
  };
}

function hso(e) {
  tY().publishInFlightSnapshot(e);
}

function Yst() {
  let e = tY().inFlightSnapshot, n = cg().length;
  if (n === 0) return {
    ...e
  };
  let r = ht();
  return {
    ...e,
    tasks: e.tasks + n,
    kinds: [ ...e.kinds, "session_cron" ],
    ...r !== void 0 && {
      wake: r
    }
  };
}

function ht() {
  let e = cg().find(n => n.kind === "loop");
  if (e === void 0) return;
  return {
    at: e.scheduledFor,
    reason: e.reason,
    fires: oFt(),
    ...e.keepalive && {
      keepalive: !0
    }
  };
}

function Gcs(e) {
  let n = tY().inFlightSnapshotChanged.subscribe(e), r = tcn(() => {
    try {
      e();
    } catch {}
  });
  return () => {
    n(), r();
  };
}

import { lstat as vt, mkdir as Ot, readFile as Pt, rename as Tt, rm as Ye } from "fs/promises";

import { dirname as xt } from "path";

function Ne(e) {
  return e;
}

function Le(e) {
  return Ne(new Set(e));
}

function Vcs(e) {
  let n = new Set, r = s => {
    if (Array.isArray(s)) s.forEach(r); else if (typeof s === "object" && s !== null) {
      let {properties: f} = s;
      if (typeof f === "object" && f !== null) for (let m of Object.keys(f)) n.add(m);
      Object.values(s).forEach(r);
    }
  };
  try {
    r(cXe(e, {
      unrepresentable: "any"
    }));
  } catch {}
  return Ne(n);
}

function Rmr(e, n) {
  let r;
  return Cn((e ?? []).map(s => typeof s === "number" || typeof s === "string" && (r ??= n()).has(s) ? String(s) : "*").join("."));
}

import { delimiter as Me, isAbsolute as bt } from "path";

var _e = [ "shell", "slash", "fleet", "spare", "respawn" ];

function Kcs(e) {
  return _e.includes(e);
}

var Xd = 1, W8t = 1, XM = /^[a-f0-9]{8}$/, qcs = /^[a-f0-9]{32}$/, St = [ "failed", "taken", "ended" ], wt = /^(?:cse|session)_[A-Za-z0-9_-]{1,128}$/;

function je(e) {
  return !BG.test(e);
}

var VQ = "\x1b_cc-daemon-detach\x1b\\", ae = "\x1b\\", ze = "\x1b_cc-detach-msg;", tHn = "\x1b_cc-daemon-hint\x1b\\";

function Xst(e) {
  return tHn + e + tHn;
}

var fe = "\x1b_cc-d-imark;", kt = Buffer.from(fe, "latin1");

function xmr(e) {
  return fe + _(e) + ae;
}

function yso(e, n, r) {
  let s = r?.maxPayload ?? 512, f = e.length > 0 ? Buffer.concat([ e, n ]) : n, m = [], g = [], S = 0, y = 0, h = -1, w = !1;
  for (;;) {
    let R = f.indexOf(fe, y);
    if (R < 0) break;
    let N = R + fe.length, k = w ? -1 : h >= N ? h : h = f.indexOf(ae, N);
    if (k < 0) {
      w = !0;
      let G = f.subarray(R);
      if (G.length > fe.length + s) {
        y = N;
        continue;
      }
      let V = !1;
      for (let ie = N; ie < f.length; ie++) {
        let Re = f[ie];
        if (Re === 24 || Re === 26 || Re === 27 && ie < f.length - 1) {
          V = !0;
          break;
        }
      }
      if (V) {
        y = N;
        continue;
      }
      return g.push(f.subarray(S, R)), {
        marks: m,
        carry: Buffer.from(G),
        cleaned: g.length === 1 ? g[0] : Buffer.concat(g)
      };
    }
    let L = !1;
    if (k - N <= s) try {
      let G = Y(f.subarray(N, k).toString("utf8"));
      if (G !== null && typeof G === "object" && (G.kind === "content_paint" || G.kind === "prompt_idle")) {
        if (L = !0, r?.requireNonce === void 0 || G.nonce === r.requireNonce) m.push({
          kind: G.kind,
          msgsLoaded: Jst(G.msgsLoaded),
          msgsInJsonl: Jst(G.msgsInJsonl),
          msgsRenderedAtFirstPaint: Jst(G.msgsRenderedAtFirstPaint)
        });
      }
    } catch {}
    if (L) g.push(f.subarray(S, R)), S = k + ae.length;
    y = L ? k + ae.length : N;
  }
  let C = f.subarray(y), D = kt, P = 0, I = Math.min(C.length, D.length - 1);
  e: for (let R = I; R > 0; R--) {
    let N = C.length - R;
    for (let k = 0; k < R; k++) if (C[N + k] !== D[k]) continue e;
    P = R;
    break;
  }
  return g.push(f.subarray(S, f.length - P)), {
    marks: m,
    carry: P > 0 ? Buffer.from(C.subarray(C.length - P)) : Buffer.alloc(0),
    cleaned: g.length === 1 ? g[0] : Buffer.concat(g)
  };
}

function Jst(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 0 && e <= We ? e : void 0;
}

var We = 1e9, se = () => v().int().nonnegative().max(We).optional(), Et = p(() => u({
  kind: U([ "content_paint", "prompt_idle" ]),
  msgsLoaded: se(),
  msgsInJsonl: se(),
  msgsRenderedAtFirstPaint: se()
})), At = p(() => _t({
  kind: U([ "content_paint", "prompt_idle" ]),
  msgsLoaded: se(),
  msgsInJsonl: se(),
  msgsRenderedAtFirstPaint: se()
}));

function _so(e) {
  let n = At().safeParse(e);
  if (!n.success) return null;
  return {
    kind: n.data.kind,
    msgsLoaded: n.data.msgsLoaded,
    msgsInJsonl: n.data.msgsInJsonl,
    msgsRenderedAtFirstPaint: n.data.msgsRenderedAtFirstPaint
  };
}

function Gre(e) {
  if (!e) return VQ;
  return ze + e + ae + VQ;
}

function bso(e) {
  let n = e.indexOf(ze);
  if (n < 0) return;
  let r = n + ze.length, s = e.indexOf(ae, r);
  if (s < 0) return;
  return e.subarray(r, s).toString("utf8");
}

function Ue(e, n) {
  let r = {};
  for (let [s, f] of Object.entries(Nmr(e, n))) r[s] = s.toUpperCase() === "CLAUDE_CODE_PLUGIN_DIRS" ? f.split(Me).map(m => WC(m.trim())).join(Me) : f;
  return r;
}

var nHn = p(() => u({
  proto: v().int().min(W8t).max(Xd),
  short: o().regex(XM),
  nonce: o().regex(XM).optional(),
  sessionId: o().transform(WC),
  createdAt: v(),
  source: U(_e).catch("fleet"),
  cwd: o().transform(WC),
  launch: Kr("mode", [ u({
    mode: A("prompt"),
    args: T(o()).transform(QQ),
    restoresTranscript: M().optional()
  }), u({
    mode: A("resume"),
    sessionId: o().transform(WC),
    transcriptPath: o().transform(WC).optional(),
    fork: M(),
    flagArgs: T(o()).transform(QQ),
    restoresTranscript: M().optional()
  }), u({
    mode: A("exec"),
    cmd: o().transform(WC),
    args: T(o()).transform(e => e.map(WC))
  }) ]),
  env: ue(o(), o()).default({}).transform(e => Ue(e, "the background job's launch request")),
  reattachEnv: ue(o(), o()).transform(e => Ue(e, "the launch request's reattach values")).optional(),
  worktree: u({
    path: o().transform(WC),
    ownershipToken: o()
  }).optional(),
  isolation: U([ "none", "worktree" ]).default("none"),
  respawnFlags: T(o()).default([]).transform(QQ),
  attachStallRespawns: v().int().optional(),
  agent: o().optional(),
  routine: o().optional(),
  seed: u({
    intent: o(),
    name: o().optional()
  }).optional(),
  cols: v().int().positive().max(XRe).optional(),
  rows: v().int().positive().max(XRe).optional()
})), uRt = /ERESPAWNING|ESTARTING/, pRt = /\bE(?:NOENT|CONNREFUSED|CONNRESET)\b|control socket closed/, Qst = "ERESPAWNING", fRt = "updated Claude Code", i4e = "stalled", z8t = "legacy", mRt = "EHOSTDEAD", yNe = "terminal host process died \u2014 press Enter to restart", a4e = "This session's terminal host process died (the conversation is saved)", gRt = "terminal host process died \u2014 its output is gone; the command was not run again", l4e = "This command's terminal host process died \u2014 its output is gone and the command was not run again", hRt = /ESTALLED|EUNVERIFIED|EHOSTDEAD/, d4e = /^EKICKED:\s*/, Sso = "Session opened in another window";

function rHn(e, n, r) {
  return n !== void 0 && qcs.test(n) ? `${e}:${n}: ${r}` : `${e}: ${r}`;
}

var yRt = /^E[A-Z]+:/;

function be() {
  return o().refine(V0, "remote IPC path");
}

var Ge = p(() => _t({
  pid: v(),
  procStart: o().optional(),
  sessionId: o().transform(WC),
  rendezvousSock: be(),
  ptySock: be().optional(),
  messagingSock: be().optional(),
  cliVersion: o().optional(),
  startedAt: v(),
  attempt: v(),
  cwd: o().transform(WC),
  worktreePath: o().transform(WC).optional(),
  dispatch: nHn(),
  pendingRespawn: A("upgrade").optional(),
  decModes: T(v()).optional(),
  firedInteractiveMarks: T(oe()).transform(e => {
    let n = [];
    for (let r of e) {
      let s = Et().safeParse(r);
      if (s.success) n.push(s.data);
    }
    return n.slice(0, 2);
  }).optional().catch(void 0),
  rvAuth: o().optional(),
  ptyAuth: o().optional(),
  replPid: v().optional(),
  replProcStart: o().optional()
}));

function Pmr(e) {
  let n = Ge().shape, r = {};
  for (let [s, f] of Object.entries(e)) if (!(s in n)) r[s] = f;
  return r;
}

var Ycs = p(() => _t({
  proto: v().int().min(W8t).max(Xd),
  supervisorPid: v().catch(0),
  updatedAt: v().catch(0),
  workers: ue(o().regex(XM), Ge())
})), wso = p(() => {
  let e = o().regex(XM), n = v().int().min(W8t).max(Xd);
  return Kr("op", [ u({
    proto: n,
    op: A("ping")
  }), u({
    proto: n,
    op: A("nudge")
  }), u({
    proto: n,
    op: A("yield")
  }), u({
    proto: n,
    op: A("lease"),
    client: _Ne().optional()
  }), u({
    proto: n,
    op: A("leases")
  }), u({
    proto: n,
    op: A("await-ack"),
    short: e,
    nonce: e.optional(),
    timeoutMs: v()
  }), u({
    proto: n,
    op: A("dispatch"),
    d: nHn(),
    timeoutMs: v(),
    auth: o().optional()
  }), u({
    proto: n,
    op: A("list")
  }), u({
    proto: n,
    op: A("has"),
    short: e
  }), u({
    proto: n,
    op: A("kill"),
    short: e,
    signal: U([ "SIGTERM", "SIGKILL" ]).optional(),
    handoff: M().optional(),
    evict: M().optional()
  }), u({
    proto: n,
    op: A("reply"),
    short: e,
    text: o(),
    auth: o().optional(),
    nextTurn: M().optional()
  }), u({
    proto: n,
    op: A("subscribe"),
    short: e,
    tail: v().optional()
  }), u({
    proto: n,
    op: A("attach"),
    short: e,
    auth: o().optional(),
    cols: v().int().min(1).max(XRe),
    rows: v().int().min(1).max(XRe),
    attachId: o().optional(),
    caps: u({
      imark: M().optional(),
      terminal: o().nullable(),
      mux: U([ "tmux", "screen", "zellij" ]).nullable(),
      ssh: M(),
      wheelFlood: M().optional(),
      hyperlinks: M().optional(),
      progressReporting: M().optional(),
      wtSession: M().optional(),
      isVscodeTerm: M().optional(),
      keyDialect: U([ "st", "rxvt" ]).nullable().optional().catch(void 0),
      browser: o().nullable().optional(),
      colorLevel: $e([ A(0), A(1), A(2), A(3) ]).optional(),
      syncOutput: M().optional(),
      editor: o().nullable().optional(),
      systemTheme: U([ "dark", "light" ]).optional(),
      tmuxSocket: be().refine(bt).optional().catch(void 0),
      sessionTabs: o().regex(qcs).optional().catch(void 0),
      tabsLanding: u({
        why: U(St),
        from: o().regex(XM)
      }).optional().catch(void 0)
    }).optional(),
    holdingFrame: M().optional()
  }), u({
    proto: n,
    op: A("resize"),
    short: e,
    cols: v().int().min(1).max(XRe),
    rows: v().int().min(1).max(XRe),
    attachId: o().optional()
  }), u({
    proto: n,
    op: A("ensure-spare"),
    cwd: o()
  }), u({
    proto: n,
    op: A("permission-response"),
    short: e,
    requestId: o(),
    allow: M(),
    auth: o().optional()
  }), u({
    proto: n,
    op: A("respawn-stale"),
    short: e
  }), u({
    proto: n,
    op: A("shutdown"),
    reapWorkers: M().optional()
  }) ]);
}), _Ne = p(() => u({
  label: o().max(64).refine(je),
  cwd: o().max(4096).refine(je).catch("(not shown)"),
  pid: v().int().positive().catch(0),
  cloudSessionId: o().regex(wt).optional().catch(void 0)
})), vso = p(() => u({
  ok: A(!0),
  op: A("lease")
})), Rt = [ "upgrade", "service_recall", "displaced", "yield", "shutdown_op", "idle_exit", "bg_manager_failed", "signal", "unknown" ], Eso = p(() => u({
  op: A("lease"),
  closing: U(Rt)
})), c4e = "cloud session", oHn = [ "cli-bg-dispatch", "claude agents", c4e ];

import { lstat as zt } from "fs/promises";

async function Imr(e) {
  try {
    let n = await zt(e);
    return n.isFile() ? {
      kind: "proceed"
    } : {
      kind: "refused",
      symlink: n.isSymbolicLink()
    };
  } catch (n) {
    return W(n) ? {
      kind: "proceed"
    } : {
      kind: "error",
      error: n
    };
  }
}

function Omr(e) {
  return e?.code === "Failed" && (e.telemetryCode === "ENXIO" || e.telemetryCode === "EFBIG" || e.telemetryCode === "ELOOP" || e.telemetryCode === "ENAMETOOLONG");
}

var Ct = Le([ "proto", "supervisorPid", "updatedAt", "workers", "pid", "procStart", "sessionId", "rendezvousSock", "ptySock", "messagingSock", "rvAuth", "ptyAuth", "replPid", "replProcStart", "cliVersion", "startedAt", "attempt", "cwd", "worktreePath", "dispatch", "pendingRespawn", "decModes", "firedInteractiveMarks", "kind", "msgsLoaded", "msgsInJsonl", "msgsRenderedAtFirstPaint", "short", "restoresTranscript", "nonce", "createdAt", "cols", "rows", "source", "launch", "mode", "args", "fork", "flagArgs", "cmd", "env", "reattachEnv", "worktree", "path", "ownershipToken", "isolation", "respawnFlags", "seed", "intent", "name", "agent", "routine", "attachStallRespawns" ]), ve = 8388608;

function _Rt() {
  return Fe.daemon([ "roster.json" ]);
}

function Q() {
  return {
    proto: Xd,
    supervisorPid: process.pid,
    updatedAt: Date.now(),
    workers: {}
  };
}

async function i0(e, n) {
  if (n) {
    let {roster: s, inspectFailed: f} = await Xe(n, e);
    return f ? {
      ...s,
      inspectFailed: !0
    } : s;
  }
  let r;
  try {
    let s = await vt(BV());
    if (!s.isFile() || s.size > ve) {
      if (!e?.silent) if (d(Error(`roster.json ${s.isFile() ? `too large (${s.size} bytes) \u2014 quarantining` : "is not a regular file \u2014 removing"}`)), 
      i("tengu_bg_roster_parse_failed", {
        orphaned: -1,
        quarantined: 1,
        errCode: s.isFile() ? b("E2BIG") : b("EFTYPE")
      }), s.isFile()) await me(void 0); else await Ye(BV(), {
        recursive: !0,
        force: !0
      }).catch(f => d(f));
      return {
        ...Q(),
        parseFailed: !0
      };
    }
    r = Y(await Pt(BV(), "utf8"));
  } catch (s) {
    if (W(s)) return Q();
    if (!e?.silent) d(Je(j(s), "bg roster.json read/parse failed")), i("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: ug(s)
    }), await me(void 0);
    return {
      ...Q(),
      parseFailed: !0
    };
  }
  return Ve(r, e, void 0);
}

async function Ve(e, n, r) {
  let s;
  try {
    s = Ycs().safeParse(e);
  } catch (f) {
    if (!n?.silent) d(f), i("tengu_bg_roster_parse_failed", {
      orphaned: qe(e),
      quarantined: 1,
      errCode: ug(f)
    }), await me(r);
    return {
      ...Q(),
      parseFailed: !0
    };
  }
  if (s.success) {
    delete s.data.parseFailed, delete s.data.inspectFailed;
    let f = e, m = [ "supervisorPid", "updatedAt" ].filter(g => !Number.isFinite(f[g]));
    if (m.length > 0 && !n?.silent) t(`[daemon] roster.json stamp field(s) healed on read: ${m.join(", ")}`, {
      level: "warn"
    }), i("tengu_bg_roster_parse_failed", {
      orphaned: 0,
      quarantined: 0,
      issuePath: vl(m),
      issueCode: b("healed_stamp")
    });
    return s.data;
  }
  if (!n?.silent) {
    let f = qe(e), m = s.error.issues[0];
    d(Error(`roster.json parse failed at ${Ke(m?.path) || "<root>"} (orphaning ${f} worker(s)): ${m?.message}`)), 
    i("tengu_bg_roster_parse_failed", {
      orphaned: f,
      quarantined: 1,
      issuePath: Ke(m?.path),
      issueCode: pe(m?.code)
    }), await me(r);
  }
  return {
    ...Q(),
    parseFailed: !0
  };
}

async function me(e) {
  if (!e) {
    await Tt(BV(), `${BV()}.corrupt.${Date.now()}`).catch(r => d(r));
    return;
  }
  let n = await e.move(_Rt(), Fe.daemon([ `roster.json.corrupt.${Date.now()}` ])).catch(() => {});
  if (n === void 0 || !n.ok) d(new x(`roster quarantine v5 move failed: ${n === void 0 ? "threw" : yt(n.error)}`, "roster quarantine v5 move failed"));
}

async function Ft(e) {
  await Ye(e, {
    recursive: !0,
    force: !0
  }).catch(n => d(n));
}

async function He(e, n, r, s) {
  if (!n?.silent) d(r), i("tengu_bg_roster_parse_failed", {
    orphaned: -1,
    quarantined: 1,
    errCode: b(s)
  }), await Bt(e);
  return {
    ...Q(),
    parseFailed: !0
  };
}

async function Xe(e, n) {
  let r = await Imr(BV());
  if (r.kind === "refused") {
    if (!n?.silent) d(Error("roster.json is not a regular file \u2014 removing")), i("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: b("EFTYPE")
    }), await Ft(BV());
    return {
      roster: {
        ...Q(),
        parseFailed: !0
      },
      inspectFailed: !1
    };
  }
  if (r.kind === "error") return Ze(n, Je(j(r.error), "bg roster.json read/parse failed"), ug(r.error));
  return Dt(e, n);
}

function Ze(e, n, r) {
  if (!e?.silent) d(n), i("tengu_bg_roster_parse_failed", {
    orphaned: -1,
    quarantined: 0,
    errCode: r
  });
  return {
    roster: {
      ...Q(),
      parseFailed: !0
    },
    inspectFailed: !0
  };
}

async function Dt(e, n) {
  let r = await e.read([ {
    key: _Rt(),
    offset: 0,
    length: ve + 1
  } ]).catch(() => {});
  if (r === void 0 || !r.ok) {
    if (r !== void 0 && Omr(r.error)) return {
      roster: await He(e, n, new x(`bg roster.json v5 read refused: ${r.error.telemetryCode} \u2014 removing`, "bg roster.json v5 read refused \u2014 removing"), "EV5READ"),
      inspectFailed: !1
    };
    return Ze(n, new x(`bg roster.json v5 read failed: ${r?.error.code ?? "threw"}`, "bg roster.json v5 read failed"), b("EV5READ"));
  }
  let s = r.value.items[0];
  if (!s.found) return {
    roster: Q(),
    inspectFailed: !1
  };
  if (s.totalBytes > ve) return {
    roster: await He(e, n, new x(`roster.json too large (${s.totalBytes} bytes) \u2014 removing`, "roster.json too large \u2014 removing"), "E2BIG"),
    inspectFailed: !1
  };
  let f;
  try {
    f = Y(Buffer.from(s.value).toString("utf8"));
  } catch (m) {
    if (!n?.silent) d(Je(j(m), "bg roster.json read/parse failed")), i("tengu_bg_roster_parse_failed", {
      orphaned: -1,
      quarantined: 1,
      errCode: ug(m)
    }), await me(e);
    return {
      roster: {
        ...Q(),
        parseFailed: !0
      },
      inspectFailed: !1
    };
  }
  return {
    roster: await Ve(f, n, e),
    inspectFailed: !1
  };
}

async function Bt(e) {
  let n = await e.delete(_Rt()).catch(() => {});
  if (n === void 0 || !n.ok) d(new x(`roster quarantine v5 delete failed: ${n?.error.code ?? "threw"}`, "roster quarantine v5 delete failed"));
}

function Ke(e) {
  return Rmr(e, () => Ct);
}

function XA(e) {
  return XM.test(e) ? Cn(e) : b("invalid");
}

function qe(e) {
  let n = e !== null && typeof e === "object" ? e.workers : void 0;
  return n !== null && typeof n === "object" && !Array.isArray(n) ? Object.keys(n).length : 0;
}

async function Nt(e, n) {
  let {parseFailed: r, inspectFailed: s, ...f} = e;
  if (n) {
    let g = await n.write(_Rt(), _(f, null, 2), {
      mode: 384
    });
    if (!g.ok) {
      let S = g.error, y = "telemetryCode" in S ? S.telemetryCode : void 0;
      if (y !== void 0 && Gme.has(y)) {
        t(`[daemon] roster write failed: ${y}`, {
          level: "error"
        });
        return;
      }
      throw new x(`roster v5 write failed: ${S.code}`, "roster v5 write failed");
    }
    return;
  }
  let m = BV();
  await Ot(xt(m), {
    recursive: !0,
    mode: 448
  }).catch(() => {}), await Tn(m, _(f, null, 2), 384).catch(g => {
    let S = E(g);
    if (S && Gme.has(S)) {
      t(`[daemon] roster write failed: ${S}`, {
        level: "error"
      });
      return;
    }
    throw g;
  });
}

var Lt = Mg();

function KQ(e, n) {
  return Lt.run("roster", async () => {
    let r = await Mt(n), s = e(r) ?? r;
    s.supervisorPid = process.pid, s.updatedAt = Date.now(), await Nt(s, n);
  });
}

async function Mt(e) {
  if (!e) return i0();
  let n = await Xe(e);
  if (n.inspectFailed) throw new x("bg roster.json update skipped: the file could not be inspected", "bg roster.json update skipped: the file could not be inspected");
  return n.roster;
}

async function sHn(e, n) {
  if (!Aa(e)) return "dead_pid";
  if (!await Ev(e, n)) return "procstart_mismatch";
  if (await kve(e)) return "zombie";
  return "live";
}

async function G8t(e, n) {
  return await sHn(e, n) === "live";
}

var jt = /^-|^[A-Za-z][A-Za-z0-9+.-]+:\/\//;

function qQ(e) {
  return !jt.test(e) && !e.includes("\0");
}

function kso() {
  let e = ic();
  if (e === void 0 || Oe() === "mantle") return;
  if (e === null) return "default";
  if (!e) return;
  if (wZ(It(e))) return;
  if (Uj()?.fallbackModel === e) return;
  if (!qQ(e)) return;
  return e;
}

function Qe(e) {
  let n = e.trim().toLowerCase();
  return n === "default" || Hfe(n);
}

function Xcs() {
  return VG().includes("--restricted");
}

function Tce(e, n, {carryModel: r = !0} = {}) {
  let s = Se(e.additionalWorkingDirectories, [ "cliArg" ]), f = [], m = VG();
  for (let P = 0; P < m.length; P++) {
    let I = m[P];
    if (I === "--add-dir") P++; else if (!r && I === "--fallback-model") {
      let R = (m[P + 1] ?? "").split(",").map(N => N.trim()).filter(N => Qe(N));
      if (P++, R.length > 0) f.push("--fallback-model", R.join(","));
    } else if (I !== void 0) f.push(I);
  }
  let g = rct(n), S = Ut(), y = kso(), h = y !== void 0 && (r || Qe(y)) ? y : void 0, w = e.isBypassPermissionsModeAvailable && !f.includes("--allow-dangerously-skip-permissions"), C = lLo(), D = wae();
  return [ ...[], ...[], ...f, ...D === void 0 ? [] : [ D ? "--chrome" : "--no-chrome" ], ...w ? [ "--allow-dangerously-skip-permissions" ] : [], ...s.flatMap(P => [ "--add-dir", P ]), ...h !== void 0 ? [ "--model", h ] : [], ...g !== void 0 ? [ "--effort", g ] : [], ...S !== void 0 ? [ "--fast-mode", S ] : [], "--permission-mode", e.mode ];
}

function Ut() {
  let e = $w("--fast-mode");
  if (e !== "on" && e !== "off") return;
  let n = Mf()?.fastMode;
  return typeof n === "boolean" ? n ? "on" : "off" : e;
}

function Tso(e) {
  let n = fu([ e ]);
  return n.length === 1 && n[0] === e && qQ(e);
}

function YQ(e, n) {
  return [ ...n ? [ `launch flags: ${e9t}` ] : [], ...(e.alwaysDenyRules.session ?? []).length > 0 || (e.alwaysAskRules.session ?? []).length > 0 ? [ "permission rules set for this session only" ] : [], ...(e.alwaysAskRules.cliArg ?? []).length > 0 ? [ "ask-before-running rules with no command-line form" ] : [], ...[ ...e.alwaysAllowRules.cliArg ?? [], ...e.alwaysDenyRules.cliArg ?? [] ].some(r => !Tso(r)) ? [ "permission rules a command line cannot carry intact" ] : [], ...Se(e.additionalWorkingDirectories, [ "cliArg" ]).some(r => !qQ(r)) ? [ "added directories a command line cannot carry intact" ] : [] ];
}

function Ace(e, n) {
  return [ ...(e.alwaysAllowRules.cliArg ?? []).flatMap(r => [ "--allowed-tools", r ]), ...(e.alwaysDenyRules.cliArg ?? []).flatMap(r => [ "--disallowed-tools", r ]), ...eE("--agent", n.agent), ...eE("--agents", n.agents), ...eE("--append-system-prompt", n.appendSystemPrompt), ...eE("--system-prompt-snapshot", V8t(n.systemPromptSnapshot)) ];
}

function eE(e, n) {
  if (!n) return [];
  return qQ(n) ? [ e, n ] : [ `${e}=${n}` ];
}

function V8t(e) {
  return e === void 0 ? void 0 : e ? "on" : "off";
}

function Se(e, n) {
  return Array.from(e.values()).filter(r => n.includes(r.source)).filter(r => !Cs(r.path)).map(r => r.path);
}

function K8t(e) {
  return zse({
    ...hut(VG()).config,
    addDir: et(e),
    settingSources: Ife()
  });
}

function Jcs(e, n) {
  return [ ...$t(e), ...et(n).flatMap(r => [ "--add-dir", r ]) ];
}

function $t(e) {
  let n = [], r = !1;
  for (let s of e) if (r) r = !1; else if (s === "--add-dir") r = !0; else n.push(s);
  return n;
}

function et(e) {
  return Se(e, [ "cliArg" ]).filter(qQ);
}

function iHn(e) {
  return Se(e, [ "session" ]).filter(qQ);
}

var Aso = "CLAUDE_RELAUNCH_SESSION_ADD_DIRS";

function Zst(e) {
  let n = iHn(e);
  return n.length > 0 ? {
    [Aso]: _(n)
  } : {};
}

function Qcs(e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (s === "--channels") {
      r++;
      continue;
    }
    if (s.startsWith("--channels=")) continue;
    n.push(s);
  }
  return n;
}

var JM = "(ungrouped)", JA = "(earlier)", Jt = 64, Wt = new Set([ "pinned", "ungrouped", JM, "past", JA ]);

function q8t(e) {
  return Wt.has(e.toLowerCase());
}

function Hmr(e) {
  return Ou(e).slice(0, Jt);
}

function ye(e) {
  if (e === void 0) return;
  let n = Hmr(e);
  return n && !q8t(n) ? n : void 0;
}

class tt {
  #e=new Map;
  #t=new Set;
  #n=new Set;
  #r=new Set;
  #o=new Set;
  peek(e) {
    return this.#e.get(e);
  }
  invalidate(e) {
    this.#e.delete(e);
  }
  noteAbsent(e) {
    this.#e.delete(e), this.#t.delete(e);
  }
  noteRejected(e, n) {
    this.#e.set(e, {
      mtimeKey: n,
      state: null
    });
  }
  noteParsed(e, n, r) {
    if (this.#e.size > 1e3) this.#e.clear();
    this.#e.set(e, {
      mtimeKey: n,
      state: r
    }), this.#t.delete(e);
  }
  noteHit(e) {
    this.#t.delete(e);
  }
  shouldReportTransient(e) {
    if (this.#t.has(e)) return !1;
    return this.#t.add(e), !0;
  }
  shouldReportRecovered(e) {
    if (this.#n.has(e)) return !1;
    return this.#n.add(e), !0;
  }
  noteCleanRead(e) {
    this.#n.delete(e);
  }
  shouldReportPruned(e) {
    if (this.#r.has(e)) return !1;
    return this.#r.add(e), !0;
  }
  notePruneCandidateLive(e) {
    this.#r.delete(e);
  }
  shouldLogSidecarFallback(e) {
    if (this.#o.has(e)) return !1;
    return this.#o.add(e), !0;
  }
}

var nt = new K(() => new tt);

class rt {
  drafts=new Map;
  pins=new Map;
}

var Amr = new K(() => new rt);

async function Cmr(e, n, {cap: r, screens: s, screenKey: f, heal: m}) {
  if (s.get(f) !== "ok") {
    let y = await e.statMeta(n);
    if (!y.ok) {
      if (y.error.code !== "NotFound") s.set(f, "refused"), await (m?.());
      return null;
    }
    if (y.value.size > r) return s.set(f, "refused"), null;
    s.set(f, "ok");
  }
  let g = await e.readText([ {
    key: n,
    offset: 0,
    length: r + 1
  } ]);
  if (!g.ok) return s.delete(f), await (m?.()), null;
  let S = g.value.items[0];
  if (!S.found) return null;
  if (S.totalBytes > r) return s.set(f, "refused"), null;
  return S.value;
}

var de = () => o().transform(WC), at = /^[a-f0-9]{8}$/, qt = /^(cse_|session_)[A-Za-z0-9_-]{1,128}$/;

function le(e, n) {
  return r => {
    if (n(r)) return r;
    t(`[jobs] dropped malformed ${e} from persisted job state`, {
      level: "warn"
    });
    return;
  };
}

var we = p(() => u({
  state: o(),
  detail: o(),
  tempo: U([ "active", "idle", "blocked" ]).optional().catch(void 0),
  inFlight: u({
    tasks: v(),
    queued: v(),
    kinds: T(o()),
    drainableMonitors: v().int().nonnegative().optional(),
    wake: u({
      at: v().optional(),
      reason: o().optional(),
      fires: v().int().nonnegative(),
      keepalive: A(!0).optional()
    }).optional().catch(void 0)
  }).optional(),
  selfWake: M().optional().catch(void 0),
  fan: T(u({
    id: o().optional(),
    kind: U([ "agent", "workflow", "shell", "monitor", "mcp", "todo" ]).optional().catch(void 0),
    label: o(),
    startedAt: v().optional(),
    doneAt: v().optional(),
    failed: M().optional(),
    group: o().optional()
  })).optional(),
  tokens: v().optional(),
  needs_you: M().optional(),
  needs: o().optional(),
  block: u({
    questions: T(u({
      question: o(),
      options: T(u({
        label: o(),
        description: o()
      }))
    }))
  }).optional(),
  suggestedReply: o().optional(),
  needsOverlay: o().optional(),
  output: ue(o(), o()).nullable().default(null),
  structuredResult: ue(o(), oe()).optional(),
  children: T(u({
    id: o(),
    href: o(),
    kind: U([ "pr", "frame" ]).optional().catch(void 0),
    title: o().optional().catch(void 0)
  })).nullable().default(null),
  linkScanOffset: v().default(0),
  linkScanPath: de().transform(le("linkScanPath", e => it(e) && e.endsWith(".jsonl") && Vt(X(e, ".jsonl")) !== null)).optional(),
  template: o(),
  routine: o().optional(),
  respawnFlags: T(o()).default([]).transform(e => QQ(LCe(e))),
  bgIsolation: U([ "none", "worktree" ]).optional().catch(void 0),
  providerEnv: ue(o(), o()).transform(e => {
    let n = rus(eo(e, WC));
    return n && Nmr(n, "the saved job state (state.json providerEnv)");
  }).optional(),
  sessionPermissionRules: u({
    allow: T(o()),
    deny: T(o()),
    addDirs: T(de()).optional()
  }).optional(),
  memoryToggledOff: M().optional(),
  autoMemoryOffThisSession: M().optional(),
  forkSourceAlive: M().optional(),
  forkBoundaryAt: o().optional(),
  forkSessionId: o().optional(),
  forkParentSessionId: o().optional(),
  interactiveLineage: M().optional(),
  intent: o(),
  displayIntent: o().optional(),
  initialPrompt: o().optional(),
  queuedPrompt: o().optional(),
  name: o().optional(),
  nameSource: U([ "user", "auto", "collision" ]).optional().catch(void 0),
  color: o().optional(),
  sessionId: de(),
  resumeSessionId: o().transform(le("resumeSessionId", e => Vt(e) !== null)).optional(),
  daemonShort: o().transform(le("daemonShort", e => at.test(e))).optional(),
  cliVersion: o().optional(),
  cwd: de(),
  createdAt: o(),
  updatedAt: o(),
  firstTerminalAt: o().nullable().default(null),
  lastTerminalAt: o().optional(),
  worktreePath: de().optional(),
  worktreeBranch: o().optional(),
  worktreeHookBased: M().optional(),
  originCwd: de().optional(),
  bridgeSessionId: o().transform(le("bridgeSessionId", e => qt.test(e))).optional(),
  bridgeOwnerAccountUuid: o().optional(),
  bridgeOwnerOrganizationUuid: o().optional(),
  bridgeNoHistoryBackfill: M().optional(),
  bridgeOutboundOnly: M().optional(),
  bridgeSessionGroupingId: o().transform(le("bridgeSessionGroupingId", e => /^sgrp_[A-Za-z0-9_]{1,128}$/.test(e))).optional(),
  bridgeSessionSeq: v().transform(le("bridgeSessionSeq", e => Number.isInteger(e) && e >= 0)).optional(),
  backend: U([ "daemon", "peer", "remote" ]).catch("daemon").default("daemon").transform(e => {
    if (e === "daemon") return e;
    return t(`[jobs] coerced persisted backend '${e}' to 'daemon' \u2014 peer/remote rows are never written to disk`, {
      level: "warn"
    }), "daemon";
  }),
  sock: o().optional(),
  pid: v().optional(),
  keptBy: u({
    pid: v().int().positive(),
    procStart: o().max(64).optional()
  }).optional(),
  sortOrder: v().optional(),
  stateSortOrder: v().optional(),
  group: o().optional(),
  pinned: M().optional(),
  reapedMidWorkAt: o().optional(),
  reapedUnsettledAt: o().optional(),
  deadEpochReapedAt: o().optional(),
  sessionIdTaken: M().optional().catch(void 0),
  replayOwed: M().optional().catch(void 0)
}).transform(({needs_you: e, ...n}) => {
  let r = n.bridgeOwnerAccountUuid !== void 0 && !POe(n.bridgeOwnerAccountUuid) || n.bridgeOwnerOrganizationUuid !== void 0 && !POe(n.bridgeOwnerOrganizationUuid), s = n.tempo ?? (e ? "blocked" : "idle");
  return {
    ...n,
    ...r && {
      bridgeOwnerAccountUuid: void 0,
      bridgeOwnerOrganizationUuid: void 0
    },
    tempo: s,
    ...n.lastTerminalAt === void 0 && R_(n.state) !== null && s !== "active" && {
      lastTerminalAt: n.firstTerminalAt || n.updatedAt
    }
  };
})), te = "state.json", Z = 8388608;

function QM() {
  return zko();
}

function to(e) {
  return H(QM(), e);
}

function ym() {
  let e = a.CLAUDE_JOB_DIR;
  if (e) return X(e);
  let n = i_();
  if (n) return X(n.jobDir);
  return q().slice(0, 8);
}

function st(e, n) {
  return mr(e) ? Fe.job(e, n) : void 0;
}

function eit(e, n) {
  return $Rr(e, n);
}

function tit(e) {
  return Fe.job(e, [ te ]);
}

function Cso(e, n) {
  let r = H(to(e), te), s = !1, f = Number.NaN;
  function m(w) {
    if (s) return;
    if (Number.isNaN(f)) {
      f = w;
      return;
    }
    if (w === f) return;
    h(), n();
  }
  function g() {
    re(r).then(w => m(w.mtimeMs), () => m(-1));
  }
  g();
  let S = setInterval(g, 200), y = setTimeout(h, 1e4);
  function h() {
    if (s) return;
    s = !0, clearInterval(S), clearTimeout(y);
  }
  return h;
}

function Dmr() {
  return tY().ownStateWriteDepth > 0;
}

async function Rl(e, n, r) {
  let s = n.inFlight?.kinds.includes("session_cron") === !0, f = s && !n.selfWake && De(n.inFlight) ? {
    ...n,
    selfWake: !0
  } : !s && n.selfWake && da(n) ? {
    ...n,
    selfWake: void 0
  } : n, g = da(f) ? f.lastTerminalAt ? f : {
    ...f,
    lastTerminalAt: f.updatedAt
  } : f.lastTerminalAt !== void 0 ? {
    ...f,
    lastTerminalAt: void 0
  } : f, {pinned: S, sortOrder: y, stateSortOrder: h, group: w, ...C} = g, D = r ? eit(e, [ te ]) : void 0, P = tY();
  P.ownStateWriteDepth++;
  try {
    if (r && D) {
      let I = await r.write(D, _(C, null, 2), {
        mode: 384,
        parent: "mustExist"
      });
      if (!I.ok) {
        let R = Zf(I.error);
        throw Object.assign(new x(`[jobs] v5 state write failed: ${yt(I.error)}`, "[jobs] v5 state write failed"), R !== void 0 ? {
          code: R
        } : {});
      }
    } else await Tn(H(e, te), _(C, null, 2), 384);
  } finally {
    P.ownStateWriteDepth--, Lp(e);
  }
}

function ol(e) {
  let n = E(e);
  if (n && (Gme.has(n) || n === "ENOENT")) {
    t(`[jobs] state write failed (${n}): ${l(e)}`, {
      level: "error"
    });
    return;
  }
  d(e);
}

function Y8t(e, n) {
  let r = n !== void 0 && n.id === e?.bridgeSessionId;
  return {
    ownerAccountUuid: r ? n.ownerAccountUuid : void 0,
    ownerOrganizationUuid: r ? n.ownerOrganizationUuid : void 0,
    noHistoryBackfill: e?.noHistoryBackfill || (n !== void 0 && !r ? !0 : n?.noHistoryBackfill)
  };
}

function Vre(e, n, r, s, f) {
  if (!e) return;
  let m = {
    CLAUDE_BRIDGE_REATTACH_SESSION: e
  };
  if (n !== void 0 && n > 0) m.CLAUDE_BRIDGE_REATTACH_SEQ = String(n);
  if (s) m.CLAUDE_BRIDGE_REATTACH_GROUPING = s;
  if (f?.ownerAccountUuid) m.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT = f.ownerAccountUuid;
  if (f?.ownerOrganizationUuid) m.CLAUDE_BRIDGE_REATTACH_OWNER_ORG = f.ownerOrganizationUuid;
  if (f?.noHistoryBackfill) m.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL = "1";
  if (r !== !1) m.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY = "1";
  return m;
}

function F() {
  return nt.of(B().host);
}

function ke(e, n) {
  return n?.onReadFailure === "null" ? null : e?.state ?? null;
}

var Yt = [ 15, 45 ], Xt = new Set([ "ELOOP", "ENXIO", "EISDIR" ]);

function Ee(e) {
  if (e.code !== "Failed" || e.telemetryCode === void 0) return;
  if (e.telemetryCode === "EFBIG") return "oversize";
  return Xt.has(e.telemetryCode) ? "non-regular" : void 0;
}

function dt(e) {
  return e.code === "Failed" && e.key !== void 0 && e.key.namespace === "job" && e.key.relPath[0] !== te;
}

var Zt = new Set([ "invariant", "permission", "environment" ]);

function Qt(e) {
  if (e.code === "Unavailable") return !0;
  return e.code === "Failed" && !Zt.has(e.failureClass) && Ee(e) === void 0 && !dt(e);
}

async function en(e, n) {
  let r = await n(), s = 1;
  for (let f of Yt) {
    if (r.ok || !Qt(r.error)) break;
    await J(f), r = await n(), s++;
  }
  if (r.ok) {
    if (s === 1) F().noteCleanRead(e); else if (F().shouldReportRecovered(e)) i("tengu_bg_state_read_recovered", {
      attempts: s
    });
  }
  return r;
}

function ot(e, n, r) {
  let s = F().peek(e);
  if (!(s?.mtimeKey.startsWith("rejected:") && s.state === null)) t(`[jobs] skipping ${X(e)}: state.json is ${r}`, {
    level: "warn"
  });
  return F().noteRejected(e, `rejected:${n}`), null;
}

function Lp(e) {
  F().invalidate(e);
}

async function tn(e, n, r) {
  let s = X(n), f = F().peek(n);
  if (f === void 0 || f.mtimeKey.startsWith("rejected:")) {
    let k = await e.statMeta(tit(s));
    if (!k.ok) {
      if (k.error.code === "NotFound") return Ae(n, r);
      let L = Ee(k.error);
      if (L !== void 0) return ot(n, L, L === "oversize" ? "too large" : "not a regular file");
    } else if (k.value.size > Z) {
      let L = `rejected:${k.value.mtimeMs}:${k.value.size}`;
      if (F().peek(n)?.mtimeKey !== L) t(`[jobs] skipping ${X(n)}: state.json is too large (${k.value.size} bytes)`, {
        level: "warn"
      }), F().noteRejected(n, L);
      return null;
    }
  }
  let m = tit(s), S = await en(n, () => e.read([ m, Fe.job(s, [ "order" ]), Fe.job(s, [ "stateOrder" ]), Fe.job(s, [ "group" ]) ]));
  if (!S.ok && dt(S.error)) {
    if (F().shouldLogSidecarFallback(n)) t(`[jobs] ${X(n)}: a sidecar could not be read as a regular file; using state.json alone`);
    let k = await e.read([ m ]);
    S = k.ok ? {
      ok: !0,
      value: {
        items: [ k.value.items[0], {
          found: !1
        }, {
          found: !1
        }, {
          found: !1
        } ]
      }
    } : k;
  }
  let y = F().peek(n);
  if (!S.ok) {
    let k = Ee(S.error);
    if (k !== void 0) return ot(n, k, k === "oversize" ? "too large" : "not a regular file");
    if (t(`[jobs] ${X(n)}: v5 state read failed \u2014 ${S.error.code}`, {
      level: "warn"
    }), F().shouldReportTransient(n)) i("tengu_bg_state_read_transient", {
      errno: c(S.error.code),
      had_cache: y !== void 0
    });
    return ke(y, r);
  }
  let [h, w, C, D] = S.value.items;
  if (!h.found) return Ae(n, r);
  if (h.totalBytes > Z) {
    let k = `rejected:${h.mtimeMs}:${h.totalBytes}`;
    if (y?.mtimeKey === k) return null;
    return t(`[jobs] skipping ${X(n)}: state.json is too large (${h.totalBytes} bytes)`, {
      level: "warn"
    }), F().noteRejected(n, k), null;
  }
  let P = k => Buffer.from(k.value.buffer, k.value.byteOffset, k.value.byteLength).toString("utf-8"), I = k => k.found && k.totalBytes <= Z ? P(k) : null, R = k => k.found && k.totalBytes <= Z ? k.version : 0, N = `v5:${h.version}:${R(w)}:${R(C)}:${R(D)}`;
  if (y?.mtimeKey === N) return F().noteHit(n), y.state;
  return nn(n, N, P(h), I(w), I(C), I(D), y, r);
}

function nn(e, n, r, s, f, m, g, S) {
  try {
    let y = Y(r), h = we().safeParse(y);
    if (!h.success) return t(`[jobs] skipping ${X(e)}: state.json schema validation failed \u2014 ${h.error.message}`, {
      level: "warn"
    }), F().noteRejected(e, n), null;
    let w = s !== null ? Number(s) : void 0, C = f !== null ? Number(f) : void 0, D = we().in.shape, P = y !== null && typeof y === "object" ? Object.entries(y).filter(([R]) => !Object.hasOwn(D, R)) : [], I = {
      ...Object.fromEntries(P),
      ...h.data
    };
    if (Number.isFinite(w)) I = {
      ...I,
      sortOrder: w
    };
    if (Number.isFinite(C)) I = {
      ...I,
      stateSortOrder: C
    };
    if (m !== null && m.trim()) I = {
      ...I,
      group: m.trim()
    };
    if (I.group !== void 0) I = {
      ...I,
      group: ye(I.group)
    };
    return F().noteParsed(e, n, I), I;
  } catch (y) {
    if (t(`[jobs] ${X(e)}: state.json read/parse failed \u2014 ${y instanceof Error ? y.message : String(y)}`, {
      level: "warn"
    }), F().shouldReportTransient(e)) i("tengu_bg_state_read_transient", {
      errno: zr(y) ?? b("unknown"),
      had_cache: g !== void 0
    });
    return ke(g, S);
  }
}

function Ae(e, n) {
  return F().noteAbsent(e), n?.onAbsent?.(), null;
}

async function Rso(e, n) {
  return Te(e, n, {
    onReadFailure: "null"
  });
}

async function Yr(e, n) {
  return Te(e, n, void 0);
}

async function xso(e, n) {
  let r = {
    absent: !1
  }, s = await Te(e, n, {
    onAbsent: () => {
      r.absent = !0;
    }
  });
  return r.absent ? "absent" : s;
}

async function Te(e, n, r) {
  if (n !== void 0 && eit(e, [ te ]) !== void 0) return tn(n, e, r);
  let s = H(e, te), f = H(e, "order"), m = H(e, "stateOrder"), g = H(e, "group"), S, y;
  try {
    let [w, C, D, P] = await Promise.all([ re(s), re(f).catch(() => null), re(m).catch(() => null), re(g).catch(() => null) ]);
    if (!w.isFile() || w.size > Z) {
      let R = `rejected:${w.mtimeMs}:${w.size}`;
      if (F().peek(e)?.mtimeKey === R) return null;
      return t(`[jobs] skipping ${X(e)}: state.json is ${w.isFile() ? `too large (${w.size} bytes)` : "not a regular file"}`, {
        level: "warn"
      }), F().noteRejected(e, R), null;
    }
    let I = R => R !== null && R.isFile() && R.size <= Z;
    y = {
      order: I(C),
      stateOrder: I(D),
      group: I(P)
    }, S = `${w.mtimeMs}:${y.order ? C.mtimeMs : 0}:${y.stateOrder ? D.mtimeMs : 0}:${y.group ? P.mtimeMs : 0}`;
  } catch (w) {
    if (W(w)) return Ae(e, r);
    t(`[jobs] ${X(e)}: state.json stat failed \u2014 ${w instanceof Error ? w.message : String(w)}`, {
      level: "warn"
    });
    let C = F().peek(e);
    if (F().shouldReportTransient(e)) i("tengu_bg_state_read_transient", {
      errno: zr(w) ?? b("unknown"),
      had_cache: C !== void 0
    });
    return ke(C, r);
  }
  let h = F().peek(e);
  if (h?.mtimeKey === S) return F().noteHit(e), h.state;
  try {
    let [w, C, D, P] = await Promise.all([ ge(s, "utf-8"), y.order ? ge(f, "utf-8").catch(() => null) : Promise.resolve(null), y.stateOrder ? ge(m, "utf-8").catch(() => null) : Promise.resolve(null), y.group ? ge(g, "utf-8").catch(() => null) : Promise.resolve(null) ]), I = Y(w), R = we().safeParse(I);
    if (!R.success) return t(`[jobs] skipping ${X(e)}: state.json schema validation failed \u2014 ${R.error.message}`, {
      level: "warn"
    }), F().noteRejected(e, S), null;
    let N = C !== null ? Number(C) : void 0, k = D !== null ? Number(D) : void 0, L = we().in.shape, G = I !== null && typeof I === "object" ? Object.entries(I).filter(([ie]) => !Object.hasOwn(L, ie)) : [], V = {
      ...Object.fromEntries(G),
      ...R.data
    };
    if (Number.isFinite(N)) V = {
      ...V,
      sortOrder: N
    };
    if (Number.isFinite(k)) V = {
      ...V,
      stateSortOrder: k
    };
    if (P !== null && P.trim()) V = {
      ...V,
      group: P.trim()
    };
    if (V.group !== void 0) V = {
      ...V,
      group: ye(V.group)
    };
    return F().noteParsed(e, S, V), V;
  } catch (w) {
    if (W(w)) return Ae(e, r);
    if (t(`[jobs] ${X(e)}: state.json read/parse failed \u2014 ${w instanceof Error ? w.message : String(w)}`, {
      level: "warn"
    }), F().shouldReportTransient(e)) i("tengu_bg_state_read_transient", {
      errno: zr(w) ?? b("unknown"),
      had_cache: h !== void 0
    });
    return ke(h, r);
  }
}

async function X8t(e, n) {
  Lp(e);
  let r = await Yr(e, n).catch(() => null);
  if (r !== null && r.state !== "done" && r.state !== "stopped" && r.state !== "blocked" && r.state !== "failed") await J(50), 
  Lp(e), r = await Yr(e, n).catch(() => null) ?? r;
  return r;
}

function ee() {
  return H(QM(), "pins.json");
}

var rn = 5e3;

async function u4e(e) {
  if (e) return on(e);
  try {
    let n = await re(ee());
    if (!n.isFile() || n.size > Z) {
      if (!n.isFile()) await he();
      return new Set;
    }
    return xe(await ge(ee(), "utf-8"));
  } catch (n) {
    if (W(n)) return await Tn(ee(), _([])).catch(r => {
      if (!W(r)) ol(r);
    }), new Set;
    return new Set;
  }
}

async function on(e) {
  let n = await Cmr(e, Fe.jobPins(), {
    cap: Z,
    screens: lt(),
    screenKey: ee(),
    heal: he
  });
  return xe(n ?? void 0);
}

function lt() {
  return Amr.of(B().host).pins;
}

function xe(e) {
  if (e === void 0 || e.length > Z) return new Set;
  let n;
  try {
    n = Y(e);
  } catch {
    return new Set;
  }
  if (!Array.isArray(n)) return new Set;
  return new Set(n.filter(r => typeof r === "string"));
}

async function he(e) {
  let n = await re(ee()).catch(() => {});
  if (n === void 0 || n.isFile() && !(e?.evenRegular && n.size > Z)) return !1;
  return await ce(ee(), {
    recursive: !0,
    force: !0
  }).catch(() => {}), !0;
}

async function JQ(e, n, r, s, f) {
  let m = to(e), g = await Yr(m, s);
  if (!g) return !1;
  if (g.name === n) return !0;
  Lp(m);
  let S = await Yr(m, s) ?? g;
  if (S.name === n || r === "auto" && S.name) return !0;
  if (!ut(S, f)) return !1;
  return Rl(m, {
    ...S,
    name: n,
    nameSource: r,
    updatedAt: (new Date).toISOString()
  }, s).then(() => !0, y => {
    if (!W(y)) ol(y);
    return !1;
  });
}

async function J8t(e, n, r) {
  let s = to(e), f = await Yr(s, r);
  if (!f) return !1;
  if (f.color === n) return !0;
  Lp(s);
  let m = await Yr(s, r) ?? f;
  if (m.color === n) return !0;
  return Rl(s, {
    ...m,
    color: n,
    updatedAt: (new Date).toISOString()
  }, r).then(() => !0, g => {
    if (!W(g)) ol(g);
    return !1;
  });
}

function Lmr() {
  return tY().relocatedCwd;
}

async function Q8t(e, n) {
  let r = a.CLAUDE_JOB_DIR;
  if (!r || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  tY().relocatedCwd = e, Lp(r);
  let s = await Yr(r, n), f = s?.worktreePath ? s.originCwd : e;
  if (!s || s.cwd === e && s.originCwd === f) return;
  Lp(r);
  let m = await Yr(r, n) ?? s;
  await Rl(r, {
    ...m,
    cwd: e,
    originCwd: m.worktreePath ? m.originCwd : e,
    updatedAt: (new Date).toISOString()
  }, n).catch(g => {
    if (!W(g)) ol(g);
  });
}

async function Pso(e, n, r) {
  let s = a.CLAUDE_JOB_DIR;
  if (!s || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  Lp(s);
  let f = await Yr(s, r);
  if (!f || f.resumeSessionId === e && f.linkScanPath === n) return;
  Lp(s);
  let m = await Yr(s, r) ?? f;
  await Rl(s, {
    ...m,
    resumeSessionId: e,
    linkScanPath: n,
    linkScanOffset: 0,
    updatedAt: (new Date).toISOString()
  }, r).catch(g => {
    if (!W(g)) ol(g);
  });
}

async function bNe(e, n, {includeSettled: r = !1} = {}) {
  let s = a.CLAUDE_JOB_DIR;
  if (!s || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await p4e(async () => {
    Lp(s);
    let f = await Yr(s, n);
    if (!f?.inFlight || da(f) && !r || f.tempo === "active") return;
    let m = f.inFlight;
    if (e.count === m.tasks && (e.drainableMonitors ?? 0) === (m.drainableMonitors ?? 0) && e.kinds.length === m.kinds.length && e.kinds.every(g => m.kinds.includes(g))) return;
    await Rl(s, {
      ...f,
      inFlight: {
        tasks: e.count,
        queued: m.queued,
        kinds: [ ...e.kinds ],
        ...e.drainableMonitors !== void 0 && e.drainableMonitors > 0 && {
          drainableMonitors: e.drainableMonitors
        },
        ...m.wake !== void 0 && {
          wake: m.wake
        }
      },
      updatedAt: (new Date).toISOString()
    }, n).catch(g => {
      if (!W(g)) ol(g);
    });
  });
}

function ut(e, n) {
  if (n === void 0 || !e.name) return !0;
  if (e.nameSource === "auto" || e.nameSource === "collision") return !0;
  return n.includes(pi(e.name));
}

async function iP(e, n, r, s, f, m, g) {
  let S = a.CLAUDE_JOB_DIR;
  if (!S || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await p4e(async () => {
    Lp(S);
    let y = await Yr(S, f);
    if (!y?.respawnFlags) return;
    if (g && !g(y.respawnFlags)) return;
    let h = [ e, ...n ], w = R => {
      let N = [];
      for (let k = 0; k < R.length; k++) {
        let L = R[k];
        if (h.some(G => L === G || L.startsWith(`${G}=`))) {
          if (L.indexOf("=") === -1 && R[k + 1] !== void 0) k++;
          continue;
        }
        N.push(L);
      }
      if (r === null) return N;
      return [ ...N, ...eE(e, r) ];
    }, C = w(y.respawnFlags);
    if (C.length === y.respawnFlags.length && C.every((R, N) => R === y.respawnFlags[N])) return;
    Lp(S);
    let D = await Yr(S, f) ?? y, P = D.respawnFlags ?? y.respawnFlags;
    if (g && !g(P)) return;
    let I = ut(D, m);
    await Rl(S, {
      ...D,
      ...I ? s : {},
      respawnFlags: w(P),
      updatedAt: (new Date).toISOString()
    }, f).catch(R => {
      if (!W(R)) ol(R);
    });
  });
}

async function Iso(e, n, r) {
  let s = a.CLAUDE_JOB_DIR;
  if (!s || a.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await p4e(async () => {
    Lp(s);
    let f = await Yr(s, r);
    if (!f?.respawnFlags) return;
    let m = eE(e, n);
    for (let S = 0; S <= f.respawnFlags.length - m.length; S++) if (m.every((y, h) => f.respawnFlags[S + h] === y)) return;
    Lp(s);
    let g = await Yr(s, r) ?? f;
    await Rl(s, {
      ...g,
      respawnFlags: [ ...g.respawnFlags ?? [], ...m ],
      updatedAt: (new Date).toISOString()
    }, r).catch(S => {
      if (!W(S)) ol(S);
    });
  });
}

async function Ie(e, n) {
  await ce(e, {
    force: !0
  });
  let r = await iL(e, n);
  try {
    await ls(r, e);
  } catch (s) {
    throw await ce(r, {
      force: !0
    }).catch(() => {}), s;
  }
}

async function Ce(e, n, r) {
  let s = await e.write(n, r, {
    parent: "mustExist",
    mode: 438 & ~process.umask()
  });
  if (!s.ok) {
    let f = Zf(s.error);
    throw Object.assign(new x(`[jobs] v5 sidecar write failed: ${yt(s.error)}`, "[jobs] v5 sidecar write failed"), f !== void 0 ? {
      code: f
    } : {});
  }
}

async function Oso(e, n, r) {
  let s = z() && r ? eit(e, [ "order" ]) : void 0;
  if (r && s) await Ce(r, s, String(n)); else await Ie(H(e, "order"), String(n));
  Lp(e);
}

async function Mso(e, n, r) {
  let s = z() && r ? eit(e, [ "stateOrder" ]) : void 0;
  if (r && s) await Ce(r, s, String(n)); else await Ie(H(e, "stateOrder"), String(n));
  Lp(e);
}

async function aHn(e, n, r) {
  let s = H(e, "group"), f = ye(n), m = z() && r ? eit(e, [ "group" ]) : void 0;
  if (r && m) if (f) await Ce(r, m, f); else {
    let g = await r.delete(m);
    if (!g.ok) throw new x(`[jobs] v5 sidecar delete failed: ${g.error.code}`, "[jobs] v5 sidecar delete failed");
  } else if (f) await Ie(s, f); else await ce(s, {
    force: !0
  });
  Lp(e);
}

async function Hso(e) {
  let n = H(QM(), ".order");
  await Pe(QM(), {
    recursive: !0
  });
  await using r = await Ja(n, {
    realpath: !1,
    stale: 5e3,
    retries: {
      retries: 5,
      minTimeout: 20
    },
    onCompromised: s => t(`jobs/.order lock compromised (likely process suspend or slow fs): ${s}`, {
      level: "error"
    })
  });
  return await e();
}

var ct = Mg();

function p4e(e) {
  return ct.run("own-state.json", e);
}

function lHn(e, n, r) {
  return ct.run("pins.json", async () => {
    if (z() && r) return an(e, n, r);
    let s = ee();
    await Pe(Ht(s), {
      recursive: !0
    });
    await using f = await Ja(s, {
      realpath: !1,
      stale: rn,
      retries: {
        retries: 5,
        minTimeout: 20
      },
      onCompromised: g => t(`pins.json lock compromised (likely process suspend or slow fs): ${g}`, {
        level: "error"
      })
    });
    let m = await u4e();
    if (n ? m.has(e) : !m.has(e)) return;
    if (n) m.add(e); else m.delete(e), await ce(H(to(e), "order")).catch(g => {
      if (!W(g)) throw g;
    }), Lp(to(e));
    await Tn(s, _([ ...m ], null, 2));
  });
}

async function an(e, n, r) {
  let s = y => {
    let h = xe(y?.value);
    if (n ? h.has(e) : !h.has(e)) return {
      skip: !0,
      result: !1
    };
    if (n) h.add(e); else h.delete(e);
    return {
      write: _([ ...h ], null, 2),
      result: !0
    };
  }, f = lt(), m = await r.statMeta(Fe.jobPins());
  if (m.ok && m.value.size > Z) await he({
    evenRegular: !0
  }), f.delete(ee()); else if (!m.ok && Ee(m.error) !== void 0) await he(), f.delete(ee());
  let g = {
    publishDiscipline: "atomic",
    mode: 438 & ~process.umask()
  }, S = await r.updateText(Fe.jobPins(), s, g);
  if (!S.ok && await he()) S = await r.updateText(Fe.jobPins(), s, g);
  if (!S.ok) throw new x(`[jobs] v5 pins update failed: ${S.error.code}`, "[jobs] v5 pins update failed");
  if (!n && S.value.result === !0) {
    let y = st(e, [ "order" ]);
    if (y) {
      let h = await r.delete(y);
      if (!h.ok) t(`[jobs] v5 order sidecar release failed after unpin: ${h.error.code}`, {
        level: "warn"
      });
    } else await ce(H(to(e), "order")).catch(h => {
      if (!W(h)) t(`[jobs] order sidecar release failed after unpin: ${l(h)}`, {
        level: "warn"
      });
    });
    Lp(to(e));
  }
}

async function QA(e, n, r) {
  if (n) return dn(n, e, r);
  let s;
  try {
    s = await Gt(QM(), {
      withFileTypes: !0
    });
  } catch (S) {
    if (XQ(E(S))) r?.();
    return [];
  }
  let [f, m] = await Promise.all([ u4e(), Promise.all(s.filter(S => S.isDirectory()).map(async S => {
    let y = await Yr(H(QM(), S.name));
    return y ? {
      id: S.name,
      state: y
    } : null;
  })) ]), g = m.filter(S => S !== null).map(S => f.has(S.id) ? {
    ...S,
    state: {
      ...S.state,
      pinned: !0
    }
  } : S);
  return e ? nit(g, e) : g;
}

async function sn(e) {
  let n = [], r;
  do {
    let s = await e.listEntries({
      namespace: "job"
    }, r === void 0 ? {
      skipScopeStats: !0
    } : {
      cursor: r,
      skipScopeStats: !0
    });
    if (!s.ok) return {
      ok: !1,
      error: s.error
    };
    for (let f of s.value.items) if (f.kind === "scope" && f.scope.namespace === "job" && f.scope.jobId !== void 0 && f.scope.relPath === void 0 && mr(f.scope.jobId)) n.push(f.scope.jobId);
    r = s.value.cursor;
  } while (r !== void 0);
  return {
    ok: !0,
    ids: n
  };
}

async function dn(e, n, r) {
  let s = await sn(e);
  if (!s.ok) {
    if (Mmr(s.error)) r?.();
    return [];
  }
  let f = s.ids, [m, g] = await Promise.all([ u4e(e), Promise.all(f.map(async y => {
    let h = await Yr(to(y), e);
    return h ? {
      id: y,
      state: h
    } : null;
  })) ]), S = g.filter(y => y !== null).map(y => m.has(y.id) ? {
    ...y,
    state: {
      ...y.state,
      pinned: !0
    }
  } : y);
  return n ? nit(S, n) : S;
}

function nit(e, n) {
  let r = Date.now();
  return e.map(s => {
    if (da(s.state)) return s;
    if (n.has(s.id)) return s;
    if (s.state.keptBy !== void 0 && pn(s.state)) return s;
    if (r - Date.parse(s.state.createdAt) < ln) return s;
    return {
      ...s,
      state: un(s.state)
    };
  });
}

var ln = 5e3;

function un(e) {
  if (oit(e)) return {
    ...e,
    tempo: "blocked",
    inFlight: void 0
  };
  return {
    ...e,
    state: "failed",
    tempo: "idle",
    needs: void 0,
    block: void 0,
    inFlight: void 0,
    detail: e.detail.replace(/; respawning$/, "")
  };
}

var SNe = "starting\u2026", ub = "send a prompt to start";

function rit(e) {
  return e.needs !== void 0 && e.needsOverlay === e.needs;
}

var f4e = `(idle \u2014 ${ub})`, wNe = [ "starting", "resuming", "adopted", "crashed" ], bRt = 1728e5, cn = "ended while the background service was off";

function ibe(e) {
  let n = (new Date).toISOString();
  return {
    state: "working",
    detail: e.detail !== void 0 ? ds(e.detail) : SNe,
    tempo: e.tempo ?? "active",
    needs: e.needs,
    inFlight: e.inFlight,
    output: null,
    children: null,
    linkScanOffset: 0,
    linkScanPath: e.linkScanPath,
    template: e.template.name,
    routine: e.routine,
    respawnFlags: e.respawnFlags ?? [],
    bgIsolation: e.bgIsolation,
    providerEnv: e.providerEnv && nus(e.providerEnv, e.cwd),
    sessionPermissionRules: e.sessionPermissionRules,
    memoryToggledOff: e.memoryToggledOff,
    autoMemoryOffThisSession: e.autoMemoryOffThisSession,
    forkSourceAlive: e.forkSourceAlive,
    forkBoundaryAt: e.forkBoundaryAt,
    forkSessionId: e.forkSessionId,
    forkParentSessionId: e.forkParentSessionId,
    interactiveLineage: e.interactiveLineage,
    intent: e.intent,
    displayIntent: e.displayIntent,
    name: e.name,
    nameSource: e.nameSource,
    color: P$e({
      userOverride: e.color,
      agentDefinitionColor: e.template.color
    }),
    initialPrompt: e.template.initialPrompt,
    sessionId: e.sessionId,
    resumeSessionId: e.sessionId,
    daemonShort: e.sessionId.slice(0, 8),
    cwd: e.cwd,
    createdAt: n,
    updatedAt: n,
    firstTerminalAt: null,
    worktreePath: e.worktreePath,
    worktreeBranch: e.worktreeBranch,
    worktreeHookBased: e.worktreeHookBased,
    originCwd: e.originCwd,
    backend: "daemon"
  };
}

async function Dso(e, n, r) {
  if (n.length === 0) return e;
  let s = new Set(e.map(h => h.id)), f = n.filter(h => at.test(h.short) && !s.has(h.short) && h.source !== "spare" && !h.dying);
  if (f.length === 0) return e;
  let m = await i0({
    silent: !0
  }, r), g = await Promise.all(f.map(h => {
    let w = m.workers[h.short];
    return sHn(h.pid, w?.pid === h.pid ? w.procStart : void 0);
  }));
  for (let [h, w] of f.entries()) if (g[h] !== "live") {
    if (t(`[adoptRosterOrphans] pruned dead record ${w.short} (${g[h]})`), F().shouldReportPruned(w.short)) i("tengu_bg_roster_orphan_pruned", {
      reason: c(g[h] ?? "dead_pid")
    });
  } else F().notePruneCandidateLive(w.short);
  let S = f.filter((h, w) => g[w] === "live");
  if (S.length === 0) return e;
  let y = S.map(h => {
    let w = {
      ...ibe({
        template: {
          name: h.agent ?? "bg",
          description: ""
        },
        routine: h.routine,
        intent: h.intent,
        name: h.name,
        detail: h.detail,
        ...h.tempo === "active" && (h.state === "running" || wNe.includes(h.state)) ? h.routine ? {
          tempo: "idle"
        } : {
          tempo: "blocked",
          needs: ub
        } : {
          tempo: h.tempo,
          needs: h.needs
        },
        sessionId: WC(h.sessionId),
        cwd: WC(h.cwd),
        worktreePath: h.worktreePath === void 0 ? void 0 : WC(h.worktreePath)
      }),
      createdAt: new Date(h.createdAt ?? h.startedAt).toISOString(),
      daemonShort: h.short,
      state: wNe.includes(h.state) ? "working" : h.state,
      ...HT(h.state) && {
        inFlight: {
          tasks: 0,
          queued: 0,
          kinds: []
        }
      }
    }, C = to(h.short), D = r ? st(h.short, [ te ]) : void 0;
    if (r && D) r.write(D, _(w), {
      precondition: {
        type: "ifAbsent"
      },
      mode: 384
    }).then(P => {
      if (P.ok) i("tengu_bg_roster_orphan_adopted", {}); else if (P.error.code !== "AlreadyExists") ol(new x(`[jobs] v5 orphan seed write failed: ${P.error.code}`, "[jobs] v5 orphan seed write failed"));
    }); else Pe(C, {
      recursive: !0
    }).then(() => OG(H(C, "state.json"), _(w), 384)).then(() => i("tengu_bg_roster_orphan_adopted", {})).catch(P => {
      if (E(P) !== "EEXIST") ol(P);
    });
    return {
      id: h.short,
      state: w
    };
  });
  return [ ...e, ...y ];
}

function R_(e) {
  if (e === "done") return "success";
  if (e === "failed") return "failure";
  if (e === "stopped") return "stopped";
  return null;
}

function HT(e) {
  return R_(e) !== null;
}

function da(e) {
  return HT(e.state) && e.tempo !== "active";
}

function pn(e) {
  return e.intent === "" && e.needs === ub && e.tempo === "blocked" && !da(e);
}

function tv(e) {
  return e.template === "exec" && e.respawnFlags.length === 0;
}

function oit(e) {
  return e.state === "blocked" && !tv(e);
}

function SRt(e) {
  return e.backend === "daemon" && !tv(e);
}

function Kre(e) {
  let n = e.originCwd || (e.cwd.match(/^(.+?)[/\\]\.claude[/\\]worktrees[/\\]/)?.[1] ?? e.cwd);
  return WC(n);
}

function Z8t(e, n) {
  if (e.backend === "remote") return !0;
  let r = Kt(n, Kre(e));
  return r.split(/[/\\]/, 1)[0] !== ".." && !it(r);
}

function sit(e) {
  let n = r => r?.trim().toLowerCase().startsWith("/loop") ?? !1;
  return n(e.intent) || n(e.initialPrompt);
}

function nY(e) {
  return e.routine !== void 0 || e.selfWake === !0 || (e.inFlight?.kinds.includes("session_cron") ?? !1) || sit(e);
}

function m4e(e, n, r, s, f) {
  let m = to(e);
  return Yr(m, f).then(async g => {
    if (!g || da(g) || n === "failed" && oit(g)) return "none";
    let S = Date.now(), y = new Date(S).toISOString(), h = s?.resumable === "auto-resume" && n === "failed" && !tv(g) && S - Date.parse(g.updatedAt) > bRt;
    return await Rl(m, {
      ...g,
      state: h ? "stopped" : n === "crashed" ? "failed" : n,
      detail: h ? cn : n === "stopped" ? "stopped" : n === "failed" ? (g.detail || r).replace(/; respawning$/, "") : r,
      tempo: "idle",
      inFlight: void 0,
      needs: void 0,
      updatedAt: y,
      firstTerminalAt: g.firstTerminalAt ?? (h ? g.updatedAt : y),
      lastTerminalAt: h ? g.updatedAt : y,
      ...s?.resumable === "auto-resume" && n === "failed" && (h ? {
        deadEpochReapedAt: y
      } : {
        reapedMidWorkAt: g.updatedAt
      }),
      ...s?.resumable === "wake-only" && n === "failed" && {
        reapedUnsettledAt: g.updatedAt
      }
    }, f), h ? "dead-epoch" : "settled";
  }).catch(g => (ol(g), "none"));
}

export { Amr, Cmr, s4e, cRt, hso, Yst, Gcs, Vcs, Rmr, Kcs, Xd, W8t, XM, qcs, VQ, tHn, Xst, xmr, yso, Jst, _so, Gre, bso, nHn, uRt, pRt, Qst, fRt, i4e, z8t, mRt, yNe, a4e, gRt, l4e, hRt, d4e, Sso, rHn, yRt, Pmr, Ycs, wso, _Ne, vso, Eso, c4e, oHn, Imr, Omr, _Rt, i0, XA, KQ, sHn, G8t, qQ, kso, Xcs, Tce, Tso, YQ, Ace, eE, V8t, K8t, Jcs, iHn, Aso, Zst, Qcs, XQ, Mmr, JM, JA, q8t, Hmr, QM, to, ym, eit, tit, Cso, Dmr, Rl, ol, Y8t, Vre, Lp, Rso, Yr, xso, X8t, u4e, JQ, J8t, Lmr, Q8t, Pso, bNe, iP, Iso, Oso, Mso, aHn, Hso, p4e, lHn, QA, nit, SNe, ub, rit, f4e, wNe, bRt, ibe, Dso, R_, HT, da, tv, oit, SRt, Kre, Z8t, sit, nY, m4e, Zcs, Lso, eus, tus, Nso, g4e, $so, iit, wRt };
